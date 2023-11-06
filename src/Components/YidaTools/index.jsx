import React from 'react';

import {GM_setClipboard} from "$";
import {Message} from "@alifd/next";

import yidaToolSkeleton from "./YidaToolSkeleton/index.jsx";
import YidaToolIcon from "../../Icons/YidaToolIcon/index.jsx";

const YidaTools = () => {

    AliLowCodeEngine.skeleton.add({
        area: "leftArea",
        type: "PanelDock",
        name: "yidaTool",
        content: yidaToolSkeleton(),
        props: {
            align: "left",
            icon: YidaToolIcon(),
            description: "Yida+"
        },
        panelProps: {
            floatable: true,
            hideTitleBar: false,
            title: "YidaTools",
            width: 400,
            enableDrag: true
        }
    });

    //复制组件按钮
    AliLowCodeEngine.designerCabin.addBuiltinComponentAction({
        name: "Copy",
        content: {
            icon: YidaToolIcon('#ffffff'),
            title: "复制唯一标识",
            action(node) {
                const fieldId = ((node == null ? void 0 : node.propsData) == null ? void 0 : node.propsData.fieldId) || node.id;
                GM_setClipboard(fieldId);
                Message.success(`唯一标识：${fieldId}`);
            }
        },
        important: true,
        condition: true
    });

    document.getElementsByClassName('lc-left-area-bottom')[0].children[0].style.display = 'block';
    console.log("Yida+加载完成！")
};

export default YidaTools;