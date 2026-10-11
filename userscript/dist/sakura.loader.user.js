// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.7.0
// @description  Sakura Client — Clutcher.io full client, AstraStrike clean overlay, Overtide/KourStrike UWMK menu, Cookie Clicker Sakura visual recode
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
// @match        https://orteil.dashnet.org/cookieclicker*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

// ── kourstrike.io: UWMK + payload, inlined ──────────────────────────────
// Must execute at document-start, before Unity's boot scripts compile the
// WASM. UWMK is left un-obfuscated (third-party webpack bundle — obfuscating
// it is slow and risks breaking it); our payload is obfuscated above.
if (/(^|\.)(kourstrike\.io|overtide\.io)$/.test(location.hostname || "")) {
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
function _0x3428(_0x2c1686,_0x268bc7){_0x2c1686=_0x2c1686-(0x14ec+-0x3*-0x10a+0xbd*-0x1f);var _0x4e8e0c=_0x2a37();var _0x89a546=_0x4e8e0c[_0x2c1686];if(_0x3428['kmqtwq']===undefined){var _0x47a23d=function(_0x3cfabd){var _0x565aa3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5147a4='',_0x4837bd='';for(var _0x4b3295=0x16f*0x11+0x206b+-0x38ca,_0x3f65e3,_0x3625a4,_0x510c6a=0x1*-0x1799+0x235c*0x1+-0xbc3;_0x3625a4=_0x3cfabd['charAt'](_0x510c6a++);~_0x3625a4&&(_0x3f65e3=_0x4b3295%(0x2568+0x9f+-0x2603)?_0x3f65e3*(-0x1d1b+-0x128d+0x2fe8)+_0x3625a4:_0x3625a4,_0x4b3295++%(-0x21ac+0x24f6+-0x346*0x1))?_0x5147a4+=String['fromCharCode'](-0x1f36+0x499*-0x5+0x13a*0x2d&_0x3f65e3>>(-(-0x63*-0xb+0x1559+-0x1998)*_0x4b3295&0x1*0x22ed+0x1da*0xb+-0x3745)):0x1*-0xe9b+0x1ab0+-0xc15*0x1){_0x3625a4=_0x565aa3['indexOf'](_0x3625a4);}for(var _0x38ab8d=0x3d*0xa1+-0x1aa*0xd+0x10bb*-0x1,_0x5304b2=_0x5147a4['length'];_0x38ab8d<_0x5304b2;_0x38ab8d++){_0x4837bd+='%'+('00'+_0x5147a4['charCodeAt'](_0x38ab8d)['toString'](-0xcca+0x2*0xda+-0x593*-0x2))['slice'](-(-0x23a*0x7+-0x20e6+0x307e));}return decodeURIComponent(_0x4837bd);};_0x3428['dyuefe']=_0x47a23d,_0x3428['nrZLsM']={},_0x3428['kmqtwq']=!![];}var _0x39c603=_0x4e8e0c[-0x1386+0x26c0+-0x133a],_0x408d2c=_0x2c1686+_0x39c603,_0x45576c=_0x3428['nrZLsM'][_0x408d2c];return!_0x45576c?(_0x89a546=_0x3428['dyuefe'](_0x89a546),_0x3428['nrZLsM'][_0x408d2c]=_0x89a546):_0x89a546=_0x45576c,_0x89a546;}(function(_0x209f7c,_0x28f04a){var _0x265bc5=_0x3428,_0x31d563=_0x209f7c();while(!![]){try{var _0x37f55a=parseInt(_0x265bc5(0x686))/(0x2683+0x7*0x1d9+-0x1*0x3371)*(parseInt(_0x265bc5(0x561))/(0x1f93+-0x25e0+0x143*0x5))+-parseInt(_0x265bc5(0x13c))/(-0x128d*-0x1+-0xf2b+0x1*-0x35f)*(parseInt(_0x265bc5(0x372))/(0x20fa+-0x16f*-0xd+-0x165*0x25))+-parseInt(_0x265bc5(0x456))/(0xd*0x10f+-0x1005+0x35*0xb)*(parseInt(_0x265bc5(0x6a8))/(-0x1*-0x70c+0x255a+0x58c*-0x8))+parseInt(_0x265bc5(0x4fe))/(0x145e+0x7*0x2d3+-0xa07*0x4)+-parseInt(_0x265bc5(0x412))/(-0x74*0x24+0x83+0x3*0x547)*(parseInt(_0x265bc5(0x214))/(-0x1*0x23da+-0xb*-0x19f+-0x907*-0x2))+parseInt(_0x265bc5(0x237))/(-0x97*0x27+0xf*-0x1d2+0x3259)+-parseInt(_0x265bc5(0x258))/(-0x2216+0x9c0+-0x1*-0x1861);if(_0x37f55a===_0x28f04a)break;else _0x31d563['push'](_0x31d563['shift']());}catch(_0xf76bed){_0x31d563['push'](_0x31d563['shift']());}}}(_0x2a37,-0x17e24d+-0x1*-0x29bb7+0x232e04),((()=>{'use strict';var _0x8d3615=_0x3428,_0x418dfe={'ITEqW':function(_0x1267b0,_0x2fdc6f,_0x2c24fc,_0x15e5ad){return _0x1267b0(_0x2fdc6f,_0x2c24fc,_0x15e5ad);},'HhXru':function(_0x4dc604,_0x21bde1,_0x392c6f){return _0x4dc604(_0x21bde1,_0x392c6f);},'qXrva':_0x8d3615(0x1f3),'yqIdk':function(_0x16b061,_0x616f8f){return _0x16b061+_0x616f8f;},'LBmIZ':function(_0x25303a,_0x13384b){return _0x25303a(_0x13384b);},'Bhmov':_0x8d3615(0x20c),'rMoMg':function(_0x5744ea,_0x1de4ba){return _0x5744ea===_0x1de4ba;},'GoeBG':function(_0x49bf83){return _0x49bf83();},'cDmnH':function(_0x470bd6,_0x248ae7){return _0x470bd6(_0x248ae7);},'LEpSv':function(_0x2fbae7,_0x28367c){return _0x2fbae7===_0x28367c;},'uIbhe':_0x8d3615(0x578),'VSYOF':function(_0x5b6d3b,_0x3ffb6e){return _0x5b6d3b===_0x3ffb6e;},'yjndX':_0x8d3615(0x364),'YoIbh':function(_0x1eb2b7,_0x2e172f){return _0x1eb2b7!==_0x2e172f;},'vQNZF':_0x8d3615(0x375),'mnimL':_0x8d3615(0x267),'CRUJo':function(_0x15f9d5,_0x2e2890,_0x554b81,_0xf02cc4,_0x359f8a){return _0x15f9d5(_0x2e2890,_0x554b81,_0xf02cc4,_0x359f8a);},'Rtfhx':_0x8d3615(0x2c2),'FzEfl':_0x8d3615(0x488)+_0x8d3615(0x4d5),'qBCWu':_0x8d3615(0x2d1),'xnwMt':'2|0|3'+'|1|4','oCdLh':'[saku'+_0x8d3615(0x568)+_0x8d3615(0x24d)+_0x8d3615(0x26e)+_0x8d3615(0x4d1)+'iled:','FMLQj':_0x8d3615(0x5bf),'YGBAM':_0x8d3615(0x689),'GioAg':function(_0x260fb1,_0x5c0930,_0xb3e559,_0x589658,_0x448359){return _0x260fb1(_0x5c0930,_0xb3e559,_0x589658,_0x448359);},'ebcYK':function(_0x5b5256,_0x2e52d7){return _0x5b5256-_0x2e52d7;},'qEoTO':function(_0xe59e2c,_0x45c7b1){return _0xe59e2c*_0x45c7b1;},'GDOty':function(_0x542c06,_0x239cc0){return _0x542c06+_0x239cc0;},'RVjkV':function(_0x34d949,_0xde76e2){return _0x34d949-_0xde76e2;},'gWlHk':function(_0x3428d2,_0x5e62dc){return _0x3428d2===_0x5e62dc;},'oGYgc':'RvHqm','Ghoqj':function(_0x449d75,_0x337edf){return _0x449d75===_0x337edf;},'OyfDg':'ciCra','LGPXq':function(_0x1bbc8e){return _0x1bbc8e();},'SYxqq':_0x8d3615(0x6ed),'QQpuj':function(_0x4c3fbf,_0x1345e4){return _0x4c3fbf/_0x1345e4;},'mqsNy':function(_0x408ec8,_0x4274ac){return _0x408ec8(_0x4274ac);},'KMnJC':_0x8d3615(0x20b),'OxYaw':function(_0xe6b183,_0x4cc2e0){return _0xe6b183!==_0x4cc2e0;},'ANSTn':function(_0x2a8c83,_0x1a8fb8,_0x38b9a0,_0x52077f,_0x5a3a66){return _0x2a8c83(_0x1a8fb8,_0x38b9a0,_0x52077f,_0x5a3a66);},'jZgcS':function(_0x6b7a0,_0xd8d93,_0x34721c,_0x33bd22,_0x4add68){return _0x6b7a0(_0xd8d93,_0x34721c,_0x33bd22,_0x4add68);},'FuMme':function(_0x19ebf3,_0x5b8238){return _0x19ebf3!==_0x5b8238;},'ogXRt':'zunSP','llVCN':function(_0x12311a,_0x334de6,_0x46041f,_0x330ef8,_0x35d71f){return _0x12311a(_0x334de6,_0x46041f,_0x330ef8,_0x35d71f);},'pVsNg':_0x8d3615(0x1ea),'JWLIw':function(_0x3919f3,_0x115134,_0x38b024,_0x112670,_0x6c7d64){return _0x3919f3(_0x115134,_0x38b024,_0x112670,_0x6c7d64);},'uHpUC':_0x8d3615(0x257),'OWCpU':function(_0x955e47,_0x478b80){return _0x955e47+_0x478b80;},'LqASc':function(_0x144c7e,_0x284462){return _0x144c7e+_0x284462;},'iFbwx':_0x8d3615(0x1fe),'NDrAf':_0x8d3615(0x52c),'JjJso':_0x8d3615(0x1fe)+'down','eOCFH':function(_0x3ec91f,_0x43c854,_0x9db162,_0x373b38,_0x38bd40,_0x456e5f,_0x3e2950,_0x4a7a50){return _0x3ec91f(_0x43c854,_0x9db162,_0x373b38,_0x38bd40,_0x456e5f,_0x3e2950,_0x4a7a50);},'RWbxJ':_0x8d3615(0x3fb)+'nPlat'+_0x8d3615(0x2cc)+'.Over'+'tide.'+'Movem'+_0x8d3615(0x2b9),'OImnk':function(_0xed2ccb,_0x2ebc09,_0x3e5bf4,_0x6a315f,_0x10dcb7,_0x1dce79,_0x1ac320,_0x4f4be7){return _0xed2ccb(_0x2ebc09,_0x3e5bf4,_0x6a315f,_0x10dcb7,_0x1dce79,_0x1ac320,_0x4f4be7);},'IAOnx':_0x8d3615(0x3f1)+_0x8d3615(0x68d),'vFrOF':_0x8d3615(0x3fb)+_0x8d3615(0x45a)+_0x8d3615(0x2cc)+'.Over'+_0x8d3615(0x461)+'Recoi'+_0x8d3615(0x15f)+'on','otGnS':_0x8d3615(0x472),'hTYmk':'OHeal'+'th','DpNyQ':'capSh'+_0x8d3615(0x503),'pkykp':'SetGa'+_0x8d3615(0x6a5)+'ning','gowqR':'Sakur'+_0x8d3615(0x565),'ZuzYX':_0x8d3615(0x6bb),'owbnO':function(_0x213242,_0x1656b3){return _0x213242===_0x1656b3;},'miGLq':_0x8d3615(0x41f),'NvAYz':_0x8d3615(0x27d),'INgSa':'DOMCo'+_0x8d3615(0x656)+'Loade'+'d','YAmRp':function(_0x5d9aa7,_0x385183){return _0x5d9aa7!==_0x385183;},'mArWP':'kour-'+'io_30'+_0x8d3615(0x6ca)+_0x8d3615(0x59c)+'nt','srMlr':_0x8d3615(0x444)+_0x8d3615(0x673)+_0x8d3615(0x29d)+_0x8d3615(0x49d)+'t','lAeVs':function(_0xe66a9f,_0x4220d9){return _0xe66a9f===_0x4220d9;},'OoZye':_0x8d3615(0x53a)+_0x8d3615(0x6cc)+_0x8d3615(0x6e0)+'s','APSQE':function(_0x320600,_0x13b3fa){return _0x320600<_0x13b3fa;},'ESeDb':function(_0x26a77c,_0x2d3d54){return _0x26a77c===_0x2d3d54;},'wPMMD':_0x8d3615(0x444)+_0x8d3615(0x38f),'stEEt':_0x8d3615(0x630)+'S','oGeKb':function(_0x3c7326,_0x96ee59){return _0x3c7326!==_0x96ee59;},'NSEbi':function(_0x1426f9,_0x3b565d){return _0x1426f9===_0x3b565d;},'HvNds':function(_0x9ca5f5,_0x4bfe74){return _0x9ca5f5*_0x4bfe74;},'zeMvY':_0x8d3615(0x192)+'255,2'+_0x8d3615(0x68b)+_0x8d3615(0x555)+')','EUxcF':_0x8d3615(0x435),'sYncM':_0x8d3615(0x42d)+'-sans'+_0x8d3615(0x57b)+_0x8d3615(0x3f6)+'tem-u'+'i,san'+_0x8d3615(0x2da)+'if','QCKyE':_0x8d3615(0x4c5),'NRMEd':function(_0x5b8f50,_0x11c4e4){return _0x5b8f50+_0x11c4e4;},'DNEKX':function(_0x333c63,_0xf07b1b){return _0x333c63+_0xf07b1b;},'OLIxI':function(_0x1e8f8b,_0x57c5da){return _0x1e8f8b/_0x57c5da;},'gtlpZ':function(_0x36dd77,_0x3efd74){return _0x36dd77(_0x3efd74);},'EgiMj':_0x8d3615(0x390),'SEjlN':function(_0x690756,_0x23f5a7){return _0x690756(_0x23f5a7);},'YJSFW':function(_0x4e62d4,_0x528ea3){return _0x4e62d4*_0x528ea3;},'EcKYl':function(_0x3b0ca8,_0x4863de){return _0x3b0ca8===_0x4863de;},'wEsBA':function(_0x273e37,_0x3f86b3){return _0x273e37/_0x3f86b3;},'HjuKj':function(_0x21ca81,_0x16e366){return _0x21ca81/_0x16e366;},'wvYux':function(_0x58d8d4,_0x51c83d){return _0x58d8d4-_0x51c83d;},'UVbCm':function(_0x85ced0,_0x1fc15f,_0x2b3f50,_0x8f7d82,_0x618f37,_0x519620,_0x1e65b1,_0x1fb16e){return _0x85ced0(_0x1fc15f,_0x2b3f50,_0x8f7d82,_0x618f37,_0x519620,_0x1e65b1,_0x1fb16e);},'SSiSc':_0x8d3615(0x1fe)+'1','ZFpBA':function(_0x16a070,_0x5d9aca,_0xbd1863,_0x164e23,_0x40d66d,_0x560de1,_0x33dc13){return _0x16a070(_0x5d9aca,_0xbd1863,_0x164e23,_0x40d66d,_0x560de1,_0x33dc13);},'QyOOr':_0x8d3615(0x225),'ldcQk':function(_0x5c2f40,_0x1d01dd){return _0x5c2f40/_0x1d01dd;},'vygSF':function(_0x612a6f,_0x1800f7){return _0x612a6f/_0x1800f7;},'tvbob':'#ff6b'+'9d','MTxvV':function(_0x1106c4,_0x553380){return _0x1106c4*_0x553380;},'XuBTt':function(_0x5a7c39,_0x4feb68){return _0x5a7c39*_0x4feb68;},'jcNSS':function(_0x24e49d,_0xfcb0b0){return _0x24e49d-_0xfcb0b0;},'rrBiB':function(_0x37339c,_0x1f4d8c){return _0x37339c+_0x1f4d8c;},'Mlsvt':function(_0x5d08be,_0x2b6f56){return _0x5d08be+_0x2b6f56;},'lkVtI':function(_0x4d1afd,_0x3644f){return _0x4d1afd*_0x3644f;},'maIKD':function(_0x14da03,_0x40ef11){return _0x14da03===_0x40ef11;},'NpEme':_0x8d3615(0x67b)+_0x8d3615(0x477)+'-\x20ove'+_0x8d3615(0x523)+_0x8d3615(0x41c)+_0x8d3615(0x2ba)+_0x8d3615(0x55f)+_0x8d3615(0x4e7)+_0x8d3615(0x170)+'\x20exit'+')','OxNPf':_0x8d3615(0x1ac),'mZqpf':_0x8d3615(0x590),'qyWGx':_0x8d3615(0x1ef)+_0x8d3615(0x1ff)+'i-mon'+'ospac'+_0x8d3615(0x1b0)+'ospac'+'e','sIppq':_0x8d3615(0x517),'jAzCE':'top','fPUVI':_0x8d3615(0x2aa)+_0x8d3615(0x440)+_0x8d3615(0x5a6)+'1','ZaiIv':'\x20FPS','itiSC':_0x8d3615(0x4d9)+'ng\x20fo'+_0x8d3615(0x333)+'e…','izheU':_0x8d3615(0x192)+_0x8d3615(0x218)+'80,19'+'0,0.6'+')','TNmfN':function(_0x3289fc,_0x5043c5){return _0x3289fc===_0x5043c5;},'PFsTE':_0x8d3615(0x1f0),'zKatI':'sk-ra'+_0x8d3615(0x57a),'nAZYK':_0x8d3615(0x6f6)+'lor','AjlBQ':_0x8d3615(0x604),'QlFvo':'span','PcYbm':_0x8d3615(0x171)+'bel','mWVws':_0x8d3615(0x202)+_0x8d3615(0x5d6)+'ad','YUJGu':'sk-ca'+_0x8d3615(0x2d6)+_0x8d3615(0x4b0),'CVUdW':'stron'+'g','NSrjh':_0x8d3615(0x37b),'IkiBi':'2|4|6'+'|0|3|'+'7|1|5','uZEqW':'sk-mb'+'ody','bkNtI':function(_0x3aef00){return _0x3aef00();},'faXoZ':_0x8d3615(0x192)+'255,2'+_0x8d3615(0x68b)+_0x8d3615(0x646)+'5)','FXZpu':function(_0x3d7a93,_0x185ab0){return _0x3d7a93===_0x185ab0;},'Nvneg':function(_0xc4aa83,_0xc59065){return _0xc4aa83(_0xc59065);},'fjFix':'BxagK','yeMyd':_0x8d3615(0x130)+'check'+'ed','bKwmr':'1|2|3'+_0x8d3615(0x5d7)+'6|5','vOQVO':_0x8d3615(0x54f),'pKSLh':_0x8d3615(0x1ba),'yFmha':function(_0x6024e5,_0x4f00fd){return _0x6024e5===_0x4f00fd;},'yoUVw':_0x8d3615(0x29b)+_0x8d3615(0x4cb),'IIWuQ':_0x8d3615(0x4a7),'yCtXS':function(_0x37d9ff,_0x5445ee){return _0x37d9ff+_0x5445ee;},'gexNx':_0x8d3615(0x282)+_0x8d3615(0x36e),'jsxQC':_0x8d3615(0x5de),'rUVgF':function(_0x6db9c3,_0x3f451c){return _0x6db9c3===_0x3f451c;},'VEOgh':'KeyW','BhmkQ':function(_0x2c2e5a,_0x3a8410){return _0x2c2e5a+_0x3a8410;},'VVeGN':'1|3|2'+'|5|4|'+'0','hUBpo':'God\x20M'+_0x8d3615(0x35e),'DMehG':_0x8d3615(0x272)+_0x8d3615(0x373)+'\x20[EXP'+']','pxCXu':function(_0x2080a2,_0x4503ec,_0x206379,_0x471da1,_0x139dec,_0x3869ed){return _0x2080a2(_0x4503ec,_0x206379,_0x471da1,_0x139dec,_0x3869ed);},'hdhKg':function(_0x312b80,_0x38ae3b,_0x503c1f,_0x343e5b){return _0x312b80(_0x38ae3b,_0x503c1f,_0x343e5b);},'xYsOb':_0x8d3615(0x69c)+'l','hWbgq':_0x8d3615(0x532)+'+\x20LMB'+'/RMB\x20'+'+\x20Spa'+'ce\x20ov'+_0x8d3615(0x624)+'.','ExOpm':_0x8d3615(0x422),'CrwzJ':function(_0x404c52,_0x34bee8,_0x5a1d2a,_0x2fc99c,_0x493d4a,_0x236990){return _0x404c52(_0x34bee8,_0x5a1d2a,_0x2fc99c,_0x493d4a,_0x236990);},'ojLqK':'No\x20en'+'emy\x20c'+_0x8d3615(0x4df)+_0x8d3615(0x20e)+_0x8d3615(0x189)+'ild\x20h'+_0x8d3615(0x615)+_0x8d3615(0x468)+_0x8d3615(0x2ce)+_0x8d3615(0x5b1)+_0x8d3615(0x589)+'o\x20pig'+'gybac'+_0x8d3615(0x23a),'FirEu':'Skips'+'\x20UWMK'+_0x8d3615(0x56d)+_0x8d3615(0x1f1)+'—\x20no\x20'+_0x8d3615(0x144)+_0x8d3615(0x457)+_0x8d3615(0x455)+'\x20this'+_0x8d3615(0x266)+_0x8d3615(0x295)+'s\x20won'+_0x8d3615(0x1f9)+_0x8d3615(0x65f),'yIUyP':_0x8d3615(0x3e7)+'es\x20on'+_0x8d3615(0x216)+_0x8d3615(0x5c8)+'f\x20mat'+'ches\x20'+_0x8d3615(0x2d2)+_0x8d3615(0x280)+'fe\x20mo'+'de,\x20t'+'he\x20fr'+_0x8d3615(0x5c0)+'is\x20ho'+'ok-re'+_0x8d3615(0x5ed)+'\x20—\x20te'+_0x8d3615(0x501)+'\x20the\x20'+_0x8d3615(0x457)+'-appl'+_0x8d3615(0x4e2)+'ount.','UjLvT':_0x8d3615(0x525)+'les\x20C'+'odeSt'+'age\x20d'+'etect'+_0x8d3615(0x5c5)+_0x8d3615(0x12c)+'rtup\x20'+_0x8d3615(0x417)+_0x8d3615(0x518)+_0x8d3615(0x58c)+_0x8d3615(0x478)+'\x20Keep'+'\x20ON.','fgAHN':_0x8d3615(0x420)+'r','bQvhM':_0x8d3615(0x63b)+_0x8d3615(0x134)+'0|3|6'+_0x8d3615(0x29c),'Vgrzv':'UWMK\x20'+'MISSI'+_0x8d3615(0x407)+_0x8d3615(0x681)+_0x8d3615(0x691)+'ly\x20(r'+_0x8d3615(0x5ea)+_0x8d3615(0x4c7)+_0x8d3615(0x678)+_0x8d3615(0x21f)+'ipt)','JNxem':_0x8d3615(0x43e)+'in','pulmp':'<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0x8d3615(0x47b)+_0x8d3615(0x608)+'\x20d=\x22M'+'6\x206l1'+_0x8d3615(0x4c4)+_0x8d3615(0x606)+_0x8d3615(0x31a)+_0x8d3615(0x12e)+'vg>','xbgpB':_0x8d3615(0x128),'WrAHP':function(_0x41e865,_0x4b8a7a){return _0x41e865+_0x4b8a7a;},'vGPoO':'posit'+_0x8d3615(0x42e)+_0x8d3615(0x64e)+'inset'+_0x8d3615(0x5a7)+_0x8d3615(0x188)+_0x8d3615(0x4f5)+_0x8d3615(0x617)+'t:100'+_0x8d3615(0x460)+'index'+':2147'+_0x8d3615(0x4e5)+_0x8d3615(0x3b1)+_0x8d3615(0x4ab)+_0x8d3615(0x2b5)+'s:non'+'e','eJtLZ':_0x8d3615(0x250),'vPLxQ':_0x8d3615(0x169)+'a.kou'+_0x8d3615(0x347)+'v1','KtXJE':_0x8d3615(0x4f1)+'t','lmCdP':_0x8d3615(0x61f)+'t','dZtYl':_0x8d3615(0x62d),'aaFgJ':'Move','NKQRG':_0x8d3615(0x2cd)+'y','hMwMR':_0x8d3615(0x5a4)+'wn','JMywn':'posit'+_0x8d3615(0x42e)+'ixed;'+_0x8d3615(0x182)+'2px;r'+'ight:'+_0x8d3615(0x3f5)+_0x8d3615(0x4a0)+_0x8d3615(0x3d1)+_0x8d3615(0x42f)+'646;c'+'ursor'+':poin'+_0x8d3615(0x53f)+_0x8d3615(0x6e9)+_0x8d3615(0x3a8)+_0x8d3615(0x617)+'t:26p'+_0x8d3615(0x154)+'city:'+_0x8d3615(0x612)+'ransi'+_0x8d3615(0x279)+_0x8d3615(0x1ae)+_0x8d3615(0x3cd)+'2s;po'+_0x8d3615(0x4f4)+_0x8d3615(0x335)+_0x8d3615(0x15d)+_0x8d3615(0x576)+_0x8d3615(0x33a)+_0x8d3615(0x4ed)+'shado'+'w(0\x200'+_0x8d3615(0x1e6)+_0x8d3615(0x192)+_0x8d3615(0x218)+_0x8d3615(0x14e)+_0x8d3615(0x1d5)+'))','WBdRG':_0x8d3615(0x1b7)+_0x8d3615(0x509)+'r','qWdDN':_0x8d3615(0x66a)+_0x8d3615(0x568)+_0x8d3615(0x4bf)+'enu\x20r'+'eady.'+'\x20UWMK'+':','YsdUy':'#ffb3'+'c6','HWBEC':_0x8d3615(0x43a),'qaKxU':'PgyUy','nXwpN':_0x8d3615(0x6d7)+'e','vOKTI':_0x8d3615(0x388)+'ve','qBaWC':_0x8d3615(0x66a)+'ra-ko'+_0x8d3615(0x4a2)+'WMK\x20i'+'nit\x20f'+_0x8d3615(0x3c2)+':','PYQoJ':function(_0xb25dca,_0x2f4270,_0x597930){return _0xb25dca(_0x2f4270,_0x597930);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x8d3615(0x1d3)](location[_0x8d3615(0x30f)+_0x8d3615(0x191)]||''))return;if(window['__SAK'+_0x8d3615(0x439)+_0x8d3615(0x1e8)])return;window['__SAK'+'URA_K'+'OUR__']=!![];var _0x19ff55=_0x418dfe[_0x8d3615(0x475)],_0x24d327=_0x418dfe[_0x8d3615(0x4a6)],_0xd10323={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x572c3c={..._0xd10323};try{if(_0x8d3615(0x1c4)===_0x418dfe[_0x8d3615(0x43c)]){var _0xe3d0bb=_0x418dfe['ITEqW'](_0x3d84be,_0x534997,_0x2496b7,_0x49e390);if(_0xe3d0bb!=null)_0x49875a(_0x15bb45,_0x174cc4,_0x24d49e,_0xe3d0bb*_0x2735d1);}else Object[_0x8d3615(0x611)+'n'](_0x572c3c,JSON['parse'](localStorage['getIt'+'em']('sakur'+_0x8d3615(0x296)+_0x8d3615(0x476))||'{}'));}catch(_0x1d8852){}function _0x4443a9(){var _0x3dd165=_0x8d3615;try{localStorage[_0x3dd165(0x24a)+'em'](_0x3dd165(0x169)+_0x3dd165(0x296)+'r.v1',JSON['strin'+'gify'](_0x572c3c));}catch(_0x4d6f4c){}}var _0x1d435c={'uwmk':!!window[_0x8d3615(0x638)+_0x8d3615(0x3a4)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x572c3c[_0x8d3615(0x63d)+'ode'],'lastError':''};try{'diEjx'===_0x418dfe[_0x8d3615(0x5d0)]?(_0x171ebd[_0x8d3615(0x290)+'le']=_0x36b188,_0x4ef550()):window[_0x8d3615(0x2bf)+_0x8d3615(0x53d)+_0x8d3615(0x438)+'r'](_0x8d3615(0x227),_0x1f640f=>{var _0x5765ae=_0x8d3615,_0x16b3fb={'dIzcT':function(_0x12c260,_0x1e4b66,_0x188780){var _0x2edb26=_0x3428;return _0x418dfe[_0x2edb26(0x35b)](_0x12c260,_0x1e4b66,_0x188780);}};try{if(_0x418dfe['qXrva']==='iHlRs')_0x5db308[_0x5765ae(0x602)]=_0x3e575a,_0x28c7cd(),_0x39751b(_0x5765ae(0x602),_0x4d7720),_0x16b3fb[_0x5765ae(0x607)](_0x5e3767,'godDi'+'e',_0x3c7c58);else{var _0x2f6faf=_0x1f640f&&(_0x1f640f['messa'+'ge']||_0x1f640f[_0x5765ae(0x227)]&&_0x1f640f[_0x5765ae(0x227)]['messa'+'ge'])||'unkno'+'wn';if(_0x1f640f&&_0x1f640f[_0x5765ae(0x2de)+_0x5765ae(0x191)])_0x2f6faf+=_0x418dfe['yqIdk']('\x20@\x20',_0x418dfe['LBmIZ'](String,_0x1f640f[_0x5765ae(0x2de)+'ame'])[_0x5765ae(0x1da)]('/')['pop']())+':'+(_0x1f640f[_0x5765ae(0x60f)+'o']||'?');_0x1d435c[_0x5765ae(0x505)+_0x5765ae(0x5d2)]=_0x418dfe[_0x5765ae(0x195)](String,_0x2f6faf)[_0x5765ae(0x240)](0x3ac+-0x1d*-0x112+-0x22b6,-0x1aef+0x1c8d*0x1+-0xfe);}}catch(_0x223e0f){}});}catch(_0x4b9b5e){}var _0x843712=null,_0x36e948=null,_0x513362={},_0x886c37=[],_0x3b0935=[],_0x4dfec0=new Map();function _0x1e416c(_0x2e4534,_0x177693){var _0x111c35=_0x8d3615;if(!_0x177693||_0x2e4534[_0x111c35(0x15b)+_0x111c35(0x25c)](_0x177693)||_0x2e4534[_0x111c35(0x3f2)+'h']>0xfc7+0x1010+-0x1f97)return;_0x2e4534['push'](_0x177693);}function _0x29ea00(_0x39f863,_0x423200,_0x4f5ca5,_0xfa3daa){var _0x3e5201=_0x8d3615,_0x497314=-0x246f+-0x21f*0x4+0x2ceb;try{_0x418dfe['Bhmov']==='JEJpm'?_0x497314=_0x423200&&_0x423200[_0x3e5201(0x25f)]?_0x423200['val']():0x3c9*0x6+0x620+-0x1cd6:(_0x57072c[_0x3e5201(0x17c)+'ct']=_0x40035b,_0x15dcae());}catch(_0x113737){}if(!_0x497314)return;_0x1e416c(_0x39f863,_0x497314),_0x4f5ca5[_0xfa3daa]=_0x39f863[_0x3e5201(0x3f2)+'h'];if(_0x418dfe[_0x3e5201(0x587)](_0xfa3daa,_0x3e5201(0x1e3)+'ents')&&_0x39f863['lengt'+'h']){var _0x3f586e=_0x513362['capMo'+'ve'];if(_0x3f586e)try{_0x3f586e['enabl'+'ed']=![];}catch(_0x50c0d6){}}}function _0x1e9b91(_0x4e815a,_0x13a9e3,_0x4089a9){var _0x28591c=_0x8d3615,_0x3cd891={'MkgvW':function(_0x352075,_0x396137){return _0x418dfe['cDmnH'](_0x352075,_0x396137);}};if(_0x28591c(0x4ca)!==_0x28591c(0x4ca))try{_0x59ee87[_0x28591c(0x19e)+'ed']=![];}catch(_0x216e15){}else{var _0xc3ed47=_0x4dfec0['get'](_0x4e815a);!_0xc3ed47&&(_0x418dfe[_0x28591c(0x5ee)]('jBtSu',_0x418dfe[_0x28591c(0x64c)])?(_0xc3ed47=new Map(),_0x4dfec0[_0x28591c(0x329)](_0x4e815a,_0xc3ed47)):(_0x1a9640['safeM'+'ode']=_0x65dbf,_0x418dfe[_0x28591c(0x2af)](_0x3b9ecc),_0x30a568[_0x28591c(0x3ba)+'d']()));if(!_0xc3ed47[_0x28591c(0x20a)](_0x13a9e3))try{var _0x4fc29d=new _0x843712(_0x4e815a)['readF'+'ield'](_0x13a9e3,_0x4089a9);_0xc3ed47[_0x28591c(0x329)](_0x13a9e3,_0x4fc29d!==undefined?_0x4fc29d['val']():null);}catch(_0x4faf8f){_0x418dfe[_0x28591c(0x402)](_0x28591c(0x537),_0x28591c(0x2f0))?_0x3cd891['MkgvW'](_0x4aacb9,!_0x1adfc5):_0xc3ed47[_0x28591c(0x329)](_0x13a9e3,null);}return _0xc3ed47['get'](_0x13a9e3);}}function _0x252f42(_0x30b146,_0x122987,_0x14c5af,_0x177a11){var _0x5c0cac=_0x8d3615;try{_0x418dfe['YoIbh'](_0x5c0cac(0x375),_0x418dfe['vQNZF'])?(_0x3caf65(_0x587ccb,0x1c8*0x14+0x269f+-0x49f7,_0x418dfe[_0x5c0cac(0x2fc)],_0x373954),_0x3a523(_0xa6054d,0x22+0x155c+-0x1532*0x1,'f32',_0x5f0631)):new _0x843712(_0x30b146)[_0x5c0cac(0x3e8)+_0x5c0cac(0x1bc)](_0x122987,_0x14c5af,_0x177a11);}catch(_0x3ce1c5){}}function _0x48a85a(_0xe4e0bf,_0x37c867){var _0x116de6=_0x8d3615;try{var _0x33c54a=new _0x843712(_0xe4e0bf)['readF'+_0x116de6(0x386)](_0x37c867,_0x418dfe[_0x116de6(0x464)]);return _0x33c54a?_0x33c54a['val']():-0x9*-0x125+-0x1*-0x20ab+0x4*-0xabe;}catch(_0x43b9be){return 0x1711*0x1+-0x37*0x6e+0x91;}}function _0x4a83b7(_0x4d0ffc,_0x156db4,_0x4fe8a7,_0x1f72bb){var _0x2271fe=_0x1e9b91(_0x4d0ffc,_0x156db4,_0x4fe8a7);if(_0x2271fe!=null)_0x418dfe['CRUJo'](_0x252f42,_0x4d0ffc,_0x156db4,_0x4fe8a7,_0x2271fe*_0x1f72bb);}function _0x2cfc0b(_0x4db9f2,_0xa77164,_0x2a2d6f,_0x1ce489,_0x575626,_0xd43c41,_0x22acc7){var _0x14894f=_0x8d3615;if(_0x418dfe[_0x14894f(0x402)](_0x418dfe[_0x14894f(0x442)],'NjDNS'))try{_0x1f6522[_0x14894f(0x5ce)]['appen'+_0x14894f(0x2e7)+'d'](_0x4cc071);}catch(_0x359202){}else try{var _0x35d85c=_0x418dfe['FzEfl']['split']('|'),_0x511671=0x1*0x6aa+-0x1*-0x2423+-0x2acd;while(!![]){switch(_0x35d85c[_0x511671++]){case'0':var _0xe528b7=_0x36e948[_0x14894f(0x526)+_0x14894f(0x3a2)]({'typeName':_0xa77164,'methodName':_0x2a2d6f,'params':_0x1ce489,'returnType':_0x575626},_0xd43c41);continue;case'1':return _0xe528b7;case'2':_0xe528b7[_0x14894f(0x19e)+'ed']=_0x418dfe[_0x14894f(0x605)](_0x22acc7,![]);continue;case'3':_0x513362[_0x4db9f2]=_0xe528b7;continue;case'4':_0x1d435c[_0x14894f(0x457)+_0x14894f(0x694)]++;continue;}break;}}catch(_0x48fd3b){return console['warn'](_0x14894f(0x66a)+'ra-ko'+'ur]\x20h'+_0x14894f(0x26e)+'eg\x20fa'+'iled:',_0x4db9f2,_0x48fd3b&&_0x48fd3b['messa'+'ge']),null;}}function _0x21c9d7(_0x2be851,_0x466aea,_0x4fe4b3,_0x476a9d,_0x345972,_0x27d8c7,_0x562778){var _0x4d1df5=_0x8d3615;if(_0x418dfe[_0x4d1df5(0x567)]!==_0x4d1df5(0x45b))try{var _0x1ef227=_0x418dfe[_0x4d1df5(0x42b)][_0x4d1df5(0x1da)]('|'),_0x4b3ef5=0xa13*0x3+-0x1*0x457+-0x2*0xcf1;while(!![]){switch(_0x1ef227[_0x4b3ef5++]){case'0':_0x1c013e['enabl'+'ed']=_0x418dfe[_0x4d1df5(0x605)](_0x562778,![]);continue;case'1':_0x1d435c['hooks'+_0x4d1df5(0x694)]++;continue;case'2':var _0x1c013e=_0x36e948['hookP'+'ostfi'+'x']({'typeName':_0x466aea,'methodName':_0x4fe4b3,'params':_0x476a9d,'returnType':_0x345972},_0x27d8c7);continue;case'3':_0x513362[_0x2be851]=_0x1c013e;continue;case'4':return _0x1c013e;}break;}}catch(_0xb5c126){return console[_0x4d1df5(0x35d)](_0x418dfe[_0x4d1df5(0x36c)],_0x2be851,_0xb5c126&&_0xb5c126[_0x4d1df5(0x593)+'ge']),null;}else _0x525bfa['keyst'+_0x4d1df5(0x6b5)]=_0x306702,_0x2623bd();}var _0x4ec499=()=>![];try{if(window[_0x8d3615(0x638)+'WebMo'+'dkit']&&!_0x572c3c[_0x8d3615(0x63d)+'ode']){_0x843712=window['Unity'+_0x8d3615(0x3a4)+_0x8d3615(0x2d5)]['Value'+_0x8d3615(0x232)+'er'],_0x36e948=window[_0x8d3615(0x638)+'WebMo'+_0x8d3615(0x2d5)][_0x8d3615(0x37f)+'me'][_0x8d3615(0x4b4)+'ePlug'+'in']({'name':_0x418dfe[_0x8d3615(0x185)],'version':'1.1.0','referencedAssemblies':[_0x8d3615(0x483)+_0x8d3615(0x395)+'Sharp'+_0x8d3615(0x432)]});if(_0x572c3c[_0x8d3615(0x2a4)+'od'])_0x2cfc0b(_0x8d3615(0x602),_0x8d3615(0x585)+'th',_0x8d3615(0x3f3)+_0x8d3615(0x294)+_0x8d3615(0x1ec)+'lth',[_0x418dfe['pVsNg'],_0x418dfe[_0x8d3615(0x396)]],undefined,_0x4ec499,!!_0x572c3c[_0x8d3615(0x602)]);if(_0x572c3c['hookG'+_0x8d3615(0x38e)])_0x418dfe['eOCFH'](_0x2cfc0b,_0x418dfe['nXwpN'],'OHeal'+'th',_0x8d3615(0x5b9)+'Die',['i32',_0x418dfe['pVsNg'],_0x418dfe[_0x8d3615(0x396)],_0x418dfe['pVsNg'],_0x8d3615(0x1ea)],undefined,_0x4ec499,!!_0x572c3c[_0x8d3615(0x602)]);if(_0x572c3c[_0x8d3615(0x556)+_0x8d3615(0x2f7)+'il'])_0x2cfc0b(_0x8d3615(0x3f1)+'oil',_0x8d3615(0x3fb)+'nPlat'+_0x8d3615(0x2cc)+_0x8d3615(0x6c9)+_0x8d3615(0x461)+_0x8d3615(0x5e5)+_0x8d3615(0x15f)+'on',_0x8d3615(0x472),[_0x8d3615(0x1ea)],undefined,_0x4ec499,!!_0x572c3c['noRec'+_0x8d3615(0x68d)]);if(_0x572c3c['hookC'+'aptur'+'e'])_0x418dfe['OImnk'](_0x21c9d7,_0x418dfe['DpNyQ'],_0x8d3615(0x27b)+_0x8d3615(0x521),'SetGa'+_0x8d3615(0x6a5)+'ning',['i32',_0x8d3615(0x1ea)],undefined,(_0x29bc00,_0x3dc01d)=>{var _0x43911d=_0x8d3615;_0x418dfe[_0x43911d(0x4c6)](_0x29ea00,_0x3b0935,_0x3dc01d,_0x1d435c,_0x43911d(0x47c)+'ers');},!![]);if(_0x572c3c[_0x8d3615(0x242)+_0x8d3615(0x522)+'e'])_0x418dfe[_0x8d3615(0x45c)](_0x21c9d7,_0x418dfe[_0x8d3615(0x62f)],_0x418dfe[_0x8d3615(0x3c5)],_0x8d3615(0x2e2)+_0x8d3615(0x21a),['i32'],_0x418dfe[_0x8d3615(0x396)],(_0x2bbc34,_0x1024bc)=>{var _0x320d3a=_0x8d3615,_0x27161b={'cDAMo':function(_0x8c0d57,_0x5b241c,_0x39a447,_0x1004e4,_0x149ea1){return _0x8c0d57(_0x5b241c,_0x39a447,_0x1004e4,_0x149ea1);},'aQOxg':function(_0x34c273,_0xb7b391,_0x1eb0aa,_0x3d0e2e,_0x3388a4){return _0x34c273(_0xb7b391,_0x1eb0aa,_0x3d0e2e,_0x3388a4);}};_0x418dfe[_0x320d3a(0x548)]!==_0x418dfe[_0x320d3a(0x5ff)]?_0x418dfe[_0x320d3a(0x177)](_0x29ea00,_0x886c37,_0x1024bc,_0x1d435c,'movem'+'ents'):(_0x27161b[_0x320d3a(0x4fd)](_0x1a4ecb,_0x589b0b,-0xe4b*-0x1+-0x2c0*0x2+-0x1*0x83f,_0x320d3a(0x364),-0xa48+-0x200+0x83*0x18+0.1),_0x27161b['aQOxg'](_0x5942a1,_0x39a17c,0x8*-0x15d+-0x3d*-0x47+-0x25*0x27,_0x320d3a(0x364),0x18e6+0x62d+-0x1f13+0.1));},!![]);}}catch(_0x595697){console['warn'](_0x418dfe[_0x8d3615(0x595)],_0x595697&&_0x595697[_0x8d3615(0x593)+'ge']);}function _0x16f343(_0x12c198,_0x4ccda0){var _0x542e58=_0x8d3615,_0x42b9cb={'zTqxe':_0x542e58(0x3cf)+_0x542e58(0x4a9)+_0x542e58(0x302)+_0x542e58(0x660)+'|11|1'+'2|15|'+'1|10|'+_0x542e58(0x22a)+'|18|3'+'|13|1'+'7|22|'+'19|8|'+'0','SkOzY':function(_0x27de36,_0x410bc8){var _0x4feb71=_0x542e58;return _0x418dfe[_0x4feb71(0x13a)](_0x27de36,_0x410bc8);},'DVvQk':function(_0xb83baf,_0x562ba8){return _0xb83baf-_0x562ba8;},'nynag':function(_0x4d316b,_0x5d0cba){return _0x4d316b+_0x5d0cba;},'kADQf':function(_0x43cdca,_0x468bac){return _0x418dfe['qEoTO'](_0x43cdca,_0x468bac);},'HXhXu':function(_0x541bf8,_0x161992){var _0x2f14dc=_0x542e58;return _0x418dfe[_0x2f14dc(0x175)](_0x541bf8,_0x161992);},'LZMEe':function(_0xde0446,_0x43c3eb){var _0x44dc6e=_0x542e58;return _0x418dfe[_0x44dc6e(0x5eb)](_0xde0446,_0x43c3eb);},'gACmw':function(_0x14592d,_0x38657a){return _0x14592d/_0x38657a;}};if(_0x542e58(0x1b1)===_0x542e58(0x1b1)){var _0x257886=_0x513362[_0x12c198];if(_0x257886){if(_0x418dfe['gWlHk'](_0x418dfe[_0x542e58(0x3e4)],_0x418dfe['oGYgc']))try{if(_0x418dfe['Ghoqj'](_0x542e58(0x3f9),_0x418dfe['OyfDg']))_0x257886['enabl'+'ed']=!!_0x4ccda0;else{var _0x1b2b07=_0x42b9cb['zTqxe'][_0x542e58(0x1da)]('|'),_0x5f52dd=0x1ea0+-0x22*0xd+-0x1ce6;while(!![]){switch(_0x1b2b07[_0x5f52dd++]){case'0':_0x3bde46[_0x542e58(0x5c6)+'re']();continue;case'1':_0x5c5b42[_0x542e58(0x18f)+'o'](_0x42b9cb[_0x542e58(0x6a4)](_0x42b9cb[_0x542e58(0x6c4)](_0x4111be,_0x36fc55),_0xae73d2),_0x5492af);continue;case'2':_0x2bf18e['moveT'+'o'](_0x4111be,_0x42b9cb['SkOzY'](_0x5492af,_0x36fc55)-_0xae73d2);continue;case'3':_0x5bd39b[_0x542e58(0x18f)+'o'](_0x4111be,_0x5492af+_0x36fc55);continue;case'4':var _0x1afb43=/^#[0-9a-f]{6}$/i[_0x542e58(0x1d3)](_0xac8fbb['chCol'+'or'])?_0xa53322[_0x542e58(0x39e)+'or']:'#ff6b'+'9d';continue;case'5':_0x167a40[_0x542e58(0x3d2)+'o'](_0x42b9cb[_0x542e58(0x150)](_0x4111be,_0x36fc55)+_0xae73d2,_0x5492af);continue;case'6':var _0x5567d8=_0xd618a8(_0x515160[_0x542e58(0x463)+'e'])||-0x1e5a+0x1*-0x25bf+0x441a;continue;case'7':_0x50ee1b[_0x542e58(0x2f3)+'idth']=_0x4f4f0c[_0x542e58(0x34d)](-0x1e09+-0x5f4+0x11ff*0x2+0.5,(0x158e+0x1*0x23c9+-0x3955)*_0x5567d8);continue;case'8':_0x30945a[_0x542e58(0x383)]();continue;case'9':_0x542b26[_0x542e58(0x18f)+'o'](_0x4111be+_0x36fc55,_0x5492af);continue;case'10':_0x177578['lineT'+'o'](_0x4111be-_0x36fc55,_0x5492af);continue;case'11':_0x139530[_0x542e58(0x3f4)+_0x542e58(0x4d4)]=0xfd6+0x1994+-0x2964;continue;case'12':var _0x36fc55=_0x42b9cb['kADQf'](-0x257c+-0x195+0x1*0x2717,_0x5567d8),_0xae73d2=_0x42b9cb['kADQf'](-0xac5*0x3+-0x1331+0x3388,_0x5567d8);continue;case'13':_0x5194c3[_0x542e58(0x3d2)+'o'](_0x4111be,_0x42b9cb[_0x542e58(0x59f)](_0x5492af+_0x36fc55,_0xae73d2));continue;case'14':_0xf8962e[_0x542e58(0x25d)+_0x542e58(0x2bb)]=_0x1afb43;continue;case'15':_0x39c299[_0x542e58(0x68c)+_0x542e58(0x33b)]();continue;case'16':_0xc1fc68[_0x542e58(0x342)+_0x542e58(0x4bb)+'e']=_0x1afb43;continue;case'17':_0x4b0d40[_0x542e58(0x342)+'e']();continue;case'18':_0x52b35a[_0x542e58(0x3d2)+'o'](_0x4111be,_0x42b9cb['LZMEe'](_0x5492af,_0x36fc55));continue;case'19':_0x25ba98['arc'](_0x4111be,_0x5492af,_0x42b9cb[_0x542e58(0x44c)](0x80e*0x2+0x7cf*0x1+-0xbf5*0x2+0.6000000000000001,_0x5567d8),-0x232e+-0xb*-0x49+0x200b,_0x1afdcb['PI']*(0x5*0x613+0x19f*0x10+0x47*-0xcb));continue;case'20':_0x1be1b1['shado'+_0x542e58(0x34e)+'r']=_0x1afb43;continue;case'21':_0x11f29d[_0x542e58(0x408)]();continue;case'22':_0x2ff7f8[_0x542e58(0x68c)+'Path']();continue;case'23':var _0x4111be=_0x549664[_0x542e58(0x20f)]/(0x1f7d+-0x1203*0x1+0x1af*-0x8),_0x5492af=_0x42b9cb['gACmw'](_0x54d1c4[_0x542e58(0x617)+'t'],-0xc24+-0x54f*-0x6+-0x13b4);continue;}break;}}}catch(_0x2fa59e){}else _0x4cad91[_0x542e58(0x51c)+_0x542e58(0x676)]=_0x59658f,_0x26f7d0();}}else try{_0x1880f8[_0x542e58(0x24a)+'em'](_0x542e58(0x169)+_0x542e58(0x296)+_0x542e58(0x476),_0xc2a72a[_0x542e58(0x419)+'gify'](_0x190bcf));}catch(_0x24db7a){}}setInterval(()=>{var _0x55f9fd=_0x8d3615,_0x18298a={'ypsKg':function(_0x49c59a){var _0xa62bd5=_0x3428;return _0x418dfe[_0xa62bd5(0x4a1)](_0x49c59a);},'VeZyA':function(_0x3d2264,_0x3d6c36){return _0x3d2264(_0x3d6c36);}};if(_0x418dfe['SYxqq']!=='zfsuV'){if(!_0x843712||!window[_0x55f9fd(0x4cc)+_0x55f9fd(0x50d)+_0x55f9fd(0x46f)])return;var _0x51e461=(Number(_0x572c3c[_0x55f9fd(0x306)+_0x55f9fd(0x49c)])||0x1198*-0x2+-0x8c2+0x2c56)/(0x17f9+0x5c3+-0x1d58),_0xfc89fe=_0x418dfe[_0x55f9fd(0x145)](Number(_0x572c3c[_0x55f9fd(0x17c)+'ct'])||0x138+0x1*0x9d1+-0xaa5,0x1b6d+-0x2569+0xa60),_0x1a0db1=(_0x418dfe[_0x55f9fd(0x6c8)](Number,_0x572c3c['gravi'+_0x55f9fd(0x20d)])||0x1*0x22f7+-0x1*0x1625+0x1*-0xc6e)/(-0x820+-0x165*-0xf+0x1*-0xc67),_0x418cd3=Math[_0x55f9fd(0x34d)](0xd59+0xf67*-0x2+0x1176,Number(_0x572c3c['damag'+_0x55f9fd(0x2e0)+'e'])||-0x17d8+-0xf1c+0x278a),_0x607e68=_0x51e461!==0xc20+-0xe16+0x1*0x1f7||_0xfc89fe!==-0x470+0x2129+-0x1cb8||_0x1a0db1!==0xb50+0x2157+0x1*-0x2ca6||_0x572c3c['bhop'],_0x59ebae=_0x572c3c[_0x55f9fd(0x51c)+_0x55f9fd(0x676)]||_0x572c3c['damag'+_0x55f9fd(0x337)]||_0x572c3c[_0x55f9fd(0x5aa)+'moExp']||_0x572c3c['rapid'+'Exp'];if(!_0x607e68&&!_0x59ebae)return;try{if(_0x418dfe[_0x55f9fd(0x2c0)]===_0x418dfe[_0x55f9fd(0x2c0)])for(var _0x60a6d9=-0x1b6d+0x1*-0x27+0x584*0x5;_0x60a6d9<_0x886c37['lengt'+'h'];_0x60a6d9++){var _0x2cd121=_0x886c37[_0x60a6d9];if(!_0x2cd121)continue;_0x418dfe[_0x55f9fd(0x2fe)](_0x51e461,0x15f3+-0x615+-0xfdd*0x1)&&(_0x4a83b7(_0x2cd121,0x1362+-0x1e21+0xae7,'f32',_0x51e461),_0x4a83b7(_0x2cd121,0xb9a*-0x1+-0x3*0x9b3+0x28df,_0x418dfe[_0x55f9fd(0x2fc)],_0x51e461),_0x4a83b7(_0x2cd121,-0x8e*0x10+-0x51*-0x4f+0x1*-0xfef,_0x55f9fd(0x364),_0x51e461),_0x418dfe[_0x55f9fd(0x629)](_0x4a83b7,_0x2cd121,0x116f+-0x1833+0x6f8,_0x55f9fd(0x364),_0x51e461),_0x4a83b7(_0x2cd121,0x20*0x1+-0x146*-0x6+-0x7a8,_0x55f9fd(0x364),_0x51e461),_0x418dfe[_0x55f9fd(0x305)](_0x4a83b7,_0x2cd121,-0x200d+0x2414+0x25*-0x1b,_0x55f9fd(0x364),_0x51e461));if(_0xfc89fe!==-0x3ce*-0x3+0x2*0x3b2+-0x12cd)_0x4a83b7(_0x2cd121,0x15c0+-0x8cf+-0xca1,_0x418dfe['yjndX'],_0xfc89fe);_0x1a0db1!==0xa6a+-0x8eb*0x1+0x2*-0xbf&&(_0x4a83b7(_0x2cd121,-0x1b57+0x1855+-0x34a*-0x1,'f32',_0x1a0db1),_0x4a83b7(_0x2cd121,-0x141b+-0x2*0x7d6+0x2413,'f32',_0x1a0db1));if(_0x572c3c[_0x55f9fd(0x3f7)])_0x252f42(_0x2cd121,-0x26bc+0xb2*0x27+-0xc3a*-0x1,_0x55f9fd(0x364),-(-0x2b7+0x1475+-0x1*0xdd7));}else _0x1f863a['hookG'+'od']=_0x17d790,_0x2bd84d['hookG'+_0x55f9fd(0x38e)]=_0x486584,_0x211154[_0x55f9fd(0x556)+_0x55f9fd(0x2f7)+'il']=_0x47a9be,_0x56e281['hookC'+'aptur'+'e']=_0x1507b9,_0x418dfe[_0x55f9fd(0x4a1)](_0x58df98),_0x2e0ed6['reloa'+'d']();}catch(_0x18a332){}try{for(var _0x210cc8=-0x1c5+0x1021+-0xe5c;_0x210cc8<_0x3b0935['lengt'+'h'];_0x210cc8++){var _0x484d75=_0x418dfe[_0x55f9fd(0x35b)](_0x48a85a,_0x3b0935[_0x210cc8],-0x17*0x188+0x6*-0x62b+0x4872);if(!_0x484d75)continue;if(_0x572c3c['damag'+_0x55f9fd(0x337)]){if(_0x418dfe[_0x55f9fd(0x186)](_0x418dfe['ogXRt'],_0x418dfe['ogXRt'])){var _0xc2dadf=_0x2a1c48[_0x55f9fd(0x4b4)+_0x55f9fd(0x626)+_0x55f9fd(0x2b9)]('style');_0xc2dadf[_0x55f9fd(0x2f6)+'onten'+'t']=_0x309991,_0x1862dc['appen'+_0x55f9fd(0x2e7)+'d'](_0xc2dadf),_0x5835b5=_0x18298a[_0x55f9fd(0x18c)](_0x4b15db),_0x50ee8b[_0x55f9fd(0x51b)+_0x55f9fd(0x2e7)+'d'](_0x5ab64f),_0x18298a['VeZyA'](_0x3acbae,()=>_0x36c66c[_0x55f9fd(0x30d)+'List'][_0x55f9fd(0x6ea)](_0x55f9fd(0x1f4)));}else _0x418dfe['llVCN'](_0x252f42,_0x484d75,-0x13a*0x13+-0x2322+0x7*0x864,_0x418dfe[_0x55f9fd(0x396)],_0x418cd3),_0x418dfe[_0x55f9fd(0x4c6)](_0x252f42,_0x484d75,-0xf8+-0x1*-0x265f+-0x2513,'i32',_0x418cd3);}_0x572c3c['noSpr'+'ead']&&(_0x252f42(_0x484d75,0x2*-0x283+0x15*0xed+0x2d*-0x4f,_0x418dfe[_0x55f9fd(0x2fc)],-0xbd7+-0xb3d+0x1714),_0x252f42(_0x484d75,-0x2155+0x1bce+0x5ef,'f32',0x1*-0x11c9+0xb*0x301+-0xf41));if(_0x572c3c['infAm'+_0x55f9fd(0x201)])_0x252f42(_0x484d75,0xe3f*-0x1+0x1*-0x2f0+0x118b,_0x55f9fd(0x1ea),0xf75*-0x1+0x2*-0x95d+0x2616);_0x572c3c[_0x55f9fd(0x588)+'Exp']&&(_0x418dfe['JWLIw'](_0x4a83b7,_0x484d75,0x1641*0x1+0x5fb+-0x2*0xdd8,_0x418dfe['yjndX'],-0xae8*0x2+-0x31e*0x2+0x14*0x167+0.1),_0x252f42(_0x484d75,-0x6a5+-0x8d6+0xfdb,_0x418dfe['yjndX'],-0x23ad*-0x1+-0x1d43+-0x66a+0.1));}}catch(_0x9eeac8){}}else _0x46ffe0[_0x55f9fd(0x248)+'ntDef'+_0x55f9fd(0x38d)](),_0x418dfe[_0x55f9fd(0x4a1)](_0x5e116d);},-0x28a+-0xf6+0x448),_0x418dfe[_0x8d3615(0x469)](setInterval,()=>{var _0x13f420=_0x8d3615;_0x1d435c[_0x13f420(0x6bf)+'oaded']=!!window[_0x13f420(0x4cc)+'Insta'+_0x13f420(0x46f)];try{var _0x2fb750=-0x1*0x280+-0x17a*-0x11+0x107*-0x16;for(var _0xb948cf in _0x513362){if(_0x513362[_0xb948cf]&&_0x513362[_0xb948cf]['appli'+'ed'])_0x2fb750++;}_0x1d435c[_0x13f420(0x457)+'Ok']=_0x2fb750;}catch(_0x56de89){}},0x3*-0xbd5+-0x510+-0x1*-0x2c77);var _0x500453=new Set(),_0x3a4f84={0x1:[],0x3:[]},_0x1366d8=![];function _0x14c6dd(_0x5040b2){var _0x15de48=_0x8d3615,_0x4bc759={'KgiCC':function(_0x290bc3,_0x13746f){return _0x290bc3+_0x13746f;}};if(_0x418dfe[_0x15de48(0x641)]===_0x418dfe['uHpUC'])_0x500453[_0x15de48(0x6ea)](_0x5040b2[_0x15de48(0x59d)]);else{if(!_0x36e393['__sak'+'ura'])_0x2ea388[_0x15de48(0x1aa)+'e'](_0x4bc759['KgiCC'](_0x15de48(0x1fe),_0x8f4378[_0x15de48(0x16f)+'n']+(-0x6e*-0x35+-0x1*-0xfc6+-0x268b)));}}function _0x59c1ae(_0x467867){var _0x4ec6a2=_0x8d3615;_0x500453['delet'+'e'](_0x467867[_0x4ec6a2(0x59d)]);}function _0xfcfcde(_0x975665){var _0x5485cc=_0x8d3615;if(_0x975665[_0x5485cc(0x4b3)+_0x5485cc(0x330)])return;_0x500453['add'](_0x5485cc(0x1fe)+(_0x975665['butto'+'n']+(0x37*-0x2+0x90b+-0x1d*0x4c)));var _0x3aeccf=_0x3a4f84[_0x418dfe[_0x5485cc(0x159)](_0x975665[_0x5485cc(0x16f)+'n'],0x36c*0x6+0x149b+-0x2922)];if(_0x3aeccf){_0x3aeccf[_0x5485cc(0x193)](performance['now']());if(_0x3aeccf['lengt'+'h']>-0x51*0x3b+-0x19a3+0x2c76)_0x3aeccf[_0x5485cc(0x668)]();}}function _0x30fb34(_0x4eedf6){var _0x22fbb9=_0x8d3615;if(!_0x4eedf6[_0x22fbb9(0x4b3)+'ura'])_0x500453[_0x22fbb9(0x1aa)+'e'](_0x418dfe['LqASc'](_0x418dfe['iFbwx'],_0x418dfe[_0x22fbb9(0x175)](_0x4eedf6[_0x22fbb9(0x16f)+'n'],0x444+-0x18e9+0x14a6)));}function _0x3d7e3d(){var _0x3e53a2=_0x8d3615;_0x500453[_0x3e53a2(0x441)]();}function _0x2d8398(){var _0xcc3dfc=_0x8d3615;if(_0x1366d8)return;_0x1366d8=!![],window['addEv'+'entLi'+'stene'+'r'](_0xcc3dfc(0x5a4)+'wn',_0x14c6dd,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x418dfe[_0xcc3dfc(0x415)],_0x59c1ae,!![]),window[_0xcc3dfc(0x2bf)+_0xcc3dfc(0x53d)+'stene'+'r'](_0x418dfe['JjJso'],_0xfcfcde,!![]),window[_0xcc3dfc(0x2bf)+_0xcc3dfc(0x53d)+_0xcc3dfc(0x438)+'r'](_0xcc3dfc(0x1fe)+'up',_0x30fb34,!![]),window[_0xcc3dfc(0x2bf)+_0xcc3dfc(0x53d)+'stene'+'r'](_0xcc3dfc(0x3a6),_0x3d7e3d);}function _0x303351(_0x4f1620){var _0x419c9f=_0x8d3615,_0x2afeb5={'yYlxI':'movem'+_0x419c9f(0x356)};if(_0x418dfe['owbnO'](_0x418dfe[_0x419c9f(0x4fb)],_0x418dfe[_0x419c9f(0x1b4)])){var _0x193fca=('1|6|4'+_0x419c9f(0x618)+_0x419c9f(0x3b3))[_0x419c9f(0x1da)]('|'),_0x12c80a=0x13d6+-0xe63*-0x1+-0x2239;while(!![]){switch(_0x193fca[_0x12c80a++]){case'0':if(_0x37cc72[_0x419c9f(0x2a4)+'odDie'])_0x245cdb('godDi'+'e','OHeal'+'th','Local'+'Die',[_0x418dfe[_0x419c9f(0x396)],_0x418dfe['pVsNg'],_0x418dfe['pVsNg'],_0x418dfe[_0x419c9f(0x396)],'i32'],_0x57ea2f,_0x261cee,!!_0x5e9e04[_0x419c9f(0x602)]);continue;case'1':_0x3a0e50=_0x10726f['Unity'+'WebMo'+'dkit']['Value'+_0x419c9f(0x232)+'er'];continue;case'2':if(_0x5ea356[_0x419c9f(0x242)+'aptur'+'e'])_0x418dfe[_0x419c9f(0x2b6)](_0x51094f,'capMo'+'ve',_0x418dfe[_0x419c9f(0x3c5)],'IsGro'+_0x419c9f(0x21a),[_0x418dfe[_0x419c9f(0x396)]],'i32',(_0x5328d1,_0x302b43)=>{var _0x2281c4=_0x419c9f;_0x5d4c4c(_0x26e00c,_0x302b43,_0x512bb8,_0x2afeb5[_0x2281c4(0x53c)]);},!![]);continue;case'3':if(_0x4da12a[_0x419c9f(0x556)+_0x419c9f(0x2f7)+'il'])_0x418dfe[_0x419c9f(0x45c)](_0x336d6f,_0x418dfe[_0x419c9f(0x4c0)],_0x418dfe['vFrOF'],_0x418dfe[_0x419c9f(0x5a1)],['i32'],_0x35f6dd,_0x100946,!!_0x23b43f[_0x419c9f(0x3f1)+_0x419c9f(0x68d)]);continue;case'4':if(_0x54a196[_0x419c9f(0x2a4)+'od'])_0x418dfe[_0x419c9f(0x2b6)](_0x12385a,_0x419c9f(0x602),_0x418dfe['hTYmk'],'Initi'+'ateTa'+_0x419c9f(0x1ec)+'lth',[_0x418dfe[_0x419c9f(0x396)],_0x418dfe[_0x419c9f(0x396)]],_0x3422d6,_0x44f163,!!_0x4f8d20['god']);continue;case'5':if(_0x191c53[_0x419c9f(0x242)+'aptur'+'e'])_0x50fb94(_0x418dfe['DpNyQ'],'OShoo'+'ter',_0x418dfe[_0x419c9f(0x569)],[_0x419c9f(0x1ea),_0x418dfe['pVsNg']],_0x3617d7,(_0x303469,_0x23b00e)=>{var _0x130e38=_0x419c9f;_0x45ce4f(_0xe5026e,_0x23b00e,_0x3daa17,_0x130e38(0x47c)+_0x130e38(0x510));},!![]);continue;case'6':_0x92dd06=_0x1fb168[_0x419c9f(0x638)+'WebMo'+'dkit'][_0x419c9f(0x37f)+'me']['creat'+_0x419c9f(0x3d3)+'in']({'name':_0x418dfe[_0x419c9f(0x185)],'version':_0x418dfe['ZuzYX'],'referencedAssemblies':['Assem'+_0x419c9f(0x395)+_0x419c9f(0x322)+_0x419c9f(0x432)]});continue;}break;}}else{var _0x5a219a=_0x3a4f84[_0x4f1620]||[],_0x25b1e0=performance[_0x419c9f(0x50b)]();while(_0x5a219a['lengt'+'h']&&_0x25b1e0-_0x5a219a[0x19fc+0x1b07+0x3503*-0x1]>-0x39*0x77+0x1b*-0x4b+-0x1*-0x2650)_0x5a219a['shift']();return _0x5a219a[_0x419c9f(0x3f2)+'h'];}}function _0x1ecec2(_0x5cb6d0){var _0x5edf03=_0x8d3615;if(document['body']&&(document['ready'+'State']===_0x5edf03(0x4f4)+_0x5edf03(0x504)+'e'||document[_0x5edf03(0x28d)+_0x5edf03(0x5b7)]===_0x5edf03(0x498)+_0x5edf03(0x594)))_0x5cb6d0();else document[_0x5edf03(0x2bf)+_0x5edf03(0x53d)+_0x5edf03(0x438)+'r'](_0x418dfe['INgSa'],_0x5cb6d0,{'once':!![]});}_0x1ecec2(()=>{var _0x37e670=_0x8d3615,_0x3e5f8e={'QiYcV':function(_0x175089,_0xd539cc){return _0x175089+_0xd539cc;},'Xcnbq':function(_0x48c2d5,_0x4e2834){return _0x418dfe['lkVtI'](_0x48c2d5,_0x4e2834);},'OMAEH':'#fff','XytUn':_0x418dfe[_0x37e670(0x2c1)],'ClCel':function(_0x4e75be,_0x1ef8bd){return _0x4e75be/_0x1ef8bd;},'cdAox':function(_0x52a3de,_0x25e4d2){return _0x52a3de+_0x25e4d2;},'XnJEe':function(_0x1a5723,_0x20f0dd,_0x31b1d3){return _0x1a5723(_0x20f0dd,_0x31b1d3);},'expIi':function(_0x4470a0){return _0x4470a0();},'ndvux':function(_0x3afac7,_0x384475){return _0x3afac7!==_0x384475;},'JXnZn':function(_0x20c865,_0x1b75d9){return _0x418dfe['FXZpu'](_0x20c865,_0x1b75d9);},'xknfX':function(_0x44419c,_0x4e24b3){return _0x418dfe['Nvneg'](_0x44419c,_0x4e24b3);},'mIiHA':function(_0x5e62f1,_0x4b2f7b){return _0x5e62f1>=_0x4b2f7b;},'WwYfI':function(_0xd2ea4f,_0x31489b){return _0xd2ea4f-_0x31489b;},'vzxAj':_0x418dfe['fjFix'],'dbhoX':function(_0x39b610,_0x4f7bd3){return _0x39b610/_0x4f7bd3;},'oKAml':function(_0x5f3b84,_0x6328a1){return _0x5f3b84*_0x6328a1;},'uyCUK':function(_0x4fc60e,_0x25fdf9){return _0x4fc60e(_0x25fdf9);},'QvYpi':_0x37e670(0x169)+_0x37e670(0x296)+_0x37e670(0x347)+'v1','qUBFk':_0x418dfe[_0x37e670(0x44e)],'znFGa':function(_0x2e3e01,_0xe79dac){return _0x418dfe['LBmIZ'](_0x2e3e01,_0xe79dac);},'hjutE':_0x418dfe[_0x37e670(0x289)],'KkClx':_0x418dfe[_0x37e670(0x1e2)],'qGTzV':'switc'+'h','dxrLz':_0x37e670(0x418)+'s','JEYJo':_0x418dfe[_0x37e670(0x4eb)],'NncuV':_0x37e670(0x1ac),'gchuk':_0x37e670(0x610)+_0x37e670(0x16b)+'t\x20','BGlNq':function(_0x56c4ee,_0x165f63,_0x6b3fce){return _0x56c4ee(_0x165f63,_0x6b3fce);},'pUyhS':function(_0x42ebe0,_0x419ff6){return _0x418dfe['yFmha'](_0x42ebe0,_0x419ff6);},'PCJMj':'cUaxk','cDHjU':'selec'+'t','QPCWw':_0x418dfe[_0x37e670(0x1b6)],'nTJyJ':_0x418dfe[_0x37e670(0x30b)],'BeFDa':'butto'+'n','KIEMz':function(_0x2dc43f,_0x550ba5){return _0x2dc43f+_0x550ba5;},'srCVH':function(_0x3b754b,_0x22fd68){var _0x15506d=_0x37e670;return _0x418dfe[_0x15506d(0x6d5)](_0x3b754b,_0x22fd68);},'ouTuK':_0x418dfe[_0x37e670(0x553)],'XuOVM':_0x37e670(0x326)+'s','ghkjf':'240\x20F'+'PS\x20un'+'lock','nzhAZ':_0x37e670(0x602),'Svwms':'godDi'+'e','NiZbQ':function(_0x31fd73,_0x524be2){return _0x31fd73===_0x524be2;},'AgssU':_0x418dfe['jsxQC'],'bSknt':function(_0x287af8){return _0x287af8();},'knAFf':function(_0x43d61e,_0x282225){return _0x43d61e!==_0x282225;},'hMVhr':'jKluO','GawvP':'rgba('+'255,2'+_0x37e670(0x68b)+'0,0.8'+')','Grvfm':function(_0x44d9f0,_0x1dbbcf){return _0x418dfe['rUVgF'](_0x44d9f0,_0x1dbbcf);},'bHGeY':function(_0x4ca029,_0x593adf){return _0x4ca029-_0x593adf;},'REsJw':_0x418dfe[_0x37e670(0x1c1)],'ILQsU':function(_0x2c6fbd,_0x34df76){return _0x2c6fbd+_0x34df76;},'voPcR':function(_0xe8f104,_0x3188de){return _0xe8f104+_0x3188de;},'YCriY':function(_0x4434e8,_0x41fac8){return _0x418dfe['BhmkQ'](_0x4434e8,_0x41fac8);},'zxrZY':'pgPwg','odxsr':function(_0x29eb5a){var _0x16934d=_0x37e670;return _0x418dfe[_0x16934d(0x4a1)](_0x29eb5a);},'gLMwt':_0x418dfe[_0x37e670(0x1c2)],'oESYM':function(_0xe01aa0){return _0xe01aa0();},'rGXRx':_0x37e670(0x6de),'fAkkU':function(_0x2f1015){var _0x50bb5a=_0x37e670;return _0x418dfe[_0x50bb5a(0x53e)](_0x2f1015);},'uZygY':_0x37e670(0x4f1)+'t','kWCdf':function(_0x10d2c1,_0x3cdea6,_0x6de4c0,_0x4a14b4,_0x231c26,_0x48cd2b){return _0x10d2c1(_0x3cdea6,_0x6de4c0,_0x4a14b4,_0x231c26,_0x48cd2b);},'nxReH':_0x418dfe[_0x37e670(0x165)],'tUreX':'Block'+'s\x20OHe'+_0x37e670(0x424)+_0x37e670(0x3f3)+_0x37e670(0x294)+_0x37e670(0x1ec)+'lth\x20a'+_0x37e670(0x5d1)+_0x37e670(0x2ca)+_0x37e670(0x474)+_0x37e670(0x26c)+_0x37e670(0x2fb)+_0x37e670(0x223)+_0x37e670(0x5b5)+_0x37e670(0x304)+'\x20or\x20k'+'ill\x20y'+_0x37e670(0x3bb),'NKjIG':_0x37e670(0x583)+_0x37e670(0x377)+_0x37e670(0x233)+_0x37e670(0x6a7)+_0x37e670(0x253)+'o\x20the'+'\x20reco'+_0x37e670(0x5f9)+'rings'+_0x37e670(0x2cb)+_0x37e670(0x571)+_0x37e670(0x1cf),'EVBEJ':'No\x20Sp'+'read','dJgXz':_0x418dfe[_0x37e670(0x4a5)],'TJyEI':function(_0x3c09bc,_0x40f0cd,_0x22577f,_0x4ff60c,_0x307409,_0x5eb3e4){return _0x418dfe['pxCXu'](_0x3c09bc,_0x40f0cd,_0x22577f,_0x4ff60c,_0x307409,_0x5eb3e4);},'GjQpf':function(_0x115dbf,_0x4582a6,_0x5194f7,_0x21d3dd){return _0x418dfe['ITEqW'](_0x115dbf,_0x4582a6,_0x5194f7,_0x21d3dd);},'rRRJg':'Refil'+'ls\x20th'+'e\x20wea'+'pon\x27s'+'\x20cach'+'ed\x20am'+_0x37e670(0x6d0)+_0x37e670(0x244)+_0x37e670(0x33f)+_0x37e670(0x367)+'s.','Nfcwk':function(_0x3c18ab,_0xab603d){return _0x3c18ab===_0xab603d;},'JTPYz':'move','woWCB':_0x37e670(0x366)+_0x37e670(0x38a)+_0x37e670(0x65d)+_0x37e670(0x2b8)+_0x37e670(0x57d)+_0x37e670(0x306)+'\x20limi'+_0x37e670(0x1c5)+_0x37e670(0x4a4)+'celer'+'ation'+'.','nzjHM':function(_0x3b04ab,_0x3d3dcd,_0x534e98,_0x10a466){var _0x49a221=_0x37e670;return _0x418dfe[_0x49a221(0x206)](_0x3b04ab,_0x3d3dcd,_0x534e98,_0x10a466);},'TsUJf':_0x37e670(0x366)+_0x37e670(0x363)+_0x37e670(0x1a4)+_0x37e670(0x331)+_0x37e670(0x278)+_0x37e670(0x512)+_0x37e670(0x31d)+_0x37e670(0x1af)+_0x37e670(0x346)+'lues.','OVUEU':function(_0x53200b,_0x1a4d81,_0x6bd10c,_0x5e85f3,_0x41005e,_0x164c86){var _0x145f24=_0x37e670;return _0x418dfe[_0x145f24(0x586)](_0x53200b,_0x1a4d81,_0x6bd10c,_0x5e85f3,_0x41005e,_0x164c86);},'vJabj':_0x418dfe[_0x37e670(0x445)],'vjrUc':'Keyst'+_0x37e670(0x6b5),'tWuuP':_0x418dfe['hWbgq'],'TFHgG':'Botto'+'m\x20rig'+'ht','ZjCyg':_0x418dfe['ExOpm'],'smxGJ':function(_0xd63dd0,_0x24975e,_0x2c7735,_0x2eb204,_0x4302a6,_0xe1d679){var _0x2aaf31=_0x37e670;return _0x418dfe[_0x2aaf31(0x5fc)](_0xd63dd0,_0x24975e,_0x2c7735,_0x2eb204,_0x4302a6,_0xe1d679);},'CKgnb':function(_0x356ec5,_0xe3648c,_0x5d03e3,_0x236950){return _0x356ec5(_0xe3648c,_0x5d03e3,_0x236950);},'ukGgH':function(_0x544210,_0x4ff8f6,_0x26c0f2){return _0x544210(_0x4ff8f6,_0x26c0f2);},'GqXUx':_0x418dfe[_0x37e670(0x596)],'cllrd':function(_0x440d78,_0x2e70f8){return _0x440d78(_0x2e70f8);},'CbLnI':_0x418dfe[_0x37e670(0x3e2)],'QAiBy':_0x418dfe['yIUyP'],'gIhGf':function(_0x5ed4c6,_0x43839b,_0x15775f,_0x1d9b3f,_0x32eb0c,_0x4bc462){var _0x5be41a=_0x37e670;return _0x418dfe[_0x5be41a(0x5fc)](_0x5ed4c6,_0x43839b,_0x15775f,_0x1d9b3f,_0x32eb0c,_0x4bc462);},'dExSx':_0x37e670(0x293)+_0x37e670(0x25a)+'switc'+_0x37e670(0x132),'gUSNc':function(_0x2b30f4,_0x6afec7){var _0x275306=_0x37e670;return _0x418dfe[_0x275306(0x35c)](_0x2b30f4,_0x6afec7);},'jrgJJ':function(_0x45a58a,_0xdf96d2,_0x101e08,_0x5af2e8){return _0x45a58a(_0xdf96d2,_0x101e08,_0x5af2e8);},'MzCIR':'god\x20('+'OHeal'+'th.In'+_0x37e670(0x65a)+_0x37e670(0x63f)+_0x37e670(0x4db)+'h)','NQhVp':function(_0x411acb,_0x2fa0b7,_0x469212,_0x13431e){return _0x411acb(_0x2fa0b7,_0x469212,_0x13431e);},'ADbNL':'noRec'+_0x37e670(0x3fc)+'Recoi'+_0x37e670(0x15f)+_0x37e670(0x484)+_0x37e670(0x198),'DHTjk':'captu'+_0x37e670(0x315)+_0x37e670(0x215)+_0x37e670(0x29a)+'ing\x20+'+'\x20IsGr'+_0x37e670(0x30a)+'d)','tVFDn':_0x37e670(0x2df)+'eats\x20'+_0x37e670(0x49b)+_0x37e670(0x44b)+'ut\x20th'+'is','pkEMJ':_0x418dfe['UjLvT'],'OsNEb':_0x37e670(0x631)+'amage'+_0x37e670(0x5dd)+_0x37e670(0x4e8)+'atly\x20'+'raise'+_0x37e670(0x6f5)+'risk\x20'+'even\x20'+'with\x20'+_0x37e670(0x1e0)+_0x37e670(0x2ea),'RmeEL':_0x418dfe[_0x37e670(0x36a)],'Jzegc':_0x37e670(0x3e0)+'my\x20se'+'tting'+'s','oDsAP':_0x418dfe[_0x37e670(0x529)],'FgxOW':_0x418dfe[_0x37e670(0x475)],'sCKXc':function(_0x1adf87,_0x3e25d8,_0x1eddd5){return _0x1adf87(_0x3e25d8,_0x1eddd5);},'PpYJD':'waiti'+'ng\x20fo'+'r\x20gam'+'e…','jxzCs':_0x37e670(0x192)+'255,1'+'80,19'+'0,0.6'+')','iKeIE':'\x20FPS','NtEpo':'top','xUnte':function(_0x2abbc5,_0x43e308){var _0x574d33=_0x37e670;return _0x418dfe[_0x574d33(0x2bc)](_0x2abbc5,_0x43e308);},'psYjk':_0x37e670(0x504)+'e','ETkXh':function(_0x386605,_0x56b97c){return _0x386605||_0x56b97c;},'fLEWW':function(_0x43f256,_0x3d48db){var _0x23fb8f=_0x37e670;return _0x418dfe[_0x23fb8f(0x159)](_0x43f256,_0x3d48db);},'NkTwg':_0x418dfe['Vgrzv'],'yWlbe':'div','mqWSn':_0x418dfe['JNxem'],'iXfnH':_0x37e670(0x3be)+'tles','wVwcJ':_0x37e670(0x1b7)+'a\x20Kou'+'r','wipGw':_0x37e670(0x140)+'ose','ueYxS':_0x418dfe[_0x37e670(0x41d)],'JPlRz':function(_0xcdb958,_0x42579d){return _0xcdb958===_0x42579d;},'mQklW':_0x418dfe['xbgpB'],'uMyNi':function(_0x359626,_0x59d62a){var _0x249647=_0x37e670;return _0x418dfe[_0x249647(0x2dd)](_0x359626,_0x59d62a);},'zTIdT':_0x37e670(0x14d)+'l>','UrvsY':function(_0x4118e3,_0x39c55e){return _0x4118e3(_0x39c55e);}};_0x572c3c[_0x37e670(0x5b4)+'ck']&&setInterval(()=>{var _0x4b8d81=_0x37e670;try{if(_0x418dfe[_0x4b8d81(0x479)]('gxwCt','gxwCt'))_0x576b00[_0x4b8d81(0x57e)]=_0x3e5f8e['QiYcV']('600\x20',_0x101c50[_0x4b8d81(0x609)](_0x3e5f8e[_0x4b8d81(0x3a9)](0x1cea+0x6d*-0x17+-0x1316,_0x3b1760)))+('px\x20ui'+'-sans'+'-seri'+'f,sys'+_0x4b8d81(0x507)+_0x4b8d81(0x620)+_0x4b8d81(0x2da)+'if'),_0x1811ff[_0x4b8d81(0x25d)+_0x4b8d81(0x2bb)]=_0x377d79?_0x3e5f8e['OMAEH']:_0x3e5f8e[_0x4b8d81(0x155)],_0x23128d[_0x4b8d81(0x2c6)+'ext'](_0x3b97e2,_0x1be7f0+_0x3e5f8e[_0x4b8d81(0x4f9)](_0x1378d4,0x69*-0x53+-0x7+0x110a*0x2),_0x3e5f8e['cdAox'](_0x4f2247,_0x12d0dc/(-0x21ae+0x1b2+0x1ffe))+_0x3e5f8e[_0x4b8d81(0x3a9)](-0x1f*-0xdf+0x2*-0xc17+-0xd*0x37,_0x431b3b));else for(var _0x517b41 of[_0x418dfe['mArWP'],_0x418dfe['srMlr'],_0x4b8d81(0x444)+'io_30'+_0x4b8d81(0x4cf)+_0x4b8d81(0x59c)+'nt','fulls'+_0x4b8d81(0x6cc)+'-banr'+'s']){var _0x5d64e4=document['getEl'+_0x4b8d81(0x1a4)+_0x4b8d81(0x4f8)](_0x517b41);if(_0x5d64e4&&_0x418dfe[_0x4b8d81(0x265)](_0x517b41,_0x418dfe[_0x4b8d81(0x3b2)])){var _0xd0f52b=_0x5d64e4['child'+'ren'];for(var _0x161a15=0x1*-0x52f+-0x3b4+-0x5b*-0x19;_0x418dfe[_0x4b8d81(0x6e4)](_0x161a15,_0xd0f52b[_0x4b8d81(0x3f2)+'h']);_0x161a15++){if(_0xd0f52b[_0x161a15]['id']&&_0x418dfe['ESeDb'](_0xd0f52b[_0x161a15]['id']['index'+'Of'](_0x418dfe[_0x4b8d81(0x384)]),-0x2b*-0xd9+0xdd*0x17+-0x384e*0x1))_0xd0f52b[_0x161a15][_0x4b8d81(0x5b6)][_0x4b8d81(0x6b7)+'ay']='none';}}else{if(_0x5d64e4)_0x5d64e4[_0x4b8d81(0x5b6)]['displ'+'ay']=_0x4b8d81(0x1ac);}}}catch(_0x3a6151){}},-0x5*-0x2c9+-0x671+0x2*0x2a);var _0x3a3fcc=document[_0x37e670(0x4b4)+'eElem'+_0x37e670(0x2b9)](_0x37e670(0x56f)+'s');_0x3a3fcc[_0x37e670(0x5b6)][_0x37e670(0x163)+'xt']=_0x418dfe[_0x37e670(0x3ab)];var _0x2a87ec=_0x3a3fcc['getCo'+_0x37e670(0x6c0)]('2d');function _0x57ec3c(){var _0x8cba6a=_0x37e670;try{var _0x62c9a4=document[_0x8cba6a(0x53a)+_0x8cba6a(0x6cc)+_0x8cba6a(0x496)+'nt'],_0x51bae6=_0x62c9a4&&_0x62c9a4['tagNa'+'me']!==_0x418dfe['stEEt']?_0x62c9a4:document[_0x8cba6a(0x5ce)]||document['docum'+_0x8cba6a(0x601)+_0x8cba6a(0x1a4)];if(_0x418dfe[_0x8cba6a(0x6ae)](_0x3a3fcc['paren'+_0x8cba6a(0x139)],_0x51bae6))_0x51bae6[_0x8cba6a(0x51b)+_0x8cba6a(0x2e7)+'d'](_0x3a3fcc);}catch(_0x2040bd){try{document[_0x8cba6a(0x5ce)][_0x8cba6a(0x51b)+'dChil'+'d'](_0x3a3fcc);}catch(_0xbf9ca5){}}}var _0x58ca06={'w':0x0,'h':0x0,'dpr':0x0};function _0x54a09f(){var _0x531849=_0x37e670,_0x4a1d0d=window['devic'+'ePixe'+_0x531849(0x3fa)+'o']||0x52*-0x74+0x17b*-0x1+-0x1352*-0x2,_0x377698=window[_0x531849(0x516)+'Width'],_0x2062f1=window[_0x531849(0x516)+'Heigh'+'t'];if(_0x377698===_0x58ca06['w']&&_0x2062f1===_0x58ca06['h']&&_0x418dfe['NSEbi'](_0x4a1d0d,_0x58ca06[_0x531849(0x221)]))return;_0x58ca06['w']=_0x377698,_0x58ca06['h']=_0x2062f1,_0x58ca06[_0x531849(0x221)]=_0x4a1d0d,_0x3a3fcc['width']=Math[_0x531849(0x609)](_0x418dfe['HvNds'](_0x377698,_0x4a1d0d)),_0x3a3fcc['heigh'+'t']=Math[_0x531849(0x609)](_0x418dfe['qEoTO'](_0x2062f1,_0x4a1d0d)),_0x2a87ec[_0x531849(0x241)+'ansfo'+'rm'](_0x4a1d0d,-0xba*-0x2+0x1*0x1893+-0x1a07,0x16a1+0x1dc1+-0xf*0x37e,_0x4a1d0d,-0x188+-0x17d3+0x195b,-0x10be+0x12ba+0x7f*-0x4);}var _0x51d63a=0xa4*0x6+-0x1ecf*-0x1+-0x1*0x22a7,_0xeb3faa=performance['now'](),_0x5cf3ee=0x1485+-0xc12+-0x873;function _0x2e6652(_0x10890b){var _0x48d0bc=_0x37e670,_0x4919e7=(_0x48d0bc(0x4dd)+_0x48d0bc(0x65e)+'12|8|'+_0x48d0bc(0x1d9)+_0x48d0bc(0x44d)+'|13|1'+'0|11')[_0x48d0bc(0x1da)]('|'),_0x2867a4=-0x10*0x1b4+-0xd5*0x18+0x2f38;while(!![]){switch(_0x4919e7[_0x2867a4++]){case'0':var _0x3822b4={'olCPQ':'rgba('+_0x48d0bc(0x218)+'07,15'+_0x48d0bc(0x50f)+'5)','ekiHv':_0x418dfe[_0x48d0bc(0x4ad)],'GOmNb':function(_0x169c15,_0x52094f){var _0x630335=_0x48d0bc;return _0x418dfe[_0x630335(0x246)](_0x169c15,_0x52094f);},'JraCs':_0x418dfe['EUxcF'],'ktmeG':_0x418dfe['sYncM'],'QytYZ':function(_0xa5e766,_0x13ad2a){return _0xa5e766+_0x13ad2a;},'YqWYw':function(_0x129b60,_0x35e0e7){return _0x129b60/_0x35e0e7;},'QIyku':function(_0x3b0882,_0x5addfc){return _0x418dfe['qEoTO'](_0x3b0882,_0x5addfc);},'IKEok':function(_0xf8e89,_0x20d104){return _0xf8e89+_0x20d104;}};continue;case'1':_0x2c0569('S',_0x418dfe[_0x48d0bc(0x603)],_0x418dfe['LqASc'](_0x416c0d+_0x7f4b30,_0x10f192),_0x418dfe[_0x48d0bc(0x17f)](_0x4d57d7+_0x7f4b30,_0x10f192),_0x7f4b30,_0x7f4b30);continue;case'2':var _0x27764d=_0x7f4b30*(-0xd07+-0x4*0x22d+0x15be)+_0x10f192*(-0x2095+-0x2445+-0x1c4*-0x27),_0x3696cb=_0x418dfe[_0x48d0bc(0x159)](_0x7f4b30*(-0x10d*-0x25+-0x1d5b+-0x1*0x983),_0x10f192*(0x6f9+0x426+-0xb1d));continue;case'3':_0x2c0569('D',_0x48d0bc(0x277),_0x418dfe['DNEKX'](_0x416c0d,(_0x7f4b30+_0x10f192)*(-0x1*-0x7e6+-0x2538+-0x1*-0x1d54)),_0x4d57d7+_0x7f4b30+_0x10f192,_0x7f4b30,_0x7f4b30);continue;case'4':var _0x416c0d=_0x486c1c==='br'?_0x10890b['right']-(0x1ddb+-0x1*-0x24d9+-0x42a4)-_0x27764d:_0x10890b[_0x48d0bc(0x517)]+(-0x1a59+0x13ee+0x67b);continue;case'5':var _0x36ddd2=_0x418dfe['OLIxI'](_0x418dfe['RVjkV'](_0x27764d,_0x10f192),0xdd0+-0x112f*-0x2+-0x302c),_0x49424d=_0x4d57d7+_0x418dfe[_0x48d0bc(0x2bc)](_0x7f4b30,_0x10f192)*(0x1478+0x2ef+-0x71*0x35);continue;case'6':_0x2c0569('W','KeyW',_0x418dfe['NRMEd'](_0x416c0d,_0x7f4b30)+_0x10f192,_0x4d57d7,_0x7f4b30,_0x7f4b30);continue;case'7':var _0x486c1c=_0x572c3c['ksPos'];continue;case'8':var _0x2c0569=(_0x4e3aef,_0x42efbc,_0x10504d,_0x2e089b,_0x443474,_0x33682e,_0xe81fed)=>{var _0x802d0f=_0x48d0bc,_0x20a5a4=_0x500453['has'](_0x42efbc);_0x2a87ec[_0x802d0f(0x408)](),_0x2a87ec['begin'+_0x802d0f(0x33b)]();if(_0x2a87ec[_0x802d0f(0x609)+_0x802d0f(0x394)])_0x2a87ec['round'+'Rect'](_0x10504d,_0x2e089b,_0x443474,_0x33682e,(-0x1293+-0xe5e+-0xa*-0x34c)*_0x2c427);else _0x2a87ec[_0x802d0f(0x3bd)](_0x10504d,_0x2e089b,_0x443474,_0x33682e);_0x2a87ec['fillS'+'tyle']=_0x20a5a4?_0x3822b4[_0x802d0f(0x4ea)]:_0x802d0f(0x192)+_0x802d0f(0x42c)+_0x802d0f(0x1d2)+'7)',_0x2a87ec[_0x802d0f(0x383)](),_0x2a87ec[_0x802d0f(0x2f3)+_0x802d0f(0x502)]=0x1*-0x11c2+0xe68+0x35b*0x1,_0x2a87ec['strok'+_0x802d0f(0x4bb)+'e']=_0x20a5a4?_0x24d327:_0x802d0f(0x192)+_0x802d0f(0x218)+'07,15'+_0x802d0f(0x1e5)+'5)',_0x2a87ec[_0x802d0f(0x342)+'e'](),_0x20a5a4&&(_0x2a87ec['shado'+'wColo'+'r']=_0x19ff55,_0x2a87ec['shado'+_0x802d0f(0x4d4)]=0x1*0x192+0x42a+-0x5ae,_0x2a87ec[_0x802d0f(0x383)](),_0x2a87ec[_0x802d0f(0x3f4)+_0x802d0f(0x4d4)]=0x153*-0x1d+-0x2479*-0x1+-0xf7*-0x2),_0x2a87ec[_0x802d0f(0x25d)+_0x802d0f(0x2bb)]=_0x20a5a4?_0x802d0f(0x69a):_0x3822b4[_0x802d0f(0x4c8)],_0x2a87ec['textA'+_0x802d0f(0x574)]=_0x802d0f(0x39c)+'r',_0x2a87ec['textB'+_0x802d0f(0x58d)+'ne']=_0x802d0f(0x17b)+'e',_0x2a87ec['font']=_0x3822b4[_0x802d0f(0x6f4)](_0x3822b4[_0x802d0f(0x6f4)](_0x3822b4[_0x802d0f(0x458)],Math[_0x802d0f(0x609)]((0x171d+0x135+0x2*-0xc23)*_0x2c427)),_0x3822b4[_0x802d0f(0x5a9)]),_0x2a87ec[_0x802d0f(0x2c6)+'ext'](_0x4e3aef,_0x3822b4[_0x802d0f(0x27e)](_0x10504d,_0x3822b4['YqWYw'](_0x443474,-0x21a8+-0x1fa+0x2*0x11d2)),_0x3822b4['QytYZ'](_0x2e089b,_0x33682e/(-0x1*-0x15df+0xf8a+0x19*-0x17f))-(_0xe81fed?_0x3822b4[_0x802d0f(0x697)](0xcc0+0x26d4+0x338f*-0x1,_0x2c427):-0x6*-0x4d7+0x1424+-0x312e)),_0xe81fed&&(_0x2a87ec[_0x802d0f(0x57e)]='600\x20'+Math['round']((-0x66*0x62+0x1*0x229b+-0x23d*-0x2)*_0x2c427)+_0x3822b4[_0x802d0f(0x5a9)],_0x2a87ec[_0x802d0f(0x25d)+_0x802d0f(0x2bb)]=_0x20a5a4?'#fff':_0x802d0f(0x192)+'255,2'+_0x802d0f(0x68b)+_0x802d0f(0x646)+'5)',_0x2a87ec[_0x802d0f(0x2c6)+_0x802d0f(0x1d1)](_0xe81fed,_0x3822b4[_0x802d0f(0x465)](_0x10504d,_0x443474/(0x905*0x4+0x94*0x5+0x2*-0x137b)),_0x2e089b+_0x3822b4['YqWYw'](_0x33682e,0x334*-0x1+-0x1ee0+0x1*0x2216)+(0x1*-0x4a7+-0xa7+0x556)*_0x2c427)),_0x2a87ec[_0x802d0f(0x5c6)+'re']();};continue;case'9':var _0x2c427=_0x418dfe['gtlpZ'](Number,_0x572c3c[_0x48d0bc(0x290)+'le'])||-0x2*0x1331+0x8fe*-0x3+0x1*0x415d,_0x7f4b30=(0x2f+0x98c+-0x999)*_0x2c427,_0x10f192=_0x418dfe[_0x48d0bc(0x5ca)](0x4a5*-0x7+0xc34+0x79*0x2b,_0x2c427);continue;case'10':_0x418dfe['OImnk'](_0x2c0569,_0x418dfe['EgiMj'],'mouse'+'3',_0x416c0d+_0x36ddd2+_0x10f192,_0x49424d,_0x36ddd2,_0x7f4b30,_0x572c3c[_0x48d0bc(0x6ba)]?_0x418dfe[_0x48d0bc(0x40b)](_0x303351,-0x895*0x3+-0x1a86+-0x4*-0xd12)+'\x20CPS':'');continue;case'11':_0x2c0569('','Space',_0x416c0d,_0x49424d+_0x7f4b30+_0x10f192,_0x27764d,_0x418dfe[_0x48d0bc(0x2b2)](_0x7f4b30,-0x1d*-0xb5+0xae0+-0x1f61+0.45));continue;case'12':var _0x4d57d7=_0x418dfe['EcKYl'](_0x486c1c,'ml')?_0x418dfe['DNEKX'](_0x10890b[_0x48d0bc(0x570)],_0x418dfe[_0x48d0bc(0x423)](_0x10890b[_0x48d0bc(0x617)+'t'],-0x1*-0x679+-0x51+0x626*-0x1))-_0x418dfe[_0x48d0bc(0x6a6)](_0x3696cb,0x1*-0xaf3+-0x1a8c+0x2581):_0x418dfe[_0x48d0bc(0x4c2)](_0x10890b[_0x48d0bc(0x291)+'m']-_0x3696cb,_0x418dfe['lAeVs'](_0x486c1c,'bl')?0x7dc*0x1+0x1*-0x1777+0xffb:0xeb7*0x2+0xbba+-0x2892);continue;case'13':_0x418dfe[_0x48d0bc(0x2a1)](_0x2c0569,_0x48d0bc(0x6b4),_0x418dfe[_0x48d0bc(0x288)],_0x416c0d,_0x49424d,_0x36ddd2,_0x7f4b30,_0x572c3c['ksCps']?_0x303351(-0x2185+0x1d41*-0x1+0x3ec7)+'\x20CPS':'');continue;case'14':_0x418dfe[_0x48d0bc(0x5e3)](_0x2c0569,'A','KeyA',_0x416c0d,_0x4d57d7+_0x7f4b30+_0x10f192,_0x7f4b30,_0x7f4b30);continue;}break;}}function _0x532bd2(_0x3eef50){var _0x5a51b9=_0x37e670;if(_0x418dfe['QyOOr']==='MTvAA'){var _0x30a45b=_0x418dfe[_0x5a51b9(0x2e3)](_0x3eef50[_0x5a51b9(0x20f)],0xd30*0x1+0x1*-0x226c+0x153e),_0x5cbd9e=_0x418dfe['vygSF'](_0x3eef50[_0x5a51b9(0x617)+'t'],-0x2*-0x530+-0x635*0x3+-0x1*-0x841),_0x5ce8e3=Number(_0x572c3c['chSiz'+'e'])||0x29*0xa6+0xc86+-0x1*0x271b,_0x53e428=/^#[0-9a-f]{6}$/i['test'](_0x572c3c['chCol'+'or'])?_0x572c3c[_0x5a51b9(0x39e)+'or']:_0x418dfe['tvbob'];_0x2a87ec[_0x5a51b9(0x408)](),_0x2a87ec[_0x5a51b9(0x342)+'eStyl'+'e']=_0x53e428,_0x2a87ec[_0x5a51b9(0x25d)+_0x5a51b9(0x2bb)]=_0x53e428,_0x2a87ec['lineW'+_0x5a51b9(0x502)]=Math[_0x5a51b9(0x34d)](-0x8cd*0x4+-0x757+0x2a8c+0.5,(0x7c5+0x19ff+0x12a*-0x1d)*_0x5ce8e3),_0x2a87ec[_0x5a51b9(0x3f4)+_0x5a51b9(0x34e)+'r']=_0x53e428,_0x2a87ec['shado'+'wBlur']=-0x17fa+-0x25*0xef+0x3a8b*0x1;var _0x197b26=_0x418dfe[_0x5a51b9(0x69f)](0xc97*-0x1+-0x3*-0x28b+-0x4fc*-0x1,_0x5ce8e3),_0x10c920=_0x418dfe['XuBTt'](-0x1c9d*-0x1+0x375+0x6*-0x557,_0x5ce8e3);_0x2a87ec[_0x5a51b9(0x68c)+_0x5a51b9(0x33b)](),_0x2a87ec['moveT'+'o'](_0x418dfe['jcNSS'](_0x30a45b-_0x197b26,_0x10c920),_0x5cbd9e),_0x2a87ec[_0x5a51b9(0x3d2)+'o'](_0x418dfe['wvYux'](_0x30a45b,_0x197b26),_0x5cbd9e),_0x2a87ec['moveT'+'o'](_0x30a45b+_0x197b26,_0x5cbd9e),_0x2a87ec['lineT'+'o'](_0x418dfe[_0x5a51b9(0x309)](_0x418dfe[_0x5a51b9(0x2bc)](_0x30a45b,_0x197b26),_0x10c920),_0x5cbd9e),_0x2a87ec[_0x5a51b9(0x18f)+'o'](_0x30a45b,_0x5cbd9e-_0x197b26-_0x10c920),_0x2a87ec[_0x5a51b9(0x3d2)+'o'](_0x30a45b,_0x5cbd9e-_0x197b26),_0x2a87ec['moveT'+'o'](_0x30a45b,_0x5cbd9e+_0x197b26),_0x2a87ec[_0x5a51b9(0x3d2)+'o'](_0x30a45b,_0x418dfe[_0x5a51b9(0x21e)](_0x5cbd9e+_0x197b26,_0x10c920)),_0x2a87ec['strok'+'e'](),_0x2a87ec[_0x5a51b9(0x68c)+'Path'](),_0x2a87ec[_0x5a51b9(0x60c)](_0x30a45b,_0x5cbd9e,_0x418dfe[_0x5a51b9(0x692)](-0xe2f*0x1+-0x7*-0x409+-0xe0f+0.6000000000000001,_0x5ce8e3),-0xc28+0xe2d+-0x2f*0xb,_0x418dfe[_0x5a51b9(0x2b2)](Math['PI'],-0x20e8+-0x3b*0x95+0x4341)),_0x2a87ec[_0x5a51b9(0x383)](),_0x2a87ec[_0x5a51b9(0x5c6)+'re']();}else _0x3e0e18[_0x5a51b9(0x3f1)+_0x5a51b9(0x68d)]=_0x5a8255,_0x314fd1(),_0x3e5f8e['XnJEe'](_0x38a3e3,'noRec'+_0x5a51b9(0x68d),_0xa0ae43);}function _0x4b847f(_0x2ddb37){var _0x5e0029=_0x37e670,_0x5ba4a3={'Nufpe':function(_0x495751,_0x7332d3){return _0x418dfe['maIKD'](_0x495751,_0x7332d3);},'XIZIP':_0x418dfe[_0x5e0029(0x16e)],'XzPwH':function(_0xcdcf9b,_0x9ecf7c){var _0x33b3dd=_0x5e0029;return _0x418dfe[_0x33b3dd(0x309)](_0xcdcf9b,_0x9ecf7c);},'iJuGR':function(_0x41e36d,_0x55e50b){return _0x41e36d+_0x55e50b;},'zxNer':'UWMK\x20'+'bound'+'\x20','LzZSx':_0x5e0029(0x418)+'s','FVuxD':_0x5e0029(0x282)+_0x5e0029(0x36e),'CUOCH':_0x5e0029(0x6e2)+'d','CIuTr':_0x5e0029(0x1ba),'RJgcZ':_0x418dfe['OxNPf'],'rCFJf':function(_0x81bf8f,_0x870373){return _0x81bf8f||_0x870373;}};if(_0x418dfe[_0x5e0029(0x62b)]===_0x5e0029(0x5ad)){if(!_0x42ab02)return;var _0xdfff2b=_0x15e96b[_0x5e0029(0x2b0)+_0x5e0029(0x427)];for(var _0x5510b9=-0x229+-0xbc8+0xdf1;_0x5510b9<_0xdfff2b[_0x5e0029(0x3f2)+'h'];_0x5510b9++){var _0x1e7e84=_0xdfff2b[_0x5510b9]['query'+_0x5e0029(0x46b)+'tor']('.sk-m'+_0x5e0029(0x327));_0x1e7e84&&(_0x1e7e84[_0x5e0029(0x2f6)+'onten'+'t'][_0x5e0029(0x5e1)+'Of']('UWMK')===-0x11*-0x30+-0x39*0x29+0x5f1||_0x5ba4a3[_0x5e0029(0x12b)](_0x1e7e84[_0x5e0029(0x2f6)+_0x5e0029(0x577)+'t']['index'+'Of']('SAFE'),0x2*0xddb+-0x1232+-0x984))&&(_0x1e7e84['textC'+'onten'+'t']=_0x5831c5['safeM'+_0x5e0029(0x35e)]?_0x5ba4a3['XIZIP']:_0x41f01d['uwmk']?_0x5ba4a3[_0x5e0029(0x28c)](_0x5ba4a3[_0x5e0029(0x28c)](_0x5ba4a3['iJuGR'](_0x5ba4a3['zxNer'],_0x3243b3[_0x5e0029(0x457)+_0x5e0029(0x694)]?_0x5ba4a3[_0x5e0029(0x224)](_0x5ba4a3['iJuGR'](_0x1c4e8f[_0x5e0029(0x457)+'Ok']+'/',_0x16995d['hooks'+_0x5e0029(0x694)]),_0x5ba4a3['LzZSx']):_0x5e0029(0x22d)+'ks\x20ar'+_0x5e0029(0x284)+'all\x20o'+_0x5e0029(0x173))+_0x5ba4a3[_0x5e0029(0x4ae)],_0x17cc15['gameL'+_0x5e0029(0x5b2)]?_0x5ba4a3['CUOCH']:'loadi'+'ng')+(_0x5e0029(0x657)+_0x5e0029(0x503)+'\x20')+(_0x14a1cd[_0x5e0029(0x47c)+_0x5e0029(0x510)]?'held':_0x5e0029(0x1ac))+('\x20|\x20mo'+_0x5e0029(0x16b)+'t\x20')+(_0x551128[_0x5e0029(0x1e3)+'ents']?_0x5ba4a3[_0x5e0029(0x533)]:_0x5ba4a3[_0x5e0029(0x389)]),_0x59362d[_0x5e0029(0x505)+'rror']?_0x5e0029(0x2db)+'R:\x20'+_0x3c924e[_0x5e0029(0x505)+'rror']:''):_0x5e0029(0x3d4)+_0x5e0029(0x3c0)+_0x5e0029(0x407)+_0x5e0029(0x681)+_0x5e0029(0x691)+_0x5e0029(0x6da)+_0x5e0029(0x5ea)+_0x5e0029(0x4c7)+_0x5e0029(0x678)+_0x5e0029(0x21f)+'ipt)');}}else{_0x2a87ec['save'](),_0x2a87ec['font']=_0x418dfe['qyWGx'],_0x2a87ec[_0x5e0029(0x22c)+_0x5e0029(0x574)]=_0x418dfe[_0x5e0029(0x2bd)],_0x2a87ec[_0x5e0029(0x1bb)+_0x5e0029(0x58d)+'ne']=_0x418dfe[_0x5e0029(0x345)];var _0x4ae1e4=0x258b+-0xd91+0xb*-0x22a,_0x2af3af=0x41f+0xd07+0xc7*-0x16,_0x24d43d=(_0x30a1b3,_0xbc458)=>{var _0x111e7a=_0x5e0029;_0x2a87ec[_0x111e7a(0x25d)+_0x111e7a(0x2bb)]=_0x5ba4a3[_0x111e7a(0x286)](_0xbc458,_0x111e7a(0x192)+'255,2'+'35,24'+_0x111e7a(0x6b9)+'5)'),_0x2a87ec['fillT'+_0x111e7a(0x1d1)](_0x30a1b3,_0x2af3af,_0x4ae1e4),_0x4ae1e4+=0x2*-0xa+0x301*0x5+-0xee1;};_0x418dfe[_0x5e0029(0x35b)](_0x24d43d,_0x418dfe[_0x5e0029(0x5bd)],_0x418dfe['tvbob']);if(_0x572c3c['fps'])_0x24d43d(_0x418dfe['yqIdk'](_0x5cf3ee,_0x418dfe['ZaiIv']));if(!_0x1d435c[_0x5e0029(0x6bf)+_0x5e0029(0x5b2)])_0x24d43d(_0x418dfe[_0x5e0029(0x530)],_0x418dfe['izheU']);_0x2a87ec['resto'+'re']();}}function _0x3dd0ec(){var _0x5ac3cc=_0x37e670;if(_0x3e5f8e['JXnZn'](_0x5ac3cc(0x3ee),_0x5ac3cc(0x3ee))){_0x3e5f8e['xknfX'](requestAnimationFrame,_0x3dd0ec),_0x51d63a++;var _0x5aea9b=performance[_0x5ac3cc(0x50b)]();_0x3e5f8e[_0x5ac3cc(0x16a)](_0x3e5f8e[_0x5ac3cc(0x466)](_0x5aea9b,_0xeb3faa),0x8*0x22f+0xe*-0x272+0x12b8)&&(_0x3e5f8e[_0x5ac3cc(0x671)](_0x3e5f8e['vzxAj'],_0x5ac3cc(0x1cd))?(_0x94d098[_0x5ac3cc(0x242)+'aptur'+'e']=_0x8d0365,_0x3e5f8e['expIi'](_0x263842)):(_0x5cf3ee=Math['round'](_0x3e5f8e['dbhoX'](_0x3e5f8e[_0x5ac3cc(0x3bc)](_0x51d63a,-0x1bc3+-0x74*0x53+0x4547),_0x5aea9b-_0xeb3faa)),_0x51d63a=0x779*0x4+0x2065+-0x14c3*0x3,_0xeb3faa=_0x5aea9b));_0x54a09f(),_0x3e5f8e[_0x5ac3cc(0x362)](_0x57ec3c),_0x2a87ec['clear'+_0x5ac3cc(0x394)](-0x4*-0x5c9+-0x14*0x1bd+0xba0,-0x2211+-0x1000+0x3211,_0x58ca06['w'],_0x58ca06['h']);var _0x15c86b={'left':0x0,'top':0x0,'right':_0x58ca06['w'],'bottom':_0x58ca06['h'],'width':_0x58ca06['w'],'height':_0x58ca06['h']};if(_0x572c3c[_0x5ac3cc(0x52d)+_0x5ac3cc(0x37d)])_0x532bd2(_0x15c86b);if(_0x572c3c[_0x5ac3cc(0x616)+_0x5ac3cc(0x6b5)])_0x3e5f8e['uyCUK'](_0x2e6652,_0x15c86b);_0x4b847f(_0x15c86b);}else{var _0x3cc2ed=_0x1b2494['hookP'+'ostfi'+'x']({'typeName':_0x15f32e,'methodName':_0x43bb97,'params':_0x1e282a,'returnType':_0x367522},_0x391e1d);return _0x3cc2ed['enabl'+'ed']=_0x3e5f8e['ndvux'](_0x300afd,![]),_0x509ef0[_0x39c4e8]=_0x3cc2ed,_0x35cee3[_0x5ac3cc(0x457)+'Total']++,_0x3cc2ed;}}var _0x4f8069=document['creat'+'eElem'+'ent'](_0x37e670(0x604));_0x4f8069['id']=_0x37e670(0x169)+_0x37e670(0x6ab),_0x4f8069[_0x37e670(0x5b6)]['cssTe'+'xt']=_0x37e670(0x359)+_0x37e670(0x42e)+_0x37e670(0x64e)+'inset'+_0x37e670(0x67d)+_0x37e670(0x5e1)+':2147'+_0x37e670(0x4e5)+_0x37e670(0x32f)+'nter-'+_0x37e670(0x2b5)+'s:non'+'e;';var _0x5da98b=_0x4f8069['attac'+_0x37e670(0x381)+'ow']({'mode':_0x418dfe['eJtLZ']});(document[_0x37e670(0x5ce)]||document['docum'+'entEl'+_0x37e670(0x1a4)])[_0x37e670(0x51b)+'dChil'+'d'](_0x4f8069);var _0x28702f=![],_0x2421f4={};try{_0x2421f4=JSON['parse'](localStorage['getIt'+'em'](_0x418dfe[_0x37e670(0x48e)])||'{}');}catch(_0x52b810){}function _0x2f03fb(){var _0x3aba52=_0x37e670;try{'PJZmn'===_0x3aba52(0x29e)?localStorage['setIt'+'em'](_0x3e5f8e['QvYpi'],JSON[_0x3aba52(0x419)+'gify'](_0x2421f4)):_0x30bb54(_0x366f1d,_0x4b0723,_0x2198b9,_0x3aba52(0x47c)+_0x3aba52(0x510));}catch(_0x1629e1){}}function _0x473814(_0x3d1728,_0x2a5438){var _0x512c5b=_0x37e670,_0x55cc95=_0x3e5f8e['hjutE'][_0x512c5b(0x1da)]('|'),_0xe241a8=0x18d4+0x1*0x1e17+-0x36eb;while(!![]){switch(_0x55cc95[_0xe241a8++]){case'0':_0x26e6ae['setAt'+_0x512c5b(0x135)+'te'](_0x3e5f8e[_0x512c5b(0x6e7)],_0x3e5f8e['qGTzV']);continue;case'1':var _0x26e6ae=document[_0x512c5b(0x4b4)+'eElem'+_0x512c5b(0x2b9)](_0x512c5b(0x16f)+'n');continue;case'2':_0x26e6ae[_0x512c5b(0x3e5)]='butto'+'n';continue;case'3':_0x26e6ae[_0x512c5b(0x30d)+_0x512c5b(0x68a)]=_0x512c5b(0x3cb)+'itch';continue;case'4':_0x26e6ae[_0x512c5b(0x47a)+_0x512c5b(0x135)+'te'](_0x3e5f8e['qUBFk'],_0x3e5f8e[_0x512c5b(0x371)](String,!!_0x3d1728));continue;case'5':return _0x26e6ae;case'6':_0x26e6ae[_0x512c5b(0x353)+'ck']=_0x186f89=>{var _0xd46150=_0x512c5b;_0x186f89[_0xd46150(0x680)+_0xd46150(0x24f)+_0xd46150(0x153)]();var _0x2a313d=_0x26e6ae['getAt'+_0xd46150(0x135)+'te']('aria-'+_0xd46150(0x647)+'ed')!=='true';_0x26e6ae[_0xd46150(0x47a)+'tribu'+'te'](_0x3e5f8e[_0xd46150(0x152)],_0x3e5f8e[_0xd46150(0x371)](String,_0x2a313d)),_0x2a5438(_0x2a313d);};continue;}break;}}function _0x2794af(_0x281052,_0x223c07,_0x519840,_0x29828f,_0x4efd99){var _0x35b88b=_0x37e670,_0x1d7120={'RVVpZ':function(_0x3bb68a,_0x3569b7){var _0x5708fa=_0x3428;return _0x418dfe[_0x5708fa(0x1ca)](_0x3bb68a,_0x3569b7);},'xZEGo':_0x35b88b(0x3dc),'mcwhh':_0x418dfe['PFsTE'],'UgvtM':function(_0xcbdbed,_0x195b95){return _0xcbdbed(_0x195b95);},'WAMte':function(_0x2d2f3b,_0x3a1dab){return _0x2d2f3b+_0x3a1dab;}},_0x34044e=document[_0x35b88b(0x4b4)+'eElem'+'ent'](_0x35b88b(0x604));_0x34044e[_0x35b88b(0x30d)+'Name']=_0x418dfe['zKatI'];var _0x29af1c=document['creat'+_0x35b88b(0x626)+'ent'](_0x35b88b(0x3b9));_0x29af1c['type']='range',_0x29af1c['class'+_0x35b88b(0x68a)]=_0x35b88b(0x178)+_0x35b88b(0x239),_0x29af1c[_0x35b88b(0x5f4)]=_0x223c07,_0x29af1c[_0x35b88b(0x34d)]=_0x519840,_0x29af1c['step']=_0x29828f,_0x29af1c[_0x35b88b(0x26f)]=_0x281052;var _0x534275=document[_0x35b88b(0x4b4)+_0x35b88b(0x626)+_0x35b88b(0x2b9)]('span');_0x534275[_0x35b88b(0x30d)+'Name']='sk-va'+'l',_0x534275[_0x35b88b(0x2f6)+'onten'+'t']=String(_0x281052);var _0x1ff354=()=>{var _0x1ece63=_0x35b88b;_0x1d7120[_0x1ece63(0x14a)](_0x1d7120['xZEGo'],_0x1d7120[_0x1ece63(0x4d8)])?_0x25d1d4[_0x1ece63(0x19e)+'ed']=![]:(_0x534275[_0x1ece63(0x2f6)+_0x1ece63(0x577)+'t']=_0x1d7120[_0x1ece63(0x547)](String,_0x29af1c[_0x1ece63(0x26f)]),_0x34044e[_0x1ece63(0x5b6)][_0x1ece63(0x3c6)+'opert'+'y'](_0x1ece63(0x1db),_0x1d7120[_0x1ece63(0x133)]((_0x29af1c[_0x1ece63(0x26f)]-_0x223c07)/(_0x519840-_0x223c07)*(-0x13f7+0x7d*-0x13+0x1*0x1da2),'%')));};return _0x29af1c[_0x35b88b(0x281)+'ut']=()=>{var _0x43cba8=_0x35b88b,_0x796b50={'FuaUl':function(_0x417e92,_0x25d74d){return _0x417e92+_0x25d74d;},'qWQvN':function(_0x3c6c4a,_0x1ed620){return _0x3c6c4a+_0x1ed620;},'qgUPv':'UWMK\x20'+'bound'+'\x20','mnRcI':_0x3e5f8e[_0x43cba8(0x249)],'MhThx':_0x3e5f8e['JEYJo'],'EeHCb':_0x3e5f8e[_0x43cba8(0x32e)],'zpSmH':_0x3e5f8e[_0x43cba8(0x55b)],'WgJuU':_0x43cba8(0x3db)+'\x20Unit'+'yEngi'+'ne.Ap'+_0x43cba8(0x397)+'tion.'+'set_t'+_0x43cba8(0x482)+'Frame'+'Rate','IqzCf':function(_0x2323f1,_0x25a067,_0x20c13c){var _0x585a4b=_0x43cba8;return _0x3e5f8e[_0x585a4b(0x5bc)](_0x2323f1,_0x25a067,_0x20c13c);}};if(_0x3e5f8e[_0x43cba8(0x3d5)](_0x3e5f8e['PCJMj'],'HhCPe')){var _0x4a21df=_0x1fc1f7[_0x43cba8(0x63d)+'ode']?'SAFE\x20'+_0x43cba8(0x477)+_0x43cba8(0x3f8)+'rlay\x20'+'only,'+_0x43cba8(0x2ba)+_0x43cba8(0x55f)+_0x43cba8(0x4e7)+'ad\x20to'+'\x20exit'+')':_0x179eae[_0x43cba8(0x5d4)]?_0x796b50['FuaUl'](_0x796b50['FuaUl'](_0x796b50[_0x43cba8(0x551)](_0x796b50[_0x43cba8(0x3b8)](_0x796b50['qgUPv'],_0x5753fc['hooks'+'Total']?_0x5a2765[_0x43cba8(0x457)+'Ok']+'/'+_0x12ceb6[_0x43cba8(0x457)+_0x43cba8(0x694)]+_0x796b50[_0x43cba8(0x292)]:_0x43cba8(0x22d)+_0x43cba8(0x3a3)+_0x43cba8(0x284)+_0x43cba8(0x637)+_0x43cba8(0x173))+(_0x43cba8(0x282)+'me\x20'),_0x414cb0['gameL'+_0x43cba8(0x5b2)]?_0x43cba8(0x6e2)+'d':_0x43cba8(0x67e)+'ng')+(_0x43cba8(0x657)+'ooter'+'\x20'),_0x343b88[_0x43cba8(0x47c)+_0x43cba8(0x510)]?_0x796b50['MhThx']:_0x796b50[_0x43cba8(0x670)])+_0x796b50[_0x43cba8(0x269)],_0x4141b1['movem'+'ents']?_0x43cba8(0x1ba):_0x796b50['EeHCb']):_0x43cba8(0x3d4)+_0x43cba8(0x3c0)+_0x43cba8(0x5e9)+_0x43cba8(0x681)+_0x43cba8(0x691)+_0x43cba8(0x6da)+'einst'+'all\x20t'+'he\x20us'+_0x43cba8(0x21f)+_0x43cba8(0x542);if(_0x5ef605['lastE'+_0x43cba8(0x5d2)])_0x4a21df+='\x20|\x20ER'+_0x43cba8(0x46c)+_0x356bd8[_0x43cba8(0x505)+_0x43cba8(0x5d2)];return _0x595fca('Statu'+'s',_0x4a21df,_0x136a66['uwmk'],null,[_0xe6ef7b(_0x43cba8(0x1f2)+'PS\x20un'+_0x43cba8(0x164),_0x796b50[_0x43cba8(0x22e)],_0x796b50[_0x43cba8(0x2d8)](_0x4ec4bd,_0x43cba8(0x4e3),()=>{var _0x42825f=_0x43cba8;try{if(_0x5cf651)_0x3c4bf9[_0x42825f(0x431)](_0x42825f(0x638)+_0x42825f(0x247)+'e.App'+'licat'+_0x42825f(0x55d),_0x42825f(0x5b0)+_0x42825f(0x482)+_0x42825f(0x1de)+_0x42825f(0x231),[-0xdc*0x1+0xfd4+-0xe08]);}catch(_0x3a1248){}}))]);}else _0x1ff354(),_0x3e5f8e[_0x43cba8(0x5a5)](_0x4efd99,Number(_0x29af1c[_0x43cba8(0x26f)]));},_0x1ff354(),_0x34044e[_0x35b88b(0x51b)+'d'](_0x29af1c,_0x534275),_0x34044e;}function _0x351f8b(_0x4331f4,_0x4fa83d){var _0x55d038=_0x37e670;if('oBgvF'===_0x55d038(0x493))_0x57f53b[_0x55d038(0x6f3)+_0x55d038(0x68f)]=_0x4e18b6,_0x3e5f8e[_0x55d038(0x362)](_0x3a70d9);else{var _0x44e7b1=(_0x55d038(0x4de)+_0x55d038(0x62e)+'1')['split']('|'),_0x1ff5f5=-0x463*0x8+0x2*-0x1212+0x473c;while(!![]){switch(_0x44e7b1[_0x1ff5f5++]){case'0':_0xfa63a5['class'+'Name']=_0x418dfe['nAZYK'];continue;case'1':return _0xfa63a5;case'2':var _0xfa63a5=document['creat'+_0x55d038(0x626)+'ent'](_0x55d038(0x3b9));continue;case'3':_0xfa63a5['value']=/^#[0-9a-f]{6}$/i[_0x55d038(0x1d3)](_0x4331f4)?_0x4331f4:_0x418dfe[_0x55d038(0x475)];continue;case'4':_0xfa63a5[_0x55d038(0x3e5)]=_0x55d038(0x413);continue;case'5':_0xfa63a5[_0x55d038(0x281)+'ut']=()=>_0x4fa83d(_0xfa63a5[_0x55d038(0x26f)]);continue;}break;}}}function _0x5a0fc7(_0x2f48f7,_0x215838,_0xf7d4ba){var _0x194b42=_0x37e670;if(_0x194b42(0x4ac)!==_0x194b42(0x4ac))_0x1255c6['appen'+_0x194b42(0x2e7)+'d'](_0x241aa0);else{var _0x3f2df9=document['creat'+_0x194b42(0x626)+_0x194b42(0x2b9)](_0x3e5f8e[_0x194b42(0x4ff)]);_0x3f2df9['class'+'Name']=_0x3e5f8e['QPCWw'];for(var [_0x3a5175,_0x32dfcc]of _0x215838){if(_0x3e5f8e[_0x194b42(0x6d6)]!==_0x194b42(0x3aa)){var _0x3bc38c=document[_0x194b42(0x4b4)+'eElem'+_0x194b42(0x2b9)]('optio'+'n');_0x3bc38c[_0x194b42(0x26f)]=_0x3a5175,_0x3bc38c[_0x194b42(0x2f6)+_0x194b42(0x577)+'t']=_0x32dfcc,_0x3f2df9['appen'+_0x194b42(0x2e7)+'d'](_0x3bc38c);}else{_0x2460cf[_0x194b42(0x6bf)+_0x194b42(0x5b2)]=!!_0x3e6fc1['unity'+_0x194b42(0x50d)+_0x194b42(0x46f)];try{var _0x42de84=-0x217e+-0x24ce+0xb*0x664;for(var _0xf15ea6 in _0x479d2f){if(_0x5b3d9e[_0xf15ea6]&&_0x2e649c[_0xf15ea6][_0x194b42(0x454)+'ed'])_0x42de84++;}_0x315137[_0x194b42(0x457)+'Ok']=_0x42de84;}catch(_0x12e130){}}}return _0x3f2df9[_0x194b42(0x26f)]=_0x2f48f7,_0x3f2df9['oncha'+'nge']=()=>_0xf7d4ba(_0x3f2df9[_0x194b42(0x26f)]),_0x3f2df9;}}function _0x941fcb(_0x2ab033,_0x55096b){var _0x16ecde=_0x37e670,_0x142cf6={'bbJOV':function(_0x2bac92){return _0x2bac92();}},_0x210224=document[_0x16ecde(0x4b4)+_0x16ecde(0x626)+_0x16ecde(0x2b9)](_0x3e5f8e[_0x16ecde(0x42a)]);return _0x210224[_0x16ecde(0x3e5)]=_0x16ecde(0x16f)+'n',_0x210224['class'+'Name']=_0x16ecde(0x443)+'n',_0x210224['textC'+_0x16ecde(0x577)+'t']=_0x2ab033,_0x210224['oncli'+'ck']=_0x113c68=>{var _0x34ac5f=_0x16ecde;_0x113c68['stopP'+'ropag'+_0x34ac5f(0x153)](),_0x142cf6[_0x34ac5f(0x276)](_0x55096b);},_0x210224;}function _0x54d57d(_0x321545,_0x3d173b,_0x9d5e9c){var _0x3f4b0e=_0x37e670,_0xc11da9=document['creat'+'eElem'+'ent'](_0x418dfe['AjlBQ']);_0xc11da9[_0x3f4b0e(0x30d)+_0x3f4b0e(0x68a)]='sk-ct'+'l';var _0x268d76=document['creat'+_0x3f4b0e(0x626)+'ent'](_0x418dfe[_0x3f4b0e(0x4e9)]);_0x268d76['class'+'Name']=_0x418dfe[_0x3f4b0e(0x2e6)],_0x268d76[_0x3f4b0e(0x2f6)+_0x3f4b0e(0x577)+'t']=_0x321545;if(_0x3d173b){var _0x1699c5=document[_0x3f4b0e(0x4b4)+_0x3f4b0e(0x626)+_0x3f4b0e(0x2b9)]('small');_0x1699c5[_0x3f4b0e(0x30d)+_0x3f4b0e(0x68a)]='sk-hi'+'nt',_0x1699c5[_0x3f4b0e(0x2f6)+_0x3f4b0e(0x577)+'t']=_0x3d173b,_0x268d76[_0x3f4b0e(0x51b)+_0x3f4b0e(0x2e7)+'d'](_0x1699c5);}return _0xc11da9[_0x3f4b0e(0x51b)+'d'](_0x268d76,_0x9d5e9c),_0xc11da9;}function _0x29fe32(_0x45f654,_0x5dc1c4){var _0xd6ac07=_0x37e670,_0x50d743=document['creat'+_0xd6ac07(0x626)+'ent']('div');return _0x50d743[_0xd6ac07(0x30d)+_0xd6ac07(0x68a)]='sk-no'+'te'+(_0x5dc1c4?_0xd6ac07(0x310):''),_0x50d743[_0xd6ac07(0x2f6)+_0xd6ac07(0x577)+'t']=_0x45f654,_0x50d743;}function _0x51d806(_0x41ca42,_0x27b8e7,_0x31a1b7,_0x4d7915,_0x318a44){var _0x284790=_0x37e670,_0x4aaa08={'XkVOo':function(_0x4a9b14,_0x2809f0){var _0x5b0cba=_0x3428;return _0x418dfe[_0x5b0cba(0x4e1)](_0x4a9b14,_0x2809f0);},'WHDWo':function(_0x57dc9f){return _0x418dfe['GoeBG'](_0x57dc9f);}},_0x24aa54=document['creat'+_0x284790(0x626)+_0x284790(0x2b9)]('div');_0x24aa54[_0x284790(0x30d)+'Name']=_0x284790(0x202)+'rd'+(_0x31a1b7?_0x284790(0x5c7):'');var _0x37d2d3=document[_0x284790(0x4b4)+_0x284790(0x626)+'ent'](_0x418dfe[_0x284790(0x3b4)]);_0x37d2d3[_0x284790(0x30d)+'Name']=_0x418dfe[_0x284790(0x520)];var _0xadfed=document['creat'+'eElem'+_0x284790(0x2b9)](_0x284790(0x604));_0xadfed[_0x284790(0x30d)+'Name']=_0x418dfe[_0x284790(0x219)];var _0x2c3847=document[_0x284790(0x4b4)+'eElem'+_0x284790(0x2b9)](_0x418dfe['CVUdW']);_0x2c3847[_0x284790(0x2f6)+_0x284790(0x577)+'t']=_0x41ca42,_0xadfed['appen'+_0x284790(0x2e7)+'d'](_0x2c3847);if(_0x4d7915){var _0x37fd32=_0x473814(_0x31a1b7,_0x3e5cd3=>{var _0x5d3d90=_0x284790;'uiATv'===_0x5d3d90(0x5f6)?(_0x2e70d4['class'+'List']['toggl'+'e']('on',_0x47120e),_0x4aaa08['XkVOo'](_0x42a5ff,_0x10b1b6)):(_0x24aa54[_0x5d3d90(0x30d)+_0x5d3d90(0x623)][_0x5d3d90(0x15e)+'e']('on',_0x3e5cd3),_0x4d7915(_0x3e5cd3));});_0x37d2d3['appen'+'d'](_0xadfed,_0x37fd32);}else _0x37d2d3['appen'+_0x284790(0x2e7)+'d'](_0xadfed);_0x24aa54['appen'+_0x284790(0x2e7)+'d'](_0x37d2d3);if(_0x318a44&&_0x318a44[_0x284790(0x3f2)+'h']){if(_0x418dfe['NSrjh']===_0x418dfe['NSrjh']){var _0x57dc30=_0x418dfe['IkiBi']['split']('|'),_0x7bcd27=0xb*0x343+0x94f*0x4+-0x491d;while(!![]){switch(_0x57dc30[_0x7bcd27++]){case'0':_0x224a77['class'+_0x284790(0x68a)]='sk-md'+'esc';continue;case'1':for(var _0x59cedb of _0x318a44)_0xd16c01[_0x284790(0x51b)+'dChil'+'d'](_0x59cedb);continue;case'2':var _0xd16c01=document['creat'+'eElem'+'ent'](_0x284790(0x604));continue;case'3':_0x224a77[_0x284790(0x2f6)+'onten'+'t']=_0x27b8e7;continue;case'4':_0xd16c01['class'+_0x284790(0x68a)]=_0x418dfe[_0x284790(0x1ad)];continue;case'5':_0x24aa54['appen'+_0x284790(0x2e7)+'d'](_0xd16c01);continue;case'6':var _0x224a77=document['creat'+_0x284790(0x626)+_0x284790(0x2b9)](_0x284790(0x604));continue;case'7':_0xd16c01[_0x284790(0x51b)+_0x284790(0x2e7)+'d'](_0x224a77);continue;}break;}}else _0x439cec['ksPos']=_0x35916c,_0x4aaa08[_0x284790(0x4d3)](_0x7adac7);}return _0x24aa54;}var _0x31402c=[{'id':_0x418dfe['KtXJE'],'label':_0x418dfe['lmCdP']},{'id':_0x418dfe[_0x37e670(0x1cc)],'label':_0x418dfe[_0x37e670(0x142)]},{'id':_0x418dfe[_0x37e670(0x445)],'label':_0x37e670(0x3f0)+'l'},{'id':_0x37e670(0x324),'label':_0x37e670(0x22f)},{'id':_0x37e670(0x5fe),'label':_0x418dfe[_0x37e670(0x1ee)]}];function _0x4368ad(){var _0x23cc4b=_0x37e670,_0x5911ee=_0x1d435c['safeM'+'ode']?'SAFE\x20'+'MODE\x20'+_0x23cc4b(0x3f8)+_0x23cc4b(0x523)+_0x23cc4b(0x41c)+'\x20no\x20h'+_0x23cc4b(0x55f)+_0x23cc4b(0x4e7)+'ad\x20to'+_0x23cc4b(0x5cc)+')':_0x1d435c['uwmk']?_0x3e5f8e[_0x23cc4b(0x58e)](_0x3e5f8e['KIEMz'](_0x3e5f8e[_0x23cc4b(0x66d)](_0x23cc4b(0x3d4)+'bound'+'\x20'+(_0x1d435c['hooks'+_0x23cc4b(0x694)]?_0x3e5f8e['KIEMz'](_0x1d435c[_0x23cc4b(0x457)+'Ok'],'/')+_0x1d435c['hooks'+_0x23cc4b(0x694)]+('\x20hook'+'s'):_0x23cc4b(0x22d)+_0x23cc4b(0x3a3)+_0x23cc4b(0x284)+_0x23cc4b(0x637)+_0x23cc4b(0x173)),_0x3e5f8e[_0x23cc4b(0x433)])+(_0x1d435c['gameL'+_0x23cc4b(0x5b2)]?_0x23cc4b(0x6e2)+'d':_0x23cc4b(0x67e)+'ng'),_0x23cc4b(0x657)+_0x23cc4b(0x503)+'\x20')+(_0x1d435c[_0x23cc4b(0x47c)+_0x23cc4b(0x510)]?_0x3e5f8e[_0x23cc4b(0x6cb)]:'none')+(_0x23cc4b(0x610)+_0x23cc4b(0x16b)+'t\x20'),_0x1d435c['movem'+_0x23cc4b(0x356)]?'held':'none'):_0x23cc4b(0x3d4)+_0x23cc4b(0x3c0)+_0x23cc4b(0x5e9)+_0x23cc4b(0x681)+'ay\x20on'+_0x23cc4b(0x6da)+_0x23cc4b(0x5ea)+'all\x20t'+'he\x20us'+_0x23cc4b(0x21f)+_0x23cc4b(0x542);if(_0x1d435c[_0x23cc4b(0x505)+'rror'])_0x5911ee+='\x20|\x20ER'+_0x23cc4b(0x46c)+_0x1d435c[_0x23cc4b(0x505)+_0x23cc4b(0x5d2)];return _0x51d806(_0x3e5f8e['XuOVM'],_0x5911ee,_0x1d435c[_0x23cc4b(0x5d4)],null,[_0x54d57d(_0x3e5f8e[_0x23cc4b(0x36b)],_0x23cc4b(0x3db)+'\x20Unit'+_0x23cc4b(0x255)+_0x23cc4b(0x450)+'plica'+_0x23cc4b(0x30c)+'set_t'+'arget'+'Frame'+'Rate',_0x941fcb('Apply',()=>{var _0x2559c6=_0x23cc4b;try{if(_0x36e948)_0x36e948[_0x2559c6(0x431)](_0x2559c6(0x638)+_0x2559c6(0x247)+_0x2559c6(0x60b)+_0x2559c6(0x5d3)+'ion',_0x2559c6(0x5b0)+'arget'+_0x2559c6(0x1de)+_0x2559c6(0x231),[-0x2089+0x24da+-0x361]);}catch(_0x198cf2){}}))]);}function _0x4a8ed9(_0x10b222){var _0x1a0aae=_0x37e670,_0x494a06={'XHemN':'Sakur'+'a\x20Kou'+'r\x20—\x20','wVdjP':function(_0x5ca71b){return _0x3e5f8e['odxsr'](_0x5ca71b);},'HLRjf':function(_0x22c408){return _0x22c408();},'mLKeN':function(_0x3de930){var _0x129605=_0x3428;return _0x3e5f8e[_0x129605(0x665)](_0x3de930);},'bcczJ':function(_0x2f0870,_0x11da6b){return _0x3e5f8e['Grvfm'](_0x2f0870,_0x11da6b);},'IKonL':_0x3e5f8e['rGXRx'],'GAKak':function(_0x272110){return _0x3e5f8e['fAkkU'](_0x272110);}};if(_0x3e5f8e['JXnZn'](_0x10b222,_0x3e5f8e['uZygY']))return _0x1a0aae(0x645)==='tjjKw'?[_0x4368ad(),_0x3e5f8e[_0x1a0aae(0x339)](_0x51d806,_0x3e5f8e[_0x1a0aae(0x158)],_0x3e5f8e[_0x1a0aae(0x3d8)],_0x572c3c[_0x1a0aae(0x602)],_0x3475d2=>{var _0x3db96e=_0x1a0aae;_0x572c3c[_0x3db96e(0x602)]=_0x3475d2,_0x3e5f8e['expIi'](_0x4443a9),_0x16f343(_0x3e5f8e[_0x3db96e(0x636)],_0x3475d2),_0x3e5f8e[_0x3db96e(0x299)](_0x16f343,_0x3e5f8e[_0x3db96e(0x268)],_0x3475d2);},[]),_0x51d806('No\x20Re'+_0x1a0aae(0x6d1),_0x3e5f8e['NKjIG'],_0x572c3c[_0x1a0aae(0x3f1)+'oil'],_0x248ef6=>{var _0x30b992=_0x1a0aae;if(_0x3e5f8e['NiZbQ'](_0x3e5f8e['AgssU'],_0x30b992(0x5f2))){_0x28f7a3[_0x30b992(0x27f)]=_0x252b0b,_0x40b1e4();var _0x3299b5=_0x5fffeb['find'](_0x4fdf66=>_0x4fdf66['id']===_0xcf1761)||_0x3a19d0[-0x25e1+-0x2304+0x48e5];_0x5683a7[_0x30b992(0x2f6)+_0x30b992(0x577)+'t']=_0x494a06['XHemN']+_0x3299b5[_0x30b992(0x17e)];for(var [_0x15175f,_0x18d3e6]of _0x517b28)_0x18d3e6[_0x30b992(0x30d)+_0x30b992(0x623)]['toggl'+'e'](_0x30b992(0x504)+'e',_0x15175f===_0x4cd3af);_0x3de962[_0x30b992(0x2ff)+_0x30b992(0x541)+'ldren'](..._0x323e52(_0x13ab3a));}else _0x572c3c[_0x30b992(0x3f1)+_0x30b992(0x68d)]=_0x248ef6,_0x3e5f8e['expIi'](_0x4443a9),_0x3e5f8e['BGlNq'](_0x16f343,_0x30b992(0x3f1)+'oil',_0x248ef6);},[]),_0x51d806(_0x3e5f8e[_0x1a0aae(0x1fa)],_0x1a0aae(0x5c3)+'s\x20spr'+_0x1a0aae(0x46d)+'nd\x20ma'+_0x1a0aae(0x6bc)+'ccura'+_0x1a0aae(0x38b)+_0x1a0aae(0x5f7)+'\x20weap'+_0x1a0aae(0x51e)+_0x1a0aae(0x6a1)+'00ms.',_0x572c3c[_0x1a0aae(0x51c)+'ead'],_0x201770=>{var _0x1ae584=_0x1a0aae;_0x572c3c[_0x1ae584(0x51c)+_0x1ae584(0x676)]=_0x201770,_0x4443a9();},[]),_0x3e5f8e['kWCdf'](_0x51d806,_0x3e5f8e['dJgXz'],_0x1a0aae(0x366)+_0x1a0aae(0x5db)+_0x1a0aae(0x194)+'Weapo'+'n.fir'+_0x1a0aae(0x14b)+_0x1a0aae(0x399)+_0x1a0aae(0x639)+_0x1a0aae(0x499)+'\x20may\x20'+'still'+'\x20gate'+_0x1a0aae(0x307)+'s.',_0x572c3c['rapid'+'Exp'],_0xb3dcf8=>{_0x572c3c['rapid'+'Exp']=_0xb3dcf8,_0x4443a9();},[]),_0x3e5f8e['TJyEI'](_0x51d806,_0x1a0aae(0x3cc)+_0x1a0aae(0x349)+'P]',_0x1a0aae(0x328)+'rites'+'\x20Over'+_0x1a0aae(0x3ed)+_0x1a0aae(0x6c5)+_0x1a0aae(0x13b)+_0x1a0aae(0x2b1)+_0x1a0aae(0x563)+'le\x20if'+_0x1a0aae(0x437)+_0x1a0aae(0x1c6)+_0x1a0aae(0x368)+_0x1a0aae(0x262)+'s.',_0x572c3c['damag'+_0x1a0aae(0x337)],_0x47df7b=>{var _0x5b4a27=_0x1a0aae;_0x572c3c[_0x5b4a27(0x6ee)+_0x5b4a27(0x337)]=_0x47df7b,_0x494a06[_0x5b4a27(0x5fd)](_0x4443a9);},[_0x3e5f8e[_0x1a0aae(0x2e8)](_0x54d57d,_0x1a0aae(0x3cc)+'e\x20val'+'ue',null,_0x2794af(_0x572c3c[_0x1a0aae(0x6ee)+'eValu'+'e'],0x1d47+-0x1292*-0x2+-0x1*0x4261,-0xc61+0x2076+-0x1221,0x1*0x16a+0x120c+0xed*-0x15,_0x8d0fee=>{var _0x4ca5b6=_0x1a0aae;_0x572c3c[_0x4ca5b6(0x6ee)+_0x4ca5b6(0x2e0)+'e']=_0x8d0fee,_0x3e5f8e[_0x4ca5b6(0x416)](_0x4443a9);}))]),_0x51d806(_0x1a0aae(0x3bf)+_0x1a0aae(0x156)+_0x1a0aae(0x534)+'EXP]',_0x3e5f8e[_0x1a0aae(0x25e)],_0x572c3c['infAm'+'moExp'],_0x270692=>{var _0x29a9a3=_0x1a0aae;_0x572c3c[_0x29a9a3(0x5aa)+_0x29a9a3(0x201)]=_0x270692,_0x494a06[_0x29a9a3(0x27a)](_0x4443a9);},[_0x3e5f8e['uyCUK'](_0x29fe32,'If\x20re'+'loads'+'\x20stil'+_0x1a0aae(0x4f0)+'in,\x20t'+_0x1a0aae(0x14c)+_0x1a0aae(0x535)+_0x1a0aae(0x26b)+_0x1a0aae(0x53b)+_0x1a0aae(0x5ab)+_0x1a0aae(0x131)+'.')])]:(_0x3dda5b[_0x1a0aae(0x35d)](_0x1a0aae(0x66a)+'ra-ko'+'ur]\x20h'+_0x1a0aae(0x26e)+_0x1a0aae(0x4d1)+'iled:',_0x472593,_0x5afbe1&&_0x48a48e['messa'+'ge']),null);if(_0x3e5f8e['Nfcwk'](_0x10b222,_0x3e5f8e['JTPYz']))return[_0x51d806('Speed',_0x3e5f8e[_0x1a0aae(0x61d)],_0x572c3c[_0x1a0aae(0x306)+'Pct']!==-0x2b6*0x3+0x10d*0x5+0x345,null,[_0x3e5f8e[_0x1a0aae(0x3c7)](_0x54d57d,_0x1a0aae(0x1d4)+'\x20%',_0x1a0aae(0x26d)+'\x20defa'+_0x1a0aae(0x5da),_0x2794af(_0x572c3c[_0x1a0aae(0x306)+_0x1a0aae(0x49c)],0x1635*0x1+0x21cd+-0x37d0,-0xedb+0x575+0xa92,-0x1f*0x7f+0x14b*-0x5+0x15dd,_0x44feb4=>{_0x572c3c['speed'+'Pct']=_0x44feb4,_0x4443a9();}))]),_0x51d806(_0x1a0aae(0x234)+_0x1a0aae(0x374)+_0x1a0aae(0x3da),_0x3e5f8e['TsUJf'],_0x572c3c[_0x1a0aae(0x17c)+'ct']!==0x1c3f*-0x1+0x1*0x2506+-0x863||_0x572c3c[_0x1a0aae(0x1af)+_0x1a0aae(0x20d)]!==-0x225e*0x1+-0x1a3f*0x1+-0x17*-0x2a7,null,[_0x54d57d('Jump\x20'+'%',null,_0x2794af(_0x572c3c[_0x1a0aae(0x17c)+'ct'],-0xa53*0x3+0x1fcb*-0x1+0x3ef6,0x1*0x5c9+0x101*-0x1c+0x177f,-0x3*0x3f8+0x1*0x190b+-0xd1e,_0x4d947c=>{var _0x2c4074=_0x1a0aae;_0x572c3c[_0x2c4074(0x17c)+'ct']=_0x4d947c,_0x4443a9();})),_0x3e5f8e['GjQpf'](_0x54d57d,_0x1a0aae(0x653)+_0x1a0aae(0x37c),_0x1a0aae(0x5d5)+'\x20=\x20fl'+_0x1a0aae(0x261),_0x3e5f8e[_0x1a0aae(0x539)](_0x2794af,_0x572c3c[_0x1a0aae(0x1af)+'tyPct'],-0x1357*0x1+-0x1*0x14ed+0x43*0x9a,-0x6fe+0x57a*0x2+-0x32e,0x2690+-0x2*0xe9+-0x24b9,_0x487afd=>{var _0x2eb253=_0x1a0aae;_0x572c3c[_0x2eb253(0x1af)+_0x2eb253(0x20d)]=_0x487afd,_0x4443a9();}))]),_0x51d806('Bunny'+'-hop','Zeroe'+_0x1a0aae(0x363)+_0x1a0aae(0x1a4)+_0x1a0aae(0x1e4)+_0x1a0aae(0x13d)+'ime\x20s'+'o\x20the'+_0x1a0aae(0x187)+_0x1a0aae(0x5c1)+_0x1a0aae(0x236)+_0x1a0aae(0x40e)+_0x1a0aae(0x63e)+'ies.',_0x572c3c[_0x1a0aae(0x3f7)],_0x24249c=>{var _0x7466c1=_0x1a0aae;_0x572c3c[_0x7466c1(0x3f7)]=_0x24249c,_0x4443a9();},[])];if(_0x10b222===_0x3e5f8e['vJabj'])return[_0x3e5f8e[_0x1a0aae(0x539)](_0x51d806,_0x3e5f8e[_0x1a0aae(0x679)],_0x3e5f8e[_0x1a0aae(0x6b2)],_0x572c3c['keyst'+_0x1a0aae(0x6b5)],_0x2a6f5f=>{var _0x292b2b=_0x1a0aae;_0x572c3c[_0x292b2b(0x616)+_0x292b2b(0x6b5)]=_0x2a6f5f,_0x4443a9();},[_0x54d57d(_0x1a0aae(0x146)+'ion',null,_0x5a0fc7(_0x572c3c['ksPos'],[['bl',_0x1a0aae(0x559)+_0x1a0aae(0x3e9)+'t'],['br',_0x3e5f8e['TFHgG']],['ml',_0x1a0aae(0x196)+'middl'+'e']],_0x6d92d=>{_0x572c3c['ksPos']=_0x6d92d,_0x4443a9();})),_0x54d57d(_0x3e5f8e[_0x1a0aae(0x1ed)],null,_0x3e5f8e[_0x1a0aae(0x6e6)](_0x2794af,_0x572c3c[_0x1a0aae(0x290)+'le'],0xfd6*-0x1+0x6f7*-0x1+0x16cd+0.6,-0x1*0x1d15+0x37f*-0xb+-0x438b*-0x1+0.6000000000000001,-0x20b7+0x20b*0x13+0x61a*-0x1+0.05,_0x38ebf4=>{var _0x7bc50=_0x1a0aae;_0x3e5f8e[_0x7bc50(0x5af)](_0x7bc50(0x58f),_0x7bc50(0x554))?(_0x572c3c['ksSca'+'le']=_0x38ebf4,_0x3e5f8e[_0x7bc50(0x362)](_0x4443a9)):_0x126cd7['enabl'+'ed']=!!_0x8b2850;})),_0x54d57d(_0x1a0aae(0x1b2)+_0x1a0aae(0x61c)+'t',null,_0x473814(_0x572c3c[_0x1a0aae(0x6ba)],_0x4862e6=>{_0x572c3c['ksCps']=_0x4862e6,_0x4443a9();}))]),_0x3e5f8e[_0x1a0aae(0x21b)](_0x51d806,_0x1a0aae(0x5f8)+_0x1a0aae(0x37d),'Custo'+_0x1a0aae(0x6dc)+_0x1a0aae(0x579)+_0x1a0aae(0x2f1)+_0x1a0aae(0x1f8),_0x572c3c[_0x1a0aae(0x52d)+_0x1a0aae(0x37d)],_0x5b9811=>{var _0x5e92d5=_0x1a0aae;_0x572c3c[_0x5e92d5(0x52d)+'hair']=_0x5b9811,_0x3e5f8e[_0x5e92d5(0x362)](_0x4443a9);},[_0x54d57d('Size',null,_0x2794af(_0x572c3c[_0x1a0aae(0x463)+'e'],0x1*0x123c+-0xa*0x131+-0x652+0.5,0x1253*-0x1+0xb6*-0x18+-0x2b9*-0xd+0.5,0xc0a+-0x23ee+0x17e4+0.1,_0x36da21=>{var _0x2f8084=_0x1a0aae;if(_0x2f8084(0x340)===_0x3e5f8e['hMVhr'])_0x572c3c[_0x2f8084(0x463)+'e']=_0x36da21,_0x4443a9();else try{new _0xbb707c(_0x475f73)['write'+_0x2f8084(0x1bc)](_0x783798,_0x3bd8be,_0x47409a);}catch(_0x2d6597){}})),_0x54d57d('Color',null,_0x3e5f8e[_0x1a0aae(0x5bc)](_0x351f8b,_0x572c3c[_0x1a0aae(0x39e)+'or'],_0x3ed9dd=>{var _0x3bf6e9=_0x1a0aae,_0x145888={'FyKgf':_0x3e5f8e[_0x3bf6e9(0x235)],'ZzKlT':function(_0x44ffdf,_0x5057fd){var _0x4c39ae=_0x3bf6e9;return _0x3e5f8e[_0x4c39ae(0x688)](_0x44ffdf,_0x5057fd);},'ZovpO':function(_0xb44959,_0x3cec12){var _0x25d1b8=_0x3bf6e9;return _0x3e5f8e[_0x25d1b8(0x3bc)](_0xb44959,_0x3cec12);},'BIjzX':function(_0xad91ee,_0x1e0217){return _0x3e5f8e['Grvfm'](_0xad91ee,_0x1e0217);},'QGrYg':function(_0x4b6c33,_0x33db8c){return _0x4b6c33-_0x33db8c;},'vtBsR':function(_0x2aae0f,_0x357946){return _0x3e5f8e['bHGeY'](_0x2aae0f,_0x357946);},'tiqQt':function(_0x2136a0,_0x136504){return _0x2136a0/_0x136504;},'xyaNz':_0x3e5f8e['REsJw'],'VOaoV':function(_0x3f4e9b,_0x14214c,_0x21b113,_0x2fc968,_0x42183f,_0x40fab6,_0x4e2ef5){return _0x3f4e9b(_0x14214c,_0x21b113,_0x2fc968,_0x42183f,_0x40fab6,_0x4e2ef5);},'ErJri':_0x3bf6e9(0x1c9),'PtCBh':function(_0x370689,_0x593baa){var _0x5abf9f=_0x3bf6e9;return _0x3e5f8e[_0x5abf9f(0x5cb)](_0x370689,_0x593baa);},'QMbsI':function(_0x1510d1,_0x41f315){return _0x3e5f8e['voPcR'](_0x1510d1,_0x41f315);},'xrkEb':function(_0x376dc5,_0x24f7db){return _0x376dc5+_0x24f7db;},'ShERD':'\x20CPS','eDyJC':function(_0x27b6a1,_0x420b57,_0x46dcf4,_0x3e0b57,_0x23810c,_0x22bfb2,_0x524c03,_0x52ef2e){return _0x27b6a1(_0x420b57,_0x46dcf4,_0x3e0b57,_0x23810c,_0x22bfb2,_0x524c03,_0x52ef2e);},'RvjDW':_0x3bf6e9(0x390),'DAuyB':'mouse'+'3','dmZkL':function(_0x9df4cc,_0x2db8f6){return _0x3e5f8e['YCriY'](_0x9df4cc,_0x2db8f6);}};if(_0x3e5f8e[_0x3bf6e9(0x5af)](_0x3e5f8e['zxrZY'],'pgPwg')){var _0x6bbca2={'MEOuz':_0x3bf6e9(0x192)+_0x3bf6e9(0x218)+'07,15'+'7,0.8'+'5)','WiZxH':_0x3bf6e9(0x192)+_0x3bf6e9(0x42c)+_0x3bf6e9(0x1d2)+'7)','UwnGm':'#fff','VVyKU':_0x145888[_0x3bf6e9(0x52b)],'meCQn':function(_0x3a0b02,_0x4a2f3a){var _0x566e14=_0x3bf6e9;return _0x145888[_0x566e14(0x21d)](_0x3a0b02,_0x4a2f3a);},'ipoKZ':function(_0x2a92be,_0x5ed0ab){return _0x2a92be/_0x5ed0ab;},'YragA':function(_0x4c4bd5,_0x3da2b6){var _0x2475ff=_0x3bf6e9;return _0x145888[_0x2475ff(0x21d)](_0x4c4bd5,_0x3da2b6);},'aqeUV':function(_0xe303f3,_0x34b06a){return _0xe303f3*_0x34b06a;},'nZtZX':_0x3bf6e9(0x192)+_0x3bf6e9(0x1d8)+_0x3bf6e9(0x68b)+'0,0.5'+'5)'},_0x2eb3c1=_0x27139c(_0x40cbb9[_0x3bf6e9(0x290)+'le'])||-0x1*-0x29b+0x6b9+0xb*-0xd9,_0x22bf45=(-0x768+0x6d7+-0xb3*-0x1)*_0x2eb3c1,_0x33213=(-0xaf3*0x2+-0x2c0*0x6+0x266a)*_0x2eb3c1,_0x17911b=_0x145888[_0x3bf6e9(0x36d)](_0x22bf45,0x34f+-0x1f1a+0x1bce)+_0x33213*(0xf48+-0xc4f+0x2f7*-0x1),_0xe3f840=_0x22bf45*(0x9d+0x3*0x65c+0x2*-0x9d7)+_0x145888['ZovpO'](_0x33213,0x1bb7+0x4*0x728+-0x3855),_0x4f9c88=_0x3b1d6d[_0x3bf6e9(0x3a7)],_0x5b6859=_0x145888[_0x3bf6e9(0x659)](_0x4f9c88,'br')?_0x145888[_0x3bf6e9(0x1fb)](_0x145888[_0x3bf6e9(0x572)](_0x5f065b['right'],0x647+-0x83e*0x1+0x1*0x207),_0x17911b):_0x1e368a[_0x3bf6e9(0x517)]+(-0xf2e+-0x11e6+0x2124),_0xa397d3=_0x4f9c88==='ml'?_0x145888['ZzKlT'](_0x1ca175[_0x3bf6e9(0x570)],_0x145888['tiqQt'](_0x5dce03[_0x3bf6e9(0x617)+'t'],-0x1*0x24b7+-0x209d+0x32*0x163))-_0xe3f840/(-0xfa+0x1*0x16f5+-0x15f9):_0x145888[_0x3bf6e9(0x1fb)](_0x44197d['botto'+'m']-_0xe3f840,_0x145888['BIjzX'](_0x4f9c88,'bl')?0x1e2f+-0x1*-0x24bc+-0x428b*0x1:0x1*0x2553+-0x583+-0x1f3a),_0x295e27=(_0x30a330,_0x6995dc,_0x45f007,_0x359f9c,_0x188491,_0x8fa75,_0x44fa51)=>{var _0x5aa2d9=_0x3bf6e9,_0x1cf38b=_0x15b335['has'](_0x6995dc);_0xd8f10c[_0x5aa2d9(0x408)](),_0x32ed4e[_0x5aa2d9(0x68c)+_0x5aa2d9(0x33b)]();if(_0x2d95b2['round'+_0x5aa2d9(0x394)])_0x4556c4[_0x5aa2d9(0x609)+'Rect'](_0x45f007,_0x359f9c,_0x188491,_0x8fa75,(-0x789+-0x1*-0x13c9+0x95*-0x15)*_0x2eb3c1);else _0x35e268[_0x5aa2d9(0x3bd)](_0x45f007,_0x359f9c,_0x188491,_0x8fa75);_0x5a95ad['fillS'+'tyle']=_0x1cf38b?_0x6bbca2[_0x5aa2d9(0x5be)]:_0x6bbca2[_0x5aa2d9(0x54a)],_0x48b55b[_0x5aa2d9(0x383)](),_0x21c25f[_0x5aa2d9(0x2f3)+'idth']=0x16d*0x16+0x32*0x99+0x3d3f*-0x1,_0x24c976['strok'+_0x5aa2d9(0x4bb)+'e']=_0x1cf38b?_0x9ff346:_0x5aa2d9(0x192)+_0x5aa2d9(0x218)+'07,15'+_0x5aa2d9(0x1e5)+'5)',_0x2eb6c3[_0x5aa2d9(0x342)+'e'](),_0x1cf38b&&(_0x351aa[_0x5aa2d9(0x3f4)+_0x5aa2d9(0x34e)+'r']=_0x2fc066,_0x3ada8c['shado'+_0x5aa2d9(0x4d4)]=-0x2*-0x735+0x11ba*0x1+-0x2016,_0x243148[_0x5aa2d9(0x383)](),_0x1da290[_0x5aa2d9(0x3f4)+_0x5aa2d9(0x4d4)]=0x1*-0x24df+-0x589*0x6+0x4615),_0x11200c[_0x5aa2d9(0x25d)+'tyle']=_0x1cf38b?_0x6bbca2['UwnGm']:_0x6bbca2[_0x5aa2d9(0x34c)],_0x1c91a8['textA'+_0x5aa2d9(0x574)]=_0x5aa2d9(0x39c)+'r',_0x3ba3fa['textB'+'aseli'+'ne']=_0x5aa2d9(0x17b)+'e',_0x206673[_0x5aa2d9(0x57e)]=_0x6bbca2[_0x5aa2d9(0x4bd)](_0x5aa2d9(0x435)+_0x1b0ffb[_0x5aa2d9(0x609)]((0x7*0x4bb+0xcf6+-0x2e07)*_0x2eb3c1),_0x5aa2d9(0x42d)+_0x5aa2d9(0x13e)+'-seri'+_0x5aa2d9(0x3f6)+_0x5aa2d9(0x507)+'i,san'+'s-ser'+'if'),_0x5443bd[_0x5aa2d9(0x2c6)+_0x5aa2d9(0x1d1)](_0x30a330,_0x45f007+_0x6bbca2['ipoKZ'](_0x188491,0x2e1+0x12*-0x101+0xf33),_0x359f9c+_0x8fa75/(-0x2*-0x9ff+0x3c6+-0x17c2)-(_0x44fa51?(-0x2b3*0xc+0x4*0x839+-0x7b)*_0x2eb3c1:-0x2443+0x11*0x16f+0xbe4)),_0x44fa51&&(_0x2f9d07[_0x5aa2d9(0x57e)]=_0x6bbca2[_0x5aa2d9(0x4bd)](_0x6bbca2['YragA']('600\x20',_0x5eb875[_0x5aa2d9(0x609)](_0x6bbca2[_0x5aa2d9(0x50e)](0x1*-0x318+0x1a9e*-0x1+-0x1*-0x1dbf,_0x2eb3c1))),_0x5aa2d9(0x42d)+_0x5aa2d9(0x13e)+_0x5aa2d9(0x57b)+'f,sys'+_0x5aa2d9(0x507)+_0x5aa2d9(0x620)+_0x5aa2d9(0x2da)+'if'),_0x9ec121[_0x5aa2d9(0x25d)+'tyle']=_0x1cf38b?_0x5aa2d9(0x69a):_0x6bbca2['nZtZX'],_0xca85e5[_0x5aa2d9(0x2c6)+_0x5aa2d9(0x1d1)](_0x44fa51,_0x45f007+_0x188491/(0x5*0x5ee+0xaef+-0xdd*0x2f),_0x359f9c+_0x8fa75/(-0x33*-0x8e+-0x3*0xb0b+0x49*0x11)+(-0x1b48+-0x61*-0x36+-0x36d*-0x2)*_0x2eb3c1)),_0x2f74be['resto'+'re']();};_0x295e27('W',_0x145888['xyaNz'],_0x5b6859+_0x22bf45+_0x33213,_0xa397d3,_0x22bf45,_0x22bf45),_0x145888['VOaoV'](_0x295e27,'A',_0x145888[_0x3bf6e9(0x33d)],_0x5b6859,_0x145888['PtCBh'](_0xa397d3+_0x22bf45,_0x33213),_0x22bf45,_0x22bf45),_0x145888[_0x3bf6e9(0x3d0)](_0x295e27,'S','KeyS',_0x5b6859+_0x22bf45+_0x33213,_0x145888[_0x3bf6e9(0x41b)](_0x145888[_0x3bf6e9(0x39a)](_0xa397d3,_0x22bf45),_0x33213),_0x22bf45,_0x22bf45),_0x295e27('D','KeyD',_0x5b6859+_0x145888['QMbsI'](_0x22bf45,_0x33213)*(0x21d7*0x1+-0x5f*0x29+-0x129e*0x1),_0x145888['ZzKlT'](_0xa397d3+_0x22bf45,_0x33213),_0x22bf45,_0x22bf45);var _0x360574=_0x145888['tiqQt'](_0x145888['QGrYg'](_0x17911b,_0x33213),0xef5+-0x2*0x1370+0xaf*0x23),_0x4d4b36=_0xa397d3+(_0x22bf45+_0x33213)*(0x3*-0x98+-0x5*-0x149+-0x4a3);_0x295e27(_0x3bf6e9(0x6b4),'mouse'+'1',_0x5b6859,_0x4d4b36,_0x360574,_0x22bf45,_0x2bad0b[_0x3bf6e9(0x6ba)]?_0x19c61e(-0x2430+0x445*-0x9+0x4a9e)+_0x145888['ShERD']:''),_0x145888[_0x3bf6e9(0x43b)](_0x295e27,_0x145888[_0x3bf6e9(0x274)],_0x145888['DAuyB'],_0x145888[_0x3bf6e9(0x41b)](_0x5b6859+_0x360574,_0x33213),_0x4d4b36,_0x360574,_0x22bf45,_0x144389['ksCps']?_0x145888['QMbsI'](_0x29732d(-0x1951+-0x1ab*-0x3+-0x2b*-0x79),_0x145888[_0x3bf6e9(0x667)]):''),_0x295e27('',_0x3bf6e9(0x19d),_0x5b6859,_0x145888['dmZkL'](_0x4d4b36,_0x22bf45)+_0x33213,_0x17911b,_0x22bf45*(0x11c0+-0x16*-0x1+-0x11d6*0x1+0.45));}else _0x572c3c['chCol'+'or']=_0x3ed9dd,_0x4443a9();}))]),_0x51d806(_0x1a0aae(0x495)+'ers',_0x1a0aae(0x48c)+_0x1a0aae(0x5b8)+'y.',_0x572c3c[_0x1a0aae(0x597)],null,[_0x3e5f8e[_0x1a0aae(0x176)](_0x54d57d,_0x1a0aae(0x50a)+_0x1a0aae(0x4df)+'r',null,_0x3e5f8e[_0x1a0aae(0x543)](_0x473814,_0x572c3c[_0x1a0aae(0x597)],_0x480bbf=>{var _0x10a134=_0x1a0aae;_0x572c3c[_0x10a134(0x597)]=_0x480bbf,_0x3e5f8e['odxsr'](_0x4443a9);})),_0x3e5f8e[_0x1a0aae(0x371)](_0x29fe32,_0x3e5f8e['GqXUx'])])];if(_0x10b222===_0x1a0aae(0x324))return[_0x51d806(_0x1a0aae(0x4d6)+'ck','Hides'+'\x20kour'+_0x1a0aae(0x52f)+'\x20bann'+'er\x20sl'+_0x1a0aae(0x316),_0x572c3c[_0x1a0aae(0x5b4)+'ck'],_0x4de551=>{var _0x5ab2be=_0x1a0aae;_0x572c3c['adblo'+'ck']=_0x4de551,_0x494a06[_0x5ab2be(0x204)](_0x4443a9);},[_0x3e5f8e['cllrd'](_0x29fe32,_0x1a0aae(0x411)+'\x20effe'+_0x1a0aae(0x1c7)+'\x20relo'+_0x1a0aae(0x677)+'en\x20to'+_0x1a0aae(0x428)+'.')])];return[_0x51d806('Safe\x20'+'Mode\x20'+'(over'+_0x1a0aae(0x2e4)+'nly)',_0x3e5f8e['CbLnI'],_0x572c3c[_0x1a0aae(0x63d)+'ode'],_0x171585=>{_0x572c3c['safeM'+'ode']=_0x171585,_0x4443a9(),location['reloa'+'d']();},[_0x29fe32(_0x3e5f8e[_0x1a0aae(0x49f)])]),_0x3e5f8e[_0x1a0aae(0x321)](_0x51d806,_0x3e5f8e[_0x1a0aae(0x453)],_0x1a0aae(0x5f3)+_0x1a0aae(0x28e)+'nstal'+'ls\x20a\x20'+_0x1a0aae(0x144)+'tramp'+_0x1a0aae(0x19f)+'\x20for\x20'+'the\x20w'+_0x1a0aae(0x207)+_0x1a0aae(0x414)+'load.'+'\x20ALL\x20'+'OFF\x20b'+_0x1a0aae(0x4b5)+_0x1a0aae(0x5ba)+_0x1a0aae(0x2a6)+_0x1a0aae(0x405)+_0x1a0aae(0x62a)+_0x1a0aae(0x238)+_0x1a0aae(0x685)+'ot\x20ma'+_0x1a0aae(0x385)+'he\x20re'+_0x1a0aae(0x5ef)+_0x1a0aae(0x58a)+'throw'+_0x1a0aae(0x4fa)+_0x1a0aae(0x161)+'n\x20sig'+_0x1a0aae(0x66b)+'e\x20mis'+'match'+'\x27\x20the'+'\x20mome'+_0x1a0aae(0x5e8)+_0x1a0aae(0x56b)+'alled'+_0x1a0aae(0x658)+_0x1a0aae(0x208)+_0x1a0aae(0x18a)+_0x1a0aae(0x489)+_0x1a0aae(0x1b3)+'ime,\x20'+'reloa'+_0x1a0aae(0x320)+_0x1a0aae(0x487)+'\x20whic'+'h\x20one'+_0x1a0aae(0x5f7)+_0x1a0aae(0x264)+'d\x20cho'+_0x1a0aae(0x47d)+'n.',_0x572c3c['hookG'+'od']||_0x572c3c['hookG'+_0x1a0aae(0x38e)]||_0x572c3c[_0x1a0aae(0x556)+_0x1a0aae(0x2f7)+'il']||_0x572c3c[_0x1a0aae(0x242)+'aptur'+'e'],_0x3e952c=>{var _0x140cf2=_0x1a0aae,_0x25f0e4=_0x3e5f8e['gLMwt'][_0x140cf2(0x1da)]('|'),_0xde6dd6=-0x22e+-0x1047*0x1+0x1275;while(!![]){switch(_0x25f0e4[_0xde6dd6++]){case'0':location[_0x140cf2(0x3ba)+'d']();continue;case'1':_0x572c3c[_0x140cf2(0x2a4)+'od']=_0x3e952c;continue;case'2':_0x572c3c['hookN'+'oReco'+'il']=_0x3e952c;continue;case'3':_0x572c3c['hookG'+'odDie']=_0x3e952c;continue;case'4':_0x4443a9();continue;case'5':_0x572c3c[_0x140cf2(0x242)+'aptur'+'e']=_0x3e952c;continue;}break;}},[_0x3e5f8e[_0x1a0aae(0x209)](_0x29fe32,_0x1a0aae(0x3e7)+_0x1a0aae(0x4b1)+_0x1a0aae(0x216)+'ad.'),_0x3e5f8e[_0x1a0aae(0x3ae)](_0x54d57d,_0x3e5f8e['MzCIR'],null,_0x473814(_0x572c3c[_0x1a0aae(0x2a4)+'od'],_0x58a41a=>{_0x572c3c['hookG'+'od']=_0x58a41a,_0x4443a9();})),_0x54d57d(_0x1a0aae(0x6d7)+'e\x20(OH'+_0x1a0aae(0x2ca)+_0x1a0aae(0x474)+_0x1a0aae(0x2f5),null,_0x473814(_0x572c3c[_0x1a0aae(0x2a4)+'odDie'],_0xb6eef0=>{var _0x5489d4=_0x1a0aae;_0x572c3c[_0x5489d4(0x2a4)+_0x5489d4(0x38e)]=_0xb6eef0,_0x4443a9();})),_0x3e5f8e[_0x1a0aae(0x151)](_0x54d57d,_0x3e5f8e['ADbNL'],null,_0x473814(_0x572c3c['hookN'+_0x1a0aae(0x2f7)+'il'],_0x20e7d4=>{var _0x4f1c8d=_0x1a0aae,_0x3b3c03={'zlXSd':'set_t'+_0x4f1c8d(0x482)+_0x4f1c8d(0x1de)+_0x4f1c8d(0x231)};if(_0x494a06[_0x4f1c8d(0x39b)](_0x4f1c8d(0x63c),_0x494a06['IKonL']))try{if(_0x1d4cfb)_0x2f0875['call'](_0x4f1c8d(0x638)+_0x4f1c8d(0x247)+'e.App'+'licat'+'ion',_0x3b3c03[_0x4f1c8d(0x2e5)],[0x3e5+-0xe17*-0x2+-0xa61*0x3]);}catch(_0x3a7f87){}else _0x572c3c[_0x4f1c8d(0x556)+'oReco'+'il']=_0x20e7d4,_0x4443a9();})),_0x54d57d(_0x3e5f8e[_0x1a0aae(0x136)],_0x3e5f8e[_0x1a0aae(0x552)],_0x473814(_0x572c3c[_0x1a0aae(0x242)+'aptur'+'e'],_0x3c22db=>{var _0x495220=_0x1a0aae;_0x572c3c['hookC'+_0x495220(0x522)+'e']=_0x3c22db,_0x3e5f8e[_0x495220(0x362)](_0x4443a9);}))]),_0x3e5f8e[_0x1a0aae(0x539)](_0x51d806,_0x1a0aae(0x699)+_0x1a0aae(0x17d)+'r',_0x3e5f8e[_0x1a0aae(0x573)],_0x572c3c['actkK'+_0x1a0aae(0x68f)],_0x47a45e=>{var _0x41f8a8=_0x1a0aae;_0x572c3c['actkK'+_0x41f8a8(0x68f)]=_0x47a45e,_0x494a06['GAKak'](_0x4443a9);},[_0x29fe32(_0x3e5f8e['OsNEb'],!![])]),_0x3e5f8e[_0x1a0aae(0x21b)](_0x51d806,_0x3e5f8e[_0x1a0aae(0x1a6)],'These'+'\x20leav'+_0x1a0aae(0x50c)+_0x1a0aae(0x3c3)+'isibl'+'e\x20tra'+'ces.',!![],null,[_0x3e5f8e[_0x1a0aae(0x3ae)](_0x54d57d,_0x3e5f8e['Jzegc'],null,_0x941fcb(_0x1a0aae(0x3d6),()=>{_0x572c3c={..._0xd10323},_0x4443a9(),location['reloa'+'d']();}))])];}var _0xfa1e13=null;function _0x269535(_0x38f0c3){var _0x5b15f7=_0x37e670;_0x28702f=_0x38f0c3;if(!_0xfa1e13){var _0x3e07e4=(_0x5b15f7(0x52e)+_0x5b15f7(0x6cf)+'4')[_0x5b15f7(0x1da)]('|'),_0xbba845=0x41*-0x22+-0x67*0x29+0x1921;while(!![]){switch(_0x3e07e4[_0xbba845++]){case'0':_0x5da98b[_0x5b15f7(0x51b)+_0x5b15f7(0x2e7)+'d'](_0xfa1e13);continue;case'1':_0xfa1e13=_0xcf8648();continue;case'2':_0x5da98b[_0x5b15f7(0x51b)+_0x5b15f7(0x2e7)+'d'](_0x37274a);continue;case'3':var _0x37274a=document[_0x5b15f7(0x4b4)+_0x5b15f7(0x626)+'ent'](_0x5b15f7(0x5b6));continue;case'4':_0x418dfe[_0x5b15f7(0x35c)](requestAnimationFrame,()=>_0xfa1e13[_0x5b15f7(0x30d)+'List'][_0x5b15f7(0x6ea)](_0x5b15f7(0x1f4)));continue;case'5':_0x37274a[_0x5b15f7(0x2f6)+'onten'+'t']=_0x3d2a17;continue;}break;}}_0xfa1e13[_0x5b15f7(0x30d)+_0x5b15f7(0x623)][_0x5b15f7(0x15e)+'e'](_0x5b15f7(0x1f4),_0x38f0c3);}function _0x300a85(){var _0x274701=_0x37e670;if('weiFx'==='weiFx')_0x269535(!_0x28702f);else{var _0x1ff9ac=_0x3d04ab['capMo'+'ve'];if(_0x1ff9ac)try{_0x1ff9ac[_0x274701(0x19e)+'ed']=![];}catch(_0x22c62f){}}}function _0xcf8648(){var _0x48f406=_0x37e670,_0xa05bc1={'BGJbu':function(_0xd3f981,_0x1da336){var _0x10db09=_0x3428;return _0x3e5f8e[_0x10db09(0x312)](_0xd3f981,_0x1da336);},'egMRz':'rgba('+'255,2'+_0x48f406(0x68b)+_0x48f406(0x6b9)+'5)','FGMuz':'SQZPC','mbjzu':function(_0x5534bb,_0x35fe51){return _0x5534bb===_0x35fe51;},'dFZbT':_0x48f406(0x2dc),'tTSZx':_0x48f406(0x67b)+'MODE\x20'+'-\x20ove'+'rlay\x20'+'only,'+_0x48f406(0x2ba)+_0x48f406(0x55f)+_0x48f406(0x4e7)+_0x48f406(0x170)+_0x48f406(0x5cc)+')','CmmXv':function(_0x198c7d,_0x5486e5){return _0x198c7d+_0x5486e5;},'IiVoy':function(_0x267235,_0x31783c){var _0x47742a=_0x48f406;return _0x3e5f8e[_0x47742a(0x43d)](_0x267235,_0x31783c);},'riPzE':function(_0x5cb4b4,_0x1f2613){return _0x5cb4b4+_0x1f2613;},'ahHiM':function(_0x336753,_0x4953bd){return _0x3e5f8e['fLEWW'](_0x336753,_0x4953bd);},'ozLmE':function(_0x5bed5e,_0x2d8871){return _0x5bed5e+_0x2d8871;},'jPtGu':'\x20|\x20ga'+_0x48f406(0x36e),'qrily':_0x3e5f8e['JEYJo'],'MilvN':_0x3e5f8e['NkTwg']},_0x4d9a86=document['creat'+_0x48f406(0x626)+'ent'](_0x3e5f8e[_0x48f406(0x1c0)]);_0x4d9a86['class'+'Name']=_0x48f406(0x470)+_0x48f406(0x59b);var _0x2ae287=document['creat'+'eElem'+_0x48f406(0x2b9)]('nav');_0x2ae287[_0x48f406(0x30d)+_0x48f406(0x68a)]=_0x48f406(0x4f7)+'de';var _0x438fdc=document['creat'+'eElem'+_0x48f406(0x2b9)](_0x3e5f8e[_0x48f406(0x1c0)]);_0x438fdc[_0x48f406(0x30d)+'Name']='mn-lo'+'go',_0x438fdc[_0x48f406(0x516)+_0x48f406(0x32d)]='<svg\x20'+_0x48f406(0x19b)+_0x48f406(0x67f)+_0x48f406(0x40d)+_0x48f406(0x544)+'class'+_0x48f406(0x1b8)+_0x48f406(0x6e1)+'svg\x22>'+_0x48f406(0x608)+_0x48f406(0x41e)+_0x48f406(0x66c)+'c-1.5'+'-2.5-'+_0x48f406(0x275)+_0x48f406(0x481)+_0x48f406(0x2d3)+'.5\x201.'+_0x48f406(0x5a2)+_0x48f406(0x666)+_0x48f406(0x61e)+'\x204\x204.'+_0x48f406(0x6a9)+_0x48f406(0x524)+_0x48f406(0x141)+'.5z\x22\x20'+_0x48f406(0x354)+'\x22none'+_0x48f406(0x6b0)+_0x48f406(0x48b)+_0x48f406(0x3e6)+'9d\x22\x20s'+_0x48f406(0x500)+_0x48f406(0x6ec)+'h=\x222\x22'+_0x48f406(0x287)+_0x48f406(0x166)+_0x48f406(0x35a)+'=\x22rou'+'nd\x22\x20s'+_0x48f406(0x500)+_0x48f406(0x162)+'join='+_0x48f406(0x23f)+_0x48f406(0x334)+'circl'+'e\x20cx='+_0x48f406(0x6e3)+_0x48f406(0x4e0)+_0x48f406(0x46a)+_0x48f406(0x4dc)+'\x20fill'+_0x48f406(0x506)+'6b9d\x22'+_0x48f406(0x12e)+'vg>',_0x2ae287[_0x48f406(0x51b)+_0x48f406(0x2e7)+'d'](_0x438fdc);var _0x208f99=document[_0x48f406(0x4b4)+_0x48f406(0x626)+_0x48f406(0x2b9)](_0x3e5f8e[_0x48f406(0x1c0)]);_0x208f99[_0x48f406(0x30d)+'Name']=_0x3e5f8e[_0x48f406(0x3af)];var _0x9c1010=document['creat'+'eElem'+_0x48f406(0x2b9)]('heade'+'r');_0x9c1010['class'+_0x48f406(0x68a)]='mn-to'+'p';var _0x515021=document[_0x48f406(0x4b4)+'eElem'+_0x48f406(0x2b9)](_0x3e5f8e[_0x48f406(0x1c0)]);_0x515021['class'+'Name']=_0x3e5f8e['iXfnH'];var _0x740925=document[_0x48f406(0x4b4)+_0x48f406(0x626)+_0x48f406(0x2b9)]('h2');_0x740925['class'+_0x48f406(0x68a)]=_0x48f406(0x31b),_0x740925['textC'+'onten'+'t']=_0x3e5f8e[_0x48f406(0x462)];var _0x4233c3=document[_0x48f406(0x4b4)+_0x48f406(0x626)+_0x48f406(0x2b9)](_0x48f406(0x2a2));_0x4233c3['class'+_0x48f406(0x68a)]=_0x48f406(0x6f0)+'b',_0x4233c3[_0x48f406(0x2f6)+'onten'+'t']='kours'+'trike'+_0x48f406(0x3ef)+'enu',_0x515021['appen'+'d'](_0x740925,_0x4233c3);var _0x3426d7=document[_0x48f406(0x4b4)+'eElem'+'ent'](_0x48f406(0x16f)+'n');_0x3426d7[_0x48f406(0x3e5)]=_0x48f406(0x16f)+'n',_0x3426d7[_0x48f406(0x30d)+_0x48f406(0x68a)]=_0x3e5f8e[_0x48f406(0x157)],_0x3426d7[_0x48f406(0x47f)]='Close',_0x3426d7[_0x48f406(0x516)+'HTML']=_0x3e5f8e['ueYxS'],_0x3426d7[_0x48f406(0x353)+'ck']=()=>_0x269535(![]),_0x9c1010[_0x48f406(0x51b)+'d'](_0x515021,_0x3426d7);var _0x2070ac=document['creat'+'eElem'+'ent'](_0x3e5f8e[_0x48f406(0x1c0)]);_0x2070ac['class'+'Name']='mn-co'+'ls',_0x208f99['appen'+'d'](_0x9c1010,_0x2070ac),_0x4d9a86[_0x48f406(0x51b)+'d'](_0x2ae287,_0x208f99);var _0x39fa61=new Map();for(var _0x5b37ba of _0x31402c){if(_0x3e5f8e['JPlRz'](_0x3e5f8e[_0x48f406(0x409)],'vzbVu')){var _0x1cc7dd=_0x3e5f8e[_0x48f406(0x459)][_0x48f406(0x1da)]('|'),_0x165e8e=-0x13ef+-0x3*0x74a+0x29cd;while(!![]){switch(_0x1cc7dd[_0x165e8e++]){case'0':var _0x5195f1=(_0x3f5080,_0x58cd6a)=>{var _0xc4c3c8=_0x48f406;_0x2dcfed[_0xc4c3c8(0x25d)+'tyle']=_0xa05bc1['BGJbu'](_0x58cd6a,_0xa05bc1[_0xc4c3c8(0x352)]),_0xac8198[_0xc4c3c8(0x2c6)+_0xc4c3c8(0x1d1)](_0x3f5080,_0x5e1bba,_0x1e7b21),_0x1e7b21+=-0x16a3*-0x1+0x7*0x4e7+-0x38e4;};continue;case'1':_0x326f00['resto'+'re']();continue;case'2':_0x5891d4[_0x48f406(0x22c)+_0x48f406(0x574)]=_0x48f406(0x517);continue;case'3':_0x5195f1('SAKUR'+'A\x20KOU'+'R\x20v1.'+'1',_0x3e5f8e[_0x48f406(0x1d7)]);continue;case'4':_0x3f343b[_0x48f406(0x408)]();continue;case'5':if(!_0xf4befb['gameL'+_0x48f406(0x5b2)])_0x3e5f8e[_0x48f406(0x650)](_0x5195f1,_0x3e5f8e[_0x48f406(0x36f)],_0x3e5f8e[_0x48f406(0x406)]);continue;case'6':if(_0xa1b094[_0x48f406(0x597)])_0x5195f1(_0x1c545f+_0x3e5f8e[_0x48f406(0x243)]);continue;case'7':_0x3c8948['font']=_0x48f406(0x1ef)+'2px\x20u'+'i-mon'+_0x48f406(0x38c)+_0x48f406(0x1b0)+_0x48f406(0x38c)+'e';continue;case'8':var _0x1e7b21=0x4*-0x2dd+0x2382*-0x1+-0x1*-0x2f22,_0x5e1bba=0x19fc+0x10e8*0x1+-0x2ad8;continue;case'9':_0x4fede7['textB'+_0x48f406(0x58d)+'ne']=_0x3e5f8e['NtEpo'];continue;}break;}}else{var _0x7c6693=document[_0x48f406(0x4b4)+'eElem'+'ent'](_0x48f406(0x16f)+'n');_0x7c6693[_0x48f406(0x3e5)]='butto'+'n',_0x7c6693[_0x48f406(0x30d)+'Name']=_0x48f406(0x6c7)+'b',_0x7c6693['title']=_0x5b37ba[_0x48f406(0x17e)],_0x7c6693[_0x48f406(0x516)+'HTML']=_0x3e5f8e[_0x48f406(0x32a)](_0x3e5f8e[_0x48f406(0x652)]+_0x5b37ba['label'],_0x48f406(0x348)+_0x48f406(0x2f9)),_0x7c6693[_0x48f406(0x353)+'ck']=(_0x1e1d19=>()=>_0x30f177(_0x1e1d19))(_0x5b37ba['id']),_0x39fa61[_0x48f406(0x329)](_0x5b37ba['id'],_0x7c6693),_0x2ae287[_0x48f406(0x51b)+_0x48f406(0x2e7)+'d'](_0x7c6693);}}function _0x30f177(_0x359482){var _0x15dad6=_0x48f406;_0x2421f4[_0x15dad6(0x27f)]=_0x359482,_0x2f03fb();var _0x4404e9=_0x31402c['find'](_0xa6abc6=>_0xa6abc6['id']===_0x359482)||_0x31402c[0xf*-0xb8+-0x1a37+0x24ff];_0x740925[_0x15dad6(0x2f6)+_0x15dad6(0x577)+'t']=_0x3e5f8e[_0x15dad6(0x2c8)](_0x15dad6(0x1b7)+_0x15dad6(0x509)+_0x15dad6(0x14f),_0x4404e9['label']);for(var [_0x302158,_0xaa4c95]of _0x39fa61)_0xaa4c95[_0x15dad6(0x30d)+_0x15dad6(0x623)]['toggl'+'e'](_0x3e5f8e[_0x15dad6(0x370)],_0x302158===_0x359482);_0x2070ac['repla'+_0x15dad6(0x541)+_0x15dad6(0x6bd)](..._0x3e5f8e['uyCUK'](_0x4a8ed9,_0x359482));}return _0x3e5f8e[_0x48f406(0x4ba)](_0x30f177,_0x2421f4['cat']||_0x3e5f8e[_0x48f406(0x2ac)]),setInterval(()=>{var _0x3c6c3a=_0x48f406;if(!_0x28702f)return;var _0x7eab95=_0x2070ac[_0x3c6c3a(0x2b0)+'ren'];for(var _0x5531bf=-0x6*0x3bb+-0x67*-0x47+-0x62f*0x1;_0x5531bf<_0x7eab95[_0x3c6c3a(0x3f2)+'h'];_0x5531bf++){if(_0x3c6c3a(0x56c)===_0xa05bc1['FGMuz']){var _0x2cb50d=_0x7eab95[_0x5531bf][_0x3c6c3a(0x160)+_0x3c6c3a(0x46b)+_0x3c6c3a(0x361)](_0x3c6c3a(0x3b0)+'desc');_0x2cb50d&&(_0xa05bc1[_0x3c6c3a(0x527)](_0x2cb50d[_0x3c6c3a(0x2f6)+_0x3c6c3a(0x577)+'t']['index'+'Of'](_0xa05bc1['dFZbT']),0x41d+-0x1f0a+0x1aed)||_0x2cb50d[_0x3c6c3a(0x2f6)+'onten'+'t']['index'+'Of'](_0x3c6c3a(0x693))===0x983+-0xe3*0x11+0x590)&&(_0x2cb50d[_0x3c6c3a(0x2f6)+_0x3c6c3a(0x577)+'t']=_0x1d435c['safeM'+_0x3c6c3a(0x35e)]?_0xa05bc1[_0x3c6c3a(0x23b)]:_0x1d435c[_0x3c6c3a(0x5d4)]?_0xa05bc1[_0x3c6c3a(0x664)](_0xa05bc1['IiVoy'](_0xa05bc1[_0x3c6c3a(0x580)](_0xa05bc1[_0x3c6c3a(0x434)](_0x3c6c3a(0x3d4)+_0x3c6c3a(0x669)+'\x20',_0x1d435c['hooks'+_0x3c6c3a(0x694)]?_0xa05bc1['CmmXv'](_0xa05bc1[_0x3c6c3a(0x6d3)](_0x1d435c[_0x3c6c3a(0x457)+'Ok']+'/',_0x1d435c['hooks'+'Total']),_0x3c6c3a(0x418)+'s'):_0x3c6c3a(0x22d)+'ks\x20ar'+_0x3c6c3a(0x284)+'all\x20o'+'ff)')+_0xa05bc1[_0x3c6c3a(0x34f)],_0x1d435c[_0x3c6c3a(0x6bf)+'oaded']?'loade'+'d':_0x3c6c3a(0x67e)+'ng')+(_0x3c6c3a(0x657)+_0x3c6c3a(0x503)+'\x20')+(_0x1d435c[_0x3c6c3a(0x47c)+_0x3c6c3a(0x510)]?_0xa05bc1[_0x3c6c3a(0x57c)]:_0x3c6c3a(0x1ac)),_0x3c6c3a(0x610)+_0x3c6c3a(0x16b)+'t\x20'),_0x1d435c['movem'+_0x3c6c3a(0x356)]?_0xa05bc1[_0x3c6c3a(0x57c)]:'none')+(_0x1d435c[_0x3c6c3a(0x505)+_0x3c6c3a(0x5d2)]?_0x3c6c3a(0x2db)+_0x3c6c3a(0x46c)+_0x1d435c['lastE'+_0x3c6c3a(0x5d2)]:''):_0xa05bc1[_0x3c6c3a(0x3c4)]);}else _0x347661[_0x3c6c3a(0x3f4)+_0x3c6c3a(0x34e)+'r']=_0x41fa3f,_0x13904f['shado'+_0x3c6c3a(0x4d4)]=0x1*0x2509+-0x24a*-0x10+-0x499b,_0x22c762['fill'](),_0x1e1afd[_0x3c6c3a(0x3f4)+_0x3c6c3a(0x4d4)]=0x152f+0x1891+0x16e0*-0x2;}},-0x1814+0x959*-0x4+0x4160),_0x4d9a86;}var _0x3d2a17=_0x37e670(0x619)+':host'+'\x20{\x20al'+_0x37e670(0x245)+'itial'+_0x37e670(0x2be)+'\x20\x20\x20*\x20'+_0x37e670(0x311)+'-sizi'+_0x37e670(0x59a)+'order'+_0x37e670(0x44a)+_0x37e670(0x2b4)+'in:\x200'+_0x37e670(0x3ec)+'t-fam'+'ily:\x20'+_0x37e670(0x382)+'r\x22,\x20\x22'+'Segoe'+_0x37e670(0x1a0)+_0x37e670(0x32c)+'em-ui'+_0x37e670(0x60a)+_0x37e670(0x2da)+_0x37e670(0x49e)+_0x37e670(0x619)+_0x37e670(0x628)+_0x37e670(0x351)+_0x37e670(0x4b7)+'ition'+_0x37e670(0x2ec)+'olute'+';\x20rig'+'ht:\x202'+'4px;\x20'+'botto'+'m:\x2024'+_0x37e670(0x5f1)+_0x37e670(0x6e9)+_0x37e670(0x4c9)+'620px'+_0x37e670(0x2f4)+_0x37e670(0x5bb)+_0x37e670(0x66f)+_0x37e670(0x1b5)+');\x20ma'+'x-hei'+'ght:\x20'+_0x37e670(0x398)+_0x37e670(0x3dd)+'\x20calc'+'(100v'+_0x37e670(0x511)+'8px))'+_0x37e670(0x480)+_0x37e670(0x59e)+_0x37e670(0x492)+':\x20fle'+'x;\x20ga'+'p:\x2010'+_0x37e670(0x61b)+_0x37e670(0x4f6)+_0x37e670(0x6ac)+'px;\x20b'+_0x37e670(0x51d)+_0x37e670(0x6d4)+'us:\x202'+_0x37e670(0x3ad)+_0x37e670(0x380)+'er-ev'+'ents:'+_0x37e670(0x344)+_0x37e670(0x480)+_0x37e670(0x6df)+_0x37e670(0x2a9)+'und:\x20'+'rgba('+'24,17'+',21,.'+_0x37e670(0x5a3)+'backd'+'rop-f'+'ilter'+':\x20blu'+'r(22p'+'x)\x20sa'+_0x37e670(0x256)+'e(150'+_0x37e670(0x18b)+'webki'+_0x37e670(0x2c9)+'kdrop'+_0x37e670(0x31f)+_0x37e670(0x564)+_0x37e670(0x251)+_0x37e670(0x34a)+'satur'+_0x37e670(0x5f5)+_0x37e670(0x634)+_0x37e670(0x619)+_0x37e670(0x34b)+_0x37e670(0x199)+_0x37e670(0x45f)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+'5,255'+_0x37e670(0x425)+_0x37e670(0x494)+_0x37e670(0x5e4)+_0x37e670(0x4aa)+'\x20rgba'+_0x37e670(0x5e0)+'255,2'+_0x37e670(0x12f)+_0x37e670(0x3c8)+_0x37e670(0x4d2)+_0x37e670(0x1d6)+'\x20rgba'+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x37e670(0x486)+_0x37e670(0x270)+_0x37e670(0x6e8)+_0x37e670(0x4d7)+_0x37e670(0x449)+_0x37e670(0x298)+'nslat'+'eY(18'+_0x37e670(0x655)+'point'+_0x37e670(0x54c)+_0x37e670(0x308)+'\x20none'+';\x20tra'+'nsiti'+'on:\x20o'+'pacit'+'y\x20.35'+'s\x20eas'+_0x37e670(0x566)+_0x37e670(0x683)+'rm\x20.4'+'5s\x20cu'+_0x37e670(0x558)+'ezier'+_0x37e670(0x25b)+_0x37e670(0x663)+_0x37e670(0x410)+_0x37e670(0x301)+_0x37e670(0x651)+'r:\x20#f'+_0x37e670(0x2d0)+';\x20fon'+_0x37e670(0x599)+'e:\x2013'+'px;\x20}'+_0x37e670(0x619)+_0x37e670(0x628)+'anel.'+'shown'+'\x20{\x20op'+_0x37e670(0x149)+_0x37e670(0x2fd)+_0x37e670(0x229)+_0x37e670(0x369)+_0x37e670(0x557)+_0x37e670(0x531)+_0x37e670(0x4ab)+_0x37e670(0x2b5)+_0x37e670(0x37e)+_0x37e670(0x430)+_0x37e670(0x619)+_0x37e670(0x210)+_0x37e670(0x147)+_0x37e670(0x4ec)+_0x37e670(0x318)+'flex;'+_0x37e670(0x129)+_0x37e670(0x6d9)+_0x37e670(0x672)+_0x37e670(0x203)+_0x37e670(0x1b9)+_0x37e670(0x1bd)+'-item'+_0x37e670(0x43f)+'nter;'+'\x20gap:'+_0x37e670(0x1fc)+_0x37e670(0x319)+_0x37e670(0x519)+'px;\x20f'+'lex:\x20'+_0x37e670(0x5ec)+'\x20padd'+'ing:\x20'+'12px\x20'+(_0x37e670(0x19c)+'rder-'+'radiu'+_0x37e670(0x16d)+'px;\x0a\x20'+_0x37e670(0x301)+_0x37e670(0x540)+_0x37e670(0x609)+_0x37e670(0x1fd)+_0x37e670(0x575)+_0x37e670(0x263)+'255,.'+'025);'+_0x37e670(0x69d)+'shado'+'w:\x20in'+_0x37e670(0x2fa)+'\x200\x200\x20'+_0x37e670(0x5ac)+'gba(2'+_0x37e670(0x2b3)+_0x37e670(0x3de)+_0x37e670(0x350)+_0x37e670(0x2be)+'\x20\x20\x20.m'+_0x37e670(0x32b)+_0x37e670(0x55a)+_0x37e670(0x12d)+_0x37e670(0x37a)+'id;\x20p'+_0x37e670(0x640)+'items'+':\x20cen'+_0x37e670(0x1be)+_0x37e670(0x20f)+_0x37e670(0x1a1)+_0x37e670(0x426)+_0x37e670(0x6a0)+_0x37e670(0x622)+_0x37e670(0x2be)+_0x37e670(0x562)+_0x37e670(0x32b)+'o-svg'+_0x37e670(0x649)+_0x37e670(0x341)+_0x37e670(0x3eb)+_0x37e670(0x172)+_0x37e670(0x3b5)+'5px;\x20'+'overf'+_0x37e670(0x31c)+'visib'+_0x37e670(0x127)+_0x37e670(0x49a)+':\x20dro'+_0x37e670(0x3a1)+_0x37e670(0x5c9)+_0x37e670(0x228)+'x\x20rgb'+'a(255'+_0x37e670(0x69b)+'157,.'+_0x37e670(0x317)+_0x37e670(0x513)+_0x37e670(0x63a)+_0x37e670(0x2f2)+'\x20disp'+_0x37e670(0x318)+'flex;'+'\x20alig'+_0x37e670(0x5f0)+'ms:\x20c'+_0x37e670(0x4af)+';\x20jus'+_0x37e670(0x6dd)+_0x37e670(0x47e)+'nt:\x20c'+'enter'+_0x37e670(0x297)+_0x37e670(0x13f)+_0x37e670(0x3ad)+'heigh'+_0x37e670(0x4da)+_0x37e670(0x546)+'order'+_0x37e670(0x1dd)+_0x37e670(0x514)+_0x37e670(0x61a)+_0x37e670(0x393)+_0x37e670(0x644)+'\x0a\x20\x20\x20\x20'+_0x37e670(0x148)+_0x37e670(0x3b6)+'nd:\x20t'+_0x37e670(0x31e)+'arent'+_0x37e670(0x2e1)+_0x37e670(0x33c)+'gba(2'+'46,23'+_0x37e670(0x654)+_0x37e670(0x230)+_0x37e670(0x3ca)+_0x37e670(0x4f2)+_0x37e670(0x6d8)+_0x37e670(0x515)+_0x37e670(0x3fd)+'ze:\x201'+'0px;\x20'+_0x37e670(0x379)+_0x37e670(0x3e1)+'t:\x2070'+_0x37e670(0x2a5)+'\x20\x20\x20\x20.'+_0x37e670(0x6c7)+'b:hov'+'er\x20{\x20'+'color'+_0x37e670(0x1fd)+_0x37e670(0x387)+_0x37e670(0x2ab)+_0x37e670(0x4a3)+'8);\x20}'+_0x37e670(0x619)+_0x37e670(0x2f8)+'ab.ac'+_0x37e670(0x560)+'{\x20col'+'or:\x20#'+_0x37e670(0x29f)+'d;\x20ba'+_0x37e670(0x2a9)+_0x37e670(0x143)+_0x37e670(0x192)+'255,1'+'07,15'+_0x37e670(0x300)+_0x37e670(0x2be)+'\x20\x20\x20.m'+'n-mai'+_0x37e670(0x684)+'lex:\x20'+_0x37e670(0x54e)+_0x37e670(0x64a)+'th:\x200'+';\x20dis'+'play:'+'\x20flex'+';\x20fle'+_0x37e670(0x55c)+_0x37e670(0x642)+'n:\x20co'+'lumn;'+_0x37e670(0x1c8)+'\x20\x20.mn'+_0x37e670(0x4a8)+_0x37e670(0x1a8)+_0x37e670(0x6cd)+_0x37e670(0x129)+_0x37e670(0x197)+_0x37e670(0x4bc)+'ems:\x20'+_0x37e670(0x39c)+'r;\x20ga'+_0x37e670(0x598)+'px;\x20p'+'addin'+_0x37e670(0x508)+_0x37e670(0x674)+_0x37e670(0x357)+_0x37e670(0x259)+_0x37e670(0x490)+_0x37e670(0x621)+'none;'+_0x37e670(0x1c8)+'\x20\x20.mn'+'-titl'+_0x37e670(0x3a0)+'flex:'+'\x201;\x20m'+_0x37e670(0x183)+'dth:\x20'+_0x37e670(0x2a5)+'\x20\x20\x20\x20.'+_0x37e670(0x313)+'{\x20fon'+_0x37e670(0x599)+'e:\x2017'+_0x37e670(0x336)+_0x37e670(0x471)+'eight'+':\x20650'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+_0x37e670(0x5dc)+'nt-si'+_0x37e670(0x1a7)+'1px;\x20'+_0x37e670(0x1ae))+(_0x37e670(0x1f6)+_0x37e670(0x662)+'\x20\x20\x20\x20.'+_0x37e670(0x140)+'ose\x20{'+'\x20disp'+_0x37e670(0x318)+_0x37e670(0x4ce)+'\x20plac'+_0x37e670(0x584)+'ms:\x20c'+'enter'+';\x20wid'+'th:\x202'+'8px;\x20'+_0x37e670(0x617)+'t:\x2028'+'px;\x20b'+_0x37e670(0x51d)+_0x37e670(0x1dd)+_0x37e670(0x514)+_0x37e670(0x61a)+'ius:\x20'+'8px;\x20'+_0x37e670(0x540)+'round'+_0x37e670(0x298)+_0x37e670(0x6c3)+_0x37e670(0x23c)+_0x37e670(0x413)+_0x37e670(0x2d9)+'erit;'+'\x20opac'+_0x37e670(0x6c1)+_0x37e670(0x51a)+_0x37e670(0x4c1)+_0x37e670(0x2a0)+'inter'+_0x37e670(0x2be)+_0x37e670(0x562)+'n-clo'+_0x37e670(0x2ee)+_0x37e670(0x3ac)+'\x20opac'+'ity:\x20'+'1;\x20ba'+_0x37e670(0x2a9)+'und:\x20'+'rgba('+'255,2'+'55,25'+'5,.05'+_0x37e670(0x19a)+_0x37e670(0x211)+_0x37e670(0x140)+'ose\x20s'+_0x37e670(0x1a2)+_0x37e670(0x20f)+_0x37e670(0x400)+_0x37e670(0x426)+_0x37e670(0x6a0)+_0x37e670(0x5d9)+_0x37e670(0x682)+'l:\x20no'+_0x37e670(0x4cd)+'troke'+_0x37e670(0x591)+_0x37e670(0x137)+_0x37e670(0x6aa)+'\x20stro'+_0x37e670(0x60d)+_0x37e670(0x341)+'2;\x20st'+_0x37e670(0x6b8)+_0x37e670(0x632)+'ap:\x20r'+_0x37e670(0x190)+_0x37e670(0x1c8)+_0x37e670(0x391)+_0x37e670(0x23e)+_0x37e670(0x179)+'ex:\x201'+';\x20min'+_0x37e670(0x48d)+_0x37e670(0x4b8)+';\x20ove'+_0x37e670(0x6b1)+'-y:\x20a'+'uto;\x20'+'displ'+'ay:\x20g'+_0x37e670(0x528)+_0x37e670(0x48a)+'templ'+_0x37e670(0x6a3)+'olumn'+'s:\x20re'+'peat('+'auto-'+'fill,'+_0x37e670(0x22b)+_0x37e670(0x28f)+_0x37e670(0x695)+'1fr))'+_0x37e670(0x197)+_0x37e670(0x4bc)+_0x37e670(0x2eb)+_0x37e670(0x283)+_0x37e670(0x197)+_0x37e670(0x4ef)+'ntent'+_0x37e670(0x3ff)+_0x37e670(0x436)+_0x37e670(0x2a3)+'0px;\x20'+_0x37e670(0x5ae)+'ng:\x200'+'\x204px\x20'+'6px\x200'+_0x37e670(0x2be)+_0x37e670(0x562)+_0x37e670(0x2c3)+_0x37e670(0x3a5)+_0x37e670(0x4ee)+_0x37e670(0x6f2)+'llbar'+_0x37e670(0x649)+_0x37e670(0x341)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x37e670(0x63a)+_0x37e670(0x627)+':-web'+_0x37e670(0x40f)+'croll'+'bar-t'+_0x37e670(0x360)+_0x37e670(0x167)+'kgrou'+'nd:\x20r'+_0x37e670(0x1a9)+'55,25'+'5,255'+_0x37e670(0x633)+_0x37e670(0x403)+_0x37e670(0x343)+_0x37e670(0x635)+_0x37e670(0x485)+';\x20}\x0a\x20'+_0x37e670(0x33e)+'k-car'+_0x37e670(0x41a)+_0x37e670(0x51d)+'-radi'+_0x37e670(0x28a)+_0x37e670(0x3ad)+_0x37e670(0x540)+_0x37e670(0x609)+_0x37e670(0x1fd)+'a(255'+',255,'+'255,.'+_0x37e670(0x446)+_0x37e670(0x69d)+'shado'+_0x37e670(0x5e6)+'set\x200'+_0x37e670(0x23d)+_0x37e670(0x5ac)+_0x37e670(0x1a9)+_0x37e670(0x2b3)+'5,255'+_0x37e670(0x350)+';\x20}\x0a\x20'+_0x37e670(0x33e)+_0x37e670(0x3fe)+'d.on\x20'+_0x37e670(0x167)+'kgrou'+_0x37e670(0x1d0)+_0x37e670(0x1a9)+_0x37e670(0x2b3)+'5,255'+_0x37e670(0x376)+_0x37e670(0x5d8)+'-shad'+'ow:\x20i'+_0x37e670(0x4be)+_0x37e670(0x6eb)+_0x37e670(0x66e)+_0x37e670(0x192)+'255,1'+'07,15'+_0x37e670(0x60e)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x37e670(0x202)+'rd-he'+_0x37e670(0x1f5)+'displ')+('ay:\x20f'+_0x37e670(0x648)+_0x37e670(0x1bd)+'-item'+_0x37e670(0x43f)+_0x37e670(0x2ed)+_0x37e670(0x1f7)+'\x208px;'+_0x37e670(0x332)+_0x37e670(0x1a5)+_0x37e670(0x217)+'12px;'+_0x37e670(0x1c8)+_0x37e670(0x24c)+_0x37e670(0x2a8)+_0x37e670(0x212)+_0x37e670(0x582)+_0x37e670(0x358)+'1;\x20mi'+_0x37e670(0x64a)+_0x37e670(0x1ce)+';\x20}\x0a\x20'+_0x37e670(0x33e)+'k-car'+'d-tit'+'le\x20st'+_0x37e670(0x16c)+_0x37e670(0x51f)+_0x37e670(0x599)+_0x37e670(0x68e)+_0x37e670(0x336)+_0x37e670(0x471)+_0x37e670(0x2b7)+_0x37e670(0x3c1)+_0x37e670(0x2e1)+'or:\x20r'+'gba(2'+'46,23'+'8,242'+',.45)'+';\x20}\x0a\x20'+_0x37e670(0x33e)+_0x37e670(0x3fe)+'d.on\x20'+'.sk-c'+_0x37e670(0x661)+'itle\x20'+'stron'+'g\x20{\x20c'+_0x37e670(0x64d)+_0x37e670(0x56e)+_0x37e670(0x447)+_0x37e670(0x513)+'\x20.sk-'+_0x37e670(0x3ea)+_0x37e670(0x28b)+_0x37e670(0x184)+_0x37e670(0x5b3)+_0x37e670(0x57f)+'0px;\x20'+_0x37e670(0x513)+_0x37e670(0x213)+_0x37e670(0x4b9)+_0x37e670(0x5dc)+_0x37e670(0x3fd)+_0x37e670(0x1a7)+_0x37e670(0x6c2)+'opaci'+_0x37e670(0x1f6)+_0x37e670(0x5e7)+_0x37e670(0x6f1)+'botto'+_0x37e670(0x17a)+_0x37e670(0x252)+'\x20\x20\x20\x20.'+_0x37e670(0x323)+'l\x20{\x20d'+'ispla'+'y:\x20fl'+'ex;\x20a'+'lign-'+_0x37e670(0x473)+':\x20cen'+_0x37e670(0x1be)+_0x37e670(0x4f3)+_0x37e670(0x392)+'paddi'+_0x37e670(0x24e)+'px\x200;'+'\x20font'+'-size'+':\x2011.'+_0x37e670(0x30e)+_0x37e670(0x513)+_0x37e670(0x213)+_0x37e670(0x17e)+_0x37e670(0x179)+_0x37e670(0x1dc)+_0x37e670(0x2e1)+_0x37e670(0x33c)+_0x37e670(0x1a9)+_0x37e670(0x5e2)+_0x37e670(0x654)+',.75)'+';\x20}\x0a\x20'+_0x37e670(0x33e)+'k-hin'+_0x37e670(0x273)+_0x37e670(0x12d)+_0x37e670(0x39f)+_0x37e670(0x5a0)+'font-'+'size:'+_0x37e670(0x4e4)+_0x37e670(0x21c)+_0x37e670(0x6c6)+'\x20.4;\x20'+_0x37e670(0x513)+'\x20.sk-'+'switc'+_0x37e670(0x690)+'ositi'+_0x37e670(0x40a)+_0x37e670(0x448)+_0x37e670(0x3df)+'idth:'+'\x2026px'+_0x37e670(0x675)+_0x37e670(0x18d)+'14px;'+_0x37e670(0x222)+_0x37e670(0x35f)+_0x37e670(0x403)+_0x37e670(0x343)+_0x37e670(0x635)+':\x2099p'+'x;\x20ba'+_0x37e670(0x2a9)+'und:\x20'+_0x37e670(0x192)+_0x37e670(0x1d8)+'55,25'+_0x37e670(0x2c4)+');\x20cu'+_0x37e670(0x451)+'\x20poin'+_0x37e670(0x1be)+'flex:'+_0x37e670(0x557)+_0x37e670(0x2be)+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+_0x37e670(0x55e)+_0x37e670(0x656)+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0x37e670(0x1e7)+'lute;'+'\x20top:'+_0x37e670(0x58b)+'\x20left'+':\x203px'+';\x20wid'+'th:\x208'+'px;\x20h'+'eight'+':\x208px'+_0x37e670(0x403)+_0x37e670(0x343)+_0x37e670(0x635)+_0x37e670(0x65c)+_0x37e670(0x698)+'kgrou'+_0x37e670(0x1d0)+_0x37e670(0x1a9)+_0x37e670(0x2b3)+_0x37e670(0x3de)+',.25)'+';\x20tra'+'nsiti'+_0x37e670(0x5a8)+_0x37e670(0x421)+'2s,\x20b'+'ackgr'+'ound\x20'+_0x37e670(0x1cb)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x37e670(0x138)+_0x37e670(0x54d)+_0x37e670(0x271)+'cked='+'\x22true'+'\x22]\x20{\x20'+'backg'+_0x37e670(0x609)+_0x37e670(0x1fd))+(_0x37e670(0x575)+',107,'+'157,.'+_0x37e670(0x6ce)+_0x37e670(0x513)+_0x37e670(0x213)+_0x37e670(0x138)+_0x37e670(0x54d)+_0x37e670(0x271)+'cked='+_0x37e670(0x687)+'\x22]::a'+_0x37e670(0x54b)+'{\x20lef'+_0x37e670(0x2ef)+_0x37e670(0x546)+'ackgr'+'ound:'+_0x37e670(0x3c9)+'b9d;\x20'+_0x37e670(0x513)+'\x20.sk-'+'field'+'\x20{\x20ba'+_0x37e670(0x2a9)+'und:\x20'+_0x37e670(0x192)+_0x37e670(0x1d8)+_0x37e670(0x2b3)+_0x37e670(0x2ae)+'5);\x20b'+'order'+':\x200;\x20'+'borde'+_0x37e670(0x61a)+_0x37e670(0x393)+_0x37e670(0x180)+_0x37e670(0x413)+_0x37e670(0x6be)+_0x37e670(0x254)+'\x20padd'+_0x37e670(0x1a5)+_0x37e670(0x404)+_0x37e670(0x336)+_0x37e670(0x226)+'ize:\x20'+_0x37e670(0x44f)+'x;\x20ou'+_0x37e670(0x40c)+_0x37e670(0x3e3)+'e;\x20bo'+_0x37e670(0x643)+_0x37e670(0x4fc)+'inset'+_0x37e670(0x23d)+'0\x201px'+_0x37e670(0x15a)+_0x37e670(0x5e0)+_0x37e670(0x1d8)+'55,.0'+_0x37e670(0x600)+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x37e670(0x545)+_0x37e670(0x1e1)+_0x37e670(0x5c4)+_0x37e670(0x5cd)+'ound:'+_0x37e670(0x5c2)+'419;\x20'+'}\x0a\x20\x20\x20'+_0x37e670(0x213)+'range'+_0x37e670(0x6a2)+'splay'+_0x37e670(0x6f7)+'x;\x20al'+'ign-i'+_0x37e670(0x6b6)+'\x20cent'+_0x37e670(0x401)+_0x37e670(0x452)+_0x37e670(0x27c)+'\x0a\x20\x20\x20\x20'+'.sk-s'+'lider'+_0x37e670(0x429)+_0x37e670(0x4ee)+_0x37e670(0x181)+_0x37e670(0x378)+'e:\x20no'+_0x37e670(0x2d7)+_0x37e670(0x2e9)+'ance:'+'\x20none'+';\x20wid'+'th:\x209'+'0px;\x20'+_0x37e670(0x617)+'t:\x208p'+'x;\x20ba'+'ckgro'+_0x37e670(0x143)+_0x37e670(0x229)+'paren'+_0x37e670(0x581)+'\x20\x20\x20\x20.'+_0x37e670(0x178)+_0x37e670(0x52a)+':-web'+'kit-s'+_0x37e670(0x65b)+_0x37e670(0x2ad)+_0x37e670(0x6e5)+_0x37e670(0x5fb)+_0x37e670(0x12a)+_0x37e670(0x6a0)+_0x37e670(0x3d7)+'\x20bord'+_0x37e670(0x64f)+_0x37e670(0x64b)+_0x37e670(0x3d7)+_0x37e670(0x45e)+'groun'+'d:\x20li'+_0x37e670(0x614)+'gradi'+'ent(#'+_0x37e670(0x29f)+'d,\x20#f'+_0x37e670(0x200)+_0x37e670(0x174)+_0x37e670(0x3ce)+'r(--p'+_0x37e670(0x338)+')\x20100'+_0x37e670(0x168)+'repea'+'t,\x20rg'+_0x37e670(0x3b7)+'5,255'+_0x37e670(0x263)+_0x37e670(0x4d0)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-slid'+'er::-'+_0x37e670(0x1ab)+_0x37e670(0x4c3)+_0x37e670(0x67a)+'humb\x20'+'{\x20-we'+'bkit-'+_0x37e670(0x538)+'rance'+':\x20non'+_0x37e670(0x56a)+_0x37e670(0x341)+'6px;\x20'+'heigh'+_0x37e670(0x260)+_0x37e670(0x18e)+'rgin-'+_0x37e670(0x1bf)+_0x37e670(0x4b6)+_0x37e670(0x222)+_0x37e670(0x64f)+'dius:'+'\x2050%;'+_0x37e670(0x45e)+_0x37e670(0x1df)+_0x37e670(0x2c5)+_0x37e670(0x200)+_0x37e670(0x2be)+_0x37e670(0x33e)+_0x37e670(0x26a)+'\x20{\x20fo'+_0x37e670(0x3fd)+'ze:\x201'+_0x37e670(0x6c2)+'font-'+'weigh'+_0x37e670(0x365)+'0;\x20mi'+'n-wid'+_0x37e670(0x1e9)+_0x37e670(0x392)+'text-'+_0x37e670(0x1bd)+':\x20rig'+'ht;\x20c'+'olor:'+'\x20rgba'+'(246,'+_0x37e670(0x46e)+'42,.8'+');\x20}\x0a'+_0x37e670(0x211)+_0x37e670(0x6f6)+'lor\x20{')+(_0x37e670(0x319)+_0x37e670(0x613)+'px;\x20h'+'eight'+':\x2022p'+'x;\x20bo'+_0x37e670(0x2a7)+_0x37e670(0x696)+_0x37e670(0x51d)+'-radi'+_0x37e670(0x67c)+_0x37e670(0x546)+_0x37e670(0x5cd)+_0x37e670(0x62c)+'\x20none'+_0x37e670(0x6f8)+'ding:'+'\x200;\x20c'+_0x37e670(0x24b)+':\x20poi'+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x37e670(0x2c7)+_0x37e670(0x5dc)+_0x37e670(0x3fd)+_0x37e670(0x1a7)+'1px;\x20'+'color'+':\x20rgb'+_0x37e670(0x387)+_0x37e670(0x2ab)+_0x37e670(0x4a3)+_0x37e670(0x592)+'addin'+'g:\x202p'+'x\x200;\x20'+_0x37e670(0x513)+_0x37e670(0x213)+_0x37e670(0x6d2)+_0x37e670(0x285)+_0x37e670(0x651)+'r:\x20#f'+_0x37e670(0x1c3)+_0x37e670(0x2be)+'\x20\x20\x20.s'+_0x37e670(0x2d4)+'\x20{\x20al'+_0x37e670(0x4b2)+'elf:\x20'+_0x37e670(0x5cf)+'start'+_0x37e670(0x403)+'der:\x20'+_0x37e670(0x19c)+_0x37e670(0x5fa)+'radiu'+'s:\x208p'+'x;\x20pa'+_0x37e670(0x184)+_0x37e670(0x39d)+_0x37e670(0x497)+';\x20bac'+_0x37e670(0x3b6)+_0x37e670(0x1eb)+_0x37e670(0x29f)+'d;\x20co'+'lor:\x20'+_0x37e670(0x536)+'\x20font'+_0x37e670(0x4e6)+':\x2011.'+'5px;\x20'+'font-'+'weigh'+'t:\x2070'+'0;\x20cu'+_0x37e670(0x451)+_0x37e670(0x550)+_0x37e670(0x1be)+_0x37e670(0x513)+_0x37e670(0x213)+_0x37e670(0x355)+_0x37e670(0x220)+_0x37e670(0x5df)+'ter:\x20'+_0x37e670(0x6ad)+_0x37e670(0x48f)+_0x37e670(0x467)+_0x37e670(0x2be)+_0x37e670(0x6af));window['addEv'+_0x37e670(0x53d)+_0x37e670(0x438)+'r'](_0x418dfe['hMwMR'],_0x4e4f32=>{var _0x28750c=_0x37e670;_0x4e4f32[_0x28750c(0x59d)]==='Inser'+'t'&&(_0x4e4f32[_0x28750c(0x248)+_0x28750c(0x549)+_0x28750c(0x38d)](),_0x300a85());},!![]);var _0x34f262=document[_0x37e670(0x4b4)+'eElem'+'ent']('div');_0x34f262['style']['cssTe'+'xt']=_0x418dfe[_0x37e670(0x69e)],_0x34f262['inner'+_0x37e670(0x32d)]='<svg\x20'+_0x37e670(0x19b)+'ox=\x220'+'\x200\x2024'+_0x37e670(0x47b)+'<path'+'\x20d=\x22M'+'12\x2021'+_0x37e670(0x6db)+'-2.5-'+_0x37e670(0x275)+'-4-7.'+'5\x200-2'+_0x37e670(0x45d)+'8-4.5'+_0x37e670(0x666)+'5s4\x202'+_0x37e670(0x6b3)+_0x37e670(0x6a9)+_0x37e670(0x524)+_0x37e670(0x141)+'.5z\x22\x20'+'fill='+_0x37e670(0x625)+'\x22\x20str'+_0x37e670(0x48b)+_0x37e670(0x3e6)+'9d\x22\x20s'+_0x37e670(0x500)+'-widt'+_0x37e670(0x303)+_0x37e670(0x287)+_0x37e670(0x166)+_0x37e670(0x35a)+'=\x22rou'+_0x37e670(0x491)+'troke'+_0x37e670(0x162)+_0x37e670(0x205)+'\x22roun'+_0x37e670(0x334)+_0x37e670(0x6ef)+_0x37e670(0x3d9)+_0x37e670(0x6e3)+_0x37e670(0x4e0)+_0x37e670(0x46a)+_0x37e670(0x4dc)+'\x20fill'+_0x37e670(0x506)+_0x37e670(0x15c)+_0x37e670(0x12e)+_0x37e670(0x314),_0x34f262[_0x37e670(0x47f)]=_0x418dfe['WBdRG'],_0x34f262[_0x37e670(0x1a3)+'seent'+'er']=()=>_0x34f262['style'][_0x37e670(0x1ae)+'ty']='1',_0x34f262[_0x37e670(0x1a3)+'selea'+'ve']=()=>_0x34f262['style']['opaci'+'ty']=_0x37e670(0x2cf),_0x34f262[_0x37e670(0x353)+'ck']=_0x1ac799=>{var _0x2da711=_0x37e670;_0x1ac799['stopP'+'ropag'+_0x2da711(0x153)](),_0x418dfe[_0x2da711(0x53e)](_0x300a85);},document[_0x37e670(0x5ce)][_0x37e670(0x51b)+_0x37e670(0x2e7)+'d'](_0x34f262),_0x2d8398(),requestAnimationFrame(_0x3dd0ec),console[_0x37e670(0x325)](_0x418dfe['qWdDN'],_0x1d435c[_0x37e670(0x5d4)]);});})()));function _0x2a37(){var _0x5e6752=['iM5VBMu','zuvSzw0','y29SCZO','lM1Ulxa','qu5tvg4','DxjLihq','BvPXCgy','B3vUzdO','Bw92zq','Fdn8nxW','DK9lveK','q0fovKe','r29Kl2q','BgLUzwm','lc4WocK','ntaLktS','ywrPDxm','BNPOqvO','ywXSig8','vw5PDhK','mcuUifm','ic5TBI0','nhW3Fdi','q3fSq3i','C2fMzu0','igfWCgW','zvrHA2u','BgfJzs0','DuHWvum','zwn0Aw8','Ec1ZAge','mtbWEdS','DgPQs3C','mcWWlJu','y2HLy2S','Bgv4oYa','ihSGD2K','BI13Awq','zgL1CZO','DuLIAgu','B2XVCJO','AxHLzdS','zxiTCMe','C0nlwgm','ignVBg8','ELrjzfq','r3jHDMK','ocWYndi','ChGPoYa','BNrLBNq','ihWGC2G','lIbuDxi','qKLQELG','AxrPyxq','BgLKzxi','oIa1mcu','igzVDxi','FdD8nhW','yxj0lG','FdD8mJa','yxjKlxq','ndSGFqO','msWUmZy','q21Twhy','B0vtwu0','idqTnc4','u2HfuKq','C2HPzNq','yM91BMq','w3nHA3u','BMf0Dxi','mtiGmJe','C3jdvKG','idfWEca','DNCGlsa','rwviq2i','sLHUwM4','y3rPB24','Aw9FnZi','Eca2ChG','oYbOzwK','zwfK','ywqGD2G','AguGDxm','DMPYvwm','zgvYlxq','u0fgrsa','Dxm6idy','oJa7EI0','Bg9HzgK','B3G9iJa','C3rVCfa','B3zLCMW','oYbMAwW','yw5ZzM8','BIb7igy','B2vZig4','mvL1CLPNvq','iNrYDwu','uwLzy1y','rMrKEwu','tMfTzq','mZuSmJq','yMvNAw4','B2LS','ztOGmtm','AwXS','Acb7iha','yxKGB24','BgTwDeK','u0fgrq','vg90ywW','mhb4lca','ida7igi','uuL5A3u','oYbIywm','qunuAYa','i2zMzG','ldeWnYW','DMLZDwe','igjVEc0','sK15D24','tvr4DLy','AwDODdO','zxj5idi','ihSGzgK','yxrLlwm','u2TpELK','BwvsDw4','sgP1s2O','Aw9UlLq','mJq2BgX3DeL2','nwmWidm','B2XVCJS','ys11Aq','zZOGmta','yNjPz2G','B0DLs2i','icaG','iIbZDhi','CMzSB3C','DfD1Dva','idqGnc4','te1c','CM9Rzxm','DgvTCZO','zgLZCgW','CM9Rzs0','mcWWlJC','A3ndChm','ms4XlJa','EgvZige','BgrYzw4','oIaJzJy','z2fTzuW','BNrLEhq','Axr5oIa','mxb4oYa','BNnWyxi','rfz2uwS','zwfWB24','y2L0EtO','Bw4TDge','BxfZtNK','lK92zxi','mhGYnta','sKvzsM8','y3jLzw4','CgXHEtO','mJuPoYa','Fdf8mhW','Bw8GDg8','y29PBa','BM90zs4','B3PmBuu','lxjHzgK','Eun0wfm','BLrkEuO','z29KrgK','B2LUDgu','lwrPCMu','BhKGkhi','yY0XlJu','BsbJzw4','DgLMEs0','EMnPCue','icaGyMe','lwjHBNi','Bg9NBY0','Bg9Hzgu','iJeYiIa','qvbtuuu','ywjSzs0','veP5ruK','s2TdBhG','EtOGmdS','Awr0AdO','ywrK','mcaWida','lxDPzhq','ueHLy3m','zgfTywC','y2LYy2W','Bw4TC3u','CMDPBI0','lxnJCM8','ywn0A0S','r09TtMi','igjHBIa','C2STy28','oIbMBgu','oYbWywq','Bgu7igy','rujOr3y','igzSzxG','ihSGAgu','tNvMCgu','DcbZDge','AxnWBge','lZ48l3m','ntuSlJa','yxjPys0','D2HLCMu','AgvZ','v0fnDgu','FdL8ohW','DhjPyNu','reHuAMS','CMvUDem','C3DPDgm','De5Vzgu','zwjJwuS','igrHBwe','ndeXnta5n01NqKPrta','sNvTCfq','lxnHBNm','DgG6idu','Bw4Ty2W','ns00idC','ywfgz0O','Dw5KoIa','v0fttsa','uvfWDwO','ug9ZAxq','AwrLihS','icbIywm','ywnPDhK','uLzwCfO','zvjHDgu','AguGzgu','phnTywW','mdCSmtu','CIdIGjqG','BNLUywC','tLfOvNa','CvvcrMS','yxrPB24','EdTVCge','whL0vw4','AxrLiee','D2LWr3C','BNHszuG','t1DdCfu','ihjNyMe','Aw5JBhu','nMi5zci','Dhm6yxu','Dg9Nz2W','Be1VDgK','CxvLCNK','BMn0Aw8','lwXPBMu','y3nZvgu','Bg9JAW','AfvcCg8','A2uTBgK','EYbIywm','jsbUBY0','C2fRDxi','BuLPsee','DMvTzw4','CM9UzYa','CZOGmty','tNbfBwu','yNv0Dg8','ywqGDg8','C2STBge','igHLAwC','zMyP','ksaWida','r0rpDhK','q0TNBMi','r2LVqwC','C2STC2W','ihSGzMW','BtOGnNa','BwLKzgW','ANvTCfa','s2LSBgu','BgfIzwW','tLjnrwq','nNb4oYa','lwfWCgu','Dg9WoJe','Aw4TD2K','zgrPBMC','z293Cvi','rNvnBwu','igP1Bxa','zhrOoJe','AxmGyNu','BsbVBIa','jsK7ic0','ExbZs2C','z2H0oIa','EdSGBwe','Bw92zvq','B3vUzdS','yw1L','CMDIysG','ChvZAa','CNrPzgu','tejTsvO','tgvMDca','oYbHBgK','y2SP','lxnOywq','ktSGFqO','DMLLD0i','mdSGyM8','u3bHy2u','zw5HyMW','B2XPBMu','ifvjiIW','oIaZmNa','DMCGEYa','B25TB3u','zw1LBNq','Aw5NoIa','uM1LruW','EMu6ide','EYbKAxm','z2jHkdi','zgvSzxq','D2vIA2K','BM9Uzq','DvPfCvC','B3bHy2K','z3jHDMK','zsXTB24','vuPbvfi','q1btihi','DcbHihq','tNzbwxO','ndHWEcK','Ew9vvNC','u2fRDxi','psjTBI0','Dw1UoYa','AgvSza','Dgv4Dei','rMLLBgq','ywXPz24','DgvYoYa','Dg9WoIa','EvDSyMu','vKvpz2G','vLzLr04','zJDHotm','rvD3tgq','DhmGCgW','C2vYDMu','y3qGB24','ih0kica','s2v5qq','ve5TzK4','lJjZoYa','zfP0wwW','y0LjEKu','DgG6ida','yw5Jzs4','BMq6ihi','zxH0','mtySmc4','DgvZDa','u3bLzwq','nYWWlJC','idGWChG','rMD4t1C','mJu1ldi','nNWXnhW','C3bSAxq','ls1W','zxG6ide','oIaWoYa','rNjHBwu','z3jVDw4','DgHPCYa','B3b0Aw8','DK9rvK8','Bw92zw0','lMXHC3q','nYWWlJm','idrWEca','igfIC28','t1vsx18','DgG6idi','AtmY','BMq6icm','A2vizwe','wMPdEwC','tKTruKC','nJaWide','q3Dfv2q','CMvSEsa','mJqWiey','v3fcwfq','C2HVD24','ywqGEYa','DhK6ic4','igDHCdO','ywLYlG','j3qGC3q','rvzcruO','uuDYwwC','idrWEdS','oIbYz2i','Bw91C2u','mNb4ihu','zJzIowq','Bw9fEha','C2STy2e','oIbJB2W','BuXlzu4','AM9PBJ0','AgrOs2C','Ag9Szsa','BIb0Agu','z1vttMm','AgfZ','rhjYANi','sKvkCg0','DhLqy3q','CJOGDgG','D2LKDgG','lM1Ulxm','icaGic4','lxrPDgW','ic5ZAY0','mZy1nZa2s2X4uefA','zxrhyw0','ihjLBg8','mtfWEca','mJu1lde','wvvkr3u','Dw5Kzwq','C214r0O','oYbVCge','wNPlBfq','twXZDNq','zxjZy3i','B3zLCIa','zhbY','igjVCMq','B3rOAw4','AuP1r1i','tvr2que','B250lxm','zxjYB3i','idaGnha','DhjHBNm','oxW1Fdi','ig1PBM0','Dgv4Dee','mcbOB28','v2DkDvu','twLZyW','lc40ktS','uMf0zq','v3jHCha','AwXnB3q','sNvTCca','r2f3DLa','zg93BIa','mte3nJKYodbOEgvnuLy','Agf0igq','AwrLCG','AYbVBI4','DfrtwNG','zw50oYa','idaGmca','lwnVBhm','iNjVDw4','C2XPy2u','C2v0vhi','Ag9VA0m','AuTLsuu','idK5osa','BdOGAw4','thfbu2m','rw5NAw4','ChjLDMu','zhHYthO','C2v0sxq','DxjZB3i','icaUC2S','DxjDigG','BMC6idq','CM9WywC','B3bLBG','BhvYkdi','EdSGFqO','AwnRihm','zwvMmJS','EuvUz2K','DhvYyxq','BwrSzK0','mte0mtG1mtDPwfzuENG','oYb1C2u','CMLZAYa','kc4YmIW','zgvZ','zMLSBfm','CLjssMC','DMfS','DdOGnNa','B2f0Eq','AwrHDgu','ldi1nsW','igj1AwW','BefLvNm','igLMig0','DtmY','u3z3Bxm','ENbtBuG','AY12ywW','BNqGAge','BerPzsW','mtaWid0','B29Rihi','DMfSDwu','CgfJAxq','ys1JAgu','uMfWAwq','Dcb7igq','uNzQrfC','nc00lJu','yMjkt1y','s2v5ra','rM9Yy2u','DgLVBJO','seXsAMy','t1nOB28','ChG7ih0','s2Les1i','uxL0wvO','y2f0','Aw4GC2e','B25PBNa','ihWGz2e','C3rHCNq','BwvKicG','zxjYihS','CKngsMy','ihn0CM8','u1nPu2m','yKT3Bxi','Dxm6ide','ihSGCge','whPqD0G','CMvHzhK','B25LigK','yxGOmJu','A3nty2e','yM90Dg8','Bw5sy0K','sg9VAYa','yxrLvge','yxrJAgu','ys5RB3u','oYb3Awq','oIb0CMe','wg5krwu','zvj1BM4','C2STzMK','Fdv8mq','ohG5mc0','uePABw4','zMy2yJK','CJOGCg8','vvzIq20','C21HBgW','yxa6ide','Ag9VA0C','mdSGFqO','lsbHihm','CMrLCJO','lwnHCMq','y2TNCM8','u0flvvi','ldiZocW','DvP5z1K','lxj1BM4','nsWUmdm','r29LqKC','y2HPBgq','z2uUiei','wuPtrLC','ntuSmJu','ig1HCMC','zxzLBNq','zu9drKG','zwLNAhq','ie1VDMu','zw50','ig5VigG','DhLSzq','re5fs1G','C0LWChe','oYb9cIa','ywrKrxy','s01UsKm','zMfyB1O','tefzt00','BI1JB2W','nsWUmdC','zdOGi2y','zMLSBfq','lw5VDgu','EfvUDgu','Dc1Iywm','zwfSDgG','ig5LDMu','zM9YBxm','u2fMzxq','AxnPyMW','mc41','nMvLzJi','AfLhAw4','Bg9Hzca','nsaWlti','AY1IDg4','zgTPDa','CMqTDgK','BMu7ige','sxf6q2y','oIbPBMG','CY1Zzxi','ihWGrvi','vvDnsW','v3jbsfa','zMLSzw4','BM8Gy2G','zvzHBhu','oYbJB2W','sxnhCM8','BgrJuwS','Bgf5ig8','EMXyu2q','ugnzyM0','zenOAwW','r2PrCgy','ChbLyxi','B24U','zw1ZoIa','oIbHyNm','BNrLCJS','C2u6Ag8','DdOGmtu','C1jTwe8','CM9ZC2G','DgfIihS','BgLUzvC','lcbJywW','BerPzsK','Dgv4Dem','B1jLy28','lM1Ulxq','BgW+','C2v0ida','ihnVig4','EwPUzfG','oIaXoYa','t3HzyxC','CMvWBge','nYWUmsK','icaGica','mtz8mtq','Ad0ImIi','igH1CNq','ALPNy1m','C3bLzwq','ihnOB3q','zw50CZO','CNjcAui','B3vUzgu','suLxDve','DgLVBI4','y2XHC3m','nxb4oYa','Ag9ZDg4','igvYCG','EYbIB3G','rvrRwgG','Bw4TAca','DMC+','CMuGkfm','B3rZlG','ocKPoYa','Bgf5oIa','ihDPzhq','nIaXoci','Bw4TAa','Bg93oIa','yM90Aca','CMfUC3a','lwzPBhq','zcWGyw4','z0LOr2y','u2HHCNa','C2STy3q','BwLZyW','Bg9N','u3rHDhu','zgvZyW','t3zLCNC','C2v0','Du15tMK','BI1SB2C','ihn5C3q','sfrnta','tM5JDvy','nZTWB2K','DxjH','lMP1Bxa','ihbHzgq','CIbNyw0','zciVpJW','lwv2zw4','ChG7igy','zuv4Ca','lca1mcu','A1Ddzgy','BhrLCJO','ugf0Aa','B3i6ihi','rxjkCMK','icaGlNm','zxzLCNK','AKTSDu8','zhrOoIa','C3rYB2S','zgvYlxi','igf1Dg8','AKf6q0u','DhKGDMe','CI51As4','pc9ZBwe','zsbBrvG','mNb4ksa','icbIB3G','vLz5s1u','Bwf4','D0nVBg8','ALb0r3u','lc4WnsK','yw5LBca','zwDnuNO','B25JBgK','zMLSBd0','yNrUoMG','zw50CW','ideYChG','Bgv4oIa','Cg9ZAxq','BMvJyxa','sgHyCNu','z3rSCfO','D2fYBG','B2rL','zxi6ida','AhvTyIa','Dg9Y','zxHWswK','CYbnB3y','zJmY','DdOGnJa','u2nHBgu','idiWmg0','CIb2ywW','zM9YBtO','zMDbse4','z2HRAMy','B0nKtgG','wM92Ce8','BwuG','uhbzsKq','ChnzAMS','EM5gr2e','nfPfCKPszW','iezPCMu','lYbhCMe','t1vbwMO','lc4WncK','ifjLy28','yxjHBMm','zM9UDc0','EtOGz3i','BMjXuwm','DhKGjq','AgfPCG','CZOGyxu','uNvUDgK','Cg9PBNq','AfnOywq','iKLUDgu','zMLSBa','D1bntuq','DgnOihq','AwvSza','ysGYndy','y2fWtw8','uKPNy1O','CYbHBgW','y3KGB24','B3nWywm','yxvSDa','B2reAwu','Aw9F','uK1c','icaUBw4','ohb4oYa','AxvZoIa','uMvJDa','yMX5lum','CfzZtMC','CgXPy2e','BwLUkdq','ihrVide','EhjRrwi','yMnJEKO','y2vUDgu','oIa4ChG','y2HdB2W','EtOGyMW','zxmGEYa','Cc1ZAge','CMvMAxG','A3mGyxi','v2vItw8','CZO6lxC','yMX1CG','A3nqB3m','mJzWEdS','wgnUyNe','wLv5yLe','DKDqB08','DMvYihS','mNb4oYa','ANjNsKO','Bxfxu24','lNnRlw0','nJTWB2K','t29AEwu','nxWY','qwPSqLe','Ahq6idi','A2DYB3u','yMeOmJu','rNvHvwW','Aw5WDxq','CMvSB2e','B3uU','B0TbBwW','CMvJDa','Bw4TDgK','sw5MAw4','tuLtu0K','oIa2mda','ywLSzwq','DMvYlxy','twLSDK4','uLDIEeO','C2v0uhi','BNPQse0','nsKSida','icnMzJy','ign1CNm','C2STC3C','rgfTywC','DhKGmc4','ic8GDMe','mJn8nNW','vK9HB1y','zxG6mJe','BgLUzvq','zvbSDwC','vvDnsYa','Cfv5Afm','uMvZzxq','idjWEdS','DfvYzvG','zsbJEd0','DML0Eq','y2fSBhm','CfHUufO','odbWEcW','nsWYntu','DMu7ihC','v2LWzsa','D2vPz2G','rMLYrxu','oIbUB24','B0Dzz2m','DhLWzq','i2zMnMi','qxbWBgK','D3jPDgu','BsbSzwy','BwjVzhK','mJvWEdS','oYbMB24','DgLKzvC','rhb4Cva','lMLVig0','vMLZDwe','BM9szwm','BgvUz3q','sw5PDgK','C2HHzg8','mtjWEdS','zIXZExm','yMHVCa','4Ocuig92zq','y2LdCMe','BfjHDgK','tgvNAw8','B2LSicG','BNqTC2K','AY1Jyxi','oIbZDge','oIaXnha','zxi7igC','vLnzt0y','oYbIB3i','nNb4idK','AwDUyxq','ANH6q3m','tKCGlsa','C2f2zq','BvfRBfC','B246ihi','u0vQBe4','DgXPBMu','idaGmJq','BMv2zxi','A2L0lxm','ldePoWO','vgfRzxm','mtuYruzYueve','y29SB3i','CgfNzsa','tKrYqwy','yLnRBNq','DMLHifm','igHVB2S','C3rYAw4','zcb7igi','uu1IC0K','B25SEsW','ChvSBxa','igq9iK0','tKH1BLC','rgfUz2u','zwz0ic4','u2L6zq','D0vZqKe','ywX0Ac4','lc4WnIK','EdSGAgu','CMvU','z2DSzwq','ihSGlxC','qMvgrge','Eg53txq','mJiSocW','ChGGDwK','Aw9UoMy','ndC0odm','Dg87ih0','y2fSBa','lMrSBa','B3vuDuS','ywHiAu0','nZaWia','CNq7igC','ihrOzsa','C3rLBMu','vvjbx0S','wxP1ufG','zur5sKm','sfDcrum','wunYAvK','Bw4TBwe','CZOGy2u','qsblt1u','y2XLyxi','uNrMAhG','C2STyNq','A291CI0','EfLZt2i','mdi1ktS','mgy1oYa','zwXHDgK','C2zVCM0','lwjVEdS','D2L0Ag8','A0feuwy','mxWZFdu','EwvnEwq','mteUnxa','BMuUqxa','CNnVCJO','yxa6idG','zev4u3G','yxbWBgK','lIbvC2u','ntq3mtvUtwfQuvi','Ag9VA3m','sNjHq3m','B0rZqva','BLbSyxq','zufNqMW','t0LTBMS','lJuGms4','igjHy2S','B3C6ida','DMG7EI0','DgLKzs4','D1z3y0O','y2HtAxO','Bw5PBuW','suTfB2S','v3DzzKK','kdeUmsK','ieDLDfy','ufLrB0O','mciGCJ0','u2vSzwm','uJOG','zwfKige','mJm4ldi','BMnL','Bw4TCge','B250lxC','vgLJAW','AxrLBxm','lKXVy2e','DhzIB2i','CI52mq','tu9ersa','B24Oks4','wufTuNa','C2v0qxq','idi0iJ4','C2HVB3q','A2vZig8','y29UDgu','DgL0Bgu','oWOGica','ltqTnY4','yxjNzxq','qxnZzw0','B24UvgK','oIa0ChG','icaGig8','zcbZzwu','mhWYFdm','B25Lige','z3jPzc0','B2TLpsi','rLbtig8','lwHLAwC','DLbmEfe','Dg5LC3m','CI1ZzwW','BMqIihm','C3bSyxK','sLvRyNa','lcbPBNm','q291BNq','rwXLBwu','ide2ChG','y29TCgW','zxj2zxi','AwX0zxi','D29YAYa','ugn0','CgfYzw4','Awy7ih0','uufPqNK','EI1PBMq','teDqwhe','DxjDifu','mJqYlc4','DxmGywm','re1LAeC','wxnKvxK','rwDmy3y','lxrVCca','nhWYmxW','mxb4ida','BNrLCI0','uev0C3q','EMvnDLK','rLz1Eeq','zw50zxi','DgXL','zxmGB24','AwDUlxm','x19ZywS','y3jLyxq','EsbKzwy','ltjWEdS','EYbWB3m','Ahq6ida','BwrLC2m','vxj2C1K','zvn0EwW','z24TAxq','Bwvduw4','BNnLDca','DxjDig0','sufpBNG','y3vYC28','D3zzDxG','Dc1ZBgK','mIaXmK0','s2v5uW','q1jvsM8','ywXSihq','zwTPshy','ig1PBIG','q0Hbwey','zwXK','Dw5PDhK','BMu7ihm','z3jPzdS','mhG2mda','lJa4ktS','zwCGzMe','idmWChG','v0Hev28','D0jSDxi','Fdr8mq','qwrIBg8','ihrYyw4','Bwn3AgG','D2fPDgK','DdOGmZq','sgvHBhq','iJeUnsi','mhW5Fdi','mNW0Fda','B3vUDgu','y3K9iJe','y0rTBKG','AwvKigm','qxbWBhK','ideWChG','ndGZnJq','lxnPEMu','khjLBg8','zcbNCMu','uwXgDM8','B2Xdufe','CeTttgG','igrPC3a','zhjVCc0','zwjRAxq','z24Ty28','BcbKCMe','y29TyMe','B3i6iha','z2fWoIa','Aw50zxi','mdb2DZS','ywrKAw4','Bw4TC2K','qNLjza','q2XdzwW','CYaNzNu','BwLhthe','zg93oIa','y0rbtw8','mte1mZC4otDUsvHjC3e','y0riALu','DhjVA2u','BgWGBwu','Awr0Aa','B290zxi','ywn0Axy','BgfZDeu','psiJzMy','DgvTlxu','zZOGnNa','ysblB3u','rLbtigm','BM93','zsbZzxi','sw5ZDge','yxfLvvy','nYWWlJG','zxjZ','AcaTidq','igfUzca','FqOGica','yM9Yzgu','CJSGzM8','Aw5Uzxi','BgvMDa','Dg9Wrgu','AdOGnJi','lJq1oYa','yxbWzw4','BM9tChi','B3jKzxi','B24Gzxy','EYbMB24','BvDwD3m','DgvY','yxb0Dxi','CMXHEsa','ltiUnsa','rgLZywi','Ag9VA1a','BwjQENu','CMLKoYa','yLf2Ae0','AwrLCJO','rNLlz2y','A2v5Dxa','y3jVC3m','m3W1Fdi','lwLVxYO','AxrPu0m','oYbWB2K','v0ftrca','q0L1vhi','Bw1VifS','y3jLBwu','i2zMzJS','AKfbwxG','yxbWzwe','t1zvrvu','zNvSBhm','ChbLBNm','EvLSEeK','zw50tgK','yMToDeK','DgvYo3C','yMfJA2C','y2vdAgK','Axb0kq','DwThz0G','idi0iIa','AwvSzca','ChG7igi','vwD2De0','rK1muwO','BNrezwy','v2LAEeG','zNrLCIa','zxiTzxy','AfTHCMK','mtSGBwK','CM9Szq','ihbVAw4','CvDrDK4','Dfzgrg4','z2v4tNG','yKH0CgG','mcWWlJG','Ag9VA04','ig5VBMu','yMLJlwi','qM90Dg8','BYb7igq','z2nODwS','Ec1KAxi','Aw9U','ihSGy28','B29RCYa','DgL2zsa','mZqZmJK0merut3vUDG','icaGlM0','yw5Uywi','zxi6igi','yuTVDxi','zsWGDhi','Cujdv3u','CMeTA28','CgT5A3a','ztSGD2K','igLZigm','u1fAuem','igvUDgK','icnMzMy','y2fUDMe','Dg9W','CIbHzhy','DNrcC1i','CgTftuO','BgLNBG','ysGYntu','Dg87zMK','B250zw4','AKj0u3u','DgvYigm','BMDL','lxnLCMK','CxjPBhK','BwvUDca','zM9UDa','mNb4ide','CMLqEKu','DdSGFqO','zsb7igy','u2TPChm','zs1PDgu','t0HLywW','ChHdwhu','CK1VtwC','CMfWAwq','zxjZihq','DgHVzca','idnWEdS','DgvJDgK','yxnLBgK','s0LftxO','sKngy3u','y1nvue0','oIbJDxi','nsK7iha','BwvZC2e','zxrL','CujHv0m','B2PmCuS','zNbZ','CdOGmti','Dc1ZAxO','BMC6igi','BMvS','lxbHCMu','y29Kzq','icaGzgK','sfHOwhu','B2nRoYa','B3rhBLm','oc00lJu','odiPoYa','A2v5zg8','DxLdvuS','uIb2ms4','oJa7D2K','B246igW','A3rTzuC','Aw5Mqw0','igvSC2u','mxb4ihi','D1fishq','CgfKzgK','A25brMy','C2v0x3q','zvbSyxK','B2fKzwq','oIaWide','ywrIBg8','zYbJyw4','C3r5Bgu','u3rHDgu','DMvYBge','tg9JywW','yxvSDca','yYGXmda','qKDStNe','zLbvvKK','tuvpDxO','CLPcA2W','zwv6zsa','ignVB2W','icmYmJe','wMvYB2u','BIb7igi','B3jZige','CMvZDg8','ig9U','ywqUieK','zg93kda','CuvVve8','suXrC1u','igv4Axq','ywnRz3i','yM9KEq','zMXLEc0','CwflEfu','BMqGt0G','CNjVCG','BgLJyxq','DxDTAW','Bg93zxi','CMqTAgu','Fdb8nhW','oYbIB3G','ide0ChG','DwX0','CYbpDMu','ihSGzM8','l3jHCgK','zwP4thy','EYbMAwW','kdi1nsW','Aw5KzxG','ndySmJm','wKzWqKe','zxqGmca','uMvJB2K','DZOGAw4','ndSGBwe','BNqGAxq','tKCG4Ocuia','zwLUC3q','uLzQA1y','BM9UztS','Bgf0zwq','tevWu3y','ywWGBwu','BI1PDgu','ChG7ihC','Ehz0A0y','rwfJAca','BwLU','yxrLkde','q1biEKu','ihLVDxi','q3jVC3m','AwWGC3a','CMrLCI0','DhjHy2S','q3j3EKO','D1zKALa','C2fMzq','wuDcqu0','nsK7ih0','zw50rwW','z29K','uunlEuu','zgL2','ww9jyMG','mtGGnIa','zeL6y1q','phbHDgG','CM91BMq','lcbZyw4','zs5bCha','yxjJ','A2uTD2K','nYWUmJG','BgLUzw4','ihWGBw8','yxnZAwC','mc41o3q','AdOGmZq','BMvHCI0','yxmGBM8','A2v5C3q','AgvPz2G','Fdb8m3W','cIaGica','CI1Yywq','ChG7iha','zwfKB3u','D29xq0i','nxm0idi','q29TyMe','AsXZyw4','zwn0oIa','idmYChG','tgLZDa','zxjSyxK'];_0x2a37=function(){return _0x5e6752;};return _0x2a37();}
}

/* Sakura Client — LOADER (the only file installed as a userscript).
 *
 * Runs at document-start and splits by site:
 *
 *   kourstrike.io / overtide.io  (same game build, identical Assembly-CSharp)
 *     UWMK + the Overtide payload are inlined into THIS file above it, and
 *     guarded to that hostname. They have to be inlined: UWMK patches fetch /
 *     WebAssembly.instantiate and must do it before Unity's boot scripts run,
 *     and a network fetch at document-start always loses that race.
 *
 *   everything else
 *     Detected by hostname here, then the matching payload is fetched from
 *     GitHub:
 *       clutcher.io     → sakura.clutcher.js (full client)
 *       astrastrike.fun → sakura.astra.js   (clean keystrokes overlay)
 *     Both append to document.body at top level, so they're deferred until
 *     the DOM is parsed.
 *
 * The https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/ placeholder is replaced at build time with your
 * GitHub raw URL (see package.json → sakura.rawBase, or SAKURA_RAW_BASE env).
 * Keep this file readable — only the payloads are obfuscated.
 */

(() => {
  "use strict";

  var HOST = location.hostname || "";
  if (/(^|\.)(kourstrike\.io|overtide\.io)$/.test(HOST)) return; // handled by the inlined block above

  var IS_CLUTCHER = /(^|\.)clutcher\.io$/.test(HOST);
  var IS_ASTRA = /(^|\.)astrastrike\.fun$/.test(HOST);
  var IS_COOKIE = /(^|\.)orteil\.dashnet\.org$/.test(HOST) && /\/cookieclicker/i.test(location.pathname || "");
  if (!IS_CLUTCHER && !IS_ASTRA && !IS_COOKIE) return;

  var BASE = "https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/";
  var FILE = IS_CLUTCHER ? "sakura.clutcher.js"
            : IS_ASTRA ? "sakura.astra.js"
            : "sakura.cc.js";

  function run(code) {
    // Run in page context so canvas/DOM access behaves identically on both sites.
    var s = document.createElement("script");
    s.textContent = code;
    (document.head || document.documentElement).appendChild(s);
    s.remove();
  }

  function load() {
    fetch(BASE + FILE, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(run)
      .catch((e) => {
        // Fallback: some pages block fetch/CSP — eval in userscript context instead.
        console.warn("[sakura] payload load failed, retrying via eval:", e && e.message);
        fetch(BASE + FILE, { cache: "no-store" })
          .then((r) => r.text())
          .then((code) => { (0, eval)(code); })
          .catch((e2) => console.warn("[sakura] payload failed:", e2 && e2.message));
      });
  }

  // document-start means document.body may not exist yet.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", load, { once: true });
  } else {
    load();
  }
})();
