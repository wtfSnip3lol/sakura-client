// ==UserScript==
// @name         Sakura Kour (kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.5.0
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
function _0xe9da(_0x45af9a,_0x5f03d6){_0x45af9a=_0x45af9a-(-0x1b54+0x112b+0xb7f);var _0x211b66=_0x6539();var _0x59b10d=_0x211b66[_0x45af9a];if(_0xe9da['OoAUvK']===undefined){var _0x403882=function(_0x4b1fe9){var _0x2a76df='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x43ae14='',_0x8145b0='';for(var _0x593c01=0x7*0x8f+-0x268d+0x2e3*0xc,_0x1d9d41,_0x29fa47,_0x5b734d=0x1959+-0x1460+-0x43*0x13;_0x29fa47=_0x4b1fe9['charAt'](_0x5b734d++);~_0x29fa47&&(_0x1d9d41=_0x593c01%(-0x40*0x7a+-0x10ae*0x2+-0xe*-0x490)?_0x1d9d41*(-0x120a+0x249b+-0x1251)+_0x29fa47:_0x29fa47,_0x593c01++%(0x251+-0xfbf+-0x6b9*-0x2))?_0x43ae14+=String['fromCharCode'](0xfdf*-0x1+0x3*-0xa36+0x2f80&_0x1d9d41>>(-(-0x1999*-0x1+0xa39*-0x2+-0x525)*_0x593c01&-0x1*0x17bf+0x33*-0x81+-0x3178*-0x1)):-0x4f*0x56+0xecd+0xbbd){_0x29fa47=_0x2a76df['indexOf'](_0x29fa47);}for(var _0xd281e1=-0x767*-0x4+-0xb33*0x3+0x3fd,_0x340a2f=_0x43ae14['length'];_0xd281e1<_0x340a2f;_0xd281e1++){_0x8145b0+='%'+('00'+_0x43ae14['charCodeAt'](_0xd281e1)['toString'](0x1e21+-0xb21*-0x1+-0x2*0x1499))['slice'](-(0xc1*-0x1a+0x1fb*-0xb+0x1*0x2965));}return decodeURIComponent(_0x8145b0);};_0xe9da['GtkQay']=_0x403882,_0xe9da['avbLxj']={},_0xe9da['OoAUvK']=!![];}var _0x13ea97=_0x211b66[0x1*0x201d+0x821+-0x283e],_0x4c97ca=_0x45af9a+_0x13ea97,_0x2dd57b=_0xe9da['avbLxj'][_0x4c97ca];return!_0x2dd57b?(_0x59b10d=_0xe9da['GtkQay'](_0x59b10d),_0xe9da['avbLxj'][_0x4c97ca]=_0x59b10d):_0x59b10d=_0x2dd57b,_0x59b10d;}(function(_0x144cca,_0xcba2d2){var _0xc65b73=_0xe9da,_0x5d3d9d=_0x144cca();while(!![]){try{var _0x3f39b3=-parseInt(_0xc65b73(0x5c5))/(0x14c5+-0x1424+-0xa0)*(parseInt(_0xc65b73(0x50b))/(-0x1350+0x3*0x124+-0xb*-0x172))+parseInt(_0xc65b73(0x3f4))/(0x986*0x1+-0xb*0x31b+0x1*0x18a6)+parseInt(_0xc65b73(0x542))/(0xc2*-0xf+0x2c*0x66+-0x626)+-parseInt(_0xc65b73(0x3b8))/(-0x1*0x1cae+0x8b5+0x13fe)*(-parseInt(_0xc65b73(0x3a2))/(-0x112e+0x91c+0x818))+-parseInt(_0xc65b73(0x2a9))/(-0x1d1e+-0x1897+-0x26*-0x16a)*(-parseInt(_0xc65b73(0x1a0))/(0x93+0x17*-0x5c+0x1*0x7b9))+-parseInt(_0xc65b73(0x56e))/(-0x2*-0x1025+0x2*-0x7a2+-0x10fd*0x1)+-parseInt(_0xc65b73(0x41d))/(0x1*-0x1576+-0x25c+0x17dc);if(_0x3f39b3===_0xcba2d2)break;else _0x5d3d9d['push'](_0x5d3d9d['shift']());}catch(_0x155bb1){_0x5d3d9d['push'](_0x5d3d9d['shift']());}}}(_0x6539,-0x26*-0x51d3+-0xbf490+-0x8*-0x126e3),((()=>{'use strict';var _0x1cee3c=_0xe9da,_0x358540={'jGxIs':_0x1cee3c(0x5c3),'BkjJM':function(_0x4f5363,_0x61417b){return _0x4f5363+_0x61417b;},'yWCCi':function(_0x110b7b,_0x4fc948){return _0x110b7b(_0x4fc948);},'lMJik':function(_0x5ecaa7,_0x58a3cd){return _0x5ecaa7===_0x58a3cd;},'brNzI':'wwgGC','tQCTA':_0x1cee3c(0x537),'mXhgu':'[saku'+_0x1cee3c(0x62c)+_0x1cee3c(0x4ca)+_0x1cee3c(0x68d)+_0x1cee3c(0x5cc)+_0x1cee3c(0x334),'UfxTN':_0x1cee3c(0x650)+'eld','ulWaq':function(_0x4e5ca8,_0x4bc850){return _0x4e5ca8===_0x4bc850;},'EsxXc':function(_0x1d5395,_0x48c140){return _0x1d5395!==_0x48c140;},'YRKJG':'ZnTql','rBNUB':_0x1cee3c(0x58b),'BPMtu':function(_0x3c7f1a,_0x33c63d,_0x24e58b,_0x897a27,_0x3aec0f){return _0x3c7f1a(_0x33c63d,_0x24e58b,_0x897a27,_0x3aec0f);},'gpGVn':function(_0x2da9f6,_0x4e96cd){return _0x2da9f6!==_0x4e96cd;},'aeChf':function(_0x5bb379,_0x42383){return _0x5bb379!==_0x42383;},'JTrmy':function(_0x1072b9,_0x11cf13){return _0x1072b9/_0x11cf13;},'NvZne':_0x1cee3c(0x55c)+'9d','ChwEc':_0x1cee3c(0x4c5),'clhHe':'QWwGm','pklOJ':_0x1cee3c(0x19d)+'n','fjcfq':_0x1cee3c(0x621),'CxmuE':'movem'+'ents','xqKrH':function(_0x1b1142){return _0x1b1142();},'dEIIz':function(_0x3ede6a,_0x3d2b35,_0x6e1297,_0x1491a8,_0x3e82e5,_0xce6558,_0x182a92,_0x2ed396){return _0x3ede6a(_0x3d2b35,_0x6e1297,_0x1491a8,_0x3e82e5,_0xce6558,_0x182a92,_0x2ed396);},'NNhVX':_0x1cee3c(0x5ff)+_0x1cee3c(0x386)+_0x1cee3c(0x34c)+_0x1cee3c(0x452)+_0x1cee3c(0x408)+'Recoi'+_0x1cee3c(0x50c)+'on','duGWs':_0x1cee3c(0x253)+_0x1cee3c(0x5f3),'zvGYy':'SetGa'+'meRun'+'ning','uCmBG':function(_0x6f9807,_0x233269){return _0x6f9807&&_0x233269;},'qjQPn':function(_0x1ac664,_0x55090e){return _0x1ac664!==_0x55090e;},'pwZVJ':_0x1cee3c(0x51f)+_0x1cee3c(0x614)+'4','buEMG':function(_0x180fce,_0x192c29,_0x3cf736,_0x481e57,_0x292a10){return _0x180fce(_0x192c29,_0x3cf736,_0x481e57,_0x292a10);},'BzoFk':'f32','kdnUY':function(_0xef3155,_0x5c947e){return _0xef3155<_0x5c947e;},'XZDHt':function(_0x51b2fa,_0x17c983,_0x29f2fa){return _0x51b2fa(_0x17c983,_0x29f2fa);},'thbta':function(_0x518eb8,_0x780d9c){return _0x518eb8!==_0x780d9c;},'hDpQP':'ztwix','GWCZx':function(_0x40a18f,_0x25bb9d,_0x5dcb0c,_0x464220,_0x1da6ea){return _0x40a18f(_0x25bb9d,_0x5dcb0c,_0x464220,_0x1da6ea);},'ZseTf':_0x1cee3c(0x42f),'bYKog':function(_0x18022c,_0xffbe36,_0x18e667,_0x45a85a,_0x4fa365){return _0x18022c(_0xffbe36,_0x18e667,_0x45a85a,_0x4fa365);},'ezdbW':'lwVtX','aXBfv':function(_0x42981a,_0x5a3ae7){return _0x42981a||_0x5a3ae7;},'rSBxZ':'Unity'+_0x1cee3c(0x637)+_0x1cee3c(0x3e2)+_0x1cee3c(0x671)+'ion','UwBsT':_0x1cee3c(0x5d6)+'ng','VCbAf':_0x1cee3c(0x5d0),'pNFtE':function(_0x2db9fc,_0x35b39e){return _0x2db9fc+_0x35b39e;},'XotrW':'ejtBv','jpwUt':function(_0x4338d4,_0x2c1ea1){return _0x4338d4>_0x2c1ea1;},'DKvEq':function(_0x4184fc,_0xcab32b){return _0x4184fc+_0xcab32b;},'rJsix':_0x1cee3c(0x363)+'wn','ddSOh':'keyup','CWXUw':'mouse'+_0x1cee3c(0x432),'zBqec':_0x1cee3c(0x5d0)+'up','urdrn':_0x1cee3c(0x270),'LvOYS':'XLeAb','YkOPM':function(_0x45e227,_0x24f6fe){return _0x45e227===_0x24f6fe;},'yEyGe':'inter'+'activ'+'e','eFLbL':'kour-'+'io_30'+_0x1cee3c(0x3c7)+'-pare'+'nt','vNXoz':'fulls'+'creen'+_0x1cee3c(0x50f)+'s','YfpLm':'kour-'+_0x1cee3c(0x475),'HOKAV':_0x1cee3c(0x603),'BDSxM':function(_0x1020ab,_0xa84736){return _0x1020ab+_0xa84736;},'WhGwT':_0x1cee3c(0x21a)+_0x1cee3c(0x5ad)+'\x20','ruOuR':_0x1cee3c(0x409)+_0x1cee3c(0x2f2),'kMLaS':_0x1cee3c(0x533)+_0x1cee3c(0x5e5)+_0x1cee3c(0x61b)+'overl'+_0x1cee3c(0x2ab)+_0x1cee3c(0x3d4)+'einst'+_0x1cee3c(0x53a)+'he\x20us'+'erscr'+_0x1cee3c(0x5c4),'FFrXj':_0x1cee3c(0x40b)+'r','fuaDR':function(_0x12a7d5,_0x32dd5e){return _0x12a7d5(_0x32dd5e);},'wyIhG':function(_0x3ff6aa,_0x122ab3){return _0x3ff6aa*_0x122ab3;},'rRgZA':function(_0x376d25,_0x498fa0){return _0x376d25+_0x498fa0;},'fBWiR':function(_0x31bb87,_0x840013){return _0x31bb87-_0x840013;},'AlWts':function(_0x387cc2,_0x50f240){return _0x387cc2+_0x50f240;},'iLuAh':function(_0x13ae4a,_0x4b9ab8){return _0x13ae4a/_0x4b9ab8;},'qIqom':function(_0xfb8197,_0x291a1b){return _0xfb8197+_0x291a1b;},'KuoYX':'KeyA','zrBwt':function(_0x5def9d,_0x21952,_0x48e9c9,_0x1f1a80,_0x41fbf0,_0x41629a,_0x3ebab4){return _0x5def9d(_0x21952,_0x48e9c9,_0x1f1a80,_0x41fbf0,_0x41629a,_0x3ebab4);},'arbmO':function(_0x4ffd80,_0xdb752d){return _0x4ffd80+_0xdb752d;},'GLfyc':function(_0x3b3bbc,_0x2fbacd,_0x169fc5,_0x459363,_0x30ad49,_0x10a87c,_0x27b733){return _0x3b3bbc(_0x2fbacd,_0x169fc5,_0x459363,_0x30ad49,_0x10a87c,_0x27b733);},'jseNp':_0x1cee3c(0x69b),'DCOae':function(_0x2b96ce,_0x3a330e){return _0x2b96ce/_0x3a330e;},'HlcEq':function(_0x3f1ede,_0x5c1bc2){return _0x3f1ede+_0x5c1bc2;},'vZIbw':function(_0xb8bae,_0x3dcfeb){return _0xb8bae*_0x3dcfeb;},'evpFR':function(_0x2a489d,_0xbef2c9,_0x206c17,_0x1e979b,_0xf79961,_0x1a5cbd,_0x572c44,_0x5a534f){return _0x2a489d(_0xbef2c9,_0x206c17,_0x1e979b,_0xf79961,_0x1a5cbd,_0x572c44,_0x5a534f);},'uUysA':'LMB','KufxK':function(_0x20eb22,_0x57bd0c){return _0x20eb22(_0x57bd0c);},'mTTVn':_0x1cee3c(0x688),'nYUwt':_0x1cee3c(0x2e0),'kPqUv':function(_0x30d1a2,_0x5e238e,_0x37eb68,_0x27c0ed,_0xfe672a,_0x4b59ee,_0x22325b){return _0x30d1a2(_0x5e238e,_0x37eb68,_0x27c0ed,_0xfe672a,_0x4b59ee,_0x22325b);},'isiCC':_0x1cee3c(0x214),'Ccnfx':function(_0x5ab748,_0x349217){return _0x5ab748>=_0x349217;},'VQCUC':function(_0x4d76df,_0x61ca20){return _0x4d76df/_0x61ca20;},'zIZRf':function(_0x20f509,_0xfa4aa2){return _0x20f509(_0xfa4aa2);},'sHoHC':'sakur'+'a.kou'+'r.ui.'+'v1','OmVXp':_0x1cee3c(0x266),'DWgxr':'sk-co'+_0x1cee3c(0x3cf),'qAIpA':_0x1cee3c(0x2ce),'rIjAK':_0x1cee3c(0x1b3),'WegKF':_0x1cee3c(0x42c),'ePgMc':_0x1cee3c(0x5b0),'FNiFf':_0x1cee3c(0x375)+'s','DdWIq':'held','oegvH':_0x1cee3c(0x40d),'jfkyz':_0x1cee3c(0x480)+'de','MBwgt':'div','gcIGB':'mn-lo'+'go','JOcoG':'heade'+'r','vrRDi':_0x1cee3c(0x451),'exFHF':_0x1cee3c(0x35c)+_0x1cee3c(0x586)+_0x1cee3c(0x294)+_0x1cee3c(0x62d)+_0x1cee3c(0x489)+_0x1cee3c(0x2ea)+_0x1cee3c(0x30d)+'6\x206l1'+'2\x2012M'+_0x1cee3c(0x246)+_0x1cee3c(0x324)+_0x1cee3c(0x318)+_0x1cee3c(0x3fd),'SQNEd':'mn-co'+'ls','TCJpf':function(_0x5adf26,_0x2f0a97){return _0x5adf26+_0x2f0a97;},'HEGOW':'</sma'+'ll>','MGOsx':_0x1cee3c(0x63b)+_0x1cee3c(0x203),'NkScp':'1.1.0','ZoBYP':function(_0x1ae81a,_0x5db8fa,_0x5547bc,_0x269ba1,_0x3057a9,_0x191a63,_0xebdf86,_0x3d9044){return _0x1ae81a(_0x5db8fa,_0x5547bc,_0x269ba1,_0x3057a9,_0x191a63,_0xebdf86,_0x3d9044);},'YrqYM':_0x1cee3c(0x487),'cXgAu':function(_0x5178fb,_0x1385c6,_0x4c78f9){return _0x5178fb(_0x1385c6,_0x4c78f9);},'Kanpc':'SAKUR'+_0x1cee3c(0x15e)+_0x1cee3c(0x20e)+'1','hyxHD':_0x1cee3c(0x639),'CIySk':'sk-mb'+_0x1cee3c(0x557),'yDedy':'sk-md'+_0x1cee3c(0x4b8),'ucpyp':function(_0xa7034c,_0x508dfb){return _0xa7034c+_0x508dfb;},'bpqwu':_0x1cee3c(0x533)+_0x1cee3c(0x2a1)+'\x20','NetJJ':_0x1cee3c(0x299)+'d','GqnDN':function(_0x56b729,_0x4b0af2,_0x763d8c,_0xdef40,_0x16be7d,_0x27480e){return _0x56b729(_0x4b0af2,_0x763d8c,_0xdef40,_0x16be7d,_0x27480e);},'XAcqc':'240\x20F'+_0x1cee3c(0x36e)+_0x1cee3c(0x367),'gPqmY':'YBrvh','KOoTQ':'ZABpW','aUfSd':function(_0x2f0d3e){return _0x2f0d3e();},'VErZq':function(_0xfda02,_0x5b46d3,_0x240081){return _0xfda02(_0x5b46d3,_0x240081);},'BwqqG':'Infin'+_0x1cee3c(0x48b)+'mmo\x20['+'EXP]','fQoNX':function(_0x1ffa6,_0x2933bd){return _0x1ffa6!==_0x2933bd;},'dNUIz':function(_0x88d622,_0x1ffc92,_0x4c839a,_0x48ea10){return _0x88d622(_0x1ffc92,_0x4c839a,_0x48ea10);},'GQjyR':_0x1cee3c(0x60a)+'l','Fwihp':_0x1cee3c(0x15a),'gmSCZ':'No\x20en'+'emy\x20c'+_0x1cee3c(0x53e)+'r:\x20th'+'is\x20bu'+_0x1cee3c(0x5a9)+'as\x20no'+'\x20GetV'+_0x1cee3c(0x176)+_0x1cee3c(0x49a)+_0x1cee3c(0x598)+'o\x20pig'+'gybac'+'k\x20on.','Hnxhr':_0x1cee3c(0x24a)+'r','gGERU':function(_0x354907,_0x1ba76a){return _0x354907+_0x1ba76a;},'HTPDr':_0x1cee3c(0x5f5)+'e','sDqmc':'BhUGm','hBeqX':function(_0x2c5c30,_0xd2f79c,_0x3710c4){return _0x2c5c30(_0xd2f79c,_0x3710c4);},'aVORc':_0x1cee3c(0x16d)+'s','dDUdu':'posit'+_0x1cee3c(0x1c7)+'ixed;'+_0x1cee3c(0x51d)+_0x1cee3c(0x4e6)+'index'+_0x1cee3c(0x481)+_0x1cee3c(0x16f)+'7;poi'+_0x1cee3c(0x45e)+_0x1cee3c(0x356)+_0x1cee3c(0x632)+'e;','wKrhB':'Move','REBdP':'Misc','xPnrO':_0x1cee3c(0x531)+'y','JzAam':_0x1cee3c(0x63b)+'a\x20Kou'+'r','xbSBD':function(_0x1ce40d){return _0x1ce40d();},'VceYr':_0x1cee3c(0x615)+_0x1cee3c(0x62c)+'ur]\x20m'+_0x1cee3c(0x343)+'eady.'+_0x1cee3c(0x156)+':','OQYKC':_0x1cee3c(0x355)+'c6','cJfFm':_0x1cee3c(0x2a0)+'a.kou'+_0x1cee3c(0x326),'eksrc':'error','qHDRh':_0x1cee3c(0x66d)+_0x1cee3c(0x22c)+_0x1cee3c(0x1ed)+'.dll','cRmZz':_0x1cee3c(0x391),'mNHUg':_0x1cee3c(0x373)+_0x1cee3c(0x1fe),'dOAbb':'capMo'+'ve','CrHYU':function(_0x4c9074,_0x3aa1d1,_0x7589c0){return _0x4c9074(_0x3aa1d1,_0x7589c0);},'zkBIz':function(_0x5f4d08,_0xf761e2,_0x202830){return _0x5f4d08(_0xf761e2,_0x202830);}};if(!/(^|\.)kourstrike\.io$/[_0x1cee3c(0x279)](location[_0x1cee3c(0x665)+'ame']||''))return;if(window['__SAK'+_0x1cee3c(0x667)+_0x1cee3c(0x593)])return;window[_0x1cee3c(0x1dc)+_0x1cee3c(0x667)+_0x1cee3c(0x593)]=!![];var _0x823fe3=_0x1cee3c(0x55c)+'9d',_0x50214f=_0x358540['OQYKC'],_0x1662df={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x1cee3c(0x55c)+'9d','adblock':!![],'actkKill':!![],'safeMode':![]},_0x1ff9ee={..._0x1662df};try{Object['assig'+'n'](_0x1ff9ee,JSON[_0x1cee3c(0x349)](localStorage[_0x1cee3c(0x3d6)+'em'](_0x358540[_0x1cee3c(0x661)])||'{}'));}catch(_0xcda0d1){}function _0x35bbad(){var _0x2d3829=_0x1cee3c;if(_0x358540[_0x2d3829(0x2a6)]!=='AQvUf')_0xbff829=new _0x1e16ab(),_0x63655b[_0x2d3829(0x1c5)](_0x2d89ec,_0x25d2e3);else try{localStorage[_0x2d3829(0x651)+'em']('sakur'+_0x2d3829(0x17f)+'r.v1',JSON[_0x2d3829(0x5c6)+_0x2d3829(0x698)](_0x1ff9ee));}catch(_0x50fec9){}}var _0x27a6a5={'uwmk':!!window[_0x1cee3c(0x3af)+'WebMo'+_0x1cee3c(0x36c)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1ff9ee['safeM'+'ode'],'lastError':''};try{window[_0x1cee3c(0x46c)+_0x1cee3c(0x450)+_0x1cee3c(0x45b)+'r'](_0x358540['eksrc'],_0x5971d5=>{var _0x2724f7=_0x1cee3c;try{if(_0x2724f7(0x1a2)==='hCelT'){var _0x33fed7=_0x4027ce[_0x2724f7(0x659)+'refix']({'typeName':_0x482529,'methodName':_0x2ee567,'params':_0x4bed0f,'returnType':_0x3b0e6d},_0x3266e4);return _0x33fed7[_0x2724f7(0x589)+'ed']=_0x54f4c7!==![],_0x57373f[_0x3b3eae]=_0x33fed7,_0x184008['hooks'+_0x2724f7(0x26f)]++,_0x33fed7;}else{var _0x12d884=_0x5971d5&&(_0x5971d5[_0x2724f7(0x2a7)+'ge']||_0x5971d5['error']&&_0x5971d5[_0x2724f7(0x453)][_0x2724f7(0x2a7)+'ge'])||_0x2724f7(0x538)+'wn';if(_0x5971d5&&_0x5971d5[_0x2724f7(0x1ca)+_0x2724f7(0x4b9)])_0x12d884+=_0x358540[_0x2724f7(0x5ca)](_0x358540[_0x2724f7(0x5ca)]('\x20@\x20'+String(_0x5971d5[_0x2724f7(0x1ca)+_0x2724f7(0x4b9)])[_0x2724f7(0x4e0)]('/')[_0x2724f7(0x62a)](),':'),_0x5971d5[_0x2724f7(0x693)+'o']||'?');_0x27a6a5[_0x2724f7(0x4e5)+'rror']=_0x358540[_0x2724f7(0x595)](String,_0x12d884)['slice'](0x3e2+-0xc4f+0x2cf*0x3,-0xc15+-0x1*0x1b07+0x27bc);}}catch(_0x21fee2){}});}catch(_0x3b3fea){}var _0x125e83=null,_0x240aad=null,_0x14e349={},_0x3cff4b=[],_0x16b4d6=[],_0x3fe026=new Map();function _0x5a2388(_0x946972,_0x240a2e){var _0x302d9e=_0x1cee3c;if(_0x358540['lMJik'](_0x358540['brNzI'],_0x302d9e(0x473))){if(!_0x240a2e||_0x946972[_0x302d9e(0x31b)+_0x302d9e(0x540)](_0x240a2e)||_0x946972['lengt'+'h']>0x1e7e+0xedc*-0x1+-0x16*0xb3)return;_0x946972[_0x302d9e(0x51b)](_0x240a2e);}else _0x20695d[_0x302d9e(0x4f0)+_0x302d9e(0x617)+'d'](_0x19eea3);}function _0x84cf02(_0x859f2f,_0x32ae78,_0x87e768,_0x5db555){var _0x51dfa2=_0x1cee3c,_0xfe39c2=0x1b13*-0x1+0x7*-0x76+0x1e4d;try{_0x358540['tQCTA']===_0x51dfa2(0x537)?_0xfe39c2=_0x32ae78&&_0x32ae78[_0x51dfa2(0x17b)]?_0x32ae78['val']():-0x2126*-0x1+0xbcc+-0x2cf2:(_0x4cefba['actkK'+_0x51dfa2(0x4eb)]=_0x424606,_0x5d9614());}catch(_0x1b199a){}if(!_0xfe39c2)return;_0x5a2388(_0x859f2f,_0xfe39c2),_0x87e768[_0x5db555]=_0x859f2f[_0x51dfa2(0x56f)+'h'];if(_0x5db555==='movem'+_0x51dfa2(0x211)&&_0x859f2f[_0x51dfa2(0x56f)+'h']){var _0x6e7148=_0x14e349['capMo'+'ve'];if(_0x6e7148)try{_0x6e7148['enabl'+'ed']=![];}catch(_0x599266){}}}function _0x33e395(_0x39d1f5,_0x490ee0,_0x40c4cf){var _0x4a27cb=_0x1cee3c,_0x1badf0={'QBwLU':function(_0x3d6381){return _0x3d6381();}};if(_0x358540['ulWaq']('StYxP',_0x4a27cb(0x47e))){var _0x4a83bc=_0x3fe026[_0x4a27cb(0x545)](_0x39d1f5);!_0x4a83bc&&(_0x4a83bc=new Map(),_0x3fe026[_0x4a27cb(0x1c5)](_0x39d1f5,_0x4a83bc));if(!_0x4a83bc[_0x4a27cb(0x5d2)](_0x490ee0)){if(_0x358540[_0x4a27cb(0x41e)](_0x4a27cb(0x306),_0x4a27cb(0x31e)))return _0x31dbe5['warn'](_0x358540['mXhgu'],_0x19119c,_0x2b4ad7&&_0x3f79e8['messa'+'ge']),null;else try{if(_0x358540[_0x4a27cb(0x2de)](_0x4a27cb(0x590),'JCebR')){var _0x2825ef=(_0x4a27cb(0x596)+_0x4a27cb(0x628)+'5')[_0x4a27cb(0x4e0)]('|'),_0x1fff1c=-0x14bf+-0x3e4+0x173*0x11;while(!![]){switch(_0x2825ef[_0x1fff1c++]){case'0':_0x211db0['oncha'+'nge']=()=>_0x269e91(_0x211db0[_0x4a27cb(0x1e7)]);continue;case'1':_0x211db0['class'+'Name']=_0x358540[_0x4a27cb(0x4dd)];continue;case'2':var _0x211db0=_0x2c245b[_0x4a27cb(0x27a)+_0x4a27cb(0x23f)+_0x4a27cb(0x4c6)](_0x4a27cb(0x528)+'t');continue;case'3':_0x211db0['value']=_0x288ee3;continue;case'4':for(var [_0x13798c,_0x69fd57]of _0x100dc1){var _0x5bcaac=_0x136252[_0x4a27cb(0x27a)+'eElem'+_0x4a27cb(0x4c6)](_0x4a27cb(0x2da)+'n');_0x5bcaac['value']=_0x13798c,_0x5bcaac['textC'+_0x4a27cb(0x3f0)+'t']=_0x69fd57,_0x211db0['appen'+_0x4a27cb(0x617)+'d'](_0x5bcaac);}continue;case'5':return _0x211db0;}break;}}else{var _0x54e9d5=new _0x125e83(_0x39d1f5)[_0x4a27cb(0x1c3)+_0x4a27cb(0x53c)](_0x490ee0,_0x40c4cf);_0x4a83bc['set'](_0x490ee0,_0x54e9d5!==undefined?_0x54e9d5['val']():null);}}catch(_0x10a141){_0x358540[_0x4a27cb(0x48f)](_0x358540[_0x4a27cb(0x646)],'ZnTql')?(_0x440cdc[_0x4a27cb(0x421)+_0x4a27cb(0x45a)+'ation'](),_0x1badf0[_0x4a27cb(0x495)](_0x51222d)):_0x4a83bc[_0x4a27cb(0x1c5)](_0x490ee0,null);}}return _0x4a83bc['get'](_0x490ee0);}else _0x956bd8['damag'+_0x4a27cb(0x234)]=_0x4e4809,_0x563a59();}function _0x165f67(_0x2aa410,_0x118d21,_0x4522b7,_0x29250b){var _0x3e2a02=_0x1cee3c;if(_0x358540['ulWaq'](_0x3e2a02(0x58b),_0x358540[_0x3e2a02(0x57f)]))try{new _0x125e83(_0x2aa410)['write'+_0x3e2a02(0x2bc)](_0x118d21,_0x4522b7,_0x29250b);}catch(_0x395fe3){}else{if(!_0x3e889e||_0x32955d['inclu'+_0x3e2a02(0x540)](_0x685ef7)||_0x9dc18c[_0x3e2a02(0x56f)+'h']>-0x1008+-0x2*-0xd5d+-0xbf*0xe)return;_0x38cca6['push'](_0x511ad5);}}function _0x1f115f(_0xc2c8fc,_0x14d8cf){var _0x10013b=_0x1cee3c;try{if(_0x10013b(0x23e)==='wZFwa')_0x32836c[_0x10013b(0x651)+'em'](_0x10013b(0x2a0)+_0x10013b(0x17f)+_0x10013b(0x326),_0x1c7849[_0x10013b(0x5c6)+_0x10013b(0x698)](_0x1d021a));else{var _0x500fbe=new _0x125e83(_0xc2c8fc)['readF'+'ield'](_0x14d8cf,_0x10013b(0x3fb));return _0x500fbe?_0x500fbe['val']():0x20b*0x4+0x946+0x8b9*-0x2;}}catch(_0x13f5a4){return 0x83d+-0xb*-0x37+-0x76*0x17;}}function _0x4e0733(_0x446dbd,_0x50dbf4,_0x31ed08,_0x575ece){var _0xeeb734=_0x1cee3c,_0x4d35e3=_0x33e395(_0x446dbd,_0x50dbf4,_0x31ed08);if(_0x4d35e3!=null)_0x358540[_0xeeb734(0x3c3)](_0x165f67,_0x446dbd,_0x50dbf4,_0x31ed08,_0x4d35e3*_0x575ece);}function _0x208826(_0x1e3b8e,_0xca7582,_0x1ece04,_0x305913,_0x1c3387,_0x59ba91,_0x9ee05c){var _0x342b60=_0x1cee3c;try{var _0x442afc=_0x240aad[_0x342b60(0x659)+_0x342b60(0x629)]({'typeName':_0xca7582,'methodName':_0x1ece04,'params':_0x305913,'returnType':_0x1c3387},_0x59ba91);return _0x442afc[_0x342b60(0x589)+'ed']=_0x358540['gpGVn'](_0x9ee05c,![]),_0x14e349[_0x1e3b8e]=_0x442afc,_0x27a6a5[_0x342b60(0x371)+_0x342b60(0x26f)]++,_0x442afc;}catch(_0x11a6a5){return console['warn'](_0x358540['mXhgu'],_0x1e3b8e,_0x11a6a5&&_0x11a6a5[_0x342b60(0x2a7)+'ge']),null;}}function _0x363c73(_0x31c97f,_0x2d8b4d,_0x47d112,_0x2bd32c,_0x519ca4,_0x1f8dfb,_0x306c3b){var _0x4ce23a=_0x1cee3c;try{if('XXJfv'!==_0x4ce23a(0x1a7))_0x3d1369[_0x4ce23a(0x589)+'ed']=![];else{var _0x591b8a=_0x240aad[_0x4ce23a(0x659)+_0x4ce23a(0x32b)+'x']({'typeName':_0x2d8b4d,'methodName':_0x47d112,'params':_0x2bd32c,'returnType':_0x519ca4},_0x1f8dfb);return _0x591b8a[_0x4ce23a(0x589)+'ed']=_0x358540[_0x4ce23a(0x3f1)](_0x306c3b,![]),_0x14e349[_0x31c97f]=_0x591b8a,_0x27a6a5['hooks'+_0x4ce23a(0x26f)]++,_0x591b8a;}}catch(_0x41ed10){return console[_0x4ce23a(0x15d)](_0x4ce23a(0x615)+_0x4ce23a(0x62c)+_0x4ce23a(0x4ca)+'ook\x20r'+'eg\x20fa'+_0x4ce23a(0x334),_0x31c97f,_0x41ed10&&_0x41ed10[_0x4ce23a(0x2a7)+'ge']),null;}}var _0x19c6d7=()=>![];try{window['Unity'+'WebMo'+'dkit']&&!_0x1ff9ee['safeM'+_0x1cee3c(0x5da)]&&(_0x125e83=window['Unity'+_0x1cee3c(0x5fc)+_0x1cee3c(0x36c)][_0x1cee3c(0x195)+'Wrapp'+'er'],_0x240aad=window[_0x1cee3c(0x3af)+_0x1cee3c(0x5fc)+_0x1cee3c(0x36c)][_0x1cee3c(0x320)+'me'][_0x1cee3c(0x27a)+_0x1cee3c(0x36b)+'in']({'name':_0x358540[_0x1cee3c(0x354)],'version':'1.1.0','referencedAssemblies':[_0x358540['qHDRh']]}),_0x358540[_0x1cee3c(0x25e)](_0x208826,_0x358540[_0x1cee3c(0x54e)],'OHeal'+'th','Initi'+_0x1cee3c(0x55a)+'keHea'+_0x1cee3c(0x227),[_0x358540['ZseTf'],_0x1cee3c(0x42f)],undefined,_0x19c6d7,!!_0x1ff9ee[_0x1cee3c(0x391)]),_0x208826(_0x358540[_0x1cee3c(0x680)],_0x1cee3c(0x5ff)+_0x1cee3c(0x386)+'forms'+'.Over'+_0x1cee3c(0x408)+'Recoi'+'lMoti'+'on',_0x1cee3c(0x2f1),[_0x358540[_0x1cee3c(0x447)]],undefined,_0x19c6d7,!!_0x1ff9ee['noRec'+_0x1cee3c(0x1fe)]),_0x363c73('capSh'+_0x1cee3c(0x5ad),_0x358540['duGWs'],'SetGa'+_0x1cee3c(0x1f6)+_0x1cee3c(0x41c),['i32',_0x358540['ZseTf']],undefined,(_0x2dff0b,_0x195387)=>{var _0x54c21f=_0x1cee3c,_0x204f2f={'rSUlr':function(_0x54544b,_0x101690){return _0x54544b/_0x101690;},'QJxqF':function(_0x480a5e,_0x30148d){var _0x1f2fee=_0xe9da;return _0x358540[_0x1f2fee(0x424)](_0x480a5e,_0x30148d);},'tcYch':function(_0x3835b3,_0x58b9bb){return _0x358540['yWCCi'](_0x3835b3,_0x58b9bb);},'BXEaR':_0x358540['NvZne'],'npXGe':function(_0xc78c48,_0x5b8e66){return _0xc78c48-_0x5b8e66;},'pqKlg':function(_0x14c3f3,_0x310919){return _0x14c3f3-_0x310919;},'nzhxI':function(_0x2a365a,_0x4858b7){var _0xf0f01e=_0xe9da;return _0x358540[_0xf0f01e(0x5ca)](_0x2a365a,_0x4858b7);},'oYyoH':function(_0x586658,_0xf62376){return _0x586658+_0xf62376;}};if(_0x358540[_0x54c21f(0x3f1)](_0x358540[_0x54c21f(0x1ae)],_0x358540[_0x54c21f(0x1f4)]))_0x358540[_0x54c21f(0x3c3)](_0x84cf02,_0x16b4d6,_0x195387,_0x27a6a5,'shoot'+_0x54c21f(0x2b1));else{var _0x46c9f2=_0x204f2f[_0x54c21f(0x274)](_0x5e8c89['width'],-0x1b46+0x3*-0x72f+0x30d5),_0x5a076d=_0x204f2f[_0x54c21f(0x25b)](_0x12ff82['heigh'+'t'],-0x2fb*-0xd+0x2368+0x83d*-0x9),_0x27da83=_0x204f2f['tcYch'](_0xf2392e,_0xcb362e['chSiz'+'e'])||0x1839+0xde*-0x2a+-0x8e*-0x16,_0x120291=/^#[0-9a-f]{6}$/i[_0x54c21f(0x279)](_0x8ee670[_0x54c21f(0x4fa)+'or'])?_0x242f6b[_0x54c21f(0x4fa)+'or']:_0x204f2f[_0x54c21f(0x613)];_0x5d3771['save'](),_0x38b953[_0x54c21f(0x1eb)+'eStyl'+'e']=_0x120291,_0x32507c['fillS'+_0x54c21f(0x41f)]=_0x120291,_0x37140b['lineW'+_0x54c21f(0x4e7)]=_0x2d57bd[_0x54c21f(0x3bb)](-0xf81+-0x965*-0x1+0x61d+0.5,(-0xe65+0x67*-0x56+0x3101)*_0x27da83),_0x638dd5[_0x54c21f(0x2ff)+_0x54c21f(0x416)+'r']=_0x120291,_0x456987[_0x54c21f(0x2ff)+'wBlur']=0x1399+-0x1c16*-0x1+0x2fa9*-0x1;var _0x2ae4c4=(-0xe3b+0x1*0xf05+-0xc4)*_0x27da83,_0x23514e=(-0x1b74+0x62*-0x11+0x26*0xe5)*_0x27da83;_0x30b0f7['begin'+_0x54c21f(0x1ce)](),_0x5ac6c8[_0x54c21f(0x5ec)+'o'](_0x46c9f2-_0x2ae4c4-_0x23514e,_0x5a076d),_0x113b2b['lineT'+'o'](_0x46c9f2-_0x2ae4c4,_0x5a076d),_0xc3cbda['moveT'+'o'](_0x46c9f2+_0x2ae4c4,_0x5a076d),_0x153588['lineT'+'o'](_0x46c9f2+_0x2ae4c4+_0x23514e,_0x5a076d),_0x583ccd[_0x54c21f(0x5ec)+'o'](_0x46c9f2,_0x204f2f[_0x54c21f(0x411)](_0x204f2f[_0x54c21f(0x61c)](_0x5a076d,_0x2ae4c4),_0x23514e)),_0x2edc29['lineT'+'o'](_0x46c9f2,_0x5a076d-_0x2ae4c4),_0x5277e9['moveT'+'o'](_0x46c9f2,_0x5a076d+_0x2ae4c4),_0x84d0b9[_0x54c21f(0x550)+'o'](_0x46c9f2,_0x204f2f[_0x54c21f(0x21d)](_0x204f2f[_0x54c21f(0x5a6)](_0x5a076d,_0x2ae4c4),_0x23514e)),_0x2c0453[_0x54c21f(0x1eb)+'e'](),_0x34862a[_0x54c21f(0x1c4)+_0x54c21f(0x1ce)](),_0x2c94fa['arc'](_0x46c9f2,_0x5a076d,(-0x133c+-0x24f3*0x1+0x2*0x1c18+0.6000000000000001)*_0x27da83,-0x1de0+0x9f*0x2+0x1ca2,_0x2f0212['PI']*(-0x3*0x601+0xa1*-0x13+-0x112*-0x1c)),_0x255bcb[_0x54c21f(0x27d)](),_0x2f0dfa['resto'+'re']();}},!![]),_0x358540['evpFR'](_0x363c73,_0x358540['dOAbb'],'Legio'+_0x1cee3c(0x386)+'forms'+_0x1cee3c(0x452)+_0x1cee3c(0x408)+_0x1cee3c(0x396)+'ent',_0x1cee3c(0x337)+_0x1cee3c(0x647),[_0x1cee3c(0x42f)],_0x1cee3c(0x42f),(_0x1311cc,_0x23a72b)=>{var _0x40f481=_0x1cee3c;if(_0x358540[_0x40f481(0x2d7)]==='BiKaX'){var _0xc346ce=_0x31b970[_0x40f481(0x27a)+_0x40f481(0x23f)+'ent'](_0x358540['pklOJ']);return _0xc346ce[_0x40f481(0x32c)]=_0x40f481(0x19d)+'n',_0xc346ce[_0x40f481(0x1f5)+'Name']='sk-bt'+'n',_0xc346ce[_0x40f481(0x160)+_0x40f481(0x3f0)+'t']=_0x445afa,_0xc346ce['oncli'+'ck']=_0x52402e=>{var _0x3054ef=_0x40f481;_0x52402e[_0x3054ef(0x421)+_0x3054ef(0x45a)+_0x3054ef(0x3ad)](),_0x9df3fb();},_0xc346ce;}else _0x84cf02(_0x3cff4b,_0x23a72b,_0x27a6a5,_0x358540['CxmuE']);},!![]));}catch(_0x200245){console['warn'](_0x1cee3c(0x615)+_0x1cee3c(0x62c)+'ur]\x20U'+'WMK\x20i'+'nit\x20f'+'ailed'+':',_0x200245&&_0x200245['messa'+'ge']);}function _0x2b94f7(_0x3fd1bc,_0x24e6e2){var _0x1abee3=_0x1cee3c,_0x1b3aa4=_0x14e349[_0x3fd1bc];if(_0x1b3aa4)try{_0x1b3aa4[_0x1abee3(0x589)+'ed']=!!_0x24e6e2;}catch(_0x4f683e){}}_0x358540[_0x1cee3c(0x56b)](setInterval,()=>{var _0x22d894=_0x1cee3c,_0x255749={'wrOwu':function(_0x263d27,_0x1490e2,_0x1d99be,_0x234d98,_0x2d8a5a){return _0x263d27(_0x1490e2,_0x1d99be,_0x234d98,_0x2d8a5a);},'MszMT':_0x358540[_0x22d894(0x470)],'UyXhc':function(_0x2ac706,_0x2a0833,_0x5e9e9a,_0x232ebf,_0x1242c2,_0x3e0fd3,_0x55971e,_0x143d54){return _0x358540['dEIIz'](_0x2ac706,_0x2a0833,_0x5e9e9a,_0x232ebf,_0x1242c2,_0x3e0fd3,_0x55971e,_0x143d54);},'czHDT':'OHeal'+'th','pqyHe':_0x358540['NNhVX'],'OMlKd':'Tick','cQzFX':_0x358540[_0x22d894(0x1b0)],'nWaai':_0x358540[_0x22d894(0x3dd)],'uNufM':_0x22d894(0x663)+'ve','mlUdu':'Legio'+_0x22d894(0x386)+'forms'+_0x22d894(0x452)+'tide.'+'Movem'+_0x22d894(0x4c6),'PyolX':_0x22d894(0x337)+_0x22d894(0x647),'dXJeZ':'i32'};if(!_0x125e83||!window['unity'+_0x22d894(0x60c)+_0x22d894(0x267)])return;var _0x301325=(Number(_0x1ff9ee['speed'+'Pct'])||-0x7*0x312+-0x40*0x3+0x16a2)/(0x7*-0x2b+-0x16f2+0xfb*0x19),_0x29e7ca=(Number(_0x1ff9ee['jumpP'+'ct'])||0x16ab*-0x1+-0x1*0x1e5d+0x356c)/(0x372+-0x1e5d+0x1*0x1b4f),_0x273ba0=(Number(_0x1ff9ee[_0x22d894(0x1ba)+_0x22d894(0x189)])||0x46b*-0x2+-0x5b7+0xef1)/(-0x2149+0x26d7+0x295*-0x2),_0x319ac8=Math[_0x22d894(0x3bb)](-0xc80+0xa78+0x209*0x1,Number(_0x1ff9ee[_0x22d894(0x303)+_0x22d894(0x1c1)+'e'])||-0xec8+-0x1ab0+0x2a0e),_0x39cae6=_0x301325!==0x1979+-0x1d05+-0x9*-0x65||_0x29e7ca!==-0x3e8*0x2+-0x2036+-0x1*-0x2807||_0x358540['EsxXc'](_0x273ba0,0xb24+0xe+-0xb31)||_0x1ff9ee[_0x22d894(0x414)],_0x4dfd61=_0x1ff9ee[_0x22d894(0x5e2)+'ead']||_0x1ff9ee['damag'+'eExp']||_0x1ff9ee['infAm'+_0x22d894(0x4f2)]||_0x1ff9ee[_0x22d894(0x676)+_0x22d894(0x1b6)];if(_0x358540[_0x22d894(0x186)](!_0x39cae6,!_0x4dfd61))return;try{for(var _0x1a9eb5=0x96*-0x13+-0x1*-0xfc1+0xd*-0x5b;_0x1a9eb5<_0x3cff4b['lengt'+'h'];_0x1a9eb5++){var _0x46c4f=_0x3cff4b[_0x1a9eb5];if(!_0x46c4f)continue;if(_0x358540[_0x22d894(0x692)](_0x301325,0x2*0x104a+-0x51*0x67+0x2*0x2)){var _0x21c627=_0x358540['pwZVJ'][_0x22d894(0x4e0)]('|'),_0x20066f=0x11*0xd9+0x1*-0x1bf5+-0x242*-0x6;while(!![]){switch(_0x21c627[_0x20066f++]){case'0':_0x358540[_0x22d894(0x261)](_0x4e0733,_0x46c4f,0xf5a+-0x48*-0x71+-0x2f06*0x1,_0x358540['BzoFk'],_0x301325);continue;case'1':_0x4e0733(_0x46c4f,-0x88e+-0x1bbf+0x2481,'f32',_0x301325);continue;case'2':_0x358540['buEMG'](_0x4e0733,_0x46c4f,0x8*-0x74+0x262+0x3*0x7a,'f32',_0x301325);continue;case'3':_0x4e0733(_0x46c4f,-0xd12+0x1d87+-0x104d,'f32',_0x301325);continue;case'4':_0x4e0733(_0x46c4f,0xb7*0x3+-0x1*0x23e6+-0xb4b*-0x3,_0x358540['BzoFk'],_0x301325);continue;case'5':_0x4e0733(_0x46c4f,-0x25e7+-0x3*0x2d+0x9*0x44a,'f32',_0x301325);continue;}break;}}if(_0x29e7ca!==0x1*-0x1433+0xc46+0x5*0x196)_0x4e0733(_0x46c4f,-0x250b*-0x1+0x156a+0xe5*-0x41,'f32',_0x29e7ca);_0x273ba0!==-0x7e3+-0x26f7+0x2edb&&(_0x4e0733(_0x46c4f,0x223d+-0x1ab1+0x5*-0x174,'f32',_0x273ba0),_0x4e0733(_0x46c4f,0x2603+-0x1*-0xb73+0x1895*-0x2,_0x22d894(0x2d5),_0x273ba0));if(_0x1ff9ee['bhop'])_0x358540[_0x22d894(0x261)](_0x165f67,_0x46c4f,0x150c*-0x1+-0x12f*0x12+-0x1a*-0x1a7,_0x358540[_0x22d894(0x28e)],-(-0x3ff+0x86f*-0x1+0x1055));}}catch(_0x56bd6b){}try{if(_0x358540[_0x22d894(0x2de)](_0x22d894(0x2df),'btbRZ'))_0x358540[_0x22d894(0x442)](_0x2aad3e),_0x56835f(_0x358540[_0x22d894(0x595)](_0xb53e05,_0x2c6802['value']));else for(var _0x562be5=0x1edf*0x1+-0x5c+-0x1e83;_0x358540['kdnUY'](_0x562be5,_0x16b4d6[_0x22d894(0x56f)+'h']);_0x562be5++){var _0x2a994f=_0x358540['XZDHt'](_0x1f115f,_0x16b4d6[_0x562be5],-0x1948+0x888+0x4*0x43e);if(!_0x2a994f)continue;_0x1ff9ee['damag'+_0x22d894(0x234)]&&(_0x358540[_0x22d894(0x5d1)](_0x358540['hDpQP'],'ztwix')?_0x32d4be['Unity'+_0x22d894(0x5fc)+'dkit']&&!_0x25837b[_0x22d894(0x5cd)+_0x22d894(0x5da)]&&(_0x3d2dae=_0x2fb0e0['Unity'+'WebMo'+'dkit'][_0x22d894(0x195)+_0x22d894(0x579)+'er'],_0x43580e=_0x53ee56['Unity'+_0x22d894(0x5fc)+_0x22d894(0x36c)][_0x22d894(0x320)+'me']['creat'+_0x22d894(0x36b)+'in']({'name':_0x22d894(0x63b)+_0x22d894(0x203),'version':'1.1.0','referencedAssemblies':['Assem'+_0x22d894(0x22c)+_0x22d894(0x1ed)+_0x22d894(0x551)]}),_0x255749[_0x22d894(0x4d8)](_0x556134,_0x22d894(0x391),_0x255749['czHDT'],_0x22d894(0x44e)+'ateTa'+_0x22d894(0x4f9)+'lth',['i32','i32'],_0x5c4ba2,_0x477862,!!_0x1b762c['god']),_0x2397e3(_0x22d894(0x373)+'oil',_0x255749[_0x22d894(0x454)],_0x255749['OMlKd'],[_0x22d894(0x42f)],_0x3c117c,_0x8f60e3,!!_0x5a325e[_0x22d894(0x373)+'oil']),_0x255749[_0x22d894(0x4d8)](_0x48fab0,_0x22d894(0x187)+'ooter',_0x255749[_0x22d894(0x45d)],_0x255749['nWaai'],[_0x22d894(0x42f),'i32'],_0x1bdaef,(_0x3c5895,_0x14389c)=>{var _0x370c89=_0x22d894;_0x368131(_0x5d2274,_0x14389c,_0x19ee5a,_0x370c89(0x636)+'ers');},!![]),_0x5ac64f(_0x255749['uNufM'],_0x255749['mlUdu'],_0x255749[_0x22d894(0x362)],[_0x255749[_0x22d894(0x5a7)]],_0x255749['dXJeZ'],(_0x3d075d,_0x3fb80b)=>{var _0x5025c2=_0x22d894;_0x255749['wrOwu'](_0x5c7e60,_0x58b6f9,_0x3fb80b,_0x49bc9a,_0x255749[_0x5025c2(0x640)]);},!![])):(_0x358540[_0x22d894(0x307)](_0x165f67,_0x2a994f,0xfba+0x8be+-0x182c,_0x358540['ZseTf'],_0x319ac8),_0x165f67(_0x2a994f,-0x1c38+0x157+0x3e3*0x7,'i32',_0x319ac8)));_0x1ff9ee[_0x22d894(0x5e2)+_0x22d894(0x381)]&&(_0x165f67(_0x2a994f,0x2*-0xaf1+0x1159+0x511,'f32',0xa05+-0x84*-0x18+0x15*-0x111),_0x358540['bYKog'](_0x165f67,_0x2a994f,-0x22c7+0x12c4+0x106b,_0x358540['BzoFk'],0x16fe+0x1766+-0x2e63));if(_0x1ff9ee[_0x22d894(0x171)+'moExp'])_0x165f67(_0x2a994f,-0x1453+0x990+0xb1f,_0x358540[_0x22d894(0x447)],-0x1a97+-0xfbe*-0x2+-0xfe*0x1);if(_0x1ff9ee[_0x22d894(0x676)+_0x22d894(0x1b6)]){if(_0x358540[_0x22d894(0x41e)](_0x22d894(0x1b8),_0x358540[_0x22d894(0x4cd)]))_0x358540['BPMtu'](_0x4e0733,_0x2a994f,0x11b6+0x1292+-0x11de*0x2,'f32',-0x4b1+-0xe47+0x12f8+0.1),_0x165f67(_0x2a994f,0x16ed+-0x3e*0x68+-0xe1*-0x3,'f32',-0x1*0x5d5+-0x23b0+-0x9*-0x49d+0.1);else try{_0x1422bf[_0x22d894(0x651)+'em'](_0x22d894(0x2a0)+_0x22d894(0x17f)+'r.ui.'+'v1',_0x3fdeb1[_0x22d894(0x5c6)+_0x22d894(0x698)](_0x440034));}catch(_0x17a6a3){}}}}catch(_0x4e2ec0){}},-0x62b*0x4+0x705+0x79*0x27),_0x358540[_0x1cee3c(0x529)](setInterval,()=>{var _0x54e051=_0x1cee3c;_0x27a6a5[_0x54e051(0x58e)+'oaded']=!!window[_0x54e051(0x573)+_0x54e051(0x60c)+'nce'];try{var _0x2cee39=-0xb2e+-0x23a8+-0x4af*-0xa;for(var _0x3e6ece in _0x14e349){if(_0x14e349[_0x3e6ece]&&_0x14e349[_0x3e6ece][_0x54e051(0x491)+'ed'])_0x2cee39++;}_0x27a6a5['hooks'+'Ok']=_0x2cee39;}catch(_0x24b967){}},0x2260+0x14e7+0x1*-0x335f);var _0x76e73e=new Set(),_0x45f713={0x1:[],0x3:[]},_0x5ebd64=![];function _0x553037(_0x382421){var _0x49a66b=_0x1cee3c;_0x76e73e[_0x49a66b(0x194)](_0x382421[_0x49a66b(0x18c)]);}function _0x44706a(_0x435623){var _0x2768b4=_0x1cee3c;_0x76e73e['delet'+'e'](_0x435623[_0x2768b4(0x18c)]);}function _0x3756dd(_0x2adeb3){var _0x149e74=_0x1cee3c,_0x5c7e84={'qiEQv':_0x358540[_0x149e74(0x2f0)],'HpMGC':_0x149e74(0x2f9)+_0x149e74(0x1f9)+'—\x20ove'+_0x149e74(0x456)+_0x149e74(0x5fa)+_0x149e74(0x22f)+'ooks\x20'+_0x149e74(0x4a5)+'ad\x20to'+_0x149e74(0x163)+')','pTOdJ':function(_0x1725a6,_0x4a4c42){return _0x1725a6+_0x4a4c42;},'kYvNn':function(_0x48ec65,_0x511843){return _0x48ec65+_0x511843;},'hmosK':function(_0x576a10,_0x10d744){return _0x576a10+_0x10d744;},'GlPVD':'UWMK\x20'+'bound'+'\x20','fDffo':'loade'+'d','Fbzfm':_0x358540[_0x149e74(0x4b2)],'DWoyO':_0x149e74(0x341),'SlVUM':_0x149e74(0x603),'YEvYN':function(_0x207dd9,_0x52ece8){return _0x358540['BkjJM'](_0x207dd9,_0x52ece8);},'gTRak':function(_0x1dc8ad,_0x184614,_0x162200,_0x340ce8){return _0x1dc8ad(_0x184614,_0x162200,_0x340ce8);}};if('ElQgv'!=='ElQgv')_0x2abe81['fillS'+'tyle']=_0x358540['aXBfv'](_0x1dba7c,'rgba('+_0x149e74(0x525)+'35,24'+_0x149e74(0x51c)+'5)'),_0xf284d0[_0x149e74(0x5f6)+_0x149e74(0x4de)](_0x16abfa,_0x4ec6e8,_0x447da9),_0x4cb2d5+=0x1a8f+0x175b+-0x31da;else{if(_0x2adeb3[_0x149e74(0x24d)+'ura'])return;_0x76e73e[_0x149e74(0x194)](_0x358540[_0x149e74(0x44d)]+_0x358540['BkjJM'](_0x2adeb3[_0x149e74(0x19d)+'n'],-0x1*-0xfe3+0xfed+-0x1df*0x11));var _0x18056a=_0x45f713[_0x358540['pNFtE'](_0x2adeb3['butto'+'n'],-0x2d*0x83+0x2*0xaab+0x1b2)];if(_0x18056a){if(_0x358540[_0x149e74(0x3a4)]===_0x358540[_0x149e74(0x3a4)]){_0x18056a['push'](performance['now']());if(_0x358540['jpwUt'](_0x18056a[_0x149e74(0x56f)+'h'],0x7df+0xb7*-0x29+-0xacc*-0x2))_0x18056a[_0x149e74(0x27e)]();}else{var _0x2c27ab=_0x4c5dbd[_0x149e74(0x5cd)+_0x149e74(0x5da)]?_0x5c7e84[_0x149e74(0x668)]:_0x10db62['uwmk']?_0x5c7e84[_0x149e74(0x281)](_0x5c7e84[_0x149e74(0x407)](_0x5c7e84['kYvNn'](_0x5c7e84[_0x149e74(0x281)](_0x5c7e84['kYvNn'](_0x5c7e84['kYvNn'](_0x5c7e84[_0x149e74(0x5a1)](_0x5c7e84['GlPVD'],_0x25b3d1['hooks'+'Ok']),'/'),_0xdcabc9[_0x149e74(0x371)+'Total']),'\x20hook'+'s'),'\x20|\x20ga'+_0x149e74(0x61e))+(_0xe92ce3[_0x149e74(0x58e)+'oaded']?_0x5c7e84['fDffo']:_0x5c7e84['Fbzfm'])+(_0x149e74(0x21a)+_0x149e74(0x5ad)+'\x20'),_0x2b274a['shoot'+_0x149e74(0x2b1)]?_0x5c7e84[_0x149e74(0x601)]:_0x149e74(0x603)),'\x20|\x20mo'+'vemen'+'t\x20')+(_0x1335a2[_0x149e74(0x2aa)+'ents']?_0x149e74(0x341):_0x5c7e84['SlVUM']):'UWMK\x20'+_0x149e74(0x5e5)+'NG\x20—\x20'+'overl'+_0x149e74(0x2ab)+'ly\x20(r'+'einst'+'all\x20t'+_0x149e74(0x5df)+'erscr'+_0x149e74(0x5c4);if(_0x3892bc[_0x149e74(0x4e5)+_0x149e74(0x319)])_0x2c27ab+=_0x5c7e84['YEvYN']('\x20|\x20ER'+_0x149e74(0x2f2),_0x35a52b[_0x149e74(0x4e5)+_0x149e74(0x319)]);return _0x1c4d69('Statu'+'s',_0x2c27ab,_0x333aa4['uwmk'],null,[_0x5c7e84[_0x149e74(0x2c7)](_0x50cd5a,_0x149e74(0x2c5)+_0x149e74(0x36e)+_0x149e74(0x367),'calls'+_0x149e74(0x400)+_0x149e74(0x49d)+_0x149e74(0x5b7)+'plica'+_0x149e74(0x2f3)+_0x149e74(0x4c2)+_0x149e74(0x19f)+'Frame'+_0x149e74(0x38c),_0x89bf35('Apply',()=>{var _0x23c8f8=_0x149e74;try{if(_0x416bb3)_0x16404a['call'](_0x5c7e84['qiEQv'],_0x23c8f8(0x4c2)+_0x23c8f8(0x19f)+'Frame'+_0x23c8f8(0x38c),[-0x3e8+0x8*0xce+-0xc*0x22]);}catch(_0x15df81){}}))]);}}}}function _0xb56bff(_0x2482a2){var _0x4b8716=_0x1cee3c;if(!_0x2482a2[_0x4b8716(0x24d)+'ura'])_0x76e73e['delet'+'e']('mouse'+_0x358540['DKvEq'](_0x2482a2[_0x4b8716(0x19d)+'n'],0x1*-0x251f+0x44*0x7d+0x3ec));}function _0x4d9a8c(){var _0x5e716f=_0x1cee3c;_0x76e73e[_0x5e716f(0x1d3)]();}function _0x133c56(){var _0x4b5d33=_0x1cee3c;if(_0x5ebd64)return;_0x5ebd64=!![],window['addEv'+'entLi'+'stene'+'r'](_0x358540[_0x4b5d33(0x3de)],_0x553037,!![]),window[_0x4b5d33(0x46c)+_0x4b5d33(0x450)+_0x4b5d33(0x45b)+'r'](_0x358540['ddSOh'],_0x44706a,!![]),window['addEv'+_0x4b5d33(0x450)+_0x4b5d33(0x45b)+'r'](_0x358540['CWXUw'],_0x3756dd,!![]),window[_0x4b5d33(0x46c)+_0x4b5d33(0x450)+_0x4b5d33(0x45b)+'r'](_0x358540[_0x4b5d33(0x552)],_0xb56bff,!![]),window[_0x4b5d33(0x46c)+'entLi'+'stene'+'r'](_0x358540[_0x4b5d33(0x5ed)],_0x4d9a8c);}function _0x3170ab(_0x407d60){var _0x579790=_0x1cee3c,_0x559f9a=_0x45f713[_0x407d60]||[],_0x54de7e=performance[_0x579790(0x66b)]();while(_0x559f9a[_0x579790(0x56f)+'h']&&_0x54de7e-_0x559f9a[0xdb1+0x7*-0x14b+-0x4a4]>-0x1e*-0xd6+-0x786+-0xda6)_0x559f9a[_0x579790(0x27e)]();return _0x559f9a['lengt'+'h'];}function _0x9d4a08(_0x4cc63d){var _0x354fca=_0x1cee3c,_0x528f1c={'vAfol':function(_0x4de857,_0x3bd37b){return _0x4de857+_0x3bd37b;}};if('XLeAb'!==_0x358540[_0x354fca(0x1cc)]){var _0x436e36={'fuKfP':function(_0x27161f,_0x217555){return _0x528f1c['vAfol'](_0x27161f,_0x217555);}};_0xa4d736['addEv'+_0x354fca(0x450)+_0x354fca(0x45b)+'r']('error',_0x4ee371=>{var _0x2e4c8a=_0x354fca;try{var _0x4bd852=_0x4ee371&&(_0x4ee371[_0x2e4c8a(0x2a7)+'ge']||_0x4ee371[_0x2e4c8a(0x453)]&&_0x4ee371[_0x2e4c8a(0x453)]['messa'+'ge'])||_0x2e4c8a(0x538)+'wn';if(_0x4ee371&&_0x4ee371['filen'+_0x2e4c8a(0x4b9)])_0x4bd852+=_0x436e36['fuKfP'](_0x2e4c8a(0x5b0)+_0x16bc08(_0x4ee371[_0x2e4c8a(0x1ca)+'ame'])[_0x2e4c8a(0x4e0)]('/')[_0x2e4c8a(0x62a)]()+':',_0x4ee371[_0x2e4c8a(0x693)+'o']||'?');_0x36a701[_0x2e4c8a(0x4e5)+'rror']=_0x5dff5d(_0x4bd852)['slice'](0x733+0x1*0xd23+0xa2b*-0x2,0x13+0x734+0x6a7*-0x1);}catch(_0x2741c9){}});}else{if(document[_0x354fca(0x479)]&&(_0x358540['YkOPM'](document['ready'+'State'],_0x358540[_0x354fca(0x5f9)])||document[_0x354fca(0x316)+'State']===_0x354fca(0x247)+'ete'))_0x358540['xqKrH'](_0x4cc63d);else document['addEv'+'entLi'+_0x354fca(0x45b)+'r'](_0x354fca(0x47f)+_0x354fca(0x327)+'Loade'+'d',_0x4cc63d,{'once':!![]});}}_0x9d4a08(()=>{var _0x47ada5=_0x1cee3c,_0x43725f={'Zstgf':function(_0x192a12,_0x1e700a){return _0x192a12===_0x1e700a;},'JwLvt':function(_0x5dc2dd,_0x542a8e){return _0x358540['wyIhG'](_0x5dc2dd,_0x542a8e);},'pBsEg':_0x358540[_0x47ada5(0x354)],'wIjEq':_0x358540['NkScp'],'CNTDf':_0x47ada5(0x66d)+'bly-C'+_0x47ada5(0x1ed)+'.dll','kIdQq':function(_0x220e5a,_0xf24203,_0x5e3d00,_0x2e5506,_0x2552ce,_0x405f62,_0x4ea43a,_0x2ee1dc){return _0x358540['ZoBYP'](_0x220e5a,_0xf24203,_0x5e3d00,_0x2e5506,_0x2552ce,_0x405f62,_0x4ea43a,_0x2ee1dc);},'LVmtQ':'OHeal'+'th','fahzi':'Initi'+_0x47ada5(0x55a)+_0x47ada5(0x4f9)+_0x47ada5(0x227),'ZZkDm':_0x358540[_0x47ada5(0x447)],'UiQOk':_0x47ada5(0x5ff)+_0x47ada5(0x386)+_0x47ada5(0x34c)+'.Over'+_0x47ada5(0x408)+_0x47ada5(0x162)+_0x47ada5(0x50c)+'on','XhbSp':_0x47ada5(0x5ff)+'nPlat'+'forms'+_0x47ada5(0x452)+_0x47ada5(0x408)+'Movem'+'ent','pRIEy':_0x47ada5(0x337)+'unded','zYEAX':_0x358540[_0x47ada5(0x4c8)],'Ewzwn':function(_0x45f663,_0x3e9f1b,_0x551687){return _0x358540['cXgAu'](_0x45f663,_0x3e9f1b,_0x551687);},'ghZoj':_0x358540['Kanpc'],'Ozbvr':function(_0x56210e,_0x563e7c){return _0x56210e!==_0x563e7c;},'mmxFc':_0x47ada5(0x244)+'check'+'ed','VxydP':function(_0x503b5b,_0x2fb199){return _0x503b5b(_0x2fb199);},'MyNYO':'butto'+'n','ilEfx':_0x47ada5(0x2c0),'lNliz':function(_0x42ef3d,_0x5ae0c8){return _0x42ef3d+_0x5ae0c8;},'pIzBe':function(_0x118425,_0x2690cf){return _0x118425-_0x2690cf;},'PjSQy':'input','Krmnp':_0x358540['hyxHD'],'AHXiC':'sk-sl'+'ider','ulJJH':function(_0x2d5daf,_0x49a416){return _0x2d5daf!==_0x49a416;},'oSpOy':function(_0x1601e6,_0x2583c8){return _0x1601e6+_0x2583c8;},'TaxhW':_0x47ada5(0x361),'qVgWb':function(_0x1c82dd,_0x356ddb,_0x54a643){var _0x24deca=_0x47ada5;return _0x358540[_0x24deca(0x29d)](_0x1c82dd,_0x356ddb,_0x54a643);},'wKEAq':_0x47ada5(0x471)+'g','Hkfgv':_0x47ada5(0x515),'Aawtp':_0x358540[_0x47ada5(0x226)],'JMnwf':_0x358540['yDedy'],'YCsZK':function(_0x356012,_0x58ab52){var _0x454cc1=_0x47ada5;return _0x358540[_0x454cc1(0x21c)](_0x356012,_0x58ab52);},'AHlbq':function(_0x3541f9,_0x2961a0){return _0x3541f9+_0x2961a0;},'TEuGZ':function(_0x35e00d,_0x33474d){return _0x358540['ucpyp'](_0x35e00d,_0x33474d);},'wciNl':function(_0x429f9d,_0x3241b0){return _0x429f9d+_0x3241b0;},'QQwlG':_0x358540['bpqwu'],'eTykA':_0x47ada5(0x375)+'s','OhXok':_0x358540[_0x47ada5(0x2b2)],'ttYKZ':'loadi'+'ng','zHMBT':_0x47ada5(0x21a)+_0x47ada5(0x5ad)+'\x20','CivYj':_0x47ada5(0x341),'FItoF':_0x358540[_0x47ada5(0x347)],'WfQkv':function(_0xe277c2,_0x39ebdb){return _0xe277c2+_0x39ebdb;},'EhQSq':function(_0x373749,_0x242e19,_0x47398e,_0x1b1a18,_0x49cee4,_0x598fc7){return _0x358540['GqnDN'](_0x373749,_0x242e19,_0x47398e,_0x1b1a18,_0x49cee4,_0x598fc7);},'hMpJe':function(_0x4637ae,_0x4d8d70,_0x57d593,_0x2a5081){return _0x4637ae(_0x4d8d70,_0x57d593,_0x2a5081);},'IngPd':_0x358540['XAcqc'],'YpDTI':'calls'+'\x20Unit'+_0x47ada5(0x49d)+'ne.Ap'+'plica'+_0x47ada5(0x2f3)+_0x47ada5(0x4c2)+'arget'+'Frame'+'Rate','iahtO':function(_0x4a926c){return _0x4a926c();},'uMdIv':function(_0xc51c7,_0x2e3695){return _0xc51c7*_0x2e3695;},'oubew':_0x358540[_0x47ada5(0x4e1)],'rSUNS':function(_0x1d57a9,_0x54002b){return _0x1d57a9===_0x54002b;},'ihFZK':_0x358540[_0x47ada5(0x57a)],'DVqTr':function(_0x125e38){var _0x1506f5=_0x47ada5;return _0x358540[_0x1506f5(0x442)](_0x125e38);},'KOlJE':function(_0x3f743c){return _0x358540['aUfSd'](_0x3f743c);},'qAimj':function(_0xef7ec7){return _0xef7ec7();},'pvQfC':function(_0x3e0b67,_0x145bc9){return _0x3e0b67+_0x145bc9;},'qTocZ':function(_0x10d3ca,_0x296676,_0x4e8d2b){var _0x2f199e=_0x47ada5;return _0x358540[_0x2f199e(0x317)](_0x10d3ca,_0x296676,_0x4e8d2b);},'GUZxo':function(_0x2b0539,_0x102732){var _0x3b3527=_0x47ada5;return _0x358540[_0x3b3527(0x692)](_0x2b0539,_0x102732);},'daRCE':_0x47ada5(0x5b4),'Llijr':function(_0x28b4a4,_0x25cdb8){return _0x28b4a4===_0x25cdb8;},'KoStd':_0x47ada5(0x378)+'t','JOeXF':_0x47ada5(0x212)+'s\x20OHe'+'alth.'+'Initi'+'ateTa'+'keHea'+_0x47ada5(0x681)+'the\x20f'+'unnel'+_0x47ada5(0x243)+_0x47ada5(0x677)+'age\x20g'+'oes\x20t'+_0x47ada5(0x4c7)+'h.','pVLcK':_0x47ada5(0x2c4)+_0x47ada5(0x174)+'\x20[EXP'+']','ljyBi':'Damag'+_0x47ada5(0x389)+'P]','CbLMy':_0x47ada5(0x567)+'rites'+_0x47ada5(0x65b)+'tideW'+'eapon'+_0x47ada5(0x4fe)+_0x47ada5(0x1e4)+_0x47ada5(0x33c)+_0x47ada5(0x541)+'\x20the\x20'+_0x47ada5(0x457)+_0x47ada5(0x498)+'idate'+'s.','sOcCs':function(_0x25367b,_0x3c33d4,_0x15343f,_0x2191a3,_0x2574a2,_0x6364c1){return _0x25367b(_0x3c33d4,_0x15343f,_0x2191a3,_0x2574a2,_0x6364c1);},'JTeAQ':_0x358540[_0x47ada5(0x40e)],'PhZHa':function(_0x4ba092,_0x1c19c6,_0x4a6d29,_0x267457){return _0x4ba092(_0x1c19c6,_0x4a6d29,_0x267457);},'WbWDw':'100\x20='+_0x47ada5(0x385)+_0x47ada5(0x57d),'JZCxN':function(_0x1c270a,_0x52efcb){var _0x47a00c=_0x47ada5;return _0x358540[_0x47a00c(0x2a5)](_0x1c270a,_0x52efcb);},'tCUmz':function(_0x2a9366,_0x5d007f,_0x274708,_0x200707){return _0x2a9366(_0x5d007f,_0x274708,_0x200707);},'yfyFG':_0x47ada5(0x35a)+'%','yvQoA':function(_0x20bc83,_0x10d3ae,_0x4e4149,_0x316854){return _0x358540['dNUIz'](_0x20bc83,_0x10d3ae,_0x4e4149,_0x316854);},'KzhKo':_0x47ada5(0x221)+'-hop','SdYHJ':'Zeroe'+_0x47ada5(0x562)+'ement'+'.last'+_0x47ada5(0x3d7)+_0x47ada5(0x419)+_0x47ada5(0x36f)+_0x47ada5(0x65a)+'\x20cool'+_0x47ada5(0x619)+_0x47ada5(0x679)+_0x47ada5(0x476)+_0x47ada5(0x3a0),'Taxiu':function(_0x30ed61,_0x190adf){return _0x30ed61===_0x190adf;},'TyMvc':_0x358540['GQjyR'],'GoBPz':'Botto'+_0x47ada5(0x69a)+'t','UVQAm':_0x47ada5(0x4aa)+'m\x20rig'+'ht','ZCtRk':_0x47ada5(0x204),'HDKZf':function(_0x15e151,_0x470f9a,_0x35a364,_0x2aa333){return _0x15e151(_0x470f9a,_0x35a364,_0x2aa333);},'qewcl':'CPS\x20r'+_0x47ada5(0x172)+'t','wPYII':function(_0x3a697b,_0x6b3d8a,_0x5c02bf){return _0x3a697b(_0x6b3d8a,_0x5c02bf);},'mpHwc':function(_0x5c9647,_0x13376c,_0x5c9442,_0x6fb98a){return _0x5c9647(_0x13376c,_0x5c9442,_0x6fb98a);},'ZxHGd':_0x358540['Fwihp'],'IuPUY':_0x47ada5(0x59a)+_0x47ada5(0x53e)+'r','VLlHQ':_0x358540['gmSCZ'],'PmgXD':'Safe\x20'+'Mode\x20'+_0x47ada5(0x578)+_0x47ada5(0x21e)+'nly)','ATAdC':_0x47ada5(0x60d)+_0x47ada5(0x156)+'\x20enti'+_0x47ada5(0x268)+_0x47ada5(0x558)+_0x47ada5(0x278)+_0x47ada5(0x371)+_0x47ada5(0x685)+_0x47ada5(0x47a)+'\x20if\x20m'+'atche'+'s\x20won'+_0x47ada5(0x228)+'art.','eecHM':'ACTk\x20'+_0x47ada5(0x612)+'r','iULBK':_0x358540[_0x47ada5(0x46b)],'fmPnE':function(_0x2b7ddf,_0x35500b){var _0x4e9460=_0x47ada5;return _0x358540[_0x4e9460(0x311)](_0x2b7ddf,_0x35500b);},'roeCz':_0x358540['HTPDr'],'DfAwP':'Inser'+'t','PPexL':_0x358540[_0x47ada5(0x66c)]};_0x1ff9ee[_0x47ada5(0x3e4)+'ck']&&_0x358540['hBeqX'](setInterval,()=>{var _0x3a7ce3=_0x47ada5;try{for(var _0x549a02 of[_0x3a7ce3(0x3b2)+_0x3a7ce3(0x5c7)+_0x3a7ce3(0x3fe)+_0x3a7ce3(0x458)+'nt','kour-'+_0x3a7ce3(0x4c3)+_0x3a7ce3(0x2f7)+_0x3a7ce3(0x5bd)+'t',_0x358540[_0x3a7ce3(0x3fa)],_0x3a7ce3(0x618)+_0x3a7ce3(0x2b6)+_0x3a7ce3(0x50f)+'s']){var _0x552741=document['getEl'+'ement'+_0x3a7ce3(0x3b0)](_0x549a02);if(_0x552741&&_0x549a02===_0x358540['vNXoz']){var _0x3b7cf7=_0x552741[_0x3a7ce3(0x434)+'ren'];for(var _0x27a4b6=-0x43a+0x1e8+-0x63*-0x6;_0x27a4b6<_0x3b7cf7['lengt'+'h'];_0x27a4b6++){if(_0x3b7cf7[_0x27a4b6]['id']&&_0x358540[_0x3a7ce3(0x41e)](_0x3b7cf7[_0x27a4b6]['id']['index'+'Of'](_0x358540[_0x3a7ce3(0x368)]),0x110b+0x54c+0x12d*-0x13))_0x3b7cf7[_0x27a4b6]['style'][_0x3a7ce3(0x383)+'ay']=_0x3a7ce3(0x603);}}else{if(_0x552741)_0x552741['style'][_0x3a7ce3(0x383)+'ay']=_0x358540[_0x3a7ce3(0x347)];}}}catch(_0x3e693d){}},-0x2325+-0x238f*0x1+0x4e84);var _0x865422=document['creat'+'eElem'+_0x47ada5(0x4c6)](_0x358540[_0x47ada5(0x3ec)]);_0x865422[_0x47ada5(0x42c)][_0x47ada5(0x27b)+'xt']='posit'+'ion:f'+'ixed;'+_0x47ada5(0x51d)+_0x47ada5(0x4a0)+_0x47ada5(0x5a0)+_0x47ada5(0x3d0)+_0x47ada5(0x497)+'t:100'+_0x47ada5(0x518)+'index'+_0x47ada5(0x481)+_0x47ada5(0x16f)+'6;poi'+_0x47ada5(0x45e)+'event'+'s:non'+'e';var _0x4bc8ee=_0x865422['getCo'+_0x47ada5(0x5d9)]('2d');function _0x4a100b(){var _0xdf6e98=_0x47ada5;try{var _0x4f1748=document[_0xdf6e98(0x618)+_0xdf6e98(0x2b6)+_0xdf6e98(0x182)+'nt'],_0x48bad3=_0x4f1748&&_0x4f1748['tagNa'+'me']!=='CANVA'+'S'?_0x4f1748:document[_0xdf6e98(0x479)]||document['docum'+_0xdf6e98(0x46f)+_0xdf6e98(0x572)];if(_0x865422[_0xdf6e98(0x5bd)+_0xdf6e98(0x242)]!==_0x48bad3)_0x48bad3['appen'+_0xdf6e98(0x617)+'d'](_0x865422);}catch(_0x43f0ae){try{document[_0xdf6e98(0x479)][_0xdf6e98(0x4f0)+'dChil'+'d'](_0x865422);}catch(_0x7ebff3){}}}var _0x1ef299={'w':0x0,'h':0x0,'dpr':0x0};function _0x474b75(){var _0x4fd58b=_0x47ada5,_0xfe2bf6=window['devic'+'ePixe'+_0x4fd58b(0x63e)+'o']||0x9cf*-0x2+-0x49*-0x3+-0x962*-0x2,_0x2cba8b=window[_0x4fd58b(0x565)+_0x4fd58b(0x4fc)],_0x36e9e5=window['inner'+_0x4fd58b(0x2af)+'t'];if(_0x2cba8b===_0x1ef299['w']&&_0x36e9e5===_0x1ef299['h']&&_0x43725f[_0x4fd58b(0x18a)](_0xfe2bf6,_0x1ef299[_0x4fd58b(0x3cb)]))return;_0x1ef299['w']=_0x2cba8b,_0x1ef299['h']=_0x36e9e5,_0x1ef299[_0x4fd58b(0x3cb)]=_0xfe2bf6,_0x865422['width']=Math[_0x4fd58b(0x238)](_0x2cba8b*_0xfe2bf6),_0x865422['heigh'+'t']=Math['round'](_0x43725f[_0x4fd58b(0x502)](_0x36e9e5,_0xfe2bf6)),_0x4bc8ee['setTr'+'ansfo'+'rm'](_0xfe2bf6,0x5bb+-0x3d3*-0x1+-0x98e,-0x2*0x8d7+0x7*-0x21+-0x47*-0x43,_0xfe2bf6,-0x1*-0x2501+0x9a+-0x259b,0x35*0x53+0x153*-0x3+-0xd36);}var _0x56d99a=-0x1026+0x1f7*-0x6+0x1bf0,_0x29af7f=performance['now'](),_0x4eb7af=0xcf5+-0x23d*-0x1+-0xf32;function _0xf80154(_0x573a00){var _0x101c59=_0x47ada5,_0x5e842c={'FCmZB':function(_0x1418a5,_0x498b47){return _0x1418a5+_0x498b47;},'BZVoU':function(_0x275cb4,_0xd7dd0e){var _0x262569=_0xe9da;return _0x358540[_0x262569(0x34d)](_0x275cb4,_0xd7dd0e);},'zdeZo':function(_0x4c5cc7,_0x56c4d4){return _0x4c5cc7+_0x56c4d4;},'FQwqm':function(_0x22750e,_0x419d52){return _0x22750e+_0x419d52;},'FpXWa':function(_0x225d93,_0x26eef2){return _0x225d93+_0x26eef2;},'PEeRM':function(_0x26737b,_0x3c0e39){return _0x26737b+_0x3c0e39;},'rAIwm':function(_0x212fb7,_0x4aeb3a){return _0x212fb7+_0x4aeb3a;},'UfosS':_0x101c59(0x533)+_0x101c59(0x2a1)+'\x20','aYdgS':_0x358540[_0x101c59(0x4b2)],'SRFXZ':_0x358540['WhGwT'],'OvVIn':'held','lNiBU':_0x101c59(0x603),'FWtuB':_0x358540[_0x101c59(0x5f2)],'KCfff':_0x358540[_0x101c59(0x40a)],'SCBpA':_0x101c59(0x670),'scJbx':_0x358540[_0x101c59(0x1db)],'xZZRO':'middl'+'e','qerjo':function(_0x46a35a,_0x1fac37){return _0x46a35a+_0x1fac37;},'uBOIn':_0x101c59(0x45f)+_0x101c59(0x3ff)+'-seri'+_0x101c59(0x181)+'tem-u'+'i,san'+'s-ser'+'if','OWdoH':function(_0x34ae28,_0x3b5674){return _0x34ae28/_0x3b5674;},'RmGdZ':'shoot'+_0x101c59(0x2b1),'onqed':_0x358540[_0x101c59(0x470)]};if(_0x358540['EsxXc']('vuJlO','MkSMz')){var _0x5b1b1d=_0x358540[_0x101c59(0x3c8)](Number,_0x1ff9ee['ksSca'+'le'])||-0xcf*-0x2c+-0x20b1+-0x2e2,_0x562cb9=(-0x22*-0x10f+0x790+0x4*-0xadb)*_0x5b1b1d,_0x82964b=_0x358540[_0x101c59(0x3a3)](0xa5*-0x3+0x1*0xaab+-0x7c*0x12,_0x5b1b1d),_0x12d847=_0x358540[_0x101c59(0x413)](_0x562cb9*(0xcd1+0x12*0x171+-0x26c0),_0x82964b*(0xaba*-0x3+0x1d2f+0x301)),_0x46e7b9=_0x358540[_0x101c59(0x600)](_0x358540[_0x101c59(0x3a3)](_0x562cb9,-0x51d*0x1+0x967+0xf*-0x49),_0x82964b*(0x3*-0x8d1+0x1d*-0xcd+0x31ae)),_0x3b6d13=_0x1ff9ee['ksPos'],_0x22cdf6=_0x3b6d13==='br'?_0x358540['fBWiR'](_0x573a00['right'],-0x970*0x3+0x98f*-0x2+0x1*0x2f7e)-_0x12d847:_0x358540[_0x101c59(0x36d)](_0x573a00[_0x101c59(0x3e7)],-0xce5*0x1+0x63e+0x6b7*0x1),_0x3ad1cc=_0x3b6d13==='ml'?_0x358540[_0x101c59(0x413)](_0x573a00[_0x101c59(0x487)],_0x573a00['heigh'+'t']/(-0xb7*-0x1+0x2634+-0x26e9))-_0x358540[_0x101c59(0x262)](_0x46e7b9,-0x1b17+0x2*0x11e7+-0x1*0x8b5):_0x358540['fBWiR'](_0x358540[_0x101c59(0x5ea)](_0x573a00[_0x101c59(0x353)+'m'],_0x46e7b9),_0x3b6d13==='bl'?-0x1*0x1f0+0x15*0x1d9+-0x247d:0x1f*-0xc1+-0x41+0x1836),_0x595d32=(_0x2d1df8,_0x44d540,_0x4b3884,_0x5979f6,_0x27eb6e,_0x1575af,_0x1ba910)=>{var _0x2c1bca=_0x101c59;if(_0x2c1bca(0x365)!==_0x5e842c['SCBpA']){var _0x53b51d=_0x76e73e[_0x2c1bca(0x5d2)](_0x44d540);_0x4bc8ee[_0x2c1bca(0x604)](),_0x4bc8ee[_0x2c1bca(0x1c4)+_0x2c1bca(0x1ce)]();if(_0x4bc8ee[_0x2c1bca(0x238)+_0x2c1bca(0x4ec)])_0x4bc8ee[_0x2c1bca(0x238)+_0x2c1bca(0x4ec)](_0x4b3884,_0x5979f6,_0x27eb6e,_0x1575af,(0x26cf+-0x6a9+-0x201f)*_0x5b1b1d);else _0x4bc8ee['rect'](_0x4b3884,_0x5979f6,_0x27eb6e,_0x1575af);_0x4bc8ee[_0x2c1bca(0x52b)+_0x2c1bca(0x41f)]=_0x53b51d?'rgba('+_0x2c1bca(0x308)+'07,15'+'7,0.8'+'5)':'rgba('+_0x2c1bca(0x582)+'16,0.'+'7)',_0x4bc8ee[_0x2c1bca(0x27d)](),_0x4bc8ee[_0x2c1bca(0x53f)+'idth']=0x19b5+-0x6dc+-0x12d8,_0x4bc8ee[_0x2c1bca(0x1eb)+_0x2c1bca(0x359)+'e']=_0x53b51d?_0x50214f:'rgba('+_0x2c1bca(0x308)+'07,15'+'7,0.3'+'5)',_0x4bc8ee[_0x2c1bca(0x1eb)+'e'](),_0x53b51d&&(_0x4bc8ee[_0x2c1bca(0x2ff)+_0x2c1bca(0x416)+'r']=_0x823fe3,_0x4bc8ee['shado'+_0x2c1bca(0x32f)]=0x1180+0x264b*0x1+0x2ef*-0x13,_0x4bc8ee['fill'](),_0x4bc8ee['shado'+_0x2c1bca(0x32f)]=-0x16f*0x5+0xecb+-0x7a0),_0x4bc8ee[_0x2c1bca(0x52b)+_0x2c1bca(0x41f)]=_0x53b51d?'#fff':'rgba('+_0x2c1bca(0x525)+_0x2c1bca(0x5e0)+'0,0.8'+')',_0x4bc8ee[_0x2c1bca(0x584)+_0x2c1bca(0x346)]=_0x5e842c['scJbx'],_0x4bc8ee['textB'+_0x2c1bca(0x43b)+'ne']=_0x5e842c[_0x2c1bca(0x2e5)],_0x4bc8ee['font']=_0x5e842c[_0x2c1bca(0x2e3)](_0x2c1bca(0x315)+Math['round']((-0xf30*0x2+-0xbb9*0x2+0x35de)*_0x5b1b1d),_0x5e842c[_0x2c1bca(0x66e)]),_0x4bc8ee[_0x2c1bca(0x5f6)+_0x2c1bca(0x4de)](_0x2d1df8,_0x4b3884+_0x5e842c[_0x2c1bca(0x5e8)](_0x27eb6e,0x1eca+0x29b+-0x3*0xb21),_0x5e842c[_0x2c1bca(0x5cb)](_0x5979f6,_0x1575af/(0x1*0x2363+-0x8ea+-0x1a77))-(_0x1ba910?(0x35*0x60+-0x2*-0xf4f+-0x3279)*_0x5b1b1d:-0x1e*0xfb+0x1b98+0x1d2)),_0x1ba910&&(_0x4bc8ee['font']='600\x20'+Math['round']((0x860+-0x159c+-0x1*-0xd45)*_0x5b1b1d)+(_0x2c1bca(0x45f)+_0x2c1bca(0x3ff)+_0x2c1bca(0x32a)+_0x2c1bca(0x181)+_0x2c1bca(0x5de)+'i,san'+'s-ser'+'if'),_0x4bc8ee[_0x2c1bca(0x52b)+_0x2c1bca(0x41f)]=_0x53b51d?_0x2c1bca(0x2ef):'rgba('+'255,2'+'35,24'+_0x2c1bca(0x657)+'5)',_0x4bc8ee[_0x2c1bca(0x5f6)+_0x2c1bca(0x4de)](_0x1ba910,_0x4b3884+_0x27eb6e/(0xd0d+-0x2573*0x1+-0x8e*-0x2c),_0x5e842c[_0x2c1bca(0x3f6)](_0x5979f6,_0x5e842c[_0x2c1bca(0x5e8)](_0x1575af,0x20f0+-0x435*0x5+-0xf*0xcb))+(0x172b+0x7*-0x449+0x1*0x6dc)*_0x5b1b1d)),_0x4bc8ee['resto'+'re']();}else _0x93a201['textC'+'onten'+'t']=_0x5e009a[_0x2c1bca(0x5cd)+'ode']?_0x2c1bca(0x2f9)+'MODE\x20'+_0x2c1bca(0x534)+'rlay\x20'+_0x2c1bca(0x5fa)+_0x2c1bca(0x22f)+_0x2c1bca(0x2c9)+_0x2c1bca(0x4a5)+_0x2c1bca(0x508)+'\x20exit'+')':_0x412e5b['uwmk']?_0x5e842c['FCmZB'](_0x5e842c['BZVoU'](_0x5e842c[_0x2c1bca(0x2e2)](_0x5e842c[_0x2c1bca(0x2cb)](_0x5e842c[_0x2c1bca(0x3f6)](_0x5e842c[_0x2c1bca(0x313)](_0x5e842c[_0x2c1bca(0x5cb)](_0x5e842c[_0x2c1bca(0x441)],_0x21f918[_0x2c1bca(0x371)+'Ok']),'/')+_0x60c71[_0x2c1bca(0x371)+_0x2c1bca(0x26f)],_0x2c1bca(0x375)+'s')+(_0x2c1bca(0x30c)+'me\x20')+(_0x126b0d[_0x2c1bca(0x58e)+'oaded']?_0x2c1bca(0x299)+'d':_0x5e842c['aYdgS'])+_0x5e842c['SRFXZ'],_0x3a6de6[_0x2c1bca(0x636)+_0x2c1bca(0x2b1)]?_0x5e842c[_0x2c1bca(0x426)]:'none'),_0x2c1bca(0x1e8)+_0x2c1bca(0x2b7)+'t\x20'),_0x2a397f['movem'+'ents']?'held':_0x5e842c['lNiBU']),_0x1d88c3[_0x2c1bca(0x4e5)+_0x2c1bca(0x319)]?_0x5e842c['FWtuB']+_0x3bd2f1[_0x2c1bca(0x4e5)+'rror']:''):_0x5e842c[_0x2c1bca(0x339)];};_0x595d32('W',_0x101c59(0x27f),_0x358540[_0x101c59(0x2fa)](_0x22cdf6+_0x562cb9,_0x82964b),_0x3ad1cc,_0x562cb9,_0x562cb9),_0x595d32('A',_0x358540[_0x101c59(0x67d)],_0x22cdf6,_0x3ad1cc+_0x562cb9+_0x82964b,_0x562cb9,_0x562cb9),_0x358540['zrBwt'](_0x595d32,'S','KeyS',_0x358540['arbmO'](_0x22cdf6,_0x562cb9)+_0x82964b,_0x358540['arbmO'](_0x3ad1cc,_0x562cb9)+_0x82964b,_0x562cb9,_0x562cb9),_0x358540[_0x101c59(0x1d5)](_0x595d32,'D',_0x358540['jseNp'],_0x22cdf6+_0x358540[_0x101c59(0x3a3)](_0x562cb9+_0x82964b,0x1b0a*-0x1+0x1*-0x27+0x1b33),_0x358540['BkjJM'](_0x358540[_0x101c59(0x34d)](_0x3ad1cc,_0x562cb9),_0x82964b),_0x562cb9,_0x562cb9);var _0x20aa51=_0x358540['DCOae'](_0x12d847-_0x82964b,-0x1689+-0xa9e+0x2129),_0x26030a=_0x358540[_0x101c59(0x21c)](_0x3ad1cc,_0x358540[_0x101c59(0x24b)](_0x562cb9+_0x82964b,0xab4+-0x218b+-0x1*-0x16d9));_0x358540['evpFR'](_0x595d32,_0x358540[_0x101c59(0x3ed)],_0x101c59(0x5d0)+'1',_0x22cdf6,_0x26030a,_0x20aa51,_0x562cb9,_0x1ff9ee['ksCps']?_0x358540[_0x101c59(0x3a9)](_0x3170ab,-0x705*-0x1+-0x6c0+0x22*-0x2)+_0x358540['mTTVn']:''),_0x595d32(_0x358540[_0x101c59(0x54b)],'mouse'+'3',_0x358540['rRgZA'](_0x358540[_0x101c59(0x21c)](_0x22cdf6,_0x20aa51),_0x82964b),_0x26030a,_0x20aa51,_0x562cb9,_0x1ff9ee[_0x101c59(0x1af)]?_0x3170ab(0x190b+0x21fa+-0x3b02)+_0x101c59(0x688):''),_0x358540['kPqUv'](_0x595d32,'',_0x358540[_0x101c59(0x198)],_0x22cdf6,_0x358540[_0x101c59(0x34d)](_0x26030a+_0x562cb9,_0x82964b),_0x12d847,_0x562cb9*(-0x4f*-0x77+-0x34e+-0x216b+0.45));}else _0x191798=_0x36b0f5['Unity'+_0x101c59(0x5fc)+_0x101c59(0x36c)][_0x101c59(0x195)+'Wrapp'+'er'],_0x2f900d=_0x1ec334[_0x101c59(0x3af)+_0x101c59(0x5fc)+'dkit'][_0x101c59(0x320)+'me'][_0x101c59(0x27a)+_0x101c59(0x36b)+'in']({'name':_0x43725f['pBsEg'],'version':_0x43725f['wIjEq'],'referencedAssemblies':[_0x43725f['CNTDf']]}),_0x43725f['kIdQq'](_0x474d51,'god',_0x43725f[_0x101c59(0x535)],_0x43725f['fahzi'],['i32',_0x43725f[_0x101c59(0x3a8)]],_0x304f51,_0x2f85f0,!!_0x26608a[_0x101c59(0x391)]),_0x3b05c1(_0x101c59(0x373)+_0x101c59(0x1fe),_0x43725f[_0x101c59(0x62e)],_0x101c59(0x2f1),[_0x43725f['ZZkDm']],_0xddd925,_0x1885c4,!!_0x4c323f[_0x101c59(0x373)+_0x101c59(0x1fe)]),_0x44b9e4(_0x101c59(0x187)+_0x101c59(0x5ad),_0x101c59(0x253)+_0x101c59(0x5f3),_0x101c59(0x549)+_0x101c59(0x1f6)+'ning',[_0x43725f[_0x101c59(0x3a8)],_0x43725f['ZZkDm']],_0x1b6a03,(_0x2dc0f8,_0x4d4763)=>{var _0x308670=_0x101c59;_0x38b4e3(_0x78cdea,_0x4d4763,_0x13a816,_0x5e842c[_0x308670(0x235)]);},!![]),_0x3fcf0b(_0x101c59(0x663)+'ve',_0x43725f['XhbSp'],_0x43725f['pRIEy'],[_0x43725f[_0x101c59(0x3a8)]],'i32',(_0xbe4907,_0x8a1341)=>{var _0x1d0464=_0x101c59;_0x5720a8(_0x24dd90,_0x8a1341,_0x5a0d12,_0x5e842c[_0x1d0464(0x175)]);},!![]);}function _0x37f2a0(_0x2347d1){var _0x3af4dd=_0x47ada5,_0x2444c7=(_0x3af4dd(0x57b)+'|11|6'+_0x3af4dd(0x5ac)+'4|13|'+'3|22|'+_0x3af4dd(0x17c)+_0x3af4dd(0x43e)+_0x3af4dd(0x3ee)+'20|5|'+'21|17'+'|18|4'+_0x3af4dd(0x54f)+'6')[_0x3af4dd(0x4e0)]('|'),_0x5d6783=-0x23d1+0x3*0x81+0x224e;while(!![]){switch(_0x2444c7[_0x5d6783++]){case'0':var _0x27e045=_0x358540[_0x3af4dd(0x3a9)](Number,_0x1ff9ee['chSiz'+'e'])||0x1daf+0x1d1b+-0x3ac9;continue;case'1':_0x4bc8ee[_0x3af4dd(0x550)+'o'](_0x358540[_0x3af4dd(0x21c)](_0x54937a,_0xdf95e9)+_0x39c279,_0x408dea);continue;case'2':_0x4bc8ee[_0x3af4dd(0x1c4)+_0x3af4dd(0x1ce)]();continue;case'3':_0x4bc8ee[_0x3af4dd(0x2ff)+_0x3af4dd(0x32f)]=0x1561+-0x34*-0x16+-0xb*0x259;continue;case'4':_0x4bc8ee['arc'](_0x54937a,_0x408dea,_0x358540['wyIhG'](0x23fd+-0x8b*-0x20+-0x355c+0.6000000000000001,_0x27e045),-0x1418*0x1+-0x682+0x1a9a,Math['PI']*(-0x16*-0xb+0x1775+-0x1865));continue;case'5':_0x4bc8ee['moveT'+'o'](_0x54937a,_0x408dea+_0xdf95e9);continue;case'6':_0x4bc8ee['strok'+_0x3af4dd(0x359)+'e']=_0x383e0c;continue;case'7':var _0x383e0c=/^#[0-9a-f]{6}$/i[_0x3af4dd(0x279)](_0x1ff9ee['chCol'+'or'])?_0x1ff9ee[_0x3af4dd(0x4fa)+'or']:'#ff6b'+'9d';continue;case'8':var _0x54937a=_0x2347d1[_0x3af4dd(0x2cd)]/(-0x1*0xd72+0x24d4+-0x5d8*0x4),_0x408dea=_0x2347d1['heigh'+'t']/(-0x9d3*-0x2+-0xb*0x1a5+-0x18d);continue;case'9':_0x4bc8ee['moveT'+'o'](_0x54937a,_0x358540['fBWiR'](_0x408dea,_0xdf95e9)-_0x39c279);continue;case'10':_0x4bc8ee['moveT'+'o'](_0x358540['fBWiR'](_0x358540[_0x3af4dd(0x5ea)](_0x54937a,_0xdf95e9),_0x39c279),_0x408dea);continue;case'11':_0x4bc8ee[_0x3af4dd(0x604)]();continue;case'12':_0x4bc8ee['fillS'+_0x3af4dd(0x41f)]=_0x383e0c;continue;case'13':_0x4bc8ee[_0x3af4dd(0x2ff)+_0x3af4dd(0x416)+'r']=_0x383e0c;continue;case'14':_0x4bc8ee['lineW'+_0x3af4dd(0x4e7)]=Math[_0x3af4dd(0x3bb)](0x1a27*0x1+-0xc4a+0x4*-0x377+0.5,_0x358540['vZIbw'](-0x10ba*-0x2+-0x1646+-0xb2c,_0x27e045));continue;case'15':_0x4bc8ee['fill']();continue;case'16':_0x4bc8ee[_0x3af4dd(0x464)+'re']();continue;case'17':_0x4bc8ee[_0x3af4dd(0x1eb)+'e']();continue;case'18':_0x4bc8ee[_0x3af4dd(0x1c4)+'Path']();continue;case'19':_0x4bc8ee[_0x3af4dd(0x5ec)+'o'](_0x54937a+_0xdf95e9,_0x408dea);continue;case'20':_0x4bc8ee['lineT'+'o'](_0x54937a,_0x408dea-_0xdf95e9);continue;case'21':_0x4bc8ee[_0x3af4dd(0x550)+'o'](_0x54937a,_0x358540[_0x3af4dd(0x600)](_0x408dea,_0xdf95e9)+_0x39c279);continue;case'22':var _0xdf95e9=(-0x1789+0x90e+0xe81)*_0x27e045,_0x39c279=_0x358540['vZIbw'](-0x4*0x36+-0x1*0x5fb+0xf*0x75,_0x27e045);continue;case'23':_0x4bc8ee[_0x3af4dd(0x550)+'o'](_0x358540[_0x3af4dd(0x5ea)](_0x54937a,_0xdf95e9),_0x408dea);continue;}break;}}function _0x9fd161(_0x579f08){var _0x45ee9b=_0x47ada5;_0x4bc8ee[_0x45ee9b(0x604)](),_0x4bc8ee[_0x45ee9b(0x5d7)]='600\x201'+_0x45ee9b(0x16c)+_0x45ee9b(0x3e6)+'ospac'+'e,mon'+'ospac'+'e',_0x4bc8ee[_0x45ee9b(0x584)+_0x45ee9b(0x346)]='left',_0x4bc8ee['textB'+_0x45ee9b(0x43b)+'ne']=_0x43725f[_0x45ee9b(0x660)];var _0x9573dc=0xfd6+0x1d87*-0x1+0xddd,_0x4dc060=0x12b7+-0x287*-0x7+0x2*-0x122e,_0xd0847f=(_0x4abd90,_0x1a5a60)=>{var _0x454ccb=_0x45ee9b;_0x4bc8ee[_0x454ccb(0x52b)+'tyle']=_0x1a5a60||'rgba('+_0x454ccb(0x525)+_0x454ccb(0x5e0)+_0x454ccb(0x51c)+'5)',_0x4bc8ee['fillT'+'ext'](_0x4abd90,_0x4dc060,_0x9573dc),_0x9573dc+=-0x1*0x168e+0x7dc*0x4+-0x8d2;};_0x43725f['Ewzwn'](_0xd0847f,_0x43725f['ghZoj'],'#ff6b'+'9d');if(_0x1ff9ee['fps'])_0xd0847f(_0x4eb7af+'\x20FPS');if(!_0x27a6a5[_0x45ee9b(0x58e)+_0x45ee9b(0x48e)])_0x43725f['Ewzwn'](_0xd0847f,_0x45ee9b(0x60b)+_0x45ee9b(0x482)+_0x45ee9b(0x52a)+'e…','rgba('+'255,1'+'80,19'+'0,0.6'+')');_0x4bc8ee['resto'+'re']();}function _0x16c86c(){var _0x501223=_0x47ada5;requestAnimationFrame(_0x16c86c),_0x56d99a++;var _0x13fd3d=performance[_0x501223(0x66b)]();_0x358540['Ccnfx'](_0x13fd3d-_0x29af7f,-0x1*-0xb11+-0xe98+0x57b*0x1)&&(_0x4eb7af=Math['round'](_0x358540[_0x501223(0x4d4)](_0x358540['vZIbw'](_0x56d99a,-0x16fa+0x2*0xbd1+0x20*0x1a),_0x13fd3d-_0x29af7f)),_0x56d99a=-0x1*0xc4f+-0xa9f+-0x1*-0x16ee,_0x29af7f=_0x13fd3d);_0x474b75(),_0x4a100b(),_0x4bc8ee[_0x501223(0x1d3)+_0x501223(0x4ec)](0x25cd+-0x60a+0xad*-0x2f,0xf58+0x4b9*0x8+-0xa0*0x55,_0x1ef299['w'],_0x1ef299['h']);var _0x21cbd7={'left':0x0,'top':0x0,'right':_0x1ef299['w'],'bottom':_0x1ef299['h'],'width':_0x1ef299['w'],'height':_0x1ef299['h']};if(_0x1ff9ee[_0x501223(0x418)+_0x501223(0x5b9)])_0x358540[_0x501223(0x3a9)](_0x37f2a0,_0x21cbd7);if(_0x1ff9ee['keyst'+_0x501223(0x52d)])_0x358540[_0x501223(0x64a)](_0xf80154,_0x21cbd7);_0x358540['zIZRf'](_0x9fd161,_0x21cbd7);}var _0xc0986b=document[_0x47ada5(0x27a)+_0x47ada5(0x23f)+_0x47ada5(0x4c6)](_0x358540[_0x47ada5(0x2b5)]);_0xc0986b['id']=_0x47ada5(0x2a0)+'a-ui',_0xc0986b['style'][_0x47ada5(0x27b)+'xt']=_0x358540[_0x47ada5(0x506)];var _0x3d91e5=_0xc0986b['attac'+'hShad'+'ow']({'mode':'open'});(document['body']||document[_0x47ada5(0x2b8)+_0x47ada5(0x46f)+'ement'])[_0x47ada5(0x4f0)+'dChil'+'d'](_0xc0986b);var _0x1a2835=![],_0x54a03c={};try{_0x54a03c=JSON[_0x47ada5(0x349)](localStorage[_0x47ada5(0x3d6)+'em'](_0x47ada5(0x2a0)+_0x47ada5(0x17f)+_0x47ada5(0x379)+'v1')||'{}');}catch(_0x54e030){}function _0x112ba1(){var _0x37ef5d=_0x47ada5;if('CbNRN'===_0x37ef5d(0x1b4))_0x38ef3b(_0x36a9d8,_0x4960e0,_0x226002,'movem'+_0x37ef5d(0x211));else try{localStorage[_0x37ef5d(0x651)+'em'](_0x358540[_0x37ef5d(0x185)],JSON[_0x37ef5d(0x5c6)+'gify'](_0x54a03c));}catch(_0x2e90a5){}}function _0x3de1d4(_0x274c85,_0x11758b){var _0x581f23=_0x47ada5,_0x4f7901=document['creat'+_0x581f23(0x23f)+'ent'](_0x43725f['MyNYO']);return _0x4f7901[_0x581f23(0x32c)]=_0x43725f['MyNYO'],_0x4f7901['class'+_0x581f23(0x505)]='sk-sw'+'itch',_0x4f7901['setAt'+'tribu'+'te'](_0x43725f['ilEfx'],'switc'+'h'),_0x4f7901[_0x581f23(0x666)+_0x581f23(0x607)+'te'](_0x43725f[_0x581f23(0x291)],_0x43725f[_0x581f23(0x4fb)](String,!!_0x274c85)),_0x4f7901[_0x581f23(0x54d)+'ck']=_0x5e5128=>{var _0x23ed45=_0x581f23;_0x5e5128[_0x23ed45(0x421)+_0x23ed45(0x45a)+'ation']();var _0x5b354a=_0x43725f['Ozbvr'](_0x4f7901['getAt'+_0x23ed45(0x607)+'te'](_0x23ed45(0x244)+_0x23ed45(0x180)+'ed'),_0x23ed45(0x4ab));_0x4f7901['setAt'+'tribu'+'te'](_0x43725f['mmxFc'],String(_0x5b354a)),_0x43725f['VxydP'](_0x11758b,_0x5b354a);},_0x4f7901;}function _0x195ea3(_0x3285f2,_0x2605c7,_0x346b6a,_0x8ef08e,_0x3d736d){var _0x25cedd=_0x47ada5,_0x4e67af={'VWRER':_0x25cedd(0x5d0),'JeBZc':function(_0x4d0549,_0x1a0c61){return _0x4d0549===_0x1a0c61;},'PzjRI':function(_0xe676c9,_0x5ac37d){return _0x43725f['lNliz'](_0xe676c9,_0x5ac37d);},'xIBLz':function(_0x2ee0f2,_0x43976e){var _0x334343=_0x25cedd;return _0x43725f[_0x334343(0x435)](_0x2ee0f2,_0x43976e);},'KExjw':function(_0x5b49bb){return _0x5b49bb();},'praLx':function(_0x40d519,_0x3e0a89){return _0x43725f['VxydP'](_0x40d519,_0x3e0a89);}};if('eljPG'===_0x25cedd(0x683))_0x4f41d2['enabl'+'ed']=!!_0x320aec;else{var _0x37bb46=document[_0x25cedd(0x27a)+_0x25cedd(0x23f)+'ent'](_0x25cedd(0x515));_0x37bb46['class'+'Name']=_0x25cedd(0x1c6)+_0x25cedd(0x25d);var _0x485447=document['creat'+_0x25cedd(0x23f)+_0x25cedd(0x4c6)](_0x43725f['PjSQy']);_0x485447['type']=_0x43725f['Krmnp'],_0x485447[_0x25cedd(0x1f5)+'Name']=_0x43725f[_0x25cedd(0x38a)],_0x485447[_0x25cedd(0x22a)]=_0x2605c7,_0x485447['max']=_0x346b6a,_0x485447[_0x25cedd(0x165)]=_0x8ef08e,_0x485447['value']=_0x3285f2;var _0x19574f=document[_0x25cedd(0x27a)+_0x25cedd(0x23f)+_0x25cedd(0x4c6)]('span');_0x19574f['class'+_0x25cedd(0x505)]=_0x25cedd(0x2b4)+'l',_0x19574f['textC'+'onten'+'t']=_0x43725f[_0x25cedd(0x4fb)](String,_0x3285f2);var _0x1994ce=()=>{var _0x3d3a36=_0x25cedd;if(_0x4e67af[_0x3d3a36(0x4e3)]('UAHWe',_0x3d3a36(0x159))){if(!_0x342c2f['__sak'+_0x3d3a36(0x4d5)])_0xd2a9a5['delet'+'e'](_0x4e67af['VWRER']+(_0x4581ee[_0x3d3a36(0x19d)+'n']+(0x1309*0x2+0x90d+0x25*-0x146)));}else _0x19574f['textC'+'onten'+'t']=String(_0x485447[_0x3d3a36(0x1e7)]),_0x37bb46['style']['setPr'+'opert'+'y']('--p',_0x4e67af[_0x3d3a36(0x662)]((_0x485447['value']-_0x2605c7)/_0x4e67af[_0x3d3a36(0x5dc)](_0x346b6a,_0x2605c7)*(-0x2*-0x7ec+0x1cc5+-0x2c39),'%'));};return _0x485447[_0x25cedd(0x284)+'ut']=()=>{var _0x2c95b3=_0x25cedd;_0x4e67af['KExjw'](_0x1994ce),_0x3d736d(_0x4e67af['praLx'](Number,_0x485447[_0x2c95b3(0x1e7)]));},_0x1994ce(),_0x37bb46['appen'+'d'](_0x485447,_0x19574f),_0x37bb46;}}function _0x311972(_0x52a37e,_0x1efa21){var _0x4a0812=_0x47ada5,_0xf8b104=document['creat'+'eElem'+_0x4a0812(0x4c6)](_0x4a0812(0x2ba));return _0xf8b104[_0x4a0812(0x32c)]=_0x358540[_0x4a0812(0x626)],_0xf8b104[_0x4a0812(0x1f5)+'Name']=_0x358540['DWgxr'],_0xf8b104[_0x4a0812(0x1e7)]=/^#[0-9a-f]{6}$/i[_0x4a0812(0x279)](_0x52a37e)?_0x52a37e:_0x358540[_0x4a0812(0x333)],_0xf8b104['oninp'+'ut']=()=>_0x1efa21(_0xf8b104[_0x4a0812(0x1e7)]),_0xf8b104;}function _0xaa20d4(_0x4e9f6a,_0x5ae920,_0x2afc38){var _0x4b4779=_0x47ada5,_0x34df5f=document[_0x4b4779(0x27a)+'eElem'+'ent']('selec'+'t');_0x34df5f['class'+_0x4b4779(0x505)]=_0x4b4779(0x650)+_0x4b4779(0x697);for(var [_0x429d44,_0x5df836]of _0x5ae920){if(_0x43725f[_0x4b4779(0x5cf)]('crTCx',_0x4b4779(0x179))){var _0x194ba7=document[_0x4b4779(0x27a)+'eElem'+_0x4b4779(0x4c6)](_0x4b4779(0x2da)+'n');_0x194ba7['value']=_0x429d44,_0x194ba7[_0x4b4779(0x160)+_0x4b4779(0x3f0)+'t']=_0x5df836,_0x34df5f['appen'+_0x4b4779(0x617)+'d'](_0x194ba7);}else _0x39d29e[_0x4b4779(0x171)+'moExp']=_0x249aa6,_0x3b4b2d();}return _0x34df5f['value']=_0x4e9f6a,_0x34df5f[_0x4b4779(0x329)+_0x4b4779(0x25d)]=()=>_0x2afc38(_0x34df5f['value']),_0x34df5f;}function _0x960ccb(_0x1ee0a9,_0x5b0ed5){var _0x27d5a7=_0x47ada5,_0x143b13=document['creat'+_0x27d5a7(0x23f)+_0x27d5a7(0x4c6)]('butto'+'n');return _0x143b13['type']=_0x358540['pklOJ'],_0x143b13[_0x27d5a7(0x1f5)+'Name']='sk-bt'+'n',_0x143b13[_0x27d5a7(0x160)+_0x27d5a7(0x3f0)+'t']=_0x1ee0a9,_0x143b13[_0x27d5a7(0x54d)+'ck']=_0xfd50b5=>{var _0x5595f3=_0x27d5a7;_0xfd50b5[_0x5595f3(0x421)+'ropag'+_0x5595f3(0x3ad)](),_0x5b0ed5();},_0x143b13;}function _0x32b30c(_0x191504,_0x35b61b,_0x108c4d){var _0x266b1a=_0x47ada5,_0x558762=document[_0x266b1a(0x27a)+_0x266b1a(0x23f)+'ent'](_0x266b1a(0x515));_0x558762[_0x266b1a(0x1f5)+_0x266b1a(0x505)]='sk-ct'+'l';var _0x1e548e=document[_0x266b1a(0x27a)+_0x266b1a(0x23f)+_0x266b1a(0x4c6)](_0x358540[_0x266b1a(0x5fb)]);_0x1e548e[_0x266b1a(0x1f5)+_0x266b1a(0x505)]=_0x266b1a(0x1fd)+'bel',_0x1e548e[_0x266b1a(0x160)+_0x266b1a(0x3f0)+'t']=_0x191504;if(_0x35b61b){if(_0x266b1a(0x623)===_0x266b1a(0x623)){var _0x53b23b=document['creat'+_0x266b1a(0x23f)+_0x266b1a(0x4c6)](_0x358540['rIjAK']);_0x53b23b[_0x266b1a(0x1f5)+_0x266b1a(0x505)]='sk-hi'+'nt',_0x53b23b[_0x266b1a(0x160)+'onten'+'t']=_0x35b61b,_0x1e548e['appen'+_0x266b1a(0x617)+'d'](_0x53b23b);}else return-0x103c*-0x1+-0x1451+0x5f*0xb;}return _0x558762[_0x266b1a(0x4f0)+'d'](_0x1e548e,_0x108c4d),_0x558762;}function _0xe20762(_0x230744,_0x4f4e35){var _0x21127e=_0x47ada5;if('xIvAO'===_0x21127e(0x2bb)){var _0x3efc4a=document[_0x21127e(0x27a)+_0x21127e(0x23f)+_0x21127e(0x4c6)]('div');return _0x3efc4a['class'+_0x21127e(0x505)]=_0x43725f[_0x21127e(0x39e)]('sk-no'+'te',_0x4f4e35?_0x43725f[_0x21127e(0x285)]:''),_0x3efc4a[_0x21127e(0x160)+_0x21127e(0x3f0)+'t']=_0x230744,_0x3efc4a;}else{var _0x13d523=_0x4e10c0[_0x21127e(0x659)+_0x21127e(0x32b)+'x']({'typeName':_0x5ddc82,'methodName':_0x484c99,'params':_0x850e3e,'returnType':_0x4ac85a},_0x3fa0c6);return _0x13d523[_0x21127e(0x589)+'ed']=_0x23f676!==![],_0x5f3324[_0x4fb01a]=_0x13d523,_0x4253d0['hooks'+_0x21127e(0x26f)]++,_0x13d523;}}function _0x549915(_0x57e032,_0x39d81f,_0x1acdd3,_0x41897a,_0x35b742){var _0x2ae6d1=_0x47ada5,_0x2aa2b3=('2|6|1'+_0x2ae6d1(0x563)+_0x2ae6d1(0x1de)+_0x2ae6d1(0x546)+'10|3|'+'0|8|1'+'1')[_0x2ae6d1(0x4e0)]('|'),_0x59b26c=0xb*-0x311+0x5*-0x728+0x4583;while(!![]){switch(_0x2aa2b3[_0x59b26c++]){case'0':_0x2e3d5b['appen'+_0x2ae6d1(0x617)+'d'](_0x436678);continue;case'1':_0x4bc979['textC'+_0x2ae6d1(0x3f0)+'t']=_0x57e032;continue;case'2':var _0x2739d3={'eXTWp':function(_0x2bba18,_0x1eb3be){return _0x2bba18(_0x1eb3be);}};continue;case'3':if(_0x41897a){var _0x23fc89=_0x43725f[_0x2ae6d1(0x4f1)](_0x3de1d4,_0x1acdd3,_0x53dc2f=>{var _0x3603cd=_0x2ae6d1;_0x2e3d5b['class'+_0x3603cd(0x448)][_0x3603cd(0x22e)+'e']('on',_0x53dc2f),_0x2739d3[_0x3603cd(0x37b)](_0x41897a,_0x53dc2f);});_0x436678[_0x2ae6d1(0x4f0)+'d'](_0x4406ae,_0x23fc89);}else _0x436678[_0x2ae6d1(0x4f0)+'dChil'+'d'](_0x4406ae);continue;case'4':var _0x4bc979=document[_0x2ae6d1(0x27a)+_0x2ae6d1(0x23f)+_0x2ae6d1(0x4c6)](_0x43725f[_0x2ae6d1(0x4ed)]);continue;case'5':_0x4406ae['class'+_0x2ae6d1(0x505)]=_0x2ae6d1(0x3d1)+_0x2ae6d1(0x58f)+_0x2ae6d1(0x25a);continue;case'6':var _0x2e3d5b=document[_0x2ae6d1(0x27a)+_0x2ae6d1(0x23f)+_0x2ae6d1(0x4c6)](_0x43725f[_0x2ae6d1(0x46a)]);continue;case'7':_0x436678[_0x2ae6d1(0x1f5)+'Name']=_0x2ae6d1(0x3d1)+'rd-he'+'ad';continue;case'8':if(_0x35b742&&_0x35b742['lengt'+'h']){var _0x4e16ac=document[_0x2ae6d1(0x27a)+_0x2ae6d1(0x23f)+_0x2ae6d1(0x4c6)](_0x43725f[_0x2ae6d1(0x46a)]);_0x4e16ac[_0x2ae6d1(0x1f5)+'Name']=_0x43725f['Aawtp'];var _0x290eed=document[_0x2ae6d1(0x27a)+'eElem'+'ent'](_0x2ae6d1(0x515));_0x290eed[_0x2ae6d1(0x1f5)+'Name']=_0x43725f[_0x2ae6d1(0x21b)],_0x290eed[_0x2ae6d1(0x160)+_0x2ae6d1(0x3f0)+'t']=_0x39d81f,_0x4e16ac[_0x2ae6d1(0x4f0)+_0x2ae6d1(0x617)+'d'](_0x290eed);for(var _0x3a39e6 of _0x35b742)_0x4e16ac[_0x2ae6d1(0x4f0)+_0x2ae6d1(0x617)+'d'](_0x3a39e6);_0x2e3d5b[_0x2ae6d1(0x4f0)+'dChil'+'d'](_0x4e16ac);}continue;case'9':var _0x436678=document['creat'+'eElem'+_0x2ae6d1(0x4c6)]('div');continue;case'10':_0x4406ae[_0x2ae6d1(0x4f0)+'dChil'+'d'](_0x4bc979);continue;case'11':return _0x2e3d5b;case'12':var _0x4406ae=document['creat'+'eElem'+'ent'](_0x2ae6d1(0x515));continue;case'13':_0x2e3d5b[_0x2ae6d1(0x1f5)+_0x2ae6d1(0x505)]=_0x43725f['lNliz']('sk-ca'+'rd',_0x1acdd3?_0x2ae6d1(0x4e8):'');continue;}break;}}var _0x2ca743=[{'id':_0x47ada5(0x378)+'t','label':_0x47ada5(0x4f5)+'t'},{'id':'move','label':_0x358540[_0x47ada5(0x29c)]},{'id':_0x358540['GQjyR'],'label':_0x47ada5(0x466)+'l'},{'id':_0x47ada5(0x2bf),'label':_0x358540[_0x47ada5(0x1c9)]},{'id':_0x47ada5(0x39a),'label':_0x358540[_0x47ada5(0x29b)]}];function _0x2d5dd5(){var _0x228b26=_0x47ada5,_0x30af14=_0x27a6a5['safeM'+'ode']?'SAFE\x20'+_0x228b26(0x1f9)+'—\x20ove'+_0x228b26(0x456)+_0x228b26(0x5fa)+_0x228b26(0x22f)+_0x228b26(0x2c9)+'(relo'+_0x228b26(0x508)+_0x228b26(0x163)+')':_0x27a6a5[_0x228b26(0x258)]?_0x43725f[_0x228b26(0x55e)](_0x43725f[_0x228b26(0x55e)](_0x43725f['AHlbq'](_0x43725f['TEuGZ'](_0x43725f['wciNl'](_0x43725f['wciNl'](_0x43725f[_0x228b26(0x3cc)],_0x27a6a5[_0x228b26(0x371)+'Ok']),'/'),_0x27a6a5['hooks'+_0x228b26(0x26f)])+_0x43725f['eTykA']+('\x20|\x20ga'+'me\x20')+(_0x27a6a5[_0x228b26(0x58e)+_0x228b26(0x48e)]?_0x43725f['OhXok']:_0x43725f[_0x228b26(0x30f)]),_0x43725f[_0x228b26(0x60e)]),_0x27a6a5['shoot'+_0x228b26(0x2b1)]?_0x43725f['CivYj']:_0x43725f['FItoF']),_0x228b26(0x1e8)+'vemen'+'t\x20')+(_0x27a6a5[_0x228b26(0x2aa)+'ents']?_0x228b26(0x341):_0x43725f[_0x228b26(0x67b)]):'UWMK\x20'+_0x228b26(0x5e5)+_0x228b26(0x342)+_0x228b26(0x1ee)+'ay\x20on'+'ly\x20(r'+'einst'+_0x228b26(0x53a)+_0x228b26(0x5df)+'erscr'+'ipt)';if(_0x27a6a5[_0x228b26(0x4e5)+_0x228b26(0x319)])_0x30af14+=_0x43725f[_0x228b26(0x477)]('\x20|\x20ER'+_0x228b26(0x2f2),_0x27a6a5[_0x228b26(0x4e5)+_0x228b26(0x319)]);return _0x43725f['EhQSq'](_0x549915,_0x228b26(0x511)+'s',_0x30af14,_0x27a6a5[_0x228b26(0x258)],null,[_0x43725f[_0x228b26(0x68c)](_0x32b30c,_0x43725f[_0x228b26(0x357)],_0x43725f['YpDTI'],_0x960ccb('Apply',()=>{var _0xf199e9=_0x228b26;try{if(_0x240aad)_0x240aad[_0xf199e9(0x358)]('Unity'+'Engin'+'e.App'+'licat'+_0xf199e9(0x1bd),_0xf199e9(0x4c2)+_0xf199e9(0x19f)+_0xf199e9(0x2a8)+_0xf199e9(0x38c),[-0xe9b+-0x69*0x2d+0x2200]);}catch(_0x36fe76){}}))]);}function _0x2b2ce3(_0x393cc6){var _0x1e6803=_0x47ada5,_0x3a2704={'dKJbl':function(_0x2cb847){return _0x2cb847();},'fMYge':function(_0x3cc3d4){return _0x3cc3d4();},'EuCXL':function(_0x216cf6,_0x1bad3b,_0x1be5b9){return _0x216cf6(_0x1bad3b,_0x1be5b9);},'IhSZM':'noRec'+_0x1e6803(0x1fe),'nMrit':function(_0x50fdf4,_0x5e9de9){return _0x50fdf4!==_0x5e9de9;},'TAHxv':_0x43725f['MyNYO'],'RgaZW':function(_0x3fd16a,_0x5b3720){var _0xec1a3f=_0x1e6803;return _0x43725f[_0xec1a3f(0x2bd)](_0x3fd16a,_0x5b3720);},'cMykj':_0x1e6803(0x437)+_0x1e6803(0x2be),'UATiV':function(_0xbd869){return _0xbd869();},'ofmRX':function(_0x38dfaa,_0x1aa430,_0x56c41c){var _0x1105a2=_0x1e6803;return _0x43725f[_0x1105a2(0x2e7)](_0x38dfaa,_0x1aa430,_0x56c41c);}};if(_0x43725f[_0x1e6803(0x5e3)](_0x43725f[_0x1e6803(0x5c1)],_0x43725f['daRCE']))_0x2fd604[_0x1e6803(0x696)+_0x1e6803(0x236)+_0x1e6803(0x64c)](),_0x3a2704[_0x1e6803(0x1ef)](_0x224e19);else{if(_0x43725f[_0x1e6803(0x55d)](_0x393cc6,_0x43725f[_0x1e6803(0x1e0)]))return[_0x2d5dd5(),_0x549915(_0x1e6803(0x2ed)+_0x1e6803(0x5da),_0x43725f[_0x1e6803(0x164)],_0x1ff9ee['god'],_0x1bb725=>{var _0x57c1c0=_0x1e6803;_0x1ff9ee['god']=_0x1bb725,_0x3a2704[_0x57c1c0(0x3f8)](_0x35bbad),_0x2b94f7('god',_0x1bb725);},[]),_0x43725f['EhQSq'](_0x549915,_0x1e6803(0x222)+_0x1e6803(0x2dc),_0x1e6803(0x60d)+_0x1e6803(0x433)+_0x1e6803(0x28b)+_0x1e6803(0x184)+'ick\x20s'+_0x1e6803(0x36f)+'\x20reco'+'il\x20sp'+'rings'+_0x1e6803(0x1f1)+_0x1e6803(0x686)+_0x1e6803(0x225),_0x1ff9ee[_0x1e6803(0x373)+'oil'],_0x347f97=>{var _0x559f17=_0x1e6803;_0x1ff9ee['noRec'+'oil']=_0x347f97,_0x3a2704['dKJbl'](_0x35bbad),_0x3a2704[_0x559f17(0x67e)](_0x2b94f7,_0x3a2704['IhSZM'],_0x347f97);},[]),_0x549915('No\x20Sp'+'read','Zeroe'+_0x1e6803(0x207)+'ead\x20a'+_0x1e6803(0x4b5)+_0x1e6803(0x606)+_0x1e6803(0x39b)+'cy\x20on'+'\x20your'+'\x20weap'+'on\x20ev'+'ery\x202'+_0x1e6803(0x1c8),_0x1ff9ee['noSpr'+'ead'],_0x4eb2be=>{var _0x13665c=_0x1e6803;_0x1ff9ee['noSpr'+'ead']=_0x4eb2be,_0x43725f[_0x13665c(0x496)](_0x35bbad);},[]),_0x43725f[_0x1e6803(0x219)](_0x549915,_0x43725f[_0x1e6803(0x427)],_0x1e6803(0x658)+_0x1e6803(0x5b2)+'rtide'+_0x1e6803(0x3a5)+_0x1e6803(0x2ae)+'eRate'+_0x1e6803(0x3d8)+_0x1e6803(0x229)+'erver'+_0x1e6803(0x1f7)+_0x1e6803(0x28f)+_0x1e6803(0x344)+_0x1e6803(0x4ff)+'s.',_0x1ff9ee['rapid'+_0x1e6803(0x1b6)],_0x2b3d93=>{var _0x7bcc9f=_0x1e6803;_0x1ff9ee[_0x7bcc9f(0x676)+'Exp']=_0x2b3d93,_0x35bbad();},[]),_0x549915(_0x43725f['ljyBi'],_0x43725f['CbLMy'],_0x1ff9ee[_0x1e6803(0x303)+_0x1e6803(0x234)],_0x53c5e6=>{var _0x4f0197=_0x1e6803;_0x1ff9ee[_0x4f0197(0x303)+_0x4f0197(0x234)]=_0x53c5e6,_0x35bbad();},[_0x32b30c(_0x1e6803(0x602)+_0x1e6803(0x58c)+'ue',null,_0x195ea3(_0x1ff9ee[_0x1e6803(0x303)+'eValu'+'e'],-0x1*-0x2+-0x776+0x77e,-0x1*0x1b72+0x2268+-0x502,-0xefe+0x1130+-0x22d,_0x383a49=>{var _0x8fe5bf=_0x1e6803;_0x1ff9ee['damag'+_0x8fe5bf(0x1c1)+'e']=_0x383a49,_0x43725f['iahtO'](_0x35bbad);}))]),_0x43725f[_0x1e6803(0x463)](_0x549915,_0x43725f[_0x1e6803(0x223)],'Refil'+_0x1e6803(0x20f)+_0x1e6803(0x5f8)+_0x1e6803(0x490)+_0x1e6803(0x510)+'ed\x20am'+_0x1e6803(0x395)+'\x20999\x20'+'every'+'\x20200m'+'s.',_0x1ff9ee[_0x1e6803(0x171)+_0x1e6803(0x4f2)],_0x325aad=>{var _0x36e30e=_0x1e6803;_0x1ff9ee[_0x36e30e(0x171)+'moExp']=_0x325aad,_0x35bbad();},[_0xe20762(_0x1e6803(0x4f7)+_0x1e6803(0x2cf)+'\x20stil'+_0x1e6803(0x564)+_0x1e6803(0x3ca)+'he\x20de'+'creme'+_0x1e6803(0x523)+'ppens'+'\x20else'+_0x1e6803(0x382)+'.')])];if(_0x393cc6===_0x1e6803(0x1ff))return[_0x549915('Speed',_0x1e6803(0x658)+_0x1e6803(0x286)+'\x20four'+_0x1e6803(0x283)+'ment\x20'+_0x1e6803(0x63a)+'\x20limi'+_0x1e6803(0x54c)+'us\x20ac'+_0x1e6803(0x585)+_0x1e6803(0x3ad)+'.',_0x1ff9ee['speed'+_0x1e6803(0x440)]!==0x25f9*-0x1+0x54e*-0x3+0x3647,null,[_0x43725f[_0x1e6803(0x690)](_0x32b30c,_0x1e6803(0x5a2)+'\x20%',_0x43725f['WbWDw'],_0x195ea3(_0x1ff9ee[_0x1e6803(0x63a)+_0x1e6803(0x440)],0x574+0x129*-0x8+0x1*0x406,0x2*-0xf04+-0x1e0c+0xc4*0x50,0xd5+-0x265*-0x4+-0x1*0xa64,_0x2f38ff=>{var _0x4c6f8a=_0x1e6803;_0x1ff9ee[_0x4c6f8a(0x63a)+_0x4c6f8a(0x440)]=_0x2f38ff,_0x35bbad();}))]),_0x549915(_0x1e6803(0x35a)+'/\x20Gra'+'vity',_0x1e6803(0x658)+_0x1e6803(0x562)+'ement'+'.jump'+_0x1e6803(0x1b5)+_0x1e6803(0x1a3)+'both\x20'+'gravi'+'ty\x20va'+'lues.',_0x1ff9ee['jumpP'+'ct']!==0x17*0xb5+0x1383+-0x2362||_0x43725f[_0x1e6803(0x3a1)](_0x1ff9ee['gravi'+_0x1e6803(0x189)],0x491*0x1+0x4c4*0x8+-0x11*0x27d),null,[_0x43725f['tCUmz'](_0x32b30c,_0x43725f[_0x1e6803(0x48c)],null,_0x195ea3(_0x1ff9ee[_0x1e6803(0x63c)+'ct'],0x1b7f+0x254f+-0x676*0xa,-0x110*-0x7+0x17*-0x26+-0x2da,0xb2d*-0x3+0x222a*0x1+0x4f*-0x2,_0x4ff3f3=>{var _0x317681=_0x1e6803,_0x15406f={'uGfvp':function(_0x26e90e,_0x1c26f4){return _0x43725f['uMdIv'](_0x26e90e,_0x1c26f4);}};if(_0x43725f['oubew']==='YBrvh')_0x1ff9ee[_0x317681(0x63c)+'ct']=_0x4ff3f3,_0x43725f[_0x317681(0x496)](_0x35bbad);else{var _0x4276fe=_0x4a0c31[_0x317681(0x611)+_0x317681(0x544)+_0x317681(0x63e)+'o']||-0x1075*-0x1+0x1faf+-0x3023*0x1,_0x3d49dd=_0x458b40[_0x317681(0x565)+'Width'],_0x23a0ca=_0x3e841c[_0x317681(0x565)+_0x317681(0x2af)+'t'];if(_0x3d49dd===_0x3f7467['w']&&_0x23a0ca===_0x56a4c4['h']&&_0x4276fe===_0x1bb8a7['dpr'])return;_0x1ff9b9['w']=_0x3d49dd,_0x1d8cc1['h']=_0x23a0ca,_0x12e326['dpr']=_0x4276fe,_0x23c5da[_0x317681(0x2cd)]=_0x5db6a2[_0x317681(0x238)](_0x15406f[_0x317681(0x520)](_0x3d49dd,_0x4276fe)),_0x594d5b[_0x317681(0x497)+'t']=_0x48985e[_0x317681(0x238)](_0x23a0ca*_0x4276fe),_0x30bc24[_0x317681(0x4c0)+_0x317681(0x255)+'rm'](_0x4276fe,-0xdc5+0x79b+-0x6*-0x107,-0x89b*-0x3+-0x1266+-0xd3*0x9,_0x4276fe,0x248c+-0x1*-0xddc+-0x3268,0x47*0x2+-0x121*0x11+0x12a3);}})),_0x43725f[_0x1e6803(0x276)](_0x32b30c,_0x1e6803(0x61f)+'ty\x20%',_0x1e6803(0x3aa)+'\x20=\x20fl'+'oaty',_0x43725f['EhQSq'](_0x195ea3,_0x1ff9ee['gravi'+'tyPct'],-0x1e4a+-0x1c4e+0x3aa2,0xb15*-0x1+0x14b1*0x1+-0x8d4,0x9ce+0x712+-0x10db,_0x12d5fd=>{_0x1ff9ee['gravi'+'tyPct']=_0x12d5fd,_0x35bbad();}))]),_0x549915(_0x43725f[_0x1e6803(0x314)],_0x43725f[_0x1e6803(0x44b)],_0x1ff9ee['bhop'],_0x405743=>{var _0x11a549=_0x1e6803;if(_0x3a2704[_0x11a549(0x2b0)]('Wtgxu',_0x11a549(0x5ef))){var _0x510124=_0x10b3ef[_0x11a549(0x663)+'ve'];if(_0x510124)try{_0x510124['enabl'+'ed']=![];}catch(_0x54caf2){}}else _0x1ff9ee[_0x11a549(0x414)]=_0x405743,_0x35bbad();},[])];if(_0x43725f[_0x1e6803(0x4d1)](_0x393cc6,_0x43725f[_0x1e6803(0x51e)]))return[_0x549915(_0x1e6803(0x177)+_0x1e6803(0x52d),'WASD\x20'+'+\x20LMB'+_0x1e6803(0x504)+'+\x20Spa'+_0x1e6803(0x393)+_0x1e6803(0x519)+'.',_0x1ff9ee['keyst'+_0x1e6803(0x52d)],_0x3b3e1a=>{var _0x1dc7cb=_0x1e6803;if(_0x43725f[_0x1dc7cb(0x30b)](_0x1dc7cb(0x1fa),_0x43725f['ihFZK']))_0x1ff9ee[_0x1dc7cb(0x61a)+'rokes']=_0x3b3e1a,_0x43725f[_0x1dc7cb(0x170)](_0x35bbad);else{var _0x2f5df2=_0x350283['creat'+'eElem'+_0x1dc7cb(0x4c6)](_0x3a2704[_0x1dc7cb(0x642)]);_0x2f5df2['type']=_0x3a2704[_0x1dc7cb(0x642)],_0x2f5df2['class'+'Name']=_0x1dc7cb(0x524)+'b',_0x2f5df2['title']=_0x3cbf51[_0x1dc7cb(0x672)],_0x2f5df2[_0x1dc7cb(0x565)+_0x1dc7cb(0x23a)]=_0x3a2704[_0x1dc7cb(0x3da)](_0x1dc7cb(0x5eb)+'l>',_0x4ddc01[_0x1dc7cb(0x672)])+_0x3a2704['cMykj'],_0x2f5df2[_0x1dc7cb(0x54d)+'ck']=(_0x2f9dfa=>()=>_0xa0540b(_0x2f9dfa))(_0x4fe03a['id']),_0x295db3['set'](_0x11d02c['id'],_0x2f5df2),_0x3d2139[_0x1dc7cb(0x4f0)+_0x1dc7cb(0x617)+'d'](_0x2f5df2);}},[_0x32b30c('Posit'+'ion',null,_0x43725f['hMpJe'](_0xaa20d4,_0x1ff9ee['ksPos'],[['bl',_0x43725f['GoBPz']],['br',_0x43725f['UVQAm']],['ml',_0x1e6803(0x366)+_0x1e6803(0x405)+'e']],_0x20e75a=>{var _0x490325=_0x1e6803;_0x1ff9ee['ksPos']=_0x20e75a,_0x3a2704[_0x490325(0x655)](_0x35bbad);})),_0x32b30c(_0x43725f[_0x1e6803(0x190)],null,_0x43725f['sOcCs'](_0x195ea3,_0x1ff9ee['ksSca'+'le'],0x146e+0x20ef*0x1+0x2cf*-0x13+0.6,-0x517*0x4+0xe7b+0x5e2+0.6000000000000001,0x3cb*-0x4+0x1db8*0x1+-0x13*0xc4+0.05,_0x4f542e=>{var _0x599d03=_0x1e6803;if('tduRn'===_0x599d03(0x5b8))_0x1ff9ee['ksSca'+'le']=_0x4f542e,_0x43725f['iahtO'](_0x35bbad);else{var _0x3160a0=new _0x4df41f(_0x40584e)['readF'+'ield'](_0x2b0704,_0x599d03(0x3fb));return _0x3160a0?_0x3160a0['val']():0x17*-0x10f+-0xfd5+-0x1417*-0x2;}})),_0x43725f[_0x1e6803(0x1d2)](_0x32b30c,_0x43725f[_0x1e6803(0x5c0)],null,_0x43725f[_0x1e6803(0x377)](_0x3de1d4,_0x1ff9ee[_0x1e6803(0x1af)],_0x20e9fd=>{var _0x1b1771=_0x1e6803;_0x1ff9ee[_0x1b1771(0x1af)]=_0x20e9fd,_0x43725f[_0x1b1771(0x494)](_0x35bbad);}))]),_0x43725f[_0x1e6803(0x219)](_0x549915,_0x1e6803(0x1aa)+'hair',_0x1e6803(0x2fd)+_0x1e6803(0x4a8)+'ter\x20c'+_0x1e6803(0x500)+'air.',_0x1ff9ee[_0x1e6803(0x418)+'hair'],_0x50d7eb=>{var _0x6eb6fc=_0x1e6803;_0x1ff9ee[_0x6eb6fc(0x418)+'hair']=_0x50d7eb,_0x35bbad();},[_0x32b30c('Size',null,_0x195ea3(_0x1ff9ee['chSiz'+'e'],0x3*-0xa89+0x15*0xbf+0xff0+0.5,-0xf6e+-0x3f0+-0x26c*-0x8+0.5,-0x3*-0x971+-0x24ed+0x89a+0.1,_0x2fe5b8=>{var _0x4512dc=_0x1e6803;'JObXA'===_0x4512dc(0x43d)?(_0x4232e0[_0x4512dc(0x63c)+'ct']=_0x7eb25e,_0x3a2704[_0x4512dc(0x655)](_0x392b54)):(_0x1ff9ee[_0x4512dc(0x59e)+'e']=_0x2fe5b8,_0x43725f[_0x4512dc(0x170)](_0x35bbad));})),_0x43725f[_0x1e6803(0x3be)](_0x32b30c,_0x43725f['ZxHGd'],null,_0x311972(_0x1ff9ee['chCol'+'or'],_0x353e72=>{var _0x1904b0=_0x1e6803;_0x1ff9ee[_0x1904b0(0x4fa)+'or']=_0x353e72,_0x35bbad();}))]),_0x549915(_0x1e6803(0x3e3)+_0x1e6803(0x2b1),'FPS\x20o'+_0x1e6803(0x554)+'y.',_0x1ff9ee[_0x1e6803(0x202)],null,[_0x43725f[_0x1e6803(0x3be)](_0x32b30c,_0x43725f[_0x1e6803(0x56c)],null,_0x3de1d4(_0x1ff9ee['fps'],_0x1f56b9=>{var _0x12f3e2=_0x1e6803;_0x3a2704[_0x12f3e2(0x2b0)](_0x12f3e2(0x53d),_0x12f3e2(0x53d))?(_0x586305[_0x12f3e2(0x391)]=_0x363dea,_0x3d678a(),_0x3a2704['ofmRX'](_0x473d57,_0x12f3e2(0x391),_0x3ed6a1)):(_0x1ff9ee['fps']=_0x1f56b9,_0x35bbad());})),_0xe20762(_0x43725f['VLlHQ'])])];if(_0x393cc6===_0x1e6803(0x2bf))return[_0x549915(_0x1e6803(0x4cc)+'ck',_0x1e6803(0x517)+'\x20kour'+_0x1e6803(0x264)+_0x1e6803(0x44c)+_0x1e6803(0x256)+_0x1e6803(0x23d),_0x1ff9ee[_0x1e6803(0x3e4)+'ck'],_0x1426fb=>{var _0x1684b7=_0x1e6803;_0x1ff9ee[_0x1684b7(0x3e4)+'ck']=_0x1426fb,_0x35bbad();},[_0x43725f['VxydP'](_0xe20762,'Takes'+_0x1e6803(0x3e8)+_0x1e6803(0x28c)+_0x1e6803(0x33f)+_0x1e6803(0x1b9)+_0x1e6803(0x47c)+_0x1e6803(0x3b5)+'.')])];return[_0x549915(_0x43725f['PmgXD'],_0x43725f['ATAdC'],_0x1ff9ee[_0x1e6803(0x5cd)+_0x1e6803(0x5da)],_0x44abea=>{var _0xe08ee8=_0x1e6803;_0x1ff9ee[_0xe08ee8(0x5cd)+_0xe08ee8(0x5da)]=_0x44abea,_0x43725f[_0xe08ee8(0x39d)](_0x35bbad),location['reloa'+'d']();},[_0xe20762(_0x1e6803(0x18f)+_0x1e6803(0x192)+_0x1e6803(0x33f)+'ad.\x20I'+'f\x20mat'+'ches\x20'+'load\x20'+_0x1e6803(0x1f0)+'fe\x20mo'+_0x1e6803(0x2d4)+_0x1e6803(0x443)+'eeze\x20'+_0x1e6803(0x472)+'ok-re'+_0x1e6803(0x436)+_0x1e6803(0x42b)+'ll\x20me'+_0x1e6803(0x1df)+_0x1e6803(0x371)+_0x1e6803(0x3ea)+_0x1e6803(0x201)+_0x1e6803(0x28d))]),_0x549915(_0x43725f['eecHM'],_0x1e6803(0x161)+_0x1e6803(0x216)+_0x1e6803(0x493)+_0x1e6803(0x3f3)+_0x1e6803(0x2eb)+_0x1e6803(0x169)+'t\x20sta'+'rtup\x20'+_0x1e6803(0x568)+_0x1e6803(0x38e)+_0x1e6803(0x19a)+_0x1e6803(0x351)+'\x20Keep'+'\x20ON.',_0x1ff9ee[_0x1e6803(0x512)+'ill'],_0x2060d9=>{var _0x3646a5=_0x1e6803;_0x1ff9ee[_0x3646a5(0x512)+_0x3646a5(0x4eb)]=_0x2060d9,_0x35bbad();},[_0x43725f[_0x1e6803(0x2e7)](_0xe20762,_0x1e6803(0x58d)+_0x1e6803(0x49e)+_0x1e6803(0x31c)+'d\x20gre'+_0x1e6803(0x231)+_0x1e6803(0x5db)+_0x1e6803(0x1ad)+'risk\x20'+_0x1e6803(0x4d2)+'with\x20'+_0x1e6803(0x20d)+_0x1e6803(0x559),!![])]),_0x549915(_0x43725f[_0x1e6803(0x67c)],_0x1e6803(0x5f1)+_0x1e6803(0x4f8)+'e\x20ser'+'ver-v'+_0x1e6803(0x176)+_0x1e6803(0x445)+_0x1e6803(0x157),!![],null,[_0x32b30c(_0x1e6803(0x645)+_0x1e6803(0x37d)+_0x1e6803(0x259)+'s',null,_0x43725f[_0x1e6803(0x2e7)](_0x960ccb,'Reset',()=>{var _0x1d5145=_0x1e6803;_0x1ff9ee={..._0x1662df},_0x3a2704[_0x1d5145(0x1ef)](_0x35bbad),location['reloa'+'d']();}))])];}}var _0x5bd125=null;function _0x80fd17(_0x5a1e51){var _0x590937=_0x47ada5;_0x1a2835=_0x5a1e51;if(!_0x5bd125){var _0x306e50=(_0x590937(0x1b2)+'|1|5|'+'3')['split']('|'),_0x4d358c=0x2149*0x1+-0x10ed+0x2ba*-0x6;while(!![]){switch(_0x306e50[_0x4d358c++]){case'0':_0x289ab5[_0x590937(0x160)+_0x590937(0x3f0)+'t']=_0x144395;continue;case'1':_0x5bd125=_0x358540['xqKrH'](_0x1487b0);continue;case'2':var _0x289ab5=document[_0x590937(0x27a)+_0x590937(0x23f)+'ent'](_0x358540['WegKF']);continue;case'3':requestAnimationFrame(()=>_0x5bd125[_0x590937(0x1f5)+'List'][_0x590937(0x194)](_0x590937(0x610)));continue;case'4':_0x3d91e5[_0x590937(0x4f0)+'dChil'+'d'](_0x289ab5);continue;case'5':_0x3d91e5['appen'+'dChil'+'d'](_0x5bd125);continue;}break;}}_0x5bd125[_0x590937(0x1f5)+_0x590937(0x448)]['toggl'+'e'](_0x590937(0x610),_0x5a1e51);}function _0x13994(){_0x80fd17(!_0x1a2835);}function _0x1487b0(){var _0x3b2117=_0x47ada5,_0x40c4d1={'arKGU':'unkno'+'wn','eoMBo':function(_0x1a6c96,_0x1e9be4){return _0x1a6c96+_0x1e9be4;},'ybMac':_0x358540['ePgMc'],'VTMVg':function(_0x24b30a,_0xb49336){var _0x50affa=_0xe9da;return _0x358540[_0x50affa(0x64a)](_0x24b30a,_0xb49336);},'McIlR':_0x3b2117(0x24c)+_0x3b2117(0x67a),'QYBnl':_0x358540[_0x3b2117(0x609)],'Wbfzm':_0x358540[_0x3b2117(0x4b2)],'HxRts':'\x20|\x20sh'+_0x3b2117(0x5ad)+'\x20','PEYwu':_0x358540[_0x3b2117(0x643)],'PRzXo':_0x3b2117(0x409)+_0x3b2117(0x2f2)},_0x2bee3e=document['creat'+_0x3b2117(0x23f)+_0x3b2117(0x4c6)]('div');_0x2bee3e[_0x3b2117(0x1f5)+'Name']='mn-pa'+'nel';var _0x148ae7=document[_0x3b2117(0x27a)+_0x3b2117(0x23f)+_0x3b2117(0x4c6)](_0x358540['oegvH']);_0x148ae7[_0x3b2117(0x1f5)+'Name']=_0x358540[_0x3b2117(0x42a)];var _0x1e4cbc=document[_0x3b2117(0x27a)+_0x3b2117(0x23f)+'ent'](_0x358540['MBwgt']);_0x1e4cbc[_0x3b2117(0x1f5)+'Name']=_0x358540[_0x3b2117(0x27c)],_0x1e4cbc[_0x3b2117(0x565)+'HTML']=_0x3b2117(0x35c)+'viewB'+_0x3b2117(0x294)+_0x3b2117(0x62d)+_0x3b2117(0x37f)+_0x3b2117(0x1f5)+'=\x22mn-'+_0x3b2117(0x30a)+'svg\x22>'+'<path'+'\x20d=\x22M'+'12\x2021'+_0x3b2117(0x654)+_0x3b2117(0x33a)+_0x3b2117(0x220)+'-4-7.'+_0x3b2117(0x60f)+_0x3b2117(0x1fc)+'8-4.5'+'\x204-4.'+_0x3b2117(0x331)+'\x204\x204.'+'5c0\x203'+_0x3b2117(0x592)+_0x3b2117(0x1a5)+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+'troke'+_0x3b2117(0x3c6)+_0x3b2117(0x1ac)+_0x3b2117(0x3c2)+_0x3b2117(0x158)+_0x3b2117(0x387)+_0x3b2117(0x248)+'nd\x22\x20s'+'troke'+_0x3b2117(0x31d)+'join='+_0x3b2117(0x39c)+_0x3b2117(0x58a)+_0x3b2117(0x241)+_0x3b2117(0x42d)+_0x3b2117(0x4bd)+_0x3b2117(0x5e6)+_0x3b2117(0x1e6)+_0x3b2117(0x622)+_0x3b2117(0x265)+_0x3b2117(0x64f)+_0x3b2117(0x543)+'/></s'+_0x3b2117(0x3fd),_0x148ae7[_0x3b2117(0x4f0)+_0x3b2117(0x617)+'d'](_0x1e4cbc);var _0x64ebf2=document['creat'+_0x3b2117(0x23f)+'ent']('div');_0x64ebf2['class'+_0x3b2117(0x505)]=_0x3b2117(0x507)+'in';var _0x1312be=document['creat'+'eElem'+'ent'](_0x358540['JOcoG']);_0x1312be['class'+_0x3b2117(0x505)]=_0x3b2117(0x2a3)+'p';var _0xa3bea9=document['creat'+'eElem'+_0x3b2117(0x4c6)](_0x358540['MBwgt']);_0xa3bea9[_0x3b2117(0x1f5)+_0x3b2117(0x505)]=_0x3b2117(0x1bb)+'tles';var _0x58bef8=document['creat'+'eElem'+_0x3b2117(0x4c6)]('h2');_0x58bef8['class'+_0x3b2117(0x505)]='mn-h',_0x58bef8['textC'+_0x3b2117(0x3f0)+'t']=_0x3b2117(0x63b)+_0x3b2117(0x1bc)+'r';var _0x23d6b3=document[_0x3b2117(0x27a)+_0x3b2117(0x23f)+'ent'](_0x3b2117(0x1b3));_0x23d6b3[_0x3b2117(0x1f5)+_0x3b2117(0x505)]=_0x3b2117(0x30e)+'b',_0x23d6b3['textC'+'onten'+'t']='kours'+_0x3b2117(0x4e2)+'.io\x20m'+'enu',_0xa3bea9['appen'+'d'](_0x58bef8,_0x23d6b3);var _0x10f6aa=document[_0x3b2117(0x27a)+_0x3b2117(0x23f)+_0x3b2117(0x4c6)](_0x3b2117(0x19d)+'n');_0x10f6aa['type']=_0x358540[_0x3b2117(0x1da)],_0x10f6aa[_0x3b2117(0x1f5)+_0x3b2117(0x505)]=_0x3b2117(0x52e)+'ose',_0x10f6aa[_0x3b2117(0x4a3)]=_0x358540[_0x3b2117(0x32d)],_0x10f6aa[_0x3b2117(0x565)+_0x3b2117(0x23a)]=_0x358540[_0x3b2117(0x40f)],_0x10f6aa['oncli'+'ck']=()=>_0x80fd17(![]),_0x1312be['appen'+'d'](_0xa3bea9,_0x10f6aa);var _0x33b187=document['creat'+'eElem'+'ent']('div');_0x33b187[_0x3b2117(0x1f5)+'Name']=_0x358540['SQNEd'],_0x64ebf2[_0x3b2117(0x4f0)+'d'](_0x1312be,_0x33b187),_0x2bee3e[_0x3b2117(0x4f0)+'d'](_0x148ae7,_0x64ebf2);var _0x52b3da=new Map();for(var _0x21f07c of _0x2ca743){var _0x4b7186=document[_0x3b2117(0x27a)+'eElem'+_0x3b2117(0x4c6)](_0x358540[_0x3b2117(0x1da)]);_0x4b7186[_0x3b2117(0x32c)]=_0x3b2117(0x19d)+'n',_0x4b7186['class'+'Name']='mn-ta'+'b',_0x4b7186['title']=_0x21f07c[_0x3b2117(0x672)],_0x4b7186['inner'+_0x3b2117(0x23a)]=_0x358540['TCJpf'](_0x3b2117(0x5eb)+'l>',_0x21f07c['label'])+_0x358540[_0x3b2117(0x4ba)],_0x4b7186['oncli'+'ck']=(_0x273c2d=>()=>_0x44f4ae(_0x273c2d))(_0x21f07c['id']),_0x52b3da['set'](_0x21f07c['id'],_0x4b7186),_0x148ae7[_0x3b2117(0x4f0)+_0x3b2117(0x617)+'d'](_0x4b7186);}function _0x44f4ae(_0x4a5743){var _0x3b3b8f=_0x3b2117;_0x54a03c['cat']=_0x4a5743,_0x43725f[_0x3b3b8f(0x39d)](_0x112ba1);var _0x383039=_0x2ca743[_0x3b3b8f(0x66f)](_0x1642b4=>_0x1642b4['id']===_0x4a5743)||_0x2ca743[-0x1784+-0xe8f+0x2613];_0x58bef8[_0x3b3b8f(0x160)+_0x3b3b8f(0x3f0)+'t']=_0x43725f[_0x3b3b8f(0x376)]('Sakur'+_0x3b3b8f(0x1bc)+'r\x20—\x20',_0x383039[_0x3b3b8f(0x672)]);for(var [_0x3490be,_0x932c01]of _0x52b3da)_0x932c01['class'+'List'][_0x3b3b8f(0x22e)+'e'](_0x43725f['roeCz'],_0x3490be===_0x4a5743);_0x33b187['repla'+'ceChi'+'ldren'](..._0x2b2ce3(_0x4a5743));}return _0x44f4ae(_0x54a03c[_0x3b2117(0x638)]||'comba'+'t'),setInterval(()=>{var _0x2e96aa=_0x3b2117;if('nSrmF'!==_0x2e96aa(0x302))try{var _0x5186fb=_0x3d4572&&(_0x18e543[_0x2e96aa(0x2a7)+'ge']||_0x5a0510['error']&&_0x5d4b63['error']['messa'+'ge'])||_0x40c4d1[_0x2e96aa(0x2b3)];if(_0x433a15&&_0x1c4f57['filen'+'ame'])_0x5186fb+=_0x40c4d1['eoMBo'](_0x40c4d1[_0x2e96aa(0x455)](_0x40c4d1[_0x2e96aa(0x295)],_0x40c4d1[_0x2e96aa(0x2c6)](_0x17c3d9,_0x151935[_0x2e96aa(0x1ca)+_0x2e96aa(0x4b9)])[_0x2e96aa(0x4e0)]('/')['pop']()),':')+(_0x3e2ffd[_0x2e96aa(0x693)+'o']||'?');_0x4b59d5[_0x2e96aa(0x4e5)+'rror']=_0x372c00(_0x5186fb)['slice'](0x2213+0x785+-0x2998,-0x25cd+-0x538+0x1*0x2ba5);}catch(_0x360e50){}else{if(!_0x1a2835)return;var _0x52875c=_0x33b187[_0x2e96aa(0x434)+_0x2e96aa(0x4ce)];for(var _0x89503e=0x3*-0x771+-0x166a+-0x2cbd*-0x1;_0x89503e<_0x52875c[_0x2e96aa(0x56f)+'h'];_0x89503e++){var _0x4b4648=_0x52875c[_0x89503e]['query'+'Selec'+_0x2e96aa(0x62b)](_0x40c4d1[_0x2e96aa(0x399)]);_0x4b4648&&(_0x4b4648[_0x2e96aa(0x160)+'onten'+'t']['index'+'Of'](_0x2e96aa(0x460))===0x244a+0x255e*-0x1+0x114||_0x4b4648[_0x2e96aa(0x160)+_0x2e96aa(0x3f0)+'t'][_0x2e96aa(0x292)+'Of']('SAFE')===-0x1122+0xd84+0x39e)&&('EyGHu'===_0x2e96aa(0x599)?(_0x596f9e['fps']=_0x2fe1bc,_0x79cafe()):_0x4b4648['textC'+'onten'+'t']=_0x27a6a5[_0x2e96aa(0x5cd)+_0x2e96aa(0x5da)]?_0x2e96aa(0x2f9)+'MODE\x20'+_0x2e96aa(0x534)+_0x2e96aa(0x456)+'only,'+'\x20no\x20h'+_0x2e96aa(0x2c9)+'(relo'+'ad\x20to'+_0x2e96aa(0x163)+')':_0x27a6a5[_0x2e96aa(0x258)]?_0x40c4d1[_0x2e96aa(0x455)](_0x40c4d1[_0x2e96aa(0x455)](_0x2e96aa(0x533)+'bound'+'\x20'+_0x27a6a5[_0x2e96aa(0x371)+'Ok']+'/'+_0x27a6a5['hooks'+_0x2e96aa(0x26f)]+_0x40c4d1[_0x2e96aa(0x19b)],_0x2e96aa(0x30c)+_0x2e96aa(0x61e))+(_0x27a6a5['gameL'+'oaded']?_0x2e96aa(0x299)+'d':_0x40c4d1['Wbfzm'])+_0x40c4d1['HxRts']+(_0x27a6a5['shoot'+_0x2e96aa(0x2b1)]?_0x40c4d1[_0x2e96aa(0x2ad)]:'none')+(_0x2e96aa(0x1e8)+_0x2e96aa(0x2b7)+'t\x20'),_0x27a6a5['movem'+'ents']?_0x2e96aa(0x341):'none')+(_0x27a6a5['lastE'+'rror']?_0x40c4d1[_0x2e96aa(0x455)](_0x40c4d1['PRzXo'],_0x27a6a5['lastE'+_0x2e96aa(0x319)]):''):_0x2e96aa(0x533)+_0x2e96aa(0x5e5)+'NG\x20-\x20'+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+_0x2e96aa(0x5df)+_0x2e96aa(0x4d7)+_0x2e96aa(0x5c4));}}},0x17c9*0x1+-0x1351+-0x8*0x12),_0x2bee3e;}var _0x144395=_0x47ada5(0x3a6)+_0x47ada5(0x398)+'\x20{\x20al'+'l:\x20in'+_0x47ada5(0x56a)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x47ada5(0x3eb)+_0x47ada5(0x3c1)+_0x47ada5(0x50a)+_0x47ada5(0x625)+_0x47ada5(0x509)+_0x47ada5(0x59f)+_0x47ada5(0x1b1)+';\x20fon'+_0x47ada5(0x59d)+'ily:\x20'+_0x47ada5(0x548)+_0x47ada5(0x63d)+_0x47ada5(0x3b1)+_0x47ada5(0x4df)+_0x47ada5(0x1e1)+_0x47ada5(0x293)+_0x47ada5(0x484)+_0x47ada5(0x1dd)+_0x47ada5(0x173)+'\x0a\x20\x20\x20\x20'+_0x47ada5(0x38d)+'anel\x20'+'{\x20pos'+'ition'+':\x20abs'+_0x47ada5(0x2dd)+_0x47ada5(0x297)+_0x47ada5(0x312)+_0x47ada5(0x178)+_0x47ada5(0x353)+_0x47ada5(0x240)+'px;\x20w'+_0x47ada5(0x3f5)+'\x20min('+_0x47ada5(0x444)+_0x47ada5(0x43a)+'c(100'+_0x47ada5(0x5b5)+_0x47ada5(0x2b9)+');\x20ma'+_0x47ada5(0x4b0)+_0x47ada5(0x673)+'min(4'+_0x47ada5(0x271)+'\x20calc'+'(100v'+_0x47ada5(0x429)+_0x47ada5(0x5d8)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x47ada5(0x5d3)+':\x20fle'+'x;\x20ga'+_0x47ada5(0x392)+'px;\x20p'+_0x47ada5(0x1d6)+_0x47ada5(0x21f)+'px;\x20b'+_0x47ada5(0x625)+_0x47ada5(0x18e)+_0x47ada5(0x2c3)+_0x47ada5(0x684)+_0x47ada5(0x209)+_0x47ada5(0x2f5)+_0x47ada5(0x5bf)+_0x47ada5(0x2d1)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+'ckgro'+'und:\x20'+'rgba('+'24,17'+',21,.'+'82);\x20'+'backd'+_0x47ada5(0x288)+_0x47ada5(0x478)+_0x47ada5(0x695)+_0x47ada5(0x218)+_0x47ada5(0x401)+'turat'+_0x47ada5(0x370)+'%);\x20-'+_0x47ada5(0x19c)+_0x47ada5(0x33d)+_0x47ada5(0x402)+'-filt'+_0x47ada5(0x4af)+'lur(2'+_0x47ada5(0x197)+_0x47ada5(0x516)+_0x47ada5(0x25f)+_0x47ada5(0x32e)+_0x47ada5(0x3a6)+_0x47ada5(0x430)+_0x47ada5(0x249)+_0x47ada5(0x2fe)+_0x47ada5(0x65d)+'1px\x20r'+'gba(2'+'55,25'+'5,255'+',.06)'+',\x20ins'+_0x47ada5(0x350)+_0x47ada5(0x2f4)+'\x20rgba'+_0x47ada5(0x183)+_0x47ada5(0x525)+_0x47ada5(0x52c)+_0x47ada5(0x16b)+_0x47ada5(0x1fb)+_0x47ada5(0x5af)+_0x47ada5(0x513)+'(0,0,'+_0x47ada5(0x4a4)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x47ada5(0x2d3)+_0x47ada5(0x4e9)+'\x20tran'+_0x47ada5(0x3dc)+':\x20tra'+_0x47ada5(0x3b7)+'eY(18'+'px);\x20'+_0x47ada5(0x209)+'er-ev'+_0x47ada5(0x5bf)+'\x20none'+';\x20tra'+_0x47ada5(0x53b)+_0x47ada5(0x5a5)+_0x47ada5(0x2d3)+'y\x20.35'+_0x47ada5(0x328)+_0x47ada5(0x4f6)+_0x47ada5(0x255)+_0x47ada5(0x3c0)+_0x47ada5(0x3d9)+_0x47ada5(0x290)+'ezier'+'(.22,'+'1,.36'+_0x47ada5(0x560)+_0x47ada5(0x3cd)+_0x47ada5(0x527)+_0x47ada5(0x2e4)+_0x47ada5(0x64d)+_0x47ada5(0x664)+'t-siz'+_0x47ada5(0x188)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x47ada5(0x439)+_0x47ada5(0x610)+'\x20{\x20op'+'acity'+_0x47ada5(0x467)+'trans'+_0x47ada5(0x410)+'\x20none'+';\x20poi'+'nter-'+_0x47ada5(0x356)+_0x47ada5(0x310)+'to;\x20}'+_0x47ada5(0x3a6)+_0x47ada5(0x2f8)+_0x47ada5(0x4c1)+_0x47ada5(0x4f3)+'lay:\x20'+'flex;'+'\x20flex'+_0x47ada5(0x166)+_0x47ada5(0x428)+':\x20col'+'umn;\x20'+_0x47ada5(0x3e0)+'-item'+'s:\x20ce'+_0x47ada5(0x68f)+'\x20gap:'+_0x47ada5(0x289)+'\x20widt'+'h:\x2062'+'px;\x20f'+_0x47ada5(0x446)+_0x47ada5(0x273)+'\x20padd'+'ing:\x20'+_0x47ada5(0x309)+(_0x47ada5(0x3b9)+'rder-'+_0x47ada5(0x5e7)+_0x47ada5(0x3ba)+_0x47ada5(0x486)+'\x20\x20\x20\x20\x20'+_0x47ada5(0x521)+_0x47ada5(0x238)+_0x47ada5(0x16a)+_0x47ada5(0x3ef)+_0x47ada5(0x25c)+_0x47ada5(0x57c)+_0x47ada5(0x1e2)+_0x47ada5(0x2fc)+_0x47ada5(0x2ff)+_0x47ada5(0x4b1)+'set\x200'+_0x47ada5(0x65d)+'1px\x20r'+'gba(2'+_0x47ada5(0x397)+'5,255'+_0x47ada5(0x26a)+_0x47ada5(0x37e)+_0x47ada5(0x43c)+_0x47ada5(0x1ec)+'o\x20{\x20d'+_0x47ada5(0x1d7)+'y:\x20gr'+'id;\x20p'+_0x47ada5(0x1ab)+'items'+_0x47ada5(0x566)+'ter;\x20'+'width'+':\x2032p'+_0x47ada5(0x3f7)+'ight:'+_0x47ada5(0x40c)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x47ada5(0x1ec)+_0x47ada5(0x5f0)+'\x20{\x20wi'+_0x47ada5(0x608)+_0x47ada5(0x336)+'\x20heig'+_0x47ada5(0x312)+'5px;\x20'+'overf'+'low:\x20'+'visib'+_0x47ada5(0x37a)+'ilter'+':\x20dro'+_0x47ada5(0x44a)+_0x47ada5(0x5bc)+'\x200\x204p'+'x\x20rgb'+'a(255'+',107,'+'157,.'+_0x47ada5(0x380)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+'\x20disp'+_0x47ada5(0x4b3)+_0x47ada5(0x474)+_0x47ada5(0x48a)+'n-ite'+_0x47ada5(0x2e9)+'enter'+_0x47ada5(0x205)+_0x47ada5(0x620)+_0x47ada5(0x4b6)+_0x47ada5(0x404)+'enter'+';\x20wid'+'th:\x205'+_0x47ada5(0x684)+_0x47ada5(0x497)+_0x47ada5(0x64e)+_0x47ada5(0x280)+_0x47ada5(0x625)+':\x200;\x20'+_0x47ada5(0x20b)+'r-rad'+_0x47ada5(0x35b)+_0x47ada5(0x3d5)+_0x47ada5(0x3a6)+'\x20\x20bac'+_0x47ada5(0x1a1)+_0x47ada5(0x691)+'ransp'+_0x47ada5(0x33e)+';\x20col'+_0x47ada5(0x332)+'gba(2'+_0x47ada5(0x3c5)+'8,242'+_0x47ada5(0x34b)+'\x20curs'+'or:\x20p'+'ointe'+_0x47ada5(0x699)+'nt-si'+_0x47ada5(0x449)+_0x47ada5(0x15c)+'font-'+'weigh'+_0x47ada5(0x26c)+_0x47ada5(0x3ce)+_0x47ada5(0x52f)+_0x47ada5(0x524)+_0x47ada5(0x17a)+'er\x20{\x20'+_0x47ada5(0x266)+':\x20rgb'+_0x47ada5(0x2e1)+_0x47ada5(0x2f6)+'242,.'+_0x47ada5(0x55b)+'\x0a\x20\x20\x20\x20'+_0x47ada5(0x275)+_0x47ada5(0x36a)+_0x47ada5(0x5d4)+_0x47ada5(0x1a4)+_0x47ada5(0x4a2)+'ff6b9'+_0x47ada5(0x33b)+_0x47ada5(0x630)+'und:\x20'+_0x47ada5(0x22d)+_0x47ada5(0x308)+'07,15'+_0x47ada5(0x635)+';\x20}\x0a\x20'+_0x47ada5(0x43c)+_0x47ada5(0x4a6)+_0x47ada5(0x648)+'lex:\x20'+_0x47ada5(0x483)+_0x47ada5(0x51a)+_0x47ada5(0x224)+';\x20dis'+_0x47ada5(0x2ca)+_0x47ada5(0x5f4)+';\x20fle'+_0x47ada5(0x282)+_0x47ada5(0x485)+_0x47ada5(0x2c1)+_0x47ada5(0x3ab)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-top\x20'+_0x47ada5(0x2a2)+'play:'+_0x47ada5(0x5f4)+_0x47ada5(0x2cc)+'gn-it'+'ems:\x20'+'cente'+_0x47ada5(0x530)+_0x47ada5(0x503)+'px;\x20p'+_0x47ada5(0x1d6)+_0x47ada5(0x644)+'x\x206px'+'\x2012px'+';\x20use'+'r-sel'+'ect:\x20'+_0x47ada5(0x273)+'\x20}\x0a\x20\x20'+_0x47ada5(0x4e4)+'-titl'+'es\x20{\x20'+'flex:'+_0x47ada5(0x38f)+_0x47ada5(0x245)+'dth:\x20'+_0x47ada5(0x3ce)+'\x20\x20\x20\x20.'+'mn-h\x20'+'{\x20fon'+_0x47ada5(0x420)+_0x47ada5(0x1c2)+'px;\x20f'+'ont-w'+_0x47ada5(0x492)+':\x20650'+_0x47ada5(0x37e)+_0x47ada5(0x43c)+_0x47ada5(0x360)+'\x20{\x20fo'+_0x47ada5(0x330)+_0x47ada5(0x449)+_0x47ada5(0x4cf)+'opaci')+('ty:\x20.'+_0x47ada5(0x5c9)+_0x47ada5(0x52f)+_0x47ada5(0x52e)+_0x47ada5(0x3b6)+'\x20disp'+'lay:\x20'+_0x47ada5(0x462)+_0x47ada5(0x547)+_0x47ada5(0x1d0)+_0x47ada5(0x2e9)+'enter'+_0x47ada5(0x649)+'th:\x202'+_0x47ada5(0x47d)+_0x47ada5(0x497)+'t:\x2028'+'px;\x20b'+_0x47ada5(0x625)+_0x47ada5(0x634)+_0x47ada5(0x20b)+'r-rad'+_0x47ada5(0x35b)+_0x47ada5(0x47d)+'backg'+_0x47ada5(0x238)+':\x20tra'+'nspar'+_0x47ada5(0x17e)+'color'+_0x47ada5(0x1a9)+'erit;'+'\x20opac'+_0x47ada5(0x682)+'.45;\x20'+_0x47ada5(0x3f9)+_0x47ada5(0x4c9)+'inter'+_0x47ada5(0x37e)+_0x47ada5(0x43c)+'n-clo'+_0x47ada5(0x41b)+'ver\x20{'+_0x47ada5(0x4d6)+_0x47ada5(0x682)+'1;\x20ba'+_0x47ada5(0x630)+_0x47ada5(0x3bd)+_0x47ada5(0x22d)+_0x47ada5(0x525)+'55,25'+'5,.05'+_0x47ada5(0x68e)+_0x47ada5(0x52f)+_0x47ada5(0x52e)+_0x47ada5(0x4a9)+_0x47ada5(0x4ad)+_0x47ada5(0x2cd)+_0x47ada5(0x66a)+'x;\x20he'+_0x47ada5(0x4f4)+_0x47ada5(0x2fb)+';\x20fil'+_0x47ada5(0x556)+_0x47ada5(0x5aa)+_0x47ada5(0x232)+_0x47ada5(0x3e1)+_0x47ada5(0x3d2)+'olor;'+'\x20stro'+'ke-wi'+'dth:\x20'+_0x47ada5(0x37c)+'roke-'+'linec'+_0x47ada5(0x3bf)+'ound;'+_0x47ada5(0x372)+'\x20\x20.mn'+_0x47ada5(0x56d)+_0x47ada5(0x591)+_0x47ada5(0x605)+';\x20min'+'-heig'+'ht:\x200'+_0x47ada5(0x675)+_0x47ada5(0x3db)+_0x47ada5(0x2e6)+'uto;\x20'+'displ'+_0x47ada5(0x438)+_0x47ada5(0x674)+_0x47ada5(0x390)+_0x47ada5(0x63f)+_0x47ada5(0x230)+_0x47ada5(0x1d9)+'s:\x20re'+_0x47ada5(0x555)+'auto-'+_0x47ada5(0x5a3)+'\x20minm'+'ax(25'+_0x47ada5(0x488)+_0x47ada5(0x20c)+';\x20ali'+'gn-it'+'ems:\x20'+_0x47ada5(0x46d)+_0x47ada5(0x2cc)+_0x47ada5(0x59b)+_0x47ada5(0x327)+_0x47ada5(0x4ee)+'rt;\x20g'+'ap:\x201'+_0x47ada5(0x15c)+'paddi'+'ng:\x200'+_0x47ada5(0x5ee)+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x47ada5(0x587)+_0x47ada5(0x532)+'ebkit'+_0x47ada5(0x5b1)+_0x47ada5(0x208)+_0x47ada5(0x539)+_0x47ada5(0x608)+'8px;\x20'+_0x47ada5(0x1a8)+'\x20.mn-'+_0x47ada5(0x19e)+':-web'+'kit-s'+_0x47ada5(0x3d3)+'bar-t'+_0x47ada5(0x415)+'{\x20bac'+'kgrou'+'nd:\x20r'+_0x47ada5(0x23b)+_0x47ada5(0x397)+_0x47ada5(0x687)+',.08)'+_0x47ada5(0x233)+'der-r'+'adius'+_0x47ada5(0x55f)+_0x47ada5(0x37e)+_0x47ada5(0x5c2)+_0x47ada5(0x2d9)+'d\x20{\x20b'+_0x47ada5(0x625)+_0x47ada5(0x18e)+'us:\x201'+_0x47ada5(0x684)+'backg'+_0x47ada5(0x238)+':\x20rgb'+'a(255'+_0x47ada5(0x25c)+_0x47ada5(0x57c)+_0x47ada5(0x1e2)+'\x20box-'+'shado'+_0x47ada5(0x4b1)+_0x47ada5(0x352)+'\x200\x200\x20'+_0x47ada5(0x2d8)+_0x47ada5(0x23b)+_0x47ada5(0x397)+_0x47ada5(0x687)+_0x47ada5(0x26a)+_0x47ada5(0x37e)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'{\x20bac'+_0x47ada5(0x1a1)+_0x47ada5(0x252)+_0x47ada5(0x23b)+_0x47ada5(0x397)+_0x47ada5(0x687)+_0x47ada5(0x5dd)+_0x47ada5(0x3fc)+'-shad'+'ow:\x20i'+_0x47ada5(0x571)+'0\x200\x200'+'\x201px\x20'+'rgba('+_0x47ada5(0x308)+_0x47ada5(0x1be)+'7,.28'+_0x47ada5(0x68e)+_0x47ada5(0x52f)+_0x47ada5(0x3d1)+_0x47ada5(0x5ba)+_0x47ada5(0x39f)+_0x47ada5(0x383))+(_0x47ada5(0x213)+_0x47ada5(0x340)+'align'+_0x47ada5(0x31a)+_0x47ada5(0x287)+'nter;'+'\x20gap:'+'\x208px;'+'\x20padd'+_0x47ada5(0x20a)+_0x47ada5(0x4ea)+'12px;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-card'+_0x47ada5(0x206)+_0x47ada5(0x2c2)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x47ada5(0x224)+_0x47ada5(0x37e)+'\x20\x20\x20.s'+_0x47ada5(0x2d9)+'d-tit'+_0x47ada5(0x3b4)+_0x47ada5(0x1bf)+_0x47ada5(0x4bf)+'t-siz'+_0x47ada5(0x188)+_0x47ada5(0x4db)+_0x47ada5(0x257)+'eight'+':\x20600'+_0x47ada5(0x338)+'or:\x20r'+_0x47ada5(0x23b)+_0x47ada5(0x3c5)+'8,242'+_0x47ada5(0x652)+_0x47ada5(0x37e)+_0x47ada5(0x5c2)+_0x47ada5(0x2d9)+'d.on\x20'+'.sk-c'+_0x47ada5(0x3ac)+_0x47ada5(0x269)+_0x47ada5(0x471)+'g\x20{\x20c'+_0x47ada5(0x5e1)+_0x47ada5(0x65f)+'0f5;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'mbody'+_0x47ada5(0x26b)+_0x47ada5(0x47b)+':\x200\x201'+_0x47ada5(0x49f)+_0x47ada5(0x15c)+_0x47ada5(0x1a8)+_0x47ada5(0x583)+'mdesc'+'\x20{\x20fo'+_0x47ada5(0x330)+'ze:\x201'+_0x47ada5(0x4cf)+_0x47ada5(0x469)+'ty:\x20.'+'4;\x20ma'+'rgin-'+_0x47ada5(0x353)+_0x47ada5(0x499)+_0x47ada5(0x594)+_0x47ada5(0x52f)+_0x47ada5(0x3b3)+_0x47ada5(0x3e5)+_0x47ada5(0x1d7)+'y:\x20fl'+'ex;\x20a'+_0x47ada5(0x4b4)+_0x47ada5(0x215)+':\x20cen'+_0x47ada5(0x300)+'gap:\x20'+_0x47ada5(0x47d)+_0x47ada5(0x423)+_0x47ada5(0x4ae)+_0x47ada5(0x1d1)+_0x47ada5(0x50d)+'-size'+_0x47ada5(0x388)+_0x47ada5(0x323)+_0x47ada5(0x1a8)+'\x20.sk-'+'label'+'\x20{\x20fl'+'ex:\x201'+_0x47ada5(0x338)+'or:\x20r'+_0x47ada5(0x23b)+'46,23'+_0x47ada5(0x4dc)+_0x47ada5(0x250)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x47ada5(0x384)+'ispla'+'y:\x20bl'+_0x47ada5(0x2c8)+'font-'+_0x47ada5(0x196)+'\x2010px'+_0x47ada5(0x4d3)+_0x47ada5(0x1f2)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x47ada5(0x583)+_0x47ada5(0x45c)+_0x47ada5(0x653)+'ositi'+'on:\x20r'+'elati'+_0x47ada5(0x417)+'idth:'+'\x2026px'+_0x47ada5(0x574)+_0x47ada5(0x673)+_0x47ada5(0x5c8)+_0x47ada5(0x364)+'er:\x200'+_0x47ada5(0x233)+_0x47ada5(0x254)+'adius'+_0x47ada5(0x616)+_0x47ada5(0x5f7)+_0x47ada5(0x630)+_0x47ada5(0x3bd)+_0x47ada5(0x22d)+_0x47ada5(0x525)+'55,25'+_0x47ada5(0x2ee)+_0x47ada5(0x624)+_0x47ada5(0x575)+'\x20poin'+'ter;\x20'+'flex:'+_0x47ada5(0x1cb)+_0x47ada5(0x37e)+'\x20\x20\x20.s'+'k-swi'+_0x47ada5(0x536)+_0x47ada5(0x54a)+'\x20{\x20co'+'ntent'+':\x20\x22\x22;'+_0x47ada5(0x569)+_0x47ada5(0x17d)+_0x47ada5(0x5fe)+_0x47ada5(0x263)+_0x47ada5(0x296)+'\x203px;'+_0x47ada5(0x65e)+_0x47ada5(0x514)+';\x20wid'+'th:\x208'+'px;\x20h'+_0x47ada5(0x492)+_0x47ada5(0x394)+_0x47ada5(0x233)+'der-r'+_0x47ada5(0x561)+_0x47ada5(0x34f)+';\x20bac'+_0x47ada5(0x1a1)+'nd:\x20r'+_0x47ada5(0x23b)+_0x47ada5(0x397)+'5,255'+',.25)'+_0x47ada5(0x694)+_0x47ada5(0x53b)+'on:\x20l'+'eft\x20.'+_0x47ada5(0x18d)+_0x47ada5(0x627)+_0x47ada5(0x5d5)+'.2s;\x20'+_0x47ada5(0x1a8)+_0x47ada5(0x583)+_0x47ada5(0x45c)+'h[ari'+_0x47ada5(0x62f)+_0x47ada5(0x678)+_0x47ada5(0x325)+_0x47ada5(0x193)+_0x47ada5(0x521)+'round'+_0x47ada5(0x16a))+('a(255'+',107,'+_0x47ada5(0x44f)+_0x47ada5(0x656)+_0x47ada5(0x1a8)+'\x20.sk-'+_0x47ada5(0x45c)+_0x47ada5(0x1c0)+'a-che'+_0x47ada5(0x678)+_0x47ada5(0x325)+'\x22]::a'+'fter\x20'+_0x47ada5(0x31f)+'t:\x2015'+_0x47ada5(0x280)+'ackgr'+_0x47ada5(0x5ab)+_0x47ada5(0x4c4)+_0x47ada5(0x50e)+_0x47ada5(0x1a8)+_0x47ada5(0x583)+_0x47ada5(0x4a7)+'\x20{\x20ba'+_0x47ada5(0x630)+_0x47ada5(0x3bd)+_0x47ada5(0x22d)+_0x47ada5(0x525)+'55,25'+'5,.03'+_0x47ada5(0x1f8)+_0x47ada5(0x625)+_0x47ada5(0x634)+_0x47ada5(0x20b)+_0x47ada5(0x5a4)+_0x47ada5(0x35b)+'6px;\x20'+_0x47ada5(0x266)+_0x47ada5(0x4fd)+_0x47ada5(0x26d)+'\x20padd'+'ing:\x20'+_0x47ada5(0x459)+'px;\x20f'+_0x47ada5(0x4cb)+_0x47ada5(0x23c)+'11.5p'+'x;\x20ou'+_0x47ada5(0x4b7)+':\x20non'+_0x47ada5(0x3bc)+_0x47ada5(0x16e)+_0x47ada5(0x41a)+'inset'+'\x200\x200\x20'+_0x47ada5(0x2ac)+_0x47ada5(0x513)+'(255,'+'255,2'+_0x47ada5(0x52c)+'5);\x20}'+'\x0a\x20\x20\x20\x20'+_0x47ada5(0x49c)+'ield\x20'+_0x47ada5(0x2da)+_0x47ada5(0x68b)+'ackgr'+'ound:'+_0x47ada5(0x4ef)+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x47ada5(0x639)+'\x20{\x20di'+_0x47ada5(0x5d3)+':\x20fle'+_0x47ada5(0x3df)+'ign-i'+'tems:'+'\x20cent'+'er;\x20g'+_0x47ada5(0x59c)+_0x47ada5(0x2a4)+_0x47ada5(0x3a6)+_0x47ada5(0x34a)+_0x47ada5(0x5bb)+'\x20{\x20-w'+_0x47ada5(0x3c9)+'-appe'+'aranc'+_0x47ada5(0x61d)+_0x47ada5(0x3c4)+_0x47ada5(0x348)+'ance:'+'\x20none'+_0x47ada5(0x649)+'th:\x209'+'0px;\x20'+_0x47ada5(0x497)+_0x47ada5(0x272)+'x;\x20ba'+'ckgro'+_0x47ada5(0x3bd)+_0x47ada5(0x18b)+_0x47ada5(0x5bd)+_0x47ada5(0x199)+'\x20\x20\x20\x20.'+'sk-sl'+_0x47ada5(0x217)+_0x47ada5(0x570)+'kit-s'+'lider'+'-runn'+'able-'+_0x47ada5(0x4da)+'\x20{\x20he'+_0x47ada5(0x4f4)+'\x202px;'+'\x20bord'+'er-ra'+_0x47ada5(0x26e)+_0x47ada5(0x669)+'\x20back'+'groun'+'d:\x20li'+_0x47ada5(0x260)+_0x47ada5(0x321)+'ent(#'+'ff6b9'+_0x47ada5(0x422)+_0x47ada5(0x4d9)+')\x200\x200'+'\x20/\x20va'+_0x47ada5(0x631)+_0x47ada5(0x4ac)+')\x20100'+_0x47ada5(0x1b7)+'repea'+_0x47ada5(0x1e9)+_0x47ada5(0x369)+'5,255'+',255,'+_0x47ada5(0x522)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x47ada5(0x1a6)+_0x47ada5(0x251)+'webki'+_0x47ada5(0x2d6)+_0x47ada5(0x49b)+'humb\x20'+'{\x20-we'+_0x47ada5(0x2d2)+_0x47ada5(0x34e)+_0x47ada5(0x1d8)+_0x47ada5(0x5b6)+'e;\x20wi'+_0x47ada5(0x608)+_0x47ada5(0x38b)+_0x47ada5(0x497)+_0x47ada5(0x237)+'x;\x20ma'+_0x47ada5(0x35e)+_0x47ada5(0x29a)+_0x47ada5(0x4bc)+_0x47ada5(0x364)+'er-ra'+_0x47ada5(0x26e)+_0x47ada5(0x48d)+_0x47ada5(0x4bb)+_0x47ada5(0x461)+_0x47ada5(0x301)+'f6b9d'+';\x20}\x0a\x20'+_0x47ada5(0x5c2)+'k-val'+'\x20{\x20fo'+_0x47ada5(0x330)+_0x47ada5(0x449)+_0x47ada5(0x4cf)+_0x47ada5(0x42e)+'weigh'+_0x47ada5(0x5e4)+'0;\x20mi'+_0x47ada5(0x51a)+_0x47ada5(0x5be)+_0x47ada5(0x47d)+_0x47ada5(0x46e)+'align'+_0x47ada5(0x633)+'ht;\x20c'+'olor:'+_0x47ada5(0x513)+_0x47ada5(0x2d0)+_0x47ada5(0x35f)+_0x47ada5(0x1cf)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x47ada5(0x576)+_0x47ada5(0x526))+('\x20widt'+_0x47ada5(0x277)+_0x47ada5(0x5b3)+_0x47ada5(0x492)+_0x47ada5(0x577)+_0x47ada5(0x239)+'rder:'+_0x47ada5(0x1e5)+_0x47ada5(0x625)+_0x47ada5(0x18e)+'us:\x206'+_0x47ada5(0x280)+'ackgr'+_0x47ada5(0x5ab)+'\x20none'+_0x47ada5(0x406)+_0x47ada5(0x35d)+_0x47ada5(0x57e)+_0x47ada5(0x431)+_0x47ada5(0x1cd)+_0x47ada5(0x68f)+'\x20}\x0a\x20\x20'+_0x47ada5(0x580)+_0x47ada5(0x15f)+_0x47ada5(0x210)+'nt-si'+'ze:\x201'+_0x47ada5(0x4cf)+_0x47ada5(0x266)+_0x47ada5(0x16a)+'a(246'+_0x47ada5(0x2f6)+_0x47ada5(0x65c)+'5);\x20p'+'addin'+'g:\x202p'+_0x47ada5(0x5ce)+'}\x0a\x20\x20\x20'+_0x47ada5(0x583)+_0x47ada5(0x43f)+_0x47ada5(0x167)+_0x47ada5(0x527)+_0x47ada5(0x2e4)+'f7a93'+_0x47ada5(0x37e)+'\x20\x20\x20.s'+_0x47ada5(0x24e)+_0x47ada5(0x4d0)+'ign-s'+_0x47ada5(0x3f2)+_0x47ada5(0x374)+'start'+';\x20bor'+'der:\x20'+_0x47ada5(0x3b9)+_0x47ada5(0x191)+_0x47ada5(0x5e7)+_0x47ada5(0x2ec)+'x;\x20pa'+'dding'+_0x47ada5(0x394)+'\x2016px'+_0x47ada5(0x412)+'kgrou'+_0x47ada5(0x5e9)+'ff6b9'+'d;\x20co'+_0x47ada5(0x641)+_0x47ada5(0x3a7)+'\x20font'+'-size'+_0x47ada5(0x388)+'5px;\x20'+'font-'+_0x47ada5(0x200)+'t:\x2070'+_0x47ada5(0x468)+_0x47ada5(0x575)+'\x20poin'+_0x47ada5(0x300)+_0x47ada5(0x1a8)+_0x47ada5(0x583)+'btn:h'+'over\x20'+_0x47ada5(0x1e3)+'ter:\x20'+_0x47ada5(0x28a)+_0x47ada5(0x24f)+_0x47ada5(0x5a8)+_0x47ada5(0x37e)+_0x47ada5(0x1ea));window['addEv'+_0x47ada5(0x450)+'stene'+'r']('keydo'+'wn',_0x537def=>{var _0x611c48=_0x47ada5;_0x537def[_0x611c48(0x18c)]===_0x43725f['DfAwP']&&(_0x43725f[_0x611c48(0x4d1)](_0x611c48(0x2db),_0x43725f[_0x611c48(0x345)])?(_0x537def[_0x611c48(0x696)+'ntDef'+'ault'](),_0x13994()):_0x5a9e30(_0x4f2d3e,_0x22cf95,_0x3acc71,'shoot'+'ers'));},!![]);var _0x2e556b=document[_0x47ada5(0x27a)+_0x47ada5(0x23f)+'ent'](_0x47ada5(0x515));_0x2e556b[_0x47ada5(0x42c)]['cssTe'+'xt']=_0x47ada5(0x15b)+_0x47ada5(0x1c7)+_0x47ada5(0x335)+_0x47ada5(0x403)+_0x47ada5(0x305)+'ight:'+'12px;'+'z-ind'+'ex:21'+_0x47ada5(0x581)+'646;c'+'ursor'+':poin'+_0x47ada5(0x501)+_0x47ada5(0x3f5)+_0x47ada5(0x4a1)+'heigh'+_0x47ada5(0x304)+'x;opa'+_0x47ada5(0x1f2)+_0x47ada5(0x5fd)+'ransi'+'tion:'+'opaci'+'ty\x200.'+_0x47ada5(0x4be)+'inter'+_0x47ada5(0x1f3)+_0x47ada5(0x689)+'to;fi'+_0x47ada5(0x553)+_0x47ada5(0x322)+'shado'+_0x47ada5(0x588)+_0x47ada5(0x5ee)+_0x47ada5(0x22d)+_0x47ada5(0x308)+'07,15'+_0x47ada5(0x425)+'))',_0x2e556b[_0x47ada5(0x565)+'HTML']=_0x47ada5(0x35c)+_0x47ada5(0x586)+'ox=\x220'+_0x47ada5(0x62d)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x47ada5(0x597)+'c-1.5'+_0x47ada5(0x33a)+_0x47ada5(0x220)+_0x47ada5(0x298)+_0x47ada5(0x60f)+'.5\x201.'+_0x47ada5(0x68a)+_0x47ada5(0x3ae)+_0x47ada5(0x331)+'\x204\x204.'+_0x47ada5(0x3e9)+'-2.5\x20'+'5-4\x207'+_0x47ada5(0x1d4)+_0x47ada5(0x168)+_0x47ada5(0x5ae)+_0x47ada5(0x22b)+_0x47ada5(0x2e8)+'#ff6b'+'9d\x22\x20s'+_0x47ada5(0x232)+_0x47ada5(0x3c6)+_0x47ada5(0x1ac)+_0x47ada5(0x3c2)+'ke-li'+'necap'+_0x47ada5(0x248)+_0x47ada5(0x29e)+_0x47ada5(0x232)+'-line'+_0x47ada5(0x67f)+'\x22roun'+'d\x22/><'+'circl'+'e\x20cx='+_0x47ada5(0x4bd)+'cy=\x221'+_0x47ada5(0x1e6)+_0x47ada5(0x622)+'\x20fill'+'=\x22#ff'+_0x47ada5(0x543)+_0x47ada5(0x318)+_0x47ada5(0x3fd),_0x2e556b[_0x47ada5(0x4a3)]=_0x358540['JzAam'],_0x2e556b[_0x47ada5(0x465)+'seent'+'er']=()=>_0x2e556b[_0x47ada5(0x42c)][_0x47ada5(0x469)+'ty']='1',_0x2e556b[_0x47ada5(0x465)+_0x47ada5(0x29f)+'ve']=()=>_0x2e556b[_0x47ada5(0x42c)][_0x47ada5(0x469)+'ty']='0.5',_0x2e556b[_0x47ada5(0x54d)+'ck']=_0x5266fb=>{var _0x3fac59=_0x47ada5;_0x5266fb['stopP'+_0x3fac59(0x45a)+'ation'](),_0x13994();},document[_0x47ada5(0x479)][_0x47ada5(0x4f0)+'dChil'+'d'](_0x2e556b),_0x358540['xbSBD'](_0x133c56),_0x358540['yWCCi'](requestAnimationFrame,_0x16c86c),console['log'](_0x358540[_0x47ada5(0x64b)],_0x27a6a5[_0x47ada5(0x258)]);});})()));function _0x6539(){var _0x59d829=['rfDVEu8','rgfTywC','BM9Uzq','C2f2zq','zxG6ide','EgvZige','DhjPyNu','zhrOoIa','rK5PrMy','DMLZDwe','D2fPDgK','sw5ZDge','u2TPChm','EKHnqLq','nsaWlti','C2HVD24','zgv2Awm','s2LSBgu','qLHfyvi','Fdf8mhW','w3nHA3u','oIa5oxa','zenOAwW','zNvSBhm','zg93BIa','A2v5C3q','tKCGlsa','ChflBgC','ztOGBM8','BwuG','r3jHDMK','DgLMEs0','vxrSDuS','iJeUnsi','s2fosvK','ktSGy3u','B3jKzxi','t21wwha','ywnRz3i','Fdn8mhW','CMvMAxG','Cg9W','Dg9Y','CMeTA28','idaGmJq','vwLrt2S','ys1JAgu','y2TNCM8','CIGTlxa','CZPUB24','oIbYAwC','oIaWoYa','nYWUmsK','C2HVB3q','rw5NAw4','y2f0','CMfUz2u','C3bLzwq','u2fRDxi','ANvTCfa','CIiSici','BfjHDgK','DgvTCgW','txn6tvq','Bg9YoIa','vefiEhy','rgrxsxe','zZOGnNa','v2LWzsa','wvjlsKC','Dw5Kzwq','BIb7igy','oYb3Awq','EKLAuMy','vMnLwxi','yxvSDa','nMvLzJi','DdOGmZq','psiJzMy','C2STzMK','C2v0sxq','lc40nsK','Acb7iha','yY0XlJu','vufuAvy','mJuPoYa','mcWWlJu','u2nHBgu','Ag9VA1a','igP1Bxa','ie92zxi','mJqYlc4','idaGmca','igXLzNq','icnMzMy','ELLfqvG','y0PMrM0','uhPQuKK','y2fWtw8','oYbMB24','Ag9ZDg4','C2v0qxq','vvjbx0S','shbnr0m','idjWEdS','oIaXnha','BM93','C0rXBwm','qxnZzw0','Dujpsw4','zMLUza','uuHYwvi','BgLJyxq','BgfIzwW','z2H0oIa','CMLKoYa','oYbVDMu','CMfWAwq','EsbKyw0','y2TLzd0','BMv2zxi','zgvZyW','rKL0B0y','AvvmqKS','s3vVwvG','rxvdweW','AM9PBJ0','Bu5ivwC','BhrOlca','Axr5oIa','EhvIsuu','mNb4oYa','lIbvC2u','CIbHzhy','nsWYntu','ienquW','Dhm6yxu','oc00lJu','BIb7igi','Ae1WsMu','B29Rihi','ktSGFqO','BNrLCJS','ugHAsge','BMq6ihq','CwPrug4','BgLUzw4','oYb0CMe','oIbIBhu','ChjLDMu','zwXK','z2LMEq','CJSGzM8','BsbSzwy','s2v5ra','ifvxtuS','y2vZlG','A2uTBgK','zwTbzLq','q29SB3i','Cg9ZAxq','mhb4oYa','D2fYBG','qsblt1u','lw5VDgu','Dgv4Dem','rgLZywi','uMvJB2K','igv4Axq','sK9Lwey','C3rLCa','lwrPCMu','zxjYihS','zMLSBd0','B3jZige','oIbYz2i','nsKSida','mNb4ihu','y2fUDMe','Ec1ZAge','ndGZnJq','rfzXvhi','Aw5Mqw0','zwfKB3u','Awy7ih0','iezPCMu','B25Xzwq','AxnPyMW','s2v5C3q','nhb4oYa','zMvvwxO','yJPOB3y','DMfS','mNWXmhW','DgLVBJO','zw50oYa','ys5RB3u','y2HLy2S','zIXZExm','rwXLBwu','kdi1nsW','Aw9UlLq','C0HVsem','DunTqKC','y2fWu2G','ztOGmtm','DhLqy3q','wNn0z2y','DhjHBNm','y29Kzq','mNmSigi','lxjHzgK','qxbWBgK','wKn0uMS','CMrLCI0','zxmGB24','iL0GEYa','ywrK','vMfSDwu','C2L6ztO','mNb4ksa','AxnPq0m','DdSGFqO','DgvJDgK','uvLcBMW','D2vIA2K','yNv0Dg8','y29SCZO','yxjNzxq','mtq1ndi0yvf3zuPp','A2DYB3u','ufPgrvq','igfUzca','EYbJB2W','ns00idC','lxnSAwq','wfHkzNy','FqOGica','oIbPBMG','q3jVC3m','BgfJzs0','Ad0ImIi','igjHBIa','q2H3rwm','A3ndChm','zhvhv3m','Aw46ida','mNWWFdq','C21HBgW','rKryufu','rM9Yy2u','rxHW','jsbUBY0','BhDwDfG','ywqGD2G','z3jHDMK','Bw4TDgK','ysblB3u','Aw9U','mdCSmtu','CM9UzYa','AfTHCMK','zvzHBhu','ztOGmtC','CMvHzey','yMvNAw4','C2v0','C2STCMe','Aw9UoMy','mdbTCY4','uKvczfa','zMLSzw4','ig5VBMu','thzpwvm','oIbWB2K','ugf0Aa','ndiSlJG','zs1PDgu','ChGGmdS','serlwMy','y2XLyxi','lJv6iIa','r0XMEwm','ywrKAw4','AxnWBge','CMfUy2u','B2X1Bw4','CgTSt0O','rKzYwgO','x19tquS','CY1Zzxi','FdeYFdu','ihrOzsa','s29tDgq','ihn5C3q','mdi1ktS','EYbMAwW','z2uUiei','ida7igi','mciGCJ0','DMfSDwu','ihWGBw8','DcWGCMC','icaG','C3rYB2S','BI1SB2C','u2HHCNa','B3zLCMW','zeTkyMW','Aw4GC2e','ig5LDMu','y2L0EtO','lwv2zw4','y2XOsgu','y2XHC3m','BwvsDw4','ig1HEsa','nsK7igi','tu9ersa','wKfcCfC','idmWChG','lJuGms4','C2STBge','B2LS','Bw92zq','D2vPz2G','AwvKigm','zNbZ','yuTVDxi','u2L6zq','oYbQDxm','lxrPDgW','CYbZChi','BgXIyxi','Cg9PBNq','Aw5NoIa','yM9Yzgu','mwzYksK','DgHPCYa','uIb2ms4','BhmGDgG','ihSGzM8','zw50CW','qMXVy2S','yxK6igy','u3bHy2u','AxrLBxm','BgvZiem','AwrLCJO','CIGYmNa','rwHru3e','ihWGC2G','sK1UD2y','sgXJrxe','BNPOEeK','Bgf5ig8','zZOGmta','nc00lJu','qNvUBNK','tM8GuMu','sLrLqve','DgG6ida','yw5Jzs4','q0L5u2S','BhrO','j3qGC3q','mcuUifm','BwLU','iIbZDhi','yMX5lum','CMDIysG','Dg9Nz2W','ig5VigG','yxrLlwm','yxrSEsa','DhjVA2u','oYbIB3i','zuv4Ca','uM1hzfO','BNrezwy','DdOGnNa','CM91BMq','EdSGyM8','sfrnta','z2jHkdi','AxPLoIa','B3rZlG','Ew5HqLK','zuvSzw0','BtOGmJq','y2LYy2W','De5Vzgu','igv2zxi','yxjPys0','Aw4TD2K','mtGGnIa','y29TCgW','psjYB3u','lxnOywq','rgfUz2u','DLPjyNC','lNnRlw0','x19ZywS','AY1IDg4','Dg5LC3m','lc43nsK','zxi6oI0','BMq6ihi','t1nOB28','zgvYlxi','yw5ZzM8','zxiGC2W','B250lxC','DxDTAW','DhrPBMC','DgXL','uuP4Cuy','ldi1nsW','BMDL','zxzWrLi','yxrLkde','BMvHCI0','yNvftuC','AuX1qwG','Bhv0ztS','lwLVxYO','igzPBgW','y29SB3i','BMnL','CMvSEsa','AxrSzsa','lc4WnsK','ihSGCge','DdOGnZa','zwvMmJS','zgL1CZO','vg90ywW','yMX1CG','odbWEcW','DdOGoha','BM9UztS','CLnvBhi','lM1Ulxq','ExzrB0e','AdOGmZq','v0fttsa','DgvZDa','y3jLyxq','y3nZvgu','z2njr0i','zMLSBa','C2HPzNq','s2v5vW','ChG7igi','CfrpzeO','Ec1KAxi','ie1VDMu','B25PBNa','vgf4AfC','CYbHBgW','CZOGy2u','CM9Wlwy','idrWEdS','yNjPz2G','AwXnB3q','y3qGB24','B3vUDc4','qNPVrMS','C3rPBgW','yMLJlwi','Bw14rMm','Aw5KzxG','zw0TDwK','B3G9iJa','Ewjnywm','ihrVCdO','oYbYAwC','ltqTnY4','Bg9Hzgu','Dg9WoIa','EfbUCK8','D0TYAei','wfPeshq','BMqIihm','C2vSzwe','C2fRDxi','yM91BMq','EYbKAxm','Bw4TDg8','ChG7ih0','zLfVtLG','AKD4sxm','BwvZC2e','rNjHBwu','mZiYDgDpuePy','Bw92zw0','yxKGB24','mcaXChG','uevzD3u','BI5MAxi','sgvPz2G','BK1YAxq','zxjZ','tMv0sKO','yxjlr1u','C2STDMe','tuj3z3q','y3jLzw4','DMvTzw4','zg9JDw0','ndHWEcK','Aw5WDxq','EeL2qu8','rMLLBgq','ChzrzKm','BgW+','BwLZyW','CM9Szq','BJOGy28','zsb7igy','Dxm6idi','uMfWAwq','mJqWiey','vLrnvMC','z1rsywS','B2nRoYa','B29RCYa','CgXHEtO','rLf3Cw0','oYbHBgK','D2LKDgG','C3bHBG','Bg9Hzhm','kdi0nIW','igf1Dg8','yMTPDc0','CgfJAxq','zguSihq','zJmY','Dc1ZBgK','zMPJzNe','mxb4ihi','AY1Jyxi','B3b0Aw8','qMHvr20','y29PBa','B2X1Dgu','DwXxyxe','Ehrnvfa','uK1c','ysGYndy','EMrLwM8','CwvYAM8','CJOGi2y','EfPAuK8','lxK6ige','CvrVy1O','B2TLpsi','Bxm6igm','phbHDgG','zxrLy3q','CZOGoha','r29Kie0','nsWUmdC','i2zMzG','CLncEfO','vgLJAW','uJOG','DgLVBI4','mxb4ida','zxiTzxy','ldiZocW','ohG5mc0','lM1Ulxm','u0fgrsa','CuLXB20','ide0ChG','igjVEc0','q3vZDg8','B3C6ida','C2HHzg8','DgvYoYa','zdOGi2y','BLnYBuy','zgfTywC','DdOYnNa','mNb4o3i','Eu5gEfO','r1DdwNG','mJu1lde','mtjWEca','Bg9NBY0','CLnvtLm','ihWGz2e','igq9iK0','Bw4TC3u','Dhrzs1O','CZOGyxu','z0DfuLu','Ahq6idi','uevLuK0','s3POs28','nZaWia','CMvHzhK','vKvYwNe','lZ48l3m','CNjVCG','lwL0zw0','Aw5JBhu','l3jHCgK','lwXPBMu','zunTthy','EYbSzwy','uNvUDgK','z3jHzgK','zhjVCc0','nxb4oYa','nIaXoci','iNrYDwu','CI52mq','BNrLBNq','CYbLyxm','B25JAge','lxnLCMK','B3n0zMK','DhLWzq','DNjsrgK','ntaLktS','D0jSDxi','BNqTC2K','nxm0idi','B3i6ihi','tNzABMu','AwXLzdO','AxHLzdS','mJvWEdS','sxnhCM8','oYbJB2W','s0nMzMy','ltiUns0','zdSGyMe','yw5Uywi','Dc1Iywm','yxjLBNq','ihjLBg8','Bgv4oYa','AgvSza','tKCG4Ocuia','zw51ihi','igDHDgu','ufbLEeW','BgLNBG','se9lqvy','ChbLyxi','CgfYC2u','lNnRlxm','lc40ktS','zM9YBxm','qKrtEe0','yxbWzwe','oIa1mcu','zxqGmca','B24Oks4','C2v0ida','yM90Dg8','tuDpC3G','i2zMyJm','zxzLBNq','sw5Nugq','y2fSBa','zvn0EwW','sNvTCca','AxvZoIa','phn2zYa','zgLUzZO','CMDPBI0','mJm4ldi','BI1ZDwi','igvYCG','uhLVBfG','A2v5zg8','igjVCMq','DLnduMq','tgvMDca','Bg9JAW','wwzWtg0','yMeOmJu','ywiUywm','zvbSDwC','zgTPDa','qwXxDhm','ufmGDw4','BYb0Agu','zsGXnta','Ag9VA3m','ih0kica','BM9szwm','zMXLEc0','igHVB2S','zM1qBKu','D1bzsuK','y29TyMe','CI51As4','Bgu7igy','zvHuv3a','mJSGC3q','BxKGC2u','oYb9cIa','idi0iIa','ocKPoYa','zwfK','D2HLCMu','zgLZCgW','Dcb7igq','igrLzMe','BLbSyxq','BMvJyxa','oIaXms4','zsbBrvG','quHyAum','nNb4oYa','uMf0zq','lM1Ulxa','Dg9Wrgu','ide7ig0','z3jPzc0','z29K','CdOGmta','y2uGB3y','oIa4ChG','Bw8GDg8','tw92zw0','ntuSmJu','oMHVC3q','twnjBfi','C2fMzq','y2n1CMe','iNjVDw4','CufPBwO','B1nWt3K','ywqGEYa','AwvZlG','sLPdEe4','nZaYAg1ougfo','D3LjAeC','wg90CLC','v2vHCg8','cIaGica','i2zMzJS','wLPRrg0','s3vMEeS','Bg93zxi','BhvTBJS','yxjKlxq','yxrPB24','idqTnc4','vw5PDhK','qNLjza','u2vNB2u','A291CI0','C2STy3q','BguGC3q','z2DSzwq','B3nLihS','BNnSyxq','ndqWnJvLzvbeB0C','mdSGyM8','CZOGmty','Bwf4','ztSGyM8','Dw5KoIa','BxbiD2m','yxa6ihi','CM0GlJq','lxnPEMK','ihn0CM8','qLbnDhu','BMu7ige','ndySmJm','lxDPzhq','mhG2mda','zNvHrfi','zwjRAxq','Aw4Sihq','zhbY','uvf3BeC','icaGica','mdSGFqO','Bg9Y','mdb2DZS','C2STy2e','CMvUDem','y3jVBgW','BhKGkhi','mtbWEdS','z2v0sxq','sNvTCfq','ihrVide','nxmGy3u','uMDHwLC','CMzSB3C','C2zVCM0','ENzhwxK','CKPZAxG','EdSGywW','ywXPz24','oIbJDxi','zs5bCha','q291BNq','ywrIBg8','Bcb7igq','As1TB24','BgvMDa','igvMzMu','nwmWidm','lwfWCgW','EYbIB3G','yvzpuMm','Dvv5C0e','Fdf8oxW','ysGYntu','B250zw4','ywvdAgy','zwXMoIa','ywDLigq','mta1nZa0n3byCgzPBa','Awr0AdO','rNbyv2e','EdSGAgu','zK1zz2u','y3vYC28','zuzmyKW','DtmY','oYbIB3G','DMC+','mhGYnta','lxnHBNm','ifvUAxq','EcKGC2e','A2rYB3a','Dg9WoJe','BNq6igm','BwLKzgW','oYbWywq','A1L2tM4','DgLKzs4','ihWGrvi','A01myvm','y2vUDgu','idmYChG','BMf2','qNDXCuC','zxHgsey','zM9YBtO','BNbyr2u','oYbIywm','CLjNwKe','yMHVCa','AhvTyIa','D0nVBg8','DMu7ihC','y3jVC3m','Aw1Lihm','zg93oIa','C2u6Ag8','BMLUzW','mtu3oda1ntbyCfLkqKW','Be1kAwS','DhLSzq','Dc1ZAxO','C3rVCfa','zcWGi2y','CgfKzgK','sLrYBxK','nYWWlJC','t3zwsw4','Cfzmy0S','y3rPB24','AcaTidq','AMzRExO','iokaLcb0zq','C3r5Bgu','zsbJEd0','zM9UDc0','AtmY','icbIB3G','DxjZB3i','zg93BG','ifjLy28','y2HPBgq','CeL6qMu','Bgf0zwq','pc9ZBwe','yxK6igC','yw5LBc4','lcbJywW','yxnLBgK','icaGlM0','D1H3C3K','mJn8mtK','BM90zs4','ugn0','vwzVC1m','EhflCKG','AguGzNi','nJiWChG','zsb0CMe','Bgv4oIa','wNnLvgy','tgLZDa','EMu6ide','Cc1ZAge','u2rzseO','igjHBM4','vKnIqwy','sw5PDgK','mtu3lc4','zw50tgK','q2XVC2u','lK92zxi','zxjYB3i','Chf5sgu','zw9nqM8','CMXHEsa','C2vYDMu','lxbHCMu','nNb4idK','CM9WywC','C3rLBMu','C3DPDgm','y1f6rLG','BNrLCI0','ChGGDwK','vvDnsW','z3jVDw4','z3jPzdS','C09Jq3m','CMvZDg8','B25TB3u','vMLZDwe','oIaXoYa','mdSGy3u','B3bHy2K','sgTMz3y','sg54Ahi','ywrKrxy','C3rHCNq','Dgv4Dc0','zw50rwW','q3HTDuu','C3rYB24','AxmGAg8','D3DNr0m','zMXLEdS','Aw9F','igfWCgW','v2zrA3y','AwX0zxi','yM9KEq','ihrOAxm','zgrPBMC','zw4GDg8','ohb4oYa','u3rzEfa','re9nq28','Bw4TC2K','oJiXndC','BMCGzM8','mtSGBwK','lcbZyw4','zwn0Aw8','ChG7cIa','Dg9W','mhb4lca','idi0iJ4','igfSAwC','AxrLiee','Ewz5rKC','iduWjtS','B2fKzwq','rxn4wgm','Cg9Uj3m','yxbWBgK','zwLNAhq','B2rLu3q','s09SsKu','uuj3tfu','AwfODe8','AgvPz2G','CIb2ywW','BtOGnNa','zvbSyxK','zgvYlxq','lNnRlwy','EuvUz2K','yw1Hz2u','mNb4ide','oJa7D2K','mJzWEdS','B3i6icm','DgL0Bgu','mcWUntu','khjLBg8','BI1TywK','zMLLBgq','BsbJzw4','B3nLihm','qM90Dg8','Dhj1zq','lca1mcu','DMCGEYa','BMC6idq','zxi6igi','Ec1OzwK','DZOGAw4','vxDcC1q','Bgf5oIa','BgLNBI0','BMqGBwe','y29UDgu','DgXPBMu','zxnJ','yw1L','sevht1C','igjHy2S','ltjWEdS','iJeYiIa','mNm7Cg8','EYbMB24','C2v0vhi','AwrLihS','C2v0x3q','Aw9FnZi','icnMzJy','yvz1Cwi','zw50','AhjVDwC','wxjXwu0','CJOGCg8','DxjDigG','B250lxm','qwrIBg8','zxPKyLC','CMvU','mxb4oYa','ihSGywW','vgf4Axu','zxzLBIa','oYbVCge','vLfdvum','DxjH','ig9Wywm','zxjZy3i','vxLyAgm','zJzIowq','DhjHy2S','ChG7igy','ocWYndi','vwz4ve4','zxH0','ifvjiIW','C3bSAxq','z1bXBvK','DhjPA2u','sMvcwMm','icaUBw4','BgfZDeu','oJa7EI0','Awr0Aa','ig9U','EtOGmdS','mtfWEca','AwXS','uMvJDa','D0Tfqxe','oIbZDge','icmYmJe','yxbWzw4','CvzNv2i','Bw9fEha','igrPC3a','AwDODdO','q29TyMe','zsWGDhi','swyGCMu','igXLyxy','A2vizwe','y2HdB2W','vNH5zfa','v2LKDgG','oIaJzJy','igrHBwe','ihnOB3q','CM9ZC2G','DgvYo3C','sNDmDNq','CdOGmti','l1jnqIa','tMfTzq','zervzhu','Bw4TBwe','ywqGDg8','lwjVEdS','BMC6igi','nhzIq2zSCW','Be1VDgK','igzVBNq','yJLKoYa','lwjHBNi','ignHy2G','u3rHDhu','ywn0A0S','ihjNyMe','oIaZChG','zgL2','C2f0Dxi','sgLKzxm','DMG7EI0','zxjSyxK','BI13Awq','ChvZAa','mcWWlJC','Aw5Zzxq','vhLnDMm','m3W1Fdi','DuDMDNa','yMfJA2C','lJa4ktS','BNqGAge','Bw4TDge','mJu1ldi','Bg9YihS','ignVBg8','C2vSzwm','EMTcsxO','CIbNyw0','zMLSBfm','ntuSlJa','CM9Rzxm','Bw4Ty2W','icaGic4','CJSGz2e','u2fMzxq','CZO6lxC','vvDnsYa','lsbVDMu','tfzTDfe','DgnOoJO','y3zOwuO','Dw5RBM8','ihSGD2K','ywXSihq','BNnPDgK','AwvSza','qxnZvxa','B3vUDgu','BgLUzvC','zgvZ','BguGAwy','mJGXntyWmezgvvzWrq','nMi5zci','zvbPEgu','z2v0','Fdr8mxW','ihbSywm','iKLUDgu','u2v0r2e','ywz0zxi','BLLvD3q','DhmGCgW','B25JBgK','y1jTwNO','Fde1Fde','BgLUzvq','lMrSBa','EKjXzwm','BhrLCJO','DMvYBge','CgvHDcG','BdOGBM8','B2r5','4Ocuig5Via','B24U','yxrLvge','ocK7ih0','i2zMnMi','tgXPANi','wunZwKS','oIa0ChG','ldePoWO','ywrPDxm','CYbnB3y','m3W5FdC','BcbKCMe','Aw5Uzxi','oIbJzw4','t3zLCNC','DMLHifm','ihbVC2K','AxrPywW','q3jiwvu','sxvqvvK','lwnVBhm','ndaXotyYnuX3ugTPCq','BgvUz3q','oI13zwi','BNnLDca','zw1LBNq','Dw5PDhK','oYbOzwK','CNnVCJO','C2STy28','oIaYmNa','kg92zxi','v3jHCha','s09Vvfe','ohWWFdC','mJu1lc4','DwX0','ida7igm','CKjovui','icaUC2S','ndC0odm','mJiSocW','ic5ZAY0','Dgv4Dee','y2vSzxi','DMLLD0i','BI1JB2W','DYGWida','zw5HyMW','zciVpJW','A1DrCNa','zsb2ywW','r29Kl2q','z2fTzuW','CMqTDgK','BKLbyvK','ihSGzMW','ltiUnsa','t1vsx18','EdSGFqO','EvDdq2K','mNWXFdq','mtiGmJe','zxjZihq','rezMwu0','rLbtigm','z24Ty28','yxa6idG','Dc1Myw0','y2HtAxO','ig1HCMC','zhrOoJe','Ag1VC0S','u3bLzwq','zMLSBcW','CI1Yywq','B246ig8','B1L5B0G','zfHkzvO','kdeUmsK','AwXKigG','BMu7ihm','B3vUzdO','FdeYFde','B290zxi','iM5VBMu','idGWChG','ieaG','lxnJCM8','CYbpDMu','ChG7igG','B0TvA3C','DNCGlsa','oIbUB24','BMuUqxa','Dgr1uM4','AgfPCG','CMqTAgu','BgLKzxi','zg93kda','CgfYzw4','DgG6idi','zw50CZO','Cwv3y2W','zgfsq0u','icaGlNm','qvf2vwy','Axb0kq','mtqXmJm0wwfZvwr4','C3rYAw4','Aw9FmZa','mtrWEdS','ndSGFqO','qMTQsK0','CKfjD20','zwCGzMe','C2fMzu0','EcaWoYa','DwXksKG','Bw91C2u','DgHIDge','AgfZ','C3bSyxK','DgL2zsa','B3vUzca','Bg9HzgK','zM9UDa','ohb4ksK','BNrLEhq','B2rL','CMfPC2u','EeLcthO','lc4WncK','DgvTlxu','AguGDxm','mZuSmJq','B2XVCJO','BM9tChi','r1vAEg8','DdOGnJa','tuLtu0K','y3K9iJe','CMfKAxu','t1DKB0G','BMq6icm','zKjxAvi','phnTywW','Bw92zvq','DxjKCM4','idrWEca','v3rNEhu','BY1ZDMC','vgHLC2u','CNvpDvi','DgvY','igzSzxG','ywn0Axy','zMLSBfq','EdSGyMe','zsb3zwe','Euv5r2u','B25SEsW','CufjCee','v2vItw8','mc41o3q','igfIC28','tgvNAw8','reT2rxe'];_0x6539=function(){return _0x59d829;};return _0x6539();}
