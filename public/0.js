webpackJsonp([0],Array(406).concat([
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Auth/Login.vue": 450,
	"./Auth/Register.vue": 461,
	"./Layout/Layout.vue": 468,
	"./Layout/components/AppMain.vue": 428,
	"./Layout/components/Navbar.vue": 424,
	"./Layout/components/Sidebar/SidebarItem.vue": 427,
	"./Layout/components/Sidebar/index.vue": 426,
	"./NotFound.vue": 501,
	"./Profile/Index.vue": 509,
	"./Project/Create.vue": 516,
	"./Project/Edit.vue": 525,
	"./Project/List.vue": 533,
	"./Project/View.vue": 545,
	"./Project/components/ListTable.vue": 431,
	"./Project/components/Revision.vue": 433,
	"./Unauthorized.vue": 621
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 406;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(563),
    getValue = __webpack_require__(566);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Validation = function () {
  function Validation() {
    _classCallCheck(this, Validation);
  }

  _createClass(Validation, null, [{
    key: "text",
    value: function text(value) {
      var regex = /^[a-z0-9 ,.'\-!#$%&*+/=?^_`{}()]+$/i;
      return regex.test(value);
    }
  }, {
    key: "date",
    value: function date(value) {
      return Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime()) || __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).isValid();
    }
  }, {
    key: "name",
    value: function name(value) {
      var regex = /^[a-z ,.'-]+$/i;
      return regex.test(value);
    }
  }, {
    key: "username",
    value: function username(value) {
      var regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
      return regex.test(value);
    }
  }, {
    key: "email",
    value: function email(value) {
      var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      return regex.test(value);
    }
  }, {
    key: "password",
    value: function password(value) {
      var regex = /^(?=.*[A-Za-z])[A-Za-z\d!_\-?@$*^]{6,}/;
      return regex.test(value);
    }
  }, {
    key: "registerPassword",
    value: function registerPassword(value) {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!_\-?@$*^]{8,}/;
      return regex.test(value);
    }
  }]);

  return Validation;
}();

/* harmony default export */ __webpack_exports__["a"] = (Validation);

/***/ }),
/* 409 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(553),
    listCacheDelete = __webpack_require__(554),
    listCacheGet = __webpack_require__(555),
    listCacheHas = __webpack_require__(556),
    listCacheSet = __webpack_require__(557);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(434);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(576);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(437),
    baseAssignValue = __webpack_require__(438);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(456)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(458)
/* template */
var __vue_template__ = __webpack_require__(459)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b2975b12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\LangSelect\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2975b12", Component.options)
  } else {
    hotAPI.reload("data-v-b2975b12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407),
    root = __webpack_require__(217);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(439),
    baseKeys = __webpack_require__(590),
    isArrayLike = __webpack_require__(443);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 418 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(222);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)(module)))

/***/ }),
/* 420 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(598),
    stubArray = __webpack_require__(445);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(602),
    Map = __webpack_require__(416),
    Promise = __webpack_require__(603),
    Set = __webpack_require__(604),
    WeakMap = __webpack_require__(605),
    baseGetTag = __webpack_require__(219),
    toSource = __webpack_require__(436);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(608);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(473)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(475)
/* template */
var __vue_template__ = __webpack_require__(487)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9fb6b6de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Layout\\components\\Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fb6b6de", Component.options)
  } else {
    hotAPI.reload("data-v-9fb6b6de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateTitle;
function generateTitle(title) {
  var hasKey = this.$te("page." + title);
  var translatedTitle = this.$t("page." + title);

  if (hasKey) {
    return translatedTitle;
  }
  return title;
}

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(488)
/* template */
var __vue_template__ = __webpack_require__(496)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Layout\\components\\Sidebar\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-373ba83e", Component.options)
  } else {
    hotAPI.reload("data-v-373ba83e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(489)
/* template */
var __vue_template__ = __webpack_require__(490)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Layout\\components\\Sidebar\\SidebarItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a224bbe", Component.options)
  } else {
    hotAPI.reload("data-v-1a224bbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(497)
/* template */
var __vue_template__ = __webpack_require__(498)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Layout\\components\\AppMain.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a16c049", Component.options)
  } else {
    hotAPI.reload("data-v-0a16c049", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(58)(module)))

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(520)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(522)
/* template */
var __vue_template__ = __webpack_require__(523)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\MultiTags\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30413f41", Component.options)
  } else {
    hotAPI.reload("data-v-30413f41", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(543)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\components\\ListTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fd2c814c", Component.options)
  } else {
    hotAPI.reload("data-v-fd2c814c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(536)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(538)
/* template */
var __vue_template__ = __webpack_require__(539)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-06883f5f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Status\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06883f5f", Component.options)
  } else {
    hotAPI.reload("data-v-06883f5f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(549)
/* template */
var __vue_template__ = __webpack_require__(619)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\components\\Revision.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bc437c1", Component.options)
  } else {
    hotAPI.reload("data-v-5bc437c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 434 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(219),
    isObject = __webpack_require__(409);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 436 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(438),
    eq = __webpack_require__(434);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(581);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(583),
    isArguments = __webpack_require__(584),
    isArray = __webpack_require__(221),
    isBuffer = __webpack_require__(440),
    isIndex = __webpack_require__(587),
    isTypedArray = __webpack_require__(588);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(217),
    stubFalse = __webpack_require__(586);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)(module)))

/***/ }),
/* 441 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 442 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(435),
    isLength = __webpack_require__(441);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(439),
    baseKeysIn = __webpack_require__(593),
    isArrayLike = __webpack_require__(443);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 445 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(447),
    getPrototype = __webpack_require__(448),
    getSymbols = __webpack_require__(421),
    stubArray = __webpack_require__(445);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 447 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(442);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(447),
    isArray = __webpack_require__(221);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(451)
  __webpack_require__(453)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(455)
/* template */
var __vue_template__ = __webpack_require__(460)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-026db962"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Auth\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-026db962", Component.options)
  } else {
    hotAPI.reload("data-v-026db962", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(452);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("3181b4d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-026db962\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-026db962\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #293545 inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: #293545;\n  border-radius: 5px;\n  color: #454545;\n}\n", ""]);

// exports


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(454);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("50f08c79", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-026db962\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-026db962\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.login-container[data-v-026db962] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container .login-form[data-v-026db962] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .svg-container[data-v-026db962] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-026db962] {\n      font-size: 20px;\n}\n.login-container .title-container[data-v-026db962] {\n    position: relative;\n}\n.login-container .title-container .title[data-v-026db962] {\n      font-size: 26px;\n      font-weight: 400;\n      color: #eee;\n      margin: 0px auto 40px auto;\n      text-align: center;\n      font-weight: bold;\n}\n.login-container .title-container .set-language[data-v-026db962] {\n      color: #fff;\n      position: absolute;\n      top: 5px;\n      right: 0px;\n}\n.login-container .show-pwd[data-v-026db962] {\n    position: absolute;\n    right: 13px;\n    line-height: 47px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.login-container .el-button[data-v-026db962] {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_validator__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LangSelect__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LangSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_LangSelect__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { LangSelect: __WEBPACK_IMPORTED_MODULE_1__components_LangSelect___default.a },
  name: "login",
  data: function data() {
    var _this = this;

    var validateUsername = function validateUsername(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].username(value)) {
        callback(new Error(_this.$t("form.error.invalidUsername")));
      } else {
        callback();
      }
    };
    var validatePassword = function validatePassword(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].password(value)) {
        callback(new Error(_this.$t("form.error.invalidPassword")));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: validateUsername }],
        password: [{ required: true, trigger: "blur", validator: validatePassword }]
      },
      showPwd: false,
      loading: false
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$refs.loginForm.validate(function (valid) {
        if (!valid) {
          return false;
        }

        _this2.$store.dispatch("LoginByUsername", _this2.loginForm).then(function () {
          _this2.$router.push({ path: "/" });
        }).catch(function (error) {
          var errData = error.response.data;
          _this2.$message({
            type: "error",
            message: _this2.$t("apiResponse." + errData.error)
          });
        });
      });
    },
    register: function register() {
      this.$router.push({ path: "/register" });
    }
  }
});

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("50e510b5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2975b12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2975b12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.international-icon[data-v-b2975b12] {\n  font-size: 20px;\n  cursor: pointer;\n  vertical-align: -5px !important;\n}\n", ""]);

// exports


