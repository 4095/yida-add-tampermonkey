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
        }, {
            title: '获取子表单指定行数据',
            description:'--',
            code:`// 获取子表单组件\nconst tableField = this.$('tableField_l0q1sf8l');\n// 获取子表单所有行标识\nlet items = tableField.getItems();\n// 传入指定的行标识\nlet rowData = tableField.getItemValue(items[0]);`
        },{
            title: '获取子表单指定行指定组件数据',
            description:'--',
            code:`// 获取子表单组件\nconst tableField = this.$('tableField_l0q1sf8l');\n\n// 获取子表单所有行标识\nlet items = tableField.getItems();\n\n// 传入指定的行标识\nlet rowData = tableField.getItemValue(items[0]);\n\n// 传入指定的组件唯一标识\nlet fieldValue = rowData["textField_l0q1sf8m"];`
        },{
            title: '更新子表单指定行的数据',
            description:'--',
            code:`const { formGroupId, from, changes = {}, tableFieldId } = extra || {};\n// 必须，避免使用 updateItemValue 更新子表数据后，再次触发 onChange 陷入死循环\nif (from === 'setItemValue') { return };\n// 获取子表单组件\nconst tableField = this.$('tableField_l0q1sf8l');\n// 更新指定行对应字段，需传入指定的行标识 (formGroupId)，以及更新后的数据 Object\ntableField.updateItemValue(formGroupId, {\n  textField_l0q1sf8m: "4",\n  selectField_l0q1sf8n: "选项二",\n});`
        },{
            title: 'tableToTable()',
            description:'子表单填充子表单',
            code:`//函数示例\n// 子表单填充子表单，快速生成子表单数据\n// tableData：目标子表单组件数据\n// relation：字段映射关系 target：目标子表单字段唯一标识，current：当前子表单字段唯一标识\nexport function tableToTable(tableData = [], relation = []) {\n  const result = []; // 数据处理结果\n  if (!tableData.length || !relation.length) { return result };\n  for (let i = 0; i < tableData.length; i++) {\n    let itemObj = {};\n    for (let j = 0; j < relation.length; j++) {\n      itemObj[relation[j].current] = tableData[i][relation[j].target]\n    };\n    result.push(itemObj);\n  };\n  return result;\n}\n//使用方法\n// tableData 通常由数据源获取得到\nconst tableData = [{\n  textField_lbafn35q: '砂锅黄焖鸡',\n  numberField_lbafn35r: 24\n}, {\n  textField_lbafn35q: '砂锅土豆',\n  numberField_lbafn35r: 28\n}];\n\n// relation 需按照实际情况手动配置\nconst relation = [{\n  target: 'textField_lbafn35q', // 目标子表单字段唯一标识\n  current: 'textField_lbaft5ob' // 当前子表单字段唯一标识\n}, {\n  target: 'numberField_lbafn35r',\n  current: 'numberField_lbaft5oc'\n}];\n\nthis.$('tableField_lbaft5oa').setValue(this.tableToTable(tableData, relation));`
        },{
            title: '子表单类数据联动',
            description:'--',
            code:`export function onChange({ value, extra }) {\n  // 需将此方法绑定到子表单的onChange上\n  // 子表单数据变更时，除单元格变化引起的数据变更外，公式计算、数据联动或者外部赋值都会触发子表单的 onChange 事件\n  // 解构相关属性\n  const { formGroupId, from, changes = {}, tableFieldId } = extra || {};\n  // 必须，避免使用 updateItemValue 更新子表数据后，再次触发 onChange 陷入死循环\n  if (from === 'setItemValue') { return };\n  // 获取子表单组件\n  const tableField = this.$(tableFieldId);\n  // 判断是否是子表单内某字段变化\n  /* if (changes.fieldId === 'textField_l0q1sf8m' || (changes.name ? changes.name.split(".")[1] === 'textField_l0q1sf8m' : false)) {\n\n    }; */\n  // 更新子表单指定列数据，可与上述结合使用\n  /* tableField.updateItemValue(formGroupId, {\n      'selectField_l0q1sf8n': "选项二", // 更新对应字段\n    }); */\n  // 结合使用，实现类数据联动效果，支持数据源写法\n  if (changes.fieldId === 'textField_l0q1sf8m') {\n    tableField.updateItemValue(formGroupId, {\n      'selectField_l0q1sf8n': "选项二", // 更新对应字段\n    });\n  };\n}`
        },{
            title: '控制行内其他组件是否必填',
            description:'--',
            code:`const tableField = this.$('tableField_lhu7ixu8');\nconst validation = value === 'true' ? [{ type: 'required' }] : [];\ntableField.getComponent(formGroupId, 'textField_lhu7ixu7').setValidation(validation); `
        },{
            title: '异步请求全量数据',
            description:'--',
            code:`//示例为onChange事件触发\nexport function onChange({ value }) {\n  var formUuid = "FORM-QQ866JB1Q4R6U2BLALBVN7K8PUZU36TWX9ACL6"\n  //  参数 formUuid  表单id\n  // data  请求获得的大批量数据\n  this.searchFormData(formUuid, data => {\n    console.log("data", data)\n  })\n}\nexport function searchFormData(formUuid, callback) {\n  var res = this.state.searchFormDatas\n  var number = Math.ceil(res.totalCount / 100)\n  var numberData = []\n  for (let i = 0; i < number; i++) {\n    numberData.push(i)\n  }\n  var data = []\n  var params = numberData.map(item => {\n    return new Promise((reslove, reject) => {\n      var params = {\n        "formUuid": formUuid,\n        "pageSize": 100,\n        "currentPage": item + 1\n      }\n      this.dataSourceMap.searchFormDatas.load(params).then(res => {\n        data.push(...res.data)\n        reslove(item)\n      })\n    })\n  })\n\n  Promise.all(params).then(() => {\n    callback(data)\n  })\n}`
        },{
            title: '判断是否为空Object或空Array',
            description:'--',
            code:`// data：Array、Object 待检验的数据   1、判断当前参数是否为空Object或者空Array，是则返回true。反之，返回false。2、常用于判断数据是否为空数据，避免传入错误参数。\nexport function isEmptyObject(data) {\n  let i;\n  for (i in data) {\n    if (Object.prototype.hasOwnProperty.call(data, i)) {\n      return !1;\n    }\n  }\n  return !0;\n}`
        }

    ];

    return (
        <div className={'box-grid-1'}>
            {
                CommonCodeData.map((item, index) => {
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