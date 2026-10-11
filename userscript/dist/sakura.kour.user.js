// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.8.0
// @description  Sakura menu for KourStrike.io — combat/movement/visuals over UWMK hooks + overlay
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
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
function _0x58ee(_0x3a81d4,_0xa6515e){_0x3a81d4=_0x3a81d4-(0x667+0x9b3*0x1+-0xf67);var _0x41267e=_0xe106();var _0x412225=_0x41267e[_0x3a81d4];if(_0x58ee['zNMQsz']===undefined){var _0x5972e2=function(_0x2a7ac5){var _0x4efef3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x99e305='',_0x226d20='';for(var _0xf74625=0x1*0x22c7+0x1993+-0x3c5a,_0xb16315,_0x3a90c2,_0x270b31=0x7d*-0x8+-0xff*-0x1+0x2e9;_0x3a90c2=_0x2a7ac5['charAt'](_0x270b31++);~_0x3a90c2&&(_0xb16315=_0xf74625%(0x1e81+0x2c+0x2f*-0xa7)?_0xb16315*(-0x17f8+-0x2*-0x1309+-0xdda)+_0x3a90c2:_0x3a90c2,_0xf74625++%(0x35*-0x7+0x26f+0x2*-0x7c))?_0x99e305+=String['fromCharCode'](0x89*0x17+-0x1471+0x921&_0xb16315>>(-(0x12d*-0x11+0x5ff+0xe00)*_0xf74625&-0x1c11+-0x9a5*0x1+0x25bc)):-0x3e*-0x2e+-0x9*0x3f9+0x189d){_0x3a90c2=_0x4efef3['indexOf'](_0x3a90c2);}for(var _0x22103c=-0x5f0+0x9f*-0x25+-0x1*-0x1ceb,_0x41d3f3=_0x99e305['length'];_0x22103c<_0x41d3f3;_0x22103c++){_0x226d20+='%'+('00'+_0x99e305['charCodeAt'](_0x22103c)['toString'](0x10a*-0x4+-0x24cf+0x2907*0x1))['slice'](-(0x17e7+-0x1dfd+-0x3c*-0x1a));}return decodeURIComponent(_0x226d20);};_0x58ee['WLswIu']=_0x5972e2,_0x58ee['QaAXWE']={},_0x58ee['zNMQsz']=!![];}var _0x2cedd4=_0x41267e[0x884+-0x397+-0x61*0xd],_0x13dc5c=_0x3a81d4+_0x2cedd4,_0x38b3b9=_0x58ee['QaAXWE'][_0x13dc5c];return!_0x38b3b9?(_0x412225=_0x58ee['WLswIu'](_0x412225),_0x58ee['QaAXWE'][_0x13dc5c]=_0x412225):_0x412225=_0x38b3b9,_0x412225;}(function(_0xda3f0a,_0x1677ca){var _0x40d2cd=_0x58ee,_0x17f652=_0xda3f0a();while(!![]){try{var _0x45b426=-parseInt(_0x40d2cd(0x1c8))/(0x26cc+-0xea0*0x2+-0x7*0x15d)*(parseInt(_0x40d2cd(0x3af))/(-0x19b5+0x21f3+0x20f*-0x4))+parseInt(_0x40d2cd(0xf0))/(0xce8+-0x669*0x1+-0x67c)*(parseInt(_0x40d2cd(0x62d))/(0x61d*-0x1+0x1*0x1e13+-0x5*0x4ca))+parseInt(_0x40d2cd(0x465))/(0x63b+-0xec1+-0x1b*-0x51)+-parseInt(_0x40d2cd(0x133))/(-0x119*-0x1+0x2444+-0x2557)+parseInt(_0x40d2cd(0x10d))/(-0x2*-0xb66+-0x219b+0xad6)*(-parseInt(_0x40d2cd(0x49d))/(0x5*-0x46a+0x1f14+-0x8fa))+parseInt(_0x40d2cd(0x1f3))/(-0x631*-0x4+-0x1738+-0x183)+parseInt(_0x40d2cd(0x1fd))/(0xa65+-0x186f*-0x1+-0x22ca)*(parseInt(_0x40d2cd(0x373))/(-0x2652+-0xdd9*0x1+0x3436));if(_0x45b426===_0x1677ca)break;else _0x17f652['push'](_0x17f652['shift']());}catch(_0xa0b6c6){_0x17f652['push'](_0x17f652['shift']());}}}(_0xe106,0x6e92+-0xaf03b*0x1+0x166a6c),((()=>{'use strict';var _0x591eef=_0x58ee,_0x30189c={'SHcEq':_0x591eef(0x447)+'wn','GBDZN':function(_0x4dd51d,_0x10ef94){return _0x4dd51d+_0x10ef94;},'xbyBQ':_0x591eef(0x5b2),'iwyyb':function(_0x42e51e,_0x47c011){return _0x42e51e(_0x47c011);},'TnBfq':_0x591eef(0xed),'yQvuD':function(_0x390c4c,_0xd87d29){return _0x390c4c===_0xd87d29;},'uxckf':'movem'+'ents','HdTpr':_0x591eef(0x4af)+_0x591eef(0x55a),'OpTLq':_0x591eef(0x5e5),'bjARg':function(_0x3b9ee0,_0xc7b75a){return _0x3b9ee0!==_0xc7b75a;},'OtrJK':_0x591eef(0x21c),'AUPGh':'set_t'+_0x591eef(0xe3)+_0x591eef(0x325)+_0x591eef(0x615),'eNikz':_0x591eef(0x15a),'nnGpT':'LijmA','TTRon':_0x591eef(0x658),'aAfkS':function(_0x3f7cd0,_0x2d42ad,_0x3164f0,_0x2ef6a2,_0x3160a9){return _0x3f7cd0(_0x2d42ad,_0x3164f0,_0x2ef6a2,_0x3160a9);},'jfaPw':'mouse','fZIqI':function(_0x5e9aae,_0x52bf86){return _0x5e9aae!==_0x52bf86;},'xXoQM':'NYjdN','FNELv':'[saku'+'ra-ko'+_0x591eef(0x20f)+_0x591eef(0x103)+_0x591eef(0x2b6)+_0x591eef(0x39f),'Vqels':'1|5|4'+_0x591eef(0x533)+_0x591eef(0x155)+'|0|3','vBbJS':_0x591eef(0x250),'KxKUb':function(_0x4ddb4a,_0x37ceac,_0x2e97c0){return _0x4ddb4a(_0x37ceac,_0x2e97c0);},'YwHZD':_0x591eef(0x41f)+_0x591eef(0x357)+'R\x20v1.'+'1','chttc':_0x591eef(0x5f7),'pdLJC':'\x20FPS','VCWUB':'ypPhI','lcZbM':function(_0xbbbed4,_0x1e4e41){return _0xbbbed4<_0x1e4e41;},'BRXzl':function(_0x5207b9,_0x31bb19){return _0x5207b9===_0x31bb19;},'uggPn':_0x591eef(0x1fe),'hFKbG':function(_0x18d64a,_0x54c05f){return _0x18d64a+_0x54c05f;},'QrCUt':function(_0x2d6c9d,_0x349a0a){return _0x2d6c9d+_0x349a0a;},'tSNxi':'0\x20hoo'+_0x591eef(0x317)+'med\x20('+'all\x20o'+'ff)','edRYK':_0x591eef(0x657)+'ng','GjaFO':_0x591eef(0x15f),'cgnhP':function(_0x224707,_0x25ec69){return _0x224707===_0x25ec69;},'TiKPa':function(_0x41b381,_0x4db334){return _0x41b381/_0x4db334;},'HaDwT':function(_0x57592c,_0x56dba5){return _0x57592c/_0x56dba5;},'NpLHl':function(_0x300abe,_0x240edb){return _0x300abe(_0x240edb);},'KEngu':function(_0x8989c0,_0x36429a){return _0x8989c0!==_0x36429a;},'PGlXW':_0x591eef(0x2e2),'wJFll':function(_0x205db2,_0xbdf011){return _0x205db2!==_0xbdf011;},'mtjWB':_0x591eef(0x1d0),'bRvEe':'1|3|5'+_0x591eef(0x41d)+'0','EIIvz':'f32','DCTXg':function(_0x22e153,_0x449f87,_0x40d6e6,_0x3e53e3,_0x54f373){return _0x22e153(_0x449f87,_0x40d6e6,_0x3e53e3,_0x54f373);},'Hhwzc':function(_0x5410f6,_0x422a79){return _0x5410f6!==_0x422a79;},'jFQKD':function(_0x343652,_0x2af7db){return _0x343652!==_0x2af7db;},'DtiTb':function(_0x2746d6,_0x3b1b85){return _0x2746d6<_0x3b1b85;},'qwdUR':function(_0x99fb04,_0x209544,_0x5b36dd){return _0x99fb04(_0x209544,_0x5b36dd);},'CCdzN':_0x591eef(0x52d),'tEZxY':_0x591eef(0x52f),'cxhVD':function(_0x2cf704,_0x20a9a6){return _0x2cf704===_0x20a9a6;},'ipVrU':function(_0x18e7f9,_0x3d1a16,_0x9d8295,_0x4e5e1a,_0x5a6696){return _0x18e7f9(_0x3d1a16,_0x9d8295,_0x4e5e1a,_0x5a6696);},'dInwB':'VcxKk','GlvEW':function(_0x517e20,_0x329745,_0x100603,_0xe5852a,_0x281bc7,_0x36b44e,_0x1dba47,_0x45a4f4){return _0x517e20(_0x329745,_0x100603,_0xe5852a,_0x281bc7,_0x36b44e,_0x1dba47,_0x45a4f4);},'wtyCJ':_0x591eef(0x4d9)+'nPlat'+_0x591eef(0x2b8)+'.Over'+_0x591eef(0x424)+_0x591eef(0x563)+_0x591eef(0x502)+'on','usQCx':function(_0x570307,_0x101162,_0x4b4043,_0x380bb9,_0x457a3e,_0x270e84,_0xe02c16,_0x15640b){return _0x570307(_0x101162,_0x4b4043,_0x380bb9,_0x457a3e,_0x270e84,_0xe02c16,_0x15640b);},'qJsgI':_0x591eef(0x1d1)+_0x591eef(0x1ab)+_0x591eef(0x49f),'mLFHi':_0x591eef(0x1d4)+'ve','AkSMN':'Legio'+'nPlat'+_0x591eef(0x2b8)+_0x591eef(0x5b4)+_0x591eef(0x424)+_0x591eef(0x221)+_0x591eef(0x346),'wyvHN':_0x591eef(0x2df)+_0x591eef(0x60c),'HJdRf':_0x591eef(0x528),'QAqxK':function(_0x3b264a,_0x1344a6){return _0x3b264a===_0x1344a6;},'mHqsu':_0x591eef(0x4fa)+_0x591eef(0x5e8),'SAtVA':_0x591eef(0x172),'svIZI':'YXesi','AITMm':'lQsgH','aKGnp':'keyup','MzmpO':'mouse'+'up','AoEpa':function(_0x1bfce6,_0x2dcd8f){return _0x1bfce6>_0x2dcd8f;},'Qvafj':'compl'+_0x591eef(0x1fc),'VDBMM':_0x591eef(0x3df)+'ntent'+'Loade'+'d','iuaFM':_0x591eef(0x4fa)+'io_72'+_0x591eef(0x608)+_0x591eef(0x431)+'t','VSUxD':function(_0x3185fe,_0x25845d){return _0x3185fe!==_0x25845d;},'HRLUT':function(_0x11f002,_0x7a9993){return _0x11f002!==_0x7a9993;},'JymIG':'AvsQf','LsbgE':_0x591eef(0x11f)+'9d','VnsxR':function(_0x4028c0,_0x26c7cd){return _0x4028c0*_0x26c7cd;},'YkCsv':function(_0x2b88ad,_0x4a2ebb){return _0x2b88ad-_0x4a2ebb;},'MQxTr':function(_0x3b1c2b,_0x586aad){return _0x3b1c2b+_0x586aad;},'jJTQf':function(_0xb7438c,_0xe874d1){return _0xb7438c+_0xe874d1;},'tpLhM':function(_0x2ee266,_0x140471){return _0x2ee266-_0x140471;},'eoGQU':function(_0x2019bb,_0xbf041e){return _0x2019bb-_0xbf041e;},'qKktc':function(_0x4dc6fb,_0x42e481){return _0x4dc6fb>=_0x42e481;},'nprcC':function(_0x580f1e){return _0x580f1e();},'vGQZn':'3|0|4'+'|2|1|'+_0x591eef(0x2fb),'stBoB':function(_0x1f2c16,_0x18f0ae){return _0x1f2c16(_0x18f0ae);},'bpOFe':_0x591eef(0x53b)+'itch','kUXCt':function(_0x33c467,_0x3d9cff){return _0x33c467+_0x3d9cff;},'wjAgo':function(_0x442b5c,_0x477d99){return _0x442b5c*_0x477d99;},'XusdL':_0x591eef(0x610)+'l','Sajco':_0x591eef(0x163),'lXCYL':'sk-la'+'bel','GIqjZ':_0x591eef(0x653),'wseNI':'div','CFbMz':_0x591eef(0x207)+'te','PDCkt':'4|3|1'+'|2|0','nrfuT':function(_0x2167be,_0xd68a03){return _0x2167be+_0xd68a03;},'mmfag':_0x591eef(0x1f5)+_0x591eef(0x168)+'ad','pDahZ':_0x591eef(0xf9),'eylZt':function(_0x142a8e,_0x5df6ec,_0xed5c8c){return _0x142a8e(_0x5df6ec,_0xed5c8c);},'siCVb':_0x591eef(0x102)+'esc','ZBCDR':function(_0x344f62,_0x36dbdf,_0x9ae07a){return _0x344f62(_0x36dbdf,_0x9ae07a);},'ymAHJ':_0x591eef(0x3aa),'QqDkp':function(_0x4ae24b){return _0x4ae24b();},'NOBmT':'uzfak','fnclj':function(_0x44f1cf,_0x314591,_0x3326c0,_0x255e60,_0x59d023,_0x869f79){return _0x44f1cf(_0x314591,_0x3326c0,_0x255e60,_0x59d023,_0x869f79);},'ZHYFo':_0x591eef(0x352)+_0x591eef(0x31b),'bdElZ':'Skips'+_0x591eef(0x5a4)+'ilMot'+_0x591eef(0x3ac)+_0x591eef(0x243)+_0x591eef(0x580)+'\x20reco'+_0x591eef(0x3a0)+'rings'+'\x20neve'+_0x591eef(0x100)+'ance.','oMmyp':_0x591eef(0x3ea)+'s\x20spr'+_0x591eef(0x63f)+'nd\x20ma'+_0x591eef(0x585)+'ccura'+'cy\x20on'+_0x591eef(0x4a9)+'\x20weap'+'on\x20ev'+_0x591eef(0x1f2)+'00ms.','MmhwN':_0x591eef(0x31d)+_0x591eef(0x349)+'e\x20wea'+_0x591eef(0x39c)+_0x591eef(0x4c5)+_0x591eef(0x23e)+_0x591eef(0x312)+'\x20999\x20'+_0x591eef(0x1cd)+_0x591eef(0x4e7)+'s.','KIAGW':_0x591eef(0x1c4)+'loads'+_0x591eef(0x399)+_0x591eef(0x255)+_0x591eef(0x4a0)+'he\x20de'+'creme'+_0x591eef(0x558)+_0x591eef(0x34f)+'\x20else'+'where'+'.','ukPlS':_0x591eef(0x566),'LrBby':function(_0x3f95c3,_0x38ba20,_0x3d7cd2,_0x277774,_0x4df9b9,_0x14ed45){return _0x3f95c3(_0x38ba20,_0x3d7cd2,_0x277774,_0x4df9b9,_0x14ed45);},'ZBIln':'Speed','AujGf':_0x591eef(0x612)+'s\x20all'+'\x20four'+_0x591eef(0x5f0)+'ment\x20'+_0x591eef(0x5fe)+_0x591eef(0x49a)+'ts\x20pl'+'us\x20ac'+'celer'+_0x591eef(0x369)+'.','FeRjb':function(_0x45bac7,_0x238f7a,_0xebce76,_0x199d66){return _0x45bac7(_0x238f7a,_0xebce76,_0x199d66);},'ZsBYh':function(_0x3820c8,_0x2e14f9,_0x4c352f,_0x28fd49,_0x192add,_0x2c47ee){return _0x3820c8(_0x2e14f9,_0x4c352f,_0x28fd49,_0x192add,_0x2c47ee);},'jPdHj':function(_0x2dee75,_0x18acb9,_0x4b6a57,_0x124ee8,_0x794514,_0x2dc8ac){return _0x2dee75(_0x18acb9,_0x4b6a57,_0x124ee8,_0x794514,_0x2dc8ac);},'tbOPR':_0x591eef(0x454)+_0x591eef(0x302)+'vity','YZIlg':'Jump\x20'+'%','OHJVW':_0x591eef(0x3ec)+_0x591eef(0x60e)+_0x591eef(0x1a7),'PYtYd':_0x591eef(0x4f8)+_0x591eef(0x5f9),'gtWkQ':function(_0x3387f6,_0x595fb7){return _0x3387f6===_0x595fb7;},'XsrPd':function(_0x4c6595,_0x505684){return _0x4c6595!==_0x505684;},'zAxJN':'ewvua','DsiMT':_0x591eef(0x26b)+_0x591eef(0x31c),'mXpZq':'Posit'+_0x591eef(0x564),'HWffy':_0x591eef(0x2c4)+'m\x20rig'+'ht','LEBvs':_0x591eef(0x567)+'middl'+'e','lEVxR':_0x591eef(0x195)+'eadou'+'t','VVDdy':'Cross'+'hair','xbMBV':'Custo'+_0x591eef(0x540)+_0x591eef(0x127)+_0x591eef(0xba)+'air.','sErmL':_0x591eef(0x3b0),'Lzado':function(_0x47492a,_0x141e9d,_0x514bb0,_0x5698f7,_0x2ae094,_0x449390){return _0x47492a(_0x141e9d,_0x514bb0,_0x5698f7,_0x2ae094,_0x449390);},'GjWJz':function(_0x1906bb,_0x2f8021){return _0x1906bb(_0x2f8021);},'AGrZY':function(_0xd204fe,_0x1a3faa){return _0xd204fe===_0x1a3faa;},'ipAyj':'misc','UkgxG':function(_0x582eb1,_0x1dc1d0,_0x3e5c60,_0x186fe8,_0x3439a9,_0x3d7e0d){return _0x582eb1(_0x1dc1d0,_0x3e5c60,_0x186fe8,_0x3439a9,_0x3d7e0d);},'cWERF':_0x591eef(0x247)+'ck','HRdRu':_0x591eef(0x17c)+_0x591eef(0x18a)+_0x591eef(0x1cb)+'lay\x20o'+_0x591eef(0x25c),'kwjOP':function(_0x32ba52,_0x3878f9){return _0x32ba52(_0x3878f9);},'jkwvs':_0x591eef(0x2ca)+'risk\x20'+_0x591eef(0x340)+'hes','GlFBF':function(_0x3e8b3f,_0x259180){return _0x3e8b3f(_0x259180);},'BhKdd':'godDi'+_0x591eef(0x3cf)+_0x591eef(0x3e7)+'.Loca'+'lDie)','qsgUp':_0x591eef(0x494)+'eats\x20'+'work\x20'+_0x591eef(0x5ea)+_0x591eef(0x5bc)+'is','izBAr':'ACTk\x20'+_0x591eef(0x14b)+'r','zxLqu':_0x591eef(0x589)+_0x591eef(0x637)+_0x591eef(0x5ae)+_0x591eef(0x3f9)+_0x591eef(0x444)+'raise'+_0x591eef(0x322)+_0x591eef(0x65f)+'even\x20'+_0x591eef(0x2d4)+_0x591eef(0x1cf)+_0x591eef(0x367),'DOkeQ':'These'+'\x20leav'+'e\x20ser'+_0x591eef(0x345)+'isibl'+_0x591eef(0x5d1)+_0x591eef(0x5f1),'dSjNT':function(_0x2fe0da,_0x55d397,_0x104a4e){return _0x2fe0da(_0x55d397,_0x104a4e);},'ZHhXT':_0x591eef(0x1ac)+'|3|5|'+'4','punAL':_0x591eef(0x56c),'UKrOE':'mn-pa'+'nel','OrmRv':'nav','OyvfC':_0x591eef(0x307)+'go','hjqYE':'<svg\x20'+_0x591eef(0xc8)+'ox=\x220'+_0x591eef(0x412)+_0x591eef(0x435)+_0x591eef(0x2f5)+_0x591eef(0x60d)+_0x591eef(0x55d)+_0x591eef(0x1b3)+_0x591eef(0x5ef)+_0x591eef(0x25a)+_0x591eef(0x5ba)+'c-1.5'+_0x591eef(0x105)+_0x591eef(0x415)+_0x591eef(0x5c2)+'5\x200-2'+'.5\x201.'+'8-4.5'+_0x591eef(0x2b9)+'5s4\x202'+_0x591eef(0x421)+_0x591eef(0x461)+'-2.5\x20'+'5-4\x207'+_0x591eef(0x2aa)+'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0x591eef(0x197)+_0x591eef(0x60f)+_0x591eef(0x5f2)+_0x591eef(0xc2)+_0x591eef(0x1e6)+_0x591eef(0x4fe)+_0x591eef(0x455)+_0x591eef(0x1ba)+_0x591eef(0x634)+'troke'+_0x591eef(0x38f)+'join='+'\x22roun'+'d\x22/><'+_0x591eef(0x3e8)+'e\x20cx='+_0x591eef(0x4b7)+_0x591eef(0x5a1)+_0x591eef(0x135)+_0x591eef(0x58f)+'\x20fill'+_0x591eef(0x29c)+'6b9d\x22'+_0x591eef(0x31a)+'vg>','zDoKx':_0x591eef(0x64a)+'p','jjFtC':_0x591eef(0x1e5),'wdRGS':'small','FVobH':_0x591eef(0x198)+_0x591eef(0x1e0)+'.io\x20m'+'enu','QRSYR':'butto'+'n','jqkCi':_0x591eef(0x137)+'b','JUQek':'<smal'+'l>','boflr':_0x591eef(0xe2)+'t','OoewE':_0x591eef(0x5b3)+'t','PPgta':_0x591eef(0x464),'laRIQ':function(_0x43058f,_0x3807ce){return _0x43058f*_0x3807ce;},'nyays':_0x591eef(0x2ab),'YyFte':function(_0x5063b5,_0xc4f546){return _0x5063b5+_0xc4f546;},'rUEpJ':function(_0x55adc8,_0x57e2de){return _0x55adc8+_0x57e2de;},'qeulH':_0x591eef(0x180)+'|4|2','wWcVF':_0x591eef(0xbc),'rpDrl':'KeyW','EvNLp':_0x591eef(0x3c9),'QDmrl':'KeyD','NLqpp':function(_0x301b4f,_0x5cf517){return _0x301b4f+_0x5cf517;},'SUXCe':_0x591eef(0x5e0)+'255,2'+_0x591eef(0xde)+'0,0.7'+'5)','wiesB':_0x591eef(0x5e0)+_0x591eef(0x2cc)+_0x591eef(0x20e)+_0x591eef(0x14e)+')','sMnRZ':function(_0x2d6e12,_0x29012b){return _0x2d6e12(_0x29012b);},'tojYk':'FmkDN','oQPIQ':'kFkFQ','PgPOm':_0x591eef(0x55e)+'|3|1','IDlxC':_0x591eef(0x441)+_0x591eef(0x131)+_0x591eef(0x46a)+_0x591eef(0x205)+_0x591eef(0x513)+'\x20no\x20h'+_0x591eef(0x547)+'(relo'+'ad\x20to'+_0x591eef(0x14c)+')','oqoka':_0x591eef(0x590)+_0x591eef(0x54e)+'yEngi'+'ne.Ap'+_0x591eef(0x2d3)+_0x591eef(0x53c)+_0x591eef(0x20b)+'arget'+_0x591eef(0x325)+_0x591eef(0x615),'UpNrz':_0x591eef(0x53f),'eFrUO':_0x591eef(0x2c7),'yPZCR':_0x591eef(0x1c3),'pkBZW':_0x591eef(0x2a6),'mRZsm':'posit'+_0x591eef(0x41e)+_0x591eef(0x50a)+_0x591eef(0x5af)+':0;z-'+_0x591eef(0xc1)+_0x591eef(0x28f)+_0x591eef(0x389)+'7;poi'+_0x591eef(0x4ac)+_0x591eef(0x2e6)+_0x591eef(0x36e)+'e;','kHPtV':'sakur'+_0x591eef(0x4eb)+'r.ui.'+'v1','oUdLU':_0x591eef(0x2e4)+'t','EQGVl':'Misc','dTxSQ':_0x591eef(0x5f3)+'y','JUwoW':_0x591eef(0x660)+'wn','wmoud':_0x591eef(0x164)+_0x591eef(0xc8)+_0x591eef(0x478)+'\x200\x2024'+_0x591eef(0x491)+_0x591eef(0x5ef)+_0x591eef(0x25a)+'12\x2021'+_0x591eef(0x276)+'-2.5-'+_0x591eef(0x415)+'-4-7.'+_0x591eef(0x2cb)+_0x591eef(0x35a)+'8-4.5'+_0x591eef(0x2b9)+'5s4\x202'+_0x591eef(0x421)+'5c0\x203'+'-2.5\x20'+_0x591eef(0x425)+_0x591eef(0x2aa)+'fill='+_0x591eef(0x5ce)+_0x591eef(0x507)+'oke=\x22'+_0x591eef(0x11f)+_0x591eef(0x197)+_0x591eef(0x60f)+_0x591eef(0x5f2)+_0x591eef(0xc2)+'\x20stro'+_0x591eef(0x4fe)+_0x591eef(0x455)+'=\x22rou'+_0x591eef(0x634)+_0x591eef(0x60f)+_0x591eef(0x38f)+'join='+_0x591eef(0x614)+'d\x22/><'+_0x591eef(0x3e8)+_0x591eef(0x13e)+'\x2212\x22\x20'+_0x591eef(0x5a1)+_0x591eef(0x135)+'\x221.5\x22'+'\x20fill'+_0x591eef(0x29c)+_0x591eef(0x43f)+_0x591eef(0x31a)+_0x591eef(0x54d),'sTtkx':_0x591eef(0x484)+'a\x20Kou'+'r','ZVawn':function(_0x5767d0,_0x1fdc19){return _0x5767d0(_0x1fdc19);},'PdlpY':_0x591eef(0x5de),'bIjWT':function(_0x365963,_0x230e8a,_0x64f81d,_0x5812ab,_0x12cee8,_0x5c030d,_0x1f1a3d,_0x5e58bf){return _0x365963(_0x230e8a,_0x64f81d,_0x5812ab,_0x12cee8,_0x5c030d,_0x1f1a3d,_0x5e58bf);},'MlzeL':_0x591eef(0x28a)+_0x591eef(0x406),'DEEGS':_0x591eef(0x21d)+'ter','aGJfa':_0x591eef(0x2e5)+_0x591eef(0xb5)+'ur]\x20U'+_0x591eef(0x4d4)+'nit\x20f'+_0x591eef(0x57d)+':','wTBHU':function(_0x2766fb,_0x1bb7b7){return _0x2766fb(_0x1bb7b7);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x591eef(0x13d)](location[_0x591eef(0x337)+_0x591eef(0x2db)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window[_0x591eef(0x342)+_0x591eef(0xc0)+_0x591eef(0x126)]=!![];var _0x2345b7=_0x591eef(0x11f)+'9d',_0x3ccc06='#ffb3'+'c6',_0x131eb5={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x30189c[_0x591eef(0x611)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x56e5f0={..._0x131eb5};try{Object[_0x591eef(0x16a)+'n'](_0x56e5f0,JSON[_0x591eef(0x2eb)](localStorage[_0x591eef(0x534)+'em'](_0x591eef(0x5ee)+_0x591eef(0x4eb)+_0x591eef(0x4a6))||'{}'));}catch(_0x2e23c0){}function _0x87da4d(){var _0x2bc03d=_0x591eef;try{localStorage[_0x2bc03d(0x4d3)+'em'](_0x2bc03d(0x5ee)+'a.kou'+_0x2bc03d(0x4a6),JSON['strin'+_0x2bc03d(0x330)](_0x56e5f0));}catch(_0x218ff7){}}var _0x30de35={'uwmk':!!window[_0x591eef(0x223)+_0x591eef(0x2a3)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x56e5f0[_0x591eef(0x2d2)+_0x591eef(0x4dd)],'lastError':''};try{if(_0x30189c[_0x591eef(0x173)]==='LtdWy')window[_0x591eef(0xb7)+_0x591eef(0x24a)+'stene'+'r']('error',_0x3f7af0=>{var _0x4a7ce3=_0x591eef;try{var _0x57bbce=_0x3f7af0&&(_0x3f7af0[_0x4a7ce3(0x282)+'ge']||_0x3f7af0['error']&&_0x3f7af0['error']['messa'+'ge'])||_0x30189c[_0x4a7ce3(0x13a)];if(_0x3f7af0&&_0x3f7af0[_0x4a7ce3(0x201)+_0x4a7ce3(0x2db)])_0x57bbce+=_0x30189c[_0x4a7ce3(0x274)](_0x30189c['xbyBQ']+_0x30189c['iwyyb'](String,_0x3f7af0['filen'+_0x4a7ce3(0x2db)])[_0x4a7ce3(0x1b2)]('/')['pop'](),':')+(_0x3f7af0[_0x4a7ce3(0x5dc)+'o']||'?');_0x30de35['lastE'+_0x4a7ce3(0x1c1)]=String(_0x57bbce)[_0x4a7ce3(0xc4)](0x3*-0x71d+-0xea5*0x1+0x7*0x524,0x1*0xcc8+-0x232*0x2+-0x47*0x1c);}catch(_0x157697){}});else try{_0x2d28e5['body']['appen'+'dChil'+'d'](_0x1ff8e1);}catch(_0x241cf0){}}catch(_0x3c3d41){}var _0x3c0e97=null,_0x4da28b=null,_0x54e63f={},_0x52efe1=[],_0x565d65=[],_0x449ed0=new Map();function _0x4c4af3(_0x3def36,_0x5a0a50){var _0x2453a0=_0x591eef;if(!_0x5a0a50||_0x3def36[_0x2453a0(0x61d)+'des'](_0x5a0a50)||_0x3def36['lengt'+'h']>-0xb75+-0x26b+0xe20)return;_0x3def36['push'](_0x5a0a50);}function _0x1a9b4c(_0x31ac72,_0x1fe2a2,_0x55e098,_0x1d4809){var _0x5f10d7=_0x591eef,_0x3b72d9={'dKKaP':function(_0x59ae5b,_0x168ad8){return _0x59ae5b===_0x168ad8;}};if(_0x30189c[_0x5f10d7(0x242)]!==_0x30189c['TnBfq']){if(_0x3d203d[_0x1026e2]['id']&&_0x3b72d9[_0x5f10d7(0x3b9)](_0x4bcb63[_0x5090df]['id'][_0x5f10d7(0xc1)+'Of'](_0x5f10d7(0x4fa)+'io_'),0x78e*0x5+-0x13f1+0x53*-0x37))_0x2d6705[_0x1cfa76]['style']['displ'+'ay']='none';}else{var _0x2256b9=('4|0|5'+_0x5f10d7(0x5a8)+'3')[_0x5f10d7(0x1b2)]('|'),_0x40467e=0x1a64+-0x1*-0x1792+-0x31f6;while(!![]){switch(_0x2256b9[_0x40467e++]){case'0':try{_0x5cbc2b=_0x1fe2a2&&_0x1fe2a2[_0x5f10d7(0x29a)]?_0x1fe2a2[_0x5f10d7(0x29a)]():0x8*-0x2c9+0xe7+0x1561*0x1;}catch(_0x454c09){}continue;case'1':_0x4c4af3(_0x31ac72,_0x5cbc2b);continue;case'2':_0x55e098[_0x1d4809]=_0x31ac72['lengt'+'h'];continue;case'3':if(_0x30189c[_0x5f10d7(0x4ef)](_0x1d4809,_0x30189c['uxckf'])&&_0x31ac72[_0x5f10d7(0x393)+'h']){var _0x14142f=_0x54e63f['capMo'+'ve'];if(_0x14142f)try{_0x14142f[_0x5f10d7(0xfa)+'ed']=![];}catch(_0x5012c9){}}continue;case'4':var _0x5cbc2b=0x2521+0xd*-0x3+-0x24fa;continue;case'5':if(!_0x5cbc2b)return;continue;}break;}}}function _0x4e45b2(_0x31b79b,_0x136455,_0x21f532){var _0x3e5fe9=_0x591eef,_0x41d349={'McHpq':function(_0x449fbc,_0x12a467){return _0x449fbc+_0x12a467;},'mjunn':_0x3e5fe9(0x17e)+_0x3e5fe9(0x2cd)+'\x20','dTwTS':_0x30189c[_0x3e5fe9(0x37c)],'NIvEU':_0x3e5fe9(0x5e9)+'d','TgfaI':'none'},_0x5dfc9d=_0x449ed0['get'](_0x31b79b);!_0x5dfc9d&&(_0x30189c[_0x3e5fe9(0x508)]!==_0x3e5fe9(0x5e5)?_0x5d5dd9[_0x3e5fe9(0x145)+_0x3e5fe9(0x30e)+'t']=_0x34a04a[_0x3e5fe9(0x2d2)+'ode']?_0x3e5fe9(0x441)+_0x3e5fe9(0x131)+_0x3e5fe9(0x499)+'rlay\x20'+'only,'+_0x3e5fe9(0x4ec)+'ooks\x20'+'(relo'+'ad\x20to'+_0x3e5fe9(0x14c)+')':_0x511102[_0x3e5fe9(0xd8)]?_0x41d349['McHpq'](_0x41d349['mjunn']+(_0x131273[_0x3e5fe9(0x2ee)+_0x3e5fe9(0x42d)]?_0x41d349['McHpq'](_0x5accc2[_0x3e5fe9(0x2ee)+'Ok']+'/',_0x573574['hooks'+_0x3e5fe9(0x42d)])+('\x20hook'+'s'):'0\x20hoo'+'ks\x20ar'+'med\x20('+_0x3e5fe9(0x206)+_0x3e5fe9(0x601))+_0x41d349[_0x3e5fe9(0x31f)]+(_0x119b14[_0x3e5fe9(0x49b)+_0x3e5fe9(0xe9)]?_0x41d349['NIvEU']:_0x3e5fe9(0x657)+'ng')+(_0x3e5fe9(0x5c7)+'ooter'+'\x20')+(_0x358040[_0x3e5fe9(0x620)+_0x3e5fe9(0x225)]?'held':_0x3e5fe9(0x172))+('\x20|\x20mo'+_0x3e5fe9(0x62f)+'t\x20')+(_0x43319f[_0x3e5fe9(0x267)+_0x3e5fe9(0x159)]?'held':_0x41d349[_0x3e5fe9(0x4d5)]),_0x2d9331[_0x3e5fe9(0x4b9)+'rror']?_0x3e5fe9(0x5ed)+_0x3e5fe9(0x240)+_0x221908[_0x3e5fe9(0x4b9)+_0x3e5fe9(0x1c1)]:''):_0x3e5fe9(0x17e)+'MISSI'+'NG\x20-\x20'+_0x3e5fe9(0x457)+_0x3e5fe9(0x153)+_0x3e5fe9(0x258)+'einst'+_0x3e5fe9(0x33f)+'he\x20us'+'erscr'+'ipt)':(_0x5dfc9d=new Map(),_0x449ed0['set'](_0x31b79b,_0x5dfc9d)));if(!_0x5dfc9d[_0x3e5fe9(0x1aa)](_0x136455))try{var _0x5ba8e8=new _0x3c0e97(_0x31b79b)[_0x3e5fe9(0x237)+_0x3e5fe9(0x4cd)](_0x136455,_0x21f532);_0x5dfc9d[_0x3e5fe9(0x5a9)](_0x136455,_0x30189c[_0x3e5fe9(0x2b7)](_0x5ba8e8,undefined)?_0x5ba8e8[_0x3e5fe9(0x29a)]():null);}catch(_0x277f6d){if(_0x3e5fe9(0x21c)!==_0x30189c['OtrJK']){var _0x5566b9=_0x171c3c[_0x3e5fe9(0x5cc)+_0x3e5fe9(0x169)+'ent']('small');_0x5566b9[_0x3e5fe9(0x2f5)+'Name']=_0x3e5fe9(0x49c)+'nt',_0x5566b9[_0x3e5fe9(0x145)+_0x3e5fe9(0x30e)+'t']=_0x3c05ae,_0x4edcf4[_0x3e5fe9(0x1be)+_0x3e5fe9(0x2d9)+'d'](_0x5566b9);}else _0x5dfc9d[_0x3e5fe9(0x5a9)](_0x136455,null);}return _0x5dfc9d[_0x3e5fe9(0x273)](_0x136455);}function _0x531efb(_0x3b74ec,_0x342610,_0x2927b2,_0x5ed8ef){var _0x300bb8=_0x591eef;try{new _0x3c0e97(_0x3b74ec)[_0x300bb8(0x477)+_0x300bb8(0x363)](_0x342610,_0x2927b2,_0x5ed8ef);}catch(_0x5af073){}}function _0x198b6c(_0xa4be15,_0x3db2b1){var _0x26e269=_0x591eef;if(_0x30189c['bjARg'](_0x30189c['eNikz'],_0x30189c['nnGpT']))try{var _0x4612cf=new _0x3c0e97(_0xa4be15)[_0x26e269(0x237)+'ield'](_0x3db2b1,_0x30189c[_0x26e269(0x3ee)]);return _0x4612cf?_0x4612cf[_0x26e269(0x29a)]():-0x2457+0x65d+0x1dfa;}catch(_0x5da886){return-0x1*-0x22cb+-0xb79+-0x1752;}else{if(_0x37478f)_0xf22b2['call']('Unity'+_0x26e269(0x37f)+_0x26e269(0x59b)+'licat'+_0x26e269(0x564),_0x30189c[_0x26e269(0x442)],[-0xfca*-0x1+0x588+-0x1462]);}}function _0x105a32(_0x7eed2e,_0x50c669,_0x20469a,_0xcd5c10){var _0x2155f9=_0x4e45b2(_0x7eed2e,_0x50c669,_0x20469a);if(_0x2155f9!=null)_0x30189c['aAfkS'](_0x531efb,_0x7eed2e,_0x50c669,_0x20469a,_0x2155f9*_0xcd5c10);}function _0x1a9604(_0xbba70d,_0x2d5e6c,_0x19bb48,_0x39ce46,_0x373c6f,_0x26adf7,_0x42a84d){var _0x39c41b=_0x591eef;try{var _0x2881a2=_0x4da28b[_0x39c41b(0x3a6)+_0x39c41b(0x434)]({'typeName':_0x2d5e6c,'methodName':_0x19bb48,'params':_0x39ce46,'returnType':_0x373c6f},_0x26adf7);return _0x2881a2[_0x39c41b(0xfa)+'ed']=_0x42a84d!==![],_0x54e63f[_0xbba70d]=_0x2881a2,_0x30de35['hooks'+'Total']++,_0x2881a2;}catch(_0x2fa3b5){if(_0x30189c['fZIqI'](_0x30189c[_0x39c41b(0x334)],_0x30189c[_0x39c41b(0x334)])){if(!_0x19f739[_0x39c41b(0x4d8)+_0x39c41b(0x28c)])_0xd802e8['delet'+'e'](_0x30189c[_0x39c41b(0x15d)]+(_0x1942a1[_0x39c41b(0x50e)+'n']+(-0x643+0xfd0+-0x98c)));}else return console['warn'](_0x30189c['FNELv'],_0xbba70d,_0x2fa3b5&&_0x2fa3b5[_0x39c41b(0x282)+'ge']),null;}}function _0xae5410(_0x4e677e,_0x1e049d,_0x248d36,_0x1de376,_0x409014,_0x295214,_0x1ff135){var _0x540722=_0x591eef,_0x4f0c65={'WRBcF':function(_0x10f054,_0x46ab43){return _0x10f054||_0x46ab43;}};if('hdrRG'===_0x30189c[_0x540722(0x616)]){var _0x173e06=_0x30189c[_0x540722(0x338)][_0x540722(0x1b2)]('|'),_0x467be0=0x6cc*-0x1+-0xe3a+0x1506;while(!![]){switch(_0x173e06[_0x467be0++]){case'0':if(!_0xc35c0e[_0x540722(0x49b)+_0x540722(0xe9)])_0x457476(_0x540722(0x344)+'ng\x20fo'+'r\x20gam'+'e…',_0x540722(0x5e0)+'255,1'+'80,19'+'0,0.6'+')');continue;case'1':_0x167c33['save']();continue;case'2':var _0x1e6f5b=-0x7db*-0x1+0x18b+-0x93a,_0x4352ba=-0x26f8+-0x2*-0x9e4+0x133c;continue;case'3':_0x31315f['resto'+'re']();continue;case'4':_0x41a338['textA'+_0x540722(0x26a)]=_0x30189c['vBbJS'];continue;case'5':_0x48543e[_0x540722(0x5d5)]=_0x540722(0x43e)+'2px\x20u'+_0x540722(0x65e)+'ospac'+_0x540722(0x61f)+_0x540722(0x64e)+'e';continue;case'6':_0x30189c['KxKUb'](_0x457476,_0x30189c[_0x540722(0x55c)],_0x540722(0x11f)+'9d');continue;case'7':_0x4cad06[_0x540722(0x43d)+_0x540722(0x4c4)+'ne']=_0x30189c[_0x540722(0x486)];continue;case'8':if(_0x1671ce[_0x540722(0x20a)])_0x30189c[_0x540722(0x632)](_0x457476,_0x18fb3b+_0x30189c['pdLJC']);continue;case'9':var _0x457476=(_0x42f376,_0xeb983a)=>{var _0x5da700=_0x540722;_0x18fc98['fillS'+_0x5da700(0x54f)]=_0x4f0c65[_0x5da700(0x5ad)](_0xeb983a,_0x5da700(0x5e0)+_0x5da700(0x29b)+_0x5da700(0xde)+'0,0.7'+'5)'),_0x272190['fillT'+_0x5da700(0x3c8)](_0x42f376,_0x4352ba,_0x1e6f5b),_0x1e6f5b+=-0x14b9+0x254*-0x6+0x22c1;};continue;}break;}}else try{var _0x4a1472=_0x4da28b[_0x540722(0x3a6)+_0x540722(0x10a)+'x']({'typeName':_0x1e049d,'methodName':_0x248d36,'params':_0x1de376,'returnType':_0x409014},_0x295214);return _0x4a1472[_0x540722(0xfa)+'ed']=_0x1ff135!==![],_0x54e63f[_0x4e677e]=_0x4a1472,_0x30de35[_0x540722(0x2ee)+_0x540722(0x42d)]++,_0x4a1472;}catch(_0x5d1dd8){return console['warn'](_0x30189c[_0x540722(0x5b7)],_0x4e677e,_0x5d1dd8&&_0x5d1dd8[_0x540722(0x282)+'ge']),null;}}var _0x5effd4=()=>![];try{if(window[_0x591eef(0x223)+_0x591eef(0x2a3)+'dkit']&&!_0x56e5f0['safeM'+_0x591eef(0x4dd)]){_0x3c0e97=window[_0x591eef(0x223)+_0x591eef(0x2a3)+_0x591eef(0x1a2)]['Value'+_0x591eef(0x10f)+'er'],_0x4da28b=window['Unity'+_0x591eef(0x2a3)+_0x591eef(0x1a2)][_0x591eef(0x25f)+'me'][_0x591eef(0x5cc)+_0x591eef(0x17a)+'in']({'name':'Sakur'+_0x591eef(0x5a5),'version':_0x591eef(0x22f),'referencedAssemblies':[_0x591eef(0x2d0)+_0x591eef(0x449)+_0x591eef(0x3a3)+_0x591eef(0x4b2)]});if(_0x56e5f0[_0x591eef(0x3eb)+'od'])_0x30189c[_0x591eef(0x1bc)](_0x1a9604,_0x591eef(0x3aa),'OHeal'+'th','Initi'+_0x591eef(0x319)+'keHea'+'lth',['i32','i32'],undefined,_0x5effd4,!!_0x56e5f0['god']);if(_0x56e5f0[_0x591eef(0x3eb)+_0x591eef(0x333)])_0x1a9604(_0x591eef(0xdd)+'e',_0x591eef(0x1a4)+'th',_0x30189c[_0x591eef(0x2e9)],['i32','i32',_0x591eef(0x52f),'i32','i32'],undefined,_0x5effd4,!!_0x56e5f0['god']);if(_0x56e5f0[_0x591eef(0x619)+'oReco'+'il'])_0x1a9604('noRec'+_0x591eef(0x2b3),_0x591eef(0x4d9)+_0x591eef(0x552)+'forms'+'.Over'+'tide.'+'Recoi'+'lMoti'+'on',_0x591eef(0x4bb),[_0x30189c[_0x591eef(0x14f)]],undefined,_0x5effd4,!!_0x56e5f0['noRec'+'oil']);if(_0x56e5f0[_0x591eef(0x354)+'aptur'+'e'])_0x30189c[_0x591eef(0x1bc)](_0xae5410,'capSh'+_0x591eef(0x5cf),_0x30189c[_0x591eef(0x5db)],_0x591eef(0x1d1)+_0x591eef(0x1ab)+_0x591eef(0x49f),[_0x30189c['tEZxY'],_0x591eef(0x52f)],undefined,(_0x2b5f28,_0x64199)=>{var _0x43d60=_0x591eef;if(_0x30189c[_0x43d60(0x451)](_0x43d60(0x4dc),'cwuJn')){if(!_0x23d504)return;var _0xde22c9=_0x471022['child'+_0x43d60(0x489)];for(var _0xe3d7bb=-0x3*-0xfb+0x696+-0x987;_0x30189c[_0x43d60(0x4c7)](_0xe3d7bb,_0xde22c9[_0x43d60(0x393)+'h']);_0xe3d7bb++){var _0x3fb824=_0xde22c9[_0xe3d7bb][_0x43d60(0x4b6)+_0x43d60(0x39e)+_0x43d60(0x18d)](_0x43d60(0x44b)+_0x43d60(0x13c));_0x3fb824&&(_0x30189c['BRXzl'](_0x3fb824['textC'+'onten'+'t'][_0x43d60(0xc1)+'Of'](_0x30189c['uggPn']),-0x8c9+0x5eb+-0x2*-0x16f)||_0x3fb824['textC'+'onten'+'t'][_0x43d60(0xc1)+'Of']('SAFE')===-0x8f1+0x26bd*-0x1+0x2fae)&&(_0x3fb824[_0x43d60(0x145)+_0x43d60(0x30e)+'t']=_0x7c673c[_0x43d60(0x2d2)+_0x43d60(0x4dd)]?'SAFE\x20'+_0x43d60(0x131)+_0x43d60(0x499)+_0x43d60(0x205)+'only,'+_0x43d60(0x4ec)+'ooks\x20'+'(relo'+_0x43d60(0x3b3)+_0x43d60(0x14c)+')':_0x257a64['uwmk']?_0x30189c['GBDZN'](_0x30189c[_0x43d60(0x553)](_0x30189c['GBDZN'](_0x30189c[_0x43d60(0x238)](_0x43d60(0x17e)+_0x43d60(0x2cd)+'\x20'+(_0x25bbea['hooks'+'Total']?_0x5da288['hooks'+'Ok']+'/'+_0x557ccd['hooks'+'Total']+('\x20hook'+'s'):_0x30189c['tSNxi']),'\x20|\x20ga'+'me\x20')+(_0x2ec3c[_0x43d60(0x49b)+'oaded']?_0x43d60(0x5e9)+'d':_0x30189c[_0x43d60(0x2e7)]),'\x20|\x20sh'+'ooter'+'\x20'),_0x18906c[_0x43d60(0x620)+_0x43d60(0x225)]?_0x30189c['GjaFO']:'none')+(_0x43d60(0xc5)+_0x43d60(0x62f)+'t\x20')+(_0x143366[_0x43d60(0x267)+'ents']?'held':'none'),_0x4f22a7[_0x43d60(0x4b9)+_0x43d60(0x1c1)]?'\x20|\x20ER'+_0x43d60(0x240)+_0x422bea['lastE'+'rror']:''):_0x43d60(0x17e)+_0x43d60(0x460)+_0x43d60(0x17b)+_0x43d60(0x457)+_0x43d60(0x153)+'ly\x20(r'+_0x43d60(0x5a3)+'all\x20t'+_0x43d60(0x3ce)+_0x43d60(0x549)+'ipt)');}}else _0x30189c[_0x43d60(0x186)](_0x1a9b4c,_0x565d65,_0x64199,_0x30de35,'shoot'+'ers');},!![]);if(_0x56e5f0[_0x591eef(0x354)+_0x591eef(0x1e1)+'e'])_0xae5410('capMo'+'ve',_0x30189c['AkSMN'],_0x591eef(0x2df)+_0x591eef(0x60c),['i32'],'i32',(_0x6a8812,_0x4f3683)=>{var _0x4a8d5a=_0x591eef;_0x1a9b4c(_0x52efe1,_0x4f3683,_0x30de35,_0x30189c[_0x4a8d5a(0x31e)]);},!![]);}}catch(_0x36f830){console['warn'](_0x30189c[_0x591eef(0x254)],_0x36f830&&_0x36f830['messa'+'ge']);}function _0x1e6f96(_0x4f1dd0,_0x152f40){var _0xbb3e2=_0x591eef,_0x4359e1=_0x54e63f[_0x4f1dd0];if(_0x4359e1){if('rqsZd'==='qrKXo')_0x1c5575['noSpr'+_0xbb3e2(0x613)]=_0x2f36c1,_0x367f5c();else try{_0x4359e1[_0xbb3e2(0xfa)+'ed']=!!_0x152f40;}catch(_0x1640eb){}}}_0x30189c[_0x591eef(0xcc)](setInterval,()=>{var _0x2dffc6=_0x591eef,_0x2d8224={'uNsbM':function(_0x3e3e46){return _0x3e3e46();},'JsetT':function(_0x15e1bf,_0x3c1123){return _0x15e1bf(_0x3c1123);},'JXdhc':function(_0x2ea9ce,_0x5ac7b0){var _0x47a13a=_0x58ee;return _0x30189c[_0x47a13a(0x632)](_0x2ea9ce,_0x5ac7b0);},'syLZs':function(_0x3e1a8c,_0x534060){var _0x51e729=_0x58ee;return _0x30189c[_0x51e729(0x129)](_0x3e1a8c,_0x534060);},'FtpDS':function(_0x14be04){return _0x14be04();}};if(!_0x3c0e97||!window[_0x2dffc6(0x4c9)+_0x2dffc6(0x5c9)+_0x2dffc6(0x310)])return;var _0x5c2dff=_0x30189c[_0x2dffc6(0x129)](_0x30189c['iwyyb'](Number,_0x56e5f0[_0x2dffc6(0x5fe)+_0x2dffc6(0x3b5)])||-0x639*0x3+-0x914+-0x1*-0x1c23,-0xfc5+-0x4ca+0x1*0x14f3),_0x212236=_0x30189c['HaDwT'](_0x30189c[_0x2dffc6(0x2d8)](Number,_0x56e5f0[_0x2dffc6(0x501)+'ct'])||0x2*0xb71+0x1f*0xfc+-0xe6*0x3b,0x47*0x1+-0x2*0xa02+0x1*0x1421),_0x28fa6f=(Number(_0x56e5f0['gravi'+'tyPct'])||-0x812+-0x313+-0x1*-0xb89)/(-0x1791*0x1+0x227f+-0xa8a),_0xbe29ee=Math[_0x2dffc6(0x3c7)](-0x169+0xf81+-0xe17,Number(_0x56e5f0['damag'+_0x2dffc6(0x1dc)+'e'])||-0xd7*0x15+-0x1fd0+0x3209),_0x144d71=_0x5c2dff!==-0x82a*-0x1+-0xa3*-0x16+-0x162b*0x1||_0x30189c[_0x2dffc6(0x11e)](_0x212236,0x1bcd+0x2e3*0x7+-0x3001)||_0x28fa6f!==0x138d+-0x1c36+0x8aa||_0x56e5f0[_0x2dffc6(0x541)],_0x32c578=_0x56e5f0[_0x2dffc6(0x3b1)+_0x2dffc6(0x613)]||_0x56e5f0[_0x2dffc6(0x202)+_0x2dffc6(0x420)]||_0x56e5f0[_0x2dffc6(0x54a)+_0x2dffc6(0x466)]||_0x56e5f0['rapid'+'Exp'];if(!_0x144d71&&!_0x32c578)return;try{if(_0x30189c['KEngu'](_0x30189c['PGlXW'],_0x30189c['PGlXW']))_0x32776e['hookG'+'od']=_0x16a699,_0x2d8224['uNsbM'](_0x567a06);else for(var _0x54790f=0x1ea8+-0x3*-0x17d+0xf3*-0x25;_0x30189c[_0x2dffc6(0x4c7)](_0x54790f,_0x52efe1[_0x2dffc6(0x393)+'h']);_0x54790f++){var _0x51a0ea=_0x52efe1[_0x54790f];if(!_0x51a0ea)continue;if(_0x30189c[_0x2dffc6(0x47e)](_0x5c2dff,-0x1ce7+0x5*0x59e+0xd2)){if(_0x2dffc6(0x1d0)===_0x30189c['mtjWB']){var _0x3e9cd6=_0x30189c[_0x2dffc6(0x23a)][_0x2dffc6(0x1b2)]('|'),_0x5f113c=-0xb69+-0x7c2+-0x7*-0x2bd;while(!![]){switch(_0x3e9cd6[_0x5f113c++]){case'0':_0x30189c[_0x2dffc6(0x186)](_0x105a32,_0x51a0ea,-0x1c4f+0x1*0x73d+0x1532,_0x30189c['EIIvz'],_0x5c2dff);continue;case'1':_0x30189c['DCTXg'](_0x105a32,_0x51a0ea,-0xcb6*0x1+0x152b*-0x1+0x2209,'f32',_0x5c2dff);continue;case'2':_0x105a32(_0x51a0ea,0x2159*-0x1+-0x6f2*0x1+0x2867*0x1,'f32',_0x5c2dff);continue;case'3':_0x105a32(_0x51a0ea,0x1920+-0x5f*-0x31+-0xe61*0x3,_0x2dffc6(0x48f),_0x5c2dff);continue;case'4':_0x105a32(_0x51a0ea,-0xa3d*-0x1+-0xcf+-0x93a,'f32',_0x5c2dff);continue;case'5':_0x30189c[_0x2dffc6(0x186)](_0x105a32,_0x51a0ea,-0x524*0x7+-0x9c*-0x10+-0x164*-0x13,_0x2dffc6(0x48f),_0x5c2dff);continue;}break;}}else _0x12e541[_0x2dffc6(0x3e0)][_0x2dffc6(0x1be)+'dChil'+'d'](_0x4f313b);}if(_0x30189c[_0x2dffc6(0x1b5)](_0x212236,-0x15*0xcf+0x1548*0x1+0x37*-0x14))_0x105a32(_0x51a0ea,0xa66+-0x1f83+0x156d*0x1,'f32',_0x212236);if(_0x28fa6f!==-0x26d9+0x1735+0xfa5){if(_0x30189c[_0x2dffc6(0x646)]('ZVsba','qdpwy'))_0x105a32(_0x51a0ea,-0x1*0x17b1+-0x2a*0x74+-0x2b01*-0x1,_0x30189c['EIIvz'],_0x28fa6f),_0x105a32(_0x51a0ea,0x308*-0x2+0x420+0x23c,_0x30189c[_0x2dffc6(0x3fa)],_0x28fa6f);else{var _0x1f4fc6=('1|9|1'+_0x2dffc6(0x4f0)+'|8|5|'+'2|4|3'+'|0')[_0x2dffc6(0x1b2)]('|'),_0xe9ee81=0xd*0x37+0x39a+-0x665*0x1;while(!![]){switch(_0x1f4fc6[_0xe9ee81++]){case'0':_0x58a04a(_0x22bdf8);continue;case'1':_0x2d8224['JsetT'](_0x16b6c2,_0x2da72a);continue;case'2':var _0x22bdf8={'left':0x0,'top':0x0,'right':_0x39e240['w'],'bottom':_0x49593d['h'],'width':_0x1b3e62['w'],'height':_0x3fd485['h']};continue;case'3':if(_0xfd8191[_0x2dffc6(0x3a9)+'rokes'])_0x2d8224[_0x2dffc6(0x5c1)](_0xb6611c,_0x22bdf8);continue;case'4':if(_0x1840c0['cross'+_0x2dffc6(0x4b1)])_0x333bb4(_0x22bdf8);continue;case'5':_0x2951cc['clear'+'Rect'](0x14ec+0x1*-0x2ba+-0x11*0x112,-0x17*0x18c+0x2*0xa7f+0xe96,_0x6cf7d1['w'],_0x2ba767['h']);continue;case'6':_0x16ca14-_0x599545>=0x2023+0x31f+-0x1d*0x126&&(_0x468d48=_0x1c5cf7[_0x2dffc6(0x1b1)](_0x2d8224['syLZs'](_0x10af89*(0x105e+-0x14f+-0xb27*0x1),_0x16ca14-_0x5caf6a)),_0xea3ca4=-0x1f3c+0x13e5*-0x1+0x3321,_0x3a01c8=_0x16ca14);continue;case'7':_0x29d2a4();continue;case'8':_0x2d8224['FtpDS'](_0xa15535);continue;case'9':_0x28d68f++;continue;case'10':var _0x16ca14=_0x140537['now']();continue;}break;}}}if(_0x56e5f0['bhop'])_0x30189c['DCTXg'](_0x531efb,_0x51a0ea,-0x4ee*0x1+-0x22e6*0x1+-0x1438*-0x2,'f32',-(-0x172*-0x16+0xbf4+-0x27d9));}}catch(_0x495d67){}try{if(_0x2dffc6(0x417)===_0x2dffc6(0x417))for(var _0x5728dd=0xb*-0x2db+0x1d*0x85+-0x416*-0x4;_0x30189c['DtiTb'](_0x5728dd,_0x565d65['lengt'+'h']);_0x5728dd++){if(_0x30189c[_0x2dffc6(0x1b5)](_0x2dffc6(0x647),_0x2dffc6(0xbe))){var _0x3ff4b1=_0x30189c[_0x2dffc6(0x1d3)](_0x198b6c,_0x565d65[_0x5728dd],0x1*0xbb1+0x16af+0x88a*-0x4);if(!_0x3ff4b1)continue;_0x56e5f0['damag'+_0x2dffc6(0x420)]&&(_0x30189c[_0x2dffc6(0x506)]!==_0x30189c['CCdzN']?(_0x42c623['hookG'+'od']=_0x3a7854,_0x47a1b6['hookG'+_0x2dffc6(0x333)]=_0x18c510,_0x54bf2b['hookN'+_0x2dffc6(0x571)+'il']=_0x1517a3,_0x29a745['hookC'+_0x2dffc6(0x1e1)+'e']=_0x46fe17,_0x2d8224[_0x2dffc6(0x5ec)](_0x59d9f0),_0x481399[_0x2dffc6(0xeb)+'d']()):(_0x531efb(_0x3ff4b1,0x1*-0x2ea+-0xa5f*-0x1+-0x729,_0x30189c['tEZxY'],_0xbe29ee),_0x30189c['DCTXg'](_0x531efb,_0x3ff4b1,0x265c+0x3*-0x14b+-0x2227,_0x30189c[_0x2dffc6(0x14f)],_0xbe29ee)));if(_0x56e5f0[_0x2dffc6(0x3b1)+_0x2dffc6(0x613)]){if(_0x30189c['cxhVD']('WKyUk',_0x2dffc6(0x2dc))){if(!_0x3374a6||_0x38955a[_0x2dffc6(0x61d)+_0x2dffc6(0x17d)](_0x39b356)||_0x412a66[_0x2dffc6(0x393)+'h']>0x6b9*-0x3+0x1021+0x44a)return;_0x1f0cf5[_0x2dffc6(0x117)](_0x32d5bf);}else _0x531efb(_0x3ff4b1,-0x1e4d+0x1*-0x423+0x22f8,_0x2dffc6(0x48f),0x83*0x31+-0x1bfd+0x2ea),_0x531efb(_0x3ff4b1,0x1*-0xdf+0x1607*0x1+-0x14c0,'f32',-0xdf7+-0x1*-0x923+-0x1*-0x4d5);}if(_0x56e5f0['infAm'+'moExp'])_0x30189c['ipVrU'](_0x531efb,_0x3ff4b1,0x249*0xc+0x164d+0x315d*-0x1,_0x2dffc6(0x52f),0x412*0x1+0x1f8e+0x1*-0x1fb9);_0x56e5f0[_0x2dffc6(0x448)+_0x2dffc6(0xd4)]&&(_0x105a32(_0x3ff4b1,0x1*-0x62f+0x12b3*0x2+0x3*-0xa39,_0x2dffc6(0x48f),-0x899+-0x4*0x99b+0x1*0x2f05+0.1),_0x531efb(_0x3ff4b1,-0x2*0xb24+0x30*0x2a+0xec8,_0x30189c['EIIvz'],0xe6b+-0x1*-0x16bd+0x2528*-0x1+0.1));}else{var _0x1fc471=_0x47cb5d[_0x2dffc6(0x5cc)+'eElem'+_0x2dffc6(0x346)](_0x2dffc6(0x579));return _0x1fc471['class'+_0x2dffc6(0x5df)]='sk-no'+'te'+(_0x4bbe1?_0x2dffc6(0x11d):''),_0x1fc471[_0x2dffc6(0x145)+'onten'+'t']=_0x105dfa,_0x1fc471;}}else{if(_0x49091b[_0x46d9d4]&&_0x2c0567[_0x585424]['appli'+'ed'])_0x342225++;}}catch(_0xd30a89){}},-0x41*0x6c+0xf90+0x652*0x2),setInterval(()=>{var _0x4881b5=_0x591eef;_0x30de35['gameL'+'oaded']=!!window[_0x4881b5(0x4c9)+_0x4881b5(0x5c9)+'nce'];try{var _0x24b8ef=-0x52*0x56+0x2*0xd86+-0x2*-0x40;for(var _0x437ba5 in _0x54e63f){if('VcxKk'===_0x30189c['dInwB']){if(_0x54e63f[_0x437ba5]&&_0x54e63f[_0x437ba5][_0x4881b5(0x59d)+'ed'])_0x24b8ef++;}else _0x21fef9['hookG'+_0x4881b5(0x333)]=_0x4a1678,_0x19fd73();}_0x30de35[_0x4881b5(0x2ee)+'Ok']=_0x24b8ef;}catch(_0x56930d){}},-0x1d67+-0x9f6+0x2b45);var _0x5327c8=new Set(),_0x540917={0x1:[],0x3:[]},_0xf1f9bf=![];function _0x2e6b8f(_0x477c55){var _0x3bf914=_0x591eef,_0x135379={'jUOsK':_0x3bf914(0x484)+_0x3bf914(0x5a5),'AYSeZ':'1.1.0','lAUuE':function(_0x503acc,_0x2dd4a2,_0x58e141,_0x1aa894,_0x331e3a,_0x1f7de9,_0x140c24,_0x160bf0){var _0x2279d1=_0x3bf914;return _0x30189c[_0x2279d1(0x523)](_0x503acc,_0x2dd4a2,_0x58e141,_0x1aa894,_0x331e3a,_0x1f7de9,_0x140c24,_0x160bf0);},'jtVSI':'i32','jrVLt':_0x30189c[_0x3bf914(0x4bc)],'hZjxg':function(_0x28e174,_0x3c4c6a,_0xc57f3c,_0x117d8d,_0x29b276,_0x5447d6,_0x24914b,_0x424e53){var _0xa6d032=_0x3bf914;return _0x30189c[_0xa6d032(0x182)](_0x28e174,_0x3c4c6a,_0xc57f3c,_0x117d8d,_0x29b276,_0x5447d6,_0x24914b,_0x424e53);},'xMRtO':_0x3bf914(0x3a5)+_0x3bf914(0x5cf),'UbEgF':_0x30189c[_0x3bf914(0x4d2)],'eNkKY':_0x30189c['mLFHi'],'QDRas':_0x30189c['AkSMN'],'ikdqm':_0x30189c[_0x3bf914(0x3dd)]};if(_0x30189c[_0x3bf914(0x285)]!==_0x30189c[_0x3bf914(0x285)]){var _0x2647a6={'MJExG':_0x3bf914(0x620)+_0x3bf914(0x225)};_0x152d8e=_0x48fa6f[_0x3bf914(0x223)+_0x3bf914(0x2a3)+_0x3bf914(0x1a2)]['Value'+_0x3bf914(0x10f)+'er'],_0x6c1e9c=_0x17a2a6[_0x3bf914(0x223)+_0x3bf914(0x2a3)+_0x3bf914(0x1a2)]['Runti'+'me'][_0x3bf914(0x5cc)+_0x3bf914(0x17a)+'in']({'name':_0x135379[_0x3bf914(0x5fa)],'version':_0x135379['AYSeZ'],'referencedAssemblies':['Assem'+_0x3bf914(0x449)+_0x3bf914(0x3a3)+'.dll']});if(_0x36c6de[_0x3bf914(0x3eb)+'od'])_0x135379[_0x3bf914(0xf1)](_0x38e46b,_0x3bf914(0x3aa),_0x3bf914(0x1a4)+'th','Initi'+_0x3bf914(0x319)+_0x3bf914(0x23b)+_0x3bf914(0x4f9),[_0x3bf914(0x52f),_0x3bf914(0x52f)],_0x4f1704,_0x59fc12,!!_0x63e9a4[_0x3bf914(0x3aa)]);if(_0x556f05[_0x3bf914(0x3eb)+_0x3bf914(0x333)])_0x135379[_0x3bf914(0xf1)](_0x4a3ac8,'godDi'+'e',_0x3bf914(0x1a4)+'th','Local'+'Die',[_0x3bf914(0x52f),_0x3bf914(0x52f),_0x135379[_0x3bf914(0x542)],_0x3bf914(0x52f),_0x135379[_0x3bf914(0x542)]],_0x37ce68,_0x3f5cab,!!_0x5b88de[_0x3bf914(0x3aa)]);if(_0x10a8f7['hookN'+_0x3bf914(0x571)+'il'])_0x135379['lAUuE'](_0x5233e9,_0x3bf914(0xf6)+'oil',_0x135379[_0x3bf914(0xd7)],'Tick',['i32'],_0x2601da,_0x19a042,!!_0xf28295['noRec'+'oil']);if(_0xce90d4[_0x3bf914(0x354)+_0x3bf914(0x1e1)+'e'])_0x135379['hZjxg'](_0x584126,_0x135379[_0x3bf914(0xdc)],'OShoo'+'ter',_0x135379['UbEgF'],[_0x135379[_0x3bf914(0x542)],'i32'],_0x755c0,(_0x59a703,_0xf29113)=>{var _0x3d3d30=_0x3bf914;_0x278fbc(_0x1ccb07,_0xf29113,_0x3fbc8d,_0x2647a6[_0x3d3d30(0x47f)]);},!![]);if(_0x107924['hookC'+_0x3bf914(0x1e1)+'e'])_0x5e6fa0(_0x135379['eNkKY'],_0x135379[_0x3bf914(0x286)],_0x135379['ikdqm'],[_0x3bf914(0x52f)],_0x135379[_0x3bf914(0x542)],(_0x4f9c08,_0x467049)=>{var _0xbd85d3=_0x3bf914;_0x1a8ead(_0x59ebf5,_0x467049,_0x50a30c,_0xbd85d3(0x267)+_0xbd85d3(0x159));},!![]);}else _0x5327c8[_0x3bf914(0x283)](_0x477c55[_0x3bf914(0x107)]);}function _0x11c410(_0x51ce5b){var _0xc11b18=_0x591eef;_0x5327c8['delet'+'e'](_0x51ce5b[_0xc11b18(0x107)]);}function _0x2f699d(_0x252de8){var _0x35b7cf=_0x591eef;if(_0x252de8[_0x35b7cf(0x4d8)+'ura'])return;_0x5327c8['add']('mouse'+(_0x252de8[_0x35b7cf(0x50e)+'n']+(-0xaaf*0x1+0x100*0x1+-0x9b*-0x10)));var _0x280d16=_0x540917[_0x252de8[_0x35b7cf(0x50e)+'n']+(-0xba9+0x7ba+0x3f0)];if(_0x280d16){if(_0x30189c[_0x35b7cf(0x512)]==='oIRoV'){var _0x3d8ac7=_0x3c3d5c['child'+'ren'];for(var _0x5e184c=-0x156c+0x158b*-0x1+-0x2af7*-0x1;_0x30189c[_0x35b7cf(0x260)](_0x5e184c,_0x3d8ac7[_0x35b7cf(0x393)+'h']);_0x5e184c++){if(_0x3d8ac7[_0x5e184c]['id']&&_0x30189c[_0x35b7cf(0x401)](_0x3d8ac7[_0x5e184c]['id']['index'+'Of'](_0x30189c['mHqsu']),-0x2*-0x180+-0x8f8+0x5f8))_0x3d8ac7[_0x5e184c][_0x35b7cf(0x56c)]['displ'+'ay']=_0x30189c[_0x35b7cf(0x175)];}}else{_0x280d16['push'](performance['now']());if(_0x280d16[_0x35b7cf(0x393)+'h']>-0x232c+-0x1*0x1344+0x3698)_0x280d16[_0x35b7cf(0x537)]();}}}function _0x3dc7c5(_0x45a0c7){var _0x1351aa=_0x591eef;if(!_0x45a0c7['__sak'+_0x1351aa(0x28c)])_0x5327c8['delet'+'e'](_0x30189c['jfaPw']+(_0x45a0c7[_0x1351aa(0x50e)+'n']+(-0x2629+0xaed*-0x3+0xd*0x575)));}function _0x3a3479(){var _0xd58d6b=_0x591eef;_0xd58d6b(0x452)===_0x30189c[_0xd58d6b(0x648)]?_0x5327c8[_0xd58d6b(0x3bb)]():(_0x2bf083['gravi'+'tyPct']=_0x4db6a6,_0x3f16c6());}function _0x117a43(){var _0xb32ad=_0x591eef;if(_0xf1f9bf)return;_0xf1f9bf=!![],window[_0xb32ad(0xb7)+'entLi'+'stene'+'r']('keydo'+'wn',_0x2e6b8f,!![]),window[_0xb32ad(0xb7)+_0xb32ad(0x24a)+_0xb32ad(0x27d)+'r'](_0x30189c[_0xb32ad(0x4ee)],_0x11c410,!![]),window[_0xb32ad(0xb7)+_0xb32ad(0x24a)+'stene'+'r'](_0xb32ad(0x645)+_0xb32ad(0x379),_0x2f699d,!![]),window[_0xb32ad(0xb7)+'entLi'+'stene'+'r'](_0x30189c[_0xb32ad(0x3d9)],_0x3dc7c5,!![]),window[_0xb32ad(0xb7)+_0xb32ad(0x24a)+_0xb32ad(0x27d)+'r'](_0xb32ad(0x3b8),_0x3a3479);}function _0x49e795(_0x3caa26){var _0x2d878d=_0x591eef,_0x3114b4={'oDMSt':_0x2d878d(0x50e)+'n'};if('yMuVA'===_0x2d878d(0x495)){var _0x2fb71f=_0x540917[_0x3caa26]||[],_0x4a40c3=performance['now']();while(_0x2fb71f['lengt'+'h']&&_0x30189c['AoEpa'](_0x4a40c3-_0x2fb71f[0xe3b*-0x1+0x9bb+0x480],-0x174*-0x1+-0xf31+0x1*0x11a5))_0x2fb71f[_0x2d878d(0x537)]();return _0x2fb71f['lengt'+'h'];}else{var _0x4b529a=(_0x2d878d(0x598)+_0x2d878d(0x109)+'3')[_0x2d878d(0x1b2)]('|'),_0xfe98b9=0x9*-0x85+-0x256d+0x11*0x27a;while(!![]){switch(_0x4b529a[_0xfe98b9++]){case'0':_0x25b895['oncli'+'ck']=_0x5c2aeb=>{var _0xa620a6=_0x2d878d;_0x5c2aeb['stopP'+'ropag'+_0xa620a6(0x369)](),_0x171419();};continue;case'1':_0x25b895[_0x2d878d(0x145)+_0x2d878d(0x30e)+'t']=_0x5243bd;continue;case'2':_0x25b895[_0x2d878d(0x1e8)]=_0x3114b4[_0x2d878d(0x4e8)];continue;case'3':return _0x25b895;case'4':_0x25b895[_0x2d878d(0x2f5)+_0x2d878d(0x5df)]=_0x2d878d(0x20c)+'n';continue;case'5':var _0x25b895=_0x4ccd72['creat'+_0x2d878d(0x169)+_0x2d878d(0x346)]('butto'+'n');continue;}break;}}}function _0x400ad0(_0x4d8574){var _0x5ac262=_0x591eef;if(document[_0x5ac262(0x3e0)]&&(_0x30189c['yQvuD'](document[_0x5ac262(0x1ce)+_0x5ac262(0x3f0)],_0x5ac262(0x5fc)+'activ'+'e')||document[_0x5ac262(0x1ce)+'State']===_0x30189c['Qvafj']))_0x4d8574();else document[_0x5ac262(0xb7)+_0x5ac262(0x24a)+_0x5ac262(0x27d)+'r'](_0x30189c[_0x5ac262(0x4e1)],_0x4d8574,{'once':!![]});}_0x30189c[_0x591eef(0x315)](_0x400ad0,()=>{var _0x3cc387=_0x591eef,_0x15fd8d={'WDcyE':function(_0x54e4b1,_0x422c5b){return _0x30189c['laRIQ'](_0x54e4b1,_0x422c5b);},'GGCAX':_0x3cc387(0x5e0)+_0x3cc387(0x2cc)+_0x3cc387(0x213)+_0x3cc387(0x36f)+'5)','TlZpt':function(_0x508f00,_0x4d2db4){return _0x508f00!==_0x4d2db4;},'qHqfV':'#fff','Vuxff':'middl'+'e','tQeCD':function(_0x4d93ae,_0x5ab8b0){return _0x4d93ae+_0x5ab8b0;},'PaOEX':_0x30189c[_0x3cc387(0x210)],'ZYGMr':function(_0x354913,_0x154a97){var _0x4ecea4=_0x3cc387;return _0x30189c[_0x4ecea4(0x129)](_0x354913,_0x154a97);},'tXzXD':function(_0x401af6,_0x111a98){return _0x30189c['HaDwT'](_0x401af6,_0x111a98);},'KgIBR':_0x3cc387(0x5e0)+_0x3cc387(0x29b)+_0x3cc387(0xde)+'0,0.5'+'5)','qjhsa':function(_0xde1ccc,_0x18e10f){return _0x30189c['YyFte'](_0xde1ccc,_0x18e10f);},'VlhCv':function(_0x3981c8,_0x254875){var _0x504772=_0x3cc387;return _0x30189c[_0x504772(0x33e)](_0x3981c8,_0x254875);},'LizIk':_0x30189c[_0x3cc387(0x17f)],'AbTTn':_0x30189c[_0x3cc387(0x385)],'QnJjB':function(_0x45ac9f,_0x16611a){return _0x45ac9f*_0x16611a;},'XKdpd':function(_0x1bb40c,_0x3659ac){return _0x1bb40c-_0x3659ac;},'rNFWU':function(_0xf5738,_0x4f0304){return _0x30189c['QAqxK'](_0xf5738,_0x4f0304);},'qeNnz':_0x30189c['rpDrl'],'PGksU':_0x3cc387(0x481),'FcgLz':_0x30189c[_0x3cc387(0x52c)],'PZFsc':_0x30189c[_0x3cc387(0x10c)],'Surqo':function(_0x37123a,_0x32a9af,_0x5e8f2b,_0xca2617,_0x4c4f2d,_0x3b1443,_0x2501e7,_0x4c84b9){return _0x37123a(_0x32a9af,_0x5e8f2b,_0xca2617,_0x4c4f2d,_0x3b1443,_0x2501e7,_0x4c84b9);},'nDsME':function(_0x41ce6d,_0x32dde8){return _0x30189c['NLqpp'](_0x41ce6d,_0x32dde8);},'WmCTm':function(_0x303094,_0x51517c){var _0x11aee6=_0x3cc387;return _0x30189c[_0x11aee6(0x238)](_0x303094,_0x51517c);},'wWlSN':function(_0x534a2a,_0x1a17e1,_0x5dc417){return _0x534a2a(_0x1a17e1,_0x5dc417);},'SBmeu':_0x3cc387(0x34c),'WGgBQ':'YizrH','vxfDa':_0x30189c['SUXCe'],'mjTVq':_0x3cc387(0x43e)+'2px\x20u'+_0x3cc387(0x65e)+'ospac'+'e,mon'+_0x3cc387(0x64e)+'e','KSiXO':_0x3cc387(0x250),'MhIYn':_0x30189c['LsbgE'],'jBkTJ':_0x30189c[_0x3cc387(0x323)],'fKOXE':'butto'+'n','ZzeRJ':function(_0x1b6e22,_0x17638a){return _0x1b6e22+_0x17638a;},'yXEVs':_0x3cc387(0x4d1)+'l>','ApESJ':_0x3cc387(0x46c)+'ll>','BpAVz':function(_0x280563,_0x163a62){return _0x30189c['sMnRZ'](_0x280563,_0x163a62);},'NCLWH':function(_0xd8a757){return _0xd8a757();},'qiXja':'sk-fi'+_0x3cc387(0x4cf),'JfqHx':_0x30189c['tojYk'],'acwzz':_0x30189c[_0x3cc387(0x3d4)],'zicCQ':_0x30189c[_0x3cc387(0x290)],'QaxYe':_0x30189c[_0x3cc387(0x5b7)],'vmpwj':_0x30189c[_0x3cc387(0x40b)],'FiBzB':function(_0x1cae51,_0x28fa8b){return _0x1cae51+_0x28fa8b;},'YLZBs':function(_0x34f337,_0x370695){return _0x34f337+_0x370695;},'MzSkq':_0x3cc387(0x663)+'s','xMcFN':_0x3cc387(0x1ed)+_0x3cc387(0x317)+_0x3cc387(0x54b)+_0x3cc387(0x206)+'ff)','VMkeT':_0x30189c[_0x3cc387(0x37c)],'BmsRG':_0x3cc387(0x657)+'ng','IHgsW':_0x3cc387(0x15f),'uouJn':_0x30189c[_0x3cc387(0x175)],'DOajl':function(_0x23d366,_0xfb5e16,_0x569491,_0x356d3f,_0x2b36e1,_0x25297a){return _0x23d366(_0xfb5e16,_0x569491,_0x356d3f,_0x2b36e1,_0x25297a);},'KUDQA':function(_0x4a0006,_0x5d52eb,_0x4bf178,_0x28f5a9){return _0x30189c['FeRjb'](_0x4a0006,_0x5d52eb,_0x4bf178,_0x28f5a9);},'VgNnj':_0x30189c['oqoka'],'KsuFx':_0x30189c[_0x3cc387(0x3a8)],'ErNwh':_0x3cc387(0x462),'JVjWL':function(_0x224b56){var _0x3fba69=_0x3cc387;return _0x30189c[_0x3fba69(0x29f)](_0x224b56);},'sahsd':_0x30189c[_0x3cc387(0x2a5)],'SrZXR':function(_0x5a8ce5){return _0x5a8ce5();},'ovKgC':function(_0x2a9d62){return _0x2a9d62();},'dszea':_0x30189c[_0x3cc387(0xd2)],'ggjsa':'.sk-m'+_0x3cc387(0x13c),'GJzAa':_0x30189c['uggPn'],'mvmur':_0x3cc387(0xef),'HWVXl':'nXFZe','byJCa':function(_0x53ecad,_0x37dae4){return _0x53ecad+_0x37dae4;},'XEMbH':function(_0x1af671,_0x13b14e){return _0x1af671+_0x13b14e;},'wlQfS':function(_0x13b580,_0x26f909){return _0x13b580+_0x26f909;},'GcGny':function(_0x451a7c,_0x3c1463){return _0x451a7c+_0x3c1463;},'UbGDc':function(_0xcdf526,_0x54e1a6){return _0xcdf526+_0x54e1a6;},'TsOTy':_0x3cc387(0x5c7)+'ooter'+'\x20','MndXy':function(_0x25b9dd,_0x1c4c61){return _0x25b9dd!==_0x1c4c61;}};_0x56e5f0['adblo'+'ck']&&(_0x3cc387(0xbb)!==_0x30189c[_0x3cc387(0x122)]?setInterval(()=>{var _0x39a395=_0x3cc387,_0x11571c={'SmRgn':function(_0x4cb287,_0x386a5a){var _0x5f5663=_0x58ee;return _0x30189c[_0x5f5663(0x1b0)](_0x4cb287,_0x386a5a);}};try{for(var _0x312882 of['kour-'+_0x39a395(0x36a)+'0x250'+_0x39a395(0x1a5)+'nt',_0x30189c[_0x39a395(0x65d)],'kour-'+'io_30'+_0x39a395(0x4d6)+'-pare'+'nt',_0x39a395(0x261)+'creen'+_0x39a395(0x3f2)+'s']){if(_0x39a395(0x123)===_0x39a395(0x123)){var _0x1a74c7=document[_0x39a395(0x5c6)+_0x39a395(0x2f3)+'ById'](_0x312882);if(_0x1a74c7&&_0x312882===_0x39a395(0x261)+_0x39a395(0x11b)+'-banr'+'s'){var _0x4fd047=_0x1a74c7[_0x39a395(0x591)+_0x39a395(0x489)];for(var _0x3d259e=0x179*-0x1a+0x15*0x15+-0x353*-0xb;_0x30189c[_0x39a395(0x4c7)](_0x3d259e,_0x4fd047[_0x39a395(0x393)+'h']);_0x3d259e++){if(_0x4fd047[_0x3d259e]['id']&&_0x4fd047[_0x3d259e]['id'][_0x39a395(0xc1)+'Of'](_0x30189c['mHqsu'])===-0x1cb7+0x1d5b+-0xa4)_0x4fd047[_0x3d259e]['style'][_0x39a395(0x361)+'ay']=_0x30189c['SAtVA'];}}else{if(_0x1a74c7)_0x1a74c7[_0x39a395(0x56c)][_0x39a395(0x361)+'ay']=_0x39a395(0x172);}}else{var _0x2c5256=_0x15e84d[_0x39a395(0x3ba)+_0x39a395(0x44c)+_0x39a395(0x2c3)+'o']||-0xdec+-0x1b62+0x2c1*0xf,_0x533a5d=_0x49b101[_0x39a395(0x295)+'Width'],_0x1c1005=_0x1ee94e[_0x39a395(0x295)+'Heigh'+'t'];if(_0x533a5d===_0x41fd61['w']&&_0x11571c[_0x39a395(0x438)](_0x1c1005,_0x2546b7['h'])&&_0x2c5256===_0x2bcc5c[_0x39a395(0x4df)])return;_0x5e8431['w']=_0x533a5d,_0x3cb4de['h']=_0x1c1005,_0x1d8a01['dpr']=_0x2c5256,_0x1b73b9['width']=_0x532375['round'](_0x533a5d*_0x2c5256),_0x4cd400[_0x39a395(0x551)+'t']=_0x249da4[_0x39a395(0x1b1)](_0x1c1005*_0x2c5256),_0x5f063f[_0x39a395(0x2b2)+'ansfo'+'rm'](_0x2c5256,-0x1f7f*0x1+-0x1*-0x101e+-0x7f*-0x1f,0x56*-0x14+-0x12e+0x7e6,_0x2c5256,0x173c+0x5*-0xbc+-0x1390,-0x4a9+0x6cf*-0x2+-0x1247*-0x1);}}}catch(_0x512882){}},0xd*0x53+0x7*-0x209+0x11d8):(_0x3861db[_0x3cc387(0x2f5)+_0x3cc387(0x4c1)][_0x3cc387(0x1cc)+'e']('on',_0x504e3c),_0x329ca9(_0x4c57de)));var _0xd31b38=document[_0x3cc387(0x5cc)+'eElem'+_0x3cc387(0x346)](_0x3cc387(0x3e2)+'s');_0xd31b38['style'][_0x3cc387(0x48e)+'xt']=_0x3cc387(0x134)+'ion:f'+'ixed;'+_0x3cc387(0x5af)+':0;wi'+_0x3cc387(0x570)+_0x3cc387(0x617)+_0x3cc387(0x551)+_0x3cc387(0x416)+'vh;z-'+_0x3cc387(0xc1)+_0x3cc387(0x28f)+_0x3cc387(0x389)+_0x3cc387(0xd0)+'nter-'+_0x3cc387(0x2e6)+'s:non'+'e';var _0x33f59b=_0xd31b38[_0x3cc387(0x5f4)+'ntext']('2d');function _0xf62678(){var _0xc4c5bd=_0x3cc387;try{var _0x13e5f7=document['fulls'+'creen'+_0xc4c5bd(0x536)+'nt'],_0x131895=_0x13e5f7&&_0x30189c['VSUxD'](_0x13e5f7['tagNa'+'me'],_0xc4c5bd(0x4d7)+'S')?_0x13e5f7:document[_0xc4c5bd(0x3e0)]||document[_0xc4c5bd(0x63d)+_0xc4c5bd(0x562)+_0xc4c5bd(0x2f3)];if(_0x30189c['HRLUT'](_0xd31b38['paren'+_0xc4c5bd(0x4e5)],_0x131895))_0x131895[_0xc4c5bd(0x1be)+_0xc4c5bd(0x2d9)+'d'](_0xd31b38);}catch(_0x468528){try{document[_0xc4c5bd(0x3e0)]['appen'+'dChil'+'d'](_0xd31b38);}catch(_0x1475e9){}}}var _0x39ce34={'w':0x0,'h':0x0,'dpr':0x0};function _0x50483e(){var _0xb6e4ff=_0x3cc387,_0x4c218d=(_0xb6e4ff(0x1f7)+_0xb6e4ff(0x3fc)+_0xb6e4ff(0x204)+'|3')['split']('|'),_0xa6ba7=0x28*-0x32+0x1*0x14a3+-0xcd3;while(!![]){switch(_0x4c218d[_0xa6ba7++]){case'0':_0x39ce34[_0xb6e4ff(0x4df)]=_0x4486ca;continue;case'1':_0x39ce34['h']=_0x1ecd74;continue;case'2':_0xd31b38[_0xb6e4ff(0x551)+'t']=Math['round'](_0x15fd8d['WDcyE'](_0x1ecd74,_0x4486ca));continue;case'3':_0x33f59b[_0xb6e4ff(0x2b2)+_0xb6e4ff(0x4da)+'rm'](_0x4486ca,-0xae8+0x24e+0x89a,0x25c6+-0x160d+-0xfb9,_0x4486ca,0x15ac+-0x232a*-0x1+-0xa*0x5af,-0x1d17+-0x1*0x253f+-0x1*-0x4256);continue;case'4':if(_0x30f394===_0x39ce34['w']&&_0x1ecd74===_0x39ce34['h']&&_0x4486ca===_0x39ce34['dpr'])return;continue;case'5':var _0x4486ca=window[_0xb6e4ff(0x3ba)+_0xb6e4ff(0x44c)+_0xb6e4ff(0x2c3)+'o']||-0x1*0x1963+0x1299+0x6cb;continue;case'6':_0xd31b38['width']=Math['round'](_0x15fd8d['WDcyE'](_0x30f394,_0x4486ca));continue;case'7':var _0x30f394=window['inner'+_0xb6e4ff(0x4f1)],_0x1ecd74=window[_0xb6e4ff(0x295)+'Heigh'+'t'];continue;case'8':_0x39ce34['w']=_0x30f394;continue;}break;}}var _0x358e8e=0x21a*0x1+-0xbb+0x75*-0x3,_0x56a744=performance[_0x3cc387(0x525)](),_0xf51b50=0x1*-0x4d4+0xcdc+-0x808;function _0x55a46f(_0x1cbc21){var _0x45476b=_0x3cc387,_0x4c4582={'XEDze':_0x15fd8d['LizIk'],'eMjOo':function(_0x419880,_0x452c55){return _0x419880!==_0x452c55;}};if(_0x15fd8d[_0x45476b(0x18e)]==='qSUAW')_0x4544a0[_0x45476b(0x3a9)+'rokes']=_0x3c0f7e,_0x8f0f04();else{var _0x2424f9=Number(_0x56e5f0[_0x45476b(0x146)+'le'])||-0x2162+0x1d97+0x3cc,_0x15c6eb=_0x15fd8d['QnJjB'](0x1426+0x5*0x6c3+-0x35d3,_0x2424f9),_0x3f8404=(0x9cb+-0x1153+0x78c)*_0x2424f9,_0x3717f9=_0x15fd8d['WDcyE'](_0x15c6eb,0x1db8+0x92a+-0x26df)+_0x3f8404*(-0xf94*-0x1+-0x18*-0x10+-0x5f*0x2e),_0x32f534=_0x15fd8d[_0x45476b(0x1d7)](_0x15c6eb,-0x1314+-0x10*-0x139+-0x79)+_0x3f8404*(-0x1537+-0x332+0x7*0x37d),_0x3aaeb6=_0x56e5f0[_0x45476b(0x19a)],_0x536ad0=_0x3aaeb6==='br'?_0x15fd8d['XKdpd'](_0x15fd8d[_0x45476b(0x1c2)](_0x1cbc21[_0x45476b(0x35b)],0x777+-0x14d3+-0x6b6*-0x2),_0x3717f9):_0x1cbc21[_0x45476b(0x250)]+(-0x2*-0xc79+-0x1d4d+0x46b),_0x5d4af1=_0x3aaeb6==='ml'?_0x1cbc21[_0x45476b(0x5f7)]+_0x1cbc21['heigh'+'t']/(-0x25d8+0x211c+0x2*0x25f)-_0x32f534/(0x1*-0x1263+0x1641+0x34*-0x13):_0x15fd8d['XKdpd'](_0x1cbc21['botto'+'m']-_0x32f534,_0x15fd8d['rNFWU'](_0x3aaeb6,'bl')?0x1d*-0xc9+0x762+0xfc3:0x102a*0x1+-0x6*0x209+0x2*-0x1af),_0x3c9702=(_0x3e950c,_0xe3f2dd,_0x201350,_0x2534a9,_0x5b1259,_0x138561,_0x2f26f4)=>{var _0x113458=_0x45476b,_0x390577={'bSoRF':function(_0x4bc2ce,_0x845fe0,_0x23d650,_0x3c8331,_0x29c97f){return _0x4bc2ce(_0x845fe0,_0x23d650,_0x3c8331,_0x29c97f);}};if('fENLt'===_0x113458(0x3b7)){var _0x33ab40=_0x5327c8[_0x113458(0x1aa)](_0xe3f2dd);_0x33f59b[_0x113458(0x53d)](),_0x33f59b['begin'+'Path']();if(_0x33f59b['round'+'Rect'])_0x33f59b[_0x113458(0x1b1)+_0x113458(0x3c1)](_0x201350,_0x2534a9,_0x5b1259,_0x138561,(0x2453+-0x1*-0x2084+-0x44d0)*_0x2424f9);else _0x33f59b[_0x113458(0x24b)](_0x201350,_0x2534a9,_0x5b1259,_0x138561);_0x33f59b[_0x113458(0x301)+'tyle']=_0x33ab40?_0x15fd8d[_0x113458(0x241)]:'rgba('+_0x113458(0x58e)+'16,0.'+'7)',_0x33f59b[_0x113458(0x550)](),_0x33f59b[_0x113458(0x306)+_0x113458(0x45f)]=-0x3f*0x94+0x1724+-0x1*-0xd49,_0x33f59b['strok'+_0x113458(0x2a8)+'e']=_0x33ab40?_0x3ccc06:'rgba('+_0x113458(0x2cc)+'07,15'+_0x113458(0x30d)+'5)',_0x33f59b['strok'+'e']();_0x33ab40&&(_0x15fd8d['TlZpt'](_0x113458(0x3be),_0x113458(0x12c))?(_0x33f59b[_0x113458(0x372)+'wColo'+'r']=_0x2345b7,_0x33f59b[_0x113458(0x372)+_0x113458(0x154)]=0x3*0x9f1+-0x38*0x3e+-0x1cd*0x9,_0x33f59b[_0x113458(0x550)](),_0x33f59b[_0x113458(0x372)+'wBlur']=-0x1*0x59+0x1712+-0x16b9):(_0x390577[_0x113458(0x365)](_0x2317e7,_0x529b1a,0xe0b*-0x1+-0x17cd+0x2624,_0x113458(0x52f),_0x33d66a),_0x390577['bSoRF'](_0x8249b7,_0x3d1627,-0x270b+-0xa*0x2ed+0x44a1,_0x113458(0x52f),_0xc3ceca)));_0x33f59b['fillS'+'tyle']=_0x33ab40?_0x15fd8d[_0x113458(0x2c9)]:'rgba('+_0x113458(0x29b)+_0x113458(0xde)+_0x113458(0x5aa)+')',_0x33f59b[_0x113458(0x2e3)+'lign']=_0x113458(0x5b8)+'r',_0x33f59b[_0x113458(0x43d)+'aseli'+'ne']=_0x15fd8d['Vuxff'],_0x33f59b['font']=_0x15fd8d[_0x113458(0x12b)](_0x15fd8d[_0x113458(0x12b)](_0x15fd8d[_0x113458(0x253)],Math[_0x113458(0x1b1)]((-0x1b0a+-0x4b2+0x1fc8)*_0x2424f9)),_0x113458(0x604)+'-sans'+_0x113458(0x64b)+_0x113458(0x351)+'tem-u'+_0x113458(0x1fb)+_0x113458(0x188)+'if'),_0x33f59b[_0x113458(0x641)+_0x113458(0x3c8)](_0x3e950c,_0x15fd8d['tQeCD'](_0x201350,_0x15fd8d['ZYGMr'](_0x5b1259,0x22ae*-0x1+-0x3*0xa95+-0x1*-0x426f)),_0x2534a9+_0x15fd8d[_0x113458(0x503)](_0x138561,0x2246+-0x1068+-0x9*0x1fc)-(_0x2f26f4?(0x1af*-0x5+-0xda*0xd+-0x1382*-0x1)*_0x2424f9:0x1603+-0x59b*0x1+0x4*-0x41a));if(_0x2f26f4){if(_0x113458(0x35d)===_0x113458(0x46d))try{var _0x4d2bd5=_0x4c4582[_0x113458(0x30c)]['split']('|'),_0x4d3e17=0x257a+0x11ba*0x2+0x2477*-0x2;while(!![]){switch(_0x4d2bd5[_0x4d3e17++]){case'0':_0x2c9d7d[_0x3604da]=_0x4f1c02;continue;case'1':_0x4f1c02['enabl'+'ed']=_0x4c4582['eMjOo'](_0x2f7ebf,![]);continue;case'2':return _0x4f1c02;case'3':var _0x4f1c02=_0x5a7b2c[_0x113458(0x3a6)+_0x113458(0x434)]({'typeName':_0x6e301a,'methodName':_0x399cda,'params':_0x5ef184,'returnType':_0xd81146},_0xda4ee2);continue;case'4':_0x419c7b[_0x113458(0x2ee)+'Total']++;continue;}break;}}catch(_0x177270){return _0x5f395b[_0x113458(0x572)](_0x113458(0x2e5)+_0x113458(0xb5)+'ur]\x20h'+_0x113458(0x103)+'eg\x20fa'+'iled:',_0x14875d,_0x177270&&_0x177270[_0x113458(0x282)+'ge']),null;}else _0x33f59b[_0x113458(0x5d5)]=_0x15fd8d['tQeCD'](_0x113458(0x33a)+Math['round'](_0x15fd8d['WDcyE'](0x35*-0x60+-0xd81+0x216a,_0x2424f9)),'px\x20ui'+_0x113458(0x294)+'-seri'+_0x113458(0x351)+_0x113458(0x218)+_0x113458(0x1fb)+_0x113458(0x188)+'if'),_0x33f59b['fillS'+'tyle']=_0x33ab40?_0x15fd8d[_0x113458(0x2c9)]:_0x15fd8d[_0x113458(0x4a5)],_0x33f59b['fillT'+'ext'](_0x2f26f4,_0x15fd8d[_0x113458(0x5e4)](_0x201350,_0x15fd8d[_0x113458(0xff)](_0x5b1259,-0xc1a+0x1b57+-0xf3b)),_0x15fd8d['VlhCv'](_0x2534a9+_0x138561/(-0x1*-0x1b1+-0x2*-0xe77+0x11*-0x1cd),(-0x6f6+-0x37*-0x1b+0x131)*_0x2424f9));}_0x33f59b['resto'+'re']();}else{var _0x1451f0=-0x459+-0x1*-0x1a4d+-0x2*0xafa;for(var _0x24f319 in _0x4f0d70){if(_0x5c61e4[_0x24f319]&&_0x5ccbcf[_0x24f319]['appli'+'ed'])_0x1451f0++;}_0x55bf0c['hooks'+'Ok']=_0x1451f0;}};_0x3c9702('W',_0x15fd8d['qeNnz'],_0x536ad0+_0x15c6eb+_0x3f8404,_0x5d4af1,_0x15c6eb,_0x15c6eb),_0x3c9702('A',_0x15fd8d['PGksU'],_0x536ad0,_0x15fd8d[_0x45476b(0x5e4)](_0x5d4af1+_0x15c6eb,_0x3f8404),_0x15c6eb,_0x15c6eb),_0x3c9702('S',_0x15fd8d[_0x45476b(0x423)],_0x15fd8d['qjhsa'](_0x15fd8d['tQeCD'](_0x536ad0,_0x15c6eb),_0x3f8404),_0x5d4af1+_0x15c6eb+_0x3f8404,_0x15c6eb,_0x15c6eb),_0x3c9702('D',_0x15fd8d['PZFsc'],_0x15fd8d['qjhsa'](_0x536ad0,(_0x15c6eb+_0x3f8404)*(-0xce6+0x1e6d+-0x1185)),_0x5d4af1+_0x15c6eb+_0x3f8404,_0x15c6eb,_0x15c6eb);var _0x1155bd=(_0x3717f9-_0x3f8404)/(0xfd3*0x1+0x171d+0x67d*-0x6),_0x1d1a56=_0x5d4af1+_0x15fd8d[_0x45476b(0xf8)](_0x15c6eb+_0x3f8404,0x1*-0x8e+0x1f8e+-0x1efe);_0x3c9702(_0x45476b(0x18f),_0x45476b(0x645)+'1',_0x536ad0,_0x1d1a56,_0x1155bd,_0x15c6eb,_0x56e5f0[_0x45476b(0x4f2)]?_0x49e795(0x2*0xc4f+-0x16a8+0x3*-0xa7)+'\x20CPS':''),_0x15fd8d[_0x45476b(0x606)](_0x3c9702,_0x45476b(0x5f8),'mouse'+'3',_0x15fd8d['nDsME'](_0x536ad0+_0x1155bd,_0x3f8404),_0x1d1a56,_0x1155bd,_0x15c6eb,_0x56e5f0[_0x45476b(0x4f2)]?_0x15fd8d[_0x45476b(0x12b)](_0x49e795(0x281*0x1+0x1c64+-0x1ee2),_0x45476b(0x1ad)):''),_0x3c9702('',_0x45476b(0x42a),_0x536ad0,_0x15fd8d[_0x45476b(0x374)](_0x1d1a56,_0x15c6eb)+_0x3f8404,_0x3717f9,_0x15fd8d[_0x45476b(0x1d7)](_0x15c6eb,0x519*0x3+-0x5*-0x643+-0x174d*0x2+0.45));}}function _0x225cb8(_0x3e538e){var _0x39c1cd=_0x3cc387;if(_0x39c1cd(0x2af)!==_0x30189c['JymIG']){_0x391922[_0x39c1cd(0x49b)+'oaded']=!!_0x5533da[_0x39c1cd(0x4c9)+_0x39c1cd(0x5c9)+_0x39c1cd(0x310)];try{var _0xf46ef0=0xa97*-0x3+0x1fcc+-0x7*0x1;for(var _0x1b6b05 in _0x578e57){if(_0x405024[_0x1b6b05]&&_0x27005b[_0x1b6b05]['appli'+'ed'])_0xf46ef0++;}_0x85dee4['hooks'+'Ok']=_0xf46ef0;}catch(_0xca659){}}else{var _0x5234bf=_0x30189c[_0x39c1cd(0x569)](_0x3e538e['width'],0x2e9*0xc+-0x20c3+-0x227*0x1),_0x1b24d6=_0x3e538e[_0x39c1cd(0x551)+'t']/(-0x5*0x637+-0x2063+-0x6*-0xa94),_0x3b935b=Number(_0x56e5f0[_0x39c1cd(0x480)+'e'])||-0x2573*0x1+0x95*0x2e+0xaae,_0x42d1c4=/^#[0-9a-f]{6}$/i[_0x39c1cd(0x13d)](_0x56e5f0['chCol'+'or'])?_0x56e5f0[_0x39c1cd(0x595)+'or']:_0x30189c[_0x39c1cd(0x611)];_0x33f59b[_0x39c1cd(0x53d)](),_0x33f59b['strok'+_0x39c1cd(0x2a8)+'e']=_0x42d1c4,_0x33f59b[_0x39c1cd(0x301)+_0x39c1cd(0x54f)]=_0x42d1c4,_0x33f59b[_0x39c1cd(0x306)+'idth']=Math[_0x39c1cd(0x3c7)](0x1*0x1022+0xb0c*-0x3+0x1103+0.5,(0x1*-0x247+0x3*0x317+-0x6fc)*_0x3b935b),_0x33f59b['shado'+'wColo'+'r']=_0x42d1c4,_0x33f59b[_0x39c1cd(0x372)+_0x39c1cd(0x154)]=-0x1cb5+-0x827*-0x1+0x1494;var _0x20391d=_0x30189c[_0x39c1cd(0x360)](-0x3ed+-0x1efc+0x22ef*0x1,_0x3b935b),_0x4d3bfa=(-0x25*-0x97+-0x25a3+0x548*0x3)*_0x3b935b;_0x33f59b[_0x39c1cd(0x407)+_0x39c1cd(0x5c4)](),_0x33f59b['moveT'+'o'](_0x30189c['YkCsv'](_0x5234bf-_0x20391d,_0x4d3bfa),_0x1b24d6),_0x33f59b[_0x39c1cd(0xfe)+'o'](_0x5234bf-_0x20391d,_0x1b24d6),_0x33f59b[_0x39c1cd(0x2f9)+'o'](_0x30189c['MQxTr'](_0x5234bf,_0x20391d),_0x1b24d6),_0x33f59b[_0x39c1cd(0xfe)+'o'](_0x30189c[_0x39c1cd(0x47b)](_0x5234bf,_0x20391d)+_0x4d3bfa,_0x1b24d6),_0x33f59b['moveT'+'o'](_0x5234bf,_0x30189c[_0x39c1cd(0x390)](_0x30189c['eoGQU'](_0x1b24d6,_0x20391d),_0x4d3bfa)),_0x33f59b[_0x39c1cd(0xfe)+'o'](_0x5234bf,_0x1b24d6-_0x20391d),_0x33f59b[_0x39c1cd(0x2f9)+'o'](_0x5234bf,_0x1b24d6+_0x20391d),_0x33f59b['lineT'+'o'](_0x5234bf,_0x1b24d6+_0x20391d+_0x4d3bfa),_0x33f59b[_0x39c1cd(0x144)+'e'](),_0x33f59b[_0x39c1cd(0x407)+_0x39c1cd(0x5c4)](),_0x33f59b[_0x39c1cd(0x5c8)](_0x5234bf,_0x1b24d6,(0x1632*0x1+-0x37e*-0x9+-0x359f+0.6000000000000001)*_0x3b935b,-0x305*-0x2+-0x2*-0x62f+-0x1268,Math['PI']*(0x227*0x1+-0x61f*0x2+0xa19)),_0x33f59b['fill'](),_0x33f59b[_0x39c1cd(0xf3)+'re']();}}function _0x58ec0b(_0x524f8d){var _0xc617af=_0x3cc387;_0x33f59b[_0xc617af(0x53d)](),_0x33f59b[_0xc617af(0x5d5)]=_0x15fd8d['mjTVq'],_0x33f59b['textA'+_0xc617af(0x26a)]=_0x15fd8d[_0xc617af(0x476)],_0x33f59b[_0xc617af(0x43d)+_0xc617af(0x4c4)+'ne']='top';var _0x46f4e3=-0x28f+-0xbed*-0x1+-0x1*0x932,_0x2acca5=-0x6a4*0x5+-0x1bf4+0x3d34,_0x43abd2=(_0x1dd777,_0x33b1f9)=>{var _0x9a5dfd=_0xc617af,_0x3c653d={'sVJzU':function(_0x12e9e6,_0x2c0dfb,_0x232921){return _0x15fd8d['wWlSN'](_0x12e9e6,_0x2c0dfb,_0x232921);}};if(_0x15fd8d[_0x9a5dfd(0x576)]!==_0x15fd8d['WGgBQ'])_0x33f59b['fillS'+'tyle']=_0x33b1f9||_0x15fd8d['vxfDa'],_0x33f59b[_0x9a5dfd(0x641)+'ext'](_0x1dd777,_0x2acca5,_0x46f4e3),_0x46f4e3+=-0x20f0+0x1*0x2202+0x2*-0x81;else{var _0x32b69f=_0x3c653d[_0x9a5dfd(0x652)](_0x516eb4,_0x4e9c8f,_0x112fa8=>{_0x41103a['class'+'List']['toggl'+'e']('on',_0x112fa8),_0x45e868(_0x112fa8);});_0x239517[_0x9a5dfd(0x1be)+'d'](_0x1d75d6,_0x32b69f);}};_0x43abd2(_0xc617af(0x41f)+'A\x20KOU'+_0xc617af(0x193)+'1',_0x15fd8d['MhIYn']);if(_0x56e5f0[_0xc617af(0x20a)])_0x43abd2(_0x15fd8d['WmCTm'](_0xf51b50,_0xc617af(0x203)));if(!_0x30de35[_0xc617af(0x49b)+_0xc617af(0xe9)])_0x43abd2(_0xc617af(0x344)+'ng\x20fo'+'r\x20gam'+'e…',_0x15fd8d['jBkTJ']);_0x33f59b[_0xc617af(0xf3)+'re']();}function _0x357fd1(){var _0x1464ac=_0x3cc387;requestAnimationFrame(_0x357fd1),_0x358e8e++;var _0x41d7d3=performance[_0x1464ac(0x525)]();_0x30189c['qKktc'](_0x41d7d3-_0x56a744,-0x2083+-0x4*0xc0+-0xc7d*-0x3)&&(_0xf51b50=Math['round'](_0x30189c['TiKPa'](_0x358e8e*(-0x1*0x619+-0x1fdb+0x29dc),_0x41d7d3-_0x56a744)),_0x358e8e=-0x1*-0x6c7+-0x5a8+0x29*-0x7,_0x56a744=_0x41d7d3);_0x30189c[_0x1464ac(0x29f)](_0x50483e),_0xf62678(),_0x33f59b['clear'+_0x1464ac(0x3c1)](-0x2228+-0x191+0x23b9,-0xa87+-0x5ba+0x1041,_0x39ce34['w'],_0x39ce34['h']);var _0x311bf6={'left':0x0,'top':0x0,'right':_0x39ce34['w'],'bottom':_0x39ce34['h'],'width':_0x39ce34['w'],'height':_0x39ce34['h']};if(_0x56e5f0[_0x1464ac(0x32e)+'hair'])_0x30189c['NpLHl'](_0x225cb8,_0x311bf6);if(_0x56e5f0['keyst'+'rokes'])_0x55a46f(_0x311bf6);_0x58ec0b(_0x311bf6);}var _0x57f4b9=document['creat'+_0x3cc387(0x169)+_0x3cc387(0x346)]('div');_0x57f4b9['id']='sakur'+_0x3cc387(0x587),_0x57f4b9[_0x3cc387(0x56c)]['cssTe'+'xt']=_0x30189c[_0x3cc387(0x1b4)];var _0xa1dbbb=_0x57f4b9['attac'+_0x3cc387(0x216)+'ow']({'mode':'open'});(document['body']||document['docum'+_0x3cc387(0x562)+'ement'])['appen'+'dChil'+'d'](_0x57f4b9);var _0x38d178=![],_0xb5dea6={};try{_0xb5dea6=JSON['parse'](localStorage[_0x3cc387(0x534)+'em'](_0x30189c[_0x3cc387(0x659)])||'{}');}catch(_0x506bf8){}function _0x5cd2e5(){var _0x5a201c=_0x3cc387,_0x81ff8b={'ZOqms':_0x15fd8d[_0x5a201c(0x5ca)],'YcHNS':_0x5a201c(0x137)+'b','sQOnP':function(_0x5bb695,_0x2496d6){var _0x203016=_0x5a201c;return _0x15fd8d[_0x203016(0x1d6)](_0x5bb695,_0x2496d6);},'Dgfll':_0x15fd8d[_0x5a201c(0x493)],'qkHfN':_0x15fd8d['ApESJ']};if(_0x5a201c(0x209)!=='qLqKy')try{localStorage[_0x5a201c(0x4d3)+'em']('sakur'+_0x5a201c(0x4eb)+_0x5a201c(0x1af)+'v1',JSON['strin'+'gify'](_0xb5dea6));}catch(_0xa80e28){}else{var _0xd9add0=_0xd909e7[_0x5a201c(0x5cc)+_0x5a201c(0x169)+'ent'](_0x5a201c(0x50e)+'n');_0xd9add0['type']=_0x81ff8b['ZOqms'],_0xd9add0[_0x5a201c(0x2f5)+'Name']=_0x81ff8b[_0x5a201c(0x2ad)],_0xd9add0[_0x5a201c(0x603)]=_0x26c2e2['label'],_0xd9add0[_0x5a201c(0x295)+'HTML']=_0x81ff8b['sQOnP'](_0x81ff8b[_0x5a201c(0x640)]+_0x2b1906['label'],_0x81ff8b['qkHfN']),_0xd9add0[_0x5a201c(0x500)+'ck']=(_0x388a11=>()=>_0x3dee55(_0x388a11))(_0x1e1097['id']),_0x1e9bb4['set'](_0x3be09b['id'],_0xd9add0),_0x5cfd7d['appen'+_0x5a201c(0x2d9)+'d'](_0xd9add0);}}function _0x38467f(_0x312224,_0x41e097){var _0x266778=_0x3cc387,_0x57f1ec=_0x30189c['vGQZn']['split']('|'),_0x2cc6c5=0xd9*0x7+-0x5*0x259+0x1*0x5ce;while(!![]){switch(_0x57f1ec[_0x2cc6c5++]){case'0':_0x136e5c[_0x266778(0x1e8)]='butto'+'n';continue;case'1':_0x136e5c[_0x266778(0x35c)+_0x266778(0xb3)+'te']('aria-'+'check'+'ed',_0x30189c[_0x266778(0x39a)](String,!!_0x312224));continue;case'2':_0x136e5c['setAt'+_0x266778(0xb3)+'te'](_0x266778(0x20d),'switc'+'h');continue;case'3':var _0x136e5c=document[_0x266778(0x5cc)+_0x266778(0x169)+_0x266778(0x346)]('butto'+'n');continue;case'4':_0x136e5c[_0x266778(0x2f5)+'Name']=_0x30189c['bpOFe'];continue;case'5':return _0x136e5c;case'6':_0x136e5c[_0x266778(0x500)+'ck']=_0x4f10b6=>{var _0x512bd0=_0x266778;_0x4f10b6[_0x512bd0(0xc3)+_0x512bd0(0x520)+_0x512bd0(0x369)]();var _0x52896f=_0x136e5c['getAt'+_0x512bd0(0xb3)+'te']('aria-'+_0x512bd0(0x1ae)+'ed')!=='true';_0x136e5c[_0x512bd0(0x35c)+'tribu'+'te']('aria-'+_0x512bd0(0x1ae)+'ed',String(_0x52896f)),_0x15fd8d['BpAVz'](_0x41e097,_0x52896f);};continue;}break;}}function _0x57986c(_0x1d4f80,_0x5012a1,_0x381892,_0x358dd5,_0x18785e){var _0x58822d=_0x3cc387,_0x498385={'MXCsS':function(_0x1585c3,_0xbb4887){return _0x1585c3(_0xbb4887);},'ULNRp':function(_0x449b6a,_0x10b7ff){return _0x30189c['kUXCt'](_0x449b6a,_0x10b7ff);},'VHNqR':function(_0x2b91d0,_0x2edcfe){var _0xc9ade6=_0x58ee;return _0x30189c[_0xc9ade6(0x63a)](_0x2b91d0,_0x2edcfe);},'neehi':function(_0x340ce5,_0x5d9f99){return _0x340ce5-_0x5d9f99;}},_0x6e33d3=document['creat'+'eElem'+_0x58822d(0x346)](_0x58822d(0x579));_0x6e33d3[_0x58822d(0x2f5)+_0x58822d(0x5df)]=_0x58822d(0xe0)+_0x58822d(0x1ef);var _0x4d08ff=document['creat'+_0x58822d(0x169)+_0x58822d(0x346)](_0x58822d(0xd5));_0x4d08ff[_0x58822d(0x1e8)]=_0x58822d(0x46b),_0x4d08ff['class'+_0x58822d(0x5df)]='sk-sl'+_0x58822d(0x52e),_0x4d08ff['min']=_0x5012a1,_0x4d08ff[_0x58822d(0x3c7)]=_0x381892,_0x4d08ff[_0x58822d(0x3d7)]=_0x358dd5,_0x4d08ff[_0x58822d(0x3a7)]=_0x1d4f80;var _0x183857=document['creat'+'eElem'+'ent'](_0x58822d(0x37a));_0x183857['class'+_0x58822d(0x5df)]=_0x30189c[_0x58822d(0xf4)],_0x183857[_0x58822d(0x145)+_0x58822d(0x30e)+'t']=_0x30189c[_0x58822d(0x2d8)](String,_0x1d4f80);var _0x3827f0=()=>{var _0x4f866e=_0x58822d;'ZPdqD'===_0x4f866e(0x4ce)?(_0x183857[_0x4f866e(0x145)+'onten'+'t']=_0x498385[_0x4f866e(0x181)](String,_0x4d08ff[_0x4f866e(0x3a7)]),_0x6e33d3[_0x4f866e(0x56c)][_0x4f866e(0x2d7)+_0x4f866e(0x586)+'y'](_0x4f866e(0x487),_0x498385['ULNRp'](_0x498385[_0x4f866e(0x166)]((_0x4d08ff[_0x4f866e(0x3a7)]-_0x5012a1)/_0x498385[_0x4f866e(0x559)](_0x381892,_0x5012a1),0x33b*0x1+-0x7da+0x503),'%'))):(_0x242d7d=new _0x20cdac(),_0x5e88ed[_0x4f866e(0x5a9)](_0x287a85,_0x4c44a2));};return _0x4d08ff['oninp'+'ut']=()=>{var _0x4639b8=_0x58822d;_0x15fd8d['NCLWH'](_0x3827f0),_0x15fd8d[_0x4639b8(0x4bd)](_0x18785e,_0x15fd8d[_0x4639b8(0x4bd)](Number,_0x4d08ff['value']));},_0x3827f0(),_0x6e33d3['appen'+'d'](_0x4d08ff,_0x183857),_0x6e33d3;}function _0x39f0aa(_0xdffcd,_0x446950){var _0x25f753=_0x3cc387,_0x4b5810=document['creat'+_0x25f753(0x169)+_0x25f753(0x346)](_0x25f753(0xd5));return _0x4b5810[_0x25f753(0x1e8)]=_0x30189c[_0x25f753(0x429)],_0x4b5810[_0x25f753(0x2f5)+'Name']=_0x25f753(0x630)+'lor',_0x4b5810[_0x25f753(0x3a7)]=/^#[0-9a-f]{6}$/i['test'](_0xdffcd)?_0xdffcd:_0x30189c[_0x25f753(0x611)],_0x4b5810[_0x25f753(0x314)+'ut']=()=>_0x446950(_0x4b5810['value']),_0x4b5810;}function _0x9e56a4(_0xd13ce7,_0x297a60,_0x742386){var _0x46646d=_0x3cc387,_0x571aff=document[_0x46646d(0x5cc)+_0x46646d(0x169)+'ent']('selec'+'t');_0x571aff['class'+_0x46646d(0x5df)]=_0x15fd8d[_0x46646d(0x43b)];for(var [_0xf02921,_0x885fa0]of _0x297a60){var _0x30aa55=document[_0x46646d(0x5cc)+_0x46646d(0x169)+_0x46646d(0x346)](_0x46646d(0x2c5)+'n');_0x30aa55[_0x46646d(0x3a7)]=_0xf02921,_0x30aa55['textC'+'onten'+'t']=_0x885fa0,_0x571aff['appen'+_0x46646d(0x2d9)+'d'](_0x30aa55);}return _0x571aff[_0x46646d(0x3a7)]=_0xd13ce7,_0x571aff['oncha'+'nge']=()=>_0x742386(_0x571aff[_0x46646d(0x3a7)]),_0x571aff;}function _0xb4079b(_0x43f94a,_0x41709a){var _0x27b598=_0x3cc387,_0x4e53e5=document[_0x27b598(0x5cc)+'eElem'+_0x27b598(0x346)](_0x15fd8d[_0x27b598(0x5ca)]);return _0x4e53e5[_0x27b598(0x1e8)]=_0x27b598(0x50e)+'n',_0x4e53e5['class'+_0x27b598(0x5df)]='sk-bt'+'n',_0x4e53e5[_0x27b598(0x145)+'onten'+'t']=_0x43f94a,_0x4e53e5['oncli'+'ck']=_0x4bb1b5=>{var _0xe635d2=_0x27b598;_0x15fd8d[_0xe635d2(0x3dc)]!==_0x15fd8d['acwzz']?(_0x4bb1b5[_0xe635d2(0xc3)+'ropag'+'ation'](),_0x15fd8d['NCLWH'](_0x41709a)):(_0x31acb0['preve'+_0xe635d2(0x212)+_0xe635d2(0x370)](),_0x5700ed());},_0x4e53e5;}function _0x31bc17(_0x4b0b67,_0x64c6de,_0x5922bf){var _0x1077e7=_0x3cc387,_0x541b72=document['creat'+'eElem'+_0x1077e7(0x346)](_0x1077e7(0x579));_0x541b72['class'+'Name']='sk-ct'+'l';var _0x1a4bb3=document[_0x1077e7(0x5cc)+_0x1077e7(0x169)+_0x1077e7(0x346)]('span');_0x1a4bb3['class'+'Name']=_0x30189c[_0x1077e7(0x575)],_0x1a4bb3['textC'+_0x1077e7(0x30e)+'t']=_0x4b0b67;if(_0x64c6de){if(_0x30189c[_0x1077e7(0x104)]===_0x1077e7(0x50b))_0x50b6dd[_0x1077e7(0x146)+'le']=_0x190e27,_0xfe7a3b();else{var _0x206967=document['creat'+_0x1077e7(0x169)+_0x1077e7(0x346)]('small');_0x206967[_0x1077e7(0x2f5)+_0x1077e7(0x5df)]=_0x1077e7(0x49c)+'nt',_0x206967['textC'+_0x1077e7(0x30e)+'t']=_0x64c6de,_0x1a4bb3[_0x1077e7(0x1be)+'dChil'+'d'](_0x206967);}}return _0x541b72['appen'+'d'](_0x1a4bb3,_0x5922bf),_0x541b72;}function _0x2e6249(_0x50cec5,_0x29ec4c){var _0xae83a1=_0x3cc387;if(_0x30189c[_0xae83a1(0x42c)](_0xae83a1(0x467),_0xae83a1(0x392))){var _0x40d82f=document[_0xae83a1(0x5cc)+'eElem'+'ent'](_0x30189c['wseNI']);return _0x40d82f[_0xae83a1(0x2f5)+'Name']=_0x30189c['hFKbG'](_0x30189c[_0xae83a1(0x5a6)],_0x29ec4c?'\x20err':''),_0x40d82f[_0xae83a1(0x145)+_0xae83a1(0x30e)+'t']=_0x50cec5,_0x40d82f;}else try{_0x20449a['enabl'+'ed']=![];}catch(_0x67a12f){}}function _0x5e1510(_0x28b80a,_0x2a6f4a,_0x4244e2,_0x59e2e8,_0x5b8322){var _0x454e4a=_0x3cc387,_0x3e2a08={'baLsK':_0x30189c[_0x454e4a(0x259)]},_0x4b5cbd=document[_0x454e4a(0x5cc)+'eElem'+_0x454e4a(0x346)]('div');_0x4b5cbd['class'+_0x454e4a(0x5df)]=_0x30189c['nrfuT'](_0x454e4a(0x1f5)+'rd',_0x4244e2?_0x454e4a(0x343):'');var _0x3ea800=document['creat'+_0x454e4a(0x169)+'ent']('div');_0x3ea800[_0x454e4a(0x2f5)+_0x454e4a(0x5df)]=_0x30189c[_0x454e4a(0x469)];var _0x4b6090=document[_0x454e4a(0x5cc)+'eElem'+_0x454e4a(0x346)](_0x30189c[_0x454e4a(0x1eb)]);_0x4b6090['class'+'Name']=_0x454e4a(0x1f5)+_0x454e4a(0x3b6)+'tle';var _0x1d7bda=document[_0x454e4a(0x5cc)+_0x454e4a(0x169)+_0x454e4a(0x346)](_0x454e4a(0x5bd)+'g');_0x1d7bda['textC'+_0x454e4a(0x30e)+'t']=_0x28b80a,_0x4b6090[_0x454e4a(0x1be)+_0x454e4a(0x2d9)+'d'](_0x1d7bda);if(_0x59e2e8){if(_0x30189c['pDahZ']!==_0x454e4a(0xf9)){var _0x37d57c=_0x3e2a08['baLsK']['split']('|'),_0xd8543a=-0x27*-0x61+0x170f*-0x1+0x848;while(!![]){switch(_0x37d57c[_0xd8543a++]){case'0':return _0x108570;case'1':_0x32bc0b[_0x4a33e1]=_0x108570;continue;case'2':_0x3bcdec[_0x454e4a(0x2ee)+'Total']++;continue;case'3':_0x108570['enabl'+'ed']=_0x489c27!==![];continue;case'4':var _0x108570=_0x1db6e6[_0x454e4a(0x3a6)+_0x454e4a(0x434)]({'typeName':_0x71d9df,'methodName':_0xd5ade2,'params':_0x36fc48,'returnType':_0x162605},_0x56f0a0);continue;}break;}}else{var _0x43ce48=_0x30189c[_0x454e4a(0x233)](_0x38467f,_0x4244e2,_0x33280d=>{var _0x275462=_0x454e4a;_0x4b5cbd[_0x275462(0x2f5)+'List'][_0x275462(0x1cc)+'e']('on',_0x33280d),_0x59e2e8(_0x33280d);});_0x3ea800['appen'+'d'](_0x4b6090,_0x43ce48);}}else{if(_0x454e4a(0x527)==='ZWQMU')_0x3ea800['appen'+'dChil'+'d'](_0x4b6090);else try{var _0x1a2384=_0x15fd8d['zicCQ']['split']('|'),_0x431adb=-0x51*0x16+0x324+0x3d2;while(!![]){switch(_0x1a2384[_0x431adb++]){case'0':var _0x5e5352=_0x365ac4[_0x454e4a(0x3a6)+'ostfi'+'x']({'typeName':_0x52e19c,'methodName':_0x468e38,'params':_0x318c0d,'returnType':_0x3003b4},_0x16a1f7);continue;case'1':return _0x5e5352;case'2':_0x1c043d[_0x1f6091]=_0x5e5352;continue;case'3':_0x3832ab['hooks'+_0x454e4a(0x42d)]++;continue;case'4':_0x5e5352['enabl'+'ed']=_0x15fd8d['TlZpt'](_0x371bd5,![]);continue;}break;}}catch(_0x4e7675){return _0x599577['warn'](_0x15fd8d['QaxYe'],_0x402859,_0x4e7675&&_0x4e7675[_0x454e4a(0x282)+'ge']),null;}}_0x4b5cbd[_0x454e4a(0x1be)+_0x454e4a(0x2d9)+'d'](_0x3ea800);if(_0x5b8322&&_0x5b8322['lengt'+'h']){var _0x55cfdb=document[_0x454e4a(0x5cc)+_0x454e4a(0x169)+_0x454e4a(0x346)]('div');_0x55cfdb['class'+_0x454e4a(0x5df)]=_0x454e4a(0x627)+_0x454e4a(0x4fc);var _0x352fd7=document[_0x454e4a(0x5cc)+_0x454e4a(0x169)+_0x454e4a(0x346)](_0x454e4a(0x579));_0x352fd7['class'+_0x454e4a(0x5df)]=_0x30189c['siCVb'],_0x352fd7[_0x454e4a(0x145)+'onten'+'t']=_0x2a6f4a,_0x55cfdb['appen'+_0x454e4a(0x2d9)+'d'](_0x352fd7);for(var _0x3e4a8e of _0x5b8322)_0x55cfdb['appen'+_0x454e4a(0x2d9)+'d'](_0x3e4a8e);_0x4b5cbd[_0x454e4a(0x1be)+_0x454e4a(0x2d9)+'d'](_0x55cfdb);}return _0x4b5cbd;}var _0x4daddf=[{'id':_0x3cc387(0xe2)+'t','label':_0x30189c[_0x3cc387(0x3a4)]},{'id':_0x3cc387(0x566),'label':'Move'},{'id':_0x3cc387(0x3a1)+'l','label':'Visua'+'l'},{'id':_0x3cc387(0x55b),'label':_0x30189c[_0x3cc387(0x13f)]},{'id':'safe','label':_0x30189c['dTxSQ']}];function _0x1f25f3(){var _0x4ad84b=_0x3cc387,_0x502087={'UcUpj':function(_0x334b69,_0x3ccd3f){return _0x334b69===_0x3ccd3f;},'shWwb':'WXqGN'},_0x4e480d=_0x30de35[_0x4ad84b(0x2d2)+_0x4ad84b(0x4dd)]?_0x15fd8d['vmpwj']:_0x30de35[_0x4ad84b(0xd8)]?_0x15fd8d[_0x4ad84b(0x374)](_0x15fd8d['VlhCv'](_0x15fd8d[_0x4ad84b(0x642)](_0x4ad84b(0x17e)+_0x4ad84b(0x2cd)+'\x20'+(_0x30de35['hooks'+'Total']?_0x15fd8d['YLZBs'](_0x30de35[_0x4ad84b(0x2ee)+'Ok']+'/'+_0x30de35['hooks'+_0x4ad84b(0x42d)],_0x15fd8d['MzSkq']):_0x15fd8d['xMcFN'])+_0x15fd8d[_0x4ad84b(0x561)]+(_0x30de35[_0x4ad84b(0x49b)+_0x4ad84b(0xe9)]?'loade'+'d':_0x15fd8d[_0x4ad84b(0x5a2)]),'\x20|\x20sh'+'ooter'+'\x20')+(_0x30de35[_0x4ad84b(0x620)+'ers']?_0x15fd8d[_0x4ad84b(0x177)]:'none'),'\x20|\x20mo'+_0x4ad84b(0x62f)+'t\x20'),_0x30de35['movem'+'ents']?_0x15fd8d['IHgsW']:_0x15fd8d[_0x4ad84b(0x2cf)]):_0x4ad84b(0x17e)+_0x4ad84b(0x460)+_0x4ad84b(0x2f6)+_0x4ad84b(0x457)+_0x4ad84b(0x153)+_0x4ad84b(0x258)+'einst'+'all\x20t'+_0x4ad84b(0x3ce)+_0x4ad84b(0x549)+'ipt)';if(_0x30de35['lastE'+_0x4ad84b(0x1c1)])_0x4e480d+=_0x15fd8d['qjhsa']('\x20|\x20ER'+_0x4ad84b(0x240),_0x30de35['lastE'+_0x4ad84b(0x1c1)]);return _0x15fd8d['DOajl'](_0x5e1510,_0x4ad84b(0x35f)+'s',_0x4e480d,_0x30de35[_0x4ad84b(0xd8)],null,[_0x15fd8d['KUDQA'](_0x31bc17,_0x4ad84b(0x187)+'PS\x20un'+_0x4ad84b(0x532),_0x15fd8d[_0x4ad84b(0x256)],_0x15fd8d[_0x4ad84b(0x4c3)](_0xb4079b,_0x15fd8d[_0x4ad84b(0x158)],()=>{var _0x12b06e=_0x4ad84b,_0x98317f={'RHwzQ':function(_0xa66de9){return _0xa66de9();}};if(_0x502087['UcUpj']('QBZTx',_0x502087['shWwb'])){_0x1dbd3e=_0x23539f;if(!_0x16af26){var _0x48a604=_0x525ff0[_0x12b06e(0x5cc)+_0x12b06e(0x169)+_0x12b06e(0x346)]('style');_0x48a604['textC'+_0x12b06e(0x30e)+'t']=_0x5e9ce1,_0x2af0a7['appen'+_0x12b06e(0x2d9)+'d'](_0x48a604),_0x206f90=_0x98317f[_0x12b06e(0x141)](_0x3cc791),_0x4c7f5e[_0x12b06e(0x1be)+'dChil'+'d'](_0x1a578a),_0x4d1f6c(()=>_0x319729[_0x12b06e(0x2f5)+'List'][_0x12b06e(0x283)](_0x12b06e(0x2b0)));}_0x3dd887[_0x12b06e(0x2f5)+_0x12b06e(0x4c1)]['toggl'+'e']('shown',_0x37fd26);}else try{if(_0x4da28b)_0x4da28b[_0x12b06e(0x60b)](_0x12b06e(0x223)+_0x12b06e(0x37f)+'e.App'+'licat'+_0x12b06e(0x564),_0x12b06e(0x20b)+_0x12b06e(0xe3)+_0x12b06e(0x325)+'Rate',[-0x128a+-0x20c5*0x1+0x343f*0x1]);}catch(_0x4a350c){}}))]);}function _0x11f200(_0x863f1e){var _0x2bc8f3=_0x3cc387,_0x1a9705={'EICgq':function(_0x1dbc03,_0x1abf15,_0x365a15){return _0x30189c['ZBCDR'](_0x1dbc03,_0x1abf15,_0x365a15);},'ThYbd':_0x30189c[_0x2bc8f3(0x4ca)],'bHlWP':function(_0x5cbe09){var _0x41ea2e=_0x2bc8f3;return _0x30189c[_0x41ea2e(0x29f)](_0x5cbe09);},'ophEC':'lsFhk','jzBsU':function(_0x550548){return _0x550548();},'JKXYq':function(_0x897266,_0x3dbf43){return _0x897266!==_0x3dbf43;},'sDrwN':_0x2bc8f3(0xd6),'TBwrp':function(_0x5bd985){var _0x3fbacd=_0x2bc8f3;return _0x30189c[_0x3fbacd(0x12a)](_0x5bd985);}};if(_0x863f1e==='comba'+'t'){if(_0x30189c[_0x2bc8f3(0x515)](_0x30189c[_0x2bc8f3(0x56e)],'uzfak'))_0x2a2dcc[_0x2bc8f3(0x480)+'e']=_0x5e67ac,_0x260109();else return[_0x30189c[_0x2bc8f3(0x29f)](_0x1f25f3),_0x30189c['fnclj'](_0x5e1510,_0x2bc8f3(0x51c)+'ode',_0x2bc8f3(0x1a8)+'s\x20OHe'+_0x2bc8f3(0x5d9)+'Initi'+_0x2bc8f3(0x319)+_0x2bc8f3(0x23b)+_0x2bc8f3(0x413)+'nd\x20OH'+_0x2bc8f3(0x3e7)+_0x2bc8f3(0x636)+'lDie,'+_0x2bc8f3(0x296)+'othin'+_0x2bc8f3(0x509)+_0x2bc8f3(0x408)+_0x2bc8f3(0x1b8)+'ill\x20y'+_0x2bc8f3(0x3c4),_0x56e5f0[_0x2bc8f3(0x3aa)],_0x294c6b=>{var _0x1e2fc9=_0x2bc8f3;_0x56e5f0[_0x1e2fc9(0x3aa)]=_0x294c6b,_0x87da4d(),_0x1a9705[_0x1e2fc9(0x428)](_0x1e6f96,_0x1a9705['ThYbd'],_0x294c6b),_0x1a9705['EICgq'](_0x1e6f96,_0x1e2fc9(0xdd)+'e',_0x294c6b);},[]),_0x5e1510(_0x30189c[_0x2bc8f3(0x2f7)],_0x30189c[_0x2bc8f3(0x50d)],_0x56e5f0[_0x2bc8f3(0xf6)+'oil'],_0x34b574=>{var _0x8e527=_0x2bc8f3;_0x56e5f0[_0x8e527(0xf6)+'oil']=_0x34b574,_0x15fd8d[_0x8e527(0x4e9)](_0x87da4d),_0x1e6f96('noRec'+'oil',_0x34b574);},[]),_0x30189c['fnclj'](_0x5e1510,'No\x20Sp'+_0x2bc8f3(0x26e),_0x30189c[_0x2bc8f3(0x61e)],_0x56e5f0['noSpr'+_0x2bc8f3(0x613)],_0x466527=>{var _0x29dccc=_0x2bc8f3;_0x56e5f0[_0x29dccc(0x3b1)+'ead']=_0x466527,_0x1a9705['bHlWP'](_0x87da4d);},[]),_0x5e1510('Rapid'+_0x2bc8f3(0x22a)+'\x20[EXP'+']','Scale'+'s\x20Ove'+'rtide'+_0x2bc8f3(0xfd)+_0x2bc8f3(0x530)+_0x2bc8f3(0x62e)+_0x2bc8f3(0x3d0)+'0%.\x20S'+_0x2bc8f3(0x633)+_0x2bc8f3(0x43a)+'still'+_0x2bc8f3(0x21a)+'\x20shot'+'s.',_0x56e5f0['rapid'+_0x2bc8f3(0xd4)],_0x30fb33=>{var _0x58145b=_0x2bc8f3;_0x58145b(0x364)!==_0x1a9705['ophEC']?(_0x38e8d6[_0x58145b(0x20a)]=_0x2981a3,_0x248a7f()):(_0x56e5f0[_0x58145b(0x448)+_0x58145b(0xd4)]=_0x30fb33,_0x87da4d());},[]),_0x5e1510('Damag'+_0x2bc8f3(0x581)+'P]','Overw'+'rites'+'\x20Over'+_0x2bc8f3(0x50c)+_0x2bc8f3(0xcb)+'\x20dama'+_0x2bc8f3(0x2da)+_0x2bc8f3(0x5e3)+'le\x20if'+'\x20the\x20'+'serve'+_0x2bc8f3(0x4a1)+_0x2bc8f3(0x383)+'s.',_0x56e5f0[_0x2bc8f3(0x202)+_0x2bc8f3(0x420)],_0x3bb4a6=>{var _0x17206f=_0x2bc8f3;_0x56e5f0[_0x17206f(0x202)+'eExp']=_0x3bb4a6,_0x87da4d();},[_0x31bc17('Damag'+'e\x20val'+'ue',null,_0x57986c(_0x56e5f0[_0x2bc8f3(0x202)+_0x2bc8f3(0x1dc)+'e'],-0x190f+0xaff+0xe1a,-0x65*-0x29+-0x1*0x10ad+0x274,-0x25*0x103+-0xf14+0x148*0x29,_0x1ba8e3=>{_0x56e5f0['damag'+'eValu'+'e']=_0x1ba8e3,_0x15fd8d['NCLWH'](_0x87da4d);}))]),_0x5e1510(_0x2bc8f3(0x161)+'ite\x20A'+_0x2bc8f3(0x40f)+_0x2bc8f3(0x21b),_0x30189c['MmhwN'],_0x56e5f0['infAm'+_0x2bc8f3(0x466)],_0x38c1c6=>{var _0x434c0b=_0x2bc8f3;_0x56e5f0[_0x434c0b(0x54a)+'moExp']=_0x38c1c6,_0x87da4d();},[_0x30189c[_0x2bc8f3(0x632)](_0x2e6249,_0x30189c['KIAGW'])])];}if(_0x30189c[_0x2bc8f3(0x451)](_0x863f1e,_0x30189c[_0x2bc8f3(0x418)]))return[_0x30189c['LrBby'](_0x5e1510,_0x30189c[_0x2bc8f3(0x327)],_0x30189c['AujGf'],_0x56e5f0[_0x2bc8f3(0x5fe)+_0x2bc8f3(0x3b5)]!==-0xcf8+0x2036+-0xfe*0x13,null,[_0x30189c['FeRjb'](_0x31bc17,'Speed'+'\x20%',_0x2bc8f3(0x224)+'\x20defa'+'ult',_0x30189c[_0x2bc8f3(0x26c)](_0x57986c,_0x56e5f0[_0x2bc8f3(0x5fe)+_0x2bc8f3(0x3b5)],-0x47d*0x3+0x1bf0+-0xe47*0x1,-0x2fb*0xd+-0x6*-0x38f+0x1291,-0x1a52+-0x7c7+-0x16*-0x18d,_0x5bcb3d=>{var _0x2718e8=_0x2bc8f3;_0x56e5f0[_0x2718e8(0x5fe)+'Pct']=_0x5bcb3d,_0x1a9705['jzBsU'](_0x87da4d);}))]),_0x30189c[_0x2bc8f3(0x15e)](_0x5e1510,_0x30189c['tbOPR'],'Scale'+'s\x20Mov'+'ement'+_0x2bc8f3(0x3f7)+'Force'+'\x20and\x20'+_0x2bc8f3(0x2fe)+_0x2bc8f3(0x132)+_0x2bc8f3(0x594)+_0x2bc8f3(0x3d8),_0x56e5f0['jumpP'+'ct']!==-0x1*0x1426+0x2415*0x1+0xad*-0x17||_0x56e5f0['gravi'+'tyPct']!==-0xf48+0x9f*-0x22+0x24ca,null,[_0x31bc17(_0x30189c['YZIlg'],null,_0x30189c[_0x2bc8f3(0x436)](_0x57986c,_0x56e5f0[_0x2bc8f3(0x501)+'ct'],-0x1759+0x3d9*0x7+0x4*-0xd9,-0x1*-0x10d7+-0x3*-0x4f5+-0x1e8a*0x1,-0x23ad+-0x1a69+-0x4c7*-0xd,_0x5888e8=>{var _0x2b3063=_0x2bc8f3;_0x56e5f0[_0x2b3063(0x501)+'ct']=_0x5888e8,_0x87da4d();})),_0x31bc17('Gravi'+'ty\x20%',_0x30189c['OHJVW'],_0x57986c(_0x56e5f0['gravi'+_0x2bc8f3(0x1a0)],0x2683*0x1+-0x1*-0xa41+0x30ba*-0x1,0x2b8+-0x1d5a+-0x27e*-0xb,-0x235+0x5cb*-0x5+0x1f31,_0x5a0c94=>{var _0x8867bd=_0x2bc8f3;if(_0x15fd8d[_0x8867bd(0x5f5)](_0x15fd8d['ErNwh'],_0x8867bd(0xbf)))try{var _0x257dda=new _0x1d0a54(_0x34856b)[_0x8867bd(0x237)+_0x8867bd(0x4cd)](_0x4a6d4c,_0x48db7b);_0x4173d3['set'](_0x17cdd2,_0x1a9705[_0x8867bd(0x38a)](_0x257dda,_0x27c0f6)?_0x257dda[_0x8867bd(0x29a)]():null);}catch(_0x1b1d06){_0x4e9289['set'](_0x10e31c,null);}else _0x56e5f0[_0x8867bd(0x132)+'tyPct']=_0x5a0c94,_0x87da4d();}))]),_0x5e1510(_0x30189c['PYtYd'],_0x2bc8f3(0x3ea)+'s\x20Mov'+_0x2bc8f3(0x2f3)+_0x2bc8f3(0x268)+_0x2bc8f3(0x252)+'ime\x20s'+'o\x20the'+_0x2bc8f3(0x61c)+'\x20cool'+'down\x20'+_0x2bc8f3(0x498)+_0x2bc8f3(0xd3)+_0x2bc8f3(0x4f3),_0x56e5f0[_0x2bc8f3(0x541)],_0x53866d=>{var _0x220727=_0x2bc8f3;_0x56e5f0[_0x220727(0x541)]=_0x53866d,_0x87da4d();},[])];if(_0x30189c[_0x2bc8f3(0x22d)](_0x863f1e,_0x2bc8f3(0x3a1)+'l')){if(_0x30189c['XsrPd'](_0x30189c[_0x2bc8f3(0x440)],_0x30189c[_0x2bc8f3(0x440)])){var _0x557563=(_0x2bc8f3(0x3ae)+'|3|1|'+_0x2bc8f3(0x320))[_0x2bc8f3(0x1b2)]('|'),_0xbad388=0x2*0x10f3+-0x6*-0x33d+-0x3554;while(!![]){switch(_0x557563[_0xbad388++]){case'0':var _0x2c0059=_0x52eefb['creat'+_0x2bc8f3(0x169)+'ent'](_0x2bc8f3(0x37a));continue;case'1':_0x2c0059[_0x2bc8f3(0x145)+_0x2bc8f3(0x30e)+'t']=_0x894d71;continue;case'2':if(_0xaf11a7){var _0x5e4950=_0x2509e1['creat'+_0x2bc8f3(0x169)+'ent'](_0x1a9705[_0x2bc8f3(0x41c)]);_0x5e4950[_0x2bc8f3(0x2f5)+_0x2bc8f3(0x5df)]=_0x2bc8f3(0x49c)+'nt',_0x5e4950[_0x2bc8f3(0x145)+_0x2bc8f3(0x30e)+'t']=_0x1cc319,_0x2c0059[_0x2bc8f3(0x1be)+_0x2bc8f3(0x2d9)+'d'](_0x5e4950);}continue;case'3':_0x2c0059['class'+_0x2bc8f3(0x5df)]=_0x2bc8f3(0x3e5)+'bel';continue;case'4':_0x2d25bf[_0x2bc8f3(0x1be)+'d'](_0x2c0059,_0x2c4c3c);continue;case'5':_0x2d25bf[_0x2bc8f3(0x2f5)+'Name']=_0x2bc8f3(0x517)+'l';continue;case'6':var _0x2d25bf=_0x4d9c6e[_0x2bc8f3(0x5cc)+'eElem'+_0x2bc8f3(0x346)](_0x2bc8f3(0x579));continue;case'7':return _0x2d25bf;}break;}}else return[_0x5e1510(_0x30189c['DsiMT'],_0x2bc8f3(0x628)+_0x2bc8f3(0x1ff)+_0x2bc8f3(0x24f)+'+\x20Spa'+_0x2bc8f3(0x4ab)+'erlay'+'.',_0x56e5f0['keyst'+'rokes'],_0xea52f9=>{var _0x2a3eb4=_0x2bc8f3;_0x56e5f0[_0x2a3eb4(0x3a9)+'rokes']=_0xea52f9,_0x87da4d();},[_0x31bc17(_0x30189c[_0x2bc8f3(0x15c)],null,_0x9e56a4(_0x56e5f0['ksPos'],[['bl',_0x2bc8f3(0x2c4)+_0x2bc8f3(0xcf)+'t'],['br',_0x30189c['HWffy']],['ml',_0x30189c['LEBvs']]],_0x5e5899=>{var _0x2373ea=_0x2bc8f3;_0x56e5f0[_0x2373ea(0x19a)]=_0x5e5899,_0x87da4d();})),_0x31bc17(_0x2bc8f3(0x28e),null,_0x30189c['ZsBYh'](_0x57986c,_0x56e5f0[_0x2bc8f3(0x146)+'le'],-0x2257+0x6*0x274+0x139f*0x1+0.6,0x1a*-0x10e+0xee1+0x92*0x16+0.6000000000000001,-0x6*-0x39+0x219c+-0x22f2+0.05,_0x24e90c=>{var _0x25d43d=_0x2bc8f3;_0x56e5f0[_0x25d43d(0x146)+'le']=_0x24e90c,_0x15fd8d[_0x25d43d(0x4e9)](_0x87da4d);})),_0x31bc17(_0x30189c['lEVxR'],null,_0x38467f(_0x56e5f0['ksCps'],_0x34034a=>{var _0x55dc02=_0x2bc8f3;_0x56e5f0[_0x55dc02(0x4f2)]=_0x34034a,_0x87da4d();}))]),_0x5e1510(_0x30189c['VVDdy'],_0x30189c['xbMBV'],_0x56e5f0[_0x2bc8f3(0x32e)+'hair'],_0x136046=>{var _0x3ddceb=_0x2bc8f3;_0x56e5f0['cross'+_0x3ddceb(0x4b1)]=_0x136046,_0x1a9705[_0x3ddceb(0xc9)](_0x87da4d);},[_0x31bc17(_0x2bc8f3(0x28e),null,_0x57986c(_0x56e5f0[_0x2bc8f3(0x480)+'e'],-0x1614+0xb18+0xafc+0.5,-0x1be*0x7+-0xa7e+0x16b2+0.5,0x2127+-0x112+-0x2015+0.1,_0x38cbb3=>{var _0x546a57=_0x2bc8f3,_0x3f7384={'XgAXO':function(_0x511063,_0x2dc85b,_0x1e1f49){return _0x511063(_0x2dc85b,_0x1e1f49);}};_0x546a57(0x4be)===_0x546a57(0x4be)?(_0x56e5f0['chSiz'+'e']=_0x38cbb3,_0x1a9705['bHlWP'](_0x87da4d)):(_0x2c1c28[_0x546a57(0x3aa)]=_0x49835a,_0x59cd68(),_0x386a31(_0x546a57(0x3aa),_0x44fab2),_0x3f7384['XgAXO'](_0x4c0e48,_0x546a57(0xdd)+'e',_0x2b7549));})),_0x31bc17(_0x30189c[_0x2bc8f3(0x244)],null,_0x39f0aa(_0x56e5f0['chCol'+'or'],_0x7acbaf=>{var _0x5be72b=_0x2bc8f3;_0x56e5f0[_0x5be72b(0x595)+'or']=_0x7acbaf,_0x87da4d();}))]),_0x30189c[_0x2bc8f3(0x56a)](_0x5e1510,_0x2bc8f3(0x139)+_0x2bc8f3(0x225),_0x2bc8f3(0x353)+_0x2bc8f3(0x535)+'y.',_0x56e5f0[_0x2bc8f3(0x20a)],null,[_0x31bc17('FPS\x20c'+_0x2bc8f3(0x16f)+'r',null,_0x38467f(_0x56e5f0[_0x2bc8f3(0x20a)],_0x1fb8f7=>{var _0x587a19=_0x2bc8f3;_0x56e5f0[_0x587a19(0x20a)]=_0x1fb8f7,_0x87da4d();})),_0x30189c['GjWJz'](_0x2e6249,_0x2bc8f3(0x111)+_0x2bc8f3(0x1bf)+_0x2bc8f3(0x16f)+_0x2bc8f3(0xce)+'is\x20bu'+_0x2bc8f3(0x30b)+_0x2bc8f3(0x231)+_0x2bc8f3(0x63c)+_0x2bc8f3(0x519)+'ePlay'+'ers\x20t'+_0x2bc8f3(0x565)+_0x2bc8f3(0x4a4)+_0x2bc8f3(0x23c))])];}if(_0x30189c[_0x2bc8f3(0x511)](_0x863f1e,_0x30189c[_0x2bc8f3(0x4b0)])){if('zSSPO'!==_0x2bc8f3(0x222))_0x17aac1['ksPos']=_0x54986f,_0x1a9705[_0x2bc8f3(0xc9)](_0xdb5f39);else return[_0x30189c['UkgxG'](_0x5e1510,_0x30189c[_0x2bc8f3(0x65b)],_0x2bc8f3(0x58d)+'\x20kour'+_0x2bc8f3(0x12f)+_0x2bc8f3(0x3c5)+'er\x20sl'+'ots.',_0x56e5f0[_0x2bc8f3(0x3d2)+'ck'],_0x2472a3=>{_0x56e5f0['adblo'+'ck']=_0x2472a3,_0x15fd8d['NCLWH'](_0x87da4d);},[_0x2e6249('Takes'+_0x2bc8f3(0x3d1)+_0x2bc8f3(0x110)+_0x2bc8f3(0x125)+_0x2bc8f3(0x291)+'en\x20to'+_0x2bc8f3(0x574)+'.')])];}return[_0x30189c['fnclj'](_0x5e1510,_0x30189c[_0x2bc8f3(0x411)],_0x2bc8f3(0x19b)+_0x2bc8f3(0x199)+'\x20enti'+_0x2bc8f3(0x504)+'—\x20no\x20'+_0x2bc8f3(0x5a7)+'hooks'+_0x2bc8f3(0x149)+_0x2bc8f3(0x1b7)+'\x20if\x20m'+'atche'+_0x2bc8f3(0x554)+'\x27t\x20st'+_0x2bc8f3(0x39d),_0x56e5f0[_0x2bc8f3(0x2d2)+_0x2bc8f3(0x4dd)],_0x56427e=>{var _0x2f9110=_0x2bc8f3;_0x56e5f0['safeM'+_0x2f9110(0x4dd)]=_0x56427e,_0x15fd8d[_0x2f9110(0x4f6)](_0x87da4d),location[_0x2f9110(0xeb)+'d']();},[_0x30189c[_0x2bc8f3(0xf7)](_0x2e6249,'Appli'+_0x2bc8f3(0x3e9)+_0x2bc8f3(0x125)+'ad.\x20I'+'f\x20mat'+_0x2bc8f3(0x27c)+_0x2bc8f3(0x293)+_0x2bc8f3(0x1e7)+_0x2bc8f3(0x136)+'de,\x20t'+_0x2bc8f3(0x3db)+'eeze\x20'+_0x2bc8f3(0x458)+_0x2bc8f3(0x257)+_0x2bc8f3(0x556)+_0x2bc8f3(0x2ac)+'ll\x20me'+'\x20the\x20'+_0x2bc8f3(0x2ee)+_0x2bc8f3(0x4de)+'ied\x20c'+'ount.')]),_0x5e1510(_0x30189c[_0x2bc8f3(0x5d0)],'Each\x20'+_0x2bc8f3(0x5b5)+'nstal'+_0x2bc8f3(0x4c0)+_0x2bc8f3(0x5a7)+'tramp'+_0x2bc8f3(0x631)+_0x2bc8f3(0x277)+_0x2bc8f3(0x55f)+_0x2bc8f3(0xb6)+_0x2bc8f3(0x3e4)+_0x2bc8f3(0x2dd)+_0x2bc8f3(0x22b)+'OFF\x20b'+'y\x20def'+'ault\x20'+'-\x20a\x20s'+_0x2bc8f3(0x45a)+_0x2bc8f3(0x118)+'hat\x20d'+_0x2bc8f3(0x662)+_0x2bc8f3(0x5d7)+_0x2bc8f3(0x140)+_0x2bc8f3(0x2ed)+_0x2bc8f3(0x4e0)+_0x2bc8f3(0x32f)+'throw'+_0x2bc8f3(0x5e1)+_0x2bc8f3(0x341)+'n\x20sig'+_0x2bc8f3(0x5d3)+_0x2bc8f3(0xe8)+_0x2bc8f3(0x4aa)+'\x27\x20the'+_0x2bc8f3(0x3c0)+'nt\x20it'+_0x2bc8f3(0x37e)+'alled'+_0x2bc8f3(0x5c3)+'n\x20the'+'m\x20on\x20'+_0x2bc8f3(0x35e)+_0x2bc8f3(0x3e6)+_0x2bc8f3(0x51f)+_0x2bc8f3(0xeb)+_0x2bc8f3(0x2de)+_0x2bc8f3(0x1fa)+_0x2bc8f3(0x546)+_0x2bc8f3(0x43c)+_0x2bc8f3(0x4a9)+_0x2bc8f3(0x3f4)+_0x2bc8f3(0x543)+_0x2bc8f3(0x5cb)+'n.',_0x56e5f0[_0x2bc8f3(0x3eb)+'od']||_0x56e5f0[_0x2bc8f3(0x3eb)+'odDie']||_0x56e5f0['hookN'+'oReco'+'il']||_0x56e5f0[_0x2bc8f3(0x354)+_0x2bc8f3(0x1e1)+'e'],_0x2c82ee=>{var _0x30919e=_0x2bc8f3;'CRvEr'===_0x15fd8d[_0x30919e(0x4c8)]?(_0x56e5f0[_0x30919e(0x3eb)+'od']=_0x2c82ee,_0x56e5f0[_0x30919e(0x3eb)+'odDie']=_0x2c82ee,_0x56e5f0['hookN'+_0x30919e(0x571)+'il']=_0x2c82ee,_0x56e5f0['hookC'+_0x30919e(0x1e1)+'e']=_0x2c82ee,_0x15fd8d['SrZXR'](_0x87da4d),location['reloa'+'d']()):_0x19c75b[_0x30919e(0x283)](_0x11564[_0x30919e(0x107)]);},[_0x30189c[_0x2bc8f3(0x10b)](_0x2e6249,'Appli'+'es\x20on'+'\x20relo'+_0x2bc8f3(0x5e6)),_0x31bc17(_0x2bc8f3(0x30f)+'OHeal'+'th.In'+_0x2bc8f3(0x472)+_0x2bc8f3(0x1db)+'Healt'+'h)',null,_0x38467f(_0x56e5f0[_0x2bc8f3(0x3eb)+'od'],_0x1ceab2=>{var _0x2d1eab=_0x2bc8f3;_0x56e5f0[_0x2d1eab(0x3eb)+'od']=_0x1ceab2,_0x87da4d();})),_0x31bc17(_0x30189c[_0x2bc8f3(0x59a)],null,_0x38467f(_0x56e5f0[_0x2bc8f3(0x3eb)+'odDie'],_0xecb64a=>{var _0x3d34db=_0x2bc8f3,_0x4c4133={'JXRSX':'blur'};if(_0x3d34db(0x5be)!==_0x3d34db(0x5ff))_0x56e5f0['hookG'+'odDie']=_0xecb64a,_0x87da4d();else{if(_0x5a028c)return;_0x51c778=!![],_0x52721d[_0x3d34db(0xb7)+'entLi'+'stene'+'r'](_0x3d34db(0x660)+'wn',_0x12b293,!![]),_0x370ba7[_0x3d34db(0xb7)+_0x3d34db(0x24a)+'stene'+'r'](_0x3d34db(0x45e),_0x590638,!![]),_0x60bfa8['addEv'+'entLi'+_0x3d34db(0x27d)+'r']('mouse'+'down',_0x1e5c0b,!![]),_0x4d45ff[_0x3d34db(0xb7)+_0x3d34db(0x24a)+_0x3d34db(0x27d)+'r'](_0x3d34db(0x645)+'up',_0x467ec,!![]),_0x2da626[_0x3d34db(0xb7)+'entLi'+_0x3d34db(0x27d)+'r'](_0x4c4133[_0x3d34db(0x32a)],_0x39a6fc);}})),_0x31bc17('noRec'+_0x2bc8f3(0x60a)+'Recoi'+_0x2bc8f3(0x502)+'on.Ti'+'ck)',null,_0x38467f(_0x56e5f0[_0x2bc8f3(0x619)+'oReco'+'il'],_0x6ee63b=>{var _0x53d487=_0x2bc8f3;_0x56e5f0[_0x53d487(0x619)+_0x53d487(0x571)+'il']=_0x6ee63b,_0x15fd8d[_0x53d487(0x355)](_0x87da4d);})),_0x31bc17(_0x2bc8f3(0x2f4)+_0x2bc8f3(0x150)+_0x2bc8f3(0x332)+'eRunn'+_0x2bc8f3(0x475)+'\x20IsGr'+_0x2bc8f3(0x650)+'d)',_0x30189c['qsgUp'],_0x38467f(_0x56e5f0['hookC'+'aptur'+'e'],_0xda26df=>{var _0x5336d5=_0x2bc8f3;if('SoWRI'===_0x15fd8d[_0x5336d5(0xc7)])_0x56e5f0['hookC'+_0x5336d5(0x1e1)+'e']=_0xda26df,_0x87da4d();else return-0x1*-0x9e0+0xbdb+-0x15bb;}))]),_0x30189c[_0x2bc8f3(0x436)](_0x5e1510,_0x30189c['izBAr'],_0x2bc8f3(0x303)+'les\x20C'+'odeSt'+'age\x20d'+'etect'+'ors\x20a'+_0x2bc8f3(0x2bf)+_0x2bc8f3(0x584)+_0x2bc8f3(0x432)+_0x2bc8f3(0xc6)+'tecti'+_0x2bc8f3(0xdf)+'\x20Keep'+_0x2bc8f3(0x2d6),_0x56e5f0[_0x2bc8f3(0x3cb)+'ill'],_0x2a6c48=>{_0x56e5f0['actkK'+'ill']=_0x2a6c48,_0x87da4d();},[_0x30189c[_0x2bc8f3(0x233)](_0x2e6249,_0x30189c[_0x2bc8f3(0x4e3)],!![])]),_0x5e1510('Dange'+'r',_0x30189c['DOkeQ'],!![],null,[_0x31bc17(_0x2bc8f3(0x196)+_0x2bc8f3(0x128)+_0x2bc8f3(0x1c9)+'s',null,_0x30189c[_0x2bc8f3(0x27f)](_0xb4079b,_0x2bc8f3(0x577),()=>{var _0x2c48ff=_0x2bc8f3;_0x56e5f0={..._0x131eb5},_0x1a9705['TBwrp'](_0x87da4d),location[_0x2c48ff(0xeb)+'d']();}))])];}var _0x15f661=null;function _0x2613ec(_0x1fb0f4){var _0x27dce2=_0x3cc387;_0x38d178=_0x1fb0f4;if(!_0x15f661){var _0x39db62=_0x30189c[_0x27dce2(0x57e)][_0x27dce2(0x1b2)]('|'),_0x14cd44=0x34b*-0x9+-0xaed*0x1+-0xb*-0x3b0;while(!![]){switch(_0x39db62[_0x14cd44++]){case'0':var _0x3b8df2=document['creat'+_0x27dce2(0x169)+_0x27dce2(0x346)](_0x30189c[_0x27dce2(0x28b)]);continue;case'1':_0x3b8df2[_0x27dce2(0x145)+_0x27dce2(0x30e)+'t']=_0x3fccb1;continue;case'2':_0xa1dbbb[_0x27dce2(0x1be)+'dChil'+'d'](_0x3b8df2);continue;case'3':_0x15f661=_0x1846ba();continue;case'4':requestAnimationFrame(()=>_0x15f661['class'+_0x27dce2(0x4c1)]['add']('shown'));continue;case'5':_0xa1dbbb['appen'+_0x27dce2(0x2d9)+'d'](_0x15f661);continue;}break;}}_0x15f661[_0x27dce2(0x2f5)+_0x27dce2(0x4c1)]['toggl'+'e']('shown',_0x1fb0f4);}function _0x5c1541(){_0x2613ec(!_0x38d178);}function _0x1846ba(){var _0x2434bd=_0x3cc387,_0x1756cb={'BEYeU':_0x2434bd(0x484)+_0x2434bd(0x521)+_0x2434bd(0xe4),'ZXnce':function(_0x436f84){return _0x436f84();},'DySFB':_0x2434bd(0x658)},_0x33c6af=document[_0x2434bd(0x5cc)+'eElem'+_0x2434bd(0x346)](_0x30189c[_0x2434bd(0x1eb)]);_0x33c6af[_0x2434bd(0x2f5)+'Name']=_0x30189c[_0x2434bd(0x3e3)];var _0xd3df2=document[_0x2434bd(0x5cc)+'eElem'+'ent'](_0x30189c[_0x2434bd(0x56b)]);_0xd3df2['class'+_0x2434bd(0x5df)]=_0x2434bd(0x2ba)+'de';var _0x4616c3=document[_0x2434bd(0x5cc)+'eElem'+_0x2434bd(0x346)](_0x2434bd(0x579));_0x4616c3['class'+'Name']=_0x30189c[_0x2434bd(0x215)],_0x4616c3['inner'+_0x2434bd(0x479)]=_0x30189c['hjqYE'],_0xd3df2['appen'+'dChil'+'d'](_0x4616c3);var _0x3173cd=document[_0x2434bd(0x5cc)+_0x2434bd(0x169)+_0x2434bd(0x346)](_0x2434bd(0x579));_0x3173cd[_0x2434bd(0x2f5)+_0x2434bd(0x5df)]=_0x2434bd(0x524)+'in';var _0x2eb3c3=document[_0x2434bd(0x5cc)+_0x2434bd(0x169)+_0x2434bd(0x346)](_0x2434bd(0x4b3)+'r');_0x2eb3c3[_0x2434bd(0x2f5)+_0x2434bd(0x5df)]=_0x30189c[_0x2434bd(0x1e4)];var _0x1b2068=document[_0x2434bd(0x5cc)+_0x2434bd(0x169)+'ent'](_0x30189c['wseNI']);_0x1b2068['class'+_0x2434bd(0x5df)]=_0x2434bd(0x453)+_0x2434bd(0x309);var _0x1a99ce=document['creat'+'eElem'+_0x2434bd(0x346)]('h2');_0x1a99ce['class'+_0x2434bd(0x5df)]=_0x30189c['jjFtC'],_0x1a99ce['textC'+_0x2434bd(0x30e)+'t']=_0x2434bd(0x484)+_0x2434bd(0x521)+'r';var _0x1624a4=document[_0x2434bd(0x5cc)+'eElem'+_0x2434bd(0x346)](_0x30189c[_0x2434bd(0x405)]);_0x1624a4['class'+_0x2434bd(0x5df)]='mn-su'+'b',_0x1624a4[_0x2434bd(0x145)+_0x2434bd(0x30e)+'t']=_0x30189c[_0x2434bd(0x57b)],_0x1b2068['appen'+'d'](_0x1a99ce,_0x1624a4);var _0x1931da=document[_0x2434bd(0x5cc)+'eElem'+_0x2434bd(0x346)](_0x2434bd(0x50e)+'n');_0x1931da['type']=_0x30189c[_0x2434bd(0x531)],_0x1931da[_0x2434bd(0x2f5)+'Name']=_0x2434bd(0x45d)+_0x2434bd(0xf5),_0x1931da[_0x2434bd(0x603)]='Close',_0x1931da[_0x2434bd(0x295)+_0x2434bd(0x479)]='<svg\x20'+_0x2434bd(0xc8)+'ox=\x220'+_0x2434bd(0x412)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x2434bd(0x51b)+_0x2434bd(0x3c6)+_0x2434bd(0x264)+_0x2434bd(0x4e4)+'/></s'+'vg>',_0x1931da['oncli'+'ck']=()=>_0x2613ec(![]),_0x2eb3c3[_0x2434bd(0x1be)+'d'](_0x1b2068,_0x1931da);var _0x209a86=document['creat'+_0x2434bd(0x169)+_0x2434bd(0x346)](_0x30189c[_0x2434bd(0x1eb)]);_0x209a86['class'+'Name']=_0x2434bd(0x59e)+'ls',_0x3173cd['appen'+'d'](_0x2eb3c3,_0x209a86),_0x33c6af['appen'+'d'](_0xd3df2,_0x3173cd);var _0x5dfb12=new Map();for(var _0x55173e of _0x4daddf){if(_0x2434bd(0x548)!==_0x2434bd(0x548))_0x15cc1e[_0x2434bd(0x5fe)+_0x2434bd(0x3b5)]=_0x3f9fba,_0x420a44();else{var _0x2e8dc1=document['creat'+_0x2434bd(0x169)+'ent'](_0x30189c[_0x2434bd(0x531)]);_0x2e8dc1['type']=_0x2434bd(0x50e)+'n',_0x2e8dc1[_0x2434bd(0x2f5)+_0x2434bd(0x5df)]=_0x30189c[_0x2434bd(0x621)],_0x2e8dc1['title']=_0x55173e[_0x2434bd(0x278)],_0x2e8dc1['inner'+_0x2434bd(0x479)]=_0x30189c['hFKbG'](_0x30189c['JUQek']+_0x55173e['label'],_0x2434bd(0x46c)+'ll>'),_0x2e8dc1['oncli'+'ck']=(_0x4972d7=>()=>_0x146441(_0x4972d7))(_0x55173e['id']),_0x5dfb12[_0x2434bd(0x5a9)](_0x55173e['id'],_0x2e8dc1),_0xd3df2['appen'+_0x2434bd(0x2d9)+'d'](_0x2e8dc1);}}function _0x146441(_0x5031b2){var _0x33fe9a=_0x2434bd,_0x5b06f4=('0|4|3'+_0x33fe9a(0x275)+'1')[_0x33fe9a(0x1b2)]('|'),_0x1e93d1=-0x1*-0x1c72+0x2093*-0x1+0x1*0x421;while(!![]){switch(_0x5b06f4[_0x1e93d1++]){case'0':_0xb5dea6['cat']=_0x5031b2;continue;case'1':_0x209a86['repla'+'ceChi'+_0x33fe9a(0x48b)](..._0x11f200(_0x5031b2));continue;case'2':_0x1a99ce[_0x33fe9a(0x145)+_0x33fe9a(0x30e)+'t']=_0x1756cb[_0x33fe9a(0x108)]+_0x415df6['label'];continue;case'3':var _0x415df6=_0x4daddf[_0x33fe9a(0x1e9)](_0xc5a4ae=>_0xc5a4ae['id']===_0x5031b2)||_0x4daddf[-0x1f9f+0x815*0x4+-0xb5];continue;case'4':_0x5cd2e5();continue;case'5':for(var [_0x7b7b5b,_0xeb47e4]of _0x5dfb12)_0xeb47e4['class'+'List']['toggl'+'e'](_0x33fe9a(0x4cb)+'e',_0x7b7b5b===_0x5031b2);continue;}break;}}return _0x146441(_0xb5dea6[_0x2434bd(0x526)]||_0x30189c['boflr']),_0x30189c[_0x2434bd(0x1d3)](setInterval,()=>{var _0x12cf2a=_0x2434bd;if(!_0x38d178)return;var _0x1b2aec=_0x209a86[_0x12cf2a(0x591)+_0x12cf2a(0x489)];for(var _0x2ebdf8=-0x11cc+0x1cbe+-0xaf2;_0x2ebdf8<_0x1b2aec['lengt'+'h'];_0x2ebdf8++){if('sTUtk'!==_0x12cf2a(0x3f6))_0x265de3[_0x12cf2a(0x595)+'or']=_0x5c16bf,_0x1756cb[_0x12cf2a(0x4f5)](_0x4ee85c);else{var _0x37d1eb=_0x1b2aec[_0x2ebdf8][_0x12cf2a(0x4b6)+_0x12cf2a(0x39e)+'tor'](_0x15fd8d[_0x12cf2a(0x249)]);if(_0x37d1eb&&(_0x15fd8d[_0x12cf2a(0x5f5)](_0x37d1eb[_0x12cf2a(0x145)+_0x12cf2a(0x30e)+'t'][_0x12cf2a(0xc1)+'Of'](_0x15fd8d['GJzAa']),-0x2*0x35a+-0x1a*0xbc+0x19cc)||_0x37d1eb[_0x12cf2a(0x145)+'onten'+'t']['index'+'Of'](_0x15fd8d[_0x12cf2a(0x1b6)])===0xc09*-0x1+-0x4*-0x83+-0x9fd*-0x1)){if(_0x15fd8d['rNFWU'](_0x15fd8d['HWVXl'],_0x15fd8d['HWVXl']))_0x37d1eb['textC'+_0x12cf2a(0x30e)+'t']=_0x30de35['safeM'+'ode']?'SAFE\x20'+_0x12cf2a(0x131)+'-\x20ove'+'rlay\x20'+_0x12cf2a(0x513)+'\x20no\x20h'+'ooks\x20'+_0x12cf2a(0x4ae)+_0x12cf2a(0x3b3)+'\x20exit'+')':_0x30de35[_0x12cf2a(0xd8)]?_0x15fd8d['byJCa'](_0x15fd8d[_0x12cf2a(0x468)](_0x15fd8d[_0x12cf2a(0x22e)](_0x15fd8d['GcGny'](_0x15fd8d[_0x12cf2a(0x1ec)](_0x12cf2a(0x17e)+_0x12cf2a(0x2cd)+'\x20',_0x30de35['hooks'+_0x12cf2a(0x42d)]?_0x15fd8d['UbGDc'](_0x30de35['hooks'+'Ok']+'/',_0x30de35['hooks'+'Total'])+(_0x12cf2a(0x663)+'s'):_0x15fd8d['xMcFN']),'\x20|\x20ga'+_0x12cf2a(0x55a)),_0x30de35[_0x12cf2a(0x49b)+'oaded']?_0x12cf2a(0x5e9)+'d':_0x15fd8d['BmsRG']),_0x15fd8d['TsOTy'])+(_0x30de35['shoot'+_0x12cf2a(0x225)]?_0x12cf2a(0x15f):_0x12cf2a(0x172))+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x30de35[_0x12cf2a(0x267)+_0x12cf2a(0x159)]?'held':'none'),_0x30de35['lastE'+_0x12cf2a(0x1c1)]?'\x20|\x20ER'+_0x12cf2a(0x240)+_0x30de35['lastE'+_0x12cf2a(0x1c1)]:''):'UWMK\x20'+'MISSI'+'NG\x20-\x20'+'overl'+_0x12cf2a(0x153)+_0x12cf2a(0x258)+_0x12cf2a(0x5a3)+_0x12cf2a(0x33f)+_0x12cf2a(0x3ce)+_0x12cf2a(0x549)+_0x12cf2a(0x10e);else{var _0x30c64c=new _0x2add2c(_0x30d2a3)[_0x12cf2a(0x237)+_0x12cf2a(0x4cd)](_0x3c1e2c,_0x1756cb['DySFB']);return _0x30c64c?_0x30c64c['val']():0x241+-0x1155+0xf14;}}}}},-0x2417+0x1bd1+-0xc2e*-0x1),_0x33c6af;}var _0x3fccb1='\x0a\x20\x20\x20\x20'+':host'+_0x3cc387(0x12e)+'l:\x20in'+_0x3cc387(0x59f)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x3cc387(0x4a2)+_0x3cc387(0x16d)+_0x3cc387(0x230)+'order'+'-box;'+'\x20marg'+'in:\x200'+_0x3cc387(0x378)+'t-fam'+'ily:\x20'+_0x3cc387(0x64f)+'r\x22,\x20\x22'+'Segoe'+_0x3cc387(0x5cd)+_0x3cc387(0x165)+_0x3cc387(0x4b4)+_0x3cc387(0x5d4)+'s-ser'+_0x3cc387(0x607)+_0x3cc387(0x443)+_0x3cc387(0x5a0)+'anel\x20'+'{\x20pos'+_0x3cc387(0x380)+_0x3cc387(0x40a)+_0x3cc387(0x5b1)+';\x20rig'+_0x3cc387(0x52a)+'4px;\x20'+_0x3cc387(0x5dd)+_0x3cc387(0x488)+_0x3cc387(0x377)+_0x3cc387(0x1d5)+'\x20min('+_0x3cc387(0x18b)+_0x3cc387(0x192)+_0x3cc387(0x220)+_0x3cc387(0x304)+_0x3cc387(0x176)+_0x3cc387(0x64c)+_0x3cc387(0x1a6)+_0x3cc387(0x2a7)+_0x3cc387(0xca)+'80px,'+'\x20calc'+_0x3cc387(0x5d2)+_0x3cc387(0x490)+_0x3cc387(0x1e3)+';\x0a\x20\x20\x20'+_0x3cc387(0x297)+_0x3cc387(0x3bf)+_0x3cc387(0x24c)+'x;\x20ga'+_0x3cc387(0x4cc)+'px;\x20p'+_0x3cc387(0x47a)+_0x3cc387(0x1a3)+'px;\x20b'+_0x3cc387(0x4c6)+_0x3cc387(0x1d8)+_0x3cc387(0x27b)+_0x3cc387(0x654)+_0x3cc387(0x119)+'er-ev'+'ents:'+_0x3cc387(0x5da)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x3cc387(0x2ff)+_0x3cc387(0x19f)+_0x3cc387(0x5e0)+'24,17'+_0x3cc387(0x308)+_0x3cc387(0x1f0)+_0x3cc387(0x483)+_0x3cc387(0x397)+_0x3cc387(0x5bb)+':\x20blu'+_0x3cc387(0x437)+_0x3cc387(0x14a)+'turat'+_0x3cc387(0x356)+_0x3cc387(0x2ef)+_0x3cc387(0x138)+'t-bac'+_0x3cc387(0x311)+_0x3cc387(0x492)+_0x3cc387(0x19c)+_0x3cc387(0x3ed)+_0x3cc387(0x568)+'satur'+_0x3cc387(0x3f8)+_0x3cc387(0x32c)+'\x0a\x20\x20\x20\x20'+_0x3cc387(0x388)+'-shad'+'ow:\x200'+_0x3cc387(0x3ff)+_0x3cc387(0x266)+'gba(2'+'55,25'+_0x3cc387(0x115)+_0x3cc387(0x61a)+',\x20ins'+_0x3cc387(0x1d9)+_0x3cc387(0x2c0)+_0x3cc387(0x59c)+_0x3cc387(0x1c0)+_0x3cc387(0x29b)+'55,.0'+'5),\x200'+_0x3cc387(0x331)+'\x2080px'+_0x3cc387(0x59c)+_0x3cc387(0x58b)+'0,.55'+_0x3cc387(0x25e)+_0x3cc387(0x3ca)+'pacit'+_0x3cc387(0x171)+'\x20tran'+'sform'+_0x3cc387(0x5b9)+_0x3cc387(0xb4)+'eY(18'+_0x3cc387(0x44f)+_0x3cc387(0x119)+_0x3cc387(0x482)+'ents:'+'\x20none'+_0x3cc387(0x162)+_0x3cc387(0x3fd)+_0x3cc387(0x245)+_0x3cc387(0x3cd)+_0x3cc387(0x1a9)+_0x3cc387(0x625)+_0x3cc387(0x4ed)+_0x3cc387(0x4da)+'rm\x20.4'+'5s\x20cu'+_0x3cc387(0x57f)+_0x3cc387(0x48a)+_0x3cc387(0x211)+_0x3cc387(0x236)+_0x3cc387(0x2fd)+_0x3cc387(0x2d5)+'\x20colo'+'r:\x20#f'+_0x3cc387(0x29d)+';\x20fon'+_0x3cc387(0x130)+'e:\x2013'+_0x3cc387(0x3cc)+'\x0a\x20\x20\x20\x20'+_0x3cc387(0x5a0)+_0x3cc387(0x4b8)+_0x3cc387(0x2b0)+_0x3cc387(0x42f)+'acity'+_0x3cc387(0x16e)+'trans'+'form:'+'\x20none'+';\x20poi'+'nter-'+'event'+'s:\x20au'+_0x3cc387(0x496)+_0x3cc387(0x443)+_0x3cc387(0x281)+_0x3cc387(0x29e)+'\x20disp'+'lay:\x20'+_0x3cc387(0x183)+'\x20flex'+_0x3cc387(0x47c)+_0x3cc387(0x228)+_0x3cc387(0x371)+_0x3cc387(0x5c5)+'align'+'-item'+_0x3cc387(0x5fb)+_0x3cc387(0x27e)+'\x20gap:'+_0x3cc387(0x3fe)+'\x20widt'+_0x3cc387(0x13b)+'px;\x20f'+'lex:\x20'+_0x3cc387(0x386)+_0x3cc387(0x62b)+'ing:\x20'+_0x3cc387(0x33b)+(_0x3cc387(0x190)+_0x3cc387(0xb8)+_0x3cc387(0x4ba)+_0x3cc387(0x1c5)+_0x3cc387(0x366)+_0x3cc387(0x2d5)+'backg'+_0x3cc387(0x1b1)+':\x20rgb'+'a(255'+_0x3cc387(0x4f7)+_0x3cc387(0x439)+_0x3cc387(0x2ec)+'\x20box-'+_0x3cc387(0x372)+_0x3cc387(0x227)+_0x3cc387(0x24e)+'\x200\x200\x20'+_0x3cc387(0x266)+_0x3cc387(0x5ab)+_0x3cc387(0x32b)+_0x3cc387(0x115)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x3cc387(0x239)+'o\x20{\x20d'+_0x3cc387(0x1ee)+'y:\x20gr'+'id;\x20p'+_0x3cc387(0x57a)+_0x3cc387(0x522)+':\x20cen'+_0x3cc387(0x39b)+'width'+_0x3cc387(0x622)+'x;\x20he'+'ight:'+'\x2032px'+_0x3cc387(0x626)+_0x3cc387(0x5d8)+_0x3cc387(0x239)+_0x3cc387(0x12d)+_0x3cc387(0x65a)+'dth:\x20'+_0x3cc387(0x5e2)+_0x3cc387(0x5b0)+_0x3cc387(0x52a)+'5px;\x20'+'overf'+_0x3cc387(0x151)+_0x3cc387(0x578)+'le;\x20f'+_0x3cc387(0x5bb)+':\x20dro'+_0x3cc387(0x2ae)+_0x3cc387(0x113)+_0x3cc387(0x4ad)+_0x3cc387(0x3f3)+'a(255'+',107,'+_0x3cc387(0x200)+_0x3cc387(0x623)+'}\x0a\x20\x20\x20'+_0x3cc387(0x450)+'tab\x20{'+_0x3cc387(0x560)+_0x3cc387(0x4b5)+_0x3cc387(0x183)+_0x3cc387(0x37b)+_0x3cc387(0x24d)+'ms:\x20c'+_0x3cc387(0x635)+_0x3cc387(0x593)+_0x3cc387(0x4ea)+_0x3cc387(0xe7)+'nt:\x20c'+_0x3cc387(0x635)+';\x20wid'+'th:\x205'+'2px;\x20'+_0x3cc387(0x551)+_0x3cc387(0x148)+_0x3cc387(0x189)+'order'+':\x200;\x20'+_0x3cc387(0x1ca)+_0x3cc387(0x3e1)+'ius:\x20'+_0x3cc387(0x644)+_0x3cc387(0x443)+_0x3cc387(0x3b2)+'kgrou'+'nd:\x20t'+_0x3cc387(0x56d)+_0x3cc387(0x430)+';\x20col'+'or:\x20r'+_0x3cc387(0x5ab)+'46,23'+'8,242'+_0x3cc387(0x2f1)+_0x3cc387(0x262)+_0x3cc387(0x433)+'ointe'+'r;\x20fo'+_0x3cc387(0x600)+_0x3cc387(0x37d)+_0x3cc387(0x22c)+'font-'+'weigh'+_0x3cc387(0x1da)+_0x3cc387(0x179)+'\x20\x20\x20\x20.'+_0x3cc387(0x137)+'b:hov'+'er\x20{\x20'+_0x3cc387(0x163)+':\x20rgb'+_0x3cc387(0x280)+_0x3cc387(0x36c)+'242,.'+_0x3cc387(0x116)+'\x0a\x20\x20\x20\x20'+'.mn-t'+'ab.ac'+_0x3cc387(0x11c)+'{\x20col'+'or:\x20#'+_0x3cc387(0x404)+'d;\x20ba'+'ckgro'+_0x3cc387(0x19f)+'rgba('+_0x3cc387(0x2cc)+_0x3cc387(0x213)+_0x3cc387(0x328)+_0x3cc387(0x626)+_0x3cc387(0x5d8)+'n-mai'+'n\x20{\x20f'+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x3cc387(0x5fd)+_0x3cc387(0x40e)+_0x3cc387(0x63b)+'\x20flex'+_0x3cc387(0x271)+_0x3cc387(0x208)+_0x3cc387(0x63e)+'n:\x20co'+_0x3cc387(0xd9)+_0x3cc387(0x329)+_0x3cc387(0x65c)+_0x3cc387(0x272)+_0x3cc387(0x292)+'play:'+_0x3cc387(0x651)+_0x3cc387(0x5bf)+'gn-it'+'ems:\x20'+_0x3cc387(0x5b8)+_0x3cc387(0x1f4)+_0x3cc387(0x56f)+'px;\x20p'+'addin'+'g:\x206p'+_0x3cc387(0x3a2)+_0x3cc387(0x28d)+_0x3cc387(0x34a)+_0x3cc387(0xee)+'ect:\x20'+'none;'+_0x3cc387(0x329)+_0x3cc387(0x65c)+_0x3cc387(0x4bf)+_0x3cc387(0x539)+'flex:'+'\x201;\x20m'+_0x3cc387(0x2f8)+'dth:\x20'+_0x3cc387(0x179)+_0x3cc387(0x23f)+'mn-h\x20'+'{\x20fon'+_0x3cc387(0x130)+'e:\x2017'+_0x3cc387(0x2fc)+'ont-w'+'eight'+_0x3cc387(0x51e)+_0x3cc387(0x626)+'\x20\x20\x20.m'+_0x3cc387(0x655)+_0x3cc387(0x61b)+'nt-si'+'ze:\x201'+_0x3cc387(0x57c)+_0x3cc387(0x2b5))+(_0x3cc387(0x473)+_0x3cc387(0x3f1)+_0x3cc387(0x23f)+_0x3cc387(0x45d)+'ose\x20{'+'\x20disp'+'lay:\x20'+_0x3cc387(0x42b)+_0x3cc387(0x471)+_0x3cc387(0x5eb)+_0x3cc387(0x665)+_0x3cc387(0x635)+';\x20wid'+_0x3cc387(0x298)+'8px;\x20'+_0x3cc387(0x551)+_0x3cc387(0x54c)+_0x3cc387(0x189)+_0x3cc387(0x4c6)+_0x3cc387(0xb9)+'borde'+'r-rad'+'ius:\x20'+'8px;\x20'+_0x3cc387(0x505)+'round'+_0x3cc387(0x5b9)+'nspar'+_0x3cc387(0x348)+_0x3cc387(0x163)+':\x20inh'+_0x3cc387(0x445)+_0x3cc387(0x101)+'ity:\x20'+_0x3cc387(0x1c7)+_0x3cc387(0x2bd)+_0x3cc387(0xf2)+'inter'+_0x3cc387(0x626)+'\x20\x20\x20.m'+_0x3cc387(0x26f)+_0x3cc387(0x219)+'ver\x20{'+_0x3cc387(0x101)+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x3cc387(0x19f)+_0x3cc387(0x5e0)+_0x3cc387(0x29b)+'55,25'+_0x3cc387(0x459)+_0x3cc387(0x38b)+_0x3cc387(0x23f)+_0x3cc387(0x45d)+_0x3cc387(0x48d)+_0x3cc387(0x4f4)+'width'+':\x2014p'+_0x3cc387(0xd1)+_0x3cc387(0x112)+_0x3cc387(0x339)+';\x20fil'+'l:\x20no'+_0x3cc387(0x32d)+'troke'+':\x20cur'+'rentC'+'olor;'+_0x3cc387(0x1e6)+'ke-wi'+'dth:\x20'+_0x3cc387(0x16b)+_0x3cc387(0xe1)+'linec'+'ap:\x20r'+_0x3cc387(0x2a4)+_0x3cc387(0x329)+_0x3cc387(0x65c)+'-cols'+_0x3cc387(0x248)+_0x3cc387(0x2a1)+';\x20min'+_0x3cc387(0x5b6)+_0x3cc387(0x121)+_0x3cc387(0x609)+_0x3cc387(0x394)+'-y:\x20a'+_0x3cc387(0x422)+_0x3cc387(0x361)+'ay:\x20g'+_0x3cc387(0x156)+_0x3cc387(0x226)+_0x3cc387(0x409)+'ate-c'+'olumn'+'s:\x20re'+_0x3cc387(0x5c0)+'auto-'+_0x3cc387(0x518)+'\x20minm'+_0x3cc387(0x45c)+_0x3cc387(0x299)+_0x3cc387(0x470)+_0x3cc387(0x5bf)+_0x3cc387(0x62c)+_0x3cc387(0x157)+_0x3cc387(0x384)+';\x20ali'+'gn-co'+_0x3cc387(0x288)+':\x20sta'+_0x3cc387(0x661)+'ap:\x201'+_0x3cc387(0x22c)+'paddi'+'ng:\x200'+_0x3cc387(0x305)+_0x3cc387(0x40d)+_0x3cc387(0x626)+_0x3cc387(0x5d8)+_0x3cc387(0x4ff)+_0x3cc387(0x36d)+'ebkit'+_0x3cc387(0x414)+'llbar'+_0x3cc387(0x65a)+_0x3cc387(0x58c)+_0x3cc387(0x1b9)+_0x3cc387(0x160)+'\x20.mn-'+'cols:'+':-web'+_0x3cc387(0x4e6)+_0x3cc387(0x350)+_0x3cc387(0x456)+_0x3cc387(0x143)+_0x3cc387(0x18c)+'kgrou'+_0x3cc387(0x25d)+'gba(2'+'55,25'+'5,255'+_0x3cc387(0x599)+_0x3cc387(0x58a)+_0x3cc387(0x263)+'adius'+_0x3cc387(0x3ad)+_0x3cc387(0x626)+_0x3cc387(0x52b)+_0x3cc387(0x167)+_0x3cc387(0xfb)+_0x3cc387(0x4c6)+'-radi'+_0x3cc387(0x1c6)+_0x3cc387(0x654)+'backg'+_0x3cc387(0x1b1)+_0x3cc387(0x313)+_0x3cc387(0x3f5)+_0x3cc387(0x4f7)+_0x3cc387(0x439)+_0x3cc387(0x2ec)+'\x20box-'+'shado'+_0x3cc387(0x227)+'set\x200'+_0x3cc387(0x3ff)+'1px\x20r'+'gba(2'+_0x3cc387(0x32b)+'5,255'+_0x3cc387(0x497)+_0x3cc387(0x626)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x3cc387(0x18c)+'kgrou'+'nd:\x20r'+_0x3cc387(0x5ab)+_0x3cc387(0x32b)+_0x3cc387(0x115)+_0x3cc387(0x2c2)+_0x3cc387(0x318)+_0x3cc387(0x279)+_0x3cc387(0x347)+_0x3cc387(0x36b)+'0\x200\x200'+_0x3cc387(0x3d6)+_0x3cc387(0x5e0)+'255,1'+_0x3cc387(0x213)+_0x3cc387(0x514)+_0x3cc387(0x38b)+_0x3cc387(0x23f)+'sk-ca'+_0x3cc387(0x168)+'ad\x20{\x20'+'displ')+(_0x3cc387(0x34d)+_0x3cc387(0x2e0)+'align'+'-item'+'s:\x20ce'+'nter;'+'\x20gap:'+_0x3cc387(0x62a)+'\x20padd'+_0x3cc387(0x178)+_0x3cc387(0x185)+'12px;'+_0x3cc387(0x329)+_0x3cc387(0x624)+_0x3cc387(0x1df)+_0x3cc387(0x4bf)+'e\x20{\x20f'+_0x3cc387(0x1ea)+'1;\x20mi'+_0x3cc387(0x2e8)+_0x3cc387(0x5fd)+_0x3cc387(0x626)+'\x20\x20\x20.s'+_0x3cc387(0x167)+'d-tit'+'le\x20st'+'rong\x20'+_0x3cc387(0x3ab)+_0x3cc387(0x130)+_0x3cc387(0x1f6)+_0x3cc387(0x2fc)+_0x3cc387(0x41b)+'eight'+_0x3cc387(0x638)+_0x3cc387(0x34e)+_0x3cc387(0x4a7)+_0x3cc387(0x5ab)+_0x3cc387(0x3c2)+'8,242'+',.45)'+_0x3cc387(0x626)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'.sk-c'+'ard-t'+_0x3cc387(0x2e1)+_0x3cc387(0x5bd)+_0x3cc387(0x38e)+_0x3cc387(0x2a0)+_0x3cc387(0x557)+'0f5;\x20'+_0x3cc387(0x160)+_0x3cc387(0x300)+_0x3cc387(0x34b)+'\x20{\x20pa'+'dding'+_0x3cc387(0x1de)+_0x3cc387(0x4a8)+'0px;\x20'+_0x3cc387(0x160)+'\x20.sk-'+'mdesc'+_0x3cc387(0x61b)+_0x3cc387(0x600)+_0x3cc387(0x37d)+_0x3cc387(0x57c)+_0x3cc387(0x2b5)+'ty:\x20.'+_0x3cc387(0x639)+_0x3cc387(0x53a)+_0x3cc387(0x5dd)+_0x3cc387(0x269)+'x;\x20}\x0a'+_0x3cc387(0x23f)+_0x3cc387(0x517)+'l\x20{\x20d'+_0x3cc387(0x1ee)+'y:\x20fl'+_0x3cc387(0x664)+'lign-'+'items'+':\x20cen'+'ter;\x20'+'gap:\x20'+_0x3cc387(0x1b9)+_0x3cc387(0x2f0)+_0x3cc387(0x446)+'px\x200;'+_0x3cc387(0x3fb)+'-size'+':\x2011.'+_0x3cc387(0x229)+'}\x0a\x20\x20\x20'+_0x3cc387(0x300)+_0x3cc387(0x278)+_0x3cc387(0x248)+'ex:\x201'+';\x20col'+_0x3cc387(0x4a7)+'gba(2'+_0x3cc387(0x3c2)+'8,242'+',.75)'+_0x3cc387(0x626)+_0x3cc387(0x52b)+'k-hin'+_0x3cc387(0x2c8)+_0x3cc387(0x1ee)+'y:\x20bl'+_0x3cc387(0x11a)+'font-'+_0x3cc387(0x1a1)+_0x3cc387(0x1dd)+_0x3cc387(0x2a2)+_0x3cc387(0x3de)+_0x3cc387(0x649)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3cc387(0x340)+'h\x20{\x20p'+_0x3cc387(0x602)+'on:\x20r'+'elati'+_0x3cc387(0x120)+'idth:'+_0x3cc387(0x362)+_0x3cc387(0x398)+_0x3cc387(0x2a7)+_0x3cc387(0x596)+'\x20bord'+_0x3cc387(0xe6)+_0x3cc387(0x58a)+_0x3cc387(0x263)+_0x3cc387(0x14d)+_0x3cc387(0x4c2)+_0x3cc387(0x592)+_0x3cc387(0x2ff)+'und:\x20'+'rgba('+'255,2'+'55,25'+'5,.07'+_0x3cc387(0x16c)+_0x3cc387(0x3d5)+_0x3cc387(0x410)+'ter;\x20'+_0x3cc387(0x2a9)+_0x3cc387(0x1f8)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+'\x20{\x20co'+_0x3cc387(0x288)+_0x3cc387(0x2fa)+'\x20posi'+'tion:'+_0x3cc387(0x375)+_0x3cc387(0x597)+'\x20top:'+'\x203px;'+_0x3cc387(0x1bd)+':\x203px'+_0x3cc387(0x106)+_0x3cc387(0x510)+'px;\x20h'+_0x3cc387(0x3c3)+_0x3cc387(0x2d1)+_0x3cc387(0x58a)+_0x3cc387(0x263)+_0x3cc387(0x14d)+':\x2050%'+_0x3cc387(0x545)+'kgrou'+'nd:\x20r'+_0x3cc387(0x5ab)+_0x3cc387(0x32b)+_0x3cc387(0x115)+',.25)'+_0x3cc387(0x162)+_0x3cc387(0x3fd)+_0x3cc387(0x4fb)+_0x3cc387(0x48c)+_0x3cc387(0x287)+_0x3cc387(0x27a)+_0x3cc387(0x49e)+'.2s;\x20'+_0x3cc387(0x160)+'\x20.sk-'+'switc'+_0x3cc387(0x618)+_0x3cc387(0x419)+'cked='+'\x22true'+_0x3cc387(0x583)+_0x3cc387(0x505)+_0x3cc387(0x1b1)+_0x3cc387(0x313))+('a(255'+_0x3cc387(0x47d)+'157,.'+'25);\x20'+'}\x0a\x20\x20\x20'+_0x3cc387(0x300)+_0x3cc387(0x340)+'h[ari'+_0x3cc387(0x419)+_0x3cc387(0x30a)+_0x3cc387(0x33c)+_0x3cc387(0x3bc)+_0x3cc387(0xda)+_0x3cc387(0x194)+'t:\x2015'+_0x3cc387(0x189)+_0x3cc387(0x27a)+'ound:'+'\x20#ff6'+'b9d;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3cc387(0x391)+_0x3cc387(0x44a)+'ckgro'+_0x3cc387(0x19f)+_0x3cc387(0x5e0)+_0x3cc387(0x29b)+'55,25'+_0x3cc387(0x2b4)+_0x3cc387(0x53e)+_0x3cc387(0x4c6)+_0x3cc387(0xb9)+'borde'+_0x3cc387(0x3e1)+_0x3cc387(0x19e)+'6px;\x20'+'color'+_0x3cc387(0x235)+'eef2;'+_0x3cc387(0x62b)+'ing:\x20'+_0x3cc387(0x426)+_0x3cc387(0x2fc)+'ont-s'+_0x3cc387(0x4e2)+_0x3cc387(0x44e)+_0x3cc387(0x3ef)+_0x3cc387(0x25b)+':\x20non'+'e;\x20bo'+'x-sha'+'dow:\x20'+'inset'+'\x200\x200\x20'+'0\x201px'+_0x3cc387(0x59c)+_0x3cc387(0x1c0)+_0x3cc387(0x29b)+'55,.0'+'5);\x20}'+'\x0a\x20\x20\x20\x20'+_0x3cc387(0x124)+_0x3cc387(0x284)+_0x3cc387(0x2c5)+_0x3cc387(0x46e)+_0x3cc387(0x27a)+'ound:'+_0x3cc387(0x629)+_0x3cc387(0x1d2)+_0x3cc387(0x160)+_0x3cc387(0x300)+_0x3cc387(0x46b)+_0x3cc387(0x46f)+'splay'+_0x3cc387(0x24c)+_0x3cc387(0x38c)+_0x3cc387(0x588)+'tems:'+_0x3cc387(0x251)+_0x3cc387(0x5e7)+_0x3cc387(0x214)+_0x3cc387(0x3cc)+'\x0a\x20\x20\x20\x20'+'.sk-s'+'lider'+'\x20{\x20-w'+_0x3cc387(0x387)+'-appe'+'aranc'+'e:\x20no'+'ne;\x20a'+'ppear'+_0x3cc387(0x326)+_0x3cc387(0x1f8)+_0x3cc387(0x106)+_0x3cc387(0xdb)+'0px;\x20'+'heigh'+_0x3cc387(0xec)+_0x3cc387(0x592)+_0x3cc387(0x2ff)+'und:\x20'+_0x3cc387(0x21f)+_0x3cc387(0x431)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3cc387(0x2ea)+_0x3cc387(0x4fd)+_0x3cc387(0x544)+_0x3cc387(0x4e6)+_0x3cc387(0x538)+_0x3cc387(0x38d)+'able-'+'track'+_0x3cc387(0xbd)+_0x3cc387(0x112)+'\x202px;'+'\x20bord'+_0x3cc387(0x114)+'dius:'+'\x202px;'+_0x3cc387(0x427)+_0x3cc387(0x368)+'d:\x20li'+'near-'+'gradi'+_0x3cc387(0x3d3)+'ff6b9'+'d,\x20#f'+_0x3cc387(0x174)+')\x200\x200'+_0x3cc387(0x3da)+'r(--p'+_0x3cc387(0x359)+_0x3cc387(0x396)+_0x3cc387(0x3bd)+_0x3cc387(0x42e)+'t,\x20rg'+_0x3cc387(0x335)+'5,255'+_0x3cc387(0x4f7)+_0x3cc387(0x40c)+_0x3cc387(0x329)+_0x3cc387(0x624)+'-slid'+_0x3cc387(0x395)+'webki'+_0x3cc387(0x265)+'der-t'+_0x3cc387(0x143)+_0x3cc387(0x529)+'bkit-'+'appea'+'rance'+_0x3cc387(0x2bb)+_0x3cc387(0x170)+'dth:\x20'+'6px;\x20'+_0x3cc387(0x551)+'t:\x206p'+_0x3cc387(0x358)+_0x3cc387(0x53a)+_0x3cc387(0x217)+_0x3cc387(0x316)+_0x3cc387(0x485)+_0x3cc387(0x114)+_0x3cc387(0xea)+_0x3cc387(0x44d)+'\x20back'+_0x3cc387(0x368)+'d:\x20#f'+_0x3cc387(0x174)+';\x20}\x0a\x20'+_0x3cc387(0x52b)+'k-val'+_0x3cc387(0x61b)+_0x3cc387(0x600)+_0x3cc387(0x37d)+_0x3cc387(0x57c)+_0x3cc387(0x2be)+'weigh'+'t:\x2060'+_0x3cc387(0x336)+_0x3cc387(0x2e8)+'th:\x202'+'8px;\x20'+_0x3cc387(0x246)+_0x3cc387(0x474)+_0x3cc387(0x2ce)+_0x3cc387(0x2c1)+_0x3cc387(0x2a0)+'\x20rgba'+_0x3cc387(0x1bb)+_0x3cc387(0x5d6)+_0x3cc387(0x1f9)+_0x3cc387(0x38b)+_0x3cc387(0x23f)+_0x3cc387(0x630)+_0x3cc387(0x4db))+('\x20widt'+'h:\x2034'+'px;\x20h'+'eight'+_0x3cc387(0x573)+_0x3cc387(0x5f6)+'rder:'+_0x3cc387(0x463)+_0x3cc387(0x4c6)+_0x3cc387(0x1d8)+'us:\x206'+'px;\x20b'+_0x3cc387(0x27a)+_0x3cc387(0x15b)+'\x20none'+';\x20pad'+_0x3cc387(0x643)+'\x200;\x20c'+'ursor'+_0x3cc387(0x234)+_0x3cc387(0x27e)+_0x3cc387(0x329)+_0x3cc387(0x624)+_0x3cc387(0x402)+'\x20{\x20fo'+_0x3cc387(0x600)+_0x3cc387(0x37d)+'1px;\x20'+_0x3cc387(0x163)+_0x3cc387(0x313)+'a(246'+_0x3cc387(0x36c)+_0x3cc387(0x26d)+_0x3cc387(0x142)+'addin'+_0x3cc387(0x191)+'x\x200;\x20'+'}\x0a\x20\x20\x20'+_0x3cc387(0x300)+_0x3cc387(0x19d)+'err\x20{'+_0x3cc387(0x21e)+'r:\x20#f'+_0x3cc387(0x184)+_0x3cc387(0x626)+_0x3cc387(0x52b)+'k-btn'+'\x20{\x20al'+_0x3cc387(0x582)+'elf:\x20'+'flex-'+'start'+_0x3cc387(0x58a)+'der:\x20'+_0x3cc387(0x190)+_0x3cc387(0xb8)+_0x3cc387(0x4ba)+_0x3cc387(0x23d)+'x;\x20pa'+_0x3cc387(0x656)+_0x3cc387(0x2d1)+_0x3cc387(0x147)+_0x3cc387(0x545)+_0x3cc387(0x232)+_0x3cc387(0xfc)+_0x3cc387(0x404)+_0x3cc387(0x1e2)+_0x3cc387(0x2f2)+'#fff;'+_0x3cc387(0x3fb)+_0x3cc387(0x3b4)+_0x3cc387(0x403)+_0x3cc387(0x229)+_0x3cc387(0x2be)+_0x3cc387(0x2bc)+'t:\x2070'+_0x3cc387(0x152)+_0x3cc387(0x3d5)+_0x3cc387(0x410)+_0x3cc387(0x39b)+_0x3cc387(0x160)+_0x3cc387(0x300)+'btn:h'+_0x3cc387(0x41a)+_0x3cc387(0x324)+'ter:\x20'+_0x3cc387(0x4a3)+'tness'+'(1.1)'+_0x3cc387(0x626)+_0x3cc387(0x516));window['addEv'+_0x3cc387(0x24a)+'stene'+'r'](_0x30189c['JUwoW'],_0x5ae629=>{var _0x4a8550=_0x3cc387;_0x30189c[_0x4a8550(0x4ef)](_0x5ae629[_0x4a8550(0x107)],_0x30189c['OoewE'])&&(_0x5ae629[_0x4a8550(0x289)+_0x4a8550(0x212)+_0x4a8550(0x370)](),_0x5c1541());},!![]);var _0x2a3367=document['creat'+'eElem'+_0x3cc387(0x346)]('div');_0x2a3367['style'][_0x3cc387(0x48e)+'xt']='posit'+'ion:f'+'ixed;'+'top:1'+'2px;r'+'ight:'+_0x3cc387(0x605)+_0x3cc387(0x51a)+_0x3cc387(0x381)+_0x3cc387(0x555)+'646;c'+'ursor'+_0x3cc387(0x376)+_0x3cc387(0x50f)+_0x3cc387(0x1d5)+_0x3cc387(0x5ac)+_0x3cc387(0x551)+'t:26p'+_0x3cc387(0x2b1)+_0x3cc387(0x3de)+_0x3cc387(0x321)+'ransi'+'tion:'+_0x3cc387(0x2b5)+'ty\x200.'+_0x3cc387(0x400)+_0x3cc387(0x5fc)+_0x3cc387(0x51d)+_0x3cc387(0xe5)+'to;fi'+_0x3cc387(0x4d0)+'drop-'+_0x3cc387(0x372)+'w(0\x200'+'\x204px\x20'+_0x3cc387(0x5e0)+_0x3cc387(0x2cc)+_0x3cc387(0x213)+_0x3cc387(0x64d)+'))',_0x2a3367[_0x3cc387(0x295)+_0x3cc387(0x479)]=_0x30189c['wmoud'],_0x2a3367[_0x3cc387(0x603)]=_0x30189c[_0x3cc387(0x270)],_0x2a3367[_0x3cc387(0xcd)+'seent'+'er']=()=>_0x2a3367[_0x3cc387(0x56c)][_0x3cc387(0x2b5)+'ty']='1',_0x2a3367[_0x3cc387(0xcd)+_0x3cc387(0x45b)+'ve']=()=>_0x2a3367[_0x3cc387(0x56c)][_0x3cc387(0x2b5)+'ty']='0.5',_0x2a3367[_0x3cc387(0x500)+'ck']=_0x3ef54e=>{var _0x53c15f=_0x3cc387;if(_0x30189c['BRXzl'](_0x53c15f(0x382),_0x30189c['PPgta'])){var _0x216ef6=_0x536dd2[_0x53c15f(0x3a6)+_0x53c15f(0x10a)+'x']({'typeName':_0x3743fc,'methodName':_0x9a183f,'params':_0x5e3011,'returnType':_0x12e27e},_0x517e82);return _0x216ef6[_0x53c15f(0xfa)+'ed']=_0x15fd8d[_0x53c15f(0x1f1)](_0x3f813f,![]),_0x427a5c[_0x2df799]=_0x216ef6,_0x6a480b[_0x53c15f(0x2ee)+_0x53c15f(0x42d)]++,_0x216ef6;}else _0x3ef54e[_0x53c15f(0xc3)+'ropag'+'ation'](),_0x5c1541();},document[_0x3cc387(0x3e0)][_0x3cc387(0x1be)+'dChil'+'d'](_0x2a3367),_0x117a43(),_0x30189c['ZVawn'](requestAnimationFrame,_0x357fd1),console['log'](_0x3cc387(0x2e5)+'ra-ko'+_0x3cc387(0x2c6)+'enu\x20r'+_0x3cc387(0x33d)+_0x3cc387(0x199)+':',_0x30de35[_0x3cc387(0xd8)]);});})()));function _0xe106(){var _0x556edc=['kdeWmhy','BMf0Dxi','lcbZyw4','zM9UDa','mJm4ldi','B3qGBwe','icaGlM0','ywX0Ac4','igf1Dg8','revfr1m','BgLUzw4','yM90Dg8','thrKv3K','tMfTzq','CMDIysG','CYaNzNu','mJvWEdS','yw5Uywi','CwPOC2e','r3jtB1q','ywqU','zxi7igC','Aw9F','Bg9Hzgu','D2L0Ag8','zs1PDgu','rNrWrfm','ihWGrvi','C2fRDxi','phbHDgG','ie1VDMu','y2vZlG','lxDPzhq','u2fMzxq','z2v0q28','CK5gv1u','EdSGyM8','Dg9W','uK1c','lwHVCa','ALvpC0S','CZOGy2u','Aw50zxi','DgG6ida','C3bLzwq','q3vcAgy','BNqTC2K','zMyP','B3nPDgK','DgL0Bgu','ChGGDwK','mtjWEdS','u3vYCw8','Awy7ih0','ohG5mc0','oYbVDMu','B2LSicG','y2fSBa','Dw5Kzwq','psjTBI0','id0GzMW','DhjVA2u','C2STDMe','thnIz0u','u2nHBgu','zwfK','iNjVDw4','uMf0zq','vKnxvui','mdb2DZS','AfTHCMK','Ag9VA04','lc4WnIK','ihSGzM8','igP1Bxa','Aw5JBhu','B01TExa','zsXTB24','C2HVB3q','ANfRq2K','oIaZmNa','ocKPoYa','icaUC2S','CYbLyxm','oYb9cIa','C2STBwi','v0ftrca','icmYmJe','idHWEdS','ihbHzgq','z24TAxq','mtjwu25WCeG','zvjHDgu','DMvTzw4','C2STy28','B2XPBMu','AxD5Ewi','zxj2zxi','BMqIihm','zw50zxi','lKXVy2e','yw1Hz2u','oIa2mda','ndSGBwe','D2Pbz28','CgXHEtO','ieDLDfy','zg9JDw0','zwn0Aw8','zwfKige','rgDMBgW','zMLSBfq','rMLcEKi','zgLUzZO','mtbWEdS','Bw91C2u','AKzrs0q','zgvrs0e','quLutw0','ic40oYa','Bw4TDg8','lxnLCMK','ktSGBwe','nYWWlJC','B3nWywm','iKLUDgu','B3vUzgu','igzSzxG','C1zkELu','teXxwLm','mNb4oYa','BI1ZDwi','zgrPBMC','Bg9HzgK','DtmY','A0HqDfy','ihSGD2K','y1DfuKy','icaUBw4','AxvHrK0','As1TB24','CMLZAYa','A2v5zg8','CNq7igC','B2vZig4','igHVB2S','zxG7ige','Bxm6igm','DhjPyNu','BNnSyxq','CMeTA28','Ag9Szsa','ywrKrxy','CMrLCI0','oIaWoYa','CM9ZC2G','t1DQtLK','Cg51zhu','ihSGAgu','sezYzNG','zwLhDwu','vvjbx0S','Aw5KzxG','Ad0ImIi','C3rVCfa','C2XPy2u','ihWGBw8','Dg9Wrgu','zhn6zwe','DMLLD0i','ANPcC1u','BwLUkdq','zwfWB24','wKjdrfi','B25TB3u','CJOGDgG','BsbSzwy','nJTWB2K','EdSGAgu','EvbAq1i','igfWCgW','rxHW','Aw5WDxq','C21HBgW','ANjwthq','DxDTAW','BhvTBJS','zNrLCIa','DgG6idK','Ee1sDe8','z29KrgK','mZuSmJq','B24Oks4','C2STCMe','CM9Rzs0','y29TyMe','yxjNzxq','CIdIGjqG','Dhm6yxu','zxi6ida','y29UDgu','zsbTAxm','B2fKzwq','zgL1CZO','CMvSB2e','DdOGoha','zgDmuuO','CI1ZzwW','u0fgrq','mJq1mtCYr3rHCLPw','BefvDuu','CJOGCg8','CMvZDg8','whvZzeW','B3nL','BM9szwm','A3DQt1a','v0rJEuu','z1LYCLy','zw5HyMW','zcb7igi','BMq6icm','v2vHCg8','BgLUzvq','wLLhtxi','CIbHzhy','ig9Wywm','C2STBwq','B29Rihi','r0LXALO','ltiUns0','oYb3Awq','y29Kzq','qKvzzvu','Fdf8mhW','B3n0zMK','r2XgqKy','uurTCMW','n0zorKXdtG','Axb0kq','v3jHCha','y3qGB24','tM8Gzw4','AwDODdO','zg93kda','zxiTCMe','nsWYntu','ocK7ih0','ChvZAa','DxjLihq','Cg9PBNq','B2nRoYa','y3jLzw4','DgL2zsa','igvYCG','zLPjCuK','i2zMnMi','DMu7ihC','Ahq6ida','CgTcwLC','qwPdAfq','lNnRlwy','ihjLBg8','t1vsx18','DgvYigm','BxKGC2u','vgLluge','uxfeA3a','DffLq0q','yLnjEMq','BY1ZDMC','ihSGywW','lwLVxYO','Dc1ZAxO','tu9ersa','z3jHDMK','nJG2ntGZmgHqA21Nsq','Cg9ZAxq','mciGCJ0','zMuGBw8','Bw4TDge','D2vIA2K','q291BNq','u0HJrxe','AdOGnJi','zgvZyW','DgvZDa','zsbJEd0','rvfhvMW','DgnOihq','uKH3ELe','nsK7iha','AhvTyIa','C3rYB2S','Dgv4Dem','A3nty2e','ide2ChG','DdOGmZq','lIbvC2u','EcKGC2e','s2LSBgu','igv4Axq','ywrPDxm','mcWWlJy','DevAEfK','CMuGkfm','Bg93oIa','mdSGy3u','yxKGB24','D0jSDxi','oxW2FdG','CMLKoYa','zw1ZoIa','s3n1rNG','zw50CW','EMfAzKy','B3vUzdO','BvHWwNe','AMzHuhC','ALbKsgO','AgvSza','FqOGica','sw5MAw4','oYb0CMe','y29SB3i','phn2zYa','ihn5C3q','vKHoCvi','AY1Jyxi','CMqTAgu','zuvSzw0','yxnZAwC','mJSGC3q','ktSGy3u','lxnPEMK','oIaXoYa','B3vUDgu','ztSGD2K','EtOGmdS','BM9Uzq','ugrSCfK','zJzIowq','u0f0vKe','ndHWEcK','suHNC1C','Aw5NoIa','mdSGFqO','zvbSDwC','tKCGlsa','u2fMzsa','zgvZ','vvDnsYa','Cwv1BeG','m3WXFda','tvHdC1m','Dxnrq3G','zMXLEdS','zJDHotm','mtfWEca','yufMA1m','mJqWiey','CY1Zzxi','ChG7igi','tw9Kzsa','nJiWChG','EYbIywm','Dg9Y','qwjuvg4','te1c','mdSGyM8','zZOGmNa','lcbJywW','uIb2ms4','EYbSzwy','q1btihi','v2LWzsa','owqIihm','A291CNm','ifvxtuS','A3nqB3m','u2TPChm','zxi6igi','BM90zs4','AxvZoIa','Dw5KoIa','DhLqy3q','C2L6ztO','zgTPDa','zZOGmta','t0HLywW','lxbHCMu','Ec1OzwK','B2f0Eq','qMXVy2S','EsaUmZu','AgfZ','BwvsDw4','mhWXFdi','ienquW','y2HLy2S','CI51As4','y3HOvKq','CM91BMq','C3bSAxq','C3zNiJ4','BvjAC20','sgH3EMm','BxzTDxi','ihrOAxm','ig9YigS','ohb4oYa','psjYB3u','kdi0nIW','yKLQv1q','igXLzNq','yxbWzw4','zw15igm','kdi1nsW','CNjVCG','weTKCgq','u29xuKK','swyGCMu','CZOGmty','Dxm6ide','lJq1oYa','m0PIr2XMCa','DhrPBMC','yM9Yzgu','kg92zxi','Dg9Nz2W','zxzLCNK','CMvHzhK','DgHPCYa','yurbz1C','u2v0r2e','nde5oYa','CxDKvvi','y2fWtw8','Awr0AdO','wNPLuKO','uw5kAKi','lxjHzgK','zxqGmca','DdOGnZa','zvrHA2u','zvzHBhu','ideWChG','oIaWide','lwnHCMq','DhjPA2u','yxb0Dxi','zdSGy28','ohb4ksK','EKrVs3G','Bw4TAa','ihn0CM8','Aw4GC2e','DhLWzq','zMLUza','Bgv4oIa','D3nLtKK','wuXAqNm','mcbOB28','AxnWBge','BMDL','odiPoYa','tw5KwhK','zxj5idi','mtmWmJqWofjwzxHZqW','CJSGz2e','C2STy2e','ztOGmtm','nxW3Fdq','ig5VBMu','ndiSlJG','zcbZzwu','AsXZyw4','zxrL','mtCWnJC5mgfdrLvOwa','vvDnsW','kYbmtui','mtu3lc4','zMLSzw4','zgfTywC','iezquW','mhW2Fdi','CMXHEsa','ywXSig8','C2STBM8','Ec1KAxi','BKjwvfy','zNbZ','C2v0x3q','C2STyNq','CM9Szq','odaSmtK','DxjDigG','BNLHExm','kc4YmIW','BNrezwy','mdCSmtu','yxa6idG','t3L2zKm','AfnOywq','Dg9WoIa','DgvTlxu','C2u6Ag8','igDHDgu','rvHqxq','CuHyy0S','t1nOB28','ignVBg8','DhjHBNm','yYGXmda','tw92zw0','ELntue8','vw5PDhK','mtaWid0','zxjZ','z3jPzc0','DZOGAw4','y3rPB24','nxb4oYa','iezPCMu','iefmtca','mhb4oYa','z3rxA1e','D2XrzLm','ms4XlJa','BMC6igi','yxmGBM8','A2DYB3u','zxLSwNq','oIbWB2K','oIaJzJy','msWUmZy','CMvHzey','uxjdvxq','BI1SB2C','yLj2rwu','A2vizwe','AYbVBI4','CZOGoha','zwqGyw0','icaGic4','uJOG','r0DdqvG','vg5czNe','AwnRihm','C0vYBuW','B246ig8','Dgv4Dc0','qwrIBg8','ihSGzMW','z2DQC2e','zw50tgK','CMvJDa','oIbMBgu','BI1PDgu','C2v0ida','l1jnqIa','BgvMDa','ignLBNq','sNvTCfq','ugfprvG','yuDkzMe','BcbKCMe','vMDoBMO','B2STCMu','BhKGkhi','uerdA3q','igq9iK0','DgXPBMu','BMX5kq','BMq6ihi','ktSkica','uNvUDgK','rhrPvgi','zNvSBhm','ign1CNm','zgvYlxi','mtGGnIa','Dc1ZBgK','mxb4ihi','Bw92zw0','lMXHC3q','BtOGnNa','BgLNBG','s2v5C3q','wNncwwG','mJqYlc4','CMvHza','BI1JBg8','C1r0A3G','oYbMBgu','lxrVCca','z2v0','r0jewK4','Fdj8nxW','yY0XlJu','igzVCIa','BgfIzwW','lxnOywq','ywnRz3i','Dxm6idi','y2HLCYa','C3rLBMu','BNrLCJS','zfnQtLq','ysGYndy','lM1Ulxm','BwvZC2e','ywrK','AwvSzca','sePKuMy','uursyxm','mNmSigi','BNrLBNq','ChjLDMu','tg9JywW','ChvUquW','DxjH','ideYChG','u2L6zq','oJiXndC','ugDqt20','ywqGD2G','EYbKAxm','Bg9Hzca','lxnHBNm','Aw5Uzxi','ihnVig4','icaGzgK','DgG6idi','mhb4lca','DMfS','mJu1ldi','psiJzMy','nMvLzJi','AwrLihS','BNbYy0m','B2XVCJO','zxG6ide','oYbVCge','v2vItw8','B3vUzdS','zuzYvu8','rNHoAeK','z2H0oIa','zvn0EwW','zMXLEdO','lJv6iIa','nZaWia','iokaLcb0zq','wwnitLm','Cc1ZAge','qxzZuwy','C2HVD24','EdTVCge','C2v0vhi','B2LS','nsWUmdm','B3bHy2K','zwCGzMe','yMPbuMC','zM9YBxm','idqTnc4','Bw4TC2K','oIbUB24','D2vPz2G','y3vYC28','zM9UDc0','DcbZDge','mxb4ida','Ahq7igm','lc4WncK','BfjHDgK','qM90Dg8','B3b0Aw8','DxjDig0','q1j2rxi','Dcb7igq','CuHXzLy','sg9VAYa','nsaWlti','mJu1lde','yM91BMq','oIbYAwC','Dw91sM4','qxnZzw0','oIa4ChG','C2fMzu0','CgXPy2e','D2L0Aca','icaGica','ie9olG','C2v0uhi','tNbmsgW','zenOAwW','z2uUiei','yw1L','s0rVuuq','Bg9Hzc4','zcWGyw4','sxnhCM8','Bgv4oYa','AxrSzsa','uxDJsfC','Dgv4Dee','q29TyMe','w3nHA3u','zxzLBNq','zwrswuS','BI13Awq','twX6zuW','C2STC2W','CgfYC2u','mdi1ktS','AguGCMu','Ag9VA3m','jsK7ic0','CgfKzgK','lc40ktS','Bg9YoIa','zw1LBNq','y2fWDhu','y2XHC3m','tKCG4Ocuia','wKHzrM8','Aw4TD2K','Bw92zvq','oIaIiJS','nNW1','ChG7igy','ldePoWO','yM90Aca','y2TNCM8','ic5ZAY0','zMLSBfm','lYbhCMe','rgLZywi','DNCGlsa','idrWEca','BgLUzvC','Bw4TBg8','ldiXlc4','DgXLCW','y2TLzd0','AwXKigG','weveEMu','nYWWlJm','B250zw4','z29KicG','BMnL','A2rYB3a','Bw8GDg8','oIbYz2i','B25PBNa','D1rcsfu','ltjWEdS','A3mGyxi','oYbIB3G','yxrLvge','lZ48l3m','y29PBa','CM9Rzxm','uMvMAwW','DxHJA2y','zfr3vfm','mNW0FdC','mc41o3q','igjHBIa','D2LLC0i','EYbMAwW','rNjHBwu','yw5JztO','wKjjBg4','nYWUmsK','ih0kica','sLHsu1G','ntuSmJu','ntaLktS','BMu7ihm','y3jVC3m','DgHVzca','z2LMEq','idmWChG','zxrhyw0','B2reAwu','EfHVuu0','yMeOmJu','mdSGBwK','Ag9ZDg4','vNfLBhm','ide0ChG','nJaWia','mtjWEca','iNrYDwu','zwfKEs4','CLvfCeO','ywXSihq','C3DPDgm','BMn0Aw8','x19tquS','ig9U','D2fPDgK','DMvYlxy','zw50','B3C6igK','zw50oYa','BhmGDgG','oYb1C2u','BwjVzhK','CgPVwvm','yxK6igy','oYbJB2W','ChbLBNm','y3jVBgW','zIXZExm','tM8GuMu','rLbtig8','Ag9VA0m','B3zlz0m','zsGXnta','qsblt1u','EdSGBwe','lca1mcu','lJuGms4','CMLNAhq','C2v0qxq','sw5zEuC','B25Lige','u3rHDhu','vM5ZEfi','zgLZCgW','idi2ChG','rMLLBgq','BhngAgS','yLnVuKy','ChG7cIa','B24U','z3jVDw4','yxrPB24','Aw9FmZa','BNnLDca','ldiZocW','CZO6lxC','CZPUB24','nYWWlJG','yxvSDa','oIbJB2W','C2HHzg8','mty1DvbvwfDg','v21dvg0','igfIC28','oNbVAw4','ChG7ihC','oYbMB24','zg93BG','C3bHBG','igfSAwC','sgruChi','EMu6ide','igLZigm','rw5NAw4','AxrPB24','zxG6mJe','q3rxy0S','AwrHDgu','C3rHCNq','D1DJvKy','BM9UztS','zwjRAxq','icbIB3G','ndGZnJq','sKTywxe','ktSGFqO','EdSGywW','lxj1BM4','zYb7igm','lwXPBMu','DhbmAe0','zMLLBgq','thngsg0','BgvUz3q','CMzSB3C','zxi6oI0','ksaXmda','CM9Wlwy','oYbOzwK','ihn0AwW','C3rcB0i','DgvYoYa','Cg9Uj3m','yxj0lG','u2vSzwm','AwXLzdO','AwWGC3a','DMLZDwe','Eca2ChG','u2HHCNa','B1vKtfu','y2fWu2G','Ag9VA1a','DMfSDwu','vxboCNO','A2v5C3q','z29K','EYbMB24','Aw9UlLq','oIa0ChG','nNW1Fda','mta4nJe0vxnNAuPJ','q29SB3i','BM9tChi','icbIywm','ywqGDg8','lxnPEMu','ugn0','CMqTDgK','zKvothq','yMX1CG','zeTlyva','zgv2Awm','y2XLyxi','iL06oMe','jsbUBY0','wg5ts2G','C3bSyxK','ig1VBwu','uMvJDa','ndySmJm','zwLNAhq','B3uU','igjHBM4','mIaXmK0','Bwf4','zxH0','s2v5uW','icaGig8','ywn0A0S','ChG7ih0','CgfJAxq','AguGDxm','zsaOt0G','ihrVide','igvMzMu','ywrIBg8','zw50kcm','B1fqsve','CNnVCJO','idfWEca','C3rLCa','BhvLCY4','txPTCe8','ic8GDMe','AguGzNi','sMzXshG','D3L2se4','y2L0EtO','re9nq28','yM9KEq','CI1Yywq','y2fUDMe','vuTYt0u','CgfNzsa','C2STBge','DcbHihq','zwfSDgG','y2LYy2W','zxmGB24','wMvYB2u','Ag9VA0C','Bg93zxi','BhvYkdi','vfrsB24','EdSGB3u','u3rHDgu','ndSGFqO','lwjHBNi','EcbYz2i','igj1AwW','ysGYntu','C1rvDgS','lMP1Bxa','yxrLkde','zcbNCMu','ruLjDNO','igzVBNq','FdH8mxW','BNnPDgK','idrWEdS','idaGmca','mNm7Cg8','uufXEeS','lw5VDgu','oIaXms4','zMy2yJK','D2rsr1m','rgLL','yMvNAw4','igH1CNq','DgvTCgW','oIbHyNm','surSEem','lJa4ktS','nNb4ida','oYbKAxm','Bw1VifS','ihbVAw4','sfjKuNu','idaGmJq','BhrOige','lxnJCM8','nc00lJu','DdOXmda','v3jwBNq','DwTqBfm','ys1JAgu','B3zLCIa','B250lxC','C0rYD04','Fdr8mNW','Aw9UoMy','u0flvvi','zuv4Ca','idqGnc4','DxrVoYa','rMnNthO','DgLKzs4','ns00idC','nNb4idK','igjHy2S','ruLdz3e','u2fQy28','u3bHy2u','z3jPzdS','s0vUz3u','vg90ywW','CMvWzwe','ihSGB3a','yxjLBNq','CgfYzw4','DMLHifm','B3i6iha','CMvMAxG','idi0iIa','zM5JBgO','CIGYmNa','u21sz24','mJu1lc4','ig1HEsa','CwLyAMe','AcbVBMu','Dgv4Dei','nJaWide','nMi5zci','EKf4sK4','u0fgrsa','qvvqr2G','cIaGica','yxrSEsa','zxjPDdS','BMC6idq','Dw5RBM8','CMfWAwq','yMX5lum','ihSGyMe','lNnRlw0','zvbPEgu','iduWjtS','mteUnxa','ChGPoYa','ic5TBI0','y2DUAfa','BffZz0G','Bw4TDgK','sNvTCca','BMvJyxa','yMfYlxq','B3zLCMW','AxmGAg8','nsWUmdu','AwDUyxq','C2vSzwe','yxGOmJu','Bw4Ty2W','A2v5Dxa','Awr0Aa','tuLtu0K','nwmWidm','y2vOBKO','ida7igi','vePgwhe','mti0mJi0nurRyxj5DW','Bw9fEha','BxjPA0W','wevnyKG','Bw1MywC','4Ocuig92zq','CMfUz2u','pc9ZBwe','svr2y20','BIb7igi','ihSGzgK','mwzYksK','ihbSywm','AxrPyxq','DhK6ic4','ywXPz24','Aw5NicS','s1nPwe8','D3jPDgu','B3G9iJa','sfrnta','ywrKAw4','AKPuuwy','lwrPCMu','ldeWnYW','D0PgBgW','tuPfEeC','y2HtAxO','s2v5qq','zxiTzxy','yMfJA2q','u2fRDxi','igjVCMq','y2H0Dgm','ls1W','BtOGmJq','CMvU','zxPPzxi','BgrYzw4','zwz0ic4','B3nLihm','y3nZvgu','zJmY','AcaTidq','idi0iJ4','lwzPBhq','EvHfvNm','BM8Gy2G','Eu11vKe','Dg87ih0','lc4WnsK','BMv2zxi','lsbVDMu','igXPBwK','z2fTzuW','C2STAgK','odG4nJq3mNPUBhDcEa','B3vUzca','BMLUzW','Aw4Sihq','CIb2ywW','EYbIB3G','yNjPz2G','z3LIywm','s2DjqLi','CI52mq','B3i6ihi','mNb4ide','ihLVDxi','Bwf0y2G','y2uGB3y','BNrLCI0','idaGnha','khjLBg8','ihWGz2e','AxbbEwO','AgfPCG','lMrSBa','AgvHzgu','zw0TDwK','Bgf5oIa','CxvLCNK','iJeYiIa','yw5LBc4','BgfZDeu','CMfKAxu','vgLJAW','D3r5q0O','qNbbvNO','ALrvBu4','lxrPDgW','BhmGysa','tgLZDa','oIa5oxa','D1DSu04','yxnLBgK','ignHy2G','B3jKzxi','BgnAyK0','C2fOC2q','Dw5PDhK','Ew1bseO','ywn0Axy','CdOGmta','AwvSza','wLbKCuq','zwXK','BhrLCJO','phnTywW','CuPZz0K','C2v0sxq','v01ligK','vgDMyuK','mhG2mda','q0fovKe','x19ZywS','tgvNAw8','yw5ZzM8','Bg9YihS','s2zXC0y','B2rL','lwfWCgW','zhbY','ywWGBwu','vKrctu0','AxPLoIa','ENHmCxu','nIaXoci','De5Vzgu','A2L0lxm','idiWmg0','B0rnu3q','tKnmv0G','DgLMEs0','ys5RB3u','ig5VigG','zsWGDhi','yuThBNa','Evf2Duq','mhW2FdC','v2LKDgG','A3ndChm','AwvZlG','DMCGEYa','wLHUy2u','sLzQv0W','ldi1nsW','qNvUBNK','BhrO','A291CI0','B246igW','B2r5','AwrLCJO','A2uTBgK','BI1JB2W','B25JBgK','ANvTCfa','Be1VDgK','DfH6weq','CMvSEsa','yMfJA2C','q0nKEK4','iIbZDhi','t3buthe','zYbJyw4','AxHLzdS','thfeq0C','DgLKzvC','yMrfBfO','yNv0Dg8','DgvYo3C','DgG6idG','quDYwLK','C3zjwKK','B25SEsW','nYWUmJG','vLnvEeq','icaG','C2STy3q','zMLSBcW','AxnPyMW','EI1PBMq','nIa2Bde','r29Kie0','lwv2zw4','oIa2nta','Aw1Llca','CM9WywC','ysblB3u','AxrLBxm','r2X2rvC','Bw4TBwe','BM93','y2f0','wLDrtvu','t2Pmu1C','EYaTD2u','Ahq6idi','icaGlNm','rxzotha','ExzQEvm','AwrLCG','AtmY','BI5MAxi','uvjtwvi','Bg9JAW','FdD8mNW','z2v0sxq','DMvYBge','rwXLBwu','C2HPzNq','BgLKzxi','zxmGEYa','CMDPBI0','C2STC3C','DgLVBI4','C2f2zq','nsK7igi','qxbWBhK','BsbJzw4','yMHVCa','ANrwu0K','zcbJAg8','oI13zwi','oYbIywm','ihDOAwm','B29RCYa','vgPby3m','zxjZy3i','Aw5Mqw0','BwvKicG','DdOGmJG','DMC+','ifvUAxq','DhLSzq','zMLSBa','AgvPz2G','BLbSyxq','AezlyKC','CYb3B24','ndC0odm','Bgf0zwq','icnMzMy','BNqGAge','BMvLAgK','BwuG','BwLZyW','wxDiwKq','Bg9NBY0','mhW0Fdi','DgHLihC','igrPC3a','vK1Rzvq','zw50rwW','uMvJB2K','Aw9U','BYbWAwC','Bw92zq','tgvMDca','mNb4ksa','sgfeD1q','thPHzg8','t3jTuNy','C3r5Bgu','CMfUC3a','tK9cBvq','CdOGmti','zhrOoJe','B1jLy28','D2fYBG','oIaYmNa','z2DSzwq','BfHdwuW','u0jTzxu','uMvZzxq','DMLZAwi','zgL2','BgfJzs0','rLzVyKG','mxb4oYa','ywLSzwq','wKHOwfq','yMLJlwi','BYb0Agu','zsbBrvG','AwDUlxm','iL0GEYa','CNr1Cca','EgvZige','B3bLCNq','ys11Aq','AwDUlwK','r29Kl2q','oYbIB3i','kdaSmcW','zhrOoIa','sgLKzxm','mJiSocW','iJeUnsi','y2fSBhm','y2HPBgq','EdSGyMe','oYbQDxm','DhKGDMe','y2HdB2W','mtrWEdS','Bhv0ztS','nxWYFdq','lc4WocK','qMHlzgq','zs5bCha','ihjNyMe','yxbWBgK','Bw4Ty28','AxrPywW','lM1Ulxa','y3K9iJe','qM1ZuKC','zwLUC3q','ifjLy28','yuTVDxi','q0zItxO','v0fttsa','Fdf8mNW','C2v0','mcWWlJG','z2jHkdi','mJzWEdS','v1jcy0y','l3jHCgK','Aw5Zzxq','igHLAwC','B2X1Dgu','ieaG','sw5Zzxi','lK92zxi','B25LigK','lwHLAwC','rK5fthy','y2vUDgu','oIb0CMe','mtiGmJe','AwX0zxi','DxqGDgG','C3rYB24','yKTMBhG','oYbHBgK','CgvHDcG','sLHKAgm','ltqTnY4','lIbuDxi','ugf0Aa','Dw1UoYa','z2v0rwW','ihWGC2G','yxjJ','sw5ZDge','zKTpweu','A2vZig8','y3jLyxq','ifvjiIW','iM5VBMu','B290zxi','AMT3DNm','zsb0CMe'];_0xe106=function(){return _0x556edc;};return _0xe106();}
