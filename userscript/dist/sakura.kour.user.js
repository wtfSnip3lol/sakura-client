// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.0
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
function _0x3e32(_0x3990bb,_0x4fdfd4){_0x3990bb=_0x3990bb-(0x2*-0x72e+-0x20db+0x30a9);var _0x29535e=_0x42d7();var _0x288ac1=_0x29535e[_0x3990bb];if(_0x3e32['sQJFnP']===undefined){var _0x3d0b4b=function(_0x11d84a){var _0x25aa57='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x37cd0c='',_0xe55718='';for(var _0x12eb31=-0x1*0x142b+-0x144f+-0x3*-0xd7e,_0x283f15,_0x2b47a4,_0x5d7b3d=-0x13f*0x10+0x22c1+0xed1*-0x1;_0x2b47a4=_0x11d84a['charAt'](_0x5d7b3d++);~_0x2b47a4&&(_0x283f15=_0x12eb31%(-0xed*-0x11+-0x1288+0x2cf*0x1)?_0x283f15*(0x2455+-0x1*-0x46a+0x287f*-0x1)+_0x2b47a4:_0x2b47a4,_0x12eb31++%(-0x147+0x1148+-0xffd))?_0x37cd0c+=String['fromCharCode'](0x1cbf+0x263*0x1+0x607*-0x5&_0x283f15>>(-(-0x2*0xabd+0xe42+0x2*0x39d)*_0x12eb31&0xd2+-0x138a+0x12be)):0x1680+0x12*0x7b+-0x1f26){_0x2b47a4=_0x25aa57['indexOf'](_0x2b47a4);}for(var _0x47b7ed=0x270*0x2+0x66*-0x33+-0xf72*-0x1,_0x3fc805=_0x37cd0c['length'];_0x47b7ed<_0x3fc805;_0x47b7ed++){_0xe55718+='%'+('00'+_0x37cd0c['charCodeAt'](_0x47b7ed)['toString'](0x1f0+-0x1437+0x1257))['slice'](-(-0x1b09*-0x1+0x2c*0xdf+-0x415b));}return decodeURIComponent(_0xe55718);};_0x3e32['CqNJdl']=_0x3d0b4b,_0x3e32['ZOJjYI']={},_0x3e32['sQJFnP']=!![];}var _0x5b0d00=_0x29535e[-0x21d1*0x1+0x58*-0x2+0xb*0x323],_0x167e52=_0x3990bb+_0x5b0d00,_0x25af72=_0x3e32['ZOJjYI'][_0x167e52];return!_0x25af72?(_0x288ac1=_0x3e32['CqNJdl'](_0x288ac1),_0x3e32['ZOJjYI'][_0x167e52]=_0x288ac1):_0x288ac1=_0x25af72,_0x288ac1;}function _0x42d7(){var _0x332038=['uK5mq0W','yxrJAgu','yxb0Dxi','ChGGDwK','B0TYCxy','Du9Kz3q','zw51','yNjPz2G','ywrKAw4','ig1PBIG','zw50oYa','BdOGBM8','BNrLEhq','ic5ZAY0','vvHJAxm','zgLZCgW','Aw4TD2K','ihn0CM8','AwWGC3a','sLHZAwC','z2fTzuW','DLztzM4','r1Ltzum','B2X1Bw4','yxrSEsa','DhKGjq','mxb4oYa','EdSGyM8','A0TMrM0','BhmGDgG','zMy2yJK','swnUtNa','BuXTD04','AM9PBJ0','ig9Wywm','B2rKCMe','z1jpu24','q3jVC3m','y2HtAxO','CMLNAhq','ktSGy3u','mJu1lc4','BNrezwy','oxWXm3W','Be1VDgK','BM8Gy2G','t3fjy1u','zM9YBxm','v01ligK','BhrOige','DgHPCYa','mdCSmtu','ida7igi','ltqTnY4','A3nqB3m','ldi1nsW','ywn0A0S','sg9VAYa','yxrLlwm','yxjNzxq','CJOGCg8','s3f4v1C','zgL6zuO','BLbzwwq','nMvLzJi','oJiXndC','C3bLzwq','B3vUzdO','sgvPz2G','oIaIiJS','ANvTCfa','vuP2D0i','zwfWB24','A3ndChm','AKH1Cfy','BYb0Agu','idjWEdS','suT6B00','DdOGmZq','ysblB3u','iM5VBMu','yxnLBgK','wMLhuNa','Bw4TAa','BgLUzw4','q2Lcvwy','lxnPEMu','mdbTCY4','y2n1CMe','Bg9HzgK','B2vlv00','BxLztLe','sw5PDgK','yxbWzw4','v2LWzsa','mcWWlJu','BMqIihm','ignLBNq','icaG','ugTNs0K','zg93oIa','FdL8ohW','rKjJuhm','Cujny3y','sNvTCca','lxbHCMu','Ag9VA0m','DgLKzvC','sNjvuuC','Dg9Y','phbHDgG','oc00lJu','A3mGyxi','yxfhtLa','BgfJzs0','oYbJB2W','Bhv0ztS','igLZigm','zgrPBMC','mNb4ihu','tKzhwLa','tgfZve8','zwHPyvK','B2LS','sK1us2S','mJu1ldi','yw5wt0u','z2uUiei','AguGCMu','mcaWida','AwvZlG','vgf4q1y','BI13Awq','phnTywW','BM9szwm','BwrLC2m','A291CNm','sgLKzxm','t1nOB28','q29SB3i','tg9kBu8','s2v5ra','t3zLCNC','lxnJCM8','ug9ZAxq','ig5LDMu','DgLxwuy','igDHCdO','B3nWywm','r3nfzuK','Bw92zvq','zwXHDgK','y0vUuvm','kdi1nsW','Cg9Uj3m','zcbZzwu','zw50CZO','mJa2nJG4oufrsMPKCq','ohb4ksK','ldeWnYW','tw92zq','B24Oks4','iKLUDgu','mZa0otC0nefMq0jiCa','AY12ywW','Aw9F','idrWEca','AguGzNi','zsXTB24','vKn2wfe','id0GzMW','ldePoWO','qKLhDLK','wg51sge','A2uTBgK','CMvJDa','BNrLBNq','AgfPCG','nhWY','DgHLihC','rMjXvui','idfWEca','v0reqKi','wgjczLi','igzVCIa','zeD3qLu','CIGTlxa','lxj1BM4','Dg9Nz2W','vg90ywW','iezPCMu','oIaXms4','mdi1ktS','lwfWCgu','rNjHBwu','CI1Yywq','AfTHCMK','wfDZCui','Ahq6idi','BMn0Aw8','B3rZlG','y2vUDgu','oYbMB24','icaGlM0','CZPUB24','lcbJywW','z2H0oIa','zw1LBNq','BMC6ida','Aw4Sihq','DMLZAwi','DMLHifm','tg9Hzgu','nsKSida','yNv0Dg8','oIaWide','EfnJBgC','ndC0odm','BMu7ige','tM8Gzw4','icbIywm','icnMzMy','y3vYtKu','yvDRthy','DgvTCgW','rMXrBuC','ChvZAa','ignHBgm','zsbTAxm','CKzdBg4','wefbAMu','nIaXoci','zNbZ','yNnmz3u','zxjSyxK','kYbmtui','ywrPDxm','tgvNAw8','B3b0Aw8','zM1ZEhi','tLviyKS','rgLL','DMLZDwe','s2v5C3q','zMXLEdS','oIbZDge','DhLqy3q','y29TCgW','DMfS','CM0GlJq','BwLUkdq','CNjVCG','zw50tgK','oYbWB2K','u2vNB2u','Ag9VA3m','ienquW','ihDLyxa','Ad0ImIi','DgvTlxu','AgfZ','A2v5zg8','mtrWEdS','vxfNtuy','A291CI0','icaGzgK','zcWGi2y','B25SEsW','BMvjrgy','Fdf8nNW','AguGDxm','CgfJAxq','vLjsu20','oIa4ChG','mciGCJ0','idmWChG','Aw5NicS','x19tquS','ywrIBg8','zxj2zxi','Bw4Ty28','zxH0','zw50zxi','ChG7iha','mtu3lc4','zwn0oIa','D2vIA2K','ihSGzM8','Ee9Nwhq','C3DPDgm','Dg9Wrgu','tvHeALa','lwLVxYO','ndHWEcK','rvr5Dxu','B2XVCJO','B2rL','A2vizwe','C2STCMe','C2HVB3q','zcWGyw4','igq9iK0','Bw8GDg8','Dw5Kzwq','zwfKige','Aw5WDxq','AYbVBI4','rLbfzeO','C2f0Dxi','EYbMB24','Aw9FmZa','BgLUzvC','icaUC2S','BI1ZDwi','ns00idC','BsbVBIa','zgvYlxi','y3nZvgu','Ahq6ida','EdSGywW','s3PQswq','y3jLzw4','ie1VDMu','B3nLihS','zxjYB3i','BMq6icm','yvn2D1C','Aw5KzxG','vKT4s0O','qNvUBNK','Bw4TDge','Fdv8mhW','uw9YwKq','m0LPBLrgrW','mJb3DM1ytwu','u2vSzwm','Awr0AdO','B3nLihm','CY1Zzxi','uwPeuKe','BLbSyxq','ywDLigq','Bw91C2u','quPmAha','z3jHDMK','CI1ZzwW','AcbVBMu','lwfWCgW','Dhm6yxu','ywXSzwq','C2fMzu0','B3bLAgq','zvKOmtG','BKHosgW','C3rVCfa','igrPC3a','lwzPBhq','y1LPrNm','y29PBa','zMLSBcW','Bu9zwNG','u2TPChm','DhflAwe','ihjNyMe','B25JBgK','Bw4Ty2W','4Ocuig92zq','yY0XlJu','zwfKB3u','B3qGBwe','zwz0ic4','DMLLD0i','idaGmJq','zw15igm','ndGZnJq','mtaYA0LzwuXc','Aw9UlLq','zgPiq2K','q291BNq','sgvHBhq','BwLZyW','nMi5zci','oYbIB3i','owqIihm','CYbZChi','vfn6B20','Dc1ZBgK','AvroD24','uvbtEwm','igjHy2S','nhWWFdm','ywn0Axy','DgXL','DhjPA2u','Bgf5oIa','Eu1RBNi','nNb4idK','qK54AfC','zcb7igi','mtb8nhW','sw5ZDge','i2zMzG','B25TB3u','zMPYrfa','ywrK','Bg9Hzc4','zwjTD3m','CMuGkfm','AxmGAg8','nwmWidm','Dgv4Dei','yMLJlwi','rLn4u2G','AwftCeO','igP1Bxa','wuTrCfO','z1bOB0W','yuTVDxi','A2rkuLO','A3nty2e','Dg9W','nsWUmdC','yMvREeC','nYWWlJm','vhP3qMy','igzSzxG','uwLywwG','y25Ls0u','AtmY','v3jHCha','zvzHBhu','CKLmvfy','igvUDgK','D0jSDxi','u3rHDgu','BMDL','BwvKicG','Bgv4oIa','zvPSEK8','DdOXmda','Bg1fC0C','vLPzDhm','BMCGzM8','Aw46ida','r29Kl2q','ugf0Aa','C3bHBG','ntaLktS','D3jPDgu','Awy7ih0','yMHxEfy','ide0ChG','ihSGD2K','teX0suO','nZTWB2K','idi0iJ4','rfHYr2S','y2X6z1a','mtr8n3W','C3r5Bgu','mNb4oYa','B2rLu3q','CwzgAvm','zwLNAhq','oIb0CMe','DxjDigG','Ag9VA0C','AY1ZD2K','AwXnB3q','zxjZihq','u2nHBgu','Awr0Aa','DxjDifu','i2zMyJm','mdb2DZS','lM1Ulxa','Dhn6zhu','ihbSywm','igjHBIa','ode5mZaXnu5WzffhrW','z29KrgK','EdTVCge','B25JAge','qxbWBgK','vMLZDwe','yvrPzuO','BYbWAwC','uJOG','CJSGz2e','v3nuAgC','BgLUzvq','qM90Dg8','zw50kcm','Aw50zxi','q2XVC2u','nsK7iha','CM9Wlwy','z2v0q28','ltiUns0','i2zMnMi','ndiSlJG','B3n0zMK','yMfYlxq','wejZvgq','yxj0lG','iezquW','ignVBg8','AxnPyMW','CLzhqKC','uNvUDgK','zdOGBgK','mc41','BMq6ihq','DcbZDge','svrfEgS','CML2zvu','Aw1Llca','zxi6igi','Aw5Zzxq','EtOGyMW','EgTfqNa','BI1SB2C','ihWGrvi','zgfTywC','zNrLCIa','zJDHotm','CM91BMq','wKL6t2e','AwXS','idHWEdS','nc00lJu','CYb3B24','Bg93zxi','zg93BG','EfvTAe8','zxrLy3q','BfnbsgS','DMfSDwu','oIaXnha','yw1L','DgLKzs4','B01Tt0q','D1DRrvu','BdOGAw4','ChG7ihC','BML0igy','ocKPoYa','Au9cv2i','lwv2zw4','C2HHzg8','tw92zw0','zeL1tNy','DcWGCMC','qw1zuwG','mdSGBwK','ywqU','uffQqKK','nNb4oYa','B3vUDgu','y29SCZO','yMnyvxa','Aw5NoIa','mtSGBwK','yxjJ','BMLUzW','C2STBwi','B25PBNa','yM9Yzgu','lc4WnsK','zs1PDgu','D2LnC2K','lsbVDMu','zKntvwe','Ag9VA04','EcaWoYa','z0TPANq','CMvSB2e','zw51ihi','zuv4Ca','DgfNtMe','Dw5RBM8','DgHYB3C','BhnpvKW','mJm4ldi','A2uTD2K','mJm1mtaYvevkrwvO','s2T3uhC','Fdf8mNW','D2L0Ag8','AwDODdO','vKDbve8','AgnivfC','zc10Axq','zvj1BM4','vfHfwM0','q3vZDg8','oIbMBgu','B3i6ihi','psiJzMy','AwXZquy','zMLSBfq','DdSGFqO','B2vZig4','DhfNz1K','mtj8mhW','mNWZFde','ntuSlJa','zxiTzxy','z3jPzc0','vLnwDxe','ywnRz3i','CMvHzey','CMzSB3C','EMrquuq','Bw1VifS','EuTXz3O','DgvY','CNnVCJO','DwLyDLy','CMfUC3a','BhvLCY4','nhWXnNW','yxmGBM8','y3jLyxq','Bgf0zwq','B2nRoYa','tNzlC1O','B2fur3m','Bgf5ig8','DhLSzq','z2DkDfO','oIbJzw4','Dcb7igq','C3rYB24','sfrLvhK','tKCG4Ocuia','r29Kie0','4Ocuig5Via','ug5AwKC','zMXLEdO','y2SP','DLbiwfu','Awq7iha','nYWWlJG','B3rOAw4','ifjLy28','BMnL','CZOGyxu','zefsvxO','ig5VBMu','wxfQzvG','EsaUmZu','ihDPzhq','zvn0EwW','ieTLzxa','ihLVDxi','wxrkEvC','C2v0qxq','CMDIysG','CgfYzw4','CM9Rzxm','DgL0Bgu','AKPOsKO','yLDVyxe','r3PQC1q','CMvWzwe','qNLjza','idiWmg0','ys5RB3u','ntuSmJu','y3jVC3m','uMvJDa','zJmY','mte3nJbkB0Hpq3K','vNDot1u','oYb9cIa','u2vjsKW','yxjHBMm','AY1Jyxi','iL0GEYa','EsbKzwy','lwL0zw0','Bg9YihS','yxbWzwe','zgL2','AgvPz2G','odiPoYa','CxvLCNK','idqTnc4','ihn0AwW','zxiTCMe','y2XHC3m','Bw4TDgK','ihjLBg8','mhW1','lxDPzhq','CMvHzhK','BM93','CfzKB0G','Dg9WoIa','BgfZDeu','ohG5mc0','C2STyNq','C2v0x3q','zxi7igC','CvLMy2q','vuLLyxu','rMfIuNO','ztSGD2K','B1DQC3m','tM8GuMu','B21ksMG','icbIB3G','C3vADK4','wu1Suhu','yM90Dg8','t1vsx18','y2fSBa','zwv6zsa','ic5TBI0','Bg9Hzca','BxPrvem','uMvJB2K','Bw92zw0','s0rythe','EYaTD2u','C3rYB2S','mxW2Fde','zenOAwW','Au5SveW','CM9WywC','ywWGBwu','zePnz2K','A2vZig8','Bg9JAW','A2DYB3u','B3jZige','DYGWida','vLLYvNG','Ec1ZAge','BgvZiem','CJOGDgG','B3zLCMW','ihrOzsa','lxjHzgK','oIbKCM8','nJiWChG','B250lxC','B25LigK','ls1W','igjVEc0','Dezvvve','AKrxy0W','B3vUDc4','ywrKrxy','idK5osa','EdSGz2e','Cg9W','oJa7EI0','AhvTyIa','DgvJDgK','y29SB3i','ic8GDMe','mxb4ida','CMfKAxu','AgnxuKu','lxnHBNm','BM9tChi','ig1VBwu','tMDADuC','D1Htwe8','ideYChG','DMG7EI0','mNb4ide','z2DSzwq','Dhj1zq','iIbZDhi','BKnpwMm','qMfVs0u','zdSGy28','B3bLCNq','v2vHCg8','BIb7igy','z2v0sxq','vgfRzxm','nsaWlti','B2fKzwq','v2vItw8','zgv2Awm','C2STC2W','wwfcDem','AxfvuuG','t1DRvNy','As1TB24','BJOGy28','rhDjBhC','vvvgzhO','EYbIB3G','DML0Eq','te13Aem','lIbvC2u','D2DWz2O','iNjVDw4','ih0kica','twLXuxq','Aw5Uzxi','rw5NAw4','u2fMzxq','zw50','Dc1ZAxO','vMfSDwu','vvjbx0S','y2HdB2W','jsbUBY0','zguSihq','zw0TDwK','B3bHy2K','zc5VBIa','khjLBg8','tKHHDKi','AcaTidq','oYbVDMu','CJOGi2y','C2vYDMu','mwzYksK','Bxm6igm','CI52mq','EdSGyMe','EuvXzeO','uwPKEgW','BtOGmJq','BMuUqxa','ifvxtuS','DMvYlxy','z2fzANq','EdSGAgu','mJiSocW','idmYChG','y2TNCM8','z2v0','zM9UDa','BwLU','yvfqre8','BY1ZDMC','vgLJAW','uw1XqKy','Du9gz20','EdSGCge','igfIC28','Aw9UoMy','mtbWEdS','AxLMB3i','CIiSici','EdSGB3u','zM9UDc0','rgfTywC','rK5Xyw8','vvDnsYa','igHVB2S','DfHjB3m','CgfNzsa','yw1Hz2u','ihrYyw4','yw5Uywi','BMX5kq','AwrLihS','nJaWide','Bwf0y2G','ChG7igi','C2v0sxq','vMXTrwG','B3vUzca','BfjHDgK','BNnPDgK','AxfyBhG','CYbnB3y','revku3O','ihjLy28','u1jKyui','nsK7ih0','yxjPys0','yMvS','ywXSihq','CMvZDg8','CMvWBge','mhb4oYa','Ew5yq2O','ALzOz0G','iduWjtS','tMfTzq','zJzIowq','vw5PDhK','ihrVCdO','lNnRlwm','ztOGmtm','qMXVy2S','Dg5LC3m','nsWYntu','v3DrzKq','BMqGBwe','vMrezxi','mZuSmJq','y1nOBui','ohWZFde','mtySmc4','BM90zs4','BwXLsLu','sxnhCM8','Fdb8mNW','idnWEdS','ihrOAxm','zg9JDw0','v2zgD28','ida7igm','CgXHEtO','AwXSihK','sNrqDMC','y2fSBhm','icaUBw4','lc4YnsK','Aw5Mqw0','EYbIywm','yMHVCa','lJa4ktS','ignVB2W','y29TyMe','lwjHBNi','rxHW','zZOGmNa','B2reAwu','tKzsuxe','DcbHihq','zw50CW','yxjKlxq','sg5LvMy','oYbIywm','Fdz8nhW','igj1AwW','zIbTyxq','BsbSzwy','psjYB3u','mcbOB28','ldiZocW','Bgv4oYa','ugHlD0O','C2u6Ag8','C2v0','qxL0rLa','yKrpzKC','r21bENi','DdOGnZa','yM9KEq','zxj5idi','ihbHzgq','nsK7igi','zMLLBgq','z2jHkdi','zg93BIa','Dg9WoJe','zsb3zwe','AxPLoIa','tu9ersa','BhvYkdi','ihbVAw4','ys11Aq','ndSGBwe','tgLZDa','D0nVBg8','txniDxa','Ag9ZDg4','tuHmr3G','Axb0kq','tg9JywW','B2XVCJS','yxr0ywm','DxjZB3i','oIbUB24','Bwf4','lM1Ulxq','Cwnpv3a','qvnfELy','AwX0zxi','mdSGyM8','ohb4oYa','y2vZlG','uvbSDvi','tK1Xr0y','zuvSzw0','rw9izge','u0flvvi','z2v0rwW','BgvUz3q','BNrLCJS','AwzZufe','C2HVD24','CZOGmty','DuL4t0u','mxb4ihi','ugzkDeO','nYWWlJC','ywqGD2G','CMfWAwq','mdSGFqO','AwXLzdO','oI13zwi','lMP1Bxa','BerPzsK','tuLtu0K','BMqGt0G','igTVDxi','ieLZr3i','EgvZige','s2v5vW','y3qGB24','u3bHy2u','C2STy2e','iokaLcb0zq','Bg9Hzgu','qNzLvwO','DgvZDa','y2TLzd0','y2f0','Bw92zq','zwfK','icaGic4','vLvuqwO','ktSGFqO','ktSGBwe','u2L6zq','CMvMAxG','zciVpJW','BNLtC1a','icaGlNm','q1btihi','AxnWBge','mJe3nty3mfHdBhPwtq','ltiUnsa','BhKGkhi','CM9Rzs0','Dg87zMK','ChG7igG','Bw4TAca','zxjZy3i','EYbWB3m','CZOGoha','nxWWFdm','z29K','BMvJyxa','zxjYihS','shrjAMi','C2HPzNq','CgfYC2u','Axr5oIa','oYbKAxm','ig1HCMC','ChG7igy','D2L0Aca','ndu1ndvywLjwuxa','yw5ZzM8','z2LMEq','idqGnc4','u2fRDxi','BI5MAxi','sw5Zzxi','BwuG','AgvSza','rvHqxq','y2HPBgq','lNnRlw0','Dgv4Dee','AxrJAa','ieaG','BgLNBG','mta5owHerNzWwq','EdSGBwe','ihWGBw8','oIbJB2W','B2XPBMu','nJaWia','te1c','ltjWEdS','oIbHyNm','BgWGBwu','yxrPB24','vfrgyKG','lxnLCMK','BhrO','C2f2zq','oIbYz2i','zMLSzw4','ig1PBM0','zw50rwW','z2v0qxq','icaGica','lKXVy2e','zwqGyw0','CfPNEw8','DK1LDeO','uMf0zq','zgL1CZO','icaGkIa','AwnRihm','y0XzAuS','ihSGAgu','DhmGCgW','uK9WvLe','C2nyD2q','zxzLBNq','zIXZExm','yxrLvge','ztOGBM8','rejdEfe','Aw1Lihm','AwvSzca','B290zxi','CMXHEsa','AxmGyNu','nxb4oYa','A3DRwMy','BgndCvG','ihSGywW','DMvTzw4','nNb4ida','sgvLEMC','zNvSBhm','DgvYoYa','zxiGC2W','B24UvgK','BI1JB2W','cIaGica','igzVBNq','A2v5C3q','idaGmca','rM9Yy2u','igXLyxy','AKHXuvy','zvjHDgu','n3W4Fde','lJq1oYa','ywXPz24','B29RCYa','DgLMEs0','ywiUywm','zgvSzxq','CMvHza','DxDTAW','y3P6rfm','zxnJ','B1Lisha','ihSGy28','AwX5oIa','swyGCMu','AwDUlxm','icaGig8','zcbNCMu','C2L6ztO','CYbpDMu','B2LSicG','zhfytNu','ic40oYa','rwjTCLO','DxjDig0','DMTXzhq','pc9ZBwe','uK1c','lwHVCa','y3K9iJe','C2vSzwe','CZOGy2u','lwjVEdS','C2fRDxi','v1P2sxa','idrWEdS','yw5LBc4','EYbSzwy','C3rYAw4','BwvsDw4','BgW+','lc4WncK','CZO6lxC','ihSGzMW','oIaZChG','ihrVide','zvbSDwC','DunAtNi','y2fWtw8','B01tC0y','oYb0CMe','revNvNy','DMC+','yJPOB3y','qLDLC2G','zsbJEd0','B250zw4','B24U','C2STzMK','iNrYDwu','oIa2mda','y2XLyxi','AKLYruu','zvrHA2u','vunyA20','uerIrKu','mJuPoYa','ifvjiIW','wxLmyMW','nZaWia','B01IzKO','BMf0Dxi','BNrLCI0','y2LYy2W','CMfUy2u','mhG2mda','igHLAwC','yM5VCw8','iJeUnsi','D2fYBG','Cev6CxK','yxa6idG','DgLVBJO','z24TAxq','yMvNAw4','oIa0ChG','y2HLy2S','A0XwBLa','lK92zxi','zYb7igm','ksaWida','B2LUDgu','DgG6idi','CgfKzgK','AxvZoIa','ru5jAMG','B1jLy28','DxjH','BYb7igq','z3jVDw4','DtmY','DhjPyNu','msWUmZy','ig9U','B3G9iJa','re1IreC','zMLSBa','lZ48l3m','BsbYAwC','mcWWlJC','yMX5lum','C2v0uhi','BwvZC2e','z3jHzgK','BIb0Agu','nxm0idi','D2jUywC','C2vLBNq','DgvYo3C','DKvHy3m','AK93DLm','s1HIwuG','zgvZyW','iefmtca','yK9Nv3C','DMD4yuG','ig5VigG','AwrLCG','mJvWEdS','CMrLCI0','yYGXmda','tK5Ry1e','mgy1oYa','lsbHihm','BMq6ihi','ysGYndy','igXLzNq','BNL0wg0','DhLWzq','zdOGi2y','vvDnsW','BgLNBI0','ksaXmda','rMLLBgq','oYbMAwW','twLOzha','Egjeq1y','zxG6ide','BNnLDca','vvrWww8','zxPPzxi','sfrnta','zvrUDu4','AgvHzgu','zxiGEYa','uxPiBvK','Dc1Iywm','AMvKBg4','t0HLywW','BK9JwwK','y2rTvg8','zxjZ','m3WXFdi','BNqTC2K','AxrLiee','Bezvwgm','yM90Aca','ywPsuNy','BwLKzgW','Dw5PDhK','EMu6ide','Cu1Vrxq','lIbuDxi','D29YAYa','x19ZywS','lc40ktS','uMvZzxq','mJu1lde','C2XPy2u','AgLoBei','ie9olG','wgPbtMu','rgLZywi','sePLr2e','Dw93Ew4','zLvMuuS','iL06oMe','Fdv8nhW','rwXLBwu','EM1uyxu','z053CKq','u1H6Cxq','DZOGAw4','rKzmCe8','odaSmtK','zhrOoIa','C2zVCM0','zwfSDgG','DdOYnNa','oIbJDxi','mNb4ksa','sM9lwLi','tefnCgm','mcWWlJG','ENHWq20','AwrKv0i','CxjODNe','B250lxm','yxvSDa','igzVDxi','ysGYntu','yxKGB24','CMeTA28','BguGAwy','wLrbuKy','yvjlv3u','yxK6igy','AwDUyxq','CMLZAYa','y2vkvvm','Aw4GC2e','CMvU','AY1OAw4','revpzfa','sNvTCfq','DMDqBLC','zgTPDa','CM9RrfO','AfPtzwO','yK9dr3u','ndySmJm','ihSGzgK','EtOGmdS','zw1ZoIa','y3jLBwu','oYb3Awq','CNr1Cca','EuvUz2K','rLbtig8','B3uU','C3bSyxK','EYbKAxm','BsbJzw4','zw5HyMW','oIa2nta','FqOGica','y2fWu2G','FdH8mW','D2vPz2G','BM9Uzq','qwnTAxO','igjHBM4','igLMig0','D0zZrw0','zdSGyMe','w3nHA3u','C3bSAxq','nsWUmdu','rNDhvxq','ignHy2G','C2STC3C','Dw5KoIa','vwLjEeu','nYWUmsK','BgvMDa','DxqGDgG','zxmGB24','zsGXnta','zMyP','s0fbzNe','DhjVA2u','y2HLCYa','m3WXmhW','AY1IDg4','ywqUieK','y2fWDhu','BgfIzwW','BxKGC2u','AxHLzdS','yKHgD0G','B246ig8','q29TyMe','igjVCMq','DgG6idG','tKCGlsa','C2STy28','B3bLBG','Bw9fEha','yNrUoMG','zNzUv0W','ihSGlxC','CMfPC2u','zMLSBfm','DNjesgC','AsXZyw4','z3vRCKu','AwjcA2q','EwPgChC','y29UDgu','y2vdAgK','yxK6igC','ieDLDfy','oIaZmNa','DgG6ida','tgvMDca','A1zIy24','AwvSza','Dgv4Dem','D2fPDgK','zxqGmca','D2LKDgG','C3rLBMu','mtfWEca','whrrEfm','zMLSBd0','lMrSBa','v0fttsa','ms4XlJa','BNn0ywW','qwrmwu0','ywLSzwq','BMvUA2G','tuLfvem','B3jKzxi','twLZyW','C2v0ida','DKH4ruG','ugn0','EgDtvhK'];_0x42d7=function(){return _0x332038;};return _0x42d7();}(function(_0x7bf92b,_0x2033e1){var _0x173321=_0x3e32,_0x1bdae2=_0x7bf92b();while(!![]){try{var _0x1d4422=-parseInt(_0x173321(0x2db))/(0x3f8+-0x85d+0x466)+parseInt(_0x173321(0x49d))/(0x251e*0x1+-0x2108+-0x414)*(parseInt(_0x173321(0x1df))/(-0x25b4+-0xd36+0x32ed))+-parseInt(_0x173321(0x6ef))/(-0x21*0x83+-0x1b0f+0x2bf6)+-parseInt(_0x173321(0x4b3))/(0x986+-0x114d+-0x3e6*-0x2)*(-parseInt(_0x173321(0x209))/(-0x4f7+0x1b2f+0x2*-0xb19))+-parseInt(_0x173321(0x4c3))/(-0x137a+-0x3*-0xb10+-0xdaf)*(parseInt(_0x173321(0x333))/(-0xf9e+-0x1270+0x110b*0x2))+parseInt(_0x173321(0x271))/(-0xd9a+-0x1d24+0x2ac7)+parseInt(_0x173321(0x1e0))/(-0x1a66+0x19b4+0xbc)*(-parseInt(_0x173321(0x6e9))/(0x1f2a+-0x3*0xac+-0x1*0x1d1b));if(_0x1d4422===_0x2033e1)break;else _0x1bdae2['push'](_0x1bdae2['shift']());}catch(_0x4a607d){_0x1bdae2['push'](_0x1bdae2['shift']());}}}(_0x42d7,-0xe3c*-0x2+-0xa11*0xda+-0x35e07*-0x5),((()=>{'use strict';var _0x1de511=_0x3e32,_0x5668c5={'MHLGx':function(_0x2cc1b8,_0x5c61a8){return _0x2cc1b8!==_0x5c61a8;},'nCOZc':_0x1de511(0x19e),'NFRQq':_0x1de511(0x524)+'a.kou'+'r.v1','MsHup':function(_0x4891bb,_0x12ead6){return _0x4891bb+_0x12ead6;},'OmFxW':function(_0x5aa886,_0x94595){return _0x5aa886+_0x94595;},'curNE':function(_0x43f42c,_0x2f2fc0){return _0x43f42c+_0x2f2fc0;},'NUHbK':_0x1de511(0x4c1),'FBcPs':function(_0x42aa5f,_0x1e10ea){return _0x42aa5f>_0x1e10ea;},'KqxWW':'Sakur'+_0x1de511(0x233),'iyfor':'Assem'+_0x1de511(0x571)+'Sharp'+'.dll','DGyZk':function(_0x166782,_0x125fb7,_0x2898a9,_0x13e4ec,_0x16e417,_0x54bb31,_0x44ba70,_0x5cadf3){return _0x166782(_0x125fb7,_0x2898a9,_0x13e4ec,_0x16e417,_0x54bb31,_0x44ba70,_0x5cadf3);},'MiqQt':_0x1de511(0x272)+'e','XbBfR':'OHeal'+'th','UJvwB':_0x1de511(0x45e)+_0x1de511(0x183),'rVGBG':_0x1de511(0x17f)+_0x1de511(0x1e6)+'forms'+_0x1de511(0x55b)+'tide.'+_0x1de511(0x2b8)+'ent','yjFpw':_0x1de511(0x23e),'KAAfq':'SetGa'+'meRun'+_0x1de511(0x2c6),'ZIzOa':function(_0x51f285,_0xf43651,_0x1d11e4,_0x3faa0f,_0x50d87d,_0x5cdacb,_0x12e71b,_0x466a11){return _0x51f285(_0xf43651,_0x1d11e4,_0x3faa0f,_0x50d87d,_0x5cdacb,_0x12e71b,_0x466a11);},'JXeWz':function(_0x44e274,_0x38d9dc,_0x17909e){return _0x44e274(_0x38d9dc,_0x17909e);},'hcWRE':function(_0x271800,_0x2ec1d2){return _0x271800===_0x2ec1d2;},'WwQfD':function(_0x2119e0,_0x32ffb7){return _0x2119e0!==_0x32ffb7;},'VdDer':'qBMcv','UUFdz':'butto'+'n','XAAje':_0x1de511(0x422),'PiyAJ':function(_0x546358,_0x56f7e4){return _0x546358(_0x56f7e4);},'iXnet':function(_0xcf17b5,_0x2b73d2){return _0xcf17b5*_0x2b73d2;},'QiXYh':function(_0x3ac9b7,_0x156789){return _0x3ac9b7-_0x156789;},'VjWUZ':function(_0x38ffe1,_0x2e6c69){return _0x38ffe1-_0x2e6c69;},'CxrwC':function(_0xcfe1d7,_0x572084){return _0xcfe1d7-_0x572084;},'KXbYH':_0x1de511(0x57b),'TTFbH':function(_0x34d6ee,_0x3373c0,_0x4c739d,_0x2d865a){return _0x34d6ee(_0x3373c0,_0x4c739d,_0x2d865a);},'ggJtZ':function(_0xb656f0,_0xffd4c4){return _0xb656f0!=_0xffd4c4;},'yMknr':function(_0x82bb35,_0x1941e3,_0x2f417a,_0x5309e1,_0x532e06){return _0x82bb35(_0x1941e3,_0x2f417a,_0x5309e1,_0x532e06);},'VwNOU':function(_0xca64ca,_0x376c1c){return _0xca64ca===_0x376c1c;},'qMoEt':_0x1de511(0x189)+'ete','oeKWM':function(_0x4e6e0e){return _0x4e6e0e();},'VRRSm':'EgvgY','PCyUd':function(_0x303b96,_0x3dcb21){return _0x303b96===_0x3dcb21;},'czzDS':_0x1de511(0x61a),'SRdaB':'rgba('+'255,2'+_0x1de511(0x417)+'0,0.7'+'5)','GOiFe':'600\x201'+_0x1de511(0x6c3)+'i-mon'+'ospac'+_0x1de511(0x6f4)+'ospac'+'e','tFUUQ':_0x1de511(0x60b),'ilsAF':_0x1de511(0x236),'DEJSz':function(_0x46e68d,_0x53b4b7){return _0x46e68d(_0x53b4b7);},'iLciS':function(_0x3d416c,_0x33e4a9){return _0x3d416c+_0x33e4a9;},'rILTV':_0x1de511(0x324)+_0x1de511(0x5b4)+_0x1de511(0x5c5)+'0,0.6'+')','vgPnW':function(_0x16554e,_0x172542){return _0x16554e>_0x172542;},'xgSTy':function(_0xf09255,_0x30db64){return _0xf09255!==_0x30db64;},'LMwhC':'KuewG','oWjss':_0x1de511(0x24b),'qcOWp':function(_0x4b8296,_0x43dacf,_0x34f3dc,_0x254f52,_0x1d85b0){return _0x4b8296(_0x43dacf,_0x34f3dc,_0x254f52,_0x1d85b0);},'lPFNl':function(_0x16a0e4,_0x90c6e,_0x1bd885,_0x2317ad,_0x47efa1){return _0x16a0e4(_0x90c6e,_0x1bd885,_0x2317ad,_0x47efa1);},'dGwBU':function(_0x335b0e,_0x40bcbe){return _0x335b0e(_0x40bcbe);},'wFsEm':function(_0x5215eb,_0x894e50){return _0x5215eb/_0x894e50;},'gYloF':function(_0x3141b1,_0x52d0ff){return _0x3141b1(_0x52d0ff);},'VGATO':'mouse','XtQxS':function(_0x12d544,_0x310c17){return _0x12d544/_0x310c17;},'WAwFS':function(_0x28baf4,_0xa32fb9){return _0x28baf4(_0xa32fb9);},'nPYYd':function(_0x453b00,_0x398b7f){return _0x453b00!==_0x398b7f;},'oddra':'NMqGF','djHCi':function(_0x4b89c3,_0x43c6d5,_0x341396,_0x1eb7b3,_0xaf36ac){return _0x4b89c3(_0x43c6d5,_0x341396,_0x1eb7b3,_0xaf36ac);},'myYNQ':'f32','MIETC':function(_0x280b24,_0x59ee3a,_0xa2bb9f,_0x1c634a,_0x4e65b0){return _0x280b24(_0x59ee3a,_0xa2bb9f,_0x1c634a,_0x4e65b0);},'kLVnP':_0x1de511(0x1e9),'jDWcL':'SNxYX','kDqHN':function(_0x36cd8e,_0x1d6c5d,_0x3ffacf){return _0x36cd8e(_0x1d6c5d,_0x3ffacf);},'WsThg':function(_0x1f32cf,_0x2d890f,_0x16a246,_0x12838b,_0x1496be){return _0x1f32cf(_0x2d890f,_0x16a246,_0x12838b,_0x1496be);},'HtIjb':'zHOkH','lcCqX':_0x1de511(0x5cc),'rBCCI':function(_0x2f51c2,_0x1da50e,_0x189f4e,_0x597b6c,_0x46a306){return _0x2f51c2(_0x1da50e,_0x189f4e,_0x597b6c,_0x46a306);},'lseHb':_0x1de511(0x199),'HneVf':_0x1de511(0x5b6),'gROSn':function(_0x9a47b6,_0x271cf0){return _0x9a47b6+_0x271cf0;},'OHlRs':_0x1de511(0x36b),'ETyuu':'PYSLf','RAVhB':function(_0x1582c3,_0x3af21d){return _0x1582c3+_0x3af21d;},'jZHcJ':'keyup','ENcTc':_0x1de511(0x1e8)+_0x1de511(0x2a7),'QmqBF':_0x1de511(0x1e8)+'up','eZlzO':'blur','NFGZP':function(_0x24fcdf,_0x58f8a9){return _0x24fcdf-_0x58f8a9;},'TSzom':_0x1de511(0x27f)+_0x1de511(0x219)+'e','QjDRA':function(_0x178358,_0x1b1004){return _0x178358/_0x1b1004;},'QPSyc':function(_0x1c01a8,_0x5efada){return _0x1c01a8*_0x5efada;},'ZwPel':function(_0x288b5e,_0x3494fc){return _0x288b5e-_0x3494fc;},'JRYwe':function(_0x23bb14,_0x306b7e){return _0x23bb14-_0x306b7e;},'vHxEH':function(_0x25dc63,_0xba6ea6){return _0x25dc63+_0xba6ea6;},'cWthq':function(_0x409188,_0x391357){return _0x409188+_0x391357;},'PkgKI':function(_0x168093,_0x249b65){return _0x168093+_0x249b65;},'GmAzr':function(_0x3b7821,_0x5642c1){return _0x3b7821+_0x5642c1;},'fgZHV':_0x1de511(0x46f)+'A\x20KOU'+'R\x20v1.'+'1','gaYjt':_0x1de511(0x637)+_0x1de511(0x24c)+'r\x20gam'+'e…','pxELo':'4|2|0'+'|3|1|'+'5','HTeTy':_0x1de511(0x1c3),'VCvXQ':'selec'+'t','paTWo':_0x1de511(0x4a7)+_0x1de511(0x2dd)+'4','hcHTW':_0x1de511(0x350)+'n','QPluR':'small','IKzoM':function(_0x1d2f20,_0x5db24c){return _0x1d2f20(_0x5db24c);},'ASEzV':_0x1de511(0x56a),'UXcis':'div','GQhGF':function(_0x23ced8,_0x3ba122){return _0x23ced8===_0x3ba122;},'VUTAj':_0x1de511(0x2f3),'DMbDG':'sk-mb'+'ody','nklFm':'SAFE\x20'+_0x1de511(0x453)+_0x1de511(0x200)+_0x1de511(0x4ed)+'only,'+'\x20no\x20h'+_0x1de511(0x506)+'(relo'+'ad\x20to'+'\x20exit'+')','MXDjP':function(_0x3b9499,_0x3f8934){return _0x3b9499+_0x3f8934;},'dizeJ':'held','anVOE':_0x1de511(0x5fc),'aSvwW':function(_0x112e6d,_0x1a8102,_0x266d8c,_0x555475,_0x3d8728,_0x490744){return _0x112e6d(_0x1a8102,_0x266d8c,_0x555475,_0x3d8728,_0x490744);},'ITExk':function(_0x32abe0,_0x4f16b0){return _0x32abe0===_0x4f16b0;},'VmFUS':_0x1de511(0x58f),'FbqUB':_0x1de511(0x43f)+_0x1de511(0x6bc)+_0x1de511(0x246)+'all\x20o'+_0x1de511(0x60f),'pBHOr':_0x1de511(0x29c)+_0x1de511(0x279),'zWpjm':'mn-pa'+'nel','SmuGl':'nav','wlsmz':'mn-si'+'de','cYiFs':'<svg\x20'+_0x1de511(0x205)+'ox=\x220'+_0x1de511(0x206)+'\x2024\x22\x20'+'class'+'=\x22mn-'+'logo-'+'svg\x22>'+_0x1de511(0x6ba)+_0x1de511(0x1bf)+'12\x2021'+_0x1de511(0x201)+'-2.5-'+_0x1de511(0x2a4)+'-4-7.'+_0x1de511(0x3a3)+'.5\x201.'+_0x1de511(0x6bb)+_0x1de511(0x342)+_0x1de511(0x576)+_0x1de511(0x4b6)+_0x1de511(0x22b)+_0x1de511(0x49e)+'5-4\x207'+'.5z\x22\x20'+_0x1de511(0x63d)+'\x22none'+_0x1de511(0x39a)+'oke=\x22'+_0x1de511(0x285)+_0x1de511(0x211)+_0x1de511(0x611)+'-widt'+_0x1de511(0x194)+'\x20stro'+_0x1de511(0x6fa)+_0x1de511(0x4a9)+_0x1de511(0x43e)+_0x1de511(0x6ac)+_0x1de511(0x611)+'-line'+_0x1de511(0x66d)+_0x1de511(0x3b4)+_0x1de511(0x498)+_0x1de511(0x54c)+'e\x20cx='+'\x2212\x22\x20'+_0x1de511(0x520)+_0x1de511(0x1a4)+_0x1de511(0x551)+'\x20fill'+_0x1de511(0x2e8)+_0x1de511(0x20f)+'/></s'+_0x1de511(0x537),'HRnHH':'mn-to'+'p','EjHTk':_0x1de511(0x346)+'tles','kdJRZ':_0x1de511(0x69f),'bhWxV':'Sakur'+_0x1de511(0x69b)+'r','YyLbl':_0x1de511(0x280),'NSRpZ':'<svg\x20'+'viewB'+'ox=\x220'+_0x1de511(0x206)+_0x1de511(0x259)+_0x1de511(0x6ba)+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+'18\x206\x20'+_0x1de511(0x179)+_0x1de511(0x56e)+_0x1de511(0x537),'PhKwJ':_0x1de511(0x1aa)+'ls','MtVVQ':_0x1de511(0x1dc)+'b','kaUsr':_0x1de511(0x6d1)+'l>','XWsqB':'clzgP','YqjeX':_0x1de511(0x65f),'wbnag':function(_0x2949ce,_0x46aa24){return _0x2949ce+_0x46aa24;},'QorZD':_0x1de511(0x4c8),'MswqA':_0x1de511(0x64f)+_0x1de511(0x390)+_0x1de511(0x4cf)+_0x1de511(0x4e6)+'tem-u'+'i,san'+'s-ser'+'if','vkqdt':_0x1de511(0x5ab)+'e','oTTRN':'KeyS','fCSUa':function(_0x1cf63c,_0xad6771){return _0x1cf63c+_0xad6771;},'VYrVx':function(_0xe53c1b,_0x4aecd9){return _0xe53c1b*_0x4aecd9;},'mTIRW':'sakur'+_0x1de511(0x32e)+'r.ui.'+'v1','gGoQm':_0x1de511(0x399),'zmTau':'switc'+'h','wXSXO':'range','ifsPQ':_0x1de511(0x3a7)+_0x1de511(0x582),'iaSpJ':'\x20err','vwdZZ':_0x1de511(0x351)+_0x1de511(0x687)+_0x1de511(0x70e)+_0x1de511(0x4dc),'mkQIm':function(_0xbfb7c6){return _0xbfb7c6();},'xbDCV':'Hides'+_0x1de511(0x483)+_0x1de511(0x1b6)+_0x1de511(0x5fe)+_0x1de511(0x4f8)+_0x1de511(0x714),'nySsP':'eQLuv','LepBi':function(_0x47a90f){return _0x47a90f();},'LasTO':_0x1de511(0x544),'hkwBp':function(_0x20db61,_0x497db3){return _0x20db61===_0x497db3;},'LAMpc':_0x1de511(0x4e3),'KIrmc':function(_0x24cade,_0x27d7b8,_0x1daaf6,_0x34f490,_0x179762,_0x260f54){return _0x24cade(_0x27d7b8,_0x1daaf6,_0x34f490,_0x179762,_0x260f54);},'dARUz':function(_0x60f0a8,_0x5e13d1,_0x58562e,_0x214f78){return _0x60f0a8(_0x5e13d1,_0x58562e,_0x214f78);},'ENrIQ':'Speed'+'\x20%','qzufz':'Scale'+_0x1de511(0x3fd)+_0x1de511(0x71b)+_0x1de511(0x47f)+_0x1de511(0x4ff)+'\x20and\x20'+_0x1de511(0x5a9)+_0x1de511(0x1ea)+'ty\x20va'+_0x1de511(0x2fe),'qhUGW':_0x1de511(0x633)+'middl'+'e','LoJmO':_0x1de511(0x49b)+_0x1de511(0x202)+'t','FabRz':function(_0x41e4cb,_0x356809){return _0x41e4cb(_0x356809);},'gPhoL':_0x1de511(0x685)+_0x1de511(0x5dd)+_0x1de511(0x1b3)+'hes','jHqQV':'god\x20('+_0x1de511(0x5a1)+'th.In'+'itiat'+_0x1de511(0x542)+_0x1de511(0x20d)+'h)','MpiQZ':'0|3|1'+'|6|5|'+_0x1de511(0x6fe),'kMmTM':_0x1de511(0x4a8),'ZTARF':'1.1.0','UCXkm':'capSh'+'ooter','ebmws':_0x1de511(0x6d2)+_0x1de511(0x6c7),'TXEZm':'DwaTj','xBehF':'cLYiK','gNwrD':'sakur'+_0x1de511(0x456),'yEqdJ':_0x1de511(0x621),'HJeGa':_0x1de511(0x61c)+'t','ADIhh':'move','YKQpZ':_0x1de511(0x184)+'l','nenkh':_0x1de511(0x276)+'l','digIQ':_0x1de511(0x647),'KzjId':'safe','cShmB':_0x1de511(0x3b9)+'y','QqgjZ':'posit'+'ion:f'+_0x1de511(0x619)+_0x1de511(0x450)+'2px;r'+'ight:'+'12px;'+'z-ind'+'ex:21'+_0x1de511(0x725)+'646;c'+_0x1de511(0x461)+':poin'+_0x1de511(0x579)+_0x1de511(0x1e2)+'26px;'+_0x1de511(0x33f)+_0x1de511(0x5c9)+_0x1de511(0x273)+'city:'+'0.5;t'+'ransi'+_0x1de511(0x555)+_0x1de511(0x3c2)+'ty\x200.'+'2s;po'+_0x1de511(0x27f)+_0x1de511(0x2b6)+_0x1de511(0x1ee)+_0x1de511(0x4a1)+'lter:'+'drop-'+_0x1de511(0x2b7)+_0x1de511(0x373)+'\x204px\x20'+_0x1de511(0x324)+'255,1'+_0x1de511(0x67f)+_0x1de511(0x479)+'))','AytFP':'<svg\x20'+_0x1de511(0x205)+_0x1de511(0x56b)+_0x1de511(0x206)+_0x1de511(0x259)+_0x1de511(0x6ba)+_0x1de511(0x1bf)+'12\x2021'+_0x1de511(0x201)+_0x1de511(0x284)+_0x1de511(0x2a4)+_0x1de511(0x681)+_0x1de511(0x3a3)+'.5\x201.'+_0x1de511(0x6bb)+_0x1de511(0x342)+'5s4\x202'+_0x1de511(0x4b6)+'5c0\x203'+_0x1de511(0x49e)+_0x1de511(0x1cc)+'.5z\x22\x20'+_0x1de511(0x63d)+_0x1de511(0x69c)+_0x1de511(0x39a)+'oke=\x22'+_0x1de511(0x285)+'9d\x22\x20s'+'troke'+_0x1de511(0x349)+_0x1de511(0x194)+_0x1de511(0x65d)+_0x1de511(0x6fa)+'necap'+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+'join='+'\x22roun'+_0x1de511(0x498)+_0x1de511(0x54c)+_0x1de511(0x53a)+'\x2212\x22\x20'+'cy=\x221'+_0x1de511(0x1a4)+_0x1de511(0x551)+'\x20fill'+_0x1de511(0x2e8)+_0x1de511(0x20f)+'/></s'+_0x1de511(0x537),'aRKWu':function(_0x29e3f3){return _0x29e3f3();},'zSNhL':_0x1de511(0x602)+_0x1de511(0x5d7)+_0x1de511(0x51b)+_0x1de511(0x2d3)+'eady.'+_0x1de511(0x3d2)+':','SpefZ':function(_0x81e567,_0x309649,_0x25173d,_0x103d8d,_0x5efdf3,_0x149403,_0x18fbf0,_0x1fa9cb){return _0x81e567(_0x309649,_0x25173d,_0x103d8d,_0x5efdf3,_0x149403,_0x18fbf0,_0x1fa9cb);},'tjGbR':function(_0xa3dd1f,_0x220731,_0x5cbd13,_0x179d01,_0x4f86f5,_0x42f147,_0x481ce5,_0x13e87f){return _0xa3dd1f(_0x220731,_0x5cbd13,_0x179d01,_0x4f86f5,_0x42f147,_0x481ce5,_0x13e87f);},'FNqao':function(_0x23a224,_0x22d859,_0x1371f2){return _0x23a224(_0x22d859,_0x1371f2);},'fvnWL':function(_0x325615,_0x5c6752,_0x25f604){return _0x325615(_0x5c6752,_0x25f604);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1de511(0x48d)](location[_0x1de511(0x45b)+_0x1de511(0x2ad)]||''))return;if(window[_0x1de511(0x1a7)+'URA_K'+'OUR__'])return;window[_0x1de511(0x1a7)+_0x1de511(0x3bd)+_0x1de511(0x35e)]=!![];var _0x5c56ef='#ff6b'+'9d',_0x49dee0=_0x1de511(0x26b)+'c6',_0x32b344={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x1b1e78={..._0x32b344};try{Object['assig'+'n'](_0x1b1e78,JSON[_0x1de511(0x4ad)](localStorage[_0x1de511(0x3a1)+'em'](_0x1de511(0x524)+_0x1de511(0x32e)+_0x1de511(0x3cc))||'{}'));}catch(_0x4a7bdd){}function _0x1c55f8(){var _0x4e9e60=_0x1de511;try{_0x5668c5['MHLGx'](_0x5668c5[_0x4e9e60(0x39b)],'neIDf')?(_0x3ee20e['noSpr'+'ead']=_0x9e71bd,_0x313176()):localStorage['setIt'+'em'](_0x5668c5[_0x4e9e60(0x434)],JSON[_0x4e9e60(0x529)+'gify'](_0x1b1e78));}catch(_0x480157){}}var _0x301c94={'uwmk':!!window['Unity'+_0x1de511(0x3a5)+_0x1de511(0x5e5)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1b1e78['safeM'+'ode'],'lastError':''};try{window['addEv'+_0x1de511(0x18e)+'stene'+'r'](_0x1de511(0x1d6),_0x26504c=>{var _0x9e4d64=_0x1de511;try{var _0x3da2ac=_0x26504c&&(_0x26504c['messa'+'ge']||_0x26504c[_0x9e4d64(0x1d6)]&&_0x26504c['error']['messa'+'ge'])||_0x9e4d64(0x2d6)+'wn';if(_0x26504c&&_0x26504c['filen'+_0x9e4d64(0x2ad)])_0x3da2ac+=_0x5668c5['MsHup'](_0x5668c5['OmFxW'](_0x5668c5[_0x9e4d64(0x72a)](_0x5668c5[_0x9e4d64(0x182)],String(_0x26504c[_0x9e4d64(0x4d3)+_0x9e4d64(0x2ad)])['split']('/')[_0x9e4d64(0x387)]()),':'),_0x26504c['linen'+'o']||'?');_0x301c94[_0x9e4d64(0x34e)+'rror']=String(_0x3da2ac)[_0x9e4d64(0x5b5)](0x19b5+0x1447*-0x1+-0x2*0x2b7,-0x1*-0xab5+-0x2*-0x4a6+0x1c3*-0xb);}catch(_0x1d1be9){}});}catch(_0x39c4f3){}var _0x114ad8=null,_0x357bf5=null,_0x4d1b7f={},_0x15f698=[],_0x529d47=[],_0x34994f=new Map();function _0x282f60(_0x254ff2,_0x58f1b2){var _0x105c5b=_0x1de511;if(!_0x58f1b2||_0x254ff2['inclu'+'des'](_0x58f1b2)||_0x5668c5[_0x105c5b(0x6b2)](_0x254ff2['lengt'+'h'],-0x1751*0x1+-0x4*0x926+0x3c29))return;_0x254ff2[_0x105c5b(0x174)](_0x58f1b2);}function _0x192ffc(_0x53d27c,_0x3f7c4a,_0x411fe1,_0x299694){var _0x4b46db=_0x1de511,_0x13a3ea=-0x1f*-0x107+-0x1dfb+-0x1de;try{_0x4b46db(0x5fd)===_0x4b46db(0x5fd)?_0x13a3ea=_0x3f7c4a&&_0x3f7c4a[_0x4b46db(0x18a)]?_0x3f7c4a['val']():-0x700+0x21b4+-0x6ad*0x4:_0x5cebac[_0x4b46db(0x5f6)+'ed']=![];}catch(_0x256625){}if(!_0x13a3ea)return;_0x5668c5['JXeWz'](_0x282f60,_0x53d27c,_0x13a3ea),_0x411fe1[_0x299694]=_0x53d27c[_0x4b46db(0x471)+'h'];if(_0x5668c5[_0x4b46db(0x38f)](_0x299694,_0x4b46db(0x365)+_0x4b46db(0x436))&&_0x53d27c[_0x4b46db(0x471)+'h']){var _0x293a10=_0x4d1b7f['capMo'+'ve'];if(_0x293a10){if(_0x5668c5[_0x4b46db(0x414)](_0x5668c5[_0x4b46db(0x416)],_0x4b46db(0x6b3))){var _0x17b537=(_0x4b46db(0x218)+_0x4b46db(0x19f)+'5|2')['split']('|'),_0x3fe79c=0x1*-0x2582+0xee+0x2494;while(!![]){switch(_0x17b537[_0x3fe79c++]){case'0':_0x1c6ea6=_0x2c0aa6[_0x4b46db(0x40d)+'WebMo'+'dkit']['Runti'+'me'][_0x4b46db(0x301)+_0x4b46db(0x531)+'in']({'name':_0x5668c5[_0x4b46db(0x689)],'version':_0x4b46db(0x640),'referencedAssemblies':[_0x5668c5[_0x4b46db(0x3e5)]]});continue;case'1':if(_0x2a71a3[_0x4b46db(0x264)+_0x4b46db(0x433)])_0x5668c5['DGyZk'](_0x3fcf6d,_0x5668c5[_0x4b46db(0x3b6)],_0x5668c5['XbBfR'],_0x5668c5[_0x4b46db(0x693)],[_0x4b46db(0x23e),_0x4b46db(0x23e),'i32',_0x4b46db(0x23e),'i32'],_0x591db5,_0x5c856f,!!_0x49ab49[_0x4b46db(0x4a8)]);continue;case'2':if(_0x1e9629[_0x4b46db(0x6b6)+_0x4b46db(0x64e)+'e'])_0xd36e43(_0x4b46db(0x533)+'ve',_0x5668c5[_0x4b46db(0x28e)],'IsGro'+_0x4b46db(0x1c1),[_0x5668c5[_0x4b46db(0x62c)]],_0x4b46db(0x23e),(_0x313a5a,_0x406342)=>{var _0x54ba11=_0x4b46db;_0xc75dde(_0x1b1cef,_0x406342,_0x268524,_0x54ba11(0x365)+_0x54ba11(0x436));},!![]);continue;case'3':if(_0x2e48ab['hookG'+'od'])_0x1f998d(_0x4b46db(0x4a8),_0x4b46db(0x5a1)+'th',_0x4b46db(0x6a8)+_0x4b46db(0x4e7)+_0x4b46db(0x1bb)+'lth',[_0x5668c5['yjFpw'],'i32'],_0x7f481c,_0x142f93,!!_0x3fe4ed[_0x4b46db(0x4a8)]);continue;case'4':_0x224ac9=_0x129a26['Unity'+_0x4b46db(0x3a5)+'dkit']['Value'+_0x4b46db(0x23f)+'er'];continue;case'5':if(_0x270f3c['hookC'+_0x4b46db(0x64e)+'e'])_0x4f70fd(_0x4b46db(0x5f9)+'ooter',_0x4b46db(0x6d6)+_0x4b46db(0x2fa),_0x5668c5[_0x4b46db(0x610)],[_0x5668c5[_0x4b46db(0x62c)],'i32'],_0x34db07,(_0x268eaf,_0x34125f)=>{var _0x4d61ae=_0x4b46db;_0x1dcf95(_0x11a015,_0x34125f,_0x560f6b,'shoot'+_0x4d61ae(0x5a4));},!![]);continue;case'6':if(_0x47997e[_0x4b46db(0x2cf)+_0x4b46db(0x563)+'il'])_0x5668c5[_0x4b46db(0x2a1)](_0x128c22,'noRec'+'oil',_0x4b46db(0x17f)+'nPlat'+_0x4b46db(0x67b)+'.Over'+_0x4b46db(0x2ae)+'Recoi'+_0x4b46db(0x678)+'on',_0x4b46db(0x3de),[_0x4b46db(0x23e)],_0xdad702,_0x5b1214,!!_0x481934[_0x4b46db(0x6d2)+_0x4b46db(0x6c7)]);continue;}break;}}else try{_0x293a10['enabl'+'ed']=![];}catch(_0x337f40){}}}}function _0x4fd73b(_0x53129f,_0x208a9f,_0x468872){var _0x2bdf7d=_0x1de511,_0x4b74d0={'oNAhu':_0x5668c5[_0x2bdf7d(0x3ae)]},_0x410034=_0x34994f[_0x2bdf7d(0x3d9)](_0x53129f);if(!_0x410034){if(_0x5668c5['WwQfD'](_0x2bdf7d(0x702),'XfHqF'))_0x410034=new Map(),_0x34994f[_0x2bdf7d(0x444)](_0x53129f,_0x410034);else{var _0x260f0a=_0x4430c3[_0x3b07bd];if(_0x260f0a)try{_0x260f0a[_0x2bdf7d(0x5f6)+'ed']=!!_0x246240;}catch(_0x3d4b21){}}}if(!_0x410034[_0x2bdf7d(0x196)](_0x208a9f))try{var _0x2f53d7=new _0x114ad8(_0x53129f)['readF'+_0x2bdf7d(0x635)](_0x208a9f,_0x468872);_0x410034[_0x2bdf7d(0x444)](_0x208a9f,_0x2f53d7!==undefined?_0x2f53d7[_0x2bdf7d(0x18a)]():null);}catch(_0x3bfce4){if(_0x5668c5[_0x2bdf7d(0x178)]!==_0x5668c5[_0x2bdf7d(0x178)]){var _0x263060=_0x547d9a['creat'+'eElem'+_0x2bdf7d(0x3ba)](_0x4b74d0['oNAhu']);_0x263060[_0x2bdf7d(0x58d)]='butto'+'n',_0x263060['class'+_0x2bdf7d(0x40b)]=_0x2bdf7d(0x1dc)+'b',_0x263060[_0x2bdf7d(0x327)]=_0x59b4e9[_0x2bdf7d(0x617)],_0x263060['inner'+_0x2bdf7d(0x59a)]='<smal'+'l>'+_0x4f6335['label']+(_0x2bdf7d(0x51d)+'ll>'),_0x263060[_0x2bdf7d(0x1fe)+'ck']=(_0x306335=>()=>_0xa5832(_0x306335))(_0x67d6bd['id']),_0x51c4d1[_0x2bdf7d(0x444)](_0x11f881['id'],_0x263060),_0x16f968[_0x2bdf7d(0x6a9)+_0x2bdf7d(0x36a)+'d'](_0x263060);}else _0x410034[_0x2bdf7d(0x444)](_0x208a9f,null);}return _0x410034[_0x2bdf7d(0x3d9)](_0x208a9f);}function _0x5ce948(_0x44e870,_0x5d6366,_0x59cf77,_0x2df6dd){var _0x16231b=_0x1de511;try{new _0x114ad8(_0x44e870)[_0x16231b(0x252)+_0x16231b(0x592)](_0x5d6366,_0x59cf77,_0x2df6dd);}catch(_0x23ede8){}}function _0x1d8ba2(_0x5d6c97,_0x5e028b){var _0x2bafa0=_0x1de511;try{if(_0x5668c5[_0x2bafa0(0x57c)]!==_0x2bafa0(0x6e1)){var _0x1ca181=new _0x114ad8(_0x5d6c97)[_0x2bafa0(0x2f5)+'ield'](_0x5e028b,'u32');return _0x1ca181?_0x1ca181['val']():0x1*-0x23d1+0x1189+0x5a*0x34;}else{var _0x1ae1f4=_0xbd1d96[_0x2bafa0(0x639)]/(0x179*0xf+-0x9a9+-0xc6c),_0xc254d3=_0x2d5a55['heigh'+'t']/(-0xcc0+0x26f+0xa53),_0x40eed7=_0x5668c5['PiyAJ'](_0x58f1e1,_0x2c3a3a['chSiz'+'e'])||0x22e+-0xb8b+0x95e,_0x44abbe=/^#[0-9a-f]{6}$/i['test'](_0x46ff4d['chCol'+'or'])?_0x527cc4['chCol'+'or']:'#ff6b'+'9d';_0x3db059['save'](),_0x383bd8['strok'+_0x2bafa0(0x31f)+'e']=_0x44abbe,_0x5b5d14[_0x2bafa0(0x627)+_0x2bafa0(0x307)]=_0x44abbe,_0x20df98['lineW'+_0x2bafa0(0x269)]=_0x4e12ad['max'](-0xbfc*0x2+-0xe8d+0x2686+0.5,(0xb7*0xa+0x36*0xa+-0x940)*_0x40eed7),_0x20c3e7[_0x2bafa0(0x2b7)+_0x2bafa0(0x459)+'r']=_0x44abbe,_0x81cc57[_0x2bafa0(0x2b7)+'wBlur']=0x79c+0x3*-0x9a7+0x155f*0x1;var _0x38719f=_0x5668c5['iXnet'](-0x1048+0x133b+-0x2ed*0x1,_0x40eed7),_0x40099a=(-0x1f6f+-0x2*0xc25+-0x7f7*-0x7)*_0x40eed7;_0x2e22f3[_0x2bafa0(0x557)+'Path'](),_0x5cb287[_0x2bafa0(0x6e2)+'o'](_0x5668c5['QiXYh'](_0x1ae1f4-_0x38719f,_0x40099a),_0xc254d3),_0x295291['lineT'+'o'](_0x1ae1f4-_0x38719f,_0xc254d3),_0x514b7d[_0x2bafa0(0x6e2)+'o'](_0x5668c5[_0x2bafa0(0x45a)](_0x1ae1f4,_0x38719f),_0xc254d3),_0x2acdda[_0x2bafa0(0x27c)+'o'](_0x5668c5['OmFxW'](_0x1ae1f4,_0x38719f)+_0x40099a,_0xc254d3),_0x4e4645[_0x2bafa0(0x6e2)+'o'](_0x1ae1f4,_0x5668c5[_0x2bafa0(0x23c)](_0x5668c5['VjWUZ'](_0xc254d3,_0x38719f),_0x40099a)),_0x31f84c[_0x2bafa0(0x27c)+'o'](_0x1ae1f4,_0x5668c5['CxrwC'](_0xc254d3,_0x38719f)),_0x304a69[_0x2bafa0(0x6e2)+'o'](_0x1ae1f4,_0x5668c5[_0x2bafa0(0x72a)](_0xc254d3,_0x38719f)),_0x593ec5[_0x2bafa0(0x27c)+'o'](_0x1ae1f4,_0xc254d3+_0x38719f+_0x40099a),_0x543d03[_0x2bafa0(0x368)+'e'](),_0x41cd33[_0x2bafa0(0x557)+'Path'](),_0x48e4f4[_0x2bafa0(0x2c5)](_0x1ae1f4,_0xc254d3,(0x1ee6+-0xeb4+-0x1031+0.6000000000000001)*_0x40eed7,-0x8b*0x7+-0x845*-0x1+0x16*-0x34,_0x20054c['PI']*(0x3*-0x15+-0x3ae*-0x9+-0x20dd)),_0x294bad['fill'](),_0x489cff[_0x2bafa0(0x405)+'re']();}}catch(_0x359be4){return-0x295+-0x7*-0x4b5+0xd*-0x256;}}function _0x210525(_0x3691a4,_0x28ba22,_0xde5756,_0x1ff075){var _0x37cc10=_0x1de511,_0x3e9345=_0x5668c5[_0x37cc10(0x4ce)](_0x4fd73b,_0x3691a4,_0x28ba22,_0xde5756);if(_0x5668c5[_0x37cc10(0x308)](_0x3e9345,null))_0x5668c5[_0x37cc10(0x21d)](_0x5ce948,_0x3691a4,_0x28ba22,_0xde5756,_0x3e9345*_0x1ff075);}function _0x27052f(_0x485566,_0x155546,_0x3d4bb1,_0x56ddb2,_0x503d95,_0x2be730,_0x57b30f){var _0x30c5bf=_0x1de511,_0x573852={'uiXvV':_0x30c5bf(0x365)+'ents'};if(_0x5668c5[_0x30c5bf(0x45c)](_0x30c5bf(0x550),_0x5668c5[_0x30c5bf(0x1a2)]))try{var _0xe3e37e=_0x357bf5['hookP'+_0x30c5bf(0x497)]({'typeName':_0x155546,'methodName':_0x3d4bb1,'params':_0x56ddb2,'returnType':_0x503d95},_0x2be730);return _0xe3e37e[_0x30c5bf(0x5f6)+'ed']=_0x57b30f!==![],_0x4d1b7f[_0x485566]=_0xe3e37e,_0x301c94[_0x30c5bf(0x191)+_0x30c5bf(0x709)]++,_0xe3e37e;}catch(_0x573ab1){if(_0x5668c5['PCyUd'](_0x30c5bf(0x634),_0x5668c5[_0x30c5bf(0x50c)]))_0x1b6698(_0x4f191a,_0x5ea2f7,_0x1ce6f5,_0x573852[_0x30c5bf(0x2fc)]);else return console[_0x30c5bf(0x552)](_0x30c5bf(0x602)+_0x30c5bf(0x5d7)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x30c5bf(0x47d),_0x485566,_0x573ab1&&_0x573ab1['messa'+'ge']),null;}else{if(_0x5d63cd['body']&&(_0x672747['ready'+_0x30c5bf(0x244)]===_0x30c5bf(0x27f)+_0x30c5bf(0x219)+'e'||_0x5668c5[_0x30c5bf(0x334)](_0x48bf16[_0x30c5bf(0x34a)+_0x30c5bf(0x244)],_0x5668c5[_0x30c5bf(0x5ae)])))_0x5668c5['oeKWM'](_0x1b04c3);else _0x55ac5f[_0x30c5bf(0x384)+'entLi'+'stene'+'r']('DOMCo'+_0x30c5bf(0x6fc)+_0x30c5bf(0x720)+'d',_0x20bccd,{'once':!![]});}}function _0x6b2c31(_0x1dd41d,_0x361fee,_0x33d942,_0x47f433,_0x2d4c2a,_0x119c4a,_0x50361b){var _0x2b2957=_0x1de511;try{var _0x3208e4=_0x357bf5['hookP'+_0x2b2957(0x287)+'x']({'typeName':_0x361fee,'methodName':_0x33d942,'params':_0x47f433,'returnType':_0x2d4c2a},_0x119c4a);return _0x3208e4[_0x2b2957(0x5f6)+'ed']=_0x50361b!==![],_0x4d1b7f[_0x1dd41d]=_0x3208e4,_0x301c94['hooks'+_0x2b2957(0x709)]++,_0x3208e4;}catch(_0x403ba5){return console[_0x2b2957(0x552)](_0x2b2957(0x602)+_0x2b2957(0x5d7)+_0x2b2957(0x263)+'ook\x20r'+'eg\x20fa'+_0x2b2957(0x47d),_0x1dd41d,_0x403ba5&&_0x403ba5['messa'+'ge']),null;}}var _0x371bd3=()=>![];try{if(window[_0x1de511(0x40d)+_0x1de511(0x3a5)+_0x1de511(0x5e5)]&&!_0x1b1e78[_0x1de511(0x1f0)+'ode']){_0x114ad8=window[_0x1de511(0x40d)+'WebMo'+_0x1de511(0x5e5)][_0x1de511(0x3bc)+_0x1de511(0x23f)+'er'],_0x357bf5=window['Unity'+'WebMo'+'dkit']['Runti'+'me'][_0x1de511(0x301)+'ePlug'+'in']({'name':_0x1de511(0x4b7)+_0x1de511(0x233),'version':_0x5668c5[_0x1de511(0x5d9)],'referencedAssemblies':[_0x5668c5['iyfor']]});if(_0x1b1e78['hookG'+'od'])_0x5668c5['SpefZ'](_0x27052f,_0x1de511(0x4a8),_0x1de511(0x5a1)+'th','Initi'+'ateTa'+_0x1de511(0x1bb)+'lth',[_0x1de511(0x23e),_0x5668c5[_0x1de511(0x62c)]],undefined,_0x371bd3,!!_0x1b1e78['god']);if(_0x1b1e78[_0x1de511(0x264)+'odDie'])_0x27052f(_0x1de511(0x272)+'e',_0x5668c5[_0x1de511(0x703)],_0x5668c5['UJvwB'],[_0x5668c5['yjFpw'],'i32',_0x5668c5[_0x1de511(0x62c)],_0x1de511(0x23e),'i32'],undefined,_0x371bd3,!!_0x1b1e78[_0x1de511(0x4a8)]);if(_0x1b1e78['hookN'+'oReco'+'il'])_0x27052f('noRec'+'oil',_0x1de511(0x17f)+'nPlat'+_0x1de511(0x67b)+_0x1de511(0x55b)+_0x1de511(0x2ae)+_0x1de511(0x364)+_0x1de511(0x678)+'on',_0x1de511(0x3de),[_0x5668c5['yjFpw']],undefined,_0x371bd3,!!_0x1b1e78['noRec'+_0x1de511(0x6c7)]);if(_0x1b1e78[_0x1de511(0x6b6)+_0x1de511(0x64e)+'e'])_0x5668c5['tjGbR'](_0x6b2c31,_0x5668c5['UCXkm'],_0x1de511(0x6d6)+'ter','SetGa'+'meRun'+_0x1de511(0x2c6),[_0x5668c5[_0x1de511(0x62c)],_0x1de511(0x23e)],undefined,(_0x4a1209,_0x591490)=>{var _0x2faf9e=_0x1de511;_0x5668c5[_0x2faf9e(0x21d)](_0x192ffc,_0x529d47,_0x591490,_0x301c94,_0x2faf9e(0x1bd)+'ers');},!![]);if(_0x1b1e78[_0x1de511(0x6b6)+_0x1de511(0x64e)+'e'])_0x6b2c31(_0x1de511(0x533)+'ve',_0x1de511(0x17f)+_0x1de511(0x1e6)+_0x1de511(0x67b)+'.Over'+_0x1de511(0x2ae)+_0x1de511(0x2b8)+_0x1de511(0x3ba),_0x1de511(0x41d)+_0x1de511(0x1c1),[_0x1de511(0x23e)],_0x5668c5[_0x1de511(0x62c)],(_0x532db6,_0xc545e9)=>{var _0x27f3d2=_0x1de511;_0x192ffc(_0x15f698,_0xc545e9,_0x301c94,_0x27f3d2(0x365)+'ents');},!![]);}}catch(_0x53c20d){if(_0x1de511(0x29a)!=='xkEBp'){var _0x3a2c46={'PxENU':function(_0x1fc233,_0x595f6f){return _0x1fc233||_0x595f6f;},'nxhTt':_0x5668c5[_0x1de511(0x400)]};_0x94710d[_0x1de511(0x4d1)](),_0x7760e2[_0x1de511(0x3da)]=_0x5668c5['GOiFe'],_0x59da4b[_0x1de511(0x4bf)+_0x1de511(0x4c2)]=_0x5668c5[_0x1de511(0x381)],_0xa55416[_0x1de511(0x22c)+_0x1de511(0x69d)+'ne']=_0x5668c5[_0x1de511(0x2e9)];var _0x34eb98=-0x139*-0xf+-0x2595+-0x3e2*-0x5,_0x43ea3f=0x1*0x2016+-0x1*0x1daf+-0x3*0xc9,_0x2dc061=(_0x42ff7b,_0xbcea15)=>{var _0x41a775=_0x1de511;_0x3f8bc9[_0x41a775(0x627)+_0x41a775(0x307)]=_0x3a2c46['PxENU'](_0xbcea15,_0x3a2c46['nxhTt']),_0x26a5a5['fillT'+_0x41a775(0x1ab)](_0x42ff7b,_0x43ea3f,_0x34eb98),_0x34eb98+=0x264e+0x5df+-0x2c1d;};_0x2dc061(_0x1de511(0x46f)+'A\x20KOU'+'R\x20v1.'+'1','#ff6b'+'9d');if(_0x4387d6['fps'])_0x5668c5[_0x1de511(0x3fe)](_0x2dc061,_0x5668c5['iLciS'](_0x287471,'\x20FPS'));if(!_0x95831[_0x1de511(0x660)+_0x1de511(0x3a4)])_0x2dc061(_0x1de511(0x637)+_0x1de511(0x24c)+'r\x20gam'+'e…',_0x5668c5[_0x1de511(0x241)]);_0x1da150['resto'+'re']();}else console[_0x1de511(0x552)](_0x1de511(0x602)+_0x1de511(0x5d7)+_0x1de511(0x26a)+_0x1de511(0x67c)+_0x1de511(0x2b3)+_0x1de511(0x643)+':',_0x53c20d&&_0x53c20d[_0x1de511(0x573)+'ge']);}function _0x3ecb13(_0x250a3d,_0x57a2e2){var _0x195029=_0x1de511;if(_0x5668c5[_0x195029(0x64b)](_0x5668c5[_0x195029(0x3b1)],_0x5668c5[_0x195029(0x357)])){var _0x41de7b=_0x4d1b7f[_0x250a3d];if(_0x41de7b)try{if('SWCUq'!=='QRLZe')_0x41de7b[_0x195029(0x5f6)+'ed']=!!_0x57a2e2;else try{var _0x23fcb6=new _0x3676ee(_0x56b5f1)[_0x195029(0x2f5)+'ield'](_0xdbf57b,_0x1dae6d);_0x35263d['set'](_0x515e0d,_0x23fcb6!==_0x2cfc27?_0x23fcb6[_0x195029(0x18a)]():null);}catch(_0x29a57b){_0x518a75['set'](_0x5ec647,null);}}catch(_0x3fbafe){}}else{if(!_0x4949f6||_0x13117a['inclu'+'des'](_0x1040c8)||_0x5668c5[_0x195029(0x5e4)](_0x3f6d1b[_0x195029(0x471)+'h'],0x1f10+0x2005*-0x1+-0x1*-0x135))return;_0x12d60e['push'](_0x559b90);}}_0x5668c5[_0x1de511(0x3ea)](setInterval,()=>{var _0x3baae3=_0x1de511,_0x834789={'TzwBf':_0x5668c5[_0x3baae3(0x2e0)],'cPpYO':function(_0x4b69b5,_0x17501f){return _0x4b69b5+_0x17501f;}};if(!_0x114ad8||!window['unity'+_0x3baae3(0x222)+_0x3baae3(0x318)])return;var _0x268e81=(Number(_0x1b1e78[_0x3baae3(0x68e)+_0x3baae3(0x64a)])||-0x1f6*-0x10+-0x26ad+0x1*0x7b1)/(-0x41a*0x1+0xe1c+0x2*-0x4cf),_0x407853=_0x5668c5[_0x3baae3(0x63c)](Number(_0x1b1e78['jumpP'+'ct'])||0x166e+-0x18*0x7a+0x2*-0x54d,0x2*-0x85+-0x9b4+0xb22),_0x9bbb9d=(_0x5668c5['WAwFS'](Number,_0x1b1e78[_0x3baae3(0x1ea)+_0x3baae3(0x188)])||0xc83*0x2+-0xde7*0x2+0x32c)/(-0xe2c+-0x21e4+-0x1*-0x3074),_0x46b8e9=Math['max'](0x1ca0+-0x1*0x1a9d+-0x202,Number(_0x1b1e78['damag'+_0x3baae3(0x240)+'e'])||0x6*0xc7+-0x211f+0x5cf*0x5),_0x4b3957=_0x268e81!==0x667+-0x1*-0x1227+0xf*-0x1a3||_0x5668c5[_0x3baae3(0x68b)](_0x407853,-0x9*0x3c7+0xe2f+0x13d1)||_0x5668c5[_0x3baae3(0x414)](_0x9bbb9d,-0x1c05+-0x178d*-0x1+0x479)||_0x1b1e78['bhop'],_0x3af114=_0x1b1e78['noSpr'+'ead']||_0x1b1e78[_0x3baae3(0x29d)+_0x3baae3(0x2d4)]||_0x1b1e78['infAm'+_0x3baae3(0x622)]||_0x1b1e78[_0x3baae3(0x47b)+'Exp'];if(!_0x4b3957&&!_0x3af114)return;try{for(var _0x12e2ae=-0x1cfe+0x2fb*0x9+0x22b;_0x12e2ae<_0x15f698[_0x3baae3(0x471)+'h'];_0x12e2ae++){if(_0x3baae3(0x46c)===_0x5668c5[_0x3baae3(0x66f)]){var _0xed1de1=_0x15f698[_0x12e2ae];if(!_0xed1de1)continue;_0x268e81!==0x6a3*0x1+-0x54e+0xaa*-0x2&&(_0x5668c5[_0x3baae3(0x20b)](_0x210525,_0xed1de1,-0x92c*-0x1+0x900+0x481*-0x4,_0x3baae3(0x332),_0x268e81),_0x210525(_0xed1de1,0x38*-0x45+0x940+0x1*0x604,_0x3baae3(0x332),_0x268e81),_0x5668c5[_0x3baae3(0x20b)](_0x210525,_0xed1de1,0x238d+-0x2614+0x2b7,_0x5668c5[_0x3baae3(0x6a7)],_0x268e81),_0x210525(_0xed1de1,0x186+-0x48c+-0x7*-0x76,_0x5668c5[_0x3baae3(0x6a7)],_0x268e81),_0x5668c5[_0x3baae3(0x465)](_0x210525,_0xed1de1,0x1a90+0x1671+0x1*-0x30e5,_0x3baae3(0x332),_0x268e81),_0x210525(_0xed1de1,0x42b+-0x494+0x89,_0x5668c5['myYNQ'],_0x268e81));if(_0x407853!==-0x147+-0x1*0x6a3+0x1*0x7eb)_0x5668c5[_0x3baae3(0x645)](_0x210525,_0xed1de1,-0xe73+-0x2*-0xbf2+-0x1*0x921,_0x5668c5[_0x3baae3(0x6a7)],_0x407853);_0x5668c5[_0x3baae3(0x64b)](_0x9bbb9d,-0x1de1+0x6f6+0x16ec)&&(_0x3baae3(0x58c)!==_0x5668c5[_0x3baae3(0x55a)]?(_0x210525(_0xed1de1,-0xb9d*-0x1+-0x349+0x2*-0x406,_0x3baae3(0x332),_0x9bbb9d),_0x5668c5['lPFNl'](_0x210525,_0xed1de1,0x1*0x11bd+0xd*-0x23e+-0xbb5*-0x1,_0x5668c5['myYNQ'],_0x9bbb9d)):(_0x5668c5['qcOWp'](_0x5b1e94,_0x11628b,-0x1*-0x20da+0x2*-0xc97+0x2*-0x390,_0x3baae3(0x332),-0x165f+0x1*0x10af+-0x7*-0xd0+0.1),_0x5668c5['lPFNl'](_0x2dbdcc,_0x46dec8,0xe06+0xbf4+-0xccd*0x2,_0x3baae3(0x332),0x1*0x25b8+-0x21*-0xf9+-0x45d1+0.1)));if(_0x1b1e78[_0x3baae3(0x42c)])_0x5ce948(_0xed1de1,-0xdf*-0x1b+0x112e+-0xd5d*0x3,_0x5668c5[_0x3baae3(0x6a7)],-(-0x109*0x12+0x63e+0x104b));}else{_0x5668c5[_0x3baae3(0x705)](_0x1dfbaa,_0x3c3960),_0x225837++;var _0x59f642=_0x14af27['now']();_0x59f642-_0x19bed8>=-0xf33*0x2+0x1*-0xd32+0x2d8c&&(_0x29b84b=_0x20d1bf[_0x3baae3(0x2a0)](_0x5668c5[_0x3baae3(0x600)](_0x3820c8*(-0x20a3+0xd5b+0x1730),_0x59f642-_0x2dc72f)),_0x5156b8=-0x73*-0x38+0x1c71+-0x3599,_0x3bdd25=_0x59f642);_0x5668c5['oeKWM'](_0x78698d),_0x5668c5[_0x3baae3(0x6a6)](_0x13c6a2),_0x1bfa14[_0x3baae3(0x540)+_0x3baae3(0x331)](0x2556+-0x9ab+-0x313*0x9,0x2e9+-0x1dcf+-0x16*-0x139,_0x30d922['w'],_0x5e400f['h']);var _0x1fad29={'left':0x0,'top':0x0,'right':_0x1599fe['w'],'bottom':_0x5ec85a['h'],'width':_0x51807f['w'],'height':_0x5d0263['h']};if(_0x4c5bba[_0x3baae3(0x330)+_0x3baae3(0x6fd)])_0x5668c5['gYloF'](_0x3ed5da,_0x1fad29);if(_0xe9a0e8[_0x3baae3(0x4fd)+'rokes'])_0x56bc57(_0x1fad29);_0x5c4726(_0x1fad29);}}}catch(_0x26a8dc){}try{for(var _0x4d52ca=-0x1ec5*0x1+0x5ef+0x18d6;_0x4d52ca<_0x529d47[_0x3baae3(0x471)+'h'];_0x4d52ca++){if(_0x5668c5['jDWcL']!==_0x5668c5[_0x3baae3(0x382)])try{var _0x14d992=new _0x22828c(_0x889bec)['readF'+_0x3baae3(0x635)](_0x3ed6d6,_0x3baae3(0x567));return _0x14d992?_0x14d992[_0x3baae3(0x18a)]():-0x3*0xa11+0x39a*0x1+0x1a99;}catch(_0x3879f9){return 0xa8d*-0x1+-0x182d+0x22ba;}else{var _0x5883b4=_0x5668c5['kDqHN'](_0x1d8ba2,_0x529d47[_0x4d52ca],-0x1d*-0x149+0x23*0xa3+-0x1dab*0x2);if(!_0x5883b4)continue;_0x1b1e78['damag'+_0x3baae3(0x2d4)]&&(_0x5ce948(_0x5883b4,0x1a8a+0x1020+-0x2a5e,_0x3baae3(0x23e),_0x46b8e9),_0x5ce948(_0x5883b4,0x766+0x19b*-0x9+0x761,_0x3baae3(0x23e),_0x46b8e9));_0x1b1e78[_0x3baae3(0x391)+_0x3baae3(0x491)]&&(_0x5668c5['qcOWp'](_0x5ce948,_0x5883b4,-0x1*-0xf56+-0x183f+0x971,_0x5668c5['myYNQ'],0x668*-0x5+-0x1d07+0x3d0f),_0x5668c5[_0x3baae3(0x27b)](_0x5ce948,_0x5883b4,0xb3b+-0x259*-0x10+-0x3063*0x1,_0x5668c5[_0x3baae3(0x6a7)],0x257a+0x1*-0x11e7+-0x1392));if(_0x1b1e78[_0x3baae3(0x42a)+'moExp'])_0x5ce948(_0x5883b4,0x1*0xf97+0x1ab3+-0x29ee,_0x5668c5[_0x3baae3(0x62c)],0x695*0x2+0x8cb*-0x3+-0x2*-0x88f);if(_0x1b1e78[_0x3baae3(0x47b)+_0x3baae3(0x431)]){if(_0x5668c5[_0x3baae3(0x4ab)]===_0x5668c5[_0x3baae3(0x4f1)]){if(_0x1ee4ef['__sak'+_0x3baae3(0x564)])return;_0x25882e[_0x3baae3(0x226)](_0x834789[_0x3baae3(0x23a)]+_0x834789['cPpYO'](_0x157a8a['butto'+'n'],0x4a2+-0x7*-0x101+-0xba8));var _0x116d17=_0x3e435d[_0x502cd8['butto'+'n']+(-0x134+0x390+-0xc9*0x3)];if(_0x116d17){_0x116d17[_0x3baae3(0x174)](_0x8ade0b[_0x3baae3(0x34b)]());if(_0x116d17[_0x3baae3(0x471)+'h']>0x2*0x389+-0x1*-0xdee+-0x14d8)_0x116d17[_0x3baae3(0x4ac)]();}}else _0x5668c5['rBCCI'](_0x210525,_0x5883b4,0xdf*0xf+-0x2a8+0x65*-0x19,_0x3baae3(0x332),0x47*-0x76+0x13f4+0xcc6+0.1),_0x5668c5['djHCi'](_0x5ce948,_0x5883b4,0x649+0x1*-0x14d1+-0x3ba*-0x4,_0x5668c5[_0x3baae3(0x6a7)],0x5*0x5cb+0x36+-0xb*0x2a7+0.1);}}}}catch(_0x508379){}},0x1*0x1f85+-0x27a+-0x1c43),_0x5668c5[_0x1de511(0x624)](setInterval,()=>{var _0x5ea91a=_0x1de511,_0x126a9d={'Mihdp':function(_0x4d95b1,_0xd544fc,_0x23bc40,_0x372147,_0x519da7){return _0x4d95b1(_0xd544fc,_0x23bc40,_0x372147,_0x519da7);},'nOcYi':'f32'};if(_0x5668c5[_0x5ea91a(0x68b)](_0x5ea91a(0x199),_0x5668c5['lseHb']))_0x126a9d[_0x5ea91a(0x594)](_0x8be321,_0x329fed,0x11a*0xd+0x15c3+-0x23cd,_0x126a9d[_0x5ea91a(0x5a2)],_0x47c8f9),_0x314cdf(_0x18305e,0x6d*0x4c+-0x6bb+-0x1955,_0x5ea91a(0x332),_0x45168f);else{_0x301c94[_0x5ea91a(0x660)+'oaded']=!!window[_0x5ea91a(0x5ac)+'Insta'+'nce'];try{var _0x2a5529=-0x177e+0x6e8+0x1096*0x1;for(var _0x1231f2 in _0x4d1b7f){if(_0x4d1b7f[_0x1231f2]&&_0x4d1b7f[_0x1231f2]['appli'+'ed'])_0x2a5529++;}_0x301c94[_0x5ea91a(0x191)+'Ok']=_0x2a5529;}catch(_0x2f7122){}}},-0xaa*0x2b+-0x67*0xb+0x1f1*0x13);var _0x437fbf=new Set(),_0x1ed708={0x1:[],0x3:[]},_0x1906c3=![];function _0x366b72(_0x4bccd2){var _0x4e7817=_0x1de511;_0x437fbf[_0x4e7817(0x226)](_0x4bccd2['code']);}function _0x45c1bc(_0x26c260){var _0x1a9711=_0x1de511;_0x5668c5[_0x1a9711(0x438)]!==_0x1a9711(0x5b6)?(_0x3ce71f['class'+'List']['toggl'+'e']('on',_0x1aa871),_0xcf445a(_0x515c60)):_0x437fbf[_0x1a9711(0x509)+'e'](_0x26c260['code']);}function _0x1fec0e(_0x20886a){var _0x2aea07=_0x1de511;if(_0x20886a[_0x2aea07(0x5b1)+'ura'])return;_0x437fbf[_0x2aea07(0x226)](_0x5668c5[_0x2aea07(0x670)](_0x5668c5['VGATO'],_0x20886a[_0x2aea07(0x722)+'n']+(0x7*-0xb4+-0x183+0x1*0x670)));var _0x15ccd0=_0x1ed708[_0x20886a[_0x2aea07(0x722)+'n']+(-0x5*-0x4b9+-0x2ae*0xa+0x330)];if(_0x15ccd0){if(_0x5668c5['OHlRs']!=='jeIDJ'){_0x15ccd0[_0x2aea07(0x174)](performance[_0x2aea07(0x34b)]());if(_0x15ccd0['lengt'+'h']>0x2100+0x207d*0x1+0x29d*-0x19)_0x15ccd0[_0x2aea07(0x4ac)]();}else _0x31b813[_0x2aea07(0x42a)+_0x2aea07(0x622)]=_0x57db02,_0x4b2428();}}function _0x25c588(_0x592c74){var _0x338b5f=_0x1de511;if('bQEjz'!==_0x5668c5[_0x338b5f(0x1b8)]){if(!_0x592c74[_0x338b5f(0x5b1)+_0x338b5f(0x564)])_0x437fbf[_0x338b5f(0x509)+'e'](_0x5668c5['RAVhB']('mouse',_0x592c74[_0x338b5f(0x722)+'n']+(0x11a0+0x5*-0x356+-0xf1)));}else try{new _0x7f57cc(_0x53fdf1)['write'+_0x338b5f(0x592)](_0x1fac2b,_0x3e9153,_0x1acc2b);}catch(_0x5b33a4){}}function _0xe98799(){_0x437fbf['clear']();}function _0xbaa06d(){var _0x5c75f5=_0x1de511;if(_0x1906c3)return;_0x1906c3=!![],window[_0x5c75f5(0x384)+'entLi'+_0x5c75f5(0x63a)+'r'](_0x5c75f5(0x197)+'wn',_0x366b72,!![]),window[_0x5c75f5(0x384)+'entLi'+_0x5c75f5(0x63a)+'r'](_0x5668c5['jZHcJ'],_0x45c1bc,!![]),window['addEv'+_0x5c75f5(0x18e)+_0x5c75f5(0x63a)+'r'](_0x5668c5['ENcTc'],_0x1fec0e,!![]),window['addEv'+'entLi'+_0x5c75f5(0x63a)+'r'](_0x5668c5[_0x5c75f5(0x3df)],_0x25c588,!![]),window['addEv'+_0x5c75f5(0x18e)+_0x5c75f5(0x63a)+'r'](_0x5668c5[_0x5c75f5(0x248)],_0xe98799);}function _0x7e1563(_0x192b67){var _0x1b3059=_0x1de511,_0x4fe2c9=_0x1ed708[_0x192b67]||[],_0x5538c8=performance[_0x1b3059(0x34b)]();while(_0x4fe2c9[_0x1b3059(0x471)+'h']&&_0x5668c5[_0x1b3059(0x6b2)](_0x5668c5[_0x1b3059(0x6c4)](_0x5538c8,_0x4fe2c9[0xba9+-0x4*0x169+-0x1*0x605]),-0x1157+0x2*0x48a+0xc2b))_0x4fe2c9[_0x1b3059(0x4ac)]();return _0x4fe2c9[_0x1b3059(0x471)+'h'];}function _0x37ed5b(_0x12c258){var _0x43615b=_0x1de511;if(document[_0x43615b(0x449)]&&(document['ready'+'State']===_0x5668c5[_0x43615b(0x213)]||_0x5668c5[_0x43615b(0x38f)](document[_0x43615b(0x34a)+_0x43615b(0x244)],_0x5668c5[_0x43615b(0x5ae)])))_0x5668c5[_0x43615b(0x6a6)](_0x12c258);else document['addEv'+_0x43615b(0x18e)+_0x43615b(0x63a)+'r']('DOMCo'+'ntent'+_0x43615b(0x720)+'d',_0x12c258,{'once':!![]});}_0x37ed5b(()=>{var _0x9225d4=_0x1de511,_0x4f19d2={'GNKzH':_0x5668c5[_0x9225d4(0x182)],'GYSeC':function(_0x4a3495,_0x57aece){return _0x4a3495===_0x57aece;},'lFUXc':'fulls'+_0x9225d4(0x1d3)+_0x9225d4(0x430)+'s','DEgVv':function(_0x2de911,_0x5c60ed){var _0x1ba9ac=_0x9225d4;return _0x5668c5[_0x1ba9ac(0x68b)](_0x2de911,_0x5c60ed);},'vgxaH':_0x5668c5[_0x9225d4(0x711)],'tKRPO':_0x5668c5[_0x9225d4(0x31c)],'yKqgz':'#fff','DXrGk':_0x9225d4(0x715)+'r','wiMsi':function(_0xb4a9f4,_0x423f2d){var _0x538ec2=_0x9225d4;return _0x5668c5[_0x538ec2(0x577)](_0xb4a9f4,_0x423f2d);},'CPlFZ':_0x5668c5[_0x9225d4(0x1de)],'aWkLv':function(_0x393094,_0x3db186){return _0x393094+_0x3db186;},'fUfQK':function(_0x1350c8,_0x372924){return _0x1350c8/_0x372924;},'eWqiA':function(_0x14fce2,_0x339dcc){return _0x14fce2*_0x339dcc;},'aTieJ':_0x5668c5['MswqA'],'qxoIg':_0x5668c5[_0x9225d4(0x51c)],'tXIos':function(_0x365ead,_0x5e86b5){var _0x4cca0a=_0x9225d4;return _0x5668c5[_0x4cca0a(0x3fe)](_0x365ead,_0x5e86b5);},'lmEsG':function(_0x2da79f,_0x416773){return _0x5668c5['iXnet'](_0x2da79f,_0x416773);},'tGIBe':function(_0x44460f,_0x45c03c){return _0x44460f-_0x45c03c;},'AdLYM':function(_0x3ed3fe,_0x519c2b){return _0x3ed3fe-_0x519c2b;},'suZvN':_0x5668c5['oTTRN'],'jIrEE':function(_0x528b53,_0x3e0d15){return _0x528b53+_0x3e0d15;},'KkwPw':function(_0x58a150,_0xeddc15){return _0x58a150+_0xeddc15;},'nHNHl':function(_0x3d43f2,_0x36d164){var _0x1c63a9=_0x9225d4;return _0x5668c5[_0x1c63a9(0x1e5)](_0x3d43f2,_0x36d164);},'bOgWw':function(_0x34d506,_0x38ec33){var _0x496d13=_0x9225d4;return _0x5668c5[_0x496d13(0x2ce)](_0x34d506,_0x38ec33);},'aqGNP':_0x9225d4(0x4c9),'pEzqy':function(_0x544409,_0x47e5f7){return _0x5668c5['gYloF'](_0x544409,_0x47e5f7);},'ceJUS':_0x9225d4(0x192),'mzQTC':function(_0x1ae2c0,_0x26b4ab,_0x52cae9,_0x2c4873,_0xc07312,_0x5df83b,_0x3e06d0,_0x40961e){return _0x1ae2c0(_0x26b4ab,_0x52cae9,_0x2c4873,_0xc07312,_0x5df83b,_0x3e06d0,_0x40961e);},'SPPnQ':function(_0x244425,_0x26c8de,_0x30f75b,_0x335563,_0x5bc840,_0x4da016,_0x4f4fe1){return _0x244425(_0x26c8de,_0x30f75b,_0x335563,_0x5bc840,_0x4da016,_0x4f4fe1);},'cTGRG':function(_0x57f30a,_0x117c3c){var _0x57e064=_0x9225d4;return _0x5668c5[_0x57e064(0x374)](_0x57f30a,_0x117c3c);},'QPWTF':'jydBU','mOYZx':function(_0x29bdff){return _0x29bdff();},'vEacs':_0x5668c5['mTIRW'],'gKijt':_0x5668c5['gGoQm'],'UgUoY':_0x5668c5[_0x9225d4(0x5c0)],'AmYQh':function(_0x3f7882,_0x580d7c){return _0x3f7882(_0x580d7c);},'bDOfG':_0x9225d4(0x1c3),'LLtIJ':_0x5668c5[_0x9225d4(0x394)],'iqXlx':_0x5668c5[_0x9225d4(0x473)],'Bwngl':_0x5668c5[_0x9225d4(0x22f)],'JniFy':function(_0x36197d,_0x48a619){return _0x36197d-_0x48a619;},'IcnNp':function(_0xdf5704,_0xb5fe22){return _0xdf5704<_0xb5fe22;},'UTpYo':_0x9225d4(0x5fc),'bsLgu':_0x9225d4(0x6cf),'PfJtJ':'Unity'+_0x9225d4(0x3b8)+'e.App'+'licat'+'ion','UIeau':_0x5668c5['vwdZZ'],'NvKsZ':function(_0x1202e4,_0x343f0a,_0x298daa){return _0x1202e4(_0x343f0a,_0x298daa);},'wAKhf':_0x9225d4(0x1e8)+'up','qAUJx':_0x5668c5[_0x9225d4(0x248)],'YaBtC':'keyup','TDfAx':'shoot'+'ers','omJJh':function(_0x3a152b){return _0x5668c5['mkQIm'](_0x3a152b);},'VKxKJ':'Adblo'+'ck','jlbvB':_0x5668c5[_0x9225d4(0x595)],'Lyfjh':_0x5668c5[_0x9225d4(0x499)],'OqIcU':function(_0x11a299){return _0x5668c5['LepBi'](_0x11a299);},'ENIjh':_0x5668c5[_0x9225d4(0x6c5)],'OtYys':_0x9225d4(0x5e8),'wjyHw':_0x9225d4(0x39c),'QzHmY':_0x9225d4(0x295),'dJMgi':function(_0x4ae2ef,_0x185b71){return _0x4ae2ef*_0x185b71;},'XjANe':_0x9225d4(0x2c7)+'ody','oMmOD':_0x9225d4(0x4b9)+'t','kwkZf':function(_0x3e05d9,_0x484b62){return _0x5668c5['hkwBp'](_0x3e05d9,_0x484b62);},'scXwd':_0x5668c5[_0x9225d4(0x5cd)],'xuXrr':function(_0x156d2b,_0x3737d5,_0xe96966,_0x379fc1,_0x1316be,_0x39db51){return _0x5668c5['aSvwW'](_0x156d2b,_0x3737d5,_0xe96966,_0x379fc1,_0x1316be,_0x39db51);},'FSxSh':_0x9225d4(0x358)+_0x9225d4(0x1f8),'PQjBI':function(_0x54af19,_0xd2b9b2,_0x3b06b8,_0x552bee,_0x179a07,_0x59aacd){return _0x5668c5['KIrmc'](_0x54af19,_0xd2b9b2,_0x3b06b8,_0x552bee,_0x179a07,_0x59aacd);},'DPXXQ':'Rapid'+_0x9225d4(0x70a)+'\x20[EXP'+']','vPHXU':function(_0x20e845,_0x1e1faa,_0x2ab5ae,_0x2bfc04){return _0x5668c5['dARUz'](_0x20e845,_0x1e1faa,_0x2ab5ae,_0x2bfc04);},'Hhifx':_0x9225d4(0x3e9)+'e\x20val'+'ue','qrhvq':function(_0x1b7cdc,_0x324c54,_0x42ed49,_0x487ca3,_0xecc4e5,_0xafb8a6){return _0x1b7cdc(_0x324c54,_0x42ed49,_0x487ca3,_0xecc4e5,_0xafb8a6);},'SeIJL':'Infin'+_0x9225d4(0x5a7)+_0x9225d4(0x2f8)+_0x9225d4(0x4bc),'uIxOE':'Refil'+_0x9225d4(0x669)+_0x9225d4(0x451)+_0x9225d4(0x6e6)+_0x9225d4(0x606)+_0x9225d4(0x4d9)+_0x9225d4(0x1c0)+_0x9225d4(0x385)+'every'+_0x9225d4(0x32d)+'s.','jBABR':function(_0x36a879,_0x156f9d){var _0x4fc5c5=_0x9225d4;return _0x5668c5[_0x4fc5c5(0x699)](_0x36a879,_0x156f9d);},'ikLIp':_0x9225d4(0x490),'uCZNr':_0x5668c5['ENrIQ'],'OxIqh':'100\x20='+'\x20defa'+'ult','ZSmcE':_0x5668c5['qzufz'],'BNxhW':function(_0x45db07,_0xb72af){return _0x45db07!==_0xb72af;},'qfFiS':function(_0x3c02a7,_0x2dadb5,_0x44aa68,_0x120843){return _0x3c02a7(_0x2dadb5,_0x44aa68,_0x120843);},'zxpCm':_0x9225d4(0x2a6)+_0x9225d4(0x6f6)+'oaty','DBCxQ':function(_0x10758b,_0x237de7,_0x3105fa,_0x1b4039,_0x2ad2b1,_0x1457ef){return _0x10758b(_0x237de7,_0x3105fa,_0x1b4039,_0x2ad2b1,_0x1457ef);},'FPLIL':_0x9225d4(0x3dc),'dIuNv':'Botto'+_0x9225d4(0x56f)+'ht','kKfFm':_0x5668c5['qhUGW'],'NHavB':function(_0x532d54,_0x355f77,_0x5e1276,_0x1daf37){return _0x5668c5['dARUz'](_0x532d54,_0x355f77,_0x5e1276,_0x1daf37);},'YMlPu':function(_0x2bd2d9,_0x17ca26,_0x57545b,_0x18b381,_0x5da800,_0x3c7798){return _0x2bd2d9(_0x17ca26,_0x57545b,_0x18b381,_0x5da800,_0x3c7798);},'fxVXK':function(_0x5bae24,_0xa7d5a7,_0x42b806,_0x421914){var _0x162a9f=_0x9225d4;return _0x5668c5[_0x162a9f(0x31a)](_0x5bae24,_0xa7d5a7,_0x42b806,_0x421914);},'tqKia':_0x5668c5[_0x9225d4(0x6d8)],'Tdlno':function(_0xb0b50c,_0x45e136,_0x5c61f7,_0x59a86e,_0x3fffc6,_0x3658b4){return _0xb0b50c(_0x45e136,_0x5c61f7,_0x59a86e,_0x3fffc6,_0x3658b4);},'vVSfn':_0x9225d4(0x496),'SXzqt':function(_0x5a9e69,_0x3f08d9,_0x23c15f){return _0x5a9e69(_0x3f08d9,_0x23c15f);},'pVdoH':function(_0x23b1a7,_0x18c292){return _0x23b1a7(_0x18c292);},'xMcOp':'Skips'+'\x20UWMK'+_0x9225d4(0x242)+'rely\x20'+_0x9225d4(0x30f)+'WASM\x20'+'hooks'+_0x9225d4(0x3b2)+_0x9225d4(0x420)+_0x9225d4(0x5ff)+_0x9225d4(0x64d)+_0x9225d4(0x2a5)+'\x27t\x20st'+_0x9225d4(0x28a),'bekxG':function(_0x2fd49e,_0x2bceb6){var _0x4c2e54=_0x9225d4;return _0x5668c5[_0x4c2e54(0x355)](_0x2fd49e,_0x2bceb6);},'NqSfP':'Appli'+_0x9225d4(0x60d)+_0x9225d4(0x347)+_0x9225d4(0x615)+_0x9225d4(0x43c)+_0x9225d4(0x612)+_0x9225d4(0x362)+_0x9225d4(0x5df)+'fe\x20mo'+_0x9225d4(0x3c0)+_0x9225d4(0x6f3)+_0x9225d4(0x360)+_0x9225d4(0x22a)+'ok-re'+_0x9225d4(0x302)+_0x9225d4(0x48a)+_0x9225d4(0x4cc)+_0x9225d4(0x379)+_0x9225d4(0x191)+_0x9225d4(0x1ed)+'ied\x20c'+_0x9225d4(0x383),'uuwVv':_0x5668c5[_0x9225d4(0x232)],'YPyAl':_0x9225d4(0x275)+_0x9225d4(0x60d)+'\x20relo'+_0x9225d4(0x2bd),'EbmrZ':_0x5668c5[_0x9225d4(0x501)],'VlmEh':function(_0x2c80be,_0x501121,_0x298ac6,_0x53f54c){return _0x2c80be(_0x501121,_0x298ac6,_0x53f54c);},'jVhgH':function(_0xa1cae5,_0xec3a39,_0x4ec6a8){return _0xa1cae5(_0xec3a39,_0x4ec6a8);},'uOFgm':_0x9225d4(0x5b9)+_0x9225d4(0x376)+_0x9225d4(0x25f)+_0x9225d4(0x1e7)+_0x9225d4(0x2a9)+_0x9225d4(0x372)+_0x9225d4(0x293)+_0x9225d4(0x5ef)+_0x9225d4(0x71f)+_0x9225d4(0x1b4)+_0x9225d4(0x38a)+_0x9225d4(0x6ed)+_0x9225d4(0x320)+_0x9225d4(0x5b7),'gKgVR':'Dange'+'r','lSAHk':'These'+_0x9225d4(0x500)+'e\x20ser'+_0x9225d4(0x3d3)+_0x9225d4(0x28d)+'e\x20tra'+_0x9225d4(0x46a),'jiurQ':_0x9225d4(0x6aa)+_0x9225d4(0x618)+'tting'+'s','ehiaY':_0x9225d4(0x5b3),'lsOVL':function(_0x579dc5){return _0x579dc5();},'rFCln':function(_0x30904e,_0x8539d){return _0x30904e(_0x8539d);},'QTduR':_0x5668c5['MpiQZ'],'wtvzw':_0x5668c5['kMmTM'],'cneKE':_0x9225d4(0x6a8)+'ateTa'+_0x9225d4(0x1bb)+_0x9225d4(0x4d0),'cEnQS':_0x9225d4(0x23e),'CLNnX':_0x5668c5[_0x9225d4(0x5d9)],'RNLCL':_0x5668c5[_0x9225d4(0x543)],'BWesh':'SetGa'+_0x9225d4(0x52a)+'ning','WZvIp':_0x5668c5[_0x9225d4(0x228)],'EoHda':_0x9225d4(0x5a1)+'th','bcXUp':function(_0x3bd0b0,_0x125cd1){return _0x5668c5['VwNOU'](_0x3bd0b0,_0x125cd1);},'ynXCj':_0x5668c5[_0x9225d4(0x2e4)],'FFLpO':function(_0x4cb796){return _0x4cb796();}};if(_0x1b1e78['adblo'+'ck']){if(_0x5668c5['nPYYd'](_0x9225d4(0x4e0),_0x5668c5['xBehF'])){var _0x8d349a={'oTOGB':_0x4f19d2['GNKzH']};_0x2d9d61['addEv'+'entLi'+_0x9225d4(0x63a)+'r'](_0x9225d4(0x1d6),_0x2d4b92=>{var _0x364988=_0x9225d4;try{var _0x3fd14b=_0x2d4b92&&(_0x2d4b92['messa'+'ge']||_0x2d4b92[_0x364988(0x1d6)]&&_0x2d4b92['error'][_0x364988(0x573)+'ge'])||_0x364988(0x2d6)+'wn';if(_0x2d4b92&&_0x2d4b92[_0x364988(0x4d3)+_0x364988(0x2ad)])_0x3fd14b+=_0x8d349a['oTOGB']+_0x525025(_0x2d4b92[_0x364988(0x4d3)+_0x364988(0x2ad)])[_0x364988(0x603)]('/')[_0x364988(0x387)]()+':'+(_0x2d4b92[_0x364988(0x6a0)+'o']||'?');_0x157977[_0x364988(0x34e)+_0x364988(0x18d)]=_0x4116b6(_0x3fd14b)['slice'](0x1*0xd33+-0x351*-0x2+0x13d5*-0x1,-0xdf3*-0x2+0x35*-0xbc+0x5d3*0x2);}catch(_0x570664){}});}else setInterval(()=>{var _0x24dd35=_0x9225d4;try{for(var _0x5a8248 of[_0x24dd35(0x19a)+'io_30'+'0x250'+_0x24dd35(0x6b5)+'nt',_0x24dd35(0x19a)+'io_72'+_0x24dd35(0x34f)+_0x24dd35(0x325)+'t',_0x24dd35(0x19a)+_0x24dd35(0x1c8)+_0x24dd35(0x54e)+_0x24dd35(0x6b5)+'nt','fulls'+'creen'+_0x24dd35(0x430)+'s']){var _0x4e7102=document[_0x24dd35(0x470)+'ement'+_0x24dd35(0x32c)](_0x5a8248);if(_0x4e7102&&_0x4f19d2['GYSeC'](_0x5a8248,_0x4f19d2[_0x24dd35(0x5a8)])){if(_0x4f19d2[_0x24dd35(0x536)](_0x24dd35(0x25b),_0x4f19d2[_0x24dd35(0x580)])){var _0x98b213=new _0x50bfd2(_0x18442f)[_0x24dd35(0x2f5)+'ield'](_0x158e7f,'u32');return _0x98b213?_0x98b213['val']():-0x1bfb+-0x11d5+0x2dd*0x10;}else{var _0x325043=_0x4e7102['child'+'ren'];for(var _0x660e2a=-0x31b*-0x3+-0x24dd+0x2b*0xa4;_0x660e2a<_0x325043[_0x24dd35(0x471)+'h'];_0x660e2a++){if(_0x325043[_0x660e2a]['id']&&_0x4f19d2[_0x24dd35(0x662)](_0x325043[_0x660e2a]['id']['index'+'Of']('kour-'+_0x24dd35(0x6f1)),0x1245+-0x9f7*-0x1+-0x1c3c))_0x325043[_0x660e2a]['style']['displ'+'ay']='none';}}}else{if(_0x4e7102)_0x4e7102['style'][_0x24dd35(0x65b)+'ay']='none';}}}catch(_0x599ca9){}},0xfb3+0x3d*-0x3b+-0x2*-0x316);}var _0x573865=document['creat'+_0x9225d4(0x46d)+_0x9225d4(0x3ba)]('canva'+'s');_0x573865[_0x9225d4(0x25d)][_0x9225d4(0x1cf)+'xt']='posit'+'ion:f'+_0x9225d4(0x619)+_0x9225d4(0x298)+':0;wi'+'dth:1'+_0x9225d4(0x26c)+'heigh'+_0x9225d4(0x249)+_0x9225d4(0x396)+'index'+_0x9225d4(0x68d)+_0x9225d4(0x208)+'6;poi'+_0x9225d4(0x54b)+'event'+_0x9225d4(0x718)+'e';var _0x40df3c=_0x573865[_0x9225d4(0x283)+_0x9225d4(0x658)]('2d');function _0x260e4b(){var _0x5d2b9d=_0x9225d4;try{var _0x723ecb=document[_0x5d2b9d(0x4f6)+'creen'+_0x5d2b9d(0x5bf)+'nt'],_0x103f5d=_0x723ecb&&_0x4f19d2['DEgVv'](_0x723ecb[_0x5d2b9d(0x2d5)+'me'],'CANVA'+'S')?_0x723ecb:document['body']||document['docum'+_0x5d2b9d(0x4d5)+_0x5d2b9d(0x71b)];if(_0x573865[_0x5d2b9d(0x325)+'tNode']!==_0x103f5d)_0x103f5d[_0x5d2b9d(0x6a9)+'dChil'+'d'](_0x573865);}catch(_0x1a291b){try{document[_0x5d2b9d(0x449)][_0x5d2b9d(0x6a9)+_0x5d2b9d(0x36a)+'d'](_0x573865);}catch(_0x34b994){}}}var _0x1e5dd9={'w':0x0,'h':0x0,'dpr':0x0};function _0x36d710(){var _0x3166b6=_0x9225d4,_0x44bea7=window[_0x3166b6(0x3a6)+'ePixe'+_0x3166b6(0x3fa)+'o']||-0x10*-0x1f5+-0x7f7+-0x24*0xa6,_0x5d4d79=window['inner'+'Width'],_0xb8458c=window[_0x3166b6(0x3b7)+_0x3166b6(0x690)+'t'];if(_0x5d4d79===_0x1e5dd9['w']&&_0xb8458c===_0x1e5dd9['h']&&_0x44bea7===_0x1e5dd9['dpr'])return;_0x1e5dd9['w']=_0x5d4d79,_0x1e5dd9['h']=_0xb8458c,_0x1e5dd9['dpr']=_0x44bea7,_0x573865[_0x3166b6(0x639)]=Math[_0x3166b6(0x2a0)](_0x5d4d79*_0x44bea7),_0x573865[_0x3166b6(0x33f)+'t']=Math['round'](_0xb8458c*_0x44bea7),_0x40df3c['setTr'+_0x3166b6(0x4b4)+'rm'](_0x44bea7,0x1*0x1d15+-0x47*0x38+0x1*-0xd8d,0x2b*0xa4+0x1*-0xb5d+-0x102f,_0x44bea7,-0xa12+-0x4ff*0x4+-0x1*-0x1e0e,-0xc12+-0x1fd9+-0x1*-0x2beb);}var _0x4f54ff=0x134b+0xb*-0xe3+-0x98a,_0x59f685=performance[_0x9225d4(0x34b)](),_0x3703ff=0x4ce+-0x306+-0xe4*0x2;function _0x1a2c1d(_0x3c11fc){var _0x471819=_0x9225d4,_0x284449=_0x4f19d2[_0x471819(0x3ed)](Number,_0x1b1e78[_0x471819(0x235)+'le'])||-0x406+-0x132e+-0x1c9*-0xd,_0x97e2d8=(0xc*0x17+-0x178d*-0x1+0x1*-0x187f)*_0x284449,_0x4ef9e4=(-0x3*0x4e9+0x187d+0x2*-0x4df)*_0x284449,_0x22ab3b=_0x4f19d2['wiMsi'](_0x97e2d8*(0x1*0x1c27+0xd10+-0x2934),_0x4ef9e4*(0x6ad*-0x1+0xd*-0xbb+0x102e)),_0x4cd993=_0x4f19d2[_0x471819(0x24a)](_0x97e2d8,0x64a+0x1e0b+0x1*-0x2452)+_0x4f19d2['eWqiA'](_0x4ef9e4,-0x116*-0x19+-0x1914+-0x8*0x42),_0x26e788=_0x1b1e78[_0x471819(0x682)],_0x569017=_0x26e788==='br'?_0x4f19d2['tGIBe'](_0x4f19d2['tGIBe'](_0x3c11fc[_0x471819(0x673)],-0x1*0xbb+-0xb*0x92+0x711),_0x22ab3b):_0x4f19d2[_0x471819(0x2cc)](_0x3c11fc['left'],-0xc1*-0x23+0x1a8a+-0x34dd),_0x3e7fa9=_0x26e788==='ml'?_0x3c11fc[_0x471819(0x236)]+_0x3c11fc['heigh'+'t']/(0x2*0xc95+-0x8f*0x5+0x5*-0x479)-_0x4f19d2[_0x471819(0x5bc)](_0x4cd993,-0x5*-0x177+0x2*0x112d+-0x29ab*0x1):_0x4f19d2[_0x471819(0x642)](_0x3c11fc['botto'+'m']-_0x4cd993,_0x26e788==='bl'?0x1*0x2504+-0x82f*-0x1+-0x2cd3*0x1:-0xbb2+-0xb*0x24+0xdd4),_0xea3389=(_0x35fbf2,_0x2071ce,_0x3053d8,_0x8d39b,_0x3ea7f9,_0x5e2668,_0xec02ca)=>{var _0x13a07c=_0x471819,_0x872307={'BkQsR':function(_0x5c832f,_0x5605fe){return _0x5c832f*_0x5605fe;},'GeSBY':function(_0x247a37,_0x2d72cc){return _0x247a37-_0x2d72cc;},'NXGRX':'range','gukrE':'sk-sl'+_0x13a07c(0x582),'opehd':'sk-va'+'l','Heezg':function(_0x5572c0,_0x354399){return _0x5572c0(_0x354399);}};if('JXsig'===_0x4f19d2['tKRPO']){var _0x1013ef=('15|12'+_0x13a07c(0x6b1)+_0x13a07c(0x369)+'3|3|2'+_0x13a07c(0x1dd)+_0x13a07c(0x2ff)+'11|10'+'|7|14')[_0x13a07c(0x603)]('|'),_0x387b81=-0x17*0x25+-0x2c+0x37f;while(!![]){switch(_0x1013ef[_0x387b81++]){case'0':_0x40df3c['fillS'+_0x13a07c(0x307)]=_0x1c9cc1?_0x4f19d2[_0x13a07c(0x2f9)]:_0x13a07c(0x324)+_0x13a07c(0x6c9)+_0x13a07c(0x417)+_0x13a07c(0x5ce)+')';continue;case'1':_0x40df3c[_0x13a07c(0x627)+'tyle']=_0x1c9cc1?'rgba('+_0x13a07c(0x5b4)+_0x13a07c(0x67f)+_0x13a07c(0x315)+'5)':_0x13a07c(0x324)+_0x13a07c(0x3d6)+'16,0.'+'7)';continue;case'2':_0x40df3c[_0x13a07c(0x368)+'e']();continue;case'3':_0x40df3c[_0x13a07c(0x368)+_0x13a07c(0x31f)+'e']=_0x1c9cc1?_0x49dee0:_0x13a07c(0x324)+'255,1'+'07,15'+_0x13a07c(0x239)+'5)';continue;case'4':_0x40df3c['textA'+'lign']=_0x4f19d2[_0x13a07c(0x25a)];continue;case'5':_0x1c9cc1&&(_0x40df3c[_0x13a07c(0x2b7)+'wColo'+'r']=_0x5c56ef,_0x40df3c[_0x13a07c(0x2b7)+'wBlur']=-0x2*-0xe88+-0x142+0x30*-0x94,_0x40df3c[_0x13a07c(0x56d)](),_0x40df3c[_0x13a07c(0x2b7)+_0x13a07c(0x243)]=-0x164*0x6+0x350+0x508);continue;case'6':_0x40df3c[_0x13a07c(0x56d)]();continue;case'7':_0xec02ca&&(_0x40df3c[_0x13a07c(0x3da)]=_0x4f19d2[_0x13a07c(0x2cc)](_0x4f19d2['CPlFZ'],Math[_0x13a07c(0x2a0)]((-0x7*-0x35f+0x2626+-0x3db6)*_0x284449))+('px\x20ui'+_0x13a07c(0x390)+_0x13a07c(0x4cf)+'f,sys'+'tem-u'+_0x13a07c(0x629)+_0x13a07c(0x1e4)+'if'),_0x40df3c['fillS'+_0x13a07c(0x307)]=_0x1c9cc1?_0x4f19d2[_0x13a07c(0x2f9)]:_0x13a07c(0x324)+_0x13a07c(0x6c9)+'35,24'+_0x13a07c(0x6ab)+'5)',_0x40df3c['fillT'+_0x13a07c(0x1ab)](_0xec02ca,_0x3053d8+_0x3ea7f9/(0x1afb+0x60a+0x9*-0x3ab),_0x4f19d2['wiMsi'](_0x8d39b+_0x5e2668/(0xe7b*0x1+0x4a8*-0x1+-0x1*0x9d1),(-0x1213+0xf01+0x31a)*_0x284449)));continue;case'8':if(_0x40df3c['round'+_0x13a07c(0x331)])_0x40df3c[_0x13a07c(0x2a0)+'Rect'](_0x3053d8,_0x8d39b,_0x3ea7f9,_0x5e2668,(0x2*-0xa3d+-0x1*-0xc9+0x13b8)*_0x284449);else _0x40df3c[_0x13a07c(0x6fb)](_0x3053d8,_0x8d39b,_0x3ea7f9,_0x5e2668);continue;case'9':_0x40df3c[_0x13a07c(0x557)+'Path']();continue;case'10':_0x40df3c[_0x13a07c(0x2ea)+'ext'](_0x35fbf2,_0x4f19d2[_0x13a07c(0x2cc)](_0x3053d8,_0x3ea7f9/(-0xd9*-0x16+0x19*0xad+-0x2389)),_0x4f19d2[_0x13a07c(0x72b)](_0x8d39b,_0x4f19d2['fUfQK'](_0x5e2668,0x147d*0x1+0x95*0xa+-0x1a4d))-(_0xec02ca?(-0x1d2+0x65e+-0x1*0x487)*_0x284449:0x389+-0xef5+-0x56*-0x22));continue;case'11':_0x40df3c[_0x13a07c(0x3da)]=_0x4f19d2[_0x13a07c(0x72b)](_0x13a07c(0x548),Math[_0x13a07c(0x2a0)](_0x4f19d2['eWqiA'](0x1b08+-0x8cd+0x85*-0x23,_0x284449)))+_0x4f19d2[_0x13a07c(0x277)];continue;case'12':_0x40df3c[_0x13a07c(0x4d1)]();continue;case'13':_0x40df3c[_0x13a07c(0x1c9)+'idth']=0x2c3*0x3+0x2e*0xad+-0x275e;continue;case'14':_0x40df3c['resto'+'re']();continue;case'15':var _0x1c9cc1=_0x437fbf[_0x13a07c(0x196)](_0x2071ce);continue;case'16':_0x40df3c[_0x13a07c(0x22c)+'aseli'+'ne']=_0x4f19d2['qxoIg'];continue;}break;}}else{var _0x507846=_0x5f2283[_0x13a07c(0x301)+_0x13a07c(0x46d)+_0x13a07c(0x3ba)]('div');_0x507846[_0x13a07c(0x345)+'Name']=_0x13a07c(0x1bc)+_0x13a07c(0x245);var _0x5c16ce=_0x5c25d6[_0x13a07c(0x301)+_0x13a07c(0x46d)+_0x13a07c(0x3ba)](_0x13a07c(0x1c3));_0x5c16ce[_0x13a07c(0x58d)]=_0x872307['NXGRX'],_0x5c16ce['class'+_0x13a07c(0x40b)]=_0x872307[_0x13a07c(0x62a)],_0x5c16ce[_0x13a07c(0x3db)]=_0x5be9c3,_0x5c16ce[_0x13a07c(0x463)]=_0x19c583,_0x5c16ce['step']=_0x5b3ca1,_0x5c16ce[_0x13a07c(0x2ab)]=_0x181fa0;var _0x1a1a26=_0x50f821['creat'+_0x13a07c(0x46d)+'ent']('span');_0x1a1a26[_0x13a07c(0x345)+_0x13a07c(0x40b)]=_0x872307[_0x13a07c(0x1f1)],_0x1a1a26['textC'+_0x13a07c(0x53b)+'t']=_0x872307[_0x13a07c(0x4f5)](_0x4dbe4d,_0x222351);var _0x31b91a=()=>{var _0x34f51d=_0x13a07c;_0x1a1a26['textC'+'onten'+'t']=_0x5730e6(_0x5c16ce['value']),_0x507846[_0x34f51d(0x25d)][_0x34f51d(0x572)+_0x34f51d(0x39e)+'y'](_0x34f51d(0x37f),_0x872307['BkQsR']((_0x5c16ce[_0x34f51d(0x2ab)]-_0x130647)/_0x872307['GeSBY'](_0x52be30,_0x3ea157),0x1ec7+0x1075+0x2ed8*-0x1)+'%');};return _0x5c16ce[_0x13a07c(0x2c8)+'ut']=()=>{var _0x1aa58e=_0x13a07c;_0x31b91a(),_0x3ce311(_0x569ca1(_0x5c16ce[_0x1aa58e(0x2ab)]));},_0x31b91a(),_0x507846['appen'+'d'](_0x5c16ce,_0x1a1a26),_0x507846;}};_0xea3389('W',_0x471819(0x486),_0x4f19d2[_0x471819(0x72b)](_0x569017+_0x97e2d8,_0x4ef9e4),_0x3e7fa9,_0x97e2d8,_0x97e2d8),_0xea3389('A','KeyA',_0x569017,_0x4f19d2[_0x471819(0x2cc)](_0x3e7fa9+_0x97e2d8,_0x4ef9e4),_0x97e2d8,_0x97e2d8),_0xea3389('S',_0x4f19d2[_0x471819(0x35b)],_0x569017+_0x97e2d8+_0x4ef9e4,_0x3e7fa9+_0x97e2d8+_0x4ef9e4,_0x97e2d8,_0x97e2d8),_0xea3389('D',_0x471819(0x6d9),_0x4f19d2[_0x471819(0x541)](_0x569017,(_0x97e2d8+_0x4ef9e4)*(0x11b*-0x1e+-0x4e+0x2*0x10bd)),_0x4f19d2[_0x471819(0x2dc)](_0x3e7fa9+_0x97e2d8,_0x4ef9e4),_0x97e2d8,_0x97e2d8);var _0x2e3634=_0x4f19d2['nHNHl'](_0x22ab3b-_0x4ef9e4,-0x2*-0xaf3+-0x1*0x252b+0x1*0xf47),_0x15cdb4=_0x4f19d2[_0x471819(0x2dc)](_0x3e7fa9,_0x4f19d2[_0x471819(0x57f)](_0x97e2d8,_0x4ef9e4)*(-0x1725+0xc78+0xaaf));_0xea3389(_0x4f19d2[_0x471819(0x6bd)],_0x471819(0x1e8)+'1',_0x569017,_0x15cdb4,_0x2e3634,_0x97e2d8,_0x1b1e78[_0x471819(0x695)]?_0x4f19d2[_0x471819(0x553)](_0x7e1563,-0x9e8+-0x218*-0x3+0x3a1*0x1)+_0x4f19d2[_0x471819(0x5de)]:''),_0x4f19d2[_0x471819(0x363)](_0xea3389,_0x471819(0x51e),_0x471819(0x1e8)+'3',_0x569017+_0x2e3634+_0x4ef9e4,_0x15cdb4,_0x2e3634,_0x97e2d8,_0x1b1e78['ksCps']?_0x7e1563(0x131e+-0x501*0x5+-0x5ea*-0x1)+_0x4f19d2['ceJUS']:''),_0x4f19d2['SPPnQ'](_0xea3389,'','Space',_0x569017,_0x15cdb4+_0x97e2d8+_0x4ef9e4,_0x22ab3b,_0x4f19d2['cTGRG'](_0x97e2d8,-0x9*-0xa3+-0xa6*-0x26+-0x1e5f+0.45));}function _0x44d6ba(_0x1e18e5){var _0x2de3c2=_0x9225d4,_0x1edb17=_0x1e18e5[_0x2de3c2(0x639)]/(0xb*0x77+0x620+-0xb3b),_0xa383a0=_0x5668c5[_0x2de3c2(0x1e5)](_0x1e18e5[_0x2de3c2(0x33f)+'t'],0x3*-0x21+0x1f*-0xd6+-0xf*-0x1c1),_0x44e29d=Number(_0x1b1e78['chSiz'+'e'])||-0x2574+-0x96*-0x18+0x1765,_0x8a503b=/^#[0-9a-f]{6}$/i['test'](_0x1b1e78[_0x2de3c2(0x3be)+'or'])?_0x1b1e78[_0x2de3c2(0x3be)+'or']:_0x2de3c2(0x285)+'9d';_0x40df3c['save'](),_0x40df3c['strok'+'eStyl'+'e']=_0x8a503b,_0x40df3c[_0x2de3c2(0x627)+'tyle']=_0x8a503b,_0x40df3c['lineW'+'idth']=Math['max'](0x12f1+-0x1*0x1d11+0xa21*0x1+0.5,(-0x1*-0x6a3+0x18e4+-0x1*0x1f85)*_0x44e29d),_0x40df3c['shado'+'wColo'+'r']=_0x8a503b,_0x40df3c[_0x2de3c2(0x2b7)+_0x2de3c2(0x243)]=-0x3*0x23b+0x1778+-0x10c1;var _0x37480e=_0x5668c5['iXnet'](0x1c45*-0x1+-0x9bc+0xb1*0x37,_0x44e29d),_0x14b767=_0x5668c5[_0x2de3c2(0x216)](-0x2*0x607+0x16c2+-0xaac,_0x44e29d);_0x40df3c['begin'+_0x2de3c2(0x24f)](),_0x40df3c[_0x2de3c2(0x6e2)+'o'](_0x5668c5['ZwPel'](_0x1edb17-_0x37480e,_0x14b767),_0xa383a0),_0x40df3c[_0x2de3c2(0x27c)+'o'](_0x5668c5['JRYwe'](_0x1edb17,_0x37480e),_0xa383a0),_0x40df3c['moveT'+'o'](_0x5668c5[_0x2de3c2(0x45a)](_0x1edb17,_0x37480e),_0xa383a0),_0x40df3c['lineT'+'o'](_0x5668c5[_0x2de3c2(0x649)](_0x1edb17+_0x37480e,_0x14b767),_0xa383a0),_0x40df3c['moveT'+'o'](_0x1edb17,_0x5668c5['ZwPel'](_0xa383a0-_0x37480e,_0x14b767)),_0x40df3c[_0x2de3c2(0x27c)+'o'](_0x1edb17,_0xa383a0-_0x37480e),_0x40df3c[_0x2de3c2(0x6e2)+'o'](_0x1edb17,_0x5668c5['cWthq'](_0xa383a0,_0x37480e)),_0x40df3c[_0x2de3c2(0x27c)+'o'](_0x1edb17,_0x5668c5[_0x2de3c2(0x6af)](_0x5668c5[_0x2de3c2(0x447)](_0xa383a0,_0x37480e),_0x14b767)),_0x40df3c[_0x2de3c2(0x368)+'e'](),_0x40df3c[_0x2de3c2(0x557)+'Path'](),_0x40df3c[_0x2de3c2(0x2c5)](_0x1edb17,_0xa383a0,_0x5668c5['iXnet'](-0x6af*0x3+0x23ef+-0xfe1+0.6000000000000001,_0x44e29d),-0x2*-0xf0f+0x2e6+-0x2104,_0x5668c5['iXnet'](Math['PI'],0x1*-0x23f3+0x20a7+0x34e)),_0x40df3c['fill'](),_0x40df3c['resto'+'re']();}function _0x31c32e(_0x5aedea){var _0x5a1808=_0x9225d4,_0x11f2bb=('7|6|9'+_0x5a1808(0x41e)+'5|1|4'+_0x5a1808(0x5fa))[_0x5a1808(0x603)]('|'),_0x307465=0x5*0x791+-0x1*0x238f+-0x246;while(!![]){switch(_0x11f2bb[_0x307465++]){case'0':_0x40df3c['textB'+'aseli'+'ne']=_0x5a1808(0x236);continue;case'1':_0x29ac8b(_0x5668c5['fgZHV'],_0x5a1808(0x285)+'9d');continue;case'2':var _0x265f53=-0x2585+-0x43b*0x8+-0x1*-0x4789,_0x79c690=-0x40b+0xb42+0x5*-0x16f;continue;case'3':_0x40df3c[_0x5a1808(0x405)+'re']();continue;case'4':if(_0x1b1e78['fps'])_0x29ac8b(_0x5668c5['curNE'](_0x3703ff,_0x5a1808(0x28b)));continue;case'5':var _0x29ac8b=(_0x5b935b,_0x32ce11)=>{var _0x19d352=_0x5a1808;_0x40df3c[_0x19d352(0x627)+_0x19d352(0x307)]=_0x32ce11||'rgba('+_0x19d352(0x6c9)+_0x19d352(0x417)+_0x19d352(0x570)+'5)',_0x40df3c['fillT'+_0x19d352(0x1ab)](_0x5b935b,_0x79c690,_0x265f53),_0x265f53+=0x5*-0x181+-0x115f+-0x18f4*-0x1;};continue;case'6':_0x40df3c[_0x5a1808(0x3da)]=_0x5a1808(0x3f4)+_0x5a1808(0x6c3)+_0x5a1808(0x3ab)+_0x5a1808(0x6e0)+_0x5a1808(0x6f4)+_0x5a1808(0x6e0)+'e';continue;case'7':_0x40df3c[_0x5a1808(0x4d1)]();continue;case'8':if(!_0x301c94['gameL'+_0x5a1808(0x3a4)])_0x5668c5['JXeWz'](_0x29ac8b,_0x5668c5[_0x5a1808(0x3d4)],_0x5668c5[_0x5a1808(0x241)]);continue;case'9':_0x40df3c['textA'+_0x5a1808(0x4c2)]='left';continue;}break;}}function _0x23179e(){var _0x3f6277=_0x9225d4,_0x13a1af={'eTnuN':function(_0x1da399,_0x575205){return _0x1da399!==_0x575205;}};if(_0x3f6277(0x289)!==_0x4f19d2['QPWTF']){var _0x95c4cd=(_0x3f6277(0x613)+_0x3f6277(0x503)+'|0|2|'+'6|5|9'+'|4')['split']('|'),_0x258809=0x91d+0x238c+-0x2ca9;while(!![]){switch(_0x95c4cd[_0x258809++]){case'0':_0x260e4b();continue;case'1':_0x4f19d2['mOYZx'](_0x36d710);continue;case'2':_0x40df3c['clear'+'Rect'](-0xb*-0x12b+-0x4f7*-0x3+-0x6a*0x43,-0x18cc+0x5*-0x616+0x1*0x373a,_0x1e5dd9['w'],_0x1e5dd9['h']);continue;case'3':requestAnimationFrame(_0x23179e);continue;case'4':_0x31c32e(_0x2c463a);continue;case'5':if(_0x1b1e78['cross'+_0x3f6277(0x6fd)])_0x44d6ba(_0x2c463a);continue;case'6':var _0x2c463a={'left':0x0,'top':0x0,'right':_0x1e5dd9['w'],'bottom':_0x1e5dd9['h'],'width':_0x1e5dd9['w'],'height':_0x1e5dd9['h']};continue;case'7':var _0x38e786=performance['now']();continue;case'8':_0x38e786-_0x59f685>=0x1*0xfb+-0x1de0+0x95*0x35&&(_0x3703ff=Math[_0x3f6277(0x2a0)](_0x4f54ff*(0xcc+-0x19c4+0x2*0xe70)/(_0x38e786-_0x59f685)),_0x4f54ff=0x185e+0x16ad+-0x2f0b,_0x59f685=_0x38e786);continue;case'9':if(_0x1b1e78[_0x3f6277(0x4fd)+'rokes'])_0x1a2c1d(_0x2c463a);continue;case'10':_0x4f54ff++;continue;}break;}}else{var _0x4762a0=new _0x16c030(_0xb61768)[_0x3f6277(0x2f5)+_0x3f6277(0x635)](_0x4d06c5,_0x5d5181);_0x5058b8[_0x3f6277(0x444)](_0x186506,_0x13a1af[_0x3f6277(0x59b)](_0x4762a0,_0x5bd704)?_0x4762a0[_0x3f6277(0x18a)]():null);}}var _0x739b6a=document[_0x9225d4(0x301)+'eElem'+_0x9225d4(0x3ba)]('div');_0x739b6a['id']=_0x5668c5[_0x9225d4(0x5c1)],_0x739b6a[_0x9225d4(0x25d)]['cssTe'+'xt']='posit'+_0x9225d4(0x3e3)+_0x9225d4(0x619)+'inset'+_0x9225d4(0x388)+'index'+_0x9225d4(0x68d)+'48364'+_0x9225d4(0x258)+'nter-'+_0x9225d4(0x4e5)+'s:non'+'e;';var _0x117cdf=_0x739b6a[_0x9225d4(0x460)+'hShad'+'ow']({'mode':_0x5668c5[_0x9225d4(0x3ce)]});(document['body']||document[_0x9225d4(0x421)+_0x9225d4(0x4d5)+_0x9225d4(0x71b)])[_0x9225d4(0x6a9)+_0x9225d4(0x36a)+'d'](_0x739b6a);var _0x181e12=![],_0x379091={};try{_0x379091=JSON[_0x9225d4(0x4ad)](localStorage[_0x9225d4(0x3a1)+'em'](_0x9225d4(0x524)+_0x9225d4(0x32e)+'r.ui.'+'v1')||'{}');}catch(_0x39863b){}function _0x4cf875(){var _0x3771b7=_0x9225d4;try{localStorage[_0x3771b7(0x3f7)+'em'](_0x4f19d2[_0x3771b7(0x57a)],JSON[_0x3771b7(0x529)+_0x3771b7(0x4b5)](_0x379091));}catch(_0x254140){}}function _0x1b566a(_0x1d7e87,_0x3b9529){var _0x3b1998=_0x9225d4,_0x585b57={'qYfcd':_0x4f19d2[_0x3b1998(0x2d1)],'NNkcQ':'aria-'+_0x3b1998(0x559)+'ed','DEOdP':function(_0x2c9ca6,_0x416691){return _0x2c9ca6(_0x416691);}},_0x3e9a11=document[_0x3b1998(0x301)+_0x3b1998(0x46d)+_0x3b1998(0x3ba)](_0x3b1998(0x722)+'n');return _0x3e9a11[_0x3b1998(0x58d)]=_0x3b1998(0x722)+'n',_0x3e9a11[_0x3b1998(0x345)+'Name']=_0x3b1998(0x607)+_0x3b1998(0x4c0),_0x3e9a11[_0x3b1998(0x323)+'tribu'+'te']('role',_0x4f19d2['UgUoY']),_0x3e9a11[_0x3b1998(0x323)+'tribu'+'te'](_0x3b1998(0x402)+'check'+'ed',String(!!_0x1d7e87)),_0x3e9a11['oncli'+'ck']=_0x10bfb8=>{var _0x655841=_0x3b1998;_0x10bfb8['stopP'+'ropag'+_0x655841(0x4cd)]();var _0x4cb71f=_0x3e9a11[_0x655841(0x4d6)+_0x655841(0x568)+'te']('aria-'+_0x655841(0x559)+'ed')!==_0x585b57[_0x655841(0x353)];_0x3e9a11[_0x655841(0x323)+_0x655841(0x568)+'te'](_0x585b57[_0x655841(0x586)],_0x585b57[_0x655841(0x5e2)](String,_0x4cb71f)),_0x585b57['DEOdP'](_0x3b9529,_0x4cb71f);},_0x3e9a11;}function _0x2ec4f9(_0xeaa74d,_0x371bb7,_0x54c625,_0x5bba8c,_0x2c8756){var _0x5aa8a3=_0x9225d4,_0xfe896a={'tiWYF':function(_0x502db8,_0xd27de7){var _0x119aa5=_0x3e32;return _0x4f19d2[_0x119aa5(0x2bb)](_0x502db8,_0xd27de7);},'bZjav':function(_0x13cd68,_0x8f0ab6){return _0x13cd68+_0x8f0ab6;},'hZSej':function(_0x294c51,_0x24539d){return _0x4f19d2['fUfQK'](_0x294c51,_0x24539d);},'eVeDf':function(_0x15d093,_0x554b26){return _0x15d093-_0x554b26;},'vrDHg':function(_0x5ff312,_0x1e61ae){return _0x5ff312(_0x1e61ae);}},_0x5b2c11=document[_0x5aa8a3(0x301)+_0x5aa8a3(0x46d)+_0x5aa8a3(0x3ba)]('div');_0x5b2c11[_0x5aa8a3(0x345)+_0x5aa8a3(0x40b)]='sk-ra'+_0x5aa8a3(0x245);var _0x501b40=document[_0x5aa8a3(0x301)+'eElem'+'ent'](_0x4f19d2[_0x5aa8a3(0x446)]);_0x501b40[_0x5aa8a3(0x58d)]=_0x4f19d2[_0x5aa8a3(0x257)],_0x501b40[_0x5aa8a3(0x345)+_0x5aa8a3(0x40b)]=_0x4f19d2[_0x5aa8a3(0x3fc)],_0x501b40[_0x5aa8a3(0x3db)]=_0x371bb7,_0x501b40['max']=_0x54c625,_0x501b40['step']=_0x5bba8c,_0x501b40['value']=_0xeaa74d;var _0xe92498=document[_0x5aa8a3(0x301)+_0x5aa8a3(0x46d)+_0x5aa8a3(0x3ba)](_0x5aa8a3(0x250));_0xe92498['class'+'Name']='sk-va'+'l',_0xe92498['textC'+_0x5aa8a3(0x53b)+'t']=String(_0xeaa74d);var _0x1e2379=()=>{var _0x2ec931=_0x5aa8a3;_0xe92498[_0x2ec931(0x636)+_0x2ec931(0x53b)+'t']=_0xfe896a['tiWYF'](String,_0x501b40[_0x2ec931(0x2ab)]),_0x5b2c11[_0x2ec931(0x25d)]['setPr'+_0x2ec931(0x39e)+'y']('--p',_0xfe896a['bZjav'](_0xfe896a[_0x2ec931(0x5e7)](_0x501b40['value']-_0x371bb7,_0xfe896a['eVeDf'](_0x54c625,_0x371bb7))*(-0x7*-0x11f+0x1173+-0x18e8*0x1),'%'));};return _0x501b40['oninp'+'ut']=()=>{var _0x209f4d=_0x5aa8a3;_0x1e2379(),_0xfe896a[_0x209f4d(0x628)](_0x2c8756,_0xfe896a[_0x209f4d(0x6de)](Number,_0x501b40['value']));},_0x1e2379(),_0x5b2c11[_0x5aa8a3(0x6a9)+'d'](_0x501b40,_0xe92498),_0x5b2c11;}function _0x4288c6(_0x50642a,_0x3bc11b){var _0x33e0c8=_0x9225d4,_0x273412=_0x5668c5['pxELo'][_0x33e0c8(0x603)]('|'),_0x4291a5=0x53+-0x139+0x2e*0x5;while(!![]){switch(_0x273412[_0x4291a5++]){case'0':_0x113f7b['class'+'Name']='sk-co'+'lor';continue;case'1':_0x113f7b[_0x33e0c8(0x2c8)+'ut']=()=>_0x3bc11b(_0x113f7b[_0x33e0c8(0x2ab)]);continue;case'2':_0x113f7b['type']='color';continue;case'3':_0x113f7b['value']=/^#[0-9a-f]{6}$/i[_0x33e0c8(0x48d)](_0x50642a)?_0x50642a:_0x33e0c8(0x285)+'9d';continue;case'4':var _0x113f7b=document[_0x33e0c8(0x301)+_0x33e0c8(0x46d)+_0x33e0c8(0x3ba)](_0x5668c5[_0x33e0c8(0x30c)]);continue;case'5':return _0x113f7b;}break;}}function _0x220bd4(_0x5dab6a,_0x753b5d,_0x4bf7f){var _0x537cbd=_0x9225d4,_0x3a690d=document['creat'+'eElem'+_0x537cbd(0x3ba)](_0x5668c5[_0x537cbd(0x6f5)]);_0x3a690d[_0x537cbd(0x345)+'Name']=_0x537cbd(0x53d)+'eld';for(var [_0x2385a8,_0x2f7581]of _0x753b5d){var _0x1416c3=document[_0x537cbd(0x301)+'eElem'+'ent'](_0x537cbd(0x180)+'n');_0x1416c3[_0x537cbd(0x2ab)]=_0x2385a8,_0x1416c3['textC'+_0x537cbd(0x53b)+'t']=_0x2f7581,_0x3a690d[_0x537cbd(0x6a9)+_0x537cbd(0x36a)+'d'](_0x1416c3);}return _0x3a690d['value']=_0x5dab6a,_0x3a690d[_0x537cbd(0x274)+'nge']=()=>_0x4bf7f(_0x3a690d[_0x537cbd(0x2ab)]),_0x3a690d;}function _0x524428(_0xef4db7,_0x2c10ff){var _0x2f86d8=_0x9225d4,_0x364479=_0x5668c5['paTWo']['split']('|'),_0x8cf02a=-0x806+-0xf43*-0x1+-0x73d;while(!![]){switch(_0x364479[_0x8cf02a++]){case'0':_0x29e56e[_0x2f86d8(0x58d)]=_0x2f86d8(0x722)+'n';continue;case'1':_0x29e56e['textC'+'onten'+'t']=_0xef4db7;continue;case'2':_0x29e56e['oncli'+'ck']=_0x4acb51=>{var _0x256c50=_0x2f86d8;_0x4acb51[_0x256c50(0x1f4)+_0x256c50(0x36c)+_0x256c50(0x4cd)](),_0x2c10ff();};continue;case'3':_0x29e56e['class'+_0x2f86d8(0x40b)]=_0x5668c5[_0x2f86d8(0x2e1)];continue;case'4':return _0x29e56e;case'5':var _0x29e56e=document[_0x2f86d8(0x301)+'eElem'+'ent'](_0x2f86d8(0x722)+'n');continue;}break;}}function _0x111b44(_0x5135ce,_0x4b78b0,_0x31d02c){var _0x544788=_0x9225d4,_0x907ae9=document['creat'+_0x544788(0x46d)+'ent'](_0x544788(0x33e));_0x907ae9['class'+_0x544788(0x40b)]='sk-ct'+'l';var _0xc4f9eb=document[_0x544788(0x301)+_0x544788(0x46d)+'ent']('span');_0xc4f9eb[_0x544788(0x345)+_0x544788(0x40b)]='sk-la'+_0x544788(0x403),_0xc4f9eb[_0x544788(0x636)+_0x544788(0x53b)+'t']=_0x5135ce;if(_0x4b78b0){var _0x4ecd75=document[_0x544788(0x301)+'eElem'+_0x544788(0x3ba)](_0x5668c5[_0x544788(0x46b)]);_0x4ecd75['class'+'Name']='sk-hi'+'nt',_0x4ecd75['textC'+_0x544788(0x53b)+'t']=_0x4b78b0,_0xc4f9eb[_0x544788(0x6a9)+_0x544788(0x36a)+'d'](_0x4ecd75);}return _0x907ae9[_0x544788(0x6a9)+'d'](_0xc4f9eb,_0x31d02c),_0x907ae9;}function _0x2e5ebb(_0x22c6ab,_0xc248bd){var _0x362f01=_0x9225d4,_0x35c16a=document[_0x362f01(0x301)+_0x362f01(0x46d)+_0x362f01(0x3ba)]('div');return _0x35c16a[_0x362f01(0x345)+_0x362f01(0x40b)]=_0x4f19d2[_0x362f01(0x57f)]('sk-no'+'te',_0xc248bd?_0x4f19d2['Bwngl']:''),_0x35c16a[_0x362f01(0x636)+_0x362f01(0x53b)+'t']=_0x22c6ab,_0x35c16a;}function _0x48ab0c(_0x21ae4d,_0x240b95,_0x340445,_0x4df53d,_0x59f69c){var _0x2e8ea5=_0x9225d4,_0x5b5cfd={'CiBUf':function(_0x59fefa,_0x375eaa){var _0x41d1a7=_0x3e32;return _0x5668c5[_0x41d1a7(0x699)](_0x59fefa,_0x375eaa);}},_0x51bd77=document['creat'+_0x2e8ea5(0x46d)+_0x2e8ea5(0x3ba)](_0x2e8ea5(0x33e));_0x51bd77[_0x2e8ea5(0x345)+_0x2e8ea5(0x40b)]='sk-ca'+'rd'+(_0x340445?_0x5668c5[_0x2e8ea5(0x466)]:'');var _0x11251c=document[_0x2e8ea5(0x301)+'eElem'+'ent'](_0x5668c5[_0x2e8ea5(0x65a)]);_0x11251c['class'+_0x2e8ea5(0x40b)]=_0x2e8ea5(0x489)+'rd-he'+'ad';var _0x5bee4a=document['creat'+_0x2e8ea5(0x46d)+_0x2e8ea5(0x3ba)](_0x5668c5[_0x2e8ea5(0x65a)]);_0x5bee4a[_0x2e8ea5(0x345)+'Name']=_0x2e8ea5(0x489)+'rd-ti'+_0x2e8ea5(0x21a);var _0x57dac5=document[_0x2e8ea5(0x301)+_0x2e8ea5(0x46d)+'ent']('stron'+'g');_0x57dac5['textC'+_0x2e8ea5(0x53b)+'t']=_0x21ae4d,_0x5bee4a[_0x2e8ea5(0x6a9)+_0x2e8ea5(0x36a)+'d'](_0x57dac5);if(_0x4df53d){var _0xc80b75=_0x1b566a(_0x340445,_0xc5c908=>{var _0x2f2568=_0x2e8ea5;_0x51bd77['class'+'List'][_0x2f2568(0x708)+'e']('on',_0xc5c908),_0x5b5cfd[_0x2f2568(0x6a1)](_0x4df53d,_0xc5c908);});_0x11251c[_0x2e8ea5(0x6a9)+'d'](_0x5bee4a,_0xc80b75);}else _0x11251c['appen'+_0x2e8ea5(0x36a)+'d'](_0x5bee4a);_0x51bd77['appen'+'dChil'+'d'](_0x11251c);if(_0x59f69c&&_0x59f69c[_0x2e8ea5(0x471)+'h']){if(_0x5668c5['GQhGF'](_0x2e8ea5(0x2f3),_0x5668c5[_0x2e8ea5(0x493)])){var _0x308e36=document['creat'+'eElem'+_0x2e8ea5(0x3ba)](_0x2e8ea5(0x33e));_0x308e36['class'+_0x2e8ea5(0x40b)]=_0x5668c5[_0x2e8ea5(0x56c)];var _0x1242ea=document[_0x2e8ea5(0x301)+'eElem'+_0x2e8ea5(0x3ba)]('div');_0x1242ea[_0x2e8ea5(0x345)+_0x2e8ea5(0x40b)]='sk-md'+'esc',_0x1242ea[_0x2e8ea5(0x636)+'onten'+'t']=_0x240b95,_0x308e36['appen'+_0x2e8ea5(0x36a)+'d'](_0x1242ea);for(var _0x4a493a of _0x59f69c)_0x308e36['appen'+'dChil'+'d'](_0x4a493a);_0x51bd77[_0x2e8ea5(0x6a9)+'dChil'+'d'](_0x308e36);}else _0x422b10=_0x299151[_0x2e8ea5(0x2a0)](_0x4f19d2[_0x2e8ea5(0x1f3)](_0xaf3d81*(0x17fa+-0x25c*-0x4+-0x1d82),_0x4f19d2['JniFy'](_0x34d645,_0x3f99da))),_0x4903f1=0x95f*-0x1+0x1634+0x2d*-0x49,_0x41d00e=_0x249678;}return _0x51bd77;}var _0x206387=[{'id':_0x9225d4(0x42f)+'t','label':_0x5668c5[_0x9225d4(0x5ba)]},{'id':_0x5668c5['ADIhh'],'label':_0x9225d4(0x6ec)},{'id':_0x5668c5[_0x9225d4(0x231)],'label':_0x5668c5[_0x9225d4(0x644)]},{'id':_0x9225d4(0x20e),'label':_0x5668c5['digIQ']},{'id':_0x5668c5[_0x9225d4(0x1d2)],'label':_0x5668c5[_0x9225d4(0x418)]}];function _0x13febf(){var _0x213678=_0x9225d4,_0x5204f3=_0x301c94[_0x213678(0x1f0)+'ode']?_0x5668c5['nklFm']:_0x301c94[_0x213678(0x50b)]?_0x5668c5[_0x213678(0x1b5)](_0x213678(0x3eb)+'bound'+'\x20'+(_0x301c94['hooks'+'Total']?_0x5668c5[_0x213678(0x6af)](_0x301c94['hooks'+'Ok']+'/'+_0x301c94[_0x213678(0x191)+'Total'],'\x20hook'+'s'):'0\x20hoo'+_0x213678(0x6bc)+'med\x20('+'all\x20o'+'ff)')+('\x20|\x20ga'+'me\x20')+(_0x301c94['gameL'+_0x213678(0x3a4)]?_0x213678(0x48b)+'d':_0x213678(0x6a5)+'ng'),'\x20|\x20sh'+_0x213678(0x4ec)+'\x20')+(_0x301c94['shoot'+_0x213678(0x5a4)]?_0x5668c5[_0x213678(0x68a)]:_0x5668c5[_0x213678(0x6ca)])+(_0x213678(0x4c5)+_0x213678(0x4f3)+'t\x20')+(_0x301c94[_0x213678(0x365)+_0x213678(0x436)]?_0x213678(0x4bb):_0x213678(0x5fc)):_0x213678(0x3eb)+_0x213678(0x481)+_0x213678(0x30d)+_0x213678(0x378)+_0x213678(0x5d6)+_0x213678(0x49f)+'einst'+_0x213678(0x404)+_0x213678(0x1a0)+_0x213678(0x4a4)+'ipt)';if(_0x301c94[_0x213678(0x34e)+_0x213678(0x18d)])_0x5204f3+='\x20|\x20ER'+_0x213678(0x279)+_0x301c94['lastE'+'rror'];return _0x5668c5[_0x213678(0x1d8)](_0x48ab0c,'Statu'+'s',_0x5204f3,_0x301c94[_0x213678(0x50b)],null,[_0x5668c5['TTFbH'](_0x111b44,'240\x20F'+'PS\x20un'+_0x213678(0x370),_0x213678(0x427)+'\x20Unit'+_0x213678(0x5f0)+_0x213678(0x3d1)+'plica'+'tion.'+_0x213678(0x351)+'arget'+'Frame'+_0x213678(0x4dc),_0x524428('Apply',()=>{var _0x2d28a0=_0x213678,_0x5d2f1d={'rokDZ':function(_0xa99254,_0x5b23de){var _0x3a52d6=_0x3e32;return _0x4f19d2[_0x3a52d6(0x66b)](_0xa99254,_0x5b23de);},'wGMze':'kour-'+'io_','tszdu':_0x4f19d2[_0x2d28a0(0x598)]};if(_0x4f19d2[_0x2d28a0(0x17b)]!==_0x2d28a0(0x41c))try{if(_0x357bf5)_0x357bf5[_0x2d28a0(0x35f)](_0x4f19d2[_0x2d28a0(0x478)],_0x4f19d2[_0x2d28a0(0x354)],[-0x6c1+-0x11d*-0x7+-0x1a]);}catch(_0x42bea9){}else{var _0x43c2c3=_0x18984f['child'+_0x2d28a0(0x5e0)];for(var _0x258f24=-0x788+-0x1931+0x1*0x20b9;_0x5d2f1d[_0x2d28a0(0x5e6)](_0x258f24,_0x43c2c3['lengt'+'h']);_0x258f24++){if(_0x43c2c3[_0x258f24]['id']&&_0x43c2c3[_0x258f24]['id']['index'+'Of'](_0x5d2f1d['wGMze'])===0x2493+0x59f+-0x2a32)_0x43c2c3[_0x258f24][_0x2d28a0(0x25d)][_0x2d28a0(0x65b)+'ay']=_0x5d2f1d[_0x2d28a0(0x26e)];}}}))]);}function _0x1fffdd(_0x3428d0){var _0x29b2be=_0x9225d4,_0x57718f={'JMTKk':function(_0x2a0dc6,_0x23b9d2,_0x5dab9c){return _0x2a0dc6(_0x23b9d2,_0x5dab9c);},'oYHHp':_0x29b2be(0x272)+'e','oKrqv':function(_0x3d25b0){var _0x4b8804=_0x29b2be;return _0x4f19d2[_0x4b8804(0x1fa)](_0x3d25b0);},'oMSsF':function(_0x34e560,_0x5b0390){return _0x34e560===_0x5b0390;},'NgZuG':function(_0x4db8e4){return _0x4db8e4();},'wWkEU':_0x29b2be(0x25c)+_0x29b2be(0x221)+_0x29b2be(0x677)+_0x29b2be(0x419)+'|5|6|'+_0x29b2be(0x2ee)+'11|2','dqXNu':function(_0x353a6d,_0x39476c){return _0x353a6d/_0x39476c;},'gnLbY':function(_0x1e0b7b,_0x4cd87c){var _0x38b88e=_0x29b2be;return _0x4f19d2[_0x38b88e(0x36e)](_0x1e0b7b,_0x4cd87c);},'iqUQH':function(_0x366a97,_0x21fb80){return _0x366a97*_0x21fb80;},'mGuwB':_0x29b2be(0x3cf),'AHVjT':_0x4f19d2[_0x29b2be(0x5b8)],'JrUQG':_0x4f19d2[_0x29b2be(0x2af)]};if(_0x3428d0==='comba'+'t'){if(_0x4f19d2[_0x29b2be(0x4f0)](_0x29b2be(0x4e3),_0x4f19d2[_0x29b2be(0x4e4)]))return[_0x13febf(),_0x48ab0c(_0x29b2be(0x30e)+_0x29b2be(0x1ba),_0x29b2be(0x411)+'s\x20OHe'+'alth.'+_0x29b2be(0x6a8)+_0x29b2be(0x4e7)+_0x29b2be(0x1bb)+_0x29b2be(0x67d)+_0x29b2be(0x482)+_0x29b2be(0x5c8)+_0x29b2be(0x4d8)+'lDie,'+'\x20so\x20n'+_0x29b2be(0x316)+'g\x20can'+'\x20hurt'+'\x20or\x20k'+_0x29b2be(0x425)+_0x29b2be(0x5f2),_0x1b1e78[_0x29b2be(0x4a8)],_0x3dab1f=>{var _0x351557=_0x29b2be;_0x1b1e78[_0x351557(0x4a8)]=_0x3dab1f,_0x1c55f8(),_0x3ecb13(_0x351557(0x4a8),_0x3dab1f),_0x57718f[_0x351557(0x6c8)](_0x3ecb13,_0x57718f[_0x351557(0x50e)],_0x3dab1f);},[]),_0x4f19d2['xuXrr'](_0x48ab0c,_0x4f19d2[_0x29b2be(0x22e)],_0x29b2be(0x1fb)+_0x29b2be(0x317)+_0x29b2be(0x266)+_0x29b2be(0x20a)+_0x29b2be(0x4df)+_0x29b2be(0x697)+_0x29b2be(0x3ff)+_0x29b2be(0x65e)+'rings'+_0x29b2be(0x6dd)+'r\x20adv'+'ance.',_0x1b1e78[_0x29b2be(0x6d2)+'oil'],_0x17f21c=>{var _0x2b5888=_0x29b2be;_0x1b1e78[_0x2b5888(0x6d2)+_0x2b5888(0x6c7)]=_0x17f21c,_0x1c55f8(),_0x4f19d2[_0x2b5888(0x304)](_0x3ecb13,_0x2b5888(0x6d2)+'oil',_0x17f21c);},[]),_0x4f19d2[_0x29b2be(0x2be)](_0x48ab0c,'No\x20Sp'+_0x29b2be(0x50a),'Zeroe'+_0x29b2be(0x212)+_0x29b2be(0x1c2)+_0x29b2be(0x415)+_0x29b2be(0x485)+_0x29b2be(0x6a4)+'cy\x20on'+'\x20your'+_0x29b2be(0x193)+'on\x20ev'+_0x29b2be(0x44a)+_0x29b2be(0x6a3),_0x1b1e78['noSpr'+'ead'],_0x2466b8=>{var _0x398696=_0x29b2be;_0x1b1e78[_0x398696(0x391)+_0x398696(0x491)]=_0x2466b8,_0x57718f[_0x398696(0x650)](_0x1c55f8);},[]),_0x48ab0c(_0x4f19d2['DPXXQ'],'Scale'+_0x29b2be(0x516)+'rtide'+_0x29b2be(0x39f)+_0x29b2be(0x4b8)+_0x29b2be(0x502)+_0x29b2be(0x530)+'0%.\x20S'+_0x29b2be(0x1a9)+'\x20may\x20'+'still'+'\x20gate'+'\x20shot'+'s.',_0x1b1e78['rapid'+_0x29b2be(0x431)],_0x200022=>{var _0x3ef8ca=_0x29b2be;_0x1b1e78[_0x3ef8ca(0x47b)+_0x3ef8ca(0x431)]=_0x200022,_0x4f19d2[_0x3ef8ca(0x1fa)](_0x1c55f8);},[]),_0x48ab0c(_0x29b2be(0x3e9)+'e\x20[EX'+'P]',_0x29b2be(0x6da)+'rites'+'\x20Over'+_0x29b2be(0x6b7)+_0x29b2be(0x694)+'\x20dama'+_0x29b2be(0x6cb)+_0x29b2be(0x3f1)+_0x29b2be(0x5d8)+_0x29b2be(0x379)+_0x29b2be(0x3c9)+'r\x20val'+'idate'+'s.',_0x1b1e78[_0x29b2be(0x29d)+_0x29b2be(0x2d4)],_0xca5186=>{var _0x1d29fc=_0x29b2be;_0x1b1e78[_0x1d29fc(0x29d)+_0x1d29fc(0x2d4)]=_0xca5186,_0x1c55f8();},[_0x4f19d2[_0x29b2be(0x313)](_0x111b44,_0x4f19d2['Hhifx'],null,_0x4f19d2[_0x29b2be(0x5d1)](_0x2ec4f9,_0x1b1e78['damag'+_0x29b2be(0x240)+'e'],0xea8+-0x1*0xd7c+0x5*-0x3a,0x1*-0x1feb+0x11b0+0x565*0x3,-0x9a8+0x2b7+0x6f6,_0x647c70=>{var _0x264197=_0x29b2be;_0x57718f[_0x264197(0x534)](_0x264197(0x5bb),'uowyn')?(_0x1b1e78[_0x264197(0x29d)+'eValu'+'e']=_0x647c70,_0x1c55f8()):_0x2a59b5['setIt'+'em']('sakur'+'a.kou'+_0x264197(0x3cc),_0x3138f8['strin'+_0x264197(0x4b5)](_0x553ad9));}))]),_0x48ab0c(_0x4f19d2[_0x29b2be(0x336)],_0x4f19d2[_0x29b2be(0x476)],_0x1b1e78[_0x29b2be(0x42a)+'moExp'],_0x293d91=>{_0x1b1e78['infAm'+'moExp']=_0x293d91,_0x1c55f8();},[_0x4f19d2['jBABR'](_0x2e5ebb,_0x29b2be(0x511)+'loads'+_0x29b2be(0x343)+'l\x20dra'+_0x29b2be(0x71d)+'he\x20de'+_0x29b2be(0x5ed)+'nt\x20ha'+'ppens'+'\x20else'+'where'+'.')])];else{var _0x7edac5=(_0x29b2be(0x2ef)+_0x29b2be(0x43a)+_0x29b2be(0x348))['split']('|'),_0x4bd706=-0x24fe+0x15*-0x1bd+0x497f;while(!![]){switch(_0x7edac5[_0x4bd706++]){case'0':_0x1489c1['addEv'+_0x29b2be(0x18e)+_0x29b2be(0x63a)+'r'](_0x4f19d2['wAKhf'],_0x143aaa,!![]);continue;case'1':_0xeeaee5[_0x29b2be(0x384)+'entLi'+'stene'+'r'](_0x29b2be(0x197)+'wn',_0x4730f1,!![]);continue;case'2':if(_0x3209aa)return;continue;case'3':_0x37c53d=!![];continue;case'4':_0x39a5eb[_0x29b2be(0x384)+_0x29b2be(0x18e)+_0x29b2be(0x63a)+'r'](_0x29b2be(0x1e8)+_0x29b2be(0x2a7),_0x222631,!![]);continue;case'5':_0x19816d['addEv'+_0x29b2be(0x18e)+_0x29b2be(0x63a)+'r'](_0x4f19d2['qAUJx'],_0x43239b);continue;case'6':_0xcdc160['addEv'+_0x29b2be(0x18e)+'stene'+'r'](_0x4f19d2[_0x29b2be(0x3a8)],_0x2ecc59,!![]);continue;}break;}}}if(_0x3428d0===_0x4f19d2['ikLIp'])return[_0x48ab0c('Speed',_0x29b2be(0x268)+'s\x20all'+_0x29b2be(0x5d4)+_0x29b2be(0x1d4)+'ment\x20'+_0x29b2be(0x68e)+'\x20limi'+_0x29b2be(0x4e2)+'us\x20ac'+'celer'+_0x29b2be(0x4cd)+'.',_0x1b1e78[_0x29b2be(0x68e)+_0x29b2be(0x64a)]!==0x4*-0x26b+0x183b+-0xe2b,null,[_0x111b44(_0x4f19d2[_0x29b2be(0x532)],_0x4f19d2['OxIqh'],_0x2ec4f9(_0x1b1e78[_0x29b2be(0x68e)+_0x29b2be(0x64a)],-0xbf*-0x13+-0x201b+0x1220,-0x388+-0x113+-0x1d*-0x33,-0x1*-0xc6f+0x1ea2+-0x2b0c,_0x263c22=>{var _0x5a881e=_0x29b2be;_0x1b1e78['speed'+_0x5a881e(0x64a)]=_0x263c22,_0x57718f['NgZuG'](_0x1c55f8);}))]),_0x4f19d2['xuXrr'](_0x48ab0c,_0x29b2be(0x6b4)+'/\x20Gra'+_0x29b2be(0x3b0),_0x4f19d2['ZSmcE'],_0x4f19d2[_0x29b2be(0x21f)](_0x1b1e78[_0x29b2be(0x692)+'ct'],0xd*-0x53+0x170e+-0x1273)||_0x1b1e78[_0x29b2be(0x1ea)+'tyPct']!==0x6*-0x23c+0x1855*-0x1+0x2621,null,[_0x4f19d2[_0x29b2be(0x260)](_0x111b44,_0x29b2be(0x6b4)+'%',null,_0x2ec4f9(_0x1b1e78[_0x29b2be(0x692)+'ct'],-0x224b+-0x1*-0x85d+0x1a20,0x1ed5+-0x8d8*0x3+-0x321,-0x5*0x6ce+-0x1907+-0x1*-0x3b12,_0x4b4b0d=>{var _0x3e4fff=_0x29b2be;'TllJf'==='HBVZo'?new _0x270a0a(_0x4d9ab6)['write'+'Field'](_0xcb3c,_0x4f5892,_0x1d0077):(_0x1b1e78[_0x3e4fff(0x692)+'ct']=_0x4b4b0d,_0x1c55f8());})),_0x4f19d2['vPHXU'](_0x111b44,'Gravi'+_0x29b2be(0x665),_0x4f19d2[_0x29b2be(0x5cf)],_0x2ec4f9(_0x1b1e78['gravi'+_0x29b2be(0x188)],-0x193c+-0x2b*-0x55+0xaff,0x16b4*-0x1+0xca*0x5+0x2*0x9c5,0x11*-0xb5+0x38c+0x87e,_0x20ea46=>{var _0x27c1a2=_0x29b2be;_0x1b1e78[_0x27c1a2(0x1ea)+_0x27c1a2(0x188)]=_0x20ea46,_0x4f19d2[_0x27c1a2(0x1fa)](_0x1c55f8);}))]),_0x4f19d2[_0x29b2be(0x4e9)](_0x48ab0c,_0x29b2be(0x1db)+_0x29b2be(0x51f),'Zeroe'+_0x29b2be(0x3fd)+'ement'+'.last'+_0x29b2be(0x5e3)+_0x29b2be(0x4ea)+_0x29b2be(0x697)+_0x29b2be(0x230)+_0x29b2be(0x42e)+_0x29b2be(0x44f)+'never'+'\x20appl'+_0x29b2be(0x6ce),_0x1b1e78[_0x29b2be(0x42c)],_0x1acc1a=>{var _0x8fc9cc=_0x29b2be;_0x1b1e78[_0x8fc9cc(0x42c)]=_0x1acc1a,_0x1c55f8();},[])];if(_0x3428d0===_0x29b2be(0x184)+'l'){if(_0x4f19d2['FPLIL']===_0x29b2be(0x3b3))_0x3a24ac(_0x343c0e,_0x289bf4,_0x49a8fb,_0x4f19d2['TDfAx']);else return[_0x48ab0c(_0x29b2be(0x185)+'rokes','WASD\x20'+_0x29b2be(0x17d)+'/RMB\x20'+'+\x20Spa'+'ce\x20ov'+_0x29b2be(0x17c)+'.',_0x1b1e78['keyst'+_0x29b2be(0x326)],_0x5530e1=>{var _0x5ef3a4=_0x29b2be,_0x4f7470={'xUmhO':_0x57718f[_0x5ef3a4(0x2b0)],'LJHvw':'mouse'+'1','iTNwn':function(_0x113e2b,_0x56c500){return _0x113e2b(_0x56c500);},'JtPvg':function(_0x368ad1,_0x274b2a){return _0x368ad1+_0x274b2a;},'iixLB':function(_0x124714,_0x3b5403){return _0x124714+_0x3b5403;},'vMetJ':'KeyS','msaqI':function(_0x41d684,_0xde8f5e,_0x38b2c8,_0x4ea975,_0x4491e1,_0x4d6796,_0x40f166){return _0x41d684(_0xde8f5e,_0x38b2c8,_0x4ea975,_0x4491e1,_0x4d6796,_0x40f166);},'iOBWb':function(_0x1c4621,_0x27e256){return _0x1c4621+_0x27e256;},'FPEdJ':function(_0x459f59,_0x318889){return _0x459f59*_0x318889;},'uOdgt':function(_0x3e533c,_0x3798f6){return _0x3e533c-_0x3798f6;},'VBheX':function(_0x2e676a,_0xa00626,_0x2a4310,_0x2e2aae,_0x254a6b,_0x1c8acf,_0x1e4edf,_0x568ac2){return _0x2e676a(_0xa00626,_0x2a4310,_0x2e2aae,_0x254a6b,_0x1c8acf,_0x1e4edf,_0x568ac2);},'mLmwN':_0x5ef3a4(0x51e),'AWmIx':function(_0x397baf,_0x28c255){var _0x4d6fd7=_0x5ef3a4;return _0x57718f[_0x4d6fd7(0x518)](_0x397baf,_0x28c255);},'PnZZG':function(_0x4865e8,_0x590a2b){return _0x4865e8-_0x590a2b;},'ZCyhV':function(_0x2f43e3,_0x4bb252){return _0x2f43e3/_0x4bb252;},'KDXLq':function(_0x56c9b9,_0x86a0c){return _0x56c9b9===_0x86a0c;},'BIGvY':_0x5ef3a4(0x223),'xSclg':'rgba('+_0x5ef3a4(0x6c9)+_0x5ef3a4(0x417)+_0x5ef3a4(0x5ce)+')','pZgyo':'middl'+'e','vZFAf':function(_0x86f611,_0x39103c){return _0x57718f['gnLbY'](_0x86f611,_0x39103c);},'UiIxE':_0x5ef3a4(0x64f)+'-sans'+_0x5ef3a4(0x4cf)+'f,sys'+_0x5ef3a4(0x195)+_0x5ef3a4(0x629)+_0x5ef3a4(0x1e4)+'if','sODRe':function(_0x7bfd62,_0x3fb618){var _0x22101a=_0x5ef3a4;return _0x57718f[_0x22101a(0x3a9)](_0x7bfd62,_0x3fb618);}};if('IAJGW'!==_0x57718f['mGuwB'])_0x1b1e78[_0x5ef3a4(0x4fd)+_0x5ef3a4(0x326)]=_0x5530e1,_0x57718f['NgZuG'](_0x1c55f8);else{var _0x255fc6=_0x4f7470[_0x5ef3a4(0x2a8)][_0x5ef3a4(0x603)]('|'),_0x23a9db=-0xa26*0x2+-0x18e*0xb+0x2566;while(!![]){switch(_0x255fc6[_0x23a9db++]){case'0':_0x412fa8('LMB',_0x4f7470['LJHvw'],_0x50885b,_0x1e557c,_0x1b7313,_0xf0c33,_0x36ccc6[_0x5ef3a4(0x695)]?_0x4f7470[_0x5ef3a4(0x215)](_0x5010cc,-0xd6*-0x15+-0x4*-0x315+-0x1de1*0x1)+_0x5ef3a4(0x192):'');continue;case'1':_0x412fa8('A','KeyA',_0x50885b,_0x4f7470[_0x5ef3a4(0x426)](_0x4f7470[_0x5ef3a4(0x426)](_0x223b3c,_0xf0c33),_0x1d17fd),_0xf0c33,_0xf0c33);continue;case'2':_0x412fa8('',_0x5ef3a4(0x488),_0x50885b,_0x4f7470['iixLB'](_0x1e557c+_0xf0c33,_0x1d17fd),_0x437382,_0xf0c33*(0x1*0x11a7+0x1*0x415+-0x15bc+0.45));continue;case'3':_0x412fa8('W','KeyW',_0x4f7470[_0x5ef3a4(0x426)](_0x50885b,_0xf0c33)+_0x1d17fd,_0x223b3c,_0xf0c33,_0xf0c33);continue;case'4':var _0x1fe73a=_0x35566f['ksPos'];continue;case'5':_0x412fa8('S',_0x4f7470[_0x5ef3a4(0x4db)],_0x50885b+_0xf0c33+_0x1d17fd,_0x223b3c+_0xf0c33+_0x1d17fd,_0xf0c33,_0xf0c33);continue;case'6':_0x4f7470['msaqI'](_0x412fa8,'D',_0x5ef3a4(0x6d9),_0x50885b+(_0xf0c33+_0x1d17fd)*(-0x1*0x1c37+-0x1*0x25cf+0x2*0x2104),_0x4f7470[_0x5ef3a4(0x2b5)](_0x223b3c+_0xf0c33,_0x1d17fd),_0xf0c33,_0xf0c33);continue;case'7':var _0x16fcb5=_0x57db65(_0x3f5a78['ksSca'+'le'])||-0x4d1*-0x8+-0x14b5*0x1+-0x11d2,_0xf0c33=_0x4f7470[_0x5ef3a4(0x1c5)](-0x24df+0x210a+-0x5*-0xcb,_0x16fcb5),_0x1d17fd=(-0x8a8+-0x4*-0x97f+-0x86*0x38)*_0x16fcb5;continue;case'8':var _0x412fa8=(_0x5a0fe9,_0x14a233,_0x5ca6aa,_0xd6e0cb,_0xe6ac4a,_0x4f51ac,_0x4ff5f0)=>{var _0xff19c9=_0x5ef3a4,_0x52ecb2=_0xa7d018['has'](_0x14a233);_0x4fca7a[_0xff19c9(0x4d1)](),_0x5870f1[_0xff19c9(0x557)+_0xff19c9(0x24f)]();if(_0x1f3d02[_0xff19c9(0x2a0)+_0xff19c9(0x331)])_0x5f2a40[_0xff19c9(0x2a0)+_0xff19c9(0x331)](_0x5ca6aa,_0xd6e0cb,_0xe6ac4a,_0x4f51ac,(0x1d6*0x2+0x1720+-0x1ac5)*_0x16fcb5);else _0x5596e8[_0xff19c9(0x6fb)](_0x5ca6aa,_0xd6e0cb,_0xe6ac4a,_0x4f51ac);_0x5ec346[_0xff19c9(0x627)+_0xff19c9(0x307)]=_0x52ecb2?_0xea2f68['DEHZt']:_0xea2f68[_0xff19c9(0x696)],_0x27f1fa['fill'](),_0x5c70eb['lineW'+_0xff19c9(0x269)]=0x1baa+-0x222d+0x684,_0x3c4d4c['strok'+'eStyl'+'e']=_0x52ecb2?_0x5bd5e3:_0xff19c9(0x324)+_0xff19c9(0x5b4)+_0xff19c9(0x67f)+'7,0.3'+'5)',_0x835946[_0xff19c9(0x368)+'e'](),_0x52ecb2&&(_0x105f6d['shado'+_0xff19c9(0x459)+'r']=_0x1e7d03,_0x128851[_0xff19c9(0x2b7)+'wBlur']=0x203b*0x1+0x1*0x1749+-0x3776,_0x123047[_0xff19c9(0x56d)](),_0x2c6d35[_0xff19c9(0x2b7)+'wBlur']=0x1*-0x1337+-0x984+-0x1cbb*-0x1),_0x461a34[_0xff19c9(0x627)+'tyle']=_0x52ecb2?_0xea2f68[_0xff19c9(0x6f9)]:_0xea2f68['PTjMf'],_0x390e89[_0xff19c9(0x4bf)+_0xff19c9(0x4c2)]=_0xea2f68['sdAHC'],_0xb2d94a[_0xff19c9(0x22c)+'aseli'+'ne']=_0xea2f68[_0xff19c9(0x322)],_0x35a7be['font']=_0xea2f68['BveUj'](_0xff19c9(0x548),_0x199499[_0xff19c9(0x2a0)]((0x11*-0x2b+0x1*-0x1c8f+-0xfbb*-0x2)*_0x16fcb5))+(_0xff19c9(0x64f)+_0xff19c9(0x390)+'-seri'+'f,sys'+_0xff19c9(0x195)+'i,san'+_0xff19c9(0x1e4)+'if'),_0x36f8ce[_0xff19c9(0x2ea)+'ext'](_0x5a0fe9,_0x5ca6aa+_0xe6ac4a/(-0x1*-0x1c43+-0x1129+-0x5*0x238),_0xea2f68['IpnGp'](_0xea2f68[_0xff19c9(0x48c)](_0xd6e0cb,_0x4f51ac/(-0x9f5+0xa72+-0x7b)),_0x4ff5f0?(0x1502+-0x6f7*-0x2+-0x22eb)*_0x16fcb5:0xb7*0x7+-0x1*0x25ee+0x20ed)),_0x4ff5f0&&(_0x49588a[_0xff19c9(0x3da)]=_0xff19c9(0x4c8)+_0xc6dd0f['round'](_0xea2f68[_0xff19c9(0x173)](0x828+-0x2dc*0x2+-0x7b*0x5,_0x16fcb5))+_0xea2f68[_0xff19c9(0x5d0)],_0x48ae85['fillS'+'tyle']=_0x52ecb2?_0xea2f68['XnuHa']:'rgba('+_0xff19c9(0x6c9)+_0xff19c9(0x417)+_0xff19c9(0x6ab)+'5)',_0x103605['fillT'+'ext'](_0x4ff5f0,_0x5ca6aa+_0xea2f68['fpJCu'](_0xe6ac4a,-0x5ea+-0xd22*-0x1+-0x736),_0xd6e0cb+_0x4f51ac/(0x3*-0x5cf+-0xe0a+0x1f79)+_0xea2f68[_0xff19c9(0x329)](0x23d1+-0x19b8+-0xa11,_0x16fcb5))),_0x2ddea9['resto'+'re']();};continue;case'9':var _0x50885b=_0x1fe73a==='br'?_0x4f7470[_0x5ef3a4(0x651)](_0x5acd88['right']-(-0x741+0x24d4+-0x1d83),_0x437382):_0x4f7470[_0x5ef3a4(0x426)](_0x8d4505['left'],0x95a+0x300*0x7+-0x1e4a);continue;case'10':var _0x437382=_0x4f7470['iOBWb'](_0xf0c33*(0xa61+-0x6ea*0x5+-0x60d*-0x4),_0x4f7470[_0x5ef3a4(0x1c5)](_0x1d17fd,-0xf2c+-0x1ab1*0x1+0x29df)),_0x6ce1fd=_0x4f7470['iixLB'](_0xf0c33*(-0x5*-0x13d+-0x1e04+0x17d6),_0x4f7470[_0x5ef3a4(0x1c5)](_0x1d17fd,0x23eb*0x1+-0xabd+0xc*-0x219));continue;case'11':_0x4f7470['VBheX'](_0x412fa8,_0x4f7470[_0x5ef3a4(0x66c)],_0x5ef3a4(0x1e8)+'3',_0x50885b+_0x1b7313+_0x1d17fd,_0x1e557c,_0x1b7313,_0xf0c33,_0x21e600['ksCps']?_0x257cbd(-0x8a5*0x1+-0xfd6+0x37*0x72)+_0x5ef3a4(0x192):'');continue;case'12':var _0x1b7313=_0x4f7470['AWmIx'](_0x4f7470[_0x5ef3a4(0x651)](_0x437382,_0x1d17fd),0xa44+-0x415*0x1+-0x62d),_0x1e557c=_0x223b3c+_0x4f7470['JtPvg'](_0xf0c33,_0x1d17fd)*(-0x11*0xfb+0x1*0x1049+0x64);continue;case'13':var _0x223b3c=_0x1fe73a==='ml'?_0x4f7470['PnZZG'](_0x4f7470[_0x5ef3a4(0x426)](_0x21112a[_0x5ef3a4(0x236)],_0x173478['heigh'+'t']/(0x1*0x20bf+-0x21cd+0x110)),_0x4f7470['ZCyhV'](_0x6ce1fd,-0x15a5*0x1+-0x16a*-0xb+-0x7*-0xdf)):_0x4f7470[_0x5ef3a4(0x310)](_0x421e52[_0x5ef3a4(0x35d)+'m']-_0x6ce1fd,_0x4f7470[_0x5ef3a4(0x366)](_0x1fe73a,'bl')?-0x4b*-0x4a+0x2d7*-0x7+-0x16d:0x89*0x29+0x1f*-0x5e+0x1*-0x9f9);continue;case'14':var _0xea2f68={'DEHZt':'rgba('+_0x5ef3a4(0x5b4)+'07,15'+_0x5ef3a4(0x315)+'5)','jHupV':_0x5ef3a4(0x324)+_0x5ef3a4(0x3d6)+_0x5ef3a4(0x41a)+'7)','XnuHa':_0x4f7470[_0x5ef3a4(0x6f8)],'PTjMf':_0x4f7470[_0x5ef3a4(0x724)],'sdAHC':'cente'+'r','YtJyW':_0x4f7470[_0x5ef3a4(0x4da)],'BveUj':function(_0x59c7d4,_0x77f3cd){var _0x1536d1=_0x5ef3a4;return _0x4f7470[_0x1536d1(0x2b5)](_0x59c7d4,_0x77f3cd);},'IpnGp':function(_0x44a08f,_0x371c2d){return _0x44a08f-_0x371c2d;},'FlQmG':function(_0x47f122,_0x251283){return _0x4f7470['vZFAf'](_0x47f122,_0x251283);},'iddWB':_0x4f7470[_0x5ef3a4(0x609)],'fpJCu':function(_0x4ae7f5,_0x8ca4b9){return _0x4ae7f5/_0x8ca4b9;},'bWoaq':function(_0xc6a428,_0x219f3b){return _0x4f7470['sODRe'](_0xc6a428,_0x219f3b);}};continue;}break;}}},[_0x4f19d2['qfFiS'](_0x111b44,_0x29b2be(0x6dc)+'ion',null,_0x220bd4(_0x1b1e78['ksPos'],[['bl',_0x29b2be(0x27d)+_0x29b2be(0x43d)+'t'],['br',_0x4f19d2[_0x29b2be(0x2b9)]],['ml',_0x4f19d2[_0x29b2be(0x668)]]],_0x447c01=>{var _0x404c39=_0x29b2be;_0x1b1e78[_0x404c39(0x682)]=_0x447c01,_0x1c55f8();})),_0x4f19d2[_0x29b2be(0x3c5)](_0x111b44,'Size',null,_0x4f19d2[_0x29b2be(0x35c)](_0x2ec4f9,_0x1b1e78[_0x29b2be(0x235)+'le'],0xc1*0x1b+0x12fb+-0x26*0x109+0.6,0xdb8+0x19be+-0x7*0x5a3+0.6000000000000001,-0xb69+-0x1*0x1648+0x21b1+0.05,_0x356fb9=>{var _0x1ed7ae=_0x29b2be;_0x1b1e78['ksSca'+'le']=_0x356fb9,_0x4f19d2[_0x1ed7ae(0x359)](_0x1c55f8);})),_0x4f19d2['fxVXK'](_0x111b44,_0x4f19d2[_0x29b2be(0x1fc)],null,_0x1b566a(_0x1b1e78['ksCps'],_0x538780=>{var _0x9a6d93=_0x29b2be;_0x1b1e78[_0x9a6d93(0x695)]=_0x538780,_0x1c55f8();}))]),_0x4f19d2['Tdlno'](_0x48ab0c,_0x29b2be(0x671)+_0x29b2be(0x6fd),_0x29b2be(0x2e5)+_0x29b2be(0x5f5)+'ter\x20c'+'rossh'+'air.',_0x1b1e78[_0x29b2be(0x330)+'hair'],_0x512816=>{var _0x1e9ccb=_0x29b2be,_0x32759e={'fjrDP':_0x4f19d2['VKxKJ'],'xOgXt':_0x4f19d2['jlbvB'],'tqggY':function(_0x436e19,_0x2bd7f8){return _0x4f19d2['AmYQh'](_0x436e19,_0x2bd7f8);},'yyqrm':_0x1e9ccb(0x3a2)+'\x20effe'+'ct\x20on'+'\x20relo'+_0x1e9ccb(0x47a)+'en\x20to'+_0x1e9ccb(0x398)+'.'};if('kLLRa'===_0x4f19d2['Lyfjh'])return[_0x306e96(_0x32759e[_0x1e9ccb(0x225)],_0x32759e[_0x1e9ccb(0x1b2)],_0x36b5b7[_0x1e9ccb(0x1a8)+'ck'],_0x134453=>{var _0x8c6243=_0x1e9ccb;_0x29baf9[_0x8c6243(0x1a8)+'ck']=_0x134453,_0x492cfd();},[_0x32759e[_0x1e9ccb(0x2ed)](_0x219c73,_0x32759e['yyqrm'])])];else _0x1b1e78['cross'+'hair']=_0x512816,_0x4f19d2[_0x1e9ccb(0x67a)](_0x1c55f8);},[_0x111b44(_0x4f19d2[_0x29b2be(0x661)],null,_0x4f19d2[_0x29b2be(0x5d1)](_0x2ec4f9,_0x1b1e78[_0x29b2be(0x672)+'e'],0x797*-0x5+0x10d0+-0x7*-0x305+0.5,0x104e+0x346*-0x3+-0x2*0x33d+0.5,0x447*0x3+-0x1*-0xc29+-0x18fe+0.1,_0x3dfb6e=>{var _0x422169=_0x29b2be;_0x1b1e78[_0x422169(0x672)+'e']=_0x3dfb6e,_0x1c55f8();})),_0x111b44(_0x29b2be(0x6d7),null,_0x4f19d2['SXzqt'](_0x4288c6,_0x1b1e78[_0x29b2be(0x3be)+'or'],_0x3d45d6=>{_0x1b1e78['chCol'+'or']=_0x3d45d6,_0x1c55f8();}))]),_0x48ab0c(_0x29b2be(0x20c)+'ers',_0x29b2be(0x5f1)+'verla'+'y.',_0x1b1e78['fps'],null,[_0x4f19d2[_0x29b2be(0x313)](_0x111b44,'FPS\x20c'+'ounte'+'r',null,_0x4f19d2[_0x29b2be(0x5c2)](_0x1b566a,_0x1b1e78[_0x29b2be(0x17a)],_0x172730=>{_0x1b1e78['fps']=_0x172730,_0x1c55f8();})),_0x2e5ebb(_0x29b2be(0x727)+_0x29b2be(0x207)+_0x29b2be(0x2c0)+_0x29b2be(0x377)+_0x29b2be(0x4ee)+'ild\x20h'+_0x29b2be(0x300)+_0x29b2be(0x630)+_0x29b2be(0x28d)+'ePlay'+_0x29b2be(0x267)+_0x29b2be(0x278)+'gybac'+_0x29b2be(0x1c4))])];}if(_0x4f19d2[_0x29b2be(0x4f0)](_0x3428d0,_0x29b2be(0x20e)))return[_0x48ab0c(_0x4f19d2[_0x29b2be(0x1da)],_0x29b2be(0x6d5)+_0x29b2be(0x483)+'-io_*'+'\x20bann'+'er\x20sl'+_0x29b2be(0x714),_0x1b1e78['adblo'+'ck'],_0x4f4104=>{var _0x817590=_0x29b2be;if(_0x4f19d2[_0x817590(0x562)]!==_0x4f19d2['OtYys'])_0x1b1e78['adblo'+'ck']=_0x4f4104,_0x1c55f8();else{var _0x1324ce=_0x4738d4[_0x817590(0x301)+'eElem'+'ent'](_0x817590(0x33e));_0x1324ce['class'+'Name']=_0x57718f['AHVjT'];var _0x4f4f1d=_0x3038e9[_0x817590(0x301)+'eElem'+'ent'](_0x817590(0x33e));_0x4f4f1d['class'+_0x817590(0x40b)]='sk-md'+_0x817590(0x50d),_0x4f4f1d[_0x817590(0x636)+_0x817590(0x53b)+'t']=_0x4dff30,_0x1324ce[_0x817590(0x6a9)+_0x817590(0x36a)+'d'](_0x4f4f1d);for(var _0x51a13c of _0x28efd3)_0x1324ce[_0x817590(0x6a9)+'dChil'+'d'](_0x51a13c);_0x256949['appen'+_0x817590(0x36a)+'d'](_0x1324ce);}},[_0x4f19d2[_0x29b2be(0x34c)](_0x2e5ebb,_0x29b2be(0x3a2)+'\x20effe'+_0x29b2be(0x487)+_0x29b2be(0x347)+_0x29b2be(0x47a)+'en\x20to'+_0x29b2be(0x398)+'.')])];return[_0x4f19d2['Tdlno'](_0x48ab0c,'Safe\x20'+'Mode\x20'+'(over'+_0x29b2be(0x306)+_0x29b2be(0x3f2),_0x4f19d2['xMcOp'],_0x1b1e78[_0x29b2be(0x1f0)+'ode'],_0x5e0a05=>{var _0x1b5594=_0x29b2be;_0x4f19d2['wjyHw']!==_0x4f19d2[_0x1b5594(0x59e)]?(_0x1b1e78['safeM'+_0x1b5594(0x1ba)]=_0x5e0a05,_0x1c55f8(),location[_0x1b5594(0x2d2)+'d']()):_0x38ea06['code']===_0x57718f[_0x1b5594(0x6b8)]&&(_0x408190['preve'+'ntDef'+_0x1b5594(0x5d3)](),_0xb140d2());},[_0x4f19d2[_0x29b2be(0x238)](_0x2e5ebb,_0x4f19d2['NqSfP'])]),_0x4f19d2['Tdlno'](_0x48ab0c,_0x4f19d2['uuwVv'],'Each\x20'+_0x29b2be(0x37e)+_0x29b2be(0x641)+'ls\x20a\x20'+_0x29b2be(0x63f)+'tramp'+_0x29b2be(0x4c7)+_0x29b2be(0x704)+_0x29b2be(0x6ff)+'hole\x20'+_0x29b2be(0x3ee)+_0x29b2be(0x227)+_0x29b2be(0x57e)+'OFF\x20b'+_0x29b2be(0x33a)+'ault\x20'+_0x29b2be(0x588)+_0x29b2be(0x5dc)+'ure\x20t'+'hat\x20d'+_0x29b2be(0x2ec)+_0x29b2be(0x203)+'tch\x20t'+_0x29b2be(0x6cc)+_0x29b2be(0x36d)+'thod\x20'+_0x29b2be(0x2d7)+'s\x20\x27fu'+_0x29b2be(0x713)+'n\x20sig'+_0x29b2be(0x54a)+_0x29b2be(0x176)+_0x29b2be(0x3f5)+'\x27\x20the'+_0x29b2be(0x392)+'nt\x20it'+_0x29b2be(0x6c1)+_0x29b2be(0x1ef)+_0x29b2be(0x5af)+_0x29b2be(0x575)+_0x29b2be(0x1cd)+'one\x20a'+_0x29b2be(0x435)+_0x29b2be(0x296)+_0x29b2be(0x2d2)+_0x29b2be(0x1be)+_0x29b2be(0x6e7)+'\x20whic'+_0x29b2be(0x1ec)+_0x29b2be(0x321)+_0x29b2be(0x43b)+'d\x20cho'+_0x29b2be(0x36f)+'n.',_0x1b1e78[_0x29b2be(0x264)+'od']||_0x1b1e78['hookG'+'odDie']||_0x1b1e78['hookN'+'oReco'+'il']||_0x1b1e78[_0x29b2be(0x6b6)+'aptur'+'e'],_0x5ad825=>{var _0x16d596=_0x29b2be;_0x1b1e78[_0x16d596(0x264)+'od']=_0x5ad825,_0x1b1e78['hookG'+'odDie']=_0x5ad825,_0x1b1e78[_0x16d596(0x2cf)+_0x16d596(0x563)+'il']=_0x5ad825,_0x1b1e78[_0x16d596(0x6b6)+_0x16d596(0x64e)+'e']=_0x5ad825,_0x4f19d2[_0x16d596(0x1fa)](_0x1c55f8),location[_0x16d596(0x2d2)+'d']();},[_0x4f19d2[_0x29b2be(0x238)](_0x2e5ebb,_0x4f19d2['YPyAl']),_0x111b44(_0x4f19d2[_0x29b2be(0x51a)],null,_0x1b566a(_0x1b1e78['hookG'+'od'],_0x3a3ac1=>{var _0x524ef2=_0x29b2be;_0x1b1e78[_0x524ef2(0x264)+'od']=_0x3a3ac1,_0x57718f['NgZuG'](_0x1c55f8);})),_0x4f19d2[_0x29b2be(0x3f8)](_0x111b44,_0x29b2be(0x272)+'e\x20(OH'+_0x29b2be(0x5c8)+_0x29b2be(0x4d8)+_0x29b2be(0x480),null,_0x4f19d2[_0x29b2be(0x409)](_0x1b566a,_0x1b1e78['hookG'+'odDie'],_0x307386=>{var _0xa55fdf=_0x29b2be;_0x1b1e78[_0xa55fdf(0x264)+_0xa55fdf(0x433)]=_0x307386,_0x1c55f8();})),_0x111b44(_0x29b2be(0x6d2)+_0x29b2be(0x517)+_0x29b2be(0x364)+'lMoti'+_0x29b2be(0x4f9)+_0x29b2be(0x312),null,_0x1b566a(_0x1b1e78[_0x29b2be(0x2cf)+'oReco'+'il'],_0x4a05d2=>{_0x1b1e78['hookN'+'oReco'+'il']=_0x4a05d2,_0x1c55f8();})),_0x111b44(_0x29b2be(0x616)+_0x29b2be(0x229)+'etGam'+_0x29b2be(0x2e3)+_0x29b2be(0x1a6)+_0x29b2be(0x484)+'ounde'+'d)',_0x29b2be(0x679)+'eats\x20'+_0x29b2be(0x5b0)+_0x29b2be(0x2de)+_0x29b2be(0x60c)+'is',_0x4f19d2[_0x29b2be(0x409)](_0x1b566a,_0x1b1e78['hookC'+'aptur'+'e'],_0x910b73=>{var _0x519a94=_0x29b2be;_0x1b1e78[_0x519a94(0x6b6)+_0x519a94(0x64e)+'e']=_0x910b73,_0x1c55f8();}))]),_0x48ab0c('ACTk\x20'+'Kille'+'r',_0x4f19d2[_0x29b2be(0x3e0)],_0x1b1e78[_0x29b2be(0x684)+'ill'],_0x4aa36c=>{var _0x55c066=_0x29b2be;_0x1b1e78['actkK'+_0x55c066(0x2a2)]=_0x4aa36c,_0x57718f[_0x55c066(0x393)](_0x1c55f8);},[_0x4f19d2[_0x29b2be(0x409)](_0x2e5ebb,_0x29b2be(0x24e)+_0x29b2be(0x3ef)+'/rapi'+_0x29b2be(0x514)+_0x29b2be(0x664)+_0x29b2be(0x626)+_0x29b2be(0x270)+_0x29b2be(0x5dd)+'even\x20'+_0x29b2be(0x4b2)+_0x29b2be(0x67e)+_0x29b2be(0x53c),!![])]),_0x48ab0c(_0x4f19d2['gKgVR'],_0x4f19d2[_0x29b2be(0x2aa)],!![],null,[_0x111b44(_0x4f19d2['jiurQ'],null,_0x524428(_0x4f19d2[_0x29b2be(0x6c6)],()=>{var _0x125742=_0x29b2be;_0x1b1e78={..._0x32b344},_0x1c55f8(),location[_0x125742(0x2d2)+'d']();}))])];}var _0x1abba0=null;function _0x5695dd(_0x2f9099){var _0x1c60b0=_0x9225d4;_0x181e12=_0x2f9099;if(!_0x1abba0){var _0x32b605=(_0x1c60b0(0x5a5)+_0x1c60b0(0x5be)+'0')['split']('|'),_0x229aa3=-0x2*0xcb1+-0x7cf*0x1+0x2131;while(!![]){switch(_0x32b605[_0x229aa3++]){case'0':requestAnimationFrame(()=>_0x1abba0[_0x1c60b0(0x345)+_0x1c60b0(0x458)][_0x1c60b0(0x226)](_0x1c60b0(0x474)));continue;case'1':_0x78829e['textC'+'onten'+'t']=_0x1a8ff8;continue;case'2':_0x117cdf['appen'+'dChil'+'d'](_0x78829e);continue;case'3':var _0x78829e=document['creat'+'eElem'+_0x1c60b0(0x3ba)]('style');continue;case'4':_0x117cdf['appen'+'dChil'+'d'](_0x1abba0);continue;case'5':_0x1abba0=_0x4f19d2['omJJh'](_0x535549);continue;}break;}}_0x1abba0[_0x1c60b0(0x345)+_0x1c60b0(0x458)][_0x1c60b0(0x708)+'e'](_0x1c60b0(0x474),_0x2f9099);}function _0x15d526(){_0x5695dd(!_0x181e12);}function _0x535549(){var _0x404138=_0x9225d4,_0x52e27d={'QrAHm':function(_0x4173dc,_0x130b8e){var _0x33502a=_0x3e32;return _0x5668c5[_0x33502a(0x294)](_0x4173dc,_0x130b8e);},'ajRRv':_0x5668c5['VmFUS'],'eRNtc':function(_0x497e19,_0x547bda){return _0x497e19+_0x547bda;},'oMbfJ':function(_0x5afa2a,_0x4ce443){var _0x55051=_0x3e32;return _0x5668c5[_0x55051(0x72a)](_0x5afa2a,_0x4ce443);},'jedln':function(_0xd7eb0,_0x18df23){return _0xd7eb0+_0x18df23;},'OWkVv':function(_0x228c2c,_0x1047b5){var _0x340256=_0x3e32;return _0x5668c5[_0x340256(0x447)](_0x228c2c,_0x1047b5);},'FwGUt':_0x404138(0x3eb)+'bound'+'\x20','jJhJJ':function(_0x2be110,_0x136d2a){return _0x2be110+_0x136d2a;},'DwIlw':_0x5668c5[_0x404138(0x700)],'ZiGRp':'loadi'+'ng','oaTGs':_0x404138(0x4bb),'zdPQD':_0x5668c5['pBHOr']},_0x337bb8=document['creat'+_0x404138(0x46d)+_0x404138(0x3ba)](_0x5668c5[_0x404138(0x65a)]);_0x337bb8[_0x404138(0x345)+'Name']=_0x5668c5['zWpjm'];var _0x49192b=document[_0x404138(0x301)+_0x404138(0x46d)+_0x404138(0x3ba)](_0x5668c5['SmuGl']);_0x49192b[_0x404138(0x345)+_0x404138(0x40b)]=_0x5668c5['wlsmz'];var _0x3e738b=document[_0x404138(0x301)+'eElem'+_0x404138(0x3ba)](_0x404138(0x33e));_0x3e738b['class'+_0x404138(0x40b)]='mn-lo'+'go',_0x3e738b[_0x404138(0x3b7)+'HTML']=_0x5668c5[_0x404138(0x1f7)],_0x49192b['appen'+'dChil'+'d'](_0x3e738b);var _0x591c00=document[_0x404138(0x301)+'eElem'+'ent'](_0x404138(0x33e));_0x591c00['class'+'Name']='mn-ma'+'in';var _0x303ca4=document[_0x404138(0x301)+_0x404138(0x46d)+_0x404138(0x3ba)](_0x404138(0x59c)+'r');_0x303ca4[_0x404138(0x345)+'Name']=_0x5668c5['HRnHH'];var _0xf5db71=document['creat'+'eElem'+'ent'](_0x5668c5[_0x404138(0x65a)]);_0xf5db71[_0x404138(0x345)+_0x404138(0x40b)]=_0x5668c5['EjHTk'];var _0x30b0e6=document[_0x404138(0x301)+'eElem'+_0x404138(0x3ba)]('h2');_0x30b0e6['class'+_0x404138(0x40b)]=_0x5668c5[_0x404138(0x234)],_0x30b0e6['textC'+'onten'+'t']=_0x5668c5[_0x404138(0x254)];var _0x593aea=document['creat'+'eElem'+_0x404138(0x3ba)](_0x5668c5['QPluR']);_0x593aea['class'+_0x404138(0x40b)]='mn-su'+'b',_0x593aea[_0x404138(0x636)+'onten'+'t']=_0x404138(0x6d4)+_0x404138(0x21b)+'.io\x20m'+_0x404138(0x652),_0xf5db71[_0x404138(0x6a9)+'d'](_0x30b0e6,_0x593aea);var _0x172b47=document['creat'+_0x404138(0x46d)+'ent'](_0x5668c5[_0x404138(0x3ae)]);_0x172b47[_0x404138(0x58d)]=_0x5668c5['UUFdz'],_0x172b47[_0x404138(0x345)+_0x404138(0x40b)]=_0x404138(0x1ff)+'ose',_0x172b47[_0x404138(0x327)]=_0x5668c5[_0x404138(0x547)],_0x172b47['inner'+_0x404138(0x59a)]=_0x5668c5['NSRpZ'],_0x172b47[_0x404138(0x1fe)+'ck']=()=>_0x5695dd(![]),_0x303ca4[_0x404138(0x6a9)+'d'](_0xf5db71,_0x172b47);var _0x45cda6=document['creat'+_0x404138(0x46d)+'ent']('div');_0x45cda6['class'+_0x404138(0x40b)]=_0x5668c5[_0x404138(0x442)],_0x591c00['appen'+'d'](_0x303ca4,_0x45cda6),_0x337bb8[_0x404138(0x6a9)+'d'](_0x49192b,_0x591c00);var _0x127401=new Map();for(var _0x20e5ad of _0x206387){var _0x5098e5=document[_0x404138(0x301)+_0x404138(0x46d)+_0x404138(0x3ba)](_0x404138(0x722)+'n');_0x5098e5['type']=_0x404138(0x722)+'n',_0x5098e5[_0x404138(0x345)+_0x404138(0x40b)]=_0x5668c5['MtVVQ'],_0x5098e5['title']=_0x20e5ad['label'],_0x5098e5['inner'+_0x404138(0x59a)]=_0x5668c5['kaUsr']+_0x20e5ad[_0x404138(0x617)]+(_0x404138(0x51d)+_0x404138(0x52b)),_0x5098e5[_0x404138(0x1fe)+'ck']=(_0x35a900=>()=>_0x103acf(_0x35a900))(_0x20e5ad['id']),_0x127401['set'](_0x20e5ad['id'],_0x5098e5),_0x49192b[_0x404138(0x6a9)+_0x404138(0x36a)+'d'](_0x5098e5);}function _0x103acf(_0x1b7d63){var _0x35240f=_0x404138;if('aegom'==='aegom'){_0x379091['cat']=_0x1b7d63,_0x4f19d2[_0x35240f(0x2d8)](_0x4cf875);var _0x583981=_0x206387['find'](_0x544856=>_0x544856['id']===_0x1b7d63)||_0x206387[0xfb6+0x21b+-0x1*0x11d1];_0x30b0e6[_0x35240f(0x636)+_0x35240f(0x53b)+'t']='Sakur'+'a\x20Kou'+'r\x20—\x20'+_0x583981[_0x35240f(0x617)];for(var [_0x475e04,_0x3dd723]of _0x127401)_0x3dd723[_0x35240f(0x345)+_0x35240f(0x458)][_0x35240f(0x708)+'e']('activ'+'e',_0x4f19d2['GYSeC'](_0x475e04,_0x1b7d63));_0x45cda6[_0x35240f(0x406)+_0x35240f(0x62e)+'ldren'](..._0x4f19d2[_0x35240f(0x177)](_0x1fffdd,_0x1b7d63));}else _0x54d54b[_0x35240f(0x444)](_0x332d07,null);}return _0x103acf(_0x379091[_0x404138(0x48f)]||_0x404138(0x42f)+'t'),setInterval(()=>{var _0x1d33f1=_0x404138;if(!_0x181e12)return;var _0x2cb225=_0x45cda6[_0x1d33f1(0x4bd)+'ren'];for(var _0x153922=0x11ab+-0x685+-0x1*0xb26;_0x153922<_0x2cb225[_0x1d33f1(0x471)+'h'];_0x153922++){var _0x11311e=_0x2cb225[_0x153922][_0x1d33f1(0x341)+_0x1d33f1(0x1e1)+_0x1d33f1(0x6b9)](_0x1d33f1(0x4be)+_0x1d33f1(0x57d));_0x11311e&&(_0x52e27d['QrAHm'](_0x11311e['textC'+_0x1d33f1(0x53b)+'t'][_0x1d33f1(0x1d9)+'Of'](_0x52e27d[_0x1d33f1(0x5aa)]),0xb5*-0xe+0x2390+-0x19aa)||_0x11311e['textC'+_0x1d33f1(0x53b)+'t']['index'+'Of']('SAFE')===0x44*-0xa+0x24b7+-0x1*0x220f)&&(_0x11311e[_0x1d33f1(0x636)+_0x1d33f1(0x53b)+'t']=_0x301c94[_0x1d33f1(0x1f0)+_0x1d33f1(0x1ba)]?'SAFE\x20'+_0x1d33f1(0x453)+_0x1d33f1(0x2cd)+_0x1d33f1(0x4ed)+_0x1d33f1(0x19d)+_0x1d33f1(0x581)+_0x1d33f1(0x506)+_0x1d33f1(0x3c4)+'ad\x20to'+'\x20exit'+')':_0x301c94[_0x1d33f1(0x50b)]?_0x52e27d['eRNtc'](_0x52e27d[_0x1d33f1(0x549)](_0x52e27d[_0x1d33f1(0x5a0)](_0x52e27d[_0x1d33f1(0x3aa)](_0x52e27d[_0x1d33f1(0x605)]+(_0x301c94[_0x1d33f1(0x191)+_0x1d33f1(0x709)]?_0x52e27d[_0x1d33f1(0x328)](_0x301c94[_0x1d33f1(0x191)+'Ok']+'/',_0x301c94[_0x1d33f1(0x191)+'Total'])+(_0x1d33f1(0x3ec)+'s'):_0x52e27d[_0x1d33f1(0x3ad)])+('\x20|\x20ga'+_0x1d33f1(0x4ba)),_0x301c94[_0x1d33f1(0x660)+_0x1d33f1(0x3a4)]?_0x1d33f1(0x48b)+'d':_0x52e27d[_0x1d33f1(0x69e)]),'\x20|\x20sh'+'ooter'+'\x20')+(_0x301c94[_0x1d33f1(0x1bd)+_0x1d33f1(0x5a4)]?_0x52e27d[_0x1d33f1(0x305)]:_0x1d33f1(0x5fc)),_0x1d33f1(0x4c5)+_0x1d33f1(0x4f3)+'t\x20'),_0x301c94[_0x1d33f1(0x365)+_0x1d33f1(0x436)]?_0x1d33f1(0x4bb):_0x1d33f1(0x5fc))+(_0x301c94['lastE'+_0x1d33f1(0x18d)]?_0x52e27d[_0x1d33f1(0x2f7)]+_0x301c94[_0x1d33f1(0x34e)+_0x1d33f1(0x18d)]:''):_0x1d33f1(0x3eb)+_0x1d33f1(0x481)+_0x1d33f1(0x61f)+_0x1d33f1(0x378)+'ay\x20on'+_0x1d33f1(0x49f)+'einst'+_0x1d33f1(0x404)+_0x1d33f1(0x1a0)+_0x1d33f1(0x4a4)+_0x1d33f1(0x45d));}},0x1c2f+-0xec*-0x1d+-0x1*0x3303),_0x337bb8;}var _0x1a8ff8=_0x9225d4(0x4fb)+':host'+_0x9225d4(0x4f2)+_0x9225d4(0x2b1)+'itial'+';\x20}\x0a\x20'+_0x9225d4(0x4de)+_0x9225d4(0x3af)+'-sizi'+'ng:\x20b'+_0x9225d4(0x646)+_0x9225d4(0x523)+_0x9225d4(0x4b0)+_0x9225d4(0x24d)+_0x9225d4(0x716)+'t-fam'+_0x9225d4(0x510)+_0x9225d4(0x6ee)+_0x9225d4(0x3e6)+_0x9225d4(0x190)+_0x9225d4(0x546)+'\x20syst'+_0x9225d4(0x3c1)+',\x20san'+_0x9225d4(0x1e4)+_0x9225d4(0x253)+_0x9225d4(0x4fb)+_0x9225d4(0x26d)+'anel\x20'+_0x9225d4(0x4a5)+'ition'+_0x9225d4(0x4cb)+'olute'+';\x20rig'+_0x9225d4(0x712)+'4px;\x20'+'botto'+_0x9225d4(0x3d0)+_0x9225d4(0x2b2)+_0x9225d4(0x1e2)+_0x9225d4(0x655)+_0x9225d4(0x37c)+_0x9225d4(0x719)+_0x9225d4(0x585)+'vw\x20-\x20'+_0x9225d4(0x1b7)+_0x9225d4(0x495)+'x-hei'+'ght:\x20'+_0x9225d4(0x18c)+'80px,'+_0x9225d4(0x175)+'(100v'+_0x9225d4(0x3c6)+_0x9225d4(0x6ea)+';\x0a\x20\x20\x20'+_0x9225d4(0x19b)+_0x9225d4(0x5f3)+_0x9225d4(0x2e6)+_0x9225d4(0x386)+'p:\x2010'+_0x9225d4(0x1ad)+_0x9225d4(0x654)+'g:\x2010'+'px;\x20b'+'order'+_0x9225d4(0x37a)+'us:\x202'+'2px;\x20'+'point'+_0x9225d4(0x2f1)+_0x9225d4(0x6e8)+'\x20auto'+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x9225d4(0x3d8)+_0x9225d4(0x608)+_0x9225d4(0x324)+'24,17'+',21,.'+_0x9225d4(0x340)+'backd'+_0x9225d4(0x282)+_0x9225d4(0x467)+':\x20blu'+'r(22p'+'x)\x20sa'+'turat'+_0x9225d4(0x60e)+'%);\x20-'+_0x9225d4(0x1b0)+_0x9225d4(0x59f)+'kdrop'+_0x9225d4(0x1f6)+_0x9225d4(0x297)+_0x9225d4(0x454)+_0x9225d4(0x5cb)+_0x9225d4(0x1c6)+'ate(1'+_0x9225d4(0x251)+_0x9225d4(0x4fb)+_0x9225d4(0x35a)+'-shad'+'ow:\x200'+_0x9225d4(0x4fe)+_0x9225d4(0x477)+'gba(2'+_0x9225d4(0x32f)+_0x9225d4(0x413)+',.06)'+',\x20ins'+_0x9225d4(0x638)+_0x9225d4(0x38d)+_0x9225d4(0x1fd)+_0x9225d4(0x6e5)+'255,2'+'55,.0'+_0x9225d4(0x721)+_0x9225d4(0x1a5)+'\x2080px'+_0x9225d4(0x1fd)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x9225d4(0x513)+_0x9225d4(0x1a1)+_0x9225d4(0x5eb)+_0x9225d4(0x3f0)+_0x9225d4(0x5c7)+':\x20tra'+'nslat'+_0x9225d4(0x1f2)+'px);\x20'+'point'+_0x9225d4(0x2f1)+_0x9225d4(0x6e8)+'\x20none'+_0x9225d4(0x535)+_0x9225d4(0x3fb)+_0x9225d4(0x61b)+_0x9225d4(0x1a1)+_0x9225d4(0x31d)+'s\x20eas'+'e,\x20tr'+_0x9225d4(0x4b4)+_0x9225d4(0x18b)+'5s\x20cu'+_0x9225d4(0x22d)+_0x9225d4(0x599)+'(.22,'+_0x9225d4(0x569)+_0x9225d4(0x6f7)+_0x9225d4(0x4d7)+_0x9225d4(0x28c)+'r:\x20#f'+_0x9225d4(0x68c)+_0x9225d4(0x716)+_0x9225d4(0x3bb)+_0x9225d4(0x410)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x9225d4(0x26d)+_0x9225d4(0x527)+_0x9225d4(0x474)+'\x20{\x20op'+'acity'+':\x201;\x20'+'trans'+'form:'+_0x9225d4(0x31b)+_0x9225d4(0x18f)+_0x9225d4(0x54b)+'event'+_0x9225d4(0x319)+'to;\x20}'+_0x9225d4(0x4fb)+'.mn-s'+_0x9225d4(0x3f3)+_0x9225d4(0x1f5)+'lay:\x20'+_0x9225d4(0x186)+_0x9225d4(0x23b)+'-dire'+'ction'+_0x9225d4(0x4c6)+'umn;\x20'+'align'+'-item'+_0x9225d4(0x522)+_0x9225d4(0x472)+_0x9225d4(0x6df)+_0x9225d4(0x526)+_0x9225d4(0x31e)+'h:\x2062'+_0x9225d4(0x4b1)+'lex:\x20'+'none;'+_0x9225d4(0x44b)+'ing:\x20'+'12px\x20'+(_0x9225d4(0x468)+_0x9225d4(0x584)+_0x9225d4(0x38e)+_0x9225d4(0x475)+'px;\x0a\x20'+_0x9225d4(0x4d7)+'backg'+'round'+':\x20rgb'+'a(255'+_0x9225d4(0x683)+_0x9225d4(0x675)+_0x9225d4(0x70c)+_0x9225d4(0x380)+_0x9225d4(0x2b7)+_0x9225d4(0x5c3)+_0x9225d4(0x648)+_0x9225d4(0x4fe)+_0x9225d4(0x477)+_0x9225d4(0x44e)+_0x9225d4(0x32f)+'5,255'+',.05)'+_0x9225d4(0x335)+'\x20\x20\x20.m'+_0x9225d4(0x29b)+_0x9225d4(0x565)+_0x9225d4(0x49c)+'y:\x20gr'+_0x9225d4(0x314)+_0x9225d4(0x6be)+'items'+':\x20cen'+_0x9225d4(0x4f7)+'width'+_0x9225d4(0x631)+_0x9225d4(0x3d5)+_0x9225d4(0x2df)+_0x9225d4(0x3d7)+';\x20}\x0a\x20'+_0x9225d4(0x717)+_0x9225d4(0x29b)+_0x9225d4(0x3dd)+_0x9225d4(0x256)+'dth:\x20'+_0x9225d4(0x583)+_0x9225d4(0x54f)+_0x9225d4(0x712)+_0x9225d4(0x4ef)+'overf'+'low:\x20'+_0x9225d4(0x71e)+'le;\x20f'+_0x9225d4(0x467)+_0x9225d4(0x37b)+'p-sha'+'dow(0'+'\x200\x204p'+'x\x20rgb'+_0x9225d4(0x5d5)+_0x9225d4(0x6eb)+'157,.'+_0x9225d4(0x2b4)+'}\x0a\x20\x20\x20'+_0x9225d4(0x361)+'tab\x20{'+'\x20disp'+_0x9225d4(0x21c)+'flex;'+'\x20alig'+'n-ite'+'ms:\x20c'+'enter'+';\x20jus'+_0x9225d4(0x507)+_0x9225d4(0x62d)+'nt:\x20c'+_0x9225d4(0x1ac)+_0x9225d4(0x5ee)+'th:\x205'+_0x9225d4(0x25e)+_0x9225d4(0x33f)+_0x9225d4(0x69a)+_0x9225d4(0x3f6)+_0x9225d4(0x646)+':\x200;\x20'+'borde'+_0x9225d4(0x70f)+_0x9225d4(0x561)+_0x9225d4(0x3e4)+_0x9225d4(0x4fb)+_0x9225d4(0x728)+_0x9225d4(0x371)+_0x9225d4(0x292)+_0x9225d4(0x2fd)+'arent'+_0x9225d4(0x6bf)+_0x9225d4(0x2e7)+_0x9225d4(0x44e)+'46,23'+'8,242'+_0x9225d4(0x5b2)+'\x20curs'+'or:\x20p'+_0x9225d4(0x55e)+'r;\x20fo'+_0x9225d4(0x5a6)+_0x9225d4(0x5ad)+_0x9225d4(0x407)+'font-'+'weigh'+'t:\x2070'+_0x9225d4(0x47c)+'\x20\x20\x20\x20.'+'mn-ta'+_0x9225d4(0x538)+_0x9225d4(0x59d)+_0x9225d4(0x38b)+':\x20rgb'+_0x9225d4(0x58a)+_0x9225d4(0x440)+'242,.'+'8);\x20}'+_0x9225d4(0x4fb)+_0x9225d4(0x464)+_0x9225d4(0x508)+'tive\x20'+'{\x20col'+'or:\x20#'+_0x9225d4(0x66a)+_0x9225d4(0x601)+'ckgro'+_0x9225d4(0x608)+'rgba('+_0x9225d4(0x5b4)+_0x9225d4(0x67f)+_0x9225d4(0x60a)+_0x9225d4(0x335)+'\x20\x20\x20.m'+'n-mai'+_0x9225d4(0x3a0)+'lex:\x20'+_0x9225d4(0x2c4)+_0x9225d4(0x6d0)+'th:\x200'+_0x9225d4(0x4af)+_0x9225d4(0x424)+_0x9225d4(0x23b)+';\x20fle'+'x-dir'+'ectio'+_0x9225d4(0x3ac)+'lumn;'+_0x9225d4(0x3b5)+_0x9225d4(0x428)+'-top\x20'+_0x9225d4(0x5f4)+_0x9225d4(0x424)+_0x9225d4(0x23b)+';\x20ali'+_0x9225d4(0x556)+_0x9225d4(0x5ec)+'cente'+_0x9225d4(0x27a)+'p:\x2012'+'px;\x20p'+_0x9225d4(0x654)+'g:\x206p'+'x\x206px'+_0x9225d4(0x395)+';\x20use'+_0x9225d4(0x1eb)+_0x9225d4(0x1af)+'none;'+_0x9225d4(0x3b5)+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+_0x9225d4(0x311)+'\x201;\x20m'+_0x9225d4(0x65c)+'dth:\x20'+_0x9225d4(0x47c)+'\x20\x20\x20\x20.'+_0x9225d4(0x4a3)+'{\x20fon'+_0x9225d4(0x3bb)+'e:\x2017'+_0x9225d4(0x4b1)+_0x9225d4(0x37d)+'eight'+_0x9225d4(0x5f7)+';\x20}\x0a\x20'+_0x9225d4(0x717)+_0x9225d4(0x1cb)+_0x9225d4(0x1b1)+_0x9225d4(0x5a6)+'ze:\x201'+_0x9225d4(0x666)+_0x9225d4(0x3c2))+('ty:\x20.'+'4;\x20}\x0a'+_0x9225d4(0x492)+_0x9225d4(0x1ff)+_0x9225d4(0x1d5)+_0x9225d4(0x1f5)+_0x9225d4(0x21c)+'grid;'+_0x9225d4(0x26f)+_0x9225d4(0x2cb)+_0x9225d4(0x3cb)+'enter'+_0x9225d4(0x5ee)+_0x9225d4(0x55f)+'8px;\x20'+_0x9225d4(0x33f)+'t:\x2028'+_0x9225d4(0x3f6)+_0x9225d4(0x646)+':\x200;\x20'+_0x9225d4(0x2c9)+'r-rad'+_0x9225d4(0x561)+'8px;\x20'+'backg'+'round'+_0x9225d4(0x262)+'nspar'+_0x9225d4(0x656)+_0x9225d4(0x38b)+':\x20inh'+'erit;'+_0x9225d4(0x66e)+_0x9225d4(0x4ae)+_0x9225d4(0x504)+'curso'+_0x9225d4(0x688)+_0x9225d4(0x27f)+_0x9225d4(0x335)+_0x9225d4(0x717)+'n-clo'+_0x9225d4(0x443)+'ver\x20{'+'\x20opac'+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x9225d4(0x608)+_0x9225d4(0x324)+'255,2'+_0x9225d4(0x32f)+_0x9225d4(0x604)+_0x9225d4(0x494)+_0x9225d4(0x492)+_0x9225d4(0x1ff)+_0x9225d4(0x1e3)+'vg\x20{\x20'+'width'+_0x9225d4(0x2ac)+_0x9225d4(0x3d5)+_0x9225d4(0x2df)+_0x9225d4(0x255)+_0x9225d4(0x593)+_0x9225d4(0x657)+'ne;\x20s'+_0x9225d4(0x611)+_0x9225d4(0x5ca)+'rentC'+_0x9225d4(0x45f)+'\x20stro'+_0x9225d4(0x2da)+_0x9225d4(0x5c6)+'2;\x20st'+_0x9225d4(0x4a0)+'linec'+'ap:\x20r'+'ound;'+_0x9225d4(0x3b5)+_0x9225d4(0x428)+'-cols'+'\x20{\x20fl'+_0x9225d4(0x596)+';\x20min'+'-heig'+_0x9225d4(0x1d0)+_0x9225d4(0x3c7)+_0x9225d4(0x2f6)+'-y:\x20a'+'uto;\x20'+'displ'+_0x9225d4(0x62f)+'rid;\x20'+_0x9225d4(0x2f2)+_0x9225d4(0x172)+_0x9225d4(0x686)+_0x9225d4(0x663)+'s:\x20re'+'peat('+'auto-'+_0x9225d4(0x1f9)+_0x9225d4(0x4d4)+'ax(25'+'0px,\x20'+_0x9225d4(0x3ca)+';\x20ali'+_0x9225d4(0x556)+'ems:\x20'+'start'+';\x20ali'+'gn-co'+'ntent'+_0x9225d4(0x187)+'rt;\x20g'+'ap:\x201'+_0x9225d4(0x407)+_0x9225d4(0x560)+_0x9225d4(0x71c)+_0x9225d4(0x6f2)+_0x9225d4(0x4f4)+_0x9225d4(0x335)+_0x9225d4(0x717)+_0x9225d4(0x4fa)+_0x9225d4(0x52d)+'ebkit'+_0x9225d4(0x6db)+'llbar'+'\x20{\x20wi'+_0x9225d4(0x5c6)+'8px;\x20'+_0x9225d4(0x5f8)+'\x20.mn-'+_0x9225d4(0x2c1)+':-web'+'kit-s'+'croll'+_0x9225d4(0x288)+_0x9225d4(0x389)+_0x9225d4(0x42b)+'kgrou'+'nd:\x20r'+'gba(2'+_0x9225d4(0x32f)+_0x9225d4(0x413)+',.08)'+_0x9225d4(0x210)+'der-r'+_0x9225d4(0x17e)+_0x9225d4(0x558)+_0x9225d4(0x335)+'\x20\x20\x20.s'+_0x9225d4(0x338)+_0x9225d4(0x220)+'order'+_0x9225d4(0x37a)+'us:\x201'+_0x9225d4(0x25e)+'backg'+'round'+_0x9225d4(0x4d2)+_0x9225d4(0x5d5)+',255,'+_0x9225d4(0x675)+'025);'+_0x9225d4(0x380)+'shado'+'w:\x20in'+_0x9225d4(0x648)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x9225d4(0x32f)+'5,255'+_0x9225d4(0x2ca)+';\x20}\x0a\x20'+_0x9225d4(0x49a)+'k-car'+_0x9225d4(0x3c3)+'{\x20bac'+'kgrou'+_0x9225d4(0x589)+_0x9225d4(0x44e)+'55,25'+_0x9225d4(0x413)+_0x9225d4(0x52c)+';\x20box'+'-shad'+'ow:\x20i'+_0x9225d4(0x597)+_0x9225d4(0x6cd)+_0x9225d4(0x701)+_0x9225d4(0x324)+_0x9225d4(0x5b4)+'07,15'+'7,.28'+_0x9225d4(0x494)+_0x9225d4(0x492)+_0x9225d4(0x489)+'rd-he'+'ad\x20{\x20'+_0x9225d4(0x65b))+(_0x9225d4(0x5db)+_0x9225d4(0x441)+_0x9225d4(0x505)+_0x9225d4(0x33b)+_0x9225d4(0x522)+_0x9225d4(0x472)+'\x20gap:'+_0x9225d4(0x2a3)+'\x20padd'+_0x9225d4(0x2c3)+_0x9225d4(0x63b)+'12px;'+'\x20}\x0a\x20\x20'+_0x9225d4(0x1ca)+'-card'+'-titl'+'e\x20{\x20f'+_0x9225d4(0x247)+_0x9225d4(0x2c4)+_0x9225d4(0x6d0)+_0x9225d4(0x632)+';\x20}\x0a\x20'+_0x9225d4(0x49a)+'k-car'+_0x9225d4(0x2e2)+'le\x20st'+'rong\x20'+_0x9225d4(0x1c7)+'t-siz'+_0x9225d4(0x410)+'px;\x20f'+_0x9225d4(0x37d)+_0x9225d4(0x261)+_0x9225d4(0x53f)+';\x20col'+_0x9225d4(0x2e7)+'gba(2'+_0x9225d4(0x5e9)+'8,242'+',.45)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x9225d4(0x3c3)+_0x9225d4(0x40f)+_0x9225d4(0x437)+'itle\x20'+_0x9225d4(0x30b)+_0x9225d4(0x55c)+_0x9225d4(0x1b9)+_0x9225d4(0x729)+_0x9225d4(0x587)+_0x9225d4(0x5f8)+_0x9225d4(0x659)+'mbody'+'\x20{\x20pa'+_0x9225d4(0x6c2)+_0x9225d4(0x723)+_0x9225d4(0x397)+_0x9225d4(0x407)+'}\x0a\x20\x20\x20'+_0x9225d4(0x659)+_0x9225d4(0x6d3)+_0x9225d4(0x1b1)+'nt-si'+'ze:\x201'+_0x9225d4(0x666)+'opaci'+'ty:\x20.'+_0x9225d4(0x457)+'rgin-'+_0x9225d4(0x35d)+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+'l\x20{\x20d'+'ispla'+'y:\x20fl'+'ex;\x20a'+_0x9225d4(0x590)+'items'+_0x9225d4(0x309)+_0x9225d4(0x4f7)+'gap:\x20'+'8px;\x20'+'paddi'+'ng:\x204'+'px\x200;'+_0x9225d4(0x4fc)+_0x9225d4(0x6a2)+':\x2011.'+_0x9225d4(0x4ef)+_0x9225d4(0x5f8)+_0x9225d4(0x659)+'label'+_0x9225d4(0x52e)+'ex:\x201'+';\x20col'+_0x9225d4(0x2e7)+_0x9225d4(0x44e)+'46,23'+'8,242'+',.75)'+_0x9225d4(0x335)+_0x9225d4(0x49a)+_0x9225d4(0x5e1)+_0x9225d4(0x30a)+_0x9225d4(0x49c)+_0x9225d4(0x299)+_0x9225d4(0x303)+_0x9225d4(0x3e8)+_0x9225d4(0x515)+'\x2010px'+';\x20opa'+'city:'+_0x9225d4(0x519)+_0x9225d4(0x5f8)+'\x20.sk-'+_0x9225d4(0x1b3)+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x9225d4(0x6e3)+'ve;\x20w'+_0x9225d4(0x1e2)+'\x2026px'+';\x20hei'+_0x9225d4(0x71a)+_0x9225d4(0x198)+'\x20bord'+'er:\x200'+_0x9225d4(0x210)+_0x9225d4(0x1ce)+_0x9225d4(0x17e)+':\x2099p'+_0x9225d4(0x3cd)+_0x9225d4(0x3d8)+_0x9225d4(0x608)+_0x9225d4(0x324)+_0x9225d4(0x6c9)+_0x9225d4(0x32f)+_0x9225d4(0x237)+_0x9225d4(0x674)+_0x9225d4(0x2fb)+'\x20poin'+_0x9225d4(0x4f7)+'flex:'+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x9225d4(0x265)+'tch::'+'after'+_0x9225d4(0x50f)+_0x9225d4(0x6fc)+_0x9225d4(0x691)+'\x20posi'+_0x9225d4(0x555)+_0x9225d4(0x3e2)+_0x9225d4(0x6c0)+_0x9225d4(0x40e)+_0x9225d4(0x41f)+_0x9225d4(0x58b)+_0x9225d4(0x52f)+';\x20wid'+_0x9225d4(0x61e)+_0x9225d4(0x4a2)+_0x9225d4(0x261)+_0x9225d4(0x1a3)+';\x20bor'+_0x9225d4(0x1ce)+'adius'+':\x2050%'+_0x9225d4(0x439)+'kgrou'+_0x9225d4(0x589)+_0x9225d4(0x44e)+'55,25'+'5,255'+_0x9225d4(0x429)+';\x20tra'+_0x9225d4(0x3fb)+'on:\x20l'+_0x9225d4(0x204)+'2s,\x20b'+'ackgr'+_0x9225d4(0x3f9)+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x9225d4(0x1b3)+_0x9225d4(0x710)+'a-che'+_0x9225d4(0x48e)+_0x9225d4(0x53e)+_0x9225d4(0x339)+'backg'+'round'+':\x20rgb')+('a(255'+_0x9225d4(0x6eb)+_0x9225d4(0x1ae)+_0x9225d4(0x545)+_0x9225d4(0x5f8)+'\x20.sk-'+_0x9225d4(0x1b3)+_0x9225d4(0x710)+'a-che'+_0x9225d4(0x48e)+'\x22true'+_0x9225d4(0x5bd)+_0x9225d4(0x29e)+_0x9225d4(0x528)+'t:\x2015'+'px;\x20b'+'ackgr'+_0x9225d4(0x68f)+'\x20#ff6'+'b9d;\x20'+_0x9225d4(0x5f8)+_0x9225d4(0x659)+_0x9225d4(0x44d)+'\x20{\x20ba'+_0x9225d4(0x3d8)+'und:\x20'+'rgba('+_0x9225d4(0x6c9)+_0x9225d4(0x32f)+'5,.03'+_0x9225d4(0x44c)+'order'+':\x200;\x20'+_0x9225d4(0x2c9)+_0x9225d4(0x70f)+'ius:\x20'+_0x9225d4(0x2bf)+_0x9225d4(0x38b)+':\x20#f6'+'eef2;'+_0x9225d4(0x44b)+'ing:\x20'+_0x9225d4(0x21e)+_0x9225d4(0x4b1)+_0x9225d4(0x5d2)+_0x9225d4(0x452)+'11.5p'+_0x9225d4(0x3e7)+'tline'+_0x9225d4(0x462)+'e;\x20bo'+_0x9225d4(0x375)+_0x9225d4(0x6b0)+'inset'+_0x9225d4(0x4fe)+'0\x201px'+'\x20rgba'+'(255,'+'255,2'+_0x9225d4(0x2f0)+_0x9225d4(0x401)+_0x9225d4(0x4fb)+'.sk-f'+_0x9225d4(0x4eb)+'optio'+'n\x20{\x20b'+_0x9225d4(0x2f4)+_0x9225d4(0x68f)+'\x20#221'+'419;\x20'+_0x9225d4(0x5f8)+_0x9225d4(0x659)+'range'+_0x9225d4(0x5ea)+_0x9225d4(0x5f3)+':\x20fle'+_0x9225d4(0x1d1)+'ign-i'+'tems:'+_0x9225d4(0x6ad)+_0x9225d4(0x352)+_0x9225d4(0x554)+'px;\x20}'+_0x9225d4(0x4fb)+'.sk-s'+'lider'+_0x9225d4(0x625)+'ebkit'+_0x9225d4(0x70d)+_0x9225d4(0x337)+_0x9225d4(0x4e8)+_0x9225d4(0x726)+'ppear'+'ance:'+_0x9225d4(0x31b)+_0x9225d4(0x5ee)+'th:\x209'+_0x9225d4(0x407)+_0x9225d4(0x33f)+'t:\x208p'+_0x9225d4(0x3cd)+'ckgro'+'und:\x20'+'trans'+_0x9225d4(0x325)+_0x9225d4(0x2eb)+_0x9225d4(0x492)+_0x9225d4(0x3a7)+'ider:'+_0x9225d4(0x47e)+'kit-s'+'lider'+_0x9225d4(0x707)+'able-'+'track'+_0x9225d4(0x4e1)+_0x9225d4(0x2df)+_0x9225d4(0x698)+_0x9225d4(0x61d)+_0x9225d4(0x344)+_0x9225d4(0x4dd)+_0x9225d4(0x698)+_0x9225d4(0x217)+_0x9225d4(0x566)+_0x9225d4(0x290)+'near-'+_0x9225d4(0x574)+_0x9225d4(0x27e)+'ff6b9'+_0x9225d4(0x19c)+_0x9225d4(0x40c)+_0x9225d4(0x55d)+_0x9225d4(0x38c)+_0x9225d4(0x706)+',\x2050%'+_0x9225d4(0x591)+_0x9225d4(0x3bf)+_0x9225d4(0x32b)+_0x9225d4(0x2ba)+'ba(25'+'5,255'+',255,'+_0x9225d4(0x42d)+_0x9225d4(0x3b5)+'\x20\x20.sk'+'-slid'+'er::-'+_0x9225d4(0x1b0)+_0x9225d4(0x214)+'der-t'+'humb\x20'+_0x9225d4(0x367)+'bkit-'+_0x9225d4(0x33d)+_0x9225d4(0x54d)+_0x9225d4(0x462)+_0x9225d4(0x356)+_0x9225d4(0x5c6)+_0x9225d4(0x2bf)+'heigh'+'t:\x206p'+_0x9225d4(0x4c4)+'rgin-'+_0x9225d4(0x34d)+_0x9225d4(0x4ca)+_0x9225d4(0x61d)+_0x9225d4(0x344)+_0x9225d4(0x4dd)+_0x9225d4(0x40a)+'\x20back'+_0x9225d4(0x566)+_0x9225d4(0x58e)+'f6b9d'+_0x9225d4(0x335)+'\x20\x20\x20.s'+_0x9225d4(0x6f0)+_0x9225d4(0x1b1)+_0x9225d4(0x5a6)+_0x9225d4(0x5ad)+_0x9225d4(0x666)+_0x9225d4(0x3e8)+'weigh'+'t:\x2060'+_0x9225d4(0x2bc)+'n-wid'+_0x9225d4(0x55f)+_0x9225d4(0x469)+'text-'+_0x9225d4(0x505)+':\x20rig'+'ht;\x20c'+'olor:'+_0x9225d4(0x1fd)+'(246,'+_0x9225d4(0x2d9)+_0x9225d4(0x286)+_0x9225d4(0x494)+'\x20\x20\x20\x20.'+_0x9225d4(0x620)+_0x9225d4(0x33c))+('\x20widt'+'h:\x2034'+_0x9225d4(0x4a2)+'eight'+':\x2022p'+_0x9225d4(0x667)+'rder:'+_0x9225d4(0x680)+_0x9225d4(0x646)+_0x9225d4(0x37a)+'us:\x206'+'px;\x20b'+'ackgr'+_0x9225d4(0x68f)+_0x9225d4(0x31b)+';\x20pad'+'ding:'+_0x9225d4(0x423)+'ursor'+':\x20poi'+'nter;'+_0x9225d4(0x3b5)+_0x9225d4(0x1ca)+'-note'+_0x9225d4(0x1b1)+'nt-si'+'ze:\x201'+_0x9225d4(0x666)+_0x9225d4(0x38b)+_0x9225d4(0x4d2)+'a(246'+',238,'+'242,.'+_0x9225d4(0x281)+'addin'+_0x9225d4(0x432)+_0x9225d4(0x2d0)+_0x9225d4(0x5f8)+_0x9225d4(0x659)+_0x9225d4(0x41b)+_0x9225d4(0x4aa)+_0x9225d4(0x28c)+_0x9225d4(0x3c8)+_0x9225d4(0x29f)+_0x9225d4(0x335)+_0x9225d4(0x49a)+_0x9225d4(0x614)+_0x9225d4(0x4f2)+_0x9225d4(0x512)+'elf:\x20'+'flex-'+'start'+_0x9225d4(0x210)+'der:\x20'+'0;\x20bo'+_0x9225d4(0x584)+'radiu'+_0x9225d4(0x4a6)+_0x9225d4(0x3e1)+_0x9225d4(0x6c2)+_0x9225d4(0x1a3)+'\x2016px'+_0x9225d4(0x439)+'kgrou'+_0x9225d4(0x1d7)+'ff6b9'+_0x9225d4(0x39d)+'lor:\x20'+'#fff;'+_0x9225d4(0x4fc)+'-size'+_0x9225d4(0x70b)+_0x9225d4(0x4ef)+_0x9225d4(0x3e8)+_0x9225d4(0x5fb)+_0x9225d4(0x448)+'0;\x20cu'+_0x9225d4(0x2fb)+_0x9225d4(0x455)+'ter;\x20'+'}\x0a\x20\x20\x20'+_0x9225d4(0x659)+_0x9225d4(0x623)+'over\x20'+'{\x20fil'+'ter:\x20'+_0x9225d4(0x653)+_0x9225d4(0x412)+'(1.1)'+';\x20}\x0a\x20'+_0x9225d4(0x6ae));window[_0x9225d4(0x384)+'entLi'+_0x9225d4(0x63a)+'r']('keydo'+'wn',_0x47c368=>{var _0x5f2a21=_0x9225d4;if(_0x5f2a21(0x32a)===_0x5f2a21(0x32a))_0x4f19d2[_0x5f2a21(0x2c2)](_0x47c368['code'],_0x5f2a21(0x4b9)+'t')&&(_0x4f19d2[_0x5f2a21(0x408)]!=='CnQGP'?(_0x47c368['preve'+_0x5f2a21(0x676)+_0x5f2a21(0x5d3)](),_0x4f19d2[_0x5f2a21(0x5c4)](_0x15d526)):(_0x2a6937['keyst'+_0x5f2a21(0x326)]=_0x286bcd,_0x4f19d2[_0x5f2a21(0x67a)](_0x52d4e2)));else{var _0x3c77d9={'cdmTo':'shoot'+_0x5f2a21(0x5a4),'ibBkd':function(_0xf54253,_0x288305,_0x5d2bb8,_0x1a13d6,_0x1064fb){return _0xf54253(_0x288305,_0x5d2bb8,_0x1a13d6,_0x1064fb);},'fmsxr':_0x5f2a21(0x365)+_0x5f2a21(0x436)};if(_0x500f1c['Unity'+_0x5f2a21(0x3a5)+_0x5f2a21(0x5e5)]&&!_0xe212f[_0x5f2a21(0x1f0)+_0x5f2a21(0x1ba)]){var _0x5b734d=_0x4f19d2['QTduR']['split']('|'),_0x2faa28=0x1baf+-0x553+-0x165c;while(!![]){switch(_0x5b734d[_0x2faa28++]){case'0':_0x4e9fe1=_0x4b1c0e[_0x5f2a21(0x40d)+_0x5f2a21(0x3a5)+_0x5f2a21(0x5e5)][_0x5f2a21(0x3bc)+'Wrapp'+'er'];continue;case'1':if(_0x5015cc[_0x5f2a21(0x264)+'od'])_0x4f19d2[_0x5f2a21(0x363)](_0x2576bb,_0x4f19d2['wtvzw'],_0x5f2a21(0x5a1)+'th',_0x4f19d2[_0x5f2a21(0x23d)],[_0x4f19d2['cEnQS'],_0x4f19d2[_0x5f2a21(0x6e4)]],_0x4fea43,_0x424e41,!!_0xf688e3[_0x5f2a21(0x4a8)]);continue;case'2':if(_0x36abb5['hookC'+'aptur'+'e'])_0x3dbd1e('capMo'+'ve',_0x5f2a21(0x17f)+'nPlat'+_0x5f2a21(0x67b)+_0x5f2a21(0x55b)+_0x5f2a21(0x2ae)+'Movem'+'ent',_0x5f2a21(0x41d)+_0x5f2a21(0x1c1),['i32'],_0x4f19d2['cEnQS'],(_0x705d87,_0x5c9d2a)=>{var _0x4af822=_0x5f2a21;_0x3c77d9[_0x4af822(0x62b)](_0x5288c8,_0x3ff387,_0x5c9d2a,_0x5208e2,_0x3c77d9[_0x4af822(0x181)]);},!![]);continue;case'3':_0x2eb007=_0xfde7e2['Unity'+_0x5f2a21(0x3a5)+_0x5f2a21(0x5e5)][_0x5f2a21(0x28f)+'me'][_0x5f2a21(0x301)+_0x5f2a21(0x531)+'in']({'name':_0x5f2a21(0x4b7)+'aKour','version':_0x4f19d2['CLNnX'],'referencedAssemblies':['Assem'+_0x5f2a21(0x571)+'Sharp'+_0x5f2a21(0x63e)]});continue;case'4':if(_0x349380[_0x5f2a21(0x6b6)+_0x5f2a21(0x64e)+'e'])_0x3610d7(_0x4f19d2[_0x5f2a21(0x64c)],_0x5f2a21(0x6d6)+'ter',_0x4f19d2[_0x5f2a21(0x539)],[_0x5f2a21(0x23e),_0x4f19d2['cEnQS']],_0x4e5b88,(_0xe5102e,_0x484950)=>{var _0x49d93=_0x5f2a21;_0x46401a(_0x1d52d7,_0x484950,_0x269a71,_0x3c77d9[_0x49d93(0x5a3)]);},!![]);continue;case'5':if(_0x235159[_0x5f2a21(0x2cf)+'oReco'+'il'])_0x317892(_0x4f19d2[_0x5f2a21(0x525)],_0x5f2a21(0x17f)+'nPlat'+'forms'+_0x5f2a21(0x55b)+_0x5f2a21(0x2ae)+_0x5f2a21(0x364)+'lMoti'+'on','Tick',['i32'],_0x5e58ff,_0x565612,!!_0x163f31['noRec'+_0x5f2a21(0x6c7)]);continue;case'6':if(_0x53a2e9['hookG'+'odDie'])_0x288bcc(_0x5f2a21(0x272)+'e',_0x4f19d2[_0x5f2a21(0x46e)],'Local'+_0x5f2a21(0x183),['i32',_0x5f2a21(0x23e),_0x4f19d2[_0x5f2a21(0x6e4)],_0x4f19d2[_0x5f2a21(0x6e4)],_0x4f19d2[_0x5f2a21(0x6e4)]],_0x1ea3b3,_0x1a8781,!!_0x591e15[_0x5f2a21(0x4a8)]);continue;}break;}}}},!![]);var _0xcaaf5f=document[_0x9225d4(0x301)+'eElem'+_0x9225d4(0x3ba)](_0x9225d4(0x33e));_0xcaaf5f[_0x9225d4(0x25d)][_0x9225d4(0x1cf)+'xt']=_0x5668c5['QqgjZ'],_0xcaaf5f['inner'+_0x9225d4(0x59a)]=_0x5668c5[_0x9225d4(0x445)],_0xcaaf5f[_0x9225d4(0x327)]=_0x9225d4(0x4b7)+_0x9225d4(0x69b)+'r',_0xcaaf5f[_0x9225d4(0x224)+_0x9225d4(0x578)+'er']=()=>_0xcaaf5f[_0x9225d4(0x25d)][_0x9225d4(0x3c2)+'ty']='1',_0xcaaf5f[_0x9225d4(0x224)+_0x9225d4(0x521)+'ve']=()=>_0xcaaf5f['style']['opaci'+'ty']=_0x9225d4(0x291),_0xcaaf5f[_0x9225d4(0x1fe)+'ck']=_0x54dd6f=>{var _0x3432c4=_0x9225d4;_0x54dd6f['stopP'+'ropag'+_0x3432c4(0x4cd)](),_0x15d526();},document[_0x9225d4(0x449)][_0x9225d4(0x6a9)+_0x9225d4(0x36a)+'d'](_0xcaaf5f),_0x5668c5[_0x9225d4(0x5da)](_0xbaa06d),requestAnimationFrame(_0x23179e),console['log'](_0x5668c5['zSNhL'],_0x301c94[_0x9225d4(0x50b)]);});})()));
