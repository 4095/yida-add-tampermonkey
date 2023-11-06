// ==UserScript==
// @name       宜搭+
// @namespace  npm/vite-plugin-monkey
// @version    2.2.1
// @author     Navcoo.Li
// @icon       https://www.google.com/s2/favicons?sz=64&domain=aliwork.com
// @match      https://*.aliwork.com/alibaba/web/*/design/*
// @require    https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js
// @require    https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js
// @grant      GM_addStyle
// @grant      GM_setClipboard
// @grant      unsafeWindow
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(" .box-grid-1{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:4px}.jsApiItemTitle{font-size:14px}.jsApiItemTitle_Box{display:flex;align-items:center;gap:8px}.jsApiItemDescription{font-size:12px;color:#1f385866}.jsApiItemIcon{cursor:pointer}.jsApiItem_Box{border-radius:4px;padding:4px}.jsApiItem_Box:hover{background-color:#1f38580a}.jsApiIcon_Box{cursor:pointer;height:14px}.box-grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px}.DataSourceApi-title{display:flex;align-items:center;gap:4px}.DataSourceApi-content{width:600px;max-height:350px;overflow-y:auto;background:#ffffff;border:1px solid #ccc;border-radius:4px;padding:16px}.DataSourceApi-content-apiName{font-size:14px;font-weight:600;line-height:2em}.DataSourceApi-content-InterfacePath{font-size:14px;margin-bottom:4px;display:flex;align-items:center;gap:4px}.DataSourceApi-content-requestType{border-style:solid;border-width:1px;border-radius:4px;padding:1px 4px;display:inline;background-color:#1f38581a;border-color:#1f38580f}.about_box{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding:20px;gap:16px;border-style:solid;border-width:1px;border-color:#1f38580f;border-radius:4px}:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}} ");

(function (React, ReactDOM, XLSX) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const XLSX__namespace = /*#__PURE__*/_interopNamespaceDefault(XLSX);

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
  var __publicField = (obj2, key, value) => {
    __defNormalProp(obj2, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a.prototype = f2.prototype;
    } else
      a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$1 = React, k$2 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
  function q$1(c2, a, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b2 in a)
      m$2.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps)
      for (b2 in a = c2.defaultProps, a)
        void 0 === d2[b2] && (d2[b2] = a[b2]);
    return { $$typeof: k$2, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
  }
  reactJsxRuntime_production_min.Fragment = l$1;
  reactJsxRuntime_production_min.jsx = q$1;
  reactJsxRuntime_production_min.jsxs = q$1;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m$1 = ReactDOM;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_setClipboard = /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _global = { exports: {} };
  var global$6 = _global.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
  if (typeof __g == "number")
    __g = global$6;
  var _globalExports = _global.exports;
  var _core = { exports: {} };
  var core$3 = _core.exports = { version: "2.6.12" };
  if (typeof __e == "number")
    __e = core$3;
  var _coreExports = _core.exports;
  var _aFunction = function(it) {
    if (typeof it != "function")
      throw TypeError(it + " is not a function!");
    return it;
  };
  var aFunction = _aFunction;
  var _ctx = function(fn, that, length2) {
    aFunction(fn);
    if (that === void 0)
      return fn;
    switch (length2) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b2) {
          return fn.call(that, a, b2);
        };
      case 3:
        return function(a, b2, c2) {
          return fn.call(that, a, b2, c2);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var _objectDp = {};
  var _isObject = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
  };
  var isObject$4 = _isObject;
  var _anObject = function(it) {
    if (!isObject$4(it))
      throw TypeError(it + " is not an object!");
    return it;
  };
  var _fails = function(exec) {
    try {
      return !!exec();
    } catch (e2) {
      return true;
    }
  };
  var _descriptors = !_fails(function() {
    return Object.defineProperty({}, "a", { get: function() {
      return 7;
    } }).a != 7;
  });
  var _domCreate;
  var hasRequired_domCreate;
  function require_domCreate() {
    if (hasRequired_domCreate)
      return _domCreate;
    hasRequired_domCreate = 1;
    var isObject2 = _isObject;
    var document2 = _globalExports.document;
    var is = isObject2(document2) && isObject2(document2.createElement);
    _domCreate = function(it) {
      return is ? document2.createElement(it) : {};
    };
    return _domCreate;
  }
  var _ie8DomDefine = !_descriptors && !_fails(function() {
    return Object.defineProperty(require_domCreate()("div"), "a", { get: function() {
      return 7;
    } }).a != 7;
  });
  var isObject$3 = _isObject;
  var _toPrimitive = function(it, S) {
    if (!isObject$3(it))
      return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == "function" && !isObject$3(val = fn.call(it)))
      return val;
    if (typeof (fn = it.valueOf) == "function" && !isObject$3(val = fn.call(it)))
      return val;
    if (!S && typeof (fn = it.toString) == "function" && !isObject$3(val = fn.call(it)))
      return val;
    throw TypeError("Can't convert object to primitive value");
  };
  var anObject$3 = _anObject;
  var IE8_DOM_DEFINE$1 = _ie8DomDefine;
  var toPrimitive$3 = _toPrimitive;
  var dP$3 = Object.defineProperty;
  _objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject$3(O);
    P = toPrimitive$3(P, true);
    anObject$3(Attributes);
    if (IE8_DOM_DEFINE$1)
      try {
        return dP$3(O, P, Attributes);
      } catch (e2) {
      }
    if ("get" in Attributes || "set" in Attributes)
      throw TypeError("Accessors not supported!");
    if ("value" in Attributes)
      O[P] = Attributes.value;
    return O;
  };
  var _propertyDesc = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value
    };
  };
  var dP$2 = _objectDp;
  var createDesc$2 = _propertyDesc;
  var _hide = _descriptors ? function(object, key, value) {
    return dP$2.f(object, key, createDesc$2(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  var hasOwnProperty$2 = {}.hasOwnProperty;
  var _has = function(it, key) {
    return hasOwnProperty$2.call(it, key);
  };
  var global$5 = _globalExports;
  var core$2 = _coreExports;
  var ctx = _ctx;
  var hide$3 = _hide;
  var has$6 = _has;
  var PROTOTYPE$2 = "prototype";
  var $export$6 = function(type2, name, source) {
    var IS_FORCED = type2 & $export$6.F;
    var IS_GLOBAL = type2 & $export$6.G;
    var IS_STATIC = type2 & $export$6.S;
    var IS_PROTO = type2 & $export$6.P;
    var IS_BIND = type2 & $export$6.B;
    var IS_WRAP = type2 & $export$6.W;
    var exports = IS_GLOBAL ? core$2 : core$2[name] || (core$2[name] = {});
    var expProto = exports[PROTOTYPE$2];
    var target = IS_GLOBAL ? global$5 : IS_STATIC ? global$5[name] : (global$5[name] || {})[PROTOTYPE$2];
    var key, own, out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && target[key] !== void 0;
      if (own && has$6(exports, key))
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global$5) : IS_WRAP && target[key] == out ? function(C) {
        var F = function(a, b2, c2) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0:
                return new C();
              case 1:
                return new C(a);
              case 2:
                return new C(a, b2);
            }
            return new C(a, b2, c2);
          }
          return C.apply(this, arguments);
        };
        F[PROTOTYPE$2] = C[PROTOTYPE$2];
        return F;
      }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        if (type2 & $export$6.R && expProto && !expProto[key])
          hide$3(expProto, key, out);
      }
    }
  };
  $export$6.F = 1;
  $export$6.G = 2;
  $export$6.S = 4;
  $export$6.P = 8;
  $export$6.B = 16;
  $export$6.W = 32;
  $export$6.U = 64;
  $export$6.R = 128;
  var _export = $export$6;
  var toString$1 = {}.toString;
  var _cof = function(it) {
    return toString$1.call(it).slice(8, -1);
  };
  var cof$1 = _cof;
  var _iobject = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
    return cof$1(it) == "String" ? it.split("") : Object(it);
  };
  var _defined = function(it) {
    if (it == void 0)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  var IObject = _iobject;
  var defined$2 = _defined;
  var _toIobject = function(it) {
    return IObject(defined$2(it));
  };
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  var toInteger$2 = _toInteger;
  var min$1 = Math.min;
  var _toLength = function(it) {
    return it > 0 ? min$1(toInteger$2(it), 9007199254740991) : 0;
  };
  var toInteger$1 = _toInteger;
  var max = Math.max;
  var min = Math.min;
  var _toAbsoluteIndex = function(index2, length2) {
    index2 = toInteger$1(index2);
    return index2 < 0 ? max(index2 + length2, 0) : min(index2, length2);
  };
  var toIObject$5 = _toIobject;
  var toLength = _toLength;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var _arrayIncludes = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIObject$5($this);
      var length2 = toLength(O.length);
      var index2 = toAbsoluteIndex(fromIndex, length2);
      var value;
      if (IS_INCLUDES && el != el)
        while (length2 > index2) {
          value = O[index2++];
          if (value != value)
            return true;
        }
      else
        for (; length2 > index2; index2++)
          if (IS_INCLUDES || index2 in O) {
            if (O[index2] === el)
              return IS_INCLUDES || index2 || 0;
          }
      return !IS_INCLUDES && -1;
    };
  };
  var _shared = { exports: {} };
  var _library = true;
  var core$1 = _coreExports;
  var global$4 = _globalExports;
  var SHARED = "__core-js_shared__";
  var store$1 = global$4[SHARED] || (global$4[SHARED] = {});
  (_shared.exports = function(key, value) {
    return store$1[key] || (store$1[key] = value !== void 0 ? value : {});
  })("versions", []).push({
    version: core$1.version,
    mode: "pure",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
  var _sharedExports = _shared.exports;
  var id$1 = 0;
  var px = Math.random();
  var _uid = function(key) {
    return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id$1 + px).toString(36));
  };
  var shared$1 = _sharedExports("keys");
  var uid$2 = _uid;
  var _sharedKey = function(key) {
    return shared$1[key] || (shared$1[key] = uid$2(key));
  };
  var has$5 = _has;
  var toIObject$4 = _toIobject;
  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$2 = _sharedKey("IE_PROTO");
  var _objectKeysInternal = function(object, names) {
    var O = toIObject$4(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O)
      if (key != IE_PROTO$2)
        has$5(O, key) && result.push(key);
    while (names.length > i)
      if (has$5(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    return result;
  };
  var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  var $keys$2 = _objectKeysInternal;
  var enumBugKeys$1 = _enumBugKeys;
  var _objectKeys = Object.keys || function keys(O) {
    return $keys$2(O, enumBugKeys$1);
  };
  var _objectGops = {};
  _objectGops.f = Object.getOwnPropertySymbols;
  var _objectPie = {};
  _objectPie.f = {}.propertyIsEnumerable;
  var defined$1 = _defined;
  var _toObject = function(it) {
    return Object(defined$1(it));
  };
  var _objectAssign;
  var hasRequired_objectAssign;
  function require_objectAssign() {
    if (hasRequired_objectAssign)
      return _objectAssign;
    hasRequired_objectAssign = 1;
    var DESCRIPTORS2 = _descriptors;
    var getKeys2 = _objectKeys;
    var gOPS2 = _objectGops;
    var pIE2 = _objectPie;
    var toObject2 = _toObject;
    var IObject2 = _iobject;
    var $assign = Object.assign;
    _objectAssign = !$assign || _fails(function() {
      var A2 = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A2[S] = 7;
      K.split("").forEach(function(k2) {
        B[k2] = k2;
      });
      return $assign({}, A2)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign2(target, source) {
      var T = toObject2(target);
      var aLen = arguments.length;
      var index2 = 1;
      var getSymbols = gOPS2.f;
      var isEnum2 = pIE2.f;
      while (aLen > index2) {
        var S = IObject2(arguments[index2++]);
        var keys2 = getSymbols ? getKeys2(S).concat(getSymbols(S)) : getKeys2(S);
        var length2 = keys2.length;
        var j = 0;
        var key;
        while (length2 > j) {
          key = keys2[j++];
          if (!DESCRIPTORS2 || isEnum2.call(S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
    return _objectAssign;
  }
  var $export$5 = _export;
  $export$5($export$5.S + $export$5.F, "Object", { assign: require_objectAssign() });
  var assign$1 = _coreExports.Object.assign;
  var assign = { "default": assign$1, __esModule: true };
  var _assign = assign;
  var _assign2 = _interopRequireDefault$7(_assign);
  function _interopRequireDefault$7(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var _default$8 = _assign2.default || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _default$7 = function(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var _typeof$2 = {};
  var toInteger = _toInteger;
  var defined = _defined;
  var _stringAt = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l2 = s.length;
      var a, b2;
      if (i < 0 || i >= l2)
        return TO_STRING ? "" : void 0;
      a = s.charCodeAt(i);
      return a < 55296 || a > 56319 || i + 1 === l2 || (b2 = s.charCodeAt(i + 1)) < 56320 || b2 > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b2 - 56320) + 65536;
    };
  };
  var _redefine = _hide;
  var _iterators = {};
  var dP$1 = _objectDp;
  var anObject$2 = _anObject;
  var getKeys$1 = _objectKeys;
  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$2(O);
    var keys2 = getKeys$1(Properties);
    var length2 = keys2.length;
    var i = 0;
    var P;
    while (length2 > i)
      dP$1.f(O, P = keys2[i++], Properties[P]);
    return O;
  };
  var _html;
  var hasRequired_html;
  function require_html() {
    if (hasRequired_html)
      return _html;
    hasRequired_html = 1;
    var document2 = _globalExports.document;
    _html = document2 && document2.documentElement;
    return _html;
  }
  var anObject$1 = _anObject;
  var dPs = _objectDps;
  var enumBugKeys = _enumBugKeys;
  var IE_PROTO$1 = _sharedKey("IE_PROTO");
  var Empty = function() {
  };
  var PROTOTYPE$1 = "prototype";
  var createDict = function() {
    var iframe = require_domCreate()("iframe");
    var i = enumBugKeys.length;
    var lt = "<";
    var gt = ">";
    var iframeDocument;
    iframe.style.display = "none";
    require_html().appendChild(iframe);
    iframe.src = "javascript:";
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--)
      delete createDict[PROTOTYPE$1][enumBugKeys[i]];
    return createDict();
  };
  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject$1(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      result[IE_PROTO$1] = O;
    } else
      result = createDict();
    return Properties === void 0 ? result : dPs(result, Properties);
  };
  var _wks = { exports: {} };
  var store = _sharedExports("wks");
  var uid$1 = _uid;
  var Symbol$1 = _globalExports.Symbol;
  var USE_SYMBOL = typeof Symbol$1 == "function";
  var $exports = _wks.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid$1)("Symbol." + name));
  };
  $exports.store = store;
  var _wksExports = _wks.exports;
  var def = _objectDp.f;
  var has$4 = _has;
  var TAG = _wksExports("toStringTag");
  var _setToStringTag = function(it, tag, stat) {
    if (it && !has$4(it = stat ? it : it.prototype, TAG))
      def(it, TAG, { configurable: true, value: tag });
  };
  var create$4 = _objectCreate;
  var descriptor = _propertyDesc;
  var setToStringTag$2 = _setToStringTag;
  var IteratorPrototype = {};
  _hide(IteratorPrototype, _wksExports("iterator"), function() {
    return this;
  });
  var _iterCreate = function(Constructor, NAME, next) {
    Constructor.prototype = create$4(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag$2(Constructor, NAME + " Iterator");
  };
  var has$3 = _has;
  var toObject$1 = _toObject;
  var IE_PROTO = _sharedKey("IE_PROTO");
  var ObjectProto$1 = Object.prototype;
  var _objectGpo = Object.getPrototypeOf || function(O) {
    O = toObject$1(O);
    if (has$3(O, IE_PROTO))
      return O[IE_PROTO];
    if (typeof O.constructor == "function" && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto$1 : null;
  };
  var $export$4 = _export;
  var redefine$1 = _redefine;
  var hide$2 = _hide;
  var Iterators$2 = _iterators;
  var $iterCreate = _iterCreate;
  var setToStringTag$1 = _setToStringTag;
  var getPrototypeOf$1 = _objectGpo;
  var ITERATOR = _wksExports("iterator");
  var BUGGY = !([].keys && "next" in [].keys());
  var FF_ITERATOR = "@@iterator";
  var KEYS = "keys";
  var VALUES = "values";
  var returnThis = function() {
    return this;
  };
  var _iterDefine = function(Base2, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys2() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values2() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG2 = NAME + " Iterator";
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base2.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
    var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype2;
    if ($anyNative) {
      IteratorPrototype2 = getPrototypeOf$1($anyNative.call(new Base2()));
      if (IteratorPrototype2 !== Object.prototype && IteratorPrototype2.next) {
        setToStringTag$1(IteratorPrototype2, TAG2, true);
      }
    }
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values2() {
        return $native.call(this);
      };
    }
    if (FORCED && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide$2(proto, ITERATOR, $default);
    }
    Iterators$2[NAME] = $default;
    Iterators$2[TAG2] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine$1(proto, key, methods[key]);
        }
      else
        $export$4($export$4.P + $export$4.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  var $at = _stringAt(true);
  _iterDefine(String, "String", function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t;
    var index2 = this._i;
    var point;
    if (index2 >= O.length)
      return { value: void 0, done: true };
    point = $at(O, index2);
    this._i += point.length;
    return { value: point, done: false };
  });
  var _iterStep = function(done, value) {
    return { value, done: !!done };
  };
  var step = _iterStep;
  var Iterators$1 = _iterators;
  var toIObject$3 = _toIobject;
  _iterDefine(Array, "Array", function(iterated, kind) {
    this._t = toIObject$3(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t;
    var kind = this._k;
    var index2 = this._i++;
    if (!O || index2 >= O.length) {
      this._t = void 0;
      return step(1);
    }
    if (kind == "keys")
      return step(0, index2);
    if (kind == "values")
      return step(0, O[index2]);
    return step(0, [index2, O[index2]]);
  }, "values");
  Iterators$1.Arguments = Iterators$1.Array;
  var global$3 = _globalExports;
  var hide$1 = _hide;
  var Iterators = _iterators;
  var TO_STRING_TAG = _wksExports("toStringTag");
  var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = global$3[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG])
      hide$1(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
  }
  var _wksExt = {};
  _wksExt.f = _wksExports;
  var iterator$1 = _wksExt.f("iterator");
  var iterator = { "default": iterator$1, __esModule: true };
  var _meta = { exports: {} };
  var META$1 = _uid("meta");
  var isObject$2 = _isObject;
  var has$2 = _has;
  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function() {
    return true;
  };
  var FREEZE = !_fails(function() {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function(it) {
    setDesc(it, META$1, { value: {
      i: "O" + ++id,
      // object ID
      w: {}
      // weak collections IDs
    } });
  };
  var fastKey = function(it, create6) {
    if (!isObject$2(it))
      return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
    if (!has$2(it, META$1)) {
      if (!isExtensible(it))
        return "F";
      if (!create6)
        return "E";
      setMeta(it);
    }
    return it[META$1].i;
  };
  var getWeak = function(it, create6) {
    if (!has$2(it, META$1)) {
      if (!isExtensible(it))
        return true;
      if (!create6)
        return false;
      setMeta(it);
    }
    return it[META$1].w;
  };
  var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has$2(it, META$1))
      setMeta(it);
    return it;
  };
  var meta = _meta.exports = {
    KEY: META$1,
    NEED: false,
    fastKey,
    getWeak,
    onFreeze
  };
  var _metaExports = _meta.exports;
  var core = _coreExports;
  var wksExt$1 = _wksExt;
  var defineProperty$4 = _objectDp.f;
  var _wksDefine = function(name) {
    var $Symbol2 = core.Symbol || (core.Symbol = {});
    if (name.charAt(0) != "_" && !(name in $Symbol2))
      defineProperty$4($Symbol2, name, { value: wksExt$1.f(name) });
  };
  var getKeys = _objectKeys;
  var gOPS = _objectGops;
  var pIE$1 = _objectPie;
  var _enumKeys = function(it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum2 = pIE$1.f;
      var i = 0;
      var key;
      while (symbols.length > i)
        if (isEnum2.call(it, key = symbols[i++]))
          result.push(key);
    }
    return result;
  };
  var cof = _cof;
  var _isArray = Array.isArray || function isArray(arg) {
    return cof(arg) == "Array";
  };
  var _objectGopnExt = {};
  var _objectGopn = {};
  var $keys$1 = _objectKeysInternal;
  var hiddenKeys = _enumBugKeys.concat("length", "prototype");
  _objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys$1(O, hiddenKeys);
  };
  var toIObject$2 = _toIobject;
  var gOPN$1 = _objectGopn.f;
  var toString = {}.toString;
  var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return gOPN$1(it);
    } catch (e2) {
      return windowNames.slice();
    }
  };
  _objectGopnExt.f = function getOwnPropertyNames2(it) {
    return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN$1(toIObject$2(it));
  };
  var _objectGopd = {};
  var pIE = _objectPie;
  var createDesc$1 = _propertyDesc;
  var toIObject$1 = _toIobject;
  var toPrimitive$2 = _toPrimitive;
  var has$1 = _has;
  var IE8_DOM_DEFINE = _ie8DomDefine;
  var gOPD$1 = Object.getOwnPropertyDescriptor;
  _objectGopd.f = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIObject$1(O);
    P = toPrimitive$2(P, true);
    if (IE8_DOM_DEFINE)
      try {
        return gOPD$1(O, P);
      } catch (e2) {
      }
    if (has$1(O, P))
      return createDesc$1(!pIE.f.call(O, P), O[P]);
  };
  var global$2 = _globalExports;
  var has = _has;
  var DESCRIPTORS = _descriptors;
  var $export$3 = _export;
  var redefine = _redefine;
  var META = _metaExports.KEY;
  var $fails = _fails;
  var shared = _sharedExports;
  var setToStringTag = _setToStringTag;
  var uid = _uid;
  var wks = _wksExports;
  var wksExt = _wksExt;
  var wksDefine = _wksDefine;
  var enumKeys = _enumKeys;
  var isArray2 = _isArray;
  var anObject = _anObject;
  var isObject$1 = _isObject;
  var toObject = _toObject;
  var toIObject = _toIobject;
  var toPrimitive$1 = _toPrimitive;
  var createDesc = _propertyDesc;
  var _create$1 = _objectCreate;
  var gOPNExt = _objectGopnExt;
  var $GOPD = _objectGopd;
  var $GOPS = _objectGops;
  var $DP = _objectDp;
  var $keys = _objectKeys;
  var gOPD = $GOPD.f;
  var dP = $DP.f;
  var gOPN = gOPNExt.f;
  var $Symbol = global$2.Symbol;
  var $JSON = global$2.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE = "prototype";
  var HIDDEN = wks("_hidden");
  var TO_PRIMITIVE = wks("toPrimitive");
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared("symbol-registry");
  var AllSymbols = shared("symbols");
  var OPSymbols = shared("op-symbols");
  var ObjectProto = Object[PROTOTYPE];
  var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
  var QObject = global$2.QObject;
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
  var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create$1(dP({}, "a", {
      get: function() {
        return dP(this, "a", { value: 7 }).a;
      }
    })).a != 7;
  }) ? function(it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc)
      delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto)
      dP(ObjectProto, key, protoDesc);
  } : dP;
  var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create$1($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };
  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
    return typeof it == "symbol";
  } : function(it) {
    return it instanceof $Symbol;
  };
  var $defineProperty = function defineProperty2(it, key, D) {
    if (it === ObjectProto)
      $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive$1(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN))
          dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key])
          it[HIDDEN][key] = false;
        D = _create$1(D, { enumerable: createDesc(0, false) });
      }
      return setSymbolDesc(it, key, D);
    }
    return dP(it, key, D);
  };
  var $defineProperties = function defineProperties2(it, P) {
    anObject(it);
    var keys2 = enumKeys(P = toIObject(P));
    var i = 0;
    var l2 = keys2.length;
    var key;
    while (l2 > i)
      $defineProperty(it, key = keys2[i++], P[key]);
    return it;
  };
  var $create = function create2(it, P) {
    return P === void 0 ? _create$1(it) : $defineProperties(_create$1(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive$1(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
      return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor2(it, key) {
    it = toIObject(it);
    key = toPrimitive$1(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
      return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
      D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames3(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
        result.push(key);
    }
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
        result.push(AllSymbols[key]);
    }
    return result;
  };
  if (!USE_NATIVE) {
    $Symbol = function Symbol2() {
      if (this instanceof $Symbol)
        throw TypeError("Symbol is not a constructor!");
      var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
      var $set = function(value) {
        if (this === ObjectProto)
          $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag))
          this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if (DESCRIPTORS && setter)
        setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], "toString", function toString2() {
      return this._k;
    });
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;
    if (DESCRIPTORS && !_library) {
      redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable);
    }
    wksExt.f = function(name) {
      return wrap(wks(name));
    };
  }
  $export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, { Symbol: $Symbol });
  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
  ), j = 0; es6Symbols.length > j; )
    wks(es6Symbols[j++]);
  for (var wellKnownSymbols = $keys(wks.store), k$1 = 0; wellKnownSymbols.length > k$1; )
    wksDefine(wellKnownSymbols[k$1++]);
  $export$3($export$3.S + $export$3.F * !USE_NATIVE, "Symbol", {
    // 19.4.2.1 Symbol.for(key)
    "for": function(key) {
      return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym))
        throw TypeError(sym + " is not a symbol!");
      for (var key in SymbolRegistry)
        if (SymbolRegistry[key] === sym)
          return key;
    },
    useSetter: function() {
      setter = true;
    },
    useSimple: function() {
      setter = false;
    }
  });
  $export$3($export$3.S + $export$3.F * !USE_NATIVE, "Object", {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  var FAILS_ON_PRIMITIVES = $fails(function() {
    $GOPS.f(1);
  });
  $export$3($export$3.S + $export$3.F * FAILS_ON_PRIMITIVES, "Object", {
    getOwnPropertySymbols: function getOwnPropertySymbols2(it) {
      return $GOPS.f(toObject(it));
    }
  });
  $JSON && $export$3($export$3.S + $export$3.F * (!USE_NATIVE || $fails(function() {
    var S = $Symbol();
    return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
  })), "JSON", {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i)
        args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject$1(replacer) && it === void 0 || isSymbol(it))
        return;
      if (!isArray2(replacer))
        replacer = function(key, value) {
          if (typeof $replacer == "function")
            value = $replacer.call(this, key, value);
          if (!isSymbol(value))
            return value;
        };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  setToStringTag($Symbol, "Symbol");
  setToStringTag(Math, "Math", true);
  setToStringTag(global$2.JSON, "JSON", true);
  _wksDefine("asyncIterator");
  _wksDefine("observable");
  var symbol$1 = _coreExports.Symbol;
  var symbol = { "default": symbol$1, __esModule: true };
  _typeof$2.__esModule = true;
  var _iterator = iterator;
  var _iterator2 = _interopRequireDefault$6(_iterator);
  var _symbol = symbol;
  var _symbol2 = _interopRequireDefault$6(_symbol);
  var _typeof$1 = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2;
  };
  function _interopRequireDefault$6(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var _default$6 = _typeof$2.default = typeof _symbol2.default === "function" && _typeof$1(_iterator2.default) === "symbol" ? function(obj2) {
    return typeof obj2 === "undefined" ? "undefined" : _typeof$1(obj2);
  } : function(obj2) {
    return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : _typeof$1(obj2);
  };
  var _typeof2$2 = _typeof$2;
  var _typeof3$1 = _interopRequireDefault$5(_typeof2$2);
  function _interopRequireDefault$5(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var _default$5 = function(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3$1.default)(call)) === "object" || typeof call === "function") ? call : self2;
  };
  var _setProto;
  var hasRequired_setProto;
  function require_setProto() {
    if (hasRequired_setProto)
      return _setProto;
    hasRequired_setProto = 1;
    var isObject2 = _isObject;
    var anObject2 = _anObject;
    var check = function(O, proto) {
      anObject2(O);
      if (!isObject2(proto) && proto !== null)
        throw TypeError(proto + ": can't set as prototype!");
    };
    _setProto = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? (
        // eslint-disable-line
        function(test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, "__proto__").set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e2) {
            buggy = true;
          }
          return function setPrototypeOf2(O, proto) {
            check(O, proto);
            if (buggy)
              O.__proto__ = proto;
            else
              set(O, proto);
            return O;
          };
        }({}, false)
      ) : void 0),
      check
    };
    return _setProto;
  }
  var $export$2 = _export;
  $export$2($export$2.S, "Object", { setPrototypeOf: require_setProto().set });
  var setPrototypeOf$1 = _coreExports.Object.setPrototypeOf;
  var setPrototypeOf = { "default": setPrototypeOf$1, __esModule: true };
  var $export$1 = _export;
  $export$1($export$1.S, "Object", { create: _objectCreate });
  var $Object$1 = _coreExports.Object;
  var create$3 = function create3(P, D) {
    return $Object$1.create(P, D);
  };
  var create$2 = { "default": create$3, __esModule: true };
  var _setPrototypeOf$1 = setPrototypeOf;
  var _setPrototypeOf2 = _interopRequireDefault$4(_setPrototypeOf$1);
  var _create = create$2;
  var _create2 = _interopRequireDefault$4(_create);
  var _typeof2$1 = _typeof$2;
  var _typeof3 = _interopRequireDefault$4(_typeof2$1);
  function _interopRequireDefault$4(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var _default$4 = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }
    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  var propTypes = { exports: {} };
  var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  {
    propTypes.exports = factoryWithThrowingShims();
  }
  var propTypesExports = propTypes.exports;
  const PropTypes$1 = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
  var classnames$1 = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$1);
  var classnamesExports = classnames$1.exports;
  const classnames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  function componentWillMount() {
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== void 0) {
      this.setState(state);
    }
  }
  function componentWillReceiveProps(nextProps) {
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== void 0 ? state : null;
    }
    this.setState(updater.bind(this));
  }
  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;
  function polyfill(Component2) {
    var prototype = Component2.prototype;
    if (!prototype || !prototype.isReactComponent) {
      throw new Error("Can only polyfill class components");
    }
    if (typeof Component2.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
      return Component2;
    }
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") {
      foundWillMountName = "componentWillMount";
    } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
      foundWillMountName = "UNSAFE_componentWillMount";
    }
    if (typeof prototype.componentWillReceiveProps === "function") {
      foundWillReceivePropsName = "componentWillReceiveProps";
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
      foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    }
    if (typeof prototype.componentWillUpdate === "function") {
      foundWillUpdateName = "componentWillUpdate";
    } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
      foundWillUpdateName = "UNSAFE_componentWillUpdate";
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
      var componentName = Component2.displayName || Component2.name;
      var newApiName = typeof Component2.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
      throw Error(
        "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
      );
    }
    if (typeof Component2.getDerivedStateFromProps === "function") {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
      if (typeof prototype.componentDidUpdate !== "function") {
        throw new Error(
          "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
        );
      }
      prototype.componentWillUpdate = componentWillUpdate;
      var componentDidUpdate = prototype.componentDidUpdate;
      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }
    return Component2;
  }
  const reactLifecyclesCompat_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    polyfill
  }, Symbol.toStringTag, { value: "Module" }));
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx2) {
          if (ctx2 === void 0) {
            ctx2 = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx2, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle$1(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }()
  );
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size2, position) {
      var value = styles["border-" + position + "-width"];
      return size2 + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles["padding-" + position];
      paddings[position] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x: x2,
      y: y2,
      width,
      height,
      top: y2,
      right: x2 + width,
      bottom: height + y2,
      left: x2
    });
    return rect;
  }
  function createRectInit(x2, y2, width, height) {
    return { x: x2, y: y2, width, height };
  }
  var ResizeObservation = (
    /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }()
  );
  var ResizeObserverEntry = (
    /** @class */
    function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }()
  );
  var ResizeObserverSPI = (
    /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this2 = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this2.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx2 = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx2, entries, ctx2);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver = (
    /** @class */
    function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
      var _a;
      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });
  var index$2 = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver;
  }();
  var ieVersion$4 = typeof document !== "undefined" ? document.documentMode : void 0;
  var isProduction = function isProduction2() {
    var PRODUCTION_ENV = "production";
    var result = false;
    try {
      if ("production" === PRODUCTION_ENV) {
        result = true;
      }
    } catch (err) {
    }
    return result;
  };
  const env$1 = {
    ieVersion: ieVersion$4,
    isProduction
  };
  const _env = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: env$1,
    ieVersion: ieVersion$4,
    isProduction
  }, Symbol.toStringTag, { value: "Module" }));
  function deprecated(props, instead, component) {
    if (!isProduction() && typeof console !== "undefined" && console.error) {
      return console.error("Warning: [ " + props + " ] is deprecated at [ " + component + " ], use [ " + instead + " ] instead of it.");
    }
  }
  function warning(msg) {
    if (!isProduction() && typeof console !== "undefined" && console.error) {
      return console.error("Warning: " + msg);
    }
  }
  const _log = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    deprecated,
    warning
  }, Symbol.toStringTag, { value: "Module" }));
  function typeOf(obj2) {
    return Object.prototype.toString.call(obj2).replace(/\[object\s|]/g, "");
  }
  function isArrayLike(obj2) {
    var length2 = !!obj2 && "length" in obj2 && obj2.length;
    var type2 = typeOf(obj2);
    return type2 === "Array" || length2 === 0 || typeof length2 === "number" && length2 > 0 && length2 - 1 in obj2;
  }
  function isPromise(obj2) {
    return !!obj2 && ((typeof obj2 === "undefined" ? "undefined" : _default$6(obj2)) === "object" || typeof obj2 === "function") && typeof obj2.then === "function";
  }
  function isPlainObject$1(obj2) {
    if (typeOf(obj2) !== "Object") {
      return false;
    }
    var ctor = obj2.constructor;
    if (typeof ctor !== "function") {
      return false;
    }
    var prot = ctor.prototype;
    if (typeOf(prot) !== "Object") {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    return true;
  }
  function shallowEqual$1(objA, objB, compare) {
    if (objA === objB) {
      return true;
    }
    if (!objA || !objB || (typeof objA === "undefined" ? "undefined" : _default$6(objA)) + (typeof objB === "undefined" ? "undefined" : _default$6(objB)) !== "objectobject") {
      return false;
    }
    var keyA = Object.keys(objA);
    var keyB = Object.keys(objB);
    var len = keyA.length;
    if (len !== keyB.length) {
      return false;
    }
    var hasCallback = typeof compare === "function";
    for (var i = 0; i < len; i++) {
      var key = keyA[i];
      if (!Object.prototype.hasOwnProperty.call(objB, key)) {
        return false;
      }
      var valA = objA[key];
      var valB = objB[key];
      var ret = hasCallback ? compare(valA, valB, key) : void 0;
      if (ret === false || ret === void 0 && valA !== valB) {
        return false;
      }
    }
    return true;
  }
  function each(obj2, callback, direction) {
    var reversed = direction === -1;
    var length2 = obj2.length;
    var value = void 0, i = reversed ? length2 - 1 : 0;
    if (isArrayLike(obj2)) {
      for (; i < length2 && i >= 0; reversed ? i-- : i++) {
        value = callback.call(obj2[i], obj2[i], i);
        if (value === false) {
          break;
        }
      }
    } else {
      for (i in obj2) {
        if (obj2.hasOwnProperty(i)) {
          value = callback.call(obj2[i], obj2[i], i);
          if (value === false) {
            break;
          }
        }
      }
    }
    return obj2;
  }
  var _isInObj = function _isInObj2(key, obj2, isArray3) {
    return isArray3 ? obj2.indexOf(key) > -1 : key in obj2;
  };
  function pickOthers$9(holdProps, props) {
    var others = {};
    var isArray3 = typeOf(holdProps) === "Array";
    for (var key in props) {
      if (!_isInObj(key, holdProps, isArray3)) {
        others[key] = props[key];
      }
    }
    return others;
  }
  function pickProps(holdProps, props) {
    var others = {};
    var isArray3 = typeOf(holdProps) === "Array";
    for (var key in props) {
      if (_isInObj(key, holdProps, isArray3)) {
        others[key] = props[key];
      }
    }
    return others;
  }
  function pickAttrsWith(holdProps, prefix) {
    var others = {};
    for (var key in holdProps) {
      if (key.match(prefix)) {
        others[key] = holdProps[key];
      }
    }
    return others;
  }
  function isNil$2(value) {
    return value == null;
  }
  function deepMerge(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }
    if (!sources.length)
      return target;
    var source = sources.shift();
    if (!isPlainObject$1(target)) {
      target = {};
    }
    if (isPlainObject$1(target) && isPlainObject$1(source)) {
      for (var key in source) {
        if (isPlainObject$1(source[key]) && !React.isValidElement(source[key])) {
          var _extends2;
          if (!target[key])
            _default$8(target, (_extends2 = {}, _extends2[key] = {}, _extends2));
          if (!isPlainObject$1(target[key])) {
            target[key] = source[key];
          }
          deepMerge(target[key], source[key]);
        } else {
          var _extends3;
          _default$8(target, (_extends3 = {}, _extends3[key] = source[key], _extends3));
        }
      }
    }
    return deepMerge.apply(void 0, [target].concat(sources));
  }
  function isFunctionComponent(component) {
    return typeOf(component) === "Function" && component.prototype && component.prototype.isReactComponent === void 0;
  }
  function isClassComponent(component) {
    return typeOf(component) === "Function" && component.prototype && component.prototype.isReactComponent !== void 0;
  }
  function isReactFragment$1(component) {
    if (isNil$2(component)) {
      return false;
    }
    if (component.type) {
      return component.type === React.Fragment;
    }
    return component === React.Fragment;
  }
  function values(obj2) {
    if (Object.values) {
      return Object.values(obj2);
    }
    var vals = [];
    for (var key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        vals.push(obj2[key]);
      }
    }
    return vals;
  }
  const _object = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    deepMerge,
    each,
    isArrayLike,
    isClassComponent,
    isFunctionComponent,
    isNil: isNil$2,
    isPlainObject: isPlainObject$1,
    isPromise,
    isReactFragment: isReactFragment$1,
    pickAttrsWith,
    pickOthers: pickOthers$9,
    pickProps,
    shallowEqual: shallowEqual$1,
    typeOf,
    values
  }, Symbol.toStringTag, { value: "Module" }));
  function camelcase(str) {
    if (!/-/.test(str)) {
      return str || "";
    }
    return str.toLowerCase().replace(/-([a-z])/g, function($0, $1) {
      return $1.toUpperCase();
    });
  }
  function hyphenate(str) {
    var strType = typeOf(str);
    if (strType !== "String") {
      warning("[ hyphenate(str: string): string ] " + ("Expected arguments[0] to be a string but get a " + strType + ".") + "It will return an empty string without any processing.");
      return "";
    }
    return str.replace(/([A-Z])/g, function($0) {
      return "-" + $0.toLowerCase();
    });
  }
  var hasDOM = typeof window !== "undefined" && !!window.document && !!document.createElement;
  function hasClass$1(node, className) {
    if (!hasDOM || !node) {
      return false;
    }
    if (node.classList) {
      return node.classList.contains(className);
    } else {
      return node.className.indexOf(className) > -1;
    }
  }
  function addClass$2(node, className, _force) {
    if (!hasDOM || !node) {
      return;
    }
    if (node.classList) {
      node.classList.add(className);
    } else if (_force === true || !hasClass$1(node, className)) {
      node.className += " " + className;
    }
  }
  function removeClass$2(node, className, _force) {
    if (!hasDOM || !node) {
      return;
    }
    if (node.classList) {
      node.classList.remove(className);
    } else if (_force === true || hasClass$1(node, className)) {
      node.className = node.className.replace(className, "").replace(/\s+/g, " ").trim();
    }
  }
  function toggleClass(node, className) {
    if (!hasDOM || !node) {
      return false;
    }
    if (node.classList) {
      return node.classList.toggle(className);
    } else {
      var flag = hasClass$1(node, className);
      flag ? removeClass$2(node, className, true) : addClass$2(node, className, true);
      return !flag;
    }
  }
  var matches = function() {
    var matchesFn = null;
    if (hasDOM) {
      var _body = document.body || document.head;
      matchesFn = _body.matches ? "matches" : _body.webkitMatchesSelector ? "webkitMatchesSelector" : _body.msMatchesSelector ? "msMatchesSelector" : _body.mozMatchesSelector ? "mozMatchesSelector" : null;
    }
    return function(node, selector) {
      if (!hasDOM || !node) {
        return false;
      }
      return matchesFn ? node[matchesFn](selector) : false;
    };
  }();
  function _getComputedStyle(node) {
    return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
  }
  var PIXEL_PATTERN$1 = /margin|padding|width|height|max|min|offset|size|top/i;
  var removePixel = { left: 1, top: 1, right: 1, bottom: 1 };
  function _getStyleValue(node, type2, value) {
    type2 = type2.toLowerCase();
    if (value === "auto") {
      if (type2 === "height") {
        return node.offsetHeight || 0;
      }
      if (type2 === "width") {
        return node.offsetWidth || 0;
      }
    }
    if (!(type2 in removePixel)) {
      removePixel[type2] = PIXEL_PATTERN$1.test(type2);
    }
    return removePixel[type2] ? parseFloat(value) || 0 : value;
  }
  var floatMap = { cssFloat: 1, styleFloat: 1, float: 1 };
  function getNodeHozWhitespace(node) {
    var paddingLeft = getStyle$5(node, "paddingLeft");
    var paddingRight = getStyle$5(node, "paddingRight");
    var marginLeft = getStyle$5(node, "marginLeft");
    var marginRight = getStyle$5(node, "marginRight");
    return paddingLeft + paddingRight + marginLeft + marginRight;
  }
  function getStyle$5(node, name) {
    if (!hasDOM || !node) {
      return null;
    }
    var style = _getComputedStyle(node);
    if (arguments.length === 1) {
      return style;
    }
    if (isPlainObject$1(style)) {
      return null;
    }
    name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
    return _getStyleValue(node, name, style.getPropertyValue(hyphenate(name)) || node.style[camelcase(name)]);
  }
  function setStyle$2(node, name, value) {
    if (!hasDOM || !node) {
      return false;
    }
    if ((typeof name === "undefined" ? "undefined" : _default$6(name)) === "object" && arguments.length === 2) {
      each(name, function(val, key) {
        return setStyle$2(node, key, val);
      });
    } else {
      name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
      if (typeof value === "number" && PIXEL_PATTERN$1.test(name)) {
        value = value + "px";
      }
      node.style[camelcase(name)] = value;
    }
  }
  var isScrollDisplay$1 = function isScrollDisplay(element) {
    try {
      var scrollbarStyle = window.getComputedStyle(element, "::-webkit-scrollbar");
      return !scrollbarStyle || scrollbarStyle.getPropertyValue("display") !== "none";
    } catch (e2) {
    }
    return true;
  };
  function scrollbar() {
    var scrollDiv = document.createElement("div");
    scrollDiv.className += "just-to-get-scrollbar-size";
    setStyle$2(scrollDiv, {
      position: "absolute",
      width: "100px",
      height: "100px",
      overflow: "scroll",
      top: "-9999px"
    });
    document.body && document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    return {
      width: scrollbarWidth,
      height: scrollbarHeight
    };
  }
  function hasScroll$1(containerNode) {
    var overflow = getStyle$5(containerNode, "overflow");
    if (overflow === "hidden") {
      return false;
    }
    var parentNode = containerNode.parentNode;
    return parentNode && parentNode.scrollHeight > parentNode.clientHeight && scrollbar().width > 0 && isScrollDisplay$1(parentNode) && isScrollDisplay$1(containerNode);
  }
  function getOffset(node) {
    var rect = node.getBoundingClientRect();
    var win = node.ownerDocument.defaultView;
    return {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    };
  }
  function getPixels(len) {
    var win = document.defaultView;
    if (typeof +len === "number" && !isNaN(+len)) {
      return +len;
    }
    if (typeof len === "string") {
      var PX_REG = /(\d+)px/;
      var VH_REG = /(\d+)vh/;
      if (Array.isArray(len.match(PX_REG))) {
        return +len.match(PX_REG)[1] || 0;
      }
      if (Array.isArray(len.match(VH_REG))) {
        var _1vh = win.innerHeight / 100;
        return +(len.match(VH_REG)[1] * _1vh) || 0;
      }
    }
    return 0;
  }
  function getClosest(dom2, selector) {
    if (!hasDOM || !dom2) {
      return null;
    }
    if (!Element.prototype.closest) {
      if (!document.documentElement.contains(dom2))
        return null;
      do {
        if (getMatches(dom2, selector))
          return dom2;
        dom2 = dom2.parentElement;
      } while (dom2 !== null);
    } else {
      return dom2.closest(selector);
    }
    return null;
  }
  function getMatches(dom2, selector) {
    if (!hasDOM || !dom2) {
      return null;
    }
    if (Element.prototype.matches) {
      return dom2.matches(selector);
    } else if (Element.prototype.msMatchesSelector) {
      return dom2.msMatchesSelector(selector);
    } else if (Element.prototype.webkitMatchesSelector) {
      return dom2.webkitMatchesSelector(selector);
    }
    return null;
  }
  function saveRef$1(ref) {
    if (!ref) {
      return null;
    }
    return function(element) {
      if (typeof ref === "string") {
        throw new Error("can not set ref string for " + ref);
      } else if (typeof ref === "function") {
        ref(element);
      } else if (Object.prototype.hasOwnProperty.call(ref, "current")) {
        ref.current = element;
      }
    };
  }
  const _dom = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addClass: addClass$2,
    getClosest,
    getMatches,
    getNodeHozWhitespace,
    getOffset,
    getPixels,
    getStyle: getStyle$5,
    hasClass: hasClass$1,
    hasDOM,
    hasScroll: hasScroll$1,
    matches,
    removeClass: removeClass$2,
    saveRef: saveRef$1,
    scrollbar,
    setStyle: setStyle$2,
    toggleClass
  }, Symbol.toStringTag, { value: "Module" }));
  function _off(node, eventName, callback, useCapture) {
    if (node.removeEventListener) {
      node.removeEventListener(eventName, callback, useCapture || false);
    }
  }
  function on$1(node, eventName, callback, useCapture) {
    if (node.addEventListener) {
      node.addEventListener(eventName, callback, useCapture || false);
    }
    return {
      off: function off2() {
        return _off(node, eventName, callback, useCapture);
      }
    };
  }
  function once(node, eventName, callback, useCapture) {
    return on$1(node, eventName, function __fn() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
      _off(node, eventName, __fn, useCapture);
    }, useCapture);
  }
  const _events = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    off: _off,
    on: on$1,
    once
  }, Symbol.toStringTag, { value: "Module" }));
  var dayjs_min = { exports: {} };
  (function(module, exports) {
    !function(t2, e2) {
      module.exports = e2();
    }(commonjsGlobal, function() {
      var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
        return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m2 = function(t3, e3, n3) {
        var r3 = String(t3);
        return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t3(e3, n3) {
        if (e3.date() < n3.date())
          return -t3(n3, e3);
        var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, c2), s2 = n3 - i2 < 0, u2 = e3.clone().add(r3 + (s2 ? -1 : 1), c2);
        return +(-(r3 + (n3 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c2, y: h2, w: o, d: a, D: d2, h: u, m: s, s: i, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D = {};
      D[g2] = M;
      var p2 = "$isDayjsObject", S = function(t3) {
        return t3 instanceof _ || !(!t3 || !t3[p2]);
      }, w2 = function t3(e3, n3, r3) {
        var i2;
        if (!e3)
          return g2;
        if ("string" == typeof e3) {
          var s2 = e3.toLowerCase();
          D[s2] && (i2 = s2), n3 && (D[s2] = n3, i2 = s2);
          var u2 = e3.split("-");
          if (!i2 && u2.length > 1)
            return t3(u2[0]);
        } else {
          var a2 = e3.name;
          D[a2] = e3, i2 = a2;
        }
        return !r3 && i2 && (g2 = i2), i2 || !r3 && g2;
      }, O = function(t3, e3) {
        if (S(t3))
          return t3.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t3, n3.args = arguments, new _(n3);
      }, b2 = v2;
      b2.l = w2, b2.i = S, b2.w = function(t3, e3) {
        return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _ = function() {
        function M2(t3) {
          this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M2.prototype;
        return m3.parse = function(t3) {
          this.$d = function(t4) {
            var e3 = t4.date, n3 = t4.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r3 = e3.match($);
              if (r3) {
                var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
              }
            }
            return new Date(e3);
          }(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e3) {
          var n3 = O(t3);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m3.isAfter = function(t3, e3) {
          return O(t3) < this.startOf(e3);
        }, m3.isBefore = function(t3, e3) {
          return this.endOf(e3) < O(t3);
        }, m3.$g = function(t3, e3, n3) {
          return b2.u(t3) ? this[e3] : this.set(n3, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e3) {
          var n3 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
            var i2 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
            return r3 ? i2 : i2.endOf(a);
          }, $2 = function(t4, e4) {
            return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y3 = this.$W, M3 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r3 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r3 ? l3(1, M3) : l3(0, M3 + 1);
            case o:
              var g3 = this.$locale().weekStart || 0, D2 = (y3 < g3 ? y3 + 7 : y3) - g3;
              return l3(r3 ? m4 - D2 : m4 + (6 - D2), M3);
            case a:
            case d2:
              return $2(v3 + "Hours", 0);
            case u:
              return $2(v3 + "Minutes", 1);
            case s:
              return $2(v3 + "Seconds", 2);
            case i:
              return $2(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e3) {
          var n3, o2 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u] = f3 + "Hours", n3[s] = f3 + "Minutes", n3[i] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o2], $2 = o2 === a ? this.$D + (e3 - this.$W) : e3;
          if (o2 === c2 || o2 === h2) {
            var y3 = this.clone().set(d2, 1);
            y3.$d[l3]($2), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
          } else
            l3 && this.$d[l3]($2);
          return this.init(), this;
        }, m3.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r3, f3) {
          var d3, l3 = this;
          r3 = Number(r3);
          var $2 = b2.p(f3), y3 = function(t3) {
            var e3 = O(l3);
            return b2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
          };
          if ($2 === c2)
            return this.set(c2, this.$M + r3);
          if ($2 === h2)
            return this.set(h2, this.$y + r3);
          if ($2 === a)
            return y3(1);
          if ($2 === o)
            return y3(7);
          var M3 = (d3 = {}, d3[s] = e2, d3[u] = n2, d3[i] = t2, d3)[$2] || 1, m4 = this.$d.getTime() + r3 * M3;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m3.format = function(t3) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid())
            return n3.invalidDate || l2;
          var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i3, s3) {
            return t4 && (t4[n4] || t4(e3, r3)) || i3[n4].slice(0, s3);
          }, d3 = function(t4) {
            return b2.s(s2 % 12 || 12, t4, "0");
          }, $2 = f3 || function(t4, e4, n4) {
            var r4 = t4 < 12 ? "AM" : "PM";
            return n4 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y2, function(t4, r4) {
            return r4 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b2.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n3.monthsShort, a2, c3, 3);
                case "MMMM":
                  return h3(c3, a2);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h3(n3.weekdaysMin, e3.$W, o2, 2);
                case "ddd":
                  return h3(n3.weekdaysShort, e3.$W, o2, 3);
                case "dddd":
                  return o2[e3.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b2.s(s2, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b2.s(u2, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t4) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r3, d3, l3) {
          var $2, y3 = this, M3 = b2.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D2 = function() {
            return b2.m(y3, m4);
          };
          switch (M3) {
            case h2:
              $2 = D2() / 12;
              break;
            case c2:
              $2 = D2();
              break;
            case f2:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g3 - v3) / 6048e5;
              break;
            case a:
              $2 = (g3 - v3) / 864e5;
              break;
            case u:
              $2 = g3 / n2;
              break;
            case s:
              $2 = g3 / e2;
              break;
            case i:
              $2 = g3 / t2;
              break;
            default:
              $2 = g3;
          }
          return l3 ? $2 : b2.a($2);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D[this.$L];
        }, m3.locale = function(t3, e3) {
          if (!t3)
            return this.$L;
          var n3 = this.clone(), r3 = w2(t3, e3, true);
          return r3 && (n3.$L = r3), n3;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k2 = _.prototype;
      return O.prototype = k2, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
        k2[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e3) {
        return t3.$i || (t3(e3, _, O), t3.$i = true), O;
      }, O.locale = w2, O.isDayjs = S, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D[g2], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min);
  var dayjs_minExports = dayjs_min.exports;
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  var customParseFormat$1 = { exports: {} };
  (function(module, exports) {
    !function(e2, t2) {
      module.exports = t2();
    }(commonjsGlobal, function() {
      var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d\d/, r2 = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e3) {
        return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
      };
      var a = function(e3) {
        return function(t3) {
          this[e3] = +t3;
        };
      }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
        (this.zone || (this.zone = {})).offset = function(e4) {
          if (!e4)
            return 0;
          if ("Z" === e4)
            return 0;
          var t3 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
          return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
        }(e3);
      }], h2 = function(e3) {
        var t3 = o[e3];
        return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
      }, u = function(e3, t3) {
        var n3, r3 = o.meridiem;
        if (r3) {
          for (var i2 = 1; i2 <= 24; i2 += 1)
            if (e3.indexOf(r3(i2, 0, t3)) > -1) {
              n3 = i2 > 12;
              break;
            }
        } else
          n3 = e3 === (t3 ? "pm" : "PM");
        return n3;
      }, d2 = { A: [i, function(e3) {
        this.afternoon = u(e3, false);
      }], a: [i, function(e3) {
        this.afternoon = u(e3, true);
      }], S: [/\d/, function(e3) {
        this.milliseconds = 100 * +e3;
      }], SS: [n2, function(e3) {
        this.milliseconds = 10 * +e3;
      }], SSS: [/\d{3}/, function(e3) {
        this.milliseconds = +e3;
      }], s: [r2, a("seconds")], ss: [r2, a("seconds")], m: [r2, a("minutes")], mm: [r2, a("minutes")], H: [r2, a("hours")], h: [r2, a("hours")], HH: [r2, a("hours")], hh: [r2, a("hours")], D: [r2, a("day")], DD: [n2, a("day")], Do: [i, function(e3) {
        var t3 = o.ordinal, n3 = e3.match(/\d+/);
        if (this.day = n3[0], t3)
          for (var r3 = 1; r3 <= 31; r3 += 1)
            t3(r3).replace(/\[|\]/g, "") === e3 && (this.day = r3);
      }], M: [r2, a("month")], MM: [n2, a("month")], MMM: [i, function(e3) {
        var t3 = h2("months"), n3 = (h2("monthsShort") || t3.map(function(e4) {
          return e4.slice(0, 3);
        })).indexOf(e3) + 1;
        if (n3 < 1)
          throw new Error();
        this.month = n3 % 12 || n3;
      }], MMMM: [i, function(e3) {
        var t3 = h2("months").indexOf(e3) + 1;
        if (t3 < 1)
          throw new Error();
        this.month = t3 % 12 || t3;
      }], Y: [/[+-]?\d+/, a("year")], YY: [n2, function(e3) {
        this.year = s(e3);
      }], YYYY: [/\d{4}/, a("year")], Z: f2, ZZ: f2 };
      function c2(n3) {
        var r3, i2;
        r3 = n3, i2 = o && o.formats;
        for (var s2 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t3, n4, r4) {
          var o2 = r4 && r4.toUpperCase();
          return n4 || i2[r4] || e2[r4] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t4, n5) {
            return t4 || n5.slice(1);
          });
        })).match(t2), a2 = s2.length, f3 = 0; f3 < a2; f3 += 1) {
          var h3 = s2[f3], u2 = d2[h3], c3 = u2 && u2[0], l2 = u2 && u2[1];
          s2[f3] = l2 ? { regex: c3, parser: l2 } : h3.replace(/^\[|\]$/g, "");
        }
        return function(e3) {
          for (var t3 = {}, n4 = 0, r4 = 0; n4 < a2; n4 += 1) {
            var i3 = s2[n4];
            if ("string" == typeof i3)
              r4 += i3.length;
            else {
              var o2 = i3.regex, f4 = i3.parser, h4 = e3.slice(r4), u3 = o2.exec(h4)[0];
              f4.call(t3, u3), e3 = e3.replace(u3, "");
            }
          }
          return function(e4) {
            var t4 = e4.afternoon;
            if (void 0 !== t4) {
              var n5 = e4.hours;
              t4 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
            }
          }(t3), t3;
        };
      }
      return function(e3, t3, n3) {
        n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (s = e3.parseTwoDigitYear);
        var r3 = t3.prototype, i2 = r3.parse;
        r3.parse = function(e4) {
          var t4 = e4.date, r4 = e4.utc, s2 = e4.args;
          this.$u = r4;
          var a2 = s2[1];
          if ("string" == typeof a2) {
            var f3 = true === s2[2], h3 = true === s2[3], u2 = f3 || h3, d3 = s2[2];
            h3 && (d3 = s2[2]), o = this.$locale(), !f3 && d3 && (o = n3.Ls[d3]), this.$d = function(e5, t5, n4) {
              try {
                if (["x", "X"].indexOf(t5) > -1)
                  return new Date(("X" === t5 ? 1e3 : 1) * e5);
                var r5 = c2(t5)(e5), i3 = r5.year, o2 = r5.month, s3 = r5.day, a3 = r5.hours, f4 = r5.minutes, h4 = r5.seconds, u3 = r5.milliseconds, d4 = r5.zone, l3 = /* @__PURE__ */ new Date(), m3 = s3 || (i3 || o2 ? 1 : l3.getDate()), M2 = i3 || l3.getFullYear(), Y = 0;
                i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l3.getMonth());
                var p2 = a3 || 0, v2 = f4 || 0, D = h4 || 0, g2 = u3 || 0;
                return d4 ? new Date(Date.UTC(M2, Y, m3, p2, v2, D, g2 + 60 * d4.offset * 1e3)) : n4 ? new Date(Date.UTC(M2, Y, m3, p2, v2, D, g2)) : new Date(M2, Y, m3, p2, v2, D, g2);
              } catch (e6) {
                return /* @__PURE__ */ new Date("");
              }
            }(t4, a2, r4), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u2 && t4 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
          } else if (a2 instanceof Array)
            for (var l2 = a2.length, m2 = 1; m2 <= l2; m2 += 1) {
              s2[1] = a2[m2 - 1];
              var M = n3.apply(this, s2);
              if (M.isValid()) {
                this.$d = M.$d, this.$L = M.$L, this.init();
                break;
              }
              m2 === l2 && (this.$d = /* @__PURE__ */ new Date(""));
            }
          else
            i2.call(this, e4);
        };
      };
    });
  })(customParseFormat$1);
  var customParseFormatExports = customParseFormat$1.exports;
  const customParseFormat = /* @__PURE__ */ getDefaultExportFromCjs(customParseFormatExports);
  var updateLocale$1 = { exports: {} };
  (function(module, exports) {
    !function(e2, n2) {
      module.exports = n2();
    }(commonjsGlobal, function() {
      return function(e2, n2, t2) {
        t2.updateLocale = function(e3, n3) {
          var o = t2.Ls[e3];
          if (o)
            return (n3 ? Object.keys(n3) : []).forEach(function(e4) {
              o[e4] = n3[e4];
            }), o;
        };
      };
    });
  })(updateLocale$1);
  var updateLocaleExports = updateLocale$1.exports;
  const updateLocale = /* @__PURE__ */ getDefaultExportFromCjs(updateLocaleExports);
  var localeData$1 = { exports: {} };
  (function(module, exports) {
    !function(n2, e2) {
      module.exports = e2();
    }(commonjsGlobal, function() {
      return function(n2, e2, t2) {
        var r2 = e2.prototype, o = function(n3) {
          return n3 && (n3.indexOf ? n3 : n3.s);
        }, u = function(n3, e3, t3, r3, u2) {
          var i2 = n3.name ? n3 : n3.$locale(), a2 = o(i2[e3]), s2 = o(i2[t3]), f2 = a2 || s2.map(function(n4) {
            return n4.slice(0, r3);
          });
          if (!u2)
            return f2;
          var d2 = i2.weekStart;
          return f2.map(function(n4, e4) {
            return f2[(e4 + (d2 || 0)) % 7];
          });
        }, i = function() {
          return t2.Ls[t2.locale()];
        }, a = function(n3, e3) {
          return n3.formats[e3] || function(n4) {
            return n4.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n5, e4, t3) {
              return e4 || t3.slice(1);
            });
          }(n3.formats[e3.toUpperCase()]);
        }, s = function() {
          var n3 = this;
          return { months: function(e3) {
            return e3 ? e3.format("MMMM") : u(n3, "months");
          }, monthsShort: function(e3) {
            return e3 ? e3.format("MMM") : u(n3, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n3.$locale().weekStart || 0;
          }, weekdays: function(e3) {
            return e3 ? e3.format("dddd") : u(n3, "weekdays");
          }, weekdaysMin: function(e3) {
            return e3 ? e3.format("dd") : u(n3, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e3) {
            return e3 ? e3.format("ddd") : u(n3, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e3) {
            return a(n3.$locale(), e3);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r2.localeData = function() {
          return s.bind(this)();
        }, t2.localeData = function() {
          var n3 = i();
          return { firstDayOfWeek: function() {
            return n3.weekStart || 0;
          }, weekdays: function() {
            return t2.weekdays();
          }, weekdaysShort: function() {
            return t2.weekdaysShort();
          }, weekdaysMin: function() {
            return t2.weekdaysMin();
          }, months: function() {
            return t2.months();
          }, monthsShort: function() {
            return t2.monthsShort();
          }, longDateFormat: function(e3) {
            return a(n3, e3);
          }, meridiem: n3.meridiem, ordinal: n3.ordinal };
        }, t2.months = function() {
          return u(i(), "months");
        }, t2.monthsShort = function() {
          return u(i(), "monthsShort", "months", 3);
        }, t2.weekdays = function(n3) {
          return u(i(), "weekdays", null, null, n3);
        }, t2.weekdaysShort = function(n3) {
          return u(i(), "weekdaysShort", "weekdays", 3, n3);
        }, t2.weekdaysMin = function(n3) {
          return u(i(), "weekdaysMin", "weekdays", 2, n3);
        };
      };
    });
  })(localeData$1);
  var localeDataExports = localeData$1.exports;
  const localeData = /* @__PURE__ */ getDefaultExportFromCjs(localeDataExports);
  var quarterOfYear$1 = { exports: {} };
  (function(module, exports) {
    !function(t2, n2) {
      module.exports = n2();
    }(commonjsGlobal, function() {
      var t2 = "month", n2 = "quarter";
      return function(e2, i) {
        var r2 = i.prototype;
        r2.quarter = function(t3) {
          return this.$utils().u(t3) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t3 - 1));
        };
        var s = r2.add;
        r2.add = function(e3, i2) {
          return e3 = Number(e3), this.$utils().p(i2) === n2 ? this.add(3 * e3, t2) : s.bind(this)(e3, i2);
        };
        var u = r2.startOf;
        r2.startOf = function(e3, i2) {
          var r3 = this.$utils(), s2 = !!r3.u(i2) || i2;
          if (r3.p(e3) === n2) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t2).startOf("day") : this.month(3 * o + 2).endOf(t2).endOf("day");
          }
          return u.bind(this)(e3, i2);
        };
      };
    });
  })(quarterOfYear$1);
  var quarterOfYearExports = quarterOfYear$1.exports;
  const quarterOfYear = /* @__PURE__ */ getDefaultExportFromCjs(quarterOfYearExports);
  var advancedFormat$1 = { exports: {} };
  (function(module, exports) {
    !function(e2, t2) {
      module.exports = t2();
    }(commonjsGlobal, function() {
      return function(e2, t2) {
        var r2 = t2.prototype, n2 = r2.format;
        r2.format = function(e3) {
          var t3 = this, r3 = this.$locale();
          if (!this.isValid())
            return n2.bind(this)(e3);
          var s = this.$utils(), a = (e3 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e4) {
            switch (e4) {
              case "Q":
                return Math.ceil((t3.$M + 1) / 3);
              case "Do":
                return r3.ordinal(t3.$D);
              case "gggg":
                return t3.weekYear();
              case "GGGG":
                return t3.isoWeekYear();
              case "wo":
                return r3.ordinal(t3.week(), "W");
              case "w":
              case "ww":
                return s.s(t3.week(), "w" === e4 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t3.isoWeek(), "W" === e4 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t3.$H ? 24 : t3.$H), "k" === e4 ? 1 : 2, "0");
              case "X":
                return Math.floor(t3.$d.getTime() / 1e3);
              case "x":
                return t3.$d.getTime();
              case "z":
                return "[" + t3.offsetName() + "]";
              case "zzz":
                return "[" + t3.offsetName("long") + "]";
              default:
                return e4;
            }
          });
          return n2.bind(this)(a);
        };
      };
    });
  })(advancedFormat$1);
  var advancedFormatExports = advancedFormat$1.exports;
  const advancedFormat = /* @__PURE__ */ getDefaultExportFromCjs(advancedFormatExports);
  var weekOfYear$1 = { exports: {} };
  (function(module, exports) {
    !function(e2, t2) {
      module.exports = t2();
    }(commonjsGlobal, function() {
      var e2 = "week", t2 = "year";
      return function(i, n2, r2) {
        var f2 = n2.prototype;
        f2.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2)
            return this.add(7 * (i2 - this.week()), "day");
          var n3 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f3 = r2(this).startOf(t2).add(1, t2).date(n3), s = r2(this).endOf(e2);
            if (f3.isBefore(s))
              return 1;
          }
          var a = r2(this).startOf(t2).date(n3).startOf(e2).subtract(1, "millisecond"), o = this.diff(a, e2, true);
          return o < 0 ? r2(this).startOf("week").week() : Math.ceil(o);
        }, f2.weeks = function(e3) {
          return void 0 === e3 && (e3 = null), this.week(e3);
        };
      };
    });
  })(weekOfYear$1);
  var weekOfYearExports = weekOfYear$1.exports;
  const weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(weekOfYearExports);
  var zhCn = { exports: {} };
  (function(module, exports) {
    !function(e2, _) {
      module.exports = _(dayjs_minExports);
    }(commonjsGlobal, function(e2) {
      function _(e3) {
        return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
      }
      var t2 = _(e2), d2 = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e3, _2) {
        return "W" === _2 ? e3 + "周" : e3 + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e3, _2) {
        var t3 = 100 * e3 + _2;
        return t3 < 600 ? "凌晨" : t3 < 900 ? "早上" : t3 < 1100 ? "上午" : t3 < 1300 ? "中午" : t3 < 1800 ? "下午" : "晚上";
      } };
      return t2.default.locale(d2, null, true), d2;
    });
  })(zhCn);
  dayjs.extend(advancedFormat);
  dayjs.extend(quarterOfYear);
  dayjs.extend(customParseFormat);
  dayjs.extend(updateLocale);
  dayjs.extend(localeData);
  dayjs.extend(weekOfYear);
  dayjs.locale("zh-cn");
  var datejs = dayjs;
  datejs.isSelf = dayjs.isDayjs;
  dayjs.localeData();
  const datejs$1 = datejs;
  var noop$k = function noop() {
  };
  var prevent = function prevent2() {
    return false;
  };
  function makeChain$9() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      for (var i = 0, j = fns.length; i < j; i++) {
        if (fns[i] && fns[i].apply) {
          fns[i].apply(this, args);
        }
      }
    };
  }
  function bindCtx$b(ctx2, fns, ns) {
    if (typeof fns === "string") {
      fns = [fns];
    }
    ns = ns || ctx2;
    fns.forEach(function(fnName) {
      ns[fnName] = ns[fnName].bind(ctx2);
    });
  }
  function promiseCall(ret, success) {
    var failure = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : noop$k;
    if (isPromise(ret)) {
      return ret.then(function(result) {
        success(result);
        return result;
      }).catch(function(e2) {
        failure(e2);
      });
    }
    return ret !== false ? success(ret) : failure(ret);
  }
  function invoke(target, method, args) {
    var func2 = target && method in target ? target[method] : void 0;
    return func2 && func2.apply(void 0, args);
  }
  function renderNode(render2, defaultRender) {
    var renderProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var r2 = render2 !== void 0 ? render2 : defaultRender;
    if (renderProps && !Array.isArray(renderProps)) {
      renderProps = [renderProps];
    }
    return typeof r2 === "function" ? r2.apply(void 0, renderProps) : r2;
  }
  function checkDate(value, format2) {
    if (value === void 0) {
      value = null;
    }
    value = format2 ? datejs$1(value, format2) : datejs$1(value);
    return value.isValid() ? value : null;
  }
  function checkRangeDate(value, inputType, disabled) {
    var strictly = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    var format2 = arguments[4];
    var _ref = Array.isArray(value) ? [0, 1].map(function(i) {
      return checkDate(value[i], format2);
    }) : [null, null], begin = _ref[0], end = _ref[1];
    var _ref2 = Array.isArray(disabled) ? disabled : [disabled, disabled], disabledBegin = _ref2[0], disabledEnd = _ref2[1];
    if (strictly && begin && end && begin.isAfter(end)) {
      if (!disabledBegin && disabledEnd || // 本来是 (!disabledBegin && !disabledBegin && inputType === DATE_INPUT_TYPE.END)
      !disabledBegin && !disabledBegin && inputType === 1) {
        return [null, end];
      }
      return [begin, null];
    }
    return [begin, end];
  }
  const _func = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    bindCtx: bindCtx$b,
    checkDate,
    checkRangeDate,
    invoke,
    makeChain: makeChain$9,
    noop: noop$k,
    prevent,
    promiseCall,
    renderNode
  }, Symbol.toStringTag, { value: "Module" }));
  var animationEndEventNames = {
    WebkitAnimation: "webkitAnimationEnd",
    OAnimation: "oAnimationEnd",
    animation: "animationend"
  };
  var transitionEventNames = {
    WebkitTransition: "webkitTransitionEnd",
    OTransition: "oTransitionEnd",
    transition: "transitionend"
  };
  function _supportEnd(names) {
    if (!hasDOM) {
      return false;
    }
    var el = document.createElement("div");
    var ret = false;
    each(names, function(val, key) {
      if (el.style[key] !== void 0) {
        ret = { end: val };
        return false;
      }
    });
    return ret;
  }
  function _supportCSS(names) {
    if (!hasDOM) {
      return false;
    }
    var el = document.createElement("div");
    var ret = false;
    each(names, function(val, key) {
      each(val, function(item) {
        try {
          el.style[key] = item;
          ret = ret || el.style[key] === item;
        } catch (e2) {
        }
        return !ret;
      });
      return !ret;
    });
    return ret;
  }
  var animation = _supportEnd(animationEndEventNames);
  var transition = _supportEnd(transitionEventNames);
  var flex = _supportCSS({
    display: ["flex", "-webkit-flex", "-moz-flex", "-ms-flexbox"]
  });
  const _support = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    animation,
    flex,
    transition
  }, Symbol.toStringTag, { value: "Module" }));
  const _KEYCODE = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    // version 0.x
    ESCAPE: 27,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    // MacOS
    CONTROL: 17,
    OPTION: 18,
    CMD: 91,
    COMMAND: 91,
    DELETE: 8
  };
  function _isVisible$1(node) {
    while (node) {
      var _node = node, nodeName = _node.nodeName;
      if (nodeName === "BODY" || nodeName === "HTML") {
        break;
      }
      if (node.style.display === "none" || node.style.visibility === "hidden") {
        return false;
      }
      node = node.parentNode;
    }
    return true;
  }
  function _isFocusable$1(node) {
    var nodeName = node.nodeName.toLowerCase();
    var tabIndex = parseInt(node.getAttribute("tabindex"), 10);
    var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;
    if (_isVisible$1(node)) {
      if (nodeName === "input") {
        return !node.disabled && node.type !== "hidden";
      } else if (["select", "textarea", "button"].indexOf(nodeName) > -1) {
        return !node.disabled;
      } else if (nodeName === "a") {
        return node.getAttribute("href") || hasTabIndex;
      } else {
        return hasTabIndex;
      }
    }
    return false;
  }
  function getFocusNodeList$2(node) {
    var res = [];
    var nodeList = node.querySelectorAll("*");
    each(nodeList, function(item) {
      if (_isFocusable$1(item)) {
        var method = item.getAttribute("data-auto-focus") ? "unshift" : "push";
        res[method](item);
      }
    });
    if (_isFocusable$1(node)) {
      res.unshift(node);
    }
    return res;
  }
  var lastFocusElement = null;
  function saveLastFocusNode$1() {
    lastFocusElement = document.activeElement;
  }
  function clearLastFocusNode() {
    lastFocusElement = null;
  }
  function backLastFocusNode$1() {
    if (lastFocusElement) {
      try {
        lastFocusElement.focus();
      } catch (e2) {
      }
    }
  }
  function limitTabRange(node, e2) {
    if (e2.keyCode === _KEYCODE.TAB) {
      var tabNodeList = getFocusNodeList$2(node);
      var maxIndex = tabNodeList.length - 1;
      var index2 = tabNodeList.indexOf(document.activeElement);
      if (index2 > -1) {
        var targetIndex = index2 + (e2.shiftKey ? -1 : 1);
        targetIndex < 0 && (targetIndex = maxIndex);
        targetIndex > maxIndex && (targetIndex = 0);
        tabNodeList[targetIndex].focus();
        e2.preventDefault();
      }
    }
  }
  function focusRef$1(ref) {
    if (ref && ref.focus && typeof ref.focus === "function") {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      ref.focus.apply(ref, args);
    }
  }
  const _focus = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    backLastFocusNode: backLastFocusNode$1,
    clearLastFocusNode,
    focusRef: focusRef$1,
    getFocusNodeList: getFocusNodeList$2,
    limitTabRange,
    saveLastFocusNode: saveLastFocusNode$1
  }, Symbol.toStringTag, { value: "Module" }));
  function randomId(prefix) {
    var max2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e6;
    var rand = Math.ceil(Math.random() * max2);
    return prefix ? escapeForId(prefix) + "-" + rand : rand.toString(10);
  }
  function escapeForId(text) {
    if (!text) {
      return "";
    }
    if ((typeof text === "undefined" ? "undefined" : _default$6(text)) === "object") {
      text = JSON.stringify(text);
    } else if (typeof text !== "string") {
      text = String(text);
    }
    return text.replace(/['"]/gm, "").replace(/[\s'"]/gm, "-");
  }
  const _htmlId = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    escapeForId,
    randomId
  }, Symbol.toStringTag, { value: "Module" }));
  var timestamp = Date.now();
  function uuid(prefix) {
    prefix = prefix || "";
    return prefix + (timestamp++).toString(36);
  }
  var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\nalt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\ncharSet checked classID className colSpan cols content contentEditable contextMenu\ncontrols coords crossOrigin data dateTime default defer dir disabled download draggable\nencType form formAction formEncType formMethod formNoValidate formTarget frameBorder\nheaders height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\nis keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\nmediaGroup method min minLength multiple muted name noValidate nonce open\noptimum pattern placeholder poster preload radioGroup readOnly rel required\nreversed role rowSpan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellCheck src srcDoc srcLang srcSet start step style\nsummary tabIndex target title type useMap value width wmode wrap".replace(/\s+/g, " ").replace(/\t|\n|\r/g, "").split(" ");
  var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError".replace(/\s+/g, " ").replace(/\t|\n|\r/g, "").split(" ");
  var attrsPrefix = ["data-", "aria-"];
  const _pickAttrs = function(props) {
    var attrs = {};
    var _loop = function _loop2(key2) {
      if (attributes.indexOf(key2) > -1 || eventsName.indexOf(key2) > -1) {
        attrs[key2] = props[key2];
      } else if (attrsPrefix.map(function(prefix) {
        return new RegExp("^" + prefix);
      }).some(function(reg) {
        return key2.replace(reg, "") !== key2;
      })) {
        attrs[key2] = props[key2];
      }
    };
    for (var key in props) {
      _loop(key);
    }
    return attrs;
  };
  var dom = _dom;
  var env = _env;
  var events = _events;
  var func = _func;
  var log = _log;
  var obj = _object;
  var support = _support;
  var focus = _focus;
  var guid = uuid;
  var KEYCODE = _KEYCODE;
  var htmlId = _htmlId;
  var pickAttrs = _pickAttrs;
  const defaultLocale = {
    momentLocale: "zh-cn",
    Timeline: {
      expand: "展开",
      fold: "收起"
    },
    Balloon: {
      close: "关闭"
    },
    Card: {
      expand: "展开",
      fold: "收起"
    },
    Calendar: {
      today: "今天",
      now: "此刻",
      ok: "确定",
      clear: "清除",
      month: "月",
      year: "年",
      prevYear: "上一年",
      nextYear: "下一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      prevDecade: "上十年",
      nextDecade: "后十年",
      yearSelectAriaLabel: "选择年份",
      monthSelectAriaLabel: "选择月份"
    },
    DatePicker: {
      placeholder: "请选择日期",
      datetimePlaceholder: "请选择日期和时间",
      monthPlaceholder: "请选择月",
      yearPlaceholder: "请选择年",
      weekPlaceholder: "请选择周",
      now: "此刻",
      selectTime: "选择时间",
      selectDate: "选择日期",
      ok: "确定",
      clear: "清除",
      startPlaceholder: "起始日期",
      endPlaceholder: "结束日期",
      hour: "时",
      minute: "分",
      second: "秒"
    },
    Dialog: {
      close: "关闭",
      ok: "确定",
      cancel: "取消"
    },
    Drawer: {
      close: "关闭"
    },
    Message: {
      closeAriaLabel: "关闭"
    },
    Pagination: {
      prev: "上一页",
      next: "下一页",
      goTo: "到第",
      page: "页",
      go: "确定",
      total: "第{current}页，共{total}页",
      labelPrev: "上一页，当前第{current}页",
      labelNext: "下一页，当前第{current}页",
      inputAriaLabel: "请输入跳转到第几页",
      selectAriaLabel: "请选择每页显示几条",
      pageSize: "每页显示："
    },
    Input: {
      clear: "清除"
    },
    List: {
      empty: "没有数据"
    },
    Select: {
      selectPlaceholder: "请选择",
      autoCompletePlaceholder: "请输入",
      notFoundContent: "无选项",
      maxTagPlaceholder: "已选择 {selected}/{total} 项",
      selectAll: "全选"
    },
    TreeSelect: {
      maxTagPlaceholder: "已选择 {selected}/{total} 项",
      shortMaxTagPlaceholder: "已选择 {selected} 项"
    },
    Table: {
      empty: "没有数据",
      ok: "确认",
      reset: "重置",
      asc: "升序",
      desc: "降序",
      expanded: "已展开",
      folded: "已折叠",
      filter: "筛选",
      selectAll: "全选"
    },
    TimePicker: {
      placeholder: "请选择时间",
      clear: "清除",
      hour: "时",
      minute: "分",
      second: "秒",
      ok: "确定"
    },
    Transfer: {
      items: "项",
      item: "项",
      moveAll: "移动全部",
      searchPlaceholder: "请输入",
      moveToLeft: "撤销选中元素",
      moveToRight: "提交选中元素"
    },
    Upload: {
      card: {
        cancel: "取消",
        addPhoto: "上传图片",
        download: "下载",
        delete: "删除"
      },
      drag: {
        text: "点击或者拖动文件到虚线框内上传",
        hint: "支持 docx, xls, PDF, rar, zip, PNG, JPG 等类型的文件"
      },
      upload: {
        delete: "删除"
      }
    },
    Search: {
      buttonText: "搜索"
    },
    Tag: {
      delete: "删除"
    },
    Rating: {
      description: "评分选项"
    },
    Switch: {
      on: "已打开",
      off: "已关闭"
    },
    Tab: {
      closeAriaLabel: "关闭"
    },
    Form: {
      Validate: {
        default: "%s 校验失败",
        required: "%s 是必填字段",
        format: {
          number: "%s 不是合法的数字",
          email: "%s 不是合法的 email 地址",
          url: "%s 不是合法的 URL 地址",
          tel: "%s 不是合法的电话号码"
        },
        number: {
          length: "%s 长度必须是 %s",
          min: "%s 不得小于 %s",
          max: "%s 不得大于 %s",
          minLength: "%s 字段字符长度不得少于 %s",
          maxLength: "%s 字段字符长度不得超过 %s"
        },
        string: {
          length: "%s 长度必须是 %s",
          min: "%s 不得小于 %s",
          max: "%s 不得大于 %s",
          minLength: "%s 长度不得少于 %s",
          maxLength: "%s 长度不得超过 %s"
        },
        array: {
          length: "%s 个数必须是 %s",
          minLength: "%s 个数不得少于 %s",
          maxLength: "%s 个数不得超过 %s"
        },
        pattern: "%s 数值 %s 不匹配正则 %s"
      }
    }
  };
  var parseBoundary = function parseBoundary2(input) {
    var obj2 = void 0;
    if (input === void 0 || input === null) {
      return {};
    } else if (typeof input === "boolean") {
      obj2 = { open: input };
    } else {
      obj2 = _default$8({ open: true }, input);
    }
    return obj2;
  };
  function getContextProps$1(props, context, displayName) {
    var prefix = props.prefix, locale = props.locale;
    props.defaultPropsConfig;
    var pure = props.pure, rtl = props.rtl, device = props.device, popupContainer = props.popupContainer, errorBoundary = props.errorBoundary;
    var nextPrefix = context.nextPrefix, nextLocale = context.nextLocale, nextDefaultPropsConfig = context.nextDefaultPropsConfig, nextPure = context.nextPure, nextWarning = context.nextWarning, nextRtl = context.nextRtl, nextDevice = context.nextDevice, nextPopupContainer = context.nextPopupContainer, nextErrorBoundary = context.nextErrorBoundary;
    var newPrefix = prefix || nextPrefix;
    var localeFromContext = void 0;
    var newDisplayName = displayName;
    switch (displayName) {
      case "DatePicker2":
        newDisplayName = "DatePicker";
        break;
      case "Calendar2":
        newDisplayName = "Calendar";
        break;
      case "TimePicker2":
        newDisplayName = "TimePicker";
        break;
    }
    if (nextLocale) {
      localeFromContext = nextLocale[newDisplayName];
      if (localeFromContext) {
        localeFromContext.momentLocale = nextLocale.momentLocale;
      }
    }
    var newLocale = void 0;
    if (locale) {
      newLocale = obj.deepMerge({}, defaultLocale[newDisplayName], localeFromContext, locale);
    } else if (localeFromContext) {
      newLocale = obj.deepMerge({}, defaultLocale[newDisplayName], localeFromContext);
    }
    var newPure = typeof pure === "boolean" ? pure : nextPure;
    var newRtl = typeof rtl === "boolean" ? rtl : nextRtl;
    var newErrorBoundary = _default$8({}, parseBoundary(nextErrorBoundary), parseBoundary(errorBoundary));
    if (!("open" in newErrorBoundary)) {
      newErrorBoundary.open = false;
    }
    return {
      prefix: newPrefix,
      locale: newLocale,
      pure: newPure,
      rtl: newRtl,
      warning: nextWarning,
      defaultPropsConfig: nextDefaultPropsConfig || {},
      device: device || nextDevice || void 0,
      popupContainer: popupContainer || nextPopupContainer,
      errorBoundary: newErrorBoundary
    };
  }
  var _default$3 = function(obj2, keys2) {
    var target = {};
    for (var i in obj2) {
      if (keys2.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj2, i))
        continue;
      target[i] = obj2[i];
    }
    return target;
  };
  var reactIs$1 = { exports: {} };
  var reactIs_production_min = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function(a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function(a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  {
    reactIs$1.exports = reactIs_production_min;
  }
  var reactIsExports = reactIs$1.exports;
  var reactIs = reactIsExports;
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  function getStatics(component) {
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }
  var defineProperty$3 = Object.defineProperty;
  var getOwnPropertyNames4 = Object.getOwnPropertyNames;
  var getOwnPropertySymbols3 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor3 = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }
      var keys2 = getOwnPropertyNames4(sourceComponent);
      if (getOwnPropertySymbols3) {
        keys2 = keys2.concat(getOwnPropertySymbols3(sourceComponent));
      }
      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);
      for (var i = 0; i < keys2.length; ++i) {
        var key = keys2[i];
        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor2 = getOwnPropertyDescriptor3(sourceComponent, key);
          try {
            defineProperty$3(targetComponent, key, descriptor2);
          } catch (e2) {
          }
        }
      }
    }
    return targetComponent;
  }
  var hoistNonReactStatics_cjs = hoistNonReactStatics;
  const hoistNonReactStatic = /* @__PURE__ */ getDefaultExportFromCjs(hoistNonReactStatics_cjs);
  var _class$1c, _temp$W;
  DefaultUI.propTypes = {
    error: PropTypes$1.object,
    errorInfo: PropTypes$1.object
  };
  function DefaultUI() {
    return "";
  }
  var ErrorBoundary = (_temp$W = _class$1c = function(_React$Component) {
    _default$4(ErrorBoundary2, _React$Component);
    function ErrorBoundary2(props) {
      _default$7(this, ErrorBoundary2);
      var _this2 = _default$5(this, _React$Component.call(this, props));
      _this2.state = { error: null, errorInfo: null };
      return _this2;
    }
    ErrorBoundary2.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo
      });
      var afterCatch = this.props.afterCatch;
      if ("afterCatch" in this.props && typeof afterCatch === "function") {
        this.props.afterCatch(error, errorInfo);
      }
    };
    ErrorBoundary2.prototype.render = function render2() {
      var _props$fallbackUI = this.props.fallbackUI, FallbackUI = _props$fallbackUI === void 0 ? DefaultUI : _props$fallbackUI;
      if (this.state.errorInfo) {
        return React.createElement(FallbackUI, { error: this.state.error, errorInfo: this.state.errorInfo });
      }
      return this.props.children;
    };
    return ErrorBoundary2;
  }(React.Component), _class$1c.propTypes = {
    children: PropTypes$1.element,
    /**
     * 捕获错误后的自定义处理, 比如埋点上传
     * @param {Object} error 错误
     * @param {Object} errorInfo 错误详细信息
     */
    afterCatch: PropTypes$1.func,
    /**
     * 捕获错误后的展现 自定义组件
     * @param {Object} error 错误
     * @param {Object} errorInfo 错误详细信息
     * @returns {Element} 捕获错误后的处理
     */
    fallbackUI: PropTypes$1.func
  }, _temp$W);
  ErrorBoundary.displayName = "ErrorBoundary";
  var shallowEqual = obj.shallowEqual;
  function getDisplayName(Component2) {
    return Component2.displayName || Component2.name || "Component";
  }
  var globalLocales = void 0;
  var currentGlobalLanguage = "zh-cn";
  var currentGlobalLocale = {};
  var currentGlobalRtl = void 0;
  function initLocales(locales) {
    globalLocales = locales;
    if (locales) {
      currentGlobalLocale = locales[currentGlobalLanguage];
      if (typeof currentGlobalRtl !== "boolean") {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
      }
    }
  }
  function setLanguage(language) {
    if (globalLocales) {
      currentGlobalLanguage = language;
      currentGlobalLocale = globalLocales[language];
      if (typeof currentGlobalRtl !== "boolean") {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
      }
    }
  }
  function setLocale(locale) {
    currentGlobalLocale = _default$8({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);
    if (typeof currentGlobalRtl !== "boolean") {
      currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
  }
  function setDirection(dir) {
    currentGlobalRtl = dir === "rtl";
  }
  function getLocale() {
    return currentGlobalLocale;
  }
  function getLanguage() {
    return currentGlobalLanguage;
  }
  function getDirection() {
    return currentGlobalRtl;
  }
  function config$1(Component2) {
    var _class2, _temp3;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (obj.isClassComponent(Component2) && Component2.prototype.shouldComponentUpdate === void 0) {
      Component2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        if (this.props.pure) {
          return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
        }
        return true;
      };
    }
    var ConfigedComponent = (_temp3 = _class2 = function(_React$Component) {
      _default$4(ConfigedComponent2, _React$Component);
      function ConfigedComponent2(props, context) {
        _default$7(this, ConfigedComponent2);
        var _this2 = _default$5(this, _React$Component.call(this, props, context));
        _this2._getInstance = _this2._getInstance.bind(_this2);
        _this2._deprecated = _this2._deprecated.bind(_this2);
        return _this2;
      }
      ConfigedComponent2.prototype._getInstance = function _getInstance(ref) {
        var _this2 = this;
        this._instance = ref;
        if (this._instance && options.exportNames) {
          options.exportNames.forEach(function(name) {
            var field = _this2._instance[name];
            if (typeof field === "function") {
              _this2[name] = field.bind(_this2._instance);
            } else {
              _this2[name] = field;
            }
          });
        }
      };
      ConfigedComponent2.prototype._deprecated = function _deprecated() {
        if (this.context.nextWarning !== false) {
          log.deprecated.apply(log, arguments);
        }
      };
      ConfigedComponent2.prototype.getInstance = function getInstance() {
        return this._instance;
      };
      ConfigedComponent2.prototype.render = function render2() {
        var _props = this.props, prefix = _props.prefix, locale = _props.locale, defaultPropsConfig = _props.defaultPropsConfig, pure = _props.pure, rtl = _props.rtl, device = _props.device, popupContainer = _props.popupContainer, errorBoundary = _props.errorBoundary, others = _default$3(_props, ["prefix", "locale", "defaultPropsConfig", "pure", "rtl", "device", "popupContainer", "errorBoundary"]);
        var _context = this.context, nextPrefix = _context.nextPrefix, _context$nextLocale = _context.nextLocale, nextLocale = _context$nextLocale === void 0 ? {} : _context$nextLocale, _context$nextDefaultP = _context.nextDefaultPropsConfig, nextDefaultPropsConfig = _context$nextDefaultP === void 0 ? {} : _context$nextDefaultP, nextPure = _context.nextPure, nextRtl = _context.nextRtl, nextDevice = _context.nextDevice, nextPopupContainer = _context.nextPopupContainer, nextErrorBoundary = _context.nextErrorBoundary;
        var displayName = options.componentName || getDisplayName(Component2);
        var contextProps = getContextProps$1({
          prefix,
          locale,
          defaultPropsConfig,
          pure,
          device,
          popupContainer,
          rtl,
          errorBoundary
        }, {
          nextPrefix,
          nextLocale: _default$8({}, currentGlobalLocale, nextLocale),
          nextDefaultPropsConfig,
          nextPure,
          nextDevice,
          nextPopupContainer,
          nextRtl: typeof nextRtl === "boolean" ? nextRtl : currentGlobalRtl === true ? true : void 0,
          nextErrorBoundary
        }, displayName);
        var newContextProps = ["prefix", "locale", "pure", "rtl", "device", "popupContainer"].reduce(function(ret, name) {
          if (typeof contextProps[name] !== "undefined") {
            ret[name] = contextProps[name];
          }
          return ret;
        }, {});
        if ("pure" in newContextProps && newContextProps.pure) {
          log.warning("pure of ConfigProvider is deprecated, use Function Component or React.PureComponent");
        }
        if ("popupContainer" in newContextProps && this.props.container === void 0 && ["Overlay", "Popup"].indexOf(displayName) > -1) {
          newContextProps.container = newContextProps.popupContainer;
          delete newContextProps.popupContainer;
        }
        var newOthers = options.transform ? options.transform(others, this._deprecated) : others;
        var content = React.createElement(Component2, _default$8({}, contextProps.defaultPropsConfig[displayName], newOthers, newContextProps, {
          ref: this._getInstance
        }));
        var _contextProps$errorBo = contextProps.errorBoundary, open2 = _contextProps$errorBo.open, othersBoundary = _default$3(_contextProps$errorBo, ["open"]);
        return open2 ? React.createElement(
          ErrorBoundary,
          othersBoundary,
          content
        ) : content;
      };
      return ConfigedComponent2;
    }(React.Component), _class2.propTypes = _default$8({}, Component2.propTypes || {}, {
      prefix: PropTypes$1.string,
      locale: PropTypes$1.object,
      defaultPropsConfig: PropTypes$1.object,
      pure: PropTypes$1.bool,
      rtl: PropTypes$1.bool,
      device: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
      popupContainer: PropTypes$1.any,
      errorBoundary: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object])
    }), _class2.contextTypes = _default$8({}, Component2.contextTypes || {}, {
      nextPrefix: PropTypes$1.string,
      nextLocale: PropTypes$1.object,
      nextDefaultPropsConfig: PropTypes$1.object,
      nextPure: PropTypes$1.bool,
      nextRtl: PropTypes$1.bool,
      nextWarning: PropTypes$1.bool,
      nextDevice: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
      nextPopupContainer: PropTypes$1.any,
      nextErrorBoundary: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object])
    }), _temp3);
    ConfigedComponent.displayName = "ConfigedComponent";
    ConfigedComponent.displayName = "Config(" + getDisplayName(Component2) + ")";
    hoistNonReactStatic(ConfigedComponent, Component2);
    return ConfigedComponent;
  }
  var mapKeys = function mapKeys2(obj2, fn) {
    var result = {};
    for (var key in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, key)) {
        var value = obj2[key];
        var newKey = fn(key, value);
        result[newKey] = value;
      }
    }
    return result;
  };
  var replaceKey = function replaceKey2(key) {
    return key.replace(/^(next)([A-Z])/, function(match, p1, p2) {
      return p2.toLowerCase();
    });
  };
  var transformContext = function transformContext2(source) {
    return mapKeys(source, replaceKey);
  };
  var Consumer = function Consumer2(_ref, context) {
    var children = _ref.children;
    return typeof children === "function" ? children(transformContext(context)) : null;
  };
  Consumer.propTypes = {
    // Render context as function
    // Function(context: object): ReactElement
    children: PropTypes$1.func
  };
  Consumer.contextTypes = {
    nextPrefix: PropTypes$1.string,
    nextLocale: PropTypes$1.object,
    nextPure: PropTypes$1.bool,
    newRtl: PropTypes$1.bool,
    nextWarning: PropTypes$1.bool,
    nextDevice: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
    nextPopupContainer: PropTypes$1.any
  };
  const Consumer$1 = Consumer;
  var Cache = function() {
    function Cache2() {
      _default$7(this, Cache2);
      this._root = null;
      this._store = /* @__PURE__ */ new Map();
    }
    Cache2.prototype.empty = function empty() {
      return this._store.size === 0;
    };
    Cache2.prototype.has = function has2(key) {
      return this._store.has(key);
    };
    Cache2.prototype.get = function get(key, defaultValue) {
      var res = this.has(key) ? this._store.get(key) : this.root();
      return typeof res === "undefined" || res === null ? defaultValue : res;
    };
    Cache2.prototype.add = function add(key, value) {
      if (this.empty()) {
        this._root = key;
      }
      this._store.set(key, value);
    };
    Cache2.prototype.update = function update(key, value) {
      if (this.has(key)) {
        this._store.set(key, value);
      }
    };
    Cache2.prototype.remove = function remove(key) {
      this._store.delete(key);
      if (key === this._root) {
        var maps = this._store.keys();
        var nextkey = maps.next().value;
        this._root = nextkey;
      }
    };
    Cache2.prototype.clear = function clear() {
      this._store.clear();
    };
    Cache2.prototype.root = function root() {
      return this._store.get(this._root);
    };
    return Cache2;
  }();
  const Cache$1 = Cache;
  var _class$1b, _temp$V;
  var childContextCache = new Cache$1();
  var setMomentLocale = function setMomentLocale2(locale) {
    var moment = void 0;
    try {
      moment = require("moment");
      if (moment && moment.default && moment.default.isMoment)
        moment = moment.default;
    } catch (e2) {
    }
    if (moment && moment.locale && locale) {
      moment.locale(locale.momentLocale);
    }
  };
  var setDateLocale = function setDateLocale2(locale) {
    if (locale) {
      datejs$1.locale(locale.dateLocale || locale.momentLocale);
    }
  };
  var ConfigProvider = (_temp$V = _class$1b = function(_Component) {
    _default$4(ConfigProvider2, _Component);
    function ConfigProvider2() {
      _default$7(this, ConfigProvider2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var _this2 = _default$5(this, _Component.call.apply(_Component, [this].concat(args)));
      childContextCache.add(_this2, _default$8({}, childContextCache.get(_this2, {}), _this2.getChildContext()));
      setMomentLocale(_this2.props.locale);
      setDateLocale(_this2.props.locale);
      _this2.state = {
        locale: _this2.props.locale
      };
      return _this2;
    }
    ConfigProvider2.prototype.getChildContext = function getChildContext() {
      var _props = this.props, prefix = _props.prefix, locale = _props.locale, defaultPropsConfig = _props.defaultPropsConfig, pure = _props.pure, warning2 = _props.warning, rtl = _props.rtl, device = _props.device, popupContainer = _props.popupContainer, errorBoundary = _props.errorBoundary;
      var _context = this.context, nextPrefix = _context.nextPrefix, nextDefaultPropsConfig = _context.nextDefaultPropsConfig, nextLocale = _context.nextLocale, nextPure = _context.nextPure, nextRtl = _context.nextRtl, nextWarning = _context.nextWarning, nextDevice = _context.nextDevice, nextPopupContainer = _context.nextPopupContainer, nextErrorBoundary = _context.nextErrorBoundary;
      return {
        nextPrefix: prefix || nextPrefix,
        nextDefaultPropsConfig: defaultPropsConfig || nextDefaultPropsConfig,
        nextLocale: locale || nextLocale,
        nextPure: typeof pure === "boolean" ? pure : nextPure,
        nextRtl: typeof rtl === "boolean" ? rtl : nextRtl,
        nextWarning: typeof warning2 === "boolean" ? warning2 : nextWarning,
        nextDevice: device || nextDevice,
        nextPopupContainer: popupContainer || nextPopupContainer,
        nextErrorBoundary: errorBoundary || nextErrorBoundary
      };
    };
    ConfigProvider2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.locale !== prevState.locale) {
        setMomentLocale(nextProps.locale);
        setDateLocale(nextProps.locale);
        return {
          locale: nextProps.locale
        };
      }
      return null;
    };
    ConfigProvider2.prototype.componentDidUpdate = function componentDidUpdate() {
      childContextCache.add(this, _default$8({}, childContextCache.get(this, {}), this.getChildContext()));
    };
    ConfigProvider2.prototype.componentWillUnmount = function componentWillUnmount() {
      childContextCache.remove(this);
    };
    ConfigProvider2.prototype.render = function render2() {
      return React.Children.only(this.props.children);
    };
    return ConfigProvider2;
  }(React.Component), _class$1b.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes$1.string,
    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale: PropTypes$1.object,
    /**
     * 组件 API 的默认配置
     */
    defaultPropsConfig: PropTypes$1.object,
    /**
     * 是否开启错误捕捉 errorBoundary
     * 如需自定义参数，请传入对象 对象接受参数列表如下：
     *
     * fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示
     * afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传
     */
    errorBoundary: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: PropTypes$1.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: PropTypes$1.bool,
    /**
     * 是否开启 rtl 模式
     */
    rtl: PropTypes$1.bool,
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     */
    device: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
    /**
     * 组件树
     */
    children: PropTypes$1.any,
    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数
     */
    popupContainer: PropTypes$1.any
  }, _class$1b.defaultProps = {
    warning: true,
    errorBoundary: false
  }, _class$1b.contextTypes = {
    nextPrefix: PropTypes$1.string,
    nextLocale: PropTypes$1.object,
    nextDefaultPropsConfig: PropTypes$1.object,
    nextPure: PropTypes$1.bool,
    nextRtl: PropTypes$1.bool,
    nextWarning: PropTypes$1.bool,
    nextDevice: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
    nextPopupContainer: PropTypes$1.any,
    nextErrorBoundary: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object])
  }, _class$1b.childContextTypes = {
    nextPrefix: PropTypes$1.string,
    nextLocale: PropTypes$1.object,
    nextDefaultPropsConfig: PropTypes$1.object,
    nextPure: PropTypes$1.bool,
    nextRtl: PropTypes$1.bool,
    nextWarning: PropTypes$1.bool,
    nextDevice: PropTypes$1.oneOf(["tablet", "desktop", "phone"]),
    nextPopupContainer: PropTypes$1.any,
    nextErrorBoundary: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object])
  }, _class$1b.config = function(Component2, options) {
    return config$1(Component2, options);
  }, _class$1b.getContextProps = function(props, displayName) {
    return getContextProps$1(props, childContextCache.root() || {}, displayName);
  }, _class$1b.clearCache = function() {
    childContextCache.clear();
  }, _class$1b.initLocales = initLocales, _class$1b.setLanguage = setLanguage, _class$1b.setLocale = setLocale, _class$1b.setDirection = setDirection, _class$1b.getLanguage = getLanguage, _class$1b.getLocale = getLocale, _class$1b.getDirection = getDirection, _class$1b.Consumer = Consumer$1, _class$1b.ErrorBoundary = ErrorBoundary, _class$1b.getContext = function() {
    var _ref = childContextCache.root() || {}, nextPrefix = _ref.nextPrefix, nextLocale = _ref.nextLocale, nextDefaultPropsConfig = _ref.nextDefaultPropsConfig, nextPure = _ref.nextPure, nextRtl = _ref.nextRtl, nextWarning = _ref.nextWarning, nextDevice = _ref.nextDevice, nextPopupContainer = _ref.nextPopupContainer, nextErrorBoundary = _ref.nextErrorBoundary;
    return {
      prefix: nextPrefix,
      locale: nextLocale,
      defaultPropsConfig: nextDefaultPropsConfig,
      pure: nextPure,
      rtl: nextRtl,
      warning: nextWarning,
      device: nextDevice,
      popupContainer: nextPopupContainer,
      errorBoundary: nextErrorBoundary
    };
  }, _temp$V);
  ConfigProvider.displayName = "ConfigProvider";
  const ConfigProvider$1 = polyfill(ConfigProvider);
  function getScroll(node, isVertical) {
    if (typeof window === "undefined") {
      return 0;
    }
    var windowProp = isVertical ? "pageYOffset" : "pageXOffset";
    var elementProp = isVertical ? "scrollTop" : "scrollLeft";
    return node === window ? node[windowProp] : node[elementProp];
  }
  function getRect(node) {
    return node !== window ? node.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
  }
  function getNodeHeight(node) {
    if (!node) {
      return 0;
    }
    if (node === window) {
      return window.innerHeight;
    }
    return node.clientHeight;
  }
  var _class$1a, _temp$U;
  var Affix = (_temp$U = _class$1a = function(_React$Component) {
    _default$4(Affix2, _React$Component);
    Affix2._getAffixMode = function _getAffixMode(nextProps) {
      var affixMode = {
        top: false,
        bottom: false,
        offset: 0
      };
      if (!nextProps) {
        return affixMode;
      }
      var offsetTop = nextProps.offsetTop, offsetBottom = nextProps.offsetBottom;
      if (typeof offsetTop !== "number" && typeof offsetBottom !== "number") {
        affixMode.top = true;
      } else if (typeof offsetTop === "number") {
        affixMode.top = true;
        affixMode.bottom = false;
        affixMode.offset = offsetTop;
      } else if (typeof offsetBottom === "number") {
        affixMode.bottom = true;
        affixMode.top = false;
        affixMode.offset = offsetBottom;
      }
      return affixMode;
    };
    function Affix2(props, context) {
      _default$7(this, Affix2);
      var _this2 = _default$5(this, _React$Component.call(this, props, context));
      _this2._clearContainerEvent = function() {
        if (_this2.timeout) {
          clearTimeout(_this2.timeout);
          _this2.timeout = null;
        }
        var container4 = _this2.props.container;
        _this2._removeEventHandlerForContainer(container4);
      };
      _this2.updatePosition = function() {
        _this2._updateNodePosition();
      };
      _this2._updateNodePosition = function() {
        var affixMode = _this2.state.affixMode;
        var _this$props = _this2.props, container4 = _this$props.container, useAbsolute = _this$props.useAbsolute;
        var affixContainer = container4();
        if (!affixContainer || !_this2.affixNode) {
          return false;
        }
        var containerScrollTop = getScroll(affixContainer, true);
        var affixOffset = _this2._getOffset(_this2.affixNode, affixContainer);
        var containerHeight = getNodeHeight(affixContainer);
        var affixHeight = _this2.affixNode.offsetHeight;
        var containerRect = getRect(affixContainer);
        var affixChildHeight = _this2.affixChildNode.offsetHeight;
        var affixStyle = {
          width: affixOffset.width
        };
        var containerStyle = {
          width: affixOffset.width,
          height: affixChildHeight
        };
        var positionStyle = null;
        if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
          if (useAbsolute) {
            affixStyle.position = "absolute";
            affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
            positionStyle = "relative";
          } else {
            affixStyle.position = "fixed";
            affixStyle.top = affixMode.offset + containerRect.top;
          }
          _this2._setAffixStyle(affixStyle, true);
          _this2._setContainerStyle(containerStyle);
        } else if (affixMode.bottom && containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
          affixStyle.height = affixHeight;
          if (useAbsolute) {
            affixStyle.position = "absolute";
            affixStyle.top = containerScrollTop - (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
            positionStyle = "relative";
          } else {
            affixStyle.position = "fixed";
            affixStyle.bottom = affixMode.offset;
          }
          _this2._setAffixStyle(affixStyle, true);
          _this2._setContainerStyle(containerStyle);
        } else {
          _this2._setAffixStyle(null);
          _this2._setContainerStyle(null);
        }
        if (_this2.state.positionStyle !== positionStyle) {
          _this2.setState({ positionStyle });
        }
      };
      _this2._affixNodeRefHandler = function(ref) {
        _this2.affixNode = ref;
      };
      _this2._affixChildNodeRefHandler = function(ref) {
        _this2.affixChildNode = ref;
      };
      _this2.state = {
        style: null,
        containerStyle: null,
        positionStyle: null,
        affixMode: Affix2._getAffixMode(props)
      };
      _this2.resizeObserver = new index$2(_this2._updateNodePosition);
      return _this2;
    }
    Affix2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if ("offsetTop" in nextProps || "offsetBottom" in nextProps) {
        return {
          affixMode: Affix2._getAffixMode(nextProps)
        };
      }
      return null;
    };
    Affix2.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;
      var container4 = this.props.container;
      this.timeout = setTimeout(function() {
        _this2._updateNodePosition();
        _this2._setEventHandlerForContainer(container4);
      });
    };
    Affix2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (prevProps.container() !== this.props.container()) {
        this._clearContainerEvent();
        this.timeout = setTimeout(function() {
          _this3._setEventHandlerForContainer(_this3.props.container);
        });
      }
      setTimeout(this._updateNodePosition);
    };
    Affix2.prototype.componentWillUnmount = function componentWillUnmount() {
      this._clearContainerEvent();
    };
    Affix2.prototype._setEventHandlerForContainer = function _setEventHandlerForContainer(getContainer3) {
      var container4 = getContainer3();
      if (!container4) {
        return;
      }
      events.on(container4, "scroll", this._updateNodePosition, false);
      this.resizeObserver.observe(this.affixNode);
    };
    Affix2.prototype._removeEventHandlerForContainer = function _removeEventHandlerForContainer(getContainer3) {
      var container4 = getContainer3();
      if (container4) {
        events.off(container4, "scroll", this._updateNodePosition);
        this.resizeObserver.disconnect();
      }
    };
    Affix2.prototype._setAffixStyle = function _setAffixStyle(affixStyle) {
      var affixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (obj.shallowEqual(affixStyle, this.state.style)) {
        return;
      }
      this.setState({
        style: affixStyle
      });
      var onAffix = this.props.onAffix;
      if (affixed) {
        setTimeout(function() {
          return onAffix(true);
        });
      } else if (!affixStyle) {
        setTimeout(function() {
          return onAffix(false);
        });
      }
    };
    Affix2.prototype._setContainerStyle = function _setContainerStyle(containerStyle) {
      if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
        return;
      }
      this.setState({ containerStyle });
    };
    Affix2.prototype._getOffset = function _getOffset(affixNode, affixContainer) {
      var affixRect = affixNode.getBoundingClientRect();
      var containerRect = getRect(affixContainer);
      var containerScrollTop = getScroll(affixContainer, true);
      var containerScrollLeft = getScroll(affixContainer, false);
      return {
        top: affixRect.top - containerRect.top + containerScrollTop,
        left: affixRect.left - containerRect.left + containerScrollLeft,
        width: affixRect.width,
        height: affixRect.height
      };
    };
    Affix2.prototype.render = function render2() {
      var _classnames;
      var _state = this.state, affixMode = _state.affixMode, positionStyle = _state.positionStyle;
      var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, children = _props.children;
      var state = this.state;
      var classNames = classnames((_classnames = {}, _classnames[prefix + "affix"] = state.style, _classnames[prefix + "affix-top"] = !state.style && affixMode.top, _classnames[prefix + "affix-bottom"] = !state.style && affixMode.bottom, _classnames[className] = className, _classnames));
      var wrapperStyle = _default$8({}, style, { position: positionStyle });
      return React.createElement(
        "div",
        { ref: this._affixNodeRefHandler, style: wrapperStyle },
        state.style && React.createElement("div", { style: state.containerStyle, "aria-hidden": "true" }),
        React.createElement(
          "div",
          { ref: this._affixChildNodeRefHandler, className: classNames, style: state.style },
          children
        )
      );
    };
    return Affix2;
  }(React.Component), _class$1a.propTypes = {
    prefix: PropTypes$1.string,
    /**
     * 设置 Affix 需要监听滚动事件的容器元素
     * @return {ReactElement} 目标容器元素的实例
     */
    container: PropTypes$1.func,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: PropTypes$1.number,
    /**
     * 距离窗口底部达到制定偏移量后触发
     */
    offsetBottom: PropTypes$1.number,
    /**
     * 当元素的样式发生固钉样式变化时触发的回调函数
     * @param {Boolean} affixed 元素是否被固钉
     */
    onAffix: PropTypes$1.func,
    /**
     * 是否启用绝对布局实现 affix
     * @param {Boolean} 是否启用绝对布局
     */
    useAbsolute: PropTypes$1.bool,
    className: PropTypes$1.string,
    style: PropTypes$1.object,
    children: PropTypes$1.any
  }, _class$1a.defaultProps = {
    prefix: "next-",
    container: function container() {
      return window;
    },
    onAffix: func.noop
  }, _temp$U);
  Affix.displayName = "Affix";
  const Affix$1 = ConfigProvider$1.config(polyfill(Affix));
  var CSSTransition = { exports: {} };
  var addClass$1 = { exports: {} };
  var interopRequireDefault = { exports: {} };
  (function(module) {
    function _interopRequireDefault2(obj2) {
      return obj2 && obj2.__esModule ? obj2 : {
        "default": obj2
      };
    }
    module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);
  var interopRequireDefaultExports = interopRequireDefault.exports;
  var hasClass = { exports: {} };
  var hasRequiredHasClass;
  function requireHasClass() {
    if (hasRequiredHasClass)
      return hasClass.exports;
    hasRequiredHasClass = 1;
    (function(module, exports) {
      exports.__esModule = true;
      exports.default = hasClass2;
      function hasClass2(element, className) {
        if (element.classList)
          return !!className && element.classList.contains(className);
        else
          return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
      }
      module.exports = exports["default"];
    })(hasClass, hasClass.exports);
    return hasClass.exports;
  }
  (function(module, exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    exports.__esModule = true;
    exports.default = addClass2;
    var _hasClass = _interopRequireDefault2(requireHasClass());
    function addClass2(element, className) {
      if (element.classList)
        element.classList.add(className);
      else if (!(0, _hasClass.default)(element, className))
        if (typeof element.className === "string")
          element.className = element.className + " " + className;
        else
          element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    module.exports = exports["default"];
  })(addClass$1, addClass$1.exports);
  var addClassExports = addClass$1.exports;
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  var removeClass$1 = function removeClass(element, className) {
    if (element.classList)
      element.classList.remove(className);
    else if (typeof element.className === "string")
      element.className = replaceClassName(element.className, className);
    else
      element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  };
  var Transition$1 = {};
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(reactLifecyclesCompat_es);
  Transition$1.__esModule = true;
  Transition$1.default = Transition$1.EXITING = Transition$1.ENTERED = Transition$1.ENTERING = Transition$1.EXITED = Transition$1.UNMOUNTED = void 0;
  var PropTypes = _interopRequireWildcard(propTypesExports);
  var _react$1 = _interopRequireDefault$3(React);
  var _reactDom = _interopRequireDefault$3(ReactDOM);
  var _reactLifecyclesCompat = require$$2;
  function _interopRequireDefault$3(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  function _interopRequireWildcard(obj2) {
    if (obj2 && obj2.__esModule) {
      return obj2;
    } else {
      var newObj = {};
      if (obj2 != null) {
        for (var key in obj2) {
          if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj2[key];
            }
          }
        }
      }
      newObj.default = obj2;
      return newObj;
    }
  }
  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var UNMOUNTED = "unmounted";
  Transition$1.UNMOUNTED = UNMOUNTED;
  var EXITED = "exited";
  Transition$1.EXITED = EXITED;
  var ENTERING = "entering";
  Transition$1.ENTERING = ENTERING;
  var ENTERED = "entered";
  Transition$1.ENTERED = ENTERED;
  var EXITING = "exiting";
  Transition$1.EXITING = EXITING;
  var Transition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose$1(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this2;
      _this2 = _React$Component.call(this, props, context) || this;
      var parentGroup = context.transitionGroup;
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this2.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this2.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this2.state = {
        status: initialStatus
      };
      _this2.nextCallback = null;
      return _this2;
    }
    var _proto = Transition2.prototype;
    _proto.getChildContext = function getChildContext() {
      return {
        transitionGroup: null
        // allows for nested Transitions
      };
    };
    Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    };
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;
      if (timeout != null && typeof timeout !== "number") {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear !== void 0 ? timeout.appear : enter;
      }
      return {
        exit,
        enter,
        appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        this.cancelNextCallback();
        var node = _reactDom.default.findDOMNode(this);
        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
      var timeouts2 = this.getTimeouts();
      var enterTimeout = appearing ? timeouts2.appear : timeouts2.enter;
      if (!mounting && !enter) {
        this.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(node);
        });
        return;
      }
      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function() {
        _this2.props.onEntering(node, appearing);
        _this2.onTransitionEnd(node, enterTimeout, function() {
          _this2.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };
    _proto.performExit = function performExit(node) {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts2 = this.getTimeouts();
      if (!exit) {
        this.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function() {
        _this3.props.onExiting(node);
        _this3.onTransitionEnd(node, timeouts2.exit, function() {
          _this3.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(node);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function() {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };
    _proto.render = function render2() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props, children = _this$props.children, childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children"]);
      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;
      if (typeof children === "function") {
        return children(status, childProps);
      }
      var child = _react$1.default.Children.only(children);
      return _react$1.default.cloneElement(child, childProps);
    };
    return Transition2;
  }(_react$1.default.Component);
  Transition.contextTypes = {
    transitionGroup: PropTypes.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {
    }
  };
  Transition.propTypes = {};
  function noop$j() {
  }
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$j,
    onEntering: noop$j,
    onEntered: noop$j,
    onExit: noop$j,
    onExiting: noop$j,
    onExited: noop$j
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;
  var _default$2 = (0, _reactLifecyclesCompat.polyfill)(Transition);
  Transition$1.default = _default$2;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    _interopRequireWildcard2(propTypesExports);
    var _addClass = _interopRequireDefault2(addClassExports);
    var _removeClass = _interopRequireDefault2(removeClass$1);
    var _react2 = _interopRequireDefault2(React);
    var _Transition2 = _interopRequireDefault2(Transition$1);
    function _interopRequireDefault2(obj2) {
      return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
    }
    function _interopRequireWildcard2(obj2) {
      if (obj2 && obj2.__esModule) {
        return obj2;
      } else {
        var newObj = {};
        if (obj2 != null) {
          for (var key in obj2) {
            if (Object.prototype.hasOwnProperty.call(obj2, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj2[key];
              }
            }
          }
        }
        newObj.default = obj2;
        return newObj;
      }
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var addClass2 = function addClass3(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return (0, _addClass.default)(node, c2);
      });
    };
    var removeClass3 = function removeClass4(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return (0, _removeClass.default)(node, c2);
      });
    };
    var CSSTransition2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(CSSTransition3, _React$Component);
      function CSSTransition3() {
        var _this2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this2 = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this2.onEnter = function(node, appearing) {
          var _this$getClassNames = _this2.getClassNames(appearing ? "appear" : "enter"), className = _this$getClassNames.className;
          _this2.removeClasses(node, "exit");
          addClass2(node, className);
          if (_this2.props.onEnter) {
            _this2.props.onEnter(node, appearing);
          }
        };
        _this2.onEntering = function(node, appearing) {
          var _this$getClassNames2 = _this2.getClassNames(appearing ? "appear" : "enter"), activeClassName = _this$getClassNames2.activeClassName;
          _this2.reflowAndAddClass(node, activeClassName);
          if (_this2.props.onEntering) {
            _this2.props.onEntering(node, appearing);
          }
        };
        _this2.onEntered = function(node, appearing) {
          var appearClassName = _this2.getClassNames("appear").doneClassName;
          var enterClassName = _this2.getClassNames("enter").doneClassName;
          var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;
          _this2.removeClasses(node, appearing ? "appear" : "enter");
          addClass2(node, doneClassName);
          if (_this2.props.onEntered) {
            _this2.props.onEntered(node, appearing);
          }
        };
        _this2.onExit = function(node) {
          var _this$getClassNames3 = _this2.getClassNames("exit"), className = _this$getClassNames3.className;
          _this2.removeClasses(node, "appear");
          _this2.removeClasses(node, "enter");
          addClass2(node, className);
          if (_this2.props.onExit) {
            _this2.props.onExit(node);
          }
        };
        _this2.onExiting = function(node) {
          var _this$getClassNames4 = _this2.getClassNames("exit"), activeClassName = _this$getClassNames4.activeClassName;
          _this2.reflowAndAddClass(node, activeClassName);
          if (_this2.props.onExiting) {
            _this2.props.onExiting(node);
          }
        };
        _this2.onExited = function(node) {
          var _this$getClassNames5 = _this2.getClassNames("exit"), doneClassName = _this$getClassNames5.doneClassName;
          _this2.removeClasses(node, "exit");
          addClass2(node, doneClassName);
          if (_this2.props.onExited) {
            _this2.props.onExited(node);
          }
        };
        _this2.getClassNames = function(type2) {
          var classNames = _this2.props.classNames;
          var isStringClassNames = typeof classNames === "string";
          var prefix = isStringClassNames && classNames ? classNames + "-" : "";
          var className = isStringClassNames ? prefix + type2 : classNames[type2];
          var activeClassName = isStringClassNames ? className + "-active" : classNames[type2 + "Active"];
          var doneClassName = isStringClassNames ? className + "-done" : classNames[type2 + "Done"];
          return {
            className,
            activeClassName,
            doneClassName
          };
        };
        return _this2;
      }
      var _proto = CSSTransition3.prototype;
      _proto.removeClasses = function removeClasses(node, type2) {
        var _this$getClassNames6 = this.getClassNames(type2), className = _this$getClassNames6.className, activeClassName = _this$getClassNames6.activeClassName, doneClassName = _this$getClassNames6.doneClassName;
        className && removeClass3(node, className);
        activeClassName && removeClass3(node, activeClassName);
        doneClassName && removeClass3(node, doneClassName);
      };
      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        if (className) {
          node && node.scrollTop;
          addClass2(node, className);
        }
      };
      _proto.render = function render2() {
        var props = _extends2({}, this.props);
        delete props.classNames;
        return _react2.default.createElement(_Transition2.default, _extends2({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition3;
    }(_react2.default.Component);
    CSSTransition2.defaultProps = {
      classNames: ""
    };
    CSSTransition2.propTypes = {};
    var _default2 = CSSTransition2;
    exports.default = _default2;
    module.exports = exports["default"];
  })(CSSTransition, CSSTransition.exports);
  var CSSTransitionExports = CSSTransition.exports;
  var ReplaceTransition = { exports: {} };
  var TransitionGroup = { exports: {} };
  var ChildMapping = {};
  ChildMapping.__esModule = true;
  ChildMapping.getChildMapping = getChildMapping;
  ChildMapping.mergeChildMappings = mergeChildMappings;
  ChildMapping.getInitialChildMapping = getInitialChildMapping;
  ChildMapping.getNextChildMapping = getNextChildMapping;
  var _react = React;
  function getChildMapping(children, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children)
      _react.Children.map(children, function(c2) {
        return c2;
      }).forEach(function(child) {
        result[child.key] = mapper(child);
      });
    return result;
  }
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
      var child = children[key];
      if (!(0, _react.isValidElement)(child))
        return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = (0, _react.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children[key] = (0, _react.cloneElement)(child, {
          in: false
        });
      } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
        children[key] = (0, _react.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children;
  }
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(React);
    var _reactLifecyclesCompat2 = require$$2;
    var _ChildMapping = ChildMapping;
    function _interopRequireDefault2(obj2) {
      return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    var values2 = Object.values || function(obj2) {
      return Object.keys(obj2).map(function(k2) {
        return obj2[k2];
      });
    };
    var defaultProps = {
      component: "div",
      childFactory: function childFactory(child) {
        return child;
      }
      /**
       * The `<TransitionGroup>` component manages a set of transition components
       * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
       * components, `<TransitionGroup>` is a state machine for managing the mounting
       * and unmounting of components over time.
       *
       * Consider the example below. As items are removed or added to the TodoList the
       * `in` prop is toggled automatically by the `<TransitionGroup>`.
       *
       * Note that `<TransitionGroup>`  does not define any animation behavior!
       * Exactly _how_ a list item animates is up to the individual transition
       * component. This means you can mix and match animations across different list
       * items.
       */
    };
    var TransitionGroup2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(TransitionGroup3, _React$Component);
      function TransitionGroup3(props, context) {
        var _this2;
        _this2 = _React$Component.call(this, props, context) || this;
        var handleExited = _this2.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
        _this2.state = {
          handleExited,
          firstRender: true
        };
        return _this2;
      }
      var _proto = TransitionGroup3.prototype;
      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: {
            isMounting: !this.appeared
          }
        };
      };
      _proto.componentDidMount = function componentDidMount() {
        this.appeared = true;
        this.mounted = true;
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      TransitionGroup3.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
          children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };
      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping)
          return;
        if (child.props.onExited) {
          child.props.onExited(node);
        }
        if (this.mounted) {
          this.setState(function(state) {
            var children = _extends2({}, state.children);
            delete children[child.key];
            return {
              children
            };
          });
        }
      };
      _proto.render = function render2() {
        var _this$props = this.props, Component2 = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose2(_this$props, ["component", "childFactory"]);
        var children = values2(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component2 === null) {
          return children;
        }
        return _react2.default.createElement(Component2, props, children);
      };
      return TransitionGroup3;
    }(_react2.default.Component);
    TransitionGroup2.childContextTypes = {
      transitionGroup: _propTypes.default.object.isRequired
    };
    TransitionGroup2.propTypes = {};
    TransitionGroup2.defaultProps = defaultProps;
    var _default2 = (0, _reactLifecyclesCompat2.polyfill)(TransitionGroup2);
    exports.default = _default2;
    module.exports = exports["default"];
  })(TransitionGroup, TransitionGroup.exports);
  var TransitionGroupExports = TransitionGroup.exports;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(React);
    var _reactDom2 = ReactDOM;
    var _TransitionGroup2 = _interopRequireDefault2(TransitionGroupExports);
    function _interopRequireDefault2(obj2) {
      return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var ReplaceTransition2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(ReplaceTransition3, _React$Component);
      function ReplaceTransition3() {
        var _this2;
        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }
        _this2 = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
        _this2.handleEnter = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _this2.handleLifecycle("onEnter", 0, args);
        };
        _this2.handleEntering = function() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return _this2.handleLifecycle("onEntering", 0, args);
        };
        _this2.handleEntered = function() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return _this2.handleLifecycle("onEntered", 0, args);
        };
        _this2.handleExit = function() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return _this2.handleLifecycle("onExit", 1, args);
        };
        _this2.handleExiting = function() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return _this2.handleLifecycle("onExiting", 1, args);
        };
        _this2.handleExited = function() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          return _this2.handleLifecycle("onExited", 1, args);
        };
        return _this2;
      }
      var _proto = ReplaceTransition3.prototype;
      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;
        var children = this.props.children;
        var child = _react2.default.Children.toArray(children)[idx];
        if (child.props[handler])
          (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler])
          this.props[handler]((0, _reactDom2.findDOMNode)(this));
      };
      _proto.render = function render2() {
        var _this$props = this.props, children = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose2(_this$props, ["children", "in"]);
        var _React$Children$toArr = _react2.default.Children.toArray(children), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react2.default.createElement(_TransitionGroup2.default, props, inProp ? _react2.default.cloneElement(first, {
          key: "first",
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react2.default.cloneElement(second, {
          key: "second",
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };
      return ReplaceTransition3;
    }(_react2.default.Component);
    ReplaceTransition2.propTypes = {};
    var _default2 = ReplaceTransition2;
    exports.default = _default2;
    module.exports = exports["default"];
  })(ReplaceTransition, ReplaceTransition.exports);
  var ReplaceTransitionExports = ReplaceTransition.exports;
  var _CSSTransition = _interopRequireDefault$2(CSSTransitionExports);
  var _ReplaceTransition = _interopRequireDefault$2(ReplaceTransitionExports);
  var _TransitionGroup = _interopRequireDefault$2(TransitionGroupExports);
  var _Transition = _interopRequireDefault$2(Transition$1);
  function _interopRequireDefault$2(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var reactTransitionGroup = {
    Transition: _Transition.default,
    TransitionGroup: _TransitionGroup.default,
    ReplaceTransition: _ReplaceTransition.default,
    CSSTransition: _CSSTransition.default
  };
  var _class$19, _temp$T;
  var noop$i = function noop2() {
  };
  var on = events.on, off = events.off;
  var addClass = dom.addClass, removeClass2 = dom.removeClass;
  var prefixes$1 = ["-webkit-", "-moz-", "-o-", "ms-", ""];
  function getStyleProperty$1(node, name) {
    var style = window.getComputedStyle(node);
    var ret = "";
    for (var i = 0; i < prefixes$1.length; i++) {
      ret = style.getPropertyValue(prefixes$1[i] + name);
      if (ret) {
        break;
      }
    }
    return ret;
  }
  var AnimateChild = (_temp$T = _class$19 = function(_Component) {
    _default$4(AnimateChild2, _Component);
    function AnimateChild2(props) {
      _default$7(this, AnimateChild2);
      var _this2 = _default$5(this, _Component.call(this, props));
      func.bindCtx(_this2, ["handleEnter", "handleEntering", "handleEntered", "handleExit", "handleExiting", "handleExited", "addEndListener"]);
      _this2.endListeners = {
        transitionend: [],
        animationend: []
      };
      _this2.timeoutMap = {};
      return _this2;
    }
    AnimateChild2.prototype.componentWillUnmount = function componentWillUnmount() {
      var _this3 = this;
      Object.keys(this.endListeners).forEach(function(eventName) {
        _this3.endListeners[eventName].forEach(function(listener) {
          off(_this3.node, eventName, listener);
        });
      });
      this.endListeners = {
        transitionend: [],
        animationend: []
      };
    };
    AnimateChild2.prototype.generateEndListener = function generateEndListener(node, done, eventName, id2) {
      var _this2 = this;
      return function endListener(e2) {
        if (e2 && e2.target === node) {
          if (_this2.timeoutMap[id2]) {
            clearTimeout(_this2.timeoutMap[id2]);
            delete _this2.timeoutMap[id2];
          }
          done();
          off(node, eventName, endListener);
          var listeners = _this2.endListeners[eventName];
          var index2 = listeners.indexOf(endListener);
          index2 > -1 && listeners.splice(index2, 1);
        }
      };
    };
    AnimateChild2.prototype.addEndListener = function addEndListener(node, done) {
      var _this4 = this;
      if (support.transition || support.animation) {
        var id2 = guid();
        this.node = node;
        if (support.transition) {
          var transitionEndListener = this.generateEndListener(node, done, "transitionend", id2);
          on(node, "transitionend", transitionEndListener);
          this.endListeners.transitionend.push(transitionEndListener);
        }
        if (support.animation) {
          var animationEndListener = this.generateEndListener(node, done, "animationend", id2);
          on(node, "animationend", animationEndListener);
          this.endListeners.animationend.push(animationEndListener);
        }
        setTimeout(function() {
          var transitionDelay = parseFloat(getStyleProperty$1(node, "transition-delay")) || 0;
          var transitionDuration = parseFloat(getStyleProperty$1(node, "transition-duration")) || 0;
          var animationDelay = parseFloat(getStyleProperty$1(node, "animation-delay")) || 0;
          var animationDuration = parseFloat(getStyleProperty$1(node, "animation-duration")) || 0;
          var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
          if (time) {
            _this4.timeoutMap[id2] = setTimeout(function() {
              done();
            }, time * 1e3 + 200);
          }
        }, 15);
      } else {
        done();
      }
    };
    AnimateChild2.prototype.removeEndtListener = function removeEndtListener() {
      this.transitionOff && this.transitionOff();
      this.animationOff && this.animationOff();
    };
    AnimateChild2.prototype.removeClassNames = function removeClassNames(node, names) {
      Object.keys(names).forEach(function(key) {
        removeClass2(node, names[key]);
      });
    };
    AnimateChild2.prototype.handleEnter = function handleEnter(node, isAppearing) {
      var names = this.props.names;
      if (names) {
        this.removeClassNames(node, names);
        var className = isAppearing ? "appear" : "enter";
        addClass(node, names[className]);
      }
      var hook = isAppearing ? this.props.onAppear : this.props.onEnter;
      hook(node);
    };
    AnimateChild2.prototype.handleEntering = function handleEntering(node, isAppearing) {
      var _this5 = this;
      setTimeout(function() {
        var names = _this5.props.names;
        if (names) {
          var className = isAppearing ? "appearActive" : "enterActive";
          addClass(node, names[className]);
        }
        var hook = isAppearing ? _this5.props.onAppearing : _this5.props.onEntering;
        hook(node);
      }, 10);
    };
    AnimateChild2.prototype.handleEntered = function handleEntered(node, isAppearing) {
      var names = this.props.names;
      if (names) {
        var classNames = isAppearing ? [names.appear, names.appearActive] : [names.enter, names.enterActive];
        classNames.forEach(function(className) {
          removeClass2(node, className);
        });
      }
      var hook = isAppearing ? this.props.onAppeared : this.props.onEntered;
      hook(node);
    };
    AnimateChild2.prototype.handleExit = function handleExit(node) {
      var names = this.props.names;
      if (names) {
        this.removeClassNames(node, names);
        addClass(node, names.leave);
      }
      this.props.onExit(node);
    };
    AnimateChild2.prototype.handleExiting = function handleExiting(node) {
      var _this6 = this;
      setTimeout(function() {
        var names = _this6.props.names;
        if (names) {
          addClass(node, names.leaveActive);
        }
        _this6.props.onExiting(node);
      }, 10);
    };
    AnimateChild2.prototype.handleExited = function handleExited(node) {
      var names = this.props.names;
      if (names) {
        [names.leave, names.leaveActive].forEach(function(className) {
          removeClass2(node, className);
        });
      }
      this.props.onExited(node);
    };
    AnimateChild2.prototype.render = function render2() {
      var _props = this.props;
      _props.names;
      _props.onAppear;
      _props.onAppeared;
      _props.onAppearing;
      _props.onEnter;
      _props.onEntering;
      _props.onEntered;
      _props.onExit;
      _props.onExiting;
      _props.onExited;
      var others = _default$3(_props, ["names", "onAppear", "onAppeared", "onAppearing", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
      return React.createElement(reactTransitionGroup.Transition, _default$8({}, others, {
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered,
        onExit: this.handleExit,
        onExiting: this.handleExiting,
        onExited: this.handleExited,
        addEndListener: this.addEndListener
      }));
    };
    return AnimateChild2;
  }(React.Component), _class$19.propTypes = {
    names: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.object]),
    onAppear: PropTypes$1.func,
    onAppearing: PropTypes$1.func,
    onAppeared: PropTypes$1.func,
    onEnter: PropTypes$1.func,
    onEntering: PropTypes$1.func,
    onEntered: PropTypes$1.func,
    onExit: PropTypes$1.func,
    onExiting: PropTypes$1.func,
    onExited: PropTypes$1.func
  }, _class$19.defaultProps = {
    onAppear: noop$i,
    onAppearing: noop$i,
    onAppeared: noop$i,
    onEnter: noop$i,
    onEntering: noop$i,
    onEntered: noop$i,
    onExit: noop$i,
    onExiting: noop$i,
    onExited: noop$i
  }, _temp$T);
  AnimateChild.displayName = "AnimateChild";
  var _class$18, _temp$S;
  var noop$h = function noop3() {
  };
  var FirstChild = function FirstChild2(props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  };
  var Animate = (_temp$S = _class$18 = function(_Component) {
    _default$4(Animate2, _Component);
    function Animate2() {
      _default$7(this, Animate2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Animate2.prototype.normalizeNames = function normalizeNames(names) {
      if (typeof names === "string") {
        return {
          appear: names + "-appear",
          appearActive: names + "-appear-active",
          enter: names + "-enter",
          enterActive: names + "-enter-active",
          leave: names + "-leave",
          leaveActive: names + "-leave-active"
        };
      }
      if ((typeof names === "undefined" ? "undefined" : _default$6(names)) === "object") {
        return {
          appear: names.appear,
          appearActive: names.appear + "-active",
          enter: "" + names.enter,
          enterActive: names.enter + "-active",
          leave: "" + names.leave,
          leaveActive: names.leave + "-active"
        };
      }
    };
    Animate2.prototype.render = function render2() {
      var _this2 = this;
      var _props = this.props, animation2 = _props.animation, children = _props.children, animationAppear = _props.animationAppear, singleMode = _props.singleMode, component = _props.component, beforeAppear = _props.beforeAppear, onAppear = _props.onAppear, afterAppear = _props.afterAppear, beforeEnter = _props.beforeEnter, onEnter = _props.onEnter, afterEnter = _props.afterEnter, beforeLeave = _props.beforeLeave, onLeave = _props.onLeave, afterLeave = _props.afterLeave, others = _default$3(_props, ["animation", "children", "animationAppear", "singleMode", "component", "beforeAppear", "onAppear", "afterAppear", "beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
      var animateChildren = React.Children.map(children, function(child) {
        return React.createElement(
          AnimateChild,
          {
            key: child.key,
            names: _this2.normalizeNames(animation2),
            onAppear: beforeAppear,
            onAppearing: onAppear,
            onAppeared: afterAppear,
            onEnter: beforeEnter,
            onEntering: onEnter,
            onEntered: afterEnter,
            onExit: beforeLeave,
            onExiting: onLeave,
            onExited: afterLeave
          },
          child
        );
      });
      return React.createElement(
        reactTransitionGroup.TransitionGroup,
        _default$8({ appear: animationAppear, component: singleMode ? FirstChild : component }, others),
        animateChildren
      );
    };
    return Animate2;
  }(React.Component), _class$18.propTypes = {
    /**
     * 动画 className
     */
    animation: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.object]),
    /**
     * 子元素第一次挂载时是否执行动画
     */
    animationAppear: PropTypes$1.bool,
    /**
     * 包裹子元素的标签
     */
    component: PropTypes$1.any,
    /**
     * 是否只有单个子元素，如果有多个子元素，请设置为 false
     */
    singleMode: PropTypes$1.bool,
    /**
     * 子元素
     */
    children: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.arrayOf(PropTypes$1.element)]),
    /**
     * 执行第一次挂载动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeAppear: PropTypes$1.func,
    /**
     * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
     *  @param {HTMLElement} node 执行动画的 dom 元素
     */
    onAppear: PropTypes$1.func,
    /**
     * 执行完第一次挂载动画后触发的函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterAppear: PropTypes$1.func,
    /**
     * 执行进场动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeEnter: PropTypes$1.func,
    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    onEnter: PropTypes$1.func,
    /**
     * 执行完进场动画后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterEnter: PropTypes$1.func,
    /**
     * 执行离场动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeLeave: PropTypes$1.func,
    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    onLeave: PropTypes$1.func,
    /**
     * 执行完离场动画后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterLeave: PropTypes$1.func
  }, _class$18.defaultProps = {
    animationAppear: true,
    component: "div",
    singleMode: true,
    beforeAppear: noop$h,
    onAppear: noop$h,
    afterAppear: noop$h,
    beforeEnter: noop$h,
    onEnter: noop$h,
    afterEnter: noop$h,
    beforeLeave: noop$h,
    onLeave: noop$h,
    afterLeave: noop$h
  }, _temp$S);
  Animate.displayName = "Animate";
  const Animate$1 = Animate;
  var _class$17, _temp$R;
  var noop$g = function noop4() {
  };
  var getStyle$4 = dom.getStyle;
  var Expand$1 = (_temp$R = _class$17 = function(_Component) {
    _default$4(Expand2, _Component);
    function Expand2(props) {
      _default$7(this, Expand2);
      var _this2 = _default$5(this, _Component.call(this, props));
      func.bindCtx(_this2, ["beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
      return _this2;
    }
    Expand2.prototype.beforeEnter = function beforeEnter(node) {
      if (this.leaving) {
        this.afterLeave(node);
      }
      this.cacheCurrentStyle(node);
      this.cacheComputedStyle(node);
      this.setCurrentStyleToZero(node);
      this.props.beforeEnter(node);
    };
    Expand2.prototype.onEnter = function onEnter(node) {
      this.setCurrentStyleToComputedStyle(node);
      this.props.onEnter(node);
    };
    Expand2.prototype.afterEnter = function afterEnter(node) {
      this.restoreCurrentStyle(node);
      this.props.afterEnter(node);
    };
    Expand2.prototype.beforeLeave = function beforeLeave(node) {
      this.leaving = true;
      this.cacheCurrentStyle(node);
      this.cacheComputedStyle(node);
      this.setCurrentStyleToComputedStyle(node);
      this.props.beforeLeave(node);
    };
    Expand2.prototype.onLeave = function onLeave(node) {
      this.setCurrentStyleToZero(node);
      this.props.onLeave(node);
    };
    Expand2.prototype.afterLeave = function afterLeave(node) {
      this.leaving = false;
      this.restoreCurrentStyle(node);
      this.props.afterLeave(node);
    };
    Expand2.prototype.cacheCurrentStyle = function cacheCurrentStyle(node) {
      this.styleBorderTopWidth = node.style.borderTopWidth;
      this.stylePaddingTop = node.style.paddingTop;
      this.styleHeight = node.style.height;
      this.stylePaddingBottom = node.style.paddingBottom;
      this.styleBorderBottomWidth = node.style.borderBottomWidth;
    };
    Expand2.prototype.cacheComputedStyle = function cacheComputedStyle(node) {
      this.borderTopWidth = getStyle$4(node, "borderTopWidth");
      this.paddingTop = getStyle$4(node, "paddingTop");
      this.height = node.offsetHeight;
      this.paddingBottom = getStyle$4(node, "paddingBottom");
      this.borderBottomWidth = getStyle$4(node, "borderBottomWidth");
    };
    Expand2.prototype.setCurrentStyleToZero = function setCurrentStyleToZero(node) {
      node.style.borderTopWidth = "0px";
      node.style.paddingTop = "0px";
      node.style.height = "0px";
      node.style.paddingBottom = "0px";
      node.style.borderBottomWidth = "0px";
    };
    Expand2.prototype.setCurrentStyleToComputedStyle = function setCurrentStyleToComputedStyle(node) {
      node.style.borderTopWidth = this.borderTopWidth + "px";
      node.style.paddingTop = this.paddingTop + "px";
      node.style.height = this.height + "px";
      node.style.paddingBottom = this.paddingBottom + "px";
      node.style.borderBottomWidth = this.borderBottomWidth + "px";
    };
    Expand2.prototype.restoreCurrentStyle = function restoreCurrentStyle(node) {
      node.style.borderTopWidth = this.styleBorderTopWidth;
      node.style.paddingTop = this.stylePaddingTop;
      node.style.height = this.styleHeight;
      node.style.paddingBottom = this.stylePaddingBottom;
      node.style.borderBottomWidth = this.styleBorderBottomWidth;
    };
    Expand2.prototype.render = function render2() {
      var _props = this.props, animation2 = _props.animation, others = _default$3(_props, ["animation"]);
      var newAnimation = animation2 || "expand";
      return React.createElement(Animate$1, _default$8({}, others, {
        animation: newAnimation,
        beforeEnter: this.beforeEnter,
        onEnter: this.onEnter,
        afterEnter: this.afterEnter,
        beforeLeave: this.beforeLeave,
        onLeave: this.onLeave,
        afterLeave: this.afterLeave
      }));
    };
    return Expand2;
  }(React.Component), _class$17.propTypes = {
    animation: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.object]),
    beforeEnter: PropTypes$1.func,
    onEnter: PropTypes$1.func,
    afterEnter: PropTypes$1.func,
    beforeLeave: PropTypes$1.func,
    onLeave: PropTypes$1.func,
    afterLeave: PropTypes$1.func
  }, _class$17.defaultProps = {
    beforeEnter: noop$g,
    onEnter: noop$g,
    afterEnter: noop$g,
    beforeLeave: noop$g,
    onLeave: noop$g,
    afterLeave: noop$g
  }, _temp$R);
  Expand$1.displayName = "Expand";
  var OverlayAnimate = function OverlayAnimate2(props) {
    var animation2 = props.animation, visible = props.visible, children = props.children, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? 300 : _props$timeout, style = props.style, mountOnEnter = props.mountOnEnter, unmountOnExit = props.unmountOnExit, appear = props.appear, enter = props.enter, exit = props.exit, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered, onExit = props.onExit, onExiting = props.onExiting, onExited = props.onExited, others = _default$3(props, ["animation", "visible", "children", "timeout", "style", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
    var animateProps = {
      mountOnEnter,
      unmountOnExit,
      appear,
      enter,
      exit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    };
    Object.keys(animateProps).forEach(function(k2) {
      if (!(k2 in props) || typeof props[k2] === "undefined") {
        delete animateProps[k2];
      }
    });
    var animationMap = typeof animation2 === "string" ? { in: animation2, out: animation2 } : animation2;
    var animateClsMap = animation2 ? {
      entering: animationMap.in,
      exiting: animationMap.out
    } : {};
    if (animation2 === false) {
      animateClsMap.entering = "";
      animateClsMap.exiting = "";
    }
    return React.createElement(
      reactTransitionGroup.Transition,
      _default$8({}, animateProps, { "in": visible, timeout: animation2 ? timeout : 0, appear: true }),
      function(state) {
        var _classNames;
        var cls = classnames((_classNames = {}, _classNames[children.props.className] = !!children.props.className, _classNames[animateClsMap[state]] = state in animateClsMap && animateClsMap[state], _classNames));
        var childProps = _default$8({}, others, {
          className: cls
        });
        if (style && children.props && children.props.style) {
          childProps.style = _default$8({}, children.props.style, style);
        }
        return React.cloneElement(children, childProps);
      }
    );
  };
  const OverlayAnimate$1 = OverlayAnimate;
  Animate$1.Expand = Expand$1;
  Animate$1.OverlayAnimate = OverlayAnimate$1;
  var overlayManager = {
    allOverlays: [],
    addOverlay: function addOverlay(overlay) {
      this.removeOverlay(overlay);
      this.allOverlays.unshift(overlay);
    },
    isCurrentOverlay: function isCurrentOverlay(overlay) {
      return overlay && this.allOverlays[0] === overlay;
    },
    removeOverlay: function removeOverlay(overlay) {
      var i = this.allOverlays.indexOf(overlay);
      if (i > -1) {
        this.allOverlays.splice(i, 1);
      }
    }
  };
  const overlayManager$1 = overlayManager;
  function findNode(target, param) {
    if (!target) {
      return null;
    }
    if (typeof target === "string") {
      return document.getElementById(target);
    }
    if (typeof target === "function") {
      try {
        target = target(param);
      } catch (err) {
        target = null;
      }
    }
    if (!target) {
      return null;
    }
    try {
      return ReactDOM.findDOMNode(target);
    } catch (err) {
      return target;
    }
  }
  var _class$16, _temp$Q;
  var makeChain$8 = func.makeChain;
  var getContainerNode$1 = function getContainerNode(props) {
    var targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
  };
  var Gateway = (_temp$Q = _class$16 = function(_Component) {
    _default$4(Gateway2, _Component);
    function Gateway2(props) {
      _default$7(this, Gateway2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.updateContainer = function() {
        var containerNode = getContainerNode$1(_this2.props);
        if (containerNode !== _this2.state.containerNode) {
          _this2.setState({
            containerNode
          });
        }
      };
      _this2.saveChildRef = function(ref) {
        _this2.child = ref;
      };
      _this2.state = {
        containerNode: null
      };
      return _this2;
    }
    Gateway2.prototype.componentDidMount = function componentDidMount() {
      this.updateContainer();
    };
    Gateway2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateContainer();
    };
    Gateway2.prototype.getChildNode = function getChildNode() {
      try {
        return ReactDOM.findDOMNode(this.child);
      } catch (err) {
        return null;
      }
    };
    Gateway2.prototype.render = function render2() {
      var containerNode = this.state.containerNode;
      if (!containerNode) {
        return null;
      }
      var children = this.props.children;
      var child = children ? React.Children.only(children) : null;
      if (!child) {
        return null;
      }
      if (typeof child.ref === "string") {
        throw new Error("Can not set ref by string in Gateway, use function instead.");
      }
      child = React.cloneElement(child, {
        ref: makeChain$8(this.saveChildRef, child.ref)
      });
      return ReactDOM.createPortal(child, containerNode);
    };
    return Gateway2;
  }(React.Component), _class$16.propTypes = {
    children: PropTypes$1.node,
    container: PropTypes$1.any,
    target: PropTypes$1.any
  }, _class$16.defaultProps = {
    container: function container2() {
      return document.body;
    }
  }, _temp$Q);
  Gateway.displayName = "Gateway";
  const Gateway$1 = polyfill(Gateway);
  var _class$15, _temp$P, _initialiseProps$2;
  var VIEWPORT = "viewport";
  var getPageX = function getPageX2() {
    return window.pageXOffset || document.documentElement.scrollLeft;
  };
  var getPageY = function getPageY2() {
    return window.pageYOffset || document.documentElement.scrollTop;
  };
  function _getSize(element) {
    if ("offsetWidth" in element && "offsetHeight" in element) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    } else {
      var _element$getBoundingC = element.getBoundingClientRect(), width = _element$getBoundingC.width, height = _element$getBoundingC.height;
      return {
        width,
        height
      };
    }
  }
  function _getElementRect(elem, container4) {
    var offsetTop = 0, offsetLeft = 0, scrollTop = 0, scrollLeft = 0;
    var _getSize2 = _getSize(elem), width = _getSize2.width, height = _getSize2.height;
    do {
      if (!isNaN(elem.offsetTop)) {
        offsetTop += elem.offsetTop;
      }
      if (!isNaN(elem.offsetLeft)) {
        offsetLeft += elem.offsetLeft;
      }
      if (elem && elem.offsetParent) {
        if (!isNaN(elem.offsetParent.scrollLeft) && elem.offsetParent !== document.body) {
          scrollLeft += elem.offsetParent.scrollLeft;
        }
        if (!isNaN(elem.offsetParent.scrollTop) && elem.offsetParent !== document.body) {
          scrollTop += elem.offsetParent.scrollTop;
        }
      }
      elem = elem.offsetParent;
    } while (elem !== null && elem !== container4);
    var treatAsWindow = !container4 || container4 === document.body;
    return {
      top: offsetTop - scrollTop - (treatAsWindow ? document.documentElement.scrollTop || document.body.scrollTop : 0),
      left: offsetLeft - scrollLeft - (treatAsWindow ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
      width,
      height
    };
  }
  function _getViewportSize(container4) {
    if (!container4 || container4 === document.body) {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      };
    }
    var _container$getBoundin = container4.getBoundingClientRect(), width = _container$getBoundin.width, height = _container$getBoundin.height;
    return {
      width,
      height
    };
  }
  var getContainer = function getContainer2(_ref) {
    var container4 = _ref.container, baseElement = _ref.baseElement;
    if (typeof document === "undefined") {
      return container4;
    }
    var calcContainer = findNode(container4, baseElement);
    if (!calcContainer) {
      calcContainer = document.body;
    }
    while (dom.getStyle(calcContainer, "position") === "static") {
      if (!calcContainer || calcContainer === document.body) {
        return document.body;
      }
      calcContainer = calcContainer.parentNode;
    }
    return calcContainer;
  };
  var Position$1 = (_temp$P = _class$15 = function() {
    function Position2(props) {
      _default$7(this, Position2);
      _initialiseProps$2.call(this);
      this.pinElement = props.pinElement;
      this.baseElement = props.baseElement;
      this.pinFollowBaseElementWhenFixed = props.pinFollowBaseElementWhenFixed;
      this.container = getContainer(props);
      this.autoFit = props.autoFit || false;
      this.align = props.align || "tl tl";
      this.offset = props.offset || [0, 0];
      this.needAdjust = props.needAdjust || false;
      this.isRtl = props.isRtl || false;
    }
    Position2.prototype.setPosition = function setPosition() {
      var pinElement = this.pinElement;
      var baseElement = this.baseElement;
      var pinFollowBaseElementWhenFixed = this.pinFollowBaseElementWhenFixed;
      var expectedAlign = this._getExpectedAlign();
      var isPinFixed = void 0, isBaseFixed = void 0, firstPositionResult = void 0;
      if (pinElement === VIEWPORT) {
        return;
      }
      if (dom.getStyle(pinElement, "position") !== "fixed") {
        dom.setStyle(pinElement, "position", "absolute");
        isPinFixed = false;
      } else {
        isPinFixed = true;
      }
      if (baseElement === VIEWPORT || dom.getStyle(baseElement, "position") !== "fixed") {
        isBaseFixed = false;
      } else {
        isBaseFixed = true;
      }
      for (var i = 0; i < expectedAlign.length; i++) {
        var align = expectedAlign[i];
        var pinElementPoints = this._normalizePosition(pinElement, align.split(" ")[0], isPinFixed);
        var baseElementPoints = this._normalizePosition(
          baseElement,
          align.split(" ")[1],
          // 忽略元素位置，发生在类似dialog的场景下
          isPinFixed && !pinFollowBaseElementWhenFixed
        );
        var pinElementParentOffset = this._getParentOffset(pinElement);
        var pinElementParentScrollOffset = this._getParentScrollOffset(pinElement);
        var baseElementOffset = isPinFixed && isBaseFixed ? this._getLeftTop(baseElement) : (
          // 在 pin 是 fixed 布局，并且又需要根据 base 计算位置时，计算 base 的 offset 需要忽略页面滚动
          baseElementPoints.offset(isPinFixed && pinFollowBaseElementWhenFixed)
        );
        var top = baseElementOffset.top + baseElementPoints.y - pinElementParentOffset.top - pinElementPoints.y + pinElementParentScrollOffset.top;
        var left = baseElementOffset.left + baseElementPoints.x - pinElementParentOffset.left - pinElementPoints.x + pinElementParentScrollOffset.left;
        this._setPinElementPostion(pinElement, { left, top }, this.offset);
        if (this._isInViewport(pinElement, align)) {
          return align;
        } else if (!firstPositionResult) {
          if (this.needAdjust && !this.autoFit) {
            var _getViewportOffset2 = this._getViewportOffset(pinElement, align), right = _getViewportOffset2.right;
            firstPositionResult = {
              left: right < 0 ? left + right : left,
              top
            };
          } else {
            firstPositionResult = { left, top };
          }
        }
      }
      var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, "Left", isPinFixed);
      var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, "Top", isPinFixed);
      this._setPinElementPostion(pinElement, { left: inViewportLeft, top: inViewportTop }, this._calPinOffset(expectedAlign[0]));
      return expectedAlign[0];
    };
    Position2.prototype._getParentOffset = function _getParentOffset(element) {
      var parent = element.offsetParent || document.documentElement;
      var offset = void 0;
      if (parent === document.body && dom.getStyle(parent, "position") === "static") {
        offset = {
          top: 0,
          left: 0
        };
      } else {
        offset = this._getElementOffset(parent);
      }
      offset.top += parseFloat(dom.getStyle(parent, "border-top-width"), 10);
      offset.left += parseFloat(dom.getStyle(parent, "border-left-width"), 10);
      offset.offsetParent = parent;
      return offset;
    };
    Position2.prototype._makeElementInViewport = function _makeElementInViewport(pinElement, number, type2, isPinFixed) {
      var result = number;
      var docElement = document.documentElement;
      var offsetParent = pinElement.offsetParent || document.documentElement;
      if (result < 0) {
        if (isPinFixed) {
          result = 0;
        } else if (offsetParent === document.body && dom.getStyle(offsetParent, "position") === "static") {
          result = Math.max(docElement["scroll" + type2], document.body["scroll" + type2]);
        }
      }
      return result;
    };
    Position2.prototype._normalizePosition = function _normalizePosition(element, align, ignoreElementOffset) {
      var points = this._normalizeElement(element, ignoreElementOffset);
      this._normalizeXY(points, align);
      return points;
    };
    Position2.prototype._normalizeXY = function _normalizeXY(points, align) {
      var x2 = align.split("")[1];
      var y2 = align.split("")[0];
      points.x = this._xyConverter(x2, points, "width");
      points.y = this._xyConverter(y2, points, "height");
      return points;
    };
    Position2.prototype._xyConverter = function _xyConverter(align, points, type2) {
      var res = align.replace(/t|l/gi, "0%").replace(/c/gi, "50%").replace(/b|r/gi, "100%").replace(/(\d+)%/gi, function(m2, d2) {
        return points.size()[type2] * (d2 / 100);
      });
      return parseFloat(res, 10) || 0;
    };
    Position2.prototype._getLeftTop = function _getLeftTop(element) {
      return {
        left: parseFloat(dom.getStyle(element, "left")) || 0,
        top: parseFloat(dom.getStyle(element, "top")) || 0
      };
    };
    Position2.prototype._normalizeElement = function _normalizeElement(element, ignoreElementOffset) {
      var _this2 = this;
      var result = {
        element,
        x: 0,
        y: 0
      }, isViewport = element === VIEWPORT, docElement = document.documentElement;
      result.offset = function(ignoreScroll) {
        if (ignoreElementOffset) {
          return {
            left: 0,
            top: 0
          };
        } else if (isViewport) {
          return {
            left: getPageX(),
            top: getPageY()
          };
        } else {
          return _this2._getElementOffset(element, ignoreScroll);
        }
      };
      result.size = function() {
        if (isViewport) {
          return {
            width: docElement.clientWidth,
            height: docElement.clientHeight
          };
        } else {
          return _getSize(element);
        }
      };
      return result;
    };
    Position2.prototype._getElementOffset = function _getElementOffset(element, ignoreScroll) {
      var rect = element.getBoundingClientRect();
      var docElement = document.documentElement;
      var body = document.body;
      var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
      var docClientTop = docElement.clientTop || body.clientTop || 0;
      return {
        left: rect.left + (ignoreScroll ? 0 : getPageX()) - docClientLeft,
        top: rect.top + (ignoreScroll ? 0 : getPageY()) - docClientTop
      };
    };
    Position2.prototype._getExpectedAlign = function _getExpectedAlign() {
      var align = this.isRtl ? this._replaceAlignDir(this.align, /l|r/g, { l: "r", r: "l" }) : this.align;
      var expectedAlign = [align];
      if (this.needAdjust) {
        if (/t|b/g.test(align)) {
          expectedAlign.push(this._replaceAlignDir(align, /t|b/g, { t: "b", b: "t" }));
        }
        if (/l|r/g.test(align)) {
          expectedAlign.push(this._replaceAlignDir(align, /l|r/g, { l: "r", r: "l" }));
        }
        if (/c/g.test(align)) {
          expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: "l" }));
          expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: "r" }));
        }
        expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, {
          l: "r",
          r: "l",
          t: "b",
          b: "t"
        }));
      }
      return expectedAlign;
    };
    Position2.prototype._replaceAlignDir = function _replaceAlignDir(align, regExp, map) {
      return align.replace(regExp, function(res) {
        return map[res];
      });
    };
    Position2.prototype._isRightAligned = function _isRightAligned(align) {
      var _align$split = align.split(" "), pinAlign = _align$split[0], baseAlign = _align$split[1];
      return pinAlign[1] === "r" && pinAlign[1] === baseAlign[1];
    };
    Position2.prototype._isBottomAligned = function _isBottomAligned(align) {
      var _align$split2 = align.split(" "), pinAlign = _align$split2[0], baseAlign = _align$split2[1];
      return pinAlign[0] === "b" && pinAlign[0] === baseAlign[0];
    };
    Position2.prototype._isInViewport = function _isInViewport(element, align) {
      var viewportSize = _getViewportSize(this.container);
      var elementRect = _getElementRect(element, this.container);
      var elementSize = _getSize(element);
      var viewportWidth = this._isRightAligned(align) ? viewportSize.width : viewportSize.width - 1;
      var viewportHeight = this._isBottomAligned(align) ? viewportSize.height : viewportSize.height - 1;
      if (this.autoFit) {
        return elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportHeight;
      }
      return elementRect.left >= 0 && elementRect.left + elementSize.width <= viewportWidth && elementRect.top >= 0 && elementRect.top + elementSize.height <= viewportHeight;
    };
    Position2.prototype._getViewportOffset = function _getViewportOffset(element, align) {
      var viewportSize = _getViewportSize(this.container);
      var elementRect = _getElementRect(element, this.container);
      var elementSize = _getSize(element);
      var viewportWidth = this._isRightAligned(align) ? viewportSize.width : viewportSize.width - 1;
      var viewportHeight = this._isBottomAligned(align) ? viewportSize.height : viewportSize.height - 1;
      return {
        top: elementRect.top,
        right: viewportWidth - (elementRect.left + elementSize.width),
        bottom: viewportHeight - (elementRect.top + elementSize.height),
        left: elementRect.left
      };
    };
    Position2.prototype._setPinElementPostion = function _setPinElementPostion(pinElement, postion) {
      var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
      var top = postion.top, left = postion.left;
      if (!this.isRtl) {
        dom.setStyle(pinElement, {
          left: left + offset[0] + "px",
          top: top + offset[1] + "px"
        });
        return;
      }
      var pinElementParentOffset = this._getParentOffset(pinElement);
      var _getElementRect2 = _getElementRect(pinElementParentOffset.offsetParent), offsetParentWidth = _getElementRect2.width;
      var _getElementRect3 = _getElementRect(pinElement), width = _getElementRect3.width;
      var right = offsetParentWidth - (left + width);
      dom.setStyle(pinElement, {
        left: "auto",
        right: right + offset[0] + "px",
        top: top + offset[1] + "px"
      });
    };
    return Position2;
  }(), _class$15.VIEWPORT = VIEWPORT, _class$15.place = function(props) {
    return new Position$1(props).setPosition();
  }, _initialiseProps$2 = function _initialiseProps() {
    var _this2 = this;
    this._calPinOffset = function(align) {
      var offset = [].concat(_this2.offset);
      if (_this2.autoFit && align && _this2.container && _this2.container !== document.body) {
        var baseElementRect = _getElementRect(_this2.baseElement, _this2.container);
        var pinElementRect = _getElementRect(_this2.pinElement, _this2.container);
        var viewportSize = _getViewportSize(_this2.container);
        var pinAlign = align.split(" ")[0];
        pinAlign.charAt(1);
        var y2 = pinAlign.charAt(0);
        if (pinElementRect.top < 0 || pinElementRect.top + pinElementRect.height > viewportSize.height) {
          offset[1] = -baseElementRect.top - (y2 === "t" ? baseElementRect.height : 0);
        }
      }
      return offset;
    };
    this._getParentScrollOffset = function(elem) {
      var top = 0;
      var left = 0;
      if (elem && elem.offsetParent && elem.offsetParent !== document.body) {
        if (!isNaN(elem.offsetParent.scrollTop)) {
          top += elem.offsetParent.scrollTop;
        }
        if (!isNaN(elem.offsetParent.scrollLeft)) {
          left += elem.offsetParent.scrollLeft;
        }
      }
      return {
        top,
        left
      };
    };
  }, _temp$P);
  var _class$14, _temp$O;
  var noop$f = func.noop, bindCtx$a = func.bindCtx;
  var getStyle$3 = dom.getStyle;
  var place = Position$1.place;
  var Position = (_temp$O = _class$14 = function(_Component) {
    _default$4(Position2, _Component);
    function Position2(props) {
      _default$7(this, Position2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.observe = function() {
        var contentNode = _this2.getContentNode();
        contentNode && _this2.resizeObserver.observe(contentNode);
      };
      _this2.unobserve = function() {
        _this2.resizeObserver.disconnect();
      };
      bindCtx$a(_this2, ["handleResize"]);
      _this2.resizeObserver = new index$2(_this2.handleResize);
      return _this2;
    }
    Position2.prototype.componentDidMount = function componentDidMount() {
      this.setPosition();
      if (this.props.needListenResize) {
        events.on(window, "resize", this.handleResize);
        this.observe();
      }
    };
    Position2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      var props = this.props;
      if ("align" in props && props.align !== prevProps.align || props.shouldUpdatePosition) {
        this.shouldUpdatePosition = true;
      }
      if (this.shouldUpdatePosition) {
        clearTimeout(this.resizeTimeout);
        this.setPosition();
        this.shouldUpdatePosition = false;
      }
    };
    Position2.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.props.needListenResize) {
        events.off(window, "resize", this.handleResize);
        this.unobserve();
      }
      clearTimeout(this.resizeTimeout);
    };
    Position2.prototype.setPosition = function setPosition() {
      var _props = this.props, align = _props.align, offset = _props.offset, beforePosition = _props.beforePosition, onPosition = _props.onPosition, needAdjust = _props.needAdjust, container4 = _props.container, rtl = _props.rtl, pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed, autoFit = _props.autoFit;
      beforePosition();
      var contentNode = this.getContentNode();
      var targetNode = this.getTargetNode();
      if (contentNode && targetNode) {
        var resultAlign = place({
          pinElement: contentNode,
          baseElement: targetNode,
          pinFollowBaseElementWhenFixed,
          align,
          offset,
          autoFit,
          container: container4,
          needAdjust,
          isRtl: rtl
        });
        var top = getStyle$3(contentNode, "top");
        var left = getStyle$3(contentNode, "left");
        onPosition({
          align: resultAlign.split(" "),
          top,
          left
        }, contentNode);
      }
    };
    Position2.prototype.getContentNode = function getContentNode() {
      try {
        return ReactDOM.findDOMNode(this);
      } catch (err) {
        return null;
      }
    };
    Position2.prototype.getTargetNode = function getTargetNode2() {
      var target = this.props.target;
      return target === Position$1.VIEWPORT ? Position$1.VIEWPORT : findNode(target, this.props);
    };
    Position2.prototype.handleResize = function handleResize() {
      var _this2 = this;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function() {
        _this2.setPosition();
      }, 200);
    };
    Position2.prototype.render = function render2() {
      return React.Children.only(this.props.children);
    };
    return Position2;
  }(React.Component), _class$14.VIEWPORT = Position$1.VIEWPORT, _class$14.propTypes = {
    children: PropTypes$1.node,
    target: PropTypes$1.any,
    container: PropTypes$1.any,
    align: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.bool]),
    offset: PropTypes$1.array,
    beforePosition: PropTypes$1.func,
    onPosition: PropTypes$1.func,
    needAdjust: PropTypes$1.bool,
    autoFit: PropTypes$1.bool,
    needListenResize: PropTypes$1.bool,
    shouldUpdatePosition: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    pinFollowBaseElementWhenFixed: PropTypes$1.bool
  }, _class$14.defaultProps = {
    align: "tl bl",
    offset: [0, 0],
    beforePosition: noop$f,
    onPosition: noop$f,
    needAdjust: true,
    autoFit: false,
    needListenResize: true,
    shouldUpdatePosition: false,
    rtl: false
  }, _temp$O);
  Position.displayName = "Position";
  var _class$13, _temp$N;
  var saveLastFocusNode = focus.saveLastFocusNode, getFocusNodeList$1 = focus.getFocusNodeList, backLastFocusNode = focus.backLastFocusNode;
  var makeChain$7 = func.makeChain, noop$e = func.noop, bindCtx$9 = func.bindCtx;
  var getContainerNode2 = function getContainerNode3(props) {
    var targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
  };
  var prefixes = ["-webkit-", "-moz-", "-o-", "ms-", ""];
  var getStyleProperty = function getStyleProperty2(node, name) {
    var style = window.getComputedStyle(node);
    var ret = "";
    for (var i = 0; i < prefixes.length; i++) {
      ret = style.getPropertyValue(prefixes[i] + name);
      if (ret) {
        break;
      }
    }
    return ret;
  };
  var containerNodeList = [];
  var Overlay$4 = (_temp$N = _class$13 = function(_Component) {
    _default$4(Overlay3, _Component);
    function Overlay3(props) {
      _default$7(this, Overlay3);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.saveContentRef = function(ref) {
        _this2.contentRef = ref;
      };
      _this2.saveGatewayRef = function(ref) {
        _this2.gatewayRef = ref;
      };
      _this2.lastAlign = props.align;
      bindCtx$9(_this2, ["handlePosition", "handleAnimateEnd", "handleDocumentKeyDown", "handleDocumentClick", "handleMaskClick", "beforeOpen", "beforeClose"]);
      _this2.state = {
        visible: false,
        status: "none",
        animation: _this2.getAnimation(props),
        willOpen: false,
        willClose: false
      };
      _this2.timeoutMap = {};
      return _this2;
    }
    Overlay3.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var willOpen = !prevState.visible && nextProps.visible;
      var willClose = prevState.visible && !nextProps.visible;
      var nextState = {
        willOpen,
        willClose
      };
      if (willOpen) {
        nextProps.beforeOpen && nextProps.beforeOpen();
      } else if (willClose) {
        nextProps.beforeClose && nextProps.beforeClose();
      }
      if (nextProps.animation || nextProps.animation === false) {
        nextState.animation = nextProps.animation;
      }
      if (nextProps.animation !== false && support.animation) {
        if (willOpen) {
          nextState.visible = true;
          nextState.status = "mounting";
        } else if (willClose) {
          nextState.status = "leaving";
        }
      } else if ("visible" in nextProps && nextProps.visible !== prevState.visible) {
        nextState.visible = nextProps.visible;
      }
      return nextState;
    };
    Overlay3.prototype.componentDidMount = function componentDidMount() {
      if (this.state.willOpen) {
        this.beforeOpen();
      } else if (this.state.willClose) {
        this.beforeClose();
      }
      if (this.state.visible) {
        this.doAnimation(true, false);
        this._isMounted = true;
      }
      this.addDocumentEvents();
      overlayManager$1.addOverlay(this);
    };
    Overlay3.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.state.willOpen) {
        this.beforeOpen();
      } else if (this.state.willClose) {
        this.beforeClose();
      }
      if (!this._isMounted && this.props.visible) {
        this._isMounted = true;
      }
      if (this.props.align !== prevProps.align) {
        this.lastAlign = prevProps.align;
      }
      var willOpen = !prevProps.visible && this.props.visible;
      var willClose = prevProps.visible && !this.props.visible;
      (willOpen || willClose) && this.doAnimation(willOpen, willClose);
    };
    Overlay3.prototype.componentWillUnmount = function componentWillUnmount() {
      this._isDestroyed = true;
      this._isMounted = false;
      overlayManager$1.removeOverlay(this);
      this.removeDocumentEvents();
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }
      if (this._animation) {
        this._animation.off();
        this._animation = null;
      }
      this.beforeClose();
    };
    Overlay3.prototype.doAnimation = function doAnimation(open2, close2) {
      var _this2 = this;
      if (this.state.animation && support.animation) {
        if (open2) {
          this.onEntering();
        } else if (close2) {
          this.onLeaving();
        }
        this.addAnimationEvents();
      } else {
        if (open2) {
          setTimeout(function() {
            _this2.props.onOpen();
            dom.addClass(_this2.getWrapperNode(), "opened");
            overlayManager$1.addOverlay(_this2);
            _this2.props.afterOpen();
          });
        } else if (close2) {
          this.props.onClose();
          dom.removeClass(this.getWrapperNode(), "opened");
          overlayManager$1.removeOverlay(this);
          this.props.afterClose();
        }
        this.setFocusNode();
      }
    };
    Overlay3.prototype.getAnimation = function getAnimation(props) {
      if (props.animation === false) {
        return false;
      }
      if (props.animation) {
        return props.animation;
      }
      return this.getAnimationByAlign(props.align);
    };
    Overlay3.prototype.getAnimationByAlign = function getAnimationByAlign(align) {
      switch (align[0]) {
        case "t":
          return {
            // 为了防止有的用户 js升级了而css没升级，所以把两个动画都保留了。
            // 动画不会叠加，会替代，顺序根据 src/animate/main.scss 中的样式先后顺序遵循css覆盖原则
            // fadeInDownSmall fadeOutUpSmall 优先级更高
            in: "expandInDown fadeInDownSmall",
            out: "expandOutUp fadeOutUpSmall"
          };
        case "b":
          return {
            in: "fadeInUp",
            out: "fadeOutDown"
          };
        default:
          return {
            in: "expandInDown fadeInDownSmall",
            out: "expandOutUp fadeOutUpSmall"
          };
      }
    };
    Overlay3.prototype.addAnimationEvents = function addAnimationEvents() {
      var _this3 = this;
      setTimeout(function() {
        var node = _this3.getContentNode();
        if (node) {
          var id2 = guid();
          _this3._animation = events.on(node, support.animation.end, _this3.handleAnimateEnd.bind(_this3, id2));
          var animationDelay = parseFloat(getStyleProperty(node, "animation-delay")) || 0;
          var animationDuration = parseFloat(getStyleProperty(node, "animation-duration")) || 0;
          var time = animationDelay + animationDuration;
          if (time) {
            _this3.timeoutMap[id2] = setTimeout(function() {
              _this3.handleAnimateEnd(id2);
            }, time * 1e3 + 200);
          }
        }
      });
    };
    Overlay3.prototype.handlePosition = function handlePosition(config3) {
      var align = config3.align.join(" ");
      if (!("animation" in this.props) && this.props.needAdjust && this.lastAlign !== align) {
        this.setState({
          animation: this.getAnimationByAlign(align)
        });
      }
      var status = this.state.status;
      if (status === "mounting") {
        this.setState({
          status: "entering"
        });
      }
      this.lastAlign = align;
    };
    Overlay3.prototype.handleAnimateEnd = function handleAnimateEnd(id2) {
      if (this.timeoutMap[id2]) {
        clearTimeout(this.timeoutMap[id2]);
      }
      delete this.timeoutMap[id2];
      if (this._animation) {
        this._animation.off();
        this._animation = null;
      }
      if (!this._isMounted) {
        return;
      }
      if (this.state.status === "leaving") {
        this.setState({
          visible: false,
          status: "none"
        });
        this.onLeaved();
      } else if (this.state.status === "entering" || this.state.status === "mounting") {
        this.setState({
          status: "none"
        });
        this.onEntered();
      }
    };
    Overlay3.prototype.onEntering = function onEntering() {
      var _this4 = this;
      if (this._isDestroyed) {
        return;
      }
      setTimeout(function() {
        var wrapperNode = _this4.getWrapperNode();
        dom.addClass(wrapperNode, "opened");
        _this4.props.onOpen();
      });
    };
    Overlay3.prototype.onLeaving = function onLeaving() {
      var wrapperNode = this.getWrapperNode();
      dom.removeClass(wrapperNode, "opened");
      this.props.onClose();
    };
    Overlay3.prototype.onEntered = function onEntered() {
      overlayManager$1.addOverlay(this);
      this.setFocusNode();
      this.props.afterOpen();
    };
    Overlay3.prototype.onLeaved = function onLeaved() {
      overlayManager$1.removeOverlay(this);
      this.setFocusNode();
      this.props.afterClose();
    };
    Overlay3.prototype.beforeOpen = function beforeOpen() {
      if (this.props.disableScroll) {
        var containerNode = getContainerNode2(this.props) || document.body;
        var _containerNode$style = containerNode.style, overflow = _containerNode$style.overflow, paddingRight = _containerNode$style.paddingRight;
        var cnInfo = containerNodeList.find(function(m2) {
          return m2.containerNode === containerNode;
        }) || {
          containerNode,
          count: 0
        };
        if (cnInfo.count === 0 && overflow !== "hidden") {
          var style = {
            overflow: "hidden"
          };
          cnInfo.overflow = overflow;
          if (dom.hasScroll(containerNode)) {
            cnInfo.paddingRight = paddingRight;
            style.paddingRight = dom.getStyle(containerNode, "paddingRight") + dom.scrollbar().width + "px";
          }
          dom.setStyle(containerNode, style);
          containerNodeList.push(cnInfo);
          cnInfo.count++;
        } else if (cnInfo.count) {
          cnInfo.count++;
        }
        this._containerNode = containerNode;
      }
    };
    Overlay3.prototype.beforeClose = function beforeClose() {
      var _this5 = this;
      if (this.props.disableScroll) {
        var idx = containerNodeList.findIndex(function(cn) {
          return cn.containerNode === _this5._containerNode;
        });
        if (idx !== -1) {
          var cnInfo = containerNodeList[idx];
          var overflow = cnInfo.overflow, paddingRight = cnInfo.paddingRight;
          if (cnInfo.count === 1 && this._containerNode && this._containerNode.style.overflow === "hidden") {
            var style = {
              overflow
            };
            if (paddingRight !== void 0) {
              style.paddingRight = paddingRight;
            }
            dom.setStyle(this._containerNode, style);
          }
          cnInfo.count--;
          if (cnInfo.count === 0) {
            containerNodeList.splice(idx, 1);
          }
        }
        this._containerNode = void 0;
      }
    };
    Overlay3.prototype.setFocusNode = function setFocusNode() {
      var _this6 = this;
      if (!this.props.autoFocus) {
        return;
      }
      if (this.state.visible && !this._hasFocused) {
        saveLastFocusNode();
        this.focusTimeout = setTimeout(function() {
          var node = _this6.getContentNode();
          if (node) {
            var focusNodeList = getFocusNodeList$1(node);
            if (focusNodeList.length) {
              focusNodeList[0].focus();
            }
            _this6._hasFocused = true;
          }
        }, 100);
      } else if (!this.state.visible && this._hasFocused) {
        backLastFocusNode();
        this._hasFocused = false;
      }
    };
    Overlay3.prototype.getContent = function getContent() {
      return this.contentRef;
    };
    Overlay3.prototype.getContentNode = function getContentNode() {
      try {
        return ReactDOM.findDOMNode(this.contentRef);
      } catch (err) {
        return null;
      }
    };
    Overlay3.prototype.getWrapperNode = function getWrapperNode() {
      return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
    };
    Overlay3.prototype.addDocumentEvents = function addDocumentEvents() {
      var useCapture = this.props.useCapture;
      if (this.props.canCloseByEsc) {
        this._keydownEvents = events.on(document, "keydown", this.handleDocumentKeyDown, useCapture);
      }
      if (this.props.canCloseByOutSideClick) {
        this._clickEvents = events.on(document, "click", this.handleDocumentClick, useCapture);
        this._touchEvents = events.on(document, "touchend", this.handleDocumentClick, useCapture);
      }
    };
    Overlay3.prototype.removeDocumentEvents = function removeDocumentEvents() {
      var _this7 = this;
      ["_keydownEvents", "_clickEvents", "_touchEvents"].forEach(function(event) {
        if (_this7[event]) {
          _this7[event].off();
          _this7[event] = null;
        }
      });
    };
    Overlay3.prototype.handleDocumentKeyDown = function handleDocumentKeyDown(e2) {
      if (this.state.visible && e2.keyCode === KEYCODE.ESC && overlayManager$1.isCurrentOverlay(this)) {
        this.props.onRequestClose("keyboard", e2);
      }
    };
    Overlay3.prototype.isInShadowDOM = function isInShadowDOM(node) {
      return node.getRootNode ? node.getRootNode().nodeType === 11 : false;
    };
    Overlay3.prototype.getEventPath = function getEventPath(event) {
      return event.path || event.composedPath && event.composedPath() || this.composedPath(event.target);
    };
    Overlay3.prototype.composedPath = function composedPath(el) {
      var path = [];
      while (el) {
        path.push(el);
        if (el.tagName === "HTML") {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    };
    Overlay3.prototype.matchInShadowDOM = function matchInShadowDOM(node, e2) {
      if (this.isInShadowDOM(node)) {
        var eventPath = this.getEventPath(e2);
        return node === eventPath[0] || node.contains(eventPath[0]);
      }
      return false;
    };
    Overlay3.prototype.handleDocumentClick = function handleDocumentClick(e2) {
      var _this8 = this;
      if (this.state.visible) {
        var safeNode = this.props.safeNode;
        var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
        safeNodes.unshift(function() {
          return _this8.getWrapperNode();
        });
        for (var i = 0; i < safeNodes.length; i++) {
          var node = findNode(safeNodes[i], this.props);
          if (node && (node === e2.target || node.contains(e2.target) || this.matchInShadowDOM(node, e2) || e2.target !== document && !document.documentElement.contains(e2.target))) {
            return;
          }
        }
        this.props.onRequestClose("docClick", e2);
      }
    };
    Overlay3.prototype.handleMaskClick = function handleMaskClick(e2) {
      if (e2.currentTarget === e2.target && this.props.canCloseByMask) {
        this.props.onRequestClose("maskClick", e2);
      }
    };
    Overlay3.prototype.getInstance = function getInstance() {
      return this;
    };
    Overlay3.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, propChildren = _props.children, target = _props.target, align = _props.align, offset = _props.offset, container4 = _props.container, hasMask = _props.hasMask, needAdjust = _props.needAdjust, autoFit = _props.autoFit, beforePosition = _props.beforePosition, onPosition = _props.onPosition, wrapperStyle = _props.wrapperStyle, rtl = _props.rtl, propShouldUpdatePosition = _props.shouldUpdatePosition, cache = _props.cache, wrapperClassName = _props.wrapperClassName, onMaskMouseEnter = _props.onMaskMouseEnter, onMaskMouseLeave = _props.onMaskMouseLeave, maskClass = _props.maskClass, isChildrenInMask = _props.isChildrenInMask, pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed;
      var _state = this.state, stateVisible = _state.visible, status = _state.status, animation2 = _state.animation;
      var children = stateVisible || cache && this._isMounted ? propChildren : null;
      if (children) {
        var _classnames, _classnames2;
        var child = React.Children.only(children);
        if (typeof child.type === "function" && !(child.type.prototype instanceof React.Component)) {
          child = React.createElement(
            "div",
            { role: "none" },
            child
          );
        }
        var childClazz = classnames((_classnames = {}, _classnames[prefix + "overlay-inner"] = true, _classnames[animation2.in] = status === "entering" || status === "mounting", _classnames[animation2.out] = status === "leaving", _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
        if (typeof child.ref === "string") {
          throw new Error("Can not set ref by string in Overlay, use function instead.");
        }
        children = React.cloneElement(child, {
          className: childClazz,
          style: _default$8({}, child.props.style, style),
          ref: makeChain$7(this.saveContentRef, child.ref),
          "aria-hidden": !stateVisible && cache && this._isMounted,
          onClick: makeChain$7(this.props.onClick, child.props.onClick),
          onTouchEnd: makeChain$7(this.props.onTouchEnd, child.props.onTouchEnd)
        });
        if (align) {
          var shouldUpdatePosition = status === "leaving" ? false : propShouldUpdatePosition;
          children = React.createElement(Position, {
            children,
            target,
            align,
            offset,
            autoFit,
            container: container4,
            needAdjust,
            pinFollowBaseElementWhenFixed,
            beforePosition,
            onPosition: makeChain$7(this.handlePosition, onPosition),
            shouldUpdatePosition,
            rtl
          });
        }
        var wrapperClazz = classnames([prefix + "overlay-wrapper", wrapperClassName]);
        var newWrapperStyle = _default$8({}, {
          display: stateVisible ? "" : "none"
        }, wrapperStyle);
        var maskClazz = classnames((_classnames2 = {}, _classnames2[prefix + "overlay-backdrop"] = true, _classnames2[maskClass] = !!maskClass, _classnames2));
        children = React.createElement(
          "div",
          { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? "rtl" : void 0 },
          hasMask ? React.createElement(
            "div",
            {
              className: maskClazz,
              onClick: this.handleMaskClick,
              onMouseEnter: onMaskMouseEnter,
              onMouseLeave: onMaskMouseLeave,
              dir: rtl ? "rtl" : void 0
            },
            isChildrenInMask && children
          ) : null,
          !isChildrenInMask && children
        );
      }
      return React.createElement(Gateway$1, _default$8({ container: container4, target, children }, { ref: this.saveGatewayRef }));
    };
    return Overlay3;
  }(React.Component), _class$13.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    style: PropTypes$1.object,
    /**
     * 弹层内容
     */
    children: PropTypes$1.any,
    /**
     * 是否显示弹层
     */
    visible: PropTypes$1.bool,
    /**
     * 弹层请求关闭时触发事件的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onRequestClose: PropTypes$1.func,
    /**
     * 弹层定位的参照元素
     */
    target: PropTypes$1.any,
    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align: PropTypes$1.string,
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     */
    offset: PropTypes$1.array,
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container: PropTypes$1.any,
    /**
     * 是否显示遮罩
     */
    hasMask: PropTypes$1.bool,
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc: PropTypes$1.bool,
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick: PropTypes$1.bool,
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask: PropTypes$1.bool,
    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen: PropTypes$1.func,
    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen: PropTypes$1.func,
    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen: PropTypes$1.func,
    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose: PropTypes$1.func,
    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose: PropTypes$1.func,
    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: PropTypes$1.func,
    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition: PropTypes$1.func,
    /**
     * 弹层定位完成时触发的事件
     * @param {Object} config 定位的参数
     * @param {Array} config.align 对齐方式，如 ['cc', 'cc']（如果开启 autoAdjust，可能和预先设置的 align 不同）
     * @param {Number} config.top 距离视口顶部距离
     * @param {Number} config.left 距离视口左侧距离
     * @param {Object} node 定位参照的容器节点
     */
    onPosition: PropTypes$1.func,
    shouldUpdatePosition: PropTypes$1.bool,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: PropTypes$1.bool,
    needAdjust: PropTypes$1.bool,
    /**
     * 是否禁用页面滚动
     */
    disableScroll: PropTypes$1.bool,
    /**
     * 是否在捕获阶段监听，适配 react 17 事件模型变更
     * @version 1.25
     */
    useCapture: PropTypes$1.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: PropTypes$1.bool,
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode: PropTypes$1.any,
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName: PropTypes$1.string,
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle: PropTypes$1.object,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.bool]),
    onMaskMouseEnter: PropTypes$1.func,
    onMaskMouseLeave: PropTypes$1.func,
    onClick: PropTypes$1.func,
    maskClass: PropTypes$1.string,
    isChildrenInMask: PropTypes$1.bool,
    // 当 pin 元素（一般是弹层）是 fixed 布局的时候，pin 元素是否要跟随 base 元素（一般是trigger）
    // 举例来说，dialog/drawer 这类组件弹层是不跟随trigger的，而 fixed 布局下的subNav是跟随trigger的
    pinFollowBaseElementWhenFixed: PropTypes$1.bool,
    /**
     * 开启 v2 版本
     * @version 1.25
     */
    v2: PropTypes$1.bool,
    /**
     * [v2] align 的数组形式，不能和 align 同时使用
     * @version 1.25
     */
    points: PropTypes$1.array
  }, _class$13.defaultProps = {
    prefix: "next-",
    pure: false,
    visible: false,
    onRequestClose: noop$e,
    target: Position.VIEWPORT,
    align: "tl bl",
    offset: [0, 0],
    hasMask: false,
    canCloseByEsc: true,
    canCloseByOutSideClick: true,
    canCloseByMask: true,
    beforeOpen: noop$e,
    onOpen: noop$e,
    afterOpen: noop$e,
    beforeClose: noop$e,
    onClose: noop$e,
    afterClose: noop$e,
    beforePosition: noop$e,
    onPosition: noop$e,
    onMaskMouseEnter: noop$e,
    onMaskMouseLeave: noop$e,
    shouldUpdatePosition: false,
    autoFocus: false,
    needAdjust: true,
    disableScroll: false,
    cache: false,
    isChildrenInMask: false,
    onTouchEnd: function onTouchEnd(event) {
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      return event.stopPropagation();
    },
    maskClass: "",
    useCapture: true
  }, _temp$N);
  Overlay$4.displayName = "Overlay";
  const Overlay1 = polyfill(Overlay$4);
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function useListener(nodeList, eventName, callback, useCapture, condition) {
    React.useEffect(function() {
      if (condition) {
        if (!Array.isArray(nodeList)) {
          nodeList = [nodeList];
        }
        nodeList.forEach(function(n2) {
          n2 && n2.addEventListener && n2.addEventListener(eventName, callback, useCapture || false);
        });
        return function() {
          Array.isArray(nodeList) && nodeList.forEach(function(n2) {
            n2 && n2.removeEventListener && n2.removeEventListener(eventName, callback, useCapture || false);
          });
        };
      }
      return void 0;
    }, [condition]);
  }
  function makeChain$6() {
    var _this2 = this;
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      for (var i = 0, j = fns.length; i < j; i++) {
        if (fns[i] && fns[i].apply) {
          fns[i].apply(_this2, args);
        }
      }
    };
  }
  function callRef(ref, element) {
    if (!ref) {
      return;
    }
    if (typeof ref === "string") {
      throw new Error("can not set ref string for " + ref);
    } else if (typeof ref === "function") {
      ref(element);
    } else if (Object.prototype.hasOwnProperty.call(ref, "current")) {
      ref.current = element;
    }
  }
  function saveRef(ref) {
    if (!ref) {
      return null;
    }
    return function(element) {
      if (typeof ref === "string") {
        throw new Error("can not set ref string for " + ref);
      } else if (typeof ref === "function") {
        ref(element);
      } else if (Object.prototype.hasOwnProperty.call(ref, "current")) {
        ref.current = element;
      }
    };
  }
  var getRelativeContainer = function getRelativeContainer2(container4) {
    if (typeof document === void 0) {
      return container4;
    }
    var calcContainer = container4;
    while (getStyle$2(calcContainer, "position") === "static") {
      if (!calcContainer || calcContainer === document.documentElement) {
        return document.documentElement;
      }
      calcContainer = calcContainer.parentNode;
    }
    return calcContainer;
  };
  var getOverflowNodes = function getOverflowNodes2(targetNode, container4) {
    if (typeof document === void 0) {
      return [];
    }
    var overflowNodes = [];
    var calcContainer = targetNode;
    while (true) {
      if (!calcContainer || calcContainer === container4 || calcContainer === document.body || calcContainer === document.documentElement) {
        break;
      }
      var overflow = getStyle$2(calcContainer, "overflow");
      if (overflow && overflow.match(/auto|scroll/)) {
        var _calcContainer = calcContainer, clientWidth = _calcContainer.clientWidth, clientHeight = _calcContainer.clientHeight, scrollWidth = _calcContainer.scrollWidth, scrollHeight = _calcContainer.scrollHeight;
        if (clientHeight !== scrollHeight || clientWidth !== scrollWidth) {
          overflowNodes.push(calcContainer);
        }
      }
      calcContainer = calcContainer.parentNode;
    }
    return overflowNodes;
  };
  function getViewPort(container4) {
    var calcContainer = container4;
    while (calcContainer) {
      var overflow = getStyle$2(calcContainer, "overflow");
      if (overflow !== null && overflow !== void 0 && overflow.match(/auto|scroll|hidden/)) {
        return calcContainer;
      }
      calcContainer = calcContainer.parentNode;
    }
    return document.documentElement;
  }
  function getStyle$2(elt, name) {
    if (!elt || elt.nodeType !== 1) {
      return null;
    }
    var style = window.getComputedStyle(elt, null);
    return style.getPropertyValue(name);
  }
  var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size|top|left/i;
  function setStyle$1(node, name, value) {
    if (!node) {
      return;
    }
    if (typeof name === "string") {
      if (typeof value === "number" && PIXEL_PATTERN.test(name)) {
        value = value + "px";
      }
      node.style[name] = value;
    } else if (typeof name === "object" && arguments.length === 2) {
      Object.keys(name).forEach(function(key) {
        return setStyle$1(node, key, name[key]);
      });
    }
  }
  function throttle(func2, wait) {
    var previous = -wait;
    return function() {
      var now = Date.now();
      var args = arguments;
      if (now - previous > wait) {
        func2.apply(this, args);
        previous = now;
      }
    };
  }
  function getViewTopLeft(node) {
    if (node === document.documentElement) {
      return {
        top: 0,
        left: 0
      };
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), left = _node$getBoundingClie.left, top = _node$getBoundingClie.top;
    return {
      top,
      left
    };
  }
  function getWidthHeight(element) {
    if ("offsetWidth" in element && "offsetHeight" in element) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    } else {
      var _element$getBoundingC = element.getBoundingClientRect(), width = _element$getBoundingC.width, height = _element$getBoundingC.height;
      return {
        width,
        height
      };
    }
  }
  function getScrollbarWidth() {
    var scrollDiv = document.createElement("div");
    scrollDiv.className += "just-to-get-scrollbar-size";
    setStyle$1(scrollDiv, {
      position: "absolute",
      width: "100px",
      height: "100px",
      overflow: "scroll",
      top: "-9999px"
    });
    document.body && document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  function _isVisible(node) {
    while (node) {
      if (node === document.body || node === document.documentElement) {
        break;
      }
      if (node.style.display === "none" || node.style.visibility === "hidden") {
        return false;
      }
      node = node.parentNode;
    }
    return true;
  }
  function _isFocusable(node) {
    var nodeName = node.nodeName.toLowerCase();
    var tabIndex = parseInt(node.getAttribute("tabindex"), 10);
    var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;
    if (_isVisible(node)) {
      if (nodeName === "input") {
        return !node.disabled && node.type !== "hidden";
      } else if (["select", "textarea", "button"].indexOf(nodeName) > -1) {
        return !node.disabled;
      } else if (nodeName === "a") {
        return node.getAttribute("href") || hasTabIndex;
      } else {
        return hasTabIndex;
      }
    }
    return false;
  }
  function getFocusNodeList(node) {
    var res = [];
    var nodeList = node.querySelectorAll("*");
    nodeList.forEach(function(item) {
      if (_isFocusable(item)) {
        var method = item.getAttribute("data-auto-focus") ? "unshift" : "push";
        res[method](item);
      }
    });
    if (_isFocusable(node)) {
      res.unshift(node);
    }
    return res;
  }
  function getHTMLElement(node) {
    if (node) {
      if (node.nodeType) {
        if (node.nodeType === 1) {
          return node;
        } else {
          return document.body;
        }
      } else if (node === window) {
        return document.body;
      } else {
        return ReactDOM.findDOMNode(node);
      }
    }
    return node;
  }
  function getTargetNode(target) {
    if (typeof target === "function") {
      return target();
    } else if (typeof target === "string") {
      return document.getElementById(target);
    }
    return target;
  }
  function isSameObject(object1, object2) {
    if (!object1 || !object2) {
      return false;
    }
    var o1keys = Object.keys(object1);
    var o2keys = Object.keys(object2);
    if (o2keys.length !== o1keys.length)
      return false;
    for (var i = 0; i <= o1keys.length - 1; i++) {
      var _key3 = o1keys[i];
      if (!o2keys.includes(_key3))
        return false;
      if (object2[_key3] !== object1[_key3])
        return false;
    }
    return true;
  }
  var useEvent = function useEvent2(handler) {
    var handleRef = React.useRef(handler);
    React.useLayoutEffect(function() {
      handleRef.current = handler;
    });
    return React.useCallback(function() {
      var fn = handleRef.current;
      return fn.apply(void 0, arguments);
    }, []);
  };
  var placementMap = {
    tl: ["bl", "tl"],
    t: ["bc", "tc"],
    tr: ["br", "tr"],
    lt: ["tr", "tl"],
    l: ["cr", "cl"],
    lb: ["br", "bl"],
    bl: ["tl", "bl"],
    b: ["tc", "bc"],
    br: ["tr", "br"],
    rt: ["tl", "tr"],
    r: ["cl", "cr"],
    rb: ["bl", "br"]
  };
  function getXY(p2, staticInfo) {
    var targetInfo = staticInfo.targetInfo, containerInfo = staticInfo.containerInfo, overlayInfo = staticInfo.overlayInfo, opoints = staticInfo.points, placementOffset = staticInfo.placementOffset, offset = staticInfo.offset, rtl = staticInfo.rtl;
    var basex = targetInfo.left - containerInfo.left + containerInfo.scrollLeft;
    var basey = targetInfo.top - containerInfo.top + containerInfo.scrollTop;
    function setPointX(point, positive, width) {
      if (positive === void 0) {
        positive = true;
      }
      var plus = positive ? 1 : -1;
      switch (point) {
        case "l":
          basex += 0;
          break;
        case "c":
          basex += plus * width / 2;
          break;
        case "r":
          basex += plus * width;
          break;
      }
    }
    function setPointY(point, positive, height) {
      if (positive === void 0) {
        positive = true;
      }
      var plus = positive ? 1 : -1;
      switch (point) {
        case "t":
          basey += 0;
          break;
        case "c":
          basey += plus * height / 2;
          break;
        case "b":
          basey += plus * height;
          break;
      }
    }
    var points = [].concat(opoints);
    if (p2 && p2 in placementMap) {
      points = placementMap[p2];
    }
    if (rtl) {
      if (points[0].match(/l/)) {
        points[0] = points[0].replace("l", "r");
      } else if (points[0].match(/r/)) {
        points[0] = points[0].replace("r", "l");
      }
      if (points[1].match(/l/)) {
        points[1] = points[1].replace("l", "r");
      } else if (points[1].match(/r/)) {
        points[1] = points[1].replace("r", "l");
      }
    }
    setPointY(points[1][0], true, targetInfo.height);
    setPointX(points[1][1], true, targetInfo.width);
    setPointY(points[0][0], false, overlayInfo.height);
    setPointX(points[0][1], false, overlayInfo.width);
    if (placementOffset && p2.length >= 1) {
      switch (p2[0]) {
        case "t":
          basey -= placementOffset;
          break;
        case "b":
          basey += placementOffset;
          break;
        case "l":
          basex -= placementOffset;
          break;
        case "r":
          basex += placementOffset;
          break;
      }
    }
    return {
      points,
      left: basex + offset[0],
      top: basey + offset[1]
    };
  }
  function shouldResizePlacement(l2, t2, viewport, staticInfo) {
    var container4 = staticInfo.container, containerInfo = staticInfo.containerInfo, overlayInfo = staticInfo.overlayInfo;
    if (viewport !== container4) {
      var _getViewTopLeft = getViewTopLeft(viewport), vleft = _getViewTopLeft.left, vtop = _getViewTopLeft.top;
      var vwidth = viewport.scrollWidth, vheight = viewport.scrollHeight, vscrollTop = viewport.scrollTop, vscrollLeft = viewport.scrollLeft;
      var nt = t2 + containerInfo.top - vtop + vscrollTop;
      var nl = l2 + containerInfo.left - vleft + vscrollLeft;
      return nt < 0 || nl < 0 || nt + overlayInfo.height > vheight || nl + overlayInfo.width > vwidth;
    }
    return t2 < 0 || l2 < 0 || t2 + overlayInfo.height > containerInfo.height || l2 + overlayInfo.width > containerInfo.width;
  }
  function getNewPlacement(l2, t2, p2, staticInfo) {
    var overlayInfo = staticInfo.overlayInfo, containerInfo = staticInfo.containerInfo;
    var np = p2.split("");
    if (np.length === 1) {
      np.push("");
    }
    if (t2 < 0) {
      np = [np[0].replace("t", "b"), np[1].replace("b", "t")];
    }
    if (l2 < 0) {
      np = [np[0].replace("l", "r"), np[1].replace("r", "l")];
    }
    if (t2 + overlayInfo.height > containerInfo.height) {
      np = [np[0].replace("b", "t"), np[1].replace("t", "b")];
    }
    if (l2 + overlayInfo.width > containerInfo.width) {
      np = [np[0].replace("r", "l"), np[1].replace("l", "r")];
    }
    return np.join("");
  }
  function ajustLeftAndTop(l2, t2, staticInfo) {
    var overlayInfo = staticInfo.overlayInfo, containerInfo = staticInfo.containerInfo;
    if (t2 < 0) {
      t2 = 0;
    }
    if (l2 < 0) {
      l2 = 0;
    }
    if (t2 + overlayInfo.height > containerInfo.height) {
      t2 = containerInfo.height - overlayInfo.height;
    }
    if (l2 + overlayInfo.width > containerInfo.width) {
      l2 = containerInfo.width - overlayInfo.width;
    }
    return {
      left: l2,
      top: t2
    };
  }
  function getPlacements(config3) {
    var target = config3.target, overlay = config3.overlay, container4 = config3.container, scrollNode = config3.scrollNode, oplacement = config3.placement, _config$placementOffs = config3.placementOffset, placementOffset = _config$placementOffs === void 0 ? 0 : _config$placementOffs, _config$points = config3.points, opoints = _config$points === void 0 ? ["tl", "bl"] : _config$points, _config$offset = config3.offset, offset = _config$offset === void 0 ? [0, 0] : _config$offset, _config$position = config3.position, position = _config$position === void 0 ? "absolute" : _config$position, beforePosition = config3.beforePosition, _config$autoAdjust = config3.autoAdjust, autoAdjust = _config$autoAdjust === void 0 ? true : _config$autoAdjust, _config$autoHideScrol = config3.autoHideScrollOverflow, autoHideScrollOverflow = _config$autoHideScrol === void 0 ? true : _config$autoHideScrol, rtl = config3.rtl;
    var placement = oplacement;
    var _getWidthHeight = getWidthHeight(overlay), owidth = _getWidthHeight.width, oheight = _getWidthHeight.height;
    if (position === "fixed") {
      var _result = {
        config: {
          placement: void 0,
          points: void 0
        },
        style: {
          position,
          left: offset[0],
          top: offset[1]
        }
      };
      if (beforePosition && typeof beforePosition) {
        return beforePosition(_result, {
          overlay: {
            node: overlay,
            width: owidth,
            height: oheight
          }
        });
      }
      return _result;
    }
    var _target$getBoundingCl = target.getBoundingClientRect(), twidth = _target$getBoundingCl.width, theight = _target$getBoundingCl.height, tleft = _target$getBoundingCl.left, ttop = _target$getBoundingCl.top;
    var _getViewTopLeft2 = getViewTopLeft(container4), cleft = _getViewTopLeft2.left, ctop = _getViewTopLeft2.top;
    var cwidth = container4.scrollWidth, cheight = container4.scrollHeight, cscrollTop = container4.scrollTop, cscrollLeft = container4.scrollLeft;
    var staticInfo = {
      targetInfo: {
        width: twidth,
        height: theight,
        left: tleft,
        top: ttop
      },
      containerInfo: {
        left: cleft,
        top: ctop,
        width: cwidth,
        height: cheight,
        scrollTop: cscrollTop,
        scrollLeft: cscrollLeft
      },
      overlayInfo: {
        width: owidth,
        height: oheight
      },
      points: opoints,
      placementOffset,
      offset,
      container: container4,
      rtl
    };
    var _getXY = getXY(placement, staticInfo), left = _getXY.left, top = _getXY.top, points = _getXY.points;
    var viewport = getViewPort(container4);
    if (autoAdjust && placement && shouldResizePlacement(left, top, viewport, staticInfo)) {
      var nplacement = getNewPlacement(left, top, placement, staticInfo);
      if (placement !== nplacement) {
        var _getXY2 = getXY(nplacement, staticInfo), _nleft = _getXY2.left, _ntop = _getXY2.top;
        if (shouldResizePlacement(_nleft, _ntop, viewport, staticInfo)) {
          var nnplacement = getNewPlacement(_nleft, _ntop, nplacement, staticInfo);
          if (nplacement !== nnplacement) {
            var _getXY3 = getXY(nnplacement, staticInfo), nnleft = _getXY3.left, nntop = _getXY3.top;
            var _ajustLeftAndTop = ajustLeftAndTop(nnleft, nntop, staticInfo), nnnleft = _ajustLeftAndTop.left, nnntop = _ajustLeftAndTop.top;
            placement = nnplacement;
            left = nnnleft;
            top = nnntop;
          } else {
            placement = nplacement;
            left = _nleft;
            top = _ntop;
          }
        } else {
          placement = nplacement;
          left = _nleft;
          top = _ntop;
        }
      }
      var _ajustLeftAndTop2 = ajustLeftAndTop(left, top, staticInfo), nleft = _ajustLeftAndTop2.left, ntop = _ajustLeftAndTop2.top;
      left = nleft;
      top = ntop;
    }
    var result = {
      config: {
        placement,
        points
      },
      style: {
        position,
        left: Math.round(left),
        top: Math.round(top)
      }
    };
    if (autoHideScrollOverflow && placement && scrollNode !== null && scrollNode !== void 0 && scrollNode.length) {
      scrollNode.forEach(function(node) {
        var _node$getBoundingClie = node.getBoundingClientRect(), top2 = _node$getBoundingClie.top, left2 = _node$getBoundingClie.left, width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
        if (ttop + theight < top2 || ttop > top2 + height || tleft + twidth < left2 || tleft > left2 + width) {
          result.style.display = "none";
        } else {
          result.style.display = "";
        }
      });
    }
    if (beforePosition && typeof beforePosition) {
      return beforePosition(result, {
        target: {
          node: target,
          width: twidth,
          height: theight,
          left: tleft,
          top: ttop
        },
        overlay: {
          node: overlay,
          width: owidth,
          height: oheight
        }
      });
    }
    return result;
  }
  var OverlayContext = /* @__PURE__ */ React.createContext({
    setVisibleOverlayToParent: function setVisibleOverlayToParent() {
    }
  });
  var _excluded$1 = ["target", "children", "wrapperClassName", "maskClassName", "maskStyle", "hasMask", "canCloseByMask", "maskRender", "points", "offset", "fixed", "visible", "onRequestClose", "onOpen", "onClose", "container", "placement", "placementOffset", "disableScroll", "canCloseByOutSideClick", "canCloseByEsc", "safeNode", "beforePosition", "onPosition", "cache", "autoAdjust", "autoFocus", "isAnimationEnd", "rtl", "wrapperStyle"], _excluded2 = ["setVisibleOverlayToParent"];
  var _this = globalThis;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var isScrollDisplay2 = function isScrollDisplay3(element) {
    try {
      var scrollbarStyle = window.getComputedStyle(element, "::-webkit-scrollbar");
      return !scrollbarStyle || scrollbarStyle.getPropertyValue("display") !== "none";
    } catch (e2) {
    }
    return true;
  };
  var hasScroll = function hasScroll2(containerNode) {
    var overflow = getStyle$2(containerNode, "overflow");
    if (overflow === "hidden") {
      return false;
    }
    var parentNode = containerNode.parentNode;
    return parentNode && parentNode.scrollHeight > parentNode.clientHeight && getScrollbarWidth() > 0 && isScrollDisplay2(parentNode) && isScrollDisplay2(containerNode);
  };
  var RefWrapper = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(RefWrapper2, _React$Component);
    function RefWrapper2() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = RefWrapper2.prototype;
    _proto.render = function render2() {
      return this.props.children;
    };
    return RefWrapper2;
  }(React.Component);
  var Overlay$3 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _overflowRef$current;
    var body = function body2() {
      return document.body;
    };
    var target = props.target, children = props.children, wrapperClassName = props.wrapperClassName, maskClassName = props.maskClassName, maskStyle = props.maskStyle, hasMask = props.hasMask, _props$canCloseByMask = props.canCloseByMask, canCloseByMask = _props$canCloseByMask === void 0 ? true : _props$canCloseByMask, maskRender = props.maskRender, points = props.points, offset = props.offset, fixed2 = props.fixed, visible = props.visible, _props$onRequestClose = props.onRequestClose, onRequestClose = _props$onRequestClose === void 0 ? function() {
    } : _props$onRequestClose, onOpen = props.onOpen, onClose = props.onClose, _props$container = props.container, popupContainer = _props$container === void 0 ? body : _props$container, placement = props.placement, placementOffset = props.placementOffset, _props$disableScroll = props.disableScroll, disableScroll = _props$disableScroll === void 0 ? false : _props$disableScroll, _props$canCloseByOutS = props.canCloseByOutSideClick, canCloseByOutSideClick = _props$canCloseByOutS === void 0 ? true : _props$canCloseByOutS, _props$canCloseByEsc = props.canCloseByEsc, canCloseByEsc = _props$canCloseByEsc === void 0 ? true : _props$canCloseByEsc, safeNode = props.safeNode, beforePosition = props.beforePosition, onPosition = props.onPosition, _props$cache = props.cache, cache = _props$cache === void 0 ? false : _props$cache, autoAdjust = props.autoAdjust, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$isAnimationEnd = props.isAnimationEnd, isAnimationEnd = _props$isAnimationEnd === void 0 ? true : _props$isAnimationEnd, rtl = props.rtl, owrapperStyle = props.wrapperStyle, others = _objectWithoutPropertiesLoose(props, _excluded$1);
    var position = fixed2 ? "fixed" : "absolute";
    var _useState = React.useState(visible), firstVisible = _useState[0], setFirst = _useState[1];
    var _useState2 = React.useState(null), forceUpdate = _useState2[1];
    var positionStyleRef = React.useRef({
      position
    });
    var getContainer3 = typeof popupContainer === "string" ? function() {
      return document.getElementById(popupContainer);
    } : typeof popupContainer !== "function" ? function() {
      return popupContainer;
    } : popupContainer;
    var _useState3 = React.useState(null), container4 = _useState3[0], setContainer = _useState3[1];
    var targetRef = React.useRef(null);
    var preTarget = React.useRef(target);
    var overlayRef = React.useRef(null);
    var containerRef = React.useRef(null);
    var maskRef = React.useRef(null);
    var overflowRef = React.useRef([]);
    var lastFocus = React.useRef(null);
    var ro = React.useRef(null);
    var _useState4 = React.useState(Date.now().toString(36)), uuid2 = _useState4[0];
    var _useContext = React.useContext(OverlayContext), setVisibleOverlayToParent2 = _useContext.setVisibleOverlayToParent, otherContext = _objectWithoutPropertiesLoose(_useContext, _excluded2);
    var childIDMap = React.useRef(/* @__PURE__ */ new Map());
    var handleOpen = function handleOpen2(node) {
      setVisibleOverlayToParent2(uuid2, node);
      onOpen === null || onOpen === void 0 ? void 0 : onOpen(node);
    };
    var handleClose = function handleClose2() {
      positionStyleRef.current = null;
      setVisibleOverlayToParent2(uuid2, null);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    var getVisibleOverlayFromChild = function getVisibleOverlayFromChild2(id2, node) {
      if (node) {
        childIDMap.current.set(id2, node);
      } else {
        childIDMap.current["delete"](id2);
      }
      setVisibleOverlayToParent2(id2, node);
    };
    var child = React.Children.only(children);
    if (typeof child.ref === "string") {
      throw new Error("Can not set ref by string in Overlay, use function instead.");
    }
    var updatePosition = useEvent(function() {
      var overlayNode2 = overlayRef.current;
      var containerNode = containerRef.current;
      var targetNode = targetRef.current;
      if (!overlayNode2 || !containerNode || !targetNode) {
        return;
      }
      var placements = getPlacements({
        target: targetNode,
        overlay: overlayNode2,
        container: containerNode,
        scrollNode: overflowRef.current,
        points,
        offset,
        position,
        placement,
        placementOffset,
        beforePosition,
        autoAdjust,
        rtl
      });
      if (!isSameObject(positionStyleRef.current, placements.style)) {
        positionStyleRef.current = placements.style;
        setStyle$1(overlayNode2, placements.style);
        typeof onPosition === "function" && onPosition(placements);
      }
    });
    var overlayRefCallback = React.useCallback(function(nodeRef) {
      var node = ReactDOM.findDOMNode(nodeRef);
      overlayRef.current = node;
      callRef(ref, node);
      if (node !== null && container4) {
        var containerNode = getRelativeContainer(getHTMLElement(container4));
        containerRef.current = containerNode;
        var targetElement = target === "viewport" ? hasMask ? maskRef.current : body() : getTargetNode(target) || body();
        var targetNode = getHTMLElement(targetElement);
        targetRef.current = targetNode;
        overflowRef.current = getOverflowNodes(targetNode, containerNode);
        setStyle$1(node, {
          position: fixed2 ? "fixed" : "absolute",
          top: -1e3,
          left: -1e3
        });
        var waitTime = 100;
        ro.current = new index$2(throttle(updatePosition.bind(_this), waitTime));
        ro.current.observe(containerNode);
        ro.current.observe(node);
        forceUpdate({});
        if (autoFocus) {
          setTimeout(function() {
            var focusableNodes = getFocusNodeList(node);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
              lastFocus.current = document.activeElement;
              focusableNodes[0].focus();
            }
          }, waitTime);
        }
        !cache && handleOpen(node);
      } else {
        !cache && handleClose();
        if (ro.current) {
          ro.current.disconnect();
          ro.current = null;
        }
      }
    }, [container4]);
    var clickEvent = function clickEvent2(e2) {
      for (var _iterator3 = _createForOfIteratorHelperLoose(childIDMap.current.entries()), _step; !(_step = _iterator3()).done; ) {
        var _step$value = _step.value, oNode = _step$value[1];
        var _node2 = getHTMLElement(oNode);
        if (_node2 && (_node2 === e2.target || _node2.contains(e2.target))) {
          return;
        }
      }
      if (!visible) {
        return;
      }
      if (hasMask && maskRef.current === e2.target) {
        if (canCloseByMask) {
          onRequestClose("maskClick", e2);
        }
        return;
      }
      var safeNodeList = Array.isArray(safeNode) ? safeNode : [safeNode];
      if (overlayRef.current) {
        safeNodeList.push(function() {
          return overlayRef.current;
        });
      }
      for (var i = 0; i < safeNodeList.length; i++) {
        var _safeNode = getTargetNode(safeNodeList[i]);
        var _node = getHTMLElement(_safeNode);
        if (_node && (_node === e2.target || _node.contains(e2.target))) {
          return;
        }
      }
      if (canCloseByOutSideClick) {
        onRequestClose("docClick", e2);
      }
    };
    useListener(document, "mousedown", clickEvent, false, !!(visible && overlayRef.current && (canCloseByOutSideClick || hasMask && canCloseByMask)));
    var keydownEvent = function keydownEvent2(e2) {
      if (!visible) {
        return;
      }
      if (e2.keyCode === 27 && canCloseByEsc && !childIDMap.current.size) {
        onRequestClose("esc", e2);
      }
    };
    useListener(document, "keydown", keydownEvent, false, !!(visible && overlayRef.current && canCloseByEsc));
    var scrollEvent = function scrollEvent2(e2) {
      if (!visible) {
        return;
      }
      updatePosition();
    };
    useListener(overflowRef.current, "scroll", scrollEvent, false, !!(visible && overlayRef.current && (_overflowRef$current = overflowRef.current) !== null && _overflowRef$current !== void 0 && _overflowRef$current.length));
    React.useEffect(function() {
      if (visible && disableScroll) {
        var originStyle = document.body.getAttribute("style");
        setStyle$1(document.body, "overflow", "hidden");
        if (hasScroll(document.body)) {
          var scrollWidth = getScrollbarWidth();
          if (scrollWidth) {
            setStyle$1(document.body, "padding-right", "calc(" + getStyle$2(document.body, "padding-right") + " + " + scrollWidth + "px)");
          }
        }
        return function() {
          document.body.setAttribute("style", originStyle || "");
        };
      }
      return void 0;
    }, [visible && disableScroll]);
    React.useEffect(function() {
      if (!firstVisible && visible) {
        setFirst(true);
      }
    }, [visible]);
    var overlayNode = overlayRef.current;
    React.useEffect(function() {
      if (cache && overlayNode) {
        if (visible) {
          updatePosition();
          handleOpen(overlayNode);
        } else {
          handleClose();
        }
      }
    }, [visible, cache && overlayNode]);
    React.useEffect(function() {
      if (visible && overlayNode) {
        if (target && targetRef.current && preTarget.current !== target) {
          var targetElement = target === "viewport" ? hasMask ? maskRef.current : body() : getTargetNode(target) || body();
          var targetNode = getHTMLElement(targetElement);
          if (targetNode && targetRef.current !== targetNode) {
            targetRef.current = targetNode;
            updatePosition();
          }
          preTarget.current = target;
        }
      }
    }, [target]);
    React.useEffect(function() {
      if (visible && overlayNode) {
        updatePosition();
      }
    }, [offset, placement, placementOffset, points, autoAdjust, rtl]);
    React.useEffect(function() {
      if (!visible && autoFocus && lastFocus.current) {
        lastFocus.current.focus();
        lastFocus.current = null;
      }
    }, [!visible && autoFocus && lastFocus.current]);
    React.useEffect(function() {
      if (visible) {
        if (!container4) {
          setContainer(getContainer3());
        } else if (getContainer3() !== container4) {
          setContainer(getContainer3());
        }
      }
    }, [visible, popupContainer]);
    if (firstVisible === false || !container4) {
      return null;
    }
    if (!visible && !cache && isAnimationEnd) {
      return null;
    }
    var newChildren = child ? /* @__PURE__ */ React.createElement(RefWrapper, {
      ref: overlayRefCallback
    }, /* @__PURE__ */ React.cloneElement(child, _extends({}, others, {
      style: _extends({
        top: 0,
        left: 0
      }, child.props.style, positionStyleRef.current)
    }))) : null;
    var wrapperStyle = _extends({}, owrapperStyle);
    if (cache && !visible && isAnimationEnd) {
      wrapperStyle.display = "none";
    }
    var maskNode = /* @__PURE__ */ React.createElement("div", {
      className: maskClassName,
      style: maskStyle,
      ref: maskRef
    });
    var content = /* @__PURE__ */ React.createElement("div", {
      className: wrapperClassName,
      style: wrapperStyle
    }, hasMask ? maskRender ? maskRender(maskNode) : maskNode : null, newChildren);
    return /* @__PURE__ */ React.createElement(OverlayContext.Provider, {
      value: _extends({}, otherContext, {
        setVisibleOverlayToParent: getVisibleOverlayFromChild
      })
    }, /* @__PURE__ */ ReactDOM.createPortal(content, container4));
  });
  var _excluded = ["overlay", "triggerType", "triggerClickKeyCode", "children", "defaultVisible", "className", "onVisibleChange", "container", "style", "placement", "canCloseByTrigger", "delay", "overlayProps", "safeNode", "followTrigger", "target", "disabled"];
  var Popup$5 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var body = function body2() {
      return document.body;
    };
    var overlay = props.overlay, _props$triggerType = props.triggerType, triggerType = _props$triggerType === void 0 ? "click" : _props$triggerType, triggerClickKeyCode = props.triggerClickKeyCode, children = props.children, defaultVisible = props.defaultVisible;
    props.className;
    var _props$onVisibleChang = props.onVisibleChange, onVisibleChange = _props$onVisibleChang === void 0 ? function() {
    } : _props$onVisibleChang, _props$container = props.container, container4 = _props$container === void 0 ? body : _props$container;
    props.style;
    var _props$placement = props.placement, placement = _props$placement === void 0 ? "bl" : _props$placement, _props$canCloseByTrig = props.canCloseByTrigger, canCloseByTrigger = _props$canCloseByTrig === void 0 ? true : _props$canCloseByTrig, _props$delay = props.delay, delay = _props$delay === void 0 ? 200 : _props$delay, _props$overlayProps = props.overlayProps, overlayProps = _props$overlayProps === void 0 ? {} : _props$overlayProps, safeNode = props.safeNode, _props$followTrigger = props.followTrigger, followTrigger = _props$followTrigger === void 0 ? false : _props$followTrigger, otarget = props.target, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, others = _objectWithoutPropertiesLoose(props, _excluded);
    var _useState = React.useState(defaultVisible || props.visible), visible = _useState[0], setVisible = _useState[1];
    var triggerRef = React.useRef(null);
    var overlayRef = React.useRef(null);
    var mouseLeaveTimer = React.useRef(null);
    var mouseEnterTimer = React.useRef(null);
    var overlayClick = React.useRef(false);
    var child = children && React.Children.only(children);
    var overlayChild = React.Children.only(overlay);
    React.useEffect(function() {
      if ("visible" in props) {
        setVisible(props.visible);
      }
    }, [props.visible]);
    var handleVisibleChange = function handleVisibleChange2(visible2, e2, triggerType2) {
      if (triggerType2 === void 0) {
        triggerType2 = "fromTrigger";
      }
      if (disabled) {
        return;
      }
      if (!("visible" in props)) {
        if (visible2 || overlayRef.current) {
          setVisible(visible2);
        }
      }
      onVisibleChange(visible2, triggerType2, e2);
    };
    var handleClick = function handleClick2(e2) {
      if (visible && !canCloseByTrigger) {
        return;
      }
      handleVisibleChange(!visible, e2);
    };
    var handleKeyDown = function handleKeyDown2(e2) {
      var keycodes = Array.isArray(triggerClickKeyCode) ? triggerClickKeyCode : [triggerClickKeyCode];
      if (keycodes.includes(e2.keyCode)) {
        handleVisibleChange(!visible, e2);
      }
    };
    var handleMouseEnter = function handleMouseEnter2(targetType) {
      return function(e2) {
        if (mouseLeaveTimer.current && visible) {
          clearTimeout(mouseLeaveTimer.current);
          mouseLeaveTimer.current = null;
          return;
        }
        if (!mouseEnterTimer.current && !visible) {
          mouseEnterTimer.current = setTimeout(function() {
            handleVisibleChange(true, e2, targetType);
            mouseEnterTimer.current = null;
          }, delay);
        }
      };
    };
    var handleMouseLeave = function handleMouseLeave2(targetType) {
      return function(e2) {
        if (!mouseLeaveTimer.current && visible) {
          mouseLeaveTimer.current = setTimeout(function() {
            handleVisibleChange(false, e2, targetType);
            mouseLeaveTimer.current = null;
          }, delay);
        }
        if (mouseEnterTimer.current && !visible) {
          clearTimeout(mouseEnterTimer.current);
          mouseEnterTimer.current = null;
        }
      };
    };
    var handleFocus = function handleFocus2(e2) {
      handleVisibleChange(true, e2);
    };
    var handleBlur = function handleBlur2(e2) {
      if (overlayClick.current) {
        overlayClick.current = false;
        return;
      }
      handleVisibleChange(false, e2);
    };
    var handleOverlayClick = function handleOverlayClick2(e2) {
      overlayClick.current = true;
    };
    var handleRequestClose = function handleRequestClose2(targetType, e2) {
      handleVisibleChange(false, e2, targetType);
    };
    var triggerProps = {};
    var overlayOtherProps = {};
    var safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
    if (child && !disabled) {
      var triggerTypeList = typeof triggerType === "string" ? [triggerType] : triggerType;
      triggerTypeList.forEach(function(t2) {
        var _child$props, _child$props2, _child$props3, _child$props4, _child$props5, _child$props6;
        switch (t2) {
          case "click":
            triggerProps.onClick = makeChain$6(handleClick, (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.onClick);
            triggerProps.onKeyDown = makeChain$6(handleKeyDown, (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.onKeyDown);
            break;
          case "hover":
            triggerProps.onMouseEnter = makeChain$6(handleMouseEnter("fromTrigger"), (_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.onMouseEnter);
            triggerProps.onMouseLeave = makeChain$6(handleMouseLeave("fromTrigger"), (_child$props4 = child.props) === null || _child$props4 === void 0 ? void 0 : _child$props4.onMouseLeave);
            overlayOtherProps.onMouseEnter = makeChain$6(handleMouseEnter("overlay"), overlayProps.onMouseEnter);
            overlayOtherProps.onMouseLeave = makeChain$6(handleMouseLeave("overlay"), overlayProps.onMouseLeave);
            break;
          case "focus":
            triggerProps.onFocus = makeChain$6(handleFocus, (_child$props5 = child.props) === null || _child$props5 === void 0 ? void 0 : _child$props5.onFocus);
            triggerProps.onBlur = makeChain$6(handleBlur, (_child$props6 = child.props) === null || _child$props6 === void 0 ? void 0 : _child$props6.onBlur);
            overlayOtherProps.onMouseDown = makeChain$6(handleOverlayClick, overlayProps.onMouseDown);
            break;
        }
      });
      safeNodes.push(function() {
        return ReactDOM.findDOMNode(triggerRef.current);
      });
    }
    var target = otarget ? otarget : child ? function() {
      return ReactDOM.findDOMNode(triggerRef.current);
    } : body;
    var getContainer3 = typeof container4 === "string" ? function() {
      return document.getElementById(container4);
    } : typeof container4 !== "function" ? function() {
      return container4;
    } : function() {
      return container4(ReactDOM.findDOMNode(triggerRef.current));
    };
    var overlayContainer = followTrigger ? function() {
      var _findDOMNode;
      return (_findDOMNode = ReactDOM.findDOMNode(triggerRef.current)) === null || _findDOMNode === void 0 ? void 0 : _findDOMNode.parentNode;
    } : getContainer3;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, child && /* @__PURE__ */ React.createElement(RefWrapper, {
      ref: React.useCallback(function(ref2) {
        return triggerRef.current = ref2;
      }, [])
    }, /* @__PURE__ */ React.cloneElement(child, triggerProps)), /* @__PURE__ */ React.createElement(Overlay$3, _extends({}, others, overlayOtherProps, {
      placement,
      container: overlayContainer,
      safeNode: safeNodes,
      visible,
      target,
      onRequestClose: handleRequestClose,
      ref: React.useCallback(makeChain$6(saveRef(overlayRef), saveRef(ref)), [])
    }), overlayChild));
  });
  var Overlay$2 = Overlay$3;
  Overlay$2.Popup = Popup$5;
  Overlay$2.OverlayContext = OverlayContext;
  var Overlay2 = function Overlay22(props) {
    var _classNames;
    if (!React.useState || !React.useRef || !React.useEffect) {
      log.warning("need react version > 16.8.0");
      return null;
    }
    var _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? "next-" : _props$prefix, _props$animation = props.animation, animation2 = _props$animation === void 0 ? { in: "expandInDown", out: "expandOutUp" } : _props$animation, visible = props.visible, hasMask = props.hasMask, align = props.align, _props$points = props.points, points = _props$points === void 0 ? align ? align.split(" ") : void 0 : _props$points, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = _default$3(props, ["prefix", "animation", "visible", "hasMask", "align", "points", "onPosition", "children", "className", "style", "wrapperClassName", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _useState = React.useState(true), isAnimationEnd = _useState[0], markAnimationEnd = _useState[1];
    var overlayRef = React.useRef(null);
    var handleEnter = function handleEnter2() {
      markAnimationEnd(false);
      typeof beforeOpen === "function" && beforeOpen(overlayRef.current);
    };
    var handleEntering = function handleEntering2() {
      typeof onOpen === "function" && onOpen(overlayRef.current);
    };
    var handleEntered = function handleEntered2() {
      typeof afterOpen === "function" && afterOpen(overlayRef.current);
    };
    var handleExit = function handleExit2() {
      typeof beforeClose === "function" && beforeClose(overlayRef.current);
    };
    var handleExiting = function handleExiting2() {
      typeof onClose === "function" && onClose(overlayRef.current);
    };
    var handleExited = function handleExited2() {
      markAnimationEnd(true);
      typeof afterClose === "function" && afterClose(overlayRef.current);
    };
    var childrenNode = React.createElement(
      Animate$1.OverlayAnimate,
      {
        visible,
        animation: animation2,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        onExited: handleExited,
        timeout: 300,
        style
      },
      children ? React.cloneElement(children, {
        className: classnames([prefix + "overlay-inner", className, children && children.props && children.props.className])
      }) : React.createElement("span", null)
    );
    var wraperCls = classnames((_classNames = {}, _classNames[prefix + "overlay-wrapper v2"] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));
    var handlePosition = function handlePosition2(result) {
      _default$8(result, { align: result.config.points });
      typeof onPosition === "function" && onPosition(result);
    };
    var maskRender = function maskRender2(node) {
      return React.createElement(
        Animate$1.OverlayAnimate,
        {
          visible,
          animation: animation2 ? { in: "fadeIn", out: "fadeOut" } : false,
          timeout: 300,
          unmountOnExit: true
        },
        node
      );
    };
    return React.createElement(
      Overlay$2,
      _default$8({}, others, {
        visible,
        isAnimationEnd,
        hasMask,
        wrapperClassName: wraperCls,
        maskClassName: prefix + "overlay-backdrop",
        maskRender,
        points,
        onPosition: handlePosition,
        ref: overlayRef
      }),
      childrenNode
    );
  };
  const Overlay2$1 = Overlay2;
  var _class$12, _temp$M;
  var noop$d = func.noop, makeChain$5 = func.makeChain, bindCtx$8 = func.bindCtx;
  var Popup$4 = (_temp$M = _class$12 = function(_Component) {
    _default$4(Popup4, _Component);
    function Popup4(props) {
      _default$7(this, Popup4);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.state = {
        visible: typeof props.visible === "undefined" ? props.defaultVisible : props.visible
      };
      bindCtx$8(_this2, ["handleTriggerClick", "handleTriggerKeyDown", "handleTriggerMouseEnter", "handleTriggerMouseLeave", "handleTriggerFocus", "handleTriggerBlur", "handleContentMouseEnter", "handleContentMouseLeave", "handleContentMouseDown", "handleRequestClose", "handleMaskMouseEnter", "handleMaskMouseLeave"]);
      return _this2;
    }
    Popup4.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if ("visible" in nextProps) {
        return _default$8({}, prevState, {
          visible: nextProps.visible
        });
      }
      return null;
    };
    Popup4.prototype.componentWillUnmount = function componentWillUnmount() {
      var _this2 = this;
      ["_timer", "_hideTimer", "_showTimer"].forEach(function(time) {
        _this2[time] && clearTimeout(_this2[time]);
      });
    };
    Popup4.prototype.handleVisibleChange = function handleVisibleChange(visible, type2, e2) {
      if (!("visible" in this.props)) {
        this.setState({
          visible
        });
      }
      this.props.onVisibleChange(visible, type2, e2);
    };
    Popup4.prototype.handleTriggerClick = function handleTriggerClick(e2) {
      if (this.state.visible && !this.props.canCloseByTrigger) {
        return;
      }
      this.handleVisibleChange(!this.state.visible, "fromTrigger", e2);
    };
    Popup4.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e2) {
      var triggerClickKeycode = this.props.triggerClickKeycode;
      var keycodes = Array.isArray(triggerClickKeycode) ? triggerClickKeycode : [triggerClickKeycode];
      if (keycodes.includes(e2.keyCode)) {
        e2.preventDefault();
        this.handleTriggerClick(e2);
      }
    };
    Popup4.prototype.handleTriggerMouseEnter = function handleTriggerMouseEnter(e2) {
      var _this3 = this;
      this._mouseNotFirstOnMask = false;
      if (this._hideTimer) {
        clearTimeout(this._hideTimer);
        this._hideTimer = null;
      }
      if (this._showTimer) {
        clearTimeout(this._showTimer);
        this._showTimer = null;
      }
      if (!this.state.visible) {
        this._showTimer = setTimeout(function() {
          _this3.handleVisibleChange(true, "fromTrigger", e2);
        }, this.props.delay);
      }
    };
    Popup4.prototype.handleTriggerMouseLeave = function handleTriggerMouseLeave(e2, type2) {
      var _this4 = this;
      if (this._showTimer) {
        clearTimeout(this._showTimer);
        this._showTimer = null;
      }
      if (this.state.visible) {
        this._hideTimer = setTimeout(function() {
          _this4.handleVisibleChange(false, type2 || "fromTrigger", e2);
        }, this.props.delay);
      }
    };
    Popup4.prototype.handleTriggerFocus = function handleTriggerFocus(e2) {
      this.handleVisibleChange(true, "fromTrigger", e2);
    };
    Popup4.prototype.handleTriggerBlur = function handleTriggerBlur(e2) {
      if (!this._isForwardContent) {
        this.handleVisibleChange(false, "fromTrigger", e2);
      }
      this._isForwardContent = false;
    };
    Popup4.prototype.handleContentMouseDown = function handleContentMouseDown() {
      this._isForwardContent = true;
    };
    Popup4.prototype.handleContentMouseEnter = function handleContentMouseEnter() {
      clearTimeout(this._hideTimer);
    };
    Popup4.prototype.handleContentMouseLeave = function handleContentMouseLeave(e2) {
      this.handleTriggerMouseLeave(e2, "fromContent");
    };
    Popup4.prototype.handleMaskMouseEnter = function handleMaskMouseEnter() {
      if (!this._mouseNotFirstOnMask) {
        clearTimeout(this._hideTimer);
        this._hideTimer = null;
        this._mouseNotFirstOnMask = false;
      }
    };
    Popup4.prototype.handleMaskMouseLeave = function handleMaskMouseLeave() {
      this._mouseNotFirstOnMask = true;
    };
    Popup4.prototype.handleRequestClose = function handleRequestClose(type2, e2) {
      this.handleVisibleChange(false, type2, e2);
    };
    Popup4.prototype.renderTrigger = function renderTrigger() {
      var _this5 = this;
      var _props = this.props, trigger = _props.trigger, disabled = _props.disabled;
      var props = {
        key: "trigger",
        "aria-haspopup": true,
        "aria-expanded": this.state.visible
      };
      if (!this.state.visible) {
        props["aria-describedby"] = void 0;
      }
      if (!disabled) {
        var triggerType = this.props.triggerType;
        var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        var _ref = trigger && trigger.props || {}, onClick3 = _ref.onClick, onKeyDown = _ref.onKeyDown, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onFocus = _ref.onFocus, onBlur = _ref.onBlur;
        triggerTypes.forEach(function(triggerType2) {
          switch (triggerType2) {
            case "click":
              props.onClick = makeChain$5(_this5.handleTriggerClick, onClick3);
              props.onKeyDown = makeChain$5(_this5.handleTriggerKeyDown, onKeyDown);
              break;
            case "hover":
              props.onMouseEnter = makeChain$5(_this5.handleTriggerMouseEnter, onMouseEnter);
              props.onMouseLeave = makeChain$5(_this5.handleTriggerMouseLeave, onMouseLeave);
              break;
            case "focus":
              props.onFocus = makeChain$5(_this5.handleTriggerFocus, onFocus);
              props.onBlur = makeChain$5(_this5.handleTriggerBlur, onBlur);
              break;
          }
        });
      }
      return trigger && React.cloneElement(trigger, props);
    };
    Popup4.prototype.renderContent = function renderContent() {
      var _this6 = this;
      var _props2 = this.props, children = _props2.children, triggerType = _props2.triggerType;
      var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
      var content = React.Children.only(children);
      var _content$props = content.props, onMouseDown = _content$props.onMouseDown, onMouseEnter = _content$props.onMouseEnter, onMouseLeave = _content$props.onMouseLeave;
      var props = {
        key: "portal"
      };
      triggerTypes.forEach(function(triggerType2) {
        switch (triggerType2) {
          case "focus":
            props.onMouseDown = makeChain$5(_this6.handleContentMouseDown, onMouseDown);
            break;
          case "hover":
            props.onMouseEnter = makeChain$5(_this6.handleContentMouseEnter, onMouseEnter);
            props.onMouseLeave = makeChain$5(_this6.handleContentMouseLeave, onMouseLeave);
            break;
        }
      });
      return React.cloneElement(content, props);
    };
    Popup4.prototype.renderPortal = function renderPortal() {
      var _this7 = this;
      var _props3 = this.props, target = _props3.target, safeNode = _props3.safeNode, followTrigger = _props3.followTrigger, triggerType = _props3.triggerType, hasMask = _props3.hasMask, wrapperStyle = _props3.wrapperStyle, others = _default$3(_props3, ["target", "safeNode", "followTrigger", "triggerType", "hasMask", "wrapperStyle"]);
      var container4 = this.props.container;
      var findTriggerNode = function findTriggerNode2() {
        return ReactDOM.findDOMNode(_this7);
      };
      var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
      safeNodes.unshift(findTriggerNode);
      var newWrapperStyle = wrapperStyle || {};
      if (followTrigger) {
        container4 = function container5(trigger) {
          return trigger && trigger.parentNode || trigger;
        };
        newWrapperStyle.position = "relative";
      }
      if (triggerType === "hover" && hasMask) {
        others.onMaskMouseEnter = this.handleMaskMouseEnter;
        others.onMaskMouseLeave = this.handleMaskMouseLeave;
      }
      return React.createElement(
        Overlay1,
        _default$8({}, others, {
          key: "overlay",
          ref: function ref(overlay) {
            return _this7.overlay = overlay;
          },
          visible: this.state.visible,
          target: target || findTriggerNode,
          container: container4,
          safeNode: safeNodes,
          wrapperStyle: newWrapperStyle,
          triggerType,
          hasMask,
          onRequestClose: this.handleRequestClose
        }),
        this.props.children && this.renderContent()
      );
    };
    Popup4.prototype.render = function render2() {
      return [this.renderTrigger(), this.renderPortal()];
    };
    return Popup4;
  }(React.Component), _class$12.propTypes = {
    /**
     * 弹层内容
     */
    children: PropTypes$1.node,
    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger: PropTypes$1.element,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     */
    triggerClickKeycode: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.array]),
    /**
     * 弹层当前是否显示
     */
    visible: PropTypes$1.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: PropTypes$1.bool,
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     * @param {Object} e DOM事件
     */
    onVisibleChange: PropTypes$1.func,
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: PropTypes$1.bool,
    autoFit: PropTypes$1.bool,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: PropTypes$1.number,
    /**
     * trigger 是否可以关闭弹层
     */
    canCloseByTrigger: PropTypes$1.bool,
    /**
     * 弹层定位的参照元素
     * @default target 属性，即触发元素
     */
    target: PropTypes$1.any,
    safeNode: PropTypes$1.any,
    /**
     * 是否跟随trigger滚动
     */
    followTrigger: PropTypes$1.bool,
    container: PropTypes$1.any,
    hasMask: PropTypes$1.bool,
    wrapperStyle: PropTypes$1.object,
    rtl: PropTypes$1.bool,
    /**
     * 开启 v2 版本
     */
    v2: PropTypes$1.bool,
    /**
     * [v2] 快捷位置，包含 'tl' | 't' | 'tr' | 'rt' | 'r' | 'rb' | 'bl' | 'b' | 'br' | 'lt' | 'l' | 'lb'
     */
    placement: PropTypes$1.string,
    /**
     * [v2] 弹层偏离触发元素的像素值
     */
    placementOffset: PropTypes$1.number,
    /**
     * [v2] 浮窗被遮挡时是否自动调整位置
     */
    autoAdjust: PropTypes$1.bool
  }, _class$12.defaultProps = {
    triggerType: "hover",
    triggerClickKeycode: [KEYCODE.SPACE, KEYCODE.ENTER],
    defaultVisible: false,
    onVisibleChange: noop$d,
    disabled: false,
    autoFit: false,
    delay: 200,
    canCloseByTrigger: true,
    followTrigger: false,
    container: function container3() {
      return document.body;
    },
    rtl: false
  }, _temp$M);
  Popup$4.displayName = "Popup";
  const Popup1 = polyfill(Popup$4);
  var Popup$3 = function Popup(props) {
    var _classNames;
    if (!React.useState || !React.useRef || !React.useEffect) {
      log.warning("need react version > 16.8.0");
      return null;
    }
    var _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? "next-" : _props$prefix, _props$animation = props.animation, panimation = _props$animation === void 0 ? { in: "expandInDown", out: "expandOutUp" } : _props$animation, defaultVisible = props.defaultVisible, _props$onVisibleChang = props.onVisibleChange, onVisibleChange = _props$onVisibleChang === void 0 ? function() {
    } : _props$onVisibleChang, trigger = props.trigger, _props$triggerType = props.triggerType, triggerType = _props$triggerType === void 0 ? "hover" : _props$triggerType, overlay = props.overlay, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, triggerClickKeycode = props.triggerClickKeycode, align = props.align, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = _default$3(props, ["prefix", "animation", "defaultVisible", "onVisibleChange", "trigger", "triggerType", "overlay", "onPosition", "children", "className", "style", "wrapperClassName", "triggerClickKeycode", "align", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _useState = React.useState(defaultVisible), visible = _useState[0], setVisible = _useState[1];
    var _useState2 = React.useState(panimation), animation2 = _useState2[0], setAnimation = _useState2[1];
    var _useState3 = React.useState(true), isAnimationEnd = _useState3[0], markAnimationEnd = _useState3[1];
    var overlayRef = React.useRef(null);
    React.useEffect(function() {
      if ("visible" in props) {
        setVisible(props.visible);
      }
    }, [props.visible]);
    React.useEffect(function() {
      if ("animation" in props && animation2 !== panimation) {
        setAnimation(panimation);
      }
    }, [panimation]);
    var handleVisibleChange = function handleVisibleChange2(visible2) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (!("visible" in props)) {
        setVisible(visible2);
      }
      onVisibleChange.apply(void 0, [visible2].concat(args));
    };
    var triggerNode = overlay ? children : trigger;
    var overlayNode = overlay ? overlay : children;
    var handleEnter = function handleEnter2() {
      markAnimationEnd(false);
      typeof beforeOpen === "function" && beforeOpen(overlayRef.current);
    };
    var handleEntering = function handleEntering2() {
      typeof onOpen === "function" && onOpen(overlayRef.current);
    };
    var handleEntered = function handleEntered2() {
      typeof afterOpen === "function" && afterOpen(overlayRef.current);
    };
    var handleExit = function handleExit2() {
      typeof beforeClose === "function" && beforeClose(overlayRef.current);
    };
    var handleExiting = function handleExiting2() {
      typeof onClose === "function" && onClose(overlayRef.current);
    };
    var handleExited = function handleExited2() {
      markAnimationEnd(true);
      typeof afterClose === "function" && afterClose(overlayRef.current);
    };
    overlayNode = React.createElement(
      Animate$1.OverlayAnimate,
      {
        visible,
        animation: animation2,
        timeout: 200,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        onExited: handleExited,
        style
      },
      overlayNode ? React.cloneElement(overlayNode, {
        className: classnames([prefix + "overlay-inner", className, overlayNode && overlayNode.props && overlayNode.props.className])
      }) : React.createElement("span", null)
    );
    var handlePosition = function handlePosition2(result) {
      _default$8(result, { align: result.config.points });
      var placement = result.config.placement;
      if (placement && typeof placement === "string") {
        if (animation2.in === "expandInDown" && animation2.out === "expandOutUp" && placement.match(/t/)) {
          setAnimation({
            in: "expandInUp",
            out: "expandOutDown"
          });
        } else if (animation2.in === "expandInUp" && animation2.out === "expandOutDown" && placement.match(/b/)) {
          setAnimation({
            in: "expandInDown",
            out: "expandOutUp"
          });
        }
      }
      typeof onPosition === "function" && onPosition(result);
    };
    var wraperCls = classnames((_classNames = {}, _classNames[prefix + "overlay-wrapper v2"] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));
    var v1Props = {};
    if (align) {
      v1Props.points = align.split(" ");
    }
    var maskRender = function maskRender2(node) {
      return React.createElement(
        Animate$1.OverlayAnimate,
        {
          visible,
          animation: animation2 ? { in: "fadeIn", out: "fadeOut" } : false,
          timeout: 200,
          unmountOnExit: true
        },
        node
      );
    };
    return React.createElement(
      Overlay$2.Popup,
      _default$8({}, others, v1Props, {
        wrapperClassName: wraperCls,
        overlay: overlayNode,
        visible,
        isAnimationEnd,
        triggerType,
        onVisibleChange: handleVisibleChange,
        onPosition: handlePosition,
        triggerClickKeyCode: triggerClickKeycode,
        maskRender,
        ref: overlayRef
      }),
      triggerNode
    );
  };
  const Popup2 = Popup$3;
  var Overlay = function(_React$Component) {
    _default$4(Overlay3, _React$Component);
    function Overlay3(props) {
      _default$7(this, Overlay3);
      var _this2 = _default$5(this, _React$Component.call(this, props));
      _this2.overlayRef = null;
      _this2.saveRef = _this2.saveRef.bind(_this2);
      return _this2;
    }
    Overlay3.prototype.saveRef = function saveRef2(ref) {
      this.overlayRef = ref;
    };
    Overlay3.prototype.getContent = function getContent() {
      if (this.overlayRef) {
        return this.overlayRef.getContent();
      }
      return null;
    };
    Overlay3.prototype.getContentNode = function getContentNode() {
      if (this.overlayRef) {
        return this.overlayRef.getContentNode();
      }
      return null;
    };
    Overlay3.prototype.render = function render2() {
      var _props = this.props, v2 = _props.v2, others = _default$3(_props, ["v2"]);
      if (v2) {
        if ("needAdjust" in others) {
          log.deprecated("needAdjust", "autoAdjust", "Overlay v2");
          others.autoAdjust = others.needAdjust;
          delete others.needAdjust;
        }
        return React.createElement(Overlay2$1, others);
      } else {
        return React.createElement(Overlay1, _default$8({}, others, { ref: this.saveRef }));
      }
    };
    return Overlay3;
  }(React.Component);
  Overlay.displayName = "Overlay";
  var Popup$2 = function(_React$Component2) {
    _default$4(Popup4, _React$Component2);
    function Popup4(props) {
      _default$7(this, Popup4);
      var _this2 = _default$5(this, _React$Component2.call(this, props));
      _this2.overlay = null;
      _this2.saveRef = _this2.saveRef.bind(_this2);
      return _this2;
    }
    Popup4.prototype.saveRef = function saveRef2(ref) {
      if (ref) {
        this.overlay = ref.overlay;
      }
    };
    Popup4.prototype.render = function render2() {
      var _props2 = this.props, v2 = _props2.v2, others = _default$3(_props2, ["v2"]);
      if (v2) {
        if ("needAdjust" in others) {
          log.deprecated("needAdjust", "needAdjust", "Popup v2");
          others.autoAdjust = others.needAdjust;
          delete others.needAdjust;
        }
        if ("shouldUpdatePosition" in others) {
          delete others.shouldUpdatePosition;
        }
        return React.createElement(Popup2, others);
      } else {
        return React.createElement(Popup1, _default$8({}, others, { ref: this.saveRef }));
      }
    };
    return Popup4;
  }(React.Component);
  Popup$2.displayName = "Popup";
  Overlay.Gateway = Gateway$1;
  Overlay.Position = Position;
  Overlay.Popup = ConfigProvider$1.config(Popup$2, {
    exportNames: ["overlay"]
  });
  const Overlay$1 = ConfigProvider$1.config(Overlay, {
    exportNames: ["getContent", "getContentNode"]
  });
  var _class$11, _temp$L;
  var Icon$1 = (_temp$L = _class$11 = function(_Component) {
    _default$4(Icon2, _Component);
    function Icon2() {
      _default$7(this, Icon2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Icon2.prototype.render = function render2() {
      var _cx;
      var _props = this.props, prefix = _props.prefix, type2 = _props.type, size2 = _props.size, className = _props.className, rtl = _props.rtl, style = _props.style, children = _props.children;
      var others = obj.pickOthers(_default$8({}, Icon2.propTypes), this.props);
      var classes = classnames((_cx = {}, _cx[prefix + "icon"] = true, _cx[prefix + "icon-" + type2] = !!type2, _cx["" + prefix + size2] = !!size2 && typeof size2 === "string", _cx[className] = !!className, _cx));
      if (rtl && ["arrow-left", "arrow-right", "arrow-double-left", "arrow-double-right", "switch", "sorting", "descending", "ascending"].indexOf(type2) !== -1) {
        others.dir = "rtl";
      }
      var sizeStyle = typeof size2 === "number" ? {
        width: size2,
        height: size2,
        lineHeight: size2 + "px",
        fontSize: size2
      } : {};
      return React.createElement(
        "i",
        _default$8({}, others, { style: _default$8({}, sizeStyle, style), className: classes }),
        children
      );
    };
    return Icon2;
  }(React.Component), _class$11.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 指定显示哪种图标
     */
    type: PropTypes$1.string,
    children: PropTypes$1.node,
    /**
     * 指定图标大小
     * <br/>**可选值**<br/> xxs, xs, small, medium, large, xl, xxl, xxxl, inherit
     */
    size: PropTypes$1.oneOfType([PropTypes$1.oneOf(["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl", "inherit"]), PropTypes$1.number]),
    className: PropTypes$1.string,
    style: PropTypes$1.object
  }), _class$11.defaultProps = {
    prefix: "next-",
    size: "medium"
  }, _class$11._typeMark = "icon", _temp$L);
  Icon$1.displayName = "Icon";
  const Icon$2 = Icon$1;
  var customCache = /* @__PURE__ */ new Set();
  var ConfigIcon = ConfigProvider$1.config(Icon$2);
  function createFromIconfontCN() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var scriptUrl = options.scriptUrl, _options$extraCommonP = options.extraCommonProps, extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
    var hasExist = customCache.has(scriptUrl);
    if (document.querySelector('script[data-namespace="' + scriptUrl + '"]')) {
      hasExist = true;
    }
    if (typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function" && typeof scriptUrl === "string" && scriptUrl.length && !hasExist) {
      var script = document.createElement("script");
      script.setAttribute("src", scriptUrl);
      script.setAttribute("data-namespace", scriptUrl);
      customCache.add(scriptUrl);
      document.body.appendChild(script);
    }
    var Iconfont = function Iconfont2(props) {
      var _cx;
      var type2 = props.type, size2 = props.size, children = props.children, className = props.className, _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? "next-" : _props$prefix, others = _default$3(props, ["type", "size", "children", "className", "prefix"]);
      var content = null;
      if (props.type) {
        content = React.createElement("use", { xlinkHref: "#" + type2 });
      }
      if (children) {
        content = children;
      }
      var classes = classnames((_cx = {}, _cx[prefix + "icon-remote"] = true, _cx), className);
      return (
        // FIXME: 这里理论上优先级是 props 中的 prefix 优先级更高，不过之前的行为一直是取上层 ConfigProvider 中的 prefix，
        // 先兼容之前的表现，will be fixed in 2.x
        // https://github.com/alibaba-fusion/next/issues/3906
        React.createElement(
          ConfigIcon,
          { size: size2 },
          React.createElement(
            "svg",
            _default$8({ className: classes, focusable: false }, others, extraCommonProps),
            content
          )
        )
      );
    };
    Iconfont.displayName = "Iconfont";
    return ConfigProvider$1.config(Iconfont);
  }
  Icon$2.createFromIconfontCN = createFromIconfontCN;
  const Icon = ConfigProvider$1.config(Icon$2);
  var _class$10, _temp$K;
  var noop$c = func.noop, makeChain$4 = func.makeChain, bindCtx$7 = func.bindCtx;
  var Popup$1 = Overlay$1.Popup;
  var Dropdown$1 = (_temp$K = _class$10 = function(_Component) {
    _default$4(Dropdown2, _Component);
    function Dropdown2(props) {
      _default$7(this, Dropdown2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.state = {
        visible: "visible" in props ? props.visible : props.defaultVisible || false,
        autoFocus: "autoFocus" in props ? props.autoFocus : false
      };
      bindCtx$7(_this2, ["onTriggerKeyDown", "onMenuClick", "onVisibleChange"]);
      return _this2;
    }
    Dropdown2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      var state = {};
      if ("visible" in nextProps) {
        state.visible = nextProps.visible;
      }
      return state;
    };
    Dropdown2.prototype.getVisible = function getVisible() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return "visible" in props ? props.visible : this.state.visible;
    };
    Dropdown2.prototype.onMenuClick = function onMenuClick() {
      var autoClose = this.props.autoClose;
      if (!("visible" in this.props) && autoClose) {
        this.setState({
          visible: false
        });
      }
      this.onVisibleChange(false, "fromContent");
    };
    Dropdown2.prototype.onVisibleChange = function onVisibleChange(visible, from) {
      this.setState({ visible });
      this.props.onVisibleChange(visible, from);
    };
    Dropdown2.prototype.onTriggerKeyDown = function onTriggerKeyDown() {
      var autoFocus = true;
      if ("autoFocus" in this.props) {
        autoFocus = this.props.autoFocus;
      }
      this.setState({
        autoFocus
      });
    };
    Dropdown2.prototype.render = function render2() {
      var _props = this.props, trigger = _props.trigger, rtl = _props.rtl, autoClose = _props.autoClose;
      var child = React.Children.only(this.props.children);
      var content = child;
      if (typeof child.type === "function" && child.type.isNextMenu) {
        content = React.cloneElement(child, {
          onItemClick: makeChain$4(this.onMenuClick, child.props.onItemClick)
        });
      } else if (autoClose) {
        content = React.cloneElement(child, {
          onClick: makeChain$4(this.onMenuClick, child.props.onClick)
        });
      }
      var newTrigger = React.cloneElement(trigger, {
        onKeyDown: makeChain$4(this.onTriggerKeyDown, trigger.props.onKeyDown)
      });
      return React.createElement(
        Popup$1,
        _default$8({}, this.props, {
          rtl,
          autoFocus: this.state.autoFocus,
          trigger: newTrigger,
          visible: this.getVisible(),
          onVisibleChange: this.onVisibleChange,
          canCloseByOutSideClick: true
        }),
        content
      );
    };
    return Dropdown2;
  }(React.Component), _class$10.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    /**
     * 弹层内容
     */
    children: PropTypes$1.node,
    /**
     * 弹层当前是否显示
     */
    visible: PropTypes$1.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: PropTypes$1.bool,
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: PropTypes$1.func,
    /**
     * 触发弹层显示或者隐藏的元素
     */
    trigger: PropTypes$1.node,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
     */
    triggerType: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: PropTypes$1.bool,
    /**
     * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
     */
    align: PropTypes$1.string,
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     */
    offset: PropTypes$1.array,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: PropTypes$1.number,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: PropTypes$1.bool,
    /**
     * 是否显示遮罩
     */
    hasMask: PropTypes$1.bool,
    /**
     * 开启后，children 不管是不是Menu，点击后都默认关掉弹层（2.x默认设置为true）
     * @version 1.23
     */
    autoClose: PropTypes$1.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: PropTypes$1.bool,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.bool])
  }, _class$10.defaultProps = {
    prefix: "next-",
    pure: false,
    defaultVisible: false,
    autoClose: false,
    onVisibleChange: noop$c,
    triggerType: "hover",
    disabled: false,
    align: "tl bl",
    offset: [0, 0],
    delay: 200,
    hasMask: false,
    cache: false,
    onPosition: noop$c
  }, _temp$K);
  Dropdown$1.displayName = "Dropdown";
  const Dropdown = ConfigProvider$1.config(Dropdown$1, {
    transform: (
      /* istanbul ignore next */
      function transform(props, deprecated2) {
        if ("triggerType" in props) {
          var triggerType = Array.isArray(props.triggerType) ? [].concat(props.triggerType) : [props.triggerType];
          if (triggerType.indexOf("focus") > -1) {
            deprecated2("triggerType[focus]", "triggerType[hover, click]", "Balloon");
          }
        }
        return props;
      }
    )
  });
  var _class$$, _temp$J;
  var bindCtx$6 = func.bindCtx;
  var pickOthers$8 = obj.pickOthers;
  var Item$1 = (_temp$J = _class$$ = function(_Component) {
    _default$4(Item2, _Component);
    function Item2(props) {
      _default$7(this, Item2);
      var _this2 = _default$5(this, _Component.call(this, props));
      bindCtx$6(_this2, ["handleClick", "handleKeyDown"]);
      return _this2;
    }
    Item2.prototype.componentDidMount = function componentDidMount() {
      this.itemNode = ReactDOM.findDOMNode(this);
      var _props = this.props, parentMode = _props.parentMode, root = _props.root, menu = _props.menu;
      if (menu) {
        this.menuNode = ReactDOM.findDOMNode(menu);
      } else if (parentMode === "popup") {
        this.menuNode = this.itemNode.parentNode;
      } else {
        this.menuNode = ReactDOM.findDOMNode(root);
        var _root$props = root.props, prefix = _root$props.prefix, header = _root$props.header, footer = _root$props.footer;
        if (header || footer) {
          this.menuNode = this.menuNode.querySelector("." + prefix + "menu-content");
        }
      }
      this.setFocus();
    };
    Item2.prototype.componentDidUpdate = function componentDidUpdate() {
      var root = this.props.root;
      if (root.props.focusable && root.state.focusedKey !== this.lastFocusedKey) {
        this.setFocus();
      }
    };
    Item2.prototype.focusable = function focusable() {
      var _props2 = this.props, root = _props2.root, type2 = _props2.type, disabled = _props2.disabled;
      var focusable2 = root.props.focusable;
      return focusable2 && (type2 === "submenu" || !disabled);
    };
    Item2.prototype.getFocused = function getFocused() {
      var _props3 = this.props, _key = _props3._key, root = _props3.root;
      var focusedKey = root.state.focusedKey;
      return focusedKey === _key;
    };
    Item2.prototype.setFocus = function setFocus() {
      var focused = this.getFocused();
      this.lastFocusedKey = this.props.root.state.focusedKey;
      if (focused) {
        if (this.focusable()) {
          this.itemNode.focus({ preventScroll: true });
        }
        if (this.menuNode && this.menuNode.scrollHeight > this.menuNode.clientHeight) {
          var scrollBottom = this.menuNode.clientHeight + this.menuNode.scrollTop;
          var itemBottom = this.itemNode.offsetTop + this.itemNode.offsetHeight;
          if (itemBottom > scrollBottom) {
            this.menuNode.scrollTop = itemBottom - this.menuNode.clientHeight;
          } else if (this.itemNode.offsetTop < this.menuNode.scrollTop) {
            this.menuNode.scrollTop = this.itemNode.offsetTop;
          }
        }
      }
    };
    Item2.prototype.handleClick = function handleClick(e2) {
      e2.stopPropagation();
      var _props4 = this.props, _key = _props4._key, root = _props4.root, disabled = _props4.disabled;
      if (!disabled) {
        root.handleItemClick(_key, this, e2);
        this.props.onClick && this.props.onClick(e2);
      } else {
        e2.preventDefault();
      }
    };
    Item2.prototype.handleKeyDown = function handleKeyDown(e2) {
      var _props5 = this.props, _key = _props5._key, root = _props5.root, type2 = _props5.type;
      if (this.focusable()) {
        root.handleItemKeyDown(_key, type2, this, e2);
        switch (e2.keyCode) {
          case KEYCODE.ENTER: {
            if (!(type2 === "submenu")) {
              this.handleClick(e2);
            }
            break;
          }
        }
      }
      this.props.onKeyDown && this.props.onKeyDown(e2);
    };
    Item2.prototype.getTitle = function getTitle(children) {
      if (typeof children === "string") {
        return children;
      }
      return;
    };
    Item2.prototype.render = function render2() {
      var _cx;
      var _props6 = this.props, inlineLevel = _props6.inlineLevel, root = _props6.root, replaceClassName2 = _props6.replaceClassName, groupIndent = _props6.groupIndent, component = _props6.component, disabled = _props6.disabled, className = _props6.className, children = _props6.children, needIndent = _props6.needIndent, parentMode = _props6.parentMode, _key = _props6._key;
      var others = pickOthers$8(Object.keys(Item2.propTypes), this.props);
      var _root$props2 = root.props, prefix = _root$props2.prefix, focusable = _root$props2.focusable, inlineIndent = _root$props2.inlineIndent, itemClassName = _root$props2.itemClassName, rtl = _root$props2.rtl;
      var focused = this.getFocused();
      var newClassName = replaceClassName2 ? className : classnames((_cx = {}, _cx[prefix + "menu-item"] = true, _cx[prefix + "disabled"] = disabled, _cx[prefix + "focused"] = !focusable && focused, _cx[itemClassName] = !!itemClassName, _cx[className] = !!className, _cx));
      if (disabled) {
        others["aria-disabled"] = true;
        others["aria-hidden"] = true;
      }
      others.tabIndex = root.state.tabbableKey === _key ? "0" : "-1";
      if (parentMode === "inline" && inlineLevel > 1 && inlineIndent > 0 && needIndent) {
        var _extends2;
        var paddingProp = rtl ? "paddingRight" : "paddingLeft";
        others.style = _default$8({}, others.style || {}, (_extends2 = {}, _extends2[paddingProp] = inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent + "px", _extends2));
      }
      var TagName = component;
      var role = "menuitem";
      if ("selectMode" in root.props) {
        role = "option";
      }
      return React.createElement(
        TagName,
        _default$8({
          role,
          title: this.getTitle(children)
        }, others, {
          className: newClassName,
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown
        }),
        React.createElement(
          "div",
          { className: prefix + "menu-item-inner" },
          children
        )
      );
    };
    return Item2;
  }(React.Component), _class$$.propTypes = {
    _key: PropTypes$1.string,
    level: PropTypes$1.number,
    inlineLevel: PropTypes$1.number,
    groupIndent: PropTypes$1.number,
    root: PropTypes$1.object,
    menu: PropTypes$1.any,
    parent: PropTypes$1.object,
    parentMode: PropTypes$1.oneOf(["inline", "popup"]),
    type: PropTypes$1.oneOf(["submenu", "item"]),
    component: PropTypes$1.string,
    disabled: PropTypes$1.bool,
    className: PropTypes$1.string,
    onClick: PropTypes$1.func,
    onKeyDown: PropTypes$1.func,
    needIndent: PropTypes$1.bool,
    replaceClassName: PropTypes$1.bool
  }, _class$$.defaultProps = {
    component: "li",
    groupIndent: 0,
    replaceClassName: false,
    needIndent: true
  }, _temp$J);
  Item$1.displayName = "Item";
  var _class$_, _temp$I;
  var bindCtx$5 = func.bindCtx;
  var pickOthers$7 = obj.pickOthers;
  var SelectableItem = (_temp$I = _class$_ = function(_Component) {
    _default$4(SelectableItem2, _Component);
    function SelectableItem2(props) {
      _default$7(this, SelectableItem2);
      var _this2 = _default$5(this, _Component.call(this, props));
      bindCtx$5(_this2, ["handleKeyDown", "handleClick"]);
      return _this2;
    }
    SelectableItem2.prototype.getSelected = function getSelected() {
      var _props = this.props, _key = _props._key, root = _props.root, selected = _props.selected;
      var selectMode = root.props.selectMode;
      var selectedKeys = root.state.selectedKeys;
      return selected || !!selectMode && selectedKeys.indexOf(_key) > -1;
    };
    SelectableItem2.prototype.handleSelect = function handleSelect(e2) {
      var _props2 = this.props, _key = _props2._key, root = _props2.root, onSelect = _props2.onSelect;
      if (onSelect) {
        onSelect(!this.getSelected(), this, e2);
      } else {
        root.handleSelect(_key, !this.getSelected(), this);
      }
    };
    SelectableItem2.prototype.handleKeyDown = function handleKeyDown(e2) {
      if (e2.keyCode === KEYCODE.SPACE && !this.props.disabled) {
        this.handleSelect(e2);
      }
      this.props.onKeyDown && this.props.onKeyDown(e2);
    };
    SelectableItem2.prototype.handleClick = function handleClick(e2) {
      this.handleSelect(e2);
      this.props.onClick && this.props.onClick(e2);
    };
    SelectableItem2.prototype.renderSelectedIcon = function renderSelectedIcon(selected) {
      var _cx;
      var _props3 = this.props, root = _props3.root, inlineIndent = _props3.inlineIndent, needIndent = _props3.needIndent, hasSelectedIcon = _props3.hasSelectedIcon, isSelectIconRight = _props3.isSelectIconRight, type2 = _props3.type;
      var _root$props = root.props, prefix = _root$props.prefix, rootSelectedIcon = _root$props.hasSelectedIcon, rootSelectIconRight = _root$props.isSelectIconRight, icons = _root$props.icons;
      var iconsSelect = icons.select;
      if (!React.isValidElement(icons.select) && icons.select) {
        iconsSelect = React.createElement(
          "span",
          null,
          icons.select
        );
      }
      var cls = classnames((_cx = {}, _cx[prefix + "menu-icon-selected"] = true, _cx[prefix + "menu-symbol-icon-selected"] = !iconsSelect, _cx[prefix + "menu-icon-right"] = ("isSelectIconRight" in this.props ? isSelectIconRight : rootSelectIconRight) && type2 !== "submenu", _cx));
      return ("hasSelectedIcon" in this.props ? hasSelectedIcon : rootSelectedIcon) && selected ? React.cloneElement(iconsSelect || React.createElement(Icon, { type: "select" }), {
        style: needIndent && inlineIndent > 0 ? { left: inlineIndent + "px" } : null,
        className: cls
      }) : null;
    };
    SelectableItem2.prototype.render = function render2() {
      var _cx2;
      var _props4 = this.props, _key = _props4._key, root = _props4.root, className = _props4.className, disabled = _props4.disabled, helper = _props4.helper, children = _props4.children, needIndent = _props4.needIndent;
      var prefix = root.props.prefix;
      var others = pickOthers$7(Object.keys(SelectableItem2.propTypes), this.props);
      var selected = this.getSelected();
      var newProps = _default$8({
        _key,
        root,
        disabled,
        type: "item",
        className: classnames((_cx2 = {}, _cx2[prefix + "selected"] = selected, _cx2[className] = !!className, _cx2)),
        onKeyDown: this.handleKeyDown,
        onClick: !disabled ? this.handleClick : this.props.onClick,
        needIndent
      }, others);
      if (!("title" in newProps) && typeof children === "string") {
        newProps.title = children;
      }
      var textProps = {};
      if ("selectMode" in root.props) {
        textProps["aria-selected"] = selected;
      }
      return React.createElement(
        Item$1,
        newProps,
        this.renderSelectedIcon(selected),
        React.createElement(
          "span",
          _default$8({ className: prefix + "menu-item-text" }, textProps),
          children
        ),
        helper ? React.createElement(
          "div",
          { className: prefix + "menu-item-helper" },
          helper
        ) : null
      );
    };
    return SelectableItem2;
  }(React.Component), _class$_.menuChildType = "item", _class$_.propTypes = {
    _key: PropTypes$1.string,
    root: PropTypes$1.object,
    selected: PropTypes$1.bool,
    onSelect: PropTypes$1.func,
    inlineIndent: PropTypes$1.number,
    /**
     * 是否禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 帮助文本
     */
    helper: PropTypes$1.node,
    /**
     * 菜单项标签内容
     */
    children: PropTypes$1.node,
    className: PropTypes$1.string,
    onKeyDown: PropTypes$1.func,
    onClick: PropTypes$1.func,
    needIndent: PropTypes$1.bool,
    hasSelectedIcon: PropTypes$1.bool,
    isSelectIconRight: PropTypes$1.bool,
    icons: PropTypes$1.object
  }, _class$_.defaultProps = {
    disabled: false,
    needIndent: true,
    icons: {}
  }, _temp$I);
  SelectableItem.displayName = "SelectableItem";
  var getWidth = function getWidth2(elem) {
    var width = elem && typeof elem.getBoundingClientRect === "function" && elem.getBoundingClientRect().width;
    if (width) {
      width = +width.toFixed(6);
    }
    return width || 0;
  };
  var normalizeToArray = function normalizeToArray2(items) {
    if (items) {
      if (Array.isArray(items)) {
        return items;
      }
      return [items];
    }
    return [];
  };
  var isSibling = function isSibling2(currentPos, targetPos) {
    var currentNums = currentPos.split("-").slice(0, -1);
    var targetNums = targetPos.split("-").slice(0, -1);
    return currentNums.length === targetNums.length && currentNums.every(function(num, index2) {
      return num === targetNums[index2];
    });
  };
  var isAncestor = function isAncestor2(currentPos, targetPos) {
    var currentNums = currentPos.split("-");
    var targetNums = targetPos.split("-");
    return currentNums.length > targetNums.length && targetNums.every(function(num, index2) {
      return num === currentNums[index2];
    });
  };
  var isAvailablePos = function isAvailablePos2(refPos, targetPos, _p2n) {
    var _p2n$targetPos = _p2n[targetPos], type2 = _p2n$targetPos.type, disabled = _p2n$targetPos.disabled;
    return isSibling(refPos, targetPos) && (type2 === "item" && !disabled || type2 === "submenu");
  };
  var getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey2(parentPos, _p2n) {
    var pos = Object.keys(_p2n).find(function(p2) {
      return isAvailablePos(parentPos + "-0", p2, _p2n);
    });
    return pos ? _p2n[pos].key : null;
  };
  var getChildSelected = function getChildSelected2(_ref) {
    var selectMode = _ref.selectMode, selectedKeys = _ref.selectedKeys, _k2n = _ref._k2n, _key = _ref._key;
    if (!_k2n) {
      return false;
    }
    var _keyPos = (_k2n[_key] && _k2n[_key].pos) + "-";
    return !!selectMode && selectedKeys.some(function(key) {
      return _k2n[key] && _k2n[key].pos.indexOf(_keyPos) === 0;
    });
  };
  var _class$Z, _temp$H;
  var bindCtx$4 = func.bindCtx;
  var setStyle = dom.setStyle;
  var Popup3 = Overlay$1.Popup;
  var PopupItem = (_temp$H = _class$Z = function(_Component) {
    _default$4(PopupItem2, _Component);
    function PopupItem2(props) {
      _default$7(this, PopupItem2);
      var _this2 = _default$5(this, _Component.call(this, props));
      bindCtx$4(_this2, ["handleOpen", "handlePopupOpen", "handlePopupClose", "getPopup"]);
      return _this2;
    }
    PopupItem2.prototype.getPopup = function getPopup(ref) {
      this.popup = ref;
    };
    PopupItem2.prototype.getOpen = function getOpen() {
      var _props = this.props, _key = _props._key, root = _props.root;
      var openKeys = root.state.openKeys;
      return openKeys.indexOf(_key) > -1;
    };
    PopupItem2.prototype.getPopupProps = function getPopupProps() {
      var popupProps = this.props.root.props.popupProps;
      if (typeof popupProps === "function") {
        popupProps = popupProps(this.props);
      }
      return popupProps;
    };
    PopupItem2.prototype.handleOpen = function handleOpen(open2, triggerType, e2) {
      var _props2 = this.props, _key = _props2._key, root = _props2.root;
      root.handleOpen(_key, open2, triggerType, e2);
      var popupProps = this.popupProps;
      popupProps.onVisibleChange && popupProps.onVisibleChange(open2, triggerType, e2);
    };
    PopupItem2.prototype.handlePopupOpen = function handlePopupOpen() {
      var _props3 = this.props, root = _props3.root, level = _props3.level, align = _props3.align, autoWidth = _props3.autoWidth;
      var _root$props = root.props, rootPopupAutoWidth = _root$props.popupAutoWidth, rootPopupAlign = _root$props.popupAlign, direction = _root$props.direction;
      var popupAlign = align || rootPopupAlign;
      var popupAutoWidth = "autoWidth" in this.props ? autoWidth : rootPopupAutoWidth;
      try {
        var itemNode = ReactDOM.findDOMNode(this);
        var menuNode = itemNode.parentNode;
        this.popupNode = this.popup.getInstance().overlay.getInstance().getContentNode();
        root.popupNodes.push(this.popupNode);
        if (popupAutoWidth) {
          var targetNode = direction === "hoz" && level === 1 ? itemNode : menuNode;
          if (targetNode.offsetWidth > this.popupNode.offsetWidth) {
            setStyle(this.popupNode, "width", targetNode.offsetWidth + "px");
          }
        }
        if (popupAlign === "outside" && !(direction === "hoz" && level === 1)) {
          setStyle(this.popupNode, "height", menuNode.offsetHeight + "px");
          this.popupNode.firstElementChild && setStyle(this.popupNode.firstElementChild, "overflow-y", "auto");
        }
        var popupProps = this.popupProps;
        popupProps.onOpen && popupProps.onOpen();
      } catch (error) {
        return null;
      }
    };
    PopupItem2.prototype.handlePopupClose = function handlePopupClose() {
      var root = this.props.root;
      var popupNodes = root.popupNodes;
      var index2 = popupNodes.indexOf(this.popupNode);
      index2 > -1 && popupNodes.splice(index2, 1);
      var popupProps = this.popupProps;
      popupProps.onClose && popupProps.onClose();
    };
    PopupItem2.prototype.renderItem = function renderItem(selectable, children, others) {
      var _cx;
      var _props4 = this.props, _key = _props4._key, root = _props4.root, level = _props4.level, inlineLevel = _props4.inlineLevel, label = _props4.label, className = _props4.className;
      var _root$props2 = root.props, prefix = _root$props2.prefix, selectMode = _root$props2.selectMode;
      var NewItem = selectable ? SelectableItem : Item$1;
      var open2 = this.getOpen();
      var _root$state = root.state, selectedKeys = _root$state.selectedKeys, _k2n = _root$state._k2n;
      var isChildSelected = getChildSelected({
        _key,
        _k2n,
        selectMode,
        selectedKeys
      });
      var itemProps = {
        "aria-haspopup": true,
        "aria-expanded": open2,
        _key,
        root,
        level,
        inlineLevel,
        type: "submenu"
      };
      itemProps.className = classnames((_cx = {}, _cx[prefix + "opened"] = open2, _cx[prefix + "child-selected"] = isChildSelected, _cx[className] = !!className, _cx));
      return React.createElement(
        NewItem,
        _default$8({}, itemProps, others),
        React.createElement(
          "span",
          { className: prefix + "menu-item-text" },
          label
        ),
        children
      );
    };
    PopupItem2.prototype.renderPopup = function renderPopup(trigger, triggerType, positionProps, children) {
      var _this2 = this;
      var _props5 = this.props, root = _props5.root, level = _props5.level, selectable = _props5.selectable, propCls = _props5.className;
      var direction = root.props.direction;
      this.popupProps = this.getPopupProps();
      var open2 = this.getOpen();
      if (direction === "hoz" && level === 1 && selectable) {
        positionProps.target = function() {
          return ReactDOM.findDOMNode(_this2);
        };
      }
      var posCls = positionProps.className, otherPostion = _default$3(positionProps, ["className"]);
      var className = classnames(propCls, posCls);
      return React.createElement(
        Popup3,
        _default$8({
          ref: this.getPopup
        }, otherPostion, this.popupProps, {
          canCloseByEsc: false,
          trigger,
          triggerType,
          visible: open2,
          pinFollowBaseElementWhenFixed: true,
          onVisibleChange: this.handleOpen,
          onOpen: this.handlePopupOpen,
          onClose: this.handlePopupClose
        }),
        React.createElement(
          "div",
          { className },
          children
        )
      );
    };
    PopupItem2.prototype.render = function render2() {
      var _this3 = this;
      var _props6 = this.props, root = _props6.root, level = _props6.level, hasSubMenu = _props6.hasSubMenu, selectableFromProps = _props6.selectable, children = _props6.children, triggerType = _props6.triggerType, align = _props6.align, noIcon = _props6.noIcon;
      _props6.rtl;
      var others = obj.pickOthers(Object.keys(PopupItem2.propTypes), this.props);
      var _root$props3 = root.props, prefix = _root$props3.prefix, selectMode = _root$props3.selectMode, direction = _root$props3.direction, rootPopupAlign = _root$props3.popupAlign, rootTriggerType = _root$props3.triggerType;
      var popupAlign = align || rootPopupAlign;
      var newTriggerType = triggerType || (hasSubMenu ? rootTriggerType : "hover");
      var newChildren = Array.isArray(children) ? children[0] : children;
      var selectable = selectMode && selectableFromProps;
      var triggerIsIcon = selectable && newTriggerType === "click";
      var open2 = this.getOpen();
      var positionProps = {};
      var arrowProps = void 0;
      if (direction === "hoz" && level === 1) {
        var _cx2;
        positionProps.align = "tl bl";
        positionProps.className = prefix + "menu-spacing-tb";
        arrowProps = {
          type: "arrow-down",
          className: classnames((_cx2 = {}, _cx2[prefix + "menu-hoz-icon-arrow"] = true, _cx2[prefix + "open"] = open2, _cx2))
        };
      } else {
        if (popupAlign === "outside") {
          positionProps.target = function() {
            return ReactDOM.findDOMNode(root);
          };
          positionProps.align = "tl tr";
          positionProps.className = prefix + "menu-spacing-lr " + prefix + "menu-outside";
        } else {
          if (triggerIsIcon) {
            positionProps.target = function() {
              return ReactDOM.findDOMNode(_this3);
            };
          }
          positionProps.align = "tl tr";
          positionProps.className = prefix + "menu-spacing-lr";
        }
        arrowProps = {
          type: "arrow-right",
          className: prefix + "menu-icon-arrow " + prefix + "menu-symbol-popupfold"
        };
      }
      var arrow = React.createElement(Icon, arrowProps);
      var trigger = triggerIsIcon ? arrow : this.renderItem(selectable, noIcon ? null : arrow, others);
      var popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
      return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
    };
    return PopupItem2;
  }(React.Component), _class$Z.menuChildType = "submenu", _class$Z.propTypes = {
    _key: PropTypes$1.string,
    root: PropTypes$1.object,
    level: PropTypes$1.number,
    hasSubMenu: PropTypes$1.bool,
    noIcon: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    selectable: PropTypes$1.bool,
    /**
     * 标签内容
     */
    label: PropTypes$1.node,
    /**
     * 自定义弹层内容
     */
    children: PropTypes$1.node,
    className: PropTypes$1.string,
    /**
     * 子菜单打开的触发行为
     */
    triggerType: PropTypes$1.oneOf(["click", "hover"]),
    align: PropTypes$1.oneOf(["outside", "follow"]),
    autoWidth: PropTypes$1.bool
  }, _class$Z.defaultProps = {
    selectable: false,
    noIcon: false
  }, _temp$H);
  PopupItem.displayName = "PopupItem";
  var _class$Y, _temp$G;
  var Expand = Animate$1.Expand;
  var bindCtx$3 = func.bindCtx;
  var SubMenu = (_temp$G = _class$Y = function(_Component) {
    _default$4(SubMenu2, _Component);
    function SubMenu2(props) {
      _default$7(this, SubMenu2);
      var _this2 = _default$5(this, _Component.call(this, props));
      bindCtx$3(_this2, ["handleMouseEnter", "handleMouseLeave", "handleClick", "handleOpen", "afterLeave"]);
      return _this2;
    }
    SubMenu2.prototype.componentDidMount = function componentDidMount() {
      this.itemNode = ReactDOM.findDOMNode(this);
    };
    SubMenu2.prototype.afterLeave = function afterLeave() {
      var _props = this.props, focused = _props.focused, root = _props.root;
      var focusable = root.props.focusable;
      if (focusable && focused) {
        this.itemNode.focus();
      }
    };
    SubMenu2.prototype.getOpen = function getOpen() {
      var _props2 = this.props, _key = _props2._key, root = _props2.root;
      var openKeys = root.state.openKeys;
      return openKeys.indexOf(_key) > -1;
    };
    SubMenu2.prototype.handleMouseEnter = function handleMouseEnter(e2) {
      this.handleOpen(true);
      this.props.onMouseEnter && this.props.onMouseEnter(e2);
    };
    SubMenu2.prototype.handleMouseLeave = function handleMouseLeave(e2) {
      this.handleOpen(false);
      this.props.onMouseLeave && this.props.onMouseLeave(e2);
    };
    SubMenu2.prototype.handleClick = function handleClick(e2) {
      var _props3 = this.props, root = _props3.root, selectable = _props3.selectable;
      var selectMode = root.props.selectMode;
      if (selectMode && selectable) {
        e2.stopPropagation();
      }
      var open2 = this.getOpen();
      this.handleOpen(!open2);
    };
    SubMenu2.prototype.handleOpen = function handleOpen(open2, triggerType, e2) {
      var _props4 = this.props, _key = _props4._key, root = _props4.root;
      root.handleOpen(_key, open2, triggerType, e2);
    };
    SubMenu2.prototype.passParentToChildren = function passParentToChildren(children) {
      var _this2 = this;
      var _props5 = this.props, mode = _props5.mode, root = _props5.root;
      return React.Children.map(children, function(child) {
        if (typeof child !== "function" && (typeof child === "undefined" ? "undefined" : _default$6(child)) !== "object") {
          return child;
        }
        return React.cloneElement(child, {
          parent: _this2,
          parentMode: mode || root.props.mode
        });
      });
    };
    SubMenu2.prototype.renderInline = function renderInline() {
      var _cx, _cx2, _cx3, _cx4;
      var _props6 = this.props, _key = _props6._key, level = _props6.level, inlineLevel = _props6.inlineLevel, root = _props6.root, className = _props6.className, selectableFromProps = _props6.selectable, label = _props6.label, children = _props6.children, noIcon = _props6.noIcon, subMenuContentClassName = _props6.subMenuContentClassName, propsTriggerType = _props6.triggerType, parentMode = _props6.parentMode;
      var _root$props = root.props, prefix = _root$props.prefix, selectMode = _root$props.selectMode, rootTriggerType = _root$props.triggerType, inlineArrowDirection = _root$props.inlineArrowDirection, expandAnimation = _root$props.expandAnimation, rtl = _root$props.rtl;
      var triggerType = propsTriggerType || rootTriggerType;
      var open2 = this.getOpen();
      var _root$state = root.state, selectedKeys = _root$state.selectedKeys, _k2n = _root$state._k2n;
      var isChildSelected = getChildSelected({
        _key,
        _k2n,
        selectMode,
        selectedKeys
      });
      var others = obj.pickOthers(Object.keys(SubMenu2.propTypes), this.props);
      var liProps = {
        className: classnames((_cx = {}, _cx[prefix + "menu-sub-menu-wrapper"] = true, _cx[className] = !!className, _cx))
      };
      var itemProps = {
        "aria-expanded": open2,
        _key,
        level,
        role: "listitem",
        inlineLevel,
        root,
        type: "submenu",
        component: "div",
        parentMode,
        className: classnames((_cx2 = {}, _cx2[prefix + "opened"] = open2, _cx2[prefix + "child-selected"] = isChildSelected, _cx2))
      };
      if (typeof label === "string") {
        itemProps.title = label;
      }
      var arrorProps = {
        type: inlineArrowDirection === "right" ? "arrow-right" : "arrow-down",
        className: classnames((_cx3 = {}, _cx3[prefix + "menu-icon-arrow"] = true, _cx3[prefix + "menu-icon-arrow-down"] = inlineArrowDirection === "down", _cx3[prefix + "menu-icon-arrow-right"] = inlineArrowDirection === "right", _cx3[prefix + "open"] = open2, _cx3))
      };
      var selectable = !!selectMode && selectableFromProps;
      var NewItem = selectable ? SelectableItem : Item$1;
      if (triggerType === "hover") {
        liProps.onMouseEnter = this.handleMouseEnter;
        liProps.onMouseLeave = this.handleMouseLeave;
      } else if (selectable) {
        arrorProps.onClick = this.handleClick;
      } else {
        itemProps.onClick = this.handleClick;
      }
      var newSubMenuContentClassName = classnames((_cx4 = {}, _cx4[prefix + "menu-sub-menu"] = true, _cx4[subMenuContentClassName] = !!subMenuContentClassName, _cx4));
      var roleMenu = "menu", roleItem = "menuitem";
      if ("selectMode" in root.props) {
        roleMenu = "listbox";
        roleItem = "option";
      }
      var subMenu = open2 ? React.createElement(
        "ul",
        { role: roleMenu, dir: rtl ? "rtl" : void 0, className: newSubMenuContentClassName },
        this.passParentToChildren(children)
      ) : null;
      return React.createElement(
        "li",
        _default$8({ role: roleItem }, others, liProps),
        React.createElement(
          NewItem,
          itemProps,
          React.createElement(
            "span",
            { className: prefix + "menu-item-text" },
            label
          ),
          noIcon ? null : React.createElement(Icon, arrorProps)
        ),
        expandAnimation ? React.createElement(
          Expand,
          { animationAppear: false, afterLeave: this.afterLeave },
          subMenu
        ) : subMenu
      );
    };
    SubMenu2.prototype.renderPopup = function renderPopup() {
      var _cx5;
      var _props7 = this.props, children = _props7.children, subMenuContentClassName = _props7.subMenuContentClassName, noIcon = _props7.noIcon, others = _default$3(_props7, ["children", "subMenuContentClassName", "noIcon"]);
      var root = this.props.root;
      var _root$props2 = root.props, prefix = _root$props2.prefix, popupClassName = _root$props2.popupClassName, popupStyle = _root$props2.popupStyle, rtl = _root$props2.rtl;
      var newClassName = classnames((_cx5 = {}, _cx5[prefix + "menu"] = true, _cx5[prefix + "ver"] = true, _cx5[popupClassName] = !!popupClassName, _cx5[subMenuContentClassName] = !!subMenuContentClassName, _cx5));
      others.rtl = rtl;
      return React.createElement(
        PopupItem,
        _default$8({}, others, { noIcon, hasSubMenu: true }),
        React.createElement(
          "ul",
          { role: "menu", dir: rtl ? "rtl" : void 0, className: newClassName, style: popupStyle },
          this.passParentToChildren(children)
        )
      );
    };
    SubMenu2.prototype.render = function render2() {
      var _props8 = this.props, mode = _props8.mode, root = _props8.root;
      var newMode = mode || root.props.mode;
      return newMode === "popup" ? this.renderPopup() : this.renderInline();
    };
    return SubMenu2;
  }(React.Component), _class$Y.menuChildType = "submenu", _class$Y.propTypes = {
    _key: PropTypes$1.string,
    root: PropTypes$1.object,
    level: PropTypes$1.number,
    inlineLevel: PropTypes$1.number,
    groupIndent: PropTypes$1.number,
    /**
     * 标签内容
     */
    label: PropTypes$1.node,
    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     */
    selectable: PropTypes$1.bool,
    /**
     * 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性
     * @default Menu 的 mode 属性值
     */
    mode: PropTypes$1.oneOf(["inline", "popup"]),
    /**
     * 是否需要提示当前项可展开的 icon，默认是有的
     */
    noIcon: PropTypes$1.bool,
    /**
     * 菜单项或下一级子菜单
     */
    children: PropTypes$1.node,
    onMouseEnter: PropTypes$1.func,
    onMouseLeave: PropTypes$1.func,
    subMenuContentClassName: PropTypes$1.string,
    triggerType: PropTypes$1.oneOf(["click", "hover"]),
    align: PropTypes$1.oneOf(["outside", "follow"]),
    parentMode: PropTypes$1.oneOf(["inline", "popup"]),
    parent: PropTypes$1.any
  }, _class$Y.defaultProps = {
    groupIndent: 0,
    noIcon: false,
    selectable: false
  }, _temp$G);
  SubMenu.displayName = "SubMenu";
  var _class$X, _temp$F;
  var bindCtx$2 = func.bindCtx;
  var pickOthers$6 = obj.pickOthers, isNil$1 = obj.isNil;
  var noop$b = function noop5() {
  };
  var MENUITEM_OVERFLOWED_CLASSNAME = "menuitem-overflowed";
  var getIndicatorsItem = function getIndicatorsItem2(items, isPlaceholder) {
    var _cx;
    var prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    var renderMore = arguments[3];
    var moreCls = classnames((_cx = {}, _cx[prefix + "menu-more"] = true, _cx));
    var style = {};
    if (isPlaceholder) {
      style.visibility = "hidden";
      style.display = "inline-block";
    } else if (items && items.length === 0) {
      style.display = "none";
      style.visibility = "unset";
    }
    if (renderMore && typeof renderMore === "function") {
      var moreNode = renderMore(items);
      var renderMoreCls = classnames(moreCls, moreNode.props && moreNode.props.className);
      return React.isValidElement(moreNode) ? React.cloneElement(moreNode, {
        style,
        className: renderMoreCls
      }) : moreNode;
    }
    return React.createElement(
      SubMenu,
      { label: "···", noIcon: true, className: moreCls, style },
      items
    );
  };
  var addIndicators = function addIndicators2(_ref) {
    var children = _ref.children, lastVisibleIndex = _ref.lastVisibleIndex, prefix = _ref.prefix, renderMore = _ref.renderMore;
    var arr = [];
    React.Children.forEach(children, function(child, index2) {
      if (!child) {
        return;
      }
      var overflowedItems = [];
      if (index2 > lastVisibleIndex) {
        child = React.cloneElement(child, {
          // 别折叠不显示的 item，不占用真实的用户传入的 key
          key: "more-" + index2,
          style: { display: "none" },
          className: (child && child.className || "") + " " + MENUITEM_OVERFLOWED_CLASSNAME
        });
      }
      if (index2 === lastVisibleIndex + 1) {
        overflowedItems = children.slice(lastVisibleIndex + 1).map(function(c2, i) {
          return React.cloneElement(c2, {
            key: c2.key || "more-" + index2 + "-" + i
          });
        });
        arr.push(getIndicatorsItem(overflowedItems, false, prefix, renderMore));
      }
      arr.push(child);
    });
    arr.push(getIndicatorsItem([], true, prefix, renderMore));
    return arr;
  };
  var getNewChildren$1 = function getNewChildren(_ref2) {
    var children = _ref2.children, root = _ref2.root, mode = _ref2.mode, lastVisibleIndex = _ref2.lastVisibleIndex, hozInLine = _ref2.hozInLine, prefix = _ref2.prefix, renderMore = _ref2.renderMore;
    var k2n = {};
    var p2n = {};
    var arr = hozInLine ? addIndicators({
      children,
      lastVisibleIndex,
      prefix,
      renderMore
    }) : children;
    var loop = function loop2(children2, posPrefix) {
      var indexWrapper = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { index: 0 };
      var inlineLevel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      var keyArray = [];
      return React.Children.map(children2, function(child) {
        if (child && (typeof child.type === "function" || // `React.forwardRef(render)` returns a forwarding
        // object that includes `render` method, and the specific
        // `child.type` will be an object instead of a class or
        // function.
        _default$6(child.type) === "object") && "menuChildType" in child.type) {
          var newChild = void 0;
          var pos = void 0;
          var props = { root };
          if (["item", "submenu", "group"].indexOf(child.type.menuChildType) > -1) {
            pos = posPrefix + "-" + indexWrapper.index++;
            var key = typeof child.key === "string" ? child.key : pos;
            if (keyArray.indexOf(key) > -1) {
              return;
            }
            keyArray.push(key);
            var level = pos.split("-").length - 1;
            k2n[key] = p2n[pos] = {
              key,
              pos,
              mode: child.props.mode,
              type: child.type.menuChildType,
              disabled: child.props.disabled,
              label: child.props.label || child.props.children
            };
            props.level = level;
            props.inlineLevel = inlineLevel;
            props._key = key;
            props.groupIndent = child.type.menuChildType === "group" ? 1 : 0;
          }
          var childLevel = (child.props.mode || mode) === "popup" ? 1 : inlineLevel + 1;
          switch (child.type.menuChildType) {
            case "submenu":
              newChild = React.cloneElement(child, props, loop2(child.props.children, pos, void 0, childLevel));
              break;
            case "group":
              newChild = React.cloneElement(child, props, loop2(child.props.children, posPrefix, indexWrapper, props.level));
              break;
            case "item":
            case "divider":
              newChild = React.cloneElement(child, props);
              break;
            default:
              newChild = child;
              break;
          }
          return newChild;
        }
        return child;
      });
    };
    var newChildren = loop(arr, "0");
    return {
      newChildren,
      _k2n: k2n,
      _p2n: p2n
    };
  };
  var Menu$2 = (_temp$F = _class$X = function(_Component) {
    _default$4(Menu2, _Component);
    function Menu2(props) {
      _default$7(this, Menu2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.getUpdateChildren = function() {
        var _this$state = _this2.state, root = _this$state.root, lastVisibleIndex = _this$state.lastVisibleIndex;
        return getNewChildren$1(_default$8({
          root,
          lastVisibleIndex
        }, _this2.props));
      };
      _this2.menuContentRef = function(ref) {
        _this2.menuContent = ref;
      };
      _this2.menuHeaderRef = function(ref) {
        _this2.menuHeader = ref;
      };
      _this2.menuFooterRef = function(ref) {
        _this2.menuFooter = ref;
      };
      var _this$props = _this2.props;
      _this$props.prefix;
      _this$props.children;
      var selectedKeys = _this$props.selectedKeys, defaultSelectedKeys = _this$props.defaultSelectedKeys, focusedKey = _this$props.focusedKey, focusable = _this$props.focusable, autoFocus = _this$props.autoFocus;
      _this$props.hozInLine;
      _this$props.renderMore;
      _this2.state = {
        lastVisibleIndex: void 0
      };
      var _getNewChildren = getNewChildren$1(_default$8({
        root: _this2
      }, _this2.props)), newChildren = _getNewChildren.newChildren, _k2n = _getNewChildren._k2n, _p2n = _getNewChildren._p2n;
      var tabbableKey = focusable ? getFirstAvaliablelChildKey("0", _p2n) : void 0;
      _this2.state = {
        root: _this2,
        lastVisibleIndex: void 0,
        newChildren,
        _k2n,
        _p2n,
        tabbableKey,
        openKeys: _this2.getInitOpenKeys(props, _k2n, _p2n),
        selectedKeys: normalizeToArray(selectedKeys || defaultSelectedKeys),
        focusedKey: !isNil$1(_this2.props.focusedKey) ? focusedKey : focusable && autoFocus ? tabbableKey : null
      };
      bindCtx$2(_this2, ["handleOpen", "handleSelect", "handleItemClick", "handleItemKeyDown", "onBlur", "adjustChildrenWidth"]);
      _this2.popupNodes = [];
      return _this2;
    }
    Menu2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};
      if ("openKeys" in nextProps) {
        state.openKeys = normalizeToArray(nextProps.openKeys);
      } else if ("mode" in nextProps && nextProps.mode === "popup" && prevState.lastMode === "inline") {
        state.openKeys = [];
      }
      if ("selectedKeys" in nextProps) {
        state.selectedKeys = normalizeToArray(nextProps.selectedKeys);
      }
      if ("focusedKey" in nextProps) {
        state.focusedKey = nextProps.focusedKey;
      }
      state.lastMode = nextProps.mode;
      var _getNewChildren2 = getNewChildren$1(_default$8({
        root: prevState.root,
        lastVisibleIndex: prevState.lastVisibleIndex
      }, nextProps)), newChildren = _getNewChildren2.newChildren, _k2n = _getNewChildren2._k2n, _p2n = _getNewChildren2._p2n;
      state.newChildren = newChildren;
      state._k2n = _k2n;
      state._p2n = _p2n;
      if (nextProps.focusable) {
        if (prevState.tabbableKey in _k2n) {
          if (prevState.focusedKey) {
            state.tabbableKey = prevState.focusedKey;
          }
        } else {
          state.tabbableKey = getFirstAvaliablelChildKey("0", _p2n);
        }
      }
      return state;
    };
    Menu2.prototype.componentDidMount = function componentDidMount() {
      this.menuNode = ReactDOM.findDOMNode(this);
      this.adjustChildrenWidth();
      if (this.props.hozInLine) {
        events.on(window, "resize", this.adjustChildrenWidth);
      }
    };
    Menu2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (prevState.lastVisibleIndex !== this.state.lastVisibleIndex) {
        this.adjustChildrenWidth();
      }
    };
    Menu2.prototype.componentWillUnmount = function componentWillUnmount() {
      events.off(window, "resize", this.adjustChildrenWidth);
    };
    Menu2.prototype.adjustChildrenWidth = function adjustChildrenWidth() {
      var _props = this.props, direction = _props.direction, prefix = _props.prefix, header = _props.header, footer = _props.footer, hozInLine = _props.hozInLine;
      if (direction !== "hoz" || !hozInLine) {
        return;
      }
      if (!this.menuNode && !this.menuContent) {
        return;
      }
      var children = [], spaceWidth = void 0;
      if (header || footer) {
        children = this.menuContent.children;
        spaceWidth = getWidth(this.menuNode) - getWidth(this.menuHeader) - getWidth(this.menuFooter);
      } else {
        children = this.menuNode.children;
        spaceWidth = getWidth(this.menuNode);
      }
      if (children.length < 2) {
        return;
      }
      var currentSumWidth = 0, lastVisibleIndex = -1;
      var moreNode = "";
      var menuItemNodes = [].slice.call(children).filter(function(node) {
        if (node.className.split(" ").indexOf(prefix + "menu-more") < 0) {
          return true;
        } else {
          moreNode = node;
        }
        return false;
      });
      var overflowedItems = menuItemNodes.filter(function(c2) {
        return c2.className.split(" ").indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });
      overflowedItems.forEach(function(c2) {
        dom.setStyle(c2, "display", "inline-block");
      });
      dom.setStyle(moreNode, "display", "inline-block");
      var moreWidth = getWidth(moreNode);
      this.menuItemSizes = menuItemNodes.map(function(c2) {
        return getWidth(c2);
      });
      var totalLen = this.menuItemSizes.length;
      overflowedItems.forEach(function(c2) {
        dom.setStyle(c2, "display", "none");
      });
      this.menuItemSizes.forEach(function(liWidth, i) {
        currentSumWidth += liWidth;
        if (i >= totalLen - 1 && currentSumWidth <= spaceWidth || currentSumWidth + moreWidth <= spaceWidth) {
          lastVisibleIndex++;
        }
      });
      if (lastVisibleIndex >= totalLen - 1) {
        dom.setStyle(moreNode, "display", "none");
      }
      this.setState(_default$8({
        lastVisibleIndex
      }, this.getUpdateChildren()));
    };
    Menu2.prototype.onBlur = function onBlur(e2) {
      this.setState({
        focusedKey: void 0
      });
      this.props.onBlur && this.props.onBlur(e2);
    };
    Menu2.prototype.getInitOpenKeys = function getInitOpenKeys(props, _k2n, _p2n) {
      var initOpenKeys = void 0;
      var openKeys = props.openKeys, defaultOpenKeys = props.defaultOpenKeys, defaultOpenAll = props.defaultOpenAll, mode = props.mode, openMode = props.openMode;
      if (openKeys) {
        initOpenKeys = openKeys;
      } else if (defaultOpenAll && mode === "inline" && openMode === "multiple") {
        initOpenKeys = Object.keys(_k2n).filter(function(key) {
          return _k2n[key].type === "submenu";
        });
      } else {
        initOpenKeys = defaultOpenKeys;
      }
      return normalizeToArray(initOpenKeys);
    };
    Menu2.prototype.handleOpen = function handleOpen(key, open2, triggerType, e2) {
      var newOpenKeys = void 0;
      var _props2 = this.props, mode = _props2.mode, openMode = _props2.openMode;
      var _state = this.state, openKeys = _state.openKeys, _k2n = _state._k2n;
      var index2 = openKeys.indexOf(key);
      if (open2 && index2 === -1) {
        if (mode === "inline") {
          if (openMode === "single") {
            newOpenKeys = openKeys.filter(function(k2) {
              return _k2n[k2] && !isSibling(_k2n[key].pos, _k2n[k2].pos);
            });
            newOpenKeys.push(key);
          } else {
            newOpenKeys = openKeys.concat(key);
          }
        } else {
          newOpenKeys = openKeys.filter(function(k2) {
            return _k2n[k2] && isAncestor(_k2n[key].pos, _k2n[k2].pos);
          });
          newOpenKeys.push(key);
        }
      } else if (!open2 && index2 > -1) {
        if (mode === "inline") {
          newOpenKeys = [].concat(openKeys.slice(0, index2), openKeys.slice(index2 + 1));
        } else if (triggerType === "docClick") {
          if (!this.popupNodes.concat(this.menuNode).some(function(node) {
            return node.contains(e2.target);
          })) {
            newOpenKeys = [];
          }
        } else {
          newOpenKeys = openKeys.filter(function(k2) {
            return k2 !== key && _k2n[k2] && !isAncestor(_k2n[k2].pos, _k2n[key].pos);
          });
        }
      }
      if (newOpenKeys) {
        if (isNil$1(this.props.openKeys)) {
          this.setState(_default$8({
            openKeys: newOpenKeys
          }, this.getUpdateChildren()));
        }
        this.props.onOpen(newOpenKeys, {
          key,
          open: open2
        });
      }
    };
    Menu2.prototype.getPath = function getPath(key, _k2n, _p2n) {
      var keyPath = [];
      var labelPath = [];
      var pos = _k2n[key].pos;
      var nums = pos.split("-");
      for (var i = 1; i < nums.length - 1; i++) {
        var parentNums = nums.slice(0, i + 1);
        var parentPos = parentNums.join("-");
        var parent = _p2n[parentPos];
        keyPath.push(parent.key);
        labelPath.push(parent.label);
      }
      return {
        keyPath,
        labelPath
      };
    };
    Menu2.prototype.handleSelect = function handleSelect(key, select, menuItem) {
      var _state2 = this.state, _k2n = _state2._k2n, _p2n = _state2._p2n;
      var pos = _k2n[key].pos;
      var level = pos.split("-").length - 1;
      if (this.props.shallowSelect && level > 1) {
        return;
      }
      var newSelectedKeys = void 0;
      var selectMode = this.props.selectMode;
      var selectedKeys = this.state.selectedKeys;
      var index2 = selectedKeys.indexOf(key);
      if (select && index2 === -1) {
        if (selectMode === "single") {
          newSelectedKeys = [key];
        } else if (selectMode === "multiple") {
          newSelectedKeys = selectedKeys.concat(key);
        }
      } else if (!select && index2 > -1 && selectMode === "multiple") {
        newSelectedKeys = [].concat(selectedKeys.slice(0, index2), selectedKeys.slice(index2 + 1));
      }
      if (newSelectedKeys) {
        if (isNil$1(this.props.selectedKeys)) {
          this.setState({
            selectedKeys: newSelectedKeys
          });
        }
        this.props.onSelect(newSelectedKeys, menuItem, _default$8({
          key,
          select,
          label: _k2n[key].label
        }, this.getPath(key, _k2n, _p2n)));
      }
    };
    Menu2.prototype.handleItemClick = function handleItemClick(key, item, e2) {
      var _k2n = this.state._k2n;
      if (this.props.focusable) {
        if (isNil$1(this.props.focusedKey)) {
          this.setState({
            focusedKey: key
          });
        }
        this.props.onItemFocus(key, item, e2);
      }
      if (item.props.type === "item") {
        if (item.props.parentMode === "popup" && this.state.openKeys.length) {
          if (isNil$1(this.props.openKeys)) {
            this.setState({
              openKeys: []
            });
          }
          this.props.onOpen([], {
            key: this.state.openKeys.sort(function(prevKey, nextKey) {
              return _k2n[nextKey].pos.split("-").length - _k2n[prevKey].pos.split("-").length;
            })[0],
            open: false
          });
        }
        this.props.onItemClick(key, item, e2);
      }
    };
    Menu2.prototype.getAvailableKey = function getAvailableKey(pos, prev) {
      var _p2n = this.state._p2n;
      var ps = Object.keys(_p2n).filter(function(p2) {
        return isAvailablePos(pos, p2, _p2n);
      });
      if (ps.length > 1) {
        var index2 = ps.indexOf(pos);
        var targetIndex = void 0;
        if (prev) {
          targetIndex = index2 === 0 ? ps.length - 1 : index2 - 1;
        } else {
          targetIndex = index2 === ps.length - 1 ? 0 : index2 + 1;
        }
        return _p2n[ps[targetIndex]].key;
      }
      return null;
    };
    Menu2.prototype.getParentKey = function getParentKey(pos) {
      return this.state._p2n[pos.slice(0, pos.length - 2)].key;
    };
    Menu2.prototype.handleItemKeyDown = function handleItemKeyDown(key, type2, item, e2) {
      if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.RIGHT, KEYCODE.LEFT, KEYCODE.ENTER, KEYCODE.ESC, KEYCODE.SPACE].indexOf(e2.keyCode) > -1) {
        e2.preventDefault();
        e2.stopPropagation();
      }
      var focusedKey = this.state.focusedKey;
      var _state3 = this.state, _p2n = _state3._p2n, _k2n = _state3._k2n;
      var direction = this.props.direction;
      var pos = _k2n[key].pos;
      var level = pos.split("-").length - 1;
      switch (e2.keyCode) {
        case KEYCODE.UP: {
          var avaliableKey = this.getAvailableKey(pos, true);
          if (avaliableKey) {
            focusedKey = avaliableKey;
          }
          break;
        }
        case KEYCODE.DOWN: {
          var _avaliableKey = void 0;
          if (direction === "hoz" && level === 1 && type2 === "submenu") {
            this.handleOpen(key, true);
            _avaliableKey = getFirstAvaliablelChildKey(pos, _p2n);
          } else {
            _avaliableKey = this.getAvailableKey(pos, false);
          }
          if (_avaliableKey) {
            focusedKey = _avaliableKey;
          }
          break;
        }
        case KEYCODE.RIGHT: {
          var _avaliableKey2 = void 0;
          if (direction === "hoz" && level === 1) {
            _avaliableKey2 = this.getAvailableKey(pos, false);
          } else if (type2 === "submenu") {
            this.handleOpen(key, true);
            _avaliableKey2 = getFirstAvaliablelChildKey(pos, _p2n);
          }
          if (_avaliableKey2) {
            focusedKey = _avaliableKey2;
          }
          break;
        }
        case KEYCODE.ENTER: {
          if (type2 === "submenu") {
            this.handleOpen(key, true);
            var _avaliableKey3 = getFirstAvaliablelChildKey(pos, _p2n);
            if (_avaliableKey3) {
              focusedKey = _avaliableKey3;
            }
          }
          break;
        }
        case KEYCODE.LEFT: {
          if (direction === "hoz" && level === 1) {
            var _avaliableKey4 = this.getAvailableKey(pos, true);
            if (_avaliableKey4) {
              focusedKey = _avaliableKey4;
            }
          } else if (level > 1) {
            var parentKey = this.getParentKey(pos);
            this.handleOpen(parentKey, false);
            focusedKey = parentKey;
          }
          break;
        }
        case KEYCODE.ESC:
          if (level > 1) {
            var _parentKey = this.getParentKey(pos);
            this.handleOpen(_parentKey, false);
            focusedKey = _parentKey;
          }
          break;
        case KEYCODE.TAB:
          focusedKey = null;
          break;
      }
      if (focusedKey !== this.state.focusedKey) {
        if (isNil$1(this.props.focusedKey)) {
          this.setState({
            focusedKey
          });
        }
        this.props.onItemKeyDown(focusedKey, item, e2);
        this.props.onItemFocus(focusedKey, e2);
      }
    };
    Menu2.prototype.render = function render2() {
      var _cx2, _cx3;
      var _props3 = this.props, prefix = _props3.prefix, className = _props3.className, direction = _props3.direction, hozAlign = _props3.hozAlign, header = _props3.header, footer = _props3.footer, footerWrapperClassName = _props3.footerWrapperClassName, embeddable = _props3.embeddable, selectMode = _props3.selectMode, hozInLine = _props3.hozInLine, rtl = _props3.rtl, flatenContent = _props3.flatenContent;
      var newChildren = this.state.newChildren;
      var others = pickOthers$6(Object.keys(Menu2.propTypes), this.props);
      var newClassName = classnames((_cx2 = {}, _cx2[prefix + "menu"] = true, _cx2[prefix + "ver"] = direction === "ver", _cx2[prefix + "hoz"] = direction === "hoz", _cx2[prefix + "menu-embeddable"] = embeddable, _cx2[prefix + "menu-nowrap"] = hozInLine, _cx2[prefix + "menu-selectable-" + selectMode] = selectMode, _cx2[className] = !!className, _cx2));
      var role = direction === "hoz" ? "menubar" : "menu";
      var ariaMultiselectable = void 0;
      if ("selectMode" in this.props) {
        role = "listbox";
        ariaMultiselectable = !!(selectMode === "multiple");
      }
      var headerElement = header ? React.createElement(
        "li",
        { className: prefix + "menu-header", ref: this.menuHeaderRef },
        header
      ) : null;
      var itemsElement = !flatenContent && (header || footer) ? React.createElement(
        "ul",
        { className: prefix + "menu-content", ref: this.menuContentRef },
        newChildren
      ) : newChildren;
      var footerElement = footer ? React.createElement(
        "li",
        {
          className: classnames((_cx3 = {}, _cx3[prefix + "menu-footer"] = true, _cx3[footerWrapperClassName] = !!footerWrapperClassName, _cx3)),
          ref: this.menuFooterRef
        },
        footer
      ) : null;
      var shouldWrapItemsAndFooter = hozAlign === "right" && !!header;
      if (rtl) {
        others.dir = "rtl";
      }
      return React.createElement(
        "ul",
        _default$8({
          role,
          onBlur: this.onBlur,
          className: newClassName,
          onKeyDown: this.handleEnter,
          "aria-multiselectable": ariaMultiselectable
        }, others),
        headerElement,
        shouldWrapItemsAndFooter ? React.createElement(
          "div",
          { className: prefix + "menu-hoz-right" },
          itemsElement,
          footerElement
        ) : null,
        !shouldWrapItemsAndFooter ? itemsElement : null,
        !shouldWrapItemsAndFooter ? footerElement : null
      );
    };
    return Menu2;
  }(React.Component), _class$X.isNextMenu = true, _class$X.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    /**
     * 菜单项和子菜单
     */
    children: PropTypes$1.node,
    /**
     * 点击菜单项触发的回调函数
     * @param {String} key 点击的菜单项的 key 值
     * @param {Object} item 点击的菜单项对象
     * @param {Object} event 点击的事件对象
     */
    onItemClick: PropTypes$1.func,
    /**
     * 当前打开的子菜单的 key 值
     */
    openKeys: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 初始打开的子菜单的 key 值
     */
    defaultOpenKeys: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys
     */
    defaultOpenAll: PropTypes$1.bool,
    /**
     * 打开或关闭子菜单触发的回调函数
     * @param {Array} key 打开的所有子菜单的 key 值
     * @param {Object} extra 额外参数
     * @param {String} extra.key 当前操作子菜单的 key 值
     * @param {Boolean} extra.open 是否是打开
     */
    onOpen: PropTypes$1.func,
    /**
     * 子菜单打开的模式
     */
    mode: PropTypes$1.oneOf(["inline", "popup"]),
    /**
     * 子菜单打开的触发行为
     */
    triggerType: PropTypes$1.oneOf(["click", "hover"]),
    /**
     * 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效
     */
    openMode: PropTypes$1.oneOf(["single", "multiple"]),
    /**
     * 内连子菜单缩进距离
     */
    inlineIndent: PropTypes$1.number,
    inlineArrowDirection: PropTypes$1.oneOf(["down", "right"]),
    /**
     * 是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理
     */
    popupAutoWidth: PropTypes$1.bool,
    /**
     * 弹层的对齐方式
     */
    popupAlign: PropTypes$1.oneOf(["follow", "outside"]),
    /**
     * 弹层自定义 props
     */
    popupProps: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.func]),
    /**
     * 弹出子菜单自定义 className
     */
    popupClassName: PropTypes$1.string,
    /**
     * 弹出子菜单自定义 style
     */
    popupStyle: PropTypes$1.object,
    /**
     * 当前选中菜单项的 key 值
     */
    selectedKeys: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 初始选中菜单项的 key 值
     */
    defaultSelectedKeys: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 选中或取消选中菜单项触发的回调函数
     * @param {Array} selectedKeys 选中的所有菜单项的值
     * @param {Object} item 选中或取消选中的菜单项
     * @param {Object} extra 额外参数
     * @param {Boolean} extra.select 是否是选中
     * @param {Array} extra.key 菜单项的 key
     * @param {Object} extra.label 菜单项的文本
     * @param {Array} extra.keyPath 菜单项 key 的路径
     */
    onSelect: PropTypes$1.func,
    /**
     * 选中模式，单选还是多选，默认无值，不可选
     */
    selectMode: PropTypes$1.oneOf(["single", "multiple"]),
    /**
     * 是否只能选择第一层菜单项（不能选择子菜单中的菜单项）
     */
    shallowSelect: PropTypes$1.bool,
    /**
     * 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分
     */
    hasSelectedIcon: PropTypes$1.bool,
    labelToggleChecked: PropTypes$1.bool,
    /**
     * 是否将选中图标居右，仅当 hasSelectedIcon 为true 时生效。
     * 注意：SubMenu 上的选中图标一直居左，不受此API控制
     */
    isSelectIconRight: PropTypes$1.bool,
    /**
     * 菜单第一层展示方向
     */
    direction: PropTypes$1.oneOf(["ver", "hoz"]),
    /**
     * 横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
     */
    hozAlign: PropTypes$1.oneOf(["left", "right"]),
    /**
     * 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示， 仅在 direction='hoz' mode='popup' 时生效
     */
    hozInLine: PropTypes$1.bool,
    renderMore: PropTypes$1.func,
    /**
     * 自定义菜单头部
     */
    header: PropTypes$1.node,
    /**
     * 自定义菜单尾部
     */
    footer: PropTypes$1.node,
    /**
     * 自定义菜单尾部容器的 className
     */
    footerWrapperClassName: PropTypes$1.string,
    /**
     * 是否自动获得焦点
     */
    autoFocus: PropTypes$1.bool,
    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     */
    focusedKey: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    focusable: PropTypes$1.bool,
    onItemFocus: PropTypes$1.func,
    onBlur: PropTypes$1.func,
    /**
     * 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度
     * @version 1.18
     */
    embeddable: PropTypes$1.bool,
    onItemKeyDown: PropTypes$1.func,
    expandAnimation: PropTypes$1.bool,
    itemClassName: PropTypes$1.string,
    /**
     * 可配置的icons，包括 select 等
     */
    icons: PropTypes$1.object,
    // content 是否为单层模式，目前主要在有 header 或 footer 的时候有意义
    flatenContent: PropTypes$1.bool
  }), _class$X.defaultProps = {
    prefix: "next-",
    pure: false,
    defaultOpenKeys: [],
    defaultOpenAll: false,
    onOpen: noop$b,
    mode: "inline",
    triggerType: "click",
    openMode: "multiple",
    inlineIndent: 20,
    inlineArrowDirection: "down",
    popupAutoWidth: false,
    popupAlign: "follow",
    popupProps: {},
    defaultSelectedKeys: [],
    onSelect: noop$b,
    shallowSelect: false,
    hasSelectedIcon: true,
    isSelectIconRight: false,
    labelToggleChecked: true,
    direction: "ver",
    hozAlign: "left",
    hozInLine: false,
    autoFocus: false,
    focusable: true,
    embeddable: false,
    onItemFocus: noop$b,
    onItemKeyDown: noop$b,
    onItemClick: noop$b,
    expandAnimation: true,
    icons: {}
  }, _temp$F);
  Menu$2.displayName = "Menu";
  const Menu$3 = polyfill(Menu$2);
  var $export = _export;
  $export($export.S + $export.F * !_descriptors, "Object", { defineProperty: _objectDp.f });
  var $Object = _coreExports.Object;
  var defineProperty$2 = function defineProperty3(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };
  var defineProperty$1 = { "default": defineProperty$2, __esModule: true };
  var _defineProperty = defineProperty$1;
  var _defineProperty2$1 = _interopRequireDefault$1(_defineProperty);
  function _interopRequireDefault$1(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var _default$1 = function() {
    function defineProperties3(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor2 = props[i];
        descriptor2.enumerable = descriptor2.enumerable || false;
        descriptor2.configurable = true;
        if ("value" in descriptor2)
          descriptor2.writable = true;
        (0, _defineProperty2$1.default)(target, descriptor2.key, descriptor2);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties3(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties3(Constructor, staticProps);
      return Constructor;
    };
  }();
  var makeChain$3 = func.makeChain;
  var UIState = function(_Component) {
    _default$4(UIState2, _Component);
    function UIState2(props) {
      _default$7(this, UIState2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.state = {};
      ["_onUIFocus", "_onUIBlur"].forEach(function(item) {
        _this2[item] = _this2[item].bind(_this2);
      });
      return _this2;
    }
    UIState2.prototype.getStateElement = function getStateElement(base) {
      var _props = this.props, onFocus = _props.onFocus, onBlur = _props.onBlur;
      return React.cloneElement(base, {
        onFocus: makeChain$3(this._onUIFocus, onFocus),
        onBlur: makeChain$3(this._onUIBlur, onBlur)
      });
    };
    UIState2.prototype.getStateClassName = function getStateClassName() {
      var focused = this.state.focused;
      return classnames({
        focused
      });
    };
    UIState2.prototype.resetUIState = function resetUIState() {
      this.setState({
        focused: false
      });
    };
    UIState2.prototype._onUIFocus = function _onUIFocus() {
      this.setState({
        focused: true
      });
    };
    UIState2.prototype._onUIBlur = function _onUIBlur() {
      this.setState({
        focused: false
      });
    };
    return UIState2;
  }(React.Component);
  UIState.displayName = "UIState";
  const UIState$1 = UIState;
  function withContext$2(Checkbox2) {
    var _class2, _temp3;
    return _temp3 = _class2 = function(_React$Component) {
      _default$4(WrappedComp, _React$Component);
      function WrappedComp() {
        _default$7(this, WrappedComp);
        return _default$5(this, _React$Component.apply(this, arguments));
      }
      WrappedComp.prototype.render = function render2() {
        return React.createElement(Checkbox2, _default$8({}, this.props, { context: this.context }));
      };
      return WrappedComp;
    }(React.Component), _class2.displayName = "Checkbox", _class2.contextTypes = {
      onChange: PropTypes$1.func,
      __group__: PropTypes$1.bool,
      selectedValue: PropTypes$1.array,
      disabled: PropTypes$1.bool,
      prefix: PropTypes$1.string
    }, _temp3;
  }
  var _class$W, _temp$E;
  var noop$a = func.noop;
  function isChecked(selectedValue, value) {
    return selectedValue.indexOf(value) > -1;
  }
  var Checkbox = (_temp$E = _class$W = function(_UIState) {
    _default$4(Checkbox2, _UIState);
    function Checkbox2(props) {
      _default$7(this, Checkbox2);
      var _this2 = _default$5(this, _UIState.call(this, props));
      var context = props.context;
      var checked = void 0, indeterminate = void 0;
      if ("checked" in props) {
        checked = props.checked;
      } else {
        checked = props.defaultChecked;
      }
      if ("indeterminate" in props) {
        indeterminate = props.indeterminate;
      } else {
        indeterminate = props.defaultIndeterminate;
      }
      if (context.__group__) {
        checked = isChecked(context.selectedValue, props.value);
      }
      _this2.state = {
        checked,
        indeterminate
      };
      _this2.onChange = _this2.onChange.bind(_this2);
      return _this2;
    }
    Checkbox2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      var nextContext = nextProps.context;
      var state = {};
      if (nextContext.__group__) {
        if ("selectedValue" in nextContext) {
          state.checked = isChecked(nextContext.selectedValue, nextProps.value);
        }
      } else if ("checked" in nextProps) {
        state.checked = nextProps.checked;
      }
      if ("indeterminate" in nextProps) {
        state.indeterminate = nextProps.indeterminate;
      }
      return state;
    };
    Checkbox2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var shallowEqual2 = obj.shallowEqual;
      return !shallowEqual2(this.props, nextProps) || !shallowEqual2(this.state, nextState) || !shallowEqual2(this.context, nextContext);
    };
    Checkbox2.prototype.onChange = function onChange6(e2) {
      var _props = this.props, context = _props.context, value = _props.value;
      var checked = e2.target.checked;
      if (this.disabled) {
        return;
      }
      if (context.__group__) {
        context.onChange(value, e2);
      } else {
        if (!("checked" in this.props)) {
          this.setState({
            checked
          });
        }
        if (!("indeterminate" in this.props)) {
          this.setState({
            indeterminate: false
          });
        }
        this.props.onChange(checked, e2);
      }
    };
    Checkbox2.prototype.render = function render2() {
      var _classnames, _classnames2;
      var _props2 = this.props, id2 = _props2.id, className = _props2.className, children = _props2.children, style = _props2.style, label = _props2.label, onMouseEnter = _props2.onMouseEnter, onMouseLeave = _props2.onMouseLeave, rtl = _props2.rtl, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, context = _props2.context, value = _props2.value, name = _props2.name, otherProps = _default$3(_props2, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "rtl", "isPreview", "renderPreview", "context", "value", "name"]);
      var checked = !!this.state.checked;
      var disabled = this.disabled;
      var indeterminate = !!this.state.indeterminate;
      var prefix = context.prefix || this.props.prefix;
      var others = obj.pickOthers(Checkbox2.propTypes, otherProps);
      var othersData = obj.pickAttrsWith(others, "data-");
      if (otherProps.title) {
        othersData.title = otherProps.title;
      }
      var childInput = React.createElement("input", _default$8({}, obj.pickOthers(Checkbox2.propTypes, otherProps), {
        id: id2,
        value,
        name,
        disabled,
        checked,
        type: "checkbox",
        onChange: this.onChange,
        "aria-checked": indeterminate ? "mixed" : checked,
        className: prefix + "checkbox-input"
      }));
      if (!disabled) {
        childInput = this.getStateElement(childInput);
      }
      var cls = classnames((_classnames = {}, _classnames[prefix + "checkbox-wrapper"] = true, _classnames[className] = !!className, _classnames.checked = checked, _classnames.disabled = disabled, _classnames.indeterminate = indeterminate, _classnames[this.getStateClassName()] = true, _classnames));
      var labelCls = prefix + "checkbox-label";
      var type2 = indeterminate ? "semi-select" : "select";
      if (isPreview) {
        var previewCls = classnames(className, prefix + "form-preview");
        if ("renderPreview" in this.props) {
          return React.createElement(
            "div",
            _default$8({ id: id2, dir: rtl ? "rtl" : void 0 }, othersData, { className: previewCls }),
            renderPreview(checked, this.props)
          );
        }
        return React.createElement(
          "p",
          _default$8({ id: id2, dir: rtl ? "rtl" : void 0 }, othersData, { className: previewCls }),
          checked && (children || label || this.state.value)
        );
      }
      var iconCls = classnames((_classnames2 = {
        zoomIn: indeterminate
      }, _classnames2[prefix + "checkbox-semi-select-icon"] = indeterminate, _classnames2[prefix + "checkbox-select-icon"] = !indeterminate, _classnames2));
      return React.createElement(
        "label",
        _default$8({}, othersData, {
          className: cls,
          style,
          dir: rtl ? "rtl" : void 0,
          onMouseEnter,
          onMouseLeave
        }),
        React.createElement(
          "span",
          { className: prefix + "checkbox" },
          React.createElement(
            "span",
            { className: prefix + "checkbox-inner" },
            React.createElement(Icon, { type: type2, size: "xs", className: iconCls })
          ),
          childInput
        ),
        [label, children].map(function(item, i) {
          return [void 0, null].indexOf(item) === -1 ? React.createElement(
            "span",
            { key: i, className: labelCls },
            item
          ) : null;
        })
      );
    };
    _default$1(Checkbox2, [{
      key: "disabled",
      get: function get() {
        var props = this.props;
        var context = props.context;
        return props.disabled || "disabled" in context && context.disabled;
      }
    }]);
    return Checkbox2;
  }(UIState$1), _class$W.displayName = "Checkbox", _class$W.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    /**
     * 自定义类名
     */
    className: PropTypes$1.string,
    /**
     * checkbox id, 挂载在input上
     */
    id: PropTypes$1.string,
    /**
     * 自定义内敛样式
     */
    style: PropTypes$1.object,
    /**
     * 选中状态
     */
    checked: PropTypes$1.bool,
    /**
     * 默认选中状态
     */
    defaultChecked: PropTypes$1.bool,
    /**
     * 禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 通过属性配置label，
     */
    label: PropTypes$1.node,
    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    indeterminate: PropTypes$1.bool,
    /**
     *  Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    defaultIndeterminate: PropTypes$1.bool,
    /**
     * 状态变化时触发的事件
     * @param {Boolean} checked 是否选中
     * @param {Event} e Dom 事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 鼠标进入enter事件
     * @param {Event} e Dom 事件对象
     */
    onMouseEnter: PropTypes$1.func,
    /**
     * 鼠标离开Leave事件
     * @param {Event} e Dom 事件对象
     */
    onMouseLeave: PropTypes$1.func,
    /**
     * checkbox 的value
     */
    value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * name
     */
    name: PropTypes$1.string,
    /**
     * 是否为预览态
     * @version 1.19
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Boolean} checked 是否选中
     * @param {Object} props 所有传入的参数
     * @returns {reactNode} Element 渲染内容
     * @version 1.19
     */
    renderPreview: PropTypes$1.func
  }), _class$W.defaultProps = {
    defaultChecked: false,
    defaultIndeterminate: false,
    onChange: noop$a,
    onMouseEnter: noop$a,
    onMouseLeave: noop$a,
    prefix: "next-",
    isPreview: false
  }, _temp$E);
  const Checkbox$1 = ConfigProvider$1.config(withContext$2(polyfill(Checkbox)));
  var _class$V, _temp$D;
  var pickOthers$5 = obj.pickOthers;
  var CheckboxGroup = (_temp$D = _class$V = function(_Component) {
    _default$4(CheckboxGroup2, _Component);
    function CheckboxGroup2(props) {
      _default$7(this, CheckboxGroup2);
      var _this2 = _default$5(this, _Component.call(this, props));
      var value = [];
      if ("value" in props) {
        value = props.value;
      } else if ("defaultValue" in props) {
        value = props.defaultValue;
      }
      if (!Array.isArray(value)) {
        if (value === null || value === void 0) {
          value = [];
        } else {
          value = [value];
        }
      }
      _this2.state = {
        value: [].concat(value)
      };
      _this2.onChange = _this2.onChange.bind(_this2);
      return _this2;
    }
    CheckboxGroup2.prototype.getChildContext = function getChildContext() {
      return {
        __group__: true,
        onChange: this.onChange,
        selectedValue: this.state.value,
        disabled: this.props.disabled
      };
    };
    CheckboxGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      if ("value" in nextProps) {
        var value = nextProps.value;
        if (!Array.isArray(value)) {
          if (value === null || value === void 0) {
            value = [];
          } else {
            value = [value];
          }
        }
        return { value };
      }
      return null;
    };
    CheckboxGroup2.prototype.onChange = function onChange6(currentValue, e2) {
      var value = this.state.value;
      var index2 = value.indexOf(currentValue);
      var valTemp = [].concat(value);
      if (index2 === -1) {
        valTemp.push(currentValue);
      } else {
        valTemp.splice(index2, 1);
      }
      if (!("value" in this.props)) {
        this.setState({ value: valTemp });
      }
      this.props.onChange(valTemp, e2);
    };
    CheckboxGroup2.prototype.render = function render2() {
      var _this2 = this, _classnames;
      var _props = this.props, className = _props.className, style = _props.style, prefix = _props.prefix, disabled = _props.disabled, direction = _props.direction, rtl = _props.rtl, isPreview = _props.isPreview, renderPreview = _props.renderPreview;
      var others = pickOthers$5(CheckboxGroup2.propTypes, this.props);
      var children = void 0;
      var previewed = [];
      if (this.props.children) {
        children = React.Children.map(this.props.children, function(child) {
          if (!React.isValidElement(child)) {
            return child;
          }
          var checked = _this2.state.value && _this2.state.value.indexOf(child.props.value) > -1;
          if (checked) {
            previewed.push({
              label: child.props.children,
              value: child.props.value
            });
          }
          return React.cloneElement(child, child.props.rtl === void 0 ? { rtl } : null);
        });
      } else {
        children = this.props.dataSource.map(function(item, index2) {
          var option = item;
          if ((typeof item === "undefined" ? "undefined" : _default$6(item)) !== "object") {
            option = {
              label: item,
              value: item,
              disabled
            };
          }
          var checked = _this2.state.value && _this2.state.value.indexOf(option.value) > -1;
          if (checked) {
            previewed.push({
              label: option.label,
              value: option.value
            });
          }
          return React.createElement(Checkbox$1, {
            key: index2,
            value: option.value,
            checked,
            rtl,
            disabled: disabled || option.disabled,
            label: option.label
          });
        });
      }
      if (isPreview) {
        var previewCls = classnames(className, prefix + "form-preview");
        if ("renderPreview" in this.props) {
          return React.createElement(
            "div",
            _default$8({}, others, { dir: rtl ? "rtl" : void 0, className: previewCls }),
            renderPreview(previewed, this.props)
          );
        }
        return React.createElement(
          "p",
          _default$8({}, others, { dir: rtl ? "rtl" : void 0, className: previewCls }),
          previewed.map(function(item) {
            return item.label;
          }).join(", ")
        );
      }
      var cls = classnames((_classnames = {}, _classnames[prefix + "checkbox-group"] = true, _classnames[prefix + "checkbox-group-" + direction] = true, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));
      return React.createElement(
        "span",
        _default$8({ dir: rtl ? "rtl" : void 0 }, others, { className: cls, style }),
        children
      );
    };
    return CheckboxGroup2;
  }(React.Component), _class$V.propTypes = {
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    /**
     * 自定义类名
     */
    className: PropTypes$1.string,
    /**
     * 自定义内敛样式
     */
    style: PropTypes$1.object,
    /**
     * 整体禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     */
    dataSource: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.string), PropTypes$1.arrayOf(PropTypes$1.object)]),
    /**
     * 被选中的值列表
     */
    value: PropTypes$1.oneOfType([PropTypes$1.array, PropTypes$1.string, PropTypes$1.number]),
    /**
     * 默认被选中的值列表
     */
    defaultValue: PropTypes$1.oneOfType([PropTypes$1.array, PropTypes$1.string, PropTypes$1.number]),
    /**
     * 通过子元素方式设置内部 checkbox
     */
    children: PropTypes$1.arrayOf(PropTypes$1.element),
    /**
     * 选中值改变时的事件
     * @param {Array} value 选中项列表
     * @param {Event} e Dom 事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction: PropTypes$1.oneOf(["hoz", "ver"]),
    /**
     * 是否为预览态
     * @version 1.19
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Array} previewed 预览值 [{label: '', value:''},...]
     * @param {Object} props 所有传入的参数
     * @returns {reactNode} Element 渲染内容
     * @version 1.19
     */
    renderPreview: PropTypes$1.func
  }, _class$V.defaultProps = {
    dataSource: [],
    onChange: function onChange() {
    },
    prefix: "next-",
    direction: "hoz",
    isPreview: false
  }, _class$V.childContextTypes = {
    onChange: PropTypes$1.func,
    __group__: PropTypes$1.bool,
    selectedValue: PropTypes$1.array,
    disabled: PropTypes$1.bool
  }, _temp$D);
  CheckboxGroup.displayName = "CheckboxGroup";
  const Group$3 = polyfill(CheckboxGroup);
  Checkbox$1.Group = ConfigProvider$1.config(Group$3, {
    transform: (
      /* istanbul ignore next */
      function transform2(props, deprecated2) {
        if ("itemDirection" in props) {
          deprecated2("itemDirection", "direction", "Checkbox");
          var _props = props, itemDirection = _props.itemDirection, others = _default$3(_props, ["itemDirection"]);
          props = _default$8({ direction: itemDirection }, others);
        }
        return props;
      }
    )
  });
  function withContext$1(Radio2) {
    var _class2, _temp3;
    return _temp3 = _class2 = function(_React$Component) {
      _default$4(WrappedComp, _React$Component);
      function WrappedComp(props) {
        _default$7(this, WrappedComp);
        var _this2 = _default$5(this, _React$Component.call(this, props));
        _this2.radioRef = null;
        return _this2;
      }
      WrappedComp.prototype.focus = function focus2() {
        if (this.radioRef) {
          this.radioRef.focus();
        }
      };
      WrappedComp.prototype.render = function render2() {
        var _this2 = this;
        return React.createElement(Radio2, _default$8({
          ref: function ref(el) {
            _this2.radioRef = el;
          }
        }, this.props, {
          context: this.context
        }));
      };
      return WrappedComp;
    }(React.Component), _class2.displayName = "Radio", _class2.contextTypes = {
      onChange: PropTypes$1.func,
      __group__: PropTypes$1.bool,
      isButton: PropTypes$1.bool,
      selectedValue: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
      disabled: PropTypes$1.bool
    }, _temp3;
  }
  var _class$U, _temp$C;
  var makeChain$2 = func.makeChain, noop$9 = func.noop;
  var Radio = (_temp$C = _class$U = function(_UIState) {
    _default$4(Radio2, _UIState);
    function Radio2(props) {
      _default$7(this, Radio2);
      var _this2 = _default$5(this, _UIState.call(this, props));
      var context = props.context;
      var checked = void 0;
      if (context.__group__) {
        checked = context.selectedValue === props.value;
      } else if ("checked" in props) {
        checked = props.checked;
      } else {
        checked = props.defaultChecked;
      }
      _this2.state = { checked };
      _this2.radioRef = null;
      _this2.onChange = _this2.onChange.bind(_this2);
      return _this2;
    }
    Radio2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      var nextContext = nextProps.context;
      if (nextContext.__group__ && "selectedValue" in nextContext) {
        return {
          checked: nextContext.selectedValue === nextProps.value
        };
      } else if ("checked" in nextProps) {
        return {
          checked: nextProps.checked
        };
      }
      return null;
    };
    Radio2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var shallowEqual2 = obj.shallowEqual;
      return !shallowEqual2(this.props, nextProps) || !shallowEqual2(this.state, nextState) || !shallowEqual2(this.context, nextContext);
    };
    Radio2.prototype.componentDidUpdate = function componentDidUpdate() {
      if (this.disabled) {
        this.resetUIState();
      }
    };
    Radio2.prototype.onChange = function onChange6(e2) {
      var checked = e2.target.checked;
      var _props = this.props, context = _props.context, value = _props.value;
      if (context.__group__) {
        context.onChange(value, e2);
      } else if (this.state.checked !== checked) {
        if (!("checked" in this.props)) {
          this.setState({
            checked
          });
        }
        this.props.onChange(checked, e2);
      }
    };
    Radio2.prototype.focus = function focus2() {
      if (this.radioRef) {
        this.radioRef.focus();
        this._onUIFocus();
      }
    };
    Radio2.prototype.render = function render2() {
      var _this2 = this, _classnames, _classnames2, _classnames3;
      var _props2 = this.props, id2 = _props2.id, className = _props2.className, children = _props2.children, style = _props2.style, label = _props2.label, onMouseEnter = _props2.onMouseEnter, onMouseLeave = _props2.onMouseLeave, tabIndex = _props2.tabIndex, rtl = _props2.rtl, name = _props2.name, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, value = _props2.value, context = _props2.context, otherProps = _default$3(_props2, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "tabIndex", "rtl", "name", "isPreview", "renderPreview", "value", "context"]);
      var checked = !!this.state.checked;
      var disabled = this.disabled;
      var isButton = context.isButton;
      var prefix = context.prefix || this.props.prefix;
      var others = obj.pickOthers(Radio2.propTypes, otherProps);
      var othersData = obj.pickAttrsWith(others, "data-");
      if (isPreview) {
        var previewCls = classnames(className, prefix + "form-preview");
        if ("renderPreview" in this.props) {
          return React.createElement(
            "div",
            _default$8({ id: id2, dir: rtl ? "rtl" : "ltr" }, others, { className: previewCls }),
            renderPreview(checked, this.props)
          );
        }
        return React.createElement(
          "p",
          _default$8({ id: id2, dir: rtl ? "rtl" : "ltr" }, others, { className: previewCls }),
          checked && (children || label || value)
        );
      }
      var input = React.createElement("input", _default$8({}, obj.pickOthers(othersData, others), {
        name,
        id: id2,
        tabIndex,
        disabled,
        checked,
        type: "radio",
        onChange: this.onChange,
        "aria-checked": checked,
        className: prefix + "radio-input",
        ref: function ref(e2) {
          _this2.radioRef = e2;
        }
      }));
      if (!disabled) {
        input = this.getStateElement(input);
      }
      var cls = classnames((_classnames = {}, _classnames[prefix + "radio"] = true, _classnames.checked = checked, _classnames.disabled = disabled, _classnames[this.getStateClassName()] = true, _classnames));
      var clsInner = classnames((_classnames2 = {}, _classnames2[prefix + "radio-inner"] = true, _classnames2.press = checked, _classnames2.unpress = !checked, _classnames2));
      var clsWrapper = classnames((_classnames3 = {}, _classnames3[prefix + "radio-wrapper"] = true, _classnames3[className] = !!className, _classnames3.checked = checked, _classnames3.disabled = disabled, _classnames3[this.getStateClassName()] = true, _classnames3));
      var childrenCls = prefix + "radio-label";
      var radioComp = !isButton ? React.createElement(
        "span",
        { className: cls },
        React.createElement("span", { className: clsInner }),
        input
      ) : React.createElement(
        "span",
        { className: prefix + "radio-single-input" },
        input
      );
      return React.createElement(
        "label",
        _default$8({}, othersData, {
          dir: rtl ? "rtl" : "ltr",
          style,
          "aria-checked": checked,
          "aria-disabled": disabled,
          className: clsWrapper,
          onMouseEnter: disabled ? onMouseEnter : makeChain$2(this._onUIMouseEnter, onMouseEnter),
          onMouseLeave: disabled ? onMouseLeave : makeChain$2(this._onUIMouseLeave, onMouseLeave)
        }),
        radioComp,
        [children, label].map(function(d2, i) {
          return d2 !== void 0 ? React.createElement(
            "span",
            { key: i, className: childrenCls },
            d2
          ) : null;
        })
      );
    };
    _default$1(Radio2, [{
      key: "disabled",
      get: function get() {
        var props = this.props;
        var context = props.context;
        var disabled = props.disabled || context.__group__ && "disabled" in context && context.disabled;
        return disabled;
      }
    }]);
    return Radio2;
  }(UIState$1), _class$U.displayName = "Radio", _class$U.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 自定义类名
     */
    className: PropTypes$1.string,
    /**
     * 组件input的id
     */
    id: PropTypes$1.string,
    /**
     * 自定义内敛样式
     */
    style: PropTypes$1.object,
    /**
     * 设置radio是否选中
     */
    checked: PropTypes$1.bool,
    /**
     * 设置radio是否默认选中
     */
    defaultChecked: PropTypes$1.bool,
    /**
     * 通过属性配置label
     */
    label: PropTypes$1.node,
    /**
     * 状态变化时触发的事件
     * @param {Boolean} checked 是否选中
     * @param {Event} e Dom 事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 鼠标进入enter事件
     * @param {Event} e Dom 事件对象
     */
    onMouseEnter: PropTypes$1.func,
    /**
     * 鼠标离开事件
     * @param {Event} e Dom 事件对象
     */
    onMouseLeave: PropTypes$1.func,
    /**
     * radio是否被禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * radio 的value
     */
    value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
    /**
     * name
     */
    name: PropTypes$1.string,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Boolean} checked 是否选中
     * @param {Object} props 所有传入的参数
     * @returns {reactNode} Element 渲染内容
     */
    renderPreview: PropTypes$1.func
  }), _class$U.defaultProps = {
    onChange: noop$9,
    onMouseLeave: noop$9,
    onMouseEnter: noop$9,
    tabIndex: 0,
    prefix: "next-",
    isPreview: false
  }, _class$U.contextTypes = {
    onChange: PropTypes$1.func,
    __group__: PropTypes$1.bool,
    isButton: PropTypes$1.bool,
    selectedValue: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
    disabled: PropTypes$1.bool
  }, _temp$C);
  const Radio$1 = ConfigProvider$1.config(withContext$1(polyfill(Radio)));
  var _class$T, _temp$B;
  var makeChain$1 = func.makeChain;
  var focusRef = focus.focusRef;
  var pickOthers$4 = obj.pickOthers;
  var RadioGroup = (_temp$B = _class$T = function(_Component) {
    _default$4(RadioGroup2, _Component);
    function RadioGroup2(props) {
      _default$7(this, RadioGroup2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.saveRadioRef = function(el, index2) {
        if (el && typeof el.getInstance === "function") {
          var radio = el.getInstance();
          _this2.radioRefs[index2] = radio;
        }
      };
      var value = "";
      if ("value" in props) {
        value = props.value;
      } else if ("defaultValue" in props) {
        value = props.defaultValue;
      }
      _this2.radioRefs = [];
      _this2.hasFocus = false;
      _this2.state = { value };
      _this2.onChange = _this2.onChange.bind(_this2);
      return _this2;
    }
    RadioGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if ("value" in props && props.value !== state.value) {
        return {
          value: props.value
        };
      }
      return null;
    };
    RadioGroup2.prototype.getChildContext = function getChildContext() {
      var disabled = this.props.disabled;
      return {
        __group__: true,
        isButton: this.props.shape === "button",
        onChange: this.onChange,
        selectedValue: this.state.value,
        disabled
      };
    };
    RadioGroup2.prototype.onChange = function onChange6(currentValue, e2) {
      if (!("value" in this.props)) {
        this.setState({ value: currentValue });
      }
      if (currentValue !== this.state.value) {
        this.props.onChange(currentValue, e2);
      }
    };
    RadioGroup2.prototype.focus = function focus2() {
      if (!this.hasFocus) {
        var availableRef = this.radioRefs.filter(function(ref) {
          if (ref) {
            return !ref.props.disabled;
          }
          return false;
        });
        var radioRef = availableRef.find(function(ref) {
          if (ref) {
            return ref.props.checked;
          }
          return false;
        });
        if (radioRef) {
          focusRef(radioRef);
        } else if (availableRef.length > 0) {
          focusRef(availableRef[0]);
        }
      }
    };
    RadioGroup2.prototype.render = function render2() {
      var _this2 = this, _classnames;
      var _props = this.props, rtl = _props.rtl, className = _props.className, disabled = _props.disabled, shape = _props.shape, size2 = _props.size, style = _props.style, prefix = _props.prefix, direction = _props.direction, component = _props.component, isPreview = _props.isPreview, renderPreview = _props.renderPreview;
      var others = pickOthers$4(Object.keys(RadioGroup2.propTypes), this.props);
      if (rtl) {
        others.dir = "rtl";
      }
      var children = void 0;
      var previewed = {};
      this.radioRefs = [];
      if (this.props.children) {
        children = React.Children.map(this.props.children, function(child, index2) {
          if (!React.isValidElement(child)) {
            return child;
          }
          var checked = _this2.state.value === child.props.value;
          if (checked) {
            previewed.label = child.props.children;
            previewed.value = child.props.value;
          }
          var tabIndex = index2 === 0 && !_this2.state.value || checked ? 0 : -1;
          var childrtl = child.props.rtl === void 0 ? rtl : child.props.rtl;
          if (child.type && child.type.displayName === "Config(Radio)") {
            return React.cloneElement(child, {
              checked,
              tabIndex,
              rtl: childrtl,
              ref: function ref(e2) {
                _this2.saveRadioRef(e2, index2);
              }
            });
          }
          return React.cloneElement(child, {
            checked,
            rtl: childrtl,
            ref: function ref(e2) {
              _this2.saveRadioRef(e2, index2);
            }
          });
        });
      } else {
        children = this.props.dataSource.map(function(item, index2) {
          var option = item;
          if ((typeof item === "undefined" ? "undefined" : _default$6(item)) !== "object") {
            option = {
              label: item,
              value: item,
              disabled
            };
          }
          var checked = _this2.state.value === option.value;
          if (checked) {
            previewed.label = option.label;
            previewed.value = option.value;
          }
          return React.createElement(Radio$1, {
            key: index2,
            tabIndex: index2 === 0 && !_this2.state.value || checked ? 0 : -1,
            value: option.value,
            checked,
            label: option.label,
            disabled: disabled || option.disabled,
            ref: function ref(e2) {
              _this2.saveRadioRef(e2, index2);
            }
          });
        });
      }
      if (children.length === 0) {
        this.firstRef = null;
      }
      if (!previewed.value) {
        this.selectedRef = null;
      }
      if (isPreview) {
        var previewCls = classnames(className, prefix + "form-preview");
        if ("renderPreview" in this.props) {
          return React.createElement(
            "div",
            _default$8({}, others, { className: previewCls }),
            renderPreview(previewed, this.props)
          );
        }
        return React.createElement(
          "p",
          _default$8({}, others, { className: previewCls }),
          previewed.label
        );
      }
      var isButtonShape = shape === "button";
      var cls = classnames((_classnames = {}, _classnames[prefix + "radio-group"] = true, _classnames[prefix + "radio-group-" + direction] = !isButtonShape, _classnames[prefix + "radio-button"] = isButtonShape, _classnames[prefix + "radio-button-" + size2] = isButtonShape, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));
      var TagName = component;
      return React.createElement(
        TagName,
        _default$8({}, others, {
          "aria-disabled": disabled,
          role: "radiogroup",
          className: cls,
          style,
          onFocus: makeChain$1((function() {
            this.hasFocus = true;
          }).bind(this), this.props.onFocus),
          onBlur: makeChain$1((function() {
            this.hasFocus = false;
          }).bind(this), this.props.onBlur)
        }),
        children
      );
    };
    return RadioGroup2;
  }(React.Component), _class$T.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes$1.string,
    /**
     * 自定义类名
     */
    className: PropTypes$1.string,
    /**
     * 自定义内敛样式
     */
    style: PropTypes$1.object,
    /**
     * name
     */
    name: PropTypes$1.string,
    /**
     * radio group的选中项的值
     */
    value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
    /**
     * radio group的默认值
     */
    defaultValue: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
    /**
     * 设置标签类型
     */
    component: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func]),
    /**
     * 选中值改变时的事件
     * @param {String/Number} value 选中项的值
     * @param {Event} e Dom 事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 表示radio被禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 可以设置成 button 展示形状
     * @enumdesc 按钮状
     */
    shape: PropTypes$1.oneOf(["normal", "button"]),
    /**
     * 与 `shape` 属性配套使用，shape设为button时有效
     * @enumdesc 大, 中, 小
     */
    size: PropTypes$1.oneOf(["large", "medium", "small"]),
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` `[{label: 'apply', value: 'apple'}]`
     */
    dataSource: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.string), PropTypes$1.arrayOf(PropTypes$1.object)]),
    /**
     * 通过子元素方式设置内部radio
     */
    children: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.element), PropTypes$1.element]),
    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction: PropTypes$1.oneOf(["hoz", "ver"]),
    /**
     * 是否为预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Object} previewed 预览值：{label: "", value: ""}
     * @param {Object} props 所有传入的参数
     * @returns {reactNode} Element 渲染内容
     */
    renderPreview: PropTypes$1.func
  }), _class$T.defaultProps = {
    dataSource: [],
    size: "medium",
    onChange: function onChange2() {
    },
    prefix: "next-",
    component: "div",
    direction: "hoz",
    isPreview: false
  }, _class$T.childContextTypes = {
    onChange: PropTypes$1.func,
    __group__: PropTypes$1.bool,
    isButton: PropTypes$1.bool,
    selectedValue: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]),
    disabled: PropTypes$1.bool
  }, _temp$B);
  RadioGroup.displayName = "RadioGroup";
  const RadioGroup$1 = polyfill(RadioGroup);
  Radio$1.Group = ConfigProvider$1.config(RadioGroup$1, {
    transform: (
      /* istanbul ignore next */
      function transform3(props, deprecated2) {
        if ("itemDirection" in props) {
          deprecated2("itemDirection", "direction", "Radio");
          var _props = props, itemDirection = _props.itemDirection, others = _default$3(_props, ["itemDirection"]);
          props = _default$8({ direction: itemDirection }, others);
        }
        return props;
      }
    )
  });
  var _class$S, _temp$A;
  var noop$8 = {};
  var bindCtx$1 = func.bindCtx;
  var pickOthers$3 = obj.pickOthers;
  var CheckableItem = (_temp$A = _class$S = function(_Component) {
    _default$4(CheckableItem2, _Component);
    function CheckableItem2(props) {
      _default$7(this, CheckableItem2);
      var _this2 = _default$5(this, _Component.call(this, props));
      bindCtx$1(_this2, ["stopPropagation", "handleKeyDown", "handleClick"]);
      _this2.id = htmlId.escapeForId("checkable-item-" + (props.id || props._key));
      return _this2;
    }
    CheckableItem2.prototype.stopPropagation = function stopPropagation(e2) {
      e2.stopPropagation();
    };
    CheckableItem2.prototype.handleCheck = function handleCheck(e2) {
      var _props = this.props, checkType = _props.checkType, checked = _props.checked, onChange6 = _props.onChange;
      if (!(checkType === "radio" && checked)) {
        onChange6(!checked, e2);
      }
    };
    CheckableItem2.prototype.handleKeyDown = function handleKeyDown(e2) {
      if (e2.keyCode === KEYCODE.SPACE && !this.props.checkDisabled) {
        this.handleCheck(e2);
      }
      this.props.onKeyDown && this.props.onKeyDown(e2);
    };
    CheckableItem2.prototype.handleClick = function handleClick(e2) {
      this.handleCheck(e2);
      this.props.onClick && this.props.onClick(e2);
    };
    CheckableItem2.prototype.renderCheck = function renderCheck() {
      var _props2 = this.props, root = _props2.root, checked = _props2.checked, indeterminate = _props2.indeterminate, disabled = _props2.disabled, checkType = _props2.checkType, checkDisabled = _props2.checkDisabled, onChange6 = _props2.onChange;
      var labelToggleChecked = root.props.labelToggleChecked;
      var Check = checkType === "radio" ? Radio$1 : Checkbox$1;
      var checkProps = {
        tabIndex: "-1",
        checked,
        disabled: disabled || checkDisabled
      };
      if (checkType === "checkbox") {
        checkProps.indeterminate = indeterminate;
      }
      if (!labelToggleChecked) {
        checkProps.onChange = onChange6;
        checkProps.onClick = this.stopPropagation;
      }
      return React.createElement(Check, _default$8({ "aria-labelledby": this.id }, checkProps));
    };
    CheckableItem2.prototype.render = function render2() {
      var _props3 = this.props, _key = _props3._key, root = _props3.root, checked = _props3.checked, disabled = _props3.disabled, onClick3 = _props3.onClick, helper = _props3.helper, children = _props3.children;
      var _root$props = root.props, prefix = _root$props.prefix, labelToggleChecked = _root$props.labelToggleChecked;
      var others = pickOthers$3(Object.keys(CheckableItem2.propTypes), this.props);
      var newProps = _default$8({
        _key,
        root,
        disabled,
        type: "item",
        onClick: onClick3,
        onKeyDown: this.handleKeyDown
      }, others);
      if (labelToggleChecked && !disabled) {
        newProps.onClick = this.handleClick;
      }
      var title = void 0;
      if (typeof children === "string") {
        title = children;
      }
      return React.createElement(
        Item$1,
        _default$8({ "aria-checked": checked, title }, newProps),
        this.renderCheck(),
        React.createElement(
          "span",
          { className: prefix + "menu-item-text", id: this.id },
          children
        ),
        helper ? React.createElement(
          "div",
          { className: prefix + "menu-item-helper" },
          helper
        ) : null
      );
    };
    return CheckableItem2;
  }(React.Component), _class$S.propTypes = {
    _key: PropTypes$1.string,
    root: PropTypes$1.object,
    disabled: PropTypes$1.bool,
    inlineIndent: PropTypes$1.number,
    checked: PropTypes$1.bool,
    indeterminate: PropTypes$1.bool,
    onChange: PropTypes$1.func,
    checkType: PropTypes$1.oneOf(["checkbox", "radio"]),
    checkDisabled: PropTypes$1.bool,
    helper: PropTypes$1.node,
    children: PropTypes$1.node,
    onKeyDown: PropTypes$1.func,
    onClick: PropTypes$1.func,
    id: PropTypes$1.string
  }, _class$S.defaultProps = {
    disabled: false,
    checked: false,
    indeterminate: false,
    checkType: "checkbox",
    checkDisabled: false,
    onChange: noop$8
  }, _temp$A);
  CheckableItem.displayName = "CheckableItem";
  var _class$R, _temp$z;
  var CheckboxItem = (_temp$z = _class$R = function(_Component) {
    _default$4(CheckboxItem2, _Component);
    function CheckboxItem2() {
      _default$7(this, CheckboxItem2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    CheckboxItem2.prototype.render = function render2() {
      var _props = this.props, checkboxDisabled = _props.checkboxDisabled, others = _default$3(_props, ["checkboxDisabled"]);
      return React.createElement(CheckableItem, _default$8({ role: "menuitemcheckbox", checkType: "checkbox", checkDisabled: checkboxDisabled }, others));
    };
    return CheckboxItem2;
  }(React.Component), _class$R.menuChildType = "item", _class$R.propTypes = {
    /**
     * 是否选中
     */
    checked: PropTypes$1.bool,
    /**
     * 是否半选中
     */
    indeterminate: PropTypes$1.bool,
    /**
     * 是否禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 选中或取消选中触发的回调函数
     * @param {Boolean} checked 是否选中
     * @param {Object} event 选中事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 帮助文本
     */
    helper: PropTypes$1.node,
    /**
     * 标签内容
     */
    children: PropTypes$1.node,
    checkboxDisabled: PropTypes$1.bool
  }, _class$R.defaultProps = {
    checked: false,
    indeterminate: false,
    disabled: false,
    onChange: function onChange3() {
    },
    checkboxDisabled: false
  }, _temp$z);
  CheckboxItem.displayName = "CheckboxItem";
  var _class$Q, _temp$y;
  var RadioItem = (_temp$y = _class$Q = function(_Component) {
    _default$4(RadioItem2, _Component);
    function RadioItem2() {
      _default$7(this, RadioItem2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    RadioItem2.prototype.render = function render2() {
      return React.createElement(CheckableItem, _default$8({ role: "menuitemradio", checkType: "radio" }, this.props));
    };
    return RadioItem2;
  }(React.Component), _class$Q.menuChildType = "item", _class$Q.propTypes = {
    /**
     * 是否选中
     */
    checked: PropTypes$1.bool,
    /**
     * 是否禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 选中或取消选中触发的回调函数
     * @param {Boolean} checked 是否选中
     * @param {Object} event 选中事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 帮助文本
     */
    helper: PropTypes$1.node,
    /**
     * 标签内容
     */
    children: PropTypes$1.node
  }, _class$Q.defaultProps = {
    checked: false,
    disabled: false,
    onChange: function onChange4() {
    }
  }, _temp$y);
  RadioItem.displayName = "RadioItem";
  var _class$P, _temp$x;
  var Group$2 = (_temp$x = _class$P = function(_Component) {
    _default$4(Group2, _Component);
    function Group2() {
      _default$7(this, Group2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Group2.prototype.render = function render2() {
      var _cx;
      var _props = this.props, root = _props.root, className = _props.className, label = _props.label, children = _props.children, parentMode = _props.parentMode, others = _default$3(_props, ["root", "className", "label", "children", "parentMode"]);
      var prefix = root.props.prefix;
      var newClassName = classnames((_cx = {}, _cx[prefix + "menu-group-label"] = true, _cx[className] = !!className, _cx));
      var newChildren = children.map(function(child) {
        var _cx2;
        if (typeof child !== "function" && (typeof child === "undefined" ? "undefined" : _default$6(child)) !== "object") {
          return child;
        }
        var className2 = child.props.className;
        var newChildClassName = classnames((_cx2 = {}, _cx2[prefix + "menu-group-item"] = true, _cx2[className2] = !!className2, _cx2));
        return React.cloneElement(child, {
          parentMode,
          className: newChildClassName
        });
      });
      return [React.createElement(
        Item$1,
        _default$8({
          key: "menu-group-label",
          className: newClassName,
          replaceClassName: true,
          root,
          parentMode
        }, others),
        label
      )].concat(newChildren);
    };
    return Group2;
  }(React.Component), _class$P.menuChildType = "group", _class$P.propTypes = {
    root: PropTypes$1.object,
    className: PropTypes$1.string,
    /**
     * 标签内容
     */
    label: PropTypes$1.node,
    /**
     * 菜单项
     */
    children: PropTypes$1.node,
    parentMode: PropTypes$1.oneOf(["inline", "popup"])
  }, _temp$x);
  Group$2.displayName = "Group";
  var _class$O, _temp$w;
  var Divider = (_temp$w = _class$O = function(_Component) {
    _default$4(Divider2, _Component);
    function Divider2() {
      _default$7(this, Divider2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Divider2.prototype.render = function render2() {
      var _cx;
      var _props = this.props, root = _props.root, className = _props.className;
      _props.parentMode;
      _props.parent;
      var others = _default$3(_props, ["root", "className", "parentMode", "parent"]);
      var prefix = root.props.prefix;
      var newClassName = classnames((_cx = {}, _cx[prefix + "menu-divider"] = true, _cx[className] = !!className, _cx));
      return React.createElement("li", _default$8({ role: "separator", className: newClassName }, others));
    };
    return Divider2;
  }(React.Component), _class$O.menuChildType = "divider", _class$O.propTypes = {
    root: PropTypes$1.object,
    className: PropTypes$1.string
  }, _temp$w);
  Divider.displayName = "Divider";
  var _class$N, _temp$v;
  var bindCtx = func.bindCtx;
  var getContextProps = ConfigProvider$1.getContextProps;
  var Menu$1 = ConfigProvider$1.config(Menu$3);
  var menuInstance = void 0;
  var ContextMenu = (_temp$v = _class$N = function(_Component) {
    _default$4(ContextMenu2, _Component);
    function ContextMenu2(props) {
      _default$7(this, ContextMenu2);
      var _this2 = _default$5(this, _Component.call(this, props));
      _this2.state = {
        visible: true
      };
      bindCtx(_this2, ["handleOverlayClose", "handleOverlayOpen", "handleItemClick", "getOverlay"]);
      return _this2;
    }
    ContextMenu2.prototype.getOverlay = function getOverlay(ref) {
      this.overlay = ref;
    };
    ContextMenu2.prototype.close = function close2() {
      this.setState({
        visible: false
      });
      menuInstance = null;
    };
    ContextMenu2.prototype.handleOverlayClose = function handleOverlayClose(triggerType, e2) {
      var clickedPopupMenu = triggerType === "docClick" && this.popupNodes.some(function(node) {
        return node.contains(e2.target);
      });
      if (!clickedPopupMenu) {
        this.close();
        var overlayProps = this.props.overlayProps;
        if (overlayProps && overlayProps.onRequestClose) {
          for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            others[_key - 2] = arguments[_key];
          }
          overlayProps.onRequestClose.apply(overlayProps, [triggerType, e2].concat(others));
        }
      }
    };
    ContextMenu2.prototype.handleOverlayOpen = function handleOverlayOpen() {
      this.popupNodes = this.overlay.getInstance().getContent().getInstance().popupNodes;
      var overlayProps = this.props.overlayProps;
      if (overlayProps && overlayProps.onOpen) {
        overlayProps.onOpen();
      }
    };
    ContextMenu2.prototype.handleItemClick = function handleItemClick() {
      var _props;
      this.close();
      this.props.onItemClick && (_props = this.props).onItemClick.apply(_props, arguments);
    };
    ContextMenu2.prototype.render = function render2() {
      var _cx, _cx2;
      var _props2 = this.props, className = _props2.className, popupClassName = _props2.popupClassName, target = _props2.target, align = _props2.align, offset = _props2.offset, afterClose = _props2.afterClose, _props2$overlayProps = _props2.overlayProps, overlayProps = _props2$overlayProps === void 0 ? {} : _props2$overlayProps, others = _default$3(_props2, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
      var contextProps = getContextProps(this.props);
      var prefix = contextProps.prefix;
      var visible = this.state.visible;
      var newOverlayProps = _default$8({}, contextProps, overlayProps, {
        target,
        align,
        offset,
        afterClose,
        visible,
        onRequestClose: this.handleOverlayClose,
        onOpen: this.handleOverlayOpen,
        ref: this.getOverlay
      });
      var menuProps = _default$8({}, contextProps, {
        triggerType: "hover"
      }, others, {
        className: classnames((_cx = {}, _cx[prefix + "context"] = true, _cx[className] = !!className, _cx)),
        popupClassName: classnames((_cx2 = {}, _cx2[prefix + "context"] = true, _cx2[popupClassName] = !!popupClassName, _cx2)),
        onItemClick: this.handleItemClick
      });
      newOverlayProps.rtl = false;
      return React.createElement(
        Overlay$1,
        newOverlayProps,
        React.createElement(Menu$1, menuProps)
      );
    };
    return ContextMenu2;
  }(React.Component), _class$N.propTypes = {
    className: PropTypes$1.string,
    popupClassName: PropTypes$1.string,
    target: PropTypes$1.any,
    align: PropTypes$1.string,
    offset: PropTypes$1.array,
    overlayProps: PropTypes$1.object,
    afterClose: PropTypes$1.func,
    mode: PropTypes$1.oneOf(["inline", "popup"]),
    onOpen: PropTypes$1.func,
    onItemClick: PropTypes$1.func
  }, _class$N.defaultProps = {
    prefix: "next-",
    align: "tl tl",
    mode: "popup"
  }, _temp$v);
  ContextMenu.displayName = "ContextMenu";
  function create$1(props) {
    if (menuInstance) {
      menuInstance.destroy();
    }
    var afterClose = props.afterClose, others = _default$3(props, ["afterClose"]);
    var div = document.createElement("div");
    document.body.appendChild(div);
    var closeChain = function closeChain2() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      afterClose && afterClose();
    };
    var newContext = ConfigProvider$1.getContext();
    var menu = void 0;
    ReactDOM.render(React.createElement(
      ConfigProvider$1,
      newContext,
      React.createElement(ContextMenu, _default$8({
        ref: function ref(_ref) {
          menu = _ref;
        },
        afterClose: closeChain
      }, others))
    ), div);
    menuInstance = {
      destroy: function destroy() {
        if (menu) {
          menu.close();
        }
      }
    };
    return menuInstance;
  }
  Menu$3.SubMenu = SubMenu;
  Menu$3.Item = SelectableItem;
  Menu$3.CheckboxItem = CheckboxItem;
  Menu$3.RadioItem = RadioItem;
  Menu$3.PopupItem = PopupItem;
  Menu$3.Group = Group$2;
  Menu$3.Divider = Divider;
  Menu$3.create = create$1;
  var transform4 = function transform5(props, deprecated2) {
    if ("indentSize" in props) {
      deprecated2("indentSize", "inlineIndent", "Menu");
      var _props = props, indentSize = _props.indentSize, others = _default$3(_props, ["indentSize"]);
      props = _default$8({ inlineIndent: indentSize }, others);
    }
    if ("onDeselect" in props) {
      deprecated2("onDeselect", "onSelect", "Menu");
      if (props.onDeselect) {
        var _props2 = props, onDeselect = _props2.onDeselect, onSelect = _props2.onSelect, _others = _default$3(_props2, ["onDeselect", "onSelect"]);
        var newOnSelect = function newOnSelect2(selectedKeys, item, extra) {
          if (!extra.select) {
            onDeselect(extra.key);
          }
          if (onSelect) {
            onSelect(selectedKeys, item, extra);
          }
        };
        props = _default$8({ onSelect: newOnSelect }, _others);
      }
    }
    return props;
  };
  const Menu = ConfigProvider$1.config(Menu$3, {
    transform: transform4
  });
  var _class$M, _temp2$h;
  function mapIconSize(size2) {
    return {
      large: "small",
      medium: "xs",
      small: "xs"
    }[size2];
  }
  var Button$1 = (_temp2$h = _class$M = function(_Component) {
    _default$4(Button2, _Component);
    function Button2() {
      var _temp3, _this2, _ret;
      _default$7(this, Button2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _Component.call.apply(_Component, [this].concat(args))), _this2), _this2.onMouseUp = function(e2) {
        _this2.button.blur();
        if (_this2.props.onMouseUp) {
          _this2.props.onMouseUp(e2);
        }
      }, _this2.buttonRefHandler = function(button) {
        _this2.button = button;
      }, _temp3), _default$5(_this2, _ret);
    }
    Button2.prototype.render = function render2() {
      var _btnClsObj;
      var _props = this.props, prefix = _props.prefix, className = _props.className, type2 = _props.type, size2 = _props.size, htmlType = _props.htmlType, loading = _props.loading, text = _props.text, warning2 = _props.warning, ghost = _props.ghost, component = _props.component, iconSize = _props.iconSize, icons = _props.icons, disabled = _props.disabled, onClick3 = _props.onClick, children = _props.children, rtl = _props.rtl, others = _default$3(_props, ["prefix", "className", "type", "size", "htmlType", "loading", "text", "warning", "ghost", "component", "iconSize", "icons", "disabled", "onClick", "children", "rtl"]);
      var ghostType = ["light", "dark"].indexOf(ghost) >= 0 ? ghost : "dark";
      var btnClsObj = (_btnClsObj = {}, _btnClsObj[prefix + "btn"] = true, _btnClsObj["" + prefix + size2] = size2, _btnClsObj[prefix + "btn-" + type2] = type2 && !ghost, _btnClsObj[prefix + "btn-text"] = text, _btnClsObj[prefix + "btn-warning"] = warning2, _btnClsObj[prefix + "btn-loading"] = loading, _btnClsObj[prefix + "btn-ghost"] = ghost, _btnClsObj[prefix + "btn-" + ghostType] = ghost, _btnClsObj[className] = className, _btnClsObj);
      var loadingIcon = null;
      if (icons && icons.loading && React.isValidElement(icons.loading)) {
        var _classNames;
        if (loading) {
          delete btnClsObj[prefix + "btn-loading"];
          btnClsObj[prefix + "btn-custom-loading"] = true;
        }
        var loadingSize = iconSize || mapIconSize(size2);
        loadingIcon = React.cloneElement(icons.loading, {
          className: classnames((_classNames = {}, _classNames[prefix + "btn-custom-loading-icon"] = true, _classNames.show = loading, _classNames)),
          size: loadingSize
        });
      }
      var count = React.Children.count(children);
      var clonedChildren = React.Children.map(children, function(child, index2) {
        if (child && ["function", "object"].indexOf(_default$6(child.type)) > -1 && child.type._typeMark === "icon") {
          var _classNames2;
          var iconCls = classnames((_classNames2 = {}, _classNames2[prefix + "btn-icon"] = !iconSize, _classNames2[prefix + "btn-icon-size"] = iconSize, _classNames2[prefix + "icon-first"] = count > 1 && index2 === 0, _classNames2[prefix + "icon-last"] = count > 1 && index2 === count - 1, _classNames2[prefix + "icon-alone"] = count === 1, _classNames2[child.props.className] = !!child.props.className, _classNames2));
          if ("size" in child.props) {
            log.warning('The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size="' + child.props.size + '" /></Button>), use <Button iconSize="' + child.props.size + '"> or <Button><div><Icon size="' + child.props.size + '" /></div></Button> instead of.');
          }
          return React.cloneElement(child, {
            className: iconCls,
            size: iconSize || mapIconSize(size2)
          });
        }
        if (!React.isValidElement(child)) {
          return React.createElement(
            "span",
            { className: prefix + "btn-helper" },
            child
          );
        }
        return child;
      });
      var TagName = component;
      var tagAttrs = _default$8({}, obj.pickOthers(Object.keys(Button2.propTypes), others), {
        type: htmlType,
        disabled,
        onClick: onClick3,
        className: classnames(btnClsObj)
      });
      if (TagName !== "button") {
        delete tagAttrs.type;
        if (tagAttrs.disabled) {
          delete tagAttrs.onClick;
          tagAttrs.href && delete tagAttrs.href;
        }
      }
      return React.createElement(
        TagName,
        _default$8({}, tagAttrs, { dir: rtl ? "rtl" : void 0, onMouseUp: this.onMouseUp, ref: this.buttonRefHandler }),
        loadingIcon,
        clonedChildren
      );
    };
    return Button2;
  }(React.Component), _class$M.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    /**
     * 按钮的类型
     */
    type: PropTypes$1.oneOf(["primary", "secondary", "normal"]),
    /**
     * 按钮的尺寸
     */
    size: PropTypes$1.oneOf(["small", "medium", "large"]),
    /**
     * 按钮中可配置的 Icon，格式为 { loading: <Icon type="loading" /> }
     */
    icons: PropTypes$1.shape({
      loading: PropTypes$1.node
    }),
    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
     */
    iconSize: PropTypes$1.oneOfType([PropTypes$1.oneOf(["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl", "inherit"]), PropTypes$1.number]),
    /**
     * 当 component = 'button' 时，设置 button 标签的 type 值
     */
    htmlType: PropTypes$1.oneOf(["submit", "reset", "button"]),
    /**
     * 设置标签类型
     */
    component: PropTypes$1.oneOf(["button", "a", "div", "span"]),
    /**
     * 设置按钮的载入状态
     */
    loading: PropTypes$1.bool,
    /**
     * 是否为幽灵按钮
     */
    ghost: PropTypes$1.oneOf([true, false, "light", "dark"]),
    /**
     * 是否为文本按钮
     */
    text: PropTypes$1.bool,
    /**
     * 是否为警告按钮
     */
    warning: PropTypes$1.bool,
    /**
     * 是否禁用
     */
    disabled: PropTypes$1.bool,
    /**
     * 点击按钮的回调
     * @param {Object} e Event Object
     */
    onClick: PropTypes$1.func,
    className: PropTypes$1.string,
    onMouseUp: PropTypes$1.func,
    children: PropTypes$1.node
  }), _class$M.defaultProps = {
    prefix: "next-",
    type: "normal",
    size: "medium",
    icons: {},
    htmlType: "button",
    component: "button",
    loading: false,
    ghost: false,
    text: false,
    warning: false,
    disabled: false,
    onClick: function onClick2() {
    }
  }, _temp2$h);
  Button$1.displayName = "Button";
  var _class$L, _temp$u;
  var ButtonGroup = (_temp$u = _class$L = function(_Component) {
    _default$4(ButtonGroup2, _Component);
    function ButtonGroup2() {
      _default$7(this, ButtonGroup2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    ButtonGroup2.prototype.render = function render2() {
      var _classNames;
      var _props = this.props, prefix = _props.prefix, className = _props.className, size2 = _props.size, children = _props.children, rtl = _props.rtl, others = _default$3(_props, ["prefix", "className", "size", "children", "rtl"]);
      var groupCls = classnames((_classNames = {}, _classNames[prefix + "btn-group"] = true, _classNames[className] = className, _classNames));
      var cloneChildren = React.Children.map(children, function(child) {
        if (child) {
          return React.cloneElement(child, {
            size: size2
          });
        }
      });
      if (rtl) {
        others.dir = "rtl";
      }
      return React.createElement(
        "div",
        _default$8({}, others, { className: groupCls }),
        cloneChildren
      );
    };
    return ButtonGroup2;
  }(React.Component), _class$L.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    rtl: PropTypes$1.bool,
    prefix: PropTypes$1.string,
    /**
     * 统一设置 Button 组件的按钮大小
     */
    size: PropTypes$1.string,
    className: PropTypes$1.string,
    children: PropTypes$1.node
  }), _class$L.defaultProps = {
    prefix: "next-",
    size: "medium"
  }, _temp$u);
  ButtonGroup.displayName = "ButtonGroup";
  const ButtonGroup$1 = ConfigProvider$1.config(ButtonGroup);
  Button$1.Group = ButtonGroup$1;
  const Button = ConfigProvider$1.config(Button$1, {
    transform: (
      /* istanbul ignore next */
      function transform6(props, deprecated2) {
        if ("shape" in props) {
          deprecated2("shape", "text | warning | ghost", "Button");
          var _props = props, shape = _props.shape, type2 = _props.type, others = _default$3(_props, ["shape", "type"]);
          var newType = type2;
          if (type2 === "light" || type2 === "dark" || type2 === "secondary" && shape === "warning") {
            newType = "normal";
          }
          var ghost = void 0;
          if (shape === "ghost") {
            ghost = {
              primary: "dark",
              secondary: "dark",
              normal: "light",
              dark: "dark",
              light: "light"
            }[type2 || Button$1.defaultProps.type];
          }
          var text = shape === "text";
          var warning2 = shape === "warning";
          props = _default$8({ type: newType, ghost, text, warning: warning2 }, others);
        }
        return props;
      }
    )
  });
  var _class$K, _temp2$g;
  var Base$1 = (_temp2$g = _class$K = function(_React$Component) {
    _default$4(Base2, _React$Component);
    function Base2() {
      var _temp3, _this2, _ret;
      _default$7(this, Base2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.handleCompositionStart = function(e2) {
        _this2.setState({
          composition: true
        });
        _this2.props.onCompositionStart(e2);
      }, _this2.handleCompositionEnd = function(e2) {
        _this2.setState({
          composition: false
        });
        _this2.props.onCompositionEnd(e2);
        var value = e2.target.value;
        _this2.props.onChange(value, e2);
      }, _this2.saveRef = function(input) {
        _this2.inputRef = input;
      }, _temp3), _default$5(_this2, _ret);
    }
    Base2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && nextProps.value !== prevState.value && !prevState.composition) {
        var value = nextProps.value;
        return {
          value: value === void 0 || value === null ? "" : value
        };
      }
      return null;
    };
    Base2.prototype.ieHack = function ieHack(value) {
      return value;
    };
    Base2.prototype.onChange = function onChange6(e2) {
      if ("stopPropagation" in e2) {
        e2.stopPropagation();
      } else if ("cancelBubble" in e2) {
        e2.cancelBubble();
      }
      var value = e2.target.value;
      if (this.props.trim) {
        value = value.trim();
      }
      value = this.ieHack(value);
      if (!("value" in this.props) || this.state.composition) {
        this.setState({
          value
        });
      }
      if (this.state.composition) {
        return;
      }
      if (value && this.props.htmlType === "number") {
        value = Number(value);
      }
      this.props.onChange(value, e2);
    };
    Base2.prototype.onKeyDown = function onKeyDown(e2) {
      var value = e2.target.value;
      var maxLength = this.props.maxLength;
      var len = maxLength > 0 && value ? this.getValueLength(value) : 0;
      var opts = {};
      if (this.props.trim && e2.keyCode === 32) {
        opts.beTrimed = true;
      }
      if (maxLength > 0 && (len > maxLength + 1 || (len === maxLength || len === maxLength + 1) && e2.keyCode !== 8 && e2.keyCode !== 46)) {
        opts.overMaxLength = true;
      }
      this.props.onKeyDown(e2, opts);
    };
    Base2.prototype.onFocus = function onFocus(e2) {
      this.setState({
        focus: true
      });
      this.props.onFocus(e2);
    };
    Base2.prototype.onBlur = function onBlur(e2) {
      this.setState({
        focus: false
      });
      this.props.onBlur(e2);
    };
    Base2.prototype.renderLength = function renderLength() {
      var _classNames;
      var _props = this.props, maxLength = _props.maxLength, showLimitHint = _props.showLimitHint, prefix = _props.prefix, rtl = _props.rtl;
      var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;
      var classesLenWrap = classnames((_classNames = {}, _classNames[prefix + "input-len"] = true, _classNames[prefix + "error"] = len > maxLength, _classNames));
      var content = rtl ? maxLength + "/" + len : len + "/" + maxLength;
      return maxLength && showLimitHint ? React.createElement(
        "span",
        { className: classesLenWrap },
        content
      ) : null;
    };
    Base2.prototype.renderControl = function renderControl() {
      var _this2 = this;
      var lenWrap = this.renderLength();
      return lenWrap ? React.createElement(
        "span",
        { onClick: function onClick3() {
          return _this2.focus();
        }, className: this.props.prefix + "input-control" },
        lenWrap
      ) : null;
    };
    Base2.prototype.getClass = function getClass() {
      var _classNames2;
      var _props2 = this.props, disabled = _props2.disabled, state = _props2.state, prefix = _props2.prefix;
      return classnames((_classNames2 = {}, _classNames2[prefix + "input"] = true, _classNames2[prefix + "disabled"] = !!disabled, _classNames2[prefix + "error"] = state === "error", _classNames2[prefix + "warning"] = state === "warning", _classNames2[prefix + "focus"] = this.state.focus, _classNames2));
    };
    Base2.prototype.getProps = function getProps() {
      var _props3 = this.props, placeholder = _props3.placeholder, inputStyle = _props3.inputStyle, disabled = _props3.disabled, readOnly = _props3.readOnly, cutString = _props3.cutString, maxLength = _props3.maxLength, name = _props3.name, onCompositionStart = _props3.onCompositionStart, onCompositionEnd = _props3.onCompositionEnd;
      var props = {
        style: inputStyle,
        placeholder,
        disabled,
        readOnly,
        name,
        maxLength: cutString ? maxLength : void 0,
        value: this.state.value,
        onChange: this.onChange.bind(this),
        onBlur: this.onBlur.bind(this),
        onFocus: this.onFocus.bind(this),
        onCompositionStart,
        onCompositionEnd
      };
      if (disabled) {
        props["aria-disabled"] = disabled;
      }
      return props;
    };
    Base2.prototype.getInputNode = function getInputNode() {
      return this.inputRef;
    };
    Base2.prototype.focus = function focus2(start, end) {
      var preventScroll = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      this.inputRef.focus({ preventScroll });
      if (typeof start === "number") {
        this.inputRef.selectionStart = start;
      }
      if (typeof end === "number") {
        this.inputRef.selectionEnd = end;
      }
    };
    return Base2;
  }(React.Component), _class$K.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 当前值
     */
    value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * 初始化值
     */
    defaultValue: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * 发生改变的时候触发的回调
     * @param {String} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: PropTypes$1.func,
    /**
     * 键盘按下的时候触发的回调
     * @param {Event} e DOM事件对象
     * @param {Object} opts 可扩展的附加信息：<br> - opts.overMaxLength: {Boolean} 已超出最大长度<br> - opts.beTrimed: {Boolean} 输入的空格被清理
     */
    onKeyDown: PropTypes$1.func,
    /**
     * 禁用状态
     */
    disabled: PropTypes$1.bool,
    /**
     * 最大长度
     */
    maxLength: PropTypes$1.number,
    /**
     * 是否展现最大长度样式（旧版本为 hasLimitHint，目前仍兼容旧用法，将在2.x直接废弃）
     */
    showLimitHint: PropTypes$1.bool,
    /**
     * 当设置了maxLength时，是否截断超出字符串
     */
    cutString: PropTypes$1.bool,
    /**
     * 只读
     */
    readOnly: PropTypes$1.bool,
    /**
     * onChange返回会自动去除头尾空字符
     */
    trim: PropTypes$1.bool,
    /**
     * 输入提示
     */
    placeholder: PropTypes$1.string,
    /**
     * 获取焦点时候触发的回调
     * @param {Event} e DOM事件对象
     */
    onFocus: PropTypes$1.func,
    /**
     * 失去焦点时候触发的回调
     * @param {Event} e DOM事件对象
     */
    onBlur: PropTypes$1.func,
    /**
     * 自定义字符串计算长度方式
     * @param {String} value 数据
     * @returns {Number} 自定义长度
     */
    getValueLength: PropTypes$1.func,
    inputStyle: PropTypes$1.object,
    /**
     * 自定义class
     */
    className: PropTypes$1.string,
    /**
     * 自定义内联样式
     */
    style: PropTypes$1.object,
    /**
     * 原生type
     */
    htmlType: PropTypes$1.string,
    /**
     * name
     */
    name: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    state: PropTypes$1.oneOf(["error", "loading", "success", "warning"]),
    locale: PropTypes$1.object,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: PropTypes$1.func,
    /**
     * 尺寸
     * @enumdesc 小, 中, 大
     */
    size: PropTypes$1.oneOf(["small", "medium", "large"]),
    /**
     * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
     * @version 1.23
     */
    composition: PropTypes$1.bool,
    onCompositionStart: PropTypes$1.func,
    onCompositionEnd: PropTypes$1.func
  }), _class$K.defaultProps = {
    disabled: false,
    prefix: "next-",
    size: "medium",
    maxLength: null,
    showLimitHint: false,
    cutString: true,
    readOnly: false,
    isPreview: false,
    trim: false,
    composition: false,
    onFocus: func.noop,
    onBlur: func.noop,
    onChange: func.noop,
    onKeyDown: func.noop,
    getValueLength: func.noop,
    onCompositionStart: func.noop,
    onCompositionEnd: func.noop,
    locale: defaultLocale.Input
  }, _temp2$g);
  Base$1.displayName = "Base";
  const Base$2 = polyfill(Base$1);
  var _class$J, _temp$t;
  var Group = (_temp$t = _class$J = function(_React$Component) {
    _default$4(Group2, _React$Component);
    function Group2() {
      _default$7(this, Group2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Group2.prototype.render = function render2() {
      var _classNames, _classNames2, _classNames3;
      var _props = this.props, className = _props.className, style = _props.style, children = _props.children, prefix = _props.prefix, addonBefore = _props.addonBefore, addonAfter = _props.addonAfter, addonBeforeClassName = _props.addonBeforeClassName, addonAfterClassName = _props.addonAfterClassName, rtl = _props.rtl, disabled = _props.disabled, others = _default$3(_props, ["className", "style", "children", "prefix", "addonBefore", "addonAfter", "addonBeforeClassName", "addonAfterClassName", "rtl", "disabled"]);
      var cls = classnames((_classNames = {}, _classNames[prefix + "input-group"] = true, _classNames[prefix + "disabled"] = disabled, _classNames[className] = !!className, _classNames));
      var addonCls = prefix + "input-group-addon";
      var beforeCls = classnames(addonCls, (_classNames2 = {}, _classNames2[prefix + "before"] = true, _classNames2[addonBeforeClassName] = addonBeforeClassName, _classNames2));
      var afterCls = classnames(addonCls, (_classNames3 = {}, _classNames3[prefix + "after"] = true, _classNames3[addonAfterClassName] = addonAfterClassName, _classNames3));
      var before = addonBefore ? React.createElement(
        "span",
        { className: beforeCls },
        addonBefore
      ) : null;
      var after = addonAfter ? React.createElement(
        "span",
        { className: afterCls },
        addonAfter
      ) : null;
      return React.createElement(
        "span",
        _default$8({}, others, { disabled, dir: rtl ? "rtl" : void 0, className: cls, style }),
        before,
        children,
        after
      );
    };
    return Group2;
  }(React.Component), _class$J.displayName = "Group", _class$J.propTypes = {
    /**
     * 样式前缀
     */
    prefix: PropTypes$1.string,
    className: PropTypes$1.string,
    style: PropTypes$1.object,
    children: PropTypes$1.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: PropTypes$1.node,
    /**
     * 输入框前附加内容css
     */
    addonBeforeClassName: PropTypes$1.string,
    /**
     * 输入框后附加内容
     */
    addonAfter: PropTypes$1.node,
    /**
     * 输入框后额外css
     */
    addonAfterClassName: PropTypes$1.string,
    /**
     * rtl
     */
    rtl: PropTypes$1.bool
  }, _class$J.defaultProps = {
    prefix: "next-"
  }, _temp$t);
  Group.displayName = "Group";
  const Group$1 = ConfigProvider$1.config(Group);
  var _class$I, _temp$s;
  function preventDefault$2(e2) {
    e2.preventDefault();
  }
  var Input$1 = (_temp$s = _class$I = function(_Base) {
    _default$4(Input2, _Base);
    function Input2(props) {
      _default$7(this, Input2);
      var _this2 = _default$5(this, _Base.call(this, props));
      _this2.handleKeyDown = function(e2) {
        if (e2.keyCode === 13) {
          _this2.props.onPressEnter(e2);
        }
        _this2.onKeyDown(e2);
      };
      _this2.handleKeyDownFromClear = function(e2) {
        if (e2.keyCode === 13) {
          _this2.onClear(e2);
        }
      };
      var value = void 0;
      if ("value" in props) {
        value = props.value;
      } else {
        value = props.defaultValue;
      }
      _this2.state = {
        value: typeof value === "undefined" ? "" : value
      };
      return _this2;
    }
    Input2.prototype.getValueLength = function getValueLength(value) {
      var nv = "" + value;
      var strLen = this.props.getValueLength(nv);
      if (typeof strLen !== "number") {
        strLen = nv.length;
      }
      return strLen;
    };
    Input2.prototype.renderControl = function renderControl() {
      var _this2 = this;
      var _props = this.props, hasClear = _props.hasClear, readOnly = _props.readOnly, state = _props.state, prefix = _props.prefix, hint = _props.hint, extra = _props.extra, locale = _props.locale, disabled = _props.disabled, hoverShowClear = _props.hoverShowClear;
      var lenWrap = this.renderLength();
      var stateWrap = null;
      if (state === "success") {
        stateWrap = React.createElement(Icon, { type: "success-filling", className: prefix + "input-success-icon" });
      } else if (state === "loading") {
        stateWrap = React.createElement(Icon, { type: "loading", className: prefix + "input-loading-icon" });
      } else if (state === "warning") {
        stateWrap = React.createElement(Icon, { type: "warning", className: prefix + "input-warning-icon" });
      }
      var clearWrap = null;
      var showClear = hasClear && !readOnly && !!("" + this.state.value) && !disabled;
      if (hint || showClear) {
        var hintIcon = null;
        if (hint) {
          if (typeof hint === "string") {
            hintIcon = React.createElement(Icon, { type: hint, className: prefix + "input-hint" });
          } else if (React.isValidElement(hint)) {
            hintIcon = React.cloneElement(hint, {
              className: classnames(hint.props.className, prefix + "input-hint")
            });
          } else {
            hintIcon = hint;
          }
        } else {
          var _classNames;
          var cls = classnames((_classNames = {}, _classNames[prefix + "input-hint"] = true, _classNames[prefix + "input-clear-icon"] = true, _classNames[prefix + "input-hover-show"] = hoverShowClear, _classNames));
          hintIcon = React.createElement(Icon, {
            type: "delete-filling",
            role: "button",
            tabIndex: "0",
            className: cls,
            "aria-label": locale.clear,
            onClick: this.onClear.bind(this),
            onMouseDown: preventDefault$2,
            onKeyDown: this.handleKeyDownFromClear
          });
        }
        clearWrap = React.createElement(
          "span",
          { className: prefix + "input-hint-wrap" },
          hasClear && hint ? React.createElement(Icon, {
            type: "delete-filling",
            role: "button",
            tabIndex: "0",
            className: prefix + "input-clear " + prefix + "input-clear-icon",
            "aria-label": locale.clear,
            onClick: this.onClear.bind(this),
            onMouseDown: preventDefault$2,
            onKeyDown: this.handleKeyDownFromClear
          }) : null,
          hintIcon
        );
      }
      if (state === "loading") {
        clearWrap = null;
      }
      return clearWrap || lenWrap || stateWrap || extra ? React.createElement(
        "span",
        { onClick: function onClick3() {
          return _this2.focus();
        }, className: prefix + "input-control" },
        clearWrap,
        lenWrap,
        stateWrap,
        extra
      ) : null;
    };
    Input2.prototype.renderLabel = function renderLabel() {
      var _props2 = this.props, label = _props2.label, prefix = _props2.prefix, id2 = _props2.id;
      return label ? React.createElement(
        "label",
        { className: prefix + "input-label", htmlFor: id2 },
        label
      ) : null;
    };
    Input2.prototype.renderInner = function renderInner(inner, cls) {
      return inner ? React.createElement(
        "span",
        { className: cls },
        inner
      ) : null;
    };
    Input2.prototype.onClear = function onClear(e2) {
      if (this.props.disabled) {
        return;
      }
      if (!("value" in this.props)) {
        this.setState({
          value: ""
        });
      }
      this.props.onChange("", e2, "clear");
      this.focus();
    };
    Input2.prototype.render = function render2() {
      var _classNames2, _classNames3, _classNames4, _classNames5, _classNames6, _classNames7, _classNames8;
      var _props3 = this.props, size2 = _props3.size, htmlType = _props3.htmlType, htmlSize = _props3.htmlSize, autoComplete = _props3.autoComplete, autoFocus = _props3.autoFocus, disabled = _props3.disabled, style = _props3.style, innerBefore = _props3.innerBefore, innerAfter = _props3.innerAfter, innerBeforeClassName = _props3.innerBeforeClassName, innerAfterClassName = _props3.innerAfterClassName, className = _props3.className, hasBorder = _props3.hasBorder, prefix = _props3.prefix, isPreview = _props3.isPreview, renderPreview = _props3.renderPreview, addonBefore = _props3.addonBefore, addonAfter = _props3.addonAfter, addonTextBefore = _props3.addonTextBefore, addonTextAfter = _props3.addonTextAfter, inputRender2 = _props3.inputRender, rtl = _props3.rtl, composition = _props3.composition;
      var hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
      var cls = classnames(this.getClass(), (_classNames2 = {}, _classNames2["" + prefix + size2] = true, _classNames2[prefix + "hidden"] = this.props.htmlType === "hidden", _classNames2[prefix + "noborder"] = !hasBorder || this.props.htmlType === "file", _classNames2[prefix + "input-group-auto-width"] = hasAddon, _classNames2[prefix + "disabled"] = disabled, _classNames2[className] = !!className && !hasAddon, _classNames2));
      var innerCls = prefix + "input-inner";
      var innerBeforeCls = classnames((_classNames3 = {}, _classNames3[innerCls] = true, _classNames3[prefix + "before"] = true, _classNames3[innerBeforeClassName] = innerBeforeClassName, _classNames3));
      var innerAfterCls = classnames((_classNames4 = {}, _classNames4[innerCls] = true, _classNames4[prefix + "after"] = true, _classNames4[prefix + "input-inner-text"] = typeof innerAfter === "string", _classNames4[innerAfterClassName] = innerAfterClassName, _classNames4));
      var previewCls = classnames((_classNames5 = {}, _classNames5[prefix + "form-preview"] = true, _classNames5[className] = !!className, _classNames5));
      var props = this.getProps();
      var dataProps = obj.pickAttrsWith(this.props, "data-");
      var others = obj.pickOthers(_default$8({}, dataProps, Input2.propTypes), this.props);
      if (isPreview) {
        var value = props.value;
        var label = this.props.label;
        if (typeof renderPreview === "function") {
          return React.createElement(
            "div",
            _default$8({}, others, { className: previewCls }),
            renderPreview(value, this.props)
          );
        }
        return React.createElement(
          "div",
          _default$8({}, others, { className: previewCls }),
          addonBefore || addonTextBefore,
          label,
          innerBefore,
          value,
          innerAfter,
          addonAfter || addonTextAfter
        );
      }
      var compositionProps = {};
      if (composition) {
        compositionProps.onCompositionStart = this.handleCompositionStart;
        compositionProps.onCompositionEnd = this.handleCompositionEnd;
      }
      var inputEl = React.createElement("input", _default$8({}, others, props, compositionProps, {
        height: "100%",
        type: htmlType,
        size: htmlSize,
        autoFocus,
        autoComplete,
        onKeyDown: this.handleKeyDown,
        ref: this.saveRef
      }));
      var inputWrap = React.createElement(
        "span",
        _default$8({}, dataProps, { dir: rtl ? "rtl" : void 0, className: cls, style: hasAddon ? void 0 : style }),
        this.renderLabel(),
        this.renderInner(innerBefore, innerBeforeCls),
        inputRender2(inputEl),
        this.renderInner(innerAfter, innerAfterCls),
        this.renderControl()
      );
      var groupCls = classnames((_classNames6 = {}, _classNames6[prefix + "input-group-text"] = true, _classNames6["" + prefix + size2] = !!size2, _classNames6[prefix + "disabled"] = disabled, _classNames6));
      var addonBeforeCls = classnames((_classNames7 = {}, _classNames7[groupCls] = addonTextBefore, _classNames7));
      var addonAfterCls = classnames((_classNames8 = {}, _classNames8[groupCls] = addonTextAfter, _classNames8));
      if (hasAddon) {
        return React.createElement(
          Group$1,
          _default$8({}, dataProps, {
            prefix,
            className,
            style,
            disabled,
            addonBefore: addonBefore || addonTextBefore,
            addonBeforeClassName: addonBeforeCls,
            addonAfter: addonAfter || addonTextAfter,
            addonAfterClassName: addonAfterCls
          }),
          inputWrap
        );
      }
      return inputWrap;
    };
    return Input2;
  }(Base$2), _class$I.displayName = "Input", _class$I.getDerivedStateFromProps = Base$2.getDerivedStateFromProps, _class$I.propTypes = _default$8({}, Base$2.propTypes, {
    /**
     * label
     */
    label: PropTypes$1.node,
    /**
     * 是否出现clear按钮
     */
    hasClear: PropTypes$1.bool,
    /**
     * 是否有边框
     */
    hasBorder: PropTypes$1.bool,
    /**
     * 状态
     * @enumdesc 错误, 校验中, 成功, 警告
     */
    state: PropTypes$1.oneOf(["error", "loading", "success", "warning"]),
    /**
     * 按下回车的回调
     */
    onPressEnter: PropTypes$1.func,
    /**
     * 原生type
     */
    htmlType: PropTypes$1.string,
    htmlSize: PropTypes$1.string,
    /**
     * 水印 (Icon的type类型，和hasClear占用一个地方)
     */
    hint: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
    /**
     * 文字前附加内容
     */
    innerBefore: PropTypes$1.node,
    /**
     * 文字后附加内容
     */
    innerAfter: PropTypes$1.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: PropTypes$1.node,
    /**
     * 输入框后附加内容
     */
    addonAfter: PropTypes$1.node,
    /**
     * 输入框前附加文字
     */
    addonTextBefore: PropTypes$1.node,
    /**
     * 输入框后附加文字
     */
    addonTextAfter: PropTypes$1.node,
    /**
     * (原生input支持)
     */
    autoComplete: PropTypes$1.string,
    /**
     * 自动聚焦(原生input支持)
     */
    autoFocus: PropTypes$1.bool,
    inputRender: PropTypes$1.func,
    extra: PropTypes$1.node,
    innerBeforeClassName: PropTypes$1.string,
    innerAfterClassName: PropTypes$1.string,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: PropTypes$1.func,
    /**
     * hover展示clear (配合 hasClear=true使用)
     * @version 1.24
     */
    hoverShowClear: PropTypes$1.bool
  }), _class$I.defaultProps = _default$8({}, Base$2.defaultProps, {
    autoComplete: "off",
    hasBorder: true,
    isPreview: false,
    hoverShowClear: false,
    onPressEnter: func.noop,
    inputRender: function inputRender(el) {
      return el;
    }
  }), _temp$s);
  const Input$2 = Input$1;
  var _class$H, _temp2$f;
  function preventDefault$1(e2) {
    e2.preventDefault();
  }
  var Password = (_temp2$f = _class$H = function(_Input) {
    _default$4(Password2, _Input);
    function Password2() {
      var _temp3, _this2, _ret;
      _default$7(this, Password2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _Input.call.apply(_Input, [this].concat(args))), _this2), _this2.state = {
        hint: "eye-close",
        htmlType: "password"
      }, _this2.toggleEye = function(e2) {
        e2.preventDefault();
        if (_this2.props.disabled)
          return;
        var eyeClose = _this2.state.hint === "eye";
        _this2.setState({
          hint: eyeClose ? "eye-close" : "eye",
          htmlType: eyeClose || !_this2.props.showToggle ? "password" : "text"
        });
      }, _temp3), _default$5(_this2, _ret);
    }
    Password2.prototype.render = function render2() {
      var _props = this.props, showToggle = _props.showToggle, others = _default$3(_props, ["showToggle"]);
      var _state = this.state, hint = _state.hint, htmlType = _state.htmlType;
      var extra = showToggle ? React.createElement(Icon, { type: hint, onClick: this.toggleEye, onMouseDown: preventDefault$1 }) : null;
      return React.createElement(Input$2, _default$8({}, others, { extra, htmlType }));
    };
    return Password2;
  }(Input$2), _class$H.displayName = "Password", _class$H.getDerivedStateFromProps = Input$2.getDerivedStateFromProps, _class$H.propTypes = _default$8({}, Input$2.propTypes, {
    /**
     * 是否展示切换按钮
     */
    showToggle: PropTypes$1.bool
  }), _class$H.defaultProps = _default$8({}, Input$2.defaultProps, {
    showToggle: true
  }), _temp2$f);
  var _class$G, _temp$r, _initialiseProps$1;
  function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
      return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
  }
  function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(nextFrameId);
    } else {
      window.clearTimeout(nextFrameId);
    }
  }
  var isMacSafari = typeof navigator !== "undefined" && navigator && navigator.userAgent ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i) : false;
  var hiddenStyle = {
    visibility: "hidden",
    position: "absolute",
    zIndex: "-1000",
    top: "-1000px",
    overflowY: "hidden",
    left: 0,
    right: 0
  };
  var TextArea = (_temp$r = _class$G = function(_Base) {
    _default$4(TextArea2, _Base);
    function TextArea2(props) {
      _default$7(this, TextArea2);
      var _this2 = _default$5(this, _Base.call(this, props));
      _initialiseProps$1.call(_this2);
      var value = void 0;
      if ("value" in props) {
        value = props.value;
      } else {
        value = props.defaultValue;
      }
      _this2.state = {
        value: typeof value === "undefined" || value === null ? "" : value
      };
      return _this2;
    }
    TextArea2.prototype.componentDidMount = function componentDidMount() {
      var autoHeight = this.props.autoHeight;
      if (autoHeight) {
        if ((typeof autoHeight === "undefined" ? "undefined" : _default$6(autoHeight)) === "object") {
          this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
        } else {
          this.setState({
            height: this._getHeight(this.state.value),
            overflowY: "hidden"
          });
        }
      }
    };
    TextArea2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.autoHeight && (this.props.value !== prevProps.value || this.props.isPreview !== prevProps.isPreview)) {
        this._resizeTextArea(this.props.value);
      }
    };
    TextArea2.prototype._getMinMaxHeight = function _getMinMaxHeight(_ref, value) {
      var minRows = _ref.minRows, maxRows = _ref.maxRows;
      var node = ReactDOM.findDOMNode(this.helpRef);
      if (!node) {
        return {};
      }
      node.setAttribute("rows", minRows);
      var minHeight = node.clientHeight;
      node.setAttribute("rows", maxRows);
      var maxHeight = node.clientHeight;
      node.setAttribute("rows", "1");
      var height = this._getHeight(value);
      return {
        minHeight,
        maxHeight,
        height,
        overflowY: height <= maxHeight ? "hidden" : void 0
      };
    };
    TextArea2.prototype._getHeight = function _getHeight(value) {
      var node = ReactDOM.findDOMNode(this.helpRef);
      if (!node) {
        return 0;
      }
      node.value = value;
      return node.scrollHeight;
    };
    TextArea2.prototype.ieHack = function ieHack(value) {
      if (env.ieVersion === 9 && this.props.maxLength) {
        var maxLength = parseInt(this.props.maxLength);
        var len = this.getValueLength(value, true);
        if (len > maxLength && this.props.cutString) {
          value = value.replace(/\n/g, "\n\n");
          value = value.substr(0, maxLength);
          value = value.replace(/\n\n/g, "\n");
        }
      }
      this.props.autoHeight && this._resizeTextArea(value);
      return value;
    };
    TextArea2.prototype.getValueLength = function getValueLength(value) {
      var _props = this.props, maxLength = _props.maxLength, cutString = _props.cutString;
      var nv = "" + value;
      var strLen = this.props.getValueLength(nv);
      if (typeof strLen !== "number") {
        strLen = nv.length;
      }
      if (env.ieVersion || isMacSafari) {
        strLen = strLen + nv.split("\n").length - 1;
        if (strLen > maxLength && cutString) {
          strLen = maxLength;
        }
      }
      return strLen;
    };
    TextArea2.prototype.saveTextAreaRef = function saveTextAreaRef(textArea) {
      this.inputRef = textArea;
    };
    TextArea2.prototype.saveHelpRef = function saveHelpRef(ref) {
      this.helpRef = ref;
    };
    TextArea2.prototype.render = function render2() {
      var _classNames, _classNames2;
      var _props2 = this.props, rows = _props2.rows, style = _props2.style, className = _props2.className, autoHeight = _props2.autoHeight, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, prefix = _props2.prefix, rtl = _props2.rtl, hasBorder = _props2.hasBorder, size2 = _props2.size, composition = _props2.composition;
      var cls = classnames(this.getClass(), (_classNames = {}, _classNames["" + prefix + size2] = size2 === "large" || false, _classNames[prefix + "input-textarea"] = true, _classNames[prefix + "noborder"] = !hasBorder, _classNames[className] = !!className, _classNames));
      var props = this.getProps();
      var dataProps = obj.pickAttrsWith(this.props, "data-");
      var others = obj.pickOthers(_default$8({}, dataProps, TextArea2.propTypes), this.props);
      var textareStyle = _default$8({}, props.style, {
        height: this.state.height,
        minHeight: this.state.minHeight,
        maxHeight: this.state.maxHeight,
        overflowY: this.state.overflowY
      });
      var previewCls = classnames((_classNames2 = {}, _classNames2[prefix + "input-textarea"] = true, _classNames2[prefix + "form-preview"] = true, _classNames2[className] = !!className, _classNames2));
      var wrapStyle = autoHeight ? _default$8({}, style, { position: "relative" }) : style;
      if (isPreview) {
        var value = props.value;
        if ("renderPreview" in this.props) {
          return React.createElement(
            "div",
            _default$8({}, others, { className: previewCls }),
            renderPreview(value, this.props)
          );
        }
        return React.createElement(
          "div",
          _default$8({}, others, { className: previewCls }),
          value.split("\n").map(function(data, i) {
            return React.createElement(
              "p",
              { key: "p-" + i },
              data
            );
          })
        );
      }
      var compositionProps = {};
      if (composition) {
        compositionProps.onCompositionStart = this.handleCompositionStart;
        compositionProps.onCompositionEnd = this.handleCompositionEnd;
      }
      return React.createElement(
        "span",
        _default$8({ className: cls, style: wrapStyle, dir: rtl ? "rtl" : void 0 }, dataProps),
        React.createElement("textarea", _default$8({}, others, props, compositionProps, {
          "data-real": true,
          rows,
          style: textareStyle,
          ref: this.saveRef.bind(this),
          onKeyDown: this.onKeyDown.bind(this)
        })),
        autoHeight ? React.createElement("textarea", {
          "data-fake": true,
          ref: this.saveHelpRef.bind(this),
          style: _default$8({}, props.style, hiddenStyle),
          rows: "1"
        }) : null,
        this.renderControl()
      );
    };
    return TextArea2;
  }(Base$2), _class$G.displayName = "TextArea", _class$G.getDerivedStateFromProps = Base$2.getDerivedStateFromProps, _class$G.propTypes = _default$8({}, Base$2.propTypes, {
    /**
     * 是否有边框
     */
    hasBorder: PropTypes$1.bool,
    /**
     * 状态
     * @enumdesc 错误
     */
    state: PropTypes$1.oneOf(["error", "warning"]),
    /**
     * 自动高度 true / {minRows: 2, maxRows: 4}
     */
    autoHeight: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
    /**
     * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows: PropTypes$1.number,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: PropTypes$1.func
  }), _class$G.defaultProps = _default$8({}, Base$2.defaultProps, {
    hasBorder: true,
    isPreview: false,
    rows: 4,
    autoHeight: false
  }), _initialiseProps$1 = function _initialiseProps2() {
    var _this2 = this;
    this._resizeTextArea = function(value) {
      if (_this2.nextFrameActionId) {
        clearNextFrameAction(_this2.nextFrameActionId);
      }
      _this2.nextFrameActionId = onNextFrame(function() {
        var height = _this2._getHeight(value);
        var maxHeight = _this2.state.maxHeight ? _this2.state.maxHeight : Infinity;
        _this2.setState({
          height: _this2._getHeight(value),
          overflowY: height <= maxHeight ? "hidden" : void 0
        });
      });
    };
  }, _temp$r);
  Input$2.Password = ConfigProvider$1.config(Password, {
    exportNames: ["getInputNode", "focus"],
    transform: (
      /* istanbul ignore next */
      function transform7(props, deprecated2) {
        if ("hasLimitHint" in props) {
          deprecated2("hasLimitHint", "showLimitHint", "Input");
          var _props = props, hasLimitHint = _props.hasLimitHint, others = _default$3(_props, ["hasLimitHint"]);
          props = _default$8({ showLimitHint: hasLimitHint }, others);
        }
        return props;
      }
    )
  });
  Input$2.TextArea = ConfigProvider$1.config(TextArea, {
    exportNames: ["getInputNode", "focus"],
    transform: (
      /* istanbul ignore next */
      function transform8(props, deprecated2) {
        if ("hasLimitHint" in props) {
          deprecated2("hasLimitHint", "showLimitHint", "Input");
          var _props2 = props, hasLimitHint = _props2.hasLimitHint, others = _default$3(_props2, ["hasLimitHint"]);
          props = _default$8({ showLimitHint: hasLimitHint }, others);
        }
        return props;
      }
    )
  });
  Input$2.Group = Group$1;
  const Input = ConfigProvider$1.config(Input$2, {
    exportNames: ["getInputNode", "focus"],
    transform: (
      /* istanbul ignore next */
      function transform9(props, deprecated2) {
        if ("hasLimitHint" in props) {
          deprecated2("hasLimitHint", "showLimitHint", "Input");
          var _props3 = props, hasLimitHint = _props3.hasLimitHint, others = _default$3(_props3, ["hasLimitHint"]);
          props = _default$8({ showLimitHint: hasLimitHint }, others);
        }
        return props;
      }
    )
  });
  var _class$F, _temp2$e;
  var noop$7 = function noop6() {
  };
  var Message$1 = (_temp2$e = _class$F = function(_Component) {
    _default$4(Message2, _Component);
    function Message2() {
      var _temp3, _this2, _ret;
      _default$7(this, Message2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _Component.call.apply(_Component, [this].concat(args))), _this2), _this2.state = {
        visible: typeof _this2.props.visible === "undefined" ? _this2.props.defaultVisible : _this2.props.visible
      }, _this2.onClose = function() {
        if (!("visible" in _this2.props)) {
          _this2.setState({
            visible: false
          });
        }
        _this2.props.onClose(false);
      }, _temp3), _default$5(_this2, _ret);
    }
    Message2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
      if ("visible" in props) {
        return {
          visible: props.visible
        };
      }
      return {};
    };
    Message2.prototype.render = function render2() {
      var _classNames;
      var _props = this.props, prefix = _props.prefix;
      _props.pure;
      var className = _props.className, style = _props.style, type2 = _props.type, shape = _props.shape, size2 = _props.size, title = _props.title, children = _props.children;
      _props.defaultVisible;
      _props.visible;
      var icon = _props.iconType, closeable = _props.closeable;
      _props.onClose;
      var afterClose = _props.afterClose, animation2 = _props.animation, rtl = _props.rtl, locale = _props.locale;
      var others = _default$8({}, obj.pickOthers(Object.keys(Message2.propTypes), this.props));
      var visible = this.state.visible;
      var messagePrefix = prefix + "message";
      var classes = classnames((_classNames = {}, _classNames[messagePrefix] = true, _classNames[prefix + "message-" + type2] = type2, _classNames["" + prefix + shape] = shape, _classNames["" + prefix + size2] = size2, _classNames[prefix + "title-content"] = !!title, _classNames[prefix + "only-content"] = !title && !!children, _classNames[className] = className, _classNames));
      var newChildren = visible ? React.createElement(
        "div",
        _default$8({ role: "alert", style }, others, { className: classes, dir: rtl ? "rtl" : void 0 }),
        closeable ? React.createElement(
          "a",
          {
            role: "button",
            "aria-label": locale.closeAriaLabel,
            className: messagePrefix + "-close",
            onClick: this.onClose
          },
          React.createElement(Icon, { type: "close" })
        ) : null,
        icon !== false ? React.createElement(Icon, {
          className: messagePrefix + "-symbol " + (!icon && messagePrefix + "-symbol-icon"),
          type: icon
        }) : null,
        title ? React.createElement(
          "div",
          { className: messagePrefix + "-title" },
          title
        ) : null,
        children ? React.createElement(
          "div",
          { className: messagePrefix + "-content" },
          children
        ) : null
      ) : null;
      if (animation2) {
        return React.createElement(
          Animate$1.Expand,
          { animationAppear: false, afterLeave: afterClose },
          newChildren
        );
      }
      return newChildren;
    };
    return Message2;
  }(React.Component), _class$F.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    className: PropTypes$1.string,
    style: PropTypes$1.object,
    /**
     * 反馈类型
     */
    type: PropTypes$1.oneOf(["success", "warning", "error", "notice", "help", "loading"]),
    /**
     * 反馈外观
     */
    shape: PropTypes$1.oneOf(["inline", "addon", "toast"]),
    /**
     * 反馈大小
     */
    size: PropTypes$1.oneOf(["medium", "large"]),
    /**
     * 标题
     */
    title: PropTypes$1.node,
    /**
     * 内容
     */
    children: PropTypes$1.node,
    /**
     * 默认是否显示
     */
    defaultVisible: PropTypes$1.bool,
    /**
     * 当前是否显示
     */
    visible: PropTypes$1.bool,
    /**
     * 显示的图标类型，会覆盖内部设置的IconType，传false不显示图标
     */
    iconType: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.bool]),
    /**
     * 显示关闭按钮
     */
    closeable: PropTypes$1.bool,
    /**
     * 关闭按钮的回调
     */
    onClose: PropTypes$1.func,
    /**
     * 关闭之后调用的函数
     */
    afterClose: PropTypes$1.func,
    /**
     * 是否开启展开收起动画
     */
    animation: PropTypes$1.bool,
    locale: PropTypes$1.object,
    rtl: PropTypes$1.bool
  }, _class$F.defaultProps = {
    prefix: "next-",
    pure: false,
    type: "success",
    shape: "inline",
    size: "medium",
    defaultVisible: true,
    closeable: false,
    onClose: noop$7,
    afterClose: noop$7,
    animation: true,
    locale: defaultLocale.Message
  }, _temp2$e);
  Message$1.displayName = "Message";
  const Message$2 = ConfigProvider$1.config(polyfill(Message$1));
  var _class$E, _temp2$d;
  var config = ConfigProvider$1.config;
  var instance = void 0;
  var timeouts = {};
  var Mask = (_temp2$d = _class$E = function(_React$Component) {
    _default$4(Mask2, _React$Component);
    function Mask2() {
      var _temp3, _this2, _ret;
      _default$7(this, Mask2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {
        visible: true
      }, _this2.handleClose = function() {
        var silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        _this2.setState({
          visible: false
        });
        if (!silent) {
          _this2.props.onClose && _this2.props.onClose();
        }
      }, _temp3), _default$5(_this2, _ret);
    }
    Mask2.prototype.componentWillUnmount = function componentWillUnmount() {
      var timeoutId = this.props.timeoutId;
      if (timeoutId in timeouts) {
        var timeout = timeouts[timeoutId];
        clearTimeout(timeout);
        delete timeouts[timeoutId];
      }
    };
    Mask2.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, type2 = _props.type, title = _props.title, content = _props.content, align = _props.align, offset = _props.offset, hasMask = _props.hasMask, afterClose = _props.afterClose, animation2 = _props.animation, overlayProps = _props.overlayProps;
      _props.timeoutId;
      var className = _props.className, style = _props.style, others = _default$3(_props, ["prefix", "type", "title", "content", "align", "offset", "hasMask", "afterClose", "animation", "overlayProps", "timeoutId", "className", "style"]);
      var visible = this.state.visible;
      return React.createElement(
        Overlay$1,
        _default$8({}, overlayProps, {
          prefix,
          animation: animation2,
          visible,
          align,
          offset,
          hasMask,
          afterClose
        }),
        React.createElement(
          Message$2,
          _default$8({}, others, {
            prefix,
            visible: true,
            type: type2,
            shape: "toast",
            title,
            style,
            className: prefix + "message-wrapper " + className,
            onClose: this.handleClose
          }),
          content
        )
      );
    };
    return Mask2;
  }(React.Component), _class$E.contextTypes = {
    prefix: PropTypes$1.string
  }, _class$E.propTypes = {
    prefix: PropTypes$1.string,
    type: PropTypes$1.string,
    title: PropTypes$1.node,
    content: PropTypes$1.node,
    align: PropTypes$1.string,
    offset: PropTypes$1.array,
    hasMask: PropTypes$1.bool,
    afterClose: PropTypes$1.func,
    animation: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.bool]),
    overlayProps: PropTypes$1.object,
    onClose: PropTypes$1.func,
    timeoutId: PropTypes$1.string,
    style: PropTypes$1.object,
    className: PropTypes$1.string
  }, _class$E.defaultProps = {
    prefix: "next-",
    align: "tc tc",
    offset: [0, 30],
    hasMask: false,
    animation: {
      in: "pulse",
      out: "zoomOut"
    },
    style: {},
    className: ""
  }, _temp2$d);
  Mask.displayName = "Mask";
  var NewMask = config(Mask);
  var create4 = function create5(props) {
    props.duration;
    var afterClose = props.afterClose, contextConfig = props.contextConfig, others = _default$3(props, ["duration", "afterClose", "contextConfig"]);
    var div = document.createElement("div");
    document.body.appendChild(div);
    var closeChain = function closeChain2() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      afterClose && afterClose();
    };
    var newContext = contextConfig;
    if (!newContext)
      newContext = ConfigProvider$1.getContext();
    var mask = void 0, myRef = void 0, destroyed = false;
    var destroy = function destroy2() {
      var inc = mask && mask.getInstance();
      inc && inc.handleClose(true);
      destroyed = true;
    };
    ReactDOM.render(React.createElement(
      ConfigProvider$1,
      newContext,
      React.createElement(NewMask, _default$8({
        afterClose: closeChain
      }, others, {
        ref: function ref(_ref) {
          myRef = _ref;
        }
      }))
    ), div, function() {
      mask = myRef;
      if (mask && destroyed) {
        destroy();
      }
    });
    return {
      component: mask,
      destroy
    };
  };
  function handleConfig$1(config3, type2) {
    var newConfig = {};
    if (typeof config3 === "string" || React.isValidElement(config3)) {
      newConfig.title = config3;
    } else if (isObject(config3)) {
      newConfig = _default$8({}, config3);
    }
    if (typeof newConfig.duration !== "number") {
      newConfig.duration = 3e3;
    }
    if (type2) {
      newConfig.type = type2;
    }
    return newConfig;
  }
  function isObject(obj2) {
    return {}.toString.call(obj2) === "[object Object]";
  }
  function open$1(config3, type2) {
    close$1();
    config3 = handleConfig$1(config3, type2);
    var timeoutId = guid();
    instance = create4(_default$8({}, config3, { timeoutId }));
    if (config3.duration > 0) {
      var timeout = setTimeout(close$1, config3.duration);
      timeouts[timeoutId] = timeout;
    }
  }
  function close$1() {
    if (instance) {
      instance.destroy();
      instance = null;
    }
  }
  function _show(config3) {
    open$1(config3);
  }
  function hide() {
    close$1();
  }
  function _success(config3) {
    open$1(config3, "success");
  }
  function _warning(config3) {
    open$1(config3, "warning");
  }
  function _error(config3) {
    open$1(config3, "error");
  }
  function _help(config3) {
    open$1(config3, "help");
  }
  function _loading(config3) {
    open$1(config3, "loading");
  }
  function _notice(config3) {
    open$1(config3, "notice");
  }
  const toast = {
    show: _show,
    hide,
    success: _success,
    warning: _warning,
    error: _error,
    help: _help,
    loading: _loading,
    notice: _notice
  };
  var withContext = function withContext2(WrappedComponent) {
    var HOC = function HOC2(props) {
      return React.createElement(
        ConfigProvider$1.Consumer,
        null,
        function(contextConfig) {
          return React.createElement(WrappedComponent, _default$8({}, props, {
            contextMessage: {
              show: function show() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _show(_default$8({}, config3, { contextConfig }));
              },
              hide,
              success: function success() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _success(_default$8({}, config3, { contextConfig }));
              },
              warning: function warning2() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _warning(_default$8({}, config3, { contextConfig }));
              },
              error: function error() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _error(_default$8({}, config3, { contextConfig }));
              },
              help: function help() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _help(_default$8({}, config3, { contextConfig }));
              },
              loading: function loading() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _loading(_default$8({}, config3, { contextConfig }));
              },
              notice: function notice() {
                var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _notice(_default$8({}, config3, { contextConfig }));
              }
            }
          }));
        }
      );
    };
    return HOC;
  };
  var _config = {
    top: 8,
    maxCount: 0,
    duration: 3e3
  };
  var MessageWrapper = function MessageWrapper2(props) {
    var _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? "next-" : _props$prefix, _props$dataSource = props.dataSource, dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
    var _useState = React.useState(), forceUpdate = _useState[1];
    dataSource.forEach(function(i) {
      if (!i.timer) {
        i.timer = setTimeout(function() {
          var idx = dataSource.indexOf(i);
          if (idx > -1) {
            var item = dataSource[idx];
            typeof item.onClose === "function" && item.onClose();
            dataSource.splice(idx, 1);
            forceUpdate({});
          }
        }, i.duration);
      }
    });
    return React.createElement(
      "div",
      { className: prefix + "message-wrapper-v2", style: { top: _config.top } },
      React.createElement(
        Animate$1,
        {
          animationAppear: true,
          animation: {
            appear: "pulse",
            enter: "pulse",
            leave: prefix + "message-fade-leave"
          },
          singleMode: false
        },
        dataSource.map(function(i) {
          var key = i.key, className = i.className, type2 = i.type, title = i.title, content = i.content, style = i.style, others = _default$3(i, ["key", "className", "type", "title", "content", "style"]);
          return React.createElement(
            "div",
            { className: prefix + "message-list", key },
            React.createElement(
              Message$2,
              _default$8({}, others, {
                className,
                prefix,
                visible: true,
                type: type2,
                shape: "toast",
                title,
                style
              }),
              content
            )
          );
        })
      )
    );
  };
  var ConfigedMessages = ConfigProvider$1.config(MessageWrapper);
  var messageRootNode = void 0;
  var messageList = [];
  var createMessage = function createMessage2(props) {
    var _props$key = props.key, key = _props$key === void 0 ? guid("message-") : _props$key, others = _default$3(props, ["key"]);
    if (!messageRootNode) {
      messageRootNode = document.createElement("div");
      document.body.appendChild(messageRootNode);
    }
    var maxCount = _config.maxCount, duration = _config.duration;
    var item = _default$8({
      key,
      duration
    }, others);
    messageList.push(item);
    if (maxCount && messageList.length > maxCount) {
      messageList.shift();
    }
    ReactDOM.render(React.createElement(
      ConfigProvider$1,
      ConfigProvider$1.getContext(),
      React.createElement(ConfigedMessages, { dataSource: messageList })
    ), messageRootNode);
    return {
      key,
      close: function close2() {
        if (item.timer) {
          clearTimeout(item.timer);
        }
        var idx = messageList.indexOf(item);
        if (idx > -1) {
          typeof item.onClose === "function" && item.onClose();
          messageList.splice(idx, 1);
          ReactDOM.render(React.createElement(
            ConfigProvider$1,
            ConfigProvider$1.getContext(),
            React.createElement(ConfigedMessages, { dataSource: messageList })
          ), messageRootNode);
        }
      }
    };
  };
  function close(key) {
    if (key) {
      var index2 = messageList.findIndex(function(item) {
        return item.key === key;
      });
      messageList.splice(index2, 1);
    } else {
      messageList = [];
    }
    if (messageRootNode) {
      ReactDOM.render(React.createElement(
        ConfigProvider$1,
        ConfigProvider$1.getContext(),
        React.createElement(ConfigedMessages, { dataSource: messageList })
      ), messageRootNode);
    }
  }
  function handleConfig(config3, type2) {
    var newConfig = {};
    if (typeof config3 === "string" || React.isValidElement(config3)) {
      newConfig.title = config3;
    } else if (obj.typeOf(config3) === "Object") {
      newConfig = _default$8({}, config3);
    }
    if (type2) {
      newConfig.type = type2;
    }
    return newConfig;
  }
  function open(type2) {
    return function(config3) {
      config3 = handleConfig(config3, type2);
      return createMessage(config3);
    };
  }
  function destory() {
    if (!messageRootNode)
      return;
    if (messageRootNode) {
      ReactDOM.unmountComponentAtNode(messageRootNode);
      messageRootNode.parentNode.removeChild(messageRootNode);
      messageRootNode = null;
    }
  }
  const message = {
    open: open(),
    success: open("success"),
    warning: open("warning"),
    error: open("error"),
    help: open("help"),
    loading: open("loading"),
    notice: open("notice"),
    close,
    destory,
    config: function config2() {
      if (!React.useState) {
        log.warning("need react version > 16.8.0");
        return;
      }
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _default$8.apply(void 0, [_config].concat(args));
    }
  };
  Message$2.show = toast.show;
  Message$2.success = toast.success;
  Message$2.warning = toast.warning;
  Message$2.error = toast.error;
  Message$2.notice = toast.notice;
  Message$2.help = toast.help;
  Message$2.loading = toast.loading;
  Message$2.hide = toast.hide;
  Message$2.withContext = withContext;
  var MessageProvider = ConfigProvider$1.config(Message$2, {
    componentName: "Message"
  });
  const Message = MessageProvider;
  var openV2 = false;
  MessageProvider.config = function(config3) {
    message.config(config3);
    if (!openV2) {
      MessageProvider.show = message.open;
      MessageProvider.open = message.open;
      MessageProvider.hide = message.close;
      MessageProvider.close = message.close;
      MessageProvider.destory = message.destory;
      MessageProvider.success = message.success;
      MessageProvider.warning = message.warning;
      MessageProvider.error = message.error;
      MessageProvider.notice = message.notice;
      MessageProvider.help = message.help;
      MessageProvider.loading = message.loading;
      openV2 = true;
    }
  };
  var lib$1 = {};
  var regeneratorRuntime$1 = { exports: {} };
  var _typeof = { exports: {} };
  var hasRequired_typeof;
  function require_typeof() {
    if (hasRequired_typeof)
      return _typeof.exports;
    hasRequired_typeof = 1;
    (function(module) {
      function _typeof4(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof4(o);
      }
      module.exports = _typeof4, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_typeof);
    return _typeof.exports;
  }
  var hasRequiredRegeneratorRuntime;
  function requireRegeneratorRuntime() {
    if (hasRequiredRegeneratorRuntime)
      return regeneratorRuntime$1.exports;
    hasRequiredRegeneratorRuntime = 1;
    (function(module) {
      var _typeof4 = require_typeof()["default"];
      function _regeneratorRuntime() {
        module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
          return e2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var t2, e2 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r3) {
          t3[e3] = r3.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
        function define(t3, e3, r3) {
          return Object.defineProperty(t3, e3, {
            value: r3,
            enumerable: true,
            configurable: true,
            writable: true
          }), t3[e3];
        }
        try {
          define({}, "");
        } catch (t3) {
          define = function define2(t4, e3, r3) {
            return t4[e3] = r3;
          };
        }
        function wrap2(t3, e3, r3, n3) {
          var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context(n3 || []);
          return o(a2, "_invoke", {
            value: makeInvokeMethod(t3, r3, c3)
          }), a2;
        }
        function tryCatch(t3, e3, r3) {
          try {
            return {
              type: "normal",
              arg: t3.call(e3, r3)
            };
          } catch (t4) {
            return {
              type: "throw",
              arg: t4
            };
          }
        }
        e2.wrap = wrap2;
        var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y2 = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var p2 = {};
        define(p2, a, function() {
          return this;
        });
        var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values2([])));
        v2 && v2 !== r2 && n2.call(v2, a) && (p2 = v2);
        var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
        function defineIteratorMethods(t3) {
          ["next", "throw", "return"].forEach(function(e3) {
            define(t3, e3, function(t4) {
              return this._invoke(e3, t4);
            });
          });
        }
        function AsyncIterator(t3, e3) {
          function invoke2(r4, o2, i2, a2) {
            var c3 = tryCatch(t3[r4], t3, o2);
            if ("throw" !== c3.type) {
              var u2 = c3.arg, h3 = u2.value;
              return h3 && "object" == _typeof4(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
                invoke2("next", t4, i2, a2);
              }, function(t4) {
                invoke2("throw", t4, i2, a2);
              }) : e3.resolve(h3).then(function(t4) {
                u2.value = t4, i2(u2);
              }, function(t4) {
                return invoke2("throw", t4, i2, a2);
              });
            }
            a2(c3.arg);
          }
          var r3;
          o(this, "_invoke", {
            value: function value(t4, n3) {
              function callInvokeWithMethodAndArg() {
                return new e3(function(e4, r4) {
                  invoke2(t4, n3, e4, r4);
                });
              }
              return r3 = r3 ? r3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e3, r3, n3) {
          var o2 = h2;
          return function(i2, a2) {
            if (o2 === f2)
              throw new Error("Generator is already running");
            if (o2 === s) {
              if ("throw" === i2)
                throw a2;
              return {
                value: t2,
                done: true
              };
            }
            for (n3.method = i2, n3.arg = a2; ; ) {
              var c3 = n3.delegate;
              if (c3) {
                var u2 = maybeInvokeDelegate(c3, n3);
                if (u2) {
                  if (u2 === y2)
                    continue;
                  return u2;
                }
              }
              if ("next" === n3.method)
                n3.sent = n3._sent = n3.arg;
              else if ("throw" === n3.method) {
                if (o2 === h2)
                  throw o2 = s, n3.arg;
                n3.dispatchException(n3.arg);
              } else
                "return" === n3.method && n3.abrupt("return", n3.arg);
              o2 = f2;
              var p3 = tryCatch(e3, r3, n3);
              if ("normal" === p3.type) {
                if (o2 = n3.done ? s : l2, p3.arg === y2)
                  continue;
                return {
                  value: p3.arg,
                  done: n3.done
                };
              }
              "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
            }
          };
        }
        function maybeInvokeDelegate(e3, r3) {
          var n3 = r3.method, o2 = e3.iterator[n3];
          if (o2 === t2)
            return r3.delegate = null, "throw" === n3 && e3.iterator["return"] && (r3.method = "return", r3.arg = t2, maybeInvokeDelegate(e3, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
          var i2 = tryCatch(o2, e3.iterator, r3.arg);
          if ("throw" === i2.type)
            return r3.method = "throw", r3.arg = i2.arg, r3.delegate = null, y2;
          var a2 = i2.arg;
          return a2 ? a2.done ? (r3[e3.resultName] = a2.value, r3.next = e3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t2), r3.delegate = null, y2) : a2 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
        }
        function pushTryEntry(t3) {
          var e3 = {
            tryLoc: t3[0]
          };
          1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
        }
        function resetTryEntry(t3) {
          var e3 = t3.completion || {};
          e3.type = "normal", delete e3.arg, t3.completion = e3;
        }
        function Context(t3) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t3.forEach(pushTryEntry, this), this.reset(true);
        }
        function values2(e3) {
          if (e3 || "" === e3) {
            var r3 = e3[a];
            if (r3)
              return r3.call(e3);
            if ("function" == typeof e3.next)
              return e3;
            if (!isNaN(e3.length)) {
              var o2 = -1, i2 = function next() {
                for (; ++o2 < e3.length; )
                  if (n2.call(e3, o2))
                    return next.value = e3[o2], next.done = false, next;
                return next.value = t2, next.done = true, next;
              };
              return i2.next = i2;
            }
          }
          throw new TypeError(_typeof4(e3) + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
          var e3 = "function" == typeof t3 && t3.constructor;
          return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
        }, e2.mark = function(t3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
        }, e2.awrap = function(t3) {
          return {
            __await: t3
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
          return this;
        }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r3, n3, o2, i2) {
          void 0 === i2 && (i2 = Promise);
          var a2 = new AsyncIterator(wrap2(t3, r3, n3, o2), i2);
          return e2.isGeneratorFunction(r3) ? a2 : a2.next().then(function(t4) {
            return t4.done ? t4.value : a2.next();
          });
        }, defineIteratorMethods(g2), define(g2, u, "Generator"), define(g2, a, function() {
          return this;
        }), define(g2, "toString", function() {
          return "[object Generator]";
        }), e2.keys = function(t3) {
          var e3 = Object(t3), r3 = [];
          for (var n3 in e3)
            r3.push(n3);
          return r3.reverse(), function next() {
            for (; r3.length; ) {
              var t4 = r3.pop();
              if (t4 in e3)
                return next.value = t4, next.done = false, next;
            }
            return next.done = true, next;
          };
        }, e2.values = values2, Context.prototype = {
          constructor: Context,
          reset: function reset(e3) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
              for (var r3 in this)
                "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t2);
          },
          stop: function stop() {
            this.done = true;
            var t3 = this.tryEntries[0].completion;
            if ("throw" === t3.type)
              throw t3.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e3) {
            if (this.done)
              throw e3;
            var r3 = this;
            function handle(n3, o3) {
              return a2.type = "throw", a2.arg = e3, r3.next = n3, o3 && (r3.method = "next", r3.arg = t2), !!o3;
            }
            for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
              var i2 = this.tryEntries[o2], a2 = i2.completion;
              if ("root" === i2.tryLoc)
                return handle("end");
              if (i2.tryLoc <= this.prev) {
                var c3 = n2.call(i2, "catchLoc"), u2 = n2.call(i2, "finallyLoc");
                if (c3 && u2) {
                  if (this.prev < i2.catchLoc)
                    return handle(i2.catchLoc, true);
                  if (this.prev < i2.finallyLoc)
                    return handle(i2.finallyLoc);
                } else if (c3) {
                  if (this.prev < i2.catchLoc)
                    return handle(i2.catchLoc, true);
                } else {
                  if (!u2)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i2.finallyLoc)
                    return handle(i2.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t3, e3) {
            for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
              var o2 = this.tryEntries[r3];
              if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
                var i2 = o2;
                break;
              }
            }
            i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
            var a2 = i2 ? i2.completion : {};
            return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y2) : this.complete(a2);
          },
          complete: function complete(t3, e3) {
            if ("throw" === t3.type)
              throw t3.arg;
            return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y2;
          },
          finish: function finish(t3) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.finallyLoc === t3)
                return this.complete(r3.completion, r3.afterLoc), resetTryEntry(r3), y2;
            }
          },
          "catch": function _catch(t3) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.tryLoc === t3) {
                var n3 = r3.completion;
                if ("throw" === n3.type) {
                  var o2 = n3.arg;
                  resetTryEntry(r3);
                }
                return o2;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e3, r3, n3) {
            return this.delegate = {
              iterator: values2(e3),
              resultName: r3,
              nextLoc: n3
            }, "next" === this.method && (this.arg = t2), y2;
          }
        }, e2;
      }
      module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(regeneratorRuntime$1);
    return regeneratorRuntime$1.exports;
  }
  var regenerator;
  var hasRequiredRegenerator;
  function requireRegenerator() {
    if (hasRequiredRegenerator)
      return regenerator;
    hasRequiredRegenerator = 1;
    var runtime = requireRegeneratorRuntime()();
    regenerator = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
    return regenerator;
  }
  var asyncToGenerator = { exports: {} };
  var hasRequiredAsyncToGenerator;
  function requireAsyncToGenerator() {
    if (hasRequiredAsyncToGenerator)
      return asyncToGenerator.exports;
    hasRequiredAsyncToGenerator = 1;
    (function(module) {
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(asyncToGenerator);
    return asyncToGenerator.exports;
  }
  var defineProperty4 = { exports: {} };
  var toPropertyKey = { exports: {} };
  var toPrimitive = { exports: {} };
  var hasRequiredToPrimitive;
  function requireToPrimitive() {
    if (hasRequiredToPrimitive)
      return toPrimitive.exports;
    hasRequiredToPrimitive = 1;
    (function(module) {
      var _typeof4 = require_typeof()["default"];
      function _toPrimitive2(input, hint) {
        if (_typeof4(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (_typeof4(res) !== "object")
            return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      module.exports = _toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPrimitive);
    return toPrimitive.exports;
  }
  var hasRequiredToPropertyKey;
  function requireToPropertyKey() {
    if (hasRequiredToPropertyKey)
      return toPropertyKey.exports;
    hasRequiredToPropertyKey = 1;
    (function(module) {
      var _typeof4 = require_typeof()["default"];
      var toPrimitive2 = requireToPrimitive();
      function _toPropertyKey(arg) {
        var key = toPrimitive2(arg, "string");
        return _typeof4(key) === "symbol" ? key : String(key);
      }
      module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPropertyKey);
    return toPropertyKey.exports;
  }
  var hasRequiredDefineProperty;
  function requireDefineProperty() {
    if (hasRequiredDefineProperty)
      return defineProperty4.exports;
    hasRequiredDefineProperty = 1;
    (function(module) {
      var toPropertyKey2 = requireToPropertyKey();
      function _defineProperty3(obj2, key, value) {
        key = toPropertyKey2(key);
        if (key in obj2) {
          Object.defineProperty(obj2, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj2[key] = value;
        }
        return obj2;
      }
      module.exports = _defineProperty3, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(defineProperty4);
    return defineProperty4.exports;
  }
  var slicedToArray = { exports: {} };
  var arrayWithHoles = { exports: {} };
  var hasRequiredArrayWithHoles;
  function requireArrayWithHoles() {
    if (hasRequiredArrayWithHoles)
      return arrayWithHoles.exports;
    hasRequiredArrayWithHoles = 1;
    (function(module) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(arrayWithHoles);
    return arrayWithHoles.exports;
  }
  var iterableToArrayLimit = { exports: {} };
  var hasRequiredIterableToArrayLimit;
  function requireIterableToArrayLimit() {
    if (hasRequiredIterableToArrayLimit)
      return iterableToArrayLimit.exports;
    hasRequiredIterableToArrayLimit = 1;
    (function(module) {
      function _iterableToArrayLimit(r2, l2) {
        var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
        if (null != t2) {
          var e2, n2, i, u, a = [], f2 = true, o = false;
          try {
            if (i = (t2 = t2.call(r2)).next, 0 === l2) {
              if (Object(t2) !== t2)
                return;
              f2 = false;
            } else
              for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true)
                ;
          } catch (r3) {
            o = true, n2 = r3;
          } finally {
            try {
              if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
                return;
            } finally {
              if (o)
                throw n2;
            }
          }
          return a;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(iterableToArrayLimit);
    return iterableToArrayLimit.exports;
  }
  var unsupportedIterableToArray = { exports: {} };
  var arrayLikeToArray = { exports: {} };
  var hasRequiredArrayLikeToArray;
  function requireArrayLikeToArray() {
    if (hasRequiredArrayLikeToArray)
      return arrayLikeToArray.exports;
    hasRequiredArrayLikeToArray = 1;
    (function(module) {
      function _arrayLikeToArray2(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(arrayLikeToArray);
    return arrayLikeToArray.exports;
  }
  var hasRequiredUnsupportedIterableToArray;
  function requireUnsupportedIterableToArray() {
    if (hasRequiredUnsupportedIterableToArray)
      return unsupportedIterableToArray.exports;
    hasRequiredUnsupportedIterableToArray = 1;
    (function(module) {
      var arrayLikeToArray2 = requireArrayLikeToArray();
      function _unsupportedIterableToArray2(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return arrayLikeToArray2(o, minLen);
        var n2 = Object.prototype.toString.call(o).slice(8, -1);
        if (n2 === "Object" && o.constructor)
          n2 = o.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return arrayLikeToArray2(o, minLen);
      }
      module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(unsupportedIterableToArray);
    return unsupportedIterableToArray.exports;
  }
  var nonIterableRest = { exports: {} };
  var hasRequiredNonIterableRest;
  function requireNonIterableRest() {
    if (hasRequiredNonIterableRest)
      return nonIterableRest.exports;
    hasRequiredNonIterableRest = 1;
    (function(module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(nonIterableRest);
    return nonIterableRest.exports;
  }
  var hasRequiredSlicedToArray;
  function requireSlicedToArray() {
    if (hasRequiredSlicedToArray)
      return slicedToArray.exports;
    hasRequiredSlicedToArray = 1;
    (function(module) {
      var arrayWithHoles2 = requireArrayWithHoles();
      var iterableToArrayLimit2 = requireIterableToArrayLimit();
      var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
      var nonIterableRest2 = requireNonIterableRest();
      function _slicedToArray(arr, i) {
        return arrayWithHoles2(arr) || iterableToArrayLimit2(arr, i) || unsupportedIterableToArray2(arr, i) || nonIterableRest2();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(slicedToArray);
    return slicedToArray.exports;
  }
  var classCallCheck = { exports: {} };
  var hasRequiredClassCallCheck;
  function requireClassCallCheck() {
    if (hasRequiredClassCallCheck)
      return classCallCheck.exports;
    hasRequiredClassCallCheck = 1;
    (function(module) {
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(classCallCheck);
    return classCallCheck.exports;
  }
  var createClass = { exports: {} };
  var hasRequiredCreateClass;
  function requireCreateClass() {
    if (hasRequiredCreateClass)
      return createClass.exports;
    hasRequiredCreateClass = 1;
    (function(module) {
      var toPropertyKey2 = requireToPropertyKey();
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor2 = props[i];
          descriptor2.enumerable = descriptor2.enumerable || false;
          descriptor2.configurable = true;
          if ("value" in descriptor2)
            descriptor2.writable = true;
          Object.defineProperty(target, toPropertyKey2(descriptor2.key), descriptor2);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(createClass);
    return createClass.exports;
  }
  var lib = {};
  var util = {};
  var hasRequiredUtil;
  function requireUtil() {
    if (hasRequiredUtil)
      return util;
    hasRequiredUtil = 1;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(util, "__esModule", {
      value: true
    });
    util.asyncMap = asyncMap;
    util.asyncMapPromise = asyncMapPromise;
    util.complementError = complementError;
    util.format = format2;
    util.processErrorResults = processErrorResults;
    var _regenerator2 = _interopRequireDefault2(requireRegenerator());
    var _asyncToGenerator22 = _interopRequireDefault2(requireAsyncToGenerator());
    var formatRegExp = /%[sdj%]/g;
    function format2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var i = 1;
      var f2 = args[0];
      var len = args.length;
      if (typeof f2 === "function") {
        return f2(args.slice(1));
      }
      if (typeof f2 === "string") {
        var str = String(f2).replace(formatRegExp, function(x2) {
          if (x2 === "%%") {
            return "%";
          }
          if (i >= len) {
            return x2;
          }
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        return str;
      }
      return f2;
    }
    function _asyncValidateSerials(arr, validator2, callback) {
      var index2 = 0;
      var arrLength = arr.length;
      function next(errors) {
        if (errors && errors.length) {
          return callback(errors);
        }
        var original = index2;
        index2 = index2 + 1;
        if (original < arrLength) {
          validator2(arr[original], next);
        } else {
          return callback([]);
        }
      }
      next([]);
    }
    function _promiseValidateSeries(_x, _x2) {
      return _promiseValidateSeries2.apply(this, arguments);
    }
    function _promiseValidateSeries2() {
      _promiseValidateSeries2 = (0, _asyncToGenerator22.default)(/* @__PURE__ */ _regenerator2.default.mark(function _callee2(arr, validator2) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", arr.reduce(/* @__PURE__ */ function() {
                  var _ref = (0, _asyncToGenerator22.default)(/* @__PURE__ */ _regenerator2.default.mark(function _callee(prevPromise, next) {
                    var errors;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return prevPromise;
                          case 3:
                            errors = _context.sent;
                            _context.next = 9;
                            break;
                          case 6:
                            _context.prev = 6;
                            _context.t0 = _context["catch"](0);
                            errors = _context.t0;
                          case 9:
                            if (!(errors && errors.length)) {
                              _context.next = 11;
                              break;
                            }
                            return _context.abrupt("return", errors);
                          case 11:
                            return _context.abrupt("return", validator2(next));
                          case 12:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 6]]);
                  }));
                  return function(_x6, _x7) {
                    return _ref.apply(this, arguments);
                  };
                }(), []));
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _promiseValidateSeries2.apply(this, arguments);
    }
    function flattenObjArr(objArr) {
      var ret = [];
      Object.keys(objArr).forEach(function(k2) {
        Object.keys(objArr[k2]).forEach(function(r2) {
          ret.push(objArr[k2][r2]);
        });
      });
      return ret;
    }
    function asyncMap(objArr, option, validator2, callback) {
      if (option.first) {
        var flattenArr = flattenObjArr(objArr);
        return _asyncValidateSerials(flattenArr, validator2, callback);
      }
      var objArrKeys = Object.keys(objArr);
      var objArrLength = objArrKeys.length;
      var total = 0;
      var results = [];
      var next = function next2(errors) {
        results.push(errors);
        total++;
        if (total === objArrLength) {
          return callback(results);
        }
      };
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        _asyncValidateSerials(arr, validator2, next);
      });
    }
    function asyncMapPromise(_x3, _x4, _x5) {
      return _asyncMapPromise.apply(this, arguments);
    }
    function _asyncMapPromise() {
      _asyncMapPromise = (0, _asyncToGenerator22.default)(/* @__PURE__ */ _regenerator2.default.mark(function _callee3(objArr, option, validator2) {
        var flatObjArr, objArrValues;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!option.first) {
                  _context3.next = 5;
                  break;
                }
                flatObjArr = flattenObjArr(objArr);
                _context3.next = 4;
                return _promiseValidateSeries(flatObjArr, validator2);
              case 4:
                return _context3.abrupt("return", _context3.sent);
              case 5:
                objArrValues = Object.values(objArr);
                _context3.next = 8;
                return Promise.all(objArrValues.map(function(val) {
                  return _promiseValidateSeries(val, validator2);
                }));
              case 8:
                return _context3.abrupt("return", _context3.sent);
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _asyncMapPromise.apply(this, arguments);
    }
    function complementError(rule) {
      return function(oe) {
        if (oe && oe.message) {
          oe.field = rule.field;
          return oe;
        }
        return {
          message: oe,
          field: rule.field
        };
      };
    }
    function processErrorResults() {
      var results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var errors = [];
      var fields = {};
      function add(e2) {
        if (Array.isArray(e2)) {
          errors = errors.concat(e2);
        } else {
          errors.push(e2);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (var _i = 0; _i < errors.length; _i++) {
          var field = errors[_i].field;
          if (field) {
            fields[field] = fields[field] || [];
            fields[field].push(errors[_i]);
          }
        }
      }
      return {
        errors,
        fields
      };
    }
    return util;
  }
  var messages = {};
  var hasRequiredMessages;
  function requireMessages() {
    if (hasRequiredMessages)
      return messages;
    hasRequiredMessages = 1;
    Object.defineProperty(messages, "__esModule", {
      value: true
    });
    messages.default = void 0;
    var _default2 = {
      default: "%s 校验失败",
      required: "%s 是必填字段",
      format: {
        number: "%s 不是合法的数字",
        email: "%s 不是合法的 email 地址",
        url: "%s 不是合法的 URL 地址",
        tel: "%s 不是合法的电话号码",
        IDNumber: "%s 不是合法的身份证号码"
      },
      number: {
        length: "%s 长度必须是 %s",
        min: "%s 字段数值不得小于 %s",
        max: "%s 字段数值不得大于 %s",
        minLength: "%s 字段字符长度不得少于 %s",
        maxLength: "%s 字段字符长度不得超过 %s"
      },
      string: {
        length: "%s 长度必须是 %s",
        min: "%s 字段数值不得小于 %s",
        max: "%s 字段数值不得大于 %s",
        minLength: "%s 字段字符长度不得少于 %s",
        maxLength: "%s 字段字符长度不得超过 %s"
      },
      array: {
        length: "%s 个数必须是 %s",
        minLength: "%s 个数不得少于 %s",
        maxLength: "%s 个数不得超过 %s"
      },
      pattern: "%s 字段数值 %s 不匹配正则 %s"
    };
    messages.default = _default2;
    return messages;
  }
  var validator = {};
  var rules = {};
  var required = {};
  var hasRequiredRequired;
  function requireRequired() {
    if (hasRequiredRequired)
      return required;
    hasRequiredRequired = 1;
    var _typeof4 = require_typeof();
    Object.defineProperty(required, "__esModule", {
      value: true
    });
    required.default = void 0;
    var util2 = _interopRequireWildcard2(requireUtil());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj2, nodeInterop) {
      if (!nodeInterop && obj2 && obj2.__esModule) {
        return obj2;
      }
      if (obj2 === null || _typeof4(obj2) !== "object" && typeof obj2 !== "function") {
        return { default: obj2 };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj2)) {
        return cache.get(obj2);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj2) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj2, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj2[key];
          }
        }
      }
      newObj.default = obj2;
      if (cache) {
        cache.set(obj2, newObj);
      }
      return newObj;
    }
    function required$1(rule, value, errors, options) {
      if (value === void 0 || value === null || value === "" || value.length === 0) {
        errors.push(util2.format(options.messages.required, rule.aliasName || rule.field));
      }
    }
    var _default2 = required$1;
    required.default = _default2;
    return required;
  }
  var format = {};
  var hasRequiredFormat;
  function requireFormat() {
    if (hasRequiredFormat)
      return format;
    hasRequiredFormat = 1;
    var _typeof4 = require_typeof();
    Object.defineProperty(format, "__esModule", {
      value: true
    });
    format.default = void 0;
    var util2 = _interopRequireWildcard2(requireUtil());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj2, nodeInterop) {
      if (!nodeInterop && obj2 && obj2.__esModule) {
        return obj2;
      }
      if (obj2 === null || _typeof4(obj2) !== "object" && typeof obj2 !== "function") {
        return { default: obj2 };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj2)) {
        return cache.get(obj2);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj2) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj2, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj2[key];
          }
        }
      }
      newObj.default = obj2;
      if (cache) {
        cache.set(obj2, newObj);
      }
      return newObj;
    }
    var pattern2 = {
      email: /[\w\u4E00-\u9FA5]+([-+.][\w\u4E00-\u9FA5]+)*@[\w\u4E00-\u9FA5]+([-.][\w\u4E00-\u9FA5]+)*\.[\w\u4E00-\u9FA5]+([-.][\w\u4E00-\u9FA5]+)*/,
      url: /^(?:(?:http|https|ftp):\/\/|\/\/)(?:(?:(?:[-\w\u00a1-\uffff]+)(?:\.[-\w\u00a1-\uffff]+)+|localhost)(?::\d{2,5})?(?:(?:\/|#)[^\s]*)?)$/,
      number: /\d*/,
      tel: /^(1\d{10})$|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{3,4})-(\d{7,8})|(\d{7,8})-(\d{1,4}))$)$|^([ ]?)$/
    };
    var types = {
      number: function number(value) {
        if (isNaN(value)) {
          return false;
        }
        return typeof value === "number" || typeof value === "string" && !!value.match(pattern2.number);
      },
      email: function email(value) {
        return typeof value === "string" && !!value.match(pattern2.email) && value.length < 255;
      },
      url: function url(value) {
        return typeof value === "string" && !!value.match(pattern2.url);
      },
      tel: function tel(value) {
        return typeof value === "string" && !!value.match(pattern2.tel);
      },
      IDNumber: function IDNumber(value) {
        return validatorIDNumber(value);
      }
    };
    function format$1(rule, value, errors, options) {
      var custom = ["email", "number", "url", "tel", "IDNumber"];
      var ruleType = rule.format;
      if (custom.indexOf(ruleType) > -1 && !types[ruleType](value)) {
        errors.push(util2.format(options.messages.format[ruleType], rule.aliasName || rule.field, rule.format));
      }
    }
    function validatorIDNumber(idCode) {
      if (typeof idCode !== "string") {
        return false;
      }
      var idCardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
      var format2 = idCardPatter.test(idCode);
      if (!format2) {
        return false;
      }
      var weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var checkCode = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
      var last = idCode[17];
      var seventeen = idCode.substring(0, 17);
      var arr = seventeen.split("");
      var len = arr.length;
      var num = 0;
      for (var i = 0; i < len; i++) {
        num += arr[i] * weightFactor[i];
      }
      var lastNo = checkCode[num % 11];
      return last === lastNo;
    }
    var _default2 = format$1;
    format.default = _default2;
    return format;
  }
  var size = {};
  var hasRequiredSize;
  function requireSize() {
    if (hasRequiredSize)
      return size;
    hasRequiredSize = 1;
    var _typeof4 = require_typeof();
    Object.defineProperty(size, "__esModule", {
      value: true
    });
    size.default = void 0;
    var util2 = _interopRequireWildcard2(requireUtil());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj2, nodeInterop) {
      if (!nodeInterop && obj2 && obj2.__esModule) {
        return obj2;
      }
      if (obj2 === null || _typeof4(obj2) !== "object" && typeof obj2 !== "function") {
        return { default: obj2 };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj2)) {
        return cache.get(obj2);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj2) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj2, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj2[key];
          }
        }
      }
      newObj.default = obj2;
      if (cache) {
        cache.set(obj2, newObj);
      }
      return newObj;
    }
    function size$1(rule, value, errors, options) {
      var key = null;
      var isNum = typeof value === "number";
      var isStr = typeof value === "string";
      if (isNum) {
        key = "number";
      } else if (isStr) {
        key = "string";
      }
      if (!key) {
        return false;
      }
      if (typeof rule.min !== "undefined" || typeof rule.max !== "undefined") {
        var val = value;
        var max2 = Number(rule.max);
        var min2 = Number(rule.min);
        if (isStr) {
          val = Number(val);
        }
        if (val < min2) {
          errors.push(util2.format(options.messages[key].min, rule.aliasName || rule.field, rule.min));
        } else if (val > max2) {
          errors.push(util2.format(options.messages[key].max, rule.aliasName || rule.field, rule.max));
        }
      }
    }
    var _default2 = size$1;
    size.default = _default2;
    return size;
  }
  var length = {};
  var hasRequiredLength;
  function requireLength() {
    if (hasRequiredLength)
      return length;
    hasRequiredLength = 1;
    var _typeof4 = require_typeof();
    Object.defineProperty(length, "__esModule", {
      value: true
    });
    length.default = void 0;
    var util2 = _interopRequireWildcard2(requireUtil());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj2, nodeInterop) {
      if (!nodeInterop && obj2 && obj2.__esModule) {
        return obj2;
      }
      if (obj2 === null || _typeof4(obj2) !== "object" && typeof obj2 !== "function") {
        return { default: obj2 };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj2)) {
        return cache.get(obj2);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj2) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj2, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj2[key];
          }
        }
      }
      newObj.default = obj2;
      if (cache) {
        cache.set(obj2, newObj);
      }
      return newObj;
    }
    function length$1(rule, value, errors, options) {
      var key = null;
      var isNum = typeof value === "number";
      var isStr = typeof value === "string";
      var isArr = Array.isArray(value);
      if (isNum) {
        key = "number";
      } else if (isStr) {
        key = "string";
      } else if (isArr) {
        key = "array";
      }
      if (!key) {
        return false;
      }
      var val = value;
      var length2 = Number(rule.length);
      var maxLength = Number(rule.maxLength);
      var minLength = Number(rule.minLength);
      if (minLength || maxLength || length2) {
        if (isNum) {
          val = "".concat(val);
        }
        val = val.length;
        if (length2 && val !== rule.length) {
          errors.push(util2.format(options.messages[key].length, rule.aliasName || rule.field, rule.length));
        } else if (val < minLength) {
          errors.push(util2.format(options.messages[key].minLength, rule.aliasName || rule.field, rule.minLength));
        } else if (val > maxLength) {
          errors.push(util2.format(options.messages[key].maxLength, rule.aliasName || rule.field, rule.maxLength));
        }
      }
    }
    var _default2 = length$1;
    length.default = _default2;
    return length;
  }
  var pattern = {};
  var hasRequiredPattern;
  function requirePattern() {
    if (hasRequiredPattern)
      return pattern;
    hasRequiredPattern = 1;
    var _typeof4 = require_typeof();
    Object.defineProperty(pattern, "__esModule", {
      value: true
    });
    pattern.default = void 0;
    var util2 = _interopRequireWildcard2(requireUtil());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj2, nodeInterop) {
      if (!nodeInterop && obj2 && obj2.__esModule) {
        return obj2;
      }
      if (obj2 === null || _typeof4(obj2) !== "object" && typeof obj2 !== "function") {
        return { default: obj2 };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj2)) {
        return cache.get(obj2);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj2) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj2, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj2, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj2[key];
          }
        }
      }
      newObj.default = obj2;
      if (cache) {
        cache.set(obj2, newObj);
      }
      return newObj;
    }
    function pattern$1(rule, value, errors, options) {
      if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
          if (!rule.pattern.test(value)) {
            errors.push(util2.format(options.messages.pattern, rule.aliasName || rule.field, value, rule.pattern));
          }
        } else if (typeof rule.pattern === "string") {
          var _pattern = new RegExp(rule.pattern);
          if (!_pattern.test(value)) {
            errors.push(util2.format(options.messages.pattern, rule.aliasName || rule.field, value, rule.pattern));
          }
        }
      }
    }
    var _default2 = pattern$1;
    pattern.default = _default2;
    return pattern;
  }
  var hasRequiredRules;
  function requireRules() {
    if (hasRequiredRules)
      return rules;
    hasRequiredRules = 1;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(rules, "__esModule", {
      value: true
    });
    rules.default = void 0;
    var _required = _interopRequireDefault2(requireRequired());
    var _format = _interopRequireDefault2(requireFormat());
    var _size = _interopRequireDefault2(requireSize());
    var _length = _interopRequireDefault2(requireLength());
    var _pattern = _interopRequireDefault2(requirePattern());
    var _default2 = {
      required: _required.default,
      format: _format.default,
      min: _size.default,
      max: _size.default,
      minLength: _length.default,
      maxLength: _length.default,
      length: _length.default,
      pattern: _pattern.default
    };
    rules.default = _default2;
    return rules;
  }
  var hasRequiredValidator;
  function requireValidator() {
    if (hasRequiredValidator)
      return validator;
    hasRequiredValidator = 1;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(validator, "__esModule", {
      value: true
    });
    validator.getValidationMethod = getValidationMethod;
    validator.validateFunc = validateFunc;
    var _rules = _interopRequireDefault2(requireRules());
    function validateFunc(validator2, ruleType) {
      return function(rule, value, cb, options) {
        var errors = [];
        if (ruleType !== "required") {
          var _errors = [];
          _rules.default.required(rule, value, _errors, options);
          if (_errors.length > 0) {
            if ("required" in rule && rule.required) {
              if (cb) {
                return cb(_errors);
              } else {
                return Promise.reject(_errors);
              }
            } else if (cb) {
              return cb([]);
            } else {
              return Promise.resolve(null);
            }
          }
        }
        validator2(rule, value, errors, options);
        if (cb) {
          return cb(errors);
        }
        if (Promise) {
          return Promise.resolve(errors);
        }
      };
    }
    function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys2 = Object.keys(rule);
      for (var i = 0; i < keys2.length; i++) {
        var ruleType = keys2[i];
        if (ruleType === "required") {
          continue;
        }
        if (ruleType in _rules.default) {
          return validateFunc(_rules.default[ruleType], ruleType);
        }
      }
      if ("required" in rule && rule.required) {
        return validateFunc(_rules.default.required, "required");
      }
      return null;
    }
    return validator;
  }
  var hasRequiredLib;
  function requireLib() {
    if (hasRequiredLib)
      return lib;
    hasRequiredLib = 1;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(lib, "__esModule", {
      value: true
    });
    lib.default = void 0;
    var _regenerator2 = _interopRequireDefault2(requireRegenerator());
    var _asyncToGenerator22 = _interopRequireDefault2(requireAsyncToGenerator());
    var _defineProperty22 = _interopRequireDefault2(requireDefineProperty());
    var _classCallCheck22 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass22 = _interopRequireDefault2(requireCreateClass());
    var _util = requireUtil();
    var _messages2 = _interopRequireDefault2(requireMessages());
    var _validator = requireValidator();
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          (0, _defineProperty22.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function noop15() {
    }
    function serializeRules(source, rules2) {
      var arr;
      var value;
      var series = {};
      var names = Object.keys(rules2);
      names.forEach(function(name) {
        arr = rules2[name];
        value = source[name];
        if (!Array.isArray(arr)) {
          arr = [arr];
        }
        arr.forEach(function(rule) {
          rule.validator = (0, _validator.getValidationMethod)(rule);
          rule.field = name;
          if (!rule.validator) {
            return;
          }
          series[name] = series[name] || [];
          series[name].push({
            rule,
            value,
            source,
            field: name
          });
        });
      });
      return series;
    }
    var Schema = /* @__PURE__ */ function() {
      function Schema2(rules2) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _classCallCheck22.default)(this, Schema2);
        this._rules = rules2;
        this._options = _objectSpread(_objectSpread({}, options), {}, {
          messages: _objectSpread(_objectSpread({}, _messages2.default), options.messages)
        });
        this.complete = [];
      }
      (0, _createClass22.default)(Schema2, [{
        key: "abort",
        value: function abort() {
          for (var i = 0; i < this.complete.length; i++) {
            this.complete[i] = noop15;
          }
        }
      }, {
        key: "messages",
        value: function messages2(_messages) {
          this._options.messages = Object.assign({}, this._options.messages, _messages);
        }
        /**
         *
         * @param {Object} source - map of field names and values to use in validation
         * @param {Function} callback - OPTIONAL - callback to run after all
         * @returns {null | Promise}
         *          - { null } - if using callbacks
         *          - { Promise }
         *              - { errors: null } - if no rules or no errors
         *              - { errors: Array, fields: Object } - errors from validation and fields that have errors
         */
      }, {
        key: "validate",
        value: function validate(source, callback) {
          var _this2 = this;
          if (!callback) {
            return this.validatePromise(source);
          }
          if (!this._rules || Object.keys(this._rules).length === 0) {
            if (callback) {
              callback(null);
            }
            return;
          }
          var series = serializeRules(source, this._rules);
          if (Object.keys(series).length === 0) {
            callback(null);
          }
          function complete(results) {
            var i;
            var field;
            var errors = [];
            var fields = {};
            function add(e2) {
              if (Array.isArray(e2)) {
                errors = errors.concat(e2);
              } else {
                errors.push(e2);
              }
            }
            for (i = 0; i < results.length; i++) {
              add(results[i]);
            }
            if (!errors.length) {
              errors = null;
              fields = null;
            } else {
              for (i = 0; i < errors.length; i++) {
                field = errors[i].field;
                fields[field] = fields[field] || [];
                fields[field].push(errors[i]);
              }
            }
            callback(errors, fields);
          }
          this.complete.push(complete);
          var idx = this.complete.length;
          (0, _util.asyncMap)(series, this._options, function(data, next) {
            var rule = data.rule;
            rule.field = data.field;
            function cb(e2) {
              var errors = e2;
              if (typeof errors !== "boolean" && !errors) {
                errors = [];
              }
              if (!Array.isArray(errors)) {
                errors = [errors];
              }
              if (errors.length && rule.message) {
                errors = [].concat(rule.message);
              }
              errors = errors.map((0, _util.complementError)(rule));
              next(errors);
            }
            var res = rule.validator(rule, data.value, cb, _this2._options);
            if (res && res.then) {
              res.then(function() {
                return cb();
              }, function(e2) {
                return cb(e2);
              });
            }
          }, function(results) {
            _this2.complete[idx - 1](results);
          });
        }
        /**
         *
         * @param {Object} source - map of field names and values to use in validation
         * @returns {Promise}
         *          - { errors: null } if no rules or no errors
         *          - { errors: Array, fields: Object } - errors from validation and fields that have errors
         */
      }, {
        key: "validatePromise",
        value: function() {
          var _validatePromise = (0, _asyncToGenerator22.default)(/* @__PURE__ */ _regenerator2.default.mark(function _callee2(source) {
            var _this2 = this;
            var series, results;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!this._rules || Object.keys(this._rules).length === 0)) {
                      _context2.next = 2;
                      break;
                    }
                    return _context2.abrupt("return", {
                      errors: null
                    });
                  case 2:
                    series = serializeRules(source, this._rules);
                    if (!(Object.keys(series).length === 0)) {
                      _context2.next = 5;
                      break;
                    }
                    return _context2.abrupt("return", {
                      errors: null
                    });
                  case 5:
                    _context2.next = 7;
                    return (0, _util.asyncMapPromise)(series, this._options, /* @__PURE__ */ function() {
                      var _ref = (0, _asyncToGenerator22.default)(/* @__PURE__ */ _regenerator2.default.mark(function _callee(data) {
                        var rule, errors;
                        return _regenerator2.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                rule = data.rule;
                                rule.field = data.field;
                                _context.prev = 2;
                                _context.next = 5;
                                return new Promise(function(resolve, reject) {
                                  function cb(e2) {
                                    resolve(e2);
                                  }
                                  var res = rule.validator(rule, data.value, cb, _this2._options);
                                  if (res && res.then) {
                                    res.then(function() {
                                      return cb();
                                    }, function(e2) {
                                      return cb(e2);
                                    });
                                  }
                                });
                              case 5:
                                errors = _context.sent;
                                _context.next = 11;
                                break;
                              case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](2);
                                errors = _context.t0;
                              case 11:
                                if (!errors) {
                                  _context.next = 18;
                                  break;
                                }
                                if (typeof errors !== "boolean" && !errors) {
                                  errors = [];
                                }
                                if (!Array.isArray(errors)) {
                                  errors = [errors];
                                }
                                if (errors.length && rule.message) {
                                  errors = [].concat(rule.message);
                                }
                                return _context.abrupt("return", errors.map((0, _util.complementError)(rule)));
                              case 18:
                                return _context.abrupt("return", []);
                              case 19:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, null, [[2, 8]]);
                      }));
                      return function(_x2) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  case 7:
                    results = _context2.sent;
                    return _context2.abrupt("return", (0, _util.processErrorResults)(results));
                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function validatePromise(_x) {
            return _validatePromise.apply(this, arguments);
          }
          return validatePromise;
        }()
      }]);
      return Schema2;
    }();
    var _default2 = Schema;
    lib.default = _default2;
    return lib;
  }
  var utils = {};
  var hasRequiredUtils;
  function requireUtils() {
    if (hasRequiredUtils)
      return utils;
    hasRequiredUtils = 1;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(utils, "__esModule", {
      value: true
    });
    utils.getIn = getIn;
    utils.setIn = setIn;
    utils.deleteIn = deleteIn;
    utils.getErrorStrs = getErrorStrs;
    utils.getParams = getParams;
    utils.getValueFromEvent = getValueFromEvent;
    utils.mapValidateRules = mapValidateRules;
    utils.cloneToRuleArr = cloneToRuleArr;
    utils.warning = void 0;
    var _defineProperty22 = _interopRequireDefault2(requireDefineProperty());
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(source, true).forEach(function(key) {
            (0, _defineProperty22.default)(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function getIn(state, name) {
      if (!state) {
        return state;
      }
      var path = typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "";
      var length2 = path.length;
      if (!length2) {
        return void 0;
      }
      var result = state;
      for (var i = 0; i < length2 && !!result; ++i) {
        result = result[path[i]];
      }
      return result;
    }
    var setInWithPath = function setInWithPath2(state, value, path, pathIndex) {
      if (pathIndex >= path.length) {
        return value;
      }
      var first = path[pathIndex];
      var next = setInWithPath2(state && state[first], value, path, pathIndex + 1);
      if (!state) {
        var initialized = isNaN(first) ? {} : [];
        initialized[first] = next;
        return initialized;
      }
      if (Array.isArray(state)) {
        var copy = [].concat(state);
        copy[first] = next;
        return copy;
      }
      return Object.assign({}, state, (0, _defineProperty22.default)({}, first, next));
    };
    function setIn(state, name, value) {
      return setInWithPath(state, value, typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "", 0);
    }
    function deleteIn(state, name) {
      if (!state) {
        return;
      }
      var path = typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "";
      var length2 = path.length;
      if (!length2) {
        return state;
      }
      var result = state;
      for (var i = 0; i < length2 && !!result; ++i) {
        if (i === length2 - 1) {
          delete result[path[i]];
        } else {
          result = result[path[i]];
        }
      }
      return state;
    }
    function getErrorStrs(errors, processErrorMessage) {
      if (errors) {
        return errors.map(function(e2) {
          var message2 = typeof e2.message !== "undefined" ? e2.message : e2;
          if (typeof processErrorMessage === "function") {
            return processErrorMessage(message2);
          }
          return message2;
        });
      }
      return errors;
    }
    function getParams(ns, cb) {
      var names = typeof ns === "string" ? [ns] : ns;
      var callback = cb;
      if (cb === void 0 && typeof names === "function") {
        callback = names;
        names = void 0;
      }
      return {
        names,
        callback
      };
    }
    function getValueFromEvent(e2) {
      if (!e2 || !e2.target || !e2.preventDefault) {
        return e2;
      }
      var target = e2.target;
      if (target.type === "checkbox") {
        return target.checked;
      } else if (target.type === "radio") {
        if (target.value) {
          return target.value;
        } else {
          return target.checked;
        }
      }
      return target.value;
    }
    function validateMap(rulesMap, rule, defaultTrigger) {
      var nrule = Object.assign({}, rule);
      if (!nrule.trigger) {
        nrule.trigger = [defaultTrigger];
      }
      if (typeof nrule.trigger === "string") {
        nrule.trigger = [nrule.trigger];
      }
      for (var i = 0; i < nrule.trigger.length; i++) {
        var trigger = nrule.trigger[i];
        if (trigger in rulesMap) {
          rulesMap[trigger].push(nrule);
        } else {
          rulesMap[trigger] = [nrule];
        }
      }
      delete nrule.trigger;
    }
    function mapValidateRules(rules2, defaultTrigger) {
      var rulesMap = {};
      rules2.forEach(function(rule) {
        validateMap(rulesMap, rule, defaultTrigger);
      });
      return rulesMap;
    }
    var warn = function warn2() {
    };
    if (typeof process !== "undefined" && process.env && false) {
      warn = function warn2() {
        if (typeof console !== "undefined" && console.error) {
          var _console;
          (_console = console).error.apply(_console, arguments);
        }
      };
    }
    var warning2 = warn;
    utils.warning = warning2;
    function cloneToRuleArr(rules2) {
      if (!rules2) {
        return [];
      }
      var rulesArr = Array.isArray(rules2) ? rules2 : [rules2];
      return rulesArr.map(function(rule) {
        return _objectSpread({}, rule);
      });
    }
    return utils;
  }
  var _interopRequireDefault = interopRequireDefaultExports;
  Object.defineProperty(lib$1, "__esModule", {
    value: true
  });
  var default_1 = lib$1.default = void 0;
  var _regenerator = _interopRequireDefault(requireRegenerator());
  var _asyncToGenerator2 = _interopRequireDefault(requireAsyncToGenerator());
  var _typeof2 = _interopRequireDefault(require_typeof());
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _slicedToArray2 = _interopRequireDefault(requireSlicedToArray());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _validate2 = _interopRequireDefault(requireLib());
  var _utils = requireUtils();
  var initMeta = {
    state: "",
    valueName: "value",
    trigger: "onChange",
    inputValues: []
  };
  var Field$1 = /* @__PURE__ */ function() {
    (0, _createClass2.default)(Field2, null, [{
      key: "create",
      value: function create6(com) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new this(com, options);
      }
    }, {
      key: "getUseField",
      value: function getUseField(_ref) {
        var _this2 = this;
        var useState2 = _ref.useState, useMemo2 = _ref.useMemo;
        return function() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var _useState = useState2(), _useState2 = (0, _slicedToArray2.default)(_useState, 2), setState = _useState2[1];
          var field = useMemo2(function() {
            return _this2.create({
              setState
            }, options);
          }, [setState]);
          return field;
        };
      }
    }]);
    function Field2(com) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _classCallCheck2.default)(this, Field2);
      if (!com) {
        (0, _utils.warning)("`this` is missing in `Field`, you should use like `new Field(this)`");
      }
      this.com = com;
      this.fieldsMeta = {};
      this.cachedBind = {};
      this.instance = {};
      this.instanceCount = {};
      this.reRenders = {};
      this.values = Object.assign({}, options.values);
      this.processErrorMessage = options.processErrorMessage;
      this.afterValidateRerender = options.afterValidateRerender;
      this.options = Object.assign({
        parseName: false,
        forceUpdate: false,
        scrollToFirstError: true,
        first: false,
        onChange: function onChange6() {
        },
        autoUnmount: true,
        autoValidate: true
      }, options);
      ["init", "getValue", "getValues", "setValue", "setValues", "getError", "getErrors", "setError", "setErrors", "validateCallback", "validatePromise", "getState", "reset", "resetToDefault", "remove", "spliceArray", "addArrayValue", "deleteArrayValue", "getNames"].forEach(function(m2) {
        _this2[m2] = _this2[m2].bind(_this2);
      });
    }
    (0, _createClass2.default)(Field2, [{
      key: "setOptions",
      value: function setOptions(options) {
        Object.assign(this.options, options);
      }
      /**
       * Controlled Component
       * @param {String} name
       * @param {Object} fieldOption
       * @returns {Object} {value, onChange}
       */
    }, {
      key: "init",
      value: function init(name) {
        var _this3 = this;
        var fieldOption = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var rprops = arguments.length > 2 ? arguments[2] : void 0;
        var id2 = fieldOption.id, initValue = fieldOption.initValue, _fieldOption$valueNam = fieldOption.valueName, valueName = _fieldOption$valueNam === void 0 ? "value" : _fieldOption$valueNam, _fieldOption$trigger = fieldOption.trigger, trigger = _fieldOption$trigger === void 0 ? "onChange" : _fieldOption$trigger, _fieldOption$rules = fieldOption.rules, rules2 = _fieldOption$rules === void 0 ? [] : _fieldOption$rules, _fieldOption$props = fieldOption.props, props = _fieldOption$props === void 0 ? {} : _fieldOption$props, _fieldOption$getValue = fieldOption.getValueFromEvent, getValueFromEvent = _fieldOption$getValue === void 0 ? null : _fieldOption$getValue, _fieldOption$getValue2 = fieldOption.getValueFormatter, getValueFormatter = _fieldOption$getValue2 === void 0 ? getValueFromEvent : _fieldOption$getValue2, setValueFormatter = fieldOption.setValueFormatter, _fieldOption$autoVali = fieldOption.autoValidate, autoValidate = _fieldOption$autoVali === void 0 ? true : _fieldOption$autoVali, reRender = fieldOption.reRender;
        var parseName = this.options.parseName;
        if (getValueFromEvent) {
          (0, _utils.warning)("`getValueFromEvent` has been deprecated in `Field`, use `getValueFormatter` instead of it");
        }
        var originalProps = Object.assign({}, props, rprops);
        var defaultValueName = "default".concat(valueName[0].toUpperCase()).concat(valueName.slice(1));
        var defaultValue;
        if (typeof initValue !== "undefined") {
          defaultValue = initValue;
        } else if (typeof originalProps[defaultValueName] !== "undefined") {
          defaultValue = originalProps[defaultValueName];
        }
        var field = this._getInitMeta(name);
        Object.assign(field, {
          valueName,
          initValue: defaultValue,
          disabled: "disabled" in originalProps ? originalProps.disabled : false,
          getValueFormatter,
          setValueFormatter,
          rules: (0, _utils.cloneToRuleArr)(rules2),
          ref: originalProps.ref
        });
        if (valueName in originalProps) {
          field.value = originalProps[valueName];
          if (parseName) {
            this.values = (0, _utils.setIn)(this.values, name, field.value);
          } else {
            this.values[name] = field.value;
          }
        }
        if (!("value" in field)) {
          if (parseName) {
            var cachedValue = (0, _utils.getIn)(this.values, name);
            if (typeof cachedValue !== "undefined") {
              field.value = cachedValue;
            } else {
              field.value = defaultValue;
              this.values = (0, _utils.setIn)(this.values, name, field.value);
            }
          } else {
            var _cachedValue = this.values[name];
            if (typeof _cachedValue !== "undefined") {
              field.value = _cachedValue;
            } else if (typeof defaultValue !== "undefined") {
              field.value = defaultValue;
              this.values[name] = field.value;
            }
          }
        }
        var inputProps = (0, _defineProperty2.default)({
          "data-meta": "Field",
          id: id2 || name,
          ref: this._getCacheBind(name, "".concat(name, "__ref"), this._saveRef)
        }, valueName, setValueFormatter ? setValueFormatter(field.value, field.inputValues) : field.value);
        var rulesMap = {};
        if (this.options.autoValidate && autoValidate !== false) {
          rulesMap = (0, _utils.mapValidateRules)(field.rules, trigger);
          var _loop = function _loop2(action2) {
            if (action2 === trigger) {
              return "continue";
            }
            var actionRule = rulesMap[action2];
            inputProps[action2] = function() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              _this3._callNativePropsEvent.apply(_this3, [action2, originalProps].concat(args));
              _this3._validate(name, actionRule, action2);
            };
          };
          for (var action in rulesMap) {
            var _ret = _loop(action);
            if (_ret === "continue")
              continue;
          }
        }
        inputProps[trigger] = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3._updateFieldValue.apply(_this3, [name].concat(args));
          _this3._resetError(name);
          _this3._callNativePropsEvent.apply(_this3, [trigger, originalProps].concat(args));
          _this3.options.onChange(name, field.value);
          var rule = rulesMap[trigger];
          rule && _this3._validate(name, rule, trigger);
          _this3._reRender(name, trigger);
        };
        if (reRender && typeof reRender === "function") {
          this.reRenders[name] = reRender;
        }
        delete originalProps[defaultValueName];
        return Object.assign({}, originalProps, inputProps);
      }
      /**
       * call native event from props.onXx
       * eg: props.onChange props.onBlur props.onFocus
       */
    }, {
      key: "_callNativePropsEvent",
      value: function _callNativePropsEvent(action, props) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }
        action in props && typeof props[action] === "function" && props[action].apply(props, args);
      }
    }, {
      key: "_getInitMeta",
      value: function _getInitMeta(name) {
        if (!(name in this.fieldsMeta)) {
          this.fieldsMeta[name] = Object.assign({}, initMeta);
        }
        return this.fieldsMeta[name];
      }
      /**
       * update field.value and validate
       */
    }, {
      key: "_updateFieldValue",
      value: function _updateFieldValue(name) {
        for (var _len4 = arguments.length, others = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          others[_key4 - 1] = arguments[_key4];
        }
        var e2 = others[0];
        var field = this._get(name);
        if (!field) {
          return;
        }
        field.value = field.getValueFormatter ? field.getValueFormatter.apply(this, others) : (0, _utils.getValueFromEvent)(e2);
        field.inputValues = others;
        if (this.options.parseName) {
          this.values = (0, _utils.setIn)(this.values, name, field.value);
        } else {
          this.values[name] = field.value;
        }
      }
      /**
       * ref must always be the same function, or if not it will be triggerd every time.
       * @param {String} name name of component
       * @param {String} action key to find ref
       * @param {Function} fn saveRef
       */
    }, {
      key: "_getCacheBind",
      value: function _getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name);
        }
        return cache[action];
      }
    }, {
      key: "_setCache",
      value: function _setCache(name, action, hander) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        cache[action] = hander;
      }
    }, {
      key: "_getCache",
      value: function _getCache(name, action) {
        var cache = this.cachedBind[name] || {};
        return cache[action];
      }
      /**
       * NOTE: saveRef is async function. it will be called after render
       * @param {String} name name of component
       * @param {Function} component ref
       */
    }, {
      key: "_saveRef",
      value: function _saveRef(name, component) {
        var key = "".concat(name, "_field");
        var autoUnmount = this.options.autoUnmount;
        if (!component && autoUnmount) {
          this.instanceCount[name] && this.instanceCount[name]--;
          if (this.instanceCount[name] > 0) {
            return;
          }
          var cache = this.fieldsMeta[name];
          cache && this._setCache(name, key, cache);
          delete this.instance[name];
          delete this.reRenders[name];
          this.remove(name);
          return;
        }
        if (autoUnmount && !this.fieldsMeta[name] && this._getCache(name, key)) {
          this.fieldsMeta[name] = this._getCache(name, key);
          this.setValue(name, this.fieldsMeta[name] && this.fieldsMeta[name].value, false);
        }
        var field = this._get(name);
        if (field) {
          var ref = field.ref;
          if (ref) {
            if (typeof ref === "string") {
              throw new Error("can not set string ref for ".concat(name));
            } else if (typeof ref === "function") {
              ref(component);
            } else if ((0, _typeof2.default)(ref) === "object" && "current" in ref) {
              ref.current = component;
            }
          }
          if (autoUnmount && component) {
            var cnt = this.instanceCount[name];
            if (!cnt) {
              cnt = 0;
            }
            this.instanceCount[name] = cnt + 1;
          }
          this.instance[name] = component;
        }
      }
      /**
       * validate one Component
       * @param {String} name name of Component
       * @param {Array} rule
       * @param {String} trigger onChange/onBlur/onItemClick/...
       */
    }, {
      key: "_validate",
      value: function _validate(name, rule, trigger) {
        var _this4 = this;
        var field = this._get(name);
        if (!field) {
          return;
        }
        var value = field.value;
        field.state = "loading";
        var validate = this._getCache(name, trigger);
        if (validate && typeof validate.abort === "function") {
          validate.abort();
        }
        validate = new _validate2.default((0, _defineProperty2.default)({}, name, rule), {
          messages: this.options.messages
        });
        this._setCache(name, trigger, validate);
        validate.validate((0, _defineProperty2.default)({}, name, value), function(errors) {
          var newErrors, newState;
          if (errors && errors.length) {
            newErrors = (0, _utils.getErrorStrs)(errors, _this4.processErrorMessage);
            newState = "error";
          } else {
            newErrors = [];
            newState = "success";
          }
          var reRender = false;
          if (newState !== field.state || !field.errors || newErrors.length !== field.errors.length || newErrors.find(function(e2, idx) {
            return e2 !== field.errors[idx];
          })) {
            reRender = true;
          }
          field.errors = newErrors;
          field.state = newState;
          reRender && _this4._reRender(name, "validate");
        });
      }
    }, {
      key: "getValue",
      value: function getValue(name) {
        if (this.options.parseName) {
          return (0, _utils.getIn)(this.values, name);
        }
        return this.values[name];
      }
      /**
       * 1. get values by names.
       * 2. If no names passed, return shallow copy of `field.values`
       * @param {Array} names
       */
    }, {
      key: "getValues",
      value: function getValues(names) {
        var _this5 = this;
        var allValues = {};
        if (names && names.length) {
          names.forEach(function(name) {
            allValues[name] = _this5.getValue(name);
          });
        } else {
          Object.assign(allValues, this.values);
        }
        return allValues;
      }
    }, {
      key: "setValue",
      value: function setValue(name, value) {
        var reRender = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (name in this.fieldsMeta) {
          this.fieldsMeta[name].value = value;
        }
        if (this.options.parseName) {
          this.values = (0, _utils.setIn)(this.values, name, value);
        } else {
          this.values[name] = value;
        }
        reRender && this._reRender(name, "setValue");
      }
    }, {
      key: "setValues",
      value: function setValues() {
        var _this6 = this;
        var fieldsValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var reRender = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (!this.options.parseName) {
          Object.keys(fieldsValue).forEach(function(name) {
            _this6.setValue(name, fieldsValue[name], false);
          });
        } else {
          this.values = Object.assign({}, this.values, fieldsValue);
          var fields = this.getNames();
          fields.forEach(function(name) {
            var value = (0, _utils.getIn)(_this6.values, name);
            if (value !== void 0) {
              _this6.fieldsMeta[name].value = value;
            } else {
              _this6.values = (0, _utils.setIn)(_this6.values, name, _this6.fieldsMeta[name].value);
            }
          });
        }
        reRender && this._reRender();
      }
    }, {
      key: "setError",
      value: function setError(name, errors) {
        var err = Array.isArray(errors) ? errors : errors ? [errors] : [];
        if (name in this.fieldsMeta) {
          this.fieldsMeta[name].errors = err;
        } else {
          this.fieldsMeta[name] = {
            errors: err
          };
        }
        if (this.fieldsMeta[name].errors && this.fieldsMeta[name].errors.length > 0) {
          this.fieldsMeta[name].state = "error";
        } else {
          this.fieldsMeta[name].state = "";
        }
        this._reRender(name, "setError");
      }
    }, {
      key: "setErrors",
      value: function setErrors() {
        var _this7 = this;
        var fieldsErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Object.keys(fieldsErrors).forEach(function(name) {
          _this7.setError(name, fieldsErrors[name]);
        });
      }
    }, {
      key: "getError",
      value: function getError(name) {
        var field = this._get(name);
        if (field && field.errors && field.errors.length) {
          return field.errors;
        }
        return null;
      }
    }, {
      key: "getErrors",
      value: function getErrors(names) {
        var _this8 = this;
        var fields = names || this.getNames();
        var allErrors = {};
        fields.forEach(function(f2) {
          allErrors[f2] = _this8.getError(f2);
        });
        return allErrors;
      }
    }, {
      key: "getState",
      value: function getState(name) {
        var field = this._get(name);
        if (field && field.state) {
          return field.state;
        }
        return "";
      }
      /**
       * Get errors using `getErrors` and format to match the structure of errors returned in field.validate
       * @param {Array} fieldNames
       * @return {Object || null} map of inputs and their errors
       */
    }, {
      key: "formatGetErrors",
      value: function formatGetErrors(fieldNames) {
        var errors = this.getErrors(fieldNames);
        var formattedErrors = null;
        for (var field in errors) {
          if (errors.hasOwnProperty(field) && errors[field]) {
            var errorsObj = errors[field];
            if (!formattedErrors) {
              formattedErrors = {};
            }
            formattedErrors[field] = {
              errors: errorsObj
            };
          }
        }
        return formattedErrors;
      }
      /**
       * validate by trigger
       * @param {Array} ns names
       * @param {Function} cb callback after validate
       */
    }, {
      key: "validateCallback",
      value: function validateCallback(ns, cb) {
        var _this9 = this;
        var _getParams = (0, _utils.getParams)(ns, cb), names = _getParams.names, callback = _getParams.callback;
        var fieldNames = names || this.getNames();
        var descriptor2 = {};
        var values2 = {};
        var hasRule = false;
        for (var i = 0; i < fieldNames.length; i++) {
          var name = fieldNames[i];
          var field = this._get(name);
          if (!field) {
            continue;
          }
          if (field.rules && field.rules.length) {
            descriptor2[name] = field.rules;
            values2[name] = this.getValue(name);
            hasRule = true;
            field.errors = [];
            field.state = "";
          }
        }
        if (!hasRule) {
          var errors = this.formatGetErrors(fieldNames);
          callback && callback(errors, this.getValues(names ? fieldNames : []));
          return;
        }
        var validate = new _validate2.default(descriptor2, {
          first: this.options.first,
          messages: this.options.messages
        });
        validate.validate(values2, function(errors2) {
          var errorsGroup = null;
          if (errors2 && errors2.length) {
            errorsGroup = {};
            errors2.forEach(function(e2) {
              var fieldName = e2.field;
              if (!errorsGroup[fieldName]) {
                errorsGroup[fieldName] = {
                  errors: []
                };
              }
              var fieldErrors = errorsGroup[fieldName].errors;
              fieldErrors.push(e2.message);
            });
          }
          if (errorsGroup) {
            Object.keys(errorsGroup).forEach(function(i2) {
              var field2 = _this9._get(i2);
              if (field2) {
                field2.errors = (0, _utils.getErrorStrs)(errorsGroup[i2].errors, _this9.processErrorMessage);
                field2.state = "error";
              }
            });
          }
          var formattedGetErrors = _this9.formatGetErrors(fieldNames);
          if (formattedGetErrors) {
            errorsGroup = Object.assign({}, formattedGetErrors, errorsGroup);
          }
          for (var _i = 0; _i < fieldNames.length; _i++) {
            var _name = fieldNames[_i];
            var _field = _this9._get(_name);
            if (_field && _field.rules && !(errorsGroup && _name in errorsGroup)) {
              _field.state = "success";
            }
          }
          callback && callback(errorsGroup, _this9.getValues(names ? fieldNames : []));
          _this9._reRender(names, "validate");
          if (typeof _this9.afterValidateRerender === "function") {
            _this9.afterValidateRerender({
              errorsGroup,
              options: _this9.options,
              instance: _this9.instance
            });
          }
        });
      }
      /**
       * validate by trigger - Promise version
       * NOTES:
       * - `afterValidateRerender` is not called in `validatePromise`. The rerender is called just before this function
       *      returns a promise, so use the returned promise to call any after rerender logic.
       *
       * @param {Array} ns names
       * @param {Function} cb (Optional) callback after validate, must return a promise or a value
       *                  - ({errors, values}) => Promise({errors, values}) | {errors, values}
       * @returns {Promise} - resolves with {errors, values}
       */
    }, {
      key: "validatePromise",
      value: function() {
        var _validatePromise = (0, _asyncToGenerator2.default)(
          /* @__PURE__ */ _regenerator.default.mark(function _callee(ns, cb) {
            var _getParams2, names, callback, fieldNames, descriptor2, values2, hasRule, i, name, field, _errors, validate, results, errors, errorsGroup, callbackResults;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _getParams2 = (0, _utils.getParams)(ns, cb), names = _getParams2.names, callback = _getParams2.callback;
                    fieldNames = names || this.getNames();
                    descriptor2 = {};
                    values2 = {};
                    hasRule = false;
                    i = 0;
                  case 6:
                    if (!(i < fieldNames.length)) {
                      _context.next = 15;
                      break;
                    }
                    name = fieldNames[i];
                    field = this._get(name);
                    if (field) {
                      _context.next = 11;
                      break;
                    }
                    return _context.abrupt("continue", 12);
                  case 11:
                    if (field.rules && field.rules.length) {
                      descriptor2[name] = field.rules;
                      values2[name] = this.getValue(name);
                      hasRule = true;
                      field.errors = [];
                      field.state = "";
                    }
                  case 12:
                    i++;
                    _context.next = 6;
                    break;
                  case 15:
                    if (hasRule) {
                      _context.next = 22;
                      break;
                    }
                    _errors = this.formatGetErrors(fieldNames);
                    if (!callback) {
                      _context.next = 21;
                      break;
                    }
                    return _context.abrupt("return", callback({
                      errors: _errors,
                      values: this.getValues(names ? fieldNames : [])
                    }));
                  case 21:
                    return _context.abrupt("return", {
                      errors: _errors,
                      values: this.getValues(names ? fieldNames : [])
                    });
                  case 22:
                    validate = new _validate2.default(descriptor2, {
                      first: this.options.first,
                      messages: this.options.messages
                    });
                    _context.next = 25;
                    return validate.validatePromise(values2);
                  case 25:
                    results = _context.sent;
                    errors = results && results.errors || [];
                    errorsGroup = this._getErrorsGroup({
                      errors,
                      fieldNames
                    });
                    callbackResults = {
                      errors: errorsGroup,
                      values: this.getValues(names ? fieldNames : [])
                    };
                    _context.prev = 29;
                    if (!callback) {
                      _context.next = 34;
                      break;
                    }
                    _context.next = 33;
                    return callback(callbackResults);
                  case 33:
                    callbackResults = _context.sent;
                  case 34:
                    _context.next = 39;
                    break;
                  case 36:
                    _context.prev = 36;
                    _context.t0 = _context["catch"](29);
                    return _context.abrupt("return", _context.t0);
                  case 39:
                    this._reRender(names, "validate");
                    return _context.abrupt("return", callbackResults);
                  case 41:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[29, 36]]);
          })
        );
        function validatePromise(_x, _x2) {
          return _validatePromise.apply(this, arguments);
        }
        return validatePromise;
      }()
    }, {
      key: "_getErrorsGroup",
      value: function _getErrorsGroup(_ref3) {
        var _this10 = this;
        var errors = _ref3.errors, fieldNames = _ref3.fieldNames;
        var errorsGroup = null;
        if (errors && errors.length) {
          errorsGroup = {};
          errors.forEach(function(e2) {
            var fieldName = e2.field;
            if (!errorsGroup[fieldName]) {
              errorsGroup[fieldName] = {
                errors: []
              };
            }
            var fieldErrors = errorsGroup[fieldName].errors;
            fieldErrors.push(e2.message);
          });
        }
        if (errorsGroup) {
          Object.keys(errorsGroup).forEach(function(i2) {
            var field2 = _this10._get(i2);
            if (field2) {
              field2.errors = (0, _utils.getErrorStrs)(errorsGroup[i2].errors, _this10.processErrorMessage);
              field2.state = "error";
            }
          });
        }
        var formattedGetErrors = this.formatGetErrors(fieldNames);
        if (formattedGetErrors) {
          errorsGroup = Object.assign({}, formattedGetErrors, errorsGroup);
        }
        for (var i = 0; i < fieldNames.length; i++) {
          var name = fieldNames[i];
          var field = this._get(name);
          if (field && field.rules && !(errorsGroup && name in errorsGroup)) {
            field.state = "success";
          }
        }
        return errorsGroup;
      }
    }, {
      key: "_reset",
      value: function _reset(ns, backToDefault) {
        var _this11 = this;
        if (typeof ns === "string") {
          ns = [ns];
        }
        var changed = false;
        var names = ns || Object.keys(this.fieldsMeta);
        if (!ns) {
          this.values = {};
        }
        names.forEach(function(name) {
          var field = _this11._get(name);
          if (field) {
            changed = true;
            field.value = backToDefault ? field.initValue : void 0;
            field.state = "";
            delete field.errors;
            delete field.rules;
            delete field.rulesMap;
            if (_this11.options.parseName) {
              _this11.values = (0, _utils.setIn)(_this11.values, name, field.value);
            } else {
              _this11.values[name] = field.value;
            }
          }
        });
        if (changed) {
          this._reRender(names, "reset");
        }
      }
    }, {
      key: "reset",
      value: function reset(ns) {
        this._reset(ns, false);
      }
    }, {
      key: "resetToDefault",
      value: function resetToDefault(ns) {
        this._reset(ns, true);
      }
    }, {
      key: "getNames",
      value: function getNames() {
        var fieldsMeta = this.fieldsMeta;
        return Object.keys(fieldsMeta).filter(function() {
          return true;
        });
      }
    }, {
      key: "remove",
      value: function remove(ns) {
        var _this12 = this;
        if (typeof ns === "string") {
          ns = [ns];
        }
        if (!ns) {
          this.values = {};
        }
        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function(name) {
          if (name in _this12.fieldsMeta) {
            delete _this12.fieldsMeta[name];
          }
          if (_this12.options.parseName) {
            _this12.values = (0, _utils.deleteIn)(_this12.values, name);
          } else {
            delete _this12.values[name];
          }
        });
      }
    }, {
      key: "addArrayValue",
      value: function addArrayValue(key, index2) {
        for (var _len5 = arguments.length, argv = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
          argv[_key5 - 2] = arguments[_key5];
        }
        return this._spliceArrayValue.apply(this, [key, index2, 0].concat(argv));
      }
    }, {
      key: "deleteArrayValue",
      value: function deleteArrayValue(key, index2) {
        var howmany = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        return this._spliceArrayValue(key, index2, howmany);
      }
      /**
       * splice array
       * @param {String} key
       * @param {Number} startIndex
       * @param {Number} howmany
       * @param {Array} argv
       * @param {*} value
       */
    }, {
      key: "_spliceArrayValue",
      value: function _spliceArrayValue(key, index2, howmany) {
        var _this13 = this;
        for (var _len6 = arguments.length, argv = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
          argv[_key6 - 3] = arguments[_key6];
        }
        var argc = argv.length;
        var offset = howmany - argc;
        var startIndex = index2 + howmany;
        var listMap = {};
        var replacedReg = /\$/g;
        var replacedKey = key.replace(replacedReg, "\\$&");
        var keyReg = new RegExp("^(".concat(replacedKey, ".)(\\d+)"));
        var replaceArgv = [];
        var names = this.getNames();
        names.forEach(function(n2) {
          var ret = keyReg.exec(n2);
          if (ret) {
            var idx = parseInt(ret[2]);
            if (idx >= startIndex) {
              var l2 = listMap[idx];
              var item = {
                from: n2,
                to: n2.replace(keyReg, function(match, p1) {
                  return "".concat(p1).concat(idx - offset);
                })
              };
              if (!l2) {
                listMap[idx] = [item];
              } else {
                l2.push(item);
              }
            }
            if (offset > 0 && idx >= index2 && idx < index2 + howmany) {
              replaceArgv.push(n2);
            }
          }
        });
        var offsetList = Object.keys(listMap).map(function(i) {
          return {
            index: Number(i),
            list: listMap[i]
          };
        }).sort(function(a, b2) {
          return offset > 0 ? a.index - b2.index : b2.index - a.index;
        });
        offsetList.forEach(function(l2) {
          var list2 = l2.list;
          list2.forEach(function(i) {
            _this13.fieldsMeta[i.to] = _this13.fieldsMeta[i.from];
          });
        });
        if (offsetList.length > 0) {
          var removeList = offsetList.slice(offsetList.length - (offset < 0 ? -offset : offset), offsetList.length);
          removeList.forEach(function(item) {
            item.list.forEach(function(i) {
              delete _this13.fieldsMeta[i.from];
            });
          });
        } else {
          replaceArgv.forEach(function(i) {
            delete _this13.fieldsMeta[i];
          });
        }
        var p2 = this.getValue(key);
        if (p2) {
          p2.splice.apply(p2, [index2, howmany].concat(argv));
        }
        this._reRender();
      }
      /**
       * splice in a Array [deprecated]
       * @param {String} keyMatch like name.{index}
       * @param {Number} startIndex index
       */
    }, {
      key: "spliceArray",
      value: function spliceArray(keyMatch, startIndex, howmany) {
        var _this14 = this;
        if (keyMatch.match(/{index}$/) === -1) {
          (0, _utils.warning)("key should match /{index}$/");
          return;
        }
        var reg = keyMatch.replace("{index}", "(\\d+)");
        var keyReg = new RegExp("^".concat(reg));
        var listMap = {};
        var names = this.getNames();
        names.forEach(function(n2) {
          var ret = keyReg.exec(n2);
          if (ret) {
            var index2 = parseInt(ret[1]);
            if (index2 > startIndex) {
              var l2 = listMap[index2];
              var item = {
                from: n2,
                to: "".concat(keyMatch.replace("{index}", index2 - 1)).concat(n2.replace(ret[0], ""))
              };
              if (!l2) {
                listMap[index2] = [item];
              } else {
                l2.push(item);
              }
            }
          }
        });
        var idxList = Object.keys(listMap).map(function(i) {
          return {
            index: Number(i),
            list: listMap[i]
          };
        }).sort(function(a, b2) {
          return a.index < b2.index;
        });
        if (idxList.length > 0 && idxList[0].index === startIndex + 1) {
          idxList.forEach(function(l2) {
            var list2 = l2.list;
            list2.forEach(function(i) {
              var v2 = _this14.getValue(i.from);
              _this14.setValue(i.to, v2, false);
            });
          });
          var lastIdxList = idxList[idxList.length - 1];
          lastIdxList.list.forEach(function(i) {
            _this14.remove(i.from);
          });
          var parentName = keyMatch.replace(".{index}", "");
          parentName = parentName.replace("[{index}]", "");
          var parent = this.getValue(parentName);
          if (parent) {
            parent.length--;
          }
        }
      }
    }, {
      key: "_resetError",
      value: function _resetError(name) {
        var field = this._get(name);
        if (field) {
          delete field.errors;
          field.state = "";
        }
      }
      //trigger rerender
    }, {
      key: "_reRender",
      value: function _reRender(name, action) {
        var _this15 = this;
        if (name) {
          var names = Array.isArray(name) ? name : [name];
          if (names.length && names.every(function(n2) {
            return _this15.reRenders[n2];
          })) {
            names.forEach(function(n2) {
              var reRender = _this15.reRenders[n2];
              reRender(action);
            });
            return;
          }
        }
        if (this.com) {
          if (!this.options.forceUpdate && this.com.setState) {
            this.com.setState({});
          } else if (this.com.forceUpdate) {
            this.com.forceUpdate();
          }
        }
      }
    }, {
      key: "_get",
      value: function _get(name) {
        return name in this.fieldsMeta ? this.fieldsMeta[name] : null;
      }
    }, {
      key: "get",
      value: function get(name) {
        if (name) {
          return this._get(name);
        } else {
          return this.fieldsMeta;
        }
      }
    }]);
    return Field2;
  }();
  var _default = Field$1;
  default_1 = lib$1.default = _default;
  function cloneAndAddKey(element) {
    if (element && React.isValidElement(element)) {
      var key = element.key || "error";
      return React.cloneElement(element, { key });
    }
    return element;
  }
  function scrollToFirstError(_ref) {
    var errorsGroup = _ref.errorsGroup, options = _ref.options, instance2 = _ref.instance;
    if (errorsGroup && options.scrollToFirstError) {
      var firstNode = void 0;
      var firstTop = void 0;
      for (var i in errorsGroup) {
        if (errorsGroup.hasOwnProperty(i)) {
          var node = ReactDOM.findDOMNode(instance2[i]);
          if (!node) {
            return;
          }
          var top = node.offsetTop;
          if (firstTop === void 0 || firstTop > top) {
            firstTop = top;
            firstNode = node;
          }
        }
      }
      if (firstNode) {
        if (typeof options.scrollToFirstError === "number" && window && typeof window.scrollTo === "function") {
          var offsetLeft = document && document.body && document.body.offsetLeft ? document.body.offsetLeft : 0;
          window.scrollTo(offsetLeft, firstTop + options.scrollToFirstError);
        } else if (firstNode.scrollIntoViewIfNeeded) {
          firstNode.scrollIntoViewIfNeeded(true);
        }
      }
    }
  }
  var NextField = function(_Field) {
    _default$4(NextField2, _Field);
    NextField2.useField = function useField() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!React.useState || !React.useMemo) {
        log.warning("need react version > 16.8.0");
        return;
      }
      return this.getUseField({ useMemo: React.useMemo, useState: React.useState })(options);
    };
    function NextField2(com) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _default$7(this, NextField2);
      var newOptions = _default$8({}, options, {
        afterValidateRerender: scrollToFirstError,
        processErrorMessage: cloneAndAddKey
      });
      var _this2 = _default$5(this, _Field.call(this, com, newOptions));
      _this2.validate = _this2.validate.bind(_this2);
      return _this2;
    }
    NextField2.prototype.validate = function validate(ns, cb) {
      this.validateCallback(ns, cb);
    };
    NextField2.prototype.reset = function reset(ns) {
      var backToDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (ns === true) {
        log.deprecated("reset(true)", "resetToDefault()", "Field");
        this.resetToDefault();
      } else if (backToDefault === true) {
        log.deprecated("reset(ns,true)", "resetToDefault(ns)", "Field");
        this.resetToDefault(ns);
      } else {
        this._reset(ns, false);
      }
    };
    return NextField2;
  }(default_1);
  const Field = NextField;
  var isPlainObject = obj.isPlainObject;
  function filterUndefinedValue(object) {
    if (!isPlainObject(object)) {
      return object;
    }
    var obj2 = {};
    Object.keys(object).forEach(function(key) {
      var value = object[key];
      if (value !== void 0) {
        obj2[key] = value;
      }
    });
    return obj2;
  }
  function stripObject(obj2, subObj) {
    var newObject = {};
    Object.keys(obj2).forEach(function(key) {
      if (!(key in subObj)) {
        newObject[key] = obj2[key];
      }
    });
    return newObject;
  }
  var ieVersion$3 = env.ieVersion;
  var getPadding = function getPadding2(padding) {
    if (!Array.isArray(padding)) {
      return {
        padding
      };
    }
    var attrs = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
    var paddings = {};
    var value = void 0;
    attrs.forEach(function(attr, index2) {
      switch (padding.length) {
        case 1:
          value = padding[0] || 0;
          break;
        case 2:
          value = padding[index2] || padding[index2 - 2] || 0;
          break;
        case 3:
          value = index2 === 2 ? padding[2] : padding[index2] || padding[index2 - 2] || 0;
          break;
        case 4:
        default:
          value = padding[index2] || 0;
          break;
      }
      paddings[attr] = value;
    });
    return paddings;
  };
  var getMargin = function getMargin2(size2) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { isNegative: false, half: false }, isNegative = _ref.isNegative, half = _ref.half;
    if (!size2) {
      return {};
    }
    var attrs = ["marginTop", "marginRight", "marginBottom", "marginLeft"];
    var margins = {};
    var param = 1 * (isNegative ? -1 : 1) * (half ? 0.5 : 1);
    var value = void 0;
    attrs.forEach(function(attr, index2) {
      if (!Array.isArray(size2)) {
        value = param * size2;
      } else {
        switch (size2.length) {
          case 1:
            value = param * (size2[0] || 0);
            break;
          case 2:
            value = param * (size2[index2] || size2[index2 - 2] || 0);
            break;
          case 3:
            value = param * (index2 === 2 ? size2[2] : size2[index2] || size2[index2 - 2] || 0);
            break;
          case 4:
          default:
            value = param * (size2[index2] || 0);
            break;
        }
      }
      margins[attr] = value;
    });
    return margins;
  };
  var getChildMargin = function getChildMargin2(spacing) {
    return getMargin(spacing, { half: true });
  };
  var getSpacingHelperMargin = function getSpacingHelperMargin2(spacing) {
    return getMargin(spacing, { isNegative: true, half: true });
  };
  var getFlexs = function getFlexs2(flex2) {
    if (!Array.isArray(flex2)) {
      return {
        flex: flex2
      };
    }
    var attrs = ["flexGrow", "flexShrink", "flexBasis"];
    var flexs = {};
    flex2.forEach(function(val, index2) {
      flexs[attrs[index2]] = val;
    });
    return flexs;
  };
  var getGridGap = function getGridGap2(gap) {
    if (!Array.isArray(gap)) {
      return {
        gap
      };
    }
    var attrs = ["rowGap", "columnGap"];
    var gaps = {};
    gap.forEach(function(val, index2) {
      gaps[attrs[index2]] = val;
    });
    return gaps;
  };
  var getTemplateCount = function getTemplateCount2(counts) {
    if (!isNaN(counts) || typeof counts === "string") {
      return "repeat(" + counts + ", minmax(0,1fr))";
    }
    return counts;
  };
  var helperProps = ["margin", "marginTop", "marginLeft", "marginRight", "marginBottom"];
  var innerProps = [
    "flexDirection",
    "flexWrap",
    // 'justifyContent',
    "alignContent",
    "alignItems",
    "display"
  ];
  var filterOuterStyle = function filterOuterStyle2(style) {
    var props = {};
    [].concat(innerProps).forEach(function(key) {
      props[key] = style[key];
    });
    return filterUndefinedValue(stripObject(style, props));
  };
  var filterHelperStyle = function filterHelperStyle2(style) {
    var props = {};
    helperProps.forEach(function(key) {
      props[key] = style[key];
    });
    return filterUndefinedValue(_default$8({}, props, {
      overflow: "hidden"
    }));
  };
  var filterInnerStyle = function filterInnerStyle2(style) {
    var props = {};
    innerProps.forEach(function(key) {
      props[key] = style[key];
    });
    return filterUndefinedValue(props);
  };
  var getGridChildProps = function getGridChildProps2(props, device, gap) {
    var _props$row = props.row, row = _props$row === void 0 ? "initial" : _props$row, _props$col = props.col, col = _props$col === void 0 ? "initial" : _props$col, _props$rowSpan = props.rowSpan, rowSpan = _props$rowSpan === void 0 ? 1 : _props$rowSpan, _props$colSpan = props.colSpan, colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan;
    var totalSpan = 12;
    var newColSpan = (typeof colSpan === "undefined" ? "undefined" : _default$6(colSpan)) === "object" && "desktop" in colSpan ? colSpan.desktop : colSpan;
    ["tablet", "phone"].forEach(function(deviceKey) {
      if (deviceKey === device) {
        if ((typeof colSpan === "undefined" ? "undefined" : _default$6(colSpan)) === "object" && device in colSpan) {
          newColSpan = colSpan[device];
        } else {
          switch (deviceKey) {
            case "tablet":
              totalSpan = 8;
              newColSpan = colSpan > 5 ? 8 : colSpan > 2 ? 4 : 2;
              break;
            case "phone":
              totalSpan = 4;
              newColSpan = colSpan > 2 ? 4 : 2;
              break;
          }
        }
      }
    });
    var gapLeft = gap;
    if (Array.isArray(gap)) {
      gapLeft = gap[1];
    }
    var ieChildFix = ieVersion$3 && !(rowSpan === 1 && colSpan === 1) ? {
      display: "inline-block",
      width: gapLeft ? "calc(" + newColSpan / totalSpan * 100 + "% - " + gapLeft + "px)" : newColSpan / totalSpan * 100 + "%"
    } : {};
    return filterUndefinedValue(_default$8({
      gridRowStart: row,
      gridRowEnd: "span " + rowSpan,
      gridColumnStart: col,
      gridColumnEnd: "span " + newColSpan
    }, ieChildFix));
  };
  var getBoxChildProps = function getBoxChildProps2(props) {
    var alignSelf = props.alignSelf, flex2 = props.flex;
    return filterUndefinedValue(_default$8({
      alignSelf
    }, getFlexs(flex2)));
  };
  const createStyle = function(_ref2) {
    var device = _ref2.device, display = _ref2.display, gap = _ref2.gap, direction = _ref2.direction, dense = _ref2.dense, rowSpan = _ref2.rowSpan, colSpan = _ref2.colSpan, row = _ref2.row, col = _ref2.col, rows = _ref2.rows, columns = _ref2.columns, justify = _ref2.justify, align = _ref2.align, alignSelf = _ref2.alignSelf, wrap2 = _ref2.wrap, flex2 = _ref2.flex, padding = _ref2.padding, margin = _ref2.margin;
    var style = _default$8({}, getPadding(padding));
    var deviceColumns = "auto";
    switch (device) {
      case "phone":
        deviceColumns = 4;
        break;
      case "tablet":
        deviceColumns = 8;
        break;
      case "desktop":
        deviceColumns = 12;
        break;
    }
    var newColumns = !isNaN(columns) || typeof columns === "string" ? columns : deviceColumns;
    switch (display) {
      case "grid":
        style = _default$8({}, getGridGap(gap), {
          gridTemplateRows: getTemplateCount(rows),
          gridTemplateColumns: getTemplateCount(newColumns),
          gridAutoFlow: "" + (direction || "") + (dense && " dense")
        }, getGridChildProps({
          row,
          rowSpan,
          col,
          colSpan
          // justifySelf,
          // alignSelf,
        }, device), style);
        break;
      case "flex":
        style = _default$8({
          // parent
          msFlexDirection: direction,
          flexDirection: direction,
          msFlexWrap: wrap2 ? "wrap" : "none",
          flexWrap: wrap2 ? "wrap" : "nowrap",
          msFlexPack: justify,
          justifyContent: justify,
          msFlexAlign: align,
          alignItems: align
        }, getMargin(margin), getBoxChildProps({
          alignSelf,
          flex: flex2
        }), style);
        break;
    }
    return filterUndefinedValue(style);
  };
  var _class$D, _temp$q;
  var pickOthers$2 = obj.pickOthers;
  var createChildren$1 = function createChildren(children, _ref) {
    var spacing = _ref.spacing, direction = _ref.direction, wrap2 = _ref.wrap;
    _ref.device;
    var array = React.Children.toArray(children);
    if (!children) {
      return null;
    }
    return array.map(function(child, index2) {
      var spacingMargin = {};
      spacingMargin = getChildMargin(spacing);
      if (!wrap2) {
        var isNone = [index2 === 0, index2 === array.length - 1];
        var props = direction === "row" ? ["marginLeft", "marginRight"] : ["marginTop", "marginBottom"];
        ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach(function(prop) {
          if (prop in spacingMargin && props.indexOf(prop) === -1) {
            spacingMargin[prop] = 0;
          }
          props.forEach(function(key, i) {
            if (key in spacingMargin && isNone[i]) {
              spacingMargin[key] = 0;
            }
          });
        });
      }
      if (React.isValidElement(child)) {
        var propsMargin = child.props.margin;
        var childPropsMargin = getMargin(propsMargin);
        var gridProps = {};
        if (["function", "object"].indexOf(_default$6(child.type)) > -1 && child.type._typeMark === "responsive_grid") {
          gridProps = createStyle(_default$8({ display: "grid" }, child.props));
        }
        return React.cloneElement(child, {
          style: _default$8({}, spacingMargin, childPropsMargin, gridProps, child.props.style || {})
        });
      }
      return child;
    });
  };
  var getStyle$1 = function getStyle() {
    var style = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var props = arguments[1];
    return _default$8({}, createStyle(_default$8({ display: "flex" }, props)), style);
  };
  var getOuterStyle = function getOuterStyle2(style, styleProps) {
    var sheet = getStyle$1(style, styleProps);
    return filterOuterStyle(sheet);
  };
  var getHelperStyle = function getHelperStyle2(style, styleProps) {
    var sheet = getStyle$1(style, styleProps);
    return filterHelperStyle(_default$8({}, sheet, getSpacingHelperMargin(styleProps.spacing)));
  };
  var getInnerStyle = function getInnerStyle2(style, styleProps) {
    var sheet = getStyle$1(style, styleProps);
    return filterInnerStyle(sheet);
  };
  var Box = (_temp$q = _class$D = function(_Component) {
    _default$4(Box2, _Component);
    function Box2() {
      _default$7(this, Box2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Box2.prototype.render = function render2() {
      var _cx;
      var _props = this.props, prefix = _props.prefix, direction = _props.direction, justify = _props.justify, align = _props.align, wrap2 = _props.wrap, flex2 = _props.flex, spacing = _props.spacing, padding = _props.padding, margin = _props.margin, style = _props.style, className = _props.className, children = _props.children, device = _props.device, component = _props.component;
      var styleProps = {
        direction,
        justify,
        align,
        wrap: wrap2,
        flex: flex2,
        spacing,
        padding,
        margin
      };
      var View = component;
      var others = pickOthers$2(Object.keys(Box2.propTypes), this.props);
      var styleSheet = getStyle$1(style, styleProps);
      var boxs = createChildren$1(children, {
        spacing,
        direction,
        wrap: wrap2,
        device
      });
      var cls = classnames((_cx = {}, _cx[prefix + "box"] = true, _cx), className);
      if (wrap2 && spacing) {
        var outerStyle = getOuterStyle(style, styleProps);
        var helperStyle = getHelperStyle(style, styleProps);
        var innerStyle = getInnerStyle(style, styleProps);
        return React.createElement(
          View,
          _default$8({ style: outerStyle, className: cls }, others),
          React.createElement(
            "div",
            { style: helperStyle },
            React.createElement(
              "div",
              { style: innerStyle, className: prefix + "box" },
              boxs
            )
          )
        );
      }
      return React.createElement(
        View,
        _default$8({ style: styleSheet, className: cls }, others),
        boxs
      );
    };
    return Box2;
  }(React.Component), _class$D.propTypes = {
    prefix: PropTypes$1.string,
    style: PropTypes$1.object,
    className: PropTypes$1.any,
    /**
     * 布局属性
     */
    flex: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])), PropTypes$1.number]),
    /**
     * 布局方向，默认为 column ，一个元素占据一整行
     * @default column
     */
    direction: PropTypes$1.oneOf(["row", "column", "row-reverse"]),
    /**
     * 是否折行 支持IE11+
     */
    wrap: PropTypes$1.bool,
    /**
     * 元素之间的间距 [bottom&top, right&left]
     */
    spacing: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.number), PropTypes$1.number]),
    /**
     * 设置 margin [bottom&top, right&left]
     */
    margin: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.number), PropTypes$1.number]),
    /**
     * 设置 padding [bottom&top, right&left]
     */
    padding: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.number), PropTypes$1.number]),
    /**
     * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
     */
    justify: PropTypes$1.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around"]),
    /**
     * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
     */
    align: PropTypes$1.oneOf(["flex-start", "center", "flex-end", "baseline", "stretch"]),
    device: PropTypes$1.oneOf(["phone", "tablet", "desktop"]),
    /**
     * 定制标签名， 例如section等
     */
    component: PropTypes$1.string
  }, _class$D.defaultProps = {
    prefix: "next-",
    direction: "column",
    wrap: false,
    component: "div"
  }, _temp$q);
  Box.displayName = "Box";
  const Box$1 = ConfigProvider$1.config(Box);
  var _class$C, _temp$p;
  var pickOthers$1 = obj.pickOthers;
  var Cell$2 = (_temp$p = _class$C = function(_Component) {
    _default$4(Cell2, _Component);
    function Cell2() {
      _default$7(this, Cell2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Cell2.prototype.render = function render2() {
      var _props = this.props, View = _props.component, children = _props.children;
      var others = pickOthers$1(Object.keys(Cell2.propTypes), this.props);
      return React.createElement(
        View,
        others,
        children
      );
    };
    return Cell2;
  }(React.Component), _class$C._typeMark = "responsive_grid_cell", _class$C.propTypes = {
    device: PropTypes$1.oneOf(["phone", "tablet", "desktop"]),
    /**
     * 横向，占据几列
     */
    colSpan: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.object]),
    /**
     * 纵向，占据几行
     */
    rowSpan: PropTypes$1.number,
    /**
     * 设置标签类型
     */
    component: PropTypes$1.elementType
  }, _class$C.defaultProps = {
    component: "div",
    device: "desktop"
  }, _temp$p);
  Cell$2.displayName = "Cell";
  const Cell$3 = ConfigProvider$1.config(Cell$2);
  var _class$B, _temp$o;
  var ieVersion$2 = env.ieVersion;
  var pickOthers = obj.pickOthers, isReactFragment = obj.isReactFragment;
  var createChildren2 = function createChildren3(children, device, gap) {
    var array = React.Children.toArray(children);
    if (!children) {
      return null;
    }
    return array.map(function(child) {
      if (isReactFragment(child)) {
        return createChildren3(child.props.children, device, gap);
      }
      if (React.isValidElement(child) && ["function", "object"].indexOf(_default$6(child.type)) > -1 && ["form_item", "responsive_grid_cell"].indexOf(child.type._typeMark) > -1) {
        return React.cloneElement(child, {
          style: _default$8({}, getGridChildProps(child.props, device, gap), child.props.style || {})
        });
      }
      return child;
    });
  };
  var getStyle2 = function getStyle3() {
    var style = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var props = arguments[1];
    return _default$8({}, createStyle(_default$8({ display: "grid" }, props)), style);
  };
  var ResponsiveGrid = (_temp$o = _class$B = function(_Component) {
    _default$4(ResponsiveGrid2, _Component);
    function ResponsiveGrid2() {
      _default$7(this, ResponsiveGrid2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    ResponsiveGrid2.prototype.render = function render2() {
      var _classNames;
      var _props = this.props, prefix = _props.prefix, View = _props.component, style = _props.style, className = _props.className, children = _props.children, device = _props.device, rows = _props.rows, columns = _props.columns, gap = _props.gap, rowSpan = _props.rowSpan, colSpan = _props.colSpan, component = _props.component, dense = _props.dense;
      var styleProps = {
        rows,
        columns,
        gap,
        device,
        rowSpan,
        colSpan,
        component,
        dense
      };
      var others = pickOthers(Object.keys(ResponsiveGrid2.propTypes), this.props);
      var styleSheet = getStyle2(style, styleProps);
      var cls = classnames((_classNames = {}, _classNames[prefix + "responsive-grid"] = true, _classNames[prefix + "responsive-grid-ie"] = ieVersion$2, _classNames), className);
      return ieVersion$2 ? React.createElement(Box$1, _default$8({}, this.props, { direction: "row", wrap: true, spacing: gap, children: createChildren2(children, device, gap) })) : React.createElement(
        View,
        _default$8({ style: styleSheet, className: cls }, others),
        createChildren2(children, device, gap)
      );
    };
    return ResponsiveGrid2;
  }(React.Component), _class$B._typeMark = "responsive_grid", _class$B.propTypes = {
    prefix: PropTypes$1.string,
    className: PropTypes$1.any,
    /**
     * 设备，用来做自适应，默认为 PC
     * @enumdesc 手机, 平板, PC
     */
    device: PropTypes$1.oneOf(["phone", "tablet", "desktop"]),
    rows: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    /**
     * 分为几列， 默认是 12 列
     */
    columns: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    /**
     * 每个 cell 之间的间距， [bottom&top, right&left]
     */
    gap: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.number), PropTypes$1.number]),
    /**
     * 设置标签类型
     */
    component: PropTypes$1.elementType,
    /**
     * 是否开启紧密模式，开启后尽可能能紧密填满，尽量不出现空格
     */
    dense: PropTypes$1.bool,
    style: PropTypes$1.object
  }, _class$B.defaultProps = {
    prefix: "next-",
    component: "div",
    device: "desktop",
    dense: false
  }, _temp$o);
  ResponsiveGrid.displayName = "ResponsiveGrid";
  ResponsiveGrid.Cell = Cell$3;
  const RGrid = ConfigProvider$1.config(ResponsiveGrid);
  var _class$A, _temp$n;
  function pickerDefined(obj2) {
    var newObj = {};
    Object.keys(obj2).forEach(function(i) {
      if (typeof obj2[i] !== "undefined") {
        newObj[i] = obj2[i];
      }
    });
    return newObj;
  }
  function preventDefault(e2) {
    e2.preventDefault();
  }
  var getNewChildren2 = function getNewChildren3(children, props) {
    var size2 = props.size, device = props.device, labelAlign = props.labelAlign, labelTextAlign = props.labelTextAlign, labelCol = props.labelCol, wrapperCol = props.wrapperCol, responsive = props.responsive, colon = props.colon;
    return React.Children.map(children, function(child) {
      if (obj.isReactFragment(child)) {
        return getNewChildren3(child.props.children, props);
      }
      if (child && ["function", "object"].indexOf(_default$6(child.type)) > -1 && child.type._typeMark === "form_item") {
        var childrenProps = {
          labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
          wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
          labelAlign: child.props.labelAlign ? child.props.labelAlign : device === "phone" ? "top" : labelAlign,
          labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
          colon: "colon" in child.props ? child.props.colon : colon,
          size: child.props.size ? child.props.size : size2,
          responsive
        };
        return React.cloneElement(child, pickerDefined(childrenProps));
      }
      return child;
    });
  };
  var Form$1 = (_temp$n = _class$A = function(_React$Component) {
    _default$4(Form2, _React$Component);
    function Form2(props) {
      _default$7(this, Form2);
      var _this2 = _default$5(this, _React$Component.call(this, props));
      _this2.onChange = function(name, value) {
        _this2.props.onChange(_this2._formField.getValues(), {
          name,
          value,
          field: _this2._formField
        });
      };
      _this2._formField = null;
      if (props.field !== false) {
        var options = _default$8({}, props.fieldOptions, {
          onChange: _this2.onChange
        });
        if (props.field) {
          _this2._formField = props.field;
          var onChange6 = _this2._formField.options.onChange;
          options.onChange = func.makeChain(onChange6, _this2.onChange);
          _this2._formField.setOptions && _this2._formField.setOptions(options);
        } else {
          if ("value" in props) {
            options.values = props.value;
          }
          _this2._formField = new Field(_this2, options);
        }
        if (props.locale && props.locale.Validate) {
          _this2._formField.setOptions({ messages: props.locale.Validate });
        }
        props.saveField(_this2._formField);
      }
      return _this2;
    }
    Form2.prototype.getChildContext = function getChildContext() {
      return {
        _formField: this.props.field ? this.props.field : this._formField,
        _formSize: this.props.size,
        _formDisabled: this.props.disabled,
        _formPreview: this.props.isPreview,
        _formFullWidth: this.props.fullWidth,
        _formLabelForErrorMessage: this.props.useLabelForErrorMessage
      };
    };
    Form2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      var props = this.props;
      if (this._formField) {
        if ("value" in props && props.value !== prevProps.value) {
          this._formField.setValues(props.value);
        }
        if ("error" in props && props.error !== prevProps.error) {
          this._formField.setValues(props.error);
        }
      }
    };
    Form2.prototype.render = function render2() {
      var _classNames;
      var _props = this.props, className = _props.className, inline = _props.inline, size2 = _props.size;
      _props.device;
      _props.labelAlign;
      _props.labelTextAlign;
      var onSubmit = _props.onSubmit, children = _props.children;
      _props.labelCol;
      _props.wrapperCol;
      var style = _props.style, prefix = _props.prefix, rtl = _props.rtl, isPreview = _props.isPreview, Tag = _props.component, responsive = _props.responsive, gap = _props.gap;
      _props.colon;
      var formClassName = classnames((_classNames = {}, _classNames[prefix + "form"] = true, _classNames[prefix + "inline"] = inline, _classNames["" + prefix + size2] = size2, _classNames[prefix + "form-responsive-grid"] = responsive, _classNames[prefix + "form-preview"] = isPreview, _classNames[className] = !!className, _classNames));
      var newChildren = getNewChildren2(children, this.props);
      return React.createElement(
        Tag,
        _default$8({
          role: "grid"
        }, obj.pickOthers(Form2.propTypes, this.props), {
          className: formClassName,
          style,
          dir: rtl ? "rtl" : void 0,
          onSubmit
        }),
        responsive ? React.createElement(
          RGrid,
          { gap },
          newChildren
        ) : newChildren
      );
    };
    return Form2;
  }(React.Component), _class$A.propTypes = {
    /**
     * 样式前缀
     */
    prefix: PropTypes$1.string,
    /**
     * 内联表单
     */
    inline: PropTypes$1.bool,
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     * @enumdesc 大, 中, 小
     */
    size: PropTypes$1.oneOf(["large", "medium", "small"]),
    /**
     * 单个 Item 中表单类组件宽度是否是100%
     */
    fullWidth: PropTypes$1.bool,
    /**
     * 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
     * @enumdesc 上, 左, 内
     */
    labelAlign: PropTypes$1.oneOf(["top", "left", "inset"]),
    /**
     * 标签的左右对齐方式
     * @enumdesc 左, 右
     */
    labelTextAlign: PropTypes$1.oneOf(["left", "right"]),
    /**
     * field 实例, 传 false 会禁用 field
     */
    field: PropTypes$1.any,
    /**
     * 保存 Form 自动生成的 field 对象
     */
    saveField: PropTypes$1.func,
    /**
     * 控制第一级 Item 的 labelCol
     */
    labelCol: PropTypes$1.object,
    /**
     * 控制第一级 Item 的 wrapperCol
     */
    wrapperCol: PropTypes$1.object,
    /**
     * form内有 `htmlType="submit"` 的元素的时候会触发
     */
    onSubmit: PropTypes$1.func,
    /**
     * 子元素
     */
    children: PropTypes$1.any,
    /**
     * 扩展class
     */
    className: PropTypes$1.string,
    /**
     * 自定义内联样式
     */
    style: PropTypes$1.object,
    /**
     * 表单数值
     */
    value: PropTypes$1.object,
    /**
     * 表单变化回调
     * @param {Object} values 表单数据
     * @param {Object} item 详细
     * @param {String} item.name 变化的组件名
     * @param {String} item.value 变化的数据
     * @param {Object} item.field field 实例
     */
    onChange: PropTypes$1.func,
    /**
     * 设置标签类型
     */
    component: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func]),
    fieldOptions: PropTypes$1.object,
    rtl: PropTypes$1.bool,
    /**
     * 预设屏幕宽度
     */
    device: PropTypes$1.oneOf(["phone", "tablet", "desktop"]),
    /**
     * 是否开启内置的响应式布局 （使用ResponsiveGrid）
     * @version 1.19
     */
    responsive: PropTypes$1.bool,
    /**
     * 是否开启预览态
     * @version 1.19
     */
    isPreview: PropTypes$1.bool,
    /**
     * 是否使用 label 替换校验信息的 name 字段
     * @version 1.20
     */
    useLabelForErrorMessage: PropTypes$1.bool,
    /**
     * 表示是否显示 label 后面的冒号
     * @version 1.22
     */
    colon: PropTypes$1.bool,
    /**
     * 是否禁用表单
     */
    disabled: PropTypes$1.bool,
    // 在 responsive模式下，透传给 ResponsiveGrid的， 表示 每个 cell 之间的间距， [bottom&top, right&left]
    gap: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.number), PropTypes$1.number])
  }, _class$A.defaultProps = {
    prefix: "next-",
    onSubmit: preventDefault,
    size: "medium",
    labelAlign: "left",
    onChange: func.noop,
    component: "form",
    saveField: func.noop,
    device: "desktop",
    colon: false,
    disabled: false
  }, _class$A.childContextTypes = {
    _formField: PropTypes$1.object,
    _formSize: PropTypes$1.string,
    _formDisabled: PropTypes$1.bool,
    _formPreview: PropTypes$1.bool,
    _formFullWidth: PropTypes$1.bool,
    _formLabelForErrorMessage: PropTypes$1.bool
  }, _temp$n);
  Form$1.displayName = "Form";
  var _class$z, _temp$m;
  var Row$2 = (_temp$m = _class$z = function(_Component) {
    _default$4(Row2, _Component);
    function Row2() {
      _default$7(this, Row2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Row2.prototype.render = function render2() {
      var _extends2, _extends3;
      var _props = this.props, prefix = _props.prefix;
      _props.pure;
      var wrap2 = _props.wrap, fixed2 = _props.fixed, gutter = _props.gutter, fixedWidth = _props.fixedWidth, align = _props.align, justify = _props.justify, hidden = _props.hidden, className = _props.className, Tag = _props.component, children = _props.children, rtl = _props.rtl, others = _default$3(_props, ["prefix", "pure", "wrap", "fixed", "gutter", "fixedWidth", "align", "justify", "hidden", "className", "component", "children", "rtl"]);
      var hiddenClassObj = void 0;
      if (hidden === true) {
        var _hiddenClassObj;
        hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + "row-hidden"] = true, _hiddenClassObj);
      } else if (typeof hidden === "string") {
        var _hiddenClassObj2;
        hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + "row-" + hidden + "-hidden"] = !!hidden, _hiddenClassObj2);
      } else if (Array.isArray(hidden)) {
        hiddenClassObj = hidden.reduce(function(ret, point) {
          ret[prefix + "row-" + point + "-hidden"] = !!point;
          return ret;
        }, {});
      }
      var newClassName = classnames(_default$8((_extends2 = {}, _extends2[prefix + "row"] = true, _extends2[prefix + "row-wrap"] = wrap2, _extends2[prefix + "row-fixed"] = fixed2, _extends2[prefix + "row-fixed-" + fixedWidth] = !!fixedWidth, _extends2[prefix + "row-justify-" + justify] = !!justify, _extends2[prefix + "row-align-" + align] = !!align, _extends2), hiddenClassObj, (_extends3 = {}, _extends3[className] = !!className, _extends3)));
      var newChildren = children;
      var gutterNumber = parseInt(gutter, 10);
      if (gutterNumber !== 0) {
        var halfGutterString = gutterNumber / 2 + "px";
        others.style = _default$8({
          marginLeft: "-" + halfGutterString,
          marginRight: "-" + halfGutterString
        }, others.style || {});
        newChildren = React.Children.map(children, function(child) {
          if (child && child.type && typeof child.type === "function" && child.type.isNextCol) {
            var newChild = React.cloneElement(child, {
              style: _default$8({
                paddingLeft: halfGutterString,
                paddingRight: halfGutterString
              }, child.style || {})
            });
            return newChild;
          }
          return child;
        });
      }
      return React.createElement(
        Tag,
        _default$8({ dir: rtl ? "rtl" : "ltr", role: "row", className: newClassName }, others),
        newChildren
      );
    };
    return Row2;
  }(React.Component), _class$z.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    style: PropTypes$1.object,
    /**
     * 行内容
     */
    children: PropTypes$1.node,
    /**
     * 列间隔
     */
    gutter: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * 列在行中宽度溢出后是否换行
     */
    wrap: PropTypes$1.bool,
    /**
     * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
     */
    fixed: PropTypes$1.bool,
    /**
     * 固定行的宽度为某一断点的宽度，不受视口影响而变动
     * @enumdesc 320px, 480px, 720px, 990px, 1200px, 1500px
     */
    fixedWidth: PropTypes$1.oneOf(["xxs", "xs", "s", "m", "l", "xl"]),
    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式
     * @enumdesc 顶部对齐, 居中对齐, 底部对齐, 按第一行文字基线对齐, 未设置高度或设为 auto，将占满整个容器的高度
     */
    align: PropTypes$1.oneOf(["top", "center", "bottom", "baseline", "stretch"]),
    /**
     * （不支持IE9浏览器）行内具有多余空间时的布局方式
     * @enumdesc 左对齐, 居中对齐, 右对齐, 两端对齐，列之间间距相等, 每列具有相同的左右间距，行两端间距是列间距的二分之一
     */
    justify: PropTypes$1.oneOf(["start", "center", "end", "space-between", "space-around"]),
    /**
     * 行在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.string, PropTypes$1.array]),
    /**
     * 指定以何种元素渲染该节点
     * - 默认为 'div'
     */
    component: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func])
  }, _class$z.defaultProps = {
    prefix: "next-",
    pure: false,
    fixed: false,
    gutter: 0,
    wrap: false,
    component: "div"
  }, _temp$m);
  Row$2.displayName = "Row";
  var _class$y, _temp$l;
  var breakPoints = ["xxs", "xs", "s", "m", "l", "xl"];
  var Col$1 = (_temp$l = _class$y = function(_Component) {
    _default$4(Col2, _Component);
    function Col2() {
      _default$7(this, Col2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Col2.prototype.render = function render2() {
      var _this2 = this, _extends2, _extends3;
      var _props = this.props, prefix = _props.prefix;
      _props.pure;
      var span = _props.span, offset = _props.offset, fixedSpan = _props.fixedSpan, fixedOffset = _props.fixedOffset, hidden = _props.hidden, align = _props.align;
      _props.xxs;
      _props.xs;
      _props.s;
      _props.m;
      _props.l;
      _props.xl;
      var Tag = _props.component, className = _props.className, children = _props.children, rtl = _props.rtl, others = _default$3(_props, ["prefix", "pure", "span", "offset", "fixedSpan", "fixedOffset", "hidden", "align", "xxs", "xs", "s", "m", "l", "xl", "component", "className", "children", "rtl"]);
      var pointClassObj = breakPoints.reduce(function(ret, point) {
        var pointProps = {};
        if (_default$6(_this2.props[point]) === "object") {
          pointProps = _this2.props[point];
        } else {
          pointProps.span = _this2.props[point];
        }
        ret[prefix + "col-" + point + "-" + pointProps.span] = !!pointProps.span;
        ret[prefix + "col-" + point + "-offset-" + pointProps.offset] = !!pointProps.offset;
        return ret;
      }, {});
      var hiddenClassObj = void 0;
      if (hidden === true) {
        var _hiddenClassObj;
        hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + "col-hidden"] = true, _hiddenClassObj);
      } else if (typeof hidden === "string") {
        var _hiddenClassObj2;
        hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + "col-" + hidden + "-hidden"] = !!hidden, _hiddenClassObj2);
      } else if (Array.isArray(hidden)) {
        hiddenClassObj = hidden.reduce(function(ret, point) {
          ret[prefix + "col-" + point + "-hidden"] = !!point;
          return ret;
        }, {});
      }
      var classes = classnames(_default$8((_extends2 = {}, _extends2[prefix + "col"] = true, _extends2[prefix + "col-" + span] = !!span, _extends2[prefix + "col-fixed-" + fixedSpan] = !!fixedSpan, _extends2[prefix + "col-offset-" + offset] = !!offset, _extends2[prefix + "col-offset-fixed-" + fixedOffset] = !!fixedOffset, _extends2[prefix + "col-" + align] = !!align, _extends2), pointClassObj, hiddenClassObj, (_extends3 = {}, _extends3[className] = className, _extends3)));
      return React.createElement(
        Tag,
        _default$8({ dir: rtl ? "rtl" : "ltr", role: "gridcell", className: classes }, others),
        children
      );
    };
    return Col2;
  }(React.Component), _class$y.isNextCol = true, _class$y.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    /**
     * 列内容
     */
    children: PropTypes$1.node,
    /**
     * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    span: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedSpan: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
     */
    offset: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
     */
    fixedOffset: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
     */
    align: PropTypes$1.oneOf(["top", "center", "bottom", "baseline", "stretch"]),
    /**
     * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
     */
    hidden: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.string, PropTypes$1.array]),
    /**
     * >=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xxs: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * >=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xs: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * >=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    s: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * >=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    m: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * >=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    l: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * >=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象
     */
    xl: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.object]),
    /**
     * 指定以何种元素渲染该节点，默认为 'div'
     */
    component: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func])
  }, _class$y.defaultProps = {
    prefix: "next-",
    pure: false,
    component: "div"
  }, _temp$l);
  Col$1.displayName = "Col";
  var Grid = {
    Row: ConfigProvider$1.config(Row$2, {
      transform: (
        /* istanbul ignore next */
        function transform10(props, deprecated2) {
          if ("type" in props) {
            deprecated2("type", "fixed | wrap | gutter", "Row");
            var _props = props, type2 = _props.type, others = _default$3(_props, ["type"]);
            var types = Array.isArray(type2) ? type2 : [type2];
            var fixed2 = void 0;
            if (types.indexOf("fixed") > -1) {
              fixed2 = true;
            }
            var wrap2 = void 0;
            if (types.indexOf("wrap") > -1) {
              wrap2 = true;
            }
            props = _default$8({ fixed: fixed2, wrap: wrap2 }, others);
          }
          return props;
        }
      )
    }),
    Col: ConfigProvider$1.config(Col$1)
  };
  const Grid$1 = Grid;
  var _class$x, _temp2$c;
  var Error$1 = (_temp2$c = _class$x = function(_React$Component) {
    _default$4(Error2, _React$Component);
    function Error2() {
      var _temp3, _this2, _ret;
      _default$7(this, Error2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.itemRender = function(errors) {
        return errors.length ? errors : null;
      }, _temp3), _default$5(_this2, _ret);
    }
    Error2.prototype.render = function render2() {
      var _classNames;
      var _props = this.props, children = _props.children, name = _props.name, prefix = _props.prefix, style = _props.style, className = _props.className, _field = _props.field, others = _default$3(_props, ["children", "name", "prefix", "style", "className", "field"]);
      if (children && typeof children !== "function") {
        return React.createElement(
          "div",
          { className: prefix + "form-item-help" },
          children
        );
      }
      var field = this.context._formField || _field;
      if (!field || !name) {
        return null;
      }
      var isSingle = typeof name === "string";
      var names = isSingle ? [name] : name;
      var errorArr = [];
      if (names.length) {
        var errors = field.getErrors(names);
        Object.keys(errors).forEach(function(key) {
          if (errors[key]) {
            errorArr.push(errors[key]);
          }
        });
      }
      var result = null;
      if (typeof children === "function") {
        result = children(errorArr, isSingle ? field.getState(name) : void 0);
      } else {
        result = this.itemRender(errorArr);
      }
      if (!result) {
        return null;
      }
      var cls = classnames((_classNames = {}, _classNames[prefix + "form-item-help"] = true, _classNames[className] = className, _classNames));
      return React.createElement(
        "div",
        _default$8({}, others, { className: cls, style }),
        result
      );
    };
    return Error2;
  }(React.Component), _class$x.propTypes = {
    /**
     * 表单名
     */
    name: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 自定义 field (在 Form 内不需要设置)
     */
    field: PropTypes$1.object,
    style: PropTypes$1.object,
    className: PropTypes$1.string,
    /**
     * 自定义错误渲染, 可以是 node 或者 function(errors, state)
     */
    children: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.func]),
    prefix: PropTypes$1.string
  }, _class$x.defaultProps = {
    prefix: "next-"
  }, _class$x.contextTypes = {
    _formField: PropTypes$1.object
  }, _class$x._typeMark = "form_error", _temp2$c);
  Error$1.displayName = "Error";
  const Error$2 = ConfigProvider$1.config(Error$1);
  function getCfgFromProps(props, type2) {
    if (type2 in props) {
      return props[type2];
    }
    return void 0;
  }
  function getRule(ruleName, props) {
    var _ref;
    return _ref = {}, _ref[ruleName] = props[ruleName], _ref.message = getCfgFromProps(props, ruleName + "Message"), _ref.trigger = getCfgFromProps(props, ruleName + "Trigger"), _ref;
  }
  function getValueName(props, displayName) {
    if (props.valueName) {
      return props.valueName;
    }
    if (typeof displayName === "string") {
      var componentName = displayName.replace(/Config\(/g, "").replace(/\)/g, "");
      if (["Switch", "Checkbox", "Radio"].indexOf(componentName) !== -1) {
        return "checked";
      }
    }
    return "value";
  }
  function getRules(props, labelForErrorMessage) {
    var result = [];
    if (props.required) {
      result.push(getRule("required", props));
    }
    var maxLength = Number(props.maxLength);
    var minLength = Number(props.minLength);
    if (minLength || maxLength) {
      result.push({
        minLength,
        maxLength,
        // minLengthMessage maxLengthMessage had been deprected, please use minmaxLength. TODO: removed in 2.0
        message: getCfgFromProps(props, "minmaxLengthMessage") || getCfgFromProps(props, "minLengthMessage") || getCfgFromProps(props, "maxLengthMessage"),
        trigger: getCfgFromProps(props, "minmaxLengthTrigger") || getCfgFromProps(props, "minLengthTrigger") || getCfgFromProps(props, "maxLengthTrigger")
      });
    }
    if (props.length) {
      result.push(getRule("length", props));
    }
    if (props.pattern) {
      result.push(getRule("pattern", props));
    }
    if (["number", "tel", "url", "email"].indexOf(props.format) > -1) {
      result.push(getRule("format", props));
    }
    var max2 = Number(props.max);
    var min2 = Number(props.min);
    if (max2 || min2) {
      result.push({
        min: min2,
        max: max2,
        // minMessage maxMessage had been deprected, please use minmaxLength. TODO: removed in 2.0
        message: getCfgFromProps(props, "minmaxMessage") || getCfgFromProps(props, "minMessage") || getCfgFromProps(props, "maxMessage"),
        trigger: getCfgFromProps(props, "minmaxTrigger") || getCfgFromProps(props, "minTrigger") || getCfgFromProps(props, "maxTrigger")
      });
    }
    if (props.validator && typeof props.validator === "function") {
      result.push({
        validator: props.validator,
        trigger: getCfgFromProps(props, "validatorTrigger")
      });
    }
    if (labelForErrorMessage) {
      result.forEach(function(r2) {
        r2.aliasName = labelForErrorMessage;
      });
    }
    return result;
  }
  function getFieldInitCfg(props, displayName, labelForErrorMessage) {
    return {
      valueName: getValueName(props, displayName),
      trigger: props.trigger ? props.trigger : "onChange",
      autoValidate: props.autoValidate,
      rules: getRules(props, labelForErrorMessage)
    };
  }
  var _class$w, _temp$k;
  var Row$1 = Grid$1.Row, Col = Grid$1.Col;
  var Cell$1 = RGrid.Cell;
  var isNil = obj.isNil;
  var Item = (_temp$k = _class$w = function(_React$Component) {
    _default$4(Item2, _React$Component);
    function Item2() {
      _default$7(this, Item2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Item2.prototype.getNames = function getNames(children) {
      var name = this.props.name;
      var childrenList = React.Children.toArray(children);
      var nameList = childrenList.filter(function(c2) {
        return c2.props && ("name" in c2.props || "data-meta" in c2.props);
      }).map(function(c2) {
        return c2.props.name || c2.props.id;
      });
      if (nameList.length) {
        return nameList;
      } else if (name) {
        return [name];
      }
      return [];
    };
    Item2.prototype.getHelper = function getHelper(children) {
      var help = this.props.help;
      var _formField = this.context._formField;
      return React.createElement(
        Error$2,
        { name: help === void 0 ? this.getNames(children) : void 0, field: _formField },
        help
      );
    };
    Item2.prototype.getState = function getState(children) {
      var validateState = this.props.validateState;
      if (validateState) {
        return validateState;
      }
      if (this.context._formField) {
        var getState2 = this.context._formField.getState;
        var names = this.getNames(children);
        if (!names.length) {
          return "";
        }
        return getState2(names[0]);
      }
      return void 0;
    };
    Item2.prototype.getSize = function getSize() {
      return this.props.size || this.context._formSize;
    };
    Item2.prototype.getDisabled = function getDisabled() {
      return "disabled" in this.props ? this.props.disabled : this.context._formDisabled;
    };
    Item2.prototype.getIsPreview = function getIsPreview() {
      return "isPreview" in this.props ? this.props.isPreview : this.context._formPreview;
    };
    Item2.prototype.getFullWidth = function getFullWidth() {
      return isNil(this.props.fullWidth) ? !!this.context._formFullWidth : this.props.fullWidth;
    };
    Item2.prototype.getLabelForErrorMessage = function getLabelForErrorMessage() {
      var _props = this.props, errorMessageName = _props.errorMessageName, label = _props.label, useLabelForErrorMessage = _props.useLabelForErrorMessage;
      if (errorMessageName) {
        return errorMessageName;
      }
      if (!label || typeof label !== "string") {
        return null;
      }
      var newLabel = label.replace(":", "").replace("：", "");
      var labelForErrorMessage = useLabelForErrorMessage !== void 0 ? useLabelForErrorMessage : this.context._formLabelForErrorMessage;
      if (labelForErrorMessage && newLabel) {
        return newLabel;
      }
      return null;
    };
    Item2.prototype.getItemLabel = function getItemLabel(children) {
      var _classNames;
      var _props2 = this.props, id2 = _props2.id, required2 = _props2.required, _props2$asterisk = _props2.asterisk, asterisk = _props2$asterisk === void 0 ? required2 : _props2$asterisk, label = _props2.label, labelCol = _props2.labelCol, wrapperCol = _props2.wrapperCol, prefix = _props2.prefix, responsive = _props2.responsive, labelWidth = _props2.labelWidth, labelTextAlign = _props2.labelTextAlign, colon = _props2.colon;
      var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
      if (!label) {
        return null;
      }
      var ele = React.createElement(
        "label",
        { htmlFor: id2 || this.getNames(children)[0], required: asterisk, key: "label" },
        label
      );
      var cls = classnames((_classNames = {}, _classNames[prefix + "form-item-label"] = true, _classNames["has-colon"] = colon, _classNames[prefix + "left"] = labelTextAlign === "left", _classNames));
      if (responsive && labelWidth && labelAlign !== "top") {
        return React.createElement(
          "div",
          { className: cls, style: { width: labelWidth } },
          ele
        );
      }
      if ((wrapperCol || labelCol) && labelAlign !== "top") {
        return React.createElement(
          Col,
          _default$8({}, labelCol, { className: cls }),
          ele
        );
      }
      return React.createElement(
        "div",
        { className: cls },
        ele
      );
    };
    Item2.prototype.getItemWrapper = function getItemWrapper(children) {
      var _this2 = this;
      var _props3 = this.props, hasFeedback = _props3.hasFeedback, labelCol = _props3.labelCol, wrapperCol = _props3.wrapperCol, extra = _props3.extra, prefix = _props3.prefix, renderPreview = _props3.renderPreview, name = _props3.name;
      var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
      var state = this.getState(children);
      var isPreview = this.getIsPreview();
      var childrenProps = {
        size: this.getSize()
      };
      if (isPreview) {
        childrenProps.isPreview = true;
      }
      if ("renderPreview" in this.props && typeof renderPreview === "function") {
        childrenProps.renderPreview = renderPreview;
      }
      if (state && (state === "error" || hasFeedback)) {
        childrenProps.state = state;
      }
      if (labelAlign === "inset") {
        childrenProps.label = this.getItemLabel(children);
      }
      if (this.getDisabled()) {
        childrenProps.disabled = true;
      }
      var labelForErrorMessage = this.getLabelForErrorMessage();
      var ele = React.Children.map(children, function(child, idx) {
        if (child && ["function", "object"].indexOf(_default$6(child.type)) > -1 && child.type._typeMark !== "form_item" && child.type._typeMark !== "form_error") {
          var extraProps = childrenProps;
          if (_this2.context._formField && !("data-meta" in child.props) && ("name" in child.props || name && idx === 0)) {
            var initName = "name" in child.props && child.props.name ? child.props.name : name;
            extraProps = _this2.context._formField.init(initName, _default$8({}, getFieldInitCfg(_this2.props, child.type.displayName, labelForErrorMessage), {
              props: _default$8({}, child.props, { ref: child.ref })
            }), childrenProps);
          } else {
            extraProps = _default$8({}, child.props, extraProps);
          }
          return React.cloneElement(child, extraProps);
        }
        return child;
      });
      var help = this.getHelper(children);
      if ((wrapperCol || labelCol) && labelAlign !== "top") {
        return React.createElement(
          Col,
          _default$8({}, wrapperCol, { className: prefix + "form-item-control", key: "item" }),
          ele,
          " ",
          help,
          " ",
          extra
        );
      }
      return React.createElement(
        "div",
        { className: prefix + "form-item-control" },
        ele,
        " ",
        help,
        " ",
        extra
      );
    };
    Item2.prototype.getLabelAlign = function getLabelAlign(labelAlign, device) {
      if (device === "phone") {
        return "top";
      }
      return labelAlign;
    };
    Item2.prototype.render = function render2() {
      var _classNames2;
      var _props4 = this.props, className = _props4.className, style = _props4.style, prefix = _props4.prefix, wrapperCol = _props4.wrapperCol, labelCol = _props4.labelCol, responsive = _props4.responsive, children = _props4.children;
      var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
      var childrenNode = children;
      if (typeof children === "function" && this.context._formField) {
        childrenNode = children(this.context._formField.getValues());
      }
      var state = this.getState(childrenNode);
      var size2 = this.getSize();
      var fullWidth = this.getFullWidth();
      var isPreview = this.getIsPreview();
      var itemClassName = classnames((_classNames2 = {}, _classNames2[prefix + "form-item"] = true, _classNames2["" + prefix + labelAlign] = labelAlign, _classNames2["has-" + state] = !!state, _classNames2["" + prefix + size2] = !!size2, _classNames2[prefix + "form-item-fullwidth"] = fullWidth, _classNames2["" + className] = !!className, _classNames2[prefix + "form-preview"] = isPreview, _classNames2));
      var Tag = responsive ? Cell$1 : (wrapperCol || labelCol) && labelAlign !== "top" ? Row$1 : "div";
      var label = labelAlign === "inset" ? null : this.getItemLabel(childrenNode);
      return React.createElement(
        Tag,
        _default$8({}, obj.pickOthers(Item2.propTypes, this.props), { className: itemClassName, style }),
        label,
        this.getItemWrapper(childrenNode)
      );
    };
    return Item2;
  }(React.Component), _class$w.propTypes = {
    /**
     * 样式前缀
     */
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    /**
     * label 标签的文本
     */
    label: PropTypes$1.node,
    /**
     * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
     */
    labelCol: PropTypes$1.object,
    /**
     * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
     */
    wrapperCol: PropTypes$1.object,
    /**
     * 自定义提示信息，如不设置，则会根据校验规则自动生成.
     */
    help: PropTypes$1.node,
    /**
     * 字段名，默认赋值给第一个子元素
     */
    name: PropTypes$1.string,
    /**
     * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
     */
    extra: PropTypes$1.node,
    /**
     * 校验状态，如不设置，则会根据校验规则自动生成
     * @enumdesc 失败, 成功, 校验中, 警告
     */
    validateState: PropTypes$1.oneOf(["error", "success", "loading", "warning"]),
    /**
     * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持
     */
    hasFeedback: PropTypes$1.bool,
    //TODO: hasFeedback => validateStatus=[error,success,loading]
    /**
     * 自定义内联样式
     */
    style: PropTypes$1.object,
    id: PropTypes$1.string,
    /**
     * node 或者 function(values)
     */
    children: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.func]),
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     */
    size: PropTypes$1.oneOf(["large", "small", "medium"]),
    /**
     * 单个 Item 中表单类组件宽度是否是100%
     */
    fullWidth: PropTypes$1.bool,
    /**
     * 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
     * @enumdesc 上, 左, 内
     */
    labelAlign: PropTypes$1.oneOf(["top", "left", "inset"]),
    /**
     * 标签的左右对齐方式
     * @enumdesc 左, 右
     */
    labelTextAlign: PropTypes$1.oneOf(["left", "right"]),
    /**
     * 扩展class
     */
    className: PropTypes$1.string,
    /**
     * [表单校验] 不能为空
     */
    required: PropTypes$1.bool,
    /**
     * required 的星号是否显示
     */
    asterisk: PropTypes$1.bool,
    /**
     * required 自定义错误信息
     */
    requiredMessage: PropTypes$1.string,
    /**
     * required 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    requiredTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * [表单校验] 最小值
     */
    min: PropTypes$1.number,
    /**
     * [表单校验] 最大值
     */
    max: PropTypes$1.number,
    /**
     * min/max 自定义错误信息
     */
    minmaxMessage: PropTypes$1.string,
    /**
     * min/max 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    minmaxTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * [表单校验] 字符串最小长度 / 数组最小个数
     */
    minLength: PropTypes$1.number,
    /**
     * [表单校验] 字符串最大长度 / 数组最大个数
     */
    maxLength: PropTypes$1.number,
    /**
     * minLength/maxLength 自定义错误信息
     */
    minmaxLengthMessage: PropTypes$1.string,
    /**
     * minLength/maxLength 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    minmaxLengthTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * [表单校验] 字符串精确长度 / 数组精确个数
     */
    length: PropTypes$1.number,
    /**
     * length 自定义错误信息
     */
    lengthMessage: PropTypes$1.string,
    /**
     * length 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    lengthTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 正则校验
     */
    pattern: PropTypes$1.any,
    /**
     * pattern 自定义错误信息
     */
    patternMessage: PropTypes$1.string,
    /**
     * pattern 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    patternTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * [表单校验] 四种常用的 pattern
     */
    format: PropTypes$1.oneOf(["number", "email", "url", "tel"]),
    /**
     * format 自定义错误信息
     */
    formatMessage: PropTypes$1.string,
    /**
     * format 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    formatTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * [表单校验] 自定义校验函数
     */
    validator: PropTypes$1.func,
    /**
     * validator 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     */
    validatorTrigger: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.array]),
    /**
     * 是否修改数据时自动触发校验
     */
    autoValidate: PropTypes$1.bool,
    /**
     * 预设屏幕宽度
     */
    device: PropTypes$1.oneOf(["phone", "tablet", "desktop"]),
    responsive: PropTypes$1.bool,
    /**
     * 在响应式布局模式下，表单项占多少列
     */
    colSpan: PropTypes$1.number,
    /**
     * 在响应式布局下，且label在左边时，label的宽度是多少
     */
    labelWidth: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
    /**
     * 是否开启预览态
     */
    isPreview: PropTypes$1.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {any} value 根据包裹的组件的 value 类型而决定
     */
    renderPreview: PropTypes$1.func,
    /**
     * 替代校验信息的 name 字段，useLabelForErrorMessage 开启的情况下比 label 优先级高
     */
    errorMessageName: PropTypes$1.string,
    /**
     * 是否使用 label 替换校验信息的 name 字段
     */
    useLabelForErrorMessage: PropTypes$1.bool,
    /**
     * 表示是否显示 label 后面的冒号
     */
    colon: PropTypes$1.bool,
    /**
     * 是否禁用表单
     */
    disabled: PropTypes$1.bool,
    /**
     * 子元素的 value 名称
     */
    valueName: PropTypes$1.string
  }, _class$w.defaultProps = {
    prefix: "next-",
    hasFeedback: false,
    labelWidth: 100
  }, _class$w.contextTypes = {
    _formField: PropTypes$1.object,
    _formSize: PropTypes$1.oneOf(["large", "small", "medium"]),
    _formDisabled: PropTypes$1.bool,
    _formPreview: PropTypes$1.bool,
    _formFullWidth: PropTypes$1.bool,
    _formLabelForErrorMessage: PropTypes$1.bool
  }, _class$w._typeMark = "form_item", _temp$k);
  Item.displayName = "Item";
  var _class$v, _temp2$b;
  var Submit = (_temp2$b = _class$v = function(_React$Component) {
    _default$4(Submit2, _React$Component);
    function Submit2() {
      var _temp3, _this2, _ret;
      _default$7(this, Submit2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.handleClick = function() {
        var _this$props = _this2.props, onClick3 = _this$props.onClick, validate = _this$props.validate;
        var field = _this2.context._formField || _this2.props.field;
        if (!field) {
          onClick3();
          return;
        }
        if (validate === true) {
          field.validate(function(errors) {
            onClick3(field.getValues(), errors, field);
          });
        } else if (Array.isArray(validate)) {
          field.validate(validate, function(errors) {
            onClick3(field.getValues(), errors, field);
          });
        } else {
          onClick3(field.getValues(), null, field);
        }
      }, _temp3), _default$5(_this2, _ret);
    }
    Submit2.prototype.render = function render2() {
      var children = this.props.children;
      return React.createElement(
        Button,
        _default$8({}, obj.pickOthers(Submit2.propTypes, this.props), { onClick: this.handleClick }),
        children
      );
    };
    return Submit2;
  }(React.Component), _class$v.propTypes = {
    /**
     * 点击提交后触发
     * @param {Object} value 数据
     * @param {Object} errors 错误数据
     * @param {class} field 实例
     */
    onClick: PropTypes$1.func,
    /**
     * 是否校验/需要校验的 name 数组
     */
    validate: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.array]),
    /**
     * 自定义 field (在 Form 内不需要设置)
     */
    field: PropTypes$1.object,
    children: PropTypes$1.node
  }, _class$v.defaultProps = {
    onClick: func.noop
  }, _class$v.contextTypes = {
    _formField: PropTypes$1.object
  }, _temp2$b);
  Submit.displayName = "Submit";
  const Submit$1 = Submit;
  var _class$u, _temp2$a;
  var Reset = (_temp2$a = _class$u = function(_React$Component) {
    _default$4(Reset2, _React$Component);
    function Reset2() {
      var _temp3, _this2, _ret;
      _default$7(this, Reset2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.handleClick = function() {
        var _this$props = _this2.props, names = _this$props.names, toDefault = _this$props.toDefault, onClick3 = _this$props.onClick;
        var field = _this2.context._formField || _this2.props.field;
        if (!field) {
          onClick3();
          return;
        }
        if (toDefault) {
          field.resetToDefault(names);
        } else {
          field.reset(names);
        }
        onClick3();
      }, _temp3), _default$5(_this2, _ret);
    }
    Reset2.prototype.render = function render2() {
      var children = this.props.children;
      return React.createElement(
        Button,
        _default$8({}, obj.pickOthers(Reset2.propTypes, this.props), { onClick: this.handleClick }),
        children
      );
    };
    return Reset2;
  }(React.Component), _class$u.propTypes = {
    /**
     * 自定义重置的字段
     */
    names: PropTypes$1.array,
    /**
     * 点击提交后触发
     */
    onClick: PropTypes$1.func,
    /**
     * 返回默认值
     */
    toDefault: PropTypes$1.bool,
    /**
     * 自定义 field (在 Form 内不需要设置)
     */
    field: PropTypes$1.object,
    children: PropTypes$1.node
  }, _class$u.defaultProps = {
    onClick: func.noop
  }, _class$u.contextTypes = {
    _formField: PropTypes$1.object
  }, _temp2$a);
  Reset.displayName = "Reset";
  const Reset$1 = Reset;
  Form$1.Item = ConfigProvider$1.config(Item, {
    transform: (
      /* istanbul ignore next */
      function transform11(props, deprecated2) {
        if ("validateStatus" in props) {
          deprecated2("validateStatus", "validateState", "Form.Item");
          var _props = props, validateStatus = _props.validateStatus, others = _default$3(_props, ["validateStatus"]);
          props = _default$8({ validateState: validateStatus }, others);
        }
        return props;
      }
    )
  });
  Form$1.Submit = Submit$1;
  Form$1.Reset = Reset$1;
  Form$1.Error = Error$2;
  const Form = ConfigProvider$1.config(Form$1, {
    transform: (
      /* istanbul ignore next */
      function transform12(props, deprecated2) {
        if ("direction" in props) {
          deprecated2("direction", "inline", "Form");
          var _props2 = props, direction = _props2.direction, others = _default$3(_props2, ["direction"]);
          if (direction === "hoz") {
            props = _default$8({ inline: true }, others);
          }
        }
        return props;
      }
    )
  });
  var _class$t, _temp$j;
  var Loading = (_temp$j = _class$t = function(_React$Component) {
    _default$4(Loading2, _React$Component);
    function Loading2() {
      _default$7(this, Loading2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Loading2.prototype.render = function render2() {
      var _classNames2, _classNames3, _classNames4;
      var _props = this.props, tip = _props.tip, visible = _props.visible, children = _props.children, className = _props.className, style = _props.style, indicator = _props.indicator, color = _props.color, prefix = _props.prefix, fullScreen = _props.fullScreen, disableScroll = _props.disableScroll, onVisibleChange = _props.onVisibleChange, tipAlign = _props.tipAlign, size2 = _props.size, inline = _props.inline, rtl = _props.rtl, safeNode = _props.safeNode;
      var indicatorDom = null;
      var dotCls = prefix + "loading-dot";
      if (indicator) {
        indicatorDom = indicator;
      } else {
        var _classNames;
        var backgroundColor = color;
        var fusionReactorCls = classnames((_classNames = {}, _classNames[prefix + "loading-fusion-reactor"] = true, _classNames[prefix + "loading-medium-fusion-reactor"] = size2 === "medium", _classNames));
        indicatorDom = React.createElement(
          "div",
          { className: fusionReactorCls, dir: rtl ? "rtl" : void 0 },
          React.createElement("span", { className: dotCls, style: { backgroundColor } }),
          React.createElement("span", { className: dotCls, style: { backgroundColor } }),
          React.createElement("span", { className: dotCls, style: { backgroundColor } }),
          React.createElement("span", { className: dotCls, style: { backgroundColor } })
        );
      }
      var loadingCls = classnames((_classNames2 = {}, _classNames2[prefix + "loading"] = true, _classNames2[prefix + "open"] = visible, _classNames2[prefix + "loading-inline"] = inline, _classNames2[className] = className, _classNames2));
      var tipCls = classnames((_classNames3 = {}, _classNames3[prefix + "loading-tip"] = true, _classNames3[prefix + "loading-tip-fullscreen"] = fullScreen, _classNames3[prefix + "loading-right-tip"] = tipAlign === "right", _classNames3));
      var others = obj.pickOthers(Loading2.propTypes, this.props);
      var contentCls = classnames((_classNames4 = {}, _classNames4[prefix + "loading-component"] = visible, _classNames4[prefix + "loading-wrap"] = true, _classNames4));
      return fullScreen ? [children, React.createElement(
        Overlay$1,
        _default$8({
          key: "overlay",
          hasMask: true,
          align: "cc cc",
          safeNode,
          disableScroll
        }, others, {
          className,
          style,
          visible,
          onRequestClose: onVisibleChange
        }),
        React.createElement(
          "div",
          { className: tipCls },
          React.createElement(
            "div",
            { className: prefix + "loading-indicator" },
            indicatorDom
          ),
          React.createElement(
            "div",
            { className: prefix + "loading-tip-content" },
            tip
          ),
          React.createElement(
            "div",
            { className: prefix + "loading-tip-placeholder" },
            tip
          )
        )
      )] : React.createElement(
        "div",
        _default$8({ className: loadingCls, style }, others),
        visible ? React.createElement(
          "div",
          { className: tipCls },
          React.createElement(
            "div",
            { className: prefix + "loading-indicator" },
            indicatorDom
          ),
          React.createElement(
            "div",
            { className: prefix + "loading-tip-content" },
            tip
          ),
          React.createElement(
            "div",
            { className: prefix + "loading-tip-placeholder" },
            tip
          )
        ) : null,
        React.createElement(
          "div",
          { className: contentCls },
          visible ? React.createElement("div", { className: prefix + "loading-masker" }) : null,
          children
        )
      );
    };
    return Loading2;
  }(React.Component), _class$t.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 样式前缀
     */
    prefix: PropTypes$1.string,
    /**
     * 自定义内容，可以传入string或reactElement
     */
    tip: PropTypes$1.any,
    /**
     * 自定义内容位置
     * @enumdesc 出现在动画右边, 出现在动画下面
     */
    tipAlign: PropTypes$1.oneOf(["right", "bottom"]),
    /**
     * loading 状态, 默认 true
     */
    visible: PropTypes$1.bool,
    /**
     * 全屏模式下，loading弹层请求关闭时触发的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onVisibleChange: PropTypes$1.func,
    /**
     * 自定义class
     */
    className: PropTypes$1.string,
    /**
     * 自定义内联样式
     */
    style: PropTypes$1.object,
    /**
     * 设置动画尺寸
     * @description 仅仅对默认动画效果起作用
     * @enumdesc 大号, 中号
     */
    size: PropTypes$1.oneOf(["large", "medium"]),
    /**
     * 自定义动画
     */
    indicator: PropTypes$1.any,
    /**
     * 动画颜色
     */
    color: PropTypes$1.string,
    /**
     * 全屏展示
     */
    fullScreen: PropTypes$1.bool,
    /**
     * 当点击 document 的时候，如果包含该节点则不会关闭弹层，
     * 如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     * 是否禁用滚动，仅在 fullScreen 模式下生效
     */
    disableScroll: PropTypes$1.bool,
    /**
     * 安全节点，fullScreen时有效，
     */
    safeNode: PropTypes$1.any,
    /**
     * 子元素
     */
    children: PropTypes$1.any,
    inline: PropTypes$1.bool,
    rtl: PropTypes$1.bool
  }), _class$t.defaultProps = {
    prefix: "next-",
    visible: true,
    onVisibleChange: func.noop,
    animate: null,
    tipAlign: "bottom",
    size: "large",
    inline: true,
    disableScroll: false
  }, _temp$j);
  Loading.displayName = "Loading";
  const Loading$1 = ConfigProvider$1.config(Loading);
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function transformEntryEqual(a, b2) {
    for (var k2 in a) {
      if (hasOwnProperty$1.call(a, k2)) {
        return a[k2] === b2[k2];
      }
    }
    return false;
  }
  function transformEqual(a, b2) {
    if (!a && !b2 || a === b2) {
      return true;
    }
    if (!a !== !b2) {
      return false;
    }
    if (a.length !== b2.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!transformEntryEqual(a[i], b2[i])) {
        return false;
      }
    }
    return true;
  }
  function shallowObjectEquals(a, b2) {
    var k2;
    var i = 0;
    var j = 0;
    for (k2 in a) {
      if (hasOwnProperty$1.call(a, k2)) {
        switch (k2) {
          case "transform":
            if (!transformEqual(a[k2], b2[k2])) {
              return false;
            }
            break;
          case "shadowOffset":
            if (!shallowObjectEquals(a[k2], b2[k2])) {
              return false;
            }
            break;
          default:
            if (a[k2] !== b2[k2]) {
              return false;
            }
            break;
        }
        i++;
      }
    }
    for (k2 in b2) {
      if (hasOwnProperty$1.call(b2, k2)) {
        j++;
      }
    }
    return i === j;
  }
  function styleEqual$1(a, b2) {
    if (!a && !b2 || a === b2) {
      return true;
    }
    if (!a !== !b2) {
      return false;
    }
    switch (typeof a) {
      case "object":
        if (a instanceof Array) {
          for (var i = 0; i < a.length; i++) {
            if (!styleEqual$1(a[i], b2[i])) {
              return false;
            }
          }
          return a.length === b2.length;
        } else {
          return shallowObjectEquals(a, b2);
        }
      case "number":
      default:
        return a === b2;
    }
  }
  var styleEqual_1 = styleEqual$1;
  var styleEqual = styleEqual_1;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function type(a) {
    return Array.isArray(a) ? "array" : typeof a;
  }
  function elementEquals(a, b2) {
    var typeOfA = type(a);
    var typeOfB = type(b2);
    if (typeOfA !== typeOfB)
      return false;
    switch (typeOfA) {
      case "array":
        if (a.length !== b2.length)
          return false;
        for (var i = 0; i < a.length; i++) {
          if (!elementEquals(a[i], b2[i]))
            return false;
        }
        return true;
      case "object":
        if (!a || !b2)
          return a === b2;
        if (a.type !== b2.type)
          return false;
        if (a.key !== b2.key)
          return false;
        if (a.ref !== b2.ref)
          return false;
        return shallowElementEquals(a.props, b2.props);
      default:
        return a === b2;
    }
  }
  function shallowElementEquals(a, b2) {
    var aCount = 0;
    var bCount = 0;
    for (var key in a) {
      if (hasOwnProperty.call(a, key)) {
        if (key === "style") {
          if (!styleEqual(a[key], b2[key]))
            return false;
        } else if (key === "children")
          ;
        else {
          if (a[key] !== b2[key])
            return false;
        }
        aCount++;
      }
    }
    for (var key in b2) {
      if (hasOwnProperty.call(b2, key)) {
        bCount++;
      }
    }
    if (aCount !== bCount)
      return false;
    return elementEquals(a.children, b2.children);
  }
  var shallowElementEquals_1 = shallowElementEquals;
  const shallowElementEquals$1 = /* @__PURE__ */ getDefaultExportFromCjs(shallowElementEquals_1);
  var blackList = ["defaultProps", "propTypes", "contextTypes", "childContextTypes", "displayName", "getDerivedStateFromProps"];
  var statics = function statics2(Target, Component2) {
    Object.keys(Component2).forEach(function(property) {
      if (blackList.indexOf(property) === -1) {
        Target[property] = Component2[property];
      }
    });
  };
  var fetchDataByPath = function fetchDataByPath2(object, path) {
    if (!object || !path) {
      return false;
    }
    path = path.toString();
    var field = path.split(".");
    var val = void 0, key = void 0;
    if (field.length) {
      key = field[0];
      if (key.indexOf("[") >= 0) {
        key = key.match(/(.*)\[(.*)\]/);
        if (key && _default$6(key[1]) === "object" && _default$6(object[key[1]]) === "object") {
          val = object[key[1]][key[2]];
        }
      } else {
        val = object[field[0]];
      }
      if (val) {
        for (var colIndex = 1; colIndex < field.length; colIndex++) {
          val = val[field[colIndex]];
          if (typeof val === "undefined") {
            break;
          }
        }
      }
    }
    return val;
  };
  var setStickyStyle = function setStickyStyle2(lockChildren, flatenChildren, dir) {
    var offsetArr = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var prefix = arguments[4];
    var len = flatenChildren.length;
    flatenChildren.forEach(function(col, index2) {
      var _classnames;
      var isLeftLast = dir === "left" && index2 === len - 1;
      var isRightFirst = dir === "right" && index2 === 0;
      var style = {
        position: "sticky"
      };
      var offset = offsetArr[index2];
      if (offset > -1) {
        style[dir] = offset;
      }
      col.className = classnames(col.className, (_classnames = {}, _classnames[prefix + "table-fix-" + dir] = true, _classnames[prefix + "table-fix-left-last"] = isLeftLast, _classnames[prefix + "table-fix-right-first"] = isRightFirst, _classnames));
      col.style = _default$8({}, col.style, style);
      col.cellStyle = style;
    });
    var setOffset = function setOffset2(col, index2, dir2, isBorder) {
      var _classnames2;
      var style = {
        position: "sticky"
      };
      var offset = offsetArr[index2];
      if (offset > -1) {
        style[dir2] = offset;
      }
      col.className = classnames(col.className, (_classnames2 = {}, _classnames2[prefix + "table-fix-" + dir2] = true, _classnames2[prefix + "table-fix-left-last"] = dir2 === "left" && isBorder, _classnames2[prefix + "table-fix-right-first"] = dir2 === "right" && isBorder, _classnames2));
      col.style = _default$8({}, col.style, style);
      col.cellStyle = style;
    };
    var getLeafNodes = function getLeafNodes2(node) {
      var nodesLen = 0;
      var arrLen = Array.isArray(node && node.children) && node.children.length || 0;
      if (arrLen > 0) {
        nodesLen = node.children.reduce(function(ret, item, idx) {
          return ret + getLeafNodes2(item.children);
        }, 0);
      } else {
        nodesLen = 1;
      }
      return nodesLen;
    };
    var getPreNodes = function getPreNodes2(arr, idx) {
      return arr.reduce(function(ret, item, i) {
        if (i < idx) {
          return ret + getLeafNodes(item);
        }
        return ret;
      }, 0);
    };
    var loop = function loop2(arr, i) {
      dir === "right" && arr.reverse();
      arr.forEach(function(child, j) {
        var p2 = dir === "right" ? i - getPreNodes(arr, j) : i + getPreNodes(arr, j);
        if (child.children) {
          loop2(child.children, p2);
          setOffset(child, p2, dir, j === arr.length - 1);
        }
      });
      dir === "right" && arr.reverse();
    };
    loop(lockChildren, dir === "left" ? 0 : len - 1);
  };
  var _class$s, _temp2$9;
  var noop$6 = function noop7() {
  };
  var Row = (_temp2$9 = _class$s = function(_React$Component) {
    _default$4(Row2, _React$Component);
    function Row2() {
      var _temp3, _this2, _ret;
      _default$7(this, Row2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.onClick = function(e2) {
        var _this$props = _this2.props, record = _this$props.record, rowIndex = _this$props.rowIndex;
        _this2.props.onClick(record, rowIndex, e2);
      }, _this2.onMouseEnter = function(e2) {
        var _this$props2 = _this2.props, record = _this$props2.record, rowIndex = _this$props2.rowIndex, __rowIndex = _this$props2.__rowIndex;
        var row = __rowIndex || rowIndex;
        _this2.onRowHover(record, row, true, e2);
      }, _this2.onMouseLeave = function(e2) {
        var _this$props3 = _this2.props, record = _this$props3.record, rowIndex = _this$props3.rowIndex, __rowIndex = _this$props3.__rowIndex;
        var row = __rowIndex || rowIndex;
        _this2.onRowHover(record, row, false, e2);
      }, _temp3), _default$5(_this2, _ret);
    }
    Row2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      if (nextProps.pure) {
        var isEqual = obj.shallowEqual(this.props, nextProps);
        return !isEqual;
      }
      return true;
    };
    Row2.prototype.onRowHover = function onRowHover(record, index2, isEnter, e2) {
      var _props = this.props, onMouseEnter = _props.onMouseEnter, onMouseLeave = _props.onMouseLeave, currentRow = ReactDOM.findDOMNode(this);
      if (isEnter) {
        onMouseEnter(record, index2, e2);
        currentRow && dom.addClass(currentRow, "hovered");
      } else {
        onMouseLeave(record, index2, e2);
        currentRow && dom.removeClass(currentRow, "hovered");
      }
    };
    Row2.prototype.renderCells = function renderCells(record, rowIndex) {
      var _this2 = this;
      var _props2 = this.props, Cell2 = _props2.Cell, columns = _props2.columns, getCellProps = _props2.getCellProps, cellRef = _props2.cellRef, prefix = _props2.prefix, primaryKey = _props2.primaryKey, __rowIndex = _props2.__rowIndex, pure = _props2.pure, locale = _props2.locale, rtl = _props2.rtl;
      rowIndex = rowIndex !== void 0 ? rowIndex : this.props.rowIndex;
      var lockType = this.context.lockType;
      return columns.map(function(child, index2) {
        var _classnames;
        var dataIndex = child.dataIndex, align = child.align;
        child.alignHeader;
        var width = child.width;
        child.colSpan;
        child.style;
        var cellStyle = child.cellStyle, __colIndex = child.__colIndex, others = _default$3(child, ["dataIndex", "align", "alignHeader", "width", "colSpan", "style", "cellStyle", "__colIndex"]);
        var colIndex = "__colIndex" in child ? __colIndex : index2;
        var value = fetchDataByPath(record, dataIndex);
        var attrs = getCellProps(rowIndex, colIndex, dataIndex, record) || {};
        if (_this2.context.notRenderCellIndex) {
          var matchCellIndex = _this2.context.notRenderCellIndex.map(function(cellIndex) {
            return cellIndex.toString();
          }).indexOf([rowIndex, colIndex].toString());
          if (matchCellIndex > -1) {
            _this2.context.notRenderCellIndex.splice(matchCellIndex, 1);
            return null;
          }
        }
        if (attrs.colSpan && attrs.colSpan > 1 || attrs.rowSpan && attrs.rowSpan > 1) {
          _this2._getNotRenderCellIndex(colIndex, rowIndex, attrs.colSpan || 1, attrs.rowSpan || 1);
        }
        var cellClass = attrs.className;
        var className = classnames((_classnames = {
          first: lockType !== "right" && colIndex === 0,
          last: lockType !== "left" && (colIndex === columns.length - 1 || colIndex + attrs.colSpan === columns.length)
        }, _classnames[child.className] = child.className, _classnames[cellClass] = cellClass, _classnames));
        var newStyle = _default$8({}, attrs.style, cellStyle);
        return React.createElement(Cell2, _default$8({
          key: __rowIndex + "-" + colIndex
        }, others, attrs, {
          style: newStyle,
          "data-next-table-col": colIndex,
          "data-next-table-row": rowIndex,
          ref: function ref(cell5) {
            return cellRef(__rowIndex, colIndex, cell5);
          },
          prefix,
          pure,
          primaryKey,
          record,
          className,
          value,
          colIndex,
          rowIndex,
          align,
          locale,
          rtl,
          width
        }));
      });
    };
    Row2.prototype._getNotRenderCellIndex = function _getNotRenderCellIndex(colIndex, rowIndex, colSpan, rowSpan) {
      var maxColIndex = colSpan;
      var maxRowIndex = rowSpan;
      var notRenderCellIndex = [];
      for (var i = 0; i < maxColIndex; i++) {
        for (var j = 0; j < maxRowIndex; j++) {
          notRenderCellIndex.push([rowIndex + j, colIndex + i]);
        }
      }
      [].push.apply(this.context.notRenderCellIndex, notRenderCellIndex);
    };
    Row2.prototype.render = function render2() {
      var _classnames2;
      var _props3 = this.props, prefix = _props3.prefix, className = _props3.className;
      _props3.onClick;
      _props3.onMouseEnter;
      _props3.onMouseLeave;
      _props3.columns;
      _props3.Cell;
      _props3.getCellProps;
      _props3.rowIndex;
      var record = _props3.record;
      _props3.__rowIndex;
      var children = _props3.children;
      _props3.primaryKey;
      _props3.cellRef;
      _props3.colGroup;
      _props3.pure;
      _props3.locale;
      _props3.expandedIndexSimulate;
      _props3.tableEl;
      _props3.rtl;
      var wrapper2 = _props3.wrapper, others = _default$3(_props3, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "getCellProps", "rowIndex", "record", "__rowIndex", "children", "primaryKey", "cellRef", "colGroup", "pure", "locale", "expandedIndexSimulate", "tableEl", "rtl", "wrapper"]);
      var cls = classnames((_classnames2 = {}, _classnames2[prefix + "table-row"] = true, _classnames2[className] = className, _classnames2));
      var tr = React.createElement(
        "tr",
        _default$8({
          className: cls,
          role: "row"
        }, others, {
          onClick: this.onClick,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        }),
        this.renderCells(record),
        children
      );
      return wrapper2(tr);
    };
    return Row2;
  }(React.Component), _class$s.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
    className: PropTypes$1.string,
    columns: PropTypes$1.array,
    record: PropTypes$1.any,
    Cell: PropTypes$1.func,
    rowIndex: PropTypes$1.number,
    getCellProps: PropTypes$1.func,
    onClick: PropTypes$1.func,
    onMouseEnter: PropTypes$1.func,
    onMouseLeave: PropTypes$1.func,
    children: PropTypes$1.any,
    cellRef: PropTypes$1.func,
    colGroup: PropTypes$1.object,
    locale: PropTypes$1.object,
    wrapper: PropTypes$1.func
  }, _class$s.defaultProps = {
    prefix: "next-",
    primaryKey: "id",
    columns: [],
    record: {},
    getCellProps: noop$6,
    onClick: noop$6,
    onMouseEnter: noop$6,
    onMouseLeave: noop$6,
    cellRef: noop$6,
    colGroup: {},
    wrapper: function wrapper(row) {
      return row;
    }
  }, _class$s.contextTypes = {
    notRenderCellIndex: PropTypes$1.array,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }, _temp2$9);
  Row.displayName = "Row";
  var _class$r, _temp$i;
  var Cell = (_temp$i = _class$r = function(_React$Component) {
    _default$4(Cell2, _React$Component);
    function Cell2() {
      _default$7(this, Cell2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Cell2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      if (nextProps.pure) {
        var isEqual = obj.shallowEqual(this.props, nextProps);
        return !isEqual;
      }
      return true;
    };
    Cell2.prototype.render = function render2() {
      var _classnames;
      var _props = this.props, prefix = _props.prefix, className = _props.className, cell5 = _props.cell, value = _props.value;
      _props.resizable;
      _props.asyncResizable;
      _props.colIndex;
      var rowIndex = _props.rowIndex, __colIndex = _props.__colIndex, record = _props.record, context = _props.context, align = _props.align, _props$style = _props.style, style = _props$style === void 0 ? {} : _props$style, Tag = _props.component, children = _props.children;
      _props.title;
      _props.width;
      var innerStyle = _props.innerStyle;
      _props.primaryKey;
      _props.__normalized;
      _props.filterMode;
      _props.filterMenuProps;
      _props.filterProps;
      _props.filters;
      _props.sortable;
      _props.sortDirections;
      _props.lock;
      _props.pure;
      _props.locale;
      _props.expandedIndexSimulate;
      var rtl = _props.rtl, isIconLeft = _props.isIconLeft;
      _props.type;
      var htmlTitle = _props.htmlTitle, wordBreak = _props.wordBreak, others = _default$3(_props, ["prefix", "className", "cell", "value", "resizable", "asyncResizable", "colIndex", "rowIndex", "__colIndex", "record", "context", "align", "style", "component", "children", "title", "width", "innerStyle", "primaryKey", "__normalized", "filterMode", "filterMenuProps", "filterProps", "filters", "sortable", "sortDirections", "lock", "pure", "locale", "expandedIndexSimulate", "rtl", "isIconLeft", "type", "htmlTitle", "wordBreak"]);
      var tagStyle = _default$8({}, style);
      var cellProps = { value, index: rowIndex, record, context };
      var content = cell5;
      if (React.isValidElement(content)) {
        content = React.cloneElement(content, cellProps);
      } else if (typeof content === "function") {
        content = content(value, rowIndex, record, context);
      }
      if (align) {
        tagStyle.textAlign = align;
        if (rtl) {
          tagStyle.textAlign = align === "left" ? "right" : align === "right" ? "left" : align;
        }
      }
      var cls = classnames((_classnames = {}, _classnames[prefix + "table-cell"] = true, _classnames[prefix + "table-word-break-" + wordBreak] = !!wordBreak, _classnames[className] = className, _classnames));
      return React.createElement(
        Tag,
        _default$8({}, pickAttrs(others), { className: cls, style: tagStyle, role: "gridcell" }),
        React.createElement(
          "div",
          {
            className: prefix + "table-cell-wrapper",
            ref: this.props.getCellDomRef,
            style: innerStyle,
            title: htmlTitle,
            "data-next-table-col": __colIndex,
            "data-next-table-row": rowIndex
          },
          isIconLeft ? children : content,
          isIconLeft ? content : children
        )
      );
    };
    return Cell2;
  }(React.Component), _class$r.propTypes = {
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
    className: PropTypes$1.string,
    record: PropTypes$1.any,
    value: PropTypes$1.any,
    isIconLeft: PropTypes$1.bool,
    colIndex: PropTypes$1.number,
    rowIndex: PropTypes$1.number,
    // 经过锁列调整后的列索引，lock right的列会从非0开始
    __colIndex: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    title: PropTypes$1.any,
    width: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    context: PropTypes$1.any,
    cell: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func]),
    align: PropTypes$1.oneOf(["left", "center", "right"]),
    component: PropTypes$1.oneOf(["td", "th", "div"]),
    children: PropTypes$1.any,
    style: PropTypes$1.object,
    innerStyle: PropTypes$1.object,
    filterMode: PropTypes$1.oneOf(["single", "multiple"]),
    filterMenuProps: PropTypes$1.object,
    filterProps: PropTypes$1.object,
    filters: PropTypes$1.array,
    sortable: PropTypes$1.bool,
    sortDirections: PropTypes$1.arrayOf(PropTypes$1.oneOf(["desc", "asc", "default"])),
    lock: PropTypes$1.any,
    type: PropTypes$1.oneOf(["header", "body"]),
    resizable: PropTypes$1.bool,
    asyncResizable: PropTypes$1.bool,
    __normalized: PropTypes$1.bool
  }, _class$r.defaultProps = {
    component: "td",
    type: "body",
    isIconLeft: false,
    cell: function cell(value) {
      return value;
    },
    prefix: "next-"
  }, _temp$i);
  Cell.displayName = "Cell";
  var _class$q, _temp2$8;
  var noop$5 = function noop8() {
  };
  var Body = (_temp2$8 = _class$q = function(_React$Component) {
    _default$4(Body2, _React$Component);
    function Body2() {
      var _temp3, _this2, _ret;
      _default$7(this, Body2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.getRowRef = function(i, row) {
        _this2.props.rowRef(i, row);
      }, _this2.onRowClick = function(record, index2, e2) {
        _this2.props.onRowClick(record, index2, e2);
      }, _this2.onRowMouseEnter = function(record, index2, e2) {
        _this2.props.onRowMouseEnter(record, index2, e2);
      }, _this2.onRowMouseLeave = function(record, index2, e2) {
        _this2.props.onRowMouseLeave(record, index2, e2);
      }, _this2.onBodyMouseOver = function(e2) {
        _this2.props.onBodyMouseOver(e2);
      }, _this2.onBodyMouseOut = function(e2) {
        _this2.props.onBodyMouseOut(e2);
      }, _this2.getEmptyNode = function(ref) {
        _this2.emptyNode = ref;
      }, _this2.setEmptyDomStyle = function() {
        var tableEl = _this2.props.tableEl;
        var borderLeftWidth = dom.getStyle(tableEl, "borderLeftWidth");
        var tableWidth = tableEl && tableEl.getBoundingClientRect().width;
        var totalWidth = tableWidth - borderLeftWidth - 1 || "100%";
        dom.setStyle(_this2.emptyNode, { width: totalWidth });
      }, _temp3), _default$5(_this2, _ret);
    }
    Body2.prototype.componentDidMount = function componentDidMount() {
      events.on(window, "resize", this.setEmptyDomStyle);
    };
    Body2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.setEmptyDomStyle();
    };
    Body2.prototype.componentWillUnmount = function componentWillUnmount() {
      events.off(window, "resize", this.setEmptyDomStyle);
    };
    Body2.prototype.render = function render2() {
      var _this2 = this;
      var _props = this.props, prefix = _props.prefix, className = _props.className, children = _props.children, Tag = _props.component, colGroup = _props.colGroup, loading = _props.loading, emptyContent = _props.emptyContent, components = _props.components, getCellProps = _props.getCellProps, primaryKey = _props.primaryKey, getRowProps = _props.getRowProps, dataSource = _props.dataSource, cellRef = _props.cellRef, columns = _props.columns;
      _props.rowRef;
      _props.onRowClick;
      _props.onRowMouseEnter;
      _props.onRowMouseLeave;
      _props.onBodyMouseOver;
      _props.onBodyMouseOut;
      var locale = _props.locale, pure = _props.pure, expandedIndexSimulate = _props.expandedIndexSimulate, tableEl = _props.tableEl, rtl = _props.rtl, crossline = _props.crossline;
      _props.tableWidth;
      var others = _default$3(_props, ["prefix", "className", "children", "component", "colGroup", "loading", "emptyContent", "components", "getCellProps", "primaryKey", "getRowProps", "dataSource", "cellRef", "columns", "rowRef", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onBodyMouseOver", "onBodyMouseOut", "locale", "pure", "expandedIndexSimulate", "tableEl", "rtl", "crossline", "tableWidth"]);
      var totalWidth = +(tableEl && tableEl.clientWidth) - 1 || "100%";
      var _components$Row = components.Row, Row$12 = _components$Row === void 0 ? Row : _components$Row, _components$Cell = components.Cell, Cell$12 = _components$Cell === void 0 ? Cell : _components$Cell;
      var empty = loading ? React.createElement(
        "span",
        null,
        " "
      ) : emptyContent || locale.empty;
      var rows = React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { colSpan: columns.length },
          React.createElement(
            "div",
            {
              ref: this.getEmptyNode,
              className: prefix + "table-empty",
              style: { position: "sticky", left: 0, overflow: "hidden", width: totalWidth }
            },
            empty
          )
        )
      );
      if (Tag === "div") {
        rows = React.createElement(
          "table",
          { role: "table" },
          React.createElement(
            "tbody",
            null,
            rows
          )
        );
      }
      if (dataSource.length) {
        rows = dataSource.map(function(record, index2) {
          var _classnames;
          var rowProps = {};
          var rowIndex = (typeof record === "undefined" ? "undefined" : _default$6(record)) === "object" && "__rowIndex" in record ? record.__rowIndex : index2;
          if (expandedIndexSimulate) {
            rowProps = record.__expanded ? {} : getRowProps(record, index2 / 2);
          } else {
            rowProps = getRowProps(record, rowIndex);
          }
          rowProps = rowProps || {};
          var rowClass = rowProps.className;
          var className2 = classnames((_classnames = {
            first: index2 === 0,
            last: index2 === dataSource.length - 1
          }, _classnames[rowClass] = rowClass, _classnames));
          var expanded2 = record.__expanded ? "expanded" : "";
          return React.createElement(Row$12, _default$8({
            key: "" + (record[primaryKey] || (record[primaryKey] === 0 ? 0 : rowIndex)) + expanded2
          }, rowProps, {
            ref: _this2.getRowRef.bind(_this2, expanded2 ? rowIndex + "_expanded" : rowIndex),
            colGroup,
            rtl,
            columns,
            primaryKey,
            record,
            rowIndex,
            __rowIndex: rowIndex,
            prefix,
            pure,
            cellRef,
            getCellProps,
            className: className2,
            Cell: Cell$12,
            tableEl,
            onClick: _this2.onRowClick,
            locale,
            onMouseEnter: _this2.onRowMouseEnter,
            onMouseLeave: _this2.onRowMouseLeave
          }));
        });
      } else {
        this.setEmptyDomStyle();
      }
      var event = crossline ? {
        onMouseOver: this.onBodyMouseOver,
        onMouseOut: this.onBodyMouseOut
      } : {};
      return React.createElement(
        Tag,
        _default$8({ className }, others, event),
        rows,
        children
      );
    };
    return Body2;
  }(React.Component), _class$q.propTypes = {
    loading: PropTypes$1.bool,
    emptyContent: PropTypes$1.any,
    tableEl: PropTypes$1.any,
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    components: PropTypes$1.object,
    getCellProps: PropTypes$1.func,
    cellRef: PropTypes$1.func,
    primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
    getRowProps: PropTypes$1.func,
    rowRef: PropTypes$1.func,
    dataSource: PropTypes$1.array,
    children: PropTypes$1.any,
    className: PropTypes$1.string,
    component: PropTypes$1.string,
    colGroup: PropTypes$1.object,
    columns: PropTypes$1.array,
    onRowClick: PropTypes$1.func,
    onRowMouseEnter: PropTypes$1.func,
    onRowMouseLeave: PropTypes$1.func,
    onBodyMouseOver: PropTypes$1.func,
    onBodyMouseOut: PropTypes$1.func,
    locale: PropTypes$1.object,
    crossline: PropTypes$1.bool,
    tableWidth: PropTypes$1.number
  }, _class$q.defaultProps = {
    loading: false,
    prefix: "next-",
    components: {},
    getCellProps: noop$5,
    cellRef: noop$5,
    primaryKey: "id",
    getRowProps: noop$5,
    rowRef: noop$5,
    dataSource: [],
    component: "tbody",
    columns: []
  }, _temp2$8);
  Body.displayName = "Body";
  var _class$p, _temp$h, _initialiseProps3;
  var Filter = (_temp$h = _class$p = function(_React$Component) {
    _default$4(Filter2, _React$Component);
    function Filter2(props) {
      _default$7(this, Filter2);
      var _this2 = _default$5(this, _React$Component.call(this, props));
      _initialiseProps3.call(_this2);
      var filterParams = props.filterParams || {};
      var filterConfig = filterParams[props.dataIndex] || {};
      _this2.state = {
        visible: filterConfig.visible || false,
        selectedKeys: filterConfig.selectedKeys || [],
        selectedKeysChangedByInner: true
      };
      _this2._selectedKeys = [].concat(_this2.state.selectedKeys);
      return _this2;
    }
    Filter2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};
      if (nextProps.hasOwnProperty("filterParams") && typeof nextProps.filterParams !== "undefined") {
        var dataIndex = nextProps.dataIndex || this.props.dataIndex;
        var filterParams = nextProps.filterParams || {};
        var filterConfig = filterParams[dataIndex] || {};
        var selectedKeys = void 0;
        if (prevState.selectedKeysChangedByInner) {
          selectedKeys = prevState.selectedKeys || [];
          state.selectedKeysChangedByInner = false;
        } else {
          selectedKeys = filterConfig.selectedKeys || [];
        }
        state.selectedKeys = selectedKeys;
      }
      return state;
    };
    Filter2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      var selectedKeys = prevState.selectedKeys;
      this._selectedKeys = [].concat(selectedKeys);
    };
    Filter2.prototype.render = function render2() {
      var _classnames, _classnames2, _classnames3;
      var _props = this.props, filters = _props.filters, prefix = _props.prefix, locale = _props.locale, className = _props.className, filterMode = _props.filterMode, filterMenuProps = _props.filterMenuProps, filterProps = _props.filterProps, rtl = _props.rtl;
      var dropdownClassname = classnames(filterProps && filterProps.className, (_classnames = {}, _classnames[prefix + "table-filter-menu"] = true, _classnames));
      var _state = this.state, visible = _state.visible, selectedKeys = _state.selectedKeys;
      var _ref = filterMenuProps || {}, subMenuSelectable = _ref.subMenuSelectable, others = _default$3(_ref, ["subMenuSelectable"]);
      function renderMenuItem(item) {
        return React.createElement(
          Menu.Item,
          { key: item.value },
          item.label
        );
      }
      function renderSubMenu(parent, children) {
        return React.createElement(
          Menu.SubMenu,
          { label: parent.label, key: parent.value, selectable: subMenuSelectable },
          renderMenuContent(children)
        );
      }
      function renderMenuContent(list2) {
        return list2.map(function(item) {
          if (item.children) {
            return renderSubMenu(item, item.children);
          } else {
            return renderMenuItem(item);
          }
        });
      }
      var content = renderMenuContent(filters), footer = React.createElement(
        "div",
        { className: prefix + "table-filter-footer" },
        React.createElement(
          Button,
          { type: "primary", onClick: this.onFilterConfirm },
          locale.ok
        ),
        React.createElement(
          Button,
          { onClick: this.onFilterClear },
          locale.reset
        )
      );
      var cls = classnames((_classnames2 = {}, _classnames2[prefix + "table-filter"] = true, _classnames2[className] = className, _classnames2));
      var filterIconCls = classnames((_classnames3 = {}, _classnames3[prefix + "table-filter-active"] = selectedKeys && selectedKeys.length > 0, _classnames3));
      return React.createElement(
        Dropdown,
        _default$8({
          trigger: React.createElement(
            "span",
            {
              role: "button",
              "aria-label": locale.filter,
              onKeyDown: this.filterKeydown,
              tabIndex: "0",
              className: cls
            },
            React.createElement(Icon, { type: "filter", size: "small", className: filterIconCls })
          ),
          triggerType: "click",
          visible,
          autoFocus: true,
          rtl,
          needAdjust: false,
          onVisibleChange: this.onFilterVisible,
          className: dropdownClassname
        }, filterProps),
        React.createElement(
          Menu,
          _default$8({
            footer,
            rtl,
            selectedKeys,
            selectMode: filterMode,
            onSelect: this.onFilterSelect
          }, others),
          content
        )
      );
    };
    return Filter2;
  }(React.Component), _class$p.propTypes = {
    dataIndex: PropTypes$1.string,
    filters: PropTypes$1.array,
    filterMode: PropTypes$1.string,
    filterParams: PropTypes$1.object,
    filterMenuProps: PropTypes$1.object,
    filterProps: PropTypes$1.object,
    locale: PropTypes$1.object,
    onFilter: PropTypes$1.func,
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool
  }, _class$p.defaultProps = {
    onFilter: function onFilter() {
    }
  }, _initialiseProps3 = function _initialiseProps4() {
    var _this2 = this;
    this.filterKeydown = function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      if (e2.keyCode === KEYCODE.ENTER) {
        _this2.setState({
          visible: !_this2.state.visible
        });
      }
    };
    this.onFilterVisible = function(visible) {
      _this2.setState({
        visible
      });
      if (!visible) {
        var selectedKeys = [].concat(_this2._selectedKeys);
        _this2.setState({
          selectedKeysChangedByInner: true,
          selectedKeys
        });
      }
    };
    this.onFilterSelect = function(selectedKeys) {
      _this2.setState({
        visible: true,
        selectedKeysChangedByInner: true,
        selectedKeys
      });
    };
    this.onFilterConfirm = function() {
      var selectedKeys = _this2.state.selectedKeys;
      var filterParams = {}, dataIndex = _this2.props.dataIndex;
      filterParams[dataIndex] = {
        visible: false,
        selectedKeys
      };
      _this2._selectedKeys = [].concat(selectedKeys);
      _this2.setState({
        visible: false,
        selectedKeysChangedByInner: true
      });
      _this2.props.onFilter(filterParams);
    };
    this.onFilterClear = function() {
      var filterParams = {}, dataIndex = _this2.props.dataIndex;
      filterParams[dataIndex] = {
        visible: false,
        selectedKeys: []
      };
      _this2._selectedKeys = [];
      _this2.setState({
        selectedKeys: [],
        visible: false,
        selectedKeysChangedByInner: true
      });
      _this2.props.onFilter(filterParams);
    };
  }, _temp$h);
  Filter.displayName = "Filter";
  const FilterComponent = polyfill(Filter);
  var _class$o, _temp2$7;
  var Sort = (_temp2$7 = _class$o = function(_React$Component) {
    _default$4(Sort2, _React$Component);
    function Sort2() {
      var _temp3, _this2, _ret;
      _default$7(this, Sort2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.handleClick = function() {
        var _this$props = _this2.props, sort = _this$props.sort, dataIndex = _this$props.dataIndex, sortDirections = _this$props.sortDirections;
        var nextSortType = "";
        sortDirections.forEach(function(dir, i) {
          if (sort[dataIndex] === dir) {
            nextSortType = sortDirections.length - 1 > i ? sortDirections[i + 1] : sortDirections[0];
          }
        });
        if (!sort[dataIndex]) {
          nextSortType = sortDirections[0];
        }
        _this2.onSort(dataIndex, nextSortType);
      }, _this2.keydownHandler = function(e2) {
        e2.preventDefault();
        e2.stopPropagation();
        if (e2.keyCode === KEYCODE.ENTER) {
          _this2.handleClick();
        }
      }, _this2.onSort = function(dataIndex, order) {
        var sort = {};
        sort[dataIndex] = order;
        _this2.props.onSort(dataIndex, order, sort);
      }, _temp3), _default$5(_this2, _ret);
    }
    Sort2.prototype.renderSort = function renderSort() {
      var _classnames;
      var _props = this.props, prefix = _props.prefix, sort = _props.sort, sortIcons = _props.sortIcons, className = _props.className, dataIndex = _props.dataIndex, locale = _props.locale, sortDirections = _props.sortDirections, rtl = _props.rtl, sortStatus = sort[dataIndex], map = {
        desc: "descending",
        asc: "ascending"
      };
      var icons = sortDirections.map(function(sortOrder) {
        return sortOrder === "default" ? null : React.createElement(
          "a",
          { key: sortOrder, className: sortStatus === sortOrder ? "current" : "" },
          sortIcons ? sortIcons[sortOrder] : React.createElement(Icon, { rtl, type: map[sortOrder], size: "xs" })
        );
      });
      var cls = classnames((_classnames = {}, _classnames[prefix + "table-sort"] = true, _classnames[className] = className, _classnames));
      return React.createElement(
        "span",
        {
          role: "button",
          tabIndex: "0",
          "aria-label": locale[sortStatus],
          className: cls,
          onClick: this.handleClick.bind(this),
          onKeyDown: this.keydownHandler
        },
        icons
      );
    };
    Sort2.prototype.render = function render2() {
      return this.renderSort();
    };
    return Sort2;
  }(React.Component), _class$o.propTypes = {
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    className: PropTypes$1.string,
    sort: PropTypes$1.object,
    sortIcons: PropTypes$1.object,
    onSort: PropTypes$1.func,
    sortDirections: PropTypes$1.arrayOf(PropTypes$1.oneOf(["desc", "asc", "default"])),
    dataIndex: PropTypes$1.string,
    locale: PropTypes$1.object
  }, _class$o.defaultProps = {
    sort: {},
    sortDirections: ["desc", "asc"]
  }, _temp2$7);
  Sort.displayName = "Sort";
  var _class$n, _temp$g;
  var Resize = (_temp$g = _class$n = function(_React$Component) {
    _default$4(Resize2, _React$Component);
    function Resize2() {
      _default$7(this, Resize2);
      var _this2 = _default$5(this, _React$Component.call(this));
      _this2.showResizeProxy = function() {
        _this2.props.resizeProxyDomRef.style.cssText = "display:block;left:" + _this2.startLeft + "px;";
      };
      _this2.moveResizeProxy = function() {
        var moveLeft = _this2.startLeft + _this2.changedPageX;
        _this2.props.resizeProxyDomRef.style.cssText = "left:" + moveLeft + "px;display:block;";
      };
      _this2.resetResizeProxy = function() {
        if (_this2.asyncResizeFlag) {
          _this2.props.onChange(_this2.props.dataIndex, _this2.changedPageX);
        }
        _this2.changedPageX = 0;
        _this2.tRight = 0;
        _this2.asyncResizeFlag = false;
        _this2.props.resizeProxyDomRef.style.cssText = "display:none;";
      };
      _this2.movingLimit = function() {
        var moveLeft = _this2.startLeft + _this2.changedPageX;
        if (moveLeft > _this2.tRight) {
          moveLeft = _this2.tRight;
          _this2.changedPageX = _this2.tRight - _this2.startLeft;
        }
        if (moveLeft - _this2.cellLeft < _this2.cellMinWidth) {
          _this2.changedPageX = _this2.cellLeft + _this2.cellMinWidth - _this2.startLeft;
        }
        if (moveLeft < 0) {
          _this2.changedPageX = 0 - _this2.startLeft;
        }
        if (_this2.props.col.width + _this2.changedPageX < _this2.cellMinWidth) {
          _this2.changedPageX = _this2.cellMinWidth - _this2.props.col.width;
        }
      };
      _this2.onMouseDown = function(e2) {
        var _this$props$tableEl$g = _this2.props.tableEl.getBoundingClientRect(), tableLeft = _this$props$tableEl$g.left, tableWidth = _this$props$tableEl$g.width;
        if (!_this2.props.cellDomRef || !_this2.props.cellDomRef.current) {
          return;
        }
        var _this$props$cellDomRe = _this2.props.cellDomRef.current.getBoundingClientRect(), cellDomLeft = _this$props$cellDomRe.left;
        _this2.lastPageX = e2.pageX;
        _this2.tLeft = tableLeft;
        _this2.tRight = tableWidth;
        _this2.startLeft = e2.pageX - tableLeft;
        _this2.cellLeft = cellDomLeft - tableLeft;
        if (_this2.props.asyncResizable)
          _this2.showResizeProxy();
        events.on(document, "mousemove", _this2.onMouseMove);
        events.on(document, "mouseup", _this2.onMouseUp);
        _this2.unSelect();
      };
      _this2.onMouseMove = function(e2) {
        var pageX = e2.pageX;
        _this2.changedPageX = pageX - _this2.lastPageX;
        if (_this2.props.rtl) {
          _this2.changedPageX = -_this2.changedPageX;
        }
        if (_this2.props.hasLock) {
          if (!_this2.props.asyncResizable) {
            _this2.cellLeft = _this2.props.cellDomRef.getBoundingClientRect().left - _this2.tLeft;
          }
        }
        _this2.movingLimit();
        if (_this2.props.asyncResizable) {
          _this2.asyncResizeFlag = true;
          _this2.moveResizeProxy();
          return;
        }
        _this2.props.onChange(_this2.props.dataIndex, _this2.changedPageX);
        _this2.lastPageX = pageX;
      };
      _this2.onMouseUp = function() {
        if (_this2.props.asyncResizable) {
          _this2.resetResizeProxy();
        }
        _this2.startLeft = 0;
        _this2.destory();
      };
      _this2.cellMinWidth = 40;
      _this2.lastPageX = 0;
      _this2.tRight = 0;
      _this2.tLeft = 0;
      _this2.cellLeft = 0;
      _this2.startLeft = 0;
      _this2.changedPageX = 0;
      _this2.asyncResizeFlag = false;
      return _this2;
    }
    Resize2.prototype.componentWillUnmount = function componentWillUnmount() {
      this.destory();
    };
    Resize2.prototype.destory = function destory2() {
      events.off(document, "mousemove", this.onMouseMove);
      events.off(document, "mouseup", this.onMouseUp);
      this.select();
    };
    Resize2.prototype.unSelect = function unSelect() {
      dom.setStyle(document.body, {
        userSelect: "none",
        cursor: "ew-resize"
      });
      document.body.setAttribute("unselectable", "on");
    };
    Resize2.prototype.select = function select() {
      dom.setStyle(document.body, {
        userSelect: "",
        cursor: ""
      });
      document.body.removeAttribute("unselectable");
    };
    Resize2.prototype.render = function render2() {
      var prefix = this.props.prefix;
      return React.createElement("a", { className: prefix + "table-resize-handler", onMouseDown: this.onMouseDown });
    };
    return Resize2;
  }(React.Component), _class$n.propTypes = {
    prefix: PropTypes$1.string,
    rtl: PropTypes$1.bool,
    onChange: PropTypes$1.func,
    dataIndex: PropTypes$1.string,
    tableEl: PropTypes$1.any,
    resizeProxyDomRef: PropTypes$1.any,
    cellDomRef: PropTypes$1.any,
    col: PropTypes$1.any,
    hasLock: PropTypes$1.bool,
    asyncResizable: PropTypes$1.bool
  }, _class$n.defaultProps = {
    onChange: function onChange5() {
    }
  }, _temp$g);
  Resize.displayName = "Resize";
  const ResizeComponent = Resize;
  var _class$m, _temp$f;
  var noop$4 = function noop9() {
  };
  var Header = (_temp$f = _class$m = function(_React$Component) {
    _default$4(Header2, _React$Component);
    function Header2() {
      _default$7(this, Header2);
      var _this2 = _default$5(this, _React$Component.call(this));
      _this2.checkHasLock = function() {
        var columns = _this2.props.columns;
        var hasLock = false;
        for (var i = 0; i < columns.length; i++) {
          var cols = columns[i];
          for (var j = 0; j < cols.length; j++) {
            var col = cols[j];
            if (col.lock) {
              hasLock = true;
              break;
            }
          }
          if (hasLock) {
            break;
          }
        }
        _this2.hasLock = hasLock;
      };
      _this2.getCellRef = function(i, j, cell5) {
        _this2.props.headerCellRef(i, j, cell5);
        var columns = _this2.props.columns;
        var columnProps = columns[i] && columns[i][j];
        if (columnProps && columnProps.ref && typeof columnProps.ref === "function") {
          columnProps.ref(cell5);
        }
      };
      _this2.createCellDomRef = function(i, j) {
        var cellRefKey = _this2.getCellDomRefKey(i, j);
        if (!_this2[cellRefKey]) {
          _this2[cellRefKey] = {};
        }
        return _this2[cellRefKey];
      };
      _this2.getCellDomRef = function(cellRef, cellDom) {
        if (!cellRef) {
          return;
        }
        cellRef.current = cellDom;
      };
      _this2.getCellDomRefKey = function(i, j) {
        return "header_cell_" + i + "_" + j;
      };
      _this2.onSort = function(dataIndex, order, sort) {
        _this2.props.onSort(dataIndex, order, sort);
      };
      _this2.hasLock = false;
      return _this2;
    }
    Header2.prototype.render = function render2() {
      var _this2 = this;
      var _props = this.props, prefix = _props.prefix, className = _props.className, children = _props.children, Tag = _props.component;
      _props.colGroup;
      var columns = _props.columns, locale = _props.locale, filterParams = _props.filterParams, onFilter2 = _props.onFilter, components = _props.components;
      _props.affixRef;
      _props.headerCellRef;
      _props.onSort;
      var sort = _props.sort, sortIcons = _props.sortIcons, onResizeChange = _props.onResizeChange, pure = _props.pure, rtl = _props.rtl;
      _props.tableWidth;
      var tableEl = _props.tableEl, resizeProxyDomRef = _props.resizeProxyDomRef, others = _default$3(_props, ["prefix", "className", "children", "component", "colGroup", "columns", "locale", "filterParams", "onFilter", "components", "affixRef", "headerCellRef", "onSort", "sort", "sortIcons", "onResizeChange", "pure", "rtl", "tableWidth", "tableEl", "resizeProxyDomRef"]);
      this.checkHasLock();
      var _components$Cell = components.Cell, Cell$12 = _components$Cell === void 0 ? Cell : _components$Cell, _components$Filter = components.Filter, Filter2 = _components$Filter === void 0 ? FilterComponent : _components$Filter, _components$Sort = components.Sort, Sort$1 = _components$Sort === void 0 ? Sort : _components$Sort, _components$Resize = components.Resize, Resize2 = _components$Resize === void 0 ? ResizeComponent : _components$Resize;
      var rowSpan = columns.length;
      var header = columns.map(function(cols, index2) {
        var col = cols.map(function(col2, j) {
          var _classnames;
          var cellRef = _this2.createCellDomRef(index2, j);
          var title = col2.title, colSpan = col2.colSpan, sortable = col2.sortable, sortDirections = col2.sortDirections, resizable = col2.resizable, asyncResizable = col2.asyncResizable, dataIndex = col2.dataIndex, filters = col2.filters, filterMode = col2.filterMode, filterMenuProps = col2.filterMenuProps, filterProps = col2.filterProps;
          col2.width;
          var align = col2.align, alignHeader = col2.alignHeader, className2 = col2.className;
          col2.__normalized;
          col2.lock;
          col2.cellStyle;
          var wordBreak = col2.wordBreak, others2 = _default$3(col2, ["title", "colSpan", "sortable", "sortDirections", "resizable", "asyncResizable", "dataIndex", "filters", "filterMode", "filterMenuProps", "filterProps", "width", "align", "alignHeader", "className", "__normalized", "lock", "cellStyle", "wordBreak"]);
          var order = sort ? sort[dataIndex] : "";
          className2 = classnames((_classnames = {}, _classnames[prefix + "table-header-node"] = true, _classnames[prefix + "table-header-resizable"] = resizable || asyncResizable, _classnames[prefix + "table-word-break-" + wordBreak] = !!wordBreak, _classnames[prefix + "table-header-sort-" + order] = sortable && order, _classnames[className2] = className2, _classnames));
          var attrs = {}, sortElement = void 0, filterElement = void 0, resizeElement = void 0;
          attrs.colSpan = colSpan;
          if (!(col2.children && col2.children.length)) {
            if (sortable) {
              sortElement = React.createElement(Sort$1, {
                prefix,
                className: prefix + "table-header-icon",
                dataIndex,
                onSort: _this2.onSort,
                sortDirections,
                sortIcons,
                sort,
                rtl,
                locale
              });
            }
            if (asyncResizable || resizable) {
              resizeElement = React.createElement(Resize2, {
                asyncResizable,
                hasLock: _this2.hasLock,
                col: col2,
                tableEl,
                prefix,
                rtl,
                dataIndex,
                resizeProxyDomRef,
                cellDomRef: cellRef,
                onChange: onResizeChange
              });
            }
            if (filters) {
              filterElement = filters.length ? React.createElement(Filter2, {
                dataIndex,
                className: prefix + "table-header-icon",
                filters,
                prefix,
                locale,
                rtl,
                filterParams,
                filterMode,
                filterMenuProps,
                filterProps,
                onFilter: onFilter2
              }) : null;
            }
            attrs.rowSpan = rowSpan - index2;
          }
          if (+attrs.colSpan === 0) {
            return null;
          }
          return React.createElement(
            Cell$12,
            _default$8({}, others2, attrs, {
              key: j,
              prefix,
              pure,
              rtl,
              cell: title,
              component: "th",
              align: alignHeader ? alignHeader : align,
              className: className2,
              ref: _this2.getCellRef.bind(_this2, index2, j),
              getCellDomRef: _this2.getCellDomRef.bind(_this2, cellRef),
              type: "header"
            }),
            sortElement,
            filterElement,
            resizeElement
          );
        });
        return React.createElement(
          "tr",
          { key: index2 },
          col
        );
      });
      return React.createElement(
        Tag,
        _default$8({ className }, others),
        header,
        children
      );
    };
    return Header2;
  }(React.Component), _class$m.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    className: PropTypes$1.string,
    component: PropTypes$1.string,
    columns: PropTypes$1.array,
    colGroup: PropTypes$1.object,
    headerCellRef: PropTypes$1.func,
    locale: PropTypes$1.object,
    filterParams: PropTypes$1.object,
    onFilter: PropTypes$1.func,
    components: PropTypes$1.object,
    sort: PropTypes$1.object,
    sortIcons: PropTypes$1.object,
    onSort: PropTypes$1.func,
    onResizeChange: PropTypes$1.func,
    tableWidth: PropTypes$1.number,
    tableEl: PropTypes$1.any
  }, _class$m.defaultProps = {
    component: "thead",
    columns: [],
    headerCellRef: noop$4,
    onFilter: noop$4,
    components: {},
    onSort: noop$4,
    onResizeChange: noop$4
  }, _temp$f);
  Header.displayName = "Header";
  var _class$l, _temp$e;
  var Wrapper = (_temp$e = _class$l = function(_Component) {
    _default$4(Wrapper2, _Component);
    function Wrapper2() {
      _default$7(this, Wrapper2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Wrapper2.prototype.render = function render2() {
      var _props = this.props, colGroup = _props.colGroup, children = _props.children, tableWidth = _props.tableWidth, Tag = _props.component;
      return React.createElement(
        Tag,
        { role: "table", style: { width: tableWidth } },
        colGroup,
        children
      );
    };
    return Wrapper2;
  }(React.Component), _class$l.propTypes = {
    tableWidth: PropTypes$1.number
  }, _temp$e);
  Wrapper.displayName = "Wrapper";
  Wrapper.defaultProps = {
    component: "table"
  };
  Wrapper.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    colGroup: PropTypes$1.any,
    component: PropTypes$1.string
  };
  var _class$k, _temp$d;
  var Column = (_temp$d = _class$k = function(_React$Component) {
    _default$4(Column2, _React$Component);
    function Column2() {
      _default$7(this, Column2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Column2.prototype.render = function render2() {
      return null;
    };
    return Column2;
  }(React.Component), _class$k.propTypes = {
    /**
     * 指定列对应的字段，支持`a.b`形式的快速取值
     */
    dataIndex: PropTypes$1.string,
    /**
     * 行渲染的逻辑
     * value, rowIndex, record, context四个属性只可读不可被更改
     * Function(value, index, record) => Element
     */
    cell: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func]),
    /**
     * 表头显示的内容
     */
    title: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func]),
    /**
     * 写到 header 单元格上的title属性
     */
    htmlTitle: PropTypes$1.string,
    /**
     * 是否支持排序
     */
    sortable: PropTypes$1.bool,
    /**
     * 排序的方向。
     * 设置 ['desc', 'asc']，表示降序、升序
     * 设置 ['desc', 'asc', 'default']，表示表示降序、升序、不排序
     * @version 1.23
     */
    sortDirections: PropTypes$1.arrayOf(PropTypes$1.oneOf(["desc", "asc", "default"])),
    /**
     * 列宽，注意在锁列的情况下一定需要配置宽度
     */
    width: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    /**
     * 单元格的对齐方式
     */
    align: PropTypes$1.oneOf(["left", "center", "right"]),
    /**
     * 单元格标题的对齐方式, 不配置默认读取align值
     */
    alignHeader: PropTypes$1.oneOf(["left", "center", "right"]),
    /**
     * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
     */
    filters: PropTypes$1.arrayOf(PropTypes$1.shape({
      label: PropTypes$1.string,
      value: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string])
    })),
    /**
     * 过滤的模式是单选还是多选
     */
    filterMode: PropTypes$1.oneOf(["single", "multiple"]),
    /**
     * filter 模式下传递给 Menu 菜单的属性， 默认继承 `Menu` 组件的API
     * @property {Boolean} subMenuSelectable 默认为`false` subMenu是否可选择
     * @property {Boolean} isSelectIconRight 默认为`false` 是否将选中图标居右。注意：SubMenu 上的选中图标一直居左，不受此API控制
     */
    filterMenuProps: PropTypes$1.object,
    filterProps: PropTypes$1.object,
    /**
     * 是否支持锁列,可选值为`left`,`right`, `true`
     */
    lock: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.string]),
    /**
     * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
     */
    resizable: PropTypes$1.bool,
    /**
     * （推荐使用）是否支持异步列宽调整, 当该值设为true，table的布局方式会修改为fixed.
     * @version 1.24
     */
    asyncResizable: PropTypes$1.bool,
    /**
     * header cell 横跨的格数，设置为0表示不出现此 th
     */
    colSpan: PropTypes$1.number,
    /**
     * 设置该列单元格的word-break样式，对于id类、中文类适合用all，对于英文句子适合用word
     * @enumdesc all, word
     * @default all
     * @version 1.23
     */
    wordBreak: PropTypes$1.oneOf(["all", "word"])
  }, _class$k.contextTypes = {
    parent: PropTypes$1.any
  }, _class$k.defaultProps = {
    cell: function cell2(value) {
      return value;
    },
    filterMode: "multiple",
    filterMenuProps: {
      subMenuSelectable: false
    },
    filterProps: {},
    resizable: false,
    asyncResizable: false
  }, _class$k._typeMark = "column", _temp$d);
  Column.displayName = "Column";
  var _class$j, _temp$c;
  var ColumnGroup = (_temp$c = _class$j = function(_React$Component) {
    _default$4(ColumnGroup2, _React$Component);
    function ColumnGroup2() {
      _default$7(this, ColumnGroup2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    ColumnGroup2.prototype.getChildContext = function getChildContext() {
      return {
        parent: this
      };
    };
    ColumnGroup2.prototype.render = function render2() {
      return null;
    };
    return ColumnGroup2;
  }(React.Component), _class$j.propTypes = {
    /**
     * 表头显示的内容
     */
    title: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func])
  }, _class$j.childContextTypes = {
    parent: PropTypes$1.any
  }, _class$j.defaultProps = {
    title: "column-group"
  }, _class$j._typeMark = "columnGroup", _temp$c);
  ColumnGroup.displayName = "ColumnGroup";
  var _class$i, _temp$b;
  var Children = React.Children, noop$3 = function noop10() {
  };
  var Table$2 = (_temp$b = _class$i = function(_React$Component) {
    _default$4(Table2, _React$Component);
    function Table2(props, context) {
      _default$7(this, Table2);
      var _this2 = _default$5(this, _React$Component.call(this, props, context));
      _this2.state = {
        sort: _this2.props.sort || {}
      };
      _this2.onSort = function(dataIndex, order, sort) {
        if (typeof _this2.props.sort === "undefined") {
          _this2.setState({
            sort
          }, function() {
            _this2.props.onSort(dataIndex, order, sort);
          });
        } else {
          _this2.props.onSort(dataIndex, order, sort);
        }
      };
      _this2.onFilter = function(filterParams) {
        _this2.props.onFilter(filterParams);
      };
      _this2.onResizeChange = function(dataIndex, value) {
        _this2.props.onResizeChange(dataIndex, value);
      };
      _this2.getResizeProxyDomRef = function(resizeProxyDom) {
        if (!resizeProxyDom) {
          return _this2.resizeProxyDomRef;
        }
        _this2.resizeProxyDomRef = resizeProxyDom;
      };
      _this2.getWrapperRef = function(wrapper2) {
        if (!wrapper2) {
          return _this2.wrapper;
        }
        _this2.wrapper = wrapper2;
      };
      _this2.getAffixRef = function(affixRef) {
        if (!affixRef) {
          return _this2.affixRef;
        }
        _this2.affixRef = affixRef;
      };
      _this2.getHeaderCellRef = function(i, j, cell5) {
        var cellRef = "header_cell_" + i + "_" + j;
        if (!cell5) {
          return _this2[cellRef];
        }
        _this2[cellRef] = cell5;
      };
      _this2.getRowRef = function(i, row) {
        var rowRef = "row_" + i;
        if (!row) {
          return _this2[rowRef];
        }
        _this2[rowRef] = row;
      };
      _this2.getCellRef = function(i, j, cell5) {
        var cellRef = "cell_" + i + "_" + j;
        if (!cell5) {
          return _this2[cellRef];
        }
        _this2[cellRef] = cell5;
      };
      _this2.handleColHoverClass = function(rowIndex, colIndex, isAdd) {
        var crossline = _this2.props.crossline;
        var funcName = isAdd ? "addClass" : "removeClass";
        if (crossline) {
          _this2.props.entireDataSource.forEach(function(val, index2) {
            try {
              var currentCol = ReactDOM.findDOMNode(_this2.getCellRef(index2, colIndex));
              currentCol && dom[funcName](currentCol, "hovered");
            } catch (error) {
              return null;
            }
          });
        }
      };
      _this2.findEventTarget = function(e2) {
        var prefix = _this2.props.prefix;
        var target = dom.getClosest(e2.target, "td." + prefix + "table-cell");
        var colIndex = target && target.getAttribute("data-next-table-col");
        var rowIndex = target && target.getAttribute("data-next-table-row");
        try {
          var currentCol = ReactDOM.findDOMNode(_this2.getCellRef(rowIndex, colIndex));
          if (currentCol === target) {
            return {
              colIndex,
              rowIndex
            };
          }
        } catch (error) {
          return {};
        }
        return {};
      };
      _this2.onBodyMouseOver = function(e2) {
        var crossline = _this2.props.crossline;
        if (!crossline) {
          return;
        }
        var _this$findEventTarget = _this2.findEventTarget(e2), colIndex = _this$findEventTarget.colIndex, rowIndex = _this$findEventTarget.rowIndex;
        if (!colIndex || !rowIndex) {
          return;
        }
        _this2.handleColHoverClass(rowIndex, colIndex, true);
        _this2.colIndex = colIndex;
        _this2.rowIndex = rowIndex;
      };
      _this2.onBodyMouseOut = function(e2) {
        var crossline = _this2.props.crossline;
        if (!crossline) {
          return;
        }
        var _this$findEventTarget2 = _this2.findEventTarget(e2), colIndex = _this$findEventTarget2.colIndex, rowIndex = _this$findEventTarget2.rowIndex;
        if (!colIndex || !rowIndex) {
          return;
        }
        _this2.handleColHoverClass(_this2.rowIndex, _this2.colIndex, false);
        _this2.colIndex = -1;
        _this2.rowIndex = -1;
      };
      _this2.addColIndex = function(children) {
        var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        children.forEach(function(child, i) {
          child.__colIndex = start + i;
        });
      };
      _this2.getTableEl = function(ref) {
        _this2.tableEl = ref;
      };
      var _this$context = _this2.context, getTableInstance = _this$context.getTableInstance, getTableInstanceForVirtual = _this$context.getTableInstanceForVirtual, getTableInstanceForFixed = _this$context.getTableInstanceForFixed, getTableInstanceForExpand = _this$context.getTableInstanceForExpand;
      getTableInstance && getTableInstance(props.lockType, _this2);
      getTableInstanceForFixed && getTableInstanceForFixed(props.lockType, _this2);
      getTableInstanceForVirtual && getTableInstanceForVirtual(props.lockType, _this2);
      getTableInstanceForExpand && getTableInstanceForExpand(_this2);
      _this2.notRenderCellIndex = [];
      return _this2;
    }
    Table2.prototype.getChildContext = function getChildContext() {
      return {
        notRenderCellIndex: this.notRenderCellIndex || [],
        lockType: this.props.lockType
      };
    };
    Table2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      var state = {};
      if (typeof nextProps.sort !== "undefined") {
        state.sort = nextProps.sort;
      }
      return state;
    };
    Table2.prototype.componentDidMount = function componentDidMount() {
      this.notRenderCellIndex = [];
    };
    Table2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (nextProps.pure) {
        var isEqual = shallowElementEquals$1(nextProps, this.props) && obj.shallowEqual(nextState, this.state) && obj.shallowEqual(nextContext, this.context);
        return !isEqual;
      }
      return true;
    };
    Table2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.notRenderCellIndex = [];
    };
    Table2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
      var columns = props.columns;
      if (props.children) {
        columns = this.normalizeChildren(props);
      }
      return this.fetchInfoFromBinaryChildren(columns);
    };
    Table2.prototype.normalizeChildren = function normalizeChildren(props) {
      var columns = props.columns;
      var getChildren = function getChildren2(children) {
        var ret = [];
        Children.forEach(children, function(child) {
          if (child) {
            var _props = _default$8({}, child.props);
            if (child.ref) {
              _props.ref = child.ref;
            }
            if (!(child && ["function", "object"].indexOf(_default$6(child.type)) > -1 && (child.type._typeMark === "column" || child.type._typeMark === "columnGroup"))) {
              log.warning("Use <Table.Column/>, <Table.ColumnGroup/> as child.");
            }
            ret.push(_props);
            if (child.props.children) {
              _props.children = getChildren2(child.props.children);
            }
          }
        });
        return ret;
      };
      if (props.children) {
        columns = getChildren(props.children);
      }
      return columns;
    };
    Table2.prototype.fetchInfoFromBinaryChildren = function fetchInfoFromBinaryChildren(children) {
      var hasGroupHeader = false;
      var flatChildren = [], groupChildren = [], getChildren = function getChildren2() {
        var propsChildren = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var level = arguments[1];
        groupChildren[level] = groupChildren[level] || [];
        propsChildren.forEach(function(child) {
          if (child.children) {
            hasGroupHeader = true;
            getChildren2(child.children, level + 1);
          } else {
            flatChildren.push(child);
          }
          groupChildren[level].push(child);
        });
      }, getColSpan = function getColSpan2(children2, colSpan) {
        colSpan = colSpan || 0;
        children2.forEach(function(child) {
          if (child.children) {
            colSpan = getColSpan2(child.children, colSpan);
          } else {
            colSpan += 1;
          }
        });
        return colSpan;
      };
      getChildren(children, 0);
      groupChildren.forEach(function(groupChild, i) {
        groupChild.forEach(function(child, j) {
          var colSpan = void 0;
          var children2 = child.children;
          if (children2) {
            colSpan = getColSpan(children2);
            child.colSpan = colSpan;
            groupChildren[i][j] = child;
          }
        });
      });
      var _props2 = this.props, lockType = _props2.lockType, lengths = _props2.lengths;
      var start = lockType === "right" ? lengths.origin - lengths.right : 0;
      this.addColIndex(flatChildren, start);
      return {
        flatChildren,
        groupChildren,
        hasGroupHeader
      };
    };
    Table2.prototype.renderColGroup = function renderColGroup(flatChildren) {
      var cols = flatChildren.map(function(col, index2) {
        var width = col.width;
        var style = {};
        if (width) {
          style = {
            width
          };
        }
        return React.createElement("col", { style, key: index2 });
      });
      return React.createElement(
        "colgroup",
        { key: "table-colgroup" },
        cols
      );
    };
    Table2.prototype.renderTable = function renderTable(groupChildren, flatChildren) {
      if (flatChildren.length || !flatChildren.length && !this.props.lockType) {
        var _props3 = this.props, hasHeader = _props3.hasHeader, components = _props3.components, prefix = _props3.prefix, wrapperContent = _props3.wrapperContent, filterParams = _props3.filterParams, locale = _props3.locale, dataSource = _props3.dataSource, emptyContent = _props3.emptyContent, loading = _props3.loading, primaryKey = _props3.primaryKey, cellProps = _props3.cellProps, rowProps = _props3.rowProps, onRowClick = _props3.onRowClick, onRowMouseEnter = _props3.onRowMouseEnter, onRowMouseLeave = _props3.onRowMouseLeave, expandedIndexSimulate = _props3.expandedIndexSimulate, pure = _props3.pure, rtl = _props3.rtl, crossline = _props3.crossline, sortIcons = _props3.sortIcons, tableWidth = _props3.tableWidth;
        var sort = this.state.sort;
        var _components$Header = components.Header, Header$1 = _components$Header === void 0 ? Header : _components$Header, _components$Wrapper = components.Wrapper, Wrapper$1 = _components$Wrapper === void 0 ? Wrapper : _components$Wrapper, _components$Body = components.Body, Body$1 = _components$Body === void 0 ? Body : _components$Body;
        var colGroup = this.renderColGroup(flatChildren);
        return [React.createElement("div", {
          key: prefix + "table-column-resize-proxy",
          ref: this.getResizeProxyDomRef,
          className: prefix + "table-column-resize-proxy"
        }), React.createElement(
          Wrapper$1,
          {
            key: prefix + "table-wrapper",
            colGroup,
            ref: this.getWrapperRef,
            prefix,
            tableWidth
          },
          hasHeader ? React.createElement(Header$1, {
            prefix,
            rtl,
            pure,
            affixRef: this.getAffixRef,
            colGroup,
            className: prefix + "table-header",
            filterParams,
            tableEl: this.tableEl,
            columns: groupChildren,
            locale,
            headerCellRef: this.getHeaderCellRef,
            components,
            onFilter: this.onFilter,
            sort,
            onResizeChange: this.onResizeChange,
            onSort: this.onSort,
            sortIcons,
            tableWidth,
            resizeProxyDomRef: this.resizeProxyDomRef
          }) : null,
          React.createElement(Body$1, {
            prefix,
            rtl,
            pure,
            crossline,
            colGroup,
            className: prefix + "table-body",
            components,
            loading,
            emptyContent,
            getCellProps: cellProps,
            primaryKey,
            getRowProps: rowProps,
            columns: flatChildren,
            rowRef: this.getRowRef,
            cellRef: this.getCellRef,
            onRowClick,
            expandedIndexSimulate,
            tableEl: this.tableEl,
            onRowMouseEnter,
            onRowMouseLeave,
            dataSource,
            locale,
            onBodyMouseOver: this.onBodyMouseOver,
            onBodyMouseOut: this.onBodyMouseOut,
            tableWidth
          }),
          wrapperContent
        )];
      } else {
        return null;
      }
    };
    Table2.prototype.render = function render2() {
      var _classnames, _classnames2;
      var ret = this.normalizeChildrenState(this.props);
      this.groupChildren = ret.groupChildren;
      this.flatChildren = ret.flatChildren;
      var table = this.renderTable(ret.groupChildren, ret.flatChildren), _props4 = this.props, className = _props4.className, style = _props4.style, hasBorder = _props4.hasBorder, isZebra = _props4.isZebra, loading = _props4.loading, size2 = _props4.size, hasHeader = _props4.hasHeader, prefix = _props4.prefix;
      _props4.dataSource;
      _props4.entireDataSource;
      _props4.onSort;
      _props4.onResizeChange;
      _props4.onRowClick;
      _props4.onRowMouseEnter;
      _props4.onRowMouseLeave;
      _props4.onFilter;
      _props4.rowProps;
      _props4.cellProps;
      _props4.scrollToRow;
      _props4.primaryKey;
      _props4.components;
      _props4.wrapperContent;
      _props4.lockType;
      _props4.locale;
      _props4.expandedIndexSimulate;
      _props4.refs;
      _props4.pure;
      var rtl = _props4.rtl;
      _props4.emptyContent;
      _props4.filterParams;
      _props4.columns;
      _props4.sortIcons;
      var _props4$loadingCompon = _props4.loadingComponent, LoadingComponent = _props4$loadingCompon === void 0 ? Loading$1 : _props4$loadingCompon, tableLayout = _props4.tableLayout;
      _props4.tableWidth;
      var ref = _props4.ref, others = _default$3(_props4, ["className", "style", "hasBorder", "isZebra", "loading", "size", "hasHeader", "prefix", "dataSource", "entireDataSource", "onSort", "onResizeChange", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onFilter", "rowProps", "cellProps", "scrollToRow", "primaryKey", "components", "wrapperContent", "lockType", "locale", "expandedIndexSimulate", "refs", "pure", "rtl", "emptyContent", "filterParams", "columns", "sortIcons", "loadingComponent", "tableLayout", "tableWidth", "ref"]), cls = classnames((_classnames = {}, _classnames[prefix + "table"] = true, _classnames[prefix + "table-" + size2] = size2, _classnames[prefix + "table-layout-" + tableLayout] = tableLayout, _classnames[prefix + "table-loading"] = loading, _classnames["only-bottom-border"] = !hasBorder, _classnames["no-header"] = !hasHeader, _classnames.zebra = isZebra, _classnames[className] = className, _classnames));
      if (rtl) {
        others.dir = "rtl";
      }
      var loadingcls = classnames((_classnames2 = {}, _classnames2[prefix + "table-loading-content"] = true, _classnames2));
      return React.createElement(
        "div",
        _default$8({
          className: cls,
          style,
          ref: ref || this.getTableEl
        }, obj.pickOthers(Object.keys(Table2.propTypes), others)),
        table,
        loading ? React.createElement(LoadingComponent, { className: loadingcls }) : null
      );
    };
    return Table2;
  }(React.Component), _class$i.Column = Column, _class$i.ColumnGroup = ColumnGroup, _class$i.Header = Header, _class$i.Body = Body, _class$i.Wrapper = Wrapper, _class$i.Row = Row, _class$i.Cell = Cell, _class$i.Filter = FilterComponent, _class$i.Sort = Sort, _class$i.propTypes = _default$8({}, ConfigProvider$1.propTypes, {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes$1.string,
    pure: PropTypes$1.bool,
    rtl: PropTypes$1.bool,
    /**
     * 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局
     */
    tableLayout: PropTypes$1.oneOf(["fixed", "auto"]),
    /**
     * 表格的总长度，可以这么用：设置表格总长度 、设置部分列的宽度，这样表格会按照剩余空间大小，自动其他列分配宽度
     */
    tableWidth: PropTypes$1.number,
    /**
     * 自定义类名
     */
    className: PropTypes$1.string,
    /**
     * 自定义内联样式
     */
    style: PropTypes$1.object,
    /**
     * 尺寸 small为紧凑模式
     */
    size: PropTypes$1.oneOf(["small", "medium"]),
    /**
     * 表格展示的数据源
     */
    dataSource: PropTypes$1.array,
    entireDataSource: PropTypes$1.array,
    /**
     * 点击表格每一行触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowClick: PropTypes$1.func,
    /**
     * 悬浮在表格每一行的时候触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowMouseEnter: PropTypes$1.func,
    /**
     * 离开表格每一行的时候触发的事件
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @param {Event} e DOM事件对象
     */
    onRowMouseLeave: PropTypes$1.func,
    /**
     * 点击列排序触发的事件
     * @param {String} dataIndex 指定的排序的字段
     * @param {String} order 排序对应的顺序, 有`desc`和`asc`两种
     */
    onSort: PropTypes$1.func,
    /**
     * 点击过滤确认按钮触发的事件
     * @param {Object} filterParams 过滤的字段信息
     */
    onFilter: PropTypes$1.func,
    /**
     * 重设列尺寸的时候触发的事件
     * @param {String} dataIndex 指定重设的字段
     * @param {Number} value 列宽变动的数值
     */
    onResizeChange: PropTypes$1.func,
    /**
     * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Object} 需要设置的行属性
     */
    rowProps: PropTypes$1.func,
    /**
     * 设置单元格的属性，通过该属性可以进行合并单元格
     * @param {Number} rowIndex 该行所对应的序列
     * @param {Number} colIndex 该列所对应的序列
     * @param {String} dataIndex 该列所对应的字段名称
     * @param {Object} record 该行对应的记录
     * @returns {Object} 返回td元素的所支持的属性对象
     */
    cellProps: PropTypes$1.func,
    /**
     * 表格是否具有边框
     */
    hasBorder: PropTypes$1.bool,
    /**
     * 表格是否具有头部
     */
    hasHeader: PropTypes$1.bool,
    /**
     * 表格是否是斑马线
     */
    isZebra: PropTypes$1.bool,
    /**
     * 表格是否在加载中
     */
    loading: PropTypes$1.bool,
    /**
     * 自定义 Loading 组件
     * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
     * @param {LoadingProps} props 需要透传给组件的参数
     * @return {React.ReactNode} 展示的组件
     */
    loadingComponent: PropTypes$1.func,
    /**
     * 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:[]}}
     * 示例:
     * 假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中
     * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
     */
    filterParams: PropTypes$1.object,
    /**
     * 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{[dataIndex]: 'asc' | 'desc' } , 例如  {id: 'desc'}
     */
    sort: PropTypes$1.object,
    /**
     * 自定义排序按钮，例如上下排布的: `{desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />, asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />}`
     */
    sortIcons: PropTypes$1.object,
    /**
     * 自定义国际化文案对象
     * @property {String} ok 过滤器中确认按钮文案
     * @property {String} reset 过滤器中重置按钮文案
     * @property {String} empty 没有数据情况下 table内的文案
     * @property {String} asc 排序升序状态下的文案
     * @property {String} desc 排序将序状态下的文案
     * @property {String} expanded 可折叠行，展开状态下的文案
     * @property {String} folded 可折叠行，折叠状态下的文案
     * @property {String} filter 过滤器文案
     * @property {String} selectAll header里全选的按钮文案
     */
    locale: PropTypes$1.object,
    components: PropTypes$1.object,
    /**
     * 等同于写子组件 Table.Column ，子组件优先级更高
     */
    columns: PropTypes$1.array,
    /**
     * 设置数据为空的时候的表格内容展现
     */
    emptyContent: PropTypes$1.node,
    /**
     * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
     */
    primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
    lockType: PropTypes$1.oneOf(["left", "right"]),
    wrapperContent: PropTypes$1.any,
    refs: PropTypes$1.object,
    /**
     * 额外渲染行的渲染函数
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Element} 渲染内容
     */
    expandedRowRender: PropTypes$1.func,
    /**
     * 设置行是否可展开，设置 false 为不可展开
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Boolean} 是否可展开
     */
    rowExpandable: PropTypes$1.func,
    /**
     * 额外渲染行的缩进, 是个二维数组(eg:[1,1]) 分别表示左右两边的缩进
     */
    expandedRowIndent: PropTypes$1.array,
    /**
     * 是否显示点击展开额外渲染行的+号按钮
     */
    hasExpandedRowCtrl: PropTypes$1.bool,
    /**
     * 设置额外渲染行的属性
     * @param {Object} record 该行所对应的数据
     * @param {Number} index 该行所对应的序列
     * @returns {Object} 额外渲染行的属性
     */
    getExpandedColProps: PropTypes$1.func,
    /**
     * 当前展开的 Expand行 或者 Tree行 , 传入此属性为受控状态，一般配合 onRowOpen 使用
     */
    openRowKeys: PropTypes$1.array,
    /**
     * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
     * @version 1.23.22
     */
    defaultOpenRowKeys: PropTypes$1.array,
    /**
     * 在 Expand行 或者 Tree行 展开或者收起的时候触发的事件
     * @param {Array} openRowKeys 展开的渲染行的key
     * @param {String} currentRowKey 当前点击的渲染行的key
     * @param {Boolean} expanded 当前点击是展开还是收起
     * @param {Object} currentRecord 当前点击额外渲染行的记录
     */
    onRowOpen: PropTypes$1.func,
    onExpandedRowClick: PropTypes$1.func,
    /**
     * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
     */
    fixedHeader: PropTypes$1.bool,
    /**
     * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
     */
    maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    /**
     * 是否启用选择模式
     * @property {Function} getProps `Function(record, index)=>Object` 获取selection的默认属性
     * @property {Function} onChange `Function(selectedRowKeys:Array, records:Array)` 选择改变的时候触发的事件，**注意:** 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。
     * @property {Function} onSelect `Function(selected:Boolean, record:Object, records:Array)` 用户手动选择/取消选择某行的回调
     * @property {Function} onSelectAll `Function(selected:Boolean, records:Array)` 用户手动选择/取消选择所有行的回调
     * @property {Array} selectedRowKeys 设置了此属性,将rowSelection变为受控状态,接收值为该行数据的primaryKey的值
     * @property {String} mode 选择selection的模式, 可选值为`single`, `multiple`，默认为`multiple`
     * @property {Function} columnProps `Function()=>Object` 选择列 的props，例如锁列、对齐等，可使用`Table.Column` 的所有参数
     * @property {Function} titleProps `Function()=>Object` 选择列 表头的props，仅在 `multiple` 模式下生效
     * @property {Function} titleAddons `Function()=>Node` 选择列 表头添加的元素，在`single` `multiple` 下都生效
     */
    rowSelection: PropTypes$1.object,
    /**
     * 表头是否是sticky
     */
    stickyHeader: PropTypes$1.bool,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: PropTypes$1.number,
    /**
     * affix组件的的属性
     */
    affixProps: PropTypes$1.object,
    /**
     * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
     */
    indent: PropTypes$1.number,
    /**
     * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
     */
    isTree: PropTypes$1.bool,
    /**
     * 是否开启虚拟滚动
     */
    useVirtual: PropTypes$1.bool,
    rowHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.func]),
    /**
     * 滚动到第几行，需要保证行高相同。1.22.15 版本之前仅在虚拟滚动场景下生效，之后在所有情况下生效
     * @version 1.22.15
     */
    scrollToRow: PropTypes$1.number,
    /**
     * 在内容区域滚动的时候触发的函数
     */
    onBodyScroll: PropTypes$1.func,
    /**
     * 开启时，getExpandedColProps() / rowProps() / expandedRowRender() 的第二个参数 index (该行所对应的序列) 将按照01,2,3,4...的顺序返回，否则返回真实index(0,2,4,6... / 1,3,5,7...)
     */
    expandedIndexSimulate: PropTypes$1.bool,
    /**
     * 在 hover 时出现十字参考轴，适用于表头比较复杂，需要做表头分类的场景。
     */
    crossline: PropTypes$1.bool,
    lengths: PropTypes$1.object
  }), _class$i.defaultProps = {
    dataSource: [],
    onRowClick: noop$3,
    onRowMouseEnter: noop$3,
    onRowMouseLeave: noop$3,
    onSort: noop$3,
    onFilter: noop$3,
    onResizeChange: noop$3,
    size: "medium",
    rowProps: noop$3,
    cellProps: noop$3,
    prefix: "next-",
    hasBorder: true,
    hasHeader: true,
    isZebra: false,
    loading: false,
    expandedIndexSimulate: false,
    primaryKey: "id",
    components: {},
    locale: defaultLocale.Table,
    crossline: false
  }, _class$i.childContextTypes = {
    notRenderCellIndex: PropTypes$1.array,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }, _class$i.contextTypes = {
    getTableInstance: PropTypes$1.func,
    getTableInstanceForFixed: PropTypes$1.func,
    getTableInstanceForVirtual: PropTypes$1.func,
    getTableInstanceForExpand: PropTypes$1.func
  }, _temp$b);
  Table$2.displayName = "Table";
  const Base = polyfill(Table$2);
  var _class$h, _temp2$6;
  var LockRow = (_temp2$6 = _class$h = function(_React$Component) {
    _default$4(LockRow2, _React$Component);
    function LockRow2() {
      var _temp3, _this2, _ret;
      _default$7(this, LockRow2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.onMouseEnter = function(record, index2, e2) {
        var onRowMouseEnter = _this2.context.onRowMouseEnter;
        var onMouseEnter = _this2.props.onMouseEnter;
        onRowMouseEnter && onRowMouseEnter(record, index2, e2);
        onMouseEnter(record, index2, e2);
      }, _this2.onMouseLeave = function(record, index2, e2) {
        var onRowMouseLeave = _this2.context.onRowMouseLeave;
        var onMouseLeave = _this2.props.onMouseLeave;
        onRowMouseLeave && onRowMouseLeave(record, index2, e2);
        onMouseLeave(record, index2, e2);
      }, _temp3), _default$5(_this2, _ret);
    }
    LockRow2.prototype.render = function render2() {
      return React.createElement(Row, _default$8({}, this.props, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }));
    };
    return LockRow2;
  }(React.Component), _class$h.propTypes = _default$8({}, Row.propTypes), _class$h.contextTypes = {
    onRowMouseEnter: PropTypes$1.func,
    onRowMouseLeave: PropTypes$1.func
  }, _class$h.defaultProps = _default$8({}, Row.defaultProps), _temp2$6);
  LockRow.displayName = "LockRow";
  var _class$g, _temp2$5;
  var ExpandedRow = (_temp2$5 = _class$g = function(_React$Component) {
    _default$4(ExpandedRow2, _React$Component);
    function ExpandedRow2() {
      var _temp3, _this2, _ret;
      _default$7(this, ExpandedRow2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.getExpandedRow = function(parentKey, ref) {
        var getExpandedRowRef = _this2.context.getExpandedRowRef;
        getExpandedRowRef && getExpandedRowRef(parentKey, ref);
      }, _temp3), _default$5(_this2, _ret);
    }
    ExpandedRow2.prototype.renderExpandedRow = function renderExpandedRow(record, rowIndex) {
      var _context = this.context, expandedRowRender = _context.expandedRowRender, expandedRowIndent = _context.expandedRowIndent, openRowKeys = _context.openRowKeys, lockType = _context.lockType, expandedIndexSimulate = _context.expandedIndexSimulate, expandedRowWidthEquals2Table = _context.expandedRowWidthEquals2Table;
      var expandedIndex = expandedIndexSimulate ? (rowIndex - 1) / 2 : rowIndex;
      var _props = this.props, columns = _props.columns, cellRef = _props.cellRef;
      var colSpan = columns.length;
      var expandedCols = columns[0] && columns[0].__colIndex || 0;
      if (expandedRowRender) {
        var _props2 = this.props, primaryKey = _props2.primaryKey, prefix = _props2.prefix, leftIndent = expandedRowIndent[0], rightIndent = expandedRowIndent[1], totalIndent = leftIndent + rightIndent, renderCols = function renderCols2(number) {
          var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var ret = [];
          var _loop = function _loop2(i2) {
            ret.push(React.createElement(
              "td",
              { key: i2, ref: function ref(cell5) {
                return cellRef(rowIndex, i2 + start, cell5);
              } },
              " "
            ));
          };
          for (var i = 0; i < number; i++) {
            _loop(i);
          }
          return ret;
        };
        var content = void 0;
        if (totalIndent > colSpan && !lockType) {
          log.warning("It's not allowed expandedRowIndent is more than the number of columns.");
        }
        if (leftIndent < columns.length && lockType === "left") {
          log.warning("expandedRowIndent left is less than the number of left lock columns.");
        }
        if (rightIndent < columns.length && lockType === "right") {
          log.warning("expandedRowIndent right is less than the number of right lock columns.");
        }
        if (lockType) {
          return openRowKeys.indexOf(record[primaryKey]) > -1 ? React.createElement(
            "tr",
            { className: prefix + "table-expanded-row", key: "expanded-" + expandedIndex },
            React.createElement(
              "td",
              { colSpan, ref: function ref(cell5) {
                return cellRef(rowIndex, expandedCols, cell5);
              } },
              " "
            )
          ) : null;
        }
        var expandedRowStyle = {
          position: "sticky",
          left: 0
        };
        content = expandedRowRender(record, expandedIndex);
        if (!React.isValidElement(content)) {
          content = React.createElement(
            "div",
            {
              className: prefix + "table-cell-wrapper",
              ref: this.getExpandedRow.bind(this, record[primaryKey]),
              style: expandedRowWidthEquals2Table && expandedRowStyle
            },
            content
          );
        } else {
          content = expandedRowWidthEquals2Table ? React.createElement(
            "div",
            {
              className: prefix + "table-expanded-area",
              ref: this.getExpandedRow.bind(this, record[primaryKey]),
              style: expandedRowStyle
            },
            content
          ) : content;
        }
        var rightStart = columns.length;
        columns.forEach(function(col) {
          col.lock === "right" && rightStart--;
        });
        return openRowKeys.indexOf(record[primaryKey]) > -1 ? React.createElement(
          "tr",
          { className: prefix + "table-expanded-row", key: "expanded-" + (record[primaryKey] || expandedIndex) },
          renderCols(leftIndent),
          React.createElement(
            "td",
            { colSpan: colSpan - totalIndent },
            content
          ),
          renderCols(rightIndent, rightStart)
        ) : null;
      } else {
        return null;
      }
    };
    ExpandedRow2.prototype.render = function render2() {
      var _props3 = this.props, record = _props3.record, rowIndex = _props3.rowIndex, columns = _props3.columns, others = _default$3(_props3, ["record", "rowIndex", "columns"]);
      var expandedIndexSimulate = this.context.expandedIndexSimulate;
      if (record.__expanded) {
        return this.renderExpandedRow(record, rowIndex, columns);
      }
      var newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
      return React.createElement(LockRow, _default$8({}, others, { record, columns, __rowIndex: rowIndex, rowIndex: newRowIndex }));
    };
    return ExpandedRow2;
  }(React.Component), _class$g.propTypes = _default$8({}, LockRow.propTypes), _class$g.defaultProps = _default$8({}, LockRow.defaultProps), _class$g.contextTypes = {
    openRowKeys: PropTypes$1.array,
    expandedRowRender: PropTypes$1.func,
    expandedRowIndent: PropTypes$1.array,
    expandedIndexSimulate: PropTypes$1.bool,
    expandedRowWidthEquals2Table: PropTypes$1.bool,
    lockType: PropTypes$1.oneOf(["left", "right"]),
    getExpandedRowRef: PropTypes$1.func
  }, _temp2$5);
  ExpandedRow.displayName = "ExpandedRow";
  var _class$f, _temp$a;
  var SelectionRow = (_temp$a = _class$f = function(_React$Component) {
    _default$4(SelectionRow2, _React$Component);
    function SelectionRow2() {
      _default$7(this, SelectionRow2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    SelectionRow2.prototype.render = function render2() {
      var _classnames;
      var _props = this.props, className = _props.className, record = _props.record, primaryKey = _props.primaryKey;
      var selectedRowKeys = this.context.selectedRowKeys;
      var cls = classnames((_classnames = {
        selected: selectedRowKeys.indexOf(record[primaryKey]) > -1
      }, _classnames[className] = className, _classnames));
      return React.createElement(ExpandedRow, _default$8({}, this.props, { className: cls }));
    };
    return SelectionRow2;
  }(React.Component), _class$f.propTypes = _default$8({}, ExpandedRow.propTypes), _class$f.defaultProps = _default$8({}, ExpandedRow.defaultProps), _class$f.contextTypes = {
    selectedRowKeys: PropTypes$1.array
  }, _temp$a);
  SelectionRow.displayName = "SelectionRow";
  var _class$e, _temp$9;
  var TreeRow = (_temp$9 = _class$e = function(_React$Component) {
    _default$4(TreeRow2, _React$Component);
    function TreeRow2() {
      _default$7(this, TreeRow2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    TreeRow2.prototype.render = function render2() {
      var _classnames;
      var _props = this.props, className = _props.className, record = _props.record, primaryKey = _props.primaryKey, prefix = _props.prefix, others = _default$3(_props, ["className", "record", "primaryKey", "prefix"]);
      var _context = this.context, treeStatus = _context.treeStatus, openRowKeys = _context.openRowKeys;
      var cls = classnames((_classnames = {
        hidden: !(treeStatus.indexOf(record[primaryKey]) > -1) && record.__level !== 0
      }, _classnames[prefix + "table-row-level-" + record.__level] = true, _classnames.opened = openRowKeys.indexOf(record[primaryKey]) > -1, _classnames[className] = className, _classnames));
      return React.createElement(SelectionRow, _default$8({}, others, { record, className: cls, primaryKey, prefix }));
    };
    return TreeRow2;
  }(React.Component), _class$e.propTypes = _default$8({}, SelectionRow.propTypes), _class$e.defaultProps = _default$8({}, SelectionRow.defaultProps), _class$e.contextTypes = {
    treeStatus: PropTypes$1.array,
    openRowKeys: PropTypes$1.array
  }, _temp$9);
  TreeRow.displayName = "TreeRow";
  var _class$d, _temp2$4;
  var TreeCell = (_temp2$4 = _class$d = function(_React$Component) {
    _default$4(TreeCell2, _React$Component);
    function TreeCell2() {
      var _temp3, _this2, _ret;
      _default$7(this, TreeCell2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.onTreeNodeClick = function(record, e2) {
        e2.stopPropagation();
        _this2.context.onTreeNodeClick(record);
      }, _this2.expandedKeydown = function(record, e2) {
        e2.preventDefault();
        e2.stopPropagation();
        if (e2.keyCode === KEYCODE.ENTER) {
          _this2.onTreeNodeClick(record, e2);
        }
      }, _temp3), _default$5(_this2, _ret);
    }
    TreeCell2.prototype.render = function render2() {
      var _this2 = this;
      var _props = this.props, colIndex = _props.colIndex, record = _props.record, prefix = _props.prefix, primaryKey = _props.primaryKey, locale = _props.locale, rtl = _props.rtl, children = _props.children;
      var _context = this.context, openRowKeys = _context.openTreeRowKeys, indent = _context.indent, isTree = _context.isTree, rowSelection = _context.rowSelection;
      var treeArrowNodeIndex = rowSelection ? 1 : 0;
      var firstCellStyle = void 0, treeArrowNode = void 0;
      if (colIndex === treeArrowNodeIndex) {
        var treeArrowType = void 0;
        if (isTree) {
          var _firstCellStyle;
          var paddingType = rtl ? "paddingRight" : "paddingLeft";
          firstCellStyle = (_firstCellStyle = {}, _firstCellStyle[paddingType] = indent * (record.__level + 1), _firstCellStyle);
          treeArrowNode = React.createElement(Icon, { size: "xs", rtl, className: prefix + "table-tree-placeholder", type: "arrow-right" });
          if (record.children && record.children.length) {
            var hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;
            treeArrowType = hasExpanded ? "arrow-down" : "arrow-right";
            treeArrowNode = React.createElement(Icon, {
              className: prefix + "table-tree-arrow",
              type: treeArrowType,
              size: "xs",
              rtl,
              onClick: function onClick3(e2) {
                return _this2.onTreeNodeClick(record, e2);
              },
              onKeyDown: function onKeyDown(e2) {
                return _this2.expandedKeydown(record, e2);
              },
              role: "button",
              tabIndex: "0",
              "aria-expanded": hasExpanded,
              "aria-label": hasExpanded ? locale.expanded : locale.folded
            });
          }
        }
      }
      return React.createElement(
        Cell,
        _default$8({}, this.props, { innerStyle: firstCellStyle, isIconLeft: !!treeArrowNode }),
        children,
        treeArrowNode
      );
    };
    return TreeCell2;
  }(React.Component), _class$d.propTypes = _default$8({
    indent: PropTypes$1.number,
    locale: PropTypes$1.object
  }, Cell.propTypes), _class$d.defaultProps = _default$8({}, Cell.defaultProps, {
    component: "td",
    indent: 20
  }), _class$d.contextTypes = {
    openTreeRowKeys: PropTypes$1.array,
    indent: PropTypes$1.number,
    onTreeNodeClick: PropTypes$1.func,
    isTree: PropTypes$1.bool,
    rowSelection: PropTypes$1.object
  }, _temp2$4);
  TreeCell.displayName = "TreeCell";
  var noop$2 = function noop11() {
  };
  function tree(BaseComponent) {
    var _class2, _temp3;
    var TreeTable = (_temp3 = _class2 = function(_React$Component) {
      _default$4(TreeTable2, _React$Component);
      function TreeTable2(props, context) {
        _default$7(this, TreeTable2);
        var _this2 = _default$5(this, _React$Component.call(this, props, context));
        _this2.onTreeNodeClick = function(record) {
          var primaryKey = _this2.props.primaryKey, id2 = record[primaryKey], dataSource = _this2.ds, openRowKeys = [].concat(_this2.state.openRowKeys), index2 = openRowKeys.indexOf(id2), getChildrenKeyById = function getChildrenKeyById2(id3) {
            var ret = [id3];
            var loop = function loop2(data) {
              data.forEach(function(item) {
                ret.push(item[primaryKey]);
                if (item.children) {
                  loop2(item.children);
                }
              });
            };
            dataSource.forEach(function(item) {
              if (item[primaryKey] === id3) {
                if (item.children) {
                  loop(item.children);
                }
              }
            });
            return ret;
          };
          if (index2 > -1) {
            var ids = getChildrenKeyById(id2);
            ids.forEach(function(id3) {
              var i = openRowKeys.indexOf(id3);
              if (i > -1) {
                openRowKeys.splice(i, 1);
              }
            });
          } else {
            openRowKeys.push(id2);
          }
          if (!("openRowKeys" in _this2.props)) {
            _this2.setState({
              openRowKeys
            });
          }
          _this2.props.onRowOpen(openRowKeys, id2, index2 === -1, record);
        };
        _this2.state = {
          openRowKeys: props.openRowKeys || props.defaultOpenRowKeys || []
        };
        return _this2;
      }
      TreeTable2.prototype.getChildContext = function getChildContext() {
        return {
          openTreeRowKeys: this.state.openRowKeys,
          indent: this.props.indent,
          treeStatus: this.getTreeNodeStatus(this.ds),
          onTreeNodeClick: this.onTreeNodeClick,
          isTree: this.props.isTree
        };
      };
      TreeTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        if ("openRowKeys" in nextProps) {
          return {
            openRowKeys: nextProps.openRowKeys || []
          };
        }
        return null;
      };
      TreeTable2.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
        var openRowKeys = this.state.openRowKeys;
        var primaryKey = this.props.primaryKey;
        var ret = [], loop = function loop2(dataSource2, level) {
          var parentId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          dataSource2.forEach(function(item) {
            item.__level = level;
            if (level === 0 || openRowKeys.indexOf(parentId) > -1) {
              item.__hidden = false;
            } else {
              item.__hidden = true;
            }
            ret.push(item);
            if (item.children) {
              loop2(item.children, level + 1, item[primaryKey]);
            }
          });
        };
        loop(dataSource, 0);
        this.ds = ret;
        return ret;
      };
      TreeTable2.prototype.getTreeNodeStatus = function getTreeNodeStatus() {
        var dataSource = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var openRowKeys = this.state.openRowKeys, primaryKey = this.props.primaryKey, ret = [];
        openRowKeys.forEach(function(openKey) {
          dataSource.forEach(function(item) {
            if (item[primaryKey] === openKey) {
              if (item.children) {
                item.children.forEach(function(child) {
                  ret.push(child[primaryKey]);
                });
              }
            }
          });
        });
        return ret;
      };
      TreeTable2.prototype.render = function render2() {
        var _props = this.props, components = _props.components, isTree = _props.isTree, dataSource = _props.dataSource;
        _props.indent;
        var others = _default$3(_props, ["components", "isTree", "dataSource", "indent"]);
        if (isTree) {
          components = _default$8({}, components);
          if (!components.Row) {
            components.Row = TreeRow;
          }
          if (!components.Cell) {
            components.Cell = TreeCell;
          }
          dataSource = this.normalizeDataSource(dataSource);
        }
        return React.createElement(BaseComponent, _default$8({}, others, { dataSource, components }));
      };
      return TreeTable2;
    }(React.Component), _class2.TreeRow = TreeRow, _class2.TreeCell = TreeCell, _class2.propTypes = _default$8({
      /**
       * 默认情况下展开的树形表格，传入了此属性代表tree的展开为受控操作
       */
      openRowKeys: PropTypes$1.array,
      /**
       * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
       * @version 1.23.22
       */
      defaultOpenRowKeys: PropTypes$1.array,
      /**
       * 点击tree展开或者关闭的时候触发的事件
       * @param {Array} openRowKeys tree模式下展开的key
       * @param {String} currentRowKey 当前点击行的key
       * @param {Boolean} opened 当前点击是展开还是收起
       * @param {Object} currentRecord 当前点击行的记录
       */
      onRowOpen: PropTypes$1.func,
      /**
       * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
       */
      primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
      /**
       * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
       */
      indent: PropTypes$1.number,
      /**
       * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
       */
      isTree: PropTypes$1.bool,
      locale: PropTypes$1.object
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps, {
      primaryKey: "id",
      onRowOpen: noop$2,
      components: {},
      indent: 12
    }), _class2.childContextTypes = {
      openTreeRowKeys: PropTypes$1.array,
      indent: PropTypes$1.number,
      treeStatus: PropTypes$1.array,
      onTreeNodeClick: PropTypes$1.func,
      isTree: PropTypes$1.bool
    }, _temp3);
    TreeTable.displayName = "TreeTable";
    statics(TreeTable, BaseComponent);
    return polyfill(TreeTable);
  }
  var _class$c, _temp$8;
  var FixedHeader = (_temp$8 = _class$c = function(_React$Component) {
    _default$4(FixedHeader2, _React$Component);
    function FixedHeader2() {
      _default$7(this, FixedHeader2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    FixedHeader2.prototype.componentDidMount = function componentDidMount() {
      this.context.getNode("header", ReactDOM.findDOMNode(this));
    };
    FixedHeader2.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, colGroup = _props.colGroup, tableWidth = _props.tableWidth, others = _default$3(_props, ["prefix", "className", "colGroup", "tableWidth"]);
      var _context = this.context, onFixedScrollSync = _context.onFixedScrollSync, lockType = _context.lockType;
      return React.createElement(
        "div",
        { className, onScroll: onFixedScrollSync },
        React.createElement(
          "div",
          { className: prefix + "table-header-inner", style: { overflow: "unset" } },
          React.createElement(
            "table",
            { style: { width: tableWidth } },
            colGroup,
            React.createElement(Header, _default$8({}, others, { prefix }))
          )
        ),
        !lockType && React.createElement("div", { className: prefix + "table-header-fixer", style: { position: "absolute", right: 0 } })
      );
    };
    return FixedHeader2;
  }(React.Component), _class$c.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    className: PropTypes$1.string,
    colGroup: PropTypes$1.any,
    tableWidth: PropTypes$1.number
  }, _class$c.contextTypes = {
    getNode: PropTypes$1.func,
    onFixedScrollSync: PropTypes$1.func,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }, _temp$8);
  FixedHeader.displayName = "FixedHeader";
  var _class$b, _temp2$3;
  var FixedBody = (_temp2$3 = _class$b = function(_React$Component) {
    _default$4(FixedBody2, _React$Component);
    function FixedBody2() {
      var _temp3, _this2, _ret;
      _default$7(this, FixedBody2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.onBodyScroll = function(event) {
        var onFixedScrollSync = _this2.context.onFixedScrollSync;
        onFixedScrollSync && onFixedScrollSync(event);
        if ("onLockScroll" in _this2.props && typeof _this2.props.onLockScroll === "function") {
          _this2.props.onLockScroll(event);
        }
      }, _temp3), _default$5(_this2, _ret);
    }
    FixedBody2.prototype.componentDidMount = function componentDidMount() {
      var getNode = this.context.getNode;
      getNode && getNode("body", ReactDOM.findDOMNode(this));
    };
    FixedBody2.prototype.render = function render2() {
      var _props = this.props, className = _props.className, colGroup = _props.colGroup;
      _props.onLockScroll;
      var tableWidth = _props.tableWidth, others = _default$3(_props, ["className", "colGroup", "onLockScroll", "tableWidth"]);
      var _context = this.context, maxBodyHeight = _context.maxBodyHeight, fixedHeader = _context.fixedHeader;
      var style = {};
      if (fixedHeader) {
        style.maxHeight = maxBodyHeight;
        style.position = "relative";
      }
      return React.createElement(
        "div",
        { style, className, onScroll: this.onBodyScroll },
        React.createElement(
          "table",
          { style: { width: tableWidth } },
          colGroup,
          React.createElement(Body, _default$8({}, others, { colGroup }))
        )
      );
    };
    return FixedBody2;
  }(React.Component), _class$b.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    className: PropTypes$1.string,
    colGroup: PropTypes$1.any,
    onLockScroll: PropTypes$1.func,
    tableWidth: PropTypes$1.number
  }, _class$b.contextTypes = {
    fixedHeader: PropTypes$1.bool,
    maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    onFixedScrollSync: PropTypes$1.func,
    getNode: PropTypes$1.func
  }, _temp2$3);
  FixedBody.displayName = "FixedBody";
  var _class$a, _temp$7;
  var FixedWrapper = (_temp$7 = _class$a = function(_React$Component) {
    _default$4(FixedWrapper2, _React$Component);
    function FixedWrapper2() {
      _default$7(this, FixedWrapper2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    FixedWrapper2.prototype.render = function render2() {
      var _props = this.props, children = _props.children, wrapperContent = _props.wrapperContent, prefix = _props.prefix;
      return React.createElement(
        "div",
        { className: prefix + "table-inner" },
        children,
        wrapperContent
      );
    };
    return FixedWrapper2;
  }(React.Component), _class$a.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    colGroup: PropTypes$1.any,
    wrapperContent: PropTypes$1.any
  }, _temp$7);
  FixedWrapper.displayName = "FixedWrapper";
  function fixed(BaseComponent, stickyLock2) {
    var _class2, _temp22;
    var FixedTable = (_temp22 = _class2 = function(_React$Component) {
      _default$4(FixedTable2, _React$Component);
      function FixedTable2() {
        var _temp3, _this2, _ret;
        _default$7(this, FixedTable2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {}, _this2.getNode = function(type2, node, lockType) {
          lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
          _this2["" + type2 + lockType + "Node"] = node;
        }, _this2.getTableInstance = function(type2, instance2) {
          type2 = "";
          _this2["table" + type2 + "Inc"] = instance2;
        }, _this2.onFixedScrollSync = function() {
          var current = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { currentTarget: {} };
          var currentTarget = current.currentTarget || {}, headerNode = _this2.headerNode, bodyNode = _this2.bodyNode;
          var scrollLeft = currentTarget.scrollLeft, scrollWidth = currentTarget.scrollWidth, clientWidth = currentTarget.clientWidth;
          var scrollToRightEnd = !(scrollLeft < scrollWidth - clientWidth);
          var _this$props = _this2.props, prefix = _this$props.prefix, loading = _this$props.loading;
          if (!loading && scrollToRightEnd !== _this2.scrollToRightEnd) {
            _this2.scrollToRightEnd = scrollToRightEnd;
            var table = _this2.getTableNode();
            var leftFunc = scrollToRightEnd ? "removeClass" : "addClass";
            dom[leftFunc](table, prefix + "table-scrolling-to-right");
          }
          if (!_this2.scrollTarget || _this2.scrollTarget === currentTarget) {
            _this2.scrollTarget = currentTarget;
            window.clearTimeout(_this2.timeoutId);
            _this2.timeoutId = window.setTimeout(function() {
              _this2.scrollTarget = null;
              _this2.timeoutId = void 0;
            }, 100);
            if (currentTarget === bodyNode) {
              if (headerNode && scrollLeft !== headerNode.scrollLeft) {
                headerNode.scrollLeft = scrollLeft;
              }
            } else if (currentTarget === headerNode) {
              if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
                bodyNode.scrollLeft = scrollLeft;
              }
            }
          }
        }, _temp3), _default$5(_this2, _ret);
      }
      FixedTable2.prototype.getChildContext = function getChildContext() {
        return {
          fixedHeader: this.props.fixedHeader,
          maxBodyHeight: this.props.maxBodyHeight,
          getTableInstanceForFixed: this.getTableInstance,
          onFixedScrollSync: this.onFixedScrollSync,
          getNode: this.getNode
        };
      };
      FixedTable2.prototype.componentDidMount = function componentDidMount() {
        this.adjustFixedHeaderSize();
        this.scrollToRightEnd = void 0;
        this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
      };
      FixedTable2.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustFixedHeaderSize();
        this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
      };
      FixedTable2.prototype.getTableNode = function getTableNode() {
        var table = this.tableInc;
        try {
          return ReactDOM.findDOMNode(table.tableEl);
        } catch (error) {
          return null;
        }
      };
      FixedTable2.prototype.adjustFixedHeaderSize = function adjustFixedHeaderSize() {
        var _props = this.props, hasHeader = _props.hasHeader, rtl = _props.rtl, prefix = _props.prefix;
        var paddingName = rtl ? "paddingLeft" : "paddingRight";
        var marginName = rtl ? "marginLeft" : "marginRight";
        var body = this.bodyNode;
        var scrollBarSize = +dom.scrollbar().width || 0;
        if (hasHeader && !this.props.lockType && body) {
          var hasVerScroll = body.scrollHeight > body.clientHeight, hasHozScroll = body.scrollWidth > body.clientWidth;
          var style = {};
          if (!hasVerScroll) {
            style[paddingName] = 0;
            style[marginName] = 0;
          }
          if (+scrollBarSize) {
            style.marginBottom = -scrollBarSize;
            if (hasHozScroll) {
              style.paddingBottom = scrollBarSize;
            } else {
              style.paddingBottom = scrollBarSize;
            }
            if (hasVerScroll) {
              style[marginName] = scrollBarSize;
            }
          }
          dom.setStyle(this.headerNode, style);
        }
        if (hasHeader && !this.props.lockType && this.headerNode) {
          var fixer = this.headerNode.querySelector("." + prefix + "table-header-fixer");
          var height = dom.getStyle(this.headerNode, "height");
          var paddingBottom = dom.getStyle(this.headerNode, "paddingBottom");
          dom.setStyle(fixer, {
            width: scrollBarSize,
            height: height - paddingBottom
          });
        }
      };
      FixedTable2.prototype.render = function render2() {
        var _props2 = this.props, components = _props2.components, className = _props2.className, prefix = _props2.prefix, fixedHeader = _props2.fixedHeader, lockType = _props2.lockType, dataSource = _props2.dataSource;
        _props2.maxBodyHeight;
        var others = _default$3(_props2, ["components", "className", "prefix", "fixedHeader", "lockType", "dataSource", "maxBodyHeight"]);
        if (fixedHeader) {
          var _classnames;
          components = _default$8({}, components);
          if (!components.Header) {
            components.Header = FixedHeader;
          }
          if (!components.Body) {
            components.Body = FixedBody;
          }
          if (!components.Wrapper) {
            components.Wrapper = FixedWrapper;
          }
          className = classnames((_classnames = {}, _classnames[prefix + "table-fixed"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
        }
        return React.createElement(BaseComponent, _default$8({}, others, {
          dataSource,
          lockType,
          components,
          className,
          prefix
        }));
      };
      return FixedTable2;
    }(React.Component), _class2.FixedHeader = FixedHeader, _class2.FixedBody = FixedBody, _class2.FixedWrapper = FixedWrapper, _class2.propTypes = _default$8({
      /**
       * 是否具有表头
       */
      hasHeader: PropTypes$1.bool,
      /**
       * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
       */
      fixedHeader: PropTypes$1.bool,
      /**
       * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
       */
      maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps, {
      hasHeader: true,
      fixedHeader: false,
      maxBodyHeight: 200,
      components: {},
      refs: {},
      prefix: "next-"
    }), _class2.childContextTypes = {
      fixedHeader: PropTypes$1.bool,
      getNode: PropTypes$1.func,
      onFixedScrollSync: PropTypes$1.func,
      getTableInstanceForFixed: PropTypes$1.func,
      maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])
    }, _temp22);
    FixedTable.displayName = "FixedTable";
    statics(FixedTable, BaseComponent);
    return FixedTable;
  }
  var makeChain = func.makeChain;
  var unique = function unique2(arr) {
    var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "this";
    var temp = {}, ret = [];
    arr.forEach(function(item) {
      var value = void 0;
      if (key === "this") {
        value = item;
      } else {
        value = item[key];
      }
      if (!temp[value]) {
        ret.push(item);
        temp[value] = true;
      }
    });
    return ret;
  };
  function selection(BaseComponent) {
    var _class2, _temp3;
    var SelectionTable = (_temp3 = _class2 = function(_React$Component) {
      _default$4(SelectionTable2, _React$Component);
      function SelectionTable2(props, context) {
        _default$7(this, SelectionTable2);
        var _this2 = _default$5(this, _React$Component.call(this, props, context));
        _this2.addSelection = function(columns) {
          var _this$props = _this2.props, prefix = _this$props.prefix, rowSelection = _this$props.rowSelection, size2 = _this$props.size;
          var attrs = rowSelection.columnProps && rowSelection.columnProps() || {};
          if (!columns.find(function(record) {
            return record.key === "selection";
          })) {
            columns.unshift(_default$8({
              key: "selection",
              title: _this2.renderSelectionHeader.bind(_this2),
              cell: _this2.renderSelectionBody.bind(_this2),
              width: size2 === "small" ? 34 : 50,
              className: prefix + "table-selection " + prefix + "table-prerow",
              __normalized: true
            }, attrs));
          }
        };
        _this2.renderSelectionHeader = function() {
          var onChange6 = _this2.selectAllRow, attrs = {}, _this$props2 = _this2.props, rowSelection = _this$props2.rowSelection, primaryKey = _this$props2.primaryKey, dataSource = _this$props2.dataSource, entireDataSource = _this$props2.entireDataSource, locale = _this$props2.locale, selectedRowKeys = _this2.state.selectedRowKeys, mode = rowSelection.mode ? rowSelection.mode : "multiple";
          var checked = !!selectedRowKeys.length;
          var indeterminate = false;
          var source = entireDataSource || dataSource;
          _this2.flatDataSource(source).filter(function(record, index2) {
            if (!rowSelection.getProps) {
              return true;
            } else {
              return !(rowSelection.getProps(record, index2) || {}).disabled;
            }
          }).map(function(record) {
            return record[primaryKey];
          }).forEach(function(id2) {
            if (selectedRowKeys.indexOf(id2) === -1) {
              checked = false;
            } else {
              indeterminate = true;
            }
          });
          attrs.onClick = makeChain(function(e2) {
            e2.stopPropagation();
          }, attrs.onClick);
          var userAttrs = rowSelection.titleProps && rowSelection.titleProps() || {};
          if (checked) {
            indeterminate = false;
          }
          return [mode === "multiple" ? React.createElement(Checkbox$1, _default$8({
            key: "_total",
            indeterminate,
            "aria-label": locale.selectAll,
            checked,
            onChange: onChange6
          }, attrs, userAttrs)) : null, rowSelection.titleAddons && rowSelection.titleAddons()];
        };
        _this2.renderSelectionBody = function(value, index2, record) {
          var _this$props3 = _this2.props, rowSelection = _this$props3.rowSelection, primaryKey = _this$props3.primaryKey;
          var selectedRowKeys = _this2.state.selectedRowKeys;
          var mode = rowSelection.mode ? rowSelection.mode : "multiple";
          var checked = selectedRowKeys.indexOf(record[primaryKey]) > -1;
          var onChange6 = _this2.selectOneRow.bind(_this2, index2, record);
          var attrs = rowSelection.getProps ? rowSelection.getProps(record, index2) || {} : {};
          attrs.onClick = makeChain(function(e2) {
            e2.stopPropagation();
          }, attrs.onClick);
          return mode === "multiple" ? React.createElement(Checkbox$1, _default$8({ checked, onChange: onChange6 }, attrs)) : React.createElement(Radio$1, _default$8({ checked, onChange: onChange6 }, attrs));
        };
        _this2.selectAllRow = function(checked, e2) {
          var ret = [].concat(_this2.state.selectedRowKeys), _this$props4 = _this2.props, rowSelection = _this$props4.rowSelection, primaryKey = _this$props4.primaryKey, dataSource = _this$props4.dataSource, entireDataSource = _this$props4.entireDataSource, selectedRowKeys = _this2.state.selectedRowKeys, getProps = rowSelection.getProps;
          var attrs = {}, records = [];
          var source = entireDataSource ? entireDataSource : dataSource;
          _this2.flatDataSource(source).forEach(function(record, index2) {
            var id2 = record[primaryKey];
            if (getProps) {
              attrs = getProps(record, index2) || {};
            }
            if (checked && (!attrs.disabled || selectedRowKeys.indexOf(id2) > -1)) {
              ret.push(id2);
              records.push(record);
            } else if (attrs.disabled && selectedRowKeys.indexOf(id2) > -1) {
              ret.push(id2);
              records.push(record);
            } else {
              var i = ret.indexOf(id2);
              i > -1 && ret.splice(i, 1);
            }
          });
          records = unique(records, primaryKey);
          if (typeof rowSelection.onSelectAll === "function") {
            rowSelection.onSelectAll(checked, records);
          }
          _this2.triggerSelection(rowSelection, unique(ret), records);
          e2.stopPropagation();
        };
        _this2.state = {
          selectedRowKeys: props.rowSelection && "selectedRowKeys" in props.rowSelection ? props.rowSelection.selectedRowKeys || [] : []
        };
        return _this2;
      }
      SelectionTable2.prototype.getChildContext = function getChildContext() {
        return {
          rowSelection: this.props.rowSelection,
          selectedRowKeys: this.state.selectedRowKeys
        };
      };
      SelectionTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        if (nextProps.rowSelection && "selectedRowKeys" in nextProps.rowSelection) {
          var selectedRowKeys = nextProps.rowSelection.selectedRowKeys || [];
          return {
            selectedRowKeys
          };
        }
        return null;
      };
      SelectionTable2.prototype.normalizeChildren = function normalizeChildren(children) {
        var _props = this.props, prefix = _props.prefix, rowSelection = _props.rowSelection, size2 = _props.size;
        if (rowSelection) {
          children = React.Children.map(children, function(child, index2) {
            return React.cloneElement(child, {
              key: index2
            });
          });
          var attrs = rowSelection.columnProps && rowSelection.columnProps() || {};
          children.unshift(React.createElement(Column, _default$8({
            key: "selection",
            title: this.renderSelectionHeader.bind(this),
            cell: this.renderSelectionBody.bind(this),
            width: size2 === "small" ? 34 : 50,
            className: prefix + "table-selection " + prefix + "table-prerow",
            __normalized: true
          }, attrs)));
          return children;
        }
        return children;
      };
      SelectionTable2.prototype.selectOneRow = function selectOneRow(index2, record, checked, e2) {
        var selectedRowKeys = [].concat(this.state.selectedRowKeys), i = void 0;
        var _props2 = this.props, primaryKey = _props2.primaryKey, rowSelection = _props2.rowSelection, dataSource = _props2.dataSource, entireDataSource = _props2.entireDataSource, mode = rowSelection.mode ? rowSelection.mode : "multiple", id2 = record[primaryKey];
        if (!id2) {
          log.warning("Can't get value from record using given " + primaryKey + " as primaryKey.");
        }
        if (mode === "multiple") {
          if (checked) {
            selectedRowKeys.push(id2);
          } else {
            i = selectedRowKeys.indexOf(id2);
            selectedRowKeys.splice(i, 1);
          }
        } else if (checked) {
          selectedRowKeys = [id2];
        }
        var totalDS = dataSource;
        if (Array.isArray(entireDataSource) && entireDataSource.length > dataSource.length) {
          totalDS = entireDataSource;
        }
        var records = unique(totalDS.filter(function(item) {
          return selectedRowKeys.indexOf(item[primaryKey]) > -1;
        }), primaryKey);
        if (typeof rowSelection.onSelect === "function") {
          rowSelection.onSelect(checked, record, records);
        }
        this.triggerSelection(rowSelection, selectedRowKeys, records);
        e2.stopPropagation();
      };
      SelectionTable2.prototype.triggerSelection = function triggerSelection(rowSelection, selectedRowKeys, records) {
        if (!("selectedRowKeys" in rowSelection)) {
          this.setState({
            selectedRowKeys
          });
        }
        if (typeof rowSelection.onChange === "function") {
          rowSelection.onChange(selectedRowKeys, records);
        }
      };
      SelectionTable2.prototype.flatDataSource = function flatDataSource(dataSource) {
        var ret = dataSource;
        var listHeader = this.context.listHeader;
        if (listHeader) {
          ret = [];
          var hasChildrenSelection = listHeader.hasChildrenSelection, hasSelection = listHeader.hasSelection;
          dataSource.forEach(function(item) {
            var children = item.children;
            if (hasSelection) {
              ret.push(item);
            }
            if (children && hasChildrenSelection) {
              ret = ret.concat(children);
            }
          });
        }
        return ret;
      };
      SelectionTable2.prototype.render = function render2() {
        var _props3 = this.props, rowSelection = _props3.rowSelection, components = _props3.components, children = _props3.children, columns = _props3.columns, others = _default$3(_props3, ["rowSelection", "components", "children", "columns"]);
        var useColumns = columns && !children;
        if (rowSelection) {
          if (useColumns) {
            this.addSelection(columns);
          } else {
            children = this.normalizeChildren(children || []);
          }
          components = _default$8({}, components);
          components.Row = components.Row || SelectionRow;
        }
        return React.createElement(BaseComponent, _default$8({}, others, { columns, components, children }));
      };
      return SelectionTable2;
    }(React.Component), _class2.SelectionRow = SelectionRow, _class2.propTypes = _default$8({
      /**
       * 是否启用选择模式
       * @property {Function} getProps `Function(record, index)=>Object` 获取selection的默认属性
       * @property {Function} onChange `Function(selectedRowKeys:Array, records:Array)` 选择改变的时候触发的事件，**注意:** 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。
       * @property {Function} onSelect `Function(selected:Boolean, record:Object, records:Array)` 用户手动选择/取消选择某行的回调
       * @property {Function} onSelectAll `Function(selected:Boolean, records:Array)` 用户手动选择/取消选择所有行的回调
       * @property {Array} selectedRowKeys 设置了此属性,将rowSelection变为受控状态,接收值为该行数据的primaryKey的值
       * @property {String} mode 选择selection的模式, 可选值为`single`, `multiple`，默认为`multiple`
       * @property {Function} columnProps `Function()=>Object` 选择列 的props，例如锁列、对齐等，可使用`Table.Column` 的所有参数
       * @property {Function} titleProps `Function()=>Object` 选择列 表头的props，仅在 `multiple` 模式下生效
       */
      rowSelection: PropTypes$1.object,
      primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
      dataSource: PropTypes$1.array,
      entireDataSource: PropTypes$1.array
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps, {
      locale: defaultLocale.Table,
      primaryKey: "id",
      prefix: "next-"
    }), _class2.contextTypes = {
      listHeader: PropTypes$1.any
    }, _class2.childContextTypes = {
      rowSelection: PropTypes$1.object,
      selectedRowKeys: PropTypes$1.array
    }, _temp3);
    SelectionTable.displayName = "SelectionTable";
    statics(SelectionTable, BaseComponent);
    return polyfill(SelectionTable);
  }
  var noop$1 = function noop12() {
  };
  function expanded(BaseComponent, stickyLock2) {
    var _class2, _temp22;
    var ExpandedTable = (_temp22 = _class2 = function(_React$Component) {
      _default$4(ExpandedTable2, _React$Component);
      function ExpandedTable2() {
        var _temp3, _this2, _ret;
        _default$7(this, ExpandedTable2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {
          openRowKeys: _this2.props.openRowKeys || _this2.props.defaultOpenRowKeys || []
        }, _this2.saveExpandedRowRef = function(key, rowRef) {
          if (!_this2.expandedRowRefs) {
            _this2.expandedRowRefs = {};
          }
          _this2.expandedRowRefs[key] = rowRef;
        }, _this2.setExpandedWidth = function() {
          var prefix = _this2.props.prefix;
          var tableEl = _this2.getTableNode();
          var totalWidth = +(tableEl && tableEl.clientWidth) - 1 || "100%";
          var bodyNode = tableEl && tableEl.querySelector("." + prefix + "table-body");
          Object.keys(_this2.expandedRowRefs || {}).forEach(function(key) {
            dom.setStyle(_this2.expandedRowRefs[key], { width: bodyNode && bodyNode.clientWidth || totalWidth });
          });
        }, _this2.getTableInstance = function(instance2) {
          _this2.tableInc = instance2;
        }, _this2.expandedKeydown = function(value, record, index2, e2) {
          e2.preventDefault();
          e2.stopPropagation();
          if (e2.keyCode === KEYCODE.ENTER) {
            _this2.onExpandedClick(value, record, index2, e2);
          }
        }, _this2.renderExpandedCell = function(value, index2, record) {
          var _classnames;
          var _this$props = _this2.props, getExpandedColProps = _this$props.getExpandedColProps, prefix = _this$props.prefix, locale = _this$props.locale, rowExpandable = _this$props.rowExpandable;
          if (typeof rowExpandable === "function" && !rowExpandable(record, index2)) {
            return "";
          }
          var openRowKeys = _this2.state.openRowKeys, primaryKey = _this2.props.primaryKey, hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1, switchNode = hasExpanded ? React.createElement(Icon, { type: "minus", size: "xs", className: prefix + "table-expand-unfold" }) : React.createElement(Icon, { type: "add", size: "xs", className: prefix + "table-expand-fold" }), attrs = getExpandedColProps(record, index2) || {};
          var cls = classnames((_classnames = {}, _classnames[prefix + "table-expanded-ctrl"] = true, _classnames.disabled = attrs.disabled, _classnames[attrs.className] = attrs.className, _classnames));
          if (!attrs.disabled) {
            attrs.onClick = _this2.onExpandedClick.bind(_this2, value, record, index2);
          }
          return React.createElement(
            "span",
            _default$8({}, attrs, {
              role: "button",
              tabIndex: "0",
              onKeyDown: _this2.expandedKeydown.bind(_this2, value, record, index2),
              "aria-label": hasExpanded ? locale.expanded : locale.folded,
              "aria-expanded": hasExpanded,
              className: cls
            }),
            switchNode
          );
        }, _this2.addExpandCtrl = function(columns) {
          var _this$props2 = _this2.props, prefix = _this$props2.prefix, size2 = _this$props2.size;
          if (!columns.find(function(record) {
            return record.key === "expanded";
          })) {
            columns.unshift({
              key: "expanded",
              title: "",
              cell: _this2.renderExpandedCell.bind(_this2),
              width: size2 === "small" ? 34 : 50,
              className: prefix + "table-expanded " + prefix + "table-prerow",
              __normalized: true
            });
          }
        }, _temp3), _default$5(_this2, _ret);
      }
      ExpandedTable2.prototype.getChildContext = function getChildContext() {
        return {
          openRowKeys: this.state.openRowKeys,
          expandedRowRender: this.props.expandedRowRender,
          expandedIndexSimulate: this.props.expandedIndexSimulate,
          expandedRowWidthEquals2Table: stickyLock2,
          getExpandedRowRef: this.saveExpandedRowRef,
          getTableInstanceForExpand: this.getTableInstance,
          expandedRowIndent: stickyLock2 ? [0, 0] : this.props.expandedRowIndent
        };
      };
      ExpandedTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        if ("openRowKeys" in nextProps) {
          return {
            openRowKeys: nextProps.openRowKeys || []
          };
        }
        return null;
      };
      ExpandedTable2.prototype.componentDidMount = function componentDidMount() {
        this.setExpandedWidth();
        events.on(window, "resize", this.setExpandedWidth);
      };
      ExpandedTable2.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setExpandedWidth();
      };
      ExpandedTable2.prototype.componentWillUnmount = function componentWillUnmount() {
        events.off(window, "resize", this.setExpandedWidth);
      };
      ExpandedTable2.prototype.getTableNode = function getTableNode() {
        var table = this.tableInc;
        try {
          return ReactDOM.findDOMNode(table.tableEl);
        } catch (error) {
          return null;
        }
      };
      ExpandedTable2.prototype.onExpandedClick = function onExpandedClick(value, record, i, e2) {
        var openRowKeys = [].concat(this.state.openRowKeys), primaryKey = this.props.primaryKey, id2 = record[primaryKey], index2 = openRowKeys.indexOf(id2);
        if (index2 > -1) {
          openRowKeys.splice(index2, 1);
        } else {
          openRowKeys.push(id2);
        }
        if (!("openRowKeys" in this.props)) {
          this.setState({
            openRowKeys
          });
        }
        this.props.onRowOpen(openRowKeys, id2, index2 === -1, record);
        e2.stopPropagation();
      };
      ExpandedTable2.prototype.normalizeChildren = function normalizeChildren(children) {
        var _props = this.props, prefix = _props.prefix, size2 = _props.size;
        var toArrayChildren = React.Children.map(children, function(child, index2) {
          return React.cloneElement(child, {
            key: index2
          });
        });
        toArrayChildren.unshift(React.createElement(Column, {
          title: "",
          key: "expanded",
          cell: this.renderExpandedCell.bind(this),
          width: size2 === "small" ? 34 : 50,
          className: prefix + "table-expanded " + prefix + "table-prerow",
          __normalized: true
        }));
        return toArrayChildren;
      };
      ExpandedTable2.prototype.normalizeDataSource = function normalizeDataSource(ds) {
        var ret = [];
        ds.forEach(function(item) {
          var itemCopy = _default$8({}, item);
          itemCopy.__expanded = true;
          ret.push(item, itemCopy);
        });
        return ret;
      };
      ExpandedTable2.prototype.render = function render2() {
        var _props2 = this.props, components = _props2.components;
        _props2.openRowKeys;
        var expandedRowRender = _props2.expandedRowRender;
        _props2.rowExpandable;
        var hasExpandedRowCtrl = _props2.hasExpandedRowCtrl, children = _props2.children, columns = _props2.columns, dataSource = _props2.dataSource, entireDataSource = _props2.entireDataSource;
        _props2.getExpandedColProps;
        _props2.expandedRowIndent;
        _props2.onRowOpen;
        _props2.onExpandedRowClick;
        var others = _default$3(_props2, ["components", "openRowKeys", "expandedRowRender", "rowExpandable", "hasExpandedRowCtrl", "children", "columns", "dataSource", "entireDataSource", "getExpandedColProps", "expandedRowIndent", "onRowOpen", "onExpandedRowClick"]);
        if (expandedRowRender && !components.Row) {
          components = _default$8({}, components);
          components.Row = ExpandedRow;
          dataSource = this.normalizeDataSource(dataSource);
          entireDataSource = this.normalizeDataSource(entireDataSource);
        }
        if (expandedRowRender && hasExpandedRowCtrl) {
          var useColumns = columns && !children;
          if (useColumns) {
            this.addExpandCtrl(columns);
          } else {
            children = this.normalizeChildren(children || []);
          }
        }
        return React.createElement(
          BaseComponent,
          _default$8({}, others, {
            columns,
            dataSource,
            entireDataSource,
            components
          }),
          children
        );
      };
      return ExpandedTable2;
    }(React.Component), _class2.ExpandedRow = ExpandedRow, _class2.propTypes = _default$8({
      /**
       * 额外渲染行的渲染函数
       * @param {Object} record 该行所对应的数据
       * @param {Number} index 该行所对应的序列
       * @returns {Element}
       */
      expandedRowRender: PropTypes$1.func,
      /**
       * 设置行是否可展开，设置 false 为不可展开
       * @param {Object} record 该行所对应的数据
       * @param {Number} index 该行所对应的序列
       * @returns {Boolean} 是否可展开
       * @version 1.21
       */
      rowExpandable: PropTypes$1.func,
      /**
       * 额外渲染行的缩进
       */
      expandedRowIndent: PropTypes$1.array,
      /**
       * 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态
       */
      openRowKeys: PropTypes$1.array,
      /**
       * 默认情况下展开的 Expand行 或者 Tree行，非受控模式
       * @version 1.23.22
       */
      defaultOpenRowKeys: PropTypes$1.array,
      /**
       * 是否显示点击展开额外渲染行的+号按钮
       */
      hasExpandedRowCtrl: PropTypes$1.bool,
      /**
       * 设置额外渲染行的属性
       */
      getExpandedColProps: PropTypes$1.func,
      /**
       * 在额外渲染行或者Tree展开或者收起的时候触发的事件
       * @param {Array} openRowKeys 展开的渲染行的key
       * @param {String} currentRowKey 当前点击的渲染行的key
       * @param {Boolean} expanded 当前点击是展开还是收起
       * @param {Object} currentRecord 当前点击额外渲染行的记录
       */
      onRowOpen: PropTypes$1.func,
      onExpandedRowClick: PropTypes$1.func,
      locale: PropTypes$1.object
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps, {
      getExpandedColProps: noop$1,
      onRowOpen: noop$1,
      hasExpandedRowCtrl: true,
      components: {},
      expandedRowIndent: stickyLock2 ? [0, 0] : [1, 0],
      prefix: "next-"
    }), _class2.childContextTypes = {
      openRowKeys: PropTypes$1.array,
      expandedRowRender: PropTypes$1.func,
      expandedIndexSimulate: PropTypes$1.bool,
      expandedRowWidthEquals2Table: PropTypes$1.bool,
      expandedRowIndent: PropTypes$1.array,
      getExpandedRowRef: PropTypes$1.func,
      getTableInstanceForExpand: PropTypes$1.func
    }, _temp22);
    ExpandedTable.displayName = "ExpandedTable";
    statics(ExpandedTable, BaseComponent);
    return polyfill(ExpandedTable);
  }
  var _class$9, _temp2$2;
  var VirtualBody = (_temp2$2 = _class$9 = function(_React$Component) {
    _default$4(VirtualBody2, _React$Component);
    function VirtualBody2() {
      var _temp3, _this2, _ret;
      _default$7(this, VirtualBody2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.tableRef = function(table) {
        _this2.tableNode = table;
      }, _this2.virtualScrollRef = function(virtualScroll) {
        _this2.virtualScrollNode = virtualScroll;
      }, _this2.onScroll = function(current) {
        _this2.context.onFixedScrollSync(current);
        _this2.context.onLockBodyScroll(current);
        _this2.context.onVirtualScroll();
      }, _temp3), _default$5(_this2, _ret);
    }
    VirtualBody2.prototype.componentDidMount = function componentDidMount() {
      var bodyNode = ReactDOM.findDOMNode(this);
      this.context.getNode("body", bodyNode);
      this.context.getBodyNode(bodyNode, this.context.lockType);
      this.context.getLockNode("body", bodyNode, this.context.lockType);
    };
    VirtualBody2.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, colGroup = _props.colGroup, tableWidth = _props.tableWidth, others = _default$3(_props, ["prefix", "className", "colGroup", "tableWidth"]);
      var _context = this.context, maxBodyHeight = _context.maxBodyHeight, bodyHeight = _context.bodyHeight, innerTop = _context.innerTop;
      var style = {
        width: tableWidth
      };
      var wrapperStyle = {
        position: "relative"
      };
      if (bodyHeight > maxBodyHeight) {
        wrapperStyle.height = bodyHeight;
      }
      return React.createElement(
        "div",
        { style: { maxHeight: maxBodyHeight }, className, onScroll: this.onScroll },
        React.createElement(
          "div",
          { style: wrapperStyle, ref: this.virtualScrollRef },
          React.createElement(
            "div",
            {
              style: {
                position: "relative",
                transform: "translateY(" + innerTop + "px)",
                willChange: "transform"
              }
            },
            React.createElement(
              "table",
              { ref: this.tableRef, style },
              colGroup,
              React.createElement(Body, _default$8({}, others, { prefix }))
            )
          )
        )
      );
    };
    return VirtualBody2;
  }(React.Component), _class$9.propTypes = {
    children: PropTypes$1.any,
    prefix: PropTypes$1.string,
    className: PropTypes$1.string,
    colGroup: PropTypes$1.any,
    tableWidth: PropTypes$1.number
  }, _class$9.contextTypes = {
    maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    onBodyScroll: PropTypes$1.func,
    onFixedScrollSync: PropTypes$1.func,
    onVirtualScroll: PropTypes$1.func,
    onLockBodyScroll: PropTypes$1.func,
    bodyHeight: PropTypes$1.number,
    innerTop: PropTypes$1.number,
    getNode: PropTypes$1.func,
    getBodyNode: PropTypes$1.func,
    getLockNode: PropTypes$1.func,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }, _temp2$2);
  VirtualBody.displayName = "VirtualBody";
  var noop13 = function noop14() {
  };
  var THRESHOLD = 10;
  function virtual(BaseComponent) {
    var _class2, _temp3;
    var VirtualTable = (_temp3 = _class2 = function(_React$Component) {
      _default$4(VirtualTable2, _React$Component);
      function VirtualTable2(props, context) {
        _default$7(this, VirtualTable2);
        var _this2 = _default$5(this, _React$Component.call(this, props, context));
        _this2.onScroll = function() {
          var scrollTop = _this2.bodyNode.scrollTop;
          if (scrollTop === _this2.lastScrollTop) {
            return;
          }
          var start = _this2.computeScrollToRow(scrollTop);
          if (!("scrollToRow" in _this2.props)) {
            _this2.setState({
              scrollToRow: start
            });
          }
          _this2.props.onBodyScroll(start);
          _this2.lastScrollTop = scrollTop;
        };
        _this2.getBodyNode = function(node, lockType) {
          lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
          _this2["body" + lockType + "Node"] = node;
        };
        _this2.getTableInstance = function(type2, instance2) {
          type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
          _this2["table" + type2 + "Inc"] = instance2;
        };
        var useVirtual = props.useVirtual, dataSource = props.dataSource;
        var hasVirtualData = useVirtual && dataSource && dataSource.length > 0;
        _this2.state = {
          rowHeight: _this2.props.rowHeight,
          scrollToRow: _this2.props.scrollToRow,
          height: _this2.props.maxBodyHeight,
          hasVirtualData
        };
        return _this2;
      }
      VirtualTable2.prototype.getChildContext = function getChildContext() {
        return {
          onVirtualScroll: this.onScroll,
          bodyHeight: this.computeBodyHeight(),
          innerTop: this.computeInnerTop(),
          getBodyNode: this.getBodyNode,
          getTableInstanceForVirtual: this.getTableInstance,
          rowSelection: this.rowSelection
        };
      };
      VirtualTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};
        if ("maxBodyHeight" in nextProps) {
          if (prevState.height !== nextProps.maxBodyHeight) {
            state.height = nextProps.maxBodyHeight;
          }
        }
        if ("scrollToRow" in nextProps) {
          state.scrollToRow = nextProps.scrollToRow;
        }
        if (prevState.useVirtual !== nextProps.useVirtual || prevState.dataSource !== nextProps.dataSource) {
          state.hasVirtualData = nextProps.useVirtual && nextProps.dataSource && nextProps.dataSource.length > 0;
        }
        return state;
      };
      VirtualTable2.prototype.componentDidMount = function componentDidMount() {
        if (this.state.hasVirtualData && this.bodyNode) {
          this.lastScrollTop = this.bodyNode.scrollTop;
        }
        this.adjustScrollTop();
        this.adjustSize();
        this.reComputeSize();
      };
      VirtualTable2.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustScrollTop();
        this.adjustSize();
        this.reComputeSize();
      };
      VirtualTable2.prototype.reComputeSize = function reComputeSize() {
        var _state = this.state, rowHeight = _state.rowHeight, hasVirtualData = _state.hasVirtualData;
        if (typeof rowHeight === "function" && hasVirtualData) {
          var row = this.getRowNode();
          var rowClientHeight = row && row.clientHeight;
          if (rowClientHeight !== this.state.rowHeight) {
            this.setState({
              rowHeight: rowClientHeight
            });
          }
        }
      };
      VirtualTable2.prototype.computeBodyHeight = function computeBodyHeight() {
        var rowHeight = this.state.rowHeight;
        var dataSource = this.props.dataSource;
        if (typeof rowHeight === "function") {
          return 0;
        }
        var count = 0;
        dataSource.forEach(function(item) {
          if (!item.__hidden) {
            count += 1;
          }
        });
        return count * rowHeight;
      };
      VirtualTable2.prototype.computeInnerTop = function computeInnerTop() {
        var rowHeight = this.state.rowHeight;
        if (typeof rowHeight === "function") {
          return 0;
        }
        var start = Math.max(this.start - THRESHOLD, 0);
        return start * rowHeight;
      };
      VirtualTable2.prototype.getVisibleRange = function getVisibleRange(ExpectStart) {
        var _state2 = this.state, height = _state2.height, rowHeight = _state2.rowHeight;
        var len = this.props.dataSource.length;
        var end = void 0, visibleCount = 0;
        var start = 0;
        if (typeof rowHeight === "function") {
          end = 1;
        } else {
          visibleCount = parseInt(dom.getPixels(height) / rowHeight, 10);
          if ("number" === typeof ExpectStart) {
            start = ExpectStart < len ? ExpectStart : 0;
          }
          end = Math.min(+start + 1 + visibleCount + 10, len);
        }
        this.end = end;
        this.visibleCount = visibleCount;
        return {
          start,
          end
        };
      };
      VirtualTable2.prototype.adjustScrollTop = function adjustScrollTop() {
        if (this.state.hasVirtualData && this.bodyNode) {
          this.bodyNode.scrollTop = this.lastScrollTop % this.state.rowHeight + this.state.rowHeight * this.state.scrollToRow;
        }
      };
      VirtualTable2.prototype.adjustSize = function adjustSize() {
        if (this.state.hasVirtualData && this.bodyNode) {
          var body = this.bodyNode;
          var virtualScrollNode = body.querySelector("div");
          var clientHeight = body.clientHeight, clientWidth = body.clientWidth;
          var tableInc = this.tableInc;
          var tableNode = ReactDOM.findDOMNode(tableInc);
          var prefix = this.props.prefix;
          var headerNode = tableNode.querySelector("." + prefix + "table-header table");
          var headerClientWidth = headerNode && headerNode.clientWidth;
          if (clientWidth < headerClientWidth) {
            dom.setStyle(virtualScrollNode, "min-width", headerClientWidth);
            var leftNode = this.bodyLeftNode;
            var rightNode = this.bodyRightNode;
            leftNode && dom.setStyle(leftNode, "max-height", clientHeight);
            rightNode && dom.setStyle(rightNode, "max-height", clientHeight);
          } else {
            dom.setStyle(virtualScrollNode, "min-width", "auto");
          }
        }
      };
      VirtualTable2.prototype.computeScrollToRow = function computeScrollToRow(offset) {
        var rowHeight = this.state.rowHeight;
        var start = parseInt(offset / rowHeight);
        this.start = start;
        return start;
      };
      VirtualTable2.prototype.getRowNode = function getRowNode() {
        try {
          return ReactDOM.findDOMNode(this.tableInc.getRowRef(0));
        } catch (error) {
          return null;
        }
      };
      VirtualTable2.prototype.render = function render2() {
        var _props = this.props;
        _props.useVirtual;
        var components = _props.components, dataSource = _props.dataSource, fixedHeader = _props.fixedHeader;
        _props.rowHeight;
        var scrollToRow = _props.scrollToRow;
        _props.onBodyScroll;
        var others = _default$3(_props, ["useVirtual", "components", "dataSource", "fixedHeader", "rowHeight", "scrollToRow", "onBodyScroll"]);
        var entireDataSource = dataSource;
        var newDataSource = dataSource;
        this.rowSelection = this.props.rowSelection;
        if (this.state.hasVirtualData) {
          newDataSource = [];
          components = _default$8({}, components);
          var _getVisibleRange = this.getVisibleRange(this.state.scrollToRow), start = _getVisibleRange.start, end = _getVisibleRange.end;
          var count = -1;
          dataSource.forEach(function(current, index2, record) {
            if (!current.__hidden) {
              count += 1;
              if (count >= Math.max(start - THRESHOLD, 0) && count < end) {
                newDataSource.push(current);
              }
            }
            current.__rowIndex = index2;
          });
          if (!components.Body) {
            components.Body = VirtualBody;
          }
          fixedHeader = true;
        }
        return React.createElement(BaseComponent, _default$8({}, others, {
          scrollToRow,
          dataSource: newDataSource,
          entireDataSource,
          components,
          fixedHeader
        }));
      };
      return VirtualTable2;
    }(React.Component), _class2.VirtualBody = VirtualBody, _class2.propTypes = _default$8({
      /**
       * 是否开启虚拟滚动
       */
      useVirtual: PropTypes$1.bool,
      /**
       * 设置行高
       */
      rowHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.func]),
      maxBodyHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
      primaryKey: PropTypes$1.oneOfType([PropTypes$1.symbol, PropTypes$1.string]),
      dataSource: PropTypes$1.array,
      /**
       * 在内容区域滚动的时候触发的函数
       */
      onBodyScroll: PropTypes$1.func
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps, {
      primaryKey: "id",
      rowHeight: noop13,
      maxBodyHeight: 200,
      components: {},
      prefix: "next-",
      onBodyScroll: noop13
    }), _class2.childContextTypes = {
      onVirtualScroll: PropTypes$1.func,
      bodyHeight: PropTypes$1.number,
      innerTop: PropTypes$1.number,
      getBodyNode: PropTypes$1.func,
      getTableInstanceForVirtual: PropTypes$1.func,
      rowSelection: PropTypes$1.object
    }, _temp3);
    VirtualTable.displayName = "VirtualTable";
    statics(VirtualTable, BaseComponent);
    return polyfill(VirtualTable);
  }
  var _class$8, _temp2$1;
  var LockBody = (_temp2$1 = _class$8 = function(_React$Component) {
    _default$4(LockBody2, _React$Component);
    function LockBody2() {
      var _temp3, _this2, _ret;
      _default$7(this, LockBody2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.onBodyScroll = function(event) {
        _this2.context.onLockBodyScroll(event);
      }, _temp3), _default$5(_this2, _ret);
    }
    LockBody2.prototype.componentDidMount = function componentDidMount() {
      this.context.getLockNode("body", ReactDOM.findDOMNode(this), this.context.lockType);
    };
    LockBody2.prototype.render = function render2() {
      var event = {
        onLockScroll: this.onBodyScroll
      };
      return React.createElement(FixedBody, _default$8({}, this.props, event));
    };
    return LockBody2;
  }(React.Component), _class$8.propTypes = _default$8({}, FixedBody.propTypes), _class$8.contextTypes = _default$8({}, FixedBody.contextTypes, {
    getLockNode: PropTypes$1.func,
    onLockBodyScroll: PropTypes$1.func,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }), _temp2$1);
  LockBody.displayName = "LockBody";
  var _class$7, _temp$6;
  var LockHeader = (_temp$6 = _class$7 = function(_FixedHeader) {
    _default$4(LockHeader2, _FixedHeader);
    function LockHeader2() {
      _default$7(this, LockHeader2);
      return _default$5(this, _FixedHeader.apply(this, arguments));
    }
    LockHeader2.prototype.componentDidMount = function componentDidMount() {
      var _context = this.context, getNode = _context.getNode, getLockNode = _context.getLockNode;
      getNode && getNode("header", ReactDOM.findDOMNode(this), this.context.lockType);
      getLockNode && getLockNode("header", ReactDOM.findDOMNode(this), this.context.lockType);
    };
    return LockHeader2;
  }(FixedHeader), _class$7.propTypes = _default$8({}, FixedHeader.propTypes), _class$7.contextTypes = _default$8({}, FixedHeader.contextTypes, {
    getLockNode: PropTypes$1.func,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }), _temp$6);
  var ieVersion$1 = env.ieVersion;
  function lock(BaseComponent) {
    var _class2, _temp3;
    var LockTable = (_temp3 = _class2 = function(_React$Component) {
      _default$4(LockTable2, _React$Component);
      function LockTable2(props, context) {
        _default$7(this, LockTable2);
        var _this2 = _default$5(this, _React$Component.call(this, props, context));
        _this2.state = {};
        _this2.getTableInstance = function(type2, instance2) {
          type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
          _this2["table" + type2 + "Inc"] = instance2;
        };
        _this2.getNode = function(type2, node, lockType) {
          lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
          _this2["" + type2 + lockType + "Node"] = node;
          if (type2 === "header" && !_this2.innerHeaderNode && !lockType) {
            _this2.innerHeaderNode = _this2.headerNode.querySelector("div");
          }
        };
        _this2.onRowMouseEnter = function(record, index2) {
          if (_this2.isLock()) {
            var row = _this2.getRowNode(index2);
            var leftRow = _this2.getRowNode(index2, "left");
            var rightRow = _this2.getRowNode(index2, "right");
            [row, leftRow, rightRow].forEach(function(row2) {
              row2 && dom.addClass(row2, "hovered");
            });
          }
        };
        _this2.onRowMouseLeave = function(record, index2) {
          if (_this2.isLock()) {
            var row = _this2.getRowNode(index2);
            var leftRow = _this2.getRowNode(index2, "left");
            var rightRow = _this2.getRowNode(index2, "right");
            [row, leftRow, rightRow].forEach(function(row2) {
              row2 && dom.removeClass(row2, "hovered");
            });
          }
        };
        _this2.onLockBodyScrollTop = function(event) {
          var target = event.target;
          if (event.currentTarget !== target) {
            return;
          }
          var distScrollTop = target.scrollTop;
          if (_this2.isLock() && distScrollTop !== _this2.lastScrollTop) {
            var lockRightBody = _this2.bodyRightNode, lockLeftBody = _this2.bodyLeftNode, bodyNode = _this2.bodyNode;
            var arr = [lockLeftBody, lockRightBody, bodyNode];
            arr.forEach(function(node) {
              if (node && node.scrollTop !== distScrollTop) {
                node.scrollTop = distScrollTop;
              }
            });
            _this2.lastScrollTop = distScrollTop;
          }
        };
        _this2.onLockBodyScrollLeft = function() {
          if (_this2.isLock()) {
            var rtl = _this2.props.rtl;
            var lockRightTable = rtl ? _this2.getWrapperNode("left") : _this2.getWrapperNode("right"), lockLeftTable = rtl ? _this2.getWrapperNode("right") : _this2.getWrapperNode("left"), shadowClassName = "shadow";
            var x2 = _this2.bodyNode.scrollLeft;
            if (x2 === 0) {
              lockLeftTable && dom.removeClass(lockLeftTable, shadowClassName);
              lockRightTable && dom.addClass(lockRightTable, shadowClassName);
            } else if (x2 === _this2.bodyNode.scrollWidth - _this2.bodyNode.clientWidth) {
              lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
              lockRightTable && dom.removeClass(lockRightTable, shadowClassName);
            } else {
              lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
              lockRightTable && dom.addClass(lockRightTable, shadowClassName);
            }
          }
        };
        _this2.onLockBodyScroll = function(event) {
          _this2.onLockBodyScrollTop(event);
          _this2.onLockBodyScrollLeft();
        };
        _this2.adjustSize = function() {
          if (!_this2.adjustIfTableNotNeedLock()) {
            _this2.adjustHeaderSize();
            _this2.adjustBodySize();
            _this2.adjustRowHeight();
            _this2.onLockBodyScrollLeft();
          }
        };
        _this2.getFlatenChildrenLength = function() {
          var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var loop = function loop2(arr) {
            var newArray = [];
            arr.forEach(function(child) {
              if (child && child.children) {
                newArray.push.apply(newArray, loop2(child.children));
              } else {
                newArray.push(child);
              }
            });
            return newArray;
          };
          return loop(children).length;
        };
        _this2.saveLockLeftRef = function(ref) {
          _this2.lockLeftEl = ref;
        };
        _this2.saveLockRightRef = function(ref) {
          _this2.lockRightEl = ref;
        };
        _this2.lockLeftChildren = [];
        _this2.lockRightChildren = [];
        return _this2;
      }
      LockTable2.prototype.getChildContext = function getChildContext() {
        return {
          getTableInstance: this.getTableInstance,
          getLockNode: this.getNode,
          onLockBodyScroll: this.onLockBodyScroll,
          onRowMouseEnter: this.onRowMouseEnter,
          onRowMouseLeave: this.onRowMouseLeave
        };
      };
      LockTable2.prototype.componentDidMount = function componentDidMount() {
        events.on(window, "resize", this.adjustSize);
        this.scroll();
        this.adjustSize();
        this.forceUpdate();
      };
      LockTable2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.pure) {
          var isEqual = shallowElementEquals$1(nextProps, this.props);
          return !(isEqual && obj.shallowEqual(nextContext, this.context));
        }
        return true;
      };
      LockTable2.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustSize();
        this._isLock = false;
      };
      LockTable2.prototype.componentWillUnmount = function componentWillUnmount() {
        events.off(window, "resize", this.adjustSize);
      };
      LockTable2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
        var columns = this.normalizeChildren(props);
        var splitChildren = this.splitFromNormalizeChildren(columns);
        var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
        return {
          lockLeftChildren,
          lockRightChildren,
          children: this.mergeFromSplitLockChildren(splitChildren)
        };
      };
      LockTable2.prototype.normalizeChildren = function normalizeChildren(props) {
        var children = props.children, columns = props.columns;
        var isLock = false, ret = void 0;
        var checkLock = function checkLock2(col) {
          if ([true, "left", "right"].indexOf(col.lock) > -1) {
            if (!("width" in col)) {
              log.warning("Should config width for lock column named [ " + col.dataIndex + " ].");
            }
            isLock = true;
          }
        };
        if (columns && !children) {
          ret = columns;
          var getColumns = function getColumns2(cols) {
            cols.forEach(function() {
              var col = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              checkLock(col);
              if (col.children) {
                getColumns2(col.children);
              }
            });
          };
          getColumns(columns);
        } else {
          var getChildren = function getChildren2(children2) {
            var ret2 = [];
            React.Children.forEach(children2, function(child) {
              if (child) {
                var _props = _default$8({}, child.props);
                checkLock(_props);
                ret2.push(_props);
                if (child.props.children) {
                  _props.children = getChildren2(child.props.children);
                }
              }
            });
            return ret2;
          };
          ret = getChildren(children);
        }
        ret.forEach(function(child) {
          if (child.__normalized && isLock) {
            child.lock = child.lock || "left";
            delete child.__normalized;
          }
        });
        this._isLock = isLock;
        return ret;
      };
      LockTable2.prototype.splitFromNormalizeChildren = function splitFromNormalizeChildren(children) {
        var originChildren = deepCopy$1(children);
        var lockLeftChildren = deepCopy$1(children);
        var lockRightChildren = deepCopy$1(children);
        var loop = function loop2(lockChildren, condition) {
          var ret = [];
          lockChildren.forEach(function(child) {
            if (child.children) {
              var res = loop2(child.children, condition);
              if (!res.length) {
                ret.push(child);
              }
            } else {
              var order = condition(child);
              if (!order) {
                ret.push(child);
              }
            }
          });
          ret.forEach(function(res) {
            var index2 = lockChildren.indexOf(res);
            lockChildren.splice(index2, 1);
          });
          return lockChildren;
        };
        loop(lockLeftChildren, function(child) {
          if (child.lock === true || child.lock === "left") {
            return "left";
          }
        });
        loop(lockRightChildren, function(child) {
          if (child.lock === "right") {
            return "right";
          }
        });
        loop(originChildren, function(child) {
          return child.lock !== true && child.lock !== "left" && child.lock !== "right";
        });
        return {
          lockLeftChildren,
          lockRightChildren,
          originChildren
        };
      };
      LockTable2.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren) {
        var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
        var originChildren = splitChildren.originChildren;
        Array.prototype.unshift.apply(originChildren, lockLeftChildren);
        originChildren = originChildren.concat(lockRightChildren);
        return originChildren;
      };
      LockTable2.prototype.scroll = function scroll() {
        var _props2 = this.props, _props2$scrollToCol = _props2.scrollToCol, scrollToCol = _props2$scrollToCol === void 0 ? 0 : _props2$scrollToCol, _props2$scrollToRow = _props2.scrollToRow, scrollToRow = _props2$scrollToRow === void 0 ? 0 : _props2$scrollToRow;
        if (!scrollToCol && !scrollToRow || !this.bodyNode) {
          return;
        }
        var colCellNode = this.getCellNode(0, scrollToCol);
        var rowCellNode = this.getCellNode(scrollToRow, 0);
        var bodyNodeOffset = this.bodyNode.getBoundingClientRect() || {};
        if (colCellNode) {
          var cellNodeoffset = colCellNode.getBoundingClientRect();
          var scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
          this.bodyNode.scrollLeft = scrollLeft;
        }
        if (rowCellNode) {
          var _cellNodeoffset = rowCellNode.getBoundingClientRect();
          var scrollTop = _cellNodeoffset.top - bodyNodeOffset.top;
          this.bodyNode.scrollTop = scrollTop;
        }
      };
      LockTable2.prototype.isLock = function isLock() {
        return this.lockLeftChildren.length || this.lockRightChildren.length;
      };
      LockTable2.prototype.isOriginLock = function isOriginLock() {
        return this._isLock;
      };
      LockTable2.prototype.removeLockTable = function removeLockTable() {
        var lockLeftLen = this.lockLeftChildren.length;
        var lockRightLen = this.lockRightChildren.length;
        if (lockLeftLen) {
          this._notNeedAdjustLockLeft = true;
        }
        if (lockRightLen) {
          this._notNeedAdjustLockRight = true;
        }
        if (lockRightLen || lockLeftLen) {
          this.forceUpdate();
          return true;
        }
      };
      LockTable2.prototype.adjustIfTableNotNeedLock = function adjustIfTableNotNeedLock() {
        var _this2 = this;
        if (this.isOriginLock()) {
          var widthObj = this.tableInc.flatChildren.map(function(item, index2) {
            var cell5 = _this2.getCellNode(0, index2) || {};
            var headerCell = _this2.getHeaderCellNode(0, index2) || {};
            try {
              return {
                cellWidths: parseFloat(getComputedStyle(cell5).width) || 0,
                headerWidths: parseFloat(getComputedStyle(headerCell).width) || 0
              };
            } catch (error) {
              return {
                cellWidths: cell5.clientWidth || 0,
                headerWidths: headerCell.clientWidth || 0
              };
            }
          }).reduce(function(a, b2) {
            return {
              cellWidths: a.cellWidths + b2.cellWidths,
              headerWidths: a.headerWidths + b2.headerWidths
            };
          }, {
            cellWidths: 0,
            headerWidths: 0
          });
          var node = void 0, width = void 0;
          try {
            node = ReactDOM.findDOMNode(this);
            width = node.clientWidth;
          } catch (err) {
            node = null;
            width = 0;
          }
          if (width === 0) {
            return true;
          }
          var configWidths = parseInt(widthObj.cellWidths) || parseInt(widthObj.headerWidths);
          if (configWidths <= width && configWidths > 0) {
            this.removeLockTable();
          } else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
            this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
            this.forceUpdate();
          } else {
            this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
            return false;
          }
        }
        return false;
      };
      LockTable2.prototype.adjustBodySize = function adjustBodySize() {
        var _style;
        var _props3 = this.props, rtl = _props3.rtl, hasHeader = _props3.hasHeader;
        var header = this.headerNode;
        var paddingName = rtl ? "paddingLeft" : "paddingRight";
        var marginName = rtl ? "marginLeft" : "marginRight";
        var scrollBarSize = +dom.scrollbar().width || 0;
        var style = (_style = {}, _style[paddingName] = scrollBarSize, _style[marginName] = scrollBarSize, _style);
        var body = this.bodyNode, hasVerScroll = body && body.scrollHeight > body.clientHeight;
        if (this.isLock()) {
          var lockLeftBody = this.bodyLeftNode, lockRightBody = this.bodyRightNode, lockRightBodyWrapper = this.getWrapperNode("right"), bodyHeight = body.offsetHeight, width = hasVerScroll ? scrollBarSize : 0, lockBodyHeight = bodyHeight - scrollBarSize;
          if (!hasVerScroll) {
            style[paddingName] = 0;
            style[marginName] = 0;
          }
          if (+scrollBarSize) {
            style.marginBottom = -scrollBarSize;
            style.paddingBottom = scrollBarSize;
          } else {
            style.marginBottom = -20;
            style.paddingBottom = 20;
          }
          var lockStyle = {
            "max-height": lockBodyHeight
          };
          if (!hasHeader && !+scrollBarSize) {
            lockStyle[marginName] = 0;
          }
          if (+scrollBarSize) {
            lockStyle[marginName] = -scrollBarSize;
          }
          lockLeftBody && dom.setStyle(lockLeftBody, lockStyle);
          lockRightBody && dom.setStyle(lockRightBody, lockStyle);
          lockRightBodyWrapper && +scrollBarSize && dom.setStyle(lockRightBodyWrapper, rtl ? "left" : "right", width + "px");
        } else {
          style.marginBottom = -scrollBarSize;
          style.paddingBottom = scrollBarSize;
          style[marginName] = 0;
          if (!hasVerScroll) {
            style[paddingName] = 0;
          }
        }
        header && dom.setStyle(header, style);
      };
      LockTable2.prototype.adjustHeaderSize = function adjustHeaderSize() {
        var _this3 = this;
        if (this.isLock()) {
          this.tableInc.groupChildren.forEach(function(child, index2) {
            var lastIndex = _this3.tableInc.groupChildren[index2].length - 1;
            var headerRightRow = _this3.getHeaderCellNode(index2, lastIndex), headerLeftRow = _this3.getHeaderCellNode(index2, 0), headerRightLockRow = _this3.getHeaderCellNode(index2, 0, "right"), headerLeftLockRow = _this3.getHeaderCellNode(index2, 0, "left");
            if (headerRightRow && headerRightLockRow) {
              var maxRightRowHeight = headerRightRow.offsetHeight;
              dom.setStyle(headerRightLockRow, "height", maxRightRowHeight);
              setTimeout(function() {
                var affixRef = _this3.tableRightInc.affixRef;
                return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
              });
            }
            if (headerLeftRow && headerLeftLockRow) {
              var maxLeftRowHeight = headerLeftRow.offsetHeight;
              dom.setStyle(headerLeftLockRow, "height", maxLeftRowHeight);
              setTimeout(function() {
                var affixRef = _this3.tableLeftInc.affixRef;
                return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
              });
            }
          });
        }
      };
      LockTable2.prototype.adjustRowHeight = function adjustRowHeight() {
        var _this4 = this;
        if (this.isLock()) {
          this.tableInc.props.dataSource.forEach(function(item, index2) {
            var rowIndex = "" + ((typeof item === "undefined" ? "undefined" : _default$6(item)) === "object" && "__rowIndex" in item ? item.__rowIndex : index2) + (item.__expanded ? "_expanded" : "");
            _this4.setRowHeight(rowIndex, "left");
            _this4.setRowHeight(rowIndex, "right");
          });
        }
      };
      LockTable2.prototype.setRowHeight = function setRowHeight(rowIndex, dir) {
        var lockRow = this.getRowNode(rowIndex, dir), row = this.getRowNode(rowIndex), rowHeight = (ieVersion$1 ? row && row.offsetHeight : row && parseFloat(getComputedStyle(row).height)) || "auto", lockHeight = (ieVersion$1 ? lockRow && lockRow.offsetHeight : lockRow && parseFloat(getComputedStyle(lockRow).height)) || "auto";
        if (lockRow && rowHeight !== lockHeight) {
          dom.setStyle(lockRow, "height", rowHeight);
        }
      };
      LockTable2.prototype.getWrapperNode = function getWrapperNode(type2) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        try {
          return ReactDOM.findDOMNode(this["lock" + type2 + "El"]);
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.getRowNode = function getRowNode(index2, type2) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        var table = this["table" + type2 + "Inc"];
        try {
          return ReactDOM.findDOMNode(table.getRowRef(index2));
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.getHeaderCellNode = function getHeaderCellNode(index2, i, type2) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        var table = this["table" + type2 + "Inc"];
        try {
          return ReactDOM.findDOMNode(table.getHeaderCellRef(index2, i));
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.getCellNode = function getCellNode(index2, i, type2) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        var table = this["table" + type2 + "Inc"];
        try {
          return ReactDOM.findDOMNode(table.getCellRef(index2, i));
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.render = function render2() {
        var _props4 = this.props;
        _props4.children;
        _props4.columns;
        var prefix = _props4.prefix, components = _props4.components, className = _props4.className, dataSource = _props4.dataSource, tableWidth = _props4.tableWidth, others = _default$3(_props4, ["children", "columns", "prefix", "components", "className", "dataSource", "tableWidth"]);
        var _normalizeChildrenSta = this.normalizeChildrenState(this.props), lockLeftChildren = _normalizeChildrenSta.lockLeftChildren, lockRightChildren = _normalizeChildrenSta.lockRightChildren, normalizedChildren = _normalizeChildrenSta.children;
        var leftLen = this.getFlatenChildrenLength(lockLeftChildren);
        var rightLen = this.getFlatenChildrenLength(lockRightChildren);
        var originLen = this.getFlatenChildrenLength(normalizedChildren);
        var lengths = {
          left: leftLen,
          right: rightLen,
          origin: originLen
        };
        if (this._notNeedAdjustLockLeft) {
          lockLeftChildren = [];
        }
        if (this._notNeedAdjustLockRight) {
          lockRightChildren = [];
        }
        this.lockLeftChildren = lockLeftChildren;
        this.lockRightChildren = lockRightChildren;
        if (this.isOriginLock()) {
          var _classnames;
          components = _default$8({}, components);
          components.Body = components.Body || LockBody;
          components.Header = components.Header || LockHeader;
          components.Wrapper = components.Wrapper || FixedWrapper;
          components.Row = components.Row || LockRow;
          className = classnames((_classnames = {}, _classnames[prefix + "table-lock"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
          var content = [React.createElement(BaseComponent, _default$8({}, others, {
            dataSource,
            key: "lock-left",
            columns: lockLeftChildren,
            className: prefix + "table-lock-left",
            lengths,
            prefix,
            lockType: "left",
            components,
            ref: this.saveLockLeftRef,
            loading: false,
            "aria-hidden": true
          })), React.createElement(BaseComponent, _default$8({}, others, {
            dataSource,
            key: "lock-right",
            columns: lockRightChildren,
            className: prefix + "table-lock-right",
            lengths,
            prefix,
            lockType: "right",
            components,
            ref: this.saveLockRightRef,
            loading: false,
            "aria-hidden": true
          }))];
          return React.createElement(BaseComponent, _default$8({}, others, {
            tableWidth,
            dataSource,
            columns: normalizedChildren,
            prefix,
            lengths,
            wrapperContent: content,
            components,
            className
          }));
        }
        return React.createElement(BaseComponent, this.props);
      };
      return LockTable2;
    }(React.Component), _class2.LockRow = LockRow, _class2.LockBody = LockBody, _class2.LockHeader = LockHeader, _class2.propTypes = _default$8({
      scrollToCol: PropTypes$1.number,
      /**
       * 指定滚动到某一行，仅在`useVirtual`的时候生效
       */
      scrollToRow: PropTypes$1.number
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps), _class2.childContextTypes = {
      getTableInstance: PropTypes$1.func,
      getLockNode: PropTypes$1.func,
      onLockBodyScroll: PropTypes$1.func,
      onRowMouseEnter: PropTypes$1.func,
      onRowMouseLeave: PropTypes$1.func
    }, _temp3);
    LockTable.displayName = "LockTable";
    statics(LockTable, BaseComponent);
    return LockTable;
  }
  function deepCopy$1(arr) {
    var copy = function copy2(arr2) {
      return arr2.map(function(item) {
        var newItem = _default$8({}, item);
        if (item.children) {
          item.children = copy2(item.children);
        }
        return newItem;
      });
    };
    return copy(arr);
  }
  function stickyLock(BaseComponent) {
    var _class2, _temp3;
    var LockTable = (_temp3 = _class2 = function(_React$Component) {
      _default$4(LockTable2, _React$Component);
      function LockTable2(props, context) {
        _default$7(this, LockTable2);
        var _this2 = _default$5(this, _React$Component.call(this, props));
        _this2.state = {};
        _this2.updateOffsetArr = function() {
          var _ref = _this2.splitChildren || {}, lockLeftChildren = _ref.lockLeftChildren, lockRightChildren = _ref.lockRightChildren, originChildren = _ref.originChildren;
          var leftLen = _this2.getFlatenChildren(lockLeftChildren).length;
          var rightLen = _this2.getFlatenChildren(lockRightChildren).length;
          var totalLen = leftLen + rightLen + _this2.getFlatenChildren(originChildren).length;
          var hasLockLeft = leftLen > 0;
          var hasLockRight = rightLen > 0;
          var leftOffsetArr = _this2.getStickyWidth(lockLeftChildren, "left", totalLen);
          var rightOffsetArr = _this2.getStickyWidth(lockRightChildren, "right", totalLen);
          var state = {};
          if ("" + leftOffsetArr !== "" + _this2.state.leftOffsetArr) {
            state.leftOffsetArr = leftOffsetArr;
          }
          if ("" + rightOffsetArr !== "" + _this2.state.rightOffsetArr) {
            state.rightOffsetArr = rightOffsetArr;
          }
          if (hasLockLeft !== _this2.state.hasLockLeft) {
            state.hasLockLeft = hasLockLeft;
          }
          if (hasLockRight !== _this2.state.hasLockRight) {
            state.hasLockRight = hasLockRight;
          }
          if (Object.keys(state).length > 0) {
            _this2.setState(state);
          }
        };
        _this2.onLockBodyScroll = function(e2, forceSet) {
          var _ref2 = e2.currentTarget || {}, scrollLeft = _ref2.scrollLeft, scrollWidth = _ref2.scrollWidth, clientWidth = _ref2.clientWidth;
          var pingRight = _this2.pingRight, pingLeft = _this2.pingLeft;
          var pingLeftNext = scrollLeft > 0 && _this2.state.hasLockLeft;
          var pingRightNext = scrollLeft < scrollWidth - clientWidth && _this2.state.hasLockRight;
          if (forceSet || pingLeft !== pingLeftNext || pingRight !== pingRightNext) {
            var prefix = _this2.props.prefix;
            var table = _this2.getTableNode();
            _this2.pingLeft = pingLeftNext;
            _this2.pingRight = pingRightNext;
            var leftFunc = pingLeftNext ? "addClass" : "removeClass";
            dom[leftFunc](table, prefix + "table-ping-left");
            var rightFunc = pingRightNext ? "addClass" : "removeClass";
            dom[rightFunc](table, prefix + "table-ping-right");
          }
        };
        _this2.getStickyWidth = function(lockChildren, dir, totalLen) {
          var _this$props = _this2.props, dataSource = _this$props.dataSource, scrollToRow = _this$props.scrollToRow;
          var offsetArr = [];
          var flatenChildren = _this2.getFlatenChildren(lockChildren);
          var len = flatenChildren.length;
          flatenChildren.reduce(function(ret, col, index2) {
            var tag = dir === "left" ? index2 : len - 1 - index2;
            var tagNext = dir === "left" ? tag - 1 : tag + 1;
            var nodeToGetWidth = dir === "left" ? tag - 1 : totalLen - index2;
            if (dir === "left" && tag === 0) {
              ret[0] = 0;
              return ret;
            } else if (dir === "right" && tag === len - 1) {
              ret[tag] = 0;
              return ret;
            }
            var isEmpty = !(dataSource && dataSource.length > 0);
            var node = isEmpty ? _this2.getHeaderCellNode(0, nodeToGetWidth) : _this2.getCellNode(scrollToRow || dataSource[0] && dataSource[0].__rowIndex || 0, nodeToGetWidth);
            var colWidth = node && parseFloat(getComputedStyle(node).width) || 0;
            ret[tag] = (ret[tagNext] || 0) + colWidth;
            return ret;
          }, offsetArr);
          return offsetArr;
        };
        _this2.getTableInstance = function(type2, instance2) {
          type2 = "";
          _this2["table" + type2 + "Inc"] = instance2;
        };
        _this2.getNode = function(type2, node) {
          _this2[type2 + "Node"] = node;
        };
        _this2.getFlatenChildren = function() {
          var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var loop = function loop2(arr) {
            var newArray = [];
            arr.forEach(function(child) {
              if (child.children) {
                newArray.push.apply(newArray, loop2(child.children));
              } else {
                newArray.push(child);
              }
            });
            return newArray;
          };
          return loop(children);
        };
        _this2.state = {
          hasLockLeft: true,
          hasLockRight: true
        };
        _this2.pingLeft = false;
        _this2.pingRight = false;
        return _this2;
      }
      LockTable2.prototype.getChildContext = function getChildContext() {
        return {
          getTableInstance: this.getTableInstance,
          getLockNode: this.getNode,
          onLockBodyScroll: this.onLockBodyScroll
        };
      };
      LockTable2.prototype.componentDidMount = function componentDidMount() {
        var dataSource = this.props.dataSource;
        var isEmpty = !(dataSource && dataSource.length > 0);
        this.updateOffsetArr();
        this.onLockBodyScroll(isEmpty ? { currentTarget: this.headerNode } : { currentTarget: this.bodyNode });
        this.forceUpdate();
        events.on(window, "resize", this.updateOffsetArr);
      };
      LockTable2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.pure) {
          var isEqual = shallowElementEquals$1(nextProps, this.props);
          return !(isEqual && obj.shallowEqual(nextContext, this.context));
        }
        return true;
      };
      LockTable2.prototype.componentDidUpdate = function componentDidUpdate() {
        this.updateOffsetArr();
        this.onLockBodyScroll(this.bodyNode ? { currentTarget: this.bodyNode } : { currentTarget: this.headerNode }, true);
      };
      LockTable2.prototype.componentWillUnmount = function componentWillUnmount() {
        this.pingLeft = false;
        this.pingRight = false;
        events.off(window, "resize", this.updateOffsetArr);
      };
      LockTable2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
        var columns = this.normalizeChildren(props);
        this.splitChildren = this.splitFromNormalizeChildren(columns);
        return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix);
      };
      LockTable2.prototype.normalizeChildren = function normalizeChildren(props) {
        var children = props.children, columns = props.columns;
        var isLock = false, ret = void 0;
        var getChildren = function getChildren2(children2) {
          var ret2 = [];
          React.Children.forEach(children2, function(child) {
            if (child) {
              var _props = _default$8({}, child.props);
              if ([true, "left", "right"].indexOf(_props.lock) > -1) {
                isLock = true;
                if (!("width" in _props)) {
                  log.warning("Should config width for lock column named [ " + _props.dataIndex + " ].");
                }
              }
              ret2.push(_props);
              if (child.props.children) {
                _props.children = getChildren2(child.props.children);
              }
            }
          });
          return ret2;
        };
        if (columns && !children) {
          ret = columns;
          isLock = columns.find(function(record) {
            return [true, "left", "right"].indexOf(record.lock) > -1;
          });
        } else {
          ret = getChildren(children);
        }
        ret.forEach(function(child) {
          if (child.__normalized && isLock) {
            child.lock = child.lock || "left";
            delete child.__normalized;
          }
        });
        return ret;
      };
      LockTable2.prototype.splitFromNormalizeChildren = function splitFromNormalizeChildren(children) {
        var originChildren = deepCopy(children);
        var lockLeftChildren = deepCopy(children);
        var lockRightChildren = deepCopy(children);
        var loop = function loop2(lockChildren, condition) {
          var ret = [];
          lockChildren.forEach(function(child) {
            if (child.children) {
              var res = loop2(child.children, condition);
              if (!res.length) {
                ret.push(child);
              }
            } else {
              var order = condition(child);
              if (!order) {
                ret.push(child);
              }
            }
          });
          ret.forEach(function(res) {
            var index2 = lockChildren.indexOf(res);
            lockChildren.splice(index2, 1);
          });
          return lockChildren;
        };
        loop(lockLeftChildren, function(child) {
          if (child.lock === true || child.lock === "left") {
            return "left";
          }
        });
        loop(lockRightChildren, function(child) {
          if (child.lock === "right") {
            return "right";
          }
        });
        loop(originChildren, function(child) {
          return child.lock !== true && child.lock !== "left" && child.lock !== "right";
        });
        return {
          lockLeftChildren,
          lockRightChildren,
          originChildren
        };
      };
      LockTable2.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren, prefix) {
        var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
        var originChildren = splitChildren.originChildren;
        var flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
        var flatenRightChildren = this.getFlatenChildren(lockRightChildren);
        setStickyStyle(lockLeftChildren, flatenLeftChildren, "left", this.state.leftOffsetArr, prefix);
        setStickyStyle(lockRightChildren, flatenRightChildren, "right", this.state.rightOffsetArr, prefix);
        return [].concat(lockLeftChildren, originChildren, lockRightChildren);
      };
      LockTable2.prototype.getCellNode = function getCellNode(index2, i) {
        var table = this.tableInc;
        try {
          return ReactDOM.findDOMNode(table.getCellRef(index2, i));
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.getTableNode = function getTableNode() {
        var table = this.tableInc;
        try {
          return ReactDOM.findDOMNode(table.tableEl);
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.getHeaderCellNode = function getHeaderCellNode(index2, i) {
        var table = this.tableInc;
        try {
          return ReactDOM.findDOMNode(table.getHeaderCellRef(index2, i));
        } catch (error) {
          return null;
        }
      };
      LockTable2.prototype.render = function render2() {
        var _classnames;
        var _props2 = this.props;
        _props2.children;
        _props2.columns;
        var prefix = _props2.prefix, components = _props2.components;
        _props2.scrollToRow;
        var className = _props2.className, dataSource = _props2.dataSource, others = _default$3(_props2, ["children", "columns", "prefix", "components", "scrollToRow", "className", "dataSource"]);
        var normalizedChildren = this.normalizeChildrenState(this.props);
        components = _default$8({}, components);
        components.Body = components.Body || LockBody;
        components.Header = components.Header || LockHeader;
        components.Wrapper = components.Wrapper || FixedWrapper;
        components.Row = components.Row || LockRow;
        className = classnames((_classnames = {}, _classnames[prefix + "table-lock"] = true, _classnames[prefix + "table-stickylock"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
        return React.createElement(BaseComponent, _default$8({}, others, {
          dataSource,
          columns: normalizedChildren,
          prefix,
          components,
          className
        }));
      };
      return LockTable2;
    }(React.Component), _class2.LockRow = LockRow, _class2.LockBody = LockBody, _class2.LockHeader = LockHeader, _class2.propTypes = _default$8({
      scrollToCol: PropTypes$1.number,
      /**
       * 指定滚动到某一行，仅在`useVirtual`的时候生效
       */
      scrollToRow: PropTypes$1.number
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps), _class2.childContextTypes = {
      getTableInstance: PropTypes$1.func,
      getLockNode: PropTypes$1.func,
      onLockBodyScroll: PropTypes$1.func
    }, _temp3);
    LockTable.displayName = "LockTable";
    statics(LockTable, BaseComponent);
    return LockTable;
  }
  function deepCopy(arr) {
    var copy = function copy2(arr2) {
      return arr2.map(function(item) {
        var newItem = _default$8({}, item);
        if (item.children) {
          item.children = copy2(item.children);
        }
        return newItem;
      });
    };
    return copy(arr);
  }
  var _class$6, _temp$5;
  var ListHeader = (_temp$5 = _class$6 = function(_React$Component) {
    _default$4(ListHeader2, _React$Component);
    function ListHeader2() {
      _default$7(this, ListHeader2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    ListHeader2.prototype.render = function render2() {
      return null;
    };
    return ListHeader2;
  }(React.Component), _class$6.propTypes = {
    /**
     * 行渲染的逻辑
     */
    cell: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func]),
    /**
     * 是否在Children上面渲染selection
     */
    hasChildrenSelection: PropTypes$1.bool,
    /**
     * 是否在GroupHeader上面渲染selection
     */
    hasSelection: PropTypes$1.bool,
    /**
     * 当 dataSouce 里没有 children 时，是否使用内容作为数据
     */
    useFirstLevelDataWhenNoChildren: PropTypes$1.bool
  }, _class$6.defaultProps = {
    cell: function cell3() {
      return "";
    },
    hasSelection: true,
    hasChildrenSelection: false,
    useFirstLevelDataWhenNoChildren: false
  }, _class$6._typeMark = "listHeader", _temp$5);
  ListHeader.displayName = "ListHeader";
  var _class$5, _temp$4;
  var ListFooter = (_temp$4 = _class$5 = function(_React$Component) {
    _default$4(ListFooter2, _React$Component);
    function ListFooter2() {
      _default$7(this, ListFooter2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    ListFooter2.prototype.render = function render2() {
      return null;
    };
    return ListFooter2;
  }(React.Component), _class$5.propTypes = {
    /**
     * 行渲染的逻辑
     */
    cell: PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.node, PropTypes$1.func])
  }, _class$5.defaultProps = {
    cell: function cell4() {
      return "";
    }
  }, _class$5._typeMark = "listFooter", _temp$4);
  ListFooter.displayName = "ListFooter";
  var _class$4, _temp$3;
  var GroupListRow = (_temp$3 = _class$4 = function(_Row) {
    _default$4(GroupListRow2, _Row);
    function GroupListRow2() {
      _default$7(this, GroupListRow2);
      return _default$5(this, _Row.apply(this, arguments));
    }
    GroupListRow2.prototype.render = function render2() {
      var _classnames;
      var _props = this.props, prefix = _props.prefix, className = _props.className;
      _props.onClick;
      _props.onMouseEnter;
      _props.onMouseLeave;
      _props.columns;
      _props.Cell;
      _props.rowIndex;
      _props.__rowIndex;
      _props.record;
      _props.children;
      _props.primaryKey;
      var colGroup = _props.colGroup;
      _props.cellRef;
      _props.getCellProps;
      _props.locale;
      _props.wrapper;
      _props.rtl;
      _props.tableEl;
      var others = _default$3(_props, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "rowIndex", "__rowIndex", "record", "children", "primaryKey", "colGroup", "cellRef", "getCellProps", "locale", "wrapper", "rtl", "tableEl"]);
      var cls = classnames((_classnames = {}, _classnames[prefix + "table-row"] = true, _classnames[className] = className, _classnames));
      this.context.notRenderCellIndex = [];
      return React.createElement(
        "table",
        _default$8({
          className: cls,
          role: "row"
        }, others, {
          onClick: this.onClick,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        }),
        colGroup,
        React.createElement(
          "tbody",
          null,
          this.renderContent("header"),
          this.renderChildren(),
          this.renderContent("footer")
        )
      );
    };
    GroupListRow2.prototype.isChildrenSelection = function isChildrenSelection() {
      return this.context.listHeader && this.context.listHeader.hasChildrenSelection;
    };
    GroupListRow2.prototype.isFirstLevelDataWhenNoChildren = function isFirstLevelDataWhenNoChildren() {
      return this.context.listHeader && this.context.listHeader.useFirstLevelDataWhenNoChildren;
    };
    GroupListRow2.prototype.isSelection = function isSelection() {
      return this.context.listHeader && this.context.listHeader.hasSelection;
    };
    GroupListRow2.prototype.renderChildren = function renderChildren() {
      var _this2 = this;
      var _props2 = this.props, record = _props2.record, primaryKey = _props2.primaryKey;
      var children = record.children;
      var toRenderList = children;
      if (this.isFirstLevelDataWhenNoChildren()) {
        log.warning("useFirstLevelDataWhenNoChildren is deprecated, change your dataSource structure, make sure there is 'children' in your dataSource.");
        toRenderList = children || [record];
      }
      if (toRenderList) {
        return toRenderList.map(function(child, index2) {
          var cells = _this2.renderCells(child, index2);
          if (_this2.isChildrenSelection()) {
            if (!child[primaryKey]) {
              log.warning("record.children/recored should contains primaryKey when childrenSelection is true.");
            }
            return React.createElement(
              "tr",
              { key: child[primaryKey] },
              cells
            );
          }
          if (_this2.context.rowSelection) {
            cells.shift();
            cells[0] = cells[0] && React.cloneElement(cells[0], _default$8({
              colSpan: 2
            }, cells[0].props));
          }
          return React.createElement(
            "tr",
            { key: index2 },
            cells
          );
        });
      }
      return null;
    };
    GroupListRow2.prototype.renderContent = function renderContent(type2) {
      var _props3 = this.props, columns = _props3.columns, prefix = _props3.prefix, record = _props3.record, rowIndex = _props3.rowIndex;
      var cameType = type2.charAt(0).toUpperCase() + type2.substr(1);
      var list2 = this.context["list" + cameType];
      var listNode = void 0;
      if (list2) {
        if (React.isValidElement(list2.cell)) {
          listNode = React.cloneElement(list2.cell, {
            record,
            index: rowIndex
          });
        } else if (typeof list2.cell === "function") {
          listNode = list2.cell(record, rowIndex);
        }
        if (listNode) {
          var cells = this.renderCells(record);
          if (type2 === "header" && this.context.rowSelection && this.isSelection()) {
            cells = cells.slice(0, 1);
            cells.push(React.createElement(
              "td",
              { colSpan: columns.length - 1, key: "listNode" },
              React.createElement(
                "div",
                { className: prefix + "table-cell-wrapper" },
                listNode
              )
            ));
            listNode = React.createElement(
              "tr",
              { className: prefix + "table-group-" + type2 },
              cells
            );
          } else {
            listNode = React.createElement(
              "tr",
              { className: prefix + "table-group-" + type2 },
              React.createElement(
                "td",
                { colSpan: columns.length },
                React.createElement(
                  "div",
                  { className: prefix + "table-cell-wrapper" },
                  listNode
                )
              )
            );
          }
        }
      }
      return listNode;
    };
    return GroupListRow2;
  }(Row), _class$4.contextTypes = {
    listHeader: PropTypes$1.any,
    listFooter: PropTypes$1.any,
    rowSelection: PropTypes$1.object,
    notRenderCellIndex: PropTypes$1.array,
    lockType: PropTypes$1.oneOf(["left", "right"])
  }, _temp$3);
  function ListBody(props) {
    return React.createElement(Body, _default$8({ component: "div" }, props));
  }
  function list(BaseComponent) {
    var _class2, _temp22;
    var ListTable = (_temp22 = _class2 = function(_React$Component) {
      _default$4(ListTable2, _React$Component);
      function ListTable2() {
        var _temp3, _this2, _ret;
        _default$7(this, ListTable2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {}, _temp3), _default$5(_this2, _ret);
      }
      ListTable2.prototype.getChildContext = function getChildContext() {
        return {
          listHeader: this.listHeader,
          listFooter: this.listFooter,
          rowSelection: this.rowSelection
        };
      };
      ListTable2.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
        var ret = [];
        var loop = function loop2(dataSource2, level) {
          dataSource2.forEach(function(item) {
            var itemCopy = _default$8({}, item);
            itemCopy.__level = level;
            ret.push(itemCopy);
            if (itemCopy.children) {
              loop2(itemCopy.children, level + 1);
            }
          });
        };
        loop(dataSource, 0);
        this.ds = ret;
        return ret;
      };
      ListTable2.prototype.render = function render2() {
        var _this2 = this;
        var _props = this.props, components = _props.components, children = _props.children, className = _props.className, prefix = _props.prefix, others = _default$3(_props, ["components", "children", "className", "prefix"]);
        var isList = false, ret = [];
        React.Children.forEach(children, function(child) {
          if (child) {
            if (["function", "object"].indexOf(_default$6(child.type)) > -1) {
              if (child.type._typeMark === "listHeader") {
                _this2.listHeader = child.props;
                isList = true;
              } else if (child.type._typeMark === "listFooter") {
                _this2.listFooter = child.props;
              } else {
                ret.push(child);
              }
            } else {
              ret.push(child);
            }
          }
        });
        this.rowSelection = this.props.rowSelection;
        if (isList) {
          var _classnames;
          components = _default$8({}, components);
          components.Row = components.Row || GroupListRow;
          components.Body = components.Body || ListBody;
          components.Header = components.Header || FixedHeader;
          components.Wrapper = components.Wrapper || FixedWrapper;
          className = classnames((_classnames = {}, _classnames[prefix + "table-group"] = true, _classnames[className] = className, _classnames));
        }
        return React.createElement(BaseComponent, _default$8({}, others, {
          components,
          children: ret.length > 0 ? ret : void 0,
          className,
          prefix
        }));
      };
      return ListTable2;
    }(React.Component), _class2.ListHeader = ListHeader, _class2.ListFooter = ListFooter, _class2.ListRow = GroupListRow, _class2.ListBody = ListBody, _class2.propTypes = _default$8({}, BaseComponent.propTypes), _class2.defaultProps = _default$8({}, BaseComponent.defaultProps), _class2.childContextTypes = {
      listHeader: PropTypes$1.any,
      listFooter: PropTypes$1.any,
      rowSelection: PropTypes$1.object
    }, _temp22);
    ListTable.displayName = "ListTable";
    statics(ListTable, BaseComponent);
    return ListTable;
  }
  var _class$3, _temp2;
  var StickHeader = (_temp2 = _class$3 = function(_React$Component) {
    _default$4(StickHeader2, _React$Component);
    function StickHeader2() {
      var _temp3, _this2, _ret;
      _default$7(this, StickHeader2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.getAffixRef = function(ref) {
        _this2.props.affixRef && _this2.props.affixRef(ref);
      }, _temp3), _default$5(_this2, _ret);
    }
    StickHeader2.prototype.render = function render2() {
      var _classnames;
      var prefix = this.props.prefix;
      var _context = this.context, Header2 = _context.Header, offsetTop = _context.offsetTop, affixProps = _context.affixProps;
      var newAffixProps = affixProps || {};
      var className = newAffixProps.className, others = _default$3(newAffixProps, ["className"]);
      var cls = classnames((_classnames = {}, _classnames[prefix + "table-affix"] = true, _classnames.className = className, _classnames));
      return React.createElement(
        Affix$1,
        _default$8({ ref: this.getAffixRef }, others, { className: cls, offsetTop }),
        React.createElement(Header2, this.props)
      );
    };
    return StickHeader2;
  }(React.Component), _class$3.propTypes = {
    prefix: PropTypes$1.string
  }, _class$3.contextTypes = {
    Header: PropTypes$1.any,
    offsetTop: PropTypes$1.number,
    affixProps: PropTypes$1.object
  }, _temp2);
  StickHeader.displayName = "StickHeader";
  function sticky(BaseComponent) {
    var _class2, _temp22;
    var StickyTable = (_temp22 = _class2 = function(_React$Component) {
      _default$4(StickyTable2, _React$Component);
      function StickyTable2() {
        var _temp3, _this2, _ret;
        _default$7(this, StickyTable2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp3 = (_this2 = _default$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {}, _temp3), _default$5(_this2, _ret);
      }
      StickyTable2.prototype.getChildContext = function getChildContext() {
        return {
          Header: this.props.components.Header || FixedHeader,
          offsetTop: this.props.offsetTop,
          affixProps: this.props.affixProps
        };
      };
      StickyTable2.prototype.render = function render2() {
        var _props = this.props, stickyHeader = _props.stickyHeader;
        _props.offsetTop;
        _props.affixProps;
        var others = _default$3(_props, ["stickyHeader", "offsetTop", "affixProps"]);
        var _props2 = this.props, components = _props2.components, maxBodyHeight = _props2.maxBodyHeight, fixedHeader = _props2.fixedHeader;
        if (stickyHeader) {
          components = _default$8({}, components);
          components.Header = StickHeader;
          fixedHeader = true;
          maxBodyHeight = Math.max(maxBodyHeight, 1e4);
        }
        return React.createElement(BaseComponent, _default$8({}, others, {
          components,
          fixedHeader,
          maxBodyHeight
        }));
      };
      return StickyTable2;
    }(React.Component), _class2.StickyHeader = StickHeader, _class2.propTypes = _default$8({
      /**
       * 表头是否是sticky
       */
      stickyHeader: PropTypes$1.bool,
      /**
       * 距离窗口顶部达到指定偏移量后触发
       */
      offsetTop: PropTypes$1.number,
      /**
       * affix组件的的属性
       */
      affixProps: PropTypes$1.object,
      components: PropTypes$1.object
    }, BaseComponent.propTypes), _class2.defaultProps = _default$8({
      components: {}
    }, BaseComponent.defaultProps), _class2.childContextTypes = {
      Header: PropTypes$1.any,
      offsetTop: PropTypes$1.number,
      affixProps: PropTypes$1.object
    }, _temp22);
    StickyTable.displayName = "StickyTable";
    statics(StickyTable, BaseComponent);
    return StickyTable;
  }
  var ieVersion = env.ieVersion;
  var ORDER_LIST = [fixed, lock, selection, expanded, virtual, tree, list, sticky];
  var Table = ORDER_LIST.reduce(function(ret, current) {
    ret = current(ret);
    return ret;
  }, Base);
  lock._typeMark = "lock";
  expanded._typeMark = "expanded";
  fixed._typeMark = "fixed";
  var StickyLockTable = ORDER_LIST.reduce(function(ret, current) {
    var newLock = !ieVersion;
    if (current._typeMark === "lock") {
      ret = newLock ? stickyLock(ret) : lock(ret);
    } else if (current._typeMark === "expanded") {
      ret = newLock ? expanded(ret, true) : expanded(ret);
    } else if (current._typeMark === "fixed") {
      ret = newLock ? fixed(ret) : fixed(ret);
    } else {
      ret = current(ret);
    }
    return ret;
  }, Base);
  Table.Base = Base;
  Table.fixed = fixed;
  Table.lock = lock;
  Table.selection = selection;
  Table.expanded = expanded;
  Table.tree = tree;
  Table.virtual = virtual;
  Table.list = list;
  Table.sticky = sticky;
  Table.GroupHeader = ListHeader;
  Table.GroupFooter = ListFooter;
  Table.StickyLock = ConfigProvider$1.config(StickyLockTable, {
    componentName: "Table"
  });
  const Table$1 = ConfigProvider$1.config(Table, {
    componentName: "Table",
    transform: (
      /* istanbul ignore next */
      function transform13(props, deprecated2) {
        if ("columns" in props && typeof props.columns !== "undefined") {
          var _props = props, columns = _props.columns, others = _default$3(_props, ["columns"]);
          var newColumns = [].concat(columns);
          props = _default$8({
            columns: newColumns
          }, others);
        }
        if ("expandedRowKeys" in props) {
          deprecated2("expandedRowKeys", "openRowKeys", "Table");
          var _props2 = props, expandedRowKeys = _props2.expandedRowKeys, _others = _default$3(_props2, ["expandedRowKeys"]);
          props = _default$8({ openRowKeys: expandedRowKeys }, _others);
        }
        if ("onExpandedChange" in props) {
          deprecated2("onExpandedChange", "onRowOpen", "Table");
          var _props3 = props, onExpandedChange = _props3.onExpandedChange, _others2 = _default$3(_props3, ["onExpandedChange"]);
          props = _default$8({ onRowOpen: onExpandedChange }, _others2);
        }
        if ("isLoading" in props) {
          deprecated2("isLoading", "loading", "Table");
          var _props4 = props, isLoading = _props4.isLoading, _others3 = _default$3(_props4, ["isLoading"]);
          props = _default$8({ loading: isLoading }, _others3);
        }
        if ("indentSize" in props) {
          deprecated2("indentSize", "indent", "Table");
          var _props5 = props, indentSize = _props5.indentSize, _others4 = _default$3(_props5, ["indentSize"]);
          props = _default$8({ indent: indentSize }, _others4);
        }
        if ("optimization" in props) {
          deprecated2("optimization", "pure", "Table");
          var _props6 = props, optimization = _props6.optimization, _others5 = _default$3(_props6, ["optimization"]);
          props = _default$8({ pure: optimization }, _others5);
        }
        if ("getRowClassName" in props) {
          deprecated2("getRowClassName", "getRowProps", "Table");
          var _props7 = props, getRowClassName = _props7.getRowClassName, getRowProps = _props7.getRowProps, _others6 = _default$3(_props7, ["getRowClassName", "getRowProps"]);
          if (getRowClassName) {
            var newGetRowProps = function newGetRowProps2() {
              return _default$8({
                className: getRowClassName.apply(void 0, arguments)
              }, getRowProps ? getRowProps.apply(void 0, arguments) : {});
            };
            props = _default$8({ getRowProps: newGetRowProps }, _others6);
          } else {
            props = _default$8({ getRowProps }, _others6);
          }
        }
        if ("getRowProps" in props) {
          deprecated2("getRowProps", "rowProps", "Table in 1.15.0");
          var _props8 = props, _getRowProps = _props8.getRowProps, _others7 = _default$3(_props8, ["getRowProps"]);
          props = _default$8({ rowProps: _getRowProps }, _others7);
        }
        if ("getCellProps" in props) {
          deprecated2("getCellProps", "cellProps", "Table in 1.15.0");
          var _props9 = props, getCellProps = _props9.getCellProps, _others8 = _default$3(_props9, ["getCellProps"]);
          props = _default$8({ cellProps: getCellProps }, _others8);
        }
        return props;
      }
    )
  });
  var _class$2, _temp$2;
  var Text = (_temp$2 = _class$2 = function(_Component) {
    _default$4(Text2, _Component);
    function Text2() {
      _default$7(this, Text2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Text2.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, component = _props.component, strong = _props.strong, underline = _props.underline, deleteProp = _props.delete, code = _props.code, mark = _props.mark, rtl = _props.rtl, others = _default$3(_props, ["prefix", "className", "component", "strong", "underline", "delete", "code", "mark", "rtl"]);
      var Tag = component;
      var children = this.props.children;
      if (strong) {
        children = React.createElement(
          "strong",
          null,
          children
        );
      }
      if (underline) {
        children = React.createElement(
          "u",
          null,
          children
        );
      }
      if (deleteProp) {
        children = React.createElement(
          "del",
          null,
          children
        );
      }
      if (code) {
        children = React.createElement(
          "code",
          null,
          children
        );
      }
      if (mark) {
        children = React.createElement(
          "mark",
          null,
          children
        );
      }
      if (rtl) {
        others.dir = "rtl";
      }
      return React.createElement(
        Tag,
        _default$8({}, others, { className: (className || "") + " " + prefix + "typography" }),
        children
      );
    };
    return Text2;
  }(React.Component), _class$2.propTypes = {
    prefix: PropTypes$1.string,
    /**
     * 添加删除线样式
     */
    delete: PropTypes$1.bool,
    /**
     * 添加标记样式
     */
    mark: PropTypes$1.bool,
    /**
     * 添加下划线样式
     */
    underline: PropTypes$1.bool,
    /**
     * 是否加粗
     */
    strong: PropTypes$1.bool,
    /**
     * 添加代码样式
     */
    code: PropTypes$1.bool,
    /**
     * 设置标签类型
     */
    component: PropTypes$1.elementType,
    children: PropTypes$1.node,
    rtl: PropTypes$1.bool
  }, _class$2.defaultProps = {
    prefix: "next-",
    delete: false,
    mark: false,
    underline: false,
    strong: false,
    code: false,
    component: "span",
    rtl: false
  }, _temp$2);
  Text.displayName = "Text";
  const Text$1 = ConfigProvider$1.config(Text);
  var _class$1, _temp$1;
  var Typography = (_temp$1 = _class$1 = function(_Component) {
    _default$4(Typography2, _Component);
    function Typography2() {
      _default$7(this, Typography2);
      return _default$5(this, _Component.apply(this, arguments));
    }
    Typography2.prototype.render = function render2() {
      return React.createElement(Text$1, this.props);
    };
    return Typography2;
  }(React.Component), _class$1.propTypes = {
    /**
     * 设置标签类型
     */
    component: PropTypes$1.elementType
  }, _class$1.defaultProps = {
    component: "article"
  }, _temp$1);
  Typography.displayName = "Typography";
  const Typography$1 = Typography;
  var _class, _temp;
  var Paragraph = (_temp = _class = function(_React$Component) {
    _default$4(Paragraph2, _React$Component);
    function Paragraph2() {
      _default$7(this, Paragraph2);
      return _default$5(this, _React$Component.apply(this, arguments));
    }
    Paragraph2.prototype.render = function render2() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, component = _props.component, others = _default$3(_props, ["prefix", "className", "component"]);
      var cls = classnames(prefix + "typography-paragraph", className);
      return React.createElement(Text$1, _default$8({}, others, { className: cls, component }));
    };
    return Paragraph2;
  }(React.Component), _class.propTypes = {
    prefix: PropTypes$1.string,
    /**
     * 设置标签类型
     */
    component: PropTypes$1.elementType
  }, _class.defaultProps = {
    prefix: "next-",
    type: "long",
    size: "medium",
    component: "p"
  }, _temp);
  Paragraph.displayName = "Paragraph";
  const Paragraph$1 = ConfigProvider$1.config(Paragraph);
  const createTitle = function(Tag) {
    var _class2, _temp3;
    var Title = (_temp3 = _class2 = function(_Component) {
      _default$4(Title2, _Component);
      function Title2() {
        _default$7(this, Title2);
        return _default$5(this, _Component.apply(this, arguments));
      }
      Title2.prototype.render = function render2() {
        var _props = this.props, prefix = _props.prefix, className = _props.className, others = _default$3(_props, ["prefix", "className"]);
        return React.createElement(Text$1, _default$8({}, others, { component: Tag, className: (className || "") + " " + prefix + "typography-title" }));
      };
      return Title2;
    }(React.Component), _class2.propTypes = {
      prefix: PropTypes$1.string
    }, _class2.defaultProps = {
      prefix: "next-"
    }, _temp3);
    Title.displayName = "Title";
    Title.displayName = Tag.toUpperCase();
    return ConfigProvider$1.config(Title);
  };
  Typography$1.Paragraph = Paragraph$1;
  Typography$1.H1 = createTitle("h1");
  Typography$1.H2 = createTitle("h2");
  Typography$1.H3 = createTitle("h3");
  Typography$1.H4 = createTitle("h4");
  Typography$1.H5 = createTitle("h5");
  Typography$1.H6 = createTitle("h6");
  Typography$1.Text = Text$1;
  const SetDataPool = (y2, name, description, method, parVariable, urlVariable, isInit) => {
    return {
      "id": "",
      name,
      description,
      formUuid: _unsafeWindow.pageConfig.formUuid,
      "protocal": "REMOTE",
      "options": {
        "shouldFetch": true,
        method,
        "params": parVariable ? {
          "type": "variable",
          "variable": parVariable,
          "value": []
        } : y2 && {} || [],
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
        "compiled": `function(data, err) { this.setState({${name}: data}); return data; }`
      }
    };
  };
  const CreateTable = (fieldValues, dataSource) => {
    const { project, skeleton } = AliLowCodeEngine;
    let projectSchema = project.getSchema();
    let urlVariable;
    let name;
    let appType = _unsafeWindow.pageConfig.appType || _unsafeWindow.g_config.appKey;
    if (fieldValues.process) {
      if (appType == fieldValues.appKey)
        urlVariable = "`/${window.pageConfig.appType || window.g_config.appKey}/v1/process/getInstances.json`";
      else
        urlVariable = `"/${appType}/v1/process/getInstances.json"`;
      name = "getInstances";
    } else {
      if (appType == fieldValues.appKey)
        urlVariable = "`/${window.pageConfig.appType || window.g_config.appKey}/v1/form/searchFormDatas.json`";
      else
        urlVariable = `"/${appType}/v1/form/searchFormDatas.json"`;
      name = "searchFormDatas";
    }
    let parVariable = JSON.stringify({
      formUuid: fieldValues.formUuid
      // 表单 ID,
    }, null, 2);
    fetch(`/${fieldValues.appKey}/query/formdesign/getLatestFormWithNavNew.json?formUuid=${fieldValues.formUuid}`).then((res) => res.json()).then(({ content: { pages } }) => {
      const allComponent = pages[0].componentsTree[0].children[1].children[0].children;
      let tableSchemaObj = {
        "componentsTree": [{
          "componentName": "TablePc",
          "props": {
            "noPadding": true,
            "columns": [],
            "dataSourceType": "data",
            "data": {
              "type": "JSExpression",
              "value": "state." + name,
              "currentPage": 1,
              "totalCount": 2,
              "data": []
            },
            "actionColumn": [{
              "title": {
                "type": "i18n",
                "zh_CN": "详情",
                "en_US": "Detail",
                "use": "zh_CN"
              },
              "option": "callback"
            }],
            "showActionBar": true,
            "actionBar": [{
              "title": {
                "zh_CN": "操作1",
                "en_US": "Action 1",
                "type": "i18n",
                "use": "zh_CN"
              },
              "option": "callback"
            }, {
              "title": {
                "zh_CN": "操作2",
                "en_US": "Action 2",
                "type": "i18n",
                "use": "zh_CN"
              },
              "option": "callback"
            }],
            "showSearch": true,
            "searchBarPlaceholder": {
              "type": "i18n",
              "en_US": "Please Input",
              "zh_CN": "请搜索",
              "use": "zh_CN"
            }
          }
        }]
      };
      const formComponentList = ["TextField", "TextareaField", "NumberField", "RateField", "RadioField", "CheckboxField", "DateField", "CascadeDateField", "AttachmentField", "EmployeeField", "ImageField", "SelectField", "MultiSelectField", "CascadeSelectField", "PageSection", "CountrySelectField", "DepartmentSelectField", "AddressField", "LocationField", "AssociationFormField", "DigitalSignatureField", "SerialNumberField", "CompanyField"];
      const recursiveSearch = (obj2) => {
        if (typeof obj2 === "object") {
          if (obj2.hasOwnProperty("componentName")) {
            if (formComponentList.includes(obj2.componentName)) {
              try {
                tableSchemaObj.componentsTree[0].props.columns.push({
                  "dataKey": `${fieldValues.process ? "data" : "formData"}.${obj2.props.fieldId}`,
                  "title": {
                    "zh_CN": obj2.props.label.zh_CN,
                    "en_US": "",
                    "type": "i18n",
                    "use": "zh_CN"
                  },
                  "width": 100,
                  "dataType": "text"
                });
              } catch (e2) {
              }
            }
            if (obj2.componentName === "TableField")
              return;
          }
          for (let key in obj2) {
            if (obj2.hasOwnProperty(key)) {
              recursiveSearch(obj2[key]);
            }
          }
        }
      };
      if (dataSource) {
        const pl = SetDataPool(true, name, null, "POST", parVariable, urlVariable, true);
        projectSchema.componentsTree[0].dataSource.list.push(pl);
        projectSchema.componentsTree[0].dataSource.online.push(pl);
        project.setSchema(projectSchema);
        const dp = skeleton.getPanel("datapool");
        dp.parent.remove(dp);
        Message.success("数据源添加成功");
        setTimeout(() => dp.parent.add(dp), 100);
        recursiveSearch(allComponent);
      }
      _GM_setClipboard(JSON.stringify(tableSchemaObj));
      Message.success("生成成功，请粘贴入页面！");
    });
  };
  class TableTool extends React.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "field", new Field(this));
    }
    render() {
      const { init, validate } = this.field;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { style: { margin: "8px 0" }, children: "生成表格" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                label: "AppKey",
                className: "input-style",
                ...init("appKey", {
                  initValue: _unsafeWindow.pageConfig.appType || _unsafeWindow.g_config.appKey,
                  rules: [{
                    required: true,
                    message: "AppKey 不能为空！"
                  }]
                })
              }
            ),
            this.field.getError("appKey") ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "red"
            }, children: this.field.getError("appKey").join(",") }) : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "FormUuid", className: "input-style", ...init("formUuid", {
              rules: [{
                required: true,
                message: "FormUuid 不能为空！"
              }]
            }) }),
            this.field.getError("formUuid") ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "red"
            }, children: this.field.getError("formUuid").join(",") }) : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1, { ...init("process", { valueName: "checked" }), children: "流程" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "box-grid-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Submit, { onClick: () => {
              validate();
              CreateTable(this.field.getValues(), false);
            }, children: "仅生成表格" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Submit, { type: "primary", onClick: () => {
              CreateTable(this.field.getValues(), true);
            }, children: "创建数据源并生成表格" })
          ] })
        ] })
      ] });
    }
  }
  const ComponentsBox = () => {
    const componentsData = [
      {
        title: "容器",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "Div"
          }]
        })
      },
      {
        title: "选项卡",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "TabsLayout",
            "props": {
              "items": [{
                "primaryKey": "tab_lm4jmqz1",
                "title": { "zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN" },
                "defaultActived": true
              }, {
                "primaryKey": "tab_lm4jmqz2",
                "title": { "zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN" }
              }]
            },
            "children": [{
              "componentName": "Tab",
              "props": {
                "primaryKey": "tab_lm4jmqz1",
                "title": { "zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN" }
              }
            }, {
              "componentName": "Tab",
              "props": {
                "primaryKey": "tab_lm4jmqz2",
                "title": { "zh_CN": "标签项", "en_US": "Tab Item", "type": "i18n", "use": "zh_CN" }
              }
            }]
          }]
        })
      },
      {
        title: "分组",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "PageSection",
            "props": {
              "showHeader": true,
              "title": { "type": "i18n", "en_US": "Group", "zh_CN": "分组", "use": "zh_CN" }
            }
          }]
        })
      },
      {
        title: "按钮",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "Button",
            "props": { "content": { "use": "zh_CN", "en_US": "Button", "zh_CN": "按 钮", "type": "i18n" } }
          }]
        })
      },
      {
        title: "文本",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "Text",
            "props": { "content": { "type": "i18n", "en_US": "Tips content", "zh_CN": "文本", "use": "zh_CN" } }
          }]
        })
      },
      {
        title: "HTML",
        schema: JSON.stringify({
          "componentsTree": [{
            "componentName": "Html",
            "props": { "content": "<div>这里可以写html</div>" }
          }]
        })
      },
      {
        title: "JSX",
        schema: JSON.stringify({ "componentsTree": [{ "componentName": "Jsx" }] })
      },
      {
        title: "关联表单",
        schema: JSON.stringify({ "componentsTree": [{ "componentName": "AssociationFormField" }] })
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "box-grid-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box-grid-2", children: componentsData.map((item) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => {
              if (item.schema) {
                _GM_setClipboard(item.schema);
                Message.success("复制成功！");
              } else
                Message.error("复制失败，请联系开发者！");
            },
            children: item.title
          },
          item.title
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box-grid-1 border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableTool, {}) })
    ] });
  };
  const CopyIcon = (hexColor) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        t: "1699199896852",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8255",
        width: "15",
        height: "15",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M96.1 575.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z", fill: "#1296db", "p-id": "8256" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M742.1 450.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.1 26-13.8 26-31s-11.7-31.3-26-31.4zM742.1 577.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.2 26-13.8 26-31s-11.7-31.3-26-31.4z",
              fill: hexColor,
              "p-id": "8257"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M736.1 63.9H417c-70.4 0-128 57.6-128 128h-64.9c-70.4 0-128 57.6-128 128v128c-0.1 17.7 14.4 32 32.2 32 17.8 0 32.2-14.4 32.2-32.1V320c0-35.2 28.8-64 64-64H289v447.8c0 70.4 57.6 128 128 128h255.1c-0.1 35.2-28.8 63.8-64 63.8H224.5c-35.2 0-64-28.8-64-64V703.5c0-17.7-14.4-32.1-32.2-32.1-17.8 0-32.3 14.4-32.3 32.1v128.3c0 70.4 57.6 128 128 128h384.1c70.4 0 128-57.6 128-128h65c70.4 0 128-57.6 128-128V255.9l-193-192z m0.1 63.4l127.7 128.3H800c-35.2 0-64-28.8-64-64v-64.3h0.2z m64 641H416.1c-35.2 0-64-28.8-64-64v-513c0-35.2 28.8-64 64-64H671V191c0 70.4 57.6 128 128 128h65.2v385.3c0 35.2-28.8 64-64 64z",
              fill: hexColor,
              "p-id": "8258"
            }
          )
        ]
      }
    );
  };
  const JsApiBox = () => {
    const jsApiData = [
      {
        title: "this.reloadDataSource()",
        description: "重新请求所有自动加载设置为 true 的远程 API，该方法也返回一个 Promise",
        code: `this.reloadDataSource().then(res => {
    this.utils.toast({
      type: 'success', 
      title: '刷新成功！'
    });
  });`
      },
      {
        title: "this.utils.dialog()",
        description: "弹出对话框",
        code: `this.utils.dialog({
  method: 'confirm', // 'alert', 'confirm', 'show'
  title: 'title',
  content: 'content', // 如需换行可传入 HTML/JSX 来实现
  onOk: () => {},
  onCancel: () => {},
});`
      },
      {
        title: "this.utils.getDateTimeRange(when, type)",
        description: "获取当前或指定日期的开始结束区间时间戳",
        code: `//when:支持时间戳、Date 日期类型，type:'year', 'month', 'week', 'day', 'date', 'hour', 'minute', 'second'
const [timeStart, timeEnd] = this.utils.getDateTimeRange(when:number, type:String);	`
      },
      {
        title: "this.utils.getLocale()",
        description: "获取当前页面的语言环境",
        code: `const locale = this.utils.getLocale();
  // 输出：locale: zh_CN`
      },
      {
        title: "this.utils.getLoginUserId()",
        description: "获取登录用户userId",
        code: `const userId = this.utils.getLoginUserId();
  // 输出：userId`
      },
      {
        title: "this.utils.getLoginUserName()",
        description: "获取登录用户名称",
        code: `const userName = this.utils.getLoginUserName();
  // 输出：userName`
      },
      {
        title: "this.utils.isMobile()",
        description: "判断当前访问环境是否是移动端",
        code: `this.utils.isMobile()`
      },
      {
        title: "this.utils.isSubmissionPage()",
        description: "判断当前页面是否是数据提交页面",
        code: `this.utils.isSubmissionPage()`
      },
      {
        title: "this.utils.isViewPage()",
        description: "判断当前页面是否是数据查看页面",
        code: `this.utils.isViewPage()`
      },
      {
        title: "this.utils.loadScript()",
        description: "动态加载远程脚本",
        code: `this.utils.loadScript('');`
      },
      {
        title: "this.utils.openPage()",
        description: "打开新页面，如果在钉钉环境下，会使用钉钉 API 打开新页面，体验会更友好一些",
        code: `this.utils.openPage('');`
      },
      {
        title: "this.utils.previewImage()",
        description: "图片预览，通过这个 API 我们可以实现一个简洁的图片预览效果",
        code: `this.utils.previewImage({ current: '' });`
      },
      {
        title: "this.utils.toast()",
        description: "信息提醒，会比 Dialog 对话框更加轻量，弹出后过一段时间会自动消失",
        code: `this.utils.toast({
  title: 'success', // 'success', 'warning', 'error', 'notice', 'help', 'loading'
  type: 'success',
  size: 'large',
  duration: 2000, // 毫秒, type 为 loding 时无效
});`
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box-grid-1", children: jsApiData.map((item, index2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItem_Box", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "jsApiItemTitle_Box", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItemTitle", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
            if (item.code) {
              _GM_setClipboard(item.code);
              Message.success("复制成功！");
            } else
              Message.error("复制失败，请联系开发者！");
          }, children: CopyIcon("#3c99d8") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItemDescription", children: item.description })
      ] }) }, index2);
    }) });
  };
  const InterfaceIcon = (hexColor) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        t: "1699203375797",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "9472",
        width: "15",
        height: "15",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M952.4 71.6c9.8 9.4 10.2 24.9 0.9 34.8l-84.8 84.8 27.4 27.4c73.8 73.8 73.8 193.4 0 267.2l-82.7 82.7c-28.1 28.1-73.6 28.1-101.7 0L453.8 310.9c-28.1-28.1-28.1-73.6 0-101.7l82.7-82.7c71.1-71.1 185.5-74 260.2-6.7l7.1 6.7 29.1 29.1 84.8-84.7c8.5-8.2 21.7-9.1 31.3-2.1l3.4 2.8zM862 252.5l-92.1-92.2-6-5.7c-55.8-49.6-140.6-47.1-193.4 5.7L487.8 243c-9.4 9.4-9.4 24.5 0 33.9l257.6 257.6c9.4 9.4 24.5 9.4 33.9 0l82.7-82.7c55-55 55-144.2 0-199.3zM615.7 543.7c9.8 9.4 10.2 24.9 0.9 34.8l-61.3 61.3 42.6 42.7c28.1 28.1 28.1 73.6 0 101.7l-97.4 97.4c-79.1 79.1-206.3 82.2-289.2 7.1l-7.4-7.1-12.7-12.7-84.8 84.8c-8.5 8.2-21.7 9.1-31.2 2.1l-3.5-2.9c-8.6-8.3-10.1-21.4-3.6-31.4l2.8-3.3 84.8-84.8-14.5-14.4c-81.9-81.9-81.9-214.6 0-296.5l97.4-97.4c28.1-28.1 73.6-28.1 101.7 0l49 49 61.4-61.3c8.5-8.2 21.8-9.1 31.3-2.1l3.5 2.9c8.6 8.3 10.1 21.5 3.6 31.4l-2.7 3.3-61.4 61.3 94.6 94.7 61.3-61.3c8.5-8.2 21.7-9 31.2-2l3.6 2.7z m-51.8 172.7L306.3 458.8c-9.4-9.4-24.5-9.4-33.9 0L175 556.2c-63.2 63.2-63.2 165.6 0 228.8l62.8 62.7 6.4 6.1c64 57.3 161.6 54.6 222.3-6.1l97.4-97.4c9.4-9.3 9.4-24.5 0-33.9z",
            "p-id": "9473",
            fill: hexColor
          }
        )
      }
    );
  };
  const DataSourceApiBox = () => {
    const DataSourceApiData = [
      {
        title: "表单相关 API",
        key: "1",
        content: [
          {
            apiName: "新建表单实例",
            InterfacePath: "/v1/form/saveFormData.json",
            requestType: "POST",
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
            apiName: "更新表单中指定组件值",
            InterfacePath: "/v1/form/updateFormData.json",
            requestType: "POST",
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
            apiName: "删除表单实例",
            InterfacePath: "/v1/form/deleteFormData.json",
            requestType: "POST",
            params: [{
              parameterName: "formInstId",
              description: "要删除的表单数据 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "根据表单实例 ID 查询表单实例详情",
            InterfacePath: "/v1/form/getFormDataById.json",
            requestType: "GET",
            params: [{
              parameterName: "formInstId",
              description: "要查询的表单数据 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "根据条件搜索表单实例 ID 列表",
            InterfacePath: "/v1/form/searchFormDataIds.json",
            requestType: "GET",
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
            apiName: "根据条件搜索表单实例详情列表",
            InterfacePath: "/v1/form/searchFormDatas.json",
            requestType: "GET",
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
            apiName: "获取表单定义",
            InterfacePath: "/v1/form/getFormComponentDefinationList.json",
            requestType: "GET",
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
            apiName: "获取子表单数据",
            InterfacePath: "/v1/form/listTableDataByFormInstIdAndTableId.json",
            requestType: "GET",
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
      },
      {
        title: "流程相关 API",
        key: "2",
        content: [
          {
            apiName: "流程发起",
            InterfacePath: "/v1/process/startInstance.json",
            requestType: "POST",
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
            apiName: "根据条件搜索流程实例 ID",
            InterfacePath: "/v1/process/getInstanceIds.json",
            requestType: "GET",
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
            apiName: "根据搜索条件获取实例详情列表",
            InterfacePath: "/v1/process/getInstances.json",
            requestType: "GET",
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
            apiName: "根据实例 ID 获取流程实例详情",
            InterfacePath: "/v1/process/getInstanceById.json",
            requestType: "GET",
            params: [{
              parameterName: "processInstanceId",
              description: "流程实例 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "删除流程实例",
            InterfacePath: "/v1/process/deleteInstance.json",
            requestType: "POST",
            params: [{
              parameterName: "processInstanceId",
              description: "流程实例 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "终止流程实例",
            InterfacePath: "/v1/process/terminateInstance.json",
            requestType: "POST",
            params: [{
              parameterName: "processInstanceId",
              description: "流程实例 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "执行单个任务接口",
            InterfacePath: "/v1/task/executeTask.json",
            requestType: "POST",
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
            apiName: "获取审批记录",
            InterfacePath: "/v1/process/getOperationRecords.json",
            requestType: "GET",
            params: [{
              parameterName: "processInstanceId",
              description: "流程实例 ID",
              requiredFields: "是"
            }]
          },
          {
            apiName: "流程实例更新",
            InterfacePath: "/v1/process/updateInstance.json",
            requestType: "POST",
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
      },
      {
        title: "任务中心相关 API",
        key: "3",
        content: [{
          apiName: "已提交任务",
          InterfacePath: "/v1/process/getMySubmitInApp.json",
          requestType: "GET",
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
          apiName: "待办任务",
          InterfacePath: "/v1/task/getTodoTasksInApp.json",
          requestType: "GET",
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
          apiName: "已完成任务",
          InterfacePath: "/v1/task/getDoneTasksInApp.json",
          requestType: "GET",
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
          apiName: "抄送我的任务（应用纬度）",
          InterfacePath: "/v1/task/getNotifyMeTasksInApp.json",
          requestType: "GET",
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
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DataSourceApi-content-InterfacePath", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "AppType（变量）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
          _GM_setClipboard("${window.pageConfig.appType || window.g_config.appKey}");
          Message.success("复制成功！");
        }, children: CopyIcon("#3c99d8") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Menu, { openMode: "single", defaultOpenKeys: "1", embeddable: true, children: DataSourceApiData.map((item, index2) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Menu.SubMenu, { label: item.title, children: item.content.map((content, index_content) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Menu.PopupItem, { label: content.apiName, triggerType: "click", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DataSourceApi-content box-grid-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DataSourceApi-title", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "DataSourceApi-content-apiName",
                  children: content.apiName
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "DataSourceApi-content-requestType",
                  children: content.requestType
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DataSourceApi-content-InterfacePath", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: content.InterfacePath }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
                if (content.InterfacePath) {
                  _GM_setClipboard("`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`");
                  Message.success("复制成功！");
                } else
                  Message.success("复制失败，请联系开发者！");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                _unsafeWindow.Deep.Balloon,
                {
                  trigger: CopyIcon("#3c99d8"),
                  closable: false,
                  align: "t",
                  children: "复制"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
                const { project, skeleton } = AliLowCodeEngine;
                let projectSchema = project.getSchema();
                const pl = SetDataPool(true, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, null, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false);
                const pl2 = SetDataPool(false, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, null, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false);
                projectSchema.componentsTree[0].dataSource.list.push(pl);
                projectSchema.componentsTree[0].dataSource.online.push(pl2);
                project.setSchema(projectSchema);
                const dp = skeleton.getPanel("datapool");
                dp.parent.remove(dp);
                Message.success("数据源添加成功！");
                setTimeout(() => dp.parent.add(dp), 100);
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                _unsafeWindow.Deep.Balloon,
                {
                  trigger: InterfaceIcon("#3c99d8"),
                  closable: false,
                  align: "t",
                  children: "一键创建数据源（无数据）"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
                const { project, skeleton } = AliLowCodeEngine;
                let projectSchema = project.getSchema();
                const pl = SetDataPool(true, content.InterfacePath.match(/\b([A-Za-z]+)/g)[2], content.apiName, content.requestType, `{${content.params.map((param) => {
                return `
  "${param.parameterName}":"",//${param.description}`;
              })}
}`, "`/${window.pageConfig.appType || window.g_config.appKey}" + content.InterfacePath + "`", false);
                projectSchema.componentsTree[0].dataSource.list.push(pl);
                projectSchema.componentsTree[0].dataSource.online.push(pl);
                project.setSchema(projectSchema);
                const dp = skeleton.getPanel("datapool");
                dp.parent.remove(dp);
                Message.success("数据源添加成功！");
                setTimeout(() => dp.parent.add(dp), 100);
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                _unsafeWindow.Deep.Balloon,
                {
                  trigger: InterfaceIcon("#3c99d8"),
                  closable: false,
                  align: "t",
                  children: "一键创建数据源（有数据）"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table$1, { dataSource: content.params, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "参数名", dataIndex: "parameterName" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "描述", dataIndex: "description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "必填", dataIndex: "requiredFields" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "操作", cell: (record) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", text: true, onClick: () => {
                  _GM_setClipboard(record.parameterName);
                  Message.success("复制成功！");
                }, children: "复制" });
              } })
            ] })
          ] }) }, `content_${index_content}`);
        }) }, index2);
      }) })
    ] });
  };
  const CommonCodeBox = () => {
    const CommonCodeData = [
      {
        title: "this.utils.formatter(when, value, type)",
        description: "日期格式化",
        code: `// 格式化日期，输出值为：2022-01-29
  const formatDate = this.utils.formatter('date', new Date(), 'YYYY-MM-DD');`
      },
      {
        title: "setTimeout()",
        description: "定时器（单次）",
        code: `setTimeout(()=>{

},number)`
      },
      {
        title: "setTimeout()",
        description: "定时器（循环）",
        code: `// 设置一个计数器
  let count = 0;
  const interval = setInterval(() => {
    ++count;
    if (count === 5) {
      //停止
      clearInterval(interval);
    }
  }, number);`
      },
      {
        title: "validateRule(idCardNumber)",
        description: "身份证号校验",
        code: `function validateRule(idCardNumber) {
  if (idCardNumber && idCardNumber.length === 18) {
    const coeff = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const laststr = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let total = 0;
    for(let i = 0; i < 17; ++ i) {
      total+= parseInt(idCardNumber[i], 10) * coeff[i];
    }
    return idCardNumber[17] === laststr[total % 11];
  }
  return false;
}`
      },
      {
        title: "validateRule(bankCardNumber)",
        description: "卡号校验「Luhn 算法」",
        code: `function validateRule(bankCardNumber) {
  if (bankCardNumber && /^([0-9]{16}|[0-9]{19})$/.test(bankCardNumber)) {
    let total = 0;
    bankCardNumber.split('').reverse().forEach((item, idx) => {
      const num = parseInt(item, 10);
      total += idx % 2 ? 2 * num - (num > 4 ? 9 : 0) : num;
    });
    if (total === 0) {
      return false;
    }
    return total % 10 === 0;
  }
  return false;
}`
      },
      {
        title: "validateRule(phoneNumber)",
        description: "手机号校验",
        code: `function validateRule(phoneNumber) {
  var reg = /^1d{10}$/;
  return reg.test(phoneNumber);
}`
      },
      {
        title: "maskPhoneNumber()",
        description: "手机号加密",
        code: `export function maskPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/(d{3})d{4}(d{4})/, '$1****$2');
}`
      },
      {
        title: "fieldsValidate()",
        description: "表单必填校验「JS触发事件」",
        code: `/**
* 表单必填校验js事件
*/
export async function onClick() {
  //组件id集合,子表视作一个元素
  const fieldList = [];

  // 调用表单校验函数 
  this.fieldsValidate(fieldList).then(errorList => {
    setTimeout(() => {
      if (errorList.length > 0) {
        // 表单校验未通过，你可以做一些数据错误提示
        return;
      };
      // 表单校验通过，你的后续业务逻辑由此往下写
      this.utils.toast({
        title: '表单校验通过',
        type: 'success',
      });
    });
  }, 0);
}

// fieldList：Array，需要校验组件的唯一标识集合
export async function fieldsValidate(fieldList = []) {
  const result = [];
  for (let i = 0; i < fieldList.length; i++) {
    await this.$(fieldList[i]).validate((errors, values) => {
      if (!errors) { return };
      result.push({
        fieldId: fieldList[i], // 组件标识
        errors: this.utils.isMobile() ? errors.errors[fieldList[i]].errors : errors[fieldList[i]].errors // 校验错误信息
      });
    });
  };
  return result;
}`
      },
      {
        title: "vConsole",
        description: "打开需要调试页面的动作面板，在最上方直接输入下面代码。访问进行调试。 注意调试完成后删除该代码。",
        code: `const vConsole = 'https://g.alicdn.com/code/lib/vConsole/3.11.2/vconsole.min.js';const js = document.createElement('script');js.src = vConsole;document.body.append(js);js.onload = function() {
  window.vConsole = new window.VConsole();};`
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "box-grid-1", children: CommonCodeData.map((item, index2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItem_Box", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "jsApiItemTitle_Box", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItemTitle", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiIcon_Box", onClick: () => {
            if (item.code) {
              _GM_setClipboard(item.code);
              Message.success("复制成功！");
            } else {
              Message.error("复制失败，请联系开发者！");
            }
          }, children: CopyIcon("#3c99d8") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "jsApiItemDescription", children: item.description })
      ] }) }, index2);
    }) });
  };
  const DingTalkIcon = (hexColor) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        t: "1699234585631",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "10452",
        width: "15",
        height: "15",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M511.957333 42.666667a469.333333 469.333333 0 1 0 469.333334 469.333333 467.968 467.968 0 0 0-469.333334-469.333333z m217.6 401.066666a32.341333 32.341333 0 0 1-8.533333 17.066667c-21.333333 42.666667-68.266667 123.733333-68.266667 123.733333l-12.8 25.6h72.533334l-136.533334 183.466667 29.866667-123.733333h-55.466667l21.333334-81.066667a396.202667 396.202667 0 0 0-55.466667 17.066667c-4.266667 0-8.533333 4.266667-12.8 4.266666a134.442667 134.442667 0 0 1-72.533333-38.4s-25.6-21.333333-21.333334-34.133333c0-4.266667 4.266667-4.266667 8.533334-8.533333a329.344 329.344 0 0 1 64-8.533334h12.8c38.4-4.266667 59.733333-8.533333 59.733333-8.533333h-51.2a691.2 691.2 0 0 1-93.866667-4.266667 131.968 131.968 0 0 1-72.533333-93.866666v-12.8c4.266667-4.266667 4.266667-4.266667 8.533333-4.266667a25.6 25.6 0 0 1 17.066667 4.266667c21.333333 4.266667 81.066667 21.333333 183.466667 38.4h8.533333s-200.533333-59.733333-213.333333-76.8a244.736 244.736 0 0 1-34.133334-123.733334 9.173333 9.173333 0 0 1 8.533334-8.533333h4.266666s149.333333 68.266667 247.466667 102.4a240.597333 240.597333 0 0 0 51.2 17.066667c64 34.133333 119.466667 55.466667 110.933333 93.866666z",
            "p-id": "10453",
            fill: hexColor
          }
        )
      }
    );
  };
  const GithubIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        t: "1699245509391",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "4018",
        width: "15",
        height: "15",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M511.968 73.152q119.424 0 220.288 58.848t159.712 159.712 58.848 220.288q0 143.424-83.712 258.016t-216.288 158.56q-15.424 2.848-22.848-4t-7.424-17.152q0-1.728 0.288-43.712t0.288-76.864q0-55.424-29.728-81.152 32.576-3.424 58.56-10.272t53.728-22.272 46.272-38.016 30.272-60 11.712-86.016q0-68-45.152-117.728 21.152-52-4.576-116.576-16-5.152-46.272 6.272t-52.576 25.152l-21.728 13.728q-53.152-14.848-109.728-14.848t-109.728 14.848q-9.152-6.272-24.288-15.424t-47.712-22.016-48.576-7.712q-25.728 64.576-4.576 116.576-45.152 49.728-45.152 117.728 0 48.576 11.712 85.728t30.016 60 46.016 38.272 53.728 22.272 58.56 10.272q-22.272 20.576-28 58.848-12 5.728-25.728 8.576t-32.576 2.848-37.44-12.288-31.712-35.712q-10.848-18.272-27.712-29.728t-28.288-13.728l-11.424-1.728q-12 0-16.576 2.56t-2.848 6.56 5.152 8 7.424 6.848l4 2.848q12.576 5.728 24.864 21.728t18.016 29.152l5.728 13.152q7.424 21.728 25.152 35.136t38.272 17.152 39.712 4 31.712-2.016l13.152-2.272q0 21.728 0.288 50.56t0.288 31.136q0 10.272-7.424 17.152t-22.848 4q-132.576-44-216.288-158.56t-83.712-258.016q0-119.424 58.848-220.288t159.712-159.712 220.288-58.848zM239.392 703.424q1.728-4-4-6.848-5.728-1.728-7.424 1.152-1.728 4 4 6.848 5.152 3.424 7.424-1.152zM257.12 722.848q4-2.848-1.152-9.152-5.728-5.152-9.152-1.728-4 2.848 1.152 9.152 5.728 5.728 9.152 1.728zM274.272 748.576q5.152-4 0-10.848-4.576-7.424-9.728-3.424-5.152 2.848 0 10.272t9.728 4zM298.272 772.576q4.576-4.576-2.272-10.848-6.848-6.848-11.424-1.728-5.152 4.576 2.272 10.848 6.848 6.848 11.424 1.728zM330.848 786.848q1.728-6.272-7.424-9.152-8.576-2.272-10.848 4t7.424 8.576q8.576 3.424 10.848-3.424zM366.848 789.728q0-7.424-9.728-6.272-9.152 0-9.152 6.272 0 7.424 9.728 6.272 9.152 0 9.152-6.272zM399.968 784q-1.152-6.272-10.272-5.152-9.152 1.728-8 8.576t10.272 4.576 8-8z",
            "p-id": "4019"
          }
        )
      }
    );
  };
  const GreasyForkIcon = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        t: "1699245675256",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "6894",
        width: "15",
        height: "15",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M28.16 514.56c0 268.8 217.6 486.4 486.4 486.4s486.4-217.6 486.4-486.4-217.6-486.4-486.4-486.4-486.4 217.6-486.4 486.4z",
              "p-id": "6895"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M440.32 258.048c139.264 140.288 142.336 144.384 135.68 193.024-2.048 16.384 0 28.672 0 29.696 0 40.96 138.752 164.352 218.624 253.952 39.424 44.032 64 78.848 53.248 109.056-5.12 14.336-17.92 27.648-34.304 31.744-32.768 8.192-67.072-26.112-117.76-78.336-145.408-150.016-197.632-204.8-251.392-194.56-13.824 2.56-11.264 7.68-25.6 8.704-35.84 2.56-80.896-34.304-193.024-146.432C121.856 360.448 91.648 322.56 98.304 304.128c7.68-19.456 26.112-5.12 113.152 79.872l105.472 103.424 29.184-28.672 29.184-28.672-103.424-103.424c-68.608-69.632-97.28-106.496-87.04-112.64 10.752-6.656 52.736 27.648 117.248 90.624L401.92 404.48l30.208-28.672 29.184-30.208-99.84-100.352C274.432 157.184 250.88 115.2 287.744 115.2c5.12 0 73.728 64.512 152.576 142.848z",
              fill: "#FFFFFF",
              "p-id": "6896"
            }
          )
        ]
      }
    );
  };
  const About = () => {
    const { Text: Text2 } = Typography$1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "about_box", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "当前版本：" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text2, { code: true, children: "Version 2.2.1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "作者：" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text2, { code: true, children: "Navcoo.Li" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { style: { cursor: "pointer" }, href: "https://applink.dingtalk.com/page/profile?phone=li78080114", children: DingTalkIcon("#1296db") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "项目地址：" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { style: { cursor: "pointer" }, href: "https://github.com/4095/yida-add-tampermonkey", children: GithubIcon() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { style: { cursor: "pointer" }, href: "https://greasyfork.org/zh-CN/scripts/474556-%E5%AE%9C%E6%90%AD", children: GreasyForkIcon() })
      ] })
    ] });
  };
  class SelectFormBox extends React.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        tableObj: []
      });
      __publicField(this, "field", new Field(this));
      __publicField(this, "openDownloadDialog", (blob, fileName) => {
        if (typeof blob == "object" && blob instanceof Blob) {
          blob = URL.createObjectURL(blob);
        }
        const aLink = document.createElement("a");
        aLink.href = blob;
        aLink.download = fileName || "";
        let event;
        event = document.createEvent("MouseEvents");
        event.initMouseEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        aLink.dispatchEvent(event);
      });
      __publicField(this, "workbook2blob", (workbook) => {
        const wopts = {
          // 要生成的文件类型
          bookType: "xlsx",
          bookSST: false,
          type: "binary"
        };
        const wbout = XLSX__namespace.write(workbook, wopts);
        function s2ab(s) {
          const buf = new ArrayBuffer(s.length);
          const view = new Uint8Array(buf);
          for (let i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 255;
          return buf;
        }
        const blob = new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
        });
        return blob;
      });
    }
    render() {
      const { init, validate } = this.field;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { style: { margin: "8px 0" }, children: "生成表格" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                label: "AppKey",
                className: "input-style",
                ...init("appKey", {
                  initValue: _unsafeWindow.pageConfig.appType || _unsafeWindow.g_config.appKey,
                  rules: [{
                    required: true,
                    message: "AppKey 不能为空！"
                  }]
                })
              }
            ),
            this.field.getError("appKey") ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "red"
            }, children: this.field.getError("appKey").join(",") }) : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "FormUuid", className: "input-style", ...init("formUuid", {
              rules: [{
                required: true,
                message: "FormUuid 不能为空！"
              }]
            }) }),
            this.field.getError("formUuid") ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "red"
            }, children: this.field.getError("formUuid").join(",") }) : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1, { ...init("process", { valueName: "checked" }), children: "流程" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Submit, { style: { width: "100%" }, onClick: () => {
            validate();
            let tableObj = [];
            fetch(`/${this.field.getValue("appKey")}/query/formdesign/getLatestFormWithNavNew.json?formUuid=${this.field.getValue("formUuid")}`).then((res) => res.json()).then(({ content: { pages } }) => {
              const allComponent = pages[0].componentsTree[0].children[1].children[0].children;
              const formComponentList = ["TextField", "TextareaField", "NumberField", "RateField", "RadioField", "CheckboxField", "DateField", "CascadeDateField", "AttachmentField", "EmployeeField", "ImageField", "SelectField", "MultiSelectField", "CascadeSelectField", "PageSection", "CountrySelectField", "DepartmentSelectField", "AddressField", "LocationField", "AssociationFormField", "DigitalSignatureField", "SerialNumberField", "CompanyField"];
              const recursiveSearch = (obj2) => {
                if (typeof obj2 === "object") {
                  if (obj2.hasOwnProperty("componentName")) {
                    if (formComponentList.includes(obj2.componentName)) {
                      try {
                        tableObj.push({
                          "dataKey": obj2.props.fieldId,
                          "title": obj2.props.label.zh_CN
                        });
                      } catch (e2) {
                      }
                    }
                    if (obj2.componentName === "TableField")
                      return;
                  }
                  for (let key in obj2) {
                    if (obj2.hasOwnProperty(key)) {
                      recursiveSearch(obj2[key]);
                    }
                  }
                }
              };
              recursiveSearch(allComponent);
              this.setState({
                tableObj
              });
            });
          }, children: "查询" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: { margin: "12px 0" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "center", flexDirection: "row-reverse" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "primary", text: true, onClick: () => {
          const sheetHeader = [
            {
              title: "名称",
              value: "title"
            },
            {
              title: "唯一标识",
              value: "dataKey"
            }
          ];
          const result = [];
          for (let i = 0; i < this.state.tableObj.length; i++) {
            let item = {};
            for (let j = 0; j < sheetHeader.length; j++) {
              item[sheetHeader[j].title] = this.state.tableObj[i][sheetHeader[j].value];
            }
            result.push(item);
          }
          const ws = XLSX__namespace.utils.json_to_sheet(result);
          ws["!cols"] = [{ wch: 40 }, { wch: 40 }];
          const wb = XLSX__namespace.utils.book_new();
          XLSX__namespace.utils.book_append_sheet(wb, ws, "【表单数据】");
          const workbookBlob = this.workbook2blob(wb);
          const today = /* @__PURE__ */ new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, "0");
          const day = String(today.getDate()).padStart(2, "0");
          this.openDownloadDialog(
            workbookBlob,
            `表单数据-${year}-${month}-${day}.xlsx`
          );
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { type: "download" }),
          "下载"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table$1, { dataSource: this.state.tableObj, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "名称", dataIndex: "title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table$1.Column, { title: "唯一标识", dataIndex: "dataKey" })
        ] })
      ] });
    }
  }
  const YidaToolSkeleton = () => {
    _GM_addStyle(`
    .next-tabs-tabpane {
        display: none;
        min-height: 50px;
        outline: none !important;
        outline-offset: 0 !important;
        -webkit-box-shadow: none;
        box-shadow: none;
        padding: 0 12px;
    }`);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(_unsafeWindow.Deep.Tab, { shape: "text", size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "组件", children: ComponentsBox() }, "1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "JS-API", children: JsApiBox() }, "2"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "跨应用数据源API", children: DataSourceApiBox() }, "3"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "常用代码", children: CommonCodeBox() }, "4"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "查询表单", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectFormBox, {}) }, "5"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(_unsafeWindow.Deep.Tab.Item, { title: "关于我们", children: About() }, "6")
    ] });
  };
  const YidaToolIcon = (hexColor) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        t: "1699167994750",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "6200",
        width: "20",
        height: "20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M960.7 513.4c0-249.5-199.6-449.2-449.2-449.2C262 64.2 62.3 263.8 62.3 513.4c0 249.5 199.6 449.2 449.2 449.2 104.8 0 199.6-34.9 279.5-99.8 10-10 10-20 5-29.9-10-10-20-10-29.9-5-69.9 54.9-159.7 89.8-254.5 89.8-224.6 0-404.3-179.7-404.3-404.3 0-224.6 179.7-404.3 404.3-404.3 224.6 0 404.3 179.7 404.3 404.3 0 74.9-20 149.7-59.9 214.6-5 10-5 25 5 29.9 10 5 25 5 29.9-5 44.8-74.8 69.8-154.7 69.8-239.5z m0 0",
              "p-id": "6201",
              fill: hexColor
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M802 346.6L680.4 225c-9.5-9.9-22.5-15.6-36.2-15.6-13.7-0.1-26.8 5.4-36.4 15.3L214 618.4c-15.6 16.2-15.5 42 0.3 58l137.4 137.4c15.8 15.8 41.2 14.7 56.9-0.9l393.7-393.8c9.8-9.5 15.3-22.7 15.3-36.4-0.1-13.6-5.7-26.7-15.6-36.1zM383.2 774.9L252.9 644.7c-2.3-2.3-2.3-6.9 0-9.2l108.5-108.6 69.9 69.9c6.9 6.9 16.1 7 23 0.1 6.8-6.8 6.8-16-0.1-23L384.3 504l68.5-68.5 69.9 69.9c6.9 6.9 16.1 7 23 0.1 6.8-6.8 6.8-16-0.1-23l-69.9-69.9 68.5-68.5 69.9 69.9c6.9 6.9 16.1 7 23 0.1 6.8-6.8 6.8-16-0.2-23L567 321.2l59.2-59.2c6.8-6.8 16-6.8 23 0.1l116.4 116.4c6.9 6.9 7 16.1 0.1 23L392.3 774.9c-2.3 2.3-6.9 2.3-9.1 0z m0 0",
              "p-id": "6202",
              fill: hexColor
            }
          )
        ]
      }
    );
  };
  const YidaTools = () => {
    AliLowCodeEngine.skeleton.add({
      area: "leftArea",
      type: "PanelDock",
      name: "yidaTool",
      content: YidaToolSkeleton(),
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
    AliLowCodeEngine.designerCabin.addBuiltinComponentAction({
      name: "Copy",
      content: {
        icon: YidaToolIcon("#ffffff"),
        title: "复制唯一标识",
        action(node) {
          const fieldId = ((node == null ? void 0 : node.propsData) == null ? void 0 : node.propsData.fieldId) || node.id;
          _GM_setClipboard(fieldId);
          Message.success(`唯一标识：${fieldId}`);
        }
      },
      important: true,
      condition: true
    });
    document.getElementsByClassName("lc-left-area-bottom")[0].children[0].style.display = "block";
    console.log("Yida+加载完成！");
  };
  const App = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (_unsafeWindow.LeGao && _unsafeWindow.AliLowCodeEngine && _unsafeWindow.__VcDeepYidaUtils__) {
        count++;
        YidaTools();
      }
      if (count) {
        clearInterval(interval);
      }
    }, 100);
  };
  client.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  ).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );

})(React, ReactDOM, xlsx);