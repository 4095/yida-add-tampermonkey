import React from 'react';
import '../index.css';
import CopyIcon from "../../../../Icons/CopyIcon/index.jsx";
import {Message} from "@alifd/next";
import {GM_setClipboard} from "$";

const JsApiBox = () => {
    const jsApiData = [
        {
        title: "this.reloadDataSource()",
        description: '重新请求所有自动加载设置为 true 的远程 API，该方法也返回一个 Promise',
        code: `this.reloadDataSource().then(res => {\n    this.utils.toast({\n      type: 'success', \n      title: '刷新成功！'\n    });\n  });`
    }, {
        title: "this.utils.dialog()",
        description: '弹出对话框',
        code: `this.utils.dialog({\n  method: 'confirm', // 'alert', 'confirm', 'show'\n  title: 'title',\n  content: 'content', // 如需换行可传入 HTML/JSX 来实现\n  onOk: () => {},\n  onCancel: () => {},\n});`
    }, {
        title: "this.utils.getDateTimeRange(when, type)",
        description: '获取当前或指定日期的开始结束区间时间戳',
        code: `//when:支持时间戳、Date 日期类型，type:'year', 'month', 'week', 'day', 'date', 'hour', 'minute', 'second'\nconst [timeStart, timeEnd] = this.utils.getDateTimeRange(when:number, type:String);	`
    }, {
        title: "this.utils.getLocale()",
        description: '获取当前页面的语言环境',
        code: `const locale = this.utils.getLocale();\n  // 输出：locale: zh_CN`
    }, {
        title: "this.utils.getLoginUserId()",
        description: '获取登录用户userId',
        code: `const userId = this.utils.getLoginUserId();\n  // 输出：userId`
    }, {
        title: "this.utils.getLoginUserName()",
        description: '获取登录用户名称',
        code: `const userName = this.utils.getLoginUserName();\n  // 输出：userName`
    }, {
        title: "this.utils.isMobile()",
        description: '判断当前访问环境是否是移动端',
        code: `this.utils.isMobile()`
    }, {
        title: "this.utils.isSubmissionPage()",
        description: '判断当前页面是否是数据提交页面',
        code: `this.utils.isSubmissionPage()`
    }, {
        title: "this.utils.isViewPage()",
        description: '判断当前页面是否是数据查看页面',
        code: `this.utils.isViewPage()`
    }, {
        title: "this.utils.loadScript()",
        description: '动态加载远程脚本',
        code: `this.utils.loadScript('');`
    }, {
        title: "this.utils.openPage()",
        description: '打开新页面，如果在钉钉环境下，会使用钉钉 API 打开新页面，体验会更友好一些',
        code: `this.utils.openPage('');`
    }, {
        title: "this.utils.previewImage()",
        description: '图片预览，通过这个 API 我们可以实现一个简洁的图片预览效果',
        code: `this.utils.previewImage({ current: '' });`
    }, {
        title: "this.utils.toast()",
        description: '信息提醒，会比 Dialog 对话框更加轻量，弹出后过一段时间会自动消失',
        code: `this.utils.toast({\n  title: 'success', // 'success', 'warning', 'error', 'notice', 'help', 'loading'\n  type: 'success',\n  size: 'large',\n  duration: 2000, // 毫秒, type 为 loding 时无效\n});`
    }];

    return (
        <div className={'box-grid-1 yidaToolSkeletonBox'}>
            {jsApiData.map((item,index) => {
                return (
                    <div className={'jsApiItem_Box'} key={index}>
                        <div>
                            <div className={'jsApiItemTitle_Box'}>
                                <div className={'jsApiItemTitle'}>{item.title}</div>
                                <div className={'jsApiIcon_Box'} onClick={() => {
                                    if (item.code) {
                                        GM_setClipboard(item.code);
                                        Message.success('复制成功！')
                                    } else Message.error('复制失败，请联系开发者！')
                                }}>{CopyIcon('#3c99d8')}</div>
                            </div>
                            <div className={'jsApiItemDescription'}>{item.description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};


export default JsApiBox;