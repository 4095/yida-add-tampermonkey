import React, {Component} from 'react';
import {Button, Checkbox, Field, Form, Icon, Input, Message, Table} from "@alifd/next";
import {GM_setClipboard, unsafeWindow} from "$";
import * as XLSX from "xlsx";


class SelectFormBox extends Component {
    state = {
        tableObj: []
    }
    field = new Field(this);

    openDownloadDialog = (blob, fileName) => {
        if (typeof blob == 'object' && blob instanceof Blob) {
            blob = URL.createObjectURL(blob); // 创建blob地址
        }
        const aLink = document.createElement('a');
        aLink.href = blob;
        // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
        aLink.download = fileName || '';
        let event;
        event = document.createEvent('MouseEvents');
        event.initMouseEvent(
            'click',
            true,
            false,
            unsafeWindow,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        aLink.dispatchEvent(event);
    }

    workbook2blob = (workbook) => {
        // 生成excel的配置项
        const wopts = {
            // 要生成的文件类型
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary',
        };
        const wbout = XLSX.write(workbook, wopts);

        // 将字符串转ArrayBuffer
        function s2ab(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
            return buf;
        }

        const blob = new Blob([s2ab(wbout)], {
            type: 'application/octet-stream',
        });
        return blob;
    }


    render() {
        const {init, validate} = this.field;
        return (
            <div className={'yidaToolSkeletonBox'}>
                <h6 style={{margin: '8px 0'}}>生成表格</h6>
                <Form size={"small"}>
                    <Form.Item>
                        <Input label={"AppKey"}
                               className={"input-style"} {...init('appKey', {
                            initValue: unsafeWindow.pageConfig.appType || unsafeWindow.g_config.appKey, rules: [{
                                required: true, message: "AppKey 不能为空！"
                            }]
                        })}/>
                        {this.field.getError("appKey") ? (<span style={{
                            color: "red"
                        }}>{this.field.getError("appKey").join(",")}</span>) : ("")}
                    </Form.Item>
                    <Form.Item>
                        <Input label={"FormUuid"} className={"input-style"} {...init('formUuid', {
                            rules: [{
                                required: true, message: "FormUuid 不能为空！"
                            }]
                        })}/>
                        {this.field.getError("formUuid") ? (<span style={{
                            color: "red"
                        }}>{this.field.getError("formUuid").join(",")}</span>) : ("")}
                    </Form.Item>
                    <Form.Item>
                        <Checkbox {...init('process', {valueName: "checked"})}>流程</Checkbox>
                    </Form.Item>
                    <Form.Submit style={{width: "100%"}} onClick={() => {
                        validate();
                        // 请求表单
                        let tableObj = [];
                        fetch(`/${this.field.getValue("appKey")}/query/formdesign/getLatestFormWithNavNew.json?formUuid=${this.field.getValue("formUuid")}`)
                            .then((res => res.json()))
                            .then(({content: {pages}}) => {
                                const allComponent = pages[0].componentsTree[0].children[1].children[0].children; //组件id列表

                                const formComponentList = ['TextField', 'TextareaField', 'NumberField', 'RateField', 'RadioField', 'CheckboxField', 'DateField', 'CascadeDateField', 'AttachmentField', 'EmployeeField', 'ImageField', 'SelectField', 'MultiSelectField', 'CascadeSelectField', 'PageSection', 'CountrySelectField', 'DepartmentSelectField', 'AddressField', 'LocationField', 'AssociationFormField', 'DigitalSignatureField', 'SerialNumberField', 'CompanyField'];

                                const recursiveSearch = (obj) => {
                                    if (typeof obj === 'object') {
                                        if (obj.hasOwnProperty('componentName')) {
                                            if (formComponentList.includes(obj.componentName)) {
                                                try {
                                                    tableObj.push({
                                                        "dataKey": obj.props.fieldId,
                                                        "title": obj.props.label.zh_CN,
                                                    })
                                                } catch (e) {
                                                }
                                            }
                                            if (obj.componentName === 'TableField') return;
                                        }
                                        for (let key in obj) {
                                            if (obj.hasOwnProperty(key)) {
                                                recursiveSearch(obj[key]);
                                            }
                                        }
                                    }
                                }
                                recursiveSearch(allComponent);
                                this.setState({
                                    tableObj
                                })
                            })

                    }}>查询</Form.Submit>
                </Form>
                <hr style={{margin: '12px 0'}}/>
                <div style={{display: "flex", alignItems: "center", flexDirection: "row-reverse"}}>
                    <Button type={"primary"} text onClick={() => {
                        // 导出 excel 列名称
                        const sheetHeader = [
                            {
                                title: '名称',
                                value: 'title',
                            },
                            {
                                title: '唯一标识',
                                value: 'dataKey',
                            }
                        ];

                        const result = [];
                        for (let i = 0; i < this.state.tableObj.length; i++) {
                            let item = {};
                            for (let j = 0; j < sheetHeader.length; j++) {
                                item[sheetHeader[j].title] = this.state.tableObj[i][sheetHeader[j].value];
                            }
                            result.push(item);
                        }
                        // 新建空workbook，然后加入worksheet
                        const ws = XLSX.utils.json_to_sheet(result);
                        // 设置每列的列宽，10代表10个字符，注意中文占2个字符
                        ws['!cols'] = [{wch: 40}, {wch: 40}];
                        // 新建book
                        const wb = XLSX.utils.book_new();
                        // 生成xlsx文件(book,sheet数据,sheet命名)
                        XLSX.utils.book_append_sheet(wb, ws, '【表单数据】');
                        // 写文件
                        const workbookBlob = this.workbook2blob(wb);

                        const today = new Date();

                        const year = today.getFullYear();
                        const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1并补零
                        const day = String(today.getDate()).padStart(2, '0'); // 补零以保持两位数

                        const todayDateString = `${year}-${month}-${day}`;

                        this.openDownloadDialog(
                            workbookBlob,
                            `表单数据-${year}-${month}-${day}.xlsx`
                        );
                    }}><Icon type="download"/>下载</Button>
                </div>
                <Table dataSource={this.state.tableObj}>
                    <Table.Column title="名称" dataIndex="title"/>
                    <Table.Column title="唯一标识" dataIndex="dataKey"/>
                    <Table.Column title="操作" cell={(record) => {
                        return <Button text type={"primary"} onClick={() => {
                            GM_setClipboard(record.dataKey);
                            Message.success('复制成功！')
                        }}>复制</Button>
                    }}/>
                </Table>
            </div>);
    }
}

export default SelectFormBox;