/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    language: function language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    handleSetLanguage: function handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
      this.$message({
        message: this.$t("notification.switchLanguageSuccess"),
        type: "success"
      });
    }
  }
});

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dropdown",
    {
      staticClass: "international",
      attrs: { trigger: "click" },
      on: { command: _vm.handleSetLanguage }
    },
    [
      _c("i", { staticClass: "international-icon fa fa-globe" }),
      _vm._v(" "),
      _c(
        "el-dropdown-menu",
        { attrs: { slot: "dropdown" }, slot: "dropdown" },
        [
          _c(
            "el-dropdown-item",
            { attrs: { command: "vn", disabled: _vm.language === "vn" } },
            [_vm._v("Tiếng Việt")]
          ),
          _vm._v(" "),
          _c(
            "el-dropdown-item",
            { attrs: { command: "en", disabled: _vm.language === "en" } },
            [_vm._v("English")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2975b12", module.exports)
  }
}

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-container" },
    [
      _c(
        "el-form",
        {
          ref: "loginForm",
          staticClass: "login-form",
          attrs: {
            autoComplete: "on",
            model: _vm.loginForm,
            rules: _vm.loginRules,
            "label-position": "left"
          }
        },
        [
          _c(
            "div",
            { staticClass: "title-container" },
            [
              _c("h3", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.$t("form.loginTitle")))
              ]),
              _vm._v(" "),
              _c("lang-select", { staticClass: "set-language" })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c("i", { staticClass: "svg-container fa fa-user" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "username",
                  type: "text",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.username")
                },
                model: {
                  value: _vm.loginForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "username", $$v)
                  },
                  expression: "loginForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c("i", { staticClass: "svg-container fa fa-unlock-alt" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "password",
                  type: _vm.showPwd ? "text" : "password",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.password")
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  }
                },
                model: {
                  value: _vm.loginForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "password", $$v)
                  },
                  expression: "loginForm.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "show-pwd",
                  on: {
                    click: function($event) {
                      _vm.showPwd = !_vm.showPwd
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: [_vm.showPwd ? "fa-eye-slash" : "fa-eye"]
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "pt-3" },
            [
              _c(
                "el-col",
                { staticClass: "pr-2", attrs: { span: 12 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      nativeOn: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("form.login")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { staticClass: "pl-2", attrs: { span: 12 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      nativeOn: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.register($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("form.register")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-026db962", module.exports)
  }
}

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(462)
  __webpack_require__(464)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(466)
/* template */
var __vue_template__ = __webpack_require__(467)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d094c3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Auth\\Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d094c3a", Component.options)
  } else {
    hotAPI.reload("data-v-5d094c3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(463);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("a5d84ec6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d094c3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d094c3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* reset element-ui css */\n.register-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.register-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.register-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #293545 inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.register-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: #293545;\n  border-radius: 5px;\n  color: #454545;\n}\n", ""]);

// exports


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(465);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("36286ca7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d094c3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Register.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d094c3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.register-container[data-v-5d094c3a] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.register-container .register-form[data-v-5d094c3a] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 90px auto;\n}\n.register-container .svg-container[data-v-5d094c3a] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.register-container .svg-container_register[data-v-5d094c3a] {\n      font-size: 20px;\n}\n.register-container .title-container[data-v-5d094c3a] {\n    position: relative;\n}\n.register-container .title-container .title[data-v-5d094c3a] {\n      font-size: 26px;\n      font-weight: 400;\n      color: #eee;\n      margin: 0px auto 40px auto;\n      text-align: center;\n      font-weight: bold;\n}\n.register-container .title-container .set-language[data-v-5d094c3a] {\n      color: #fff;\n      position: absolute;\n      top: 5px;\n      right: 0px;\n}\n.register-container .show-pwd[data-v-5d094c3a] {\n    position: absolute;\n    right: 13px;\n    line-height: 47px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.register-container .el-button[data-v-5d094c3a] {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_validator__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LangSelect__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LangSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_LangSelect__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { LangSelect: __WEBPACK_IMPORTED_MODULE_1__components_LangSelect___default.a },
  name: "register",
  data: function data() {
    var _this = this;

    var validateName = function validateName(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].name(value)) {
        callback(new Error(_this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
    var validateUsername = function validateUsername(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].username(value)) {
        callback(new Error(_this.$t("form.error.invalidUsername")));
      } else {
        callback();
      }
    };
    var validateEmail = function validateEmail(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].email(value)) {
        callback(new Error(_this.$t("form.error.invalidEmail")));
      } else {
        callback();
      }
    };
    var validatePassword = function validatePassword(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].registerPassword(value)) {
        callback(new Error(_this.$t("form.rule.password")));
      } else {
        callback();
      }
      _this.$refs.registerForm.validateField("passwordConfirmation");
    };
    var validatePasswordConfirmation = function validatePasswordConfirmation(rule, value, callback) {
      if (_this.registerForm.password != value) {
        callback(new Error(_this.$t("form.error.invalidPasswordConfirmation")));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      registerRules: {
        name: [{ required: true, trigger: "blur", validator: validateName }],
        username: [{ required: true, trigger: "blur", validator: validateUsername }],
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
        password: [{ required: true, trigger: "blur", validator: validatePassword }],
        passwordConfirmation: [{
          required: true,
          trigger: "blur",
          validator: validatePasswordConfirmation
        }]
      },
      showPwd: false,
      showPwdConfirm: false,
      loading: false
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$refs.registerForm.validate(function (valid) {
        if (!valid) {
          return false;
        }

        _this2.loading = true;
        _this2.$store.dispatch("RegisterUser", _this2.registerForm).then(function () {
          _this2.loading = false;
          _this2.$router.push({ path: "/" });
        }).catch(function () {
          _this2.loading = false;
        });
      });
    },
    login: function login() {
      this.$router.push({ path: "/login" });
    }
  }
});

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "register-container" },
    [
      _c(
        "el-form",
        {
          ref: "registerForm",
          staticClass: "register-form",
          attrs: {
            autoComplete: "on",
            model: _vm.registerForm,
            rules: _vm.registerRules,
            "label-position": "left"
          }
        },
        [
          _c(
            "div",
            { staticClass: "title-container" },
            [
              _c("h3", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.$t("form.registerTitle")))
              ]),
              _vm._v(" "),
              _c("lang-select", { staticClass: "set-language" })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "name" } },
            [
              _c("i", { staticClass: "svg-container fa fa-id-card" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "name",
                  type: "text",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.name")
                },
                model: {
                  value: _vm.registerForm.name,
                  callback: function($$v) {
                    _vm.$set(_vm.registerForm, "name", $$v)
                  },
                  expression: "registerForm.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c("i", { staticClass: "svg-container fa fa-user" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "username",
                  type: "text",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.username")
                },
                model: {
                  value: _vm.registerForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.registerForm, "username", $$v)
                  },
                  expression: "registerForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "email" } },
            [
              _c("i", { staticClass: "svg-container fa fa-at" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "email",
                  type: "text",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.email")
                },
                model: {
                  value: _vm.registerForm.email,
                  callback: function($$v) {
                    _vm.$set(_vm.registerForm, "email", $$v)
                  },
                  expression: "registerForm.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c("i", { staticClass: "svg-container fa fa-unlock-alt" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "password",
                  type: _vm.showPwd ? "text" : "password",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.password")
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  }
                },
                model: {
                  value: _vm.registerForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.registerForm, "password", $$v)
                  },
                  expression: "registerForm.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "show-pwd",
                  on: {
                    click: function($event) {
                      _vm.showPwd = !_vm.showPwd
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: [_vm.showPwd ? "fa-eye-slash" : "fa-eye"]
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "passwordConfirmation" } },
            [
              _c("i", { staticClass: "svg-container fa fa-unlock-alt" }),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "passwordConfirmation",
                  type: _vm.showPwdConfirm ? "text" : "password",
                  autoComplete: "on",
                  placeholder: _vm.$t("form.passwordConfirmation")
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  }
                },
                model: {
                  value: _vm.registerForm.passwordConfirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.registerForm, "passwordConfirmation", $$v)
                  },
                  expression: "registerForm.passwordConfirmation"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "show-pwd",
                  on: {
                    click: function($event) {
                      _vm.showPwdConfirm = !_vm.showPwdConfirm
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: [_vm.showPwdConfirm ? "fa-eye-slash" : "fa-eye"]
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "pt-3" },
            [
              _c(
                "el-col",
                { staticClass: "pr-2", attrs: { span: 12 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      nativeOn: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("form.register")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { staticClass: "pl-2", attrs: { span: 12 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      nativeOn: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.login($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("form.login")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d094c3a", module.exports)
  }
}

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(469)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(471)
/* template */
var __vue_template__ = __webpack_require__(500)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53f29f7f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Layout\\Layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53f29f7f", Component.options)
  } else {
    hotAPI.reload("data-v-53f29f7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(470);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("13091685", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53f29f7f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53f29f7f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.app-wrapper[data-v-53f29f7f] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.app-wrapper[data-v-53f29f7f]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n", ""]);

// exports


/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_ResizeHandler__ = __webpack_require__(499);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "layout",
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0__components__["b" /* Navbar */],
    Sidebar: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* Sidebar */],
    AppMain: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* AppMain */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_ResizeHandler__["a" /* default */]],
  computed: {
    sidebar: function sidebar() {
      return this.$store.state.app.sidebar;
    },
    device: function device() {
      return this.$store.state.app.device;
    },
    classObj: function classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  created: function created() {
    this.$store.dispatch("SetProjectStatus");
  }
});

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Navbar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_index_vue__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Sidebar_index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Sidebar_index_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppMain__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppMain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AppMain__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__AppMain___default.a; });






/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(474);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("5015b041", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9fb6b6de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9fb6b6de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.navbar-container[data-v-9fb6b6de] {\n  height: 50px;\n  line-height: 50px;\n  border-radius: 0px !important;\n}\n.navbar-container .hamburger-container[data-v-9fb6b6de] {\n    line-height: 58px;\n    height: 50px;\n    float: left;\n    padding: 0 10px;\n    cursor: pointer;\n}\n.navbar-container .breadcrumb-container[data-v-9fb6b6de] {\n    float: left;\n}\n.navbar-container .errLog-container[data-v-9fb6b6de] {\n    display: inline-block;\n    vertical-align: top;\n}\n.navbar-container .right-menu[data-v-9fb6b6de] {\n    float: right;\n    height: 100%;\n}\n.navbar-container .right-menu[data-v-9fb6b6de]:focus {\n      outline: none;\n}\n.navbar-container .right-menu .right-menu-item[data-v-9fb6b6de] {\n      display: inline-block;\n      margin: 0 8px;\n}\n.navbar-container .right-menu .international[data-v-9fb6b6de] {\n      vertical-align: top;\n}\n.navbar-container .right-menu .theme-switch[data-v-9fb6b6de] {\n      vertical-align: 15px;\n}\n.navbar-container .right-menu .avatar-container[data-v-9fb6b6de] {\n      height: 50px;\n      margin-right: 30px;\n      vertical-align: top;\n}\n.navbar-container .right-menu .avatar-container .avatar-wrapper[data-v-9fb6b6de] {\n        cursor: pointer;\n        margin-top: 5px;\n        position: relative;\n}\n.navbar-container .right-menu .avatar-container .avatar-wrapper .el-icon-caret-bottom[data-v-9fb6b6de] {\n          position: absolute;\n          right: -20px;\n          top: 25px;\n          font-size: 12px;\n}\n", ""]);

// exports


/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hamburger__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hamburger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hamburger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LangSelect__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LangSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_LangSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_avatar__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_avatar__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Breadcrumb: __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb___default.a,
    Hamburger: __WEBPACK_IMPORTED_MODULE_2__components_Hamburger___default.a,
    LangSelect: __WEBPACK_IMPORTED_MODULE_3__components_LangSelect___default.a,
    Avatar: __WEBPACK_IMPORTED_MODULE_4_vue_avatar___default.a
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(["sidebar", "username"])),
  methods: {
    toggleSideBar: function toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
    logout: function logout() {
      var _this = this;

      this.$store.dispatch("LogOut").then(function () {
        _this.$router.push({ path: "/login" });
      });
    }
  }
});

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(477)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(479)
/* template */
var __vue_template__ = __webpack_require__(480)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-766392a0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Breadcrumb\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-766392a0", Component.options)
  } else {
    hotAPI.reload("data-v-766392a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(478);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("5fdb0b00", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-766392a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-766392a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.app-breadcrumb.el-breadcrumb[data-v-766392a0] {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 50px;\n  margin-left: 10px;\n}\n.app-breadcrumb.el-breadcrumb .no-redirect[data-v-766392a0] {\n    color: #97a8be;\n    cursor: text;\n}\n", ""]);

