// ==UserScript==
// @name         Sakura 2v2
// @namespace    local.sakura.2v2
// @version      2.10.2
// @description  Sakura menu for 2v2.io — schema ESP + movement/weapon over UWMK hooks + overlay
// @match        https://2v2.io/*
// @match        https://www.2v2.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/neverthrow/dist/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/neverthrow/dist/index.es.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   err: () => (/* binding */ err),
/* harmony export */   ok: () => (/* binding */ ok)
/* harmony export */ });
/* unused harmony exports Err, Ok, Result, ResultAsync, errAsync, fromAsyncThrowable, fromPromise, fromSafePromise, fromThrowable, okAsync, safeTry */
const defaultErrorConfig = {
    withStackTrace: false,
};
// Custom error object
// Context / discussion: https://github.com/supermacro/neverthrow/pull/215
const createNeverThrowError = (message, result, config = defaultErrorConfig) => {
    const data = result.isOk()
        ? { type: 'Ok', value: result.value }
        : { type: 'Err', value: result.error };
    const maybeStack = config.withStackTrace ? new Error().stack : undefined;
    return {
        data,
        message,
        stack: maybeStack,
    };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

class ResultAsync {
    constructor(res) {
        this._promise = res;
    }
    static fromSafePromise(promise) {
        const newPromise = promise.then((value) => new Ok(value));
        return new ResultAsync(newPromise);
    }
    static fromPromise(promise, errorFn) {
        const newPromise = promise
            .then((value) => new Ok(value))
            .catch((e) => new Err(errorFn(e)));
        return new ResultAsync(newPromise);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromThrowable(fn, errorFn) {
        return (...args) => {
            return new ResultAsync((() => __awaiter(this, void 0, void 0, function* () {
                try {
                    return new Ok(yield fn(...args));
                }
                catch (error) {
                    return new Err(errorFn ? errorFn(error) : error);
                }
            }))());
        };
    }
    static combine(asyncResultList) {
        return combineResultAsyncList(asyncResultList);
    }
    static combineWithAllErrors(asyncResultList) {
        return combineResultAsyncListWithAllErrors(asyncResultList);
    }
    map(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return new Err(res.error);
            }
            return new Ok(yield f(res.value));
        })));
    }
    mapErr(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isOk()) {
                return new Ok(res.value);
            }
            return new Err(yield f(res.error));
        })));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(f) {
        return new ResultAsync(this._promise.then((res) => {
            if (res.isErr()) {
                return new Err(res.error);
            }
            const newValue = f(res.value);
            return newValue instanceof ResultAsync ? newValue._promise : newValue;
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(f) {
        return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.isErr()) {
                return f(res.error);
            }
            return new Ok(res.value);
        })));
    }
    match(ok, _err) {
        return this._promise.then((res) => res.match(ok, _err));
    }
    unwrapOr(t) {
        return this._promise.then((res) => res.unwrapOr(t));
    }
    /**
     * Emulates Rust's `?` operator in `safeTry`'s body. See also `safeTry`.
     */
    safeUnwrap() {
        return __asyncGenerator(this, arguments, function* safeUnwrap_1() {
            return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(yield __await(this._promise.then((res) => res.safeUnwrap()))))));
        });
    }
    // Makes ResultAsync implement PromiseLike<Result>
    then(successCallback, failureCallback) {
        return this._promise.then(successCallback, failureCallback);
    }
}
const okAsync = (value) => new ResultAsync(Promise.resolve(new Ok(value)));
const errAsync = (err) => new ResultAsync(Promise.resolve(new Err(err)));
const fromPromise = ResultAsync.fromPromise;
const fromSafePromise = ResultAsync.fromSafePromise;
const fromAsyncThrowable = ResultAsync.fromThrowable;

/**
 * Short circuits on the FIRST Err value that we find
 */
const combineResultList = (resultList) => {
    let acc = ok([]);
    for (const result of resultList) {
        if (result.isErr()) {
            acc = err(result.error);
            break;
        }
        else {
            acc.map((list) => list.push(result.value));
        }
    }
    return acc;
};
/* This is the typesafe version of Promise.all
 *
 * Takes a list of ResultAsync<T, E> and success if all inner results are Ok values
 * or fails if one (or more) of the inner results are Err values
 */
const combineResultAsyncList = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList);
/**
 * Give a list of all the errors we find
 */
const combineResultListWithAllErrors = (resultList) => {
    let acc = ok([]);
    for (const result of resultList) {
        if (result.isErr() && acc.isErr()) {
            acc.error.push(result.error);
        }
        else if (result.isErr() && acc.isOk()) {
            acc = err([result.error]);
        }
        else if (result.isOk() && acc.isOk()) {
            acc.value.push(result.value);
        }
        // do nothing when result.isOk() && acc.isErr()
    }
    return acc;
};
const combineResultAsyncListWithAllErrors = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors);

// eslint-disable-next-line @typescript-eslint/no-namespace
var Result;
(function (Result) {
    /**
     * Wraps a function with a try catch, creating a new function with the same
     * arguments but returning `Ok` if successful, `Err` if the function throws
     *
     * @param fn function to wrap with ok on success or err on failure
     * @param errorFn when an error is thrown, this will wrap the error result if provided
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fromThrowable(fn, errorFn) {
        return (...args) => {
            try {
                const result = fn(...args);
                return ok(result);
            }
            catch (e) {
                return err(errorFn ? errorFn(e) : e);
            }
        };
    }
    Result.fromThrowable = fromThrowable;
    function combine(resultList) {
        return combineResultList(resultList);
    }
    Result.combine = combine;
    function combineWithAllErrors(resultList) {
        return combineResultListWithAllErrors(resultList);
    }
    Result.combineWithAllErrors = combineWithAllErrors;
})(Result || (Result = {}));
const ok = (value) => new Ok(value);
const err = (err) => new Err(err);
function safeTry(body) {
    const n = body().next();
    if (n instanceof Promise) {
        return n.then((r) => r.value);
    }
    return n.value;
}
class Ok {
    constructor(value) {
        this.value = value;
    }
    isOk() {
        return true;
    }
    isErr() {
        return !this.isOk();
    }
    map(f) {
        return ok(f(this.value));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mapErr(_f) {
        return ok(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(f) {
        return f(this.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(_f) {
        return ok(this.value);
    }
    asyncAndThen(f) {
        return f(this.value);
    }
    asyncMap(f) {
        return ResultAsync.fromSafePromise(f(this.value));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unwrapOr(_v) {
        return this.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    match(ok, _err) {
        return ok(this.value);
    }
    safeUnwrap() {
        const value = this.value;
        /* eslint-disable-next-line require-yield */
        return (function* () {
            return value;
        })();
    }
    _unsafeUnwrap(_) {
        return this.value;
    }
    _unsafeUnwrapErr(config) {
        throw createNeverThrowError('Called `_unsafeUnwrapErr` on an Ok', this, config);
    }
}
class Err {
    constructor(error) {
        this.error = error;
    }
    isOk() {
        return false;
    }
    isErr() {
        return !this.isOk();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map(_f) {
        return err(this.error);
    }
    mapErr(f) {
        return err(f(this.error));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    andThen(_f) {
        return err(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    orElse(f) {
        return f(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asyncAndThen(_f) {
        return errAsync(this.error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asyncMap(_f) {
        return errAsync(this.error);
    }
    unwrapOr(v) {
        return v;
    }
    match(_ok, err) {
        return err(this.error);
    }
    safeUnwrap() {
        const error = this.error;
        return (function* () {
            yield err(error);
            throw new Error('Do not use this generator out of `safeTry`');
        })();
    }
    _unsafeUnwrap(config) {
        throw createNeverThrowError('Called `_unsafeUnwrap` on an Err', this, config);
    }
    _unsafeUnwrapErr(_) {
        return this.error;
    }
}
const fromThrowable = Result.fromThrowable;
//#endregion




/***/ }),

/***/ "./src/errors/index.ts":
/*!*****************************!*\
  !*** ./src/errors/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Il2CppContextCreationError: () => (/* binding */ Il2CppContextCreationError),
/* harmony export */   MetadataParsingError: () => (/* binding */ MetadataParsingError),
/* harmony export */   UnresolvedMetadataError: () => (/* binding */ UnresolvedMetadataError)
/* harmony export */ });
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    print() {
        return this.name + ": " + this.message;
    }
}
class UnresolvedMetadataError extends CustomError {
    constructor() {
        super(...arguments);
        this.name = "UnresolvedMetadataError";
    }
}
class MetadataParsingError extends CustomError {
    constructor() {
        super(...arguments);
        this.name = "MetadataParsingError";
    }
}
class Il2CppContextCreationError extends CustomError {
    constructor() {
        super(...arguments);
        this.name = "Il2CppContextCreationError";
    }
}


/***/ }),

/***/ "./src/extras/index.ts":
/*!*****************************!*\
  !*** ./src/extras/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyCode: () => (/* binding */ KeyCode),
/* harmony export */   dataTypeSizes: () => (/* binding */ dataTypeSizes)
/* harmony export */ });
const dataTypeSizes = {
    u8: 1,
    u32: 4,
    i32: 4,
    f32: 4,
};
// TODO: Resolve and create these kinds of enums dynamically (and remove hardcoding)
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["None"] = 0] = "None";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Clear"] = 12] = "Clear";
    KeyCode[KeyCode["Return"] = 13] = "Return";
    KeyCode[KeyCode["Pause"] = 19] = "Pause";
    KeyCode[KeyCode["Escape"] = 27] = "Escape";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["Exclaim"] = 33] = "Exclaim";
    KeyCode[KeyCode["DoubleQuote"] = 34] = "DoubleQuote";
    KeyCode[KeyCode["Hash"] = 35] = "Hash";
    KeyCode[KeyCode["Dollar"] = 36] = "Dollar";
    KeyCode[KeyCode["Ampersand"] = 38] = "Ampersand";
    KeyCode[KeyCode["Quote"] = 39] = "Quote";
    KeyCode[KeyCode["LeftParen"] = 40] = "LeftParen";
    KeyCode[KeyCode["RightParen"] = 41] = "RightParen";
    KeyCode[KeyCode["Asterisk"] = 42] = "Asterisk";
    KeyCode[KeyCode["Plus"] = 43] = "Plus";
    KeyCode[KeyCode["Comma"] = 44] = "Comma";
    KeyCode[KeyCode["Minus"] = 45] = "Minus";
    KeyCode[KeyCode["Period"] = 46] = "Period";
    KeyCode[KeyCode["Slash"] = 47] = "Slash";
    KeyCode[KeyCode["Alpha0"] = 48] = "Alpha0";
    KeyCode[KeyCode["Alpha1"] = 49] = "Alpha1";
    KeyCode[KeyCode["Alpha2"] = 50] = "Alpha2";
    KeyCode[KeyCode["Alpha3"] = 51] = "Alpha3";
    KeyCode[KeyCode["Alpha4"] = 52] = "Alpha4";
    KeyCode[KeyCode["Alpha5"] = 53] = "Alpha5";
    KeyCode[KeyCode["Alpha6"] = 54] = "Alpha6";
    KeyCode[KeyCode["Alpha7"] = 55] = "Alpha7";
    KeyCode[KeyCode["Alpha8"] = 56] = "Alpha8";
    KeyCode[KeyCode["Alpha9"] = 57] = "Alpha9";
    KeyCode[KeyCode["Colon"] = 58] = "Colon";
    KeyCode[KeyCode["Semicolon"] = 59] = "Semicolon";
    KeyCode[KeyCode["Less"] = 60] = "Less";
    KeyCode[KeyCode["Equals"] = 61] = "Equals";
    KeyCode[KeyCode["Greater"] = 62] = "Greater";
    KeyCode[KeyCode["Question"] = 63] = "Question";
    KeyCode[KeyCode["At"] = 64] = "At";
    KeyCode[KeyCode["LeftBracket"] = 91] = "LeftBracket";
    KeyCode[KeyCode["Backslash"] = 92] = "Backslash";
    KeyCode[KeyCode["RightBracket"] = 93] = "RightBracket";
    KeyCode[KeyCode["Caret"] = 94] = "Caret";
    KeyCode[KeyCode["Underscore"] = 95] = "Underscore";
    KeyCode[KeyCode["BackQuote"] = 96] = "BackQuote";
    KeyCode[KeyCode["A"] = 97] = "A";
    KeyCode[KeyCode["B"] = 98] = "B";
    KeyCode[KeyCode["C"] = 99] = "C";
    KeyCode[KeyCode["D"] = 100] = "D";
    KeyCode[KeyCode["E"] = 101] = "E";
    KeyCode[KeyCode["F"] = 102] = "F";
    KeyCode[KeyCode["G"] = 103] = "G";
    KeyCode[KeyCode["H"] = 104] = "H";
    KeyCode[KeyCode["I"] = 105] = "I";
    KeyCode[KeyCode["J"] = 106] = "J";
    KeyCode[KeyCode["K"] = 107] = "K";
    KeyCode[KeyCode["L"] = 108] = "L";
    KeyCode[KeyCode["M"] = 109] = "M";
    KeyCode[KeyCode["N"] = 110] = "N";
    KeyCode[KeyCode["O"] = 111] = "O";
    KeyCode[KeyCode["P"] = 112] = "P";
    KeyCode[KeyCode["Q"] = 113] = "Q";
    KeyCode[KeyCode["R"] = 114] = "R";
    KeyCode[KeyCode["S"] = 115] = "S";
    KeyCode[KeyCode["T"] = 116] = "T";
    KeyCode[KeyCode["U"] = 117] = "U";
    KeyCode[KeyCode["V"] = 118] = "V";
    KeyCode[KeyCode["W"] = 119] = "W";
    KeyCode[KeyCode["X"] = 120] = "X";
    KeyCode[KeyCode["Y"] = 121] = "Y";
    KeyCode[KeyCode["Z"] = 122] = "Z";
    KeyCode[KeyCode["Delete"] = 127] = "Delete";
    KeyCode[KeyCode["Keypad0"] = 256] = "Keypad0";
    KeyCode[KeyCode["Keypad1"] = 257] = "Keypad1";
    KeyCode[KeyCode["Keypad2"] = 258] = "Keypad2";
    KeyCode[KeyCode["Keypad3"] = 259] = "Keypad3";
    KeyCode[KeyCode["Keypad4"] = 260] = "Keypad4";
    KeyCode[KeyCode["Keypad5"] = 261] = "Keypad5";
    KeyCode[KeyCode["Keypad6"] = 262] = "Keypad6";
    KeyCode[KeyCode["Keypad7"] = 263] = "Keypad7";
    KeyCode[KeyCode["Keypad8"] = 264] = "Keypad8";
    KeyCode[KeyCode["Keypad9"] = 265] = "Keypad9";
    KeyCode[KeyCode["KeypadPeriod"] = 266] = "KeypadPeriod";
    KeyCode[KeyCode["KeypadDivide"] = 267] = "KeypadDivide";
    KeyCode[KeyCode["KeypadMultiply"] = 268] = "KeypadMultiply";
    KeyCode[KeyCode["KeypadMinus"] = 269] = "KeypadMinus";
    KeyCode[KeyCode["KeypadPlus"] = 270] = "KeypadPlus";
    KeyCode[KeyCode["KeypadEnter"] = 271] = "KeypadEnter";
    KeyCode[KeyCode["KeypadEquals"] = 272] = "KeypadEquals";
    KeyCode[KeyCode["UpArrow"] = 273] = "UpArrow";
    KeyCode[KeyCode["DownArrow"] = 274] = "DownArrow";
    KeyCode[KeyCode["RightArrow"] = 275] = "RightArrow";
    KeyCode[KeyCode["LeftArrow"] = 276] = "LeftArrow";
    KeyCode[KeyCode["Insert"] = 277] = "Insert";
    KeyCode[KeyCode["Home"] = 278] = "Home";
    KeyCode[KeyCode["End"] = 279] = "End";
    KeyCode[KeyCode["PageUp"] = 280] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 281] = "PageDown";
    KeyCode[KeyCode["F1"] = 282] = "F1";
    KeyCode[KeyCode["F2"] = 283] = "F2";
    KeyCode[KeyCode["F3"] = 284] = "F3";
    KeyCode[KeyCode["F4"] = 285] = "F4";
    KeyCode[KeyCode["F5"] = 286] = "F5";
    KeyCode[KeyCode["F6"] = 287] = "F6";
    KeyCode[KeyCode["F7"] = 288] = "F7";
    KeyCode[KeyCode["F8"] = 289] = "F8";
    KeyCode[KeyCode["F9"] = 290] = "F9";
    KeyCode[KeyCode["F10"] = 291] = "F10";
    KeyCode[KeyCode["F11"] = 292] = "F11";
    KeyCode[KeyCode["F12"] = 293] = "F12";
    KeyCode[KeyCode["F13"] = 294] = "F13";
    KeyCode[KeyCode["F14"] = 295] = "F14";
    KeyCode[KeyCode["F15"] = 296] = "F15";
    KeyCode[KeyCode["Numlock"] = 300] = "Numlock";
    KeyCode[KeyCode["CapsLock"] = 301] = "CapsLock";
    KeyCode[KeyCode["ScrollLock"] = 302] = "ScrollLock";
    KeyCode[KeyCode["RightShift"] = 303] = "RightShift";
    KeyCode[KeyCode["LeftShift"] = 304] = "LeftShift";
    KeyCode[KeyCode["RightControl"] = 305] = "RightControl";
    KeyCode[KeyCode["LeftControl"] = 306] = "LeftControl";
    KeyCode[KeyCode["RightAlt"] = 307] = "RightAlt";
    KeyCode[KeyCode["LeftAlt"] = 308] = "LeftAlt";
    KeyCode[KeyCode["RightApple"] = 309] = "RightApple";
    KeyCode[KeyCode["RightCommand"] = 309] = "RightCommand";
    KeyCode[KeyCode["LeftApple"] = 310] = "LeftApple";
    KeyCode[KeyCode["LeftCommand"] = 310] = "LeftCommand";
    KeyCode[KeyCode["LeftWindows"] = 311] = "LeftWindows";
    KeyCode[KeyCode["RightWindows"] = 312] = "RightWindows";
    KeyCode[KeyCode["AltGr"] = 313] = "AltGr";
    KeyCode[KeyCode["Help"] = 315] = "Help";
    KeyCode[KeyCode["Print"] = 316] = "Print";
    KeyCode[KeyCode["SysReq"] = 317] = "SysReq";
    KeyCode[KeyCode["Break"] = 318] = "Break";
    KeyCode[KeyCode["Menu"] = 319] = "Menu";
    KeyCode[KeyCode["Mouse0"] = 323] = "Mouse0";
    KeyCode[KeyCode["Mouse1"] = 324] = "Mouse1";
    KeyCode[KeyCode["Mouse2"] = 325] = "Mouse2";
    KeyCode[KeyCode["Mouse3"] = 326] = "Mouse3";
    KeyCode[KeyCode["Mouse4"] = 327] = "Mouse4";
    KeyCode[KeyCode["Mouse5"] = 328] = "Mouse5";
    KeyCode[KeyCode["Mouse6"] = 329] = "Mouse6";
    KeyCode[KeyCode["JoystickButton0"] = 330] = "JoystickButton0";
    KeyCode[KeyCode["JoystickButton1"] = 331] = "JoystickButton1";
    KeyCode[KeyCode["JoystickButton2"] = 332] = "JoystickButton2";
    KeyCode[KeyCode["JoystickButton3"] = 333] = "JoystickButton3";
    KeyCode[KeyCode["JoystickButton4"] = 334] = "JoystickButton4";
    KeyCode[KeyCode["JoystickButton5"] = 335] = "JoystickButton5";
    KeyCode[KeyCode["JoystickButton6"] = 336] = "JoystickButton6";
    KeyCode[KeyCode["JoystickButton7"] = 337] = "JoystickButton7";
    KeyCode[KeyCode["JoystickButton8"] = 338] = "JoystickButton8";
    KeyCode[KeyCode["JoystickButton9"] = 339] = "JoystickButton9";
    KeyCode[KeyCode["JoystickButton10"] = 340] = "JoystickButton10";
    KeyCode[KeyCode["JoystickButton11"] = 341] = "JoystickButton11";
    KeyCode[KeyCode["JoystickButton12"] = 342] = "JoystickButton12";
    KeyCode[KeyCode["JoystickButton13"] = 343] = "JoystickButton13";
    KeyCode[KeyCode["JoystickButton14"] = 344] = "JoystickButton14";
    KeyCode[KeyCode["JoystickButton15"] = 345] = "JoystickButton15";
    KeyCode[KeyCode["JoystickButton16"] = 346] = "JoystickButton16";
    KeyCode[KeyCode["JoystickButton17"] = 347] = "JoystickButton17";
    KeyCode[KeyCode["JoystickButton18"] = 348] = "JoystickButton18";
    KeyCode[KeyCode["JoystickButton19"] = 349] = "JoystickButton19";
    KeyCode[KeyCode["Joystick1Button0"] = 350] = "Joystick1Button0";
    KeyCode[KeyCode["Joystick1Button1"] = 351] = "Joystick1Button1";
    KeyCode[KeyCode["Joystick1Button2"] = 352] = "Joystick1Button2";
    KeyCode[KeyCode["Joystick1Button3"] = 353] = "Joystick1Button3";
    KeyCode[KeyCode["Joystick1Button4"] = 354] = "Joystick1Button4";
    KeyCode[KeyCode["Joystick1Button5"] = 355] = "Joystick1Button5";
    KeyCode[KeyCode["Joystick1Button6"] = 356] = "Joystick1Button6";
    KeyCode[KeyCode["Joystick1Button7"] = 357] = "Joystick1Button7";
    KeyCode[KeyCode["Joystick1Button8"] = 358] = "Joystick1Button8";
    KeyCode[KeyCode["Joystick1Button9"] = 359] = "Joystick1Button9";
    KeyCode[KeyCode["Joystick1Button10"] = 360] = "Joystick1Button10";
    KeyCode[KeyCode["Joystick1Button11"] = 361] = "Joystick1Button11";
    KeyCode[KeyCode["Joystick1Button12"] = 362] = "Joystick1Button12";
    KeyCode[KeyCode["Joystick1Button13"] = 363] = "Joystick1Button13";
    KeyCode[KeyCode["Joystick1Button14"] = 364] = "Joystick1Button14";
    KeyCode[KeyCode["Joystick1Button15"] = 365] = "Joystick1Button15";
    KeyCode[KeyCode["Joystick1Button16"] = 366] = "Joystick1Button16";
    KeyCode[KeyCode["Joystick1Button17"] = 367] = "Joystick1Button17";
    KeyCode[KeyCode["Joystick1Button18"] = 368] = "Joystick1Button18";
    KeyCode[KeyCode["Joystick1Button19"] = 369] = "Joystick1Button19";
    KeyCode[KeyCode["Joystick2Button0"] = 370] = "Joystick2Button0";
    KeyCode[KeyCode["Joystick2Button1"] = 371] = "Joystick2Button1";
    KeyCode[KeyCode["Joystick2Button2"] = 372] = "Joystick2Button2";
    KeyCode[KeyCode["Joystick2Button3"] = 373] = "Joystick2Button3";
    KeyCode[KeyCode["Joystick2Button4"] = 374] = "Joystick2Button4";
    KeyCode[KeyCode["Joystick2Button5"] = 375] = "Joystick2Button5";
    KeyCode[KeyCode["Joystick2Button6"] = 376] = "Joystick2Button6";
    KeyCode[KeyCode["Joystick2Button7"] = 377] = "Joystick2Button7";
    KeyCode[KeyCode["Joystick2Button8"] = 378] = "Joystick2Button8";
    KeyCode[KeyCode["Joystick2Button9"] = 379] = "Joystick2Button9";
    KeyCode[KeyCode["Joystick2Button10"] = 380] = "Joystick2Button10";
    KeyCode[KeyCode["Joystick2Button11"] = 381] = "Joystick2Button11";
    KeyCode[KeyCode["Joystick2Button12"] = 382] = "Joystick2Button12";
    KeyCode[KeyCode["Joystick2Button13"] = 383] = "Joystick2Button13";
    KeyCode[KeyCode["Joystick2Button14"] = 384] = "Joystick2Button14";
    KeyCode[KeyCode["Joystick2Button15"] = 385] = "Joystick2Button15";
    KeyCode[KeyCode["Joystick2Button16"] = 386] = "Joystick2Button16";
    KeyCode[KeyCode["Joystick2Button17"] = 387] = "Joystick2Button17";
    KeyCode[KeyCode["Joystick2Button18"] = 388] = "Joystick2Button18";
    KeyCode[KeyCode["Joystick2Button19"] = 389] = "Joystick2Button19";
    KeyCode[KeyCode["Joystick3Button0"] = 390] = "Joystick3Button0";
    KeyCode[KeyCode["Joystick3Button1"] = 391] = "Joystick3Button1";
    KeyCode[KeyCode["Joystick3Button2"] = 392] = "Joystick3Button2";
    KeyCode[KeyCode["Joystick3Button3"] = 393] = "Joystick3Button3";
    KeyCode[KeyCode["Joystick3Button4"] = 394] = "Joystick3Button4";
    KeyCode[KeyCode["Joystick3Button5"] = 395] = "Joystick3Button5";
    KeyCode[KeyCode["Joystick3Button6"] = 396] = "Joystick3Button6";
    KeyCode[KeyCode["Joystick3Button7"] = 397] = "Joystick3Button7";
    KeyCode[KeyCode["Joystick3Button8"] = 398] = "Joystick3Button8";
    KeyCode[KeyCode["Joystick3Button9"] = 399] = "Joystick3Button9";
    KeyCode[KeyCode["Joystick3Button10"] = 400] = "Joystick3Button10";
    KeyCode[KeyCode["Joystick3Button11"] = 401] = "Joystick3Button11";
    KeyCode[KeyCode["Joystick3Button12"] = 402] = "Joystick3Button12";
    KeyCode[KeyCode["Joystick3Button13"] = 403] = "Joystick3Button13";
    KeyCode[KeyCode["Joystick3Button14"] = 404] = "Joystick3Button14";
    KeyCode[KeyCode["Joystick3Button15"] = 405] = "Joystick3Button15";
    KeyCode[KeyCode["Joystick3Button16"] = 406] = "Joystick3Button16";
    KeyCode[KeyCode["Joystick3Button17"] = 407] = "Joystick3Button17";
    KeyCode[KeyCode["Joystick3Button18"] = 408] = "Joystick3Button18";
    KeyCode[KeyCode["Joystick3Button19"] = 409] = "Joystick3Button19";
    KeyCode[KeyCode["Joystick4Button0"] = 410] = "Joystick4Button0";
    KeyCode[KeyCode["Joystick4Button1"] = 411] = "Joystick4Button1";
    KeyCode[KeyCode["Joystick4Button2"] = 412] = "Joystick4Button2";
    KeyCode[KeyCode["Joystick4Button3"] = 413] = "Joystick4Button3";
    KeyCode[KeyCode["Joystick4Button4"] = 414] = "Joystick4Button4";
    KeyCode[KeyCode["Joystick4Button5"] = 415] = "Joystick4Button5";
    KeyCode[KeyCode["Joystick4Button6"] = 416] = "Joystick4Button6";
    KeyCode[KeyCode["Joystick4Button7"] = 417] = "Joystick4Button7";
    KeyCode[KeyCode["Joystick4Button8"] = 418] = "Joystick4Button8";
    KeyCode[KeyCode["Joystick4Button9"] = 419] = "Joystick4Button9";
    KeyCode[KeyCode["Joystick4Button10"] = 420] = "Joystick4Button10";
    KeyCode[KeyCode["Joystick4Button11"] = 421] = "Joystick4Button11";
    KeyCode[KeyCode["Joystick4Button12"] = 422] = "Joystick4Button12";
    KeyCode[KeyCode["Joystick4Button13"] = 423] = "Joystick4Button13";
    KeyCode[KeyCode["Joystick4Button14"] = 424] = "Joystick4Button14";
    KeyCode[KeyCode["Joystick4Button15"] = 425] = "Joystick4Button15";
    KeyCode[KeyCode["Joystick4Button16"] = 426] = "Joystick4Button16";
    KeyCode[KeyCode["Joystick4Button17"] = 427] = "Joystick4Button17";
    KeyCode[KeyCode["Joystick4Button18"] = 428] = "Joystick4Button18";
    KeyCode[KeyCode["Joystick4Button19"] = 429] = "Joystick4Button19";
    KeyCode[KeyCode["Joystick5Button0"] = 430] = "Joystick5Button0";
    KeyCode[KeyCode["Joystick5Button1"] = 431] = "Joystick5Button1";
    KeyCode[KeyCode["Joystick5Button2"] = 432] = "Joystick5Button2";
    KeyCode[KeyCode["Joystick5Button3"] = 433] = "Joystick5Button3";
    KeyCode[KeyCode["Joystick5Button4"] = 434] = "Joystick5Button4";
    KeyCode[KeyCode["Joystick5Button5"] = 435] = "Joystick5Button5";
    KeyCode[KeyCode["Joystick5Button6"] = 436] = "Joystick5Button6";
    KeyCode[KeyCode["Joystick5Button7"] = 437] = "Joystick5Button7";
    KeyCode[KeyCode["Joystick5Button8"] = 438] = "Joystick5Button8";
    KeyCode[KeyCode["Joystick5Button9"] = 439] = "Joystick5Button9";
    KeyCode[KeyCode["Joystick5Button10"] = 440] = "Joystick5Button10";
    KeyCode[KeyCode["Joystick5Button11"] = 441] = "Joystick5Button11";
    KeyCode[KeyCode["Joystick5Button12"] = 442] = "Joystick5Button12";
    KeyCode[KeyCode["Joystick5Button13"] = 443] = "Joystick5Button13";
    KeyCode[KeyCode["Joystick5Button14"] = 444] = "Joystick5Button14";
    KeyCode[KeyCode["Joystick5Button15"] = 445] = "Joystick5Button15";
    KeyCode[KeyCode["Joystick5Button16"] = 446] = "Joystick5Button16";
    KeyCode[KeyCode["Joystick5Button17"] = 447] = "Joystick5Button17";
    KeyCode[KeyCode["Joystick5Button18"] = 448] = "Joystick5Button18";
    KeyCode[KeyCode["Joystick5Button19"] = 449] = "Joystick5Button19";
    KeyCode[KeyCode["Joystick6Button0"] = 450] = "Joystick6Button0";
    KeyCode[KeyCode["Joystick6Button1"] = 451] = "Joystick6Button1";
    KeyCode[KeyCode["Joystick6Button2"] = 452] = "Joystick6Button2";
    KeyCode[KeyCode["Joystick6Button3"] = 453] = "Joystick6Button3";
    KeyCode[KeyCode["Joystick6Button4"] = 454] = "Joystick6Button4";
    KeyCode[KeyCode["Joystick6Button5"] = 455] = "Joystick6Button5";
    KeyCode[KeyCode["Joystick6Button6"] = 456] = "Joystick6Button6";
    KeyCode[KeyCode["Joystick6Button7"] = 457] = "Joystick6Button7";
    KeyCode[KeyCode["Joystick6Button8"] = 458] = "Joystick6Button8";
    KeyCode[KeyCode["Joystick6Button9"] = 459] = "Joystick6Button9";
    KeyCode[KeyCode["Joystick6Button10"] = 460] = "Joystick6Button10";
    KeyCode[KeyCode["Joystick6Button11"] = 461] = "Joystick6Button11";
    KeyCode[KeyCode["Joystick6Button12"] = 462] = "Joystick6Button12";
    KeyCode[KeyCode["Joystick6Button13"] = 463] = "Joystick6Button13";
    KeyCode[KeyCode["Joystick6Button14"] = 464] = "Joystick6Button14";
    KeyCode[KeyCode["Joystick6Button15"] = 465] = "Joystick6Button15";
    KeyCode[KeyCode["Joystick6Button16"] = 466] = "Joystick6Button16";
    KeyCode[KeyCode["Joystick6Button17"] = 467] = "Joystick6Button17";
    KeyCode[KeyCode["Joystick6Button18"] = 468] = "Joystick6Button18";
    KeyCode[KeyCode["Joystick6Button19"] = 469] = "Joystick6Button19";
    KeyCode[KeyCode["Joystick7Button0"] = 470] = "Joystick7Button0";
    KeyCode[KeyCode["Joystick7Button1"] = 471] = "Joystick7Button1";
    KeyCode[KeyCode["Joystick7Button2"] = 472] = "Joystick7Button2";
    KeyCode[KeyCode["Joystick7Button3"] = 473] = "Joystick7Button3";
    KeyCode[KeyCode["Joystick7Button4"] = 474] = "Joystick7Button4";
    KeyCode[KeyCode["Joystick7Button5"] = 475] = "Joystick7Button5";
    KeyCode[KeyCode["Joystick7Button6"] = 476] = "Joystick7Button6";
    KeyCode[KeyCode["Joystick7Button7"] = 477] = "Joystick7Button7";
    KeyCode[KeyCode["Joystick7Button8"] = 478] = "Joystick7Button8";
    KeyCode[KeyCode["Joystick7Button9"] = 479] = "Joystick7Button9";
    KeyCode[KeyCode["Joystick7Button10"] = 480] = "Joystick7Button10";
    KeyCode[KeyCode["Joystick7Button11"] = 481] = "Joystick7Button11";
    KeyCode[KeyCode["Joystick7Button12"] = 482] = "Joystick7Button12";
    KeyCode[KeyCode["Joystick7Button13"] = 483] = "Joystick7Button13";
    KeyCode[KeyCode["Joystick7Button14"] = 484] = "Joystick7Button14";
    KeyCode[KeyCode["Joystick7Button15"] = 485] = "Joystick7Button15";
    KeyCode[KeyCode["Joystick7Button16"] = 486] = "Joystick7Button16";
    KeyCode[KeyCode["Joystick7Button17"] = 487] = "Joystick7Button17";
    KeyCode[KeyCode["Joystick7Button18"] = 488] = "Joystick7Button18";
    KeyCode[KeyCode["Joystick7Button19"] = 489] = "Joystick7Button19";
    KeyCode[KeyCode["Joystick8Button0"] = 490] = "Joystick8Button0";
    KeyCode[KeyCode["Joystick8Button1"] = 491] = "Joystick8Button1";
    KeyCode[KeyCode["Joystick8Button2"] = 492] = "Joystick8Button2";
    KeyCode[KeyCode["Joystick8Button3"] = 493] = "Joystick8Button3";
    KeyCode[KeyCode["Joystick8Button4"] = 494] = "Joystick8Button4";
    KeyCode[KeyCode["Joystick8Button5"] = 495] = "Joystick8Button5";
    KeyCode[KeyCode["Joystick8Button6"] = 496] = "Joystick8Button6";
    KeyCode[KeyCode["Joystick8Button7"] = 497] = "Joystick8Button7";
    KeyCode[KeyCode["Joystick8Button8"] = 498] = "Joystick8Button8";
    KeyCode[KeyCode["Joystick8Button9"] = 499] = "Joystick8Button9";
    KeyCode[KeyCode["Joystick8Button10"] = 500] = "Joystick8Button10";
    KeyCode[KeyCode["Joystick8Button11"] = 501] = "Joystick8Button11";
    KeyCode[KeyCode["Joystick8Button12"] = 502] = "Joystick8Button12";
    KeyCode[KeyCode["Joystick8Button13"] = 503] = "Joystick8Button13";
    KeyCode[KeyCode["Joystick8Button14"] = 504] = "Joystick8Button14";
    KeyCode[KeyCode["Joystick8Button15"] = 505] = "Joystick8Button15";
    KeyCode[KeyCode["Joystick8Button16"] = 506] = "Joystick8Button16";
    KeyCode[KeyCode["Joystick8Button17"] = 507] = "Joystick8Button17";
    KeyCode[KeyCode["Joystick8Button18"] = 508] = "Joystick8Button18";
    KeyCode[KeyCode["Joystick8Button19"] = 509] = "Joystick8Button19";
})(KeyCode || (KeyCode = {}));


/***/ }),

/***/ "./src/il2cpp/index.ts":
/*!*****************************!*\
  !*** ./src/il2cpp/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIl2CppContext: () => (/* binding */ createIl2CppContext),
/* harmony export */   createMetadata: () => (/* binding */ createMetadata)
/* harmony export */ });
/* unused harmony export metadataVer */
/* harmony import */ var neverthrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! neverthrow */ "./node_modules/neverthrow/dist/index.es.js");
/* harmony import */ var _utils_binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary */ "./src/utils/binary/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/errors/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// updating this
let metadataVer = 0;
// Records a synthesised lookup name for a method, but never at the cost of a
// name that actually exists in the metadata — a game is free to declare a real
// method literally called `Foo_0` or `Foo_7837`.
function addMethodAlias(bucket, realNames, key, ptr) {
    if (realNames.has(key))
        return;
    bucket[key] = ptr;
}
function createIl2CppContext(buffer, metadata, referencedAssemblies) {
    var _a, _b;
    console.debug("Creating IL2CPP Context");
    if (!buffer || buffer.byteLength === 0) {
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.Il2CppContextCreationError("createIl2CppContext: WASM buffer is empty/null"));
    }
    if (!metadata) {
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.Il2CppContextCreationError("createIl2CppContext: metadata is null"));
    }
    const dataSections = [];
    const reader = new _utils_binary__WEBPACK_IMPORTED_MODULE_1__.BinaryReader(buffer);
    reader.seek(8);
    while (reader.offset < buffer.byteLength) {
        const id = reader.readULEB128();
        const len = reader.readULEB128();
        if (id !== 11) {
            // Skip until we reach data section
            reader.seek(reader.offset + len);
            continue;
        }
        const count = reader.readULEB128();
        for (let i = 0; i < count; i++) {
            const index = reader.readULEB128();
            reader.seek(reader.offset + 1);
            const offset = reader.readULEB128();
            reader.seek(reader.offset + 1);
            // View, not copy — we only immediately memoryBytes.set() this into the
            // virtual address space below.
            const data = reader.readUint8ArrayView(reader.readULEB128());
            dataSections.push({
                index,
                offset,
                data,
            });
        }
        break;
    }
    if (dataSections.length === 0) {
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.Il2CppContextCreationError("createIl2CppContext: no WASM data sections found — binary may be encrypted/malformed"));
    }
    const last = dataSections[dataSections.length - 1];
    const bssStart = last.offset + last.data.length;
    // Allocate only enough space for the data sections (up to bssStart) — the
    // original allocated the entire WASM size which can be tens of MB of dead
    // space we never read or scan.
    const memoryBuffer = new ArrayBuffer(bssStart);
    const memoryReader = new _utils_binary__WEBPACK_IMPORTED_MODULE_1__.BinaryReader(memoryBuffer);
    const memoryBytes = new Uint8Array(memoryBuffer);
    for (let i = 0; i < dataSections.length; i++) {
        const ds = dataSections[i];
        memoryBytes.set(ds.data, ds.offset);
    }
    // Scan range narrowed to bssStart — everything past the last data section is
    // zero-filled and never references the patterns we look for.
    const sectionHelper = getSectionHelper(bssStart, memoryBuffer, bssStart, metadata.methodDefs.length, metadata.originalImageDefCount);
    const codeRegistration = sectionHelper.findCodeRegistration();
    if (codeRegistration === 0) {
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.Il2CppContextCreationError(`createIl2CppContext: failed to locate codeRegistration (imageCount=${metadata.originalImageDefCount}). Game may be unsupported, encrypted, or use a different metadata layout.`));
    }
    const pCodeRegistration = readCodeRegistration(memoryReader, codeRegistration);
    if (!pCodeRegistration.codeGenModulesCount) {
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.Il2CppContextCreationError("createIl2CppContext: codeRegistration has 0 codeGenModules"));
    }
    const pCodeGenModules = readCodeGenModules(memoryReader, pCodeRegistration.codeGenModules, pCodeRegistration.codeGenModulesCount);
    const codeGenModules = {};
    const codeGenModuleMethodPointers = {};
    const referencedSet = referencedAssemblies ? new Set(referencedAssemblies) : null;
    for (let i = 0; i < pCodeGenModules.length; i++) {
        const pCodeGenModule = readCodeGenModule(memoryReader, pCodeGenModules[i]);
        memoryReader.seek(pCodeGenModule.moduleName);
        const moduleName = memoryReader.readNullTerminatedUTF8String();
        if (!referencedSet || !referencedSet.has(moduleName))
            continue;
        codeGenModules[moduleName] = pCodeGenModule;
        const methodPointers = readCodeGenModuleMethodPointers(memoryReader, pCodeGenModule.methodPointers, pCodeGenModule.methodPointerCount);
        codeGenModuleMethodPointers[moduleName] = methodPointers;
    }
    // Prototype-less dictionary objects — avoids hidden-class churn and inherited
    // property checks for the (potentially tens of thousands of) string keys that
    // get added here.
    const scriptData = Object.create(null);
    // Tracks how many times each "TypeName::methodName" has been seen so that
    // overloads can be numbered _0, _1, _2 … in encounter order.
    const overloadCounters = new Map();
    // Method names that came straight out of the metadata, as opposed to the
    // `_0` / `_<ptr>` aliases synthesised below. A real name always wins a
    // collision with an alias, whichever order they're encountered in.
    const realNames = new Map();
    const metadataReader = new _utils_binary__WEBPACK_IMPORTED_MODULE_1__.BinaryReader(metadata.buffer);
    // Build index lookups once; the previous .find() inside the inner loops was
    // O(typeDefs * methodDefs) per image and is the largest hot-loop cost here.
    const typeDefsByIndex = new Map();
    for (const def of metadata.typeDefs) {
        if (def.typeIndex !== undefined)
            typeDefsByIndex.set(def.typeIndex, def);
    }
    const methodDefsByIndex = new Map();
    for (const def of metadata.methodDefs) {
        if (def.methodIndex !== undefined)
            methodDefsByIndex.set(def.methodIndex, def);
    }
    const stringOffset = (_a = metadata.header.stringOffset) !== null && _a !== void 0 ? _a : metadata.header.stringsOffset;
    for (let j = 0; j < metadata.imageDefs.length; j++) {
        const imageDef = metadata.imageDefs[j];
        const imageName = getStringFromIndex(metadataReader, stringOffset, imageDef.nameIndex);
        // Hoist the method-pointers table lookup out of the per-method loop.
        // If this image isn't referenced (no codeGenModule entry) we can skip
        // every type and method in the image without parsing strings.
        const ptrs = codeGenModuleMethodPointers[imageName];
        if (!ptrs)
            continue;
        const typeEnd = imageDef.typeStart + imageDef.typeCount;
        for (let k = imageDef.typeStart; k < typeEnd; k++) {
            const typeDef = typeDefsByIndex.get(k);
            if (!typeDef)
                continue;
            const typeName = getStringFromIndex(metadataReader, stringOffset, typeDef.nameIndex);
            const namespaceName = getStringFromIndex(metadataReader, stringOffset, typeDef.namespaceIndex);
            const fullTypeName = namespaceName === "" ? typeName : namespaceName + "." + typeName;
            let typeBucket = scriptData[fullTypeName];
            if (!typeBucket) {
                typeBucket = Object.create(null);
                scriptData[fullTypeName] = typeBucket;
            }
            let typeRealNames = realNames.get(fullTypeName);
            if (!typeRealNames) {
                typeRealNames = new Set();
                realNames.set(fullTypeName, typeRealNames);
            }
            const methodEnd = typeDef.methodStart + typeDef.method_count;
            for (let l = typeDef.methodStart; l < methodEnd; l++) {
                const methodDef = methodDefsByIndex.get(l);
                if (!methodDef)
                    continue;
                const methodName = getStringFromIndex(metadataReader, stringOffset, methodDef.nameIndex);
                const methodPointerIndex = methodDef.token & 0x00ffffff;
                const ptr = ptrs[methodPointerIndex - 1];
                const overloadKey = `${fullTypeName}::${methodName}`;
                const overloadCount = (_b = overloadCounters.get(overloadKey)) !== null && _b !== void 0 ? _b : 0;
                overloadCounters.set(overloadKey, overloadCount + 1);
                // A method whose pointer index falls outside the module's pointer
                // table has nothing callable behind it — recording `undefined`
                // would only shadow a usable alias later.
                if (typeof ptr !== "number")
                    continue;
                if (overloadCount === 0) {
                    // The plain name always stays resolvable and points at the
                    // first overload. The previous build deleted it the moment a
                    // second overload appeared, which broke `call(type, "Method")`
                    // for every overloaded method in the game.
                    typeBucket[methodName] = ptr;
                    typeRealNames.add(methodName);
                }
                // Positional aliases (`Method_0`, `Method_1`, …) — the scheme the
                // `overloadIndex` hook/call option selects with.
                addMethodAlias(typeBucket, typeRealNames, `${methodName}_${overloadCount}`, ptr);
                // Pointer-suffixed aliases (`Method_7837`) — the naming the
                // pre-rewrite loader emitted. Plugin scripts written against that
                // build hard-code these names, so keep resolving them.
                addMethodAlias(typeBucket, typeRealNames, `${methodName}_${ptr}`, ptr);
            }
        }
    }
    // Leave typeIndex/methodIndex intact so this function remains idempotent —
    // previously deleting them broke any subsequent context rebuild.
    return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.ok)({
        codeGenModules,
        codeGenModuleMethodPointers,
        scriptData,
        name: "il2cpp",
    });
}
function createMetadata(buffer, referencedAssemblies) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        console.debug("Creating Metadata");
        if (!buffer || buffer.byteLength < 8) {
            return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.MetadataParsingError(`createMetadata: buffer is empty or too small (${(_a = buffer === null || buffer === void 0 ? void 0 : buffer.byteLength) !== null && _a !== void 0 ? _a : "null"} bytes) — global-metadata.dat may be missing or truncated`));
        }
        const reader = new _utils_binary__WEBPACK_IMPORTED_MODULE_1__.BinaryReader(buffer);
        const sanity = reader.readUint32();
        if (sanity !== 0xfab11baf)
            return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.MetadataParsingError("Metadata file supplied is not a valid metadata file."));
        const version = reader.readUint32();
        metadataVer = version;
        if (version < 0 || version > 1000)
            return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.MetadataParsingError("Metadata file supplied is not a valid metadata file."));
        // TODO: Support more metadata versions
        if (!(version == 31 || version == 29 || version == 35 || version == 39))
            return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.err)(new _errors__WEBPACK_IMPORTED_MODULE_2__.MetadataParsingError(`Metadata file supplied is not a supported version [${version}].`));
        reader.seek(0);
        const header = readHeader(reader, version);
        // Calculate index sizes for v38+
        const getIndexSize = (count) => {
            if (count <= 0xff)
                return 1;
            if (count <= 0xffff)
                return 2;
            return 4;
        };
        const typeIndexSize = version >= 38 ? header.parametersSize / header.parametersCount - 8 : 4;
        const typeDefinitionIndexSize = version >= 38 ? getIndexSize(header.typeDefinitionsCount) : 4;
        const genericContainerIndexSize = version >= 38 ? getIndexSize(header.genericContainersCount) : 4;
        const parameterIndexSize = version >= 38 ? getIndexSize(header.parametersCount) : 4;
        const indexSizes = {
            typeIndex: typeIndexSize,
            typeDefinitionIndex: typeDefinitionIndexSize,
            genericContainerIndex: genericContainerIndexSize,
            parameterIndex: parameterIndexSize,
        };
        // Helper to resolve offset/size field from the header, supporting both v<38 (e.g. imagesOffset) and v38+ (imagesOffset from "images" section)
        const hOffset = (legacyOffsetName, newSectionName) => { var _a, _b; return version >= 38 ? (_a = header[newSectionName + "Offset"]) !== null && _a !== void 0 ? _a : 0 : (_b = header[legacyOffsetName]) !== null && _b !== void 0 ? _b : 0; };
        const hSize = (legacySizeName, newSectionName) => { var _a, _b; return version >= 38 ? (_a = header[newSectionName + "Size"]) !== null && _a !== void 0 ? _a : 0 : (_b = header[legacySizeName]) !== null && _b !== void 0 ? _b : 0; };
        const hCount = (newSectionName) => { var _a; return (version >= 38 ? (_a = header[newSectionName + "Count"]) !== null && _a !== void 0 ? _a : 0 : 0); };
        const imageOffset = hOffset("imagesOffset", "images");
        const imageSize = hSize("imagesSize", "images");
        const imageDefs = readImageDefinitions(reader, imageOffset, imageSize, indexSizes, version);
        const referencedImageDefs = [];
        // Switch the include() check to Set.has() once per image — cheap, and avoids
        // the per-call linear scan when the assembly list is non-trivial.
        const referencedSet = referencedAssemblies ? new Set(referencedAssemblies) : null;
        for (let i = 0, len = imageDefs.length; i < len; i++) {
            const imageDef = imageDefs[i];
            const imageName = getStringFromIndex(reader, hOffset("stringOffset", "strings"), imageDef.nameIndex);
            if (referencedSet === null || referencedSet === void 0 ? void 0 : referencedSet.has(imageName))
                referencedImageDefs.push(imageDef);
        }
        let typeDefs = readTypeDefinitions(reader, hOffset("typeDefinitionsOffset", "typeDefinitions"), hSize("typeDefinitionsSize", "typeDefinitions"), referencedImageDefs, indexSizes, version);
        // Read only the method ranges declared by referenced typedefs. The total
        // method count in a typical Unity build is in the hundreds of thousands;
        // referenced assemblies usually cover < 10% of them.
        const methodsOffset = hOffset("methodsOffset", "methods");
        const methodsSize = hSize("methodsSize", "methods");
        const methodDefs = readMethodDefinitionsSparse(reader, methodsOffset, methodsSize, typeDefs, indexSizes);
        const totalMethodCount = computeTotalMethodCount(methodsSize, indexSizes);
        return (0,neverthrow__WEBPACK_IMPORTED_MODULE_0__.ok)({
            buffer,
            header,
            imageDefs: referencedImageDefs,
            typeDefs,
            methodDefs,
            originalImageDefCount: imageDefs.length,
            originalMethodDefCount: totalMethodCount,
            version,
            name: "metadata",
            referencedAssemblies,
            integrityHash: "",
        });
    });
}
function getStringFromIndex(reader, base, offset) {
    reader.seek(base + offset);
    return reader.readNullTerminatedUTF8String();
}
function isReferencedType(imageDefinitions, typeDefinitionsOffset, readerOffset, typeDefStructSize) {
    for (const imageDef of imageDefinitions) {
        let typeStart = imageDef.typeStart * typeDefStructSize + typeDefinitionsOffset;
        let typeCount = imageDef.typeCount * typeDefStructSize;
        let typeEnd = typeStart + typeCount;
        if (readerOffset >= typeStart && readerOffset < typeEnd) {
            return true;
        }
    }
    return false;
}
function readHeader(reader, version) {
    if (version >= 38) {
        const sanity = reader.readUint32();
        const ver = reader.readInt32();
        const header = { sanity, version: ver };
        const fields = [
            "stringLiterals",
            "stringLiteralData",
            "strings",
            "events",
            "properties",
            "methods",
            "parameterDefaultValues",
            "fieldDefaultValues",
            "fieldAndParameterDefaultValueData",
            "fieldMarshaledSizes",
            "parameters",
            "fields",
            "genericParameters",
            "genericParameterConstraints",
            "genericContainers",
            "nestedTypes",
            "interfaces",
            "vtableMethods",
            "interfaceOffsets",
            "typeDefinitions",
            "images",
            "assemblies",
            "fieldRefs",
            "referencedAssemblies",
            "attributeData",
            "attributeDataRanges",
            "unresolvedIndirectCallParameterTypes",
            "unresolvedIndirectCallParameterRanges",
            "windowsRuntimeTypeNames",
            "windowsRuntimeStrings",
            "exportedTypeDefinitions",
        ];
        for (const f of fields) {
            header[f + "Offset"] = reader.readUint32();
            header[f + "Size"] = reader.readInt32();
            header[f + "Count"] = reader.readUint32();
        }
        return header;
    }
    return {
        sanity: reader.readUint32(),
        version: reader.readInt32(),
        stringLiteralOffset: reader.readUint32(),
        stringLiteralSize: reader.readInt32(),
        stringLiteralDataOffset: reader.readUint32(),
        stringLiteralDataSize: reader.readInt32(),
        stringOffset: reader.readUint32(),
        stringSize: reader.readInt32(),
        eventsOffset: reader.readUint32(),
        eventsSize: reader.readInt32(),
        propertiesOffset: reader.readUint32(),
        propertiesSize: reader.readInt32(),
        methodsOffset: reader.readUint32(),
        methodsSize: reader.readInt32(),
        parameterDefaultValuesOffset: reader.readUint32(),
        parameterDefaultValuesSize: reader.readInt32(),
        fieldDefaultValuesOffset: reader.readUint32(),
        fieldDefaultValuesSize: reader.readInt32(),
        fieldAndParameterDefaultValueDataOffset: reader.readUint32(),
        fieldAndParameterDefaultValueDataSize: reader.readInt32(),
        fieldMarshaledSizesOffset: reader.readInt32(),
        fieldMarshaledSizesSize: reader.readInt32(),
        parametersOffset: reader.readUint32(),
        parametersSize: reader.readInt32(),
        fieldsOffset: reader.readUint32(),
        fieldsSize: reader.readInt32(),
        genericParametersOffset: reader.readUint32(),
        genericParametersSize: reader.readInt32(),
        genericParameterConstraintsOffset: reader.readUint32(),
        genericParameterConstraintsSize: reader.readInt32(),
        genericContainersOffset: reader.readUint32(),
        genericContainersSize: reader.readInt32(),
        nestedTypesOffset: reader.readUint32(),
        nestedTypesSize: reader.readInt32(),
        interfacesOffset: reader.readUint32(),
        interfacesSize: reader.readInt32(),
        vtableMethodsOffset: reader.readUint32(),
        vtableMethodsSize: reader.readInt32(),
        interfaceOffsetsOffset: reader.readInt32(),
        interfaceOffsetsSize: reader.readInt32(),
        typeDefinitionsOffset: reader.readUint32(),
        typeDefinitionsSize: reader.readInt32(),
        /*rgctxEntriesOffset: reader.readUint32(), Max v24.1
            //rgctxEntriesCount: reader.readInt32(),*/
        imagesOffset: reader.readUint32(),
        imagesSize: reader.readInt32(),
        assembliesOffset: reader.readUint32(),
        assembliesSize: reader.readInt32(),
        /*metadataUsageListsOffset: reader.readUint32(), Max v24.5
            metadataUsageListsCount: reader.readInt32(),
            metadataUsagePairsOffset: reader.readUint32(),
            metadataUsagePairsCount: reader.readInt32(),*/
        fieldRefsOffset: reader.readUint32(),
        fieldRefsSize: reader.readInt32(),
        referencedAssembliesOffset: reader.readInt32(),
        referencedAssembliesSize: reader.readInt32(),
        /*attributesInfoOffset: reader.readUint32(), Max v27.2
            attributesInfoCount: reader.readInt32(),
            attributeTypesOffset: reader.readUint32(),
            attributeTypesCount: reader.readInt32(),*/
        attributeDataOffset: reader.readUint32(),
        attributeDataSize: reader.readInt32(),
        attributeDataRangeOffset: reader.readUint32(),
        attributeDataRangeSize: reader.readInt32(),
        unresolvedVirtualCallParameterTypesOffset: reader.readInt32(),
        unresolvedVirtualCallParameterTypesSize: reader.readInt32(),
        unresolvedVirtualCallParameterRangesOffset: reader.readInt32(),
        unresolvedVirtualCallParameterRangesSize: reader.readInt32(),
        windowsRuntimeTypeNamesOffset: reader.readInt32(),
        windowsRuntimeTypeNamesSize: reader.readInt32(),
        windowsRuntimeStringsOffset: reader.readInt32(),
        windowsRuntimeStringsSize: reader.readInt32(),
        exportedTypeDefinitionsOffset: reader.readInt32(),
        exportedTypeDefinitionsSize: reader.readInt32(),
    };
}
function readImageDefinitions(reader, offset, size, indexSizes, version) {
    if (offset === 0 || size === 0) {
        console.error("[readImageDefinitions] offset or size is 0 — header was parsed incorrectly!");
        return [];
    }
    reader.seek(offset);
    const imageDefinitions = [];
    const imagesEnd = offset + size;
    while (reader.offset < imagesEnd) {
        imageDefinitions.push({
            nameIndex: reader.readUint32(),
            assemblyIndex: reader.readInt32(),
            typeStart: reader.readIndex(indexSizes.typeDefinitionIndex),
            typeCount: reader.readUint32(),
            exportedTypeStart: version >= 24 ? reader.readIndex(indexSizes.typeDefinitionIndex) : 0,
            exportedTypeCount: version >= 24 ? reader.readUint32() : 0,
            entryPointIndex: reader.readInt32(),
            token: version >= 19 ? reader.readUint32() : 0,
            customAttributeStart: version >= 24.1 ? reader.readInt32() : 0,
            customAttributeCount: version >= 24.1 ? reader.readUint32() : 0,
        });
    }
    return imageDefinitions;
}
// updated
function readTypeDefinitions(reader, offset, size, imageDefinitions, indexSizes, version) {
    console.debug("Reading Type Defs");
    // Compute the per-struct byte size based on what we actually read:
    // 2x uint32 (nameIndex, namespaceIndex) = 8
    // byvalTypeIndex(typeIndex), declaringTypeIndex(typeDef), parentIndex(typeIndex) = 3 * typeIndex or mixed
    // elementTypeIndex only for version < 35 = typeIndex
    // genericContainerIndex = genericContainerIndex
    // flags (uint32) = 4
    // fieldStart..interfaceOffsetsStart = 8 x int32 = 32
    // 8 x uint16 (counts) = 16
    // bitfield + token = 8
    const sz = indexSizes;
    const typeDefStructSize = 8 + // nameIndex, namespaceIndex
        sz.typeIndex + // byvalTypeIndex
        sz.typeDefinitionIndex + // declaringTypeIndex
        sz.typeIndex + // parentIndex
        (version < 35 ? sz.typeIndex : 0) + // elementTypeIndex
        sz.genericContainerIndex + // genericContainerIndex
        4 + // flags
        8 * 4 + // fieldStart..interfaceOffsetsStart (8 x int32)
        8 * 2 + // method_count..interface_offsets_count (8 x uint16)
        4 +
        4; // bitfield, token
    // Random-access each referenced image's [typeStart, typeStart + typeCount)
    // range and parse only those entries, instead of reading every typedef in
    // the metadata (often 100k+) and filtering after the fact. The byte ranges
    // are non-overlapping by construction.
    const typeDefinitions = [];
    const totalTypeCount = Math.floor(size / typeDefStructSize);
    const sortedImages = imageDefinitions.slice().sort((a, b) => a.typeStart - b.typeStart);
    for (const imageDef of sortedImages) {
        const start = imageDef.typeStart;
        const end = Math.min(start + imageDef.typeCount, totalTypeCount);
        if (end <= start)
            continue;
        reader.seek(offset + start * typeDefStructSize);
        for (let i = start; i < end; i++) {
            typeDefinitions.push({
                typeIndex: i,
                nameIndex: reader.readUint32(),
                namespaceIndex: reader.readUint32(),
                byvalTypeIndex: reader.readIndex(indexSizes.typeIndex),
                declaringTypeIndex: reader.readIndex(indexSizes.typeDefinitionIndex),
                parentIndex: reader.readIndex(indexSizes.typeIndex),
                elementTypeIndex: version < 35 ? reader.readIndex(indexSizes.typeIndex) : 0,
                genericContainerIndex: reader.readIndex(indexSizes.genericContainerIndex),
                flags: reader.readUint32(),
                fieldStart: reader.readInt32(),
                methodStart: reader.readInt32(),
                eventStart: reader.readInt32(),
                propertyStart: reader.readInt32(),
                nestedTypesStart: reader.readInt32(),
                interfacesStart: reader.readInt32(),
                vtableStart: reader.readInt32(),
                interfaceOffsetsStart: reader.readInt32(),
                method_count: reader.readUint16(),
                property_count: reader.readUint16(),
                field_count: reader.readUint16(),
                event_count: reader.readUint16(),
                nested_type_count: reader.readUint16(),
                vtable_count: reader.readUint16(),
                interfaces_count: reader.readUint16(),
                interface_offsets_count: reader.readUint16(),
                bitfield: reader.readUint32(),
                token: reader.readUint32(),
            });
        }
    }
    return typeDefinitions;
}
function methodDefStructSize(indexSizes) {
    // Mirrors the bytes consumed per entry by readSingleMethodDefinition.
    return (4 + // nameIndex
        indexSizes.typeDefinitionIndex + // declaringType
        indexSizes.typeIndex + // returnType
        4 + // returnParameterToken
        indexSizes.parameterIndex + // parameterStart
        indexSizes.genericContainerIndex + // genericContainerIndex
        4 + // token
        2 * 4 // flags, iflags, slot, parameterCount (uint16 each)
    );
}
function computeTotalMethodCount(size, indexSizes) {
    const struct = methodDefStructSize(indexSizes);
    return struct > 0 ? Math.floor(size / struct) : 0;
}
function readSingleMethodDefinition(reader, indexSizes, methodIndex) {
    return {
        methodIndex,
        nameIndex: reader.readUint32(),
        declaringType: reader.readIndex(indexSizes.typeDefinitionIndex),
        returnType: reader.readIndex(indexSizes.typeIndex),
        returnParameterToken: reader.readInt32(),
        parameterStart: reader.readIndex(indexSizes.parameterIndex),
        genericContainerIndex: reader.readIndex(indexSizes.genericContainerIndex),
        token: reader.readUint32(),
        flags: reader.readUint16(),
        iflags: reader.readUint16(),
        slot: reader.readUint16(),
        parameterCount: reader.readUint16(),
    };
}
// Parses only the [methodStart, methodStart + method_count) ranges declared by
// referenced typeDefs, instead of every method in the metadata. Ranges are
// merged so overlapping/adjacent regions parse once.
function readMethodDefinitionsSparse(reader, offset, size, typeDefs, indexSizes) {
    const structSize = methodDefStructSize(indexSizes);
    const total = computeTotalMethodCount(size, indexSizes);
    // Collect [start, end) ranges, sort, then coalesce adjacent/overlapping ones.
    const ranges = [];
    for (const t of typeDefs) {
        if (t.method_count === 0)
            continue;
        const start = t.methodStart;
        if (start < 0)
            continue;
        const end = Math.min(start + t.method_count, total);
        if (end > start)
            ranges.push([start, end]);
    }
    if (ranges.length === 0)
        return [];
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
        const tail = merged[merged.length - 1];
        if (ranges[i][0] <= tail[1]) {
            if (ranges[i][1] > tail[1])
                tail[1] = ranges[i][1];
        }
        else {
            merged.push(ranges[i]);
        }
    }
    const methodDefinitions = [];
    for (const [start, end] of merged) {
        reader.seek(offset + start * structSize);
        for (let i = start; i < end; i++) {
            methodDefinitions.push(readSingleMethodDefinition(reader, indexSizes, i));
        }
    }
    return methodDefinitions;
}
function readCodeRegistration(reader, offset) {
    console.debug("Reading Code Registration");
    reader.seek(offset);
    return {
        reversePInvokeWrapperCount: reader.readUint32(),
        reversePInvokeWrappers: reader.readUint32(),
        genericMethodPointersCount: reader.readUint32(),
        genericMethodPointers: reader.readUint32(),
        genericAdjustorThunks: reader.readUint32(),
        invokerPointersCount: reader.readUint32(),
        invokerPointers: reader.readUint32(),
        unresolvedVirtualCallCount: reader.readUint32(),
        unresolvedVirtualCallPointers: reader.readUint32(),
        interopDataCount: reader.readUint32(),
        interopData: reader.readUint32(),
        windowsRuntimeFactoryCount: reader.readUint32(),
        windowsRuntimeFactoryTable: reader.readUint32(),
        codeGenModulesCount: reader.readUint32(),
        codeGenModules: reader.readUint32(),
    };
}
function readCodeGenModules(reader, offset, size) {
    console.debug("Reading CodeGen Modules");
    if (size === 0)
        return [];
    // Bulk-read all module pointers in one typed-array view instead of
    // size individual readUint32() calls.  Unity guarantees 4-byte alignment.
    if (offset % 4 === 0 && offset + size * 4 <= reader.buffer.byteLength) {
        const u32 = new Uint32Array(reader.buffer, offset, size);
        const modules = new Array(size);
        for (let i = 0; i < size; i++)
            modules[i] = u32[i];
        return modules;
    }
    reader.seek(offset);
    const modules = new Array(size);
    for (let i = 0; i < size; i++)
        modules[i] = reader.readUint32();
    return modules;
}
function readCodeGenModule(reader, offset) {
    reader.seek(offset);
    return {
        moduleName: reader.readUint32(),
        methodPointerCount: reader.readInt32(),
        methodPointers: reader.readUint32(),
        adjustorThunkCount: reader.readInt32(),
        adjustorThunks: reader.readUint32(),
        invokerIndices: reader.readUint32(),
        reversePInvokeWrapperCount: reader.readUint32(),
        reversePInvokeWrapperIndices: reader.readUint32(),
        rgctxRangesCount: reader.readInt32(),
        rgctxRanges: reader.readUint32(),
        rgctxsCount: reader.readInt32(),
        rgctxs: reader.readUint32(),
        debuggerMetadata: reader.readUint32(),
        moduleInitializer: reader.readUint32(),
        staticConstructorTypeIndices: reader.readUint32(),
        metadataRegistration: reader.readUint32(),
        codeRegistration: reader.readUint32(),
    };
}
function readCodeGenModuleMethodPointers(reader, offset, size) {
    if (size === 0)
        return [];
    // Bulk-read via Uint32Array view.  Avoids up to 50k+ readUint32() calls per module.
    // Unity's WASM data layout guarantees 4-byte alignment for pointer arrays.
    if (offset % 4 === 0 && offset + size * 4 <= reader.buffer.byteLength) {
        const u32 = new Uint32Array(reader.buffer, offset, size);
        const ptrs = new Array(size);
        for (let i = 0; i < size; i++)
            ptrs[i] = u32[i];
        return ptrs;
    }
    reader.seek(offset);
    const ptrs = new Array(size);
    for (let i = 0; i < size; i++)
        ptrs[i] = reader.readUint32();
    return ptrs;
}
function getSectionHelper(length, memoryBuffer, bssStart, methodCount, imageCount) {
    const exec = {
        offset: 0,
        offsetEnd: methodCount,
        address: 0,
        addressEnd: methodCount,
    };
    const data = {
        offset: 1024,
        offsetEnd: length,
        address: 1024,
        addressEnd: length,
    };
    const bss = {
        offset: bssStart,
        offsetEnd: BigInt(9223372036854775807),
        address: bssStart,
        addressEnd: BigInt(9223372036854775807),
    };
    const sectionHelper = new SectionHelper(memoryBuffer, imageCount);
    sectionHelper.setExecSection(exec);
    sectionHelper.setDataSection(data);
    sectionHelper.setBssSection(bss);
    return sectionHelper;
}
class SectionHelper {
    constructor(memoryBuffer, imageCount) {
        this.exec = [];
        this.data = [];
        this.bss = [];
        this.memoryReader = new _utils_binary__WEBPACK_IMPORTED_MODULE_1__.BinaryReader(memoryBuffer);
        this.memoryBuffer = memoryBuffer;
        this.imageCount = imageCount;
    }
    setExecSection(exec) {
        this.exec.push(exec);
    }
    setDataSection(data) {
        this.data.push(data);
    }
    setBssSection(bss) {
        this.bss.push(bss);
    }
    findCodeRegistration() {
        let codeRegistration = this.findCodeRegistrationData();
        return codeRegistration;
    }
    findCodeRegistrationData() {
        return this.findCodeRegistration2019(this.data);
    }
    buildValueIndex() {
        if (this.valueIndex)
            return;
        // Open-addressing bucket index over every 4-byte-aligned word in the data
        // sections, stored entirely in typed arrays.
        //
        // This used to be a Map<number, number[]>: one Map entry plus one heap
        // Array per distinct word. A Unity data segment holds a few million
        // words, so that allocated millions of short-lived objects and spent
        // more time in GC than the rest of the load put together. The chains
        // here are two Int32Arrays and cost ~12 bytes per word with no GC churn.
        const indexes = [];
        const bufLen = this.memoryBuffer.byteLength;
        for (let i = 0; i < this.data.length; i++) {
            const dataSec = this.data[i];
            const start = dataSec.offset;
            const end = Math.min(dataSec.offsetEnd, bufLen) - 4;
            if (end < start) {
                indexes.push(null);
                continue;
            }
            const count = Math.floor((end - start) / 4) + 1;
            // start is always 1024 (set in getSectionHelper), so the view is aligned;
            // copy through a DataView on the off chance a caller changes that.
            let values;
            if (start % 4 === 0) {
                values = new Uint32Array(this.memoryBuffer, start, count);
            }
            else {
                values = new Uint32Array(count);
                const view = new DataView(this.memoryBuffer);
                for (let j = 0; j < count; j++)
                    values[j] = view.getUint32(start + j * 4, true);
            }
            let capacity = 16;
            while (capacity < count * 2)
                capacity *= 2;
            const mask = capacity - 1;
            const head = new Int32Array(capacity).fill(-1);
            const next = new Int32Array(count);
            // Insert back-to-front so each chain walks in ascending position order,
            // matching the order the old Map-of-arrays produced. findCodeRegistration
            // returns its first viable candidate, so this ordering is load-bearing.
            for (let j = count - 1; j >= 0; j--) {
                const h = (Math.imul(values[j], 2654435761) >>> 17) & mask;
                next[j] = head[h];
                head[h] = j;
            }
            indexes.push({ values, head, next, mask, start });
        }
        this.valueIndex = indexes;
    }
    findCodeRegistration2019(secs) {
        this.buildValueIndex();
        for (let i = 0; i < secs.length; i++) {
            const sec = secs[i];
            this.memoryReader.seek(sec.offset);
            const buff = this.memoryReader.readUint8ArrayView(sec.offsetEnd - sec.offset);
            const matches = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.patternSearch)(buff, SectionHelper.featureBytes);
            for (let j = 0; j < matches.length; j++) {
                const dllva = matches[j] + sec.address;
                const refvas = this.findReference(dllva);
                for (let k = 0; k < refvas.length; k++) {
                    const refva = refvas[k];
                    const refva2s = this.findReference(refva);
                    for (let l = 0; l < refva2s.length; l++) {
                        const refva2 = refva2s[l];
                        for (let m = this.imageCount - 1; m >= 0; m--) {
                            const refva3s = this.findReference(refva2 - m * 4);
                            for (let n = 0; n < refva3s.length; n++) {
                                const refva3 = refva3s[n];
                                this.memoryReader.seek(refva3 - 4);
                                if (this.memoryReader.readInt32() === this.imageCount) {
                                    return refva3 - 4 * 14;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
    findReference(addr) {
        // Returns "addresses" (offsets translated by dataSec.address - dataSec.offset).
        // With the prebuilt index this is O(matches) instead of O(section size).
        this.buildValueIndex(); // no-op once built
        const references = [];
        const indexes = this.valueIndex;
        const needle = addr >>> 0;
        if (needle !== addr)
            return references; // negative / non-uint32 can't appear in the index
        for (let i = 0; i < this.data.length; i++) {
            const idx = indexes[i];
            if (!idx)
                continue;
            const dataSec = this.data[i];
            const delta = dataSec.address - dataSec.offset + idx.start;
            const values = idx.values;
            const next = idx.next;
            let j = idx.head[(Math.imul(needle, 2654435761) >>> 17) & idx.mask];
            while (j !== -1) {
                if (values[j] === needle)
                    references.push(j * 4 + delta);
                j = next[j];
            }
        }
        return references;
    }
}
SectionHelper.featureBytes = new Uint8Array([0x6d, 0x73, 0x63, 0x6f, 0x72, 0x6c, 0x69, 0x62, 0x2e, 0x64, 0x6c, 0x6c, 0x00]);


/***/ }),

/***/ "./src/logger/index.ts":
/*!*****************************!*\
  !*** ./src/logger/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 8] = "DEBUG";
    LogLevel[LogLevel["MESSAGE"] = 16] = "MESSAGE";
    LogLevel[LogLevel["ALL"] = 31] = "ALL";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(name) {
        this.name = name;
    }
    error(...args) {
        this.log(LogLevel.ERROR, ...args);
    }
    warn(...args) {
        this.log(LogLevel.WARN, ...args);
    }
    info(...args) {
        this.log(LogLevel.INFO, ...args);
    }
    debug(...args) {
        this.log(LogLevel.DEBUG, ...args);
    }
    message(...args) {
        this.log(LogLevel.MESSAGE, ...args);
    }
    log(level, ...args) {
        if (this.shouldLog(level) && args.length > 0) {
            const logPrefix = `%c[${this.name}] %c[${LogLevel[level]}]%c`;
            let message = args.shift();
            if (typeof message !== "string") {
                args.push(message);
                message = "";
            }
            else {
                message = " " + message;
            }
            let logStyles = "color: #fff;";
            let messageStyles;
            switch (level) {
                case LogLevel.ERROR:
                    messageStyles = "color: #FF6E74;";
                    break;
                case LogLevel.WARN:
                    messageStyles = "color: #FFB36A;";
                    break;
                case LogLevel.INFO:
                    messageStyles = "color: #35EA93;";
                    break;
                case LogLevel.DEBUG:
                    messageStyles = "color: #BE7CFF;";
                    break;
                case LogLevel.MESSAGE:
                    messageStyles = "color: #56C4FF;";
                    break;
            }
            console.log(logPrefix + message, logStyles, messageStyles, "color: default;", ...args);
        }
    }
    shouldLog(level) {
        if (level === LogLevel.DEBUG)
            // @ts-ignore
            return true;
        return true;
    }
}


/***/ }),

/***/ "./src/mod.ts":
/*!********************!*\
  !*** ./src/mod.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyCode: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_2__.KeyCode),
/* harmony export */   LogLevel: () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_1__.LogLevel),
/* harmony export */   Logger: () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_1__.Logger),
/* harmony export */   Runtime: () => (/* binding */ Runtime),
/* harmony export */   ValueWrapper: () => (/* reexport safe */ _runtime__WEBPACK_IMPORTED_MODULE_0__.ValueWrapper),
/* harmony export */   dataTypeSizes: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_2__.dataTypeSizes),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime */ "./src/runtime/index.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/logger/index.ts");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extras */ "./src/extras/index.ts");
// Exports


const Runtime = new _runtime__WEBPACK_IMPORTED_MODULE_0__.Runtime();


// @ts-ignore Set by webpack at bundle time
const version = "1.1.0";


/***/ }),

/***/ "./src/preloader/index.ts":
/*!********************************!*\
  !*** ./src/preloader/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preload: () => (/* binding */ preload)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/logger/index.ts");
/* harmony import */ var _web_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-data */ "./src/web-data/index.ts");
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mod */ "./src/mod.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const logger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger("Preloader");
function preload() {
    logger.info("UnityWebModkit v%s - %s", _mod__WEBPACK_IMPORTED_MODULE_2__.version, window.location.hostname);
    // @ts-ignore Set by webpack at bundle time
    logger.info("Build hash: %s", __webpack_require__.h());
    return preloadInternal();
}
function preloadInternal() {
    return __awaiter(this, void 0, void 0, function* () {
        // Install the fetch hook FIRST before any async work, so we never miss
        // a Unity request that fires during or before cache clearing.
        logger.debug("[Preloader] Installing fetch hook early...");
        const webDataPromise = fallbackInterceptFetch();
        // Fire-and-forget the cache clear: the fetch hook is already in place, so
        // even if Unity races us we'll still intercept its requests. Awaiting
        // serially added hundreds of ms to first paint on cold loads.
        logger.debug("[Preloader] Clearing Unity caches (in parallel)...");
        void clearUnityCache();
        logger.debug("[Preloader] Waiting for Unity web data...");
        return yield webDataPromise;
    });
}
// ---------------------------------------------------------------------------
// Cache Clearing Utilities
// ---------------------------------------------------------------------------
function clearUnityIndexedDB() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!window.indexedDB)
            return;
        try {
            const existing = yield indexedDB.databases();
            const names = existing.map((db) => db.name);
            if (!names.includes("UnityCache"))
                return;
        }
        catch (_a) {
            // browsers that don't support indexedDB.databases() — fall through and try anyway
        }
        return new Promise((resolve) => {
            const req = indexedDB.deleteDatabase("UnityCache");
            req.onsuccess = () => {
                console.log("[Preloader] UnityCache IndexedDB deleted.");
                resolve();
            };
            req.onerror = (e) => {
                console.warn("[Preloader] Failed to delete UnityCache IndexedDB.", e);
                resolve();
            };
            req.onblocked = () => {
                // Another connection is holding the DB open; don't hang — resolve and move on.
                console.warn("[Preloader] Delete blocked — another connection holds UnityCache. Continuing anyway.");
                resolve();
            };
        });
    });
}
function clearUnityCacheStorage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleted = yield caches.delete("UnityCache");
            console.log("[Preloader] CacheStorage UnityCache deleted:", deleted);
        }
        catch (e) {
            console.warn("[Preloader] Failed to clear CacheStorage UnityCache:", e);
        }
    });
}
function clearUnityCache() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[Preloader] Clearing all Unity caches...");
        // Run IDB deletion, the known UnityCache CacheStorage delete, and the
        // "look for any other Unity-named caches" sweep concurrently.
        const otherUnityCaches = (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const names = yield caches.keys();
                const unityNames = names.filter((n) => n.toLowerCase().includes("unity"));
                yield Promise.all(unityNames.map((n) => caches.delete(n)));
            }
            catch (e) {
                console.warn("[Preloader] Failed checking CacheStorage keys:", e);
            }
        }))();
        yield Promise.allSettled([clearUnityIndexedDB(), clearUnityCacheStorage(), otherUnityCaches]);
        console.log("[Preloader] All Unity caches cleared.");
    });
}
function fallbackInterceptFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug("Installing fetch interceptor for Unity web data");
        return new Promise((resolve) => {
            const originalFetch = window.fetch;
            const urlFromInput = (input) => {
                if (typeof input === "string")
                    return input;
                if (input instanceof URL)
                    return input.href;
                if (typeof Request !== "undefined" && input instanceof Request)
                    return input.url;
                return "";
            };
            window.fetch = function (input, init) {
                const url = urlFromInput(input);
                // Use indexOf for a marginal win over .includes() (and avoid the
                // `then`/`await` machinery for the overwhelmingly common non-match path).
                if (url.indexOf(".data") === -1) {
                    return originalFetch.call(this, input, init);
                }
                // Match — restore the original BEFORE doing any await so concurrent
                // fetches stop hitting our hook.
                window.fetch = originalFetch;
                const responsePromise = originalFetch.call(this, input, init);
                // Parse the web data in parallel: clone the response immediately and
                // start reading its body, but return the original response to Unity
                // straight away so Unity can begin its own pipeline (WASM fetch,
                // initialization) without waiting for our parse.
                responsePromise.then((response) => {
                    resolve(readWebDataPrefix(response.clone()));
                });
                return responsePromise;
            };
        });
    });
}
// The only two archive members anything downstream reads. The second element,
// when present, caps how many bytes of that member we need.
const RESOLVABLE_NODES = [["data.unity3d", 32], ["Il2CppData/Metadata/global-metadata.dat"]];
function parseWebData(data) {
    return new _web_data__WEBPACK_IMPORTED_MODULE_1__.WebData(data, RESOLVABLE_NODES);
}
// A .data archive is frequently the largest asset a Unity build ships — hundreds
// of megabytes is normal. Everything downstream (metadataReady, and therefore
// every WebAssembly.instantiate the game attempts) used to block on the whole
// file arriving, and buffered a second full copy of it to do so.
//
// We only need the archive directory plus the two members above, so read the
// response body incrementally and stop at the last byte that actually matters.
// On a typical build that is a small fraction of the file, and Unity's WASM
// instantiation stops waiting on the rest of the download.
const WEBDATA_HEADER_PROBE = 8192; // don't bother parsing the directory before this much has arrived
const WEBDATA_MAX_HEADER = 64 * 1024 * 1024; // sanity bound on a claimed directory length
function flattenChunks(chunks, total) {
    const out = new Uint8Array(total);
    let at = 0;
    for (let i = 0; i < chunks.length && at < total; i++) {
        const chunk = chunks[i];
        const take = Math.min(chunk.length, total - at);
        out.set(take === chunk.length ? chunk : chunk.subarray(0, take), at);
        at += take;
    }
    return out;
}
// Byte length of the shortest prefix containing every resolvable node.
// Returns 0 when the directory isn't fully buffered yet, -1 when the header
// doesn't look like a web-data archive at all (caller falls back to the whole file).
function webDataPrefixLength(bytes) {
    const len = bytes.length;
    let p = 0;
    while (p < len && bytes[p] !== 0)
        p++;
    if (p >= len)
        return p > 512 ? -1 : 0; // absurdly long "signature" ⇒ not our format
    p++; // null terminator
    if (p + 4 > len)
        return 0;
    const view = new DataView(bytes.buffer, bytes.byteOffset, len);
    const headLen = view.getUint32(p, true);
    p += 4;
    if (headLen <= p || headLen > WEBDATA_MAX_HEADER)
        return -1;
    if (len < headLen)
        return 0; // directory itself still downloading
    let end = headLen;
    const decoder = new TextDecoder("utf-8");
    while (p + 12 <= headLen) {
        const offset = view.getUint32(p, true);
        const size = view.getUint32(p + 4, true);
        const nameLen = view.getUint32(p + 8, true);
        p += 12;
        if (nameLen > headLen - p)
            return -1; // malformed directory
        const name = decoder.decode(bytes.subarray(p, p + nameLen));
        p += nameLen;
        for (let i = 0; i < RESOLVABLE_NODES.length; i++) {
            if (RESOLVABLE_NODES[i][0] !== name)
                continue;
            const needed = offset + (RESOLVABLE_NODES[i][1] !== undefined ? RESOLVABLE_NODES[i][1] : size);
            if (needed > end)
                end = needed;
        }
    }
    return end;
}
function readWebDataPrefix(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = response.body;
        if (!body || typeof body.getReader !== "function") {
            // No streams support — fall back to the old whole-file read.
            return parseWebData(yield response.arrayBuffer());
        }
        const reader = body.getReader();
        const chunks = [];
        let received = 0;
        let needed = 0; // 0 = directory not parsed yet
        let probeAt = WEBDATA_HEADER_PROBE;
        try {
            for (;;) {
                const step = yield reader.read();
                if (step.done)
                    break;
                chunks.push(step.value);
                received += step.value.length;
                if (needed === 0 && received >= probeAt) {
                    const prefix = webDataPrefixLength(flattenChunks(chunks, received));
                    if (prefix === -1) {
                        needed = Infinity; // unrecognised header — read it all, as before
                    }
                    else if (prefix > 0) {
                        needed = prefix;
                    }
                    else {
                        // Directory not fully buffered; re-probe once we've doubled.
                        probeAt = received * 2;
                    }
                }
                if (needed !== 0 && received >= needed) {
                    // Releases the tee buffer the clone would otherwise keep growing.
                    void reader.cancel();
                    break;
                }
            }
        }
        catch (e) {
            // The body is already disturbed, so response.arrayBuffer() can't be
            // retried — hand WebData whatever arrived and let its bounds checks
            // report which node is missing.
            logger.warn("Streaming web-data read failed after %d bytes (%s) — parsing what arrived", received, (e === null || e === void 0 ? void 0 : e.message) || e);
            try {
                void reader.cancel();
            }
            catch (_a) { /* already errored */ }
            return parseWebData(flattenChunks(chunks, received).buffer);
        }
        const total = needed !== 0 && needed !== Infinity ? Math.min(needed, received) : received;
        logger.debug("Read %d KB of web data (of %d KB streamed) before stopping", (total / 1024) | 0, (received / 1024) | 0);
        return parseWebData(flattenChunks(chunks, total).buffer);
    });
}


/***/ }),

/***/ "./src/runtime/index.ts":
/*!******************************!*\
  !*** ./src/runtime/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Runtime: () => (/* binding */ Runtime),
/* harmony export */   ValueWrapper: () => (/* binding */ ValueWrapper)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/logger/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/errors/index.ts");
/* harmony import */ var _il2cpp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../il2cpp */ "./src/il2cpp/index.ts");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preloader */ "./src/preloader/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _wail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wail */ "./src/wail/index.js");
/* harmony import */ var _utils_binary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/binary */ "./src/utils/binary/index.ts");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extras */ "./src/extras/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const debugMode = true;
// Shared logger for class-level helpers (ValueWrapper, free-function utilities)
// that aren't instance-scoped. Plugin authors who run into a null have a clear
// trail to where the failure came from instead of "Cannot read properties of
// undefined (reading 'asm')".
const moduleLogger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger("UnityWebModkit");
// Guard helpers. Each returns the value (or null when missing) and logs a
// scoped error describing what was missing and where. Centralising the
// messages means every null bubbles up with the same format.
function requireGame(where) {
    // @ts-ignore
    const g = window.unityInstance || window.unityGame || (typeof game !== "undefined" ? game : undefined);
    if (!g) {
        moduleLogger.error("%s: Unity is not initialized (no window.unityInstance / unityGame). Did the WASM module load yet?", where);
        return null;
    }
    if (!g.Module) {
        moduleLogger.error("%s: Unity instance has no .Module — the loader likely hasn't finished startup", where);
        return null;
    }
    return g;
}
function requireAsm(where, _game) {
    var _a;
    const asm = (_a = _game === null || _game === void 0 ? void 0 : _game.Module) === null || _a === void 0 ? void 0 : _a.asm;
    if (!asm) {
        moduleLogger.error("%s: _game.Module.asm is null/undefined", where);
        return null;
    }
    return asm;
}
function requireHeap(where, _game) {
    var _a;
    const heap = (_a = _game === null || _game === void 0 ? void 0 : _game.Module) === null || _a === void 0 ? void 0 : _a.HEAPU8;
    if (!heap) {
        moduleLogger.error("%s: _game.Module.HEAPU8 is null/undefined", where);
        return null;
    }
    return heap;
}
function requireExport(where, asm, name) {
    const fn = asm === null || asm === void 0 ? void 0 : asm[name];
    if (typeof fn !== "function") {
        moduleLogger.error("%s: WASM export '%s' is missing or not a function (got %s)", where, name, typeof fn);
        return null;
    }
    return fn;
}
class Runtime {
    constructor() {
        this.plugins = [];
        this.startedInitializing = false;
        this.allReferencedAssemblies = [];
        this.resolvedIl2CppFunctions = {};
        this.logger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger("UnityWebModkit");
        this.metadataReady = new Promise((resolve, reject) => {
            this.resolveMetadataReady = resolve;
            this.rejectMetadataReady = reject;
        });
    }
    createPlugin(opts) {
        if (!this.startedInitializing)
            this.initialize();
        const plugin = new ModkitPlugin(opts.name, opts.version, opts.referencedAssemblies, this);
        this.plugins.push(plugin);
        return plugin;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === "undefined") {
                console.log("\x1b[37m[UnityWebModkit]\x1b[0m \x1b[33m[WARN]\x1b[0m Not running in a browser environment! Nothing will be executed.");
                return;
            }
            // UnityCache is cleared inside preload() via clearUnityCache(); the previous
            // duplicate deletion here raced the preloader and could leave dangling onerror
            // handlers attached to a request that the preloader had already superseded.
            this.startedInitializing = true;
            this.hookWasmInstantiate();
            const webData = yield (0,_preloader__WEBPACK_IMPORTED_MODULE_3__.preload)();
            this.logger.debug("Parsed web data into %d node(s)", webData.nodes.length);
            webData.unityVersion
                ? this.logger.info("Running under Unity %s", webData.unityVersion)
                : this.logger.warn("Unable to determine Unity version from web data!");
            // Always rebuild — no caching.
            this.loadGlobalMetadata(webData);
        });
    }
    loadGlobalMetadata(webData) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadataNode = webData.getNode("Il2CppData/Metadata/global-metadata.dat");
            if (!metadataNode || !metadataNode.data) {
                const err = new _errors__WEBPACK_IMPORTED_MODULE_1__.UnresolvedMetadataError("Unable to find global-metadata.dat! The game may be encrypted, corrupt or unsupported.");
                this.logger.error(err.print());
                this.rejectMetadataReady(err);
                return;
            }
            this.allReferencedAssemblies = this.plugins.flatMap((plugin) => plugin.referencedAssemblies);
            // Materialising the blob copies global-metadata.dat (commonly 10-30 MB)
            // and pins it for a minute, on the critical path of every load. Expose it
            // on demand instead — call UnityWebModkit.Runtime.dumpMetadata() from the
            // console when you actually want the file.
            if (debugMode) {
                // Held in a field, not a closure variable, so the post-instantiate
                // cleanup can drop it along with the other load-time allocations.
                this._metadataDumpSource = metadataNode.data;
                this.dumpMetadata = () => {
                    if (!this._metadataDumpSource) {
                        this.logger.warn("dumpMetadata: metadata buffer was already released after startup");
                        return null;
                    }
                    const url = URL.createObjectURL(new Blob([this._metadataDumpSource], { type: "application/octet-stream" }));
                    this.logger.info("global-metadata.dat download url:", url);
                    setTimeout(() => URL.revokeObjectURL(url), 60000);
                    return url;
                };
            }
            const globalMetadata = yield (0,_il2cpp__WEBPACK_IMPORTED_MODULE_2__.createMetadata)(metadataNode.data, this.allReferencedAssemblies);
            if (globalMetadata.isErr()) {
                this.logger.error(globalMetadata.error.print());
                this.rejectMetadataReady(globalMetadata.error);
                return;
            }
            this.globalMetadata = globalMetadata.value;
            this.resolveMetadataReady();
        });
    }
    hookWasmInstantiate() {
        // Bind to WebAssembly so the originals always see the correct `this`,
        // regardless of how callers invoke our stored reference.
        this.instantiateStreaming = WebAssembly.instantiateStreaming.bind(WebAssembly);
        WebAssembly.instantiateStreaming = this.onWebAssemblyInstantiateStreaming.bind(this);
        this.instantiate = WebAssembly.instantiate.bind(WebAssembly);
        WebAssembly.instantiate = this.onWebAssemblyInstantiate.bind(this);
    }
    onWebAssemblyInstantiateStreaming(source, importObject) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for the Il2Cpp metadata to be resolved before continuing.
            // Uses a promise (settled by loadGlobalMetadata) instead of a 400ms poll.
            yield this.metadataReady;
            if (((_a = this.globalMetadata) === null || _a === void 0 ? void 0 : _a.imageDefs.length) === 0)
                return this.instantiateStreaming(source, importObject);
            let bufferSource;
            if (source instanceof Promise) {
                bufferSource = yield source.then((res) => res.arrayBuffer());
            }
            else if (source instanceof Response) {
                bufferSource = yield source.arrayBuffer();
            }
            else {
                this.logger.error("TypeError: Got an unexpected object type as the first argument to WebAssembly.instantiateStreaming;", typeof source);
                return Promise.reject();
            }
            this.logger.debug("handling buffer ig");
            return this.handleBuffer(bufferSource, importObject);
        });
    }
    onWebAssemblyInstantiate(source, importObject) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for the Il2Cpp metadata to be resolved before continuing.
            // Uses a promise (settled by loadGlobalMetadata) instead of a 400ms poll.
            yield this.metadataReady;
            if (((_a = this.globalMetadata) === null || _a === void 0 ? void 0 : _a.imageDefs.length) === 0)
                return this.instantiate(source, importObject);
            let bufferSource;
            if (source instanceof ArrayBuffer) {
                bufferSource = source;
            }
            else if (ArrayBuffer.isView(source)) {
                // Honour byteOffset/byteLength — the view may cover only part of its backing buffer.
                const view = source;
                bufferSource = view.buffer.slice(view.byteOffset, view.byteOffset + view.byteLength);
            }
            else {
                // A pre-compiled WebAssembly.Module cannot be re-parsed; fall back to the original.
                this.logger.warn("WebAssembly.instantiate called with a Module; cannot re-parse, delegating to original.");
                return this.instantiate(source, importObject);
            }
            this.logger.debug("handling buffer ig");
            return this.handleBuffer(bufferSource, importObject);
        });
    }
    handleBuffer(bufferSource, importObject) {
        return new Promise((resolve, reject) => {
            // The body is wrapped in an IIFE so a synchronous throw from any of the
            // parsing/loading steps is converted into a Promise rejection. Previously
            // the executor was `async` directly, which swallowed synchronous errors.
            (() => __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c, _d;
                this.logger.debug("handling buffer");
                if (!importObject)
                    importObject = {};
                // Always rebuild il2CppContext from the WASM binary — no caching.
                this.il2CppContext = undefined;
                this.searchWasmBinary(bufferSource);
                if (!this.il2CppContext) {
                    this.logger.warn("no ctx - uh oh...");
                    reject(new Error("Il2CppContext could not be built from WASM binary"));
                    return;
                }
                const bufferUint8Array = new Uint8Array(bufferSource);
                // Scan-only: this pass exists to fill internalWasmTypes /
                // internalMappings, and its rewritten output is discarded. Building
                // that output meant allocating 2× the WASM size and memcpy'ing the
                // entire binary through it for nothing.
                const wailPreparser = new _wail__WEBPACK_IMPORTED_MODULE_5__.WailParser(bufferUint8Array, true);
                // Discovery pass — only the TYPE and ELEMENT sections matter here:
                // TYPE feeds internalWasmTypes (used to resolve hook signature indices)
                // ELEMENT feeds internalMappings (used by getInternalIndex).
                // The previous version also set SECTION_CODE, which forced the parser
                // to walk every function in the binary just to populate the unused
                // internalWasmCode field — by far the largest cost in the load.
                wailPreparser._optionalSectionFlags |= 1 << _wail__WEBPACK_IMPORTED_MODULE_5__.SECTION_ELEMENT;
                wailPreparser._optionalSectionFlags |= 1 << _wail__WEBPACK_IMPORTED_MODULE_5__.SECTION_TYPE;
                wailPreparser.parse();
                const wail = new _wail__WEBPACK_IMPORTED_MODULE_5__.WailParser(bufferUint8Array);
                // this.exportIl2CppFunctions(wail);
                this.logger.message("Chainloader initialized");
                this.logger.info("%d plugin(s) to load", this.plugins.length);
                const replacementFuncIndexes = [];
                const oldFuncIndexes = [];
                // Precompute a (params-key, returnType) -> wasm type index map so each
                // hook is an O(1) lookup. Params are arrays of WASM-type strings
                // (e.g. "i32"), so a plain join is cheaper than JSON.stringify and
                // produces the same uniqueness guarantee for this domain.
                const wasmTypeIndex = new Map();
                for (let t = 0; t < this.internalWasmTypes.length; t++) {
                    const ty = this.internalWasmTypes[t];
                    wasmTypeIndex.set(ty.params.join(",") + "|" + ((_a = ty.returnType) !== null && _a !== void 0 ? _a : ""), t);
                }
                var i = 0, pluginLen = this.plugins.length;
                while (i < pluginLen) {
                    const usePlugin = this.plugins[i];
                    this.logger.info("Loading [%s %s]", usePlugin.name, usePlugin.version);
                    var j = 0, hookLen = usePlugin.hooks.length;
                    while (j < hookLen) {
                        const useHook = usePlugin.hooks[j];
                        useHook.tableIndex = this.getTableIndex(useHook.typeName, useHook.methodName, useHook.overloadIndex);
                        if (useHook.tableIndex === -1) {
                            this.logger.warn(useHook.overloadIndex !== undefined
                                ? "Hook '%s::%s' (overload %d) skipped — method not found in scriptData"
                                : "Hook '%s::%s' skipped — method not found in scriptData", useHook.typeName, useHook.methodName, useHook.overloadIndex);
                            ++j;
                            continue;
                        }
                        useHook.index = this.getInternalIndex(useHook.tableIndex);
                        if (useHook.index === undefined) {
                            this.logger.warn("Hook '%s::%s' skipped — internalMappings lookup returned undefined for tableIndex %d", useHook.typeName, useHook.methodName, useHook.tableIndex);
                            ++j;
                            continue;
                        }
                        // SAKURA PATCH: the WASM writer emits import/export field names as raw
                        // byte values, not UTF-8. Unity's own method names are ASCII
                        // ("Update"), so this never showed - but an obfuscated IL2CPP
                        // name is not: MouseLook's accessors are U+008B and friends,
                        // and pasting one in produced
                        //   CompileError: field name: no valid UTF-8 string @+20672
                        // which killed instantiation outright. The game would not load.
                        //
                        // This name only has to be UNIQUE. It is the key used in
                        // importObject.env[...] and written into the binary as that
                        // same string on both sides; the IL2CPP method is resolved
                        // separately, by the real methodName, against scriptData. So
                        // it can safely be a hex encoding rather than the name itself.
                        const __asciiName = (s) => {
                            let out = "";
                            for (let i = 0; i < s.length; i++) {
                                out += s.charCodeAt(i).toString(16) + "_";
                            }
                            return out;
                        };
                        const injectName = useHook.typeName + "xx" + __asciiName(useHook.methodName) + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.makeId)(8);
                        const lookupKey = useHook.params.join(",") + "|" + ((_b = useHook.returnType) !== null && _b !== void 0 ? _b : "");
                        const injectType = (_c = wasmTypeIndex.get(lookupKey)) !== null && _c !== void 0 ? _c : -1;
                        if (injectType === -1) {
                            this.logger.warn("Hook '%s::%s' — no WASM type matches signature (%s) -> %s. " +
                                "Check that params/returnType exactly match the IL2CPP method's WASM signature " +
                                "(instance methods typically have an implicit i32 'this' as the first param). " +
                                "The hook import will use type index -1 which will cause WebAssembly validation to fail.", useHook.typeName, useHook.methodName, useHook.params.join(", ") || "void", (_d = useHook.returnType) !== null && _d !== void 0 ? _d : "void");
                        }
                        // Capture `this` as a local so the closures don't have to traverse
                        // an arrow's lexical `this` per call.
                        const runtime = this;
                        // Resolves the original WASM function once (after Unity is ready),
                        // then memoises it on the hook for every subsequent fire.
                        const resolveOriginal = () => __awaiter(this, void 0, void 0, function* () {
                            // Hit the cache.
                            if (useHook.originalFunc)
                                return useHook.originalFunc;
                            let g = runtime._game;
                            if (!g) {
                                // @ts-ignore
                                g = window.unityInstance || window.unityGame;
                                if (!g) {
                                    try {
                                        // @ts-ignore
                                        yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.waitFor)(() => window.unityInstance || window.unityGame);
                                    }
                                    catch (err) {
                                        moduleLogger.error("Hook '%s::%s': timed out waiting for Unity to initialize. Hook will no-op.", useHook.typeName, useHook.methodName);
                                        return null;
                                    }
                                    // @ts-ignore
                                    g = window.unityInstance || window.unityGame;
                                }
                                runtime._game = g;
                            }
                            const asm = requireAsm(`Hook '${useHook.typeName}::${useHook.methodName}'`, g);
                            if (!asm)
                                return null;
                            const tn = runtime.tableName || runtime.resolveTableName(asm);
                            const table = asm[tn];
                            if (!table || typeof table.get !== "function") {
                                moduleLogger.error("Hook '%s::%s': function table '%s' missing or invalid on Module.asm", useHook.typeName, useHook.methodName, tn);
                                return null;
                            }
                            const fn = table.get(useHook.tableIndex);
                            if (typeof fn !== "function") {
                                moduleLogger.error("Hook '%s::%s': table.get(%d) returned non-function (%s)", useHook.typeName, useHook.methodName, useHook.tableIndex, typeof fn);
                                return null;
                            }
                            useHook.originalFunc = fn;
                            return fn;
                        });
                        let injectFunc;
                        if (!useHook.kind) {
                            // PREFIX
                            injectFunc = (...args) => {
                                const cached = useHook.originalFunc;
                                if (cached) {
                                    // Hot path — fully synchronous after the first call.
                                    if (!useHook.enabled) {
                                        return useHook.returnType ? cached(...args) : (cached(...args), undefined);
                                    }
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    const result = useHook.callback(...wrappedArgs);
                                    const unwrapped = wrappedArgs.map((arg) => arg.val());
                                    if (result === undefined || result === true) {
                                        return useHook.returnType ? cached(...unwrapped) : (cached(...unwrapped), undefined);
                                    }
                                    return useHook.returnType ? undefined : undefined;
                                }
                                // Cold path — only runs until Unity is ready.
                                return resolveOriginal().then((originalFunction) => {
                                    if (!originalFunction)
                                        return useHook.returnType ? 0 : undefined;
                                    if (!useHook.enabled) {
                                        return useHook.returnType ? originalFunction(...args) : (originalFunction(...args), undefined);
                                    }
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    const result = useHook.callback(...wrappedArgs);
                                    args = wrappedArgs.map((arg) => arg.val());
                                    if (result === undefined || result === true) {
                                        return useHook.returnType ? originalFunction(...args) : (originalFunction(...args), undefined);
                                    }
                                });
                            };
                        }
                        else {
                            // POSTFIX
                            injectFunc = (...args) => {
                                const cached = useHook.originalFunc;
                                if (cached) {
                                    // Hot path
                                    let originalResult = cached(...args);
                                    if (!useHook.enabled)
                                        return useHook.returnType ? originalResult : undefined;
                                    if (originalResult !== undefined)
                                        originalResult = new ValueWrapper(originalResult);
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    useHook.callback(originalResult, ...wrappedArgs);
                                    return originalResult === null || originalResult === void 0 ? void 0 : originalResult.val();
                                }
                                return resolveOriginal().then((originalFunction) => {
                                    if (!originalFunction)
                                        return useHook.returnType ? 0 : undefined;
                                    let originalResult = originalFunction(...args);
                                    if (!useHook.enabled)
                                        return useHook.returnType ? originalResult : undefined;
                                    if (originalResult !== undefined)
                                        originalResult = new ValueWrapper(originalResult);
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    useHook.callback(originalResult, ...wrappedArgs);
                                    return originalResult === null || originalResult === void 0 ? void 0 : originalResult.val();
                                });
                            };
                        }
                        importObject.env = importObject.env || {};
                        importObject.env[injectName] = injectFunc;
                        const replacementFuncIndex = wail.addImportEntry({
                            moduleStr: "env",
                            fieldStr: injectName,
                            kind: "func",
                            type: injectType,
                        });
                        replacementFuncIndexes.push(replacementFuncIndex);
                        const oldFuncIndex = wail.getFunctionIndex(useHook.index);
                        oldFuncIndexes.push(oldFuncIndex);
                        ++j;
                    }
                    if (usePlugin.onLoaded)
                        usePlugin.onLoaded();
                    ++i;
                }
                this.resolveIl2CppFunctions(importObject);
                this.exportIl2CppFunctions(wail);
                // Build the callTarget -> hookIndex map ONCE outside the per-instruction
                // callback.  setCallHookData stores it on the parser for inline lookup
                // during _readInstruction — no per-OP_CALL BufferReader allocation.
                const callTargetToHookIndex = new Map();
                for (let h = 0; h < oldFuncIndexes.length; h++) {
                    callTargetToHookIndex.set(oldFuncIndexes[h].i32(), h);
                }
                const runtime = this;
                wail.setCallHookData(callTargetToHookIndex, (hookIdx) => replacementFuncIndexes[hookIdx].i32(), (hookIdx) => {
                    const hook = runtime.getHookByIndex(hookIdx);
                    if (hook)
                        hook.applied = true;
                });
                wail.parse();
                function makeWasmFunc(params, results, jsImpl) {
                    function wasmType(t) {
                        switch (t) {
                            case "i32":
                                return 0x7f;
                            case "i64":
                                return 0x7e;
                            case "f32":
                                return 0x7d;
                            case "f64":
                                return 0x7c;
                            default:
                                throw new Error("Unsupported type " + t);
                        }
                    }
                    const paramTypes = params.map(wasmType);
                    const resultTypes = results.map(wasmType);
                    const typeVec = [0x60, paramTypes.length, ...paramTypes, resultTypes.length, ...resultTypes];
                    const typeSection = [0x01, typeVec.length + 1, 0x01, ...typeVec];
                    const importEntry = [0x01, 0x65, 0x01, 0x66, 0x00, 0x00];
                    const importSection = [0x02, importEntry.length + 1, 0x01, ...importEntry];
                    const exportEntry = [0x01, 0x67, 0x00, 0x00];
                    const exportSection = [0x07, exportEntry.length + 1, 0x01, ...exportEntry];
                    const bytes = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, ...typeSection, ...importSection, ...exportSection]);
                    const mod = new WebAssembly.Module(bytes);
                    const inst = new WebAssembly.Instance(mod, { e: { f: jsImpl } });
                    return inst.exports.g;
                }
                const wasmOutput = wail.write();
                this.instantiate(wasmOutput, importObject).then((instantiatedSource) => {
                    try {
                        const exports = instantiatedSource.instance.exports;
                        const tableName = this.tableName || this.resolveTableName(exports);
                        // Cache the asm table once — the previous version did a property
                        // lookup per hook even though it never changes.
                        const table = exports[tableName];
                        const unappliedHooks = this.getUnappliedHooks();
                        for (let h = 0; h < unappliedHooks.length; h++) {
                            const hook = unappliedHooks[h];
                            if (!hook.tableIndex || !hook.index) {
                                hook.tableIndex = this.getTableIndex(hook.typeName, hook.methodName, hook.overloadIndex);
                                if (hook.tableIndex === -1) {
                                    this.logger.warn("Unapplied hook '%s::%s' skipped — method not found in scriptData", hook.typeName, hook.methodName);
                                    continue;
                                }
                                hook.index = this.getInternalIndex(hook.tableIndex);
                                if (hook.index === undefined) {
                                    this.logger.warn("Unapplied hook '%s::%s' skipped — internalMappings lookup returned undefined for tableIndex %d", hook.typeName, hook.methodName, hook.tableIndex);
                                    continue;
                                }
                            }
                            const originalFunc = table.get(hook.tableIndex);
                            hook.originalFunc = originalFunc;
                            const hookResults = hook.returnType ? [hook.returnType] : [];
                            const jsImpl = !hook.kind
                                ? (...args) => {
                                    // PREFIX
                                    if (!hook.enabled)
                                        return hook.returnType ? originalFunc(...args) : (originalFunc(...args), undefined);
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    const result = hook.callback(...wrappedArgs);
                                    const unwrapped = wrappedArgs.map((arg) => arg.val());
                                    if (result === undefined || result === true) {
                                        return hook.returnType ? originalFunc(...unwrapped) : (originalFunc(...unwrapped), undefined);
                                    }
                                    return undefined;
                                }
                                : (...args) => {
                                    // POSTFIX
                                    let originalResult = originalFunc(...args);
                                    if (!hook.enabled)
                                        return hook.returnType ? originalResult : undefined;
                                    if (originalResult !== undefined)
                                        originalResult = new ValueWrapper(originalResult);
                                    const wrappedArgs = args.map((arg) => new ValueWrapper(arg));
                                    hook.callback(originalResult, ...wrappedArgs);
                                    return originalResult === null || originalResult === void 0 ? void 0 : originalResult.val();
                                };
                            table.set(hook.tableIndex, makeWasmFunc(hook.params, hookResults, jsImpl));
                            hook.applied = true;
                        }
                        this.logger.message("Chainloader startup complete");
                        // Release heavy load-time allocations. These were only needed to
                        // build the patched WASM module:
                        //   - the global-metadata buffer (often 10+ MB)
                        //   - typeDefs / methodDefs / imageDefs structures
                        //   - both WAIL parser instances (each holds the entire WASM, in
                        //     plus an out buffer of comparable size)
                        //   - the script-data lookup map (we keep scriptData on
                        //     il2CppContext for plugin .call() resolution, but type/method
                        //     defs aren't read again after this point)
                        if (this.globalMetadata) {
                            this.globalMetadata.buffer = new ArrayBuffer(0);
                            this.globalMetadata.typeDefs = [];
                            this.globalMetadata.methodDefs = [];
                            this.globalMetadata.imageDefs = [];
                        }
                        this._metadataDumpSource = undefined;
                        resolve(instantiatedSource);
                    }
                    catch (err) {
                        this.logger.error("Error in post-instantiate hook setup:", err);
                        reject(err);
                    }
                }).catch((err) => {
                    this.logger.error("WebAssembly.instantiate failed — modified WASM binary may be invalid:", err);
                    reject(err);
                });
            }))().catch((err) => {
                this.logger.error("handleBuffer threw before instantiate:", err);
                reject(err);
            });
        });
    }
    searchWasmBinary(bufferSource) {
        if (!this.globalMetadata)
            return;
        const il2CppContext = (0,_il2cpp__WEBPACK_IMPORTED_MODULE_2__.createIl2CppContext)(bufferSource, this.globalMetadata, this.allReferencedAssemblies);
        if (il2CppContext.isErr()) {
            this.logger.error(il2CppContext.error.print());
            return;
        }
        this.il2CppContext = il2CppContext.value;
        // No caching — rebuilt every time.
    }
    // public for debugging purposes
    resolveIl2CppFunctions(_importObject) {
        this.resolvedIl2CppFunctions["il2cpp_string_new"] = 2169;
        // TODO: This is a hack, but seems to work consistently with Unity 2021.3.15f1 (hopefully 2023 too)
        this.resolvedIl2CppFunctions["il2cpp_object_new"] = 2158;
    }
    exportIl2CppFunctions(wail) {
        for (const key in this.resolvedIl2CppFunctions) {
            const rawIndex = this.resolvedIl2CppFunctions[key];
            const value = wail.getFunctionIndex(rawIndex);
            wail.addExportEntry(value, {
                fieldStr: key,
                kind: "func",
            });
        }
        this.logger.info("Exported %d Il2Cpp functions", Object.keys(this.resolvedIl2CppFunctions).length);
    }
    resolveTableName(asm) {
        // Hook callbacks invoke this on every call. Memoise the result on the
        // runtime so subsequent calls are an O(1) field read instead of an
        // Object.keys + find sweep over the entire asm exports object.
        if (this.tableName)
            return this.tableName;
        if (!asm)
            return "Unknown";
        // Emscripten exports plenty of null/primitive entries alongside the
        // table; reading `.constructor` off those throws or misreports.
        const name = Object.keys(asm).find((key) => {
            const value = asm[key];
            return (value != null &&
                (typeof WebAssembly.Table === "function"
                    ? value instanceof WebAssembly.Table
                    : typeof value.get === "function" && typeof value.length === "number"));
        });
        if (!name) {
            moduleLogger.error("resolveTableName: no WebAssembly.Table found among %d asm exports", Object.keys(asm).length);
            return "Unknown";
        }
        // Only memoise a real hit, so a lookup that ran before the table existed
        // doesn't poison every later call with "Unknown".
        this.tableName = name;
        return name;
    }
    // Module / asm cache. The previous code did `window.unityInstance || game`
    // on every malloc / free / memory / createObject call. Now we resolve once
    // and reuse — also makes it trivial for plugin code to grab the same refs.
    resolveGame() {
        if (this._game)
            return this._game;
        const g = requireGame("Runtime.resolveGame");
        if (g)
            this._game = g;
        return g;
    }
    createObject(typeInfo) {
        const _game = this.resolveGame();
        if (!_game)
            return 0;
        const asm = requireAsm("Runtime.createObject", _game);
        if (!asm)
            return 0;
        const fn = requireExport("Runtime.createObject", asm, "il2cpp_object_new");
        if (!fn)
            return 0;
        return fn(typeInfo instanceof ValueWrapper ? typeInfo.val() : typeInfo);
    }
    createMstr(char) {
        const _game = this.resolveGame();
        if (!_game)
            return 0;
        const asm = requireAsm("Runtime.createMstr", _game);
        const heap = requireHeap("Runtime.createMstr", _game);
        if (!asm || !heap)
            return 0;
        const stringNew = requireExport("Runtime.createMstr", asm, "il2cpp_string_new");
        if (!stringNew)
            return 0;
        const encoded = new TextEncoder().encode(char);
        const charAlloc = this.malloc(encoded.length);
        if (charAlloc === 0) {
            moduleLogger.error("Runtime.createMstr: malloc returned 0 for %d bytes", encoded.length);
            return 0;
        }
        try {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.writeUint8ArrayAtOffset)(heap, encoded, charAlloc);
            // il2cpp_string_new copies the bytes into a managed string, so the
            // temporary native buffer must be freed to avoid leaking WASM heap.
            return stringNew(charAlloc, encoded.length);
        }
        finally {
            this.free(charAlloc);
        }
    }
    memory(address, size) {
        const _game = this.resolveGame();
        if (!_game)
            return new Uint8Array(0);
        const heap = requireHeap("Runtime.memory", _game);
        if (!heap)
            return new Uint8Array(0);
        if (address instanceof ValueWrapper)
            address = address.val();
        return heap.slice(address, address + size);
    }
    malloc(size) {
        const _game = this.resolveGame();
        if (!_game)
            return 0;
        const asm = requireAsm("Runtime.malloc", _game);
        if (!asm)
            return 0;
        const fn = requireExport("Runtime.malloc", asm, "malloc");
        if (!fn)
            return 0;
        return fn(size);
    }
    free(block) {
        var _a, _b;
        const _game = this.resolveGame();
        if (!_game)
            return;
        const asm = requireAsm("Runtime.free", _game);
        if (!asm)
            return;
        const addr = block instanceof ValueWrapper ? block.val() : block;
        if (addr === 0) {
            // free(0) is a no-op in libc — log + skip rather than letting the
            // WASM export potentially trap.
            return;
        }
        // Modern Emscripten builds expose `free` on Module.asm and don't always
        // emit the legacy `Module._free` JS wrapper, so prefer the WASM export
        // (which mirrors how `malloc` is called) and fall back to the wrapper
        // for older builds.
        const fn = (_b = (_a = asm.free) !== null && _a !== void 0 ? _a : asm._free) !== null && _b !== void 0 ? _b : _game.Module._free;
        if (typeof fn !== "function") {
            moduleLogger.error("Runtime.free: no `free` export on Module.asm or Module._free");
            return;
        }
        fn(addr);
    }
    // Raw per-type method map, or undefined when the type isn't in scriptData
    // at all (usually: its assembly wasn't listed in referencedAssemblies).
    getTypeBucket(targetClass) {
        var _a, _b;
        return (_b = (_a = this.il2CppContext) === null || _a === void 0 ? void 0 : _a.scriptData) === null || _b === void 0 ? void 0 : _b[targetClass];
    }
    // Every lookup name registered for `targetMethod` on `targetClass`, so a
    // failed resolve can tell the caller what it *could* have asked for.
    listOverloads(targetClass, targetMethod) {
        const bucket = this.getTypeBucket(targetClass);
        if (!bucket)
            return [];
        const prefix = `${targetMethod}_`;
        return Object.keys(bucket).filter((k) => k === targetMethod || k.startsWith(prefix));
    }
    // Resolves a method name to `{ index, key }`, or null when nothing matches.
    // Accepts the plain name, a positional alias (`Method_0`), and the
    // pointer-suffixed alias the older loader emitted (`Method_7837`).
    resolveMethodEntry(targetClass, targetMethod, overloadIndex) {
        const bucket = this.getTypeBucket(targetClass);
        if (!bucket)
            return null;
        const tryKey = (key) => {
            const value = bucket[key];
            return typeof value === "number" && value > 0 ? { index: value, key } : null;
        };
        // An explicit overloadIndex is a precise request — don't paper over it
        // by falling back to some other overload.
        if (overloadIndex !== undefined)
            return tryKey(`${targetMethod}_${overloadIndex}`);
        const exact = tryKey(targetMethod);
        if (exact) {
            // The plain name resolves to overload 0. Say which one got picked
            // when there is more than one, so a wrong-signature call is at
            // least traceable.
            if (bucket[`${targetMethod}_1`] !== undefined)
                moduleLogger.debug("'%s::%s' is overloaded (%s) — resolving to the first overload; " +
                    "pass overloadIndex to pick a different one", targetClass, targetMethod, this.listOverloads(targetClass, targetMethod).join(", "));
            return exact;
        }
        const first = tryKey(`${targetMethod}_0`);
        if (first)
            return first;
        // `Method_1234` that resolved against a *different* build of the game:
        // the suffix is a stale table index, so it no longer names anything
        // here. Fall back to the base name rather than failing outright, but
        // say so loudly — the overload picked may not be the one intended.
        const suffixed = /^(.+)_(\d+)$/.exec(targetMethod);
        if (suffixed) {
            const base = suffixed[1];
            const recovered = tryKey(base) || tryKey(`${base}_0`);
            if (recovered) {
                moduleLogger.warn("'%s::%s' does not exist in this build — falling back to '%s' (table index %d). " +
                    "The trailing number is a table index from a different build; use an explicit " +
                    "overloadIndex instead. Available: %s", targetClass, targetMethod, recovered.key, recovered.index, this.listOverloads(targetClass, base).join(", ") || "(none)");
                return recovered;
            }
        }
        return null;
    }
    getTableIndex(targetClass, targetMethod, overloadIndex) {
        const entry = this.resolveMethodEntry(targetClass, targetMethod, overloadIndex);
        return entry ? entry.index : -1;
    }
    getInternalIndex(tableIndex) {
        if (!this.internalMappings || this.internalMappings.length === 0) {
            throw new Error(`getInternalIndex: internalMappings is not populated (tableIndex=${tableIndex})`);
        }
        const mapping = this.internalMappings[0];
        if (!mapping || !mapping.elements) {
            throw new Error(`getInternalIndex: internalMappings[0].elements is undefined (tableIndex=${tableIndex})`);
        }
        return mapping.elements[tableIndex - 1];
    }
    getHookByIndex(index) {
        let totalHooksCount = 0;
        for (const plugin of this.plugins) {
            const hooksCount = plugin.hooks.length;
            // Check if the index is within the current plugin's hooks range
            if (index < totalHooksCount + hooksCount) {
                const hookIndex = index - totalHooksCount;
                return plugin.hooks[hookIndex];
            }
            totalHooksCount += hooksCount;
        }
        // If the index is out of range, return null
        return null;
    }
    getUnappliedHooks() {
        return this.plugins.flatMap((plugin) => plugin.hooks).filter((hook) => !hook.applied);
    }
}
class ModkitPlugin {
    constructor(name, version, referencedAssemblies, runtime) {
        this.onLoaded = undefined;
        this._referencedAssemblies = [];
        this._hooks = [];
        this.name = name;
        this.version = version || "1.0.0";
        this.logger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger(name);
        this._referencedAssemblies = referencedAssemblies || [];
        this._runtime = runtime;
    }
    get hooks() {
        return this._hooks;
    }
    get referencedAssemblies() {
        return this._referencedAssemblies;
    }
    hookPrefix(target, callback) {
        return this.hook(target, callback, 0);
    }
    hookPostfix(target, callback) {
        return this.hook(target, callback, 1);
    }
    hook(target, callback, kind) {
        const hook = {
            typeName: target.typeName,
            methodName: target.methodName,
            params: target.params,
            returnType: target.returnType,
            overloadIndex: target.overloadIndex,
            applied: false,
            enabled: true,
            kind,
            callback,
        };
        this._hooks.push(hook);
        return hook;
    }
    // public call(target: string, args: any[]): void;
    // public call(targetClass: string, targetMethod: string, args: any[]): void;
    call(target, targetMethodOrArgs, args) {
        var _a;
        const _game = this._runtime.resolveGame();
        if (!_game)
            return undefined;
        const asm = requireAsm(`Plugin[${this.name}].call('${target}')`, _game);
        if (!asm)
            return undefined;
        const tableName = this._runtime.tableName || this._runtime.resolveTableName(asm);
        const table = asm[tableName];
        if (!table || typeof table.get !== "function") {
            moduleLogger.error("Plugin[%s].call('%s'): function table '%s' missing on Module.asm", this.name, target, tableName);
            return undefined;
        }
        let typeName;
        let methodName;
        let invokeArgs;
        if (typeof targetMethodOrArgs === "string") {
            typeName = target;
            methodName = targetMethodOrArgs;
            invokeArgs = args !== null && args !== void 0 ? args : [];
        }
        else {
            const sep = target.indexOf("::");
            typeName = sep === -1 ? target : target.slice(0, sep);
            methodName = sep === -1 ? "" : target.slice(sep + 2);
            invokeArgs = (_a = targetMethodOrArgs) !== null && _a !== void 0 ? _a : [];
        }
        if (!methodName) {
            moduleLogger.error("Plugin[%s].call: target '%s' has no method part — expected 'Namespace.Type::Method'", this.name, target);
            return undefined;
        }
        const tableIndex = this._runtime.getTableIndex(typeName, methodName);
        if (tableIndex === -1) {
            if (!this._runtime.getTypeBucket(typeName)) {
                moduleLogger.error("Plugin[%s].call: type '%s' is not in scriptData — check that its assembly is listed " +
                    "in the plugin's referencedAssemblies (and that the name is the full namespaced type name)", this.name, typeName);
            }
            else {
                const base = (/^(.+)_(\d+)$/.exec(methodName) || [])[1] || methodName;
                moduleLogger.error("Plugin[%s].call: could not resolve table index for '%s::%s'. Known names for '%s': %s", this.name, typeName, methodName, base, this._runtime.listOverloads(typeName, base).join(", ") || "(none)");
            }
            return undefined;
        }
        const fn = table.get(tableIndex);
        if (typeof fn !== "function") {
            moduleLogger.error("Plugin[%s].call: table entry %d for '%s::%s' is not a function (%s)", this.name, tableIndex, typeName, methodName, typeof fn);
            return undefined;
        }
        const unwrapped = invokeArgs.map((arg) => (arg instanceof ValueWrapper ? arg.val() : arg));
        return new ValueWrapper(fn(...unwrapped));
    }
    createObject(typeInfo) {
        return new ValueWrapper(this._runtime.createObject(typeInfo));
    }
    createMstr(char) {
        const _game = this._runtime.resolveGame();
        if (!_game)
            return new ValueWrapper(0);
        const heap = requireHeap(`Plugin[${this.name}].createMstr`, _game);
        if (!heap)
            return new ValueWrapper(0);
        const charArray = new TextEncoder().encode(char);
        const nullTerminatedArray = new Uint8Array(charArray.length + 1);
        nullTerminatedArray.set(charArray);
        const charAlloc = this._runtime.malloc(nullTerminatedArray.length);
        if (charAlloc === 0) {
            moduleLogger.error("Plugin[%s].createMstr: malloc returned 0 for %d bytes", this.name, nullTerminatedArray.length);
            return new ValueWrapper(0);
        }
        try {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.writeUint8ArrayAtOffset)(heap, nullTerminatedArray, charAlloc);
            // PtrToStringAnsi copies into a managed string; free the temporary native buffer.
            return this.call("System.Runtime.InteropServices.Marshal", "PtrToStringAnsi", [charAlloc]);
        }
        finally {
            this._runtime.free(charAlloc);
        }
    }
    slice(address, size = 256) {
        return this._runtime.memory(address, size);
    }
    malloc(size) {
        return new ValueWrapper(this._runtime.malloc(size));
    }
    free(block) {
        this._runtime.free(block);
    }
    memcpy(dest, src, count) {
        const _game = this._runtime.resolveGame();
        if (!_game)
            return;
        const heap = requireHeap(`Plugin[${this.name}].memcpy`, _game);
        if (!heap)
            return;
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.writeUint8ArrayAtOffset)(heap, this.slice(src, count), dest instanceof ValueWrapper ? dest.val() : dest);
    }
}
class ValueWrapper {
    constructor(result) {
        this._result = result;
    }
    set(value) {
        this._result = value instanceof ValueWrapper ? value.val() : value;
    }
    val() {
        return this._result;
    }
    mstr() {
        return ValueWrapper.readUtf16Char(this._result + 12);
    }
    deref() {
        var _a;
        const val = (_a = this.readField(0, "u32")) === null || _a === void 0 ? void 0 : _a.val();
        return val === undefined ? undefined : new ValueWrapper(val);
    }
    getClassName() {
        var _a;
        if (this._result === 0) {
            console.trace("[UnityWebModkit] ValueWrapper.getClassName: called on a null pointer (0)");
            return null;
        }
        const g = requireGame("ValueWrapper.getClassName");
        if (!g)
            return null;
        const heap = requireHeap("ValueWrapper.getClassName", g);
        if (!heap)
            return null;
        try {
            const classPtr = new DataView(heap.slice(this._result, this._result + 4).buffer).getUint32(0, true);
            if (classPtr === 0) {
                moduleLogger.warn("ValueWrapper.getClassName: object at 0x%s has null class pointer", this._result.toString(16));
                return null;
            }
            const classNamePtr = new DataView(heap.slice(classPtr + 8, classPtr + 12).buffer).getUint32(0, true);
            if (classNamePtr === 0) {
                moduleLogger.warn("ValueWrapper.getClassName: class at 0x%s has null name pointer", classPtr.toString(16));
                return null;
            }
            const classNameReader = new _utils_binary__WEBPACK_IMPORTED_MODULE_6__.BinaryReader(heap.slice(classNamePtr, classNamePtr + 128).buffer);
            return classNameReader.readNullTerminatedUTF8String();
        }
        catch (err) {
            moduleLogger.error("ValueWrapper.getClassName: heap read failed at 0x%s: %s", this._result.toString(16), (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : err);
            return null;
        }
    }
    readField(offset, type) {
        if (this._result === 0) {
            moduleLogger.warn("ValueWrapper.readField('%s', offset=%d): called on a null pointer", type, offset);
            return undefined;
        }
        const g = requireGame("ValueWrapper.readField");
        if (!g)
            return undefined;
        const heap = requireHeap("ValueWrapper.readField", g);
        if (!heap)
            return undefined;
        const valAddress = this._result + offset;
        const valArray = heap.slice(valAddress, valAddress + 4);
        const reader = new _utils_binary__WEBPACK_IMPORTED_MODULE_6__.BinaryReader(valArray.buffer);
        switch (type) {
            case "i8":
                return new ValueWrapper(reader.readInt8());
            case "i16":
                return new ValueWrapper(reader.readInt16());
            case "i32":
                return new ValueWrapper(reader.readInt32());
            case "f32":
                return new ValueWrapper(reader.readFloat());
            case "u8":
                return new ValueWrapper(reader.readUint8());
            case "u16":
                return new ValueWrapper(reader.readUint16());
            case "u32":
                return new ValueWrapper(reader.readUint32());
            default:
                moduleLogger.error("ValueWrapper.readField: unknown type '%s' (offset=%d)", type, offset);
                return undefined;
        }
    }
    writeField(offset, type, value) {
        if (this._result === 0) {
            moduleLogger.warn("ValueWrapper.writeField('%s', offset=%d): called on a null pointer", type, offset);
            return;
        }
        const g = requireGame("ValueWrapper.writeField");
        if (!g)
            return;
        const heap = requireHeap("ValueWrapper.writeField", g);
        if (!heap)
            return;
        const size = _extras__WEBPACK_IMPORTED_MODULE_7__.dataTypeSizes[type];
        if (!size) {
            moduleLogger.error("ValueWrapper.writeField: unknown type '%s' (offset=%d) — no size in dataTypeSizes", type, offset);
            return;
        }
        const writer = new _utils_binary__WEBPACK_IMPORTED_MODULE_6__.BinaryWriter(new ArrayBuffer(size));
        if (value instanceof ValueWrapper)
            value = value.val();
        switch (type) {
            case "i8":
                writer.writeInt8(value);
                break;
            case "i16":
                writer.writeInt16(value);
                break;
            case "i32":
                writer.writeInt32(value);
                break;
            case "f32":
                writer.writeFloat(value);
                break;
            case "u8":
                writer.writeUint8(value);
                break;
            case "u16":
                writer.writeUint16(value);
                break;
            case "u32":
                writer.writeUint32(value);
                break;
            default:
                moduleLogger.error("ValueWrapper.writeField: unknown type '%s' (offset=%d)", type, offset);
                return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.writeUint8ArrayAtOffset)(heap, writer.finalize(), this._result + offset);
    }
    static readUtf16Char(ptr) {
        if (ptr === 0) {
            moduleLogger.warn("ValueWrapper.mstr/readUtf16Char: called on a null pointer (0)");
            return "";
        }
        const g = requireGame("ValueWrapper.readUtf16Char");
        if (!g)
            return "";
        const heap = requireHeap("ValueWrapper.readUtf16Char", g);
        if (!heap)
            return "";
        const buffer = new Uint16Array(heap.buffer);
        let offset = ptr / 2; // divide by 2 to convert from byte offset to character offset
        const start = offset;
        // Cap the scan so a corrupt pointer or unterminated string can't walk the entire heap.
        const MAX_CHARS = 1 << 16;
        const limit = Math.min(buffer.length, start + MAX_CHARS);
        while (offset < limit && buffer[offset] !== 0)
            offset++;
        const decoder = new TextDecoder("utf-16le");
        return decoder.decode(buffer.subarray(start, offset));
    }
}


/***/ }),

/***/ "./src/utils/binary/index.ts":
/*!***********************************!*\
  !*** ./src/utils/binary/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryReader: () => (/* binding */ BinaryReader),
/* harmony export */   BinaryWriter: () => (/* binding */ BinaryWriter)
/* harmony export */ });
class BinaryReader {
    constructor(arrayBuffer, littleEndian = true) {
        this._view = new DataView(arrayBuffer);
        this._buffer = arrayBuffer;
        this._bytes = new Uint8Array(arrayBuffer);
        this._offset = 0;
        this._littleEndian = littleEndian;
        this._utf8decoder = new TextDecoder("utf-8");
    }
    get offset() {
        return this._offset;
    }
    get buffer() {
        return this._buffer;
    }
    seek(offset) {
        if (offset < 0 || offset > this._buffer.byteLength) {
            // Don't throw — some call sites speculatively seek; just log so a malformed
            // metadata/WASM produces a useful breadcrumb instead of a downstream NaN.
            console.warn(`[UnityWebModkit] BinaryReader.seek(${offset}) out of range (buffer length ${this._buffer.byteLength})`);
        }
        this._offset = offset;
    }
    readNullTerminatedUTF8String() {
        const bytes = this._bytes;
        const startOffset = this._offset;
        let off = startOffset;
        const limit = bytes.length;
        while (off < limit && bytes[off] !== 0)
            off++;
        if (off >= limit) {
            console.warn(`[UnityWebModkit] BinaryReader.readNullTerminatedUTF8String: walked to end of buffer without finding null terminator (start=${startOffset})`);
        }
        const result = this._utf8decoder.decode(bytes.subarray(startOffset, off));
        this._offset = off + 1; // consume null terminator
        return result;
    }
    readUTF8StringWithLength() {
        const stringLength = this.readUint32();
        const start = this._offset;
        this._offset = start + stringLength;
        return this._utf8decoder.decode(this._bytes.subarray(start, this._offset));
    }
    readUint8() {
        const value = this._view.getUint8(this._offset);
        this._offset++;
        return value;
    }
    readInt8() {
        const value = this._view.getInt8(this._offset);
        this._offset++;
        return value;
    }
    readUint16() {
        const value = this._view.getUint16(this._offset, this._littleEndian);
        this._offset += 2;
        return value;
    }
    readInt16() {
        const value = this._view.getInt16(this._offset, this._littleEndian);
        this._offset += 2;
        return value;
    }
    readInt32() {
        const value = this._view.getInt32(this._offset, this._littleEndian);
        this._offset += 4;
        return value;
    }
    readUint32() {
        const value = this._view.getUint32(this._offset, this._littleEndian);
        this._offset += 4;
        return value;
    }
    readIndex(size) {
        if (size === 1)
            return this.readUint8();
        if (size === 2)
            return this.readUint16();
        return this.readInt32(); // 4
    }
    readFloat() {
        const value = this._view.getFloat32(this._offset, this._littleEndian);
        this._offset += 4;
        return value;
    }
    readULEB128() {
        let result = 0;
        let shift = 0;
        let byte;
        do {
            byte = this.readUint8();
            result |= (byte & 0x7f) << shift;
            shift += 7;
        } while (byte & 0x80);
        return result;
    }
    readUint8Array(length) {
        // Copy once into a freshly-owned buffer. The previous version sliced the
        // underlying ArrayBuffer and then wrapped the resulting buffer in a
        // Uint8Array, allocating twice.
        const out = new Uint8Array(this._buffer, this._offset, length).slice();
        this._offset += length;
        return out;
    }
    // Returns a NON-OWNING view into the underlying buffer. The caller must not
    // hold the result past the buffer's lifetime, and must not mutate the source.
    // Use when you'll immediately copy out with .set() — avoids the temporary
    // allocation that readUint8Array makes.
    readUint8ArrayView(length) {
        const out = new Uint8Array(this._buffer, this._offset, length);
        this._offset += length;
        return out;
    }
    readSlice(offset, length) {
        return this._buffer.slice(offset, offset + length);
    }
}
class BinaryWriter {
    constructor(buffer, littleEndian = true) {
        this._view = new DataView(buffer);
        this._offset = 0;
        this._littleEndian = littleEndian;
    }
    seek(offset) {
        if (offset >= 0 && offset < this._view.byteLength) {
            this._offset = offset;
        }
        else {
            throw new Error("Invalid offset value.");
        }
    }
    writeUint8(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setUint8(this._offset, value);
            this._offset += 1;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeInt8(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setInt8(this._offset, value);
            this._offset += 1;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeUint16(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setUint16(this._offset, value, this._littleEndian);
            this._offset += 2;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeInt16(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setInt16(this._offset, value, this._littleEndian);
            this._offset += 2;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeInt32(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setInt32(this._offset, value, this._littleEndian);
            this._offset += 4;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeUint32(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setUint32(this._offset, value, this._littleEndian);
            this._offset += 4;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeFloat(value) {
        if (this._offset < this._view.byteLength) {
            this._view.setFloat32(this._offset, value, this._littleEndian);
            this._offset += 4;
        }
        else {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
    }
    writeBytes(bytes) {
        const src = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
        if (this._offset + src.length > this._view.byteLength) {
            throw new Error("Buffer overflow: Cannot write beyond the ArrayBuffer length.");
        }
        // Bulk-copy via the typed-array set() — orders of magnitude faster than
        // the previous per-byte setUint8 loop when writing multi-MB data sections.
        new Uint8Array(this._view.buffer, this._view.byteOffset, this._view.byteLength).set(src, this._offset);
        this._offset += src.length;
    }
    finalize() {
        return new Uint8Array(this._view.buffer);
    }
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeId: () => (/* binding */ makeId),
/* harmony export */   patternSearch: () => (/* binding */ patternSearch),
/* harmony export */   waitFor: () => (/* binding */ waitFor),
/* harmony export */   writeUint8ArrayAtOffset: () => (/* binding */ writeUint8ArrayAtOffset)
/* harmony export */ });
/* unused harmony exports concatenateUint8Arrays, uint8ArrayStartsWith, bufToHex */
function waitFor(conditionFunction, timeoutMs = 60000, intervalMs = 400) {
    // Fast path: synchronous resolution. No promise allocation overhead avoided
    // (we still return a Promise), but we skip the setTimeout / pagehide
    // listener / Date.now bookkeeping that the polling path needs. Hook
    // callbacks call this on every fire, so this matters.
    try {
        if (conditionFunction())
            return Promise.resolve();
    }
    catch (err) {
        return Promise.reject(err);
    }
    return new Promise((resolve, reject) => {
        const startedAt = Date.now();
        let timerId;
        let cleanup;
        const finish = () => {
            if (cleanup && typeof window !== "undefined") {
                window.removeEventListener("pagehide", cleanup);
            }
        };
        const poll = () => {
            try {
                if (conditionFunction()) {
                    finish();
                    resolve();
                    return;
                }
            }
            catch (err) {
                finish();
                reject(err);
                return;
            }
            if (Date.now() - startedAt >= timeoutMs) {
                finish();
                reject(new Error(`waitFor: condition not met within ${timeoutMs}ms`));
                return;
            }
            timerId = setTimeout(poll, intervalMs);
        };
        // Only register a pagehide cleanup when we have a timer to clean up.
        if (typeof window !== "undefined") {
            cleanup = () => {
                if (timerId !== undefined)
                    clearTimeout(timerId);
            };
            window.addEventListener("pagehide", cleanup, { once: true });
        }
        poll();
    });
}
function makeId(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
function patternSearch(mainArray, subArray) {
    const indexes = [];
    const patLen = subArray.length;
    if (patLen === 0)
        return indexes;
    const mainLen = mainArray.length;
    // Typed arrays get a native indexOf, which scans for the first byte roughly
    // an order of magnitude faster than the per-byte JS comparison loop the KMP
    // implementation used. Candidates are then confirmed with a short memcmp.
    // Over a multi-megabyte data segment that difference is most of this call.
    if (typeof mainArray.indexOf === "function" && ArrayBuffer.isView(mainArray)) {
        const first = subArray[0];
        const last = mainLen - patLen;
        let i = 0;
        while (i <= last) {
            const at = mainArray.indexOf(first, i);
            if (at === -1 || at > last)
                break;
            let k = 1;
            while (k < patLen && mainArray[at + k] === subArray[k])
                k++;
            if (k === patLen)
                indexes.push(at);
            // Advance by one so overlapping occurrences are still reported,
            // matching the KMP behaviour this replaced.
            i = at + 1;
        }
        return indexes;
    }
    const lps = generateLPSArray(subArray);
    let i = 0;
    let j = 0;
    while (i < mainLen) {
        if (mainArray[i] === subArray[j]) {
            i++;
            j++;
        }
        if (j === patLen) {
            indexes.push(i - j);
            j = lps[j - 1];
        }
        else if (i < mainLen && mainArray[i] !== subArray[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
    }
    return indexes;
}
function concatenateUint8Arrays(arrays) {
    // Calculate the total length of the concatenated array
    let totalLength = 0;
    arrays.forEach((array) => {
        totalLength += array.length;
    });
    // Create a new Uint8Array with the total length
    const concatenatedArray = new Uint8Array(totalLength);
    // Use the set() method to copy the contents of each Uint8Array into the concatenated array
    let offset = 0;
    arrays.forEach((array) => {
        concatenatedArray.set(array, offset);
        offset += array.length;
    });
    return concatenatedArray;
}
function uint8ArrayStartsWith(array, expectedNumbers) {
    if (array.length < expectedNumbers.length) {
        return false;
    }
    for (let i = 0; i < expectedNumbers.length; i++) {
        if (array[i] !== expectedNumbers[i]) {
            return false;
        }
    }
    return true;
}
function writeUint8ArrayAtOffset(destination, source, offset) {
    if (offset + source.length > destination.length) {
        throw new Error("Source array does not fit at the specified offset in the destination array.");
    }
    for (let i = 0; i < source.length; i++) {
        destination[offset + i] = source[i];
    }
}
function bufToHex(buffer) {
    return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
function generateLPSArray(pattern) {
    const lps = [];
    lps[0] = 0;
    let len = 0;
    let i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        }
        else {
            if (len !== 0) {
                len = lps[len - 1];
            }
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}


/***/ }),

/***/ "./src/web-data/index.ts":
/*!*******************************!*\
  !*** ./src/web-data/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebData: () => (/* binding */ WebData)
/* harmony export */ });
/* harmony import */ var _utils_binary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/binary */ "./src/utils/binary/index.ts");

class WebData {
    constructor(buffer, resolvableNodes) {
        var _a;
        this.nodes = [];
        if (!buffer || buffer.byteLength === 0) {
            console.error("[UnityWebModkit] WebData: buffer is empty/null — Unity .data file failed to load");
            this.signature = "";
            this.headLen = 0;
            return;
        }
        const reader = new _utils_binary__WEBPACK_IMPORTED_MODULE_0__.BinaryReader(buffer);
        this.signature = reader.readNullTerminatedUTF8String();
        this.headLen = reader.readUint32();
        if (this.headLen > buffer.byteLength) {
            console.error("[UnityWebModkit] WebData: headLen %d > buffer length %d — file is truncated or malformed", this.headLen, buffer.byteLength);
            this.headLen = buffer.byteLength;
        }
        while (reader.offset < this.headLen) {
            const node = {
                offset: reader.readUint32(),
                size: reader.readUint32(),
                name: reader.readUTF8StringWithLength(),
            };
            const resolvableNode = resolvableNodes === null || resolvableNodes === void 0 ? void 0 : resolvableNodes.find((item) => item[0] === node.name);
            if (!resolvableNode)
                continue;
            node.size = (_a = resolvableNode[1]) !== null && _a !== void 0 ? _a : node.size;
            this.nodes.push(node);
        }
        for (const node of this.nodes) {
            if (node.offset + node.size > buffer.byteLength) {
                console.error("[UnityWebModkit] WebData: node '%s' offset+size (%d) overflows buffer length (%d)", node.name, node.offset + node.size, buffer.byteLength);
                continue;
            }
            node.data = reader.readSlice(node.offset, node.size);
        }
        this.resolveUnityVersion(reader);
    }
    getNode(name) {
        return this.nodes.find((n) => n.name === name);
    }
    resolveUnityVersion(reader) {
        const dataUnity3dNode = this.getNode("data.unity3d");
        if (!dataUnity3dNode || !dataUnity3dNode.data)
            return;
        const dataUnity3dReader = new _utils_binary__WEBPACK_IMPORTED_MODULE_0__.BinaryReader(dataUnity3dNode.data);
        dataUnity3dReader.seek(18);
        this.unityVersion = dataUnity3dReader.readNullTerminatedUTF8String();
    }
}


/***/ }),

/***/ "./src/wail/index.js":
/*!***************************!*\
  !*** ./src/wail/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SECTION_ELEMENT: () => (/* binding */ SECTION_ELEMENT),
/* harmony export */   SECTION_TYPE: () => (/* binding */ SECTION_TYPE),
/* harmony export */   WailParser: () => (/* binding */ WailParser)
/* harmony export */ });
/* unused harmony exports SECTION_CODE, OP_CALL, VarUint32ToArray, WailVariable, BufferReader */
/**
Copyright 2019 Jack Baker

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @ignore
 */
const SECTION_CUSTOM = 0;
const SECTION_TYPE = 1;
const SECTION_IMPORT = 2;
const SECTION_FUNCTION = 3;
const SECTION_TABLE = 4;
const SECTION_MEMORY = 5;
const SECTION_GLOBAL = 6;
const SECTION_EXPORT = 7;
const SECTION_START = 8;
const SECTION_ELEMENT = 9;
const SECTION_CODE = 10;
const SECTION_DATA = 11;
const SECTION_DATACOUNT = 12;
const SECTION_TAG = 13;
const MAX_SECTION_ID = 13;

const KIND_FUNC = 0x00;
const KIND_TABLE = 0x01;
const KIND_MEMORY = 0x02;
const KIND_GLOBAL = 0x03;
const KIND_TAG = 0x04;

const kindStr = {
  func: KIND_FUNC,
  table: KIND_TABLE,
  memory: KIND_MEMORY,
  global: KIND_GLOBAL,
  tag: KIND_TAG,
};
// inverse
Object.entries(kindStr).forEach(([str, code]) => (kindStr[code] = str));

const convertKind = function (string) {
  const kindVal = kindStr[string];

  if (typeof kindVal === "undefined") {
    throw new Error("Invalid kind " + string);
  }

  return kindVal;
};

const VALUE_TYPE_I32 = 0x7f;
const VALUE_TYPE_I64 = 0x7e;
const VALUE_TYPE_F32 = 0x7d;
const VALUE_TYPE_F64 = 0x7c;
const VALUE_TYPE_ANYFUNC = 0x70;
const VALUE_TYPE_FUNC = 0x60;
const VALUE_TYPE_BLOCK = 0x40;

const valueTypeStr = {
  i32: VALUE_TYPE_I32,
  i64: VALUE_TYPE_I64,
  f32: VALUE_TYPE_F32,
  f64: VALUE_TYPE_F64,
  anyfunc: VALUE_TYPE_ANYFUNC,
  func: VALUE_TYPE_FUNC,
  block: VALUE_TYPE_BLOCK,
};

Object.entries(valueTypeStr).forEach(([str, code]) => (valueTypeStr[code] = str));

const convertValueType = function (string) {
  const typeVal = valueTypeStr[string];

  if (typeof typeVal === "undefined") {
    throw new Error("Invalid value type " + string);
  }

  return typeVal;
};

const OP_UNREACHABLE = 0x00;
const OP_NOP = 0x01;
const OP_BLOCK = 0x02;
const OP_LOOP = 0x03;
const OP_IF = 0x04;
const OP_ELSE = 0x05;
const OP_THROW = 0x08;
const OP_THROW_REF = 0x0a;
const OP_END = 0x0b;
const OP_BR = 0x0c;
const OP_BR_IF = 0x0d;
const OP_BR_TABLE = 0x0e;
const OP_RETURN = 0x0f;
const OP_CALL = 0x10;
const OP_CALL_INDIRECT = 0x11;
const OP_DROP = 0x1a;
const OP_SELECT = 0x1b;
const OP_TRY_TABLE = 0x1f;
const OP_GET_LOCAL = 0x20;
const OP_SET_LOCAL = 0x21;
const OP_TEE_LOCAL = 0x22;
const OP_GET_GLOBAL = 0x23;
const OP_SET_GLOBAL = 0x24;
const OP_I32_LOAD = 0x28;
const OP_I64_LOAD = 0x29;
const OP_F32_LOAD = 0x2a;
const OP_F64_LOAD = 0x2b;
const OP_I32_LOAD8_S = 0x2c;
const OP_I32_LOAD8_U = 0x2d;
const OP_I32_LOAD16_S = 0x2e;
const OP_I32_LOAD16_U = 0x2f;
const OP_I64_LOAD8_S = 0x30;
const OP_I64_LOAD8_U = 0x31;
const OP_I64_LOAD16_S = 0x32;
const OP_I64_LOAD16_U = 0x33;
const OP_I64_LOAD32_S = 0x34;
const OP_I64_LOAD32_U = 0x35;
const OP_I32_STORE = 0x36;
const OP_I64_STORE = 0x37;
const OP_F32_STORE = 0x38;
const OP_F64_STORE = 0x39;
const OP_I32_STORE8 = 0x3a;
const OP_I32_STORE16 = 0x3b;
const OP_I64_STORE8 = 0x3c;
const OP_I64_STORE16 = 0x3d;
const OP_I64_STORE32 = 0x3e;
const OP_MEMORY_SIZE = 0x3f;
const OP_MEMORY_GROW = 0x40;
const OP_I32_CONST = 0x41;
const OP_I64_CONST = 0x42;
const OP_F32_CONST = 0x43;
const OP_F64_CONST = 0x44;
const OP_I32_EQZ = 0x45;
const OP_I32_EQ = 0x46;
const OP_I32_NE = 0x47;
const OP_I32_LT_S = 0x48;
const OP_I32_LT_U = 0x49;
const OP_I32_GT_S = 0x4a;
const OP_I32_GT_U = 0x4b;
const OP_I32_LE_S = 0x4c;
const OP_I32_LE_U = 0x4d;
const OP_I32_GE_S = 0x4e;
const OP_I32_GE_U = 0x4f;
const OP_I64_EQZ = 0x50;
const OP_I64_EQ = 0x51;
const OP_I64_NE = 0x52;
const OP_I64_LT_S = 0x53;
const OP_I64_LT_U = 0x54;
const OP_I64_GT_S = 0x55;
const OP_I64_GT_U = 0x56;
const OP_I64_LE_S = 0x57;
const OP_I64_LE_U = 0x58;
const OP_I64_GE_S = 0x59;
const OP_I64_GE_U = 0x5a;
const OP_F32_EQ = 0x5b;
const OP_F32_NE = 0x5c;
const OP_F32_LT = 0x5d;
const OP_F32_GT = 0x5e;
const OP_F32_LE = 0x5f;
const OP_F32_GE = 0x60;
const OP_F64_EQ = 0x61;
const OP_F64_NE = 0x62;
const OP_F64_LT = 0x63;
const OP_F64_GT = 0x64;
const OP_F64_LE = 0x65;
const OP_F64_GE = 0x66;
const OP_I32_CLZ = 0x67;
const OP_I32_CTZ = 0x68;
const OP_I32_POPCNT = 0x69;
const OP_I32_ADD = 0x6a;
const OP_I32_SUB = 0x6b;
const OP_I32_MUL = 0x6c;
const OP_I32_DIV_S = 0x6d;
const OP_I32_DIV_U = 0x6e;
const OP_I32_REM_S = 0x6f;
const OP_I32_REM_U = 0x70;
const OP_I32_AND = 0x71;
const OP_I32_OR = 0x72;
const OP_I32_XOR = 0x73;
const OP_I32_SHL = 0x74;
const OP_I32_SHR_S = 0x75;
const OP_I32_SHR_U = 0x76;
const OP_I32_ROTL = 0x77;
const OP_I32_ROTR = 0x78;
const OP_I64_CLZ = 0x79;
const OP_I64_CTZ = 0x7a;
const OP_I64_POPCNT = 0x7b;
const OP_I64_ADD = 0x7c;
const OP_I64_SUB = 0x7d;
const OP_I64_MUL = 0x7e;
const OP_I64_DIV_S = 0x7f;
const OP_I64_DIV_U = 0x80;
const OP_I64_REM_S = 0x81;
const OP_I64_REM_U = 0x82;
const OP_I64_AND = 0x83;
const OP_I64_OR = 0x84;
const OP_I64_XOR = 0x85;
const OP_I64_SHL = 0x86;
const OP_I64_SHR_S = 0x87;
const OP_I64_SHR_U = 0x88;
const OP_I64_ROTL = 0x89;
const OP_I64_ROTR = 0x8a;
const OP_F32_ABS = 0x8b;
const OP_F32_NEG = 0x8c;
const OP_F32_CEIL = 0x8d;
const OP_F32_FLOOR = 0x8e;
const OP_F32_TRUNC = 0x8f;
const OP_F32_NEAREST = 0x90;
const OP_F32_SQRT = 0x91;
const OP_F32_ADD = 0x92;
const OP_F32_SUB = 0x93;
const OP_F32_MUL = 0x94;
const OP_F32_DIV = 0x95;
const OP_F32_MIN = 0x96;
const OP_F32_MAX = 0x97;
const OP_F32_COPYSIGN = 0x98;
const OP_F64_ABS = 0x99;
const OP_F64_NEG = 0x9a;
const OP_F64_CEIL = 0x9b;
const OP_F64_FLOOR = 0x9c;
const OP_F64_TRUNC = 0x9d;
const OP_F64_NEAREST = 0x9e;
const OP_F64_SQRT = 0x9f;
const OP_F64_ADD = 0xa0;
const OP_F64_SUB = 0xa1;
const OP_F64_MUL = 0xa2;
const OP_F64_DIV = 0xa3;
const OP_F64_MIN = 0xa4;
const OP_F64_MAX = 0xa5;
const OP_F64_COPYSIGN = 0xa6;
const OP_I32_WRAP_I64 = 0xa7;
const OP_I32_TRUNC_S_F32 = 0xa8;
const OP_I32_TRUNC_U_F32 = 0xa9;
const OP_I32_TRUNC_S_F64 = 0xaa;
const OP_I32_TRUNC_U_F64 = 0xab;
const OP_I64_EXTEND_S_I32 = 0xac;
const OP_I64_EXTEND_U_I32 = 0xad;
const OP_I64_TRUNC_S_F32 = 0xae;
const OP_I64_TRUNC_U_F32 = 0xaf;
const OP_I64_TRUNC_S_F64 = 0xb0;
const OP_I64_TRUNC_U_F64 = 0xb1;
const OP_F32_CONVERT_S_I32 = 0xb2;
const OP_F32_CONVERT_U_I32 = 0xb3;
const OP_F32_CONVERT_S_I64 = 0xb4;
const OP_F32_CONVERT_U_I64 = 0xb5;
const OP_F32_DEMOTE_F64 = 0xb6;
const OP_F64_CONVERT_S_I32 = 0xb7;
const OP_F64_CONVERT_U_I32 = 0xb8;
const OP_F64_CONVERT_S_I64 = 0xb9;
const OP_F64_CONVERT_U_I64 = 0xba;
const OP_F64_PROMOTE_F32 = 0xbb;
const OP_I32_REINTERPRET_F32 = 0xbc;
const OP_I64_REINTERPRET_F64 = 0xbd;
const OP_F32_REINTERPRET_I32 = 0xbe;
const OP_F64_REINTERPRET_I64 = 0xbf;
const OP_I32_EXTEND8_S = 0xc0;
const OP_I32_EXTEND16_S = 0xc1;
const OP_I64_EXTEND8_S = 0xc2;
const OP_I64_EXTEND16_S = 0xc3;
const OP_I64_EXTEND32_S = 0xc4;
const OP_BULK_MEMORY = 0xfc;
const OP_SIMD = 0xfd;
const OP_ATOMIC = 0xfe;

const ARG_MEMORY_INIT = 0x08;
const ARG_DATA_DROP = 0x09;
const ARG_MEMORY_COPY = 0x0a;
const ARG_MEMORY_FILL = 0x0b;
const ARG_TABLE_INIT = 0x0c;
const ARG_ELEM_DROP = 0x0d;
const ARG_TABLE_COPY = 0x0e;

const SIMD_V128_LOAD = 0x00;
const SIMD_V128_LOAD8X8_S = 0x01;
const SIMD_V128_LOAD8X8_U = 0x02;
const SIMD_V128_LOAD16X4_S = 0x03;
const SIMD_V128_LOAD16X4_U = 0x04;
const SIMD_V128_LOAD32X2_S = 0x05;
const SIMD_V128_LOAD32X2_U = 0x06;
const SIMD_V128_LOAD8_SPLAT = 0x07;
const SIMD_V128_LOAD16_SPLAT = 0x08;
const SIMD_V128_LOAD32_SPLAT = 0x09;
const SIMD_V128_LOAD64_SPLAT = 0x0a;
const SIMD_V128_STORE = 0x0b;
const SIMD_V128_CONST = 0x0c;
const SIMD_I8X16_SHUFFLE = 0x0d;
const SIMD_I8X16_SWIZZLE = 0x0e;
const SIMD_I8X16_SPLAT = 0x0f;
const SIMD_I16X8_SPLAT = 0x10;
const SIMD_I32X4_SPLAT = 0x11;
const SIMD_I64X2_SPLAT = 0x12;
const SIMD_F32X4_SPLAT = 0x13;
const SIMD_F64X2_SPLAT = 0x14;
const SIMD_I8X16_EXTRACT_LANE_S = 0x15;
const SIMD_I8X16_EXTRACT_LANE_U = 0x16;
const SIMD_I8X16_REPLACE_LANE = 0x17;
const SIMD_I16X8_EXTRACT_LANE_S = 0x18;
const SIMD_I16X8_EXTRACT_LANE_U = 0x19;
const SIMD_I16X8_REPLACE_LANE = 0x1a;
const SIMD_I32X4_EXTRACT_LANE = 0x1b;
const SIMD_I32X4_REPLACE_LANE = 0x1c;
const SIMD_I64X2_EXTRACT_LANE = 0x1d;
const SIMD_I64X2_REPLACE_LANE = 0x1e;
const SIMD_F32X4_EXTRACT_LANE = 0x1f;
const SIMD_F32X4_REPLACE_LANE = 0x20;
const SIMD_F64X2_EXTRACT_LANE = 0x21;
const SIMD_F64X2_REPLACE_LANE = 0x22;
const SIMD_I8X16_EQ = 0x23;
const SIMD_I8X16_NE = 0x24;
const SIMD_I8X16_LT_S = 0x25;
const SIMD_I8X16_LT_U = 0x26;
const SIMD_I8X16_GT_S = 0x27;
const SIMD_I8X16_GT_U = 0x28;
const SIMD_I8X16_LE_S = 0x29;
const SIMD_I8X16_LE_U = 0x2a;
const SIMD_I8X16_GE_S = 0x2b;
const SIMD_I8X16_GE_U = 0x2c;
const SIMD_I16X8_EQ = 0x2d;
const SIMD_I16X8_NE = 0x2e;
const SIMD_I16X8_LT_S = 0x2f;
const SIMD_I16X8_LT_U = 0x30;
const SIMD_I16X8_GT_S = 0x31;
const SIMD_I16X8_GT_U = 0x32;
const SIMD_I16X8_LE_S = 0x33;
const SIMD_I16X8_LE_U = 0x34;
const SIMD_I16X8_GE_S = 0x35;
const SIMD_I16X8_GE_U = 0x36;
const SIMD_I32X4_EQ = 0x37;
const SIMD_I32X4_NE = 0x38;
const SIMD_I32X4_LT_S = 0x39;
const SIMD_I32X4_LT_U = 0x3a;
const SIMD_I32X4_GT_S = 0x3b;
const SIMD_I32X4_GT_U = 0x3c;
const SIMD_I32X4_LE_S = 0x3d;
const SIMD_I32X4_LE_U = 0x3e;
const SIMD_I32X4_GE_S = 0x3f;
const SIMD_I32X4_GE_U = 0x40;
const SIMD_F32X4_EQ = 0x41;
const SIMD_F32X4_NE = 0x42;
const SIMD_F32X4_LT = 0x43;
const SIMD_F32X4_GT = 0x44;
const SIMD_F32X4_LE = 0x45;
const SIMD_F32X4_GE = 0x46;
const SIMD_F64X2_EQ = 0x47;
const SIMD_F64X2_NE = 0x48;
const SIMD_F64X2_LT = 0x49;
const SIMD_F64X2_GT = 0x4a;
const SIMD_F64X2_LE = 0x4b;
const SIMD_F64X2_GE = 0x4c;
const SIMD_V128_NOT = 0x4d;
const SIMD_V128_AND = 0x4e;
const SIMD_V128_ANDNOT = 0x4f;
const SIMD_V128_OR = 0x50;
const SIMD_V128_XOR = 0x51;
const SIMD_V128_BITSELECT = 0x52;
const SIMD_I8X16_ABS = 0x60;
const SIMD_I8X16_NEG = 0x61;
const SIMD_I8X16_ALL_TRUE = 0x63;
const SIMD_I8X16_BITMASK = 0x64;
const SIMD_I8X16_NARROW_I16X8_S = 0x65;
const SIMD_I8X16_NARROW_I16X8_U = 0x66;
const SIMD_I8X16_SHL = 0x6b;
const SIMD_I8X16_SHR_S = 0x6c;
const SIMD_I8X16_SHR_U = 0x6d;
const SIMD_I8X16_ADD = 0x6e;
const SIMD_I8X16_ADD_SAT_S = 0x6f;
const SIMD_I8X16_ADD_SAT_U = 0x70;
const SIMD_I8X16_SUB = 0x71;
const SIMD_I8X16_SUB_SAT_S = 0x72;
const SIMD_I8X16_SUB_SAT_U = 0x73;
const SIMD_I8X16_MIN_S = 0x76;
const SIMD_I8X16_MIN_U = 0x77;
const SIMD_I8X16_MAX_S = 0x78;
const SIMD_I8X16_MAX_U = 0x79;
const SIMD_I8X16_AVGR_U = 0x7b;
const SIMD_I16X8_ABS = 0x80;
const SIMD_I16X8_NEG = 0x81;
const SIMD_I16X8_ALL_TRUE = 0x83;
const SIMD_I16X8_BITMASK = 0x84;
const SIMD_I16X8_NARROW_I32X4_S = 0x85;
const SIMD_I16X8_NARROW_I32X4_U = 0x86;
const SIMD_I16X8_EXTEND_LOW_I8X16_S = 0x87;
const SIMD_I16X8_EXTEND_HIGH_I8X16_S = 0x88;
const SIMD_I16X8_EXTEND_LOW_I8X16_U = 0x89;
const SIMD_I16X8_EXTEND_HIGH_I8X16_U = 0x8a;
const SIMD_I16X8_SHL = 0x8b;
const SIMD_I16X8_SHR_S = 0x8c;
const SIMD_I16X8_SHR_U = 0x8d;
const SIMD_I16X8_ADD = 0x8e;
const SIMD_I16X8_ADD_SAT_S = 0x8f;
const SIMD_I16X8_ADD_SAT_U = 0x90;
const SIMD_I16X8_SUB = 0x91;
const SIMD_I16X8_SUB_SAT_S = 0x92;
const SIMD_I16X8_SUB_SAT_U = 0x93;
const SIMD_I16X8_MUL = 0x95;
const SIMD_I16X8_MIN_S = 0x96;
const SIMD_I16X8_MIN_U = 0x97;
const SIMD_I16X8_MAX_S = 0x98;
const SIMD_I16X8_MAX_U = 0x99;
const SIMD_I16X8_AVGR_U = 0x9b;
const SIMD_I32X4_ABS = 0xa0;
const SIMD_I32X4_NEG = 0xa1;
const SIMD_I32X4_ALL_TRUE = 0xa3;
const SIMD_I32X4_BITMASK = 0xa4;
const SIMD_I32X4_EXTEND_LOW_I16X8_S = 0xa7;
const SIMD_I32X4_EXTEND_HIGH_I16X8_S = 0xa8;
const SIMD_I32X4_EXTEND_LOW_I16X8_U = 0xa9;
const SIMD_I32X4_EXTEND_HIGH_I16X8_U = 0xaa;
const SIMD_I32X4_SHL = 0xab;
const SIMD_I32X4_SHR_S = 0xac;
const SIMD_I32X4_SHR_U = 0xad;
const SIMD_I32X4_ADD = 0xae;
const SIMD_I32X4_SUB = 0xb1;
const SIMD_I32X4_MUL = 0xb5;
const SIMD_I32X4_MIN_S = 0xb6;
const SIMD_I32X4_MIN_U = 0xb7;
const SIMD_I32X4_MAX_S = 0xb8;
const SIMD_I32X4_MAX_U = 0xb9;
const SIMD_I32X4_DOT_I16X8_S = 0xba;
const SIMD_I64X2_ABS = 0xc0;
const SIMD_I64X2_NEG = 0xc1;
const SIMD_I64X2_BITMASK = 0xc4;
const SIMD_I64X2_EXTEND_LOW_I32X4_S = 0xc7;
const SIMD_I64X2_EXTEND_HIGH_I32X4_S = 0xc8;
const SIMD_I64X2_EXTEND_LOW_I32X4_U = 0xc9;
const SIMD_I64X2_EXTEND_HIGH_I32X4_U = 0xca;
const SIMD_I64X2_SHL = 0xcb;
const SIMD_I64X2_SHR_S = 0xcc;
const SIMD_I64X2_SHR_U = 0xcd;
const SIMD_I64X2_ADD = 0xce;
const SIMD_I64X2_SUB = 0xd1;
const SIMD_I64X2_MUL = 0xd5;
const SIMD_F32X4_CEIL = 0x67;
const SIMD_F32X4_FLOOR = 0x68;
const SIMD_F32X4_TRUNC = 0x69;
const SIMD_F32X4_NEAREST = 0x6a;
const SIMD_F64X2_CEIL = 0x74;
const SIMD_F64X2_FLOOR = 0x75;
const SIMD_F64X2_TRUNC = 0x7a;
const SIMD_F64X2_NEAREST = 0x94;
const SIMD_F32X4_ABS = 0xe0;
const SIMD_F32X4_NEG = 0xe1;
const SIMD_F32X4_SQRT = 0xe3;
const SIMD_F32X4_ADD = 0xe4;
const SIMD_F32X4_SUB = 0xe5;
const SIMD_F32X4_MUL = 0xe6;
const SIMD_F32X4_DIV = 0xe7;
const SIMD_F32X4_MIN = 0xe8;
const SIMD_F32X4_MAX = 0xe9;
const SIMD_F32X4_PMIN = 0xea;
const SIMD_F32X4_PMAX = 0xeb;
const SIMD_F64X2_ABS = 0xec;
const SIMD_F64X2_NEG = 0xed;
const SIMD_F64X2_SQRT = 0xef;
const SIMD_F64X2_ADD = 0xf0;
const SIMD_F64X2_SUB = 0xf1;
const SIMD_F64X2_MUL = 0xf2;
const SIMD_F64X2_DIV = 0xf3;
const SIMD_F64X2_MIN = 0xf4;
const SIMD_F64X2_MAX = 0xf5;
const SIMD_F64X2_PMIN = 0xf6;
const SIMD_F64X2_PMAX = 0xf7;
const SIMD_I32X4_TRUNC_SAT_F32X4_S = 0xf8;
const SIMD_I32X4_TRUNC_SAT_F32X4_U = 0xf9;
const SIMD_F32X4_CONVERT_I32X4_S = 0xfa;
const SIMD_F32X4_CONVERT_I32X4_U = 0xfb;
const SIMD_V128_LOAD32_ZERO = 0x5c;
const SIMD_V128_LOAD64_ZERO = 0x5d;
const SIMD_I16X8_EXTMUL_LOW_I8X16_S = 0x9c;
const SIMD_I16X8_EXTMUL_HIGH_I8X16_S = 0x9d;
const SIMD_I16X8_EXTMUL_LOW_I8X16_U = 0x9e;
const SIMD_I16X8_EXTMUL_HIGH_I8X16_U = 0x9f;
const SIMD_I32X4_EXTMUL_LOW_I16X8_S = 0xbc;
const SIMD_I32X4_EXTMUL_HIGH_I16X8_S = 0xbd;
const SIMD_I32X4_EXTMUL_LOW_I16X8_U = 0xbe;
const SIMD_I32X4_EXTMUL_HIGH_I16X8_U = 0xbf;
const SIMD_I64X2_EXTMUL_LOW_I32X4_S = 0xdc;
const SIMD_I64X2_EXTMUL_HIGH_I32X4_S = 0xdd;
const SIMD_I64X2_EXTMUL_LOW_I32X4_U = 0xde;
const SIMD_I64X2_EXTMUL_HIGH_I32X4_U = 0xdf;
const SIMD_I16X8_Q15MULR_SAT_S = 0x82;
const SIMD_V128_ANY_TRUE = 0x53;
const SIMD_V128_LOAD8_LANE = 0x54;
const SIMD_V128_LOAD16_LANE = 0x55;
const SIMD_V128_LOAD32_LANE = 0x56;
const SIMD_V128_LOAD64_LANE = 0x57;
const SIMD_V128_STORE8_LANE = 0x58;
const SIMD_V128_STORE16_LANE = 0x59;
const SIMD_V128_STORE32_LANE = 0x5a;
const SIMD_V128_STORE64_LANE = 0x5b;
const SIMD_I64X2_EQ = 0xd6;
const SIMD_I64X2_NE = 0xd7;
const SIMD_I64X2_LT_S = 0xd8;
const SIMD_I64X2_GT_S = 0xd9;
const SIMD_I64X2_LE_S = 0xda;
const SIMD_I64X2_GE_S = 0xdb;
const SIMD_I64X2_ALL_TRUE = 0xc3;
const SIMD_F64X2_CONVERT_LOW_I32X4_S = 0xfe;
const SIMD_F64X2_CONVERT_LOW_I32X4_U = 0xff;
const SIMD_I32X4_TRUNC_SAT_F64X2_S_ZERO = 0xfc;
const SIMD_I32X4_TRUNC_SAT_F64X2_U_ZERO = 0xfd;
const SIMD_F32X4_DEMOTE_F64X2_ZERO = 0x5e;
const SIMD_F64X2_PROMOTE_LOW_F32X4 = 0x5f;
const SIMD_I8X16_POPCNT = 0x62;
const SIMD_I16X8_EXTADD_PAIRWISE_I8X16_S = 0x7c;
const SIMD_I16X8_EXTADD_PAIRWISE_I8X16_U = 0x7d;
const SIMD_I32X4_EXTADD_PAIRWISE_I16X8_S = 0x7e;
const SIMD_I32X4_EXTADD_PAIRWISE_I16X8_U = 0x7f;

const ARG_ATOMIC_WAKE = 0x00;
const ARG_I32_ATOMIC_WAIT = 0x01;
const ARG_I64_ATOMIC_WAIT = 0x02;
const ARG_I32_ATOMIC_LOAD = 0x10;
const ARG_I64_ATOMIC_LOAD = 0x11;
const ARG_I32_ATOMIC_LOAD_8U = 0x12;
const ARG_I32_ATOMIC_LOAD_16U = 0x13;
const ARG_I64_ATOMIC_LOAD_8U = 0x14;
const ARG_I64_ATOMIC_LOAD_16U = 0x15;
const ARG_I64_ATOMIC_LOAD_32U = 0x16;
const ARG_I32_ATOMIC_STORE = 0x17;
const ARG_I64_ATOMIC_STORE = 0x18;
const ARG_I32_ATOMIC_STORE_8 = 0x19;
const ARG_I32_ATOMIC_STORE_16 = 0x1a;
const ARG_I64_ATOMIC_STORE_8 = 0x1b;
const ARG_I64_ATOMIC_STORE_16 = 0x1c;
const ARG_I64_ATOMIC_STORE_32 = 0x1d;
const ARG_I32_ATOMIC_RMW_ADD = 0x1e;
const ARG_I64_ATOMIC_RMW_ADD = 0x1f;
const ARG_I32_ATOMIC_RMW_ADD_8U = 0x20;
const ARG_I32_ATOMIC_RMW_ADD_16U = 0x21;
const ARG_I64_ATOMIC_RMW_ADD_8U = 0x22;
const ARG_I64_ATOMIC_RMW_ADD_16U = 0x23;
const ARG_I64_ATOMIC_RMW_ADD_32U = 0x24;
const ARG_I32_ATOMIC_RMW_SUB = 0x25;
const ARG_I64_ATOMIC_RMW_SUB = 0x26;
const ARG_I32_ATOMIC_RMW_SUB_8U = 0x27;
const ARG_I32_ATOMIC_RMW_SUB_16U = 0x28;
const ARG_I64_ATOMIC_RMW_SUB_8U = 0x29;
const ARG_I64_ATOMIC_RMW_SUB_16U = 0x2a;
const ARG_I64_ATOMIC_RMW_SUB_32U = 0x2b;
const ARG_I32_ATOMIC_RMW_AND = 0x2c;
const ARG_I64_ATOMIC_RMW_AND = 0x2d;
const ARG_I32_ATOMIC_RMW_AND_8U = 0x2e;
const ARG_I32_ATOMIC_RMW_AND_16U = 0x2f;
const ARG_I64_ATOMIC_RMW_AND_8U = 0x30;
const ARG_I64_ATOMIC_RMW_AND_16U = 0x31;
const ARG_I64_ATOMIC_RMW_AND_32U = 0x32;
const ARG_I32_ATOMIC_RMW_OR = 0x33;
const ARG_I64_ATOMIC_RMW_OR = 0x34;
const ARG_I32_ATOMIC_RMW_OR_8U = 0x35;
const ARG_I32_ATOMIC_RMW_OR_16U = 0x36;
const ARG_I64_ATOMIC_RMW_OR_8U = 0x37;
const ARG_I64_ATOMIC_RMW_OR_16U = 0x38;
const ARG_I64_ATOMIC_RMW_OR_32U = 0x39;
const ARG_I32_ATOMIC_RMW_XOR = 0x3a;
const ARG_I64_ATOMIC_RMW_XOR = 0x3b;
const ARG_I32_ATOMIC_RMW_XOR_8U = 0x3c;
const ARG_I32_ATOMIC_RMW_XOR_16U = 0x3d;
const ARG_I64_ATOMIC_RMW_XOR_8U = 0x3e;
const ARG_I64_ATOMIC_RMW_XOR_16U = 0x3f;
const ARG_I64_ATOMIC_RMW_XOR_32U = 0x40;
const ARG_I32_ATOMIC_RMW_XCHG = 0x41;
const ARG_I64_ATOMIC_RMW_XCHG = 0x42;
const ARG_I32_ATOMIC_RMW_XCHG_8U = 0x43;
const ARG_I32_ATOMIC_RMW_XCHG_16U = 0x44;
const ARG_I64_ATOMIC_RMW_XCHG_8U = 0x45;
const ARG_I64_ATOMIC_RMW_XCHG_16U = 0x46;
const ARG_I64_ATOMIC_RMW_XCHG_32U = 0x47;
const ARG_I32_ATOMIC_RMW_CMPXCHG = 0x48;
const ARG_I64_ATOMIC_RMW_CMPXCHG = 0x49;
const ARG_I32_ATOMIC_RMW_CMPXCHG_8U = 0x4a;
const ARG_I32_ATOMIC_RMW_CMPXCHG_16U = 0x4b;
const ARG_I64_ATOMIC_RMW_CMPXCHG_8U = 0x4c;
const ARG_I64_ATOMIC_RMW_CMPXCHG_16U = 0x4d;
const ARG_I64_ATOMIC_RMW_CMPXCHG_32U = 0x4e;

const convertOpcode = function (string) {
  const opcodeVal = opcodeStr[string];

  if (typeof opcodeVal === "undefined") {
    throw new Error("Invalid opcode " + string);
  }

  return opcodeVal;
};

const convertOpcodeArray = function (opcodeArray) {
  const result = [];

  for (let i = 0; i < opcodeArray.length; i++) {
    const thisElement = opcodeArray[i];

    let convertedElement = thisElement;

    if (typeof thisElement === "string") {
      convertedElement = convertOpcode(thisElement);
    }

    result.push(convertedElement);
  }

  return result;
};

const Uint8ToArray = function (x) {
  return [x & 0xff];
};

const Uint32ToArray = function (x) {
  return [x & 0x000000ff, (x & 0x0000ff00) >> 8, (x & 0x00ff0000) >> 16, (x & 0xff000000) >> 24];
};

const Uint64ToArray = function (x) {
  return [
    x & 0x00000000000000ff,
    (x & 0x000000000000ff00) >> 8,
    (x & 0x0000000000ff0000) >> 16,
    (x & 0x00000000ff000000) >> 24,
    (x & 0x000000ff00000000) >> 32,
    (x & 0x0000ff0000000000) >> 40,
    (x & 0x00ff000000000000) >> 48,
    (x & 0xff00000000000000) >> 56,
  ];
};

const VarUint32ToArray = function (x) {
  const result = [];
  let current = x;

  if (x == 0) {
    return [0];
  }

  while (current > 0) {
    let thisByte = current & 0x7f;

    current >>= 7;

    if (current) {
      thisByte |= 0x80;
    }

    result.push(thisByte);
  }

  return result;
};

const VarSint32ToArray = function (x) {
  const result = [];
  let current = x;

  while (1) {
    thisByte = current & 0x7f;
    current >>= 7;

    if (current == -1 && thisByte & 0x40) {
      result.push(thisByte);

      break;
    } else if (current == 0 && !(thisByte & 0x40)) {
      result.push(thisByte);

      break;
    } else {
      thisByte |= 0x80;

      result.push(thisByte);
    }
  }

  return result;
};

// From https://stackoverflow.com/questions/16893817/javascript-ascii-string-to-hex-byte-array
const stringToByteArray = function (str) {
  return str.split("").map(function (c) {
    return c.charCodeAt(0);
  });
};

const VarUint32 = function (value) {
  if (typeof value == "number") {
    return VarUint32ToArray(value);
  } else if (value instanceof WailVariable) {
    return value.varUint32();
  } else {
    // TODO Handle error
  }
};

// WailVariable is the base class representing values that will be resolved while parsing.
// Users can dictate the particular binary representation of a WailVariable by using
// the type methods (i32(), f32(), etc)
// If a representation is not explicitly selected, Wail will select a representation
// contextually if possible, or throw an exception if not
class WailVariable {
  constructor() {
    this._value = null;
  }

  get value() {
    if (this._value === null) {
      throw new Error("Attempted to resolve WailVariable before set");
    }

    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  i32() {
    if (this._value !== null) {
      return this.value;
    }

    return new WailI32(this);
  }

  f32() {
    if (this._value !== null) {
      const f32Array = new Float32Array([this._value]);

      return new Uint8Array(f32Array.buffer);
    }

    return new WailF32(this);
  }

  i64() {
    if (this._value !== null) {
      return this.value;
    }

    return new WailI64(this);
  }

  f64() {
    if (this._value !== null) {
      const f64Array = new Float64Array([this._value]);

      return new Uint8Array(f64Array.buffer);
    }

    return new WailF64(this);
  }

  varUint32() {
    if (this._value !== null) {
      return VarUint32(this.value);
    }

    return new WailVarUint32(this);
  }
}

class TypedWailVariable {
  constructor(parentVariable) {
    this._parent = parentVariable;
  }
}

class WailI32 extends TypedWailVariable {
  get value() {
    return Uint32ToArray(this._parent.value);
  }
}

class WailF32 extends TypedWailVariable {
  get value() {
    // TODO Fix
    return Uint32ToArray(this._parent.value);
  }
}

class WailI64 extends TypedWailVariable {
  get value() {
    return Uint64ToArray(this._parent.value);
  }
}

class WailF64 extends TypedWailVariable {
  get value() {
    // TODO Fix
    return Uint64ToArray(this._parent.value);
  }
}

class WailVarUint32 extends TypedWailVariable {
  get value() {
    return VarUint32ToArray(this._parent.value);
  }
}

const EMPTY_BYTES = new Uint8Array(0);

const BufferReader = class {
  // scanOnly: the caller wants the side effects of parsing (the type table, the
  // element table) but will never look at write(). Skipping the output buffer
  // avoids allocating 2× the input and memcpy'ing the whole thing through it —
  // for a discovery pass over a multi-MB WASM that is pure waste.
  constructor(buffer, scanOnly) {
    this.inBuffer = null;
    this.outBuffer = null;
    this._scanOnly = scanOnly === true;

    if (typeof buffer !== "undefined") {
      // Avoid copying when the caller already has a Uint8Array.
      // new Uint8Array(existingUint8Array) copies every byte; just assign instead.
      this.inBuffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);

      // The rewritten binary is the input plus a handful of imports/exports and
      // some re-encoded LEB128s — a few percent at most. Reserving 2× meant
      // zero-filling an extra whole WASM's worth of memory (tens of MB) on every
      // load. resize() still covers the case where the estimate is wrong.
      this.outBuffer = this._scanOnly
        ? null
        : new Uint8Array(this.inBuffer.length + (this.inBuffer.length >> 3) + 65536);
    } else if (!this._scanOnly) {
      this.outBuffer = new Uint8Array(1);
    }

    this.inPos = 0;
    this._copyPos = 0;
    this.outPos = 0;

    this._anchor = null;
  }

  load(buffer) {
    this.inBuffer = new Uint8Array(buffer);

    this.outBuffer = new Uint8Array(this.inBuffer.length * 2);
  }

  // Reinitialise for reuse without allocating a new output buffer.
  // If the new input is larger than the current output buffer can hold (2×),
  // the output buffer is reallocated; otherwise it is reused.
  reset(newInput) {
    this.inBuffer = newInput;
    this.inPos = 0;
    this._copyPos = 0;
    this._anchor = null;
    if (!this._scanOnly) {
      const needed = newInput.length * 2;
      if (!this.outBuffer || this.outBuffer.length < needed) {
        this.outBuffer = new Uint8Array(needed);
      }
    }
    this.outPos = 0;
  }

  // Write a VarUint32 (LEB128) value directly to outBuffer without creating
  // an intermediate array.  Grows outBuffer if needed.
  writeVarUint32(val) {
    if (this._scanOnly) { this.updateCopyPosition(); return; }
    do {
      while (this.outPos >= this.outBuffer.length) this.resize();
      const b = val & 0x7f;
      val >>>= 7;
      this.outBuffer[this.outPos++] = val > 0 ? (b | 0x80) : b;
    } while (val > 0);
    this.updateCopyPosition();
  }

  // Write a contiguous slice [srcOffset, srcOffset+length) of src directly
  // to outBuffer.  Avoids the intermediate .slice() that copyBuffer needs when
  // called with a Uint8Array.
  writeDirectBytes(src, srcOffset, length) {
    if (this._scanOnly) { this.updateCopyPosition(); return; }
    while (this.outPos + length > this.outBuffer.length) this.resize();
    this.outBuffer.set(src.subarray(srcOffset, srcOffset + length), this.outPos);
    this.outPos += length;
    this.updateCopyPosition();
  }

  resize() {
    if (this.outBuffer.length == 0) {
      throw new Error("Attempted to resize 0-length buffer");
    }
    // Grow factor of 2x instead of 1.25x — halves the number of resize calls
    // (each of which copies the entire prefix) at the cost of slightly more
    // peak memory. For multi-MB WASM outputs this is a clear win.
    const newBuffer = new Uint8Array(this.outBuffer.length * 2);
    newBuffer.set(this.outBuffer.subarray(0, this.outPos));
    this.outBuffer = newBuffer;
  }

  readUint8() {
    return this.inBuffer[this.inPos++];
  }

  readUint32() {
    const b1 = this.inBuffer[this.inPos++];
    const b2 = this.inBuffer[this.inPos++];
    const b3 = this.inBuffer[this.inPos++];
    const b4 = this.inBuffer[this.inPos++];

    return b1 | (b2 << 8) | (b3 << 16) | (b4 << 24);
  }

  readVarUint32() {
    // Inline single-byte fast path: the vast majority of WASM LEB128 operands
    // (small local indices, function counts, short constants) fit in one byte.
    // Skipping the loop setup saves ~70% of the work for those values.
    const b0 = this.inBuffer[this.inPos++];
    if (!(b0 & 0x80)) return b0;
    let result = b0 & 0x7f;
    let shift = 7;
    let byte;
    do {
      byte = this.inBuffer[this.inPos++];
      result |= (byte & 0x7f) << shift;
      shift += 7;
    } while (byte & 0x80);
    return result;
  }

  readUint64() {
    const b1 = this.inBuffer[this.inPos++];
    const b2 = this.inBuffer[this.inPos++];
    const b3 = this.inBuffer[this.inPos++];
    const b4 = this.inBuffer[this.inPos++];
    const b5 = this.inBuffer[this.inPos++];
    const b6 = this.inBuffer[this.inPos++];
    const b7 = this.inBuffer[this.inPos++];
    const b8 = this.inBuffer[this.inPos++];

    return b1 | (b2 << 8) | (b3 << 16) | (b4 << 24) | (b5 << 32) | (b6 << 40) | (b7 << 48) | (b8 << 56);
  }

  readUint128() {
    const b1 = this.inBuffer[this.inPos++];
    const b2 = this.inBuffer[this.inPos++];
    const b3 = this.inBuffer[this.inPos++];
    const b4 = this.inBuffer[this.inPos++];
    const b5 = this.inBuffer[this.inPos++];
    const b6 = this.inBuffer[this.inPos++];
    const b7 = this.inBuffer[this.inPos++];
    const b8 = this.inBuffer[this.inPos++];
    const b9 = this.inBuffer[this.inPos++];
    const b10 = this.inBuffer[this.inPos++];
    const b11 = this.inBuffer[this.inPos++];
    const b12 = this.inBuffer[this.inPos++];
    const b13 = this.inBuffer[this.inPos++];
    const b14 = this.inBuffer[this.inPos++];
    const b15 = this.inBuffer[this.inPos++];
    const b16 = this.inBuffer[this.inPos++];

    return (
      b1 |
      (b2 << 8) |
      (b3 << 16) |
      (b4 << 24) |
      (b5 << 32) |
      (b6 << 40) |
      (b7 << 48) |
      (b8 << 56) |
      (b9 << 64) |
      (b10 << 72) |
      (b11 << 80) |
      (b12 << 88) |
      (b13 << 96) |
      (b14 << 104) |
      (b15 << 112) |
      (b16 << 120)
    );
  }

  readBytes(length) {
    // Bulk copy via subarray + slice — orders of magnitude faster than the
    // previous per-byte loop on multi-MB WASM payloads.
    const result = this.inBuffer.slice(this.inPos, this.inPos + length);
    this.inPos += length;
    return result;
  }

  copyBuffer(buffer) {
    if (this._scanOnly) { this.updateCopyPosition(); return; }
    const len = buffer.length;
    while (len + this.outPos > this.outBuffer.length) {
      this.resize();
    }
    // `buffer` may be a plain number[] (from VarUint32ToArray etc) or a typed
    // array. Uint8Array.set handles both via the typed-array form, but plain
    // arrays need a conversion. Branch keeps the typed-array fast path.
    if (buffer instanceof Uint8Array || (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(buffer))) {
      this.outBuffer.set(buffer, this.outPos);
    } else {
      for (let i = 0; i < len; i++) this.outBuffer[this.outPos + i] = buffer[i];
    }
    this.outPos += len;
    this.updateCopyPosition();
  }

  commitBytes() {
    if (this._scanOnly) { this._copyPos = this.inPos; return; }
    const len = this.inPos - this._copyPos;
    if (len === 0) return;
    while (this.outPos + len > this.outBuffer.length) this.resize();
    // Fast path for the most common case (single-byte no-arg instructions).
    if (len === 1) {
      this.outBuffer[this.outPos++] = this.inBuffer[this._copyPos++];
      return;
    }
    this.outBuffer.set(this.inBuffer.subarray(this._copyPos, this.inPos), this.outPos);
    this.outPos += len;
    this._copyPos = this.inPos;
  }

  updateCopyPosition() {
    this._copyPos = this.inPos;
  }

  setAnchor() {
    this._anchor = this.outPos;
  }

  readFromAnchor() {
    return this.outBuffer.slice(this._anchor, this.outPos);
  }

  writeAtAnchor(buffer) {
    const len = buffer.length;
    while (this._anchor + len > this.outBuffer.length) {
      this.resize();
    }
    if (buffer instanceof Uint8Array || (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(buffer))) {
      this.outBuffer.set(buffer, this._anchor);
    } else {
      for (let i = 0; i < len; i++) this.outBuffer[this._anchor + i] = buffer[i];
    }
    this.outPos = this._anchor + len;
  }

  write() {
    if (this._scanOnly) return EMPTY_BYTES;
    // subarray is a zero-copy view; callers either pass it to copyBuffer (which
    // copies) or to WebAssembly.instantiate (which also copies internally).
    // There is no risk of the underlying buffer being mutated after this call
    // since the reader is not used again.
    return this.outBuffer.subarray(0, this.outPos);
  }
};

class WailParser extends BufferReader {
  // scanOnly parsers exist purely to populate the type/element tables; they
  // never produce a rewritten binary. See BufferReader's constructor.
  constructor(bufferSource, scanOnly) {
    super(bufferSource, scanOnly);

    this._finished = false;

    this._newSections = [];

    this._removeSectionIds = [];

    this._resolvedTables = false;

    // We need to keep track of how many imported functions there are to
    // properly rebuild function table
    this._importFuncCount = 0;
    this._importFuncNewCount = 0;

    // Same logic as with imported functions
    this._importGlobalCount = 0;
    this._importGlobalNewCount = 0;

    this._globalImportCallback = null;
    this._importCallbacks = [];

    this._globalExportCallback = null;
    this._exportCallbacks = [];

    this._globalFunctionCallback = null;
    this._functionCallbacks = [];

    this._globalInstructionCallback = null;
    this._instructionCallbacks = {};
    // Fast-path flag: if false, the instruction callback dispatch is skipped
    // entirely per instruction — saves a property lookup on every opcode.
    this._hasInstructionCallbacks = false;

    // Inline call-hook data — avoids per-OP_CALL BufferReader allocation and
    // outBuffer.slice() that the generic _instructionCallbacks path incurs.
    this._callHookMap = null;
    this._callHookGetReplacement = null;
    this._callHookOnApplied = null;

    // Pre-computed flag: true only when per-function callbacks or existingEntries
    // are registered. Lets _readFunction skip 3 property lookups per function when
    // neither feature is used (the common case in UWMK).
    this._hasSpecialFunctions = false;

    this._sectionOptions = {};

    // Each section has three sets of parameters that can be set before parsing begins
    //      "newEntries" includes newly created section entries
    //      "existingExtries" includes parameters used to modify existing entries
    //      "pending" includes variables that require info from this section to resolve
    for (let i = 0; i <= MAX_SECTION_ID; i++) {
      this._sectionOptions[i] = {
        newEntries: [],
        existingEntries: [],
        pending: [],
      };
    }

    // To keep parsing as minimal as possible, we keep two masks of sections the user
    // has requested we parse
    //
    // The first defines sections that the binary must have. If the binary does not already
    // have this section, we will add it
    //
    // The second defines sections that should be parsed if they exist. There is no reason
    // to add these new sections if they do not exist
    this._requiredSectionFlags = 0;
    this._optionalSectionFlags = 0;

    this._parsedSections = 0;

    this.__variables = [];
  }

  parse() {
    // Read magic and version in one operation if possible
    const magic = this.readUint32();

    // Early exit for invalid magic
    if (magic !== 0x6d736100) {
      throw new Error("Invalid magic. Probably not a WebAssembly binary");
    }

    // Read version (still needed for validation but we don't use it)
    this.readUint32();

    const bufferLength = this.inBuffer.length;
    while (this.inPos < bufferLength) {
      this._readSection();
    }

    // Single commit at the end (more efficient than multiple commits)
    this.commitBytes();

    // Set finished flag
    this._finished = true;

    // Optional: return this for method chaining
    return this;
  }

  // TODO Support removing sections by name
  removeSection(id) {
    if (typeof id === "number") {
      this._removeSectionIds.push(id);
    } else {
      throw new Error("Invalid argument to removeSection()");
    }
  }

  addTypeEntry(options) {
    const newEntry = {};

    const form = options.form;

    if (typeof form === "number") {
      newEntry.form = form;
    } else {
      newEntry.form = convertValueType(form);
    }

    const params = options.params;

    if (params instanceof Array) {
      const convertedParams = [];

      for (let i = 0; i < params.length; i++) {
        const thisParam = params[i];

        if (typeof thisParam === "number") {
          convertedParams.push(thisParam);
        } else {
          convertedParams.push(convertValueType(thisParam));
        }
      }

      newEntry.params = convertedParams;
    } else {
      newEntry.params = [];
    }

    const returnType = options.returnType;

    if (typeof returnType === "number") {
      newEntry.returnType = returnType;
    } else if (typeof returnType === "string") {
      newEntry.returnType = convertValueType(returnType);
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_TYPE].newEntries.push(newEntry);

    this._requiredSectionFlags |= 1 << SECTION_TYPE;

    return newVariable;
  }

  editTypeEntry(index, options) {
    const savedEntry = {};

    // As is, editTypeEntry() has no purpose to receive WailVariables
    // So unlike some other edit functions, it only accepts numeric indices
    if (typeof index !== "number") {
      throw new Error("Invalid index in editTypeEntry()");
    }

    savedEntry.index = index;

    const params = options.params;

    if (params instanceof Array) {
      savedEntry.params = params;
    } else {
      savedEntry.params = [];
    }

    const returnType = options.returnType;

    if (returnType) {
      savedEntry.returnType = returnType;
    }

    this._sectionOptions[SECTION_TYPE].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_TYPE;
  }

  addImportEntry(options) {
    const newEntry = {};

    const moduleStr = options.moduleStr;

    if (typeof moduleStr == "string" || moduleStr instanceof String) {
      newEntry.moduleStr = moduleStr;
    } else {
      throw new Error("Invalid moduleStr");
    }

    const fieldStr = options.fieldStr;

    if (typeof fieldStr == "string" || fieldStr instanceof String) {
      newEntry.fieldStr = fieldStr;
    } else {
      throw new Error("Invalid fieldStr");
    }

    const kind = options.kind;

    let convertedKind;

    if (typeof kind === "number") {
      convertedKind = kind;
    } else {
      convertedKind = convertKind(kind);
    }

    let type = options.type;

    newEntry.kind = convertedKind;

    switch (convertedKind) {
      case KIND_FUNC:
        this._importFuncNewCount++;

        if (typeof type === "number") {
          newEntry.type = type;
        } else if (type instanceof WailVarUint32) {
          newEntry.type = type;
        } else if (type instanceof WailVariable) {
          newEntry.type = type.varUint32();
        } else {
          throw new Error("Invalid type");
        }

        break;
      case KIND_GLOBAL:
        this._importGlobalNewCount++;

        if (typeof type === "number") {
          newEntry.type = type;
        } else {
          throw new Error("Invalid type");
        }

        // Mutable imported globals is not supported by all browsers, but
        // we allow it regardless.
        if (options.mutability === 0 || options.mutability === 1 || options.mutability === true || options.mutability === false) {
          newEntry.mutability = options.mutability;
        } else {
          throw new Error("Invalid mutability");
        }

        break;
      case KIND_MEMORY:
        throw new Error("Adding new memory object not currently supported");
      case KIND_TABLE:
        throw new Error("Adding new table object not currently supported");
      default:
        throw new Error("Invalid kind");
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_IMPORT].newEntries.push(newEntry);

    this._requiredSectionFlags |= 1 << SECTION_IMPORT;

    // Adding functions to the import section changes the function table.
    // This means we need to patch up any other section that contains function indexes
    if (this._importFuncNewCount > 0) {
      this._optionalSectionFlags |= 1 << SECTION_EXPORT;
      this._optionalSectionFlags |= 1 << SECTION_ELEMENT;
      this._optionalSectionFlags |= 1 << SECTION_CODE;
      this._optionalSectionFlags |= 1 << SECTION_START;
    }

    // Same logic as above. If we add an imported global, we need to parse
    // any potentially affected sections.
    if (this._importGlobalNewCount > 0) {
      this._optionalSectionFlags |= 1 << SECTION_EXPORT;
      this._optionalSectionFlags |= 1 << SECTION_CODE;
    }

    return newVariable;
  }

  // TODO WAIL does not currently support modifying the "kind" of an existing import
  // Is there any realistic reason to do so?
  editImportEntry(index, options) {
    const savedEntry = {};

    savedEntry.index = index;

    if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Invalid index in editImportEntry()");
    }

    const moduleStr = options.moduleStr;

    if (typeof moduleStr == "string" || moduleStr instanceof String) {
      savedEntry.moduleStr = stringToByteArray(moduleStr);
    }

    const fieldStr = options.fieldStr;

    if (typeof fieldStr == "string" || fieldStr instanceof String) {
      savedEntry.fieldStr = stringToByteArray(fieldStr);
    }

    this._sectionOptions[SECTION_IMPORT].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_IMPORT;
  }

  addImportElementParser(index, callback) {
    if (typeof callback !== "function") {
      throw new Error("Bad callback in addImportElementParser()");
    }

    if (index === null) {
      this._globalImportCallback = callback;
    } else if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Bad id " + index + " in addImportElementParser()");
    } else {
      const callbackObj = {};
      callbackObj.index = index;
      callbackObj.callback = callback;

      this._importCallbacks.push(callbackObj);
    }

    this._optionalSectionFlags |= 1 << SECTION_IMPORT;
  }

  addFunctionEntry(options) {
    const newEntry = {};

    const type = options.type;

    if (typeof type === "number") {
      newEntry.type = type;
    } else if (type instanceof WailVarUint32) {
      newEntry.type = type;
    } else if (type instanceof WailVariable) {
      newEntry.type = type.varUint32();
    } else {
      throw new Error("Invalid type");
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_FUNCTION].newEntries.push(newEntry);
    this._requiredSectionFlags |= 1 << SECTION_FUNCTION;

    return newVariable;
  }

  editFunctionEntry(index, options) {
    const savedEntry = {};

    savedEntry.index = index;

    if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Invalid index in editFunctionEntry()");
    }

    const givenType = options.type;

    if (typeof givenType !== "number") {
      throw new Error("Invalid type in editFunctionEntry()");
    }

    savedEntry.type = givenType;

    this._sectionOptions[SECTION_FUNCTION].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_FUNCTION;
  }

  getFunctionIndex(oldIndex) {
    if (this._finished) {
      if (oldIndex instanceof WailVariable) {
        return oldIndex;
      }
      const newVariable = this._createVariable();
      newVariable.value = this._getAdjustedFunctionIndex(oldIndex);
      return newVariable;
    }

    const newVariable = this._createVariable();

    if (typeof oldIndex !== "number") {
      throw new Error("Invalid index in getFunctionIndex()");
    }

    this._sectionOptions[SECTION_FUNCTION].pending.push({
      oldIndex: oldIndex,
      variable: newVariable,
    });

    // Resolving function indexes can be done by only parsing the IMPORT section
    // since newly added FUNCTION entries will be added to the end of the list
    this._optionalSectionFlags |= 1 << SECTION_IMPORT;

    return newVariable;
  }

  addGlobalEntry(options) {
    const newEntry = {};

    newEntry.globalType = {};

    if (typeof options.globalType === "undefined") {
      throw new Error("Invalid globalType");
    }

    if (typeof options.globalType.contentType === "number") {
      newEntry.globalType.contentType = options.globalType.contentType;
    } else {
      newEntry.globalType.contentType = convertValueType(options.globalType.contentType);
    }

    const mutability = options.globalType.mutability;

    if (mutability == true) {
      newEntry.globalType.mutability = 1;
    } else if (mutability == false) {
      newEntry.globalType.mutability = 0;
    } else {
      throw new Error("Invalid mutability");
    }

    if (options.initExpr instanceof Array) {
      newEntry.initExpr = convertOpcodeArray(options.initExpr);
    } else {
      // Default to initExpr value of "i32.const 0" if not specified
      newEntry.initExpr = [OP_I32_CONST, VarUint32(0x00), OP_END];
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_GLOBAL].newEntries.push(newEntry);

    this._requiredSectionFlags |= 1 << SECTION_GLOBAL;

    return newVariable;
  }

  // TODO Handle editing initExpr
  editGlobalEntry(globalIndex, options) {
    const savedEntry = {};

    if (typeof globalIndex === "number") {
      console.warn("Using raw indexes in editGlobalEntry() can have unpredictable " + "results. Consider using getGlobalIndex() instead");
    } else if (!(globalIndex instanceof WailVariable)) {
      throw new Error("Invalid globalIndex in addCodeEntry()");
    }

    savedEntry.index = globalIndex;

    savedEntry.globalType = {};

    if (typeof options.globalType === "undefined") {
      throw new Error("Invalid globalType");
    }

    if (typeof options.globalType.contentType === "number") {
      savedEntry.globalType.contentType = options.globalType.contentType;
    } else {
      savedEntry.globalType.contentType = convertValueType(options.globalType.contentType);
    }

    const mutability = options.globalType.mutability;

    if (mutability == true) {
      savedEntry.globalType.mutability = 1;
    } else if (mutability == false) {
      savedEntry.globalType.mutability = 0;
    } else {
      throw new Error("Invalid mutability");
    }

    this._sectionOptions[SECTION_GLOBAL].existingEntries.push(savedEntry);

    this._requiredSectionFlags |= 1 << SECTION_GLOBAL;
  }

  getGlobalIndex(oldIndex) {
    if (this._finished) {
      if (oldIndex instanceof WailVariable) {
        return oldIndex.value;
      } else {
        return this._getAdjustedGlobalIndex(oldIndex);
      }
    }

    const newVariable = this._createVariable();

    if (typeof oldIndex !== "number") {
      throw new Error("Invalid index in getGlobalIndex()");
    }

    const pendingOptions = {
      oldIndex: oldIndex,
      variable: newVariable,
    };

    this._sectionOptions[SECTION_GLOBAL].pending.push(pendingOptions);

    // Resolving function indexes can be done by only parsing the IMPORT section
    // since newly added GLOBAL entries will be added to the end of the list
    this._optionalSectionFlags |= 1 << SECTION_IMPORT;

    return newVariable;
  }

  addExportEntry(index, options) {
    const newEntry = {};

    if (typeof options.fieldStr == "string" || options.fieldStr instanceof String) {
      newEntry.fieldStr = options.fieldStr;
    } else {
      throw new Error("Invalid fieldStr");
    }

    if (typeof options.kind == "number") {
      newEntry.kind = options.kind;
    } else {
      newEntry.kind = convertKind(options.kind);
    }

    if (typeof index === "number") {
      newEntry.index = index;
    } else if (index instanceof WailVarUint32) {
      newEntry.index = index;
    } else if (index instanceof WailVariable) {
      newEntry.index = index.varUint32();
    } else {
      throw new Error("Invalid type");
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_EXPORT].newEntries.push(newEntry);

    this._requiredSectionFlags |= 1 << SECTION_EXPORT;

    return newVariable;
  }

  editExportEntry(index, options) {
    const savedEntry = {};

    savedEntry.index = index;

    if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Invalid index in editExportEntry()");
    }

    const fieldStr = options.fieldStr;

    if (typeof fieldStr == "string" || fieldStr instanceof String) {
      savedEntry.fieldStr = stringToByteArray(fieldStr);
    }

    // TODO Validate
    savedEntry.kind = options.kind;
    savedEntry.funcIndex = options.index;

    this._sectionOptions[SECTION_EXPORT].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_EXPORT;
  }

  addExportElementParser(index, callback) {
    if (typeof callback !== "function") {
      throw new Error("Bad callback in addExportElementParser()");
    }

    if (index === null) {
      this._globalExportCallback = callback;
    } else if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Bad id " + index + " in addExportElementParser()");
    } else {
      const callbackObj = {};
      callbackObj.index = index;
      callbackObj.callback = callback;

      this._exportCallbacks.push(callbackObj);
    }

    this._optionalSectionFlags |= 1 << SECTION_EXPORT;
  }

  // There is no addStartEntry since the start section can only have one element
  editStartEntry(newIndex) {
    if (typeof newIndex !== "number" && !(newIndex instanceof WailVariable)) {
      throw new Error("Invalid index in editStartEntry()");
    }

    this._sectionOptions[SECTION_START].existingEntries.push(newIndex);

    // Unlike other edit functions, editing the START entry should add the
    // section if it doesn't exist
    this._requiredSectionFlags |= 1 << SECTION_START;
  }

  // TODO Validate
  addElementEntry(options) {
    const newVariable = this._createVariable();

    options.variable = newVariable;

    this._sectionOptions[SECTION_ELEMENT].newEntries.push(options);

    this._requiredSectionFlags |= 1 << SECTION_ELEMENT;

    return newVariable;
  }

  editElementEntry(index, options) {
    const savedEntry = {};

    savedEntry.index = index;

    if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Invalid index in editElementEntry()");
    }

    savedEntry.elems = [];

    this._sectionOptions[SECTION_ELEMENT].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_ELEMENT;
  }

  addCodeEntry(funcIndex, options) {
    const newEntry = {};

    if (typeof funcIndex === "number") {
      console.warn("Using raw indexes in addCodeEntry() can have unpredictable " + "results. Consider using getFunctionIndex() instead");
    } else if (!(funcIndex instanceof WailVariable)) {
      throw new Error("Invalid funcIndex in addCodeEntry()");
    }

    newEntry.index = funcIndex;

    const locals = options.locals;

    if (locals instanceof Array) {
      const fixedLocals = [];

      for (let i = 0; i < locals.length; i++) {
        const thisLocal = locals[i];

        if (typeof thisLocal === "number") {
          fixedLocals.push(thisLocal);
        } else if (typeof thisLocal === "string") {
          fixedLocals.push(convertValueType(thisLocal));
        } else {
          throw new Error("Invalid local entry in addCodeEntry()");
        }
      }

      newEntry.locals = fixedLocals;
    } else {
      newEntry.locals = [];
    }

    const code = options.code;

    if (code instanceof Array) {
      newEntry.code = convertOpcodeArray(code);
    } else {
      throw new Error("Invalid code");
    }

    const newVariable = this._createVariable();

    newEntry.variable = newVariable;

    this._sectionOptions[SECTION_CODE].newEntries.push(newEntry);

    this._requiredSectionFlags |= 1 << SECTION_CODE;

    return newVariable;
  }

  editCodeEntry(funcIndex, options) {
    const savedEntry = {};

    if (typeof funcIndex === "number") {
      console.warn("Using raw indexes in editCodeEntry() can have unpredictable " + "results. Consider using getFunctionIndex() instead");
    } else if (!(funcIndex instanceof WailVariable)) {
      throw new Error("Invalid funcIndex in addCodeEntry()");
    }

    savedEntry.index = funcIndex;

    const locals = options.locals;

    if (locals instanceof Array) {
      const fixedLocals = [];

      for (let i = 0; i < locals.length; i++) {
        const thisLocal = locals[i];

        if (typeof thisLocal === "number") {
          fixedLocals.push(thisLocal);
        } else if (typeof thisLocal === "string") {
          fixedLocals.push(convertValueType(thisLocal));
        } else {
          throw new Error("Invalid local entry in addCodeEntry()");
        }
      }

      savedEntry.locals = fixedLocals;
    } else {
      savedEntry.locals = [];
    }

    const code = options.code;

    if (code instanceof Array) {
      savedEntry.code = convertOpcodeArray(code);
    } else {
      throw new Error("Invalid code");
    }

    this._sectionOptions[SECTION_CODE].existingEntries.push(savedEntry);

    this._hasSpecialFunctions = true;
    this._optionalSectionFlags |= 1 << SECTION_IMPORT;
    this._optionalSectionFlags |= 1 << SECTION_CODE;
  }

  // TODO Validate
  addDataEntry(options) {
    const newVariable = this._createVariable();

    options.variable = newVariable;

    this._sectionOptions[SECTION_DATA].newEntries.push(options);

    this._requiredSectionFlags |= 1 << SECTION_DATA;

    return newVariable;
  }

  // TODO Validate
  editDataEntry(index, options) {
    const savedEntry = {};

    if (typeof index !== "number") {
      throw new Error("Invalid index in editTypeEntry()");
    }

    savedEntry.index = index;

    if (typeof options.data === "string") {
      savedEntry.data = stringToByteArray(options.data);
    } else {
      savedEntry.data = options.data;
    }

    this._sectionOptions[SECTION_DATA].existingEntries.push(savedEntry);

    this._optionalSectionFlags |= 1 << SECTION_DATA;
  }

  addCodeElementParser(index, callback) {
    if (typeof callback !== "function") {
      throw new Error("Bad callback in addCodeElementParser()");
    }

    if (index === null) {
      this._globalFunctionCallback = callback;
    } else if (typeof index !== "number" && !(index instanceof WailVariable)) {
      throw new Error("Bad id " + index + " in addCodeElementParser()");
    } else {
      const callbackObj = {};
      callbackObj.index = index;
      callbackObj.callback = callback;

      this._functionCallbacks.push(callbackObj);
    }

    this._hasSpecialFunctions = true;
    this._optionalSectionFlags |= 1 << SECTION_IMPORT;
    this._optionalSectionFlags |= 1 << SECTION_CODE;
  }

  // TODO Global callbacks
  addInstructionParser(opcode, callback) {
    if (typeof callback !== "function") {
      throw new Error("Bad callback in addInstructionParser()");
    }

    if (opcode === null) {
      this._globalInstructionCallback = callback;
    } else if (isNaN(opcode) && !(opcode instanceof WailVariable)) {
      throw new Error("Bad opcode " + opcode + " in addCodeElementParser()");
    } else {
      this._instructionCallbacks[opcode] = callback;
    }

    this._hasInstructionCallbacks = true;
    this._optionalSectionFlags |= 1 << SECTION_CODE;
  }

  // High-performance alternative to addInstructionParser(OP_CALL, ...).
  // Stores the hook map directly on the parser so the OP_CALL case in
  // _readInstruction can do an inline Map lookup without allocating a
  // BufferReader or slicing the output buffer per call instruction.
  //
  //   hookMap       — Map<adjustedCallTarget, hookArrayIndex>
  //   getReplacement(hookIdx) — returns the replacement function index (number)
  //   onApplied(hookIdx)      — called when a hook is applied (may be null)
  setCallHookData(hookMap, getReplacement, onApplied) {
    this._callHookMap = hookMap;
    this._callHookGetReplacement = getReplacement;
    this._callHookOnApplied = onApplied;
    this._optionalSectionFlags |= 1 << SECTION_CODE;
  }

  addRawSection(id, sectionBytes) {
    const sectionEntry = {};

    if (typeof id !== "number") {
      throw new Error("Bad section index " + index + " in addRawSection()");
    }

    sectionEntry.id = id;
    sectionEntry.bytes = sectionBytes;

    this._newSections.push(sectionEntry);
  }

  _createVariable() {
    const variableId = this.__variables.length;

    const newVariable = new WailVariable(this, variableId);

    this.__variables.push(newVariable);

    return newVariable;
  }

  _getVariable(id) {
    return this.__variables[id];
  }

  _setVariable(id, value) {
    this.__variables[id] = value;
  }

  // Parses an array in order to expand any variables to their proper representation.
  // Throws an exception if the user has not specified a binary representation
  // (Such as passing a WailVariable instead of a TypedWailVariable
  _expandArrayVariables(array) {
    for (let i = 0; i < array.length; i++) {
      const currentValue = array[i];

      // TODO Remove spread operator since it's so slow
      if (currentValue instanceof Array) {
        array.splice(i, 1);

        array.splice(i, 0, ...currentValue);
      } else if (currentValue instanceof TypedWailVariable) {
        const thisVariable = currentValue;

        array.splice(i, 1);

        array.splice(i, 0, ...thisVariable.value);
      }
      // TODO Improve
      else if (currentValue instanceof WailVariable) {
        throw new Error("Untyped WailVariable in " + "_expandArrayVariables()");
      }
    }

    return array;
  }

  _readSection() {
    this.commitBytes();

    const id = this.readUint8();

    if (id > MAX_SECTION_ID) {
      throw new Error("Illegal section ID " + id + ". Probably parsing incorrectly");
    }

    let payloadLen;

    // Skip over removed sections
    if (this._removeSectionIds.includes(id)) {
      payloadLen = this.readVarUint32();
      this.inPos += payloadLen;   // advance past payload without allocating a copy

      this.updateCopyPosition();

      return;
    }

    let parseSection = false;

    if (this._requiredSectionFlags & (1 << id) || this._optionalSectionFlags & (1 << id)) {
      parseSection = true;
    }

    // The DataCount section violates the usual rule that non-custom sections must occur in
    // numeric order. As a result, we must not assume a section is missing just because we have
    // encountered the DataCount section
    if (id != SECTION_DATACOUNT || id != SECTION_TAG) {
      // At this point we want to check if a required section does not exist
      // If so, we want to add an empty version of that section and add any new
      // elements to it
      for (let missingId = 0; missingId < id; missingId++) {
        const thisFlag = 1 << missingId;

        const thisSectionRequired = this._requiredSectionFlags & thisFlag;

        if (thisSectionRequired && !(thisSectionRequired & this._parsedSections)) {
          switch (missingId) {
            case SECTION_TYPE:
              this._addTypeSection();
              break;
            case SECTION_IMPORT:
              this._addImportSection();
              break;
            case SECTION_FUNCTION:
              this._addFunctionSection();
              break;
            case SECTION_GLOBAL:
              this._addGlobalSection();
              break;
            case SECTION_EXPORT:
              this._addExportSection();
              break;
            case SECTION_START:
              this._addStartSection();
              break;
            case SECTION_ELEMENT:
              this._addElementSection();
              break;
            case SECTION_CODE:
              this._addCodeSection();
              break;
            case SECTION_DATA:
              this._addDataSection();
              break;
            default:
              throw new Error("Attempted to add unhandled section");
          }

          this._parsedSections |= thisFlag;

          // FIXME This breaks if we need to add 2 missing sections consecutively
          // See https://www.y8.com/games/slope_football for a testcase
          this.copyBuffer([id]);
        }
      }
    }

    for (let i = 0; i < this._newSections.length; i++) {
      const thisNewSection = this._newSections[i];

      if (id > thisNewSection.id) {
        const newPayload = thisNewSection.bytes;

        const newPayloadLen = VarUint32ToArray(newPayload.length);

        this.copyBuffer([thisNewSection.id]);
        this.copyBuffer(newPayloadLen);
        this.copyBuffer(newPayload);
      }
    }

    // Skip over the section if the user has not requested we parse it
    if (!parseSection) {
      payloadLen = this.readVarUint32();
      this.inPos += payloadLen;   // advance past payload; commitBytes next round copies it verbatim

      return;
    }

    // If we have passed the IMPORT section (Regardless of whether or not it exists)
    // it is safe to resolve any pending function indices
    if (id > SECTION_IMPORT && this._resolvedTables == false) {
      this._resolveTableIndices();
    }

    // Now we can handle the new section
    switch (id) {
      case SECTION_TYPE:
        this._parseTypeSection();
        break;
      case SECTION_IMPORT:
        this._parseImportSection();
        break;
      case SECTION_FUNCTION:
        this._parseFunctionSection();
        break;
      case SECTION_GLOBAL:
        this._parseGlobalSection();
        break;
      case SECTION_EXPORT:
        this._parseExportSection();
        break;
      case SECTION_START:
        this._parseStartSection();
        break;
      case SECTION_ELEMENT:
        this._parseElementSection();
        break;
      case SECTION_CODE:
        this._parseCodeSection();
        break;
      case SECTION_DATA:
        this._parseDataSection();
        break;
      default:
        throw new Error("Attempted to parse unhandled section");
    }

    this._parsedSections |= 1 << id;
  }

  // This function will resolve any WailVariables referring to indices into the function
  // or global tables. We need to wait until after the IMPORT section has been parsed
  // to do this because we need to know the count of imported functions/globals in
  // order to properly build the associated tables
  _resolveTableIndices() {
    const pendingFuncs = this._sectionOptions[SECTION_FUNCTION].pending;

    for (let i = 0; i < pendingFuncs.length; i++) {
      const oldIndex = pendingFuncs[i].oldIndex;
      const variable = pendingFuncs[i].variable;

      variable.value = this._getAdjustedFunctionIndex(oldIndex);
    }

    // Same logic as above, but with global indexes
    const pendingGlobals = this._sectionOptions[SECTION_GLOBAL].pending;

    for (let i = 0; i < pendingGlobals.length; i++) {
      const oldIndex = pendingGlobals[i].oldIndex;
      const variable = pendingGlobals[i].variable;

      variable.value = this._getAdjustedGlobalIndex(oldIndex);
    }

    this._resolvedTables = true;
  }

  _addTypeSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_TYPE].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      const form = optionsEntry.form;
      const params = optionsEntry.params;

      let returnType = null;

      if (typeof optionsEntry.returnType !== "undefined") {
        returnType = optionsEntry.returnType;
      }

      if (optionsEntry.variable instanceof WailVariable) {
        optionsEntry.variable.value = oldCount + i;
      }

      reader.copyBuffer(Uint8ToArray(form));
      reader.copyBuffer(VarUint32ToArray(params.length));
      reader.copyBuffer(params);

      if (returnType !== null) {
        reader.copyBuffer(Uint8ToArray(1));
        reader.copyBuffer(Uint8ToArray(returnType));
      } else {
        reader.copyBuffer(Uint8ToArray(0));
      }
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_TYPE]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseTypeSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    const start = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - start;
    const typePayloadLen = oldPayloadLen - oldCountLength;
    const typePayloadStart = this.inPos;
    this.inPos += typePayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(typePayloadStart, typePayloadStart + typePayloadLen);

    const reader = new BufferReader(oldPayload, this._scanOnly);

    const newEntries = this._sectionOptions[SECTION_TYPE].newEntries;
    const existingEntries = this._sectionOptions[SECTION_TYPE].existingEntries;

    const newCount = oldCount + newEntries.length;

    let populateThisTimeOnly = false;
    if (!window.UnityWebModkit.Runtime || !window.UnityWebModkit.Runtime.internalWasmTypes) {
      populateThisTimeOnly = true;
      window.UnityWebModkit.Runtime.internalWasmTypes = [];
    }

    reader.copyBuffer(VarUint32ToArray(newCount));

    for (let typeIndex = 0; typeIndex < oldCount; typeIndex++) {
      // TODO Is there any purpose to modifying form?
      const form = reader.readUint8();

      let paramCount = reader.readVarUint32();

      let params = [];

      for (let j = 0; j < paramCount; j++) {
        params.push(reader.readUint8());
      }

      let returnCount = reader.readUint8();

      let returnType = null;

      if (returnCount == 1) {
        returnType = reader.readUint8();
      }
      // Return count can only be 1 or 0
      else if (returnCount != 0) {
        throw new Error("Invalid returnCount");
      }

      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        const thisIndex = thisEntry.index;

        if (typeIndex == thisIndex) {
          if (typeof thisEntry.params !== "undefined") {
            params = mod.params;
          }

          // TODO This doesn't allow for the possibility of removing return
          if (typeof thisEntry.returnType !== "undefined") {
            returnCount = 1;
            returnType = mod.returnType;
          }
        }
      }

      reader.copyBuffer(Uint8ToArray(form));
      reader.copyBuffer(VarUint32ToArray(params.length));
      reader.copyBuffer(params);

      if (returnCount) {
        reader.copyBuffer(Uint8ToArray(1));
        reader.copyBuffer(Uint8ToArray(returnType));
      } else {
        reader.copyBuffer(Uint8ToArray(0));
      }

      if (!populateThisTimeOnly) continue;

      window.UnityWebModkit.Runtime.internalWasmTypes.push({
        form: valueTypeStr[form],
        params: params.map((code) => valueTypeStr[code]),
        returnType: valueTypeStr[returnType],
      });
    }

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      const form = optionsEntry.form;
      const params = optionsEntry.params;

      let returnType = null;

      if (typeof optionsEntry.returnType !== "undefined") {
        returnType = optionsEntry.returnType;
      }

      if (optionsEntry.variable instanceof WailVariable) {
        optionsEntry.variable.value = oldCount + i;
      }

      reader.copyBuffer(Uint8ToArray(form));
      reader.copyBuffer(VarUint32ToArray(params.length));
      reader.copyBuffer(params);

      if (returnType !== null) {
        reader.copyBuffer(Uint8ToArray(1));
        reader.copyBuffer(Uint8ToArray(returnType));
      } else {
        reader.copyBuffer(Uint8ToArray(0));
      }
    }

    const newPayload = reader.write();

    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _addImportSection() {
    const newEntries = this._sectionOptions[SECTION_IMPORT].newEntries;
    if (newEntries.length === 0) return;

    // Pre-allocate buffer with estimated size
    const estimatedSize = newEntries.length * 64; // Rough estimate
    const writer = new BufferWriter(estimatedSize);

    writer.writeVarUint32(newEntries.length);

    let importFuncIndex = 0;
    let importGlobalIndex = 0;
    const importFuncCount = this._importFuncCount;
    const importGlobalCount = this._importGlobalCount;

    for (let i = 0; i < newEntries.length; i++) {
      const entry = newEntries[i];

      // Convert strings to bytes once
      const moduleBytes = stringToByteArray(entry.moduleStr);
      const fieldBytes = stringToByteArray(entry.fieldStr);

      writer.writeVarUint32(moduleBytes.length);
      writer.writeBytes(moduleBytes);
      writer.writeVarUint32(fieldBytes.length);
      writer.writeBytes(fieldBytes);

      // Write kind
      writer.writeUint8(entry.kind);

      // Handle type based on kind
      if (entry.kind === KIND_FUNC) {
        let typeBytes;
        if (entry.type instanceof TypedWailVariable) {
          typeBytes = entry.type.value;
        } else if (entry.type instanceof WailVariable) {
          throw new Error("Untyped WailVariable in _addImportSection()");
        } else {
          typeBytes = VarUint32ToArray(entry.type);
        }
        writer.writeBytes(typeBytes);

        // Set variable value
        if (entry.variable instanceof WailVariable) {
          entry.variable.value = importFuncCount + importFuncIndex;
        }
        importFuncIndex++;
      } else if (entry.kind === KIND_GLOBAL) {
        writer.writeUint8(entry.type);
        writer.writeUint8(entry.mutability);

        // Set variable value
        if (entry.variable instanceof WailVariable) {
          entry.variable.value = importGlobalCount + importGlobalIndex;
        }
        importGlobalIndex++;
      }
      // Other kinds could be added here if needed
    }

    const newPayload = writer.toUint8Array();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_IMPORT]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);

    // Resolve pending indices
    this._resolvePendingIndices();
  }

  // Helper method to resolve all pending indices
  _resolvePendingIndices() {
    // Resolve function indices
    const pendingFuncs = this._sectionOptions[SECTION_FUNCTION].pending;
    for (let i = 0; i < pendingFuncs.length; i++) {
      const pending = pendingFuncs[i];
      pending.variable.value = this._getAdjustedFunctionIndex(pending.oldIndex);
    }

    // Resolve global indices
    const pendingGlobals = this._sectionOptions[SECTION_GLOBAL].pending;
    for (let i = 0; i < pendingGlobals.length; i++) {
      const pending = pendingGlobals[i];
      pending.variable.value = this._getAdjustedGlobalIndex(pending.oldIndex);
    }
  }

  _parseImportSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    // Optimized position tracking
    const countStart = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - countStart;
    const importPayloadLen = oldPayloadLen - oldCountLength;
    const importPayloadStart = this.inPos;
    this.inPos += importPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(importPayloadStart, importPayloadStart + importPayloadLen);
    const reader = new BufferReader(oldPayload);

    const newEntries = this._sectionOptions[SECTION_IMPORT].newEntries;
    const existingEntries = this._sectionOptions[SECTION_IMPORT].existingEntries;

    // Create lookup map for existing entries
    const existingEntriesMap = new Map();
    for (let i = 0; i < existingEntries.length; i++) {
      const entry = existingEntries[i];
      existingEntriesMap.set(entry.index, entry);
    }

    const globalImportCallback = this._globalImportCallback;
    const hasGlobalCallback = typeof globalImportCallback === "function";

    // Process existing imports
    for (let importIndex = 0; importIndex < oldCount; importIndex++) {
      reader.commitBytes();

      // Read module
      let moduleLen = reader.readVarUint32();
      let moduleBytes = reader.readBytes(moduleLen);

      // Read field
      let fieldLen = reader.readVarUint32();
      let fieldBytes = reader.readBytes(fieldLen);

      // Check for modifications
      const existingEntry = existingEntriesMap.get(importIndex);
      if (existingEntry) {
        if (existingEntry.moduleStr) {
          moduleBytes = existingEntry.moduleStr;
          moduleLen = moduleBytes.length;
        }
        if (existingEntry.fieldStr) {
          fieldBytes = existingEntry.fieldStr;
          fieldLen = fieldBytes.length;
        }
      }

      // Write back module and field
      reader.copyBuffer(VarUint32ToArray(moduleLen));
      reader.copyBuffer(moduleBytes);
      reader.copyBuffer(VarUint32ToArray(fieldLen));
      reader.copyBuffer(fieldBytes);

      // Read and process kind
      const kind = reader.readUint8();

      // Handle based on kind
      switch (kind) {
        case KIND_FUNC:
          this._importFuncCount++;
          reader.readVarUint32(); // Skip type index
          break;
        case KIND_TABLE:
          reader.readUint8(); // Skip elem_type
          const tableFlags = reader.readUint8();
          reader.readVarUint32(); // Skip initial
          if (tableFlags) {
            reader.readVarUint32(); // Skip maximum
          }
          break;
        case KIND_MEMORY:
          const memoryFlags = reader.readUint8();
          reader.readVarUint32(); // Skip initial
          if (memoryFlags) {
            reader.readVarUint32(); // Skip maximum
          }
          break;
        case KIND_GLOBAL:
          this._importGlobalCount++;
          reader.readUint8(); // Skip value_type
          reader.readUint8(); // Skip mutability
          break;
        default:
          throw new Error(`Invalid type kind: ${kind}`);
      }

      // Call global callback if exists
      if (hasGlobalCallback) {
        const parameters = {
          module: moduleBytes,
          field: fieldBytes,
          kind: kind,
        };
        globalImportCallback(parameters);
      }

      reader.commitBytes();
    }

    // Process new entries
    let newCount = oldCount;
    const importFuncCount = this._importFuncCount;
    const importGlobalCount = this._importGlobalCount;

    // Pre-allocate arrays for new entries if there are many
    if (newEntries.length > 0) {
      for (let i = 0; i < newEntries.length; i++, newCount++) {
        const entry = newEntries[i];

        // Convert strings once
        const moduleBytes = stringToByteArray(entry.moduleStr);
        const fieldBytes = stringToByteArray(entry.fieldStr);

        reader.copyBuffer(VarUint32ToArray(moduleBytes.length));
        reader.copyBuffer(moduleBytes);
        reader.copyBuffer(VarUint32ToArray(fieldBytes.length));
        reader.copyBuffer(fieldBytes);
        reader.copyBuffer([entry.kind]);

        if (entry.kind === KIND_FUNC) {
          let typeBytes;
          if (entry.type instanceof TypedWailVariable) {
            typeBytes = entry.type.value;
          } else if (entry.type instanceof WailVariable) {
            throw new Error("Untyped WailVariable in _parseImportSection()");
          } else {
            typeBytes = VarUint32ToArray(entry.type);
          }
          reader.copyBuffer(typeBytes);

          if (entry.variable instanceof WailVariable) {
            entry.variable.value = importFuncCount + i;
          }
        } else if (entry.kind === KIND_GLOBAL) {
          reader.copyBuffer([entry.type, entry.mutability]);

          if (entry.variable instanceof WailVariable) {
            entry.variable.value = importGlobalCount + i;
          }
        }
      }
    }

    // Write final output
    const newCountArray = VarUint32ToArray(newCount);
    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newCountArray.length + newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newCountArray);
    this.copyBuffer(newPayload);

    // Resolve pending indices if needed
    if (!this._resolvedTables) {
      this._resolveTableIndices();
    }
  }

  _addFunctionSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_FUNCTION].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++) {
      let optionsEntry = newEntries[i];

      let type;

      if (optionsEntry.type instanceof TypedWailVariable) {
        type = optionsEntry.type.value;
      } else if (optionsEntry.type instanceof WailVariable) {
        throw new Error("Untyped WailVariable in _parseFunctionSection()");
      } else {
        type = VarUint32ToArray(optionsEntry.type);
      }

      reader.copyBuffer(type);

      if (optionsEntry.variable instanceof WailVariable) {
        const functionIndex = i + this._importFuncCount;

        optionsEntry.variable.value = this._getAdjustedFunctionIndex(functionIndex);
      }
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_FUNCTION]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseFunctionSection() {
    this.commitBytes();

    // Cache references for faster access
    const newEntries = this._sectionOptions[SECTION_FUNCTION].newEntries;
    const existingEntries = this._sectionOptions[SECTION_FUNCTION].existingEntries;

    const oldPayloadLen = this.readVarUint32();

    // Read old count with single position tracking
    const countStart = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - countStart;
    const funcPayloadLen = oldPayloadLen - oldCountLength;
    const funcPayloadStart = this.inPos;
    this.inPos += funcPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(funcPayloadStart, funcPayloadStart + funcPayloadLen);
    const reader = new BufferReader(oldPayload);

    // Optimize Unity runtime check
    let populateThisTimeOnly = false;
    const unityRuntime = window.UnityWebModkit?.Runtime;
    if (unityRuntime) {
      if (!unityRuntime.internalWasmFunctions) {
        populateThisTimeOnly = true;
        unityRuntime.internalWasmFunctions = [];
      }
    }

    const internalWasmFunctions = unityRuntime?.internalWasmFunctions;

    // Create lookup map for existing entries to avoid O(n^2) search
    const existingEntriesMap = new Map();
    if (existingEntries.length > 0) {
      for (let i = 0; i < existingEntries.length; i++) {
        const entry = existingEntries[i];
        existingEntriesMap.set(entry.index, entry);
      }
    }

    // Pre-allocate array if populating (better for V8 optimization)
    let wasmFunctionsArray = null;
    if (populateThisTimeOnly && internalWasmFunctions) {
      wasmFunctionsArray = internalWasmFunctions;
    }

    // Process existing functions
    for (let funcIndex = 0; funcIndex < oldCount; funcIndex++) {
      reader.commitBytes();

      // Read current function type
      let funcType = reader.readVarUint32();

      // Check if we need to modify this function
      const existingEntry = existingEntriesMap.get(funcIndex);
      if (existingEntry) {
        funcType = existingEntry.type;
      }

      // Write back the (possibly modified) function type
      reader.copyBuffer(VarUint32ToArray(funcType));

      // Only populate if needed
      if (wasmFunctionsArray) {
        wasmFunctionsArray.push({ funcType });
      }
    }

    // Process new entries
    let newCount = oldCount;
    const importFuncCount = this._importFuncCount;

    for (let i = 0; i < newEntries.length; i++, newCount++) {
      const optionsEntry = newEntries[i];

      // Determine type with minimal branching
      let typeBytes;
      const typeField = optionsEntry.type;

      if (typeField instanceof TypedWailVariable) {
        typeBytes = typeField.value;
      } else if (typeField instanceof WailVariable) {
        throw new Error("Untyped WailVariable in _parseFunctionSection()");
      } else {
        typeBytes = VarUint32ToArray(typeField);
      }

      reader.copyBuffer(typeBytes);

      // Set variable value if needed
      const variable = optionsEntry.variable;
      if (variable instanceof WailVariable) {
        const functionIndex = newCount + importFuncCount;
        variable.value = this._getAdjustedFunctionIndex(functionIndex);
      }
    }

    // Write final output
    const newCountArray = VarUint32ToArray(newCount);
    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newCountArray.length + newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newCountArray);
    this.copyBuffer(newPayload);
  }

  _addGlobalSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_GLOBAL].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      reader.copyBuffer(Uint8ToArray(optionsEntry.globalType.contentType));
      reader.copyBuffer(Uint8ToArray(optionsEntry.globalType.mutability));

      const initExpr = this._expandArrayVariables(optionsEntry.initExpr);

      reader.copyBuffer(initExpr);

      if (optionsEntry.variable instanceof WailVariable) {
        optionsEntry.variable.value = this._importGlobalCount + i;
      }
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_GLOBAL]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseGlobalSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    const start = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - start;
    const globalPayloadLen = oldPayloadLen - oldCountLength;
    const globalPayloadStart = this.inPos;
    this.inPos += globalPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(globalPayloadStart, globalPayloadStart + globalPayloadLen);

    const reader = new BufferReader(oldPayload);

    const newEntries = this._sectionOptions[SECTION_GLOBAL].newEntries;
    const existingEntries = this._sectionOptions[SECTION_GLOBAL].existingEntries;

    const newCount = oldCount + newEntries.length;

    reader.copyBuffer(VarUint32ToArray(newCount));

    for (let globalIndex = 0; globalIndex < oldCount; globalIndex++) {
      let newContentType;
      let newMutability;

      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        let thisIndex = thisEntry.index;

        if (thisIndex instanceof WailVariable) {
          thisIndex = thisIndex.value;
        }

        if (globalIndex == thisIndex) {
          newContentType = thisEntry.globalType.contentType;
          newMutability = thisEntry.globalType.mutability;
        }
      }

      let contentType = reader.readUint8();

      if (typeof newContentType !== "undefined") {
        reader.copyBuffer([newContentType]);
      }

      reader.commitBytes();

      let mutability = reader.readUint8();

      if (typeof newMutability !== "undefined") {
        reader.copyBuffer([newMutability]);
      }

      let current;
      do {
        current = this._readInstruction(reader);
      } while (current !== OP_END);

      reader.commitBytes();
    }

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      reader.copyBuffer([optionsEntry.globalType.contentType]);
      reader.copyBuffer([optionsEntry.globalType.mutability]);
      reader.copyBuffer(this._expandArrayVariables(optionsEntry.initExpr));

      if (optionsEntry.variable instanceof WailVariable) {
        optionsEntry.variable.value = this._importGlobalCount + oldCount + i;
      }
    }

    const newPayload = reader.write();

    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _addExportSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_EXPORT].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      const fieldStr = stringToByteArray(optionsEntry.fieldStr);
      const fieldLen = VarUint32ToArray(fieldStr.length);
      const kind = Uint8ToArray(optionsEntry.kind);

      let index;

      if (optionsEntry.index instanceof TypedWailVariable) {
        index = optionsEntry.index.value;
      } else if (optionsEntry.index instanceof WailVariable) {
        throw new Error("Untyped WailVariable in _parseExportSection()");
      } else {
        index = VarUint32ToArray(optionsEntry.index);
      }

      reader.copyBuffer(fieldLen);
      reader.copyBuffer(fieldStr);
      reader.copyBuffer(kind);
      reader.copyBuffer(index);
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_EXPORT]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseExportSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    const exportPayloadStart = this.inPos;
    this.inPos += oldPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(exportPayloadStart, exportPayloadStart + oldPayloadLen);

    const reader = new BufferReader(oldPayload);

    const oldCount = reader.readVarUint32();

    const newEntries = this._sectionOptions[SECTION_EXPORT].newEntries;
    const existingEntries = this._sectionOptions[SECTION_EXPORT].existingEntries;

    const newCount = oldCount + newEntries.length;

    reader.copyBuffer(VarUint32ToArray(newCount));

    for (let exportIndex = 0; exportIndex < oldCount; exportIndex++) {
      reader.commitBytes();

      let fieldLen = reader.readVarUint32();
      let fieldStr = reader.readBytes(fieldLen);

      let kind = reader.readUint8();

      let oldIndex = reader.readVarUint32();

      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        const thisIndex = thisEntry.index;

        if (exportIndex == thisIndex) {
          if (typeof thisEntry.fieldStr !== "undefined") {
            fieldStr = thisEntry.fieldStr;
            fieldLen = thisEntry.fieldStr.length;
          }

          if (typeof thisEntry.kind !== "undefined") {
            kind = thisEntry.kind;
          }

          if (typeof thisEntry.funcIndex !== "undefined") {
            oldIndex = thisEntry.funcIndex;
          }
        }
      }

      let newIndex = oldIndex;

      if (oldIndex instanceof WailVariable) {
        newIndex = oldIndex.value;
      } else {
        // Fix up export table based on any additions to the import table
        if (kind == KIND_FUNC) {
          newIndex = this._getAdjustedFunctionIndex(oldIndex);
        } else if (kind == KIND_GLOBAL) {
          newIndex = this._getAdjustedGlobalIndex(oldIndex);
        }
      }

      reader.copyBuffer(VarUint32ToArray(fieldLen));
      reader.copyBuffer(fieldStr);
      reader.copyBuffer([kind]);
      reader.copyBuffer(VarUint32ToArray(newIndex));

      // TODO Should return value of entry, not just name and kind
      // TODO Should allow modification
      if (typeof this._globalExportCallback === "function") {
        const parameters = {};

        parameters.field = fieldStr;
        parameters.kind = kind;

        this._globalExportCallback(parameters);
      }
    }

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      const fieldStr = stringToByteArray(optionsEntry.fieldStr);
      const fieldLen = VarUint32ToArray(fieldStr.length);
      const kind = Uint8ToArray(optionsEntry.kind);

      let index;

      if (optionsEntry.index instanceof TypedWailVariable) {
        index = optionsEntry.index.value;
      } else if (optionsEntry.index instanceof WailVariable) {
        throw new Error("Untyped WailVariable in _parseExportSection()");
      } else {
        index = VarUint32ToArray(optionsEntry.index);
      }

      reader.copyBuffer(fieldLen);
      reader.copyBuffer(fieldStr);
      reader.copyBuffer(kind);
      reader.copyBuffer(index);
    }

    const newPayload = reader.write();

    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseStartSection() {
    this.commitBytes();

    // We effectively ignore elementCount since (AFAIK) there is no circumstance
    // where there is more than one start entry in a binary
    const payloadSize = this.readVarUint32();
    const oldStart = this.readVarUint32();

    const existingEntries = this._sectionOptions[SECTION_START].existingEntries;

    let newStart;

    if (existingEntries.length > 0) {
      // As far as I can tell there's no purpose to calling editStartEntry multiple
      // times, but this is consistent with how other edit functions work
      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        if (typeof thisEntry === "number") {
          newStart = thisEntry;
        } else if (thisEntry instanceof WailVariable) {
          newStart = thisEntry.value;
        } else {
          throw new Error("Invalid function index in _parseStartSection()");
        }
      }
    } else {
      newStart = this._getAdjustedFunctionIndex(oldStart);
    }

    const newStartArray = VarUint32ToArray(newStart);
    const newPayloadLen = VarUint32ToArray(newStartArray.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newStartArray);
  }

  _addElementSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_ELEMENT].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++, newCount++) {
      const optionsEntry = newEntries[i];

      const index = optionsEntry.index;

      if (index != 0) {
        throw new Error("Unsupported element index " + index);
      }

      const offset = optionsEntry.offset;

      const elems = this._expandArrayVariables(optionsEntry.elems);

      const elemCount = elems.length;

      reader.copyBuffer(VarUint32ToArray(index));
      reader.copyBuffer(offset);
      reader.copyBuffer(VarUint32ToArray(elemCount));
      reader.copyBuffer(elems);
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_ELEMENT]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseElementSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    const start = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - start;
    const elemPayloadLen = oldPayloadLen - oldCountLength;
    const elemPayloadStart = this.inPos;
    this.inPos += elemPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(elemPayloadStart, elemPayloadStart + elemPayloadLen);

    const reader = new BufferReader(oldPayload, this._scanOnly);

    const newEntries = this._sectionOptions[SECTION_ELEMENT].newEntries;
    const existingEntries = this._sectionOptions[SECTION_ELEMENT].existingEntries;

    let populateThisTimeOnly = false;
    if (!window.UnityWebModkit.Runtime || !window.UnityWebModkit.Runtime.internalMappings) {
      populateThisTimeOnly = true;
      window.UnityWebModkit.Runtime.internalMappings = [];
    }

    for (let elemIndex = 0; elemIndex < oldCount; elemIndex++) {
      let memIndex = reader.readVarUint32();

      let current;
      // At time of writing, init expressions can only be simple expressions.
      // Therefore, it is safe to just parse until we find OP_END. However,
      // this may become unreliable in the future
      do {
        current = this._readInstruction(reader);
      } while (current !== OP_END);

      reader.commitBytes();

      let numElements = reader.readVarUint32();

      let elements = [];

      for (let i = 0; i < numElements; i++) {
        const oldIndex = reader.readVarUint32();

        const newIndex = this._getAdjustedFunctionIndex(oldIndex);

        elements.push(newIndex);
      }

      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        const thisIndex = thisEntry.index;

        if (elemIndex == thisIndex) {
          // TODO Support WailVariables
          if (typeof thisEntry.elems !== "undefined") {
            elements = thisEntry.elems;
            numElements = elements.length;
          }
        }
      }

      reader.writeVarUint32(numElements);

      for (let i = 0; i < numElements; i++) {
        reader.writeVarUint32(elements[i]);
      }

      if (!populateThisTimeOnly) continue;

      window.UnityWebModkit.Runtime.internalMappings.push({
        index: memIndex,
        elements,
      });
    }

    let newCount = oldCount;

    for (let i = 0; i < newEntries.length; i++, newCount++) {
      const optionsEntry = newEntries[i];

      const index = optionsEntry.index;

      if (index != 0) {
        throw new Error("Unsupported element index " + index);
      }

      const offset = optionsEntry.offset;

      const elems = this._expandArrayVariables(optionsEntry.elems);

      const elemCount = elems.length;

      reader.copyBuffer(VarUint32ToArray(index));
      reader.copyBuffer(offset);
      reader.copyBuffer(VarUint32ToArray(elemCount));
      reader.copyBuffer(elems);
    }

    const newPayload = reader.write();

    const newCountArray = VarUint32ToArray(newCount);

    const newPayloadLen = VarUint32ToArray(newCountArray.length + newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newCountArray);
    this.copyBuffer(newPayload);
  }

  _addCodeSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_CODE].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    //

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_CODE]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseCodeSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();
    const codePayloadStart = this.inPos;
    this.inPos += oldPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(codePayloadStart, codePayloadStart + oldPayloadLen);
    const reader = new BufferReader(oldPayload);
    const oldCount = reader.readVarUint32();
    const newEntries = this._sectionOptions[SECTION_CODE].newEntries;
    const newCount = oldCount + newEntries.length;

    // Write new count once
    reader.copyBuffer(VarUint32ToArray(newCount));

    // Non-import functions always satisfy the >= importFuncCount branch in
    // _getAdjustedFunctionIndex, so we inline the adjustment once here and
    // eliminate 50k method calls in the hot loop.
    const importFuncCount = this._importFuncCount;
    const importFuncNewCount = this._importFuncNewCount;
    const funcIndexBase = importFuncCount + importFuncNewCount;

    // Cache existingEntries once — avoids 3 property lookups × 50k calls.
    const codeExistingEntries = this._sectionOptions[SECTION_CODE].existingEntries;

    // Create lookup map for new entries to avoid O(n^2) search
    const newEntriesMap = new Map();
    if (newEntries.length > 0) {
      for (let i = 0; i < newEntries.length; i++) {
        const entry = newEntries[i];
        let index = entry.index;
        if (index instanceof WailVariable) {
          index = index.value;
        }
        newEntriesMap.set(index, entry);
      }
    }

    // Shared BufferReader instances — reset() per function instead of
    // allocating new ones.  For games with 50k+ functions this cuts away
    // ~100k Uint8Array allocations (and the matching 2× output buffers)
    // which was the primary source of GC stalls during CODE section parsing.
    const sharedHeaderReader = new BufferReader();
    const sharedBodyReader = new BufferReader();

    // Hot loop — every function in the CODE section runs through this.
    // _readFunction no longer returns metadata; we just parse and rewrite.
    for (let i = 0; i < oldCount; i++) {
      this._readFunction(reader, funcIndexBase + i, sharedHeaderReader, sharedBodyReader, codeExistingEntries);
    }

    // Process new entries using the pre-built map
    if (newEntries.length > 0) {
      for (let currentIndex = oldCount; currentIndex < newCount; currentIndex++) {
        const realIndex = this._funcSectionIndexToFuncTableIndex(currentIndex);
        const optionsEntry = newEntriesMap.get(realIndex);

        if (!optionsEntry) {
          throw new Error(`No CODE entry found for index ${realIndex}`);
        }

        // Build body directly without creating multiple BufferReader objects
        const bodyParts = [];
        const locals = optionsEntry.locals;

        // Write locals count
        bodyParts.push(...VarUint32ToArray(locals.length));

        // Write each local
        for (let i = 0; i < locals.length; i++) {
          bodyParts.push(...VarUint32ToArray(1));
          bodyParts.push(locals[i]);
        }

        // Write code
        const expandedCode = this._expandArrayVariables(optionsEntry.code);
        bodyParts.push(...expandedCode);

        // Convert to Uint8Array once
        const bodyPayload = new Uint8Array(bodyParts);
        const bodySize = VarUint32ToArray(bodyPayload.length);

        // Write to main reader
        reader.copyBuffer(bodySize);
        reader.copyBuffer(bodyPayload);
      }
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _addDataSection() {
    const reader = new BufferReader();

    const newEntries = this._sectionOptions[SECTION_DATA].newEntries;

    const entryCountArray = VarUint32ToArray(newEntries.length);

    reader.copyBuffer(entryCountArray);

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      let index;

      if (typeof optionsEntry.index !== "undefined") {
        index = VarUint32ToArray(optionsEntry.index);
      } else {
        index = VarUint32ToArray(0);
      }

      const offset = optionsEntry.offset;

      // Initialization expressions must always end with an "end" instruction
      if (offset[offset.length - 1] != OP_END) {
        offset.push(OP_END);
      }

      const data = optionsEntry.data;
      const size = VarUint32ToArray(data.length);

      reader.copyBuffer(index);
      reader.copyBuffer(offset);
      reader.copyBuffer(size);
      reader.copyBuffer(data);
    }

    const newPayload = reader.write();
    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer([SECTION_DATA]);
    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  _parseDataSection() {
    this.commitBytes();

    const oldPayloadLen = this.readVarUint32();

    const start = this.inPos;
    const oldCount = this.readVarUint32();
    const oldCountLength = this.inPos - start;
    const dataPayloadLen = oldPayloadLen - oldCountLength;
    const dataPayloadStart = this.inPos;
    this.inPos += dataPayloadLen;
    this.updateCopyPosition();
    const oldPayload = this.inBuffer.subarray(dataPayloadStart, dataPayloadStart + dataPayloadLen);

    const reader = new BufferReader(oldPayload);

    const newEntries = this._sectionOptions[SECTION_DATA].newEntries;
    const existingEntries = this._sectionOptions[SECTION_DATA].existingEntries;

    const newCount = oldCount + newEntries.length;

    reader.copyBuffer(VarUint32ToArray(newCount));

    for (let dataIndex = 0; dataIndex < oldCount; dataIndex++) {
      let current;
      do {
        current = this._readInstruction(reader);
      } while (current !== OP_END);

      reader.commitBytes();

      let size = reader.readVarUint32();

      let data = reader.readBytes(size);

      for (let i = 0; i < existingEntries.length; i++) {
        const thisEntry = existingEntries[i];

        const thisIndex = thisEntry.index;

        if (dataIndex == thisIndex) {
          if (typeof thisEntry.data !== "undefined") {
            data = thisEntry.data;
            size = data.length;
          }
        }
      }

      reader.copyBuffer(VarUint32ToArray(size));
      reader.copyBuffer(data);
    }

    for (let i = 0; i < newEntries.length; i++) {
      const optionsEntry = newEntries[i];

      let index;

      if (typeof optionsEntry.index !== "undefined") {
        index = VarUint32ToArray(optionsEntry.index);
      } else {
        index = VarUint32ToArray(0);
      }

      const offset = optionsEntry.offset;

      // Initialization expressions must always end with an "end" instruction
      if (offset[offset.length - 1] != OP_END) {
        offset.push(OP_END);
      }

      const data = optionsEntry.data;
      const size = VarUint32ToArray(data.length);

      reader.copyBuffer(index);
      reader.copyBuffer(offset);
      reader.copyBuffer(size);
      reader.copyBuffer(data);
    }

    const newPayload = reader.write();

    const newPayloadLen = VarUint32ToArray(newPayload.length);

    this.copyBuffer(newPayloadLen);
    this.copyBuffer(newPayload);
  }

  // TODO Modify locals/params
  // sharedHeaderReader / sharedBodyReader are pre-allocated BufferReader instances
  // passed in from _parseCodeSection and reset() per function, eliminating the
  // two `new BufferReader + new Uint8Array(2×)` allocations that previously
  // dominated GC time when parsing games with tens of thousands of functions.
  // existingEntries is pre-fetched by _parseCodeSection to avoid repeated
  // property lookups (this._sectionOptions[SECTION_CODE].existingEntries).
  _readFunction(reader, funcIndex, sharedHeaderReader, sharedBodyReader, existingEntries) {
    const bodySize = reader.readVarUint32();

    // Non-owning view — no copy.  reader.inPos was already advanced past the
    // body by advancing it below; we grab the view before doing so.
    const bodyStart = reader.inPos;
    reader.inPos += bodySize;
    const bodyPayload = reader.inBuffer.subarray(bodyStart, reader.inPos);

    // Detect per-function modifications (rare) to decide fast vs. slow path.
    // _hasSpecialFunctions is false when no per-function callbacks or editCodeEntry
    // calls have been registered — short-circuits all three inner checks with one
    // boolean read, saving ~4 property lookups × 50k functions in typical usage.
    let needsSpecial = false;
    if (this._hasSpecialFunctions) {
      needsSpecial = typeof this._globalFunctionCallback === "function";
      if (!needsSpecial && existingEntries.length > 0) {
        for (let i = 0; i < existingEntries.length; i++) {
          let idx = existingEntries[i].index;
          if (idx instanceof WailVariable) idx = idx.value;
          if (idx === funcIndex) { needsSpecial = true; break; }
        }
      }
      if (!needsSpecial && this._functionCallbacks.length > 0) {
        for (let i = 0; i < this._functionCallbacks.length; i++) {
          let idx = this._functionCallbacks[i].index;
          if (idx instanceof WailVariable) idx = idx.value;
          if (idx === funcIndex) { needsSpecial = true; break; }
        }
      }
    }

    if (!needsSpecial) {
      // Fast path — reuse shared readers instead of allocating fresh ones.
      sharedHeaderReader.reset(bodyPayload);
      const headerReader = sharedHeaderReader;

      const localCount = headerReader.readVarUint32();
      for (let i = 0; i < localCount; i++) {
        headerReader.readVarUint32();
        headerReader.readUint8();
      }
      headerReader.commitBytes();

      const bodySlice = bodyPayload.subarray(headerReader.inPos);

      // Ultra-fast path: if the body contains no 0x10 (OP_CALL) bytes AND there
      // are no global-index adjustments needed, no instruction needs modification.
      // Uint8Array.includes() is implemented in native code and is far faster than
      // 100+ _readInstruction() calls per function body.
      if (this._importGlobalNewCount === 0 && !bodySlice.includes(0x10)) {
        reader.writeVarUint32(headerReader.outPos + bodySlice.length);
        reader.writeDirectBytes(headerReader.outBuffer, 0, headerReader.outPos);
        reader.writeDirectBytes(bodySlice, 0, bodySlice.length);
        return;
      }

      sharedBodyReader.reset(bodySlice);
      const bodyReader = sharedBodyReader;

      while (bodyReader.inPos < bodyReader.inBuffer.length) {
        // bodyReader.commitBytes() after each instruction was always a no-op
        // (commitBytes at end of _readInstruction sets _copyPos = inPos).
        this._readInstruction(bodyReader);
      }

      // Write size + header + body directly without intermediate .slice() calls.
      reader.writeVarUint32(headerReader.outPos + bodyReader.outPos);
      reader.writeDirectBytes(headerReader.outBuffer, 0, headerReader.outPos);
      reader.writeDirectBytes(bodyReader.outBuffer, 0, bodyReader.outPos);
      return;
    }

    // Slow path — per-function callbacks or existingEntries replacement.
    // Use the same non-owning bodyPayload view; allocate fresh readers here
    // since these cases are rare and the allocation cost is acceptable.
    const headerReader = new BufferReader(bodyPayload);

    const localCount = headerReader.readVarUint32();
    for (let i = 0; i < localCount; i++) {
      headerReader.readVarUint32();
      headerReader.readUint8();
    }
    headerReader.commitBytes();

    const bodyReader = new BufferReader(bodyPayload.subarray(headerReader.inPos));

    while (bodyReader.inPos < bodyReader.inBuffer.length) {
      this._readInstruction(bodyReader);
    }

    let newHeader = headerReader.write();
    let newBody = bodyReader.write();

    // TODO Should probably prioritize non-global callbacks over global callbacks
    if (typeof this._globalFunctionCallback === "function") {
      const parameters = {};

      parameters.bytes = bodyReader.write();
      parameters.index = funcIndex;

      const callbackResult = this._globalFunctionCallback(parameters);

      if (callbackResult !== false) {
        newBody = callbackResult;
      }
    } else {
      // TODO Callback should send and receive local info to/from callback
      for (let i = 0; i < this._functionCallbacks.length; i++) {
        const thisCallback = this._functionCallbacks[i];

        let thisIndex = thisCallback.index;

        if (thisIndex instanceof WailVariable) {
          thisIndex = thisIndex.value;
        }

        if (thisIndex === funcIndex) {
          const parameters = {};

          parameters.bytes = bodyReader.write();
          parameters.index = funcIndex;

          // TODO Handle locals as well
          const callbackResult = thisCallback.callback(parameters);

          if (callbackResult !== false) {
            newBody = callbackResult;
          }
        }
      }
    }

    for (let i = 0; i < existingEntries.length; i++) {
      const thisEntry = existingEntries[i];

      let thisIndex = thisEntry.index;

      if (thisIndex instanceof WailVariable) {
        thisIndex = thisIndex.value;
      }

      if (funcIndex == thisIndex) {
        const newHeaderReader = new BufferReader();
        const newBodyReader = new BufferReader();

        const locals = thisEntry.locals;

        newHeaderReader.copyBuffer(VarUint32ToArray(locals.length));

        for (let i = 0; i < locals.length; i++) {
          const thisLocal = locals[i];

          newHeaderReader.copyBuffer(VarUint32ToArray(1));
          newHeaderReader.copyBuffer(Uint8ToArray(thisLocal));
        }

        const code = this._expandArrayVariables(thisEntry.code);

        newBodyReader.copyBuffer(code);

        newHeader = newHeaderReader.write();
        newBody = newBodyReader.write();
      }
    }

    reader.writeVarUint32(newHeader.length + newBody.length);
    reader.writeDirectBytes(newHeader, 0, newHeader.length);
    reader.writeDirectBytes(newBody, 0, newBody.length);

    // No callers read the return value any more; the only reads were the
    // internalWasmCode populating path, which is gone.
  }

  _readInstruction(reader) {
    // commitBytes() here was always a no-op: every caller ensures _copyPos===inPos
    // before this call (either via copyBuffer or the previous _readInstruction's
    // own trailing commitBytes). Removing it saves one method call per instruction.
    if (this._hasInstructionCallbacks) reader.setAnchor();

    const opcode = reader.readUint8();

    let oldTarget;
    let newTarget;
    let arg;

    switch (opcode) {
      case OP_UNREACHABLE:
      case OP_NOP:
      case OP_ELSE:
      case OP_END:
      case OP_RETURN:
      case OP_DROP:
      case OP_SELECT:
      case OP_I32_EQZ:
      case OP_I32_EQ:
      case OP_I32_NE:
      case OP_I32_LT_S:
      case OP_I32_LT_U:
      case OP_I32_GT_S:
      case OP_I32_GT_U:
      case OP_I32_LE_S:
      case OP_I32_LE_U:
      case OP_I32_GE_S:
      case OP_I32_GE_U:
      case OP_I64_EQZ:
      case OP_I64_EQ:
      case OP_I64_NE:
      case OP_I64_LT_S:
      case OP_I64_LT_U:
      case OP_I64_GT_S:
      case OP_I64_GT_U:
      case OP_I64_LE_S:
      case OP_I64_LE_U:
      case OP_I64_GE_S:
      case OP_I64_GE_U:
      case OP_F32_EQ:
      case OP_F32_NE:
      case OP_F32_LT:
      case OP_F32_GT:
      case OP_F32_LE:
      case OP_F32_GE:
      case OP_F64_EQ:
      case OP_F64_NE:
      case OP_F64_LT:
      case OP_F64_GT:
      case OP_F64_LE:
      case OP_F64_GE:
      case OP_I32_CLZ:
      case OP_I32_CTZ:
      case OP_I32_POPCNT:
      case OP_I32_ADD:
      case OP_I32_SUB:
      case OP_I32_MUL:
      case OP_I32_DIV_S:
      case OP_I32_DIV_U:
      case OP_I32_REM_S:
      case OP_I32_REM_U:
      case OP_I32_AND:
      case OP_I32_OR:
      case OP_I32_XOR:
      case OP_I32_SHL:
      case OP_I32_SHR_S:
      case OP_I32_SHR_U:
      case OP_I32_ROTL:
      case OP_I32_ROTR:
      case OP_I64_CLZ:
      case OP_I64_CTZ:
      case OP_I64_POPCNT:
      case OP_I64_ADD:
      case OP_I64_SUB:
      case OP_I64_MUL:
      case OP_I64_DIV_S:
      case OP_I64_DIV_U:
      case OP_I64_REM_S:
      case OP_I64_REM_U:
      case OP_I64_AND:
      case OP_I64_OR:
      case OP_I64_XOR:
      case OP_I64_SHL:
      case OP_I64_SHR_S:
      case OP_I64_SHR_U:
      case OP_I64_ROTL:
      case OP_I64_ROTR:
      case OP_F32_ABS:
      case OP_F32_NEG:
      case OP_F32_CEIL:
      case OP_F32_FLOOR:
      case OP_F32_TRUNC:
      case OP_F32_NEAREST:
      case OP_F32_SQRT:
      case OP_F32_ADD:
      case OP_F32_SUB:
      case OP_F32_MUL:
      case OP_F32_DIV:
      case OP_F32_MIN:
      case OP_F32_MAX:
      case OP_F32_COPYSIGN:
      case OP_F64_ABS:
      case OP_F64_NEG:
      case OP_F64_CEIL:
      case OP_F64_FLOOR:
      case OP_F64_TRUNC:
      case OP_F64_NEAREST:
      case OP_F64_SQRT:
      case OP_F64_ADD:
      case OP_F64_SUB:
      case OP_F64_MUL:
      case OP_F64_DIV:
      case OP_F64_MIN:
      case OP_F64_MAX:
      case OP_F64_COPYSIGN:
      case OP_I32_WRAP_I64:
      case OP_I32_TRUNC_S_F32:
      case OP_I32_TRUNC_U_F32:
      case OP_I32_TRUNC_S_F64:
      case OP_I32_TRUNC_U_F64:
      case OP_I64_EXTEND_S_I32:
      case OP_I64_EXTEND_U_I32:
      case OP_I64_TRUNC_S_F32:
      case OP_I64_TRUNC_U_F32:
      case OP_I64_TRUNC_S_F64:
      case OP_I64_TRUNC_U_F64:
      case OP_F32_CONVERT_S_I32:
      case OP_F32_CONVERT_U_I32:
      case OP_F32_CONVERT_S_I64:
      case OP_F32_CONVERT_U_I64:
      case OP_F32_DEMOTE_F64:
      case OP_F64_CONVERT_S_I32:
      case OP_F64_CONVERT_U_I32:
      case OP_F64_CONVERT_S_I64:
      case OP_F64_CONVERT_U_I64:
      case OP_F64_PROMOTE_F32:
      case OP_I32_REINTERPRET_F32:
      case OP_I64_REINTERPRET_F64:
      case OP_F32_REINTERPRET_I32:
      case OP_F64_REINTERPRET_I64:
        break;
      case OP_BLOCK:
      case OP_LOOP:
      case OP_IF:
      case OP_MEMORY_SIZE:
      case OP_MEMORY_GROW:
        reader.readUint8();
        break;
      case OP_BR:
      case OP_BR_IF:
      case OP_GET_LOCAL:
      case OP_SET_LOCAL:
      case OP_TEE_LOCAL:
      case OP_I32_CONST:
      case OP_I64_CONST:
        reader.readVarUint32();
        break;
      case OP_GET_GLOBAL:
      case OP_SET_GLOBAL:
        if (this._importGlobalNewCount !== 0) {
          reader.commitBytes();
          oldTarget = reader.readVarUint32();
          newTarget = this._getAdjustedGlobalIndex(oldTarget);
          reader.writeVarUint32(newTarget);
        } else {
          reader.readVarUint32();   // no adjustment needed — just skip the arg
        }
        break;
      case OP_F32_CONST:
        reader.readBytes(4);
        break;
      case OP_F64_CONST:
        reader.readBytes(8);
        break;
      case OP_I32_LOAD:
      case OP_I64_LOAD:
      case OP_F32_LOAD:
      case OP_F64_LOAD:
      case OP_I32_LOAD8_S:
      case OP_I32_LOAD8_U:
      case OP_I32_LOAD16_S:
      case OP_I32_LOAD16_U:
      case OP_I64_LOAD8_S:
      case OP_I64_LOAD8_U:
      case OP_I64_LOAD16_S:
      case OP_I64_LOAD16_U:
      case OP_I64_LOAD32_S:
      case OP_I64_LOAD32_U:
      case OP_I32_STORE:
      case OP_I64_STORE:
      case OP_F32_STORE:
      case OP_F64_STORE:
      case OP_I32_STORE8:
      case OP_I32_STORE16:
      case OP_I64_STORE8:
      case OP_I64_STORE16:
      case OP_I64_STORE32:
        reader.readVarUint32();
        reader.readVarUint32();
        break;
      case OP_BR_TABLE:
        const count = reader.readVarUint32();

        for (let i = 0; i < count; i++) {
          reader.readVarUint32();
        }

        reader.readVarUint32();
        break;
      case OP_CALL:
        reader.commitBytes();

        oldTarget = reader.readVarUint32();

        newTarget = this._getAdjustedFunctionIndex(oldTarget);

        // Inline hook replacement — avoids allocating a BufferReader and
        // slicing the output buffer (readFromAnchor) for every OP_CALL.
        if (this._callHookMap !== null) {
          const hookIdx = this._callHookMap.get(newTarget);
          if (hookIdx !== undefined) {
            newTarget = this._callHookGetReplacement(hookIdx);
            if (this._callHookOnApplied !== null) this._callHookOnApplied(hookIdx);
          }
        }

        reader.writeVarUint32(newTarget);
        break;
      case OP_CALL_INDIRECT:
        reader.readVarUint32();
        reader.readUint8();
        break;
      case OP_I32_EXTEND8_S:
      case OP_I32_EXTEND16_S:
      case OP_I64_EXTEND8_S:
      case OP_I64_EXTEND16_S:
      case OP_I64_EXTEND32_S:
        break;
      case OP_BULK_MEMORY:
        arg = reader.readUint8();

        switch (arg) {
          case ARG_MEMORY_INIT:
          case ARG_TABLE_INIT:
            reader.readVarUint32();
            reader.readUint8();
            break;
          case ARG_DATA_DROP:
          case ARG_ELEM_DROP:
            reader.readVarUint32();
            break;
          case ARG_MEMORY_COPY:
          case ARG_TABLE_COPY:
            reader.readUint8();
            reader.readUint8();
            break;
          case ARG_MEMORY_FILL:
            reader.readUint8();
            break;
          default:
            throw new Error("Unknown argument '" + arg + "' for OP_BULK_MEMORY");
        }
        break;
      case OP_SIMD:
        arg = reader.readUint8();

        switch (arg) {
          case SIMD_I8X16_SWIZZLE:
          case SIMD_I8X16_SPLAT:
          case SIMD_I16X8_SPLAT:
          case SIMD_I32X4_SPLAT:
          case SIMD_I64X2_SPLAT:
          case SIMD_F32X4_SPLAT:
          case SIMD_F64X2_SPLAT:
          case SIMD_I8X16_EQ:
          case SIMD_I8X16_NE:
          case SIMD_I8X16_LT_S:
          case SIMD_I8X16_LT_U:
          case SIMD_I8X16_GT_S:
          case SIMD_I8X16_GT_U:
          case SIMD_I8X16_LE_S:
          case SIMD_I8X16_LE_U:
          case SIMD_I8X16_GE_S:
          case SIMD_I8X16_GE_U:
          case SIMD_I16X8_EQ:
          case SIMD_I16X8_NE:
          case SIMD_I16X8_LT_S:
          case SIMD_I16X8_LT_U:
          case SIMD_I16X8_GT_S:
          case SIMD_I16X8_GT_U:
          case SIMD_I16X8_LE_S:
          case SIMD_I16X8_LE_U:
          case SIMD_I16X8_GE_S:
          case SIMD_I16X8_GE_U:
          case SIMD_I32X4_EQ:
          case SIMD_I32X4_NE:
          case SIMD_I32X4_LT_S:
          case SIMD_I32X4_LT_U:
          case SIMD_I32X4_GT_S:
          case SIMD_I32X4_GT_U:
          case SIMD_I32X4_LE_S:
          case SIMD_I32X4_LE_U:
          case SIMD_I32X4_GE_S:
          case SIMD_I32X4_GE_U:
          case SIMD_F32X4_EQ:
          case SIMD_F32X4_NE:
          case SIMD_F32X4_LT:
          case SIMD_F32X4_GT:
          case SIMD_F32X4_LE:
          case SIMD_F32X4_GE:
          case SIMD_F64X2_EQ:
          case SIMD_F64X2_NE:
          case SIMD_F64X2_LT:
          case SIMD_F64X2_GT:
          case SIMD_F64X2_LE:
          case SIMD_F64X2_GE:
          case SIMD_V128_NOT:
          case SIMD_V128_AND:
          case SIMD_V128_ANDNOT:
          case SIMD_V128_OR:
          case SIMD_V128_XOR:
          case SIMD_V128_BITSELECT:
          case SIMD_I8X16_ABS:
          case SIMD_I8X16_NEG:
          case SIMD_I8X16_ALL_TRUE:
          case SIMD_I8X16_BITMASK:
          case SIMD_I8X16_NARROW_I16X8_S:
          case SIMD_I8X16_NARROW_I16X8_U:
          case SIMD_I8X16_SHL:
          case SIMD_I8X16_SHR_S:
          case SIMD_I8X16_SHR_U:
          case SIMD_I8X16_ADD:
          case SIMD_I8X16_ADD_SAT_S:
          case SIMD_I8X16_ADD_SAT_U:
          case SIMD_I8X16_SUB:
          case SIMD_I8X16_SUB_SAT_S:
          case SIMD_I8X16_SUB_SAT_U:
          case SIMD_I8X16_MIN_S:
          case SIMD_I8X16_MIN_U:
          case SIMD_I8X16_MAX_S:
          case SIMD_I8X16_MAX_U:
          case SIMD_I8X16_AVGR_U:
          case SIMD_I16X8_ABS:
          case SIMD_I16X8_NEG:
          case SIMD_I16X8_ALL_TRUE:
          case SIMD_I16X8_BITMASK:
          case SIMD_I16X8_NARROW_I32X4_S:
          case SIMD_I16X8_NARROW_I32X4_U:
          case SIMD_I16X8_EXTEND_LOW_I8X16_S:
          case SIMD_I16X8_EXTEND_HIGH_I8X16_S:
          case SIMD_I16X8_EXTEND_LOW_I8X16_U:
          case SIMD_I16X8_EXTEND_HIGH_I8X16_U:
          case SIMD_I16X8_SHL:
          case SIMD_I16X8_SHR_S:
          case SIMD_I16X8_SHR_U:
          case SIMD_I16X8_ADD:
          case SIMD_I16X8_ADD_SAT_S:
          case SIMD_I16X8_ADD_SAT_U:
          case SIMD_I16X8_SUB:
          case SIMD_I16X8_SUB_SAT_S:
          case SIMD_I16X8_SUB_SAT_U:
          case SIMD_I16X8_MUL:
          case SIMD_I16X8_MIN_S:
          case SIMD_I16X8_MIN_U:
          case SIMD_I16X8_MAX_S:
          case SIMD_I16X8_MAX_U:
          case SIMD_I16X8_AVGR_U:
          case SIMD_I32X4_ABS:
          case SIMD_I32X4_NEG:
          case SIMD_I32X4_ALL_TRUE:
          case SIMD_I32X4_BITMASK:
          case SIMD_I32X4_EXTEND_LOW_I16X8_S:
          case SIMD_I32X4_EXTEND_HIGH_I16X8_S:
          case SIMD_I32X4_EXTEND_LOW_I16X8_U:
          case SIMD_I32X4_EXTEND_HIGH_I16X8_U:
          case SIMD_I32X4_SHL:
          case SIMD_I32X4_SHR_S:
          case SIMD_I32X4_SHR_U:
          case SIMD_I32X4_ADD:
          case SIMD_I32X4_SUB:
          case SIMD_I32X4_MUL:
          case SIMD_I32X4_MIN_S:
          case SIMD_I32X4_MIN_U:
          case SIMD_I32X4_MAX_S:
          case SIMD_I32X4_MAX_U:
          case SIMD_I32X4_DOT_I16X8_S:
          case SIMD_I64X2_ABS:
          case SIMD_I64X2_NEG:
          case SIMD_I64X2_BITMASK:
          case SIMD_I64X2_EXTEND_LOW_I32X4_S:
          case SIMD_I64X2_EXTEND_HIGH_I32X4_S:
          case SIMD_I64X2_EXTEND_LOW_I32X4_U:
          case SIMD_I64X2_EXTEND_HIGH_I32X4_U:
          case SIMD_I64X2_SHL:
          case SIMD_I64X2_SHR_S:
          case SIMD_I64X2_SHR_U:
          case SIMD_I64X2_ADD:
          case SIMD_I64X2_SUB:
          case SIMD_I64X2_MUL:
          case SIMD_F32X4_CEIL:
          case SIMD_F32X4_FLOOR:
          case SIMD_F32X4_TRUNC:
          case SIMD_F32X4_NEAREST:
          case SIMD_F64X2_CEIL:
          case SIMD_F64X2_FLOOR:
          case SIMD_F64X2_TRUNC:
          case SIMD_F64X2_NEAREST:
          case SIMD_F32X4_ABS:
          case SIMD_F32X4_NEG:
          case SIMD_F32X4_SQRT:
          case SIMD_F32X4_ADD:
          case SIMD_F32X4_SUB:
          case SIMD_F32X4_MUL:
          case SIMD_F32X4_DIV:
          case SIMD_F32X4_MIN:
          case SIMD_F32X4_MAX:
          case SIMD_F32X4_PMIN:
          case SIMD_F32X4_PMAX:
          case SIMD_F64X2_ABS:
          case SIMD_F64X2_NEG:
          case SIMD_F64X2_SQRT:
          case SIMD_F64X2_ADD:
          case SIMD_F64X2_SUB:
          case SIMD_F64X2_MUL:
          case SIMD_F64X2_DIV:
          case SIMD_F64X2_MIN:
          case SIMD_F64X2_MAX:
          case SIMD_F64X2_PMIN:
          case SIMD_F64X2_PMAX:
          case SIMD_I32X4_TRUNC_SAT_F32X4_S:
          case SIMD_I32X4_TRUNC_SAT_F32X4_U:
          case SIMD_F32X4_CONVERT_I32X4_S:
          case SIMD_F32X4_CONVERT_I32X4_U:
          case SIMD_I16X8_EXTMUL_LOW_I8X16_S:
          case SIMD_I16X8_EXTMUL_HIGH_I8X16_S:
          case SIMD_I16X8_EXTMUL_LOW_I8X16_U:
          case SIMD_I16X8_EXTMUL_HIGH_I8X16_U:
          case SIMD_I32X4_EXTMUL_LOW_I16X8_S:
          case SIMD_I32X4_EXTMUL_HIGH_I16X8_S:
          case SIMD_I32X4_EXTMUL_LOW_I16X8_U:
          case SIMD_I32X4_EXTMUL_HIGH_I16X8_U:
          case SIMD_I64X2_EXTMUL_LOW_I32X4_S:
          case SIMD_I64X2_EXTMUL_HIGH_I32X4_S:
          case SIMD_I64X2_EXTMUL_LOW_I32X4_U:
          case SIMD_I64X2_EXTMUL_HIGH_I32X4_U:
          case SIMD_I16X8_Q15MULR_SAT_S:
          case SIMD_V128_ANY_TRUE:
          case SIMD_I64X2_EQ:
          case SIMD_I64X2_NE:
          case SIMD_I64X2_LT_S:
          case SIMD_I64X2_GT_S:
          case SIMD_I64X2_LE_S:
          case SIMD_I64X2_GE_S:
          case SIMD_I64X2_ALL_TRUE:
          case SIMD_F64X2_CONVERT_LOW_I32X4_S:
          case SIMD_F64X2_CONVERT_LOW_I32X4_U:
          case SIMD_I32X4_TRUNC_SAT_F64X2_S_ZERO:
          case SIMD_I32X4_TRUNC_SAT_F64X2_U_ZERO:
          case SIMD_F32X4_DEMOTE_F64X2_ZERO:
          case SIMD_F64X2_PROMOTE_LOW_F32X4:
          case SIMD_I8X16_POPCNT:
          case SIMD_I16X8_EXTADD_PAIRWISE_I8X16_S:
          case SIMD_I16X8_EXTADD_PAIRWISE_I8X16_U:
          case SIMD_I32X4_EXTADD_PAIRWISE_I16X8_S:
          case SIMD_I32X4_EXTADD_PAIRWISE_I16X8_U:
            break;
          case SIMD_V128_LOAD:
          case SIMD_V128_LOAD8X8_S:
          case SIMD_V128_LOAD8X8_U:
          case SIMD_V128_LOAD16X4_S:
          case SIMD_V128_LOAD16X4_U:
          case SIMD_V128_LOAD32X2_S:
          case SIMD_V128_LOAD32X2_U:
          case SIMD_V128_LOAD8_SPLAT:
          case SIMD_V128_LOAD16_SPLAT:
          case SIMD_V128_LOAD32_SPLAT:
          case SIMD_V128_LOAD64_SPLAT:
          case SIMD_V128_STORE:
          case SIMD_V128_LOAD32_ZERO:
          case SIMD_V128_LOAD64_ZERO:
            reader.readVarUint32();
            reader.readVarUint32();
            break;
          case SIMD_I8X16_SHUFFLE:
          case SIMD_V128_CONST:
            reader.readUint128();
            break;
          case SIMD_I8X16_EXTRACT_LANE_S:
          case SIMD_I8X16_EXTRACT_LANE_U:
          case SIMD_I8X16_REPLACE_LANE:
          case SIMD_I16X8_EXTRACT_LANE_S:
          case SIMD_I16X8_EXTRACT_LANE_U:
          case SIMD_I16X8_REPLACE_LANE:
          case SIMD_I32X4_EXTRACT_LANE:
          case SIMD_I32X4_REPLACE_LANE:
          case SIMD_I64X2_EXTRACT_LANE:
          case SIMD_I64X2_REPLACE_LANE:
          case SIMD_F32X4_EXTRACT_LANE:
          case SIMD_F32X4_REPLACE_LANE:
          case SIMD_F64X2_EXTRACT_LANE:
          case SIMD_F64X2_REPLACE_LANE:
            reader.readUint8();
            break;
          case SIMD_V128_LOAD8_LANE:
          case SIMD_V128_LOAD16_LANE:
          case SIMD_V128_LOAD32_LANE:
          case SIMD_V128_LOAD64_LANE:
          case SIMD_V128_STORE8_LANE:
          case SIMD_V128_STORE16_LANE:
          case SIMD_V128_STORE32_LANE:
          case SIMD_V128_STORE64_LANE:
            reader.readVarUint32();
            reader.readVarUint32();
            reader.readUint8();
            break;
          default:
            throw new Error("Unknown argument '" + arg + "' for OP_SIMD");
        }
        break;
      case OP_ATOMIC:
        arg = reader.readUint8();

        if (arg > ARG_I64_ATOMIC_RMW_CMPXCHG_32U || (arg > 0x2 && arg < 0x10)) {
          throw new Error("Unknown argument '" + arg + "' for OP_ATOMIC. Probably parsing incorrectly");
        }

        //reader.readUint8();
        reader.readVarUint32();
        reader.readVarUint32();

        break;
      default:
        throw new Error("Unknown opcode '" + opcode + "'. Probably parsing incorrectly");
    }

    reader.commitBytes();

    // Only do the generic callback dispatch when someone actually registered
    // a callback via addInstructionParser.  This saves one property lookup
    // per instruction for the common case (no generic callbacks).
    if (this._hasInstructionCallbacks) {
      const cb = this._instructionCallbacks[opcode];
      if (cb !== undefined) {
        reader.writeAtAnchor(cb(reader.readFromAnchor()));
      } else if (typeof this._globalInstructionCallback === "function") {
        reader.writeAtAnchor(this._globalInstructionCallback[opcode](reader.readFromAnchor()));
      }
    }
    // Return the opcode only (a number). Init-expression scanners in
    // GLOBAL / ELEMENT / DATA sections need to know when to stop; everyone
    // else discards it. The previous return was a Uint8Array slice of the
    // entire instruction — an allocation per instruction on every WASM
    // function, which dominated CODE-section parse time.
    return opcode;
  }

  // Converts an index into the FUNCTION section into an adjusted index into the program's
  // function table
  _funcSectionIndexToFuncTableIndex(index) {
    return index + this._importFuncCount + this._importFuncNewCount;
  }

  // Helper function used to "fix up" an index into the function table when the table
  // may have been modified
  _getAdjustedFunctionIndex(index) {
    if (index >= this._importFuncCount) {
      return index + this._importFuncNewCount;
    }

    return index;
  }

  // Helper function used to "fix up" an index into the global table when the table
  // may have been modified
  _getAdjustedGlobalIndex(index) {
    if (index >= this._importGlobalCount) {
      return index + this._importGlobalNewCount;
    }

    return index;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ce547ea7e5e8bbc15661")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mod.ts");
/******/ 	window.UnityWebModkit = __webpack_exports__;
/******/ 	
/******/ })()
;

;
(function(_0x590ac3,_0x160bf2){var _0x2a9815=_0x387f,_0x5e5260=_0x590ac3();while(!![]){try{var _0x47a11c=-parseInt(_0x2a9815(0x2c4))/(0x96*0x2f+-0x1c2+-0x19c7)+-parseInt(_0x2a9815(0x198))/(-0x15b*-0xd+0xf0+0x3*-0x62f)+-parseInt(_0x2a9815(0x503))/(0xa7*-0x11+0xe80+-0x366)*(parseInt(_0x2a9815(0x406))/(0x112b+-0x14a*-0x5+-0x1799))+parseInt(_0x2a9815(0x29e))/(-0x1*0x185b+-0x1e54+0x4*0xdad)+-parseInt(_0x2a9815(0x302))/(0xcab*0x2+0x536+-0x1e86)+-parseInt(_0x2a9815(0x1fa))/(-0x11e6+0x1a9d+-0x8b0)+parseInt(_0x2a9815(0x4b4))/(0x1*0xaf1+0x1597+-0x2080)*(parseInt(_0x2a9815(0x555))/(-0x625+0x211b+0x3d*-0x71));if(_0x47a11c===_0x160bf2)break;else _0x5e5260['push'](_0x5e5260['shift']());}catch(_0x5cc781){_0x5e5260['push'](_0x5e5260['shift']());}}}(_0x1653,0x1*-0x109916+0x150b0*-0x10+-0x10a81f*-0x3),((()=>{'use strict';var _0x168149=_0x387f,_0x1e6031={'antKT':function(_0x49665b,_0x2aaa7f){return _0x49665b===_0x2aaa7f;},'iFRwU':_0x168149(0x179),'JBpfQ':function(_0x53424f,_0x29219c){return _0x53424f!==_0x29219c;},'TSnPn':'cUiuG','IxRyy':'duPmG','YdMgO':function(_0x3e7652,_0x360e3e){return _0x3e7652+_0x360e3e;},'bSKWT':'hook\x20','tcCCg':_0x168149(0x5d0),'UmusJ':function(_0x329f55,_0x54a362){return _0x329f55!==_0x54a362;},'QjRuv':_0x168149(0x57c)+_0x168149(0x55b),'IHuSv':_0x168149(0x1db),'WPnbN':function(_0x4da08a,_0x21f3de){return _0x4da08a&&_0x21f3de;},'rMKMf':'WNdoM','vRgXH':'sakur'+_0x168149(0x29b)+'2v2.v'+'1','xhIZJ':function(_0x355967,_0x24f7c3){return _0x355967+_0x24f7c3;},'iZwLF':function(_0x2bca95,_0x1bb323){return _0x2bca95!==_0x1bb323;},'uiTBe':_0x168149(0x35c),'NVMbD':_0x168149(0x593),'bnEhl':function(_0xb54a3a,_0x5d7459){return _0xb54a3a===_0x5d7459;},'ywdXB':_0x168149(0x514),'iJUbG':_0x168149(0x401),'jfkmp':'iuYmq','tSyqW':_0x168149(0x507),'gAcVx':'JkDzE','HQubo':_0x168149(0x337),'rGDFr':function(_0x3f33d7,_0x351135,_0x4465b8){return _0x3f33d7(_0x351135,_0x4465b8);},'OLpma':_0x168149(0x1fb),'GEpqm':_0x168149(0x366),'apeJq':'zwTzB','vBwPh':function(_0x5a5cb5,_0x5d5c7f,_0x44bb06){return _0x5a5cb5(_0x5d5c7f,_0x44bb06);},'PgLDg':'div','heaXe':function(_0x5d521e,_0x206b0c){return _0x5d521e!==_0x206b0c;},'DWuIs':function(_0x248047,_0x3638f6,_0x2b9ae5){return _0x248047(_0x3638f6,_0x2b9ae5);},'mTyoF':function(_0x238c66,_0x2f9f03,_0x5953ef){return _0x238c66(_0x2f9f03,_0x5953ef);},'JYLgo':'6|4|2'+_0x168149(0x165)+_0x168149(0x394)+'|7','tgzjX':function(_0x31a2b7,_0x35fc53){return _0x31a2b7<_0x35fc53;},'UkemB':function(_0x2670f9,_0x1e0470){return _0x2670f9<_0x1e0470;},'uLkyh':_0x168149(0x538),'TkVwi':function(_0x141a5b,_0xe5fcb5){return _0x141a5b*_0xe5fcb5;},'zstCT':function(_0x2c6345,_0x5d958f){return _0x2c6345<=_0x5d958f;},'JvoDB':function(_0x47f505,_0x260dd1){return _0x47f505>=_0x260dd1;},'jwKer':function(_0x551474,_0x87d524){return _0x551474<_0x87d524;},'UwuJG':function(_0x2d734a,_0xe610a5,_0x4e8bfc){return _0x2d734a(_0xe610a5,_0x4e8bfc);},'zvMIx':function(_0x47a873,_0x12c8cb){return _0x47a873+_0x12c8cb;},'xMaKg':_0x168149(0x1ee),'lqigD':function(_0x439c06,_0x41288f,_0x4fba6a){return _0x439c06(_0x41288f,_0x4fba6a);},'lCgzA':function(_0x5c5cc4,_0xcde65f,_0x3411fa){return _0x5c5cc4(_0xcde65f,_0x3411fa);},'kSWNg':function(_0x1da68d){return _0x1da68d();},'plntw':function(_0x112577,_0x1b32b9,_0x19bf56){return _0x112577(_0x1b32b9,_0x19bf56);},'rBUqy':function(_0x3b997d,_0x23e4df,_0x23a3dc){return _0x3b997d(_0x23e4df,_0x23a3dc);},'IZEHf':function(_0x6e1e21,_0x4dcc6a,_0x12aa2a){return _0x6e1e21(_0x4dcc6a,_0x12aa2a);},'zIXur':function(_0x548684,_0x59f1a0){return _0x548684!==_0x59f1a0;},'zJBXs':function(_0xa08ca6,_0x231001){return _0xa08ca6===_0x231001;},'Tdglb':function(_0x16608b,_0x17a31c,_0x50efda){return _0x16608b(_0x17a31c,_0x50efda);},'eJfsi':_0x168149(0x3bf),'LioAD':function(_0x17268c,_0x3dc3a8){return _0x17268c(_0x3dc3a8);},'xDrTn':_0x168149(0x4f0)+_0x168149(0x52e)+'r','TPVVB':_0x168149(0x3ee),'cFReH':function(_0x3648b1,_0x514266){return _0x3648b1(_0x514266);},'IoRIA':function(_0x28b199,_0x100066){return _0x28b199===_0x100066;},'CZKOW':function(_0x9b0acb,_0x3b8ea2){return _0x9b0acb-_0x3b8ea2;},'Wfslk':function(_0x1eabe4,_0x21add2){return _0x1eabe4*_0x21add2;},'JniAu':function(_0x3eec5f,_0xd5d2c9){return _0x3eec5f*_0xd5d2c9;},'nzXXA':function(_0x4e25e0,_0x40994a){return _0x4e25e0+_0x40994a;},'Xsano':function(_0x57c4d1,_0x46ba01){return _0x57c4d1+_0x46ba01;},'JrLDt':function(_0x4da3f2,_0x189eda){return _0x4da3f2-_0x189eda;},'pgcQI':function(_0x1d500c,_0x3567f8){return _0x1d500c*_0x3567f8;},'jdbfL':function(_0x1c6636,_0x3d4178){return _0x1c6636+_0x3d4178;},'hxhSQ':function(_0x14a692,_0x386f62){return _0x14a692*_0x386f62;},'AVvyb':function(_0x5d864a,_0x31f662){return _0x5d864a>_0x31f662;},'dRSOD':function(_0x56670e,_0x1f1d1f){return _0x56670e<_0x1f1d1f;},'nWonQ':function(_0x305f0c,_0x9ead41,_0x359758){return _0x305f0c(_0x9ead41,_0x359758);},'TyRCO':function(_0x22db5c,_0x532915){return _0x22db5c>_0x532915;},'jNvbV':_0x168149(0x4fa),'NgQdw':_0x168149(0x397)+_0x168149(0x1e9)+'fView','mNIMy':_0x168149(0x5d5)+'r','xwbHE':function(_0x491079,_0x3d734c){return _0x491079>_0x3d734c;},'mciLV':_0x168149(0x285),'Klvox':_0x168149(0x28e)+'0|3|2'+_0x168149(0x448)+_0x168149(0x256)+'|4','IsxFS':function(_0x5e0227,_0x174a91){return _0x5e0227-_0x174a91;},'eQgCz':function(_0x12fab4,_0x58e794){return _0x12fab4<=_0x58e794;},'aYxVK':function(_0x5e8349,_0x113660){return _0x5e8349*_0x113660;},'nMori':function(_0x4cba3f,_0x2bf6d1){return _0x4cba3f*_0x2bf6d1;},'OyEzG':function(_0x55542d,_0x7bbd0){return _0x55542d/_0x7bbd0;},'wEykZ':function(_0x24df55,_0xff49e1){return _0x24df55*_0xff49e1;},'iZUmv':function(_0x21aac2,_0x88601a){return _0x21aac2*_0x88601a;},'gNkBy':function(_0x535f28,_0x272730){return _0x535f28<_0x272730;},'AEoQd':function(_0x50d4f2,_0x11230b){return _0x50d4f2/_0x11230b;},'rAJut':function(_0x401b76,_0x545f80){return _0x401b76(_0x545f80);},'eOKzF':function(_0x30dbd5,_0x2ebfe7){return _0x30dbd5!==_0x2ebfe7;},'bntOT':function(_0x48bb38,_0x1d3a88,_0x123ea4,_0x303321,_0x37b7b7){return _0x48bb38(_0x1d3a88,_0x123ea4,_0x303321,_0x37b7b7);},'oxpci':function(_0x1b6418,_0x3a5a17,_0x3d28fb,_0x58a0f3,_0x28f66f){return _0x1b6418(_0x3a5a17,_0x3d28fb,_0x58a0f3,_0x28f66f);},'gJPTt':function(_0x15171b,_0xf7c825){return _0x15171b!==_0xf7c825;},'GyyJE':function(_0x39ec90,_0x314c8a,_0x1dd486,_0x3cb4c9,_0x47f2e5){return _0x39ec90(_0x314c8a,_0x1dd486,_0x3cb4c9,_0x47f2e5);},'FwPAv':'f32','kqZne':function(_0x578fda,_0x4d3939,_0x12425e,_0xd4c69d,_0xca115d){return _0x578fda(_0x4d3939,_0x12425e,_0xd4c69d,_0xca115d);},'jyMht':function(_0x238c8a,_0x47860d,_0x5511d0,_0x5a648d,_0x12fc28){return _0x238c8a(_0x47860d,_0x5511d0,_0x5a648d,_0x12fc28);},'mFZgy':_0x168149(0x429),'lcBQf':function(_0x29e3a0,_0x25d5bb,_0x2ba635,_0x3b42be,_0x39fffd){return _0x29e3a0(_0x25d5bb,_0x2ba635,_0x3b42be,_0x39fffd);},'TGVdr':_0x168149(0x35d),'VBvlx':_0x168149(0x57f),'VPnJI':function(_0x36b142){return _0x36b142();},'bEutG':function(_0x2726ea,_0x3ed5f3,_0x46f8b0){return _0x2726ea(_0x3ed5f3,_0x46f8b0);},'VidBJ':function(_0x50fcb3,_0x1b3bb0,_0x24a433,_0x2081b0,_0x1f77f3,_0x315e6e,_0x5f851e){return _0x50fcb3(_0x1b3bb0,_0x24a433,_0x2081b0,_0x1f77f3,_0x315e6e,_0x5f851e);},'aLMVy':function(_0x4d942f,_0x2a5a63){return _0x4d942f!==_0x2a5a63;},'FNSOX':_0x168149(0x55a),'fMtTU':function(_0x2dbb66,_0x148ee5){return _0x2dbb66/_0x148ee5;},'FcsfP':function(_0x594431,_0x895162){return _0x594431/_0x895162;},'kccWD':'rgba('+_0x168149(0x188)+_0x168149(0x505)+'6,.9)','EutZW':function(_0x18e19b,_0x518fc2){return _0x18e19b-_0x518fc2;},'JCMXc':function(_0x3eb4fe,_0x1fff3f){return _0x3eb4fe/_0x1fff3f;},'jPTyO':_0x168149(0x56b),'VDtTE':'rgba('+_0x168149(0x4f8)+_0x168149(0x2ab)+_0x168149(0x1dd),'wJCAh':_0x168149(0x37a)+_0x168149(0x2ec)+_0x168149(0x19b)+_0x168149(0x485)+'ystem'+_0x168149(0x172)+_0x168149(0x16f)+_0x168149(0x40f),'DVSpQ':'3|4|7'+'|2|1|'+'0|6|5','TXOeV':'gUjXK','XeFSp':'true','tuVnR':function(_0x55aab8,_0x49ff64){return _0x55aab8(_0x49ff64);},'YBeNa':'sk-sw'+'itch','JTrUo':_0x168149(0x51c),'WIxTE':_0x168149(0x227)+'check'+'ed','BQfkl':function(_0x4c9a8e,_0x5b2e5f){return _0x4c9a8e(_0x5b2e5f);},'rGLXj':'--p','uqNFK':function(_0x5410b8,_0x6ec062){return _0x5410b8*_0x6ec062;},'JIvRU':'sk-ra'+'nge','PGflr':_0x168149(0x2bf)+'l','KsJdR':_0x168149(0x2eb)+_0x168149(0x240)+_0x168149(0x303),'uBYFE':_0x168149(0x1ca)+'l','IvESW':_0x168149(0x37b),'HIMxV':_0x168149(0x46b),'BUxBN':_0x168149(0x41b)+'rd','LKTLZ':_0x168149(0x41b)+_0x168149(0x504)+'ad','nBGlE':_0x168149(0x41b)+'rd-ti'+'tle','FajdP':_0x168149(0x2e9)+'g','YHzSv':_0x168149(0x355),'fUlpG':'sk-mb'+'ody','LKraD':'pUdUM','DdFFg':'font-'+_0x168149(0x211)+_0x168149(0x254)+_0x168149(0x287)+_0x168149(0x19e)+_0x168149(0x558)+'238,2'+'42,.6'+')','sESKJ':_0x168149(0x4bb)+_0x168149(0x19c)+_0x168149(0x40c),'yorGP':function(_0x49fff6,_0x436f6a){return _0x49fff6-_0x436f6a;},'IthBS':function(_0x46db63,_0x25e30a){return _0x46db63-_0x25e30a;},'syFHr':'ECdip','NnboF':'UiIVA','NgpMQ':_0x168149(0x1e3)+'aggin'+'g','VbigG':function(_0x2f688e,_0x5cf772){return _0x2f688e!==_0x5cf772;},'czYyj':_0x168149(0x1d0),'xkmBA':function(_0xe8e064){return _0xe8e064();},'gGVav':_0x168149(0x453)+'oom','lDIrm':function(_0x271d88,_0x5a3d40,_0x166b3a){return _0x271d88(_0x5a3d40,_0x166b3a);},'GCXrR':_0x168149(0x478),'SspEU':function(_0xbe7afb,_0x35c462){return _0xbe7afb(_0x35c462);},'jpEPL':'mn-pa'+'nel','HmnNL':'nav','azJZE':_0x168149(0x3d0)+'in','moeTt':_0x168149(0x34b)+'r','NpYkn':_0x168149(0x239)+'p','byvnc':_0x168149(0x22c),'QZeZc':_0x168149(0x30e)+'o','UVvTR':'butto'+'n','uygiZ':'mn-cl'+_0x168149(0x1d5),'lqucj':_0x168149(0x4e0)+'erup','VqNbH':_0x168149(0x4e0)+_0x168149(0x24f)+_0x168149(0x386),'zYWYp':function(_0x2b9891,_0x599df0){return _0x2b9891+_0x599df0;},'AHocy':function(_0x439ef7,_0x331550){return _0x439ef7+_0x331550;},'GWmkw':_0x168149(0x1c7),'lLxyW':'shown','EeloV':_0x168149(0x42c),'qiWfz':_0x168149(0x1bf)+'|4|1','rGgvH':'.sk-c'+'tl','tzuts':'#ffb3'+'c6','JgvyW':_0x168149(0x59b)+_0x168149(0x20c)+'ixed;'+_0x168149(0x5a8)+_0x168149(0x493)+_0x168149(0x4ac)+_0x168149(0x56f)+_0x168149(0x2d9)+_0x168149(0x3be)+'vh;z-'+_0x168149(0x156)+_0x168149(0x1c2)+_0x168149(0x334)+'6;poi'+'nter-'+_0x168149(0x36b)+_0x168149(0x193)+'e','vWcjx':_0x168149(0x59a),'SDlrG':'capLi'+'nker','cKUsq':_0x168149(0x277),'DqmJm':_0x168149(0x1a5)+'M','IkJuG':_0x168149(0x5b9)+_0x168149(0x4de)+_0x168149(0x1f9)+'nager','sAlWm':'ColyT'+_0x168149(0x57e)+'orm','KwKiP':function(_0x5c8206,_0x29815b,_0x4562e3,_0x1143bd,_0x5be7a7,_0x1c2892,_0x4e07f8,_0xde1a60){return _0x5c8206(_0x29815b,_0x4562e3,_0x1143bd,_0x5be7a7,_0x1c2892,_0x4e07f8,_0xde1a60);},'CBwjw':_0x168149(0x207)+'m','JEBcW':_0x168149(0x439)+_0x168149(0x5ac),'bUpEA':'Netwo'+'rkMan'+_0x168149(0x5d6),'InoKt':_0x168149(0x399)+_0x168149(0x545)+_0x168149(0x442),'EZEtk':_0x168149(0x1d8)+_0x168149(0x545)+_0x168149(0x442),'FdoVd':function(_0x3383f2,_0x5874b7,_0x191f3b,_0x1fe014,_0x3ad3de,_0x496eb7,_0x280fa3,_0x425478){return _0x3383f2(_0x5874b7,_0x191f3b,_0x1fe014,_0x3ad3de,_0x496eb7,_0x280fa3,_0x425478);},'RYFHf':'capPi'+_0x168149(0x377)+'r','Nbozr':_0x168149(0x217)+_0x168149(0x43a),'xEGlq':_0x168149(0x5ad),'YMznC':function(_0x2d7ce7,_0x544863){return _0x2d7ce7+_0x544863;},'cVcoG':function(_0x1895e3,_0x5658a3,_0x5cc34e){return _0x1895e3(_0x5658a3,_0x5cc34e);},'cwUcF':_0x168149(0x59b)+_0x168149(0x20c)+'ixed;'+_0x168149(0x5a8)+_0x168149(0x5bb)+_0x168149(0x156)+_0x168149(0x1c2)+_0x168149(0x334)+_0x168149(0x501)+_0x168149(0x561)+_0x168149(0x36b)+_0x168149(0x193)+'e;','IkfEW':_0x168149(0x533),'tWEbW':function(_0x418ed9,_0x4bb5d9){return _0x418ed9!==_0x4bb5d9;},'TOHaH':_0x168149(0x40a),'Hbgnz':_0x168149(0x3c2),'tmfdI':_0x168149(0x525)+_0x168149(0x38e)+_0x168149(0x389)+_0x168149(0x267)+'io','uQiES':_0x168149(0x525)+_0x168149(0x38e)+_0x168149(0x47d)+_0x168149(0x214)+_0x168149(0x3ce)+_0x168149(0x25d)+_0x168149(0x5cb)+'\x20payl'+_0x168149(0x2a6)};if(!/(^|\.)2v2\.io$/['test'](location[_0x168149(0x23d)+_0x168149(0x242)]||''))return;if(window[_0x168149(0x1cc)+_0x168149(0x588)+_0x168149(0x3d8)])return;window['__SAK'+_0x168149(0x588)+_0x168149(0x3d8)]=!![];var _0x24a978=_0x168149(0x20d)+'9d',_0x68114b=_0x1e6031['tzuts'],_0x53b46a={'esp':![],'boxes':!![],'names':!![],'health':!![],'team':!![],'lines':![],'scale':0x1,'noRecoil':![],'noSpread':![],'rapidFire':![],'damageValue':0x96,'infAmmo':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'camHeight':1.6,'playerHeight':1.8,'fovOverride':0x0,'safeMode':![],'hookCapture':![],'hookState':![],'hookNoRecoil':![]},_0x2d166c={..._0x53b46a};try{Object['assig'+'n'](_0x2d166c,JSON['parse'](localStorage[_0x168149(0x4a5)+'em'](_0x168149(0x523)+_0x168149(0x49b)+_0x168149(0x4ad))||'{}'));}catch(_0x508aab){}function _0x1786c6(){var _0x5481ff=_0x168149;try{localStorage['setIt'+'em']('sakur'+'a.2v2'+'.v1',JSON['strin'+_0x5481ff(0x4d3)](_0x2d166c));}catch(_0x549fd5){}}var _0x5dd843={'uwmk':!!window[_0x168149(0x2d1)+'WebMo'+_0x168149(0x59f)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'linker':![],'msm':![],'localView':![],'localTransform':![],'charCam':![],'aimManager':![],'room':![],'state':![],'spawner':![],'players':0x0,'lastError':''},_0x17f3b9=document[_0x168149(0x46c)+'eElem'+_0x168149(0x37f)]('canva'+'s');_0x17f3b9[_0x168149(0x33f)][_0x168149(0x564)+'xt']=_0x1e6031['JgvyW'];var _0x496f9b=_0x17f3b9[_0x168149(0x349)+'ntext']('2d'),_0x508114={'w':0x0,'h':0x0,'dpr':0x0};function _0x15bc1b(){var _0xc14ff7=_0x168149,_0x37abe1={'iQQLE':function(_0x3ed15e){return _0x3ed15e();}};if(_0x1e6031[_0xc14ff7(0x4fd)](_0x1e6031[_0xc14ff7(0x3e5)],_0xc14ff7(0x544))){var _0x2505ae=(_0xc14ff7(0x4a8)+'|4|2')[_0xc14ff7(0x16e)]('|'),_0x8b4ec1=0x15a6+-0x212a+0xb84;while(!![]){switch(_0x2505ae[_0x8b4ec1++]){case'0':var _0x186037=_0x527995['query'+_0xc14ff7(0x17a)+_0xc14ff7(0x2f5)+'l'](_0xc14ff7(0x259)+'tl');continue;case'1':if(!_0x260eae)return;continue;case'2':if(_0x1c0ee9){var _0x32bcbe=_0x37abe1[_0xc14ff7(0x578)](_0x196eb3);_0x1c0ee9['repla'+'ceChi'+'ldren'](..._0x32bcbe),_0x203a80[_0xc14ff7(0x346)+_0xc14ff7(0x199)](_0x2eecd9['x'])&&(_0x28f481[_0xc14ff7(0x33f)]['left']=_0x45397b['x']+'px',_0x1d4218[_0xc14ff7(0x33f)]['top']=_0x212282['y']+'px');}continue;case'3':var _0x580633=_0x1757f4['shado'+_0xc14ff7(0x306)]||_0x243f45;continue;case'4':var _0x1c0ee9=_0x133194[_0xc14ff7(0x40d)+'Selec'+_0xc14ff7(0x30b)](_0xc14ff7(0x57c)+'ols');continue;}break;}}else{var _0x4454da=window[_0xc14ff7(0x362)+'ePixe'+_0xc14ff7(0x28c)+'o']||0x1de6+-0x9*-0x174+-0x1*0x2af9,_0x54e0aa=window[_0xc14ff7(0x4ef)+_0xc14ff7(0x580)],_0x26fb85=window[_0xc14ff7(0x4ef)+'Heigh'+'t'];if(_0x54e0aa===_0x508114['w']&&_0x26fb85===_0x508114['h']&&_0x4454da===_0x508114[_0xc14ff7(0x1f0)])return;_0x508114['w']=_0x54e0aa,_0x508114['h']=_0x26fb85,_0x508114[_0xc14ff7(0x1f0)]=_0x4454da,_0x17f3b9[_0xc14ff7(0x2ed)]=Math['round'](_0x54e0aa*_0x4454da),_0x17f3b9['heigh'+'t']=Math['round'](_0x26fb85*_0x4454da),_0x496f9b['setTr'+_0xc14ff7(0x253)+'rm'](_0x4454da,0xd2e+0xf*0xf3+0x1b6b*-0x1,-0x11b3+0xb3*-0x1f+0x2760,_0x4454da,0x1c03+-0x230f+0x4*0x1c3,0x1*0x33d+0xeed+-0x122a);}}document[_0x168149(0x36d)][_0x168149(0x3c7)+_0x168149(0x20b)+'d'](_0x17f3b9);var _0x3c56c0=null,_0xb4a068=null,_0x348948={},_0x42311d=0x1*0x1055+0x2ad*-0x4+-0x5a1,_0x2a0139=0x2*0x11a3+-0xb*-0xe3+-0x1*0x2d07,_0x3187ec=0x2004+-0x1ad9+-0x52b,_0x239265=0x1025+0xe17+-0x78f*0x4,_0x5cbc41=-0x1d35*0x1+0x1*0x89a+0x149b,_0x5332ff=0x1f67+-0x1*-0x22be+-0x11f*0x3b,_0x5f06b3=0x1223*0x2+0x1*-0x2261+-0x5*0x61,_0x20d30e=0x1068+-0x1*0x22bb+0x1253,_0x125a63=0xf8*0x17+0x27a*0x9+-0xa*0x475,_0x12fb3e=0x21e9*-0x1+0x3*-0x8f+0x2396,_0x3b871a=-0x1f97+-0x16c3*-0x1+-0x1*-0x8d4,_0x423240=[],_0x3ad419=new Map();function _0x4356c6(_0xa9aa7a,_0x5e8cc8,_0x28df3f){var _0x42c8ba=_0x168149,_0x17b88b=_0x3ad419[_0x42c8ba(0x176)](_0xa9aa7a);!_0x17b88b&&(_0x17b88b=new Map(),_0x3ad419['set'](_0xa9aa7a,_0x17b88b));if(!_0x17b88b['has'](_0x5e8cc8))try{var _0x1fb97b=new _0x3c56c0(_0xa9aa7a)['readF'+_0x42c8ba(0x45e)](_0x5e8cc8,_0x28df3f);_0x17b88b['set'](_0x5e8cc8,_0x1e6031['JBpfQ'](_0x1fb97b,undefined)?_0x1fb97b[_0x42c8ba(0x170)]():null);}catch(_0x374192){_0x17b88b[_0x42c8ba(0x27f)](_0x5e8cc8,null);}return _0x17b88b['get'](_0x5e8cc8);}function _0x38ad23(_0x352bcf,_0x382b8,_0x3abf5f,_0x23a63f){var _0x261aaf=_0x168149,_0x1c6251={'miQAI':function(_0x23c529){return _0x23c529();}};if(_0x261aaf(0x2da)!==_0x1e6031[_0x261aaf(0x44d)])_0x5f1256['preve'+'ntDef'+'ault'](),_0x1c6251['miQAI'](_0x21af36);else try{new _0x3c56c0(_0x352bcf)[_0x261aaf(0x3b9)+_0x261aaf(0x310)](_0x382b8,_0x3abf5f,_0x23a63f);}catch(_0x59efbb){}}function _0x6ec823(_0x299b6e,_0x4ca488,_0x351b6b,_0x50ca82){var _0x50337c=_0x4356c6(_0x299b6e,_0x4ca488,_0x351b6b);if(_0x50337c!=null)_0x38ad23(_0x299b6e,_0x4ca488,_0x351b6b,_0x50337c*_0x50ca82);}function _0x36c6f6(_0x1a69b1,_0x282234,_0x5c2209,_0x306854,_0x3e7b3e,_0x5b2467,_0x5a4a7c){var _0x132156=_0x168149;try{var _0x30c010=(_0x132156(0x1e6)+_0x132156(0x177))['split']('|'),_0x35d2a8=0x1*-0x9e3+-0x1*-0x2498+-0x1ab5;while(!![]){switch(_0x30c010[_0x35d2a8++]){case'0':_0x5dd843[_0x132156(0x56e)+_0x132156(0x4ee)]++;continue;case'1':return _0x23f36d;case'2':_0x23f36d[_0x132156(0x212)+'ed']=_0x5a4a7c!==![];continue;case'3':var _0x23f36d=_0xb4a068[_0x132156(0x216)+_0x132156(0x31b)]({'typeName':_0x282234,'methodName':_0x5c2209,'params':_0x306854,'returnType':_0x3e7b3e},_0x5b2467);continue;case'4':_0x348948[_0x1a69b1]=_0x23f36d;continue;}break;}}catch(_0x313c6c){if(_0x1e6031['JBpfQ'](_0x1e6031[_0x132156(0x45a)],'YXJwI'))return _0x5dd843[_0x132156(0x2e6)+'rror']=_0x1e6031['YdMgO'](_0x1e6031['bSKWT']+_0x1a69b1,':\x20')+(_0x313c6c&&_0x313c6c[_0x132156(0x5b4)+'ge']||_0x313c6c),null;else _0x142df3['damag'+_0x132156(0x168)+'e']=_0x36e675,_0x2da81e();}}function _0x48417d(_0x490e21,_0x50c499,_0x4f1320,_0x276d79,_0x495a31,_0x39fd05,_0x176741){var _0x4e7528=_0x168149;try{if(_0x1e6031['tcCCg']!=='OmOHP'){var _0x3efc6c=_0xb4a068['hookP'+'ostfi'+'x']({'typeName':_0x50c499,'methodName':_0x4f1320,'params':_0x276d79,'returnType':_0x495a31},_0x39fd05);return _0x3efc6c['enabl'+'ed']=_0x1e6031[_0x4e7528(0x54a)](_0x176741,![]),_0x348948[_0x490e21]=_0x3efc6c,_0x5dd843[_0x4e7528(0x56e)+'Total']++,_0x3efc6c;}else _0x553767['lines']=_0x2b6460,_0x512660();}catch(_0x3b183c){return _0x5dd843[_0x4e7528(0x2e6)+_0x4e7528(0x518)]=_0x1e6031['YdMgO'](_0x1e6031['YdMgO'](_0x1e6031[_0x4e7528(0x5a1)]+_0x490e21,':\x20'),_0x3b183c&&_0x3b183c[_0x4e7528(0x5b4)+'ge']||_0x3b183c),null;}}var _0x343cf0=()=>![];try{if(window['Unity'+_0x168149(0x3f1)+'dkit']&&!_0x2d166c['safeM'+'ode']){_0x3c56c0=window[_0x168149(0x2d1)+_0x168149(0x3f1)+_0x168149(0x59f)][_0x168149(0x274)+'Wrapp'+'er'],_0xb4a068=window[_0x168149(0x2d1)+'WebMo'+_0x168149(0x59f)][_0x168149(0x3a6)+'me']['creat'+_0x168149(0x434)+'in']({'name':_0x168149(0x525)+'a2v2','version':_0x1e6031['vWcjx'],'referencedAssemblies':[_0x168149(0x42f)+'bly-C'+_0x168149(0x48a)+_0x168149(0x4b7),_0x168149(0x2d1)+_0x168149(0x3da)+_0x168149(0x520)+'eModu'+_0x168149(0x450)+'l']});if(_0x2d166c[_0x168149(0x186)+'aptur'+'e'])_0x48417d(_0x1e6031['SDlrG'],_0x168149(0x4b0)+'Playe'+'rLink'+'er',_0x1e6031[_0x168149(0x28b)],[_0x168149(0x507)],undefined,(_0x4267c3,_0x1f37bc)=>{var _0x2cba91=_0x168149;!_0x42311d&&_0x1f37bc&&_0x1f37bc['val']()&&(_0x42311d=_0x1f37bc['val'](),_0x5dd843[_0x2cba91(0x2a1)+'r']=!![]);},!![]);if(_0x2d166c[_0x168149(0x186)+_0x168149(0x3f6)+'e'])_0x48417d(_0x1e6031[_0x168149(0x4cb)],_0x1e6031['IkJuG'],_0x1e6031['cKUsq'],[_0x168149(0x507)],undefined,(_0x26af44,_0x340008)=>{var _0x39c271=_0x168149;if('tOJay'===_0x39c271(0x375)){var _0x33425f=_0xfbc6d6();return _0x33425f[_0x39c271(0x40d)+_0x39c271(0x17a)+_0x39c271(0x30b)](_0x1e6031[_0x39c271(0x18d)])['child'+_0x39c271(0x54d)];}else!_0x2a0139&&_0x340008&&_0x340008['val']()&&(_0x1e6031['IHuSv']===_0x39c271(0x4cd)?(_0xa3d6cb[_0x39c271(0x3c5)+'Path'](),_0x2f9ce8[_0x39c271(0x2ce)+'o'](_0x506bc9['w']/(0x109c*-0x2+0x44*-0x43+0x1983*0x2),_0x45fe87['h']),_0x3cf5b1[_0x39c271(0x457)+'o'](_0xb6e50c['x'],_0x25291b),_0x1e9ffb[_0x39c271(0x4d5)+'eStyl'+'e']=_0x107920,_0x20f339[_0x39c271(0x28a)+_0x39c271(0x423)]=0x1ab1+-0x1ab*0x17+0xbad,_0x2b04ef[_0x39c271(0x3d5)+_0x39c271(0x15a)+'h']([-0xe2*0x2b+0x3*-0xc41+0x4abe,-0xd40+0x2285+-0x2*0xaa0]),_0x1692b7[_0x39c271(0x4d5)+'e'](),_0x1b1035['setLi'+'neDas'+'h']([])):(_0x2a0139=_0x340008[_0x39c271(0x170)](),_0x5dd843['msm']=!![]));},!![]);if(_0x2d166c['hookC'+'aptur'+'e'])_0x48417d(_0x168149(0x228)+_0x168149(0x253)+'rm',_0x1e6031[_0x168149(0x189)],'Updat'+_0x168149(0x4b6)+_0x168149(0x1e5)+'er',[_0x168149(0x507)],undefined,(_0x5ec4c0,_0xede68b)=>{var _0x5a71a5=_0x168149;_0xede68b&&_0xede68b[_0x5a71a5(0x170)]()&&(_0x5a71a5(0x3af)===_0x5a71a5(0x3af)?(_0x239265=_0xede68b[_0x5a71a5(0x170)](),_0x5dd843['local'+_0x5a71a5(0x2c1)+_0x5a71a5(0x417)]=!![]):(_0x43f50d[_0x5a71a5(0x186)+_0x5a71a5(0x3f6)+'e']=_0xa46cff,_0x151e0b()));},!![]);if(_0x2d166c['hookC'+_0x168149(0x3f6)+'e'])_0x1e6031[_0x168149(0x3db)](_0x48417d,_0x1e6031[_0x168149(0x585)],_0x168149(0x492)+_0x168149(0x1c5),_0x1e6031['JEBcW'],[_0x1e6031[_0x168149(0x158)]],undefined,(_0x445191,_0x19eeba)=>{var _0x1c5d1c=_0x168149;_0x1e6031['WPnbN'](!_0x5332ff,_0x19eeba)&&_0x19eeba[_0x1c5d1c(0x170)]()&&(_0x1c5d1c(0x2c7)===_0x1c5d1c(0x2ad)?(_0x303973(_0x45dfd2,-0x1b23+-0x1b00+-0x36e7*-0x1,_0x1c5d1c(0x471),_0x33eb07),_0xc7887d(_0x1d4647,0x13*-0x1a+-0x1*-0x9ad+-0x1*0x713,_0x1c5d1c(0x471),_0x28eaaf)):(_0x5332ff=_0x19eeba[_0x1c5d1c(0x170)](),_0x5dd843[_0x1c5d1c(0x33b)+_0x1c5d1c(0x1c5)]=!![]));},!![]);if(_0x2d166c[_0x168149(0x33c)+_0x168149(0x45f)])_0x1e6031['KwKiP'](_0x48417d,'capRo'+_0x168149(0x206),_0x1e6031[_0x168149(0x2ca)],_0x1e6031[_0x168149(0x4c4)],[_0x1e6031['tSyqW'],'i32'],undefined,(_0x446615,_0x41df7e,_0x271bfe)=>{var _0xeaf0f0=_0x168149;if(_0x271bfe&&_0x271bfe[_0xeaf0f0(0x170)]()){if(_0xeaf0f0(0x422)==='yhReU')return null;else _0x20d30e=_0x271bfe['val'](),_0x5dd843[_0xeaf0f0(0x196)]=!![];}},!![]);if(_0x2d166c[_0x168149(0x33c)+'tate'])_0x48417d('capRo'+_0x168149(0x281),_0x168149(0x5b2)+_0x168149(0x5d2)+'ager',_0x1e6031['EZEtk'],[_0x1e6031[_0x168149(0x158)]],_0x168149(0x507),_0x34bb26=>{var _0x555e08=_0x168149;_0x34bb26&&_0x34bb26[_0x555e08(0x170)]()&&(_0x1e6031[_0x555e08(0x4fd)]('cZvCe',_0x1e6031[_0x555e08(0x18a)])?(_0x123769['boxes']=_0x3adea7,_0x3380d2()):(_0x20d30e=_0x34bb26[_0x555e08(0x170)](),_0x5dd843[_0x555e08(0x196)]=!![]));},!![]);if(_0x2d166c[_0x168149(0x33c)+_0x168149(0x45f)])_0x1e6031['FdoVd'](_0x48417d,_0x1e6031[_0x168149(0x48c)],_0x168149(0x53a)+_0x168149(0x289)+'er',_0x168149(0x439)+_0x168149(0x5ac),[_0x1e6031['tSyqW']],undefined,(_0x209efa,_0x1ac608)=>{var _0x54b619=_0x168149;_0x1ac608&&_0x1ac608[_0x54b619(0x170)]()&&!_0x5f06b3&&(_0x5f06b3=_0x1ac608[_0x54b619(0x170)]());},!![]);if(_0x2d166c[_0x168149(0x33c)+'tate'])_0x48417d(_0x168149(0x24b)+'ew',_0x1e6031[_0x168149(0x470)],'Init',['i32'],undefined,(_0x116270,_0x1f53e6)=>{var _0x336c9f=_0x168149;if(_0x1f53e6&&_0x1f53e6[_0x336c9f(0x170)]()){}},!![]);if(_0x2d166c[_0x168149(0x41f)+_0x168149(0x3b1)+'il'])_0x36c6f6('noRec'+'oil',_0x1e6031['xEGlq'],'Apply'+_0x168149(0x47f)+'l',[_0x168149(0x507)],undefined,_0x343cf0,!!_0x2d166c[_0x168149(0x385)+_0x168149(0x464)]);}}catch(_0x15aee7){'ZyCoB'!==_0x168149(0x16d)?_0x5dd843['lastE'+_0x168149(0x518)]=_0x1e6031[_0x168149(0x41a)](_0x168149(0x370)+_0x168149(0x1d3)+'\x20',_0x15aee7&&_0x15aee7[_0x168149(0x5b4)+'ge']||_0x15aee7):(_0xc4e45e(_0xfadbaf,-0x137e*-0x1+-0x1*-0x2605+-0x1*0x38cf,_0x168149(0x471),_0x1909f3),_0x51a56e(_0x2d4830,-0x2593+-0x1*0x63d+-0x1db*-0x18,_0x168149(0x471),_0x1860e4));}function _0x557acc(_0x29b98e,_0x409041){var _0x9d1bf7=_0x168149,_0x93a5e5={'yXBcz':function(_0x5eba54,_0x2ee839){return _0x5eba54+_0x2ee839;},'WYVnG':function(_0x2e6696,_0x4d1ea1){var _0x49c5c5=_0x387f;return _0x1e6031[_0x49c5c5(0x314)](_0x2e6696,_0x4d1ea1);}},_0x5c5366=_0x348948[_0x29b98e];if(_0x5c5366){if(_0x1e6031[_0x9d1bf7(0x590)](_0x1e6031[_0x9d1bf7(0x30a)],_0x1e6031[_0x9d1bf7(0x373)]))try{_0x1e6031[_0x9d1bf7(0x440)]('jlBOG',_0x1e6031[_0x9d1bf7(0x181)])?_0x5c5366['enabl'+'ed']=!!_0x409041:_0x107db=_0x194eb6[_0x9d1bf7(0x34a)](_0x52672e[_0x9d1bf7(0x4a5)+'em'](_0x1e6031['vRgXH'])||'{}');}catch(_0x409260){}else{var _0x31c85c=_0x486b6d();_0x2e690f['repla'+_0x9d1bf7(0x21d)+_0x9d1bf7(0x562)](..._0x31c85c),_0x43fe2e[_0x9d1bf7(0x346)+_0x9d1bf7(0x199)](_0x31cb3e['x'])&&(_0x5d1705['style'][_0x9d1bf7(0x32d)]=_0x93a5e5[_0x9d1bf7(0x1f8)](_0x2f0844['x'],'px'),_0x4a0a6f[_0x9d1bf7(0x33f)][_0x9d1bf7(0x2f1)]=_0x93a5e5['WYVnG'](_0x40981c['y'],'px'));}}}function _0xe535af(_0x14abe0,_0x1c9112){var _0x388c4d=_0x168149;if(_0x1e6031[_0x388c4d(0x257)]!==_0x1e6031[_0x388c4d(0x55c)])try{var _0x2adc11=new _0x3c56c0(_0x14abe0)[_0x388c4d(0x4ba)+_0x388c4d(0x45e)](_0x1c9112,_0x388c4d(0x46b));return _0x2adc11?_0x2adc11['val']():-0x13da+0x25cd+0x1*-0x11f3;}catch(_0x544e59){return-0x1c14+0x1*0x16b5+0x55f;}else return-0x2251+-0x1f31+0x4182;}function _0x12a707(_0x501915,_0x4a8823){var _0x753c86=_0x168149;try{var _0x30e232=new _0x3c56c0(_0x501915)['readF'+'ield'](_0x4a8823,_0x1e6031['tSyqW']);return _0x30e232?_0x30e232[_0x753c86(0x170)]():-0x1*-0x64d+-0x6*-0x2b5+-0x168b;}catch(_0x1918a3){return 0x1403+0x5*-0xa+-0x13d1;}}function _0x3fbbbc(_0x512f75,_0x20217c){var _0x4ad8f0=_0x168149;try{var _0x12027e=new _0x3c56c0(_0x512f75)[_0x4ad8f0(0x4ba)+_0x4ad8f0(0x45e)](_0x20217c,'i16');return _0x12027e?_0x12027e[_0x4ad8f0(0x170)]():-0x22dc*-0x1+0x111e+0x33fa*-0x1;}catch(_0x26d578){return 0x21e0+0x1c*0x11e+0x56e*-0xc;}}function _0x5c3c2e(_0xbab260,_0x3c128e){var _0x33805e=_0x168149;if(_0x33805e(0x235)!==_0x1e6031['gAcVx'])try{var _0x3e49ba=new _0x3c56c0(_0xbab260)[_0x33805e(0x4ba)+'ield'](_0x3c128e,'u8');return _0x3e49ba?_0x3e49ba['val']():0x1fdc+0x283*-0xd+-0xcb*-0x1;}catch(_0x54e532){return-0xb*0x2b3+0x1*0x1af+0x1c02;}else _0x22a334[_0x33805e(0x27f)](_0xb2971b,null);}function _0x1fd5ea(_0x59d541,_0x548556){var _0x106244=_0x168149,_0x3bc8b5={'OZCpM':_0x106244(0x48d)+_0x106244(0x5aa),'KMSuR':_0x106244(0x1e3)+'aggin'+'g'};try{if(_0x1e6031[_0x106244(0x2a3)]!==_0x106244(0x337)){var _0x491de5=_0x3bc8b5[_0x106244(0x421)]['split']('|'),_0x1fed43=0x2*-0x1119+0x3*0xc1+-0x5*-0x663;while(!![]){switch(_0x491de5[_0x1fed43++]){case'0':var _0x23544b=_0x4939a6[_0x106244(0x3f7)+_0x106244(0x2bc)+_0x106244(0x472)+_0x106244(0x318)+'t']();continue;case'1':_0x11159c[_0x106244(0x3a5)+'inter'+_0x106244(0x56a)+'re'](_0x4023d4[_0x106244(0x4e0)+_0x106244(0x4ae)]);continue;case'2':if(_0x1bd99b['targe'+'t'][_0x106244(0x3a1)+'st'](_0x106244(0x4bb)+_0x106244(0x19c)+'put'))return;continue;case'3':_0x108284[_0x106244(0x42a)+'List'][_0x106244(0x511)](_0x3bc8b5[_0x106244(0x265)]);continue;case'4':_0x4a9e82=[_0x18d9e3['clien'+'tX']-_0x23544b['left'],_0x18c6ed[_0x106244(0x1e2)+'tY']-_0x23544b[_0x106244(0x2f1)]];continue;}break;}}else{var _0x34a54f=new _0x3c56c0(_0x59d541)[_0x106244(0x4ba)+_0x106244(0x45e)](_0x548556,'i8');return _0x34a54f?_0x34a54f[_0x106244(0x170)]():-0x10c+-0x31e+0x2*0x215;}}catch(_0x306b04){return-0x1c82+0x1acd+0x17*0x13;}}function _0x5a9a0d(_0x148994,_0x40ebed){var _0x30f48c=_0x168149;try{if(_0x1e6031['UmusJ'](_0x1e6031['OLpma'],_0x1e6031[_0x30f48c(0x3c9)]))return{'x':_0x5057f7(_0x2fa03a,_0x220102),'y':_0x1e6031[_0x30f48c(0x2e3)](_0x466ca5,_0x366593,_0x211f2d+(-0x18ae*0x1+0x1145+0x76d)),'z':_0xa3c3ff(_0xf7da36,_0x7a5bc7+(-0x27*0x9+0x157b+-0x1414))};else{var _0x4784a1=new _0x3c56c0(_0x148994)['readF'+_0x30f48c(0x45e)](_0x40ebed,'f32');return _0x4784a1?_0x4784a1['val']():-0xc*-0x16e+-0x1*0x40a+0x2e*-0x49;}}catch(_0x3a9f86){if(_0x1e6031['GEpqm']===_0x1e6031['apeJq'])_0xb7d4b7&&_0x4f6aa7[_0x30f48c(0x170)]()&&(_0x576993=_0x3913bd[_0x30f48c(0x170)](),_0x312fe8['room']=!![]);else return 0x1*-0xe17+0xa89+0x38e;}}function _0x3d4d80(_0x5227a6,_0x49dd79){return _0x1e6031['vBwPh'](_0xe535af,_0x5227a6,_0x49dd79);}function _0x173412(_0x217abc,_0x33915d){var _0x50dbbd=_0x168149;if(_0x1e6031[_0x50dbbd(0x32e)]('GEzoc',_0x50dbbd(0x154))){var _0x44aa6b=_0x2f834d[_0x50dbbd(0x46c)+'eElem'+'ent'](_0x1e6031['PgLDg']);_0x44aa6b['class'+'Name']=_0x50dbbd(0x475)+'ody';for(var _0x1d4a04 of _0x31b037)_0x44aa6b[_0x50dbbd(0x3c7)+_0x50dbbd(0x20b)+'d'](_0x1d4a04);_0x469315[_0x50dbbd(0x3c7)+_0x50dbbd(0x20b)+'d'](_0x44aa6b);}else return{'x':_0x1e6031[_0x50dbbd(0x2c9)](_0x5a9a0d,_0x217abc,_0x33915d),'y':_0x5a9a0d(_0x217abc,_0x33915d+(0x134*0xe+-0x9b4+0x4*-0x1c8)),'z':_0x1e6031[_0x50dbbd(0x51f)](_0x5a9a0d,_0x217abc,_0x33915d+(0x181d*0x1+0x484+-0x1c99))};}function _0x1f7830(_0x5b303d,_0x10654f){var _0x3c6ec1=_0x168149,_0x3d4d6f={'lxJzc':_0x1e6031['JYLgo'],'dAvxv':function(_0x3b41d2,_0x4662e2){return _0x3b41d2(_0x4662e2);},'oBYum':function(_0x4fb1c7,_0x410e6d){var _0xef93e9=_0x387f;return _0x1e6031[_0xef93e9(0x495)](_0x4fb1c7,_0x410e6d);},'sbTDg':function(_0x3ae84a,_0x24392f){return _0x3ae84a>=_0x24392f;}};if(!_0x5b303d)return null;try{var _0x53dc63=_0x12a707(_0x5b303d,-0x29*0xb1+-0xdd5*-0x1+0xe8c*0x1);if(_0x53dc63<=0x30e+-0xd60+0xa52||_0x53dc63>(_0x10654f||-0x295*-0x2+0x1*-0x180d+-0x17*-0xd5))return null;var _0x486771=window['Unity'+_0x3c6ec1(0x3f1)+_0x3c6ec1(0x59f)][_0x3c6ec1(0x3a6)+'me']['memor'+'y'](_0x5b303d+(0x1923+-0x1*0x23c7+-0xc*-0xe4),_0x53dc63*(0x1b20+0xdb5+-0x28d3)),_0x935b79='';for(var _0x4f0242=-0x516+0xf30+-0x35e*0x3;_0x1e6031['UkemB'](_0x4f0242,_0x53dc63);_0x4f0242++){var _0x554cd2=_0x486771[_0x4f0242*(-0x1101*-0x2+0x1*0x7e8+-0xdf8*0x3)]|_0x486771[_0x4f0242*(0x54c+-0x1dfd+0x18b3)+(-0x2b*0x4a+-0x27b*0xd+-0x10a*-0x2b)]<<0x2460+-0x10ce+-0x138a;if(_0x1e6031[_0x3c6ec1(0x440)](_0x554cd2,-0x1ee9+0xfb4+-0xe5*-0x11))break;_0x935b79+=String['fromC'+_0x3c6ec1(0x43c)+'de'](_0x554cd2);}return _0x935b79;}catch(_0x5a9f01){if(_0x1e6031['uLkyh']===_0x1e6031[_0x3c6ec1(0x32a)])return null;else{var _0x1de724=_0x3d4d6f[_0x3c6ec1(0x184)][_0x3c6ec1(0x16e)]('|'),_0x505d11=-0x425*-0x9+-0xd0c+-0x1841;while(!![]){switch(_0x1de724[_0x505d11++]){case'0':var _0x4ca03b=_0x75271c(_0x5421bf,_0x1251f7);continue;case'1':var _0x2a0f25=_0x3d4d6f['dAvxv'](_0x213ebe,_0x5421bf);continue;case'2':var _0x5421bf=_0x5bf487(_0x34f23b,0xe8f+-0xbc9+0x3*-0xda);continue;case'3':if(_0x3d4d6f['oBYum'](_0x1251f7,0xef5+-0xa7d*0x1+-0x478)||_0x3d4d6f[_0x3c6ec1(0x1a0)](_0x1251f7,_0x2a0f25))return 0x25f+0xbde*-0x3+0x213b;continue;case'4':var _0x1251f7=_0x2ad2c6(_0x156a6a,-0x7b*0x47+0x164*-0xe+0x35d5);continue;case'5':_0x4cd363[_0x3c6ec1(0x413)]=_0x4ca03b;continue;case'6':if(!_0x43c888)return-0x292+-0x2d3*0x9+0x1bfd;continue;case'7':return _0x4ca03b;case'8':if(!_0x5421bf)return 0x376*-0x7+-0x106b+-0x5*-0x821;continue;}break;}}}}function _0x4e8ad6(_0x4fc2c6){return _0x4fc2c6?_0xe535af(_0x4fc2c6,-0x15ff*0x1+-0x1c50+-0x10c9*-0x3):0x23d8+0x1*0x230f+-0x1*0x46e7;}function _0x3688a7(_0x1a94d9,_0x39907b){var _0x4909e2=_0x168149;return _0x1a94d9?_0xe535af(_0x1a94d9,0x1411+-0xd*-0x1b5+0x16*-0x1eb+_0x1e6031[_0x4909e2(0x3d1)](_0x39907b,0x9*-0xe5+0x4*0xbf+0x515)):0x2670+0x11*-0x159+-0xf87;}function _0x3de319(_0x123a4c,_0x1b28d3){var _0x34b662=_0x168149;if(!_0x123a4c)return null;for(var _0x12c2c9=-0x63*0x18+0x1b34+0x8f6*-0x2;_0x1e6031[_0x34b662(0x1dc)](_0x12c2c9,-0xd7e+0x4*-0x741+-0x2a86*-0x1);_0x12c2c9+=0x25fe+0x1746+-0x3d40){var _0x3d26e6=_0xe535af(_0x123a4c,-0x1c51+-0x1ad7+-0x1b9a*-0x2+_0x12c2c9),_0x1100fd=_0x1e6031[_0x34b662(0x2e3)](_0x12a707,_0x123a4c,_0x1e6031[_0x34b662(0x314)](-0x227e+-0x6*-0xae+-0x2*-0xf3d,_0x12c2c9));if(_0x3d26e6&&_0x1e6031[_0x34b662(0x1b9)](_0x1100fd,0xcb*0x29+-0x601+-0x1a82)&&_0x1100fd<=(_0x1b28d3||0xd0b+0x2319+-0x2fe4))return{'entries':_0x3d26e6,'count':_0x1100fd,'shift':_0x12c2c9};}return null;}function _0x119b68(_0x409a4a,_0x43c6a9){var _0x26c4f9=_0x168149,_0x35b9da=_0x3de319(_0x409a4a,_0x43c6a9);if(!_0x35b9da)return[];var _0x32a71d=[];for(var _0x5cc4b4=-0xb99*-0x1+0x65*0x4+-0x1*0xd2d;_0x5cc4b4<_0x35b9da[_0x26c4f9(0x3ca)];_0x5cc4b4++){var _0x18afce=0x155d+-0xc0f+-0x93e+_0x1e6031[_0x26c4f9(0x3d1)](_0x5cc4b4,0xb02*0x1+-0x1982+0xe90);if(_0x1e6031[_0x26c4f9(0x1a8)](_0x1e6031['UwuJG'](_0x12a707,_0x35b9da['entri'+'es'],_0x18afce),0x1f6c+-0x6af*-0x2+-0x2cca))continue;_0x32a71d['push'](_0xe535af(_0x35b9da['entri'+'es'],_0x1e6031[_0x26c4f9(0x40b)](_0x18afce,-0x140*-0x10+-0x12e3+-0x111)));}return _0x32a71d;}function _0x369f15(_0xb8a9e){var _0x52d65f=_0x168149,_0x4e2d10={'wGSKX':_0x52d65f(0x2fe)+_0x52d65f(0x4f8)+_0x52d65f(0x2ab)+'0,.9)','FCFbA':_0x52d65f(0x37a)+_0x52d65f(0x2ec)+'ns-se'+_0x52d65f(0x485)+_0x52d65f(0x230)+_0x52d65f(0x172)+'ans-s'+_0x52d65f(0x40f)};try{return new _0x3c56c0(_0xb8a9e)[_0x52d65f(0x345)+'assNa'+'me']();}catch(_0x36369e){if(_0x1e6031[_0x52d65f(0x4d8)]==='pZsJw')return null;else _0x1d1215[_0x52d65f(0x30d)+_0x52d65f(0x446)]=_0x4e2d10[_0x52d65f(0x2c2)],_0x5583e8['font']=_0x4e2d10[_0x52d65f(0x5a9)],_0x3be81c[_0x52d65f(0x342)+_0x52d65f(0x4ea)]=_0x52d65f(0x39a)+'r',_0x1385f8[_0x52d65f(0x46e)+'ext'](_0x129a39[_0x52d65f(0x1f2)+'ame'],_0x48f904['x'],_0x55fc4a-(0x4ac*-0x5+-0x1*0x1b41+0x32a7));}}function _0x238104(_0x6f6508,_0x14692d){var _0x14187c=_0x168149,_0x193363=_0x3d4d80(_0x6f6508,-0x1*-0xd34+0x1ddc+-0x2ae8),_0x3a2041=Math[_0x14187c(0x36e)](_0x4e8ad6(_0x193363),-0x1f63+0x10fa+0xe89);for(var _0x381dd5=-0x1c35+-0x335+0x1f6a;_0x381dd5<_0x3a2041;_0x381dd5++){var _0x679f16=_0x3688a7(_0x193363,_0x381dd5);if(!_0x679f16)continue;if(_0x369f15(_0x679f16)===_0x14692d)return _0x679f16;}return-0x1c4f+0x1d*0xd0+0x3*0x195;}function _0x3b1958(){var _0x287eff=_0x168149;if(!_0x20d30e)return 0x18f4+-0x2408+0x58a*0x2;var _0x4ebab5=_0x3d4d80(_0x20d30e,0x17*0x16d+0x1*0x15f7+-0x36b2);if(!_0x4ebab5)return 0x105b+-0x1*-0x440+-0x149b;var _0x2cc5f4=_0x1e6031[_0x287eff(0x57d)](_0x3d4d80,_0x4ebab5,0x15*-0x51+-0x45a*0x2+0xf69);if(!_0x2cc5f4)return 0x17e1+-0x1*0x26d6+0x1*0xef5;var _0x2421d1=_0x1e6031[_0x287eff(0x57d)](_0x3d4d80,_0x2cc5f4,-0x1893+-0x1e0a+0x36ad*0x1);if(!_0x2421d1)return 0x1e58*0x1+-0x83a+0x1*-0x161e;var _0x1d0c72=_0x1e6031[_0x287eff(0x160)](_0x3de319,_0x2421d1,-0x3d0*-0x6+-0x10c+0x2*-0xaca);if(!_0x1d0c72)return-0x241+-0x256b+0x27ac;return _0x4ebab5;}function _0x381757(){var _0x583610=_0x168149,_0x3acbce=[];if(!_0x125a63)return _0x3acbce;var _0xbf4b3d=_0x3d4d80(_0x125a63,-0x37a+-0xa*-0x316+-0x10d*0x1a),_0x3ca124=_0x1e6031[_0x583610(0x330)](_0x3d4d80,_0xbf4b3d,-0x1*-0x24bb+-0x261b+-0x17*-0x10),_0x2278e4=_0x119b68(_0x3ca124,0x382*-0x1+0x141*-0x17+0x2099*0x1);for(var _0x36cfc2=0xe71+0x2012+-0x2e83;_0x1e6031['tgzjX'](_0x36cfc2,_0x2278e4[_0x583610(0x271)+'h']);_0x36cfc2++){if(_0x1e6031[_0x583610(0x4fd)]('UlzcV','UlzcV')){var _0x5e972c=_0x2278e4[_0x36cfc2];if(!_0x5e972c)continue;var _0x5331c8=_0x1e6031[_0x583610(0x57d)](_0x3d4d80,_0x5e972c,-0x16b5+0x1*0x955+-0x1f0*-0x7);if(!_0x5331c8)continue;_0x3acbce['push']({'ptr':_0x5e972c,'playerId':_0x1f7830(_0x1e6031['vBwPh'](_0x3d4d80,_0x5e972c,-0x9d*0x3d+0x650+0x1f29*0x1),0x1a*-0x160+0x26ce+-0x2ce),'nickname':_0x1f7830(_0x3d4d80(_0x5e972c,0x7fa*0x1+-0x770+-0x76),0x22d4+-0x992+-0x1922*0x1),'health':_0x3fbbbc(_0x5e972c,-0x25*-0xf4+-0xac1+-0x379*0x7),'shield':_0x1e6031[_0x583610(0x3df)](_0x5c3c2e,_0x5e972c,0x229f+-0x1*-0x149d+0x1*-0x3706),'team':_0x1fd5ea(_0x5e972c,-0x2*0x8a5+-0x2708+0x3895*0x1),'aiming':_0x5c3c2e(_0x5e972c,-0x2254+-0x3a*0x2c+0x2c8a)!==0x1*0x26e6+-0x1b4+-0xc66*0x3,'crouching':_0x1e6031['UmusJ'](_0x1e6031[_0x583610(0x548)](_0x5c3c2e,_0x5e972c,-0x1*-0x22a0+-0xcb9+-0x15aa),-0x19d+0x1*-0x1948+0x1ae5),'pos':_0x173412(_0x5331c8,0x20e*-0x4+0x100d+-0x7c5),'isAlive':_0x1e6031['zIXur'](_0x5c3c2e(_0x5e972c,0x21d4+-0x1*-0x1e4f+-0x1*0x3fbf),0x72d+-0xedb*0x2+0x3*0x783)});}else _0x3e563d['noSpr'+_0x583610(0x5b1)]=_0x2732e9,_0x1e6031[_0x583610(0x55e)](_0x50274a);}return _0x3acbce;}function _0x549fe4(){var _0x1305e8=_0x168149,_0x39eead={'hqNcj':function(_0x338a08,_0x3a63fe){return _0x338a08&&_0x3a63fe;}};if(_0x1e6031[_0x1305e8(0x589)](_0x1305e8(0x26b),_0x1305e8(0x26b))){if(_0x42311d&&!_0x2a0139)_0x2a0139=_0x1e6031[_0x1305e8(0x548)](_0x3d4d80,_0x42311d,0x51*0x6f+0xb*0x2c3+0x573*-0xc);if(_0x1e6031[_0x1305e8(0x48f)](_0x2a0139,!_0x3187ec))_0x3187ec=_0x3d4d80(_0x2a0139,0x2*-0xf39+0xc15+0x126d);if(_0x2a0139&&!_0x239265)_0x239265=_0x3d4d80(_0x2a0139,-0x275*-0x5+0xbf1+-0x1826);if(_0x42311d&&!_0x5cbc41)_0x5cbc41=_0x1e6031['vBwPh'](_0x3d4d80,_0x42311d,0x241d+-0xfa2+-0x144f);if(_0x42311d&&!_0x5dd843[_0x1305e8(0x431)+'Camer'+'a'])_0x5dd843['world'+_0x1305e8(0x2d6)+'a']=_0x1e6031['Tdglb'](_0x3d4d80,_0x42311d,-0x143e+0x1*0xde2+-0x1a*-0x40);if(_0x3187ec&&!_0x423240['lengt'+'h']){if(_0x1e6031[_0x1305e8(0x347)]!==_0x1305e8(0x245)){var _0x4b6306=_0x1e6031[_0x1305e8(0x2e3)](_0x3d4d80,_0x3187ec,0x1e41+-0xb*0xe+-0x1*0x1d7f),_0x344cdf=Math[_0x1305e8(0x36e)](_0x1e6031[_0x1305e8(0x539)](_0x4e8ad6,_0x4b6306),0x166c+-0x3*0xa2d+-0x83b*-0x1);for(var _0x242110=-0x212+0x66c+-0x45a;_0x242110<_0x344cdf;_0x242110++){if('CmseC'!==_0x1305e8(0x5bf)){var _0x24dc28=_0x3688a7(_0x4b6306,_0x242110);if(_0x24dc28)_0x423240[_0x1305e8(0x280)](_0x24dc28);}else _0x39eead['hqNcj'](!_0x3301bd,_0x51e8c7)&&_0x365a7b['val']()&&(_0x2dfae1=_0x35b1f4[_0x1305e8(0x170)](),_0x21cbf7[_0x1305e8(0x2f8)]=!![]);}}else{var _0x2846ea=new _0x1929b0(_0x307412)[_0x1305e8(0x4ba)+_0x1305e8(0x45e)](_0xf06ea,_0x1305e8(0x41e));return _0x2846ea?_0x2846ea[_0x1305e8(0x170)]():0xc*-0x20a+-0x420+0x1c98;}}if(_0x3187ec&&!_0x12fb3e)_0x12fb3e=_0x1e6031[_0x1305e8(0x51f)](_0x238104,_0x3187ec,'ColyM'+'oveme'+'ntCon'+'troll'+'er');if(_0x3187ec&&!_0x3b871a)_0x3b871a=_0x1e6031[_0x1305e8(0x548)](_0x238104,_0x3187ec,_0x1e6031['xDrTn']);if(_0x20d30e&&!_0x125a63){if(_0x1e6031[_0x1305e8(0x28f)]==='QQmHv'){var _0x3c519c=_0x3b1958();_0x3c519c&&(_0x125a63=_0x3c519c,_0x5dd843['state']=!![]);}else _0x14d542&&_0x27533c[_0x1305e8(0x170)]()&&(_0xb2f7c1=_0x6a5d12['val'](),_0x34a947[_0x1305e8(0x196)]=!![]);}}else{_0x222b6f['gameL'+'oaded']=!!_0x2a5ded[_0x1305e8(0x3e3)+'Insta'+'nce'];try{var _0x248dc0=0x1f7c+-0x1*-0xbfd+-0x2b79;for(var _0x343500 in _0x44e413){if(_0x2c0ab1[_0x343500]&&_0x2092c2[_0x343500][_0x1305e8(0x331)+'ed'])_0x248dc0++;}_0x47b502['hooks'+'Ok']=_0x248dc0;}catch(_0x3ea8b0){}_0x1ff59e[_0x1305e8(0x1ab)+'rs']=_0x12e71d?_0x1e6031[_0x1305e8(0x55e)](_0x43bdda)[_0x1305e8(0x271)+'h']:0x1d8*0x11+-0x3*-0x1f2+0x1*-0x252e;}}function _0x5cf68d(){var _0x13c679=_0x168149;if(!_0x239265)return null;var _0x5d8613=_0x173412(_0x239265,0xd09+-0x1793+0x1*0xaae);if(!_0x5d8613||_0x5d8613['x']===-0x1db3+0x1382+-0x1*-0xa31&&_0x1e6031[_0x13c679(0x4fd)](_0x5d8613['y'],-0x269d+-0x1*0x19ed+0x2*0x2045)&&_0x5d8613['z']===0x3d*0x6e+-0x1775+-0x1*0x2c1)return null;return{'x':_0x5d8613['x'],'y':_0x5d8613['y']+(_0x1e6031[_0x13c679(0x307)](Number,_0x2d166c[_0x13c679(0x4d9)+'ight'])||0xc47+-0x362+-0x4*0x239+0.6000000000000001),'z':_0x5d8613['z']};}function _0x1a8e20(){var _0x4dc3f6=_0x168149,_0x44b2ff=(_0x4dc3f6(0x5ae)+_0x4dc3f6(0x240)+'3|9|8'+_0x4dc3f6(0x3ba))['split']('|'),_0xa3d8a0=-0x28*0x88+-0x1ba5+-0x1*-0x30e5;while(!![]){switch(_0x44b2ff[_0xa3d8a0++]){case'0':if(_0x36507f===-0xc*0x286+-0x139f+-0x16d*-0x23&&_0x5233a7===0x158*0x13+0x3*0x2a3+-0x1*0x2171&&_0x1e6031[_0x4dc3f6(0x589)](_0x200f76,0x1b7*0xe+0x17*0x103+0xd*-0x3a3)&&_0x1e6031['IoRIA'](_0x7060c5,0xf63+-0x22c4+0x1361))return null;continue;case'1':var _0x200f76=_0x5a9a0d(_0x5cbc41,0x1629+0x19d0+-0x2fd5),_0x7060c5=_0x5a9a0d(_0x5cbc41,-0x23dd+-0x1f88+0x438d);continue;case'2':if(_0x55fc2a<0x1*-0x18c7+-0x1*-0x937+0x53*0x30+0.9||_0x55fc2a>-0x1099+0x14e1*-0x1+-0x1*-0x257b+0.10000000000000009)return null;continue;case'3':var _0x4932c7={'x':(-0x10cf+0x1*-0x7c7+0x1898)*_0x1e6031[_0x4dc3f6(0x308)](_0x1e6031[_0x4dc3f6(0x3d1)](_0x36507f,_0x5233a7),_0x1e6031[_0x4dc3f6(0x353)](_0x7060c5,_0x200f76)),'y':0x19bf+-0x20a3+-0x5*-0x161-_0x1e6031[_0x4dc3f6(0x39c)](0x1*0x87e+0x196c+-0x21e8,_0x36507f*_0x36507f+_0x200f76*_0x200f76),'z':(-0x10f7+-0x1*-0xba+0x103f)*_0x1e6031[_0x4dc3f6(0x3b8)](_0x5233a7*_0x200f76,_0x7060c5*_0x36507f)};continue;case'4':return{'r':_0x4ad03f,'u':_0x4932c7,'f':_0xd2d6f9};case'5':var _0x4ad03f={'x':0x511+0x89c+-0xdac-_0x1e6031[_0x4dc3f6(0x3d1)](-0x2695+-0x625*0x2+0x32e1,_0x1e6031['Xsano'](_0x5233a7*_0x5233a7,_0x200f76*_0x200f76)),'y':_0x1e6031[_0x4dc3f6(0x3d1)](0x13*-0xe4+-0xef3*0x1+0x1*0x1fe1,_0x1e6031['TkVwi'](_0x36507f,_0x5233a7)+_0x7060c5*_0x200f76),'z':(0x215*0xd+-0x5b*-0x2+0x1bc5*-0x1)*_0x1e6031['JrLDt'](_0x36507f*_0x200f76,_0x7060c5*_0x5233a7)};continue;case'6':if(!_0x5cbc41)return null;continue;case'7':var _0x36507f=_0x5a9a0d(_0x5cbc41,-0x116a+0x1179+0xd),_0x5233a7=_0x1e6031[_0x4dc3f6(0x3df)](_0x5a9a0d,_0x5cbc41,-0x1167+0x1*0xcbd+0x4ca);continue;case'8':var _0x55fc2a=Math[_0x4dc3f6(0x262)](_0xd2d6f9['x'],_0xd2d6f9['y'],_0xd2d6f9['z']);continue;case'9':var _0xd2d6f9={'x':(-0x2b4+0x127c*0x1+-0xfc6)*(_0x36507f*_0x200f76+_0x7060c5*_0x5233a7),'y':_0x1e6031['TkVwi'](0x1d1e*-0x1+0x6b3+0x166d,_0x5233a7*_0x200f76-_0x1e6031[_0x4dc3f6(0x3d1)](_0x7060c5,_0x36507f)),'z':-0x1619*-0x1+-0x1*-0x1516+0x2*-0x1597-_0x1e6031[_0x4dc3f6(0x1c4)](0x3*0xbe7+-0x4a*0x57+-0x49*0x25,_0x1e6031[_0x4dc3f6(0x2c3)](_0x1e6031[_0x4dc3f6(0x353)](_0x36507f,_0x36507f),_0x1e6031['hxhSQ'](_0x5233a7,_0x5233a7)))};continue;}break;}}function _0x47569b(){var _0x120da9=_0x168149;if(_0x1e6031[_0x120da9(0x2af)](Number(_0x2d166c[_0x120da9(0x326)+_0x120da9(0x327)+'e']),-0x16db*0x1+-0x20c9+0x37a4))return Number(_0x2d166c['fovOv'+'errid'+'e']);if(_0x5332ff){var _0x45f544=_0x5a9a0d(_0x5332ff,0x928*-0x4+0x2*0x211+0x20b2);if(_0x45f544>0x166c+0x100a+0x4*-0x99b&&_0x1e6031['dRSOD'](_0x45f544,-0x2be+-0x1*-0x8ab+0x29d*-0x2))return _0x45f544;_0x45f544=_0x1e6031[_0x120da9(0x2fb)](_0x5a9a0d,_0x5332ff,0xf74+-0xb5b+-0x3f1);if(_0x1e6031[_0x120da9(0x152)](_0x45f544,-0x1*-0x1d2f+0x19*-0x10d+-0x2e0)&&_0x45f544<-0x1bda+-0xb8b+0x2818)return _0x45f544;}if(_0xb4a068&&_0x5dd843[_0x120da9(0x431)+_0x120da9(0x2d6)+'a'])try{if('GpcTW'!==_0x1e6031['jNvbV']){var _0xbae400=_0xb4a068[_0x120da9(0x2aa)]('Unity'+'Engin'+_0x120da9(0x5d7)+_0x120da9(0x1a9),_0x1e6031[_0x120da9(0x324)],[_0x5dd843[_0x120da9(0x431)+_0x120da9(0x2d6)+'a']]);if(typeof _0xbae400===_0x1e6031[_0x120da9(0x364)]&&_0x1e6031['xwbHE'](_0xbae400,0x90+-0x254*-0x1+-0x2da*0x1)&&_0xbae400<0x17cd+-0x2581+0xe67)return _0xbae400;}else _0x2a6703[_0x120da9(0x385)+'oil']=_0xacd27c,_0x2543f7();}catch(_0x209c20){}return-0x398+-0x226+0x5fa;}function _0x5511c6(_0x3c83d1,_0xb0dbb,_0x325245,_0x278797,_0x312714,_0x3685e5){var _0x326259=_0x168149;if(_0x1e6031['mciLV']==='Nwvzx'){var _0x50d7d8=_0x1e6031[_0x326259(0x316)][_0x326259(0x16e)]('|'),_0x4ce68d=0x9*-0x1af+-0x15c1+-0x24e8*-0x1;while(!![]){switch(_0x50d7d8[_0x4ce68d++]){case'0':var _0x57743c=_0x508114['w']/_0x508114['h'];continue;case'1':var _0xd86c11=_0x3c83d1-_0x312714['x'],_0x55b2bd=_0x1e6031['IsxFS'](_0xb0dbb,_0x312714['y']),_0x2f6b8e=_0x325245-_0x312714['z'];continue;case'2':if(_0x1e6031[_0x326259(0x5ab)](_0x4246a6,-0x76*0x22+-0x1*-0xaa+-0x22*-0x71+0.05))return null;continue;case'3':var _0x4246a6=_0x1e6031[_0x326259(0x4b9)](_0xd86c11,_0x278797['f']['x'])+_0x1e6031[_0x326259(0x3bc)](_0x55b2bd,_0x278797['f']['y'])+_0x2f6b8e*_0x278797['f']['z'];continue;case'4':return{'x':(_0x5afc4c*(0x3*0x1de+0x35e+-0x8f8+0.5)+(0xd7*-0x1a+-0x21ec+0x37c2+0.5))*_0x508114['w'],'y':(-0x12ee*-0x1+-0x826*0x1+-0xac7-(_0x48c05b*(0x8b1*0x3+0xb82+-0x3*0xc87+0.5)+(-0x2267*-0x1+-0xc1*-0x1f+-0x39c6+0.5)))*_0x508114['h'],'depth':_0x4246a6};case'5':if(_0x5afc4c<-(0x1*0x805+-0x2*-0xb3a+0x104*-0x1e+0.30000000000000004)||_0x5afc4c>-0x2c*0x3+-0x2537+0x25bc+0.30000000000000004||_0x48c05b<-(0x1*0x1642+0x7*-0x493+0x9c4+0.30000000000000004)||_0x1e6031['TyRCO'](_0x48c05b,0xa2*0x31+-0x109d+-0x4cc*0x3+0.30000000000000004))return null;continue;case'6':var _0xd6bb15=(0xa*0x24b+0x134b+-0x2a38)/Math[_0x326259(0x299)](_0x3685e5*Math['PI']/(0xb*-0x313+0x1e7a*0x1+-0x1*-0x40b)/(0x1*0x476+0x1*-0x1142+0xcce));continue;case'7':var _0x5afc4c=_0x1e6031[_0x326259(0x3f5)](_0x459247*_0xd6bb15,_0x4246a6*_0x57743c);continue;case'8':var _0x48c05b=_0x1d6143*_0xd6bb15/_0x4246a6;continue;case'9':var _0x459247=_0x1e6031['wEykZ'](_0xd86c11,_0x278797['r']['x'])+_0x55b2bd*_0x278797['r']['y']+_0x2f6b8e*_0x278797['r']['z'];continue;case'10':var _0x1d6143=_0x1e6031[_0x326259(0x20a)](_0xd86c11,_0x278797['u']['x'])+_0x55b2bd*_0x278797['u']['y']+_0x2f6b8e*_0x278797['u']['z'];continue;}break;}}else{var _0x1d7647=new _0x2dbedf(_0x29be96)[_0x326259(0x4ba)+_0x326259(0x45e)](_0x2028c6,_0x52591b);_0x9fccd3[_0x326259(0x27f)](_0xd4b4d8,_0x1d7647!==_0x56b1cf?_0x1d7647[_0x326259(0x170)]():null);}}var _0x2512c6={'ptr':0x0,'idx':-(0x471*-0x2+0x3b*0xd+-0x1d*-0x34)};function _0x4c1886(){var _0x5614d5=_0x168149;if(!_0x3b871a)return 0x114+-0x24b2+0x5e*0x61;var _0x4f54bc=_0x12a707(_0x3b871a,0xe*0x1d8+0x8*0x1e+-0x1a80),_0x2571a0=_0x3d4d80(_0x3b871a,-0x353+-0x1566+0x18f1);if(!_0x2571a0)return-0xe3c*0x1+0x869*-0x1+0xb*0x20f;var _0x4e65d7=_0x4e8ad6(_0x2571a0);if(_0x1e6031['gNkBy'](_0x4f54bc,0x1e41+0xc*-0x5a+-0x1f*0xd7)||_0x4f54bc>=_0x4e65d7)return-0x58*0x3b+0x1*-0x1582+0x14e5*0x2;var _0x4420f1=_0x3688a7(_0x2571a0,_0x4f54bc);return _0x2512c6[_0x5614d5(0x413)]=_0x4420f1,_0x4420f1;}_0x1e6031['cVcoG'](setInterval,()=>{var _0x52e582=_0x168149;if(!_0x3c56c0||!window['unity'+'Insta'+_0x52e582(0x47b)])return;_0x549fe4();var _0x34dd88=_0x1e6031[_0x52e582(0x582)](Number(_0x2d166c[_0x52e582(0x315)+_0x52e582(0x486)])||-0x1bd6+0x1d3b+-0x101,-0x2479+0x1*0xdf+0x2*0x11ff),_0x4c2eee=_0x1e6031[_0x52e582(0x3f5)](_0x1e6031[_0x52e582(0x539)](Number,_0x2d166c['jumpP'+'ct'])||-0x74b+-0x49*-0x50+-0xf21*0x1,0x156c+-0xb25+0x9e3*-0x1),_0x42f27b=(_0x1e6031['rAJut'](Number,_0x2d166c['gravi'+'tyPct'])||-0x98*-0x2d+0x1782+-0x18eb*0x2)/(0x64b+0x172e+-0x1d15);try{_0x12fb3e&&(_0x1e6031['eOKzF'](_0x34dd88,-0x1*0xf9+0xa13+0x89*-0x11)||_0x4c2eee!==0xd28+0xb44+-0x186b||_0x42f27b!==-0x1699+0x266d+-0xfd3)&&(_0x34dd88!==0x1693+0x1dad+-0xa73*0x5&&(_0x6ec823(_0x12fb3e,-0x2*0xe80+-0x172c+-0x1a62*-0x2,'f32',_0x34dd88),_0x1e6031['bntOT'](_0x6ec823,_0x12fb3e,0x2579+-0x903+0xde9*-0x2,'f32',_0x34dd88),_0x1e6031[_0x52e582(0x433)](_0x6ec823,_0x12fb3e,0x11a8+0x7c9*-0x1+-0x937,_0x52e582(0x471),_0x34dd88)),_0x1e6031[_0x52e582(0x49d)](_0x4c2eee,-0x5*-0x351+0x3ff*0x1+-0x1493*0x1)&&(_0x1e6031[_0x52e582(0x43d)](_0x6ec823,_0x12fb3e,-0x1*-0x23bb+-0x3e6+-0x1f21,_0x1e6031[_0x52e582(0x432)],_0x4c2eee),_0x6ec823(_0x12fb3e,-0x1*0x25e5+-0x158*-0x1+-0x2f*-0xcb,_0x1e6031['FwPAv'],_0x4c2eee)),_0x1e6031[_0x52e582(0x590)](_0x42f27b,0x1d76+0x1e04+-0x15*0x2d5)&&(_0x6ec823(_0x12fb3e,-0x10+-0x9ec+0xac0,'f32',_0x42f27b),_0x6ec823(_0x12fb3e,-0x1938+-0x391+-0x1d75*-0x1,_0x1e6031['FwPAv'],_0x42f27b)));}catch(_0x65cbec){}try{var _0x7a42a7=_0x4c1886();if(_0x7a42a7){_0x2d166c[_0x52e582(0x335)+'ead']&&(_0x38ad23(_0x7a42a7,-0x1a8a*0x1+-0x293*-0x5+-0x23*-0x69,_0x52e582(0x471),-0x8c4+0x18a*-0x14+0x1*0x278c),_0x38ad23(_0x7a42a7,0xf58+-0x2f6*0x4+-0x2bc,_0x52e582(0x471),-0x1*-0x520+-0x2401+-0x11*-0x1d1),_0x1e6031[_0x52e582(0x376)](_0x38ad23,_0x7a42a7,-0x1*0x1be7+0x26d0+-0xa21,_0x1e6031[_0x52e582(0x432)],-0x5a9+-0x4fe+0xaa7),_0x38ad23(_0x7a42a7,0x17fe+-0x2386+0xc48,'f32',-0x8f*0x3e+-0x12*-0x9+0x2200));if(_0x2d166c[_0x52e582(0x5a7)+'eExp']||_0x2d166c[_0x52e582(0x5a7)+_0x52e582(0x168)+'e']!==0x1b27+-0x3*-0x170+0x62d*-0x5){var _0x26329d=Math[_0x52e582(0x47e)](0x15f*0x2+0x10ff+-0x13bc,Number(_0x2d166c['damag'+_0x52e582(0x168)+'e'])||0xa27+0x1*-0x2295+0x1904);_0x38ad23(_0x7a42a7,0x1a6c+-0x1e7*0xa+0x242*-0x3,'f32',_0x26329d);}_0x2d166c[_0x52e582(0x599)+'mo']&&_0x1e6031['jyMht'](_0x38ad23,_0x7a42a7,-0x180f+0x973+0xf78,_0x1e6031[_0x52e582(0x158)],0xa46+0x1942*0x1+-0x1fa1),_0x2d166c[_0x52e582(0x1a7)+'Fire']&&(_0x1e6031[_0x52e582(0x415)]===_0x52e582(0x25a)?!_0x48660f&&_0x6e542d&&_0x370925[_0x52e582(0x170)]()&&(_0x984a9d=_0x26c1b8['val'](),_0x433ab2['linke'+'r']=!![]):(_0x1e6031['lcBQf'](_0x6ec823,_0x7a42a7,-0x2597+0x2*-0x43f+0x2ea5*0x1,_0x52e582(0x471),-0x3c4*0x3+-0x1*-0x84d+-0x2ff*-0x1+0.1),_0x1e6031[_0x52e582(0x376)](_0x38ad23,_0x7a42a7,0x1f85*0x1+-0x40b+-0x1aee,_0x1e6031['FwPAv'],-(0x2446+0x59b+-0x2*0x12fd))));}}catch(_0x5ed4ce){}},0xb42+0x214a*-0x1+0x16d0),setInterval(()=>{var _0x5ecb8=_0x168149,_0x4a3a25={'vbCUv':function(_0xe3aa99,_0x19bd9a,_0x3cce23,_0x5117d9,_0xc11a29){return _0xe3aa99(_0x19bd9a,_0x3cce23,_0x5117d9,_0xc11a29);},'tWfAJ':_0x5ecb8(0x471)};if('QoCjm'!==_0x5ecb8(0x3ff)){_0x5dd843[_0x5ecb8(0x3b4)+_0x5ecb8(0x214)]=!!window[_0x5ecb8(0x3e3)+'Insta'+_0x5ecb8(0x47b)];try{if(_0x5ecb8(0x461)!==_0x1e6031[_0x5ecb8(0x4e7)]){var _0x4a1dd0=0x654+0x4bc+-0xec*0xc;for(var _0x23ecb9 in _0x348948){if(_0x5ecb8(0x449)!==_0x5ecb8(0x4d2)){if(_0x348948[_0x23ecb9]&&_0x348948[_0x23ecb9]['appli'+'ed'])_0x4a1dd0++;}else _0x4a3a25[_0x5ecb8(0x19d)](_0x2fd307,_0x175af3,-0x14c7+0x60d+0x7a9*0x2,_0x4a3a25['tWfAJ'],_0x1863f1),_0x31b5af(_0x35885b,-0x77b+0x92*-0x29+0x1*0x1f81,_0x5ecb8(0x471),_0x295ea5),_0x19c59c(_0x42310e,-0x13f6+-0x1c52+0x30f0,'f32',_0xe566ea);}_0x5dd843[_0x5ecb8(0x56e)+'Ok']=_0x4a1dd0;}else return new _0x47f4ce(_0x2adb5f)['getCl'+_0x5ecb8(0x175)+'me']();}catch(_0x212250){}_0x5dd843['playe'+'rs']=_0x125a63?_0x381757()[_0x5ecb8(0x271)+'h']:0x17b7+-0x19a6+0x1ef;}else{if(!_0x1985f4)return;_0x3fe81f[_0x5ecb8(0x33f)][_0x5ecb8(0x32d)]=_0x1e6031['nzXXA'](_0x7b0574[_0x5ecb8(0x36e)](_0x92f263[_0x5ecb8(0x47e)](0xc89*0x1+0x109f+0x6*-0x4dc,_0x2a6cb2[_0x5ecb8(0x1e2)+'tX']-_0x247ef4[0x3ba+0x111d*0x1+-0x14d7]),_0x273bda['inner'+_0x5ecb8(0x580)]-(-0x3*0xdd+0x1c*0xd4+-0x13d1)),'px'),_0x3c792c[_0x5ecb8(0x33f)]['top']=_0x1e6031['YdMgO'](_0xa95d70[_0x5ecb8(0x36e)](_0x338c87['max'](0xd6a+-0x7cf*0x1+-0x59b,_0x5abe3a[_0x5ecb8(0x1e2)+'tY']-_0x2360ea[-0x3*-0x803+0x2322*0x1+-0x1*0x3b2a]),_0x1e6031[_0x5ecb8(0x308)](_0x571cec[_0x5ecb8(0x4ef)+'Heigh'+'t'],-0x1cf8+0x99*0x14+0x1168)),'px'),_0x1d122d['style']['right']=_0x1e6031['TGVdr'],_0xc3b749['style']['botto'+'m']=_0x1e6031['TGVdr'];}},-0x4*-0x353+0x14ab+0x5*-0x603);function _0x27776d(){var _0x5e139f=_0x168149,_0xefa54c={'diXFS':function(_0x223c77,_0x3e42f7,_0x22cff2,_0x16363e,_0xb3d9d8){return _0x223c77(_0x3e42f7,_0x22cff2,_0x16363e,_0xb3d9d8);},'vSSxq':_0x5e139f(0x471)};if(!_0x2d166c['esp']||!_0x2d166c[_0x5e139f(0x47a)])return;var _0x214e50=_0x1e6031[_0x5e139f(0x55e)](_0x1a8e20),_0x3fb959=_0x5cf68d();if(!_0x214e50||!_0x3fb959)return;var _0x4f2293=_0x1e6031[_0x5e139f(0x4dd)](_0x47569b),_0x3655cb=_0x381757(),_0xe53393=_0x3187ec?_0x1f7830(_0x1e6031['bEutG'](_0x3d4d80,_0x3187ec,0x1fc0+-0x123a+0x1*-0xd66),-0x2c0+0x1*-0x21ac+0x24ac):null;for(var _0x5f14bb=-0x243f+0xb5+0x238a;_0x5f14bb<_0x3655cb[_0x5e139f(0x271)+'h'];_0x5f14bb++){if(_0x5e139f(0x48b)==='QDnmZ'){var _0x5f2d7d=_0x3655cb[_0x5f14bb];if(!_0x5f2d7d['pos'])continue;if(_0xe53393&&_0x5f2d7d[_0x5e139f(0x1ab)+'rId']===_0xe53393)continue;var _0x159656=_0x1e6031[_0x5e139f(0x414)](_0x5511c6,_0x5f2d7d[_0x5e139f(0x52c)]['x'],_0x5f2d7d[_0x5e139f(0x52c)]['y'],_0x5f2d7d['pos']['z'],_0x214e50,_0x3fb959,_0x4f2293),_0x33675f=_0x5511c6(_0x5f2d7d['pos']['x'],_0x1e6031[_0x5e139f(0x2c3)](_0x5f2d7d['pos']['y'],Number(_0x2d166c['playe'+'rHeig'+'ht'])||0x380+-0x146*-0x5+-0x9dd+0.8),_0x5f2d7d['pos']['z'],_0x214e50,_0x3fb959,_0x4f2293);if(!_0x159656&&!_0x33675f)continue;var _0x47266a=_0x5f2d7d[_0x5e139f(0x489)]===-0x2*0x590+0x1067+-0x547?_0x5e139f(0x2fe)+_0x5e139f(0x2a8)+'3,106'+_0x5e139f(0x379):'rgba('+'255,1'+'10,11'+'6,.95'+')',_0x44811f=Number(_0x2d166c['scale'])||-0x1*0x183e+0x151*-0x1a+0x3a79;if(_0x159656&&_0x33675f){if(_0x1e6031[_0x5e139f(0x502)](_0x1e6031[_0x5e139f(0x2b4)],'odAOS')){var _0x2f999f=Math[_0x5e139f(0x36e)](_0x159656['y'],_0x33675f['y']),_0x5ae6dd=Math[_0x5e139f(0x47e)](-0x2220+-0x1*0x1b+0x1*0x223f,_0x1e6031[_0x5e139f(0x3d1)](Math['abs'](_0x159656['y']-_0x33675f['y']),_0x44811f)),_0x3f566f=Math['max'](0x1e7a+-0x1c9d+-0x1d7,_0x5ae6dd*(-0x1441+-0x4a3*-0x5+-0x2ee+0.45)*_0x44811f);if(team)_0x496f9b['strok'+_0x5e139f(0x2d5)+'e']=_0x47266a;else _0x496f9b['strok'+'eStyl'+'e']='rgba('+_0x5e139f(0x188)+'79,19'+'8,.9)';_0x496f9b['lineW'+'idth']=0x7*0x3c6+-0x13*-0x6a+0x2246*-0x1,_0x496f9b[_0x5e139f(0x4d5)+_0x5e139f(0x2f3)](_0x159656['x']-_0x1e6031['fMtTU'](_0x3f566f,0x3*-0x3c5+0x5*0x611+-0x1304*0x1),_0x2f999f,_0x3f566f,_0x5ae6dd);if(health&&(_0x5f2d7d[_0x5e139f(0x210)+'h']>-0x2208+0x2299*-0x1+0x44a1||_0x1e6031[_0x5e139f(0x462)](_0x5f2d7d[_0x5e139f(0x2b0)+'d'],0x1fbe+-0x4*-0x39+-0x1051*0x2))){var _0x1d4595=Math[_0x5e139f(0x47e)](-0x52a*0x1+-0x3e*0x2a+0xf56,Math[_0x5e139f(0x36e)](0xbee+0x2*0x592+-0x16ae,_0x1e6031[_0x5e139f(0x2c3)](_0x5f2d7d['healt'+'h'],_0x5f2d7d['shiel'+'d']))),_0x58d324=_0x3f566f*_0x1e6031[_0x5e139f(0x581)](_0x1d4595,-0x1410+-0x3f*0x5e+-0x15cb*-0x2);_0x496f9b['fillS'+'tyle']=_0x1e6031['kccWD'],_0x496f9b['fillR'+'ect'](_0x1e6031['EutZW'](_0x159656['x'],_0x3f566f/(0x1d2*0x8+-0x2*0x1bb+0x238*-0x5)),_0x2f999f-(-0xbc7+0x3b0*0x7+0x11*-0xd3),_0x58d324,0x4be+0xd3*-0x24+0x3e*0x67),_0x496f9b[_0x5e139f(0x4d5)+'eStyl'+'e']='rgba('+_0x5e139f(0x396)+',.5)',_0x496f9b['lineW'+'idth']=0x931+-0x194f+0x101f,_0x496f9b['strok'+'eRect'](_0x159656['x']-_0x1e6031[_0x5e139f(0x31c)](_0x3f566f,0x15a4+0x24dd+-0x3a7f*0x1),_0x2f999f-(-0x24e+0x21ad+0x141*-0x19),_0x3f566f,0xd8a+0x15a4+-0x232a);}if(names&&_0x5f2d7d['nickn'+_0x5e139f(0x242)]){if('ORhoq'===_0x1e6031['jPTyO'])_0x496f9b[_0x5e139f(0x30d)+'tyle']=_0x1e6031['VDtTE'],_0x496f9b[_0x5e139f(0x4b8)]=_0x1e6031[_0x5e139f(0x1ea)],_0x496f9b[_0x5e139f(0x342)+_0x5e139f(0x4ea)]=_0x5e139f(0x39a)+'r',_0x496f9b['fillT'+_0x5e139f(0x491)](_0x5f2d7d[_0x5e139f(0x1f2)+_0x5e139f(0x242)],_0x159656['x'],_0x1e6031[_0x5e139f(0x459)](_0x2f999f,-0x11a9+0x580+0xc33));else return{'entries':_0x2c7fac,'count':_0x4e671e,'shift':_0x2363a9};}if(lines){var _0x48e54e=_0x1e6031[_0x5e139f(0x50e)][_0x5e139f(0x16e)]('|'),_0x52b73a=0x8*0x38e+0x2*-0xc65+-0x3a6;while(!![]){switch(_0x48e54e[_0x52b73a++]){case'0':_0x496f9b['setLi'+_0x5e139f(0x15a)+'h']([0x6*0xef+0x1a7d+-0x1*0x2012,0x11b*-0x1+0x333+-0x213]);continue;case'1':_0x496f9b[_0x5e139f(0x28a)+_0x5e139f(0x423)]=0x1642+-0x99c+-0xca5;continue;case'2':_0x496f9b['strok'+'eStyl'+'e']=_0x47266a;continue;case'3':_0x496f9b[_0x5e139f(0x3c5)+'Path']();continue;case'4':_0x496f9b[_0x5e139f(0x2ce)+'o'](_0x508114['w']/(0x2480+0x19f3+-0x3e71),_0x508114['h']);continue;case'5':_0x496f9b[_0x5e139f(0x3d5)+'neDas'+'h']([]);continue;case'6':_0x496f9b[_0x5e139f(0x4d5)+'e']();continue;case'7':_0x496f9b[_0x5e139f(0x457)+'o'](_0x159656['x'],_0x2f999f);continue;}break;}}}else{var _0x35fcbe=_0x3c1ad9[_0x5e139f(0x47e)](-0x21f7+-0xa0*0xa+0x2838,_0x5736aa(_0x2795b5[_0x5e139f(0x5a7)+_0x5e139f(0x168)+'e'])||-0x13e5*-0x1+-0xfa7+-0x3a8);_0xefa54c[_0x5e139f(0x2bb)](_0x486ee1,_0x83008d,-0xd*0x2dd+-0x9dc+0x2fb5,_0xefa54c['vSSxq'],_0x35fcbe);}}}else _0x37164d=_0x19ae26[_0x5e139f(0x170)](),_0x5199fa[_0x5e139f(0x196)]=!![];}}function _0x455be9(){var _0x3b9b8f=_0x168149;requestAnimationFrame(_0x455be9),_0x15bc1b(),_0x496f9b['clear'+_0x3b9b8f(0x153)](0x37*-0x1f+-0x1*-0x13ae+-0xb*0x12f,0x41*-0x1+0xfe4+-0xfa3,_0x508114['w'],_0x508114['h']);if(!_0x2d166c[_0x3b9b8f(0x1af)+'ode'])_0x27776d();}var _0x3b3435=document['creat'+_0x168149(0x473)+'ent'](_0x1e6031[_0x168149(0x1f5)]);_0x3b3435['id']=_0x168149(0x523)+_0x168149(0x2ba)+_0x168149(0x258),_0x3b3435['style']['cssTe'+'xt']=_0x1e6031[_0x168149(0x18e)];var _0x3bb754=_0x3b3435[_0x168149(0x25f)+'hShad'+'ow']({'mode':_0x1e6031[_0x168149(0x4cc)]});document[_0x168149(0x36d)]['appen'+_0x168149(0x20b)+'d'](_0x3b3435);var _0x294c5d=![],_0x22cb2b={};try{if(_0x1e6031[_0x168149(0x268)](_0x1e6031['TOHaH'],_0x1e6031[_0x168149(0x4b1)]))_0x22cb2b=JSON[_0x168149(0x34a)](localStorage['getIt'+'em'](_0x1e6031[_0x168149(0x591)])||'{}');else try{var _0x488a7c=new _0x10c6fe(_0x18b998)[_0x168149(0x4ba)+_0x168149(0x45e)](_0x28083e,'u8');return _0x488a7c?_0x488a7c['val']():-0x1*-0x2692+0x2116*-0x1+0xd*-0x6c;}catch(_0x2742ba){return 0x1c68+-0x1b*-0xfb+-0x619*0x9;}}catch(_0x204f44){}function _0x4ff8a7(_0x2f7fe9){var _0x56ebc1=_0x168149,_0x37d5c5=document['creat'+'eElem'+_0x56ebc1(0x37f)]('span');return _0x37d5c5['setAt'+_0x56ebc1(0x4f7)+'te'](_0x56ebc1(0x227)+_0x56ebc1(0x46f)+'n',_0x56ebc1(0x4c8)),_0x37d5c5['inner'+'HTML']=_0x56ebc1(0x2e4)+'viewB'+_0x56ebc1(0x1df)+_0x56ebc1(0x35f)+'\x2024\x22>'+_0x2f7fe9+(_0x56ebc1(0x5bc)+'>'),_0x37d5c5;}function _0x1cccac(_0x2a4302,_0x26678b){var _0x285cdd=_0x168149,_0x75771a={'zCkVd':'f32'},_0x4b2039=document[_0x285cdd(0x46c)+'eElem'+_0x285cdd(0x37f)]('butto'+'n');return _0x4b2039[_0x285cdd(0x568)]=_0x285cdd(0x4bb)+'n',_0x4b2039[_0x285cdd(0x42a)+'Name']=_0x1e6031['YBeNa'],_0x4b2039['setAt'+_0x285cdd(0x4f7)+'te'](_0x1e6031[_0x285cdd(0x54b)],_0x285cdd(0x53b)+'h'),_0x4b2039['setAt'+'tribu'+'te'](_0x1e6031[_0x285cdd(0x456)],_0x1e6031[_0x285cdd(0x4fe)](String,!!_0x2a4302)),_0x4b2039[_0x285cdd(0x1bb)+'ck']=_0x4e9f46=>{var _0x3f0876=_0x285cdd;if('gUjXK'!==_0x1e6031[_0x3f0876(0x37d)]){var _0x355539=new _0x515ada(_0x3e2440)[_0x3f0876(0x4ba)+_0x3f0876(0x45e)](_0x5a7540,_0x75771a['zCkVd']);return _0x355539?_0x355539[_0x3f0876(0x170)]():-0x25a4+-0x1375+-0x137*-0x2f;}else{_0x4e9f46[_0x3f0876(0x4ff)+_0x3f0876(0x592)+_0x3f0876(0x4bf)]();var _0xd12f1e=_0x4b2039[_0x3f0876(0x21e)+_0x3f0876(0x4f7)+'te'](_0x3f0876(0x227)+'check'+'ed')!==_0x1e6031[_0x3f0876(0x1a4)];_0x4b2039['setAt'+_0x3f0876(0x4f7)+'te'](_0x3f0876(0x227)+_0x3f0876(0x583)+'ed',_0x1e6031[_0x3f0876(0x557)](String,_0xd12f1e)),_0x1e6031[_0x3f0876(0x307)](_0x26678b,_0xd12f1e);}},_0x4b2039;}function _0x556078(_0x1ea93e,_0x4d1483,_0x40bb95,_0x573570,_0x32d701){var _0x178e5b=_0x168149,_0x2ea37b=document[_0x178e5b(0x46c)+_0x178e5b(0x473)+_0x178e5b(0x37f)]('div');_0x2ea37b['class'+_0x178e5b(0x155)]=_0x1e6031[_0x178e5b(0x31f)];var _0x51810a=document[_0x178e5b(0x46c)+_0x178e5b(0x473)+_0x178e5b(0x37f)](_0x178e5b(0x311));_0x51810a['type']=_0x178e5b(0x560),_0x51810a['class'+'Name']=_0x178e5b(0x4c5)+_0x178e5b(0x3b0),_0x51810a[_0x178e5b(0x36e)]=_0x4d1483,_0x51810a['max']=_0x40bb95,_0x51810a[_0x178e5b(0x4a6)]=_0x573570,_0x51810a['value']=_0x1ea93e;var _0x29f5db=document['creat'+_0x178e5b(0x473)+_0x178e5b(0x37f)]('span');return _0x29f5db['class'+'Name']=_0x1e6031['PGflr'],_0x29f5db[_0x178e5b(0x410)+_0x178e5b(0x570)+'t']=Number(_0x1ea93e)[_0x178e5b(0x465)+'ed'](-0x168c+-0x49*0x4e+0x2ccc*0x1)[_0x178e5b(0x3a0)+'ce'](/\.?0+$/,''),_0x51810a['oninp'+'ut']=()=>{var _0x16189b=_0x178e5b;_0x29f5db[_0x16189b(0x410)+'onten'+'t']=_0x1e6031[_0x16189b(0x4c6)](Number,_0x51810a['value'])['toFix'+'ed'](0x44c+-0x90b+-0x1*-0x4c1)[_0x16189b(0x3a0)+'ce'](/\.?0+$/,''),_0x2ea37b['style'][_0x16189b(0x1b6)+_0x16189b(0x1ad)+'y'](_0x1e6031[_0x16189b(0x3c0)],_0x1e6031[_0x16189b(0x2c8)]((_0x51810a[_0x16189b(0x263)]-_0x4d1483)/(_0x40bb95-_0x4d1483),-0x1e92+0x4*-0x65b+0x2*0x1c31)+'%'),_0x32d701(Number(_0x51810a[_0x16189b(0x263)]));},_0x2ea37b[_0x178e5b(0x33f)]['setPr'+_0x178e5b(0x1ad)+'y']('--p',_0x1e6031[_0x178e5b(0x459)](_0x1ea93e,_0x4d1483)/_0x1e6031[_0x178e5b(0x459)](_0x40bb95,_0x4d1483)*(0x17d1+0x27*0x45+-0x21f0)+'%'),_0x2ea37b['appen'+'d'](_0x51810a,_0x29f5db),_0x2ea37b;}function _0xaec4d1(_0x4b88b9,_0x19084b){var _0x5c5a5e=_0x168149,_0x49fc28=_0x1e6031['KsJdR'][_0x5c5a5e(0x16e)]('|'),_0x482798=-0x1f2e+0x1c35+0x1*0x2f9;while(!![]){switch(_0x49fc28[_0x482798++]){case'0':_0x3f9f9e['class'+_0x5c5a5e(0x155)]=_0x5c5a5e(0x466)+_0x5c5a5e(0x1c6);continue;case'1':_0x1bf9dc[_0x5c5a5e(0x42a)+_0x5c5a5e(0x155)]=_0x1e6031['uBYFE'];continue;case'2':_0x1bf9dc[_0x5c5a5e(0x3c7)+'d'](_0x3f9f9e,_0x19084b);continue;case'3':return _0x1bf9dc;case'4':var _0x1bf9dc=document[_0x5c5a5e(0x46c)+_0x5c5a5e(0x473)+'ent']('div');continue;case'5':_0x3f9f9e[_0x5c5a5e(0x410)+_0x5c5a5e(0x570)+'t']=_0x4b88b9;continue;case'6':var _0x3f9f9e=document[_0x5c5a5e(0x46c)+'eElem'+_0x5c5a5e(0x37f)](_0x1e6031[_0x5c5a5e(0x4f9)]);continue;}break;}}function _0x292323(_0x5bdc62,_0x3856fd,_0x6a7308,_0xa6c77c){var _0x3f1510=_0x168149,_0x3a053c={'KLFTL':_0x1e6031[_0x3f1510(0x402)]},_0x23c88c=document['creat'+_0x3f1510(0x473)+_0x3f1510(0x37f)](_0x3f1510(0x408));_0x23c88c[_0x3f1510(0x42a)+_0x3f1510(0x155)]=_0x1e6031['BUxBN']+(_0x3856fd?_0x3f1510(0x595):'');var _0x3285aa=document[_0x3f1510(0x46c)+'eElem'+'ent'](_0x1e6031[_0x3f1510(0x1f5)]);_0x3285aa[_0x3f1510(0x42a)+_0x3f1510(0x155)]=_0x1e6031['LKTLZ'];var _0x1a688f=document['creat'+_0x3f1510(0x473)+'ent'](_0x1e6031['PgLDg']);_0x1a688f['class'+'Name']=_0x1e6031[_0x3f1510(0x572)];var _0x4f866a=document[_0x3f1510(0x46c)+'eElem'+'ent'](_0x1e6031['FajdP']);_0x4f866a[_0x3f1510(0x410)+_0x3f1510(0x570)+'t']=_0x5bdc62,_0x1a688f[_0x3f1510(0x3c7)+_0x3f1510(0x20b)+'d'](_0x4f866a);if(_0x6a7308){if(_0x1e6031[_0x3f1510(0x1f3)]===_0x1e6031[_0x3f1510(0x1f3)]){var _0x249cd5=_0x1cccac(_0x3856fd,_0x7a2e7e=>{var _0x47b38e=_0x3f1510;_0x47b38e(0x4f5)==='CBTat'?(_0x23c88c[_0x47b38e(0x42a)+_0x47b38e(0x3b6)]['toggl'+'e']('on',_0x7a2e7e),_0x6a7308(_0x7a2e7e)):_0x2a2925&&_0x2a0c72['val']()&&!_0x4398e2&&(_0x1a2dbe=_0x2c2d6c['val']());});_0x3285aa[_0x3f1510(0x3c7)+'d'](_0x1a688f,_0x249cd5);}else{var _0x5d3ca6=new _0x10209b(_0x4558e9)[_0x3f1510(0x4ba)+_0x3f1510(0x45e)](_0x54c70e,_0x3a053c[_0x3f1510(0x477)]);return _0x5d3ca6?_0x5d3ca6[_0x3f1510(0x170)]():-0x236b+-0x73b+0x6a*0x67;}}else _0x3285aa[_0x3f1510(0x3c7)+_0x3f1510(0x20b)+'d'](_0x1a688f);_0x23c88c[_0x3f1510(0x3c7)+'dChil'+'d'](_0x3285aa);if(_0xa6c77c&&_0xa6c77c[_0x3f1510(0x271)+'h']){var _0xa4ccc5=document['creat'+_0x3f1510(0x473)+_0x3f1510(0x37f)](_0x1e6031[_0x3f1510(0x1f5)]);_0xa4ccc5['class'+'Name']=_0x1e6031['fUlpG'];for(var _0x4ecef4 of _0xa6c77c)_0xa4ccc5[_0x3f1510(0x3c7)+_0x3f1510(0x20b)+'d'](_0x4ecef4);_0x23c88c[_0x3f1510(0x3c7)+_0x3f1510(0x20b)+'d'](_0xa4ccc5);}return _0x23c88c;}function _0xc47d15(_0x256433){var _0x163d79=_0x168149;if(_0x1e6031[_0x163d79(0x266)]==='pUdUM'){var _0x233b6e=document[_0x163d79(0x46c)+_0x163d79(0x473)+_0x163d79(0x37f)](_0x163d79(0x408));return _0x233b6e[_0x163d79(0x42a)+_0x163d79(0x155)]=_0x1e6031['uBYFE'],_0x233b6e[_0x163d79(0x33f)][_0x163d79(0x564)+'xt']=_0x1e6031['DdFFg'],_0x233b6e[_0x163d79(0x410)+_0x163d79(0x570)+'t']=_0x256433,_0x233b6e;}else{var _0x59545b=_0x4abde7[_0x117c76];if(_0x59545b)try{_0x59545b[_0x163d79(0x212)+'ed']=!!_0x59934d;}catch(_0x3231dd){}}}function _0x34d6d1(){var _0x5d0310=_0x168149,_0x4baf6f={'hauYs':function(_0x20ffed,_0x5546ed,_0x2d39ed,_0x1b363c,_0x1bc626){return _0x20ffed(_0x5546ed,_0x2d39ed,_0x1b363c,_0x1bc626);},'BRFEk':function(_0x5cfc25,_0x3d5c03,_0x20f730,_0x175dd6,_0x40001f){return _0x5cfc25(_0x3d5c03,_0x20f730,_0x175dd6,_0x40001f);},'GHrdh':function(_0x25ae65,_0x29a8e1){var _0x423392=_0x387f;return _0x1e6031[_0x423392(0x589)](_0x25ae65,_0x29a8e1);},'vHmwV':function(_0xa81188,_0x15bbfe){return _0x1e6031['VbigG'](_0xa81188,_0x15bbfe);},'tYIyY':function(_0x18998f){return _0x18998f();},'pGAbx':_0x1e6031['czYyj'],'XYatb':function(_0x8b7c60){return _0x8b7c60();},'jqmzm':function(_0x12da26){var _0x2ea55b=_0x387f;return _0x1e6031[_0x2ea55b(0x344)](_0x12da26);},'qfpqN':function(_0x52cc19,_0x4a2cf7,_0x5c139d){return _0x52cc19(_0x4a2cf7,_0x5c139d);},'JujIT':'vVjQx','oXlve':function(_0x36c82c,_0x5c139f){return _0x36c82c===_0x5c139f;},'dyPsm':_0x5d0310(0x49c)+_0x5d0310(0x48e)+_0x5d0310(0x50b)+'hema','Dyfdh':'Boxes','LxZFm':function(_0x3c0b69,_0x450373,_0x6c04ef){return _0x3c0b69(_0x450373,_0x6c04ef);},'sSgJm':_0x5d0310(0x522)+'h','HfkvO':_0x5d0310(0x336)+'t','KJLpi':function(_0x4d3700,_0x47aad8,_0x1c7595){return _0x4d3700(_0x47aad8,_0x1c7595);},'sgVKC':'No\x20re'+_0x5d0310(0x540)+_0x5d0310(0x16a)+')','gzjub':_0x1e6031[_0x5d0310(0x3f3)],'iXwbA':function(_0x335519,_0x5b4c98,_0x1e43b6,_0x2f6f58,_0x3c30c0,_0x6bf7dd){return _0x335519(_0x5b4c98,_0x1e43b6,_0x2f6f58,_0x3c30c0,_0x6bf7dd);},'QtPCZ':function(_0x9f30cb,_0x523873,_0x1f10bb){var _0x1a39a0=_0x5d0310;return _0x1e6031[_0x1a39a0(0x543)](_0x9f30cb,_0x523873,_0x1f10bb);},'ojnho':function(_0x1255d4,_0x16542b,_0x3194dc){return _0x1255d4(_0x16542b,_0x3194dc);},'BwOGL':function(_0x168292,_0x13ee70,_0x3dcb8e,_0x37b2bf,_0x3713c6){return _0x168292(_0x13ee70,_0x3dcb8e,_0x37b2bf,_0x3713c6);},'PXrwC':_0x5d0310(0x526)+_0x5d0310(0x418)+'n','rEMqt':function(_0x4d7467,_0x299f8f,_0x4f10ee){return _0x4d7467(_0x299f8f,_0x4f10ee);},'sDwJK':function(_0x97e1a2,_0x2344f0,_0x59d2b6,_0x22969e,_0x1911e8){return _0x97e1a2(_0x2344f0,_0x59d2b6,_0x22969e,_0x1911e8);},'dsTrV':_0x5d0310(0x532)+'\x20loca'+_0x5d0310(0x517)+'ture','zzOGU':function(_0x191295,_0x576e99){return _0x191295(_0x576e99);},'gpzNt':function(_0x3b1602,_0x175870){return _0x3b1602+_0x175870;},'fjloj':function(_0x4558aa,_0x5eb7a7){return _0x4558aa+_0x5eb7a7;},'uIDLi':_0x5d0310(0x232)+'\x20','XuCIh':_0x1e6031[_0x5d0310(0x252)],'AEOWS':function(_0xa2f782,_0x800144){var _0x4fd889=_0x5d0310;return _0x1e6031[_0x4fd889(0x320)](_0xa2f782,_0x800144);}},_0x124068=document['creat'+_0x5d0310(0x473)+_0x5d0310(0x37f)]('div');_0x124068['class'+'Name']=_0x1e6031[_0x5d0310(0x3f2)];var _0x2f61f2=document['creat'+'eElem'+_0x5d0310(0x37f)](_0x1e6031[_0x5d0310(0x3bd)]);_0x2f61f2[_0x5d0310(0x42a)+_0x5d0310(0x155)]='mn-si'+'de';var _0x3636d5=document['creat'+'eElem'+_0x5d0310(0x37f)](_0x1e6031['PgLDg']);_0x3636d5[_0x5d0310(0x42a)+_0x5d0310(0x155)]=_0x5d0310(0x3fe)+'go',_0x3636d5['inner'+'HTML']='<svg\x20'+_0x5d0310(0x21c)+_0x5d0310(0x1df)+_0x5d0310(0x35f)+'\x2024\x22>'+_0x5d0310(0x1fd)+'><lin'+_0x5d0310(0x200)+_0x5d0310(0x1c3)+_0x5d0310(0x2d7)+_0x5d0310(0x4c1)+'rad\x22\x20'+_0x5d0310(0x5b3)+'\x22\x20y1='+_0x5d0310(0x43e)+'2=\x2220'+_0x5d0310(0x4cf)+_0x5d0310(0x2ac)+'gradi'+'entUn'+'its=\x22'+_0x5d0310(0x26e)+'paceO'+'nUse\x22'+'><sto'+'p\x20off'+'set=\x22'+_0x5d0310(0x378)+_0x5d0310(0x4f1)+'lor=\x22'+_0x5d0310(0x519)+_0x5d0310(0x157)+'<stop'+'\x20offs'+_0x5d0310(0x391)+'.45\x22\x20'+_0x5d0310(0x1aa)+_0x5d0310(0x287)+_0x5d0310(0x5c3)+'b3c6\x22'+_0x5d0310(0x23a)+_0x5d0310(0x4e1)+_0x5d0310(0x26a)+_0x5d0310(0x2de)+_0x5d0310(0x343)+_0x5d0310(0x390)+_0x5d0310(0x443)+_0x5d0310(0x5c8)+_0x5d0310(0x1a2)+_0x5d0310(0x513)+'radie'+_0x5d0310(0x59e)+_0x5d0310(0x1c8)+'<path'+'\x20d=\x22M'+_0x5d0310(0x49f)+'c-1.5'+_0x5d0310(0x3ed)+'4-4.5'+_0x5d0310(0x360)+'5\x200-2'+'.5\x201.'+_0x5d0310(0x512)+_0x5d0310(0x32f)+'5s4\x202'+_0x5d0310(0x15e)+'5c0\x203'+'-2.5\x20'+_0x5d0310(0x1ba)+_0x5d0310(0x15d)+'fill='+'\x22none'+'\x22\x20str'+_0x5d0310(0x29d)+_0x5d0310(0x384)+'sk-gr'+'ad)\x22\x20'+'strok'+'e-wid'+_0x5d0310(0x575)+'\x22\x20str'+_0x5d0310(0x283)+'ineca'+_0x5d0310(0x3c3)+'und\x22\x20'+'strok'+'e-lin'+'ejoin'+_0x5d0310(0x282)+'nd\x22/>'+_0x5d0310(0x46a)+_0x5d0310(0x229)+'12\x203v'+_0x5d0310(0x482)+_0x5d0310(0x2e1)+'5\x200-2'+'.5\x201-'+_0x5d0310(0x1d2)+_0x5d0310(0x21b)+_0x5d0310(0x537)+_0x5d0310(0x3e8)+'.5\x201\x20'+'2.5\x202'+_0x5d0310(0x3c8)+'ill=\x22'+_0x5d0310(0x56c)+'\x20stro'+_0x5d0310(0x243)+_0x5d0310(0x249)+_0x5d0310(0x2a9)+'d)\x22\x20s'+_0x5d0310(0x4bc)+_0x5d0310(0x18f)+_0x5d0310(0x329)+_0x5d0310(0x2a4)+'roke-'+_0x5d0310(0x22b)+'ap=\x22r'+'ound\x22'+_0x5d0310(0x4d0)+_0x5d0310(0x20e)+_0x5d0310(0x444)+_0x5d0310(0x4e2)+'=\x2210\x22'+_0x5d0310(0x420)+'.5\x22\x20f'+_0x5d0310(0x469)+_0x5d0310(0x20d)+'9d\x22/>'+'</svg'+'>',_0x2f61f2[_0x5d0310(0x3c7)+'dChil'+'d'](_0x3636d5);var _0x17c3c8=document['creat'+'eElem'+_0x5d0310(0x37f)](_0x5d0310(0x408));_0x17c3c8[_0x5d0310(0x42a)+_0x5d0310(0x155)]=_0x1e6031['azJZE'];var _0x1d1c07=document[_0x5d0310(0x46c)+_0x5d0310(0x473)+'ent'](_0x1e6031[_0x5d0310(0x4b3)]);_0x1d1c07[_0x5d0310(0x42a)+_0x5d0310(0x155)]=_0x1e6031[_0x5d0310(0x341)];var _0x7c07e8=document['creat'+_0x5d0310(0x473)+'ent']('h2');_0x7c07e8['class'+'Name']=_0x1e6031[_0x5d0310(0x5c1)],_0x7c07e8[_0x5d0310(0x410)+_0x5d0310(0x570)+'t']=_0x1e6031[_0x5d0310(0x4d4)];var _0x29601e=document[_0x5d0310(0x46c)+_0x5d0310(0x473)+_0x5d0310(0x37f)]('butto'+'n');_0x29601e[_0x5d0310(0x568)]=_0x1e6031['UVvTR'],_0x29601e[_0x5d0310(0x42a)+_0x5d0310(0x155)]=_0x1e6031[_0x5d0310(0x33a)],_0x29601e[_0x5d0310(0x4ef)+_0x5d0310(0x2c6)]='<svg\x20'+_0x5d0310(0x21c)+_0x5d0310(0x1df)+_0x5d0310(0x35f)+'\x2024\x22>'+_0x5d0310(0x46a)+'\x20d=\x22M'+_0x5d0310(0x1a6)+_0x5d0310(0x400)+_0x5d0310(0x4df)+'6\x2018\x22'+_0x5d0310(0x1ed)+_0x5d0310(0x3f0),_0x29601e[_0x5d0310(0x1bb)+'ck']=()=>_0x4b5b86(![]),_0x1d1c07[_0x5d0310(0x3c7)+'d'](_0x7c07e8,_0x29601e);var _0x52d807=null;_0x1d1c07['addEv'+_0x5d0310(0x348)+'stene'+'r'](_0x5d0310(0x4e0)+_0x5d0310(0x3e9)+'n',_0x25e0b2=>{var _0x81f440=_0x5d0310;if(_0x25e0b2[_0x81f440(0x4f2)+'t'][_0x81f440(0x3a1)+'st'](_0x1e6031[_0x81f440(0x27d)]))return;var _0x384401=_0x124068[_0x81f440(0x3f7)+_0x81f440(0x2bc)+'gClie'+'ntRec'+'t']();_0x52d807=[_0x25e0b2[_0x81f440(0x1e2)+'tX']-_0x384401['left'],_0x25e0b2[_0x81f440(0x1e2)+'tY']-_0x384401[_0x81f440(0x2f1)]],_0x1d1c07[_0x81f440(0x3a5)+_0x81f440(0x1e7)+_0x81f440(0x56a)+'re'](_0x25e0b2[_0x81f440(0x4e0)+'erId']),_0x124068[_0x81f440(0x42a)+_0x81f440(0x3b6)]['add']('sk-dr'+_0x81f440(0x4e4)+'g');}),_0x1d1c07['addEv'+_0x5d0310(0x348)+'stene'+'r'](_0x5d0310(0x4e0)+_0x5d0310(0x1e0)+'e',_0x4d6a0d=>{var _0x372509=_0x5d0310;if(!_0x52d807)return;_0x124068['style'][_0x372509(0x32d)]=Math['min'](Math[_0x372509(0x47e)](0x1265+-0xb*0x1a9+-0x22,_0x1e6031[_0x372509(0x454)](_0x4d6a0d[_0x372509(0x1e2)+'tX'],_0x52d807[-0xb4a+-0x249b*-0x1+-0x1951])),_0x1e6031[_0x372509(0x1e1)](window[_0x372509(0x4ef)+_0x372509(0x580)],0x348+-0x1ed5+-0x1*-0x1c55))+'px',_0x124068[_0x372509(0x33f)][_0x372509(0x2f1)]=Math[_0x372509(0x36e)](Math[_0x372509(0x47e)](0x1*0x21f+0x661*-0x3+-0x5ac*-0x3,_0x4d6a0d['clien'+'tY']-_0x52d807[-0x910+-0x18ca+0x21db]),_0x1e6031[_0x372509(0x5af)](window[_0x372509(0x4ef)+_0x372509(0x15c)+'t'],-0xa3*0xf+0xd7f*0x1+-0x38e))+'px',_0x124068['style']['right']=_0x1e6031[_0x372509(0x1b0)],_0x124068[_0x372509(0x33f)]['botto'+'m']='auto';});var _0x20bc6=()=>{var _0x1b88a6=_0x5d0310;if(_0x1e6031['syFHr']!==_0x1e6031[_0x1b88a6(0x5ca)]){if(!_0x52d807)return;_0x52d807=null,_0x124068['class'+'List'][_0x1b88a6(0x4f6)+'e'](_0x1e6031[_0x1b88a6(0x25c)]);var _0x548ee1=_0x124068['getBo'+_0x1b88a6(0x2bc)+'gClie'+_0x1b88a6(0x318)+'t']();_0x22cb2b['x']=_0x548ee1['left'],_0x22cb2b['y']=_0x548ee1['top'],_0x1e6031['VPnJI'](_0xbc968c);}else _0x4baf6f[_0x1b88a6(0x305)](_0x162ac7,_0x54b1bf,-0xdae*0x1+0xbb6+0x2a8,'f32',0xcfb+-0x1825+-0x2*-0x595),_0x96bfae(_0x2d0546,-0x1b83*0x1+-0xb1c+-0x2763*-0x1,'f32',0x2647*-0x1+-0x9eb*-0x1+0x1c5c),_0x362b14(_0x3df394,0x12a*0x2+-0x1f72+0x1*0x1de6,_0x1b88a6(0x471),-0x7cd*-0x2+0x2*0xa7d+-0x2494),_0x4baf6f['BRFEk'](_0x2f898e,_0x58480e,-0x155a+0x18b0+-0x296,_0x1b88a6(0x471),-0x54d*0x5+-0x1*-0x15f1+0x490);};_0x1d1c07[_0x5d0310(0x550)+_0x5d0310(0x348)+'stene'+'r'](_0x1e6031[_0x5d0310(0x215)],_0x20bc6),_0x1d1c07[_0x5d0310(0x550)+'entLi'+_0x5d0310(0x2be)+'r'](_0x1e6031[_0x5d0310(0x435)],_0x20bc6);var _0x36cccb=document[_0x5d0310(0x46c)+'eElem'+'ent']('div');_0x36cccb[_0x5d0310(0x42a)+_0x5d0310(0x155)]=_0x5d0310(0x587)+'ls',_0x17c3c8['appen'+'d'](_0x1d1c07,_0x36cccb),_0x124068['appen'+'d'](_0x2f61f2,_0x17c3c8);function _0x1c1841(){var _0x48633c=_0x5d0310,_0x241af1={'KJFET':_0x48633c(0x227)+_0x48633c(0x46f)+'n','veXvz':function(_0x318b21,_0x14af63){return _0x318b21===_0x14af63;},'LARkk':_0x4baf6f[_0x48633c(0x5b5)],'sQhgN':_0x48633c(0x3f8),'cVGcJ':function(_0x6f7eaf,_0x543054,_0x476166){var _0x1dddeb=_0x48633c;return _0x4baf6f[_0x1dddeb(0x238)](_0x6f7eaf,_0x543054,_0x476166);},'stzrV':_0x48633c(0x52d),'KefSF':function(_0x4a679f){return _0x4a679f();},'HkjNh':_0x48633c(0x1a1),'wRYya':_0x48633c(0x579),'dXyDU':function(_0x42f9d8){return _0x42f9d8();},'uSUQW':function(_0x2d755f,_0x46d89e){return _0x4baf6f['oXlve'](_0x2d755f,_0x46d89e);},'CpamH':function(_0x11c0c5){var _0x551643=_0x48633c;return _0x4baf6f[_0x551643(0x5a0)](_0x11c0c5);}};return[_0x292323(_0x4baf6f['dyPsm'],_0x2d166c['esp'],_0x2e179f=>{_0x2d166c['esp']=_0x2e179f,_0x1786c6();},[_0xaec4d1(_0x4baf6f['Dyfdh'],_0x4baf6f[_0x48633c(0x238)](_0x1cccac,_0x2d166c['boxes'],_0x5d0ef8=>{var _0x1a25c6=_0x48633c;if(_0x4baf6f[_0x1a25c6(0x1e8)]('FwoCR','FwoCR'))_0x2d166c[_0x1a25c6(0x47a)]=_0x5d0ef8,_0x1786c6();else try{_0x398105[_0x1a25c6(0x479)+'em']('sakur'+'a.ui.'+'2v2.v'+'1',_0x2c4be4['strin'+'gify'](_0xca1741));}catch(_0x41df94){}})),_0xaec4d1(_0x48633c(0x286),_0x4baf6f['LxZFm'](_0x1cccac,_0x2d166c[_0x48633c(0x294)],_0x2e1fc9=>{_0x2d166c['names']=_0x2e1fc9,_0x1786c6();})),_0xaec4d1(_0x4baf6f[_0x48633c(0x354)],_0x4baf6f['LxZFm'](_0x1cccac,_0x2d166c['healt'+'h'],_0x2a1bc4=>{var _0x2894ae=_0x48633c;if(_0x4baf6f['vHmwV']('qPRRn',_0x2894ae(0x166)))_0x2d166c[_0x2894ae(0x210)+'h']=_0x2a1bc4,_0x1786c6();else{var _0x572797=_0x292a55(_0x56ff88,_0x3f55e6=>{var _0x341329=_0x2894ae;_0x4c0ccf[_0x341329(0x42a)+'List'][_0x341329(0x278)+'e']('on',_0x3f55e6),_0x2df968(_0x3f55e6);});_0x4c2054[_0x2894ae(0x3c7)+'d'](_0x3017d6,_0x572797);}})),_0xaec4d1('Team\x20'+_0x48633c(0x287)+'s',_0x1cccac(_0x2d166c['team'],_0x18a00b=>{_0x2d166c['team']=_0x18a00b,_0x1786c6();})),_0xaec4d1('Lines',_0x1cccac(_0x2d166c['lines'],_0x1e05bf=>{var _0x4b31f4=_0x48633c;_0x2d166c[_0x4b31f4(0x2b3)]=_0x1e05bf,_0x1786c6();})),_0x4baf6f[_0x48633c(0x350)](_0xaec4d1,'Scale',_0x556078(_0x2d166c[_0x48633c(0x2e2)],-0x12d6+0x21ae+0xa*-0x17c+0.5,-0xf9+0x9b*0x5+0x1*-0x20c,0x17e2*0x1+-0x34b*0x3+0xef*-0xf+0.05,_0x178e92=>{var _0x11bf18=_0x48633c,_0x18cf27={'QueHL':_0x11bf18(0x37b),'EckWx':_0x241af1[_0x11bf18(0x3a9)]};if(_0x241af1['veXvz'](_0x241af1[_0x11bf18(0x173)],_0x241af1[_0x11bf18(0x40e)])){var _0x5ec214=_0xc9cd8d[_0x11bf18(0x46c)+'eElem'+_0x11bf18(0x37f)](_0x18cf27[_0x11bf18(0x5a6)]);return _0x5ec214[_0x11bf18(0x1b5)+_0x11bf18(0x4f7)+'te'](_0x18cf27['EckWx'],'true'),_0x5ec214['inner'+_0x11bf18(0x2c6)]=_0x11bf18(0x2e4)+'viewB'+_0x11bf18(0x1df)+_0x11bf18(0x35f)+'\x2024\x22>'+_0x300b90+(_0x11bf18(0x5bc)+'>'),_0x5ec214;}else _0x2d166c['scale']=_0x178e92,_0x1786c6();}))]),_0x292323(_0x4baf6f['HfkvO'],![],null,[_0x4baf6f['KJLpi'](_0xaec4d1,_0x4baf6f[_0x48633c(0x17e)],_0x1cccac(_0x2d166c[_0x48633c(0x385)+_0x48633c(0x464)],_0x3b7f8f=>{var _0x28ea0b=_0x48633c;_0x2d166c[_0x28ea0b(0x385)+_0x28ea0b(0x464)]=_0x3b7f8f,_0x1786c6();})),_0xaec4d1(_0x4baf6f[_0x48633c(0x29a)],_0x4baf6f['LxZFm'](_0x1cccac,_0x2d166c[_0x48633c(0x335)+_0x48633c(0x5b1)],_0x4a018c=>{var _0x3a4673=_0x48633c;_0x2d166c[_0x3a4673(0x335)+'ead']=_0x4a018c,_0x1786c6();})),_0x4baf6f['LxZFm'](_0xaec4d1,_0x48633c(0x4eb)+_0x48633c(0x295),_0x1cccac(_0x2d166c[_0x48633c(0x1a7)+'Fire'],_0x4682ca=>{var _0x386b91=_0x48633c;_0x2d166c['rapid'+_0x386b91(0x25b)]=_0x4682ca,_0x1786c6();})),_0xaec4d1('Damag'+'e',_0x4baf6f[_0x48633c(0x222)](_0x556078,_0x2d166c['damag'+_0x48633c(0x168)+'e'],-0x219c+0x199*0xb+0x2*0x805,0x20b2+0xfed+-0x2eab,0x16*0x16a+-0x11c7+-0xd54,_0x4c88b1=>{_0x2d166c['damag'+'eValu'+'e']=_0x4c88b1,_0x1786c6();})),_0xaec4d1('Infin'+_0x48633c(0x3b2)+_0x48633c(0x445),_0x4baf6f[_0x48633c(0x4e9)](_0x1cccac,_0x2d166c['infAm'+'mo'],_0x4646dd=>{_0x2d166c['infAm'+'mo']=_0x4646dd,_0x1786c6();}))]),_0x292323(_0x48633c(0x5b9)+'ent',![],null,[_0x4baf6f[_0x48633c(0x1c1)](_0xaec4d1,'Speed'+'\x20%',_0x556078(_0x2d166c['speed'+'Pct'],-0x1d24+-0x11da+0x2f30,0x3*0x3c1+0x1e8d+-0x2908,-0x1*0x2125+-0x2246+0x436c,_0x572ab2=>{var _0xb53e37=_0x48633c;if(_0x241af1[_0xb53e37(0x4ca)](_0xb53e37(0x52d),_0x241af1[_0xb53e37(0x392)]))_0x2d166c[_0xb53e37(0x315)+'Pct']=_0x572ab2,_0x241af1[_0xb53e37(0x36f)](_0x1786c6);else return _0x3e9fb3?_0x241af1[_0xb53e37(0x2b5)](_0x27c60e,_0x1ae581,-0x1*0x1f3d+-0x1889+0x1*0x37d2):0x1979+0xc4*0x2+-0x1b01;})),_0xaec4d1(_0x48633c(0x405)+'%',_0x556078(_0x2d166c[_0x48633c(0x23e)+'ct'],-0x126c*0x1+0x1e1*0x1+-0x1*-0x10bd,-0x10f2+0x31*-0x15+0x1*0x15bf,-0x51*0x3+0x2670+-0x12be*0x2,_0x5b693c=>{var _0x51435d=_0x48633c;_0x2d166c[_0x51435d(0x23e)+'ct']=_0x5b693c,_0x4baf6f[_0x51435d(0x5a0)](_0x1786c6);})),_0xaec4d1(_0x48633c(0x5c4)+'ty\x20%',_0x4baf6f['iXwbA'](_0x556078,_0x2d166c['gravi'+_0x48633c(0x43f)],-0x5c7*-0x3+-0x9e*0x18+0x7f*-0x5,0xc5*-0x19+-0x11*-0xec+0x459,0x2d*0x65+-0x15dc+0x41c,_0x480b7e=>{var _0x4f1653=_0x48633c;if(_0x241af1[_0x4f1653(0x516)]!==_0x241af1['wRYya'])_0x2d166c[_0x4f1653(0x30c)+_0x4f1653(0x43f)]=_0x480b7e,_0x241af1[_0x4f1653(0x371)](_0x1786c6);else{var _0x1bc0e1=new _0x3f03f0(_0x70cf8e)['readF'+'ield'](_0x3a8215,'i8');return _0x1bc0e1?_0x1bc0e1[_0x4f1653(0x170)]():-0x16c3+-0x3*-0x791+0x10;}}))]),_0x4baf6f[_0x48633c(0x25e)](_0x292323,_0x4baf6f[_0x48633c(0x38d)],![],null,[_0xaec4d1(_0x48633c(0x556)+_0x48633c(0x46d),_0x556078(_0x2d166c['camHe'+_0x48633c(0x3c4)],0x978*-0x1+0x4*-0x1b4+0x1048+0.8,0x2d1+0xa36+-0xd05+0.6000000000000001,-0x14dc+-0x4dd+0x19b9+0.02,_0x475e2a=>{var _0x1a00b7=_0x48633c;if(_0x4baf6f['pGAbx']===_0x1a00b7(0x1da)){if(_0x10e0b6[_0xf60bba]&&_0x4563a2[_0x4fce08][_0x1a00b7(0x331)+'ed'])_0x3876bc++;}else _0x2d166c[_0x1a00b7(0x4d9)+_0x1a00b7(0x3c4)]=_0x475e2a,_0x4baf6f[_0x1a00b7(0x358)](_0x1786c6);})),_0x4baf6f[_0x48633c(0x468)](_0xaec4d1,_0x48633c(0x372)+'r\x20hei'+_0x48633c(0x4ab),_0x556078(_0x2d166c[_0x48633c(0x1ab)+_0x48633c(0x534)+'ht'],0x230+-0xac8+0x899+0.19999999999999996,-0x1ac1+-0x1d9c+0x1*0x385f+0.3999999999999999,-0x22cb*0x1+-0x1*0x7f+0x234a*0x1+0.02,_0x3916ab=>{var _0x2b7fe3=_0x48633c;_0x2d166c['playe'+_0x2b7fe3(0x534)+'ht']=_0x3916ab,_0x1786c6();})),_0x4baf6f[_0x48633c(0x1c1)](_0xaec4d1,_0x48633c(0x576)+_0x48633c(0x506)+'uto)',_0x556078(_0x2d166c[_0x48633c(0x326)+'errid'+'e'],0x1e*-0x95+0x6ee+-0x151*-0x8,-0x1091+0x8e*0x13+-0x67f*-0x1,-0x51*-0x3d+0x1d*0x8e+0x11b1*-0x2,_0x3cb683=>{var _0x193c10=_0x48633c;_0x241af1['uSUQW']('vdAKK',_0x193c10(0x1d1))?(_0x4b1458['camHe'+'ight']=_0x285efb,_0x53d28f()):(_0x2d166c['fovOv'+_0x193c10(0x327)+'e']=_0x3cb683,_0x1786c6());}))]),_0x4baf6f[_0x48633c(0x201)](_0x292323,'Safet'+'y',_0x2d166c['safeM'+'ode'],_0x7b6319=>{var _0x4a23ea=_0x48633c;_0x2d166c[_0x4a23ea(0x1af)+_0x4a23ea(0x2a7)]=_0x7b6319,_0x4baf6f['jqmzm'](_0x1786c6);if(_0x7b6319){for(var _0x48bb36 in _0x348948)_0x4baf6f[_0x4a23ea(0x238)](_0x557acc,_0x48bb36,![]);}},[_0x4baf6f[_0x48633c(0x468)](_0xaec4d1,_0x4baf6f[_0x48633c(0x218)],_0x1cccac(_0x2d166c['hookC'+_0x48633c(0x3f6)+'e'],_0x3a2bd0=>{var _0x150a0a=_0x48633c;_0x2d166c[_0x150a0a(0x186)+'aptur'+'e']=_0x3a2bd0,_0x1786c6();})),_0xaec4d1('Hook:'+_0x48633c(0x34d)+_0x48633c(0x509)+'e',_0x1cccac(_0x2d166c[_0x48633c(0x33c)+'tate'],_0x24c9ae=>{var _0x3a5297=_0x48633c;_0x2d166c[_0x3a5297(0x33c)+_0x3a5297(0x45f)]=_0x24c9ae,_0x241af1['CpamH'](_0x1786c6);})),_0xaec4d1('Hook:'+_0x48633c(0x3c6)+_0x48633c(0x191),_0x1cccac(_0x2d166c[_0x48633c(0x41f)+_0x48633c(0x3b1)+'il'],_0x1ef6b4=>{var _0x1a0844=_0x48633c;_0x2d166c['hookN'+'oReco'+'il']=_0x1ef6b4,_0x4baf6f[_0x1a0844(0x5a0)](_0x1786c6);})),_0x4baf6f[_0x48633c(0x5d8)](_0xc47d15,_0x4baf6f[_0x48633c(0x3e4)](_0x4baf6f[_0x48633c(0x58d)](_0x48633c(0x56e)+'\x20'+_0x5dd843['hooks'+'Ok']+'/',_0x5dd843[_0x48633c(0x56e)+'Total']),_0x48633c(0x553)+_0x48633c(0x321))),_0xc47d15('playe'+'rs\x20'+_0x5dd843['playe'+'rs']+(_0x48633c(0x203)+'ate\x20')+(_0x5dd843['state']?'ok':'—')),_0xc47d15(_0x4baf6f[_0x48633c(0x58d)](_0x48633c(0x2a1)+'r\x20',_0x5dd843['linke'+'r']?'✓':'—')+_0x4baf6f[_0x48633c(0x1f6)]+(_0x5dd843[_0x48633c(0x275)+_0x48633c(0x223)]?'✓':'—')+_0x4baf6f[_0x48633c(0x463)]+(_0x5dd843['charC'+'am']?'✓':'—')),_0x5dd843['lastE'+'rror']?_0x4baf6f[_0x48633c(0x1d9)](_0xc47d15,String(_0x5dd843[_0x48633c(0x2e6)+'rror'])['slice'](0x3*-0x296+-0x1639*-0x1+-0xe77,-0x1e3e+0x1b5b+0x1*0x33d)):_0xc47d15('no\x20er'+_0x48633c(0x1d6))])];}return _0x36cccb['repla'+'ceChi'+_0x5d0310(0x562)](..._0x1e6031[_0x5d0310(0x55e)](_0x1c1841)),Number[_0x5d0310(0x346)+'ite'](_0x22cb2b['x'])&&(_0x124068['style'][_0x5d0310(0x32d)]=_0x1e6031[_0x5d0310(0x213)](_0x22cb2b['x'],'px'),_0x124068[_0x5d0310(0x33f)]['top']=_0x1e6031['AHocy'](_0x22cb2b['y'],'px'),_0x124068[_0x5d0310(0x33f)]['right']=_0x1e6031[_0x5d0310(0x1b0)],_0x124068[_0x5d0310(0x33f)][_0x5d0310(0x4d7)+'m']='auto'),_0x124068;}function _0xbc968c(){var _0x20e684=_0x168149;if(_0x20e684(0x1d7)===_0x1e6031[_0x20e684(0x44a)])_0x5c12e9=_0xce3b97,_0x20ed40['state']=!![];else try{localStorage[_0x20e684(0x479)+'em']('sakur'+'a.ui.'+'2v2.v'+'1',JSON[_0x20e684(0x451)+'gify'](_0x22cb2b));}catch(_0x402451){}}var _0x300e8b=null;function _0x4b5b86(_0x2cc82f){var _0xb037d8=_0x168149;_0x294c5d=_0x2cc82f;if(!_0x300e8b){var _0x25b2bd=document['creat'+_0xb037d8(0x473)+_0xb037d8(0x37f)]('style');_0x25b2bd['textC'+_0xb037d8(0x570)+'t']=_0x298533,_0x3bb754[_0xb037d8(0x3c7)+'dChil'+'d'](_0x25b2bd),_0x300e8b=_0x1e6031['VPnJI'](_0x34d6d1),_0x3bb754[_0xb037d8(0x3c7)+'dChil'+'d'](_0x300e8b),requestAnimationFrame(()=>_0x300e8b[_0xb037d8(0x42a)+_0xb037d8(0x3b6)]['add'](_0xb037d8(0x2d3)));}_0x300e8b['class'+'List']['toggl'+'e'](_0x1e6031['lLxyW'],_0x2cc82f);if(_0x2cc82f)_0x1e6031[_0xb037d8(0x55e)](_0x511c62);}function _0x510136(){var _0x54ada1=_0x168149;_0x1e6031['zJBXs'](_0x1e6031['EeloV'],'baZtT')?_0x1e6031['BQfkl'](_0x4b5b86,!_0x294c5d):(_0x3b4cc2[_0x54ada1(0x599)+'mo']=_0x10fe9e,_0x5a63c7());}function _0x511c62(){var _0x3289e0=_0x168149;if(_0x3289e0(0x37e)===_0x3289e0(0x37e)){var _0x4d3c70=_0x1e6031['qiWfz'][_0x3289e0(0x16e)]('|'),_0x3507ea=0x8*-0x475+0x1bce+0x2*0x3ed;while(!![]){switch(_0x4d3c70[_0x3507ea++]){case'0':var _0x4b5cb2=_0x300e8b['shado'+'wRoot']||_0x3bb754;continue;case'1':if(_0x5f46ea){var _0x476368=_0x1e6031[_0x3289e0(0x4dd)](_0x4c9e34);_0x5f46ea['repla'+_0x3289e0(0x21d)+_0x3289e0(0x562)](..._0x476368),Number['isFin'+_0x3289e0(0x199)](_0x22cb2b['x'])&&(_0x300e8b[_0x3289e0(0x33f)][_0x3289e0(0x32d)]=_0x22cb2b['x']+'px',_0x300e8b['style']['top']=_0x22cb2b['y']+'px');}continue;case'2':var _0xeb19e4=_0x300e8b[_0x3289e0(0x40d)+_0x3289e0(0x17a)+_0x3289e0(0x2f5)+'l'](_0x1e6031[_0x3289e0(0x42e)]);continue;case'3':if(!_0x300e8b)return;continue;case'4':var _0x5f46ea=_0x300e8b[_0x3289e0(0x40d)+'Selec'+_0x3289e0(0x30b)](_0x1e6031[_0x3289e0(0x18d)]);continue;}break;}}else{if(_0x264024[_0x3289e0(0x36d)]&&!_0x3cb251[_0x3289e0(0x36d)][_0x3289e0(0x2c5)+_0x3289e0(0x3c1)](_0x30ee74))_0x5d787e['body'][_0x3289e0(0x3c7)+_0x3289e0(0x20b)+'d'](_0xac508c);}}function _0x4c9e34(){var _0x39e912=_0x168149,_0xc39020=_0x34d6d1();return _0xc39020['query'+'Selec'+'tor'](_0x39e912(0x57c)+_0x39e912(0x55b))['child'+_0x39e912(0x54d)];}window[_0x168149(0x550)+'entLi'+_0x168149(0x2be)+'r'](_0x168149(0x352)+'wn',_0x1756eb=>{var _0x4b0cee=_0x168149;_0x1756eb['code']===_0x4b0cee(0x58a)+'t'&&(_0x1756eb[_0x4b0cee(0x22a)+_0x4b0cee(0x404)+_0x4b0cee(0x30f)](),_0x510136());},!![]);var _0x2d3358=document['creat'+'eElem'+'ent'](_0x168149(0x408));_0x2d3358[_0x168149(0x33f)]['cssTe'+'xt']=_0x168149(0x59b)+_0x168149(0x20c)+_0x168149(0x5a2)+'top:1'+_0x168149(0x45b)+_0x168149(0x54e)+_0x168149(0x381)+_0x168149(0x2d0)+'ex:21'+_0x168149(0x2a2)+_0x168149(0x18b)+'ursor'+':poin'+'ter;w'+'idth:'+_0x168149(0x2e0)+_0x168149(0x2d9)+_0x168149(0x39e)+'x;opa'+'city:'+'0.5;t'+'ransi'+_0x168149(0x312)+_0x168149(0x276)+_0x168149(0x34f)+_0x168149(0x5d9)+_0x168149(0x1e7)+'-even'+_0x168149(0x2d2)+'to;fi'+'lter:'+'drop-'+'shado'+_0x168149(0x22f)+_0x168149(0x2f7)+_0x168149(0x2fe)+_0x168149(0x188)+_0x168149(0x3a3)+_0x168149(0x4c7)+'))',_0x2d3358['inner'+_0x168149(0x2c6)]=_0x168149(0x2e4)+'viewB'+_0x168149(0x1df)+'\x200\x2024'+'\x2024\x22>'+'<defs'+_0x168149(0x403)+_0x168149(0x200)+_0x168149(0x1c3)+_0x168149(0x2d7)+_0x168149(0x4c1)+_0x168149(0x220)+_0x168149(0x5b3)+_0x168149(0x430)+_0x168149(0x43e)+'2=\x2220'+_0x168149(0x4cf)+'\x2221\x22\x20'+_0x168149(0x57b)+_0x168149(0x3aa)+'its=\x22'+'userS'+_0x168149(0x29c)+_0x168149(0x208)+_0x168149(0x367)+'p\x20off'+_0x168149(0x428)+_0x168149(0x378)+_0x168149(0x4f1)+_0x168149(0x3ef)+_0x168149(0x519)+_0x168149(0x157)+'<stop'+'\x20offs'+'et=\x220'+_0x168149(0x22d)+_0x168149(0x1aa)+'color'+_0x168149(0x5c3)+_0x168149(0x192)+_0x168149(0x23a)+_0x168149(0x4e1)+'fset='+'\x221\x22\x20s'+_0x168149(0x343)+'olor='+_0x168149(0x443)+_0x168149(0x5c8)+'></li'+'nearG'+'radie'+_0x168149(0x59e)+_0x168149(0x1c8)+'<path'+_0x168149(0x229)+_0x168149(0x49f)+'c-1.5'+'-2.5-'+'4-4.5'+_0x168149(0x360)+_0x168149(0x3e7)+_0x168149(0x597)+_0x168149(0x512)+'\x204-4.'+_0x168149(0x510)+_0x168149(0x15e)+_0x168149(0x50a)+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+_0x168149(0x412)+_0x168149(0x2cc)+'\x22\x20str'+_0x168149(0x29d)+_0x168149(0x384)+_0x168149(0x51a)+'ad)\x22\x20'+_0x168149(0x4d5)+_0x168149(0x17b)+'th=\x222'+_0x168149(0x24e)+'oke-l'+_0x168149(0x241)+_0x168149(0x3c3)+_0x168149(0x5c5)+'strok'+_0x168149(0x3e1)+'ejoin'+'=\x22rou'+_0x168149(0x39b)+_0x168149(0x46a)+_0x168149(0x229)+_0x168149(0x322)+'4M12\x20'+_0x168149(0x2e1)+_0x168149(0x3e7)+_0x168149(0x2cb)+_0x168149(0x1d2)+'.5M12'+'\x203c1.'+'5\x200\x202'+_0x168149(0x3b5)+'2.5\x202'+_0x168149(0x3c8)+_0x168149(0x469)+'none\x22'+'\x20stro'+_0x168149(0x243)+_0x168149(0x249)+_0x168149(0x2a9)+_0x168149(0x547)+_0x168149(0x4bc)+_0x168149(0x18f)+_0x168149(0x329)+'5\x22\x20st'+'roke-'+_0x168149(0x22b)+_0x168149(0x2ee)+'ound\x22'+_0x168149(0x4d0)+_0x168149(0x20e)+_0x168149(0x444)+_0x168149(0x4e2)+_0x168149(0x531)+_0x168149(0x420)+'.5\x22\x20f'+'ill=\x22'+_0x168149(0x20d)+'9d\x22/>'+_0x168149(0x5bc)+'>',_0x2d3358['title']=_0x1e6031[_0x168149(0x3dc)],_0x2d3358[_0x168149(0x36a)+_0x168149(0x1b8)+'er']=()=>_0x2d3358[_0x168149(0x33f)][_0x168149(0x276)+'ty']='1',_0x2d3358[_0x168149(0x36a)+'selea'+'ve']=()=>_0x2d3358[_0x168149(0x33f)][_0x168149(0x276)+'ty']=_0x168149(0x3e6),_0x2d3358[_0x168149(0x1bb)+'ck']=_0xa50b9=>{var _0x489205=_0x168149;_0xa50b9['stopP'+_0x489205(0x592)+_0x489205(0x4bf)](),_0x510136();},document['body'][_0x168149(0x3c7)+'dChil'+'d'](_0x2d3358);var _0x298533='\x0a\x20\x20:h'+_0x168149(0x351)+_0x168149(0x2f2)+'\x20init'+_0x168149(0x219)+_0x168149(0x36c)+'\x20{\x20bo'+_0x168149(0x4a0)+'ing:\x20'+_0x168149(0x2f9)+_0x168149(0x180)+_0x168149(0x5d3)+_0x168149(0x4fc)+_0x168149(0x333)+_0x168149(0x292)+_0x168149(0x2fc)+_0x168149(0x150)+_0x168149(0x3b7)+_0x168149(0x178)+'e\x20UI\x22'+',\x20sys'+'tem-u'+'i,\x20sa'+_0x168149(0x19b)+_0x168149(0x270)+_0x168149(0x2fd)+_0x168149(0x363)+_0x168149(0x31e)+_0x168149(0x3a8)+'tion:'+_0x168149(0x2f4)+_0x168149(0x427)+'\x20righ'+_0x168149(0x1ef)+'px;\x20b'+'ottom'+_0x168149(0x500)+'x;\x20wi'+'dth:\x20'+'min(3'+_0x168149(0x224)+'\x20calc'+'(100v'+'w\x20-\x204'+'8px))'+_0x168149(0x5d4)+_0x168149(0x1b7)+'ht:\x20m'+_0x168149(0x438)+_0x168149(0x52f)+_0x168149(0x1ae)+'100vh'+_0x168149(0x5cf)+_0x168149(0x1ff)+_0x168149(0x487)+_0x168149(0x31a)+_0x168149(0x3d7)+'lex;\x20'+_0x168149(0x34e)+_0x168149(0x3fb)+'\x20padd'+'ing:\x20'+_0x168149(0x3fb)+_0x168149(0x4ce)+_0x168149(0x4a7)+'dius:'+_0x168149(0x53e)+';\x20poi'+_0x168149(0x561)+_0x168149(0x36b)+'s:\x20au'+'to;\x0a\x20'+'\x20\x20\x20ba'+'ckgro'+_0x168149(0x368)+'rgba('+_0x168149(0x50d)+_0x168149(0x3ae)+_0x168149(0x419)+_0x168149(0x409)+'rop-f'+'ilter'+_0x168149(0x416)+_0x168149(0x3cb)+'x)\x20sa'+'turat'+_0x168149(0x1f1)+'%);\x20-'+_0x168149(0x3ab)+_0x168149(0x236)+_0x168149(0x301)+_0x168149(0x4af)+'er:\x20b'+_0x168149(0x4aa)+'2px)\x20'+'satur'+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+_0x168149(0x17f)+_0x168149(0x4fb)+_0x168149(0x182)+'\x200\x201p'+_0x168149(0x5cd)+_0x168149(0x4a1)+',255,'+_0x168149(0x255)+'06),\x20'+'inset'+'\x200\x201p'+_0x168149(0x398)+_0x168149(0x261)+'55,25'+_0x168149(0x5c6)+_0x168149(0x5c9)+',\x200\x203'+_0x168149(0x59d)+'0px\x20r'+_0x168149(0x42b)+_0x168149(0x296)+'.55);'+_0x168149(0x487)+_0x168149(0x276)+_0x168149(0x19a)+_0x168149(0x3dd)+_0x168149(0x2e7)+_0x168149(0x300)+_0x168149(0x2e5)+'teY(1'+_0x168149(0x2ef)+'\x20poin'+'ter-e'+_0x168149(0x425)+_0x168149(0x49a)+'e;\x20tr'+_0x168149(0x325)+_0x168149(0x2f6)+'opaci'+_0x168149(0x34c)+_0x168149(0x452)+_0x168149(0x288)+_0x168149(0x57e)+_0x168149(0x3d9)+_0x168149(0x407)+'ubic-'+_0x168149(0x45d)+_0x168149(0x4c3)+_0x168149(0x1b2)+_0x168149(0x44b)+_0x168149(0x487)+_0x168149(0x287)+_0x168149(0x247)+'eef2;'+_0x168149(0x4e8)+'-size'+':\x2013p'+_0x168149(0x383)+'\x20\x20.mn'+_0x168149(0x4a4)+_0x168149(0x521)+'wn\x20{\x20'+'opaci'+_0x168149(0x4bd)+_0x168149(0x3dd)+_0x168149(0x2e7)+_0x168149(0x467)+_0x168149(0x29f)+'ointe'+'r-eve'+'nts:\x20'+'auto;'+'\x20}\x0a\x20\x20'+'.mn-p'+_0x168149(0x31d)+_0x168149(0x1e3)+'aggin'+_0x168149(0x460)+'ransi'+'tion:'+'\x20none'+';\x20}\x0a\x20'+'\x20.mn-'+_0x168149(0x231)+'{\x20dis'+_0x168149(0x55d)+_0x168149(0x317)+_0x168149(0x21f)+_0x168149(0x226)+'ectio'+'n:\x20co'+'lumn;'+'\x20alig'+_0x168149(0x58f)+'ms:\x20c'+'enter'+';\x20gap'+_0x168149(0x4e3)+';\x20wid'+_0x168149(0x4d1)+_0x168149(0x284)+(_0x168149(0x52b)+'\x20none'+_0x168149(0x45c)+'ding:'+_0x168149(0x554)+_0x168149(0x304)+_0x168149(0x279)+'-radi'+_0x168149(0x171)+_0x168149(0x474)+'\x20\x20\x20\x20b'+'ackgr'+'ound:'+'\x20rgba'+_0x168149(0x4be)+_0x168149(0x4f8)+'55,.0'+_0x168149(0x455)+_0x168149(0x17f)+'hadow'+_0x168149(0x58b)+_0x168149(0x382)+'0\x200\x201'+_0x168149(0x190)+'ba(25'+'5,255'+_0x168149(0x1c9)+'.05);'+'\x20}\x0a\x20\x20'+'.mn-l'+'ogo\x20{'+_0x168149(0x2b8)+_0x168149(0x1be)+_0x168149(0x1e4)+'\x20plac'+_0x168149(0x23f)+_0x168149(0x293)+'enter'+_0x168149(0x551)+_0x168149(0x369)+'2px;\x20'+_0x168149(0x2d9)+'t:\x2032'+'px;\x20}'+'\x0a\x20\x20.m'+'n-log'+_0x168149(0x4b2)+'\x20{\x20wi'+_0x168149(0x4f4)+_0x168149(0x26d)+_0x168149(0x1cf)+'ht:\x202'+_0x168149(0x15f)+'overf'+_0x168149(0x2b9)+_0x168149(0x535)+_0x168149(0x27a)+_0x168149(0x563)+_0x168149(0x1bd)+'p-sha'+_0x168149(0x567)+_0x168149(0x546)+'x\x20rgb'+_0x168149(0x4a1)+_0x168149(0x571)+'157,.'+_0x168149(0x3d4)+_0x168149(0x2d4)+'hadow'+_0x168149(0x2dd)+_0x168149(0x458)+_0x168149(0x2fe)+_0x168149(0x188)+'07,15'+_0x168149(0x32b)+_0x168149(0x26f)+'\x20\x20.mn'+'-main'+'\x20{\x20fl'+'ex:\x201'+_0x168149(0x393)+'-widt'+_0x168149(0x573)+_0x168149(0x2b8)+'lay:\x20'+_0x168149(0x2b2)+_0x168149(0x317)+'-dire'+_0x168149(0x27b)+_0x168149(0x58c)+_0x168149(0x1f7)+_0x168149(0x2fd)+_0x168149(0x239)+'p\x20{\x20d'+'ispla'+'y:\x20fl'+_0x168149(0x44f)+'lign-'+_0x168149(0x4c2)+':\x20cen'+'ter;\x20'+_0x168149(0x34e)+_0x168149(0x381)+_0x168149(0x437)+_0x168149(0x481)+_0x168149(0x3a7)+_0x168149(0x57a)+'px;\x20c'+'ursor'+':\x20gra'+_0x168149(0x2b7)+_0x168149(0x586)+'lect:'+'\x20none'+_0x168149(0x43b)+_0x168149(0x1ac)+'tion:'+_0x168149(0x3e0)+';\x20}\x0a\x20'+_0x168149(0x38f)+'h\x20{\x20f'+'ont-s'+_0x168149(0x2a5)+'17px;'+_0x168149(0x4e8)+_0x168149(0x3ea)+'ht:\x206'+'50;\x20l'+'etter'+'-spac'+_0x168149(0x481)+_0x168149(0x248)+_0x168149(0x51b)+_0x168149(0x50c)+_0x168149(0x28d)+_0x168149(0x476)+_0x168149(0x174)+_0x168149(0x151)+_0x168149(0x19f)+'lace-'+'items'+_0x168149(0x47c)+_0x168149(0x596)+_0x168149(0x2ed)+_0x168149(0x1bc)+'x;\x20he'+_0x168149(0x54e)+_0x168149(0x27c)+';\x20bor'+_0x168149(0x436)+_0x168149(0x3ac)+_0x168149(0x2dc)+'radiu'+'s:\x208p'+'x;\x20ba'+'ckgro'+'und:\x20'+_0x168149(0x4ec)+'paren'+'t;\x20co'+_0x168149(0x323)+_0x168149(0x530)+'it;\x20o'+_0x168149(0x205)+_0x168149(0x24d)+'5;\x20cu'+'rsor:'+_0x168149(0x374)+_0x168149(0x596)+'trans'+_0x168149(0x4c9)+':\x20opa'+_0x168149(0x33e)+_0x168149(0x185)+'backg'+_0x168149(0x233)+_0x168149(0x1de)+'\x20}\x0a\x20\x20'+_0x168149(0x57c)+'lose:'+_0x168149(0x2a0)+_0x168149(0x55f)+'acity'+':\x201;\x20'+_0x168149(0x56d)+_0x168149(0x233)+':\x20rgb'+_0x168149(0x4a1)+',255,'+'255,.'+_0x168149(0x598)+_0x168149(0x2fd)+_0x168149(0x260)+'ose\x20s'+'vg\x20{\x20'+'width'+_0x168149(0x357)+'x;\x20he'+'ight:'+'\x2014px')+(_0x168149(0x2b6)+_0x168149(0x2db)+_0x168149(0x38a)+_0x168149(0x4bc)+_0x168149(0x5c2)+_0x168149(0x27e)+'olor;'+_0x168149(0x309)+_0x168149(0x4b5)+_0x168149(0x4f4)+'2;\x20st'+_0x168149(0x1fe)+'linec'+_0x168149(0x4a9)+_0x168149(0x340)+'\x20}\x0a\x20\x20'+_0x168149(0x57c)+'ols\x20{'+_0x168149(0x317)+_0x168149(0x447)+'min-h'+'eight'+':\x200;\x20'+'overf'+_0x168149(0x163)+_0x168149(0x3d3)+_0x168149(0x2cf)+'splay'+_0x168149(0x3f4)+'d;\x20gr'+_0x168149(0x1c0)+'mplat'+'e-col'+_0x168149(0x577)+'\x201fr;'+_0x168149(0x291)+'\x2010px'+_0x168149(0x45c)+'ding:'+'\x200\x204p'+_0x168149(0x50f)+_0x168149(0x183)+_0x168149(0x411)+'k-car'+_0x168149(0x17d)+'order'+_0x168149(0x584)+'us:\x201'+_0x168149(0x284)+_0x168149(0x56d)+_0x168149(0x233)+':\x20rgb'+_0x168149(0x4a1)+_0x168149(0x1c9)+'255,.'+_0x168149(0x23c)+_0x168149(0x17c)+_0x168149(0x3e2)+'w:\x20in'+_0x168149(0x356)+'\x200\x200\x20'+_0x168149(0x21a)+_0x168149(0x261)+_0x168149(0x499)+'5,255'+',.05)'+';\x20tra'+'nsiti'+_0x168149(0x237)+'ox-sh'+_0x168149(0x3bb)+'.25s,'+'\x20back'+'groun'+_0x168149(0x164)+'s;\x20an'+_0x168149(0x38b)+_0x168149(0x3de)+'n-in\x20'+'.35s\x20'+_0x168149(0x3f9)+'both;'+_0x168149(0x569)+_0x168149(0x259)+_0x168149(0x559)+_0x168149(0x225)+_0x168149(0x3fa)+_0x168149(0x3a4)+'\x20rgba'+'(255,'+'255,2'+_0x168149(0x16b)+_0x168149(0x32c)+'ox-sh'+'adow:'+_0x168149(0x264)+_0x168149(0x5b7)+_0x168149(0x195)+_0x168149(0x5cd)+'a(255'+',107,'+'157,.'+_0x168149(0x515)+'0\x200\x200'+_0x168149(0x2ff)+_0x168149(0x2fe)+'255,1'+_0x168149(0x3a3)+_0x168149(0x574)+_0x168149(0x53d)+_0x168149(0x221)+_0x168149(0x194)+'gba(2'+_0x168149(0x2d8)+_0x168149(0x2bd)+',.06)'+_0x168149(0x3b3)+_0x168149(0x42d)+_0x168149(0x5a3)+'head\x20'+_0x168149(0x494)+_0x168149(0x55d)+_0x168149(0x317)+_0x168149(0x4a2)+'gn-it'+'ems:\x20'+_0x168149(0x39a)+_0x168149(0x4da)+'p:\x208p'+'x;\x20pa'+_0x168149(0x528)+_0x168149(0x234)+_0x168149(0x1b1)+_0x168149(0x383)+_0x168149(0x53c)+'-card'+_0x168149(0x3ec)+'e\x20{\x20f'+'lex:\x20'+_0x168149(0x16c)+_0x168149(0x480)+_0x168149(0x5c0)+';\x20}\x0a\x20'+_0x168149(0x42d)+_0x168149(0x5a3)+'title'+_0x168149(0x309)+_0x168149(0x1ce)+'font-'+'size:'+'\x2013px'+';\x20fon'+'t-wei'+_0x168149(0x167)+_0x168149(0x22e)+_0x168149(0x287)+_0x168149(0x2ae)+_0x168149(0x365)+',238,'+_0x168149(0x2e8)+_0x168149(0x39d)+_0x168149(0x4ec)+_0x168149(0x4c9)+':\x20col'+_0x168149(0x53f)+'s;\x20}\x0a'+'\x20\x20.sk'+'-card'+_0x168149(0x297)+_0x168149(0x41b)+'rd-ti'+_0x168149(0x5bd)+'trong'+'\x20{\x20co'+'lor:\x20'+_0x168149(0x4ed)+'f5;\x20}'+_0x168149(0x411)+'k-mbo'+'dy\x20{\x20'+'paddi'+'ng:\x200'+'\x2012px'+'\x2010px'+_0x168149(0x3b3)+_0x168149(0x42d)+_0x168149(0x524)+'\x20disp'+'lay:\x20'+_0x168149(0x2b2)+_0x168149(0x529)+'n-ite'+_0x168149(0x293)+_0x168149(0x18c)+_0x168149(0x35b)+':\x208px'+_0x168149(0x45c)+'ding:'+'\x204px\x20'+'0;\x20fo')+(_0x168149(0x3cd)+'ze:\x201'+'1.5px'+_0x168149(0x3b3)+_0x168149(0x42d)+_0x168149(0x209)+'\x20{\x20fl'+'ex:\x201'+_0x168149(0x1b4)+_0x168149(0x2c0)+_0x168149(0x261)+_0x168149(0x169)+_0x168149(0x5b6)+_0x168149(0x1b3)+';\x20}\x0a\x20'+_0x168149(0x42d)+_0x168149(0x53b)+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x168149(0x290)+_0x168149(0x359)+_0x168149(0x319)+_0x168149(0x2cd)+';\x20hei'+_0x168149(0x167)+'14px;'+'\x20bord'+_0x168149(0x273)+';\x20bor'+_0x168149(0x246)+_0x168149(0x4db)+_0x168149(0x44c)+'x;\x20ba'+_0x168149(0x54c)+_0x168149(0x368)+'rgba('+'255,2'+_0x168149(0x499)+_0x168149(0x15b)+_0x168149(0x1cb)+_0x168149(0x2fa)+_0x168149(0x374)+'ter;\x20'+_0x168149(0x52b)+_0x168149(0x3e0)+_0x168149(0x3dd)+'nsiti'+_0x168149(0x237)+_0x168149(0x3fa)+_0x168149(0x3fd)+_0x168149(0x38c)+_0x168149(0x2fd)+_0x168149(0x313)+_0x168149(0x51d)+':afte'+_0x168149(0x41c)+_0x168149(0x570)+_0x168149(0x24a)+_0x168149(0x338)+'ition'+':\x20abs'+_0x168149(0x1d4)+_0x168149(0x24c)+':\x203px'+_0x168149(0x3d6)+'t:\x203p'+'x;\x20wi'+_0x168149(0x4f4)+'8px;\x20'+_0x168149(0x2d9)+_0x168149(0x197)+_0x168149(0x4dc)+'rder-'+_0x168149(0x1cd)+_0x168149(0x594)+_0x168149(0x54f)+'ckgro'+_0x168149(0x368)+_0x168149(0x2fe)+_0x168149(0x4f8)+_0x168149(0x499)+'5,.25'+_0x168149(0x483)+_0x168149(0x325)+'ion:\x20'+'left\x20'+_0x168149(0x185)+'backg'+'round'+'\x20.2s,'+_0x168149(0x17c)+_0x168149(0x3e2)+_0x168149(0x542)+_0x168149(0x3b3)+_0x168149(0x42d)+_0x168149(0x53b)+_0x168149(0x5c7)+'a-che'+_0x168149(0x5cc)+_0x168149(0x49e)+'\x22]\x20{\x20'+_0x168149(0x56d)+'round'+_0x168149(0x2ae)+'a(255'+',107,'+_0x168149(0x4a3)+_0x168149(0x455)+'}\x0a\x20\x20.'+_0x168149(0x313)+'itch['+'aria-'+'check'+_0x168149(0x497)+'rue\x22]'+_0x168149(0x5ce)+'er\x20{\x20'+_0x168149(0x3cc)+_0x168149(0x35e)+_0x168149(0x2b1)+'kgrou'+'nd:\x20#'+_0x168149(0x5a4)+_0x168149(0x527)+'x-sha'+'dow:\x20'+_0x168149(0x1f4)+_0x168149(0x5b8)+_0x168149(0x59c)+_0x168149(0x3b3)+_0x168149(0x42d)+'range'+_0x168149(0x5ba)+'splay'+_0x168149(0x52a)+'x;\x20al'+'ign-i'+_0x168149(0x4e5)+_0x168149(0x35a)+_0x168149(0x58e)+_0x168149(0x39f)+'px;\x20}'+'\x0a\x20\x20.s'+_0x168149(0x244)+_0x168149(0x37c)+_0x168149(0x498)+_0x168149(0x328)+'ppear'+_0x168149(0x3fc)+_0x168149(0x3e0)+_0x168149(0x162)+_0x168149(0x339)+_0x168149(0x26c)+'one;\x20'+_0x168149(0x2ed)+_0x168149(0x20f)+_0x168149(0x1ec)+_0x168149(0x54e)+'\x208px;'+_0x168149(0x387)+_0x168149(0x187)+'d:\x20tr'+_0x168149(0x424)+_0x168149(0x541)+_0x168149(0x569)+_0x168149(0x565)+'lider'+'::-we'+_0x168149(0x5be)+_0x168149(0x3a2)+_0x168149(0x202)+_0x168149(0x388)+_0x168149(0x426)+_0x168149(0x250)+_0x168149(0x46d)+':\x202px'+';\x20bor'+_0x168149(0x246)+_0x168149(0x4db)+':\x202px'+';\x20bac'+_0x168149(0x536)+_0x168149(0x4e6)+'inear'+_0x168149(0x1fc)+_0x168149(0x5d1)+'#ff6b'+_0x168149(0x23b)+_0x168149(0x5a4)+'d)\x200\x20'+_0x168149(0x2ea)+_0x168149(0x361)+_0x168149(0x3eb)+_0x168149(0x380)+_0x168149(0x5b0)+'-repe'+'at,\x20r'+_0x168149(0x261)+_0x168149(0x499))+(_0x168149(0x5c6)+',.08)'+_0x168149(0x3b3)+_0x168149(0x42d)+'slide'+_0x168149(0x159)+'ebkit'+_0x168149(0x33d)+'er-th'+_0x168149(0x490)+_0x168149(0x498)+'kit-a'+'ppear'+_0x168149(0x3fc)+_0x168149(0x3e0)+';\x20wid'+_0x168149(0x4d1)+'px;\x20h'+_0x168149(0x46d)+_0x168149(0x441)+_0x168149(0x5d3)+'gin-t'+_0x168149(0x484)+'2px;\x20'+_0x168149(0x2f9)+_0x168149(0x204)+'ius:\x20'+_0x168149(0x298)+'backg'+'round'+':\x20#ff'+'6b9d;'+_0x168149(0x17c)+_0x168149(0x3e2)+_0x168149(0x44e)+'0\x200\x202'+_0x168149(0x190)+'ba(25'+_0x168149(0x2f0)+_0x168149(0x2df)+_0x168149(0x496)+'}\x0a\x20\x20.'+_0x168149(0x4c5)+_0x168149(0x508)+_0x168149(0x552)+_0x168149(0x4d6)+'e-tra'+'ck\x20{\x20'+_0x168149(0x2d9)+'t:\x202p'+'x;\x20ba'+'ckgro'+_0x168149(0x368)+_0x168149(0x2fe)+'255,2'+_0x168149(0x499)+_0x168149(0x161)+_0x168149(0x26f)+'\x20\x20.sk'+_0x168149(0x33d)+'er::-'+'moz-r'+'ange-'+_0x168149(0x4c0)+_0x168149(0x332)+_0x168149(0x1cf)+_0x168149(0x269)+_0x168149(0x4f3)+_0x168149(0x3fa)+_0x168149(0x3a4)+'\x20#ff6'+'b9d;\x20'+'}\x0a\x20\x20.'+_0x168149(0x4c5)+_0x168149(0x508)+':-moz'+'-rang'+_0x168149(0x41d)+'mb\x20{\x20'+_0x168149(0x2ed)+':\x206px'+';\x20hei'+_0x168149(0x167)+'6px;\x20'+'borde'+_0x168149(0x1a3)+'\x20bord'+_0x168149(0x4a7)+'dius:'+'\x2050%;'+_0x168149(0x387)+_0x168149(0x187)+_0x168149(0x3d2)+'f6b9d'+_0x168149(0x3b3)+_0x168149(0x42d)+'val\x20{'+_0x168149(0x4e8)+_0x168149(0x3ad)+':\x2011p'+_0x168149(0x272)+'nt-we'+_0x168149(0x54e)+'\x20600;'+'\x20min-'+_0x168149(0x2ed)+':\x2028p'+_0x168149(0x5a5)+_0x168149(0x395)+'ign:\x20'+'right'+';\x20col'+'or:\x20r'+_0x168149(0x261)+'46,23'+'8,242'+_0x168149(0x1eb)+'\x20}\x0a\x20\x20'+'@keyf'+_0x168149(0x488)+'\x20mn-i'+'n\x20{\x20f'+'rom\x20{'+_0x168149(0x566)+'ity:\x20'+'0;\x20tr'+'ansfo'+'rm:\x20t'+_0x168149(0x251)+_0x168149(0x51e)+_0x168149(0x549)+'\x20}\x20}\x0a'+'\x20\x20');setTimeout(()=>{var _0x12ed7c=_0x168149;if(document['body']&&!document['body']['conta'+'ins'](_0x17f3b9))document[_0x12ed7c(0x36d)][_0x12ed7c(0x3c7)+_0x12ed7c(0x20b)+'d'](_0x17f3b9);},-0xcf6+0x232+0x34*0x35),console[_0x168149(0x3cf)](_0x1e6031['uQiES']),requestAnimationFrame(_0x455be9);})()));function _0x387f(_0x7624f4,_0xc094f3){_0x7624f4=_0x7624f4-(-0x2048+0x1*-0xe6d+-0x1*-0x3005);var _0x2071d2=_0x1653();var _0x5039f3=_0x2071d2[_0x7624f4];if(_0x387f['uhcZZd']===undefined){var _0xfe1972=function(_0x4b7fbc){var _0x48bb16='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x11c43d='',_0x1d502c='';for(var _0x5de636=0x1a34+-0x3*0x877+-0xcf,_0x3f916f,_0x5854ca,_0x26da01=0x23e5+-0x34*0x8e+-0x13*0x5f;_0x5854ca=_0x4b7fbc['charAt'](_0x26da01++);~_0x5854ca&&(_0x3f916f=_0x5de636%(-0xea3+-0x1*-0x14f2+-0x64b)?_0x3f916f*(0x1*0x5d5+0x390+0x925*-0x1)+_0x5854ca:_0x5854ca,_0x5de636++%(0x296+0x1da*-0x1+-0xb8))?_0x11c43d+=String['fromCharCode'](-0x1*-0xcaf+0x209+-0xdb9&_0x3f916f>>(-(-0x3*0xcf7+-0x1*-0x11f7+0x14f0)*_0x5de636&0x1*0x1816+-0x2320+-0x10*-0xb1)):0x2f9*-0x1+0x1*-0x90e+-0x1*-0xc07){_0x5854ca=_0x48bb16['indexOf'](_0x5854ca);}for(var _0x160a0c=-0x1dcb+-0x1*0x5cb+0x5*0x71e,_0x4411f8=_0x11c43d['length'];_0x160a0c<_0x4411f8;_0x160a0c++){_0x1d502c+='%'+('00'+_0x11c43d['charCodeAt'](_0x160a0c)['toString'](-0x1403*0x1+0x1*-0x1ce5+0x30f8))['slice'](-(0x1*0x137+-0x83+0x2*-0x59));}return decodeURIComponent(_0x1d502c);};_0x387f['PKoQtS']=_0xfe1972,_0x387f['gDxNdr']={},_0x387f['uhcZZd']=!![];}var _0x4f3a85=_0x2071d2[0xc7*-0x19+-0x6f6+-0x1d*-0xe9],_0x5b1833=_0x7624f4+_0x4f3a85,_0x3ebbba=_0x387f['gDxNdr'][_0x5b1833];return!_0x3ebbba?(_0x5039f3=_0x387f['PKoQtS'](_0x5039f3),_0x387f['gDxNdr'][_0x5b1833]=_0x5039f3):_0x5039f3=_0x3ebbba,_0x5039f3;}function _0x1653(){var _0x43d0a7=['iInMzJy','y3G9iJe','Bw1V','DhLSzq','oIaXoYa','Fdz8mhW','z09iBgi','r1DTA3C','nIWXktS','oIa5oxa','vfnUug4','DZOGmca','zxG7ige','BguUzgW','C3rYAw4','nxmGzwe','tM8GyMW','Ew9Yr1a','mJuPoYa','v0L4veu','BgLUzvq','mtbWEca','sNjmrhq','sxHsExK','mNb4o3i','oYbWywq','yMv6Awu','AwvSza','Dgf0zq','zYb7ihq','tgvACgy','EhDIseu','whvdswG','B2LS','Dg9gAxG','C2STBge','BtOGBM8','CKvnCxq','AwXSpsi','phbHDgG','DtmY','y3jLyxq','zwLNAhq','zMLSBfq','AgLKzgu','tMjVENi','zJmY','z0nSAwu','zuvSzw0','nNb4oWO','C2STBwi','zsb7igq','s0XgveW','ignHBsa','C2v0sxq','yM94zxm','BMnL','oIbJzw4','zw50igW','Bwf4','uMvJB2K','BI13Awq','Aw5NoIa','ne0XmIa','ktSGDhi','B3a6ic0','CMLMlhm','ugn0','cIaGica','CMfTzxm','DgvHBq','u2HHCNa','uurUBvO','uLLgsgy','mNWWFdq','ihnLCNy','v1bUyK4','Dw1IihS','zxH0','qwLTtwe','oJa7D2K','EYbKAxm','DgD6ALG','lJqPoYa','zwq9iNq','ic13zwi','ntuSmJu','oIbUB24','ys4YDJi','rvnqiokaLa','z0Pqvhq','iNrYDwu','mtiGmJe','Ec1ZAxO','ysGYntu','oYbHBgK','mtu3lc4','lxbHBMu','z2v0sxq','C3rLCa','zxiTCMe','mxWZFda','yxa6ihi','BhvYkdi','z2H0','zhrOoJe','lNyX','zxjjza','lwzPBhq','tg9JywW','sgjNBNO','BYbZDMC','Bw9Lvhq','mte3ntKYAxbWtNH2','A2uTD2K','zuXVy2e','lMrSBa','zM9UDa','yvL4vKS','CMvHzey','yNv0Dg8','DhjVA2u','DhK6ide','kdi1nsW','yxrPB24','ChjVz3i','iNnRlwC','AxrLBxm','CIGUmJi','sw5Vs3q','C2STC2W','qLfMA2W','nYWWlJC','Dhj1zq','AxrPB24','DMvyDNO','rhfTsM0','swTMrvC','v2Tou1K','igjVCMq','iIb5mJ0','lZ48y2K','DgG6idy','ugnYuLK','z2LMEq','uvPLwMm','C3rYB2S','lxjHBMC','yM90Dg8','Ee1Hs2C','y2fTsgu','CJSGz2e','ywrPDxm','EdSGyM8','vLbUsKK','zw50u3q','mtGGnIa','Cg9PBNq','B3aGB2y','mIiGy3K','oIa0ChG','ywDNAw4','DgvTCZO','BMq6igW','vKj2BhG','igzVBNq','uxrqq1O','BgLNBG','uMfWAwq','DhjHBNm','i2zMzJa','vg90ywW','Aw5Uzxi','q29SEvm','B3aTy28','DgfYz2u','ChG7igi','zhrOoIa','q0juyxq','CMvTB3y','DhjPyNu','mJu1ldi','sxzfu1C','tLrTBgy','AgfKB3C','z2LUoIa','yw50s1q','CKfkDxq','C3rVCfa','oIaYnha','nZTWB2K','yuXnvNK','nde4mZiWm21JCKP6ta','CMqTAgu','mtaSmte','mca9ige','AtmY','AwrLCJO','l3n0yxq','nwmWidm','zxiGC2m','icaUBw4','mJqSmtC','rfztCfe','Eca2ChG','nxm0idi','ywrK','oc00lJu','BMvHCKC','AMXct0C','mJGPlca','sgTQtMG','BcbJyxa','CNjVCG','i2zMzta','C2STz3i','BtSGFqO','CM9Szq','AxrJAdO','yxrLwsG','Bvr5B0y','zs5dB3i','Bc5ZAg8','sgvHBhq','C2fRDxi','y3rSihS','u2fRDxi','q2fSAwi','zdSGyM8','zgrPBMC','igfSAwC','oIbMBgu','zMXLEdO','Cg9Z','vLvRs3m','Ag9VDgu','mhb4lca','Aw5Ozxi','psiXmci','sg9VAZO','B3bLBG','CKHLAwC','DMLZAwi','A2DYB3u','idnJms4','CKrptLa','tgLVquq','ugLLy2u','C3DPDgm','icaUC2S','ksWGmca','idiYChG','B3iGlJi','y29PBca','CMvUDdS','DYaUmNm','BerjCM0','sevxDgy','DxjYzw4','idaGnha','zcKIihm','svPfsgy','nNb4ktS','vw11C0O','sLrYvw8','y2TNCM8','CMvU','AwDODdO','jtSGyMe','ywrKrxy','oYb3Awq','oI1TB3O','igfWCgW','ideYChG','mJu4m3DuBgveuq','rxLLigG','DhvwBLi','kdi0nIW','yxjKlM8','sMnPuLa','B2XZ','AMzRBxa','CgXHEtO','A1nxtMC','ihSGB3a','CMfUz2u','BNrLCI0','BgrYzw4','AwX0zxi','y3nZvgu','lNnRlxm','ig9Wywm','zg93kda','DhLWzq','ih0kica','q2fWDhu','t1jOB3e','BM9Uzsi','yMfJA2C','Ag9VA3m','mdb2DZS','B250zw4','ldeWnYW','BKjhBeu','AdOGmdS','nYWUmdy','DgG9iJi','rK9wicG','Dw1UCZO','Avfrteu','wenNAM4','ChGGmti','z3jHzgK','lM1Ulwm','BhfPz0q','CMfUC2y','ywTdrui','v2LKDgG','rMnZzLa','quvVuwq','y2HLy2S','lxjHzgK','q0j3ANC','zxiTC2u','Bw4Ty28','vvjbxZi','EKPcwhm','sw5Zzxi','oIbPBNm','oIbJB2W','zMPSB2O','zxi7igC','BI1PDgu','AvP3tey','DLjNweG','CM9WywC','wLP0Axe','CZOGnta','ig9U','DgvYoYa','lJuGms4','mduPoYa','Aw5Mqw0','ms4WlJa','Cg9ZAxq','zJzIowq','mhb4idG','BNq+pc8','zgTPDa','DfLjEvK','yLnlv1q','AxHLzdS','y2fYzc0','zMy2yJK','EdSGDgu','uxvLseW','zgfTywC','Aw5Zzxq','rKngyKe','Fdf8mW','zvfNq3O','yMXL','r3vU','nNW3Fde','rxv0wLC','mcuGBM8','zwfK','tMv0D28','Ede9iJq','BwvZC2e','sNvQsvq','ocWYndi','DcaWida','ChGGi2y','tw92zw0','ihSGzgK','oJa7EI0','pc9ZDMC','DgXLihm','yMTPDc0','u3jlBe8','DgG6ida','yNL2BMm','oIbJDxi','psiJzMy','r3jHDMK','Dw5KiIa','nsWYntu','AfTHCMK','yJLKiI8','lc4WnsK','tM5IB0y','ifvxtuS','y2TLzd0','EcbYz2i','oJPHzNq','ic0GndG','q2HyquG','AwvUDcG','CMTnyw4','oYbTyxi','oYbTyxG','BNvTyMu','ywDLCG','zs5dyw0','ENPpr1u','mNm7Cg8','icjjBNq','EtOGz3i','vhLsq08','uMvJDa','r0v6B2m','tMfTzq','Aw5KzxG','zwmIlZ4','Dfn5CvC','CJO6lxC','BMveyxm','nsWUmdC','sgvPz2G','lJv6iIa','idqGnc4','nxb4oYa','BenNEKe','nsWUmdG','oYbHCha','Bg93lxK','zcaUmJu','FdH8mxW','uxzoEe4','z2H0oIa','zvzHBhu','ndySmJm','kgHVB2S','ntuSlJa','mtSGBwK','yKHsue8','C3bSAxq','yw5Zlxm','DMfS','Dxm6ide','lxvPlhm','tefsA2S','AxnWBge','yxnZtMe','z2v0','Fdb8mq','iLnLz28','zKvvB3e','u2vSzwm','zs13Awq','igjVEc0','zcb7igi','C2Dws0m','yM94lxm','CI1IB3G','ExDKwei','oIaWida','ida7ih0','BhHkEMm','lJjZlca','Ag9VA0m','z3jVDw4','mJu1lde','C0fSv20','CK1ltwy','nJq2o2m','zw50zxi','uwPsDxy','y3Dvy0y','lxDPzhq','ChGGCMC','zwnVAwW','yJnJnIi','CZPUB24','mhb4ihi','idaGmxa','CM9VBq','DdOGoha','ndK4nty0DhPJC0rs','AxrL','DhK6ida','BNmTC2u','BIWGAw4','DMjdvxy','oNjNyMe','Awq7iha','C2jurgC','rKnLzMe','pJWVBgK','CJOGmdS','wgvgu3a','y2fWtvm','nIa2Bde','CMfWAwq','ANDlzxi','zxjH','C3rVCc0','CgXHEwu','y2GTywm','B3bLCNq','y2fSyYG','C2fMzu0','veDwzhi','EcaXmNa','ldeSlJm','lc43nsK','oYbJB2W','C2v0qxq','C2v0uhi','lwHLAwC','C2vLBNq','sNzVrei','ns00idC','B25JBgK','oIaYoha','oIbKCM8','Bgf5oIa','m3WWFdi','AwqTDgu','B2PUAg8','oJiXndC','ywrPzw4','CgDJuuK','BMfNzxi','yMvS','B0ruv0C','zgvMCZ4','ldi1nsW','C2STy3q','ktSGy3u','x19tquS','CMfKAxu','BMCGEYa','igHLAwC','y1H6CKC','CeLUu08','mI41idi','Aw5PDdO','B2X1Dgu','B3nL','CM9YCW','qvveChC','z2v0x0m','quvpv1m','uNv6Cwm','AxLVufe','ENn0q1q','mcWUosK','ic4YCZS','B3G9iJa','zxjTB3y','sxrOqLm','y2XPzw4','C2STzhi','z3jPzdS','BfbSyxK','m3WYFdq','Aw50zxi','r0HYzgG','AwvSze8','D0PdqwG','lc44ktS','EdSGAgu','lZ48l3m','CfPZsNC','DdOGmJq','zhbY','zsGXnta','BMLJA24','wuH6u3y','mcaWidy','ugDmrgC','DuLetgK','Dw1UoYa','EvHcy3O','yxrLtwe','mZuYody3mKXrzxjMsa','yNjYv3K','lwDYywq','pgrLzNm','CM9Rzs0','ChGPktS','zwfYr3i','C0r3sKS','CI1YDw4','imk3ihn0','CI1Yywq','CgfJAxq','B21tzxq','y2fWqwK','BLvZzsi','BgfIzwW','AvPvBxy','zenOAwW','Aw9UoMy','i2zMnMi','CMnSzsa','oIa5mha','AgvHBhq','C2L6ztO','zw5HyMW','ELLxwxa','B2fKzwq','Bhf1y2O','Ag9VA1a','q29SEvy','zhnuCLy','AwfSoYa','mxb4ihi','lJvnmti','DMLLD0i','y2vdAgK','z2v0qxq','oYbMBgu','CMfKiIa','ohb4idm','AvH3yKe','vMLLDW','mJbWEcW','BIb7igi','Ec1KAxi','yxjPys0','y2fWvhi','igq9iK0','ChjLDMu','BgLUzwm','Bw4TAa','lJq1iIa','nJaWoYa','DYGWida','Exn0zw0','C2LKzsa','ihzPzxC','CM91BMq','oIaXmxa','AKLPrhe','Dc1Iywm','B246igi','CwzWCu4','Bw4TDg8','lZ48C3q','owqSicm','mdi1ktS','Ag9ZDg4','ANvTCfa','zs1PDgu','Fdb8nxW','Aw5Ly2e','yw1L','A2u9iNu','AY1ZBgK','qurgvLC','zgvYlxi','oIaJzJy','ls4Wmwu','CMWOi3m','DdOGiIi','y2fWvMK','oYb0B3a','EtOGlJq','iIbZDhi','zxjJyw4','AYb7igG','CMfUC2W','r0nyCLi','yw5ZzM8','mtfWEdS','mJu1lc4','n3W4Fdu','AuPvyKC','mNyY','lNnRlwm','BKnxvva','rMLYzq','tMDWtve','lMLViokaLa','qNDpr0W','yxr0ywm','Bw4Ty2W','z2jHkdi','AhLWB3q','DMfSDwu','igLUC2u','s01tDvi','teTYyuq','idj2mI4','DfDfyLC','Ahq6idi','zNnLDd0','AgPHB0K','y2u6ig4','mJvWEdS','DxnLCLm','ktSGFqO','CMLMoYa','BgvUz3q','EdSGzM8','zxi6ida','vMfSDwu','Bg9JywW','B3bHy2K','qxDHA2u','Dg9Nz2W','B3jKzxi','Bgu7igy','y3rPB24','idi4ChG','C0vts0O','CMvUDem','C2v0','ChvZAa','B21hzxq','psjYB3u','B2TLlwW','mNb4oYa','tND2ENG','tMfTzxm','y29SB3i','C2uSihq','twfUywC','BgLUzvC','y0TvC3e','BfjHDgK','lwnSB3m','mxW5Fde','vfbwvKi','zwXHDgK','igDHCdO','BNqTzMe','Bxm6igm','BMfTzxm','igzPCMu','ldaSmcW','lM9Uic4','ntaLoYa','DgfU','z3PQDwi','ys51As4','CgfJzu8','B2TLpsi','mtiXmJe1mgPYBuHtqG','BMu7iha','Ag92zxi','BgLUA2u','ndC0odm','sff1yM8','nsiGC3q','AxPLoIa','B2fKkq','B2rL','nZKSmtq','AY1NCMe','y2fSBa','mZuSmJq','iJiXiIa','vvfiDwC','oIbYz2i','qvz2Ewi','C2HPzwW','oYbIywm','zMXLEdS','BgLUzxm','rK5tt1G','y1zhy0O','oYbMAwW','yJSGDxm','igrPC3a','Bg93oIa','ys11As0','zgLyrLm','Dw5KAw4','nYWXntC','C3rLBMu','C2STDMe','B3i6ihi','vhjHBNm','D0Dts1G','AMrIzKW','nJi4mZu3BxvlrhLS','y29UDge','sfrnta','q2TPC3m','DxforKS','rfD1sxm','yLvWrue','lJuGms0','iM5VBMu','idi2ChG','Bw92zvq','BZSGzgK','EI1PBMq','vw5PDhK','Dhm6yxu','C2HVD24','CM9Wlxm','zvn0EwW','q2fTzxi','DcbPzd0','ntuSmta','AgvPz2G','y1vPDuC','BdOGBM8','CMrLCI0','kdaGmca','iJeIihm','lde1nYW','mJzWEdS','m2mTms4','C2nHBgu','CKDerNi','phn2zYa','yw5ZBge','BgfZDeu','BNnMB3i','mJqYlc4','C3rYB24','mcaVihy','nhWXFdy','DwKTC2e','D2LKDgG','yxa9iNi','ohb4ktS','nsWXmdC','Dg9W','igfSBdO','zvjLy3q','igfIC28','Dg9YqwW','Aw9UoIa','idrWEca','BxnT','yM9Yzgu','CNnVCJO','BLDVBLe','BwLSEtO','FqOGic4','CMDIysG','idfWEca','BtOGDhi','A2rYB3a','nti2mtqWmerWz1rjCq','mNWZ','ida7igi','Agf1wxm','D1jVB3q','y0zszuG','q1Plt1C','ihn0CM8','DwLuqMu','Dg9Y','z3jHDMK','zMLSBfm','mNyYlMK','yxvSDa','rMLLBgq','Aw5WDxq','DgLVBJO','C2STC3C','EgHjwKO','C3bLzwq','s2X2B3G','igzSzxG','BNrszwm','Awr0AdO','zgLZCgW','CMvMAxG','sKnnwgm','yw5LBc4','BMvSihS','sKL2uLu','u3nWrvu','AwvK','mtiGm3y','Bg9YoIa','tMDrzhC','yw5ZAxq','zM92t3y','zxjYAwq','A2L0lwe','Ad0Ims4','DuXREwG','nYWUncK','ncK7igi','BgvMDa','AgvHwgu','idqTnc4','CgXUDhC','yxbWBgK','zxnZihS','mdSGzM8','ndGZnJq','BM9tChi','q29TyMe','whPPrwS','oYbWB3m','zwfYyw4','DxLNAvO','ywLTtwe','Ag9VA1m','lxnSAwq','y2L0Esa','C3r5Bgu','B3vUzdS','tNbzA24','Dgv4Dee','Dg9Wlwm','EgTTqKe','z2v0q2W','AxngAw4','zuPMC2K','zw50tgK','z2v0q28','CgfYC2u','AgvHzgu','DhKGlJm','ihjVB20','z2fWoIa','DhKGmc4','thHArM0','B3n0ihS','A2v5zg8','v2zZBgS','C1nNsM0','v3fYAu8','C2v0ida','oIaXnha','wfLHDgi','DMu7ihC','ignLBNq','oYbNyxa','t2nxwfu','yxv0BW','ide1ChG','idaGmJq','ltqTnY4','yxiOls0','zgv2Awm','Bw4TCge','Bu5jtxK','ysGYndy','q1Hvyuu','pJXZDg8','Dw5KoIa','DgG6idm','B25TB3u','zxzLBNq','FqOGicO','yM9KEq','BwLU','s2vMu0y','vvDnsYa','zfH5rfu','ugXHEwu','tLznyKq','ihbVAw4','wKHZv2e','A3fABMu','zwnLtwC','mciGC3q','lc45kq','mtfWEca','C3bHBG','zgvYihS','vfHpzvy','De5hAvK','zw50','jsKGmta','mtjWEdS','zxqGmca','EdSGFqO','DxjSkcm','BM9szwm','y2vS','igjHy2S','BMfIBgu','zw50ic0','BMu7ihm','Aw1HDgK','lJjZoYa','ufHYD0m','ysbdBgK','ic5TBI0','B2XVCJ0','zxq9iJa','C3r6CLy','oYbTAw4','m3WWFdu','EhqTywW','mcWWlda','z2v0x2y','EcaWihi','C2v0x0m','y2vUDgu','BMqIlZ4','sM5Pqxu','nduPoYa','DdOYnNa','yxa6idG','CMvWBge','y2XVC2u','C2XPzgu','mdCSmtu','B3vUzdO','C2v0ug8','uNvUDgK','nNb4idy','ihbVC2K','s0Pgrvq','zw50vw4','D2vIA2K','mdSGyM8','lxnPEMu','ldiXlc4','AKjlz04','AwrLCG','B1jLy28','AxrLige','oYb9cIa','z2fTzuW','lJuGmsa','tgLZDa','zxiIlca','BNPywee','D3jPDgu','Fdj8na','ywrVDYa','BK1VCMK','sg1UtKW','DdOXmda','uK5cA0S','CKDmwgO','Aw5Z','ze9dEeO','Cd0ICM8','AwDODa','yMvNAw4','ig5Vihi','yxbWzw4','lJuIigy','t0XWBwe','y291BNq','CIGYmNa','BgvMDdO','BNqTC2K','icGYDJi','Bg9N','Bw4TBwe','vgTwD2K','zdOGi2y','oIbHDxq','ocKPigq','C2v0tgK','oYbSzwy','yxK6igy','vJjFxW','B3jTic4','rw5NAw4','s3DlAva','Dg1MzeK','oYb0CMe','B246ig0','CKjvCxK','ig5VBMu','zs1SAw4','C2HHzg8','Dw5PDhK','z3b6tNq','AuzsD1u','mc41','nsaWlti','nsaWidi','zxjKB3C','lxDLAwC','CcWGnta','lxrPDgW','ltiUns0','uvfTshy','Bg9Ypsi','DMC+','v2vItw8','ANbfueW','z0Dwyxy','oIbNCMK','t3LfEKC','yxb0Dxi','z2v0qM8','CujiBvy','zwfZzsa','ywnRz3i','mtbWEdS','yw5JztO','B3vUzca','Bw4TBg8','Afjnr2q','mIaXmK0','ueTjsfi','seLnEfy','pJXSAw4','BNrezwy','sNvTCca','nefxzw9fCa','ndvZigm','zgL2','yMfJA2q','A3vPC1m','ENznsxG','Chv0','CxvLCNK','C1fOz04','zxjPzG','Dgv4Dem','cIaGlNm','zMLSBd0','ChrY','vMLKqKO','BuzAz3K','oIbIBhu','zM9YBq','CMf0Aw8','nZGPoYa','wu16BKm','C2STy2e','CIb7igm','zs10Ahu','Ate2','Ag9VA04','ihi9iJe','t1PdCe0','u2Xrtu8','Awr0Aa','yw5ZCge','DMvUDhm','lxrYywm','Bhv0ztS','C2v0psi','rwDJqwe','y2XHC3m','z2jHkda','yMfADfq','ic5ZAY0','CKDNDKG','qxnZzw0','iIb5mt0','D29YBgq','rNDqqxy','B3HWy2K','zvbSDwC','vNfoyKG','zgvYoIa','ihbHzgq','Aw4OndG','t25fBMe','Awv3','oYb0B3u','AgfYq28','r3L5sKu','iJmIihG','DhLqy3q','yM5fAgW','oIa2ChG','DfjVB20'];_0x1653=function(){return _0x43d0a7;};return _0x1653();}
