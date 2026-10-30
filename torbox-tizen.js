(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/core-js/internals/global-this.js
  var require_global_this = __commonJS({
    "node_modules/core-js/internals/global-this.js"(exports, module) {
      "use strict";
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ (function() {
        return this;
      })() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // node_modules/core-js/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // node_modules/core-js/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var navigator = globalThis2.navigator;
      var userAgent = navigator && navigator.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // node_modules/core-js/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var process = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process && process.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version();
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = /* @__PURE__ */ Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P) {
        var func = V[P];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "node_modules/core-js/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure();
      var globalThis2 = require_global_this();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store.versions || (store.versions = [])).push({
        version: "3.51.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
        license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      "use strict";
      var store = require_shared_store();
      var create = Object.create || Object;
      module.exports = function(key, value) {
        return store[key] || (store[key] = value || create(null));
      };
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0) pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0) pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var document2 = globalThis2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
        if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current = $getOwnPropertyDescriptor(O, P);
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O, P, Attributes);
      } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var WeakMap = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = globalThis2.TypeError;
      var WeakMap = globalThis2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap());
        store.get = store.get;
        store.has = store.has;
        store.set = store.set;
        set = function(it, metadata) {
          if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          store.set(it, metadata);
          return metadata;
        };
        get = function(it) {
          return store.get(it) || {};
        };
        has = function(it) {
          return store.has(it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/make-built-in.js
  var require_make_built_in = __commonJS({
    "node_modules/core-js/internals/make-built-in.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var DESCRIPTORS = require_descriptors();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var enforceInternalState = InternalStateModule.enforce;
      var getInternalState = InternalStateModule.get;
      var $String = String;
      var defineProperty = Object.defineProperty;
      var stringSlice = uncurryThis("".slice);
      var replace = uncurryThis("".replace);
      var join = uncurryThis([].join);
      var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
        return defineProperty(function() {
        }, "length", { value: 8 }).length !== 8;
      });
      var TEMPLATE = String(String).split("String");
      var makeBuiltIn = module.exports = function(value, name, options) {
        if (stringSlice($String(name), 0, 7) === "Symbol(") {
          name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
        }
        if (options && options.getter) name = "get " + name;
        if (options && options.setter) name = "set " + name;
        if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
          else value.name = name;
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
          defineProperty(value, "length", { value: options.arity });
        }
        try {
          if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
          } else if (value.prototype) value.prototype = void 0;
        } catch (error) {
        }
        var state = enforceInternalState(value);
        if (!hasOwn(state, "source")) {
          state.source = join(TEMPLATE, typeof name == "string" ? name : "");
        }
        return value;
      };
      Function.prototype.toString = makeBuiltIn(function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      }, "toString");
    }
  });

  // node_modules/core-js/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "node_modules/core-js/internals/define-built-in.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var definePropertyModule = require_object_define_property();
      var makeBuiltIn = require_make_built_in();
      var defineGlobalProperty = require_define_global_property();
      module.exports = function(O, key, value, options) {
        if (!options) options = {};
        var simple = options.enumerable;
        var name = options.name !== void 0 ? options.name : key;
        if (isCallable(value)) makeBuiltIn(value, name, options);
        if (options.global) {
          if (simple) O[key] = value;
          else defineGlobalProperty(key, value);
        } else {
          try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
          } catch (error) {
          }
          if (simple) O[key] = value;
          else definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
        }
        return O;
      };
    }
  });

  // node_modules/core-js/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "node_modules/core-js/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          if (length === 0) return !IS_INCLUDES && -1;
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el !== el) while (length > index) {
            value = O[index++];
            if (value !== value) return true;
          }
          else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i) if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var ownKeys2 = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source, exceptions) {
        var keys = ownKeys2(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var defineGlobalProperty = require_define_global_property();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = globalThis2;
        } else if (STATIC) {
          target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
        } else {
          target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
        }
        if (target) for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
      };
    }
  });

  // node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/internals/classof.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $Object = Object;
      var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
        return arguments;
      })()) === "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js/internals/to-string.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var $String = String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return $String(argument);
      };
    }
  });

  // node_modules/core-js/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var makeBuiltIn = require_make_built_in();
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
        if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // node_modules/core-js/modules/es.symbol.description.js
  var require_es_symbol_description = __commonJS({
    "node_modules/core-js/modules/es.symbol.description.js"() {
      "use strict";
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var globalThis2 = require_global_this();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var toString = require_to_string();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var copyConstructorProperties = require_copy_constructor_properties();
      var NativeSymbol = globalThis2.Symbol;
      var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
      if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
      NativeSymbol().description !== void 0)) {
        EmptyStringDescriptionStore = {};
        SymbolWrapper = function Symbol2() {
          var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString(arguments[0]);
          var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
          if (description === "") EmptyStringDescriptionStore[result] = true;
          return result;
        };
        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        nativeFor = SymbolWrapper["for"];
        SymbolWrapper["for"] = { "for": function(key) {
          var stringKey = toString(key);
          var symbol = call(nativeFor, this, stringKey);
          if (stringKey === "") EmptyStringDescriptionStore[symbol] = true;
          return symbol;
        } }["for"];
        SymbolWrapper.prototype = SymbolPrototype;
        SymbolPrototype.constructor = SymbolWrapper;
        NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
        thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
        symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
        regexp = /^Symbol\((.*)\)[^)]+$/;
        replace = uncurryThis("".replace);
        stringSlice = uncurryThis("".slice);
        defineBuiltInAccessor(SymbolPrototype, "description", {
          configurable: true,
          get: function description() {
            var symbol = thisSymbolValue(this);
            if (hasOwn(EmptyStringDescriptionStore, symbol)) return "";
            var string = symbolDescriptiveString(symbol);
            var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
            return desc === "" ? void 0 : desc;
          }
        });
        $2({ global: true, constructor: true, forced: true }, {
          Symbol: SymbolWrapper
        });
      }
      var EmptyStringDescriptionStore;
      var SymbolWrapper;
      var nativeFor;
      var NATIVE_SYMBOL;
      var thisSymbolValue;
      var symbolDescriptiveString;
      var regexp;
      var replace;
      var stringSlice;
    }
  });

  // node_modules/core-js/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/core-js/internals/function-apply.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var apply = FunctionPrototype.apply;
      var call = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/core-js/internals/function-uncurry-this-accessor.js
  var require_function_uncurry_this_accessor = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      module.exports = function(object, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch (error) {
        }
      };
    }
  });

  // node_modules/core-js/internals/is-possible-prototype.js
  var require_is_possible_prototype = __commonJS({
    "node_modules/core-js/internals/is-possible-prototype.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      module.exports = function(argument) {
        return isObject(argument) || argument === null;
      };
    }
  });

  // node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
      "use strict";
      var isPossiblePrototype = require_is_possible_prototype();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isPossiblePrototype(argument)) return argument;
        throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
      };
    }
  });

  // node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var isObject = require_is_object();
      var requireObjectCoercible = require_require_object_coercible();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
          setter(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          requireObjectCoercible(O);
          aPossiblePrototype(proto);
          if (!isObject(O)) return O;
          if (CORRECT_SETTER) setter(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      })() : void 0);
    }
  });

  // node_modules/core-js/internals/proxy-accessor.js
  var require_proxy_accessor = __commonJS({
    "node_modules/core-js/internals/proxy-accessor.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      module.exports = function(Target, Source, key) {
        key in Target || defineProperty(Target, key, {
          configurable: true,
          get: function() {
            return Source[key];
          },
          set: function(it) {
            Source[key] = it;
          }
        });
      };
    }
  });

  // node_modules/core-js/internals/inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var setPrototypeOf = require_object_set_prototype_of();
      module.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
        ) setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
    }
  });

  // node_modules/core-js/internals/normalize-string-argument.js
  var require_normalize_string_argument = __commonJS({
    "node_modules/core-js/internals/normalize-string-argument.js"(exports, module) {
      "use strict";
      var toString = require_to_string();
      module.exports = function(argument, $default) {
        return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
      };
    }
  });

  // node_modules/core-js/internals/install-error-cause.js
  var require_install_error_cause = __commonJS({
    "node_modules/core-js/internals/install-error-cause.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module.exports = function(O, options) {
        if (isObject(options) && "cause" in options) {
          createNonEnumerableProperty(O, "cause", options.cause);
        }
      };
    }
  });

  // node_modules/core-js/internals/error-stack-clear.js
  var require_error_stack_clear = __commonJS({
    "node_modules/core-js/internals/error-stack-clear.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var $Error = Error;
      var replace = uncurryThis("".replace);
      var TEST = (function(arg) {
        return String(new $Error(arg).stack);
      })("zxcasd");
      var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
      var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
      module.exports = function(stack, dropEntries) {
        if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
          while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
        }
        return stack;
      };
    }
  });

  // node_modules/core-js/internals/error-stack-installable.js
  var require_error_stack_installable = __commonJS({
    "node_modules/core-js/internals/error-stack-installable.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = !fails(function() {
        var error = new Error("a");
        if (!("stack" in error)) return true;
        Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
        return error.stack !== 7;
      });
    }
  });

  // node_modules/core-js/internals/error-stack-install.js
  var require_error_stack_install = __commonJS({
    "node_modules/core-js/internals/error-stack-install.js"(exports, module) {
      "use strict";
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var clearErrorStack = require_error_stack_clear();
      var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
      var captureStackTrace = Error.captureStackTrace;
      module.exports = function(error, C, stack, dropEntries) {
        if (ERROR_STACK_INSTALLABLE) {
          if (captureStackTrace) captureStackTrace(error, C);
          else createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries));
        }
      };
    }
  });

  // node_modules/core-js/internals/wrap-error-constructor-with-cause.js
  var require_wrap_error_constructor_with_cause = __commonJS({
    "node_modules/core-js/internals/wrap-error-constructor-with-cause.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var isPrototypeOf = require_object_is_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var copyConstructorProperties = require_copy_constructor_properties();
      var proxyAccessor = require_proxy_accessor();
      var inheritIfRequired = require_inherit_if_required();
      var normalizeStringArgument = require_normalize_string_argument();
      var installErrorCause = require_install_error_cause();
      var installErrorStack = require_error_stack_install();
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      module.exports = function(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
        var STACK_TRACE_LIMIT = "stackTraceLimit";
        var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
        var path = FULL_NAME.split(".");
        var ERROR_NAME = path[path.length - 1];
        var OriginalError = getBuiltIn.apply(null, path);
        if (!OriginalError) return;
        var OriginalErrorPrototype = OriginalError.prototype;
        if (!IS_PURE && hasOwn(OriginalErrorPrototype, "cause")) delete OriginalErrorPrototype.cause;
        if (!FORCED) return OriginalError;
        var BaseError = getBuiltIn("Error");
        var WrappedError = wrapper(function(a, b) {
          var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, void 0);
          var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
          if (message !== void 0) createNonEnumerableProperty(result, "message", message);
          installErrorStack(result, WrappedError, result.stack, 2);
          if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
          if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
          return result;
        });
        WrappedError.prototype = OriginalErrorPrototype;
        if (ERROR_NAME !== "Error") {
          if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
          else copyConstructorProperties(WrappedError, BaseError, { name: true });
        } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
          proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
          proxyAccessor(WrappedError, OriginalError, "prepareStackTrace");
        }
        copyConstructorProperties(WrappedError, OriginalError);
        if (!IS_PURE) try {
          if (OriginalErrorPrototype.name !== ERROR_NAME) {
            createNonEnumerableProperty(OriginalErrorPrototype, "name", ERROR_NAME);
          }
          OriginalErrorPrototype.constructor = WrappedError;
        } catch (error) {
        }
        return WrappedError;
      };
    }
  });

  // node_modules/core-js/modules/es.error.cause.js
  var require_es_error_cause = __commonJS({
    "node_modules/core-js/modules/es.error.cause.js"() {
      "use strict";
      var $2 = require_export();
      var globalThis2 = require_global_this();
      var apply = require_function_apply();
      var wrapErrorConstructorWithCause = require_wrap_error_constructor_with_cause();
      var WEB_ASSEMBLY = "WebAssembly";
      var WebAssembly = globalThis2[WEB_ASSEMBLY];
      var FORCED = new Error("e", { cause: 7 }).cause !== 7;
      var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
        var O = {};
        O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
        $2({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
      };
      var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
        if (WebAssembly && WebAssembly[ERROR_NAME]) {
          var O = {};
          O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + "." + ERROR_NAME, wrapper, FORCED);
          $2({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
        }
      };
      exportGlobalErrorCauseWrapper("Error", function(init) {
        return function Error2(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("EvalError", function(init) {
        return function EvalError(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("RangeError", function(init) {
        return function RangeError2(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("ReferenceError", function(init) {
        return function ReferenceError2(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("SyntaxError", function(init) {
        return function SyntaxError2(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("TypeError", function(init) {
        return function TypeError2(message) {
          return apply(init, this, arguments);
        };
      });
      exportGlobalErrorCauseWrapper("URIError", function(init) {
        return function URIError(message) {
          return apply(init, this, arguments);
        };
      });
      exportWebAssemblyErrorCauseWrapper("CompileError", function(init) {
        return function CompileError(message) {
          return apply(init, this, arguments);
        };
      });
      exportWebAssemblyErrorCauseWrapper("LinkError", function(init) {
        return function LinkError(message) {
          return apply(init, this, arguments);
        };
      });
      exportWebAssemblyErrorCauseWrapper("RuntimeError", function(init) {
        return function RuntimeError(message) {
          return apply(init, this, arguments);
        };
      });
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports, module) {
      "use strict";
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray(argument) {
        return classof(argument) === "Array";
      };
    }
  });

  // node_modules/core-js/internals/does-not-exceed-safe-integer.js
  var require_does_not_exceed_safe_integer = __commonJS({
    "node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      var MAX_SAFE_INTEGER = 9007199254740991;
      module.exports = function(it) {
        if (it > MAX_SAFE_INTEGER) throw new $TypeError("Maximum allowed index exceeded");
        return it;
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });

  // node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause();
      var aCallable = require_a_callable();
      var NATIVE_BIND = require_function_bind_native();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/internals/create-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
        else object[key] = value;
      };
    }
  });

  // node_modules/core-js/internals/flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "node_modules/core-js/internals/flatten-into-array.js"(exports, module) {
      "use strict";
      var isArray = require_is_array();
      var lengthOfArrayLike = require_length_of_array_like();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var bind = require_function_bind_context();
      var createProperty = require_create_property();
      var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind(mapper, thisArg) : false;
        var element, elementLen;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) {
              elementLen = lengthOfArrayLike(element);
              targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
            } else {
              doesNotExceedSafeInteger(targetIndex + 1);
              createProperty(target, targetIndex, element);
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      };
      module.exports = flattenIntoArray;
    }
  });

  // node_modules/core-js/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/core-js/internals/is-constructor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var noop = function() {
      };
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
      var isConstructorModern = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        try {
          construct(noop, [], argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        } catch (error) {
          return true;
        }
      };
      isConstructorLegacy.sham = true;
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/core-js/internals/array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
      "use strict";
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject = require_is_object();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      var $Array = Array;
      module.exports = function(originalArray) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = void 0;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = void 0;
          }
        }
        return C === void 0 ? $Array : C;
      };
    }
  });

  // node_modules/core-js/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/internals/array-species-create.js"(exports, module) {
      "use strict";
      var arraySpeciesConstructor = require_array_species_constructor();
      module.exports = function(originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
      };
    }
  });

  // node_modules/core-js/modules/es.array.flat.js
  var require_es_array_flat = __commonJS({
    "node_modules/core-js/modules/es.array.flat.js"() {
      "use strict";
      var $2 = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var arraySpeciesCreate = require_array_species_create();
      $2({ target: "Array", proto: true }, {
        flat: function flat() {
          var depthArg = arguments.length ? arguments[0] : void 0;
          var O = toObject(this);
          var sourceLen = lengthOfArrayLike(O);
          var depthNum = depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg);
          var A = arraySpeciesCreate(O, 0);
          flattenIntoArray(A, O, O, sourceLen, 0, depthNum);
          return A;
        }
      });
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var definePropertiesModule = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var defineProperty = require_object_define_property().f;
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] === void 0) {
        defineProperty(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/internals/iterators.js"(exports, module) {
      "use strict";
      module.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    }
  });

  // node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var $Object = Object;
      var ObjectPrototype = $Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof $Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
      else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        defineBuiltIn(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(target, TAG, STATIC) {
        if (target && !STATIC) target = target.prototype;
        if (target && !hasOwn(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // node_modules/core-js/internals/iterator-create-constructor.js
  var require_iterator_create_constructor = __commonJS({
    "node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js/internals/iterator-define.js
  var require_iterator_define = __commonJS({
    "node_modules/core-js/internals/iterator-define.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_iterator_create_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return call(nativeIterator, this);
            };
          }
        }
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
          }
          else $2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME] = defaultIterator;
        return methods;
      };
    }
  });

  // node_modules/core-js/internals/create-iter-result-object.js
  var require_create_iter_result_object = __commonJS({
    "node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
      "use strict";
      module.exports = function(value, done) {
        return { value, done };
      };
    }
  });

  // node_modules/core-js/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineProperty = require_object_define_property().f;
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = null;
          return createIterResultObject(void 0, true);
        }
        switch (state.kind) {
          case "keys":
            return createIterResultObject(index, false);
          case "values":
            return createIterResultObject(target[index], false);
        }
        return createIterResultObject([index, target[index]], false);
      }, "values");
      var values = Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
      if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
        defineProperty(values, "name", { value: "values" });
      } catch (error) {
      }
    }
  });

  // node_modules/core-js/internals/array-set-length.js
  var require_array_set_length = __commonJS({
    "node_modules/core-js/internals/array-set-length.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var isArray = require_is_array();
      var $TypeError = TypeError;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function() {
        if (this !== void 0) return true;
        try {
          Object.defineProperty([], "length", { writable: false }).length = 1;
        } catch (error) {
          return error instanceof TypeError;
        }
      })();
      module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
        if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
          throw new $TypeError("Cannot set read only .length");
        }
        return O.length = length;
      } : function(O, length) {
        return O.length = length;
      };
    }
  });

  // node_modules/core-js/modules/es.array.push.js
  var require_es_array_push = __commonJS({
    "node_modules/core-js/modules/es.array.push.js"() {
      "use strict";
      var $2 = require_export();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var setArrayLength = require_array_set_length();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var fails = require_fails();
      var INCORRECT_TO_LENGTH = fails(function() {
        return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
      });
      var properErrorOnNonWritableLength = function() {
        try {
          Object.defineProperty([], "length", { writable: false }).push();
        } catch (error) {
          return error instanceof TypeError;
        }
      };
      var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
      $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        push: function push(item) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var argCount = arguments.length;
          doesNotExceedSafeInteger(len + argCount);
          for (var i = 0; i < argCount; i++) {
            O[len] = arguments[i];
            len++;
          }
          setArrayLength(O, len);
          return len;
        }
      });
    }
  });

  // node_modules/core-js/internals/array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js/internals/array-reduce.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var $TypeError = TypeError;
      var REDUCE_EMPTY = "Reduce of empty array with no initial value";
      var createMethod = function(IS_RIGHT) {
        return function(that, callbackfn, argumentsLength, memo) {
          var O = toObject(that);
          var self2 = IndexedObject(O);
          var length = lengthOfArrayLike(O);
          aCallable(callbackfn);
          if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self2) {
              memo = self2[index];
              index += i;
              break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw new $TypeError(REDUCE_EMPTY);
            }
          }
          for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self2) {
            memo = callbackfn(memo, self2[index], index, O);
          }
          return memo;
        };
      };
      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
    }
  });

  // node_modules/core-js/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "node_modules/core-js/internals/array-method-is-strict.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            return 1;
          }, 1);
        });
      };
    }
  });

  // node_modules/core-js/internals/environment.js
  var require_environment = __commonJS({
    "node_modules/core-js/internals/environment.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var classof = require_classof_raw();
      var userAgentStartsWith = function(string) {
        return userAgent.slice(0, string.length) === string;
      };
      module.exports = (function() {
        if (userAgentStartsWith("Bun/")) return "BUN";
        if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
        if (userAgentStartsWith("Deno/")) return "DENO";
        if (userAgentStartsWith("Node.js/")) return "NODE";
        if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
        if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
        if (classof(globalThis2.process) === "process") return "NODE";
        if (globalThis2.window && globalThis2.document) return "BROWSER";
        return "REST";
      })();
    }
  });

  // node_modules/core-js/internals/environment-is-node.js
  var require_environment_is_node = __commonJS({
    "node_modules/core-js/internals/environment-is-node.js"(exports, module) {
      "use strict";
      var ENVIRONMENT = require_environment();
      module.exports = ENVIRONMENT === "NODE";
    }
  });

  // node_modules/core-js/modules/es.array.reduce.js
  var require_es_array_reduce = __commonJS({
    "node_modules/core-js/modules/es.array.reduce.js"() {
      "use strict";
      var $2 = require_export();
      var $reduce = require_array_reduce().left;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_environment_v8_version();
      var IS_NODE = require_environment_is_node();
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
      $2({ target: "Array", proto: true, forced: FORCED }, {
        reduce: function reduce(callbackfn) {
          var length = arguments.length;
          return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/delete-property-or-throw.js
  var require_delete_property_or_throw = __commonJS({
    "node_modules/core-js/internals/delete-property-or-throw.js"(exports, module) {
      "use strict";
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(O, P) {
        if (!delete O[P]) throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
      };
    }
  });

  // node_modules/core-js/internals/array-slice.js
  var require_array_slice = __commonJS({
    "node_modules/core-js/internals/array-slice.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis([].slice);
    }
  });

  // node_modules/core-js/internals/array-sort.js
  var require_array_sort = __commonJS({
    "node_modules/core-js/internals/array-sort.js"(exports, module) {
      "use strict";
      var arraySlice = require_array_slice();
      var floor = Math.floor;
      var sort = function(array, comparefn) {
        var length = array.length;
        if (length < 8) {
          var i = 1;
          var element, j;
          while (i < length) {
            j = i;
            element = array[i];
            while (j && comparefn(array[j - 1], element) > 0) {
              array[j] = array[--j];
            }
            if (j !== i++) array[j] = element;
          }
        } else {
          var middle = floor(length / 2);
          var left = sort(arraySlice(array, 0, middle), comparefn);
          var right = sort(arraySlice(array, middle), comparefn);
          var llength = left.length;
          var rlength = right.length;
          var lindex = 0;
          var rindex = 0;
          while (lindex < llength || rindex < rlength) {
            array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
          }
        }
        return array;
      };
      module.exports = sort;
    }
  });

  // node_modules/core-js/internals/environment-ff-version.js
  var require_environment_ff_version = __commonJS({
    "node_modules/core-js/internals/environment-ff-version.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      var firefox = userAgent.match(/firefox\/(\d+)/i);
      module.exports = !!firefox && +firefox[1];
    }
  });

  // node_modules/core-js/internals/environment-is-ie-or-edge.js
  var require_environment_is_ie_or_edge = __commonJS({
    "node_modules/core-js/internals/environment-is-ie-or-edge.js"(exports, module) {
      "use strict";
      var UA = require_environment_user_agent();
      module.exports = /MSIE|Trident/.test(UA);
    }
  });

  // node_modules/core-js/internals/environment-webkit-version.js
  var require_environment_webkit_version = __commonJS({
    "node_modules/core-js/internals/environment-webkit-version.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
      module.exports = !!webkit && +webkit[1];
    }
  });

  // node_modules/core-js/modules/es.array.sort.js
  var require_es_array_sort = __commonJS({
    "node_modules/core-js/modules/es.array.sort.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var deletePropertyOrThrow = require_delete_property_or_throw();
      var toString = require_to_string();
      var fails = require_fails();
      var internalSort = require_array_sort();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var FF = require_environment_ff_version();
      var IE_OR_EDGE = require_environment_is_ie_or_edge();
      var V8 = require_environment_v8_version();
      var WEBKIT = require_environment_webkit_version();
      var test = [];
      var nativeSort = uncurryThis(test.sort);
      var push = uncurryThis(test.push);
      var FAILS_ON_UNDEFINED = fails(function() {
        test.sort(void 0);
      });
      var FAILS_ON_NULL = fails(function() {
        test.sort(null);
      });
      var STRICT_METHOD = arrayMethodIsStrict("sort");
      var STABLE_SORT = !fails(function() {
        if (V8) return V8 < 70;
        if (FF && FF > 3) return;
        if (IE_OR_EDGE) return true;
        if (WEBKIT) return WEBKIT < 603;
        var result = "";
        var code, chr, value, index;
        for (code = 65; code < 76; code++) {
          chr = String.fromCharCode(code);
          switch (code) {
            case 66:
            case 69:
            case 70:
            case 72:
              value = 3;
              break;
            case 68:
            case 71:
              value = 4;
              break;
            default:
              value = 2;
          }
          for (index = 0; index < 47; index++) {
            test.push({ k: chr + index, v: value });
          }
        }
        test.sort(function(a, b) {
          return b.v - a.v;
        });
        for (index = 0; index < test.length; index++) {
          chr = test[index].k.charAt(0);
          if (result.charAt(result.length - 1) !== chr) result += chr;
        }
        return result !== "DGBEFHACIJK";
      });
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
      var getSortCompare = function(comparefn) {
        return function(x, y) {
          if (y === void 0) return -1;
          if (x === void 0) return 1;
          if (comparefn !== void 0) return +comparefn(x, y) || 0;
          var xString = toString(x);
          var yString = toString(y);
          return xString === yString ? 0 : xString > yString ? 1 : -1;
        };
      };
      $2({ target: "Array", proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          if (comparefn !== void 0) aCallable(comparefn);
          var array = toObject(this);
          if (STABLE_SORT) return comparefn === void 0 ? nativeSort(array) : nativeSort(array, comparefn);
          var items = [];
          var arrayLength = lengthOfArrayLike(array);
          var itemsLength, index;
          for (index = 0; index < arrayLength; index++) {
            if (index in array) push(items, array[index]);
          }
          internalSort(items, getSortCompare(comparefn));
          itemsLength = lengthOfArrayLike(items);
          index = 0;
          while (index < itemsLength) array[index] = items[index++];
          while (index < arrayLength) deletePropertyOrThrow(array, index++);
          return array;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.unscopables.flat.js
  var require_es_array_unscopables_flat = __commonJS({
    "node_modules/core-js/modules/es.array.unscopables.flat.js"() {
      "use strict";
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flat");
    }
  });

  // node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/internals/an-instance.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var $TypeError = TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it)) return it;
        throw new $TypeError("Incorrect invocation");
      };
    }
  });

  // node_modules/core-js/modules/es.iterator.constructor.js
  var require_es_iterator_constructor = __commonJS({
    "node_modules/core-js/modules/es.iterator.constructor.js"() {
      "use strict";
      var $2 = require_export();
      var globalThis2 = require_global_this();
      var anInstance = require_an_instance();
      var anObject = require_an_object();
      var isCallable = require_is_callable();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var createProperty = require_create_property();
      var fails = require_fails();
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      var CONSTRUCTOR = "constructor";
      var ITERATOR = "Iterator";
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $TypeError = TypeError;
      var NativeIterator = globalThis2[ITERATOR];
      var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
        NativeIterator({});
      });
      var IteratorConstructor = function Iterator2() {
        anInstance(this, IteratorPrototype);
        if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
      };
      var defineIteratorPrototypeAccessor = function(key, value) {
        if (DESCRIPTORS) {
          defineBuiltInAccessor(IteratorPrototype, key, {
            configurable: true,
            get: function() {
              return value;
            },
            set: function(replacement) {
              anObject(this);
              if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
              if (hasOwn(this, key)) this[key] = replacement;
              else createProperty(this, key, replacement);
            }
          });
        } else IteratorPrototype[key] = value;
      };
      if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
      if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
        defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
      }
      IteratorConstructor.prototype = IteratorPrototype;
      $2({ global: true, constructor: true, forced: FORCED }, {
        Iterator: IteratorConstructor
      });
    }
  });

  // node_modules/core-js/internals/get-iterator-direct.js
  var require_get_iterator_direct = __commonJS({
    "node_modules/core-js/internals/get-iterator-direct.js"(exports, module) {
      "use strict";
      module.exports = function(obj) {
        return {
          iterator: obj,
          next: obj.next,
          done: false
        };
      };
    }
  });

  // node_modules/core-js/internals/define-built-ins.js
  var require_define_built_ins = __commonJS({
    "node_modules/core-js/internals/define-built-ins.js"(exports, module) {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      module.exports = function(target, src, options) {
        for (var key in src) defineBuiltIn(target, key, src[key], options);
        return target;
      };
    }
  });

  // node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js/internals/iterator-close.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw") throw value;
        if (innerError) throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });

  // node_modules/core-js/internals/iterator-close-all.js
  var require_iterator_close_all = __commonJS({
    "node_modules/core-js/internals/iterator-close-all.js"(exports, module) {
      "use strict";
      var iteratorClose = require_iterator_close();
      module.exports = function(iters, kind, value) {
        for (var i = iters.length - 1; i >= 0; i--) {
          if (iters[i] === void 0) continue;
          try {
            value = iteratorClose(iters[i].iterator, kind, value);
          } catch (error) {
            kind = "throw";
            value = error;
          }
        }
        if (kind === "throw") throw value;
        return value;
      };
    }
  });

  // node_modules/core-js/internals/iterator-cleanup-state.js
  var require_iterator_cleanup_state = __commonJS({
    "node_modules/core-js/internals/iterator-cleanup-state.js"(exports, module) {
      "use strict";
      module.exports = function(state) {
        state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner = state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
      };
    }
  });

  // node_modules/core-js/internals/iterator-create-proxy.js
  var require_iterator_create_proxy = __commonJS({
    "node_modules/core-js/internals/iterator-create-proxy.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var create = require_object_create();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIns = require_define_built_ins();
      var wellKnownSymbol = require_well_known_symbol();
      var InternalStateModule = require_internal_state();
      var getMethod = require_get_method();
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var createIterResultObject = require_create_iter_result_object();
      var iteratorClose = require_iterator_close();
      var iteratorCloseAll = require_iterator_close_all();
      var cleanupState = require_iterator_cleanup_state();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var ITERATOR_HELPER = "IteratorHelper";
      var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
      var NORMAL = "normal";
      var THROW = "throw";
      var setInternalState = InternalStateModule.set;
      var createIteratorProxyPrototype = function(IS_ITERATOR) {
        var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
        return defineBuiltIns(create(IteratorPrototype), {
          next: function next() {
            var state = getInternalState(this);
            if (IS_ITERATOR) return state.nextHandler();
            if (state.done) return createIterResultObject(void 0, true);
            try {
              var result = state.nextHandler();
              if (state.done) cleanupState(state);
              return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
            } catch (error) {
              state.done = true;
              cleanupState(state);
              throw error;
            }
          },
          "return": function() {
            var state = getInternalState(this);
            var iterator = state.iterator;
            var inner = state.inner;
            var openIters = state.openIters;
            var done = state.done;
            state.done = true;
            if (IS_ITERATOR) {
              var returnMethod = getMethod(iterator, "return");
              return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
            }
            cleanupState(state);
            if (done) return createIterResultObject(void 0, true);
            if (inner) try {
              iteratorClose(inner.iterator, NORMAL);
            } catch (error) {
              return iteratorClose(iterator, THROW, error);
            }
            if (openIters) try {
              iteratorCloseAll(openIters, NORMAL);
            } catch (error) {
              if (iterator) return iteratorClose(iterator, THROW, error);
              throw error;
            }
            if (iterator) iteratorClose(iterator, NORMAL);
            return createIterResultObject(void 0, true);
          }
        });
      };
      var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
      var IteratorHelperPrototype = createIteratorProxyPrototype(false);
      createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
      module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
        var IteratorProxy = function Iterator2(record, state) {
          if (state) {
            state.iterator = record.iterator;
            state.next = record.next;
          } else state = record;
          state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
          state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
          state.nextHandler = nextHandler;
          state.counter = 0;
          state.done = false;
          setInternalState(this, state);
        };
        IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
        return IteratorProxy;
      };
    }
  });

  // node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
  var require_iterator_helper_throws_on_invalid_iterator = __commonJS({
    "node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js"(exports, module) {
      "use strict";
      module.exports = function(methodName, argument) {
        var method = typeof Iterator == "function" && Iterator.prototype[methodName];
        if (method) try {
          method.call({ next: null }, argument).next();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
  var require_iterator_helper_without_closing_on_early_error = __commonJS({
    "node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      module.exports = function(METHOD_NAME, ExpectedError) {
        var Iterator2 = globalThis2.Iterator;
        var IteratorPrototype = Iterator2 && Iterator2.prototype;
        var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
        var CLOSED = false;
        if (method) try {
          method.call({
            next: function() {
              return { done: true };
            },
            "return": function() {
              CLOSED = true;
            }
          }, -1);
        } catch (error) {
          if (!(error instanceof ExpectedError)) CLOSED = false;
        }
        if (!CLOSED) return method;
      };
    }
  });

  // node_modules/core-js/modules/es.iterator.filter.js
  var require_es_iterator_filter = __commonJS({
    "node_modules/core-js/modules/es.iterator.filter.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var createIteratorProxy = require_iterator_create_proxy();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var IS_PURE = require_is_pure();
      var iteratorClose = require_iterator_close();
      var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {
      });
      var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
      var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
      var IteratorProxy = createIteratorProxy(function() {
        var iterator = this.iterator;
        var predicate = this.predicate;
        var next = this.next;
        var result, done, value;
        while (true) {
          result = anObject(call(next, iterator));
          done = this.done = !!result.done;
          if (done) return;
          value = result.value;
          if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
        }
      });
      $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
        filter: function filter(predicate) {
          anObject(this);
          try {
            aCallable(predicate);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
          return new IteratorProxy(getIteratorDirect(this), {
            predicate
          });
        }
      });
    }
  });

  // node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-method-internal.js
  var require_get_iterator_method_internal = __commonJS({
    "node_modules/core-js/internals/get-iterator-method-internal.js"(exports, module) {
      "use strict";
      var classof = require_classof_raw();
      var isNullOrUndefined = require_is_null_or_undefined();
      var getMethod = require_get_method();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || (classof(it) === "Arguments" ? ArrayPrototype[ITERATOR] : void 0);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-internal.js
  var require_get_iterator_internal = __commonJS({
    "node_modules/core-js/internals/get-iterator-internal.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method_internal();
      var $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js/internals/iterate.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var call = require_function_call();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like();
      var isPrototypeOf = require_object_is_prototype_of();
      var getIterator = require_get_iterator_internal();
      var getIteratorMethod = require_get_iterator_method_internal();
      var iteratorClose = require_iterator_close();
      var $TypeError = TypeError;
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var ResultPrototype = Result.prototype;
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_RECORD = !!(options && options.IS_RECORD);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that);
        var iterator, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          var $iterator = iterator;
          iterator = void 0;
          if ($iterator) iteratorClose($iterator, "normal");
          return new Result(true, condition);
        };
        var callFn = function(value2) {
          if (AS_ENTRIES) {
            anObject(value2);
            return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
          }
          return INTERRUPTED ? fn(value2, stop) : fn(value2);
        };
        if (IS_RECORD) {
          iterator = iterable.iterator;
        } else if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
          }
          iterator = getIterator(iterable, iterFn);
        }
        next = IS_RECORD ? iterable.next : iterator.next;
        while (!(step = call(next, iterator)).done) {
          var value = step.value;
          try {
            result = callFn(value);
          } catch (error) {
            if (iterator) iteratorClose(iterator, "throw", error);
            else throw error;
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js/modules/es.iterator.find.js
  var require_es_iterator_find = __commonJS({
    "node_modules/core-js/modules/es.iterator.find.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("find", TypeError);
      $2({ target: "Iterator", proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
        find: function find(predicate) {
          anObject(this);
          try {
            aCallable(predicate);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
          var record = getIteratorDirect(this);
          var counter = 0;
          return iterate(record, function(value, stop) {
            if (predicate(value, counter++)) return stop(value);
          }, { IS_RECORD: true, INTERRUPTED: true }).result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.for-each.js
  var require_es_iterator_for_each = __commonJS({
    "node_modules/core-js/modules/es.iterator.for-each.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
      $2({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
        forEach: function forEach(fn) {
          anObject(this);
          try {
            aCallable(fn);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
          var record = getIteratorDirect(this);
          var counter = 0;
          iterate(record, function(value) {
            fn(value, counter++);
          }, { IS_RECORD: true });
        }
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.map.js
  var require_es_iterator_map = __commonJS({
    "node_modules/core-js/modules/es.iterator.map.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var createIteratorProxy = require_iterator_create_proxy();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var iteratorClose = require_iterator_close();
      var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var IS_PURE = require_is_pure();
      var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {
      });
      var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
      var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
      var IteratorProxy = createIteratorProxy(function() {
        var iterator = this.iterator;
        var result = anObject(call(this.next, iterator));
        var done = this.done = !!result.done;
        if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
      });
      $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
        map: function map(mapper) {
          anObject(this);
          try {
            aCallable(mapper);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
          return new IteratorProxy(getIteratorDirect(this), {
            mapper
          });
        }
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.reduce.js
  var require_es_iterator_reduce = __commonJS({
    "node_modules/core-js/modules/es.iterator.reduce.js"() {
      "use strict";
      var $2 = require_export();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var apply = require_function_apply();
      var fails = require_fails();
      var $TypeError = TypeError;
      var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
        [].keys().reduce(function() {
        }, void 0);
      });
      var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
      $2({ target: "Iterator", proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
        reduce: function reduce(reducer) {
          anObject(this);
          try {
            aCallable(reducer);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          var noInitial = arguments.length < 2;
          var accumulator = noInitial ? void 0 : arguments[1];
          if (reduceWithoutClosingOnEarlyError) {
            return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
          }
          var record = getIteratorDirect(this);
          var counter = 0;
          iterate(record, function(value) {
            if (noInitial) {
              noInitial = false;
              accumulator = value;
            } else {
              accumulator = reducer(accumulator, value, counter);
            }
            counter++;
          }, { IS_RECORD: true });
          if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
          return accumulator;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.some.js
  var require_es_iterator_some = __commonJS({
    "node_modules/core-js/modules/es.iterator.some.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("some", TypeError);
      $2({ target: "Iterator", proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
        some: function some(predicate) {
          anObject(this);
          try {
            aCallable(predicate);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);
          var record = getIteratorDirect(this);
          var counter = 0;
          return iterate(record, function(value, stop) {
            if (predicate(value, counter++)) return stop();
          }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
        }
      });
    }
  });

  // node_modules/core-js/internals/parse-json-string.js
  var require_parse_json_string = __commonJS({
    "node_modules/core-js/internals/parse-json-string.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var $SyntaxError = SyntaxError;
      var $parseInt = parseInt;
      var fromCharCode = String.fromCharCode;
      var at = uncurryThis("".charAt);
      var slice = uncurryThis("".slice);
      var exec = uncurryThis(/./.exec);
      var codePoints = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "	"
      };
      var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
      var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
      module.exports = function(source, i) {
        var unterminated = true;
        var value = "";
        while (i < source.length) {
          var chr = at(source, i);
          if (chr === "\\") {
            var twoChars = slice(source, i, i + 2);
            if (hasOwn(codePoints, twoChars)) {
              value += codePoints[twoChars];
              i += 2;
            } else if (twoChars === "\\u") {
              i += 2;
              var fourHexDigits = slice(source, i, i + 4);
              if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
              value += fromCharCode($parseInt(fourHexDigits, 16));
              i += 4;
            } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
          } else if (chr === '"') {
            unterminated = false;
            i++;
            break;
          } else {
            if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
            value += chr;
            i++;
          }
        }
        if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
        return { value, end: i };
      };
    }
  });

  // node_modules/core-js/modules/es.json.parse.js
  var require_es_json_parse = __commonJS({
    "node_modules/core-js/modules/es.json.parse.js"() {
      "use strict";
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var globalThis2 = require_global_this();
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var isArray = require_is_array();
      var hasOwn = require_has_own_property();
      var toString = require_to_string();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var fails = require_fails();
      var parseJSONString = require_parse_json_string();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var JSON2 = globalThis2.JSON;
      var Number2 = globalThis2.Number;
      var SyntaxError2 = globalThis2.SyntaxError;
      var nativeParse = JSON2 && JSON2.parse;
      var enumerableOwnProperties = getBuiltIn("Object", "keys");
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var at = uncurryThis("".charAt);
      var slice = uncurryThis("".slice);
      var exec = uncurryThis(/./.exec);
      var push = uncurryThis([].push);
      var IS_DIGIT = /^\d$/;
      var IS_NON_ZERO_DIGIT = /^[1-9]$/;
      var IS_NUMBER_START = /^[\d-]$/;
      var IS_WHITESPACE = /^[\t\n\r ]$/;
      var PRIMITIVE = 0;
      var OBJECT = 1;
      var $parse = function(source, reviver) {
        source = toString(source);
        var context = new Context(source, 0);
        var root = context.parse();
        var value = root.value;
        var endIndex = context.skip(IS_WHITESPACE, root.end);
        if (endIndex < source.length) {
          throw new SyntaxError2('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
        }
        return isCallable(reviver) ? internalize({ "": value }, "", reviver, root) : value;
      };
      var internalize = function(holder, name, reviver, node) {
        var val = holder[name];
        var unmodified = node && val === node.value;
        var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
        var elementRecordsLen, keys, len, i, P;
        if (isObject(val)) {
          var nodeIsArray = isArray(val);
          var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
          if (nodeIsArray) {
            elementRecordsLen = nodes.length;
            len = lengthOfArrayLike(val);
            for (i = 0; i < len; i++) {
              internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
            }
          } else {
            keys = enumerableOwnProperties(val);
            len = lengthOfArrayLike(keys);
            for (i = 0; i < len; i++) {
              P = keys[i];
              internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
            }
          }
        }
        return call(reviver, holder, name, val, context);
      };
      var internalizeProperty = function(object, key, value) {
        if (DESCRIPTORS) {
          var descriptor = getOwnPropertyDescriptor(object, key);
          if (descriptor && !descriptor.configurable) return;
        }
        if (value === void 0) delete object[key];
        else createProperty(object, key, value);
      };
      var Node = function(value, end, source, nodes) {
        this.value = value;
        this.end = end;
        this.source = source;
        this.nodes = nodes;
      };
      var Context = function(source, index) {
        this.source = source;
        this.index = index;
      };
      Context.prototype = {
        fork: function(nextIndex) {
          return new Context(this.source, nextIndex);
        },
        parse: function() {
          var source = this.source;
          var i = this.skip(IS_WHITESPACE, this.index);
          var fork = this.fork(i);
          var chr = at(source, i);
          if (exec(IS_NUMBER_START, chr)) return fork.number();
          switch (chr) {
            case "{":
              return fork.object();
            case "[":
              return fork.array();
            case '"':
              return fork.string();
            case "t":
              return fork.keyword(true);
            case "f":
              return fork.keyword(false);
            case "n":
              return fork.keyword(null);
          }
          throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
        },
        node: function(type, value, start, end, nodes) {
          return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
        },
        object: function() {
          var source = this.source;
          var i = this.index + 1;
          var expectKeypair = false;
          var object = {};
          var nodes = {};
          var closed = false;
          while (i < source.length) {
            i = this.until(['"', "}"], i);
            if (at(source, i) === "}" && !expectKeypair) {
              i++;
              closed = true;
              break;
            }
            var result = this.fork(i).string();
            var key = result.value;
            i = result.end;
            i = this.until([":"], i) + 1;
            i = this.skip(IS_WHITESPACE, i);
            result = this.fork(i).parse();
            createProperty(nodes, key, result);
            createProperty(object, key, result.value);
            i = this.until([",", "}"], result.end);
            var chr = at(source, i);
            if (chr === ",") {
              expectKeypair = true;
              i++;
            } else if (chr === "}") {
              i++;
              closed = true;
              break;
            }
          }
          if (!closed) throw new SyntaxError2("Unterminated object at: " + i);
          return this.node(OBJECT, object, this.index, i, nodes);
        },
        array: function() {
          var source = this.source;
          var i = this.index + 1;
          var expectElement = false;
          var array = [];
          var nodes = [];
          var closed = false;
          while (i < source.length) {
            i = this.skip(IS_WHITESPACE, i);
            if (at(source, i) === "]" && !expectElement) {
              i++;
              closed = true;
              break;
            }
            var result = this.fork(i).parse();
            push(nodes, result);
            push(array, result.value);
            i = this.until([",", "]"], result.end);
            if (at(source, i) === ",") {
              expectElement = true;
              i++;
            } else if (at(source, i) === "]") {
              i++;
              closed = true;
              break;
            }
          }
          if (!closed) throw new SyntaxError2("Unterminated array at: " + i);
          return this.node(OBJECT, array, this.index, i, nodes);
        },
        string: function() {
          var index = this.index;
          var parsed = parseJSONString(this.source, this.index + 1);
          return this.node(PRIMITIVE, parsed.value, index, parsed.end);
        },
        number: function() {
          var source = this.source;
          var startIndex = this.index;
          var i = startIndex;
          if (at(source, i) === "-") i++;
          if (at(source, i) === "0") i++;
          else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
          else throw new SyntaxError2("Failed to parse number at: " + i);
          if (at(source, i) === ".") {
            var fractionStartIndex = i + 1;
            i = this.skip(IS_DIGIT, fractionStartIndex);
            if (fractionStartIndex === i) throw new SyntaxError2("Failed to parse number's fraction at: " + i);
          }
          if (at(source, i) === "e" || at(source, i) === "E") {
            i++;
            if (at(source, i) === "+" || at(source, i) === "-") i++;
            var exponentStartIndex = i;
            i = this.skip(IS_DIGIT, i);
            if (exponentStartIndex === i) throw new SyntaxError2("Failed to parse number's exponent value at: " + i);
          }
          return this.node(PRIMITIVE, Number2(slice(source, startIndex, i)), startIndex, i);
        },
        keyword: function(value) {
          var keyword = "" + value;
          var index = this.index;
          var endIndex = index + keyword.length;
          if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError2("Failed to parse value at: " + index);
          return this.node(PRIMITIVE, value, index, endIndex);
        },
        skip: function(regex, i) {
          var source = this.source;
          for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
          return i;
        },
        until: function(array, i) {
          i = this.skip(IS_WHITESPACE, i);
          var chr = at(this.source, i);
          for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
          throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
        }
      };
      var NO_SOURCE_SUPPORT = fails(function() {
        var unsafeInt = "9007199254740993";
        var source;
        nativeParse(unsafeInt, function(key, value, context) {
          source = context.source;
        });
        return source !== unsafeInt;
      });
      var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
        return 1 / nativeParse("-0 	") !== -Infinity;
      });
      $2({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
        parse: function parse(text, reviver) {
          return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
        }
      });
    }
  });

  // node_modules/core-js/internals/is-raw-json.js
  var require_is_raw_json = __commonJS({
    "node_modules/core-js/internals/is-raw-json.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var getInternalState = require_internal_state().get;
      module.exports = function isRawJSON(O) {
        if (!isObject(O)) return false;
        var state = getInternalState(O);
        return !!state && state.type === "RawJSON";
      };
    }
  });

  // node_modules/core-js/internals/this-number-value.js
  var require_this_number_value = __commonJS({
    "node_modules/core-js/internals/this-number-value.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis(1.1.valueOf);
    }
  });

  // node_modules/core-js/internals/native-raw-json.js
  var require_native_raw_json = __commonJS({
    "node_modules/core-js/internals/native-raw-json.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var unsafeInt = "9007199254740993";
        var raw = JSON.rawJSON(unsafeInt);
        return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
      });
    }
  });

  // node_modules/core-js/modules/es.json.stringify.js
  var require_es_json_stringify = __commonJS({
    "node_modules/core-js/modules/es.json.stringify.js"() {
      "use strict";
      var $2 = require_export();
      var getBuiltIn = require_get_built_in();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isArray = require_is_array();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var isRawJSON = require_is_raw_json();
      var isSymbol = require_is_symbol();
      var classof = require_classof_raw();
      var thisNumberValue = require_this_number_value();
      var includes = require_array_includes().includes;
      var hasOwn = require_has_own_property();
      var toString = require_to_string();
      var parseJSONString = require_parse_json_string();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var NATIVE_RAW_JSON = require_native_raw_json();
      var $String = String;
      var $TypeError = TypeError;
      var $stringify = getBuiltIn("JSON", "stringify");
      var $BigInt = getBuiltIn("BigInt");
      var stringValueOf = uncurryThis("".valueOf);
      var booleanValueOf = uncurryThis(true.valueOf);
      var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
      var exec = uncurryThis(/./.exec);
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var replace = uncurryThis("".replace);
      var slice = uncurryThis("".slice);
      var push = uncurryThis([].push);
      var pop = uncurryThis([].pop);
      var numberToString = uncurryThis(1.1.toString);
      var surrogates = /[\uD800-\uDFFF]/g;
      var leadingSurrogates = /^[\uD800-\uDBFF]$/;
      var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
      var digits = /^\d+$/;
      var RAW_MARK = uid();
      var KEY_MARK = uid();
      var END_MARK = uid();
      var RAW_MARK_LENGTH = RAW_MARK.length;
      var KEY_MARK_LENGTH = KEY_MARK.length;
      var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
        var symbol = getBuiltIn("Symbol")("stringify detection");
        return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
      });
      var ILL_FORMED_UNICODE = fails(function() {
        return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
      });
      var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON;
      var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
        return $stringify(it, function(key, value) {
          var replaced = call(replacer, this, key, value);
          if (!isSymbol(replaced)) return replaced;
        }, space);
      } : $stringify;
      var fixIllFormedJSON = function(match, offset, string) {
        var prev = charAt(string, offset - 1);
        var next = charAt(string, offset + 1);
        if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
          return "\\u" + numberToString(charCodeAt(match, 0), 16);
        }
        return match;
      };
      var getPropertyList = function(replacer) {
        if (!isArray(replacer)) return;
        var rawLength = replacer.length;
        var propertyList = [];
        var addedKeys = create(null);
        for (var i = 0; i < rawLength; i++) {
          var element = replacer[i];
          var key;
          if (typeof element == "string") key = element;
          else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") key = toString(element);
          else continue;
          if (!hasOwn(addedKeys, key)) {
            addedKeys[key] = true;
            push(propertyList, key);
          }
        }
        return propertyList;
      };
      var hasInternalSlot = function(valueOf, it) {
        try {
          valueOf(it);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isBoxedPrimitive = function(it) {
        var kind = classof(it);
        return kind === "Number" && hasInternalSlot(thisNumberValue, it) || kind === "String" && hasInternalSlot(stringValueOf, it) || kind === "Boolean" && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && kind === "BigInt" && hasInternalSlot(bigIntValueOf, it);
      };
      var isSerializedAsObject = function(it) {
        if (!isObject(it) || isCallable(it) || isArray(it)) return false;
        try {
          return !isBoxedPrimitive(it);
        } catch (error) {
          return true;
        }
      };
      var createElementHolder = function(holder, key) {
        return {
          toJSON: function() {
            var element = holder[key];
            if (isObject(element) || typeof element == "bigint") {
              var elementToJSON = element.toJSON;
              if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
            }
            return element;
          }
        };
      };
      var getKeyPrefix = function(propertyList) {
        for (var i = 0, length = propertyList.length; i < length; i++) {
          if (exec(digits, propertyList[i])) return KEY_MARK;
        }
        return "";
      };
      var createOrderedObject = function(value, propertyList, keyPrefix) {
        var ordered = create(null);
        for (var i = 0, length = propertyList.length; i < length; i++) {
          var key = propertyList[i];
          ordered[keyPrefix + key] = createElementHolder(value, key);
        }
        ordered[END_MARK] = null;
        return ordered;
      };
      if ($stringify) $2({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
        stringify: function stringify(text, replacer, space) {
          var replacerFunction = isCallable(replacer) ? replacer : void 0;
          var propertyList = replacerFunction ? void 0 : getPropertyList(replacer);
          var keyPrefix = propertyList && getKeyPrefix(propertyList);
          var rawStrings = [];
          var openObjects = [];
          var parentOrdered = [];
          var currentOrdered;
          var marked = false;
          var root = true;
          var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
            key = $String(key);
            if (propertyList) {
              if (key === END_MARK) {
                pop(openObjects);
                currentOrdered = pop(parentOrdered);
                return;
              }
              if (root) root = false;
              else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
            } else if (replacerFunction) value = call(replacerFunction, this, key, value);
            if (isRawJSONValue(value)) {
              if (NATIVE_RAW_JSON) return value;
              marked = true;
              return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
            }
            if (propertyList && isSerializedAsObject(value)) {
              if (includes(openObjects, value)) throw new $TypeError("Converting circular structure to JSON");
              var ordered = createOrderedObject(value, propertyList, keyPrefix);
              push(openObjects, value);
              push(parentOrdered, currentOrdered);
              currentOrdered = ordered;
              if (keyPrefix) marked = true;
              return ordered;
            }
            return value;
          }, space);
          if (typeof json != "string") return json;
          if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
          if (!marked) return json;
          var result = "";
          var length = json.length;
          for (var i = 0; i < length; i++) {
            var chr = charAt(json, i);
            if (chr === '"') {
              var end = parseJSONString(json, ++i).end - 1;
              var string = slice(json, i, end);
              if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
              else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
              else result += '"' + string + '"';
              i = end;
            } else result += chr;
          }
          return result;
        }
      });
    }
  });

  // node_modules/core-js/internals/map-helpers.js
  var require_map_helpers = __commonJS({
    "node_modules/core-js/internals/map-helpers.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var MapPrototype = Map.prototype;
      module.exports = {
        // eslint-disable-next-line es/no-map -- safe
        Map,
        set: uncurryThis(MapPrototype.set),
        get: uncurryThis(MapPrototype.get),
        has: uncurryThis(MapPrototype.has),
        remove: uncurryThis(MapPrototype["delete"]),
        proto: MapPrototype
      };
    }
  });

  // node_modules/core-js/modules/es.map.get-or-insert.js
  var require_es_map_get_or_insert = __commonJS({
    "node_modules/core-js/modules/es.map.get-or-insert.js"() {
      "use strict";
      var $2 = require_export();
      var MapHelpers = require_map_helpers();
      var IS_PURE = require_is_pure();
      var get = MapHelpers.get;
      var has = MapHelpers.has;
      var set = MapHelpers.set;
      $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
        getOrInsert: function getOrInsert(key, value) {
          if (has(this, key)) return get(this, key);
          set(this, key, value);
          return value;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.map.get-or-insert-computed.js
  var require_es_map_get_or_insert_computed = __commonJS({
    "node_modules/core-js/modules/es.map.get-or-insert-computed.js"() {
      "use strict";
      var $2 = require_export();
      var aCallable = require_a_callable();
      var MapHelpers = require_map_helpers();
      var IS_PURE = require_is_pure();
      var get = MapHelpers.get;
      var has = MapHelpers.has;
      var set = MapHelpers.set;
      $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
        getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
          var hasKey = has(this, key);
          aCallable(callbackfn);
          if (hasKey) return get(this, key);
          if (key === 0 && 1 / key === -Infinity) key = 0;
          var value = callbackfn(key);
          set(this, key, value);
          return value;
        }
      });
    }
  });

  // node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js/internals/path.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      module.exports = globalThis2;
    }
  });

  // node_modules/core-js/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/internals/set-species.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineBuiltInAccessor(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // node_modules/core-js/internals/a-constructor.js
  var require_a_constructor = __commonJS({
    "node_modules/core-js/internals/a-constructor.js"(exports, module) {
      "use strict";
      var isConstructor = require_is_constructor();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isConstructor(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a constructor");
      };
    }
  });

  // node_modules/core-js/internals/species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/core-js/internals/species-constructor.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var aConstructor = require_a_constructor();
      var isNullOrUndefined = require_is_null_or_undefined();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
      };
    }
  });

  // node_modules/core-js/internals/validate-arguments-length.js
  var require_validate_arguments_length = __commonJS({
    "node_modules/core-js/internals/validate-arguments-length.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      module.exports = function(passed, required) {
        if (passed < required) throw new $TypeError("Not enough arguments");
        return passed;
      };
    }
  });

  // node_modules/core-js/internals/environment-is-ios.js
  var require_environment_is_ios = __commonJS({
    "node_modules/core-js/internals/environment-is-ios.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && /applewebkit/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/task.js
  var require_task = __commonJS({
    "node_modules/core-js/internals/task.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var apply = require_function_apply();
      var bind = require_function_bind_context();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var fails = require_fails();
      var html = require_html();
      var arraySlice = require_array_slice();
      var createElement = require_document_create_element();
      var validateArgumentsLength = require_validate_arguments_length();
      var IS_IOS = require_environment_is_ios();
      var IS_NODE = require_environment_is_node();
      var set = globalThis2.setImmediate;
      var clear = globalThis2.clearImmediate;
      var process = globalThis2.process;
      var Dispatch = globalThis2.Dispatch;
      var Function2 = globalThis2.Function;
      var MessageChannel = globalThis2.MessageChannel;
      var String2 = globalThis2.String;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var $location;
      var defer;
      var channel;
      var port;
      fails(function() {
        $location = globalThis2.location;
      });
      var run = function(id) {
        if (hasOwn(queue, id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var runner = function(id) {
        return function() {
          run(id);
        };
      };
      var eventListener = function(event) {
        run(event.data);
      };
      var globalPostMessageDefer = function(id) {
        globalThis2.postMessage(String2(id), $location.protocol + "//" + $location.host);
      };
      if (!set || !clear) {
        set = function setImmediate(handler) {
          validateArgumentsLength(arguments.length, 1);
          var fn = isCallable(handler) ? handler : Function2(handler);
          var args = arraySlice(arguments, 1);
          queue[++counter] = function() {
            apply(fn, void 0, args);
          };
          defer(counter);
          return counter;
        };
        clear = function clearImmediate(id) {
          delete queue[id];
        };
        if (IS_NODE) {
          defer = function(id) {
            process.nextTick(runner(id));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(runner(id));
          };
        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = eventListener;
          defer = bind(port.postMessage, port);
        } else if (globalThis2.addEventListener && isCallable(globalThis2.postMessage) && !globalThis2.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
          defer = globalPostMessageDefer;
          globalThis2.addEventListener("message", eventListener, false);
        } else if (ONREADYSTATECHANGE in createElement("script")) {
          defer = function(id) {
            html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(runner(id), 0);
          };
        }
      }
      module.exports = {
        set,
        clear
      };
    }
  });

  // node_modules/core-js/internals/safe-get-built-in.js
  var require_safe_get_built_in = __commonJS({
    "node_modules/core-js/internals/safe-get-built-in.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var DESCRIPTORS = require_descriptors();
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      module.exports = function(name) {
        if (!DESCRIPTORS) return globalThis2[name];
        var descriptor = getOwnPropertyDescriptor(globalThis2, name);
        return descriptor && descriptor.value;
      };
    }
  });

  // node_modules/core-js/internals/queue.js
  var require_queue = __commonJS({
    "node_modules/core-js/internals/queue.js"(exports, module) {
      "use strict";
      var Queue = function() {
        this.head = null;
        this.tail = null;
      };
      Queue.prototype = {
        add: function(item) {
          var entry = { item, next: null };
          var tail = this.tail;
          if (tail) tail.next = entry;
          else this.head = entry;
          this.tail = entry;
        },
        get: function() {
          var entry = this.head;
          if (entry) {
            var next = this.head = entry.next;
            if (next === null) this.tail = null;
            return entry.item;
          }
        }
      };
      module.exports = Queue;
    }
  });

  // node_modules/core-js/internals/environment-is-ios-pebble.js
  var require_environment_is_ios_pebble = __commonJS({
    "node_modules/core-js/internals/environment-is-ios-pebble.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
    }
  });

  // node_modules/core-js/internals/environment-is-webos-webkit.js
  var require_environment_is_webos_webkit = __commonJS({
    "node_modules/core-js/internals/environment-is-webos-webkit.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/microtask.js
  var require_microtask = __commonJS({
    "node_modules/core-js/internals/microtask.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var safeGetBuiltIn = require_safe_get_built_in();
      var bind = require_function_bind_context();
      var macrotask = require_task().set;
      var Queue = require_queue();
      var IS_IOS = require_environment_is_ios();
      var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
      var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
      var IS_NODE = require_environment_is_node();
      var MutationObserver = globalThis2.MutationObserver || globalThis2.WebKitMutationObserver;
      var document2 = globalThis2.document;
      var process = globalThis2.process;
      var Promise2 = globalThis2.Promise;
      var microtask = safeGetBuiltIn("queueMicrotask");
      var notify;
      var toggle;
      var node;
      var promise;
      var then;
      if (!microtask) {
        queue = new Queue();
        flush = function() {
          var parent, fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();
          while (fn = queue.get()) try {
            fn();
          } catch (error) {
            if (queue.head) notify();
            throw error;
          }
          if (parent) parent.enter();
        };
        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
          toggle = true;
          node = document2.createTextNode("");
          new MutationObserver(flush).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
          promise = Promise2.resolve(void 0);
          promise.constructor = Promise2;
          then = bind(promise.then, promise);
          notify = function() {
            then(flush);
          };
        } else if (IS_NODE) {
          notify = function() {
            process.nextTick(flush);
          };
        } else {
          macrotask = bind(macrotask, globalThis2);
          notify = function() {
            macrotask(flush);
          };
        }
        microtask = function(fn) {
          if (!queue.head) notify();
          queue.add(fn);
        };
      }
      var queue;
      var flush;
      module.exports = microtask;
    }
  });

  // node_modules/core-js/internals/host-report-errors.js
  var require_host_report_errors = __commonJS({
    "node_modules/core-js/internals/host-report-errors.js"(exports, module) {
      "use strict";
      module.exports = function(a, b) {
        try {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        } catch (error) {
        }
      };
    }
  });

  // node_modules/core-js/internals/perform.js
  var require_perform = __commonJS({
    "node_modules/core-js/internals/perform.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return { error: false, value: exec() };
        } catch (error) {
          return { error: true, value: error };
        }
      };
    }
  });

  // node_modules/core-js/internals/promise-native-constructor.js
  var require_promise_native_constructor = __commonJS({
    "node_modules/core-js/internals/promise-native-constructor.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      module.exports = globalThis2.Promise;
    }
  });

  // node_modules/core-js/internals/promise-constructor-detection.js
  var require_promise_constructor_detection = __commonJS({
    "node_modules/core-js/internals/promise-constructor-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var NativePromiseConstructor = require_promise_native_constructor();
      var isCallable = require_is_callable();
      var isForced = require_is_forced();
      var inspectSource = require_inspect_source();
      var wellKnownSymbol = require_well_known_symbol();
      var ENVIRONMENT = require_environment();
      var IS_PURE = require_is_pure();
      var V8_VERSION = require_environment_v8_version();
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      var SPECIES = wellKnownSymbol("species");
      var SUBCLASSING = false;
      var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis2.PromiseRejectionEvent);
      var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
        if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
        if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
          var promise = new NativePromiseConstructor(function(resolve) {
            resolve(1);
          });
          var FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
          };
          var constructor = promise.constructor = {};
          constructor[SPECIES] = FakePromise;
          SUBCLASSING = promise.then(function() {
          }) instanceof FakePromise;
          if (!SUBCLASSING) return true;
        }
        return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
      });
      module.exports = {
        CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
        REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
        SUBCLASSING
      };
    }
  });

  // node_modules/core-js/internals/new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/core-js/internals/new-promise-capability.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var $TypeError = TypeError;
      var PromiseCapability = function(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aCallable(resolve);
        this.reject = aCallable(reject);
      };
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/core-js/modules/es.promise.constructor.js
  var require_es_promise_constructor = __commonJS({
    "node_modules/core-js/modules/es.promise.constructor.js"() {
      "use strict";
      var $2 = require_export();
      var IS_PURE = require_is_pure();
      var IS_NODE = require_environment_is_node();
      var globalThis2 = require_global_this();
      var path = require_path();
      var call = require_function_call();
      var defineBuiltIn = require_define_built_in();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var setSpecies = require_set_species();
      var aCallable = require_a_callable();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var anInstance = require_an_instance();
      var speciesConstructor = require_species_constructor();
      var task = require_task().set;
      var microtask = require_microtask();
      var hostReportErrors = require_host_report_errors();
      var perform = require_perform();
      var Queue = require_queue();
      var InternalStateModule = require_internal_state();
      var NativePromiseConstructor = require_promise_native_constructor();
      var PromiseConstructorDetection = require_promise_constructor_detection();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var PROMISE = "Promise";
      var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
      var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
      var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var setInternalState = InternalStateModule.set;
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      var PromiseConstructor = NativePromiseConstructor;
      var PromisePrototype = NativePromisePrototype;
      var TypeError2 = globalThis2.TypeError;
      var document2 = globalThis2.document;
      var process = globalThis2.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document2 && document2.createEvent && globalThis2.dispatchEvent);
      var UNHANDLED_REJECTION = "unhandledrejection";
      var REJECTION_HANDLED = "rejectionhandled";
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var Internal;
      var OwnPromiseCapability;
      var PromiseWrapper;
      var nativeThen;
      var isThenable = function(it) {
        var then;
        return isObject(it) && isCallable(then = it.then) ? then : false;
      };
      var callReaction = function(reaction, state) {
        var value = state.value;
        var ok = state.state === FULFILLED;
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(new TypeError2("Promise-chain cycle"));
            } else if (then = isThenable(result)) {
              call(then, result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      };
      var notify = function(state, isReject) {
        if (state.notified) return;
        state.notified = true;
        microtask(function() {
          var reactions = state.reactions;
          var reaction;
          while (reaction = reactions.get()) {
            callReaction(reaction, state);
          }
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };
      var dispatchEvent = function(name, promise, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
          event = document2.createEvent("Event");
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          globalThis2.dispatchEvent(event);
        } else event = { promise, reason };
        if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis2["on" + name])) handler(event);
        else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
      };
      var onUnhandled = function(state) {
        call(task, globalThis2, function() {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;
          if (IS_UNHANDLED) {
            result = perform(function() {
              if (IS_NODE) {
                process.emit("unhandledRejection", value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };
      var isUnhandled = function(state) {
        return state.rejection !== HANDLED && !state.parent;
      };
      var onHandleUnhandled = function(state) {
        call(task, globalThis2, function() {
          var promise = state.facade;
          if (IS_NODE) {
            process.emit("rejectionHandled", promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };
      var bind = function(fn, state, unwrap) {
        return function(value) {
          fn(state, value, unwrap);
        };
      };
      var internalReject = function(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };
      var internalResolve = function(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        try {
          if (state.facade === value) throw new TypeError2("Promise can't be resolved itself");
          var then = isThenable(value);
          if (then) {
            microtask(function() {
              var wrapper = { done: false };
              try {
                call(
                  then,
                  value,
                  bind(internalResolve, wrapper, state),
                  bind(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({ done: false }, error, state);
        }
      };
      if (FORCED_PROMISE_CONSTRUCTOR) {
        PromiseConstructor = function Promise2(executor) {
          anInstance(this, PromisePrototype);
          aCallable(executor);
          call(Internal, this);
          var state = getInternalPromiseState(this);
          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };
        PromisePrototype = PromiseConstructor.prototype;
        Internal = function Promise2(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new Queue(),
            rejection: false,
            state: PENDING,
            value: null
          });
        };
        Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
          var state = getInternalPromiseState(this);
          var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
          state.parent = true;
          reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
          reaction.fail = isCallable(onRejected) && onRejected;
          reaction.domain = IS_NODE ? process.domain : void 0;
          if (state.state === PENDING) state.reactions.add(reaction);
          else microtask(function() {
            callReaction(reaction, state);
          });
          return reaction.promise;
        });
        OwnPromiseCapability = function() {
          var promise = new Internal();
          var state = getInternalPromiseState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
        if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;
          if (!NATIVE_PROMISE_SUBCLASSING) {
            defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve, reject) {
                call(nativeThen, that, resolve, reject);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
          }
          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
          }
          if (setPrototypeOf) {
            setPrototypeOf(NativePromisePrototype, PromisePrototype);
          }
        }
      }
      $2({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        Promise: PromiseConstructor
      });
      PromiseWrapper = path.Promise;
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
    }
  });

  // node_modules/core-js/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module.exports = function(exec, SKIP_CLOSING) {
        try {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        } catch (error) {
          return false;
        }
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js/internals/promise-statics-incorrect-iteration.js
  var require_promise_statics_incorrect_iteration = __commonJS({
    "node_modules/core-js/internals/promise-statics-incorrect-iteration.js"(exports, module) {
      "use strict";
      var NativePromiseConstructor = require_promise_native_constructor();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
        NativePromiseConstructor.all(iterable).then(void 0, function() {
        });
      });
    }
  });

  // node_modules/core-js/modules/es.promise.all.js
  var require_es_promise_all = __commonJS({
    "node_modules/core-js/modules/es.promise.all.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var iterate = require_iterate();
      var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $2({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapabilityModule.f(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
              var index = counter++;
              var alreadyCalled = false;
              remaining++;
              call($promiseResolve, C, promise).then(function(value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.promise.catch.js
  var require_es_promise_catch = __commonJS({
    "node_modules/core-js/modules/es.promise.catch.js"() {
      "use strict";
      var $2 = require_export();
      var IS_PURE = require_is_pure();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      var NativePromiseConstructor = require_promise_native_constructor();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var defineBuiltIn = require_define_built_in();
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      $2({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
        "catch": function(onRejected) {
          return this.then(void 0, onRejected);
        }
      });
      if (!IS_PURE && isCallable(NativePromiseConstructor)) {
        method = getBuiltIn("Promise").prototype["catch"];
        if (NativePromisePrototype["catch"] !== method) {
          defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: true });
        }
      }
      var method;
    }
  });

  // node_modules/core-js/modules/es.promise.race.js
  var require_es_promise_race = __commonJS({
    "node_modules/core-js/modules/es.promise.race.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var iterate = require_iterate();
      var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $2({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapabilityModule.f(C);
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
              call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.promise.reject.js
  var require_es_promise_reject = __commonJS({
    "node_modules/core-js/modules/es.promise.reject.js"() {
      "use strict";
      var $2 = require_export();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      $2({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        reject: function reject(r) {
          var capability = newPromiseCapabilityModule.f(this);
          var capabilityReject = capability.reject;
          capabilityReject(r);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/internals/promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/core-js/internals/promise-resolve.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var isObject = require_is_object();
      var newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
    }
  });

  // node_modules/core-js/modules/es.promise.resolve.js
  var require_es_promise_resolve = __commonJS({
    "node_modules/core-js/modules/es.promise.resolve.js"() {
      "use strict";
      var $2 = require_export();
      var getBuiltIn = require_get_built_in();
      var IS_PURE = require_is_pure();
      var NativePromiseConstructor = require_promise_native_constructor();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      var promiseResolve = require_promise_resolve();
      var PromiseConstructorWrapper = getBuiltIn("Promise");
      var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
      $2({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
        resolve: function resolve(x) {
          return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.promise.js
  var require_es_promise = __commonJS({
    "node_modules/core-js/modules/es.promise.js"() {
      "use strict";
      require_es_promise_constructor();
      require_es_promise_all();
      require_es_promise_catch();
      require_es_promise_race();
      require_es_promise_reject();
      require_es_promise_resolve();
    }
  });

  // node_modules/core-js/modules/es.promise.finally.js
  var require_es_promise_finally = __commonJS({
    "node_modules/core-js/modules/es.promise.finally.js"() {
      "use strict";
      var $2 = require_export();
      var IS_PURE = require_is_pure();
      var NativePromiseConstructor = require_promise_native_constructor();
      var fails = require_fails();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var speciesConstructor = require_species_constructor();
      var promiseResolve = require_promise_resolve();
      var defineBuiltIn = require_define_built_in();
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      var NON_GENERIC = !!NativePromiseConstructor && fails(function() {
        NativePromisePrototype["finally"].call({ then: function() {
        } }, function() {
        });
      });
      $2({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
        "finally": function(onFinally) {
          var C = speciesConstructor(this, getBuiltIn("Promise"));
          var isFunction = isCallable(onFinally);
          return this.then(
            isFunction ? function(x) {
              return promiseResolve(C, onFinally()).then(function() {
                return x;
              });
            } : onFinally,
            isFunction ? function(e) {
              return promiseResolve(C, onFinally()).then(function() {
                throw e;
              });
            } : onFinally
          );
        }
      });
      if (!IS_PURE && isCallable(NativePromiseConstructor)) {
        method = getBuiltIn("Promise").prototype["finally"];
        if (NativePromisePrototype["finally"] !== method) {
          defineBuiltIn(NativePromisePrototype, "finally", method, { unsafe: true });
        }
      }
      var method;
    }
  });

  // node_modules/core-js/internals/is-regexp.js
  var require_is_regexp = __commonJS({
    "node_modules/core-js/internals/is-regexp.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var classof = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var MATCH = wellKnownSymbol("match");
      module.exports = function(it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
      };
    }
  });

  // node_modules/core-js/internals/regexp-flags-detection.js
  var require_regexp_flags_detection = __commonJS({
    "node_modules/core-js/internals/regexp-flags-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var fails = require_fails();
      var RegExp2 = globalThis2.RegExp;
      var FLAGS_GETTER_IS_CORRECT = !fails(function() {
        var INDICES_SUPPORT = true;
        try {
          RegExp2(".", "d");
        } catch (error) {
          INDICES_SUPPORT = false;
        }
        var O = {};
        var calls = "";
        var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
        var addGetter = function(key2, chr) {
          Object.defineProperty(O, key2, { get: function() {
            calls += chr;
            return true;
          } });
        };
        var pairs = {
          dotAll: "s",
          global: "g",
          ignoreCase: "i",
          multiline: "m",
          sticky: "y"
        };
        if (INDICES_SUPPORT) pairs.hasIndices = "d";
        for (var key in pairs) addGetter(key, pairs[key]);
        var result = Object.getOwnPropertyDescriptor(RegExp2.prototype, "flags").get.call(O);
        return result !== expected || calls !== expected;
      });
      module.exports = { correct: FLAGS_GETTER_IS_CORRECT };
    }
  });

  // node_modules/core-js/internals/regexp-flags.js
  var require_regexp_flags = __commonJS({
    "node_modules/core-js/internals/regexp-flags.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.hasIndices) result += "d";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.dotAll) result += "s";
        if (that.unicode) result += "u";
        if (that.unicodeSets) result += "v";
        if (that.sticky) result += "y";
        return result;
      };
    }
  });

  // node_modules/core-js/internals/regexp-get-flags.js
  var require_regexp_get_flags = __commonJS({
    "node_modules/core-js/internals/regexp-get-flags.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var hasOwn = require_has_own_property();
      var isPrototypeOf = require_object_is_prototype_of();
      var regExpFlagsDetection = require_regexp_flags_detection();
      var regExpFlagsGetterImplementation = require_regexp_flags();
      var RegExpPrototype = RegExp.prototype;
      module.exports = regExpFlagsDetection.correct ? function(it) {
        return it.flags;
      } : function(it) {
        return !regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, "flags") ? call(regExpFlagsGetterImplementation, it) : it.flags;
      };
    }
  });

  // node_modules/core-js/internals/regexp-sticky-helpers.js
  var require_regexp_sticky_helpers = __commonJS({
    "node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $RegExp = globalThis2.RegExp;
      var UNSUPPORTED_Y = fails(function() {
        var re = $RegExp("a", "y");
        re.lastIndex = 2;
        return re.exec("abcd") !== null;
      });
      var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
        return !$RegExp("a", "y").sticky;
      });
      var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
        var re = $RegExp("^r", "gy");
        re.lastIndex = 2;
        return re.exec("str") !== null;
      });
      module.exports = {
        BROKEN_CARET,
        MISSED_STICKY,
        UNSUPPORTED_Y
      };
    }
  });

  // node_modules/core-js/internals/regexp-unsupported-dot-all.js
  var require_regexp_unsupported_dot_all = __commonJS({
    "node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $RegExp = globalThis2.RegExp;
      module.exports = fails(function() {
        var re = $RegExp(".", "s");
        return !(re.dotAll && re.test("\n") && re.flags === "s");
      });
    }
  });

  // node_modules/core-js/internals/regexp-unsupported-ncg.js
  var require_regexp_unsupported_ncg = __commonJS({
    "node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $RegExp = globalThis2.RegExp;
      module.exports = fails(function() {
        var re = $RegExp("(?<a>b)", "g");
        return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
      });
    }
  });

  // node_modules/core-js/modules/es.regexp.constructor.js
  var require_es_regexp_constructor = __commonJS({
    "node_modules/core-js/modules/es.regexp.constructor.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var globalThis2 = require_global_this();
      var uncurryThis = require_function_uncurry_this();
      var isForced = require_is_forced();
      var inheritIfRequired = require_inherit_if_required();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var create = require_object_create();
      var getOwnPropertyNames = require_object_get_own_property_names().f;
      var isPrototypeOf = require_object_is_prototype_of();
      var isRegExp = require_is_regexp();
      var toString = require_to_string();
      var getRegExpFlags = require_regexp_get_flags();
      var stickyHelpers = require_regexp_sticky_helpers();
      var proxyAccessor = require_proxy_accessor();
      var defineBuiltIn = require_define_built_in();
      var fails = require_fails();
      var hasOwn = require_has_own_property();
      var enforceInternalState = require_internal_state().enforce;
      var setSpecies = require_set_species();
      var wellKnownSymbol = require_well_known_symbol();
      var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
      var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
      var MATCH = wellKnownSymbol("match");
      var NativeRegExp = globalThis2.RegExp;
      var RegExpPrototype = NativeRegExp.prototype;
      var SyntaxError2 = globalThis2.SyntaxError;
      var exec = uncurryThis(RegExpPrototype.exec);
      var charAt = uncurryThis("".charAt);
      var replace = uncurryThis("".replace);
      var stringIndexOf = uncurryThis("".indexOf);
      var stringSlice = uncurryThis("".slice);
      var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
      var re1 = /a/g;
      var re2 = /a/g;
      var CORRECT_NEW = new NativeRegExp(re1) !== re1;
      var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
      var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function() {
        re2[MATCH] = false;
        return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, "i")) !== "/a/i";
      }));
      var handleDotAll = function(string) {
        var length = string.length;
        var index2 = 0;
        var result = "";
        var brackets = false;
        var chr;
        for (; index2 < length; index2++) {
          chr = charAt(string, index2);
          if (chr === "\\") {
            result += chr + charAt(string, ++index2);
            continue;
          }
          if (!brackets && chr === ".") {
            result += "[\\s\\S]";
          } else {
            if (chr === "[") {
              brackets = true;
            } else if (chr === "]") {
              brackets = false;
            }
            result += chr;
          }
        }
        return result;
      };
      var handleNCG = function(string) {
        var length = string.length;
        var index2 = 0;
        var result = "";
        var named = [];
        var names = create(null);
        var brackets = false;
        var ncg = false;
        var groupid = 0;
        var groupname = "";
        var chr;
        for (; index2 < length; index2++) {
          chr = charAt(string, index2);
          if (chr === "\\") {
            chr += charAt(string, ++index2);
            if (!ncg && charAt(chr, 1) === "\\") {
              result += "\\x5c";
              continue;
            }
          } else if (chr === "]") {
            brackets = false;
          } else if (!brackets) switch (true) {
            case chr === "[":
              brackets = true;
              break;
            case chr === "(":
              result += chr;
              if (exec(IS_NCG, stringSlice(string, index2 + 1))) {
                index2 += 2;
                ncg = true;
                groupid++;
              } else if (charAt(string, index2 + 1) !== "?") {
                groupid++;
              }
              continue;
            case (chr === ">" && ncg):
              if (groupname === "" || hasOwn(names, groupname)) {
                throw new SyntaxError2("Invalid capture group name");
              }
              names[groupname] = true;
              named[named.length] = [groupname, groupid];
              ncg = false;
              groupname = "";
              continue;
          }
          if (ncg) groupname += chr;
          else result += chr;
        }
        for (var ni = 0; ni < named.length; ni++) {
          var backref = "\\k<" + named[ni][0] + ">";
          var numRef = "\\" + named[ni][1];
          while (stringIndexOf(result, backref) > -1) {
            result = replace(result, backref, numRef);
          }
        }
        return [result, named];
      };
      if (isForced("RegExp", BASE_FORCED)) {
        RegExpWrapper = function RegExp2(pattern, flags) {
          var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
          var patternIsRegExp = isRegExp(pattern);
          var flagsAreUndefined = flags === void 0;
          var groups = [];
          var rawPattern = pattern;
          var rawFlags, dotAll, sticky, handled, result, state;
          if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
            return pattern;
          }
          if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
            pattern = pattern.source;
            if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
          }
          pattern = pattern === void 0 ? "" : toString(pattern);
          flags = flags === void 0 ? "" : toString(flags);
          rawPattern = pattern;
          if (UNSUPPORTED_DOT_ALL && "dotAll" in re1) {
            dotAll = !!flags && stringIndexOf(flags, "s") > -1;
            if (dotAll) flags = replace(flags, /s/g, "");
          }
          rawFlags = flags;
          if (MISSED_STICKY && "sticky" in re1) {
            sticky = !!flags && stringIndexOf(flags, "y") > -1;
            if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, "");
          }
          if (UNSUPPORTED_NCG) {
            handled = handleNCG(pattern);
            pattern = handled[0];
            groups = handled[1];
          }
          result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
          if (dotAll || sticky || groups.length) {
            state = enforceInternalState(result);
            if (dotAll) {
              state.dotAll = true;
              state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
            }
            if (sticky) state.sticky = true;
            if (groups.length) state.groups = groups;
          }
          if (pattern !== rawPattern) try {
            createNonEnumerableProperty(result, "source", rawPattern === "" ? "(?:)" : rawPattern);
          } catch (error) {
          }
          return result;
        };
        for (keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index; ) {
          proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
        }
        RegExpPrototype.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype;
        defineBuiltIn(globalThis2, "RegExp", RegExpWrapper, { constructor: true });
      }
      var RegExpWrapper;
      var keys;
      var index;
      setSpecies("RegExp");
    }
  });

  // node_modules/core-js/modules/es.regexp.dot-all.js
  var require_es_regexp_dot_all = __commonJS({
    "node_modules/core-js/modules/es.regexp.dot-all.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
      var classof = require_classof_raw();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var getInternalState = require_internal_state().get;
      var RegExpPrototype = RegExp.prototype;
      var $TypeError = TypeError;
      if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
        defineBuiltInAccessor(RegExpPrototype, "dotAll", {
          configurable: true,
          get: function dotAll() {
            if (this === RegExpPrototype) return;
            if (classof(this) === "RegExp") {
              return !!getInternalState(this).dotAll;
            }
            throw new $TypeError("Incompatible receiver, RegExp required");
          }
        });
      }
    }
  });

  // node_modules/core-js/internals/regexp-exec.js
  var require_regexp_exec = __commonJS({
    "node_modules/core-js/internals/regexp-exec.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var regexpFlags = require_regexp_flags();
      var stickyHelpers = require_regexp_sticky_helpers();
      var shared = require_shared();
      var create = require_object_create();
      var getInternalState = require_internal_state().get;
      var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
      var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
      var nativeReplace = shared("native-string-replace", String.prototype.replace);
      var nativeExec = RegExp.prototype.exec;
      var patchedExec = nativeExec;
      var charAt = uncurryThis("".charAt);
      var indexOf = uncurryThis("".indexOf);
      var replace = uncurryThis("".replace);
      var stringSlice = uncurryThis("".slice);
      var UPDATES_LAST_INDEX_WRONG = (function() {
        var re1 = /a/;
        var re2 = /b*/g;
        call(nativeExec, re1, "a");
        call(nativeExec, re2, "a");
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      })();
      var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
      var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
      var setGroups = function(re, groups) {
        var object = re.groups = create(null);
        for (var i = 0; i < groups.length; i++) {
          var group = groups[i];
          object[group[0]] = re[group[1]];
        }
      };
      if (PATCH) {
        patchedExec = function exec(string) {
          var re = this;
          var state = getInternalState(re);
          var str = toString(string);
          var raw = state.raw;
          var result, reCopy, lastIndex;
          if (raw) {
            raw.lastIndex = re.lastIndex;
            result = call(patchedExec, raw, str);
            re.lastIndex = raw.lastIndex;
            if (result && state.groups) setGroups(result, state.groups);
            return result;
          }
          var groups = state.groups;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = call(regexpFlags, re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;
          if (sticky) {
            flags = replace(flags, "y", "");
            if (indexOf(flags, "g") === -1) {
              flags += "g";
            }
            strCopy = stringSlice(str, re.lastIndex);
            var prevChar = re.lastIndex > 0 && charAt(str, re.lastIndex - 1);
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && prevChar !== "\n" && prevChar !== "\r" && prevChar !== "\u2028" && prevChar !== "\u2029")) {
              source = "(?: (?:" + source + "))";
              strCopy = " " + strCopy;
              charsAdded++;
            }
            reCopy = new RegExp("^(?:" + source + ")", flags);
          }
          if (NPCG_INCLUDED) {
            reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
          var match = call(nativeExec, sticky ? reCopy : re, strCopy);
          if (sticky) {
            if (match) {
              match.input = str;
              match[0] = stringSlice(match[0], charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            call(nativeReplace, match[0], reCopy, function() {
              for (var i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === void 0) match[i] = void 0;
              }
            });
          }
          if (match && groups) setGroups(match, groups);
          return match;
        };
      }
      module.exports = patchedExec;
    }
  });

  // node_modules/core-js/modules/es.regexp.exec.js
  var require_es_regexp_exec = __commonJS({
    "node_modules/core-js/modules/es.regexp.exec.js"() {
      "use strict";
      var $2 = require_export();
      var exec = require_regexp_exec();
      $2({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
        exec
      });
    }
  });

  // node_modules/core-js/internals/set-helpers.js
  var require_set_helpers = __commonJS({
    "node_modules/core-js/internals/set-helpers.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var SetPrototype = Set.prototype;
      module.exports = {
        // eslint-disable-next-line es/no-set -- safe
        Set,
        add: uncurryThis(SetPrototype.add),
        has: uncurryThis(SetPrototype.has),
        remove: uncurryThis(SetPrototype["delete"]),
        proto: SetPrototype
      };
    }
  });

  // node_modules/core-js/internals/a-set.js
  var require_a_set = __commonJS({
    "node_modules/core-js/internals/a-set.js"(exports, module) {
      "use strict";
      var has = require_set_helpers().has;
      module.exports = function(it) {
        has(it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/iterate-simple.js
  var require_iterate_simple = __commonJS({
    "node_modules/core-js/internals/iterate-simple.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
        var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
        var next = record.next;
        var step, result;
        while (!(step = call(next, iterator)).done) {
          result = fn(step.value);
          if (result !== void 0) return result;
        }
      };
    }
  });

  // node_modules/core-js/internals/set-iterate.js
  var require_set_iterate = __commonJS({
    "node_modules/core-js/internals/set-iterate.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var iterateSimple = require_iterate_simple();
      var SetHelpers = require_set_helpers();
      var Set2 = SetHelpers.Set;
      var SetPrototype = SetHelpers.proto;
      var forEach = uncurryThis(SetPrototype.forEach);
      var keys = uncurryThis(SetPrototype.keys);
      var next = keys(new Set2()).next;
      module.exports = function(set, fn, interruptible) {
        return interruptible ? iterateSimple({ iterator: keys(set), next }, fn) : forEach(set, fn);
      };
    }
  });

  // node_modules/core-js/internals/set-clone.js
  var require_set_clone = __commonJS({
    "node_modules/core-js/internals/set-clone.js"(exports, module) {
      "use strict";
      var SetHelpers = require_set_helpers();
      var iterate = require_set_iterate();
      var Set2 = SetHelpers.Set;
      var add = SetHelpers.add;
      module.exports = function(set) {
        var result = new Set2();
        iterate(set, function(it) {
          add(result, it);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/internals/set-size.js
  var require_set_size = __commonJS({
    "node_modules/core-js/internals/set-size.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var SetHelpers = require_set_helpers();
      module.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
        return set.size;
      };
    }
  });

  // node_modules/core-js/internals/get-set-record.js
  var require_get_set_record = __commonJS({
    "node_modules/core-js/internals/get-set-record.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var call = require_function_call();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var getIteratorDirect = require_get_iterator_direct();
      var INVALID_SIZE = "Invalid size";
      var $RangeError = RangeError;
      var $TypeError = TypeError;
      var max = Math.max;
      var SetRecord = function(set, intSize) {
        this.set = set;
        this.size = max(intSize, 0);
        this.has = aCallable(set.has);
        this.keys = aCallable(set.keys);
      };
      SetRecord.prototype = {
        getIterator: function() {
          return getIteratorDirect(anObject(call(this.keys, this.set)));
        },
        includes: function(it) {
          return call(this.has, this.set, it);
        }
      };
      module.exports = function(obj) {
        anObject(obj);
        var numSize = +obj.size;
        if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
        var intSize = toIntegerOrInfinity(numSize);
        if (intSize < 0) throw new $RangeError(INVALID_SIZE);
        return new SetRecord(obj, intSize);
      };
    }
  });

  // node_modules/core-js/internals/set-difference.js
  var require_set_difference = __commonJS({
    "node_modules/core-js/internals/set-difference.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var SetHelpers = require_set_helpers();
      var clone = require_set_clone();
      var size = require_set_size();
      var getSetRecord = require_get_set_record();
      var iterateSet = require_set_iterate();
      var iterateSimple = require_iterate_simple();
      var has = SetHelpers.has;
      var remove = SetHelpers.remove;
      module.exports = function difference(other) {
        var O = aSet(this);
        var otherRec = getSetRecord(other);
        var result = clone(O);
        if (size(result) <= otherRec.size) iterateSet(result, function(e) {
          if (otherRec.includes(e)) remove(result, e);
        });
        else iterateSimple(otherRec.getIterator(), function(e) {
          if (has(result, e)) remove(result, e);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/internals/set-method-accept-set-like.js
  var require_set_method_accept_set_like = __commonJS({
    "node_modules/core-js/internals/set-method-accept-set-like.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var createSetLike = function(size) {
        return {
          size,
          has: function() {
            return false;
          },
          keys: function() {
            return {
              next: function() {
                return { done: true };
              }
            };
          }
        };
      };
      var createSetLikeWithInfinitySize = function(size) {
        return {
          size,
          has: function() {
            return true;
          },
          keys: function() {
            throw new Error("e");
          }
        };
      };
      module.exports = function(name, callback) {
        var Set2 = getBuiltIn("Set");
        try {
          new Set2()[name](createSetLike(0));
          try {
            new Set2()[name](createSetLike(-1));
            return false;
          } catch (error2) {
            if (!callback) return true;
            try {
              new Set2()[name](createSetLikeWithInfinitySize(-Infinity));
              return false;
            } catch (error) {
              var set = new Set2([1, 2]);
              return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
            }
          }
        } catch (error) {
          return false;
        }
      };
    }
  });

  // node_modules/core-js/modules/es.set.difference.v2.js
  var require_es_set_difference_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.difference.v2.js"() {
      "use strict";
      var $2 = require_export();
      var difference = require_set_difference();
      var fails = require_fails();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike("difference", function(result) {
        return result.size === 0;
      });
      var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function() {
        var setLike = {
          size: 1,
          has: function() {
            return true;
          },
          keys: function() {
            var index = 0;
            return {
              next: function() {
                var done = index++ > 1;
                if (baseSet.has(1)) baseSet.clear();
                return { done, value: 2 };
              }
            };
          }
        };
        var baseSet = /* @__PURE__ */ new Set([1, 2, 3, 4]);
        return baseSet.difference(setLike).size !== 3;
      });
      $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
        difference
      });
    }
  });

  // node_modules/core-js/internals/set-intersection.js
  var require_set_intersection = __commonJS({
    "node_modules/core-js/internals/set-intersection.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var SetHelpers = require_set_helpers();
      var size = require_set_size();
      var getSetRecord = require_get_set_record();
      var iterateSet = require_set_iterate();
      var iterateSimple = require_iterate_simple();
      var Set2 = SetHelpers.Set;
      var add = SetHelpers.add;
      var has = SetHelpers.has;
      module.exports = function intersection(other) {
        var O = aSet(this);
        var otherRec = getSetRecord(other);
        var result = new Set2();
        if (size(O) > otherRec.size) {
          iterateSimple(otherRec.getIterator(), function(e) {
            if (has(O, e)) add(result, e);
          });
        } else {
          iterateSet(O, function(e) {
            if (otherRec.includes(e)) add(result, e);
          });
        }
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es.set.intersection.v2.js
  var require_es_set_intersection_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.intersection.v2.js"() {
      "use strict";
      var $2 = require_export();
      var fails = require_fails();
      var intersection = require_set_intersection();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var INCORRECT = !setMethodAcceptSetLike("intersection", function(result) {
        return result.size === 2 && result.has(1) && result.has(2);
      }) || fails(function() {
        return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
      });
      $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
        intersection
      });
    }
  });

  // node_modules/core-js/internals/set-is-disjoint-from.js
  var require_set_is_disjoint_from = __commonJS({
    "node_modules/core-js/internals/set-is-disjoint-from.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var has = require_set_helpers().has;
      var size = require_set_size();
      var getSetRecord = require_get_set_record();
      var iterateSet = require_set_iterate();
      var iterateSimple = require_iterate_simple();
      var iteratorClose = require_iterator_close();
      module.exports = function isDisjointFrom(other) {
        var O = aSet(this);
        var otherRec = getSetRecord(other);
        if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
          if (otherRec.includes(e)) return false;
        }, true) !== false;
        var iterator = otherRec.getIterator();
        return iterateSimple(iterator, function(e) {
          if (has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
        }) !== false;
      };
    }
  });

  // node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
  var require_es_set_is_disjoint_from_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.is-disjoint-from.v2.js"() {
      "use strict";
      var $2 = require_export();
      var isDisjointFrom = require_set_is_disjoint_from();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var INCORRECT = !setMethodAcceptSetLike("isDisjointFrom", function(result) {
        return !result;
      });
      $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
        isDisjointFrom
      });
    }
  });

  // node_modules/core-js/internals/set-is-subset-of.js
  var require_set_is_subset_of = __commonJS({
    "node_modules/core-js/internals/set-is-subset-of.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var size = require_set_size();
      var iterate = require_set_iterate();
      var getSetRecord = require_get_set_record();
      module.exports = function isSubsetOf(other) {
        var O = aSet(this);
        var otherRec = getSetRecord(other);
        if (size(O) > otherRec.size) return false;
        return iterate(O, function(e) {
          if (!otherRec.includes(e)) return false;
        }, true) !== false;
      };
    }
  });

  // node_modules/core-js/modules/es.set.is-subset-of.v2.js
  var require_es_set_is_subset_of_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.is-subset-of.v2.js"() {
      "use strict";
      var $2 = require_export();
      var isSubsetOf = require_set_is_subset_of();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var INCORRECT = !setMethodAcceptSetLike("isSubsetOf", function(result) {
        return result;
      });
      $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
        isSubsetOf
      });
    }
  });

  // node_modules/core-js/internals/set-is-superset-of.js
  var require_set_is_superset_of = __commonJS({
    "node_modules/core-js/internals/set-is-superset-of.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var has = require_set_helpers().has;
      var size = require_set_size();
      var getSetRecord = require_get_set_record();
      var iterateSimple = require_iterate_simple();
      var iteratorClose = require_iterator_close();
      module.exports = function isSupersetOf(other) {
        var O = aSet(this);
        var otherRec = getSetRecord(other);
        if (size(O) < otherRec.size) return false;
        var iterator = otherRec.getIterator();
        return iterateSimple(iterator, function(e) {
          if (!has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
        }) !== false;
      };
    }
  });

  // node_modules/core-js/modules/es.set.is-superset-of.v2.js
  var require_es_set_is_superset_of_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.is-superset-of.v2.js"() {
      "use strict";
      var $2 = require_export();
      var isSupersetOf = require_set_is_superset_of();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var INCORRECT = !setMethodAcceptSetLike("isSupersetOf", function(result) {
        return !result;
      });
      $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
        isSupersetOf
      });
    }
  });

  // node_modules/core-js/internals/set-symmetric-difference.js
  var require_set_symmetric_difference = __commonJS({
    "node_modules/core-js/internals/set-symmetric-difference.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var SetHelpers = require_set_helpers();
      var clone = require_set_clone();
      var getSetRecord = require_get_set_record();
      var iterateSimple = require_iterate_simple();
      var add = SetHelpers.add;
      var has = SetHelpers.has;
      var remove = SetHelpers.remove;
      module.exports = function symmetricDifference(other) {
        var O = aSet(this);
        var keysIter = getSetRecord(other).getIterator();
        var result = clone(O);
        iterateSimple(keysIter, function(e) {
          if (has(O, e)) remove(result, e);
          else add(result, e);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js
  var require_set_method_get_keys_before_cloning_detection = __commonJS({
    "node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js"(exports, module) {
      "use strict";
      module.exports = function(METHOD_NAME) {
        try {
          var baseSet = /* @__PURE__ */ new Set();
          var setLike = {
            size: 0,
            has: function() {
              return true;
            },
            keys: function() {
              return Object.defineProperty({}, "next", {
                get: function() {
                  baseSet.clear();
                  baseSet.add(4);
                  return function() {
                    return { done: true };
                  };
                }
              });
            }
          };
          var result = baseSet[METHOD_NAME](setLike);
          return result.size === 1 && result.values().next().value === 4;
        } catch (error) {
          return false;
        }
      };
    }
  });

  // node_modules/core-js/modules/es.set.symmetric-difference.v2.js
  var require_es_set_symmetric_difference_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.symmetric-difference.v2.js"() {
      "use strict";
      var $2 = require_export();
      var symmetricDifference = require_set_symmetric_difference();
      var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var FORCED = !setMethodAcceptSetLike("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference");
      $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
        symmetricDifference
      });
    }
  });

  // node_modules/core-js/internals/set-union.js
  var require_set_union = __commonJS({
    "node_modules/core-js/internals/set-union.js"(exports, module) {
      "use strict";
      var aSet = require_a_set();
      var add = require_set_helpers().add;
      var clone = require_set_clone();
      var getSetRecord = require_get_set_record();
      var iterateSimple = require_iterate_simple();
      module.exports = function union(other) {
        var O = aSet(this);
        var keysIter = getSetRecord(other).getIterator();
        var result = clone(O);
        iterateSimple(keysIter, function(it) {
          add(result, it);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es.set.union.v2.js
  var require_es_set_union_v2 = __commonJS({
    "node_modules/core-js/modules/es.set.union.v2.js"() {
      "use strict";
      var $2 = require_export();
      var union = require_set_union();
      var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
      var setMethodAcceptSetLike = require_set_method_accept_set_like();
      var FORCED = !setMethodAcceptSetLike("union") || !setMethodGetKeysBeforeCloning("union");
      $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
        union
      });
    }
  });

  // node_modules/core-js/internals/string-repeat.js
  var require_string_repeat = __commonJS({
    "node_modules/core-js/internals/string-repeat.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var $RangeError = RangeError;
      var floor = Math.floor;
      module.exports = function repeat(count) {
        var str = toString(requireObjectCoercible(this));
        var result = "";
        var n = toIntegerOrInfinity(count);
        if (n < 0 || n === Infinity) throw new $RangeError("Wrong number of repetitions");
        for (; n > 0; (n = floor(n / 2)) && (str += str)) if (n % 2) result += str;
        return result;
      };
    }
  });

  // node_modules/core-js/internals/string-pad.js
  var require_string_pad = __commonJS({
    "node_modules/core-js/internals/string-pad.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toLength = require_to_length();
      var toString = require_to_string();
      var $repeat = require_string_repeat();
      var requireObjectCoercible = require_require_object_coercible();
      var repeat = uncurryThis($repeat);
      var stringSlice = uncurryThis("".slice);
      var ceil = Math.ceil;
      var createMethod = function(IS_END) {
        return function($this, maxLength, fillString) {
          var S = toString(requireObjectCoercible($this));
          var intMaxLength = toLength(maxLength);
          var stringLength = S.length;
          if (intMaxLength <= stringLength) return S;
          var fillStr = fillString === void 0 ? " " : toString(fillString);
          var fillLen, stringFiller;
          if (fillStr === "") return S;
          fillLen = intMaxLength - stringLength;
          stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
          return IS_END ? S + stringFiller : stringFiller + S;
        };
      };
      module.exports = {
        // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart
        start: createMethod(false),
        // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend
        end: createMethod(true)
      };
    }
  });

  // node_modules/core-js/internals/string-pad-webkit-bug.js
  var require_string_pad_webkit_bug = __commonJS({
    "node_modules/core-js/internals/string-pad-webkit-bug.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);
    }
  });

  // node_modules/core-js/modules/es.string.pad-end.js
  var require_es_string_pad_end = __commonJS({
    "node_modules/core-js/modules/es.string.pad-end.js"() {
      "use strict";
      var $2 = require_export();
      var $padEnd = require_string_pad().end;
      var WEBKIT_BUG = require_string_pad_webkit_bug();
      $2({ target: "String", proto: true, forced: WEBKIT_BUG }, {
        padEnd: function padEnd(maxLength) {
          return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.string.pad-start.js
  var require_es_string_pad_start = __commonJS({
    "node_modules/core-js/modules/es.string.pad-start.js"() {
      "use strict";
      var $2 = require_export();
      var $padStart = require_string_pad().start;
      var WEBKIT_BUG = require_string_pad_webkit_bug();
      $2({ target: "String", proto: true, forced: WEBKIT_BUG }, {
        padStart: function padStart(maxLength) {
          return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
  var require_fix_regexp_well_known_symbol_logic = __commonJS({
    "node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"(exports, module) {
      "use strict";
      require_es_regexp_exec();
      var call = require_function_call();
      var defineBuiltIn = require_define_built_in();
      var regexpExec = require_regexp_exec();
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var SPECIES = wellKnownSymbol("species");
      var RegExpPrototype = RegExp.prototype;
      module.exports = function(KEY, exec, FORCED, SHAM) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function() {
          var O = {};
          O[SYMBOL] = function() {
            return 7;
          };
          return ""[KEY](O) !== 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
          var execCalled = false;
          var re = /a/;
          if (KEY === "split") {
            var constructor = {};
            constructor[SPECIES] = function() {
              return re;
            };
            re = { constructor, flags: "" };
            re[SYMBOL] = /./[SYMBOL];
          }
          re.exec = function() {
            execCalled = true;
            return null;
          };
          re[SYMBOL]("");
          return !execCalled;
        });
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
              }
              return { done: true, value: call(nativeMethod, str, regexp, arg2) };
            }
            return { done: false };
          });
          defineBuiltIn(String.prototype, KEY, methods[0]);
          defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
        }
        if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
      };
    }
  });

  // node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var stringSlice = uncurryThis("".slice);
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString(requireObjectCoercible($this));
          var position = toIntegerOrInfinity(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
          first = charCodeAt(S, position);
          return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js/internals/advance-string-index.js
  var require_advance_string_index = __commonJS({
    "node_modules/core-js/internals/advance-string-index.js"(exports, module) {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      module.exports = function(S, index, unicode) {
        return index + (unicode ? charAt(S, index).length || 1 : 1);
      };
    }
  });

  // node_modules/core-js/internals/get-substitution.js
  var require_get_substitution = __commonJS({
    "node_modules/core-js/internals/get-substitution.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var floor = Math.floor;
      var charAt = uncurryThis("".charAt);
      var replace = uncurryThis("".replace);
      var stringSlice = uncurryThis("".slice);
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
      module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== void 0) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return replace(replacement, symbols, function(match, ch) {
          var capture;
          switch (charAt(ch, 0)) {
            case "$":
              return "$";
            case "&":
              return matched;
            case "`":
              return stringSlice(str, 0, position);
            case "'":
              return stringSlice(str, tailPos);
            case "<":
              capture = namedCaptures[stringSlice(ch, 1, -1)];
              break;
            default:
              var n = +ch;
              if (n === 0) return match;
              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                return match;
              }
              capture = captures[n - 1];
          }
          return capture === void 0 ? "" : capture;
        });
      };
    }
  });

  // node_modules/core-js/internals/regexp-exec-abstract.js
  var require_regexp_exec_abstract = __commonJS({
    "node_modules/core-js/internals/regexp-exec-abstract.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var anObject = require_an_object();
      var isCallable = require_is_callable();
      var classof = require_classof_raw();
      var regexpExec = require_regexp_exec();
      var $TypeError = TypeError;
      module.exports = function(R, S) {
        var exec = R.exec;
        if (isCallable(exec)) {
          var result = call(exec, R, S);
          if (result !== null) anObject(result);
          return result;
        }
        if (classof(R) === "RegExp") return call(regexpExec, R, S);
        throw new $TypeError("RegExp#exec called on incompatible receiver");
      };
    }
  });

  // node_modules/core-js/modules/es.string.replace.js
  var require_es_string_replace = __commonJS({
    "node_modules/core-js/modules/es.string.replace.js"() {
      "use strict";
      var apply = require_function_apply();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
      var fails = require_fails();
      var anObject = require_an_object();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toLength = require_to_length();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var advanceStringIndex = require_advance_string_index();
      var getMethod = require_get_method();
      var getSubstitution = require_get_substitution();
      var getRegExpFlags = require_regexp_get_flags();
      var regExpExec = require_regexp_exec_abstract();
      var wellKnownSymbol = require_well_known_symbol();
      var REPLACE = wellKnownSymbol("replace");
      var max = Math.max;
      var min = Math.min;
      var concat = uncurryThis([].concat);
      var push = uncurryThis([].push);
      var stringIndexOf = uncurryThis("".indexOf);
      var stringSlice = uncurryThis("".slice);
      var maybeToString = function(it) {
        return it === void 0 ? it : String(it);
      };
      var REPLACE_KEEPS_$0 = (function() {
        return "a".replace(/./, "$0") === "$0";
      })();
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function() {
        if (/./[REPLACE]) {
          return /./[REPLACE]("a", "$0") === "";
        }
        return false;
      })();
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
        var re = /./;
        re.exec = function() {
          var result = [];
          result.groups = { a: "7" };
          return result;
        };
        return "".replace(re, "$<a>") !== "7";
      });
      fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
        return [
          // `String.prototype.replace` method
          // https://tc39.es/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : void 0;
            return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
          function(string, replaceValue) {
            var rx = anObject(this);
            var S = toString(string);
            var functionalReplace = isCallable(replaceValue);
            if (!functionalReplace) replaceValue = toString(replaceValue);
            var flags = toString(getRegExpFlags(rx));
            if (typeof replaceValue == "string" && !~stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) && !~stringIndexOf(replaceValue, "$<") && !~stringIndexOf(flags, "y")) {
              var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
              if (res.done) return res.value;
            }
            var global2 = !!~stringIndexOf(flags, "g");
            var fullUnicode;
            if (global2) {
              fullUnicode = !!~stringIndexOf(flags, "u") || !!~stringIndexOf(flags, "v");
              rx.lastIndex = 0;
            }
            var results = [];
            var result;
            while (true) {
              result = regExpExec(rx, S);
              if (result === null) break;
              push(results, result);
              if (!global2) break;
              var matchStr = toString(result[0]);
              if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = toString(result[0]);
              var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
              var captures = [];
              var replacement;
              for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = concat([matched], captures, position, S);
                if (namedCaptures !== void 0) push(replacerArgs, namedCaptures);
                replacement = toString(apply(replaceValue, void 0, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + stringSlice(S, nextSourcePosition);
          }
        ];
      }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
    }
  });

  // node_modules/core-js/internals/whitespaces.js
  var require_whitespaces = __commonJS({
    "node_modules/core-js/internals/whitespaces.js"(exports, module) {
      "use strict";
      module.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }
  });

  // node_modules/core-js/internals/string-trim.js
  var require_string_trim = __commonJS({
    "node_modules/core-js/internals/string-trim.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var requireObjectCoercible = require_require_object_coercible();
      var toString = require_to_string();
      var whitespaces = require_whitespaces();
      var replace = uncurryThis("".replace);
      var ltrim = RegExp("^[" + whitespaces + "]+");
      var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
      var createMethod = function(TYPE) {
        return function($this) {
          var string = toString(requireObjectCoercible($this));
          if (TYPE & 1) string = replace(string, ltrim, "");
          if (TYPE & 2) string = replace(string, rtrim, "$1");
          return string;
        };
      };
      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
    }
  });

  // node_modules/core-js/internals/string-trim-forced.js
  var require_string_trim_forced = __commonJS({
    "node_modules/core-js/internals/string-trim-forced.js"(exports, module) {
      "use strict";
      var PROPER_FUNCTION_NAME = require_function_name().PROPER;
      var fails = require_fails();
      var whitespaces = require_whitespaces();
      var non = "\u200B\x85\u180E";
      module.exports = function(METHOD_NAME) {
        return fails(function() {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };
    }
  });

  // node_modules/core-js/modules/es.string.trim.js
  var require_es_string_trim = __commonJS({
    "node_modules/core-js/modules/es.string.trim.js"() {
      "use strict";
      var $2 = require_export();
      var $trim = require_string_trim().trim;
      var forcedStringTrimMethod = require_string_trim_forced();
      $2({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
        trim: function trim() {
          return $trim(this);
        }
      });
    }
  });

  // node_modules/core-js/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "node_modules/core-js/internals/dom-iterables.js"(exports, module) {
      "use strict";
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // node_modules/core-js/internals/dom-token-list-prototype.js
  var require_dom_token_list_prototype = __commonJS({
    "node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
      "use strict";
      var documentCreateElement = require_document_create_element();
      var classList = documentCreateElement("span").classList;
      var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
      module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
    }
  });

  // node_modules/core-js/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js/internals/array-iteration.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      var createProperty = require_create_property();
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE === 1;
        var IS_FILTER = TYPE === 2;
        var IS_SOME = TYPE === 3;
        var IS_EVERY = TYPE === 4;
        var IS_FIND_INDEX = TYPE === 6;
        var IS_FILTER_REJECT = TYPE === 7;
        var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var length = lengthOfArrayLike(self2);
          var boundFunction = bind(callbackfn, that);
          var index = 0;
          var resIndex = 0;
          var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : void 0;
          var value, result;
          for (; length > index; index++) if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP) createProperty(target, index, result);
              else if (result) switch (TYPE) {
                case 3:
                  return true;
                // some
                case 5:
                  return value;
                // find
                case 6:
                  return index;
                // findIndex
                case 2:
                  createProperty(target, resIndex++, value);
              }
              else switch (TYPE) {
                case 4:
                  return false;
                // every
                case 7:
                  createProperty(target, resIndex++, value);
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
      };
    }
  });

  // node_modules/core-js/internals/array-for-each.js
  var require_array_for_each = __commonJS({
    "node_modules/core-js/internals/array-for-each.js"(exports, module) {
      "use strict";
      var $forEach = require_array_iteration().forEach;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("forEach");
      module.exports = !STRICT_METHOD ? function forEach(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }
  });

  // node_modules/core-js/modules/web.dom-collections.for-each.js
  var require_web_dom_collections_for_each = __commonJS({
    "node_modules/core-js/modules/web.dom-collections.for-each.js"() {
      "use strict";
      var globalThis2 = require_global_this();
      var DOMIterables = require_dom_iterables();
      var DOMTokenListPrototype = require_dom_token_list_prototype();
      var forEach = require_array_for_each();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var handlePrototype = function(CollectionPrototype) {
        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
          createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
        } catch (error) {
          CollectionPrototype.forEach = forEach;
        }
      };
      for (COLLECTION_NAME in DOMIterables) {
        if (DOMIterables[COLLECTION_NAME]) {
          handlePrototype(globalThis2[COLLECTION_NAME] && globalThis2[COLLECTION_NAME].prototype);
        }
      }
      var COLLECTION_NAME;
      handlePrototype(DOMTokenListPrototype);
    }
  });

  // node_modules/core-js/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "node_modules/core-js/modules/web.dom-collections.iterator.js"() {
      "use strict";
      var globalThis2 = require_global_this();
      var DOMIterables = require_dom_iterables();
      var DOMTokenListPrototype = require_dom_token_list_prototype();
      var ArrayIteratorMethods = require_es_array_iterator();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setToStringTag = require_set_to_string_tag();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayValues = ArrayIteratorMethods.values;
      var handlePrototype = function(CollectionPrototype, COLLECTION_NAME2) {
        if (CollectionPrototype) {
          if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
          }
          setToStringTag(CollectionPrototype, COLLECTION_NAME2, true);
          if (DOMIterables[COLLECTION_NAME2]) for (var METHOD_NAME in ArrayIteratorMethods) {
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
              createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
          }
        }
      };
      for (COLLECTION_NAME in DOMIterables) {
        handlePrototype(globalThis2[COLLECTION_NAME] && globalThis2[COLLECTION_NAME].prototype, COLLECTION_NAME);
      }
      var COLLECTION_NAME;
      handlePrototype(DOMTokenListPrototype, "DOMTokenList");
    }
  });

  // node_modules/core-js/internals/dom-exception-constants.js
  var require_dom_exception_constants = __commonJS({
    "node_modules/core-js/internals/dom-exception-constants.js"(exports, module) {
      "use strict";
      module.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 }
      };
    }
  });

  // node_modules/core-js/modules/web.dom-exception.stack.js
  var require_web_dom_exception_stack = __commonJS({
    "node_modules/core-js/modules/web.dom-exception.stack.js"() {
      "use strict";
      var $2 = require_export();
      var globalThis2 = require_global_this();
      var getBuiltIn = require_get_built_in();
      var createPropertyDescriptor = require_create_property_descriptor();
      var defineProperty = require_object_define_property().f;
      var hasOwn = require_has_own_property();
      var anInstance = require_an_instance();
      var inheritIfRequired = require_inherit_if_required();
      var normalizeStringArgument = require_normalize_string_argument();
      var DOMExceptionConstants = require_dom_exception_constants();
      var clearErrorStack = require_error_stack_clear();
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      var DOM_EXCEPTION = "DOMException";
      var Error2 = getBuiltIn("Error");
      var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
      var $DOMException = function DOMException() {
        anInstance(this, DOMExceptionPrototype);
        var argumentsLength = arguments.length;
        var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
        var name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error");
        var that = new NativeDOMException(message, name);
        var error = new Error2(message);
        error.name = DOM_EXCEPTION;
        defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
        inheritIfRequired(that, this, $DOMException);
        return that;
      };
      var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
      var ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION);
      var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
      var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION);
      var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
      var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
      $2({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, {
        // TODO: fix export logic
        DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
      });
      var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
      var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
      if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
        if (!IS_PURE) {
          defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
        }
        for (key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
          constant = DOMExceptionConstants[key];
          constantName = constant.s;
          if (!hasOwn(PolyfilledDOMException, constantName)) {
            defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
          }
        }
      }
      var constant;
      var constantName;
      var key;
    }
  });

  // node_modules/core-js/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return createIterResultObject(void 0, true);
        point = charAt(string, index);
        state.index += point.length;
        return createIterResultObject(point, false);
      });
    }
  });

  // node_modules/core-js/internals/url-constructor-detection.js
  var require_url_constructor_detection = __commonJS({
    "node_modules/core-js/internals/url-constructor-detection.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = !fails(function() {
        var url = new URL("b?a=1&b=2&c=3", "https://a");
        var params = url.searchParams;
        var params2 = new URLSearchParams("a=1&a=2&b=3");
        var result = "";
        url.pathname = "c%20d";
        params.forEach(function(value, key) {
          params["delete"]("b");
          result += key + value;
        });
        params2["delete"]("a", 2);
        params2["delete"]("b", void 0);
        return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new URL("https://a#\u0431").hash !== "#%D0%B1" || result !== "a1c3" || new URL("https://x", void 0).host !== "x";
      });
    }
  });

  // node_modules/core-js/internals/object-assign.js
  var require_object_assign = __commonJS({
    "node_modules/core-js/internals/object-assign.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var uncurryThis = require_function_uncurry_this();
      var call = require_function_call();
      var fails = require_fails();
      var objectKeys = require_object_keys();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var $assign = Object.assign;
      var defineProperty = Object.defineProperty;
      var concat = uncurryThis([].concat);
      module.exports = !$assign || fails(function() {
        if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
          enumerable: true,
          get: function() {
            defineProperty(this, "b", {
              value: 3,
              enumerable: false
            });
          }
        }), { b: 2 })).b !== 1) return true;
        var A = {};
        var B = {};
        var symbol = /* @__PURE__ */ Symbol("assign detection");
        var alphabet = "abcdefghijklmnopqrst";
        A[symbol] = 7;
        alphabet.split("").forEach(function(chr) {
          B[chr] = chr;
        });
        return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
          }
        }
        return T;
      } : $assign;
    }
  });

  // node_modules/core-js/internals/array-from.js
  var require_array_from = __commonJS({
    "node_modules/core-js/internals/array-from.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var call = require_function_call();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var setArrayLength = require_array_set_length();
      var getIterator = require_get_iterator_internal();
      var getIteratorMethod = require_get_iterator_method_internal();
      var iteratorClose = require_iterator_close();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var $Array = Array;
      module.exports = function from(arrayLike) {
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
        var O = toObject(arrayLike);
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
          result = IS_CONSTRUCTOR ? new this() : [];
          iterator = getIterator(O, iteratorMethod);
          next = iterator.next;
          for (; !(step = call(next, iterator)).done; index++) {
            try {
              doesNotExceedSafeInteger(index);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            try {
              createProperty(result, index, value);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
          }
        } else {
          length = lengthOfArrayLike(O);
          result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }
        setArrayLength(result, index);
        return result;
      };
    }
  });

  // node_modules/core-js/internals/string-punycode-to-ascii.js
  var require_string_punycode_to_ascii = __commonJS({
    "node_modules/core-js/internals/string-punycode-to-ascii.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexNonASCII = /[^\0-\u007E]/;
      var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
      var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
      var baseMinusTMin = base - tMin;
      var $RangeError = RangeError;
      var exec = uncurryThis(regexSeparators.exec);
      var floor = Math.floor;
      var fromCharCode = String.fromCharCode;
      var charCodeAt = uncurryThis("".charCodeAt);
      var join = uncurryThis([].join);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var split = uncurryThis("".split);
      var toLowerCase = uncurryThis("".toLowerCase);
      var ucs2decode = function(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = charCodeAt(string, counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            var extra = charCodeAt(string, counter++);
            if ((extra & 64512) === 56320) {
              push(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              push(output, value);
              counter--;
            }
          } else {
            push(output, value);
          }
        }
        return output;
      };
      var digitToBasic = function(digit) {
        return digit + 22 + 75 * (digit < 26);
      };
      var adapt = function(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        while (delta > baseMinusTMin * tMax >> 1) {
          delta = floor(delta / baseMinusTMin);
          k += base;
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var encode = function(input) {
        var output = [];
        input = ucs2decode(input);
        var inputLength = input.length;
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var i, currentValue;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < 128) {
            push(output, fromCharCode(currentValue));
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        if (basicLength) {
          push(output, delimiter);
        }
        while (handledCPCount < inputLength) {
          var m = maxInt;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            throw new $RangeError(OVERFLOW_ERROR);
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue < n && ++delta > maxInt) {
              throw new $RangeError(OVERFLOW_ERROR);
            }
            if (currentValue === n) {
              var q = delta;
              var k = base;
              while (true) {
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) break;
                var qMinusT = q - t;
                var baseMinusT = base - t;
                push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                q = floor(qMinusT / baseMinusT);
                k += base;
              }
              push(output, fromCharCode(digitToBasic(q)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
              delta = 0;
              handledCPCount++;
            }
          }
          delta++;
          n++;
        }
        return join(output, "");
      };
      module.exports = function(input) {
        var encoded = [];
        var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
        var i, label;
        for (i = 0; i < labels.length; i++) {
          label = labels[i];
          push(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
        }
        return join(encoded, ".");
      };
    }
  });

  // node_modules/core-js/modules/es.string.from-code-point.js
  var require_es_string_from_code_point = __commonJS({
    "node_modules/core-js/modules/es.string.from-code-point.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var toAbsoluteIndex = require_to_absolute_index();
      var $RangeError = RangeError;
      var fromCharCode = String.fromCharCode;
      var $fromCodePoint = String.fromCodePoint;
      var join = uncurryThis([].join);
      var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;
      $2({ target: "String", stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        fromCodePoint: function fromCodePoint(x) {
          var elements = [];
          var length = arguments.length;
          var i = 0;
          var code;
          while (length > i) {
            code = +arguments[i];
            if (toAbsoluteIndex(code, 1114111) !== code) throw new $RangeError(code + " is not a valid code point");
            elements[i++] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
          }
          return join(elements, "");
        }
      });
    }
  });

  // node_modules/core-js/internals/url-percent-coding.js
  var require_url_percent_coding = __commonJS({
    "node_modules/core-js/internals/url-percent-coding.js"(exports, module) {
      "use strict";
      require_es_string_from_code_point();
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var fromCharCode = String.fromCharCode;
      var fromCodePoint = getBuiltIn("String", "fromCodePoint");
      var $encodeURIComponent = encodeURIComponent;
      var $parseInt = parseInt;
      var charAt = uncurryThis("".charAt);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var stringSlice = uncurryThis("".slice);
      var exec = uncurryThis(/./.exec);
      var FALLBACK_REPLACER = "\uFFFD";
      var VALID_HEX = /^[0-9a-f]+$/i;
      var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;
      var parseHexOctet = function(string, start) {
        var substr = stringSlice(string, start, start + 2);
        if (!exec(VALID_HEX, substr)) return NaN;
        return $parseInt(substr, 16);
      };
      var getLeadingOnes = function(octet) {
        var count = 0;
        for (var mask = 128; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
          count++;
        }
        return count;
      };
      var utf8Decode = function(octets) {
        var codePoint = null;
        var length = octets.length;
        switch (length) {
          case 1:
            codePoint = octets[0];
            break;
          case 2:
            codePoint = (octets[0] & 31) << 6 | octets[1] & 63;
            break;
          case 3:
            codePoint = (octets[0] & 15) << 12 | (octets[1] & 63) << 6 | octets[2] & 63;
            break;
          case 4:
            codePoint = (octets[0] & 7) << 18 | (octets[1] & 63) << 12 | (octets[2] & 63) << 6 | octets[3] & 63;
            break;
        }
        if (codePoint === null || codePoint > 1114111 || codePoint >= 55296 && codePoint <= 57343 || codePoint < (length > 3 ? 65536 : length > 2 ? 2048 : length > 1 ? 128 : 0)) return null;
        return codePoint;
      };
      var replaceLoneSurrogate = function(chunk) {
        return chunk.length === 2 ? chunk : FALLBACK_REPLACER;
      };
      var decode = function(input) {
        var length = input.length;
        var result = "";
        var i = 0;
        while (i < length) {
          var decodedChar = charAt(input, i);
          if (decodedChar === "%") {
            if (charAt(input, i + 1) === "%" || i + 3 > length) {
              result += "%";
              i++;
              continue;
            }
            var octet = parseHexOctet(input, i + 1);
            if (octet !== octet) {
              result += decodedChar;
              i++;
              continue;
            }
            i += 2;
            var byteSequenceLength = getLeadingOnes(octet);
            if (byteSequenceLength === 0) {
              decodedChar = fromCharCode(octet);
            } else {
              if (byteSequenceLength === 1 || byteSequenceLength > 4) {
                result += FALLBACK_REPLACER;
                i++;
                continue;
              }
              var octets = [octet];
              var sequenceIndex = 1;
              while (sequenceIndex < byteSequenceLength) {
                i++;
                if (i + 3 > length || charAt(input, i) !== "%") break;
                var nextByte = parseHexOctet(input, i + 1);
                if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;
                if (sequenceIndex === 1) {
                  if (octet === 224 && nextByte < 160) break;
                  if (octet === 237 && nextByte > 159) break;
                  if (octet === 240 && nextByte < 144) break;
                  if (octet === 244 && nextByte > 143) break;
                }
                push(octets, nextByte);
                i += 2;
                sequenceIndex++;
              }
              if (octets.length !== byteSequenceLength) {
                result += FALLBACK_REPLACER;
                continue;
              }
              var codePoint = utf8Decode(octets);
              if (codePoint === null) {
                for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
                i++;
                continue;
              } else {
                decodedChar = fromCodePoint(codePoint);
              }
            }
          }
          result += decodedChar;
          i++;
        }
        return result;
      };
      var encode = function(input) {
        try {
          return $encodeURIComponent(input);
        } catch (error) {
          return $encodeURIComponent(replace(input, SURROGATE, replaceLoneSurrogate));
        }
      };
      module.exports = {
        decode,
        encode
      };
    }
  });

  // node_modules/core-js/modules/web.url-search-params.constructor.js
  var require_web_url_search_params_constructor = __commonJS({
    "node_modules/core-js/modules/web.url-search-params.constructor.js"(exports, module) {
      "use strict";
      require_es_array_iterator();
      var $2 = require_export();
      var globalThis2 = require_global_this();
      var safeGetBuiltIn = require_safe_get_built_in();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var DESCRIPTORS = require_descriptors();
      var USE_NATIVE_URL = require_url_constructor_detection();
      var percentCoding = require_url_percent_coding();
      var defineBuiltIn = require_define_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var defineBuiltIns = require_define_built_ins();
      var setToStringTag = require_set_to_string_tag();
      var createIteratorConstructor = require_iterator_create_constructor();
      var InternalStateModule = require_internal_state();
      var anInstance = require_an_instance();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var bind = require_function_bind_context();
      var classof = require_classof();
      var anObject = require_an_object();
      var isObject = require_is_object();
      var $toString = require_to_string();
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var getIterator = require_get_iterator_internal();
      var getIteratorMethod = require_get_iterator_method_internal();
      var createIterResultObject = require_create_iter_result_object();
      var validateArgumentsLength = require_validate_arguments_length();
      var wellKnownSymbol = require_well_known_symbol();
      var arraySort = require_array_sort();
      var ITERATOR = wellKnownSymbol("iterator");
      var URL_SEARCH_PARAMS = "URLSearchParams";
      var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
      var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
      var percentDecode = percentCoding.decode;
      var percentEncode = percentCoding.encode;
      var nativeFetch = safeGetBuiltIn("fetch");
      var NativeRequest = safeGetBuiltIn("Request");
      var Headers = safeGetBuiltIn("Headers");
      var RequestPrototype = NativeRequest && NativeRequest.prototype;
      var HeadersPrototype = Headers && Headers.prototype;
      var TypeError2 = globalThis2.TypeError;
      var charAt = uncurryThis("".charAt);
      var join = uncurryThis([].join);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var shift = uncurryThis([].shift);
      var splice = uncurryThis([].splice);
      var split = uncurryThis("".split);
      var stringSlice = uncurryThis("".slice);
      var plus = /\+/g;
      var decodeQueryComponent = function(input) {
        return percentDecode(replace(input, plus, " "));
      };
      var find = /[!'()~]|%20/g;
      var replacements = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
      };
      var replacer = function(match) {
        return replacements[match];
      };
      var serialize = function(it) {
        return replace(percentEncode(it), find, replacer);
      };
      var URLSearchParamsIterator = createIteratorConstructor(function Iterator2(params, kind) {
        setInternalState(this, {
          type: URL_SEARCH_PARAMS_ITERATOR,
          target: getInternalParamsState(params).entries,
          index: 0,
          kind
        });
      }, URL_SEARCH_PARAMS, function next() {
        var state = getInternalIteratorState(this);
        var target = state.target;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = null;
          return createIterResultObject(void 0, true);
        }
        var entry = target[index];
        switch (state.kind) {
          case "keys":
            return createIterResultObject(entry.key, false);
          case "values":
            return createIterResultObject(entry.value, false);
        }
        return createIterResultObject([entry.key, entry.value], false);
      }, true);
      var URLSearchParamsState = function(init) {
        this.entries = [];
        this.url = null;
        if (init !== void 0) {
          if (isObject(init)) this.parseObject(init);
          else this.parseQuery(typeof init == "string" ? charAt(init, 0) === "?" ? stringSlice(init, 1) : init : $toString(init));
        }
      };
      URLSearchParamsState.prototype = {
        type: URL_SEARCH_PARAMS,
        bindURL: function(url) {
          this.url = url;
          this.update();
        },
        parseObject: function(object) {
          var entries = this.entries;
          var iteratorMethod = getIteratorMethod(object);
          var iterator, next, step, entryIterator, entryNext, first, second;
          if (iteratorMethod) {
            iterator = getIterator(object, iteratorMethod);
            next = iterator.next;
            while (!(step = call(next, iterator)).done) {
              entryIterator = getIterator(anObject(step.value));
              entryNext = entryIterator.next;
              if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw new TypeError2("Expected sequence with length 2");
              push(entries, { key: $toString(first.value), value: $toString(second.value) });
            }
          } else for (var key in object) if (hasOwn(object, key)) {
            push(entries, { key, value: $toString(object[key]) });
          }
        },
        parseQuery: function(query) {
          if (query) {
            var entries = this.entries;
            var attributes = split(query, "&");
            var index = 0;
            var attribute, entry;
            while (index < attributes.length) {
              attribute = attributes[index++];
              if (attribute.length) {
                entry = split(attribute, "=");
                push(entries, {
                  key: decodeQueryComponent(shift(entry)),
                  value: decodeQueryComponent(join(entry, "="))
                });
              }
            }
          }
        },
        serialize: function() {
          var entries = this.entries;
          var result = [];
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            push(result, serialize(entry.key) + "=" + serialize(entry.value));
          }
          return join(result, "&");
        },
        update: function() {
          this.entries.length = 0;
          this.parseQuery(this.url.query);
        },
        updateURL: function() {
          if (this.url) this.url.update();
        }
      };
      var URLSearchParamsConstructor = function URLSearchParams2() {
        anInstance(this, URLSearchParamsPrototype);
        var init = arguments.length > 0 ? arguments[0] : void 0;
        var state = setInternalState(this, new URLSearchParamsState(init));
        if (!DESCRIPTORS) this.size = state.entries.length;
      };
      var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
      defineBuiltIns(URLSearchParamsPrototype, {
        // `URLSearchParams.prototype.append` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-append
        append: function append(name, value) {
          var state = getInternalParamsState(this);
          validateArgumentsLength(arguments.length, 2);
          push(state.entries, { key: $toString(name), value: $toString(value) });
          if (!DESCRIPTORS) this.size++;
          state.updateURL();
        },
        // `URLSearchParams.prototype.delete` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
        "delete": function(name) {
          var state = getInternalParamsState(this);
          var length = validateArgumentsLength(arguments.length, 1);
          var entries = state.entries;
          var key = $toString(name);
          var $value = length < 2 ? void 0 : arguments[1];
          var value = $value === void 0 ? $value : $toString($value);
          var index = 0;
          while (index < entries.length) {
            var entry = entries[index];
            if (entry.key === key && (value === void 0 || entry.value === value)) {
              splice(entries, index, 1);
            } else index++;
          }
          if (!DESCRIPTORS) this.size = entries.length;
          state.updateURL();
        },
        // `URLSearchParams.prototype.get` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-get
        get: function get(name) {
          var entries = getInternalParamsState(this).entries;
          validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key) return entries[index].value;
          }
          return null;
        },
        // `URLSearchParams.prototype.getAll` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
        getAll: function getAll(name) {
          var entries = getInternalParamsState(this).entries;
          validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var result = [];
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key) push(result, entries[index].value);
          }
          return result;
        },
        // `URLSearchParams.prototype.has` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-has
        has: function has(name) {
          var entries = getInternalParamsState(this).entries;
          var length = validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var $value = length < 2 ? void 0 : arguments[1];
          var value = $value === void 0 ? $value : $toString($value);
          var index = 0;
          while (index < entries.length) {
            var entry = entries[index++];
            if (entry.key === key && (value === void 0 || entry.value === value)) return true;
          }
          return false;
        },
        // `URLSearchParams.prototype.set` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-set
        set: function set(name, value) {
          var state = getInternalParamsState(this);
          validateArgumentsLength(arguments.length, 2);
          var entries = state.entries;
          var found = false;
          var key = $toString(name);
          var val = $toString(value);
          var index = 0;
          var entry;
          for (; index < entries.length; index++) {
            entry = entries[index];
            if (entry.key === key) {
              if (found) splice(entries, index--, 1);
              else {
                found = true;
                entry.value = val;
              }
            }
          }
          if (!found) push(entries, { key, value: val });
          if (!DESCRIPTORS) this.size = entries.length;
          state.updateURL();
        },
        // `URLSearchParams.prototype.sort` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
        sort: function sort() {
          var state = getInternalParamsState(this);
          arraySort(state.entries, function(a, b) {
            return a.key > b.key ? 1 : -1;
          });
          state.updateURL();
        },
        // `URLSearchParams.prototype.forEach` method
        forEach: function forEach(callback) {
          var entries = getInternalParamsState(this).entries;
          var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0);
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
          }
        },
        // `URLSearchParams.prototype.keys` method
        keys: function keys() {
          return new URLSearchParamsIterator(this, "keys");
        },
        // `URLSearchParams.prototype.values` method
        values: function values() {
          return new URLSearchParamsIterator(this, "values");
        },
        // `URLSearchParams.prototype.entries` method
        entries: function entries() {
          return new URLSearchParamsIterator(this, "entries");
        }
      }, { enumerable: true });
      defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: "entries" });
      defineBuiltIn(URLSearchParamsPrototype, "toString", function toString() {
        return getInternalParamsState(this).serialize();
      }, { enumerable: true });
      if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
          return getInternalParamsState(this).entries.length;
        },
        configurable: true,
        enumerable: true
      });
      setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
      $2({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
        URLSearchParams: URLSearchParamsConstructor
      });
      if (!USE_NATIVE_URL && isCallable(Headers)) {
        headersHas = uncurryThis(HeadersPrototype.has);
        headersSet = uncurryThis(HeadersPrototype.set);
        wrapRequestOptions = function(init) {
          if (isObject(init)) {
            var body = init.body;
            var headers;
            if (classof(body) === URL_SEARCH_PARAMS) {
              headers = init.headers ? new Headers(init.headers) : new Headers();
              if (!headersHas(headers, "content-type")) {
                headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
              return create(init, {
                body: createPropertyDescriptor(0, $toString(body)),
                headers: createPropertyDescriptor(0, headers)
              });
            }
          }
          return init;
        };
        if (isCallable(nativeFetch)) {
          $2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
            fetch: function fetch2(input) {
              return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
            }
          });
        }
        if (isCallable(NativeRequest)) {
          RequestConstructor = function Request(input) {
            anInstance(this, RequestPrototype);
            return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
          };
          RequestPrototype.constructor = RequestConstructor;
          RequestConstructor.prototype = RequestPrototype;
          $2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
            Request: RequestConstructor
          });
        }
      }
      var headersHas;
      var headersSet;
      var wrapRequestOptions;
      var RequestConstructor;
      module.exports = {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
      };
    }
  });

  // node_modules/core-js/modules/web.url.constructor.js
  var require_web_url_constructor = __commonJS({
    "node_modules/core-js/modules/web.url.constructor.js"() {
      "use strict";
      require_es_string_iterator();
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var USE_NATIVE_URL = require_url_constructor_detection();
      var globalThis2 = require_global_this();
      var bind = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var defineBuiltIn = require_define_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var anInstance = require_an_instance();
      var hasOwn = require_has_own_property();
      var assign = require_object_assign();
      var arrayFrom = require_array_from();
      var arraySlice = require_array_slice();
      var codeAt = require_string_multibyte().codeAt;
      var toASCII = require_string_punycode_to_ascii();
      var percentCoding = require_url_percent_coding();
      var $toString = require_to_string();
      var setToStringTag = require_set_to_string_tag();
      var validateArgumentsLength = require_validate_arguments_length();
      var URLSearchParamsModule = require_web_url_search_params_constructor();
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var getInternalURLState = InternalStateModule.getterFor("URL");
      var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
      var getInternalSearchParamsState = URLSearchParamsModule.getState;
      var percentDecode = percentCoding.decode;
      var percentEncode = percentCoding.encode;
      var NativeURL = globalThis2.URL;
      var TypeError2 = globalThis2.TypeError;
      var parseInt2 = globalThis2.parseInt;
      var floor = Math.floor;
      var pow = Math.pow;
      var fromCharCode = String.fromCharCode;
      var charAt = uncurryThis("".charAt);
      var exec = uncurryThis(/./.exec);
      var join = uncurryThis([].join);
      var numberToString = uncurryThis(1.1.toString);
      var pop = uncurryThis([].pop);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var shift = uncurryThis([].shift);
      var split = uncurryThis("".split);
      var stringIndexOf = uncurryThis("".indexOf);
      var stringSlice = uncurryThis("".slice);
      var toLowerCase = uncurryThis("".toLowerCase);
      var unshift = uncurryThis([].unshift);
      var INVALID_AUTHORITY = "Invalid authority";
      var INVALID_SCHEME = "Invalid scheme";
      var INVALID_HOST = "Invalid host";
      var INVALID_PORT = "Invalid port";
      var ALPHA = /[a-z]/i;
      var ALPHANUMERIC_PLUS_MINUS_DOT = /[\d+\-.a-z]/i;
      var DIGIT = /\d/;
      var HEX_START = /^0x/i;
      var OCT = /^[0-7]+$/;
      var DEC = /^\d+$/;
      var HEX = /^[\da-f]+$/i;
      var FORBIDDEN_DOMAIN_CODE_POINT = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/;
      var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
      var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
      var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
      var TAB_AND_NEW_LINE = /[\t\n\r]/g;
      var NON_ASCII = /[^\u0000-\u007F]/;
      var MAPPED_ONTO_FORBIDDEN = "\xA8\xAF\xB4\xB8\u02D8\u02D9\u02DA\u02DB\u02DC\u02DD\u037A\u0384\u0385\u1FBD\u1FBF\u1FC0\u1FC1\u1FCD\u1FCE\u1FCF\u1FDD\u1FDE\u1FDF\u1FED\u1FEE\u1FFD\u1FFE\u2017\u203E\u2047\u2048\u2049\u2100\u2101\u2105\u2106\u2A74\u309B\u309C\uFC5E\uFC5F\uFC60\uFC61\uFC62\uFC63\uFDFA\uFDFB\uFE13\uFE16\uFE47\uFE48\uFE49\uFE4A\uFE4B\uFE4C\uFE55\uFE56\uFE5F\uFE64\uFE65\uFE68\uFE6A\uFE6B\uFE70\uFE72\uFE74\uFE76\uFE78\uFE7A\uFE7C\uFE7E\uFFE3";
      var EOF;
      var isIgnoredCodePoint = function(code) {
        return code === 173 || code === 847 || code === 8203 || code === 12644 || code === 65279 || code === 65440 || code >= 4447 && code <= 4448 || code >= 6068 && code <= 6069 || code >= 6155 && code <= 6159 || code >= 8288 && code <= 8292 || code >= 8298 && code <= 8303 || code >= 65024 && code <= 65039 || code >= 917760 && code <= 917999;
      };
      var isDisallowedCodePoint = function(code) {
        return code === 65533 || code >= 55296 && code <= 57343 || code >= 128 && code <= 159 || code >= 8206 && code <= 8207 || code >= 8232 && code <= 8233 || code >= 8234 && code <= 8238 || code >= 8293 && code <= 8297 || code >= 64976 && code <= 65007 || (code & 65534) === 65534 || code >= 57344 && code <= 63743 || code >= 983040 && code <= 1114109;
      };
      var mapCodePoint = function(code) {
        if (code >= 65281 && code <= 65374) return code - 65248;
        if (code === 160 || code === 5760 || code === 8239 || code === 8287 || code === 12288) return 32;
        if (code >= 8192 && code <= 8202) return 32;
        if (code <= 65535 && stringIndexOf(MAPPED_ONTO_FORBIDDEN, fromCharCode(code)) > -1) return 32;
        return code;
      };
      var domainToASCII = function(domain) {
        if (!exec(NON_ASCII, domain)) return domain === "" ? null : toASCII(domain);
        var codePoints = arrayFrom(domain);
        var result = "";
        var index, code, mapped;
        for (index = 0; index < codePoints.length; index++) {
          code = codeAt(codePoints[index], 0);
          if (isDisallowedCodePoint(code)) return null;
          if (isIgnoredCodePoint(code)) continue;
          mapped = mapCodePoint(code);
          result += mapped === code ? codePoints[index] : fromCharCode(mapped);
        }
        return result === "" ? null : toASCII(result);
      };
      var endsInNumber = function(input) {
        var parts = split(input, ".");
        var last, hexPart;
        if (parts[parts.length - 1] === "") {
          if (parts.length === 1) return false;
          parts.length--;
        }
        last = parts[parts.length - 1];
        if (exec(DEC, last)) return true;
        if (exec(HEX_START, last)) {
          hexPart = stringSlice(last, 2);
          return hexPart === "" || !!exec(HEX, hexPart);
        }
        return false;
      };
      var parseIPv4 = function(input) {
        var parts = split(input, ".");
        var partsLength, numbers, index, part, radix, number, ipv4;
        if (parts.length && parts[parts.length - 1] === "") {
          parts.length--;
        }
        partsLength = parts.length;
        if (partsLength > 4) return null;
        numbers = [];
        for (index = 0; index < partsLength; index++) {
          part = parts[index];
          if (part === "") return null;
          radix = 10;
          if (part.length > 1 && charAt(part, 0) === "0") {
            radix = exec(HEX_START, part) ? 16 : 8;
            part = stringSlice(part, radix === 8 ? 1 : 2);
          }
          if (part === "") {
            number = 0;
          } else {
            if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
            number = parseInt2(part, radix);
          }
          push(numbers, number);
        }
        for (index = 0; index < partsLength; index++) {
          number = numbers[index];
          if (index === partsLength - 1) {
            if (number >= pow(256, 5 - partsLength)) return null;
          } else if (number > 255) return null;
        }
        ipv4 = pop(numbers);
        for (index = 0; index < numbers.length; index++) {
          ipv4 += numbers[index] * pow(256, 3 - index);
        }
        return ipv4;
      };
      var parseIPv6 = function(input) {
        var address = [0, 0, 0, 0, 0, 0, 0, 0];
        var pieceIndex = 0;
        var compress = null;
        var pointer = 0;
        var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
        var chr = function() {
          return charAt(input, pointer);
        };
        if (chr() === ":") {
          if (charAt(input, 1) !== ":") return;
          pointer += 2;
          pieceIndex++;
          compress = pieceIndex;
        }
        while (chr()) {
          if (pieceIndex === 8) return;
          if (chr() === ":") {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
          }
          value = length = 0;
          while (length < 4 && exec(HEX, chr())) {
            value = value * 16 + parseInt2(chr(), 16);
            pointer++;
            length++;
          }
          if (chr() === ".") {
            if (length === 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;
            while (chr()) {
              ipv4Piece = null;
              if (numbersSeen > 0) {
                if (chr() === "." && numbersSeen < 4) pointer++;
                else return;
              }
              if (!exec(DIGIT, chr())) return;
              while (exec(DIGIT, chr())) {
                number = parseInt2(chr(), 10);
                if (ipv4Piece === null) ipv4Piece = number;
                else if (ipv4Piece === 0) return;
                else ipv4Piece = ipv4Piece * 10 + number;
                if (ipv4Piece > 255) return;
                pointer++;
              }
              address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
              numbersSeen++;
              if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
            }
            if (numbersSeen !== 4) return;
            break;
          } else if (chr() === ":") {
            pointer++;
            if (!chr()) return;
          } else if (chr()) return;
          address[pieceIndex++] = value;
        }
        if (compress !== null) {
          swaps = pieceIndex - compress;
          pieceIndex = 7;
          while (pieceIndex !== 0 && swaps > 0) {
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
          }
        } else if (pieceIndex !== 8) return;
        return address;
      };
      var findLongestZeroSequence = function(ipv6) {
        var maxIndex = null;
        var maxLength = 1;
        var currStart = null;
        var currLength = 0;
        var index = 0;
        for (; index < 8; index++) {
          if (ipv6[index] !== 0) {
            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }
            currStart = null;
            currLength = 0;
          } else {
            if (currStart === null) currStart = index;
            ++currLength;
          }
        }
        return currLength > maxLength ? currStart : maxIndex;
      };
      var serializeHost = function(host) {
        var result, index, compress, ignore0;
        if (typeof host == "number") {
          result = [];
          for (index = 0; index < 4; index++) {
            unshift(result, host % 256);
            host = floor(host / 256);
          }
          return join(result, ".");
        }
        if (typeof host == "object") {
          result = "";
          compress = findLongestZeroSequence(host);
          for (index = 0; index < 8; index++) {
            if (ignore0 && host[index] === 0) continue;
            if (ignore0) ignore0 = false;
            if (compress === index) {
              result += index ? ":" : "::";
              ignore0 = true;
            } else {
              result += numberToString(host[index], 16);
              if (index < 7) result += ":";
            }
          }
          return "[" + result + "]";
        }
        return host;
      };
      var C0ControlPercentEncodeSet = {};
      var queryPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        " ": 1,
        '"': 1,
        "#": 1,
        "<": 1,
        ">": 1
      });
      var specialQueryPercentEncodeSet = assign({}, queryPercentEncodeSet, {
        "'": 1
      });
      var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
      });
      var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1,
        "^": 1
      });
      var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
      });
      var utf8PercentEncode = function(chr, set) {
        var code = codeAt(chr, 0);
        return code >= 32 && code < 127 && !hasOwn(set, chr) ? chr : chr === "'" && hasOwn(set, chr) ? "%27" : percentEncode(chr);
      };
      var specialSchemes = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };
      var isWindowsDriveLetter = function(string, normalized) {
        var second;
        return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
      };
      var startsWithWindowsDriveLetter = function(string) {
        var third;
        return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || ((third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#"));
      };
      var isSingleDot = function(segment) {
        return segment === "." || toLowerCase(segment) === "%2e";
      };
      var isDoubleDot = function(segment) {
        segment = toLowerCase(segment);
        return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
      };
      var SCHEME_START = {};
      var SCHEME = {};
      var NO_SCHEME = {};
      var SPECIAL_RELATIVE_OR_AUTHORITY = {};
      var PATH_OR_AUTHORITY = {};
      var RELATIVE = {};
      var RELATIVE_SLASH = {};
      var SPECIAL_AUTHORITY_SLASHES = {};
      var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
      var AUTHORITY = {};
      var HOST = {};
      var HOSTNAME = {};
      var PORT = {};
      var FILE = {};
      var FILE_SLASH = {};
      var FILE_HOST = {};
      var PATH_START = {};
      var PATH = {};
      var CANNOT_BE_A_BASE_URL_PATH = {};
      var QUERY = {};
      var FRAGMENT = {};
      var URLState = function(url, isBase, base) {
        var urlString = $toString(url);
        var baseState, failure, searchParams;
        if (isBase) {
          failure = this.parse(urlString);
          if (failure) throw new TypeError2(failure);
          this.searchParams = null;
        } else {
          if (base !== void 0) baseState = new URLState(base, true);
          failure = this.parse(urlString, null, baseState);
          if (failure) throw new TypeError2(failure);
          searchParams = getInternalSearchParamsState(new URLSearchParams2());
          searchParams.bindURL(this);
          this.searchParams = searchParams;
        }
      };
      URLState.prototype = {
        type: "URL",
        // https://url.spec.whatwg.org/#url-parsing
        // eslint-disable-next-line max-statements -- TODO
        parse: function(input, stateOverride, base) {
          var url = this;
          var state = stateOverride || SCHEME_START;
          var pointer = 0;
          var buffer = "";
          var seenAt = false;
          var seenBracket = false;
          var seenPasswordToken = false;
          var codePoints, chr, bufferCodePoints, failure;
          input = $toString(input);
          if (!stateOverride) {
            url.scheme = "";
            url.username = "";
            url.password = "";
            url.host = null;
            url.port = null;
            url.path = [];
            url.query = null;
            url.fragment = null;
            url.cannotBeABaseURL = false;
            input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
            input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
          }
          input = replace(input, TAB_AND_NEW_LINE, "");
          codePoints = arrayFrom(input);
          while (pointer <= codePoints.length) {
            chr = codePoints[pointer];
            switch (state) {
              case SCHEME_START:
                if (chr && exec(ALPHA, chr)) {
                  buffer += toLowerCase(chr);
                  state = SCHEME;
                } else if (!stateOverride) {
                  state = NO_SCHEME;
                  continue;
                } else return INVALID_SCHEME;
                break;
              case SCHEME:
                if (chr && exec(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) {
                  buffer += toLowerCase(chr);
                } else if (chr === ":") {
                  if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && url.host === "")) return;
                  url.scheme = buffer;
                  if (stateOverride) {
                    if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
                    return;
                  }
                  buffer = "";
                  if (url.scheme === "file") {
                    state = FILE;
                  } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                    state = SPECIAL_RELATIVE_OR_AUTHORITY;
                  } else if (url.isSpecial()) {
                    state = SPECIAL_AUTHORITY_SLASHES;
                  } else if (codePoints[pointer + 1] === "/") {
                    state = PATH_OR_AUTHORITY;
                    pointer++;
                  } else {
                    url.cannotBeABaseURL = true;
                    push(url.path, "");
                    state = CANNOT_BE_A_BASE_URL_PATH;
                  }
                } else if (!stateOverride) {
                  buffer = "";
                  state = NO_SCHEME;
                  pointer = 0;
                  continue;
                } else return INVALID_SCHEME;
                break;
              case NO_SCHEME:
                if (!base || base.cannotBeABaseURL && chr !== "#") return INVALID_SCHEME;
                if (base.cannotBeABaseURL && chr === "#") {
                  url.scheme = base.scheme;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = "";
                  url.cannotBeABaseURL = true;
                  state = FRAGMENT;
                  break;
                }
                state = base.scheme === "file" ? FILE : RELATIVE;
                continue;
              case SPECIAL_RELATIVE_OR_AUTHORITY:
                if (chr === "/" && codePoints[pointer + 1] === "/") {
                  state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                  pointer++;
                } else {
                  state = RELATIVE;
                  continue;
                }
                break;
              case PATH_OR_AUTHORITY:
                if (chr === "/") {
                  state = AUTHORITY;
                  break;
                } else {
                  state = PATH;
                  continue;
                }
              case RELATIVE:
                url.scheme = base.scheme;
                if (chr === EOF) {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                } else if (chr === "/" || chr === "\\" && url.isSpecial()) {
                  state = RELATIVE_SLASH;
                } else if (chr === "?") {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = "";
                  state = QUERY;
                } else if (chr === "#") {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = "";
                  state = FRAGMENT;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  if (url.path.length) url.path.length--;
                  state = PATH;
                  continue;
                }
                break;
              case RELATIVE_SLASH:
                if (url.isSpecial() && (chr === "/" || chr === "\\")) {
                  state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                } else if (chr === "/") {
                  state = AUTHORITY;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  state = PATH;
                  continue;
                }
                break;
              case SPECIAL_AUTHORITY_SLASHES:
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                if (chr !== "/" || codePoints[pointer + 1] !== "/") continue;
                pointer++;
                break;
              case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                if (chr !== "/" && chr !== "\\") {
                  state = AUTHORITY;
                  continue;
                }
                break;
              case AUTHORITY:
                if (chr === "@") {
                  if (seenAt) buffer = "%40" + buffer;
                  seenAt = true;
                  bufferCodePoints = arrayFrom(buffer);
                  for (var i = 0; i < bufferCodePoints.length; i++) {
                    var codePoint = bufferCodePoints[i];
                    if (codePoint === ":" && !seenPasswordToken) {
                      seenPasswordToken = true;
                      continue;
                    }
                    var encodedCodePoints = utf8PercentEncode(codePoint, userinfoPercentEncodeSet);
                    if (seenPasswordToken) url.password += encodedCodePoints;
                    else url.username += encodedCodePoints;
                  }
                  buffer = "";
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                  if (seenAt && buffer === "") return INVALID_AUTHORITY;
                  pointer -= arrayFrom(buffer).length + 1;
                  buffer = "";
                  state = HOST;
                } else buffer += chr;
                break;
              case HOST:
              case HOSTNAME:
                if (stateOverride && url.scheme === "file") {
                  state = FILE_HOST;
                  continue;
                } else if (chr === ":" && !seenBracket) {
                  if (buffer === "") return INVALID_HOST;
                  if (stateOverride === HOSTNAME) return;
                  failure = url.parseHost(buffer);
                  if (failure) return failure;
                  buffer = "";
                  state = PORT;
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                  if (url.isSpecial() && buffer === "") return INVALID_HOST;
                  if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null)) return;
                  failure = url.parseHost(buffer);
                  if (failure) return failure;
                  buffer = "";
                  state = PATH_START;
                  if (stateOverride) return;
                  continue;
                } else {
                  if (chr === "[") seenBracket = true;
                  else if (chr === "]") seenBracket = false;
                  buffer += chr;
                }
                break;
              case PORT:
                if (exec(DIGIT, chr)) {
                  buffer += chr;
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
                  if (buffer !== "") {
                    var port = parseInt2(buffer, 10);
                    if (port > 65535) return INVALID_PORT;
                    url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                    buffer = "";
                  }
                  if (stateOverride) return;
                  state = PATH_START;
                  continue;
                } else return INVALID_PORT;
                break;
              case FILE:
                url.scheme = "file";
                url.host = "";
                if (chr === "/" || chr === "\\") state = FILE_SLASH;
                else if (base && base.scheme === "file") {
                  switch (chr) {
                    case EOF:
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = base.query;
                      break;
                    case "?":
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = "";
                      state = QUERY;
                      break;
                    case "#":
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = base.query;
                      url.fragment = "";
                      state = FRAGMENT;
                      break;
                    default:
                      url.host = base.host;
                      if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                        url.path = arraySlice(base.path);
                        url.shortenPath();
                      }
                      state = PATH;
                      continue;
                  }
                } else {
                  state = PATH;
                  continue;
                }
                break;
              case FILE_SLASH:
                if (chr === "/" || chr === "\\") {
                  state = FILE_HOST;
                  break;
                }
                if (base && base.scheme === "file") {
                  url.host = base.host;
                  if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), "")) && isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
                }
                state = PATH;
                continue;
              case FILE_HOST:
                if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
                  if (!stateOverride && isWindowsDriveLetter(buffer)) {
                    state = PATH;
                  } else if (buffer === "") {
                    url.host = "";
                    if (stateOverride) return;
                    state = PATH_START;
                  } else {
                    failure = url.parseHost(buffer);
                    if (failure) return failure;
                    if (url.host === "localhost") url.host = "";
                    if (stateOverride) return;
                    buffer = "";
                    state = PATH_START;
                  }
                  continue;
                } else buffer += chr;
                break;
              case PATH_START:
                if (url.isSpecial()) {
                  state = PATH;
                  if (chr !== "/" && chr !== "\\") continue;
                } else if (!stateOverride && chr === "?") {
                  url.query = "";
                  state = QUERY;
                } else if (!stateOverride && chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                } else if (chr !== EOF) {
                  state = PATH;
                  if (chr !== "/") continue;
                }
                break;
              case PATH:
                if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
                  if (isDoubleDot(buffer)) {
                    url.shortenPath();
                    if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                      push(url.path, "");
                    }
                  } else if (isSingleDot(buffer)) {
                    if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                      push(url.path, "");
                    }
                  } else {
                    if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                      if (url.host !== null && url.host !== "") url.host = "";
                      buffer = charAt(buffer, 0) + ":";
                    }
                    push(url.path, buffer);
                  }
                  buffer = "";
                  if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) {
                    while (url.path.length > 1 && url.path[0] === "") {
                      shift(url.path);
                    }
                  }
                  if (chr === "?") {
                    url.query = "";
                    state = QUERY;
                  } else if (chr === "#") {
                    url.fragment = "";
                    state = FRAGMENT;
                  }
                } else {
                  buffer += utf8PercentEncode(chr, pathPercentEncodeSet);
                }
                break;
              case CANNOT_BE_A_BASE_URL_PATH:
                if (chr === "?") {
                  url.query = "";
                  state = QUERY;
                } else if (chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                } else if (chr !== EOF) {
                  if (chr === " ") {
                    url.path[0] += codePoints[pointer + 1] === "?" || codePoints[pointer + 1] === "#" ? "%20" : " ";
                  } else {
                    url.path[0] += utf8PercentEncode(chr, C0ControlPercentEncodeSet);
                  }
                }
                break;
              case QUERY:
                if (!stateOverride && chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                } else if (chr !== EOF) {
                  url.query += utf8PercentEncode(chr, url.isSpecial() ? specialQueryPercentEncodeSet : queryPercentEncodeSet);
                }
                break;
              case FRAGMENT:
                if (chr !== EOF) url.fragment += utf8PercentEncode(chr, fragmentPercentEncodeSet);
                break;
            }
            pointer++;
          }
        },
        // https://url.spec.whatwg.org/#host-parsing
        parseHost: function(input) {
          var result, codePoints, index;
          if (charAt(input, 0) === "[") {
            if (charAt(input, input.length - 1) !== "]") return INVALID_HOST;
            result = parseIPv6(stringSlice(input, 1, -1));
            if (!result) return INVALID_HOST;
            this.host = result;
          } else if (!this.isSpecial()) {
            if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
            result = "";
            codePoints = arrayFrom(input);
            for (index = 0; index < codePoints.length; index++) {
              result += utf8PercentEncode(codePoints[index], C0ControlPercentEncodeSet);
            }
            this.host = result;
          } else {
            input = domainToASCII(percentDecode(input));
            if (input === null || exec(FORBIDDEN_DOMAIN_CODE_POINT, input)) return INVALID_HOST;
            if (endsInNumber(input)) {
              result = parseIPv4(input);
              if (result === null) return INVALID_HOST;
              this.host = result;
            } else {
              this.host = input;
            }
          }
        },
        // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
        cannotHaveUsernamePasswordPort: function() {
          return this.host === null || this.host === "" || this.cannotBeABaseURL || this.scheme === "file";
        },
        // https://url.spec.whatwg.org/#include-credentials
        includesCredentials: function() {
          return this.username !== "" || this.password !== "";
        },
        // https://url.spec.whatwg.org/#is-special
        isSpecial: function() {
          return hasOwn(specialSchemes, this.scheme);
        },
        // https://url.spec.whatwg.org/#shorten-a-urls-path
        shortenPath: function() {
          var path = this.path;
          var pathSize = path.length;
          if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
            path.length--;
          }
        },
        // https://url.spec.whatwg.org/#concept-url-serializer
        serialize: function() {
          var url = this;
          var scheme = url.scheme;
          var username = url.username;
          var password = url.password;
          var host = url.host;
          var port = url.port;
          var path = url.path;
          var query = url.query;
          var fragment = url.fragment;
          var output = scheme + ":";
          if (host !== null) {
            output += "//";
            if (url.includesCredentials()) {
              output += username + (password ? ":" + password : "") + "@";
            }
            output += serializeHost(host);
            if (port !== null) output += ":" + port;
          } else if (scheme === "file") output += "//";
          if (host === null && !url.cannotBeABaseURL && path.length > 1 && path[0] === "") output += "/.";
          output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
          if (query !== null) output += "?" + query;
          if (fragment !== null) output += "#" + fragment;
          return output;
        },
        // https://url.spec.whatwg.org/#dom-url-href
        setHref: function(href) {
          var failure = this.parse(href);
          if (failure) throw new TypeError2(failure);
          this.searchParams.update();
        },
        // https://url.spec.whatwg.org/#dom-url-origin
        getOrigin: function() {
          var scheme = this.scheme;
          var port = this.port;
          if (scheme === "blob") try {
            return new URLConstructor(this.path[0]).origin;
          } catch (error) {
            return "null";
          }
          if (scheme === "file" || !this.isSpecial()) return "null";
          return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
        },
        // https://url.spec.whatwg.org/#dom-url-protocol
        getProtocol: function() {
          return this.scheme + ":";
        },
        setProtocol: function(protocol) {
          this.parse($toString(protocol) + ":", SCHEME_START);
        },
        // https://url.spec.whatwg.org/#dom-url-username
        getUsername: function() {
          return this.username;
        },
        setUsername: function(username) {
          var codePoints = arrayFrom($toString(username));
          if (this.cannotHaveUsernamePasswordPort()) return;
          this.username = "";
          for (var i = 0; i < codePoints.length; i++) {
            this.username += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
          }
        },
        // https://url.spec.whatwg.org/#dom-url-password
        getPassword: function() {
          return this.password;
        },
        setPassword: function(password) {
          var codePoints = arrayFrom($toString(password));
          if (this.cannotHaveUsernamePasswordPort()) return;
          this.password = "";
          for (var i = 0; i < codePoints.length; i++) {
            this.password += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
          }
        },
        // https://url.spec.whatwg.org/#dom-url-host
        getHost: function() {
          var host = this.host;
          var port = this.port;
          return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
        },
        setHost: function(host) {
          if (this.cannotBeABaseURL) return;
          this.parse(host, HOST);
        },
        // https://url.spec.whatwg.org/#dom-url-hostname
        getHostname: function() {
          var host = this.host;
          return host === null ? "" : serializeHost(host);
        },
        setHostname: function(hostname) {
          if (this.cannotBeABaseURL) return;
          this.parse(hostname, HOSTNAME);
        },
        // https://url.spec.whatwg.org/#dom-url-port
        getPort: function() {
          var port = this.port;
          return port === null ? "" : $toString(port);
        },
        setPort: function(port) {
          if (this.cannotHaveUsernamePasswordPort()) return;
          port = $toString(port);
          if (port === "") this.port = null;
          else this.parse(port, PORT);
        },
        // https://url.spec.whatwg.org/#dom-url-pathname
        getPathname: function() {
          var path = this.path;
          return this.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
        },
        setPathname: function(pathname) {
          if (this.cannotBeABaseURL) return;
          this.path = [];
          this.parse(pathname, PATH_START);
        },
        // https://url.spec.whatwg.org/#dom-url-search
        getSearch: function() {
          var query = this.query;
          return query ? "?" + query : "";
        },
        setSearch: function(search) {
          search = $toString(search);
          if (search === "") {
            this.query = null;
          } else {
            if (charAt(search, 0) === "?") search = stringSlice(search, 1);
            this.query = "";
            this.parse(search, QUERY);
          }
          this.searchParams.update();
        },
        // https://url.spec.whatwg.org/#dom-url-searchparams
        getSearchParams: function() {
          return this.searchParams.facade;
        },
        // https://url.spec.whatwg.org/#dom-url-hash
        getHash: function() {
          var fragment = this.fragment;
          return fragment ? "#" + fragment : "";
        },
        setHash: function(hash) {
          hash = $toString(hash);
          if (hash === "") {
            this.fragment = null;
            return;
          }
          if (charAt(hash, 0) === "#") hash = stringSlice(hash, 1);
          this.fragment = "";
          this.parse(hash, FRAGMENT);
        },
        update: function() {
          this.query = this.searchParams.serialize() || null;
        }
      };
      var URLConstructor = function URL2(url) {
        var that = anInstance(this, URLPrototype);
        var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0;
        var state = setInternalState(that, new URLState(url, false, base));
        if (!DESCRIPTORS) {
          that.href = state.serialize();
          that.origin = state.getOrigin();
          that.protocol = state.getProtocol();
          that.username = state.getUsername();
          that.password = state.getPassword();
          that.host = state.getHost();
          that.hostname = state.getHostname();
          that.port = state.getPort();
          that.pathname = state.getPathname();
          that.search = state.getSearch();
          that.searchParams = state.getSearchParams();
          that.hash = state.getHash();
        }
      };
      var URLPrototype = URLConstructor.prototype;
      var accessorDescriptor = function(getter, setter) {
        return {
          get: function() {
            return getInternalURLState(this)[getter]();
          },
          set: setter && function(value) {
            return getInternalURLState(this)[setter](value);
          },
          configurable: true,
          enumerable: true
        };
      };
      if (DESCRIPTORS) {
        defineBuiltInAccessor(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
        defineBuiltInAccessor(URLPrototype, "origin", accessorDescriptor("getOrigin"));
        defineBuiltInAccessor(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
        defineBuiltInAccessor(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
        defineBuiltInAccessor(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
        defineBuiltInAccessor(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
        defineBuiltInAccessor(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
        defineBuiltInAccessor(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
        defineBuiltInAccessor(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
        defineBuiltInAccessor(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
        defineBuiltInAccessor(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
        defineBuiltInAccessor(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
      }
      defineBuiltIn(URLPrototype, "toJSON", function toJSON() {
        return getInternalURLState(this).serialize();
      }, { enumerable: true });
      defineBuiltIn(URLPrototype, "toString", function toString() {
        return getInternalURLState(this).serialize();
      }, { enumerable: true });
      if (NativeURL) {
        nativeCreateObjectURL = NativeURL.createObjectURL;
        nativeRevokeObjectURL = NativeURL.revokeObjectURL;
        if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, "createObjectURL", bind(nativeCreateObjectURL, NativeURL));
        if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, "revokeObjectURL", bind(nativeRevokeObjectURL, NativeURL));
      }
      var nativeCreateObjectURL;
      var nativeRevokeObjectURL;
      setToStringTag(URLConstructor, "URL");
      $2({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
        URL: URLConstructor
      });
    }
  });

  // node_modules/core-js/modules/web.url.js
  var require_web_url = __commonJS({
    "node_modules/core-js/modules/web.url.js"() {
      "use strict";
      require_web_url_constructor();
    }
  });

  // node_modules/core-js/internals/get-built-in-prototype-method.js
  var require_get_built_in_prototype_method = __commonJS({
    "node_modules/core-js/internals/get-built-in-prototype-method.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      module.exports = function(CONSTRUCTOR, METHOD) {
        var Constructor = globalThis2[CONSTRUCTOR];
        var Prototype = Constructor && Constructor.prototype;
        return Prototype && Prototype[METHOD];
      };
    }
  });

  // node_modules/core-js/modules/web.url.to-json.js
  var require_web_url_to_json = __commonJS({
    "node_modules/core-js/modules/web.url.to-json.js"() {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      var toString = getBuiltInPrototypeMethod("URL", "toString");
      $2({ target: "URL", proto: true, enumerable: true }, {
        toJSON: function toJSON() {
          return call(toString, this);
        }
      });
    }
  });

  // node_modules/core-js/modules/web.url-search-params.js
  var require_web_url_search_params = __commonJS({
    "node_modules/core-js/modules/web.url-search-params.js"() {
      "use strict";
      require_web_url_search_params_constructor();
    }
  });

  // node_modules/core-js/modules/web.url-search-params.delete.js
  var require_web_url_search_params_delete = __commonJS({
    "node_modules/core-js/modules/web.url-search-params.delete.js"() {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var validateArgumentsLength = require_validate_arguments_length();
      var $URLSearchParams = URLSearchParams;
      var URLSearchParamsPrototype = $URLSearchParams.prototype;
      var append = uncurryThis(URLSearchParamsPrototype.append);
      var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
      var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
      var push = uncurryThis([].push);
      var params = new $URLSearchParams("a=1&a=2&b=3");
      params["delete"]("a", 1);
      params["delete"]("b", void 0);
      if (params + "" !== "a=2") {
        defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
          var length = arguments.length;
          var $value = length < 2 ? void 0 : arguments[1];
          if (length && $value === void 0) return $delete(this, name);
          var entries = [];
          forEach(this, function(v, k) {
            push(entries, { key: k, value: v });
          });
          validateArgumentsLength(length, 1);
          var key = toString(name);
          var value = toString($value);
          var index = 0;
          var entriesLength = entries.length;
          var entry;
          while (index < entriesLength) {
            entry = entries[index];
            $delete(this, entry.key);
            index++;
          }
          index = 0;
          while (index < entriesLength) {
            entry = entries[index++];
            if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
          }
        }, { enumerable: true, unsafe: true });
      }
    }
  });

  // node_modules/core-js/modules/web.url-search-params.has.js
  var require_web_url_search_params_has = __commonJS({
    "node_modules/core-js/modules/web.url-search-params.has.js"() {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var validateArgumentsLength = require_validate_arguments_length();
      var $URLSearchParams = URLSearchParams;
      var URLSearchParamsPrototype = $URLSearchParams.prototype;
      var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
      var $has = uncurryThis(URLSearchParamsPrototype.has);
      var params = new $URLSearchParams("a=1");
      if (params.has("a", 2) || !params.has("a", void 0)) {
        defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
          var length = arguments.length;
          var $value = length < 2 ? void 0 : arguments[1];
          if (length && $value === void 0) return $has(this, name);
          var values = getAll(this, name);
          validateArgumentsLength(length, 1);
          var value = toString($value);
          var index = 0;
          while (index < values.length) {
            if (values[index++] === value) return true;
          }
          return false;
        }, { enumerable: true, unsafe: true });
      }
    }
  });

  // node_modules/core-js/modules/web.url-search-params.size.js
  var require_web_url_search_params_size = __commonJS({
    "node_modules/core-js/modules/web.url-search-params.size.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var uncurryThis = require_function_uncurry_this();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var URLSearchParamsPrototype = URLSearchParams.prototype;
      var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
      if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
        defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
          get: function size() {
            var count = 0;
            forEach(this, function() {
              count++;
            });
            return count;
          },
          configurable: true,
          enumerable: true
        });
      }
    }
  });

  // step1.js
  var import_es_symbol_description = __toESM(require_es_symbol_description());
  var import_es_error_cause = __toESM(require_es_error_cause());
  var import_es_array_flat = __toESM(require_es_array_flat());
  var import_es_array_iterator = __toESM(require_es_array_iterator());
  var import_es_array_push = __toESM(require_es_array_push());
  var import_es_array_reduce = __toESM(require_es_array_reduce());
  var import_es_array_sort = __toESM(require_es_array_sort());
  var import_es_array_unscopables_flat = __toESM(require_es_array_unscopables_flat());
  var import_es_iterator_constructor = __toESM(require_es_iterator_constructor());
  var import_es_iterator_filter = __toESM(require_es_iterator_filter());
  var import_es_iterator_find = __toESM(require_es_iterator_find());
  var import_es_iterator_for_each = __toESM(require_es_iterator_for_each());
  var import_es_iterator_map = __toESM(require_es_iterator_map());
  var import_es_iterator_reduce = __toESM(require_es_iterator_reduce());
  var import_es_iterator_some = __toESM(require_es_iterator_some());
  var import_es_json_parse = __toESM(require_es_json_parse());
  var import_es_json_stringify = __toESM(require_es_json_stringify());
  var import_es_map_get_or_insert = __toESM(require_es_map_get_or_insert());
  var import_es_map_get_or_insert_computed = __toESM(require_es_map_get_or_insert_computed());
  var import_es_promise = __toESM(require_es_promise());
  var import_es_promise_finally = __toESM(require_es_promise_finally());
  var import_es_regexp_constructor = __toESM(require_es_regexp_constructor());
  var import_es_regexp_dot_all = __toESM(require_es_regexp_dot_all());
  var import_es_regexp_exec = __toESM(require_es_regexp_exec());
  var import_es_set_difference_v2 = __toESM(require_es_set_difference_v2());
  var import_es_set_intersection_v2 = __toESM(require_es_set_intersection_v2());
  var import_es_set_is_disjoint_from_v2 = __toESM(require_es_set_is_disjoint_from_v2());
  var import_es_set_is_subset_of_v2 = __toESM(require_es_set_is_subset_of_v2());
  var import_es_set_is_superset_of_v2 = __toESM(require_es_set_is_superset_of_v2());
  var import_es_set_symmetric_difference_v2 = __toESM(require_es_set_symmetric_difference_v2());
  var import_es_set_union_v2 = __toESM(require_es_set_union_v2());
  var import_es_string_pad_end = __toESM(require_es_string_pad_end());
  var import_es_string_pad_start = __toESM(require_es_string_pad_start());
  var import_es_string_replace = __toESM(require_es_string_replace());
  var import_es_string_trim = __toESM(require_es_string_trim());
  var import_web_dom_collections_for_each = __toESM(require_web_dom_collections_for_each());
  var import_web_dom_collections_iterator = __toESM(require_web_dom_collections_iterator());
  var import_web_dom_exception_stack = __toESM(require_web_dom_exception_stack());
  var import_web_url = __toESM(require_web_url());
  var import_web_url_to_json = __toESM(require_web_url_to_json());
  var import_web_url_search_params = __toESM(require_web_url_search_params());
  var import_web_url_search_params_delete = __toESM(require_web_url_search_params_delete());
  var import_web_url_search_params_has = __toESM(require_web_url_search_params_has());
  var import_web_url_search_params_size = __toESM(require_web_url_search_params_size());
  var _excluded = ["timeoutMs", "is_torbox_api"];
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t, e) {
    if ("object" != typeof t || !t) return t;
    var r;
    if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
      var i = r.call(t, e || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  try {
    console.log("[TorBox] boot strap", "51.2.14");
    (function() {
      "use strict";
      const PLUGIN_FLAG = "torbox_lampa_plugin_integrated_v2";
      if (window[PLUGIN_FLAG]) return;
      window[PLUGIN_FLAG] = true;
      const VERSION = "51.2.14";
      const CONST = {
        CACHE_LIMIT: 128,
        CACHE_TTL_MS: 10 * 60 * 1e3,
        // 10 minutes
        TORBOX_API_TIMEOUT_MS: 20 * 1e3,
        // 20 seconds
        PUBLIC_PARSER_TIMEOUT_MS: 5 * 1e3,
        // 5 seconds
        PARSER_COOLDOWN_MS: 15 * 60 * 1e3,
        // 15 minutes
        TRACKING_POLL_INTERVAL_MS: 10 * 1e3,
        // 10 seconds
        MAX_DRAW_ITEMS: 300,
        // Guard against very large result sets
        RAW_CACHE_HASH_LIMIT: 64,
        MAX_WATCHED_EPISODES: 250,
        MAX_SNAPSHOT_BYTES: 4096,
        TRACK_RETRIES_MIN: 3,
        TRACK_RETRIES_MAX: 120,
        TRACK_INTERVAL_MIN_MS: 3e3,
        TRACK_INTERVAL_MAX_MS: 6e4
      };
      const DEFAULT_VIDEO_EXTENSIONS = "mkv,mp4,avi,ts,m4v,webm";
      const PUBLIC_PARSERS = [
        // These are TorBox-compatible tracker indexer gateways frequently used by Lampa plugins.
        // If one is down, the next will be tried.
        {
          name: "MaxVol",
          url: "jr.maxvol.pro",
          key: ""
        },
        {
          name: "Jacred",
          url: "jacred.xyz",
          key: ""
        }
      ];
      const ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" stroke-width="2"/><path d="M12 22V12" stroke="currentColor" stroke-width="2"/><path d="M21 7L12 12L3 7" stroke="currentColor" stroke-width="2"/></svg>';
      const safeStorage = (() => {
        try {
          localStorage.setItem("__torbox_test__", "1");
          localStorage.removeItem("__torbox_test__");
          return localStorage;
        } catch (_) {
          const mem = {};
          return {
            getItem: (k) => k in mem ? mem[k] : null,
            setItem: (k, v) => mem[k] = String(v),
            removeItem: (k) => delete mem[k],
            clear: () => Object.keys(mem).forEach((k) => delete mem[k])
          };
        }
      })();
      const Store = {
        get(key, def = null) {
          try {
            const v = safeStorage.getItem(key);
            return v !== null ? v : def;
          } catch (_unused) {
            return def;
          }
        },
        set(key, val) {
          try {
            safeStorage.setItem(key, String(val));
          } catch (_unused2) {
          }
        }
      };
      const DebugTelemetry = {
        logs: [],
        lastError: null,
        parserAttempts: [],
        selectedParser: null
      };
      const pushDebugLog = (level, args) => {
        try {
          const msg = args.map((a) => {
            if (typeof a === "string") return a;
            try {
              return JSON.stringify(a);
            } catch (_unused3) {
              return String(a);
            }
          }).join(" ");
          DebugTelemetry.logs.push({
            ts: (/* @__PURE__ */ new Date()).toISOString(),
            level,
            msg
          });
          if (DebugTelemetry.logs.length > 50) {
            DebugTelemetry.logs = DebugTelemetry.logs.slice(-50);
          }
        } catch (_unused4) {
        }
      };
      const parseBoolean = (value, fallback = false) => {
        if (value === true || value === false) return value;
        const normalized = String(value !== null && value !== void 0 ? value : "").trim().toLowerCase();
        if (["1", "true", "on", "yes"].includes(normalized)) return true;
        if (["0", "false", "off", "no"].includes(normalized)) return false;
        return fallback;
      };
      const DEFAULT_PROXY_URL = "https://my-torbox-proxy.slonce70.workers.dev";
      const Config = {
        get debug() {
          return Store.get("torbox_debug", "0") === "1";
        },
        set debug(v) {
          if (typeof v === "string") {
            const normalized = v.trim().toLowerCase();
            if (["0", "false", "off", "no"].includes(normalized)) v = false;
            else if (["1", "true", "on", "yes"].includes(normalized)) v = true;
          }
          Store.set("torbox_debug", v ? "1" : "0");
        },
        get proxyUrl() {
          return Store.get("torbox_proxy_url", "") || DEFAULT_PROXY_URL;
        },
        set proxyUrl(v) {
          const normalized = String(v || "").replace(/[\r\n]+/g, "").trim();
          Store.set("torbox_proxy_url", normalized);
        },
        get apiKey() {
          const b64 = Store.get("torbox_api_key_b64", "");
          if (!b64) return "";
          try {
            return atob(b64);
          } catch (_unused5) {
            Store.set("torbox_api_key_b64", "");
            return "";
          }
        },
        set apiKey(v) {
          const normalized = String(v || "").replace(/[\r\n]+/g, "").trim();
          Store.set("torbox_api_key_b64", normalized ? btoa(normalized) : "");
        }
      };
      const LOG = (...args) => {
        pushDebugLog("log", args);
        if (Config.debug) console.log("[TorBox]", ...args);
      };
      const translate = (key) => {
        try {
          if (window.Lampa && Lampa.Lang && typeof Lampa.Lang.translate === "function") {
            const value = Lampa.Lang.translate(key);
            if (value !== void 0) return value;
          }
        } catch (err) {
          LOG("Translate error", err);
        }
        return key;
      };
      const translateWithParams = (key, params = {}) => {
        const base = translate(key) || "";
        return base.replace(/\{(\w+)\}/g, (match, p1) => p1 in params ? params[p1] : match);
      };
      const Utils = {
        escapeHtml(str = "") {
          const div = document.createElement("div");
          div.textContent = String(str);
          return div.innerHTML;
        },
        formatBytes(bytes = 0, speed = false) {
          const B = Number(bytes) || 0;
          const k = 1024;
          const units = speed ? ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"] : ["B", "KB", "MB", "GB", "TB"];
          if (B <= 0) return speed ? "0 KB/s" : "0 B";
          const i = Math.min(Math.floor(Math.log(B) / Math.log(k)), units.length - 1);
          return (B / Math.pow(k, i)).toFixed(2) + " " + units[i];
        },
        formatTime(sec = 0) {
          const s = Math.max(0, Math.floor(Number(sec) || 0));
          if (!isFinite(s) || s > 30 * 24 * 3600) return translate("torbox_time_infinite");
          const h = Math.floor(s / 3600);
          const m = Math.floor(s % 3600 / 60);
          const r = s % 60;
          const parts = [];
          if (h) parts.push(translateWithParams("torbox_time_hours_short", {
            value: h
          }));
          if (m) parts.push(translateWithParams("torbox_time_minutes_short", {
            value: m
          }));
          parts.push(translateWithParams("torbox_time_seconds_short", {
            value: r
          }));
          return parts.filter(Boolean).join(" ");
        },
        formatAge(iso) {
          if (!iso) return translate("torbox_not_available");
          const d = new Date(iso);
          if (isNaN(d)) return translate("torbox_not_available");
          const diff = Math.floor((Date.now() - d.getTime()) / 1e3);
          const m = Math.floor(diff / 60);
          const h = Math.floor(m / 60);
          const days = Math.floor(h / 24);
          if (diff < 60) return translateWithParams("torbox_age_seconds", {
            value: diff
          });
          if (m < 60) return translateWithParams("torbox_age_minutes", {
            value: m
          });
          if (h < 24) return translateWithParams("torbox_age_hours", {
            value: h
          });
          return translateWithParams("torbox_age_days", {
            value: days
          });
        },
        getQualityLabel(title = "", raw) {
          var _raw$info;
          {
            const t = String(title || "").replace(/зв[уy]к\s*(с|from)\s*(ts|cam|tc)\b/gi, " ");
            if (/(^|[\s.\[\](){}_,|\/-])(cam|camrip|hdcam|hd-?ts|ts|tsrip|telesync|tc|telecine|hd-?tc)(?=$|[\s.\[\](){}_,|\/-])/i.test(t) || /камрип|экранк|телесинк/i.test(t)) return "TS/CAM";
          }
          if (raw !== null && raw !== void 0 && (_raw$info = raw.info) !== null && _raw$info !== void 0 && _raw$info.quality) {
            const normalized = String(raw.info.quality).replace(/[^0-9a-z.+-]/gi, "").toUpperCase();
            if (normalized) {
              if (normalized === "UHD" || normalized === "4K") return "4K";
              if (/^\d{3,4}P$/.test(normalized)) return normalized;
              if (/^\d{3,4}$/.test(normalized)) return "".concat(normalized, "P");
              if (["FHD", "HD", "SD"].includes(normalized)) return normalized;
            }
          }
          if (/2160p|4k|uhd/i.test(title)) return "4K";
          if (/1080p|fhd/i.test(title)) return "FHD";
          if (/720p|hd/i.test(title)) return "HD";
          return "SD";
        },
        parseSeasonEpisode(fullName = "") {
          const full = String(fullName || "");
          const parts = full.split("/");
          const base = parts.pop() || "";
          const dirs = parts.join("/");
          let m = base.match(/[Ss](\d{1,2})[ ._-]?[Ee](\d{1,3})/) || base.match(/(?:^|[^\d])(\d{1,2})x(\d{1,3})(?:[^\d]|$)/);
          if (m) return {
            s: Number(m[1]),
            e: Number(m[2])
          };
          const sm = dirs.match(/(?:season|сезон|sezon)[ ._-]*(\d{1,2})/i) || dirs.match(/(\d{1,2})[ ._-]*(?:season|сезон)/i) || dirs.match(/(?:^|[^a-z])s(\d{1,2})(?:[^\d]|$)/i);
          const em = base.match(/(?:^|[^a-z])(?:e|ep|episode|серия|серія)[ ._-]*(\d{1,3})(?:[^\d]|$)/i) || base.match(/(\d{1,3})[ ._-]*(?:серия|серія)/i) || base.match(/^(\d{1,3})(?:[ ._-]|\.\w+$)/) || base.match(/ - (\d{1,3})(?:[ ._]|\.\w+$)/);
          if (em) return {
            s: sm ? Number(sm[1]) : null,
            e: Number(em[1])
          };
          return null;
        },
        naturalEpisodeSort(a, b) {
          var _a$__idx, _b$__idx;
          const chunk = /(\d+)/g;
          const aa = a.name.split(chunk);
          const bb = b.name.split(chunk);
          for (let i = 0; i < Math.min(aa.length, bb.length); i++) {
            if (i % 2) {
              const d = Number(aa[i]) - Number(bb[i]);
              if (d) return d;
            } else {
              const d = aa[i].localeCompare(bb[i]);
              if (d) return d;
            }
          }
          return ((_a$__idx = a.__idx) !== null && _a$__idx !== void 0 ? _a$__idx : 0) - ((_b$__idx = b.__idx) !== null && _b$__idx !== void 0 ? _b$__idx : 0);
        },
        clamp(v, min, max) {
          return Math.max(min, Math.min(max, v));
        },
        normalizeProgress(p) {
          const n = Number(p);
          if (!isFinite(n) || n < 0) return 0;
          if (n <= 1) return Utils.clamp(n * 100, 0, 100);
          return Utils.clamp(n, 0, 100);
        },
        // Classify a TorBox torrent record into a UI phase:
        //  - 'ready'       : finished AND has files -> can start playback
        //  - 'finalizing'  : downloaded but not yet playable (TorBox is caching/
        //                    preparing files) -> show a "preparing" message, NOT a
        //                    stale download ETA/speed
        //  - 'downloading' : still downloading -> show progress + ETA
        downloadPhase(d) {
          if (!d || typeof d !== "object") return "downloading";
          const finished = d.download_state === "completed" || d.download_state === "uploading" || !!d.download_finished;
          const hasFiles = Array.isArray(d.files) && d.files.length > 0;
          if (finished && hasFiles) return "ready";
          const downloadDone = finished || Utils.normalizeProgress(d.progress) >= 100 || d.download_state === "cached";
          return downloadDone ? "finalizing" : "downloading";
        },
        sanitizeTokenList(value, {
          uppercase = false
        } = {}) {
          const items = String(Array.isArray(value) ? value.join(",") : value || "").split(",").map((item) => String(item || "").replace(/[\r\n]+/g, "").trim()).filter(Boolean).map((item) => uppercase ? item.toUpperCase() : item);
          return Array.from(new Set(items));
        },
        safeClassSelector(str = "") {
          return String(str || "").split(/\s+/).filter(Boolean).slice(0, 4).map((part) => part.replace(/[^\w-]/g, "")).filter(Boolean).map((part) => ".".concat(part)).join("");
        },
        // ─── BTIH helpers ─────────────────────────────────────────────────
        isHex40(s) {
          return typeof s === "string" && /^[a-fA-F0-9]{40}$/.test(s);
        },
        isBase32Btih(s) {
          return typeof s === "string" && /^[A-Z2-7]{32}$/.test(s);
        },
        base32ToHex(b32) {
          const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
          let bits = "";
          for (const c of b32) {
            const val = alphabet.indexOf(c);
            if (val < 0) throw new Error("Invalid base32 char");
            bits += val.toString(2).padStart(5, "0");
          }
          const out = [];
          for (let i = 0; i + 4 <= bits.length; i += 4) {
            out.push(parseInt(bits.slice(i, i + 4), 2).toString(16));
          }
          const hex = out.join("").toLowerCase();
          return hex.length >= 40 ? hex.slice(0, 40) : hex.padEnd(40, "0");
        },
        btihFromMagnetOrFields(obj) {
          const direct = obj.InfoHash || obj.infoHash || obj.Hash || obj.hash || null;
          const tryNormalize = (raw2) => {
            if (!raw2) return null;
            const s = String(raw2).trim();
            if (Utils.isHex40(s)) return s.toLowerCase();
            const upper = s.toUpperCase();
            if (Utils.isBase32Btih(upper)) return Utils.base32ToHex(upper);
            return null;
          };
          let normalized = tryNormalize(direct);
          if (normalized) return normalized;
          const magnet = obj.MagnetUri || obj.magnet || obj.magnetUri || "";
          if (!magnet || typeof magnet !== "string") return null;
          const q = magnet.split("?")[1] || "";
          const params = new URLSearchParams(q);
          const xt = (params.getAll("xt") || []).find((v) => /^urn:btih:/i.test(v)) || "";
          const raw = xt.replace(/^urn:btih:/i, "");
          let val;
          try {
            val = decodeURIComponent(raw);
          } catch (_unused6) {
            val = raw;
          }
          normalized = tryNormalize(val);
          return normalized;
        }
      };
      const sanitizeExtensions = (value) => {
        const parts = String(Array.isArray(value) ? value.join(",") : value || "").split(/[,\s]+/).map((ext) => ext.replace(/[^a-z0-9]/gi, "").toLowerCase()).filter(Boolean);
        const unique = Array.from(new Set(parts));
        return unique.length ? unique : DEFAULT_VIDEO_EXTENSIONS.split(",");
      };
      const setVideoExtensions = (value) => {
        const sanitized = sanitizeExtensions(value);
        const serialized = sanitized.join(",");
        if (Store.get("torbox_video_extensions", "") !== serialized) {
          Store.set("torbox_video_extensions", serialized);
        }
        return sanitized;
      };
      const getVideoExtensions = () => setVideoExtensions(Store.get("torbox_video_extensions", DEFAULT_VIDEO_EXTENSIONS));
      const normalizeTrackRetries = (value) => {
        const num = Math.round(Number(value));
        return Utils.clamp(Number.isFinite(num) ? num : 24, CONST.TRACK_RETRIES_MIN, CONST.TRACK_RETRIES_MAX);
      };
      const setTrackRetries = (value) => {
        const safe = normalizeTrackRetries(value);
        Store.set("torbox_track_retries", String(safe));
        return safe;
      };
      const getTrackRetries = () => setTrackRetries(Store.get("torbox_track_retries", "24"));
      const normalizeTrackInterval = (value) => {
        const num = Math.round(Number(value));
        return Utils.clamp(Number.isFinite(num) ? num : CONST.TRACKING_POLL_INTERVAL_MS, CONST.TRACK_INTERVAL_MIN_MS, CONST.TRACK_INTERVAL_MAX_MS);
      };
      const setTrackIntervalMs = (value) => {
        const safe = normalizeTrackInterval(value);
        Store.set("torbox_track_interval_ms", String(safe));
        return safe;
      };
      const getTrackIntervalMs = () => setTrackIntervalMs(Store.get("torbox_track_interval_ms", CONST.TRACKING_POLL_INTERVAL_MS));
      const setStoredBool = (key, value) => {
        const bool = parseBoolean(value, false);
        Store.set(key, bool ? "1" : "0");
        return bool;
      };
      const getStoredBool = (key, fallback = false) => parseBoolean(Store.get(key, fallback ? "1" : "0"), fallback);
      const setDefaultCachedOnly = (value) => setStoredBool("torbox_default_cached_only", value);
      const getDefaultCachedOnly = () => getStoredBool("torbox_default_cached_only", false);
      const setPreferPermanentLink = (value) => setStoredBool("torbox_requestdl_permanent", value);
      const getPreferPermanentLink = () => getStoredBool("torbox_requestdl_permanent", false);
      const ParserHealth = /* @__PURE__ */ (() => {
        const STORAGE_KEY = "torbox_parser_health_v1";
        let cache = null;
        const load = () => {
          if (cache) return cache;
          try {
            const parsed = JSON.parse(Store.get(STORAGE_KEY, "{}"));
            cache = parsed && typeof parsed === "object" ? parsed : {};
          } catch (_unused7) {
            cache = {};
          }
          return cache;
        };
        const save = () => {
          try {
            Store.set(STORAGE_KEY, JSON.stringify(load()));
          } catch (_unused8) {
          }
        };
        const normalizeDomain = (domain) => String(domain || "").trim().toLowerCase();
        const getEntry = (domain) => {
          const key = normalizeDomain(domain);
          if (!key) return {};
          const entry = load()[key];
          return entry && typeof entry === "object" ? entry : {};
        };
        const updateEntry = (domain, patch) => {
          const key = normalizeDomain(domain);
          if (!key) return {};
          const next = Object.assign({}, getEntry(key), patch || {});
          load()[key] = next;
          save();
          return next;
        };
        const getCooldownUntil = (domain) => {
          const raw = Number(getEntry(domain).cooldownUntil) || 0;
          if (raw > Date.now()) return raw;
          if (raw) updateEntry(domain, {
            cooldownUntil: 0
          });
          return 0;
        };
        return {
          getCooldownUntil,
          isCoolingDown(domain) {
            return getCooldownUntil(domain) > Date.now();
          },
          markFailure(domain, kind) {
            const now = Date.now();
            return updateEntry(domain, {
              lastFailureAt: now,
              lastFailureKind: String(kind || "failure"),
              cooldownUntil: now + CONST.PARSER_COOLDOWN_MS
            });
          },
          markSuccess(domain) {
            return updateEntry(domain, {
              lastSuccessAt: Date.now(),
              cooldownUntil: 0
            });
          }
        };
      })();
      const setDebugOverlayEnabled = (value) => setStoredBool("torbox_debug_overlay", value);
      const getDebugOverlayEnabled = () => getStoredBool("torbox_debug_overlay", false);
      const setAutoPickMovieFile = (value) => setStoredBool("torbox_auto_pick_movie_file", value);
      const getAutoPickMovieFile = () => getStoredBool("torbox_auto_pick_movie_file", true);
      const normalizeQualityOrder = (value) => {
        const allowed = ["4K", "FHD", "HD", "SD"];
        const items = Utils.sanitizeTokenList(value, {
          uppercase: true
        }).filter((item) => allowed.includes(item));
        return items.length ? items : allowed;
      };
      const setQualityOrder = (value) => {
        const order = normalizeQualityOrder(value);
        Store.set("torbox_pref_quality_order", order.join(","));
        return order;
      };
      const getQualityOrder = () => setQualityOrder(Store.get("torbox_pref_quality_order", "4K,FHD,HD,SD"));
      const setPreferredAudioLangs = (value) => {
        const langs = Utils.sanitizeTokenList(value, {
          uppercase: true
        });
        Store.set("torbox_pref_audio_langs", langs.join(","));
        return langs;
      };
      const getPreferredAudioLangs = () => setPreferredAudioLangs(Store.get("torbox_pref_audio_langs", ""));
      const setPreferredVideoCodecs = (value) => {
        const codecs = Utils.sanitizeTokenList(value, {
          uppercase: true
        });
        Store.set("torbox_pref_video_codecs", codecs.join(","));
        return codecs;
      };
      const getPreferredVideoCodecs = () => setPreferredVideoCodecs(Store.get("torbox_pref_video_codecs", ""));
      const setExcludedTrackers = (value) => {
        const trackers = Utils.sanitizeTokenList(value, {
          uppercase: false
        });
        Store.set("torbox_excluded_trackers", trackers.join(","));
        return trackers;
      };
      const getExcludedTrackers = () => setExcludedTrackers(Store.get("torbox_excluded_trackers", ""));
      const isCachedFlagTrue = (flag) => {
        if (flag === true || flag === "true") return true;
        if (flag === false || flag === "false") return false;
        if (typeof flag === "number") return flag > 0;
        if (typeof flag === "string") {
          const norm = flag.toLowerCase();
          if (["1", "true", "cached", "ready", "available", "complete", "completed"].includes(norm)) return true;
          if (["0", "false", "missing", "not_cached"].includes(norm)) return false;
        }
        if (flag && typeof flag === "object") {
          if ("cached" in flag) return isCachedFlagTrue(flag.cached);
          if ("ready" in flag) return isCachedFlagTrue(flag.ready);
          if ("status" in flag) return isCachedFlagTrue(flag.status);
          if ("available" in flag) return isCachedFlagTrue(flag.available);
          return Object.values(flag).some(isCachedFlagTrue);
        }
        return false;
      };
      const Cache = /* @__PURE__ */ (() => {
        const map = /* @__PURE__ */ new Map();
        return {
          get(k) {
            if (!map.has(k)) return null;
            const entry = map.get(k);
            if (Date.now() - entry.ts > CONST.CACHE_TTL_MS) {
              map.delete(k);
              return null;
            }
            map.delete(k);
            map.set(k, entry);
            return entry.val;
          },
          set(k, v) {
            if (map.has(k)) map.delete(k);
            map.set(k, {
              ts: Date.now(),
              val: v
            });
            if (map.size > CONST.CACHE_LIMIT) {
              const oldestKey = map.keys().next().value;
              map.delete(oldestKey);
            }
          },
          clear() {
            map.clear();
          }
        };
      })();
      const Api = /* @__PURE__ */ (() => {
        const TB_MAIN = "https://api.torbox.app/v1/api";
        function requireProxy() {
          if (!Config.proxyUrl || !String(Config.proxyUrl).trim()) {
            const err = {
              type: "validation",
              message: translate("torbox_error_cors_missing")
            };
            throw err;
          }
        }
        function requireApiKey() {
          if (!Config.apiKey) {
            const err = {
              type: "validation",
              message: translate("torbox_error_api_key_missing")
            };
            throw err;
          }
        }
        function parseJsonSafe(text) {
          try {
            return typeof text === "string" ? JSON.parse(text) : text;
          } catch (_unused9) {
            return null;
          }
        }
        function extractApiDetail(json, text) {
          var _json$data, _json$data2;
          const direct = (json === null || json === void 0 ? void 0 : json.detail) || (json === null || json === void 0 ? void 0 : json.message) || (json === null || json === void 0 ? void 0 : json.error) || (json === null || json === void 0 || (_json$data = json.data) === null || _json$data === void 0 ? void 0 : _json$data.detail) || (json === null || json === void 0 || (_json$data2 = json.data) === null || _json$data2 === void 0 ? void 0 : _json$data2.message) || "";
          const normalized = String(direct || "").replace(/\s+/g, " ").trim();
          if (normalized) return Utils.escapeHtml(normalized);
          const plain = String(text || "").trim();
          if (plain && plain.length <= 180 && !/^</.test(plain)) return Utils.escapeHtml(plain);
          return "";
        }
        function buildProxyUrl(base, target) {
          const raw = String(base || "").trim();
          if (!raw) return raw;
          try {
            const proxyUrl = new URL(raw);
            proxyUrl.searchParams.set("url", target);
            return proxyUrl.toString();
          } catch (_) {
            if (raw.includes("{url}")) {
              return raw.replace("{url}", encodeURIComponent(target));
            }
            if (raw.includes("%s")) {
              return raw.replace("%s", encodeURIComponent(target));
            }
            const hasQuery = raw.includes("?");
            const endsWithJoin = /[?&]$/.test(raw);
            if (/[?&]url=/.test(raw)) {
              return raw.replace(/([?&]url=)[^&#]*/i, (_2, prefix) => "".concat(prefix).concat(encodeURIComponent(target)));
            }
            const joiner = hasQuery ? endsWithJoin ? "" : "&" : "?";
            return "".concat(raw).concat(joiner, "url=").concat(encodeURIComponent(target));
          }
        }
        async function request(url, opt = {}, outerSignal) {
          requireProxy();
          const {
            timeoutMs: optTimeoutMs,
            is_torbox_api: isTorBoxApiFlag
          } = opt, fetchOptions = _objectWithoutProperties(opt, _excluded);
          const isTorBox = isTorBoxApiFlag !== false;
          if (isTorBox) requireApiKey();
          const controller = new AbortController();
          const timeoutMs = Math.max(1, Number(optTimeoutMs) || CONST.TORBOX_API_TIMEOUT_MS);
          const t = setTimeout(() => controller.abort(), timeoutMs);
          const onOuterAbort = () => controller.abort();
          if (outerSignal) outerSignal.addEventListener("abort", onOuterAbort, {
            once: true
          });
          const headers = Object.assign({}, fetchOptions.headers || {});
          delete headers.Authorization;
          if (isTorBox) headers["X-Api-Key"] = Config.apiKey;
          const proxied = buildProxyUrl(Config.proxyUrl, url);
          try {
            const res = await fetch(proxied, _objectSpread(_objectSpread({}, fetchOptions), {}, {
              headers,
              signal: controller.signal
            }));
            const status = res.status;
            const text = await res.text();
            const json = parseJsonSafe(text);
            const detail = extractApiDetail(json, text);
            const withDetail = (base) => detail ? "".concat(base, ": ").concat(detail) : base;
            if (status === 401) throw {
              type: "auth",
              status,
              message: withDetail(translate("torbox_error_401"))
            };
            if (status === 403) throw {
              type: "auth",
              status,
              message: withDetail(translate("torbox_error_403"))
            };
            if (status === 404) throw {
              type: "api",
              status,
              message: withDetail(translate("torbox_error_404"))
            };
            if (status === 429) throw {
              type: "network",
              status,
              message: withDetail(translate("torbox_error_429"))
            };
            if (status >= 500) throw {
              type: "network",
              status,
              message: withDetail(translateWithParams("torbox_error_server", {
                status
              }))
            };
            if (status >= 400) throw {
              type: "network",
              status,
              message: withDetail(translateWithParams("torbox_error_request", {
                status
              }))
            };
            if (text.startsWith("http")) return {
              success: true,
              url: text
            };
            if (!json) throw {
              type: "api",
              message: translate("torbox_error_bad_json")
            };
            if (json.success === false) {
              const apiDetail = Utils.escapeHtml(String(json.detail || json.message || ""));
              throw {
                type: "api",
                message: apiDetail || translate("torbox_error_api")
              };
            }
            return json;
          } catch (e) {
            if (e.name === "AbortError") {
              if (!outerSignal || !outerSignal.aborted) {
                throw {
                  type: "network",
                  message: translateWithParams("torbox_error_timeout", {
                    seconds: timeoutMs / 1e3
                  }),
                  timeoutMs
                };
              }
              throw e;
            }
            if (e.type) throw e;
            throw {
              type: "network",
              message: e && e.message ? e.message : translate("torbox_error_network")
            };
          } finally {
            clearTimeout(t);
            if (outerSignal) outerSignal.removeEventListener("abort", onOuterAbort);
          }
        }
        function normalizeParserResults(rawResults = []) {
          const items = Array.isArray(rawResults) ? rawResults : [];
          const entriesByHash = /* @__PURE__ */ new Map();
          let invalidCount = 0;
          items.forEach((item) => {
            const hash = Utils.btihFromMagnetOrFields(item);
            if (!hash) {
              invalidCount += 1;
              return;
            }
            if (!entriesByHash.has(hash)) entriesByHash.set(hash, item);
          });
          return {
            rawCount: items.length,
            validCount: entriesByHash.size,
            invalidCount,
            entriesByHash
          };
        }
        function classifyParserFailure(err = {}) {
          const statusCode = Number(err === null || err === void 0 ? void 0 : err.status) || 0;
          const message = String((err === null || err === void 0 ? void 0 : err.message) || "");
          const lower = message.toLowerCase();
          if (Number(err === null || err === void 0 ? void 0 : err.timeoutMs) > 0 || /timeout|timed out|time out/i.test(message)) {
            return {
              status: "timeout",
              cooldown: true,
              reason: message || "timeout",
              statusCode
            };
          }
          if (statusCode >= 500) {
            return {
              status: "http_error",
              cooldown: true,
              reason: "http_".concat(statusCode),
              statusCode
            };
          }
          if (statusCode >= 400) {
            return {
              status: "http_error",
              cooldown: false,
              reason: "http_".concat(statusCode),
              statusCode
            };
          }
          if (/err_connection_closed|ssl|tls|handshake|fetch failed|network|econnreset|connection closed|connection reset/.test(lower)) {
            return {
              status: "network",
              cooldown: true,
              reason: message || "network",
              statusCode
            };
          }
          return {
            status: "network",
            cooldown: true,
            reason: message || "network",
            statusCode
          };
        }
        async function searchPublicTrackers(movie, signal) {
          const searchTitle = (movie.title || movie.name || "").trim();
          const searchOriginal = (movie.original_title || movie.original_name || "").trim();
          const yearRaw = (movie.year || movie.release_date || movie.first_air_date || "").toString();
          const searchYear = yearRaw ? yearRaw.slice(0, 4) : "";
          const queryBase = "".concat(searchTitle, " ").concat(searchYear).trim();
          const qsCommon = {
            Query: queryBase,
            title: searchTitle,
            title_original: searchOriginal,
            Category: "2000,5000"
            // Movies + TV
          };
          const customStr = Store.get("torbox_custom_parsers", "").trim();
          const customParsers = customStr.split(",").map((s) => s.trim()).filter((s) => s && s.length > 3).map((entry, i) => {
            try {
              const u = new URL(/^https?:\/\//i.test(entry) ? entry : "https://".concat(entry));
              const host = "".concat(u.host).concat(u.pathname.replace(/\/+$/, ""));
              return host ? {
                name: "Custom ".concat(i + 1),
                url: host,
                key: ""
              } : null;
            } catch (_unused0) {
              return null;
            }
          }).filter(Boolean);
          const parsers = [...customParsers, ...PUBLIC_PARSERS];
          const parserAttempts = [];
          let selectedParser = null;
          const setParserTelemetry = (attempts, parserMeta) => {
            DebugTelemetry.parserAttempts = attempts.slice(-20);
            DebugTelemetry.selectedParser = parserMeta ? {
              name: parserMeta.name,
              domain: parserMeta.domain,
              valid_count: parserMeta.valid_count,
              raw_count: parserMeta.raw_count
            } : null;
          };
          const activeParsers = parsers.filter((parser) => !ParserHealth.isCoolingDown(parser.url));
          const useCooldownAwarePass = activeParsers.length > 0;
          const passParsers = useCooldownAwarePass ? activeParsers : parsers;
          if (useCooldownAwarePass) {
            parsers.filter((parser) => ParserHealth.isCoolingDown(parser.url)).forEach((parser) => {
              const cooldownUntil = ParserHealth.getCooldownUntil(parser.url);
              parserAttempts.push({
                name: parser.name,
                domain: parser.url,
                elapsed_ms: 0,
                status: "cooldown_skip",
                raw_count: 0,
                valid_count: 0,
                invalid_count: 0,
                cooldown_until: cooldownUntil ? new Date(cooldownUntil).toISOString() : null,
                reason: "cooldown_active"
              });
            });
          }
          for (const p of passParsers) {
            if (signal.aborted) break;
            const qs = new URLSearchParams(qsCommon);
            if (p.key) qs.set("apikey", p.key);
            if (searchYear) qs.set("year", searchYear);
            const url = "https://".concat(p.url, "/api/v2.0/indexers/all/results?").concat(qs.toString());
            const startedAt = Date.now();
            try {
              LOG("Parser try:", p.name, url);
              const json = await request(url, {
                method: "GET",
                is_torbox_api: false,
                timeoutMs: CONST.PUBLIC_PARSER_TIMEOUT_MS
              }, signal);
              const list = Array.isArray(json === null || json === void 0 ? void 0 : json.Results) ? json.Results : [];
              const normalized = normalizeParserResults(list);
              const attempt = {
                name: p.name,
                domain: p.url,
                elapsed_ms: Date.now() - startedAt,
                status: normalized.validCount > 0 ? "success" : normalized.rawCount > 0 ? "invalid_payload" : "empty",
                raw_count: normalized.rawCount,
                valid_count: normalized.validCount,
                invalid_count: normalized.invalidCount,
                cooldown_until: null,
                reason: normalized.validCount > 0 ? "valid_hashes" : normalized.rawCount > 0 ? "no_valid_hashes" : "no_results"
              };
              parserAttempts.push(attempt);
              LOG("Parser result:", p.name, {
                raw: normalized.rawCount,
                valid: normalized.validCount,
                invalid: normalized.invalidCount,
                status: attempt.status
              });
              if (normalized.validCount > 0) {
                ParserHealth.markSuccess(p.url);
                selectedParser = {
                  name: p.name,
                  domain: p.url,
                  valid_count: normalized.validCount,
                  raw_count: normalized.rawCount
                };
                setParserTelemetry(parserAttempts, selectedParser);
                return {
                  parser: selectedParser,
                  entriesByHash: normalized.entriesByHash,
                  diagnostics: parserAttempts.slice()
                };
              }
              if (attempt.status === "invalid_payload") {
                const health = ParserHealth.markFailure(p.url, attempt.status);
                attempt.cooldown_until = health !== null && health !== void 0 && health.cooldownUntil ? new Date(health.cooldownUntil).toISOString() : null;
              }
            } catch (e) {
              const failure = classifyParserFailure(e);
              const attempt = {
                name: p.name,
                domain: p.url,
                elapsed_ms: Date.now() - startedAt,
                status: failure.status,
                raw_count: 0,
                valid_count: 0,
                invalid_count: 0,
                cooldown_until: null,
                reason: failure.reason,
                status_code: failure.statusCode || null
              };
              if (failure.cooldown) {
                const health = ParserHealth.markFailure(p.url, failure.status);
                attempt.cooldown_until = health !== null && health !== void 0 && health.cooldownUntil ? new Date(health.cooldownUntil).toISOString() : null;
              }
              parserAttempts.push(attempt);
              LOG("Parser failed:", p.name, e.message || e);
            } finally {
              setParserTelemetry(parserAttempts, selectedParser);
            }
          }
          const hadInvalidPayload = parserAttempts.some((attempt) => attempt.status === "invalid_payload");
          setParserTelemetry(parserAttempts, selectedParser);
          throw hadInvalidPayload ? {
            type: "api",
            message: translate("torbox_error_public_parsers_invalid")
          } : {
            type: "api",
            message: translate("torbox_error_public_parsers_empty")
          };
        }
        async function checkCached(hashes, signal) {
          if (!Array.isArray(hashes) || !hashes.length) return {};
          const acc = {};
          for (let i = 0; i < hashes.length; i += 100) {
            if (signal !== null && signal !== void 0 && signal.aborted) break;
            const chunk = hashes.slice(i, i + 100);
            const qs = new URLSearchParams();
            chunk.forEach((h) => qs.append("hash", h));
            qs.set("format", "object");
            qs.set("list_files", "false");
            try {
              const r = await request("".concat(TB_MAIN, "/torrents/checkcached?").concat(qs.toString()), {
                method: "GET",
                timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
              }, signal);
              if (r !== null && r !== void 0 && r.data) Object.assign(acc, r.data);
            } catch (e) {
              LOG("checkCached error:", e.message || e);
            }
          }
          return acc;
        }
        function addMagnet(magnet, signal) {
          const fd = new FormData();
          fd.append("magnet", magnet);
          fd.append("seed", "3");
          return request("".concat(TB_MAIN, "/torrents/createtorrent"), {
            method: "POST",
            body: fd,
            timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
          }, signal);
        }
        async function myList(id, signal) {
          const json = await request("".concat(TB_MAIN, "/torrents/mylist?id=").concat(encodeURIComponent(id), "&bypass_cache=true"), {
            method: "GET",
            timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
          }, signal);
          if (json && json.data && !Array.isArray(json.data)) json.data = [json.data];
          return json;
        }
        async function requestDl(tid, fid, signal) {
          const base = "".concat(TB_MAIN, "/torrents/requestdl?torrent_id=").concat(encodeURIComponent(tid), "&file_id=").concat(encodeURIComponent(fid), "&token=").concat(encodeURIComponent(Config.apiKey));
          if (!getPreferPermanentLink()) {
            return request(base, {
              method: "GET",
              timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
            }, signal);
          }
          try {
            const preferred = await request("".concat(base, "&redirect=true"), {
              method: "GET",
              timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
            }, signal);
            const preferredUrl = (preferred === null || preferred === void 0 ? void 0 : preferred.url) || (preferred === null || preferred === void 0 ? void 0 : preferred.data);
            if (typeof preferredUrl === "string" && /^https?:\/\//i.test(preferredUrl)) return preferred;
          } catch (e) {
            LOG("Permanent requestdl failed, fallback to classic", (e === null || e === void 0 ? void 0 : e.message) || e);
          }
          return request(base, {
            method: "GET",
            timeoutMs: CONST.TORBOX_API_TIMEOUT_MS
          }, signal);
        }
        return {
          searchPublicTrackers,
          checkCached,
          addMagnet,
          myList,
          requestDl
        };
      })();
      const ErrorHandler = {
        show(kind, err) {
          const t = kind || (err === null || err === void 0 ? void 0 : err.type) || "error";
          const msg = (err === null || err === void 0 ? void 0 : err.message) || translate("torbox_error_unknown");
          DebugTelemetry.lastError = {
            ts: (/* @__PURE__ */ new Date()).toISOString(),
            type: t,
            message: String(msg)
          };
          const prefix = t === "auth" ? translate("torbox_error_prefix_auth") : t === "validation" ? translate("torbox_error_prefix_validation") : t === "network" ? translate("torbox_error_prefix_network") : t === "api" ? translate("torbox_error_prefix_api") : translate("torbox_error_prefix_generic");
          try {
            Lampa.Noty.show("".concat(prefix, ": ").concat(msg), {
              type: "error"
            });
          } catch (_unused1) {
            console.error("[TorBox]", prefix + ": " + msg);
          }
          LOG("ERR", t, err);
        }
      };
      function generateSearchCombinations(movie = {}) {
        var _movie$alternative_ti;
        const combosMap = /* @__PURE__ */ new Map();
        const addCombo = (query, tags = [], label) => {
          const normalized = String(query || "").replace(/\s+/g, " ").trim();
          if (!normalized) return;
          const key = normalized.toLowerCase();
          const tagSet = new Set(tags.filter(Boolean));
          if (combosMap.has(key)) {
            const existing = combosMap.get(key);
            tagSet.forEach((tag) => existing.tags.add(tag));
            if (label && label.length < existing.label.length) existing.label = label;
            return;
          }
          combosMap.set(key, {
            query: normalized,
            label: label || normalized,
            tags: tagSet
          });
        };
        const nameMap = /* @__PURE__ */ new Map();
        const registerName = (value, tags = []) => {
          const normalized = String(value || "").replace(/\s+/g, " ").trim();
          if (!normalized) return;
          const key = normalized.toLowerCase();
          if (!nameMap.has(key)) {
            nameMap.set(key, {
              value: normalized,
              tags: new Set(tags)
            });
          } else {
            const existing = nameMap.get(key);
            tags.forEach((tag) => existing.tags.add(tag));
          }
        };
        const title = (movie.title || movie.name || "").trim();
        const orig = (movie.original_title || movie.original_name || "").trim();
        const localizedTranslations = Array.isArray(movie.translations) ? movie.translations.map((t) => t && t.data ? t.data.title : (t === null || t === void 0 ? void 0 : t.title) || (t === null || t === void 0 ? void 0 : t.name) || "").filter(Boolean) : [];
        if (title) registerName(title, ["base"]);
        if (orig && orig.toLowerCase() !== title.toLowerCase()) registerName(orig, ["original"]);
        localizedTranslations.forEach((name) => registerName(name, ["translation"]));
        const pushDynamicName = (value) => {
          if (!value) return;
          if (typeof value === "string") registerName(value, ["alt"]);
          else if (Array.isArray(value)) value.forEach((item) => pushDynamicName(item));
          else if (value && typeof value === "object") {
            if (value.title) pushDynamicName(value.title);
            if (value.name) pushDynamicName(value.name);
            if (value.value) pushDynamicName(value.value);
          }
        };
        Object.keys(movie).forEach((key) => {
          if (!/title|name/i.test(key)) return;
          if (["title", "name", "original_title", "original_name"].includes(key)) return;
          pushDynamicName(movie[key]);
        });
        if (Array.isArray(movie === null || movie === void 0 || (_movie$alternative_ti = movie.alternative_titles) === null || _movie$alternative_ti === void 0 ? void 0 : _movie$alternative_ti.titles)) {
          movie.alternative_titles.titles.forEach((entry) => pushDynamicName(entry === null || entry === void 0 ? void 0 : entry.title));
        }
        const names = Array.from(nameMap.values()).map((entry) => ({
          value: entry.value,
          tags: Array.from(entry.tags)
        }));
        const yearRaw = (movie.release_date || movie.first_air_date || movie.year || "").toString();
        const year = yearRaw ? yearRaw.slice(0, 4) : "";
        const season = movie.season_number || movie.season || null;
        const episode = movie.episode_number || movie.episode || null;
        const keywords = [movie.keywords, movie.tags].flat().filter(Boolean).reduce((acc, item) => {
          if (typeof item === "string") acc.push(item);
          if (item && typeof item === "object") {
            if (item.name) acc.push(item.name);
            if (item.title) acc.push(item.title);
          }
          return acc;
        }, []);
        names.forEach((entry) => {
          addCombo(entry.value, entry.tags);
          if (year) addCombo("".concat(entry.value, " ").concat(year), [...entry.tags, "year"]);
          if (season) {
            const sNum = String(season).padStart(2, "0");
            addCombo("".concat(entry.value, " S").concat(sNum), [...entry.tags, "season"]);
            addCombo("".concat(entry.value, " season ").concat(season), [...entry.tags, "season"]);
            if (episode) {
              const eNum = String(episode).padStart(2, "0");
              addCombo("".concat(entry.value, " S").concat(sNum, "E").concat(eNum), [...entry.tags, "season", "episode"]);
              addCombo("".concat(entry.value, " ").concat(season, " \u0441\u0435\u0437\u043E\u043D ").concat(episode, " \u0441\u0435\u0440\u0438\u044F"), [...entry.tags, "season", "episode"]);
            }
          }
        });
        if (title && orig && title.toLowerCase() !== orig.toLowerCase()) {
          addCombo("".concat(title, " ").concat(orig), ["mix"]);
          if (year) addCombo("".concat(title, " ").concat(orig, " ").concat(year), ["mix", "year"]);
        }
        const primaryNames = names.filter((entry) => entry.tags.includes("base") || entry.tags.includes("original") || entry.tags.includes("translation")).slice(0, 3);
        keywords.slice(0, 10).forEach((kw) => {
          primaryNames.forEach((entry) => {
            addCombo("".concat(entry.value, " ").concat(kw), [...entry.tags, "keyword"]);
            if (year) addCombo("".concat(entry.value, " ").concat(kw, " ").concat(year), [...entry.tags, "keyword", "year"]);
          });
        });
        if (movie.imdb_id) addCombo(movie.imdb_id, ["id"]);
        if (movie.tmdb_id || movie.id) addCombo("tmdb:".concat(movie.tmdb_id || movie.id), ["id"]);
        const limit = 40;
        const result = Array.from(combosMap.values()).map((entry) => ({
          query: entry.query,
          label: entry.label,
          tags: Array.from(entry.tags).filter((tag, idx, arr) => tag !== "base" && arr.indexOf(tag) === idx)
        })).filter((entry) => entry.query.length).slice(0, limit);
        if (Config.debug) LOG("Search combinations", result);
        return result;
      }
      function MainComponent(object) {
        let scroll = new Lampa.Scroll({
          mask: false,
          over: true,
          step: 250
        });
        let files = new Lampa.Explorer(object);
        let filter = new Lampa.Filter(object);
        let abort = new AbortController();
        let initialized = false;
        let lastFocused = null;
        let cachedToggleBtn = null;
        let activeTorrentController = null;
        let pendingPlayback = null;
        this.activity = object.activity;
        window.__torbox_active_component = this;
        const sortVariants = [{
          key: "seeders",
          labelKey: "torbox_sort_seeders_desc",
          field: "last_known_seeders",
          reverse: true
        }, {
          key: "size_desc",
          labelKey: "torbox_sort_size_desc",
          field: "size",
          reverse: true
        }, {
          key: "size_asc",
          labelKey: "torbox_sort_size_asc",
          field: "size",
          reverse: false
        }, {
          key: "age",
          labelKey: "torbox_sort_age",
          field: "publish_timestamp",
          reverse: true
        }];
        const defaultFilters = {
          quality: "all",
          tracker: "all",
          video_type: "all",
          translation: "all",
          lang: "all",
          video_codec: "all",
          audio_codec: "all"
        };
        const loadFilters = () => {
          try {
            return JSON.parse(Store.get("torbox_filters_v2", JSON.stringify(defaultFilters)));
          } catch (_unused10) {
            Store.set("torbox_filters_v2", JSON.stringify(defaultFilters));
            return _objectSpread({}, defaultFilters);
          }
        };
        const loadCachedOnly = () => {
          const stored = Store.get("torbox_show_only_cached", null);
          if (stored === null || stored === "") return getDefaultCachedOnly();
          return parseBoolean(stored, false);
        };
        const state = {
          all_torrents: [],
          sort: Store.get("torbox_sort_method", "seeders"),
          filters: loadFilters(),
          last_hash: null,
          view: "torrents",
          // 'torrents' | 'episodes'
          current_torrent_data: null,
          search_query: null,
          show_only_cached: loadCachedOnly()
        };
        const readPreferenceState = () => ({
          qualityOrder: getQualityOrder(),
          audioLangs: getPreferredAudioLangs(),
          videoCodecs: getPreferredVideoCodecs(),
          excludedTrackers: getExcludedTrackers()
        });
        const isTrackerExcluded = (torrentTrackers, excludedSet) => {
          if (!excludedSet || !excludedSet.size) return false;
          return (Array.isArray(torrentTrackers) ? torrentTrackers : []).some((tracker) => excludedSet.has(String(tracker || "").toLowerCase()));
        };
        const rawTorrentByHash = /* @__PURE__ */ new Map();
        let debugOverlayEl = null;
        const storeRawTorrent = (hash, raw) => {
          if (!hash || !raw) return;
          rawTorrentByHash.delete(hash);
          rawTorrentByHash.set(hash, raw);
          if (rawTorrentByHash.size > CONST.RAW_CACHE_HASH_LIMIT) {
            const oldest = rawTorrentByHash.keys().next().value;
            rawTorrentByHash.delete(oldest);
          }
        };
        const getRawTorrentByHash = (hash) => hash ? rawTorrentByHash.get(hash) || null : null;
        const FocusZones = Object.freeze({
          CONTINUE: "continue",
          LIST: "list",
          FILTER: "filter",
          FILE: "file",
          FILE_DOWNLOAD: "file_download",
          SEASON: "season",
          EMPTY: "empty"
        });
        const focusState = {
          zone: null,
          index: 0
        };
        const describeElementForDebug = (element) => {
          if (!element || !element.length) return "-";
          const classes = Utils.safeClassSelector(element.attr("class") || "") || element.prop("tagName") || "-";
          const hash = element.attr("data-hash") || "";
          return hash ? "".concat(classes, '[data-hash="').concat(hash, '"]') : classes;
        };
        const ensureDebugOverlay = () => {
          const shouldShow = Config.debug && getDebugOverlayEnabled();
          if (!shouldShow) {
            if (debugOverlayEl) {
              debugOverlayEl.remove();
              debugOverlayEl = null;
            }
            return;
          }
          if (debugOverlayEl && debugOverlayEl.length) return;
          debugOverlayEl = $('<div class="torbox-debug-overlay" aria-live="polite"></div>');
          debugOverlayEl.css({
            position: "fixed",
            right: "1em",
            bottom: "1em",
            zIndex: 99999,
            maxWidth: "36em",
            padding: ".7em .9em",
            borderRadius: ".6em",
            background: "rgba(0,0,0,.78)",
            color: "#fff",
            fontSize: ".85em",
            lineHeight: "1.35",
            pointerEvents: "none",
            whiteSpace: "pre-line"
          });
          $("body").append(debugOverlayEl);
        };
        const updateDebugOverlay = (element) => {
          var _DebugTelemetry$selec;
          ensureDebugOverlay();
          if (!debugOverlayEl || !debugOverlayEl.length) return;
          const lines = ["TorBox ".concat(VERSION), "view: ".concat(state.view), "zone/index: ".concat(focusState.zone || "-", " / ").concat(focusState.index), "element: ".concat(describeElementForDebug(element))];
          if ((_DebugTelemetry$selec = DebugTelemetry.selectedParser) !== null && _DebugTelemetry$selec !== void 0 && _DebugTelemetry$selec.name) {
            lines.push("parser: ".concat(DebugTelemetry.selectedParser.name, " (").concat(DebugTelemetry.selectedParser.valid_count || 0, ")"));
          }
          debugOverlayEl.text(lines.join("\n"));
        };
        const buildDiagnosticsReport = () => ({
          generated_at: (/* @__PURE__ */ new Date()).toISOString(),
          version: VERSION,
          settings: {
            proxy_url: Config.proxyUrl || "",
            debug: !!Config.debug,
            debug_overlay: getDebugOverlayEnabled(),
            prefer_permanent_link: getPreferPermanentLink(),
            default_cached_only: getDefaultCachedOnly(),
            auto_pick_movie_file: getAutoPickMovieFile(),
            quality_order: getQualityOrder(),
            preferred_audio_langs: getPreferredAudioLangs(),
            preferred_video_codecs: getPreferredVideoCodecs(),
            excluded_trackers: getExcludedTrackers(),
            video_extensions: getVideoExtensions()
          },
          state: {
            view: state.view,
            sort: state.sort,
            show_only_cached: state.show_only_cached,
            focus_zone: focusState.zone,
            focus_index: focusState.index,
            items_total: state.all_torrents.length
          },
          last_error: DebugTelemetry.lastError,
          selected_parser: DebugTelemetry.selectedParser,
          parser_attempts: DebugTelemetry.parserAttempts.slice(-20),
          logs_tail: DebugTelemetry.logs.slice(-50)
        });
        const isTorrentsView = () => state.view === "torrents";
        const getFilterFocusItems = () => {
          if (!filter || typeof filter.render !== "function") return $();
          const container = filter.render();
          let items = container.find(".torbox-cached-toggle.selector, .filter--search.selector, .filter--sort.selector, .filter--filter.selector");
          if (!items || !items.length) {
            items = container.find(".filter__item.selector, .selector");
          }
          items = items.not(".filter--back");
          return items;
        };
        const getFocusCollection = (zone) => {
          if (!scroll || typeof scroll.render !== "function") return $();
          const root = scroll.render();
          switch (zone) {
            case FocusZones.CONTINUE:
              return root.find(".torbox-watched-item.selector");
            case FocusZones.LIST:
              return root.find(".torbox-item.selector");
            case FocusZones.EMPTY:
              return root.find(".empty.selector");
            case FocusZones.FILTER:
              return getFilterFocusItems();
            case FocusZones.FILE:
              return root.find(".torbox-file-item.selector");
            case FocusZones.FILE_DOWNLOAD:
              return root.find(".torbox-file-download.selector");
            case FocusZones.SEASON:
              return root.find(".torbox-season-tab.selector");
            default:
              return $();
          }
        };
        const detectZone = (element) => {
          if (!element || !element.length) return null;
          if (element.hasClass("torbox-item")) return FocusZones.LIST;
          if (element.hasClass("torbox-watched-item")) return FocusZones.CONTINUE;
          if (element.hasClass("torbox-cached-toggle") || element.hasClass("filter__item") || element.hasClass("filter--search") || element.hasClass("filter--sort") || element.hasClass("filter--filter") || element.hasClass("filter--back") || element.hasClass("simple-button--filter")) {
            return FocusZones.FILTER;
          }
          if (element.hasClass("torbox-file-download")) return FocusZones.FILE_DOWNLOAD;
          if (element.hasClass("torbox-season-tab")) return FocusZones.SEASON;
          if (element.hasClass("torbox-file-item")) return FocusZones.FILE;
          if (element.hasClass("empty")) return FocusZones.EMPTY;
          return null;
        };
        const updateFocusMetaFromElement = (element) => {
          if (!element || !element.length) return;
          const zone = element.data("torboxZone") || detectZone(element);
          const index = Number(element.data("torboxIndex")) || 0;
          focusState.zone = zone;
          focusState.index = index;
          lastFocused = element[0];
          if (zone === FocusZones.LIST) {
            const hashAttr = element.attr("data-hash");
            if (hashAttr) state.last_hash = hashAttr;
          }
          updateDebugOverlay(element);
        };
        const focusElement = (element) => {
          if (!element || !element.length) return false;
          updateFocusMetaFromElement(element);
          if (scroll && typeof scroll.render === "function") {
            const focusContainer = focusState.zone === FocusZones.FILTER && filter && typeof filter.render === "function" ? filter.render() : scroll.render();
            Lampa.Controller.collectionFocus(element[0], focusContainer);
            if (focusState.zone !== FocusZones.FILTER && typeof scroll.update === "function") {
              scroll.update(element, true);
            }
          }
          return true;
        };
        const focusZone = (zone, index = 0) => {
          const collection = getFocusCollection(zone);
          if (!collection || !collection.length) return false;
          const clamped = Math.min(Math.max(index, 0), collection.length - 1);
          const target = collection.eq(clamped);
          return focusElement(target);
        };
        const focusListByIndex = (index = 0) => focusZone(FocusZones.LIST, index);
        const focusContinueItem = () => focusZone(FocusZones.CONTINUE, 0);
        const focusFilterItem = (index = 0) => focusZone(FocusZones.FILTER, index);
        const focusEmptyMessage = () => focusZone(FocusZones.EMPTY, 0);
        const focusFileItem = (index = 0) => focusZone(FocusZones.FILE, index);
        const focusFileDownload = (index = 0) => focusZone(FocusZones.FILE_DOWNLOAD, index);
        const focusFirstListItem = () => {
          if (!scroll || typeof scroll.render !== "function") return;
          if (!isTorrentsView()) return;
          if (!focusListByIndex(0)) focusEmptyMessage();
        };
        const focusLastKnownListItem = () => {
          if (!scroll || typeof scroll.render !== "function") return false;
          if (state.last_hash) {
            const saved = scroll.render().find('[data-hash="'.concat(state.last_hash, '"]')).first();
            if (saved.length) return focusElement(saved);
          }
          return focusListByIndex(0);
        };
        const hasContinueItem = () => getFocusCollection(FocusZones.CONTINUE).length > 0;
        const openFilterPanel = () => {
          try {
            const btn = filter && typeof filter.render === "function" ? filter.render().find(".filter--filter") : null;
            if (btn && btn.length) {
              btn.trigger("hover:enter");
              return true;
            }
          } catch (e) {
            LOG("openFilterPanel trigger error", e);
          }
          try {
            filter.show(Lampa.Lang.translate("title_filter"), "filter");
          } catch (e) {
            LOG("openFilterPanel show error", e);
          }
          return true;
        };
        const refreshFilterFocusBinding = () => {
          if (!filter || typeof filter.render !== "function") return;
          const items = getFilterFocusItems();
          if (!items || !items.length) return;
          items.each((idx, el) => {
            const $el = $(el);
            $el.data("torboxZone", FocusZones.FILTER).data("torboxIndex", idx).addClass("torbox-filter-focus");
          });
          items.off("hover:focus.torboxNav").on("hover:focus.torboxNav", (e) => {
            updateFocusMetaFromElement($(e.currentTarget));
          });
        };
        const focusPrimaryFilterControl = () => {
          if (!filter || typeof filter.render !== "function") return false;
          refreshFilterFocusBinding();
          const container = filter.render();
          let primary = container.find(".filter--filter.selector").first();
          if (!primary.length) primary = container.find(".filter--filter").first();
          if (primary.length) return focusElement(primary);
          return focusFilterItem(0);
        };
        const focusSearchControl = () => {
          if (!filter || typeof filter.render !== "function") return false;
          refreshFilterFocusBinding();
          const container = filter.render();
          let searchBtn = container.find(".filter--search.selector").first();
          if (!searchBtn.length) searchBtn = container.find(".filter--search").first();
          if (searchBtn.length) return focusElement(searchBtn);
          return focusFilterItem(0);
        };
        const formatRefineTags = (tags) => {
          if (!Array.isArray(tags) || !tags.length) return "";
          const dictionary = {
            original: translate("torbox_refine_tag_original"),
            translation: translate("torbox_refine_tag_translation"),
            alt: translate("torbox_refine_tag_alt"),
            year: translate("torbox_refine_tag_year"),
            season: translate("torbox_refine_tag_season"),
            episode: translate("torbox_refine_tag_episode"),
            keyword: translate("torbox_refine_tag_keyword"),
            id: translate("torbox_refine_tag_id"),
            mix: translate("torbox_refine_tag_mix")
          };
          const labels = tags.map((tag) => dictionary[tag]).filter(Boolean);
          return labels.join(" \u2022 ");
        };
        const focusRoutes = {
          [FocusZones.LIST]: {
            up: () => {
              if (focusState.index > 0) return focusListByIndex(focusState.index - 1);
              if (hasContinueItem()) return focusContinueItem();
              if (focusSearchControl()) return true;
              Lampa.Controller.toggle("head");
              return true;
            },
            down: () => {
              const next = focusState.index + 1;
              if (next >= pagedList.rendered && pagedList.rendered < pagedList.items.length) pagedList.render(LIST_PAGE_SIZE);
              return focusListByIndex(next) || focusListByIndex(focusState.index);
            },
            left: () => {
              Lampa.Controller.toggle("menu");
              return true;
            },
            right: () => {
              openFilterPanel();
              return true;
            }
          },
          [FocusZones.CONTINUE]: {
            up: () => {
              if (focusSearchControl()) return true;
              Lampa.Controller.toggle("head");
              return true;
            },
            down: () => focusListByIndex(0) || true,
            left: () => {
              Lampa.Controller.toggle("menu");
              return true;
            },
            right: () => {
              openFilterPanel();
              return true;
            }
          },
          [FocusZones.FILTER]: {
            up: () => {
              Lampa.Controller.toggle("head");
              return true;
            },
            down: () => hasContinueItem() ? focusContinueItem() : focusLastKnownListItem() || focusListByIndex(0) || true,
            left: () => {
              if (focusState.index > 0) return focusFilterItem(focusState.index - 1);
              return focusLastKnownListItem() || focusContinueItem() || true;
            },
            right: () => focusFilterItem(focusState.index + 1) || focusFilterItem(focusState.index)
          },
          [FocusZones.EMPTY]: {
            up: () => {
              if (focusSearchControl()) return true;
              Lampa.Controller.toggle("head");
              return true;
            },
            down: () => true,
            left: () => {
              Lampa.Controller.toggle("menu");
              return true;
            },
            right: () => {
              openFilterPanel();
              return true;
            }
          },
          [FocusZones.SEASON]: {
            up: () => true,
            down: () => focusFileItem(0) || true,
            left: () => {
              if (focusState.index > 0) return focusZone(FocusZones.SEASON, focusState.index - 1);
              Lampa.Controller.toggle("menu");
              return true;
            },
            right: () => focusZone(FocusZones.SEASON, focusState.index + 1) || true
          },
          [FocusZones.FILE]: {
            up: () => {
              if (focusState.index > 0) return focusFileItem(focusState.index - 1);
              const tabs = getFocusCollection(FocusZones.SEASON);
              if (tabs.length) {
                const active = tabs.filter(".active");
                return focusElement(active.length ? active.first() : tabs.first());
              }
              return focusFileItem(0);
            },
            down: () => focusFileItem(focusState.index + 1) || focusFileItem(focusState.index),
            left: () => {
              Lampa.Controller.toggle("menu");
              return true;
            },
            right: () => focusFileDownload(focusState.index) || true
          },
          [FocusZones.FILE_DOWNLOAD]: {
            up: () => focusFileDownload(focusState.index - 1) || focusFileDownload(focusState.index),
            down: () => focusFileDownload(focusState.index + 1) || focusFileDownload(focusState.index),
            left: () => focusFileItem(focusState.index) || true,
            right: () => true
          }
        };
        const ensureFocusExists = () => {
          if (!isTorrentsView()) return;
          if (focusState.zone && lastFocused) return;
          if (focusLastKnownListItem()) return;
          if (focusListByIndex(0)) return;
          if (hasContinueItem() && focusContinueItem()) return;
          if (focusSearchControl()) return;
          if (!focusListByIndex(0)) focusEmptyMessage();
        };
        const handleDirectionalNavigation = (direction) => {
          var _focusRoutes$zone2;
          if (state.view === "episodes") {
            var _focusRoutes$zone;
            const zone2 = focusState.zone || FocusZones.FILE;
            const handler2 = (_focusRoutes$zone = focusRoutes[zone2]) === null || _focusRoutes$zone === void 0 ? void 0 : _focusRoutes$zone[direction];
            if (typeof handler2 === "function" && handler2()) return;
            if (Navigator.canmove(direction)) Navigator.move(direction);
            return;
          }
          if (!isTorrentsView()) {
            if (Navigator.canmove(direction)) Navigator.move(direction);
            return;
          }
          ensureFocusExists();
          const zone = focusState.zone || FocusZones.LIST;
          const handler = (_focusRoutes$zone2 = focusRoutes[zone]) === null || _focusRoutes$zone2 === void 0 ? void 0 : _focusRoutes$zone2[direction];
          if (typeof handler === "function") {
            const handled = handler();
            if (handled) return;
          }
          if (Navigator.canmove(direction)) Navigator.move(direction);
        };
        const movieStorageKey = () => object.movie.imdb_id || object.movie.id || "unknown";
        const lastTorrentStorageKey = () => "torbox_last_torrent_data_".concat(movieStorageKey());
        const compactTorrentSnapshot = (src) => {
          if (!src || !src.hash || !src.magnet) return null;
          return {
            hash: src.hash,
            magnet: src.magnet,
            title: src.raw_title || src.title || "",
            size: Number(src.size) || 0,
            last_known_seeders: Number(src.last_known_seeders) || 0,
            last_known_peers: Number(src.last_known_peers) || 0,
            cached: !!src.cached,
            quality: src.quality || null,
            icon: src.icon || ""
          };
        };
        const saveLastTorrentSnapshot = (snapshot) => {
          const key = lastTorrentStorageKey();
          if (snapshot) {
            const normalized = Object.assign({}, snapshot, {
              title: (snapshot.title || "").slice(0, 320)
            });
            let payload = JSON.stringify(normalized);
            if (payload.length > CONST.MAX_SNAPSHOT_BYTES) {
              const minimal = {
                hash: normalized.hash,
                magnet: normalized.magnet,
                title: normalized.title,
                cached: !!normalized.cached,
                quality: normalized.quality || null,
                size: normalized.size || 0,
                last_known_seeders: normalized.last_known_seeders || 0,
                last_known_peers: normalized.last_known_peers || 0,
                icon: normalized.icon || ""
              };
              payload = JSON.stringify(minimal);
            }
            Store.set(key, payload);
          } else {
            Store.set(key, "");
          }
        };
        const loadLastTorrentSnapshot = () => {
          const raw = Store.get(lastTorrentStorageKey(), "");
          if (!raw) return null;
          try {
            const parsed = JSON.parse(raw);
            const snapshot = compactTorrentSnapshot(parsed);
            if (snapshot) {
              saveLastTorrentSnapshot(snapshot);
              return snapshot;
            }
          } catch (err) {
            LOG("Continue panel parse error", err);
          }
          Store.set(lastTorrentStorageKey(), "");
          return null;
        };
        const buildContinueInfo = (snapshot) => {
          var _snapshot$last_known_;
          if (!snapshot) return translate("torbox_last_torrent_fallback");
          const icon = snapshot.icon || (snapshot.cached ? "\u26A1" : "\u2601\uFE0F");
          const titleParts = [];
          if (snapshot.quality) titleParts.push("[".concat(Utils.escapeHtml(String(snapshot.quality)), "]"));
          titleParts.push(Utils.escapeHtml(snapshot.title || translate("torbox_no_title")));
          const sizeText = snapshot.size ? Utils.formatBytes(snapshot.size) : translate("torbox_not_available");
          const seeders = (_snapshot$last_known_ = snapshot.last_known_seeders) !== null && _snapshot$last_known_ !== void 0 ? _snapshot$last_known_ : 0;
          return translateWithParams("torbox_continue_info_template", {
            icon,
            title: titleParts.join(" "),
            size: sizeText,
            seeders
          });
        };
        const cancelActiveTorrentFlow = () => {
          if (activeTorrentController) {
            try {
              if (!activeTorrentController.signal.aborted) activeTorrentController.abort();
            } catch (err) {
              LOG("Abort active torrent flow error", err);
            }
          }
          activeTorrentController = null;
          const reverted = revertPendingPlayback();
          if (reverted && state.view === "torrents") build();
        };
        this.buildTechBar = (tech, raw) => {
          const tag = (txt, cls) => '<div class="torbox-item__tech-item torbox-item__tech-item--'.concat(cls, '">').concat(txt, "</div>");
          let html = "";
          if (tech.video_resolution) html += tag(Utils.escapeHtml(tech.video_resolution), "res");
          if (tech.video_codec) html += tag(Utils.escapeHtml(String(tech.video_codec).toUpperCase()), "codec");
          if (tech.has_hdr) html += tag("HDR", "hdr");
          if (tech.has_dv) html += tag("Dolby Vision", "dv");
          const audioStreams = Array.isArray(raw === null || raw === void 0 ? void 0 : raw.ffprobe) ? raw.ffprobe.filter((s) => (s === null || s === void 0 ? void 0 : s.codec_type) === "audio") : [];
          let voiceIdx = 0;
          audioStreams.forEach((s) => {
            var _s$tags, _s$tags2, _raw$info2;
            let lang = (s === null || s === void 0 || (_s$tags = s.tags) === null || _s$tags === void 0 || (_s$tags = _s$tags.language) === null || _s$tags === void 0 ? void 0 : _s$tags.toUpperCase()) || (s === null || s === void 0 || (_s$tags2 = s.tags) === null || _s$tags2 === void 0 || (_s$tags2 = _s$tags2.LANGUAGE) === null || _s$tags2 === void 0 ? void 0 : _s$tags2.toUpperCase()) || Array.isArray(raw === null || raw === void 0 || (_raw$info2 = raw.info) === null || _raw$info2 === void 0 ? void 0 : _raw$info2.voices) && raw.info.voices[voiceIdx++] || null;
            const codec = s !== null && s !== void 0 && s.codec_name ? String(s.codec_name).toUpperCase() : "";
            const layout = (s === null || s === void 0 ? void 0 : s.channel_layout) || "";
            const text = [lang, codec, layout].filter(Boolean).join(" ");
            if (text) html += tag(Utils.escapeHtml(text), "audio");
          });
          return html ? '<div class="torbox-item__tech-bar">'.concat(html, "</div>") : "";
        };
        const toViewItem = (raw, hashHex, cachedSet) => {
          var _raw$info3, _raw$info4, _raw$info5, _raw$info6;
          const v = Array.isArray(raw === null || raw === void 0 ? void 0 : raw.ffprobe) ? raw.ffprobe.find((s) => s.codec_type === "video") : null;
          const a = Array.isArray(raw === null || raw === void 0 ? void 0 : raw.ffprobe) ? raw.ffprobe.filter((s) => s.codec_type === "audio") : [];
          const trackers = String((raw === null || raw === void 0 ? void 0 : raw.Tracker) || "").split(/,\s*/).map((item) => String(item || "").trim()).filter(Boolean);
          const primaryTracker = trackers[0] || translate("torbox_not_available");
          const tech = {
            video_codec: (v === null || v === void 0 ? void 0 : v.codec_name) || null,
            video_resolution: v ? "".concat(v.width, "x").concat(v.height) : null,
            audio_langs: [...new Set(a.map((s) => {
              var _s$tags3, _s$tags4;
              return (s === null || s === void 0 || (_s$tags3 = s.tags) === null || _s$tags3 === void 0 ? void 0 : _s$tags3.language) || (s === null || s === void 0 || (_s$tags4 = s.tags) === null || _s$tags4 === void 0 ? void 0 : _s$tags4.LANGUAGE);
            }).filter(Boolean))].map((x) => String(x).toUpperCase()),
            audio_codecs: [...new Set(a.map((s) => s === null || s === void 0 ? void 0 : s.codec_name).filter(Boolean))].map((x) => String(x).toUpperCase()),
            has_hdr: /(^|\W)hdr(\W|$)/i.test((raw === null || raw === void 0 ? void 0 : raw.Title) || "") || /hdr/i.test((raw === null || raw === void 0 || (_raw$info3 = raw.info) === null || _raw$info3 === void 0 ? void 0 : _raw$info3.videotype) || ""),
            has_dv: /(dv|dolby\s*vision)/i.test((raw === null || raw === void 0 ? void 0 : raw.Title) || "") || /(dovi|dolby\s*vision)/i.test((raw === null || raw === void 0 || (_raw$info4 = raw.info) === null || _raw$info4 === void 0 ? void 0 : _raw$info4.videotype) || "")
          };
          const isCached = cachedSet.has(hashHex.toLowerCase());
          const publishDate = raw !== null && raw !== void 0 && raw.PublishDate ? new Date(raw.PublishDate) : null;
          const viewItem = {
            title: Utils.escapeHtml((raw === null || raw === void 0 ? void 0 : raw.Title) || translate("torbox_no_title")),
            raw_title: (raw === null || raw === void 0 ? void 0 : raw.Title) || "",
            size: Number(raw === null || raw === void 0 ? void 0 : raw.Size) || 0,
            magnet: (raw === null || raw === void 0 ? void 0 : raw.MagnetUri) || "",
            hash: hashHex,
            last_known_seeders: Number(raw === null || raw === void 0 ? void 0 : raw.Seeders) || 0,
            last_known_peers: Number((raw === null || raw === void 0 ? void 0 : raw.Peers) || (raw === null || raw === void 0 ? void 0 : raw.Leechers)) || 0,
            trackers,
            icon: isCached ? "\u26A1" : "\u2601\uFE0F",
            cached: isCached,
            publish_date: (raw === null || raw === void 0 ? void 0 : raw.PublishDate) || "",
            publish_timestamp: publishDate && isFinite(publishDate) ? publishDate.getTime() : 0,
            age: Utils.formatAge(raw === null || raw === void 0 ? void 0 : raw.PublishDate),
            quality: Utils.getQualityLabel((raw === null || raw === void 0 ? void 0 : raw.Title) || "", raw),
            video_type: String((raw === null || raw === void 0 || (_raw$info5 = raw.info) === null || _raw$info5 === void 0 ? void 0 : _raw$info5.videotype) || "").toLowerCase() || "unknown",
            voices: Array.isArray(raw === null || raw === void 0 || (_raw$info6 = raw.info) === null || _raw$info6 === void 0 ? void 0 : _raw$info6.voices) ? raw.info.voices : [],
            video_codec: tech.video_codec,
            audio_langs: tech.audio_langs,
            audio_codecs: tech.audio_codecs,
            info_formated: "[".concat(Utils.getQualityLabel((raw === null || raw === void 0 ? void 0 : raw.Title) || "", raw), "] ").concat(Utils.formatBytes(raw === null || raw === void 0 ? void 0 : raw.Size), " ") + '| \u{1F7E2}<span style="color:var(--color-good);">'.concat(Number(raw === null || raw === void 0 ? void 0 : raw.Seeders) || 0, "</span>") + ' / \u{1F534}<span style="color:var(--color-bad);">'.concat(Number((raw === null || raw === void 0 ? void 0 : raw.Peers) || (raw === null || raw === void 0 ? void 0 : raw.Leechers)) || 0, "</span>"),
            meta_formated: "".concat(translate("torbox_info_trackers"), ": ").concat(Utils.escapeHtml(primaryTracker), " ") + "| ".concat(translate("torbox_info_added"), ": ").concat(Utils.formatAge(raw === null || raw === void 0 ? void 0 : raw.PublishDate) || translate("torbox_not_available")),
            tech_bar_html: this.buildTechBar(tech, raw)
          };
          storeRawTorrent(hashHex, raw);
          return viewItem;
        };
        const drawEpisodes = (torrentData, preferredFile = null) => {
          focusState.zone = FocusZones.FILE;
          focusState.index = 0;
          scroll.clear();
          filter.render().hide();
          const mid = object.movie.imdb_id || object.movie.id || "unknown";
          const torrentKey = torrentData.hash || torrentData.id;
          let watchedSet;
          try {
            const rawWatched = JSON.parse(Store.get("torbox_watched_episodes_".concat(mid, "_").concat(torrentKey), "[]"));
            let sanitized = Array.isArray(rawWatched) ? rawWatched.map((id) => String(id)).filter(Boolean) : [];
            if (sanitized.length > CONST.MAX_WATCHED_EPISODES) {
              sanitized = sanitized.slice(-CONST.MAX_WATCHED_EPISODES);
              Store.set("torbox_watched_episodes_".concat(mid, "_").concat(torrentKey), JSON.stringify(sanitized));
            } else if (sanitized.length !== (Array.isArray(rawWatched) ? rawWatched.length : 0)) {
              Store.set("torbox_watched_episodes_".concat(mid, "_").concat(torrentKey), JSON.stringify(sanitized));
            }
            watchedSet = new Set(sanitized);
          } catch (_unused11) {
            watchedSet = /* @__PURE__ */ new Set();
            Store.set("torbox_watched_episodes_".concat(mid, "_").concat(torrentKey), "[]");
          }
          let preferredFocusId = preferredFile && preferredFile.id !== void 0 && preferredFile.id !== null ? String(preferredFile.id) : null;
          const storedLastPlayedId = Store.get("torbox_last_played_file_".concat(mid, "_").concat(torrentKey), null);
          const videoExtensions = getVideoExtensions();
          const videoRegex = new RegExp("\\.(".concat(videoExtensions.map((ext) => ext.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), ")$"), "i");
          const vids = (Array.isArray(torrentData.files) ? torrentData.files : []).filter((f) => videoRegex.test((f === null || f === void 0 ? void 0 : f.name) || "")).map((f, i) => Object.assign({
            __idx: i
          }, f)).sort(Utils.naturalEpisodeSort);
          if (!vids.length) {
            ErrorHandler.show("validation", {
              message: translate("torbox_error_no_video_files")
            });
            return;
          }
          let focusEl = null;
          let firstFileEl = null;
          const origTitleForTl = object.movie.original_title || object.movie.original_name || object.movie.title || "";
          vids.forEach((f) => {
            const p = Utils.parseSeasonEpisode(f.name);
            f.__s = p ? p.s : null;
            f.__e = p ? p.e : null;
          });
          const parsedCount = vids.filter((f) => f.__e != null).length;
          const pretty = parsedCount > 0 && parsedCount >= vids.length * 0.7;
          if (pretty) {
            vids.forEach((f) => {
              if (f.__e != null && f.__s == null) f.__s = 1;
            });
            vids.sort((a, b) => (a.__s || 0) - (b.__s || 0) || (a.__e == null ? 1e6 : a.__e) - (b.__e == null ? 1e6 : b.__e) || a.__idx - b.__idx);
          }
          const seasons = pretty ? Array.from(new Set(vids.filter((f) => f.__s != null).map((f) => f.__s))).sort((a, b) => a - b) : [];
          const useSeasons = false;
          const tlPercent = (f) => {
            if (!pretty || f.__e == null || !Lampa.Timeline || typeof Lampa.Timeline.view !== "function") return 0;
            try {
              const key = [f.__s, f.__s > 10 ? ":" : "", f.__e, origTitleForTl].join("");
              const v = Lampa.Timeline.view(Lampa.Utils.hash(key));
              return Number(v && v.percent) || 0;
            } catch (_unused12) {
              return 0;
            }
          };
          let autoplayFileId = null;
          if (state.autoplay_continue) {
            state.autoplay_continue = false;
            const anchorId = preferredFocusId || (storedLastPlayedId !== null ? String(storedLastPlayedId) : null);
            let ai = anchorId ? vids.findIndex((f) => String(f.id) === anchorId) : -1;
            if (ai < 0) ai = Math.max(0, vids.findIndex((f) => !watchedSet.has(String(f.id))));
            if (tlPercent(vids[ai]) >= 90 && vids[ai + 1]) ai += 1;
            autoplayFileId = String(vids[ai].id);
            preferredFocusId = autoplayFileId;
            if (useSeasons && vids[ai].__s != null) {
              state.episode_season = state.episode_season || {};
              state.episode_season[torrentKey] = vids[ai].__s;
            }
          }
          let shownVids = vids;
          let seasonFocusTab = null;
          if (useSeasons) {
            state.episode_season = state.episode_season || {};
            let selected = state.episode_season[torrentKey];
            if (!seasons.includes(selected)) {
              const anchorId = preferredFocusId || (storedLastPlayedId !== null ? String(storedLastPlayedId) : null);
              const anchor = anchorId ? vids.find((f) => String(f.id) === anchorId) : null;
              const firstUnwatched = vids.find((f) => f.__s != null && !watchedSet.has(String(f.id)));
              selected = anchor && anchor.__s || firstUnwatched && firstUnwatched.__s || seasons[0];
              state.episode_season[torrentKey] = selected;
            }
            shownVids = vids.filter((f) => f.__s === selected);
            const tabsRow = $('<div class="torbox-season-tabs"></div>');
            seasons.forEach((sn, ti) => {
              const tab = $('<div class="torbox-season-tab selector"></div>').text(translateWithParams("torbox_season_n", {
                value: sn
              })).toggleClass("active", sn === selected).data("torboxZone", FocusZones.SEASON).data("torboxIndex", ti).on("hover:focus", (e) => {
                updateFocusMetaFromElement($(e.currentTarget));
                scroll.update($(e.currentTarget), true);
              }).on("hover:enter", () => {
                if (state.episode_season[torrentKey] === sn) return focusFileItem(0);
                state.episode_season[torrentKey] = sn;
                state.episode_focus_season_tab = sn;
                drawEpisodes(torrentData);
              });
              if (state.episode_focus_season_tab === sn) seasonFocusTab = tab;
              tabsRow.append(tab);
            });
            state.episode_focus_season_tab = null;
            scroll.append(tabsRow);
          }
          let autoFocusId = null;
          if (!preferredFocusId) {
            const lastIdx = storedLastPlayedId !== null ? shownVids.findIndex((f) => String(f.id) === String(storedLastPlayedId)) : -1;
            if (lastIdx >= 0) {
              const last = shownVids[lastIdx];
              autoFocusId = tlPercent(last) >= 90 && shownVids[lastIdx + 1] ? String(shownVids[lastIdx + 1].id) : String(last.id);
            } else {
              const fu = shownVids.find((f) => !watchedSet.has(String(f.id)));
              if (fu) autoFocusId = String(fu.id);
            }
          }
          shownVids.forEach((file, idx) => {
            const clean = (file.name || "").split("/").pop();
            const epTitle = pretty && file.__e != null ? (useSeasons ? "" : file.__s ? "S".concat(file.__s, " \xB7 ") : "") + translateWithParams("torbox_episode_n", {
              value: file.__e
            }) : null;
            let item = Lampa.Template.get("torbox_episode_item", {
              title: Utils.escapeHtml(epTitle || clean || file.name || translate("torbox_no_title")),
              size: Utils.formatBytes(file.size || 0) + (epTitle ? " \xB7 ".concat(Utils.escapeHtml(clean)) : ""),
              file_id: Utils.escapeHtml(String(file.id)),
              download_label: Utils.escapeHtml(translate("torbox_file_download"))
            });
            if (!firstFileEl) firstFileEl = item;
            const fileIdStr = String(file.id);
            const isWatched = watchedSet.has(fileIdStr);
            const isLastPlayed = storedLastPlayedId !== null && fileIdStr === String(storedLastPlayedId);
            const shouldFocus = preferredFocusId ? fileIdStr === preferredFocusId : autoFocusId ? fileIdStr === autoFocusId : isLastPlayed;
            const pct = tlPercent(file);
            if (pct > 0) {
              item.append('<div class="torbox-item__progress"><div style="width:'.concat(Utils.clamp(Math.round(pct), 0, 100), '%"></div></div>'));
            }
            const downloadBtn = item.find(".torbox-file-download");
            if (isWatched) item.addClass("torbox-file-item--watched");
            if (isLastPlayed) {
              item.addClass("torbox-file-item--last-played");
            }
            if (shouldFocus) {
              focusEl = item;
            }
            item.data("torboxZone", FocusZones.FILE).data("torboxIndex", idx).on("hover:focus", (e) => {
              const target = $(e.currentTarget);
              updateFocusMetaFromElement(target);
              scroll.update(target, true);
            }).on("hover:enter", () => {
              rememberPreferredFile(torrentData, file);
              play(torrentData, file, {
                onStart: ({
                  changed
                }) => {
                  if (!watchedSet.has(fileIdStr) && changed) {
                    watchedSet.add(fileIdStr);
                    item.addClass("torbox-file-item--watched");
                  }
                },
                onSuccess: ({
                  changed
                }) => {
                  if (!watchedSet.has(fileIdStr) && changed) {
                    watchedSet.add(fileIdStr);
                    item.addClass("torbox-file-item--watched");
                  }
                  drawEpisodes(torrentData);
                  Lampa.Controller.toggle("content");
                },
                onFail: () => Lampa.Controller.toggle("content")
              });
            });
            downloadBtn.data("torboxZone", FocusZones.FILE_DOWNLOAD).data("torboxIndex", idx).attr("title", translate("torbox_file_download")).on("hover:focus", (e) => {
              const target = $(e.currentTarget);
              updateFocusMetaFromElement(target);
              scroll.update(item, true);
            }).on("hover:enter", (e) => {
              if (e && typeof e.stopPropagation === "function") e.stopPropagation();
              if (e && typeof e.preventDefault === "function") e.preventDefault();
              downloadFileLink(torrentData, file, downloadBtn);
            });
            scroll.append(item);
          });
          if (seasonFocusTab) focusElement(seasonFocusTab);
          else if (focusEl || firstFileEl) focusElement(focusEl || firstFileEl);
          Lampa.Controller.enable("content");
          if (autoplayFileId && focusEl && String(focusEl.attr("data-file-id")) === autoplayFileId) {
            const target = focusEl;
            setTimeout(() => target.trigger("hover:enter"), 0);
          }
          updateDebugOverlay(focusEl || firstFileEl || null);
        };
        const _getPlayerConfig = (url, file, movie) => {
          const cleanName = ((file === null || file === void 0 ? void 0 : file.name) || "").split("/").pop();
          const cfg = {
            url,
            title: cleanName || movie.title || "TorBox",
            poster: Lampa.Utils.cardImgBackgroundBlur(movie),
            id: movie.id,
            movie,
            // Lampa's player reads the card from `card` (header title, footer info).
            card: movie
          };
          const s = (cleanName || "").match(/[Ss](\d{1,2})/);
          const e = (cleanName || "").match(/[Ee](\d{1,3})/);
          if (s) cfg.season = parseInt(s[1], 10);
          if (e) cfg.episode = parseInt(e[1], 10);
          if (!s && e && movie.number_of_seasons) cfg.season = 1;
          const origTitle = movie.original_title || movie.original_name || movie.title || "";
          const tlKey = cfg.season != null && cfg.episode != null ? [cfg.season, cfg.season > 10 ? ":" : "", cfg.episode, origTitle].join("") : String(origTitle);
          if (Lampa.Timeline && typeof Lampa.Timeline.view === "function") {
            cfg.timeline = Lampa.Timeline.view(Lampa.Utils.hash(tlKey));
          }
          return cfg;
        };
        const _markWatched = (torrentHashOrId, fileId) => {
          const mid = object.movie.imdb_id || object.movie.id || "unknown";
          const key = "torbox_watched_episodes_".concat(mid, "_").concat(torrentHashOrId);
          let rawList;
          try {
            rawList = JSON.parse(Store.get(key, "[]"));
          } catch (_unused13) {
            rawList = [];
          }
          if (!Array.isArray(rawList)) rawList = [];
          const seen = /* @__PURE__ */ new Set();
          const normalized = [];
          rawList.forEach((entry) => {
            const id = String(entry);
            if (!id || seen.has(id)) return;
            seen.add(id);
            normalized.push(id);
          });
          let changed = normalized.length !== rawList.length;
          const fileKey = String(fileId);
          if (fileKey && !seen.has(fileKey)) {
            normalized.push(fileKey);
            seen.add(fileKey);
            changed = true;
          }
          if (normalized.length > CONST.MAX_WATCHED_EPISODES) {
            const cut = normalized.slice(-CONST.MAX_WATCHED_EPISODES);
            normalized.length = 0;
            normalized.push(...cut);
            changed = true;
          }
          Store.set(key, JSON.stringify(normalized));
          if (fileKey) Store.set("torbox_last_played_file_".concat(mid, "_").concat(torrentHashOrId), fileKey);
          return changed;
        };
        const preferredFileStorageKey = (torrentData) => {
          const mid = object.movie.imdb_id || object.movie.id || "unknown";
          const torrentKey = (torrentData === null || torrentData === void 0 ? void 0 : torrentData.hash) || (torrentData === null || torrentData === void 0 ? void 0 : torrentData.id) || "unknown";
          return "torbox_preferred_file_".concat(mid, "_").concat(torrentKey);
        };
        const rememberPreferredFile = (torrentData, file) => {
          const fid = file === null || file === void 0 ? void 0 : file.id;
          if (fid === void 0 || fid === null) return;
          Store.set(preferredFileStorageKey(torrentData), String(fid));
        };
        const getRememberedFile = (torrentData, files2) => {
          const remembered = Store.get(preferredFileStorageKey(torrentData), "");
          if (!remembered) return null;
          const list = Array.isArray(files2) ? files2 : [];
          return list.find((file) => String(file === null || file === void 0 ? void 0 : file.id) === String(remembered)) || null;
        };
        const isSeriesContent = () => {
          const movie = (object === null || object === void 0 ? void 0 : object.movie) || {};
          return !!(movie.name || movie.original_name || movie.first_air_date || movie.season_number || movie.number_of_seasons || Array.isArray(movie.seasons) && movie.seasons.length || movie.media_type === "tv");
        };
        const pickBestVideoFile = (files2) => {
          const list = Array.isArray(files2) ? files2 : [];
          if (!list.length) return null;
          const sampleRe = /(sample|trailer|тизер|teaser|featurette|extras?|behind[ ._-]?the[ ._-]?scenes)/i;
          const candidates = list.filter((file) => !sampleRe.test(String((file === null || file === void 0 ? void 0 : file.name) || "").split("/").pop() || ""));
          const base = candidates.length ? candidates : list;
          return base.slice().sort((a, b) => {
            const sizeA = Number(a === null || a === void 0 ? void 0 : a.size) || 0;
            const sizeB = Number(b === null || b === void 0 ? void 0 : b.size) || 0;
            if (sizeA !== sizeB) return sizeB - sizeA;
            const nameA = String((a === null || a === void 0 ? void 0 : a.name) || "");
            const nameB = String((b === null || b === void 0 ? void 0 : b.name) || "");
            return nameA.localeCompare(nameB);
          })[0] || null;
        };
        const normalizeSafeDownloadLink = (link) => {
          if (!link || typeof link !== "string") return null;
          try {
            const url = new URL(link.trim());
            if (url.protocol !== "http:" && url.protocol !== "https:") return null;
            return url.href;
          } catch (_) {
            return null;
          }
        };
        const resolveFileDownloadLink = async (torrentData, file) => {
          const dl = await Api.requestDl(torrentData.id, file.id);
          const link = normalizeSafeDownloadLink((dl === null || dl === void 0 ? void 0 : dl.url) || (dl === null || dl === void 0 ? void 0 : dl.data));
          if (!link) throw {
            type: "api",
            message: translate("torbox_error_file_link")
          };
          return link;
        };
        const getFileDownloadFilename = (file) => {
          var _file$id;
          const clean = String((file === null || file === void 0 ? void 0 : file.name) || "").split("/").pop().trim();
          const fallback = "torbox-file-".concat((_file$id = file === null || file === void 0 ? void 0 : file.id) !== null && _file$id !== void 0 ? _file$id : "download", ".mp4");
          const filename = (clean || fallback).replace(/[\x00-\x1F\\/:*?"<>|]+/g, "_").replace(/\s+/g, " ").trim().slice(0, 180);
          return filename || fallback;
        };
        const getAndroidBridgeVersion = () => {
          try {
            if (typeof AndroidJS === "undefined" || typeof AndroidJS.appVersion !== "function") return 0;
            const parts = String(AndroidJS.appVersion() || "").split("-");
            const raw = parts.pop();
            const version = parseInt(raw, 10);
            return Number.isFinite(version) ? version : 0;
          } catch (_) {
            return 0;
          }
        };
        const canUseAndroidBrowser = () => {
          try {
            var _Lampa, _Lampa2;
            if (typeof AndroidJS !== "undefined" && typeof AndroidJS.openBrowser === "function") return true;
            return !!(typeof Lampa !== "undefined" && (_Lampa = Lampa) !== null && _Lampa !== void 0 && (_Lampa = _Lampa.Platform) !== null && _Lampa !== void 0 && _Lampa.is && Lampa.Platform.is("android") && (_Lampa2 = Lampa) !== null && _Lampa2 !== void 0 && (_Lampa2 = _Lampa2.Android) !== null && _Lampa2 !== void 0 && _Lampa2.openBrowser && getAndroidBridgeVersion() >= 484);
          } catch (_) {
            return false;
          }
        };
        const tryAndroidDownloadOpen = (link) => {
          try {
            if (typeof AndroidJS !== "undefined" && typeof AndroidJS.openBrowser === "function") {
              AndroidJS.openBrowser(link);
              return true;
            }
          } catch (e) {
            LOG("AndroidJS download open failed", (e === null || e === void 0 ? void 0 : e.message) || e);
          }
          try {
            if (canUseAndroidBrowser()) {
              Lampa.Android.openBrowser(link);
              return true;
            }
          } catch (e) {
            LOG("Android download open failed", (e === null || e === void 0 ? void 0 : e.message) || e);
          }
          return false;
        };
        const closePreparedDownloadOpen = (opener) => {
          try {
            if (opener && !opener.closed && typeof opener.close === "function") opener.close();
          } catch (_) {
          }
        };
        const prepareFileDownloadOpen = (file) => {
          if (canUseAndroidBrowser()) return null;
          try {
            if (typeof window.open !== "function") return null;
            const opener = window.open("", "_blank");
            if (!opener) return null;
            try {
              opener.opener = null;
              if (opener.document) {
                opener.document.title = getFileDownloadFilename(file);
                if (opener.document.body) {
                  opener.document.body.style.font = "16px sans-serif";
                  opener.document.body.style.padding = "24px";
                  opener.document.body.textContent = translate("torbox_download_preparing");
                }
              }
            } catch (_) {
            }
            return opener;
          } catch (e) {
            LOG("Download target prepare failed", (e === null || e === void 0 ? void 0 : e.message) || e);
            return null;
          }
        };
        const clickAnchorDownload = (link, file) => {
          try {
            if (typeof document === "undefined" || !document.body) return false;
            const filename = getFileDownloadFilename(file);
            const anchor = document.createElement("a");
            anchor.href = link;
            anchor.setAttribute("download", filename);
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("rel", "noopener");
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            anchor.click();
            setTimeout(() => {
              try {
                anchor.remove();
              } catch (_) {
              }
            }, 0);
            return true;
          } catch (e) {
            LOG("Anchor download failed", (e === null || e === void 0 ? void 0 : e.message) || e);
            return false;
          }
        };
        const tryOpenDownloadLink = (link) => {
          try {
            if (typeof window.open === "function") {
              const opened = window.open(link, "_blank", "noopener");
              if (opened) return true;
            }
          } catch (e) {
            LOG("Download link open failed", (e === null || e === void 0 ? void 0 : e.message) || e);
          }
          return false;
        };
        const startFileDownload = (link, file, opener) => {
          if (tryAndroidDownloadOpen(link)) return "system";
          try {
            if (opener && !opener.closed) {
              opener.location.href = link;
              return "system";
            }
          } catch (e) {
            LOG("Prepared download open failed", (e === null || e === void 0 ? void 0 : e.message) || e);
            closePreparedDownloadOpen(opener);
          }
          if (clickAnchorDownload(link, file) || tryOpenDownloadLink(link)) return "attempted";
          return "copy_only";
        };
        const downloadFileLink = async (torrentData, file, button) => {
          const btn = button && button.length ? button : null;
          if (btn && btn.data("torboxDownloading")) return;
          let opener = null;
          try {
            if (btn) {
              btn.data("torboxDownloading", true);
              btn.addClass("torbox-file-download--loading");
            }
            opener = prepareFileDownloadOpen(file);
            const link = await resolveFileDownloadLink(torrentData, file);
            const downloadState = startFileDownload(link, file, opener);
            opener = null;
            Lampa.Utils.copyTextToClipboard(link, () => {
              const message = downloadState === "system" ? translate("torbox_download_started") : downloadState === "attempted" ? translate("torbox_download_attempted") : translate("torbox_download_link_copied");
              Lampa.Noty.show(message);
            }, () => {
              const message = downloadState === "system" ? translate("torbox_download_started_no_copy") : downloadState === "attempted" ? translate("torbox_download_attempted_no_copy") : translate("torbox_download_link_copy_failed");
              Lampa.Noty.show(message);
            });
          } catch (e) {
            closePreparedDownloadOpen(opener);
            ErrorHandler.show((e === null || e === void 0 ? void 0 : e.type) || "error", e);
          } finally {
            if (btn) {
              btn.data("torboxDownloading", false);
              btn.removeClass("torbox-file-download--loading");
            }
            Lampa.Controller.toggle("content");
          }
        };
        const play = async (torrentData, file, callbacks = {}) => {
          const {
            onSuccess,
            onFail,
            onFinally,
            onStart
          } = callbacks || {};
          let playbackStarted = false;
          let finished = false;
          try {
            var _object$movie;
            preparePlaybackState(torrentData);
            if ((_object$movie = object.movie) !== null && _object$movie !== void 0 && _object$movie.id) Lampa.Favorite.add("history", object.movie);
            const link = await resolveFileDownloadLink(torrentData, file);
            const playbackConfig = _getPlayerConfig(link, file, object.movie);
            const startResult = Lampa.Player.play(playbackConfig);
            playbackStarted = startResult !== false;
            if (!playbackStarted) {
              throw {
                type: "cancel",
                message: translate("torbox_error_player_cancelled")
              };
            }
            if (pendingPlayback) pendingPlayback.started = true;
            let changedAtStart = false;
            try {
              const se = Utils.parseSeasonEpisode(file.name);
              Store.set("torbox_continue_label_".concat(movieStorageKey()), se && se.e != null ? "S".concat(se.s || 1, " E").concat(se.e) : "");
            } catch (_unused14) {
            }
            try {
              changedAtStart = _markWatched(torrentData.hash || torrentData.id, file.id);
            } catch (e) {
              LOG("Mark watched onStart error", e);
            }
            if (typeof onStart === "function") onStart({
              torrentData,
              file,
              changed: changedAtStart
            });
            Lampa.Player.callback(() => {
              if (finished) return;
              finished = true;
              const changed = _markWatched(torrentData.hash || torrentData.id, file.id);
              finalizePendingPlayback();
              if (typeof onSuccess === "function") onSuccess({
                torrentData,
                file,
                changed
              });
            });
          } catch (e) {
            if (!playbackStarted) {
              const reverted = revertPendingPlayback();
              if (reverted && state.view === "torrents") build();
            }
            if (typeof onFail === "function") onFail(e);
            if ((e === null || e === void 0 ? void 0 : e.type) !== "cancel") ErrorHandler.show(e.type || "error", e);
          } finally {
            if (typeof onFinally === "function") onFinally({
              started: playbackStarted,
              file,
              torrentData
            });
          }
        };
        const updateContinueWatchingPanel = (snapshotParam) => {
          if (state.view !== "torrents") return;
          const snapshot = snapshotParam !== null && snapshotParam !== void 0 ? snapshotParam : loadLastTorrentSnapshot();
          let panel = scroll.body().find(".torbox-watched-item");
          if (snapshot) {
            const info = buildContinueInfo(snapshot);
            if (panel.length) {
              panel.find(".torbox-watched-item__info").text(info);
              panel.data("torboxSnapshot", snapshot);
              panel.data("torboxZone", FocusZones.CONTINUE);
              panel.data("torboxIndex", 0);
              try {
                if (Lampa.Controller && typeof Lampa.Controller.collectionAppend === "function") {
                  Lampa.Controller.collectionAppend(panel);
                }
              } catch (_unused15) {
              }
            } else {
              const historyItem = Lampa.Template.get("torbox_watched_item", {
                title: translate("torbox_continue_watching"),
                info
              });
              historyItem.data("torboxSnapshot", snapshot).data("torboxZone", FocusZones.CONTINUE).data("torboxIndex", 0);
              historyItem.on("hover:focus", (e) => {
                const target = $(e.currentTarget);
                updateFocusMetaFromElement(target);
                scroll.update(target, true);
              }).on("hover:enter", (e) => {
                const snap = $(e.currentTarget).data("torboxSnapshot");
                if (snap) onTorrentClick(snap);
              });
              scroll.body().prepend(historyItem);
              try {
                if (Lampa.Controller && typeof Lampa.Controller.collectionAppend === "function") {
                  Lampa.Controller.collectionAppend(historyItem);
                }
              } catch (_unused16) {
              }
            }
          } else if (panel.length) {
            const panelEl = panel[0];
            panel.remove();
            try {
              if (window.Navigator && typeof Navigator.remove === "function" && panelEl) {
                Navigator.remove(panelEl);
              }
            } catch (_unused17) {
            }
            if (focusState.zone === FocusZones.CONTINUE) {
              focusState.zone = null;
              focusState.index = 0;
              lastFocused = null;
            }
          }
        };
        const selectFile = (torrentData) => {
          const videoExtensions = Store.get("torbox_video_extensions", "mkv,mp4,avi,ts,m4v,webm").split(",").map((ext) => ext.trim().toLowerCase()).filter(Boolean);
          const videoRegex = new RegExp("\\.(".concat(videoExtensions.map((ext) => ext.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), ")$"), "i");
          const vids = (Array.isArray(torrentData.files) ? torrentData.files : []).filter((f) => videoRegex.test((f === null || f === void 0 ? void 0 : f.name) || ""));
          if (!vids.length) {
            ErrorHandler.show("validation", {
              message: translate("torbox_error_no_video_files")
            });
            return;
          }
          const openFileList = (preferredFile = null) => {
            state.view = "episodes";
            state.current_torrent_data = torrentData;
            drawEpisodes(torrentData, preferredFile);
          };
          const remembered = getRememberedFile(torrentData, vids);
          if (remembered) {
            openFileList(remembered);
            return;
          }
          if (!isSeriesContent() && getAutoPickMovieFile()) {
            const best = pickBestVideoFile(vids);
            if (best) {
              openFileList(best);
              return;
            }
          }
          openFileList();
        };
        const beginPendingPlayback = (hash, snapshot) => {
          const previousSnapshot = loadLastTorrentSnapshot();
          pendingPlayback = {
            hash,
            snapshot: snapshot || null,
            previousSnapshot,
            previousHash: (previousSnapshot === null || previousSnapshot === void 0 ? void 0 : previousSnapshot.hash) || null,
            started: false
          };
        };
        const revertPendingPlayback = () => {
          if (!pendingPlayback || pendingPlayback.started) return false;
          saveLastTorrentSnapshot(pendingPlayback.previousSnapshot || null);
          updateContinueWatchingPanel(pendingPlayback.previousSnapshot || null);
          state.last_hash = pendingPlayback.previousHash || null;
          pendingPlayback = null;
          return true;
        };
        const finalizePendingPlayback = () => {
          pendingPlayback = null;
        };
        const preparePlaybackState = (source) => {
          if (!source || !source.hash) return null;
          if (pendingPlayback && pendingPlayback.hash === source.hash) return pendingPlayback.snapshot || null;
          const original = state.all_torrents.find((t) => t.hash === source.hash) || source;
          const snapshot = compactTorrentSnapshot(original);
          if (!snapshot) return null;
          beginPendingPlayback(source.hash, snapshot);
          saveLastTorrentSnapshot(snapshot);
          updateContinueWatchingPanel(snapshot);
          if (original !== null && original !== void 0 && original.markAsLastPlayed) setTimeout(() => original.markAsLastPlayed(), 0);
          return snapshot;
        };
        const track = (id, signal) => new Promise((resolve, reject) => {
          let active = true;
          let retries = 0;
          let pollTimer = null;
          const maxRetries = getTrackRetries();
          const intervalMs = getTrackIntervalMs();
          const scheduleNext = () => {
            pollTimer = setTimeout(loop, intervalMs);
          };
          const cancel = () => {
            if (!active) return;
            active = false;
            if (pollTimer) clearTimeout(pollTimer);
            signal.removeEventListener("abort", cancel);
            Lampa.Loading.stop();
            reject({
              name: "AbortError",
              message: translate("torbox_error_aborted")
            });
          };
          signal.addEventListener("abort", cancel);
          const loop = async () => {
            if (!active) return;
            if (retries++ > maxRetries) {
              active = false;
              signal.removeEventListener("abort", cancel);
              return reject({
                type: "api",
                message: translate("torbox_error_torrent_timeout")
              });
            }
            try {
              var _await$Api$myList;
              const arr = ((_await$Api$myList = await Api.myList(id, signal)) === null || _await$Api$myList === void 0 ? void 0 : _await$Api$myList.data) || [];
              const d = arr[0];
              if (!d) {
                scheduleNext();
                return;
              }
              const phase = Utils.downloadPhase(d);
              if (phase === "ready") {
                active = false;
                signal.removeEventListener("abort", cancel);
                resolve(d);
                return;
              }
              const loadingText = $(".loading-layer .loading-layer__text");
              if (phase === "finalizing") {
                loadingText.text(translate("torbox_loading_finalizing"));
              } else {
                const progress = Utils.normalizeProgress(d.progress);
                const speedTxt = Utils.formatBytes(d.download_speed, true);
                const etaTxt = Utils.formatTime(d.eta);
                const seeds = Number(d.seeds) || 0;
                const peers = Number(d.peers) || 0;
                loadingText.text(translateWithParams("torbox_loading_progress", {
                  progress: progress.toFixed(2),
                  speed: speedTxt,
                  seeds,
                  peers,
                  eta: etaTxt
                }));
              }
              scheduleNext();
            } catch (e) {
              active = false;
              signal.removeEventListener("abort", cancel);
              reject(e);
            }
          };
          loop();
        });
        const onTorrentClick = (item) => {
          if (!(item !== null && item !== void 0 && item.magnet)) {
            return ErrorHandler.show("validation", {
              message: translate("torbox_error_no_magnet")
            });
          }
          if (!(item !== null && item !== void 0 && item.hash) || !Utils.isHex40(item.hash)) {
            return ErrorHandler.show("validation", {
              message: translate("torbox_error_bad_hash")
            });
          }
          try {
            preparePlaybackState(item);
          } catch (e) {
            LOG("History save error", e);
          }
          const storageKey = "torbox_id_for_hash_".concat(item.hash);
          const savedId = Store.get(storageKey, "");
          cancelActiveTorrentFlow();
          const controller = new AbortController();
          const signal = controller.signal;
          activeTorrentController = controller;
          Lampa.Loading.start(() => controller.abort(), translate("torbox_loading_connect"));
          const finalizeTracker = () => {
            if (activeTorrentController === controller) activeTorrentController = null;
          };
          const processAndOpen = (data, hash) => {
            data.hash = hash;
            Lampa.Loading.stop();
            finalizeTracker();
            selectFile(data);
          };
          const addThenTrack = (magnet, hash) => {
            $(".loading-layer .loading-layer__text").text(translate("torbox_loading_add"));
            Api.addMagnet(magnet, signal).then((res) => {
              var _res$data, _res$data2;
              const newId = (res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.torrent_id) || (res === null || res === void 0 || (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.id);
              if (!newId) throw {
                type: "api",
                message: translate("torbox_error_no_torrent_id")
              };
              Store.set(storageKey, String(newId));
              LOG("New TorBox ID saved", newId, "for", hash);
              $(".loading-layer .loading-layer__text").text(translate("torbox_loading_wait"));
              return track(newId, signal);
            }).then((data) => processAndOpen(data, hash)).catch((err) => {
              Lampa.Loading.stop();
              finalizeTracker();
              if ((err === null || err === void 0 ? void 0 : err.name) !== "AbortError") ErrorHandler.show(err.type || "error", err);
            });
          };
          if (savedId) {
            LOG("Using saved TorBox ID:", savedId);
            $(".loading-layer .loading-layer__text").text(translate("torbox_loading_wait"));
            track(savedId, signal).then((data) => processAndOpen(data, item.hash)).catch((err) => {
              const stale = (err === null || err === void 0 ? void 0 : err.type) === "api" || /not\s*found/i.test((err === null || err === void 0 ? void 0 : err.message) || "");
              if ((err === null || err === void 0 ? void 0 : err.name) !== "AbortError" && stale) {
                LOG("Stale TorBox ID, re-adding magnet...");
                Store.set(storageKey, "");
                addThenTrack(item.magnet, item.hash);
              } else {
                Lampa.Loading.stop();
                finalizeTracker();
                if ((err === null || err === void 0 ? void 0 : err.name) !== "AbortError") ErrorHandler.show(err.type || "error", err);
              }
            });
          } else {
            LOG("No saved TorBox ID. Adding...");
            addThenTrack(item.magnet, item.hash);
          }
        };
        const build = () => {
          buildFilter();
          if (filter && typeof filter.render === "function") filter.render().show();
          if (cachedToggleBtn) updateCachedToggleVisual();
          const filtered = applyFiltersSort();
          if (Config.debug) {
            const snapshotRaw = Store.get(lastTorrentStorageKey(), "") || "";
            LOG("TorBox render stats", {
              total: state.all_torrents.length,
              filtered: filtered.length,
              cachedOnly: state.show_only_cached,
              snapshotBytes: snapshotRaw.length,
              rawCache: rawTorrentByHash.size
            });
          }
          draw(filtered);
          updateDebugOverlay(lastFocused ? $(lastFocused) : null);
        };
        const Modules = Object.freeze({
          utils: {
            sanitizeExtensions,
            setVideoExtensions,
            getVideoExtensions,
            generateSearchCombinations
          },
          state: {
            setTrackRetries,
            getTrackRetries,
            setTrackIntervalMs,
            getTrackIntervalMs
          },
          cache: {
            storeRawTorrent,
            getRawTorrentByHash
          },
          ui: {
            focusFirstListItem,
            formatRefineTags,
            updateContinueWatchingPanel
          },
          diagnostics: {
            buildReport: buildDiagnosticsReport
          }
        });
        this.modules = Modules;
        const applyFiltersSort = () => {
          const prefs = readPreferenceState();
          const excludedTrackersSet = new Set((prefs.excludedTrackers || []).map((item) => String(item || "").toLowerCase()));
          const qualityRank = new Map((prefs.qualityOrder || []).map((quality, idx) => [quality, idx]));
          const audioRank = new Map((prefs.audioLangs || []).map((lang, idx) => [lang, idx]));
          const codecRank = new Map((prefs.videoCodecs || []).map((codec, idx) => [codec, idx]));
          const preferenceScore = (torrent) => {
            const quality = String((torrent === null || torrent === void 0 ? void 0 : torrent.quality) || "").toUpperCase();
            const qualityScore = qualityRank.has(quality) ? qualityRank.get(quality) : qualityRank.size + 1;
            const langs = Array.isArray(torrent === null || torrent === void 0 ? void 0 : torrent.audio_langs) ? torrent.audio_langs.map((lang) => String(lang || "").toUpperCase()) : [];
            const audioScore = langs.length ? langs.reduce((best, lang) => Math.min(best, audioRank.has(lang) ? audioRank.get(lang) : audioRank.size + 1), audioRank.size + 1) : audioRank.size + 1;
            const codec = String((torrent === null || torrent === void 0 ? void 0 : torrent.video_codec) || "").toUpperCase();
            const codecScore = codecRank.has(codec) ? codecRank.get(codec) : codecRank.size + 1;
            return qualityScore * 100 + audioScore * 10 + codecScore;
          };
          const rules = [(t) => !state.show_only_cached || !!t.cached, (t) => !isTrackerExcluded(t.trackers, excludedTrackersSet), (t) => state.filters.quality === "all" || t.quality === state.filters.quality, (t) => state.filters.video_type === "all" || t.video_type === state.filters.video_type, (t) => state.filters.translation === "all" || Array.isArray(t.voices) && t.voices.includes(state.filters.translation), (t) => state.filters.lang === "all" || Array.isArray(t.audio_langs) && t.audio_langs.includes(state.filters.lang), (t) => state.filters.video_codec === "all" || t.video_codec && t.video_codec.toUpperCase() === state.filters.video_codec.toUpperCase(), (t) => state.filters.audio_codec === "all" || Array.isArray(t.audio_codecs) && t.audio_codecs.includes(state.filters.audio_codec.toUpperCase()), (t) => state.filters.tracker === "all" || Array.isArray(t.trackers) && t.trackers.includes(state.filters.tracker)];
          let list = state.all_torrents.filter((t) => rules.every((fn) => fn(t)));
          const sort = sortVariants.find((s) => s.key === state.sort) || sortVariants[0];
          list = list.map((x, i) => ({
            x,
            i
          })).sort((A, B) => {
            var _A$x$sort$field, _B$x$sort$field;
            const a = (_A$x$sort$field = A.x[sort.field]) !== null && _A$x$sort$field !== void 0 ? _A$x$sort$field : 0;
            const b = (_B$x$sort$field = B.x[sort.field]) !== null && _B$x$sort$field !== void 0 ? _B$x$sort$field : 0;
            if (a < b) return -1;
            if (a > b) return 1;
            const prefA = preferenceScore(A.x);
            const prefB = preferenceScore(B.x);
            if (prefA !== prefB) return prefA - prefB;
            return A.i - B.i;
          }).map((q) => q.x);
          if (sort.reverse) list.reverse();
          if (list.length > CONST.MAX_DRAW_ITEMS) list = list.slice(0, CONST.MAX_DRAW_ITEMS);
          return list;
        };
        const LIST_PAGE_SIZE = 15;
        const pagedList = {
          items: [],
          rendered: 0,
          render: () => 0
        };
        const draw = (items) => {
          lastFocused = null;
          focusState.zone = null;
          focusState.index = 0;
          scroll.clear();
          let viewDataForMovie = null;
          try {
            var _object$movie2;
            const viewRaw = Lampa.Storage.get("view", "{}");
            const viewObj = typeof viewRaw === "string" ? JSON.parse(viewRaw) : viewRaw;
            viewDataForMovie = viewObj === null || viewObj === void 0 ? void 0 : viewObj[(_object$movie2 = object.movie) === null || _object$movie2 === void 0 ? void 0 : _object$movie2.id];
          } catch (_unused18) {
            viewDataForMovie = null;
          }
          if (!Array.isArray(items) || !items.length) {
            return empty(translate("torbox_empty_filters"));
          }
          const lastSnapshot = loadLastTorrentSnapshot();
          let lastHash = (lastSnapshot === null || lastSnapshot === void 0 ? void 0 : lastSnapshot.hash) || null;
          const renderTorrentItem = (data, idx) => {
            const lastPlayedIcon = lastHash && data.hash === lastHash ? '<span class="torbox-item__last-played-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V7.5l5.25 3.5L11 16.5z" fill="currentColor"></path></svg></span>' : "";
            const item = Lampa.Template.get("torbox_item", _objectSpread(_objectSpread({}, data), {}, {
              last_played_icon: lastPlayedIcon
            }));
            item.data("torboxZone", FocusZones.LIST).data("torboxIndex", idx);
            if (viewDataForMovie && viewDataForMovie.total > 0 && viewDataForMovie.time >= 0) {
              const percent = Math.round(viewDataForMovie.time / viewDataForMovie.total * 100);
              item.append('<div class="torbox-item__progress"><div style="width:'.concat(Utils.clamp(percent, 0, 100), '%"></div></div>'));
              const timeWidget = Lampa.Template.get("player_time", {
                time: Lampa.Utils.secondsToTime(viewDataForMovie.time),
                left: Lampa.Utils.secondsToTime(viewDataForMovie.total - viewDataForMovie.time)
              });
              item.find(".torbox-item__main-info").after(timeWidget);
            }
            data.markAsLastPlayed = () => {
              scroll.render().find(".torbox-item__last-played-icon").remove();
              const titleEl = item.find(".torbox-item__title");
              if (titleEl.length && !titleEl.find(".torbox-item__last-played-icon").length) {
                titleEl.prepend('<span class="torbox-item__last-played-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V7.5l5.25 3.5L11 16.5z" fill="currentColor"></path></svg></span>');
              }
              const snapshot = compactTorrentSnapshot(data);
              saveLastTorrentSnapshot(snapshot);
              updateContinueWatchingPanel(snapshot);
            };
            item.on("hover:focus", (e) => {
              const target = $(e.currentTarget);
              target.data("torboxIndex", idx);
              updateFocusMetaFromElement(target);
              scroll.update(target, true);
              state.last_hash = data.hash;
            }).on("hover:enter", () => onTorrentClick(data)).on("hover:long", () => {
              Lampa.Select.show({
                title: translate("torbox_actions_title"),
                items: [{
                  title: translate("torbox_actions_copy_magnet")
                }],
                onSelect: () => {
                  Lampa.Utils.copyTextToClipboard(data.magnet, () => Lampa.Noty.show(translate("torbox_actions_copied")));
                  Lampa.Controller.toggle("content");
                },
                onBack: () => Lampa.Controller.toggle("content")
              });
            });
            scroll.append(item);
            return item;
          };
          pagedList.items = items;
          pagedList.rendered = 0;
          pagedList.render = (count) => {
            const end = Math.min(pagedList.items.length, pagedList.rendered + count);
            for (let i = pagedList.rendered; i < end; i++) {
              const el = renderTorrentItem(pagedList.items[i], i);
              try {
                if (pagedList.rendered > 0 && Lampa.Controller && typeof Lampa.Controller.collectionAppend === "function") {
                  Lampa.Controller.collectionAppend(el);
                }
              } catch (_unused19) {
              }
            }
            pagedList.rendered = end;
            return end;
          };
          pagedList.render(LIST_PAGE_SIZE);
          Lampa.Controller.enable("content");
          updateContinueWatchingPanel(lastSnapshot);
          if (state.last_hash) {
            const savedIdx = items.findIndex((t) => t.hash === state.last_hash);
            if (savedIdx >= pagedList.rendered) pagedList.render(savedIdx - pagedList.rendered + LIST_PAGE_SIZE);
            const saved = scroll.render().find('[data-hash="'.concat(state.last_hash, '"]')).first();
            if (saved.length && focusElement(saved)) return;
          }
          focusFirstListItem();
        };
        const empty = (msg) => {
          scroll.clear();
          const el = Lampa.Template.get("torbox_empty", {
            message: Utils.escapeHtml(msg || translate("torbox_empty_list"))
          });
          el.addClass("selector").data("torboxZone", FocusZones.EMPTY).data("torboxIndex", 0).on("hover:focus", (e) => {
            const target = $(e.currentTarget);
            updateFocusMetaFromElement(target);
            scroll.update(target, true);
          }).on("hover:enter", () => Lampa.Noty.show(translate("torbox_no_results_prompt")));
          scroll.append(el);
          Lampa.Controller.enable("content");
          updateDebugOverlay(el);
        };
        const reset = () => {
          lastFocused = null;
          scroll.clear();
          scroll.reset();
        };
        const generateKeyForMovie = (customTitle) => {
          var _object$movie3, _object$movie4;
          if (customTitle) return "torbox_custom_search_".concat(customTitle);
          const mid = ((_object$movie3 = object.movie) === null || _object$movie3 === void 0 ? void 0 : _object$movie3.id) || ((_object$movie4 = object.movie) === null || _object$movie4 === void 0 ? void 0 : _object$movie4.imdb_id) || "unknown";
          return "torbox_hybrid_".concat(mid);
        };
        const buildFilter = () => {
          const buildOne = (key, titleKey, arrays) => {
            const uni = [...new Set(arrays.flat().filter(Boolean).map((x) => String(x)))].sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()));
            const items = [{
              title: translate("torbox_filter_all"),
              value: "all",
              selected: state.filters[key] === "all"
            }, ...uni.map((v) => ({
              title: Utils.escapeHtml(v.toUpperCase()),
              value: v,
              selected: state.filters[key] === v
            }))];
            const subRaw = state.filters[key] === "all" ? translate("torbox_filter_all") : state.filters[key].toUpperCase();
            const sub = Utils.escapeHtml(subRaw);
            return {
              title: translate(titleKey),
              subtitle: sub,
              items,
              stype: key
            };
          };
          const baseItems = [{
            title: translate("torbox_filter_refine"),
            refine: true
          }, buildOne("quality", "torbox_filter_quality", state.all_torrents.map((t) => t.quality)), buildOne("video_type", "torbox_filter_video_type", state.all_torrents.map((t) => t.video_type)), buildOne("translation", "torbox_filter_translation", state.all_torrents.map((t) => t.voices || [])), buildOne("lang", "torbox_filter_audio_lang", state.all_torrents.map((t) => t.audio_langs || [])), buildOne("video_codec", "torbox_filter_video_codec", state.all_torrents.map((t) => t.video_codec ? [t.video_codec] : [])), buildOne("audio_codec", "torbox_filter_audio_codec", state.all_torrents.map((t) => t.audio_codecs || [])), buildOne("tracker", "torbox_filter_tracker", state.all_torrents.map((t) => t.trackers || [])), {
            title: translate("torbox_filter_reset"),
            reset: true
          }, {
            title: translate("torbox_filter_refresh"),
            refresh: true
          }];
          filter.set("filter", baseItems);
          filter.render().find(".filter--filter span").text(translate("torbox_filter_title"));
          filter.render().find(".filter--search input").attr("placeholder", state.search_query || object.movie.title || object.movie.name);
          const chosen = baseItems.filter((f) => f.stype && state.filters[f.stype] !== "all").map((f) => Utils.escapeHtml("".concat(f.title, ": ").concat(state.filters[f.stype])));
          filter.chosen("filter", chosen);
          const sorts = sortVariants.map((s) => ({
            key: s.key,
            title: translate(s.labelKey),
            field: s.field,
            reverse: s.reverse,
            selected: s.key === state.sort
          }));
          filter.set("sort", sorts);
          filter.render().find(".filter--sort span").text(translate("torbox_sort_title"));
          if (cachedToggleBtn && !filter.render().find(".torbox-cached-toggle").length) {
            filter.render().find(".filter--sort").before(cachedToggleBtn);
          }
          refreshFilterFocusBinding();
        };
        const search = (force = false, customTitle = null) => {
          cancelActiveTorrentFlow();
          abort.abort();
          abort = new AbortController();
          const signal = abort.signal;
          DebugTelemetry.parserAttempts = [];
          DebugTelemetry.selectedParser = null;
          this.activity.loader(true);
          reset();
          state.search_query = customTitle;
          const movieForSearch = customTitle ? _objectSpread(_objectSpread({}, object.movie), {}, {
            title: customTitle,
            original_title: customTitle,
            year: ""
          }) : object.movie;
          const cacheKey = generateKeyForMovie(customTitle);
          const cached = !force && Cache.get(cacheKey);
          if (cached) {
            state.all_torrents = cached;
            LOG("Loaded from RAM cache:", state.all_torrents.length);
            build();
            this.activity.loader(false);
            return;
          }
          empty(customTitle ? translateWithParams("torbox_search_custom", {
            query: Utils.escapeHtml(customTitle)
          }) : translate("torbox_search_fetching"));
          Api.searchPublicTrackers(movieForSearch, signal).then((parserPayload) => {
            if (signal.aborted) return;
            const mapByHash = parserPayload === null || parserPayload === void 0 ? void 0 : parserPayload.entriesByHash;
            if (!(mapByHash instanceof Map) || !mapByHash.size) {
              return empty(translate("torbox_search_parser_empty"));
            }
            const hashes = Array.from(mapByHash.keys());
            empty(translateWithParams("torbox_check_cache_progress", {
              count: hashes.length
            }));
            return Api.checkCached(hashes, signal).then((cachedMap) => ({
              mapByHash,
              cachedMap
            }));
          }).then((payload) => {
            if (!payload || signal.aborted) return;
            const cachedEntries = Object.entries(payload.cachedMap || {});
            const cachedSet = new Set(cachedEntries.filter(([, flag]) => isCachedFlagTrue(flag)).map(([h]) => h.toLowerCase()));
            const list = [];
            payload.mapByHash.forEach((raw, hex) => {
              list.push(toViewItem(raw, hex, cachedSet));
            });
            Cache.set(cacheKey, list);
            state.all_torrents = list;
            build();
          }).catch((err) => {
            if (!signal.aborted) {
              empty((err === null || err === void 0 ? void 0 : err.message) || translate("torbox_generic_error"));
              ErrorHandler.show((err === null || err === void 0 ? void 0 : err.type) || "error", err);
            }
          }).finally(() => {
            this.activity.loader(false);
          });
        };
        this.create = function() {
          this.activity.loader(false);
          scroll.body().addClass("torbox-list-container");
          files.appendFiles(scroll.render());
          files.appendHead(filter.render());
          scroll.minus(files.render().find(".explorer__files-head"));
          return this.render();
        };
        this.render = function() {
          return files.render();
        };
        this.initialize = function() {
          Lampa.Controller.add("content", {
            toggle: () => {
              if (isTorrentsView()) {
                Lampa.Controller.collectionSet(filter.render(), scroll.render());
              } else {
                Lampa.Controller.collectionSet(scroll.render());
              }
              Lampa.Controller.collectionFocus(lastFocused || false, scroll.render());
              ensureFocusExists();
            },
            up: () => handleDirectionalNavigation("up"),
            down: () => handleDirectionalNavigation("down"),
            left: () => handleDirectionalNavigation("left"),
            right: () => handleDirectionalNavigation("right"),
            back: this.back.bind(this)
          });
          Lampa.Controller.toggle("content");
          filter.onSelect = (type, a, b) => {
            Lampa.Select.close();
            if (type === "sort") {
              state.sort = a.key;
              Store.set("torbox_sort_method", a.key);
            } else if (type === "filter") {
              if (a.refine) {
                const combos = generateSearchCombinations(object.movie);
                if (!combos.length) {
                  Lampa.Noty.show(translate("torbox_refine_not_enough_data"));
                  return Lampa.Controller.toggle("content");
                }
                Lampa.Select.show({
                  title: translate("torbox_refine_title"),
                  items: combos.map((combo) => ({
                    title: Utils.escapeHtml(combo.label),
                    subtitle: Utils.escapeHtml(formatRefineTags(combo.tags)),
                    search_query: combo.query
                  })),
                  onSelect: (sel) => {
                    search(true, sel.search_query);
                    Lampa.Controller.toggle("content");
                  },
                  onBack: () => Lampa.Controller.toggle("content")
                });
                return;
              }
              if (a.refresh) return search(true);
              if (a.reset) state.filters = JSON.parse(JSON.stringify(defaultFilters));
              else if (a.stype) state.filters[a.stype] = b.value;
              Store.set("torbox_filters_v2", JSON.stringify(state.filters));
            }
            state.last_hash = null;
            build();
            Lampa.Controller.toggle("content");
          };
          filter.onBack = () => this.start();
          filter.onSearch = (v) => search(true, v);
          if (filter.addButtonBack) filter.addButtonBack();
          const toggleMarkup = '\n        <span class="torbox-cached-toggle__icon">\u2601\uFE0F</span>\n        <div class="torbox-cached-toggle__label"></div>\n      ';
          cachedToggleBtn = $('<div class="simple-button simple-button--filter selector torbox-cached-toggle" role="button" aria-pressed="false">'.concat(toggleMarkup, "</div>"));
          cachedToggleBtn.on("hover:enter", () => {
            state.show_only_cached = !state.show_only_cached;
            Store.set("torbox_show_only_cached", state.show_only_cached ? "1" : "0");
            build();
            cachedToggleBtn.removeClass("focus");
            lastFocused = null;
            focusState.zone = null;
            focusState.index = 0;
          });
          filter.render().find(".filter--sort").before(cachedToggleBtn);
          updateCachedToggleVisual();
          empty(translate("torbox_loading_initial"));
          const continueSnap = object.torbox_continue ? loadLastTorrentSnapshot() : null;
          if (continueSnap) {
            state.autoplay_continue = true;
            state.continue_skipped_search = true;
            onTorrentClick(continueSnap);
          } else {
            search();
          }
        };
        this.start = function() {
          if (Lampa.Activity.active().activity !== this.activity) return;
          Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(object.movie));
          if (!initialized) {
            initialized = true;
            this.initialize();
          } else {
            build();
            Lampa.Controller.toggle("content");
          }
        };
        this.back = function() {
          if (state.view === "episodes" && state.continue_skipped_search) {
            state.continue_skipped_search = false;
            state.view = "torrents";
            filter.render().show();
            revertPendingPlayback();
            empty(translate("torbox_loading_initial"));
            search();
          } else if (state.view === "episodes") {
            state.view = "torrents";
            filter.render().show();
            revertPendingPlayback();
            build();
          } else {
            cancelActiveTorrentFlow();
            abort.abort();
            Lampa.Activity.backward();
          }
        };
        this.destroy = function() {
          cancelActiveTorrentFlow();
          abort.abort();
          Lampa.Controller.clear("content");
          try {
            if (scroll) scroll.destroy();
            if (files) files.destroy();
            if (filter) filter.destroy();
          } catch (_unused20) {
          }
          if (debugOverlayEl) {
            debugOverlayEl.remove();
            debugOverlayEl = null;
          }
          if (window.__torbox_active_component === this) {
            window.__torbox_active_component = null;
          }
          scroll = files = filter = lastFocused = null;
        };
        this.pause = function() {
        };
        this.stop = function() {
        };
        function updateCachedToggleVisual() {
          if (!cachedToggleBtn) return;
          const on = state.show_only_cached;
          const iconEl = cachedToggleBtn.find(".torbox-cached-toggle__icon");
          const labelEl = cachedToggleBtn.find(".torbox-cached-toggle__label");
          const icon = on ? "\u26A1" : "\u2601\uFE0F";
          const labelKey = on ? "torbox_cached_toggle_cached" : "torbox_cached_toggle_all";
          const hintKey = on ? "torbox_cached_toggle_hint_cached" : "torbox_cached_toggle_hint_all";
          const labelText = translate(labelKey);
          const hintText = translate(hintKey);
          iconEl.text(icon);
          labelEl.text(labelText);
          cachedToggleBtn.toggleClass("torbox-cached-toggle--active", on).attr("title", hintText).attr("aria-label", hintText).attr("aria-pressed", String(on));
        }
      }
      (function integrate() {
        var _window$Lampa;
        let fullListener = null;
        const launchTorBox = (movieData = {}) => {
          const title = movieData.title || movieData.name || "";
          Lampa.Activity.push({
            component: "torbox_main",
            title: "".concat(Lampa.Lang.translate("title_torbox"), " - ").concat(title),
            movie: movieData
          });
        };
        const manifest = {
          type: "video",
          version: VERSION,
          name: "TorBox",
          description: translate("torbox_manifest_description"),
          component: "torbox_main",
          onContextMenu: () => true,
          onContextLauch: (card) => launchTorBox(card || {})
        };
        Lampa.Lang.add({
          torbox_watch: {
            ru: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0447\u0435\u0440\u0435\u0437 TorBox",
            en: "Watch via TorBox",
            uk: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u0447\u0435\u0440\u0435\u0437 TorBox"
          },
          title_torbox: {
            ru: "TorBox",
            uk: "TorBox",
            en: "TorBox"
          },
          torbox_cached_toggle_all: {
            ru: "\u0412\u0441\u0435 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u044B",
            en: "All torrents",
            uk: "\u0423\u0441\u0456 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0438"
          },
          torbox_cached_toggle_cached: {
            ru: "\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
            en: "Cached only",
            uk: "\u041B\u0438\u0448\u0435 \u043A\u0435\u0448\u043E\u0432\u0430\u043D\u0456"
          },
          torbox_cached_toggle_hint_all: {
            ru: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u0441\u0435 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u044B",
            en: "Showing all torrents",
            uk: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0432\u0441\u0456 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0438"
          },
          torbox_cached_toggle_hint_cached: {
            ru: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
            en: "Showing cached torrents only",
            uk: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043B\u0438\u0448\u0435 \u043A\u0435\u0448\u043E\u0432\u0430\u043D\u0456 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0438"
          },
          torbox_time_infinite: {
            ru: "\u221E",
            en: "\u221E",
            uk: "\u221E"
          },
          torbox_time_hours_short: {
            ru: "{value}\u0447",
            en: "{value}h",
            uk: "{value}\u0433\u043E\u0434"
          },
          torbox_time_minutes_short: {
            ru: "{value}\u043C",
            en: "{value}m",
            uk: "{value}\u0445\u0432"
          },
          torbox_time_seconds_short: {
            ru: "{value}\u0441",
            en: "{value}s",
            uk: "{value}\u0441"
          },
          torbox_age_seconds: {
            ru: "{value}\u0441 \u043D\u0430\u0437\u0430\u0434",
            en: "{value}s ago",
            uk: "{value}\u0441 \u0442\u043E\u043C\u0443"
          },
          torbox_season_n: {
            ru: "\u0421\u0435\u0437\u043E\u043D {value}",
            en: "Season {value}",
            uk: "\u0421\u0435\u0437\u043E\u043D {value}"
          },
          torbox_episode_n: {
            ru: "\u0421\u0435\u0440\u0438\u044F {value}",
            en: "Episode {value}",
            uk: "\u0421\u0435\u0440\u0456\u044F {value}"
          },
          torbox_continue_btn: {
            ru: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
            en: "Continue",
            uk: "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438"
          },
          torbox_age_minutes: {
            ru: "{value}\u043C \u043D\u0430\u0437\u0430\u0434",
            en: "{value}m ago",
            uk: "{value}\u0445\u0432 \u0442\u043E\u043C\u0443"
          },
          torbox_age_hours: {
            ru: "{value}\u0447 \u043D\u0430\u0437\u0430\u0434",
            en: "{value}h ago",
            uk: "{value}\u0433\u043E\u0434 \u0442\u043E\u043C\u0443"
          },
          torbox_age_days: {
            ru: "{value}\u0434 \u043D\u0430\u0437\u0430\u0434",
            en: "{value}d ago",
            uk: "{value}\u0434 \u0442\u043E\u043C\u0443"
          },
          torbox_not_available: {
            ru: "\u043D/\u0434",
            en: "n/a",
            uk: "\u043D/\u0434"
          },
          torbox_error_cors_missing: {
            ru: "CORS\u2011\u043F\u0440\u043E\u043A\u0441\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D. \u0423\u043A\u0430\u0436\u0438\u0442\u0435 URL \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 TorBox.",
            en: "CORS proxy is not set. Specify the URL in TorBox settings.",
            uk: "CORS-\u043F\u0440\u043E\u043A\u0441\u0456 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043E. \u0412\u043A\u0430\u0436\u0456\u0442\u044C URL \u0443 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 TorBox."
          },
          torbox_error_api_key_missing: {
            ru: "API\u2011\u043A\u043B\u044E\u0447 TorBox \u043D\u0435 \u0437\u0430\u0434\u0430\u043D. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 TorBox.",
            en: "TorBox API key is missing. Enter it in TorBox settings.",
            uk: "API-\u043A\u043B\u044E\u0447 TorBox \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043E. \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0439\u043E\u0433\u043E \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 TorBox."
          },
          torbox_error_401: {
            ru: "401 \u2013 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 API\u2011\u043A\u043B\u044E\u0447",
            en: "401 \u2013 invalid API key",
            uk: "401 \u2013 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 API-\u043A\u043B\u044E\u0447"
          },
          torbox_error_403: {
            ru: "403 \u2013 \u0434\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0451\u043D, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043A\u043B\u044E\u0447\u0430",
            en: "403 \u2013 access denied, check key permissions",
            uk: "403 \u2013 \u0434\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043A\u043B\u044E\u0447\u0430"
          },
          torbox_error_404: {
            ru: "404 \u2013 \u0440\u0435\u0441\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
            en: "404 \u2013 resource not found",
            uk: "404 \u2013 \u0440\u0435\u0441\u0443\u0440\u0441 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"
          },
          torbox_error_429: {
            ru: "429 \u2013 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
            en: "429 \u2013 too many requests, try again later",
            uk: "429 \u2013 \u0437\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0437\u0430\u043F\u0438\u0442\u0456\u0432, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435"
          },
          torbox_error_server: {
            ru: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ({status})",
            en: "Server error ({status})",
            uk: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ({status})"
          },
          torbox_error_request: {
            ru: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ({status})",
            en: "Request error ({status})",
            uk: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u043F\u0438\u0442\u0443 ({status})"
          },
          torbox_error_bad_json: {
            ru: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 JSON \u0432 \u043E\u0442\u0432\u0435\u0442\u0435",
            en: "Invalid JSON in response",
            uk: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 JSON \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456"
          },
          torbox_error_api: {
            ru: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 API",
            en: "Unknown API error",
            uk: "\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 API"
          },
          torbox_error_no_torrent_id: {
            ru: "ID \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D",
            en: "Torrent ID was not received",
            uk: "ID \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0443 \u043D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E"
          },
          torbox_error_timeout: {
            ru: "\u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ({seconds} \u0441\u0435\u043A)",
            en: "Request timeout ({seconds} s)",
            uk: "\u0422\u0430\u0439\u043C-\u0430\u0443\u0442 \u0437\u0430\u043F\u0438\u0442\u0443 ({seconds} \u0441)"
          },
          torbox_error_network: {
            ru: "\u0421\u0435\u0442\u0435\u0432\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
            en: "Network error",
            uk: "\u041C\u0435\u0440\u0435\u0436\u0435\u0432\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430"
          },
          torbox_error_public_parsers_empty: {
            ru: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u0430\u0440\u0441\u0435\u0440\u044B \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
            en: "Public parsers unavailable or returned no results",
            uk: "\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0456 \u043F\u0430\u0440\u0441\u0435\u0440\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0430\u0431\u043E \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0441\u043F\u0438\u0441\u043E\u043A"
          },
          torbox_error_public_parsers_invalid: {
            ru: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u0430\u0440\u0441\u0435\u0440\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438",
            en: "Public parsers returned invalid data",
            uk: "\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0456 \u043F\u0430\u0440\u0441\u0435\u0440\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
          },
          torbox_error_unknown: {
            ru: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
            en: "Unknown error",
            uk: "\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430"
          },
          torbox_error_prefix_auth: {
            ru: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
            en: "Auth",
            uk: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0456\u044F"
          },
          torbox_error_prefix_validation: {
            ru: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
            en: "Validation",
            uk: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C"
          },
          torbox_error_prefix_network: {
            ru: "\u0421\u0435\u0442\u044C",
            en: "Network",
            uk: "\u041C\u0435\u0440\u0435\u0436\u0430"
          },
          torbox_error_prefix_api: {
            ru: "TorBox",
            en: "TorBox",
            uk: "TorBox"
          },
          torbox_error_prefix_generic: {
            ru: "\u041E\u0448\u0438\u0431\u043A\u0430",
            en: "Error",
            uk: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430"
          },
          torbox_no_title: {
            ru: "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",
            en: "Untitled",
            uk: "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438"
          },
          torbox_info_trackers: {
            ru: "\u0422\u0440\u0435\u043A\u0435\u0440\u044B",
            en: "Trackers",
            uk: "\u0422\u0440\u0435\u043A\u0435\u0440\u0438"
          },
          torbox_info_added: {
            ru: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E",
            en: "Added",
            uk: "\u0414\u043E\u0434\u0430\u043D\u043E"
          },
          torbox_error_no_video_files: {
            ru: "\u0412\u0438\u0434\u0435\u043E\u0444\u0430\u0439\u043B\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
            en: "Video files not found",
            uk: "\u0412\u0456\u0434\u0435\u043E\u0444\u0430\u0439\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456"
          },
          torbox_error_file_link: {
            ru: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0444\u0430\u0439\u043B",
            en: "Failed to obtain file link",
            uk: "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0444\u0430\u0439\u043B"
          },
          torbox_file_download: {
            ru: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
            en: "Download link",
            uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"
          },
          torbox_download_link_copied: {
            ru: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Download link copied",
            uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_download_link_copy_failed: {
            ru: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430, \u043D\u043E \u043D\u0435 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Download link obtained, but not copied",
            uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E, \u0430\u043B\u0435 \u043D\u0435 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_download_link_opened: {
            ru: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Download link opened and copied",
            uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E \u0442\u0430 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_download_preparing: {
            ru: "TorBox \u0433\u043E\u0442\u043E\u0432\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438...",
            en: "TorBox is preparing the download link...",
            uk: "TorBox \u0433\u043E\u0442\u0443\u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."
          },
          torbox_download_attempted: {
            ru: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443, \u0441\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Tried to open the download, link copied",
            uk: "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u043B\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_download_attempted_no_copy: {
            ru: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443",
            en: "Tried to open the download",
            uk: "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u043B\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"
          },
          torbox_download_started: {
            ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0441\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Download sent to the system, link copied",
            uk: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0456, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_download_started_no_copy: {
            ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0435",
            en: "Download sent to the system",
            uk: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0456"
          },
          torbox_error_player_cancelled: {
            ru: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E",
            en: "Playback cancelled",
            uk: "\u0412\u0456\u0434\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_last_torrent_fallback: {
            ru: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u0440\u0440\u0435\u043D\u0442",
            en: "Last viewed torrent",
            uk: "\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438\u0439 \u0442\u043E\u0440\u0440\u0435\u043D\u0442"
          },
          torbox_continue_watching: {
            ru: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
            en: "Continue watching",
            uk: "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434"
          },
          torbox_continue_info_template: {
            ru: "{icon} {title} \u2022 {size} \u2022 \u{1F7E2} {seeders}",
            en: "{icon} {title} \u2022 {size} \u2022 \u{1F7E2} {seeders}",
            uk: "{icon} {title} \u2022 {size} \u2022 \u{1F7E2} {seeders}"
          },
          torbox_error_aborted: {
            ru: "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",
            en: "Cancelled by user",
            uk: "\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C"
          },
          torbox_error_torrent_timeout: {
            ru: "\u0422\u043E\u0440\u0440\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 TorBox (\u0442\u0430\u0439\u043C\u0430\u0443\u0442)",
            en: "Torrent not found in TorBox (timeout)",
            uk: "\u0422\u043E\u0440\u0440\u0435\u043D\u0442 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 TorBox (\u0442\u0430\u0439\u043C-\u0430\u0443\u0442)"
          },
          torbox_loading_progress: {
            ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430: {progress}% | {speed} | \u{1F464} {seeds}/{peers} | \u23F3 {eta}",
            en: "Loading: {progress}% | {speed} | \u{1F464} {seeds}/{peers} | \u23F3 {eta}",
            uk: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F: {progress}% | {speed} | \u{1F464} {seeds}/{peers} | \u23F3 {eta}"
          },
          torbox_error_no_magnet: {
            ru: "Magnet\u2011\u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",
            en: "Magnet link not found",
            uk: "Magnet-\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"
          },
          torbox_error_bad_hash: {
            ru: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 BTIH\u2011\u0445\u0435\u0448",
            en: "Invalid BTIH hash",
            uk: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 BTIH-\u0445\u0435\u0448"
          },
          torbox_loading_connect: {
            ru: "TorBox: \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435...",
            en: "TorBox: Connecting...",
            uk: "TorBox: \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F..."
          },
          torbox_loading_add: {
            ru: "TorBox: \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u0430\u0433\u043D\u0435\u0442\u0430...",
            en: "TorBox: Adding magnet...",
            uk: "TorBox: \u0414\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F \u043C\u0430\u0433\u043D\u0435\u0442\u0443..."
          },
          torbox_loading_wait: {
            ru: "TorBox: \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438...",
            en: "TorBox: Waiting for download...",
            uk: "TorBox: \u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."
          },
          torbox_loading_finalizing: {
            ru: "TorBox: \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443\u2026",
            en: "TorBox: Download complete, preparing to play\u2026",
            uk: "TorBox: \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E, \u0433\u043E\u0442\u0443\u0454\u043C\u043E \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443\u2026"
          },
          torbox_empty_filters: {
            ru: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C",
            en: "No results for the selected filters",
            uk: "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u043C\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0430\u043C\u0438"
          },
          torbox_actions_title: {
            ru: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
            en: "Actions",
            uk: "\u0414\u0456\u0457"
          },
          torbox_actions_copy_magnet: {
            ru: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Magnet",
            en: "Copy magnet link",
            uk: "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 Magnet"
          },
          torbox_actions_copied: {
            ru: "Magnet\u2011\u0441\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
            en: "Magnet link copied",
            uk: "Magnet-\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
          },
          torbox_empty_list: {
            ru: "\u0422\u043E\u0440\u0440\u0435\u043D\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
            en: "No torrents found",
            uk: "\u0422\u043E\u0440\u0440\u0435\u043D\u0442\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456"
          },
          torbox_no_results_prompt: {
            ru: "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0438\u043B\u0438 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441.",
            en: "No results. Adjust filters or refine the search.",
            uk: "\u041D\u0435\u043C\u0430\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432. \u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0444\u0456\u043B\u044C\u0442\u0440\u0438 \u0430\u0431\u043E \u0443\u0442\u043E\u0447\u043D\u0456\u0442\u044C \u0437\u0430\u043F\u0438\u0442."
          },
          torbox_filter_all: {
            ru: "\u0412\u0441\u0435",
            en: "All",
            uk: "\u0423\u0441\u0456"
          },
          torbox_filter_refine: {
            ru: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
            en: "Refine search",
            uk: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0438 \u043F\u043E\u0448\u0443\u043A"
          },
          torbox_filter_quality: {
            ru: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
            en: "Quality",
            uk: "\u042F\u043A\u0456\u0441\u0442\u044C"
          },
          torbox_filter_video_type: {
            ru: "\u0422\u0438\u043F \u0432\u0438\u0434\u0435\u043E",
            en: "Video type",
            uk: "\u0422\u0438\u043F \u0432\u0456\u0434\u0435\u043E"
          },
          torbox_filter_translation: {
            ru: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
            en: "Voiceover",
            uk: "\u041E\u0437\u0432\u0443\u0447\u0435\u043D\u043D\u044F"
          },
          torbox_filter_audio_lang: {
            ru: "\u042F\u0437\u044B\u043A \u0430\u0443\u0434\u0438\u043E",
            en: "Audio language",
            uk: "\u041C\u043E\u0432\u0430 \u0430\u0443\u0434\u0456\u043E"
          },
          torbox_filter_video_codec: {
            ru: "\u0412\u0438\u0434\u0435\u043E \u043A\u043E\u0434\u0435\u043A",
            en: "Video codec",
            uk: "\u0412\u0456\u0434\u0435\u043E\u043A\u043E\u0434\u0435\u043A"
          },
          torbox_filter_audio_codec: {
            ru: "\u0410\u0443\u0434\u0438\u043E \u043A\u043E\u0434\u0435\u043A",
            en: "Audio codec",
            uk: "\u0410\u0443\u0434\u0456\u043E\u043A\u043E\u0434\u0435\u043A"
          },
          torbox_filter_tracker: {
            ru: "\u0422\u0440\u0435\u043A\u0435\u0440",
            en: "Tracker",
            uk: "\u0422\u0440\u0435\u043A\u0435\u0440"
          },
          torbox_filter_reset: {
            ru: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
            en: "Reset filters",
            uk: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438"
          },
          torbox_filter_refresh: {
            ru: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
            en: "Refresh list",
            uk: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0441\u043F\u0438\u0441\u043E\u043A"
          },
          torbox_filter_title: {
            ru: "\u0424\u0438\u043B\u044C\u0442\u0440",
            en: "Filter",
            uk: "\u0424\u0456\u043B\u044C\u0442\u0440"
          },
          torbox_sort_seeders_desc: {
            ru: "\u041F\u043E \u0441\u0438\u0434\u0430\u043C (\u0443\u0431\u044B\u0432.)",
            en: "Seeders (desc)",
            uk: "\u0417\u0430 \u0441\u0456\u0434\u0430\u043C\u0438 (\u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F)"
          },
          torbox_sort_size_desc: {
            ru: "\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 (\u0443\u0431\u044B\u0432.)",
            en: "Size (desc)",
            uk: "\u0417\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C (\u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F)"
          },
          torbox_sort_size_asc: {
            ru: "\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 (\u0432\u043E\u0437\u0440.)",
            en: "Size (asc)",
            uk: "\u0417\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C (\u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F)"
          },
          torbox_sort_age: {
            ru: "\u041F\u043E \u0434\u0430\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
            en: "Recently added",
            uk: "\u0417\u0430 \u0434\u0430\u0442\u043E\u044E \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F"
          },
          torbox_sort_title: {
            ru: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
            en: "Sorting",
            uk: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F"
          },
          torbox_search_custom: {
            ru: "\u041F\u043E\u0438\u0441\u043A: \xAB{query}\xBB\u2026",
            en: "Searching for \u201C{query}\u201D\u2026",
            uk: "\u041F\u043E\u0448\u0443\u043A: \xAB{query}\xBB\u2026"
          },
          torbox_search_fetching: {
            ru: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430\u2026",
            en: "Fetching list\u2026",
            uk: "\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0441\u043F\u0438\u0441\u043A\u0443\u2026"
          },
          torbox_search_parser_empty: {
            ru: "\u041F\u0430\u0440\u0441\u0435\u0440 \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u043B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.",
            en: "Parser returned no results.",
            uk: "\u041F\u0430\u0440\u0441\u0435\u0440 \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432."
          },
          torbox_search_no_valid_hashes: {
            ru: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0445 BTIH\u2011\u0445\u0435\u0448\u0435\u0439 (hex/base32).",
            en: "No valid BTIH hashes found (hex/base32).",
            uk: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0445 BTIH-\u0445\u0435\u0448\u0456\u0432 (hex/base32)."
          },
          torbox_search_no_valid_results: {
            ru: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0431\u0435\u0437 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0445 BTIH\u2011\u0445\u0435\u0448\u0435\u0439.",
            en: "Results contain no valid BTIH hashes.",
            uk: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u0431\u0435\u0437 \u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0445 BTIH-\u0445\u0435\u0448\u0456\u0432."
          },
          torbox_check_cache_progress: {
            ru: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u044D\u0448\u0430 ({count})\u2026",
            en: "Checking cache ({count})\u2026",
            uk: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u043A\u0435\u0448\u0443 ({count})\u2026"
          },
          torbox_generic_error: {
            ru: "\u041E\u0448\u0438\u0431\u043A\u0430",
            en: "Error",
            uk: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430"
          },
          torbox_refine_not_enough_data: {
            ru: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430",
            en: "Not enough data to refine the query",
            uk: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u0434\u0430\u043D\u0438\u0445 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0442\u0443"
          },
          torbox_refine_title: {
            ru: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
            en: "Refine search",
            uk: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0438 \u043F\u043E\u0448\u0443\u043A"
          },
          torbox_refine_tag_original: {
            ru: "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B",
            en: "Original",
            uk: "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B"
          },
          torbox_refine_tag_translation: {
            ru: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
            en: "Translation",
            uk: "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434"
          },
          torbox_refine_tag_alt: {
            ru: "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
            en: "Alternate title",
            uk: "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u043D\u0430\u0437\u0432\u0430"
          },
          torbox_refine_tag_year: {
            ru: "\u0413\u043E\u0434",
            en: "Year",
            uk: "\u0420\u0456\u043A"
          },
          torbox_refine_tag_season: {
            ru: "\u0421\u0435\u0437\u043E\u043D",
            en: "Season",
            uk: "\u0421\u0435\u0437\u043E\u043D"
          },
          torbox_refine_tag_episode: {
            ru: "\u042D\u043F\u0438\u0437\u043E\u0434",
            en: "Episode",
            uk: "\u0415\u043F\u0456\u0437\u043E\u0434"
          },
          torbox_refine_tag_keyword: {
            ru: "\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",
            en: "Keyword",
            uk: "\u041A\u043B\u044E\u0447\u043E\u0432\u0435 \u0441\u043B\u043E\u0432\u043E"
          },
          torbox_refine_tag_id: {
            ru: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
            en: "Identifier",
            uk: "\u0406\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440"
          },
          torbox_refine_tag_mix: {
            ru: "\u041A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F",
            en: "Combination",
            uk: "\u041A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044F"
          },
          torbox_loading_initial: {
            ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
            en: "Loading...",
            uk: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."
          },
          torbox_manifest_description: {
            ru: "\u041F\u043B\u0430\u0433\u0438\u043D \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 TorBox",
            en: "TorBox plugin for streaming torrents",
            uk: "\u041F\u043B\u0430\u0433\u0456\u043D \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 TorBox"
          },
          torbox_settings_proxy_name: {
            ru: "URL CORS\u2011\u043F\u0440\u043E\u043A\u0441\u0438",
            en: "CORS proxy URL",
            uk: "URL CORS-\u043F\u0440\u043E\u043A\u0441\u0456"
          },
          torbox_settings_proxy_desc: {
            ru: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u043F\u0440\u043E\u043A\u0441\u0438, \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0443\u0442 \u0438\u0434\u0442\u0438 \u0412\u0421\u0415 \u0437\u0430\u043F\u0440\u043E\u0441\u044B",
            en: "Enter the proxy URL that will handle ALL requests",
            uk: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C URL \u043F\u0440\u043E\u043A\u0441\u0456, \u0447\u0435\u0440\u0435\u0437 \u044F\u043A\u0438\u0439 \u043F\u0456\u0434\u0443\u0442\u044C \u0423\u0421\u0406 \u0437\u0430\u043F\u0438\u0442\u0438"
          },
          torbox_settings_api_name: {
            ru: "API\u2011\u043A\u043B\u044E\u0447",
            en: "API key",
            uk: "API-\u043A\u043B\u044E\u0447"
          },
          torbox_settings_api_desc: {
            ru: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 API\u2011\u043A\u043B\u044E\u0447 \u043E\u0442 TorBox",
            en: "Enter your TorBox API key",
            uk: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0432\u0456\u0439 API-\u043A\u043B\u044E\u0447 TorBox"
          },
          torbox_settings_debug_name: {
            ru: "Debug\u2011\u0440\u0435\u0436\u0438\u043C",
            en: "Debug mode",
            uk: "Debug-\u0440\u0435\u0436\u0438\u043C"
          },
          torbox_settings_debug_desc: {
            ru: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u043B\u043E\u0433\u0438 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C",
            en: "Detailed logs in console",
            uk: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456 \u043B\u043E\u0433\u0438 \u0443 \u043A\u043E\u043D\u0441\u043E\u043B\u0456"
          },
          torbox_settings_retries_name: {
            ru: "\u041F\u043E\u0432\u0442\u043E\u0440\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F",
            en: "Tracking retries",
            uk: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438 \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F"
          },
          torbox_settings_retries_desc: {
            ru: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u0442\u0430\u0439\u043C-\u0430\u0443\u0442\u043E\u043C (3\u2013120 \u043F\u043E\u043F\u044B\u0442\u043E\u043A).",
            en: "How many status polling attempts to perform before timing out (3\u2013120 attempts).",
            uk: "\u0421\u043A\u0456\u043B\u044C\u043A\u0438 \u0440\u0430\u0437\u0456\u0432 \u043E\u043F\u0438\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u0442\u0430\u0439\u043C-\u0430\u0443\u0442\u043E\u043C (3\u2013120 \u0441\u043F\u0440\u043E\u0431)."
          },
          torbox_settings_interval_name: {
            ru: "\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u043C\u0441)",
            en: "Tracking interval (ms)",
            uk: "\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F (\u043C\u0441)"
          },
          torbox_settings_interval_desc: {
            ru: "\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0430. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043E\u0442 3000 \u0434\u043E 60000 \u043C\u0441.",
            en: "Delay between status polling requests. Allowed range: 3000\u201360000 ms.",
            uk: "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u043C\u0456\u0436 \u0437\u0430\u043F\u0438\u0442\u0430\u043C\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0430. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0438\u0439 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D: 3000\u201360000 \u043C\u0441."
          },
          torbox_settings_video_ext_name: {
            ru: "\u0412\u0438\u0434\u0435\u043E-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F",
            en: "Video extensions",
            uk: "\u0412\u0456\u0434\u0435\u043E\u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F"
          },
          torbox_settings_video_ext_desc: {
            ru: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0445 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E. \u041F\u0443\u0441\u0442\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u0435\u0440\u043D\u0451\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.",
            en: "Comma-separated list of allowed extensions. Leave empty to restore defaults.",
            uk: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0438\u0445 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u044C \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443. \u041F\u043E\u0440\u043E\u0436\u043D\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0435\u0440\u043D\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C."
          },
          torbox_settings_custom_parsers_name: {
            ru: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0441\u0435\u0440\u044B",
            en: "Custom parsers",
            uk: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0456 \u043F\u0430\u0440\u0441\u0435\u0440\u0438"
          },
          torbox_settings_custom_parsers_desc: {
            ru: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043C\u0435\u043D\u043E\u0432 (\u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E) \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430. \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u043C\u0438.",
            en: "Comma-separated list of domains for search. Added before public ones.",
            uk: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043C\u0435\u043D\u0456\u0432 (\u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443) \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443. \u0414\u043E\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u043C\u0438."
          },
          torbox_settings_default_cached_name: {
            ru: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E: \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0435\u0448",
            en: "Default: cached only",
            uk: "\u0417\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C: \u043B\u0438\u0448\u0435 \u043A\u0435\u0448"
          },
          torbox_settings_default_cached_desc: {
            ru: "\u0415\u0441\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u043D\u043E\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D TorBox \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u043E\u0432.",
            en: "If enabled, TorBox starts with cached-only mode on.",
            uk: "\u042F\u043A\u0449\u043E \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E, TorBox \u0441\u0442\u0430\u0440\u0442\u0443\u0454 \u0443 \u0440\u0435\u0436\u0438\u043C\u0456 \u043B\u0438\u0448\u0435 \u043A\u0435\u0448\u043E\u0432\u0430\u043D\u0438\u0445 \u0442\u043E\u0440\u0440\u0435\u043D\u0442\u0456\u0432."
          },
          torbox_settings_permanent_link_name: {
            ru: "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0442\u044C permanent link",
            en: "Prefer permanent link",
            uk: "\u041D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0443 permanent link"
          },
          torbox_settings_permanent_link_desc: {
            ru: "\u041F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C requestdl \u0441 redirect=true \u0438 \u043E\u0442\u043A\u0430\u0442\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438 \u043E\u0448\u0438\u0431\u043A\u0435.",
            en: "Try requestdl with redirect=true and fallback to classic mode on failure.",
            uk: "\u041F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 requestdl \u0437 redirect=true \u0456 \u0432\u0456\u0434\u043A\u043E\u0442\u0438\u0442\u0438\u0441\u044C \u043D\u0430 \u043A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438 \u043F\u043E\u043C\u0438\u043B\u0446\u0456."
          },
          torbox_settings_auto_pick_name: {
            ru: "\u0410\u0432\u0442\u043E\u0432\u044B\u0431\u043E\u0440 \u0444\u0430\u0439\u043B\u0430 (\u0444\u0438\u043B\u044C\u043C\u044B)",
            en: "Auto-pick file (movies)",
            uk: "\u0410\u0432\u0442\u043E\u0432\u0438\u0431\u0456\u0440 \u0444\u0430\u0439\u043B\u0430 (\u0444\u0456\u043B\u044C\u043C\u0438)"
          },
          torbox_settings_auto_pick_desc: {
            ru: "\u0414\u043B\u044F \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u0438\u0434\u0435\u043E\u0444\u0430\u0439\u043B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 (\u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0439, \u0431\u0435\u0437 sample/trailer).",
            en: "For movies, auto-select the best video file (largest, excluding sample/trailer).",
            uk: "\u0414\u043B\u044F \u0444\u0456\u043B\u044C\u043C\u0456\u0432 \u0430\u0432\u0442\u043E\u043E\u0431\u0438\u0440\u0430\u0442\u0438 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0439 \u0432\u0456\u0434\u0435\u043E\u0444\u0430\u0439\u043B (\u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439, \u0431\u0435\u0437 sample/trailer)."
          },
          torbox_settings_quality_order_name: {
            ru: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430",
            en: "Quality priority",
            uk: "\u041F\u0440\u0456\u043E\u0440\u0438\u0442\u0435\u0442 \u044F\u043A\u043E\u0441\u0442\u0456"
          },
          torbox_settings_quality_order_desc: {
            ru: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E: 4K,FHD,HD,SD. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u0430\u043A tie-break \u043F\u0440\u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0435.",
            en: "Comma-separated order: 4K,FHD,HD,SD. Used as tie-break during sorting.",
            uk: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443: 4K,FHD,HD,SD. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u044F\u043A tie-break \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F."
          },
          torbox_settings_audio_langs_name: {
            ru: "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438 \u0430\u0443\u0434\u0438\u043E",
            en: "Preferred audio languages",
            uk: "\u0411\u0430\u0436\u0430\u043D\u0456 \u043C\u043E\u0432\u0438 \u0430\u0443\u0434\u0456\u043E"
          },
          torbox_settings_audio_langs_desc: {
            ru: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u0434\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: RU,EN,UK).",
            en: "Comma-separated language codes (for example: RU,EN,UK).",
            uk: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u0434\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: RU,EN,UK)."
          },
          torbox_settings_video_codecs_name: {
            ru: "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u0434\u0435\u043E \u043A\u043E\u0434\u0435\u043A\u0438",
            en: "Preferred video codecs",
            uk: "\u0411\u0430\u0436\u0430\u043D\u0456 \u0432\u0456\u0434\u0435\u043E\u043A\u043E\u0434\u0435\u043A\u0438"
          },
          torbox_settings_video_codecs_desc: {
            ru: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u0434\u0435\u043A\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: HEVC,AV1,H264).",
            en: "Comma-separated codecs (for example: HEVC,AV1,H264).",
            uk: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u0434\u0435\u043A\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: HEVC,AV1,H264)."
          },
          torbox_settings_excluded_trackers_name: {
            ru: "\u0418\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0440\u0435\u043A\u0435\u0440\u044B",
            en: "Exclude trackers",
            uk: "\u0412\u0438\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0442\u0440\u0435\u043A\u0435\u0440\u0438"
          },
          torbox_settings_excluded_trackers_desc: {
            ru: "\u0422\u0440\u0435\u043A\u0435\u0440\u044B \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0438\u0437 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.",
            en: "Comma-separated trackers will be excluded from results.",
            uk: "\u0422\u0440\u0435\u043A\u0435\u0440\u0438 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443 \u0431\u0443\u0434\u0443\u0442\u044C \u0432\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0437 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432."
          },
          torbox_settings_debug_overlay_name: {
            ru: "Debug overlay",
            en: "Debug overlay",
            uk: "Debug overlay"
          },
          torbox_settings_debug_overlay_desc: {
            ru: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0437\u043E\u043D\u0443/\u0438\u043D\u0434\u0435\u043A\u0441 \u0444\u043E\u043A\u0443\u0441\u0430 \u0438 selector.",
            en: "Show current focus zone/index and selector on screen.",
            uk: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456 \u043F\u043E\u0442\u043E\u0447\u043D\u0443 \u0437\u043E\u043D\u0443/\u0456\u043D\u0434\u0435\u043A\u0441 \u0444\u043E\u043A\u0443\u0441\u0430 \u0442\u0430 selector."
          },
          torbox_settings_export_diag_name: {
            ru: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438",
            en: "Export diagnostics",
            uk: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438"
          },
          torbox_settings_export_diag_desc: {
            ru: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C JSON-\u043E\u0442\u0447\u0435\u0442 (\u0432\u0435\u0440\u0441\u0438\u044F, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0435\u0437 \u043A\u043B\u044E\u0447\u0430, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 error, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043B\u043E\u0433\u0438).",
            en: "Copy JSON report (version, settings without key, last error, recent logs).",
            uk: "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 JSON-\u0437\u0432\u0456\u0442 (\u0432\u0435\u0440\u0441\u0456\u044F, \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0435\u0437 \u043A\u043B\u044E\u0447\u0430, \u043E\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430, \u043E\u0441\u0442\u0430\u043D\u043D\u0456 \u043B\u043E\u0433\u0438)."
          },
          torbox_diag_copied: {
            ru: "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
            en: "Diagnostics copied to clipboard",
            uk: "\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0443 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443"
          },
          torbox_diag_copy_failed: {
            ru: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443",
            en: "Failed to copy diagnostics",
            uk: "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0441\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443"
          }
        });
        function addTemplates() {
          Lampa.Template.add("torbox_item", '<div class="torbox-item selector" data-hash="{hash}"><div class="torbox-item__title">{last_played_icon}{icon} {title}</div><div class="torbox-item__main-info">{info_formated}</div><div class="torbox-item__meta">{meta_formated}</div>{tech_bar_html}</div>');
          Lampa.Template.add("torbox_empty", '<div class="empty"><div class="empty__text">{message}</div></div>');
          Lampa.Template.add("torbox_watched_item", '<div class="torbox-watched-item selector"><div class="torbox-watched-item__icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V7.5l5.25 3.5L11 16.5z" fill="currentColor"></path></svg></div><div class="torbox-watched-item__body"><div class="torbox-watched-item__title">{title}</div><div class="torbox-watched-item__info">{info}</div></div></div>');
          Lampa.Template.add("torbox_episode_item", '<div class="torbox-file-item selector" data-file-id="{file_id}"><div class="torbox-file-item__body"><div class="torbox-file-item__title">{title}</div><div class="torbox-file-item__subtitle">{size}</div></div><div class="torbox-file-download selector" role="button" aria-label="{download_label}">\u2B07</div></div>');
        }
        function addSettings() {
          if (!Lampa.SettingsApi) return;
          Lampa.SettingsApi.addComponent({
            component: "torbox_enh",
            name: "TorBox",
            icon: ICON
          });
          const params = [{
            key: "torbox_proxy_url",
            name: translate("torbox_settings_proxy_name"),
            desc: translate("torbox_settings_proxy_desc"),
            type: "input",
            default: DEFAULT_PROXY_URL,
            get: () => Config.proxyUrl,
            set: (v) => Config.proxyUrl = String(v || "").trim()
          }, {
            key: "torbox_api_key",
            name: translate("torbox_settings_api_name"),
            desc: translate("torbox_settings_api_desc"),
            type: "input",
            default: "",
            get: () => Config.apiKey,
            set: (v) => Config.apiKey = String(v || "").trim(),
            mask: true
          }];
          params.forEach((p) => {
            let currentField = null;
            Lampa.SettingsApi.addParam({
              component: "torbox_enh",
              param: {
                name: p.key,
                type: p.type,
                values: "",
                default: p.default
              },
              field: {
                name: p.name,
                description: p.desc
              },
              onChange: (v) => {
                const value = typeof v === "object" ? v.value : v;
                const sanitized = p.set ? p.set(value) : value;
                if (currentField && currentField.length) {
                  const input = currentField.find("input");
                  if (input.length) input.val(p.get());
                }
                return sanitized;
              },
              onRender: (field) => {
                currentField = field;
                const input = field.find("input");
                if (input.length) {
                  input.val(p.get());
                  if (p.mask) input.attr("type", "password");
                  if (p.inputmode) input.attr("inputmode", p.inputmode);
                  if (p.placeholder) input.attr("placeholder", p.placeholder);
                }
                if (typeof p.render === "function") p.render(field);
              }
            });
          });
        }
        function boot() {
          Lampa.Component.add("torbox_main", MainComponent);
          addTemplates();
          addSettings();
          const addContinueButton = (root, movie) => {
            if (!movie || root.find(".view--torbox-continue").length) return;
            const mid = movie.imdb_id || movie.id || "unknown";
            let snap = null;
            try {
              const raw = Store.get("torbox_last_torrent_data_".concat(mid), "");
              snap = raw ? typeof raw === "string" ? JSON.parse(raw) : raw : null;
            } catch (_unused21) {
              snap = null;
            }
            if (!snap || !snap.hash || !snap.magnet) return;
            const label = String(Store.get("torbox_continue_label_".concat(mid), "") || "");
            const text = Lampa.Lang.translate("torbox_continue_btn") + (label ? " " + label : "");
            const btn = $('<div class="full-start__button selector view--torbox-continue" data-subtitle="TorBox"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" fill="currentColor"></path></svg><span></span></div>');
            btn.find("span").text(text);
            btn.on("hover:enter", () => {
              const title = movie.title || movie.name || "";
              Lampa.Activity.push({
                component: "torbox_main",
                title: "".concat(Lampa.Lang.translate("title_torbox"), " - ").concat(title),
                movie,
                torbox_continue: true
              });
            });
            const play = root.find(".button--play, .full-start__play").first();
            if (play.length) play.after(btn);
            else root.find(".full-start-new__buttons, .full-start__buttons").first().prepend(btn);
          };
          const qualityBadgeCache = /* @__PURE__ */ new Map();
          const qbRank = (q) => {
            const u = String(q || "").toUpperCase();
            if (u === "4K" || u === "UHD") return 2160;
            if (u === "FHD") return 1080;
            if (u === "HD") return 720;
            if (u === "SD") return 480;
            const n = parseInt(u, 10);
            return isFinite(n) ? n : 0;
          };
          const qbName = (q) => {
            const r = qbRank(q);
            if (r >= 2160) return "4K";
            if (r >= 1080) return "1080p";
            if (r >= 720) return "720p";
            return r ? r + "p" : "SD";
          };
          const renderQualityBadge = (root, info) => {
            if (!info || !root || root.find(".torbox-qbadge").length) return;
            const isTs = info.best === "TS/CAM";
            const text = isTs ? "\u042D\u043A\u0440\u0430\u043D\u043A\u0430" : info.best;
            const badge = $('<div class="full-start__status torbox-qbadge"></div>').text(text);
            badge.css({
              marginLeft: "0.6em",
              whiteSpace: "nowrap"
            });
            if (isTs) badge.css({
              color: "#ff9f43",
              borderColor: "#ff9f43"
            });
            const status = root.find(".full-start__status").not(".torbox-qbadge").last();
            if (status.length) return status.after(badge);
            const line = root.find(".full-start-new__rate-line, .full-start__rate-line").first();
            if (line.length) return line.append(badge);
            root.find(".full-start-new__buttons, .full-start__buttons").first().before(badge);
          };
          const addQualityBadge = (root, movie) => {
            if (!movie) return;
            const key = (movie.name ? "tv" : "movie") + ":" + (movie.id || movie.title || movie.name);
            if (qualityBadgeCache.has(key)) return renderQualityBadge(root, qualityBadgeCache.get(key));
            const controller = new AbortController();
            Api.searchPublicTrackers(movie, controller.signal).then((payload) => {
              const map = payload === null || payload === void 0 ? void 0 : payload.entriesByHash;
              if (!(map instanceof Map) || !map.size) return;
              const all = Array.from(map.values()).map((raw) => ({
                q: Utils.getQualityLabel((raw === null || raw === void 0 ? void 0 : raw.Title) || "", raw),
                seeds: Number(raw === null || raw === void 0 ? void 0 : raw.Seeders) || 0
              })).sort((a, b) => b.seeds - a.seeds);
              const normal = all.filter((t) => t.q !== "TS/CAM");
              let info = null;
              if (normal.length) {
                let best = null;
                normal.forEach((t) => {
                  if (!best || qbRank(t.q) > qbRank(best)) best = t.q;
                });
                info = {
                  best: qbName(best)
                };
              } else if (all.length) info = {
                best: "TS/CAM"
              };
              if (!info) return;
              qualityBadgeCache.set(key, info);
              if (document.body.contains(root[0])) renderQualityBadge(root, info);
            }).catch((err) => LOG("quality badge search failed", (err === null || err === void 0 ? void 0 : err.message) || err));
          };
          if (fullListener) Lampa.Listener.remove("full", fullListener);
          fullListener = (e) => {
            var _e$data, _e$object, _e$object$render;
            if (e.type !== "complite" || !((_e$data = e.data) !== null && _e$data !== void 0 && _e$data.movie)) return;
            const root = (_e$object = e.object) === null || _e$object === void 0 || (_e$object = _e$object.activity) === null || _e$object === void 0 || (_e$object$render = _e$object.render) === null || _e$object$render === void 0 ? void 0 : _e$object$render.call(_e$object);
            if (!(root !== null && root !== void 0 && root.length) || root.find(".view--torbox").length) return;
            const btn = $('<div class="full-start__button selector view--torbox" data-subtitle="TorBox">'.concat(ICON, "<span>TorBox</span></div>"));
            btn.on("hover:enter", () => launchTorBox(e.data.movie || {}));
            const torrentBtn = root.find(".view--torrent");
            torrentBtn.length ? torrentBtn.after(btn) : root.find(".full-start__play").after(btn);
            try {
              addQualityBadge(root, e.data.movie);
            } catch (err) {
              LOG("quality badge failed", (err === null || err === void 0 ? void 0 : err.message) || err);
            }
            try {
              addContinueButton(root, e.data.movie);
            } catch (err) {
              LOG("continue button failed", (err === null || err === void 0 ? void 0 : err.message) || err);
            }
          };
          Lampa.Listener.follow("full", fullListener);
          if (!document.getElementById("torbox-stable-styles")) {
            const css = document.createElement("style");
            css.id = "torbox-stable-styles";
            css.textContent = '\n          .torbox-list-container { display:block; padding:1em; }\n          .torbox-item { position:relative; padding:1em 1.2em; margin:0 0 1em 0; border-radius:.8em; background: var(--color-background-light); cursor:pointer; transition:.25s; border:2px solid transparent; overflow:hidden; }\n          .torbox-item:last-child { margin-bottom:0; }\n          .torbox-item:hover, .torbox-item.focus,\n          .torbox-watched-item:hover, .torbox-watched-item.focus,\n          .torbox-file-item:hover, .torbox-file-item.focus {\n            background:var(--color-primary); color:var(--color-background); transform:translateY(-1px); border-color:rgba(255,255,255,.28);\n            box-shadow:0 6px 24px rgba(0,0,0,.18);\n          }\n          .torbox-item__title { font-weight:600; margin-bottom:.35em; font-size:1.05em; line-height:1.35; display:flex; align-items:center; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }\n          .torbox-item__last-played-icon { display:inline-flex; width:1.1em; height:1.1em; margin-right:.5em; color:var(--color-second); }\n          .torbox-item__last-played-icon svg{ width:100%; height:100%; }\n          .torbox-item__main-info { font-size:.95em; opacity:.95; line-height:1.4; margin-bottom:.25em; }\n          .torbox-item__meta { font-size:.88em; opacity:.75; line-height:1.4; margin-bottom:.7em; }\n          .torbox-item__progress { position:absolute; left:0; right:0; bottom:0; height:3px; background:rgba(255,255,255,.22); }\n          .torbox-item__progress > div { height:100%; background:var(--color-primary); }\n          .torbox-item__tech-bar { display:flex; flex-wrap:wrap; gap:.55em; margin:0 -1.2em -1em; padding:.6em 1.2em; background:rgba(0,0,0,.08); font-size:.84em; font-weight:500; transition:background .2s; }\n          .torbox-item__tech-item { padding:.22em .55em; border-radius:.4em; color:#fff; }\n          .torbox-item__tech-item--res { background:#3b82f6; }\n          .torbox-item__tech-item--codec { background:#16a34a; }\n          .torbox-item__tech-item--audio { background:#f97316; }\n          .torbox-item__tech-item--hdr { background:linear-gradient(45deg,#ff8c00,#ffa500); }\n          .torbox-item__tech-item--dv  { background:linear-gradient(45deg,#4b0082,#8a2be2); }\n          .torbox-cached-toggle { display:inline-flex; align-items:center; justify-content:center; border:2px solid transparent; transition:.2s; gap:.5em; padding:0 .8em; min-height:2.5em; }\n          .torbox-cached-toggle__icon { font-size:1.5em; line-height:1; }\n          .torbox-cached-toggle__label { font-size:.85em; font-weight:500; white-space:nowrap; }\n          .torbox-cached-toggle.focus, .torbox-cached-toggle:hover {\n            background:var(--color-primary); color:var(--color-background); border-color:rgba(255,255,255,.28);\n          }\n          /* "Cached only" engaged: subtle accent border, NOT the selection fill, so it\n             is not mistaken for keyboard focus (the \u26A1 icon + label already show state). */\n          .torbox-cached-toggle.torbox-cached-toggle--active:not(.focus):not(:hover) {\n            border-color:var(--color-second);\n          }\n          .torbox-file-item { display:flex; justify-content:space-between; align-items:center; gap:1em; padding:1em 1.2em; margin-bottom:1em; border-radius:.8em; background:var(--color-background-light); transition:.25s; border:2px solid transparent; }\n          .torbox-file-item__body { min-width:0; flex:1 1 auto; }\n          .torbox-file-item__title { font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\n          .torbox-file-item__subtitle { font-size:.9em; opacity:.75; }\n          .torbox-file-download { flex:0 0 2.4em; width:2.4em; height:2.4em; display:flex; align-items:center; justify-content:center; border-radius:.5em; border:2px solid rgba(255,255,255,.18); background:rgba(0,0,0,.12); color:inherit; font-size:1.05em; line-height:1; }\n          .torbox-file-download:hover, .torbox-file-download.focus { background:var(--color-second); color:var(--color-background); border-color:rgba(255,255,255,.35); }\n          .torbox-file-download--loading { opacity:.55; pointer-events:none; }\n          .torbox-file-item--last-played { border-left:4px solid var(--color-second); }\n          .torbox-file-item--watched { color:#8a8a8a; }\n          .torbox-watched-item { display:flex; align-items:center; padding:1em; margin-bottom:1em; border-radius:.8em; background:var(--color-background-light); border-left:4px solid var(--color-second); transition:.25s; border:2px solid transparent; }\n          .torbox-watched-item__icon { flex-shrink:0; margin-right:1em; }\n          .torbox-watched-item__icon svg{ width:2em; height:2em; }\n          .torbox-watched-item__title { font-weight:600; }\n          .torbox-watched-item__info { font-size:.9em; opacity:.75; }\n          /* TV performance: no animated transforms/shadows/transitions */\n          .torbox-item, .torbox-file-item, .torbox-watched-item, .torbox-item__tech-bar, .torbox-cached-toggle { transition:none !important; }\n          .torbox-item.focus, .torbox-file-item.focus, .torbox-watched-item.focus,\n          .torbox-item:hover, .torbox-file-item:hover, .torbox-watched-item:hover { transform:none !important; box-shadow:none !important; }\n          .torbox-file-item { position:relative; overflow:hidden; }\n          .torbox-season-tabs { display:flex; flex-wrap:wrap; margin:0 0 1em 0; }\n          .torbox-season-tab { padding:.5em 1.1em; margin:0 .6em .6em 0; border-radius:.6em; background:var(--color-background-light); border:2px solid transparent; font-weight:600; }\n          .torbox-season-tab.active { border-color:var(--color-second); }\n          .torbox-season-tab.focus, .torbox-season-tab:hover { background:var(--color-primary); color:var(--color-background); }\n          /* flex gap is missing on older Tizen engines */\n          .torbox-item__tech-item { margin:0 .3em .3em 0; }\n        ';
            document.head.appendChild(css);
          }
          try {
            var _Lampa3;
            const plugins = (_Lampa3 = Lampa) === null || _Lampa3 === void 0 || (_Lampa3 = _Lampa3.Manifest) === null || _Lampa3 === void 0 ? void 0 : _Lampa3.plugins;
            const alreadyRegistered = Array.isArray(plugins) ? plugins.some((plugin) => plugin && plugin.name === manifest.name) : false;
            if (!alreadyRegistered) {
              Lampa.Manifest.plugins = manifest;
            }
          } catch (e) {
            LOG("Manifest registration fallback", (e === null || e === void 0 ? void 0 : e.message) || e);
            try {
              Lampa.Manifest.plugins[manifest.name] = manifest;
            } catch (_unused22) {
            }
          }
          LOG("TorBox plugin ready", manifest.version);
        }
        if ((_window$Lampa = window.Lampa) !== null && _window$Lampa !== void 0 && _window$Lampa.Activity) {
          boot();
        } else {
          const bootOnce = Lampa.Listener.follow("app", (e) => {
            if (e.type === "ready") {
              boot();
              Lampa.Listener.remove("app", bootOnce);
            }
          });
        }
      })();
    })();
  } catch (torboxFatalError) {
    try {
      console.error("[TorBox] fatal boot error", torboxFatalError);
    } catch (_unused23) {
    }
    try {
      const msg = torboxFatalError && torboxFatalError.stack ? torboxFatalError.stack : String(torboxFatalError);
      localStorage.setItem("torbox_boot_error", msg);
    } catch (_unused24) {
    }
    try {
      if ((_window$Lampa2 = window.Lampa) !== null && _window$Lampa2 !== void 0 && _window$Lampa2.Noty) {
        Lampa.Noty.show("TorBox boot error: " + ((torboxFatalError === null || torboxFatalError === void 0 ? void 0 : torboxFatalError.message) || torboxFatalError), {
          type: "error"
        });
      }
    } catch (_unused25) {
    }
  }
  var _window$Lampa2;
})();
