import React from 'react';
import '../index.css';
import {Button, Message} from "@alifd/next";
import {GM_setClipboard} from "$";
import TableTool from "./TableTool.jsx";

const ComponentsBox = () => {
    const componentsData = [
        {
            title: "容器",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "Div"
                }]
            })
        }, {
            title: "选项卡",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "TabsLayout",
                    "props": {
                        "items": [{
                            "primaryKey": "tab_lm4jmqz1",
                            "title": {"zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN"},
                            "defaultActived": true
                        }, {
                            "primaryKey": "tab_lm4jmqz2",
                            "title": {"zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN"}
                        }]
                    },
                    "children": [{
                        "componentName": "Tab",
                        "props": {
                            "primaryKey": "tab_lm4jmqz1",
                            "title": {"zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN"}
                        }
                    }, {
                        "componentName": "Tab",
                        "props": {
                            "primaryKey": "tab_lm4jmqz2",
                            "title": {"zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN"}
                        }
                    }]
                }]
            })
        }, {
            title: "分组",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "PageSection",
                    "props": {
                        "showHeader": true,
                        "title": {"type": "i18n", "en_US": "Group", "zh_CN": "分组", "use": "zh_CN"}
                    }
                }]
            })
        }, {
            title: "按钮",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "Button",
                    "props": {"content": {"use": "zh_CN", "en_US": "Button", "zh_CN": "按 钮", "type": "i18n"}}
                }]
            })
        }, {
            title: "文本",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "Text",
                    "props": {"content": {"type": "i18n", "en_US": "Tips content", "zh_CN": "文本", "use": "zh_CN"}}
                }]
            })
        }, {
            title: "HTML",
            schema: JSON.stringify({
                "componentsTree": [{
                    "componentName": "Html",
                    "props": {"content": "<div>这里可以写html</div>"}
                }]
            })
        }, {
            title: "JSX",
            schema: JSON.stringify({"componentsTree": [{"componentName": "Jsx"}]})
        }, {
            title: "关联表单",
            schema: JSON.stringify({"componentsTree": [{"componentName": "AssociationFormField"}]})
        }
    ];
    return (
        <div className={"box-grid-1"}>
            <div className={"box-grid-2"}>
                {
                    componentsData.map((item) => {
                        return (
                            <Button
                                key={item.title}
                                onClick={() => {
                                    if (item.schema) {
                                        GM_setClipboard(item.schema);
                                        Message.success('复制成功！');
                                    } else Message.error('复制失败，请联系开发者！')
                                }
                                }>
                                {item.title}
                            </Button>
                        )
                    })
                }
            </div>
            <div className={"box-grid-1 border"}>
                <TableTool/>
            </div>
        </div>
    );
};

export default ComponentsBox;