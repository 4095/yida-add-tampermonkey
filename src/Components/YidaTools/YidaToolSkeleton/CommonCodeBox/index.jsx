import React from 'react';
import {Message} from "@alifd/next";
import {GM_setClipboard} from "$";
import CopyIcon from "../../../../Icons/CopyIcon/index.jsx";

const CommonCodeBox = () => {
    const CommonCodeData = [
        {
            title: "this.utils.formatter(when, value, type)",
            description: '日期格式化',
            code: `// 格式化日期，输出值为：2022-01-29\n  const formatDate = this.utils.formatter('date', new Date(), 'YYYY-MM-DD');`
        }, {
            title: "setTimeout()",
            description: '定时器（单次）',
            code: `setTimeout(()=>{\n\n},number)`
        }, {
            title: "setTimeout()",
            description: '定时器（循环）',
            code: `// 设置一个计数器\n  let count = 0;\n  const interval = setInterval(() => {\n    ++count;\n    if (count === 5) {\n      //停止\n      clearInterval(interval);\n    }\n  }, number);`
        }, {
            title: "validateRule(idCardNumber)",
            description: '身份证号校验',
            code: `function validateRule(idCardNumber) {\n  if (idCardNumber && idCardNumber.length === 18) {\n    const coeff = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];\n    const laststr = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];\n    let total = 0;\n    for(let i = 0; i < 17; ++ i) {\n      total+= parseInt(idCardNumber[i], 10) * coeff[i];\n    }\n    return idCardNumber[17] === laststr[total % 11];\n  }\n  return false;\n}`
        }, {
            title: "validateRule(bankCardNumber)",
            description: '卡号校验「Luhn 算法」',
            code: `function validateRule(bankCardNumber) {\n  if (bankCardNumber && /^([0-9]{16}|[0-9]{19})$/.test(bankCardNumber)) {\n    let total = 0;\n    bankCardNumber.split('').reverse().forEach((item, idx) => {\n      const num = parseInt(item, 10);\n      total += idx % 2 ? 2 * num - (num > 4 ? 9 : 0) : num;\n    });\n    if (total === 0) {\n      return false;\n    }\n    return total % 10 === 0;\n  }\n  return false;\n}`
        }, {
            title: "validateRule(phoneNumber)",
            description: '手机号校验',
            code: `function validateRule(phoneNumber) {\n  var reg = /^1\d{10}$/;\n  return reg.test(phoneNumber);\n}`
        }, {
            title: "maskPhoneNumber()",
            description: '手机号加密',
            code: `export function maskPhoneNumber(phoneNumber) {\n  return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');\n}`
        }, {
            title: "fieldsValidate()",
            description: '表单必填校验「JS触发事件」',
            code: `/**\n* 表单必填校验js事件\n*/\nexport async function onClick() {\n  //组件id集合,子表视作一个元素\n  const fieldList = [];\n\n  // 调用表单校验函数 \n  this.fieldsValidate(fieldList).then(errorList => {\n    setTimeout(() => {\n      if (errorList.length > 0) {\n        // 表单校验未通过，你可以做一些数据错误提示\n        return;\n      };\n      // 表单校验通过，你的后续业务逻辑由此往下写\n      this.utils.toast({\n        title: '表单校验通过',\n        type: 'success',\n      });\n    });\n  }, 0);\n}\n\n// fieldList：Array，需要校验组件的唯一标识集合\nexport async function fieldsValidate(fieldList = []) {\n  const result = [];\n  for (let i = 0; i < fieldList.length; i++) {\n    await this.$(fieldList[i]).validate((errors, values) => {\n      if (!errors) { return };\n      result.push({\n        fieldId: fieldList[i], // 组件标识\n        errors: this.utils.isMobile() ? errors.errors[fieldList[i]].errors : errors[fieldList[i]].errors // 校验错误信息\n      });\n    });\n  };\n  return result;\n}`
        }, {
            title: "vConsole",
            description: '打开需要调试页面的动作面板，在最上方直接输入下面代码。访问进行调试。 注意调试完成后删除该代码。',
            code: `const vConsole = 'https://g.alicdn.com/code/lib/vConsole/3.11.2/vconsole.min.js';const js = document.createElement('script');js.src = vConsole;document.body.append(js);js.onload = function() {\n  window.vConsole = new window.VConsole();};`
        }
    ];

    return (
        <div className={'box-grid-1'}>
            {
                CommonCodeData.map((item,index) => {
                    return (
                        <div className={'jsApiItem_Box'} key={index}>
                            <div>
                                <div className={'jsApiItemTitle_Box'}>
                                    <div className={'jsApiItemTitle'}>{item.title}</div>
                                    <div className={'jsApiIcon_Box'} onClick={() => {
                                        if (item.code) {
                                            GM_setClipboard(item.code);
                                            Message.success('复制成功！')
                                        } else {
                                            Message.error('复制失败，请联系开发者！')
                                        }
                                    }}>{CopyIcon('#3c99d8')}</div>
                                </div>
                                <div className={'jsApiItemDescription'}>{item.description}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CommonCodeBox;