// exports


/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_i18n__ = __webpack_require__(425);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getBreadcrumb();
  },
  data: function data() {
    return {
      levelList: null
    };
  },

  watch: {
    $route: function $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    generateTitle: __WEBPACK_IMPORTED_MODULE_0__utils_i18n__["a" /* generateTitle */],
    getBreadcrumb: function getBreadcrumb() {
      var matched = this.$route.matched.filter(function (item) {
        return item.name;
      });
      this.levelList = matched;
    }
  }
});

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-breadcrumb",
    { staticClass: "app-breadcrumb", attrs: { separator: "/" } },
    [
      _c(
        "transition-group",
        { attrs: { name: "breadcrumb" } },
        _vm._l(_vm.levelList, function(item, index) {
          return item.meta.title
            ? _c(
                "el-breadcrumb-item",
                { key: item.path },
                [
                  item.redirect === "noredirect" ||
                  index == _vm.levelList.length - 1
                    ? _c("span", { staticClass: "no-redirect" }, [
                        _vm._v(_vm._s(_vm.generateTitle(item.meta.title)))
                      ])
                    : _c(
                        "router-link",
                        { attrs: { to: item.redirect || item.path } },
                        [_vm._v(_vm._s(_vm.generateTitle(item.meta.title)))]
                      )
                ],
                1
              )
            : _vm._e()
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-766392a0", module.exports)
  }
}

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(482)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(484)
/* template */
var __vue_template__ = __webpack_require__(485)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33fe94d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Hamburger\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33fe94d0", Component.options)
  } else {
    hotAPI.reload("data-v-33fe94d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(483);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("f29cf9f8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33fe94d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33fe94d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.hamburger[data-v-33fe94d0] {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n  -webkit-transition: 0.38s;\r\n  transition: 0.38s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\n}\n.hamburger.is-active[data-v-33fe94d0] {\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\n}\r\n", ""]);

// exports


/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "hamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      active: this.isActive
    };
  },

  methods: {
    toggle: function toggle() {
      this.$emit("toggle");
      this.active = !this.active;
    }
  }
});

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          _vm.toggle()
        }
      }
    },
    [
      _c(
        "svg",
        {
          staticClass: "hamburger",
          class: { "is-active": _vm.active },
          attrs: {
            t: "1492500959545",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "1691",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            width: "64",
            height: "64"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z",
              "p-id": "1692"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z",
              "p-id": "1693"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z",
              "p-id": "1694"
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33fe94d0", module.exports)
  }
}

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueAvatar=n():t.VueAvatar=n()}("undefined"!=typeof self?self:this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=10)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(13),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default={name:"avatar",props:{username:{type:String,required:!0},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]}},mounted:function(){this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return Boolean(this.src)},style:function(){var t={width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0},n={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},e={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/100px Helvetica, Arial, sans-serif",fontWeight:"bold",lineHeight:this.size+Math.floor(this.size/20)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:this.fontColor},r=this.isImage?n:e;return(0,o.default)(t,r),t},userInitial:function(){return this.initials||this.initial(this.username)}},methods:{initial:function(t){for(var n=t.split(/[ -]/),e="",r=0;r<n.length;r++)e+=n[r].charAt(0);return e.length>3&&-1!==e.search(/[A-Z]/)&&(e=e.replace(/[a-z]+/g,"")),e=e.substr(0,3).toUpperCase()},randomBackgroundColor:function(t,n){return n[t%n.length]},lightenColor:function(t,n){var e=!1;"#"===t[0]&&(t=t.slice(1),e=!0);var r=parseInt(t,16),o=(r>>16)+n;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+n;i>255?i=255:i<0&&(i=0);var u=(255&r)+n;return u>255?u=255:u<0&&(u=0),(e?"#":"")+(u|i<<8|o<<16).toString(16)}}}},function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(7),o=e(8);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Avatar=void 0;var r=e(11),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.Avatar=o.default,n.default=o.default},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(4),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);var u=e(41),c=e(12),a=c(o.a,u.a,!1,null,null,null);n.default=a.exports},function(t,n){t.exports=function(t,n,e,r,o,i){var u,c=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(u=t,c=t.default);var s="function"==typeof c?c.options:c;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),o&&(s._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=f):r&&(f=r),f){var l=s.functional,p=l?s.render:s.beforeCreate;l?(s._injectStyles=f,s.render=function(t,n){return f.call(n),p(t,n)}):s.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:c,options:s}}},function(t,n,e){t.exports={default:e(14),__esModule:!0}},function(t,n,e){e(15),t.exports=e(5).Object.assign},function(t,n,e){var r=e(16);r(r.S+r.F,"Object",{assign:e(26)})},function(t,n,e){var r=e(0),o=e(5),i=e(17),u=e(19),c=function(t,n,e){var a,s,f,l=t&c.F,p=t&c.G,d=t&c.S,h=t&c.P,v=t&c.B,y=t&c.W,b=p?o:o[n]||(o[n]={}),g=b.prototype,x=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(a in e)(s=!l&&x&&void 0!==x[a])&&a in b||(f=s?x[a]:e[a],b[a]=p&&"function"!=typeof x[a]?e[a]:v&&s?i(f,r):y&&x[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[a]=f,t&c.R&&g&&!g[a]&&u(g,a,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(20),o=e(25);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(21),o=e(22),i=e(24),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(2)&&!e(3)(function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(27),o=e(38),i=e(39),u=e(40),c=e(7),a=Object.assign;t.exports=!a||e(3)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r})?function(t,n){for(var e=u(t),a=arguments.length,s=1,f=o.f,l=i.f;a>s;)for(var p,d=c(arguments[s++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(e[p]=d[p]);return e}:a},function(t,n,e){var r=e(28),o=e(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(29),o=e(6),i=e(31)(!1),u=e(34)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(6),o=e(32),i=e(33);t.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(9),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(35)("keys"),o=e(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(8);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle]},[this.src?t._e():e("span",[t._v(t._s(t.userInitial))])])])},o=[],i={render:r,staticRenderFns:o};n.a=i}])});

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    { staticClass: "navbar-container", attrs: { mode: "horizontal" } },
    [
      _c("hamburger", {
        staticClass: "hamburger-container",
        attrs: { isActive: _vm.sidebar.opened },
        on: {
          toggle: function($event) {
            _vm.toggleSideBar()
          }
        }
      }),
      _vm._v(" "),
      _c("breadcrumb", { staticClass: "breadcrumb-container" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right-menu" },
        [
          _c("lang-select", { staticClass: "international right-menu-item" }),
          _vm._v(" "),
          _c(
            "el-dropdown",
            {
              staticClass: "avatar-container right-menu-item",
              attrs: { trigger: "click" }
            },
            [
              _c(
                "div",
                { staticClass: "avatar-wrapper" },
                [
                  _c("avatar", {
                    staticClass: "user-avatar",
                    attrs: {
                      username: _vm.username,
                      size: 35,
                      backgroundColor: "#409eff",
                      color: "#fff"
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "el-icon-caret-bottom" })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-dropdown-menu",
                { attrs: { slot: "dropdown" }, slot: "dropdown" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/dashboard" } },
                    [
                      _c("el-dropdown-item", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("page.dashboard")) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/profile" } },
                    [
                      _c("el-dropdown-item", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("page.profile")) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-item",
                    {
                      attrs: { divided: "" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.logout($event)
                        }
                      }
                    },
                    [_c("span", [_vm._v(_vm._s(_vm.$t("form.logout")))])]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9fb6b6de", module.exports)
  }
}

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SidebarItem__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SidebarItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SidebarItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ScrollBar__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ScrollBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ScrollBar__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { SidebarItem: __WEBPACK_IMPORTED_MODULE_1__SidebarItem___default.a, ScrollBar: __WEBPACK_IMPORTED_MODULE_2__components_ScrollBar___default.a },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(["permissionRoutes", "sidebar"]), {
    isCollapse: function isCollapse() {
      return !this.sidebar.opened;
    }
  })
});

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_i18n__ = __webpack_require__(425);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren: function hasOneShowingChildren(children) {
      var showingChildren = children.filter(function (item) {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },

    generateTitle: __WEBPACK_IMPORTED_MODULE_0__utils_i18n__["a" /* generateTitle */]
  }
});

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "menu-wrapper" },
    [
      _vm._l(_vm.routes, function(item) {
        return !item.hidden && item.children
          ? [
              _vm.hasOneShowingChildren(item.children) &&
              !item.children[0].children &&
              !item.alwaysShow
                ? _c(
                    "router-link",
                    {
                      key: item.children[0].name,
                      attrs: { to: item.path + "/" + item.children[0].path }
                    },
                    [
                      _c(
                        "el-menu-item",
                        {
                          class: { "submenu-title-noDropdown": !_vm.isNest },
                          attrs: {
                            index: item.path + "/" + item.children[0].path
                          }
                        },
                        [
                          item.children[0].meta && item.children[0].meta.icon
                            ? _c("i", {
                                staticClass: "svg-icon",
                                class: item.children[0].meta.icon
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          item.children[0].meta && item.children[0].meta.title
                            ? _c(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.generateTitle(
                                        item.children[0].meta.title
                                      )
                                    )
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  )
                : _c(
                    "el-submenu",
                    {
                      key: item.name,
                      attrs: { index: item.name || item.path }
                    },
                    [
                      _c("template", { slot: "title" }, [
                        item.meta && item.meta.icon
                          ? _c("i", {
                              staticClass: "svg-icon",
                              class: item.meta.icon
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        item.meta && item.meta.title
                          ? _c(
                              "span",
                              { attrs: { slot: "title" }, slot: "title" },
                              [
                                _vm._v(
                                  _vm._s(_vm.generateTitle(item.meta.title))
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm._l(item.children, function(child) {
                        return !child.hidden
                          ? [
                              child.children && child.children.length > 0
                                ? _c("sidebar-item", {
                                    key: child.path,
                                    staticClass: "nest-menu",
                                    attrs: { "is-nest": true, routes: [child] }
                                  })
                                : _c(
                                    "router-link",
                                    {
                                      key: child.name,
                                      attrs: {
                                        to: item.path + "/" + child.path
                                      }
                                    },
                                    [
                                      _c(
                                        "el-menu-item",
                                        {
                                          attrs: {
                                            index: item.path + "/" + child.path
                                          }
                                        },
                                        [
                                          child.meta && child.meta.icon
                                            ? _c("i", {
                                                staticClass: "svg-icon",
                                                class: child.meta.icon
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          child.meta && child.meta.title
                                            ? _c(
                                                "span",
                                                {
                                                  attrs: { slot: "title" },
                                                  slot: "title"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.generateTitle(
                                                        child.meta.title
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    ],
                                    1
                                  )
                            ]
                          : _vm._e()
                      })
                    ],
                    2
                  )
            ]
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a224bbe", module.exports)
  }
}

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(492)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(494)
/* template */
var __vue_template__ = __webpack_require__(495)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41904b55"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ScrollBar\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41904b55", Component.options)
  } else {
    hotAPI.reload("data-v-41904b55", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(493);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("48323f03", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41904b55\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41904b55\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.scroll-container[data-v-41904b55] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #304156;\n}\n.scroll-container .scroll-wrapper[data-v-41904b55] {\n    position: absolute;\n    width: 100% !important;\n}\n", ""]);

// exports


/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

var delta = 15;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "scrollBar",
  data: function data() {
    return {
      top: 0
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var eventDelta = e.wheelDelta || -e.deltaY * 3;
      var $container = this.$refs.scrollContainer;
      var $containerHeight = $container.offsetHeight;
      var $wrapper = this.$refs.scrollWrapper;
      var $wrapperHeight = $wrapper.offsetHeight;
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta);
      } else {
        if ($containerHeight - delta < $wrapperHeight) {
          if (this.top < -($wrapperHeight - $containerHeight + delta)) {
            this.top = this.top;
          } else {
            this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta);
          }
        } else {
          this.top = 0;
        }
      }
    }
  }
});

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "scrollContainer",
      staticClass: "scroll-container",
      on: {
        wheel: function($event) {
          $event.preventDefault()
          return _vm.handleScroll($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          ref: "scrollWrapper",
          staticClass: "scroll-wrapper",
          style: { top: _vm.top + "px" }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41904b55", module.exports)
  }
}

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-bar",
    [
      _c(
        "el-menu",
        {
          attrs: {
            mode: "vertical",
            "show-timeout": 200,
            "default-active": _vm.$route.path,
            collapse: _vm.isCollapse,
            "background-color": "#304156",
            "text-color": "#bfcbd9",
            "active-text-color": "#87c2ff"
          }
        },
        [_c("sidebar-item", { attrs: { routes: _vm.permissionRoutes } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-373ba83e", module.exports)
  }
}

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppMain",
  computed: {
    cachedViews: function cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  }
});

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "app-main", staticStyle: { "min-height": "100%" } },
    [
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c(
            "keep-alive",
            { attrs: { include: _vm.cachedViews } },
            [_c("router-view")],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a16c049", module.exports)
  }
}

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_store__ = __webpack_require__(30);


var _document = document,
    body = _document.body;

var WIDTH = 1024;
var RATIO = 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  watch: {
    $route: function $route(route) {
      if (this.device === "mobile" && this.sidebar.opened) {
        __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("closeSideBar", {
          withoutAnimation: false
        });
      }
    }
  },
  beforeMount: function beforeMount() {
    window.addEventListener("resize", this.resizeHandler);
  },
  mounted: function mounted() {
    var isMobile = this.isMobile();
    if (isMobile) {
      __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("toggleDevice", "mobile");
      __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("closeSideBar", {
        withoutAnimation: true
      });
    }
  },

  methods: {
    isMobile: function isMobile() {
      var rect = body.getBoundingClientRect();
      return rect.width - RATIO < WIDTH;
    },
    resizeHandler: function resizeHandler() {
      if (!document.hidden) {
        var isMobile = this.isMobile();
        __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("toggleDevice", isMobile ? "mobile" : "desktop");

        if (isMobile) {
          __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("closeSideBar", {
            withoutAnimation: true
          });
        }
      }
    }
  }
});

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-wrapper", class: _vm.classObj },
    [
      _c("sidebar", { staticClass: "sidebar-container" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-container" },
        [_c("navbar"), _vm._v(" "), _c("app-main")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53f29f7f", module.exports)
  }
}

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(502)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(504)
/* template */
var __vue_template__ = __webpack_require__(508)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-334cb5fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\NotFound.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-334cb5fc", Component.options)
  } else {
    hotAPI.reload("data-v-334cb5fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(503);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("682be724", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-334cb5fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFound.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-334cb5fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFound.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-334cb5fc] {\n  font-size: 7em;\n}\n", ""]);

// exports


/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ReportProblem__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ReportProblem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ReportProblem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_router__ = __webpack_require__(31);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pagenotfound",
  components: { ReportProblemComponent: __WEBPACK_IMPORTED_MODULE_0__components_ReportProblem___default.a },
  methods: {
    toHomepage: function toHomepage() {
      var _this = this;

      setTimeout(function () {
        _this.$router.push("/");
      }, 2000);
    }
  }
});

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(506)
/* template */
var __vue_template__ = __webpack_require__(507)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ReportProblem\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-029d455a", Component.options)
  } else {
    hotAPI.reload("data-v-029d455a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "report-problem",
  methods: {
    openMessage: function openMessage() {
      var _this = this;

      this.$prompt(this.$t("form.reportDescription"), this.$t("form.reportProblem"), {
        confirmButtonText: this.$t("form.ok"),
        cancelButtonText: this.$t("form.cancel")
      }).then(function (input) {
        var data = {
          route: _this.$router.currentRoute.fullPath,
          // previousRoute: this.$store.getters.previousRoute,
          description: input.value
        };
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("/feedbacks", data).then(function () {
          _this.$message({
            type: "success",
            message: _this.$t("notification.reportSuccess")
          });
          _this.$emit("file-report", "success");
        }).catch(function () {
          _this.$message({
            type: "error",
            message: _this.$t("notification.requestFailed")
          });
          _this.$emit("file-report", "error");
        });
      }).catch(function () {});
    }
  }
});

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-button",
    { attrs: { round: "" }, on: { click: _vm.openMessage } },
    [_vm._v(_vm._s(_vm.$t("form.reportProblem")))]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-029d455a", module.exports)
  }
}

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    [
      _c(
        "el-col",
        { attrs: { span: 10, offset: 7 } },
        [
          _c("h1", [_vm._v("404")]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.$t("message.pageNotExists")))]),
          _vm._v(" "),
          _c("p", { staticClass: "pt-3" }, [
            _vm._v(_vm._s(_vm.$t("message.returnHomeOrReport")))
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "/" } },
            [
              _c("el-button", { staticClass: "mr-2", attrs: { round: "" } }, [
                _vm._v(_vm._s(_vm.$t("form.returnHome")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("report-problem-component", {
            staticClass: "ml-0 ml-md-2 mt-2",
            on: { "file-report": _vm.toHomepage }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-334cb5fc", module.exports)
  }
}

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(510)
  __webpack_require__(512)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(514)
/* template */
var __vue_template__ = __webpack_require__(515)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74ca6a82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Profile\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74ca6a82", Component.options)
  } else {
    hotAPI.reload("data-v-74ca6a82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(511);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("50b8ac36", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ca6a82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ca6a82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.show-pwd[data-v-74ca6a82] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  line-height: 40px;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 15px;\n}\n", ""]);

// exports


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("21ac7210", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ca6a82\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ca6a82\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.password-input input {\n  padding-right: 3rem !important;\n}\n", ""]);

// exports


/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_validator__ = __webpack_require__(408);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(["name", "email"])),
  data: function data() {
    var _this = this;

    var validateName = function validateName(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils_validator__["a" /* default */].name(value)) {
        callback(new Error(_this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
    var validateEmail = function validateEmail(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils_validator__["a" /* default */].email(value)) {
        callback(new Error(_this.$t("form.error.invalidEmail")));
      } else {
        callback();
      }
    };
    var validatePassword = function validatePassword(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils_validator__["a" /* default */].registerPassword(value) && _this.editPassword) {
        callback(new Error(_this.$t("form.rule.password")));
      } else {
        callback();
      }
      _this.$refs.form.validateField("passwordConfirmation");
    };
    var validatePasswordConfirmation = function validatePasswordConfirmation(rule, value, callback) {
      if (_this.form.password != value && _this.editPassword) {
        callback(new Error(_this.$t("form.error.invalidPasswordConfirmation")));
      } else {
        callback();
      }
    };

    return {
      editPassword: false,
      form: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      validateRules: {
        name: [{ required: true, trigger: "blur", validator: validateName }],
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
        password: [{ required: true, trigger: "blur", validator: validatePassword }],
        passwordConfirmation: [{
          required: true,
          trigger: "blur",
          validator: validatePasswordConfirmation
        }]
      },
      showPwd: false,
      showPwdConfirm: false,
      loading: false
    };
  },

  methods: {
    reValidate: function reValidate() {
      if (this.editPassword) return;
      this.form.password = null;
      this.form.passwordConfirmation = null;
      this.$refs.form.validate(function (valid) {});
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$refs.form.validate(function (valid) {
        if (!valid) {
          if (!_this2.form.started_at || !_this2.form.ended_at) {
            _this2.$message({
              type: "error",
              message: _this2.$t("notification.missingSchedule")
            });
          }
          return false;
        }

        var submitForm = _this2.form;
        if (!_this2.editPassword) {
          submitForm = {
            name: _this2.form.name,
            email: _this2.form.email
          };
        }

        _this2.loading = true;
        _this2.$store.dispatch("UpdateUserProfile", submitForm).then(function () {
          _this2.loading = false;
          _this2.$message({
            message: _this2.$t("notification.updateSuccessful"),
            type: "success"
          });
          _this2.editPassword = false;
          setTimeout(function () {
            _this2.$router.push({ path: "/" });
          }, 500);
          _this2.$store.dispatch("GetUserInfo");
        }).catch(function () {
          _this2.$message({
            message: _this2.$t("notification.requestFailed"),
            type: "error"
          });
          _this2.loading = false;
        });
      });
    }
  },
  created: function created() {
    this.form.email = this.email;
    this.form.name = this.name;
  }
});

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c(
        "el-form",
        {
          ref: "form",
          staticClass: "pt-3",
          attrs: {
            model: _vm.form,
            rules: _vm.validateRules,
            "label-width": "150px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { prop: "name", label: _vm.$t("form.name") } },
            [
              _c("el-input", {
                attrs: { type: "text" },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "email", label: _vm.$t("form.email") } },
            [
              _c("el-input", {
                attrs: { type: "text" },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("form.changePassword") } },
            [
              _c("el-switch", {
                on: {
                  change: function($event) {
                    _vm.reValidate()
                  }
                },
                model: {
                  value: _vm.editPassword,
                  callback: function($$v) {
                    _vm.editPassword = $$v
                  },
                  expression: "editPassword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.editPassword,
                  expression: "editPassword"
                }
              ],
              attrs: { prop: "password", label: _vm.$t("form.password") }
            },
            [
              _c("el-input", {
                staticClass: "password-input",
                attrs: {
                  name: "password",
                  type: _vm.showPwd ? "text" : "password"
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  }
                },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "show-pwd",
                  on: {
                    click: function($event) {
                      _vm.showPwd = !_vm.showPwd
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: [_vm.showPwd ? "fa-eye-slash" : "fa-eye"]
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.editPassword,
                  expression: "editPassword"
                }
              ],
              attrs: {
                prop: "passwordConfirmation",
                label: _vm.$t("form.passwordConfirmation")
              }
            },
            [
              _c("el-input", {
                staticClass: "password-input",
                attrs: {
                  name: "passwordConfirmation",
                  type: _vm.showPwdConfirm ? "text" : "password"
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onSubmit($event)
                  }
                },
                model: {
                  value: _vm.form.passwordConfirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "passwordConfirmation", $$v)
                  },
                  expression: "form.passwordConfirmation"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "show-pwd",
                  on: {
                    click: function($event) {
                      _vm.showPwdConfirm = !_vm.showPwdConfirm
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: [_vm.showPwdConfirm ? "fa-eye-slash" : "fa-eye"]
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "pt-2" },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary", loading: _vm.loading },
                  on: { click: _vm.onSubmit }
                },
                [_vm._v(" " + _vm._s(_vm.$t("form.save")))]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74ca6a82", module.exports)
  }
}

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(517)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(519)
/* template */
var __vue_template__ = __webpack_require__(524)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cfb290c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cfb290c", Component.options)
  } else {
    hotAPI.reload("data-v-3cfb290c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(518);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("d9dec318", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cfb290c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cfb290c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-3cfb290c] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.bottom-page[data-v-3cfb290c] {\n  position: fixed;\n  bottom: 20px;\n}\n.el-input-number[data-v-3cfb290c] {\n  width: 95%;\n}\n.el-date-editor.el-input[data-v-3cfb290c] {\n  width: 100%;\n}\n.el-date-editor.el-input__inner[data-v-3cfb290c] {\n  width: 100%;\n}\n.el-textarea__inner[data-v-3cfb290c] {\n  height: 400px;\n}\n@media only screen and (max-width: 768px) {\n.el-input-number[data-v-3cfb290c] {\n    width: 90%;\n}\n}\n", ""]);

// exports


/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_validator__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MultiTags__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MultiTags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_MultiTags__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var initForm = {
  name: "",
  duration: 1,
  started_at: "",
  ended_at: "",
  description: "",
  tags: []
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: { MultiTags: __WEBPACK_IMPORTED_MODULE_2__components_MultiTags___default.a },
  data: function data() {
    var _this = this;

    var validateName = function validateName(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].text(value)) {
        callback(new Error(_this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
    var validateDescription = function validateDescription(rule, value, callback) {
      if (!value) {
        callback(new Error(_this.$t("form.error.invalidDescription")));
      } else {
        callback();
      }
    };
    var validateDate = function validateDate(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_0__utils_validator__["a" /* default */].date(value)) {
        callback(new Error(_this.$t("form.error.invalidDateFormat")));
      } else {
        callback();
      }
    };

    return {
      durationDate: "",
      form: __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep___default()(initForm),
      validateRules: {
        name: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateName
        }],
        description: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDescription
        }],
        started_at: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDate
        }],
        ended_at: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDate
        }]
      },
      loading: false
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$refs.form.validate(function (valid) {
        if (!valid) {
          if (!_this2.form.started_at || !_this2.form.ended_at) {
            _this2.$message({
              type: "error",
              message: _this2.$t("notification.missingSchedule")
            });
          }
          return false;
        }

        _this2.loading = true;
        _this2.$store.dispatch("CreateProject", _this2.form).then(function (project) {
          _this2.loading = false;
          _this2.$router.push({ path: "/projects/view/" + project.id });
        }).catch(function () {
          _this2.loading = false;
        });
      });
    },
    changeScheduleRange: function changeScheduleRange() {
      if (this.durationDate && this.durationDate.length === 2) {
        this.form.started_at = this.durationDate[0];
        this.form.ended_at = this.durationDate[1];
      } else {
        this.form.started_at = "";
        this.form.ended_at = "";
      }
    },
    changeSchedule: function changeSchedule(choice) {
      choice = parseInt(choice);
      if (choice === 0) {
        this.durationDate[choice] = this.form.started_at;
      } else {
        this.durationDate[choice] = this.form.ended_at;
      }
    },
    clearForm: function clearForm() {
      this.durationDate = "";
      this.form = __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep___default()(initForm);
    }
  }
});

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("383c047c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30413f41\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30413f41\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.el-select {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "multi-tags",
  props: ["value"],
  data: function data() {
    return {
      popular: [],
      options: [],
      data: this.value || [],
      loading: false,
      timeout: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.$store.dispatch("GetPopularTags").then(function (response) {
      _this.loading = false;
      _this.popular = response;
      _this.options = _this.popular;
    }).catch(function () {
      _this.loading = false;
    });
  },

  methods: {
    remoteMethod: function remoteMethod(keyword) {
      var _this2 = this;

      clearTimeout(this.timeout);
      if (keyword !== "") {
        this.loading = true;
        this.timeout = setTimeout(function () {
          _this2.$store.dispatch("SearchTagsByKeyword", keyword).then(function (response) {
            _this2.loading = false;
            if (response && response.length > 0) _this2.options = response;else {
              _this2.options = [];
            }
          }).catch(function () {
            _this2.loading = false;
          });
        }, 250);
      } else {
        this.options = this.popular;
      }
    },
    addTag: function addTag(data) {
      this.$emit("input", data);
    }
  }
});

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-select",
    {
      attrs: {
        multiple: "",
        filterable: "",
        "allow-create": "",
        remote: "",
        "default-first-option": "",
        placeholder: _vm.$t("form.enterKeyword"),
        "remote-method": _vm.remoteMethod,
        loading: _vm.loading
      },
      on: {
        change: function($event) {
          _vm.addTag($event)
        }
      },
      model: {
        value: _vm.data,
        callback: function($$v) {
          _vm.data = $$v
        },
        expression: "data"
      }
    },
    _vm._l(_vm.options, function(item) {
      return _c("el-option", {
        key: item.id,
        attrs: { label: item.name, value: item.name }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30413f41", module.exports)
  }
}

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c(
        "el-form",
        {
          ref: "form",
          staticClass: "pt-3",
          attrs: {
            model: _vm.form,
            rules: _vm.validateRules,
            "label-width": "150px",
            "status-icon": ""
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { prop: "name", label: _vm.$t("form.projectName") } },
            [
              _c("el-input", {
                attrs: { type: "text" },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "tags", label: _vm.$t("form.metaTags") } },
            [
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("multi-tags", {
                    model: {
                      value: _vm.form.tags,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tags", $$v)
                      },
                      expression: "form.tags"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("form.estimatedDuration") } },
            [
              _c(
                "el-col",
                { attrs: { span: 5, xs: 12 } },
                [
                  _c("el-input-number", {
                    attrs: {
                      "controls-position": "right",
                      min: 0,
                      max: Infinity
                    },
                    model: {
                      value: _vm.form.duration,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "duration", $$v)
                      },
                      expression: "form.duration"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 5, xs: 12 } }, [
                _vm._v(
                  "\n        (" + _vm._s(_vm.$t("unit.hours")) + ") \n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                {
                  staticClass: "d-sm-block d-none pt-3 pt-md-0",
                  attrs: { span: 14, xs: 24 }
                },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "daterange",
                      "start-placeholder": _vm.$t("form.startDate"),
                      "end-placeholder": _vm.$t("form.endDate")
                    },
                    on: { change: _vm.changeScheduleRange },
                    model: {
                      value: _vm.durationDate,
                      callback: function($$v) {
                        _vm.durationDate = $$v
                      },
                      expression: "durationDate"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              staticClass: "d-sm-none",
              attrs: { prop: "started_at", label: _vm.$t("form.startDate") }
            },
            [
              _c("el-date-picker", {
                attrs: { type: "date", placeholder: _vm.$t("form.startDate") },
                on: {
                  change: function($event) {
                    _vm.changeSchedule(0)
                  }
                },
                model: {
                  value: _vm.form.started_at,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "started_at", $$v)
                  },
                  expression: "form.started_at"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              staticClass: "d-sm-none",
              attrs: { prop: "ended_at", label: _vm.$t("form.endDate") }
            },
            [
              _c("el-date-picker", {
                attrs: { type: "date", placeholder: _vm.$t("form.endDate") },
                on: {
                  change: function($event) {
                    _vm.changeSchedule(1)
                  }
                },
                model: {
                  value: _vm.form.ended_at,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "ended_at", $$v)
                  },
                  expression: "form.ended_at"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: { prop: "description", label: _vm.$t("form.description") }
            },
            [
              _c("el-input", {
                attrs: { type: "textarea", rows: "8" },
                model: {
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "pt-2" },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary", loading: _vm.loading },
                  on: { click: _vm.onSubmit }
                },
                [_vm._v(" " + _vm._s(_vm.$t("form.create")))]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.clearForm } }, [
                _vm._v(_vm._s(_vm.$t("form.clear")))
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { staticClass: "bottom-page" },
        [
          _c(
            "router-link",
            { attrs: { to: "/projects/list" } },
            [
              _c("el-button", { attrs: { round: "" } }, [
                _vm._v(_vm._s(_vm.$t("backToList")))
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cfb290c", module.exports)
  }
}

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(526)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(528)
/* template */
var __vue_template__ = __webpack_require__(532)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fa23d1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fa23d1a", Component.options)
  } else {
    hotAPI.reload("data-v-7fa23d1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(527);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("452682b9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fa23d1a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fa23d1a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-7fa23d1a] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.bottom-page[data-v-7fa23d1a] {\n  position: absolute;\n  bottom: 20px;\n  padding: 0 20px;\n}\n.el-input-number[data-v-7fa23d1a] {\n  width: 95%;\n}\n.el-date-editor.el-input[data-v-7fa23d1a] {\n  width: 100%;\n}\n.el-date-editor.el-input__inner[data-v-7fa23d1a] {\n  width: 100%;\n}\n.el-textarea__inner[data-v-7fa23d1a] {\n  height: 400px;\n}\n.el-slider[data-v-7fa23d1a] {\n  width: 98%;\n}\n@media only screen and (max-width: 768px) {\n.el-input-number[data-v-7fa23d1a] {\n    width: 90%;\n}\n}\n", ""]);

// exports


/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProjectStatusSelection__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProjectStatusSelection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ProjectStatusSelection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validator__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_clonedeep__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_clonedeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_clonedeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MultiTags__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MultiTags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_MultiTags__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var initForm = {
  id: 0,
  name: "",
  duration: 1,
  started_at: "",
  ended_at: "",
  description: "",
  status_id: 0,
  percentage: 0,
  tags: []
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ProjectStatusSelection: __WEBPACK_IMPORTED_MODULE_1__components_ProjectStatusSelection___default.a, MultiTags: __WEBPACK_IMPORTED_MODULE_4__components_MultiTags___default.a },
  data: function data() {
    var _this = this;

    var validateName = function validateName(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].text(value)) {
        callback(new Error(_this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
    var validateDescription = function validateDescription(rule, value, callback) {
      if (!value) {
        callback(new Error(_this.$t("form.error.invalidDescription")));
      } else {
        callback();
      }
    };
    var validateDate = function validateDate(rule, value, callback) {
      if (!__WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].date(value)) {
        callback(new Error(_this.$t("form.error.invalidDateFormat")));
      } else {
        callback();
      }
    };

    return {
      isLoading: true,
      durationDate: "",
      form: __WEBPACK_IMPORTED_MODULE_3_lodash_clonedeep___default()(initForm),
      validateRules: {
        name: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateName
        }],
        description: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDescription
        }],
        started_at: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDate
        }],
        ended_at: [{
          required: true,
          trigger: ["blur", "change"],
          validator: validateDate
        }]
      },
      loading: false
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$refs.form.validate(function (valid) {
        if (!valid) {
          if (!_this2.form.started_at || !_this2.form.ended_at) {
            _this2.$message({
              type: "error",
              message: _this2.$t("notification.missingSchedule")
            });
          }
          return false;
        }

        _this2.loading = true;
        _this2.$store.dispatch("EditProjectById", _this2.form).then(function (project) {
          _this2.loading = false;
          _this2.$router.push({ path: "/projects/view/" + project.id });
        }).catch(function () {
          _this2.loading = false;
        });
      });
    },
    changeScheduleRange: function changeScheduleRange() {
      if (this.durationDate && this.durationDate.length === 2) {
        this.form.started_at = this.durationDate[0];
        this.form.ended_at = this.durationDate[1];
      } else {
        this.form.started_at = "";
        this.form.ended_at = "";
      }
    },
    changeSchedule: function changeSchedule(choice) {
      choice = parseInt(choice);
      if (choice === 0) {
        this.durationDate[choice] = this.form.started_at;
      } else {
        this.durationDate[choice] = this.form.ended_at;
      }
    },
    clearForm: function clearForm() {
      this.durationDate = "";
      this.form = __WEBPACK_IMPORTED_MODULE_3_lodash_clonedeep___default()(initForm);
    },
    formatPercentage: function formatPercentage(val) {
      return val + "%";
    }
  },
  beforeCreate: function beforeCreate() {
    var _this3 = this;

    var project = __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].getters.project;
    if (!project || project.id != this.$route.params.id) {
      __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("GetProjectById", this.$route.params.id).then(function (data) {
        _this3.form = {
          id: data.id,
          name: data.name,
          duration: data.duration,
          started_at: _this3.$moment(data.started_at),
          ended_at: _this3.$moment(data.ended_at),
          description: data.description,
          status_id: data.status_id,
          percentage: data.percentage,
          tags: _.map(data.tags, "name")
        };
        _this3.durationDate = [_this3.form.started_at, _this3.form.ended_at];
        _this3.isLoading = false;
      });
    }
  },
  beforeMount: function beforeMount() {
    var project = __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].getters.project;
    if (project && project.id == this.$route.params.id) {
      this.form = {
        id: project.id,
        name: project.name,
        duration: project.duration,
        started_at: this.$moment(project.started_at),
        ended_at: this.$moment(project.ended_at),
        description: project.description,
        status_id: project.status_id,
        percentage: project.percentage,
        tags: _.map(project.tags, "name")
      };
      this.durationDate = [this.form.started_at, this.form.ended_at];
      this.isLoading = false;
    }
  }
});

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(530)
/* template */
var __vue_template__ = __webpack_require__(531)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ProjectStatusSelection\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61b65c0e", Component.options)
  } else {
    hotAPI.reload("data-v-61b65c0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_camelCase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_camelCase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "project-status-selection",
  props: ["status"],
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(["projectStatus"])),
  data: function data() {
    return {
      value: this.status
    };
  },
  methods: {
    getLabel: function getLabel(name) {
      return this.$t("status." + __WEBPACK_IMPORTED_MODULE_1_lodash_camelCase___default()(name));
    }
  }
});

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-select",
    {
      attrs: { placeholder: _vm.$t("form.select") },
      on: {
        change: function($event) {
          _vm.$emit("input", _vm.value)
        }
      },
      model: {
        value: _vm.value,
        callback: function($$v) {
          _vm.value = $$v
        },
        expression: "value"
      }
    },
    _vm._l(_vm.projectStatus, function(item) {
      return _c("el-option", {
        key: item.id,
        attrs: { label: _vm.getLabel(item.name), value: item.id }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61b65c0e", module.exports)
  }
}

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isLoading
    ? _c(
        "div",
        [
          _c(
            "el-form",
            {
              ref: "form",
              staticClass: "app-container",
              attrs: {
                model: _vm.form,
                rules: _vm.validateRules,
                "label-width": "150px",
                "status-icon": ""
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { prop: "name", label: _vm.$t("form.projectName") } },
                [
                  _c("el-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { prop: "tags", label: _vm.$t("form.metaTags") } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c("multi-tags", {
                        model: {
                          value: _vm.form.tags,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "tags", $$v)
                          },
                          expression: "form.tags"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: { prop: "status_id", label: _vm.$t("form.progress") }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-sm-6" },
                      [
                        _c("project-status-selection", {
                          attrs: { status: _vm.form.status_id },
                          model: {
                            value: _vm.form.status_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "status_id", $$v)
                            },
                            expression: "form.status_id"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-sm-6 pt-3 pt-sm-0" },
                      [
                        _c("el-slider", {
                          attrs: { "format-tooltip": _vm.formatPercentage },
                          model: {
                            value: _vm.form.percentage,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "percentage", $$v)
                            },
                            expression: "form.percentage"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: _vm.$t("form.estimatedDuration") } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 5, xs: 12 } },
                    [
                      _c("el-input-number", {
                        attrs: {
                          "controls-position": "right",
                          min: 0,
                          max: Infinity
                        },
                        model: {
                          value: _vm.form.duration,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "duration", $$v)
                          },
                          expression: "form.duration"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-col", { attrs: { span: 5, xs: 12 } }, [
                    _vm._v(
                      "\n        (" +
                        _vm._s(_vm.$t("unit.hours")) +
                        ") \n      "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    {
                      staticClass: "d-sm-block d-none pt-3 pt-md-0",
                      attrs: { span: 14, xs: 24 }
                    },
                    [
                      _c("el-date-picker", {
                        attrs: {
                          type: "daterange",
                          "start-placeholder": _vm.$t("form.startDate"),
                          "end-placeholder": _vm.$t("form.endDate")
                        },
                        on: { change: _vm.changeScheduleRange },
                        model: {
                          value: _vm.durationDate,
                          callback: function($$v) {
                            _vm.durationDate = $$v
                          },
                          expression: "durationDate"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  staticClass: "d-sm-none",
                  attrs: { prop: "started_at", label: _vm.$t("form.startDate") }
                },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "date",
                      placeholder: _vm.$t("form.startDate")
                    },
                    on: {
                      change: function($event) {
                        _vm.changeSchedule(0)
                      }
                    },
                    model: {
                      value: _vm.form.started_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "started_at", $$v)
                      },
                      expression: "form.started_at"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  staticClass: "d-sm-none",
                  attrs: { prop: "ended_at", label: _vm.$t("form.endDate") }
                },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "date",
                      placeholder: _vm.$t("form.endDate")
                    },
                    on: {
                      change: function($event) {
                        _vm.changeSchedule(1)
                      }
                    },
                    model: {
                      value: _vm.form.ended_at,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "ended_at", $$v)
                      },
                      expression: "form.ended_at"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    prop: "description",
                    label: _vm.$t("form.description")
                  }
                },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: "8" },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { staticClass: "pt-2" },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: { click: _vm.onSubmit }
                    },
                    [_vm._v(" " + _vm._s(_vm.$t("form.save")))]
                  ),
                  _vm._v(" "),
                  _c("el-button", { on: { click: _vm.clearForm } }, [
                    _vm._v(_vm._s(_vm.$t("form.clear")))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "bottom-page" },
            [
              _c(
                "router-link",
                { attrs: { to: "/projects/view/" + _vm.form.id } },
                [
                  _c("el-button", { attrs: { round: "" } }, [
                    _vm._v(_vm._s(_vm.$t("backToView")))
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fa23d1a", module.exports)
  }
}

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(534)
/* template */
var __vue_template__ = __webpack_require__(544)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-705a15ae", Component.options)
  } else {
    hotAPI.reload("data-v-705a15ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ListTable__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ListTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ListTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_store__ = __webpack_require__(30);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ProjectListTable: __WEBPACK_IMPORTED_MODULE_0__components_ListTable___default.a },
  data: function data() {
    return {
      columns: [{
        text: "project",
        value: "name",
        routerLink: "/projects/view/:id"
      }, {
        text: "meta",
        value: "tag",
        width: 120
      }, {
        text: "assignedTo",
        value: "assignees"
      }, {
        text: "status",
        value: "status.name",
        isStatus: true,
        width: 150
      }, {
        text: "deadline",
        value: "ended_at",
        format: "date",
        width: 200
      }],
      data: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    __WEBPACK_IMPORTED_MODULE_1__core_store__["a" /* default */].dispatch("GetProjects").then(function (data) {
      next(function (vm) {
        return vm.data = data;
      });
    });
  }
});

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Status__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Tags__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Tags__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "project-list-table",
  components: { Status: __WEBPACK_IMPORTED_MODULE_0__components_Status___default.a, Tags: __WEBPACK_IMPORTED_MODULE_1__components_Tags___default.a },
  props: ["data"],
  methods: {
    dateFormat: function dateFormat(row, column) {
      return this.$moment(row[column["property"]]).format("MM.DD.YYYY");
    }
  },
  data: function data() {
    return {
      tableData4: [{
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }, {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }]
    };
  },
  created: function created() {}
});

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("18e01669", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06883f5f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06883f5f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.el-tag[data-v-06883f5f] {\n  border-radius: 25px;\n}\n", ""]);

// exports


/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "status",
  props: ["value"],
  methods: {
    getType: function getType() {
      var type = "";
      switch (this.value) {
        case "In Progress":
          type = "";
          break;
        case "Done":
          type = "success";
          break;
        default:
          type = "info";
          break;
      }

      return type;
    }
  }
});

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("el-tag", { attrs: { type: _vm.getType() } }, [
    _vm._v(_vm._s(_vm.value))
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06883f5f", module.exports)
  }
}

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(627)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(541)
/* template */
var __vue_template__ = __webpack_require__(629)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c8f2af4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Tags\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c8f2af4", Component.options)
  } else {
    hotAPI.reload("data-v-0c8f2af4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tags",
  props: ["value"],
  methods: {
    getListMetaTags: function getListMetaTags() {
      var tags = _.chain(this.value).map("name").map(function (tag) {
        return "#" + tag.replace(/ /g, "");
      }).value();
      return tags.join(" ");
    }
  }
});

/***/ }),
/* 542 */,
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    {
      staticStyle: { width: "100%" },
      attrs: {
        data: _vm.data,
        "default-sort": { prop: "ended_at", order: "ascending" }
      }
    },
    [
      _c("el-table-column", {
        attrs: {
          prop: "name",
          sortable: "",
          label: _vm.$t("tableHeader.project")
        }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          prop: "tagsName",
          label: _vm.$t("tableHeader.meta"),
          width: "170"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [_c("tags", { attrs: { value: scope.row.tags } })]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "state", label: _vm.$t("tableHeader.assignedTo") }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          prop: "city",
          sortable: "",
          label: _vm.$t("tableHeader.status"),
          width: "150"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [_c("status", { attrs: { value: scope.row.status.name } })]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          prop: "ended_at",
          sortable: "",
          label: _vm.$t("tableHeader.deadline"),
          formatter: _vm.dateFormat,
          width: "170"
        }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          fixed: "right",
          label: _vm.$t("tableHeader.operations"),
          width: "120"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "link",
                    attrs: { to: "/projects/view/" + scope.row.id }
                  },
                  [
                    _c(
                      "el-button",
                      { attrs: { type: "text", size: "small" } },
                      [_vm._v(_vm._s(_vm.$t("page.detail")))]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fd2c814c", module.exports)
  }
}

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c(
        "el-row",
        [
          _c("el-button", { attrs: { circle: "" } }, [
            _c("i", {
              staticClass: "fa fa-filter",
              attrs: { "aria-hidden": "true" }
            })
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "/projects/create" } },
            [
              _c("el-button", {
                attrs: { type: "primary", icon: "el-icon-plus", circle: "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("project-list-table", { attrs: { data: _vm.data } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-705a15ae", module.exports)
  }
}

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(546)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(548)
/* template */
var __vue_template__ = __webpack_require__(620)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-676c4435"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Project\\View.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-676c4435", Component.options)
  } else {
    hotAPI.reload("data-v-676c4435", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(547);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("0854e98a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-676c4435\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-676c4435\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.description[data-v-676c4435] {\n  min-height: 45vh;\n}\n.bottom-page[data-v-676c4435] {\n  position: fixed;\n  bottom: 20px;\n  padding: 0 20px;\n}\n.top-page[data-v-676c4435] {\n  position: absolute;\n  right: 20px;\n  z-index: 10;\n}\n", ""]);

// exports


/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Revision__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Revision___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Revision__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Status__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Status__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Status: __WEBPACK_IMPORTED_MODULE_2__components_Status___default.a, ProjectRevision: __WEBPACK_IMPORTED_MODULE_1__components_Revision___default.a },
  data: function data() {
    return {
      isLoading: true,
      data: {}
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var project = __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].getters.project;
    if (!project || project.id != this.$route.params.id) {
      __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].dispatch("GetProjectById", this.$route.params.id).then(function (data) {
        _this.data = data;
        _this.isLoading = false;
      });
    }
  },
  beforeMount: function beforeMount() {
    var project = __WEBPACK_IMPORTED_MODULE_0__core_store__["a" /* default */].getters.project;
    if (project && project.id == this.$route.params.id) {
      this.data = project;
      this.isLoading = false;
    }
  }
});

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_cloneDeep__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_cloneDeep__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "project-revision",
  props: ["data"],
  data: function data() {
    return {
      listData: {}
    };
  },
  created: function created() {
    var listData = [];
    this.data.forEach(function (element) {
      var createdDate = new Date(element.created_at);
      var newElement = __WEBPACK_IMPORTED_MODULE_0_lodash_cloneDeep___default()(element);
      newElement["created_at"] = new Date(createdDate.toDateString());
      listData.push(newElement);
    });

    var listDataByKey = [];
    var listDistinctDate = _.chain(listData).map("created_at").uniqBy("created_at").value();
    listDistinctDate.forEach(function (date) {
      var listDataByDate = _.filter(listData, { created_at: date });
      var listDistinctUserByDate = _.chain(listDataByDate).map("user_id").uniq().value();
      listDistinctUserByDate.forEach(function (userId) {
        var listDataByDateByUser = _.filter(listData, {
          created_at: date,
          user_id: userId
        });
        var listDistinctKeyByDateByUser = _.chain(listDataByDateByUser).map("key").uniq().value();
        listDistinctKeyByDateByUser.forEach(function (key) {
          var listDataByDateByUserByKey = _.chain(listData).filter({
            created_at: date,
            user_id: userId,
            key: key
          }).orderBy(["updated_at"]).value();
          var head = _.head(listDataByDateByUserByKey);
          var last = _.last(listDataByDateByUserByKey);
          var oldValue = head["old_value"];
          var newValue = last["new_value"];
          if (oldValue !== newValue) {
            var dataForResult = {
              user_id: userId,
              user: head["user"],
              created_at: date,
              old_value: oldValue,
              new_value: newValue,
              key: key
            };
            listDataByKey.push(dataForResult);
          }
        });
      });
    });

    this.listData = _.groupBy(listDataByKey, "created_at");
  }
});

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(551);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(552),
    arrayEach = __webpack_require__(580),
    assignValue = __webpack_require__(437),
    baseAssign = __webpack_require__(582),
    baseAssignIn = __webpack_require__(592),
    cloneBuffer = __webpack_require__(595),
    copyArray = __webpack_require__(596),
    copySymbols = __webpack_require__(597),
    copySymbolsIn = __webpack_require__(599),
    getAllKeys = __webpack_require__(600),
    getAllKeysIn = __webpack_require__(601),
    getTag = __webpack_require__(422),
    initCloneArray = __webpack_require__(606),
    initCloneByTag = __webpack_require__(607),
    initCloneObject = __webpack_require__(613),
    isArray = __webpack_require__(221),
    isBuffer = __webpack_require__(440),
    isMap = __webpack_require__(615),
    isObject = __webpack_require__(409),
    isSet = __webpack_require__(617),
    keys = __webpack_require__(417);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(410),
    stackClear = __webpack_require__(558),
    stackDelete = __webpack_require__(559),
    stackGet = __webpack_require__(560),
    stackHas = __webpack_require__(561),
    stackSet = __webpack_require__(562);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 553 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(411);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(411);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(411);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(411);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(410);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 559 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 560 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 561 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(410),
    Map = __webpack_require__(416),
    MapCache = __webpack_require__(567);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(435),
    isMasked = __webpack_require__(564),
    isObject = __webpack_require__(409),
    toSource = __webpack_require__(436);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(565);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(217);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 566 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(568),
    mapCacheDelete = __webpack_require__(575),
    mapCacheGet = __webpack_require__(577),
    mapCacheHas = __webpack_require__(578),
    mapCacheSet = __webpack_require__(579);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(569),
    ListCache = __webpack_require__(410),
    Map = __webpack_require__(416);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(570),
    hashDelete = __webpack_require__(571),
    hashGet = __webpack_require__(572),
    hashHas = __webpack_require__(573),
    hashSet = __webpack_require__(574);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(412);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 571 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(412);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(412);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(412);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(413);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 576 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(413);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(413);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(413);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 580 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(414),
    keys = __webpack_require__(417);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 583 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(585),
    isObjectLike = __webpack_require__(218);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(219),
    isObjectLike = __webpack_require__(218);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 586 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 587 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(589),
    baseUnary = __webpack_require__(418),
    nodeUtil = __webpack_require__(419);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(219),
    isLength = __webpack_require__(441),
    isObjectLike = __webpack_require__(218);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(420),
    nativeKeys = __webpack_require__(591);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(442);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(414),
    keysIn = __webpack_require__(444);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(409),
    isPrototype = __webpack_require__(420),
    nativeKeysIn = __webpack_require__(594);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 594 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(217);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)(module)))

/***/ }),
/* 596 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(414),
    getSymbols = __webpack_require__(421);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 598 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(414),
    getSymbolsIn = __webpack_require__(446);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(449),
    getSymbols = __webpack_require__(421),
    keys = __webpack_require__(417);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(449),
    getSymbolsIn = __webpack_require__(446),
    keysIn = __webpack_require__(444);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407),
    root = __webpack_require__(217);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407),
    root = __webpack_require__(217);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407),
    root = __webpack_require__(217);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(407),
    root = __webpack_require__(217);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 606 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(423),
    cloneDataView = __webpack_require__(609),
    cloneRegExp = __webpack_require__(610),
    cloneSymbol = __webpack_require__(611),
    cloneTypedArray = __webpack_require__(612);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(217);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(423);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 610 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(32);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(423);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(614),
    getPrototype = __webpack_require__(448),
    isPrototype = __webpack_require__(420);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(409);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(616),
    baseUnary = __webpack_require__(418),
    nodeUtil = __webpack_require__(419);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(422),
    isObjectLike = __webpack_require__(218);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(618),
    baseUnary = __webpack_require__(418),
    nodeUtil = __webpack_require__(419);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(422),
    isObjectLike = __webpack_require__(218);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(Object.keys(_vm.listData), function(date) {
      return _c(
        "div",
        { key: date },
        [
          _vm._v(
            "\n    " +
              _vm._s(_vm.$t("form.date")) +
              " " +
              _vm._s(_vm._f("moment")(date, "MM.DD.YYYY")) +
              "\n    "
          ),
          _vm._l(Object.values(_vm.listData), function(array, index) {
            return _c("div", { key: index }, [
              _c(
                "ul",
                _vm._l(array, function(item, innerIndex) {
                  return _c("li", { key: innerIndex }, [
                    item.key != "created_at"
                      ? _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                item.user.name +
                                  " " +
                                  _vm.$t("form.changed") +
                                  " '" +
                                  _vm.$t("databaseColumn." + item.key) +
                                  "'"
                              ) +
                              ".\n          "
                          )
                        ])
                      : _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                item.user.name +
                                  " " +
                                  _vm.$t("message.initProject")
                              ) +
                              ".\n          "
                          )
                        ])
                  ])
                })
              )
            ])
          })
        ],
        2
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5bc437c1", module.exports)
  }
}

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isLoading
    ? _c(
        "div",
        [
          _c(
            "el-row",
            { staticClass: "app-container" },
            [
              _c("el-col", { staticClass: "col-12 col-sm-8 col-md-9" }, [
                _c("h4", [
                  _c("small", [
                    _c("i", [_vm._v(_vm._s(_vm.$t("form.projectName")))]),
                    _vm._v(":")
                  ]),
                  _vm._v(" " + _vm._s(_vm.data.name))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description pt-4" }, [
                  _c("p", [
                    _c("i", [_vm._v(_vm._s(_vm.$t("form.description")))]),
                    _vm._v(":")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("pre", [
                      _vm._v(" " + _vm._s(_vm.data.description) + " ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "pt-3" },
                  [
                    _c(
                      "el-col",
                      { attrs: { md: 7, sm: 8, xs: 24 } },
                      [
                        _c("i", [_vm._v(_vm._s(_vm.$t("form.progress")))]),
                        _vm._v(
                          ": " + _vm._s(_vm.data.percentage) + "%\n          "
                        ),
                        _c("status", { attrs: { value: _vm.data.status.name } })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      {
                        staticClass: "pt-3 pt-md-0",
                        attrs: { md: 7, sm: 16, xs: 24 }
                      },
                      [
                        _c("i", [
                          _vm._v(_vm._s(_vm.$t("form.estimatedDuration")))
                        ]),
                        _vm._v(
                          ": " +
                            _vm._s(
                              _vm.data.duration +
                                " (" +
                                _vm.$t("unit.hours") +
                                ")"
                            ) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      {
                        staticClass: "pt-3 pt-lg-0",
                        attrs: { md: 10, sm: 24, xs: 24 }
                      },
                      [
                        _c("i", [_vm._v(_vm._s(_vm.$t("form.schedule")))]),
                        _vm._v(
                          ": " +
                            _vm._s(
                              _vm._f("moment")(
                                _vm.data.started_at,
                                "MM.DD.YYYY"
                              )
                            ) +
                            " - " +
                            _vm._s(
                              _vm._f("moment")(_vm.data.ended_at, "MM.DD.YYYY")
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { staticClass: "col-12 col-sm-4 col-md-3" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "top-page",
                      attrs: { to: "/projects/edit/" + _vm.data.id }
                    },
                    [
                      _c("el-button", { attrs: { round: "" } }, [
                        _c("i", { staticClass: "fa fa-pencil" })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("project-revision", {
                    staticClass: "pt-0 pt-sm-5",
                    attrs: { data: _vm.data.revision_history_with_user }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "bottom-page" },
            [
              _c(
                "router-link",
                { attrs: { to: "/projects/list" } },
                [
                  _c("el-button", { attrs: { round: "" } }, [
                    _vm._v(_vm._s(_vm.$t("backToList")))
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-676c4435", module.exports)
  }
}

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(622)
}
var normalizeComponent = __webpack_require__(57)
/* script */
var __vue_script__ = __webpack_require__(624)
/* template */
var __vue_template__ = __webpack_require__(625)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4cc18cfe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Unauthorized.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cc18cfe", Component.options)
  } else {
    hotAPI.reload("data-v-4cc18cfe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("055e1ec8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc18cfe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Unauthorized.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc18cfe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Unauthorized.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-4cc18cfe] {\n  font-size: 7em;\n}\n", ""]);

// exports


/***/ }),
/* 624 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "unauthorized"
});

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    [
      _c(
        "el-col",
        { attrs: { span: 10, offset: 7 } },
        [
          _c("h1", [_vm._v("401")]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.$t("message.unauthorized")))]),
          _vm._v(" "),
          _c("p", { staticClass: "pt-3 pb-2" }, [
            _vm._v(_vm._s(_vm.$t("message.returnHome")))
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "/" } },
            [
              _c("el-button", { staticClass: "mr-2", attrs: { round: "" } }, [
                _vm._v(_vm._s(_vm.$t("form.returnHome")))
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cc18cfe", module.exports)
  }
}

/***/ }),
/* 626 */,
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(216)("82858348", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c8f2af4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c8f2af4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\n.tags[data-v-0c8f2af4] {\n  word-break: break-word !important;\n}\n", ""]);

// exports


/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "tags" }, [
    _vm._v("\n  " + _vm._s(_vm.getListMetaTags()) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c8f2af4", module.exports)
  }
}

/***/ })
]));