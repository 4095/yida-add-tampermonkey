import React from 'react';
import '../index.css';
import {Balloon, Button, Message, Table} from "@alifd/next";
import CopyIcon from "../../../../Icons/CopyIcon/index.jsx";
import {GM_setClipboard, unsafeWindow} from "$";
import InterfaceIcon from "../../../../Icons/InterfaceIcon/index.jsx";
import SetDataPool from "../../../../Utils/SetDataPool.jsx";

const DataSourceApiBox = () => {
    const DataSourceApiData = [
        {
            title: '表单相关 API',
            key: "1",
            content: [{
                apiName: '新建表单实例',
                InterfacePath: '/v1/form/saveFormData.json',
                requestType: 'POST',
                params: [{
                    parameterName: "formUuid",
                    description: "表单 ID",
                    requiredFields: "是"
                }, {
                    parameterName: "appType",
                    description: "应用 ID",
                    requiredFields: "是"
                }, {
                    parameterName: "formDataJson",
                    description: "表单数据",
                    requiredFields: "是"
                }]
            },
                {
                    apiName: '更新表单中指定组件值',
                    InterfacePath: '/v1/form/updateFormData.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "formInstId",
                        description: "要更新的表单数据 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "updateFormDataJson",
                        description: "要更新的表单组件值，必填",
                        requiredFields: "是"
                    }, {
                        parameterName: "useLatestVersion",
                        description: "使用最新的表单版本进行更新",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '删除表单实例',
                    InterfacePath: '/v1/form/deleteFormData.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "formInstId",
                        description: "要删除的表单数据 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '根据表单实例 ID 查询表单实例详情',
                    InterfacePath: '/v1/form/getFormDataById.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formInstId",
                        description: "要查询的表单数据 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '根据条件搜索表单实例 ID 列表',
                    InterfacePath: '/v1/form/searchFormDataIds.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "searchFieldJson",
                        description: "根据表单内组件值查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "currentPage",
                        description: "当前页",
                        requiredFields: "否"
                    }, {
                        parameterName: "pageSize",
                        description: "每页记录数",
                        requiredFields: "否"
                    }, {
                        parameterName: "originatorId",
                        description: "根据数据提交人工号查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "createFrom",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "createTo",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedFrom",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedTo",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "dynamicOrder",
                        description: "排序",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '根据条件搜索表单实例详情列表',
                    InterfacePath: '/v1/form/searchFormDatas.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "searchFieldJson",
                        description: "根据表单内组件值查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "currentPage",
                        description: "当前页",
                        requiredFields: "否"
                    }, {
                        parameterName: "pageSize",
                        description: "每页记录数",
                        requiredFields: "否"
                    }, {
                        parameterName: "originatorId",
                        description: "根据数据提交人工号查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "createFrom",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "createTo",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedFrom",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedTo",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "dynamicOrder",
                        description: "排序",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '获取表单定义',
                    InterfacePath: '/v1/form/getFormComponentDefinationList.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "version",
                        description: "表单版本",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '获取子表单数据',
                    InterfacePath: '/v1/form/listTableDataByFormInstIdAndTableId.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "formInstanceId",
                        description: "要查询的实例的实例 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "tableFieldId",
                        description: "需要查找的子表单组件的唯一标识",
                        requiredFields: "是"
                    }, {
                        parameterName: "currentPage",
                        description: "当前页",
                        requiredFields: "否"
                    }, {
                        parameterName: "pageSize",
                        description: "每页记录数",
                        requiredFields: "否"
                    }]
                }
            ]
        }, {
            title: '流程相关 API',
            key: "2",
            content: [{
                apiName: '流程发起',
                InterfacePath: '/v1/process/startInstance.json',
                requestType: 'POST',
                params: [{
                    parameterName: "processCode",
                    description: "流程 code",
                    requiredFields: "是"
                }, {
                    parameterName: "formUuid",
                    description: "表单 ID",
                    requiredFields: "是"
                }, {
                    parameterName: "formDataJson",
                    description: "表单数据",
                    requiredFields: "是"
                }, {
                    parameterName: "deptId",
                    description: "发起人所在部门号",
                    requiredFields: "否"
                }]
            },
                {
                    apiName: '根据条件搜索流程实例 ID',
                    InterfacePath: '/v1/process/getInstanceIds.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "searchFieldJson",
                        description: "根据表单内组件值查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "taskId",
                        description: "",
                        requiredFields: "否"
                    }, {
                        parameterName: "instanceStatxus",
                        description: "实例状态",
                        requiredFields: "否"
                    }, {
                        parameterName: "approvedResult",
                        description: "流程审批结果",
                        requiredFields: "否"
                    }, {
                        parameterName: "currentPage",
                        description: "当前页",
                        requiredFields: "否"
                    }, {
                        parameterName: "pageSize",
                        description: "每页记录数",
                        requiredFields: "否"
                    }, {
                        parameterName: "originatorId",
                        description: "根据流程发起人工号查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "createFrom",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "createTo",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedFrom",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedTo",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '根据搜索条件获取实例详情列表',
                    InterfacePath: '/v1/process/getInstances.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "formUuid",
                        description: "表单 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "searchFieldJson",
                        description: "根据表单内组件值查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "taskId",
                        description: "任务 ID",
                        requiredFields: "否"
                    }, {
                        parameterName: "instanceStatus",
                        description: "实例状态",
                        requiredFields: "否"
                    }, {
                        parameterName: "approvedResult",
                        description: "流程审批结果",
                        requiredFields: "否"
                    }, {
                        parameterName: "currentPage",
                        description: "当前页",
                        requiredFields: "否"
                    }, {
                        parameterName: "pageSize",
                        description: "每页记录数",
                        requiredFields: "否"
                    }, {
                        parameterName: "originatorId",
                        description: "根据数据提交人工号查询",
                        requiredFields: "否"
                    }, {
                        parameterName: "createFrom",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "createTo",
                        description: "createFrom 和 createTo 两个时间构造一个时间段。查询在该时间段创建的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedFrom",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }, {
                        parameterName: "modifiedTo",
                        description: "modifiedFrom 和 modifiedTo 构成一个时间段，查询在该时间段有修改的数据列表",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '根据实例 ID 获取流程实例详情',
                    InterfacePath: '/v1/process/getInstanceById.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "processInstanceId",
                        description: "流程实例 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '删除流程实例',
                    InterfacePath: '/v1/process/deleteInstance.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "processInstanceId",
                        description: "流程实例 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '终止流程实例',
                    InterfacePath: '/v1/process/terminateInstance.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "processInstanceId",
                        description: "流程实例 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '执行单个任务接口',
                    InterfacePath: '/v1/task/executeTask.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "taskId",
                        description: "任务 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "procInstId",
                        description: "实例 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "outResult",
                        description: "审批结果",
                        requiredFields: "是"
                    }, {
                        parameterName: "remark",
                        description: "审批意见",
                        requiredFields: "是"
                    }, {
                        parameterName: "formDataJson",
                        description: "表单数据",
                        requiredFields: "否"
                    }, {
                        parameterName: "noExecuteExpressions",
                        description: "是否不执行校验&关联操作",
                        requiredFields: "否"
                    }]
                },
                {
                    apiName: '获取审批记录',
                    InterfacePath: '/v1/process/getOperationRecords.json',
                    requestType: 'GET',
                    params: [{
                        parameterName: "processInstanceId",
                        description: "流程实例 ID",
                        requiredFields: "是"
                    }]
                },
                {
                    apiName: '流程实例更新',
                    InterfacePath: '/v1/process/updateInstance.json',
                    requestType: 'POST',
                    params: [{
                        parameterName: "processInstanceId",
                        description: "实例 ID",
                        requiredFields: "是"
                    }, {
                        parameterName: "updateFormDataJson",
                        description: "更新的表单数据",
                        requiredFields: "是"
                    }]
                }
            ]
        }, {
            title: '任务中心相关 API',
            key: "3",
            content: [{
                apiName: '已提交任务',
                InterfacePath: '/v1/process/getMySubmitInApp.json',
                requestType: 'GET',
                params: [{
                    parameterName: "pageSize",
                    description: "每页记录数",
                    requiredFields: "是"
                }, {
                    parameterName: "currentPage",
                    description: "当前页",
                    requiredFields: "是"
                }, {
                    parameterName: "keyword",
                    description: "关键词",
                    requiredFields: "否"
                }]
            }, {
                apiName: '待办任务',
                InterfacePath: '/v1/task/getTodoTasksInApp.json',
                requestType: 'GET',
                params: [{
                    parameterName: "pageSize",
                    description: "每页记录数",
                    requiredFields: "是"
                }, {
                    parameterName: "currentPage",
                    description: "当前页",
                    requiredFields: "是"
                }, {
                    parameterName: "keyword",
                    description: "关键词",
                    requiredFields: "否"
                }]
            }, {
                apiName: '已完成任务',
                InterfacePath: '/v1/task/getDoneTasksInApp.json',
                requestType: 'GET',
                params: [{
                    parameterName: "pageSize",
                    description: "每页记录数",
                    requiredFields: "是"
                }, {
                    parameterName: "currentPage",
                    description: "当前页",
                    requiredFields: "是"
                }, {
                    parameterName: "keyword",
                    description: "关键词",
                    requiredFields: "否"
                }]
            }, {
                apiName: '抄送我的任务（应用纬度）',
                InterfacePath: '/v1/task/getNotifyMeTasksInApp.json',
                requestType: 'GET',
                params: [{
                    parameterName: "pageSize",
                    description: "每页记录数",
                    requiredFields: "是"
                }, {
                    parameterName: "currentPage",
                    description: "当前页",
                    requiredFields: "是"
                }, {
                    parameterName: "keyword",
                    description: "关键词",
                    requiredFields: "否"
                }]
            }]
        }];


    return (
        <div className={'yidaToolSkeletonBox'}>
            <div className={'DataSourceApi-content-InterfacePath'}>
                <div>AppType（变量）</div>
                <div className={'jsApiIcon_Box'} onClick={() => {
                    GM_setClipboard('${window.pageConfig.appType || window.g_config.appKey}')
                    Message.success('复制成功！')
                }}>{CopyIcon('#3c99d8')}</div>
            </div>
            <unsafeWindow.Deep.Menu openMode={'single'} defaultOpenKeys={"0"} embeddable={true}>
                {
                    DataSourceApiData.map((item,index) => {
                        return (
                            <unsafeWindow.Deep.Menu.SubMenu label={item.title} key={index}>
                                {item.content.map((content,index_content) => {
                                    return (
                                        <unsafeWindow.Deep.Menu.PopupItem label={content.apiName} triggerType={'click'} key={`content_${index_content}`}>
                                            <div className={'DataSourceApi-content box-grid-1'}>
                                                <div className={'DataSourceApi-title'}>
                                                    <div
                                                        className={'DataSourceApi-content-apiName'}>{content.apiName}</div>
                                                    <div
                                                        className={'DataSourceApi-content-requestType'}>{content.requestType}</div>
                                                </div>
                                                <div className={'DataSourceApi-content-InterfacePath'}>
                                                    <div>{content.InterfacePath}</div>
                                                    <div className={'jsApiIcon_Box'} onClick={() => {
                                                        if (content.InterfacePath) {
                                                            GM_setClipboard('`/${window.pageConfig.appType || window.g_config.appKey}' + content.InterfacePath + '`');
                                                            Message.success('复制成功！')
                                                        } else Message.success('复制失败，请联系开发者！')
                                                    }}>
                                                        <Balloon trigger={CopyIcon('#3c99d8')}
                                                                             closable={false}
                                                                             align={'t'}>复制
                                                        </Balloon>
                                                    </div>
                                                    <div className={'jsApiIcon_Box'} onClick={() => {
                                                        const {project, skeleton} = AliLowCodeEngine;
                                                        let projectSchema = project.getSchema();
                                                        const pl = SetDataPool(true, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, null, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false)
                                                        const pl2 = SetDataPool(false, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, null, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false)
                                                        projectSchema.componentsTree[0].dataSource.list.push(pl);
                                                        projectSchema.componentsTree[0].dataSource.online.push(pl2);
                                                        project.setSchema(projectSchema);
                                                        const dp = skeleton.getPanel('datapool');
                                                        dp.parent.remove(dp);
                                                        Message.success('数据源添加成功！')
                                                        setTimeout(() => dp.parent.add(dp), 100);
                                                    }}>
                                                        <Balloon trigger={InterfaceIcon('#3c99d8')}
                                                                             closable={false}
                                                                             align={'t'}>一键创建数据源（无数据）
                                                        </Balloon>
                                                    </div>
                                                    <div className={'jsApiIcon_Box'} onClick={() => {
                                                        const {project, skeleton} = AliLowCodeEngine;
                                                        let projectSchema = project.getSchema();
                                                        const pl = SetDataPool(true, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, `{${content.params.map((param) => {
                                                            return `\n  "${param.parameterName}":"",//${param.description}`
                                                        })}\n}`, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false)
                                                        projectSchema.componentsTree[0].dataSource.list.push(pl);
                                                        projectSchema.componentsTree[0].dataSource.online.push(pl);
                                                        project.setSchema(projectSchema);
                                                        const dp = skeleton.getPanel('datapool');
                                                        dp.parent.remove(dp);
                                                        Message.success('数据源添加成功！')
                                                        setTimeout(() => dp.parent.add(dp), 100);
                                                    }}>
                                                        <Balloon trigger={InterfaceIcon('#3c99d8')}
                                                                             closable={false}
                                                                             align={'t'}>一键创建数据源（有数据）
                                                        </Balloon>
                                                    </div>
                                                </div>
                                                <Table dataSource={content.params}>
                                                    <Table.Column title={'参数名'} dataIndex={'parameterName'}/>
                                                    <Table.Column title={'描述'} dataIndex={'description'}/>
                                                    <Table.Column title={'必填'} dataIndex={'requiredFields'}/>
                                                    <Table.Column title={'操作'} cell={(value, index, record) => {
                                                        return <Button type={'primary'} text onClick={() => {
                                                            GM_setClipboard(record.parameterName);
                                                            Message.success('复制成功！')
                                                        }
                                                        }>复制</Button>
                                                    }}/>
                                                </Table>
                                            </div>
                                        </unsafeWindow.Deep.Menu.PopupItem>
                                    )
                                })}
                            </unsafeWindow.Deep.Menu.SubMenu>
                        )
                    })
                }
            </unsafeWindow.Deep.Menu>
        </div>
    );
};

export default DataSourceApiBox;