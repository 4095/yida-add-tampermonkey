import React from 'react';
import '../index.css';
import {Typography} from '@alifd/next';
import DingTalkIcon from "../../../../Icons/DingTalkIcon/index.jsx";
import GithubIcon from "../../../../Icons/GithubIcon/index.jsx";
import GreasyForkIcon from "../../../../Icons/GreasyForkIcon/index.jsx";


const About = () => {
    const {Text} = Typography;
    return (
        <div className={'about_box'}>
            <div>当前版本：</div>
            <Text code>Version 2.2.2</Text>
            <div>作者：</div>
            <div style={{display: "flex", alignItems: "center", gap: 8}}>
                <Text code>Navcoo.Li</Text>
                <a style={{cursor: "pointer"}} target={"_blank"}
                   href={"https://applink.dingtalk.com/page/profile?phone=li78080114"}>{DingTalkIcon('#1296db')}</a>
            </div>
            <div>项目地址：</div>
            <div style={{display: "flex", alignItems: "center", gap: 8}}>
                <a style={{cursor: "pointer"}} target={"_blank"}
                   href={"https://github.com/4095/yida-add-tampermonkey"}>{GithubIcon()}</a>
                <a style={{cursor: "pointer"}} target={"_blank"}
                   href={"https://greasyfork.org/zh-CN/scripts/474556-%E5%AE%9C%E6%90%AD"}>{GreasyForkIcon()}</a>
            </div>
        </div>
    );
};

export default About;