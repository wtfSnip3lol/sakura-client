// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.13
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
function _0x41de(_0xdfcfbd,_0xc34174){_0xdfcfbd=_0xdfcfbd-(0x13*0x77+0x1cd*-0x7+0x561*0x1);var _0x436b52=_0x41b8();var _0x4538c7=_0x436b52[_0xdfcfbd];if(_0x41de['gyaKLo']===undefined){var _0x40eec5=function(_0x1503bb){var _0x4e7657='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x14488f='',_0x1acaad='';for(var _0x2b4f05=0x2158+0x4*-0x27+-0x1*0x20bc,_0x3b2c01,_0x8dac71,_0x211e03=0x1136*-0x2+0xd54+0x1518;_0x8dac71=_0x1503bb['charAt'](_0x211e03++);~_0x8dac71&&(_0x3b2c01=_0x2b4f05%(-0x138f+-0xb79+0x1f0c*0x1)?_0x3b2c01*(-0x5f7+0x1*0xf45+-0x1*0x90e)+_0x8dac71:_0x8dac71,_0x2b4f05++%(0x2b1+-0x37*0x17+0x244))?_0x14488f+=String['fromCharCode'](0x47*-0x88+-0x2104*-0x1+0x5b3*0x1&_0x3b2c01>>(-(-0x180*-0x1a+-0xdf7+-0x1907)*_0x2b4f05&-0x1777+-0xbde*-0x3+-0xc1d)):-0x3*-0x1bd+0xfc1+0x4*-0x53e){_0x8dac71=_0x4e7657['indexOf'](_0x8dac71);}for(var _0xf19d2=-0x1188+-0x12f2+0x247a,_0xd943fc=_0x14488f['length'];_0xf19d2<_0xd943fc;_0xf19d2++){_0x1acaad+='%'+('00'+_0x14488f['charCodeAt'](_0xf19d2)['toString'](0x88e+-0x1591+0xd13*0x1))['slice'](-(-0x1*0xfe7+0x32*0x65+-0x3d1));}return decodeURIComponent(_0x1acaad);};_0x41de['lFIOAI']=_0x40eec5,_0x41de['ondXna']={},_0x41de['gyaKLo']=!![];}var _0x1184c6=_0x436b52[-0x6c6+-0x10b2+0x1778],_0x57f5f7=_0xdfcfbd+_0x1184c6,_0x2fd313=_0x41de['ondXna'][_0x57f5f7];return!_0x2fd313?(_0x4538c7=_0x41de['lFIOAI'](_0x4538c7),_0x41de['ondXna'][_0x57f5f7]=_0x4538c7):_0x4538c7=_0x2fd313,_0x4538c7;}function _0x41b8(){var _0x4f6a54=['zg93BIa','zvzHBhu','BM8Gy2G','ywrK','yM9Yzgu','uMvJDa','BMjoCvq','BY1ZDMC','icaGig8','BhvLCY4','CZPUB24','yKTssLy','ihjNyMe','rxHW','oIbJB2W','A3ndChm','BNrLCI0','u0fgrsa','s2v5vW','Dhj1zq','ywrIBg8','DwDcrum','BKXvrgu','C3rYB24','r1vysvm','z24Ty28','C2HPzNq','ChG7ih0','ihWGz2e','BMC6ida','AwrLihS','B1jLy28','BfbkvwO','B3zLCIa','oYbMB24','Dxm6idy','BtOGmJq','Dg87zMK','zIbTyxq','Cfrstg8','AhbQq2y','nYWUmsK','zdOGi2y','B3bHy2K','idmWChG','BIb7igi','EYbIywm','Aer6seC','B2LS','mdSGy3u','mJiYntC2EeT2vxPr','wNjpuMG','ysGYndy','iefmtca','DgvYo3C','FdD8nNW','B246ihi','zwCGzMe','zMLSzw4','B3vUDc4','Ag9VA0C','DhK6ic4','oIbYz2i','ywrPDxm','AwnOBxe','AguGzgu','C2STy2e','zw4GDg8','CMz3ELy','EdTVCge','idrWEca','v2Xlqxa','ihn0AwW','DMfSDwu','sxzKC0S','EvvxEgK','y3jVBgW','rMDuqxm','zsbZzxi','lwjVEdS','qwv1Awu','B25LigK','zMLSBa','zuv4Ca','oYb0CMe','ideWChG','ww9gu0C','zwXK','lMLVig0','AxmGAg8','nsaWlti','CYbpsgu','y2HtAxO','ide7ig0','AwvSzca','ldiZocW','vgDSu20','zxjZihq','BMf0Dxi','igHLAwC','BgvUz3q','Aw5Uzxi','tuPSA3K','lw5VDgu','FqOGica','nNb4oYa','ugrdCuu','y3jVC3m','CMfUy2u','ktSGy3u','Bgv4oIa','igjHy2S','zw1ZoIa','ifvUAxq','mhG2mda','D2LKDgG','sKXquNu','AY1Jyxi','ENHxzKi','DhKGDMe','DhjPyNu','mJu1ldi','Awy7ih0','CYbLyxm','igLZigm','mJqWiey','B25SEsW','zdSGy28','ns00idC','vfjRwNG','CK9XCMO','B3rOAw4','l1jnqIa','kdeUmsK','ntaLktS','s3r6Dhy','DhKGjq','y2n1CMe','CMvU','A2vizwe','Dc1Iywm','lxnOywq','ndrMBhbwBeW','B0PPvw0','lxDPzhq','y3qGB24','BMnL','Bvz1z2e','zYb7igm','yxbWzw4','CYbnB3y','EcaWoYa','zwfKB3u','y051zuO','lcbPBNm','yw1L','BMq6ihi','Ag9VA04','EdSGyMe','ChbLBNm','lNnRlw0','C2f2zq','sgvHBhq','CeDHtLi','Bw8GDg8','zg93BG','mtq4ntaWmfLkD2HysG','zNbZ','ihn0CM8','B29RCYa','BgvZiem','yxzuqNi','zxqGmca','zgLZCgW','idi2ChG','DxjDifu','mNb4ide','sw5PDgK','ihDLyxa','DMvYBge','mJy4rfnKyK5R','EYbMB24','zxjYB3i','EYbKAxm','y2fWtw8','iKLUDgu','twP2qxu','icaG','ysblB3u','CMLuveO','zxjZy3i','ywiUywm','BMXvq0i','yxjPys0','yuzQBKK','mhWYFdm','Bw92zq','EhPkCgK','Bw4TCge','AeLqBxy','Evf3z00','zcb7igi','AguGCMu','BM9UztS','B250lxC','DgHLihC','nJaWide','DxHxueC','oYbQDxm','lxbHCMu','yw5ZzM8','zwqGyw0','igzVBNq','BhrO','zxzLBNq','rvbxuey','lxjHzgK','vMDWz3e','vwTlAeS','yvjitvi','igDHCdO','C3HLDvi','BI1SB2C','ocWYndi','ign1CNm','u2vNB2u','kYbmtui','lMrSBa','B1ndy1i','BgLUzw4','B3G9iJa','EsbKzwy','CgfNzsa','qxnZzw0','sKPJD28','nsK7iha','oIbWB2K','A3nqB3m','tvDSC0S','A2rYB3a','twLZyW','mtaWid0','DgvY','C2DfALi','BgLUzvC','idnWEdS','BhKGkhi','ic5ZAY0','DNCGlsa','zxjPDdS','ihLVDxi','mhGYnta','rM9Yy2u','zvbSDwC','CNrPzgu','yxrLlwm','nsWUmdu','yxjLBNq','t05Ps1u','C2HHzg8','zenOAwW','mNb4oYa','qM91wKO','yMX5lum','y2nmAxu','uMf0zq','CgvHDcG','BIb0Agu','CLnLAhy','BwvZC2e','tfH0Dhu','AwX0zxi','lc4WnsK','oIbIBhu','uu5TAxu','DYGWida','z29KicG','y29TyMe','Bgf5ig8','Dgv4Dei','zLfdrMW','y29SB3i','iJeYiIa','BhmGysa','DgG6idG','zMXLEc0','lxnPEMK','icaGkIa','ELvjD0u','C3bSyxK','vMvsDK4','uufSDKy','mJm4ldi','y2XLyxi','DgG6idi','Aw5Zzxq','BgfIzwW','z3LIywm','Awr0Aa','khjLBg8','DgHPCYa','B3n0zMK','CdOGmta','Bw92zvq','ztOGBM8','CMeTA28','phn2zYa','ihnOB3q','Agf0igq','ldi1nsW','BgfZDeu','tw92zw0','idaGmca','C2fRDxi','yxa6ide','zhjVCc0','D2zvCve','DMC+','CuDuDvy','oIbKCM8','mdSGFqO','AMvsuvK','AgvHzgu','tKCG4Ocuia','vLnku1i','ltiUnsa','sgvPz2G','oIaZmNa','zhrOoJe','yMvNAw4','Dw1LzgG','t3zLCNC','DxjLihq','uunuwfi','CYaNzNu','ohb4oYa','zfjttNa','CI1Yywq','Aw9UoMy','Evfgz3q','z3jHzgK','y3nZvgu','u3bLzwq','mc41o3q','vw5PDhK','C2v0vhi','Dg87ih0','Dxm6idi','z1ryChK','lJuGms4','EsaUmZu','zs5bCha','oIaWide','ndSGBwe','C3zNiJ4','u2vSzwm','BNrLBNq','DMfS','C2vSzwm','ih0kica','mtSGBwK','DxjH','C3r5Bgu','yxGOmJu','zM9UDa','zwfKEs4','ig9YigS','zsWGDhi','BxKGC2u','s3Hpsfm','oIbJzw4','ugndBMy','Bw4TDge','DgG6ida','EeLRCMW','Ahq6idi','B2XPBMu','CJOGCg8','D2fPDgK','su5QDNO','zw1LBNq','v3PWzxy','iL0GEYa','BNqGAxq','EwjZzLe','B2XVCJO','B2TLpsi','mIaXmK0','B2X1Bw4','Cg9PBNq','zuvSzw0','AwXS','txfjyuK','BNnWyxi','ChG7ihC','CgXHEtO','ig5VigG','B21Lr2y','C3rPBgW','EMu6ide','z2fWoIa','zLrHyuu','B3vUzdS','y2TNCM8','DgHYB3C','D1rusNC','BIb7igy','ywvMDwK','ufmGDw4','mcWUntu','D2vIA2K','Bw1VifS','AwrHDgu','nde5oYa','v3nXsLe','y2HdB2W','BLf4sMG','mxb4ihi','D3HKB3G','igTVDxi','EYbMAwW','oYb3Awq','uK1c','C0fbyum','DML0Eq','zgvYlxq','yuTVDxi','oYbWB2K','AwDODdO','Fdb8oq','B25TB3u','zw50oYa','rwXLBwu','Ec1OzwK','ldeWnYW','Dfvhs1i','D2HLCMu','DMG7EI0','sNvTCca','AKv2Dee','q1LSs0e','wfrqD3u','AxPLoIa','BI5MAxi','BwvKicG','z2r0s0G','Dw5KoIa','nYWUmJG','y3r4qKm','se1lEMC','uNHgCey','CZOGyxu','y1fQD0S','idqGnc4','B3vUzgu','l3jHCgK','vKvJrgy','zxi6oI0','uKvcuxG','BvbqzgG','zxrhyw0','igvMzMu','y2fSBa','zNvSBhm','mZv4rw56teq','yxbWzwe','yM91BMq','CM9WywC','oNbVAw4','B3nLihS','BhD0twK','ChjLDMu','nsWUmdC','Cc1ZAge','EdSGAgu','yxjKlxq','oIbJDxi','C3PUAwW','C2fMzu0','w3nHA3u','CeX4B20','qMz2whq','rgLZywi','ocK7ih0','Be1VDgK','uMfWAwq','AY1OAw4','lc4WocK','CMDPBI0','zw50CW','ugf0Aa','qMXVy2S','igXLyxy','u0fgrq','C2STBge','ywnPDhK','BuHczum','uLHTzeW','yxbzEwq','wMjHBLi','igrHBwe','B24UvgK','swzrzKW','CdOGmti','ihWGBw8','DhmGCgW','EhDfy3i','igzSzxG','C3rYB2S','AguGzNi','vxHYsgK','y2HXq2C','C2v0sxq','r215z1O','AgfPCG','Ag9Szsa','Bg93zxi','vvDnsYa','DdOGmtu','kdi0nIW','icaGic4','yMeOmJu','ztSGyM8','B2STCMu','DcWGCMC','AgvPz2G','DgG6idK','icaGlM0','icaUC2S','wKrZs08','oYb1C2u','Bcb7igq','CNjVCG','AxnWBge','AxmGyNu','odiXmta3mLfqExbmvq','ChGPoYa','lxnLCMK','Fdf8oq','Awq7iha','oYbJB2W','CMLUz3m','D3LZsM0','y2vSzxi','i2zMzG','zxmGB24','zdSGyMe','ocKPoYa','Aw5NoIa','m3WYFde','EtOGzMW','zwLUC3q','CMXHEsa','A2uTBgK','Aw5Mqw0','Bw4Ty2W','AurUEeG','BI1PDgu','AwDUyxq','CgfYC2u','DxmGywm','tM8GuMu','Dgv4Dc0','Aw9F','r0ntzhC','B2rL','v0fttsa','lZ48l3m','u2vct1i','lJjZoYa','AsXZyw4','Aw1ArLK','ztSGD2K','z3jHDMK','ifvjiIW','u2L6zq','lNnRlxm','s0TcCMC','uxHyBw4','Bw4TBg8','igv4Axq','rLjOzvi','oIaIiJS','y2L0EtO','zw50tgK','DxjDigG','Cg9W','zw15igm','B29Rihi','AdOGnJi','sw5Zzxi','ignVB2W','lc4WncK','nsWUmdm','zwvMmJS','BeD0sNq','C3rYAw4','De5Vzgu','Bg9Hzca','zw50zxi','oYbWywq','BMqIihm','zvKOmtG','DgLVBI4','oYbKAxm','u2v0r2e','zw50','nxW2Fdq','uKneq2S','Ag9VA1a','Cg9ZAxq','x19ZywS','t1vsx18','EcKGC2e','rgfTywC','oIaWoYa','CZOGmty','Dc1ZAxO','tu9ersa','yxb0Dxi','C3rLBMu','ic40oYa','zc10Axq','y2LYy2W','CJSGz2e','EYbIB3G','DxjZB3i','zLv5ufO','ChG7cIa','Bg9HzgK','idi0iJ4','CY1Zzxi','BgLNBI0','AxvZoIa','sLr2Bha','Ahq7igm','C2v0uhi','zM9YBxm','CMfKAxu','yxjHBMm','AhrWrNq','CIGYmNa','oIbYAwC','rgLL','Bw4TBwe','ys1JAgu','ywqGDg8','oIa4ChG','ignVBg8','Dw1UoYa','yxj0lG','ChvZAa','AY12ywW','C2L6ztO','Bw4TDg8','wMfzv3e','vuzivvm','DerOAK4','idrWEdS','B3vUzdO','ywrKAw4','yM90Dg8','yxrSEsa','yKrxweC','Aw5WDxq','AxrPywW','lxnHBNm','qvjlzLK','z3jPzc0','y2vdAgK','zJzIowq','rKfmEKO','ChG7igi','vhzYqLO','B2zoz3O','oIa0ChG','Bg9Hzhm','DgvTlxu','yw5Uywi','u2fMzsa','rLbtig8','y29PBa','BJOGy28','zwf0CYa','EefoBge','C3DPDgm','C3rHCNq','ChfruKO','ig1HEsa','qLvsu1C','mdb2DZS','ywn0Axy','ENn0rLa','q291BNq','AxrPB24','mxb4oYa','BM9szwm','C2HVD24','mJu1lde','yxK6igy','Bw4TAca','CM9Rzxm','oIbMBgu','BKzlq0u','B246igW','rhLPCvu','yMLZrLy','y3jLzw4','DdOGnZa','CM9ZC2G','zvj1BM4','DhjVA2u','DgvJDgK','BgLUzvq','zMLSBcW','CMfPC2u','oYbIywm','DgGUsw4','nJmZnZbRqvnWrgq','nYWWlJm','y2j2vwq','C2STyNq','uNfhAKu','CJSGzM8','y2XHC3m','Bg9Hzgu','ida7igi','zxiGEYa','v2vItw8','BNnLDca','y2HLy2S','nIa2Bde','EKX6B1y','DgG6idu','CMvHzhK','B3i6ihi','Dgv4Dee','BgLUzwm','igzVCIa','u2TPChm','j3qGC3q','yMTPDc0','BMCGzM8','lwHVCa','CZOGCMu','lIbuDxi','Aw1Llca','DgXPBMu','zsbBrvG','sw5MAw4','ignLBNq','psjYB3u','lM1Ulxa','oIbPBMG','q2Hxuuy','mtbWEdS','q016v1O','tfHJtKO','AgvSza','Aw9U','yMfJA2C','mNm7Cg8','rgPnB1G','q2zzCeW','oYbVCge','AxrLiee','y0viwfa','CI52mq','BwLUkdq','ltjWEdS','CLzwwMS','BMLUzW','EuvUz2K','BvnnBwy','zwjRAxq','ktSGBwe','oc00lJu','ywnRz3i','z2v0','B290zxi','C3bHBG','uwDNBui','lwHLAwC','mhb4oYa','zxi6ida','ihjLBg8','AgfZ','FdeWFdG','rNz4uMO','Dgv4Dem','ywqGD2G','BKPuCuS','oIbUB24','mwzYksK','tNr4rMi','B1PsB0K','wKjIAfO','CI1ZzwW','BgWGBwu','C3bSAxq','u1LTtu4','AhvTyIa','yxnLBgK','ugXeA2C','yNv0Dg8','D2fYBG','rNjHBwu','ChG7iha','zw5HyMW','mJu1lc4','zwv6zsa','wMDWwNO','nxm0idi','zc5VBIa','A2v5zg8','DgnOihq','DgXL','lM1Ulxq','zwLNAhq','AtmY','Aw9FmZa','lcbJywW','CYb3B24','Bw92zw0','Ec1ZAge','Bw9fEha','ywXSig8','nJiWChG','C2STCMe','ugX0C3q','zgLlyKm','y2f0','zvrHA2u','igHVB2S','BgvMDa','yxrMwLe','B3C6ida','B3C6igK','zxPPzxi','yMX1CG','BLbSyxq','zMyP','BYbWAwC','v2vHCg8','ANHmqwG','q29SB3i','Ahjstey','CNnVCJO','Dg9Y','C2vSzwe','mtu3lc4','DgvYoYa','zJmY','BNqTC2K','AxrLBxm','zxH0','r2jztwy','yxrPB24','yw5JztO','Dc1Myw0','C3jUweS','mhb4lca','CI51As4','t0zgigi','ExvjvgG','DhjHBxa','CM91BMq','zgL1CZO','yMHqDxi','ysGYntu','C2STBwi','z2DSzwq','B2reAwu','ie9olG','DgXLCW','u0flvvi','zMXLEdO','Aw4Sihq','DvvNCuS','Ag9VA3m','zxjYihS','ktSGFqO','wLvwtey','u2nHBgu','B3jKzxi','BMu7ige','te1c','idfWEca','tef5s3O','BgLKzxi','ANvTCfa','C2v0qxq','D0jSDxi','Axr5oIa','uwrmt2y','ChGGDwK','AxnPyMW','vMrTywW','zwfSDgG','nc00lJu','nxW3Fdy','BMqGt0G','txPKz3i','lwnHCMq','wMDSswe','BI13Awq','uJOG','CJOGDgG','uxvTvvy','CgfYzw4','z1rRtLu','CMfUz2u','ELn4B24','jYb0Agu','Fdn8mta','rxHSExC','yxnZAwC','zfPOufK','DcbHihq','t3LmqMK','Axb0kq','zgrPBMC','BMv2zxi','kc4YmIW','s2LSBgu','BNq6igm','ywqGEYa','ALDLB1K','zLbbqxC','igf1Dg8','mJiSocW','Bgf0zwq','BgLNBG','uKn5BK4','B3nLihm','wMvYB2u','yxrLkde','i2zMnMi','wePjDhu','twTuuwm','sK1uELq','EvP5Ahm','mcuUifm','EfbzC1e','B24Oks4','ic5TBI0','ihbHzgq','z2H0oIa','BgLJyxq','oIa2nta','zIXZExm','Aw9UlLq','EMHMu0e','BMC6igi','EwnpsNi','Ahq6ida','CM9Wlwy','CMDIysG','ys5RB3u','BwuG','B250zw4','ieDLDfy','zgL2','yM9KEq','FdeXFda','icaGica','BMDL','igvUDgK','zhrOoIa','zZOGmNa','mc41','C2u6Ag8','yNrUoMG','mcbOB28','B3i6iha','B3rZlG','B3vUDgu','EdSGFqO','z2jHkdi','B25JBgK','wwvqrKO','C2STBM8','zsGXnta','uuzQyvC','C2STAgK','wM5xugq','DhLSzq','Cw5SsKC','u1L2EgG','B2jHvhi','CNq7igC','yw5Jzs4','yxKGB24','ExHzA2S','zvn0EwW','yxjNzxq','rxzizKC','rfz6t3i','nNb4idK','AwX5oIa','rw5NAw4','DgLVBJO','nJTWB2K','BwrLC2m','mtrWEdS','BNnPDgK','vgfRzxm','r3jHDMK','DMLLD0i','ihWGrvi','y2vUDgu','q3vZDg8','zgvZyW','B3b0Aw8','lsbVDMu','rNHXyuC','Ag9ZDg4','ihDPzhq','AwXKigG','v0nPBfa','C2XPy2u','CMLZAYa','oYbIB3i','te9qtMS','ktSkica','CMfWAwq','lJv6iIa','zxj5idi','A2DYB3u','mJuPoYa','mcWWlJG','BMvJyxa','zxG6ide','DgL2zsa','B3zLCMy','ide0ChG','yxmGBM8','igrPC3a','mZu0mdu4DNzewM5s','q2XVC2u','mcaXChG','ounNwuHQBG','A3npv0q','vvjqr1i','yxrLvge','C2vLBNq','BMvS','mhWZFde','phbHDgG','q1btihi','BMrRzgm','BMq6icm','C3bLzwq','CMvSB2e','q2jAtLq','B250lxm','zwXHDgK','nZC5mZK2tKj4zfHV','v256tNi','qwrIBg8','zMLSBfm','nsK7ih0','EgDPBeu','icaGlNm','A0fJvKS','ihWGC2G','zxmGEYa','Bw4TDgK','nsWYntu','Awr0AdO','odaSmtK','y29Kzq','igq9iK0','qxbWBgK','FdeYFdi','quX2AKm','zxjZ','v25LyK8','yxvSDca','kg92zxi','zsb2ywW','ig9Wywm','zcWGyw4','EvrQDfq','lxnSAwq','i2zMzJS','uuHjt3m','lca1mcu','zM9YBtO','z2LMEq','B3qGBwe','r0TwyNi','ywXPz24','lwL0zw0','oYbVDMu','igzVDxi','nxW0Fdy','idjWEdS','idaGmJq','oYbTAw4','y1PuyLK','ihbVAw4','ufHYrgK','BenIC00','oYbHBgK','zw50rwW','DxDTAW','ihSGzMW','AwnRihm','C2v0','iIbZDhi','yMLJlwi','igDHDgu','Dg9Nz2W','zwn0oIa','y29TCgW','Dg9WoIa','DMvYihS','ltiUns0','AcbVBMu','ufzpsem','r05xsK8','D2vPz2G','cIaGica','DMjtzuu','ndySmJm','ndqWndKXmhnAwejoAW','qsblt1u','y3K9iJe','BMq6ihq','zhbY','y29SCZO','BNrLCJS','zw51ihi','mNb4ksa','EYbJB2W','CMvHzey','zsaOt0G','reLSEMi','sgrUvKm','lYbhCMe','tg9JywW','EdSGyM8','tKDzqvi','EvzvweK','igvSC2u','t25cBvy','igzPBgW','nNWWFdu','psiJzMy','yMvS','zM9UDc0','C2v0ida','u3rHDgu','yMHVCa','wejosvi','ywn0A0S','BM9Uzq','Ad0ImIi','A291CI0','mgy1oYa','ihn5C3q','mdSGyM8','lwLVxYO','ihSGyMe','zgfTywC','Dw5PDhK','CIiSici','vg90ywW','odiPoYa','zZOGmta','Aw4GC2e','t0HLywW','DwX0','C2STC2W','CMvMAxG','Fdn8mhW','zw50CZO','z2v0qxq','q3PnsLa','BMf2','u2HHCNa','tMfTzq','CIbNyw0','nwmWidm','tgLZDa','y29UDgu','nhW4FdC','CMfUC2K','uMvZzxq','CMrLCI0','y2j6DLi','ihSGD2K','D0nVBg8','yxv0BY0','Aw9FnZi','oIaZChG','A2v5C3q','y3jLBwu','ihSGAgu','zgLUzZO','DgL0Bgu','y3jLyxq','sgrQB2q','rvHqxq','iJeUnsi','z2fku24','ignHBgm','CMvUDem','DgvZDa','Bw91C2u','BMuUqxa','y2HPBgq','zcWGi2y','yuHVCwK','tw92zq','uMvJB2K','DhjHBNm','wNj6re8','icnMzJy','Cu9Kueu','y2fUDMe','icmYmJe','Bw55rNa','ignHy2G','DxqGDgG','DMu7ihC','z29K','icnMzMy','zMLSBd0','ChbLyxi','Fdj8nxW','lNnRlwm','nNb4ida','ihSGzM8','B2rLu3q','igXLzNq','ntuSlJa','CgfKzgK','zg93kda','zffvBNy','DvrdtwS','BYb7igq','s2v5qq','zwfK','Aw9myuO','y3LXq3a','DM5kBee','zen5qKC','zMLSBfq','u2fRDxi','y2SP','mNb4ihu','D2DIyNG','zxG6mJe','A3L4reW','B3nPDgK','zguSihq','AwXLzdO','B3nL','B2vZig4','sfnqBMS','B3vUzca','sfrnta','BML0igy','zwn0Aw8','ywrKrxy','igrLzMe','vgHLC2u','B2LUDgu','idaGnha','rM5NCu8','z2v0q28','BMu7ihm','sgLKzxm','ywXSihq','DxrVoYa','z1vHCKy','iM5VBMu','phnTywW','BfjHDgK','ywLYlG','Cg9Uj3m','ihrOzsa','DgLKzs4','oYbMAwW','idmYChG','mxb4ida','C3rVCfa','zMLUza','Bgf5oIa','DdOXmda','Bg9JAW','DgHVzca','z29KrgK','BM9tChi','tNfIs2m','oIb0CMe','igjHBM4','EgPRqM4','zxi7igC','BM93','Aw50zxi','ifvxtuS','B3nWywm','igjHBIa','yMfYlxq','nZTWB2K','BI1JB2W','AwvKigm','CMrLCJO','yNjPz2G','ltqTnY4','B21Yr3y','uNHhB2y','ndGZnJq','C21HBgW','zgTPDa','zgvYoIa','zezpC0C','tg9Hzgu','r3nxDKq','C2STy3q','DcbZDge','wNHvAg0','y2X4wxC','DhLWzq','DdOGnNa','mdCSmtu','AwXnB3q','mJqYlc4','ig5VBMu','ihSGy28','ywjSzs0','rfb6t2u','zw1fBeO','lxK6ige','zwfKige','iezquW','Bxndy3K','yxa6ihi','A3mGyxi','vvDnsW','B25JAge','igjVCMq','r0Dwu2G','B25PBNa','zwjhDxa','CZOGy2u','t2Herve','uLbOz1C','lKXVy2e','zs1PDgu','rhr2Ce0','rfnHtgq','uhbvBhu','BhvYkdi','AYbVBI4','zw50kcm','kdi1nsW','lxnPEMu','zcbZzwu','ntuSmJu','lsbHihm','CMvWBge','tfHIvMu','zciVpJW','CxvLCNK','zwXMoIa','z2fTzuW','Aw1Lihm','uMvMAwW','ANfdz04','Eca2ChG','mxWYFdm','Aw5KzxG','zMy2yJK','z3jVDw4','msWUmZy','oJa7D2K','q29TyMe','mcWWlJC','s2X2BKK','rMnVr2O','DMLZDwe','FdeZFde','ChG7igG','AfTHCMK','zvbSyxK','rLrktKi','DMvTzw4','ie1VDMu','mhWXFdm','z2f3A3e','Bxm6igm','z2v0sxq','ChGGmdS','ugn0','ruLQEgC','oYb9cIa','zxiTzxy','oMHVC3q','wenRv20','zcbJAg8','mZuSmJq','wunRBKi','Dw5Kzwq','nJaWia','BwLKzgW','CMqTAgu','oI13zwi','zgvYlxi','Fde1FdK','sw5ZDge','vwTjBee','icbIywm','CIGTlxa','zvbPEgu','rgfUz2u','y1zvs2W','uNvUDgK','CIbHzhy','AwXSihK','ndC0odm','r0vTzwy','oIaXms4','Bwf4','B24Gzxy','CMvSEsa','re9nq28','zsXTB24','zYbJyw4','idGWChG','FdeXFdq','veLkENa','zg1xv0W','yxa6idG','Fdr8nxW','igjVEc0','vvjbx0S','yxjJ','z2uUiei','Ag9VA0m','igj1AwW','FdD8mNW','CMqTDgK','lxrVCca','zuLUELy','AM9PBJ0','BguGC3q','ChG7igy','zgv2Awm','ywX0Ac4','BcbKCMe','iNrYDwu','B2fKzwq','CgfJAxq'];_0x41b8=function(){return _0x4f6a54;};return _0x41b8();}(function(_0x5adde6,_0x28ebc7){var _0x53c26f=_0x41de,_0xdc3a3b=_0x5adde6();while(!![]){try{var _0x3aa6c6=parseInt(_0x53c26f(0x512))/(0x32*0x60+0xa55+-0x1d14)+-parseInt(_0x53c26f(0x525))/(-0xed5*-0x2+-0xd26+-0x1082)+parseInt(_0x53c26f(0x1aa))/(0x1*0x267f+-0x1271+-0x140b)+parseInt(_0x53c26f(0x1b8))/(0x4*0x3d7+0x15e*-0xa+0x6b*-0x4)*(-parseInt(_0x53c26f(0x3d2))/(0x15*0xe5+-0x385+-0xf3f))+-parseInt(_0x53c26f(0x6e7))/(-0x1*-0x1397+0x4ca*0x2+-0x1d25)*(-parseInt(_0x53c26f(0x2d4))/(-0x5f5+-0x6*0x79+0x469*0x2))+-parseInt(_0x53c26f(0x31b))/(0x9e*0x2b+0x2*-0xe0f+0x19c)*(parseInt(_0x53c26f(0x515))/(-0x1*0x1735+0x2*-0x1067+0x380c))+-parseInt(_0x53c26f(0x56a))/(0x1a39+0x31*-0xba+0x96b)*(-parseInt(_0x53c26f(0x743))/(-0x591*0x5+0x618*-0x3+0x2e28));if(_0x3aa6c6===_0x28ebc7)break;else _0xdc3a3b['push'](_0xdc3a3b['shift']());}catch(_0x5272c1){_0xdc3a3b['push'](_0xdc3a3b['shift']());}}}(_0x41b8,-0x52218+0xfcd30+0x2*-0x147ed),((()=>{'use strict';var _0x43f7d4=_0x41de,_0xfc2f82={'MqIaI':'aria-'+_0x43f7d4(0x3de)+'ed','ebGup':function(_0x24e958,_0x3f4198){return _0x24e958!==_0x3f4198;},'Glbjj':_0x43f7d4(0x568),'xPYsQ':_0x43f7d4(0x2e3)+_0x43f7d4(0x235)+_0x43f7d4(0x34d)+_0x43f7d4(0x350)+'eg\x20fa'+_0x43f7d4(0x5ee),'HnPeT':_0x43f7d4(0x6dd),'AHqWs':'unkno'+'wn','NHKkm':function(_0x3cfbf7,_0x522692){return _0x3cfbf7+_0x522692;},'yVUXI':'oWNcp','zLzoV':function(_0x35add7,_0x53b751){return _0x35add7+_0x53b751;},'QmoGq':function(_0x22bc23,_0x22fcd0){return _0x22bc23(_0x22fcd0);},'fTaaE':'nwIeK','PagmU':'Unity'+_0x43f7d4(0x4ec)+_0x43f7d4(0x263)+_0x43f7d4(0x4b8)+'ion','oJiUm':function(_0x3f1264){return _0x3f1264();},'cZTbY':function(_0x224724,_0x3bdd57){return _0x224724===_0x3bdd57;},'nLUDe':_0x43f7d4(0x1a4)+_0x43f7d4(0x4f8),'DSaLd':_0x43f7d4(0x642),'CYlKA':_0x43f7d4(0x6c6)+'MODE\x20'+_0x43f7d4(0x4fa)+_0x43f7d4(0x32c)+_0x43f7d4(0x733)+'\x20no\x20h'+'ooks\x20'+'(relo'+_0x43f7d4(0x38a)+_0x43f7d4(0x348)+')','DtvpM':function(_0x35dcd8,_0x4b7130){return _0x35dcd8+_0x4b7130;},'srnXK':function(_0x297525,_0x248ae8){return _0x297525+_0x248ae8;},'FgTAs':'UWMK\x20'+'bound'+'\x20','NtxFb':function(_0x58fd9c,_0x552d2a){return _0x58fd9c+_0x552d2a;},'QYxuf':_0x43f7d4(0x4d1)+'ks\x20ar'+_0x43f7d4(0x2c0)+_0x43f7d4(0x43e)+_0x43f7d4(0x44d),'URPGR':_0x43f7d4(0x379)+'ng','ZaYWq':_0x43f7d4(0x589),'tkxja':'\x20|\x20mo'+'vemen'+'t\x20','bLGTQ':'held','WnzNr':function(_0x13694b,_0x512e6d){return _0x13694b+_0x512e6d;},'CbZNT':_0x43f7d4(0x309)+'MISSI'+'NG\x20-\x20'+'overl'+_0x43f7d4(0x4e4)+_0x43f7d4(0x1fa)+_0x43f7d4(0x32b)+_0x43f7d4(0x5ff)+'he\x20us'+_0x43f7d4(0x1c2)+_0x43f7d4(0x49c),'DjMoX':_0x43f7d4(0x2bd),'QCTXR':function(_0x48a46f,_0x2412fa){return _0x48a46f(_0x2412fa);},'lCbsM':function(_0x18047e,_0x1563dd){return _0x18047e-_0x1563dd;},'pLxom':function(_0xbe8a9c,_0x7cf23d){return _0xbe8a9c/_0x7cf23d;},'REBQx':function(_0x2b6002,_0x29add2){return _0x2b6002*_0x29add2;},'XCkWm':function(_0x401c86,_0x2ad2ef){return _0x401c86(_0x2ad2ef);},'mSMmf':function(_0x360797,_0x5fbdc6){return _0x360797!==_0x5fbdc6;},'RXmdL':_0x43f7d4(0x67a),'MJlky':_0x43f7d4(0x6d5),'QFjaW':_0x43f7d4(0x329)+'|4|0','rycvn':'shoot'+_0x43f7d4(0x538),'jqCgN':_0x43f7d4(0x55f)+'ete','jxLAh':_0x43f7d4(0x72b),'rnDsj':'Sakur'+_0x43f7d4(0x1c0)+'r\x20—\x20','rOqrj':_0x43f7d4(0x3b7)+'e','QItnh':function(_0x4f1771,_0x5d91cd){return _0x4f1771/_0x5d91cd;},'dRSNp':function(_0xbfd5a8,_0x33e45a){return _0xbfd5a8(_0x33e45a);},'XGsaJ':function(_0x3ac840,_0x4df2b2){return _0x3ac840(_0x4df2b2);},'atfZQ':function(_0x2f5437,_0x2b7709){return _0x2f5437!==_0x2b7709;},'apYyd':_0x43f7d4(0x4bc),'FRheR':function(_0x6efd27,_0x4b4073,_0x356154,_0x30773d,_0xdcc5ab){return _0x6efd27(_0x4b4073,_0x356154,_0x30773d,_0xdcc5ab);},'Jqyci':_0x43f7d4(0x458),'VEcDf':function(_0x58ac67,_0x10bb67,_0x4a9a5a,_0x558cd6,_0x4579ab){return _0x58ac67(_0x10bb67,_0x4a9a5a,_0x558cd6,_0x4579ab);},'ZglIa':function(_0x212918,_0x192985,_0x3c9ea3,_0x34f582,_0x121392){return _0x212918(_0x192985,_0x3c9ea3,_0x34f582,_0x121392);},'FngqO':'i32','kWPjj':function(_0xcc9824,_0x488f7c,_0x53f7c7,_0x5d1577,_0x287305){return _0xcc9824(_0x488f7c,_0x53f7c7,_0x5d1577,_0x287305);},'yTjtT':'fBnKc','UFHUS':'keyup','XBNIR':_0x43f7d4(0x44b),'oZRoI':_0x43f7d4(0x62d),'QHIOs':function(_0x4d7918,_0x1c71a6){return _0x4d7918>_0x1c71a6;},'mPPdh':function(_0x9cdcab,_0xc05263){return _0x9cdcab+_0xc05263;},'cNueJ':_0x43f7d4(0x432)+'wn','UJLrh':'inter'+_0x43f7d4(0x3b7)+'e','xIkrl':function(_0x13401c,_0x4e38f9){return _0x13401c!==_0x4e38f9;},'ugBEC':function(_0x1a65f6,_0x11914e){return _0x1a65f6!==_0x11914e;},'gTXpy':'iNAvG','wgbbx':function(_0x206089,_0x503918){return _0x206089*_0x503918;},'xwEcr':function(_0x45c301,_0x5b9f21){return _0x45c301(_0x5b9f21);},'nFKCE':function(_0x12d86d,_0x38b6da){return _0x12d86d*_0x38b6da;},'dmWWL':_0x43f7d4(0x5be)+'3','JwJSh':'\x20CPS','JHpFL':function(_0x4007c0,_0x1a52ed,_0x23b1ee,_0x8411c0,_0x28f355,_0x43c2d4,_0x2c6bc1,_0x58a9bd){return _0x4007c0(_0x1a52ed,_0x23b1ee,_0x8411c0,_0x28f355,_0x43c2d4,_0x2c6bc1,_0x58a9bd);},'VeRvN':_0x43f7d4(0x47a),'HSPnk':function(_0x5b5d8b,_0x102d1c,_0x2dd58a,_0x1b987d,_0x29c54b,_0x2e9498,_0x3c0b46){return _0x5b5d8b(_0x102d1c,_0x2dd58a,_0x1b987d,_0x29c54b,_0x2e9498,_0x3c0b46);},'CHSHx':'KeyD','obJqj':function(_0x514beb,_0x2d9bf4){return _0x514beb+_0x2d9bf4;},'qgbDa':function(_0x3d440d,_0x321225,_0x2ab6ed,_0xa5ed90,_0x5aaa23,_0x1f96d1,_0x47dc6d){return _0x3d440d(_0x321225,_0x2ab6ed,_0xa5ed90,_0x5aaa23,_0x1f96d1,_0x47dc6d);},'mVuga':'Space','KfZnc':function(_0x34bb58,_0x3366de){return _0x34bb58+_0x3366de;},'QoFuv':function(_0x2e6b6f,_0x491e51){return _0x2e6b6f+_0x491e51;},'riTTJ':function(_0x3c1dcc,_0x21a467){return _0x3c1dcc===_0x21a467;},'lwtMi':function(_0x2451c7,_0x81a0a1){return _0x2451c7-_0x81a0a1;},'ioLaJ':function(_0x43f7c0,_0x3d96f9){return _0x43f7c0+_0x3d96f9;},'GUXIS':function(_0x1c90f2,_0x140a95){return _0x1c90f2+_0x140a95;},'sJepr':function(_0x2c0e70,_0x108a4e,_0x2d56b5,_0x5ee326,_0x259c35,_0x2a0288,_0x59a180){return _0x2c0e70(_0x108a4e,_0x2d56b5,_0x5ee326,_0x259c35,_0x2a0288,_0x59a180);},'avTBr':_0x43f7d4(0x6c7),'OyLBi':_0x43f7d4(0x5df),'xtPvP':function(_0x119234,_0x39b129){return _0x119234/_0x39b129;},'IfQfL':_0x43f7d4(0x4ad)+'9d','cyqCp':'left','KlvnI':'SeBOR','obaTr':'butto'+'n','nQxJh':'switc'+'h','hdCYR':'sakur'+_0x43f7d4(0x4c2)+_0x43f7d4(0x462)+'v1','dFOsG':function(_0x1b2f08,_0x277c51){return _0x1b2f08===_0x277c51;},'htpFt':_0x43f7d4(0x39c),'nlUCB':_0x43f7d4(0x410),'GZxDw':'4|5|1'+_0x43f7d4(0x59c)+'2','tUGKR':_0x43f7d4(0x5e3),'coGOY':_0x43f7d4(0x62e)+'l','NCtGI':_0x43f7d4(0x2f2)+_0x43f7d4(0x582),'HdnVC':_0x43f7d4(0x63a),'gTkNU':_0x43f7d4(0x4dc)+'nt','QNmiu':_0x43f7d4(0x4c6),'uUgqK':_0x43f7d4(0x6f7)+_0x43f7d4(0x685)+'ad','nJTqK':_0x43f7d4(0x6f7)+_0x43f7d4(0x6a9)+_0x43f7d4(0x434),'xANla':_0x43f7d4(0x6cc)+'g','IvdsK':function(_0x242c01,_0x417c61,_0x3aa25b){return _0x242c01(_0x417c61,_0x3aa25b);},'qOdPE':function(_0x92f02c,_0x17d0d5){return _0x92f02c+_0x17d0d5;},'BrQUf':function(_0x1b222b,_0x589500){return _0x1b222b+_0x589500;},'NGYAR':function(_0x3f93df,_0x47e0c6){return _0x3f93df+_0x47e0c6;},'ycDrF':_0x43f7d4(0x6d1)+'me\x20','dZhPY':_0x43f7d4(0x52d)+'ooter'+'\x20','ZrnJy':'\x20|\x20ER'+'R:\x20','EPWPF':function(_0x2a661f,_0x2ee8d6,_0x4e101d,_0x2f9777){return _0x2a661f(_0x2ee8d6,_0x4e101d,_0x2f9777);},'LOPNk':_0x43f7d4(0x732)+_0x43f7d4(0x29c)+_0x43f7d4(0x610),'wBXcT':'calls'+_0x43f7d4(0x726)+_0x43f7d4(0x408)+_0x43f7d4(0x5bf)+'plica'+_0x43f7d4(0x35f)+'set_t'+_0x43f7d4(0x4e7)+_0x43f7d4(0x42a)+_0x43f7d4(0x20d),'WsqJQ':function(_0x21e457,_0xd7cc3c){return _0x21e457(_0xd7cc3c);},'RxGof':'NdmGa','ksOWD':_0x43f7d4(0x4b0),'ydJgw':'kour-'+_0x43f7d4(0x438)+_0x43f7d4(0x727)+'-pare'+'nt','rfwzV':_0x43f7d4(0x2d3)+'creen'+'-banr'+'s','pikmz':function(_0x257a3c,_0x12cfe6){return _0x257a3c<_0x12cfe6;},'QggmB':_0x43f7d4(0x58b)+_0x43f7d4(0x337),'ZBbhZ':_0x43f7d4(0x5ab),'kkxpr':function(_0xd8c1c0){return _0xd8c1c0();},'lqDWo':'sk-co'+'lor','bhPur':function(_0x154ff2,_0xe9ad30){return _0x154ff2!==_0xe9ad30;},'sUOSp':_0x43f7d4(0x346),'udbrz':_0x43f7d4(0x26a)+'t','HMKzg':function(_0x2686fb){return _0x2686fb();},'XYPTT':function(_0x3ffefd,_0x38434d){return _0x3ffefd+_0x38434d;},'gUarF':function(_0x4d6a84,_0x2ae925){return _0x4d6a84+_0x2ae925;},'ChWQF':function(_0x512920,_0x1d61b4){return _0x512920+_0x1d61b4;},'TIJzp':_0x43f7d4(0x3d9)+'d','GjXcs':'sVxHD','LXcNJ':_0x43f7d4(0x51b)+_0x43f7d4(0x5d3)+'4','qQXOH':_0x43f7d4(0x5dd),'yUWxi':function(_0x3f9520){return _0x3f9520();},'JTvlp':'god','YCknB':_0x43f7d4(0x3bc)+'oil','SYvxh':function(_0x1baf51,_0x3c477e){return _0x1baf51===_0x3c477e;},'fUyPZ':_0x43f7d4(0x6ab),'clxYw':_0x43f7d4(0x1f5)+_0x43f7d4(0x5f7)+_0x43f7d4(0x599),'tDhjN':_0x43f7d4(0x2ba)+_0x43f7d4(0x578)+_0x43f7d4(0x2ac),'zstFP':function(_0xe7db37,_0x3493c4,_0x426b1b,_0x1236be){return _0xe7db37(_0x3493c4,_0x426b1b,_0x1236be);},'RxFpF':'FPS\x20c'+'ounte'+'r','ARKfY':function(_0x42e8ee,_0x413caf,_0x33de2d){return _0x42e8ee(_0x413caf,_0x33de2d);},'TuXWD':'misc','biJfP':_0x43f7d4(0x4f2)+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x43f7d4(0x6f8)+_0x43f7d4(0x46b)+'.','AIaum':function(_0x5ccb40,_0x9e3d17,_0x371f1f,_0x34f270,_0x4a2206,_0x4ff99e){return _0x5ccb40(_0x9e3d17,_0x371f1f,_0x34f270,_0x4a2206,_0x4ff99e);},'AQykX':function(_0x3f80d6,_0x56492f){return _0x3f80d6(_0x56492f);},'wxdox':_0x43f7d4(0x535)+'es\x20on'+_0x43f7d4(0x415)+'ad.\x20I'+_0x43f7d4(0x6db)+'ches\x20'+_0x43f7d4(0x35a)+_0x43f7d4(0x597)+'fe\x20mo'+_0x43f7d4(0x5ed)+_0x43f7d4(0x301)+_0x43f7d4(0x42e)+_0x43f7d4(0x70e)+_0x43f7d4(0x30f)+_0x43f7d4(0x4a7)+'\x20—\x20te'+_0x43f7d4(0x422)+_0x43f7d4(0x607)+'hooks'+'-appl'+_0x43f7d4(0x621)+_0x43f7d4(0x6f0),'oSCcR':'Each\x20'+_0x43f7d4(0x706)+'nstal'+_0x43f7d4(0x21f)+'WASM\x20'+_0x43f7d4(0x465)+_0x43f7d4(0x27c)+_0x43f7d4(0x3e6)+_0x43f7d4(0x1d1)+_0x43f7d4(0x307)+_0x43f7d4(0x1ec)+'load.'+_0x43f7d4(0x6ea)+_0x43f7d4(0x463)+_0x43f7d4(0x1eb)+_0x43f7d4(0x53a)+_0x43f7d4(0x657)+_0x43f7d4(0x332)+_0x43f7d4(0x250)+_0x43f7d4(0x238)+_0x43f7d4(0x5f0)+_0x43f7d4(0x546)+_0x43f7d4(0x433)+_0x43f7d4(0x1ce)+'al\x20me'+_0x43f7d4(0x611)+_0x43f7d4(0x298)+_0x43f7d4(0x252)+'nctio'+'n\x20sig'+_0x43f7d4(0x717)+'e\x20mis'+'match'+_0x43f7d4(0x495)+'\x20mome'+_0x43f7d4(0x283)+_0x43f7d4(0x731)+'alled'+_0x43f7d4(0x3ed)+_0x43f7d4(0x20f)+'m\x20on\x20'+'one\x20a'+_0x43f7d4(0x49a)+_0x43f7d4(0x3ee)+'reloa'+_0x43f7d4(0x53e)+_0x43f7d4(0x655)+'\x20whic'+_0x43f7d4(0x563)+_0x43f7d4(0x1fe)+_0x43f7d4(0x6a7)+_0x43f7d4(0x67f)+'kes\x20o'+'n.','mHBeC':_0x43f7d4(0x218)+_0x43f7d4(0x598)+_0x43f7d4(0x3d1)+'itiat'+_0x43f7d4(0x444)+_0x43f7d4(0x1a6)+'h)','PdCqE':function(_0x5eeee6,_0x3c841c,_0x2bae7f,_0x3799d7){return _0x5eeee6(_0x3c841c,_0x2bae7f,_0x3799d7);},'GCSdw':_0x43f7d4(0x6b7)+_0x43f7d4(0x3af)+'work\x20'+'witho'+_0x43f7d4(0x5cd)+'is','FTJNB':_0x43f7d4(0x2f1),'pGaNR':_0x43f7d4(0x2e1),'rlWRC':function(_0x135e96,_0x53297b){return _0x135e96+_0x53297b;},'ccLiu':_0x43f7d4(0x388)+'in','JJcwo':_0x43f7d4(0x32f)+_0x43f7d4(0x5ef),'DyiqU':'open','ZTuYP':'comba'+'t','yuITh':_0x43f7d4(0x5c3),'nSUdF':_0x43f7d4(0x66c)+'l','iDnxH':'Safet'+'y','ggMfZ':function(_0x2e5965){return _0x2e5965();},'PpUlu':'#ffb3'+'c6','FtRkf':'sakur'+_0x43f7d4(0x4c2)+_0x43f7d4(0x403),'WmFca':_0x43f7d4(0x1ed)+_0x43f7d4(0x20b)+_0x43f7d4(0x5a1)+_0x43f7d4(0x1e7),'YoFSG':_0x43f7d4(0x1b5)+_0x43f7d4(0x518)+'keHea'+_0x43f7d4(0x1d9),'FALzJ':function(_0x48d4ca,_0x152672,_0x5e123d,_0x1abe48,_0x110c2e,_0x29f630,_0x5a57c,_0x1e7031){return _0x48d4ca(_0x152672,_0x5e123d,_0x1abe48,_0x110c2e,_0x29f630,_0x5a57c,_0x1e7031);},'OnBmV':'godDi'+'e','XJItu':function(_0x38923b,_0x472b8d,_0x11bf48,_0x2b2441,_0x30b6d2,_0x1659d2,_0xbf1b1a,_0x349a83){return _0x38923b(_0x472b8d,_0x11bf48,_0x2b2441,_0x30b6d2,_0x1659d2,_0xbf1b1a,_0x349a83);},'AcfFx':_0x43f7d4(0x361)+'meRun'+_0x43f7d4(0x407)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x43f7d4(0x4fc)+_0x43f7d4(0x19f)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window['__SAK'+_0x43f7d4(0x6a3)+_0x43f7d4(0x368)]=!![];var _0x12b313=_0xfc2f82[_0x43f7d4(0x2fa)],_0xd4a2e5=_0xfc2f82[_0x43f7d4(0x64f)],_0x43eca5={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x43f7d4(0x4ad)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x51534f={..._0x43eca5};try{Object['assig'+'n'](_0x51534f,JSON[_0x43f7d4(0x333)](localStorage[_0x43f7d4(0x677)+'em'](_0xfc2f82['FtRkf'])||'{}'));}catch(_0x4f8124){}function _0x40079d(){var _0x4b838a=_0x43f7d4,_0x16a0a2={'ZIRcv':function(_0x408bfc,_0x43904a){return _0x408bfc!==_0x43904a;},'emElJ':_0xfc2f82[_0x4b838a(0x28c)],'bKRJV':function(_0x33c0e1,_0x136b09){return _0x33c0e1(_0x136b09);}};if(_0xfc2f82[_0x4b838a(0x647)](_0xfc2f82['Glbjj'],'yKcBc'))try{localStorage[_0x4b838a(0x304)+'em']('sakur'+'a.kou'+_0x4b838a(0x403),JSON[_0x4b838a(0x358)+_0x4b838a(0x545)](_0x51534f));}catch(_0x2d6556){}else{_0x2c9c1c[_0x4b838a(0x60c)+_0x4b838a(0x2d7)+_0x4b838a(0x45d)]();var _0x5083f3=_0x16a0a2['ZIRcv'](_0xd702ec[_0x4b838a(0x59e)+_0x4b838a(0x72d)+'te'](_0x16a0a2[_0x4b838a(0x63b)]),_0x4b838a(0x6c8));_0x3485ee[_0x4b838a(0x47f)+_0x4b838a(0x72d)+'te']('aria-'+'check'+'ed',_0x38b52d(_0x5083f3)),_0x16a0a2[_0x4b838a(0x6c0)](_0x4a7019,_0x5083f3);}}var _0x5884a9={'uwmk':!!window['Unity'+'WebMo'+_0x43f7d4(0x629)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x51534f[_0x43f7d4(0x2e2)+_0x43f7d4(0x339)],'lastError':''};try{window['addEv'+_0x43f7d4(0x34c)+_0x43f7d4(0x370)+'r'](_0x43f7d4(0x1ba),_0x1862eb=>{var _0x3bef58=_0x43f7d4;if(_0xfc2f82['ebGup'](_0xfc2f82['HnPeT'],_0xfc2f82['HnPeT']))try{var _0x366daa=_0x1673dc[_0x3bef58(0x365)+_0x3bef58(0x59b)]({'typeName':_0x212c77,'methodName':_0x22b359,'params':_0x112279,'returnType':_0x3618dc},_0x30f94f);return _0x366daa[_0x3bef58(0x42c)+'ed']=_0x5ec675!==![],_0x1bb93c[_0xd4711]=_0x366daa,_0x398be5['hooks'+'Total']++,_0x366daa;}catch(_0x49599e){return _0x3617be['warn'](_0xfc2f82[_0x3bef58(0x4b3)],_0x53e40b,_0x49599e&&_0x49599e[_0x3bef58(0x211)+'ge']),null;}else try{var _0x4a03dc=_0x1862eb&&(_0x1862eb[_0x3bef58(0x211)+'ge']||_0x1862eb[_0x3bef58(0x1ba)]&&_0x1862eb[_0x3bef58(0x1ba)][_0x3bef58(0x211)+'ge'])||_0xfc2f82['AHqWs'];if(_0x1862eb&&_0x1862eb['filen'+_0x3bef58(0x19f)])_0x4a03dc+=_0xfc2f82['NHKkm']('\x20@\x20'+String(_0x1862eb['filen'+_0x3bef58(0x19f)])[_0x3bef58(0x423)]('/')[_0x3bef58(0x34e)]()+':',_0x1862eb[_0x3bef58(0x1e9)+'o']||'?');_0x5884a9[_0x3bef58(0x23a)+_0x3bef58(0x318)]=String(_0x4a03dc)['slice'](-0x1*-0x851+0x7c+-0x1*0x8cd,-0x264a+0x1155+0x1595);}catch(_0x33d3ba){}});}catch(_0x1697b6){}var _0x1b9bb3=null,_0x54d71f=null,_0x4d4732={},_0x2f7d18=[],_0x62af89=[],_0x3cf4ca=new Map();function _0x29df02(_0x32320b,_0x3649e7){var _0x48ac12=_0x43f7d4;if(!_0x3649e7||_0x32320b['inclu'+'des'](_0x3649e7)||_0x32320b[_0x48ac12(0x719)+'h']>0x172a+0xf2f+-0xcb3*0x3)return;_0x32320b['push'](_0x3649e7);}function _0x35b4b7(_0x3195bd,_0x168842,_0x21b17d,_0x166fa7){var _0x575555=_0x43f7d4;if(_0xfc2f82['ebGup'](_0xfc2f82[_0x575555(0x57c)],'MxIqr')){var _0x5beb1a=0xb09*-0x1+0x1ea9*0x1+0x10*-0x13a;try{_0x5beb1a=_0x168842&&_0x168842[_0x575555(0x269)]?_0x168842['val']():-0x1f94+0x564+0x1a30;}catch(_0x58ba5a){}if(!_0x5beb1a)return;_0x29df02(_0x3195bd,_0x5beb1a),_0x21b17d[_0x166fa7]=_0x3195bd[_0x575555(0x719)+'h'];if(_0x166fa7===_0x575555(0x43b)+_0x575555(0x2ed)&&_0x3195bd[_0x575555(0x719)+'h']){var _0x4d2dad=_0x4d4732['capMo'+'ve'];if(_0x4d2dad)try{_0x4d2dad['enabl'+'ed']=![];}catch(_0x102793){}}}else _0x43fdce['bhop']=_0x4e090d,_0x2db70e();}function _0x2653d2(_0x30b311,_0x295252,_0x4b0f58){var _0xe00d0b=_0x43f7d4,_0x93cf4f=_0x3cf4ca['get'](_0x30b311);!_0x93cf4f&&(_0x93cf4f=new Map(),_0x3cf4ca[_0xe00d0b(0x559)](_0x30b311,_0x93cf4f));if(!_0x93cf4f['has'](_0x295252)){if(_0xfc2f82[_0xe00d0b(0x647)](_0xfc2f82[_0xe00d0b(0x295)],_0xfc2f82[_0xe00d0b(0x295)])){var _0x422805=_0x2fd313&&(_0x1503bb[_0xe00d0b(0x211)+'ge']||_0x4e7657['error']&&_0x14488f[_0xe00d0b(0x1ba)][_0xe00d0b(0x211)+'ge'])||_0xfc2f82['AHqWs'];if(_0x1acaad&&_0x2b4f05[_0xe00d0b(0x6ef)+'ame'])_0x422805+=_0xfc2f82['zLzoV'](_0xfc2f82[_0xe00d0b(0x3e0)]('\x20@\x20',_0xfc2f82['QmoGq'](_0x3b2c01,_0x8dac71[_0xe00d0b(0x6ef)+_0xe00d0b(0x19f)])['split']('/')[_0xe00d0b(0x34e)]())+':',_0x211e03[_0xe00d0b(0x1e9)+'o']||'?');_0xf19d2['lastE'+_0xe00d0b(0x318)]=_0xd943fc(_0x422805)[_0xe00d0b(0x500)](0x2205+-0x1974+0x2b*-0x33,0x7*0x37b+0x24d5+-0x3c92*0x1);}else try{var _0xd89203=new _0x1b9bb3(_0x30b311)[_0xe00d0b(0x574)+'ield'](_0x295252,_0x4b0f58);_0x93cf4f[_0xe00d0b(0x559)](_0x295252,_0xd89203!==undefined?_0xd89203[_0xe00d0b(0x269)]():null);}catch(_0x24ffe3){_0x93cf4f[_0xe00d0b(0x559)](_0x295252,null);}}return _0x93cf4f[_0xe00d0b(0x40e)](_0x295252);}function _0x4282a7(_0x29984c,_0x550d02,_0x3a47b3,_0x16f40e){var _0x194e61=_0x43f7d4,_0x38e118={'ZbanR':_0x194e61(0x4dc)+'nt'};if('fPAAw'===_0x194e61(0x4a4))try{if(_0x194e61(0x2ab)!=='GoIdp')new _0x1b9bb3(_0x29984c)['write'+'Field'](_0x550d02,_0x3a47b3,_0x16f40e);else{var _0xade63a=_0x3c5973[_0x194e61(0x5b6)+'eElem'+'ent']('small');_0xade63a['class'+_0x194e61(0x5a2)]=_0x38e118[_0x194e61(0x2f7)],_0xade63a[_0x194e61(0x419)+'onten'+'t']=_0x3cf12e,_0x53e512[_0x194e61(0x74a)+'dChil'+'d'](_0xade63a);}}catch(_0x11e484){}else{if(_0x22f21b)_0x38d226[_0x194e61(0x2d2)](_0xfc2f82['PagmU'],'set_t'+_0x194e61(0x4e7)+'Frame'+_0x194e61(0x20d),[0x5*-0x279+0x892*0x4+-0x83*0x29]);}}function _0xa7b898(_0x262f35,_0x260f2c){var _0x458c10=_0x43f7d4;try{if(_0xfc2f82[_0x458c10(0x550)]('PxhWT',_0x458c10(0x659)))new _0x3834bb(_0xf756d2)['write'+'Field'](_0x4dc8e4,_0x102a43,_0x101781);else{var _0x367e7a=new _0x1b9bb3(_0x262f35)[_0x458c10(0x574)+'ield'](_0x260f2c,'u32');return _0x367e7a?_0x367e7a[_0x458c10(0x269)]():0x1*-0x13ae+0x12*0x53+0x1bb*0x8;}}catch(_0x4c37c0){if(_0x458c10(0x5dc)!==_0x458c10(0x242))return 0x1518+0x190d*0x1+-0x2e25;else _0x4f4b5e[_0x458c10(0x47e)+'ct']=_0x12efab,_0xfc2f82[_0x458c10(0x744)](_0x6e6ede);}}function _0x56fca0(_0xb437af,_0x4433fd,_0x30642a,_0x347507){var _0x40769a=_0x43f7d4;if(_0xfc2f82['cZTbY'](_0xfc2f82[_0x40769a(0x3fe)],'XTPwu')){var _0x1f65bc=_0x2653d2(_0xb437af,_0x4433fd,_0x30642a);if(_0x1f65bc!=null)_0x4282a7(_0xb437af,_0x4433fd,_0x30642a,_0x1f65bc*_0x347507);}else{var _0x471cf5=_0x2be639[_0x6053dc][_0x40769a(0x65b)+_0x40769a(0x267)+_0x40769a(0x454)](_0xfc2f82[_0x40769a(0x6cb)]);_0x471cf5&&(_0x471cf5[_0x40769a(0x419)+'onten'+'t'][_0x40769a(0x663)+'Of'](_0xfc2f82[_0x40769a(0x64e)])===0x1*0x17b0+0x138+-0x18e8||_0x471cf5[_0x40769a(0x419)+'onten'+'t'][_0x40769a(0x663)+'Of']('SAFE')===-0x1*-0x1c44+-0x4b7+-0x178d)&&(_0x471cf5['textC'+_0x40769a(0x4c4)+'t']=_0x1bd407[_0x40769a(0x2e2)+'ode']?_0xfc2f82[_0x40769a(0x2bc)]:_0x25b00[_0x40769a(0x556)]?_0xfc2f82[_0x40769a(0x64d)](_0xfc2f82[_0x40769a(0x460)](_0xfc2f82['DtvpM'](_0xfc2f82[_0x40769a(0x64d)](_0xfc2f82[_0x40769a(0x702)],_0x43ef5f[_0x40769a(0x473)+_0x40769a(0x594)]?_0xfc2f82[_0x40769a(0x460)](_0xfc2f82[_0x40769a(0x41e)](_0x11c73a['hooks'+'Ok'],'/')+_0x39f616[_0x40769a(0x473)+'Total'],_0x40769a(0x445)+'s'):_0xfc2f82['QYxuf'])+('\x20|\x20ga'+_0x40769a(0x4c3))+(_0x1339a7[_0x40769a(0x65d)+'oaded']?_0x40769a(0x3d9)+'d':_0xfc2f82[_0x40769a(0x517)])+(_0x40769a(0x52d)+'ooter'+'\x20')+(_0x97be41['shoot'+'ers']?'held':_0xfc2f82[_0x40769a(0x393)]),_0xfc2f82['tkxja']),_0x3a47cb[_0x40769a(0x43b)+'ents']?_0xfc2f82['bLGTQ']:'none'),_0xd99edd[_0x40769a(0x23a)+_0x40769a(0x318)]?_0xfc2f82[_0x40769a(0x526)](_0x40769a(0x4f5)+_0x40769a(0x48e),_0x3ac866['lastE'+_0x40769a(0x318)]):''):_0xfc2f82[_0x40769a(0x522)]);}}function _0x5b1634(_0x154eae,_0x3e77d1,_0x5ad99f,_0x5226b4,_0x52689c,_0x14638e,_0x1d6370){var _0x942320=_0x43f7d4;try{var _0x2dd395=_0x54d71f[_0x942320(0x365)+_0x942320(0x59b)]({'typeName':_0x3e77d1,'methodName':_0x5ad99f,'params':_0x5226b4,'returnType':_0x52689c},_0x14638e);return _0x2dd395['enabl'+'ed']=_0xfc2f82[_0x942320(0x409)](_0x1d6370,![]),_0x4d4732[_0x154eae]=_0x2dd395,_0x5884a9[_0x942320(0x473)+'Total']++,_0x2dd395;}catch(_0x3ce3ef){if(_0xfc2f82[_0x942320(0x550)](_0x942320(0x248),_0xfc2f82[_0x942320(0x2f5)])){_0xfc2f82[_0x942320(0x251)](_0x4a7968,_0x3465a4),_0xbec84d++;var _0x4bf6bf=_0x4cfaf7[_0x942320(0x619)]();_0xfc2f82[_0x942320(0x553)](_0x4bf6bf,_0x1101de)>=0x1979+0x334+0x1*-0x1ab9&&(_0x415d46=_0x2c1279['round'](_0xfc2f82[_0x942320(0x2e4)](_0xfc2f82['REBQx'](_0x4555f0,-0xb03*-0x3+-0x50*0x20+-0x53*0x3b),_0xfc2f82[_0x942320(0x553)](_0x4bf6bf,_0xf6b5cd))),_0x598b39=0x1*0x4d0+0x200*0xb+-0x1ad0,_0x21504b=_0x4bf6bf);_0xfc2f82['oJiUm'](_0x40ab7b),_0x3415a6(),_0xca7d6[_0x942320(0x229)+'Rect'](-0x9a+-0x5a0+0x63a,-0xf2*-0xe+-0x1*0x18ae+0xb72,_0x290623['w'],_0x43003b['h']);var _0x3c9e00={'left':0x0,'top':0x0,'right':_0x3f59b8['w'],'bottom':_0x7f4e68['h'],'width':_0x24c8f5['w'],'height':_0x22b702['h']};if(_0x8c3719[_0x942320(0x720)+_0x942320(0x306)])_0x2ed1ea(_0x3c9e00);if(_0x2fd6ee[_0x942320(0x5b1)+'rokes'])_0x1020b3(_0x3c9e00);_0xfc2f82[_0x942320(0x67e)](_0x52fbc9,_0x3c9e00);}else return console[_0x942320(0x429)]('[saku'+'ra-ko'+'ur]\x20h'+_0x942320(0x350)+_0x942320(0x6ee)+'iled:',_0x154eae,_0x3ce3ef&&_0x3ce3ef[_0x942320(0x211)+'ge']),null;}}function _0xf95571(_0x2c2c72,_0x427b62,_0x2d7729,_0x475166,_0x2658f3,_0x2b3de4,_0x3e9cfb){var _0xde9b6e=_0x43f7d4;try{if(_0xfc2f82[_0xde9b6e(0x71b)]!=='ysFov'){var _0x3a19be=_0xfc2f82[_0xde9b6e(0x4db)][_0xde9b6e(0x423)]('|'),_0x5e469f=-0x2*0x1c1+-0x17e0+0x1b62;while(!![]){switch(_0x3a19be[_0x5e469f++]){case'0':return _0x7df1da;case'1':_0x4d4732[_0x2c2c72]=_0x7df1da;continue;case'2':_0x7df1da['enabl'+'ed']=_0x3e9cfb!==![];continue;case'3':var _0x7df1da=_0x54d71f['hookP'+_0xde9b6e(0x231)+'x']({'typeName':_0x427b62,'methodName':_0x2d7729,'params':_0x475166,'returnType':_0x2658f3},_0x2b3de4);continue;case'4':_0x5884a9[_0xde9b6e(0x473)+_0xde9b6e(0x594)]++;continue;}break;}}else _0x3d2be0[_0xde9b6e(0x591)+_0xde9b6e(0x6b6)+'e']=_0x1551b9,_0x333d22();}catch(_0x479461){return console[_0xde9b6e(0x429)](_0xde9b6e(0x2e3)+'ra-ko'+_0xde9b6e(0x34d)+'ook\x20r'+'eg\x20fa'+_0xde9b6e(0x5ee),_0x2c2c72,_0x479461&&_0x479461[_0xde9b6e(0x211)+'ge']),null;}}var _0x4aad68=()=>![];try{if(_0x43f7d4(0x303)===_0x43f7d4(0x303)){if(window[_0x43f7d4(0x25c)+_0x43f7d4(0x3dc)+_0x43f7d4(0x629)]&&!_0x51534f[_0x43f7d4(0x2e2)+_0x43f7d4(0x339)]){_0x1b9bb3=window[_0x43f7d4(0x25c)+'WebMo'+'dkit']['Value'+'Wrapp'+'er'],_0x54d71f=window[_0x43f7d4(0x25c)+_0x43f7d4(0x3dc)+'dkit'][_0x43f7d4(0x690)+'me']['creat'+_0x43f7d4(0x201)+'in']({'name':'Sakur'+_0x43f7d4(0x2ae),'version':'1.1.0','referencedAssemblies':[_0xfc2f82['WmFca']]});if(_0x51534f[_0x43f7d4(0x6f1)+'od'])_0x5b1634(_0xfc2f82[_0x43f7d4(0x37e)],_0x43f7d4(0x598)+'th',_0xfc2f82[_0x43f7d4(0x70b)],[_0x43f7d4(0x437),_0x43f7d4(0x437)],undefined,_0x4aad68,!!_0x51534f[_0x43f7d4(0x5cf)]);if(_0x51534f[_0x43f7d4(0x6f1)+_0x43f7d4(0x46c)])_0xfc2f82[_0x43f7d4(0x3a3)](_0x5b1634,_0xfc2f82[_0x43f7d4(0x57e)],_0x43f7d4(0x598)+'th',_0x43f7d4(0x579)+_0x43f7d4(0x387),[_0x43f7d4(0x437),_0xfc2f82['FngqO'],_0xfc2f82['FngqO'],_0xfc2f82['FngqO'],_0x43f7d4(0x437)],undefined,_0x4aad68,!!_0x51534f[_0x43f7d4(0x5cf)]);if(_0x51534f[_0x43f7d4(0x1a1)+'oReco'+'il'])_0xfc2f82[_0x43f7d4(0x4ae)](_0x5b1634,'noRec'+_0x43f7d4(0x6e5),'Legio'+_0x43f7d4(0x44c)+_0x43f7d4(0x381)+'.Over'+_0x43f7d4(0x608)+_0x43f7d4(0x5c4)+'lMoti'+'on','Tick',[_0x43f7d4(0x437)],undefined,_0x4aad68,!!_0x51534f[_0x43f7d4(0x3bc)+_0x43f7d4(0x6e5)]);if(_0x51534f[_0x43f7d4(0x6a6)+'aptur'+'e'])_0xf95571('capSh'+_0x43f7d4(0x40f),'OShoo'+_0x43f7d4(0x1f6),_0xfc2f82['AcfFx'],[_0x43f7d4(0x437),'i32'],undefined,(_0x193827,_0x3385b7)=>{_0x35b4b7(_0x62af89,_0x3385b7,_0x5884a9,_0xfc2f82['rycvn']);},!![]);if(_0x51534f[_0x43f7d4(0x6a6)+'aptur'+'e'])_0xf95571(_0x43f7d4(0x1bc)+'ve','Legio'+_0x43f7d4(0x44c)+'forms'+'.Over'+_0x43f7d4(0x608)+_0x43f7d4(0x23b)+_0x43f7d4(0x362),'IsGro'+_0x43f7d4(0x682),[_0xfc2f82['FngqO']],_0x43f7d4(0x437),(_0x559589,_0x3a0527)=>{var _0x370b38=_0x43f7d4;_0x35b4b7(_0x2f7d18,_0x3a0527,_0x5884a9,_0x370b38(0x43b)+'ents');},!![]);}}else{var _0x12abd8=_0x189524[_0x350f32];if(_0x12abd8)try{_0x12abd8[_0x43f7d4(0x42c)+'ed']=!!_0x35be70;}catch(_0x36b699){}}}catch(_0x23adae){console[_0x43f7d4(0x429)](_0x43f7d4(0x2e3)+_0x43f7d4(0x235)+_0x43f7d4(0x1b3)+'WMK\x20i'+_0x43f7d4(0x5f4)+'ailed'+':',_0x23adae&&_0x23adae['messa'+'ge']);}function _0x18defd(_0x46bd2d,_0x208f3d){var _0x516bf9=_0x43f7d4,_0x42c71b={'NqbKc':_0xfc2f82[_0x516bf9(0x660)],'vCOMm':function(_0x4840ae){return _0x4840ae();}},_0x49dcca=_0x4d4732[_0x46bd2d];if(_0x49dcca){if('zIXjS'!==_0xfc2f82[_0x516bf9(0x450)])try{_0x49dcca[_0x516bf9(0x42c)+'ed']=!!_0x208f3d;}catch(_0x31280e){}else{if(_0x395ed9['body']&&(_0xcefa5d[_0x516bf9(0x3e2)+'State']===_0x516bf9(0x61a)+'activ'+'e'||_0x56fa62[_0x516bf9(0x3e2)+_0x516bf9(0x585)]===_0x42c71b[_0x516bf9(0x614)]))_0x42c71b['vCOMm'](_0x3482df);else _0x526d57[_0x516bf9(0x5f6)+'entLi'+_0x516bf9(0x370)+'r']('DOMCo'+_0x516bf9(0x268)+_0x516bf9(0x62c)+'d',_0x2d03ba,{'once':!![]});}}}_0xfc2f82[_0x43f7d4(0x39f)](setInterval,()=>{var _0x52cc44=_0x43f7d4;if(!_0x1b9bb3||!window['unity'+'Insta'+'nce'])return;var _0x2444fa=_0xfc2f82['QItnh'](_0xfc2f82[_0x52cc44(0x254)](Number,_0x51534f[_0x52cc44(0x520)+_0x52cc44(0x679)])||0x661+0x1*0x1f3+-0x7f0,0x8cc*0x2+0x5f4+-0x1728),_0x165fe7=_0xfc2f82['QItnh'](_0xfc2f82['XGsaJ'](Number,_0x51534f['jumpP'+'ct'])||0x1e83*-0x1+0xa7*-0x3+-0x4*-0x837,0x157*-0xf+0x4*-0x14b+0x19a9),_0x13773f=(Number(_0x51534f[_0x52cc44(0x341)+'tyPct'])||0x636+0x2c2+-0x894)/(0xe3b+0x47*0x61+-0x145f*0x2),_0x13aa09=Math[_0x52cc44(0x696)](0xad*0x2+-0x1*-0x2197+0xd0*-0x2b,_0xfc2f82['dRSNp'](Number,_0x51534f[_0x52cc44(0x591)+'eValu'+'e'])||-0x4c*0x7e+0x139*-0x3+0x18b*0x1b),_0x2c0b7d=_0x2444fa!==0x5*0x100+-0x194+-0xaf*0x5||_0x165fe7!==0x1e0+-0x43*-0x73+0x174*-0x16||_0xfc2f82[_0x52cc44(0x447)](_0x13773f,0x163b+-0x76a+-0xed0)||_0x51534f[_0x52cc44(0x586)],_0x1c17a8=_0x51534f[_0x52cc44(0x613)+'ead']||_0x51534f[_0x52cc44(0x591)+_0x52cc44(0x708)]||_0x51534f[_0x52cc44(0x32e)+_0x52cc44(0x43d)]||_0x51534f['rapid'+_0x52cc44(0x6c2)];if(!_0x2c0b7d&&!_0x1c17a8)return;try{for(var _0x7ccec9=-0xb90+0x1321+-0x791;_0x7ccec9<_0x2f7d18[_0x52cc44(0x719)+'h'];_0x7ccec9++){var _0x199887=_0x2f7d18[_0x7ccec9];if(!_0x199887)continue;if(_0xfc2f82['mSMmf'](_0x2444fa,0x1a3d+0x19e8+-0x5e*0x8e)){if(_0xfc2f82[_0x52cc44(0x2f6)]!=='gIRCt'){var _0x5bf1b3=('1|2|0'+'|4|5|'+'3')['split']('|'),_0x47231c=0x1876+0x1a12+-0x3288;while(!![]){switch(_0x5bf1b3[_0x47231c++]){case'0':_0x56fca0(_0x199887,-0x102a+-0xe9b+0x1*0x1ef5,_0x52cc44(0x458),_0x2444fa);continue;case'1':_0x56fca0(_0x199887,0x2*0x1022+-0x2*-0xb3d+0x1b4b*-0x2,_0x52cc44(0x458),_0x2444fa);continue;case'2':_0xfc2f82[_0x52cc44(0x349)](_0x56fca0,_0x199887,0x968+0x5ed*0x1+-0xf29,_0x52cc44(0x458),_0x2444fa);continue;case'3':_0xfc2f82[_0x52cc44(0x349)](_0x56fca0,_0x199887,0x100d+-0x25*0xb9+0xad0*0x1,_0x52cc44(0x458),_0x2444fa);continue;case'4':_0x56fca0(_0x199887,0x1dd+0x1*-0x23d+-0x4*-0x25,_0x52cc44(0x458),_0x2444fa);continue;case'5':_0xfc2f82[_0x52cc44(0x349)](_0x56fca0,_0x199887,0x164f*-0x1+0x2261+-0xbf6,'f32',_0x2444fa);continue;}break;}}else _0x1161a4=_0x214ec6[_0x52cc44(0x466)](_0xfc2f82['REBQx'](_0x294978,-0xc6*0xc+0x1*0x5bc+0x774)/_0xfc2f82[_0x52cc44(0x553)](_0xf93de1,_0x5d6c31)),_0x498b85=0x2*-0xc07+0x1c22+-0x414,_0xd24fd8=_0x612c80;}if(_0x165fe7!==0x85+-0x1a8d+0x1a09*0x1)_0xfc2f82['FRheR'](_0x56fca0,_0x199887,0xa11*-0x3+-0x23d1+0x4254,_0x52cc44(0x458),_0x165fe7);_0x13773f!==-0x1*-0x186f+-0x5*-0x4fa+-0x3150&&(_0xfc2f82['FRheR'](_0x56fca0,_0x199887,0x1bf2+-0x4*0x207+-0x2*0x9c7,_0xfc2f82['Jqyci'],_0x13773f),_0xfc2f82['VEcDf'](_0x56fca0,_0x199887,-0x7*0x406+-0x18f1+0x3567,_0x52cc44(0x458),_0x13773f));if(_0x51534f['bhop'])_0xfc2f82[_0x52cc44(0x48c)](_0x4282a7,_0x199887,-0xa1*-0x15+-0x1091+0x1*0x3f8,'f32',-(-0xb82*0x2+0x50c+0x15df));}}catch(_0x2c08bc){}try{for(var _0xab8c85=-0x1*-0x341+0x22d4+-0x1*0x2615;_0xab8c85<_0x62af89['lengt'+'h'];_0xab8c85++){if(_0xfc2f82['cZTbY'](_0x52cc44(0x2c4),_0x52cc44(0x1de))){_0x546b28[_0x52cc44(0x443)]=_0x399b7e,_0x18c593();var _0x31c11a=_0x105d6d[_0x52cc44(0x60d)](_0x4a83dd=>_0x4a83dd['id']===_0x1dd017)||_0xb0ba36[0x11bd+-0x1*-0xb8d+0x2e*-0xa3];_0x467314[_0x52cc44(0x419)+'onten'+'t']=_0xfc2f82[_0x52cc44(0x3e0)](_0xfc2f82['rnDsj'],_0x31c11a['label']);for(var [_0x2c0e25,_0x452a66]of _0x1cbccc)_0x452a66[_0x52cc44(0x3d8)+'List']['toggl'+'e'](_0xfc2f82[_0x52cc44(0x737)],_0x2c0e25===_0x1ef4bb);_0x44765d[_0x52cc44(0x658)+_0x52cc44(0x3a1)+'ldren'](..._0x708932(_0x478dec));}else{var _0x4e5d72=_0xa7b898(_0x62af89[_0xab8c85],0x6c+0x1*0x8fb+-0x92f*0x1);if(!_0x4e5d72)continue;_0x51534f[_0x52cc44(0x591)+_0x52cc44(0x708)]&&(_0x4282a7(_0x4e5d72,0x11*-0x248+-0x3a8*0x1+0x2abc,_0x52cc44(0x437),_0x13aa09),_0xfc2f82[_0x52cc44(0x2cc)](_0x4282a7,_0x4e5d72,0xb13*0x1+-0x1*0x457+-0x668*0x1,_0xfc2f82[_0x52cc44(0x5fb)],_0x13aa09));_0x51534f[_0x52cc44(0x613)+'ead']&&(_0x4282a7(_0x4e5d72,0x2c6*0x4+0xfdf+0x1*-0x1a6f,'f32',-0x73a+-0x192a*0x1+0x2064),_0xfc2f82['kWPjj'](_0x4282a7,_0x4e5d72,0x1560+0x23*0x8b+-0x27f9,_0x52cc44(0x458),-0x1749+-0x1b*-0xf4+0x272*-0x1));if(_0x51534f['infAm'+'moExp'])_0x4282a7(_0x4e5d72,0x73a+-0x8ba+0x1dc,'i32',-0x2198+-0x2377+-0x2*-0x247b);_0x51534f[_0x52cc44(0x505)+'Exp']&&(_0xfc2f82['FRheR'](_0x56fca0,_0x4e5d72,0x7d4+0xc05+-0x134d,_0x52cc44(0x458),-0xbc0+0x25c5+-0x1a05*0x1+0.1),_0x4282a7(_0x4e5d72,-0xdee+0x3*-0x9a5+0x2b3d,'f32',-0x29b+-0x28f+-0x295*-0x2+0.1));}}}catch(_0x14dbd2){}},-0x4f2+0x1b7*-0x7+0x11bb),setInterval(()=>{var _0x4540c7=_0x43f7d4;_0x5884a9[_0x4540c7(0x65d)+_0x4540c7(0x6b3)]=!!window[_0x4540c7(0x592)+_0x4540c7(0x689)+_0x4540c7(0x747)];try{if('fBnKc'===_0xfc2f82[_0x4540c7(0x53f)]){var _0x421ccc=-0xdd1+-0x3*-0xb4b+-0x1410;for(var _0x83e703 in _0x4d4732){if(_0x4d4732[_0x83e703]&&_0x4d4732[_0x83e703]['appli'+'ed'])_0x421ccc++;}_0x5884a9['hooks'+'Ok']=_0x421ccc;}else try{if(_0x199810)_0x4fb629['call'](_0x4540c7(0x25c)+'Engin'+_0x4540c7(0x263)+_0x4540c7(0x4b8)+_0x4540c7(0x3fb),'set_t'+_0x4540c7(0x4e7)+_0x4540c7(0x42a)+'Rate',[-0x9be+0xd4*-0xb+-0x11*-0x12a]);}catch(_0x48a56f){}}catch(_0x1d44de){}},0x1130+-0x1a23+0xcdb);var _0x62b802=new Set(),_0x8fa834={0x1:[],0x3:[]},_0xbe736d=![];function _0x5be7fc(_0xaa77f3){var _0x4553bd=_0x43f7d4;_0x4553bd(0x705)!==_0x4553bd(0x705)?_0x192d9d[_0x4553bd(0x4c7)][_0x4553bd(0x74a)+'dChil'+'d'](_0x45cd77):_0x62b802[_0x4553bd(0x6b8)](_0xaa77f3[_0x4553bd(0x533)]);}function _0x4c29c6(_0x5c900c){var _0x2d9b13=_0x43f7d4;'bTHXi'===_0x2d9b13(0x2c1)?(_0x1d5f65[_0x2d9b13(0x520)+_0x2d9b13(0x679)]=_0x2cc9e2,_0x526f8b()):_0x62b802['delet'+'e'](_0x5c900c['code']);}function _0x4a49a7(_0x26b10b){var _0xfb72ed=_0x43f7d4,_0x254a7b={'zUIwE':_0xfc2f82[_0xfb72ed(0x394)],'kyxDL':_0xfc2f82[_0xfb72ed(0x587)]};if('IzOUn'===_0xfc2f82[_0xfb72ed(0x41f)]){if(_0x5366a2)return;_0x53ede0=!![],_0x1033c3[_0xfb72ed(0x5f6)+_0xfb72ed(0x34c)+_0xfb72ed(0x370)+'r']('keydo'+'wn',_0xbd8640,!![]),_0x38dbb4[_0xfb72ed(0x5f6)+_0xfb72ed(0x34c)+_0xfb72ed(0x370)+'r'](_0x254a7b[_0xfb72ed(0x224)],_0xa16b19,!![]),_0xcbe4b5[_0xfb72ed(0x5f6)+_0xfb72ed(0x34c)+_0xfb72ed(0x370)+'r'](_0xfb72ed(0x5be)+'down',_0x19ec68,!![]),_0x488faf['addEv'+_0xfb72ed(0x34c)+'stene'+'r']('mouse'+'up',_0x4daea3,!![]),_0x2878ff['addEv'+_0xfb72ed(0x34c)+'stene'+'r'](_0x254a7b[_0xfb72ed(0x5eb)],_0x1cb7ba);}else{if(_0x26b10b['__sak'+_0xfb72ed(0x26d)])return;_0x62b802['add'](_0xfb72ed(0x5be)+(_0x26b10b['butto'+'n']+(0x2405+-0x4a*0x2b+0xbcb*-0x2)));var _0x304188=_0x8fa834[_0x26b10b['butto'+'n']+(-0x5d7+0x125a+-0xc82)];if(_0x304188){_0x304188['push'](performance['now']());if(_0xfc2f82[_0xfb72ed(0x542)](_0x304188[_0xfb72ed(0x719)+'h'],0x2f8+0x496+0x1*-0x766))_0x304188[_0xfb72ed(0x6cf)]();}}}function _0x53d937(_0x2a3b82){var _0x1da93a=_0x43f7d4;if(!_0x2a3b82[_0x1da93a(0x367)+'ura'])_0x62b802['delet'+'e']('mouse'+_0xfc2f82[_0x1da93a(0x2cf)](_0x2a3b82[_0x1da93a(0x428)+'n'],-0x12f5+0x17e9*0x1+0x4f3*-0x1));}function _0x24805f(){var _0xf9db1c=_0x43f7d4;_0x62b802[_0xf9db1c(0x229)]();}function _0x4bfda2(){var _0x3f0e5a=_0x43f7d4;if(_0xbe736d)return;_0xbe736d=!![],window[_0x3f0e5a(0x5f6)+_0x3f0e5a(0x34c)+'stene'+'r'](_0xfc2f82[_0x3f0e5a(0x19d)],_0x5be7fc,!![]),window[_0x3f0e5a(0x5f6)+_0x3f0e5a(0x34c)+'stene'+'r'](_0xfc2f82['UFHUS'],_0x4c29c6,!![]),window[_0x3f0e5a(0x5f6)+_0x3f0e5a(0x34c)+'stene'+'r'](_0x3f0e5a(0x5be)+_0x3f0e5a(0x1a9),_0x4a49a7,!![]),window['addEv'+_0x3f0e5a(0x34c)+_0x3f0e5a(0x370)+'r']('mouse'+'up',_0x53d937,!![]),window['addEv'+_0x3f0e5a(0x34c)+_0x3f0e5a(0x370)+'r'](_0xfc2f82[_0x3f0e5a(0x587)],_0x24805f);}function _0x25725f(_0x2457e6){var _0x223908=_0x43f7d4,_0x5a7679=_0x8fa834[_0x2457e6]||[],_0x5b613d=performance[_0x223908(0x619)]();while(_0x5a7679[_0x223908(0x719)+'h']&&_0x5b613d-_0x5a7679[0x11a5+-0x1b63+-0x3a*-0x2b]>-0xa37+0x237c+-0x71f*0x3)_0x5a7679[_0x223908(0x6cf)]();return _0x5a7679[_0x223908(0x719)+'h'];}function _0x4f8bbf(_0x2fd932){var _0x362bc0=_0x43f7d4;if(document[_0x362bc0(0x4c7)]&&(document[_0x362bc0(0x3e2)+'State']===_0xfc2f82['UJLrh']||_0xfc2f82[_0x362bc0(0x550)](document['ready'+_0x362bc0(0x585)],_0xfc2f82['jqCgN'])))_0x2fd932();else document['addEv'+_0x362bc0(0x34c)+'stene'+'r'](_0x362bc0(0x699)+'ntent'+_0x362bc0(0x62c)+'d',_0x2fd932,{'once':!![]});}_0x4f8bbf(()=>{var _0x438518=_0x43f7d4,_0x122443={'eBaVq':function(_0x288d58){return _0xfc2f82['oJiUm'](_0x288d58);},'wysJm':_0x438518(0x24e),'iwAfW':function(_0x26635a,_0x1636c2){return _0xfc2f82['riTTJ'](_0x26635a,_0x1636c2);},'jeRQY':_0x438518(0x576),'wKYQK':_0xfc2f82['ydJgw'],'FcoGj':_0xfc2f82[_0x438518(0x6f9)],'adjMu':function(_0x21e7d6,_0x696f0d){return _0xfc2f82['pikmz'](_0x21e7d6,_0x696f0d);},'yxYkk':_0xfc2f82[_0x438518(0x411)],'MjvAu':'CKfFg','BfvXt':function(_0x367137,_0xf68e49){return _0x367137(_0xf68e49);},'ofNgz':function(_0x4ef107,_0x25ae88){return _0x4ef107-_0x25ae88;},'KxOHS':function(_0x45a27a){var _0x12fc37=_0x438518;return _0xfc2f82[_0x12fc37(0x744)](_0x45a27a);},'WlPdh':_0xfc2f82[_0x438518(0x420)],'foPlB':function(_0x2fe35e,_0x20627b){return _0xfc2f82['ebGup'](_0x2fe35e,_0x20627b);},'GGVSh':function(_0x3fa837,_0x5aff6c){var _0x496c67=_0x438518;return _0xfc2f82[_0x496c67(0x2ce)](_0x3fa837,_0x5aff6c);},'PVOHC':function(_0x4d92bf){return _0xfc2f82['kkxpr'](_0x4d92bf);},'PlDkg':_0xfc2f82['lqDWo'],'GiStj':function(_0x3fe4d9,_0x4f0681){var _0x8b9090=_0x438518;return _0xfc2f82[_0x8b9090(0x468)](_0x3fe4d9,_0x4f0681);},'tAbLb':_0xfc2f82['sUOSp'],'WnebO':_0xfc2f82['udbrz'],'QQRcu':function(_0x1c7397){var _0x242f68=_0x438518;return _0xfc2f82[_0x242f68(0x2c5)](_0x1c7397);},'hDzHG':function(_0x3f76fe,_0x430afc){return _0xfc2f82['XYPTT'](_0x3f76fe,_0x430afc);},'BouZJ':'\x20err','pMmVG':_0x438518(0x6c6)+'MODE\x20'+_0x438518(0x4fa)+_0x438518(0x32c)+'only,'+_0x438518(0x290)+'ooks\x20'+_0x438518(0x22f)+'ad\x20to'+_0x438518(0x348)+')','Vdmal':function(_0x5b06cb,_0x2f5aed){var _0x413005=_0x438518;return _0xfc2f82[_0x413005(0x601)](_0x5b06cb,_0x2f5aed);},'TvrBZ':function(_0x2ad86c,_0x1d795c){var _0x15f6cb=_0x438518;return _0xfc2f82[_0x15f6cb(0x3f6)](_0x2ad86c,_0x1d795c);},'Wzpev':_0x438518(0x445)+'s','ZrORh':_0x438518(0x6d1)+'me\x20','KKBrg':_0xfc2f82[_0x438518(0x69e)],'hIPmv':_0x438518(0x379)+'ng','TglSm':_0x438518(0x3fa),'aHoqi':'none','cQjwK':function(_0x6e87f,_0x44bbf2){return _0x6e87f+_0x44bbf2;},'pqQRJ':_0xfc2f82['CbZNT'],'GbYMf':function(_0x1513c0){return _0x1513c0();},'Pltst':_0xfc2f82['GjXcs'],'INjvz':function(_0x1179f9){return _0x1179f9();},'GmygZ':function(_0x2a2b02){return _0x2a2b02();},'YdrJO':function(_0x4f5447,_0x5c09c3){return _0x4f5447>_0x5c09c3;},'fQCFl':'optio'+'n','nbNqT':'ZxUhm','CzMJP':_0xfc2f82[_0x438518(0x3f9)],'Eunpj':_0x438518(0x5cb),'MrSfU':_0xfc2f82['qQXOH'],'MkTQc':function(_0x10bb5f){return _0x10bb5f();},'sxeuR':function(_0x1895ee){var _0xa34023=_0x438518;return _0xfc2f82[_0xa34023(0x700)](_0x1895ee);},'Kuibg':_0xfc2f82[_0x438518(0x37e)],'tNcBP':_0xfc2f82[_0x438518(0x681)],'ycOJr':_0x438518(0x410),'jDFfZ':function(_0x2dc8f5,_0x15a661){var _0x393488=_0x438518;return _0xfc2f82[_0x393488(0x4e0)](_0x2dc8f5,_0x15a661);},'DoPFA':_0x438518(0x48a),'gjvCw':function(_0x5a9000){return _0x5a9000();},'SnuFe':function(_0x25a0e4){return _0x25a0e4();},'Ktztv':function(_0x35da4c,_0x29014a,_0x1195a1,_0x18e118,_0x8c6332,_0x56b2cc){return _0x35da4c(_0x29014a,_0x1195a1,_0x18e118,_0x8c6332,_0x56b2cc);},'PXrDi':_0x438518(0x4ab)+'s\x20spr'+_0x438518(0x63d)+'nd\x20ma'+'xes\x20a'+_0x438518(0x73e)+'cy\x20on'+'\x20your'+_0x438518(0x1b6)+_0x438518(0x697)+_0x438518(0x507)+'00ms.','rSehv':function(_0x3a5ac1,_0x6a61ca,_0x13cc6a,_0x52b046){return _0x3a5ac1(_0x6a61ca,_0x13cc6a,_0x52b046);},'ichmq':_0x438518(0x3f1)+_0x438518(0x401)+_0x438518(0x29f)+_0x438518(0x5b8),'aFjnI':function(_0x58803f,_0x322319){return _0x58803f===_0x322319;},'qnlJG':_0xfc2f82[_0x438518(0x377)],'jdsQJ':_0x438518(0x2bb),'rVVZk':function(_0x433ab1,_0x4c3374,_0x3d8a59,_0xb2e837,_0x48547a,_0xf21f93){return _0x433ab1(_0x4c3374,_0x3d8a59,_0xb2e837,_0x48547a,_0xf21f93);},'RIDRJ':_0x438518(0x477)+'s\x20all'+_0x438518(0x54b)+_0x438518(0x673)+'ment\x20'+_0x438518(0x520)+'\x20limi'+_0x438518(0x2fd)+_0x438518(0x334)+_0x438518(0x323)+_0x438518(0x45d)+'.','EvHfG':function(_0x463b68,_0xac1a23){return _0x463b68!==_0xac1a23;},'OCYZt':_0xfc2f82[_0x438518(0x631)],'BcrvB':_0xfc2f82[_0x438518(0x395)],'sgEjR':_0x438518(0x2ba)+'%','URweC':function(_0x479c0e,_0x47ee2d,_0x109104,_0xa18bfe){var _0x494bcf=_0x438518;return _0xfc2f82[_0x494bcf(0x3b8)](_0x479c0e,_0x47ee2d,_0x109104,_0xa18bfe);},'PcCnf':_0x438518(0x4f3)+_0x438518(0x73d),'jrxaX':_0x438518(0x4ab)+'s\x20Mov'+_0x438518(0x280)+'.last'+'JumpT'+_0x438518(0x65e)+'o\x20the'+'\x20jump'+_0x438518(0x353)+_0x438518(0x6b5)+_0x438518(0x49e)+'\x20appl'+'ies.','YePFJ':'Left\x20'+'middl'+'e','epyod':function(_0x29539b,_0x166b82,_0x460de4,_0x3cacd9){var _0x105a6f=_0x438518;return _0xfc2f82[_0x105a6f(0x3b8)](_0x29539b,_0x166b82,_0x460de4,_0x3cacd9);},'LjPAZ':'Size','aRHMR':function(_0x260e37,_0xd0b3e9,_0x2069d5,_0x58bac4){return _0x260e37(_0xd0b3e9,_0x2069d5,_0x58bac4);},'JLPRu':function(_0xad13e9,_0x385c40,_0x8e4f18,_0x4688e8,_0xf60654,_0x70bb04){return _0xad13e9(_0x385c40,_0x8e4f18,_0x4688e8,_0xf60654,_0x70bb04);},'yZyhs':_0x438518(0x3ac)+_0x438518(0x1b7)+'y.','CfYpL':_0xfc2f82[_0x438518(0x2c6)],'yQFgt':function(_0x40e984,_0x31fb48,_0x3b11fc){var _0x4d9efb=_0x438518;return _0xfc2f82[_0x4d9efb(0x39f)](_0x40e984,_0x31fb48,_0x3b11fc);},'LXttu':_0xfc2f82['TuXWD'],'ZDsKO':_0x438518(0x5fe)+_0x438518(0x2a7)+'-io_*'+_0x438518(0x616)+'er\x20sl'+_0x438518(0x4d3),'BPMub':_0xfc2f82['biJfP'],'GNWJO':function(_0x4a39c0,_0x4c964b,_0x27a509,_0x179841,_0x28491f,_0x1f1ed7){return _0xfc2f82['AIaum'](_0x4a39c0,_0x4c964b,_0x27a509,_0x179841,_0x28491f,_0x1f1ed7);},'RqGjE':_0x438518(0x3e7)+_0x438518(0x61b)+_0x438518(0x4cb)+_0x438518(0x698)+'—\x20no\x20'+_0x438518(0x33a)+'hooks'+'.\x20Use'+'\x20this'+'\x20if\x20m'+'atche'+_0x438518(0x43a)+_0x438518(0x3e8)+_0x438518(0x38e),'ZnWPd':function(_0x4ff0b3,_0x1da30f){return _0xfc2f82['AQykX'](_0x4ff0b3,_0x1da30f);},'bisFV':_0xfc2f82[_0x438518(0x2a6)],'BURSW':_0xfc2f82[_0x438518(0x1e8)],'FAVuE':_0xfc2f82[_0x438518(0x2f4)],'ouFGD':function(_0x244bc7,_0x75ba78,_0x32e89a,_0x1dca17){var _0x5a565b=_0x438518;return _0xfc2f82[_0x5a565b(0x71f)](_0x244bc7,_0x75ba78,_0x32e89a,_0x1dca17);},'cvhmZ':_0x438518(0x3bc)+'oil\x20('+_0x438518(0x5c4)+_0x438518(0x2e8)+_0x438518(0x2f9)+_0x438518(0x5e7),'Hdjod':_0xfc2f82[_0x438518(0x338)],'mwPSF':function(_0x5674e7,_0x3f68f9,_0x1c647f){return _0x5674e7(_0x3f68f9,_0x1c647f);},'FvxRj':'ACTk\x20'+_0x438518(0x4a0)+'r','VOLxC':function(_0xf89f5f,_0x47a1eb,_0x5f1e30,_0x5cf6da,_0x4696b2,_0x2df80b){return _0xf89f5f(_0x47a1eb,_0x5f1e30,_0x5cf6da,_0x4696b2,_0x2df80b);},'kknaq':function(_0x2dc2c7,_0x29509d,_0x136e50){return _0x2dc2c7(_0x29509d,_0x136e50);},'RPhgW':_0x438518(0x547),'IYAnx':_0x438518(0x1c7)+_0x438518(0x6a1)+'1','ZQvWn':function(_0x4b0060){return _0x4b0060();},'pTRLo':_0xfc2f82['rnDsj'],'ALvjC':_0x438518(0x2e3)+_0x438518(0x235)+_0x438518(0x34d)+_0x438518(0x350)+_0x438518(0x6ee)+_0x438518(0x5ee),'CMASE':function(_0x159e1a,_0x2530c1){return _0xfc2f82['pikmz'](_0x159e1a,_0x2530c1);},'yJADZ':_0xfc2f82[_0x438518(0x671)],'RCynN':_0xfc2f82[_0x438518(0x1a7)],'zSxon':function(_0x57ba08,_0x3d5d83){return _0x57ba08+_0x3d5d83;},'ybsfQ':function(_0x40bddc,_0x11933a){return _0x40bddc+_0x11933a;},'imZFY':function(_0x19f2d4,_0x2fe97b){var _0x282cbb=_0x438518;return _0xfc2f82[_0x282cbb(0x2cf)](_0x19f2d4,_0x2fe97b);},'bDWXG':_0xfc2f82[_0x438518(0x702)],'iucAN':function(_0x5ac0ca,_0x3c1935){return _0xfc2f82['rlWRC'](_0x5ac0ca,_0x3c1935);},'lGtJt':_0xfc2f82[_0x438518(0x216)],'Vgpgq':_0x438518(0x5a0),'RCDCk':_0x438518(0x347)+'go','xzJpi':'<svg\x20'+'viewB'+'ox=\x220'+_0x438518(0x54e)+'\x2024\x22\x20'+'class'+'=\x22mn-'+'logo-'+_0x438518(0x266)+'<path'+_0x438518(0x534)+'12\x2021'+'c-1.5'+_0x438518(0x562)+'4-4.5'+_0x438518(0x624)+_0x438518(0x70f)+_0x438518(0x261)+_0x438518(0x40c)+'\x204-4.'+_0x438518(0x430)+_0x438518(0x2c9)+_0x438518(0x5a4)+_0x438518(0x249)+'5-4\x207'+_0x438518(0x506)+_0x438518(0x5d1)+'\x22none'+_0x438518(0x55a)+_0x438518(0x286)+_0x438518(0x4ad)+'9d\x22\x20s'+'troke'+_0x438518(0x745)+'h=\x222\x22'+'\x20stro'+'ke-li'+'necap'+'=\x22rou'+_0x438518(0x35d)+_0x438518(0x3cb)+'-line'+_0x438518(0x6ac)+'\x22roun'+'d\x22/><'+_0x438518(0x373)+'e\x20cx='+_0x438518(0x21e)+_0x438518(0x56c)+'0\x22\x20r='+_0x438518(0x5b9)+_0x438518(0x57f)+'=\x22#ff'+'6b9d\x22'+'/></s'+'vg>','zKNTh':_0xfc2f82[_0x438518(0x20c)],'ndkdc':'mn-h','QdLOf':_0x438518(0x428)+'n','TRkZx':_0xfc2f82[_0x438518(0x1ee)],'FlfSO':_0x438518(0x236)+_0x438518(0x4f4)+_0x438518(0x1ea)+'\x200\x2024'+_0x438518(0x37a)+_0x438518(0x51c)+_0x438518(0x534)+_0x438518(0x3df)+_0x438518(0x287)+'18\x206\x20'+'6\x2018\x22'+_0x438518(0x33b)+'vg>','gawkq':'mn-co'+'ls','QyTgg':'comba'+'t'};_0x51534f['adblo'+'ck']&&setInterval(()=>{var _0x55dbac=_0x438518,_0x5faaee={'limrX':function(_0x261d22){return _0x122443['eBaVq'](_0x261d22);}};if(_0x122443[_0x55dbac(0x322)]===_0x122443[_0x55dbac(0x322)])try{if(_0x122443['iwAfW'](_0x122443[_0x55dbac(0x245)],_0x122443[_0x55dbac(0x245)]))for(var _0x1eae4c of[_0x55dbac(0x58b)+'io_30'+_0x55dbac(0x1ff)+_0x55dbac(0x1d5)+'nt','kour-'+_0x55dbac(0x5af)+'8x90-'+_0x55dbac(0x491)+'t',_0x122443['wKYQK'],'fulls'+'creen'+'-banr'+'s']){var _0x43d050=document['getEl'+'ement'+'ById'](_0x1eae4c);if(_0x43d050&&_0x1eae4c===_0x122443[_0x55dbac(0x66b)]){var _0x2233d9=_0x43d050[_0x55dbac(0x5c0)+_0x55dbac(0x73f)];for(var _0x10721d=0x1b7f+0x86*-0x13+0x1*-0x118d;_0x122443['adjMu'](_0x10721d,_0x2233d9['lengt'+'h']);_0x10721d++){if(_0x2233d9[_0x10721d]['id']&&_0x2233d9[_0x10721d]['id']['index'+'Of'](_0x122443[_0x55dbac(0x4e5)])===0x81c+-0x5fd+-0x21f)_0x2233d9[_0x10721d]['style']['displ'+'ay']='none';}}else{if(_0x43d050)_0x43d050[_0x55dbac(0x26e)][_0x55dbac(0x1b1)+'ay']=_0x55dbac(0x589);}}else _0x3d0bce[_0x55dbac(0x2e2)+_0x55dbac(0x339)]=_0x2802f6,_0x5faaee['limrX'](_0x15c581),_0x52e229[_0x55dbac(0x521)+'d']();}catch(_0x1859f7){}else _0x364d58[_0x55dbac(0x42c)+'ed']=!!_0x140487;},0xf*0xac+-0x1*0x511+0x2cd);var _0x4920fd=document['creat'+'eElem'+_0x438518(0x362)](_0x438518(0x5c9)+'s');_0x4920fd[_0x438518(0x26e)][_0x438518(0x259)+'xt']=_0x438518(0x366)+_0x438518(0x256)+'ixed;'+_0x438518(0x22b)+_0x438518(0x667)+_0x438518(0x24c)+_0x438518(0x3b6)+_0x438518(0x311)+_0x438518(0x60f)+_0x438518(0x2b9)+_0x438518(0x663)+':2147'+_0x438518(0x627)+_0x438518(0x4ee)+_0x438518(0x6c5)+_0x438518(0x1da)+_0x438518(0x6bf)+'e';var _0x43fa25=_0x4920fd[_0x438518(0x5fc)+'ntext']('2d');function _0x1ae8a4(){var _0xcf1dbc=_0x438518;try{var _0x37123a=document['fulls'+_0xcf1dbc(0x3c7)+_0xcf1dbc(0x2b4)+'nt'],_0x3f9216=_0x37123a&&_0x37123a['tagNa'+'me']!=='CANVA'+'S'?_0x37123a:document['body']||document['docum'+_0xcf1dbc(0x555)+_0xcf1dbc(0x280)];if(_0xfc2f82[_0xcf1dbc(0x27a)](_0x4920fd[_0xcf1dbc(0x491)+_0xcf1dbc(0x359)],_0x3f9216))_0x3f9216['appen'+_0xcf1dbc(0x208)+'d'](_0x4920fd);}catch(_0x5e8308){try{_0xfc2f82[_0xcf1dbc(0x6ca)](_0xfc2f82[_0xcf1dbc(0x260)],'iNAvG')?_0x164a5c[_0xcf1dbc(0x6b8)](_0xb62a67['code']):document[_0xcf1dbc(0x4c7)]['appen'+'dChil'+'d'](_0x4920fd);}catch(_0x3a83f7){}}}var _0x3081ae={'w':0x0,'h':0x0,'dpr':0x0};function _0x56ed61(){var _0x372a05=_0x438518,_0x576ef6=window[_0x372a05(0x6af)+_0x372a05(0x68d)+_0x372a05(0x604)+'o']||-0x9f8+0xa48+-0x4f,_0x38e988=window['inner'+'Width'],_0x572f02=window[_0x372a05(0x71a)+_0x372a05(0x24a)+'t'];if(_0x38e988===_0x3081ae['w']&&_0x572f02===_0x3081ae['h']&&_0x576ef6===_0x3081ae['dpr'])return;_0x3081ae['w']=_0x38e988,_0x3081ae['h']=_0x572f02,_0x3081ae['dpr']=_0x576ef6,_0x4920fd[_0x372a05(0x728)]=Math[_0x372a05(0x466)](_0xfc2f82['wgbbx'](_0x38e988,_0x576ef6)),_0x4920fd['heigh'+'t']=Math[_0x372a05(0x466)](_0xfc2f82[_0x372a05(0x2ce)](_0x572f02,_0x576ef6)),_0x43fa25[_0x372a05(0x25d)+'ansfo'+'rm'](_0x576ef6,-0xebe*0x1+-0x362*-0x7+-0x8f0,-0xda6*-0x1+-0x1*-0xf79+-0x69*0x47,_0x576ef6,-0x49*0xf+0xd26+-0x8df,-0x1*-0xa6f+-0x9ee+-0x3*0x2b);}var _0x21fd5c=-0x1bc5+0x12e7+0x8de,_0x40196f=performance['now'](),_0x4f7c8f=-0x72*0x40+0xc30*-0x2+0x34e0;function _0x40c40e(_0x5bc4f2){var _0x12a090=_0x438518,_0x50cc6e=(_0x12a090(0x580)+_0x12a090(0x496)+_0x12a090(0x69d)+_0x12a090(0x66d)+_0x12a090(0x5a7)+_0x12a090(0x536)+_0x12a090(0x31e))['split']('|'),_0x301fdb=0xa*0x163+-0x5f1+-0x7ed;while(!![]){switch(_0x50cc6e[_0x301fdb++]){case'0':var _0x4a806e=_0xfc2f82[_0x12a090(0x2fe)](Number,_0x51534f['ksSca'+'le'])||0x1*-0x150b+-0x3*0x489+-0x3*-0xb8d,_0x493d09=(0x2*0x73f+0x20ce+-0x2f2a)*_0x4a806e,_0x224212=_0xfc2f82[_0x12a090(0x3c3)](-0x1fff+-0xe*0x1ac+0x376b,_0x4a806e);continue;case'1':_0x3c2b1d(_0x12a090(0x2aa),_0xfc2f82[_0x12a090(0x69f)],_0x670f51+_0x3bb1f9+_0x224212,_0x51e90a,_0x3bb1f9,_0x493d09,_0x51534f['ksCps']?_0x25725f(-0x84b*-0x1+-0x2*-0x12d4+-0x2df0)+_0xfc2f82['JwJSh']:'');continue;case'2':_0xfc2f82['JHpFL'](_0x3c2b1d,_0xfc2f82[_0x12a090(0x226)],_0x12a090(0x5be)+'1',_0x670f51,_0x51e90a,_0x3bb1f9,_0x493d09,_0x51534f[_0x12a090(0x6c4)]?_0x25725f(-0x1ba9*-0x1+0x4*-0x877+-0x1*-0x634)+_0xfc2f82['JwJSh']:'');continue;case'3':var _0x496738=_0x51534f['ksPos'];continue;case'4':var _0x3c2b1d=(_0x1e1e17,_0x4c6fc1,_0x257f5e,_0x585c67,_0x2d5bd7,_0x51a560,_0x592030)=>{var _0xc49b79=_0x12a090,_0x43ed31=_0x38f802[_0xc49b79(0x302)][_0xc49b79(0x423)]('|'),_0x515c52=-0x1b26+-0x3*-0x1b2+-0x1610*-0x1;while(!![]){switch(_0x43ed31[_0x515c52++]){case'0':_0x43fa25['strok'+'e']();continue;case'1':_0x43fa25[_0xc49b79(0x5e5)+'ext'](_0x1e1e17,_0x257f5e+_0x2d5bd7/(0x21f4+0x1*-0x1379+-0xe79),_0x585c67+_0x51a560/(-0x16da+0x17*-0x3b+0x1c29)-(_0x592030?_0x38f802[_0xc49b79(0x1d3)](-0xe*-0x2bf+0xae0+-0x314d,_0x4a806e):-0x104b+-0x1316+-0x1*-0x2361));continue;case'2':_0x43fa25['font']=_0x38f802[_0xc49b79(0x47c)](_0x38f802[_0xc49b79(0x1f2)]+Math[_0xc49b79(0x466)]((-0xa5*0x25+0xa44+-0x48b*-0x3)*_0x4a806e),_0x38f802[_0xc49b79(0x4a3)]);continue;case'3':_0x43fa25['fillS'+_0xc49b79(0x4de)]=_0x16fede?_0xc49b79(0x4c1)+_0xc49b79(0x3be)+'07,15'+'7,0.8'+'5)':'rgba('+_0xc49b79(0x4a6)+'16,0.'+'7)';continue;case'4':_0x43fa25[_0xc49b79(0x3e4)+_0xc49b79(0x4a8)]=_0xc49b79(0x4f6)+'r';continue;case'5':var _0x16fede=_0x62b802[_0xc49b79(0x416)](_0x4c6fc1);continue;case'6':_0x43fa25[_0xc49b79(0x24d)+'Path']();continue;case'7':_0x43fa25['save']();continue;case'8':_0x43fa25[_0xc49b79(0x1f8)+_0xc49b79(0x22e)]=0x84b+0x2694+-0x2ede*0x1;continue;case'9':_0x43fa25['fillS'+_0xc49b79(0x4de)]=_0x16fede?_0xc49b79(0x324):_0xc49b79(0x4c1)+'255,2'+_0xc49b79(0x680)+_0xc49b79(0x50a)+')';continue;case'10':_0x43fa25['fill']();continue;case'11':_0x43fa25[_0xc49b79(0x300)+_0xc49b79(0x4e6)+'e']=_0x16fede?_0xd4a2e5:_0x38f802['SUkPq'];continue;case'12':_0x592030&&(_0x43fa25['font']=_0x38f802[_0xc49b79(0x3f8)]+Math[_0xc49b79(0x466)](_0x38f802['YpUrV'](-0x1311+0x1*0x71e+0xd*0xec,_0x4a806e))+(_0xc49b79(0x483)+'-sans'+_0xc49b79(0x31d)+_0xc49b79(0x4ba)+_0xc49b79(0x3a9)+_0xc49b79(0x33e)+'s-ser'+'if'),_0x43fa25['fillS'+_0xc49b79(0x4de)]=_0x16fede?_0x38f802['Qmgbt']:_0xc49b79(0x4c1)+'255,2'+_0xc49b79(0x680)+'0,0.5'+'5)',_0x43fa25['fillT'+_0xc49b79(0x45b)](_0x592030,_0x257f5e+_0x2d5bd7/(0x24d3+0x1bf4+-0x40c5),_0x38f802[_0xc49b79(0x47c)](_0x585c67,_0x38f802['oEKDh'](_0x51a560,-0x22ef+0x17c4+-0x1*-0xb2d))+(0x273+-0x1c7f*0x1+-0x1a14*-0x1)*_0x4a806e));continue;case'13':_0x43fa25[_0xc49b79(0x21b)+_0xc49b79(0x426)+'ne']=_0xc49b79(0x684)+'e';continue;case'14':if(_0x43fa25['round'+_0xc49b79(0x6ba)])_0x43fa25['round'+_0xc49b79(0x6ba)](_0x257f5e,_0x585c67,_0x2d5bd7,_0x51a560,_0x38f802[_0xc49b79(0x1d3)](-0xd6b+-0x191*-0x6+-0x1c*-0x25,_0x4a806e));else _0x43fa25['rect'](_0x257f5e,_0x585c67,_0x2d5bd7,_0x51a560);continue;case'15':_0x16fede&&(_0x43fa25[_0xc49b79(0x207)+_0xc49b79(0x5ad)+'r']=_0x12b313,_0x43fa25[_0xc49b79(0x207)+'wBlur']=-0x474+-0x2cf*-0xd+-0x2001,_0x43fa25[_0xc49b79(0x707)](),_0x43fa25[_0xc49b79(0x207)+_0xc49b79(0x480)]=-0x1*0x79d+-0x25f4+0x2d91);continue;case'16':_0x43fa25['resto'+'re']();continue;}break;}};continue;case'5':var _0xe124a1=_0x493d09*(0x1ba9+-0x19c8+-0x1de)+_0x224212*(-0x1f*0x5+-0x1*-0x991+-0x8f4),_0x206071=_0x493d09*(0x228*0xf+-0x13dd+-0xc78)+_0xfc2f82['wgbbx'](_0x224212,0xe4f+0x2*-0xb5+-0xce3*0x1);continue;case'6':var _0x38f802={'UxrHi':_0x12a090(0x488)+'|14|3'+_0x12a090(0x417)+_0x12a090(0x4c8)+_0x12a090(0x688)+'|4|13'+'|2|1|'+'12|16','uxWPG':function(_0x49b189,_0x18ed26){return _0x49b189*_0x18ed26;},'LAyKz':function(_0x271be2,_0x54e57c){return _0x271be2+_0x54e57c;},'MWlsK':'700\x20','jWeoY':_0x12a090(0x483)+_0x12a090(0x39e)+_0x12a090(0x31d)+'f,sys'+_0x12a090(0x3a9)+'i,san'+'s-ser'+'if','SUkPq':'rgba('+'255,1'+_0x12a090(0x634)+_0x12a090(0x3d3)+'5)','CMzWZ':_0x12a090(0x683),'YpUrV':function(_0x5766d1,_0x3164df){return _0x5766d1*_0x3164df;},'Qmgbt':_0x12a090(0x324),'oEKDh':function(_0x59b82d,_0x28f8dd){return _0x59b82d/_0x28f8dd;}};continue;case'7':_0xfc2f82['HSPnk'](_0x3c2b1d,'D',_0xfc2f82['CHSHx'],_0x670f51+(_0x493d09+_0x224212)*(0x1*0x10e5+0xbb1*0x3+-0x33f6),_0xfc2f82['obJqj'](_0x4d6de3,_0x493d09)+_0x224212,_0x493d09,_0x493d09);continue;case'8':_0xfc2f82[_0x12a090(0x5f1)](_0x3c2b1d,'S','KeyS',_0x670f51+_0x493d09+_0x224212,_0x4d6de3+_0x493d09+_0x224212,_0x493d09,_0x493d09);continue;case'9':_0xfc2f82['qgbDa'](_0x3c2b1d,'',_0xfc2f82[_0x12a090(0x748)],_0x670f51,_0xfc2f82['KfZnc'](_0xfc2f82['QoFuv'](_0x51e90a,_0x493d09),_0x224212),_0xe124a1,_0x493d09*(-0x1c69+-0x1*0x2dd+0x1f46*0x1+0.45));continue;case'10':var _0x670f51=_0xfc2f82['riTTJ'](_0x496738,'br')?_0xfc2f82['lCbsM'](_0xfc2f82[_0x12a090(0x2da)](_0x5bc4f2['right'],0x36*-0x1d+-0x1a4b*-0x1+-0x141d),_0xe124a1):_0x5bc4f2[_0x12a090(0x446)]+(0x1cc3+0x10a4+-0x2d57);continue;case'11':var _0x4d6de3=_0x496738==='ml'?_0x5bc4f2['top']+_0x5bc4f2[_0x12a090(0x311)+'t']/(0x1*-0x7a5+0x4e*-0x1f+0x1119)-_0x206071/(-0x16a2+0xb4b+-0x7*-0x19f):_0x5bc4f2['botto'+'m']-_0x206071-(_0x496738==='bl'?0x10*0x193+0x1b0a+-0x33da:-0x782+0x103c+-0x824);continue;case'12':var _0x3bb1f9=(_0xe124a1-_0x224212)/(-0x313*0x1+-0x129c+0x15b1),_0x51e90a=_0xfc2f82['ioLaJ'](_0x4d6de3,_0xfc2f82['wgbbx'](_0xfc2f82['GUXIS'](_0x493d09,_0x224212),0x11a4+-0x1c1*0x15+-0x3d7*-0x5));continue;case'13':_0xfc2f82['sJepr'](_0x3c2b1d,'W',_0xfc2f82[_0x12a090(0x1af)],_0xfc2f82[_0x12a090(0x2cf)](_0x670f51+_0x493d09,_0x224212),_0x4d6de3,_0x493d09,_0x493d09);continue;case'14':_0x3c2b1d('A',_0xfc2f82[_0x12a090(0x49b)],_0x670f51,_0x4d6de3+_0x493d09+_0x224212,_0x493d09,_0x493d09);continue;}break;}}function _0x21137d(_0x2d10aa){var _0x35783d=_0x438518,_0x279edc=_0xfc2f82['xtPvP'](_0x2d10aa[_0x35783d(0x728)],-0xa8*-0x1d+-0x898+-0xa6e),_0x17bc02=_0x2d10aa['heigh'+'t']/(0x14fe+-0x605+-0x3*0x4fd),_0x1cc9c5=Number(_0x51534f['chSiz'+'e'])||-0x3e2+-0x27*0xa9+0x1da2,_0x2fd6ab=/^#[0-9a-f]{6}$/i[_0x35783d(0x5bd)](_0x51534f[_0x35783d(0x2a3)+'or'])?_0x51534f['chCol'+'or']:_0xfc2f82[_0x35783d(0x2fa)];_0x43fa25[_0x35783d(0x1a5)](),_0x43fa25[_0x35783d(0x300)+_0x35783d(0x4e6)+'e']=_0x2fd6ab,_0x43fa25[_0x35783d(0x528)+_0x35783d(0x4de)]=_0x2fd6ab,_0x43fa25['lineW'+_0x35783d(0x22e)]=Math[_0x35783d(0x696)](0x292+-0x1082+0xdf1+0.5,_0xfc2f82[_0x35783d(0x5e9)](0x255d+0x1b1f+-0x407a,_0x1cc9c5)),_0x43fa25['shado'+'wColo'+'r']=_0x2fd6ab,_0x43fa25[_0x35783d(0x207)+_0x35783d(0x480)]=0x562+0x1673*-0x1+0x1117;var _0x4a545b=(0x7*0x2e3+-0x11e5+0x24a*-0x1)*_0x1cc9c5,_0x149198=(-0xf57+0x4a8+-0xab7*-0x1)*_0x1cc9c5;_0x43fa25['begin'+'Path'](),_0x43fa25[_0x35783d(0x233)+'o'](_0x279edc-_0x4a545b-_0x149198,_0x17bc02),_0x43fa25[_0x35783d(0x3cd)+'o'](_0x279edc-_0x4a545b,_0x17bc02),_0x43fa25['moveT'+'o'](_0xfc2f82[_0x35783d(0x6cd)](_0x279edc,_0x4a545b),_0x17bc02),_0x43fa25['lineT'+'o'](_0x279edc+_0x4a545b+_0x149198,_0x17bc02),_0x43fa25['moveT'+'o'](_0x279edc,_0x17bc02-_0x4a545b-_0x149198),_0x43fa25['lineT'+'o'](_0x279edc,_0xfc2f82[_0x35783d(0x553)](_0x17bc02,_0x4a545b)),_0x43fa25['moveT'+'o'](_0x279edc,_0x17bc02+_0x4a545b),_0x43fa25[_0x35783d(0x3cd)+'o'](_0x279edc,_0xfc2f82['NHKkm'](_0x17bc02+_0x4a545b,_0x149198)),_0x43fa25[_0x35783d(0x300)+'e'](),_0x43fa25[_0x35783d(0x24d)+_0x35783d(0x2ee)](),_0x43fa25[_0x35783d(0x6a4)](_0x279edc,_0x17bc02,(-0xa3*0x1b+-0x57*-0xb+-0x41*-0x35+0.6000000000000001)*_0x1cc9c5,-0x67f+0x917+0x298*-0x1,Math['PI']*(0x39a+0x6e2*-0x1+-0x1a5*-0x2)),_0x43fa25[_0x35783d(0x707)](),_0x43fa25['resto'+'re']();}function _0x44e201(_0x372170){var _0x4dcd13=_0x438518,_0x6245c6={'ZUVLF':function(_0x3c0fb1,_0x177102){return _0x3c0fb1||_0x177102;},'cVUKl':_0x4dcd13(0x4c1)+'255,2'+_0x4dcd13(0x680)+'0,0.7'+'5)'};_0x43fa25['save'](),_0x43fa25[_0x4dcd13(0x270)]=_0x4dcd13(0x1d2)+'2px\x20u'+'i-mon'+_0x4dcd13(0x61c)+'e,mon'+_0x4dcd13(0x61c)+'e',_0x43fa25['textA'+_0x4dcd13(0x4a8)]=_0xfc2f82[_0x4dcd13(0x5e2)],_0x43fa25[_0x4dcd13(0x21b)+'aseli'+'ne']='top';var _0xbb9f8f=0xac6+-0x556+-0x544,_0x27b202=0x4*-0x229+0x1f3e+-0x168e,_0x2ca03c=(_0x2de924,_0x400b64)=>{var _0x246a10=_0x4dcd13;_0x43fa25['fillS'+'tyle']=_0x6245c6[_0x246a10(0x476)](_0x400b64,_0x6245c6[_0x246a10(0x68f)]),_0x43fa25[_0x246a10(0x5e5)+_0x246a10(0x45b)](_0x2de924,_0x27b202,_0xbb9f8f),_0xbb9f8f+=-0x3*0x4d2+0xec6+-0x4*0x10;};_0x2ca03c(_0x4dcd13(0x46f)+_0x4dcd13(0x56b)+'R\x20v1.'+'1',_0xfc2f82[_0x4dcd13(0x2fa)]);if(_0x51534f[_0x4dcd13(0x1ab)])_0xfc2f82['XGsaJ'](_0x2ca03c,_0x4f7c8f+_0x4dcd13(0x63e));if(!_0x5884a9['gameL'+'oaded'])_0x2ca03c(_0x4dcd13(0x27e)+_0x4dcd13(0x3ea)+_0x4dcd13(0x5a3)+'e…',_0x4dcd13(0x4c1)+'255,1'+_0x4dcd13(0x532)+'0,0.6'+')');_0x43fa25['resto'+'re']();}function _0x292230(){var _0x1005e0=_0x438518;if('CKfFg'!==_0x122443[_0x1005e0(0x1be)])return _0xc22e56['warn']('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x1005e0(0x6ee)+'iled:',_0xe47cb2,_0x54f49c&&_0x359f4f[_0x1005e0(0x211)+'ge']),null;else{_0x122443[_0x1005e0(0x2e5)](requestAnimationFrame,_0x292230),_0x21fd5c++;var _0x272c57=performance[_0x1005e0(0x619)]();_0x122443[_0x1005e0(0x3a6)](_0x272c57,_0x40196f)>=0x3*0x1d8+-0x33*-0x5a+-0x1582&&(_0x4f7c8f=Math['round'](_0x21fd5c*(-0x1*-0x1f53+0xa60*0x3+-0x3a8b)/(_0x272c57-_0x40196f)),_0x21fd5c=-0x1*0x25e5+-0x2053+0x4638,_0x40196f=_0x272c57);_0x56ed61(),_0x122443[_0x1005e0(0x275)](_0x1ae8a4),_0x43fa25[_0x1005e0(0x229)+_0x1005e0(0x6ba)](0x11*-0x64+-0x1*-0xb+0x699,0x1323+0x12*-0x48+-0x4b1*0x3,_0x3081ae['w'],_0x3081ae['h']);var _0x480a76={'left':0x0,'top':0x0,'right':_0x3081ae['w'],'bottom':_0x3081ae['h'],'width':_0x3081ae['w'],'height':_0x3081ae['h']};if(_0x51534f[_0x1005e0(0x720)+_0x1005e0(0x306)])_0x21137d(_0x480a76);if(_0x51534f[_0x1005e0(0x5b1)+_0x1005e0(0x3c1)])_0x40c40e(_0x480a76);_0x122443[_0x1005e0(0x2e5)](_0x44e201,_0x480a76);}}var _0x4ec696=document[_0x438518(0x5b6)+_0x438518(0x28a)+'ent'](_0xfc2f82['QNmiu']);_0x4ec696['id']='sakur'+'a-ui',_0x4ec696['style'][_0x438518(0x259)+'xt']=_0x438518(0x366)+_0x438518(0x256)+'ixed;'+'inset'+':0;z-'+'index'+':2147'+_0x438518(0x627)+_0x438518(0x61f)+_0x438518(0x6c5)+_0x438518(0x1da)+_0x438518(0x6bf)+'e;';var _0xe2b241=_0x4ec696['attac'+'hShad'+'ow']({'mode':_0xfc2f82[_0x438518(0x3c5)]});(document[_0x438518(0x4c7)]||document['docum'+_0x438518(0x555)+'ement'])[_0x438518(0x74a)+'dChil'+'d'](_0x4ec696);var _0x9c7a47=![],_0x2d99eb={};try{_0x2d99eb=JSON[_0x438518(0x333)](localStorage['getIt'+'em']('sakur'+_0x438518(0x4c2)+'r.ui.'+'v1')||'{}');}catch(_0x57dee9){}function _0x34d449(){var _0x450be3=_0x438518;try{localStorage[_0x450be3(0x304)+'em']('sakur'+'a.kou'+_0x450be3(0x462)+'v1',JSON['strin'+_0x450be3(0x545)](_0x2d99eb));}catch(_0x38a24b){}}function _0x350c73(_0xf4ff57,_0x9d6764){var _0x4395cc=_0x438518,_0x3d0b26={'raPcy':function(_0x34e105,_0xd20eb1){var _0x2b0aad=_0x41de;return _0xfc2f82[_0x2b0aad(0x526)](_0x34e105,_0xd20eb1);}};if(_0x4395cc(0x33c)===_0xfc2f82[_0x4395cc(0x66a)]){var _0x3d5e5b=document['creat'+'eElem'+_0x4395cc(0x362)](_0x4395cc(0x428)+'n');return _0x3d5e5b[_0x4395cc(0x632)]=_0xfc2f82[_0x4395cc(0x4e1)],_0x3d5e5b[_0x4395cc(0x3d8)+_0x4395cc(0x5a2)]='sk-sw'+'itch',_0x3d5e5b[_0x4395cc(0x47f)+'tribu'+'te']('role',_0xfc2f82[_0x4395cc(0x2a4)]),_0x3d5e5b[_0x4395cc(0x47f)+_0x4395cc(0x72d)+'te'](_0x4395cc(0x1c5)+_0x4395cc(0x3de)+'ed',String(!!_0xf4ff57)),_0x3d5e5b['oncli'+'ck']=_0x289579=>{var _0x5bd450=_0x4395cc;if('Ydxmf'!==_0x122443['WlPdh']){_0x289579[_0x5bd450(0x60c)+'ropag'+'ation']();var _0x55882a=_0x3d5e5b['getAt'+'tribu'+'te'](_0x5bd450(0x1c5)+_0x5bd450(0x3de)+'ed')!=='true';_0x3d5e5b[_0x5bd450(0x47f)+'tribu'+'te'](_0x5bd450(0x1c5)+_0x5bd450(0x3de)+'ed',String(_0x55882a)),_0x122443['BfvXt'](_0x9d6764,_0x55882a);}else return 0xeb+-0x1d2+0xe7;},_0x3d5e5b;}else{if(_0x39f5c9['__sak'+_0x4395cc(0x26d)])return;_0x38a5a1[_0x4395cc(0x6b8)](_0x4395cc(0x5be)+(_0x4034e9[_0x4395cc(0x428)+'n']+(-0x1e2a+-0x1933*0x1+0x1*0x375e)));var _0x20ccc9=_0x448893[_0x3d0b26['raPcy'](_0x2914b4['butto'+'n'],-0x680+-0x1faa+0x262b)];if(_0x20ccc9){_0x20ccc9[_0x4395cc(0x38f)](_0x30da90[_0x4395cc(0x619)]());if(_0x20ccc9[_0x4395cc(0x719)+'h']>-0x1*-0x26e5+-0x243*-0xb+-0x3f9e)_0x20ccc9[_0x4395cc(0x6cf)]();}}}function _0x4a1d43(_0x58f2bc,_0x429c66,_0xaecfd,_0x42715f,_0x2cb9e7){var _0x4e5630=_0x438518,_0x245eea={'aYFLZ':_0xfc2f82['hdCYR']};if(_0xfc2f82[_0x4e5630(0x62b)]('Msicg',_0x4e5630(0x227)))try{_0x2e4dd1['body'][_0x4e5630(0x74a)+_0x4e5630(0x208)+'d'](_0x2fd0a3);}catch(_0x4ac0ef){}else{var _0x435b88=document[_0x4e5630(0x5b6)+'eElem'+_0x4e5630(0x362)](_0x4e5630(0x4c6));_0x435b88['class'+_0x4e5630(0x5a2)]=_0x4e5630(0x440)+'nge';var _0x1ea395=document['creat'+_0x4e5630(0x28a)+'ent'](_0xfc2f82[_0x4e5630(0x384)]);_0x1ea395['type']=_0x4e5630(0x493),_0x1ea395[_0x4e5630(0x3d8)+'Name']='sk-sl'+'ider',_0x1ea395['min']=_0x429c66,_0x1ea395['max']=_0xaecfd,_0x1ea395['step']=_0x42715f,_0x1ea395[_0x4e5630(0x6fe)]=_0x58f2bc;var _0x1669f1=document[_0x4e5630(0x5b6)+_0x4e5630(0x28a)+_0x4e5630(0x362)](_0xfc2f82['nlUCB']);_0x1669f1[_0x4e5630(0x3d8)+'Name']='sk-va'+'l',_0x1669f1[_0x4e5630(0x419)+_0x4e5630(0x4c4)+'t']=String(_0x58f2bc);var _0x28f3a6=()=>{var _0x386462=_0x4e5630;_0x122443['foPlB']('eCdRP','eCdRP')?_0x4b6a50=_0x37fcd8[_0x386462(0x333)](_0x1a7ad3['getIt'+'em'](_0x245eea['aYFLZ'])||'{}'):(_0x1669f1['textC'+'onten'+'t']=String(_0x1ea395['value']),_0x435b88[_0x386462(0x26e)][_0x386462(0x380)+'opert'+'y']('--p',_0x122443[_0x386462(0x645)]((_0x1ea395['value']-_0x429c66)/_0x122443['ofNgz'](_0xaecfd,_0x429c66),-0x613+-0x2*0xed5+0x2421)+'%'));};return _0x1ea395['oninp'+'ut']=()=>{var _0x2daf8c=_0x4e5630;_0x122443[_0x2daf8c(0x564)](_0x28f3a6),_0x2cb9e7(Number(_0x1ea395['value']));},_0x28f3a6(),_0x435b88[_0x4e5630(0x74a)+'d'](_0x1ea395,_0x1669f1),_0x435b88;}}function _0x1fe4a3(_0x33b040,_0x439513){var _0x19376e=_0x438518,_0x3ccd24=(_0x19376e(0x674)+'|2|4|'+'5')['split']('|'),_0x461676=-0x1507+0xbd2*-0x3+-0x1*-0x387d;while(!![]){switch(_0x3ccd24[_0x461676++]){case'0':var _0x123316=document['creat'+_0x19376e(0x28a)+_0x19376e(0x362)]('input');continue;case'1':_0x123316['type']=_0x19376e(0x21d);continue;case'2':_0x123316[_0x19376e(0x6fe)]=/^#[0-9a-f]{6}$/i[_0x19376e(0x5bd)](_0x33b040)?_0x33b040:_0x19376e(0x4ad)+'9d';continue;case'3':_0x123316[_0x19376e(0x3d8)+'Name']=_0x122443[_0x19376e(0x427)];continue;case'4':_0x123316[_0x19376e(0x646)+'ut']=()=>_0x439513(_0x123316[_0x19376e(0x6fe)]);continue;case'5':return _0x123316;}break;}}function _0x5e4562(_0x452a8c,_0x5b5c71,_0xbdad93){var _0x45b41d=_0x438518,_0x35256b={'ZgpZz':function(_0x45dcad){return _0x45dcad();}};if(_0x122443['GiStj'](_0x45b41d(0x617),_0x122443['tAbLb'])){var _0x4e6dfe=document['creat'+_0x45b41d(0x28a)+_0x45b41d(0x362)](_0x122443[_0x45b41d(0x539)]);_0x4e6dfe['class'+_0x45b41d(0x5a2)]='sk-fi'+_0x45b41d(0x70c);for(var [_0x1ccae3,_0x482a18]of _0x5b5c71){var _0x57745a=document[_0x45b41d(0x5b6)+_0x45b41d(0x28a)+_0x45b41d(0x362)](_0x45b41d(0x4f9)+'n');_0x57745a[_0x45b41d(0x6fe)]=_0x1ccae3,_0x57745a[_0x45b41d(0x419)+_0x45b41d(0x4c4)+'t']=_0x482a18,_0x4e6dfe['appen'+'dChil'+'d'](_0x57745a);}return _0x4e6dfe['value']=_0x452a8c,_0x4e6dfe[_0x45b41d(0x643)+_0x45b41d(0x4ca)]=()=>_0xbdad93(_0x4e6dfe['value']),_0x4e6dfe;}else _0x496449[_0x45b41d(0x591)+_0x45b41d(0x708)]=_0x4c73f1,_0x35256b[_0x45b41d(0x42f)](_0xd6650a);}function _0x838f62(_0x124ece,_0x1b3648){var _0x483265=_0x438518,_0x3ecfe7=_0xfc2f82['GZxDw'][_0x483265(0x423)]('|'),_0x35a624=-0x2375+0x1bc6+0x7af;while(!![]){switch(_0x3ecfe7[_0x35a624++]){case'0':_0x591331[_0x483265(0x4d7)+'ck']=_0x3d5c57=>{var _0x513618=_0x483265;_0x3d5c57[_0x513618(0x60c)+'ropag'+_0x513618(0x45d)](),_0x122443['QQRcu'](_0x1b3648);};continue;case'1':_0x591331['class'+'Name']=_0x483265(0x3d5)+'n';continue;case'2':return _0x591331;case'3':_0x591331[_0x483265(0x419)+'onten'+'t']=_0x124ece;continue;case'4':var _0x591331=document[_0x483265(0x5b6)+'eElem'+_0x483265(0x362)]('butto'+'n');continue;case'5':_0x591331[_0x483265(0x632)]=_0xfc2f82[_0x483265(0x4e1)];continue;}break;}}function _0x22e423(_0xdc4fe1,_0x223cd0,_0x30272c){var _0x55e5bc=_0x438518;if(_0xfc2f82[_0x55e5bc(0x1c1)]('XBIHv',_0xfc2f82[_0x55e5bc(0x2b7)]))_0x4feba3(_0x563fc1,0x2612+-0x46f*-0x1+-0x2a39,'f32',_0x2b0c04),_0x34ddd8(_0x593747,-0x3ec*-0x1+0x2*-0xdee+0x183c*0x1,'f32',_0x117ee0);else{var _0x1d00b5=document[_0x55e5bc(0x5b6)+'eElem'+_0x55e5bc(0x362)](_0x55e5bc(0x4c6));_0x1d00b5[_0x55e5bc(0x3d8)+_0x55e5bc(0x5a2)]=_0xfc2f82['coGOY'];var _0x9aac3a=document['creat'+_0x55e5bc(0x28a)+_0x55e5bc(0x362)](_0xfc2f82[_0x55e5bc(0x1c4)]);_0x9aac3a['class'+_0x55e5bc(0x5a2)]=_0xfc2f82['NCtGI'],_0x9aac3a[_0x55e5bc(0x419)+'onten'+'t']=_0xdc4fe1;if(_0x223cd0){if(_0xfc2f82[_0x55e5bc(0x577)]===_0x55e5bc(0x649))_0x1a7d0b[_0x55e5bc(0x229)]();else{var _0x193577=document['creat'+'eElem'+'ent'](_0x55e5bc(0x628));_0x193577[_0x55e5bc(0x3d8)+_0x55e5bc(0x5a2)]=_0xfc2f82[_0x55e5bc(0x492)],_0x193577[_0x55e5bc(0x419)+'onten'+'t']=_0x223cd0,_0x9aac3a[_0x55e5bc(0x74a)+_0x55e5bc(0x208)+'d'](_0x193577);}}return _0x1d00b5['appen'+'d'](_0x9aac3a,_0x30272c),_0x1d00b5;}}function _0x4ea1b6(_0xe6c0ea,_0x5ee543){var _0x30240f=_0x438518,_0x6d2fc6=document[_0x30240f(0x5b6)+_0x30240f(0x28a)+_0x30240f(0x362)]('div');return _0x6d2fc6[_0x30240f(0x3d8)+_0x30240f(0x5a2)]=_0x122443[_0x30240f(0x6e4)](_0x30240f(0x4d9)+'te',_0x5ee543?_0x122443[_0x30240f(0x20a)]:''),_0x6d2fc6[_0x30240f(0x419)+'onten'+'t']=_0xe6c0ea,_0x6d2fc6;}function _0x3483c5(_0x19ccd2,_0x3a04c5,_0x2d0e2e,_0x9f8893,_0x410f5d){var _0xc823f2=_0x438518,_0x9950b8=document['creat'+'eElem'+_0xc823f2(0x362)](_0xc823f2(0x4c6));_0x9950b8[_0xc823f2(0x3d8)+'Name']='sk-ca'+'rd'+(_0x2d0e2e?'\x20on':'');var _0x14048b=document[_0xc823f2(0x5b6)+'eElem'+_0xc823f2(0x362)](_0xfc2f82[_0xc823f2(0x216)]);_0x14048b[_0xc823f2(0x3d8)+_0xc823f2(0x5a2)]=_0xfc2f82[_0xc823f2(0x472)];var _0x86e445=document['creat'+'eElem'+'ent'](_0xc823f2(0x4c6));_0x86e445[_0xc823f2(0x3d8)+'Name']=_0xfc2f82[_0xc823f2(0x41b)];var _0x3cc413=document[_0xc823f2(0x5b6)+_0xc823f2(0x28a)+_0xc823f2(0x362)](_0xfc2f82[_0xc823f2(0x3b0)]);_0x3cc413['textC'+_0xc823f2(0x4c4)+'t']=_0x19ccd2,_0x86e445[_0xc823f2(0x74a)+'dChil'+'d'](_0x3cc413);if(_0x9f8893){var _0x17c6e2=_0xfc2f82[_0xc823f2(0x6ff)](_0x350c73,_0x2d0e2e,_0x4f59e9=>{var _0x2408ea=_0xc823f2;_0x9950b8[_0x2408ea(0x3d8)+'List'][_0x2408ea(0x55d)+'e']('on',_0x4f59e9),_0x9f8893(_0x4f59e9);});_0x14048b[_0xc823f2(0x74a)+'d'](_0x86e445,_0x17c6e2);}else _0x14048b[_0xc823f2(0x74a)+_0xc823f2(0x208)+'d'](_0x86e445);_0x9950b8[_0xc823f2(0x74a)+'dChil'+'d'](_0x14048b);if(_0x410f5d&&_0x410f5d['lengt'+'h']){var _0x210a33=document[_0xc823f2(0x5b6)+'eElem'+'ent'](_0xfc2f82[_0xc823f2(0x216)]);_0x210a33[_0xc823f2(0x3d8)+_0xc823f2(0x5a2)]=_0xc823f2(0x46a)+'ody';var _0x2180ff=document[_0xc823f2(0x5b6)+_0xc823f2(0x28a)+'ent'](_0xfc2f82[_0xc823f2(0x216)]);_0x2180ff[_0xc823f2(0x3d8)+'Name']='sk-md'+'esc',_0x2180ff['textC'+'onten'+'t']=_0x3a04c5,_0x210a33['appen'+_0xc823f2(0x208)+'d'](_0x2180ff);for(var _0x21132a of _0x410f5d)_0x210a33[_0xc823f2(0x74a)+_0xc823f2(0x208)+'d'](_0x21132a);_0x9950b8[_0xc823f2(0x74a)+_0xc823f2(0x208)+'d'](_0x210a33);}return _0x9950b8;}var _0x312942=[{'id':_0xfc2f82['ZTuYP'],'label':_0x438518(0x668)+'t'},{'id':_0x438518(0x1c8),'label':_0xfc2f82[_0x438518(0x464)]},{'id':_0xfc2f82['nSUdF'],'label':'Visua'+'l'},{'id':'misc','label':_0x438518(0x1f4)},{'id':'safe','label':_0xfc2f82[_0x438518(0x330)]}];function _0x174a72(){var _0x46c4e7=_0x438518;if(_0x46c4e7(0x5ba)!==_0x46c4e7(0x5ba))_0x546921[_0x46c4e7(0x419)+_0x46c4e7(0x4c4)+'t']=_0x8510ae['safeM'+'ode']?_0x122443['pMmVG']:_0x3b1fbc[_0x46c4e7(0x556)]?_0x122443['hDzHG'](_0x122443[_0x46c4e7(0x485)](_0x122443[_0x46c4e7(0x485)](_0x122443['Vdmal'](_0x46c4e7(0x309)+_0x46c4e7(0x2d6)+'\x20'+(_0x16110c[_0x46c4e7(0x473)+_0x46c4e7(0x594)]?_0x122443[_0x46c4e7(0x3a5)](_0x122443['Vdmal'](_0x5af162['hooks'+'Ok']+'/',_0xacae47['hooks'+_0x46c4e7(0x594)]),_0x122443[_0x46c4e7(0x281)]):_0x46c4e7(0x4d1)+_0x46c4e7(0x641)+'med\x20('+'all\x20o'+_0x46c4e7(0x44d)),_0x122443[_0x46c4e7(0x6e8)]),_0x920e59[_0x46c4e7(0x65d)+'oaded']?_0x122443['KKBrg']:_0x122443[_0x46c4e7(0x1cb)])+(_0x46c4e7(0x52d)+_0x46c4e7(0x40f)+'\x20')+(_0xc34237['shoot'+_0x46c4e7(0x538)]?_0x122443[_0x46c4e7(0x715)]:'none'),_0x46c4e7(0x2fc)+'vemen'+'t\x20'),_0x7c539f[_0x46c4e7(0x43b)+'ents']?_0x46c4e7(0x3fa):_0x122443[_0x46c4e7(0x5c2)])+(_0x5c08eb['lastE'+_0x46c4e7(0x318)]?_0x122443[_0x46c4e7(0x2c8)]('\x20|\x20ER'+_0x46c4e7(0x48e),_0x446c64['lastE'+_0x46c4e7(0x318)]):''):_0x122443[_0x46c4e7(0x3b3)];else{var _0x800b66=_0x5884a9[_0x46c4e7(0x2e2)+'ode']?'SAFE\x20'+_0x46c4e7(0x36e)+'—\x20ove'+_0x46c4e7(0x32c)+_0x46c4e7(0x733)+_0x46c4e7(0x290)+_0x46c4e7(0x1ad)+'(relo'+'ad\x20to'+_0x46c4e7(0x348)+')':_0x5884a9['uwmk']?_0xfc2f82[_0x46c4e7(0x5c8)](_0xfc2f82[_0x46c4e7(0x5e1)](_0xfc2f82['BrQUf'](_0xfc2f82[_0x46c4e7(0x702)],_0x5884a9[_0x46c4e7(0x473)+'Total']?_0xfc2f82[_0x46c4e7(0x57b)](_0x5884a9[_0x46c4e7(0x473)+'Ok']+'/',_0x5884a9['hooks'+_0x46c4e7(0x594)])+('\x20hook'+'s'):_0xfc2f82['QYxuf'])+_0xfc2f82['ycDrF']+(_0x5884a9[_0x46c4e7(0x65d)+_0x46c4e7(0x6b3)]?'loade'+'d':'loadi'+'ng'),_0xfc2f82[_0x46c4e7(0x499)]),_0x5884a9['shoot'+'ers']?_0x46c4e7(0x3fa):'none')+(_0x46c4e7(0x2fc)+_0x46c4e7(0x672)+'t\x20')+(_0x5884a9['movem'+_0x46c4e7(0x2ed)]?_0x46c4e7(0x3fa):_0xfc2f82['ZaYWq']):'UWMK\x20'+'MISSI'+_0x46c4e7(0x247)+'overl'+_0x46c4e7(0x4e4)+'ly\x20(r'+_0x46c4e7(0x32b)+'all\x20t'+'he\x20us'+_0x46c4e7(0x1c2)+_0x46c4e7(0x49c);if(_0x5884a9['lastE'+'rror'])_0x800b66+=_0xfc2f82['NGYAR'](_0xfc2f82['ZrnJy'],_0x5884a9['lastE'+_0x46c4e7(0x318)]);return _0x3483c5('Statu'+'s',_0x800b66,_0x5884a9['uwmk'],null,[_0xfc2f82[_0x46c4e7(0x1db)](_0x22e423,_0xfc2f82[_0x46c4e7(0x503)],_0xfc2f82['wBXcT'],_0x838f62('Apply',()=>{var _0x48c41c=_0x46c4e7;try{if(_0x54d71f)_0x54d71f[_0x48c41c(0x2d2)](_0x48c41c(0x25c)+_0x48c41c(0x4ec)+_0x48c41c(0x263)+'licat'+_0x48c41c(0x3fb),'set_t'+_0x48c41c(0x4e7)+_0x48c41c(0x42a)+_0x48c41c(0x20d),[-0x76*0x43+0x1df5+0x35*0x9]);}catch(_0x22eac4){}}))]);}}function _0x325e77(_0x1b63fe){var _0x3206a9=_0x438518,_0x4954b8={'FxqaG':function(_0x5055d0){return _0x122443['sxeuR'](_0x5055d0);},'xbpcy':function(_0x5891be,_0x431a2a,_0x2b7611){return _0x5891be(_0x431a2a,_0x2b7611);},'krSDs':_0x122443['Kuibg'],'DVzOr':function(_0x195c02,_0x34f043,_0xd93276){return _0x195c02(_0x34f043,_0xd93276);},'msCcy':_0x122443['tNcBP'],'dCyBG':function(_0x3288e5){return _0x3288e5();},'zqIlo':_0x3206a9(0x4c6),'oXGrX':_0x122443[_0x3206a9(0x4be)],'WlKAp':_0x3206a9(0x2f2)+_0x3206a9(0x582),'ZrzDO':function(_0x46c697,_0x347478){return _0x46c697===_0x347478;},'AuExC':function(_0x508e08,_0x2ad6ef){return _0x508e08(_0x2ad6ef);},'Ogukt':_0x3206a9(0x63e),'amsiM':_0x3206a9(0x52a),'XCRGE':function(_0x4075be){var _0x237273=_0x3206a9;return _0x122443[_0x237273(0x275)](_0x4075be);},'dYScS':function(_0x40944c){return _0x40944c();},'GEmef':function(_0x3d8496){return _0x3d8496();},'vYNvw':_0x3206a9(0x363)+_0x3206a9(0x6a8)+_0x3206a9(0x51b)+'|8','bsayy':function(_0x2179ce,_0xa049f7){return _0x122443['jDFfZ'](_0x2179ce,_0xa049f7);},'QJhUf':_0x122443['DoPFA'],'QumUV':function(_0x1ba729){return _0x122443['gjvCw'](_0x1ba729);}};if(_0x1b63fe===_0x3206a9(0x219)+'t')return[_0x122443['SnuFe'](_0x174a72),_0x3483c5('God\x20M'+_0x3206a9(0x339),_0x3206a9(0x2ef)+_0x3206a9(0x710)+_0x3206a9(0x6b0)+_0x3206a9(0x1b5)+'ateTa'+_0x3206a9(0x740)+'lth\x20a'+_0x3206a9(0x489)+_0x3206a9(0x486)+_0x3206a9(0x64b)+'lDie,'+'\x20so\x20n'+_0x3206a9(0x738)+_0x3206a9(0x69b)+'\x20hurt'+_0x3206a9(0x272)+_0x3206a9(0x692)+'ou.',_0x51534f[_0x3206a9(0x5cf)],_0x46c278=>{var _0x56022a=_0x3206a9;_0x51534f[_0x56022a(0x5cf)]=_0x46c278,_0x4954b8[_0x56022a(0x4fb)](_0x40079d),_0x4954b8['xbpcy'](_0x18defd,_0x4954b8['krSDs'],_0x46c278),_0x18defd('godDi'+'e',_0x46c278);},[]),_0x3483c5(_0x3206a9(0x335)+_0x3206a9(0x3ad),'Skips'+'\x20Reco'+_0x3206a9(0x635)+_0x3206a9(0x4bb)+_0x3206a9(0x558)+'o\x20the'+'\x20reco'+'il\x20sp'+_0x3206a9(0x321)+'\x20neve'+_0x3206a9(0x691)+_0x3206a9(0x4e3),_0x51534f['noRec'+_0x3206a9(0x6e5)],_0x1876d9=>{var _0xa67336=_0x3206a9;_0x51534f[_0xa67336(0x3bc)+'oil']=_0x1876d9,_0x40079d(),_0x4954b8[_0xa67336(0x4e9)](_0x18defd,_0x4954b8[_0xa67336(0x63f)],_0x1876d9);},[]),_0x122443[_0x3206a9(0x73c)](_0x3483c5,'No\x20Sp'+'read',_0x122443[_0x3206a9(0x552)],_0x51534f[_0x3206a9(0x613)+_0x3206a9(0x5e0)],_0x16e254=>{var _0x25e6fb=_0x3206a9;_0x51534f[_0x25e6fb(0x613)+'ead']=_0x16e254,_0x122443[_0x25e6fb(0x45c)](_0x40079d);},[]),_0x3483c5(_0x3206a9(0x2e9)+'\x20Fire'+'\x20[EXP'+']',_0x3206a9(0x477)+'s\x20Ove'+_0x3206a9(0x202)+_0x3206a9(0x44f)+_0x3206a9(0x2bf)+'eRate'+'\x20to\x201'+_0x3206a9(0x4b2)+'erver'+_0x3206a9(0x3b4)+_0x3206a9(0x292)+_0x3206a9(0x55c)+_0x3206a9(0x237)+'s.',_0x51534f[_0x3206a9(0x505)+_0x3206a9(0x6c2)],_0x424cb4=>{var _0x152e04=_0x3206a9;_0x51534f[_0x152e04(0x505)+_0x152e04(0x6c2)]=_0x424cb4,_0x40079d();},[]),_0x3483c5(_0x3206a9(0x36a)+_0x3206a9(0x3f0)+'P]',_0x3206a9(0x24f)+'rites'+'\x20Over'+'tideW'+'eapon'+_0x3206a9(0x2f8)+_0x3206a9(0x6a5)+_0x3206a9(0x3aa)+'le\x20if'+_0x3206a9(0x607)+'serve'+'r\x20val'+_0x3206a9(0x2a0)+'s.',_0x51534f[_0x3206a9(0x591)+_0x3206a9(0x708)],_0x2c6f5b=>{var _0x532c89=_0x3206a9;_0x51534f[_0x532c89(0x591)+'eExp']=_0x2c6f5b,_0x40079d();},[_0x122443['rSehv'](_0x22e423,_0x3206a9(0x36a)+_0x3206a9(0x53c)+'ue',null,_0x4a1d43(_0x51534f[_0x3206a9(0x591)+_0x3206a9(0x6b6)+'e'],0x3*0x706+-0x4e3*-0x2+-0x1ece*0x1,-0x27*0x35+-0xa*-0x254+-0xd41,0x1259*0x2+-0x1c8*-0x7+-0x3125,_0xd4d93c=>{var _0x52dd03=_0x3206a9;_0x51534f['damag'+_0x52dd03(0x6b6)+'e']=_0xd4d93c,_0x4954b8[_0x52dd03(0x5e4)](_0x40079d);}))]),_0x122443[_0x3206a9(0x73c)](_0x3483c5,_0x122443[_0x3206a9(0x6f5)],_0x3206a9(0x65f)+'ls\x20th'+'e\x20wea'+_0x3206a9(0x606)+_0x3206a9(0x5cc)+_0x3206a9(0x1d7)+_0x3206a9(0x1a8)+'\x20999\x20'+'every'+'\x20200m'+'s.',_0x51534f[_0x3206a9(0x32e)+_0x3206a9(0x43d)],_0x761a51=>{var _0x298407=_0x3206a9;_0x51534f[_0x298407(0x32e)+_0x298407(0x43d)]=_0x761a51,_0x4954b8['FxqaG'](_0x40079d);},[_0x4ea1b6('If\x20re'+_0x3206a9(0x3a8)+_0x3206a9(0x6fd)+_0x3206a9(0x6b1)+_0x3206a9(0x471)+_0x3206a9(0x6f6)+_0x3206a9(0x5b2)+'nt\x20ha'+_0x3206a9(0x1a3)+_0x3206a9(0x57d)+_0x3206a9(0x2b8)+'.')])];if(_0x1b63fe==='move'){if(_0x122443['aFjnI'](_0x122443[_0x3206a9(0x4df)],_0x122443['jdsQJ'])){var _0x34250b=('0|2|3'+_0x3206a9(0x6ec)+'4|5|1')[_0x3206a9(0x423)]('|'),_0x3a2c25=-0x1b*-0xea+-0x90f*0x3+0x27f;while(!![]){switch(_0x34250b[_0x3a2c25++]){case'0':var _0x213b13=_0x5743c5[_0x3206a9(0x5b6)+_0x3206a9(0x28a)+'ent'](_0x4954b8['zqIlo']);continue;case'1':return _0x213b13;case'2':_0x213b13[_0x3206a9(0x3d8)+_0x3206a9(0x5a2)]=_0x3206a9(0x62e)+'l';continue;case'3':var _0x410c4c=_0x132650[_0x3206a9(0x5b6)+'eElem'+_0x3206a9(0x362)](_0x4954b8['oXGrX']);continue;case'4':if(_0xc5b816){var _0xc9c43c=_0x2f8b04[_0x3206a9(0x5b6)+_0x3206a9(0x28a)+_0x3206a9(0x362)]('small');_0xc9c43c['class'+'Name']='sk-hi'+'nt',_0xc9c43c[_0x3206a9(0x419)+_0x3206a9(0x4c4)+'t']=_0xdc7584,_0x410c4c['appen'+_0x3206a9(0x208)+'d'](_0xc9c43c);}continue;case'5':_0x213b13[_0x3206a9(0x74a)+'d'](_0x410c4c,_0x301210);continue;case'6':_0x410c4c['textC'+'onten'+'t']=_0x368567;continue;case'7':_0x410c4c['class'+_0x3206a9(0x5a2)]=_0x4954b8[_0x3206a9(0x6fc)];continue;}break;}}else return[_0x122443[_0x3206a9(0x406)](_0x3483c5,'Speed',_0x122443['RIDRJ'],_0x122443[_0x3206a9(0x4e8)](_0x51534f['speed'+_0x3206a9(0x679)],0x9e9*-0x1+-0x2195+0x2be2),null,[_0x22e423(_0x3206a9(0x25a)+'\x20%',_0x122443['OCYZt'],_0x4a1d43(_0x51534f[_0x3206a9(0x520)+_0x3206a9(0x679)],-0x2549+-0x151e+0x3a99,0x1665+0x9*-0x43b+0x10da,-0x313*0x4+-0x133c*0x1+0xc5*0x29,_0xe4bf7d=>{var _0x23eb62=_0x3206a9;_0x4954b8[_0x23eb62(0x5c6)]('hrRLF',_0x23eb62(0x452))?(_0x51534f['speed'+_0x23eb62(0x679)]=_0xe4bf7d,_0x40079d()):_0x34a3fe[_0x23eb62(0x304)+'em'](_0x23eb62(0x23d)+'a.kou'+_0x23eb62(0x403),_0x36a9fc['strin'+_0x23eb62(0x545)](_0x2d664f));}))]),_0x122443['Ktztv'](_0x3483c5,_0x122443['BcrvB'],'Scale'+_0x3206a9(0x74b)+'ement'+'.jump'+_0x3206a9(0x200)+'\x20and\x20'+'both\x20'+_0x3206a9(0x341)+_0x3206a9(0x72c)+_0x3206a9(0x6be),_0x51534f['jumpP'+'ct']!==0x28c*-0x4+0x20ce*-0x1+0x3*0xe76||_0x51534f[_0x3206a9(0x341)+'tyPct']!==-0x25ff+0x827+0x60c*0x5,null,[_0x22e423(_0x122443[_0x3206a9(0x1f7)],null,_0x4a1d43(_0x51534f[_0x3206a9(0x47e)+'ct'],0x11e*0x16+-0x194a+0xe8,-0x2e*0xb7+-0x75a*-0x5+-0x2b4,-0xf3*0x25+-0x1e78+0x1*0x419c,_0x2672c5=>{var _0x3a0954=_0x3206a9,_0x1376c0={'FUSOL':function(_0x2841e5,_0x4ea1d2){return _0x2841e5||_0x4ea1d2;},'wfUqQ':_0x3a0954(0x4c1)+_0x3a0954(0x72e)+'35,24'+_0x3a0954(0x669)+'5)'};if(_0x122443[_0x3a0954(0x441)]!==_0x3a0954(0x52c))_0x51534f['jumpP'+'ct']=_0x2672c5,_0x122443[_0x3a0954(0x27f)](_0x40079d);else{var _0x38b679=('8|1|2'+'|7|3|'+_0x3a0954(0x54c)+_0x3a0954(0x2b1))[_0x3a0954(0x423)]('|'),_0x776840=-0x1f*-0x109+-0x21c7*0x1+0x1b0;while(!![]){switch(_0x38b679[_0x776840++]){case'0':if(!_0x296151[_0x3a0954(0x65d)+'oaded'])_0x7173fa('waiti'+_0x3a0954(0x3ea)+'r\x20gam'+'e…',_0x3a0954(0x4c1)+'255,1'+'80,19'+'0,0.6'+')');continue;case'1':_0x3ef7f7[_0x3a0954(0x270)]=_0x3a0954(0x1d2)+_0x3a0954(0x5e8)+'i-mon'+_0x3a0954(0x61c)+_0x3a0954(0x69a)+_0x3a0954(0x61c)+'e';continue;case'2':_0x432594['textA'+_0x3a0954(0x4a8)]='left';continue;case'3':var _0x1c3fe3=-0x1*0x4aa+0x24d7*0x1+-0x2001,_0x132332=0xb67+0x181a+-0x139*0x1d;continue;case'4':_0x7173fa(_0x3a0954(0x46f)+'A\x20KOU'+'R\x20v1.'+'1',_0x3a0954(0x4ad)+'9d');continue;case'5':var _0x7173fa=(_0x442dfc,_0x3bd427)=>{var _0x2fde75=_0x3a0954;_0x29834a['fillS'+'tyle']=_0x1376c0['FUSOL'](_0x3bd427,_0x1376c0[_0x2fde75(0x240)]),_0x125d6b[_0x2fde75(0x5e5)+_0x2fde75(0x45b)](_0x442dfc,_0x132332,_0x1c3fe3),_0x1c3fe3+=-0x1b*0x9e+-0x1*0x44f+0x5*0x435;};continue;case'6':if(_0x53bc4a[_0x3a0954(0x1ab)])_0x4954b8['AuExC'](_0x7173fa,_0x22a446+_0x4954b8['Ogukt']);continue;case'7':_0x227d19['textB'+'aseli'+'ne']='top';continue;case'8':_0x3b3639['save']();continue;case'9':_0x3d63db['resto'+'re']();continue;}break;}}})),_0x122443['URweC'](_0x22e423,_0x122443[_0x3206a9(0x277)],_0x3206a9(0x308)+'\x20=\x20fl'+'oaty',_0x4a1d43(_0x51534f['gravi'+'tyPct'],0x1*0x120e+0x7*-0x1cf+-0x1*0x55b,-0x2f*0xb9+0x1*0x13aa+0xf15,0x11*0xa+-0x26cd+0x2628,_0x5ce9b2=>{var _0x44a51a=_0x3206a9;_0x44a51a(0x625)===_0x44a51a(0x299)?(_0xdc2b1b[_0x44a51a(0x1ab)]=_0x332f14,_0x5432ba()):(_0x51534f[_0x44a51a(0x341)+'tyPct']=_0x5ce9b2,_0x122443[_0x44a51a(0x305)](_0x40079d));}))]),_0x3483c5('Bunny'+_0x3206a9(0x3eb),_0x122443['jrxaX'],_0x51534f['bhop'],_0x315e6c=>{var _0x34bfcd=_0x3206a9;_0x51534f[_0x34bfcd(0x586)]=_0x315e6c,_0x40079d();},[])];}if(_0x122443[_0x3206a9(0x1c6)](_0x1b63fe,_0x3206a9(0x66c)+'l'))return[_0x3483c5('Keyst'+'rokes','WASD\x20'+_0x3206a9(0x1e6)+_0x3206a9(0x739)+'+\x20Spa'+'ce\x20ov'+'erlay'+'.',_0x51534f[_0x3206a9(0x5b1)+_0x3206a9(0x3c1)],_0x242401=>{var _0x1eaa5c=_0x3206a9;_0x51534f[_0x1eaa5c(0x5b1)+'rokes']=_0x242401,_0x4954b8[_0x1eaa5c(0x4fb)](_0x40079d);},[_0x22e423('Posit'+'ion',null,_0x5e4562(_0x51534f[_0x3206a9(0x1f1)],[['bl','Botto'+'m\x20lef'+'t'],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x122443[_0x3206a9(0x4d8)]]],_0x3d03f5=>{var _0x495e92=_0x3206a9;if(_0x4954b8['amsiM']===_0x495e92(0x52a))_0x51534f['ksPos']=_0x3d03f5,_0x4954b8['XCRGE'](_0x40079d);else{var _0x1b4668=(_0x495e92(0x662)+'|0|4|'+'5')[_0x495e92(0x423)]('|'),_0x4233f3=-0x19cf*0x1+-0xaa3*0x1+0x2472;while(!![]){switch(_0x1b4668[_0x4233f3++]){case'0':_0x3aa54f['textC'+_0x495e92(0x4c4)+'t']=_0xfc0979;continue;case'1':var _0x3aa54f=_0x405d44[_0x495e92(0x5b6)+'eElem'+_0x495e92(0x362)]('butto'+'n');continue;case'2':_0x3aa54f[_0x495e92(0x632)]=_0x495e92(0x428)+'n';continue;case'3':_0x3aa54f[_0x495e92(0x3d8)+_0x495e92(0x5a2)]=_0x495e92(0x3d5)+'n';continue;case'4':_0x3aa54f['oncli'+'ck']=_0x46e9e9=>{var _0xf78e8=_0x495e92;_0x46e9e9[_0xf78e8(0x60c)+_0xf78e8(0x2d7)+_0xf78e8(0x45d)](),_0x17279e();};continue;case'5':return _0x3aa54f;}break;}}})),_0x122443['epyod'](_0x22e423,_0x122443['LjPAZ'],null,_0x4a1d43(_0x51534f['ksSca'+'le'],-0xddb*-0x1+0x1*-0x19a3+-0x1a*-0x74+0.6,0x1aff+-0x13dd+-0x19*0x49+0.6000000000000001,0x2c5*-0x5+-0x4*0x698+-0x7*-0x5bf+0.05,_0x362823=>{var _0x20e468=_0x3206a9,_0x51ac1b={'ONiKU':function(_0x5757d0,_0x4ba82f){return _0x122443['YdrJO'](_0x5757d0,_0x4ba82f);}};if(_0x20e468(0x29b)!==_0x20e468(0x442))_0x51534f['ksSca'+'le']=_0x362823,_0x40079d();else{_0x362037[_0x20e468(0x38f)](_0x569b86[_0x20e468(0x619)]());if(_0x51ac1b[_0x20e468(0x206)](_0x5b49d6[_0x20e468(0x719)+'h'],-0x1483+-0x5*-0x8a+-0x6b*-0x2b))_0x177b0d[_0x20e468(0x6cf)]();}})),_0x122443[_0x3206a9(0x1df)](_0x22e423,_0x3206a9(0x51d)+_0x3206a9(0x19c)+'t',null,_0x350c73(_0x51534f['ksCps'],_0x181e5d=>{var _0x1d2f48=_0x3206a9;_0x51534f[_0x1d2f48(0x6c4)]=_0x181e5d,_0x4954b8['dYScS'](_0x40079d);}))]),_0x122443[_0x3206a9(0x729)](_0x3483c5,'Cross'+_0x3206a9(0x306),_0x3206a9(0x4f7)+'m\x20cen'+'ter\x20c'+_0x3206a9(0x3c9)+_0x3206a9(0x605),_0x51534f['cross'+'hair'],_0x4dcc5e=>{var _0xae97f6=_0x3206a9;_0x51534f[_0xae97f6(0x720)+_0xae97f6(0x306)]=_0x4dcc5e,_0x40079d();},[_0x22e423(_0x3206a9(0x343),null,_0x122443['rVVZk'](_0x4a1d43,_0x51534f['chSiz'+'e'],-0x2*0x1fb+-0x23*0xb2+0x1c4c+0.5,-0x1cf9+0x344*0x7+0x61f+0.5,0x2638+-0x1ad5+-0x37*0x35+0.1,_0x2fa605=>{var _0x2b95bf=_0x3206a9;_0x51534f[_0x2b95bf(0x711)+'e']=_0x2fa605,_0x122443['INjvz'](_0x40079d);})),_0x22e423(_0x3206a9(0x451),null,_0x1fe4a3(_0x51534f[_0x3206a9(0x2a3)+'or'],_0x54e428=>{_0x51534f['chCol'+'or']=_0x54e428,_0x4954b8['dCyBG'](_0x40079d);}))]),_0x122443[_0x3206a9(0x406)](_0x3483c5,_0x3206a9(0x3b9)+_0x3206a9(0x538),_0x122443[_0x3206a9(0x4b1)],_0x51534f['fps'],null,[_0x122443[_0x3206a9(0x210)](_0x22e423,_0x122443[_0x3206a9(0x3ff)],null,_0x122443[_0x3206a9(0x257)](_0x350c73,_0x51534f[_0x3206a9(0x1ab)],_0x308ac2=>{var _0x5c67b3=_0x3206a9,_0x6bfd86={'cEHXP':_0x122443[_0x5c67b3(0x21c)]};if(_0x5c67b3(0x630)!==_0x122443[_0x5c67b3(0x6bb)]){var _0x1a8fd1=_0x203131[_0x5c67b3(0x5b6)+'eElem'+_0x5c67b3(0x362)](_0x6bfd86[_0x5c67b3(0x402)]);_0x1a8fd1[_0x5c67b3(0x6fe)]=_0x580683,_0x1a8fd1[_0x5c67b3(0x419)+'onten'+'t']=_0x35d0dd,_0x2a177a[_0x5c67b3(0x74a)+'dChil'+'d'](_0x1a8fd1);}else _0x51534f['fps']=_0x308ac2,_0x40079d();})),_0x4ea1b6('No\x20en'+_0x3206a9(0x34f)+_0x3206a9(0x4d4)+_0x3206a9(0x48f)+_0x3206a9(0x31a)+_0x3206a9(0x4fe)+_0x3206a9(0x510)+_0x3206a9(0x4c5)+'isibl'+_0x3206a9(0x670)+_0x3206a9(0x716)+_0x3206a9(0x44e)+_0x3206a9(0x22d)+_0x3206a9(0x651))])];if(_0x122443['iwAfW'](_0x1b63fe,_0x122443[_0x3206a9(0x212)])){if(_0x122443['foPlB'](_0x3206a9(0x68a),_0x3206a9(0x4ff)))return[_0x3483c5('Adblo'+'ck',_0x122443[_0x3206a9(0x315)],_0x51534f['adblo'+'ck'],_0x32a635=>{var _0x3c5935=_0x3206a9;_0x51534f[_0x3c5935(0x6c9)+'ck']=_0x32a635,_0x4954b8[_0x3c5935(0x694)](_0x40079d);},[_0x4ea1b6(_0x122443['BPMub'])])];else _0x14246a={..._0x55da84},_0x122443['eBaVq'](_0x3c4d76),_0x1a8ab0[_0x3206a9(0x521)+'d']();}return[_0x122443[_0x3206a9(0x565)](_0x3483c5,_0x3206a9(0x3ab)+'Mode\x20'+_0x3206a9(0x53b)+_0x3206a9(0x21a)+'nly)',_0x122443[_0x3206a9(0x3d6)],_0x51534f['safeM'+_0x3206a9(0x339)],_0x20ffae=>{var _0x4ced6a=_0x3206a9,_0x40b748={'ARMPV':_0x4954b8['vYNvw'],'SYmMN':function(_0x4e58ec,_0x5e0fb9){var _0x5a6c18=_0x41de;return _0x4954b8[_0x5a6c18(0x5c6)](_0x4e58ec,_0x5e0fb9);}};if(_0x4954b8['bsayy'](_0x4954b8['QJhUf'],_0x4954b8['QJhUf']))_0x51534f['safeM'+'ode']=_0x20ffae,_0x4954b8[_0x4ced6a(0x694)](_0x40079d),location[_0x4ced6a(0x521)+'d']();else{var _0x115ac1=_0x40b748['ARMPV']['split']('|'),_0x166a86=0x222b*0x1+0x1fad*0x1+-0x41d8;while(!![]){switch(_0x115ac1[_0x166a86++]){case'0':_0x8eae3d[_0x4ced6a(0x56e)]=_0x4d2f87;continue;case'1':_0x19681d['heigh'+'t']=_0x171302['round'](_0x2a7324*_0x4d2f87);continue;case'2':_0x49c60a['h']=_0x2a7324;continue;case'3':_0x441f95[_0x4ced6a(0x728)]=_0x402d62['round'](_0x42d818*_0x4d2f87);continue;case'4':if(_0x40b748['SYmMN'](_0x42d818,_0x1c73a2['w'])&&_0x40b748[_0x4ced6a(0x424)](_0x2a7324,_0x2bd173['h'])&&_0x40b748[_0x4ced6a(0x424)](_0x4d2f87,_0x1c0727['dpr']))return;continue;case'5':var _0x4d2f87=_0x19e568[_0x4ced6a(0x6af)+_0x4ced6a(0x68d)+'lRati'+'o']||0x1bc3+0xc65*0x1+-0x2827;continue;case'6':var _0x42d818=_0x288d99[_0x4ced6a(0x71a)+'Width'],_0x2a7324=_0x1c8d6f[_0x4ced6a(0x71a)+'Heigh'+'t'];continue;case'7':_0x31cc1c['w']=_0x42d818;continue;case'8':_0x541346['setTr'+_0x4ced6a(0x1d6)+'rm'](_0x4d2f87,0x10*-0x1cd+-0x1*0x7fa+-0x11*-0x22a,0xb88+0x1f*-0x133+-0x1f9*-0xd,_0x4d2f87,-0x7*0x148+-0xb53+0x144b,-0x4*-0x30+0x216e*0x1+-0x222e);continue;}break;}}},[_0x122443[_0x3206a9(0x4dd)](_0x4ea1b6,_0x122443[_0x3206a9(0x3c6)])]),_0x3483c5('Hook\x20'+_0x3206a9(0x501)+'switc'+'hes',_0x122443[_0x3206a9(0x3b5)],_0x51534f[_0x3206a9(0x6f1)+'od']||_0x51534f[_0x3206a9(0x6f1)+'odDie']||_0x51534f[_0x3206a9(0x1a1)+_0x3206a9(0x6d4)+'il']||_0x51534f[_0x3206a9(0x6a6)+_0x3206a9(0x36f)+'e'],_0x5ea8c0=>{var _0xf5732a=_0x3206a9,_0x420ff4=_0x122443[_0xf5732a(0x59f)]['split']('|'),_0x1aaa63=-0x25a7+0xe0+0x5*0x75b;while(!![]){switch(_0x420ff4[_0x1aaa63++]){case'0':_0x51534f[_0xf5732a(0x6f1)+'od']=_0x5ea8c0;continue;case'1':_0x51534f[_0xf5732a(0x1a1)+'oReco'+'il']=_0x5ea8c0;continue;case'2':_0x51534f[_0xf5732a(0x6a6)+'aptur'+'e']=_0x5ea8c0;continue;case'3':_0x51534f[_0xf5732a(0x6f1)+_0xf5732a(0x46c)]=_0x5ea8c0;continue;case'4':location['reloa'+'d']();continue;case'5':_0x40079d();continue;}break;}},[_0x4ea1b6('Appli'+_0x3206a9(0x325)+_0x3206a9(0x415)+'ad.'),_0x122443[_0x3206a9(0x1df)](_0x22e423,_0x122443['FAVuE'],null,_0x350c73(_0x51534f['hookG'+'od'],_0x49f2df=>{var _0x2833db=_0x3206a9;if(_0x122443['Eunpj']===_0x122443['MrSfU']){var _0x549984=_0x3b8ce0['capMo'+'ve'];if(_0x549984)try{_0x549984[_0x2833db(0x42c)+'ed']=![];}catch(_0x2ba990){}}else _0x51534f['hookG'+'od']=_0x49f2df,_0x40079d();})),_0x122443['ouFGD'](_0x22e423,_0x3206a9(0x612)+_0x3206a9(0x575)+_0x3206a9(0x486)+_0x3206a9(0x64b)+'lDie)',null,_0x350c73(_0x51534f['hookG'+_0x3206a9(0x46c)],_0x2d5361=>{var _0x27d9ba=_0x3206a9;_0x51534f[_0x27d9ba(0x6f1)+'odDie']=_0x2d5361,_0x122443[_0x27d9ba(0x4af)](_0x40079d);})),_0x22e423(_0x122443['cvhmZ'],null,_0x350c73(_0x51534f['hookN'+_0x3206a9(0x6d4)+'il'],_0x549999=>{var _0x190f2e=_0x3206a9,_0x5a4bdf={'rkkbl':function(_0x4a081b,_0x416d30,_0xa44687,_0x157d44,_0x1b2536,_0x4610e9){return _0x4a081b(_0x416d30,_0xa44687,_0x157d44,_0x1b2536,_0x4610e9);},'omeGf':function(_0x33c7e8,_0x24ff3d){var _0xea3c80=_0x41de;return _0x122443[_0xea3c80(0x2e5)](_0x33c7e8,_0x24ff3d);},'Exlyw':'Takes'+_0x190f2e(0x2d1)+_0x190f2e(0x746)+_0x190f2e(0x415)+_0x190f2e(0x41a)+_0x190f2e(0x6f8)+_0x190f2e(0x46b)+'.'};if('zskwi'!==_0x190f2e(0x1cc))_0x51534f['hookN'+_0x190f2e(0x6d4)+'il']=_0x549999,_0x122443[_0x190f2e(0x1e1)](_0x40079d);else return[_0x5a4bdf['rkkbl'](_0x4a5742,_0x190f2e(0x527)+'ck','Hides'+'\x20kour'+_0x190f2e(0x58f)+'\x20bann'+'er\x20sl'+_0x190f2e(0x4d3),_0x4149ad[_0x190f2e(0x6c9)+'ck'],_0x47d554=>{_0x5efc55['adblo'+'ck']=_0x47d554,_0x4d9e4c();},[_0x5a4bdf[_0x190f2e(0x291)](_0x392d6b,_0x5a4bdf[_0x190f2e(0x497)])])];})),_0x22e423('captu'+'re\x20(S'+_0x3206a9(0x2d0)+_0x3206a9(0x3ca)+'ing\x20+'+'\x20IsGr'+_0x3206a9(0x2ca)+'d)',_0x122443[_0x3206a9(0x5b7)],_0x122443['mwPSF'](_0x350c73,_0x51534f['hookC'+_0x3206a9(0x36f)+'e'],_0x1b6d9a=>{var _0x42c4ad=_0x3206a9;_0x51534f['hookC'+_0x42c4ad(0x36f)+'e']=_0x1b6d9a,_0x4954b8[_0x42c4ad(0x490)](_0x40079d);}))]),_0x3483c5(_0x122443[_0x3206a9(0x418)],_0x3206a9(0x2e6)+_0x3206a9(0x1ae)+_0x3206a9(0x5d7)+'age\x20d'+'etect'+'ors\x20a'+_0x3206a9(0x62f)+'rtup\x20'+'via\x20S'+'topDe'+_0x3206a9(0x3cc)+_0x3206a9(0x4b4)+'\x20Keep'+_0x3206a9(0x46d),_0x51534f[_0x3206a9(0x588)+_0x3206a9(0x28b)],_0x52372e=>{var _0x47aec6=_0x3206a9;_0x51534f[_0x47aec6(0x588)+'ill']=_0x52372e,_0x40079d();},[_0x4ea1b6('God/d'+'amage'+_0x3206a9(0x2cb)+'d\x20gre'+_0x3206a9(0x39a)+_0x3206a9(0x3cf)+_0x3206a9(0x61d)+_0x3206a9(0x501)+'even\x20'+'with\x20'+_0x3206a9(0x230)+'on.',!![])]),_0x122443['VOLxC'](_0x3483c5,_0x3206a9(0x68e)+'r',_0x3206a9(0x5f8)+_0x3206a9(0x2f0)+_0x3206a9(0x703)+'ver-v'+_0x3206a9(0x484)+'e\x20tra'+'ces.',!![],null,[_0x22e423('Wipe\x20'+_0x3206a9(0x274)+'tting'+'s',null,_0x122443['kknaq'](_0x838f62,_0x3206a9(0x5a9),()=>{var _0x411c23=_0x3206a9;_0x51534f={..._0x43eca5},_0x40079d(),location[_0x411c23(0x521)+'d']();}))])];}var _0x27deab=null;function _0x1bed0c(_0x345933){var _0x449970=_0x438518;_0x9c7a47=_0x345933;if(!_0x27deab){if('MAgrV'===_0x122443[_0x449970(0x64a)])_0x2dc11a[_0x449970(0x498)+'n'](_0x5acb60,_0x3ff4d1['parse'](_0x50bc4c[_0x449970(0x677)+'em']('sakur'+'a.kou'+_0x449970(0x403))||'{}'));else{var _0x230683=_0x122443['IYAnx'][_0x449970(0x423)]('|'),_0x35f514=-0x96b*0x3+0x110b*0x1+0xb36;while(!![]){switch(_0x230683[_0x35f514++]){case'0':var _0x57d054=document['creat'+_0x449970(0x28a)+'ent']('style');continue;case'1':_0x122443[_0x449970(0x2e5)](requestAnimationFrame,()=>_0x27deab[_0x449970(0x3d8)+'List'][_0x449970(0x6b8)](_0x449970(0x3bd)));continue;case'2':_0x57d054['textC'+_0x449970(0x4c4)+'t']=_0x3345d6;continue;case'3':_0xe2b241[_0x449970(0x74a)+_0x449970(0x208)+'d'](_0x57d054);continue;case'4':_0x27deab=_0x122443['ZQvWn'](_0x102ae8);continue;case'5':_0xe2b241['appen'+'dChil'+'d'](_0x27deab);continue;}break;}}}_0x27deab[_0x449970(0x3d8)+_0x449970(0x5a5)]['toggl'+'e']('shown',_0x345933);}function _0x2241b0(){var _0xb1bdfa=_0x438518;_0xfc2f82[_0xb1bdfa(0x2a2)](_0x1bed0c,!_0x9c7a47);}function _0x102ae8(){var _0x1bd550=_0x438518,_0x412463=document[_0x1bd550(0x5b6)+_0x1bd550(0x28a)+'ent'](_0x122443[_0x1bd550(0x357)]);_0x412463[_0x1bd550(0x3d8)+'Name']=_0x1bd550(0x1ca)+_0x1bd550(0x51a);var _0x54af8f=document['creat'+'eElem'+_0x1bd550(0x362)](_0x122443[_0x1bd550(0x1dd)]);_0x54af8f[_0x1bd550(0x3d8)+_0x1bd550(0x5a2)]='mn-si'+'de';var _0xd21cb5=document['creat'+_0x1bd550(0x28a)+_0x1bd550(0x362)]('div');_0xd21cb5['class'+_0x1bd550(0x5a2)]=_0x122443[_0x1bd550(0x364)],_0xd21cb5['inner'+'HTML']=_0x122443[_0x1bd550(0x1c9)],_0x54af8f[_0x1bd550(0x74a)+_0x1bd550(0x208)+'d'](_0xd21cb5);var _0x1882bd=document[_0x1bd550(0x5b6)+_0x1bd550(0x28a)+_0x1bd550(0x362)]('div');_0x1882bd['class'+'Name']=_0x122443['zKNTh'];var _0x360be3=document['creat'+_0x1bd550(0x28a)+'ent'](_0x1bd550(0x246)+'r');_0x360be3['class'+_0x1bd550(0x5a2)]=_0x1bd550(0x392)+'p';var _0x30993c=document[_0x1bd550(0x5b6)+'eElem'+_0x1bd550(0x362)](_0x1bd550(0x4c6));_0x30993c[_0x1bd550(0x3d8)+_0x1bd550(0x5a2)]=_0x1bd550(0x52f)+_0x1bd550(0x46e);var _0x1a90b8=document['creat'+'eElem'+'ent']('h2');_0x1a90b8['class'+_0x1bd550(0x5a2)]=_0x122443[_0x1bd550(0x51e)],_0x1a90b8[_0x1bd550(0x419)+'onten'+'t']=_0x1bd550(0x5e6)+'a\x20Kou'+'r';var _0x864cf=document['creat'+_0x1bd550(0x28a)+'ent'](_0x1bd550(0x628));_0x864cf['class'+'Name']='mn-su'+'b',_0x864cf[_0x1bd550(0x419)+'onten'+'t']='kours'+'trike'+_0x1bd550(0x70d)+'enu',_0x30993c[_0x1bd550(0x74a)+'d'](_0x1a90b8,_0x864cf);var _0x2c12a6=document[_0x1bd550(0x5b6)+_0x1bd550(0x28a)+_0x1bd550(0x362)](_0x1bd550(0x428)+'n');_0x2c12a6[_0x1bd550(0x632)]=_0x122443['QdLOf'],_0x2c12a6['class'+'Name']=_0x122443[_0x1bd550(0x736)],_0x2c12a6[_0x1bd550(0x5b5)]=_0x1bd550(0x513),_0x2c12a6[_0x1bd550(0x71a)+_0x1bd550(0x5f3)]=_0x122443['FlfSO'],_0x2c12a6['oncli'+'ck']=()=>_0x1bed0c(![]),_0x360be3['appen'+'d'](_0x30993c,_0x2c12a6);var _0x312003=document['creat'+'eElem'+_0x1bd550(0x362)](_0x1bd550(0x4c6));_0x312003['class'+_0x1bd550(0x5a2)]=_0x122443[_0x1bd550(0x675)],_0x1882bd['appen'+'d'](_0x360be3,_0x312003),_0x412463['appen'+'d'](_0x54af8f,_0x1882bd);var _0x4e7302=new Map();for(var _0x590b24 of _0x312942){var _0x4148fc=document[_0x1bd550(0x5b6)+_0x1bd550(0x28a)+_0x1bd550(0x362)](_0x122443[_0x1bd550(0x482)]);_0x4148fc['type']=_0x1bd550(0x428)+'n',_0x4148fc[_0x1bd550(0x3d8)+'Name']='mn-ta'+'b',_0x4148fc['title']=_0x590b24['label'],_0x4148fc[_0x1bd550(0x71a)+_0x1bd550(0x5f3)]=_0x1bd550(0x603)+'l>'+_0x590b24['label']+('</sma'+'ll>'),_0x4148fc[_0x1bd550(0x4d7)+'ck']=(_0x14b44a=>()=>_0x4f6188(_0x14b44a))(_0x590b24['id']),_0x4e7302[_0x1bd550(0x559)](_0x590b24['id'],_0x4148fc),_0x54af8f['appen'+'dChil'+'d'](_0x4148fc);}function _0x4f6188(_0x60316d){var _0x1301c3=_0x1bd550;_0x2d99eb['cat']=_0x60316d,_0x34d449();var _0x5b7f3e=_0x312942['find'](_0x3aba06=>_0x3aba06['id']===_0x60316d)||_0x312942[0x6*0x625+-0x2559+0x7b];_0x1a90b8[_0x1301c3(0x419)+_0x1301c3(0x4c4)+'t']=_0x122443[_0x1301c3(0x6dc)]+_0x5b7f3e[_0x1301c3(0x22c)];for(var [_0x241673,_0x5750c5]of _0x4e7302)_0x5750c5['class'+'List'][_0x1301c3(0x55d)+'e'](_0x1301c3(0x3b7)+'e',_0x241673===_0x60316d);_0x312003['repla'+'ceChi'+'ldren'](..._0x122443['ZnWPd'](_0x325e77,_0x60316d));}return _0x4f6188(_0x2d99eb['cat']||_0x122443['QyTgg']),setInterval(()=>{var _0x592a6f=_0x1bd550,_0xf328be={'cbvUd':_0x122443[_0x592a6f(0x537)]};if(!_0x9c7a47)return;var _0x2a24dd=_0x312003[_0x592a6f(0x5c0)+'ren'];for(var _0x54c536=0x5f5+0x1553*-0x1+-0xe*-0x119;_0x122443['CMASE'](_0x54c536,_0x2a24dd[_0x592a6f(0x719)+'h']);_0x54c536++){var _0x5203cf=_0x2a24dd[_0x54c536]['query'+'Selec'+'tor'](_0x592a6f(0x1a4)+_0x592a6f(0x4f8));if(_0x5203cf&&(_0x5203cf['textC'+_0x592a6f(0x4c4)+'t'][_0x592a6f(0x663)+'Of'](_0x592a6f(0x642))===-0x15ee+-0xb7*0x3+-0x1813*-0x1||_0x5203cf[_0x592a6f(0x419)+_0x592a6f(0x4c4)+'t'][_0x592a6f(0x663)+'Of'](_0x122443['yJADZ'])===-0x556*0x5+-0x7ed+-0xb89*-0x3)){if(_0x122443[_0x592a6f(0x4a9)]===_0x592a6f(0x2e1))_0x5203cf['textC'+'onten'+'t']=_0x5884a9[_0x592a6f(0x2e2)+'ode']?_0x592a6f(0x6c6)+'MODE\x20'+'-\x20ove'+_0x592a6f(0x32c)+_0x592a6f(0x733)+'\x20no\x20h'+'ooks\x20'+_0x592a6f(0x22f)+_0x592a6f(0x38a)+'\x20exit'+')':_0x5884a9[_0x592a6f(0x556)]?_0x122443[_0x592a6f(0x494)](_0x122443['ybsfQ'](_0x122443['imZFY'](_0x122443[_0x592a6f(0x33f)](_0x122443['imZFY'](_0x122443[_0x592a6f(0x39b)],_0x5884a9[_0x592a6f(0x473)+'Total']?_0x122443[_0x592a6f(0x284)](_0x122443['iucAN'](_0x5884a9[_0x592a6f(0x473)+'Ok'],'/'),_0x5884a9[_0x592a6f(0x473)+'Total'])+('\x20hook'+'s'):_0x592a6f(0x4d1)+_0x592a6f(0x641)+_0x592a6f(0x2c0)+'all\x20o'+'ff)'),_0x122443['ZrORh'])+(_0x5884a9[_0x592a6f(0x65d)+'oaded']?_0x122443[_0x592a6f(0x345)]:_0x592a6f(0x379)+'ng')+('\x20|\x20sh'+'ooter'+'\x20'),_0x5884a9['shoot'+_0x592a6f(0x538)]?_0x592a6f(0x3fa):'none')+('\x20|\x20mo'+_0x592a6f(0x672)+'t\x20'),_0x5884a9[_0x592a6f(0x43b)+_0x592a6f(0x2ed)]?_0x592a6f(0x3fa):'none'),_0x5884a9['lastE'+_0x592a6f(0x318)]?'\x20|\x20ER'+_0x592a6f(0x48e)+_0x5884a9[_0x592a6f(0x23a)+'rror']:''):_0x122443[_0x592a6f(0x3b3)];else try{var _0x2936d7=_0xb7cf6[_0x592a6f(0x365)+_0x592a6f(0x231)+'x']({'typeName':_0x1c18bd,'methodName':_0x4b9839,'params':_0x1090fb,'returnType':_0x171529},_0x27d4f8);return _0x2936d7['enabl'+'ed']=_0x464692!==![],_0x34e56b[_0x709cb8]=_0x2936d7,_0x22e63b['hooks'+_0x592a6f(0x594)]++,_0x2936d7;}catch(_0x5839ed){return _0x52f9e9[_0x592a6f(0x429)](_0xf328be[_0x592a6f(0x3d4)],_0x397542,_0x5839ed&&_0x5839ed[_0x592a6f(0x211)+'ge']),null;}}}},-0xb29*-0x1+0x1187*0x1+-0x632*0x4),_0x412463;}var _0x3345d6=_0x438518(0x567)+_0x438518(0x67d)+'\x20{\x20al'+'l:\x20in'+_0x438518(0x39d)+';\x20}\x0a\x20'+_0x438518(0x223)+_0x438518(0x375)+_0x438518(0x222)+_0x438518(0x4bd)+_0x438518(0x478)+_0x438518(0x704)+'\x20marg'+'in:\x200'+_0x438518(0x6d7)+_0x438518(0x45f)+_0x438518(0x4eb)+_0x438518(0x1bd)+_0x438518(0x593)+_0x438518(0x1e5)+_0x438518(0x342)+_0x438518(0x58d)+'em-ui'+',\x20san'+_0x438518(0x37b)+_0x438518(0x72f)+_0x438518(0x567)+_0x438518(0x3f4)+'anel\x20'+'{\x20pos'+_0x438518(0x3ba)+':\x20abs'+'olute'+';\x20rig'+_0x438518(0x27b)+'4px;\x20'+_0x438518(0x399)+_0x438518(0x6d9)+_0x438518(0x28e)+_0x438518(0x531)+'\x20min('+_0x438518(0x43f)+_0x438518(0x439)+'c(100'+_0x438518(0x1fc)+'48px)'+_0x438518(0x40b)+_0x438518(0x2b5)+'ght:\x20'+_0x438518(0x404)+'80px,'+_0x438518(0x5bb)+'(100v'+'h\x20-\x204'+'8px))'+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+'splay'+_0x438518(0x3c2)+'x;\x20ga'+_0x438518(0x232)+_0x438518(0x42b)+_0x438518(0x398)+_0x438518(0x596)+_0x438518(0x3a4)+'order'+_0x438518(0x1dc)+_0x438518(0x25f)+'2px;\x20'+'point'+_0x438518(0x67c)+_0x438518(0x59d)+_0x438518(0x4a5)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x438518(0x297)+'und:\x20'+_0x438518(0x4c1)+'24,17'+',21,.'+_0x438518(0x595)+'backd'+_0x438518(0x4c0)+_0x438518(0x213)+_0x438518(0x215)+_0x438518(0x385)+_0x438518(0x369)+'turat'+_0x438518(0x4da)+'%);\x20-'+_0x438518(0x29e)+_0x438518(0x741)+_0x438518(0x1f3)+'-filt'+'er:\x20b'+_0x438518(0x650)+_0x438518(0x572)+'satur'+_0x438518(0x4ac)+_0x438518(0x73b)+_0x438518(0x567)+'\x20\x20box'+_0x438518(0x742)+_0x438518(0x448)+'\x200\x200\x20'+_0x438518(0x2a5)+_0x438518(0x4d6)+_0x438518(0x656)+_0x438518(0x530)+',.06)'+_0x438518(0x19e)+_0x438518(0x1b0)+_0x438518(0x60b)+_0x438518(0x6c1)+'(255,'+_0x438518(0x72e)+_0x438518(0x5d9)+'5),\x200'+_0x438518(0x6e1)+_0x438518(0x69c)+_0x438518(0x6c1)+'(0,0,'+_0x438518(0x29d)+_0x438518(0x504)+_0x438518(0x6bd)+'pacit'+'y:\x200;'+'\x20tran'+'sform'+_0x438518(0x615)+'nslat'+_0x438518(0x35e)+_0x438518(0x31c)+_0x438518(0x289)+_0x438518(0x67c)+_0x438518(0x59d)+_0x438518(0x637)+';\x20tra'+_0x438518(0x4f1)+'on:\x20o'+_0x438518(0x6b4)+_0x438518(0x262)+_0x438518(0x730)+_0x438518(0x273)+_0x438518(0x1d6)+'rm\x20.4'+'5s\x20cu'+_0x438518(0x55b)+_0x438518(0x44a)+_0x438518(0x49f)+_0x438518(0x666)+',1);\x0a'+_0x438518(0x4c9)+'\x20colo'+'r:\x20#f'+'6eef2'+';\x20fon'+'t-siz'+'e:\x2013'+_0x438518(0x6d0)+'\x0a\x20\x20\x20\x20'+_0x438518(0x3f4)+'anel.'+_0x438518(0x3bd)+'\x20{\x20op'+_0x438518(0x2f3)+':\x201;\x20'+_0x438518(0x5c5)+_0x438518(0x544)+_0x438518(0x637)+_0x438518(0x2af)+'nter-'+'event'+_0x438518(0x2c7)+_0x438518(0x25e)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x438518(0x6d3)+_0x438518(0x511)+_0x438518(0x60e)+'flex;'+_0x438518(0x2ff)+'-dire'+'ction'+_0x438518(0x6c3)+_0x438518(0x38d)+_0x438518(0x548)+_0x438518(0x549)+_0x438518(0x648)+_0x438518(0x570)+_0x438518(0x1e0)+_0x438518(0x396)+_0x438518(0x4fd)+_0x438518(0x351)+'px;\x20f'+_0x438518(0x723)+_0x438518(0x1cf)+_0x438518(0x4b6)+_0x438518(0x328)+'12px\x20'+(_0x438518(0x58e)+_0x438518(0x5aa)+'radiu'+_0x438518(0x36c)+_0x438518(0x378)+'\x20\x20\x20\x20\x20'+'backg'+_0x438518(0x466)+_0x438518(0x6f3)+_0x438518(0x469)+_0x438518(0x239)+'255,.'+'025);'+_0x438518(0x6a2)+'shado'+'w:\x20in'+_0x438518(0x584)+_0x438518(0x23c)+_0x438518(0x2a5)+'gba(2'+'55,25'+_0x438518(0x530)+_0x438518(0x214)+_0x438518(0x67b)+'\x20\x20\x20.m'+_0x438518(0x1e2)+_0x438518(0x5de)+'ispla'+'y:\x20gr'+_0x438518(0x31f)+'lace-'+_0x438518(0x45a)+':\x20cen'+_0x438518(0x457)+_0x438518(0x728)+_0x438518(0x24b)+_0x438518(0x2de)+'ight:'+_0x438518(0x60a)+_0x438518(0x67b)+'\x20\x20\x20.m'+_0x438518(0x1e2)+_0x438518(0x6bc)+_0x438518(0x5ac)+'dth:\x20'+'25px;'+_0x438518(0x718)+'ht:\x202'+'5px;\x20'+_0x438518(0x50e)+'low:\x20'+'visib'+'le;\x20f'+'ilter'+_0x438518(0x243)+_0x438518(0x2dd)+_0x438518(0x5db)+_0x438518(0x5fa)+'x\x20rgb'+_0x438518(0x469)+_0x438518(0x2b6)+_0x438518(0x456)+_0x438518(0x327)+'}\x0a\x20\x20\x20'+_0x438518(0x4b5)+'tab\x20{'+'\x20disp'+'lay:\x20'+'flex;'+'\x20alig'+_0x438518(0x331)+_0x438518(0x676)+_0x438518(0x35b)+_0x438518(0x1d4)+'tify-'+_0x438518(0x5a6)+_0x438518(0x4a1)+_0x438518(0x35b)+_0x438518(0x2a9)+_0x438518(0x3e1)+_0x438518(0x209)+_0x438518(0x311)+'t:\x2034'+_0x438518(0x3a4)+_0x438518(0x478)+_0x438518(0x36b)+_0x438518(0x6b9)+'r-rad'+_0x438518(0x37d)+_0x438518(0x3f7)+_0x438518(0x567)+_0x438518(0x68b)+_0x438518(0x508)+_0x438518(0x56d)+'ransp'+_0x438518(0x205)+_0x438518(0x320)+'or:\x20r'+_0x438518(0x4d6)+'46,23'+'8,242'+',.4);'+_0x438518(0x1e4)+_0x438518(0x4d2)+_0x438518(0x5f9)+_0x438518(0x3d7)+'nt-si'+'ze:\x201'+'0px;\x20'+_0x438518(0x583)+_0x438518(0x566)+_0x438518(0x3c8)+_0x438518(0x244)+_0x438518(0x30c)+_0x438518(0x278)+'b:hov'+_0x438518(0x3db)+'color'+':\x20rgb'+_0x438518(0x6e9)+_0x438518(0x714)+_0x438518(0x636)+_0x438518(0x2e7)+_0x438518(0x567)+_0x438518(0x435)+_0x438518(0x1c3)+_0x438518(0x50d)+_0x438518(0x573)+'or:\x20#'+_0x438518(0x664)+_0x438518(0x326)+_0x438518(0x297)+'und:\x20'+_0x438518(0x4c1)+_0x438518(0x3be)+_0x438518(0x634)+_0x438518(0x6de)+_0x438518(0x67b)+'\x20\x20\x20.m'+'n-mai'+_0x438518(0x29a)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x438518(0x279)+_0x438518(0x360)+_0x438518(0x28f)+_0x438518(0x2ff)+';\x20fle'+'x-dir'+_0x438518(0x5f5)+_0x438518(0x3ae)+'lumn;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x438518(0x6aa)+_0x438518(0x1bb)+_0x438518(0x28f)+_0x438518(0x2ff)+';\x20ali'+'gn-it'+_0x438518(0x725)+'cente'+_0x438518(0x374)+_0x438518(0x2fb)+_0x438518(0x42b)+'addin'+'g:\x206p'+_0x438518(0x661)+'\x2012px'+_0x438518(0x316)+_0x438518(0x421)+_0x438518(0x55e)+_0x438518(0x1cf)+_0x438518(0x26b)+'\x20\x20.mn'+'-titl'+_0x438518(0x52e)+_0x438518(0x470)+_0x438518(0x712)+'in-wi'+_0x438518(0x4cc)+_0x438518(0x244)+_0x438518(0x30c)+_0x438518(0x3c0)+_0x438518(0x1b9)+_0x438518(0x36d)+'e:\x2017'+'px;\x20f'+_0x438518(0x1d0)+_0x438518(0x436)+_0x438518(0x4b9)+_0x438518(0x67b)+_0x438518(0x313)+'n-sub'+_0x438518(0x5d6)+'nt-si'+_0x438518(0x293)+_0x438518(0x3bb)+_0x438518(0x6e0))+(_0x438518(0x6f2)+'4;\x20}\x0a'+_0x438518(0x30c)+'mn-cl'+_0x438518(0x2d9)+_0x438518(0x511)+'lay:\x20'+'grid;'+'\x20plac'+_0x438518(0x64c)+'ms:\x20c'+_0x438518(0x35b)+';\x20wid'+_0x438518(0x22a)+'8px;\x20'+'heigh'+'t:\x2028'+_0x438518(0x3a4)+_0x438518(0x478)+':\x200;\x20'+_0x438518(0x6b9)+_0x438518(0x255)+'ius:\x20'+'8px;\x20'+'backg'+_0x438518(0x466)+':\x20tra'+_0x438518(0x28d)+_0x438518(0x2b3)+'color'+_0x438518(0x3f5)+_0x438518(0x1fd)+_0x438518(0x53d)+'ity:\x20'+'.45;\x20'+'curso'+_0x438518(0x27d)+_0x438518(0x61a)+_0x438518(0x67b)+_0x438518(0x313)+'n-clo'+_0x438518(0x4cf)+_0x438518(0x561)+'\x20opac'+_0x438518(0x481)+'1;\x20ba'+_0x438518(0x297)+_0x438518(0x2c2)+'rgba('+_0x438518(0x72e)+_0x438518(0x656)+_0x438518(0x204)+_0x438518(0x475)+'\x20\x20\x20\x20.'+_0x438518(0x32f)+_0x438518(0x4aa)+'vg\x20{\x20'+'width'+':\x2014p'+_0x438518(0x2de)+_0x438518(0x2b0)+_0x438518(0x50f)+_0x438518(0x609)+'l:\x20no'+_0x438518(0x5fd)+_0x438518(0x3cb)+_0x438518(0x2e0)+_0x438518(0x5bc)+'olor;'+_0x438518(0x1ac)+'ke-wi'+'dth:\x20'+'2;\x20st'+'roke-'+_0x438518(0x3e5)+_0x438518(0x640)+_0x438518(0x296)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+_0x438518(0x557)+_0x438518(0x50c)+_0x438518(0x54f)+_0x438518(0x412)+_0x438518(0x4bf)+_0x438518(0x54a)+'rflow'+_0x438518(0x63c)+_0x438518(0x600)+'displ'+'ay:\x20g'+'rid;\x20'+_0x438518(0x3a0)+'templ'+_0x438518(0x203)+_0x438518(0x288)+_0x438518(0x3ec)+_0x438518(0x20e)+_0x438518(0x5ae)+_0x438518(0x3ce)+'\x20minm'+_0x438518(0x26f)+_0x438518(0x461)+_0x438518(0x41d)+_0x438518(0x554)+'gn-it'+'ems:\x20'+_0x438518(0x3b2)+';\x20ali'+_0x438518(0x6ce)+_0x438518(0x268)+':\x20sta'+_0x438518(0x4e2)+_0x438518(0x23e)+_0x438518(0x413)+'paddi'+_0x438518(0x6d2)+_0x438518(0x6fb)+_0x438518(0x5d5)+_0x438518(0x67b)+'\x20\x20\x20.m'+_0x438518(0x620)+'s::-w'+'ebkit'+'-scro'+'llbar'+'\x20{\x20wi'+_0x438518(0x4cc)+_0x438518(0x253)+'}\x0a\x20\x20\x20'+_0x438518(0x4b5)+_0x438518(0x56f)+':-web'+'kit-s'+_0x438518(0x701)+_0x438518(0x61e)+'humb\x20'+_0x438518(0x6e3)+_0x438518(0x508)+'nd:\x20r'+_0x438518(0x4d6)+_0x438518(0x656)+_0x438518(0x530)+_0x438518(0x2eb)+_0x438518(0x502)+_0x438518(0x687)+_0x438518(0x6f4)+_0x438518(0x3a7)+_0x438518(0x67b)+'\x20\x20\x20.s'+_0x438518(0x72a)+_0x438518(0x1cd)+'order'+_0x438518(0x1dc)+'us:\x201'+'2px;\x20'+_0x438518(0x3fc)+_0x438518(0x466)+':\x20rgb'+_0x438518(0x469)+',255,'+_0x438518(0x42d)+'025);'+'\x20box-'+_0x438518(0x207)+'w:\x20in'+'set\x200'+_0x438518(0x23c)+_0x438518(0x2a5)+_0x438518(0x4d6)+_0x438518(0x656)+'5,255'+_0x438518(0x214)+';\x20}\x0a\x20'+_0x438518(0x52b)+'k-car'+_0x438518(0x431)+'{\x20bac'+_0x438518(0x508)+_0x438518(0x1a0)+'gba(2'+'55,25'+_0x438518(0x530)+_0x438518(0x354)+';\x20box'+_0x438518(0x742)+_0x438518(0x449)+_0x438518(0x3dd)+'0\x200\x200'+_0x438518(0x47b)+'rgba('+_0x438518(0x3be)+_0x438518(0x634)+_0x438518(0x2c3)+');\x20}\x0a'+_0x438518(0x30c)+_0x438518(0x6f7)+'rd-he'+_0x438518(0x4a2)+'displ')+(_0x438518(0x3bf)+'lex;\x20'+_0x438518(0x548)+_0x438518(0x549)+_0x438518(0x648)+_0x438518(0x570)+'\x20gap:'+'\x208px;'+'\x20padd'+_0x438518(0x328)+'11px\x20'+'12px;'+_0x438518(0x26b)+'\x20\x20.sk'+_0x438518(0x48b)+'-titl'+'e\x20{\x20f'+_0x438518(0x723)+_0x438518(0x26c)+_0x438518(0x48d)+_0x438518(0x279)+_0x438518(0x67b)+'\x20\x20\x20.s'+_0x438518(0x72a)+_0x438518(0x372)+_0x438518(0x6ad)+'rong\x20'+'{\x20fon'+_0x438518(0x36d)+'e:\x2013'+'px;\x20f'+'ont-w'+'eight'+':\x20600'+_0x438518(0x320)+_0x438518(0x3e3)+'gba(2'+_0x438518(0x569)+_0x438518(0x1e3)+',.45)'+_0x438518(0x67b)+'\x20\x20\x20.s'+_0x438518(0x72a)+_0x438518(0x431)+_0x438518(0x5d4)+_0x438518(0x2df)+'itle\x20'+'stron'+_0x438518(0x749)+_0x438518(0x285)+_0x438518(0x5d0)+_0x438518(0x58c)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'mbody'+'\x20{\x20pa'+_0x438518(0x49d)+_0x438518(0x264)+_0x438518(0x1b4)+_0x438518(0x413)+_0x438518(0x71d)+_0x438518(0x1fb)+_0x438518(0x4ef)+_0x438518(0x5d6)+'nt-si'+'ze:\x201'+_0x438518(0x3bb)+_0x438518(0x6e0)+_0x438518(0x6f2)+_0x438518(0x265)+_0x438518(0x2ec)+_0x438518(0x399)+'m:\x206p'+_0x438518(0x4d5)+'\x20\x20\x20\x20.'+'sk-ct'+_0x438518(0x317)+_0x438518(0x319)+_0x438518(0x32a)+'ex;\x20a'+_0x438518(0x37c)+'items'+_0x438518(0x276)+_0x438518(0x457)+_0x438518(0x294)+_0x438518(0x253)+_0x438518(0x5da)+'ng:\x204'+_0x438518(0x678)+'\x20font'+_0x438518(0x654)+_0x438518(0x695)+'5px;\x20'+_0x438518(0x71d)+'\x20.sk-'+'label'+_0x438518(0x557)+_0x438518(0x50c)+';\x20col'+_0x438518(0x3e3)+'gba(2'+'46,23'+_0x438518(0x1e3)+',.75)'+_0x438518(0x67b)+'\x20\x20\x20.s'+_0x438518(0x2ea)+'t\x20{\x20d'+'ispla'+'y:\x20bl'+'ock;\x20'+_0x438518(0x583)+_0x438518(0x391)+_0x438518(0x70a)+_0x438518(0x400)+'city:'+_0x438518(0x371)+_0x438518(0x71d)+'\x20.sk-'+_0x438518(0x3b1)+'h\x20{\x20p'+_0x438518(0x5ec)+_0x438518(0x6ed)+_0x438518(0x524)+_0x438518(0x5ce)+_0x438518(0x531)+_0x438518(0x1b2)+';\x20hei'+_0x438518(0x4b7)+_0x438518(0x4f0)+'\x20bord'+_0x438518(0x414)+';\x20bor'+_0x438518(0x687)+'adius'+':\x2099p'+_0x438518(0x1a2)+'ckgro'+'und:\x20'+'rgba('+_0x438518(0x72e)+_0x438518(0x656)+_0x438518(0x2dc)+_0x438518(0x722)+'rsor:'+_0x438518(0x551)+_0x438518(0x457)+'flex:'+'\x20none'+_0x438518(0x67b)+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+_0x438518(0x638)+'ntent'+_0x438518(0x34a)+'\x20posi'+_0x438518(0x4ed)+'\x20abso'+'lute;'+'\x20top:'+_0x438518(0x1f9)+_0x438518(0x5d8)+_0x438518(0x5b0)+_0x438518(0x2a9)+_0x438518(0x220)+'px;\x20h'+'eight'+_0x438518(0x38b)+_0x438518(0x502)+_0x438518(0x687)+_0x438518(0x6f4)+':\x2050%'+_0x438518(0x3d0)+'kgrou'+_0x438518(0x1a0)+_0x438518(0x4d6)+_0x438518(0x656)+_0x438518(0x530)+',.25)'+_0x438518(0x709)+_0x438518(0x4f1)+_0x438518(0x3c4)+'eft\x20.'+'2s,\x20b'+_0x438518(0x40d)+_0x438518(0x5f2)+_0x438518(0x33d)+_0x438518(0x71d)+'\x20.sk-'+'switc'+_0x438518(0x66f)+_0x438518(0x389)+'cked='+_0x438518(0x6b2)+_0x438518(0x282)+_0x438518(0x3fc)+'round'+_0x438518(0x6f3))+(_0x438518(0x469)+_0x438518(0x2b6)+_0x438518(0x456)+_0x438518(0x509)+_0x438518(0x71d)+_0x438518(0x1fb)+_0x438518(0x3b1)+_0x438518(0x66f)+'a-che'+'cked='+_0x438518(0x6b2)+'\x22]::a'+'fter\x20'+'{\x20lef'+_0x438518(0x30a)+'px;\x20b'+_0x438518(0x40d)+_0x438518(0x397)+_0x438518(0x5c7)+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x438518(0x1fb)+'field'+_0x438518(0x590)+'ckgro'+_0x438518(0x2c2)+_0x438518(0x4c1)+_0x438518(0x72e)+'55,25'+_0x438518(0x355)+'5);\x20b'+_0x438518(0x478)+_0x438518(0x36b)+'borde'+'r-rad'+'ius:\x20'+_0x438518(0x71e)+_0x438518(0x21d)+':\x20#f6'+_0x438518(0x356)+'\x20padd'+'ing:\x20'+_0x438518(0x4ea)+_0x438518(0x6ae)+_0x438518(0x523)+_0x438518(0x2be)+'11.5p'+'x;\x20ou'+_0x438518(0x3ef)+_0x438518(0x41c)+_0x438518(0x30e)+_0x438518(0x43c)+'dow:\x20'+'inset'+'\x200\x200\x20'+_0x438518(0x514)+_0x438518(0x6c1)+_0x438518(0x653)+_0x438518(0x72e)+_0x438518(0x5d9)+_0x438518(0x529)+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x438518(0x713)+_0x438518(0x4f9)+_0x438518(0x6e2)+_0x438518(0x40d)+_0x438518(0x397)+_0x438518(0x5ca)+_0x438518(0x2a1)+_0x438518(0x71d)+'\x20.sk-'+'range'+'\x20{\x20di'+_0x438518(0x225)+':\x20fle'+'x;\x20al'+'ign-i'+'tems:'+_0x438518(0x3f2)+_0x438518(0x618)+_0x438518(0x6a0)+'px;\x20}'+_0x438518(0x567)+_0x438518(0x344)+_0x438518(0x47d)+'\x20{\x20-w'+_0x438518(0x40a)+'-appe'+_0x438518(0x383)+_0x438518(0x234)+_0x438518(0x479)+_0x438518(0x5d2)+_0x438518(0x45e)+_0x438518(0x637)+';\x20wid'+_0x438518(0x312)+_0x438518(0x413)+'heigh'+'t:\x208p'+'x;\x20ba'+'ckgro'+_0x438518(0x2c2)+_0x438518(0x5c5)+'paren'+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x438518(0x59a)+'ider:'+_0x438518(0x686)+'kit-s'+'lider'+'-runn'+_0x438518(0x639)+'track'+_0x438518(0x5b3)+'ight:'+'\x202px;'+_0x438518(0x644)+'er-ra'+_0x438518(0x467)+_0x438518(0x54d)+_0x438518(0x724)+_0x438518(0x665)+'d:\x20li'+'near-'+_0x438518(0x258)+_0x438518(0x652)+_0x438518(0x664)+_0x438518(0x5c1)+_0x438518(0x3a2)+')\x200\x200'+'\x20/\x20va'+_0x438518(0x68c)+_0x438518(0x543)+')\x20100'+'%\x20no-'+'repea'+_0x438518(0x310)+_0x438518(0x30d)+'5,255'+_0x438518(0x239)+'.08);'+_0x438518(0x26b)+_0x438518(0x314)+_0x438518(0x540)+_0x438518(0x2cd)+'webki'+'t-sli'+_0x438518(0x2ad)+_0x438518(0x425)+'{\x20-we'+_0x438518(0x3e9)+_0x438518(0x2d5)+_0x438518(0x721)+_0x438518(0x41c)+_0x438518(0x340)+_0x438518(0x4cc)+'6px;\x20'+_0x438518(0x311)+_0x438518(0x633)+'x;\x20ma'+'rgin-'+_0x438518(0x560)+_0x438518(0x405)+'\x20bord'+'er-ra'+_0x438518(0x467)+'\x2050%;'+'\x20back'+'groun'+_0x438518(0x6df)+_0x438518(0x3a2)+_0x438518(0x67b)+_0x438518(0x52b)+_0x438518(0x390)+_0x438518(0x5d6)+'nt-si'+_0x438518(0x293)+'1px;\x20'+_0x438518(0x583)+'weigh'+'t:\x2060'+'0;\x20mi'+_0x438518(0x48d)+'th:\x202'+_0x438518(0x253)+_0x438518(0x336)+_0x438518(0x548)+_0x438518(0x386)+_0x438518(0x37f)+'olor:'+'\x20rgba'+_0x438518(0x30b)+_0x438518(0x228)+'42,.8'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-co'+'lor\x20{')+(_0x438518(0x4fd)+'h:\x2034'+_0x438518(0x66e)+_0x438518(0x436)+':\x2022p'+_0x438518(0x57a)+_0x438518(0x622)+_0x438518(0x3da)+_0x438518(0x478)+_0x438518(0x1dc)+_0x438518(0x6d8)+'px;\x20b'+_0x438518(0x40d)+_0x438518(0x397)+'\x20none'+_0x438518(0x35c)+_0x438518(0x5b4)+'\x200;\x20c'+_0x438518(0x376)+_0x438518(0x1f0)+_0x438518(0x570)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x438518(0x71c)+_0x438518(0x5d6)+_0x438518(0x459)+'ze:\x201'+_0x438518(0x3bb)+'color'+_0x438518(0x6f3)+'a(246'+_0x438518(0x714)+_0x438518(0x636)+_0x438518(0x1ef)+_0x438518(0x398)+_0x438518(0x4cd)+_0x438518(0x19b)+_0x438518(0x71d)+_0x438518(0x1fb)+'note.'+_0x438518(0x474)+_0x438518(0x38c)+'r:\x20#f'+'f7a93'+_0x438518(0x67b)+_0x438518(0x52b)+'k-btn'+'\x20{\x20al'+'ign-s'+_0x438518(0x65c)+_0x438518(0x221)+'start'+_0x438518(0x502)+_0x438518(0x62a)+'0;\x20bo'+'rder-'+_0x438518(0x382)+'s:\x208p'+'x;\x20pa'+_0x438518(0x49d)+_0x438518(0x38b)+'\x2016px'+_0x438518(0x3d0)+_0x438518(0x508)+_0x438518(0x51f)+_0x438518(0x664)+_0x438518(0x734)+'lor:\x20'+_0x438518(0x541)+_0x438518(0x1d8)+_0x438518(0x654)+_0x438518(0x695)+'5px;\x20'+'font-'+_0x438518(0x566)+_0x438518(0x3c8)+_0x438518(0x6e6)+_0x438518(0x453)+'\x20poin'+_0x438518(0x457)+_0x438518(0x71d)+'\x20.sk-'+_0x438518(0x4d0)+_0x438518(0x6d6)+_0x438518(0x2a8)+'ter:\x20'+_0x438518(0x623)+'tness'+_0x438518(0x73a)+';\x20}\x0a\x20'+_0x438518(0x1bf));window[_0x438518(0x5f6)+'entLi'+_0x438518(0x370)+'r'](_0xfc2f82[_0x438518(0x19d)],_0x1159ef=>{var _0x58c85c=_0x438518;_0xfc2f82[_0x58c85c(0x626)]!==_0xfc2f82[_0x58c85c(0x516)]?_0xfc2f82['dFOsG'](_0x1159ef['code'],_0x58c85c(0x352)+'t')&&(_0x1159ef[_0x58c85c(0x2db)+'ntDef'+'ault'](),_0xfc2f82['oJiUm'](_0x2241b0)):(_0x16cb81[_0x58c85c(0x720)+_0x58c85c(0x306)]=_0x20f2a3,_0x122443['KxOHS'](_0xf91ff0));},!![]);var _0x2af61d=document[_0x438518(0x5b6)+'eElem'+_0x438518(0x362)](_0x438518(0x4c6));_0x2af61d[_0x438518(0x26e)]['cssTe'+'xt']=_0x438518(0x366)+_0x438518(0x256)+'ixed;'+'top:1'+'2px;r'+_0x438518(0x2b0)+'12px;'+'z-ind'+_0x438518(0x5ea)+_0x438518(0x693)+'646;c'+_0x438518(0x376)+_0x438518(0x2d8)+_0x438518(0x6eb)+'idth:'+'26px;'+_0x438518(0x311)+'t:26p'+_0x438518(0x6fa)+_0x438518(0x34b)+_0x438518(0x25b)+_0x438518(0x5a8)+_0x438518(0x4ed)+_0x438518(0x6e0)+'ty\x200.'+_0x438518(0x3fd)+_0x438518(0x61a)+'-even'+'ts:au'+_0x438518(0x6da)+'lter:'+_0x438518(0x23f)+_0x438518(0x207)+_0x438518(0x217)+'\x204px\x20'+_0x438518(0x4c1)+'255,1'+_0x438518(0x634)+'7,0.7'+'))',_0x2af61d['inner'+_0x438518(0x5f3)]=_0x438518(0x236)+'viewB'+_0x438518(0x1ea)+_0x438518(0x54e)+'\x2024\x22>'+'<path'+_0x438518(0x534)+'12\x2021'+'c-1.5'+'-2.5-'+_0x438518(0x487)+'-4-7.'+_0x438518(0x70f)+'.5\x201.'+_0x438518(0x40c)+'\x204-4.'+_0x438518(0x430)+_0x438518(0x2c9)+'5c0\x203'+_0x438518(0x249)+_0x438518(0x735)+_0x438518(0x506)+'fill='+_0x438518(0x602)+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x438518(0x3cb)+_0x438518(0x745)+_0x438518(0x58a)+_0x438518(0x1ac)+_0x438518(0x32d)+_0x438518(0x50b)+_0x438518(0x3f3)+_0x438518(0x35d)+_0x438518(0x3cb)+'-line'+'join='+'\x22roun'+_0x438518(0x65a)+_0x438518(0x373)+'e\x20cx='+_0x438518(0x21e)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+_0x438518(0x581)+'6b9d\x22'+'/></s'+_0x438518(0x241),_0x2af61d[_0x438518(0x5b5)]=_0x438518(0x5e6)+_0x438518(0x1c0)+'r',_0x2af61d[_0x438518(0x2b2)+_0x438518(0x519)+'er']=()=>_0x2af61d[_0x438518(0x26e)]['opaci'+'ty']='1',_0x2af61d[_0x438518(0x2b2)+_0x438518(0x455)+'ve']=()=>_0x2af61d[_0x438518(0x26e)]['opaci'+'ty']=_0x438518(0x4ce),_0x2af61d['oncli'+'ck']=_0x562e8d=>{var _0x514aa9=_0x438518;_0x562e8d[_0x514aa9(0x60c)+_0x514aa9(0x2d7)+_0x514aa9(0x45d)](),_0x122443['GmygZ'](_0x2241b0);},document[_0x438518(0x4c7)][_0x438518(0x74a)+'dChil'+'d'](_0x2af61d),_0xfc2f82['ggMfZ'](_0x4bfda2),requestAnimationFrame(_0x292230),console['log']('[saku'+'ra-ko'+'ur]\x20m'+_0x438518(0x571)+_0x438518(0x271)+_0x438518(0x61b)+':',_0x5884a9['uwmk']);});})()));
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
