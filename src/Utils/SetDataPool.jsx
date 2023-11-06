import React from 'react';
import {unsafeWindow} from "$";

const SetDataPool = (y, name, description, method, parVariable, urlVariable, isInit) => {
    return {
        "id": "",
        name,
        description,
        formUuid: unsafeWindow.pageConfig.formUuid,
        "protocal": "REMOTE",
        "options": {
            "shouldFetch": true,
            method,
            "params": parVariable ? {
                "type": "variable",
                "variable": parVariable,
                "value": []
            } : y && {} || [],
            "isSync": false,
            "url": urlVariable ? {
                "type": "variable",
                "variable": urlVariable,
                "value": ""
            } : {},
            "loadType": ""
        },
        isInit,
        "dpType": "REMOTE",
        "type": "legao",
        "requestHandler": {
            "type": "JSExpression",
            "value": "this.utils.legaoBuiltin.dataSourceHandler"
        },
        "dataHandler": {
            "type": "js",
            "source": `function(data, err) { this.setState({${name}: data}); return data; }`,
            "compiled": `function(data, err) { this.setState({${name}: data}); return data; }`,
        }
    }
}

export default SetDataPool;