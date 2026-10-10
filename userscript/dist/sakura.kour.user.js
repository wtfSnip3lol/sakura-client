// ==UserScript==
// @name         Sakura Kour (kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.4.0
// @description  Sakura menu for KourStrike.io — combat/movement/visuals over UWMK hooks + overlay
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
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
                        const injectName = useHook.typeName + "xx" + useHook.methodName + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.makeId)(8);
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
function _0x4d7d(){var _0x4d9343=['ltqTnY4','vu1lzMy','BI1SB2C','BM90zs4','oNbVAw4','swyGCMu','qw1TBYa','Bhv0ztS','wwHYA2m','ywz0zxi','ie9olG','cIaGica','BMC6ida','zxrL','BsbYAwC','z29K','qunuAYa','DgvJDgK','q3vZDg8','BNrezwy','yMX1CG','CgfKzgK','u0fgrq','DdOGmtu','Dg9Nz2W','ocKPoYa','r3vXA2K','mJzWEdS','CMvSB2e','u09cEKq','BMq6ihi','ywzIu2W','BM93','DgL0Bgu','q291BNq','DgG6ida','DdOGnJa','Aw5Mqw0','yw9qENm','mNb4ihu','AxrSzsa','u1nRtgm','B3i6icm','igDYyxy','ywLYlG','DcbZDge','ENDovue','AMDozhe','CgzoqKm','CLfWt0y','Bw91C2u','ndySmJm','Bg9NBY0','mcaXChG','B1Dut1a','BMLZAgu','Dg9W','rejnwuG','BNnPDgK','lxnPEMK','BgvMDa','idaGnha','CI52mq','lc4WocK','zxi6ida','EvPqz0q','D2fYBG','AuDQvuq','oYbYAwC','ug9ZAxq','u1rvvKm','BgWGBwu','DgvZDa','ywXPz24','turcEu0','zxjZ','CYbQDw0','zw50','ig5VigG','uMfWAwq','mJSGC3q','whHYsKi','ktSkica','B24Uzge','AgfPCG','yxa6idG','idmYChG','BNrLCI0','zxi6oI0','BM9UztS','vg90ywW','Aw9FnZi','C3rLBMu','u05JAfe','B3bHy2K','zxzLCMu','AxPLoIa','AtmY','y2HtAxO','EdSGywW','i2zMnMi','CgnZ','s2XvCwS','t1vsx18','BMvS','C2fRDxi','CMXHEsa','yxrSEsa','EYbJB2W','zsb2ywW','iezquW','CMeTA28','yw1Hz2u','ys11Aq','B2rLu3q','ldiXlc4','C2STC2W','CgvHDcG','oYbQDxm','A3nty2e','oYb3Awq','C2STCMe','s2v5vW','DgXhDe4','A2uTD2K','oIb0CMe','ns00idC','oIaZChG','nIa2Bde','mxWYFdm','DMfS','y2HPBgq','C3bSAxq','y29SB3i','C2fMzq','AgfOzLG','oIbPBMG','mxb4ida','idnWEdS','lxjHzgK','ywqGDg8','B3vUzdS','yMvNAw4','B2fKzwq','Bw1VifS','mNb4oYa','uKv5B1q','z2jHkdi','yxjNzxq','CMvWzwe','ihDPzhq','Aw5Zzxq','EhDfuw8','lc4YnsK','u2nHBgu','DMLLD0i','Bw4TCge','icaGzgK','idjWEdS','zwjRAxq','CNP4DgW','lwHVCa','C2v0vhi','mtSGyMe','oJiXndC','ifvjiIW','zxiTzxy','EhPWthq','vunvEuK','lJq1oYa','lwL0zw0','zxiU','zs1PDgu','uvLvthC','B250zw4','Axb2A20','lcbPBNm','u1LwBfi','yxbWzw4','nYWWlJC','zxH0','zuD5u28','idqGnc4','Fdf8mNW','BKfMswm','AKr3Bfu','mZuSmJq','A2vizwe','B2voC0O','BLffq2i','igzVBNq','C2HVB3q','zdSGyMe','rvHqxq','tuLtu0K','DMLZq28','C2vKrMK','lc40ktS','zw50CZO','ywn0Axy','sw5ZDge','zMuGBw8','zMjIAeu','Ahq7igm','ihbSywm','u0L4DKO','yunKEey','icbIywm','CxDmy1q','mJu1lc4','Bg9Hzca','y3nZvgu','icaGica','C2STBge','x19tquS','yxrLCY4','oIbMBgu','mdb2DZS','oYb1C2u','AwjSzq','yMnuANK','CNnVCJO','DMC+','AdOGnJi','CMfUz2u','C2STy3q','Bw4TDg8','C2vLBNq','ieaG','BgfJzs0','C2STy2e','q0HjwuG','uNDWCuC','ntaLktS','u0flvvi','oJa7EI0','nJiWChG','BIbLDMu','u2fZvuy','Bw4TC3u','DhLSzq','idaGmJq','oIbHyNm','EYbMAwW','zsXTB24','Aw5NoIa','CIdIGjqG','lwLVxYO','vfzdqNK','vNvtCvm','DNCGlsa','sxrLqxO','BhrLCJO','Bw9fEha','BwuG','v2vItw8','rLbtigm','zcb7igi','AY1Jyxi','igzPBgW','DhjPyNu','ChG7igi','DLjPveS','DhD6r1m','Awr0AdO','Fdv8mxW','ihn0CM8','lxrPDgW','icaGyMe','thn0uvu','s3nLtgq','yMvS','zZOGmta','ELLlwwy','DgztzvG','CMrHwfO','oYbJB2W','C3zNiJ4','zuv4Ca','Dw50','zMXLEdO','D2r4D3C','igvYCG','D3jPDgu','CMDLDey','B2X1Bw4','ndGZnJq','zMLSBfm','oMHVC3q','zMr4t00','Bw4TAca','u2fRDxi','zwXLCMe','mtfWEca','ywrK','qNzOtKy','zwLUC3q','mdSGFqO','ihWGz2e','ihWGrvi','s2vLChm','ocWYndi','BwuGAw4','zw5LBwK','vvjMruK','DxztyNO','Ag9VA3m','CNq7igC','BhfMCKe','mxWZFdy','oYbMB24','ywrKAw4','ChbLyxi','B2LS','tKvOvgS','zMLSBa','Dg87zMK','B2TLpsi','ihrOAxm','DgXPBMu','zw1ZoIa','CgXHEtO','vvDnsYa','oWOGica','zgvSzxq','Bg9YoIa','icaGkIa','CMqTAgu','y2fSBa','nMvLzJi','tfPMufq','AguGDxm','CI51As4','Dw5PDhK','Bgf5oIa','igfSAwC','ztSGyM8','lJv6iIa','B3nPDgK','nNWYFdK','BhKGkhi','C2STBM8','r1rksg0','DxjUCYa','kc4YmIW','yxbWzxi','zwfK','oI13zwi','B24U','qMXVy2S','icaGlNm','Dcb7igq','oIbUB24','CMqTDgK','Bg9Hzhm','BM9szwm','sfrnta','psjYB3u','ihSGB3a','zxPPzxi','AenWDfm','v0fttsa','lw5VDgu','zgL2','igjHBIa','ohb4oYa','EYbMB24','BMnL','u3rHCNq','Axr5ig8','D0jSDxi','t0fIAwO','zsb0CMe','DgvYoIa','EvjjBNi','y2TLzd0','A2v5Dxa','phn2zYa','y2f0','Awr0Aa','Bg9HzgK','B3vUzdO','z2H0oIa','q1fYt2q','z29Ksw4','BJOGy28','BcbKCMe','sw5MAw4','zMLSBcW','Bg9Hzgu','BMnLv3i','iokaLcb0zq','B3i6iha','CZOGyxu','y2fQufu','Fdv8nhW','ChGGDwK','lMrSBa','ig9Wywm','C2f0Dxi','zwz0ic4','zNbZ','nYWUmJG','zgfTywC','CM9ZC2G','nMi5zci','mtiGmJe','igrPC3a','CgfJAxq','sw5PDgK','mIaXmK0','yMDtEMu','BgLUzwm','DtmY','CYbYzxq','CML0zxm','EdSGyMe','y3jVC3m','q2Pfq0S','mJqWiey','Fdb8oxW','AwX0zxi','uNvUDgK','AMfXqNq','zxG6mJe','iokaLcbOBW','DgG6idG','DefKAKq','y291BNq','zenOAwW','DhjHy2S','tg9Hzgu','zMXLEdS','AfznsgW','Dhm6yxu','v01ligK','Fdn8mhW','CM9SBgu','tgLZDa','C21HBgW','psjTBI0','DgLVBI4','AM9PBJ0','CvPYBNe','ChbSAwm','C2XPy2u','zMP1z3a','u2v0vge','EdSGAgu','C2v0','igXLyxy','vgHMtKq','yxjHBMm','mhGYnta','mJuPoYa','AwXLzdO','lxbHCMu','ysblB3u','lxnSAwq','iL06oMe','lwfWCgW','ihf1zxi','yxr0ywm','q3zOvem','qxbWBhK','u1vfDMq','mtrWEdS','lNnRlwy','C2f2zq','DxjZB3i','oYb9cIa','nsWUmdC','EYaTD2u','ihbHzgq','CMvWBge','DxjH','Ec1KAxi','C2HHzg8','BguGC3q','Aw5Uzxi','mtSGBwK','C0ruD3C','mdSGyM8','DhLWzq','CgfYC2u','zNrLCIa','wMDztK0','B2XVCJS','kdaSmcW','nNb4ida','zxjSyxK','mdi1ktS','BhrO','tw92zq','BgfIzwW','zhrOoIa','nwmWidm','tLDxr2q','sgLRuuW','rNDRthy','icaGlM0','C3rYB2S','odaSmtK','BNnWyxi','BfjHDgK','zM9YBtO','yw1L','Bw92zvq','mtjWEca','lNnRlwm','DeHHBMq','BKfyEeS','ic40oYa','DgLVBJO','DcWGCMC','FqOGica','zuvSzw0','B2XVCJO','jsK7ic0','Fdf8mti','igfIC28','ywiUywm','AgvPz2G','tM8GuMu','yxjLBNq','B3rZlG','mNb4o3i','Bgv4oYa','DgvYigm','D2vIA2K','B3vUDgu','nhb4oYa','BgvUz3q','zgrhse0','zw5LBxK','EMu6ide','DgfIAwW','lJa4ktS','Dgv4Dee','ideYChG','D3rxyKi','4Ocuig92zq','mJqSmtC','idaGmca','yxK6igC','ig1HCMC','uMvJB2K','oYbVCge','AgvTsK8','Bw4Ty2W','ihSGzM8','B3zLCIa','Dc1ZBgK','EcaWoYa','Dgv4Dem','EdSGBwe','zgTPDa','CMvSEsa','ic5TBI0','v0P4EhC','ldiZocW','B25JBgK','y0nPy2G','EKziBwK','idi2ChG','zxjZy3i','yxnLBgK','B3zLCMy','B246ihi','Bxm6igm','AKj0Cvq','ntuSlJa','ih0kica','zwvMmJS','Bg9Y','A2DYB3u','ChbSAwu','BwrLC2m','y2fWuem','nhWXFdG','vuL4yxe','B3n0zMK','lLjqq1q','CKjxAe0','zejqA28','mg1ZlG','yM9KEq','Dxm6idy','icnMzJy','l1jnqIa','AMf6BfO','ide0ChG','zgLZCgW','lxnHBNm','mtf1zhvms3O','BwLKzgW','igf1Dg8','t25eyvi','BMCGzM8','CMfUC3a','CxHJCgi','j3qGC3q','ywqGEYa','igDHCdO','AxnPyMW','ENvXBeW','uuv4suu','ignLBNq','uMvJDa','DhK6ic4','uIb2ms4','idqTnc4','ugf0Aa','AwrLCJO','ignVBg8','oYbIB3i','n3WYFda','BwL5wwy','DMvYihS','CMvZDg8','AgvHzgu','Dg9WoJe','C0XRtgG','CdOGmta','t3z6CeO','mhWXFdm','ihrYyw4','s2v5C3q','nxm0idi','re9nq28','mNWZFde','y1bgA1O','wxDVqw0','sw5Zzxi','icaGic4','nde5oYa','EMDoDwS','AwyGC2u','oYbIB3G','teffBLa','ntuSmJu','wKrXwva','AxrLiee','Dgv4Dei','CZOGy2u','tMj6vgq','C2fMzu0','sgLKzxm','DgXL','ohWZFdy','DMfSDwu','zciVpJW','CMfKAxu','z3jPzc0','BerSrMe','EtOGzMW','yMPwvg8','DgvYoYa','A3ndChm','wKPsCfO','ysGYntu','CgLyD3y','w3nHA3u','B29Rihi','qNP5B1i','zg93kda','AwrLCG','Aw4TD2K','odbWEcW','BgLJyxq','CeL5ufC','msWUmZy','Dxm6ide','y3bfywq','AxiGBgK','qKnADxC','EuXTuwO','Bw4TBwe','z2v0','wufzwhe','ChG7igG','wKfjDve','zwLNAhq','ywX0Aca','yxbWzwe','i2zMzG','u3rHDgu','CgfZDc4','iIbZDhi','owqIihm','DgvTlxu','CMvHzhK','B24Oks4','CI5HDxq','mtySmc4','rgLZywi','Cg9ZAxq','B29RCYa','nJTWB2K','zsGXnta','D0nVBg8','ksaWida','rxfjt3G','yM90Dg8','igjVEc0','DxrVoYa','FdeXFda','CMfUC2K','tvzNuwO','q2TWu1G','CMLZAYa','Bw4TDgK','D2LKDgG','kYbHy2m','lcbZyw4','CM9WywC','ndC0odm','yxrLkde','CMvHzey','mxb4ihi','ifvxtuS','DhKGmc4','u0fgrsa','AgfZ','BwvZC2e','BM9Uzq','zuTvCfi','Bg9N','Bw4TBg8','ihjNyMe','zwfKB3u','zgvYlxi','CMLKoYa','CYbPBNm','y2HLCYa','zMXSBMy','yNbRsgG','ifTfwfa','igjVCMq','idi0iIa','AgL0zeO','AxHLzdS','zxiTCMe','AMrArNu','zMLSBfq','BsbJzw4','zMLUza','zw50rwW','oYbMBgu','nxb4oYa','yw5LBc4','yK1YExa','quXfue8','AY12ywW','mcWWlJC','y2vUDgu','Bw4TAa','ifDLyxa','zxzLBIa','yxv0BY0','CYb0AgK','BNqTC2K','oIbYAwC','ywLSzwq','Bwf4','yxvLsMS','CNjLBNq','DePYCLK','CJOGi2y','CMvHza','yMeOmJu','C3rHCNq','CM9Rzxm','s0TYBgm','ExH6AvK','Aw5KzxG','rM1wvuu','pc9ZBwe','yMTPDc0','iKLUDgu','ldi1nsW','CMfUy2u','z2zuvK4','AwvKigm','AwDUlwK','u2HVB3q','sMPiD0K','EeTtB2y','ExHIBM0','C2STyNq','rgnnq2q','zMriyxG','BgLUzvq','twzfDxq','yMfJA2C','Dc1ZAxO','ndSGFqO','Aw46ida','y2XLyxi','z2H0icS','zIXZExm','lc43nsK','u2LHs3G','q29SB3i','zc5VBIa','yxbrDgS','D2vPz2G','AfTHCMK','BuDoqLm','vgfRzuG','BIb5B3u','EYbIywm','A3nqB3m','y2fWu2G','z3jPzdS','DgXLCW','mtGWrLvnt1rP','BMDL','iejHBM4','C3r5Bgu','zLPuqK4','BYb7igq','z3jVDw4','DxD4wwm','z3jHzgK','iNjVDw4','wLvIwKK','twfPBK0','lZ48l3m','BMX5kq','z2vODKO','rMLLBgq','otK5lIa','kdeUmsK','lxnLCMK','y2vdAgK','BNnLDca','DwTXteO','B2TZige','CIGYmNa','B3jKzxi','CMvMAxG','DhjHBNm','B3C6igK','mtu5ndu2wxLwvwLI','AwDODdO','igLMihq','EYbKAxm','Dg9WoIa','zNvSBhm','t3v0q00','CM91BMq','zMy2yJK','B3G9iJa','nsK7ih0','Bw4Ty28','ihbVC2K','BgXIyxi','mZbZy2ztDxO','ntiWmvr0rK9TCq','BtOGnNa','igrHBwe','uunzCLq','nhW3Fdi','y29TCgW','B290vgK','y29SCZO','D2fPDgK','oIbKCM8','Bgfku2K','zZOGnNa','B21PBMC','mNb4ide','qxnZzw0','zsbJEd0','yMfJA2q','ywTLsgu','idi0iJ4','yw5ZzM8','Aw5JBhu','BY1ZDMC','idGWChG','EcbYz2i','igHLAwC','DdSGFqO','lwjHBNi','AY1OAw4','r2v0vMK','CMfTzvi','zgLUzZO','yJLKoYa','lcbJywW','B3zLCMW','zM9UDc0','DdOXmda','zgrPBMC','z29KuNa','uJOG','BgfZDeu','AxHzAuy','z3jHDMK','y2TNCM8','yM91BMq','m3W0Fdi','mdSGy3u','ihbVAw4','qwrIBg8','r2v0q3u','BI1TywK','yNjPz2G','lc4WnIK','ChG7igy','zvbPEgu','zvzHBhu','nsWYntu','CJSGzM8','ChG7iha','thniruq','nYWUmsK','lwXPBMu','igjHBM4','v2LKDgG','whnvvwG','ig9U','rNLIzMq','B2rL','ida7igm','v0fdue8','oIbYz2i','yu9lzhm','Fdb8na','s3HyBKu','BNqGyNK','weXLzxO','ic5ZAY0','DMG7EI0','AxnWBge','vwDZs1a','zcWGi2y','DgvTCZO','q3zzq2i','te1c','zsb7igy','DxjDig0','yxrPB24','EtOGz3i','vg15rLu','zhfTtfq','nNb4idK','y2HdB2W','lxnJCM8','ide2ChG','Dg87ih0','CM9Szq','yxj0lG','BMvHCI0','ChGPoYa','BsbSzwy','zwCGzMe','zgvYoIa','BhvYkdi','BMu7ige','qw1TBW','C3bLzwq','BtOGmJq','EeHZDgu','DdOGmJG','EcKGC2e','sMLYDNi','C2STAgK','Cg9PBNq','rgLgEuG','oIbJDxi','rLbticS','ugn0','nNb4oYa','zJmY','oYbOzwK','zdOGi2y','BwfNzs4','igzSzxG','C3rYB24','B3nWywm','BMvTEsa','s2v5uW','BNnSyxq','Cefdu3y','iNrYDwu','ihSGD2K','yxLLCNm','y2vcsfK','DhKGjq','icaUC2S','uuvsqMi','yxa6ide','zwXK','mJu1ldi','z2v0sxq','CeP2AKS','iL0GEYa','D1f6ugO','B2LUDgu','DYGWida','ys5RB3u','tMfTzq','r3HUEfm','mtGGnIa','B3i6ihi','ywrKrxy','u1fWuNG','DgTIuNO','vgHLC2u','z09mz2e','y3jLzw4','C2vSzwe','AwXS','C2vUze0','tfLmsLG','y2XHC3m','mJu1lde','A25ABMm','zKXWv2q','DgLMEs0','i2zMyJm','Dc1Iywm','rK1Ns0O','zguSihq','tgvMDca','AwvSza','BMvJyxa','B25PBNa','vg5NCLm','v2LWzsa','B25SEsW','Ag9VA1a','icaUBw4','Bgv4oIa','zxjYB3i','psiJzMy','Dw5KoIa','iM5VBMu','DMDxvhq','DMLZDwe','CKLWAem','B3b0Aw8','s2v5ra','ywjSzs0','EdSGyM8','y2HLy2S','zxiGC2W','DK52Cva','oty3mdK0y3v6tND5','zxi7igC','iJeYiIa','A09QBgS','y29Kzq','C2v0x3q','zxzLBNq','oIaWoYa','zs5bCha','igjHy2S','C2v0qxq','B3C6ida','qvPNr00','u01kAha','lwHLAwC','vvjbx0S','y29TyMe','igq9iK0','Aw9F','mdCSmtu','yM9Yzgu','vw5PDhK','CMrLCI0','AxvZoIa','zw4GDg8','CI1Yywq','lxDPzhq','rw5NAw4','lc4WnsK','DhjVA2u','oYbIywm','oIaWide','zvn0EwW','tNzpv0e','ywXSihq','lc40nsK','yxjPys0','yw5Hz2u','zw51ihi','nZTWB2K','idrWEdS','BMqIihm','wLLzEKe','phnTywW','y29UDgu','lMLVig0','vw5Uy20','zxmGEYa','ChG7ihC','qNncBfK','zw1LBNq','vfPoD1K','tu9ersa','B246igW','D2jovMG','CNjVCG','u2vSzwm','A2fbtwK','oIaIiJS','oIa4ChG','B2f0Eq','zxnZywC','C2STy28','zJzIowq','BwjVzhK','Aw9UoMy','EYbIB3G','ihSGzMW','yxnZAwC','uunNBem','DdOGnZa','khjLBg8','yuPxr00','Aw5WDxq','CKLUChu','zgvZyW','oIaYmNa','ztSGD2K','ztOGmtm','lwjVEdS','A291CI0','ktSGFqO','A1v3DxK','C2v0uhi','y1zVy0O','BgvZiem','qvnnwxi','zdOGBgK','u0DAEMO','zMLSzw4','BI13Awq','rxnprg8','C3nPC3q','zgvZ','C2HPzNq','BgWGz2e','C3bSyxK','AxrJAa','Aw50zxi','Eca2ChG','lM1Ulxa','nc00lJu','AxfnyLe','C2vSzwm','mtbWEdS','ltiUnsa','Bw92zq','zKTTCK8','DgG6idi','Dw5Kl2e','zxnJ','Aw9FmZa','rxHW','oIa0ChG','Axr5lG','CJOGCg8','yuTVDxi','yMHVCa','CMvU','C250z08','zKHmzMe','z1bfCw8','B3vUDc4','kYbmtui','iffdigm','ls1W','DgvYlMW','CKnVBNq','zgvYlxq','ywrPDxm','ldePoWO','ysGYndy','z24TAxq','mtjWEdS','C2u6Ag8','uNnWAgi','A2uTBgK','yw5JztO','mhb4oYa','CMfWAwq','ihSGy28','tgHWr1q','CgfYzw4','nJq2o2m','mxb4oYa','Axr5oIa','BI1JB2W','zM9UDa','mJiWotC0zxPNwMf4','phbHDgG','C2v0ida','C3DPDgm','lwzPBhq','y3rPB24','wvvxvM0','Cg9W','z2v0rwW','q1btihi','Bgu7igy','oIaXms4','BMq6ihq','BNrLEhq','CMDIysG','B250lxC','mciGCJ0','Fdr8n3W','y2LYy2W','ihrOzsa','ienquW','u1f0txC','CMvUDem','C2STDMe','B3nLihS','CZO6lxC','uNP3Exm','yMX5lum','ywjSzsa','oty5mMPUt1jAva','CIbJDxi','BgLNBG','CZPUB24','mZu3mtC4nwrMyuzduW','oIbWB2K','ote3nLfpsvDLqG','DxDTAW','nsaWlti','ihSGCge','s0f1A2S','mNb4ksa','uMf0zq','mwzYksK','B2HOs2W','z2v0q28','CMrLCJO','vvDnsW','ihSGzgK','zw50zxi','y3jLBwu','A3ziswC','kdi0nIW','z0LbExO','Bxvsq2W','mNm7Cg8','ihjLBg8','sgvPz2G','ywrIBg8','EdSGCge','vgfRzxm','ohWZFdu','y1LKyNa','mcWWlJG','Acb7iha','y2DqqMm','zdSGy28','r3jHDMK','ihWGCgW','y3vosKG','z2LMEq','C3rYAw4','DZOGAw4','DhLqy3q','oYbHBgK','C3rVCfa','zhbY','mcWUntu','nxmGy3u','B2r5','CgfZC2u','zw50tgK','DhjPzxm','ida7igi','ic8GDMe','zMLSBd0','ywqGD2G','vw9Lr1y','icnMzMy','Ag9ZDg4','vg5mBeC','ihzPC2K','igzWCW','zw5HyMW','igv4Axq','mJiSocW','zhjVCc0','rNLJwvO','tKCG4Ocuia','BMHKBxO','icaGig8','EdSGB3u','qvLur1K','wgfcu04','y3jLyxq','lJuGms4','C2STzMK','t25SEsa','D25YAxu','igTVDxi','ignHBgm','vNDIvum','vvDeCvu','BuXPquO','wwHZs0S','ig5VBMu','ywnRz3i','nsK7igi','zwv6zsa','DgvYlG','Bgf5ig8','zxnwAxm','z2fTzuW','ltiUns0','Ag9MsKO','BhvTBJS','wxnLtMS','quXMC1u','ChG7ih0','BNrLCJS','AePotLi','rgfTywC','Dg9Y','qu9ls1C','wuTyDKm','nYWWlJm','ksaXmda','y3K9iJe','q1nzuLG','Aw4GC2e','ldeWnYW','mJiZmti2nZbvCxH1Exi','idrWEca','Axb0kq','iJeUnsi','ANvTCfa','BgLUzw4','CM0GlJq','zwnVAwW','CYbPBMm','yxbWBgK','qsblt1u','zgv2Awm','CMLNAhq','ugXHEwu','B25TB3u','lNnRlw0','BunTvuu','uujyqMy','C2HVD24','z2v0qxq','ohb4ksK','v2v3ufa','y2fUDMe','ohG5mc0','nxW2Fde','BwLZyW','B3nL','ChvZAa','yxrLlwm','x19ZywS','yNv0Dg8','C1bmyuq','BNrLBNq','r29Kl2q','Aw9U'];_0x4d7d=function(){return _0x4d9343;};return _0x4d7d();}function _0x2601(_0x17beef,_0x1e8bdb){_0x17beef=_0x17beef-(-0x1*0xe21+-0x226*-0x7+0x88);var _0x46ad53=_0x4d7d();var _0x506570=_0x46ad53[_0x17beef];if(_0x2601['mhTitt']===undefined){var _0x2b162c=function(_0x24d2ab){var _0x28a396='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x249f28='',_0x27b561='';for(var _0x1f86cb=0x5*-0x2bd+0x1*0x10f1+0x34*-0x10,_0x338bf3,_0x493667,_0x525f77=0x87d+-0x24ea+0x1c6d;_0x493667=_0x24d2ab['charAt'](_0x525f77++);~_0x493667&&(_0x338bf3=_0x1f86cb%(0x1365*0x2+0x20b0+-0x4776*0x1)?_0x338bf3*(0xcf5+-0x1*0x248d+0x7*0x368)+_0x493667:_0x493667,_0x1f86cb++%(-0x1cc0+-0xf4*0xf+0x1a8*0x1a))?_0x249f28+=String['fromCharCode'](0x1069*-0x1+-0x1eca+-0x2*-0x1819&_0x338bf3>>(-(-0x1caf+0x4a7+0x180a)*_0x1f86cb&0x1229*0x2+-0x1911+-0xb3b)):0x10d1+0x2*-0x4c1+0x1*-0x74f){_0x493667=_0x28a396['indexOf'](_0x493667);}for(var _0x5de198=0x2008+0x1c83+-0x3c8b,_0x10e97e=_0x249f28['length'];_0x5de198<_0x10e97e;_0x5de198++){_0x27b561+='%'+('00'+_0x249f28['charCodeAt'](_0x5de198)['toString'](0x1020*-0x2+0x1*0x21e2+-0x192))['slice'](-(-0x3*-0x50+0x1645*0x1+0x1733*-0x1));}return decodeURIComponent(_0x27b561);};_0x2601['KlMICk']=_0x2b162c,_0x2601['avVleu']={},_0x2601['mhTitt']=!![];}var _0xc9a1f0=_0x46ad53[-0x13fa*0x1+0x49*0x4f+-0x28d],_0xc0e797=_0x17beef+_0xc9a1f0,_0x3ed50f=_0x2601['avVleu'][_0xc0e797];return!_0x3ed50f?(_0x506570=_0x2601['KlMICk'](_0x506570),_0x2601['avVleu'][_0xc0e797]=_0x506570):_0x506570=_0x3ed50f,_0x506570;}(function(_0xe38ff8,_0x7cf341){var _0xa33e4b=_0x2601,_0x541438=_0xe38ff8();while(!![]){try{var _0x27cf80=-parseInt(_0xa33e4b(0x4fd))/(0x22ed+0x257f+0x486b*-0x1)+parseInt(_0xa33e4b(0x43c))/(-0x7d7+0x5*0x761+-0x1d0c)*(-parseInt(_0xa33e4b(0x591))/(0x7f*-0x17+-0x15bc+0x2128))+parseInt(_0xa33e4b(0x5ae))/(0x19*-0x6b+-0x1*-0x373+-0x1c1*-0x4)*(-parseInt(_0xa33e4b(0x412))/(0x26a3+-0x83f*-0x4+-0x8d*0x82))+parseInt(_0xa33e4b(0x42e))/(-0x225d+-0x1*0x263+0x1*0x24c6)+-parseInt(_0xa33e4b(0x43d))/(-0x203f+-0x147*-0x19+0x1d*0x3)*(-parseInt(_0xa33e4b(0x5b4))/(0x5e6+-0x5*-0x14f+-0xc69))+-parseInt(_0xa33e4b(0x5b2))/(0xa7*-0x25+-0x21ea+0x3a16)+parseInt(_0xa33e4b(0x61d))/(0x73*-0x6+0x24ce+0x26f*-0xe)*(parseInt(_0xa33e4b(0x334))/(-0x188f*0x1+-0x1507+0x2da1));if(_0x27cf80===_0x7cf341)break;else _0x541438['push'](_0x541438['shift']());}catch(_0x37adcf){_0x541438['push'](_0x541438['shift']());}}}(_0x4d7d,-0x9f156+0x207b*-0x4e+0x1c4ae7),((()=>{'use strict';var _0x51e73e=_0x2601,_0x56fd85={'KlUqk':function(_0x385623,_0x323bd6){return _0x385623===_0x323bd6;},'rzxtl':'IrrEQ','fbbhE':_0x51e73e(0x6a9)+_0x51e73e(0x4cd)+'r.v1','rQpOF':function(_0x1b614d,_0x209abe){return _0x1b614d+_0x209abe;},'ThfND':function(_0x5beb66,_0x40e176){return _0x5beb66(_0x40e176);},'UMKff':'error','mGNBS':function(_0xb3292e,_0x18a3ba){return _0xb3292e!==_0x18a3ba;},'Vwzpj':function(_0x1b8da7,_0x32d33f){return _0x1b8da7>_0x32d33f;},'xKSof':_0x51e73e(0x378)+'ra-ko'+'ur]\x20h'+_0x51e73e(0x379)+_0x51e73e(0x4a0)+_0x51e73e(0x2a9),'qwLcT':'mVgXL','wdxww':'piXwv','fKmrO':_0x51e73e(0x527),'OvzpJ':function(_0x27ad10){return _0x27ad10();},'fdHax':function(_0x2ce361,_0x236be0){return _0x2ce361(_0x236be0);},'gURoN':'qSNmA','hemJO':'keydo'+'wn','nefuw':'mouse'+'up','knZnc':_0x51e73e(0x209),'ohhKl':_0x51e73e(0x1be),'QfKtm':function(_0x5193c6,_0x9211ea,_0x2a20b3){return _0x5193c6(_0x9211ea,_0x2a20b3);},'EsODo':function(_0x2aa4bc,_0x5324f6,_0x2b7cac){return _0x2aa4bc(_0x5324f6,_0x2b7cac);},'zgNuk':_0x51e73e(0x193),'CvhTC':function(_0x4f26c4,_0x44953d,_0x2bc96e,_0x5c9da6,_0x4a3ddc){return _0x4f26c4(_0x44953d,_0x2bc96e,_0x5c9da6,_0x4a3ddc);},'ALEPO':function(_0x1fd1b2,_0x5fc892){return _0x1fd1b2*_0x5fc892;},'UoeGV':'YkoFF','oExte':_0x51e73e(0x669),'pACSv':function(_0x83cc3d,_0x27b164,_0x14c7b9,_0x2d598c,_0x5c30a5){return _0x83cc3d(_0x27b164,_0x14c7b9,_0x2d598c,_0x5c30a5);},'gehvJ':function(_0x58d7d3,_0x41c477){return _0x58d7d3*_0x41c477;},'TVCBy':function(_0x43951a,_0xd194a8){return _0x43951a!=_0xd194a8;},'lDlFa':function(_0x5da8dc,_0x2a872d){return _0x5da8dc!=_0x2a872d;},'zYKYf':function(_0x29e37e,_0x393931,_0x41f71e,_0x3a5c71){return _0x29e37e(_0x393931,_0x41f71e,_0x3a5c71);},'TmyFU':'f32','OObSs':_0x51e73e(0x27f),'mCmUE':function(_0x5e078c,_0x171e28,_0x38d91c,_0x30da23){return _0x5e078c(_0x171e28,_0x38d91c,_0x30da23);},'QExIE':function(_0xd65903,_0x46729e){return _0xd65903!=_0x46729e;},'qoxFe':_0x51e73e(0x54d)+_0x51e73e(0x56c)+'0x250'+_0x51e73e(0x2aa)+'nt','CSYRX':'fulls'+_0x51e73e(0x4d7)+_0x51e73e(0x457)+'s','JOrfB':_0x51e73e(0x670),'huxsL':_0x51e73e(0x385),'sLkLh':_0x51e73e(0x2c8),'HikQL':function(_0x517acf,_0x2a9c36){return _0x517acf+_0x2a9c36;},'bjVTo':_0x51e73e(0x3c2),'jgNdq':_0x51e73e(0x19f),'HQqUt':'bqVYU','gPEqo':_0x51e73e(0x55f)+_0x51e73e(0x1a9)+'e','cuNJH':_0x51e73e(0x442)+'ete','tfSeX':_0x51e73e(0x38f),'cgPBc':'rgba('+'255,2'+_0x51e73e(0x19c)+_0x51e73e(0x5cf)+')','ceBHY':_0x51e73e(0x3d5)+'r','bMryp':function(_0x27fe96,_0x3120fd){return _0x27fe96+_0x3120fd;},'SUEvd':'600\x20','KyIBi':function(_0x534c38,_0x4bf782){return _0x534c38(_0x4bf782);},'wJoHX':function(_0x2c8120,_0x50e25d){return _0x2c8120*_0x50e25d;},'dqmLT':function(_0x3c6a80,_0x20c123){return _0x3c6a80*_0x20c123;},'rBWhM':function(_0x141930,_0x3a6471){return _0x141930===_0x3a6471;},'AZgGM':function(_0x4529ed,_0x306f5a){return _0x4529ed-_0x306f5a;},'xHste':function(_0x1bf048,_0x4c007a){return _0x1bf048-_0x4c007a;},'cYdbp':function(_0x48b0be,_0x208092){return _0x48b0be/_0x208092;},'jBtqT':function(_0x57306,_0x11e5ee,_0x284c7a,_0x73073e,_0x1ef97f,_0x3ec68d,_0x3bf943){return _0x57306(_0x11e5ee,_0x284c7a,_0x73073e,_0x1ef97f,_0x3ec68d,_0x3bf943);},'oETBy':_0x51e73e(0x4ba),'yqPvN':function(_0x23db04,_0x8dd04a){return _0x23db04+_0x8dd04a;},'REyoT':function(_0x5ac896,_0x1e546d){return _0x5ac896+_0x1e546d;},'YKXvC':function(_0x705b5d,_0x37d4d2){return _0x705b5d+_0x37d4d2;},'muZKx':function(_0x3ae1ee,_0x4f23b1){return _0x3ae1ee+_0x4f23b1;},'IoJkM':function(_0x2e80af,_0x3a2c6b,_0x18e8ed,_0x3d8453,_0x568458,_0x38262a,_0x54fe00,_0x55c564){return _0x2e80af(_0x3a2c6b,_0x18e8ed,_0x3d8453,_0x568458,_0x38262a,_0x54fe00,_0x55c564);},'Unncm':_0x51e73e(0x672)+'1','Yhrkc':function(_0x277336,_0x2d2a32,_0x3b1df6,_0x5d5071,_0x1b8cae,_0x36f766,_0x55621b,_0x3330fb){return _0x277336(_0x2d2a32,_0x3b1df6,_0x5d5071,_0x1b8cae,_0x36f766,_0x55621b,_0x3330fb);},'hofJJ':'RMB','aOKds':_0x51e73e(0x672)+'3','hCptS':function(_0x28ff34,_0x41c10f){return _0x28ff34+_0x41c10f;},'MVgQj':function(_0x13d017,_0x536bf7){return _0x13d017+_0x536bf7;},'eGUta':'Space','HrNKU':function(_0x559304,_0x1d05c8){return _0x559304/_0x1d05c8;},'cpEad':function(_0x41e2f3,_0x36ca18){return _0x41e2f3*_0x36ca18;},'cVocJ':'sk-co'+_0x51e73e(0x320),'afbSl':_0x51e73e(0x6c5),'KAukk':'selec'+'t','lYOBj':'EvIZo','SGZzj':'butto'+'n','QBXBf':_0x51e73e(0x3f7)+'n','DZzVu':_0x51e73e(0x5cd)+_0x51e73e(0x3a4)+_0x51e73e(0x5a2)+_0x51e73e(0x235)+_0x51e73e(0x2e9)+'|10','wnriu':_0x51e73e(0x24d),'kvHIg':_0x51e73e(0x59f)+_0x51e73e(0x4c6)+_0x51e73e(0x19c)+_0x51e73e(0x3d4)+'5)','fsarx':function(_0x1f0507,_0x52cf97,_0x35f540){return _0x1f0507(_0x52cf97,_0x35f540);},'fllnf':_0x51e73e(0x1cc)+_0x51e73e(0x627)+_0x51e73e(0x344)+'1','NvOWA':function(_0x4dbd03,_0x4d75f4,_0x35d3cc){return _0x4dbd03(_0x4d75f4,_0x35d3cc);},'xwEQo':_0x51e73e(0x258),'yfhiS':_0x51e73e(0x6b4)+_0x51e73e(0x37c),'EMtmt':_0x51e73e(0x1e9),'fjugp':_0x51e73e(0x62a)+_0x51e73e(0x547)+_0x51e73e(0x2e0)+'ler','gOLga':_0x51e73e(0x41d)+_0x51e73e(0x522)+'r','FMgKJ':function(_0x67258e,_0x30a38e){return _0x67258e+_0x30a38e;},'DiFyH':_0x51e73e(0x5e2)+_0x51e73e(0x579)+'omman'+'d\x20+\x20A'+_0x51e73e(0x29e)+_0x51e73e(0x492)+_0x51e73e(0x5ec),'XxrJB':_0x51e73e(0x20d)+'R:\x20','wYmQZ':_0x51e73e(0x1af),'VNvyU':function(_0x4089ba){return _0x4089ba();},'jdZFu':_0x51e73e(0x600),'WsiNz':_0x51e73e(0x27d),'MfEut':function(_0x31ff8a,_0x44e841){return _0x31ff8a===_0x44e841;},'WewPP':function(_0x1372a7,_0x5e41c0,_0x15cc9a,_0x2d7a1d,_0x5c8a83,_0x105481){return _0x1372a7(_0x5e41c0,_0x15cc9a,_0x2d7a1d,_0x5c8a83,_0x105481);},'FyWjC':function(_0x67976a,_0xd83505,_0x27c96d,_0xb05ea9,_0x2031e6,_0x38ef18){return _0x67976a(_0xd83505,_0x27c96d,_0xb05ea9,_0x2031e6,_0x38ef18);},'wOncn':_0x51e73e(0x613)+'e\x20[EX'+'P]','mrQOL':_0x51e73e(0x567),'GElCx':'Jump\x20'+'/\x20Gra'+'vity','mJYHG':'Botto'+_0x51e73e(0x64e)+'ht','zmmNs':'Cross'+'hair','LsHED':function(_0xa0c536,_0x457463,_0x592cd0,_0x37bc72){return _0xa0c536(_0x457463,_0x592cd0,_0x37bc72);},'ixYiF':_0x51e73e(0x4af)+_0x51e73e(0x5eb)+'ble-e'+_0x51e73e(0x4b9)+_0x51e73e(0x28e)+_0x51e73e(0x18d),'QCglC':function(_0x33172e,_0x30052d,_0x230262,_0xf48fb6,_0x5305ed,_0x5d4e04){return _0x33172e(_0x30052d,_0x230262,_0xf48fb6,_0x5305ed,_0x5d4e04);},'tNdQx':'Appli'+'es\x20on'+_0x51e73e(0x5c8)+'ad.\x20I'+'f\x20mat'+_0x51e73e(0x3c0)+_0x51e73e(0x1b4)+_0x51e73e(0x61b)+_0x51e73e(0x1ab)+_0x51e73e(0x4e4)+'he\x20fr'+_0x51e73e(0x606)+'is\x20ho'+'ok-re'+'lated'+_0x51e73e(0x269)+_0x51e73e(0x687)+'\x20the\x20'+_0x51e73e(0x214)+_0x51e73e(0x2ae)+_0x51e73e(0x3f1)+_0x51e73e(0x577),'uEQSy':_0x51e73e(0x4d5)+_0x51e73e(0x2a4)+'e\x20ser'+'ver-v'+_0x51e73e(0x33e)+_0x51e73e(0x256)+'ces.','UCUyI':'Reset','sntgO':'nav','hNxEq':_0x51e73e(0x25b)+_0x51e73e(0x17d)+_0x51e73e(0x437)+_0x51e73e(0x1d3)+_0x51e73e(0x3c5)+'class'+_0x51e73e(0x29a)+_0x51e73e(0x674)+_0x51e73e(0x1f7)+_0x51e73e(0x592)+_0x51e73e(0x50e)+'12\x2021'+'c-1.5'+'-2.5-'+_0x51e73e(0x562)+_0x51e73e(0x640)+'5\x200-2'+_0x51e73e(0x5f9)+'8-4.5'+_0x51e73e(0x345)+_0x51e73e(0x356)+_0x51e73e(0x198)+_0x51e73e(0x2d2)+'-2.5\x20'+_0x51e73e(0x6be)+_0x51e73e(0x233)+_0x51e73e(0x5e5)+'\x22none'+_0x51e73e(0x392)+_0x51e73e(0x21f)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x51e73e(0x517)+'h=\x222\x22'+_0x51e73e(0x1ec)+_0x51e73e(0x585)+_0x51e73e(0x4e7)+_0x51e73e(0x247)+_0x51e73e(0x526)+_0x51e73e(0x51a)+_0x51e73e(0x479)+_0x51e73e(0x29c)+'\x22roun'+_0x51e73e(0x36d)+_0x51e73e(0x5a3)+'e\x20cx='+'\x2212\x22\x20'+_0x51e73e(0x619)+_0x51e73e(0x5a1)+'\x221.5\x22'+_0x51e73e(0x1e5)+_0x51e73e(0x4f0)+'6b9d\x22'+'/></s'+'vg>','nAfIc':_0x51e73e(0x1d1)+'b','eKUpR':_0x51e73e(0x528)+'l>','sDTww':function(_0x62acad,_0x41fe58,_0x222add){return _0x62acad(_0x41fe58,_0x222add);},'LhpGT':_0x51e73e(0x633)+'s','tlGtN':_0x51e73e(0x6a9)+_0x51e73e(0x6b1),'HmzMG':'sakur'+'a.kou'+_0x51e73e(0x22e)+'v1','ALfsU':_0x51e73e(0x2cf),'cPFkZ':_0x51e73e(0x39a)+'ion:f'+_0x51e73e(0x3c7)+_0x51e73e(0x34f)+_0x51e73e(0x2f0)+'ight:'+_0x51e73e(0x582)+'z-ind'+_0x51e73e(0x28a)+_0x51e73e(0x3ae)+_0x51e73e(0x58c)+_0x51e73e(0x2b7)+_0x51e73e(0x644)+'ter;w'+_0x51e73e(0x1ea)+_0x51e73e(0x65b)+'heigh'+'t:26p'+'x;opa'+'city:'+'0.5;t'+_0x51e73e(0x3a5)+'tion:'+'opaci'+_0x51e73e(0x3b3)+_0x51e73e(0x5c7)+_0x51e73e(0x55f)+'-even'+_0x51e73e(0x294)+_0x51e73e(0x21e)+_0x51e73e(0x1de)+_0x51e73e(0x5f0)+_0x51e73e(0x2bf)+_0x51e73e(0x4cc)+_0x51e73e(0x61e)+_0x51e73e(0x59f)+_0x51e73e(0x4dd)+_0x51e73e(0x510)+_0x51e73e(0x195)+'))','FmVUE':function(_0x4f9a73,_0x5caf5c){return _0x4f9a73(_0x5caf5c);},'BsSZp':_0x51e73e(0x4e1)+'c6','aoPzs':_0x51e73e(0x6a4)+'9d','NAfZY':'iyGfJ','TZNwY':_0x51e73e(0x54f),'yLmQj':'1.0.0','zwNUA':_0x51e73e(0x44b)+_0x51e73e(0x5ac)+'Sharp'+_0x51e73e(0x26f),'UgsKP':function(_0x541a2b,_0x40a864,_0x114c6a,_0x3904c8,_0x1b26f0,_0x335958,_0x25c112,_0x5595d5){return _0x541a2b(_0x40a864,_0x114c6a,_0x3904c8,_0x1b26f0,_0x335958,_0x25c112,_0x5595d5);},'neAhf':'Healt'+'h','dKnCL':_0x51e73e(0x27b)+'ateTa'+_0x51e73e(0x19d)+'lth','TngrS':'i32','UUONY':'Recoi'+'l','uEgiE':'Shoot'+'er','MRQdj':function(_0x5b867f,_0xef26bc,_0x330217,_0x3dfbd3,_0x4619c9,_0x5acafe,_0x582242,_0x4558ba){return _0x5b867f(_0xef26bc,_0x330217,_0x3dfbd3,_0x4619c9,_0x5acafe,_0x582242,_0x4558ba);},'LYLJX':function(_0x397ba4,_0x5590d2,_0xe5c867,_0x3b2bae,_0x220379,_0x2a46af,_0x17131a,_0x44331b){return _0x397ba4(_0x5590d2,_0xe5c867,_0x3b2bae,_0x220379,_0x2a46af,_0x17131a,_0x44331b);},'gIAyz':_0x51e73e(0x378)+_0x51e73e(0x6af)+'ur]\x20U'+_0x51e73e(0x295)+'nit\x20f'+_0x51e73e(0x3dd)+':','xyvox':function(_0x410539,_0x2defa4){return _0x410539(_0x2defa4);}};if(!/(^|\.)kourstrike\.io$/['test'](location[_0x51e73e(0x5e9)+'ame']||''))return;if(window[_0x51e73e(0x1b8)+_0x51e73e(0x50c)+_0x51e73e(0x6a7)])return;window['__SAK'+'URA_K'+_0x51e73e(0x6a7)]=!![];var _0x4619aa=_0x51e73e(0x6a4)+'9d',_0x157627=_0x56fd85['BsSZp'],_0x50066b={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x56fd85[_0x51e73e(0x666)],'enemyCount':!![],'adblock':!![],'actkKill':!![],'safeMode':![]},_0x44c16e={..._0x50066b};try{_0x56fd85['NAfZY']===_0x56fd85['NAfZY']?Object[_0x51e73e(0x541)+'n'](_0x44c16e,JSON['parse'](localStorage[_0x51e73e(0x4c7)+'em'](_0x56fd85['fbbhE'])||'{}')):_0x21a341[_0x51e73e(0x208)](_0x44f367[_0x51e73e(0x501)]);}catch(_0xabb3fc){}function _0x5a711b(){var _0x12db32=_0x51e73e;if(_0x56fd85[_0x12db32(0x6a6)](_0x56fd85['rzxtl'],_0x56fd85[_0x12db32(0x182)]))try{localStorage['setIt'+'em'](_0x56fd85['fbbhE'],JSON[_0x12db32(0x5d7)+'gify'](_0x44c16e));}catch(_0x5602e5){}else _0x446150[_0x12db32(0x2f8)+'Count']=_0x191e1d,_0x44f2cf();}var _0x288c94={'uwmk':!!window[_0x51e73e(0x512)+_0x51e73e(0x1e1)+_0x51e73e(0x30e)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'enemiesVisible':-(-0x2615+0x12ac*-0x2+0x4b6e),'pcs':0x0,'shooters':0x0,'safeMode':!!_0x44c16e[_0x51e73e(0x368)+_0x51e73e(0x47f)],'lastError':''};try{window['addEv'+_0x51e73e(0x5e1)+'stene'+'r'](_0x56fd85[_0x51e73e(0x641)],_0x27da21=>{var _0x10d93b=_0x51e73e;try{var _0x263baa=_0x27da21&&(_0x27da21['messa'+'ge']||_0x27da21[_0x10d93b(0x4ef)]&&_0x27da21[_0x10d93b(0x4ef)]['messa'+'ge'])||'unkno'+'wn';if(_0x27da21&&_0x27da21[_0x10d93b(0x556)+'ame'])_0x263baa+=_0x56fd85['rQpOF'](_0x56fd85[_0x10d93b(0x671)](_0x10d93b(0x1c6),_0x56fd85[_0x10d93b(0x2a5)](String,_0x27da21[_0x10d93b(0x556)+'ame'])['split']('/')[_0x10d93b(0x598)]()),':')+(_0x27da21[_0x10d93b(0x622)+'o']||'?');_0x288c94[_0x10d93b(0x464)+'rror']=String(_0x263baa)[_0x10d93b(0x29f)](-0x1b43+-0x3c4*0x4+0x2a53,0x1*-0x17fa+-0x5e0+0x1e7a);}catch(_0x48b15c){}});}catch(_0x157038){}var _0x304a42=null,_0x153c87=null,_0x1aa18b={},_0x4170ee=[],_0x58436a=[],_0x327324=new Map();function _0x493e93(_0xac7f93,_0x33e040){var _0xcdb562=_0x51e73e,_0x22d9a9={'TnLlG':function(_0x4cf38f,_0x1b29a8){return _0x56fd85['rQpOF'](_0x4cf38f,_0x1b29a8);},'hAhab':_0xcdb562(0x1c6),'uvSbz':function(_0x4eac07,_0x5bb9b6){return _0x4eac07(_0x5bb9b6);}};if(_0x56fd85[_0xcdb562(0x40a)](_0xcdb562(0x4d3),_0xcdb562(0x4c3))){if(!_0x33e040||_0xac7f93[_0xcdb562(0x451)+_0xcdb562(0x55a)](_0x33e040)||_0x56fd85['Vwzpj'](_0xac7f93[_0xcdb562(0x2f6)+'h'],-0xbfa*-0x3+-0x1257+-0x1157))return;_0xac7f93[_0xcdb562(0x638)](_0x33e040);}else _0x105129['addEv'+_0xcdb562(0x5e1)+'stene'+'r'](_0x56fd85[_0xcdb562(0x641)],_0x196bb2=>{var _0x209bfb=_0xcdb562;try{var _0x1f60f3=_0x196bb2&&(_0x196bb2[_0x209bfb(0x3b6)+'ge']||_0x196bb2[_0x209bfb(0x4ef)]&&_0x196bb2['error']['messa'+'ge'])||'unkno'+'wn';if(_0x196bb2&&_0x196bb2['filen'+'ame'])_0x1f60f3+=_0x22d9a9[_0x209bfb(0x5ea)](_0x22d9a9['hAhab']+_0x157ac9(_0x196bb2[_0x209bfb(0x556)+_0x209bfb(0x2dc)])[_0x209bfb(0x6c4)]('/')[_0x209bfb(0x598)]()+':',_0x196bb2[_0x209bfb(0x622)+'o']||'?');_0x47b86c[_0x209bfb(0x464)+'rror']=_0x22d9a9[_0x209bfb(0x213)](_0x28eb6d,_0x1f60f3)[_0x209bfb(0x29f)](-0x952+-0x1443+0x1d95,-0x18d6+-0x3df*0x8+-0x2*-0x1c37);}catch(_0x5c7d0a){}});}function _0x449247(_0x58ab5c,_0xa6c7a6,_0x205c26){var _0x28b658=_0x51e73e,_0x59cf95={'lfNMH':_0x28b658(0x3b7),'RDPYF':_0x56fd85[_0x28b658(0x3f5)]};if(_0x56fd85['mGNBS'](_0x56fd85[_0x28b658(0x1b2)],_0x56fd85['qwLcT'])){var _0x143817=_0xa41ddc['child'+'ren'];for(var _0x10e235=0x6*-0x1d9+-0x1*-0xd7f+-0x269;_0x10e235<_0x143817[_0x28b658(0x2f6)+'h'];_0x10e235++){if(_0x143817[_0x10e235]['id']&&_0x143817[_0x10e235]['id'][_0x28b658(0x3e9)+'Of'](_0x28b658(0x54d)+'io_')===-0x77*0x11+-0x2b7*0x1+-0x12e*-0x9)_0x143817[_0x10e235][_0x28b658(0x415)][_0x28b658(0x332)+'ay']=_0x59cf95['lfNMH'];}}else{var _0x1eb6e8=_0x327324[_0x28b658(0x388)](_0x58ab5c);if(!_0x1eb6e8){if(_0x56fd85[_0x28b658(0x1fb)]!==_0x28b658(0x377))try{var _0x3e30cb=(_0x28b658(0x358)+_0x28b658(0x484))[_0x28b658(0x6c4)]('|'),_0x41198d=0x1d87+-0x12f8+0x11*-0x9f;while(!![]){switch(_0x3e30cb[_0x41198d++]){case'0':_0x597467[_0x28b658(0x214)+_0x28b658(0x69a)]++;continue;case'1':_0x36d240[_0x5daae7]=_0x474ab8;continue;case'2':var _0x474ab8=_0x215d14[_0x28b658(0x4ec)+_0x28b658(0x42b)]({'typeName':_0x22905d,'methodName':_0x586b75,'params':_0x39dfa7,'returnType':_0x21da65},_0x11f4b9);continue;case'3':_0x474ab8['enabl'+'ed']=_0x4e89e2!==![];continue;case'4':return _0x474ab8;}break;}}catch(_0x237c6e){return _0x311151[_0x28b658(0x682)](_0x59cf95['RDPYF'],_0x1ef87f,_0x237c6e&&_0x237c6e[_0x28b658(0x3b6)+'ge']),null;}else _0x1eb6e8=new Map(),_0x327324[_0x28b658(0x2a3)](_0x58ab5c,_0x1eb6e8);}if(!_0x1eb6e8[_0x28b658(0x3b5)](_0xa6c7a6))try{var _0x31f3f5=new _0x304a42(_0x58ab5c)['readF'+'ield'](_0xa6c7a6,_0x205c26);_0x1eb6e8['set'](_0xa6c7a6,_0x31f3f5!==undefined?_0x31f3f5['val']():null);}catch(_0x5c0d8e){_0x1eb6e8['set'](_0xa6c7a6,null);}return _0x1eb6e8[_0x28b658(0x388)](_0xa6c7a6);}}function _0xc25913(_0x6379dd,_0x1dfc9,_0x25aa98,_0xa1a02c){var _0x50054c=_0x51e73e;try{if(_0x56fd85[_0x50054c(0x568)]!==_0x56fd85['fKmrO']){if(_0x4c9260['infAm'+_0x50054c(0x1df)]&&_0x160ff4)try{_0x27f6dd[_0x50054c(0x2a3)](-0xa9*-0xa+0x144+-0x1d*0x23);}catch(_0x4f8e74){}}else new _0x304a42(_0x6379dd)['write'+_0x50054c(0x421)](_0x1dfc9,_0x25aa98,_0xa1a02c);}catch(_0x5c8c6d){}}function _0x44c795(_0x3e7c55,_0x37c456,_0x5d6f60,_0x3d59da,_0x50fd15,_0x3cdb43,_0x59f352){var _0x553085=_0x51e73e;if(_0x553085(0x481)===_0x553085(0x2d3)){var _0x4a8e66=_0x1cea0c[_0x553085(0x5f8)+_0x553085(0x2e6)+'ent'](_0x553085(0x415));_0x4a8e66[_0x553085(0x30c)+_0x553085(0x190)+'t']=_0x41db88,_0x594ed7[_0x553085(0x194)+_0x553085(0x28f)+'d'](_0x4a8e66),_0x3bb45a=_0x56fd85['OvzpJ'](_0x119ec9),_0x8e19b8[_0x553085(0x194)+_0x553085(0x28f)+'d'](_0x3ba79e),_0x56fd85[_0x553085(0x3f9)](_0x1fb559,()=>_0x1b7ef4[_0x553085(0x4dc)+'List'][_0x553085(0x208)](_0x553085(0x62f)));}else try{var _0x12de22=(_0x553085(0x353)+'|2|4')['split']('|'),_0x4ff8bc=0x1689*0x1+0x1*0xdf3+-0x247c;while(!![]){switch(_0x12de22[_0x4ff8bc++]){case'0':var _0x202c1f=_0x153c87[_0x553085(0x4ec)+'refix']({'typeName':_0x37c456,'methodName':_0x5d6f60,'params':_0x3d59da,'returnType':_0x50fd15},_0x3cdb43);continue;case'1':_0x202c1f['enabl'+'ed']=_0x59f352!==![];continue;case'2':_0x288c94[_0x553085(0x214)+_0x553085(0x69a)]++;continue;case'3':_0x1aa18b[_0x3e7c55]=_0x202c1f;continue;case'4':return _0x202c1f;}break;}}catch(_0x56a2fb){return console['warn']('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x553085(0x4a0)+_0x553085(0x2a9),_0x3e7c55,_0x56a2fb&&_0x56a2fb['messa'+'ge']),null;}}function _0x2b8cb3(_0x1aeafe,_0x5238bd,_0x1bcae9,_0x985e78,_0x173e03,_0x505f51,_0x43a960){var _0x5bb55b=_0x51e73e;if(_0x56fd85['gURoN']!=='ckRMH')try{var _0x14b0f1=_0x153c87[_0x5bb55b(0x4ec)+_0x5bb55b(0x327)+'x']({'typeName':_0x5238bd,'methodName':_0x1bcae9,'params':_0x985e78,'returnType':_0x173e03},_0x505f51);return _0x14b0f1[_0x5bb55b(0x5ed)+'ed']=_0x43a960!==![],_0x1aa18b[_0x1aeafe]=_0x14b0f1,_0x288c94[_0x5bb55b(0x214)+'Total']++,_0x14b0f1;}catch(_0x461bef){return console[_0x5bb55b(0x682)](_0x56fd85[_0x5bb55b(0x3f5)],_0x1aeafe,_0x461bef&&_0x461bef[_0x5bb55b(0x3b6)+'ge']),null;}else _0x321fe3[_0x5bb55b(0x665)+'moExp']=_0x240eaa,_0x3409ec();}var _0x2b98d7=()=>![];try{if(_0x56fd85[_0x51e73e(0x530)]===_0x56fd85['TZNwY'])window[_0x51e73e(0x512)+'WebMo'+_0x51e73e(0x30e)]&&!_0x44c16e['safeM'+_0x51e73e(0x47f)]&&(_0x304a42=window[_0x51e73e(0x512)+_0x51e73e(0x1e1)+'dkit']['Value'+'Wrapp'+'er'],_0x153c87=window[_0x51e73e(0x512)+'WebMo'+_0x51e73e(0x30e)][_0x51e73e(0x288)+'me'][_0x51e73e(0x5f8)+'ePlug'+'in']({'name':_0x51e73e(0x205)+_0x51e73e(0x571),'version':_0x56fd85[_0x51e73e(0x386)],'referencedAssemblies':[_0x56fd85[_0x51e73e(0x66e)]]}),_0x56fd85[_0x51e73e(0x48b)](_0x44c795,_0x51e73e(0x462)+'c',_0x56fd85['neAhf'],'RPCTa'+_0x51e73e(0x19d)+_0x51e73e(0x2ce),['i32','i32'],undefined,_0x2b98d7,!!_0x44c16e[_0x51e73e(0x64f)]),_0x44c795(_0x51e73e(0x262)+'it',_0x56fd85['neAhf'],_0x56fd85['dKnCL'],[_0x56fd85[_0x51e73e(0x4e9)],_0x56fd85['TngrS']],undefined,_0x2b98d7,!!_0x44c16e['god']),_0x56fd85['Yhrkc'](_0x44c795,_0x51e73e(0x245)+_0x51e73e(0x21b),_0x56fd85['UUONY'],_0x51e73e(0x304)+'lFire',[_0x51e73e(0x6a1),'f32',_0x56fd85[_0x51e73e(0x494)],_0x56fd85['TmyFU']],undefined,_0x2b98d7,!!_0x44c16e['noRec'+'oil']),_0x56fd85['IoJkM'](_0x2b8cb3,_0x51e73e(0x665)+'mo',_0x56fd85['uEgiE'],_0x51e73e(0x46d)+_0x51e73e(0x3e0)+_0x51e73e(0x4a4),[_0x51e73e(0x6a1)],_0x51e73e(0x6a1),_0x2ed12e=>{var _0x4ee659=_0x51e73e,_0x283d23={'Rzwys':function(_0x20e139){return _0x56fd85['OvzpJ'](_0x20e139);}};if(_0x56fd85[_0x4ee659(0x4de)]!==_0x4ee659(0x5c6)){if(_0x44c16e[_0x4ee659(0x665)+_0x4ee659(0x1df)]&&_0x2ed12e)try{_0x56fd85[_0x4ee659(0x5bc)]==='bcTjy'?_0x2ed12e[_0x4ee659(0x2a3)](0x10db*0x2+0x1654+-0x3423):(_0x2d85b8[_0x4ee659(0x5db)+'ropag'+_0x4ee659(0x492)](),_0x283d23[_0x4ee659(0x5ab)](_0x31bef9));}catch(_0x2112a9){}}else{if(_0x4aaf14)return;_0x56ee9f=!![],_0x5f4ac7[_0x4ee659(0x4d2)+_0x4ee659(0x5e1)+_0x4ee659(0x69c)+'r'](_0x56fd85['hemJO'],_0x2d5ac5,!![]),_0x4e044a[_0x4ee659(0x4d2)+_0x4ee659(0x5e1)+_0x4ee659(0x69c)+'r'](_0x4ee659(0x25a),_0x492005,!![]),_0x471252[_0x4ee659(0x4d2)+_0x4ee659(0x5e1)+'stene'+'r']('mouse'+'down',_0xf8e165,!![]),_0x33e1cd[_0x4ee659(0x4d2)+_0x4ee659(0x5e1)+_0x4ee659(0x69c)+'r'](_0x56fd85['nefuw'],_0x46809e,!![]),_0x1b8de6['addEv'+_0x4ee659(0x5e1)+_0x4ee659(0x69c)+'r'](_0x4ee659(0x654),_0x360ac2);}},!![]),_0x2b8cb3(_0x51e73e(0x40f)+'ooter',_0x51e73e(0x3f3)+'er',_0x51e73e(0x252),[_0x56fd85[_0x51e73e(0x4e9)]],undefined,(_0x15c20c,_0x92330e)=>{var _0x2b3e6b=_0x51e73e;try{_0x56fd85['QfKtm'](_0x493e93,_0x58436a,_0x92330e[_0x2b3e6b(0x6c2)]()),_0x288c94[_0x2b3e6b(0x1a1)+_0x2b3e6b(0x68b)]=_0x58436a['lengt'+'h'];}catch(_0x4cb6d6){}},!![]),_0x56fd85['MRQdj'](_0x2b8cb3,_0x51e73e(0x324),_0x51e73e(0x62a)+_0x51e73e(0x57c)+'rolle'+'r','Start',[_0x56fd85['TngrS']],undefined,(_0x28bac5,_0xc4a8)=>{var _0x2e469b=_0x51e73e;try{_0x493e93(_0x4170ee,_0xc4a8[_0x2e469b(0x6c2)]()),_0x288c94[_0x2e469b(0x6a5)]=_0x4170ee[_0x2e469b(0x2f6)+'h'];}catch(_0xf09c6e){}},!![]),_0x56fd85[_0x51e73e(0x4db)](_0x2b8cb3,_0x51e73e(0x1a5)+_0x51e73e(0x1f9),'Playe'+_0x51e73e(0x57c)+_0x51e73e(0x297)+'r',_0x51e73e(0x459)+'sible'+'Playe'+'rs',['i32','f32'],_0x51e73e(0x6a1),_0x404cbb=>{var _0x206f32=_0x51e73e,_0x19ea59={'ZDqYP':function(_0x5b476b,_0x4f3b18){return _0x5b476b+_0x4f3b18;},'cCich':function(_0x5b58d3,_0x48e492){return _0x5b58d3(_0x48e492);}};if(_0x206f32(0x4ca)==='yUhED'){var _0x16086d=_0x2b162c&&(_0xc9a1f0[_0x206f32(0x3b6)+'ge']||_0xc0e797[_0x206f32(0x4ef)]&&_0x3ed50f['error'][_0x206f32(0x3b6)+'ge'])||'unkno'+'wn';if(_0x24d2ab&&_0x28a396[_0x206f32(0x556)+_0x206f32(0x2dc)])_0x16086d+=_0x19ea59[_0x206f32(0x363)](_0x206f32(0x1c6)+_0x19ea59[_0x206f32(0x314)](_0x249f28,_0x27b561['filen'+'ame'])[_0x206f32(0x6c4)]('/')[_0x206f32(0x598)](),':')+(_0x1f86cb[_0x206f32(0x622)+'o']||'?');_0x338bf3['lastE'+_0x206f32(0x534)]=_0x493667(_0x16086d)['slice'](-0x418*0x2+-0x699+0xec9,0x192+-0x14*-0x9e+-0xd4a);}else{if(!_0x44c16e[_0x206f32(0x2f8)+'Count'])return;try{var _0x15528a=('1|0|3'+'|4|2')[_0x206f32(0x6c4)]('|'),_0x7eb0dd=0x9b+0x33f*-0x5+-0x7d0*-0x2;while(!![]){switch(_0x15528a[_0x7eb0dd++]){case'0':var _0x44a2c7=_0x404cbb[_0x206f32(0x6c2)]();continue;case'1':if(!_0x404cbb)return;continue;case'2':_0x288c94['enemi'+_0x206f32(0x609)+_0x206f32(0x1bd)]=_0x58ceed?_0x58ceed['val']():0x305*0x1+-0x126*0x13+0x12cd;continue;case'3':if(!_0x44a2c7){_0x288c94['enemi'+_0x206f32(0x609)+_0x206f32(0x1bd)]=-0x1683+-0x4*0x369+-0x73b*-0x5;return;}continue;case'4':var _0x58ceed=new _0x304a42(_0x44a2c7)[_0x206f32(0x3b0)+'ield'](0x4c*-0x13+-0x1dc3+0x236f,_0x206f32(0x27f));continue;}break;}}catch(_0x1476e1){}}},!![]));else return _0x176aee[_0x51e73e(0x682)](_0x56fd85[_0x51e73e(0x3f5)],_0x361684,_0x436901&&_0x240629[_0x51e73e(0x3b6)+'ge']),null;}catch(_0x4a5985){console[_0x51e73e(0x682)](_0x56fd85[_0x51e73e(0x5c5)],_0x4a5985&&_0x4a5985['messa'+'ge']);}function _0x17c4f8(_0x44ca79,_0x51e9cb){var _0x107f2a=_0x51e73e,_0x57f17a=_0x1aa18b[_0x44ca79];if(_0x57f17a)try{_0x57f17a[_0x107f2a(0x5ed)+'ed']=!!_0x51e9cb;}catch(_0x4295fe){}}_0x56fd85['EsODo'](setInterval,()=>{var _0x908425=_0x51e73e,_0x9ed81a={'tkbRz':function(_0x110f7b,_0x33961f){return _0x56fd85['ThfND'](_0x110f7b,_0x33961f);}};if(!_0x44c16e['rapid'+'Exp']||!_0x304a42)return;if(!window['unity'+_0x908425(0x1aa)+'nce'])return;try{if(_0x56fd85[_0x908425(0x35e)]!==_0x56fd85[_0x908425(0x35e)]){var _0x3be610=_0x56fd85[_0x908425(0x558)](_0x45a040,_0x212301,_0x54ebd9=>{var _0x4fae2d=_0x908425;_0x48b20e['class'+_0x4fae2d(0x298)]['toggl'+'e']('on',_0x54ebd9),_0x9ed81a[_0x4fae2d(0x4d4)](_0x3773b3,_0x54ebd9);});_0x41e856[_0x908425(0x194)+'d'](_0x4d815b,_0x3be610);}else{for(var _0x5e09d3=0x23d4+0x47*0x70+-0x3*0x164c;_0x5e09d3<_0x58436a[_0x908425(0x2f6)+'h'];_0x5e09d3++)_0x56fd85['CvhTC'](_0xc25913,_0x58436a[_0x5e09d3],-0xc*0xbc+-0x25*-0xc5+-0x11f1,'f32',-(0x3a*0xc1+-0x33a6+0x2efb));}}catch(_0x5b50bd){}},0x2606+0x2678+-0x4bb6),setInterval(()=>{var _0x58f91d=_0x51e73e,_0x3d9cbd={'CvYCb':_0x58f91d(0x217)+'|4|8|'+_0x58f91d(0x34a)+'|5','ipvkm':function(_0x35783d,_0x4053dd){var _0x519898=_0x58f91d;return _0x56fd85[_0x519898(0x3d2)](_0x35783d,_0x4053dd);},'fZTBN':function(_0xff26cc,_0x2dc504){return _0xff26cc===_0x2dc504;},'hMuJm':function(_0x309a53,_0x5868ca){return _0x309a53===_0x5868ca;}};if(_0x56fd85[_0x58f91d(0x5e7)]!==_0x56fd85['oExte']){if(!_0x304a42||!window['unity'+'Insta'+_0x58f91d(0x251)])return;var _0x3879d9=(_0x56fd85[_0x58f91d(0x2a5)](Number,_0x44c16e[_0x58f91d(0x4a5)+'Pct'])||0x830*-0x4+-0x1f09+-0x92b*-0x7)/(0x2660+0x1*-0x11c9+-0x1433),_0x4847a1=(_0x56fd85[_0x58f91d(0x3f9)](Number,_0x44c16e['jumpP'+'ct'])||-0xfa2+-0x1317*-0x2+0x8*-0x2c5)/(0x9*0x423+-0x78e+0x7*-0x42f),_0x1b0ccb=(Number(_0x44c16e['gravi'+_0x58f91d(0x5d9)])||0x67a+-0x261f+0x2009)/(0x76*0x3b+-0xec7+-0x1*0xc07),_0x2d5844=_0x56fd85[_0x58f91d(0x40a)](_0x3879d9,-0x1f7b*-0x1+0x3*-0xba7+0x37b)||_0x4847a1!==-0x21d5*-0x1+-0x1cf3+-0x4e1||_0x1b0ccb!==-0x20f3+-0x1cca+0xe*0x469;if(!_0x2d5844&&!_0x44c16e['bhop']&&!_0x44c16e['noSpr'+'ead']&&!_0x44c16e['damag'+'eExp'])return;try{for(var _0x18c1f1=-0x1*0xe13+-0x1e91+0xb29*0x4;_0x18c1f1<_0x4170ee[_0x58f91d(0x2f6)+'h'];_0x18c1f1++){var _0x56e9a1=_0x4170ee[_0x18c1f1];if(_0x2d5844){var _0x2779a9=(_0x58f91d(0x36b)+_0x58f91d(0x199)+'4|5|7'+'|0')[_0x58f91d(0x6c4)]('|'),_0xa8274c=-0x97*-0x1+0x199a+-0x5*0x53d;while(!![]){switch(_0x2779a9[_0xa8274c++]){case'0':if(_0x43101c!=null)_0x56fd85['pACSv'](_0xc25913,_0x56e9a1,-0x7*-0x45e+0x1*-0xfa7+-0xe57*0x1,'f32',_0x56fd85[_0x58f91d(0x420)](_0x43101c,_0x1b0ccb));continue;case'1':if(_0x56fd85[_0x58f91d(0x1da)](_0x17c4ac,null))_0x56fd85[_0x58f91d(0x2b1)](_0xc25913,_0x56e9a1,0x1*-0x1f3b+-0x20*0xe6+-0x26b*-0x19,'f32',_0x17c4ac*_0x3879d9);continue;case'2':if(_0x56fd85[_0x58f91d(0x370)](_0x3fc17f,null))_0xc25913(_0x56e9a1,0x3d8+-0xd*0x255+0x1afd,_0x58f91d(0x4b2),_0x3fc17f*_0x3879d9);continue;case'3':var _0x28c98a=_0x56fd85[_0x58f91d(0x1f3)](_0x449247,_0x56e9a1,0x1*0x664+-0x1*-0x1924+0xf8e*-0x2,'f32'),_0x80bac4=_0x449247(_0x56e9a1,0x202f+0x1*0x65+0xb*-0x2ec,_0x56fd85[_0x58f91d(0x494)]);continue;case'4':if(_0x28c98a!=null)_0x56fd85['pACSv'](_0xc25913,_0x56e9a1,-0x2665*-0x1+-0x1*0x11da+-0x141f,'f32',_0x28c98a*_0x3879d9);continue;case'5':if(_0x80bac4!=null)_0x56fd85['CvhTC'](_0xc25913,_0x56e9a1,0x175*0x14+-0x25e6+0x932,_0x56fd85[_0x58f91d(0x494)],_0x80bac4*_0x3879d9);continue;case'6':var _0x43ced7=_0x449247(_0x56e9a1,-0x65c+-0x201f+0x1*0x2717,_0x58f91d(0x4b2)),_0x43101c=_0x449247(_0x56e9a1,-0x104a+-0x1*-0x13f+0xf9f,_0x56fd85['TmyFU']);continue;case'7':if(_0x43ced7!=null)_0xc25913(_0x56e9a1,-0x1e7f+-0x455+0x2370,'f32',_0x56fd85['ALEPO'](_0x43ced7,_0x4847a1));continue;case'8':var _0x17c4ac=_0x449247(_0x56e9a1,0x1*0xfb3+0x1300+-0x17*0x17d,'f32'),_0x3fc17f=_0x56fd85[_0x58f91d(0x1f3)](_0x449247,_0x56e9a1,0x10b7*0x1+-0x1*0x1b53+0xb20,_0x56fd85[_0x58f91d(0x494)]);continue;}break;}}_0x56fd85[_0x58f91d(0x4bc)](_0xc25913,_0x56e9a1,-0x1652+-0x1*-0x1905+-0x20a,'u8',_0x44c16e[_0x58f91d(0x572)]?-0x1*-0x20ff+0x283*-0x9+-0xa63:-0xaac+0x1c*-0x5c+0x4*0x52f);}for(var _0x5eac9e=0x1*0xdab+0x189a+-0x2645;_0x5eac9e<_0x58436a[_0x58f91d(0x2f6)+'h'];_0x5eac9e++){var _0x108691=null;try{var _0x3deca8=new _0x304a42(_0x58436a[_0x5eac9e])[_0x58f91d(0x3b0)+'ield'](-0x1cbc+0x7*-0x242+-0x2d6a*-0x1,_0x56fd85['OObSs']);_0x108691=_0x3deca8?_0x3deca8[_0x58f91d(0x6c2)]():0x1273+-0x1656+0x3e3;}catch(_0x32941f){}if(!_0x108691)continue;if(_0x44c16e['noSpr'+_0x58f91d(0x23c)]){var _0x2ff7a3=_0x56fd85[_0x58f91d(0x62d)](_0x449247,_0x108691,-0xd1*0x17+-0x239*0x1+0x15a4,_0x58f91d(0x4b2)),_0x63ca30=_0x449247(_0x108691,-0xf9d*-0x1+0x2*-0xc13+0x8b9*0x1,'f32');if(_0x56fd85[_0x58f91d(0x340)](_0x2ff7a3,null))_0x56fd85[_0x58f91d(0x2b1)](_0xc25913,_0x108691,0x1351+-0x34b*-0x2+-0x1d*0xdf,_0x56fd85['TmyFU'],0x220c*-0x1+-0x1289*0x1+-0x1187*-0x3);if(_0x63ca30!=null)_0xc25913(_0x108691,-0x1ea2+-0x2333+-0x1*-0x4205,'f32',-0x1*-0xa6c+0x199b+0x2407*-0x1);}_0x44c16e[_0x58f91d(0x275)+_0x58f91d(0x1f8)]&&_0xc25913(_0x108691,-0x17d6+0x5*-0x2c+0x194e,_0x58f91d(0x6a1),Math[_0x58f91d(0x3de)](-0x35*-0xb5+-0x55*-0x26+0x3216*-0x1,Number(_0x44c16e['damag'+_0x58f91d(0x473)+'e'])||0x441*0x2+-0x37e*0x6+0x4*0x342));}}catch(_0x44b19a){}}else{var _0x3d53d6=_0x3d9cbd[_0x58f91d(0x48e)][_0x58f91d(0x6c4)]('|'),_0x5146ea=-0x108b+0x118+0xf73;while(!![]){switch(_0x3d53d6[_0x5146ea++]){case'0':_0x11bc4b['heigh'+'t']=_0x47f347['round'](_0x4e4490*_0x462238);continue;case'1':var _0x462238=_0x47bf59[_0x58f91d(0x628)+_0x58f91d(0x472)+_0x58f91d(0x2da)+'o']||-0x6*0x54a+0x26c9+0x29*-0x2c;continue;case'2':_0x4797b8[_0x58f91d(0x3aa)]=_0x2eb3ff['round'](_0x3d9cbd[_0x58f91d(0x191)](_0xab15a9,_0x462238));continue;case'3':var _0xab15a9=_0x5e13d9['inner'+_0x58f91d(0x47b)],_0x4e4490=_0x35e61a['inner'+_0x58f91d(0x5c9)+'t'];continue;case'4':_0xe89674['w']=_0xab15a9;continue;case'5':_0x320d6f[_0x58f91d(0x184)+_0x58f91d(0x450)+'rm'](_0x462238,-0x26ef+0x13c2+0x1*0x132d,0x8*0x32b+0x1b58+0x34b*-0x10,_0x462238,0x417+-0x190b+-0x12a*-0x12,-0x1*-0xda+-0xdbc+0xce2);continue;case'6':if(_0xab15a9===_0x26536f['w']&&_0x3d9cbd[_0x58f91d(0x416)](_0x4e4490,_0x3cafe3['h'])&&_0x3d9cbd['hMuJm'](_0x462238,_0xf0049c[_0x58f91d(0x5dc)]))return;continue;case'7':_0x391d81['dpr']=_0x462238;continue;case'8':_0x28955a['h']=_0x4e4490;continue;}break;}}},0x42e+-0x2ee+0xb4),setInterval(()=>{var _0x467d04=_0x51e73e,_0x467c8d={'XhVud':_0x56fd85['qoxFe'],'WwNMJ':function(_0x955b88,_0x42e8cf){return _0x955b88===_0x42e8cf;},'hKOIN':_0x56fd85[_0x467d04(0x61a)],'sAMOz':'kour-'+'io_','njxER':_0x467d04(0x3b7)};if(_0x56fd85['JOrfB']==='fHBTX')for(var _0x78d6e7 of[_0x467c8d['XhVud'],'kour-'+_0x467d04(0x69b)+'8x90-'+_0x467d04(0x58b)+'t',_0x467d04(0x54d)+'io_30'+'0x600'+'-pare'+'nt',_0x467d04(0x433)+_0x467d04(0x4d7)+_0x467d04(0x457)+'s']){var _0x1c4278=_0x32da82[_0x467d04(0x599)+_0x467d04(0x52f)+'ById'](_0x78d6e7);if(_0x1c4278&&_0x467c8d['WwNMJ'](_0x78d6e7,_0x467c8d['hKOIN'])){var _0xcd5c3b=_0x1c4278[_0x467d04(0x6c3)+'ren'];for(var _0x38b13b=-0x2eb+0x1d*0x14c+-0x22b1;_0x38b13b<_0xcd5c3b[_0x467d04(0x2f6)+'h'];_0x38b13b++){if(_0xcd5c3b[_0x38b13b]['id']&&_0xcd5c3b[_0x38b13b]['id'][_0x467d04(0x3e9)+'Of'](_0x467c8d['sAMOz'])===0xdae+-0xd*0x1b5+-0x1*-0x883)_0xcd5c3b[_0x38b13b]['style'][_0x467d04(0x332)+'ay']='none';}}else{if(_0x1c4278)_0x1c4278['style'][_0x467d04(0x332)+'ay']=_0x467c8d['njxER'];}}else{_0x288c94['gameL'+_0x467d04(0x171)]=!!window[_0x467d04(0x22f)+'Insta'+_0x467d04(0x251)];try{var _0x5d3b72=-0x2c3*-0x5+-0x1056+0x287;for(var _0x21b483 in _0x1aa18b){if(_0x1aa18b[_0x21b483]&&_0x1aa18b[_0x21b483][_0x467d04(0x626)+'ed'])_0x5d3b72++;}_0x288c94[_0x467d04(0x214)+'Ok']=_0x5d3b72;}catch(_0x13561e){}}},-0x1a5f+0x3*-0x1c+0x1e9b);var _0x12d881=new Set(),_0x12cd01={0x1:[],0x3:[]},_0x32e0fc=![];function _0x5bf78c(_0x567a77){_0x12d881['add'](_0x567a77['code']);}function _0x4708d5(_0x33c663){var _0x18d8a2=_0x51e73e;_0x56fd85['huxsL']===_0x56fd85[_0x18d8a2(0x350)]?_0x2049cf[_0x18d8a2(0x32c)][_0x18d8a2(0x194)+_0x18d8a2(0x28f)+'d'](_0x84cbb5):_0x12d881[_0x18d8a2(0x226)+'e'](_0x33c663[_0x18d8a2(0x501)]);}function _0x2440de(_0x64a51b){var _0x5174d0=_0x51e73e;if(_0x64a51b[_0x5174d0(0x63a)+_0x5174d0(0x2bd)])return;_0x12d881[_0x5174d0(0x208)](_0x56fd85[_0x5174d0(0x2d4)](_0x5174d0(0x672),_0x56fd85[_0x5174d0(0x671)](_0x64a51b[_0x5174d0(0x63b)+'n'],0x1508+-0xf*0x4e+-0x1075*0x1)));var _0x21000a=_0x12cd01[_0x64a51b['butto'+'n']+(-0x8d8+0x7*-0x2fc+-0x1dbd*-0x1)];if(_0x21000a){if(_0x56fd85[_0x5174d0(0x372)]==='bpkHh'){_0x21000a['push'](performance[_0x5174d0(0x660)]());if(_0x21000a['lengt'+'h']>0x1217+0x1e8f+0x6*-0x815)_0x21000a[_0x5174d0(0x55b)]();}else _0x3bf162[_0x5174d0(0x6a2)+'e']=_0xde84bd,_0x24060a();}}function _0x7436f(_0x342e1e){var _0xd16f92=_0x51e73e;if(_0x56fd85[_0xd16f92(0x6a6)](_0xd16f92(0x440),_0x56fd85[_0xd16f92(0x66f)]))try{_0x88e3d7['setIt'+'em'](_0x56fd85['fbbhE'],_0x3aa221['strin'+'gify'](_0x57eff3));}catch(_0x2a1038){}else{if(!_0x342e1e['__sak'+_0xd16f92(0x2bd)])_0x12d881['delet'+'e'](_0x56fd85[_0xd16f92(0x671)](_0xd16f92(0x672),_0x342e1e['butto'+'n']+(-0x3e6*-0x5+0x10*0x16e+-0x2a5d)));}}function _0x2fd703(){var _0x52f3c0=_0x51e73e;_0x12d881[_0x52f3c0(0x400)]();}function _0x4df949(){var _0x44923b=_0x51e73e;if(_0x56fd85['KlUqk'](_0x56fd85['HQqUt'],_0x44923b(0x35a)))try{new _0x4c76ed(_0x191ac0)[_0x44923b(0x1fd)+_0x44923b(0x421)](_0x5e6f9d,_0x1753a3,_0xe86450);}catch(_0xc3580b){}else{if(_0x32e0fc)return;_0x32e0fc=!![],window[_0x44923b(0x4d2)+_0x44923b(0x5e1)+'stene'+'r'](_0x56fd85['hemJO'],_0x5bf78c,!![]),window['addEv'+_0x44923b(0x5e1)+'stene'+'r']('keyup',_0x4708d5,!![]),window['addEv'+'entLi'+_0x44923b(0x69c)+'r']('mouse'+'down',_0x2440de,!![]),window[_0x44923b(0x4d2)+_0x44923b(0x5e1)+'stene'+'r'](_0x44923b(0x672)+'up',_0x7436f,!![]),window[_0x44923b(0x4d2)+_0x44923b(0x5e1)+_0x44923b(0x69c)+'r']('blur',_0x2fd703);}}function _0x38420f(_0x32ca63){var _0x47c321=_0x12cd01[_0x32ca63]||[],_0x267e8c=performance['now']();while(_0x47c321['lengt'+'h']&&_0x267e8c-_0x47c321[-0x1808+-0x162f*0x1+0x2e37]>-0x91e*0x2+0x1756+-0x132)_0x47c321['shift']();return _0x47c321['lengt'+'h'];}function _0x4cdf40(_0x461d1d){var _0x466bf7=_0x51e73e;if(document['body']&&(document[_0x466bf7(0x395)+'State']===_0x56fd85[_0x466bf7(0x576)]||document[_0x466bf7(0x395)+_0x466bf7(0x390)]===_0x56fd85[_0x466bf7(0x5d5)]))_0x56fd85[_0x466bf7(0x352)](_0x461d1d);else document['addEv'+'entLi'+_0x466bf7(0x69c)+'r'](_0x466bf7(0x357)+_0x466bf7(0x63d)+_0x466bf7(0x291)+'d',_0x461d1d,{'once':!![]});}_0x56fd85['xyvox'](_0x4cdf40,()=>{var _0x2e0e45=_0x51e73e,_0x323862={'aJWGM':_0x2e0e45(0x54d)+_0x2e0e45(0x56c)+_0x2e0e45(0x2a7)+_0x2e0e45(0x2aa)+'nt','BzyoR':_0x2e0e45(0x54d)+_0x2e0e45(0x69b)+_0x2e0e45(0x634)+_0x2e0e45(0x58b)+'t','AOKKW':_0x56fd85[_0x2e0e45(0x61a)],'jazlZ':function(_0x4f669c,_0x5a13b3){return _0x4f669c===_0x5a13b3;},'QYULw':function(_0x2c0fa0,_0x2abdab){return _0x2c0fa0*_0x2abdab;},'qyphe':_0x56fd85[_0x2e0e45(0x5c3)],'wbNVh':function(_0x1c8a6b,_0x3806ce,_0x2ae906){return _0x56fd85['fsarx'](_0x1c8a6b,_0x3806ce,_0x2ae906);},'ZJRpZ':_0x56fd85[_0x2e0e45(0x3c1)],'pHNNw':function(_0x244a0c,_0x10dcd3){return _0x244a0c+_0x10dcd3;},'SMJhp':_0x2e0e45(0x211)+'es:\x20','LHsmQ':function(_0x18aece,_0x4af925){return _0x18aece>=_0x4af925;},'ukqLJ':function(_0x20bf18,_0x58754f,_0x18de48){var _0x54588b=_0x2e0e45;return _0x56fd85[_0x54588b(0x51e)](_0x20bf18,_0x58754f,_0x18de48);},'iuTgB':'rgba('+'255,1'+_0x2e0e45(0x2d8)+'0,0.6'+')','YseNk':_0x2e0e45(0x325)+_0x2e0e45(0x286)+'2|7|6'+'|5|10'+'|3','yZPgD':function(_0x5ebae7,_0x44a08c){var _0x58bc76=_0x2e0e45;return _0x56fd85[_0x58bc76(0x509)](_0x5ebae7,_0x44a08c);},'UzvZy':function(_0x2121cd){return _0x2121cd();},'jaqBt':function(_0x584b76,_0x2c009d){return _0x584b76(_0x2c009d);},'vNvqP':function(_0xc2ac62,_0x3ad31e){return _0xc2ac62>_0x3ad31e;},'iGjUD':_0x56fd85[_0x2e0e45(0x17a)],'mLiAJ':_0x2e0e45(0x63b)+'n','ghnda':function(_0x143678){return _0x143678();},'VwbUC':_0x2e0e45(0x3f6),'GxnxS':_0x2e0e45(0x57a),'uwxYc':_0x2e0e45(0x24d),'aQDXM':'input','zFHmi':_0x56fd85['yfhiS'],'hJNNR':'span','NEhTk':function(_0x51f750){return _0x51f750();},'jDwlU':_0x2e0e45(0x2fe),'FwkLv':_0x56fd85['EMtmt'],'CQrOd':function(_0x4bbf9c,_0x3532a7){return _0x4bbf9c+_0x3532a7;},'LZfPT':_0x2e0e45(0x33f),'OAbij':'MTxFT','XdCfN':_0x56fd85[_0x2e0e45(0x2a0)],'NlpSF':_0x56fd85[_0x2e0e45(0x4d6)],'VuSqS':_0x2e0e45(0x6c1)+_0x2e0e45(0x26d)+'0','SNchQ':function(_0x4913f2,_0x344f2d){var _0x31eb03=_0x2e0e45;return _0x56fd85[_0x31eb03(0x4e3)](_0x4913f2,_0x344f2d);},'CRKAf':function(_0x2c5b45,_0x4015ee){return _0x2c5b45+_0x4015ee;},'qgglC':'Statu'+'s','OPeHu':_0x56fd85[_0x2e0e45(0x4ad)],'YAYXq':_0x2e0e45(0x656),'nGoWM':function(_0xb2c8b2,_0x362e2f){return _0xb2c8b2+_0x362e2f;},'QqKuJ':_0x56fd85[_0x2e0e45(0x691)],'uYdER':function(_0x334dd1,_0x26e6c5){return _0x56fd85['mGNBS'](_0x334dd1,_0x26e6c5);},'AYTGY':_0x56fd85['wYmQZ'],'XaBSN':function(_0x1e7f16){return _0x1e7f16();},'fdxOM':function(_0xd1e582,_0x1f4c68){return _0xd1e582===_0x1f4c68;},'laJSi':function(_0x5ae5fb){return _0x56fd85['VNvyU'](_0x5ae5fb);},'DBMYH':_0x56fd85[_0x2e0e45(0x3c9)],'eHLgb':_0x56fd85[_0x2e0e45(0x1ac)],'fHLfa':'tAdjD','aCdxF':_0x56fd85['WsiNz'],'KvPsB':_0x2e0e45(0x27f),'FycYZ':function(_0x15e54f,_0x426c48){var _0x1b88e7=_0x2e0e45;return _0x56fd85[_0x1b88e7(0x3fb)](_0x15e54f,_0x426c48);},'ZUbZI':function(_0x2e820e,_0x21e381,_0x40f7d7,_0x23f178,_0x584d03,_0x38e7cc){var _0x446890=_0x2e0e45;return _0x56fd85[_0x446890(0x632)](_0x2e820e,_0x21e381,_0x40f7d7,_0x23f178,_0x584d03,_0x38e7cc);},'XQoyT':_0x2e0e45(0x20e)+'\x20Shoo'+_0x2e0e45(0x57b)+'astSh'+_0x2e0e45(0x443)+_0x2e0e45(0x210)+_0x2e0e45(0x5a4)+_0x2e0e45(0x391)+'\x20Serv'+'er\x20ma'+'y\x20sti'+_0x2e0e45(0x55c)+'te\x20sh'+_0x2e0e45(0x2ef),'OutCM':function(_0x3edd88,_0x3f209f,_0x205d80,_0xed256d,_0x1e10cf,_0x347f79){return _0x56fd85['FyWjC'](_0x3edd88,_0x3f209f,_0x205d80,_0xed256d,_0x1e10cf,_0x347f79);},'NbzTd':_0x56fd85['wOncn'],'yIBGY':function(_0x3af7af,_0x2f9a9e,_0x46f9ac,_0x3666a6){return _0x3af7af(_0x2f9a9e,_0x46f9ac,_0x3666a6);},'HNAmD':'Damag'+_0x2e0e45(0x6ad)+'ue','ngEkV':_0x2e0e45(0x265)+_0x2e0e45(0x364)+_0x2e0e45(0x172)+_0x2e0e45(0x1a3),'Jirvr':'GetCu'+_0x2e0e45(0x3e0)+_0x2e0e45(0x646)+'alway'+_0x2e0e45(0x280)+_0x2e0e45(0x239)+_0x2e0e45(0x422)+_0x2e0e45(0x5fb)+'works'+_0x2e0e45(0x430)+'he\x20ga'+'me\x20ga'+'tes\x20o'+'n\x20it.','TsMop':_0x56fd85['mrQOL'],'pIyPW':function(_0x71a65a,_0x2aa340,_0x3dd6fc,_0x3b47ed,_0x4c45de,_0x19bbf6){return _0x71a65a(_0x2aa340,_0x3dd6fc,_0x3b47ed,_0x4c45de,_0x19bbf6);},'Rsphb':_0x56fd85['GElCx'],'URfEI':function(_0x32a560,_0xd659f6,_0x1166ef,_0x2d864d,_0x4d7c4f,_0x2a33b4){return _0x32a560(_0xd659f6,_0x1166ef,_0x2d864d,_0x4d7c4f,_0x2a33b4);},'vRiTK':function(_0x3c356f,_0x59b0be,_0x37c66d,_0x27588f){return _0x3c356f(_0x59b0be,_0x37c66d,_0x27588f);},'IteAz':'visua'+'l','hCGRa':function(_0x7c631b,_0x20f81a,_0x5b8eca,_0x343644){return _0x7c631b(_0x20f81a,_0x5b8eca,_0x343644);},'KRtYD':function(_0xeb7a01,_0x3a5922,_0x3d75f4,_0x2941e2){var _0x3243d8=_0x2e0e45;return _0x56fd85[_0x3243d8(0x1f3)](_0xeb7a01,_0x3a5922,_0x3d75f4,_0x2941e2);},'xzpLt':_0x56fd85['mJYHG'],'rTbxC':_0x2e0e45(0x4e5)+_0x2e0e45(0x335)+'e','ZAIuQ':function(_0x2b6cce,_0xea6a38,_0x18cdbb,_0x27839f){return _0x56fd85['mCmUE'](_0x2b6cce,_0xea6a38,_0x18cdbb,_0x27839f);},'NXXNm':function(_0x236403,_0x431394,_0xf3d42b,_0x3e45db,_0x110534,_0x2c1619){return _0x56fd85['FyWjC'](_0x236403,_0x431394,_0xf3d42b,_0x3e45db,_0x110534,_0x2c1619);},'vgWTt':_0x56fd85['zmmNs'],'STUVC':function(_0x18cca0,_0x38e1e2,_0x40856f,_0x2fd7ab,_0x430d6b,_0x24d674){return _0x18cca0(_0x38e1e2,_0x40856f,_0x2fd7ab,_0x430d6b,_0x24d674);},'hVMHl':function(_0x2cff29,_0x4f289d,_0x2e7b09,_0x35f8f0){var _0x4ed05b=_0x2e0e45;return _0x56fd85[_0x4ed05b(0x477)](_0x2cff29,_0x4f289d,_0x2e7b09,_0x35f8f0);},'rdaXZ':_0x2e0e45(0x405),'RwpqG':function(_0x114e9e,_0x57ea97,_0x387140,_0x36f151,_0x5366c6,_0x567964){return _0x114e9e(_0x57ea97,_0x387140,_0x36f151,_0x5366c6,_0x567964);},'XLeez':_0x56fd85[_0x2e0e45(0x465)],'kKkUg':function(_0x32ae42,_0x42f7da,_0x13fb73,_0x1f2221,_0x16610b,_0x28ea11){var _0x8d5656=_0x2e0e45;return _0x56fd85[_0x8d5656(0x542)](_0x32ae42,_0x42f7da,_0x13fb73,_0x1f2221,_0x16610b,_0x28ea11);},'aGsrf':_0x56fd85['tNdQx'],'ZOoDI':function(_0x598ad5,_0x422447,_0x4b046c,_0x1fa05a,_0x480c52,_0x528b77){return _0x598ad5(_0x422447,_0x4b046c,_0x1fa05a,_0x480c52,_0x528b77);},'KDOye':_0x56fd85['uEQSy'],'wmLTT':function(_0x5bd2bc,_0x401e9a,_0x5d73fd,_0x11cfe5){return _0x5bd2bc(_0x401e9a,_0x5d73fd,_0x11cfe5);},'kYOAL':_0x56fd85[_0x2e0e45(0x18a)],'vKQek':function(_0x55cd9a,_0x320cbb){return _0x55cd9a!==_0x320cbb;},'SiaKx':_0x2e0e45(0x415),'DKtwn':function(_0x49a3bf){return _0x49a3bf();},'hahfX':_0x2e0e45(0x2f7),'WJxxw':_0x2e0e45(0x676),'cRFqT':_0x2e0e45(0x224)+_0x2e0e45(0x468)+_0x2e0e45(0x28b)+_0x2e0e45(0x428)+_0x2e0e45(0x322)+'d\x20','YUWVm':_0x2e0e45(0x267)+'d','ePird':_0x56fd85[_0x2e0e45(0x574)],'tJrrY':_0x56fd85['hNxEq'],'JLTzY':_0x56fd85[_0x2e0e45(0x19a)],'PWwWT':'mn-cl'+_0x2e0e45(0x637),'QGcxP':_0x2e0e45(0x439)+'ls','DcMCd':'mn-ta'+'b','KseLd':_0x56fd85[_0x2e0e45(0x3b8)],'CHIYH':_0x2e0e45(0x3eb)+'ll>','kOjlk':_0x2e0e45(0x35b)+'t','gpbWf':function(_0xef8f9c,_0x1cd6d8){return _0xef8f9c!==_0x1cd6d8;},'apQtk':function(_0x163ea9){return _0x163ea9();}};_0x44c16e[_0x2e0e45(0x5ca)+'ck']&&_0x56fd85[_0x2e0e45(0x2c3)](setInterval,()=>{var _0x100dd0=_0x2e0e45;try{for(var _0x5ab63f of[_0x323862[_0x100dd0(0x545)],_0x323862[_0x100dd0(0x37a)],_0x100dd0(0x54d)+'io_30'+'0x600'+_0x100dd0(0x2aa)+'nt',_0x323862[_0x100dd0(0x615)]]){var _0x178a34=document[_0x100dd0(0x599)+'ement'+'ById'](_0x5ab63f);if(_0x178a34&&_0x5ab63f===_0x100dd0(0x433)+_0x100dd0(0x4d7)+_0x100dd0(0x457)+'s'){var _0x50cba1=_0x178a34['child'+'ren'];for(var _0x3c30ef=0x24ff+-0xef2+0x160d*-0x1;_0x3c30ef<_0x50cba1['lengt'+'h'];_0x3c30ef++){if(_0x50cba1[_0x3c30ef]['id']&&_0x323862[_0x100dd0(0x330)](_0x50cba1[_0x3c30ef]['id'][_0x100dd0(0x3e9)+'Of']('kour-'+_0x100dd0(0x50f)),-0x2*-0x22d+0xa16+-0xe70))_0x50cba1[_0x3c30ef]['style']['displ'+'ay']='none';}}else{if(_0x178a34)_0x178a34[_0x100dd0(0x415)][_0x100dd0(0x332)+'ay']=_0x100dd0(0x3b7);}}}catch(_0x1fb1c6){}},0x1d63+-0x1577+-0x1c*0x1);var _0x5d5b9c=document[_0x2e0e45(0x5f8)+_0x2e0e45(0x2e6)+'ent'](_0x56fd85[_0x2e0e45(0x58a)]);_0x5d5b9c['style']['cssTe'+'xt']=_0x2e0e45(0x39a)+_0x2e0e45(0x53e)+_0x2e0e45(0x3c7)+'inset'+':0;wi'+'dth:1'+_0x2e0e45(0x1bb)+_0x2e0e45(0x2ec)+_0x2e0e45(0x460)+_0x2e0e45(0x489)+'index'+_0x2e0e45(0x186)+'48364'+_0x2e0e45(0x39c)+_0x2e0e45(0x697)+'event'+'s:non'+'e';var _0x1db5b1=_0x5d5b9c[_0x2e0e45(0x5bd)+_0x2e0e45(0x59e)]('2d');function _0x25f42d(){var _0x2136df=_0x2e0e45;try{var _0x18b901=document[_0x2136df(0x433)+'creen'+'Eleme'+'nt'],_0x7e0714=_0x18b901&&_0x18b901['tagNa'+'me']!=='CANVA'+'S'?_0x18b901:document[_0x2136df(0x32c)]||document['docum'+_0x2136df(0x3cd)+_0x2136df(0x52f)];if(_0x5d5b9c[_0x2136df(0x58b)+'tNode']!==_0x7e0714)_0x7e0714[_0x2136df(0x194)+'dChil'+'d'](_0x5d5b9c);}catch(_0x2dc969){try{document['body'][_0x2136df(0x194)+_0x2136df(0x28f)+'d'](_0x5d5b9c);}catch(_0x21fbd1){}}}var _0x20545b={'w':0x0,'h':0x0,'dpr':0x0};function _0x17e9a5(){var _0x4a5e86=_0x2e0e45,_0x1defa1=window['devic'+'ePixe'+'lRati'+'o']||0x23e5+0x971*0x1+-0x2d55,_0x354b6f=window[_0x4a5e86(0x2c1)+_0x4a5e86(0x47b)],_0x385eb2=window[_0x4a5e86(0x2c1)+_0x4a5e86(0x5c9)+'t'];if(_0x354b6f===_0x20545b['w']&&_0x323862[_0x4a5e86(0x330)](_0x385eb2,_0x20545b['h'])&&_0x1defa1===_0x20545b['dpr'])return;_0x20545b['w']=_0x354b6f,_0x20545b['h']=_0x385eb2,_0x20545b['dpr']=_0x1defa1,_0x5d5b9c['width']=Math[_0x4a5e86(0x435)](_0x323862[_0x4a5e86(0x18f)](_0x354b6f,_0x1defa1)),_0x5d5b9c[_0x4a5e86(0x2ec)+'t']=Math[_0x4a5e86(0x435)](_0x323862[_0x4a5e86(0x18f)](_0x385eb2,_0x1defa1)),_0x1db5b1[_0x4a5e86(0x184)+'ansfo'+'rm'](_0x1defa1,-0x25c8+0xd*0x5b+-0x1*-0x2129,0x3*-0xb8f+-0x89*-0x20+0x1*0x118d,_0x1defa1,-0x295*0x1+0x8*-0x2d7+0x194d,0xd7c+0x2*0x896+-0x1ea8);}var _0x4128f3=-0x144c+0x367*0x5+0x349,_0x325597=performance[_0x2e0e45(0x660)](),_0x15ccf2=-0x16ef+0x12da+-0xb*-0x5f;function _0x101726(_0x20714c){var _0x17a08e=_0x2e0e45,_0x2bb8c8={'xbheD':_0x17a08e(0x59f)+_0x17a08e(0x5ef)+_0x17a08e(0x398)+'7)','yxziY':_0x56fd85[_0x17a08e(0x1f4)],'CkpSX':_0x56fd85[_0x17a08e(0x5d1)],'KFawt':_0x56fd85[_0x17a08e(0x4c0)],'YhsKK':function(_0x4dbb05,_0x135a3f){var _0xbb37e1=_0x17a08e;return _0x56fd85[_0xbb37e1(0x3d1)](_0x4dbb05,_0x135a3f);},'MDByM':function(_0x4b4fc1,_0x5863f5){return _0x4b4fc1+_0x5863f5;},'PDaLb':_0x17a08e(0x26e)+_0x17a08e(0x333)+_0x17a08e(0x424)+_0x17a08e(0x402)+_0x17a08e(0x394)+'i,san'+'s-ser'+'if','CjECK':_0x56fd85[_0x17a08e(0x2b3)],'qZrnq':function(_0x1d7d6b,_0x1b1eb7){return _0x1d7d6b/_0x1b1eb7;}},_0xf7e9f4=_0x56fd85['KyIBi'](Number,_0x44c16e[_0x17a08e(0x6b7)+'le'])||0xe92+-0x129+-0xd68,_0x2be186=(0x15d*-0x6+-0x6*0xe1+0xd96)*_0xf7e9f4,_0x59120d=_0x56fd85['wJoHX'](-0x1*0x337+0x11da*-0x2+0x26ef,_0xf7e9f4),_0x26143=_0x56fd85['wJoHX'](_0x2be186,-0xe99+0x662+0x83a)+_0x59120d*(-0x517+-0x26d+0x12*0x6b),_0x2de582=_0x56fd85[_0x17a08e(0x495)](_0x2be186,0xcf6+0x36e*0xa+-0x2f3f)+_0x59120d*(-0x119a+0x177c+-0x2*0x2f0),_0x27675b=_0x44c16e[_0x17a08e(0x40e)],_0x25fb00=_0x56fd85[_0x17a08e(0x329)](_0x27675b,'br')?_0x56fd85[_0x17a08e(0x509)](_0x20714c[_0x17a08e(0x629)],0x6be*0x1+-0x5*0x5bd+0x1603)-_0x26143:_0x20714c['left']+(-0x2103*-0x1+-0x1740+-0x9b3),_0x557556=_0x56fd85[_0x17a08e(0x329)](_0x27675b,'ml')?_0x56fd85['xHste'](_0x56fd85[_0x17a08e(0x671)](_0x20714c[_0x17a08e(0x678)],_0x20714c[_0x17a08e(0x2ec)+'t']/(0x2cf*0x1+0x186+-0x453*0x1)),_0x56fd85['cYdbp'](_0x2de582,-0xe2*-0x19+-0x3a*0x8f+-0x12*-0x93)):_0x20714c[_0x17a08e(0x3a1)+'m']-_0x2de582-(_0x56fd85[_0x17a08e(0x329)](_0x27675b,'bl')?0x998*0x1+-0xa*0x14+0x1e*-0x48:-0x44a*0x7+-0x584+0x2420),_0xd2b956=(_0x24d4b8,_0x31ffe1,_0x32eae7,_0x298278,_0x42aa4,_0x41a5e2,_0x1abea3)=>{var _0x3a9eeb=_0x17a08e,_0x3ea2a7=_0x12d881['has'](_0x31ffe1);_0x1db5b1[_0x3a9eeb(0x2b6)](),_0x1db5b1[_0x3a9eeb(0x6ce)+_0x3a9eeb(0x346)]();if(_0x1db5b1['round'+'Rect'])_0x1db5b1['round'+_0x3a9eeb(0x342)](_0x32eae7,_0x298278,_0x42aa4,_0x41a5e2,(0x114d*-0x1+0x5*-0x3ec+0x8*0x49e)*_0xf7e9f4);else _0x1db5b1['rect'](_0x32eae7,_0x298278,_0x42aa4,_0x41a5e2);_0x1db5b1[_0x3a9eeb(0x201)+_0x3a9eeb(0x1d2)]=_0x3ea2a7?_0x3a9eeb(0x59f)+_0x3a9eeb(0x4dd)+_0x3a9eeb(0x510)+'7,0.8'+'5)':_0x2bb8c8['xbheD'],_0x1db5b1['fill'](),_0x1db5b1['lineW'+_0x3a9eeb(0x25d)]=-0x174d+-0x1b82+0x30*0x10f,_0x1db5b1['strok'+_0x3a9eeb(0x51d)+'e']=_0x3ea2a7?_0x157627:_0x3a9eeb(0x59f)+'255,1'+_0x3a9eeb(0x510)+_0x3a9eeb(0x617)+'5)',_0x1db5b1[_0x3a9eeb(0x2d7)+'e'](),_0x3ea2a7&&(_0x1db5b1[_0x3a9eeb(0x2bf)+_0x3a9eeb(0x39e)+'r']=_0x4619aa,_0x1db5b1['shado'+_0x3a9eeb(0x254)]=0x20e+0x17ef*-0x1+0x5*0x463,_0x1db5b1[_0x3a9eeb(0x21d)](),_0x1db5b1[_0x3a9eeb(0x2bf)+'wBlur']=0xb*-0x5f+0x5eb*-0x2+0xfeb),_0x1db5b1[_0x3a9eeb(0x201)+_0x3a9eeb(0x1d2)]=_0x3ea2a7?_0x2bb8c8[_0x3a9eeb(0x3e8)]:_0x2bb8c8[_0x3a9eeb(0x3a7)],_0x1db5b1[_0x3a9eeb(0x2fc)+_0x3a9eeb(0x5b0)]=_0x2bb8c8['KFawt'],_0x1db5b1['textB'+'aseli'+'ne']=_0x3a9eeb(0x335)+'e',_0x1db5b1['font']=_0x2bb8c8[_0x3a9eeb(0x602)](_0x2bb8c8[_0x3a9eeb(0x68a)]('700\x20',Math['round']((0xef+0x343*-0x5+-0x234*-0x7)*_0xf7e9f4)),_0x2bb8c8['PDaLb']),_0x1db5b1[_0x3a9eeb(0x3ca)+_0x3a9eeb(0x196)](_0x24d4b8,_0x2bb8c8[_0x3a9eeb(0x602)](_0x32eae7,_0x42aa4/(0x17bb+0x607*-0x4+-0x21*-0x3)),_0x298278+_0x41a5e2/(0x19b8+-0x1a31+-0x3*-0x29)-(_0x1abea3?(-0x59*0x49+0x1cc2+-0x4*0xd7)*_0xf7e9f4:-0xb*-0x119+0x3*-0xcbe+0x1a27)),_0x1abea3&&(_0x1db5b1[_0x3a9eeb(0x590)]=_0x2bb8c8[_0x3a9eeb(0x284)]+Math[_0x3a9eeb(0x435)]((0x1e1+-0x2114+-0x1f3c*-0x1)*_0xf7e9f4)+_0x2bb8c8['PDaLb'],_0x1db5b1[_0x3a9eeb(0x201)+_0x3a9eeb(0x1d2)]=_0x3ea2a7?_0x2bb8c8[_0x3a9eeb(0x3e8)]:'rgba('+_0x3a9eeb(0x4c6)+_0x3a9eeb(0x19c)+'0,0.5'+'5)',_0x1db5b1[_0x3a9eeb(0x3ca)+_0x3a9eeb(0x196)](_0x1abea3,_0x32eae7+_0x42aa4/(0x26*-0xe6+0x209f+0x17*0x11),_0x298278+_0x2bb8c8[_0x3a9eeb(0x29d)](_0x41a5e2,-0x1*-0x1228+-0x1319+0xf3)+(0xe7+0x1*-0x264e+0x256f)*_0xf7e9f4)),_0x1db5b1['resto'+'re']();};_0xd2b956('W',_0x17a08e(0x6ba),_0x25fb00+_0x2be186+_0x59120d,_0x557556,_0x2be186,_0x2be186),_0x56fd85['jBtqT'](_0xd2b956,'A','KeyA',_0x25fb00,_0x557556+_0x2be186+_0x59120d,_0x2be186,_0x2be186),_0x56fd85[_0x17a08e(0x31c)](_0xd2b956,'S',_0x56fd85['oETBy'],_0x56fd85[_0x17a08e(0x2d4)](_0x56fd85['bMryp'](_0x25fb00,_0x2be186),_0x59120d),_0x56fd85['yqPvN'](_0x557556+_0x2be186,_0x59120d),_0x2be186,_0x2be186),_0x56fd85['jBtqT'](_0xd2b956,'D',_0x17a08e(0x4f7),_0x25fb00+_0x56fd85[_0x17a08e(0x174)](_0x2be186,_0x59120d)*(0x1*0xb44+0x1b52+0x66e*-0x6),_0x557556+_0x2be186+_0x59120d,_0x2be186,_0x2be186);var _0x5911e7=_0x56fd85[_0x17a08e(0x5ce)](_0x56fd85[_0x17a08e(0x509)](_0x26143,_0x59120d),0x67*-0x53+0x15e1+0x3b*0x32),_0x13b02a=_0x56fd85['YKXvC'](_0x557556,_0x56fd85['muZKx'](_0x2be186,_0x59120d)*(0xcc3+0x1434+-0x20f5));_0x56fd85['IoJkM'](_0xd2b956,_0x17a08e(0x48f),_0x56fd85[_0x17a08e(0x52b)],_0x25fb00,_0x13b02a,_0x5911e7,_0x2be186,_0x44c16e[_0x17a08e(0x374)]?_0x38420f(0x2*-0xa63+0x26*-0x90+0x21*0x147)+_0x17a08e(0x5a5):''),_0x56fd85[_0x17a08e(0x648)](_0xd2b956,_0x56fd85[_0x17a08e(0x60c)],_0x56fd85[_0x17a08e(0x483)],_0x56fd85[_0x17a08e(0x24a)](_0x25fb00,_0x5911e7)+_0x59120d,_0x13b02a,_0x5911e7,_0x2be186,_0x44c16e[_0x17a08e(0x374)]?_0x56fd85[_0x17a08e(0x3a6)](_0x38420f(-0x1266+0x22e4+-0x107b*0x1),_0x17a08e(0x5a5)):''),_0xd2b956('',_0x56fd85['eGUta'],_0x25fb00,_0x56fd85['rQpOF'](_0x13b02a+_0x2be186,_0x59120d),_0x26143,_0x2be186*(0x1da8+-0x966+-0x1442+0.45));}function _0x4ec0ff(_0x1b3d35){var _0x166fc8=_0x2e0e45,_0x4b1565=_0x56fd85[_0x166fc8(0x5ce)](_0x1b3d35[_0x166fc8(0x3aa)],0x1*0xf16+0x1d67+0x2c7b*-0x1),_0x10e49b=_0x56fd85['HrNKU'](_0x1b3d35['heigh'+'t'],-0x65f+0xb91*0x1+-0x530),_0x336b7c=Number(_0x44c16e[_0x166fc8(0x6a2)+'e'])||0xe*0x1a5+-0x17*-0x9c+-0x2509,_0x3725a7=/^#[0-9a-f]{6}$/i[_0x166fc8(0x688)](_0x44c16e['chCol'+'or'])?_0x44c16e[_0x166fc8(0x497)+'or']:_0x166fc8(0x6a4)+'9d';_0x1db5b1['save'](),_0x1db5b1[_0x166fc8(0x2d7)+'eStyl'+'e']=_0x3725a7,_0x1db5b1[_0x166fc8(0x201)+_0x166fc8(0x1d2)]=_0x3725a7,_0x1db5b1['lineW'+_0x166fc8(0x25d)]=Math[_0x166fc8(0x3de)](-0x58c*-0x1+-0x21a8+-0x95f*-0x3+0.5,_0x56fd85[_0x166fc8(0x3d2)](-0x19c6+-0x18d6+0x329e,_0x336b7c)),_0x1db5b1[_0x166fc8(0x2bf)+_0x166fc8(0x39e)+'r']=_0x3725a7,_0x1db5b1['shado'+'wBlur']=-0x1*0xb3a+0x2fb*-0xb+0x2c09;var _0x2573f8=_0x56fd85[_0x166fc8(0x383)](0xe22*0x1+0x6b*-0x2d+0x4b3*0x1,_0x336b7c),_0x1e29f4=(0x1c6*-0x1+0x1531+-0x1363)*_0x336b7c;_0x1db5b1[_0x166fc8(0x6ce)+_0x166fc8(0x346)](),_0x1db5b1[_0x166fc8(0x2dd)+'o'](_0x4b1565-_0x2573f8-_0x1e29f4,_0x10e49b),_0x1db5b1['lineT'+'o'](_0x56fd85['AZgGM'](_0x4b1565,_0x2573f8),_0x10e49b),_0x1db5b1['moveT'+'o'](_0x56fd85[_0x166fc8(0x2d4)](_0x4b1565,_0x2573f8),_0x10e49b),_0x1db5b1['lineT'+'o'](_0x56fd85['bMryp'](_0x4b1565+_0x2573f8,_0x1e29f4),_0x10e49b),_0x1db5b1['moveT'+'o'](_0x4b1565,_0x10e49b-_0x2573f8-_0x1e29f4),_0x1db5b1[_0x166fc8(0x3fa)+'o'](_0x4b1565,_0x56fd85[_0x166fc8(0x4a7)](_0x10e49b,_0x2573f8)),_0x1db5b1['moveT'+'o'](_0x4b1565,_0x10e49b+_0x2573f8),_0x1db5b1[_0x166fc8(0x3fa)+'o'](_0x4b1565,_0x56fd85[_0x166fc8(0x3d1)](_0x10e49b,_0x2573f8)+_0x1e29f4),_0x1db5b1['strok'+'e'](),_0x1db5b1[_0x166fc8(0x6ce)+'Path'](),_0x1db5b1['arc'](_0x4b1565,_0x10e49b,_0x56fd85[_0x166fc8(0x495)](-0x7f2+0x2de*-0x7+-0x957*-0x3+0.6000000000000001,_0x336b7c),0x7*0x361+0x2*0x12b+-0x19fd,Math['PI']*(-0x3*0x97+-0x2*-0xffc+-0x1e31)),_0x1db5b1[_0x166fc8(0x21d)](),_0x1db5b1[_0x166fc8(0x34d)+'re']();}function _0x3b762f(_0x324023){var _0x37821c=_0x2e0e45;_0x1db5b1[_0x37821c(0x2b6)](),_0x1db5b1[_0x37821c(0x590)]='600\x201'+_0x37821c(0x667)+'i-mon'+_0x37821c(0x4b8)+_0x37821c(0x1d6)+_0x37821c(0x4b8)+'e',_0x1db5b1[_0x37821c(0x2fc)+_0x37821c(0x5b0)]=_0x37821c(0x67c),_0x1db5b1[_0x37821c(0x365)+_0x37821c(0x318)+'ne']=_0x37821c(0x678);var _0x502245=-0xfda+0x10*0x66+0x9a6,_0x759e28=0x1efc+0x851*0x2+-0x2f92,_0x4e04e6=(_0x5302ab,_0x191e60)=>{var _0x56825f=_0x37821c;_0x1db5b1[_0x56825f(0x201)+'tyle']=_0x191e60||_0x323862['qyphe'],_0x1db5b1['fillT'+'ext'](_0x5302ab,_0x759e28,_0x502245),_0x502245+=0x2e*0xd2+0x12bd+0x80f*-0x7;};_0x323862['wbNVh'](_0x4e04e6,_0x323862[_0x37821c(0x375)],_0x37821c(0x6a4)+'9d');if(_0x44c16e[_0x37821c(0x273)])_0x4e04e6(_0x15ccf2+_0x37821c(0x6ae));if(_0x44c16e['enemy'+'Count'])_0x4e04e6(_0x323862['pHNNw'](_0x323862[_0x37821c(0x50a)],_0x323862['LHsmQ'](_0x288c94[_0x37821c(0x211)+'esVis'+'ible'],-0xbd*0x27+0x1a31+-0x6*-0x6f)?_0x288c94['enemi'+'esVis'+'ible']:'—'));if(!_0x288c94[_0x37821c(0x60a)+_0x37821c(0x171)])_0x323862[_0x37821c(0x427)](_0x4e04e6,_0x37821c(0x445)+_0x37821c(0x338)+'r\x20gam'+'e…',_0x323862['iuTgB']);_0x1db5b1[_0x37821c(0x34d)+'re']();}function _0xd97e3(){var _0x50c892=_0x2e0e45,_0xdf6d07=_0x323862[_0x50c892(0x60e)]['split']('|'),_0x5c4c8f=0x166d+0xa4*-0x8+-0x114d;while(!![]){switch(_0xdf6d07[_0x5c4c8f++]){case'0':_0x323862[_0x50c892(0x681)](_0x2e220e,_0x325597)>=0x966*-0x1+-0x26b9+0x3213&&(_0x15ccf2=Math[_0x50c892(0x435)](_0x323862['QYULw'](_0x4128f3,-0x1*0x895+0x1*0xa2a+0x23*0x11)/_0x323862['yZPgD'](_0x2e220e,_0x325597)),_0x4128f3=-0x5f9+-0x1*0xfcb+0x15c4,_0x325597=_0x2e220e);continue;case'1':_0x4128f3++;continue;case'2':_0x323862['UzvZy'](_0x25f42d);continue;case'3':_0x323862['jaqBt'](_0x3b762f,_0x176806);continue;case'4':_0x323862[_0x50c892(0x289)](requestAnimationFrame,_0xd97e3);continue;case'5':if(_0x44c16e[_0x50c892(0x283)+_0x50c892(0x694)])_0x4ec0ff(_0x176806);continue;case'6':var _0x176806={'left':0x0,'top':0x0,'right':_0x20545b['w'],'bottom':_0x20545b['h'],'width':_0x20545b['w'],'height':_0x20545b['h']};continue;case'7':_0x1db5b1[_0x50c892(0x400)+'Rect'](0xaab+0x1eee+0x17*-0x1cf,-0x1b02+0x11*0xb3+-0x4f*-0x31,_0x20545b['w'],_0x20545b['h']);continue;case'8':var _0x2e220e=performance[_0x50c892(0x660)]();continue;case'9':_0x17e9a5();continue;case'10':if(_0x44c16e['keyst'+'rokes'])_0x101726(_0x176806);continue;}break;}}var _0x353d89=document[_0x2e0e45(0x5f8)+_0x2e0e45(0x2e6)+_0x2e0e45(0x68d)](_0x56fd85['wnriu']);_0x353d89['id']=_0x56fd85[_0x2e0e45(0x6bb)],_0x353d89[_0x2e0e45(0x415)][_0x2e0e45(0x1b5)+'xt']=_0x2e0e45(0x39a)+'ion:f'+_0x2e0e45(0x3c7)+'inset'+_0x2e0e45(0x1cd)+_0x2e0e45(0x3e9)+_0x2e0e45(0x186)+_0x2e0e45(0x200)+_0x2e0e45(0x524)+'nter-'+_0x2e0e45(0x503)+_0x2e0e45(0x5b1)+'e;';var _0x43e6fd=_0x353d89[_0x2e0e45(0x2b0)+'hShad'+'ow']({'mode':'open'});(document['body']||document['docum'+_0x2e0e45(0x3cd)+_0x2e0e45(0x52f)])[_0x2e0e45(0x194)+'dChil'+'d'](_0x353d89);var _0x406c25=![],_0x11f51f={};try{_0x11f51f=JSON['parse'](localStorage['getIt'+'em'](_0x56fd85['HmzMG'])||'{}');}catch(_0xb53969){}function _0x2530a2(){var _0x4091dc=_0x2e0e45;if(_0x4091dc(0x3f0)!==_0x323862[_0x4091dc(0x683)])try{localStorage['setIt'+'em']('sakur'+_0x4091dc(0x4cd)+_0x4091dc(0x22e)+'v1',JSON[_0x4091dc(0x5d7)+'gify'](_0x11f51f));}catch(_0x3f1d74){}else{if(!_0x1c532b||_0x7b6637[_0x4091dc(0x451)+_0x4091dc(0x55a)](_0xa375ff)||_0x323862[_0x4091dc(0x4fc)](_0x12de89['lengt'+'h'],0x1*0xb67+0x1fb3+0x892*-0x5))return;_0xae1d0c['push'](_0x31d1c4);}}function _0x3eb6ea(_0x56cfa9,_0x5d2182){var _0x320a55=_0x2e0e45,_0x53fa78={'KKrlc':function(_0x3e5b2d,_0x40848a){return _0x3e5b2d!==_0x40848a;},'sPLaD':'true','fKUoD':function(_0x1872c6,_0x1e2a97){return _0x1872c6(_0x1e2a97);}},_0x310b91=document[_0x320a55(0x5f8)+_0x320a55(0x2e6)+_0x320a55(0x68d)](_0x323862[_0x320a55(0x601)]);return _0x310b91[_0x320a55(0x2c5)]='butto'+'n',_0x310b91[_0x320a55(0x4dc)+'Name']='sk-sw'+_0x320a55(0x55e),_0x310b91[_0x320a55(0x507)+_0x320a55(0x1e6)+'te'](_0x320a55(0x49b),_0x320a55(0x594)+'h'),_0x310b91['setAt'+'tribu'+'te'](_0x320a55(0x521)+_0x320a55(0x4fa)+'ed',String(!!_0x56cfa9)),_0x310b91['oncli'+'ck']=_0x2c0e43=>{var _0x4eb344=_0x320a55;_0x2c0e43['stopP'+'ropag'+_0x4eb344(0x492)]();var _0x2ce039=_0x53fa78[_0x4eb344(0x3e7)](_0x310b91[_0x4eb344(0x630)+_0x4eb344(0x1e6)+'te']('aria-'+'check'+'ed'),_0x53fa78[_0x4eb344(0x63c)]);_0x310b91[_0x4eb344(0x507)+_0x4eb344(0x1e6)+'te']('aria-'+'check'+'ed',_0x53fa78['fKUoD'](String,_0x2ce039)),_0x5d2182(_0x2ce039);},_0x310b91;}function _0x6c6371(_0x4b0b19,_0x1ec6d9,_0x1a382e,_0x95bb0d,_0x1c1513){var _0xcfde5a=_0x2e0e45,_0x4fd797={'YtCxi':function(_0x5dbc63){return _0x323862['ghnda'](_0x5dbc63);},'lqfrA':_0x323862[_0xcfde5a(0x5ff)],'miyYf':function(_0x2d29c5,_0x134486){return _0x2d29c5(_0x134486);},'gTfPv':_0x323862[_0xcfde5a(0x4cf)],'mUnEt':function(_0x884331,_0x5596df){return _0x323862['pHNNw'](_0x884331,_0x5596df);},'NCYeN':function(_0x2a60b0,_0x6c2aa4){return _0x2a60b0/_0x6c2aa4;},'BsBlY':function(_0x25db84,_0x4c2d58){return _0x25db84-_0x4c2d58;}},_0x90e73e=document[_0xcfde5a(0x5f8)+_0xcfde5a(0x2e6)+_0xcfde5a(0x68d)](_0x323862[_0xcfde5a(0x419)]);_0x90e73e[_0xcfde5a(0x4dc)+_0xcfde5a(0x4ce)]=_0xcfde5a(0x6b9)+_0xcfde5a(0x413);var _0x110151=document[_0xcfde5a(0x5f8)+_0xcfde5a(0x2e6)+_0xcfde5a(0x68d)](_0x323862['aQDXM']);_0x110151[_0xcfde5a(0x2c5)]='range',_0x110151[_0xcfde5a(0x4dc)+_0xcfde5a(0x4ce)]=_0x323862[_0xcfde5a(0x315)],_0x110151['min']=_0x1ec6d9,_0x110151[_0xcfde5a(0x3de)]=_0x1a382e,_0x110151['step']=_0x95bb0d,_0x110151[_0xcfde5a(0x36c)]=_0x4b0b19;var _0xd9f21=document[_0xcfde5a(0x5f8)+_0xcfde5a(0x2e6)+_0xcfde5a(0x68d)](_0x323862[_0xcfde5a(0x612)]);_0xd9f21['class'+'Name']=_0xcfde5a(0x5a8)+'l',_0xd9f21['textC'+_0xcfde5a(0x190)+'t']=String(_0x4b0b19);var _0x5be18a=()=>{var _0x535afe=_0xcfde5a;'yxbnm'!==_0x4fd797[_0x535afe(0x216)]?(_0x37c932['cross'+'hair']=_0xcdc41c,_0x4fd797['YtCxi'](_0xe8a37)):(_0xd9f21['textC'+'onten'+'t']=_0x4fd797[_0x535afe(0x34b)](String,_0x110151['value']),_0x90e73e[_0x535afe(0x415)][_0x535afe(0x550)+'opert'+'y'](_0x4fd797['gTfPv'],_0x4fd797['mUnEt'](_0x4fd797['NCYeN'](_0x110151[_0x535afe(0x36c)]-_0x1ec6d9,_0x4fd797[_0x535afe(0x52e)](_0x1a382e,_0x1ec6d9))*(-0x1*-0x476+0x2*-0xcfa+0x15e2),'%')));};return _0x110151[_0xcfde5a(0x4e8)+'ut']=()=>{var _0x54eb51=_0xcfde5a;if('PEXHJ'==='PEXHJ')_0x5be18a(),_0x1c1513(Number(_0x110151['value']));else{if(_0x1739e7[_0x11c51d]['id']&&_0x367a74[_0x4bfd09]['id']['index'+'Of'](_0x54eb51(0x54d)+'io_')===-0x2f8+-0x5cd+0x8c5*0x1)_0x3dbba2[_0x573de6]['style'][_0x54eb51(0x332)+'ay']=_0x54eb51(0x3b7);}},_0x323862['NEhTk'](_0x5be18a),_0x90e73e['appen'+'d'](_0x110151,_0xd9f21),_0x90e73e;}function _0x21bca2(_0xd360fb,_0x24e016){var _0x2c5309=_0x2e0e45,_0x599373=(_0x2c5309(0x469)+_0x2c5309(0x1eb)+'0')['split']('|'),_0x3501b2=-0x1f3*-0x13+0x0+0x2509*-0x1;while(!![]){switch(_0x599373[_0x3501b2++]){case'0':return _0x50fb52;case'1':_0x50fb52['oninp'+'ut']=()=>_0x24e016(_0x50fb52[_0x2c5309(0x36c)]);continue;case'2':_0x50fb52[_0x2c5309(0x4dc)+'Name']=_0x56fd85[_0x2c5309(0x551)];continue;case'3':var _0x50fb52=document['creat'+'eElem'+_0x2c5309(0x68d)](_0x2c5309(0x546));continue;case'4':_0x50fb52['type']=_0x56fd85[_0x2c5309(0x65f)];continue;case'5':_0x50fb52[_0x2c5309(0x36c)]=/^#[0-9a-f]{6}$/i[_0x2c5309(0x688)](_0xd360fb)?_0xd360fb:_0x2c5309(0x6a4)+'9d';continue;}break;}}function _0x1dbc4f(_0x4efa42,_0x41f174,_0x1304eb){var _0x174b88=_0x2e0e45,_0x21abe9=document[_0x174b88(0x5f8)+_0x174b88(0x2e6)+_0x174b88(0x68d)](_0x56fd85[_0x174b88(0x5b8)]);_0x21abe9[_0x174b88(0x4dc)+'Name']=_0x174b88(0x5fa)+_0x174b88(0x4c5);for(var [_0x536c8b,_0x2e655f]of _0x41f174){var _0xae9a5a=document[_0x174b88(0x5f8)+_0x174b88(0x2e6)+_0x174b88(0x68d)](_0x174b88(0x4f6)+'n');_0xae9a5a[_0x174b88(0x36c)]=_0x536c8b,_0xae9a5a['textC'+'onten'+'t']=_0x2e655f,_0x21abe9[_0x174b88(0x194)+'dChil'+'d'](_0xae9a5a);}return _0x21abe9['value']=_0x4efa42,_0x21abe9['oncha'+'nge']=()=>_0x1304eb(_0x21abe9['value']),_0x21abe9;}function _0x1e9b2c(_0x54f47b,_0x5df330){var _0x2fb625=_0x2e0e45;if('nxOxt'===_0x56fd85['lYOBj']){_0x172c93[_0x2fb625(0x211)+'esVis'+_0x2fb625(0x1bd)]=-0x19fd+-0x2058+0x3a55;return;}else{var _0x48b974=document[_0x2fb625(0x5f8)+_0x2fb625(0x2e6)+_0x2fb625(0x68d)](_0x56fd85[_0x2fb625(0x555)]);return _0x48b974[_0x2fb625(0x2c5)]='butto'+'n',_0x48b974['class'+_0x2fb625(0x4ce)]=_0x56fd85[_0x2fb625(0x62e)],_0x48b974['textC'+_0x2fb625(0x190)+'t']=_0x54f47b,_0x48b974[_0x2fb625(0x313)+'ck']=_0x53feb3=>{var _0x3cb5bb=_0x2fb625;_0x53feb3[_0x3cb5bb(0x5db)+'ropag'+_0x3cb5bb(0x492)](),_0x5df330();},_0x48b974;}}function _0xd1b837(_0x236414,_0xb8a847,_0x1de8c2){var _0x28bc5b=_0x2e0e45;if(_0x323862['jazlZ']('wtWbB',_0x323862[_0x28bc5b(0x19b)])){var _0x11310b=(_0x28bc5b(0x441)+_0x28bc5b(0x296)+_0x28bc5b(0x635))[_0x28bc5b(0x6c4)]('|'),_0x4b7c39=0x1*-0x1393+0x161a+-0x287;while(!![]){switch(_0x11310b[_0x4b7c39++]){case'0':_0xad06f7[_0x28bc5b(0x30c)+'onten'+'t']=_0x236414;continue;case'1':return _0x169d75;case'2':var _0xad06f7=document['creat'+_0x28bc5b(0x2e6)+_0x28bc5b(0x68d)]('span');continue;case'3':_0xad06f7[_0x28bc5b(0x4dc)+'Name']=_0x28bc5b(0x1b7)+_0x28bc5b(0x1f1);continue;case'4':var _0x169d75=document['creat'+'eElem'+_0x28bc5b(0x68d)](_0x28bc5b(0x24d));continue;case'5':if(_0xb8a847){var _0x5d2513=document[_0x28bc5b(0x5f8)+'eElem'+'ent']('small');_0x5d2513['class'+_0x28bc5b(0x4ce)]=_0x28bc5b(0x4ab)+'nt',_0x5d2513['textC'+'onten'+'t']=_0xb8a847,_0xad06f7[_0x28bc5b(0x194)+'dChil'+'d'](_0x5d2513);}continue;case'6':_0x169d75[_0x28bc5b(0x194)+'d'](_0xad06f7,_0x1de8c2);continue;case'7':_0x169d75['class'+_0x28bc5b(0x4ce)]=_0x28bc5b(0x1c3)+'l';continue;}break;}}else{if(_0x5bee5e[_0x171e88]&&_0x330343[_0x5eb009][_0x28bc5b(0x626)+'ed'])_0x9dd597++;}}function _0x3cf3c0(_0x1c57c9,_0x4db7bd){var _0x3de3d6=_0x2e0e45;if(_0x323862[_0x3de3d6(0x330)](_0x323862[_0x3de3d6(0x2d5)],_0x3de3d6(0x1e9))){var _0x215355=document['creat'+_0x3de3d6(0x2e6)+_0x3de3d6(0x68d)]('div');return _0x215355[_0x3de3d6(0x4dc)+_0x3de3d6(0x4ce)]=_0x323862[_0x3de3d6(0x261)]('sk-no'+'te',_0x4db7bd?_0x3de3d6(0x1fc):''),_0x215355['textC'+'onten'+'t']=_0x1c57c9,_0x215355;}else _0x312f21=new _0x2c9f2f(),_0x3ad24c[_0x3de3d6(0x2a3)](_0x3089fc,_0x225ec3);}function _0x23eae1(_0x44bcbf,_0x228384,_0x32e52f,_0x377d47,_0x22fd3b){var _0x5f0e34=_0x2e0e45,_0x3bad5f=_0x56fd85['DZzVu'][_0x5f0e34(0x6c4)]('|'),_0x382470=-0x194+-0x22a2+0x2436;while(!![]){switch(_0x3bad5f[_0x382470++]){case'0':var _0x59f472=document[_0x5f0e34(0x5f8)+_0x5f0e34(0x2e6)+'ent'](_0x5f0e34(0x24d));continue;case'1':_0x3c47ca['appen'+'dChil'+'d'](_0x270252);continue;case'2':_0x59f472['appen'+_0x5f0e34(0x28f)+'d'](_0x444d0f);continue;case'3':_0x3c47ca['class'+_0x5f0e34(0x4ce)]=_0x56fd85[_0x5f0e34(0x616)](_0x5f0e34(0x1c8)+'rd',_0x32e52f?_0x5f0e34(0x47d):'');continue;case'4':_0x59f472[_0x5f0e34(0x4dc)+_0x5f0e34(0x4ce)]=_0x5f0e34(0x1c8)+_0x5f0e34(0x243)+_0x5f0e34(0x36a);continue;case'5':var _0x270252=document[_0x5f0e34(0x5f8)+'eElem'+_0x5f0e34(0x68d)](_0x5f0e34(0x24d));continue;case'6':_0x444d0f[_0x5f0e34(0x30c)+_0x5f0e34(0x190)+'t']=_0x44bcbf;continue;case'7':var _0x444d0f=document[_0x5f0e34(0x5f8)+_0x5f0e34(0x2e6)+_0x5f0e34(0x68d)](_0x5f0e34(0x4b7)+'g');continue;case'8':var _0x3c47ca=document[_0x5f0e34(0x5f8)+_0x5f0e34(0x2e6)+_0x5f0e34(0x68d)](_0x56fd85[_0x5f0e34(0x5fc)]);continue;case'9':if(_0x377d47){var _0x3fa6df=_0x3eb6ea(_0x32e52f,_0xa83959=>{var _0x475056=_0x5f0e34;_0x3c47ca[_0x475056(0x4dc)+_0x475056(0x298)][_0x475056(0x658)+'e']('on',_0xa83959),_0x323862['jaqBt'](_0x377d47,_0xa83959);});_0x270252[_0x5f0e34(0x194)+'d'](_0x59f472,_0x3fa6df);}else _0x270252[_0x5f0e34(0x194)+_0x5f0e34(0x28f)+'d'](_0x59f472);continue;case'10':return _0x3c47ca;case'11':_0x270252['class'+_0x5f0e34(0x4ce)]=_0x5f0e34(0x1c8)+_0x5f0e34(0x229)+'ad';continue;case'12':if(_0x22fd3b&&_0x22fd3b['lengt'+'h']){var _0x32e30e=document['creat'+_0x5f0e34(0x2e6)+'ent']('div');_0x32e30e['class'+'Name']='sk-mb'+_0x5f0e34(0x5df);var _0x11a62f=document['creat'+'eElem'+_0x5f0e34(0x68d)](_0x56fd85[_0x5f0e34(0x5fc)]);_0x11a62f['class'+_0x5f0e34(0x4ce)]='sk-md'+_0x5f0e34(0x56b),_0x11a62f['textC'+_0x5f0e34(0x190)+'t']=_0x228384,_0x32e30e[_0x5f0e34(0x194)+_0x5f0e34(0x28f)+'d'](_0x11a62f);for(var _0x176705 of _0x22fd3b)_0x32e30e[_0x5f0e34(0x194)+_0x5f0e34(0x28f)+'d'](_0x176705);_0x3c47ca['appen'+_0x5f0e34(0x28f)+'d'](_0x32e30e);}continue;}break;}}var _0x57e96c=[{'id':_0x2e0e45(0x50d)+'t','label':'Comba'+'t'},{'id':_0x56fd85['mrQOL'],'label':_0x56fd85[_0x2e0e45(0x60f)]},{'id':_0x2e0e45(0x4f4)+'l','label':'Visua'+'l'},{'id':_0x2e0e45(0x636),'label':'Misc'},{'id':_0x2e0e45(0x6c6),'label':'Safet'+'y'}];function _0x1317b7(){var _0x31ca0c=_0x2e0e45,_0x497423={'dBPko':function(_0x361424,_0x2e7f7d){return _0x361424===_0x2e7f7d;}};if(_0x31ca0c(0x3df)!==_0x31ca0c(0x1d0)){var _0x4d9464=_0x288c94['safeM'+_0x31ca0c(0x47f)]?_0x31ca0c(0x3b4)+_0x31ca0c(0x531)+_0x31ca0c(0x2ff)+_0x31ca0c(0x6aa)+_0x31ca0c(0x4eb)+'\x20no\x20h'+_0x31ca0c(0x39b)+'(relo'+_0x31ca0c(0x6cc)+'\x20exit'+')':_0x288c94[_0x31ca0c(0x5b5)]?_0x323862['SNchQ'](_0x323862[_0x31ca0c(0x261)](_0x323862[_0x31ca0c(0x261)]('UWMK\x20'+_0x31ca0c(0x468)+'\x20—\x20ho'+'oks\x20a'+_0x31ca0c(0x322)+'d\x20'+_0x288c94['hooks'+'Ok']+'/',_0x288c94['hooks'+_0x31ca0c(0x69a)]),_0x31ca0c(0x20c)+'me\x20'),_0x288c94[_0x31ca0c(0x60a)+_0x31ca0c(0x171)]?'loade'+'d':_0x31ca0c(0x25e)+'ng')+(_0x31ca0c(0x5d4)+_0x31ca0c(0x4bf)+'\x20')+_0x288c94[_0x31ca0c(0x6a5)]:_0x31ca0c(0x224)+_0x31ca0c(0x1a4)+'NG\x20—\x20'+_0x31ca0c(0x45e)+'ay\x20on'+_0x31ca0c(0x236)+_0x31ca0c(0x20a)+'all\x20t'+_0x31ca0c(0x22d)+'erscr'+'ipt)';if(_0x288c94[_0x31ca0c(0x464)+_0x31ca0c(0x534)])_0x4d9464+=_0x323862['CRKAf'](_0x31ca0c(0x20d)+_0x31ca0c(0x463),_0x288c94[_0x31ca0c(0x464)+_0x31ca0c(0x534)]);return _0x23eae1(_0x323862['qgglC'],_0x4d9464,_0x288c94['uwmk'],null,[_0xd1b837(_0x31ca0c(0x285)+'PS\x20un'+'lock',_0x323862['OPeHu'],_0x1e9b2c(_0x31ca0c(0x2b2),()=>{var _0x1750b3=_0x31ca0c,_0x3202ef={'blXxX':function(_0x306b4a,_0x4f57e9){return _0x306b4a*_0x4f57e9;},'XsUUh':function(_0x56e862,_0x3a72d4){return _0x56e862-_0x3a72d4;}};if(_0x323862[_0x1750b3(0x22c)]!==_0x1750b3(0x33f)){if(_0x3a9d0e[_0x1750b3(0x32c)]&&(_0x497423[_0x1750b3(0x32a)](_0x532547[_0x1750b3(0x395)+_0x1750b3(0x390)],'inter'+'activ'+'e')||_0x2d87ed[_0x1750b3(0x395)+'State']===_0x1750b3(0x442)+_0x1750b3(0x64d)))_0x5ea742();else _0x4f3e45[_0x1750b3(0x4d2)+'entLi'+'stene'+'r'](_0x1750b3(0x357)+_0x1750b3(0x63d)+'Loade'+'d',_0x495978,{'once':!![]});}else try{if('MTxFT'===_0x323862[_0x1750b3(0x255)]){if(_0x153c87){try{_0x153c87[_0x1750b3(0x22a)](_0x323862['XdCfN'],_0x1750b3(0x2a1)+_0x1750b3(0x1fe)+_0x1750b3(0x45a)+'ate',[0x2*0xe20+-0x1*0x18f9+0x257*-0x1]);}catch(_0xe35d2d){}try{_0x153c87[_0x1750b3(0x22a)]('Unity'+_0x1750b3(0x518)+_0x1750b3(0x505)+_0x1750b3(0x37f)+'ion',_0x1750b3(0x502)+_0x1750b3(0x176)+'Frame'+_0x1750b3(0x5ba),[-0x3*-0xb83+0x11*-0x2e+-0x1e8b]);}catch(_0x224ec9){}}try{if(_0x1750b3(0x26c)!=='yyyKZ')window[_0x1750b3(0x22f)+_0x1750b3(0x1aa)+_0x1750b3(0x268)+_0x1750b3(0x23b)]&&window['unity'+_0x1750b3(0x1aa)+_0x1750b3(0x268)+_0x1750b3(0x23b)][_0x1750b3(0x4da)+_0x1750b3(0x53a)+'e'](_0x323862['NlpSF'],_0x1750b3(0x337)+_0x1750b3(0x69f)+_0x1750b3(0x1a6)+_0x1750b3(0x677)+'dJS','x');else{if(!_0x56aae2['__sak'+'ura'])_0x289e16[_0x1750b3(0x226)+'e'](_0x1750b3(0x672)+(_0x403ab4['butto'+'n']+(-0x1170+-0x2545+0x36b6)));}}catch(_0xcb9a26){}}else _0x432b6e=_0x4f355c[_0x1750b3(0x435)](_0x3202ef['blXxX'](_0x8fa180,0x140f+-0x10c3*0x2+-0x115f*-0x1)/_0x3202ef[_0x1750b3(0x47c)](_0x4560fb,_0x82f30)),_0x53f2da=0x23b4+-0x1801+-0xbb3,_0x1d85f7=_0x2e63c2;}catch(_0x1b68e6){}}))]);}else{var _0x184f49=_0x323862[_0x31ca0c(0x1db)][_0x31ca0c(0x6c4)]('|'),_0x1ce693=0x16f3+0x1bfb+-0x3*0x10fa;while(!![]){switch(_0x184f49[_0x1ce693++]){case'0':return _0x10577b;case'1':var _0x10577b=_0x1bdd16[_0x31ca0c(0x5f8)+_0x31ca0c(0x2e6)+_0x31ca0c(0x68d)](_0x31ca0c(0x63b)+'n');continue;case'2':_0x10577b['type']=_0x31ca0c(0x63b)+'n';continue;case'3':_0x10577b[_0x31ca0c(0x4dc)+_0x31ca0c(0x4ce)]=_0x31ca0c(0x3f7)+'n';continue;case'4':_0x10577b['oncli'+'ck']=_0x378f93=>{var _0x3774e9=_0x31ca0c;_0x378f93['stopP'+'ropag'+_0x3774e9(0x492)](),_0x5a10f4();};continue;case'5':_0x10577b['textC'+'onten'+'t']=_0x31e573;continue;}break;}}}function _0x293a6f(_0x322677){var _0x12ef3a=_0x2e0e45,_0x151280={'fLpWd':function(_0x3660d3){var _0x18ed8a=_0x2601;return _0x323862[_0x18ed8a(0x447)](_0x3660d3);},'JRvbk':'godRp'+'c','qxcpb':function(_0x208944,_0x1f8f77,_0x4910d0){return _0x208944(_0x1f8f77,_0x4910d0);},'Fybfd':function(_0x25865a){return _0x25865a();},'UIxaq':function(_0x4bd1f5){return _0x4bd1f5();},'SOBzD':_0x323862['KvPsB'],'rIphC':function(_0x45bf38,_0x5a92a7){var _0x5b7677=_0x2601;return _0x323862[_0x5b7677(0x5f1)](_0x45bf38,_0x5a92a7);}};if(_0x323862[_0x12ef3a(0x5f1)](_0x322677,'comba'+'t')){if('qPnRs'!=='FTgYK')return[_0x323862['NEhTk'](_0x1317b7),_0x323862[_0x12ef3a(0x41c)](_0x23eae1,'God\x20M'+'ode',_0x12ef3a(0x23f)+_0x12ef3a(0x625)+_0x12ef3a(0x449)+_0x12ef3a(0x43f)+'ge\x20RP'+'Cs\x20(H'+'ealth'+_0x12ef3a(0x328)+_0x12ef3a(0x44e)+_0x12ef3a(0x38d)+'+\x20Ini'+'tiate'+_0x12ef3a(0x40b)+'ealth'+').',_0x44c16e[_0x12ef3a(0x64f)],_0x620bed=>{var _0x5973d2=_0x12ef3a;_0x44c16e['god']=_0x620bed,_0x5a711b(),_0x323862[_0x5973d2(0x533)](_0x17c4f8,'godRp'+'c',_0x620bed),_0x17c4f8(_0x5973d2(0x262)+'it',_0x620bed);},[]),_0x23eae1(_0x12ef3a(0x2ed)+'coil',_0x12ef3a(0x23f)+'s\x20Rec'+'oil.R'+_0x12ef3a(0x624)+'Fire.',_0x44c16e['noRec'+_0x12ef3a(0x21b)],_0x5de68f=>{var _0x4fdc47=_0x12ef3a;_0x44c16e[_0x4fdc47(0x245)+'oil']=_0x5de68f,_0x5a711b(),_0x17c4f8(_0x4fdc47(0x245)+'oil',_0x5de68f);},[]),_0x323862['ZUbZI'](_0x23eae1,'No\x20Sp'+_0x12ef3a(0x3e3),'Zeroe'+_0x12ef3a(0x3bf)+_0x12ef3a(0x2fa)+_0x12ef3a(0x253)+_0x12ef3a(0x40c)+_0x12ef3a(0x5af)+'rent\x20'+'weapo'+_0x12ef3a(0x1cf)+'ry\x2050'+_0x12ef3a(0x32b),_0x44c16e['noSpr'+'ead'],_0xa73c8d=>{var _0x30dfde=_0x12ef3a,_0x526b65={'pJvjK':function(_0x32fea1,_0x411b14){return _0x32fea1===_0x411b14;},'BoGGo':_0x323862[_0x30dfde(0x389)],'Guqki':function(_0x1a28e4,_0x37a28d){return _0x323862['nGoWM'](_0x1a28e4,_0x37a28d);},'EqIOx':function(_0x1a0ecf,_0x525d66){return _0x1a0ecf+_0x525d66;},'LAEnP':'loade'+'d','mfWAB':_0x323862['QqKuJ']};if(_0x323862['uYdER'](_0x323862[_0x30dfde(0x5f6)],'SIxvJ')){if(!_0x33182d)return;var _0x5330d0=_0x2d9917[_0x30dfde(0x6c3)+_0x30dfde(0x573)];for(var _0x12e9e2=-0x4eb*0x4+-0x24f5*-0x1+-0x1149;_0x12e9e2<_0x5330d0[_0x30dfde(0x2f6)+'h'];_0x12e9e2++){var _0x578bf3=_0x5330d0[_0x12e9e2]['query'+_0x30dfde(0x535)+_0x30dfde(0x614)](_0x30dfde(0x62c)+_0x30dfde(0x548));_0x578bf3&&(_0x578bf3[_0x30dfde(0x30c)+_0x30dfde(0x190)+'t']['index'+'Of'](_0x30dfde(0x5bf))===-0x4*0x647+-0x1eea+-0x2*-0x1c03||_0x526b65[_0x30dfde(0x4c8)](_0x578bf3['textC'+'onten'+'t'][_0x30dfde(0x3e9)+'Of'](_0x526b65['BoGGo']),0x1823+0x2*0x9d9+-0x2bd5))&&(_0x578bf3[_0x30dfde(0x30c)+_0x30dfde(0x190)+'t']=_0x3216e4['safeM'+_0x30dfde(0x47f)]?'SAFE\x20'+_0x30dfde(0x531)+_0x30dfde(0x2ff)+_0x30dfde(0x6aa)+'only,'+'\x20no\x20h'+'ooks\x20'+_0x30dfde(0x544)+'ad\x20to'+_0x30dfde(0x5ee)+')':_0x2090b9[_0x30dfde(0x5b5)]?_0x526b65['Guqki'](_0x526b65[_0x30dfde(0x65a)](_0x526b65[_0x30dfde(0x3a0)](_0x526b65[_0x30dfde(0x3a0)](_0x30dfde(0x224)+_0x30dfde(0x468)+_0x30dfde(0x28b)+'oks\x20a'+_0x30dfde(0x322)+'d\x20'+_0x462bf7[_0x30dfde(0x214)+'Ok'],'/'),_0x2e52f7['hooks'+_0x30dfde(0x69a)]),_0x30dfde(0x20c)+_0x30dfde(0x1e0))+(_0x415e8f[_0x30dfde(0x60a)+_0x30dfde(0x171)]?_0x526b65[_0x30dfde(0x361)]:'loadi'+'ng'),'\x20|\x20pl'+'ayers'+'\x20')+_0x2cea4d[_0x30dfde(0x6a5)]+(_0x59d414['lastE'+_0x30dfde(0x534)]?_0x526b65['Guqki'](_0x526b65['mfWAB'],_0x3c6ca9[_0x30dfde(0x464)+'rror']):''):'UWMK\x20'+_0x30dfde(0x1a4)+'NG\x20—\x20'+'overl'+'ay\x20on'+_0x30dfde(0x236)+_0x30dfde(0x20a)+'all\x20t'+_0x30dfde(0x22d)+_0x30dfde(0x317)+_0x30dfde(0x61f));}}else _0x44c16e['noSpr'+'ead']=_0xa73c8d,_0x5a711b();},[]),_0x323862[_0x12ef3a(0x41c)](_0x23eae1,_0x12ef3a(0x68f)+'\x20Fire'+_0x12ef3a(0x3c3)+']',_0x323862['XQoyT'],_0x44c16e['rapid'+_0x12ef3a(0x56d)],_0x50a062=>{var _0x4eab69=_0x12ef3a;_0x44c16e[_0x4eab69(0x588)+_0x4eab69(0x56d)]=_0x50a062,_0x151280[_0x4eab69(0x4df)](_0x5a711b);},[]),_0x323862[_0x12ef3a(0x434)](_0x23eae1,_0x323862[_0x12ef3a(0x367)],'Overw'+_0x12ef3a(0x281)+_0x12ef3a(0x3d7)+_0x12ef3a(0x693)+_0x12ef3a(0x4b5)+_0x12ef3a(0x414)+_0x12ef3a(0x5ad)+_0x12ef3a(0x35f)+'rver\x20'+'valid'+_0x12ef3a(0x1b9),_0x44c16e['damag'+_0x12ef3a(0x1f8)],_0x37c73f=>{var _0x1ca2bf=_0x12ef3a;_0x44c16e[_0x1ca2bf(0x275)+'eExp']=_0x37c73f,_0x5a711b();},[_0x323862['yIBGY'](_0xd1b837,_0x323862['HNAmD'],null,_0x6c6371(_0x44c16e[_0x12ef3a(0x275)+_0x12ef3a(0x473)+'e'],-0x1d02+-0x1*-0x1261+0xaab,0x1*-0x1ea0+-0x998+0x2a2c,-0xfc1*-0x1+-0xcb3*0x1+-0x309,_0x5a7be4=>{var _0x2c7f90=_0x12ef3a;_0x44c16e[_0x2c7f90(0x275)+_0x2c7f90(0x473)+'e']=_0x5a7be4,_0x323862['ghnda'](_0x5a711b);}))]),_0x23eae1(_0x323862['ngEkV'],_0x323862[_0x12ef3a(0x4aa)],_0x44c16e['infAm'+_0x12ef3a(0x1df)],_0x41461a=>{var _0x672d1a=_0x12ef3a;_0x44c16e[_0x672d1a(0x665)+'moExp']=_0x41461a,_0x323862[_0x672d1a(0x5f7)](_0x5a711b);},[_0x3cf3c0(_0x12ef3a(0x645)+_0x12ef3a(0x244)+'\x20stil'+_0x12ef3a(0x264)+'in,\x20t'+'he\x20de'+_0x12ef3a(0x5c2)+_0x12ef3a(0x486)+_0x12ef3a(0x5e0)+_0x12ef3a(0x3da)+'s\x20get'+_0x12ef3a(0x607))])];else _0x4d60ad['god']=_0x40c639,_0x11af2b(),_0x44a138(_0x151280['JRvbk'],_0x4aa4ff),_0x151280[_0x12ef3a(0x33a)](_0x31d148,'godIn'+'it',_0x267f68);}if(_0x322677===_0x323862['TsMop'])return[_0x323862[_0x12ef3a(0x434)](_0x23eae1,'Speed',_0x12ef3a(0x17c)+'s\x20gro'+_0x12ef3a(0x56a)+_0x12ef3a(0x384)+'mits\x20'+_0x12ef3a(0x3ab)+_0x12ef3a(0x206)+_0x12ef3a(0x29b),_0x323862['uYdER'](_0x44c16e[_0x12ef3a(0x4a5)+_0x12ef3a(0x4b0)],0x1509+-0x15ca+0x1*0x125),null,[_0xd1b837('Speed'+'\x20%','100\x20='+'\x20defa'+'ult',_0x323862[_0x12ef3a(0x41c)](_0x6c6371,_0x44c16e['speed'+'Pct'],0x25a4+-0xdf*-0x2b+-0x4ae7,-0x1130+-0xe2*-0x20+-0x9e4,-0x280*-0x1+-0x12*-0x102+-0x149f*0x1,_0x5c849b=>{var _0x1dbd86=_0x12ef3a;_0x323862[_0x1dbd86(0x203)](_0x1dbd86(0x5a6),_0x1dbd86(0x19e))?_0x4cf932['assig'+'n'](_0x3a0cab,_0x2a2e66[_0x1dbd86(0x2c6)](_0xc13b3d[_0x1dbd86(0x4c7)+'em'](_0x1dbd86(0x6a9)+'a.kou'+_0x1dbd86(0x67e))||'{}')):(_0x44c16e['speed'+'Pct']=_0x5c849b,_0x323862[_0x1dbd86(0x21c)](_0x5a711b));}))]),_0x323862[_0x12ef3a(0x380)](_0x23eae1,_0x323862[_0x12ef3a(0x584)],'Scale'+_0x12ef3a(0x68c)+'p\x20hei'+_0x12ef3a(0x401)+_0x12ef3a(0x66b)+_0x12ef3a(0x56f),_0x44c16e[_0x12ef3a(0x621)+'ct']!==0x49d*0x5+-0x3*-0x419+-0x22f8||_0x323862['uYdER'](_0x44c16e['gravi'+'tyPct'],0x806+0x1567+-0x1d09),null,[_0xd1b837('Jump\x20'+'%',null,_0x323862[_0x12ef3a(0x212)](_0x6c6371,_0x44c16e['jumpP'+'ct'],0x2359+-0x1*-0xfa9+-0x10f*0x30,-0xd4e+-0x23b0+-0x2*-0x1915,-0xfff+0x2*-0x122b+-0x345a*-0x1,_0x440691=>{var _0x44215a=_0x12ef3a;_0x44c16e[_0x44215a(0x621)+'ct']=_0x440691,_0x323862['laJSi'](_0x5a711b);})),_0x323862['vRiTK'](_0xd1b837,_0x12ef3a(0x5d3)+_0x12ef3a(0x4c1),'lower'+'\x20=\x20fl'+_0x12ef3a(0x539),_0x323862['ZUbZI'](_0x6c6371,_0x44c16e[_0x12ef3a(0x466)+'tyPct'],-0xc0f*-0x1+0x1ffa+0x649*-0x7,0x97f+-0x160f+-0x1c*-0x7a,-0x1633+0x3*0x6ff+0x13b,_0x339bf8=>{var _0x41a5bf=_0x12ef3a;_0x323862[_0x41a5bf(0x679)]===_0x323862['DBMYH']?(_0x44c16e['gravi'+_0x41a5bf(0x5d9)]=_0x339bf8,_0x5a711b()):(_0x22108e[_0x41a5bf(0x572)]=_0x416c36,_0x151280[_0x41a5bf(0x47e)](_0x4ddd0a));}))]),_0x23eae1('Bunny'+_0x12ef3a(0x183),'Sets\x20'+'Playe'+_0x12ef3a(0x57c)+_0x12ef3a(0x297)+_0x12ef3a(0x397)+'oJump'+'.',_0x44c16e[_0x12ef3a(0x572)],_0x36a6fd=>{_0x44c16e['bhop']=_0x36a6fd,_0x5a711b();},[])];if(_0x322677===_0x323862[_0x12ef3a(0x1dd)])return[_0x23eae1(_0x12ef3a(0x355)+'rokes','WASD\x20'+_0x12ef3a(0x578)+_0x12ef3a(0x32f)+'+\x20Spa'+'ce\x20ov'+_0x12ef3a(0x2cc)+'.',_0x44c16e['keyst'+'rokes'],_0x3ef214=>{var _0x27954e=_0x12ef3a;_0x44c16e['keyst'+_0x27954e(0x3e6)]=_0x3ef214,_0x151280['UIxaq'](_0x5a711b);},[_0x323862['hCGRa'](_0xd1b837,_0x12ef3a(0x685)+_0x12ef3a(0x63f),null,_0x323862['KRtYD'](_0x1dbc4f,_0x44c16e[_0x12ef3a(0x40e)],[['bl','Botto'+_0x12ef3a(0x49f)+'t'],['br',_0x323862[_0x12ef3a(0x189)]],['ml',_0x323862['rTbxC']]],_0xc3814d=>{var _0x4bdcfd=_0x12ef3a,_0x81982d={'JynMd':_0x323862['eHLgb']};_0x4bdcfd(0x28d)!==_0x323862[_0x4bdcfd(0x575)]?_0x29888b['setIt'+'em'](_0x81982d['JynMd'],_0x3ee03f[_0x4bdcfd(0x5d7)+_0x4bdcfd(0x5d6)](_0x3a0517)):(_0x44c16e[_0x4bdcfd(0x40e)]=_0xc3814d,_0x323862[_0x4bdcfd(0x5f7)](_0x5a711b));})),_0x323862[_0x12ef3a(0x38b)](_0xd1b837,'Size',null,_0x6c6371(_0x44c16e[_0x12ef3a(0x6b7)+'le'],-0x5*0x1be+-0x1a29+0x22df+0.6,-0x7*0x3ad+0x1753+0x269+0.6000000000000001,-0xdf1+0x1251*-0x2+0x3293+0.05,_0x5c3578=>{var _0x9e6e9f=_0x12ef3a;_0x44c16e[_0x9e6e9f(0x6b7)+'le']=_0x5c3578,_0x5a711b();})),_0xd1b837(_0x12ef3a(0x59a)+_0x12ef3a(0x3bc)+'t',null,_0x3eb6ea(_0x44c16e[_0x12ef3a(0x374)],_0x162f46=>{var _0x2103d7=_0x12ef3a;_0x44c16e[_0x2103d7(0x374)]=_0x162f46,_0x5a711b();}))]),_0x323862['NXXNm'](_0x23eae1,_0x323862[_0x12ef3a(0x4f3)],_0x12ef3a(0x652)+_0x12ef3a(0x3cb)+_0x12ef3a(0x2f2)+_0x12ef3a(0x276)+_0x12ef3a(0x66c),_0x44c16e[_0x12ef3a(0x283)+_0x12ef3a(0x694)],_0x1676de=>{var _0x133888=_0x12ef3a;_0x44c16e['cross'+_0x133888(0x694)]=_0x1676de,_0x323862['XaBSN'](_0x5a711b);},[_0x323862[_0x12ef3a(0x1e8)](_0xd1b837,'Size',null,_0x323862[_0x12ef3a(0x686)](_0x6c6371,_0x44c16e['chSiz'+'e'],-0x1*0x1aa7+-0x230d+0x16*0x2ce+0.5,-0x91c+-0x1b4b+0x2469+0.5,-0x3*0x16f+-0x390+0x7dd+0.1,_0x4b8a5a=>{var _0x44d6b3=_0x12ef3a;_0x323862[_0x44d6b3(0x1b0)]===_0x44d6b3(0x27d)?(_0x44c16e[_0x44d6b3(0x6a2)+'e']=_0x4b8a5a,_0x5a711b()):(_0x62e30a={..._0x2993fb},_0xe6aef7(),_0x5acc19['reloa'+'d']());})),_0x323862[_0x12ef3a(0x293)](_0xd1b837,_0x323862[_0x12ef3a(0x1f5)],null,_0x323862['ukqLJ'](_0x21bca2,_0x44c16e[_0x12ef3a(0x497)+'or'],_0x314a37=>{var _0x5c58fa=_0x12ef3a;_0x44c16e[_0x5c58fa(0x497)+'or']=_0x314a37,_0x323862[_0x5c58fa(0x21c)](_0x5a711b);}))]),_0x323862[_0x12ef3a(0x1ca)](_0x23eae1,'Count'+_0x12ef3a(0x68b),_0x323862[_0x12ef3a(0x487)],_0x44c16e['fps']||_0x44c16e['enemy'+'Count'],null,[_0xd1b837(_0x12ef3a(0x1e2)+_0x12ef3a(0x2f4)+'r',null,_0x3eb6ea(_0x44c16e[_0x12ef3a(0x273)],_0x571be7=>{_0x44c16e['fps']=_0x571be7,_0x5a711b();})),_0xd1b837('Enemy'+'\x20coun'+'ter','from\x20'+'aim-a'+_0x12ef3a(0x559)+_0x12ef3a(0x2af)+'y',_0x3eb6ea(_0x44c16e[_0x12ef3a(0x2f8)+'Count'],_0x970658=>{var _0x49e7ff=_0x12ef3a;_0x44c16e['enemy'+_0x49e7ff(0x662)]=_0x970658,_0x5a711b();}))])];if(_0x322677==='misc')return[_0x23eae1(_0x12ef3a(0x46c)+'ck',_0x12ef3a(0x369)+_0x12ef3a(0x5fd)+_0x12ef3a(0x1d9)+_0x12ef3a(0x47a)+_0x12ef3a(0x4fb)+'ots.',_0x44c16e[_0x12ef3a(0x5ca)+'ck'],_0x5b2427=>{_0x44c16e['adblo'+'ck']=_0x5b2427,_0x5a711b();},[_0x3cf3c0(_0x12ef3a(0x5cc)+'\x20effe'+'ct\x20on'+'\x20relo'+_0x12ef3a(0x5e6)+_0x12ef3a(0x515)+'ggled'+'.')])];return[_0x323862['kKkUg'](_0x23eae1,'Safe\x20'+'Mode\x20'+'(over'+_0x12ef3a(0x608)+_0x12ef3a(0x41f),'Skips'+_0x12ef3a(0x3b2)+'\x20enti'+_0x12ef3a(0x30f)+'—\x20no\x20'+_0x12ef3a(0x24b)+_0x12ef3a(0x214)+'.\x20Use'+_0x12ef3a(0x220)+'\x20if\x20m'+'atche'+'s\x20won'+_0x12ef3a(0x33b)+_0x12ef3a(0x49c),_0x44c16e[_0x12ef3a(0x368)+_0x12ef3a(0x47f)],_0x477301=>{var _0x3ddf1a=_0x12ef3a;_0x44c16e['safeM'+_0x3ddf1a(0x47f)]=_0x477301,_0x323862[_0x3ddf1a(0x5f7)](_0x5a711b),location[_0x3ddf1a(0x65c)+'d']();},[_0x3cf3c0(_0x323862['aGsrf'])]),_0x23eae1(_0x12ef3a(0x650)+'Kille'+'r',_0x12ef3a(0x399)+_0x12ef3a(0x552)+_0x12ef3a(0x6b2)+'age\x20d'+'etect'+'ors\x20a'+_0x12ef3a(0x66d)+'rtup\x20'+'via\x20S'+'topDe'+_0x12ef3a(0x651)+_0x12ef3a(0x396)+'\x20Keep'+_0x12ef3a(0x64a),_0x44c16e['actkK'+'ill'],_0x546036=>{var _0x3136c2=_0x12ef3a;_0x44c16e['actkK'+_0x3136c2(0x4d9)]=_0x546036,_0x5a711b();},[_0x3cf3c0(_0x12ef3a(0x63e)+_0x12ef3a(0x6b0)+'/rapi'+'d\x20gre'+_0x12ef3a(0x6ab)+'raise'+_0x12ef3a(0x24e)+_0x12ef3a(0x3a8)+_0x12ef3a(0x3d8)+'with\x20'+'this\x20'+_0x12ef3a(0x23e),!![])]),_0x323862['ZOoDI'](_0x23eae1,'Dange'+'r',_0x323862['KDOye'],!![],null,[_0x323862['wmLTT'](_0xd1b837,_0x12ef3a(0x4ea)+'my\x20se'+'tting'+'s',null,_0x1e9b2c(_0x323862['kYOAL'],()=>{var _0x140159=_0x12ef3a;if(_0x151280[_0x140159(0x4f5)]('Bxhek',_0x140159(0x563))){var _0x5c530d=new _0x1f61bd(_0x3dc4cf[_0x51cd27])[_0x140159(0x3b0)+_0x140159(0x4e6)](0xf*-0x1a4+0x1*0x99f+-0xfdd*-0x1,_0x151280[_0x140159(0x65d)]);_0x4bee4c=_0x5c530d?_0x5c530d[_0x140159(0x6c2)]():-0x1217+-0x2499+0x1*0x36b0;}else _0x44c16e={..._0x50066b},_0x151280[_0x140159(0x326)](_0x5a711b),location[_0x140159(0x65c)+'d']();}))])];}var _0x6f30aa=null;function _0x1dc363(_0x51bb69){var _0x428660=_0x2e0e45,_0x42d70d={'YKiZt':_0x428660(0x5fa)+_0x428660(0x4c5)};_0x406c25=_0x51bb69;if(!_0x6f30aa){if(_0x323862['vKQek'](_0x428660(0x3c6),_0x428660(0x3c6))){var _0x3c3540=_0x1fb1ce['creat'+'eElem'+_0x428660(0x68d)](_0x428660(0x564)+'t');_0x3c3540[_0x428660(0x4dc)+_0x428660(0x4ce)]=_0x42d70d['YKiZt'];for(var [_0x4a5907,_0x252a8d]of _0x25aa6e){var _0x129cfc=_0x5414f1[_0x428660(0x5f8)+_0x428660(0x2e6)+_0x428660(0x68d)](_0x428660(0x4f6)+'n');_0x129cfc[_0x428660(0x36c)]=_0x4a5907,_0x129cfc['textC'+'onten'+'t']=_0x252a8d,_0x3c3540[_0x428660(0x194)+'dChil'+'d'](_0x129cfc);}return _0x3c3540[_0x428660(0x36c)]=_0x531fe5,_0x3c3540['oncha'+_0x428660(0x413)]=()=>_0x3e0a35(_0x3c3540[_0x428660(0x36c)]),_0x3c3540;}else{var _0x16bfbf=document['creat'+'eElem'+_0x428660(0x68d)](_0x323862[_0x428660(0x404)]);_0x16bfbf[_0x428660(0x30c)+_0x428660(0x190)+'t']=_0x285997,_0x43e6fd[_0x428660(0x194)+'dChil'+'d'](_0x16bfbf),_0x6f30aa=_0x5a6e56(),_0x43e6fd[_0x428660(0x194)+'dChil'+'d'](_0x6f30aa),_0x323862['jaqBt'](requestAnimationFrame,()=>_0x6f30aa['class'+_0x428660(0x298)][_0x428660(0x208)](_0x428660(0x62f)));}}_0x6f30aa['class'+_0x428660(0x298)]['toggl'+'e'](_0x428660(0x62f),_0x51bb69);}function _0x4152fe(){var _0x1ee55d=_0x2e0e45;if(_0x323862['fdxOM'](_0x323862[_0x1ee55d(0x6c7)],_0x1ee55d(0x2f7)))_0x1dc363(!_0x406c25);else{_0x559f4c['cat']=_0x30c82c,_0x323862['DKtwn'](_0x2d6427);var _0x27311a=_0x122700[_0x1ee55d(0x3cc)](_0x36dc15=>_0x36dc15['id']===_0x1f8056)||_0x93af33[0x5*0x4e7+-0x340+-0x1543];_0x2a70d9[_0x1ee55d(0x30c)+'onten'+'t']='Sakur'+_0x1ee55d(0x2ab)+'r\x20—\x20'+_0x27311a[_0x1ee55d(0x2d0)];for(var [_0x384003,_0x4b7884]of _0xc6e218)_0x4b7884[_0x1ee55d(0x4dc)+_0x1ee55d(0x298)][_0x1ee55d(0x658)+'e']('activ'+'e',_0x384003===_0x79c6c1);_0x21bac3[_0x1ee55d(0x2bc)+_0x1ee55d(0x425)+'ldren'](..._0x19accf(_0x3c7b62));}}function _0x5a6e56(){var _0x247e4c=_0x2e0e45,_0x2bc078={'GTJHm':_0x323862[_0x247e4c(0x311)],'zXhnC':_0x247e4c(0x1ef),'WpIBb':_0x247e4c(0x62c)+_0x247e4c(0x548),'nAXxK':_0x247e4c(0x656),'nhdmz':_0x247e4c(0x3b4)+'MODE\x20'+_0x247e4c(0x2ff)+_0x247e4c(0x6aa)+_0x247e4c(0x4eb)+_0x247e4c(0x68e)+'ooks\x20'+'(relo'+_0x247e4c(0x6cc)+_0x247e4c(0x5ee)+')','eGySo':function(_0x1526df,_0x975dc8){return _0x1526df+_0x975dc8;},'ASMYr':function(_0x5b6f06,_0x1f973e){var _0x373f27=_0x247e4c;return _0x323862[_0x373f27(0x69d)](_0x5b6f06,_0x1f973e);},'QqdTu':_0x323862['cRFqT'],'zJOkB':_0x323862[_0x247e4c(0x597)],'kaAMi':_0x323862['QqKuJ']},_0x4b13b7=document[_0x247e4c(0x5f8)+'eElem'+_0x247e4c(0x68d)](_0x323862['uwxYc']);_0x4b13b7['class'+'Name']=_0x247e4c(0x17e)+_0x247e4c(0x6a8);var _0x4f9366=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+'ent'](_0x323862['ePird']);_0x4f9366['class'+_0x247e4c(0x4ce)]='mn-si'+'de';var _0x1e7c84=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+'ent']('div');_0x1e7c84['class'+'Name']=_0x247e4c(0x3ba)+'go',_0x1e7c84['inner'+'HTML']=_0x323862[_0x247e4c(0x3e1)],_0x4f9366['appen'+'dChil'+'d'](_0x1e7c84);var _0x308fd9=document['creat'+'eElem'+_0x247e4c(0x68d)](_0x247e4c(0x24d));_0x308fd9['class'+_0x247e4c(0x4ce)]=_0x247e4c(0x387)+'in';var _0x1d1c32=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+_0x247e4c(0x68d)](_0x247e4c(0x34e)+'r');_0x1d1c32['class'+_0x247e4c(0x4ce)]=_0x247e4c(0x1c4)+'p';var _0x195eb2=document['creat'+_0x247e4c(0x2e6)+_0x247e4c(0x68d)](_0x247e4c(0x24d));_0x195eb2['class'+'Name']=_0x247e4c(0x3a9)+_0x247e4c(0x411);var _0x349e33=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+'ent']('h2');_0x349e33[_0x247e4c(0x4dc)+_0x247e4c(0x4ce)]=_0x247e4c(0x3d6),_0x349e33['textC'+_0x247e4c(0x190)+'t']=_0x247e4c(0x205)+_0x247e4c(0x2ab)+'r';var _0x1670db=document[_0x247e4c(0x5f8)+'eElem'+'ent'](_0x247e4c(0x299));_0x1670db[_0x247e4c(0x4dc)+_0x247e4c(0x4ce)]=_0x323862['JLTzY'],_0x1670db[_0x247e4c(0x30c)+_0x247e4c(0x190)+'t']='kours'+'trike'+_0x247e4c(0x52a)+'enu',_0x195eb2[_0x247e4c(0x194)+'d'](_0x349e33,_0x1670db);var _0xc0ec39=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+_0x247e4c(0x68d)](_0x323862[_0x247e4c(0x601)]);_0xc0ec39[_0x247e4c(0x2c5)]='butto'+'n',_0xc0ec39[_0x247e4c(0x4dc)+'Name']=_0x323862['PWwWT'],_0xc0ec39[_0x247e4c(0x661)]='Close',_0xc0ec39[_0x247e4c(0x2c1)+'HTML']=_0x247e4c(0x25b)+_0x247e4c(0x17d)+_0x247e4c(0x437)+'\x200\x2024'+'\x2024\x22>'+'<path'+_0x247e4c(0x50e)+_0x247e4c(0x6c0)+_0x247e4c(0x27c)+_0x247e4c(0x4d0)+'6\x2018\x22'+'/></s'+_0x247e4c(0x1c0),_0xc0ec39['oncli'+'ck']=()=>_0x1dc363(![]),_0x1d1c32[_0x247e4c(0x194)+'d'](_0x195eb2,_0xc0ec39);var _0x5addb3=document['creat'+'eElem'+'ent'](_0x323862[_0x247e4c(0x419)]);_0x5addb3[_0x247e4c(0x4dc)+'Name']=_0x323862['QGcxP'],_0x308fd9['appen'+'d'](_0x1d1c32,_0x5addb3),_0x4b13b7[_0x247e4c(0x194)+'d'](_0x4f9366,_0x308fd9);var _0x243cc5=new Map();for(var _0x4d2333 of _0x57e96c){if('vHYuo'==='vHYuo'){var _0x12a376=document[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+_0x247e4c(0x68d)](_0x247e4c(0x63b)+'n');_0x12a376[_0x247e4c(0x2c5)]=_0x323862[_0x247e4c(0x601)],_0x12a376[_0x247e4c(0x4dc)+_0x247e4c(0x4ce)]=_0x323862[_0x247e4c(0x3f8)],_0x12a376[_0x247e4c(0x661)]=_0x4d2333[_0x247e4c(0x2d0)],_0x12a376[_0x247e4c(0x2c1)+_0x247e4c(0x246)]=_0x323862[_0x247e4c(0x1f0)]+_0x4d2333['label']+_0x323862[_0x247e4c(0x1c9)],_0x12a376[_0x247e4c(0x313)+'ck']=(_0x24151d=>()=>_0xb16cff(_0x24151d))(_0x4d2333['id']),_0x243cc5['set'](_0x4d2333['id'],_0x12a376),_0x4f9366['appen'+_0x247e4c(0x28f)+'d'](_0x12a376);}else{var _0x3f5df7=_0x36a6b3[_0x247e4c(0x5f8)+_0x247e4c(0x2e6)+_0x247e4c(0x68d)](_0x247e4c(0x24d));return _0x3f5df7['class'+'Name']=_0x247e4c(0x237)+'te'+(_0x1fa129?'\x20err':''),_0x3f5df7[_0x247e4c(0x30c)+_0x247e4c(0x190)+'t']=_0x2ce1b3,_0x3f5df7;}}function _0xb16cff(_0x5bdff7){var _0x2dbd3a=_0x247e4c;if(_0x323862['uYdER'](_0x2dbd3a(0x485),_0x2dbd3a(0x3f4))){_0x11f51f[_0x2dbd3a(0x25c)]=_0x5bdff7,_0x2530a2();var _0x2ef43e=_0x57e96c[_0x2dbd3a(0x3cc)](_0x2da044=>_0x2da044['id']===_0x5bdff7)||_0x57e96c[-0x4f*-0x5b+0x3*-0x4fa+-0xd*0x103];_0x349e33['textC'+_0x2dbd3a(0x190)+'t']=_0x323862['nGoWM']('Sakur'+_0x2dbd3a(0x2ab)+_0x2dbd3a(0x1d8),_0x2ef43e['label']);for(var [_0x31f540,_0x332002]of _0x243cc5)_0x332002[_0x2dbd3a(0x4dc)+_0x2dbd3a(0x298)][_0x2dbd3a(0x658)+'e'](_0x2dbd3a(0x1a9)+'e',_0x31f540===_0x5bdff7);_0x5addb3[_0x2dbd3a(0x2bc)+'ceChi'+'ldren'](..._0x323862['jaqBt'](_0x293a6f,_0x5bdff7));}else return _0x2f549c['warn'](_0x2dbd3a(0x378)+_0x2dbd3a(0x6af)+'ur]\x20h'+_0x2dbd3a(0x379)+'eg\x20fa'+'iled:',_0x320bf0,_0x3a6efd&&_0x542fdb[_0x2dbd3a(0x3b6)+'ge']),null;}return _0xb16cff(_0x11f51f[_0x247e4c(0x25c)]||_0x247e4c(0x50d)+'t'),_0x323862[_0x247e4c(0x533)](setInterval,()=>{var _0x2dea8c=_0x247e4c;if(!_0x406c25)return;var _0x4fc034=_0x5addb3['child'+_0x2dea8c(0x573)];for(var _0x5727a9=0xb*0x119+0x1*-0x1e52+-0x1b*-0xad;_0x5727a9<_0x4fc034[_0x2dea8c(0x2f6)+'h'];_0x5727a9++){if(_0x2bc078[_0x2dea8c(0x238)]===_0x2bc078['zXhnC']){_0x150d42['gameL'+'oaded']=!!_0x428857[_0x2dea8c(0x22f)+_0x2dea8c(0x1aa)+_0x2dea8c(0x251)];try{var _0x50edf0=0xc68+0x17ea+0x2452*-0x1;for(var _0x159999 in _0x1103f7){if(_0xd58425[_0x159999]&&_0x498ee0[_0x159999][_0x2dea8c(0x626)+'ed'])_0x50edf0++;}_0x38375b[_0x2dea8c(0x214)+'Ok']=_0x50edf0;}catch(_0x1dcfac){}}else{var _0x2029f1=_0x4fc034[_0x5727a9]['query'+_0x2dea8c(0x535)+'tor'](_0x2bc078['WpIBb']);_0x2029f1&&(_0x2029f1['textC'+_0x2dea8c(0x190)+'t'][_0x2dea8c(0x3e9)+'Of']('UWMK')===-0xbae+0x2*0x5ad+-0x4*-0x15||_0x2029f1[_0x2dea8c(0x30c)+'onten'+'t']['index'+'Of'](_0x2bc078[_0x2dea8c(0x2e1)])===-0xea*0x4+-0x2138+0x1*0x24e0)&&(_0x2029f1[_0x2dea8c(0x30c)+_0x2dea8c(0x190)+'t']=_0x288c94['safeM'+_0x2dea8c(0x47f)]?_0x2bc078[_0x2dea8c(0x5f3)]:_0x288c94[_0x2dea8c(0x5b5)]?_0x2bc078[_0x2dea8c(0x197)](_0x2bc078[_0x2dea8c(0x553)](_0x2bc078[_0x2dea8c(0x197)](_0x2bc078['QqdTu'],_0x288c94['hooks'+'Ok'])+'/'+_0x288c94[_0x2dea8c(0x214)+_0x2dea8c(0x69a)]+('\x20|\x20ga'+_0x2dea8c(0x1e0)),_0x288c94[_0x2dea8c(0x60a)+_0x2dea8c(0x171)]?_0x2bc078['zJOkB']:_0x2dea8c(0x25e)+'ng'),_0x2dea8c(0x5d4)+_0x2dea8c(0x4bf)+'\x20')+_0x288c94['pcs']+(_0x288c94[_0x2dea8c(0x464)+_0x2dea8c(0x534)]?_0x2bc078[_0x2dea8c(0x536)]+_0x288c94[_0x2dea8c(0x464)+'rror']:''):_0x2dea8c(0x224)+_0x2dea8c(0x1a4)+_0x2dea8c(0x5f2)+_0x2dea8c(0x45e)+'ay\x20on'+_0x2dea8c(0x236)+_0x2dea8c(0x20a)+_0x2dea8c(0x51f)+'he\x20us'+_0x2dea8c(0x317)+_0x2dea8c(0x61f));}}},0x3*0x68f+-0x1*-0x8cb+-0x1890),_0x4b13b7;}var _0x285997=_0x2e0e45(0x64b)+_0x2e0e45(0x202)+'\x20{\x20al'+'l:\x20in'+'itial'+_0x2e0e45(0x2b8)+_0x2e0e45(0x228)+_0x2e0e45(0x53f)+_0x2e0e45(0x67b)+'ng:\x20b'+_0x2e0e45(0x42a)+_0x2e0e45(0x54c)+_0x2e0e45(0x303)+_0x2e0e45(0x3ff)+_0x2e0e45(0x218)+'t-fam'+'ily:\x20'+_0x2e0e45(0x3ed)+'r\x22,\x20\x22'+'Segoe'+_0x2e0e45(0x187)+'\x20syst'+'em-ui'+_0x2e0e45(0x3ac)+'s-ser'+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x2e0e45(0x561)+'anel\x20'+'{\x20pos'+'ition'+_0x2e0e45(0x1d4)+'olute'+_0x2e0e45(0x684)+'ht:\x202'+_0x2e0e45(0x2f5)+_0x2e0e45(0x3a1)+_0x2e0e45(0x4a6)+_0x2e0e45(0x52d)+_0x2e0e45(0x1ea)+'\x20min('+_0x2e0e45(0x1ce)+_0x2e0e45(0x45d)+'c(100'+_0x2e0e45(0x1dc)+'48px)'+');\x20ma'+'x-hei'+'ght:\x20'+'min(4'+_0x2e0e45(0x37e)+_0x2e0e45(0x5fe)+'(100v'+'h\x20-\x204'+_0x2e0e45(0x631)+_0x2e0e45(0x225)+_0x2e0e45(0x17f)+_0x2e0e45(0x55d)+_0x2e0e45(0x1ba)+'x;\x20ga'+_0x2e0e45(0x351)+_0x2e0e45(0x476)+_0x2e0e45(0x219)+_0x2e0e45(0x1f2)+'px;\x20b'+_0x2e0e45(0x42a)+_0x2e0e45(0x6cb)+'us:\x202'+'2px;\x20'+_0x2e0e45(0x4ac)+'er-ev'+_0x2e0e45(0x1a8)+_0x2e0e45(0x336)+_0x2e0e45(0x225)+_0x2e0e45(0x1ee)+_0x2e0e45(0x467)+'und:\x20'+'rgba('+_0x2e0e45(0x300)+_0x2e0e45(0x6b3)+'82);\x20'+_0x2e0e45(0x44d)+'rop-f'+_0x2e0e45(0x287)+':\x20blu'+_0x2e0e45(0x429)+_0x2e0e45(0x4a9)+'turat'+_0x2e0e45(0x39d)+_0x2e0e45(0x2e8)+'webki'+_0x2e0e45(0x4e2)+'kdrop'+_0x2e0e45(0x595)+'er:\x20b'+_0x2e0e45(0x4a2)+_0x2e0e45(0x5b9)+_0x2e0e45(0x271)+_0x2e0e45(0x3af)+_0x2e0e45(0x1cb)+_0x2e0e45(0x64b)+'\x20\x20box'+'-shad'+_0x2e0e45(0x508)+_0x2e0e45(0x301)+_0x2e0e45(0x3b1)+_0x2e0e45(0x175)+'55,25'+_0x2e0e45(0x474)+_0x2e0e45(0x470)+_0x2e0e45(0x192)+'et\x200\x20'+_0x2e0e45(0x6c9)+_0x2e0e45(0x3bb)+'(255,'+_0x2e0e45(0x4c6)+_0x2e0e45(0x31d)+'5),\x200'+'\x2030px'+_0x2e0e45(0x453)+_0x2e0e45(0x3bb)+_0x2e0e45(0x2ca)+_0x2e0e45(0x5dd)+_0x2e0e45(0x692)+_0x2e0e45(0x5f4)+_0x2e0e45(0x27a)+'y:\x200;'+_0x2e0e45(0x354)+'sform'+_0x2e0e45(0x6bd)+_0x2e0e45(0x4bb)+'eY(18'+_0x2e0e45(0x49e)+_0x2e0e45(0x4ac)+_0x2e0e45(0x188)+'ents:'+'\x20none'+';\x20tra'+'nsiti'+'on:\x20o'+_0x2e0e45(0x27a)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+'ansfo'+_0x2e0e45(0x623)+_0x2e0e45(0x5de)+'bic-b'+_0x2e0e45(0x249)+_0x2e0e45(0x23a)+_0x2e0e45(0x381)+_0x2e0e45(0x57f)+_0x2e0e45(0x1b6)+'\x20colo'+'r:\x20#f'+_0x2e0e45(0x22b)+_0x2e0e45(0x218)+'t-siz'+_0x2e0e45(0x54b)+_0x2e0e45(0x610)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x2e0e45(0x3d0)+'shown'+_0x2e0e45(0x248)+'acity'+':\x201;\x20'+_0x2e0e45(0x42c)+_0x2e0e45(0x2db)+_0x2e0e45(0x603)+';\x20poi'+'nter-'+'event'+_0x2e0e45(0x26b)+_0x2e0e45(0x49a)+'\x0a\x20\x20\x20\x20'+'.mn-s'+'ide\x20{'+_0x2e0e45(0x279)+_0x2e0e45(0x230)+_0x2e0e45(0x292)+_0x2e0e45(0x4b6)+'-dire'+_0x2e0e45(0x596)+':\x20col'+'umn;\x20'+_0x2e0e45(0x689)+_0x2e0e45(0x18c)+_0x2e0e45(0x366)+_0x2e0e45(0x611)+'\x20gap:'+_0x2e0e45(0x525)+'\x20widt'+_0x2e0e45(0x1c1)+_0x2e0e45(0x471)+'lex:\x20'+_0x2e0e45(0x699)+_0x2e0e45(0x2bb)+_0x2e0e45(0x1d7)+_0x2e0e45(0x2de)+(_0x2e0e45(0x2c4)+_0x2e0e45(0x513)+_0x2e0e45(0x36e)+'s:\x2016'+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+_0x2e0e45(0x3fc)+_0x2e0e45(0x435)+':\x20rgb'+_0x2e0e45(0x376)+_0x2e0e45(0x3ee)+'255,.'+'025);'+'\x20box-'+_0x2e0e45(0x2bf)+_0x2e0e45(0x5d8)+_0x2e0e45(0x593)+'\x200\x200\x20'+_0x2e0e45(0x3b1)+_0x2e0e45(0x175)+_0x2e0e45(0x362)+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x2e0e45(0x2d6)+'n-log'+_0x2e0e45(0x417)+_0x2e0e45(0x48a)+_0x2e0e45(0x493)+'id;\x20p'+_0x2e0e45(0x1c7)+'items'+':\x20cen'+_0x2e0e45(0x373)+_0x2e0e45(0x3aa)+':\x2032p'+'x;\x20he'+_0x2e0e45(0x42f)+_0x2e0e45(0x696)+_0x2e0e45(0x2b8)+_0x2e0e45(0x2d6)+_0x2e0e45(0x642)+_0x2e0e45(0x452)+_0x2e0e45(0x4be)+_0x2e0e45(0x2d1)+'25px;'+_0x2e0e45(0x455)+'ht:\x202'+_0x2e0e45(0x3cf)+_0x2e0e45(0x319)+'low:\x20'+'visib'+_0x2e0e45(0x59b)+_0x2e0e45(0x287)+_0x2e0e45(0x446)+'p-sha'+_0x2e0e45(0x37b)+_0x2e0e45(0x67d)+_0x2e0e45(0x454)+'a(255'+_0x2e0e45(0x61c)+'157,.'+_0x2e0e45(0x659)+'}\x0a\x20\x20\x20'+_0x2e0e45(0x310)+'tab\x20{'+'\x20disp'+_0x2e0e45(0x230)+'flex;'+_0x2e0e45(0x231)+'n-ite'+'ms:\x20c'+'enter'+_0x2e0e45(0x6b6)+_0x2e0e45(0x4e0)+_0x2e0e45(0x529)+'nt:\x20c'+_0x2e0e45(0x5c1)+_0x2e0e45(0x6b8)+'th:\x205'+'2px;\x20'+_0x2e0e45(0x2ec)+'t:\x2034'+_0x2e0e45(0x1e7)+'order'+':\x200;\x20'+'borde'+_0x2e0e45(0x516)+'ius:\x20'+_0x2e0e45(0x565)+_0x2e0e45(0x64b)+_0x2e0e45(0x1b1)+'kgrou'+_0x2e0e45(0x59d)+_0x2e0e45(0x339)+_0x2e0e45(0x2ee)+_0x2e0e45(0x1f6)+_0x2e0e45(0x4d1)+_0x2e0e45(0x175)+_0x2e0e45(0x673)+_0x2e0e45(0x20f)+_0x2e0e45(0x1a7)+'\x20curs'+_0x2e0e45(0x26a)+_0x2e0e45(0x4cb)+_0x2e0e45(0x475)+_0x2e0e45(0x3db)+_0x2e0e45(0x2f9)+'0px;\x20'+_0x2e0e45(0x45f)+_0x2e0e45(0x408)+'t:\x2070'+_0x2e0e45(0x20b)+_0x2e0e45(0x35c)+'mn-ta'+'b:hov'+'er\x20{\x20'+_0x2e0e45(0x6c5)+':\x20rgb'+_0x2e0e45(0x580)+_0x2e0e45(0x312)+'242,.'+'8);\x20}'+_0x2e0e45(0x64b)+'.mn-t'+_0x2e0e45(0x2eb)+'tive\x20'+_0x2e0e45(0x6ac)+_0x2e0e45(0x66a)+_0x2e0e45(0x436)+_0x2e0e45(0x1a2)+_0x2e0e45(0x467)+_0x2e0e45(0x4f1)+_0x2e0e45(0x59f)+_0x2e0e45(0x4dd)+_0x2e0e45(0x510)+_0x2e0e45(0x478)+_0x2e0e45(0x2b8)+'\x20\x20\x20.m'+_0x2e0e45(0x46e)+'n\x20{\x20f'+_0x2e0e45(0x4ee)+'1;\x20mi'+_0x2e0e45(0x557)+_0x2e0e45(0x663)+';\x20dis'+_0x2e0e45(0x223)+'\x20flex'+_0x2e0e45(0x3ce)+_0x2e0e45(0x2be)+'ectio'+_0x2e0e45(0x263)+_0x2e0e45(0x60d)+_0x2e0e45(0x31e)+'\x20\x20.mn'+'-top\x20'+_0x2e0e45(0x431)+_0x2e0e45(0x223)+_0x2e0e45(0x4b6)+_0x2e0e45(0x5da)+_0x2e0e45(0x581)+_0x2e0e45(0x222)+'cente'+'r;\x20ga'+'p:\x2012'+_0x2e0e45(0x476)+_0x2e0e45(0x219)+_0x2e0e45(0x448)+_0x2e0e45(0x560)+_0x2e0e45(0x2fd)+_0x2e0e45(0x1bc)+'r-sel'+'ect:\x20'+_0x2e0e45(0x699)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+_0x2e0e45(0x52c)+_0x2e0e45(0x1fa)+'\x201;\x20m'+_0x2e0e45(0x37d)+_0x2e0e45(0x2d1)+_0x2e0e45(0x20b)+'\x20\x20\x20\x20.'+_0x2e0e45(0x204)+_0x2e0e45(0x250)+_0x2e0e45(0x3fd)+'e:\x2017'+'px;\x20f'+'ont-w'+'eight'+':\x20650'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+'\x20{\x20fo'+'nt-si'+_0x2e0e45(0x2f9)+_0x2e0e45(0x58d)+_0x2e0e45(0x69e))+(_0x2e0e45(0x343)+_0x2e0e45(0x3fe)+'\x20\x20\x20\x20.'+'mn-cl'+_0x2e0e45(0x5a9)+'\x20disp'+_0x2e0e45(0x230)+_0x2e0e45(0x410)+_0x2e0e45(0x1ae)+_0x2e0e45(0x18e)+_0x2e0e45(0x31b)+_0x2e0e45(0x5c1)+_0x2e0e45(0x6b8)+_0x2e0e45(0x569)+_0x2e0e45(0x24f)+_0x2e0e45(0x2ec)+_0x2e0e45(0x4a8)+'px;\x20b'+'order'+_0x2e0e45(0x504)+_0x2e0e45(0x511)+_0x2e0e45(0x516)+_0x2e0e45(0x514)+'8px;\x20'+'backg'+_0x2e0e45(0x435)+':\x20tra'+_0x2e0e45(0x2d9)+'ent;\x20'+_0x2e0e45(0x6c5)+_0x2e0e45(0x6c8)+'erit;'+_0x2e0e45(0x270)+_0x2e0e45(0x58e)+_0x2e0e45(0x18b)+'curso'+_0x2e0e45(0x570)+_0x2e0e45(0x55f)+_0x2e0e45(0x2b8)+'\x20\x20\x20.m'+'n-clo'+_0x2e0e45(0x583)+_0x2e0e45(0x34c)+_0x2e0e45(0x270)+_0x2e0e45(0x58e)+_0x2e0e45(0x185)+_0x2e0e45(0x467)+'und:\x20'+_0x2e0e45(0x59f)+_0x2e0e45(0x4c6)+_0x2e0e45(0x362)+'5,.05'+_0x2e0e45(0x54e)+'\x20\x20\x20\x20.'+_0x2e0e45(0x307)+'ose\x20s'+'vg\x20{\x20'+'width'+':\x2014p'+_0x2e0e45(0x2a2)+'ight:'+_0x2e0e45(0x331)+';\x20fil'+'l:\x20no'+'ne;\x20s'+_0x2e0e45(0x51a)+_0x2e0e45(0x4ae)+_0x2e0e45(0x5a7)+_0x2e0e45(0x2c9)+'\x20stro'+_0x2e0e45(0x6bc)+'dth:\x20'+_0x2e0e45(0x690)+'roke-'+_0x2e0e45(0x27e)+'ap:\x20r'+_0x2e0e45(0x6cd)+_0x2e0e45(0x31e)+_0x2e0e45(0x4ed)+'-cols'+'\x20{\x20fl'+'ex:\x201'+';\x20min'+_0x2e0e45(0x50b)+'ht:\x200'+';\x20ove'+'rflow'+'-y:\x20a'+_0x2e0e45(0x3a3)+_0x2e0e45(0x332)+_0x2e0e45(0x302)+_0x2e0e45(0x3be)+_0x2e0e45(0x36f)+'templ'+_0x2e0e45(0x639)+_0x2e0e45(0x1ff)+'s:\x20re'+_0x2e0e45(0x6b5)+_0x2e0e45(0x3d9)+_0x2e0e45(0x266)+'\x20minm'+'ax(25'+'0px,\x20'+_0x2e0e45(0x5bb)+';\x20ali'+'gn-it'+_0x2e0e45(0x222)+'start'+_0x2e0e45(0x5da)+'gn-co'+'ntent'+':\x20sta'+_0x2e0e45(0x215)+_0x2e0e45(0x4c4)+_0x2e0e45(0x587)+_0x2e0e45(0x655)+_0x2e0e45(0x64c)+'\x204px\x20'+_0x2e0e45(0x2cb)+_0x2e0e45(0x2b8)+_0x2e0e45(0x2d6)+_0x2e0e45(0x58f)+_0x2e0e45(0x5aa)+_0x2e0e45(0x181)+_0x2e0e45(0x498)+_0x2e0e45(0x43b)+'\x20{\x20wi'+_0x2e0e45(0x2d1)+_0x2e0e45(0x24f)+'}\x0a\x20\x20\x20'+_0x2e0e45(0x310)+_0x2e0e45(0x444)+_0x2e0e45(0x23d)+'kit-s'+'croll'+'bar-t'+'humb\x20'+_0x2e0e45(0x40d)+_0x2e0e45(0x321)+'nd:\x20r'+'gba(2'+_0x2e0e45(0x362)+_0x2e0e45(0x474)+_0x2e0e45(0x67f)+_0x2e0e45(0x349)+_0x2e0e45(0x3bd)+'adius'+_0x2e0e45(0x56e)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2e0e45(0x1e4)+_0x2e0e45(0x1e3)+'order'+'-radi'+_0x2e0e45(0x382)+_0x2e0e45(0x173)+_0x2e0e45(0x3fc)+_0x2e0e45(0x435)+':\x20rgb'+_0x2e0e45(0x376)+_0x2e0e45(0x3ee)+_0x2e0e45(0x1b3)+_0x2e0e45(0x2cd)+_0x2e0e45(0x3a2)+'shado'+_0x2e0e45(0x5d8)+_0x2e0e45(0x593)+_0x2e0e45(0x301)+'1px\x20r'+'gba(2'+_0x2e0e45(0x362)+_0x2e0e45(0x474)+_0x2e0e45(0x519)+_0x2e0e45(0x2b8)+'\x20\x20\x20.s'+_0x2e0e45(0x1e4)+'d.on\x20'+'{\x20bac'+_0x2e0e45(0x321)+_0x2e0e45(0x65e)+_0x2e0e45(0x175)+_0x2e0e45(0x362)+_0x2e0e45(0x474)+',.04)'+_0x2e0e45(0x360)+'-shad'+_0x2e0e45(0x42d)+_0x2e0e45(0x426)+'0\x200\x200'+'\x201px\x20'+'rgba('+'255,1'+_0x2e0e45(0x510)+_0x2e0e45(0x274)+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+_0x2e0e45(0x229)+_0x2e0e45(0x33c)+'displ')+('ay:\x20f'+_0x2e0e45(0x2f1)+_0x2e0e45(0x689)+'-item'+'s:\x20ce'+'nter;'+_0x2e0e45(0x33d)+'\x208px;'+_0x2e0e45(0x2bb)+'ing:\x20'+_0x2e0e45(0x207)+'12px;'+_0x2e0e45(0x31e)+_0x2e0e45(0x4c2)+'-card'+_0x2e0e45(0x1ed)+_0x2e0e45(0x490)+_0x2e0e45(0x4ee)+_0x2e0e45(0x2c2)+'n-wid'+'th:\x200'+_0x2e0e45(0x2b8)+_0x2e0e45(0x240)+'k-car'+'d-tit'+_0x2e0e45(0x2c0)+'rong\x20'+'{\x20fon'+_0x2e0e45(0x3fd)+'e:\x2013'+_0x2e0e45(0x471)+_0x2e0e45(0x5a0)+_0x2e0e45(0x38c)+':\x20600'+';\x20col'+_0x2e0e45(0x4d1)+'gba(2'+_0x2e0e45(0x673)+_0x2e0e45(0x20f)+_0x2e0e45(0x520)+_0x2e0e45(0x2b8)+_0x2e0e45(0x240)+'k-car'+_0x2e0e45(0x406)+_0x2e0e45(0x2df)+'ard-t'+_0x2e0e45(0x668)+'stron'+'g\x20{\x20c'+_0x2e0e45(0x2e7)+_0x2e0e45(0x5e8)+'0f5;\x20'+_0x2e0e45(0x2e5)+'\x20.sk-'+_0x2e0e45(0x53d)+_0x2e0e45(0x5b7)+_0x2e0e45(0x461)+_0x2e0e45(0x51c)+_0x2e0e45(0x44a)+_0x2e0e45(0x587)+_0x2e0e45(0x2e5)+_0x2e0e45(0x488)+_0x2e0e45(0x323)+'\x20{\x20fo'+'nt-si'+_0x2e0e45(0x2f9)+_0x2e0e45(0x58d)+_0x2e0e45(0x69e)+_0x2e0e45(0x343)+'4;\x20ma'+'rgin-'+'botto'+_0x2e0e45(0x43e)+'x;\x20}\x0a'+_0x2e0e45(0x35c)+'sk-ct'+'l\x20{\x20d'+_0x2e0e45(0x48a)+_0x2e0e45(0x371)+'ex;\x20a'+'lign-'+'items'+':\x20cen'+_0x2e0e45(0x373)+'gap:\x20'+_0x2e0e45(0x24f)+_0x2e0e45(0x655)+'ng:\x204'+'px\x200;'+_0x2e0e45(0x1a0)+'-size'+_0x2e0e45(0x59c)+'5px;\x20'+_0x2e0e45(0x2e5)+_0x2e0e45(0x488)+_0x2e0e45(0x2d0)+_0x2e0e45(0x540)+'ex:\x201'+';\x20col'+_0x2e0e45(0x4d1)+_0x2e0e45(0x175)+_0x2e0e45(0x673)+_0x2e0e45(0x20f)+_0x2e0e45(0x403)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2e0e45(0x458)+_0x2e0e45(0x241)+'ispla'+'y:\x20bl'+'ock;\x20'+'font-'+'size:'+'\x2010px'+_0x2e0e45(0x305)+'city:'+_0x2e0e45(0x2e2)+'}\x0a\x20\x20\x20'+_0x2e0e45(0x488)+_0x2e0e45(0x594)+_0x2e0e45(0x5d0)+_0x2e0e45(0x234)+_0x2e0e45(0x31a)+'elati'+'ve;\x20w'+_0x2e0e45(0x1ea)+_0x2e0e45(0x316)+_0x2e0e45(0x4b3)+_0x2e0e45(0x260)+_0x2e0e45(0x2b4)+'\x20bord'+_0x2e0e45(0x680)+_0x2e0e45(0x349)+'der-r'+'adius'+':\x2099p'+'x;\x20ba'+'ckgro'+'und:\x20'+_0x2e0e45(0x59f)+_0x2e0e45(0x4c6)+'55,25'+_0x2e0e45(0x2b9)+');\x20cu'+_0x2e0e45(0x1bf)+'\x20poin'+'ter;\x20'+_0x2e0e45(0x1fa)+_0x2e0e45(0x603)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+'tch::'+_0x2e0e45(0x649)+_0x2e0e45(0x589)+_0x2e0e45(0x63d)+_0x2e0e45(0x537)+_0x2e0e45(0x43a)+_0x2e0e45(0x2e3)+_0x2e0e45(0x2ea)+_0x2e0e45(0x647)+'\x20top:'+_0x2e0e45(0x6ca)+'\x20left'+_0x2e0e45(0x6bf)+_0x2e0e45(0x6b8)+_0x2e0e45(0x28c)+_0x2e0e45(0x38a)+'eight'+_0x2e0e45(0x538)+';\x20bor'+'der-r'+_0x2e0e45(0x57e)+':\x2050%'+_0x2e0e45(0x51b)+_0x2e0e45(0x321)+_0x2e0e45(0x65e)+_0x2e0e45(0x175)+'55,25'+'5,255'+_0x2e0e45(0x17b)+';\x20tra'+_0x2e0e45(0x67a)+_0x2e0e45(0x532)+_0x2e0e45(0x272)+'2s,\x20b'+'ackgr'+'ound\x20'+'.2s;\x20'+_0x2e0e45(0x2e5)+'\x20.sk-'+_0x2e0e45(0x594)+_0x2e0e45(0x409)+'a-che'+_0x2e0e45(0x259)+_0x2e0e45(0x4bd)+_0x2e0e45(0x4c9)+_0x2e0e45(0x3fc)+_0x2e0e45(0x435)+_0x2e0e45(0x482))+('a(255'+_0x2e0e45(0x61c)+'157,.'+_0x2e0e45(0x2a8)+_0x2e0e45(0x2e5)+'\x20.sk-'+'switc'+_0x2e0e45(0x409)+'a-che'+_0x2e0e45(0x259)+_0x2e0e45(0x4bd)+_0x2e0e45(0x2ad)+_0x2e0e45(0x2c7)+'{\x20lef'+_0x2e0e45(0x657)+_0x2e0e45(0x1e7)+_0x2e0e45(0x604)+'ound:'+_0x2e0e45(0x32e)+_0x2e0e45(0x45c)+'}\x0a\x20\x20\x20'+_0x2e0e45(0x488)+'field'+'\x20{\x20ba'+'ckgro'+_0x2e0e45(0x4f1)+_0x2e0e45(0x59f)+'255,2'+_0x2e0e45(0x362)+'5,.03'+_0x2e0e45(0x605)+'order'+':\x200;\x20'+'borde'+_0x2e0e45(0x516)+'ius:\x20'+'6px;\x20'+'color'+':\x20#f6'+_0x2e0e45(0x31f)+'\x20padd'+_0x2e0e45(0x1d7)+_0x2e0e45(0x496)+_0x2e0e45(0x471)+'ont-s'+_0x2e0e45(0x6a0)+'11.5p'+_0x2e0e45(0x5f5)+_0x2e0e45(0x221)+_0x2e0e45(0x242)+_0x2e0e45(0x232)+'x-sha'+'dow:\x20'+_0x2e0e45(0x179)+_0x2e0e45(0x301)+_0x2e0e45(0x675)+_0x2e0e45(0x3bb)+'(255,'+_0x2e0e45(0x4c6)+'55,.0'+_0x2e0e45(0x438)+_0x2e0e45(0x64b)+_0x2e0e45(0x2b5)+'ield\x20'+_0x2e0e45(0x4f6)+'n\x20{\x20b'+_0x2e0e45(0x604)+_0x2e0e45(0x25f)+'\x20#221'+_0x2e0e45(0x35d)+_0x2e0e45(0x2e5)+_0x2e0e45(0x488)+_0x2e0e45(0x1c2)+_0x2e0e45(0x5c0)+_0x2e0e45(0x55d)+_0x2e0e45(0x1ba)+_0x2e0e45(0x6a3)+_0x2e0e45(0x3f2)+_0x2e0e45(0x48d)+_0x2e0e45(0x341)+_0x2e0e45(0x4fe)+_0x2e0e45(0x695)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-s'+'lider'+'\x20{\x20-w'+'ebkit'+'-appe'+_0x2e0e45(0x2a6)+'e:\x20no'+_0x2e0e45(0x4a3)+_0x2e0e45(0x21a)+_0x2e0e45(0x586)+_0x2e0e45(0x603)+';\x20wid'+'th:\x209'+_0x2e0e45(0x587)+_0x2e0e45(0x2ec)+'t:\x208p'+_0x2e0e45(0x282)+'ckgro'+'und:\x20'+_0x2e0e45(0x42c)+_0x2e0e45(0x58b)+_0x2e0e45(0x456)+_0x2e0e45(0x35c)+_0x2e0e45(0x6b4)+_0x2e0e45(0x347)+_0x2e0e45(0x23d)+'kit-s'+'lider'+'-runn'+_0x2e0e45(0x4f8)+_0x2e0e45(0x290)+'\x20{\x20he'+'ight:'+'\x202px;'+_0x2e0e45(0x3c4)+'er-ra'+'dius:'+_0x2e0e45(0x180)+'\x20back'+_0x2e0e45(0x418)+_0x2e0e45(0x554)+_0x2e0e45(0x49d)+_0x2e0e45(0x41a)+'ent(#'+_0x2e0e45(0x436)+_0x2e0e45(0x48c)+'f6b9d'+_0x2e0e45(0x39f)+_0x2e0e45(0x5e4)+'r(--p'+',\x2050%'+_0x2e0e45(0x618)+'%\x20no-'+_0x2e0e45(0x177)+_0x2e0e45(0x2e4)+_0x2e0e45(0x3e4)+'5,255'+_0x2e0e45(0x3ee)+_0x2e0e45(0x2fb)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x2e0e45(0x2ac)+_0x2e0e45(0x698)+_0x2e0e45(0x2f3)+_0x2e0e45(0x30a)+_0x2e0e45(0x57d)+'humb\x20'+_0x2e0e45(0x2ba)+_0x2e0e45(0x3ec)+_0x2e0e45(0x38e)+_0x2e0e45(0x3ef)+_0x2e0e45(0x242)+_0x2e0e45(0x54a)+'dth:\x20'+_0x2e0e45(0x4b1)+_0x2e0e45(0x2ec)+'t:\x206p'+_0x2e0e45(0x30d)+'rgin-'+_0x2e0e45(0x432)+'-2px;'+'\x20bord'+_0x2e0e45(0x3c8)+'dius:'+'\x2050%;'+_0x2e0e45(0x506)+'groun'+_0x2e0e45(0x4b4)+_0x2e0e45(0x53c)+_0x2e0e45(0x2b8)+_0x2e0e45(0x240)+_0x2e0e45(0x3d3)+'\x20{\x20fo'+'nt-si'+_0x2e0e45(0x2f9)+_0x2e0e45(0x58d)+'font-'+'weigh'+_0x2e0e45(0x664)+'0;\x20mi'+_0x2e0e45(0x557)+_0x2e0e45(0x569)+_0x2e0e45(0x24f)+'text-'+_0x2e0e45(0x689)+_0x2e0e45(0x3dc)+_0x2e0e45(0x1ad)+_0x2e0e45(0x2e7)+_0x2e0e45(0x3bb)+_0x2e0e45(0x5c4)+'238,2'+'42,.8'+_0x2e0e45(0x54e)+'\x20\x20\x20\x20.'+_0x2e0e45(0x53b)+'lor\x20{')+(_0x2e0e45(0x178)+'h:\x2034'+_0x2e0e45(0x38a)+_0x2e0e45(0x38c)+_0x2e0e45(0x549)+_0x2e0e45(0x4f9)+_0x2e0e45(0x5be)+_0x2e0e45(0x5e3)+_0x2e0e45(0x42a)+_0x2e0e45(0x6cb)+_0x2e0e45(0x32d)+_0x2e0e45(0x1e7)+'ackgr'+_0x2e0e45(0x25f)+'\x20none'+';\x20pad'+_0x2e0e45(0x45b)+_0x2e0e45(0x480)+_0x2e0e45(0x2b7)+_0x2e0e45(0x5b3)+_0x2e0e45(0x611)+_0x2e0e45(0x31e)+'\x20\x20.sk'+_0x2e0e45(0x24c)+_0x2e0e45(0x308)+'nt-si'+_0x2e0e45(0x2f9)+_0x2e0e45(0x58d)+'color'+':\x20rgb'+_0x2e0e45(0x580)+',238,'+'242,.'+'5);\x20p'+'addin'+'g:\x202p'+_0x2e0e45(0x30b)+_0x2e0e45(0x2e5)+_0x2e0e45(0x488)+_0x2e0e45(0x643)+'err\x20{'+_0x2e0e45(0x348)+_0x2e0e45(0x3e2)+'f7a93'+';\x20}\x0a\x20'+_0x2e0e45(0x240)+'k-btn'+'\x20{\x20al'+'ign-s'+'elf:\x20'+'flex-'+_0x2e0e45(0x3e5)+';\x20bor'+_0x2e0e45(0x4a1)+'0;\x20bo'+'rder-'+'radiu'+'s:\x208p'+_0x2e0e45(0x5cb)+'dding'+':\x208px'+_0x2e0e45(0x499)+_0x2e0e45(0x51b)+_0x2e0e45(0x321)+'nd:\x20#'+_0x2e0e45(0x436)+_0x2e0e45(0x5d2)+_0x2e0e45(0x227)+'#fff;'+'\x20font'+'-size'+_0x2e0e45(0x59c)+_0x2e0e45(0x3cf)+_0x2e0e45(0x45f)+_0x2e0e45(0x408)+_0x2e0e45(0x543)+_0x2e0e45(0x46a)+'rsor:'+_0x2e0e45(0x46b)+_0x2e0e45(0x373)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'btn:h'+_0x2e0e45(0x309)+_0x2e0e45(0x1d5)+_0x2e0e45(0x257)+_0x2e0e45(0x46f)+'tness'+_0x2e0e45(0x423)+_0x2e0e45(0x2b8)+'\x20\x20\x20');window[_0x2e0e45(0x4d2)+_0x2e0e45(0x5e1)+_0x2e0e45(0x69c)+'r'](_0x56fd85[_0x2e0e45(0x306)],_0x2e48bf=>{var _0x1667ca=_0x2e0e45;if(_0x2e48bf[_0x1667ca(0x501)]===_0x323862[_0x1667ca(0x500)]){if(_0x323862['gpbWf']('iRApj','PvtfE'))_0x2e48bf['preve'+_0x1667ca(0x653)+'ault'](),_0x323862[_0x1667ca(0x407)](_0x4152fe);else try{_0x2a3bb5[_0x1667ca(0x2a3)](0x7*-0x11+-0x3eb*0x2+0xc34);}catch(_0x4fd183){}}},!![]);var _0x51b5ec=document['creat'+_0x2e0e45(0x2e6)+_0x2e0e45(0x68d)]('div');_0x51b5ec['style']['cssTe'+'xt']=_0x56fd85[_0x2e0e45(0x359)],_0x51b5ec['inner'+_0x2e0e45(0x246)]='<svg\x20'+_0x2e0e45(0x17d)+'ox=\x220'+'\x200\x2024'+_0x2e0e45(0x44f)+'<path'+'\x20d=\x22M'+_0x2e0e45(0x278)+'c-1.5'+_0x2e0e45(0x60b)+'4-4.5'+'-4-7.'+_0x2e0e45(0x5b6)+_0x2e0e45(0x5f9)+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x2e0e45(0x198)+'5c0\x203'+_0x2e0e45(0x566)+'5-4\x207'+'.5z\x22\x20'+'fill='+_0x2e0e45(0x4f2)+_0x2e0e45(0x392)+'oke=\x22'+'#ff6b'+_0x2e0e45(0x393)+_0x2e0e45(0x51a)+'-widt'+'h=\x222\x22'+_0x2e0e45(0x1ec)+_0x2e0e45(0x585)+'necap'+'=\x22rou'+_0x2e0e45(0x526)+_0x2e0e45(0x51a)+_0x2e0e45(0x479)+_0x2e0e45(0x29c)+_0x2e0e45(0x41b)+'d\x22/><'+_0x2e0e45(0x5a3)+_0x2e0e45(0x44c)+_0x2e0e45(0x4ff)+'cy=\x221'+'0\x22\x20r='+_0x2e0e45(0x620)+'\x20fill'+_0x2e0e45(0x4f0)+_0x2e0e45(0x277)+_0x2e0e45(0x41e)+'vg>',_0x51b5ec[_0x2e0e45(0x661)]=_0x2e0e45(0x205)+_0x2e0e45(0x2ab)+'r',_0x51b5ec[_0x2e0e45(0x62b)+_0x2e0e45(0x1c5)+'er']=()=>_0x51b5ec[_0x2e0e45(0x415)][_0x2e0e45(0x69e)+'ty']='1',_0x51b5ec['onmou'+_0x2e0e45(0x4d8)+'ve']=()=>_0x51b5ec[_0x2e0e45(0x415)][_0x2e0e45(0x69e)+'ty']='0.5',_0x51b5ec[_0x2e0e45(0x313)+'ck']=_0x422209=>{var _0x3887d6=_0x2e0e45;_0x422209['stopP'+_0x3887d6(0x3ad)+_0x3887d6(0x492)](),_0x323862['UzvZy'](_0x4152fe);},document[_0x2e0e45(0x32c)][_0x2e0e45(0x194)+_0x2e0e45(0x28f)+'d'](_0x51b5ec),_0x4df949(),_0x56fd85[_0x2e0e45(0x3ea)](requestAnimationFrame,_0xd97e3),console[_0x2e0e45(0x3b9)](_0x2e0e45(0x378)+'ra-ko'+_0x2e0e45(0x491)+_0x2e0e45(0x523)+'eady.'+_0x2e0e45(0x3b2)+':',_0x288c94[_0x2e0e45(0x5b5)]);});})()));
