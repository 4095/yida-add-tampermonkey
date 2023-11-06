import React from 'react';
import {GM_setClipboard, unsafeWindow} from "$";
import SetDataPool from "./SetDataPool.jsx";
import {Message} from "@alifd/next";

const CreateTable = (fieldValues, dataSource) => {
    const {project, skeleton} = AliLowCodeEngine;
    let projectSchema = project.getSchema();
    let urlVariable;
    let name;
    let appType = unsafeWindow.pageConfig.appType || unsafeWindow.g_config.appKey;

    // 判断是否是流程
    if (fieldValues.process) {
        if (appType == fieldValues.appKey)
            urlVariable = "`/${window.pageConfig.appType || window.g_config.appKey}/v1/process/getInstances.json`";
        else urlVariable = `"/${appType}/v1/process/getInstances.json"`;
        name = "getInstances"
    } else {
        if (appType == fieldValues.appKey)
            urlVariable = "`/${window.pageConfig.appType || window.g_config.appKey}/v1/form/searchFormDatas.json`";
        else urlVariable = `"/${appType}/v1/form/searchFormDatas.json"`;
        name = "searchFormDatas"
    }

    let parVariable = JSON.stringify({
        formUuid: fieldValues.formUuid, // 表单 ID,
    }, null, 2)

    fetch(`/${fieldValues.appKey}/query/formdesign/getLatestFormWithNavNew.json?formUuid=${fieldValues.formUuid}`)
        .then((res => res.json()))
        .then(({content: {pages}}) => {
            const allComponent = pages[0].componentsTree[0].children[1].children[0].children;
            let tableSchemaObj = {
                "componentsTree": [{
                    "componentName": "TablePc", "props": {
                        "noPadding": true, "columns": [], "dataSourceType": "data", "data": {
                            "type": "JSExpression",
                            "value": "state." + name,
                            "currentPage": 1,
                            "totalCount": 2,
                            "data": []
                        }, "actionColumn": [{
                            "title": {
                                "type": "i18n",
                                "zh_CN": "详情",
                                "en_US": "Detail",
                                "use": "zh_CN"
                            }, "option": "callback"
                        }], "showActionBar": true, "actionBar": [{
                            "title": {
                                "zh_CN": "操作1",
                                "en_US": "Action 1",
                                "type": "i18n",
                                "use": "zh_CN"
                            }, "option": "callback"
                        }, {
                            "title": {
                                "zh_CN": "操作2",
                                "en_US": "Action 2",
                                "type": "i18n",
                                "use": "zh_CN"
                            }, "option": "callback"
                        }], "showSearch": true, "searchBarPlaceholder": {
                            "type": "i18n",
                            "en_US": "Please Input",
                            "zh_CN": "请搜索",
                            "use": "zh_CN"
                        }
                    }
                }]
            }
            const formComponentList = ['TextField', 'TextareaField', 'NumberField', 'RateField', 'RadioField', 'CheckboxField', 'DateField', 'CascadeDateField', 'AttachmentField', 'EmployeeField', 'ImageField', 'SelectField', 'MultiSelectField', 'CascadeSelectField', 'PageSection', 'CountrySelectField', 'DepartmentSelectField', 'AddressField', 'LocationField', 'AssociationFormField', 'DigitalSignatureField', 'SerialNumberField', 'CompanyField'];

            const recursiveSearch = (obj) => {
                if (typeof obj === 'object') {
                    if (obj.hasOwnProperty('componentName')) {
                        if (formComponentList.includes(obj.componentName)) {
                            try {
                                tableSchemaObj.componentsTree[0].props.columns.push({
                                    "dataKey": `${fieldValues.process ? 'data' : 'formData'}.${obj.props.fieldId}`,
                                    "title": {
                                        "zh_CN": obj.props.label.zh_CN,
                                        "en_US": "",
                                        "type": "i18n",
                                        "use": "zh_CN"
                                    },
                                    "width": 100,
                                    "dataType": "text"
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

            if (dataSource) {
                const pl = SetDataPool(true, name, null, "POST", parVariable, urlVariable, true)
                projectSchema.componentsTree[0].dataSource.list.push(pl);
                projectSchema.componentsTree[0].dataSource.online.push(pl);
                project.setSchema(projectSchema);
                const dp = skeleton.getPanel('datapool');
                dp.parent.remove(dp);
                Message.success('数据源添加成功');
                setTimeout(() => dp.parent.add(dp), 100);
                recursiveSearch(allComponent);
            }

            GM_setClipboard(JSON.stringify(tableSchemaObj));
            Message.success('生成成功，请粘贴入页面！')
        })

};

export default CreateTable;