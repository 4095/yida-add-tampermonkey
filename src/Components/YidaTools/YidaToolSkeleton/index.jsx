import React from 'react';
import {GM_addStyle, unsafeWindow} from "$";
import ComponentsBox from "./ComponentsBox/index.jsx";
import JsApiBox from "./JsApiBox/index.jsx";
import DataSourceApiBox from "./DataSourceApiBox/index.jsx";
import CommonCodeBox from "./CommonCodeBox/index.jsx";
import About from "./About/index.jsx";
import SelectFormBox from "./SelectFormBox/index.jsx";

const YidaToolSkeleton = () => {
    GM_addStyle(`
    .next-tabs-tabpane {
        display: none;
        min-height: 50px;
        outline: none !important;
        outline-offset: 0 !important;
        -webkit-box-shadow: none;
        box-shadow: none;
        padding: 0 12px;
    }`);

    return (
        <unsafeWindow.Deep.Tab shape={"text"} size="small">
            <unsafeWindow.Deep.Tab.Item title="组件" key="1">
                {ComponentsBox()}
            </unsafeWindow.Deep.Tab.Item>
            <unsafeWindow.Deep.Tab.Item title="JS-API" key="2">
                {JsApiBox()}
            </unsafeWindow.Deep.Tab.Item>
            <unsafeWindow.Deep.Tab.Item title="跨应用数据源API" key="3">
                {DataSourceApiBox()}
            </unsafeWindow.Deep.Tab.Item>
            <unsafeWindow.Deep.Tab.Item title="常用代码" key="4">
                {CommonCodeBox()}
            </unsafeWindow.Deep.Tab.Item>
            <unsafeWindow.Deep.Tab.Item title="查询表单" key="5">
                <SelectFormBox/>
            </unsafeWindow.Deep.Tab.Item>
            <unsafeWindow.Deep.Tab.Item title="关于我们" key="6">
                {About()}
            </unsafeWindow.Deep.Tab.Item>
        </unsafeWindow.Deep.Tab>
    )
};

export default YidaToolSkeleton;