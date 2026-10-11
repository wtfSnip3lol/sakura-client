// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.6.0
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
function _0x3ca7(_0x37b5c2,_0xc11eea){_0x37b5c2=_0x37b5c2-(0x474+0x1*-0xf59+0xba3);var _0x433919=_0x2623();var _0x510e23=_0x433919[_0x37b5c2];if(_0x3ca7['xSoDMA']===undefined){var _0x49fb06=function(_0x46f329){var _0x1b9674='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x42db0c='',_0x5b9ce6='';for(var _0x2a98f1=0x6*0x67b+0x2101+-0xb*0x689,_0x1dee6c,_0x15e6aa,_0x2b0b26=0x2224+0x3f6*0x1+0x261a*-0x1;_0x15e6aa=_0x46f329['charAt'](_0x2b0b26++);~_0x15e6aa&&(_0x1dee6c=_0x2a98f1%(0x2a1*-0x1+0x10*0x22f+-0x204b)?_0x1dee6c*(-0x2a1+0x1*-0x281+0x35*0x1a)+_0x15e6aa:_0x15e6aa,_0x2a98f1++%(0x189*-0xb+0x2*0xaba+-0x48d))?_0x42db0c+=String['fromCharCode'](0x1*0x1ef6+0x7*0x4f2+0x9*-0x72d&_0x1dee6c>>(-(0x15f1+-0x19f5+-0x203*-0x2)*_0x2a98f1&-0x5cf*0x6+-0x2441*0x1+0x4721)):-0xe45+-0x1b2f*-0x1+-0xcea){_0x15e6aa=_0x1b9674['indexOf'](_0x15e6aa);}for(var _0x123c8d=0x40*0x4a+0x1b4+-0x1434,_0x54f3e6=_0x42db0c['length'];_0x123c8d<_0x54f3e6;_0x123c8d++){_0x5b9ce6+='%'+('00'+_0x42db0c['charCodeAt'](_0x123c8d)['toString'](-0x15b*-0x5+-0x219f+-0x7b*-0x38))['slice'](-(-0x81+-0x5*0x5e2+0x1ded));}return decodeURIComponent(_0x5b9ce6);};_0x3ca7['zSjdrL']=_0x49fb06,_0x3ca7['zEDArH']={},_0x3ca7['xSoDMA']=!![];}var _0x4208f2=_0x433919[0x1cf+0xcba*0x1+0x3d*-0x3d],_0x8e7742=_0x37b5c2+_0x4208f2,_0x13a155=_0x3ca7['zEDArH'][_0x8e7742];return!_0x13a155?(_0x510e23=_0x3ca7['zSjdrL'](_0x510e23),_0x3ca7['zEDArH'][_0x8e7742]=_0x510e23):_0x510e23=_0x13a155,_0x510e23;}(function(_0x66d550,_0x4105b7){var _0x2140da=_0x3ca7,_0x18b87c=_0x66d550();while(!![]){try{var _0x5b5443=-parseInt(_0x2140da(0x5bd))/(0x1729+-0x3*0x515+-0x7e9)+-parseInt(_0x2140da(0x2b0))/(0x5*0x10b+0x175a+-0x3*0x985)*(parseInt(_0x2140da(0x218))/(-0x1ec0+0x1*0x9eb+0x14d8))+-parseInt(_0x2140da(0x655))/(0x1*0x26c1+0x881+-0x1*0x2f3e)*(-parseInt(_0x2140da(0x493))/(-0xfa1*0x1+0x443*0x1+-0x109*-0xb))+parseInt(_0x2140da(0x5be))/(0xca*0x29+0x1*0xea2+0x177b*-0x2)+parseInt(_0x2140da(0x270))/(0x24fd*-0x1+0x1*-0x267c+-0x97*-0x80)+parseInt(_0x2140da(0x523))/(-0x7c6*-0x1+0x177d+-0x1f3b)*(-parseInt(_0x2140da(0x14b))/(-0xd4e+-0x11ba+0x3*0xa5b))+parseInt(_0x2140da(0x31d))/(0x3a0*0x9+0x1e+-0x20b4);if(_0x5b5443===_0x4105b7)break;else _0x18b87c['push'](_0x18b87c['shift']());}catch(_0x31ab13){_0x18b87c['push'](_0x18b87c['shift']());}}}(_0x2623,-0xdfa36+0x79bf1*0x2+0x71468),((()=>{'use strict';var _0xa78d05=_0x3ca7,_0x426004={'arIoL':function(_0x369483,_0x699c27){return _0x369483+_0x699c27;},'wgnaq':function(_0x3ff134,_0x37790c){return _0x3ff134+_0x37790c;},'vmWwu':_0xa78d05(0x117)+_0xa78d05(0x460)+'\x20','wrPlJ':_0xa78d05(0x3e4)+'s','mvyDM':_0xa78d05(0x3ca)+'d','hWYXe':_0xa78d05(0x293)+'ooter'+'\x20','FlfFU':_0xa78d05(0x3b8),'MdSpv':function(_0x2a0d7d,_0x285ece,_0x41ec1b,_0x152cc4){return _0x2a0d7d(_0x285ece,_0x41ec1b,_0x152cc4);},'WPZRp':function(_0x45bfb1,_0x59358d){return _0x45bfb1===_0x59358d;},'TrnOv':_0xa78d05(0x41d),'FHnrB':_0xa78d05(0x412),'VWUFs':_0xa78d05(0xdb),'SRAHc':function(_0x2e50e0,_0x1e4514){return _0x2e50e0+_0x1e4514;},'GHYiz':function(_0x555067,_0x3eb225){return _0x555067+_0x3eb225;},'VtBJm':function(_0x91349f,_0x3916c9){return _0x91349f(_0x3916c9);},'VxTXx':function(_0x30a944,_0x356559){return _0x30a944(_0x356559);},'pFOlr':function(_0x206f31,_0x2ca66e){return _0x206f31>_0x2ca66e;},'rSwHf':_0xa78d05(0x635),'mqEGz':function(_0xc01958,_0x5d4075,_0x299548){return _0xc01958(_0x5d4075,_0x299548);},'WkBHx':function(_0x1edd35,_0x59810b){return _0x1edd35+_0x59810b;},'dcSXg':function(_0x5c7ca6,_0x1ee341){return _0x5c7ca6!==_0x1ee341;},'CTDhY':_0xa78d05(0x516),'bNvMZ':'zucXh','UTmTl':function(_0x2e749d,_0x23353d,_0x1316a6,_0x179848){return _0x2e749d(_0x23353d,_0x1316a6,_0x179848);},'UDVOx':function(_0x363d7b,_0xf167d5,_0xe3dc1b,_0x146eb1,_0x23df0e){return _0x363d7b(_0xf167d5,_0xe3dc1b,_0x146eb1,_0x23df0e);},'JCBbD':function(_0x5f1cd8,_0x5dbe04){return _0x5f1cd8*_0x5dbe04;},'cgpsY':'shoot'+_0xa78d05(0x1b8),'XVSwf':_0xa78d05(0x108)+_0xa78d05(0x39a)+_0xa78d05(0x113)+'s','KsmIN':function(_0xe55458){return _0xe55458();},'ohtWq':function(_0x27086d,_0x3ec124){return _0x27086d!==_0x3ec124;},'lERfv':'fEyfO','saLbD':function(_0x370d01,_0x322622,_0x50b89a,_0x3f06d3,_0x408b2e){return _0x370d01(_0x322622,_0x50b89a,_0x3f06d3,_0x408b2e);},'jeWOL':_0xa78d05(0x2eb),'bJvGb':function(_0x34b150,_0x496ff4,_0x4d81b3,_0x112c1a,_0x1f08c2){return _0x34b150(_0x496ff4,_0x4d81b3,_0x112c1a,_0x1f08c2);},'NVYEH':function(_0x36cb7b,_0x55547b,_0x2ea196,_0x22e97f,_0x29bfad){return _0x36cb7b(_0x55547b,_0x2ea196,_0x22e97f,_0x29bfad);},'EZfDl':function(_0x407cb2,_0x4c067f){return _0x407cb2===_0x4c067f;},'LlNfw':_0xa78d05(0x3f9),'hVhcB':function(_0x543211,_0x325df0){return _0x543211===_0x325df0;},'ZwpKW':_0xa78d05(0x4d0),'VNvUQ':function(_0x145387,_0x32d069){return _0x145387+_0x32d069;},'QUced':function(_0x16a059,_0x4b5f6c){return _0x16a059>_0x4b5f6c;},'VPbSH':'keydo'+'wn','lWkIV':_0xa78d05(0x421),'TYQQx':'mouse'+'down','xVzYI':_0xa78d05(0x327),'LCTig':'compl'+'ete','UuzpM':_0xa78d05(0x5e0)+_0xa78d05(0x111)+_0xa78d05(0x203)+'d','IWZLa':function(_0x2bf536,_0xed139c){return _0x2bf536===_0xed139c;},'nEQPS':_0xa78d05(0x491)+_0xa78d05(0xf4)+'i-mon'+'ospac'+'e,mon'+_0xa78d05(0xf5)+'e','vsSuq':_0xa78d05(0x375)+'9d','ioVST':function(_0x5b9858,_0x53211f){return _0x5b9858(_0x53211f);},'IMHvW':'\x20FPS','Givtz':'waiti'+'ng\x20fo'+_0xa78d05(0x359)+'e…','FutSv':'MsPLU','dENfM':function(_0x2747c5,_0x3b9e44){return _0x2747c5(_0x3b9e44);},'VTjCl':function(_0x2fa7a2,_0x3112a8){return _0x2fa7a2-_0x3112a8;},'LOnsX':_0xa78d05(0x4e8),'Xmtbv':function(_0x2416ed,_0x364286){return _0x2416ed/_0x364286;},'DVjga':function(_0x3fa410,_0x20e871){return _0x3fa410-_0x20e871;},'aGiru':function(_0x3f337b,_0x301c5c){return _0x3f337b===_0x301c5c;},'yvmCR':_0xa78d05(0x395),'CPBsh':_0xa78d05(0x4d5)+_0xa78d05(0x317)+'r.ui.'+'v1','hoXRa':'scMvz','BSfQY':'butto'+'n','MyprK':_0xa78d05(0x369)+_0xa78d05(0x51d),'YMDXF':'switc'+'h','IPDgN':function(_0x45a710,_0x4e61b1){return _0x45a710(_0x4e61b1);},'sdknQ':_0xa78d05(0x362),'rEuio':_0xa78d05(0x443),'ZgNEI':_0xa78d05(0x53f)+'n','mEpKH':_0xa78d05(0x461)+'bel','qbUez':_0xa78d05(0x146),'JNAdv':_0xa78d05(0x37c),'Fmqqk':'loadi'+'ng','RmcWd':_0xa78d05(0x383)+_0xa78d05(0x448),'hZAmv':function(_0x304041,_0x1f3ce8,_0x36ee31,_0x2214a8,_0x37ca68,_0x213706){return _0x304041(_0x1f3ce8,_0x36ee31,_0x2214a8,_0x37ca68,_0x213706);},'cDnCu':_0xa78d05(0x60a)+'s','MoOro':function(_0x35f3a8,_0x4800f3,_0xa426ea,_0x551441){return _0x35f3a8(_0x4800f3,_0xa426ea,_0x551441);},'NoNlb':_0xa78d05(0x5b5),'pIgfV':_0xa78d05(0x352)+_0xa78d05(0x1a9),'UtWRR':'OHeal'+'th','xzrnh':_0xa78d05(0xfc)+_0xa78d05(0x3dd)+_0xa78d05(0x3b4)+_0xa78d05(0x1ee)+_0xa78d05(0x107)+_0xa78d05(0x333)+_0xa78d05(0x55d)+'on','aDvlx':_0xa78d05(0x3fe)+'t','MfLvx':function(_0x2dab30,_0x1d1b98,_0x1a06b1,_0x706f81,_0x594aa7,_0x44cedb){return _0x2dab30(_0x1d1b98,_0x1a06b1,_0x706f81,_0x594aa7,_0x44cedb);},'Tsmrs':_0xa78d05(0x439)+_0xa78d05(0x66f)+'ilMot'+_0xa78d05(0x5ae)+_0xa78d05(0x5a5)+_0xa78d05(0x4ff)+_0xa78d05(0x320)+_0xa78d05(0x2c1)+'rings'+'\x20neve'+'r\x20adv'+'ance.','hiivt':'Zeroe'+_0xa78d05(0x4f4)+_0xa78d05(0x27c)+_0xa78d05(0x4c1)+'xes\x20a'+_0xa78d05(0x654)+_0xa78d05(0x51b)+_0xa78d05(0x10e)+'\x20weap'+_0xa78d05(0x3fd)+'ery\x202'+_0xa78d05(0x116),'aPjDg':'Rapid'+_0xa78d05(0x15f)+_0xa78d05(0x634)+']','ucWDN':_0xa78d05(0x4d9)+'s\x20Ove'+_0xa78d05(0x544)+_0xa78d05(0x68a)+'n.fir'+_0xa78d05(0x216)+_0xa78d05(0x195)+'0%.\x20S'+'erver'+_0xa78d05(0x6bd)+'still'+_0xa78d05(0x53a)+'\x20shot'+'s.','enLVw':'Damag'+_0xa78d05(0x60e)+'P]','oqKOv':'Overw'+_0xa78d05(0x6ae)+'\x20Over'+_0xa78d05(0x3f7)+_0xa78d05(0x3a2)+_0xa78d05(0x6a8)+_0xa78d05(0x1e6)+'annab'+'le\x20if'+'\x20the\x20'+_0xa78d05(0x2da)+_0xa78d05(0x444)+_0xa78d05(0x376)+'s.','kyvvY':function(_0x4032d7,_0xb5e953,_0x244210,_0x378eb6,_0x5b9209,_0x2633e5){return _0x4032d7(_0xb5e953,_0x244210,_0x378eb6,_0x5b9209,_0x2633e5);},'MOMkL':function(_0x3e756d,_0x225c27,_0x49291f,_0x347efd,_0x3f5788,_0x510d21){return _0x3e756d(_0x225c27,_0x49291f,_0x347efd,_0x3f5788,_0x510d21);},'CQrsp':_0xa78d05(0x269)+_0xa78d05(0x3e0)+'e\x20wea'+_0xa78d05(0x663)+_0xa78d05(0x5e9)+'ed\x20am'+_0xa78d05(0x529)+'\x20999\x20'+_0xa78d05(0x3d5)+_0xa78d05(0x55a)+'s.','RZLqQ':'move','POKvf':function(_0x3c6e15,_0x290dde,_0x543e4e,_0x1cbe48,_0x1589a9,_0x443746){return _0x3c6e15(_0x290dde,_0x543e4e,_0x1cbe48,_0x1589a9,_0x443746);},'LddEV':function(_0x1e07dc,_0x1348b1,_0x10273c,_0x27fa74){return _0x1e07dc(_0x1348b1,_0x10273c,_0x27fa74);},'bBakQ':'Jump\x20'+_0xa78d05(0x25c)+'vity','OyVaJ':function(_0x584234,_0x3d8806){return _0x584234!==_0x3d8806;},'WMErU':_0xa78d05(0x5fd)+'%','OqBEo':function(_0x87bde8,_0x2ac86,_0x3d3938,_0x4b74cd,_0x3b480e,_0x510a87){return _0x87bde8(_0x2ac86,_0x3d3938,_0x4b74cd,_0x3b480e,_0x510a87);},'QYwDb':'lower'+'\x20=\x20fl'+_0xa78d05(0x658),'djRiE':function(_0x5ed174,_0xa6c122,_0x31a779,_0x37ba33,_0x4a9720,_0x168d63){return _0x5ed174(_0xa6c122,_0x31a779,_0x37ba33,_0x4a9720,_0x168d63);},'Wngan':_0xa78d05(0x5c9)+_0xa78d05(0x627),'MEKZP':'WASD\x20'+'+\x20LMB'+'/RMB\x20'+_0xa78d05(0x27e)+_0xa78d05(0x510)+_0xa78d05(0xd0)+'.','GDqmP':function(_0xe8a974,_0x1e098c,_0x287662,_0x38f21){return _0xe8a974(_0x1e098c,_0x287662,_0x38f21);},'uJIRK':_0xa78d05(0x23f)+_0xa78d05(0x21f)+'e','NeKFx':function(_0x2b8b21,_0xc9e478,_0xb09f62,_0x22e995,_0x4127fe,_0x39a00c){return _0x2b8b21(_0xc9e478,_0xb09f62,_0x22e995,_0x4127fe,_0x39a00c);},'AJsYm':_0xa78d05(0x4d7)+_0xa78d05(0x4e4)+_0xa78d05(0x5bb)+'rossh'+_0xa78d05(0x285),'NIXue':_0xa78d05(0x29b),'xsgWj':function(_0x31f342,_0xc16d59,_0x7e2fde){return _0x31f342(_0xc16d59,_0x7e2fde);},'NeOaS':_0xa78d05(0x279)+_0xa78d05(0x1b8),'FBNwO':function(_0xc31d37,_0x20fdad,_0x3c9953){return _0xc31d37(_0x20fdad,_0x3c9953);},'geSjo':function(_0x3fe384,_0x4bca3d){return _0x3fe384(_0x4bca3d);},'kSajf':_0xa78d05(0x286)+'\x20kour'+_0xa78d05(0x5f9)+_0xa78d05(0x1b1)+_0xa78d05(0x6c8)+_0xa78d05(0x1fd),'NuEWo':_0xa78d05(0x53e)+'\x20effe'+_0xa78d05(0x1c4)+'\x20relo'+'ad\x20wh'+_0xa78d05(0x548)+'ggled'+'.','wicvn':function(_0x4babe7,_0x182614,_0x778ef8,_0x419a77,_0x1997ac,_0x1edc12){return _0x4babe7(_0x182614,_0x778ef8,_0x419a77,_0x1997ac,_0x1edc12);},'NhNVu':_0xa78d05(0x439)+_0xa78d05(0xbe)+_0xa78d05(0x3d6)+_0xa78d05(0x44b)+'—\x20no\x20'+'WASM\x20'+'hooks'+_0xa78d05(0x45e)+'\x20this'+'\x20if\x20m'+_0xa78d05(0x581)+_0xa78d05(0x1fa)+_0xa78d05(0x4ef)+'art.','xkgKE':'Appli'+'es\x20on'+_0xa78d05(0x681)+_0xa78d05(0x2df)+'f\x20mat'+'ches\x20'+_0xa78d05(0x2b3)+_0xa78d05(0x5aa)+_0xa78d05(0x43d)+_0xa78d05(0x20a)+_0xa78d05(0x4be)+_0xa78d05(0x401)+_0xa78d05(0x660)+_0xa78d05(0x14c)+'lated'+_0xa78d05(0x4cb)+_0xa78d05(0x2b4)+_0xa78d05(0x287)+_0xa78d05(0x275)+'-appl'+'ied\x20c'+_0xa78d05(0x3f2),'cYBdJ':'Each\x20'+'one\x20i'+_0xa78d05(0x519)+'ls\x20a\x20'+_0xa78d05(0x3ae)+_0xa78d05(0x1f6)+'oline'+'\x20for\x20'+'the\x20w'+'hole\x20'+_0xa78d05(0x18e)+'load.'+_0xa78d05(0x5b7)+_0xa78d05(0x407)+_0xa78d05(0x6ce)+_0xa78d05(0x1c0)+_0xa78d05(0x4b6)+_0xa78d05(0x19b)+'ure\x20t'+_0xa78d05(0x281)+'oes\x20n'+_0xa78d05(0x48d)+_0xa78d05(0xf9)+'he\x20re'+_0xa78d05(0x620)+'thod\x20'+_0xa78d05(0x64c)+'s\x20\x27fu'+_0xa78d05(0x540)+'n\x20sig'+'natur'+_0xa78d05(0x1f5)+'match'+'\x27\x20the'+'\x20mome'+_0xa78d05(0x379)+'\x20is\x20c'+_0xa78d05(0x625)+'.\x20Tur'+_0xa78d05(0x16c)+_0xa78d05(0x694)+_0xa78d05(0x590)+_0xa78d05(0x471)+_0xa78d05(0x5c6)+_0xa78d05(0x135)+_0xa78d05(0x318)+'d\x20see'+_0xa78d05(0x546)+_0xa78d05(0x3e6)+'\x20your'+_0xa78d05(0x661)+_0xa78d05(0x4cd)+_0xa78d05(0x141)+'n.','mwfyC':function(_0xaed19e,_0x29c67d,_0x3db14f,_0x7d172b){return _0xaed19e(_0x29c67d,_0x3db14f,_0x7d172b);},'kVjgr':_0xa78d05(0x4b3)+'OHeal'+_0xa78d05(0x4c7)+'itiat'+_0xa78d05(0x5b6)+'Healt'+'h)','txJuI':_0xa78d05(0x554)+'e\x20(OH'+'ealth'+'.Loca'+'lDie)','LTMpg':_0xa78d05(0x352)+'oil\x20('+'Recoi'+_0xa78d05(0x55d)+_0xa78d05(0xd1)+'ck)','EivyI':function(_0x150da8,_0x4edb90,_0x4f65fa,_0x52e149,_0x13f6cc,_0x22288c){return _0x150da8(_0x4edb90,_0x4f65fa,_0x52e149,_0x13f6cc,_0x22288c);},'xqnwG':_0xa78d05(0x697)+_0xa78d05(0x354)+_0xa78d05(0x274)+_0xa78d05(0x2c2)+_0xa78d05(0x4d8)+_0xa78d05(0x230)+'t\x20sta'+_0xa78d05(0x582)+'via\x20S'+_0xa78d05(0x35a)+'tecti'+_0xa78d05(0x4d6)+'\x20Keep'+_0xa78d05(0x2f6),'DTabl':_0xa78d05(0x1ea)+'amage'+_0xa78d05(0x290)+_0xa78d05(0x325)+'atly\x20'+_0xa78d05(0x2fb)+'\x20ban\x20'+_0xa78d05(0x69f)+_0xa78d05(0x316)+'with\x20'+'this\x20'+_0xa78d05(0x55c),'xePBQ':function(_0x1c0209,_0x3f7328,_0x962e69,_0x37bd10,_0x491ac8,_0x7d33dd){return _0x1c0209(_0x3f7328,_0x962e69,_0x37bd10,_0x491ac8,_0x7d33dd);},'KyHzp':'These'+'\x20leav'+_0xa78d05(0x495)+'ver-v'+_0xa78d05(0x3b1)+'e\x20tra'+_0xa78d05(0x648),'xvpwb':_0xa78d05(0x37d),'DCaVm':_0xa78d05(0x35c)+_0xa78d05(0x392)+'0x250'+_0xa78d05(0x288)+'nt','kqSMY':_0xa78d05(0x653),'hedGo':'NqVdy','UhyhS':'CANVA'+'S','QjuFu':'rgba('+_0xa78d05(0x45f)+'35,24'+'0,0.8'+')','aEwaK':'#fff','nmeUx':'KeyW','ffSvW':function(_0x2f1085,_0x6c451d,_0xf38ea8,_0x2b7be8,_0x38da06,_0x4d4735,_0xa5d445){return _0x2f1085(_0x6c451d,_0xf38ea8,_0x2b7be8,_0x38da06,_0x4d4735,_0xa5d445);},'Xften':function(_0x1d73ff,_0x3a2459,_0x43cbc2,_0x4081d2,_0xd22b3a,_0x5656eb,_0x3c8d46,_0x5c4b55){return _0x1d73ff(_0x3a2459,_0x43cbc2,_0x4081d2,_0xd22b3a,_0x5656eb,_0x3c8d46,_0x5c4b55);},'bmvut':function(_0x4d4b7a,_0xade030,_0x46040b,_0x4e5668,_0xee0aaf,_0x1613ea,_0x3f77c0,_0x276bb0){return _0x4d4b7a(_0xade030,_0x46040b,_0x4e5668,_0xee0aaf,_0x1613ea,_0x3f77c0,_0x276bb0);},'SUzZi':_0xa78d05(0x271),'pyafu':'KLUBp','LZZXi':'afpXk','xuXuD':_0xa78d05(0x47e)+'eld','YWpPg':_0xa78d05(0x611),'sZAUf':function(_0x599007,_0x3db3c7){return _0x599007+_0x3db3c7;},'jwdXQ':_0xa78d05(0xde)+'Engin'+_0xa78d05(0x63c)+'licat'+_0xa78d05(0x350),'GMzDC':_0xa78d05(0x2c5),'xxyUN':_0xa78d05(0x5e8),'hPZTg':'5|3|4'+'|6|1|'+_0xa78d05(0x3d3),'WdFsF':'shown','oMOTw':_0xa78d05(0x4f6),'eRzuB':_0xa78d05(0x104),'zWfJE':function(_0x3016aa,_0x2aaadb){return _0x3016aa+_0x2aaadb;},'LAmbF':_0xa78d05(0x183)+_0xa78d05(0x28a),'rTnnm':_0xa78d05(0x142)+_0xa78d05(0x324)+_0xa78d05(0x298)+_0xa78d05(0x569)+'\x2024\x22\x20'+_0xa78d05(0x5fe)+_0xa78d05(0x2d5)+_0xa78d05(0x4ee)+_0xa78d05(0x181)+'<path'+'\x20d=\x22M'+_0xa78d05(0xcf)+'c-1.5'+_0xa78d05(0x15c)+_0xa78d05(0x31b)+_0xa78d05(0x5d6)+_0xa78d05(0x2b2)+_0xa78d05(0x1d1)+_0xa78d05(0x1cc)+_0xa78d05(0x1c9)+'5s4\x202'+_0xa78d05(0x6d0)+_0xa78d05(0x5a4)+'-2.5\x20'+_0xa78d05(0x190)+_0xa78d05(0x21b)+_0xa78d05(0xe0)+'\x22none'+'\x22\x20str'+_0xa78d05(0x2f1)+'#ff6b'+'9d\x22\x20s'+_0xa78d05(0x2e7)+'-widt'+_0xa78d05(0x527)+'\x20stro'+_0xa78d05(0x482)+_0xa78d05(0x563)+'=\x22rou'+_0xa78d05(0x16e)+_0xa78d05(0x2e7)+'-line'+'join='+'\x22roun'+'d\x22/><'+_0xa78d05(0x6c3)+_0xa78d05(0x1d4)+_0xa78d05(0x4ec)+_0xa78d05(0x3a0)+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0xa78d05(0x2cc)+_0xa78d05(0x432)+_0xa78d05(0x531),'QVlDv':_0xa78d05(0x5f1)+'in','UCOwl':_0xa78d05(0x38e)+'r','keJbH':'mn-ti'+'tles','jiBxi':'mn-cl'+_0xa78d05(0x5cf),'DFBNv':_0xa78d05(0x322),'SPlBx':'sakur'+'a-ui','WaNYc':_0xa78d05(0x2e4)+'t','EYzUQ':_0xa78d05(0x577),'OsRcG':'Visua'+'l','omPku':_0xa78d05(0x1b2),'nBeSV':_0xa78d05(0x3ac),'fKxCQ':'#ffb3'+'c6','lUYth':function(_0xc7662a,_0x4f9345){return _0xc7662a===_0x4f9345;},'YGWMK':'pOEOF','qNJqs':'DiWzk','QEzZS':'QVQLW','UXgaL':_0xa78d05(0x5e5),'rZgxG':_0xa78d05(0x5c5)+'ve','QvrhC':_0xa78d05(0x2d2)+_0xa78d05(0x220),'uAtCk':_0xa78d05(0x299)+_0xa78d05(0x1fe),'whrdu':function(_0x182881,_0x5f4a79,_0x4f6efc,_0x64874,_0x35261f,_0x44931b,_0x3a68a7,_0x25ab24){return _0x182881(_0x5f4a79,_0x4f6efc,_0x64874,_0x35261f,_0x44931b,_0x3a68a7,_0x25ab24);},'cmndY':_0xa78d05(0x14f)+_0xa78d05(0x5a6)+_0xa78d05(0x31c)+_0xa78d05(0x1f9),'rtVTl':_0xa78d05(0x506)+_0xa78d05(0x16b),'MilVq':_0xa78d05(0xe3),'Fvgyf':function(_0x513052,_0x229a00,_0x58d7d7){return _0x513052(_0x229a00,_0x58d7d7);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0xa78d05(0x3c9)+_0xa78d05(0x2a9)]||''))return;if(window[_0xa78d05(0x5ef)+'URA_K'+'OUR__'])return;window[_0xa78d05(0x5ef)+_0xa78d05(0x153)+'OUR__']=!![];var _0x432976=_0x426004[_0xa78d05(0x677)],_0x4ee18c=_0x426004[_0xa78d05(0x36b)],_0x63af5d={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x426004['vsSuq'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x4800f2={..._0x63af5d};try{Object[_0xa78d05(0x5ed)+'n'](_0x4800f2,JSON[_0xa78d05(0x558)](localStorage['getIt'+'em'](_0xa78d05(0x4d5)+'a.kou'+'r.v1')||'{}'));}catch(_0x383e3b){}function _0x462c94(){var _0x144831=_0xa78d05;if(_0x426004[_0x144831(0x13e)](_0x426004['TrnOv'],'vcJiC'))try{localStorage[_0x144831(0x32e)+'em'](_0x144831(0x4d5)+_0x144831(0x317)+_0x144831(0x555),JSON[_0x144831(0x5d4)+'gify'](_0x4800f2));}catch(_0x4a7d14){}else{var _0x75a111={'kZVZf':_0x144831(0xde)+_0x144831(0x20b)+_0x144831(0x63c)+'licat'+_0x144831(0x350),'FSkdz':_0x144831(0x121)+'arget'+'Frame'+_0x144831(0x34e)},_0x437d9c=_0x164f8d[_0x144831(0x1a5)+'ode']?_0x144831(0x21c)+'MODE\x20'+_0x144831(0x48e)+_0x144831(0x549)+'only,'+_0x144831(0x3d0)+'ooks\x20'+'(relo'+_0x144831(0x234)+_0x144831(0x524)+')':_0x37f2a1[_0x144831(0x2bc)]?_0x426004[_0x144831(0x47b)](_0x426004[_0x144831(0x47b)](_0x426004[_0x144831(0x5fb)](_0x426004['wgnaq'](_0x426004[_0x144831(0x305)],_0x510702[_0x144831(0x275)+'Total']?_0x426004['arIoL'](_0x52da7a['hooks'+'Ok']+'/',_0x6eb455['hooks'+'Total'])+_0x426004['wrPlJ']:_0x144831(0x639)+'ks\x20ar'+'med\x20('+_0x144831(0x2b6)+'ff)')+(_0x144831(0x344)+'me\x20')+(_0x2145dd['gameL'+'oaded']?_0x426004['mvyDM']:'loadi'+'ng'),_0x426004[_0x144831(0x310)]),_0xe5d860['shoot'+'ers']?_0x144831(0x628):_0x426004[_0x144831(0x4b1)]),_0x144831(0x57b)+_0x144831(0x4cc)+'t\x20')+(_0x22eb03['movem'+_0x144831(0x136)]?_0x144831(0x628):'none'):_0x144831(0x117)+_0x144831(0xca)+'NG\x20—\x20'+'overl'+'ay\x20on'+'ly\x20(r'+_0x144831(0x23e)+_0x144831(0x594)+'he\x20us'+_0x144831(0x388)+'ipt)';if(_0x21d1d2[_0x144831(0x1ef)+_0x144831(0x1f4)])_0x437d9c+=_0x144831(0x383)+_0x144831(0x448)+_0x407d4e[_0x144831(0x1ef)+_0x144831(0x1f4)];return _0xd688c3(_0x144831(0x60a)+'s',_0x437d9c,_0x51fac0['uwmk'],null,[_0x426004[_0x144831(0x54f)](_0x55aea3,_0x144831(0x2f0)+_0x144831(0xe5)+_0x144831(0x34a),_0x144831(0x128)+'\x20Unit'+'yEngi'+'ne.Ap'+_0x144831(0x282)+_0x144831(0x5af)+'set_t'+_0x144831(0x211)+'Frame'+_0x144831(0x34e),_0x2f19cd(_0x144831(0x5b5),()=>{var _0x32a31d=_0x144831;try{if(_0x5d5e0c)_0x183497['call'](_0x75a111['kZVZf'],_0x75a111[_0x32a31d(0x666)],[-0x1d0e+-0x2*0x11d5+-0x106a*-0x4]);}catch(_0x6d56e8){}}))]);}}var _0x429068={'uwmk':!!window['Unity'+_0xa78d05(0x5d2)+_0xa78d05(0x669)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4800f2[_0xa78d05(0x1a5)+_0xa78d05(0x2f5)],'lastError':''};try{if(_0x426004[_0xa78d05(0x457)](_0x426004['YGWMK'],_0x426004[_0xa78d05(0x4a3)]))window[_0xa78d05(0x2a1)+'entLi'+_0xa78d05(0x206)+'r'](_0xa78d05(0x1f3),_0x531f85=>{var _0x195266=_0xa78d05,_0x147c58={'sQjyF':_0x195266(0x352)+_0x195266(0x1a9)};try{if(_0x426004[_0x195266(0x427)]===_0x426004[_0x195266(0x420)])_0x5b7af7['noRec'+'oil']=_0xdb7cce,_0x56a5dc(),_0x4b9268(_0x147c58[_0x195266(0x27d)],_0x409177);else{var _0x2a4dc8=_0x531f85&&(_0x531f85[_0x195266(0x155)+'ge']||_0x531f85['error']&&_0x531f85['error']['messa'+'ge'])||'unkno'+'wn';if(_0x531f85&&_0x531f85[_0x195266(0x143)+_0x195266(0x2a9)])_0x2a4dc8+=_0x426004[_0x195266(0x44e)](_0x426004['GHYiz']('\x20@\x20'+String(_0x531f85['filen'+_0x195266(0x2a9)])['split']('/')['pop'](),':'),_0x531f85[_0x195266(0x23a)+'o']||'?');_0x429068[_0x195266(0x1ef)+_0x195266(0x1f4)]=_0x426004[_0x195266(0xee)](String,_0x2a4dc8)['slice'](-0x7f7*-0x3+0xa9d+-0x7*0x4ee,0x2251+-0x1*0x1c0f+-0x5a2*0x1);}}catch(_0x8e4eb0){}});else try{_0x3b90c7['enabl'+'ed']=![];}catch(_0x50d112){}}catch(_0x25b71e){}var _0x19e185=null,_0x2ad825=null,_0x5c8828={},_0x515785=[],_0x11a35b=[],_0x20e455=new Map();function _0x2ecb4e(_0x4c1679,_0x56dc50){var _0xafaaf0=_0xa78d05,_0x593e4d={'HSruc':'Adblo'+'ck','zKUWt':function(_0x6c9e6d,_0x27d8ee){return _0x426004['VxTXx'](_0x6c9e6d,_0x27d8ee);}};if(_0xafaaf0(0x5a2)!==_0xafaaf0(0x5a2))return[_0x3124fd(_0x593e4d[_0xafaaf0(0xd3)],_0xafaaf0(0x286)+_0xafaaf0(0x51f)+_0xafaaf0(0x5f9)+_0xafaaf0(0x1b1)+_0xafaaf0(0x6c8)+'ots.',_0xe4d25a[_0xafaaf0(0xe2)+'ck'],_0x17c896=>{_0x170538['adblo'+'ck']=_0x17c896,_0x526128();},[_0x593e4d[_0xafaaf0(0x644)](_0x4f62b5,_0xafaaf0(0x53e)+_0xafaaf0(0x15a)+'ct\x20on'+_0xafaaf0(0x681)+'ad\x20wh'+_0xafaaf0(0x548)+'ggled'+'.')])];else{if(!_0x56dc50||_0x4c1679[_0xafaaf0(0x535)+_0xafaaf0(0x18a)](_0x56dc50)||_0x426004[_0xafaaf0(0x100)](_0x4c1679[_0xafaaf0(0x686)+'h'],-0x280+0xd*-0x161+-0x4f*-0x43))return;_0x4c1679[_0xafaaf0(0x3b6)](_0x56dc50);}}function _0x3788e1(_0x4c0444,_0x1703e8,_0x34585a,_0x4e2420){var _0x116979=_0xa78d05,_0x4024f9=-0x10ea+-0x35e*0x1+-0xa24*-0x2;try{_0x116979(0x32a)===_0x426004[_0x116979(0x5f2)]?_0xa690ca['set'](_0x4d0a04,null):_0x4024f9=_0x1703e8&&_0x1703e8[_0x116979(0xf2)]?_0x1703e8[_0x116979(0xf2)]():-0x1*0x14+-0x6*-0x313+-0x2*0x92f;}catch(_0x13f3cf){}if(!_0x4024f9)return;_0x426004['mqEGz'](_0x2ecb4e,_0x4c0444,_0x4024f9),_0x34585a[_0x4e2420]=_0x4c0444[_0x116979(0x686)+'h'];if(_0x4e2420==='movem'+'ents'&&_0x4c0444['lengt'+'h']){var _0xd30af4=_0x5c8828[_0x116979(0x5c5)+'ve'];if(_0xd30af4)try{_0xd30af4[_0x116979(0x180)+'ed']=![];}catch(_0x45bdbf){}}}function _0x75705d(_0x368e37,_0x56be60,_0x28e16c){var _0x48d648=_0xa78d05,_0x40d518=_0x20e455['get'](_0x368e37);!_0x40d518&&(_0x40d518=new Map(),_0x20e455[_0x48d648(0x684)](_0x368e37,_0x40d518));if(!_0x40d518['has'](_0x56be60))try{var _0x279dcd=new _0x19e185(_0x368e37)[_0x48d648(0x33c)+'ield'](_0x56be60,_0x28e16c);_0x40d518[_0x48d648(0x684)](_0x56be60,_0x279dcd!==undefined?_0x279dcd['val']():null);}catch(_0x32df11){_0x48d648(0x59a)!==_0x48d648(0x6a2)?_0x40d518[_0x48d648(0x684)](_0x56be60,null):_0x17b07f(!_0x3ce5f9);}return _0x40d518['get'](_0x56be60);}function _0x5a73f5(_0x4bc7c2,_0x3f959e,_0xef9809,_0x63b9a6){var _0x417bf2=_0xa78d05,_0x53d28d={'Sflgq':_0x417bf2(0x4f6),'qPHqM':function(_0x535139,_0x1eeda6){var _0x12597b=_0x417bf2;return _0x426004[_0x12597b(0x2ed)](_0x535139,_0x1eeda6);},'DboWE':function(_0x409ff0,_0x4274d3){return _0x426004['wgnaq'](_0x409ff0,_0x4274d3);},'hCQJu':_0x417bf2(0x3e4)+'s','UyJoR':'0\x20hoo'+_0x417bf2(0x19f)+'med\x20('+'all\x20o'+_0x417bf2(0x314),'YQmnK':_0x417bf2(0x628),'QnPhJ':_0x417bf2(0x3b8)};if(_0x426004[_0x417bf2(0x185)](_0x426004[_0x417bf2(0x54c)],_0x426004[_0x417bf2(0x175)]))try{new _0x19e185(_0x4bc7c2)['write'+'Field'](_0x3f959e,_0xef9809,_0x63b9a6);}catch(_0x94f807){}else{var _0x5fe01c=_0x562c86[_0x138d9e]['query'+_0x417bf2(0x357)+'tor']('.sk-m'+_0x417bf2(0x2e0));_0x5fe01c&&(_0x5fe01c['textC'+_0x417bf2(0x105)+'t']['index'+'Of'](_0x53d28d['Sflgq'])===-0x1*-0x1b05+0x700*-0x1+-0x1405||_0x5fe01c[_0x417bf2(0x29c)+'onten'+'t'][_0x417bf2(0x267)+'Of']('SAFE')===-0xaf5+0x2*-0x7f+0xbf3)&&(_0x5fe01c['textC'+_0x417bf2(0x105)+'t']=_0x61669a['safeM'+_0x417bf2(0x2f5)]?_0x417bf2(0x21c)+_0x417bf2(0x2ab)+_0x417bf2(0x360)+'rlay\x20'+'only,'+_0x417bf2(0x3d0)+_0x417bf2(0x3dc)+_0x417bf2(0x50e)+_0x417bf2(0x234)+_0x417bf2(0x524)+')':_0xf6dc55[_0x417bf2(0x2bc)]?_0x53d28d[_0x417bf2(0x5a1)]('UWMK\x20'+_0x417bf2(0x460)+'\x20'+(_0x2ca5d7[_0x417bf2(0x275)+_0x417bf2(0x53c)]?_0x53d28d[_0x417bf2(0x2ee)](_0x2daf2f[_0x417bf2(0x275)+'Ok']+'/',_0x12a6e4[_0x417bf2(0x275)+_0x417bf2(0x53c)])+_0x53d28d['hCQJu']:_0x53d28d[_0x417bf2(0x370)])+('\x20|\x20ga'+_0x417bf2(0x252))+(_0x283174['gameL'+_0x417bf2(0x18f)]?_0x417bf2(0x3ca)+'d':'loadi'+'ng'),_0x417bf2(0x293)+_0x417bf2(0x2a0)+'\x20')+(_0x58e4f5[_0x417bf2(0x5bc)+'ers']?_0x53d28d[_0x417bf2(0x59c)]:'none')+(_0x417bf2(0x57b)+_0x417bf2(0x4cc)+'t\x20')+(_0x310432['movem'+'ents']?_0x417bf2(0x628):_0x53d28d[_0x417bf2(0x1bb)])+(_0x3181c7[_0x417bf2(0x1ef)+'rror']?_0x417bf2(0x383)+_0x417bf2(0x448)+_0x264537[_0x417bf2(0x1ef)+_0x417bf2(0x1f4)]:''):'UWMK\x20'+'MISSI'+_0x417bf2(0x1a6)+_0x417bf2(0x32b)+'ay\x20on'+_0x417bf2(0x665)+_0x417bf2(0x23e)+'all\x20t'+_0x417bf2(0x380)+_0x417bf2(0x388)+_0x417bf2(0x249));}}function _0x4bc935(_0x59b3ae,_0x2ca17d){var _0x4e6d89=_0xa78d05;try{var _0x3bb1d7=new _0x19e185(_0x59b3ae)[_0x4e6d89(0x33c)+'ield'](_0x2ca17d,_0x4e6d89(0x2ea));return _0x3bb1d7?_0x3bb1d7[_0x4e6d89(0xf2)]():-0x1e58+-0x19b5+0x380d;}catch(_0x66d110){return 0x193*-0x13+0x1fc3+-0x9e*0x3;}}function _0x42f636(_0xe22404,_0x297592,_0x4df3fe,_0x2edfe8){var _0x571971=_0xa78d05,_0x44f800=_0x426004['UTmTl'](_0x75705d,_0xe22404,_0x297592,_0x4df3fe);if(_0x44f800!=null)_0x426004['UDVOx'](_0x5a73f5,_0xe22404,_0x297592,_0x4df3fe,_0x426004[_0x571971(0x3ee)](_0x44f800,_0x2edfe8));}function _0x313ec9(_0x53eab7,_0x3f92c2,_0x53d895,_0x8a9f46,_0x4bd031,_0x3b7e4f,_0x4e5a1e){var _0x31835d=_0xa78d05;try{var _0x2bb4ac=(_0x31835d(0x4ca)+_0x31835d(0x2ad))[_0x31835d(0xf8)]('|'),_0x220b78=0x837+0xa9*0xe+-0x1175*0x1;while(!![]){switch(_0x2bb4ac[_0x220b78++]){case'0':_0x4118ee['enabl'+'ed']=_0x4e5a1e!==![];continue;case'1':_0x429068[_0x31835d(0x275)+_0x31835d(0x53c)]++;continue;case'2':var _0x4118ee=_0x2ad825[_0x31835d(0x397)+'refix']({'typeName':_0x3f92c2,'methodName':_0x53d895,'params':_0x8a9f46,'returnType':_0x4bd031},_0x3b7e4f);continue;case'3':return _0x4118ee;case'4':_0x5c8828[_0x53eab7]=_0x4118ee;continue;}break;}}catch(_0x2c7d26){return console['warn']('[saku'+_0x31835d(0x258)+_0x31835d(0x173)+_0x31835d(0x508)+'eg\x20fa'+_0x31835d(0x1da),_0x53eab7,_0x2c7d26&&_0x2c7d26[_0x31835d(0x155)+'ge']),null;}}function _0x387d47(_0x4a6d56,_0x50e2bf,_0x34334d,_0x581f72,_0x1efdd9,_0x19f70b,_0x41112d){var _0x200073=_0xa78d05;try{var _0x398d5c=_0x2ad825[_0x200073(0x397)+_0x200073(0x302)+'x']({'typeName':_0x50e2bf,'methodName':_0x34334d,'params':_0x581f72,'returnType':_0x1efdd9},_0x19f70b);return _0x398d5c[_0x200073(0x180)+'ed']=_0x426004['dcSXg'](_0x41112d,![]),_0x5c8828[_0x4a6d56]=_0x398d5c,_0x429068['hooks'+_0x200073(0x53c)]++,_0x398d5c;}catch(_0x5ef35b){return console[_0x200073(0x4f2)](_0x200073(0x687)+_0x200073(0x258)+_0x200073(0x173)+'ook\x20r'+_0x200073(0x547)+_0x200073(0x1da),_0x4a6d56,_0x5ef35b&&_0x5ef35b[_0x200073(0x155)+'ge']),null;}}var _0x352aaa=()=>![];try{if(window['Unity'+_0xa78d05(0x5d2)+_0xa78d05(0x669)]&&!_0x4800f2[_0xa78d05(0x1a5)+_0xa78d05(0x2f5)]){if(_0x426004[_0xa78d05(0x205)]!==_0x426004[_0xa78d05(0x5a8)]){var _0x3c9464=(_0xa78d05(0x261)+'|0|4|'+_0xa78d05(0x240))['split']('|'),_0x510dd3=-0x22e4+0x1*0x6c7+0x1c1d;while(!![]){switch(_0x3c9464[_0x510dd3++]){case'0':if(_0x4800f2[_0xa78d05(0x120)+_0xa78d05(0x273)])_0x313ec9(_0xa78d05(0x554)+'e',_0x426004['UtWRR'],'Local'+_0xa78d05(0x6c7),[_0xa78d05(0x5e5),_0x426004['UXgaL'],_0xa78d05(0x5e5),_0x426004['UXgaL'],_0x426004[_0xa78d05(0x402)]],undefined,_0x352aaa,!!_0x4800f2[_0xa78d05(0x416)]);continue;case'1':_0x19e185=window[_0xa78d05(0xde)+'WebMo'+_0xa78d05(0x669)][_0xa78d05(0x3e7)+_0xa78d05(0xd7)+'er'];continue;case'2':if(_0x4800f2['hookC'+_0xa78d05(0x26e)+'e'])_0x426004['Xften'](_0x387d47,_0x426004['rZgxG'],_0xa78d05(0xfc)+_0xa78d05(0x3dd)+_0xa78d05(0x3b4)+_0xa78d05(0x1ee)+_0xa78d05(0x107)+'Movem'+_0xa78d05(0x1a0),_0x426004[_0xa78d05(0x1c6)],[_0xa78d05(0x5e5)],_0x426004['UXgaL'],(_0x1e9faa,_0x584ffd)=>{var _0x1aa79f=_0xa78d05;_0x3788e1(_0x515785,_0x584ffd,_0x429068,'movem'+_0x1aa79f(0x136));},!![]);continue;case'3':if(_0x4800f2['hookC'+'aptur'+'e'])_0x387d47('capSh'+_0xa78d05(0x2a0),_0x426004[_0xa78d05(0x596)],_0xa78d05(0x40d)+_0xa78d05(0x518)+'ning',[_0x426004[_0xa78d05(0x402)],_0x426004[_0xa78d05(0x402)]],undefined,(_0x30ab03,_0x4c7c50)=>{var _0xfc2da4=_0xa78d05;_0x426004['UDVOx'](_0x3788e1,_0x11a35b,_0x4c7c50,_0x429068,_0x426004[_0xfc2da4(0x6a6)]);},!![]);continue;case'4':if(_0x4800f2[_0xa78d05(0x1a3)+'oReco'+'il'])_0x426004['whrdu'](_0x313ec9,_0x426004['pIgfV'],_0x426004['xzrnh'],_0xa78d05(0x28f),[_0xa78d05(0x5e5)],undefined,_0x352aaa,!!_0x4800f2['noRec'+_0xa78d05(0x1a9)]);continue;case'5':if(_0x4800f2[_0xa78d05(0x120)+'od'])_0x426004[_0xa78d05(0x5c2)](_0x313ec9,'god','OHeal'+'th',_0x426004['cmndY'],[_0xa78d05(0x5e5),_0xa78d05(0x5e5)],undefined,_0x352aaa,!!_0x4800f2[_0xa78d05(0x416)]);continue;case'6':_0x2ad825=window[_0xa78d05(0xde)+'WebMo'+'dkit']['Runti'+'me'][_0xa78d05(0x67c)+_0xa78d05(0x693)+'in']({'name':_0x426004[_0xa78d05(0x36a)],'version':_0x426004[_0xa78d05(0x3ec)],'referencedAssemblies':['Assem'+_0xa78d05(0x6b2)+'Sharp'+_0xa78d05(0x1d8)]});continue;}break;}}else{var _0x47f9cb=_0x35884f[_0xa78d05(0x43b)+_0xa78d05(0x40e)+_0xa78d05(0x22e)](_0x21649e);if(_0x47f9cb&&_0xdef943===_0x426004[_0xa78d05(0x138)]){var _0x33130f=_0x47f9cb['child'+_0xa78d05(0x2cb)];for(var _0x5af9d0=0x169*-0x1b+-0x233a+0x494d;_0x5af9d0<_0x33130f[_0xa78d05(0x686)+'h'];_0x5af9d0++){if(_0x33130f[_0x5af9d0]['id']&&_0x33130f[_0x5af9d0]['id']['index'+'Of']('kour-'+'io_')===0x2221+-0xbf2*0x2+-0x1*0xa3d)_0x33130f[_0x5af9d0]['style']['displ'+'ay']='none';}}else{if(_0x47f9cb)_0x47f9cb[_0xa78d05(0x470)][_0xa78d05(0x675)+'ay']=_0x426004[_0xa78d05(0x4b1)];}}}}catch(_0x4a2e83){console[_0xa78d05(0x4f2)](_0xa78d05(0x687)+_0xa78d05(0x258)+'ur]\x20U'+'WMK\x20i'+_0xa78d05(0x566)+_0xa78d05(0x564)+':',_0x4a2e83&&_0x4a2e83['messa'+'ge']);}function _0x45ef2a(_0x153fe1,_0x19cdc8){var _0x7ae2b2=_0xa78d05,_0x3a1661=_0x5c8828[_0x153fe1];if(_0x3a1661){if('EnNls'==='UFMoU')_0x27b0e4[_0x7ae2b2(0x492)+'ropag'+_0x7ae2b2(0x140)](),_0x426004[_0x7ae2b2(0x1c1)](_0x5f61eb);else try{_0x3a1661[_0x7ae2b2(0x180)+'ed']=!!_0x19cdc8;}catch(_0x2ba161){}}}_0x426004[_0xa78d05(0x1bc)](setInterval,()=>{var _0x522e7c=_0xa78d05;if(!_0x19e185||!window[_0x522e7c(0x29a)+_0x522e7c(0x502)+_0x522e7c(0x3f5)])return;var _0x33d262=(_0x426004[_0x522e7c(0x56a)](Number,_0x4800f2[_0x522e7c(0x106)+_0x522e7c(0x1b5)])||-0x1fd0+0x1*-0xb53+-0x3f5*-0xb)/(0x1*0xa67+0xc01+-0x1604),_0x937be6=(Number(_0x4800f2['jumpP'+'ct'])||-0x808*-0x3+-0xfc7+-0x7ed*0x1)/(0x97f+-0x1c*-0x133+-0x2aaf),_0x175bc3=(Number(_0x4800f2['gravi'+_0x522e7c(0x556)])||-0x9*0x206+-0x43f+0x1*0x16d9)/(-0xf1*0xb+0xed6+-0x417),_0xe561f5=Math['max'](0x2*0xa15+-0xbd2+-0x7*0x131,_0x426004[_0x522e7c(0xee)](Number,_0x4800f2[_0x522e7c(0x678)+'eValu'+'e'])||0x2386+0xd3+-0x1*0x23c3),_0x120208=_0x33d262!==-0x1845+-0xf1*0x25+0x3b1b||_0x937be6!==0xb*-0x2f5+0x1c*-0x40+-0x9e2*-0x4||_0x426004[_0x522e7c(0x3de)](_0x175bc3,0x211*0x12+0x64d*-0x4+0x63*-0x1f)||_0x4800f2[_0x522e7c(0x1ad)],_0x153461=_0x4800f2[_0x522e7c(0x3e8)+_0x522e7c(0x52e)]||_0x4800f2[_0x522e7c(0x678)+_0x522e7c(0x526)]||_0x4800f2['infAm'+'moExp']||_0x4800f2['rapid'+'Exp'];if(!_0x120208&&!_0x153461)return;try{if(_0x426004[_0x522e7c(0x185)](_0x522e7c(0x3cf),_0x426004[_0x522e7c(0x315)]))for(var _0x296ba0=0x1*-0xb31+0x1e*-0x2c+0x1059;_0x296ba0<_0x515785[_0x522e7c(0x686)+'h'];_0x296ba0++){var _0x117ca7=_0x515785[_0x296ba0];if(!_0x117ca7)continue;if(_0x33d262!==-0xf7f*0x1+-0x6d*0x1e+0x1c46){var _0x11d91f=('1|3|4'+'|5|2|'+'0')['split']('|'),_0x58f0a0=-0x1*-0x1c93+-0x10f3+-0xba0;while(!![]){switch(_0x11d91f[_0x58f0a0++]){case'0':_0x42f636(_0x117ca7,0x187e+-0x727*0x1+-0x1137,_0x522e7c(0x2eb),_0x33d262);continue;case'1':_0x426004[_0x522e7c(0x137)](_0x42f636,_0x117ca7,-0x2427+0x19*0x7f+-0x2fd*-0x8,_0x426004['jeWOL'],_0x33d262);continue;case'2':_0x42f636(_0x117ca7,-0x26e8+-0xf44+0x3648,_0x522e7c(0x2eb),_0x33d262);continue;case'3':_0x42f636(_0x117ca7,-0x3*0x699+-0x555*0x5+0x2ea0,'f32',_0x33d262);continue;case'4':_0x42f636(_0x117ca7,0x25b6*0x1+-0x12cd*0x1+0x1*-0x12b9,_0x426004[_0x522e7c(0x583)],_0x33d262);continue;case'5':_0x42f636(_0x117ca7,-0x1*-0x416+0x158d+-0x1*0x196f,_0x522e7c(0x2eb),_0x33d262);continue;}break;}}if(_0x426004['ohtWq'](_0x937be6,0x7ea+-0x583+-0x266))_0x426004[_0x522e7c(0x10d)](_0x42f636,_0x117ca7,0x57*0x2a+0x1fff+-0x2df5,'f32',_0x937be6);_0x426004['ohtWq'](_0x175bc3,0x2*-0xa61+-0xa7b*0x1+0x2b*0xba)&&(_0x42f636(_0x117ca7,-0x3*0x1c1+0x1*0x836+-0x1*0x2ab,'f32',_0x175bc3),_0x42f636(_0x117ca7,0x1912*0x1+-0x1c55*-0x1+-0x1*0x351b,'f32',_0x175bc3));if(_0x4800f2[_0x522e7c(0x1ad)])_0x5a73f5(_0x117ca7,-0x235*0x11+-0x1db1+0x43d2*0x1,_0x426004['jeWOL'],-(-0x1*-0x473+0x1e18+-0x7a9*0x4));}else{var _0x3c9730=new _0x222628(_0x440f38)['readF'+'ield'](_0x233368,_0x100771);_0x3680db['set'](_0x51f260,_0x426004['dcSXg'](_0x3c9730,_0x3c88a3)?_0x3c9730[_0x522e7c(0xf2)]():null);}}catch(_0x5a7eb2){}try{for(var _0x404dc0=-0x369+-0x5*-0x55d+-0x38*0x6b;_0x404dc0<_0x11a35b['lengt'+'h'];_0x404dc0++){var _0x354fbc=_0x426004[_0x522e7c(0x6cf)](_0x4bc935,_0x11a35b[_0x404dc0],-0xf*-0x18b+0x181c+-0x2f09*0x1);if(!_0x354fbc)continue;_0x4800f2[_0x522e7c(0x678)+'eExp']&&(_0x426004['NVYEH'](_0x5a73f5,_0x354fbc,0xbb7+-0x47*0x67+0x1126,'i32',_0xe561f5),_0x5a73f5(_0x354fbc,0x1d*-0x53+0xb21+0x1*-0x166,_0x522e7c(0x5e5),_0xe561f5));_0x4800f2[_0x522e7c(0x3e8)+'ead']&&(_0x426004['bJvGb'](_0x5a73f5,_0x354fbc,0x1*0x153d+0x1*0x23f9+-0x5*0xb56,_0x522e7c(0x2eb),0x18f+0x1f28+0x5*-0x68b),_0x5a73f5(_0x354fbc,0x66d+0x251c+0x2b21*-0x1,_0x426004[_0x522e7c(0x583)],-0x24ee+0x6b2*0x3+0x10d9));if(_0x4800f2['infAm'+_0x522e7c(0x1c8)])_0x5a73f5(_0x354fbc,0x644*0x1+-0xaa9*-0x2+-0x1b3a,_0x522e7c(0x5e5),0x5*0x2ad+-0x29*-0xce+-0x2a78);_0x4800f2[_0x522e7c(0x41e)+'Exp']&&(_0x42f636(_0x354fbc,0x1f4d*0x1+-0x1*0xbdd+0x2*-0x972,_0x426004[_0x522e7c(0x583)],0x1892+0x706+-0x1f98*0x1+0.1),_0x426004['saLbD'](_0x5a73f5,_0x354fbc,-0x2c5+0x1867+0xaa1*-0x2,_0x426004[_0x522e7c(0x583)],-0xd55+-0x98e+0x16e3+0.1));}}catch(_0x455a00){}},-0x8a9+0x15c7*-0x1+-0x3*-0xa68),setInterval(()=>{var _0x2f9c25=_0xa78d05,_0x43883a={'amyMX':_0x2f9c25(0x2eb)};if(_0x426004[_0x2f9c25(0x13e)](_0x2f9c25(0x515),'JDZJH'))_0x556f18(_0x340dac,-0xe*-0x29b+-0x4*0x2b6+-0x197a,_0x43883a['amyMX'],_0x1fc89b),_0x596b61(_0x208372,0x2*0x605+-0xa83+-0x15b,_0x43883a['amyMX'],_0x25722),_0x2ae6db(_0x56ceb2,-0xb*-0xc7+0x8cb*-0x2+-0x1*-0x939,_0x43883a['amyMX'],_0x12fa85),_0x2a4cd1(_0x3d5c94,0x19f1+0x8ee+-0x22ab,_0x43883a[_0x2f9c25(0x227)],_0x2f71c9),_0x2d13dd(_0x1bc7f0,0x25de+0x1d42+-0x4304,_0x2f9c25(0x2eb),_0x578c67),_0x420f44(_0x58980d,-0x567+0x3*-0x697+0x194c,_0x2f9c25(0x2eb),_0x457049);else{_0x429068[_0x2f9c25(0x37a)+_0x2f9c25(0x18f)]=!!window['unity'+_0x2f9c25(0x502)+'nce'];try{var _0x1056c0=-0x146b*-0x1+0x2a5*-0x3+-0x11*0xbc;for(var _0x7d600 in _0x5c8828){if(_0x5c8828[_0x7d600]&&_0x5c8828[_0x7d600]['appli'+'ed'])_0x1056c0++;}_0x429068['hooks'+'Ok']=_0x1056c0;}catch(_0x3547b0){}}},0x16f4+0x1720+-0x2a2c);var _0x290531=new Set(),_0xa9b654={0x1:[],0x3:[]},_0x3e8757=![];function _0x4d0670(_0x2c7142){var _0x3639b6=_0xa78d05,_0x5792d0={'SXtHe':function(_0x2f782f,_0x2b1653){return _0x2f782f===_0x2b1653;},'bGdtS':function(_0x32b140,_0x4e1e15){var _0x1cbdfd=_0x3ca7;return _0x426004[_0x1cbdfd(0x4d2)](_0x32b140,_0x4e1e15);},'RjpZY':function(_0x2d5d1d,_0x225701){return _0x2d5d1d===_0x225701;}};if(_0x426004[_0x3639b6(0x185)](_0x426004['LlNfw'],_0x426004[_0x3639b6(0x4bf)])){var _0x4c23d2=_0x3f1249['devic'+_0x3639b6(0x67f)+_0x3639b6(0x337)+'o']||-0x129+0x1*-0xc2d+0xd57,_0x3f5d38=_0x1f71e4['inner'+_0x3639b6(0x1ce)],_0x335661=_0x6fce6c['inner'+'Heigh'+'t'];if(_0x5792d0[_0x3639b6(0x242)](_0x3f5d38,_0x3bb7fc['w'])&&_0x5792d0['bGdtS'](_0x335661,_0x20fc16['h'])&&_0x5792d0['RjpZY'](_0x4c23d2,_0x5220e3[_0x3639b6(0x4f1)]))return;_0xeb4d['w']=_0x3f5d38,_0x1f792a['h']=_0x335661,_0x2d337b['dpr']=_0x4c23d2,_0x36d006[_0x3639b6(0x4e9)]=_0x2dd979[_0x3639b6(0x476)](_0x3f5d38*_0x4c23d2),_0x44578f[_0x3639b6(0x695)+'t']=_0xba287d['round'](_0x335661*_0x4c23d2),_0x3acb4d[_0x3639b6(0x3d2)+_0x3639b6(0x505)+'rm'](_0x4c23d2,-0x731+0x401+0x330,-0x24fa+0x1188+0x1372,_0x4c23d2,0xd*-0x9f+-0xe5*-0x17+-0xc80,0x13f4+0x3*-0xa16+0xa4e);}else _0x290531['add'](_0x2c7142['code']);}function _0x5be10e(_0x59ad9c){var _0x4ebd12=_0xa78d05;_0x290531[_0x4ebd12(0x192)+'e'](_0x59ad9c[_0x4ebd12(0x26c)]);}function _0x3dbd97(_0x451279){var _0x5369a8=_0xa78d05;if(_0x426004['hVhcB'](_0x5369a8(0x36f),_0x5369a8(0x65e)))_0x4b101b[_0x5369a8(0x551)+'aptur'+'e']=_0x4cb145,_0x1f9cb8();else{if(_0x451279[_0x5369a8(0xe1)+_0x5369a8(0x63f)])return;_0x290531[_0x5369a8(0x22c)](_0x426004[_0x5369a8(0x4bd)](_0x426004['ZwpKW'],_0x451279['butto'+'n']+(0x1ceb+-0x215*0x2+-0x18c0)));var _0x552a35=_0xa9b654[_0x426004[_0x5369a8(0x645)](_0x451279[_0x5369a8(0x685)+'n'],0x1e4a*0x1+-0x3*-0x7cf+-0x35b6)];if(_0x552a35){_0x552a35[_0x5369a8(0x3b6)](performance[_0x5369a8(0x4da)]());if(_0x426004[_0x5369a8(0x2ce)](_0x552a35[_0x5369a8(0x686)+'h'],-0x14a9+-0x2074+0x419*0xd))_0x552a35[_0x5369a8(0x467)]();}}}function _0x40dfd9(_0x1a8e4e){var _0x8be8d5=_0xa78d05;if(!_0x1a8e4e['__sak'+_0x8be8d5(0x63f)])_0x290531['delet'+'e'](_0x426004[_0x8be8d5(0x5fb)](_0x426004[_0x8be8d5(0x573)],_0x1a8e4e[_0x8be8d5(0x685)+'n']+(-0x84b*-0x1+-0x1528+0x1b*0x7a)));}function _0x1e82c1(){var _0x13ca93=_0xa78d05;_0x290531[_0x13ca93(0xfd)]();}function _0x86f94b(){var _0x3d3a9d=_0xa78d05;if(_0x3e8757)return;_0x3e8757=!![],window[_0x3d3a9d(0x2a1)+'entLi'+_0x3d3a9d(0x206)+'r'](_0x426004[_0x3d3a9d(0x112)],_0x4d0670,!![]),window[_0x3d3a9d(0x2a1)+_0x3d3a9d(0x6a5)+_0x3d3a9d(0x206)+'r'](_0x426004[_0x3d3a9d(0x3bf)],_0x5be10e,!![]),window[_0x3d3a9d(0x2a1)+'entLi'+'stene'+'r'](_0x426004['TYQQx'],_0x3dbd97,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x3d3a9d(0x4d0)+'up',_0x40dfd9,!![]),window['addEv'+_0x3d3a9d(0x6a5)+'stene'+'r'](_0x426004[_0x3d3a9d(0x300)],_0x1e82c1);}function _0x372048(_0x17e346){var _0x2666fb=_0xa78d05,_0x17f572=_0xa9b654[_0x17e346]||[],_0x15374c=performance[_0x2666fb(0x4da)]();while(_0x17f572['lengt'+'h']&&_0x15374c-_0x17f572[-0x3b*-0x79+-0x4*0x8b5+0x6f1]>0x25fa+-0x216b+-0xa7)_0x17f572[_0x2666fb(0x467)]();return _0x17f572[_0x2666fb(0x686)+'h'];}function _0x4f90ef(_0x33a5ab){var _0x4af16b=_0xa78d05;if('yDAyS'!==_0x4af16b(0x229)){if(document['body']&&(document[_0x4af16b(0x5ac)+_0x4af16b(0x497)]===_0x4af16b(0x253)+_0x4af16b(0x374)+'e'||document['ready'+_0x4af16b(0x497)]===_0x426004['LCTig']))_0x33a5ab();else document['addEv'+_0x4af16b(0x6a5)+'stene'+'r'](_0x426004[_0x4af16b(0x4a7)],_0x33a5ab,{'once':!![]});}else _0x58f77c['appen'+'dChil'+'d'](_0x493451);}_0x4f90ef(()=>{var _0x3e700b=_0xa78d05,_0x1002cb={'jOYNK':function(_0x2edc93,_0x7f04e4){return _0x2edc93>_0x7f04e4;},'JDxIE':function(_0x1249c0){return _0x1249c0();},'flKbE':'beFRd','NvcJs':_0x426004['DCaVm'],'pAygw':'kour-'+_0x3e700b(0x2af)+_0x3e700b(0xcc)+_0x3e700b(0x65b)+'t','pFZkV':_0x426004[_0x3e700b(0x568)],'GYdVZ':_0x3e700b(0x108)+'creen'+_0x3e700b(0x113)+'s','FsjAI':_0x3e700b(0x3b8),'CDiEj':function(_0x8f25fd,_0x5b390e){return _0x8f25fd===_0x5b390e;},'yzTTE':_0x426004['hedGo'],'guQtv':function(_0x2bf3d0,_0x36ed29){return _0x426004['dcSXg'](_0x2bf3d0,_0x36ed29);},'soLox':_0x426004['UhyhS'],'DyyJa':function(_0x27462b,_0x1ceffa){var _0x531adc=_0x3e700b;return _0x426004[_0x531adc(0x3ee)](_0x27462b,_0x1ceffa);},'eBdfK':'rgba('+_0x3e700b(0x4ae)+'07,15'+'7,0.8'+'5)','NaMIM':_0x426004[_0x3e700b(0xe8)],'xOWLh':'cente'+'r','KuBav':function(_0x1d59ce,_0x34bc6f){return _0x1d59ce+_0x34bc6f;},'DtQid':function(_0x3cb5c2,_0x1dde1c){return _0x3cb5c2/_0x1dde1c;},'xPfen':function(_0x59fa6d,_0x48be30){return _0x59fa6d+_0x48be30;},'IhCWN':function(_0x3f2198,_0x1a155f){return _0x3f2198+_0x1a155f;},'xKjVy':function(_0x143532,_0x4b21bf){return _0x143532*_0x4b21bf;},'ZAAgL':_0x3e700b(0x208)+_0x3e700b(0x607)+_0x3e700b(0x47f)+_0x3e700b(0x2f3)+'tem-u'+_0x3e700b(0x2ba)+_0x3e700b(0x4d1)+'if','fOFhG':_0x426004['aEwaK'],'UiMef':function(_0x4f7356,_0x51fcc2){var _0x4e4fbf=_0x3e700b;return _0x426004[_0x4e4fbf(0x4fa)](_0x4f7356,_0x51fcc2);},'DMTgQ':function(_0xc3ff4f,_0x1eee22){var _0x8b0dfe=_0x3e700b;return _0x426004[_0x8b0dfe(0x56a)](_0xc3ff4f,_0x1eee22);},'PjVLv':function(_0x3be496,_0x28d7b0){return _0x426004['arIoL'](_0x3be496,_0x28d7b0);},'viiVh':function(_0x198470,_0x2c85c7){return _0x198470-_0x2c85c7;},'VdVPq':_0x426004['nmeUx'],'HFsOh':function(_0x1511b7,_0x361823,_0x445518,_0x49c292,_0x5e9fff,_0x431d0e,_0x1a7484){return _0x1511b7(_0x361823,_0x445518,_0x49c292,_0x5e9fff,_0x431d0e,_0x1a7484);},'oLtlw':function(_0x2535e6,_0x3dc5b8,_0x16d347,_0x31e1d2,_0x4b84ab,_0x232a31,_0x1860ed){var _0x2dfcd8=_0x3e700b;return _0x426004[_0x2dfcd8(0x6a1)](_0x2535e6,_0x3dc5b8,_0x16d347,_0x31e1d2,_0x4b84ab,_0x232a31,_0x1860ed);},'gLzjF':function(_0x36e6c9,_0x29f802){return _0x36e6c9+_0x29f802;},'EAsqw':function(_0x2fc807,_0xfa988a){return _0x2fc807+_0xfa988a;},'yrjZZ':function(_0x52fbf6,_0x178e3){return _0x52fbf6+_0x178e3;},'tIUUo':function(_0x190f71,_0x583794,_0x4fd926,_0x5741ea,_0x224597,_0x2bb7e2,_0x1954c4,_0x152f60){var _0x3a6a8e=_0x3e700b;return _0x426004[_0x3a6a8e(0x52b)](_0x190f71,_0x583794,_0x4fd926,_0x5741ea,_0x224597,_0x2bb7e2,_0x1954c4,_0x152f60);},'BYwFt':_0x3e700b(0x4d0)+'1','BZNeJ':_0x3e700b(0x61e),'AVnOR':function(_0x238485,_0x13b484,_0x456a80,_0x484fef,_0x744c6d,_0x5e9ea0,_0x1a6832,_0x4353a8){var _0x34ed77=_0x3e700b;return _0x426004[_0x34ed77(0x5c2)](_0x238485,_0x13b484,_0x456a80,_0x484fef,_0x744c6d,_0x5e9ea0,_0x1a6832,_0x4353a8);},'fwnYw':function(_0x6c6058,_0xa73655){return _0x6c6058+_0xa73655;},'hEfrL':function(_0x1dc7da,_0x56d264){return _0x1dc7da(_0x56d264);},'mEbSV':function(_0x5b3949,_0x12ec7f){return _0x5b3949+_0x12ec7f;},'AtRZv':function(_0xd9f630,_0x330d88){return _0xd9f630+_0x330d88;},'SpfEa':function(_0x5ac4d7,_0x15b26f){var _0x4d7b80=_0x3e700b;return _0x426004[_0x4d7b80(0x645)](_0x5ac4d7,_0x15b26f);},'VAGJm':function(_0xa0fda0,_0x5feb3c){return _0xa0fda0||_0x5feb3c;},'LHgDL':'set_t'+_0x3e700b(0x211)+'Frame'+'Rate','lldnz':'aria-'+_0x3e700b(0x431)+'ed','DcXOA':_0x426004['SUzZi'],'PMlVe':function(_0x6d30a0,_0x141521){return _0x426004['VxTXx'](_0x6d30a0,_0x141521);},'RjQim':function(_0x4b9b82,_0x49927f){return _0x4b9b82!==_0x49927f;},'ZwXAF':function(_0x14bd97,_0x6a653c){return _0x14bd97(_0x6a653c);},'tSwBw':_0x426004[_0x3e700b(0x23d)],'llXXZ':_0x3e700b(0x6a7),'DSyPP':function(_0x535290,_0x54af08){return _0x535290-_0x54af08;},'UDSey':'sk-va'+'l','oHgyE':'div','wEVfV':'input','bXond':_0x426004['LZZXi'],'ITPTX':_0x3e700b(0x233),'UrPvI':_0x426004[_0x3e700b(0x3eb)],'YmNSr':function(_0xab45c8,_0x475a89){return _0xab45c8===_0x475a89;},'WKnPx':_0x426004['YWpPg'],'PfnVx':function(_0x5a1109,_0x7d3c48){var _0x3bb3bd=_0x3e700b;return _0x426004[_0x3bb3bd(0x4c5)](_0x5a1109,_0x7d3c48);},'ZcQbZ':function(_0x42f454,_0x24b3d3){return _0x426004['JCBbD'](_0x42f454,_0x24b3d3);},'XptvU':function(_0x420dcd,_0x5c4184){return _0x420dcd===_0x5c4184;},'GGKry':function(_0x989c2f,_0x525fe3){return _0x426004['DVjga'](_0x989c2f,_0x525fe3);},'ndkGE':function(_0x2649eb,_0x4b536e,_0x14d5f5,_0x1f4983,_0x27ad06,_0x4ede70,_0xc4c76a){return _0x2649eb(_0x4b536e,_0x14d5f5,_0x1f4983,_0x27ad06,_0x4ede70,_0xc4c76a);},'riPIA':_0x3e700b(0x1f1),'rdoJE':function(_0x4b4550,_0x3efe24){return _0x4b4550+_0x3efe24;},'QmXKL':_0x3e700b(0x438)+'rd','yTfcw':_0x3e700b(0x438)+_0x3e700b(0x193)+'ad','kfhIM':function(_0x4805be,_0x653e71,_0x2472c1){return _0x4805be(_0x653e71,_0x2472c1);},'cTOOb':'jiOxw','dvnxe':'sk-mb'+_0x3e700b(0x223),'CBJoe':function(_0x539505,_0x15e8c8){var _0xa4dd1=_0x3e700b;return _0x426004[_0xa4dd1(0x13e)](_0x539505,_0x15e8c8);},'KaJOw':_0x426004['jwdXQ'],'wFNrD':_0x426004['GMzDC'],'anaUI':_0x426004[_0x3e700b(0x3ce)],'nTHTN':_0x3e700b(0x554)+'e','WIqnz':_0x3e700b(0x352)+'oil','HPJPA':'Legio'+_0x3e700b(0x3dd)+_0x3e700b(0x3b4)+'.Over'+_0x3e700b(0x107)+_0x3e700b(0x333)+_0x3e700b(0x55d)+'on','khMJA':_0x3e700b(0x59f),'tDnSs':_0x3e700b(0x321),'elmVs':_0x3e700b(0x373),'zEkpE':function(_0x48822c){return _0x48822c();},'citOX':function(_0x4bae86){return _0x426004['KsmIN'](_0x4bae86);},'TtaOo':'dRVCc','tiTNI':_0x426004[_0x3e700b(0x27b)],'gUGZZ':_0x3e700b(0x4b4)+'h','uUEzy':function(_0x34bd55,_0x3a8010){return _0x34bd55!==_0x3a8010;},'YPTYq':_0x426004['WdFsF'],'UkTzZ':function(_0x51a783,_0x17dbaf){return _0x51a783(_0x17dbaf);},'KbvQq':_0x3e700b(0x69e)+_0x3e700b(0x13b)+'3','bScOL':_0x3e700b(0x506)+'a\x20Kou'+'r\x20—\x20','xSpGj':function(_0x28df04,_0x3285a8){return _0x28df04<_0x3285a8;},'XuCLV':_0x426004[_0x3e700b(0x450)],'Jbwrr':_0x426004[_0x3e700b(0x1e9)],'xfZAG':function(_0x5cfcae,_0x38c2a3){return _0x5cfcae+_0x38c2a3;},'woWAT':'UWMK\x20'+_0x3e700b(0x460)+'\x20','KZXUV':function(_0x26a7c9,_0x5e9b52){return _0x426004['zWfJE'](_0x26a7c9,_0x5e9b52);},'jzAyp':_0x3e700b(0x3e4)+'s','imdfR':'\x20|\x20mo'+'vemen'+'t\x20','jWfUX':_0x3e700b(0x383)+'R:\x20','RSnlR':_0x426004[_0x3e700b(0x1d7)],'uhdCb':_0x426004['rTnnm'],'UNxVx':_0x426004[_0x3e700b(0x4e6)],'PLtsw':_0x426004[_0x3e700b(0x309)],'jTfmD':_0x3e700b(0x2d7)+'p','DrZgq':_0x426004['keJbH'],'AXKEp':_0x3e700b(0x40a),'huBOr':_0x426004['jiBxi'],'EfskC':_0x3e700b(0x18c),'dsaBM':_0x3e700b(0x378)+'ls','TcKty':_0x3e700b(0x341)+_0x3e700b(0x39f)+'3|0|6','EcwVM':function(_0x771af8,_0x8c4275){return _0x426004['zWfJE'](_0x771af8,_0x8c4275);},'OESEA':'comba'+'t'};_0x4800f2['adblo'+'ck']&&(_0x426004[_0x3e700b(0x621)]===_0x426004['DFBNv']?setInterval(()=>{var _0x4e59c6=_0x3e700b,_0x58aad6={'csekN':function(_0x2d4424){var _0x4c543d=_0x3ca7;return _0x1002cb[_0x4c543d(0x1e0)](_0x2d4424);},'KTWTC':function(_0x51837c,_0x2554ea){return _0x51837c!==_0x2554ea;}};if(_0x1002cb[_0x4e59c6(0xbf)]===_0x4e59c6(0x4c2))try{new _0x272fa4(_0x5f3b12)['write'+_0x4e59c6(0xc7)](_0xf7cb82,_0x4388fe,_0x3d2a3d);}catch(_0x3babe1){}else try{for(var _0xe46608 of[_0x1002cb[_0x4e59c6(0x4f8)],_0x1002cb['pAygw'],'kour-'+_0x4e59c6(0x392)+'0x600'+_0x4e59c6(0x288)+'nt','fulls'+_0x4e59c6(0x39a)+_0x4e59c6(0x113)+'s']){if(_0x4e59c6(0x653)!==_0x1002cb[_0x4e59c6(0x5b9)])_0x24ea0d[_0x4e59c6(0x492)+_0x4e59c6(0x469)+_0x4e59c6(0x140)](),_0x58aad6['csekN'](_0x5cefa3);else{var _0x548e8c=document[_0x4e59c6(0x43b)+'ement'+_0x4e59c6(0x22e)](_0xe46608);if(_0x548e8c&&_0xe46608===_0x1002cb[_0x4e59c6(0x4af)]){if('ijgVy'===_0x4e59c6(0x283)){var _0x4bee92=_0x548e8c['child'+_0x4e59c6(0x2cb)];for(var _0x470d34=0x166b+-0x1*0x12bf+0xbc*-0x5;_0x470d34<_0x4bee92[_0x4e59c6(0x686)+'h'];_0x470d34++){if(_0x4e59c6(0x228)!=='jTojZ'){if(_0x4bee92[_0x470d34]['id']&&_0x4bee92[_0x470d34]['id'][_0x4e59c6(0x267)+'Of']('kour-'+'io_')===0x9*-0xb3+-0x1543+0x1b8e)_0x4bee92[_0x470d34][_0x4e59c6(0x470)]['displ'+'ay']='none';}else{var _0x529993=('0|2|1'+_0x4e59c6(0x45a))['split']('|'),_0x4d3767=-0x18*0xfb+0x1*-0xe92+0x261a;while(!![]){switch(_0x529993[_0x4d3767++]){case'0':var _0x3f4d89=_0x145c5d[_0x4e59c6(0x397)+'ostfi'+'x']({'typeName':_0x581c9f,'methodName':_0x455156,'params':_0x5110fc,'returnType':_0xef6cd4},_0x28c4bc);continue;case'1':_0x5b9c89[_0x20cdc1]=_0x3f4d89;continue;case'2':_0x3f4d89['enabl'+'ed']=_0x58aad6['KTWTC'](_0x2720ff,![]);continue;case'3':return _0x3f4d89;case'4':_0xe1b759['hooks'+_0x4e59c6(0x53c)]++;continue;}break;}}}}else{_0x33a019[_0x4e59c6(0x3b6)](_0x1ef91c['now']());if(_0x1002cb[_0x4e59c6(0x6b3)](_0x592511['lengt'+'h'],0x36*0x57+-0xdc3+-0x46f))_0x425efe[_0x4e59c6(0x467)]();}}else{if(_0x548e8c)_0x548e8c[_0x4e59c6(0x470)][_0x4e59c6(0x675)+'ay']=_0x1002cb[_0x4e59c6(0x186)];}}}}catch(_0x29b3f3){}},-0x1a20+0x1f59+0x297*0x1):_0x121edc[_0x3e700b(0x192)+'e'](_0x55acb5['code']));var _0x403d0d=document['creat'+_0x3e700b(0x209)+_0x3e700b(0x1a0)](_0x3e700b(0x335)+'s');_0x403d0d[_0x3e700b(0x470)][_0x3e700b(0x2f8)+'xt']='posit'+_0x3e700b(0x641)+'ixed;'+_0x3e700b(0x672)+_0x3e700b(0x5e4)+_0x3e700b(0x5c8)+_0x3e700b(0x676)+_0x3e700b(0x695)+_0x3e700b(0x351)+_0x3e700b(0x610)+_0x3e700b(0x267)+':2147'+_0x3e700b(0x650)+_0x3e700b(0x4dc)+'nter-'+_0x3e700b(0x501)+'s:non'+'e';var _0x427cbd=_0x403d0d[_0x3e700b(0x4e1)+'ntext']('2d');function _0x5e9b00(){var _0xc8be04=_0x3e700b,_0x3a9e8e={'LyXln':_0xc8be04(0x35c)+_0xc8be04(0x392)+_0xc8be04(0x2ac)+_0xc8be04(0x288)+'nt','yBgnI':function(_0x36e943,_0x2bc48e){return _0x36e943===_0x2bc48e;},'SypoI':function(_0x320441,_0x203887){return _0x320441<_0x203887;},'vziRq':_0xc8be04(0x3b8)};try{if(_0x1002cb[_0xc8be04(0x668)](_0x1002cb['yzTTE'],_0xc8be04(0x659))){var _0x1c5fb3=document[_0xc8be04(0x108)+_0xc8be04(0x39a)+_0xc8be04(0x24c)+'nt'],_0x174cb8=_0x1c5fb3&&_0x1002cb['guQtv'](_0x1c5fb3['tagNa'+'me'],_0x1002cb['soLox'])?_0x1c5fb3:document[_0xc8be04(0x65a)]||document[_0xc8be04(0x24b)+_0xc8be04(0x54b)+_0xc8be04(0x40e)];if(_0x403d0d['paren'+_0xc8be04(0x260)]!==_0x174cb8)_0x174cb8[_0xc8be04(0x2c7)+_0xc8be04(0x144)+'d'](_0x403d0d);}else for(var _0x2c8514 of[_0xc8be04(0x35c)+'io_30'+_0xc8be04(0x51e)+_0xc8be04(0x288)+'nt','kour-'+_0xc8be04(0x2af)+_0xc8be04(0xcc)+_0xc8be04(0x65b)+'t',_0x3a9e8e['LyXln'],_0xc8be04(0x108)+_0xc8be04(0x39a)+_0xc8be04(0x113)+'s']){var _0x2bd2ac=_0x24680a[_0xc8be04(0x43b)+_0xc8be04(0x40e)+'ById'](_0x2c8514);if(_0x2bd2ac&&_0x3a9e8e['yBgnI'](_0x2c8514,_0xc8be04(0x108)+_0xc8be04(0x39a)+_0xc8be04(0x113)+'s')){var _0x124ecd=_0x2bd2ac[_0xc8be04(0x5f7)+'ren'];for(var _0x9fcdd9=-0x164d*0x1+-0x1a72*-0x1+-0x425*0x1;_0x3a9e8e[_0xc8be04(0x21d)](_0x9fcdd9,_0x124ecd[_0xc8be04(0x686)+'h']);_0x9fcdd9++){if(_0x124ecd[_0x9fcdd9]['id']&&_0x124ecd[_0x9fcdd9]['id'][_0xc8be04(0x267)+'Of'](_0xc8be04(0x35c)+_0xc8be04(0x671))===0x1e4f*-0x1+0x21b4+-0x4f*0xb)_0x124ecd[_0x9fcdd9]['style']['displ'+'ay']=_0xc8be04(0x3b8);}}else{if(_0x2bd2ac)_0x2bd2ac[_0xc8be04(0x470)]['displ'+'ay']=_0x3a9e8e[_0xc8be04(0x28e)];}}}catch(_0x1706e9){try{document[_0xc8be04(0x65a)][_0xc8be04(0x2c7)+_0xc8be04(0x144)+'d'](_0x403d0d);}catch(_0x3ecb22){}}}var _0xa02145={'w':0x0,'h':0x0,'dpr':0x0};function _0x5e077a(){var _0x241853=_0x3e700b,_0x245d5b=window['devic'+_0x241853(0x67f)+_0x241853(0x337)+'o']||0xcf4*0x1+0x4*0x139+0x1*-0x11d7,_0x80d2e3=window[_0x241853(0x6cd)+'Width'],_0xf6c6e2=window[_0x241853(0x6cd)+'Heigh'+'t'];if(_0x80d2e3===_0xa02145['w']&&_0x1002cb['CDiEj'](_0xf6c6e2,_0xa02145['h'])&&_0x245d5b===_0xa02145['dpr'])return;_0xa02145['w']=_0x80d2e3,_0xa02145['h']=_0xf6c6e2,_0xa02145[_0x241853(0x4f1)]=_0x245d5b,_0x403d0d[_0x241853(0x4e9)]=Math[_0x241853(0x476)](_0x80d2e3*_0x245d5b),_0x403d0d['heigh'+'t']=Math['round'](_0x1002cb[_0x241853(0xc5)](_0xf6c6e2,_0x245d5b)),_0x427cbd[_0x241853(0x3d2)+_0x241853(0x505)+'rm'](_0x245d5b,-0x1*0x124a+-0x274*0x1+-0xa5f*-0x2,-0x24d*0x6+0x1f73+-0x11a5*0x1,_0x245d5b,-0xb9d*-0x1+0x54*0xf+-0x1089,-0xbcc+0x4*-0x23b+0x9c*0x22);}var _0x2340e2=-0x4e0*-0x7+-0x1f1c+-0x304,_0x1d1a0f=performance[_0x3e700b(0x4da)](),_0x9986bc=-0x67*0x9+0xad6+-0x737;function _0x3b4bfc(_0x472da8){var _0x5868c4=_0x3e700b,_0x48a57b=_0x1002cb[_0x5868c4(0x2d3)](Number,_0x4800f2[_0x5868c4(0x1a8)+'le'])||0xfb*-0x7+0x1e23*-0x1+0x2501,_0x4177bd=_0x1002cb[_0x5868c4(0x49f)](0x7*-0x545+0x23f9+0x10c,_0x48a57b),_0x44c543=_0x1002cb[_0x5868c4(0x49f)](0x599*-0x3+0xac*-0x2b+0x2db3*0x1,_0x48a57b),_0x21c295=_0x1002cb['IhCWN'](_0x4177bd*(-0x12e1*0x2+-0x7f*0x45+-0x9*-0x800),_0x44c543*(-0x17*0x112+0x105b*-0x1+0xd*0x327)),_0x379fe0=_0x1002cb[_0x5868c4(0x43c)](_0x4177bd*(0x5ec*-0x3+-0x6*-0x3f+-0x1*-0x104d),_0x44c543*(0x77e+0x147*-0x8+0x2bc)),_0x2b40da=_0x4800f2[_0x5868c4(0x586)],_0x208e29=_0x1002cb[_0x5868c4(0x668)](_0x2b40da,'br')?_0x1002cb[_0x5868c4(0x579)](_0x472da8[_0x5868c4(0x664)]-(0x1*-0x1f3c+0x9*0x2b3+0xb*0xa3),_0x21c295):_0x472da8['left']+(0x64a+-0xe*0x2bd+-0xa*-0x336),_0x3ddaf8=_0x2b40da==='ml'?_0x1002cb[_0x5868c4(0x579)](_0x1002cb[_0x5868c4(0x162)](_0x472da8['top'],_0x472da8[_0x5868c4(0x695)+'t']/(0x12e6+-0xf5*-0x1d+-0x2ea5)),_0x1002cb['UiMef'](_0x379fe0,0x1f7*0x9+0x2f*0x7+-0x2*0x97b)):_0x1002cb[_0x5868c4(0x579)](_0x1002cb['viiVh'](_0x472da8[_0x5868c4(0x6ca)+'m'],_0x379fe0),_0x2b40da==='bl'?0x2e1*-0x5+-0x1f04+0x1*0x2dc9:-0x1dc+-0x2138+0xa6*0x37),_0x4e7dc2=(_0x16cc03,_0x8001d9,_0x608109,_0x20d962,_0x35d9b5,_0x513d69,_0x29fe8a)=>{var _0xd71276=_0x5868c4,_0x591fe5=_0x290531[_0xd71276(0x485)](_0x8001d9);_0x427cbd['save'](),_0x427cbd['begin'+'Path']();if(_0x427cbd['round'+_0xd71276(0x189)])_0x427cbd[_0xd71276(0x476)+_0xd71276(0x189)](_0x608109,_0x20d962,_0x35d9b5,_0x513d69,(-0x3*0x7d7+0x1454+0x338)*_0x48a57b);else _0x427cbd[_0xd71276(0x1d2)](_0x608109,_0x20d962,_0x35d9b5,_0x513d69);_0x427cbd[_0xd71276(0x5e2)+_0xd71276(0x6bb)]=_0x591fe5?_0x1002cb['eBdfK']:_0xd71276(0x6ad)+_0xd71276(0x6c4)+_0xd71276(0x2c8)+'7)',_0x427cbd['fill'](),_0x427cbd[_0xd71276(0x3df)+_0xd71276(0x19e)]=0x14e5+-0x1a60+0x57c,_0x427cbd[_0xd71276(0x5e7)+_0xd71276(0x580)+'e']=_0x591fe5?_0x4ee18c:_0xd71276(0x6ad)+'255,1'+_0xd71276(0x455)+_0xd71276(0x394)+'5)',_0x427cbd[_0xd71276(0x5e7)+'e'](),_0x591fe5&&(_0x427cbd[_0xd71276(0x503)+'wColo'+'r']=_0x432976,_0x427cbd['shado'+_0xd71276(0x609)]=0x180a+0xd*-0x223+-0x3cb*-0x1,_0x427cbd[_0xd71276(0xdf)](),_0x427cbd['shado'+_0xd71276(0x609)]=-0x362*0x1+-0x11f5*-0x2+-0x3*0xad8),_0x427cbd[_0xd71276(0x5e2)+'tyle']=_0x591fe5?_0xd71276(0x1e5):_0x1002cb['NaMIM'],_0x427cbd['textA'+_0xd71276(0x4c9)]=_0x1002cb[_0xd71276(0x5e1)],_0x427cbd['textB'+'aseli'+'ne']=_0xd71276(0x21f)+'e',_0x427cbd['font']=_0x1002cb[_0xd71276(0x163)](_0xd71276(0x3ab)+Math[_0xd71276(0x476)](_0x1002cb['DyyJa'](0xcf9+-0x1*-0x1f6a+-0x2c57,_0x48a57b)),'px\x20ui'+_0xd71276(0x607)+_0xd71276(0x47f)+_0xd71276(0x2f3)+_0xd71276(0x103)+'i,san'+_0xd71276(0x4d1)+'if'),_0x427cbd['fillT'+'ext'](_0x16cc03,_0x608109+_0x1002cb[_0xd71276(0x5f5)](_0x35d9b5,-0x1e88+0x1bc2+0x2c8),_0x1002cb['xPfen'](_0x20d962,_0x513d69/(-0xb79+0x197e+-0xe03))-(_0x29fe8a?_0x1002cb[_0xd71276(0xc5)](0x1e12+0x113d+-0x2f4a,_0x48a57b):0x8e*0xa+-0x511*0x5+-0x3f5*-0x5)),_0x29fe8a&&(_0x427cbd[_0xd71276(0x3b2)]=_0x1002cb[_0xd71276(0x5f3)](_0xd71276(0x257)+Math['round'](_0x1002cb[_0xd71276(0x49f)](-0x166e+0x1*0x22f7+-0xc80,_0x48a57b)),_0x1002cb['ZAAgL']),_0x427cbd[_0xd71276(0x5e2)+'tyle']=_0x591fe5?_0x1002cb[_0xd71276(0x2ff)]:_0xd71276(0x6ad)+'255,2'+_0xd71276(0x54a)+_0xd71276(0x565)+'5)',_0x427cbd[_0xd71276(0x514)+_0xd71276(0x29e)](_0x29fe8a,_0x1002cb['KuBav'](_0x608109,_0x35d9b5/(0x4*-0xbc+-0x1*-0x1f2a+-0x1c38)),_0x20d962+_0x1002cb['UiMef'](_0x513d69,-0x1*-0xedc+0x3*-0x27b+-0x769)+(-0x2199+0xfbb+0x11e6)*_0x48a57b)),_0x427cbd['resto'+'re']();};_0x4e7dc2('W',_0x1002cb['VdVPq'],_0x1002cb['xPfen'](_0x1002cb[_0x5868c4(0x162)](_0x208e29,_0x4177bd),_0x44c543),_0x3ddaf8,_0x4177bd,_0x4177bd),_0x1002cb['HFsOh'](_0x4e7dc2,'A',_0x5868c4(0x5c1),_0x208e29,_0x3ddaf8+_0x4177bd+_0x44c543,_0x4177bd,_0x4177bd),_0x1002cb['oLtlw'](_0x4e7dc2,'S',_0x5868c4(0x578),_0x208e29+_0x4177bd+_0x44c543,_0x1002cb['gLzjF'](_0x3ddaf8+_0x4177bd,_0x44c543),_0x4177bd,_0x4177bd),_0x1002cb[_0x5868c4(0x2fa)](_0x4e7dc2,'D','KeyD',_0x208e29+_0x1002cb[_0x5868c4(0x5f3)](_0x4177bd,_0x44c543)*(0x5d2*-0x6+-0xc5*-0x1f+0xb13),_0x1002cb[_0x5868c4(0x214)](_0x3ddaf8+_0x4177bd,_0x44c543),_0x4177bd,_0x4177bd);var _0xa70629=(_0x21c295-_0x44c543)/(-0x25*0x7+-0xdee*-0x2+0x1ad7*-0x1),_0x1986c2=_0x1002cb[_0x5868c4(0x68d)](_0x3ddaf8,_0x1002cb[_0x5868c4(0x2e6)](_0x4177bd,_0x44c543)*(-0x1c1a+0x10b7+-0xb65*-0x1));_0x1002cb[_0x5868c4(0x3bb)](_0x4e7dc2,_0x5868c4(0x1f1),_0x1002cb[_0x5868c4(0x386)],_0x208e29,_0x1986c2,_0xa70629,_0x4177bd,_0x4800f2[_0x5868c4(0x3ff)]?_0x1002cb[_0x5868c4(0x162)](_0x1002cb[_0x5868c4(0x2d3)](_0x372048,0x25*-0x33+0x1e6+0x57a),_0x1002cb[_0x5868c4(0x16a)]):''),_0x1002cb[_0x5868c4(0x65f)](_0x4e7dc2,'RMB',_0x5868c4(0x4d0)+'3',_0x208e29+_0xa70629+_0x44c543,_0x1986c2,_0xa70629,_0x4177bd,_0x4800f2[_0x5868c4(0x3ff)]?_0x1002cb['fwnYw'](_0x1002cb['hEfrL'](_0x372048,0x1008+-0x1898+0x893),_0x5868c4(0x61e)):''),_0x4e7dc2('',_0x5868c4(0x47d),_0x208e29,_0x1002cb[_0x5868c4(0x30d)](_0x1986c2+_0x4177bd,_0x44c543),_0x21c295,_0x1002cb[_0x5868c4(0x49f)](_0x4177bd,-0x7*0x28+0x2583+-0x246b+0.45));}function _0x43957d(_0x387521){var _0x3d7ee1=_0x3e700b,_0xc0ba50=_0x387521[_0x3d7ee1(0x4e9)]/(0x19d5*0x1+-0x21a*0xf+0x5b3),_0x34f665=_0x387521['heigh'+'t']/(-0x6*0x51+0xd*-0xfd+0xec1),_0x2e00ad=_0x1002cb[_0x3d7ee1(0x2d3)](Number,_0x4800f2['chSiz'+'e'])||0x4a2+-0x3*-0x85d+-0x1*0x1db8,_0x3f1d30=/^#[0-9a-f]{6}$/i['test'](_0x4800f2['chCol'+'or'])?_0x4800f2['chCol'+'or']:'#ff6b'+'9d';_0x427cbd[_0x3d7ee1(0x212)](),_0x427cbd['strok'+_0x3d7ee1(0x580)+'e']=_0x3f1d30,_0x427cbd[_0x3d7ee1(0x5e2)+_0x3d7ee1(0x6bb)]=_0x3f1d30,_0x427cbd['lineW'+_0x3d7ee1(0x19e)]=Math['max'](-0xaef+0xc25*-0x1+-0x1715*-0x1+0.5,(-0x26f8+0x25c*0xb+0xd06)*_0x2e00ad),_0x427cbd[_0x3d7ee1(0x503)+_0x3d7ee1(0x101)+'r']=_0x3f1d30,_0x427cbd[_0x3d7ee1(0x503)+'wBlur']=0x8f9*-0x3+-0x258b*-0x1+-0xa9a;var _0x2f26e1=(-0x2595+0xdd4+-0x3*-0x7ed)*_0x2e00ad,_0xaf9f32=_0x1002cb[_0x3d7ee1(0xc5)](0x1417+0x2*0xa07+-0x281d,_0x2e00ad);_0x427cbd['begin'+'Path'](),_0x427cbd['moveT'+'o'](_0xc0ba50-_0x2f26e1-_0xaf9f32,_0x34f665),_0x427cbd[_0x3d7ee1(0x42e)+'o'](_0xc0ba50-_0x2f26e1,_0x34f665),_0x427cbd[_0x3d7ee1(0x4a0)+'o'](_0x1002cb[_0x3d7ee1(0x6b7)](_0xc0ba50,_0x2f26e1),_0x34f665),_0x427cbd[_0x3d7ee1(0x42e)+'o'](_0xc0ba50+_0x2f26e1+_0xaf9f32,_0x34f665),_0x427cbd[_0x3d7ee1(0x4a0)+'o'](_0xc0ba50,_0x34f665-_0x2f26e1-_0xaf9f32),_0x427cbd[_0x3d7ee1(0x42e)+'o'](_0xc0ba50,_0x34f665-_0x2f26e1),_0x427cbd[_0x3d7ee1(0x4a0)+'o'](_0xc0ba50,_0x1002cb[_0x3d7ee1(0xc3)](_0x34f665,_0x2f26e1)),_0x427cbd[_0x3d7ee1(0x42e)+'o'](_0xc0ba50,_0x1002cb[_0x3d7ee1(0x30a)](_0x34f665+_0x2f26e1,_0xaf9f32)),_0x427cbd[_0x3d7ee1(0x5e7)+'e'](),_0x427cbd[_0x3d7ee1(0x3fc)+_0x3d7ee1(0x396)](),_0x427cbd[_0x3d7ee1(0x27f)](_0xc0ba50,_0x34f665,(0x13b0+-0xd*-0xc1+-0x6f*0x44+0.6000000000000001)*_0x2e00ad,-0x1efe+-0x23c2+0x42c0,Math['PI']*(0xb8a+-0x1c05+0x107d)),_0x427cbd[_0x3d7ee1(0xdf)](),_0x427cbd[_0x3d7ee1(0x458)+'re']();}function _0x369f1d(_0x3f5689){var _0x2138e3=_0x3e700b,_0x28a372={'iXndh':_0x426004[_0x2138e3(0x6a6)]};if(_0x426004['IWZLa'](_0x2138e3(0x236),'XYzBk')){_0x427cbd[_0x2138e3(0x212)](),_0x427cbd['font']=_0x426004[_0x2138e3(0x308)],_0x427cbd['textA'+'lign']='left',_0x427cbd['textB'+'aseli'+'ne']='top';var _0x567e=0x1fed+-0x1*0xa06+-0x15bb,_0x205889=-0x1935+0x14f6+0x44b,_0x4b5052=(_0x240481,_0x1e78b7)=>{var _0x2ff509=_0x2138e3,_0x865157={'cHrLA':function(_0x8e8176,_0x1dcb1b){var _0x48a194=_0x3ca7;return _0x1002cb[_0x48a194(0x6b6)](_0x8e8176,_0x1dcb1b);},'rYKst':function(_0x11ca6f,_0x18b5a5,_0x454894){return _0x11ca6f(_0x18b5a5,_0x454894);}};if('nUTps'===_0x2ff509(0x643))_0x427cbd[_0x2ff509(0x5e2)+'tyle']=_0x1002cb[_0x2ff509(0x3fb)](_0x1e78b7,_0x2ff509(0x6ad)+'255,2'+_0x2ff509(0x54a)+'0,0.7'+'5)'),_0x427cbd[_0x2ff509(0x514)+_0x2ff509(0x29e)](_0x240481,_0x205889,_0x567e),_0x567e+=0x254a+-0x383*-0x2+-0xec*0x30;else{var _0x10173f=_0x865157['rYKst'](_0x475f5f,_0x4aabf0,_0x3ec568=>{var _0x2799a8=_0x2ff509;_0x5ba7f5[_0x2799a8(0x5fe)+_0x2799a8(0x638)][_0x2799a8(0xf1)+'e']('on',_0x3ec568),_0x865157['cHrLA'](_0x410a3a,_0x3ec568);});_0x534987['appen'+'d'](_0x9e9c4c,_0x10173f);}};_0x4b5052(_0x2138e3(0x61a)+_0x2138e3(0x235)+'R\x20v1.'+'1',_0x426004[_0x2138e3(0x677)]);if(_0x4800f2[_0x2138e3(0x4c4)])_0x426004[_0x2138e3(0x419)](_0x4b5052,_0x9986bc+_0x426004[_0x2138e3(0x674)]);if(!_0x429068['gameL'+_0x2138e3(0x18f)])_0x4b5052(_0x426004['Givtz'],'rgba('+_0x2138e3(0x4ae)+_0x2138e3(0x422)+_0x2138e3(0x652)+')');_0x427cbd[_0x2138e3(0x458)+'re']();}else _0x3b4594(_0x2c5f2a,_0xb24eaa,_0x1b5840,_0x28a372['iXndh']);}function _0x50416a(){var _0x123a80=_0x3e700b,_0x9023f9={'gpkdU':'sakur'+'a.kou'+_0x123a80(0x555)};if(_0x123a80(0x23b)===_0x426004[_0x123a80(0x541)])_0x348649[_0x123a80(0x5ed)+'n'](_0x7e6d1d,_0x512b7d[_0x123a80(0x558)](_0x5c511b['getIt'+'em'](_0x9023f9[_0x123a80(0x268)])||'{}'));else{_0x426004[_0x123a80(0xfe)](requestAnimationFrame,_0x50416a),_0x2340e2++;var _0x73869a=performance['now']();if(_0x426004[_0x123a80(0x1a4)](_0x73869a,_0x1d1a0f)>=0x1*0x17ff+-0x2*0x1d2+-0x1267){if(_0x426004[_0x123a80(0x3de)](_0x426004[_0x123a80(0x1d3)],_0x426004[_0x123a80(0x1d3)]))try{if(_0x3f6267)_0x36009d[_0x123a80(0x3e3)]('Unity'+_0x123a80(0x20b)+_0x123a80(0x63c)+_0x123a80(0x25e)+_0x123a80(0x350),_0x1002cb['LHgDL'],[-0x1b55*0x1+0x3*-0x78b+0x32e6]);}catch(_0x9341ab){}else _0x9986bc=Math[_0x123a80(0x476)](_0x426004['Xmtbv'](_0x2340e2*(-0x304*-0x8+0x1cb3+0x1*-0x30eb),_0x426004['DVjga'](_0x73869a,_0x1d1a0f))),_0x2340e2=0x26b8+0x1*0x227c+-0x4934,_0x1d1a0f=_0x73869a;}_0x5e077a(),_0x426004['KsmIN'](_0x5e9b00),_0x427cbd[_0x123a80(0xfd)+'Rect'](0x1f2e+0x1c6f*0x1+0x3*-0x13df,-0x2639+-0xe4c+0x3485,_0xa02145['w'],_0xa02145['h']);var _0x28a0fa={'left':0x0,'top':0x0,'right':_0xa02145['w'],'bottom':_0xa02145['h'],'width':_0xa02145['w'],'height':_0xa02145['h']};if(_0x4800f2['cross'+_0x123a80(0x36c)])_0x43957d(_0x28a0fa);if(_0x4800f2['keyst'+_0x123a80(0x627)])_0x3b4bfc(_0x28a0fa);_0x369f1d(_0x28a0fa);}}var _0x203a80=document[_0x3e700b(0x67c)+_0x3e700b(0x209)+_0x3e700b(0x1a0)](_0x3e700b(0x146));_0x203a80['id']=_0x426004[_0x3e700b(0xf7)],_0x203a80[_0x3e700b(0x470)][_0x3e700b(0x2f8)+'xt']=_0x3e700b(0x465)+'ion:f'+'ixed;'+_0x3e700b(0x672)+':0;z-'+'index'+':2147'+'48364'+_0x3e700b(0x323)+_0x3e700b(0x57e)+_0x3e700b(0x501)+_0x3e700b(0x1b9)+'e;';var _0x1a2d80=_0x203a80[_0x3e700b(0x219)+_0x3e700b(0x160)+'ow']({'mode':_0x3e700b(0x326)});(document[_0x3e700b(0x65a)]||document['docum'+_0x3e700b(0x54b)+'ement'])['appen'+'dChil'+'d'](_0x203a80);var _0x5ee8c7=![],_0x7b11ba={};try{_0x426004['dcSXg'](_0x3e700b(0x6ab),_0x3e700b(0x575))?_0x7b11ba=JSON['parse'](localStorage[_0x3e700b(0x509)+'em'](_0x426004[_0x3e700b(0x484)])||'{}'):(_0x1847b6['hookG'+_0x3e700b(0x273)]=_0x5e3102,_0x32973e());}catch(_0xa4b5e9){}function _0x1d7796(){var _0x4ec93a=_0x3e700b;if(_0x426004[_0x4ec93a(0x5de)](_0x426004[_0x4ec93a(0x4f3)],'FDswR')){var _0x1e1cc4=_0x4288b5['capMo'+'ve'];if(_0x1e1cc4)try{_0x1e1cc4[_0x4ec93a(0x180)+'ed']=![];}catch(_0x2c3a2a){}}else try{localStorage['setIt'+'em'](_0x426004[_0x4ec93a(0x484)],JSON['strin'+'gify'](_0x7b11ba));}catch(_0x226b5e){}}function _0x396b27(_0x471182,_0x22496e){var _0x257583=_0x3e700b;if(_0x257583(0x459)!==_0x426004[_0x257583(0x1fc)]){var _0x44636b=document['creat'+'eElem'+'ent'](_0x426004[_0x257583(0x410)]);return _0x44636b[_0x257583(0x42b)]=_0x257583(0x685)+'n',_0x44636b['class'+_0x257583(0x3c0)]=_0x426004['MyprK'],_0x44636b[_0x257583(0x64d)+'tribu'+'te'](_0x257583(0x21e),_0x426004[_0x257583(0x304)]),_0x44636b['setAt'+_0x257583(0x57c)+'te'](_0x257583(0x61f)+'check'+'ed',_0x426004[_0x257583(0x649)](String,!!_0x471182)),_0x44636b[_0x257583(0x368)+'ck']=_0x68c526=>{var _0x15a42c=_0x257583;_0x68c526[_0x15a42c(0x492)+_0x15a42c(0x469)+'ation']();var _0x578508=_0x44636b['getAt'+_0x15a42c(0x57c)+'te'](_0x1002cb[_0x15a42c(0x1dd)])!==_0x1002cb['DcXOA'];_0x44636b['setAt'+'tribu'+'te'](_0x1002cb[_0x15a42c(0x1dd)],_0x1002cb[_0x15a42c(0x2d3)](String,_0x578508)),_0x1002cb[_0x15a42c(0x4e7)](_0x22496e,_0x578508);},_0x44636b;}else _0x1957a8['ksPos']=_0x2c57f2,_0x59b436();}function _0x527a25(_0x2c1cec,_0x2494c6,_0x265829,_0x2fcab7,_0x5223fe){var _0x1257ee=_0x3e700b,_0x2b9933={'yUjMP':_0x1257ee(0x4d0)+'down','ztdQc':function(_0x2ee8d0,_0x51cbec){return _0x1002cb['RjQim'](_0x2ee8d0,_0x51cbec);},'LhdWl':'xAhIm','ODuzl':_0x1002cb['tSwBw'],'tdIYU':_0x1002cb[_0x1257ee(0x447)],'ZxwDR':function(_0x22928b,_0x5947d0){return _0x22928b*_0x5947d0;},'Xfwgj':function(_0x10e4a5,_0x1f4c23){var _0x3b0259=_0x1257ee;return _0x1002cb[_0x3b0259(0x32f)](_0x10e4a5,_0x1f4c23);},'KLAOx':function(_0x3d9393,_0x1422a4){return _0x3d9393+_0x1422a4;},'nXSZe':_0x1257ee(0x5ad)+_0x1257ee(0x58a),'haXkk':'range','oFspr':_0x1002cb[_0x1257ee(0x3b0)],'SlqnI':function(_0x3e34c0){return _0x3e34c0();}},_0x2087c9=document[_0x1257ee(0x67c)+_0x1257ee(0x209)+_0x1257ee(0x1a0)](_0x1002cb['oHgyE']);_0x2087c9[_0x1257ee(0x5fe)+_0x1257ee(0x3c0)]=_0x1257ee(0x5ad)+'nge';var _0x11c304=document['creat'+'eElem'+'ent'](_0x1002cb['wEVfV']);_0x11c304[_0x1257ee(0x42b)]='range',_0x11c304[_0x1257ee(0x5fe)+_0x1257ee(0x3c0)]='sk-sl'+_0x1257ee(0x43e),_0x11c304['min']=_0x2494c6,_0x11c304[_0x1257ee(0x496)]=_0x265829,_0x11c304['step']=_0x2fcab7,_0x11c304['value']=_0x2c1cec;var _0x205bda=document[_0x1257ee(0x67c)+'eElem'+_0x1257ee(0x1a0)](_0x1257ee(0x1dc));_0x205bda[_0x1257ee(0x5fe)+'Name']=_0x1002cb[_0x1257ee(0x3b0)],_0x205bda[_0x1257ee(0x29c)+'onten'+'t']=String(_0x2c1cec);var _0x3282b9=()=>{var _0x432bbc=_0x1257ee,_0x5a7906={'cppXJ':'mouse'+'up','pdukn':_0x2b9933[_0x432bbc(0x481)],'Tgmci':'keydo'+'wn'};if(_0x2b9933[_0x432bbc(0x280)](_0x2b9933[_0x432bbc(0x2ca)],_0x2b9933['ODuzl']))_0x205bda['textC'+_0x432bbc(0x105)+'t']=String(_0x11c304[_0x432bbc(0x4ed)]),_0x2087c9['style'][_0x432bbc(0x66d)+_0x432bbc(0x4ce)+'y'](_0x2b9933[_0x432bbc(0x5b0)],_0x2b9933[_0x432bbc(0x6c1)](_0x2b9933['Xfwgj'](_0x11c304['value'],_0x2494c6)/(_0x265829-_0x2494c6),0x152+0x125d+-0x134b)+'%');else{var _0x5741ca=(_0x432bbc(0x4ac)+'|3|4|'+_0x432bbc(0x19d))['split']('|'),_0x2ec2f8=-0x1*0x130+-0x7d6+0x483*0x2;while(!![]){switch(_0x5741ca[_0x2ec2f8++]){case'0':_0x4f8a07=!![];continue;case'1':_0x44d8cf[_0x432bbc(0x2a1)+'entLi'+_0x432bbc(0x206)+'r'](_0x5a7906[_0x432bbc(0x530)],_0x4af840,!![]);continue;case'2':if(_0x218c65)return;continue;case'3':_0x2cb1b3['addEv'+_0x432bbc(0x6a5)+'stene'+'r'](_0x432bbc(0x421),_0x29d849,!![]);continue;case'4':_0x17f011['addEv'+'entLi'+'stene'+'r'](_0x5a7906[_0x432bbc(0x602)],_0x59d887,!![]);continue;case'5':_0x573e08[_0x432bbc(0x2a1)+_0x432bbc(0x6a5)+_0x432bbc(0x206)+'r']('blur',_0x36667d);continue;case'6':_0x39bd0f['addEv'+_0x432bbc(0x6a5)+'stene'+'r'](_0x5a7906['Tgmci'],_0x1db6a4,!![]);continue;}break;}}};return _0x11c304[_0x1257ee(0x168)+'ut']=()=>{var _0xb4df95=_0x1257ee;if(_0x1002cb['RjQim']('xfzVn',_0xb4df95(0x67b)))_0x3282b9(),_0x5223fe(_0x1002cb[_0xb4df95(0x26a)](Number,_0x11c304[_0xb4df95(0x4ed)]));else{var _0x47ed49={'VpVyQ':function(_0x40164f,_0x420a3f){return _0x40164f(_0x420a3f);},'ZaNAf':function(_0x4c5ab8,_0x1e8f38){var _0x1677fe=_0xb4df95;return _0x2b9933[_0x1677fe(0x17f)](_0x4c5ab8,_0x1e8f38);},'gdwbQ':function(_0x34b2a0,_0x4f0b19){return _0x34b2a0*_0x4f0b19;},'ntHUc':function(_0x3fa413,_0x204217){return _0x3fa413/_0x204217;},'Acifb':function(_0x45258e,_0xe8530a){return _0x2b9933['Xfwgj'](_0x45258e,_0xe8530a);}},_0x3cc547=_0x33a3f8['creat'+_0xb4df95(0x209)+_0xb4df95(0x1a0)]('div');_0x3cc547[_0xb4df95(0x5fe)+'Name']=_0x2b9933['nXSZe'];var _0xef357d=_0x22f29c['creat'+'eElem'+'ent'](_0xb4df95(0x176));_0xef357d[_0xb4df95(0x42b)]=_0x2b9933[_0xb4df95(0x6b8)],_0xef357d[_0xb4df95(0x5fe)+_0xb4df95(0x3c0)]='sk-sl'+_0xb4df95(0x43e),_0xef357d[_0xb4df95(0x277)]=_0x281552,_0xef357d['max']=_0x203af1,_0xef357d['step']=_0x5c2480,_0xef357d[_0xb4df95(0x4ed)]=_0x2d4f30;var _0xa59113=_0x55b6f8[_0xb4df95(0x67c)+_0xb4df95(0x209)+'ent']('span');_0xa59113[_0xb4df95(0x5fe)+_0xb4df95(0x3c0)]=_0x2b9933['oFspr'],_0xa59113[_0xb4df95(0x29c)+_0xb4df95(0x105)+'t']=_0x34b163(_0x128f9b);var _0x3c9a02=()=>{var _0x59c16e=_0xb4df95;_0xa59113[_0x59c16e(0x29c)+_0x59c16e(0x105)+'t']=_0x47ed49['VpVyQ'](_0xd9bb4d,_0xef357d[_0x59c16e(0x4ed)]),_0x3cc547[_0x59c16e(0x470)][_0x59c16e(0x66d)+_0x59c16e(0x4ce)+'y']('--p',_0x47ed49[_0x59c16e(0x570)](_0x47ed49[_0x59c16e(0x184)](_0x47ed49[_0x59c16e(0x4de)](_0x47ed49['Acifb'](_0xef357d['value'],_0x168611),_0x20c8f5-_0x409ed2),0x4b8*-0x4+-0x2160+0x2*0x1a52),'%'));};return _0xef357d[_0xb4df95(0x168)+'ut']=()=>{_0x3c9a02(),_0x2c068c(_0x18c554(_0xef357d['value']));},_0x2b9933['SlqnI'](_0x3c9a02),_0x3cc547[_0xb4df95(0x2c7)+'d'](_0xef357d,_0xa59113),_0x3cc547;}},_0x3282b9(),_0x2087c9[_0x1257ee(0x2c7)+'d'](_0x11c304,_0x205bda),_0x2087c9;}function _0x3d5a50(_0xddf63c,_0x1fe196){var _0x1608dc=_0x3e700b,_0x10bfb7=('3|4|0'+'|1|2|'+'5')[_0x1608dc(0xf8)]('|'),_0x904a63=-0x1cf*0x9+0x2649+0x2*-0xb01;while(!![]){switch(_0x10bfb7[_0x904a63++]){case'0':_0x2409e6[_0x1608dc(0x5fe)+'Name']=_0x1608dc(0x5ba)+_0x1608dc(0x33a);continue;case'1':_0x2409e6[_0x1608dc(0x4ed)]=/^#[0-9a-f]{6}$/i[_0x1608dc(0x3c7)](_0xddf63c)?_0xddf63c:_0x1608dc(0x375)+'9d';continue;case'2':_0x2409e6[_0x1608dc(0x168)+'ut']=()=>_0x1fe196(_0x2409e6[_0x1608dc(0x4ed)]);continue;case'3':var _0x2409e6=document['creat'+_0x1608dc(0x209)+_0x1608dc(0x1a0)](_0x1608dc(0x176));continue;case'4':_0x2409e6[_0x1608dc(0x42b)]='color';continue;case'5':return _0x2409e6;}break;}}function _0x9b823d(_0x47ace9,_0x3a0105,_0x26ded1){var _0x4df2da=_0x3e700b;if(_0x1002cb[_0x4df2da(0x538)]===_0x1002cb[_0x4df2da(0x361)])_0x1d78a1[_0x4df2da(0x353)+'or']=_0x2e08c0,_0x2ebedb();else{var _0x587c78=document[_0x4df2da(0x67c)+_0x4df2da(0x209)+_0x4df2da(0x1a0)](_0x4df2da(0x56d)+'t');_0x587c78['class'+'Name']=_0x1002cb[_0x4df2da(0x26d)];for(var [_0x464a5,_0x18438f]of _0x3a0105){var _0x4e7d71=document[_0x4df2da(0x67c)+_0x4df2da(0x209)+_0x4df2da(0x1a0)](_0x4df2da(0x5dd)+'n');_0x4e7d71[_0x4df2da(0x4ed)]=_0x464a5,_0x4e7d71[_0x4df2da(0x29c)+'onten'+'t']=_0x18438f,_0x587c78[_0x4df2da(0x2c7)+_0x4df2da(0x144)+'d'](_0x4e7d71);}return _0x587c78['value']=_0x47ace9,_0x587c78['oncha'+'nge']=()=>_0x26ded1(_0x587c78[_0x4df2da(0x4ed)]),_0x587c78;}}function _0x5d1073(_0x35d897,_0x52730d){var _0x4ab53e=_0x3e700b;if(_0x426004[_0x4ab53e(0xf3)]===_0x426004[_0x4ab53e(0x418)])_0x195bb2(_0x15f1ae,_0x3219a0,_0x554fc9,'movem'+_0x4ab53e(0x136));else{var _0x56fa5d=(_0x4ab53e(0x3e9)+_0x4ab53e(0x30c)+'2')['split']('|'),_0x7bd087=0x12*0x137+0xe*0xa4+-0x1ed6;while(!![]){switch(_0x56fa5d[_0x7bd087++]){case'0':_0x59a797['type']='butto'+'n';continue;case'1':_0x59a797[_0x4ab53e(0x5fe)+'Name']=_0x426004[_0x4ab53e(0x30f)];continue;case'2':return _0x59a797;case'3':_0x59a797['oncli'+'ck']=_0x365376=>{var _0x486802=_0x4ab53e;_0x365376[_0x486802(0x492)+'ropag'+'ation'](),_0x52730d();};continue;case'4':_0x59a797[_0x4ab53e(0x29c)+_0x4ab53e(0x105)+'t']=_0x35d897;continue;case'5':var _0x59a797=document[_0x4ab53e(0x67c)+_0x4ab53e(0x209)+_0x4ab53e(0x1a0)](_0x426004[_0x4ab53e(0x410)]);continue;}break;}}}function _0x16e4bc(_0xd445b0,_0x314cb1,_0x35cfc4){var _0x3e9cd6=_0x3e700b,_0x4ad4a3=document[_0x3e9cd6(0x67c)+'eElem'+'ent']('div');_0x4ad4a3[_0x3e9cd6(0x5fe)+_0x3e9cd6(0x3c0)]=_0x3e9cd6(0xed)+'l';var _0x5be2ef=document['creat'+_0x3e9cd6(0x209)+_0x3e9cd6(0x1a0)]('span');_0x5be2ef['class'+_0x3e9cd6(0x3c0)]=_0x426004['mEpKH'],_0x5be2ef['textC'+_0x3e9cd6(0x105)+'t']=_0xd445b0;if(_0x314cb1){var _0x5cc2eb=document['creat'+_0x3e9cd6(0x209)+'ent']('small');_0x5cc2eb[_0x3e9cd6(0x5fe)+'Name']=_0x3e9cd6(0x572)+'nt',_0x5cc2eb[_0x3e9cd6(0x29c)+_0x3e9cd6(0x105)+'t']=_0x314cb1,_0x5be2ef['appen'+'dChil'+'d'](_0x5cc2eb);}return _0x4ad4a3[_0x3e9cd6(0x2c7)+'d'](_0x5be2ef,_0x35cfc4),_0x4ad4a3;}function _0x38c84f(_0x396e23,_0x35bb97){var _0x555b18=_0x3e700b,_0x2d9472=document['creat'+'eElem'+_0x555b18(0x1a0)](_0x426004[_0x555b18(0xc2)]);return _0x2d9472[_0x555b18(0x5fe)+'Name']=_0x555b18(0x49c)+'te'+(_0x35bb97?_0x426004[_0x555b18(0x169)]:''),_0x2d9472['textC'+'onten'+'t']=_0x396e23,_0x2d9472;}function _0xd02fc8(_0x330d8a,_0x1fe88d,_0x104718,_0x13c06b,_0x2f8dc1){var _0x56eed7=_0x3e700b,_0x3ae870={'RWXGo':_0x56eed7(0x21f)+'e','JfQgQ':function(_0x1d0eac,_0x2cbb6e){return _0x1d0eac+_0x2cbb6e;},'ntCGK':'600\x20','DVTJM':function(_0x3c437e,_0x348096){return _0x1002cb['PfnVx'](_0x3c437e,_0x348096);},'gvPGU':function(_0x39ecb1,_0x424615){var _0x2aba04=_0x56eed7;return _0x1002cb[_0x2aba04(0x33f)](_0x39ecb1,_0x424615);},'LkwjT':function(_0x575b1d,_0x21586){return _0x575b1d+_0x21586;},'agYez':function(_0x12d4e8,_0x5a324c){return _0x12d4e8*_0x5a324c;},'QSbtS':function(_0x53aa64,_0x2b288d){var _0x3dd948=_0x56eed7;return _0x1002cb[_0x3dd948(0x404)](_0x53aa64,_0x2b288d);},'ZDNqk':function(_0x5249c2,_0x2cd7cc){return _0x5249c2-_0x2cd7cc;},'JXejq':function(_0x222d03,_0x19d005){var _0x3579a1=_0x56eed7;return _0x1002cb[_0x3579a1(0x1f8)](_0x222d03,_0x19d005);},'QeOrz':function(_0x329617,_0x3cb82b){return _0x329617+_0x3cb82b;},'BqbpC':function(_0xd2e688,_0x3c2eb7,_0x1d4797,_0x295d1a,_0x4e7f6e,_0x522c9c,_0xf966c5){var _0x316066=_0x56eed7;return _0x1002cb[_0x316066(0xcb)](_0xd2e688,_0x3c2eb7,_0x1d4797,_0x295d1a,_0x4e7f6e,_0x522c9c,_0xf966c5);},'QDCsR':function(_0x54e231,_0x24ef7f){return _0x54e231+_0x24ef7f;},'ktagj':function(_0x23eaf4,_0x2b49e4){return _0x1002cb['DtQid'](_0x23eaf4,_0x2b49e4);},'YySqp':_0x1002cb['riPIA'],'klyOy':_0x1002cb[_0x56eed7(0x386)],'AnOoB':function(_0x1f1bcd,_0xee1fab){return _0x1f1bcd(_0xee1fab);},'kcKPt':_0x56eed7(0x61e),'QkLnx':_0x56eed7(0x10b),'xYRPX':_0x56eed7(0x47d),'EuvZI':_0x56eed7(0x687)+'ra-ko'+_0x56eed7(0x161)+_0x56eed7(0x284)+_0x56eed7(0x566)+_0x56eed7(0x564)+':'},_0x1af488=document[_0x56eed7(0x67c)+'eElem'+'ent']('div');_0x1af488[_0x56eed7(0x5fe)+'Name']=_0x1002cb[_0x56eed7(0x6ba)](_0x1002cb[_0x56eed7(0x4b9)],_0x104718?_0x56eed7(0x188):'');var _0x45a726=document[_0x56eed7(0x67c)+_0x56eed7(0x209)+_0x56eed7(0x1a0)](_0x56eed7(0x146));_0x45a726[_0x56eed7(0x5fe)+_0x56eed7(0x3c0)]=_0x1002cb[_0x56eed7(0x604)];var _0x46b47a=document[_0x56eed7(0x67c)+_0x56eed7(0x209)+_0x56eed7(0x1a0)](_0x56eed7(0x146));_0x46b47a['class'+'Name']='sk-ca'+_0x56eed7(0x1ca)+_0x56eed7(0x5ff);var _0x1c9ba2=document[_0x56eed7(0x67c)+_0x56eed7(0x209)+'ent']('stron'+'g');_0x1c9ba2['textC'+_0x56eed7(0x105)+'t']=_0x330d8a,_0x46b47a['appen'+'dChil'+'d'](_0x1c9ba2);if(_0x13c06b){var _0x316b98=_0x1002cb[_0x56eed7(0x589)](_0x396b27,_0x104718,_0x1cffc1=>{var _0x36d6ae=_0x56eed7;if(_0x1002cb['YmNSr'](_0x1002cb['WKnPx'],_0x36d6ae(0x6be))){var _0xa1e1dc={'lMGck':function(_0x743646,_0x1e111b){return _0x743646*_0x1e111b;},'XQVHv':_0x36d6ae(0x1e5),'hdWxB':_0x36d6ae(0x28b)+'r','CtyAf':_0x3ae870[_0x36d6ae(0x29f)],'DUuKA':function(_0x3d7489,_0x5a9199){var _0x4a3c13=_0x36d6ae;return _0x3ae870[_0x4a3c13(0x520)](_0x3d7489,_0x5a9199);},'MuSuL':'700\x20','HEJTY':function(_0x438bc2,_0x40712d){return _0x438bc2*_0x40712d;},'lzlOI':function(_0x19f047,_0x10c0be){return _0x19f047+_0x10c0be;},'ajqDK':function(_0x4714eb,_0x2284ea){return _0x4714eb+_0x2284ea;},'aIRoD':function(_0x55cadc,_0x55ad2b){return _0x55cadc+_0x55ad2b;},'cLaFy':_0x3ae870[_0x36d6ae(0x34c)],'VNGSz':function(_0x4f2e66,_0x9330d5){var _0x39068c=_0x36d6ae;return _0x3ae870[_0x39068c(0x265)](_0x4f2e66,_0x9330d5);},'JGbwC':function(_0x567ebd,_0x42ea1f){return _0x567ebd/_0x42ea1f;},'TEPtM':function(_0x437fc6,_0x2bb13e){return _0x437fc6+_0x2bb13e;},'AIoMr':function(_0xeda425,_0x329838){return _0xeda425/_0x329838;},'rVZNt':function(_0x2c8930,_0x5079fe){return _0x2c8930*_0x5079fe;}},_0x286a7f=_0x574586(_0x505650['ksSca'+'le'])||0xc94+0x795*-0x5+0x1956,_0x36402f=_0x3ae870[_0x36d6ae(0x4fd)](-0xa5*-0x29+0x1*-0x405+0x1*-0x1646,_0x286a7f),_0xadf297=(-0x84e+0x1932*-0x1+-0x1ad*-0x14)*_0x286a7f,_0x563f1c=_0x3ae870[_0x36d6ae(0x3af)](_0x3ae870[_0x36d6ae(0x346)](_0x36402f,0x1b57*-0x1+-0x8ed*0x4+0x3f0e),_0xadf297*(-0x11*-0x1f0+-0x1*-0x22fc+-0x1*0x43ea)),_0x100dd6=_0x36402f*(-0x1e73+-0x128f*-0x1+0xbe7)+_0x3ae870[_0x36d6ae(0x346)](_0xadf297,0x1f90+-0x1ab*0x5+0x7bd*-0x3),_0x6f3439=_0x3af1f7['ksPos'],_0x404839=_0x3ae870['QSbtS'](_0x6f3439,'br')?_0x3ae870['ZDNqk'](_0x4d8448[_0x36d6ae(0x664)]-(-0x4d*-0x3+-0x1d0d*-0x1+-0x779*0x4),_0x563f1c):_0x41c7f6['left']+(-0x1ad1+0x1*0x21cb+-0x6ea),_0x3401e6=_0x6f3439==='ml'?_0x3ae870[_0x36d6ae(0x4a6)](_0x3ae870['QeOrz'](_0x5684bf[_0x36d6ae(0x384)],_0x4d2ec9[_0x36d6ae(0x695)+'t']/(0x60e+0x1aff+-0x210b)),_0x100dd6/(0x1f*-0xb4+0xe83+0x74b)):_0x2b3d6e[_0x36d6ae(0x6ca)+'m']-_0x100dd6-(_0x6f3439==='bl'?0xaf0+0x24e5+-0x2f75*0x1:-0x908+0x7a2+0x1fc),_0x25d44a=(_0x412cdb,_0x548bca,_0x4a3c41,_0x2142fe,_0x3439c5,_0x404f4e,_0x1c47f1)=>{var _0x2d0e7c=_0x36d6ae,_0x3fbe7f=_0x102e0c[_0x2d0e7c(0x485)](_0x548bca);_0x61aa0['save'](),_0x166bc2[_0x2d0e7c(0x3fc)+'Path']();if(_0x522ff4[_0x2d0e7c(0x476)+_0x2d0e7c(0x189)])_0x36a958[_0x2d0e7c(0x476)+'Rect'](_0x4a3c41,_0x2142fe,_0x3439c5,_0x404f4e,_0xa1e1dc[_0x2d0e7c(0xec)](0x13*0x161+0x29d+-0x1cc9,_0x286a7f));else _0x4320fa[_0x2d0e7c(0x1d2)](_0x4a3c41,_0x2142fe,_0x3439c5,_0x404f4e);_0x14bd8a[_0x2d0e7c(0x5e2)+_0x2d0e7c(0x6bb)]=_0x3fbe7f?'rgba('+_0x2d0e7c(0x4ae)+'07,15'+_0x2d0e7c(0x1cb)+'5)':_0x2d0e7c(0x6ad)+_0x2d0e7c(0x6c4)+_0x2d0e7c(0x2c8)+'7)',_0x4eed93[_0x2d0e7c(0xdf)](),_0x450f81['lineW'+'idth']=-0x1eec+-0x19cf+-0x2*-0x1c5e,_0x385605[_0x2d0e7c(0x5e7)+_0x2d0e7c(0x580)+'e']=_0x3fbe7f?_0x508fce:_0x2d0e7c(0x6ad)+'255,1'+_0x2d0e7c(0x455)+_0x2d0e7c(0x394)+'5)',_0x226489[_0x2d0e7c(0x5e7)+'e'](),_0x3fbe7f&&(_0x53d8b2['shado'+_0x2d0e7c(0x101)+'r']=_0xfdc63e,_0x18891e['shado'+_0x2d0e7c(0x609)]=-0x69d*0x1+0xeb*-0x1+-0x796*-0x1,_0x2f3990[_0x2d0e7c(0xdf)](),_0x139553[_0x2d0e7c(0x503)+_0x2d0e7c(0x609)]=-0x1*0x15f3+-0x1*0x22ab+0x389e),_0xd0699f[_0x2d0e7c(0x5e2)+_0x2d0e7c(0x6bb)]=_0x3fbe7f?_0xa1e1dc[_0x2d0e7c(0x69a)]:'rgba('+_0x2d0e7c(0x45f)+'35,24'+_0x2d0e7c(0x63e)+')',_0x3eddd6[_0x2d0e7c(0x522)+_0x2d0e7c(0x4c9)]=_0xa1e1dc[_0x2d0e7c(0x2c4)],_0x5203c6[_0x2d0e7c(0x60c)+_0x2d0e7c(0x1a2)+'ne']=_0xa1e1dc[_0x2d0e7c(0x248)],_0x53f084[_0x2d0e7c(0x3b2)]=_0xa1e1dc[_0x2d0e7c(0x255)](_0xa1e1dc[_0x2d0e7c(0x215)]+_0x394613['round'](_0xa1e1dc[_0x2d0e7c(0x66c)](0x2df+0x1*0x2026+0x22f9*-0x1,_0x286a7f)),'px\x20ui'+'-sans'+'-seri'+_0x2d0e7c(0x2f3)+_0x2d0e7c(0x103)+_0x2d0e7c(0x2ba)+_0x2d0e7c(0x4d1)+'if'),_0x47ced4['fillT'+'ext'](_0x412cdb,_0xa1e1dc[_0x2d0e7c(0x213)](_0x4a3c41,_0x3439c5/(-0x907*0x1+-0x61+0x96a)),_0x2142fe+_0x404f4e/(-0x2016+-0x1237+-0x10c5*-0x3)-(_0x1c47f1?(-0x4*-0x3da+0x7+-0x1*0xf6a)*_0x286a7f:-0x17a*0x4+-0x5c1*-0x5+-0x16dd*0x1)),_0x1c47f1&&(_0x12deb0[_0x2d0e7c(0x3b2)]=_0xa1e1dc[_0x2d0e7c(0x2ef)](_0xa1e1dc['aIRoD'](_0xa1e1dc[_0x2d0e7c(0x178)],_0x2e8f96[_0x2d0e7c(0x476)](_0xa1e1dc[_0x2d0e7c(0xec)](0x10f*0x1f+0xc9*0xa+-0x28a2,_0x286a7f))),_0x2d0e7c(0x208)+_0x2d0e7c(0x607)+_0x2d0e7c(0x47f)+_0x2d0e7c(0x2f3)+_0x2d0e7c(0x103)+'i,san'+_0x2d0e7c(0x4d1)+'if'),_0x2ecb40[_0x2d0e7c(0x5e2)+'tyle']=_0x3fbe7f?_0x2d0e7c(0x1e5):_0x2d0e7c(0x6ad)+_0x2d0e7c(0x45f)+'35,24'+_0x2d0e7c(0x565)+'5)',_0x2b7168['fillT'+_0x2d0e7c(0x29e)](_0x1c47f1,_0xa1e1dc[_0x2d0e7c(0x494)](_0x4a3c41,_0xa1e1dc[_0x2d0e7c(0x2f7)](_0x3439c5,0x12e+-0x1d45+-0x1*-0x1c19)),_0xa1e1dc[_0x2d0e7c(0x5f4)](_0x2142fe,_0xa1e1dc[_0x2d0e7c(0x199)](_0x404f4e,-0x25a3+0x1cb9+0x8ec))+_0xa1e1dc['rVZNt'](-0x4c+-0xab0+0xb04,_0x286a7f))),_0x349b69['resto'+'re']();};_0x25d44a('W','KeyW',_0x404839+_0x36402f+_0xadf297,_0x3401e6,_0x36402f,_0x36402f),_0x25d44a('A','KeyA',_0x404839,_0x3ae870['JfQgQ'](_0x3401e6,_0x36402f)+_0xadf297,_0x36402f,_0x36402f),_0x3ae870[_0x36d6ae(0x28c)](_0x25d44a,'S',_0x36d6ae(0x578),_0x3ae870['QDCsR'](_0x404839+_0x36402f,_0xadf297),_0x3ae870['DVTJM'](_0x3401e6,_0x36402f)+_0xadf297,_0x36402f,_0x36402f),_0x3ae870[_0x36d6ae(0x28c)](_0x25d44a,'D',_0x36d6ae(0x4a5),_0x404839+_0x3ae870[_0x36d6ae(0x4fd)](_0x3ae870[_0x36d6ae(0x6c5)](_0x36402f,_0xadf297),0x8*-0x2ba+-0x8cd+0x1e9f),_0x3401e6+_0x36402f+_0xadf297,_0x36402f,_0x36402f);var _0x4e4e44=_0x3ae870[_0x36d6ae(0x238)](_0x563f1c-_0xadf297,-0xf52+0x206a+-0x1116),_0x2eeabe=_0x3401e6+_0x3ae870['gvPGU'](_0x3ae870['QDCsR'](_0x36402f,_0xadf297),-0x130f+0x19c3*0x1+-0x6b2);_0x25d44a(_0x3ae870['YySqp'],_0x3ae870['klyOy'],_0x404839,_0x2eeabe,_0x4e4e44,_0x36402f,_0x295f5b['ksCps']?_0x3ae870[_0x36d6ae(0x49e)](_0x39e9f4,-0x1*-0x22ed+0x265f+-0x494b)+_0x3ae870[_0x36d6ae(0x35b)]:''),_0x25d44a(_0x3ae870[_0x36d6ae(0x118)],_0x36d6ae(0x4d0)+'3',_0x3ae870['JfQgQ'](_0x404839+_0x4e4e44,_0xadf297),_0x2eeabe,_0x4e4e44,_0x36402f,_0x13afe0[_0x36d6ae(0x3ff)]?_0x3ae870['LkwjT'](_0xeaa91b(-0x2*-0xd1a+-0x1b8e+-0x1*-0x15d),_0x36d6ae(0x61e)):''),_0x25d44a('',_0x3ae870[_0x36d6ae(0x358)],_0x404839,_0x2eeabe+_0x36402f+_0xadf297,_0x563f1c,_0x36402f*(-0x2675+0x19d6+0x9*0x167+0.45));}else _0x1af488[_0x36d6ae(0x5fe)+'List']['toggl'+'e']('on',_0x1cffc1),_0x13c06b(_0x1cffc1);});_0x45a726['appen'+'d'](_0x46b47a,_0x316b98);}else _0x56eed7(0x151)===_0x1002cb[_0x56eed7(0x4e3)]?_0x45a726[_0x56eed7(0x2c7)+_0x56eed7(0x144)+'d'](_0x46b47a):_0x1772ba[_0x56eed7(0x4f2)](_0x3ae870['EuvZI'],_0x1bed76&&_0x2ce118['messa'+'ge']);_0x1af488[_0x56eed7(0x2c7)+_0x56eed7(0x144)+'d'](_0x45a726);if(_0x2f8dc1&&_0x2f8dc1['lengt'+'h']){var _0x49a7f3=document[_0x56eed7(0x67c)+_0x56eed7(0x209)+'ent'](_0x56eed7(0x146));_0x49a7f3['class'+'Name']=_0x1002cb[_0x56eed7(0x574)];var _0xf00dc3=document[_0x56eed7(0x67c)+'eElem'+_0x56eed7(0x1a0)](_0x1002cb[_0x56eed7(0x667)]);_0xf00dc3['class'+_0x56eed7(0x3c0)]=_0x56eed7(0x1aa)+_0x56eed7(0x3c5),_0xf00dc3['textC'+'onten'+'t']=_0x1fe88d,_0x49a7f3['appen'+'dChil'+'d'](_0xf00dc3);for(var _0xab1c28 of _0x2f8dc1)_0x49a7f3['appen'+_0x56eed7(0x144)+'d'](_0xab1c28);_0x1af488['appen'+'dChil'+'d'](_0x49a7f3);}return _0x1af488;}var _0x49b417=[{'id':_0x3e700b(0x3fe)+'t','label':_0x426004[_0x3e700b(0x10f)]},{'id':'move','label':_0x426004[_0x3e700b(0x197)]},{'id':_0x3e700b(0x2b9)+'l','label':_0x426004[_0x3e700b(0x2fe)]},{'id':_0x426004[_0x3e700b(0x456)],'label':_0x3e700b(0x512)},{'id':_0x426004['nBeSV'],'label':_0x3e700b(0x194)+'y'}];function _0x263be9(){var _0x23a5fb=_0x3e700b,_0x5d1b7b=_0x429068[_0x23a5fb(0x1a5)+'ode']?_0x23a5fb(0x21c)+_0x23a5fb(0x2ab)+_0x23a5fb(0x48e)+_0x23a5fb(0x549)+'only,'+_0x23a5fb(0x3d0)+_0x23a5fb(0x3dc)+_0x23a5fb(0x50e)+_0x23a5fb(0x234)+_0x23a5fb(0x524)+')':_0x429068['uwmk']?_0x426004['SRAHc'](_0x426004[_0x23a5fb(0x4bd)](_0x426004[_0x23a5fb(0x44e)](_0x23a5fb(0x117)+_0x23a5fb(0x460)+'\x20'+(_0x429068['hooks'+'Total']?_0x426004[_0x23a5fb(0x5fb)](_0x429068[_0x23a5fb(0x275)+'Ok'],'/')+_0x429068['hooks'+'Total']+(_0x23a5fb(0x3e4)+'s'):'0\x20hoo'+'ks\x20ar'+_0x23a5fb(0x329)+_0x23a5fb(0x2b6)+_0x23a5fb(0x314)),_0x23a5fb(0x344)+_0x23a5fb(0x252)),_0x429068['gameL'+'oaded']?_0x426004[_0x23a5fb(0x157)]:_0x426004[_0x23a5fb(0x50c)])+(_0x23a5fb(0x293)+_0x23a5fb(0x2a0)+'\x20')+(_0x429068[_0x23a5fb(0x5bc)+_0x23a5fb(0x1b8)]?_0x23a5fb(0x628):_0x23a5fb(0x3b8))+(_0x23a5fb(0x57b)+'vemen'+'t\x20'),_0x429068[_0x23a5fb(0x595)+'ents']?_0x23a5fb(0x628):_0x23a5fb(0x3b8)):'UWMK\x20'+_0x23a5fb(0xca)+_0x23a5fb(0x42c)+_0x23a5fb(0x32b)+_0x23a5fb(0x442)+'ly\x20(r'+_0x23a5fb(0x23e)+'all\x20t'+_0x23a5fb(0x380)+'erscr'+'ipt)';if(_0x429068[_0x23a5fb(0x1ef)+'rror'])_0x5d1b7b+=_0x426004['RmcWd']+_0x429068[_0x23a5fb(0x1ef)+_0x23a5fb(0x1f4)];return _0x426004[_0x23a5fb(0x65d)](_0xd02fc8,_0x426004['cDnCu'],_0x5d1b7b,_0x429068['uwmk'],null,[_0x426004['MoOro'](_0x16e4bc,'240\x20F'+'PS\x20un'+'lock',_0x23a5fb(0x128)+_0x23a5fb(0x539)+_0x23a5fb(0x59b)+'ne.Ap'+'plica'+_0x23a5fb(0x5af)+_0x23a5fb(0x121)+'arget'+_0x23a5fb(0x4bb)+_0x23a5fb(0x34e),_0x5d1073(_0x426004[_0x23a5fb(0x44d)],()=>{var _0x4ed2fa=_0x23a5fb;if(_0x1002cb['CBJoe']('MyVVg',_0x4ed2fa(0x1e7)))try{if(_0x2ad825)_0x2ad825[_0x4ed2fa(0x3e3)](_0x1002cb[_0x4ed2fa(0x152)],_0x1002cb['LHgDL'],[0x1240*0x2+0xa39*0x1+-0x1*0x2dc9]);}catch(_0x36a3fb){}else try{_0x55f5b6[_0x4ed2fa(0x32e)+'em'](_0x4ed2fa(0x4d5)+_0x4ed2fa(0x317)+_0x4ed2fa(0x555),_0x3ce095[_0x4ed2fa(0x5d4)+_0x4ed2fa(0x2dd)](_0x1a516d));}catch(_0x2c299b){}}))]);}function _0x28774e(_0x1a6d0c){var _0x3e452a=_0x3e700b,_0x24152a={'JGKzA':function(_0x264ee5){return _0x264ee5();},'jstCp':function(_0x30df90,_0x2d7044,_0xf50a23){return _0x30df90(_0x2d7044,_0xf50a23);},'gTPFw':_0x3e452a(0x554)+'e','utZaJ':'osRNE','fQPnS':_0x426004[_0x3e452a(0x489)],'DmdAb':_0x3e452a(0x416),'VaDJJ':_0x426004[_0x3e452a(0x680)],'rvJGb':'i32','Ubstp':_0x426004['xzrnh'],'UwSan':function(_0x5670e8){return _0x426004['KsmIN'](_0x5670e8);},'VYFrd':function(_0x55bff9){return _0x55bff9();},'QltQW':'4|2|8'+'|3|5|'+_0x3e452a(0x1cd)+'0|7|9'+'|1','eHvKu':function(_0x598fda,_0x30b878){return _0x598fda(_0x30b878);},'eSYOm':function(_0x765028,_0x4eb3bb){return _0x426004['VTjCl'](_0x765028,_0x4eb3bb);},'kOvoW':_0x3e452a(0x60d)};if(_0x426004['EZfDl'](_0x1a6d0c,_0x426004['aDvlx']))return[_0x263be9(),_0xd02fc8('God\x20M'+_0x3e452a(0x2f5),'Block'+'s\x20OHe'+_0x3e452a(0x364)+_0x3e452a(0x14f)+'ateTa'+_0x3e452a(0x31c)+'lth\x20a'+'nd\x20OH'+'ealth'+'.Loca'+'lDie,'+_0x3e452a(0x3f1)+_0x3e452a(0x49a)+_0x3e452a(0x41a)+'\x20hurt'+_0x3e452a(0x3a7)+'ill\x20y'+_0x3e452a(0x58f),_0x4800f2[_0x3e452a(0x416)],_0xaacfb3=>{var _0x2a41f7=_0x3e452a;_0x4800f2[_0x2a41f7(0x416)]=_0xaacfb3,_0x24152a[_0x2a41f7(0x3d9)](_0x462c94),_0x45ef2a('god',_0xaacfb3),_0x24152a[_0x2a41f7(0x4a9)](_0x45ef2a,_0x24152a[_0x2a41f7(0x5ca)],_0xaacfb3);},[]),_0x426004['MfLvx'](_0xd02fc8,_0x3e452a(0x46a)+'coil',_0x426004[_0x3e452a(0x60f)],_0x4800f2['noRec'+_0x3e452a(0x1a9)],_0x30b1fe=>{var _0x390383=_0x3e452a;if('osRNE'===_0x24152a[_0x390383(0x1b6)])_0x4800f2[_0x390383(0x352)+'oil']=_0x30b1fe,_0x462c94(),_0x24152a['jstCp'](_0x45ef2a,_0x24152a['fQPnS'],_0x30b1fe);else{var _0x55e090=('3|1|5'+_0x390383(0x3a1)+'4')['split']('|'),_0x6d5da0=0xd6b+0x1169+-0x4*0x7b5;while(!![]){switch(_0x55e090[_0x6d5da0++]){case'0':_0x182608();continue;case'1':_0x178556['hookG'+_0x390383(0x273)]=_0x2f78f6;continue;case'2':_0x43124e[_0x390383(0x551)+_0x390383(0x26e)+'e']=_0x422074;continue;case'3':_0x5c8a7a['hookG'+'od']=_0x115ca4;continue;case'4':_0x48fe87[_0x390383(0x135)+'d']();continue;case'5':_0x57672f['hookN'+_0x390383(0x629)+'il']=_0x33c706;continue;}break;}}},[]),_0xd02fc8(_0x3e452a(0x330)+_0x3e452a(0x217),_0x426004[_0x3e452a(0x4ea)],_0x4800f2['noSpr'+'ead'],_0x4fd65e=>{var _0x321834=_0x3e452a;_0x4800f2['noSpr'+_0x321834(0x52e)]=_0x4fd65e,_0x24152a['JGKzA'](_0x462c94);},[]),_0xd02fc8(_0x426004[_0x3e452a(0x3a6)],_0x426004[_0x3e452a(0xf6)],_0x4800f2['rapid'+'Exp'],_0x409d34=>{var _0x25a52a=_0x3e452a,_0x42cb69={'lcXuH':_0x25a52a(0x5ba)+_0x25a52a(0x33a)};if(_0x25a52a(0x26f)!==_0x25a52a(0x26f)){var _0x42fbfb=_0x2a35ae['creat'+'eElem'+_0x25a52a(0x1a0)]('input');return _0x42fbfb[_0x25a52a(0x42b)]=_0x25a52a(0x331),_0x42fbfb['class'+_0x25a52a(0x3c0)]=_0x42cb69[_0x25a52a(0x343)],_0x42fbfb[_0x25a52a(0x4ed)]=/^#[0-9a-f]{6}$/i[_0x25a52a(0x3c7)](_0x48a83d)?_0x5ba416:_0x25a52a(0x375)+'9d',_0x42fbfb[_0x25a52a(0x168)+'ut']=()=>_0x2d05ff(_0x42fbfb[_0x25a52a(0x4ed)]),_0x42fbfb;}else _0x4800f2[_0x25a52a(0x41e)+_0x25a52a(0x584)]=_0x409d34,_0x1002cb[_0x25a52a(0x1e0)](_0x462c94);},[]),_0x426004[_0x3e452a(0x65d)](_0xd02fc8,_0x426004['enLVw'],_0x426004[_0x3e452a(0x20e)],_0x4800f2[_0x3e452a(0x678)+_0x3e452a(0x526)],_0x3fcba4=>{var _0x514b92=_0x3e452a;_0x4800f2['damag'+_0x514b92(0x526)]=_0x3fcba4,_0x462c94();},[_0x16e4bc('Damag'+_0x3e452a(0x585)+'ue',null,_0x426004[_0x3e452a(0x6bc)](_0x527a25,_0x4800f2[_0x3e452a(0x678)+'eValu'+'e'],-0x6ce+0x1*0x1246+0x2*-0x5b7,0xbad+0x25*0xd9+-0x2916,0x1*0x187d+-0x1004+-0x874,_0x294745=>{var _0x1e5c46=_0x3e452a;_0x4800f2[_0x1e5c46(0x678)+_0x1e5c46(0xd4)+'e']=_0x294745,_0x462c94();}))]),_0x426004['MOMkL'](_0xd02fc8,'Infin'+'ite\x20A'+'mmo\x20['+_0x3e452a(0x36d),_0x426004['CQrsp'],_0x4800f2[_0x3e452a(0x17e)+_0x3e452a(0x1c8)],_0x475bee=>{var _0x37d9b9=_0x3e452a,_0x3a35f9={'JSNdg':_0x37d9b9(0x2ea)};if(_0x1002cb[_0x37d9b9(0x52a)](_0x1002cb['wFNrD'],_0x1002cb[_0x37d9b9(0xc8)]))try{var _0x5c39ac=new _0x5c3cb3(_0x2f5765)[_0x37d9b9(0x33c)+_0x37d9b9(0x500)](_0x15f09b,_0x3a35f9[_0x37d9b9(0x39d)]);return _0x5c39ac?_0x5c39ac['val']():0x146a+-0x1*0x1dc1+0x957*0x1;}catch(_0x2d0c5b){return-0x1*0x23cf+-0x1*-0x19e3+0x4*0x27b;}else _0x4800f2[_0x37d9b9(0x17e)+_0x37d9b9(0x1c8)]=_0x475bee,_0x462c94();},[_0x38c84f(_0x3e452a(0x5ec)+'loads'+'\x20stil'+'l\x20dra'+_0x3e452a(0xff)+_0x3e452a(0x622)+_0x3e452a(0x306)+_0x3e452a(0x33d)+_0x3e452a(0x6c6)+'\x20else'+'where'+'.')])];if(_0x1a6d0c===_0x426004[_0x3e452a(0x1b3)])return[_0x426004[_0x3e452a(0x6bf)](_0xd02fc8,_0x3e452a(0x452),'Scale'+'s\x20all'+_0x3e452a(0x38d)+_0x3e452a(0x1ac)+_0x3e452a(0x1c7)+'speed'+'\x20limi'+_0x3e452a(0xc6)+'us\x20ac'+_0x3e452a(0x498)+_0x3e452a(0x140)+'.',_0x4800f2['speed'+_0x3e452a(0x1b5)]!==-0x2225+-0x253a+0x47c3,null,[_0x426004[_0x3e452a(0x532)](_0x16e4bc,_0x3e452a(0x452)+'\x20%','100\x20='+'\x20defa'+_0x3e452a(0x5ce),_0x426004[_0x3e452a(0x3e1)](_0x527a25,_0x4800f2['speed'+_0x3e452a(0x1b5)],-0xc07*0x3+-0x16e+0x25b5,0x234b*-0x1+-0x19eb+-0x1f31*-0x2,-0x1*0x1a51+-0x4*0x1f6+0xa*0x36b,_0x3b8b93=>{_0x4800f2['speed'+'Pct']=_0x3b8b93,_0x462c94();}))]),_0x426004[_0x3e452a(0x3e1)](_0xd02fc8,_0x426004['bBakQ'],_0x3e452a(0x4d9)+_0x3e452a(0x6ac)+_0x3e452a(0x40e)+_0x3e452a(0x4d3)+_0x3e452a(0x3d4)+'\x20and\x20'+_0x3e452a(0x37b)+_0x3e452a(0x147)+_0x3e452a(0x63b)+_0x3e452a(0x5c4),_0x4800f2['jumpP'+'ct']!==-0x2*0x3be+-0x23da+-0x182*-0x1d||_0x426004[_0x3e452a(0x454)](_0x4800f2[_0x3e452a(0x147)+_0x3e452a(0x556)],0x2275+-0xfab+-0x1266),null,[_0x16e4bc(_0x426004['WMErU'],null,_0x426004[_0x3e452a(0x13a)](_0x527a25,_0x4800f2[_0x3e452a(0x651)+'ct'],0x10b0+-0x12*0xfe+-0x7*-0x32,-0x23*-0xf5+-0x40a+0xd*-0x22d,-0x60e+-0x9e*0x6+0x9c7,_0x341e38=>{var _0x150380=_0x3e452a,_0x49de59={'PXsij':_0x150380(0x595)+'ents','qdKef':'Sakur'+'aKour','RgliO':_0x150380(0x221)+'th','cDvbG':_0x150380(0x5e5),'xpCeY':function(_0x15ed60,_0x183930,_0x202d19,_0xea410f,_0x190a38,_0x4acc2f,_0xbfa882,_0x25046f){return _0x15ed60(_0x183930,_0x202d19,_0xea410f,_0x190a38,_0x4acc2f,_0xbfa882,_0x25046f);},'ZBQQR':_0x1002cb[_0x150380(0x3f6)],'gPibr':_0x1002cb[_0x150380(0x3c1)],'HIops':_0x1002cb['HPJPA'],'DXVHs':_0x150380(0x28f),'hryPz':_0x150380(0xfc)+_0x150380(0x3dd)+_0x150380(0x3b4)+_0x150380(0x1ee)+_0x150380(0x107)+_0x150380(0x1ff)+_0x150380(0x1a0)};if(_0x1002cb['khMJA']===_0x1002cb[_0x150380(0x552)])_0x4800f2[_0x150380(0x651)+'ct']=_0x341e38,_0x462c94();else{if(_0x6b7d11['Unity'+_0x150380(0x5d2)+'dkit']&&!_0x3fdeea[_0x150380(0x1a5)+_0x150380(0x2f5)]){_0x1d4a0b=_0xd0442d['Unity'+_0x150380(0x5d2)+_0x150380(0x669)][_0x150380(0x3e7)+_0x150380(0xd7)+'er'],_0x162d15=_0x2d0d48['Unity'+'WebMo'+_0x150380(0x669)][_0x150380(0x292)+'me'][_0x150380(0x67c)+'ePlug'+'in']({'name':_0x49de59['qdKef'],'version':_0x150380(0xe3),'referencedAssemblies':[_0x150380(0xdc)+_0x150380(0x6b2)+'Sharp'+_0x150380(0x1d8)]});if(_0x3ea187['hookG'+'od'])_0x5d803d('god',_0x49de59[_0x150380(0x3da)],_0x150380(0x14f)+'ateTa'+'keHea'+_0x150380(0x1f9),[_0x150380(0x5e5),_0x49de59['cDvbG']],_0x5f5400,_0x4bcf9c,!!_0x43dd9b[_0x150380(0x416)]);if(_0x4f3326[_0x150380(0x120)+'odDie'])_0x49de59[_0x150380(0x405)](_0x3e06c7,_0x49de59[_0x150380(0x415)],'OHeal'+'th',_0x150380(0x424)+_0x150380(0x6c7),[_0x49de59['cDvbG'],_0x150380(0x5e5),'i32',_0x49de59[_0x150380(0x385)],_0x150380(0x5e5)],_0x23cea2,_0x206263,!!_0x512871[_0x150380(0x416)]);if(_0x2a8779[_0x150380(0x1a3)+_0x150380(0x629)+'il'])_0x4742b0(_0x49de59['gPibr'],_0x49de59['HIops'],_0x49de59['DXVHs'],[_0x49de59[_0x150380(0x385)]],_0x30db7c,_0x1beac5,!!_0x5c89ed[_0x150380(0x352)+'oil']);if(_0x51b19b['hookC'+'aptur'+'e'])_0x5a8bcb(_0x150380(0x127)+'ooter','OShoo'+'ter','SetGa'+_0x150380(0x518)+_0x150380(0x250),[_0x150380(0x5e5),_0x150380(0x5e5)],_0xbd9119,(_0x197b14,_0x42e5d6)=>{var _0x1a738d=_0x150380;_0x42380f(_0x10c0c8,_0x42e5d6,_0x325b8a,_0x1a738d(0x5bc)+_0x1a738d(0x1b8));},!![]);if(_0x328a38['hookC'+_0x150380(0x26e)+'e'])_0x1f80a4(_0x150380(0x5c5)+'ve',_0x49de59['hryPz'],_0x150380(0x2d2)+_0x150380(0x220),['i32'],_0x150380(0x5e5),(_0x54b540,_0x1af79f)=>{_0x4a9f0e(_0x3fd37d,_0x1af79f,_0x45e0b4,_0x49de59['PXsij']);},!![]);}}})),_0x16e4bc(_0x3e452a(0x4d4)+_0x3e452a(0x435),_0x426004['QYwDb'],_0x426004['POKvf'](_0x527a25,_0x4800f2[_0x3e452a(0x147)+_0x3e452a(0x556)],0x205+-0xadc+0x8e1,0x2398+-0x2417+-0x1*-0x147,0x41e*0x1+0x2b+-0x7*0x9c,_0x3a82fc=>{var _0x27af95=_0x3e452a;_0x4800f2[_0x27af95(0x147)+'tyPct']=_0x3a82fc,_0x462c94();}))]),_0x426004[_0x3e452a(0x272)](_0xd02fc8,'Bunny'+_0x3e452a(0x19a),_0x3e452a(0x382)+'s\x20Mov'+'ement'+_0x3e452a(0x533)+_0x3e452a(0x25b)+_0x3e452a(0x2e1)+'o\x20the'+_0x3e452a(0x14e)+_0x3e452a(0x2c3)+'down\x20'+_0x3e452a(0x3c3)+_0x3e452a(0x332)+'ies.',_0x4800f2['bhop'],_0x412b15=>{var _0x1b1e08=_0x3e452a,_0x4e32fe={'lUbyb':'Sakur'+'aKour','ezACv':'1.1.0','rOXDE':'Assem'+'bly-C'+'Sharp'+_0x1b1e08(0x1d8),'Evtbp':_0x24152a[_0x1b1e08(0x48a)],'oLDey':_0x24152a[_0x1b1e08(0x68f)],'WSGOn':function(_0x12d95e,_0x21146b,_0x1a6a48,_0x4f2989,_0x255501,_0xe526ce,_0x325613,_0x5f473e){return _0x12d95e(_0x21146b,_0x1a6a48,_0x4f2989,_0x255501,_0xe526ce,_0x325613,_0x5f473e);},'hUpLI':_0x24152a[_0x1b1e08(0x5ca)],'cQuET':_0x24152a[_0x1b1e08(0x5b4)],'uriUM':_0x24152a[_0x1b1e08(0x45c)],'TyUUs':_0x1b1e08(0x28f),'IxxeO':function(_0x3ee84b,_0xc2b2e0,_0x283ae8,_0x261590,_0x5622f7,_0x31feeb,_0x5c24b7,_0x2a004f){return _0x3ee84b(_0xc2b2e0,_0x283ae8,_0x261590,_0x5622f7,_0x31feeb,_0x5c24b7,_0x2a004f);},'zgpBv':'capMo'+'ve'};if(_0x1b1e08(0x3d8)!==_0x1b1e08(0x472))_0x4800f2['bhop']=_0x412b15,_0x462c94();else{_0x14f70e=_0x36b0ae[_0x1b1e08(0xde)+_0x1b1e08(0x5d2)+_0x1b1e08(0x669)]['Value'+_0x1b1e08(0xd7)+'er'],_0x1311e1=_0xda879e['Unity'+_0x1b1e08(0x5d2)+_0x1b1e08(0x669)]['Runti'+'me']['creat'+_0x1b1e08(0x693)+'in']({'name':_0x4e32fe[_0x1b1e08(0xf0)],'version':_0x4e32fe[_0x1b1e08(0x5cc)],'referencedAssemblies':[_0x4e32fe[_0x1b1e08(0x307)]]});if(_0x45e1ec[_0x1b1e08(0x120)+'od'])_0x5ba125(_0x4e32fe['Evtbp'],_0x4e32fe['oLDey'],_0x1b1e08(0x14f)+'ateTa'+'keHea'+_0x1b1e08(0x1f9),[_0x1b1e08(0x5e5),_0x1b1e08(0x5e5)],_0x3d457d,_0x251a9c,!!_0x8beee3['god']);if(_0x3459bc['hookG'+_0x1b1e08(0x273)])_0x4e32fe[_0x1b1e08(0x20c)](_0x2497fb,_0x4e32fe[_0x1b1e08(0x588)],'OHeal'+'th',_0x1b1e08(0x424)+_0x1b1e08(0x6c7),[_0x1b1e08(0x5e5),_0x4e32fe[_0x1b1e08(0x2e5)],_0x1b1e08(0x5e5),'i32',_0x1b1e08(0x5e5)],_0x4f8175,_0x1dc73e,!!_0x4b4810['god']);if(_0xe2281b[_0x1b1e08(0x1a3)+'oReco'+'il'])_0xe7bfba('noRec'+_0x1b1e08(0x1a9),_0x4e32fe[_0x1b1e08(0x4e2)],_0x4e32fe[_0x1b1e08(0x43f)],[_0x4e32fe[_0x1b1e08(0x2e5)]],_0x451636,_0x59cfd9,!!_0x24cedf[_0x1b1e08(0x352)+_0x1b1e08(0x1a9)]);if(_0x944b74[_0x1b1e08(0x551)+_0x1b1e08(0x26e)+'e'])_0x29cbc9('capSh'+_0x1b1e08(0x2a0),'OShoo'+_0x1b1e08(0x1fe),_0x1b1e08(0x40d)+'meRun'+_0x1b1e08(0x250),['i32','i32'],_0x2935b9,(_0x3d67eb,_0x403b87)=>{var _0x13ea40=_0x1b1e08;_0x4995fc(_0x380d38,_0x403b87,_0x66f041,_0x13ea40(0x5bc)+_0x13ea40(0x1b8));},!![]);if(_0x3f532a['hookC'+_0x1b1e08(0x26e)+'e'])_0x4e32fe['IxxeO'](_0xcb57ff,_0x4e32fe['zgpBv'],_0x1b1e08(0xfc)+'nPlat'+'forms'+'.Over'+_0x1b1e08(0x107)+_0x1b1e08(0x1ff)+'ent','IsGro'+_0x1b1e08(0x220),[_0x1b1e08(0x5e5)],_0x1b1e08(0x5e5),(_0x4c8aec,_0x459bb7)=>{var _0x297092=_0x1b1e08;_0x2bc025(_0x455cc8,_0x459bb7,_0x579a51,_0x297092(0x595)+_0x297092(0x136));},!![]);}},[])];if(_0x1a6d0c==='visua'+'l')return[_0xd02fc8(_0x426004['Wngan'],_0x426004[_0x3e452a(0x363)],_0x4800f2[_0x3e452a(0x313)+'rokes'],_0x10541a=>{var _0x2c86ee=_0x3e452a;_0x1002cb['tDnSs']===_0x2c86ee(0x13f)?(_0x442aec[_0x2c86ee(0x41e)+_0x2c86ee(0x584)]=_0x2e0fc8,_0x55b171()):(_0x4800f2[_0x2c86ee(0x313)+_0x2c86ee(0x627)]=_0x10541a,_0x1002cb['JDxIE'](_0x462c94));},[_0x426004[_0x3e452a(0xd9)](_0x16e4bc,'Posit'+_0x3e452a(0x350),null,_0x9b823d(_0x4800f2[_0x3e452a(0x586)],[['bl',_0x3e452a(0x52d)+_0x3e452a(0x5cd)+'t'],['br',_0x3e452a(0x52d)+'m\x20rig'+'ht'],['ml',_0x426004[_0x3e452a(0x6b9)]]],_0x2c507e=>{_0x4800f2['ksPos']=_0x2c507e,_0x462c94();})),_0x16e4bc(_0x3e452a(0x29b),null,_0x426004['NeKFx'](_0x527a25,_0x4800f2[_0x3e452a(0x1a8)+'le'],0xb*-0x13e+0x235*0xd+-0xf07*0x1+0.6,0x1b4c+-0x1bf*-0x1+-0x1d0a+0.6000000000000001,-0x68c+0x2166+0x2*-0xd6d+0.05,_0x524f0d=>{var _0x4f99ff=_0x3e452a;_0x4800f2['ksSca'+'le']=_0x524f0d,_0x24152a[_0x4f99ff(0x3d9)](_0x462c94);})),_0x16e4bc(_0x3e452a(0x2a3)+_0x3e452a(0x1a7)+'t',null,_0x426004[_0x3e452a(0x6cf)](_0x396b27,_0x4800f2[_0x3e452a(0x3ff)],_0x1f8122=>{var _0x456955=_0x3e452a;_0x4800f2[_0x456955(0x3ff)]=_0x1f8122,_0x24152a[_0x456955(0x2a6)](_0x462c94);}))]),_0xd02fc8(_0x3e452a(0x46b)+_0x3e452a(0x36c),_0x426004[_0x3e452a(0x24a)],_0x4800f2[_0x3e452a(0x691)+'hair'],_0x42e277=>{var _0x4c6e8c=_0x3e452a;_0x1002cb['elmVs']!==_0x1002cb['elmVs']?_0x49e1e7[_0x4c6e8c(0x180)+'ed']=![]:(_0x4800f2['cross'+_0x4c6e8c(0x36c)]=_0x42e277,_0x462c94());},[_0x16e4bc(_0x426004[_0x3e452a(0x1e4)],null,_0x527a25(_0x4800f2[_0x3e452a(0x387)+'e'],0xb4e+-0x1a0e+0xec0+0.5,0x1*-0x25a6+-0x2410+0x49b8+0.5,-0x2*0x62b+-0x10f1+0x1d47+0.1,_0x599bec=>{_0x4800f2['chSiz'+'e']=_0x599bec,_0x462c94();})),_0x16e4bc('Color',null,_0x426004['xsgWj'](_0x3d5a50,_0x4800f2[_0x3e452a(0x353)+'or'],_0xc7938e=>{var _0x2bf643=_0x3e452a;_0x4800f2[_0x2bf643(0x353)+'or']=_0xc7938e,_0x1002cb[_0x2bf643(0x1e0)](_0x462c94);}))]),_0x426004['POKvf'](_0xd02fc8,_0x426004[_0x3e452a(0x264)],_0x3e452a(0x406)+_0x3e452a(0x254)+'y.',_0x4800f2['fps'],null,[_0x16e4bc('FPS\x20c'+_0x3e452a(0x542)+'r',null,_0x426004[_0x3e452a(0x1db)](_0x396b27,_0x4800f2[_0x3e452a(0x4c4)],_0x5c6dd2=>{var _0x322caa=_0x3e452a;_0x4800f2[_0x322caa(0x4c4)]=_0x5c6dd2,_0x24152a['JGKzA'](_0x462c94);})),_0x426004[_0x3e452a(0x605)](_0x38c84f,_0x3e452a(0x64b)+_0x3e452a(0x61c)+_0x3e452a(0x542)+'r:\x20th'+_0x3e452a(0x1e2)+_0x3e452a(0x1e1)+'as\x20no'+_0x3e452a(0x68e)+'isibl'+_0x3e452a(0x434)+'ers\x20t'+_0x3e452a(0x13d)+_0x3e452a(0xe7)+'k\x20on.')])];if(_0x1a6d0c==='misc')return[_0xd02fc8('Adblo'+'ck',_0x426004[_0x3e452a(0x367)],_0x4800f2[_0x3e452a(0xe2)+'ck'],_0x16dcc0=>{var _0x55354b=_0x3e452a;_0x4800f2[_0x55354b(0xe2)+'ck']=_0x16dcc0,_0x24152a[_0x55354b(0xda)](_0x462c94);},[_0x38c84f(_0x426004['NuEWo'])])];return[_0x426004[_0x3e452a(0x597)](_0xd02fc8,_0x3e452a(0x5ea)+'Mode\x20'+'(over'+_0x3e452a(0x3f4)+_0x3e452a(0x2c6),_0x426004[_0x3e452a(0x187)],_0x4800f2['safeM'+'ode'],_0x1c888d=>{var _0x54811a=_0x3e452a;_0x4800f2['safeM'+'ode']=_0x1c888d,_0x462c94(),location[_0x54811a(0x135)+'d']();},[_0x38c84f(_0x426004[_0x3e452a(0x17b)])]),_0xd02fc8(_0x3e452a(0x297)+'risk\x20'+'switc'+'hes',_0x426004[_0x3e452a(0x334)],_0x4800f2[_0x3e452a(0x120)+'od']||_0x4800f2[_0x3e452a(0x120)+'odDie']||_0x4800f2['hookN'+_0x3e452a(0x629)+'il']||_0x4800f2['hookC'+'aptur'+'e'],_0xd0539c=>{var _0x31e596=_0x3e452a;if('xtJiX'===_0x31e596(0x561))_0x4800f2[_0x31e596(0x120)+'od']=_0xd0539c,_0x4800f2['hookG'+'odDie']=_0xd0539c,_0x4800f2[_0x31e596(0x1a3)+_0x31e596(0x629)+'il']=_0xd0539c,_0x4800f2['hookC'+_0x31e596(0x26e)+'e']=_0xd0539c,_0x462c94(),location['reloa'+'d']();else try{_0x15a75b[_0x31e596(0x180)+'ed']=!!_0x4eb1da;}catch(_0x2560bc){}},[_0x38c84f(_0x3e452a(0x58e)+'es\x20on'+'\x20relo'+'ad.'),_0x426004[_0x3e452a(0x56f)](_0x16e4bc,_0x426004[_0x3e452a(0x43a)],null,_0x396b27(_0x4800f2[_0x3e452a(0x120)+'od'],_0x419409=>{var _0x2e4fd3=_0x3e452a;_0x4800f2[_0x2e4fd3(0x120)+'od']=_0x419409,_0x1002cb[_0x2e4fd3(0x5d1)](_0x462c94);})),_0x426004['mwfyC'](_0x16e4bc,_0x426004['txJuI'],null,_0x396b27(_0x4800f2[_0x3e452a(0x120)+'odDie'],_0x306395=>{var _0x3c5a56=_0x3e452a;_0x4800f2[_0x3c5a56(0x120)+_0x3c5a56(0x273)]=_0x306395,_0x462c94();})),_0x16e4bc(_0x426004[_0x3e452a(0x692)],null,_0x426004[_0x3e452a(0x6cf)](_0x396b27,_0x4800f2[_0x3e452a(0x1a3)+'oReco'+'il'],_0x5855fb=>{var _0x16d377=_0x3e452a;_0x4800f2[_0x16d377(0x1a3)+_0x16d377(0x629)+'il']=_0x5855fb,_0x1002cb[_0x16d377(0x560)](_0x462c94);})),_0x426004['GDqmP'](_0x16e4bc,_0x3e452a(0x1b0)+_0x3e452a(0x4cf)+_0x3e452a(0x30e)+'eRunn'+'ing\x20+'+_0x3e452a(0x559)+_0x3e452a(0x11f)+'d)',_0x3e452a(0x68c)+'eats\x20'+_0x3e452a(0x3ef)+_0x3e452a(0x42f)+_0x3e452a(0x53d)+'is',_0x396b27(_0x4800f2[_0x3e452a(0x551)+'aptur'+'e'],_0x215515=>{var _0x1f95d6=_0x3e452a;if('CCKad'===_0x24152a['kOvoW'])_0x4800f2['hookC'+'aptur'+'e']=_0x215515,_0x462c94();else{var _0x7b9926=_0x24152a[_0x1f95d6(0x36e)]['split']('|'),_0x10fe4d=-0x1*0x2557+0x692*0x1+0x1ec5*0x1;while(!![]){switch(_0x7b9926[_0x10fe4d++]){case'0':var _0x34ef91={'left':0x0,'top':0x0,'right':_0x20509f['w'],'bottom':_0xd1a8c5['h'],'width':_0x1da7ce['w'],'height':_0x560f98['h']};continue;case'1':_0x24152a[_0x1f95d6(0x5e6)](_0x3dbad9,_0x34ef91);continue;case'2':_0xca55d2++;continue;case'3':_0x24152a[_0x1f95d6(0x428)](_0x374578,_0x1737c4)>=-0x1*0x21e9+-0x4b*0x3f+0x3652&&(_0x53f13a=_0x872f95['round'](_0x2f2d35*(0x1c15+0x35*0x71+-0x2f92*0x1)/(_0x374578-_0x138b89)),_0xd598b0=0x35c*0x5+0x112*0x13+-0x2a7*0xe,_0x247ebb=_0x374578);continue;case'4':_0x454ab2(_0x3b311f);continue;case'5':_0x24152a[_0x1f95d6(0x2a6)](_0x454a94);continue;case'6':_0xb11b1e[_0x1f95d6(0xfd)+'Rect'](-0x7*0x161+0xd*0x22d+-0x12a2,-0x1fae+0x52*-0x1c+-0x1d9*-0x16,_0x3bdadd['w'],_0x45df76['h']);continue;case'7':if(_0x495657['cross'+'hair'])_0x909dca(_0x34ef91);continue;case'8':var _0x374578=_0x39909a['now']();continue;case'9':if(_0x401322[_0x1f95d6(0x313)+_0x1f95d6(0x627)])_0x2e1f08(_0x34ef91);continue;case'10':_0x24152a[_0x1f95d6(0x2a6)](_0x3f494c);continue;}break;}}}))]),_0x426004['EivyI'](_0xd02fc8,'ACTk\x20'+_0x3e452a(0x1e3)+'r',_0x426004[_0x3e452a(0x167)],_0x4800f2[_0x3e452a(0x593)+_0x3e452a(0x26b)],_0x357972=>{var _0x1d0f7f=_0x3e452a;_0x1002cb['CBJoe']('dRVCc',_0x1002cb[_0x1d0f7f(0x171)])?(_0x4800f2['actkK'+'ill']=_0x357972,_0x462c94()):(_0x3169c3['fps']=_0x147174,_0x3179b8());},[_0x38c84f(_0x426004[_0x3e452a(0x486)],!![])]),_0x426004[_0x3e452a(0x57d)](_0xd02fc8,'Dange'+'r',_0x426004[_0x3e452a(0x2b7)],!![],null,[_0x16e4bc(_0x3e452a(0x2bd)+_0x3e452a(0x31a)+'tting'+'s',null,_0x5d1073(_0x426004['xvpwb'],()=>{_0x4800f2={..._0x63af5d},_0x462c94(),location['reloa'+'d']();}))])];}var _0x3bb244=null;function _0x55bd2f(_0x502722){var _0x502526=_0x3e700b,_0x11b145={'fiWmC':function(_0x602620,_0x4faa88){return _0x1002cb['uUEzy'](_0x602620,_0x4faa88);},'trXiA':_0x1002cb['lldnz'],'CVMuS':_0x1002cb[_0x502526(0x553)],'RCgLl':function(_0x217631,_0x58ac23){return _0x217631(_0x58ac23);}};if('WnBMR'!==_0x502526(0x3d7)){_0x5ee8c7=_0x502722;if(!_0x3bb244){var _0x4c4629=document[_0x502526(0x67c)+'eElem'+'ent']('style');_0x4c4629['textC'+_0x502526(0x105)+'t']=_0xf4ffdb,_0x1a2d80[_0x502526(0x2c7)+'dChil'+'d'](_0x4c4629),_0x3bb244=_0x5bc52f(),_0x1a2d80['appen'+_0x502526(0x144)+'d'](_0x3bb244),requestAnimationFrame(()=>_0x3bb244['class'+_0x502526(0x638)]['add'](_0x502526(0x125)));}_0x3bb244[_0x502526(0x5fe)+_0x502526(0x638)][_0x502526(0xf1)+'e'](_0x1002cb[_0x502526(0x231)],_0x502722);}else{var _0x5269ec=_0x1002cb['tiTNI'][_0x502526(0xf8)]('|'),_0x1554a8=0x1d95+-0x16b4+0x6e1*-0x1;while(!![]){switch(_0x5269ec[_0x1554a8++]){case'0':return _0x3e2df4;case'1':_0x3e2df4[_0x502526(0x64d)+_0x502526(0x57c)+'te']('aria-'+'check'+'ed',_0x4a660f(!!_0x1650e2));continue;case'2':_0x3e2df4['oncli'+'ck']=_0x262e27=>{var _0x5a8ff4=_0x502526;_0x262e27[_0x5a8ff4(0x492)+_0x5a8ff4(0x469)+_0x5a8ff4(0x140)]();var _0x5cb8c5=_0x11b145[_0x5a8ff4(0x504)](_0x3e2df4[_0x5a8ff4(0x670)+_0x5a8ff4(0x57c)+'te'](_0x11b145['trXiA']),_0x11b145[_0x5a8ff4(0x39e)]);_0x3e2df4['setAt'+'tribu'+'te']('aria-'+_0x5a8ff4(0x431)+'ed',_0x11b145['RCgLl'](_0x57749b,_0x5cb8c5)),_0x5612ce(_0x5cb8c5);};continue;case'3':_0x3e2df4[_0x502526(0x42b)]=_0x502526(0x685)+'n';continue;case'4':_0x3e2df4[_0x502526(0x5fe)+'Name']='sk-sw'+_0x502526(0x51d);continue;case'5':var _0x3e2df4=_0x55756c[_0x502526(0x67c)+'eElem'+_0x502526(0x1a0)](_0x502526(0x685)+'n');continue;case'6':_0x3e2df4[_0x502526(0x64d)+'tribu'+'te'](_0x502526(0x21e),_0x1002cb[_0x502526(0x5d0)]);continue;}break;}}}function _0x15a5eb(){var _0x335bee=_0x3e700b;_0x1002cb[_0x335bee(0x226)](_0x55bd2f,!_0x5ee8c7);}function _0x5bc52f(){var _0x352e24=_0x3e700b,_0x106254=document[_0x352e24(0x67c)+'eElem'+'ent'](_0x352e24(0x146));_0x106254[_0x352e24(0x5fe)+_0x352e24(0x3c0)]=_0x1002cb[_0x352e24(0x256)];var _0xce7695=document[_0x352e24(0x67c)+_0x352e24(0x209)+_0x352e24(0x1a0)](_0x352e24(0x436));_0xce7695[_0x352e24(0x5fe)+_0x352e24(0x3c0)]='mn-si'+'de';var _0x421e32=document[_0x352e24(0x67c)+_0x352e24(0x209)+'ent'](_0x1002cb['oHgyE']);_0x421e32[_0x352e24(0x5fe)+'Name']=_0x352e24(0x3c2)+'go',_0x421e32[_0x352e24(0x6cd)+_0x352e24(0x170)]=_0x1002cb['uhdCb'],_0xce7695['appen'+'dChil'+'d'](_0x421e32);var _0x40470=document['creat'+_0x352e24(0x209)+_0x352e24(0x1a0)](_0x352e24(0x146));_0x40470['class'+'Name']=_0x1002cb['UNxVx'];var _0x28f6d5=document['creat'+'eElem'+'ent'](_0x1002cb[_0x352e24(0x451)]);_0x28f6d5[_0x352e24(0x5fe)+_0x352e24(0x3c0)]=_0x1002cb['jTfmD'];var _0x42a1b6=document['creat'+'eElem'+'ent'](_0x352e24(0x146));_0x42a1b6['class'+_0x352e24(0x3c0)]=_0x1002cb['DrZgq'];var _0x456471=document[_0x352e24(0x67c)+_0x352e24(0x209)+'ent']('h2');_0x456471['class'+_0x352e24(0x3c0)]=_0x1002cb[_0x352e24(0x150)],_0x456471[_0x352e24(0x29c)+'onten'+'t']=_0x352e24(0x506)+'a\x20Kou'+'r';var _0x30ae1f=document[_0x352e24(0x67c)+'eElem'+'ent'](_0x352e24(0x67d));_0x30ae1f['class'+_0x352e24(0x3c0)]=_0x352e24(0x191)+'b',_0x30ae1f['textC'+_0x352e24(0x105)+'t']='kours'+'trike'+'.io\x20m'+'enu',_0x42a1b6['appen'+'d'](_0x456471,_0x30ae1f);var _0x52bce0=document[_0x352e24(0x67c)+'eElem'+_0x352e24(0x1a0)]('butto'+'n');_0x52bce0[_0x352e24(0x42b)]=_0x352e24(0x685)+'n',_0x52bce0[_0x352e24(0x5fe)+'Name']=_0x1002cb['huBOr'],_0x52bce0[_0x352e24(0x576)]=_0x1002cb['EfskC'],_0x52bce0[_0x352e24(0x6cd)+_0x352e24(0x170)]='<svg\x20'+'viewB'+_0x352e24(0x298)+_0x352e24(0x569)+'\x2024\x22>'+_0x352e24(0x2f2)+'\x20d=\x22M'+'6\x206l1'+_0x352e24(0x618)+_0x352e24(0x40b)+_0x352e24(0x31f)+_0x352e24(0x432)+'vg>',_0x52bce0['oncli'+'ck']=()=>_0x55bd2f(![]),_0x28f6d5[_0x352e24(0x2c7)+'d'](_0x42a1b6,_0x52bce0);var _0x22222c=document[_0x352e24(0x67c)+'eElem'+_0x352e24(0x1a0)](_0x352e24(0x146));_0x22222c[_0x352e24(0x5fe)+'Name']=_0x1002cb['dsaBM'],_0x40470[_0x352e24(0x2c7)+'d'](_0x28f6d5,_0x22222c),_0x106254['appen'+'d'](_0xce7695,_0x40470);var _0x4eb177=new Map();for(var _0x47645b of _0x49b417){var _0x141217=_0x1002cb[_0x352e24(0x480)]['split']('|'),_0x3ff00e=0x2*0xd0+-0x164e+0x14ae;while(!![]){switch(_0x141217[_0x3ff00e++]){case'0':_0x4eb177[_0x352e24(0x684)](_0x47645b['id'],_0x4d383c);continue;case'1':_0x4d383c[_0x352e24(0x6cd)+_0x352e24(0x170)]=_0x1002cb['xfZAG'](_0x1002cb[_0x352e24(0x1de)]('<smal'+'l>',_0x47645b['label']),_0x352e24(0x49b)+_0x352e24(0x6a0));continue;case'2':_0x4d383c['class'+_0x352e24(0x3c0)]='mn-ta'+'b';continue;case'3':_0x4d383c[_0x352e24(0x368)+'ck']=(_0x470ac9=>()=>_0x49a663(_0x470ac9))(_0x47645b['id']);continue;case'4':_0x4d383c[_0x352e24(0x576)]=_0x47645b[_0x352e24(0x6b5)];continue;case'5':_0x4d383c['type']='butto'+'n';continue;case'6':_0xce7695['appen'+'dChil'+'d'](_0x4d383c);continue;case'7':var _0x4d383c=document['creat'+'eElem'+'ent'](_0x352e24(0x685)+'n');continue;}break;}}function _0x49a663(_0x54009f){var _0x2e236c=_0x352e24,_0x198b03=_0x1002cb['KbvQq']['split']('|'),_0x33e1e5=-0x14d0+-0x13d*-0x19+-0xa25;while(!![]){switch(_0x198b03[_0x33e1e5++]){case'0':_0x7b11ba['cat']=_0x54009f;continue;case'1':_0x1d7796();continue;case'2':var _0xc357a0=_0x49b417[_0x2e236c(0x345)](_0x59ed04=>_0x59ed04['id']===_0x54009f)||_0x49b417[0x1*-0x712+-0x16a+0x21f*0x4];continue;case'3':_0x22222c[_0x2e236c(0x2a4)+_0x2e236c(0x28d)+_0x2e236c(0x647)](..._0x28774e(_0x54009f));continue;case'4':_0x456471[_0x2e236c(0x29c)+_0x2e236c(0x105)+'t']=_0x1002cb[_0x2e236c(0x640)]+_0xc357a0[_0x2e236c(0x6b5)];continue;case'5':for(var [_0x3683bd,_0x1a1647]of _0x4eb177)_0x1a1647['class'+_0x2e236c(0x638)]['toggl'+'e']('activ'+'e',_0x3683bd===_0x54009f);continue;}break;}}return _0x1002cb[_0x352e24(0x4e7)](_0x49a663,_0x7b11ba[_0x352e24(0x5fc)]||_0x1002cb[_0x352e24(0x513)]),_0x1002cb[_0x352e24(0x589)](setInterval,()=>{var _0x5c3c50=_0x352e24;if(!_0x5ee8c7)return;var _0x1207df=_0x22222c[_0x5c3c50(0x5f7)+_0x5c3c50(0x2cb)];for(var _0x527cc4=0x1d+-0xf7f+0x2*0x7b1;_0x1002cb[_0x5c3c50(0x11a)](_0x527cc4,_0x1207df[_0x5c3c50(0x686)+'h']);_0x527cc4++){var _0x22e494=_0x1207df[_0x527cc4][_0x5c3c50(0x391)+_0x5c3c50(0x357)+_0x5c3c50(0x66e)](_0x5c3c50(0x239)+_0x5c3c50(0x2e0));_0x22e494&&(_0x1002cb['CDiEj'](_0x22e494[_0x5c3c50(0x29c)+'onten'+'t'][_0x5c3c50(0x267)+'Of'](_0x1002cb[_0x5c3c50(0x688)]),-0x5f6*-0x6+0x20de+-0xfb*0x46)||_0x22e494[_0x5c3c50(0x29c)+_0x5c3c50(0x105)+'t'][_0x5c3c50(0x267)+'Of'](_0x1002cb[_0x5c3c50(0x165)])===0x1d84+-0x2*0xd42+-0x300)&&(_0x22e494[_0x5c3c50(0x29c)+_0x5c3c50(0x105)+'t']=_0x429068[_0x5c3c50(0x1a5)+_0x5c3c50(0x2f5)]?'SAFE\x20'+'MODE\x20'+'-\x20ove'+'rlay\x20'+_0x5c3c50(0x662)+'\x20no\x20h'+'ooks\x20'+_0x5c3c50(0x50e)+_0x5c3c50(0x234)+_0x5c3c50(0x524)+')':_0x429068[_0x5c3c50(0x2bc)]?_0x1002cb[_0x5c3c50(0x2e6)](_0x1002cb['xfZAG'](_0x1002cb['gLzjF'](_0x1002cb['woWAT']+(_0x429068[_0x5c3c50(0x275)+_0x5c3c50(0x53c)]?_0x1002cb['KZXUV'](_0x1002cb[_0x5c3c50(0x6ba)](_0x429068['hooks'+'Ok'],'/'),_0x429068[_0x5c3c50(0x275)+_0x5c3c50(0x53c)])+_0x1002cb[_0x5c3c50(0x60b)]:'0\x20hoo'+_0x5c3c50(0x19f)+_0x5c3c50(0x329)+_0x5c3c50(0x2b6)+_0x5c3c50(0x314))+(_0x5c3c50(0x344)+'me\x20'),_0x429068[_0x5c3c50(0x37a)+_0x5c3c50(0x18f)]?_0x5c3c50(0x3ca)+'d':_0x5c3c50(0x15e)+'ng')+('\x20|\x20sh'+_0x5c3c50(0x2a0)+'\x20')+(_0x429068['shoot'+'ers']?_0x5c3c50(0x628):_0x5c3c50(0x3b8)),_0x1002cb[_0x5c3c50(0x3a4)]),_0x429068[_0x5c3c50(0x595)+_0x5c3c50(0x136)]?_0x5c3c50(0x628):_0x1002cb[_0x5c3c50(0x186)])+(_0x429068[_0x5c3c50(0x1ef)+'rror']?_0x1002cb[_0x5c3c50(0x440)]+_0x429068['lastE'+'rror']:''):_0x5c3c50(0x117)+'MISSI'+'NG\x20-\x20'+'overl'+_0x5c3c50(0x442)+_0x5c3c50(0x665)+_0x5c3c50(0x23e)+_0x5c3c50(0x594)+'he\x20us'+_0x5c3c50(0x388)+_0x5c3c50(0x249));}},0x1e86*0x1+-0x17da*-0x1+-0x11*0x2f8),_0x106254;}var _0xf4ffdb=_0x3e700b(0xfa)+':host'+_0x3e700b(0x366)+_0x3e700b(0x47c)+'itial'+';\x20}\x0a\x20'+_0x3e700b(0x617)+'{\x20box'+_0x3e700b(0x6b4)+_0x3e700b(0x441)+_0x3e700b(0x534)+_0x3e700b(0x5eb)+'\x20marg'+'in:\x200'+_0x3e700b(0x2be)+_0x3e700b(0x347)+_0x3e700b(0x35d)+_0x3e700b(0x453)+_0x3e700b(0xeb)+'Segoe'+_0x3e700b(0x477)+_0x3e700b(0x1b7)+'em-ui'+_0x3e700b(0x243)+_0x3e700b(0x4d1)+_0x3e700b(0x3c6)+_0x3e700b(0xfa)+_0x3e700b(0x55b)+'anel\x20'+_0x3e700b(0x16f)+_0x3e700b(0x42d)+':\x20abs'+_0x3e700b(0x12e)+';\x20rig'+_0x3e700b(0x19c)+'4px;\x20'+_0x3e700b(0x6ca)+_0x3e700b(0x682)+_0x3e700b(0x6c2)+'idth:'+'\x20min('+_0x3e700b(0x61d)+_0x3e700b(0x616)+_0x3e700b(0x303)+'vw\x20-\x20'+'48px)'+');\x20ma'+_0x3e700b(0x17c)+'ght:\x20'+_0x3e700b(0x5f6)+_0x3e700b(0x149)+'\x20calc'+_0x3e700b(0x5da)+_0x3e700b(0x4eb)+_0x3e700b(0x4f9)+_0x3e700b(0x44c)+'\x20\x20\x20di'+'splay'+':\x20fle'+_0x3e700b(0x166)+'p:\x2010'+'px;\x20p'+_0x3e700b(0x2e9)+'g:\x2010'+_0x3e700b(0x46f)+'order'+'-radi'+'us:\x202'+'2px;\x20'+_0x3e700b(0x4a4)+_0x3e700b(0x464)+_0x3e700b(0x606)+'\x20auto'+_0x3e700b(0x44c)+'\x20\x20\x20ba'+_0x3e700b(0x174)+_0x3e700b(0x4b5)+'rgba('+'24,17'+',21,.'+_0x3e700b(0x66a)+'backd'+'rop-f'+'ilter'+_0x3e700b(0x119)+'r(22p'+'x)\x20sa'+_0x3e700b(0x38b)+_0x3e700b(0x53b)+'%);\x20-'+_0x3e700b(0x1be)+_0x3e700b(0x340)+_0x3e700b(0x44a)+_0x3e700b(0x225)+'er:\x20b'+_0x3e700b(0x54d)+'2px)\x20'+'satur'+_0x3e700b(0x592)+'50%);'+_0x3e700b(0xfa)+'\x20\x20box'+'-shad'+'ow:\x200'+_0x3e700b(0x55e)+'1px\x20r'+_0x3e700b(0x5df)+'55,25'+'5,255'+_0x3e700b(0x4f5)+_0x3e700b(0x2de)+_0x3e700b(0x61b)+'1px\x200'+_0x3e700b(0x2d0)+_0x3e700b(0x56c)+'255,2'+_0x3e700b(0x2e8)+_0x3e700b(0x683)+'\x2030px'+_0x3e700b(0x38c)+'\x20rgba'+_0x3e700b(0x567)+'0,.55'+_0x3e700b(0x2db)+_0x3e700b(0x3ba)+_0x3e700b(0x413)+'y:\x200;'+_0x3e700b(0x131)+'sform'+_0x3e700b(0x62f)+_0x3e700b(0x626)+_0x3e700b(0x38a)+_0x3e700b(0x296)+_0x3e700b(0x4a4)+'er-ev'+'ents:'+_0x3e700b(0x2fd)+_0x3e700b(0x1d5)+'nsiti'+'on:\x20o'+_0x3e700b(0x413)+_0x3e700b(0x69b)+'s\x20eas'+_0x3e700b(0x25a)+'ansfo'+_0x3e700b(0x38f)+_0x3e700b(0x49d)+_0x3e700b(0x57f)+_0x3e700b(0x62b)+_0x3e700b(0x2bb)+'1,.36'+_0x3e700b(0x6cc)+_0x3e700b(0x42a)+'\x20colo'+_0x3e700b(0x445)+'6eef2'+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x3e700b(0x55b)+'anel.'+'shown'+_0x3e700b(0x11e)+_0x3e700b(0x3e5)+':\x201;\x20'+'trans'+_0x3e700b(0x48f)+_0x3e700b(0x2fd)+';\x20poi'+_0x3e700b(0x57e)+_0x3e700b(0x501)+_0x3e700b(0x623)+_0x3e700b(0x1f0)+'\x0a\x20\x20\x20\x20'+'.mn-s'+'ide\x20{'+_0x3e700b(0x6aa)+_0x3e700b(0x1e8)+_0x3e700b(0x3b5)+_0x3e700b(0x122)+_0x3e700b(0x411)+'ction'+_0x3e700b(0xdd)+_0x3e700b(0x598)+_0x3e700b(0x207)+'-item'+_0x3e700b(0x690)+'nter;'+_0x3e700b(0x4fe)+'\x204px;'+'\x20widt'+_0x3e700b(0x12f)+_0x3e700b(0x3bd)+_0x3e700b(0x109)+_0x3e700b(0x39c)+_0x3e700b(0x18d)+_0x3e700b(0x63d)+'12px\x20'+(_0x3e700b(0x32d)+'rder-'+'radiu'+_0x3e700b(0x365)+'px;\x0a\x20'+_0x3e700b(0x42a)+_0x3e700b(0x3b7)+'round'+':\x20rgb'+'a(255'+',255,'+_0x3e700b(0x587)+_0x3e700b(0x393)+_0x3e700b(0x507)+'shado'+_0x3e700b(0x251)+_0x3e700b(0x656)+_0x3e700b(0x55e)+'1px\x20r'+'gba(2'+'55,25'+'5,255'+_0x3e700b(0x59e)+_0x3e700b(0x311)+_0x3e700b(0x430)+_0x3e700b(0x4c0)+_0x3e700b(0x51c)+'ispla'+'y:\x20gr'+_0x3e700b(0x11d)+_0x3e700b(0x679)+_0x3e700b(0x5c3)+_0x3e700b(0x1d6)+_0x3e700b(0x5d9)+'width'+_0x3e700b(0x222)+_0x3e700b(0x259)+_0x3e700b(0x33b)+_0x3e700b(0x2b8)+_0x3e700b(0x311)+_0x3e700b(0x430)+_0x3e700b(0x4c0)+_0x3e700b(0x2ae)+_0x3e700b(0x2c9)+'dth:\x20'+'25px;'+_0x3e700b(0x295)+'ht:\x202'+_0x3e700b(0x66b)+'overf'+_0x3e700b(0x59d)+'visib'+_0x3e700b(0x5b3)+'ilter'+_0x3e700b(0x4db)+'p-sha'+_0x3e700b(0x21a)+_0x3e700b(0x355)+_0x3e700b(0x5c0)+'a(255'+',107,'+'157,.'+_0x3e700b(0x278)+_0x3e700b(0x545)+'\x20.mn-'+'tab\x20{'+_0x3e700b(0x6aa)+_0x3e700b(0x1e8)+_0x3e700b(0x3b5)+_0x3e700b(0x4ba)+'n-ite'+_0x3e700b(0x39b)+'enter'+_0x3e700b(0x2d8)+_0x3e700b(0x1d9)+_0x3e700b(0x4c3)+'nt:\x20c'+'enter'+';\x20wid'+_0x3e700b(0x50b)+_0x3e700b(0x403)+_0x3e700b(0x695)+_0x3e700b(0x62e)+'px;\x20b'+_0x3e700b(0x534)+_0x3e700b(0x1df)+_0x3e700b(0x1fb)+_0x3e700b(0x29d)+'ius:\x20'+_0x3e700b(0x25f)+_0x3e700b(0xfa)+_0x3e700b(0x615)+_0x3e700b(0x488)+_0x3e700b(0x614)+_0x3e700b(0x50a)+'arent'+_0x3e700b(0x400)+_0x3e700b(0x1ab)+_0x3e700b(0x5df)+'46,23'+'8,242'+',.4);'+_0x3e700b(0x2fc)+'or:\x20p'+_0x3e700b(0x1bf)+'r;\x20fo'+_0x3e700b(0x389)+'ze:\x201'+_0x3e700b(0x154)+'font-'+_0x3e700b(0x338)+'t:\x2070'+_0x3e700b(0x600)+'\x20\x20\x20\x20.'+_0x3e700b(0x56e)+'b:hov'+_0x3e700b(0x182)+_0x3e700b(0x331)+_0x3e700b(0x372)+_0x3e700b(0x5db)+_0x3e700b(0x5d3)+'242,.'+_0x3e700b(0x5a9)+_0x3e700b(0xfa)+_0x3e700b(0x603)+_0x3e700b(0xc1)+'tive\x20'+_0x3e700b(0x612)+'or:\x20#'+'ff6b9'+_0x3e700b(0x490)+'ckgro'+_0x3e700b(0x4b5)+_0x3e700b(0x6ad)+'255,1'+_0x3e700b(0x455)+_0x3e700b(0x5d7)+_0x3e700b(0x311)+'\x20\x20\x20.m'+_0x3e700b(0x156)+_0x3e700b(0x571)+'lex:\x20'+'1;\x20mi'+_0x3e700b(0x16d)+'th:\x200'+';\x20dis'+_0x3e700b(0x247)+'\x20flex'+_0x3e700b(0x2bf)+'x-dir'+'ectio'+'n:\x20co'+'lumn;'+'\x20}\x0a\x20\x20'+_0x3e700b(0x41f)+'-top\x20'+_0x3e700b(0x202)+'play:'+'\x20flex'+_0x3e700b(0x433)+_0x3e700b(0x41b)+'ems:\x20'+_0x3e700b(0x28b)+'r;\x20ga'+_0x3e700b(0x631)+_0x3e700b(0xea)+_0x3e700b(0x2e9)+_0x3e700b(0x132)+_0x3e700b(0x1ba)+'\x2012px'+';\x20use'+_0x3e700b(0x3ea)+_0x3e700b(0x3cd)+_0x3e700b(0x39c)+'\x20}\x0a\x20\x20'+_0x3e700b(0x41f)+_0x3e700b(0x245)+_0x3e700b(0x69c)+_0x3e700b(0x1f7)+'\x201;\x20m'+'in-wi'+_0x3e700b(0x4a8)+'0;\x20}\x0a'+_0x3e700b(0x14a)+_0x3e700b(0x50d)+'{\x20fon'+_0x3e700b(0x22a)+_0x3e700b(0x69d)+'px;\x20f'+'ont-w'+'eight'+':\x20650'+_0x3e700b(0x311)+_0x3e700b(0x430)+_0x3e700b(0x409)+'\x20{\x20fo'+_0x3e700b(0x389)+_0x3e700b(0x511)+_0x3e700b(0x562)+_0x3e700b(0x54e))+(_0x3e700b(0x237)+'4;\x20}\x0a'+_0x3e700b(0x14a)+'mn-cl'+'ose\x20{'+'\x20disp'+_0x3e700b(0x1e8)+_0x3e700b(0x2b5)+_0x3e700b(0xe9)+_0x3e700b(0x56b)+_0x3e700b(0x39b)+_0x3e700b(0x6c0)+';\x20wid'+_0x3e700b(0x4ab)+_0x3e700b(0x20f)+_0x3e700b(0x695)+'t:\x2028'+'px;\x20b'+_0x3e700b(0x534)+':\x200;\x20'+_0x3e700b(0x1fb)+_0x3e700b(0x29d)+_0x3e700b(0x294)+_0x3e700b(0x20f)+_0x3e700b(0x3b7)+'round'+_0x3e700b(0x62f)+_0x3e700b(0x4bc)+'ent;\x20'+_0x3e700b(0x331)+_0x3e700b(0x201)+_0x3e700b(0x557)+'\x20opac'+'ity:\x20'+'.45;\x20'+'curso'+'r:\x20po'+_0x3e700b(0x253)+';\x20}\x0a\x20'+_0x3e700b(0x430)+'n-clo'+_0x3e700b(0x6a3)+'ver\x20{'+_0x3e700b(0x22f)+'ity:\x20'+'1;\x20ba'+'ckgro'+'und:\x20'+_0x3e700b(0x6ad)+'255,2'+_0x3e700b(0x4e0)+_0x3e700b(0x4b0)+');\x20}\x0a'+_0x3e700b(0x14a)+'mn-cl'+'ose\x20s'+'vg\x20{\x20'+_0x3e700b(0x4e9)+_0x3e700b(0x52c)+'x;\x20he'+'ight:'+'\x2014px'+_0x3e700b(0x289)+'l:\x20no'+_0x3e700b(0x6cb)+_0x3e700b(0x2e7)+':\x20cur'+_0x3e700b(0x204)+_0x3e700b(0x356)+_0x3e700b(0x528)+_0x3e700b(0x2a2)+_0x3e700b(0x4a8)+'2;\x20st'+'roke-'+_0x3e700b(0x124)+_0x3e700b(0x179)+_0x3e700b(0x2ec)+_0x3e700b(0x37e)+_0x3e700b(0x41f)+'-cols'+'\x20{\x20fl'+_0x3e700b(0x466)+_0x3e700b(0x1f2)+'-heig'+_0x3e700b(0x3a9)+_0x3e700b(0x18b)+_0x3e700b(0x148)+'-y:\x20a'+_0x3e700b(0x613)+'displ'+_0x3e700b(0x657)+'rid;\x20'+_0x3e700b(0x2cf)+'templ'+'ate-c'+'olumn'+_0x3e700b(0x5ab)+_0x3e700b(0x232)+_0x3e700b(0x4a2)+'fill,'+_0x3e700b(0xe6)+_0x3e700b(0x630)+'0px,\x20'+_0x3e700b(0x636)+_0x3e700b(0x433)+_0x3e700b(0x41b)+_0x3e700b(0x64e)+_0x3e700b(0x30b)+_0x3e700b(0x433)+_0x3e700b(0x2d9)+'ntent'+_0x3e700b(0x474)+_0x3e700b(0x196)+_0x3e700b(0x32c)+_0x3e700b(0x154)+'paddi'+_0x3e700b(0x608)+'\x204px\x20'+_0x3e700b(0x44f)+_0x3e700b(0x311)+_0x3e700b(0x430)+_0x3e700b(0x4dd)+'s::-w'+'ebkit'+_0x3e700b(0x244)+'llbar'+'\x20{\x20wi'+'dth:\x20'+'8px;\x20'+_0x3e700b(0x545)+_0x3e700b(0x17a)+_0x3e700b(0x3ed)+_0x3e700b(0x673)+_0x3e700b(0x3cc)+_0x3e700b(0x46d)+_0x3e700b(0x62d)+'humb\x20'+_0x3e700b(0x3a8)+_0x3e700b(0x488)+'nd:\x20r'+_0x3e700b(0x5df)+'55,25'+'5,255'+_0x3e700b(0x4f7)+_0x3e700b(0x123)+_0x3e700b(0x624)+'adius'+':\x204px'+_0x3e700b(0x311)+'\x20\x20\x20.s'+'k-car'+_0x3e700b(0x4b8)+'order'+_0x3e700b(0x3e2)+_0x3e700b(0x5fa)+_0x3e700b(0x403)+'backg'+_0x3e700b(0x476)+':\x20rgb'+'a(255'+',255,'+'255,.'+'025);'+'\x20box-'+_0x3e700b(0x503)+_0x3e700b(0x251)+_0x3e700b(0x656)+_0x3e700b(0x55e)+_0x3e700b(0x102)+_0x3e700b(0x5df)+_0x3e700b(0x4e0)+_0x3e700b(0x381)+_0x3e700b(0x59e)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x3e700b(0x2cd)+'d.on\x20'+'{\x20bac'+_0x3e700b(0x488)+'nd:\x20r'+_0x3e700b(0x5df)+'55,25'+_0x3e700b(0x381)+_0x3e700b(0x3cb)+';\x20box'+'-shad'+_0x3e700b(0xc9)+'nset\x20'+_0x3e700b(0x642)+'\x201px\x20'+_0x3e700b(0x6ad)+'255,1'+'07,15'+'7,.28'+_0x3e700b(0x263)+_0x3e700b(0x14a)+_0x3e700b(0x438)+_0x3e700b(0x193)+'ad\x20{\x20'+'displ')+('ay:\x20f'+_0x3e700b(0x12a)+_0x3e700b(0x207)+'-item'+_0x3e700b(0x690)+_0x3e700b(0x646)+_0x3e700b(0x4fe)+'\x208px;'+_0x3e700b(0x18d)+'ing:\x20'+'11px\x20'+_0x3e700b(0x110)+_0x3e700b(0x37e)+_0x3e700b(0x210)+_0x3e700b(0x4e5)+_0x3e700b(0x245)+'e\x20{\x20f'+_0x3e700b(0x109)+'1;\x20mi'+_0x3e700b(0x16d)+'th:\x200'+_0x3e700b(0x311)+'\x20\x20\x20.s'+'k-car'+_0x3e700b(0x5b1)+_0x3e700b(0x3a5)+'rong\x20'+_0x3e700b(0x1c3)+_0x3e700b(0x22a)+_0x3e700b(0x17d)+_0x3e700b(0x3bd)+_0x3e700b(0x31e)+_0x3e700b(0x64a)+_0x3e700b(0x301)+_0x3e700b(0x400)+_0x3e700b(0x1ab)+'gba(2'+_0x3e700b(0xd8)+'8,242'+',.45)'+_0x3e700b(0x311)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x3e700b(0x2f9)+_0x3e700b(0x246)+_0x3e700b(0x139)+_0x3e700b(0x5a0)+'g\x20{\x20c'+'olor:'+_0x3e700b(0x619)+_0x3e700b(0x5f0)+_0x3e700b(0x545)+'\x20.sk-'+'mbody'+_0x3e700b(0x1af)+_0x3e700b(0x37f)+_0x3e700b(0x133)+_0x3e700b(0x2d1)+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x3e700b(0x2e3)+_0x3e700b(0x429)+_0x3e700b(0x408)+_0x3e700b(0x389)+_0x3e700b(0x511)+'1px;\x20'+_0x3e700b(0x54e)+_0x3e700b(0x237)+_0x3e700b(0x12d)+_0x3e700b(0x13c)+'botto'+'m:\x206p'+_0x3e700b(0x1d0)+_0x3e700b(0x14a)+_0x3e700b(0xed)+_0x3e700b(0xd2)+_0x3e700b(0x40c)+'y:\x20fl'+'ex;\x20a'+_0x3e700b(0x47a)+'items'+_0x3e700b(0x1d6)+_0x3e700b(0x5d9)+'gap:\x20'+_0x3e700b(0x20f)+'paddi'+_0x3e700b(0x159)+_0x3e700b(0x35e)+'\x20font'+'-size'+_0x3e700b(0x4f0)+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x3e700b(0x2e3)+_0x3e700b(0x6b5)+'\x20{\x20fl'+'ex:\x201'+_0x3e700b(0x400)+'or:\x20r'+_0x3e700b(0x5df)+_0x3e700b(0xd8)+_0x3e700b(0x483)+_0x3e700b(0x4c6)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x3e700b(0x5a7)+'ispla'+_0x3e700b(0x3b9)+_0x3e700b(0x2e2)+_0x3e700b(0x33e)+'size:'+_0x3e700b(0x276)+_0x3e700b(0x5f8)+'city:'+_0x3e700b(0x129)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+'h\x20{\x20p'+_0x3e700b(0x45d)+'on:\x20r'+_0x3e700b(0x1a1)+_0x3e700b(0x48b)+'idth:'+'\x2026px'+_0x3e700b(0x371)+_0x3e700b(0x48c)+_0x3e700b(0x12c)+_0x3e700b(0x3db)+_0x3e700b(0x517)+_0x3e700b(0x123)+'der-r'+'adius'+_0x3e700b(0xd5)+_0x3e700b(0x423)+'ckgro'+_0x3e700b(0x4b5)+_0x3e700b(0x6ad)+'255,2'+_0x3e700b(0x4e0)+_0x3e700b(0x266)+_0x3e700b(0x632)+_0x3e700b(0x1b4)+_0x3e700b(0x20d)+'ter;\x20'+'flex:'+_0x3e700b(0x2fd)+_0x3e700b(0x311)+'\x20\x20\x20.s'+_0x3e700b(0x699)+_0x3e700b(0x14d)+_0x3e700b(0x10a)+_0x3e700b(0x3f3)+_0x3e700b(0x111)+':\x20\x22\x22;'+'\x20posi'+_0x3e700b(0x6a4)+'\x20abso'+_0x3e700b(0x4df)+_0x3e700b(0x521)+'\x203px;'+_0x3e700b(0xce)+_0x3e700b(0x4c8)+_0x3e700b(0x24d)+'th:\x208'+_0x3e700b(0x67e)+'eight'+_0x3e700b(0x4a1)+_0x3e700b(0x123)+'der-r'+_0x3e700b(0x414)+_0x3e700b(0x2d6)+_0x3e700b(0x2d4)+'kgrou'+_0x3e700b(0x177)+_0x3e700b(0x5df)+_0x3e700b(0x4e0)+'5,255'+_0x3e700b(0x64f)+';\x20tra'+_0x3e700b(0x2c0)+'on:\x20l'+'eft\x20.'+'2s,\x20b'+_0x3e700b(0x4fc)+_0x3e700b(0x12b)+'.2s;\x20'+_0x3e700b(0x545)+'\x20.sk-'+_0x3e700b(0x4b4)+'h[ari'+_0x3e700b(0x126)+'cked='+'\x22true'+'\x22]\x20{\x20'+_0x3e700b(0x3b7)+_0x3e700b(0x476)+_0x3e700b(0x372))+('a(255'+_0x3e700b(0x6b1)+_0x3e700b(0x3c8)+'25);\x20'+'}\x0a\x20\x20\x20'+_0x3e700b(0x2e3)+_0x3e700b(0x4b4)+'h[ari'+_0x3e700b(0x126)+_0x3e700b(0x349)+_0x3e700b(0x3bc)+_0x3e700b(0x1eb)+_0x3e700b(0x5cb)+_0x3e700b(0x130)+_0x3e700b(0x24f)+_0x3e700b(0x46f)+_0x3e700b(0x4fc)+_0x3e700b(0x342)+_0x3e700b(0x164)+_0x3e700b(0x3d1)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3e700b(0x35f)+_0x3e700b(0x6a9)+_0x3e700b(0x174)+'und:\x20'+_0x3e700b(0x6ad)+'255,2'+_0x3e700b(0x4e0)+_0x3e700b(0x15b)+_0x3e700b(0x633)+'order'+_0x3e700b(0x1df)+_0x3e700b(0x1fb)+'r-rad'+'ius:\x20'+_0x3e700b(0x68b)+_0x3e700b(0x331)+_0x3e700b(0x696)+_0x3e700b(0x34d)+_0x3e700b(0x18d)+_0x3e700b(0x63d)+_0x3e700b(0x2dc)+'px;\x20f'+'ont-s'+_0x3e700b(0x550)+'11.5p'+'x;\x20ou'+'tline'+':\x20non'+_0x3e700b(0x172)+'x-sha'+'dow:\x20'+_0x3e700b(0x672)+_0x3e700b(0x55e)+_0x3e700b(0xd6)+_0x3e700b(0x2d0)+_0x3e700b(0x56c)+_0x3e700b(0x45f)+'55,.0'+'5);\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x3e700b(0x437)+_0x3e700b(0x5dd)+_0x3e700b(0x25d)+_0x3e700b(0x4fc)+'ound:'+_0x3e700b(0xe4)+_0x3e700b(0x543)+_0x3e700b(0x545)+_0x3e700b(0x2e3)+'range'+_0x3e700b(0x291)+_0x3e700b(0x158)+':\x20fle'+_0x3e700b(0x52f)+_0x3e700b(0x601)+_0x3e700b(0xcd)+_0x3e700b(0x115)+'er;\x20g'+'ap:\x208'+'px;\x20}'+_0x3e700b(0xfa)+'.sk-s'+_0x3e700b(0x446)+_0x3e700b(0x2b1)+_0x3e700b(0x5a3)+_0x3e700b(0x24e)+_0x3e700b(0x62c)+'e:\x20no'+'ne;\x20a'+_0x3e700b(0x63a)+_0x3e700b(0x312)+_0x3e700b(0x2fd)+';\x20wid'+_0x3e700b(0x51a)+'0px;\x20'+_0x3e700b(0x695)+'t:\x208p'+_0x3e700b(0x423)+'ckgro'+_0x3e700b(0x4b5)+_0x3e700b(0x224)+_0x3e700b(0x65b)+_0x3e700b(0x10c)+'\x20\x20\x20\x20.'+_0x3e700b(0x11c)+'ider:'+_0x3e700b(0x673)+_0x3e700b(0x3cc)+_0x3e700b(0x446)+_0x3e700b(0x637)+_0x3e700b(0x50f)+'track'+'\x20{\x20he'+'ight:'+'\x202px;'+_0x3e700b(0x3db)+'er-ra'+'dius:'+'\x202px;'+_0x3e700b(0x1c5)+_0x3e700b(0x114)+_0x3e700b(0x478)+'near-'+'gradi'+_0x3e700b(0x319)+_0x3e700b(0x6af)+_0x3e700b(0x45b)+_0x3e700b(0x487)+')\x200\x200'+_0x3e700b(0x328)+_0x3e700b(0x1ed)+',\x2050%'+_0x3e700b(0x5ee)+'%\x20no-'+_0x3e700b(0x4ad)+'t,\x20rg'+_0x3e700b(0x3c4)+'5,255'+_0x3e700b(0x2a8)+_0x3e700b(0x1bd)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x3e700b(0x426)+_0x3e700b(0x5d5)+_0x3e700b(0x1be)+_0x3e700b(0x499)+_0x3e700b(0x22b)+'humb\x20'+_0x3e700b(0x463)+'bkit-'+_0x3e700b(0x27a)+_0x3e700b(0x698)+':\x20non'+_0x3e700b(0x5b2)+_0x3e700b(0x4a8)+_0x3e700b(0x68b)+'heigh'+_0x3e700b(0x2f4)+_0x3e700b(0x57a)+_0x3e700b(0x13c)+'top:\x20'+'-2px;'+_0x3e700b(0x3db)+'er-ra'+'dius:'+_0x3e700b(0x468)+'\x20back'+_0x3e700b(0x114)+'d:\x20#f'+_0x3e700b(0x487)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-val'+_0x3e700b(0x408)+'nt-si'+_0x3e700b(0x511)+'1px;\x20'+'font-'+'weigh'+'t:\x2060'+_0x3e700b(0x5bf)+_0x3e700b(0x16d)+_0x3e700b(0x4ab)+'8px;\x20'+_0x3e700b(0x241)+_0x3e700b(0x207)+_0x3e700b(0x145)+_0x3e700b(0x5e3)+'olor:'+_0x3e700b(0x2d0)+_0x3e700b(0x5b8)+'238,2'+_0x3e700b(0xef)+_0x3e700b(0x263)+_0x3e700b(0x14a)+_0x3e700b(0x5ba)+_0x3e700b(0x58d))+(_0x3e700b(0x3f8)+'h:\x2034'+_0x3e700b(0x67e)+_0x3e700b(0x64a)+':\x2022p'+_0x3e700b(0x134)+_0x3e700b(0x3ad)+'\x200;\x20b'+_0x3e700b(0x534)+'-radi'+_0x3e700b(0x1c2)+_0x3e700b(0x46f)+_0x3e700b(0x4fc)+_0x3e700b(0x342)+_0x3e700b(0x2fd)+_0x3e700b(0x449)+_0x3e700b(0x398)+'\x200;\x20c'+_0x3e700b(0x599)+_0x3e700b(0x3be)+_0x3e700b(0x646)+_0x3e700b(0x37e)+'\x20\x20.sk'+_0x3e700b(0x23c)+'\x20{\x20fo'+'nt-si'+_0x3e700b(0x511)+'1px;\x20'+_0x3e700b(0x331)+_0x3e700b(0x372)+'a(246'+',238,'+_0x3e700b(0x591)+'5);\x20p'+'addin'+'g:\x202p'+_0x3e700b(0x11b)+_0x3e700b(0x545)+'\x20.sk-'+_0x3e700b(0x262)+'err\x20{'+_0x3e700b(0x336)+_0x3e700b(0x445)+'f7a93'+';\x20}\x0a\x20'+_0x3e700b(0x67a)+_0x3e700b(0x5c7)+_0x3e700b(0x366)+_0x3e700b(0x1ae)+'elf:\x20'+'flex-'+'start'+';\x20bor'+_0x3e700b(0x3a3)+'0;\x20bo'+_0x3e700b(0xc4)+'radiu'+'s:\x208p'+_0x3e700b(0x4aa)+_0x3e700b(0x37f)+_0x3e700b(0x4a1)+'\x2016px'+_0x3e700b(0x2d4)+_0x3e700b(0x488)+_0x3e700b(0x58c)+_0x3e700b(0x6af)+_0x3e700b(0x3f0)+'lor:\x20'+_0x3e700b(0x34b)+_0x3e700b(0x3fa)+'-size'+':\x2011.'+_0x3e700b(0x66b)+_0x3e700b(0x33e)+_0x3e700b(0x338)+_0x3e700b(0xfb)+'0;\x20cu'+'rsor:'+_0x3e700b(0x20d)+'ter;\x20'+_0x3e700b(0x545)+_0x3e700b(0x2e3)+_0x3e700b(0x1ec)+_0x3e700b(0x525)+_0x3e700b(0x1cf)+'ter:\x20'+'brigh'+_0x3e700b(0x377)+'(1.1)'+_0x3e700b(0x311)+_0x3e700b(0x58b));window['addEv'+_0x3e700b(0x6a5)+_0x3e700b(0x206)+'r'](_0x426004['VPbSH'],_0x6b1263=>{var _0x31a320=_0x3e700b,_0x174f53={'BOomj':function(_0x2c97df,_0x46d8bd){return _0x2c97df(_0x46d8bd);},'SKRHD':function(_0x2c2a5f,_0x34539c){var _0xf472fb=_0x3ca7;return _0x1002cb[_0xf472fb(0x2d3)](_0x2c2a5f,_0x34539c);}};if(_0x6b1263[_0x31a320(0x26c)]==='Inser'+'t'){if(_0x31a320(0x6b0)!=='UROtF')try{var _0x39097e=_0x27daab&&(_0x37f5be[_0x31a320(0x155)+'ge']||_0x6a7970['error']&&_0x5101ab['error'][_0x31a320(0x155)+'ge'])||'unkno'+'wn';if(_0x135439&&_0xd35928[_0x31a320(0x143)+'ame'])_0x39097e+=_0x31a320(0x537)+_0x174f53[_0x31a320(0x4b2)](_0x39bc76,_0x15e657['filen'+_0x31a320(0x2a9)])[_0x31a320(0xf8)]('/')[_0x31a320(0x462)]()+':'+(_0x2f1263['linen'+'o']||'?');_0xbc94c2[_0x31a320(0x1ef)+'rror']=_0x174f53[_0x31a320(0x390)](_0xa6a214,_0x39097e)[_0x31a320(0x473)](-0x84*-0x37+0x9*0x2c2+-0x8dd*0x6,0x1ea4+-0x13*-0xad+0x1dd*-0x17);}catch(_0x263b50){}else _0x6b1263[_0x31a320(0x65c)+'ntDef'+'ault'](),_0x1002cb['citOX'](_0x15a5eb);}},!![]);var _0x26118f=document['creat'+'eElem'+_0x3e700b(0x1a0)]('div');_0x26118f[_0x3e700b(0x470)]['cssTe'+'xt']='posit'+_0x3e700b(0x641)+_0x3e700b(0x200)+_0x3e700b(0x2a7)+'2px;r'+'ight:'+_0x3e700b(0x110)+_0x3e700b(0x2aa)+_0x3e700b(0x15d)+'47483'+_0x3e700b(0x46e)+'ursor'+_0x3e700b(0x40f)+'ter;w'+'idth:'+'26px;'+'heigh'+'t:26p'+'x;opa'+_0x3e700b(0x6c9)+'0.5;t'+'ransi'+_0x3e700b(0x6a4)+'opaci'+_0x3e700b(0x3b3)+'2s;po'+_0x3e700b(0x253)+_0x3e700b(0x22d)+_0x3e700b(0x475)+'to;fi'+'lter:'+_0x3e700b(0x55f)+_0x3e700b(0x503)+'w(0\x200'+'\x204px\x20'+'rgba('+_0x3e700b(0x4ae)+_0x3e700b(0x455)+_0x3e700b(0x5dc)+'))',_0x26118f[_0x3e700b(0x6cd)+_0x3e700b(0x170)]='<svg\x20'+_0x3e700b(0x324)+_0x3e700b(0x298)+_0x3e700b(0x569)+'\x2024\x22>'+'<path'+_0x3e700b(0x62a)+_0x3e700b(0xcf)+_0x3e700b(0x3aa)+_0x3e700b(0x15c)+'4-4.5'+'-4-7.'+'5\x200-2'+_0x3e700b(0x1d1)+_0x3e700b(0x1cc)+_0x3e700b(0x1c9)+_0x3e700b(0x479)+_0x3e700b(0x6d0)+_0x3e700b(0x5a4)+_0x3e700b(0x689)+'5-4\x207'+_0x3e700b(0x21b)+_0x3e700b(0xe0)+_0x3e700b(0x41c)+_0x3e700b(0x198)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+'troke'+_0x3e700b(0x5d8)+'h=\x222\x22'+_0x3e700b(0x528)+_0x3e700b(0x482)+_0x3e700b(0x563)+_0x3e700b(0x46c)+_0x3e700b(0x16e)+_0x3e700b(0x2e7)+_0x3e700b(0x4fb)+_0x3e700b(0x536)+'\x22roun'+'d\x22/><'+_0x3e700b(0x6c3)+_0x3e700b(0x1d4)+_0x3e700b(0x4ec)+_0x3e700b(0x3a0)+_0x3e700b(0x417)+_0x3e700b(0x2a5)+_0x3e700b(0x339)+_0x3e700b(0x425)+'6b9d\x22'+_0x3e700b(0x432)+'vg>',_0x26118f[_0x3e700b(0x576)]=_0x3e700b(0x506)+_0x3e700b(0x4b7)+'r',_0x26118f['onmou'+'seent'+'er']=()=>_0x26118f['style'][_0x3e700b(0x54e)+'ty']='1',_0x26118f[_0x3e700b(0x348)+'selea'+'ve']=()=>_0x26118f['style']['opaci'+'ty']=_0x3e700b(0xc0),_0x26118f['oncli'+'ck']=_0x764cec=>{var _0x1bde91=_0x3e700b;_0x764cec[_0x1bde91(0x492)+_0x1bde91(0x469)+_0x1bde91(0x140)](),_0x15a5eb();},document['body']['appen'+'dChil'+'d'](_0x26118f),_0x86f94b(),requestAnimationFrame(_0x50416a),console[_0x3e700b(0x399)]('[saku'+'ra-ko'+_0x3e700b(0x34f)+'enu\x20r'+'eady.'+'\x20UWMK'+':',_0x429068[_0x3e700b(0x2bc)]);});})()));function _0x2623(){var _0x3554b8=['B3uU','B25Lige','mJqYlc4','yxrLkde','ywn0A0S','ywXSihq','Bw92zw0','Duf0q2S','D2LJDM4','Dw1UoYa','DxjZB3i','q2nUr08','EuvUz2K','wvfTBKS','Bg93oIa','lc4WnsK','uevetgm','C3rYB24','CvbiCu0','vLHvAw8','zwjRAxq','nwmWidm','AwnRihm','yxrLvge','Dcb7igq','uuv6wLm','ocK7ih0','Aw4GC2e','CZOGCMu','CMvHzhK','C2STCMe','Aw9UlLq','DgLVBI4','Dgrjwvu','zc10Axq','ztSGD2K','Bgu7igy','CNzkr2i','qxbWBhK','zvrHA2u','iefmtca','kdi0nIW','CezAA1y','C2STy28','DgvYigm','C2HVB3q','nJy4nZyWqvP3vgnw','mJqWmJi0ng9stgXQrW','mdSGBwK','EcbYz2i','s2v5qq','yM12Dxq','AxrLBxm','BhvLCY4','y2fWtw8','Aw1Llca','AY1IDg4','zhrOoJe','s2v5C3q','z1rqrNC','zNrLCIa','zxPbq3y','BsbSzwy','DwX0','B3nL','z1vhwLO','EKvRCeu','v2vItw8','ldiZocW','C3rYAw4','zxi6oI0','ltqTnY4','nYWUmsK','lxDPzhq','DgvYoYa','kdeWmhy','ysGYndy','nYWWlJC','B3b0Aw8','yuDPCNu','z2jHkdi','re9nq28','Ee9xtgG','zMLSBfm','Ahq7igm','oJa7D2K','AtmY','zuH2s3u','C3rYB2S','A0X5y1e','ignHy2G','u2fMzsa','lwjVEdS','swyGCMu','yxnZAwC','ksaXmda','x19tquS','mgy1oYa','Bw4TBwe','CLn3sgy','swHdv04','vevqDe0','rhrrAwq','BwLUkdq','y2HPBgq','oYbVCge','lwLVxYO','Dxm6ide','D2DUyxe','y2f0','sNvTCca','y2XHC3m','DgXL','mdSGFqO','AwDUlwK','Cgr1A24','lM1Ulxq','EvrMy3C','z2vtAM8','zw50CZO','lxnHBNm','BMC6ida','D0jSDxi','u3rHDhu','ANPbExa','Dgv4Dei','q0nlywq','zsbBrvG','vhnTCNm','DMG7EI0','t2PADw0','EYbJB2W','DxrVoYa','BMq6ihq','icbIywm','lcbJywW','icaGkIa','mIaXmK0','icnMzMy','u0flvvi','zxqGmca','zw15igm','nJiWChG','ienquW','yxjPys0','ywWGBwu','rezctNy','AguGzgu','CZOGyxu','zgvYlxi','ywXSzwq','BNnSyxq','CM9Rzxm','AgvSza','B1jLy28','igq9iK0','zxPPzxi','yxjHBMm','yMfYlxq','DdOGmZq','oIb0CMe','yxGOmJu','CdOGmti','ktSGy3u','nsK7igi','ifTfwfa','q2fMyK8','mwzYksK','lxj1BM4','tgLZDa','mcbOB28','ChbLyxi','DhKGDMe','zs5bCha','Aw5NoIa','mcWWlJG','DxjH','yLnJt0W','Aw9UoMy','mcaWida','BLvuChm','EKTvv3q','vK52vve','BNrLCJS','BgrYzw4','y2vZlG','svbez04','zwLNAhq','tM8Gzw4','DgHYB3C','C2v0qxq','zw1ZoIa','lc4YnsK','ndGZnJq','ANvTCfa','mcWWlJy','AxzSwwi','y2n1CMe','ndm4ofvJte10CW','C2v0ida','yxK6igC','B2f0Eq','tNfwzhK','yM9KEq','CgfYzw4','ChjLDMu','AfPbBxy','D0vWs1O','qvzUt1i','AxmGAg8','igj1AwW','B25SEsW','Cg9Uj3m','CMLNAhq','BhKGkhi','rLnRzhO','B0HNEuu','q0rPrwO','zgTPDa','odiPoYa','nxb4oYa','sevkvfK','C2v0uhi','Dg9Y','ifjLy28','z2v0qxq','Aw9F','Aw5Zzxq','oI13zwi','su1iDLC','zgLZCgW','mdb2DZS','DNntDxe','zgfTywC','BgfJzs0','icaGlNm','t21xq28','y3jLyxq','C21HBgW','ChG7igG','zvbPEgu','vxrxuLi','ihjLBg8','BtOGmJq','nsKSida','C2v0','yNv0Dg8','BgvUz3q','w3nHA3u','whvdtfy','ltiUnsa','v2vHCg8','nNb4oYa','BM8Gy2G','z0X6AKy','ieDLDfy','vMfesKO','CZOGy2u','y3jVC3m','tfrnCgC','zvbSDwC','BsbVBIa','AgvPz2G','oIaJzJy','rgLZywi','CMfUy2u','AY1ZD2K','wffwshy','EsaUmZu','zxmGEYa','ztOGmtC','mhWXFdi','CMLZAYa','BgW+','zMztDLC','Dxzmv1e','C2u6Ag8','DgLVBJO','zw50tgK','y2DWC1K','ls1W','igrHBwe','ihSGyMe','igrPC3a','rwvisM8','CYbnB3y','CMDIysG','CML0zxm','zMy2yJK','vvjpDey','ldeWnYW','yMX5lum','AK9ztKS','lxnPEMK','BgfIzwW','AevMCKW','BuvIu1y','AgfyA2S','DuPjuKS','CMrVsKu','DhLSzq','A3L2DLK','ig1HEsa','thbJsMS','ue9lDMy','zw50zxi','wNH3rfi','ChG7ihC','y2LYy2W','mJiSocW','uurdC1i','ChbLBNm','rgLL','zxiGC2W','y2L0EtO','yM90Dg8','BMu7ihm','ldePoWO','Aw5Uzxi','EsbKzwy','Bxffr3O','idqGnc4','ifvxtuS','zMXlyKu','mc41','ywiUywm','CwjvzxO','qxrswNy','CMrLCI0','rhL5sMe','DhmGCgW','rMLLBgq','yw5HvuK','B3C6igK','tuLtu0K','BMrRr0u','ohG5mc0','DgvTCZO','igXLzNq','mtiGmJe','zxjSyxK','B24UvgK','Bcb7igq','sfnYDwm','zvzHBhu','oIa5oxa','mcaXChG','v3jHCha','ndySmJm','r0rXBva','vLLgCMq','AgD0Aw8','qxnZzw0','oIbJB2W','vw5PDhK','zMLSBa','zMLSBd0','x19ZywS','ywrIBg8','ms4XlJa','icmYmJe','ufmGDw4','ig1PBM0','z3LIywm','uwP1rNu','ihbSywm','ChG7iha','CIiSici','Be1hy2S','C2STy3q','vNrcsM0','ndiSlJG','BfvIEwi','Dg9Nz2W','DMfS','C2rRBLe','mNb4ihu','B3nWywm','Dwnxre4','u1bSqNG','C3bSAxq','DgnOihq','cIaGica','DdOGnZa','tgvNAw8','y2XLyxi','zevozK0','Aw4Sihq','CezpBhi','D0nVBg8','mxb4ihi','DgvTlxu','u0fgrq','B250zw4','C3bLzwq','DgLKzs4','zNvSBhm','Bgv4oIa','ywz0zxi','uK1c','DdSGFqO','yKP2r2i','ihLVDxi','v2fowwm','mtjWEdS','BNrLBNq','vLbIu0G','lwjHBNi','z3jVDw4','ignLBNq','mdbTCY4','vvDnsYa','uwTmBNG','oIbIBhu','EfnWr2O','EcaWoYa','C2STC2W','Awq7iha','ihSGB3a','B3vUzgu','Ag9VA0C','C2v0x3q','igzSzxG','oYbIB3i','BgLUzwm','C2HVD24','ys1JAgu','y2fWu2G','y2fSBhm','ic40oYa','Bgv4oYa','B3vUzca','mtrWEdS','ndSGBwe','B2X1Dgu','AdOGnJi','EYbSzwy','ihrYyw4','zZOGnNa','oIaWide','EdSGyM8','CMvSB2e','zw50CW','C2fmyKq','wfztD2y','AxrSzsa','t3fcrw8','Fdr8nxW','CMDPBI0','BYbWAwC','v1bAuNa','tg5Ku2u','yxrPB24','A2vZig8','phn2zYa','zMLSzw4','zenOAwW','oIbYAwC','zgL2','z3jHDMK','CMzSB3C','odbWEcW','icaGic4','oxn4ueHIuW','B2STCMu','DgnOoJO','igP1Bxa','sw5PDgK','qvHlrxa','AMLpEhC','s2fkt3C','vvjbx0S','mhb4oYa','BwvZC2e','BI1TywK','Bxz5re0','C3bSyxK','BMC6idq','igvMzMu','nsWUmdm','ltiUns0','zxG6mJe','Bg9HzgK','iezPCMu','AfnOywq','DxjDifu','EfbMzw4','s3vcyxy','icnMzJy','sMj3CNi','EdSGz2e','EhfUD0C','B25PBNa','sK5bzhy','qLPozuO','yuTVDxi','BIb0Agu','BI13Awq','BMqIihm','EYbWB3m','sfrnta','vhrHt28','ztSGyM8','DxjDigG','y2TNCM8','yK52tvO','Aw5WDxq','BMq6ihi','y0XHrNK','yxa6ihi','ic5TBI0','EgTNs0u','Ec1OzwK','ztOGmtm','Aw5Mqw0','s0Xbt3G','zw5HyMW','C3zNiJ4','zxiGEYa','Bw4TCge','z2r3yLe','zgntwgC','rNnQquK','tMHovNu','ig9U','uMvJDa','zgvZ','oYbVDMu','q2XVC2u','ihbHzgq','CgfNzsa','B2fKzwq','ns00idC','Bw4TC3u','zgvSzxq','CMqTAgu','u2fMzxq','ihrVide','CNq7igC','rvL6vve','iIbZDhi','quLVtxi','lwHVCa','AwDUyxq','Ahq6idi','mxW1','Awr0Aa','A3mGyxi','zw50','zwXHDgK','yxnLBgK','Ag9VA04','vLrQq2W','C2fMzu0','tKCGlsa','zwfKB3u','A3nty2e','B2LS','C2STBwq','B3i6ihi','ie1VDMu','yMHVCa','AwDUlxm','ihSGCge','y2fWDhu','igjHBM4','BwLZyW','uLPmCve','CNnVCJO','ugn0','DxrAyuO','ihn5C3q','zxjZ','CZPUB24','Eca2ChG','uw5qAeO','rNzNEwy','lJa4ktS','D2vIA2K','B2LUDgu','yxvSDca','s3nTsu4','Dxm6idy','EYbMB24','y3qGB24','igjHy2S','uxzYAem','BwvUDca','Bw9fEha','idqTnc4','CMqTDgK','nYWWlJG','oc00lJu','mtb8nNW','v2LKDgG','EYbMAwW','EdSGFqO','lJuGms4','CMvJDa','te9UC1G','zsbJEd0','oYb0CMe','oIbJzw4','tefTyKy','lMrSBa','DgLMEs0','AwXLzdO','rKjoD08','C3bHBG','BgXKBNO','rwn3vK0','oIaWoYa','sKr4suu','AwXKigG','AxmGyNu','s2LSBgu','tKLyDwu','i2zMzG','z2uUiei','txLwvMC','Bgf5oIa','zvj6Dui','r29Kl2q','iL06oMe','yNrUoMG','CIGTlxa','lK92zxi','BgfZDeu','Dg87ih0','te1c','oYbTAw4','zxjYB3i','CNjVCG','zsbTAxm','DhjHBxa','zMXLEdO','r0DlCNK','BhrO','CYb3B24','yM9Yzgu','Ag9yuMe','B3rZlG','DgvY','tw92zw0','AxHLzdS','oIbPBMG','EYbKAxm','tg9Hzgu','CMvUDem','Cu5kCxm','C3rLBMu','ywXPz24','ChGGDwK','zuvSzw0','zguSihq','rw5NAw4','v1nht24','ihbVAw4','B3flt3y','ohb4oYa','icaUC2S','yxjNzxq','C2f2zq','BhPSt0K','rufZCxC','txvtDuW','zvjHDgu','CMvHza','mZCXnZa2vw5sDMLt','yxr0ywm','zg93kda','lJv6iIa','u0fgrsa','u3LWB0K','CM9Szq','BwLKzgW','Dw5Kzwq','t0HLywW','oIaZmNa','B2r5','DhjHBNm','lwzPBhq','vwTuELO','yw15tvG','D0r1rui','B1rjCLK','Dc1ZAxO','zgvYlxq','ywrK','lwv2zw4','qNLjza','ig9Wywm','B3jZige','wvbuwxe','CgvHDcG','uNvZuee','ywqGDg8','qsblt1u','wfL6qMS','DhK6ic4','A3rHz2O','lNnRlw0','BgLUzw4','zxH6AwO','lw5VDgu','ChLHzNu','zwLUC3q','tgvMDca','m3WY','Dgv4Dc0','u1H0sgu','lcbZyw4','lxnJCM8','lxrPDgW','yxjKlxq','CgXHEtO','q3r5qwy','Axb0kq','quPZww0','zg9JDw0','rwXLBwu','oYb3Awq','lwfWCgu','DdOGmtu','BMLUzW','DZOGAw4','BwuG','Aw50zxi','DMvYBge','rfv1s0e','uLnUBfi','nJaWia','CMeTA28','EdSGAgu','zsWGDhi','sNvTCfq','lYbhCMe','BIb7igi','BgLJyxq','mtbWEdS','De5Vzgu','mxW2Fdu','BM90zs4','ktSGFqO','tMvpyvm','rfzusK0','nsWUmdC','Aw5KzxG','z3bRzfu','uMvMAwW','wNDyquy','AwXS','y29Kzq','vxjqDKK','yxb0Dxi','zMDPBu0','nJG4mJyXn0TMBgX5sW','Dhj1zq','zgPsAuu','B2reAwu','B2rLu3q','Ag9VA3m','ideWChG','BwLU','ocKPoYa','q291BNq','yxbWzwe','AfbAvgC','zwfKige','C1fQEuy','kYbtCge','yxjJ','ENrKuwm','Agf0igq','CgXPy2e','AwPNvNK','v01ligK','ywLYlG','sgLKzxm','ihrOzsa','lxbHCMu','oYbMAwW','BMvS','y2vUDgu','qNfICem','y2vdAgK','DNPPuNe','vgLJAW','l3jHCgK','ihSGzgK','uNvUDgK','ihWGC2G','AxvZoIa','igHLAwC','ChGPoYa','sg9VAYa','B3G9iJa','t1nOB28','Dw5PDhK','u2L6zq','Dgv4Dem','CI1Yywq','zxH0','uLDyr28','B290zxi','ywrKrxy','A2uTD2K','q1btihi','CMvWBge','iJeUnsi','vxDtyw4','Dg9WoJe','ldi1nsW','yw1L','EI1PBMq','tu9ersa','mhG2mda','Fdf8mW','BY1ZDMC','Aw9FnZi','ohDhuwH3Ca','ihSGlxC','nsaWlti','Bg9Hzca','BgWGBwu','z3jPzdS','ywXSig8','s3LiENa','idmYChG','DMLZDwe','AsXZyw4','kc4YmIW','DxDTAW','v2LWzsa','oYbMB24','oYbMBgu','BNnPDgK','AwWGC3a','ywDLigq','ignVB2W','AgrxEei','u0Dez08','BMX5kq','yxbWzw4','mtySmc4','ihSGD2K','tgHKv2W','CMvU','nMi5zci','AY1Jyxi','uvvJzwq','z3jPzc0','ihjNyMe','mNb4ide','sxnhCM8','re1uz1e','oYbIywm','psjTBI0','oIa1mcu','Bw4TDg8','oYbQDxm','z24Ty28','C2vYDMu','ktSkica','nNb4idK','z2LMEq','lcbPBNm','ywqUieK','zgvZyW','Aw1Lihm','B2nRoYa','ic5ZAY0','q29TyMe','y1f1rvq','ExjQwLO','DhjVA2u','ntuSlJa','ywrKAw4','DtmY','zJmY','B3vUzdS','v2TcshG','rgjVv0u','ywPXreS','mJqWiey','B2TLpsi','phbHDgG','zIXZExm','DdOGnNa','B2rL','ie9olG','sKDID0m','y3nZvgu','lNnRlwm','sezZt2G','CMfPC2u','ign1CNm','ig5VBMu','t3nsy0C','zK9gAeC','Efz6wuK','oIa2mda','B3n0zMK','yYGXmda','wu1ewey','DM1xD3u','y3jLBwu','CK9yreu','BKvrufm','vunpD2W','u3bMrwe','C3rHCNq','Fdr8m3W','zNDUwxC','zxrhyw0','wMDoruK','AfDzwgu','oYb9cIa','yw5JztO','A2v5C3q','zMyP','BevszNy','zxzLBIa','ys5RB3u','zcWGyw4','zw50kcm','BxKGC2u','nc00lJu','A2vizwe','mta1mtG1mfDRAKH6qW','B250lxC','nIaXoci','ihjLy28','whDdrw8','tfzdre4','nZTWB2K','DMLLD0i','zcbNCMu','B3bLBG','yMX1CG','ic8GDMe','BwvKicG','uxvywgy','B3zLCMW','yxa6ide','mdSGyM8','C2v0sxq','rfn5ufa','tM8Gu3a','y29SB3i','igfWCgW','uMvJB2K','y1LczeO','y2fUDMe','ignVBg8','BfjHDgK','D2vPz2G','igzPBgW','Bg9Y','AwDODdO','CMvHzey','BNqGAge','zM9UDc0','wMnryLO','Dc1Iywm','n3W1Fdi','B3vUzdO','BgnyDuG','ihWGz2e','zMLUza','ywDzzxO','Dc1Myw0','B25TB3u','y2TLzd0','Bg9JAW','i2zMzJS','BNrdr0S','zwvMmJS','uMf0zq','DxjDig0','Aw9U','DdOXmda','BM9szwm','y2HdB2W','BgvZiem','idaGnha','B2XVCJS','u2vSzwm','EfLsufG','CIbNyw0','Dg9Wrgu','A2nluhq','A291CI0','AwX5oIa','ChGGmdS','zMLLBgq','lsbVDMu','svrqvfG','Dvnwqxm','tuvlwLa','ywX0Ac4','CZOGmty','ihSGywW','A1nHAMy','B25JBgK','C2STC3C','CNrwvgW','zKT4q1e','AgfPCG','rvHqxq','uwX0uvC','y09LtMq','vxLkB1i','oYbOzwK','oIbYz2i','yK5SqvC','ywn0Axy','i2zMnMi','AwrHDgu','Dg5LC3m','Bw4Ty28','BNqGAxq','z2fTzuW','yM90Aca','igvYCG','uMvZzxq','ih0kica','zgrPBMC','AguGDxm','nsWYntu','wMvYB2u','ihWGrvi','Dg9W','y0r2yKC','qLL3rNq','y2HtAxO','zxjZy3i','BNqTC2K','zvKOmtG','DhvYyxq','idGWChG','igzVDxi','AgvHzgu','CM0GlJq','u0Tsseq','CxvLCNK','Aw9FmZa','mdi1ktS','nYWWlJm','t3veDLy','ugf0Aa','Ag9VA1a','zgLUzZO','Bg9N','y3jLzw4','Bxm6igm','BM9UztS','sLnozgC','q1znDvm','Fdr8mxW','y3K9iJe','Fdj8mhW','zwfWB24','zgvYoIa','Aw1KzLi','BguGC3q','yvbQrgC','ig9YigS','EYbIywm','Ahq6ida','yY0XlJu','nZaWia','C2fMzq','CMrLCJO','v0fttsa','tgT3ALq','vurtzxK','AxnPyMW','zM9UDa','DhKGmc4','zM9YBxm','zMXLEdS','ChvZAa','yMfJA2C','BM9Uzq','EtOGyMW','icaGig8','DeLvvw8','iNrYDwu','ChG7igy','oIbWB2K','BfDRsvy','tMfTzq','v0LXBNO','Bw4TBg8','BMv2zxi','yMeOmJu','zxnJ','Awy7ih0','DgvZDa','mtu3lc4','Ag9ZDg4','Bg9Hzgu','lc4WncK','A2L0lxm','zwn0oIa','EhH5vu4','Dfrus1m','ig5VigG','yJLKoYa','C2v0vhi','mNWW','rM9Yy2u','zxzLCNK','igvUDgK','B2jAzhG','qw9Yrem','sKDlEKe','uMDSAu8','igjVCMq','B29RCYa','BLbSyxq','B2H0v3e','BgLUzvC','BhmGDgG','tu9nA0W','lxjHzgK','y2fSBa','igHVB2S','ywnPDhK','AcbVBMu','vMfSDwu','BM9tChi','nxWWFde','CI1ZzwW','EhvyDuq','twLSvNe','y29SCZO','sKncyKq','D29YAYa','zdSGy28','ihnVig4','B3vUDc4','ihSGy28','Bgf5ig8','BMnL','BLrive4','DgLKzvC','ihDPzhq','q2jrDNe','igzVBNq','vKfhsM0','yMvNAw4','B24Gzxy','y29TyMe','A3ndChm','oYbJB2W','zwv6zsa','vvHNyuW','mNb4oYa','whb0DLu','EhbdzvK','rLbtig8','t0zgigi','ihSGzM8','BI1ZDwi','Bw4TAa','mtGGnIa','AxnWBge','u2v0r2e','zw1LBNq','oNbVAw4','qLnMuvK','lwrPCMu','vuXls24','CgfJAxq','ywrPDxm','wKjruvi','z29K','mciGCJ0','CKv1Aw8','Aw9wu1q','zYbJyw4','z24TAxq','iM5VBMu','DMnkAum','CMfWAwq','icaUBw4','vLDvrNm','A2v5Dxa','odaSmtK','EdSGyMe','tg9JywW','psiJzMy','lxnSAwq','rKHUCKi','zvnzt20','BwrLC2m','icaGica','DhLWzq','tKCG4Ocuia','AxrPB24','BgLUzvq','D2L0Ag8','icaGlM0','y2HLy2S','lZ48l3m','oYbHBgK','zvbSyxK','DhKGjq','BMf2','AwvSzca','C2STy2e','u2TPChm','A1zQz3i','z2v0rwW','ugPwthy','zMuGBw8','AwrLCG','vhLvvxm','ALDMvvG','BMC6igi','yxKGB24','BwjyvNC','CIb2ywW','CJOGi2y','BgLKzxi','BgXywfO','uJOG','oYbWywq','A2rYB3a','CMvSEsa','oWOGica','tM9oBgi','u1jbsgm','nNb4ida','B01pvhC','ueX0C3C','u3bLzwq','iKLUDgu','t3LwyuO','mdCSmtu','B21qA3u','BfvzDgG','CMvZDg8','sLnqs1m','Fdr8mW','zcWGi2y','vwjZDha','B3nPDgK','lIbvC2u','mJu1ldi','yM91BMq','C2STBge','Cg9W','EYaTD2u','zxiTzxy','Cg9ZAxq','zxG6ide','C2HPzNq','iduWjtS','CM9WywC','tM8GuMu','q3jVC3m','psjYB3u','y3jVBgW','nJq2o2m','ChG7igi','C3r5Bgu','DcbHihq','s1jswee','C2XPy2u','oIbZDge','Dhm6yxu','CM91BMq','ifvjiIW','zdOGBgK','nxm0idi','BgLNBI0','yxjjB0W','BdOGAw4','u3bHy2u','C2STzMK','lxnLCMK','vgnlDhK','EvvQtva','A2uTBgK','ocWYndi','q1bcC2G','AgfZ','rfrHyMW','zJzIowq','A2DYB3u','CeLNzLy','rg1Kqwi','DMu7ihC','z2H0oIa','B3qGBwe','4Ocuig92zq','zM9YBtO','zdSGyMe','nJaWide','C3rVCfa','mJCWnxrVuKXsqq','vK5hu3O','zsbZzxi','Bwf4','u3rHDgu','y2vSzxi','Dc1ZBgK','B3rOAw4','pc9ZBwe','C2STBM8','nxmGy3u','qw5pB0i','EeTQvNK','Bw92zvq','oIa4ChG','yxv0BY0','wuDxtuS','Cg9PBNq','s2v5ra','sLHLANe','vxv6Ce0','zhrOoIa','ANn0q3a','EdSGCge','DgG6idi','mNWWFdy','CMvWzwe','mJu1lde','r1LKvLO','nsWUmdu','rMXMrLu','qK9VBwO','z29KicG','C3DPDgm','Dw5KoIa','lsbHihm','ysblB3u','zcb7igi','uw1ys0W','igfSAwC','rNjHBwu','BNnWyxi','r0HzAxO','AguGzNi','tgXozNC','BI1SB2C','BMqGBwe','wg9qAvm','y29UDgu','zNbZ','C1Pbvwy','lc43nsK','DgGUsw4','oIaZChG','BgLNBG','mNWWFdq','iokaLcb0zq','DMvTzw4','zcbJAg8','B3bLCNq','CMuGkfm','Bw91C2u','CY1Zzxi','rvPMrgW','lMP1Bxa','r3jHDMK','C2fRDxi','B24Oks4','q3vZDg8','zxrLy3q','u2nHBgu','BM93','oIbKCM8','nJTWB2K','BI1JB2W','BNrivwm','Bhv0ztS','ntuSmJu','z2v0q28','DxjPvu0','y1rpt2i','BsbJzw4','lwnHCMq','uvzSrhy','ue1SvMu','C1HyAeK','D2LKDgG','AgLPDNq','AcaTidq','iJeYiIa','DMfSDwu','Bg9NBY0','j3qGC3q','oIaXms4','zhbY','D2fYBG','ExzTq1i','CYbZChi','lc4WnIK','vvDnsW','lc4WocK','tNzJsNm','ohb4ksK','wg10yNy','lwXPBMu','ywnRz3i','z3zqr1u','igDHCdO','BYb0Agu','AwvSza','zxzLBNq','sw5ZDge','C2HHzg8','zMLxBum','yw5ZzM8','u2fRDxi','igjVEc0','B29Rihi','z2v0sxq','CMfUC3a','DgG6idu','rM1XCwS','Bw4TAca','khjLBg8','ywjSzs0','y2uGB3y','EMu6ide','twLZyW','t0vtrue','zMLSBfq','CM9Lz3a','uhnTwuO','zxi6ida','BwvsDw4','BNn0ywW','DgG6idK','y3KGB24','BYb7igq','AxrJAa','mhGYnta','igTVDxi','sMzrz1e','ihrVCdO','Dgv4Dee','mJK4mdC5mNHVugrmqG','igv4Axq','B3zLCIa','zuv4Ca','Ad0ImIi','ihn0CM8','Bw8GDg8','q0jkB2u','wgz0zw4','oIaXnha','qM90Dg8','zwfK','EdSGywW','y3bWweO','DMC+','tgrKrvy','lMXHC3q','B3jKzxi','Aw5JBhu','AM9PBJ0','ieaG','yLHVBMq','ifvUAxq','igDHDgu','zsGXnta','vg90ywW','DxqGDgG','vgfRzxm','C2STyNq','BMn0Aw8','rNv0u3y','B3vUDgu','nde5oYa','CNrPzgu','FqOGica','ihDOAwm','zwCGzMe','zw4GDg8','CMXHEsa','mZuSmJq','zw50rwW','q1reAfK','BhvYkdi','B3bHy2K','twrtChy','AxPLoIa','Ag9VA0m','A2HnsKe','rgnyt0e','z29KrgK','CI52mq','DhLqy3q','zxjPDdS','CgfYC2u','ieLZr3i','idiWmg0','lM1Ulxa','B24U','Be1VDgK','idaGmca','zhjVCc0','y2L0t1G','EhrkAvG','mxb4oYa','BMvJyxa','ywLSzwq','mcWWlJu','BML0igy','kdaSmcW','A3fttvK','idaGmJq','vNHuwhG','zs1PDgu','kdi1nsW','C2vSzwm','Bw4TDge','BxDMEum','wMfoqwy','BIb7igy','C2STAgK','wNDWs1C','zhzUEgu','C2fgAgS','DgL0Bgu','tw92zq','s2v5uW','DMLPvMG','EdSGBwe','ihWGBw8','DhjPyNu','EgvqqLe','BNrLCI0','yMLJlwi','zvn0EwW','yxrJAgu','CNr1Cca','AMvxt0W','rxHW','zsb2ywW','A3nqB3m','mJu1lc4','AfvWteK','A2zOsu0','BMDL','icaG','BMq6icm','Bg9YihS','qxbWBgK'];_0x2623=function(){return _0x3554b8;};return _0x2623();}
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
