import React, {Component} from 'react';
import {unsafeWindow} from "$";
import {Checkbox, Field, Form, Input} from "@alifd/next";
import CreateTable from "../../../../Utils/CreateTable.jsx";

class TableTool extends Component {
    field = new Field(this);

    render() {
        const {init, validate} = this.field;
        return (<div>
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
                <div className={"box-grid-2"}>
                    <Form.Submit onClick={() => {
                        validate();
                        CreateTable(this.field.getValues(), false);
                    }}>仅生成表格</Form.Submit>
                    <Form.Submit type={"primary"} onClick={() => {
                        CreateTable(this.field.getValues(), true);
                    }}>创建数据源并生成表格</Form.Submit>
                </div>
            </Form>
        </div>);
    }
}

export default TableTool;