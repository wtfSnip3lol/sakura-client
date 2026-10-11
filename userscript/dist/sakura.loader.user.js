// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.1.0
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
function _0x3f97(_0x23c928,_0x2bb456){_0x23c928=_0x23c928-(0x20*-0xaa+0x2*-0xe95+0x3393);var _0x13638f=_0x39db();var _0x3c716c=_0x13638f[_0x23c928];if(_0x3f97['TXHtCK']===undefined){var _0x267794=function(_0xb943f9){var _0x383276='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x51f0='',_0xff33d6='';for(var _0x227801=0x10cc+0x2*-0x3dd+0x9*-0x102,_0x431b6a,_0x1e16b8,_0x1d4709=0x1*0x1fb9+0x184*0x5+0x274d*-0x1;_0x1e16b8=_0xb943f9['charAt'](_0x1d4709++);~_0x1e16b8&&(_0x431b6a=_0x227801%(-0x196*0x3+0xaea+-0x106*0x6)?_0x431b6a*(-0x12fa+-0xd*0x61+0xe5*0x1b)+_0x1e16b8:_0x1e16b8,_0x227801++%(0x252f*0x1+-0x1e4+-0x2347))?_0x51f0+=String['fromCharCode'](-0x3*0xb23+0x67c+-0x4*-0x6fb&_0x431b6a>>(-(0x1d16+-0x141*0x17+-0x3d)*_0x227801&-0x18c*-0x9+0x151c+-0x2302)):-0x207c+0xbe3+0x1*0x1499){_0x1e16b8=_0x383276['indexOf'](_0x1e16b8);}for(var _0x19442e=-0x5e+-0xa*-0x23b+-0x15f0,_0x1a4683=_0x51f0['length'];_0x19442e<_0x1a4683;_0x19442e++){_0xff33d6+='%'+('00'+_0x51f0['charCodeAt'](_0x19442e)['toString'](0x36*0xc+0x5*-0x195+0x571))['slice'](-(-0x1ca5+0x2560+0x4d*-0x1d));}return decodeURIComponent(_0xff33d6);};_0x3f97['wAenrW']=_0x267794,_0x3f97['scPbKX']={},_0x3f97['TXHtCK']=!![];}var _0x461fd4=_0x13638f[-0x7ba*-0x3+0x201*-0x1+0x152d*-0x1],_0x50a6e7=_0x23c928+_0x461fd4,_0x26bba3=_0x3f97['scPbKX'][_0x50a6e7];return!_0x26bba3?(_0x3c716c=_0x3f97['wAenrW'](_0x3c716c),_0x3f97['scPbKX'][_0x50a6e7]=_0x3c716c):_0x3c716c=_0x26bba3,_0x3c716c;}function _0x39db(){var _0x5bcf27=['t0HLywW','lwfWCgu','y2n1CMe','zxG6ide','lwXPBMu','yxjNzxq','lMP1Bxa','ztOGmtm','zxiTCMe','CMD4CKO','C2STy2e','zw50rwW','C2STAgK','qwrIBg8','B2rL','zs1PDgu','uNvUDgK','igH1CNq','zxrL','A2L0lxm','CM9ZC2G','Bwf0y2G','BwrLC2m','x19tquS','lwLVxYO','zwfK','A2vizwe','Bw4TBg8','CYaNzNu','CePAueq','EsbKzwy','zgv2Awm','Awr0Aa','nc00lJu','rgfTywC','qwfhzha','z3zPv1u','igzSzxG','u3rPuxO','BLbSyxq','lc40ktS','rw5NAw4','zMLSzw4','Eg5XrMC','lxjHzgK','y3jVC3m','Bw4TDge','qK5LsKe','D05SDve','DgXPBMu','lJuGms4','zw4GDg8','AwvSza','nxWXoxW','wfbwveC','idHWEdS','Aw4GC2e','BsbYAwC','CgfYzw4','y3jLzw4','CMvU','DxDTAW','ihSGD2K','zgL2','z2v0qxq','DcbHihq','Eca2ChG','y2XHC3m','y2vZlG','idmYChG','B250lxm','u3PjDK0','BYbWAwC','z056uw8','ihbVAw4','CNnVCJO','lcbJywW','rwXLBwu','tMfTzq','y29SB3i','kdi0nIW','AhvTyIa','AwXnB3q','AuL3DfK','DgHLihC','ug9ZAxq','nIaXoci','zwfgsgC','mtrWEdS','EdSGAgu','ihn0AwW','uK1Jzgu','y2TyweK','Fdn8mq','igjVCMq','CMvzv1a','vw5PDhK','iJeUnsi','lwHLAwC','CNrivhO','lxnSAwq','EcaWoYa','zNrLCIa','ifjLy28','ihrYyw4','Aw5Uzxi','FdeXFdi','v3vVANy','CMfUy2u','EtOGzMW','r29Kl2q','DgvYoYa','zuzqCMG','AxrJAa','zc5VBIa','y2fWtw8','Bw92zw0','sMzbv3C','C2v0','Cg9W','ifTfwfa','DffNyvi','A2DYB3u','vhzHCLi','vM5oDhm','AY1OAw4','u2TPChm','zIXZExm','ideYChG','C2STBge','tu9ersa','y3jLyxq','AuvPvem','ug5HEue','icaGic4','BsbJzw4','ohWZFde','l3jHCgK','BMvJyxa','AwrLCG','CIb2ywW','AxzfBeW','lNnRlw0','mxW2Fdm','y2XLyxi','nIa2Bde','ywjSzs0','BguGAwy','BguGC3q','mtn8mtC','Bg93zxi','vgfRzxm','nMvLzJi','zg93kda','AcaTidq','z24Ty28','AdOGmZq','Bgf5ig8','B3zLCIa','zwjRAxq','ihWGC2G','z2v0','C1nxwxq','y2HLy2S','ChG7igy','rgLL','EvHLuNq','z29KicG','tgvNAw8','oIaZChG','y29TCgW','ntuSlJa','mtaWid0','CJSGz2e','EtOGmdS','r29Kie0','zgvYoIa','BMu7ige','D2nvvNq','z2jHkdi','Cc1ZAge','yxjJ','tw92zw0','DgnOihq','ntuSmJu','BMvHCI0','Aw5NicS','EdSGCge','EYbIB3G','BgLUzvq','nMi5zci','ifvxtuS','B25JAge','DhLSzq','ocWYndi','B2f0Eq','rhjfENG','lc40nsK','zMy2yJK','Dgv4Dee','Dg9Nz2W','mtu3lc4','yxrPB24','ExnnAwi','oYbVDMu','BNnPDgK','D3LmAg0','CxjnC2q','DfvJqKu','uwPTCNK','D1rgufC','Aw5KzxG','BhrO','oIaJzJy','Be1VDgK','BI1ZDwi','C05OB1K','igzVCIa','DMLZDwe','v2LKDgG','tu9mAKG','DwTwweu','Ahq6idi','ywXPz24','AwvKigm','C2XPy2u','Bw4Ty2W','nYWWlJm','CI51As4','uMvJDa','igjVEc0','rufhBwi','BgfIzwW','shLKq04','y2HLCYa','Fdb8mNW','BgvZiem','oYbIB3i','ndGZnJq','t2ncAw0','zwvMmJS','sffLAMK','BgrYzw4','B3vUzdO','lxrPDgW','tM8Gu3a','CgXPy2e','BI1PDgu','ic5ZAY0','D2L0Aca','BMu7ihm','yYGXmda','ysGYndy','DgLVBI4','C2HHzg8','DhKGmc4','vhnkC1K','yNjPz2G','t2XTCNm','BgWGBwu','s2v5uW','ihSGzM8','EgzTuKu','DxjLihq','DMvYlxy','AxrLBxm','yuDJDNq','sMTiufe','C2STy3q','oYbMAwW','ihjLy28','sNLqzg8','igLMig0','wKjgy1O','DKrVD3e','uMvJB2K','rfbnueu','C3bSAxq','DhKGDMe','uhPmC1q','DgG6idG','zw1eDum','ksaXmda','zgfTywC','Aw9F','zuHiyvu','ntaLktS','s2v5vW','CM91BMq','qxnZzw0','CKHgwLu','icaGica','kYbtCge','y3KGB24','B3bLBG','CM9Szq','BNqGAxq','BI1JBg8','AgvSza','EuvgzgK','igrHBwe','ktSGFqO','zxjZ','mcWWlJG','yMfYlxq','u1Lpuuy','nJC0ndH2wg5ztxu','r3r6swS','mc41o3q','CZO6lxC','igXLzNq','Bg9YoIa','BhvLCY4','vKjesue','zwLNAhq','r3zsqNa','Ag9mtuO','z3jPzc0','ifvUAxq','BwjVzhK','ndC0odm','EYbMB24','ifvjiIW','sfzLvwq','zw50tgK','rNLpBKi','zcWGi2y','B25TB3u','kdeUmsK','vffhEuW','zw15igm','mZGYodu5nurtAg1QCW','AxjXrKW','CdOGmti','DcbZDge','mdSGyM8','lM1Ulxm','zw1LBNq','z3jHDMK','weDtzvu','BfP5u3i','EfvZELK','ihLVDxi','CwnsEuy','mtbWEdS','Aw5Zzxq','y2f0','q0fovKe','zxmGB24','v1vou2C','wxv0tLy','swyGCMu','nZTWB2K','ywrK','C2u6Ag8','BgLKzxi','s2v5qq','mJeZwenjyK5h','C3bLzwq','yxvSDa','BMf2','x19ZywS','CgfKzgK','yMvNAw4','mNb4ihu','DhrPBMC','DMv5Cuq','CgfYC2u','yMfJA2C','lwfWCgW','oYbKAxm','reDfAM4','mciGCJ0','oWOGica','ELfJzK4','lNnRlxm','tKfJsNu','y3qGB24','DMLZAwi','q0nfqxC','vMfSDwu','A2rYB3a','kdi1nsW','BMCGzM8','ihWGrvi','uJOG','z0Hcz1O','ihn0CM8','C1n2EwS','AguGCMu','BcbKCMe','t1v2Buy','DhjHBNm','Aw1Llca','zMLUza','AY1ZD2K','phbHDgG','icaGkIa','ohb4oYa','BML0igy','lK92zxi','tg9XyNi','Dcb7igq','u0XOzhK','zgvYlxi','zguSihq','EgTQsu4','CMvZDg8','igjHy2S','oIbZDge','C3rHCNq','ig1HEsa','Dw5KoIa','ldeWnYW','mhb4oYa','zsXTB24','yMvS','oIa2mda','sfnAyNa','zw50CW','q3HbChO','BMC6igi','zMLLBgq','zvb4qK8','mcWUntu','As1TB24','y2HtAxO','ywXSihq','AwXKigG','rgLZywi','CMfWAwq','rMLLBgq','Bw9fEha','DLPkz1C','ocK7ih0','DgvYigm','B25JBgK','yxvuzKy','oIbWB2K','Chb5ugS','ywn0A0S','igDHCdO','kdaSmcW','y2L0EtO','AxrPB24','uMf0zq','oIbPBMG','B246igW','CMvWBge','qxbWBhK','t1vsx18','zYbJyw4','BMn0Aw8','mJiSocW','y29Kzq','yMX5lum','DwX0','y29UDgu','A3mGyxi','sNvTCca','vgjVzxC','CMvAv0y','phnTywW','j3qGC3q','oYbYAwC','u2fMzsa','y2fWu2G','CfjsA2W','vvHzwhe','ugf0Aa','CMXHEsa','wKD3vLi','BMqGBwe','tw9ptfC','Fdf8nxW','tuLtu0K','DgvTlxu','DxjH','Cgfhyvu','ihWGBw8','EdSGB3u','zgLquhO','wMjrywW','CZPUB24','B3n0zMK','oI13zwi','EwfbzfC','yxGOmJu','u3bLzwq','De5Vzgu','A1PkvKi','C2STyNq','mxb4ihi','mteUnxa','lxnOywq','DKD0rK0','zxzLBIa','Ag9VA0C','C2v0qxq','B29RCYa','ide0ChG','B2LUDgu','EMTpDKu','z3LqrLi','y3nZvgu','Cg9PBNq','zwXMoIa','D3jPDgu','4Ocuig92zq','tMTUyw0','CuTwDgy','zNvSBhm','v1f4A2u','igq9iK0','B2fKzwq','CwXwDxy','A3LqyNa','qsblt1u','zgrPBMC','uuz1vuS','CZOGmty','ys11Aq','wgP3Bxe','zxjYB3i','BwvZC2e','BM9szwm','B2reAwu','idqGnc4','BNrLBNq','Dc1Iywm','ltqTnY4','uencyvm','iJeYiIa','B2rLu3q','y2HdB2W','twXxqNu','oYb0CMe','Aw4Sihq','EgzhEM0','wuzyrMi','mNb4ide','ywrPDxm','Aw46ida','psjYB3u','igzPBgW','zM9YBxm','phn2zYa','lIbvC2u','Bg93oIa','y2fUDMe','zxmGEYa','B2nRoYa','AM9PBJ0','BwLU','BwvsDw4','tenQzhm','C21HBgW','DgXL','ugn0','DcWGCMC','B25Lige','yM9KEq','y2fNshy','DhKGjq','zuvSzw0','tg9JywW','oYb3Awq','C0jKDuO','zNbZ','D2fYBG','vwHvwue','Bw92zvq','lJjZoYa','nhWZFda','Cu9IsMi','qw1cAK0','C3r5Bgu','igrPC3a','v0vJvem','BMLUzW','B2XVCJO','zgD1uMu','zvbSDwC','BKziwxa','BgfJzs0','igv4Axq','vwjPzve','rwneAMm','vgfcy1e','ysGYntu','CMLZAYa','DgG6idu','B3b0Aw8','lwjHBNi','mxb4oYa','CJOGi2y','vKnHvM4','AxnWBge','nJq2o2m','z29KrgK','icbIywm','DwLPrNq','ChG7ihC','r1HmwvK','mJqYlc4','zxj2zxi','icaGig8','B25LigK','rvPNwNy','z2LMEq','CK9ZELy','D0nVBg8','BYb0Agu','vhDRAKq','ig5LDMu','AwvZDuK','BNrLCI0','zMLSBfq','tKjPBva','tgvMDca','ihSGyMe','z29K','z2fWoIa','idmWChG','sMHeA0i','v0fttsa','C2STBM8','Aw9FmZa','uIb2ms4','swjYDhK','EdSGyMe','wMvYB2u','BMqIihm','y2fSBa','Bw9ODfi','lc4WncK','ltiUnsa','u2fRDxi','BM9Uzq','zNH1Cgu','vwP2Bem','C3DPDgm','zJmY','u3vTzhe','BIb7igi','zsaOt0G','CIbNyw0','CMqTAgu','sgDKCgy','yMDQDeO','zg93oIa','AwDODdO','zcb7igi','EvjXAKK','ih0kica','zwzbDwG','uwnyugK','lwnVBhm','zxiGC2W','oIbMBgu','zsbTAxm','B24UvgK','y2vUDgu','DgnOoJO','mhWXFdy','BgLNBI0','oIa0ChG','zcbNCMu','Dw5Kzwq','CYbpDMu','ANzotKK','idjWEdS','oIaXms4','DgvY','oIbIBhu','AwX5oIa','Dhm6yxu','igvYCG','zvj1BM4','EtOGyMW','ChG7iha','zMLSBfm','t3zLCNC','AcbVBMu','idi2ChG','lM1Ulxq','Fdf8m3W','ihSGywW','C2v0x3q','CKXLALe','AwX0zxi','q3jVC3m','u2HHCNa','nde5oYa','CKztv0S','Ag9ZDg4','ms4XlJa','zgXYqMu','wvLKqwi','ywz0zxi','s1Hjv0m','AY12ywW','zM9UDa','B3i6icm','zxi6ida','mcaXChG','Dg9W','D2vPz2G','teTHvw0','zxjPDdS','CMvUDem','C2STBwi','zgTPDa','cIaGica','BevUzeC','ihrOzsa','sfrnta','v2vItw8','A2v5C3q','qNfiEey','ndySmJm','nZaWia','ihjLBg8','BwuG','y2HPBgq','C2STBwq','lMLVig0','y29TyMe','vLLvq3e','igvUDgK','CYb3B24','CML0zxm','CgXHEtO','wfvJtfG','B2LS','yxrLvge','s0X4r0O','BgLUzw4','D1vhEwi','DhjPyNu','zxnJ','zw1ZoIa','BgvMDa','C2STC3C','Bw4Ty28','qxbWBgK','yM90Dg8','ig1HCMC','yxfSt1G','BYb7igq','q3vZDg8','ig9YigS','zMXLEdS','i2zMzG','ignHy2G','Bg9N','DLPtANy','DZOGAw4','AwnRihm','BfjHDgK','zJDHotm','EtOGz3i','yxrLlwm','zgvSzxq','mtb8m3W','mhb4lca','ignVBg8','nJiWChG','Ag9VA3m','zxi7igC','mc41','qw1jsu4','DLP6D0K','igvSC2u','DgLMEs0','DdOGnZa','BMrmtve','DMfS','ne1LBvjlva','v3jHCha','EdSGFqO','zwn0oIa','Bgv4oYa','uM1TAKW','ChG7cIa','BMqGt0G','BhvTBJS','DgG6idi','BwLKzgW','rxHW','nxmGy3u','zJzIowq','Bw1VifS','C3rYB24','zwv6zsa','uwjyzM0','AwXS','DhLWzq','AfTHCMK','Ag9VA1a','nxb4oYa','zu5WuK4','CZOGCMu','Cfzdz1a','CgfJAxq','lxnLCMK','mdSGFqO','swXMrMu','Cg9ZAxq','ChvZAa','ic40oYa','y2PpBLq','zciVpJW','AgvZ','CMzzAg8','oIbYz2i','C2HVB3q','t1nOB28','EYaTD2u','AsXZyw4','t0zgigi','zZOGnNa','AMXSuui','Aw4TD2K','lxnPEMu','oYb9cIa','ywqGEYa','vg90ywW','yxjKlxq','mJuPoYa','oIbJzw4','z2H0oIa','r2H2q2K','CMDPBI0','idaGmJq','vfj3r1i','zdSGy28','nsWUmdu','mZe0otHvwhvYCKK','C3Pnt2G','nhb4oYa','CfHPvfy','Dc1ZAxO','iNjVDw4','Aw9U','Be9XrKe','B3i6ihi','B250zw4','ANvTCfa','lca1mcu','ntyZmJCYnxzpqKPjwG','mZuSmJq','CMLUz3m','BhmGDgG','z3jVDw4','DgG6ida','nxW4Fdq','CMvHzey','y3DnAwu','y3K9iJe','yw1L','zxi6igi','nsK7igi','wfjUvw8','C2v0sxq','CLfcufG','rLbtig8','yw1Hz2u','oIa1mcu','tNfhCgm','z24TAxq','vvbhBKO','B3bHy2K','oYbMB24','oYbIB3G','zM9UDc0','y2SP','lwjVEdS','oYb1C2u','mxW0Fde','oJa7D2K','A2vxq2m','y2TJrfy','ExDUvKK','mtSGyMe','Bgv4oIa','AMfyDxK','sMzND2i','owqIihm','rLbtigm','BtOGmJq','lc4WocK','zwz0ic4','DhLqy3q','zdSGyMe','y1LvA3K','oIbUB24','ztSGD2K','AwvZlG','DgvJDgK','CZOGy2u','zwfSDgG','mcWWlJy','BM90zs4','z2v0sxq','AwDUlwK','CYbHBgW','zIbTyxq','Aw50zxi','oYbMBgu','yxbWzw4','rvDMC3y','yxKGB24','mhW0FdC','Awy7ih0','Bw4TBwe','Aw1Lihm','y2rby28','DMC+','u2v0r2e','lsbVDMu','swjfAgW','zwLUC3q','igHLAwC','BI1JB2W','B246ig8','BhrOige','ntrXC01ythy','D0jSDxi','DtmY','zgHqD3q','yMzhB2e','DeD2yvC','CxvmwfC','EI1PBMq','DxjDigG','zwLxAwe','mdi1ktS','z0zzAeG','rvHqxq','AxmGAg8','sw5PDgK','B3C6igK','B3zLCMW','thPLvNy','CMrPuKi','ns00idC','Cezxs2i','zvn0EwW','AY1Jyxi','DMfSDwu','A3bWB1O','CMeTA28','zxG7ige','oYbVCge','CNq7igC','BwLZyW','qNvUBNK','ihbSywm','sxnhCM8','DxjZB3i','qNLKzhK','Bw4TAa','yNPcqNK','lcbZyw4','EdSGz2e','mJu1lde','AxrLiee','ChbLBNm','oYbJB2W','AMLzB2C','z3jHzgK','ys5RB3u','mJu1lc4','rK5ny1y','Aw5NoIa','DhK6ic4','CZOGyxu','lxDPzhq','ysblB3u','l1jnqIa','ideWChG','Awr0AdO','BM8Gy2G','s21Nwxq','AKHsDgO','DxqGDgG','uKfrDKC','Bg9JAW','BNrLEhq','C3rYAw4','AwWGC3a','z3jPzdS','wurLqLG','tKDus3m','zw50CZO','B1jLy28','EYbIywm','CgvHDcG','B3vUDc4','BefXyu4','vujLr00','jsK7ic0','C2HhyNy','AuvLsuC','DNPvz04','yxjPys0','sw5ZDge','C2f2zq','lsbHihm','Bcb7igq','Dg9WoJe','nNb4idK','Dg5LC3m','BhKGkhi','ig1PBM0','C3rVCfa','sw5MAw4','CIbHzhy','ignHBgm','zw50','Aw9UoMy','DgfIihS','idqTnc4','Bgf0zwq','BM9tChi','q3vgBfG','oYbTAw4','oIaWide','ENbes3y','Aw5WDxq','zg9JDw0','nNb4oYa','mcuUifm','D2vIA2K','AwrHDgu','Bg9NBY0','zxPPzxi','rLjeExi','A3nty2e','uMvMAwW','vMLZDwe','ALLesKq','D2LKDgG','id0GzMW','D2L0Ag8','B29Rihi','oIb0CMe','BMvS','zgvYlxq','BKTRtfO','C2HPzNq','B290zxi','ywnRz3i','rxbTAgm','B3rOAw4','CMvMAxG','vxzQveu','C2vYDMu','zvrHA2u','ihSGCge','jsbUBY0','ig9Wywm','ywn0Axy','AY1IDg4','B25SEsW','CMvSB2e','DgLVBJO','igrLzMe','zsb7igy','mcaWida','icnMzMy','CMvSEsa','yw5LBc4','tKCG4Ocuia','mdb2DZS','uxPwu1K','BMX5kq','y3jVBgW','lxnJCM8','Aw5JBhu','sgvHBhq','ihbHzgq','nsaWlti','ChG7igi','yMP4BLm','zhrOoIa','mcWWlJC','vvjbx0S','Dg87ih0','zgL1CZO','zsWGDhi','ndiWmtaYrKnYDxnT','pc9ZBwe','zsbZzxi','C3rLBMu','nxm0idi','yxnLBgK','sgvjq2K','Dw5PDhK','yMHVCa','BgW+','C3bHBG','yM91BMq','zsbBrvG','nxW0Fdi','AenKq0C','Bw4TC3u','u3HStei','yxb0Dxi','mNb4oYa','BevOCwm','v01ligK','CMrLCI0','C2STy28','zMuGBw8','Dfn0z2G','DuPzEMG','Bw91C2u','zwXK','C3bSyxK','odiPoYa','zgLZCgW','zMLSBa','Aw5Mqw0','Ec1KAxi','BMuUqxa','CZOGoha','zsbJEd0','lMrSBa','zKDRCNe','ihSGzgK','uMfQtLy','A2v5zg8','zw50oYa','iezPCMu','EgPkAg0','lwHVCa','tvzIAeC','C2STC2W','wxHjv0S','zw0TDwK','mNW3Fde','FdeWFdi','oIaYmNa','mtiGmJe','FdeYFde','DgLKzvC','Axb0kq','rujgB3i','ldi1nsW','mtjWEdS','icaGlM0','zvzHBhu','B3i6iha','CM9Wlwy','A3ndChm','zuv4Ca','idrWEdS','w3nHA3u','u3rHDhu','DgL0Bgu','C2fMzu0','B3nLihm','DgGUsw4','ru1ACwC','BNqTC2K','lxK6ige','yxnZAwC','vgHLC2u','z2DSzwq','EgvZige','u0fgrq','CMfUz2u','kYbmtui','khjLBg8','mtSGBwK','oIa4ChG','B3uU','ywqGDg8','EvjPEfC','z3v5Bgm','zwf0CYa','B3jKzxi','B2TLpsi','zMXLEc0','oYbOzwK','DdOXmda','mdCSmtu','yuTVDxi','AguGDxm','igLZigm','qxbRsuW','Bg9Hzc4','B3rZlG','CMLNAhq','tgLZDa','zMXMBw8','DMzzBhO','CY1Zzxi','CM9WywC','zMXLEdO','zhjVCc0','icaGzgK','veDSzfm','yw5JztO','wxPNwNi','CMfKAxu','nJiXmdK5mhbyuKTVsG','zgLUzZO','igHVB2S','C0HjrgG','DgHYB3C','ohG5mc0','A3nqB3m','wKTlsKW','ihSGzMW','yLjQsfG','ywiUywm','BdOGBM8','zenOAwW','ic8GDMe','Bw4TCge','BLv5Ewm','zxzLBNq','CNPMEeK','B25PBNa','odaSmtK','C2vSzwe','oIbKCM8','y2TNCM8','lxrVCca','ChGGDwK','zwHRDfu','BNrLCJS','D2fPDgK','Ec1ZAge','C2fMzq','AgfPCG','ChjLDMu','C2v0ida','yxa6idG','y2vSzxi','DMvYBge','tg1MENO','zg93BG','icaUBw4','uK1c','lw5VDgu','Axr5oIa','yw5Uywi','B2r5','mcWWlJu','nJaWia','svntAeq','vvDnsYa','r0PsyMu','C2STCMe','DgvZDa','zg55t0q','rNjHBwu','iefmtca','yMrVzuq','C2HVD24','BNnSyxq','mdSGy3u','idi0iJ4','Bwf4','C3rYB2S','lcbPBNm','yNrUoMG','ltjWEdS','igjHBIa','ANjoC20','ywrKrxy','mtfWEca','BhrLCJO','DdOGnJa','igjHBM4','sxjYzMS','ic5TBI0','lZ48l3m','qM90Dg8','AxvZoIa','mJqWiey','ig1VBwu','rNjKqNO','DNCGlsa','lwnHCMq','ywrKAw4','rgvmzMi','BM93','u0flvvi','uw1oEgS','mNm7Cg8','zw5HyMW','AxrSzsa','BKv5sK8','lKXVy2e','C2STzMK','mJu1ldi','r3jHDMK','B3vUzca','B3jZige','rwfJAca','Fdj8nxW','ChL2uuG','v3LywK8','Efrpufq','i2zMnMi','r2zwD1u','BgLNBG','AwXLzdO','ndiSlJG','A29TvNy','s0PYt2u','B3nWywm','z2fTzuW','BMnL','oIaWoYa','zMyP','yu5Htw0','DdOGmJG','DxmGywm','uwHXzxC','DhjHBxa','B2vZig4','verLyxe','zMLSBd0','yxvSDca','DLvHBxa','zxi6oI0','DgLKzs4','yM9Yzgu','zernufq','sxzYB0K','zs5bCha','EMu6ide','ihWGz2e','ufbYA04','oIbJB2W','lc43nsK','vvDnsW','BgLUzvC','zwfKB3u','BMv2zxi','zvKOmtG','tM8GuMu','igfSAwC','CM9Rzxm','CKHUC1K','CNrPzgu','BgfZDeu','DuDyrg8','B250lxC','iezquW','AtmY','mcbOB28','u3bHy2u','ldiZocW','AeLKsey','A291CI0','DM9AwgC','Bg9Hzgu','BY1ZDMC','u2Xoy2C','u0fgrsa','DMLLD0i','igzVBNq','AYbVBI4','AgvPz2G','Ag9VA04','zxjZy3i','BgvUz3q','CNjVCG','wMz4Eg4','BMq6ihi','wNPSwve','lxnHBNm','zxH0','sgLKzxm','mdSGBwK','nsWYntu','r3Ptyw4','rM9Yy2u','r0fxwu4','u2vNB2u','BI13Awq','C2f0Dxi','B3G9iJa','AxHLzdS','CJSGzM8','mJqSmtC','y2TLzd0','vxjdBKO','y2fSBhm','Bgf5oIa','C2fRDxi','AgfZ','ChG7igG','yxj0lG','s2jIv20','z2v0q28','BMDL','B1vPD1i','rgDyruG','zwfKEs4','Ag9VA0m','Dw5RBM8','yw5ZzM8','D2rLzxy','nsKSida','oIbJDxi','ig5VBMu','uKTtD1u','icaGlNm','Bw4TDgK','mJvWEdS','t0Xntxm','A2uTBgK','yJPOB3y','BhmGysa','BNq6igm','yxPmqvK','zM9YBtO','s3n6tgi','u3LRyMu','ihjNyMe','q1btihi','y29PBa','oYbIywm','Dg87zMK','mIaXmK0','CMDIysG','DxjDifu','zxjZihq','nsK7ih0','oJa7EI0','C2v0uhi','wMfYtLC','CMvJDa','ihSGy28','nYWWlJG','DhjVA2u','EMjHvLe','zhbY','zwvKz0m','y2LYy2W','u2nHBgu','igzVDxi','yY0XlJu','DNLLrvi','DMvTzw4','u2DTugu','ywX0Ac4','FqOGica','ida7igm','lc4YnsK','EwnnCNO','yNv0Dg8','idaGmca','zMLSBcW','CNr1Cca','uMvZzxq','ndC2mJmXqLvztxDi','DhjPA2u','CKDNz2K','Bxm6igm','s2jUC0C','BwvKicG','Ag9Szsa','Acb7iha','CI52mq','DgvYo3C','DxjDig0','igfWCgW','AgvHzgu','Dgv4Dem','yxa6ihi','C2PdvgK','igTVDxi','veXAvee','B2LSicG','yMfJA2q','yxv0BY0','B3vUDgu','kc4YmIW','nsWUmdC','uKHptwq','CJOGCg8','ywXSig8','psiJzMy','BM9UztS'];_0x39db=function(){return _0x5bcf27;};return _0x39db();}(function(_0x4dc72f,_0x377b8b){var _0x1f48df=_0x3f97,_0x48a82a=_0x4dc72f();while(!![]){try{var _0x56d708=-parseInt(_0x1f48df(0x5df))/(-0x1a22+-0x9e5+0x2408)+parseInt(_0x1f48df(0x36d))/(-0xfcb*-0x1+-0xf05+-0xc4)*(-parseInt(_0x1f48df(0x18c))/(-0x19c+-0x17b+0x31a))+parseInt(_0x1f48df(0x331))/(0x5*-0xbf+-0x20b5*0x1+0x91d*0x4)*(parseInt(_0x1f48df(0x172))/(0x1485+0x26ef+0x55*-0xb3))+parseInt(_0x1f48df(0x46b))/(-0x1*-0x2667+-0x2072+-0x5ef)+parseInt(_0x1f48df(0x379))/(-0x1*0xdef+0x1498*0x1+-0x6a2)+parseInt(_0x1f48df(0x159))/(0x1*-0x5bc+0x2b*0x4f+-0x781)*(-parseInt(_0x1f48df(0x3c6))/(-0x1194+0xce1+-0x194*-0x3))+parseInt(_0x1f48df(0x4df))/(0x2*-0x886+0xfe2+0x134);if(_0x56d708===_0x377b8b)break;else _0x48a82a['push'](_0x48a82a['shift']());}catch(_0xae6f5f){_0x48a82a['push'](_0x48a82a['shift']());}}}(_0x39db,-0xc4d41*0x1+-0x143b*0xb5+0x24033a),((()=>{'use strict';var _0x7ec5cf=_0x3f97,_0x3e92ea={'UiPgH':'unkno'+'wn','yaAdW':function(_0x478184,_0x5f32dd){return _0x478184+_0x5f32dd;},'PzLsT':'\x20@\x20','NBimP':function(_0x477da7,_0x4c214e){return _0x477da7(_0x4c214e);},'JRiHM':function(_0x311c70,_0x28ead6){return _0x311c70-_0x28ead6;},'lZySr':'xCQgm','Sykbe':function(_0x1a9dcd,_0x56d3b6,_0x34c4a9){return _0x1a9dcd(_0x56d3b6,_0x34c4a9);},'zgXKi':'Criqd','rfYho':function(_0x3d1b25,_0x49fd9e){return _0x3d1b25===_0x49fd9e;},'HeICi':'RmmjL','EAGmb':_0x7ec5cf(0x3c8),'ivElL':function(_0x2be0ce,_0x1b6301,_0x31af15,_0x247cda){return _0x2be0ce(_0x1b6301,_0x31af15,_0x247cda);},'sjCTi':function(_0x1116cd,_0x45f108){return _0x1116cd===_0x45f108;},'TRwGR':'SlNcg','HXwWY':'4|2|0'+_0x7ec5cf(0x659),'StiQz':function(_0x6eebe2,_0x46b8ff){return _0x6eebe2!==_0x46b8ff;},'XPVTG':'1|4|2'+'|0|3','ppyPk':function(_0x13e8ba,_0x47a871){return _0x13e8ba===_0x47a871;},'Iglyr':'shoot'+'ers','EusRq':_0x7ec5cf(0x478)+_0x7ec5cf(0x2d5)+'0','ebjXu':_0x7ec5cf(0x5a0),'MOLjH':function(_0x3e2919,_0x9130f1,_0x1ac9b3,_0x39fa3e,_0x15e689){return _0x3e2919(_0x9130f1,_0x1ac9b3,_0x39fa3e,_0x15e689);},'pBKWi':'butto'+'n','UhUYA':function(_0x105362){return _0x105362();},'IknAK':_0x7ec5cf(0x25e),'reYWP':function(_0x209b60,_0x4b676b){return _0x209b60/_0x4b676b;},'UjvlC':function(_0x5dc345,_0x45164f){return _0x5dc345(_0x45164f);},'ckcDV':function(_0x281c25,_0x2e95dc){return _0x281c25<_0x2e95dc;},'rzfxI':'4|3|0'+_0x7ec5cf(0x201)+'2','BNeJA':_0x7ec5cf(0x2a9),'NVRsQ':function(_0x270c34,_0x347101,_0x2f2499,_0x22ce46,_0x1b1594){return _0x270c34(_0x347101,_0x2f2499,_0x22ce46,_0x1b1594);},'vfYlz':function(_0x2432f1,_0x33201b,_0x36b65b,_0x46a731,_0x427b12){return _0x2432f1(_0x33201b,_0x36b65b,_0x46a731,_0x427b12);},'pApMq':_0x7ec5cf(0x269),'ptooE':function(_0x116f43,_0x4418d9,_0x299cfd){return _0x116f43(_0x4418d9,_0x299cfd);},'eFPrh':'i32','komVv':function(_0xb2d55,_0x3e13a6){return _0xb2d55!==_0x3e13a6;},'Lmfzz':_0x7ec5cf(0x515),'ehktU':function(_0x13716d,_0x234d8b){return _0x13716d*_0x234d8b;},'iMyJf':_0x7ec5cf(0x5c0)+_0x7ec5cf(0x1ec)+'16,0.'+'7)','MVbhG':'middl'+'e','bRjHX':function(_0x2f7612,_0x5d2695){return _0x2f7612/_0x5d2695;},'auTfF':function(_0x1ec8c0,_0x28daaf){return _0x1ec8c0-_0x28daaf;},'wdeev':function(_0x29af88,_0x2e0f3b){return _0x29af88===_0x2e0f3b;},'ZKKJL':_0x7ec5cf(0x1bd),'CqSdY':_0x7ec5cf(0x484),'nEyJO':_0x7ec5cf(0x485),'yXeRt':function(_0x33dac7,_0x2f00e8){return _0x33dac7+_0x2f00e8;},'DrEzx':function(_0x7ef00b,_0x3a3c67){return _0x7ef00b+_0x3a3c67;},'Tboew':function(_0x4ba8af,_0x1fa13f){return _0x4ba8af/_0x1fa13f;},'Loqbr':_0x7ec5cf(0x544)+'9d','rLejQ':function(_0x868ef8,_0x7177ec){return _0x868ef8+_0x7177ec;},'TvarR':function(_0x4cd2df,_0x8995bb){return _0x4cd2df-_0x8995bb;},'GQuwG':function(_0x360583,_0x444370){return _0x360583-_0x444370;},'wTFPW':function(_0x23d80f,_0x570fde){return _0x23d80f+_0x570fde;},'CvhJA':function(_0x41ddb6,_0xcb7096){return _0x41ddb6+_0xcb7096;},'LCjds':function(_0x407124,_0x29721a){return _0x407124*_0x29721a;},'flfmo':_0x7ec5cf(0x272),'qcRyF':_0x7ec5cf(0x264)+'|2|1|'+'6|5','XYXuI':function(_0x3c0b83,_0x3c1ede){return _0x3c0b83>_0x3c1ede;},'xfmRE':function(_0x5dd93a,_0x5e5703){return _0x5dd93a-_0x5e5703;},'IvroI':function(_0x46b254,_0x37f57f){return _0x46b254===_0x37f57f;},'azLAY':'DOMCo'+_0x7ec5cf(0x237)+'Loade'+'d','VBDIA':_0x7ec5cf(0x2e9),'guylc':function(_0x5d0c43,_0x3ee40b,_0x4eab69){return _0x5d0c43(_0x3ee40b,_0x4eab69);},'Wuojv':_0x7ec5cf(0x5c0)+_0x7ec5cf(0x3ed)+'80,19'+_0x7ec5cf(0x3ad)+')','emDuC':_0x7ec5cf(0x2a1),'rzMDU':_0x7ec5cf(0x59c)+'a.kou'+'r.ui.'+'v1','yRixW':_0x7ec5cf(0x30e)+_0x7ec5cf(0x66d),'GAWYN':_0x7ec5cf(0x415)+_0x7ec5cf(0x69f)+'ed','unLXm':'--p','ZarNW':function(_0x2dce83){return _0x2dce83();},'rtHTz':_0x7ec5cf(0x63b),'OcBim':_0x7ec5cf(0x510)+'nge','qlVuv':_0x7ec5cf(0x49a)+_0x7ec5cf(0x687),'wUGyb':_0x7ec5cf(0x67d)+_0x7ec5cf(0x1c7),'CgNKQ':_0x7ec5cf(0x608)+'nt','GUhqr':function(_0x5087cc,_0xe61031){return _0x5087cc+_0xe61031;},'ePxBO':_0x7ec5cf(0x606)+'rd-he'+'ad','ZzlYQ':'sk-ca'+'rd-ti'+_0x7ec5cf(0x254),'voZXg':_0x7ec5cf(0x413),'rHFZU':_0x7ec5cf(0x2fc)+'esc','GtzIk':_0x7ec5cf(0x2ee)+_0x7ec5cf(0x50a),'HDPrc':function(_0x2b8461,_0xa4f52e){return _0x2b8461===_0xa4f52e;},'UPGnJ':function(_0x334dcb,_0x22904a){return _0x334dcb(_0x22904a);},'FyOnB':'fulls'+'creen'+_0x7ec5cf(0x278)+'s','PqbWP':_0x7ec5cf(0x2a5),'zvKYj':function(_0x4bbaaf,_0x52fb9e){return _0x4bbaaf!==_0x52fb9e;},'UXYXq':_0x7ec5cf(0x182)+'S','CCzYC':_0x7ec5cf(0x414),'wyLhm':function(_0x3e94b6,_0x438252){return _0x3e94b6===_0x438252;},'VCaVn':function(_0x49bf0d,_0x525d7e){return _0x49bf0d/_0x525d7e;},'eaFHg':function(_0x266e2c,_0x41e18f){return _0x266e2c===_0x41e18f;},'sNhoY':function(_0x57ff65,_0x5cc95f){return _0x57ff65+_0x5cc95f;},'TsJsY':'mouse'+'1','EAGbk':_0x7ec5cf(0x493),'BodSi':function(_0x4e1da6,_0xca7fde){return _0x4e1da6-_0xca7fde;},'QWzPP':function(_0x3cb5af,_0x4d9803){return _0x3cb5af+_0x4d9803;},'LzeVv':'0\x20hoo'+'ks\x20ar'+_0x7ec5cf(0x5e4)+_0x7ec5cf(0x5f9)+_0x7ec5cf(0x54f),'AAOXR':'\x20|\x20sh'+_0x7ec5cf(0x443)+'\x20','KhiOW':_0x7ec5cf(0x1a7)+_0x7ec5cf(0x1a8),'YxIWK':_0x7ec5cf(0x2df),'UIThq':_0x7ec5cf(0x148)+'bly-C'+_0x7ec5cf(0x2db)+'.dll','kyPbp':function(_0x20bf37,_0x4601e6,_0x46b1f7,_0x467861,_0x3a5d0c,_0x4f4d17,_0x36e228,_0x1bd4fa){return _0x20bf37(_0x4601e6,_0x46b1f7,_0x467861,_0x3a5d0c,_0x4f4d17,_0x36e228,_0x1bd4fa);},'KszLb':'noRec'+'oil','uiiFt':function(_0x1578dd,_0xd4bf8d,_0x5e0626,_0x3b0eac,_0x8dde40,_0x26392c,_0x37d143,_0x2445ce){return _0x1578dd(_0xd4bf8d,_0x5e0626,_0x3b0eac,_0x8dde40,_0x26392c,_0x37d143,_0x2445ce);},'rTPTO':'true','zkOvE':_0x7ec5cf(0x53a)+_0x7ec5cf(0x486),'efAuh':_0x7ec5cf(0x6cb),'YzgZr':'ikzZU','mLvHU':function(_0x71bd20,_0x145b04){return _0x71bd20(_0x145b04);},'RPYZe':function(_0x533b62,_0x1d3761){return _0x533b62<_0x1d3761;},'dDMPT':_0x7ec5cf(0x2b7),'gcqmT':_0x7ec5cf(0x4e1)+'s','seNYo':'\x20|\x20mo'+'vemen'+'t\x20','ULXcY':'EAdyv','VnNts':function(_0x28fe0a,_0xa0bc04,_0x591cf1,_0x3fe417,_0x4eed60,_0x165654){return _0x28fe0a(_0xa0bc04,_0x591cf1,_0x3fe417,_0x4eed60,_0x165654);},'jQuuI':_0x7ec5cf(0x4f7)+'-sans'+_0x7ec5cf(0x34c)+_0x7ec5cf(0x67b)+_0x7ec5cf(0x203)+'i,san'+_0x7ec5cf(0x4d6)+'if','BlxcO':_0x7ec5cf(0x483),'IScqm':_0x7ec5cf(0x439),'LKaUm':function(_0x3edffb,_0x1f03c4,_0x4cc2c0,_0x5c7367,_0x3c66a6){return _0x3edffb(_0x1f03c4,_0x4cc2c0,_0x5c7367,_0x3c66a6);},'xPYAT':'\x20err','rxUfz':_0x7ec5cf(0x4ae)+'ra-ko'+_0x7ec5cf(0x3ce)+_0x7ec5cf(0x43d)+'eg\x20fa'+_0x7ec5cf(0x547),'kwShW':function(_0x4e1eb9){return _0x4e1eb9();},'KLxGJ':'Damag'+_0x7ec5cf(0x477)+'P]','bzBBy':_0x7ec5cf(0x420)+_0x7ec5cf(0x3ee)+_0x7ec5cf(0x33f)+_0x7ec5cf(0x3d2),'wkjoZ':function(_0x1e6401,_0x447a62,_0x53288f,_0x55b246,_0x2b664e,_0x2ec1fe){return _0x1e6401(_0x447a62,_0x53288f,_0x55b246,_0x2b664e,_0x2ec1fe);},'XGSeU':'No\x20en'+_0x7ec5cf(0x171)+_0x7ec5cf(0x5f4)+'r:\x20th'+'is\x20bu'+_0x7ec5cf(0x1d3)+'as\x20no'+'\x20GetV'+'isibl'+'ePlay'+_0x7ec5cf(0x5c2)+_0x7ec5cf(0x644)+'gybac'+_0x7ec5cf(0x580),'rjigC':_0x7ec5cf(0x1f8)+'Mode\x20'+'(over'+_0x7ec5cf(0x699)+_0x7ec5cf(0x45c),'jodDB':_0x7ec5cf(0x310)+_0x7ec5cf(0x183)+'\x20relo'+'ad.','yEFdi':_0x7ec5cf(0x27e)+_0x7ec5cf(0x2ac)+'ealth'+_0x7ec5cf(0x539)+'lDie)','uRetJ':'captu'+'re\x20(S'+'etGam'+_0x7ec5cf(0x2cd)+_0x7ec5cf(0x6b6)+'\x20IsGr'+'ounde'+'d)','CVkvQ':_0x7ec5cf(0x4b8)+'\x20leav'+_0x7ec5cf(0x46d)+_0x7ec5cf(0x12f)+'isibl'+'e\x20tra'+_0x7ec5cf(0x640),'SxlLB':'<svg\x20'+_0x7ec5cf(0x57e)+_0x7ec5cf(0x594)+_0x7ec5cf(0x369)+'\x2024\x22>'+_0x7ec5cf(0x1b3)+'\x20d=\x22M'+_0x7ec5cf(0x68d)+_0x7ec5cf(0x5bf)+'18\x206\x20'+_0x7ec5cf(0x652)+'/></s'+'vg>','IgRzu':_0x7ec5cf(0x24c)+'s','EwaQg':_0x7ec5cf(0x59c)+_0x7ec5cf(0x230),'gyDsG':'Comba'+'t','xUszY':_0x7ec5cf(0x438)+'l','tGvaW':'Misc','mHici':_0x7ec5cf(0x249)+_0x7ec5cf(0x57e)+'ox=\x220'+_0x7ec5cf(0x369)+_0x7ec5cf(0x519)+'<path'+_0x7ec5cf(0x228)+_0x7ec5cf(0x4a0)+_0x7ec5cf(0x5d1)+'-2.5-'+'4-4.5'+_0x7ec5cf(0x239)+_0x7ec5cf(0x462)+_0x7ec5cf(0x62e)+'8-4.5'+_0x7ec5cf(0x426)+'5s4\x202'+_0x7ec5cf(0x236)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x7ec5cf(0x544)+_0x7ec5cf(0x39f)+_0x7ec5cf(0x5ca)+'-widt'+'h=\x222\x22'+_0x7ec5cf(0x1aa)+_0x7ec5cf(0x5b2)+_0x7ec5cf(0x686)+'=\x22rou'+_0x7ec5cf(0x29f)+_0x7ec5cf(0x5ca)+'-line'+'join='+_0x7ec5cf(0x372)+_0x7ec5cf(0x353)+'circl'+'e\x20cx='+_0x7ec5cf(0x23b)+_0x7ec5cf(0x382)+'0\x22\x20r='+_0x7ec5cf(0x65d)+_0x7ec5cf(0x247)+_0x7ec5cf(0x5fa)+_0x7ec5cf(0x6ba)+'/></s'+_0x7ec5cf(0x3bd),'ZGwVR':'[saku'+_0x7ec5cf(0x3df)+_0x7ec5cf(0x5e9)+'enu\x20r'+_0x7ec5cf(0x5a5)+_0x7ec5cf(0x6bb)+':','HydCN':_0x7ec5cf(0x645),'tJNtw':'god','hCdCG':_0x7ec5cf(0x27e)+'e','GzSan':function(_0x3c37ca,_0x3787a6,_0x4a101b,_0x460ed7,_0x4c1bc0,_0x25f233,_0x31a3f1,_0x3b09a5){return _0x3c37ca(_0x3787a6,_0x4a101b,_0x460ed7,_0x4c1bc0,_0x25f233,_0x31a3f1,_0x3b09a5);},'rVFCp':'Tick','FrdBz':_0x7ec5cf(0x1f9)+_0x7ec5cf(0x443),'QFuUK':_0x7ec5cf(0x358)+_0x7ec5cf(0x2c8),'fWRLb':function(_0x1b3e92,_0x505331,_0x29e8a2,_0x46d5a8,_0x8ce94d,_0x25d2d8,_0x3d190e,_0x1b5a8f){return _0x1b3e92(_0x505331,_0x29e8a2,_0x46d5a8,_0x8ce94d,_0x25d2d8,_0x3d190e,_0x1b5a8f);},'Jfgwb':_0x7ec5cf(0x66f)+'ve'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x7ec5cf(0x2de)+'ame']||''))return;if(window[_0x7ec5cf(0x613)+_0x7ec5cf(0x467)+'OUR__'])return;window[_0x7ec5cf(0x613)+_0x7ec5cf(0x467)+_0x7ec5cf(0x1e9)]=!![];var _0x219fb1=_0x3e92ea['Loqbr'],_0x363e09='#ffb3'+'c6',_0x54324a={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x3e92ea[_0x7ec5cf(0x1b8)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x16fe8e={..._0x54324a};try{Object[_0x7ec5cf(0x4b7)+'n'](_0x16fe8e,JSON[_0x7ec5cf(0x196)](localStorage['getIt'+'em'](_0x7ec5cf(0x59c)+_0x7ec5cf(0x3f3)+_0x7ec5cf(0x5e7))||'{}'));}catch(_0x31a558){}function _0x501608(){var _0x24d0a1=_0x7ec5cf;try{localStorage['setIt'+'em']('sakur'+_0x24d0a1(0x3f3)+'r.v1',JSON[_0x24d0a1(0x405)+'gify'](_0x16fe8e));}catch(_0x2356d5){}}var _0x3e250a={'uwmk':!!window['Unity'+'WebMo'+_0x7ec5cf(0x2ef)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x16fe8e['safeM'+_0x7ec5cf(0x60a)],'lastError':''};try{window[_0x7ec5cf(0x521)+_0x7ec5cf(0x16b)+'stene'+'r'](_0x7ec5cf(0x232),_0x5e5ad5=>{var _0x4c558c=_0x7ec5cf;try{var _0x6aedd2=_0x5e5ad5&&(_0x5e5ad5[_0x4c558c(0x233)+'ge']||_0x5e5ad5['error']&&_0x5e5ad5['error']['messa'+'ge'])||_0x3e92ea['UiPgH'];if(_0x5e5ad5&&_0x5e5ad5['filen'+_0x4c558c(0x383)])_0x6aedd2+=_0x3e92ea[_0x4c558c(0x20d)](_0x3e92ea[_0x4c558c(0x13e)]+_0x3e92ea[_0x4c558c(0x291)](String,_0x5e5ad5['filen'+_0x4c558c(0x383)])[_0x4c558c(0x13c)]('/')['pop'](),':')+(_0x5e5ad5['linen'+'o']||'?');_0x3e250a['lastE'+_0x4c558c(0x585)]=_0x3e92ea[_0x4c558c(0x291)](String,_0x6aedd2)[_0x4c558c(0x6dd)](-0x1*0x2222+0x1*-0x1619+0x383b,-0x1120+0x7c2+-0x1*-0x9fe);}catch(_0x564b0d){}});}catch(_0x2fa702){}var _0x1f6baf=null,_0xbfbcbd=null,_0x351a51={},_0x278d0b=[],_0x490a90=[],_0x2e12a3=new Map();function _0x31b3b3(_0x3c296d,_0x83eead){var _0x251ce9=_0x7ec5cf;if(!_0x83eead||_0x3c296d[_0x251ce9(0x45f)+'des'](_0x83eead)||_0x3c296d[_0x251ce9(0x584)+'h']>0x1e0b*-0x1+0x96*0x2d+0xf*0x43)return;_0x3c296d[_0x251ce9(0x350)](_0x83eead);}function _0x168863(_0x391789,_0x31bda4,_0x171030,_0x4b1855){var _0xc5f6d9=_0x7ec5cf;if('xCQgm'===_0x3e92ea[_0xc5f6d9(0x17b)]){var _0x1884f7=0x108d+0xd46+-0x1dd3;try{_0x1884f7=_0x31bda4&&_0x31bda4[_0xc5f6d9(0x330)]?_0x31bda4[_0xc5f6d9(0x330)]():-0x2b3*0x7+-0x88*0x14+0x1d85;}catch(_0x238ec4){}if(!_0x1884f7)return;_0x3e92ea[_0xc5f6d9(0x5b9)](_0x31b3b3,_0x391789,_0x1884f7),_0x171030[_0x4b1855]=_0x391789[_0xc5f6d9(0x584)+'h'];if(_0x4b1855===_0xc5f6d9(0x670)+_0xc5f6d9(0x1ca)&&_0x391789['lengt'+'h']){if(_0xc5f6d9(0x32b)===_0x3e92ea['zgXKi'])_0x59dbb5[_0xc5f6d9(0x536)+'ed']=!!_0x2a48df;else{var _0x39551a=_0x351a51[_0xc5f6d9(0x66f)+'ve'];if(_0x39551a)try{_0x39551a['enabl'+'ed']=![];}catch(_0x3f7b62){}}}}else{var _0x52fd9d=_0x259c1c[_0x170539]||[],_0x399b94=_0x108313[_0xc5f6d9(0x532)]();while(_0x52fd9d[_0xc5f6d9(0x584)+'h']&&_0x3e92ea['JRiHM'](_0x399b94,_0x52fd9d[0x2b3*0x9+0x20*-0x101+-0x1*-0x7d5])>-0x11*-0x242+-0x2519*0x1+0x29f)_0x52fd9d[_0xc5f6d9(0x442)]();return _0x52fd9d[_0xc5f6d9(0x584)+'h'];}}function _0xef9534(_0x5f11c9,_0x3a98fb,_0x23b224){var _0x367e6d=_0x7ec5cf,_0x5566c9=_0x2e12a3[_0x367e6d(0x69d)](_0x5f11c9);!_0x5566c9&&(_0x5566c9=new Map(),_0x2e12a3[_0x367e6d(0x672)](_0x5f11c9,_0x5566c9));if(!_0x5566c9[_0x367e6d(0x59d)](_0x3a98fb))try{var _0x2905af=new _0x1f6baf(_0x5f11c9)[_0x367e6d(0x380)+_0x367e6d(0x630)](_0x3a98fb,_0x23b224);_0x5566c9[_0x367e6d(0x672)](_0x3a98fb,_0x2905af!==undefined?_0x2905af['val']():null);}catch(_0x42e9a8){_0x5566c9[_0x367e6d(0x672)](_0x3a98fb,null);}return _0x5566c9[_0x367e6d(0x69d)](_0x3a98fb);}function _0x4dd790(_0x1545ac,_0x558cb5,_0x1605de,_0x1c4792){var _0x2c891d=_0x7ec5cf;if(_0x3e92ea[_0x2c891d(0x355)](_0x3e92ea[_0x2c891d(0x471)],_0x2c891d(0x336)))try{new _0x1f6baf(_0x1545ac)[_0x2c891d(0x222)+_0x2c891d(0x1d6)](_0x558cb5,_0x1605de,_0x1c4792);}catch(_0x3fbeef){}else return-0x122f*0x1+-0x173c+0x296b;}function _0x3c2eb2(_0x429ba9,_0x24877f){var _0x58e97e=_0x7ec5cf;try{var _0xacff83=new _0x1f6baf(_0x429ba9)[_0x58e97e(0x380)+'ield'](_0x24877f,_0x3e92ea[_0x58e97e(0x6e3)]);return _0xacff83?_0xacff83[_0x58e97e(0x330)]():0x14e3+0x1353+-0x2836*0x1;}catch(_0x14f302){return-0x3*-0x932+-0x8bd+-0x1*0x12d9;}}function _0x5d55da(_0xaebb5f,_0x1bbda7,_0x3ecd2c,_0x30578f){var _0x38ec89=_0x7ec5cf,_0x3a802c=_0x3e92ea[_0x38ec89(0x689)](_0xef9534,_0xaebb5f,_0x1bbda7,_0x3ecd2c);if(_0x3a802c!=null)_0x4dd790(_0xaebb5f,_0x1bbda7,_0x3ecd2c,_0x3a802c*_0x30578f);}function _0x44b9cb(_0x42f0b0,_0x4402f0,_0x1e2737,_0x1359ed,_0x46479f,_0x41ae80,_0x63d60e){var _0x548eba=_0x7ec5cf;if(_0x3e92ea['sjCTi'](_0x3e92ea[_0x548eba(0x36a)],_0x548eba(0x57c)))try{var _0x5ed6fa=_0x3e92ea['HXwWY'][_0x548eba(0x13c)]('|'),_0x2a2a3f=-0x2444*-0x1+0x3*0x15b+-0x2855;while(!![]){switch(_0x5ed6fa[_0x2a2a3f++]){case'0':_0x351a51[_0x42f0b0]=_0x3bb0e2;continue;case'1':return _0x3bb0e2;case'2':_0x3bb0e2[_0x548eba(0x536)+'ed']=_0x3e92ea['StiQz'](_0x63d60e,![]);continue;case'3':_0x3e250a[_0x548eba(0x327)+_0x548eba(0x362)]++;continue;case'4':var _0x3bb0e2=_0xbfbcbd[_0x548eba(0x346)+'refix']({'typeName':_0x4402f0,'methodName':_0x1e2737,'params':_0x1359ed,'returnType':_0x46479f},_0x41ae80);continue;}break;}}catch(_0x13fa26){return console[_0x548eba(0x260)](_0x548eba(0x4ae)+_0x548eba(0x3df)+_0x548eba(0x3ce)+'ook\x20r'+'eg\x20fa'+_0x548eba(0x547),_0x42f0b0,_0x13fa26&&_0x13fa26['messa'+'ge']),null;}else _0x138034[_0x548eba(0x23d)+'or']=_0x524bdc,_0x2b99f1();}function _0x200491(_0x3f5c48,_0x458b7b,_0x21e444,_0x5ad66e,_0x48a2d7,_0x29acb9,_0x2120a9){var _0x4516b0=_0x7ec5cf;try{var _0x212c2b=_0x3e92ea[_0x4516b0(0x632)]['split']('|'),_0x2315b2=0x26ff+0x3*-0x77b+0x146*-0xd;while(!![]){switch(_0x212c2b[_0x2315b2++]){case'0':_0x3e250a[_0x4516b0(0x327)+'Total']++;continue;case'1':var _0x33fad0=_0xbfbcbd[_0x4516b0(0x346)+_0x4516b0(0x20b)+'x']({'typeName':_0x458b7b,'methodName':_0x21e444,'params':_0x5ad66e,'returnType':_0x48a2d7},_0x29acb9);continue;case'2':_0x351a51[_0x3f5c48]=_0x33fad0;continue;case'3':return _0x33fad0;case'4':_0x33fad0['enabl'+'ed']=_0x2120a9!==![];continue;}break;}}catch(_0x5e4913){if(_0x3e92ea['ppyPk'](_0x4516b0(0x40f),'lAqaN'))return console['warn']('[saku'+_0x4516b0(0x3df)+'ur]\x20h'+_0x4516b0(0x43d)+'eg\x20fa'+'iled:',_0x3f5c48,_0x5e4913&&_0x5e4913[_0x4516b0(0x233)+'ge']),null;else _0x224237=new _0x2f03c2(),_0x1947b3['set'](_0x4ed67a,_0x2d17c2);}}var _0x1901fb=()=>![];try{if(window[_0x7ec5cf(0x65c)+_0x7ec5cf(0x2f4)+_0x7ec5cf(0x2ef)]&&!_0x16fe8e['safeM'+'ode']){if(_0x7ec5cf(0x645)===_0x3e92ea[_0x7ec5cf(0x6e5)]){_0x1f6baf=window['Unity'+'WebMo'+_0x7ec5cf(0x2ef)][_0x7ec5cf(0x1a3)+'Wrapp'+'er'],_0xbfbcbd=window['Unity'+_0x7ec5cf(0x2f4)+_0x7ec5cf(0x2ef)][_0x7ec5cf(0x60c)+'me']['creat'+_0x7ec5cf(0x26d)+'in']({'name':'Sakur'+_0x7ec5cf(0x4cc),'version':_0x7ec5cf(0x2df),'referencedAssemblies':['Assem'+_0x7ec5cf(0x1ee)+_0x7ec5cf(0x2db)+_0x7ec5cf(0x490)]});if(_0x16fe8e[_0x7ec5cf(0x218)+'od'])_0x44b9cb(_0x3e92ea['tJNtw'],'OHeal'+'th',_0x7ec5cf(0x3d4)+_0x7ec5cf(0x306)+_0x7ec5cf(0x616)+_0x7ec5cf(0x6d0),[_0x3e92ea[_0x7ec5cf(0x66c)],_0x3e92ea['eFPrh']],undefined,_0x1901fb,!!_0x16fe8e[_0x7ec5cf(0x294)]);if(_0x16fe8e[_0x7ec5cf(0x218)+_0x7ec5cf(0x235)])_0x44b9cb(_0x3e92ea[_0x7ec5cf(0x479)],'OHeal'+'th','Local'+'Die',[_0x7ec5cf(0x573),_0x3e92ea[_0x7ec5cf(0x66c)],_0x7ec5cf(0x573),_0x3e92ea['eFPrh'],_0x3e92ea[_0x7ec5cf(0x66c)]],undefined,_0x1901fb,!!_0x16fe8e[_0x7ec5cf(0x294)]);if(_0x16fe8e['hookN'+_0x7ec5cf(0x40b)+'il'])_0x3e92ea[_0x7ec5cf(0x58e)](_0x44b9cb,_0x3e92ea[_0x7ec5cf(0x5b8)],'Legio'+_0x7ec5cf(0x623)+_0x7ec5cf(0x248)+_0x7ec5cf(0x1b7)+_0x7ec5cf(0x55b)+'Recoi'+_0x7ec5cf(0x6d2)+'on',_0x3e92ea['rVFCp'],[_0x7ec5cf(0x573)],undefined,_0x1901fb,!!_0x16fe8e[_0x7ec5cf(0x234)+_0x7ec5cf(0x305)]);if(_0x16fe8e['hookC'+_0x7ec5cf(0x47c)+'e'])_0x200491(_0x3e92ea[_0x7ec5cf(0x52d)],_0x3e92ea[_0x7ec5cf(0x22e)],'SetGa'+_0x7ec5cf(0x251)+_0x7ec5cf(0x26a),['i32','i32'],undefined,(_0x47efd6,_0x5cc2df)=>{var _0x550cb5=_0x7ec5cf;_0x3e92ea[_0x550cb5(0x5ee)](_0x550cb5(0x542),_0x550cb5(0x542))?_0x168863(_0x490a90,_0x5cc2df,_0x3e250a,_0x3e92ea['Iglyr']):_0x22854c[_0x550cb5(0x387)+'em'](_0x550cb5(0x59c)+'a.kou'+'r.ui.'+'v1',_0x503b1e['strin'+_0x550cb5(0x288)](_0x31a3cb));},!![]);if(_0x16fe8e[_0x7ec5cf(0x5a6)+_0x7ec5cf(0x47c)+'e'])_0x3e92ea['fWRLb'](_0x200491,_0x3e92ea[_0x7ec5cf(0x39e)],'Legio'+_0x7ec5cf(0x623)+'forms'+'.Over'+_0x7ec5cf(0x55b)+_0x7ec5cf(0x6b2)+'ent','IsGro'+'unded',[_0x3e92ea['eFPrh']],_0x3e92ea[_0x7ec5cf(0x66c)],(_0x3f02e7,_0x48db90)=>{var _0x3a3b6f=_0x7ec5cf;if(_0x3e92ea['ebjXu']===_0x3a3b6f(0x6cd)){var _0x21d3e8=_0x3e92ea['EusRq']['split']('|'),_0x2e0641=0x1*0x26d2+0xa39+0x195*-0x1f;while(!![]){switch(_0x21d3e8[_0x2e0641++]){case'0':_0x28625b[_0x3a3b6f(0x451)+'d']();continue;case'1':_0x1c5b5d[_0x3a3b6f(0x5a6)+'aptur'+'e']=_0xb3086d;continue;case'2':_0x437d24['hookN'+_0x3a3b6f(0x40b)+'il']=_0x46e387;continue;case'3':_0x593bf5();continue;case'4':_0x1bec01[_0x3a3b6f(0x218)+'odDie']=_0x54bcc7;continue;case'5':_0x583112[_0x3a3b6f(0x218)+'od']=_0x2df64a;continue;}break;}}else _0x3e92ea[_0x3a3b6f(0x6d8)](_0x168863,_0x278d0b,_0x48db90,_0x3e250a,_0x3a3b6f(0x670)+_0x3a3b6f(0x1ca));},!![]);}else{var _0x4131ae=_0x181d63[_0x7ec5cf(0x67f)+_0x7ec5cf(0x25b)+_0x7ec5cf(0x423)](_0x3e92ea['pBKWi']);return _0x4131ae['type']='butto'+'n',_0x4131ae[_0x7ec5cf(0x63f)+'Name']=_0x7ec5cf(0x212)+'n',_0x4131ae[_0x7ec5cf(0x5ec)+'onten'+'t']=_0x48b4a8,_0x4131ae[_0x7ec5cf(0x1db)+'ck']=_0x3caa16=>{_0x3caa16['stopP'+'ropag'+'ation'](),_0x6bef2f();},_0x4131ae;}}}catch(_0xfe29b2){console['warn'](_0x7ec5cf(0x4ae)+_0x7ec5cf(0x3df)+_0x7ec5cf(0x5c1)+_0x7ec5cf(0x47f)+_0x7ec5cf(0x1b6)+'ailed'+':',_0xfe29b2&&_0xfe29b2[_0x7ec5cf(0x233)+'ge']);}function _0x439d16(_0x4b8681,_0x225c4e){var _0x1c1df=_0x7ec5cf,_0x5e5fd5={'KbnsG':function(_0x5708b6){return _0x3e92ea['UhUYA'](_0x5708b6);}};if(_0x3e92ea[_0x1c1df(0x1de)](_0x1c1df(0x25e),_0x3e92ea['IknAK'])){var _0x4528e0=_0x351a51[_0x4b8681];if(_0x4528e0)try{_0x4528e0[_0x1c1df(0x536)+'ed']=!!_0x225c4e;}catch(_0x2ce118){}}else _0x35bb8b[_0x1c1df(0x218)+'od']=_0x5b1890,_0x5e5fd5[_0x1c1df(0x5e3)](_0x3c198a);}setInterval(()=>{var _0x2ffdfa=_0x7ec5cf;if(!_0x1f6baf||!window[_0x2ffdfa(0x472)+_0x2ffdfa(0x416)+_0x2ffdfa(0x54d)])return;var _0x13dc6b=(_0x3e92ea[_0x2ffdfa(0x291)](Number,_0x16fe8e['speed'+_0x2ffdfa(0x255)])||-0x1858+-0xb05+0x23c1)/(0x258b+-0x1fed*0x1+-0x53a),_0x16897a=_0x3e92ea[_0x2ffdfa(0x65b)](_0x3e92ea[_0x2ffdfa(0x2a7)](Number,_0x16fe8e['jumpP'+'ct'])||-0x738+-0x1*0x189b+0x2037,0x10ae+-0x1600+0x2db*0x2),_0xc932b0=(Number(_0x16fe8e['gravi'+_0x2ffdfa(0x3a4)])||-0x409+-0x1541*0x1+0x19ae)/(-0x1b96+-0x23e3+-0x1*-0x3fdd),_0x48c66c=Math[_0x2ffdfa(0x51a)](0x1d*0xc1+0xa17+0x1ff3*-0x1,Number(_0x16fe8e[_0x2ffdfa(0x142)+'eValu'+'e'])||0x2*0xd4d+-0x37*0x55+-0x7c1),_0x48bcd5=_0x13dc6b!==-0x1*0xdaf+0xe7*0x9+-0x4b*-0x13||_0x16897a!==0x2*-0xfd7+0x2ea*0x7+0xb49*0x1||_0xc932b0!==-0x23fb+-0x8ac+0x595*0x8||_0x16fe8e['bhop'],_0x3e7fe7=_0x16fe8e[_0x2ffdfa(0x428)+'ead']||_0x16fe8e['damag'+_0x2ffdfa(0x4ac)]||_0x16fe8e[_0x2ffdfa(0x48b)+'moExp']||_0x16fe8e[_0x2ffdfa(0x1d5)+_0x2ffdfa(0x33c)];if(!_0x48bcd5&&!_0x3e7fe7)return;try{for(var _0x308931=-0x1*-0xc85+0xca6+-0x192b;_0x3e92ea[_0x2ffdfa(0x399)](_0x308931,_0x278d0b['lengt'+'h']);_0x308931++){if(_0x2ffdfa(0x28e)==='VgUNi')_0x1f130a[_0x2ffdfa(0x387)+'em']('sakur'+_0x2ffdfa(0x3f3)+_0x2ffdfa(0x5e7),_0x466be4['strin'+_0x2ffdfa(0x288)](_0x2091d1));else{var _0x475ffe=_0x278d0b[_0x308931];if(!_0x475ffe)continue;if(_0x13dc6b!==-0x2037+-0x118f+-0x1*-0x31c7){var _0x388e0a=_0x3e92ea[_0x2ffdfa(0x4f0)]['split']('|'),_0x199361=-0x79*0x46+-0x1*0x1b32+0xa0c*0x6;while(!![]){switch(_0x388e0a[_0x199361++]){case'0':_0x5d55da(_0x475ffe,0x67b*-0x2+-0x135*0x12+0x2e8*0xc,_0x3e92ea[_0x2ffdfa(0x62b)],_0x13dc6b);continue;case'1':_0x3e92ea['NVRsQ'](_0x5d55da,_0x475ffe,-0xa63*-0x1+-0x1c1c+0x11ed*0x1,_0x2ffdfa(0x2a9),_0x13dc6b);continue;case'2':_0x5d55da(_0x475ffe,-0x11fc*-0x1+-0x1bf6+0x35e*0x3,_0x3e92ea[_0x2ffdfa(0x62b)],_0x13dc6b);continue;case'3':_0x3e92ea['MOLjH'](_0x5d55da,_0x475ffe,-0xa*-0x2fb+0xc41*0x2+-0x3624,_0x2ffdfa(0x2a9),_0x13dc6b);continue;case'4':_0x5d55da(_0x475ffe,0x1a77+0x7eb*0x2+-0x2a25,_0x3e92ea[_0x2ffdfa(0x62b)],_0x13dc6b);continue;case'5':_0x3e92ea['MOLjH'](_0x5d55da,_0x475ffe,0x59f*-0x6+-0xa6*-0x1f+0xdbc,_0x3e92ea['BNeJA'],_0x13dc6b);continue;}break;}}if(_0x16897a!==0x1*-0x105b+0x4*-0x584+0x266c)_0x3e92ea[_0x2ffdfa(0x4d5)](_0x5d55da,_0x475ffe,0x3*-0x526+0x3*0x205+0x9b3,_0x3e92ea[_0x2ffdfa(0x62b)],_0x16897a);_0xc932b0!==0x21c7*-0x1+-0x15e6+-0x1bd7*-0x2&&(_0x3e92ea[_0x2ffdfa(0x622)]('SmrPI',_0x3e92ea['pApMq'])?(_0x5d55da(_0x475ffe,-0x1475+0x1*-0x1dc8+-0x1*-0x3285,_0x2ffdfa(0x2a9),_0xc932b0),_0x5d55da(_0x475ffe,0x1c13+0x1e97+-0x3a5e,'f32',_0xc932b0)):(_0x103bd7['gravi'+_0x2ffdfa(0x3a4)]=_0x17d7b8,_0x294bcb()));if(_0x16fe8e[_0x2ffdfa(0x473)])_0x3e92ea[_0x2ffdfa(0x6d8)](_0x4dd790,_0x475ffe,0x9*-0x239+-0x966+-0x1e03*-0x1,_0x2ffdfa(0x2a9),-(-0x12d5+0x1f1+-0x14cb*-0x1));}}}catch(_0x5a4f78){}try{for(var _0x2b2b95=0x7ac+-0x2e7*0x7+0xca5;_0x2b2b95<_0x490a90['lengt'+'h'];_0x2b2b95++){var _0xb6de0a=_0x3e92ea['ptooE'](_0x3c2eb2,_0x490a90[_0x2b2b95],0x191d+-0x3a4*0xa+0xb83);if(!_0xb6de0a)continue;_0x16fe8e['damag'+_0x2ffdfa(0x4ac)]&&(_0x4dd790(_0xb6de0a,-0x4eb*-0x1+-0x15d9+0x113a,_0x3e92ea[_0x2ffdfa(0x66c)],_0x48c66c),_0x4dd790(_0xb6de0a,-0x15f3+-0x1327*-0x1+0x8*0x64,'i32',_0x48c66c));_0x16fe8e['noSpr'+'ead']&&(_0x4dd790(_0xb6de0a,-0xe2*-0x1+-0xd16+0xcbc,_0x3e92ea[_0x2ffdfa(0x62b)],0x1a5*0xd+-0x16ae+-0x25*-0x9),_0x4dd790(_0xb6de0a,0x2*0x84b+-0xe0d*-0x1+0x6d*-0x47,_0x2ffdfa(0x2a9),-0x1848+-0x1eec*0x1+0x3735));if(_0x16fe8e[_0x2ffdfa(0x48b)+_0x2ffdfa(0x1d7)])_0x4dd790(_0xb6de0a,0x627+-0x246a+0x1e9f*0x1,_0x2ffdfa(0x573),0x3*0x2f6+-0x8c6*-0x1+-0x1f7*0x7);_0x16fe8e[_0x2ffdfa(0x1d5)+_0x2ffdfa(0x33c)]&&(_0x3e92ea[_0x2ffdfa(0x549)](_0x3e92ea[_0x2ffdfa(0x503)],'bdoeD')?_0x1a41ff=_0x598c26&&_0x1cb98d[_0x2ffdfa(0x330)]?_0x1c42b1['val']():0x610*0x1+-0x2aa*0x1+-0x366:(_0x5d55da(_0xb6de0a,0x2e*-0x8+0xc39*0x3+-0x2ab*0xd,_0x3e92ea[_0x2ffdfa(0x62b)],-0x6*-0x66f+-0x1086+0x9d*-0x24+0.1),_0x3e92ea['NVRsQ'](_0x4dd790,_0xb6de0a,-0x1015*0x2+0xc2*-0x24+0x3bd2,_0x3e92ea['BNeJA'],0x1df8+-0x19c6+-0x432+0.1)));}}catch(_0x2b0a8f){}},-0x2ea+-0x157f+0x1931),setInterval(()=>{var _0x595dd5=_0x7ec5cf,_0x16e973={'veyqD':function(_0x31009c,_0x7b1c39){var _0x2f76e8=_0x3f97;return _0x3e92ea[_0x2f76e8(0x4f8)](_0x31009c,_0x7b1c39);},'sSWYt':_0x595dd5(0x5c0)+'255,1'+'07,15'+'7,0.8'+'5)','NyAtH':_0x3e92ea['iMyJf'],'tQgaR':_0x3e92ea[_0x595dd5(0x499)],'fGkrq':function(_0x3dd5a3,_0x5c73ed){var _0x54b1cb=_0x595dd5;return _0x3e92ea[_0x54b1cb(0x4e8)](_0x3dd5a3,_0x5c73ed);},'paGaU':function(_0x585b66,_0x2fb81b){var _0x5633a5=_0x595dd5;return _0x3e92ea[_0x5633a5(0x1dc)](_0x585b66,_0x2fb81b);},'lEhqc':function(_0x2611d6,_0x30af81){return _0x2611d6/_0x30af81;},'lOZbN':_0x595dd5(0x5c0)+'255,2'+_0x595dd5(0x37a)+_0x595dd5(0x50b)+'5)','pXiTV':function(_0x32c34d,_0xe72ce){return _0x32c34d/_0xe72ce;}};if(_0x3e92ea[_0x595dd5(0x5a9)](_0x595dd5(0x374),'MQANB')){var _0x16a1b5=_0x557b8b[_0x595dd5(0x67f)+'eElem'+'ent'](_0x595dd5(0x63b));_0x16a1b5['class'+_0x595dd5(0x64a)]=_0x595dd5(0x2ee)+'ody';var _0x5c83bc=_0x1f1173['creat'+'eElem'+'ent'](_0x595dd5(0x63b));_0x5c83bc[_0x595dd5(0x63f)+'Name']='sk-md'+_0x595dd5(0x30b),_0x5c83bc['textC'+'onten'+'t']=_0xa585a4,_0x16a1b5[_0x595dd5(0x3b5)+_0x595dd5(0x4eb)+'d'](_0x5c83bc);for(var _0x448d57 of _0x78b78d)_0x16a1b5[_0x595dd5(0x3b5)+'dChil'+'d'](_0x448d57);_0xa1308b[_0x595dd5(0x3b5)+_0x595dd5(0x4eb)+'d'](_0x16a1b5);}else{_0x3e250a[_0x595dd5(0x54c)+'oaded']=!!window[_0x595dd5(0x472)+_0x595dd5(0x416)+_0x595dd5(0x54d)];try{var _0x46098c=-0x23fc+-0x1b*0x4b+0x2be5;for(var _0x585d04 in _0x351a51){if(_0x3e92ea['wdeev'](_0x3e92ea[_0x595dd5(0x4e6)],_0x3e92ea['CqSdY'])){var _0x14bf02=_0x6a11e3['has'](_0x6405d1);_0x1865c6[_0x595dd5(0x417)](),_0x3dfe90[_0x595dd5(0x192)+_0x595dd5(0x1fc)]();if(_0x4ab341[_0x595dd5(0x147)+_0x595dd5(0x6e1)])_0x20dc1b[_0x595dd5(0x147)+'Rect'](_0x10082a,_0x335e9e,_0x1cc718,_0x312cd6,_0x16e973[_0x595dd5(0x195)](-0x31f+0xa8c+-0x766*0x1,_0xc77cf3));else _0x42fd20[_0x595dd5(0x5c7)](_0x166125,_0x132dba,_0x54219c,_0x57ad7b);_0x5a098e[_0x595dd5(0x2d0)+_0x595dd5(0x6bd)]=_0x14bf02?_0x16e973[_0x595dd5(0x69e)]:_0x16e973['NyAtH'],_0x51c660['fill'](),_0xff49a1['lineW'+_0x595dd5(0x61c)]=0x815+0x2160+-0x2974,_0x2b5460['strok'+_0x595dd5(0x3db)+'e']=_0x14bf02?_0x5a2048:_0x595dd5(0x5c0)+'255,1'+_0x595dd5(0x4cb)+_0x595dd5(0x6df)+'5)',_0x123652[_0x595dd5(0x51b)+'e'](),_0x14bf02&&(_0x187dec[_0x595dd5(0x6fa)+_0x595dd5(0x28a)+'r']=_0x22b9a9,_0x23383c['shado'+_0x595dd5(0x3c7)]=-0x4a2+0x1d64+-0x18b4,_0xc64ea7[_0x595dd5(0x48a)](),_0x25e3f8['shado'+_0x595dd5(0x3c7)]=-0xc85+-0x1d2f+0xa6d*0x4),_0x397c16[_0x595dd5(0x2d0)+'tyle']=_0x14bf02?_0x595dd5(0x318):_0x595dd5(0x5c0)+'255,2'+_0x595dd5(0x37a)+'0,0.8'+')',_0x36fd22[_0x595dd5(0x6c3)+_0x595dd5(0x546)]=_0x595dd5(0x2bd)+'r',_0x10c075['textB'+'aseli'+'ne']=_0x16e973[_0x595dd5(0x675)],_0x5a7bcb['font']=_0x595dd5(0x2f8)+_0xf6e682['round']((-0x21b0+0x96*0x3b+-0xd6)*_0x3b6a21)+('px\x20ui'+_0x595dd5(0x589)+_0x595dd5(0x34c)+'f,sys'+'tem-u'+'i,san'+'s-ser'+'if'),_0x301687[_0x595dd5(0x290)+_0x595dd5(0x58a)](_0x10737a,_0x2b066a+_0x16e973['fGkrq'](_0x4d3c7a,-0x24b9+0x3c0+0x20fb),_0x16e973[_0x595dd5(0x205)](_0x2b3ab8+_0x16e973[_0x595dd5(0x47e)](_0x81cd44,0x1474+0x174a+0x137*-0x24),_0x4f3c54?(-0x2*0x664+-0xfad*0x1+0x1c7a)*_0x2e6856:0x2561+-0x24b1+-0xb0)),_0x482e85&&(_0x31a259['font']='600\x20'+_0x4e05b4['round'](_0x16e973[_0x595dd5(0x195)](0x515*-0x5+-0x19*-0x11f+-0x295*0x1,_0x336c44))+(_0x595dd5(0x4f7)+_0x595dd5(0x589)+'-seri'+_0x595dd5(0x67b)+_0x595dd5(0x203)+'i,san'+_0x595dd5(0x4d6)+'if'),_0x1a5a4d['fillS'+_0x595dd5(0x6bd)]=_0x14bf02?_0x595dd5(0x318):_0x16e973['lOZbN'],_0x7075b5['fillT'+_0x595dd5(0x58a)](_0x3f41ea,_0x7b6c0b+_0x16e973[_0x595dd5(0x370)](_0x5e78c7,-0x12de+-0x48+0x8*0x265),_0x322cf7+_0x16e973[_0x595dd5(0x491)](_0x15f02e,0xcb4*-0x1+-0x1a41+0x26f7)+(0x1*-0x1219+-0xe78+0x2099)*_0xfcdfeb)),_0x278bd4['resto'+'re']();}else{if(_0x351a51[_0x585d04]&&_0x351a51[_0x585d04]['appli'+'ed'])_0x46098c++;}}_0x3e250a[_0x595dd5(0x327)+'Ok']=_0x46098c;}catch(_0x11b96d){}}},-0x1*0x193b+-0x1beb+0x390e);var _0x26f94b=new Set(),_0x2498a6={0x1:[],0x3:[]},_0x2fd286=![];function _0x53df6b(_0x4d20fc){_0x26f94b['add'](_0x4d20fc['code']);}function _0x208576(_0x47e40b){var _0x3598cb=_0x7ec5cf,_0x27742b={'fnVXC':function(_0x396db3){var _0x20c96e=_0x3f97;return _0x3e92ea[_0x20c96e(0x261)](_0x396db3);}};'sSvyk'!==_0x3598cb(0x1ab)?(_0x119ab9[_0x3598cb(0x1df)+_0x3598cb(0x343)]=_0x27cc50,_0x27742b['fnVXC'](_0xab997d)):_0x26f94b['delet'+'e'](_0x47e40b[_0x3598cb(0x1ed)]);}function _0x534fb1(_0x5c295d){var _0x3a8bea=_0x7ec5cf;if(_0x5c295d[_0x3a8bea(0x190)+'ura'])return;_0x26f94b[_0x3a8bea(0x188)](_0x3e92ea['nEyJO']+(_0x5c295d['butto'+'n']+(0xa+0x16de+-0x16e7)));var _0x25b1ab=_0x2498a6[_0x3e92ea[_0x3a8bea(0x6a2)](_0x5c295d[_0x3a8bea(0x5da)+'n'],-0x1165+0x1*0x20a1+-0xf3b)];if(_0x25b1ab){_0x25b1ab[_0x3a8bea(0x350)](performance[_0x3a8bea(0x532)]());if(_0x25b1ab[_0x3a8bea(0x584)+'h']>-0x1bd4+-0x58*-0x29+0xde4)_0x25b1ab[_0x3a8bea(0x442)]();}}function _0x337763(_0x5280c4){var _0x42aa00=_0x7ec5cf;if(!_0x5280c4[_0x42aa00(0x190)+_0x42aa00(0x204)])_0x26f94b[_0x42aa00(0x322)+'e'](_0x3e92ea[_0x42aa00(0x6c0)](_0x3e92ea[_0x42aa00(0x538)],_0x5280c4[_0x42aa00(0x5da)+'n']+(0x2641+-0x36*-0x3+-0x26e2)));}function _0x1e1c99(){var _0x2c965c=_0x7ec5cf;_0x26f94b[_0x2c965c(0x68c)]();}function _0x59c116(){var _0x731bf9=_0x7ec5cf;if(_0x3e92ea[_0x731bf9(0x4d4)]!=='nzUdK'){var _0x673836=_0x3e92ea[_0x731bf9(0x17e)][_0x731bf9(0x13c)]('|'),_0x5e0561=0x1562+0x20b+0x3*-0x7cf;while(!![]){switch(_0x673836[_0x5e0561++]){case'0':window['addEv'+_0x731bf9(0x16b)+'stene'+'r'](_0x731bf9(0x494)+'wn',_0x53df6b,!![]);continue;case'1':window[_0x731bf9(0x521)+_0x731bf9(0x16b)+_0x731bf9(0x46e)+'r']('mouse'+_0x731bf9(0x504),_0x534fb1,!![]);continue;case'2':window[_0x731bf9(0x521)+_0x731bf9(0x16b)+'stene'+'r']('keyup',_0x208576,!![]);continue;case'3':_0x2fd286=!![];continue;case'4':if(_0x2fd286)return;continue;case'5':window[_0x731bf9(0x521)+'entLi'+_0x731bf9(0x46e)+'r']('blur',_0x1e1c99);continue;case'6':window['addEv'+_0x731bf9(0x16b)+_0x731bf9(0x46e)+'r']('mouse'+'up',_0x337763,!![]);continue;}break;}}else{var _0x29154c=_0x2454e3['width']/(0x12a*-0x4+-0x167*0x16+0x2384),_0x5ccc93=_0x3e92ea['Tboew'](_0x503864[_0x731bf9(0x581)+'t'],-0x28+0x6*-0x29f+0xfe4),_0x5353d3=_0x35f897(_0x5afee3[_0x731bf9(0x1d1)+'e'])||-0xe1e+0x13*0x14b+-0x1*0xa72,_0x593221=/^#[0-9a-f]{6}$/i[_0x731bf9(0x511)](_0x5bd961['chCol'+'or'])?_0x1ee1fb[_0x731bf9(0x23d)+'or']:_0x3e92ea['Loqbr'];_0x4d303b[_0x731bf9(0x417)](),_0x380db6[_0x731bf9(0x51b)+_0x731bf9(0x3db)+'e']=_0x593221,_0xa7989[_0x731bf9(0x2d0)+_0x731bf9(0x6bd)]=_0x593221,_0x262adf['lineW'+_0x731bf9(0x61c)]=_0x28fd41[_0x731bf9(0x51a)](0x20cd+-0x91d+-0x17af+0.5,(0x1906+-0x13*0x30+-0x1574)*_0x5353d3),_0x518eea['shado'+_0x731bf9(0x28a)+'r']=_0x593221,_0x4aad47[_0x731bf9(0x6fa)+_0x731bf9(0x3c7)]=0xcd8+-0x669+-0x669;var _0x4ea09a=_0x3e92ea[_0x731bf9(0x4f8)](0x4*-0x327+0x2159+-0x14b7*0x1,_0x5353d3),_0x2d17b5=_0x3e92ea['ehktU'](-0x1*0x67f+0x27c*0x9+-0xfd5,_0x5353d3);_0x4acb1e[_0x731bf9(0x192)+_0x731bf9(0x1fc)](),_0x12e23d[_0x731bf9(0x262)+'o'](_0x29154c-_0x4ea09a-_0x2d17b5,_0x5ccc93),_0x1ecd26[_0x731bf9(0x6b9)+'o'](_0x29154c-_0x4ea09a,_0x5ccc93),_0x18ee89[_0x731bf9(0x262)+'o'](_0x29154c+_0x4ea09a,_0x5ccc93),_0x42a1c3[_0x731bf9(0x6b9)+'o'](_0x3e92ea[_0x731bf9(0x2d8)](_0x29154c+_0x4ea09a,_0x2d17b5),_0x5ccc93),_0x454f82[_0x731bf9(0x262)+'o'](_0x29154c,_0x3e92ea[_0x731bf9(0x677)](_0x3e92ea['GQuwG'](_0x5ccc93,_0x4ea09a),_0x2d17b5)),_0x12b9f8['lineT'+'o'](_0x29154c,_0x5ccc93-_0x4ea09a),_0x258dba[_0x731bf9(0x262)+'o'](_0x29154c,_0x5ccc93+_0x4ea09a),_0xbc64df['lineT'+'o'](_0x29154c,_0x3e92ea[_0x731bf9(0x6ce)](_0x3e92ea['CvhJA'](_0x5ccc93,_0x4ea09a),_0x2d17b5)),_0x569e2e[_0x731bf9(0x51b)+'e'](),_0x15126d[_0x731bf9(0x192)+'Path'](),_0x2ec9f0[_0x731bf9(0x6b1)](_0x29154c,_0x5ccc93,_0x3e92ea[_0x731bf9(0x252)](-0x9e*-0x3a+0xe3*0x29+-0x4826+0.6000000000000001,_0x5353d3),0x24fc+-0xf01+0x14b*-0x11,_0x4e65bc['PI']*(0x19b4+0x1f8e+0x1ca*-0x20)),_0x31dbd1[_0x731bf9(0x48a)](),_0x49d3cb[_0x731bf9(0x1be)+'re']();}}function _0x532c9d(_0x2d060d){var _0x1b8904=_0x7ec5cf,_0x5c3410=_0x2498a6[_0x2d060d]||[],_0x4a1ee5=performance[_0x1b8904(0x532)]();while(_0x5c3410[_0x1b8904(0x584)+'h']&&_0x3e92ea['XYXuI'](_0x3e92ea[_0x1b8904(0x12d)](_0x4a1ee5,_0x5c3410[0x152+-0x1e5b+0x1d09]),-0xc7*0x8+-0x849+0x1269))_0x5c3410[_0x1b8904(0x442)]();return _0x5c3410[_0x1b8904(0x584)+'h'];}function _0x4bd81a(_0x5605c4){var _0x1a2dc4=_0x7ec5cf,_0x1caaf3={'Dajlf':_0x3e92ea['EAGmb']};if(_0x3e92ea[_0x1a2dc4(0x55e)]('ueAUR','ueAUR')){if(document[_0x1a2dc4(0x258)]&&(document['ready'+'State']==='inter'+_0x1a2dc4(0x44e)+'e'||document['ready'+'State']===_0x1a2dc4(0x6a6)+_0x1a2dc4(0x60e)))_0x3e92ea['UhUYA'](_0x5605c4);else document[_0x1a2dc4(0x521)+_0x1a2dc4(0x16b)+'stene'+'r'](_0x3e92ea[_0x1a2dc4(0x5b6)],_0x5605c4,{'once':!![]});}else{var _0x38d3b9=new _0xe752dd(_0x28af2e)['readF'+_0x1a2dc4(0x630)](_0x4dad2c,_0x1caaf3['Dajlf']);return _0x38d3b9?_0x38d3b9[_0x1a2dc4(0x330)]():0x1*-0x2345+0x227d+0x28*0x5;}}_0x3e92ea['mLvHU'](_0x4bd81a,()=>{var _0x3b7b3a=_0x7ec5cf,_0x4b78bb={'RAQvG':function(_0x3fc181){return _0x3e92ea['ZarNW'](_0x3fc181);},'USdmK':function(_0xfef865,_0x24fbcc){var _0x409003=_0x3f97;return _0x3e92ea[_0x409003(0x38e)](_0xfef865,_0x24fbcc);},'DJWnN':_0x3e92ea[_0x3b7b3a(0x16c)],'Zfxxn':'hhGEc','BqHxF':_0x3e92ea['PqbWP'],'Qhqew':function(_0x538bdc,_0x590f03){return _0x3e92ea['zvKYj'](_0x538bdc,_0x590f03);},'zpDKv':_0x3e92ea[_0x3b7b3a(0x1fb)],'bxmib':_0x3e92ea['CCzYC'],'GJRbe':function(_0x59bc0e,_0x456227){return _0x3e92ea['wyLhm'](_0x59bc0e,_0x456227);},'eedgC':function(_0x26f645,_0x25e614){return _0x26f645*_0x25e614;},'xRNWm':'rgba('+_0x3b7b3a(0x3ed)+_0x3b7b3a(0x4cb)+_0x3b7b3a(0x5c9)+'5)','vGtFM':'rgba('+_0x3b7b3a(0x3ed)+_0x3b7b3a(0x4cb)+'7,0.3'+'5)','FRDyr':function(_0x22f11d,_0x432e9b){return _0x22f11d+_0x432e9b;},'IlfFe':'700\x20','hIdHF':function(_0x262f59,_0x592ff7){var _0x84aff4=_0x3b7b3a;return _0x3e92ea[_0x84aff4(0x27b)](_0x262f59,_0x592ff7);},'jllQB':function(_0x32c2c,_0x4b8cf9){return _0x32c2c+_0x4b8cf9;},'gHBgZ':function(_0x338ce4,_0x30bcb7){var _0x1fb1dd=_0x3b7b3a;return _0x3e92ea[_0x1fb1dd(0x6a2)](_0x338ce4,_0x30bcb7);},'vpoaz':function(_0x2a2904,_0x29cea5){return _0x2a2904*_0x29cea5;},'tsuVf':function(_0x13edda,_0xe0e254){return _0x13edda-_0xe0e254;},'DksOh':function(_0x2f1ffe,_0x2745c1){var _0x46f5ad=_0x3b7b3a;return _0x3e92ea[_0x46f5ad(0x653)](_0x2f1ffe,_0x2745c1);},'GXLYY':function(_0x185192,_0x3903e4){return _0x185192-_0x3903e4;},'YYdAb':_0x3b7b3a(0x146),'HVeUd':function(_0x45d772,_0x52a904,_0xff0512,_0x29598a,_0x4eb5d9,_0x5cfc71,_0x32d913){return _0x45d772(_0x52a904,_0xff0512,_0x29598a,_0x4eb5d9,_0x5cfc71,_0x32d913);},'rGggi':_0x3b7b3a(0x18b),'jvNNI':function(_0x5a9368,_0x37b49a){return _0x5a9368+_0x37b49a;},'Xjwmq':function(_0x21e20b,_0x4dae54){return _0x21e20b+_0x4dae54;},'AaGdp':function(_0x374b7d,_0x11fdb1){var _0x2bb91a=_0x3b7b3a;return _0x3e92ea[_0x2bb91a(0x6d4)](_0x374b7d,_0x11fdb1);},'rgxrJ':function(_0x433f0a,_0x4aab27){return _0x433f0a/_0x4aab27;},'PiepZ':function(_0x3ddd29,_0x53ce51){return _0x3e92ea['ehktU'](_0x3ddd29,_0x53ce51);},'Sumdq':_0x3e92ea[_0x3b7b3a(0x6fc)],'xkGKY':function(_0x5c6b72,_0x36f1a0){var _0x37c308=_0x3b7b3a;return _0x3e92ea[_0x37c308(0x2a7)](_0x5c6b72,_0x36f1a0);},'RJdRi':function(_0x4cdf0a,_0x2a271b,_0x12c9f6,_0x1c8233,_0x4b6e06,_0x546593,_0x2fd17b,_0x440295){return _0x4cdf0a(_0x2a271b,_0x12c9f6,_0x1c8233,_0x4b6e06,_0x546593,_0x2fd17b,_0x440295);},'dXuOd':_0x3b7b3a(0x506),'xnqFg':_0x3b7b3a(0x485)+'3','lhccp':function(_0x40cecb,_0x10fed8){return _0x40cecb(_0x10fed8);},'pOeJm':_0x3b7b3a(0x575),'eEPyO':function(_0x564d43,_0x28f71e){return _0x3e92ea['ehktU'](_0x564d43,_0x28f71e);},'QmNxk':_0x3e92ea['EAGbk'],'pVCgP':function(_0x39718d,_0x308b3a){return _0x3e92ea['BodSi'](_0x39718d,_0x308b3a);},'nFHYp':function(_0x37dd17,_0x11b49a){return _0x37dd17*_0x11b49a;},'pJZPD':function(_0x103bae,_0x5b7c68){return _0x3e92ea['wTFPW'](_0x103bae,_0x5b7c68);},'CxApz':function(_0x3d6c22,_0x1384de){var _0x3c3ed1=_0x3b7b3a;return _0x3e92ea[_0x3c3ed1(0x20d)](_0x3d6c22,_0x1384de);},'VYUCq':'Unity'+_0x3b7b3a(0x625)+_0x3b7b3a(0x55f)+'licat'+_0x3b7b3a(0x373),'SzIvM':function(_0x1f3307,_0x1b2509){return _0x3e92ea['QWzPP'](_0x1f3307,_0x1b2509);},'TQGyL':function(_0x3f5e30,_0x5d75c2){return _0x3f5e30+_0x5d75c2;},'vZSjv':function(_0x10f324,_0xb09b8d){return _0x10f324+_0xb09b8d;},'hoVLc':function(_0x2bdd7a,_0x289504){return _0x3e92ea['wTFPW'](_0x2bdd7a,_0x289504);},'Epmhc':_0x3e92ea[_0x3b7b3a(0x3d7)],'EMZqg':_0x3e92ea['AAOXR'],'AmBjM':_0x3e92ea['KhiOW'],'isBVO':_0x3b7b3a(0x52b)+'PS\x20un'+_0x3b7b3a(0x403),'wILNF':function(_0x198270,_0x5171eb){return _0x198270>=_0x5171eb;},'KXIWC':function(_0x5035dc,_0x5ebb35){var _0x12252e=_0x3b7b3a;return _0x3e92ea[_0x12252e(0x6ca)](_0x5035dc,_0x5ebb35);},'kxDnv':function(_0x59e8d3,_0x30c3d5){var _0x59cd62=_0x3b7b3a;return _0x3e92ea[_0x59cd62(0x1f3)](_0x59e8d3,_0x30c3d5);},'NTqew':function(_0x25f9ef,_0x497c15){return _0x25f9ef-_0x497c15;},'nKkLZ':_0x3b7b3a(0x2a4)+_0x3b7b3a(0x4cc),'vDowq':_0x3e92ea[_0x3b7b3a(0x49b)],'IbEhl':_0x3e92ea['UIThq'],'ysMib':function(_0x18bb35,_0xc5b681,_0x1d2fb6,_0x4eac7e,_0x45e52d,_0xc316d1,_0x3e0cf0,_0x4793fd){var _0x249979=_0x3b7b3a;return _0x3e92ea[_0x249979(0x22b)](_0x18bb35,_0xc5b681,_0x1d2fb6,_0x4eac7e,_0x45e52d,_0xc316d1,_0x3e0cf0,_0x4793fd);},'SLhdy':_0x3b7b3a(0x294),'zqUFw':_0x3b7b3a(0x3d4)+'ateTa'+'keHea'+_0x3b7b3a(0x6d0),'DeLfb':function(_0x3b356e,_0x15a503,_0xf45d1b,_0x2d5377,_0x2aabb2,_0x1fc392,_0x381bdc,_0x33833a){return _0x3b356e(_0x15a503,_0xf45d1b,_0x2d5377,_0x2aabb2,_0x1fc392,_0x381bdc,_0x33833a);},'quLXW':'i32','nTOBO':_0x3e92ea['KszLb'],'Hgdpf':function(_0x302763,_0x2835eb,_0x490e39,_0x5e527f,_0x53a13f,_0x583975,_0x42485c,_0x393204){var _0x1888cf=_0x3b7b3a;return _0x3e92ea[_0x1888cf(0x280)](_0x302763,_0x2835eb,_0x490e39,_0x5e527f,_0x53a13f,_0x583975,_0x42485c,_0x393204);},'hSVKf':_0x3b7b3a(0x358)+'ter','EBFor':_0x3b7b3a(0x3be)+_0x3b7b3a(0x251)+'ning','wNluQ':_0x3b7b3a(0x66f)+'ve','WUNSg':_0x3e92ea['rTPTO'],'pFWKb':_0x3e92ea[_0x3b7b3a(0x590)],'fxupe':function(_0x391f26,_0x23b067){return _0x391f26(_0x23b067);},'KynhX':'input','mriRT':'color','YutNV':_0x3e92ea['Loqbr'],'NqGpc':function(_0x11697c){return _0x11697c();},'jrNsm':_0x3e92ea[_0x3b7b3a(0x21d)],'Olmrs':_0x3e92ea[_0x3b7b3a(0x2b6)],'kppoZ':_0x3e92ea[_0x3b7b3a(0x4dd)],'hoLMJ':_0x3b7b3a(0x342),'JyPdo':_0x3b7b3a(0x5da)+'n','qObJb':'div','DgXEH':function(_0xeeccbb,_0x4bbcae){return _0x3e92ea['mLvHU'](_0xeeccbb,_0x4bbcae);},'ZnVQf':function(_0x532759,_0x558359){return _0x3e92ea['RPYZe'](_0x532759,_0x558359);},'zptZv':function(_0x4d0b8d,_0x449dab){return _0x4d0b8d===_0x449dab;},'gFYhH':function(_0x57b2d7,_0x343c91){return _0x57b2d7*_0x343c91;},'niNcw':_0x3b7b3a(0x5d9),'shGbv':_0x3b7b3a(0x2d7)+'arget'+_0x3b7b3a(0x513)+_0x3b7b3a(0x1e4),'RMcde':_0x3e92ea[_0x3b7b3a(0x55d)],'kZJVB':function(_0x16b7e2,_0x455d6c){return _0x16b7e2+_0x455d6c;},'XrWVc':function(_0x364843,_0x2bbabf){return _0x3e92ea['yXeRt'](_0x364843,_0x2bbabf);},'zHhGl':function(_0x2949a6,_0x2fa0f2){return _0x2949a6+_0x2fa0f2;},'ZbQal':_0x3b7b3a(0x50e)+_0x3b7b3a(0x476)+'\x20','EFgvt':_0x3e92ea['gcqmT'],'pRRkl':_0x3e92ea['seNYo'],'GfVwU':_0x3b7b3a(0x1e8),'XUcLX':function(_0x53170f,_0x281740,_0x28806f){return _0x53170f(_0x281740,_0x28806f);},'Ibrty':_0x3e92ea['ULXcY'],'nUyyc':function(_0x33d996){return _0x33d996();},'ndLMQ':function(_0x4d4dab){return _0x4d4dab();},'cjOnT':function(_0x46e296){var _0x303804=_0x3b7b3a;return _0x3e92ea[_0x303804(0x5c6)](_0x46e296);},'hImeA':'aldDX','aqlOX':_0x3b7b3a(0x429),'gmiQH':function(_0x416413){return _0x416413();},'eITaj':function(_0x237871,_0x59517b,_0x50f08a,_0x33868d,_0x8b2eaf,_0xf201d4){var _0x392422=_0x3b7b3a;return _0x3e92ea[_0x392422(0x678)](_0x237871,_0x59517b,_0x50f08a,_0x33868d,_0x8b2eaf,_0xf201d4);},'KmgYt':_0x3b7b3a(0x1f4),'yRqjI':function(_0x2b4f87){return _0x2b4f87();},'JfAWw':_0x3e92ea['jQuuI'],'UvjTE':_0x3e92ea['BlxcO'],'zbaVQ':_0x3e92ea['IScqm'],'aNaMm':function(_0xf29ebf,_0x569e41,_0x4646e6,_0x50ec99,_0x185b2b){var _0x10cabc=_0x3b7b3a;return _0x3e92ea[_0x10cabc(0x2eb)](_0xf29ebf,_0x569e41,_0x4646e6,_0x50ec99,_0x185b2b);},'PmBkQ':_0x3e92ea['xPYAT'],'oUiwR':_0x3e92ea['rxUfz'],'edTxw':function(_0x15ad9c){return _0x3e92ea['kwShW'](_0x15ad9c);},'vyeER':function(_0x9b04c0,_0x42a149,_0x783d34,_0x1f58b6,_0x20f874,_0x1f6fea){var _0x4a051d=_0x3b7b3a;return _0x3e92ea[_0x4a051d(0x678)](_0x9b04c0,_0x42a149,_0x783d34,_0x1f58b6,_0x20f874,_0x1f6fea);},'HSZbp':_0x3b7b3a(0x56a)+_0x3b7b3a(0x5bc),'BEoUD':_0x3b7b3a(0x29e)+'s\x20spr'+'ead\x20a'+_0x3b7b3a(0x1ff)+_0x3b7b3a(0x4ba)+_0x3b7b3a(0x5fe)+_0x3b7b3a(0x14c)+_0x3b7b3a(0x17d)+'\x20weap'+'on\x20ev'+'ery\x202'+'00ms.','YcwAT':function(_0x50a80c,_0x5cdfa5,_0x59d345,_0xd50ec2,_0x59ef07,_0x1b8aea){return _0x50a80c(_0x5cdfa5,_0x59d345,_0xd50ec2,_0x59ef07,_0x1b8aea);},'diPPz':'Rapid'+_0x3b7b3a(0x496)+_0x3b7b3a(0x674)+']','cYUky':'Scale'+_0x3b7b3a(0x2c4)+_0x3b7b3a(0x56e)+'Weapo'+'n.fir'+'eRate'+'\x20to\x201'+_0x3b7b3a(0x430)+_0x3b7b3a(0x284)+_0x3b7b3a(0x1c2)+'still'+'\x20gate'+'\x20shot'+'s.','cwMie':_0x3e92ea[_0x3b7b3a(0x307)],'TDeaq':function(_0x31b94d,_0x3a7b71,_0x24b344,_0xa00685,_0x1396f3,_0x22df6e){return _0x31b94d(_0x3a7b71,_0x24b344,_0xa00685,_0x1396f3,_0x22df6e);},'FcaME':_0x3e92ea[_0x3b7b3a(0x3ea)],'WLRnJ':function(_0x3af76b,_0x3ee22f){return _0x3af76b===_0x3ee22f;},'ujzAR':function(_0x2806ba,_0x2e5c9f,_0x16fe8c,_0x2a6fa2){return _0x3e92ea['ivElL'](_0x2806ba,_0x2e5c9f,_0x16fe8c,_0x2a6fa2);},'VgMrP':_0x3b7b3a(0x1f2)+'%','UrCnJ':function(_0x523d21,_0x10e849,_0x21cfd8,_0x3be063){return _0x523d21(_0x10e849,_0x21cfd8,_0x3be063);},'rQBPX':function(_0x321305,_0x5b04b5,_0x4595b0,_0x1ada15,_0x12fbb7,_0x5bf6e1){return _0x3e92ea['wkjoZ'](_0x321305,_0x5b04b5,_0x4595b0,_0x1ada15,_0x12fbb7,_0x5bf6e1);},'xfGzm':_0x3b7b3a(0x651)+'ion','DGEjn':function(_0x1f4c80,_0x14cc9b,_0x42ed50,_0x2d98da){return _0x1f4c80(_0x14cc9b,_0x42ed50,_0x2d98da);},'TaBcQ':function(_0x15bcc7,_0x7648c9,_0x4a54fc,_0x4b1749,_0x27d3ff,_0x5131b1){return _0x15bcc7(_0x7648c9,_0x4a54fc,_0x4b1749,_0x27d3ff,_0x5131b1);},'gSWNt':_0x3b7b3a(0x2da)+_0x3b7b3a(0x4fd),'eiWia':_0x3b7b3a(0x315)+_0x3b7b3a(0x683)+_0x3b7b3a(0x1da)+_0x3b7b3a(0x610)+'air.','TnHqk':function(_0x41758a,_0x33fdc9,_0x29eda8,_0x30e17d){return _0x41758a(_0x33fdc9,_0x29eda8,_0x30e17d);},'bgjtJ':function(_0x79a286,_0x2bc152,_0x171616,_0x4ed477){return _0x79a286(_0x2bc152,_0x171616,_0x4ed477);},'jaXuy':_0x3e92ea[_0x3b7b3a(0x17a)],'uGXDo':'Hides'+_0x3b7b3a(0x5ef)+_0x3b7b3a(0x614)+'\x20bann'+_0x3b7b3a(0x2b9)+'ots.','GhsHb':_0x3e92ea['rjigC'],'QzVSY':'Hook\x20'+'risk\x20'+'switc'+_0x3b7b3a(0x354),'bOGdZ':_0x3e92ea['jodDB'],'AmIIN':_0x3b7b3a(0x6a3)+_0x3b7b3a(0x5fc)+_0x3b7b3a(0x4b3)+'itiat'+_0x3b7b3a(0x44a)+_0x3b7b3a(0x460)+'h)','TGHHy':_0x3e92ea[_0x3b7b3a(0x152)],'SgmPe':'noRec'+_0x3b7b3a(0x5f1)+'Recoi'+_0x3b7b3a(0x6d2)+_0x3b7b3a(0x2bc)+_0x3b7b3a(0x393),'OUvmF':_0x3e92ea['uRetJ'],'nzakP':function(_0x472ffe,_0x51b789,_0x524b4e){return _0x472ffe(_0x51b789,_0x524b4e);},'lEndG':_0x3b7b3a(0x66a)+_0x3b7b3a(0x38a)+_0x3b7b3a(0x685)+_0x3b7b3a(0x2c2)+'atly\x20'+'raise'+_0x3b7b3a(0x51f)+_0x3b7b3a(0x275)+_0x3b7b3a(0x217)+_0x3b7b3a(0x6f5)+'this\x20'+'on.','UmXqx':_0x3e92ea['CVkvQ'],'NGTKs':'4|5|3'+_0x3b7b3a(0x6e7)+'1','WQxke':function(_0x21ea85){return _0x21ea85();},'qtnvh':_0x3b7b3a(0x267),'gjbPP':'nSbkz','OLMMs':_0x3e92ea[_0x3b7b3a(0x538)],'EWfsv':_0x3b7b3a(0x561)+'me\x20','ISShD':'mn-si'+'de','fuVZk':_0x3b7b3a(0x5eb)+'r','eNpRN':'mn-to'+'p','irqFL':_0x3b7b3a(0x253),'Nknam':_0x3b7b3a(0x47a)+'b','JYvIr':_0x3b7b3a(0x6de)+'ose','RmjSS':_0x3e92ea[_0x3b7b3a(0x47b)]};_0x16fe8e['adblo'+'ck']&&_0x3e92ea[_0x3b7b3a(0x4c4)](setInterval,()=>{var _0x56f356=_0x3b7b3a,_0x4d4e0d={'Byddy':_0x56f356(0x232)};try{if(_0x56f356(0x242)!==_0x56f356(0x497))for(var _0x4bd253 of[_0x56f356(0x578)+_0x56f356(0x29a)+'0x250'+'-pare'+'nt',_0x56f356(0x578)+'io_72'+_0x56f356(0x4e4)+_0x56f356(0x636)+'t','kour-'+'io_30'+'0x600'+'-pare'+'nt',_0x4b78bb['DJWnN']]){var _0x3b7762=document['getEl'+_0x56f356(0x178)+'ById'](_0x4bd253);if(_0x3b7762&&_0x4bd253==='fulls'+_0x56f356(0x637)+_0x56f356(0x278)+'s'){if(_0x4b78bb[_0x56f356(0x586)]==='hhGEc'){var _0x1649a2=_0x3b7762[_0x56f356(0x2fb)+_0x56f356(0x638)];for(var _0x3b92f7=-0x19f5*-0x1+0x92f*0x2+-0x2c53;_0x3b92f7<_0x1649a2[_0x56f356(0x584)+'h'];_0x3b92f7++){if(_0x1649a2[_0x3b92f7]['id']&&_0x1649a2[_0x3b92f7]['id']['index'+'Of'](_0x56f356(0x578)+_0x56f356(0x143))===-0x13*0x137+0x14f3+0x222)_0x1649a2[_0x3b92f7]['style'][_0x56f356(0x489)+'ay']='none';}}else _0x4b78bb[_0x56f356(0x402)](_0x5e6f3f),_0x4b78bb['USdmK'](_0x4cfc61,_0x4b78bb['USdmK'](_0x5cc005,_0x51c2b4[_0x56f356(0x3dd)]));}else{if(_0x3b7762)_0x3b7762[_0x56f356(0x267)]['displ'+'ay']=_0x4b78bb['BqHxF'];}}else{var _0x134f2a={'KvSZc':'\x20@\x20'};_0x320ed8['addEv'+'entLi'+'stene'+'r'](_0x4d4e0d[_0x56f356(0x3e8)],_0x84d239=>{var _0x3cb1fd=_0x56f356;try{var _0x47aa79=_0x84d239&&(_0x84d239['messa'+'ge']||_0x84d239['error']&&_0x84d239[_0x3cb1fd(0x232)]['messa'+'ge'])||_0x3cb1fd(0x5a7)+'wn';if(_0x84d239&&_0x84d239[_0x3cb1fd(0x626)+'ame'])_0x47aa79+=_0x134f2a['KvSZc']+_0x1c0e6f(_0x84d239[_0x3cb1fd(0x626)+'ame'])['split']('/')[_0x3cb1fd(0x673)]()+':'+(_0x84d239[_0x3cb1fd(0x308)+'o']||'?');_0xcf8454[_0x3cb1fd(0x56f)+'rror']=_0x5772b9(_0x47aa79)[_0x3cb1fd(0x6dd)](0x1*0x1e90+0x1673*-0x1+-0x81d,0x5d6+0x2299+-0x27cf);}catch(_0x371744){}});}}catch(_0x2a850a){}},0x25*-0x55+-0x972*-0x2+0x135);var _0x279669=document[_0x3b7b3a(0x67f)+'eElem'+'ent'](_0x3e92ea['IgRzu']);_0x279669[_0x3b7b3a(0x267)][_0x3b7b3a(0x21f)+'xt']=_0x3b7b3a(0x34f)+'ion:f'+_0x3b7b3a(0x595)+_0x3b7b3a(0x180)+_0x3b7b3a(0x397)+'dth:1'+_0x3b7b3a(0x45a)+_0x3b7b3a(0x581)+_0x3b7b3a(0x4ca)+'vh;z-'+'index'+':2147'+_0x3b7b3a(0x6ea)+'6;poi'+_0x3b7b3a(0x28f)+_0x3b7b3a(0x4ef)+_0x3b7b3a(0x20a)+'e';var _0x3411b5=_0x279669[_0x3b7b3a(0x5a1)+_0x3b7b3a(0x404)]('2d');function _0x4ae7da(){var _0x2ffded=_0x3b7b3a;try{var _0x222842=document['fulls'+_0x2ffded(0x637)+_0x2ffded(0x649)+'nt'],_0x144700=_0x222842&&_0x4b78bb[_0x2ffded(0x553)](_0x222842['tagNa'+'me'],_0x4b78bb[_0x2ffded(0x42c)])?_0x222842:document[_0x2ffded(0x258)]||document[_0x2ffded(0x42e)+_0x2ffded(0x607)+'ement'];if(_0x279669['paren'+_0x2ffded(0x210)]!==_0x144700)_0x144700['appen'+_0x2ffded(0x4eb)+'d'](_0x279669);}catch(_0x42ed9a){try{if(_0x4b78bb['bxmib']==='ooBHO'){if(_0x41d685[_0x23e55b]&&_0x49120b[_0x4beb13]['appli'+'ed'])_0x21272a++;}else document[_0x2ffded(0x258)][_0x2ffded(0x3b5)+'dChil'+'d'](_0x279669);}catch(_0x5add2f){}}}var _0x2dcd89={'w':0x0,'h':0x0,'dpr':0x0};function _0x4e5bc3(){var _0x48ffaf=_0x3b7b3a,_0x58fe7e=window[_0x48ffaf(0x61b)+'ePixe'+_0x48ffaf(0x31e)+'o']||0x106c+-0x289+0x2*-0x6f1,_0x2ac6f5=window['inner'+_0x48ffaf(0x6d7)],_0x3aca30=window[_0x48ffaf(0x665)+'Heigh'+'t'];if(_0x4b78bb[_0x48ffaf(0x50f)](_0x2ac6f5,_0x2dcd89['w'])&&_0x4b78bb['GJRbe'](_0x3aca30,_0x2dcd89['h'])&&_0x58fe7e===_0x2dcd89[_0x48ffaf(0x5cc)])return;_0x2dcd89['w']=_0x2ac6f5,_0x2dcd89['h']=_0x3aca30,_0x2dcd89['dpr']=_0x58fe7e,_0x279669[_0x48ffaf(0x43a)]=Math['round'](_0x4b78bb[_0x48ffaf(0x5cd)](_0x2ac6f5,_0x58fe7e)),_0x279669[_0x48ffaf(0x581)+'t']=Math[_0x48ffaf(0x147)](_0x4b78bb['eedgC'](_0x3aca30,_0x58fe7e)),_0x3411b5['setTr'+'ansfo'+'rm'](_0x58fe7e,0x1591*0x1+-0x858+-0xd39*0x1,-0x2*0x72e+0x1b65*-0x1+-0x3*-0xdeb,_0x58fe7e,0x109*0xa+0x247*0x8+-0x1c92,-0x26df+0x1b5f+0xb80);}var _0x410e54=0x1697*-0x1+0x1*-0xac7+0x215e,_0x31e315=performance[_0x3b7b3a(0x532)](),_0x39dce7=0x146a+0x1978+-0x2de2;function _0x143127(_0x2087af){var _0x230820=_0x3b7b3a,_0x5d80f0=_0x4b78bb['USdmK'](Number,_0x16fe8e[_0x230820(0x436)+'le'])||-0x28*-0x57+-0x16d2+0x11*0x8b,_0x56df07=_0x4b78bb[_0x230820(0x5cd)](0xb4a+-0x7b3+0x3b*-0xf,_0x5d80f0),_0x10ee03=(0xeb7+0x1a3*-0x16+-0x154f*-0x1)*_0x5d80f0,_0x1dd6d7=_0x4b78bb[_0x230820(0x5cd)](_0x56df07,-0x1f*-0x6+-0x53*-0x4b+-0x1*0x1908)+_0x4b78bb['vpoaz'](_0x10ee03,-0x4*0x10c+0xaa8*-0x2+-0xa*-0x28d),_0x1e71b6=_0x56df07*(-0x871+0x13b8+-0xb44)+_0x10ee03*(0x1*0x1078+0x5b3*-0x4+0x1*0x656),_0x49686c=_0x16fe8e[_0x230820(0x4e5)],_0x84d885=_0x4b78bb[_0x230820(0x50f)](_0x49686c,'br')?_0x4b78bb['tsuVf'](_0x2087af[_0x230820(0x4d2)]-(0x254b*-0x1+0x14e2+0x1*0x1079),_0x1dd6d7):_0x2087af[_0x230820(0x30d)]+(0x3*0x27b+0x1025+-0xbc3*0x2),_0x3e1103=_0x4b78bb['DksOh'](_0x49686c,'ml')?_0x2087af['top']+_0x4b78bb[_0x230820(0x577)](_0x2087af['heigh'+'t'],0x22a8+0x1*-0xe4d+-0x1459*0x1)-_0x4b78bb['hIdHF'](_0x1e71b6,0x77+-0xd3b*0x1+0xda*0xf):_0x4b78bb[_0x230820(0x282)](_0x2087af[_0x230820(0x311)+'m'],_0x1e71b6)-(_0x49686c==='bl'?-0x5d1+0x1b4a+-0x1eb*0xb:0x1*-0x169b+0xdc9+-0x158*-0x7),_0x2e9ead=(_0x3e5364,_0x337e30,_0x4c5aae,_0x18ab29,_0xf73370,_0x2e373d,_0x389b49)=>{var _0x5043e0=_0x230820,_0x389d05=_0x26f94b[_0x5043e0(0x59d)](_0x337e30);_0x3411b5[_0x5043e0(0x417)](),_0x3411b5[_0x5043e0(0x192)+_0x5043e0(0x1fc)]();if(_0x3411b5[_0x5043e0(0x147)+'Rect'])_0x3411b5['round'+'Rect'](_0x4c5aae,_0x18ab29,_0xf73370,_0x2e373d,(0x1*0xce2+-0x166+-0xb75*0x1)*_0x5d80f0);else _0x3411b5['rect'](_0x4c5aae,_0x18ab29,_0xf73370,_0x2e373d);_0x3411b5[_0x5043e0(0x2d0)+'tyle']=_0x389d05?_0x4b78bb['xRNWm']:_0x5043e0(0x5c0)+_0x5043e0(0x1ec)+'16,0.'+'7)',_0x3411b5['fill'](),_0x3411b5['lineW'+_0x5043e0(0x61c)]=-0x990+-0x3ba+-0xd4b*-0x1,_0x3411b5['strok'+'eStyl'+'e']=_0x389d05?_0x363e09:_0x4b78bb[_0x5043e0(0x216)],_0x3411b5[_0x5043e0(0x51b)+'e'](),_0x389d05&&(_0x3411b5[_0x5043e0(0x6fa)+_0x5043e0(0x28a)+'r']=_0x219fb1,_0x3411b5[_0x5043e0(0x6fa)+'wBlur']=-0x7f*-0x43+0x2*-0x469+-0x185d,_0x3411b5['fill'](),_0x3411b5['shado'+_0x5043e0(0x3c7)]=0x0+-0x10a*-0x15+0x6*-0x3a3),_0x3411b5['fillS'+'tyle']=_0x389d05?_0x5043e0(0x318):_0x5043e0(0x5c0)+_0x5043e0(0x53b)+_0x5043e0(0x37a)+_0x5043e0(0x156)+')',_0x3411b5[_0x5043e0(0x6c3)+'lign']='cente'+'r',_0x3411b5['textB'+_0x5043e0(0x470)+'ne']=_0x5043e0(0x33b)+'e',_0x3411b5['font']=_0x4b78bb[_0x5043e0(0x435)](_0x4b78bb[_0x5043e0(0x435)](_0x4b78bb[_0x5043e0(0x34e)],Math[_0x5043e0(0x147)]((0xc12+0x833*-0x1+-0x3d3)*_0x5d80f0)),_0x5043e0(0x4f7)+_0x5043e0(0x589)+_0x5043e0(0x34c)+'f,sys'+'tem-u'+'i,san'+_0x5043e0(0x4d6)+'if'),_0x3411b5[_0x5043e0(0x290)+_0x5043e0(0x58a)](_0x3e5364,_0x4c5aae+_0x4b78bb[_0x5043e0(0x577)](_0xf73370,0x1e62+-0x5*0x407+0x1*-0xa3d),_0x4b78bb[_0x5043e0(0x35d)](_0x18ab29,_0x2e373d/(0x11*-0x1b1+0x1900+-0x6b*-0x9))-(_0x389b49?_0x4b78bb[_0x5043e0(0x5cd)](0xb7*-0x25+-0x126e+0x2ce6,_0x5d80f0):-0x24fc+0x4d4*0x8+0x54*-0x5)),_0x389b49&&(_0x3411b5[_0x5043e0(0x2e5)]=_0x5043e0(0x50c)+Math[_0x5043e0(0x147)]((0x1c9f+0x1*-0x1a35+-0x261*0x1)*_0x5d80f0)+(_0x5043e0(0x4f7)+_0x5043e0(0x589)+_0x5043e0(0x34c)+'f,sys'+'tem-u'+_0x5043e0(0x35a)+_0x5043e0(0x4d6)+'if'),_0x3411b5[_0x5043e0(0x2d0)+_0x5043e0(0x6bd)]=_0x389d05?_0x5043e0(0x318):_0x5043e0(0x5c0)+_0x5043e0(0x53b)+_0x5043e0(0x37a)+'0,0.5'+'5)',_0x3411b5['fillT'+_0x5043e0(0x58a)](_0x389b49,_0x4c5aae+_0xf73370/(-0x81*-0x33+-0xd1c+-0xc95),_0x4b78bb[_0x5043e0(0x435)](_0x4b78bb[_0x5043e0(0x1a9)](_0x18ab29,_0x4b78bb[_0x5043e0(0x577)](_0x2e373d,0x416+-0x2339+0x1f25)),(0x16e7+-0xa7e*0x1+-0xc61)*_0x5d80f0))),_0x3411b5[_0x5043e0(0x1be)+'re']();};_0x2e9ead('W',_0x4b78bb[_0x230820(0x2e1)],_0x4b78bb[_0x230820(0x435)](_0x84d885+_0x56df07,_0x10ee03),_0x3e1103,_0x56df07,_0x56df07),_0x4b78bb['HVeUd'](_0x2e9ead,'A',_0x4b78bb[_0x230820(0x5e1)],_0x84d885,_0x4b78bb[_0x230820(0x2c5)](_0x4b78bb[_0x230820(0x231)](_0x3e1103,_0x56df07),_0x10ee03),_0x56df07,_0x56df07),_0x2e9ead('S',_0x230820(0x12b),_0x84d885+_0x56df07+_0x10ee03,_0x4b78bb['FRDyr'](_0x4b78bb[_0x230820(0x61f)](_0x3e1103,_0x56df07),_0x10ee03),_0x56df07,_0x56df07),_0x2e9ead('D','KeyD',_0x84d885+(_0x56df07+_0x10ee03)*(0x1*0x25ed+-0xf54+-0x1697),_0x3e1103+_0x56df07+_0x10ee03,_0x56df07,_0x56df07);var _0x3ebaac=_0x4b78bb[_0x230820(0x605)](_0x4b78bb['tsuVf'](_0x1dd6d7,_0x10ee03),0x4f*0x5+0x2c*0xce+-0x24f1),_0x456615=_0x3e1103+_0x4b78bb['PiepZ'](_0x4b78bb[_0x230820(0x2c5)](_0x56df07,_0x10ee03),0xf29+0x6a9+-0x8*0x2ba);_0x2e9ead('LMB',_0x4b78bb[_0x230820(0x2aa)],_0x84d885,_0x456615,_0x3ebaac,_0x56df07,_0x16fe8e[_0x230820(0x4ab)]?_0x4b78bb[_0x230820(0x2c5)](_0x4b78bb['xkGKY'](_0x532c9d,0x20ec+0x1*-0x191+-0x2*0xfad),'\x20CPS'):''),_0x4b78bb['RJdRi'](_0x2e9ead,_0x4b78bb['dXuOd'],_0x4b78bb[_0x230820(0x627)],_0x84d885+_0x3ebaac+_0x10ee03,_0x456615,_0x3ebaac,_0x56df07,_0x16fe8e[_0x230820(0x4ab)]?_0x4b78bb['lhccp'](_0x532c9d,0x2149+0xb32+-0x2c78)+'\x20CPS':''),_0x4b78bb[_0x230820(0x16a)](_0x2e9ead,'',_0x4b78bb['pOeJm'],_0x84d885,_0x456615+_0x56df07+_0x10ee03,_0x1dd6d7,_0x4b78bb['eEPyO'](_0x56df07,-0x18e5+-0x1d59+-0x1*-0x363e+0.45));}function _0x2017d7(_0x404af6){var _0x26f874=_0x3b7b3a;if(_0x4b78bb[_0x26f874(0x534)]!=='lnnMa'){var _0x118123=(_0x26f874(0x691)+_0x26f874(0x666)+_0x26f874(0x2bf)+_0x26f874(0x4a1)+_0x26f874(0x631)+'7|8|2'+'2|0|9'+'|23|5'+'|16|2'+_0x26f874(0x49e)+_0x26f874(0x396)+_0x26f874(0x684)+'4')[_0x26f874(0x13c)]('|'),_0x1d3ffe=0x2*-0xd58+0x4d*-0x59+0x73*0x77;while(!![]){switch(_0x118123[_0x1d3ffe++]){case'0':_0x3411b5[_0x26f874(0x6b9)+'o'](_0x4b78bb[_0x26f874(0x34a)](_0x21c931,_0xd381b3),_0x276ae0);continue;case'1':_0x3411b5['strok'+_0x26f874(0x3db)+'e']=_0x50fbb7;continue;case'2':_0x3411b5[_0x26f874(0x262)+'o'](_0x21c931,_0x276ae0+_0xd381b3);continue;case'3':_0x3411b5['fill']();continue;case'4':_0x3411b5['begin'+_0x26f874(0x1fc)]();continue;case'5':_0x3411b5[_0x26f874(0x262)+'o'](_0x21c931,_0x276ae0-_0xd381b3-_0x3ef77e);continue;case'6':_0x3411b5['fillS'+_0x26f874(0x6bd)]=_0x50fbb7;continue;case'7':var _0xd381b3=(-0x6ad*0x4+0x1*-0xc5d+-0x1*-0x2717)*_0x22fb08,_0x3ef77e=_0x4b78bb[_0x26f874(0x26e)](0x89f+-0x2*0xc79+0x1*0x105b,_0x22fb08);continue;case'8':_0x3411b5['begin'+'Path']();continue;case'9':_0x3411b5[_0x26f874(0x262)+'o'](_0x4b78bb['pJZPD'](_0x21c931,_0xd381b3),_0x276ae0);continue;case'10':_0x3411b5[_0x26f874(0x6b9)+'o'](_0x21c931,_0x4b78bb[_0x26f874(0x619)](_0x276ae0,_0xd381b3)+_0x3ef77e);continue;case'11':var _0x50fbb7=/^#[0-9a-f]{6}$/i[_0x26f874(0x511)](_0x16fe8e['chCol'+'or'])?_0x16fe8e['chCol'+'or']:'#ff6b'+'9d';continue;case'12':_0x3411b5[_0x26f874(0x566)+_0x26f874(0x61c)]=Math[_0x26f874(0x51a)](-0x1*0x4ef+-0x1354+-0x2*-0xc22+0.5,_0x4b78bb['nFHYp'](0x750+0xdb7+-0x1505*0x1,_0x22fb08));continue;case'13':var _0x21c931=_0x404af6[_0x26f874(0x43a)]/(-0x6f5*-0x5+-0x1981+-0x946*0x1),_0x276ae0=_0x404af6['heigh'+'t']/(-0x25cf+0x475*-0x7+0x9dc*0x7);continue;case'14':_0x3411b5['resto'+'re']();continue;case'15':_0x3411b5[_0x26f874(0x6fa)+_0x26f874(0x28a)+'r']=_0x50fbb7;continue;case'16':_0x3411b5[_0x26f874(0x6b9)+'o'](_0x21c931,_0x276ae0-_0xd381b3);continue;case'17':var _0x22fb08=Number(_0x16fe8e[_0x26f874(0x1d1)+'e'])||0x1c92+0x4e5*0x7+-0x4*0xfb5;continue;case'18':_0x3411b5['arc'](_0x21c931,_0x276ae0,(0x80f+-0x2*-0x12fc+-0x2*0x1703+0.6000000000000001)*_0x22fb08,-0x18b3+-0xc59+0x250c,Math['PI']*(-0x76*0x1b+-0x1103+0x1d77));continue;case'19':_0x3411b5[_0x26f874(0x6fa)+_0x26f874(0x3c7)]=-0x1807+-0x1*-0x12d1+0x1*0x53c;continue;case'20':_0x3411b5[_0x26f874(0x417)]();continue;case'21':_0x3411b5['strok'+'e']();continue;case'22':_0x3411b5[_0x26f874(0x262)+'o'](_0x4b78bb['pVCgP'](_0x4b78bb[_0x26f874(0x282)](_0x21c931,_0xd381b3),_0x3ef77e),_0x276ae0);continue;case'23':_0x3411b5[_0x26f874(0x6b9)+'o'](_0x4b78bb[_0x26f874(0x1cb)](_0x21c931+_0xd381b3,_0x3ef77e),_0x276ae0);continue;}break;}}else _0x782157[_0x26f874(0x436)+'le']=_0x34f833,_0x42d5c7();}function _0x42a706(_0x291de1){var _0x2399be=_0x3b7b3a,_0x19a058={'itUeb':function(_0x1dada5,_0x53f4c7){return _0x1dada5===_0x53f4c7;},'MlWBu':_0x2399be(0x64f)};_0x3411b5[_0x2399be(0x417)](),_0x3411b5['font']='600\x201'+_0x2399be(0x193)+_0x2399be(0x1d0)+'ospac'+_0x2399be(0x1c6)+'ospac'+'e',_0x3411b5[_0x2399be(0x6c3)+_0x2399be(0x546)]=_0x2399be(0x30d),_0x3411b5['textB'+_0x2399be(0x470)+'ne']=_0x3e92ea[_0x2399be(0x160)];var _0xb0df5b=0xc1b+-0x1*-0x22db+0x1765*-0x2,_0x53e416=0xb8d+-0xb1d*0x1+-0xa*0xa,_0x5bbbda=(_0x9d983b,_0x1aea0b)=>{var _0x220ac8=_0x2399be;_0x19a058['itUeb'](_0x19a058[_0x220ac8(0x23e)],'cZfJc')?(_0x17a3f9[_0x220ac8(0x4ab)]=_0x8e6b1a,_0x36a63c()):(_0x3411b5[_0x220ac8(0x2d0)+'tyle']=_0x1aea0b||'rgba('+_0x220ac8(0x53b)+'35,24'+_0x220ac8(0x466)+'5)',_0x3411b5['fillT'+_0x220ac8(0x58a)](_0x9d983b,_0x53e416,_0xb0df5b),_0xb0df5b+=0xdae+-0x1*0xedc+0x13e);};_0x5bbbda(_0x2399be(0x533)+_0x2399be(0x22c)+_0x2399be(0x29b)+'1',_0x3e92ea[_0x2399be(0x1b8)]);if(_0x16fe8e[_0x2399be(0x25f)])_0x5bbbda(_0x39dce7+_0x2399be(0x572));if(!_0x3e250a['gameL'+_0x2399be(0x229)])_0x3e92ea['guylc'](_0x5bbbda,_0x2399be(0x4fa)+_0x2399be(0x1a6)+_0x2399be(0x2ad)+'e…',_0x3e92ea[_0x2399be(0x667)]);_0x3411b5['resto'+'re']();}function _0x58cad0(){var _0x4bad4c=_0x3b7b3a;requestAnimationFrame(_0x58cad0),_0x410e54++;var _0x493a20=performance[_0x4bad4c(0x532)]();if(_0x4b78bb['wILNF'](_0x493a20-_0x31e315,0x1097+-0x90d+0x2cb*-0x2)){if(_0x4b78bb[_0x4bad4c(0x2e3)](_0x4bad4c(0x2e0),_0x4bad4c(0x4e2))){var _0x2b0a38={'jHRtj':_0x4b78bb[_0x4bad4c(0x2ff)],'tDpKn':_0x4bad4c(0x2d7)+_0x4bad4c(0x601)+'Frame'+'Rate'},_0x5dee39=_0x57b17b[_0x4bad4c(0x4b1)+_0x4bad4c(0x60a)]?_0x4bad4c(0x57d)+_0x4bad4c(0x67e)+'—\x20ove'+_0x4bad4c(0x1fd)+_0x4bad4c(0x450)+'\x20no\x20h'+_0x4bad4c(0x21a)+_0x4bad4c(0x4be)+_0x4bad4c(0x4c2)+_0x4bad4c(0x270)+')':_0x1cb0eb[_0x4bad4c(0x639)]?_0x4b78bb[_0x4bad4c(0x231)](_0x4b78bb[_0x4bad4c(0x643)](_0x4b78bb[_0x4bad4c(0x170)](_0x4b78bb[_0x4bad4c(0x31b)](_0x4b78bb['hoVLc'](_0x4bad4c(0x50e)+_0x4bad4c(0x476)+'\x20'+(_0x3bdf23[_0x4bad4c(0x327)+'Total']?_0x32a526[_0x4bad4c(0x327)+'Ok']+'/'+_0x459fa9[_0x4bad4c(0x327)+_0x4bad4c(0x362)]+('\x20hook'+'s'):_0x4b78bb[_0x4bad4c(0x445)]),'\x20|\x20ga'+_0x4bad4c(0x2fa)),_0x6c1b5a[_0x4bad4c(0x54c)+'oaded']?'loade'+'d':'loadi'+'ng')+_0x4b78bb[_0x4bad4c(0x4b4)],_0x19c813[_0x4bad4c(0x357)+_0x4bad4c(0x155)]?'held':'none'),_0x4bad4c(0x206)+_0x4bad4c(0x5d3)+'t\x20'),_0x585d7d['movem'+_0x4bad4c(0x1ca)]?_0x4bad4c(0x151):_0x4b78bb[_0x4bad4c(0x2f6)]):_0x4bad4c(0x50e)+'MISSI'+'NG\x20—\x20'+_0x4bad4c(0x3d6)+_0x4bad4c(0x3b7)+'ly\x20(r'+_0x4bad4c(0x3c1)+_0x4bad4c(0x1d2)+_0x4bad4c(0x4cd)+'erscr'+_0x4bad4c(0x4a3);if(_0x21cb8b[_0x4bad4c(0x56f)+_0x4bad4c(0x585)])_0x5dee39+=_0x4b78bb['AaGdp'](_0x4b78bb[_0x4bad4c(0x266)],_0x23a7db['lastE'+_0x4bad4c(0x585)]);return _0x271d12(_0x4bad4c(0x4af)+'s',_0x5dee39,_0x9e8293['uwmk'],null,[_0x5c2d3f(_0x4b78bb['isBVO'],'calls'+_0x4bad4c(0x165)+'yEngi'+_0x4bad4c(0x48d)+'plica'+_0x4bad4c(0x6f9)+'set_t'+'arget'+_0x4bad4c(0x513)+_0x4bad4c(0x1e4),_0x32d015(_0x4bad4c(0x1e8),()=>{var _0x5344df=_0x4bad4c;try{if(_0x9c7a64)_0x66b285[_0x5344df(0x2a0)](_0x2b0a38[_0x5344df(0x400)],_0x2b0a38['tDpKn'],[0x503*-0x6+-0x1d9*0x10+0x3c92]);}catch(_0x4f7d0b){}}))]);}else _0x39dce7=Math['round'](_0x4b78bb['kxDnv'](_0x410e54*(0x1a81+-0x411+-0x1288*0x1),_0x4b78bb['NTqew'](_0x493a20,_0x31e315))),_0x410e54=0x2c0+-0x1c*-0x4f+-0xb64,_0x31e315=_0x493a20;}_0x4e5bc3(),_0x4b78bb[_0x4bad4c(0x402)](_0x4ae7da),_0x3411b5['clear'+'Rect'](0x1216+0x1*-0x305+-0xf11,0x1*-0x943+-0x155a+0x1e9d,_0x2dcd89['w'],_0x2dcd89['h']);var _0x569e75={'left':0x0,'top':0x0,'right':_0x2dcd89['w'],'bottom':_0x2dcd89['h'],'width':_0x2dcd89['w'],'height':_0x2dcd89['h']};if(_0x16fe8e[_0x4bad4c(0x629)+_0x4bad4c(0x4fd)])_0x2017d7(_0x569e75);if(_0x16fe8e[_0x4bad4c(0x2f5)+_0x4bad4c(0x56c)])_0x143127(_0x569e75);_0x42a706(_0x569e75);}var _0x105570=document['creat'+'eElem'+'ent'](_0x3b7b3a(0x63b));_0x105570['id']=_0x3e92ea['EwaQg'],_0x105570[_0x3b7b3a(0x267)][_0x3b7b3a(0x21f)+'xt']=_0x3b7b3a(0x34f)+'ion:f'+_0x3b7b3a(0x595)+_0x3b7b3a(0x180)+_0x3b7b3a(0x5c4)+'index'+':2147'+_0x3b7b3a(0x6ea)+_0x3b7b3a(0x187)+'nter-'+_0x3b7b3a(0x4ef)+'s:non'+'e;';var _0x3ca0e4=_0x105570['attac'+'hShad'+'ow']({'mode':_0x3b7b3a(0x14d)});(document[_0x3b7b3a(0x258)]||document[_0x3b7b3a(0x42e)+'entEl'+'ement'])['appen'+_0x3b7b3a(0x4eb)+'d'](_0x105570);var _0x3800a4=![],_0x2f5369={};try{_0x2f5369=JSON[_0x3b7b3a(0x196)](localStorage[_0x3b7b3a(0x3af)+'em']('sakur'+_0x3b7b3a(0x3f3)+_0x3b7b3a(0x6e0)+'v1')||'{}');}catch(_0x44af4c){}function _0x4e6a20(){var _0x29d487=_0x3b7b3a;if(_0x3e92ea['komVv'](_0x29d487(0x2a1),_0x3e92ea[_0x29d487(0x140)])){var _0x28ad1f={'XRnUo':function(_0x28d06f,_0x490009,_0x43e497,_0x203373,_0x59f769){return _0x28d06f(_0x490009,_0x43e497,_0x203373,_0x59f769);}};_0x111464=_0x104613[_0x29d487(0x65c)+_0x29d487(0x2f4)+_0x29d487(0x2ef)][_0x29d487(0x1a3)+_0x29d487(0x332)+'er'],_0x4635bb=_0x61bcb1[_0x29d487(0x65c)+_0x29d487(0x2f4)+_0x29d487(0x2ef)]['Runti'+'me'][_0x29d487(0x67f)+_0x29d487(0x26d)+'in']({'name':_0x4b78bb[_0x29d487(0x441)],'version':_0x4b78bb[_0x29d487(0x139)],'referencedAssemblies':[_0x4b78bb[_0x29d487(0x3c0)]]});if(_0x388ee2[_0x29d487(0x218)+'od'])_0x4b78bb[_0x29d487(0x6c7)](_0x58846b,_0x4b78bb[_0x29d487(0x1ba)],_0x29d487(0x5fc)+'th',_0x4b78bb['zqUFw'],[_0x29d487(0x573),_0x29d487(0x573)],_0x5c66dd,_0x313666,!!_0x5d62b3[_0x29d487(0x294)]);if(_0x4b9bbf[_0x29d487(0x218)+'odDie'])_0x4b78bb[_0x29d487(0x531)](_0x572a75,_0x29d487(0x27e)+'e','OHeal'+'th',_0x29d487(0x25c)+_0x29d487(0x6a1),[_0x4b78bb[_0x29d487(0x3cc)],'i32',_0x4b78bb[_0x29d487(0x3cc)],_0x29d487(0x573),_0x29d487(0x573)],_0x375dc0,_0x107f9,!!_0x4ba6e2['god']);if(_0x353682['hookN'+_0x29d487(0x40b)+'il'])_0x4b78bb[_0x29d487(0x531)](_0x5a44b6,_0x4b78bb['nTOBO'],_0x29d487(0x6a4)+_0x29d487(0x623)+'forms'+_0x29d487(0x1b7)+_0x29d487(0x55b)+_0x29d487(0x13a)+'lMoti'+'on','Tick',['i32'],_0x47bb25,_0x47ac54,!!_0x1d4d0c['noRec'+_0x29d487(0x305)]);if(_0x992578['hookC'+_0x29d487(0x47c)+'e'])_0x4b78bb[_0x29d487(0x2af)](_0x145bbe,'capSh'+'ooter',_0x4b78bb['hSVKf'],_0x4b78bb[_0x29d487(0x4a4)],['i32','i32'],_0x422f47,(_0x56efcf,_0x1618d0)=>{var _0x4b6260=_0x29d487;_0x28ad1f[_0x4b6260(0x386)](_0x34a8e9,_0x392342,_0x1618d0,_0x508c99,_0x4b6260(0x357)+_0x4b6260(0x155));},!![]);if(_0xac60a4[_0x29d487(0x5a6)+_0x29d487(0x47c)+'e'])_0x333d00(_0x4b78bb[_0x29d487(0x62c)],'Legio'+'nPlat'+_0x29d487(0x248)+_0x29d487(0x1b7)+_0x29d487(0x55b)+'Movem'+_0x29d487(0x423),_0x29d487(0x3e6)+_0x29d487(0x2c3),[_0x4b78bb[_0x29d487(0x3cc)]],'i32',(_0x1d733d,_0x2ecda3)=>{var _0x5b6c06=_0x29d487;_0x522c8c(_0x128af2,_0x2ecda3,_0x282d99,_0x5b6c06(0x670)+_0x5b6c06(0x1ca));},!![]);}else try{localStorage[_0x29d487(0x387)+'em'](_0x3e92ea['rzMDU'],JSON[_0x29d487(0x405)+_0x29d487(0x288)](_0x2f5369));}catch(_0x27ed00){}}function _0xb9a32e(_0x1aae98,_0x33c127){var _0x173818=_0x3b7b3a,_0xc23029=document[_0x173818(0x67f)+'eElem'+_0x173818(0x423)](_0x3e92ea['pBKWi']);return _0xc23029[_0x173818(0x344)]='butto'+'n',_0xc23029[_0x173818(0x63f)+_0x173818(0x64a)]=_0x3e92ea[_0x173818(0x4c3)],_0xc23029[_0x173818(0x219)+_0x173818(0x30a)+'te'](_0x173818(0x14e),_0x173818(0x2a8)+'h'),_0xc23029[_0x173818(0x219)+_0x173818(0x30a)+'te'](_0x3e92ea['GAWYN'],String(!!_0x1aae98)),_0xc23029[_0x173818(0x1db)+'ck']=_0x5ec007=>{var _0x1bb130=_0x173818;_0x5ec007['stopP'+_0x1bb130(0x4d7)+_0x1bb130(0x6c6)]();var _0x35099e=_0x4b78bb[_0x1bb130(0x553)](_0xc23029[_0x1bb130(0x63c)+_0x1bb130(0x30a)+'te']('aria-'+'check'+'ed'),_0x4b78bb[_0x1bb130(0x184)]);_0xc23029['setAt'+_0x1bb130(0x30a)+'te'](_0x4b78bb[_0x1bb130(0x3da)],String(_0x35099e)),_0x4b78bb['fxupe'](_0x33c127,_0x35099e);},_0xc23029;}function _0x3cbbf6(_0x11c681,_0x48bc7a,_0x27f108,_0x31d683,_0x460c80){var _0x12ee65=_0x3b7b3a,_0x4c4713={'KbWFe':_0x3e92ea['BNeJA'],'NAcJu':_0x12ee65(0x26c),'TGldS':_0x3e92ea['unLXm'],'mXuuR':function(_0x4652ab,_0x1ba129){var _0x22aa2b=_0x12ee65;return _0x3e92ea[_0x22aa2b(0x677)](_0x4652ab,_0x1ba129);},'jiYog':function(_0x44ba97,_0x41581d){return _0x44ba97===_0x41581d;},'PPrkN':_0x12ee65(0x2dd),'rOszV':function(_0xdbf22b){return _0x3e92ea['ZarNW'](_0xdbf22b);},'SYOQF':function(_0x13bbb0,_0x3d3b16){var _0x32bca7=_0x12ee65;return _0x3e92ea[_0x32bca7(0x291)](_0x13bbb0,_0x3d3b16);}},_0x2a5ced=document[_0x12ee65(0x67f)+_0x12ee65(0x25b)+_0x12ee65(0x423)](_0x3e92ea[_0x12ee65(0x65f)]);_0x2a5ced[_0x12ee65(0x63f)+_0x12ee65(0x64a)]=_0x3e92ea[_0x12ee65(0x6eb)];var _0x711aad=document[_0x12ee65(0x67f)+_0x12ee65(0x25b)+_0x12ee65(0x423)](_0x12ee65(0x42d));_0x711aad['type']=_0x12ee65(0x4bc),_0x711aad[_0x12ee65(0x63f)+'Name']=_0x3e92ea[_0x12ee65(0x22a)],_0x711aad[_0x12ee65(0x250)]=_0x48bc7a,_0x711aad[_0x12ee65(0x51a)]=_0x27f108,_0x711aad['step']=_0x31d683,_0x711aad['value']=_0x11c681;var _0x4b15d7=document['creat'+_0x12ee65(0x25b)+_0x12ee65(0x423)](_0x12ee65(0x475));_0x4b15d7['class'+_0x12ee65(0x64a)]='sk-va'+'l',_0x4b15d7[_0x12ee65(0x5ec)+'onten'+'t']=String(_0x11c681);var _0x3cc578=()=>{var _0x47f30f=_0x12ee65;'dguRe'===_0x4c4713[_0x47f30f(0x19f)]?(_0x4b15d7[_0x47f30f(0x5ec)+'onten'+'t']=String(_0x711aad[_0x47f30f(0x3dd)]),_0x2a5ced[_0x47f30f(0x267)][_0x47f30f(0x5c5)+'opert'+'y'](_0x4c4713[_0x47f30f(0x4db)],_0x4c4713['mXuuR'](_0x711aad[_0x47f30f(0x3dd)],_0x48bc7a)/(_0x27f108-_0x48bc7a)*(0x23b5+0x209a+-0x43eb)+'%')):(_0x40c071(_0x1746bf,0x1533+0xd32+-0x21d9,_0x4c4713['KbWFe'],-0x47f*0x5+-0x6*-0x1d9+0x1*0xb65+0.1),_0x2a7953(_0x7f65dc,0x17b*0x1+-0x8*-0x484+-0x253b,'f32',0xa61+0x23f1*-0x1+0x8*0x332+0.1));};return _0x711aad[_0x12ee65(0x4f1)+'ut']=()=>{var _0x43354d=_0x12ee65;_0x4c4713[_0x43354d(0x3f1)](_0x4c4713['PPrkN'],_0x4c4713[_0x43354d(0x562)])?(_0x4c4713[_0x43354d(0x289)](_0x3cc578),_0x4c4713[_0x43354d(0x158)](_0x460c80,Number(_0x711aad['value']))):(_0x57e4e3[_0x43354d(0x377)+'ct']=_0x36ace4,_0x48864e());},_0x3cc578(),_0x2a5ced['appen'+'d'](_0x711aad,_0x4b15d7),_0x2a5ced;}function _0x1d16b9(_0x470d42,_0x5c4dd6){var _0x2c07c6=_0x3b7b3a,_0x2f0f60=document[_0x2c07c6(0x67f)+'eElem'+_0x2c07c6(0x423)](_0x4b78bb['KynhX']);return _0x2f0f60[_0x2c07c6(0x344)]=_0x4b78bb['mriRT'],_0x2f0f60[_0x2c07c6(0x63f)+'Name']='sk-co'+'lor',_0x2f0f60[_0x2c07c6(0x3dd)]=/^#[0-9a-f]{6}$/i[_0x2c07c6(0x511)](_0x470d42)?_0x470d42:_0x4b78bb[_0x2c07c6(0x185)],_0x2f0f60[_0x2c07c6(0x4f1)+'ut']=()=>_0x5c4dd6(_0x2f0f60[_0x2c07c6(0x3dd)]),_0x2f0f60;}function _0x12148b(_0x556119,_0x495943,_0x910e56){var _0x4579ed=_0x3b7b3a;if(_0x4579ed(0x56d)==='ZFfUh'){if(_0x172a99[_0x1b570a]['id']&&_0x3dd971[_0xc353c1]['id']['index'+'Of'](_0x4579ed(0x578)+'io_')===-0x805*0x4+-0x7f0+0x18a*0x1a)_0x21d749[_0xdfd45]['style']['displ'+'ay']=_0x4b78bb['BqHxF'];}else{var _0x20a25c=document[_0x4579ed(0x67f)+_0x4579ed(0x25b)+_0x4579ed(0x423)]('selec'+'t');_0x20a25c['class'+_0x4579ed(0x64a)]=_0x4b78bb[_0x4579ed(0x520)];for(var [_0x58d13e,_0x113472]of _0x495943){if(_0x4b78bb[_0x4579ed(0x129)]==='qrMsd'){var _0x2c9522=document[_0x4579ed(0x67f)+'eElem'+_0x4579ed(0x423)](_0x4579ed(0x277)+'n');_0x2c9522['value']=_0x58d13e,_0x2c9522[_0x4579ed(0x5ec)+'onten'+'t']=_0x113472,_0x20a25c[_0x4579ed(0x3b5)+'dChil'+'d'](_0x2c9522);}else _0x4816a2[_0x4579ed(0x428)+_0x4579ed(0x615)]=_0x32383d,_0x4b78bb[_0x4579ed(0x38c)](_0x56ee9d);}return _0x20a25c['value']=_0x556119,_0x20a25c[_0x4579ed(0x6bc)+_0x4579ed(0x5a2)]=()=>_0x910e56(_0x20a25c['value']),_0x20a25c;}}function _0x2cce7a(_0x58908d,_0x5b2de0){var _0x19f1a7=_0x3b7b3a,_0x537105={'RKSwU':function(_0x142108,_0x5244bf){return _0x142108!==_0x5244bf;},'dhPwt':_0x4b78bb[_0x19f1a7(0x3de)]};if(_0x4b78bb[_0x19f1a7(0x163)]!==_0x19f1a7(0x342))_0x4d715f['hookN'+_0x19f1a7(0x40b)+'il']=_0x3e1548,_0x562546();else{var _0x456c7c=document[_0x19f1a7(0x67f)+'eElem'+'ent'](_0x4b78bb[_0x19f1a7(0x136)]);return _0x456c7c[_0x19f1a7(0x344)]='butto'+'n',_0x456c7c['class'+_0x19f1a7(0x64a)]='sk-bt'+'n',_0x456c7c[_0x19f1a7(0x5ec)+'onten'+'t']=_0x58908d,_0x456c7c['oncli'+'ck']=_0x43a0f1=>{var _0x56ddfe=_0x19f1a7;_0x537105[_0x56ddfe(0x5ad)](_0x56ddfe(0x13b),_0x537105[_0x56ddfe(0x3c9)])?(_0x43a0f1[_0x56ddfe(0x41f)+'ropag'+_0x56ddfe(0x6c6)](),_0x5b2de0()):_0x56679b[_0x56ddfe(0x4b7)+'n'](_0x38f00d,_0x47b6e6[_0x56ddfe(0x196)](_0x370594[_0x56ddfe(0x3af)+'em'](_0x56ddfe(0x59c)+_0x56ddfe(0x3f3)+_0x56ddfe(0x5e7))||'{}'));},_0x456c7c;}}function _0x5bc62c(_0x1ced2b,_0x12db2f,_0x12052c){var _0x4bc727=_0x3b7b3a;if(_0x4bc727(0x367)==='GhvCi'){var _0x4f8ff8=document['creat'+_0x4bc727(0x25b)+_0x4bc727(0x423)](_0x3e92ea[_0x4bc727(0x65f)]);_0x4f8ff8['class'+'Name']=_0x4bc727(0x133)+'l';var _0x4f9df0=document[_0x4bc727(0x67f)+'eElem'+_0x4bc727(0x423)](_0x4bc727(0x475));_0x4f9df0[_0x4bc727(0x63f)+'Name']=_0x3e92ea[_0x4bc727(0x309)],_0x4f9df0[_0x4bc727(0x5ec)+_0x4bc727(0x376)+'t']=_0x1ced2b;if(_0x12db2f){var _0x41dd2d=document[_0x4bc727(0x67f)+'eElem'+_0x4bc727(0x423)](_0x4bc727(0x253));_0x41dd2d['class'+'Name']=_0x3e92ea['CgNKQ'],_0x41dd2d[_0x4bc727(0x5ec)+'onten'+'t']=_0x12db2f,_0x4f9df0[_0x4bc727(0x3b5)+_0x4bc727(0x4eb)+'d'](_0x41dd2d);}return _0x4f8ff8[_0x4bc727(0x3b5)+'d'](_0x4f9df0,_0x12052c),_0x4f8ff8;}else _0x470ac1['chSiz'+'e']=_0x139c6a,_0x18d71b();}function _0x34be0e(_0x13ede0,_0x4935c0){var _0x2b80d2=_0x3b7b3a,_0x5b3b3e=document[_0x2b80d2(0x67f)+_0x2b80d2(0x25b)+_0x2b80d2(0x423)](_0x4b78bb['qObJb']);return _0x5b3b3e[_0x2b80d2(0x63f)+_0x2b80d2(0x64a)]=_0x2b80d2(0x299)+'te'+(_0x4935c0?_0x2b80d2(0x2cc):''),_0x5b3b3e['textC'+_0x2b80d2(0x376)+'t']=_0x13ede0,_0x5b3b3e;}function _0x24d071(_0x20b487,_0x4598e1,_0x2419df,_0x176184,_0x540bf2){var _0x1bd226=_0x3b7b3a,_0x4fc6ad=document['creat'+_0x1bd226(0x25b)+_0x1bd226(0x423)](_0x1bd226(0x63b));_0x4fc6ad[_0x1bd226(0x63f)+_0x1bd226(0x64a)]=_0x3e92ea['GUhqr'](_0x1bd226(0x606)+'rd',_0x2419df?'\x20on':'');var _0x873441=document['creat'+_0x1bd226(0x25b)+_0x1bd226(0x423)](_0x3e92ea[_0x1bd226(0x65f)]);_0x873441[_0x1bd226(0x63f)+_0x1bd226(0x64a)]=_0x3e92ea[_0x1bd226(0x1ce)];var _0x372fe8=document[_0x1bd226(0x67f)+'eElem'+'ent'](_0x1bd226(0x63b));_0x372fe8[_0x1bd226(0x63f)+'Name']=_0x3e92ea[_0x1bd226(0x588)];var _0x41a762=document['creat'+'eElem'+_0x1bd226(0x423)](_0x1bd226(0x340)+'g');_0x41a762['textC'+'onten'+'t']=_0x20b487,_0x372fe8[_0x1bd226(0x3b5)+'dChil'+'d'](_0x41a762);if(_0x176184){var _0x21b313=_0xb9a32e(_0x2419df,_0x2c3caf=>{var _0x4d70bc=_0x1bd226;_0x4fc6ad[_0x4d70bc(0x63f)+_0x4d70bc(0x4d3)][_0x4d70bc(0x6c4)+'e']('on',_0x2c3caf),_0x4b78bb[_0x4d70bc(0x5a4)](_0x176184,_0x2c3caf);});_0x873441['appen'+'d'](_0x372fe8,_0x21b313);}else _0x873441['appen'+_0x1bd226(0x4eb)+'d'](_0x372fe8);_0x4fc6ad[_0x1bd226(0x3b5)+'dChil'+'d'](_0x873441);if(_0x540bf2&&_0x540bf2[_0x1bd226(0x584)+'h']){if(_0x3e92ea[_0x1bd226(0x579)]!==_0x3e92ea[_0x1bd226(0x579)])_0x2c3347['hookG'+_0x1bd226(0x235)]=_0x3753c5,_0x34dfdc();else{var _0x384c19=(_0x1bd226(0x3b8)+_0x1bd226(0x540)+_0x1bd226(0x68b))['split']('|'),_0x3de93d=0x1257*-0x1+0xfd6+0x281;while(!![]){switch(_0x384c19[_0x3de93d++]){case'0':var _0x29087b=document[_0x1bd226(0x67f)+_0x1bd226(0x25b)+_0x1bd226(0x423)](_0x1bd226(0x63b));continue;case'1':_0x29087b['appen'+_0x1bd226(0x4eb)+'d'](_0x26ebbb);continue;case'2':_0x26ebbb['class'+_0x1bd226(0x64a)]=_0x3e92ea[_0x1bd226(0x149)];continue;case'3':_0x4fc6ad['appen'+'dChil'+'d'](_0x29087b);continue;case'4':_0x29087b[_0x1bd226(0x63f)+_0x1bd226(0x64a)]=_0x3e92ea[_0x1bd226(0x15a)];continue;case'5':_0x26ebbb[_0x1bd226(0x5ec)+_0x1bd226(0x376)+'t']=_0x4598e1;continue;case'6':for(var _0xe62843 of _0x540bf2)_0x29087b[_0x1bd226(0x3b5)+_0x1bd226(0x4eb)+'d'](_0xe62843);continue;case'7':var _0x26ebbb=document['creat'+_0x1bd226(0x25b)+'ent'](_0x1bd226(0x63b));continue;}break;}}}return _0x4fc6ad;}var _0x1052e6=[{'id':'comba'+'t','label':_0x3e92ea['gyDsG']},{'id':'move','label':'Move'},{'id':_0x3b7b3a(0x6d6)+'l','label':_0x3e92ea[_0x3b7b3a(0x17c)]},{'id':'misc','label':_0x3e92ea[_0x3b7b3a(0x3cb)]},{'id':_0x3b7b3a(0x4fc),'label':'Safet'+'y'}];function _0x312723(){var _0x20461e=_0x3b7b3a;if(_0x4b78bb['RMcde']!==_0x4b78bb[_0x20461e(0x657)]){var _0x26aa37=_0x3f9c8b['child'+'ren'];for(var _0x167889=-0x30*0xbd+0x209*-0x4+0x2*0x15ca;_0x4b78bb['ZnVQf'](_0x167889,_0x26aa37[_0x20461e(0x584)+'h']);_0x167889++){if(_0x26aa37[_0x167889]['id']&&_0x4b78bb['zptZv'](_0x26aa37[_0x167889]['id']['index'+'Of'](_0x20461e(0x578)+_0x20461e(0x143)),0x116e+0x595*0x2+-0x1c98))_0x26aa37[_0x167889][_0x20461e(0x267)]['displ'+'ay']=_0x20461e(0x2a5);}}else{var _0x56e9d8=_0x3e250a[_0x20461e(0x4b1)+'ode']?'SAFE\x20'+_0x20461e(0x67e)+_0x20461e(0x223)+_0x20461e(0x1fd)+_0x20461e(0x450)+'\x20no\x20h'+_0x20461e(0x21a)+'(relo'+'ad\x20to'+_0x20461e(0x270)+')':_0x3e250a['uwmk']?_0x4b78bb[_0x20461e(0x211)](_0x4b78bb[_0x20461e(0x231)](_0x4b78bb['XrWVc'](_0x4b78bb[_0x20461e(0x170)](_0x4b78bb['zHhGl'](_0x4b78bb[_0x20461e(0x209)],_0x3e250a[_0x20461e(0x327)+_0x20461e(0x362)]?_0x4b78bb[_0x20461e(0x170)](_0x4b78bb[_0x20461e(0x231)](_0x3e250a[_0x20461e(0x327)+'Ok']+'/',_0x3e250a[_0x20461e(0x327)+_0x20461e(0x362)]),_0x4b78bb['EFgvt']):_0x4b78bb[_0x20461e(0x445)])+('\x20|\x20ga'+_0x20461e(0x2fa)),_0x3e250a[_0x20461e(0x54c)+'oaded']?_0x20461e(0x57a)+'d':'loadi'+'ng'),_0x20461e(0x69c)+'ooter'+'\x20'),_0x3e250a[_0x20461e(0x357)+_0x20461e(0x155)]?'held':'none'),_0x4b78bb[_0x20461e(0x1fa)])+(_0x3e250a['movem'+'ents']?'held':_0x4b78bb['BqHxF']):_0x20461e(0x50e)+_0x20461e(0x202)+_0x20461e(0x459)+_0x20461e(0x3d6)+'ay\x20on'+_0x20461e(0x41d)+_0x20461e(0x3c1)+'all\x20t'+_0x20461e(0x4cd)+'erscr'+_0x20461e(0x4a3);if(_0x3e250a[_0x20461e(0x56f)+_0x20461e(0x585)])_0x56e9d8+=_0x4b78bb['kZJVB'](_0x20461e(0x1a7)+_0x20461e(0x1a8),_0x3e250a['lastE'+_0x20461e(0x585)]);return _0x24d071(_0x20461e(0x4af)+'s',_0x56e9d8,_0x3e250a[_0x20461e(0x639)],null,[_0x5bc62c(_0x4b78bb['isBVO'],_0x20461e(0x59a)+'\x20Unit'+'yEngi'+_0x20461e(0x48d)+_0x20461e(0x6f2)+'tion.'+_0x20461e(0x2d7)+'arget'+'Frame'+'Rate',_0x2cce7a(_0x4b78bb[_0x20461e(0x545)],()=>{var _0x5e725c=_0x20461e,_0xf015d6={'HQeji':function(_0x540fa6,_0x23508a){var _0x41c2aa=_0x3f97;return _0x4b78bb[_0x41c2aa(0x3d1)](_0x540fa6,_0x23508a);}};if(_0x4b78bb[_0x5e725c(0x553)](_0x5e725c(0x5d9),_0x4b78bb['niNcw']))_0x56caf2=_0x5756dc[_0x5e725c(0x147)](_0xf015d6[_0x5e725c(0x6ed)](_0x5cd72e,0x27e+-0x39*0xd+0x44f)/(_0x3de175-_0xf356ee)),_0x79aaea=0x3*-0x1e3+-0xd*0x26d+0x2532,_0xa5d581=_0x27e68b;else try{if(_0xbfbcbd)_0xbfbcbd[_0x5e725c(0x2a0)](_0x4b78bb['VYUCq'],_0x4b78bb[_0x5e725c(0x412)],[-0x12b4+-0x1c2d*0x1+0x2fd1]);}catch(_0x1be276){}}))]);}}function _0x2efec8(_0x276986){var _0xe24d79=_0x3b7b3a,_0x3da9ff={'SYanM':function(_0x35566e,_0x36b1eb,_0x79fa,_0x3b8b92,_0x77e04e,_0x5d5557){return _0x4b78bb['eITaj'](_0x35566e,_0x36b1eb,_0x79fa,_0x3b8b92,_0x77e04e,_0x5d5557);},'vtVih':_0x4b78bb[_0xe24d79(0x3ff)],'gyPFR':function(_0x5996c2){return _0x5996c2();},'RHOMd':function(_0x17b0c2){var _0x559d07=_0xe24d79;return _0x4b78bb[_0x559d07(0x2b4)](_0x17b0c2);},'AcUBe':function(_0x5b7090,_0xf62a8e){return _0x4b78bb['XrWVc'](_0x5b7090,_0xf62a8e);},'cagHv':_0x4b78bb[_0xe24d79(0x671)],'zSCAR':_0x4b78bb[_0xe24d79(0x448)],'PnayA':function(_0x2e2c53,_0xe41979){return _0x2e2c53===_0xe41979;},'vUamp':_0x4b78bb[_0xe24d79(0x5cb)],'dnyOD':_0xe24d79(0x225),'bjxnS':function(_0x2257c9,_0x5928b5,_0xaf2c55,_0x419ca7,_0x5d6abb){var _0x1f6567=_0xe24d79;return _0x4b78bb[_0x1f6567(0x550)](_0x2257c9,_0x5928b5,_0xaf2c55,_0x419ca7,_0x5d6abb);},'pyvQH':_0xe24d79(0x620),'EZgZv':function(_0x5b20e0,_0x593ca6){return _0x5b20e0||_0x593ca6;},'Gwnek':function(_0x50ed5c,_0x651f4e){return _0x50ed5c!==_0x651f4e;},'TKhbA':_0x4b78bb['PmBkQ'],'eHHaU':function(_0x21b031,_0x18e552){return _0x4b78bb['Qhqew'](_0x21b031,_0x18e552);},'YDeBX':_0x4b78bb[_0xe24d79(0x5a3)],'nGEIV':'gDTNN','jEhhB':function(_0x45cb05){return _0x45cb05();},'CCEAw':_0xe24d79(0x49d)+'|0|9|'+_0xe24d79(0x323)+_0xe24d79(0x37f)+'|6','JkHPQ':function(_0x435cbd,_0xf5215c){return _0x4b78bb['wILNF'](_0x435cbd,_0xf5215c);},'vUCyH':function(_0x20afb5,_0x3f2a6c){return _0x20afb5-_0x3f2a6c;},'iEiTC':function(_0x2dc299,_0x5f55b4){return _0x2dc299/_0x5f55b4;},'UyNjR':function(_0x269c08,_0x55a4ac){return _0x269c08(_0x55a4ac);},'ywnVI':function(_0x530fce){return _0x530fce();}};if(_0x276986===_0xe24d79(0x2fe)+'t')return[_0x4b78bb['edTxw'](_0x312723),_0x4b78bb['vyeER'](_0x24d071,_0xe24d79(0x6ab)+'ode','Block'+'s\x20OHe'+_0xe24d79(0x5d5)+'Initi'+'ateTa'+_0xe24d79(0x616)+_0xe24d79(0x3c5)+_0xe24d79(0x338)+_0xe24d79(0x3ac)+_0xe24d79(0x539)+'lDie,'+'\x20so\x20n'+_0xe24d79(0x446)+_0xe24d79(0x1ea)+_0xe24d79(0x60d)+_0xe24d79(0x316)+'ill\x20y'+_0xe24d79(0x4c1),_0x16fe8e[_0xe24d79(0x294)],_0x57a8ea=>{var _0x1230d3=_0xe24d79;_0x16fe8e['god']=_0x57a8ea,_0x501608(),_0x4b78bb[_0x1230d3(0x304)](_0x439d16,_0x4b78bb[_0x1230d3(0x1ba)],_0x57a8ea),_0x439d16(_0x1230d3(0x27e)+'e',_0x57a8ea);},[]),_0x24d071(_0x4b78bb[_0xe24d79(0x1c9)],'Skips'+_0xe24d79(0x663)+_0xe24d79(0x64e)+'ion.T'+_0xe24d79(0x31d)+_0xe24d79(0x28b)+_0xe24d79(0x135)+_0xe24d79(0x406)+_0xe24d79(0x37b)+_0xe24d79(0x28d)+_0xe24d79(0x421)+'ance.',_0x16fe8e[_0xe24d79(0x234)+_0xe24d79(0x305)],_0x48b44d=>{var _0x21f605=_0xe24d79;_0x16fe8e[_0x21f605(0x234)+_0x21f605(0x305)]=_0x48b44d,_0x501608(),_0x439d16(_0x4b78bb['nTOBO'],_0x48b44d);},[]),_0x24d071(_0xe24d79(0x6f1)+'read',_0x4b78bb['BEoUD'],_0x16fe8e[_0xe24d79(0x428)+_0xe24d79(0x615)],_0x331b79=>{var _0x1936ce=_0xe24d79,_0x28d379={'szMOh':function(_0x2ac2d5){return _0x2ac2d5();},'FNMcV':function(_0x46ce03,_0xd38ba9,_0x3083fa,_0xabe588,_0x469efa,_0x202e96){return _0x3da9ff['SYanM'](_0x46ce03,_0xd38ba9,_0x3083fa,_0xabe588,_0x469efa,_0x202e96);},'ukVXE':function(_0x46c360,_0xbcadb4){return _0x46c360(_0xbcadb4);},'JhDkB':'Takes'+'\x20effe'+_0x1936ce(0x1a0)+_0x1936ce(0x2f9)+'ad\x20wh'+_0x1936ce(0x62f)+'ggled'+'.'};if('hZRsA'!==_0x3da9ff['vtVih'])_0x16fe8e[_0x1936ce(0x428)+_0x1936ce(0x615)]=_0x331b79,_0x3da9ff['gyPFR'](_0x501608);else{var _0x4063e2={'DNHue':function(_0x512c39){var _0x456420=_0x1936ce;return _0x28d379[_0x456420(0x36e)](_0x512c39);}};return[_0x28d379[_0x1936ce(0x3f5)](_0x7ef805,_0x1936ce(0x609)+'ck',_0x1936ce(0x58b)+'\x20kour'+_0x1936ce(0x614)+_0x1936ce(0x525)+'er\x20sl'+_0x1936ce(0x4d1),_0x33c298['adblo'+'ck'],_0x50bee7=>{_0x250c09['adblo'+'ck']=_0x50bee7,_0x4063e2['DNHue'](_0x5f221b);},[_0x28d379[_0x1936ce(0x6d9)](_0x1be8e3,_0x28d379[_0x1936ce(0x297)])])];}},[]),_0x4b78bb['YcwAT'](_0x24d071,_0x4b78bb[_0xe24d79(0x208)],_0x4b78bb[_0xe24d79(0x3a6)],_0x16fe8e[_0xe24d79(0x1d5)+'Exp'],_0x51cabd=>{var _0x339e98=_0xe24d79;_0x16fe8e[_0x339e98(0x1d5)+'Exp']=_0x51cabd,_0x501608();},[]),_0x24d071(_0x4b78bb[_0xe24d79(0x381)],_0xe24d79(0x2d1)+_0xe24d79(0x302)+'\x20Over'+_0xe24d79(0x4a2)+'eapon'+_0xe24d79(0x153)+'ge.\x20B'+_0xe24d79(0x509)+_0xe24d79(0x68f)+'\x20the\x20'+_0xe24d79(0x449)+_0xe24d79(0x688)+_0xe24d79(0x432)+'s.',_0x16fe8e[_0xe24d79(0x142)+'eExp'],_0x315580=>{var _0xb37ce=_0xe24d79;_0x16fe8e[_0xb37ce(0x142)+'eExp']=_0x315580,_0x4b78bb[_0xb37ce(0x402)](_0x501608);},[_0x5bc62c(_0xe24d79(0x61e)+'e\x20val'+'ue',null,_0x3cbbf6(_0x16fe8e['damag'+_0xe24d79(0x4a8)+'e'],-0x17b2+-0x5b1+0x1*0x1d6d,0xd7*0x16+-0x634*0x4+0x1*0x84a,0x1b76+-0x1355*-0x1+-0x2ec6,_0x4630cb=>{var _0x51561a=_0xe24d79;_0x16fe8e[_0x51561a(0x142)+_0x51561a(0x4a8)+'e']=_0x4630cb,_0x501608();}))]),_0x4b78bb[_0xe24d79(0x556)](_0x24d071,_0x4b78bb['FcaME'],_0xe24d79(0x437)+_0xe24d79(0x37c)+'e\x20wea'+'pon\x27s'+_0xe24d79(0x319)+'ed\x20am'+'mo\x20to'+'\x20999\x20'+'every'+'\x20200m'+'s.',_0x16fe8e['infAm'+_0xe24d79(0x1d7)],_0x1181de=>{_0x16fe8e['infAm'+'moExp']=_0x1181de,_0x501608();},[_0x34be0e(_0xe24d79(0x186)+'loads'+_0xe24d79(0x656)+_0xe24d79(0x1ad)+_0xe24d79(0x240)+'he\x20de'+'creme'+'nt\x20ha'+_0xe24d79(0x3ef)+_0xe24d79(0x32c)+'where'+'.')])];if(_0x4b78bb['WLRnJ'](_0x276986,'move'))return[_0x24d071(_0xe24d79(0x20f),_0xe24d79(0x5cf)+_0xe24d79(0x3b1)+_0xe24d79(0x5d0)+'\x20Move'+'ment\x20'+_0xe24d79(0x18d)+'\x20limi'+'ts\x20pl'+_0xe24d79(0x552)+_0xe24d79(0x501)+_0xe24d79(0x6c6)+'.',_0x16fe8e[_0xe24d79(0x18d)+_0xe24d79(0x255)]!==-0x6*-0x434+0x1f02+-0x37d6,null,[_0x4b78bb['ujzAR'](_0x5bc62c,_0xe24d79(0x20f)+'\x20%',_0xe24d79(0x6a8)+_0xe24d79(0x453)+_0xe24d79(0x1ef),_0x4b78bb[_0xe24d79(0x556)](_0x3cbbf6,_0x16fe8e['speed'+_0xe24d79(0x255)],0x144a+-0xd1d+0x6fb*-0x1,-0x904+-0x270b+0x313b,-0x2707+-0x2455+0x4b61,_0x5fdb41=>{var _0x1ab2bb=_0xe24d79;_0x16fe8e['speed'+_0x1ab2bb(0x255)]=_0x5fdb41,_0x3da9ff[_0x1ab2bb(0x5f7)](_0x501608);}))]),_0x24d071(_0xe24d79(0x1f2)+'/\x20Gra'+'vity',_0xe24d79(0x5cf)+'s\x20Mov'+'ement'+_0xe24d79(0x602)+_0xe24d79(0x58f)+'\x20and\x20'+'both\x20'+_0xe24d79(0x179)+_0xe24d79(0x13d)+_0xe24d79(0x15f),_0x16fe8e['jumpP'+'ct']!==0x1113*-0x1+0x24f7*-0x1+0x366e||_0x4b78bb[_0xe24d79(0x553)](_0x16fe8e['gravi'+'tyPct'],-0x159c+-0x422*-0x3+0x99a),null,[_0x5bc62c(_0x4b78bb['VgMrP'],null,_0x3cbbf6(_0x16fe8e[_0xe24d79(0x377)+'ct'],-0xf49+0x1168+-0x1ed,0x348+-0x20c*0x11+0x20b0,0x4*0x6be+0x109*0x3+-0x1e0e,_0x36e324=>{var _0xceed5e=_0xe24d79;_0x16fe8e[_0xceed5e(0x377)+'ct']=_0x36e324,_0x3da9ff[_0xceed5e(0x5f7)](_0x501608);})),_0x4b78bb[_0xe24d79(0x599)](_0x5bc62c,_0xe24d79(0x53c)+_0xe24d79(0x25a),_0xe24d79(0x692)+_0xe24d79(0x43b)+_0xe24d79(0x6bf),_0x3cbbf6(_0x16fe8e[_0xe24d79(0x179)+_0xe24d79(0x3a4)],-0xc82+0x1*-0x23a5+0x49*0xa9,0x11f*0xe+-0x1*0x1055+-0x79*-0x3,-0x448+-0x1267+0x16b4,_0x1a79aa=>{var _0x314a48=_0xe24d79,_0xb784d={'ApkIL':function(_0x20724f,_0x510f99){return _0x3da9ff['AcUBe'](_0x20724f,_0x510f99);},'zQcfN':_0x3da9ff[_0x314a48(0x259)],'QTBkY':function(_0x24d360,_0x364ff6){return _0x24d360/_0x364ff6;},'TwkjD':function(_0x4367d5,_0x2819e9){return _0x4367d5+_0x2819e9;},'dPmYq':function(_0xb5938a,_0x1849df){return _0xb5938a*_0x1849df;}};_0x314a48(0x483)===_0x3da9ff['zSCAR']?(_0x16fe8e[_0x314a48(0x179)+'tyPct']=_0x1a79aa,_0x501608()):(_0x253345[_0x314a48(0x2e5)]=_0xb784d[_0x314a48(0x4cf)](_0x314a48(0x50c),_0x360027['round']((0x225a+0x1*-0x6bb+0x6b*-0x42)*_0x47df9f))+_0xb784d[_0x314a48(0x19d)],_0x2a3657['fillS'+'tyle']=_0x4df1b4?_0x314a48(0x318):'rgba('+'255,2'+_0x314a48(0x37a)+_0x314a48(0x50b)+'5)',_0x159643[_0x314a48(0x290)+_0x314a48(0x58a)](_0x53aaed,_0xb784d['ApkIL'](_0x217ce1,_0xb784d['QTBkY'](_0x28a8b7,0x15c6*0x1+-0x6c9+-0xefb)),_0xb784d[_0x314a48(0x28c)](_0x2633b0+_0x452c38/(-0x1a33+0x1372+0x6c3),_0xb784d['dPmYq'](-0x24*-0x8+-0x15*0x14b+0x1a0f,_0x367931))));}))]),_0x4b78bb[_0xe24d79(0x388)](_0x24d071,_0xe24d79(0x3e4)+_0xe24d79(0x498),_0xe24d79(0x29e)+'s\x20Mov'+'ement'+'.last'+'JumpT'+_0xe24d79(0x3bb)+_0xe24d79(0x28b)+'\x20jump'+'\x20cool'+'down\x20'+_0xe24d79(0x568)+_0xe24d79(0x5ea)+_0xe24d79(0x3a9),_0x16fe8e['bhop'],_0x2fa684=>{var _0x5426a0=_0xe24d79;_0x4b78bb[_0x5426a0(0x29c)]!==_0x4b78bb['Ibrty']?_0x39617e['enabl'+'ed']=![]:(_0x16fe8e[_0x5426a0(0x473)]=_0x2fa684,_0x4b78bb[_0x5426a0(0x4ee)](_0x501608));},[])];if(_0x276986==='visua'+'l')return[_0x24d071('Keyst'+_0xe24d79(0x56c),'WASD\x20'+_0xe24d79(0x4bd)+_0xe24d79(0x3fb)+_0xe24d79(0x14b)+'ce\x20ov'+'erlay'+'.',_0x16fe8e[_0xe24d79(0x2f5)+_0xe24d79(0x56c)],_0x43f773=>{var _0x479cb0=_0xe24d79;if(_0x3da9ff[_0x479cb0(0x681)](_0x3da9ff[_0x479cb0(0x559)],_0x3da9ff[_0x479cb0(0x512)])){var _0x12b4b3=_0x49b2da[_0x479cb0(0x346)+_0x479cb0(0x447)]({'typeName':_0xdb117,'methodName':_0x5c3129,'params':_0x329f37,'returnType':_0x479e24},_0x5e6cae);return _0x12b4b3[_0x479cb0(0x536)+'ed']=_0x21b321!==![],_0x455d8f[_0x543db6]=_0x12b4b3,_0x116f84['hooks'+'Total']++,_0x12b4b3;}else _0x16fe8e[_0x479cb0(0x2f5)+_0x479cb0(0x56c)]=_0x43f773,_0x501608();},[_0x5bc62c(_0x4b78bb[_0xe24d79(0x241)],null,_0x4b78bb['UrCnJ'](_0x12148b,_0x16fe8e[_0xe24d79(0x4e5)],[['bl',_0xe24d79(0x529)+'m\x20lef'+'t'],['br','Botto'+_0xe24d79(0x635)+'ht'],['ml',_0xe24d79(0x292)+_0xe24d79(0x33b)+'e']],_0x304aae=>{var _0x532801=_0xe24d79;_0x16fe8e['ksPos']=_0x304aae,_0x4b78bb[_0x532801(0x32f)](_0x501608);})),_0x4b78bb[_0xe24d79(0x19a)](_0x5bc62c,'Size',null,_0x4b78bb[_0xe24d79(0x273)](_0x3cbbf6,_0x16fe8e['ksSca'+'le'],0x406+-0x13*0x2+-0x4*0xf8+0.6,-0xbeb+-0x3*-0x5a5+-0x503+0.6000000000000001,0x1c3+-0xa83*0x2+0x1343+0.05,_0x158ad7=>{var _0x34dd07=_0xe24d79;_0x16fe8e[_0x34dd07(0x436)+'le']=_0x158ad7,_0x501608();})),_0x5bc62c(_0xe24d79(0x5bb)+_0xe24d79(0x567)+'t',null,_0x4b78bb['XUcLX'](_0xb9a32e,_0x16fe8e['ksCps'],_0x25f631=>{var _0x5ecdda=_0xe24d79,_0x58f3dd={'hlWkW':function(_0x1793f2,_0x3ff58b,_0x56791d,_0x3639d4,_0x4748b9){var _0x56fd58=_0x3f97;return _0x3da9ff[_0x56fd58(0x464)](_0x1793f2,_0x3ff58b,_0x56791d,_0x3639d4,_0x4748b9);}};_0x5ecdda(0x271)===_0x5ecdda(0x271)?(_0x16fe8e['ksCps']=_0x25f631,_0x3da9ff[_0x5ecdda(0x21e)](_0x501608)):(_0x23773c(_0x135dcb,0x11*-0xa+0x1f9d*-0x1+0x208f,'f32',_0x13d1ab),_0x58f3dd['hlWkW'](_0x243026,_0x3465c5,0x28*-0xbb+-0x15f*-0xd+-0x29*-0x49,'f32',_0x5832ea));}))]),_0x24d071(_0x4b78bb['gSWNt'],_0x4b78bb[_0xe24d79(0x3cf)],_0x16fe8e[_0xe24d79(0x629)+_0xe24d79(0x4fd)],_0x25362a=>{var _0x446d42=_0xe24d79;if('gviWU'!==_0x3da9ff[_0x446d42(0x541)])try{_0x2319b8[_0x446d42(0x536)+'ed']=![];}catch(_0x2002d9){}else _0x16fe8e[_0x446d42(0x629)+_0x446d42(0x4fd)]=_0x25362a,_0x501608();},[_0x4b78bb['TnHqk'](_0x5bc62c,'Size',null,_0x3cbbf6(_0x16fe8e['chSiz'+'e'],-0x2*0x12e+-0x1761+0xb*0x257+0.5,0x2e7*0x1+0x1a*0x1+-0x2ff+0.5,-0x1003+-0x2*0x466+0x18cf+0.1,_0x4acb43=>{var _0x41d47d=_0xe24d79,_0x3e6109={'xTOPT':function(_0x4f34d5,_0x2ed693){var _0xa45546=_0x3f97;return _0x3da9ff[_0xa45546(0x287)](_0x4f34d5,_0x2ed693);},'rdiRB':'left','vZJgW':'\x20FPS'};if(_0x3da9ff['Gwnek'](_0x41d47d(0x23a),_0x41d47d(0x23a))){_0x318abe[_0x41d47d(0x417)](),_0x4412dd[_0x41d47d(0x2e5)]='600\x201'+_0x41d47d(0x193)+'i-mon'+_0x41d47d(0x54b)+_0x41d47d(0x1c6)+'ospac'+'e',_0x4419f1[_0x41d47d(0x6c3)+'lign']=_0x3e6109[_0x41d47d(0x3d8)],_0x5a07ea['textB'+_0x41d47d(0x470)+'ne']=_0x41d47d(0x2e9);var _0x55a4da=-0x1b05*0x1+-0x2b*0xd+0x1d60,_0x5bc68b=-0x238e+-0x5*-0x11b+0x1e13,_0x11fa97=(_0x3e94e1,_0x14240a)=>{var _0x4dd662=_0x41d47d;_0x5e1972['fillS'+_0x4dd662(0x6bd)]=_0x3e6109[_0x4dd662(0x543)](_0x14240a,_0x4dd662(0x5c0)+_0x4dd662(0x53b)+_0x4dd662(0x37a)+_0x4dd662(0x466)+'5)'),_0x2c2e4e['fillT'+_0x4dd662(0x58a)](_0x3e94e1,_0x5bc68b,_0x55a4da),_0x55a4da+=0x5a*0xf+-0xe88+0x952;};_0x11fa97(_0x41d47d(0x533)+_0x41d47d(0x22c)+'R\x20v1.'+'1','#ff6b'+'9d');if(_0xfc4d9e[_0x41d47d(0x25f)])_0x11fa97(_0x31ed15+_0x3e6109[_0x41d47d(0x1d8)]);if(!_0x2d0d56[_0x41d47d(0x54c)+_0x41d47d(0x229)])_0x11fa97(_0x41d47d(0x4fa)+_0x41d47d(0x1a6)+_0x41d47d(0x2ad)+'e…','rgba('+'255,1'+_0x41d47d(0x4f2)+_0x41d47d(0x3ad)+')');_0xfc93fb[_0x41d47d(0x1be)+'re']();}else _0x16fe8e['chSiz'+'e']=_0x4acb43,_0x3da9ff['RHOMd'](_0x501608);})),_0x4b78bb[_0xe24d79(0x2b0)](_0x5bc62c,'Color',null,_0x4b78bb['XUcLX'](_0x1d16b9,_0x16fe8e[_0xe24d79(0x23d)+'or'],_0x52212b=>{var _0x2668b8=_0xe24d79;_0x16fe8e[_0x2668b8(0x23d)+'or']=_0x52212b,_0x501608();}))]),_0x24d071('Count'+'ers',_0xe24d79(0x389)+_0xe24d79(0x502)+'y.',_0x16fe8e['fps'],null,[_0x5bc62c(_0xe24d79(0x3a0)+_0xe24d79(0x5f4)+'r',null,_0xb9a32e(_0x16fe8e[_0xe24d79(0x25f)],_0x3fe4f0=>{var _0x4b5b6c=_0xe24d79;_0x16fe8e[_0x4b5b6c(0x25f)]=_0x3fe4f0,_0x501608();})),_0x34be0e(_0x4b78bb[_0xe24d79(0x39d)])])];if(_0x276986===_0xe24d79(0x3e3))return[_0x24d071(_0xe24d79(0x609)+'ck',_0x4b78bb[_0xe24d79(0x570)],_0x16fe8e['adblo'+'ck'],_0x14c930=>{var _0x5968f6=_0xe24d79;if(_0x5968f6(0x138)!==_0x5968f6(0x138)){var _0x3dceff=_0x19674e['creat'+_0x5968f6(0x25b)+_0x5968f6(0x423)](_0x5968f6(0x63b));return _0x3dceff['class'+_0x5968f6(0x64a)]=_0x3da9ff['AcUBe'](_0x5968f6(0x299)+'te',_0x50ac14?_0x3da9ff['TKhbA']:''),_0x3dceff[_0x5968f6(0x5ec)+'onten'+'t']=_0x4f5847,_0x3dceff;}else _0x16fe8e['adblo'+'ck']=_0x14c930,_0x501608();},[_0x34be0e(_0xe24d79(0x693)+'\x20effe'+'ct\x20on'+_0xe24d79(0x2f9)+'ad\x20wh'+_0xe24d79(0x62f)+_0xe24d79(0x4b9)+'.')])];return[_0x4b78bb[_0xe24d79(0x5d2)](_0x24d071,_0x4b78bb['GhsHb'],_0xe24d79(0x67a)+_0xe24d79(0x6bb)+_0xe24d79(0x300)+_0xe24d79(0x457)+'—\x20no\x20'+_0xe24d79(0x298)+'hooks'+_0xe24d79(0x24a)+'\x20this'+_0xe24d79(0x137)+'atche'+_0xe24d79(0x301)+_0xe24d79(0x1f6)+_0xe24d79(0x59f),_0x16fe8e[_0xe24d79(0x4b1)+'ode'],_0xe475b6=>{var _0x2ac19d=_0xe24d79;_0x16fe8e[_0x2ac19d(0x4b1)+_0x2ac19d(0x60a)]=_0xe475b6,_0x4b78bb['cjOnT'](_0x501608),location[_0x2ac19d(0x451)+'d']();},[_0x34be0e(_0xe24d79(0x310)+_0xe24d79(0x183)+_0xe24d79(0x2f9)+'ad.\x20I'+_0xe24d79(0x3b2)+_0xe24d79(0x6e6)+'load\x20'+_0xe24d79(0x634)+_0xe24d79(0x482)+_0xe24d79(0x1bc)+'he\x20fr'+_0xe24d79(0x341)+_0xe24d79(0x3d3)+'ok-re'+_0xe24d79(0x427)+'\x20—\x20te'+_0xe24d79(0x12a)+_0xe24d79(0x2f2)+_0xe24d79(0x327)+_0xe24d79(0x198)+_0xe24d79(0x6dc)+_0xe24d79(0x40e))]),_0x24d071(_0x4b78bb[_0xe24d79(0x45b)],_0xe24d79(0x53f)+_0xe24d79(0x286)+'nstal'+_0xe24d79(0x5b4)+_0xe24d79(0x298)+_0xe24d79(0x554)+'oline'+_0xe24d79(0x6d5)+_0xe24d79(0x650)+_0xe24d79(0x5e5)+'page\x20'+_0xe24d79(0x4d0)+_0xe24d79(0x514)+_0xe24d79(0x35b)+_0xe24d79(0x61a)+_0xe24d79(0x558)+_0xe24d79(0x418)+'ignat'+_0xe24d79(0x12e)+'hat\x20d'+_0xe24d79(0x555)+'ot\x20ma'+_0xe24d79(0x6b3)+_0xe24d79(0x1ac)+'al\x20me'+'thod\x20'+_0xe24d79(0x4e3)+_0xe24d79(0x618)+_0xe24d79(0x1eb)+'n\x20sig'+'natur'+_0xe24d79(0x2bb)+_0xe24d79(0x611)+'\x27\x20the'+_0xe24d79(0x52c)+_0xe24d79(0x14f)+_0xe24d79(0x4ce)+'alled'+'.\x20Tur'+'n\x20the'+'m\x20on\x20'+_0xe24d79(0x257)+_0xe24d79(0x63d)+_0xe24d79(0x1b0)+_0xe24d79(0x451)+'d,\x20an'+'d\x20see'+'\x20whic'+_0xe24d79(0x2d2)+'\x20your'+'\x20buil'+'d\x20cho'+'kes\x20o'+'n.',_0x16fe8e[_0xe24d79(0x218)+'od']||_0x16fe8e[_0xe24d79(0x218)+'odDie']||_0x16fe8e['hookN'+_0xe24d79(0x40b)+'il']||_0x16fe8e['hookC'+_0xe24d79(0x47c)+'e'],_0x3a5f02=>{var _0x5ad0b9=_0xe24d79;if(_0x3da9ff['nGEIV']==='gDTNN')_0x16fe8e[_0x5ad0b9(0x218)+'od']=_0x3a5f02,_0x16fe8e[_0x5ad0b9(0x218)+_0x5ad0b9(0x235)]=_0x3a5f02,_0x16fe8e[_0x5ad0b9(0x582)+'oReco'+'il']=_0x3a5f02,_0x16fe8e['hookC'+_0x5ad0b9(0x47c)+'e']=_0x3a5f02,_0x3da9ff['gyPFR'](_0x501608),location['reloa'+'d']();else try{var _0x4b8871=_0x598943[_0x5ad0b9(0x346)+_0x5ad0b9(0x20b)+'x']({'typeName':_0x419088,'methodName':_0x30b37c,'params':_0x3216b9,'returnType':_0x16e78a},_0x4ad134);return _0x4b8871['enabl'+'ed']=_0x3da9ff[_0x5ad0b9(0x144)](_0x1d38f6,![]),_0x3d6e36[_0x3e0f3a]=_0x4b8871,_0xe7260a[_0x5ad0b9(0x327)+'Total']++,_0x4b8871;}catch(_0x2f3db0){return _0x53f536[_0x5ad0b9(0x260)](_0x3da9ff[_0x5ad0b9(0x408)],_0x150449,_0x2f3db0&&_0x2f3db0['messa'+'ge']),null;}},[_0x34be0e(_0x4b78bb['bOGdZ']),_0x4b78bb[_0xe24d79(0x2b0)](_0x5bc62c,_0x4b78bb[_0xe24d79(0x32a)],null,_0xb9a32e(_0x16fe8e[_0xe24d79(0x218)+'od'],_0xf1dec1=>{var _0x1e9307=_0xe24d79;_0x16fe8e[_0x1e9307(0x218)+'od']=_0xf1dec1,_0x3da9ff['jEhhB'](_0x501608);})),_0x4b78bb['UrCnJ'](_0x5bc62c,_0x4b78bb['TGHHy'],null,_0xb9a32e(_0x16fe8e[_0xe24d79(0x218)+'odDie'],_0x5f56df=>{var _0x42e768=_0xe24d79,_0x36d7c3={'MoOLW':'shoot'+_0x42e768(0x155)};'aldDX'===_0x4b78bb['hImeA']?(_0x16fe8e[_0x42e768(0x218)+'odDie']=_0x5f56df,_0x4b78bb[_0x42e768(0x4ee)](_0x501608)):_0x30aa40(_0xc7bf16,_0x4b0a50,_0x17cf24,_0x36d7c3[_0x42e768(0x200)]);})),_0x5bc62c(_0x4b78bb[_0xe24d79(0x5d4)],null,_0x4b78bb[_0xe24d79(0x304)](_0xb9a32e,_0x16fe8e['hookN'+_0xe24d79(0x40b)+'il'],_0x5348b1=>{var _0x3646e7=_0xe24d79;if('CuFlX'!==_0x4b78bb[_0x3646e7(0x313)]){var _0xa28b4b=_0x3d3733[_0x3646e7(0x226)+'creen'+'Eleme'+'nt'],_0xc7a5b8=_0xa28b4b&&_0xa28b4b['tagNa'+'me']!==_0x3646e7(0x182)+'S'?_0xa28b4b:_0x320ca7[_0x3646e7(0x258)]||_0x590219[_0x3646e7(0x42e)+_0x3646e7(0x607)+_0x3646e7(0x178)];if(_0x3a8753['paren'+_0x3646e7(0x210)]!==_0xc7a5b8)_0xc7a5b8[_0x3646e7(0x3b5)+'dChil'+'d'](_0x2b0fb4);}else _0x16fe8e[_0x3646e7(0x582)+_0x3646e7(0x40b)+'il']=_0x5348b1,_0x501608();})),_0x5bc62c(_0x4b78bb[_0xe24d79(0x1ae)],_0xe24d79(0x3fe)+_0xe24d79(0x4c5)+'work\x20'+_0xe24d79(0x43c)+_0xe24d79(0x401)+'is',_0x4b78bb['nzakP'](_0xb9a32e,_0x16fe8e[_0xe24d79(0x5a6)+_0xe24d79(0x47c)+'e'],_0x5b18ac=>{var _0x158759=_0xe24d79;_0x16fe8e[_0x158759(0x5a6)+'aptur'+'e']=_0x5b18ac,_0x4b78bb['gmiQH'](_0x501608);}))]),_0x24d071('ACTk\x20'+'Kille'+'r',_0xe24d79(0x1d4)+_0xe24d79(0x6e8)+_0xe24d79(0x23c)+'age\x20d'+'etect'+_0xe24d79(0x53e)+_0xe24d79(0x175)+_0xe24d79(0x5dd)+'via\x20S'+'topDe'+_0xe24d79(0x3aa)+'on().'+'\x20Keep'+'\x20ON.',_0x16fe8e[_0xe24d79(0x1df)+_0xe24d79(0x343)],_0x4edda3=>{var _0x42c35e=_0xe24d79;if('KJrOe'===_0x42c35e(0x54a))_0x16fe8e[_0x42c35e(0x1df)+_0x42c35e(0x343)]=_0x4edda3,_0x3da9ff[_0x42c35e(0x39a)](_0x501608);else{var _0x156b05=_0x3da9ff[_0x42c35e(0x1a2)]['split']('|'),_0x102546=-0x36*0x63+-0x1b63+-0x9*-0x55d;while(!![]){switch(_0x156b05[_0x102546++]){case'0':_0x3da9ff[_0x42c35e(0x132)](_0x3da9ff['vUCyH'](_0x32f35b,_0x19ebeb),-0x1*0x143b+0x2*0x2a9+0x10dd)&&(_0x4a133d=_0x1e6119['round'](_0x3da9ff[_0x42c35e(0x680)](_0x49a10c*(0x1d9b+0xc48+-0xca9*0x3),_0x32f35b-_0x477849)),_0x4b36ac=-0xb9+-0xf67*0x1+0x56*0x30,_0x11e917=_0x32f35b);continue;case'1':var _0x32f35b=_0x186a27[_0x42c35e(0x532)]();continue;case'2':_0x28c1db(_0x536ebe);continue;case'3':_0x3a950b[_0x42c35e(0x68c)+_0x42c35e(0x6e1)](-0x18de+0xcec*0x1+0xbf2,-0x22b1*-0x1+-0xc84*-0x3+-0x483d,_0xa77668['w'],_0x428d31['h']);continue;case'4':if(_0xd5595c['keyst'+_0x42c35e(0x56c)])_0x3da9ff['UyNjR'](_0x69c78a,_0x4e88df);continue;case'5':var _0x4e88df={'left':0x0,'top':0x0,'right':_0x3e8373['w'],'bottom':_0x1e70fa['h'],'width':_0x18c99b['w'],'height':_0x177b60['h']};continue;case'6':_0x4da249(_0x4e88df);continue;case'7':_0x28ebca++;continue;case'8':if(_0x26a37c[_0x42c35e(0x629)+'hair'])_0x6bfb66(_0x4e88df);continue;case'9':_0x3b1b6b();continue;case'10':_0x1951f8();continue;}break;}}},[_0x34be0e(_0x4b78bb[_0xe24d79(0x2f1)],!![])]),_0x4b78bb[_0xe24d79(0x388)](_0x24d071,'Dange'+'r',_0x4b78bb['UmXqx'],!![],null,[_0x4b78bb['UrCnJ'](_0x5bc62c,'Wipe\x20'+'my\x20se'+_0xe24d79(0x194)+'s',null,_0x2cce7a(_0xe24d79(0x5de),()=>{var _0x3fe9b2=_0xe24d79;_0x16fe8e={..._0x54324a},_0x501608(),location[_0x3fe9b2(0x451)+'d']();}))])];}var _0x277762=null;function _0x311f18(_0x214f2e){var _0xa7e2a0=_0x3b7b3a;_0x3800a4=_0x214f2e;if(!_0x277762){var _0x42c455=_0x4b78bb[_0xa7e2a0(0x409)][_0xa7e2a0(0x13c)]('|'),_0x1db832=-0x2*-0x85+0x21*-0xa1+0x2d1*0x7;while(!![]){switch(_0x42c455[_0x1db832++]){case'0':_0x277762=_0x4b78bb[_0xa7e2a0(0x227)](_0x137d22);continue;case'1':_0x4b78bb['DgXEH'](requestAnimationFrame,()=>_0x277762[_0xa7e2a0(0x63f)+_0xa7e2a0(0x4d3)][_0xa7e2a0(0x188)](_0xa7e2a0(0x516)));continue;case'2':_0x3ca0e4[_0xa7e2a0(0x3b5)+_0xa7e2a0(0x4eb)+'d'](_0x277762);continue;case'3':_0x3ca0e4[_0xa7e2a0(0x3b5)+_0xa7e2a0(0x4eb)+'d'](_0x1a38c2);continue;case'4':var _0x1a38c2=document[_0xa7e2a0(0x67f)+'eElem'+_0xa7e2a0(0x423)](_0x4b78bb['qtnvh']);continue;case'5':_0x1a38c2['textC'+'onten'+'t']=_0x4023a3;continue;}break;}}_0x277762['class'+_0xa7e2a0(0x4d3)]['toggl'+'e'](_0xa7e2a0(0x516),_0x214f2e);}function _0x213810(){var _0x298297=_0x3b7b3a;_0x4b78bb['GJRbe'](_0x4b78bb['gjbPP'],'oytcv')?(_0x8c23b6['shado'+'wColo'+'r']=_0x23997d,_0x4eb6b9['shado'+_0x298297(0x3c7)]=0xdea*0x1+-0xd0f+0x1*-0xcd,_0x3bc5cc[_0x298297(0x48a)](),_0x1d7f1b['shado'+_0x298297(0x3c7)]=0xce0+-0x1340+0x660):_0x311f18(!_0x3800a4);}function _0x137d22(){var _0x6dccff=_0x3b7b3a,_0x238bed={'TLZTA':function(_0x4bb3e6,_0x3d4b18){return _0x4bb3e6+_0x3d4b18;},'UBeGM':function(_0x2108dd,_0x147edb){return _0x2108dd(_0x147edb);},'tUcBE':_0x4b78bb[_0x6dccff(0x5b1)],'cdAco':function(_0x2ec023,_0x5b741a){return _0x2ec023<_0x5b741a;},'cdIoK':function(_0x574dc0,_0x59b984){var _0x8388cb=_0x6dccff;return _0x4b78bb[_0x8388cb(0x553)](_0x574dc0,_0x59b984);},'ckXXI':function(_0x4811b5,_0x141c47){return _0x4811b5===_0x141c47;},'FmaSc':function(_0x1e85c6,_0x3095a8){return _0x1e85c6===_0x3095a8;},'wcUVt':_0x4b78bb[_0x6dccff(0x3b6)],'keWCc':_0x4b78bb['EMZqg'],'Irrfk':'held','GvRBp':_0x6dccff(0x1a7)+'R:\x20'},_0x25f9b1=document[_0x6dccff(0x67f)+_0x6dccff(0x25b)+_0x6dccff(0x423)](_0x6dccff(0x63b));_0x25f9b1[_0x6dccff(0x63f)+'Name']=_0x6dccff(0x4ed)+_0x6dccff(0x43f);var _0x451fc8=document[_0x6dccff(0x67f)+_0x6dccff(0x25b)+_0x6dccff(0x423)](_0x6dccff(0x18f));_0x451fc8[_0x6dccff(0x63f)+_0x6dccff(0x64a)]=_0x4b78bb[_0x6dccff(0x50d)];var _0x1d914f=document[_0x6dccff(0x67f)+_0x6dccff(0x25b)+'ent'](_0x6dccff(0x63b));_0x1d914f['class'+'Name']=_0x6dccff(0x617)+'go',_0x1d914f[_0x6dccff(0x665)+_0x6dccff(0x2f3)]='<svg\x20'+_0x6dccff(0x57e)+'ox=\x220'+_0x6dccff(0x369)+'\x2024\x22\x20'+'class'+'=\x22mn-'+_0x6dccff(0x433)+'svg\x22>'+_0x6dccff(0x1b3)+_0x6dccff(0x228)+'12\x2021'+_0x6dccff(0x5d1)+'-2.5-'+_0x6dccff(0x61d)+'-4-7.'+'5\x200-2'+'.5\x201.'+'8-4.5'+_0x6dccff(0x426)+_0x6dccff(0x46f)+_0x6dccff(0x236)+'5c0\x203'+_0x6dccff(0x2a3)+_0x6dccff(0x3d9)+'.5z\x22\x20'+_0x6dccff(0x557)+'\x22none'+'\x22\x20str'+_0x6dccff(0x4c7)+'#ff6b'+'9d\x22\x20s'+_0x6dccff(0x5ca)+_0x6dccff(0x3f9)+'h=\x222\x22'+'\x20stro'+_0x6dccff(0x5b2)+'necap'+_0x6dccff(0x246)+_0x6dccff(0x29f)+'troke'+_0x6dccff(0x600)+_0x6dccff(0x24f)+_0x6dccff(0x372)+_0x6dccff(0x353)+_0x6dccff(0x5ce)+_0x6dccff(0x48f)+'\x2212\x22\x20'+_0x6dccff(0x382)+_0x6dccff(0x19b)+_0x6dccff(0x65d)+'\x20fill'+_0x6dccff(0x5fa)+_0x6dccff(0x6ba)+_0x6dccff(0x528)+'vg>',_0x451fc8['appen'+_0x6dccff(0x4eb)+'d'](_0x1d914f);var _0x4ec546=document[_0x6dccff(0x67f)+_0x6dccff(0x25b)+'ent'](_0x4b78bb[_0x6dccff(0x265)]);_0x4ec546[_0x6dccff(0x63f)+_0x6dccff(0x64a)]=_0x6dccff(0x3ba)+'in';var _0x292234=document['creat'+_0x6dccff(0x25b)+_0x6dccff(0x423)](_0x4b78bb['fuVZk']);_0x292234[_0x6dccff(0x63f)+'Name']=_0x4b78bb[_0x6dccff(0x348)];var _0x511366=document['creat'+'eElem'+'ent'](_0x4b78bb[_0x6dccff(0x265)]);_0x511366['class'+_0x6dccff(0x64a)]=_0x6dccff(0x5af)+'tles';var _0x5de7a0=document[_0x6dccff(0x67f)+'eElem'+_0x6dccff(0x423)]('h2');_0x5de7a0[_0x6dccff(0x63f)+'Name']=_0x6dccff(0x3e9),_0x5de7a0['textC'+_0x6dccff(0x376)+'t']='Sakur'+'a\x20Kou'+'r';var _0x583893=document[_0x6dccff(0x67f)+'eElem'+'ent'](_0x4b78bb[_0x6dccff(0x173)]);_0x583893[_0x6dccff(0x63f)+_0x6dccff(0x64a)]=_0x4b78bb[_0x6dccff(0x224)],_0x583893['textC'+'onten'+'t']='kours'+_0x6dccff(0x5e0)+_0x6dccff(0x2fd)+'enu',_0x511366[_0x6dccff(0x3b5)+'d'](_0x5de7a0,_0x583893);var _0x2aa01b=document['creat'+_0x6dccff(0x25b)+_0x6dccff(0x423)](_0x4b78bb[_0x6dccff(0x136)]);_0x2aa01b['type']=_0x4b78bb['JyPdo'],_0x2aa01b[_0x6dccff(0x63f)+_0x6dccff(0x64a)]=_0x4b78bb['JYvIr'],_0x2aa01b['title']='Close',_0x2aa01b['inner'+_0x6dccff(0x2f3)]=_0x4b78bb['RmjSS'],_0x2aa01b[_0x6dccff(0x1db)+'ck']=()=>_0x311f18(![]),_0x292234[_0x6dccff(0x3b5)+'d'](_0x511366,_0x2aa01b);var _0x429e24=document['creat'+_0x6dccff(0x25b)+_0x6dccff(0x423)]('div');_0x429e24[_0x6dccff(0x63f)+_0x6dccff(0x64a)]=_0x6dccff(0x30f)+'ls',_0x4ec546['appen'+'d'](_0x292234,_0x429e24),_0x25f9b1[_0x6dccff(0x3b5)+'d'](_0x451fc8,_0x4ec546);var _0x2d82b9=new Map();for(var _0x5c2e8c of _0x1052e6){var _0x3f27b3=document[_0x6dccff(0x67f)+_0x6dccff(0x25b)+_0x6dccff(0x423)](_0x4b78bb[_0x6dccff(0x136)]);_0x3f27b3[_0x6dccff(0x344)]=_0x6dccff(0x5da)+'n',_0x3f27b3[_0x6dccff(0x63f)+'Name']=_0x6dccff(0x62a)+'b',_0x3f27b3[_0x6dccff(0x4b0)]=_0x5c2e8c['label'],_0x3f27b3[_0x6dccff(0x665)+_0x6dccff(0x2f3)]=_0x4b78bb['hoVLc'](_0x6dccff(0x1f5)+'l>',_0x5c2e8c[_0x6dccff(0x6e4)])+(_0x6dccff(0x46c)+_0x6dccff(0x474)),_0x3f27b3['oncli'+'ck']=(_0x48866b=>()=>_0x399149(_0x48866b))(_0x5c2e8c['id']),_0x2d82b9['set'](_0x5c2e8c['id'],_0x3f27b3),_0x451fc8[_0x6dccff(0x3b5)+'dChil'+'d'](_0x3f27b3);}function _0x399149(_0x518474){var _0x5ca6ee=_0x6dccff;_0x2f5369[_0x5ca6ee(0x181)]=_0x518474,_0x4e6a20();var _0xe899=_0x1052e6[_0x5ca6ee(0x1b1)](_0x87ae3=>_0x87ae3['id']===_0x518474)||_0x1052e6[-0x3*-0xa75+0x1de2+0x3*-0x146b];_0x5de7a0[_0x5ca6ee(0x5ec)+_0x5ca6ee(0x376)+'t']=_0x238bed[_0x5ca6ee(0x5f0)](_0x5ca6ee(0x2a4)+_0x5ca6ee(0x3fa)+'r\x20—\x20',_0xe899[_0x5ca6ee(0x6e4)]);for(var [_0x9c751e,_0x582afa]of _0x2d82b9)_0x582afa[_0x5ca6ee(0x63f)+_0x5ca6ee(0x4d3)]['toggl'+'e'](_0x5ca6ee(0x44e)+'e',_0x9c751e===_0x518474);_0x429e24[_0x5ca6ee(0x1e7)+'ceChi'+_0x5ca6ee(0x6ee)](..._0x238bed[_0x5ca6ee(0x410)](_0x2efec8,_0x518474));}return _0x4b78bb[_0x6dccff(0x2a6)](_0x399149,_0x2f5369['cat']||_0x6dccff(0x2fe)+'t'),setInterval(()=>{var _0x35eba3=_0x6dccff;if(!_0x3800a4)return;var _0x33897a=_0x429e24['child'+'ren'];for(var _0x36bcd=-0x556+-0x1302+-0x13*-0x148;_0x238bed[_0x35eba3(0x3bc)](_0x36bcd,_0x33897a[_0x35eba3(0x584)+'h']);_0x36bcd++){if(_0x238bed['cdIoK'](_0x35eba3(0x131),'UuYkp')){var _0x3e5e39=_0x33897a[_0x36bcd]['query'+'Selec'+'tor'](_0x35eba3(0x68a)+'desc');_0x3e5e39&&(_0x238bed[_0x35eba3(0x658)](_0x3e5e39[_0x35eba3(0x5ec)+_0x35eba3(0x376)+'t'][_0x35eba3(0x6cf)+'Of'](_0x35eba3(0x565)),-0xe67+0x245+0xc22)||_0x238bed['FmaSc'](_0x3e5e39['textC'+_0x35eba3(0x376)+'t'][_0x35eba3(0x6cf)+'Of'](_0x35eba3(0x4bb)),0x295*0x1+0xb*0x371+-0x2870))&&(_0x3e5e39[_0x35eba3(0x5ec)+_0x35eba3(0x376)+'t']=_0x3e250a['safeM'+_0x35eba3(0x60a)]?_0x35eba3(0x57d)+_0x35eba3(0x67e)+_0x35eba3(0x3bf)+_0x35eba3(0x1fd)+_0x35eba3(0x450)+'\x20no\x20h'+_0x35eba3(0x21a)+_0x35eba3(0x4be)+'ad\x20to'+_0x35eba3(0x270)+')':_0x3e250a['uwmk']?_0x238bed[_0x35eba3(0x5f0)](_0x35eba3(0x50e)+_0x35eba3(0x476)+'\x20',_0x3e250a[_0x35eba3(0x327)+_0x35eba3(0x362)]?_0x3e250a[_0x35eba3(0x327)+'Ok']+'/'+_0x3e250a['hooks'+'Total']+(_0x35eba3(0x4e1)+'s'):_0x35eba3(0x574)+_0x35eba3(0x1f1)+_0x35eba3(0x5e4)+_0x35eba3(0x5f9)+_0x35eba3(0x54f))+_0x238bed[_0x35eba3(0x6ae)]+(_0x3e250a['gameL'+_0x35eba3(0x229)]?_0x35eba3(0x57a)+'d':'loadi'+'ng')+_0x238bed[_0x35eba3(0x398)]+(_0x3e250a[_0x35eba3(0x357)+'ers']?_0x238bed[_0x35eba3(0x526)]:'none')+(_0x35eba3(0x206)+'vemen'+'t\x20')+(_0x3e250a[_0x35eba3(0x670)+_0x35eba3(0x1ca)]?_0x35eba3(0x151):_0x35eba3(0x2a5))+(_0x3e250a[_0x35eba3(0x56f)+'rror']?_0x238bed[_0x35eba3(0x5f0)](_0x238bed[_0x35eba3(0x162)],_0x3e250a['lastE'+_0x35eba3(0x585)]):''):_0x35eba3(0x50e)+'MISSI'+'NG\x20-\x20'+'overl'+_0x35eba3(0x3b7)+'ly\x20(r'+_0x35eba3(0x3c1)+_0x35eba3(0x1d2)+'he\x20us'+_0x35eba3(0x583)+'ipt)');}else{if(_0x50a15d[_0x35eba3(0x190)+_0x35eba3(0x204)])return;_0x21e377[_0x35eba3(0x188)](_0x238bed[_0x35eba3(0x6cc)]+(_0x4a0482[_0x35eba3(0x5da)+'n']+(0x2290+-0x1f61+-0x32e)));var _0xc7b2d3=_0x10e49e[_0x238bed[_0x35eba3(0x5f0)](_0x50f1c4[_0x35eba3(0x5da)+'n'],0x1fcc+-0x141d+-0xbae)];if(_0xc7b2d3){_0xc7b2d3[_0x35eba3(0x350)](_0x53033b['now']());if(_0xc7b2d3['lengt'+'h']>-0x1f0e+0x1*0x1bf4+0x342)_0xc7b2d3[_0x35eba3(0x442)]();}}}},0x1d72+-0x3e*0x43+0x2*-0x4a8),_0x25f9b1;}var _0x4023a3=_0x3b7b3a(0x2f0)+':host'+_0x3b7b3a(0x2d6)+'l:\x20in'+'itial'+';\x20}\x0a\x20'+_0x3b7b3a(0x1b4)+_0x3b7b3a(0x6b8)+'-sizi'+_0x3b7b3a(0x1cc)+'order'+_0x3b7b3a(0x394)+_0x3b7b3a(0x312)+_0x3b7b3a(0x245)+_0x3b7b3a(0x390)+'t-fam'+_0x3b7b3a(0x2ca)+'\x22Inte'+'r\x22,\x20\x22'+_0x3b7b3a(0x591)+_0x3b7b3a(0x169)+'\x20syst'+_0x3b7b3a(0x49c)+_0x3b7b3a(0x3eb)+'s-ser'+_0x3b7b3a(0x3b9)+_0x3b7b3a(0x2f0)+'.mn-p'+'anel\x20'+'{\x20pos'+_0x3b7b3a(0x1e3)+':\x20abs'+'olute'+_0x3b7b3a(0x1f7)+_0x3b7b3a(0x6da)+_0x3b7b3a(0x36f)+_0x3b7b3a(0x311)+_0x3b7b3a(0x3a1)+_0x3b7b3a(0x281)+_0x3b7b3a(0x3fd)+'\x20min('+_0x3b7b3a(0x326)+_0x3b7b3a(0x648)+_0x3b7b3a(0x6f7)+_0x3b7b3a(0x52e)+'48px)'+');\x20ma'+'x-hei'+_0x3b7b3a(0x366)+'min(4'+'80px,'+_0x3b7b3a(0x422)+'(100v'+_0x3b7b3a(0x696)+'8px))'+_0x3b7b3a(0x19c)+_0x3b7b3a(0x4da)+_0x3b7b3a(0x487)+_0x3b7b3a(0x2ba)+_0x3b7b3a(0x3ec)+'p:\x2010'+'px;\x20p'+'addin'+'g:\x2010'+_0x3b7b3a(0x463)+_0x3b7b3a(0x4c6)+'-radi'+'us:\x202'+_0x3b7b3a(0x47d)+_0x3b7b3a(0x220)+'er-ev'+'ents:'+'\x20auto'+_0x3b7b3a(0x19c)+'\x20\x20\x20ba'+_0x3b7b3a(0x4f5)+_0x3b7b3a(0x1c3)+_0x3b7b3a(0x5c0)+_0x3b7b3a(0x597)+',21,.'+_0x3b7b3a(0x488)+_0x3b7b3a(0x5f2)+_0x3b7b3a(0x4aa)+_0x3b7b3a(0x2d9)+_0x3b7b3a(0x2c9)+'r(22p'+'x)\x20sa'+'turat'+'e(150'+_0x3b7b3a(0x411)+_0x3b7b3a(0x431)+_0x3b7b3a(0x238)+_0x3b7b3a(0x1a4)+'-filt'+_0x3b7b3a(0x384)+'lur(2'+'2px)\x20'+_0x3b7b3a(0x593)+'ate(1'+_0x3b7b3a(0x145)+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x3b7b3a(0x215)+'ow:\x200'+_0x3b7b3a(0x5db)+_0x3b7b3a(0x213)+_0x3b7b3a(0x6af)+'55,25'+'5,255'+',.06)'+_0x3b7b3a(0x51c)+'et\x200\x20'+'1px\x200'+_0x3b7b3a(0x5ba)+'(255,'+_0x3b7b3a(0x53b)+_0x3b7b3a(0x6a7)+_0x3b7b3a(0x5aa)+_0x3b7b3a(0x296)+'\x2080px'+_0x3b7b3a(0x5ba)+_0x3b7b3a(0x1e1)+_0x3b7b3a(0x1cf)+');\x0a\x20\x20'+_0x3b7b3a(0x285)+_0x3b7b3a(0x34b)+_0x3b7b3a(0x6aa)+_0x3b7b3a(0x664)+'sform'+_0x3b7b3a(0x43e)+_0x3b7b3a(0x517)+_0x3b7b3a(0x569)+'px);\x20'+'point'+'er-ev'+_0x3b7b3a(0x40a)+_0x3b7b3a(0x5ac)+';\x20tra'+'nsiti'+_0x3b7b3a(0x3c4)+'pacit'+'y\x20.35'+'s\x20eas'+_0x3b7b3a(0x46a)+_0x3b7b3a(0x5a8)+'rm\x20.4'+_0x3b7b3a(0x33d)+'bic-b'+_0x3b7b3a(0x434)+_0x3b7b3a(0x5f5)+'1,.36'+',1);\x0a'+_0x3b7b3a(0x14a)+_0x3b7b3a(0x325)+_0x3b7b3a(0x27a)+_0x3b7b3a(0x694)+';\x20fon'+_0x3b7b3a(0x371)+_0x3b7b3a(0x603)+'px;\x20}'+_0x3b7b3a(0x2f0)+'.mn-p'+_0x3b7b3a(0x458)+'shown'+'\x20{\x20op'+'acity'+':\x201;\x20'+'trans'+_0x3b7b3a(0x5b7)+'\x20none'+';\x20poi'+'nter-'+_0x3b7b3a(0x4ef)+_0x3b7b3a(0x3f8)+_0x3b7b3a(0x468)+_0x3b7b3a(0x2f0)+_0x3b7b3a(0x177)+'ide\x20{'+_0x3b7b3a(0x268)+_0x3b7b3a(0x59b)+_0x3b7b3a(0x317)+'\x20flex'+'-dire'+'ction'+_0x3b7b3a(0x563)+'umn;\x20'+_0x3b7b3a(0x6db)+'-item'+_0x3b7b3a(0x3ab)+_0x3b7b3a(0x4f9)+_0x3b7b3a(0x1e0)+_0x3b7b3a(0x4ad)+'\x20widt'+'h:\x2062'+'px;\x20f'+'lex:\x20'+'none;'+_0x3b7b3a(0x461)+_0x3b7b3a(0x3f6)+'12px\x20'+(_0x3b7b3a(0x176)+'rder-'+_0x3b7b3a(0x4de)+_0x3b7b3a(0x22f)+_0x3b7b3a(0x337)+_0x3b7b3a(0x14a)+_0x3b7b3a(0x197)+_0x3b7b3a(0x147)+':\x20rgb'+_0x3b7b3a(0x274)+_0x3b7b3a(0x4a5)+_0x3b7b3a(0x3f4)+'025);'+'\x20box-'+_0x3b7b3a(0x6fa)+_0x3b7b3a(0x31c)+_0x3b7b3a(0x4ff)+_0x3b7b3a(0x5db)+'1px\x20r'+_0x3b7b3a(0x6af)+_0x3b7b3a(0x6b4)+_0x3b7b3a(0x58d)+',.05)'+_0x3b7b3a(0x360)+'\x20\x20\x20.m'+'n-log'+_0x3b7b3a(0x314)+_0x3b7b3a(0x27c)+_0x3b7b3a(0x320)+'id;\x20p'+_0x3b7b3a(0x26f)+_0x3b7b3a(0x130)+_0x3b7b3a(0x365)+'ter;\x20'+_0x3b7b3a(0x43a)+':\x2032p'+_0x3b7b3a(0x655)+'ight:'+_0x3b7b3a(0x641)+_0x3b7b3a(0x360)+_0x3b7b3a(0x4a7)+'n-log'+_0x3b7b3a(0x57b)+_0x3b7b3a(0x63a)+'dth:\x20'+_0x3b7b3a(0x5b0)+_0x3b7b3a(0x3c2)+'ht:\x202'+'5px;\x20'+'overf'+_0x3b7b3a(0x24b)+_0x3b7b3a(0x1a1)+'le;\x20f'+'ilter'+_0x3b7b3a(0x4f4)+_0x3b7b3a(0x6b0)+_0x3b7b3a(0x695)+'\x200\x204p'+'x\x20rgb'+'a(255'+_0x3b7b3a(0x1c4)+_0x3b7b3a(0x6c5)+'8));\x20'+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x527)+_0x3b7b3a(0x425)+'\x20disp'+_0x3b7b3a(0x59b)+_0x3b7b3a(0x317)+_0x3b7b3a(0x56b)+_0x3b7b3a(0x6f3)+_0x3b7b3a(0x5e2)+'enter'+';\x20jus'+_0x3b7b3a(0x32d)+_0x3b7b3a(0x1f0)+_0x3b7b3a(0x5b5)+'enter'+_0x3b7b3a(0x25d)+_0x3b7b3a(0x276)+'2px;\x20'+_0x3b7b3a(0x581)+'t:\x2034'+'px;\x20b'+_0x3b7b3a(0x4c6)+_0x3b7b3a(0x54e)+_0x3b7b3a(0x55c)+'r-rad'+'ius:\x20'+_0x3b7b3a(0x17f)+'\x0a\x20\x20\x20\x20'+_0x3b7b3a(0x27f)+_0x3b7b3a(0x676)+'nd:\x20t'+'ransp'+'arent'+';\x20col'+_0x3b7b3a(0x375)+'gba(2'+'46,23'+'8,242'+_0x3b7b3a(0x624)+'\x20curs'+_0x3b7b3a(0x4a9)+_0x3b7b3a(0x21c)+_0x3b7b3a(0x596)+_0x3b7b3a(0x4b5)+_0x3b7b3a(0x560)+'0px;\x20'+'font-'+_0x3b7b3a(0x2ea)+_0x3b7b3a(0x32e)+_0x3b7b3a(0x34d)+'\x20\x20\x20\x20.'+_0x3b7b3a(0x62a)+_0x3b7b3a(0x5b3)+'er\x20{\x20'+_0x3b7b3a(0x64b)+_0x3b7b3a(0x356)+_0x3b7b3a(0x6f8)+_0x3b7b3a(0x576)+_0x3b7b3a(0x283)+_0x3b7b3a(0x1d9)+'\x0a\x20\x20\x20\x20'+_0x3b7b3a(0x2d4)+_0x3b7b3a(0x4e9)+'tive\x20'+'{\x20col'+_0x3b7b3a(0x2e6)+'ff6b9'+_0x3b7b3a(0x3a5)+_0x3b7b3a(0x4f5)+'und:\x20'+_0x3b7b3a(0x5c0)+_0x3b7b3a(0x3ed)+'07,15'+'7,.1)'+_0x3b7b3a(0x360)+'\x20\x20\x20.m'+'n-mai'+'n\x20{\x20f'+_0x3b7b3a(0x39c)+_0x3b7b3a(0x4bf)+_0x3b7b3a(0x592)+_0x3b7b3a(0x37e)+_0x3b7b3a(0x199)+'play:'+'\x20flex'+_0x3b7b3a(0x3b4)+_0x3b7b3a(0x48c)+'ectio'+'n:\x20co'+_0x3b7b3a(0x339)+_0x3b7b3a(0x2b5)+_0x3b7b3a(0x505)+_0x3b7b3a(0x4f6)+'{\x20dis'+_0x3b7b3a(0x303)+_0x3b7b3a(0x621)+';\x20ali'+_0x3b7b3a(0x38d)+'ems:\x20'+_0x3b7b3a(0x2bd)+_0x3b7b3a(0x6a9)+_0x3b7b3a(0x174)+_0x3b7b3a(0x2cf)+_0x3b7b3a(0x530)+_0x3b7b3a(0x35c)+_0x3b7b3a(0x63e)+_0x3b7b3a(0x67c)+_0x3b7b3a(0x395)+'r-sel'+_0x3b7b3a(0x334)+_0x3b7b3a(0x5fb)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+_0x3b7b3a(0x24d)+'flex:'+'\x201;\x20m'+_0x3b7b3a(0x35e)+_0x3b7b3a(0x465)+_0x3b7b3a(0x34d)+_0x3b7b3a(0x682)+'mn-h\x20'+'{\x20fon'+'t-siz'+'e:\x2017'+_0x3b7b3a(0x6a0)+_0x3b7b3a(0x571)+'eight'+':\x20650'+_0x3b7b3a(0x360)+_0x3b7b3a(0x4a7)+_0x3b7b3a(0x6d3)+'\x20{\x20fo'+'nt-si'+_0x3b7b3a(0x560)+_0x3b7b3a(0x279)+'opaci')+(_0x3b7b3a(0x3f7)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3b7b3a(0x6de)+'ose\x20{'+_0x3b7b3a(0x268)+_0x3b7b3a(0x59b)+_0x3b7b3a(0x407)+_0x3b7b3a(0x3e5)+_0x3b7b3a(0x60b)+'ms:\x20c'+'enter'+_0x3b7b3a(0x25d)+_0x3b7b3a(0x33a)+_0x3b7b3a(0x1b5)+'heigh'+_0x3b7b3a(0x551)+_0x3b7b3a(0x463)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x3b7b3a(0x52a)+_0x3b7b3a(0x1b5)+'backg'+_0x3b7b3a(0x147)+_0x3b7b3a(0x43e)+'nspar'+_0x3b7b3a(0x495)+'color'+_0x3b7b3a(0x1e5)+_0x3b7b3a(0x2ec)+_0x3b7b3a(0x44d)+_0x3b7b3a(0x508)+'.45;\x20'+'curso'+_0x3b7b3a(0x5f8)+_0x3b7b3a(0x3b3)+_0x3b7b3a(0x360)+_0x3b7b3a(0x4a7)+_0x3b7b3a(0x150)+_0x3b7b3a(0x189)+'ver\x20{'+_0x3b7b3a(0x44d)+'ity:\x20'+_0x3b7b3a(0x39b)+_0x3b7b3a(0x4f5)+'und:\x20'+_0x3b7b3a(0x5c0)+_0x3b7b3a(0x53b)+_0x3b7b3a(0x6b4)+_0x3b7b3a(0x36c)+');\x20}\x0a'+_0x3b7b3a(0x682)+_0x3b7b3a(0x6de)+_0x3b7b3a(0x4b2)+'vg\x20{\x20'+'width'+':\x2014p'+_0x3b7b3a(0x655)+'ight:'+_0x3b7b3a(0x21b)+_0x3b7b3a(0x134)+_0x3b7b3a(0x4ea)+_0x3b7b3a(0x6f6)+_0x3b7b3a(0x5ca)+_0x3b7b3a(0x5ab)+_0x3b7b3a(0x2ed)+'olor;'+_0x3b7b3a(0x1aa)+'ke-wi'+_0x3b7b3a(0x465)+'2;\x20st'+'roke-'+'linec'+_0x3b7b3a(0x5ed)+'ound;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x3b7b3a(0x2b8)+_0x3b7b3a(0x4e7)+_0x3b7b3a(0x5ff)+_0x3b7b3a(0x42a)+_0x3b7b3a(0x65e)+'ht:\x200'+_0x3b7b3a(0x6c8)+'rflow'+_0x3b7b3a(0x4b6)+'uto;\x20'+'displ'+'ay:\x20g'+'rid;\x20'+_0x3b7b3a(0x164)+'templ'+_0x3b7b3a(0x321)+'olumn'+_0x3b7b3a(0x349)+_0x3b7b3a(0x40d)+_0x3b7b3a(0x5f3)+_0x3b7b3a(0x5dc)+_0x3b7b3a(0x41e)+_0x3b7b3a(0x20e)+_0x3b7b3a(0x324)+'1fr))'+';\x20ali'+_0x3b7b3a(0x38d)+_0x3b7b3a(0x30c)+_0x3b7b3a(0x1c1)+';\x20ali'+_0x3b7b3a(0x697)+'ntent'+_0x3b7b3a(0x1c0)+_0x3b7b3a(0x3e2)+'ap:\x201'+_0x3b7b3a(0x1c5)+_0x3b7b3a(0x191)+'ng:\x200'+'\x204px\x20'+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x3b7b3a(0x3c3)+_0x3b7b3a(0x15c)+'ebkit'+_0x3b7b3a(0x45e)+'llbar'+_0x3b7b3a(0x63a)+_0x3b7b3a(0x465)+'8px;\x20'+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x527)+'cols:'+_0x3b7b3a(0x20c)+_0x3b7b3a(0x60f)+_0x3b7b3a(0x45d)+_0x3b7b3a(0x157)+'humb\x20'+_0x3b7b3a(0x40c)+'kgrou'+'nd:\x20r'+_0x3b7b3a(0x6af)+_0x3b7b3a(0x6b4)+_0x3b7b3a(0x58d)+_0x3b7b3a(0x3a2)+_0x3b7b3a(0x6e9)+_0x3b7b3a(0x1bb)+_0x3b7b3a(0x244)+_0x3b7b3a(0x2c1)+_0x3b7b3a(0x360)+'\x20\x20\x20.s'+_0x3b7b3a(0x3dc)+_0x3b7b3a(0x2b3)+'order'+'-radi'+'us:\x201'+_0x3b7b3a(0x47d)+_0x3b7b3a(0x197)+'round'+_0x3b7b3a(0x356)+_0x3b7b3a(0x274)+',255,'+_0x3b7b3a(0x3f4)+_0x3b7b3a(0x3d0)+_0x3b7b3a(0x6e2)+_0x3b7b3a(0x6fa)+'w:\x20in'+'set\x200'+'\x200\x200\x20'+_0x3b7b3a(0x213)+'gba(2'+'55,25'+_0x3b7b3a(0x58d)+',.05)'+_0x3b7b3a(0x360)+'\x20\x20\x20.s'+_0x3b7b3a(0x3dc)+_0x3b7b3a(0x66e)+'{\x20bac'+'kgrou'+_0x3b7b3a(0x587)+_0x3b7b3a(0x6af)+'55,25'+'5,255'+_0x3b7b3a(0x2a2)+_0x3b7b3a(0x391)+_0x3b7b3a(0x215)+_0x3b7b3a(0x3d5)+'nset\x20'+_0x3b7b3a(0x455)+'\x201px\x20'+_0x3b7b3a(0x5c0)+_0x3b7b3a(0x3ed)+_0x3b7b3a(0x4cb)+'7,.28'+');\x20}\x0a'+_0x3b7b3a(0x682)+'sk-ca'+_0x3b7b3a(0x2ae)+_0x3b7b3a(0x361)+_0x3b7b3a(0x489))+('ay:\x20f'+_0x3b7b3a(0x335)+_0x3b7b3a(0x6db)+'-item'+'s:\x20ce'+_0x3b7b3a(0x4f9)+_0x3b7b3a(0x1e0)+_0x3b7b3a(0x633)+_0x3b7b3a(0x461)+'ing:\x20'+_0x3b7b3a(0x522)+_0x3b7b3a(0x4a6)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x3b7b3a(0x52f)+_0x3b7b3a(0x6f0)+_0x3b7b3a(0x454)+_0x3b7b3a(0x39c)+'1;\x20mi'+'n-wid'+_0x3b7b3a(0x37e)+';\x20}\x0a\x20'+_0x3b7b3a(0x5ae)+_0x3b7b3a(0x3dc)+'d-tit'+_0x3b7b3a(0x690)+'rong\x20'+_0x3b7b3a(0x168)+'t-siz'+'e:\x2013'+_0x3b7b3a(0x6a0)+_0x3b7b3a(0x571)+'eight'+_0x3b7b3a(0x1c8)+_0x3b7b3a(0x3f0)+'or:\x20r'+_0x3b7b3a(0x6af)+_0x3b7b3a(0x2f7)+'8,242'+_0x3b7b3a(0x6c1)+_0x3b7b3a(0x360)+'\x20\x20\x20.s'+_0x3b7b3a(0x3dc)+_0x3b7b3a(0x66e)+'.sk-c'+_0x3b7b3a(0x363)+_0x3b7b3a(0x537)+_0x3b7b3a(0x340)+'g\x20{\x20c'+'olor:'+_0x3b7b3a(0x456)+'0f5;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3b7b3a(0x166)+_0x3b7b3a(0x44b)+_0x3b7b3a(0x22d)+_0x3b7b3a(0x42b)+_0x3b7b3a(0x243)+'0px;\x20'+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x612)+_0x3b7b3a(0x12c)+_0x3b7b3a(0x4b5)+'ze:\x201'+'1px;\x20'+'opaci'+_0x3b7b3a(0x3f7)+'4;\x20ma'+_0x3b7b3a(0x368)+'botto'+'m:\x206p'+_0x3b7b3a(0x333)+'\x20\x20\x20\x20.'+'sk-ct'+_0x3b7b3a(0x419)+_0x3b7b3a(0x27c)+_0x3b7b3a(0x669)+_0x3b7b3a(0x3e0)+_0x3b7b3a(0x2c0)+_0x3b7b3a(0x130)+_0x3b7b3a(0x365)+'ter;\x20'+_0x3b7b3a(0x295)+'8px;\x20'+'paddi'+'ng:\x204'+'px\x200;'+_0x3b7b3a(0x57f)+'-size'+':\x2011.'+_0x3b7b3a(0x347)+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x6e4)+_0x3b7b3a(0x4e7)+_0x3b7b3a(0x5ff)+_0x3b7b3a(0x3f0)+'or:\x20r'+'gba(2'+'46,23'+_0x3b7b3a(0x6be)+_0x3b7b3a(0x564)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x3b7b3a(0x679)+_0x3b7b3a(0x1b9)+'ispla'+_0x3b7b3a(0x2ce)+_0x3b7b3a(0x24e)+_0x3b7b3a(0x392)+'size:'+_0x3b7b3a(0x3fc)+_0x3b7b3a(0x3e1)+_0x3b7b3a(0x1e2)+_0x3b7b3a(0x351)+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x2a8)+_0x3b7b3a(0x5e6)+'ositi'+'on:\x20r'+'elati'+'ve;\x20w'+_0x3b7b3a(0x3fd)+_0x3b7b3a(0x2d3)+_0x3b7b3a(0x4c9)+_0x3b7b3a(0x366)+_0x3b7b3a(0x654)+_0x3b7b3a(0x65a)+_0x3b7b3a(0x2e7)+_0x3b7b3a(0x6e9)+'der-r'+_0x3b7b3a(0x244)+':\x2099p'+'x;\x20ba'+_0x3b7b3a(0x4f5)+_0x3b7b3a(0x1c3)+'rgba('+'255,2'+'55,25'+_0x3b7b3a(0x5f6)+');\x20cu'+_0x3b7b3a(0x647)+_0x3b7b3a(0x646)+'ter;\x20'+_0x3b7b3a(0x4d8)+'\x20none'+_0x3b7b3a(0x360)+_0x3b7b3a(0x5ae)+_0x3b7b3a(0x1b2)+_0x3b7b3a(0x2be)+_0x3b7b3a(0x2e2)+_0x3b7b3a(0x5c8)+_0x3b7b3a(0x237)+':\x20\x22\x22;'+'\x20posi'+_0x3b7b3a(0x452)+'\x20abso'+'lute;'+'\x20top:'+'\x203px;'+_0x3b7b3a(0x15d)+_0x3b7b3a(0x6a5)+';\x20wid'+_0x3b7b3a(0x13f)+'px;\x20h'+'eight'+':\x208px'+_0x3b7b3a(0x6e9)+'der-r'+_0x3b7b3a(0x244)+_0x3b7b3a(0x38b)+_0x3b7b3a(0x5bd)+'kgrou'+_0x3b7b3a(0x587)+_0x3b7b3a(0x6af)+_0x3b7b3a(0x6b4)+_0x3b7b3a(0x58d)+_0x3b7b3a(0x5d8)+_0x3b7b3a(0x23f)+_0x3b7b3a(0x6c9)+_0x3b7b3a(0x1e6)+_0x3b7b3a(0x3a3)+'2s,\x20b'+'ackgr'+_0x3b7b3a(0x53d)+_0x3b7b3a(0x263)+'}\x0a\x20\x20\x20'+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x2a8)+_0x3b7b3a(0x345)+'a-che'+_0x3b7b3a(0x598)+'\x22true'+'\x22]\x20{\x20'+_0x3b7b3a(0x197)+'round'+_0x3b7b3a(0x356))+('a(255'+_0x3b7b3a(0x1c4)+'157,.'+_0x3b7b3a(0x364)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3b7b3a(0x2a8)+_0x3b7b3a(0x345)+'a-che'+'cked='+'\x22true'+'\x22]::a'+_0x3b7b3a(0x662)+'{\x20lef'+'t:\x2015'+_0x3b7b3a(0x463)+'ackgr'+_0x3b7b3a(0x6ef)+'\x20#ff6'+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x1cd)+_0x3b7b3a(0x293)+_0x3b7b3a(0x4f5)+_0x3b7b3a(0x1c3)+_0x3b7b3a(0x5c0)+_0x3b7b3a(0x53b)+_0x3b7b3a(0x6b4)+'5,.03'+_0x3b7b3a(0x385)+_0x3b7b3a(0x4c6)+_0x3b7b3a(0x54e)+_0x3b7b3a(0x55c)+'r-rad'+_0x3b7b3a(0x52a)+_0x3b7b3a(0x42f)+'color'+_0x3b7b3a(0x6d1)+_0x3b7b3a(0x6ec)+'\x20padd'+_0x3b7b3a(0x3f6)+_0x3b7b3a(0x41b)+'px;\x20f'+_0x3b7b3a(0x642)+'ize:\x20'+_0x3b7b3a(0x214)+_0x3b7b3a(0x207)+_0x3b7b3a(0x62d)+_0x3b7b3a(0x3a7)+'e;\x20bo'+_0x3b7b3a(0x4fb)+_0x3b7b3a(0x2b1)+_0x3b7b3a(0x180)+_0x3b7b3a(0x5db)+_0x3b7b3a(0x2e8)+'\x20rgba'+_0x3b7b3a(0x1a5)+_0x3b7b3a(0x53b)+'55,.0'+_0x3b7b3a(0x5c3)+'\x0a\x20\x20\x20\x20'+'.sk-f'+'ield\x20'+'optio'+_0x3b7b3a(0x2ab)+_0x3b7b3a(0x444)+'ound:'+'\x20#221'+_0x3b7b3a(0x2dc)+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x4bc)+_0x3b7b3a(0x492)+'splay'+_0x3b7b3a(0x2ba)+'x;\x20al'+_0x3b7b3a(0x3b0)+'tems:'+'\x20cent'+_0x3b7b3a(0x328)+_0x3b7b3a(0x500)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x3b7b3a(0x19e)+'lider'+'\x20{\x20-w'+_0x3b7b3a(0x69b)+_0x3b7b3a(0x5fd)+'aranc'+'e:\x20no'+_0x3b7b3a(0x6ad)+'ppear'+_0x3b7b3a(0x4dc)+_0x3b7b3a(0x5ac)+_0x3b7b3a(0x25d)+'th:\x209'+_0x3b7b3a(0x1c5)+'heigh'+'t:\x208p'+_0x3b7b3a(0x29d)+_0x3b7b3a(0x4f5)+'und:\x20'+_0x3b7b3a(0x1af)+'paren'+'t;\x20}\x0a'+_0x3b7b3a(0x682)+_0x3b7b3a(0x49a)+'ider:'+':-web'+'kit-s'+_0x3b7b3a(0x18a)+'-runn'+_0x3b7b3a(0x68e)+'track'+'\x20{\x20he'+_0x3b7b3a(0x2b2)+'\x202px;'+'\x20bord'+'er-ra'+_0x3b7b3a(0x469)+_0x3b7b3a(0x2c6)+_0x3b7b3a(0x1bf)+'groun'+'d:\x20li'+_0x3b7b3a(0x6b5)+_0x3b7b3a(0x3f2)+'ent(#'+_0x3b7b3a(0x6c2)+_0x3b7b3a(0x16d)+_0x3b7b3a(0x33e)+')\x200\x200'+_0x3b7b3a(0x4ec)+'r(--p'+_0x3b7b3a(0x378)+_0x3b7b3a(0x141)+_0x3b7b3a(0x44c)+'repea'+_0x3b7b3a(0x256)+'ba(25'+_0x3b7b3a(0x58d)+',255,'+'.08);'+_0x3b7b3a(0x2b5)+'\x20\x20.sk'+_0x3b7b3a(0x660)+_0x3b7b3a(0x55a)+'webki'+'t-sli'+_0x3b7b3a(0x440)+_0x3b7b3a(0x64d)+_0x3b7b3a(0x359)+'bkit-'+'appea'+_0x3b7b3a(0x668)+':\x20non'+_0x3b7b3a(0x3a8)+_0x3b7b3a(0x465)+'6px;\x20'+'heigh'+'t:\x206p'+'x;\x20ma'+'rgin-'+'top:\x20'+_0x3b7b3a(0x51e)+_0x3b7b3a(0x65a)+_0x3b7b3a(0x604)+_0x3b7b3a(0x469)+'\x2050%;'+'\x20back'+_0x3b7b3a(0x37d)+'d:\x20#f'+_0x3b7b3a(0x33e)+_0x3b7b3a(0x360)+_0x3b7b3a(0x5ae)+_0x3b7b3a(0x2e4)+_0x3b7b3a(0x12c)+_0x3b7b3a(0x4b5)+_0x3b7b3a(0x560)+_0x3b7b3a(0x279)+_0x3b7b3a(0x392)+_0x3b7b3a(0x2ea)+_0x3b7b3a(0x524)+_0x3b7b3a(0x58c)+_0x3b7b3a(0x592)+'th:\x202'+_0x3b7b3a(0x1b5)+'text-'+'align'+':\x20rig'+'ht;\x20c'+_0x3b7b3a(0x26b)+_0x3b7b3a(0x5ba)+_0x3b7b3a(0x64c)+'238,2'+_0x3b7b3a(0x548)+_0x3b7b3a(0x154)+_0x3b7b3a(0x682)+_0x3b7b3a(0x481)+'lor\x20{')+('\x20widt'+_0x3b7b3a(0x698)+_0x3b7b3a(0x59e)+_0x3b7b3a(0x161)+_0x3b7b3a(0x49f)+'x;\x20bo'+'rder:'+'\x200;\x20b'+_0x3b7b3a(0x4c6)+_0x3b7b3a(0x628)+'us:\x206'+'px;\x20b'+_0x3b7b3a(0x444)+'ound:'+_0x3b7b3a(0x5ac)+';\x20pad'+_0x3b7b3a(0x4e0)+_0x3b7b3a(0x5d7)+'ursor'+_0x3b7b3a(0x1dd)+_0x3b7b3a(0x4f9)+_0x3b7b3a(0x2b5)+'\x20\x20.sk'+_0x3b7b3a(0x507)+_0x3b7b3a(0x12c)+_0x3b7b3a(0x4b5)+'ze:\x201'+'1px;\x20'+'color'+':\x20rgb'+'a(246'+',238,'+'242,.'+'5);\x20p'+'addin'+'g:\x202p'+_0x3b7b3a(0x661)+_0x3b7b3a(0x5d6)+_0x3b7b3a(0x6f4)+_0x3b7b3a(0x3ae)+'err\x20{'+_0x3b7b3a(0x325)+'r:\x20#f'+_0x3b7b3a(0x31f)+_0x3b7b3a(0x360)+_0x3b7b3a(0x5ae)+_0x3b7b3a(0x44f)+_0x3b7b3a(0x2d6)+'ign-s'+_0x3b7b3a(0x221)+_0x3b7b3a(0x4c8)+_0x3b7b3a(0x1c1)+_0x3b7b3a(0x6e9)+_0x3b7b3a(0x6ac)+'0;\x20bo'+_0x3b7b3a(0x480)+_0x3b7b3a(0x4de)+_0x3b7b3a(0x48e)+_0x3b7b3a(0x6b7)+'dding'+_0x3b7b3a(0x4c0)+'\x2016px'+_0x3b7b3a(0x5bd)+_0x3b7b3a(0x676)+'nd:\x20#'+_0x3b7b3a(0x6c2)+_0x3b7b3a(0x36b)+_0x3b7b3a(0x15e)+'#fff;'+'\x20font'+_0x3b7b3a(0x35f)+_0x3b7b3a(0x2c7)+'5px;\x20'+_0x3b7b3a(0x392)+_0x3b7b3a(0x2ea)+'t:\x2070'+_0x3b7b3a(0x518)+_0x3b7b3a(0x647)+_0x3b7b3a(0x646)+_0x3b7b3a(0x66b)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3b7b3a(0x51d)+_0x3b7b3a(0x69a)+'{\x20fil'+'ter:\x20'+_0x3b7b3a(0x6fd)+_0x3b7b3a(0x41c)+_0x3b7b3a(0x16f)+';\x20}\x0a\x20'+'\x20\x20\x20');window[_0x3b7b3a(0x521)+'entLi'+_0x3b7b3a(0x46e)+'r'](_0x3b7b3a(0x494)+'wn',_0x1e2450=>{var _0x401d1c=_0x3b7b3a,_0x8a5f9a={'JptAX':_0x3e92ea['EAGmb']};if(_0x3e92ea['HDPrc'](_0x1e2450[_0x401d1c(0x1ed)],'Inser'+'t')){if('bfGoa'!==_0x401d1c(0x3ca))try{var _0x561f97=new _0x3488c3(_0xdc49c2)['readF'+'ield'](_0x2c906b,_0x8a5f9a['JptAX']);return _0x561f97?_0x561f97[_0x401d1c(0x330)]():0xc5*0x2+-0x4*-0x7bb+0x2*-0x103b;}catch(_0x2113e3){return 0x2*-0x1376+0x1186+0x1566;}else _0x1e2450[_0x401d1c(0x4fe)+'ntDef'+_0x401d1c(0x18e)](),_0x213810();}},!![]);var _0x51da65=document[_0x3b7b3a(0x67f)+_0x3b7b3a(0x25b)+'ent'](_0x3e92ea['rtHTz']);_0x51da65[_0x3b7b3a(0x267)][_0x3b7b3a(0x21f)+'xt']='posit'+_0x3b7b3a(0x424)+'ixed;'+_0x3b7b3a(0x41a)+'2px;r'+_0x3b7b3a(0x2b2)+_0x3b7b3a(0x4a6)+_0x3b7b3a(0x3cd)+'ex:21'+_0x3b7b3a(0x167)+_0x3b7b3a(0x27d)+_0x3b7b3a(0x3e7)+':poin'+_0x3b7b3a(0x5e8)+'idth:'+'26px;'+_0x3b7b3a(0x581)+'t:26p'+'x;opa'+_0x3b7b3a(0x1e2)+_0x3b7b3a(0x15b)+'ransi'+_0x3b7b3a(0x452)+_0x3b7b3a(0x38f)+_0x3b7b3a(0x6fb)+_0x3b7b3a(0x535)+_0x3b7b3a(0x3b3)+'-even'+_0x3b7b3a(0x2cb)+_0x3b7b3a(0x5be)+_0x3b7b3a(0x523)+_0x3b7b3a(0x4d9)+_0x3b7b3a(0x6fa)+'w(0\x200'+'\x204px\x20'+'rgba('+'255,1'+_0x3b7b3a(0x4cb)+'7,0.7'+'))',_0x51da65['inner'+_0x3b7b3a(0x2f3)]=_0x3e92ea['mHici'],_0x51da65['title']=_0x3b7b3a(0x2a4)+_0x3b7b3a(0x3fa)+'r',_0x51da65[_0x3b7b3a(0x16e)+'seent'+'er']=()=>_0x51da65[_0x3b7b3a(0x267)][_0x3b7b3a(0x38f)+'ty']='1',_0x51da65[_0x3b7b3a(0x16e)+_0x3b7b3a(0x4f3)+'ve']=()=>_0x51da65[_0x3b7b3a(0x267)][_0x3b7b3a(0x38f)+'ty']=_0x3b7b3a(0x329),_0x51da65[_0x3b7b3a(0x1db)+'ck']=_0x49e4b7=>{var _0x44ab68=_0x3b7b3a;_0x49e4b7['stopP'+_0x44ab68(0x4d7)+_0x44ab68(0x6c6)](),_0x4b78bb[_0x44ab68(0x352)](_0x213810);},document[_0x3b7b3a(0x258)]['appen'+_0x3b7b3a(0x4eb)+'d'](_0x51da65),_0x59c116(),requestAnimationFrame(_0x58cad0),console[_0x3b7b3a(0x31a)](_0x3e92ea[_0x3b7b3a(0x1fe)],_0x3e250a[_0x3b7b3a(0x639)]);});})()));
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
