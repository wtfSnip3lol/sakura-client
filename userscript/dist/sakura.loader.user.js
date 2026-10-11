// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.11
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
function _0x344a(){var _0x14dea5=['ote2mta0C0TeCxzg','tu52Cvy','yw1L','BwvKicG','D2L0Ag8','reTUwue','ugjbAeG','B3bLCNq','D2LcwKu','zvn0EwW','CdOGmti','t0zgigi','B25TB3u','ntuSmJu','ywrKrxy','rNfmBw4','ugf0Aa','igjHy2S','uNvUDgK','zYb7igm','ig9U','uKfVtwK','Bw8GDg8','zxiGEYa','zhjVCc0','z3jzrgG','ztSGyM8','icnMzMy','B29RCYa','mNb4ihu','C2v0qxq','ihWGC2G','CI1Yywq','B2LSicG','DhjHBNm','mteYnhzUwvjcwG','yMfJA2q','C2v0uhi','EcaWoYa','AxnWBge','D2vPz2G','oYb3Awq','Bg1VuNa','vMfSDwu','s1Powgy','ie9olG','ywXSihq','z2H0oIa','owqIihm','yw5JztO','zgLZCgW','mhG2mda','BerPzsK','re9nq28','mJmWu0jzzLPs','zsbTAxm','z2DSzwq','AgvHzgu','q29SB3i','z3jPzdS','DgG6idu','BgWGBwu','t1vsx18','y29UDgu','tg9Hzgu','Bwf0y2G','Ag9VA0C','D2L0Aca','zgjytvi','mgy1oYa','mJu1lde','DMLLD0i','A3mGyxi','qsblt1u','B2X1Dgu','AwWGC3a','BcbKCMe','ChbKBNq','Bw4TCge','ltiUns0','EfLvCem','ihSGD2K','AwXnB3q','C3rYAw4','s3bKChO','igfSAwC','DgvZDa','BgLNBI0','tMP1CwG','nNb4ida','DgvYoIa','Ae9NDu8','ihSGywW','zwLTtg0','zwvMmJS','BtOGmJq','AxrLBxm','u3rHDgu','ywXSzwq','sKXZEMG','r0Dnu0m','zxrhyw0','mJqWiey','mJm0ntCWmen4AhLYrW','Ad0ImIi','Bwver24','nJTWB2K','AxrSzsa','igDHDgu','BeH5ANi','B29Rihi','DgLKzvC','B25JBgK','mcWUntu','AgfZ','Dhj1zq','sLPtrgS','z1L3Dva','vvDnsW','CxvLCNK','oIaXnha','zwfKEs4','yJLKoYa','ANvTCfa','C1DRv0q','igfUzca','oYbJB2W','mxb4ida','zg93BIa','lxrPDgW','oMHVC3q','rgLL','CfvLsMy','zxjZy3i','z3jVDw4','y2HLy2S','s2X6D2y','sNvTCfq','ksaXmda','nxW0Fdy','BMu7ige','ufLbsKm','yw5LBca','CYb3B24','sMXlBwi','Bw91C2u','BNnPDgK','AxHLzdS','DgXPBMu','tM8Gzw4','mxW0Fdy','zc5VBIa','CwHzzhi','CgXPy2e','ueLhAMC','Cg9W','lxDPzhq','AfnOywq','swyGCMu','reDUrwS','ig9Wywm','z2jHkdi','B3i6ihi','mJvWEdS','iL06oMe','BNq6igm','4Ocuig92zq','Bgv4oYa','zMXLEdS','zxG7ige','DgLVBI4','l1jnqIa','DgvYigm','DgL0Bgu','BJOGy28','zw1ZoIa','zw1LBNq','BM9szwm','AdOGmZq','vxDqr2m','y29TCgW','icaUC2S','ChbLyxi','y3jLyxq','Aw5KzxG','s2v5uW','CMvHzey','igq9iK0','pc9ZBwe','yxK6igy','CI52mq','Dg9WoJe','zcb7igi','CMLUz3m','nxWZ','BMC6idq','mdi1ktS','ufmGDw4','B3vUDgu','BKPnq20','tNzNqNC','Dw5PDhK','CgfKzgK','zNvSBhm','EdSGAgu','nsaWlti','zgfTywC','BMLUzW','zg93oIa','qxbWBgK','mtrWEdS','DhjVA2u','Ag9VA1a','qunuAYa','v21gveu','lJuGms4','D2fYBG','idaGmca','rgL6v2y','mtfWEca','lxjHzgK','CgfYzw4','rgXLuei','Aw46ida','wNHrChC','B3nPDgK','z1vrvMK','vgLJAW','l3jHCgK','Aw5Uzxi','rNbdy3q','Awq7iha','y3KGB24','zvzHBhu','vg90ywW','nxmGy3u','B25LigK','uMf0zq','C3rPBgW','Dwzfu1e','zfHhz3G','lc4WocK','yxjPys0','u0fgrsa','BfjHDgK','mNb4ide','mcWWlJG','ihSGlxC','nYWWlJm','uMvMAwW','B3vUzdS','tLbhDu4','ihjNyMe','AxDgvNO','DgG6idK','vgfRzxm','DLfqswK','mxb4oYa','ysGYntu','ldi1nsW','EgXmu04','DhLWzq','CZOGoha','BMq6ihi','iL0GEYa','zw50tgK','ihnVig4','ihrOAxm','yuvgu3e','Bhv0ztS','DhbZEuC','idmWChG','vvjbx0S','ztOGBM8','zwLUC3q','zsXTB24','ywqGD2G','yMvNAw4','u1fjA2K','tKXiB0y','CvzAENe','vw5PDhK','igDHCdO','icaG','rvHqxq','rgfTywC','mcbOB28','yYGXmda','Ec1ZAge','wMDur2K','nxb4oYa','mJuPoYa','C2HVB3q','zxnJ','zsb7igy','AwvSza','Bw4TDge','y3jLzw4','Bg93zxi','se5QB1u','v0ftrca','Dg9Nz2W','s1DTtKO','CYbZChi','BYb0Agu','ic40oYa','BgLUzvq','ihn0AwW','sKD0txy','uJOG','q3LZCvG','zMXLEc0','qMXVy2S','Bgf0zwq','BNnWyxi','ueL0CMe','tMfTzq','zwfK','yxHWqNC','DcbZDge','yMX5lum','BsbVBIa','BMu7ihm','yxbWzw4','DcbHihq','mdSGyM8','i2zMyJm','Bcb7igq','zM9YBtO','ENjYwxG','ywrPDxm','zMy2yJK','zw5HyMW','Aw9U','y2XLyxi','AwvKigm','A2uTD2K','BwvsDw4','zvbSDwC','CYbpsgu','ide0ChG','z2v0rwW','lcbJywW','ChrfzxG','B2LS','lc4WncK','zM9UDa','v2vHCg8','AsXZyw4','Aw9F','ocWYndi','nhb4oYa','Dg87ih0','zLfqy2u','ndySmJm','cIaGica','swj4zNy','y2vur04','DxDTAW','nNWZFdi','lxnJCM8','DMfyvgG','mwzYksK','swvUAMq','AxrPywW','CM0GlJq','nZaWia','lxj1BM4','Dw5Kzwq','C3rVCfa','y2HtAxO','AcbVBMu','mcaXChG','BNnLDca','y0vfwuq','nsWYntu','ChvZAa','nYWWlJG','ztOGmtC','lxnPEMu','CxH5DK8','EYbMB24','oIaJzJy','BhvLCY4','mdCSmtu','ihWGz2e','mtKYmtq0nw1lyxfeBW','B3rZlG','ih0kica','Ag9VA0m','tufJBxK','ifvjiIW','ihDLyxa','ifvxtuS','DxjDifu','igvYCG','DgG6idi','oYbOzwK','BMPisKG','AwrLihS','BM9UztS','zvrHA2u','zxjYihS','AwDODdO','ALPSvvm','EsaUmZu','mJu1ldi','nNfvwxHyEq','Eg1PDfe','lwL0zw0','DxjDigG','igvUDgK','y3nZvgu','Bw4TAa','oIbZDge','ihjLy28','Awr0AdO','icaGzgK','zwHQwvm','lsbVDMu','yxnZAwC','mtGGnIa','rw5NAw4','Ehreswy','thfOshG','DK9pEhe','ldeWnYW','C1zhEfa','Fdb8mNW','zMLSBfq','BI1JBg8','As1TB24','igj1AwW','idGWChG','A2vZig8','B1jLy28','Bwf4','Dgv4Dc0','CZOGyxu','B3C6ida','iduWjtS','zenOAwW','y3jLBwu','AMTdD0e','uuDvuNa','lxrVCca','AwrLCG','DgHLihC','DMC+','z24TAxq','ztOGmtm','quj0wem','CNPpqvq','igzVCIa','CY1Zzxi','y2TNCM8','tw92zw0','A2rYB3a','igfIC28','DhHKqvq','ANzJCei','ienquW','B2LUDgu','B2rL','EdSGCge','zM9UDc0','BunMBui','whDqsgK','v0vowg4','zMuGBw8','Aw5NicS','DgLdrgK','yJPOB3y','AwDUyxq','z2fTzuW','DxjDig0','yxmGBM8','B3bLBG','idqTnc4','y2HdB2W','sMPcsKS','zgL2','A1Hey1C','lxbHCMu','Bw1VifS','Cg9fD3y','zxH0','ywn0Axy','rMLQz2e','igHVB2S','tuLtu0K','CMvU','v2LWzsa','nMi5zci','lM1Ulxa','BgW+','y2fWDhu','ExfSyNm','AxnPyMW','BgvUz3q','zwqGyw0','yxj0lG','zxrLy3q','DtmY','idi2ChG','DMvYihS','j3qGC3q','Bg9YihS','B3i6iha','oIa0ChG','rLDzshG','Awr0Aa','C3rYB24','BMv2zxi','ywqGEYa','CM9Rzxm','iJeUnsi','sw5Zzxi','Ag9VA3m','kdeWmhy','ysGYndy','kdeUmsK','EdSGyMe','zMLSzw4','AvD0weu','Aw50zxi','Aw5Mqw0','lxnPEMK','yM91BMq','Axr5oIa','DwX0','CMXHEsa','mdSGFqO','BNn0ywW','s2v5vW','u2fMzsa','mcWWlJu','yxKGB24','lJa4ktS','zw50oYa','ig1VBwu','lK92zxi','y3jVC3m','EdSGyM8','y29SB3i','y2XHC3m','y2f0','zxzMChy','CI1ZzwW','CZOGCMu','C2STy2e','nYWUmsK','lMrSBa','DKPPwMe','BguGC3q','CJOGDgG','B3G9iJa','u2vSzwm','tfj1ELy','C3bSAxq','ihrVCdO','ihDPzhq','mtjWEca','B3vUDc4','zMLSBa','nxm0idi','wMD3r2u','wgrxwee','BtOGnNa','AxrPB24','yNrUoMG','iNrYDwu','ig5VigG','vNzxB0G','BhrLCJO','y2SP','ENbzq3a','EMu6ide','zYbJyw4','BML0Bu4','B25PBNa','mcuUifm','C2v0x3q','Bgf5oIa','oYbIywm','CMvHza','zxjYB3i','zgDtq28','AwnRihm','AxmGAg8','z24Ty28','BdOGBM8','rLbtigm','yMX1CG','DxrVoYa','zxiTCMe','ihbHzgq','zMLSBcW','u2fRDxi','BgfIzwW','q1btihi','mZuSmJq','s05twLm','AwX5oIa','B2XPBMu','BfriC24','wuLJwwy','sufpsva','idjWEdS','B2nRoYa','yxrSEsa','t3zLCNC','sMf2v0S','C2STyNq','ywfgA3G','jsK7ic0','ywz0zxi','rMLLBgq','idaGmJq','ohG5mc0','iefmtca','DhLSzq','kdi1nsW','zMLUza','uNzfsMe','CYbnB3y','B3jKzxi','B3vUzdO','C3bSyxK','ChGPoYa','zvjHDgu','zsaOt0G','yxrPB24','zvH5sKC','A3ndChm','DMvTzw4','AxvZoIa','oJiXndC','qNvUBNK','igrHBwe','v29SEuS','C3LjzwO','w3nHA3u','C3DPDgm','sw5MAw4','uxLczgG','CNr1Cca','lwfWCgW','zxPPzxi','C3bHBG','DhjPyNu','B3nWywm','ChG7cIa','rxHW','yxvSDa','A0DJsgm','ldiZocW','igXPBwK','C3zNiJ4','BM90zs4','vwzzrvi','ida7igi','BwLZyW','C2f2zq','oJa7EI0','phbHDgG','oIaXoYa','ChGGDwK','C2fMzu0','yMvS','De5Vzgu','zJmY','C2fRDxi','zw50rwW','B24Gzxy','Cg9Uj3m','ywrKAw4','zsbZzxi','sevuuhC','rhjIt0C','igzVBNq','Aw9FnZi','C2L6ztO','BwvZC2e','tgvNAw8','ohb4oYa','CIGYmNa','BLH5BuO','CNnVCJO','EcbYz2i','nNb4idK','reLeAuq','ywnRz3i','zw50kcm','B250zw4','t3jXt2G','yxjNzxq','DML0Eq','B2fKzwq','zwfWB24','v0XRywe','qM90Dg8','zLPowgO','CMrLCJO','u2vNB2u','DhmGCgW','v01ligK','qwLNt3K','BwrLC2m','y2fWtw8','yxrLvge','AfTHCMK','nZKWCejbCfbb','vvDnsYa','igHLAwC','CMfUC2K','DhLqy3q','nxW0Fda','mtaWid0','BI1PDgu','svjfC3e','Be1VDgK','y2LYy2W','AxmGyNu','BMX5kq','iIbZDhi','Aw4Sihq','q291BNq','ihbVC2K','rNjHBwu','CMfWAwq','u2nHBgu','Ew9OCNu','DhKGmc4','DMfSDwu','icaUBw4','nsWUmdC','qwrIBg8','B246ig8','zIbTyxq','vgDHwuu','CIb2ywW','AtmY','ywrK','Bw4TBwe','ocKPoYa','B3bHy2K','mtSGBwK','nYWWlJC','ug1owu0','tLzbseu','z29KrgK','BgLUzvC','AxrJAa','EdSGywW','sw9qENa','B2jnCLu','z3DgwvK','vKjfEve','AwXKigG','v2PPBvi','oIa2nta','lwHLAwC','rM9fvwO','ignVBg8','ysblB3u','sgvHBhq','tgvMDca','B25JAge','DMvYBge','ihSGzMW','BY1ZDMC','iKLUDgu','BgLKzxi','Dw5KoIa','CM9Wlwy','yxnLBgK','EdSGFqO','sgLKzxm','BerPzsW','nsWUmdm','lxnOywq','kYbtCge','oIa4ChG','B3C6igK','C2STBM8','sxnhCM8','AgfPCG','rNDLBwC','sMrbDha','CgfYC2u','qwPmB3K','EevxqxK','BgLNBG','nYWUmJG','y3jVBgW','lc4WnIK','A2DYB3u','BK1Yqwi','Bw4TC3u','ndyYmZmZnM9Pt3DftG','CMLNAhq','r09Uq1C','Dgv4Dee','DgLMEs0','mNb4oYa','AY1OAw4','zg93BG','BNrLBNq','D29YAYa','ihLVDxi','CgXHEtO','lwLVxYO','AwvZlG','yM9Yzgu','zvbSyxK','BwvUDca','Aw5Zzxq','zxi6ida','D2fPDgK','yvntDuK','C2f0Dxi','DMCGEYa','suvJuNu','oYb9cIa','BgfZDeu','AefRBgm','B290zxi','Bu5Xqvi','D0jSDxi','ys1JAgu','ig1HCMC','C2HVD24','r29Kl2q','mtjWEdS','Dc1ZBgK','svzrrKW','B246igW','mty5mdm3u05Psufu','yxjKlxq','Dg9Wrgu','igzPBgW','z3jHDMK','zxmGB24','C2STy28','mciGCJ0','zxzLBNq','zgvYlxq','psjTBI0','DgXLCW','y2HPBgq','DgHVzca','yxK6igC','Ec1OzwK','CMLVtgC','C2HPzNq','BMn0Aw8','Aw9FmZa','oI13zwi','idrWEca','DgvYoYa','u0flvvi','B3nLihS','lwnVBhm','mc41','D2vIA2K','C2XPy2u','txPlCuu','CgfJAxq','EgH4rLi','tvHLsLi','BvnfwfG','zIXZExm','yxbWzwe','BMCGzM8','ic5TBI0','B3uU','C2STzMK','B3zLCMW','yM90Dg8','Aw5WDxq','zgn1vLq','oYbWB2K','Axb0kq','s2jWDw8','ihSGzM8','ihSGzgK','tgndA3q','CgrQELK','ida7igm','DdOGmtu','B1jMDgu','CNq7igC','Bw4TBg8','iezquW','ieLZr3i','DgvYo3C','zw4GDg8','AhvTyIa','B2nfvwm','DgvY','D3jPDgu','B3nL','y2L0EtO','lMXHC3q','CMLZAYa','D0nVBg8','y2n1CMe','DgfNtMe','igv4Axq','Bgv4oIa','BMvJyxa','DgvTlxu','A2v5zg8','Acb7iha','Dw5RBM8','Fdj8mxW','lIbvC2u','CKfwrwO','zwXK','rw1KANy','oc00lJu','yxb0Dxi','ChG7ihC','u2fMzxq','zw50zxi','thPHCMq','icbIywm','Dg87zMK','EdSGBwe','nwmWidm','kdaSmcW','BsbYAwC','uenbuKK','EtOGmdS','BMqGt0G','zsbJEd0','CMDIysG','AwrLCJO','u2vewMe','Bg9HzgK','BMqIihm','CMvUDem','zw50CW','u3D4vKO','zxG6mJe','twr2uNC','Dc1ZAxO','qwnfA0O','qxj6ueS','zvj1BM4','tNfzz2y','EtOGyMW','zdSGy28','DgfIihS','mxW3Fdm','Dw1UoYa','rwXLBwu','oIbJDxi','idiWmg0','B25SEsW','t0HLywW','Ahq6ida','CLbIzK8','yxr5tgq','CZPUB24','ls1W','B3zLCIa','vxHku0G','oIbYz2i','ChG7ih0','B3b0Aw8','ihWGBw8','EKDnv2y','i2zMnMi','lYbhCMe','Aw4TD2K','zwfKB3u','ig5VBMu','CYbHBgW','zg93kda','rM9Yy2u','DhK6ic4','Bw92zvq','CMLKoYa','icaGyMe','ntuSlJa','uxbMu2C','u1fJt28','oIbKCM8','txLXELe','zgvYoIa','zgL1CZO','oIbMBgu','CMvZDg8','ndC0odm','zwLNAhq','DgL2zsa','DhjHy2S','DhKGjq','oIaZmNa','CZO6lxC','y2fWu2G','oWOGica','zxiTzxy','AxrPyxq','Bw92zw0','Avj0ru4','v3jHCha','Dgv4Dei','ndGZnJq','shzuq1O','DgHPCYa','Awy7ih0','CYaNzNu','rM1pwwC','AguGDxm','nde5oYa','uMvJB2K','icaGlNm','C2STC2W','s3fQyvm','r05wqxC','ywLYlG','mhGYnta','EgTMqMy','CM91BMq','mNm7Cg8','DKnQqMO','zg1JDuW','CNrPzgu','B2XVCJO','C2v0ida','Bg9Hzhm','yxa6idG','lKXVy2e','Dwvnuu8','DgvTCgW','ic5ZAY0','zhbY','ihrOzsa','zxrsqvq','ieTLzxa','CKHkyvO','DMfS','mJu1lc4','Bg9Hzc4','BfjTCgi','zciVpJW','sfrnta','B2STCMu','uK1c','tw9Kzsa','mc41o3q','mJiSocW','EYaTD2u','mxb4ihi','Aw5JBhu','wK5wquy','Cg9ZAxq','FqOGica','ywn0A0S','ug9ZAxq','wMvYB2u','ugn0','zgvSzxq','C2v0sxq','ndqWufr4yvjP','ntaLktS','ELbSC20','sKPgzK4','oYbIB3i','zuHYANO','nJaWide','zuvSzw0','BMC6ida','A2uTBgK','zsb3zwe','Bw4TDgK','CMvSB2e','iNjVDw4','BNrKtwm','lwXPBMu','z2v0q28','lcbPBNm','AujuvMm','ndSGBwe','A291CI0','lJv6iIa','zgrPBMC','A2L0lxm','rgfUz2u','Fdj8mhW','Bgz1Aey','y29Kzq','B2reAwu','ihbVAw4','C3rYB2S','zgvYlxi','yNHOy3i','zw50','BhLsq3K','u3bLzwq','yMfJA2C','zhrOoJe','AwvSzca','zxjSyxK','CM9WywC','rxLgrMO','zxiGC2W','x19ZywS','yuTVDxi','t1nOB28','BhrO','mNmSigi','DxbWquS','BgvMDa','Cfr4tg8','CJSGz2e','CM9UzYa','DZOGAw4','vwTsEKO','phn2zYa','lwfWCgu','Dcb7igq','Bw9fEha','mtu3lc4','odaSmtK','zMLSBfm','DdOGnZa','A2v5Dxa','zxmGEYa','y2vUDgu','CMvHzhK','B3n0zMK','zMLSBd0','rg91ug4','BwLKzgW','DgG6ida','nc00lJu','tgLZDa','zMLLBgq','oIb0CMe','zwn0Aw8','rvfjsgC','C2STy3q','yNjPz2G','sw5PDgK','zhrOoIa','EvjqtMi','yY0XlJu','BLbSyxq','Efzjqxu','B3jZige','BNrLEhq','zMXLEdO','icaGlM0','wMzdr1m','DKzPqwC','qM1Tt2y','B3rOAw4','lM1Ulxq','mtbWEdS','CZOGy2u','y2uGB3y','vgfovwm','C2u6Ag8','BM9Uzq','yMTPDc0','yxjLBNq','tKfSAuG','lNnRlw0','twvAzvK','zs5bCha','BYbWAwC','te1c','C2HHzg8','A2v5C3q','ieaG','BNqGAge','ChG7igi','CMfPC2u','DgXL','yLfdvKC','suLdCu4','zwfKige','igjHBM4','v2vItw8','yw5Uywi','oIaWoYa','t0XhDKe','B2TLpsi','wNHQrgi','DxmGywm','mhb4lca','wLvltu4','nJaWia','zwjRAxq','vgHLC2u','CMeTA28','DgHYB3C','zxzLBIa','v0fttsa','zgvZyW','C2vSzwe','ig5LDMu','BI13Awq','Bvn1ywK','DNCGlsa','qKXLvxa','t05Qz00','D2LKDgG','sgHqB2C','B3nLihm','oYbWywq','ywXPz24','oIaXms4','AguGzNi','DgLKzs4','igvSC2u','AgvSza','CMfUy2u','BwuG','ignVB2W','AgjoyLy','zwCGzMe','BsbSzwy','mtySmc4','zcbNCMu','DdOGnJa','EYbIywm','DdOGnNa','ltiUnsa','rNfXCuS','mhb4oYa','zMyP','y3rPB24','DgG6idG','x19tquS','BNrLCJS','BMf0Dxi','uMvJDa','z3jOD3i','iokaLcb0zq','C2STAgK','ohb4ksK','Bw4TC2K','igzSzxG','icaGkIa','C1j3Beu','zwf0CYa','BNrLCI0','AwDUlwK','i2zMzG','oYbQDxm','nsWUmdu','ldiXlc4','qNLjza','q29TyMe','oYbHBgK','kc4YmIW','zNbZ','z01Iy00','nsKSida','sMTOugC','sg9VAYa','tg9JywW','lca1mcu','igf1Dg8','s1PxzKu','DxjZB3i','B24UvgK','BNqTC2K','mJzWEdS','r3P3r0u','nIa2Bde','odiPoYa','A3nqB3m','idaGnha','ideYChG','lc4YnsK','ihn5C3q','zgvZ','zvKOmtG','AY1ZD2K','CvDvCvq','Ahq6idi','ktSGBwe','AwrHDgu','D3LfA00','CMfUC3a','Bg9Y','zsbBrvG','rwvWwxG','igXLzNq','icaGig8','ie92zxi','u2L6zq','ihSGCge','r29Kie0','Bg9Hzca','ChG7iha','z2v0sxq','EdSGB3u','BIbZAwC','DvvtqxK','ignLBNq','lxnLCMK','Dg9W','sw1by0W','Eca2ChG','DdSGFqO','phnTywW','z2LMEq','BIb7igy','oIa1mcu','oIaYmNa','BMnL','AuDduu4','u0fgrq','rM9ZyK8','y29TyMe','B3jXreG','AxPLoIa','BI1SB2C','DMLZDwe','yMHVCa','tKCGlsa','sNvTCca','CMuGkfm','zuzpEKK','B246ihi','yw5ZzM8','lwjVEdS','yNv0Dg8','DhKGDMe','oYbVDMu','Dgv4Dem','s05TAfK','C3rLBMu','u2TPChm','qKPwzwy','lZ48l3m','kYbmtui','ihWGrvi','BgfJzs0','u2v0r2e','oIbUB24','ndiSlJG','zvfxs3q','rKHjv1m','CMDPBI0','BxKGC2u','khjLBg8','iJeYiIa','icbIB3G','mNWX','DhjPA2u','C3rLCa','C21HBgW','Ag9VA04','rLbtig8','CMrLCI0','DhvYyxq','EsbKzwy','C3r5Bgu','CMfKAxu','CNjVCG','uMvZzxq','BM9tChi','ihjLBg8','C3rHCNq','mtmZnwv4ENvAEG','s3LYs3K','mtHds3jjvNm','sMXRwfy','idK5osa','EcKGC2e','oYbVCge','ns00idC','zM9YBxm','DffguwS','zuv4Ca','AMfoDue','Bw4Ty2W','idfWEca','oIbPBMG','C2v0','vNbzy1m','r3jjDMK','ktSGFqO','BgLUzw4','tfvLBvi','t1vLs1u','psiJzMy','lc40nsK','ihn0CM8','uvnHzxa','yxr0ywm','y2fUDMe','zgLUzZO','lwjHBNi','Aw9UoMy','rNzxrgK','yxjHBMm','ywXSig8','CMvSEsa','B2vZig4','z29K','BM93','zgTPDa','rgLZywi','EgjHv28','ihnOB3q','AY1Jyxi','C3bLzwq','igjVCMq','zxjZ','A3nty2e','qwfyuhC','B2XVCJS','ELfhwKW','zvncquu','t0XAs3i','ihSGAgu','igrPC3a','uwvrwfa','AwDUlxm','z2fWoIa','mNb4ksa','tu9ersa','CIbNyw0','Bxm6igm','yxv0BY0','AM9PBJ0','AwXLzdO','DgnOoJO','DuLoC2K','z29KicG','BMvHCI0','EuvUz2K','EerQwKC','BNrezwy','wLjKDfm','ChG7igy','mJqYlc4','ihSGyMe','Bg9Hzgu','oIbYAwC','lc4WnsK','Cg9PBNq','B250lxm','Cw5drwC','ywqU','y01jz3C','BMqGBwe','zs1PDgu','icaGic4','Bg9YoIa','CdOGmta','mJqSmtC','nJq2o2m','q3jVC3m','y2TLzd0','ywrIBg8','ys5RB3u','ide7ig0','y2fSBa','zxjPDdS','ifTfwfa','tM8Gu3a','kdi0nIW','AgvPz2G','Bw4Ty28','r1ztA2K','zsb0CMe','Bw92zq','yM9KEq','Aw4GC2e'];_0x344a=function(){return _0x14dea5;};return _0x344a();}function _0x4fda(_0x108de7,_0x40c888){_0x108de7=_0x108de7-(0x7be*-0x3+0x342*0x1+0x1519);var _0x1d25c7=_0x344a();var _0x327bc6=_0x1d25c7[_0x108de7];if(_0x4fda['QnTkRm']===undefined){var _0x5302b1=function(_0x953c70){var _0x99d98='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x277510='',_0x1a6c72='';for(var _0x3ada9c=-0x152f+0x9f2+0xb3d,_0x4dba07,_0x18be06,_0x3fb4ae=0x22e1+0x35*-0x59+0x57c*-0x3;_0x18be06=_0x953c70['charAt'](_0x3fb4ae++);~_0x18be06&&(_0x4dba07=_0x3ada9c%(0x1*-0x4a3+0x11c+0x1*0x38b)?_0x4dba07*(0x11f*-0xd+-0x1*-0x144d+0x57a*-0x1)+_0x18be06:_0x18be06,_0x3ada9c++%(-0x3*-0x7a9+-0x2*0xcb+-0x1561))?_0x277510+=String['fromCharCode'](-0x1282+-0x2466*0x1+0xb*0x515&_0x4dba07>>(-(0x3e*-0x4f+0x1418*-0x1+-0x1f*-0x144)*_0x3ada9c&-0x1*0x125b+0x712*0x4+-0x27*0x41)):-0x1*-0x53e+-0x1a3*-0x1+-0x6e1){_0x18be06=_0x99d98['indexOf'](_0x18be06);}for(var _0x42ccbb=0x19e*-0x4+0x1f1a*0x1+-0x18a2,_0x330eb4=_0x277510['length'];_0x42ccbb<_0x330eb4;_0x42ccbb++){_0x1a6c72+='%'+('00'+_0x277510['charCodeAt'](_0x42ccbb)['toString'](0x1fda+-0x1*0x796+-0x1834))['slice'](-(-0x10*-0xe5+0x17b1+-0x1*0x25ff));}return decodeURIComponent(_0x1a6c72);};_0x4fda['McttqW']=_0x5302b1,_0x4fda['yWAyXh']={},_0x4fda['QnTkRm']=!![];}var _0x129f40=_0x1d25c7[-0x1*-0x19ba+-0x3c4+-0x15f6],_0x535ffc=_0x108de7+_0x129f40,_0x57abb4=_0x4fda['yWAyXh'][_0x535ffc];return!_0x57abb4?(_0x327bc6=_0x4fda['McttqW'](_0x327bc6),_0x4fda['yWAyXh'][_0x535ffc]=_0x327bc6):_0x327bc6=_0x57abb4,_0x327bc6;}(function(_0x587ca9,_0x293098){var _0x201d17=_0x4fda,_0x39a9db=_0x587ca9();while(!![]){try{var _0x22f437=-parseInt(_0x201d17(0x320))/(0x9ee*0x1+0x83c+-0x1*0x1229)*(-parseInt(_0x201d17(0x483))/(0x1c*-0x67+0x1206*-0x1+-0xfa*-0x1e))+-parseInt(_0x201d17(0x5b4))/(-0x2220+-0x7b*0xe+0x1*0x28dd)*(parseInt(_0x201d17(0x642))/(0x1a*-0x91+0x6*0x4af+-0xab*0x14))+-parseInt(_0x201d17(0x1da))/(-0x1*-0x1297+-0x1*-0x163d+-0x1*0x28cf)*(parseInt(_0x201d17(0x1ef))/(-0x1*0x2161+-0xfdd+0x836*0x6))+parseInt(_0x201d17(0x686))/(0x6*0x607+0x258+-0x267b)+parseInt(_0x201d17(0x61f))/(0xb6e+0x1*0xb3c+-0x16a2)*(parseInt(_0x201d17(0x5b6))/(-0x694*-0x2+-0x2055+-0x1*-0x1336))+-parseInt(_0x201d17(0x655))/(0x50*-0x7c+-0x2341+0xecf*0x5)*(-parseInt(_0x201d17(0x39e))/(-0x10bc+-0x167*-0x1+0xf60))+-parseInt(_0x201d17(0x378))/(-0x1586+-0x1b01+0x3093);if(_0x22f437===_0x293098)break;else _0x39a9db['push'](_0x39a9db['shift']());}catch(_0x301a02){_0x39a9db['push'](_0x39a9db['shift']());}}}(_0x344a,0x5df01+0x5*0x7bd3+-0x5498d),((()=>{'use strict';var _0x2701d0=_0x4fda,_0x45240d={'YuBUN':_0x2701d0(0x3eb)+'wn','FWYHx':function(_0x155659,_0x493e53){return _0x155659+_0x493e53;},'TssKb':_0x2701d0(0x4f2),'yqlbs':'#fff','TJUpk':'rgba('+'255,2'+_0x2701d0(0x2b1)+_0x2701d0(0x14e)+')','MAcmy':_0x2701d0(0x4c4)+'r','rzOAT':'middl'+'e','DizWf':function(_0x1dcf6e,_0x14dd9e){return _0x1dcf6e+_0x14dd9e;},'iBTVc':function(_0xfdda05,_0xe2601f){return _0xfdda05*_0xe2601f;},'ufESQ':function(_0x4b8656,_0x2dbe20){return _0x4b8656/_0x2dbe20;},'YTTqX':function(_0x57f68c,_0x40b80a){return _0x57f68c*_0x40b80a;},'XZiMw':'600\x20','qnCEg':_0x2701d0(0x2f3)+'-sans'+_0x2701d0(0x573)+'f,sys'+_0x2701d0(0x3e8)+_0x2701d0(0x1b4)+_0x2701d0(0x21e)+'if','BmmOf':function(_0x353471,_0x2ad839){return _0x353471+_0x2ad839;},'ergNJ':function(_0x4041d4,_0x57870c){return _0x4041d4!==_0x57870c;},'iWtXE':'KeIWn','zOceu':function(_0x24f68b,_0x19fbfa){return _0x24f68b>_0x19fbfa;},'GRDHw':function(_0x310a1e,_0x167d9f,_0x4e2d2a){return _0x310a1e(_0x167d9f,_0x4e2d2a);},'GwYAv':_0x2701d0(0x3cf),'vQPIi':function(_0x4dce3c,_0x55bd4f){return _0x4dce3c===_0x55bd4f;},'dbXMR':'TyOLy','XdWXA':function(_0x52e13a){return _0x52e13a();},'tQFQk':function(_0x59b73b,_0x2ee2d9){return _0x59b73b!==_0x2ee2d9;},'FPkpW':_0x2701d0(0x24f),'ISQna':'UvzAC','wyEkM':function(_0x3d45c2,_0x299c9f,_0xf33f5f,_0x515159,_0x1974e8){return _0x3d45c2(_0x299c9f,_0xf33f5f,_0x515159,_0x1974e8);},'TaNUc':'rgba('+'255,2'+'35,24'+'0,0.7'+'5)','yRPNb':_0x2701d0(0x17c)+_0x2701d0(0x5e1),'rHJaZ':'EYuSV','iJmEj':'Adblo'+'ck','DKnYA':'Hides'+'\x20kour'+_0x2701d0(0x384)+_0x2701d0(0x4fa)+'er\x20sl'+_0x2701d0(0x1db),'mSuai':function(_0x28a2f6,_0x567144){return _0x28a2f6(_0x567144);},'WihAj':_0x2701d0(0x625),'zPlsm':function(_0x1536ea,_0xdc2969){return _0x1536ea(_0xdc2969);},'HhrFa':function(_0x1a55c5,_0x4d5cd6){return _0x1a55c5(_0x4d5cd6);},'Klzwf':function(_0x25523d,_0x4aedcf){return _0x25523d<_0x4aedcf;},'sVGxP':'f32','JiHTD':function(_0x52c1e5,_0x1b9876,_0x33c682,_0x25f81c,_0xce0b82){return _0x52c1e5(_0x1b9876,_0x33c682,_0x25f81c,_0xce0b82);},'ZRdtS':function(_0x407f11,_0x479708,_0x55e28c,_0x278f0d,_0x402626){return _0x407f11(_0x479708,_0x55e28c,_0x278f0d,_0x402626);},'LqhHx':function(_0x37b1ab,_0x2c60cb,_0x323dac,_0x5b07e3,_0x158627){return _0x37b1ab(_0x2c60cb,_0x323dac,_0x5b07e3,_0x158627);},'PItra':_0x2701d0(0x22f),'FvWDi':function(_0x1568de,_0x4cbfc6,_0x2415db,_0x3d2b43,_0x5f02ba){return _0x1568de(_0x4cbfc6,_0x2415db,_0x3d2b43,_0x5f02ba);},'EdQyq':function(_0x61240b,_0x18ea6e,_0x53917a,_0x42ceaf,_0xdf508c){return _0x61240b(_0x18ea6e,_0x53917a,_0x42ceaf,_0xdf508c);},'XwPHi':function(_0x1d1621,_0x4d6d5b){return _0x1d1621!==_0x4d6d5b;},'dcuVT':_0x2701d0(0x420),'njHJH':'mouse','ybCyC':'mouse'+_0x2701d0(0x37f),'OrqOh':_0x2701d0(0x265)+'activ'+'e','SWxbA':_0x2701d0(0x6d3)+'ete','sRwlE':_0x2701d0(0x654)+_0x2701d0(0x380)+_0x2701d0(0x65f)+'d','gFxZI':function(_0x5338a9,_0x102b52){return _0x5338a9*_0x102b52;},'kUcNE':function(_0x111560,_0x119857){return _0x111560*_0x119857;},'BLeUp':function(_0x4df5f1,_0x108dc0){return _0x4df5f1*_0x108dc0;},'EQIHg':_0x2701d0(0x401)+'255,2'+'35,24'+'0,0.5'+'5)','ReWOG':function(_0x2b5286,_0xe46701){return _0x2b5286-_0xe46701;},'tAyNY':function(_0x631de6,_0x41e511){return _0x631de6-_0x41e511;},'eHrjz':function(_0x38c65a,_0x38199d){return _0x38c65a-_0x38199d;},'gUQVi':_0x2701d0(0x26e),'NqYgf':'KeyA','ceTGN':_0x2701d0(0x6d8),'jvcpB':function(_0x1ce75e,_0x2b33da){return _0x1ce75e+_0x2b33da;},'dgSCo':function(_0x5ef4e8,_0x236c1e){return _0x5ef4e8*_0x236c1e;},'Tjwpw':_0x2701d0(0x6b0)+'1','axpBw':function(_0x556447,_0x131375){return _0x556447(_0x131375);},'GOnCW':_0x2701d0(0x473),'HvTCZ':_0x2701d0(0x225),'bxhcr':function(_0x41db62,_0x1378f6,_0x3fc35d,_0x38cf7d,_0x343b89,_0x124f8a,_0x62779b){return _0x41db62(_0x1378f6,_0x3fc35d,_0x38cf7d,_0x343b89,_0x124f8a,_0x62779b);},'VpYcS':function(_0x5e3877,_0x10ab15){return _0x5e3877+_0x10ab15;},'LIkaj':function(_0x592e40,_0x2fbb1b){return _0x592e40/_0x2fbb1b;},'HXkix':function(_0x486917,_0x3bdb02){return _0x486917-_0x3bdb02;},'syIej':function(_0x3044a6,_0x52efff){return _0x3044a6-_0x52efff;},'fCQeS':function(_0xc099c1,_0x15fe03){return _0xc099c1-_0x15fe03;},'fQPce':function(_0x20a6a0,_0x30037a){return _0x20a6a0+_0x30037a;},'eQWKt':'1.1.0','hOguO':function(_0x4147d0,_0x9cff25,_0x1cdd21,_0x1a013a,_0x16a796,_0x49b236,_0xaaeab7,_0x923e19){return _0x4147d0(_0x9cff25,_0x1cdd21,_0x1a013a,_0x16a796,_0x49b236,_0xaaeab7,_0x923e19);},'DtlYm':_0x2701d0(0x5d8),'nJMCm':_0x2701d0(0x33e),'LJYSR':function(_0x383165,_0x444806,_0x167520,_0x4e99b4,_0x4c98b5,_0x5954f4,_0x2835e9,_0x58fdeb){return _0x383165(_0x444806,_0x167520,_0x4e99b4,_0x4c98b5,_0x5954f4,_0x2835e9,_0x58fdeb);},'Emdjv':_0x2701d0(0x419)+'th','nMrAb':_0x2701d0(0x442)+'ooter','mCfmB':function(_0x5b8df4,_0x53e484,_0x2c8071,_0x1df219,_0x3cff0a,_0x4d97f5,_0x42bed4,_0x1ec451){return _0x5b8df4(_0x53e484,_0x2c8071,_0x1df219,_0x3cff0a,_0x4d97f5,_0x42bed4,_0x1ec451);},'txdAT':_0x2701d0(0x36a)+_0x2701d0(0x1c8),'LRuzV':'switc'+'h','JkhPg':function(_0x12e150,_0x96009e){return _0x12e150(_0x96009e);},'uGreX':'--p','nXymJ':function(_0x469c91,_0x1cc7db){return _0x469c91/_0x1cc7db;},'FqqqK':'sk-ra'+'nge','FmOYg':'range','pgUNt':_0x2701d0(0x2e1),'CJYUm':'sk-va'+'l','QzEhK':_0x2701d0(0x3c8),'zrrYx':_0x2701d0(0x278),'pUeJf':function(_0x15de10,_0x57065c){return _0x15de10(_0x57065c);},'rioLg':_0x2701d0(0x239),'QyBdh':'mn-to'+'p','KopyL':_0x2701d0(0x1f5),'BiXDy':_0x2701d0(0x377)+'b','MyqzQ':'butto'+'n','jRlWk':_0x2701d0(0x5c0)+_0x2701d0(0x3de),'IAOIP':_0x2701d0(0x4c8),'OLZKr':_0x2701d0(0x6aa)+_0x2701d0(0x49c)+_0x2701d0(0x413),'SwxVJ':_0x2701d0(0x25d)+'t','NIooX':function(_0x4bb2fb,_0x1891a5){return _0x4bb2fb>_0x1891a5;},'QeQXP':_0x2701d0(0x394),'wEpYH':function(_0x2c5eca,_0x3129d3){return _0x2c5eca===_0x3129d3;},'fWxbL':_0x2701d0(0x14a)+_0x2701d0(0x6a6)+'ed','iRtEN':_0x2701d0(0x2f8)+'a.kou'+_0x2701d0(0x6dd),'NAliH':_0x2701d0(0x4f7),'ZxjDb':function(_0x28954e,_0x1a368d){return _0x28954e(_0x1a368d);},'WESbv':'zRgiB','WmFTE':'optio'+'n','xbaWo':_0x2701d0(0x5f5),'SraMb':'sk-la'+_0x2701d0(0x2f5),'LONMv':_0x2701d0(0x534)+'nt','evfpv':_0x2701d0(0x633),'xkfBf':_0x2701d0(0x27e)+'rd-he'+'ad','cjaRB':_0x2701d0(0x258)+'g','lmoRp':_0x2701d0(0x321)+_0x2701d0(0x268)+'\x20','UkRzJ':_0x2701d0(0x241)+'s','GGMSC':_0x2701d0(0x63e)+_0x2701d0(0x393)+'\x20','Ibxfv':_0x2701d0(0x424)+'vemen'+'t\x20','YTrNV':_0x2701d0(0x598)+'R:\x20','BJVef':_0x2701d0(0x685)+_0x2701d0(0x6e4)+'lock','ImAcL':'mTEIF','grYDh':_0x2701d0(0x6d0)+_0x2701d0(0x1b0),'YYlEM':_0x2701d0(0x489)+'2px\x20u'+_0x2701d0(0x207)+'ospac'+_0x2701d0(0x16b)+_0x2701d0(0x2e3)+'e','tvapH':_0x2701d0(0x2bb)+'rites'+_0x2701d0(0x568)+_0x2701d0(0x68e)+_0x2701d0(0x313)+_0x2701d0(0x2d7)+'ge.\x20B'+_0x2701d0(0x4fc)+'le\x20if'+_0x2701d0(0x468)+'serve'+_0x2701d0(0x33d)+_0x2701d0(0x560)+'s.','YixlE':function(_0x5362a9,_0x78d49c,_0x268b9f,_0x4e2379,_0x446ee0,_0x44358e){return _0x5362a9(_0x78d49c,_0x268b9f,_0x4e2379,_0x446ee0,_0x44358e);},'ZgwGe':_0x2701d0(0x333)+_0x2701d0(0x42b)+'\x20four'+'\x20Move'+_0x2701d0(0x388)+_0x2701d0(0x5df)+_0x2701d0(0x2e9)+_0x2701d0(0x319)+_0x2701d0(0x501)+'celer'+'ation'+'.','HETPw':'Jump\x20'+'%','WLkaa':_0x2701d0(0x2d6)+'-hop','IVQFL':_0x2701d0(0x2a8)+'ounte'+'r','aEFSq':_0x2701d0(0x129)+'es\x20on'+_0x2701d0(0x5b2)+'ad.\x20I'+_0x2701d0(0x33b)+'ches\x20'+_0x2701d0(0x56c)+_0x2701d0(0x61e)+_0x2701d0(0x22d)+'de,\x20t'+_0x2701d0(0x519)+'eeze\x20'+_0x2701d0(0x2a5)+_0x2701d0(0x472)+_0x2701d0(0x191)+_0x2701d0(0x533)+_0x2701d0(0x65c)+'\x20the\x20'+_0x2701d0(0x25e)+_0x2701d0(0x2df)+_0x2701d0(0x1a7)+_0x2701d0(0x28b),'ECJgt':'no\x20ch'+_0x2701d0(0x53a)+_0x2701d0(0x381)+_0x2701d0(0x623)+'ut\x20th'+'is','ngWln':_0x2701d0(0x399)+'amage'+_0x2701d0(0x13c)+_0x2701d0(0x524)+_0x2701d0(0x2ba)+_0x2701d0(0x4f5)+'\x20ban\x20'+_0x2701d0(0x3e1)+_0x2701d0(0x509)+_0x2701d0(0x662)+_0x2701d0(0x44c)+'on.','etRAT':function(_0x502a46,_0x1e5054,_0x5cd800,_0x4f085b){return _0x502a46(_0x1e5054,_0x5cd800,_0x4f085b);},'qHZZm':_0x2701d0(0x2ae)+'a\x20Kou'+'r\x20—\x20','PmNYM':_0x2701d0(0x23f)+'e','JlkXV':function(_0x2fe259,_0x3dc518){return _0x2fe259===_0x3dc518;},'oFfoo':'LXbIr','TrLpl':_0x2701d0(0x2b5),'eimLm':_0x2701d0(0x581)+'t','SFnRb':'Visua'+'l','eFOzI':'Misc','JZSDk':_0x2701d0(0x3e9)+'wn','KGbbn':_0x2701d0(0x47b)+_0x2701d0(0x5d2)+'ixed;'+_0x2701d0(0x6de)+'2px;r'+_0x2701d0(0x1eb)+_0x2701d0(0x39a)+'z-ind'+_0x2701d0(0x409)+_0x2701d0(0x43b)+_0x2701d0(0x60d)+_0x2701d0(0x54e)+':poin'+_0x2701d0(0x3d8)+'idth:'+_0x2701d0(0x551)+_0x2701d0(0x618)+'t:26p'+'x;opa'+'city:'+_0x2701d0(0x475)+_0x2701d0(0x323)+'tion:'+_0x2701d0(0x342)+_0x2701d0(0x335)+_0x2701d0(0x45b)+_0x2701d0(0x265)+'-even'+'ts:au'+_0x2701d0(0x3f8)+_0x2701d0(0x296)+_0x2701d0(0x637)+_0x2701d0(0x4f0)+'w(0\x200'+_0x2701d0(0x3b3)+_0x2701d0(0x401)+_0x2701d0(0x665)+'07,15'+_0x2701d0(0x344)+'))','xtDIf':_0x2701d0(0x426)+'9d','VBEyQ':_0x2701d0(0x19e)+'c6','qhYdr':'Assem'+'bly-C'+'Sharp'+_0x2701d0(0x280),'Lzard':'godDi'+'e','pdjzY':function(_0x5ec309,_0x570776,_0x310998,_0x745384,_0x527151,_0x291384,_0x4f35fc,_0x441b9b){return _0x5ec309(_0x570776,_0x310998,_0x745384,_0x527151,_0x291384,_0x4f35fc,_0x441b9b);},'crwkZ':_0x2701d0(0x13b),'FqLmn':_0x2701d0(0x4b0)+_0x2701d0(0x3dc),'MNvqV':_0x2701d0(0x59a)+_0x2701d0(0x1a9)+_0x2701d0(0x127),'GzwGE':_0x2701d0(0x31d)+'ve','KyrKy':'sqRPd'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+_0x2701d0(0x621)]||''))return;if(window[_0x2701d0(0x52e)+_0x2701d0(0x168)+_0x2701d0(0x65d)])return;window[_0x2701d0(0x52e)+'URA_K'+_0x2701d0(0x65d)]=!![];var _0xfdfabe=_0x45240d['xtDIf'],_0x576488=_0x45240d[_0x2701d0(0x34e)],_0x3c1b7d={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x45240d[_0x2701d0(0x1ff)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x5286e1={..._0x3c1b7d};try{Object[_0x2701d0(0x1fc)+'n'](_0x5286e1,JSON[_0x2701d0(0x36e)](localStorage[_0x2701d0(0x56e)+'em'](_0x2701d0(0x2f8)+_0x2701d0(0x611)+'r.v1')||'{}'));}catch(_0x3ed8c1){}function _0x5c50ef(){var _0x3a63e8=_0x2701d0;try{localStorage[_0x3a63e8(0x482)+'em'](_0x3a63e8(0x2f8)+'a.kou'+'r.v1',JSON[_0x3a63e8(0x672)+_0x3a63e8(0x579)](_0x5286e1));}catch(_0x121c83){}}var _0x42da00={'uwmk':!!window[_0x2701d0(0x171)+_0x2701d0(0x4fb)+_0x2701d0(0x5da)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x5286e1[_0x2701d0(0x2f4)+'ode'],'lastError':''};try{window[_0x2701d0(0x62d)+_0x2701d0(0x161)+_0x2701d0(0x593)+'r']('error',_0x33d22a=>{var _0x3cf7cf=_0x2701d0;try{var _0x27758b=_0x33d22a&&(_0x33d22a[_0x3cf7cf(0x303)+'ge']||_0x33d22a[_0x3cf7cf(0x2a2)]&&_0x33d22a['error'][_0x3cf7cf(0x303)+'ge'])||_0x45240d['YuBUN'];if(_0x33d22a&&_0x33d22a[_0x3cf7cf(0x263)+'ame'])_0x27758b+=_0x45240d['FWYHx'](_0x45240d['TssKb'],String(_0x33d22a[_0x3cf7cf(0x263)+_0x3cf7cf(0x621)])[_0x3cf7cf(0x287)]('/')[_0x3cf7cf(0x6ba)]())+':'+(_0x33d22a[_0x3cf7cf(0x5c7)+'o']||'?');_0x42da00[_0x3cf7cf(0x391)+_0x3cf7cf(0x5af)]=String(_0x27758b)[_0x3cf7cf(0x3ba)](-0x46a*-0x1+0x1*0x11c7+-0x1631,-0xab8+0x17*0xb+-0xa5b*-0x1);}catch(_0x146863){}});}catch(_0x5a26fd){}var _0xd91f91=null,_0x5a3cf5=null,_0xbc55f7={},_0x4f910f=[],_0x41d5c8=[],_0xc716f0=new Map();function _0x465d41(_0x49a4f5,_0x3f72e0){var _0x19823f=_0x2701d0;if(_0x45240d['ergNJ'](_0x19823f(0x350),_0x45240d[_0x19823f(0x264)])){if(!_0x3f72e0||_0x49a4f5[_0x19823f(0x479)+'des'](_0x3f72e0)||_0x45240d['zOceu'](_0x49a4f5['lengt'+'h'],0x2b*-0x99+-0x7*-0x4be+-0x73f))return;_0x49a4f5['push'](_0x3f72e0);}else{var _0x24b08b=_0x2befd6[_0x19823f(0x691)](_0x13289f);_0x38a68d['save'](),_0x56ee84['begin'+_0x19823f(0x62f)]();if(_0x100dc9[_0x19823f(0x45a)+'Rect'])_0x1b1691[_0x19823f(0x45a)+_0x19823f(0x531)](_0x22cbb6,_0xea5781,_0xae288,_0x5be67,(-0x1bc1+0x1f37+0x3*-0x125)*_0x1ab51d);else _0x338408['rect'](_0xcc2401,_0x10c0de,_0x370e94,_0x5a587b);_0x3dd46d[_0x19823f(0x4c0)+'tyle']=_0x24b08b?'rgba('+_0x19823f(0x665)+'07,15'+_0x19823f(0x1d1)+'5)':'rgba('+_0x19823f(0x476)+_0x19823f(0x523)+'7)',_0x386421[_0x19823f(0x28c)](),_0x36025e['lineW'+_0x19823f(0x257)]=0xb1d+0x21ec+-0x2d08,_0x18190a['strok'+_0x19823f(0x628)+'e']=_0x24b08b?_0x4b41e3:'rgba('+_0x19823f(0x665)+'07,15'+_0x19823f(0x150)+'5)',_0x15f2c4[_0x19823f(0x4a1)+'e'](),_0x24b08b&&(_0x2ac378[_0x19823f(0x4f0)+'wColo'+'r']=_0x5aa4bd,_0x26df0a['shado'+'wBlur']=0x12be*-0x1+0x168c+-0x3c0,_0xb35c08[_0x19823f(0x28c)](),_0x2a73fa[_0x19823f(0x4f0)+_0x19823f(0x395)]=0x1e7e+0x316+-0x2194),_0x3e4522[_0x19823f(0x4c0)+_0x19823f(0x2c5)]=_0x24b08b?_0x45240d[_0x19823f(0x249)]:_0x45240d['TJUpk'],_0x1e323f[_0x19823f(0x37b)+_0x19823f(0x371)]=_0x45240d['MAcmy'],_0x1def9[_0x19823f(0x449)+'aseli'+'ne']=_0x45240d[_0x19823f(0x21c)],_0x353e8f[_0x19823f(0x1b2)]=_0x45240d[_0x19823f(0x132)]('700\x20',_0x9eec0e['round'](_0x45240d['iBTVc'](0x5b9*-0x5+-0x7*-0x3e2+0x17b,_0x59ee31)))+(_0x19823f(0x2f3)+'-sans'+_0x19823f(0x573)+'f,sys'+_0x19823f(0x3e8)+'i,san'+'s-ser'+'if'),_0x409771['fillT'+_0x19823f(0x23e)](_0x5a1d05,_0x76e184+_0x45240d['ufESQ'](_0x431945,-0x42b+-0x954+-0x1*-0xd81),_0x4b9111+_0x45240d['ufESQ'](_0x12757f,0x3f5*0x6+0x17ca+-0x2f86)-(_0x306e00?_0x45240d['YTTqX'](0x1ab1+-0x184c+-0x260,_0xebcbbd):0x22d*-0xa+0x6*0x1b1+0xb9c)),_0x132d46&&(_0xe477a1[_0x19823f(0x1b2)]=_0x45240d['XZiMw']+_0x36c6d6[_0x19823f(0x45a)]((0x1ee1+-0xa68+0x147*-0x10)*_0x26e719)+_0x45240d['qnCEg'],_0x4dd83b['fillS'+_0x19823f(0x2c5)]=_0x24b08b?'#fff':_0x19823f(0x401)+_0x19823f(0x1ee)+_0x19823f(0x2b1)+_0x19823f(0x270)+'5)',_0x59fd84['fillT'+_0x19823f(0x23e)](_0x5522d9,_0x2d5779+_0x5526e3/(-0x1acf*0x1+-0x4d7+0x7ea*0x4),_0x45240d[_0x19823f(0x4df)](_0x28e952,_0x2776b7/(0x2686*-0x1+-0x1*-0x1436+0x1252))+(-0x1*0x17b5+0x203*-0x1+0x19c0)*_0x2d3e76)),_0x215415[_0x19823f(0x43a)+'re']();}}function _0x1cade7(_0x2b18bf,_0x3708ef,_0x3713a7,_0x504a4b){var _0x518297=_0x2701d0,_0x4992af=-0x1*0x21f4+0x1915+0x8df;try{_0x4992af=_0x3708ef&&_0x3708ef[_0x518297(0x46c)]?_0x3708ef[_0x518297(0x46c)]():-0x15*-0x1f+-0x526+0x29b;}catch(_0x19ac79){}if(!_0x4992af)return;_0x45240d['GRDHw'](_0x465d41,_0x2b18bf,_0x4992af),_0x3713a7[_0x504a4b]=_0x2b18bf['lengt'+'h'];if(_0x504a4b==='movem'+'ents'&&_0x2b18bf['lengt'+'h']){if(_0x45240d['GwYAv']===_0x45240d['GwYAv']){var _0x13825a=_0xbc55f7[_0x518297(0x31d)+'ve'];if(_0x13825a)try{_0x45240d[_0x518297(0x158)](_0x45240d[_0x518297(0x663)],_0x45240d['dbXMR'])?_0x13825a[_0x518297(0x1a4)+'ed']=![]:(_0x42fa0a[_0x518297(0x586)]=_0x309202,_0x4ca096());}catch(_0x315b2a){}}else try{new _0x5d03ef(_0x1643e0)['write'+_0x518297(0x2c1)](_0x5c7056,_0x45d84c,_0x18e708);}catch(_0x905898){}}}function _0x5c2275(_0x3ab4e1,_0x43da95,_0x1641bb){var _0x2825fe=_0x2701d0,_0x40249e=_0xc716f0['get'](_0x3ab4e1);!_0x40249e&&(_0x40249e=new Map(),_0xc716f0['set'](_0x3ab4e1,_0x40249e));if(!_0x40249e[_0x2825fe(0x691)](_0x43da95))try{var _0x3f3867=new _0xd91f91(_0x3ab4e1)[_0x2825fe(0x6d9)+'ield'](_0x43da95,_0x1641bb);_0x40249e['set'](_0x43da95,_0x3f3867!==undefined?_0x3f3867[_0x2825fe(0x46c)]():null);}catch(_0x364f18){_0x45240d[_0x2825fe(0x5bd)](_0x2825fe(0x2d1),'eXyJG')?(_0xfcb541['noSpr'+_0x2825fe(0x195)]=_0xd0f483,_0x45240d[_0x2825fe(0x28f)](_0x3e8b80)):_0x40249e[_0x2825fe(0x5c3)](_0x43da95,null);}return _0x40249e['get'](_0x43da95);}function _0x2fca18(_0x2b6bed,_0x489271,_0x2156c3,_0xf62d24){var _0x5a69b0=_0x2701d0;if(_0x5a69b0(0x16e)!==_0x45240d['ISQna'])try{new _0xd91f91(_0x2b6bed)[_0x5a69b0(0x3dd)+'Field'](_0x489271,_0x2156c3,_0xf62d24);}catch(_0xf33452){}else{var _0x3fe07e=new _0x485b16(_0x19e917)[_0x5a69b0(0x6d9)+'ield'](_0x4bea2e,_0x45240d['FPkpW']);return _0x3fe07e?_0x3fe07e[_0x5a69b0(0x46c)]():-0x1*-0x656+0x11*-0x106+0xb10;}}function _0x511888(_0x586732,_0x4e5387){var _0x14bb09=_0x2701d0;try{var _0x51fe00=new _0xd91f91(_0x586732)['readF'+_0x14bb09(0x17f)](_0x4e5387,_0x45240d['FPkpW']);return _0x51fe00?_0x51fe00[_0x14bb09(0x46c)]():0x115*-0x6+0x43*0x1c+-0xd6;}catch(_0x4e1c44){return 0x2138+-0x2f*0x25+-0x1a6d;}}function _0x1fab3b(_0x4d9755,_0x522dcf,_0x29592a,_0x5017a1){var _0xfc7b26=_0x2701d0,_0x3d40e5=_0x5c2275(_0x4d9755,_0x522dcf,_0x29592a);if(_0x3d40e5!=null)_0x45240d[_0xfc7b26(0x561)](_0x2fca18,_0x4d9755,_0x522dcf,_0x29592a,_0x3d40e5*_0x5017a1);}function _0x4e8f0f(_0xbef9f6,_0x1ae43e,_0x587851,_0x4995a7,_0x6faf8b,_0x26f231,_0x337a40){var _0x102fb6=_0x2701d0;try{var _0x1986bd=_0x5a3cf5['hookP'+'refix']({'typeName':_0x1ae43e,'methodName':_0x587851,'params':_0x4995a7,'returnType':_0x6faf8b},_0x26f231);return _0x1986bd[_0x102fb6(0x1a4)+'ed']=_0x337a40!==![],_0xbc55f7[_0xbef9f6]=_0x1986bd,_0x42da00['hooks'+'Total']++,_0x1986bd;}catch(_0x2696aa){if('GHYYZ'!=='GHYYZ')_0x4aa87b['fillS'+_0x102fb6(0x2c5)]=_0x331139||_0x45240d[_0x102fb6(0x4e5)],_0x4b5473[_0x102fb6(0x205)+_0x102fb6(0x23e)](_0x3cb369,_0x2d7bbd,_0x34de2a),_0x459146+=0x187+-0xf24+0xdad;else return console[_0x102fb6(0x130)](_0x102fb6(0x2da)+_0x102fb6(0x507)+_0x102fb6(0x1f2)+'ook\x20r'+'eg\x20fa'+_0x102fb6(0x5f3),_0xbef9f6,_0x2696aa&&_0x2696aa['messa'+'ge']),null;}}function _0x248907(_0x4dc3d8,_0x22f207,_0xc4d5d5,_0x4287a5,_0x5e83e9,_0x35cc32,_0x5c49a6){var _0x199287=_0x2701d0;try{var _0x93224a=_0x5a3cf5[_0x199287(0x12c)+'ostfi'+'x']({'typeName':_0x22f207,'methodName':_0xc4d5d5,'params':_0x4287a5,'returnType':_0x5e83e9},_0x35cc32);return _0x93224a[_0x199287(0x1a4)+'ed']=_0x5c49a6!==![],_0xbc55f7[_0x4dc3d8]=_0x93224a,_0x42da00[_0x199287(0x25e)+_0x199287(0x142)]++,_0x93224a;}catch(_0x4b3a70){return console[_0x199287(0x130)](_0x199287(0x2da)+'ra-ko'+_0x199287(0x1f2)+'ook\x20r'+'eg\x20fa'+_0x199287(0x5f3),_0x4dc3d8,_0x4b3a70&&_0x4b3a70[_0x199287(0x303)+'ge']),null;}}var _0x594596=()=>![];try{if(window['Unity'+'WebMo'+'dkit']&&!_0x5286e1['safeM'+_0x2701d0(0x227)]){_0xd91f91=window[_0x2701d0(0x171)+_0x2701d0(0x4fb)+'dkit']['Value'+_0x2701d0(0x448)+'er'],_0x5a3cf5=window['Unity'+_0x2701d0(0x4fb)+_0x2701d0(0x5da)]['Runti'+'me']['creat'+_0x2701d0(0x1aa)+'in']({'name':_0x2701d0(0x2ae)+_0x2701d0(0x4af),'version':'1.1.0','referencedAssemblies':[_0x45240d[_0x2701d0(0x6b7)]]});if(_0x5286e1[_0x2701d0(0x661)+'od'])_0x45240d[_0x2701d0(0x22a)](_0x4e8f0f,_0x2701d0(0x5d8),_0x2701d0(0x419)+'th',_0x2701d0(0x4d3)+_0x2701d0(0x31e)+'keHea'+_0x2701d0(0x4b1),[_0x45240d['nJMCm'],'i32'],undefined,_0x594596,!!_0x5286e1[_0x2701d0(0x5d8)]);if(_0x5286e1['hookG'+_0x2701d0(0x49f)])_0x4e8f0f(_0x45240d[_0x2701d0(0x3f6)],'OHeal'+'th',_0x2701d0(0x54a)+_0x2701d0(0x6a2),[_0x2701d0(0x33e),_0x2701d0(0x33e),_0x2701d0(0x33e),_0x45240d[_0x2701d0(0x6e6)],'i32'],undefined,_0x594596,!!_0x5286e1['god']);if(_0x5286e1[_0x2701d0(0x5a8)+_0x2701d0(0x20b)+'il'])_0x45240d[_0x2701d0(0x3d0)](_0x4e8f0f,'noRec'+_0x2701d0(0x1b0),_0x2701d0(0x304)+_0x2701d0(0x4d7)+'forms'+'.Over'+'tide.'+'Recoi'+'lMoti'+'on',_0x45240d['crwkZ'],[_0x45240d[_0x2701d0(0x6e6)]],undefined,_0x594596,!!_0x5286e1['noRec'+_0x2701d0(0x1b0)]);if(_0x5286e1['hookC'+_0x2701d0(0x3f2)+'e'])_0x45240d[_0x2701d0(0x67a)](_0x248907,_0x45240d[_0x2701d0(0x376)],_0x45240d[_0x2701d0(0x62e)],_0x45240d[_0x2701d0(0x620)],[_0x45240d[_0x2701d0(0x6e6)],_0x2701d0(0x33e)],undefined,(_0x53e2fe,_0x13b579)=>{var _0xa6a245=_0x2701d0;_0x1cade7(_0x41d5c8,_0x13b579,_0x42da00,_0x45240d[_0xa6a245(0x4d5)]);},!![]);if(_0x5286e1['hookC'+_0x2701d0(0x3f2)+'e'])_0x248907(_0x45240d[_0x2701d0(0x552)],_0x2701d0(0x304)+_0x2701d0(0x4d7)+_0x2701d0(0x5bc)+_0x2701d0(0x275)+'tide.'+_0x2701d0(0x220)+_0x2701d0(0x4a4),_0x2701d0(0x36a)+_0x2701d0(0x1c8),[_0x2701d0(0x33e)],_0x2701d0(0x33e),(_0x44baba,_0x506f71)=>{var _0x495101=_0x2701d0;_0x45240d['rHJaZ']===_0x45240d[_0x495101(0x46b)]?_0x1cade7(_0x4f910f,_0x506f71,_0x42da00,'movem'+_0x495101(0x407)):(_0x152db5={..._0x4313d2},_0x59bc42(),_0x2d03e7[_0x495101(0x48f)+'d']());},!![]);}}catch(_0x4b40bd){if(_0x45240d[_0x2701d0(0x22b)](_0x45240d['KyrKy'],_0x45240d[_0x2701d0(0x5b5)]))return[_0x12b8d5(_0x45240d['iJmEj'],_0x45240d[_0x2701d0(0x624)],_0x2df735[_0x2701d0(0x610)+'ck'],_0x1204a8=>{var _0x2b61b4=_0x2701d0;_0x56c47e[_0x2b61b4(0x610)+'ck']=_0x1204a8,_0x129693();},[_0x45240d['mSuai'](_0x37aa41,_0x2701d0(0x157)+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x2701d0(0x3d9)+_0x2701d0(0x657)+'.')])];else console[_0x2701d0(0x130)](_0x2701d0(0x2da)+'ra-ko'+_0x2701d0(0x1e2)+_0x2701d0(0x31a)+'nit\x20f'+'ailed'+':',_0x4b40bd&&_0x4b40bd['messa'+'ge']);}function _0x5a632e(_0x4f95f9,_0xad5a77){var _0x561cd5=_0x2701d0,_0x595458={'vaXTh':_0x561cd5(0x6b0),'SeDZa':function(_0x5139b7,_0xf808d3){return _0x5139b7+_0xf808d3;}},_0x4718f8=_0xbc55f7[_0x4f95f9];if(_0x4718f8){if(_0x45240d['WihAj']!=='HOLiC')try{_0x4718f8[_0x561cd5(0x1a4)+'ed']=!!_0xad5a77;}catch(_0x54d786){}else{if(!_0x156f94[_0x561cd5(0x4ae)+'ura'])_0x30a2ab[_0x561cd5(0x481)+'e'](_0x595458[_0x561cd5(0x1c1)]+_0x595458[_0x561cd5(0x403)](_0x3010ab['butto'+'n'],0x78a+0x403+-0xb8c));}}}_0x45240d['GRDHw'](setInterval,()=>{var _0x54684b=_0x2701d0,_0x484d3a={'JavWK':function(_0x4ad553){return _0x4ad553();}};if(!_0xd91f91||!window[_0x54684b(0x121)+'Insta'+'nce'])return;var _0x284648=(Number(_0x5286e1[_0x54684b(0x5df)+_0x54684b(0x480)])||0x21a8+-0xf8f+-0x3*0x5e7)/(-0xe7*-0x18+0x1*-0x5e+-0x14e6),_0x1fe72e=(_0x45240d[_0x54684b(0x50f)](Number,_0x5286e1['jumpP'+'ct'])||-0x1766+0x1d37+-0x56d)/(0x3c7*-0x1+-0x1ef+0x47*0x16),_0x30b352=(_0x45240d['zPlsm'](Number,_0x5286e1[_0x54684b(0x3a2)+_0x54684b(0x324)])||-0x941+0x1eb6+-0x1511)/(-0x4*-0x1cd+0x2*0xa09+0xd71*-0x2),_0x4bb01e=Math[_0x54684b(0x20c)](0xa24+-0x851+-0x1d2,_0x45240d['HhrFa'](Number,_0x5286e1[_0x54684b(0x126)+'eValu'+'e'])||-0x2488+0x121c+-0x32b*-0x6),_0x241619=_0x284648!==-0x1cf3+0xef2+0xe02||_0x1fe72e!==0x1fb3*-0x1+0x3*-0xa57+0x3eb9*0x1||_0x30b352!==-0x2453+-0x1b1c+0x14*0x32c||_0x5286e1['bhop'],_0x129f99=_0x5286e1['noSpr'+_0x54684b(0x195)]||_0x5286e1['damag'+_0x54684b(0x5be)]||_0x5286e1[_0x54684b(0x266)+'moExp']||_0x5286e1[_0x54684b(0x332)+'Exp'];if(!_0x241619&&!_0x129f99)return;try{for(var _0x3ccaf5=0x1ac9*-0x1+0x10*0x13+0x1999;_0x45240d[_0x54684b(0x6a7)](_0x3ccaf5,_0x4f910f[_0x54684b(0x24b)+'h']);_0x3ccaf5++){var _0x73efa5=_0x4f910f[_0x3ccaf5];if(!_0x73efa5)continue;_0x45240d[_0x54684b(0x5bd)](_0x284648,-0x863+0x67*-0x45+-0x5*-0x73b)&&(_0x1fab3b(_0x73efa5,-0x19bf+-0x165a*-0x1+0x38d,_0x45240d['sVGxP'],_0x284648),_0x45240d['JiHTD'](_0x1fab3b,_0x73efa5,-0x174e+0x122e*-0x1+0x29a8,'f32',_0x284648),_0x1fab3b(_0x73efa5,0x4e3+0x40*0x4f+-0x1873,_0x45240d['sVGxP'],_0x284648),_0x1fab3b(_0x73efa5,-0x683*0x1+-0x1*0x49b+0xb52,'f32',_0x284648),_0x1fab3b(_0x73efa5,0x1*0x1934+0x1ee3*0x1+-0x12a9*0x3,_0x45240d[_0x54684b(0x203)],_0x284648),_0x45240d['ZRdtS'](_0x1fab3b,_0x73efa5,0x25*-0x2f+0x1a0*-0x10+0x20eb,_0x45240d[_0x54684b(0x203)],_0x284648));if(_0x1fe72e!==-0x1c*0x140+0xc7*0x7+0x2c*0xac)_0x45240d['ZRdtS'](_0x1fab3b,_0x73efa5,0x1*-0x23de+0x10d1+0x1*0x135d,_0x54684b(0x2f7),_0x1fe72e);_0x30b352!==0x1d7e*-0x1+-0x88f*0x2+-0x1*-0x2e9d&&(_0x1fab3b(_0x73efa5,0x18ee+-0x11bb+-0x6eb,_0x54684b(0x2f7),_0x30b352),_0x45240d['LqhHx'](_0x1fab3b,_0x73efa5,-0x158f+-0x173e+0x2d19,_0x45240d[_0x54684b(0x203)],_0x30b352));if(_0x5286e1[_0x54684b(0x586)])_0x2fca18(_0x73efa5,-0x1*0x1cc3+0x2303*-0x1+0x2031*0x2,_0x45240d[_0x54684b(0x203)],-(0x25f+-0x7c1*-0x1+0x1b*-0x3b));}}catch(_0x503496){}try{for(var _0x1683e3=0x564*0x6+0x634+0x1346*-0x2;_0x1683e3<_0x41d5c8[_0x54684b(0x24b)+'h'];_0x1683e3++){var _0x902f0a=_0x45240d['GRDHw'](_0x511888,_0x41d5c8[_0x1683e3],-0x129f+0x18cf+-0x5f8);if(!_0x902f0a)continue;_0x5286e1['damag'+'eExp']&&(_0x2fca18(_0x902f0a,0x1871+-0x2b*0xc9+0x99e,_0x54684b(0x33e),_0x4bb01e),_0x2fca18(_0x902f0a,-0x4*0x18b+-0x1*-0x1455+-0xdd5,'i32',_0x4bb01e));_0x5286e1[_0x54684b(0x5b1)+_0x54684b(0x195)]&&(_0x45240d['tQFQk'](_0x45240d[_0x54684b(0x193)],_0x45240d[_0x54684b(0x193)])?(_0x7c1ca7['chCol'+'or']=_0x1bac04,_0x484d3a[_0x54684b(0x2bc)](_0x55093a)):(_0x45240d[_0x54684b(0x5d3)](_0x2fca18,_0x902f0a,-0x15d3+-0x5*0x37+0x2*0xbb7,_0x45240d[_0x54684b(0x203)],0xae+0x1bb4+-0x2*0xe31),_0x2fca18(_0x902f0a,0x2523+-0x5*0x23b+-0x1994,_0x45240d[_0x54684b(0x203)],0x1ee9+-0x815+-0x16d3)));if(_0x5286e1['infAm'+_0x54684b(0x4bd)])_0x45240d['EdQyq'](_0x2fca18,_0x902f0a,0x11e8+-0x18bc+0x730,_0x54684b(0x33e),-0x1*-0x394+-0x3*-0x583+0xa6*-0x19);_0x5286e1[_0x54684b(0x332)+_0x54684b(0x2e5)]&&(_0x45240d['XwPHi'](_0x45240d['dcuVT'],_0x45240d[_0x54684b(0x3c9)])?(_0x335ca6['preve'+_0x54684b(0x5fa)+'ault'](),_0x20a108()):(_0x45240d[_0x54684b(0x5fb)](_0x1fab3b,_0x902f0a,-0x15b*-0xb+-0x1*0x1aa7+-0x1*-0xc4a,_0x54684b(0x2f7),-0x1cd1+0x11d*-0x1b+0x3ae0+0.1),_0x45240d[_0x54684b(0x200)](_0x2fca18,_0x902f0a,0x1*-0x23b2+-0x1*0x343+0x2755,_0x54684b(0x2f7),0x2071+0xbdd*0x2+-0x382b+0.1)));}}catch(_0x23fbc7){}},0x3*0xad9+-0x2705+0x742),setInterval(()=>{var _0x638f19=_0x2701d0;_0x42da00[_0x638f19(0x232)+'oaded']=!!window['unity'+'Insta'+_0x638f19(0x57d)];try{var _0x2e0fdb=-0xc3a+0x1*0x22ae+-0x1*0x1674;for(var _0x53101b in _0xbc55f7){if(_0xbc55f7[_0x53101b]&&_0xbc55f7[_0x53101b]['appli'+'ed'])_0x2e0fdb++;}_0x42da00[_0x638f19(0x25e)+'Ok']=_0x2e0fdb;}catch(_0x5b0ff9){}},0x4b5*0x3+-0x1*-0x62a+-0x1061);var _0x47b734=new Set(),_0x590f69={0x1:[],0x3:[]},_0x494784=![];function _0x4c574c(_0x528ece){var _0x26fbfa=_0x2701d0;_0x47b734['add'](_0x528ece[_0x26fbfa(0x49e)]);}function _0x3d998a(_0x4557dd){var _0x36742e=_0x2701d0;_0x47b734['delet'+'e'](_0x4557dd[_0x36742e(0x49e)]);}function _0x2ae0c1(_0x1aec39){var _0x335a14=_0x2701d0;if(_0x1aec39[_0x335a14(0x4ae)+'ura'])return;_0x47b734[_0x335a14(0x33f)](_0x45240d[_0x335a14(0x1e6)]+_0x45240d['DizWf'](_0x1aec39[_0x335a14(0x58e)+'n'],0xe0f*0x2+-0xf40+-0xcdd));var _0x46f7f4=_0x590f69[_0x1aec39[_0x335a14(0x58e)+'n']+(0x2492+-0x1741*0x1+-0xd50)];if(_0x46f7f4){_0x46f7f4['push'](performance[_0x335a14(0x5d9)]());if(_0x46f7f4[_0x335a14(0x24b)+'h']>-0x1611+-0x755*-0x3+0x1*0x3a)_0x46f7f4['shift']();}}function _0xeab417(_0x3c38dc){var _0x4e9bb6=_0x2701d0;if(!_0x3c38dc['__sak'+'ura'])_0x47b734[_0x4e9bb6(0x481)+'e'](_0x4e9bb6(0x6b0)+(_0x3c38dc[_0x4e9bb6(0x58e)+'n']+(-0x3ec+-0xdea+0x11d7*0x1)));}function _0x193c40(){var _0x13f283=_0x2701d0;_0x47b734[_0x13f283(0x1a6)]();}function _0xe4335f(){var _0x49fb04=_0x2701d0,_0x5f3f96=('0|6|5'+'|4|3|'+_0x49fb04(0x5a4))[_0x49fb04(0x287)]('|'),_0x594891=0x177d+0x1*-0xea3+-0x8da;while(!![]){switch(_0x5f3f96[_0x594891++]){case'0':if(_0x494784)return;continue;case'1':window[_0x49fb04(0x62d)+'entLi'+'stene'+'r'](_0x49fb04(0x2a9),_0x193c40);continue;case'2':window[_0x49fb04(0x62d)+_0x49fb04(0x161)+_0x49fb04(0x593)+'r'](_0x49fb04(0x6b0)+'up',_0xeab417,!![]);continue;case'3':window[_0x49fb04(0x62d)+_0x49fb04(0x161)+_0x49fb04(0x593)+'r'](_0x45240d['ybCyC'],_0x2ae0c1,!![]);continue;case'4':window['addEv'+'entLi'+_0x49fb04(0x593)+'r'](_0x49fb04(0x4c2),_0x3d998a,!![]);continue;case'5':window[_0x49fb04(0x62d)+_0x49fb04(0x161)+_0x49fb04(0x593)+'r'](_0x49fb04(0x3e9)+'wn',_0x4c574c,!![]);continue;case'6':_0x494784=!![];continue;}break;}}function _0x2c93fc(_0x50073c){var _0x13bf19=_0x2701d0,_0x125563=_0x590f69[_0x50073c]||[],_0x36e202=performance[_0x13bf19(0x5d9)]();while(_0x125563[_0x13bf19(0x24b)+'h']&&_0x36e202-_0x125563[0x1*0x13b1+-0x5*0x7c9+0x133c]>0x478+0x1b68+-0x1bf8)_0x125563[_0x13bf19(0x3af)]();return _0x125563[_0x13bf19(0x24b)+'h'];}function _0x4df2f1(_0x501e49){var _0x1db573=_0x2701d0;if(document[_0x1db573(0x61d)]&&(document[_0x1db573(0x4c5)+_0x1db573(0x680)]===_0x45240d[_0x1db573(0x30f)]||_0x45240d['vQPIi'](document['ready'+_0x1db573(0x680)],_0x45240d['SWxbA'])))_0x501e49();else document[_0x1db573(0x62d)+_0x1db573(0x161)+_0x1db573(0x593)+'r'](_0x45240d[_0x1db573(0x539)],_0x501e49,{'once':!![]});}_0x4df2f1(()=>{var _0x3ceef5=_0x2701d0,_0x4ffc9f={'AcEkJ':function(_0x5bf59b,_0x5a0cac){return _0x45240d['NIooX'](_0x5bf59b,_0x5a0cac);},'mSEXX':function(_0x5e41f3,_0x3039f9){return _0x5e41f3===_0x3039f9;},'uguyo':_0x3ceef5(0x123)+_0x3ceef5(0x181)+_0x3ceef5(0x5d1)+'s','hbNbV':function(_0xcf02be,_0x2317a3){return _0xcf02be!==_0x2317a3;},'JYVXn':_0x45240d[_0x3ceef5(0x5ea)],'lHyjr':function(_0x3956a7,_0x1af800){var _0x481d3a=_0x3ceef5;return _0x45240d[_0x481d3a(0x6a7)](_0x3956a7,_0x1af800);},'KbEjZ':_0x3ceef5(0x36f),'AigOy':function(_0x2a7bbf,_0x46c644){return _0x45240d['wEpYH'](_0x2a7bbf,_0x46c644);},'ocEUc':function(_0x4188b5,_0x1dcad9){return _0x4188b5!==_0x1dcad9;},'xifKC':_0x45240d['fWxbL'],'vOOxq':function(_0x481560,_0x59d57c){return _0x45240d['JkhPg'](_0x481560,_0x59d57c);},'TpeYM':_0x3ceef5(0x346),'IuQvt':'lXnqC','MeZeY':_0x3ceef5(0x425),'KWmNJ':'LinZV','dXGgx':'rgba('+_0x3ceef5(0x1ee)+_0x3ceef5(0x2b1)+'0,0.7'+'5)','gYwuP':'top','RvEJa':'#ff6b'+'9d','xmitQ':function(_0x418851,_0x1f9fd1){return _0x418851(_0x1f9fd1);},'NPGuN':function(_0x483242,_0x27c756){return _0x483242+_0x27c756;},'ZTUWR':_0x45240d[_0x3ceef5(0x447)],'JlKmb':function(_0x15aa0b,_0x18164d){return _0x15aa0b>=_0x18164d;},'SIODZ':_0x45240d[_0x3ceef5(0x4ea)],'GrIvi':function(_0x2d377d){return _0x2d377d();},'atyLd':function(_0x470657,_0x306a21){return _0x470657(_0x306a21);},'zpYCp':function(_0x21c1f6,_0x14d366){var _0x20927c=_0x3ceef5;return _0x45240d[_0x20927c(0x500)](_0x21c1f6,_0x14d366);},'jZlUS':_0x3ceef5(0x2f8)+_0x3ceef5(0x611)+'r.ui.'+'v1','zCeoy':function(_0x52b1c2,_0x26ddf7){return _0x45240d['mSuai'](_0x52b1c2,_0x26ddf7);},'QSaep':'selec'+'t','cMIgw':_0x45240d['WESbv'],'OUeKU':_0x45240d[_0x3ceef5(0x12e)],'xoMmJ':_0x45240d[_0x3ceef5(0x5dc)],'vCjBj':_0x45240d[_0x3ceef5(0x436)],'DrbOG':_0x3ceef5(0x4d1)+'l','rAVEj':_0x45240d['SraMb'],'xhxFR':_0x45240d['LONMv'],'FosbO':function(_0x464c09,_0x2f5965){var _0x989965=_0x3ceef5;return _0x45240d[_0x989965(0x6a3)](_0x464c09,_0x2f5965);},'SDtSu':function(_0x307c1f,_0x49c6d8){return _0x307c1f+_0x49c6d8;},'PIGjg':_0x45240d[_0x3ceef5(0x27b)],'kXDcW':_0x45240d[_0x3ceef5(0x459)],'kGcHc':_0x45240d['cjaRB'],'fZNXj':function(_0x563639,_0x470502,_0x16f3ee){return _0x563639(_0x470502,_0x16f3ee);},'JLszh':'div','Rziwg':'sk-md'+_0x3ceef5(0x17d),'tpsyG':_0x45240d[_0x3ceef5(0x649)],'Njuqh':function(_0x1f56e5,_0x27cbdd){return _0x1f56e5+_0x27cbdd;},'aaFkx':function(_0x3b741f,_0x30ce83){return _0x45240d['VpYcS'](_0x3b741f,_0x30ce83);},'nlNXU':_0x45240d[_0x3ceef5(0x4b9)],'ABtXC':_0x3ceef5(0x176)+_0x3ceef5(0x667)+_0x3ceef5(0x622)+_0x3ceef5(0x5d5)+_0x3ceef5(0x52b),'niwVO':'\x20|\x20ga'+_0x3ceef5(0x51e),'GkBbC':_0x45240d[_0x3ceef5(0x683)],'VvWoH':_0x45240d[_0x3ceef5(0x1bc)],'wTyiA':_0x3ceef5(0x4e7),'DIDiD':_0x45240d['YTrNV'],'yohru':_0x45240d[_0x3ceef5(0x595)],'ZUKMN':'calls'+'\x20Unit'+_0x3ceef5(0x5f8)+'ne.Ap'+_0x3ceef5(0x6b8)+_0x3ceef5(0x6c9)+_0x3ceef5(0x29e)+_0x3ceef5(0x310)+'Frame'+_0x3ceef5(0x145),'DlvjA':function(_0x1fcaaf){var _0x455ece=_0x3ceef5;return _0x45240d[_0x455ece(0x28f)](_0x1fcaaf);},'RAoMi':_0x45240d[_0x3ceef5(0x575)],'eSBAE':function(_0x2ae9b0){return _0x2ae9b0();},'dmcuL':function(_0x4eb47e){return _0x4eb47e();},'xlLSN':_0x3ceef5(0x3be),'MdvRw':_0x45240d[_0x3ceef5(0x638)],'DlePB':function(_0x10b9a2,_0x223836){return _0x10b9a2!==_0x223836;},'qVZzq':_0x3ceef5(0x434),'tJeEa':'sk-co'+_0x3ceef5(0x563),'iGCQN':_0x45240d['YYlEM'],'uUSAy':function(_0xa55ad8,_0x46dc58){return _0xa55ad8+_0x46dc58;},'JJFfN':function(_0x207cd4,_0x1c3c2a,_0x18029c,_0x248b08,_0x306b12,_0x63ce25){return _0x207cd4(_0x1c3c2a,_0x18029c,_0x248b08,_0x306b12,_0x63ce25);},'tmoft':_0x3ceef5(0x594)+'\x20Reco'+_0x3ceef5(0x671)+'ion.T'+_0x3ceef5(0x2a4)+_0x3ceef5(0x188)+_0x3ceef5(0x1f7)+_0x3ceef5(0x66a)+_0x3ceef5(0x6e0)+_0x3ceef5(0x50d)+'r\x20adv'+'ance.','ntdMc':function(_0x533898,_0x433ab0,_0x19ba68,_0x10ac92,_0x2ed40b,_0x3fefb8){return _0x533898(_0x433ab0,_0x19ba68,_0x10ac92,_0x2ed40b,_0x3fefb8);},'IICqN':_0x45240d['tvapH'],'Fwemg':function(_0x4ae5d1,_0x444196,_0x1b2c52,_0x225553,_0x322a33,_0x1e8514){return _0x45240d['YixlE'](_0x4ae5d1,_0x444196,_0x1b2c52,_0x225553,_0x322a33,_0x1e8514);},'IREsq':_0x3ceef5(0x2dc)+'ite\x20A'+_0x3ceef5(0x23c)+_0x3ceef5(0x174),'gMbcM':'Speed','hAklc':_0x45240d[_0x3ceef5(0x28e)],'QGURp':function(_0x136b53,_0x230b83,_0x9c9199,_0x290f9d){return _0x136b53(_0x230b83,_0x9c9199,_0x290f9d);},'ZxQpw':_0x3ceef5(0x4a6)+'\x20%','GVSki':function(_0x3ff7d4,_0xac0885){return _0x3ff7d4!==_0xac0885;},'xEWAy':function(_0x3bd0e8,_0x2750ab,_0x31861a,_0x287f8b){return _0x3bd0e8(_0x2750ab,_0x31861a,_0x287f8b);},'yXdYp':_0x45240d[_0x3ceef5(0x2fe)],'jNRho':function(_0x460de8,_0x1c3e5b,_0x124f65,_0x2a774d){return _0x460de8(_0x1c3e5b,_0x124f65,_0x2a774d);},'NLHoF':'Gravi'+_0x3ceef5(0x43f),'KqjaS':_0x45240d[_0x3ceef5(0x314)],'WolyK':function(_0x5199c1,_0x5642d9,_0x20f5c4,_0x362133,_0x2fd170,_0x5f11d3){return _0x5199c1(_0x5642d9,_0x20f5c4,_0x362133,_0x2fd170,_0x5f11d3);},'IKLmj':_0x3ceef5(0x2b0)+_0x3ceef5(0x429)+'t','KNSZS':'Custo'+'m\x20cen'+_0x3ceef5(0x6cb)+'rossh'+_0x3ceef5(0x457),'Itgdr':_0x45240d[_0x3ceef5(0x39c)],'XoRnd':_0x3ceef5(0x6b4)+'emy\x20c'+_0x3ceef5(0x6e5)+_0x3ceef5(0x283)+_0x3ceef5(0x32b)+_0x3ceef5(0x34f)+_0x3ceef5(0x234)+'\x20GetV'+_0x3ceef5(0x24a)+_0x3ceef5(0x387)+'ers\x20t'+_0x3ceef5(0x4ee)+'gybac'+'k\x20on.','gwFYY':_0x3ceef5(0x339)+'ck','JGtMv':'Takes'+'\x20effe'+'ct\x20on'+_0x3ceef5(0x5b2)+_0x3ceef5(0x16c)+_0x3ceef5(0x3d9)+'ggled'+'.','DJyrG':_0x3ceef5(0x26f)+_0x3ceef5(0x474)+'(over'+'lay\x20o'+_0x3ceef5(0x32c),'ahjQt':_0x3ceef5(0x594)+_0x3ceef5(0x1e1)+_0x3ceef5(0x1f3)+_0x3ceef5(0x5d6)+'—\x20no\x20'+_0x3ceef5(0x50a)+_0x3ceef5(0x25e)+_0x3ceef5(0x3ed)+_0x3ceef5(0x163)+'\x20if\x20m'+'atche'+_0x3ceef5(0x6ae)+_0x3ceef5(0x252)+_0x3ceef5(0x24d),'aSSuI':_0x45240d[_0x3ceef5(0x164)],'jkCwA':_0x3ceef5(0x549)+'risk\x20'+'switc'+'hes','txVyf':'Each\x20'+_0x3ceef5(0x144)+_0x3ceef5(0x26d)+'ls\x20a\x20'+'WASM\x20'+'tramp'+_0x3ceef5(0x2b4)+_0x3ceef5(0x21d)+_0x3ceef5(0x217)+'hole\x20'+'page\x20'+_0x3ceef5(0x46e)+_0x3ceef5(0x2c4)+_0x3ceef5(0x62a)+_0x3ceef5(0x5ac)+'ault\x20'+'-\x20a\x20s'+_0x3ceef5(0x231)+'ure\x20t'+'hat\x20d'+_0x3ceef5(0x5d7)+'ot\x20ma'+'tch\x20t'+'he\x20re'+'al\x20me'+_0x3ceef5(0x3ab)+_0x3ceef5(0x508)+_0x3ceef5(0x44e)+_0x3ceef5(0x3b0)+_0x3ceef5(0x570)+_0x3ceef5(0x530)+_0x3ceef5(0x656)+_0x3ceef5(0x660)+'\x27\x20the'+_0x3ceef5(0x274)+'nt\x20it'+'\x20is\x20c'+_0x3ceef5(0x681)+'.\x20Tur'+'n\x20the'+_0x3ceef5(0x199)+'one\x20a'+_0x3ceef5(0x19c)+'ime,\x20'+'reloa'+'d,\x20an'+'d\x20see'+'\x20whic'+_0x3ceef5(0x1cb)+'\x20your'+_0x3ceef5(0x208)+'d\x20cho'+_0x3ceef5(0x20a)+'n.','iwFVz':function(_0x32ce42,_0x28ae05,_0x258279,_0x126ac1){return _0x32ce42(_0x28ae05,_0x258279,_0x126ac1);},'lEPcN':'godDi'+_0x3ceef5(0x2cf)+'ealth'+'.Loca'+_0x3ceef5(0x653),'rFCWE':_0x3ceef5(0x248)+_0x3ceef5(0x589)+_0x3ceef5(0x684)+_0x3ceef5(0x40e)+_0x3ceef5(0x22e)+_0x3ceef5(0x3d7)+'ounde'+'d)','sWkWD':_0x45240d['ECJgt'],'oRfte':_0x45240d['ngWln'],'cMmRx':_0x3ceef5(0x49b)+'r','tUGIb':function(_0x1681cd,_0x50de22,_0x4f893d,_0xab427e){var _0x33b059=_0x3ceef5;return _0x45240d[_0x33b059(0x469)](_0x1681cd,_0x50de22,_0x4f893d,_0xab427e);},'EPIzs':function(_0x251715,_0xfc7bd8){return _0x251715(_0xfc7bd8);},'ArzPK':_0x3ceef5(0x5ad),'ppdnt':'shown','Ienjd':function(_0xa1a660,_0x5eb12b){return _0xa1a660>_0x5eb12b;},'qWUqT':function(_0x3aa3a2){return _0x3aa3a2();},'PCARI':_0x45240d['qHZZm'],'ZfCGS':_0x45240d[_0x3ceef5(0x345)],'AaXPw':_0x3ceef5(0x14b)+_0x3ceef5(0x5ee)+_0x3ceef5(0x1fb)+_0x3ceef5(0x26b)+_0x3ceef5(0x418)+_0x3ceef5(0x294)+_0x3ceef5(0x63b)+'(relo'+'ad\x20to'+_0x3ceef5(0x3e5)+')','cEEYD':function(_0x40f773,_0x2bfb3a){return _0x40f773+_0x2bfb3a;},'ZNVAF':function(_0x5406c7,_0x153e65){return _0x5406c7+_0x153e65;},'IxcQz':'loade'+'d','WVvjo':'held','HNjoU':'UWMK\x20'+_0x3ceef5(0x242)+_0x3ceef5(0x587)+_0x3ceef5(0x3c6)+_0x3ceef5(0x271)+'ly\x20(r'+'einst'+_0x3ceef5(0x64d)+_0x3ceef5(0x450)+_0x3ceef5(0x6a4)+_0x3ceef5(0x3cb)};_0x5286e1[_0x3ceef5(0x610)+'ck']&&setInterval(()=>{var _0x4d2e9a=_0x3ceef5,_0x1a8430={'orqDH':function(_0x4224ba,_0x304dd8){var _0x401d87=_0x4fda;return _0x4ffc9f[_0x401d87(0x40c)](_0x4224ba,_0x304dd8);}};try{if('jGIfK'!==_0x4d2e9a(0x1fa))for(var _0x4ac4fd of[_0x4d2e9a(0x497)+_0x4d2e9a(0x3b1)+_0x4d2e9a(0x458)+_0x4d2e9a(0x23b)+'nt','kour-'+_0x4d2e9a(0x301)+_0x4d2e9a(0x2c3)+_0x4d2e9a(0x135)+'t','kour-'+_0x4d2e9a(0x3b1)+_0x4d2e9a(0x652)+'-pare'+'nt','fulls'+'creen'+'-banr'+'s']){var _0x46e685=document['getEl'+'ement'+_0x4d2e9a(0x541)](_0x4ac4fd);if(_0x46e685&&_0x4ffc9f[_0x4d2e9a(0x3bf)](_0x4ac4fd,_0x4ffc9f['uguyo'])){if(_0x4ffc9f[_0x4d2e9a(0x520)](_0x4d2e9a(0x394),_0x4ffc9f['JYVXn'])){_0x24a9b4['push'](_0x35eb32[_0x4d2e9a(0x5d9)]());if(_0x1a8430[_0x4d2e9a(0x582)](_0xfe5363[_0x4d2e9a(0x24b)+'h'],-0x2*0xb7b+-0x687+0x1*0x1da5))_0x57a854['shift']();}else{var _0x117372=_0x46e685[_0x4d2e9a(0x3aa)+_0x4d2e9a(0x243)];for(var _0x248279=-0x1*0x1aa1+0x1*0xd55+0xd4c;_0x4ffc9f[_0x4d2e9a(0x68c)](_0x248279,_0x117372[_0x4d2e9a(0x24b)+'h']);_0x248279++){if(_0x4d2e9a(0x36f)===_0x4ffc9f['KbEjZ']){if(_0x117372[_0x248279]['id']&&_0x4ffc9f['AigOy'](_0x117372[_0x248279]['id'][_0x4d2e9a(0x6d7)+'Of'](_0x4d2e9a(0x497)+'io_'),-0x8*-0x1ac+0x10bb+-0x1e1b))_0x117372[_0x248279][_0x4d2e9a(0x5ad)]['displ'+'ay']='none';}else return _0x50c0fe['warn']('[saku'+_0x4d2e9a(0x507)+_0x4d2e9a(0x1f2)+_0x4d2e9a(0x68d)+_0x4d2e9a(0x521)+_0x4d2e9a(0x5f3),_0x32be6d,_0x4fed4e&&_0x59523a[_0x4d2e9a(0x303)+'ge']),null;}}}else{if(_0x46e685)_0x46e685[_0x4d2e9a(0x5ad)][_0x4d2e9a(0x651)+'ay']='none';}}else _0x1fd520[_0x4d2e9a(0x1ca)+'e']=_0x243c0c,_0xada78b();}catch(_0xba4f84){}},0x13*0x5+0xda4+0x17*-0x45);var _0x13baa6=document[_0x3ceef5(0x6d6)+'eElem'+'ent'](_0x3ceef5(0x5cf)+'s');_0x13baa6[_0x3ceef5(0x5ad)][_0x3ceef5(0x1f4)+'xt']='posit'+_0x3ceef5(0x5d2)+_0x3ceef5(0x6b2)+_0x3ceef5(0x389)+':0;wi'+_0x3ceef5(0x4a8)+'00vw;'+'heigh'+'t:100'+'vh;z-'+_0x3ceef5(0x6d7)+':2147'+'48364'+_0x3ceef5(0x689)+_0x3ceef5(0x53b)+_0x3ceef5(0x3a6)+_0x3ceef5(0x41d)+'e';var _0x2e1a0a=_0x13baa6[_0x3ceef5(0x493)+_0x3ceef5(0x4da)]('2d');function _0x3f5db8(){var _0x10f9a9=_0x3ceef5;try{var _0x2032ec=document['fulls'+_0x10f9a9(0x181)+_0x10f9a9(0x415)+'nt'],_0x4ddbf6=_0x2032ec&&_0x2032ec[_0x10f9a9(0x3e4)+'me']!=='CANVA'+'S'?_0x2032ec:document[_0x10f9a9(0x61d)]||document['docum'+_0x10f9a9(0x2f9)+_0x10f9a9(0x6cf)];if(_0x13baa6[_0x10f9a9(0x135)+_0x10f9a9(0x2f6)]!==_0x4ddbf6)_0x4ddbf6[_0x10f9a9(0x19b)+_0x10f9a9(0x211)+'d'](_0x13baa6);}catch(_0x1faabd){if(_0x10f9a9(0x346)!==_0x4ffc9f['TpeYM']){_0x21fe72['stopP'+_0x10f9a9(0x4ab)+_0x10f9a9(0x2d0)]();var _0x11e704=_0x4ffc9f[_0x10f9a9(0x3db)](_0x25c2aa['getAt'+_0x10f9a9(0x2e2)+'te'](_0x4ffc9f['xifKC']),_0x10f9a9(0x692));_0x429ee9[_0x10f9a9(0x63d)+_0x10f9a9(0x2e2)+'te']('aria-'+_0x10f9a9(0x6a6)+'ed',_0x3bb176(_0x11e704)),_0x4ffc9f[_0x10f9a9(0x201)](_0x435205,_0x11e704);}else try{if(_0x4ffc9f['IuQvt']===_0x4ffc9f[_0x10f9a9(0x4ec)]){var _0x27605f=new _0x481213(_0x54f8fd)[_0x10f9a9(0x6d9)+_0x10f9a9(0x17f)](_0x44d966,_0x51b3cc);_0x17d688['set'](_0x1abdaa,_0x27605f!==_0x1579e1?_0x27605f[_0x10f9a9(0x46c)]():null);}else document[_0x10f9a9(0x61d)]['appen'+_0x10f9a9(0x211)+'d'](_0x13baa6);}catch(_0x409386){}}}var _0x2cbd58={'w':0x0,'h':0x0,'dpr':0x0};function _0x266e39(){var _0x21ec88=_0x3ceef5,_0x546984=(_0x21ec88(0x1bf)+'|5|7|'+'8|1|4'+'|0')[_0x21ec88(0x287)]('|'),_0x1dffa8=-0x3b4*0x9+-0x1*0x7ac+-0x8*-0x520;while(!![]){switch(_0x546984[_0x1dffa8++]){case'0':_0x2e1a0a['setTr'+_0x21ec88(0x58c)+'rm'](_0x28b4cc,0x54+-0x1d4a+-0x1cf6*-0x1,0x1e69+0x1db+-0x2044,_0x28b4cc,0x1709+0x5d*0x7+0x1994*-0x1,-0x1ad1+0x1fab+-0x19e*0x3);continue;case'1':_0x13baa6['width']=Math['round'](_0x45240d['gFxZI'](_0x567322,_0x28b4cc));continue;case'2':if(_0x567322===_0x2cbd58['w']&&_0x291cb2===_0x2cbd58['h']&&_0x28b4cc===_0x2cbd58[_0x21ec88(0x467)])return;continue;case'3':var _0x567322=window[_0x21ec88(0x13d)+'Width'],_0x291cb2=window['inner'+'Heigh'+'t'];continue;case'4':_0x13baa6[_0x21ec88(0x618)+'t']=Math[_0x21ec88(0x45a)](_0x45240d['iBTVc'](_0x291cb2,_0x28b4cc));continue;case'5':_0x2cbd58['w']=_0x567322;continue;case'6':var _0x28b4cc=window['devic'+'ePixe'+_0x21ec88(0x14c)+'o']||-0x19d5+-0x1f+0x19f5;continue;case'7':_0x2cbd58['h']=_0x291cb2;continue;case'8':_0x2cbd58[_0x21ec88(0x467)]=_0x28b4cc;continue;}break;}}var _0xe415ec=0x1ce0+-0x1*0x8aa+-0x1436,_0x55af47=performance['now'](),_0x41bd6c=0x7*-0x54d+0x1*0x1bf7+0x41*0x24;function _0x4d64f3(_0x1e6a5b){var _0x4c9b55=_0x3ceef5,_0x2a7575={'CUMtK':function(_0x103649,_0x55652c){var _0x117c47=_0x4fda;return _0x45240d[_0x117c47(0x158)](_0x103649,_0x55652c);},'ueMQO':_0x4c9b55(0x532),'obMrU':function(_0x5530ff,_0x1660ec){return _0x5530ff*_0x1660ec;},'JdAtp':_0x4c9b55(0x401)+_0x4c9b55(0x665)+_0x4c9b55(0x1d8)+_0x4c9b55(0x1d1)+'5)','qxyvO':'hMDLw','CysqX':_0x45240d[_0x4c9b55(0x1de)],'rjEkZ':'middl'+'e','sckWn':_0x45240d[_0x4c9b55(0x604)],'xVIAu':function(_0x3dfb3d,_0x44f18c){var _0x569c86=_0x4c9b55;return _0x45240d[_0x569c86(0x147)](_0x3dfb3d,_0x44f18c);},'vFiAg':function(_0x1c3c1e,_0x5352c7){return _0x1c3c1e+_0x5352c7;},'McQGO':function(_0x28d323,_0x357ecc){return _0x28d323/_0x357ecc;},'pTxLo':function(_0x518bf7,_0x1a7e8c){return _0x45240d['kUcNE'](_0x518bf7,_0x1a7e8c);},'wiBZE':function(_0x1e5966,_0x17b3f5){var _0x4ff8b7=_0x4c9b55;return _0x45240d[_0x4ff8b7(0x511)](_0x1e5966,_0x17b3f5);},'KWqKV':_0x45240d[_0x4c9b55(0x249)],'XUZdW':_0x45240d[_0x4c9b55(0x4d0)],'BKAAi':function(_0x1ad6f5,_0x56871b){return _0x1ad6f5/_0x56871b;}},_0x8aa7f7=Number(_0x5286e1[_0x4c9b55(0x5e2)+'le'])||-0x1ad1*0x1+0x43*-0x5b+0x32a3,_0x5106c6=_0x45240d['BLeUp'](0x1*-0x227a+-0x2377+0x4613,_0x8aa7f7),_0x55df81=_0x45240d[_0x4c9b55(0x511)](0x1895+0x1297*0x1+-0x2*0x1594,_0x8aa7f7),_0x6efb0=_0x45240d[_0x4c9b55(0x511)](_0x5106c6,0x1*-0x8d3+-0x1c1a+0x24f0)+_0x55df81*(0xc9c+0x3*-0xbd7+-0x16eb*-0x1),_0x4a0b6f=_0x5106c6*(-0x33*-0x79+0x62a*0x3+-0x2a96)+_0x45240d[_0x4c9b55(0x495)](_0x55df81,-0xe8*-0xf+0x274*-0x1+-0xb22),_0xd19bab=_0x5286e1['ksPos'],_0x4066a2=_0xd19bab==='br'?_0x45240d['ReWOG'](_0x1e6a5b[_0x4c9b55(0x379)]-(0x1*0xf59+-0x15ea+0x6a1),_0x6efb0):_0x1e6a5b[_0x4c9b55(0x4b4)]+(0xa8+0x8d9+-0x971),_0x27dbdd=_0x45240d[_0x4c9b55(0x158)](_0xd19bab,'ml')?_0x45240d['tAyNY'](_0x45240d['DizWf'](_0x1e6a5b[_0x4c9b55(0x574)],_0x1e6a5b[_0x4c9b55(0x618)+'t']/(0x1242+0x1f79+-0x31b9)),_0x4a0b6f/(0xb99+-0xe27*0x1+-0x290*-0x1)):_0x45240d[_0x4c9b55(0x488)](_0x1e6a5b[_0x4c9b55(0x3c7)+'m']-_0x4a0b6f,_0x45240d[_0x4c9b55(0x158)](_0xd19bab,'bl')?0x127e+-0x1f71*0x1+0xd53:-0x15c5+0x1f*0x13d+0x1c8*-0x9),_0x58c9cd=(_0x32551f,_0x4b7056,_0x3e7911,_0x5a6fc1,_0x54f843,_0x5cbaf3,_0x4d3ea2)=>{var _0x874f3=_0x4c9b55;if(_0x2a7575['CUMtK'](_0x2a7575[_0x874f3(0x464)],'grhwr')){var _0x849e5e=_0x47b734[_0x874f3(0x691)](_0x4b7056);_0x2e1a0a['save'](),_0x2e1a0a[_0x874f3(0x16d)+'Path']();if(_0x2e1a0a[_0x874f3(0x45a)+_0x874f3(0x531)])_0x2e1a0a[_0x874f3(0x45a)+_0x874f3(0x531)](_0x3e7911,_0x5a6fc1,_0x54f843,_0x5cbaf3,_0x2a7575[_0x874f3(0x34c)](-0x552+-0x418+-0x1*-0x971,_0x8aa7f7));else _0x2e1a0a['rect'](_0x3e7911,_0x5a6fc1,_0x54f843,_0x5cbaf3);_0x2e1a0a[_0x874f3(0x4c0)+_0x874f3(0x2c5)]=_0x849e5e?_0x2a7575[_0x874f3(0x36d)]:'rgba('+_0x874f3(0x476)+_0x874f3(0x523)+'7)',_0x2e1a0a[_0x874f3(0x28c)](),_0x2e1a0a[_0x874f3(0x348)+_0x874f3(0x257)]=0x1dc6+0x1*-0x1d59+-0x6c,_0x2e1a0a['strok'+_0x874f3(0x628)+'e']=_0x849e5e?_0x576488:'rgba('+_0x874f3(0x665)+_0x874f3(0x1d8)+'7,0.3'+'5)',_0x2e1a0a['strok'+'e']();if(_0x849e5e){if('JWsbD'===_0x2a7575[_0x874f3(0x1d4)]){var _0x9f59ed=0x266e+0xb79+-0x1ff*0x19;for(var _0xaa3252 in _0x4a4dba){if(_0x463a7a[_0xaa3252]&&_0x4c8286[_0xaa3252]['appli'+'ed'])_0x9f59ed++;}_0x480261[_0x874f3(0x25e)+'Ok']=_0x9f59ed;}else _0x2e1a0a['shado'+_0x874f3(0x3e2)+'r']=_0xfdfabe,_0x2e1a0a['shado'+_0x874f3(0x395)]=-0xdc1+-0x1412+0x21e1,_0x2e1a0a[_0x874f3(0x28c)](),_0x2e1a0a[_0x874f3(0x4f0)+_0x874f3(0x395)]=-0x15f0+-0x2e*-0xf+0x2*0x99f;}_0x2e1a0a['fillS'+'tyle']=_0x849e5e?_0x874f3(0x53d):_0x874f3(0x401)+'255,2'+_0x874f3(0x2b1)+_0x874f3(0x14e)+')',_0x2e1a0a[_0x874f3(0x37b)+_0x874f3(0x371)]=_0x2a7575[_0x874f3(0x18e)],_0x2e1a0a[_0x874f3(0x449)+_0x874f3(0x360)+'ne']=_0x2a7575['rjEkZ'],_0x2e1a0a['font']=_0x874f3(0x1c6)+Math['round'](_0x2a7575[_0x874f3(0x34c)](-0x2519*-0x1+0x1b81*-0x1+0x2*-0x4c6,_0x8aa7f7))+_0x2a7575['sckWn'],_0x2e1a0a['fillT'+_0x874f3(0x23e)](_0x32551f,_0x3e7911+_0x2a7575[_0x874f3(0x4d8)](_0x54f843,-0x255*0x3+0x222f+0x3e2*-0x7),_0x2a7575[_0x874f3(0x4de)](_0x5a6fc1,_0x2a7575['McQGO'](_0x5cbaf3,-0x6fc+-0x1dc4+0x24c2))-(_0x4d3ea2?_0x2a7575[_0x874f3(0x4b5)](0x1fa9+0xb*-0x1ad+-0xd35,_0x8aa7f7):-0x70f+0x52b+0x2*0xf2)),_0x4d3ea2&&(_0x2e1a0a['font']=_0x2a7575['vFiAg'](_0x874f3(0x504)+Math[_0x874f3(0x45a)](_0x2a7575[_0x874f3(0x627)](-0x2*0xd27+0x29*-0xb8+0x37cf,_0x8aa7f7)),'px\x20ui'+'-sans'+_0x874f3(0x573)+_0x874f3(0x3c0)+_0x874f3(0x3e8)+_0x874f3(0x1b4)+_0x874f3(0x21e)+'if'),_0x2e1a0a[_0x874f3(0x4c0)+'tyle']=_0x849e5e?_0x2a7575['KWqKV']:_0x2a7575['XUZdW'],_0x2e1a0a[_0x874f3(0x205)+_0x874f3(0x23e)](_0x4d3ea2,_0x2a7575['vFiAg'](_0x3e7911,_0x2a7575['McQGO'](_0x54f843,0xbe2+-0x2071+-0x249*-0x9)),_0x2a7575[_0x874f3(0x4de)](_0x5a6fc1,_0x2a7575['BKAAi'](_0x5cbaf3,-0x1*-0x18a1+0x2d2+-0x1b71))+(-0x1753+0x81f+0xf3c)*_0x8aa7f7)),_0x2e1a0a['resto'+'re']();}else{var _0x354930=_0xb133fa(_0x48ab7e,_0x265546,_0x319123);if(_0x354930!=null)_0x21254a(_0x594692,_0x40e198,_0x59d9d6,_0x354930*_0x304575);}};_0x58c9cd('W',_0x45240d[_0x4c9b55(0x13a)],_0x4066a2+_0x5106c6+_0x55df81,_0x27dbdd,_0x5106c6,_0x5106c6),_0x58c9cd('A',_0x45240d[_0x4c9b55(0x40f)],_0x4066a2,_0x27dbdd+_0x5106c6+_0x55df81,_0x5106c6,_0x5106c6),_0x58c9cd('S',_0x45240d[_0x4c9b55(0x1bd)],_0x45240d[_0x4c9b55(0x4df)](_0x45240d[_0x4c9b55(0x224)](_0x4066a2,_0x5106c6),_0x55df81),_0x45240d[_0x4c9b55(0x224)](_0x27dbdd+_0x5106c6,_0x55df81),_0x5106c6,_0x5106c6),_0x58c9cd('D','KeyD',_0x4066a2+_0x45240d[_0x4c9b55(0x224)](_0x5106c6,_0x55df81)*(-0x25fd+-0x2261+0x4860),_0x27dbdd+_0x5106c6+_0x55df81,_0x5106c6,_0x5106c6);var _0x33ba90=(_0x6efb0-_0x55df81)/(0xbc2+0x1*0x1c8d+-0x21f*0x13),_0x3a6cf1=_0x45240d[_0x4c9b55(0x256)](_0x27dbdd,_0x45240d[_0x4c9b55(0x2a3)](_0x5106c6+_0x55df81,0x109+0x185*-0x17+0x21ec));_0x58c9cd(_0x4c9b55(0x4ef),_0x45240d['Tjwpw'],_0x4066a2,_0x3a6cf1,_0x33ba90,_0x5106c6,_0x5286e1[_0x4c9b55(0x2d2)]?_0x45240d[_0x4c9b55(0x196)](_0x2c93fc,-0x8b7*0x3+-0xa5*-0x2d+-0x1*0x2db)+_0x4c9b55(0x225):''),_0x58c9cd(_0x45240d[_0x4c9b55(0x37a)],'mouse'+'3',_0x4066a2+_0x33ba90+_0x55df81,_0x3a6cf1,_0x33ba90,_0x5106c6,_0x5286e1['ksCps']?_0x45240d['jvcpB'](_0x2c93fc(-0x2*-0x199+0x1*0x86d+-0xb9c),_0x45240d[_0x4c9b55(0x44b)]):''),_0x45240d[_0x4c9b55(0x4a3)](_0x58c9cd,'','Space',_0x4066a2,_0x45240d[_0x4c9b55(0x5c4)](_0x3a6cf1,_0x5106c6)+_0x55df81,_0x6efb0,_0x5106c6*(0xc5*-0x9+-0x16f2+0x1ddf+0.45));}function _0x29c9da(_0x200313){var _0x2e7db4=_0x3ceef5,_0x385bc3=_0x200313[_0x2e7db4(0x513)]/(0x31*-0x4f+-0x24ce+0x33ef),_0x2a1cff=_0x45240d['LIkaj'](_0x200313[_0x2e7db4(0x618)+'t'],-0x263d+0xf*0x69+0x2018),_0x4aa682=Number(_0x5286e1[_0x2e7db4(0x1ca)+'e'])||-0x2329*-0x1+0x56*-0x6f+0x222,_0x3a6832=/^#[0-9a-f]{6}$/i['test'](_0x5286e1[_0x2e7db4(0x237)+'or'])?_0x5286e1[_0x2e7db4(0x237)+'or']:'#ff6b'+'9d';_0x2e1a0a[_0x2e7db4(0x2ef)](),_0x2e1a0a['strok'+_0x2e7db4(0x628)+'e']=_0x3a6832,_0x2e1a0a['fillS'+_0x2e7db4(0x2c5)]=_0x3a6832,_0x2e1a0a['lineW'+_0x2e7db4(0x257)]=Math['max'](-0x1*0x26dd+-0x20d0+-0x16f*-0x32+0.5,_0x45240d['YTTqX'](0x4*0x722+-0x1*-0x13d5+-0x305b,_0x4aa682)),_0x2e1a0a['shado'+_0x2e7db4(0x3e2)+'r']=_0x3a6832,_0x2e1a0a[_0x2e7db4(0x4f0)+'wBlur']=0x9b2*-0x2+0x20a*0x3+0xd4c;var _0x2293c4=(0x16cf+0x25*0xe1+-0x374e)*_0x4aa682,_0x3dc765=(-0x9f*0xd+-0x1*-0x1ab1+0x2*-0x94b)*_0x4aa682;_0x2e1a0a[_0x2e7db4(0x16d)+_0x2e7db4(0x62f)](),_0x2e1a0a['moveT'+'o'](_0x45240d['HXkix'](_0x385bc3-_0x2293c4,_0x3dc765),_0x2a1cff),_0x2e1a0a['lineT'+'o'](_0x385bc3-_0x2293c4,_0x2a1cff),_0x2e1a0a[_0x2e7db4(0x42f)+'o'](_0x385bc3+_0x2293c4,_0x2a1cff),_0x2e1a0a[_0x2e7db4(0x18a)+'o'](_0x385bc3+_0x2293c4+_0x3dc765,_0x2a1cff),_0x2e1a0a[_0x2e7db4(0x42f)+'o'](_0x385bc3,_0x45240d[_0x2e7db4(0x2d9)](_0x45240d['fCQeS'](_0x2a1cff,_0x2293c4),_0x3dc765)),_0x2e1a0a['lineT'+'o'](_0x385bc3,_0x2a1cff-_0x2293c4),_0x2e1a0a[_0x2e7db4(0x42f)+'o'](_0x385bc3,_0x45240d['BmmOf'](_0x2a1cff,_0x2293c4)),_0x2e1a0a[_0x2e7db4(0x18a)+'o'](_0x385bc3,_0x45240d[_0x2e7db4(0x1b9)](_0x2a1cff,_0x2293c4)+_0x3dc765),_0x2e1a0a[_0x2e7db4(0x4a1)+'e'](),_0x2e1a0a[_0x2e7db4(0x16d)+'Path'](),_0x2e1a0a['arc'](_0x385bc3,_0x2a1cff,(-0x305*0x5+0x1b57+0xf1*-0xd+0.6000000000000001)*_0x4aa682,-0x1ff2+-0x1973+0x833*0x7,_0x45240d[_0x2e7db4(0x511)](Math['PI'],-0x7*0x2e0+0xa1e+0xa04)),_0x2e1a0a['fill'](),_0x2e1a0a['resto'+'re']();}function _0x1c0e42(_0x797b59){var _0x1ac98e=_0x3ceef5,_0x169476={'LUemR':function(_0x4c0276,_0xe59740){return _0x4c0276===_0xe59740;},'PalJj':'fulls'+_0x1ac98e(0x181)+'-banr'+'s','ELhDJ':function(_0x365b73,_0x347f9b){return _0x365b73<_0x347f9b;},'nitmN':_0x1ac98e(0x497)+_0x1ac98e(0x1b5),'zQGZL':'none'};_0x2e1a0a['save'](),_0x2e1a0a[_0x1ac98e(0x1b2)]='600\x201'+_0x1ac98e(0x63c)+_0x1ac98e(0x207)+_0x1ac98e(0x2e3)+_0x1ac98e(0x16b)+_0x1ac98e(0x2e3)+'e',_0x2e1a0a['textA'+'lign']='left',_0x2e1a0a[_0x1ac98e(0x449)+'aseli'+'ne']=_0x4ffc9f[_0x1ac98e(0x694)];var _0x81895d=0x6*0x5ee+-0x1*0x1e9d+-0x1*0x4cb,_0xc428fa=-0xb3a+-0x19b5+0x24fb,_0x3529bc=(_0x3ac610,_0x40b259)=>{var _0x25e2ba=_0x1ac98e;if(_0x4ffc9f[_0x25e2ba(0x3bf)](_0x4ffc9f[_0x25e2ba(0x186)],_0x4ffc9f[_0x25e2ba(0x186)]))_0x2e1a0a['fillS'+'tyle']=_0x40b259||_0x4ffc9f[_0x25e2ba(0x148)],_0x2e1a0a[_0x25e2ba(0x205)+'ext'](_0x3ac610,_0xc428fa,_0x81895d),_0x81895d+=0x658*-0x4+0x1*0x4eb+0x67*0x33;else{var _0x58abb2=_0x23041e[_0x25e2ba(0x1ad)+'ement'+_0x25e2ba(0x541)](_0x56b173);if(_0x58abb2&&_0x169476[_0x25e2ba(0x5c8)](_0x46fbf7,_0x169476['PalJj'])){var _0x2ce334=_0x58abb2[_0x25e2ba(0x3aa)+_0x25e2ba(0x243)];for(var _0x2b935d=-0x2*0x3a4+0x1*0x1c57+-0x150f;_0x169476['ELhDJ'](_0x2b935d,_0x2ce334[_0x25e2ba(0x24b)+'h']);_0x2b935d++){if(_0x2ce334[_0x2b935d]['id']&&_0x2ce334[_0x2b935d]['id'][_0x25e2ba(0x6d7)+'Of'](_0x169476[_0x25e2ba(0x29b)])===-0x1*0x15eb+-0x1639+0x2c24)_0x2ce334[_0x2b935d][_0x25e2ba(0x5ad)][_0x25e2ba(0x651)+'ay']=_0x169476[_0x25e2ba(0x5e5)];}}else{if(_0x58abb2)_0x58abb2['style']['displ'+'ay']=_0x169476[_0x25e2ba(0x5e5)];}}};_0x3529bc(_0x1ac98e(0x3b5)+'A\x20KOU'+'R\x20v1.'+'1',_0x4ffc9f[_0x1ac98e(0x2c8)]);if(_0x5286e1[_0x1ac98e(0x545)])_0x4ffc9f[_0x1ac98e(0x1f0)](_0x3529bc,_0x4ffc9f['NPGuN'](_0x41bd6c,_0x1ac98e(0x3d6)));if(!_0x42da00['gameL'+_0x1ac98e(0x312)])_0x3529bc(_0x1ac98e(0x38b)+_0x1ac98e(0x3c2)+_0x1ac98e(0x5ef)+'e…',_0x1ac98e(0x401)+_0x1ac98e(0x665)+'80,19'+'0,0.6'+')');_0x2e1a0a[_0x1ac98e(0x43a)+'re']();}function _0x381740(){var _0x465a87=_0x3ceef5,_0x10a11e={'PYAJC':_0x4ffc9f['ZTUWR']};_0x4ffc9f[_0x465a87(0x1f0)](requestAnimationFrame,_0x381740),_0xe415ec++;var _0x32ec57=performance[_0x465a87(0x5d9)]();_0x4ffc9f[_0x465a87(0x6af)](_0x32ec57-_0x55af47,-0x2456+0xd55+-0x1*-0x18f5)&&(_0x4ffc9f['SIODZ']==='HwXSA'?_0x20b53d[_0x465a87(0x482)+'em'](_0x10a11e[_0x465a87(0x6ac)],_0x49311e[_0x465a87(0x672)+'gify'](_0x5385ae)):(_0x41bd6c=Math[_0x465a87(0x45a)](_0xe415ec*(-0x2d*0xa7+-0x25d7+-0x13*-0x3be)/(_0x32ec57-_0x55af47)),_0xe415ec=0x1886+0x18e8+0x14d*-0x26,_0x55af47=_0x32ec57));_0x266e39(),_0x4ffc9f[_0x465a87(0x5c5)](_0x3f5db8),_0x2e1a0a['clear'+_0x465a87(0x531)](-0x19*-0x95+-0x1ec7+0x103a,0x1567+0x1*-0x17ba+0x253,_0x2cbd58['w'],_0x2cbd58['h']);var _0x406a6c={'left':0x0,'top':0x0,'right':_0x2cbd58['w'],'bottom':_0x2cbd58['h'],'width':_0x2cbd58['w'],'height':_0x2cbd58['h']};if(_0x5286e1[_0x465a87(0x276)+'hair'])_0x29c9da(_0x406a6c);if(_0x5286e1['keyst'+'rokes'])_0x4ffc9f[_0x465a87(0x41c)](_0x4d64f3,_0x406a6c);_0x4ffc9f[_0x465a87(0x298)](_0x1c0e42,_0x406a6c);}var _0x4e8353=document[_0x3ceef5(0x6d6)+'eElem'+_0x3ceef5(0x4a4)](_0x3ceef5(0x239));_0x4e8353['id']='sakur'+'a-ui',_0x4e8353[_0x3ceef5(0x5ad)][_0x3ceef5(0x1f4)+'xt']='posit'+'ion:f'+'ixed;'+_0x3ceef5(0x389)+_0x3ceef5(0x2f0)+'index'+_0x3ceef5(0x2d5)+_0x3ceef5(0x44a)+'7;poi'+_0x3ceef5(0x53b)+_0x3ceef5(0x3a6)+_0x3ceef5(0x41d)+'e;';var _0x1ea5ed=_0x4e8353[_0x3ceef5(0x5ce)+_0x3ceef5(0x6bc)+'ow']({'mode':_0x3ceef5(0x235)});(document[_0x3ceef5(0x61d)]||document['docum'+_0x3ceef5(0x2f9)+_0x3ceef5(0x6cf)])['appen'+'dChil'+'d'](_0x4e8353);var _0x17bb7f=![],_0x45d8d4={};try{if(_0x45240d[_0x3ceef5(0x5b7)](_0x45240d['oFfoo'],_0x45240d['TrLpl'])){var _0x4b2598={'ErgNh':function(_0x4255df,_0x5f133c,_0x45cae3,_0x815fce,_0x234bd6){return _0x4255df(_0x5f133c,_0x45cae3,_0x815fce,_0x234bd6);}};if(_0x156b9a[_0x3ceef5(0x171)+'WebMo'+'dkit']&&!_0x125927[_0x3ceef5(0x2f4)+_0x3ceef5(0x227)]){_0x270a51=_0x25532d[_0x3ceef5(0x171)+_0x3ceef5(0x4fb)+'dkit'][_0x3ceef5(0x64a)+_0x3ceef5(0x448)+'er'],_0x3248ce=_0x4171c8[_0x3ceef5(0x171)+'WebMo'+_0x3ceef5(0x5da)][_0x3ceef5(0x631)+'me'][_0x3ceef5(0x6d6)+'ePlug'+'in']({'name':_0x3ceef5(0x2ae)+'aKour','version':_0x45240d[_0x3ceef5(0x59d)],'referencedAssemblies':['Assem'+_0x3ceef5(0x198)+'Sharp'+_0x3ceef5(0x280)]});if(_0x38bf51['hookG'+'od'])_0x45240d['hOguO'](_0x3757ba,_0x45240d['DtlYm'],_0x3ceef5(0x419)+'th',_0x3ceef5(0x4d3)+_0x3ceef5(0x31e)+'keHea'+'lth',[_0x45240d[_0x3ceef5(0x6e6)],'i32'],_0x2c3744,_0x5c5b31,!!_0x112d97['god']);if(_0xd05416['hookG'+_0x3ceef5(0x49f)])_0x45240d['LJYSR'](_0x1106e6,'godDi'+'e',_0x45240d[_0x3ceef5(0x3f0)],_0x3ceef5(0x54a)+_0x3ceef5(0x6a2),['i32',_0x45240d[_0x3ceef5(0x6e6)],_0x45240d[_0x3ceef5(0x6e6)],_0x45240d['nJMCm'],_0x3ceef5(0x33e)],_0x4db4ac,_0x2c331f,!!_0x115c42[_0x3ceef5(0x5d8)]);if(_0x4a5c19['hookN'+_0x3ceef5(0x20b)+'il'])_0x45240d[_0x3ceef5(0x67a)](_0xfd5185,_0x3ceef5(0x6d0)+_0x3ceef5(0x1b0),'Legio'+'nPlat'+'forms'+'.Over'+_0x3ceef5(0x51a)+_0x3ceef5(0x452)+_0x3ceef5(0x329)+'on','Tick',[_0x45240d[_0x3ceef5(0x6e6)]],_0x34329e,_0x4f6bff,!!_0x570df0['noRec'+_0x3ceef5(0x1b0)]);if(_0x32bb0b['hookC'+_0x3ceef5(0x3f2)+'e'])_0x485925(_0x45240d['nMrAb'],'OShoo'+_0x3ceef5(0x3dc),_0x3ceef5(0x59a)+'meRun'+_0x3ceef5(0x127),[_0x3ceef5(0x33e),_0x45240d[_0x3ceef5(0x6e6)]],_0x45d1ad,(_0x457810,_0x2ff19e)=>{var _0x70f556=_0x3ceef5;_0x1a6093(_0x493b64,_0x2ff19e,_0x29dc9a,_0x70f556(0x17c)+_0x70f556(0x5e1));},!![]);if(_0x4dd656['hookC'+_0x3ceef5(0x3f2)+'e'])_0x45240d[_0x3ceef5(0x22a)](_0x130ca3,_0x3ceef5(0x31d)+'ve','Legio'+_0x3ceef5(0x4d7)+_0x3ceef5(0x5bc)+'.Over'+'tide.'+'Movem'+_0x3ceef5(0x4a4),_0x45240d[_0x3ceef5(0x223)],[_0x45240d[_0x3ceef5(0x6e6)]],_0x3ceef5(0x33e),(_0xdfd812,_0x6b839a)=>{var _0x1803fc=_0x3ceef5;_0x4b2598['ErgNh'](_0x2ee76e,_0x1bcdf8,_0x6b839a,_0x3b9bd5,_0x1803fc(0x446)+_0x1803fc(0x407));},!![]);}}else _0x45d8d4=JSON[_0x3ceef5(0x36e)](localStorage[_0x3ceef5(0x56e)+'em'](_0x3ceef5(0x2f8)+_0x3ceef5(0x611)+'r.ui.'+'v1')||'{}');}catch(_0x212bd4){}function _0x4297ca(){var _0x1a3799=_0x3ceef5;try{localStorage[_0x1a3799(0x482)+'em'](_0x4ffc9f[_0x1a3799(0x1ec)],JSON[_0x1a3799(0x672)+_0x1a3799(0x579)](_0x45d8d4));}catch(_0x14eee4){}}function _0x2a6d79(_0x5a1ea8,_0x183f99){var _0x36a431=_0x3ceef5,_0x12a3c0=(_0x36a431(0x6b5)+_0x36a431(0x204)+_0x36a431(0x6e1))['split']('|'),_0x3f6736=-0x191e*-0x1+0x23d5*-0x1+0xd3*0xd;while(!![]){switch(_0x12a3c0[_0x3f6736++]){case'0':_0x4f1eaf[_0x36a431(0x63d)+_0x36a431(0x2e2)+'te']('role',_0x45240d[_0x36a431(0x286)]);continue;case'1':var _0x4f1eaf=document['creat'+_0x36a431(0x48a)+_0x36a431(0x4a4)](_0x36a431(0x58e)+'n');continue;case'2':_0x4f1eaf['setAt'+_0x36a431(0x2e2)+'te']('aria-'+_0x36a431(0x6a6)+'ed',_0x45240d[_0x36a431(0x485)](String,!!_0x5a1ea8));continue;case'3':return _0x4f1eaf;case'4':_0x4f1eaf['type']='butto'+'n';continue;case'5':_0x4f1eaf[_0x36a431(0x68f)+'ck']=_0xcceaba=>{var _0x414da3=_0x36a431;_0xcceaba[_0x414da3(0x1c9)+'ropag'+'ation']();var _0x201b8e=_0x4f1eaf['getAt'+_0x414da3(0x2e2)+'te'](_0x414da3(0x14a)+'check'+'ed')!==_0x414da3(0x692);_0x4f1eaf['setAt'+_0x414da3(0x2e2)+'te']('aria-'+_0x414da3(0x6a6)+'ed',_0x4ffc9f['xmitQ'](String,_0x201b8e)),_0x4ffc9f['zCeoy'](_0x183f99,_0x201b8e);};continue;case'6':_0x4f1eaf['class'+_0x36a431(0x194)]='sk-sw'+_0x36a431(0x349);continue;}break;}}function _0x564ef(_0x482303,_0x4973d4,_0x1797e1,_0x285333,_0x2142cb){var _0x1b4ca8=_0x3ceef5,_0x5af294={'KZNXf':function(_0x2a3691,_0x52ef38){var _0x193c9b=_0x4fda;return _0x45240d[_0x193c9b(0x548)](_0x2a3691,_0x52ef38);},'UfYER':_0x45240d['uGreX'],'rCHgE':function(_0x316e24,_0x36992b){return _0x316e24*_0x36992b;},'YIcYf':function(_0x319fb1,_0x5dc55a){var _0x510b92=_0x4fda;return _0x45240d[_0x510b92(0x307)](_0x319fb1,_0x5dc55a);}},_0xe793c7=document[_0x1b4ca8(0x6d6)+_0x1b4ca8(0x48a)+_0x1b4ca8(0x4a4)]('div');_0xe793c7['class'+_0x1b4ca8(0x194)]=_0x45240d[_0x1b4ca8(0x529)];var _0x14e4cf=document['creat'+_0x1b4ca8(0x48a)+_0x1b4ca8(0x4a4)](_0x1b4ca8(0x3c8));_0x14e4cf[_0x1b4ca8(0x15d)]=_0x45240d[_0x1b4ca8(0x44f)],_0x14e4cf[_0x1b4ca8(0x279)+'Name']='sk-sl'+_0x1b4ca8(0x216),_0x14e4cf['min']=_0x4973d4,_0x14e4cf['max']=_0x1797e1,_0x14e4cf[_0x1b4ca8(0x5a6)]=_0x285333,_0x14e4cf['value']=_0x482303;var _0x496e4f=document['creat'+_0x1b4ca8(0x48a)+_0x1b4ca8(0x4a4)](_0x45240d['pgUNt']);_0x496e4f['class'+_0x1b4ca8(0x194)]=_0x45240d['CJYUm'],_0x496e4f[_0x1b4ca8(0x591)+'onten'+'t']=String(_0x482303);var _0x16336c=()=>{var _0x1db0a7=_0x1b4ca8;_0x496e4f[_0x1db0a7(0x591)+_0x1db0a7(0x30e)+'t']=_0x5af294['KZNXf'](String,_0x14e4cf[_0x1db0a7(0x336)]),_0xe793c7['style']['setPr'+_0x1db0a7(0x626)+'y'](_0x5af294[_0x1db0a7(0x2ec)],_0x5af294['rCHgE'](_0x5af294[_0x1db0a7(0x2b6)](_0x14e4cf['value']-_0x4973d4,_0x1797e1-_0x4973d4),0x1*-0x173b+0x1*-0x2351+0x3af0)+'%');};return _0x14e4cf[_0x1b4ca8(0x29c)+'ut']=()=>{var _0x17ce19=_0x1b4ca8;if(_0x17ce19(0x688)!==_0x17ce19(0x33c))_0x16336c(),_0x2142cb(_0x5af294[_0x17ce19(0x64b)](Number,_0x14e4cf['value']));else try{_0x4e4e78[_0x17ce19(0x1a4)+'ed']=![];}catch(_0x2e1f90){}},_0x16336c(),_0xe793c7[_0x1b4ca8(0x19b)+'d'](_0x14e4cf,_0x496e4f),_0xe793c7;}function _0x30a3e3(_0x20adc4,_0x6910f0){var _0x1f7c57=_0x3ceef5;if(_0x1f7c57(0x673)==='LlKHg')_0x7778fe[_0x1f7c57(0x545)]=_0x542ebe,_0x37d4c0();else{var _0x337301=document[_0x1f7c57(0x6d6)+_0x1f7c57(0x48a)+_0x1f7c57(0x4a4)](_0x45240d['QzEhK']);return _0x337301['type']=_0x45240d[_0x1f7c57(0x1a1)],_0x337301['class'+_0x1f7c57(0x194)]=_0x1f7c57(0x3a4)+_0x1f7c57(0x563),_0x337301[_0x1f7c57(0x336)]=/^#[0-9a-f]{6}$/i[_0x1f7c57(0x675)](_0x20adc4)?_0x20adc4:_0x1f7c57(0x426)+'9d',_0x337301[_0x1f7c57(0x29c)+'ut']=()=>_0x6910f0(_0x337301[_0x1f7c57(0x336)]),_0x337301;}}function _0x3ac8b4(_0x2ceedf,_0x36daaf,_0xaf98bd){var _0x40bc8d=_0x3ceef5,_0x2aaeb4={'xYUpC':function(_0x37773f,_0x264c55){return _0x37773f+_0x264c55;},'oYyEP':function(_0x206526,_0x1028d5){return _0x206526+_0x1028d5;},'ktLMm':function(_0xd82f9,_0xc797e3){return _0xd82f9(_0xc797e3);}},_0x42584d=document[_0x40bc8d(0x6d6)+_0x40bc8d(0x48a)+_0x40bc8d(0x4a4)](_0x4ffc9f[_0x40bc8d(0x5cd)]);_0x42584d[_0x40bc8d(0x279)+_0x40bc8d(0x194)]=_0x40bc8d(0x3c5)+_0x40bc8d(0x3ef);for(var [_0x2666db,_0x4704dc]of _0x36daaf){if(_0x4ffc9f[_0x40bc8d(0x606)]!==_0x4ffc9f[_0x40bc8d(0x606)])_0x59207c['addEv'+_0x40bc8d(0x161)+'stene'+'r'](_0x40bc8d(0x2a2),_0x5e4d53=>{var _0x561e6a=_0x40bc8d;try{var _0x57fb8b=_0x5e4d53&&(_0x5e4d53['messa'+'ge']||_0x5e4d53['error']&&_0x5e4d53[_0x561e6a(0x2a2)]['messa'+'ge'])||_0x561e6a(0x3eb)+'wn';if(_0x5e4d53&&_0x5e4d53[_0x561e6a(0x263)+_0x561e6a(0x621)])_0x57fb8b+=_0x2aaeb4[_0x561e6a(0x66f)](_0x2aaeb4['oYyEP']('\x20@\x20',_0x2aaeb4['ktLMm'](_0x19dafd,_0x5e4d53['filen'+_0x561e6a(0x621)])[_0x561e6a(0x287)]('/')[_0x561e6a(0x6ba)]()),':')+(_0x5e4d53[_0x561e6a(0x5c7)+'o']||'?');_0x56c744[_0x561e6a(0x391)+'rror']=_0x45649c(_0x57fb8b)[_0x561e6a(0x3ba)](-0x1e7d*-0x1+0x153*-0x16+-0x15b*0x1,-0x25b*-0x6+-0x1844+0xac2);}catch(_0x5323f4){}});else{var _0x189221=document['creat'+_0x40bc8d(0x48a)+_0x40bc8d(0x4a4)](_0x4ffc9f[_0x40bc8d(0x5c9)]);_0x189221['value']=_0x2666db,_0x189221['textC'+_0x40bc8d(0x30e)+'t']=_0x4704dc,_0x42584d[_0x40bc8d(0x19b)+_0x40bc8d(0x211)+'d'](_0x189221);}}return _0x42584d['value']=_0x2ceedf,_0x42584d[_0x40bc8d(0x358)+'nge']=()=>_0xaf98bd(_0x42584d[_0x40bc8d(0x336)]),_0x42584d;}function _0x4b7c81(_0x44f69b,_0x1723cc){var _0x1cca63=_0x3ceef5,_0x57fb76={'lfuhF':_0x4ffc9f['xoMmJ']},_0x3a380e=document['creat'+_0x1cca63(0x48a)+'ent'](_0x1cca63(0x58e)+'n');return _0x3a380e[_0x1cca63(0x15d)]=_0x4ffc9f[_0x1cca63(0x45c)],_0x3a380e[_0x1cca63(0x279)+_0x1cca63(0x194)]=_0x1cca63(0x2bd)+'n',_0x3a380e['textC'+_0x1cca63(0x30e)+'t']=_0x44f69b,_0x3a380e['oncli'+'ck']=_0x50681c=>{var _0x3b3aca=_0x1cca63;_0x57fb76[_0x3b3aca(0x49d)]!==_0x3b3aca(0x38f)?(_0x50681c[_0x3b3aca(0x1c9)+_0x3b3aca(0x4ab)+'ation'](),_0x1723cc()):(_0x36c445[_0x3b3aca(0x332)+'Exp']=_0x5c5cd6,_0x90f6f1());},_0x3a380e;}function _0x2dba5b(_0x2dd1d4,_0x59bb6f,_0x30e9e2){var _0x1fac1d=_0x3ceef5,_0x307c11=document['creat'+_0x1fac1d(0x48a)+'ent'](_0x1fac1d(0x239));_0x307c11[_0x1fac1d(0x279)+_0x1fac1d(0x194)]=_0x4ffc9f[_0x1fac1d(0x2ff)];var _0x5bf2a7=document['creat'+'eElem'+'ent'](_0x1fac1d(0x2e1));_0x5bf2a7[_0x1fac1d(0x279)+_0x1fac1d(0x194)]=_0x4ffc9f[_0x1fac1d(0x3ee)],_0x5bf2a7[_0x1fac1d(0x591)+_0x1fac1d(0x30e)+'t']=_0x2dd1d4;if(_0x59bb6f){var _0x554e4d=document['creat'+_0x1fac1d(0x48a)+_0x1fac1d(0x4a4)](_0x1fac1d(0x5a7));_0x554e4d[_0x1fac1d(0x279)+_0x1fac1d(0x194)]=_0x4ffc9f[_0x1fac1d(0x3bd)],_0x554e4d[_0x1fac1d(0x591)+'onten'+'t']=_0x59bb6f,_0x5bf2a7['appen'+'dChil'+'d'](_0x554e4d);}return _0x307c11['appen'+'d'](_0x5bf2a7,_0x30e9e2),_0x307c11;}function _0x1ef6a5(_0xfb66e8,_0x15b6cd){var _0x367d91=_0x3ceef5,_0x2203fa={'AqJqm':function(_0x4019d6){return _0x4019d6();},'Fijga':function(_0x26c822,_0x435c65){return _0x26c822+_0x435c65;},'EyFFj':function(_0x21bb0a,_0x17eec6){return _0x45240d['vQPIi'](_0x21bb0a,_0x17eec6);}};if(_0x45240d[_0x367d91(0x5bd)](_0x367d91(0x512),'ONjgM')){_0x35404b[_0x367d91(0x27a)]=_0x22c139,_0x2203fa['AqJqm'](_0x14d468);var _0x5d92ff=_0x235241['find'](_0x38f2ad=>_0x38f2ad['id']===_0x1597ce)||_0x470318[0xac3+0xa92+0x2b*-0x7f];_0x40ff74[_0x367d91(0x591)+'onten'+'t']=_0x2203fa[_0x367d91(0x240)](_0x367d91(0x2ae)+'a\x20Kou'+'r\x20—\x20',_0x5d92ff['label']);for(var [_0x492c3a,_0x30d959]of _0x266020)_0x30d959['class'+'List']['toggl'+'e']('activ'+'e',_0x2203fa[_0x367d91(0x4ac)](_0x492c3a,_0x421aad));_0x38a90d['repla'+'ceChi'+'ldren'](..._0x45a8ff(_0x274ca7));}else{var _0x400803=document['creat'+'eElem'+_0x367d91(0x4a4)]('div');return _0x400803[_0x367d91(0x279)+_0x367d91(0x194)]=_0x367d91(0x369)+'te'+(_0x15b6cd?_0x367d91(0x1e3):''),_0x400803[_0x367d91(0x591)+_0x367d91(0x30e)+'t']=_0xfb66e8,_0x400803;}}function _0x9de936(_0x5b6dd4,_0x15468d,_0x2d95cf,_0x2ae493,_0x32df01){var _0x2a1c7b=_0x3ceef5;if(_0x2a1c7b(0x54d)===_0x2a1c7b(0x54d)){var _0x243ab1=document['creat'+_0x2a1c7b(0x48a)+'ent'](_0x2a1c7b(0x239));_0x243ab1[_0x2a1c7b(0x279)+_0x2a1c7b(0x194)]=_0x4ffc9f['SDtSu'](_0x2a1c7b(0x27e)+'rd',_0x2d95cf?_0x4ffc9f[_0x2a1c7b(0x6b9)]:'');var _0x243bd5=document['creat'+_0x2a1c7b(0x48a)+_0x2a1c7b(0x4a4)](_0x2a1c7b(0x239));_0x243bd5[_0x2a1c7b(0x279)+'Name']=_0x4ffc9f[_0x2a1c7b(0x23a)];var _0x16d275=document[_0x2a1c7b(0x6d6)+_0x2a1c7b(0x48a)+_0x2a1c7b(0x4a4)](_0x2a1c7b(0x239));_0x16d275[_0x2a1c7b(0x279)+'Name']='sk-ca'+'rd-ti'+_0x2a1c7b(0x4f6);var _0x13978a=document['creat'+_0x2a1c7b(0x48a)+'ent'](_0x4ffc9f[_0x2a1c7b(0x2e7)]);_0x13978a[_0x2a1c7b(0x591)+_0x2a1c7b(0x30e)+'t']=_0x5b6dd4,_0x16d275[_0x2a1c7b(0x19b)+_0x2a1c7b(0x211)+'d'](_0x13978a);if(_0x2ae493){var _0x5ae480=_0x4ffc9f[_0x2a1c7b(0x316)](_0x2a6d79,_0x2d95cf,_0x5b71f0=>{var _0x4abc22=_0x2a1c7b;_0x4abc22(0x41b)!=='GqrCC'?(_0x243ab1[_0x4abc22(0x279)+_0x4abc22(0x4cc)][_0x4abc22(0x185)+'e']('on',_0x5b71f0),_0x4ffc9f['FosbO'](_0x2ae493,_0x5b71f0)):_0x527355[_0x4abc22(0x1a4)+'ed']=!!_0x39b2ed;});_0x243bd5['appen'+'d'](_0x16d275,_0x5ae480);}else _0x243bd5['appen'+_0x2a1c7b(0x211)+'d'](_0x16d275);_0x243ab1['appen'+_0x2a1c7b(0x211)+'d'](_0x243bd5);if(_0x32df01&&_0x32df01['lengt'+'h']){var _0x543a84=document[_0x2a1c7b(0x6d6)+'eElem'+_0x2a1c7b(0x4a4)](_0x4ffc9f[_0x2a1c7b(0x682)]);_0x543a84[_0x2a1c7b(0x279)+_0x2a1c7b(0x194)]='sk-mb'+'ody';var _0x3d2dd4=document[_0x2a1c7b(0x6d6)+_0x2a1c7b(0x48a)+_0x2a1c7b(0x4a4)](_0x4ffc9f['JLszh']);_0x3d2dd4['class'+'Name']=_0x4ffc9f['Rziwg'],_0x3d2dd4['textC'+_0x2a1c7b(0x30e)+'t']=_0x15468d,_0x543a84['appen'+_0x2a1c7b(0x211)+'d'](_0x3d2dd4);for(var _0x98da04 of _0x32df01)_0x543a84[_0x2a1c7b(0x19b)+_0x2a1c7b(0x211)+'d'](_0x98da04);_0x243ab1['appen'+'dChil'+'d'](_0x543a84);}return _0x243ab1;}else{var _0x26cbe8=_0x3ab998[_0x2a1c7b(0x12c)+_0x2a1c7b(0x4c6)+'x']({'typeName':_0x16338f,'methodName':_0x20c00a,'params':_0x448da7,'returnType':_0x3d605a},_0x5c8eb5);return _0x26cbe8[_0x2a1c7b(0x1a4)+'ed']=_0x3be1c4!==![],_0x227206[_0x453b20]=_0x26cbe8,_0x3e8e2d['hooks'+_0x2a1c7b(0x142)]++,_0x26cbe8;}}var _0x3770d4=[{'id':_0x45240d[_0x3ceef5(0x67c)],'label':_0x3ceef5(0x542)+'t'},{'id':'move','label':'Move'},{'id':'visua'+'l','label':_0x45240d['SFnRb']},{'id':_0x3ceef5(0x2ee),'label':_0x45240d[_0x3ceef5(0x58a)]},{'id':'safe','label':_0x3ceef5(0x3f4)+'y'}];function _0x394bc6(){var _0x38e1d6=_0x3ceef5,_0x59f42f={'VMziq':'Unity'+_0x38e1d6(0x1fe)+_0x38e1d6(0x4ed)+'licat'+_0x38e1d6(0x1a5)},_0x2046e7=_0x42da00[_0x38e1d6(0x2f4)+'ode']?_0x38e1d6(0x14b)+_0x38e1d6(0x5ee)+_0x38e1d6(0x6c5)+_0x38e1d6(0x26b)+_0x38e1d6(0x418)+_0x38e1d6(0x294)+'ooks\x20'+_0x38e1d6(0x5a1)+'ad\x20to'+_0x38e1d6(0x3e5)+')':_0x42da00[_0x38e1d6(0x1be)]?_0x4ffc9f['NPGuN'](_0x4ffc9f['NPGuN'](_0x4ffc9f[_0x38e1d6(0x166)]+(_0x42da00[_0x38e1d6(0x25e)+'Total']?_0x4ffc9f[_0x38e1d6(0x677)](_0x4ffc9f['aaFkx'](_0x42da00[_0x38e1d6(0x25e)+'Ok'],'/'),_0x42da00['hooks'+_0x38e1d6(0x142)])+_0x4ffc9f['nlNXU']:_0x4ffc9f[_0x38e1d6(0x21b)])+_0x4ffc9f['niwVO']+(_0x42da00['gameL'+'oaded']?_0x38e1d6(0x5ff)+'d':_0x38e1d6(0x404)+'ng'),_0x4ffc9f['GkBbC'])+(_0x42da00[_0x38e1d6(0x17c)+'ers']?_0x38e1d6(0x51c):'none')+_0x4ffc9f[_0x38e1d6(0x295)],_0x42da00[_0x38e1d6(0x446)+_0x38e1d6(0x407)]?_0x38e1d6(0x51c):_0x4ffc9f['wTyiA']):_0x38e1d6(0x321)+_0x38e1d6(0x242)+'NG\x20—\x20'+_0x38e1d6(0x3c6)+'ay\x20on'+'ly\x20(r'+_0x38e1d6(0x16a)+'all\x20t'+_0x38e1d6(0x450)+_0x38e1d6(0x6a4)+_0x38e1d6(0x3cb);if(_0x42da00['lastE'+_0x38e1d6(0x5af)])_0x2046e7+=_0x4ffc9f[_0x38e1d6(0x30b)]+_0x42da00[_0x38e1d6(0x391)+_0x38e1d6(0x5af)];return _0x9de936('Statu'+'s',_0x2046e7,_0x42da00[_0x38e1d6(0x1be)],null,[_0x2dba5b(_0x4ffc9f[_0x38e1d6(0x334)],_0x4ffc9f[_0x38e1d6(0x503)],_0x4b7c81('Apply',()=>{var _0x35c083=_0x38e1d6;try{if(_0x5a3cf5)_0x5a3cf5[_0x35c083(0x613)](_0x59f42f['VMziq'],_0x35c083(0x29e)+'arget'+'Frame'+_0x35c083(0x145),[-0x6c7*-0x1+-0x25dd+0x2006]);}catch(_0x5f3f83){}}))]);}function _0x20a905(_0x400d95){var _0x1d7cb4=_0x3ceef5,_0x3d6826={'FHIWS':function(_0x41d515){return _0x41d515();},'sixqZ':function(_0x23c8e4,_0xc2f705,_0x26bce8){return _0x23c8e4(_0xc2f705,_0x26bce8);},'lRmpb':function(_0x3ab2cb,_0x1b760c,_0x24c720){return _0x3ab2cb(_0x1b760c,_0x24c720);},'hpfKs':_0x4ffc9f[_0x1d7cb4(0x40a)],'jaNuA':function(_0x3b838e){return _0x3b838e();},'FoEUj':function(_0x3c5444){return _0x3c5444();},'ZgTGi':_0x1d7cb4(0x41e),'VHaEu':function(_0x127b38,_0x58698b){return _0x127b38+_0x58698b;},'KNmhY':function(_0x2caee4,_0x191dc6){return _0x2caee4/_0x191dc6;},'FpCct':function(_0x19ada7){var _0x18a8b3=_0x1d7cb4;return _0x4ffc9f[_0x18a8b3(0x45d)](_0x19ada7);},'LgbUL':function(_0xda1043,_0x53e55d){var _0x343f3b=_0x1d7cb4;return _0x4ffc9f[_0x343f3b(0x136)](_0xda1043,_0x53e55d);},'PpHPr':function(_0x2d86b8,_0x5a740b,_0x3dd525,_0x3a62d1,_0x27080e){return _0x2d86b8(_0x5a740b,_0x3dd525,_0x3a62d1,_0x27080e);},'DHFyD':'f32','ITppQ':_0x4ffc9f[_0x1d7cb4(0x170)],'uppAK':_0x4ffc9f['tJeEa'],'VTvuw':_0x4ffc9f[_0x1d7cb4(0x57e)],'ArpqF':_0x1d7cb4(0x3b5)+_0x1d7cb4(0x668)+'R\x20v1.'+'1','sAmjp':function(_0x2adcdc,_0x2aa9f0){return _0x2adcdc(_0x2aa9f0);},'WENXn':function(_0x33cdec,_0x398256){return _0x4ffc9f['uUSAy'](_0x33cdec,_0x398256);},'eVOAo':'rgba('+'255,2'+_0x1d7cb4(0x2b1)+'0,0.7'+'5)','DGnEk':function(_0x2cfd83,_0x575de2){return _0x2cfd83===_0x575de2;},'jHAXF':function(_0xcb9159){return _0xcb9159();}};if(_0x400d95==='comba'+'t')return[_0x394bc6(),_0x9de936(_0x1d7cb4(0x56b)+_0x1d7cb4(0x227),_0x1d7cb4(0x190)+_0x1d7cb4(0x1ab)+'alth.'+_0x1d7cb4(0x4d3)+_0x1d7cb4(0x31e)+'keHea'+'lth\x20a'+_0x1d7cb4(0x3ff)+'ealth'+_0x1d7cb4(0x463)+_0x1d7cb4(0x363)+_0x1d7cb4(0x162)+_0x1d7cb4(0x4e0)+_0x1d7cb4(0x29a)+'\x20hurt'+'\x20or\x20k'+'ill\x20y'+_0x1d7cb4(0x3c4),_0x5286e1[_0x1d7cb4(0x5d8)],_0x46de9a=>{var _0x24f754=_0x1d7cb4;_0x5286e1[_0x24f754(0x5d8)]=_0x46de9a,_0x3d6826[_0x24f754(0x59e)](_0x5c50ef),_0x3d6826['sixqZ'](_0x5a632e,_0x24f754(0x5d8),_0x46de9a),_0x5a632e(_0x24f754(0x347)+'e',_0x46de9a);},[]),_0x4ffc9f[_0x1d7cb4(0x486)](_0x9de936,'No\x20Re'+'coil',_0x4ffc9f['tmoft'],_0x5286e1[_0x1d7cb4(0x6d0)+_0x1d7cb4(0x1b0)],_0x159052=>{var _0x4587c2=_0x1d7cb4;_0x5286e1[_0x4587c2(0x6d0)+_0x4587c2(0x1b0)]=_0x159052,_0x5c50ef(),_0x3d6826['lRmpb'](_0x5a632e,_0x3d6826['hpfKs'],_0x159052);},[]),_0x9de936(_0x1d7cb4(0x616)+_0x1d7cb4(0x2a1),_0x1d7cb4(0x47f)+_0x1d7cb4(0x187)+_0x1d7cb4(0x4f9)+_0x1d7cb4(0x607)+'xes\x20a'+_0x1d7cb4(0x3e3)+_0x1d7cb4(0x140)+_0x1d7cb4(0x382)+_0x1d7cb4(0x1e0)+_0x1d7cb4(0x2fa)+'ery\x202'+'00ms.',_0x5286e1[_0x1d7cb4(0x5b1)+_0x1d7cb4(0x195)],_0x597ade=>{var _0x56579d=_0x1d7cb4;_0x5286e1['noSpr'+_0x56579d(0x195)]=_0x597ade,_0x5c50ef();},[]),_0x4ffc9f[_0x1d7cb4(0x491)](_0x9de936,'Rapid'+'\x20Fire'+_0x1d7cb4(0x615)+']',_0x1d7cb4(0x333)+'s\x20Ove'+_0x1d7cb4(0x45e)+_0x1d7cb4(0x1b3)+'n.fir'+_0x1d7cb4(0x2ce)+'\x20to\x201'+_0x1d7cb4(0x29d)+'erver'+'\x20may\x20'+_0x1d7cb4(0x146)+_0x1d7cb4(0x68b)+_0x1d7cb4(0x5dd)+'s.',_0x5286e1[_0x1d7cb4(0x332)+_0x1d7cb4(0x2e5)],_0x43e7a7=>{_0x5286e1['rapid'+'Exp']=_0x43e7a7,_0x5c50ef();},[]),_0x9de936(_0x1d7cb4(0x175)+_0x1d7cb4(0x564)+'P]',_0x4ffc9f[_0x1d7cb4(0x4f8)],_0x5286e1['damag'+_0x1d7cb4(0x5be)],_0x294d20=>{var _0x57de0d=_0x1d7cb4;_0x5286e1[_0x57de0d(0x126)+_0x57de0d(0x5be)]=_0x294d20,_0x3d6826[_0x57de0d(0x5bf)](_0x5c50ef);},[_0x2dba5b('Damag'+'e\x20val'+'ue',null,_0x4ffc9f['Fwemg'](_0x564ef,_0x5286e1[_0x1d7cb4(0x126)+'eValu'+'e'],-0x8*0x440+0x16*0x72+0x183e,0xc8d+0x1ae4*0x1+-0x257d,-0x1e4d+-0x14e+0x2e*0xb0,_0x1386ea=>{var _0x59e7b5=_0x1d7cb4;'ptEex'===_0x59e7b5(0x1af)?(_0x5286e1[_0x59e7b5(0x126)+_0x59e7b5(0x141)+'e']=_0x1386ea,_0x3d6826[_0x59e7b5(0x353)](_0x5c50ef)):(_0x2c6d5c[_0x59e7b5(0x661)+'od']=_0x1d6cc7,_0x38006a[_0x59e7b5(0x661)+_0x59e7b5(0x49f)]=_0x5d214c,_0x1357da[_0x59e7b5(0x5a8)+_0x59e7b5(0x20b)+'il']=_0x3221a4,_0x50f012['hookC'+_0x59e7b5(0x3f2)+'e']=_0xdc8b2e,_0x248ba(),_0x2f99f4[_0x59e7b5(0x48f)+'d']());}))]),_0x9de936(_0x4ffc9f[_0x1d7cb4(0x328)],_0x1d7cb4(0x151)+'ls\x20th'+_0x1d7cb4(0x48d)+_0x1d7cb4(0x2fb)+'\x20cach'+_0x1d7cb4(0x24c)+_0x1d7cb4(0x635)+_0x1d7cb4(0x5b8)+'every'+_0x1d7cb4(0x417)+'s.',_0x5286e1[_0x1d7cb4(0x266)+_0x1d7cb4(0x4bd)],_0x52b2f7=>{var _0x27b7d6=_0x1d7cb4;_0x5286e1[_0x27b7d6(0x266)+_0x27b7d6(0x4bd)]=_0x52b2f7,_0x4ffc9f['GrIvi'](_0x5c50ef);},[_0x1ef6a5(_0x1d7cb4(0x6bd)+_0x1d7cb4(0x461)+_0x1d7cb4(0x18b)+_0x1d7cb4(0x66b)+_0x1d7cb4(0x32e)+'he\x20de'+_0x1d7cb4(0x212)+_0x1d7cb4(0x4f3)+'ppens'+_0x1d7cb4(0x51b)+'where'+'.')])];if(_0x4ffc9f[_0x1d7cb4(0x31b)](_0x400d95,_0x1d7cb4(0x61c))){if(_0x4ffc9f[_0x1d7cb4(0x520)](_0x1d7cb4(0x4a5),_0x1d7cb4(0x565)))return[_0x9de936(_0x4ffc9f[_0x1d7cb4(0x546)],_0x4ffc9f[_0x1d7cb4(0x392)],_0x5286e1['speed'+_0x1d7cb4(0x480)]!==0x3b*0x91+-0x1c9*-0x8+0x1*-0x2f4f,null,[_0x4ffc9f[_0x1d7cb4(0x214)](_0x2dba5b,_0x4ffc9f[_0x1d7cb4(0x138)],_0x1d7cb4(0x326)+'\x20defa'+_0x1d7cb4(0x26a),_0x564ef(_0x5286e1[_0x1d7cb4(0x5df)+'Pct'],0x3*0x562+0x1*-0xccd+0x3*-0x10d,-0x89*0x29+-0x1199+-0x9*-0x486,-0x2*0x132b+0xd12+-0x1*-0x1949,_0x51b129=>{var _0x57f78b=_0x1d7cb4;_0x5286e1[_0x57f78b(0x5df)+'Pct']=_0x51b129,_0x4ffc9f['DlvjA'](_0x5c50ef);}))]),_0x9de936(_0x1d7cb4(0x588)+_0x1d7cb4(0x427)+_0x1d7cb4(0x311),_0x1d7cb4(0x333)+_0x1d7cb4(0x2c9)+'ement'+'.jump'+_0x1d7cb4(0x42d)+_0x1d7cb4(0x69c)+'both\x20'+_0x1d7cb4(0x3a2)+_0x1d7cb4(0x58f)+_0x1d7cb4(0x1d7),_0x4ffc9f[_0x1d7cb4(0x61a)](_0x5286e1[_0x1d7cb4(0x69a)+'ct'],0x10*-0x5e+-0x23c7+0xe5*0x2f)||_0x5286e1[_0x1d7cb4(0x3a2)+_0x1d7cb4(0x324)]!==-0x1e88+-0x35*0x1d+0x24ed,null,[_0x4ffc9f['xEWAy'](_0x2dba5b,_0x4ffc9f['yXdYp'],null,_0x564ef(_0x5286e1[_0x1d7cb4(0x69a)+'ct'],-0x2*0xd8b+-0x214d+0x3c95,0x189b+0xe7+-0x1856,0x85d*0x1+0xfdb+-0x69*0x3b,_0x1eed6b=>{var _0x303ef1=_0x1d7cb4;_0x303ef1(0x6e7)===_0x303ef1(0x6d2)?(_0x22728d['textC'+_0x303ef1(0x30e)+'t']=_0x9adea(_0x4a99b5[_0x303ef1(0x336)]),_0x4fe261['style'][_0x303ef1(0x644)+_0x303ef1(0x626)+'y'](_0x3d6826[_0x303ef1(0x179)],_0x3d6826['VHaEu'](_0x3d6826[_0x303ef1(0x592)](_0x2ec8be['value']-_0x2b7bfb,_0x28b6ac-_0x3c77e4)*(0x8*0x9d+-0x192*0x1+-0x1d*0x1a),'%'))):(_0x5286e1[_0x303ef1(0x69a)+'ct']=_0x1eed6b,_0x5c50ef());})),_0x4ffc9f['jNRho'](_0x2dba5b,_0x4ffc9f[_0x1d7cb4(0x16f)],_0x1d7cb4(0x182)+'\x20=\x20fl'+'oaty',_0x564ef(_0x5286e1['gravi'+_0x1d7cb4(0x324)],-0x3ec+-0x1*-0x152d+0xd*-0x153,-0x142d*0x1+-0x1504+0x5*0x865,0x1*0x16e8+0x2*-0x455+-0xb*0x14b,_0x2881d7=>{var _0x2707c6=_0x1d7cb4;_0x2707c6(0x281)===_0x2707c6(0x433)?(_0x4cf443['class'+_0x2707c6(0x4cc)][_0x2707c6(0x185)+'e']('on',_0xda078a),_0xe35d95(_0x1c0855)):(_0x5286e1['gravi'+_0x2707c6(0x324)]=_0x2881d7,_0x3d6826[_0x2707c6(0x13e)](_0x5c50ef));}))]),_0x9de936(_0x4ffc9f[_0x1d7cb4(0x455)],_0x1d7cb4(0x47f)+_0x1d7cb4(0x2c9)+_0x1d7cb4(0x6cf)+_0x1d7cb4(0x3e0)+_0x1d7cb4(0x6a8)+'ime\x20s'+_0x1d7cb4(0x188)+'\x20jump'+_0x1d7cb4(0x51f)+_0x1d7cb4(0x69f)+_0x1d7cb4(0x259)+'\x20appl'+_0x1d7cb4(0x385),_0x5286e1['bhop'],_0x56d4a1=>{var _0x3e637f=_0x1d7cb4;_0x5286e1[_0x3e637f(0x586)]=_0x56d4a1,_0x5c50ef();},[])];else try{_0x381d7c[_0x1d7cb4(0x482)+'em']('sakur'+_0x1d7cb4(0x611)+'r.v1',_0x34b4f4[_0x1d7cb4(0x672)+_0x1d7cb4(0x579)](_0x1de663));}catch(_0x4d3b69){}}if(_0x400d95===_0x1d7cb4(0x585)+'l')return[_0x4ffc9f['Fwemg'](_0x9de936,'Keyst'+'rokes',_0x1d7cb4(0x184)+_0x1d7cb4(0x597)+_0x1d7cb4(0x6ca)+_0x1d7cb4(0x366)+_0x1d7cb4(0x4e4)+_0x1d7cb4(0x4aa)+'.',_0x5286e1['keyst'+_0x1d7cb4(0x25b)],_0x48fa3a=>{var _0x49ca81=_0x1d7cb4;_0x5286e1[_0x49ca81(0x4f1)+_0x49ca81(0x25b)]=_0x48fa3a,_0x5c50ef();},[_0x2dba5b(_0x1d7cb4(0x47e)+'ion',null,_0x3ac8b4(_0x5286e1[_0x1d7cb4(0x555)],[['bl',_0x1d7cb4(0x315)+_0x1d7cb4(0x522)+'t'],['br','Botto'+_0x1d7cb4(0x3fc)+'ht'],['ml',_0x1d7cb4(0x357)+_0x1d7cb4(0x4c9)+'e']],_0xa90b3b=>{var _0x4c77cd=_0x1d7cb4;_0x3d6826['LgbUL']('xDjZG',_0x4c77cd(0x5f9))?(_0x580cf9[_0x4c77cd(0x661)+'od']=_0x946492,_0x44f74f()):(_0x5286e1[_0x4c77cd(0x555)]=_0xa90b3b,_0x3d6826[_0x4c77cd(0x353)](_0x5c50ef));})),_0x2dba5b('Size',null,_0x4ffc9f[_0x1d7cb4(0x2d8)](_0x564ef,_0x5286e1[_0x1d7cb4(0x5e2)+'le'],-0x1bdc*-0x1+0x1331*0x1+-0x2f0d+0.6,-0x1565*0x1+-0x1eb8+0x341e+0.6000000000000001,0x1330+-0x1757*0x1+0x427+0.05,_0x3cd9e6=>{var _0x5cd986=_0x1d7cb4;if(_0x5cd986(0x238)===_0x5cd986(0x238))_0x5286e1[_0x5cd986(0x5e2)+'le']=_0x3cd9e6,_0x3d6826[_0x5cd986(0x5bf)](_0x5c50ef);else try{var _0x4f844b=new _0x224e37(_0x2f7fd9)[_0x5cd986(0x6d9)+'ield'](_0x22d78a,_0x1c1699);_0x79cefe[_0x5cd986(0x5c3)](_0x2f4b02,_0x4f844b!==_0x2310b8?_0x4f844b[_0x5cd986(0x46c)]():null);}catch(_0x1f2129){_0x5a4bf3['set'](_0x3a8ed4,null);}})),_0x2dba5b(_0x4ffc9f['IKLmj'],null,_0x2a6d79(_0x5286e1[_0x1d7cb4(0x2d2)],_0x8a5f3c=>{var _0x2c1fbf=_0x1d7cb4;_0x5286e1[_0x2c1fbf(0x2d2)]=_0x8a5f3c,_0x4ffc9f[_0x2c1fbf(0x5c5)](_0x5c50ef);}))]),_0x9de936(_0x1d7cb4(0x60e)+'hair',_0x4ffc9f[_0x1d7cb4(0x2b2)],_0x5286e1['cross'+'hair'],_0x57ba57=>{var _0x1b8eb1=_0x1d7cb4;_0x5286e1['cross'+_0x1b8eb1(0x36b)]=_0x57ba57,_0x3d6826[_0x1b8eb1(0x59e)](_0x5c50ef);},[_0x2dba5b(_0x1d7cb4(0x569),null,_0x4ffc9f[_0x1d7cb4(0x2d8)](_0x564ef,_0x5286e1[_0x1d7cb4(0x1ca)+'e'],0x1*-0x351+0x1*0x2458+0x5f*-0x59+0.5,0x52*-0x7+0xb0e+-0x2*0x467+0.5,0x1*-0x136d+-0x2255+0x1*0x35c2+0.1,_0x85923f=>{var _0x534cd0=_0x1d7cb4;_0x4ffc9f[_0x534cd0(0x634)]===_0x4ffc9f[_0x534cd0(0x634)]?(_0x5286e1[_0x534cd0(0x1ca)+'e']=_0x85923f,_0x5c50ef()):(_0x1d5d0d(),_0x4c64d0(_0x4be365(_0x39e8ac[_0x534cd0(0x336)])));})),_0x2dba5b(_0x1d7cb4(0x659),null,_0x4ffc9f[_0x1d7cb4(0x316)](_0x30a3e3,_0x5286e1[_0x1d7cb4(0x237)+'or'],_0x5dd3e2=>{var _0x86fcd2=_0x1d7cb4;_0x5286e1[_0x86fcd2(0x237)+'or']=_0x5dd3e2,_0x4ffc9f[_0x86fcd2(0x5e6)](_0x5c50ef);}))]),_0x9de936(_0x1d7cb4(0x32f)+'ers',_0x1d7cb4(0x5a9)+_0x1d7cb4(0x359)+'y.',_0x5286e1['fps'],null,[_0x4ffc9f[_0x1d7cb4(0x214)](_0x2dba5b,_0x4ffc9f['Itgdr'],null,_0x2a6d79(_0x5286e1[_0x1d7cb4(0x545)],_0x16a645=>{_0x5286e1['fps']=_0x16a645,_0x5c50ef();})),_0x1ef6a5(_0x4ffc9f['XoRnd'])])];if(_0x400d95===_0x1d7cb4(0x2ee))return[_0x9de936(_0x4ffc9f[_0x1d7cb4(0x34d)],_0x1d7cb4(0x362)+'\x20kour'+'-io_*'+_0x1d7cb4(0x4fa)+_0x1d7cb4(0x4ad)+_0x1d7cb4(0x1db),_0x5286e1[_0x1d7cb4(0x610)+'ck'],_0xdf04a3=>{var _0x531be2=_0x1d7cb4,_0x1e0ac6={'HhPog':function(_0x2ac387,_0x50f93a,_0x70a3de,_0x2f0468,_0x35311e){return _0x3d6826['PpHPr'](_0x2ac387,_0x50f93a,_0x70a3de,_0x2f0468,_0x35311e);},'lwodQ':_0x3d6826['DHFyD']};_0x531be2(0x34b)!==_0x3d6826['ITppQ']?(_0x5286e1[_0x531be2(0x610)+'ck']=_0xdf04a3,_0x5c50ef()):(_0x1e0ac6['HhPog'](_0x31b12d,_0x3bff96,-0x63d*0x3+0x1523+-0x224,_0x1e0ac6['lwodQ'],_0x4f0f47),_0x1e0ac6[_0x531be2(0x514)](_0x4edfa8,_0x104bca,-0x10*-0x1f2+-0x9*-0x272+-0x1a6b*0x2,_0x531be2(0x2f7),_0x1e8a16));},[_0x1ef6a5(_0x4ffc9f[_0x1d7cb4(0x18c)])])];return[_0x9de936(_0x4ffc9f['DJyrG'],_0x4ffc9f['ahjQt'],_0x5286e1[_0x1d7cb4(0x2f4)+'ode'],_0x412f6c=>{var _0x43a844=_0x1d7cb4;_0x5286e1[_0x43a844(0x2f4)+'ode']=_0x412f6c,_0x4ffc9f['dmcuL'](_0x5c50ef),location[_0x43a844(0x48f)+'d']();},[_0x4ffc9f[_0x1d7cb4(0x580)](_0x1ef6a5,_0x4ffc9f[_0x1d7cb4(0x38c)])]),_0x9de936(_0x4ffc9f[_0x1d7cb4(0x213)],_0x4ffc9f['txVyf'],_0x5286e1['hookG'+'od']||_0x5286e1[_0x1d7cb4(0x661)+_0x1d7cb4(0x49f)]||_0x5286e1['hookN'+'oReco'+'il']||_0x5286e1[_0x1d7cb4(0x1dd)+_0x1d7cb4(0x3f2)+'e'],_0x599d69=>{var _0x2915fc=_0x1d7cb4;_0x5286e1[_0x2915fc(0x661)+'od']=_0x599d69,_0x5286e1['hookG'+'odDie']=_0x599d69,_0x5286e1[_0x2915fc(0x5a8)+_0x2915fc(0x20b)+'il']=_0x599d69,_0x5286e1[_0x2915fc(0x1dd)+_0x2915fc(0x3f2)+'e']=_0x599d69,_0x5c50ef(),location['reloa'+'d']();},[_0x4ffc9f['atyLd'](_0x1ef6a5,'Appli'+_0x1d7cb4(0x3a3)+'\x20relo'+_0x1d7cb4(0x605)),_0x2dba5b(_0x1d7cb4(0x5f6)+_0x1d7cb4(0x419)+'th.In'+_0x1d7cb4(0x445)+_0x1d7cb4(0x1e9)+_0x1d7cb4(0x356)+'h)',null,_0x2a6d79(_0x5286e1['hookG'+'od'],_0x367b6b=>{var _0x10e0aa=_0x1d7cb4;if(_0x10e0aa(0x3cc)!==_0x10e0aa(0x456))_0x5286e1[_0x10e0aa(0x661)+'od']=_0x367b6b,_0x5c50ef();else{var _0x665a9b=_0x24f610[_0x10e0aa(0x6d6)+_0x10e0aa(0x48a)+'ent'](_0x10e0aa(0x3c8));return _0x665a9b['type']=_0x10e0aa(0x278),_0x665a9b[_0x10e0aa(0x279)+'Name']=_0x3d6826[_0x10e0aa(0x4b3)],_0x665a9b['value']=/^#[0-9a-f]{6}$/i['test'](_0x64adf0)?_0x4eb4e0:_0x10e0aa(0x426)+'9d',_0x665a9b[_0x10e0aa(0x29c)+'ut']=()=>_0x184455(_0x665a9b['value']),_0x665a9b;}})),_0x4ffc9f[_0x1d7cb4(0x155)](_0x2dba5b,_0x4ffc9f['lEPcN'],null,_0x4ffc9f[_0x1d7cb4(0x316)](_0x2a6d79,_0x5286e1[_0x1d7cb4(0x661)+_0x1d7cb4(0x49f)],_0x1f50ac=>{var _0x19cd4a=_0x1d7cb4;_0x4ffc9f[_0x19cd4a(0x520)](_0x4ffc9f[_0x19cd4a(0x15c)],_0x19cd4a(0x3be))?_0x354d57[_0x19cd4a(0x61d)][_0x19cd4a(0x19b)+_0x19cd4a(0x211)+'d'](_0x107582):(_0x5286e1[_0x19cd4a(0x661)+'odDie']=_0x1f50ac,_0x5c50ef());})),_0x2dba5b(_0x1d7cb4(0x6d0)+_0x1d7cb4(0x640)+_0x1d7cb4(0x452)+_0x1d7cb4(0x329)+_0x1d7cb4(0x54f)+_0x1d7cb4(0x297),null,_0x4ffc9f[_0x1d7cb4(0x316)](_0x2a6d79,_0x5286e1['hookN'+_0x1d7cb4(0x20b)+'il'],_0x45794d=>{var _0x391425=_0x1d7cb4;_0x5286e1[_0x391425(0x5a8)+_0x391425(0x20b)+'il']=_0x45794d,_0x5c50ef();})),_0x4ffc9f[_0x1d7cb4(0x370)](_0x2dba5b,_0x4ffc9f['rFCWE'],_0x4ffc9f[_0x1d7cb4(0x69b)],_0x4ffc9f[_0x1d7cb4(0x316)](_0x2a6d79,_0x5286e1['hookC'+_0x1d7cb4(0x3f2)+'e'],_0xcccafc=>{var _0x348d85=_0x1d7cb4;_0x5286e1[_0x348d85(0x1dd)+_0x348d85(0x3f2)+'e']=_0xcccafc,_0x5c50ef();}))]),_0x9de936(_0x1d7cb4(0x12d)+'Kille'+'r',_0x1d7cb4(0x5db)+'les\x20C'+'odeSt'+'age\x20d'+_0x1d7cb4(0x24e)+_0x1d7cb4(0x4d9)+_0x1d7cb4(0x197)+_0x1d7cb4(0x2de)+'via\x20S'+_0x1d7cb4(0x3a0)+'tecti'+'on().'+_0x1d7cb4(0x46a)+_0x1d7cb4(0x64c),_0x5286e1[_0x1d7cb4(0x47d)+'ill'],_0x3e261e=>{var _0x154250=_0x1d7cb4,_0x3691c9={'MzKqE':function(_0x220cd7,_0x80a8b9){return _0x220cd7||_0x80a8b9;},'OLGvA':_0x3d6826['eVOAo']};if(_0x3d6826[_0x154250(0x6be)](_0x154250(0x23d),_0x154250(0x23d)))_0x5286e1['actkK'+'ill']=_0x3e261e,_0x3d6826['jHAXF'](_0x5c50ef);else{_0x460317['save'](),_0x4452e4['font']=_0x3d6826['VTvuw'],_0x3154f8['textA'+_0x154250(0x371)]='left',_0x1b33d4[_0x154250(0x449)+'aseli'+'ne']=_0x154250(0x574);var _0x25cd56=-0x1*-0x886+0x6*0x1a8+-0x124a,_0x522504=0x1046*-0x1+0x1e74*-0x1+0x2ec6*0x1,_0x3627c1=(_0x1833a4,_0x410e0d)=>{var _0x1b5505=_0x154250;_0x92710d[_0x1b5505(0x4c0)+_0x1b5505(0x2c5)]=_0x3691c9[_0x1b5505(0x3bb)](_0x410e0d,_0x3691c9[_0x1b5505(0x4fe)]),_0x2d50f9['fillT'+_0x1b5505(0x23e)](_0x1833a4,_0x522504,_0x25cd56),_0x25cd56+=-0x2de*0xd+-0x2606+0x562*0xe;};_0x3627c1(_0x3d6826['ArpqF'],'#ff6b'+'9d');if(_0xdf7808['fps'])_0x3d6826['sAmjp'](_0x3627c1,_0x3d6826[_0x154250(0x22c)](_0x596d8b,'\x20FPS'));if(!_0x3dec4a['gameL'+_0x154250(0x312)])_0x3d6826[_0x154250(0x46f)](_0x3627c1,_0x154250(0x38b)+'ng\x20fo'+_0x154250(0x5ef)+'e…','rgba('+_0x154250(0x665)+_0x154250(0x4bf)+'0,0.6'+')');_0x5da1f7[_0x154250(0x43a)+'re']();}},[_0x4ffc9f[_0x1d7cb4(0x316)](_0x1ef6a5,_0x4ffc9f[_0x1d7cb4(0x3d3)],!![])]),_0x4ffc9f[_0x1d7cb4(0x36c)](_0x9de936,_0x4ffc9f['cMmRx'],_0x1d7cb4(0x506)+'\x20leav'+_0x1d7cb4(0x2fd)+'ver-v'+_0x1d7cb4(0x24a)+_0x1d7cb4(0x61b)+'ces.',!![],null,[_0x4ffc9f['tUGIb'](_0x2dba5b,_0x1d7cb4(0x244)+_0x1d7cb4(0x5a0)+'tting'+'s',null,_0x4b7c81(_0x1d7cb4(0x5b0),()=>{var _0xe6ec0a=_0x1d7cb4;_0x5286e1={..._0x3c1b7d},_0x5c50ef(),location[_0xe6ec0a(0x48f)+'d']();}))])];}var _0x4686dc=null;function _0x15cdc8(_0x5f1534){var _0x1b9747=_0x3ceef5;if(_0x4ffc9f[_0x1b9747(0x3bf)]('rRjxn','rRjxn')){_0x17bb7f=_0x5f1534;if(!_0x4686dc){var _0x4e26ef=(_0x1b9747(0x325)+_0x1b9747(0x3ec)+'3')[_0x1b9747(0x287)]('|'),_0x97fd5b=-0x1f49*-0x1+0x1cfc+-0x3c45;while(!![]){switch(_0x4e26ef[_0x97fd5b++]){case'0':_0x1ea5ed[_0x1b9747(0x19b)+'dChil'+'d'](_0xbf1edc);continue;case'1':_0x1ea5ed['appen'+'dChil'+'d'](_0x4686dc);continue;case'2':_0x4686dc=_0x214414();continue;case'3':_0x4ffc9f['EPIzs'](requestAnimationFrame,()=>_0x4686dc[_0x1b9747(0x279)+_0x1b9747(0x4cc)]['add']('shown'));continue;case'4':_0xbf1edc[_0x1b9747(0x591)+_0x1b9747(0x30e)+'t']=_0x4c9680;continue;case'5':var _0xbf1edc=document['creat'+_0x1b9747(0x48a)+_0x1b9747(0x4a4)](_0x4ffc9f[_0x1b9747(0x40d)]);continue;}break;}}_0x4686dc[_0x1b9747(0x279)+'List']['toggl'+'e'](_0x4ffc9f[_0x1b9747(0x66c)],_0x5f1534);}else try{if(_0x5eb2df)_0x195575['call'](_0x1b9747(0x171)+_0x1b9747(0x1fe)+_0x1b9747(0x4ed)+'licat'+_0x1b9747(0x1a5),_0x1b9747(0x29e)+_0x1b9747(0x310)+_0x1b9747(0x331)+_0x1b9747(0x145),[-0xb4d*-0x2+0x2490+-0x3a3a]);}catch(_0xc3865c){}}function _0x5b5e05(){_0x45240d['pUeJf'](_0x15cdc8,!_0x17bb7f);}function _0x214414(){var _0x59c82d=_0x3ceef5,_0x256681=document['creat'+_0x59c82d(0x48a)+'ent'](_0x45240d[_0x59c82d(0x3ae)]);_0x256681[_0x59c82d(0x279)+'Name']=_0x59c82d(0x66d)+'nel';var _0x54233c=document[_0x59c82d(0x6d6)+_0x59c82d(0x48a)+_0x59c82d(0x4a4)]('nav');_0x54233c['class'+_0x59c82d(0x194)]=_0x59c82d(0x536)+'de';var _0x26f632=document[_0x59c82d(0x6d6)+'eElem'+_0x59c82d(0x4a4)](_0x59c82d(0x239));_0x26f632[_0x59c82d(0x279)+_0x59c82d(0x194)]=_0x59c82d(0x3d5)+'go',_0x26f632['inner'+_0x59c82d(0x471)]='<svg\x20'+_0x59c82d(0x666)+_0x59c82d(0x284)+_0x59c82d(0x2c2)+'\x2024\x22\x20'+'class'+_0x59c82d(0x3a8)+'logo-'+_0x59c82d(0x2ea)+_0x59c82d(0x2f1)+_0x59c82d(0x6da)+'12\x2021'+'c-1.5'+'-2.5-'+_0x59c82d(0x4cb)+'-4-7.'+'5\x200-2'+_0x59c82d(0x12f)+'8-4.5'+_0x59c82d(0x236)+'5s4\x202'+'\x204\x204.'+_0x59c82d(0x3fa)+_0x59c82d(0x528)+_0x59c82d(0x5bb)+_0x59c82d(0x498)+_0x59c82d(0x4c7)+'\x22none'+'\x22\x20str'+_0x59c82d(0x4ff)+'#ff6b'+_0x59c82d(0x64f)+_0x59c82d(0x12b)+'-widt'+_0x59c82d(0x687)+_0x59c82d(0x5cc)+_0x59c82d(0x48c)+'necap'+'=\x22rou'+_0x59c82d(0x405)+'troke'+'-line'+_0x59c82d(0x5f2)+'\x22roun'+'d\x22/><'+'circl'+_0x59c82d(0x400)+'\x2212\x22\x20'+'cy=\x221'+_0x59c82d(0x3a5)+_0x59c82d(0x25c)+'\x20fill'+_0x59c82d(0x5ca)+_0x59c82d(0x245)+'/></s'+_0x59c82d(0x218),_0x54233c[_0x59c82d(0x19b)+'dChil'+'d'](_0x26f632);var _0x3eb564=document['creat'+'eElem'+'ent'](_0x45240d[_0x59c82d(0x3ae)]);_0x3eb564[_0x59c82d(0x279)+_0x59c82d(0x194)]=_0x59c82d(0x340)+'in';var _0x152ec5=document[_0x59c82d(0x6d6)+'eElem'+_0x59c82d(0x4a4)](_0x59c82d(0x658)+'r');_0x152ec5[_0x59c82d(0x279)+_0x59c82d(0x194)]=_0x45240d[_0x59c82d(0x2dd)];var _0x319ff2=document['creat'+_0x59c82d(0x48a)+'ent'](_0x45240d['rioLg']);_0x319ff2['class'+_0x59c82d(0x194)]=_0x59c82d(0x48e)+_0x59c82d(0x3a9);var _0xd47aa9=document['creat'+_0x59c82d(0x48a)+_0x59c82d(0x4a4)]('h2');_0xd47aa9[_0x59c82d(0x279)+_0x59c82d(0x194)]=_0x45240d['KopyL'],_0xd47aa9[_0x59c82d(0x591)+'onten'+'t']='Sakur'+'a\x20Kou'+'r';var _0x328f33=document[_0x59c82d(0x6d6)+'eElem'+_0x59c82d(0x4a4)]('small');_0x328f33[_0x59c82d(0x279)+'Name']=_0x45240d['BiXDy'],_0x328f33[_0x59c82d(0x591)+_0x59c82d(0x30e)+'t']='kours'+_0x59c82d(0x5a5)+'.io\x20m'+'enu',_0x319ff2['appen'+'d'](_0xd47aa9,_0x328f33);var _0x4bca66=document['creat'+'eElem'+_0x59c82d(0x4a4)](_0x45240d[_0x59c82d(0x436)]);_0x4bca66['type']=_0x59c82d(0x58e)+'n',_0x4bca66[_0x59c82d(0x279)+_0x59c82d(0x194)]=_0x45240d['jRlWk'],_0x4bca66['title']='Close',_0x4bca66[_0x59c82d(0x13d)+_0x59c82d(0x471)]=_0x59c82d(0x4ba)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0x59c82d(0x2f1)+_0x59c82d(0x6da)+_0x59c82d(0x553)+'2\x2012M'+_0x59c82d(0x1fd)+'6\x2018\x22'+'/></s'+'vg>',_0x4bca66['oncli'+'ck']=()=>_0x15cdc8(![]),_0x152ec5['appen'+'d'](_0x319ff2,_0x4bca66);var _0x1c8390=document['creat'+'eElem'+'ent'](_0x59c82d(0x239));_0x1c8390[_0x59c82d(0x279)+'Name']=_0x59c82d(0x619)+'ls',_0x3eb564[_0x59c82d(0x19b)+'d'](_0x152ec5,_0x1c8390),_0x256681[_0x59c82d(0x19b)+'d'](_0x54233c,_0x3eb564);var _0x56921e=new Map();for(var _0x1ae148 of _0x3770d4){if(_0x59c82d(0x4c8)===_0x45240d[_0x59c82d(0x2b7)]){var _0x1c9a0f=_0x45240d[_0x59c82d(0x5e7)][_0x59c82d(0x287)]('|'),_0x44b317=0x20e5+-0x2a*0x1+0x93*-0x39;while(!![]){switch(_0x1c9a0f[_0x44b317++]){case'0':_0x2888a3[_0x59c82d(0x13d)+_0x59c82d(0x471)]=_0x45240d['FWYHx'](_0x59c82d(0x578)+'l>'+_0x1ae148[_0x59c82d(0x2af)],_0x59c82d(0x6db)+_0x59c82d(0x247));continue;case'1':_0x2888a3[_0x59c82d(0x68f)+'ck']=(_0x108ba7=>()=>_0x532f33(_0x108ba7))(_0x1ae148['id']);continue;case'2':_0x2888a3[_0x59c82d(0x6cc)]=_0x1ae148[_0x59c82d(0x2af)];continue;case'3':_0x54233c[_0x59c82d(0x19b)+_0x59c82d(0x211)+'d'](_0x2888a3);continue;case'4':_0x2888a3[_0x59c82d(0x15d)]=_0x59c82d(0x58e)+'n';continue;case'5':var _0x2888a3=document['creat'+_0x59c82d(0x48a)+'ent']('butto'+'n');continue;case'6':_0x2888a3['class'+_0x59c82d(0x194)]='mn-ta'+'b';continue;case'7':_0x56921e[_0x59c82d(0x5c3)](_0x1ae148['id'],_0x2888a3);continue;}break;}}else{if(!_0x4a76b3||_0x41fb3b[_0x59c82d(0x479)+_0x59c82d(0x55a)](_0x22ccf6)||_0x4ffc9f[_0x59c82d(0x1c3)](_0x1b5574[_0x59c82d(0x24b)+'h'],-0x2491+0x1*-0x1dd5+0x42a6))return;_0x1ed0cf[_0x59c82d(0x1d0)](_0x2e5703);}}function _0x532f33(_0xa90d17){var _0x2bd538=_0x59c82d;_0x45d8d4[_0x2bd538(0x27a)]=_0xa90d17,_0x4ffc9f[_0x2bd538(0x55d)](_0x4297ca);var _0x3f43e2=_0x3770d4[_0x2bd538(0x2c7)](_0x4e5bd4=>_0x4e5bd4['id']===_0xa90d17)||_0x3770d4[-0x18b*-0xb+-0x2+-0x10f7];_0xd47aa9['textC'+_0x2bd538(0x30e)+'t']=_0x4ffc9f[_0x2bd538(0x2be)](_0x4ffc9f[_0x2bd538(0x3fd)],_0x3f43e2['label']);for(var [_0x3ebe4c,_0x3ec65c]of _0x56921e)_0x3ec65c[_0x2bd538(0x279)+_0x2bd538(0x4cc)][_0x2bd538(0x185)+'e'](_0x4ffc9f[_0x2bd538(0x4dd)],_0x3ebe4c===_0xa90d17);_0x1c8390['repla'+'ceChi'+'ldren'](..._0x20a905(_0xa90d17));}return _0x45240d[_0x59c82d(0x485)](_0x532f33,_0x45d8d4['cat']||_0x59c82d(0x581)+'t'),setInterval(()=>{var _0x289c51=_0x59c82d;if(!_0x17bb7f)return;var _0x234f12=_0x1c8390['child'+'ren'];for(var _0x2ddc86=-0x1*0x145+-0xf3e+0x1*0x1083;_0x2ddc86<_0x234f12['lengt'+'h'];_0x2ddc86++){var _0x5be82c=_0x234f12[_0x2ddc86][_0x289c51(0x696)+_0x289c51(0x285)+'tor'](_0x289c51(0x4eb)+_0x289c51(0x50b));_0x5be82c&&(_0x5be82c[_0x289c51(0x591)+'onten'+'t'][_0x289c51(0x6d7)+'Of'](_0x289c51(0x695))===-0x9*0x2a9+-0xfa4+0x2795*0x1||_0x5be82c[_0x289c51(0x591)+'onten'+'t']['index'+'Of'](_0x289c51(0x57f))===0x21e2+0x7*0x385+0x3a85*-0x1)&&(_0x5be82c[_0x289c51(0x591)+_0x289c51(0x30e)+'t']=_0x42da00[_0x289c51(0x2f4)+_0x289c51(0x227)]?_0x4ffc9f[_0x289c51(0x5e3)]:_0x42da00[_0x289c51(0x1be)]?_0x4ffc9f[_0x289c51(0x153)](_0x4ffc9f[_0x289c51(0x1ce)](_0x4ffc9f[_0x289c51(0x571)](_0x4ffc9f[_0x289c51(0x47a)](_0x4ffc9f[_0x289c51(0x166)]+(_0x42da00['hooks'+'Total']?_0x4ffc9f['aaFkx'](_0x42da00[_0x289c51(0x25e)+'Ok'],'/')+_0x42da00['hooks'+'Total']+_0x4ffc9f['nlNXU']:'0\x20hoo'+_0x289c51(0x667)+'med\x20('+_0x289c51(0x5d5)+'ff)'),_0x289c51(0x1d9)+_0x289c51(0x51e))+(_0x42da00[_0x289c51(0x232)+_0x289c51(0x312)]?_0x4ffc9f['IxcQz']:'loadi'+'ng'),'\x20|\x20sh'+_0x289c51(0x393)+'\x20'),_0x42da00[_0x289c51(0x17c)+_0x289c51(0x5e1)]?_0x289c51(0x51c):'none')+(_0x289c51(0x424)+_0x289c51(0x2d3)+'t\x20'),_0x42da00[_0x289c51(0x446)+_0x289c51(0x407)]?_0x4ffc9f['WVvjo']:_0x289c51(0x4e7))+(_0x42da00['lastE'+_0x289c51(0x5af)]?_0x289c51(0x598)+_0x289c51(0x18d)+_0x42da00[_0x289c51(0x391)+_0x289c51(0x5af)]:''):_0x4ffc9f[_0x289c51(0x183)]);}},-0x10bc+0x213c+0xf8*-0xd),_0x256681;}var _0x4c9680='\x0a\x20\x20\x20\x20'+_0x3ceef5(0x6a1)+'\x20{\x20al'+'l:\x20in'+_0x3ceef5(0x1c4)+_0x3ceef5(0x390)+_0x3ceef5(0x538)+'{\x20box'+_0x3ceef5(0x267)+'ng:\x20b'+_0x3ceef5(0x2ca)+_0x3ceef5(0x58d)+_0x3ceef5(0x397)+_0x3ceef5(0x137)+';\x20fon'+'t-fam'+_0x3ceef5(0x2b3)+_0x3ceef5(0x35c)+'r\x22,\x20\x22'+_0x3ceef5(0x318)+_0x3ceef5(0x1df)+_0x3ceef5(0x559)+'em-ui'+',\x20san'+'s-ser'+_0x3ceef5(0x44d)+_0x3ceef5(0x1bb)+'.mn-p'+_0x3ceef5(0x6ad)+'{\x20pos'+_0x3ceef5(0x291)+':\x20abs'+_0x3ceef5(0x669)+';\x20rig'+_0x3ceef5(0x55e)+_0x3ceef5(0x1b7)+'botto'+_0x3ceef5(0x67e)+_0x3ceef5(0x3f3)+'idth:'+'\x20min('+'620px'+_0x3ceef5(0x1ae)+_0x3ceef5(0x177)+_0x3ceef5(0x510)+'48px)'+_0x3ceef5(0x55f)+_0x3ceef5(0x3ad)+_0x3ceef5(0x64e)+'min(4'+'80px,'+'\x20calc'+_0x3ceef5(0x25f)+'h\x20-\x204'+_0x3ceef5(0x535)+_0x3ceef5(0x443)+_0x3ceef5(0x1f9)+'splay'+':\x20fle'+'x;\x20ga'+_0x3ceef5(0x60b)+'px;\x20p'+_0x3ceef5(0x2fc)+'g:\x2010'+'px;\x20b'+'order'+_0x3ceef5(0x134)+'us:\x202'+'2px;\x20'+_0x3ceef5(0x602)+_0x3ceef5(0x444)+'ents:'+_0x3ceef5(0x54c)+';\x0a\x20\x20\x20'+_0x3ceef5(0x431)+_0x3ceef5(0x21f)+_0x3ceef5(0x35e)+'rgba('+_0x3ceef5(0x60c)+_0x3ceef5(0x540)+_0x3ceef5(0x554)+_0x3ceef5(0x643)+_0x3ceef5(0x35f)+'ilter'+':\x20blu'+_0x3ceef5(0x306)+_0x3ceef5(0x5b9)+_0x3ceef5(0x5ab)+'e(150'+_0x3ceef5(0x2bf)+'webki'+'t-bac'+_0x3ceef5(0x221)+'-filt'+'er:\x20b'+'lur(2'+_0x3ceef5(0x5ed)+_0x3ceef5(0x38d)+'ate(1'+_0x3ceef5(0x484)+'\x0a\x20\x20\x20\x20'+_0x3ceef5(0x5a3)+_0x3ceef5(0x365)+_0x3ceef5(0x20f)+'\x200\x200\x20'+'1px\x20r'+_0x3ceef5(0x6c0)+'55,25'+'5,255'+_0x3ceef5(0x374)+_0x3ceef5(0x494)+'et\x200\x20'+_0x3ceef5(0x69e)+'\x20rgba'+_0x3ceef5(0x2c6)+_0x3ceef5(0x1ee)+'55,.0'+_0x3ceef5(0x547)+_0x3ceef5(0x167)+_0x3ceef5(0x209)+_0x3ceef5(0x154)+_0x3ceef5(0x3fb)+_0x3ceef5(0x690)+');\x0a\x20\x20'+_0x3ceef5(0x567)+_0x3ceef5(0x3bc)+_0x3ceef5(0x3fe)+'\x20tran'+'sform'+_0x3ceef5(0x4ce)+'nslat'+_0x3ceef5(0x55b)+_0x3ceef5(0x2cd)+_0x3ceef5(0x602)+'er-ev'+'ents:'+'\x20none'+';\x20tra'+_0x3ceef5(0x6b1)+_0x3ceef5(0x33a)+'pacit'+_0x3ceef5(0x1ed)+'s\x20eas'+'e,\x20tr'+'ansfo'+_0x3ceef5(0x1c5)+_0x3ceef5(0x143)+'bic-b'+_0x3ceef5(0x2e0)+_0x3ceef5(0x544)+'1,.36'+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x3ceef5(0x354)+'r:\x20#f'+'6eef2'+';\x20fon'+_0x3ceef5(0x40b)+_0x3ceef5(0x21a)+_0x3ceef5(0x422)+_0x3ceef5(0x1bb)+_0x3ceef5(0x246)+'anel.'+_0x3ceef5(0x398)+'\x20{\x20op'+'acity'+_0x3ceef5(0x2f2)+_0x3ceef5(0x641)+_0x3ceef5(0x1a0)+'\x20none'+_0x3ceef5(0x3ca)+'nter-'+'event'+_0x3ceef5(0x20e)+_0x3ceef5(0x1b8)+_0x3ceef5(0x1bb)+'.mn-s'+_0x3ceef5(0x1e7)+_0x3ceef5(0x5e9)+'lay:\x20'+_0x3ceef5(0x6c7)+_0x3ceef5(0x537)+'-dire'+_0x3ceef5(0x52c)+':\x20col'+_0x3ceef5(0x414)+_0x3ceef5(0x517)+_0x3ceef5(0x1f1)+_0x3ceef5(0x4e3)+'nter;'+'\x20gap:'+'\x204px;'+'\x20widt'+'h:\x2062'+_0x3ceef5(0x5fc)+_0x3ceef5(0x3e6)+_0x3ceef5(0x1e8)+'\x20padd'+'ing:\x20'+_0x3ceef5(0x28a)+('0;\x20bo'+'rder-'+_0x3ceef5(0x5ae)+'s:\x2016'+_0x3ceef5(0x2e4)+'\x20\x20\x20\x20\x20'+'backg'+'round'+':\x20rgb'+_0x3ceef5(0x15a)+_0x3ceef5(0x15b)+'255,.'+_0x3ceef5(0x6e3)+'\x20box-'+_0x3ceef5(0x4f0)+_0x3ceef5(0x4b8)+_0x3ceef5(0x460)+_0x3ceef5(0x131)+_0x3ceef5(0x478)+'gba(2'+_0x3ceef5(0x62c)+_0x3ceef5(0x1cf)+_0x3ceef5(0x601)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x3ceef5(0x584)+'o\x20{\x20d'+'ispla'+'y:\x20gr'+_0x3ceef5(0x13f)+_0x3ceef5(0x599)+'items'+':\x20cen'+_0x3ceef5(0x3b4)+_0x3ceef5(0x513)+_0x3ceef5(0x440)+_0x3ceef5(0x124)+'ight:'+'\x2032px'+_0x3ceef5(0x390)+'\x20\x20\x20.m'+'n-log'+_0x3ceef5(0x35b)+_0x3ceef5(0x670)+'dth:\x20'+_0x3ceef5(0x6c2)+_0x3ceef5(0x322)+_0x3ceef5(0x55e)+_0x3ceef5(0x17a)+'overf'+'low:\x20'+'visib'+'le;\x20f'+'ilter'+_0x3ceef5(0x435)+'p-sha'+_0x3ceef5(0x42c)+_0x3ceef5(0x556)+_0x3ceef5(0x309)+'a(255'+_0x3ceef5(0x202)+_0x3ceef5(0x4be)+_0x3ceef5(0x341)+_0x3ceef5(0x47c)+_0x3ceef5(0x3c3)+_0x3ceef5(0x412)+_0x3ceef5(0x5e9)+_0x3ceef5(0x29f)+_0x3ceef5(0x6c7)+_0x3ceef5(0x674)+_0x3ceef5(0x327)+_0x3ceef5(0x5f0)+_0x3ceef5(0x3f5)+_0x3ceef5(0x53e)+_0x3ceef5(0x37c)+_0x3ceef5(0x65e)+_0x3ceef5(0x6c4)+_0x3ceef5(0x3f5)+';\x20wid'+_0x3ceef5(0x65b)+_0x3ceef5(0x37d)+'heigh'+'t:\x2034'+_0x3ceef5(0x4f4)+'order'+_0x3ceef5(0x4fd)+_0x3ceef5(0x386)+_0x3ceef5(0x63f)+_0x3ceef5(0x2d4)+_0x3ceef5(0x4e2)+'\x0a\x20\x20\x20\x20'+_0x3ceef5(0x3f7)+'kgrou'+'nd:\x20t'+_0x3ceef5(0x562)+_0x3ceef5(0x4e9)+_0x3ceef5(0x69d)+_0x3ceef5(0x6c1)+'gba(2'+'46,23'+'8,242'+',.4);'+'\x20curs'+_0x3ceef5(0x254)+_0x3ceef5(0x226)+'r;\x20fo'+_0x3ceef5(0x550)+_0x3ceef5(0x299)+'0px;\x20'+'font-'+_0x3ceef5(0x647)+'t:\x2070'+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3ceef5(0x180)+_0x3ceef5(0x230)+_0x3ceef5(0x636)+_0x3ceef5(0x278)+_0x3ceef5(0x421)+'a(246'+_0x3ceef5(0x2e8)+_0x3ceef5(0x5fd)+'8);\x20}'+'\x0a\x20\x20\x20\x20'+_0x3ceef5(0x4e1)+'ab.ac'+_0x3ceef5(0x43d)+'{\x20col'+'or:\x20#'+_0x3ceef5(0x1a3)+'d;\x20ba'+'ckgro'+'und:\x20'+_0x3ceef5(0x401)+_0x3ceef5(0x665)+_0x3ceef5(0x1d8)+_0x3ceef5(0x27f)+_0x3ceef5(0x390)+_0x3ceef5(0x4dc)+'n-mai'+_0x3ceef5(0x57a)+'lex:\x20'+'1;\x20mi'+_0x3ceef5(0x50e)+_0x3ceef5(0x4ca)+';\x20dis'+_0x3ceef5(0x383)+'\x20flex'+';\x20fle'+'x-dir'+_0x3ceef5(0x4cf)+_0x3ceef5(0x6cd)+'lumn;'+_0x3ceef5(0x1dc)+_0x3ceef5(0x337)+_0x3ceef5(0x215)+'{\x20dis'+'play:'+'\x20flex'+_0x3ceef5(0x543)+_0x3ceef5(0x219)+_0x3ceef5(0x6ce)+'cente'+_0x3ceef5(0x4b6)+_0x3ceef5(0x629)+_0x3ceef5(0x56d)+_0x3ceef5(0x2fc)+'g:\x206p'+_0x3ceef5(0x576)+_0x3ceef5(0x557)+';\x20use'+_0x3ceef5(0x27c)+'ect:\x20'+_0x3ceef5(0x1e8)+_0x3ceef5(0x1dc)+_0x3ceef5(0x337)+_0x3ceef5(0x6a0)+_0x3ceef5(0x4c3)+_0x3ceef5(0x4db)+_0x3ceef5(0x612)+_0x3ceef5(0x428)+'dth:\x20'+_0x3ceef5(0x26c)+_0x3ceef5(0x609)+'mn-h\x20'+_0x3ceef5(0x1d5)+'t-siz'+_0x3ceef5(0x1d2)+_0x3ceef5(0x5fc)+'ont-w'+'eight'+_0x3ceef5(0x351)+';\x20}\x0a\x20'+_0x3ceef5(0x4dc)+'n-sub'+_0x3ceef5(0x3cd)+'nt-si'+_0x3ceef5(0x299)+_0x3ceef5(0x159)+_0x3ceef5(0x342))+(_0x3ceef5(0x42e)+'4;\x20}\x0a'+_0x3ceef5(0x609)+_0x3ceef5(0x5c0)+_0x3ceef5(0x3b6)+_0x3ceef5(0x5e9)+'lay:\x20'+_0x3ceef5(0x65a)+'\x20plac'+_0x3ceef5(0x608)+_0x3ceef5(0x5f0)+_0x3ceef5(0x3f5)+_0x3ceef5(0x648)+'th:\x202'+'8px;\x20'+_0x3ceef5(0x618)+'t:\x2028'+'px;\x20b'+_0x3ceef5(0x2ca)+_0x3ceef5(0x4fd)+'borde'+_0x3ceef5(0x63f)+'ius:\x20'+_0x3ceef5(0x305)+_0x3ceef5(0x4a7)+'round'+_0x3ceef5(0x4ce)+_0x3ceef5(0x192)+_0x3ceef5(0x273)+_0x3ceef5(0x278)+_0x3ceef5(0x5c2)+_0x3ceef5(0x614)+_0x3ceef5(0x6bf)+_0x3ceef5(0x269)+'.45;\x20'+'curso'+'r:\x20po'+'inter'+_0x3ceef5(0x390)+_0x3ceef5(0x4dc)+_0x3ceef5(0x206)+_0x3ceef5(0x4e6)+_0x3ceef5(0x251)+_0x3ceef5(0x6bf)+_0x3ceef5(0x269)+'1;\x20ba'+_0x3ceef5(0x21f)+'und:\x20'+_0x3ceef5(0x401)+_0x3ceef5(0x1ee)+'55,25'+_0x3ceef5(0x53f)+_0x3ceef5(0x5c6)+'\x20\x20\x20\x20.'+'mn-cl'+_0x3ceef5(0x515)+_0x3ceef5(0x38e)+_0x3ceef5(0x513)+_0x3ceef5(0x697)+_0x3ceef5(0x124)+_0x3ceef5(0x1eb)+_0x3ceef5(0x1ac)+';\x20fil'+_0x3ceef5(0x2a7)+_0x3ceef5(0x19a)+_0x3ceef5(0x12b)+_0x3ceef5(0x416)+_0x3ceef5(0x406)+_0x3ceef5(0x5e4)+_0x3ceef5(0x5cc)+_0x3ceef5(0x1a8)+_0x3ceef5(0x4d4)+'2;\x20st'+'roke-'+'linec'+'ap:\x20r'+_0x3ceef5(0x152)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x3ceef5(0x3b7)+_0x3ceef5(0x35a)+'ex:\x201'+';\x20min'+_0x3ceef5(0x352)+_0x3ceef5(0x41a)+_0x3ceef5(0x590)+'rflow'+'-y:\x20a'+_0x3ceef5(0x2aa)+'displ'+_0x3ceef5(0x3ac)+_0x3ceef5(0x430)+'grid-'+_0x3ceef5(0x465)+'ate-c'+'olumn'+_0x3ceef5(0x27d)+'peat('+_0x3ceef5(0x5f1)+_0x3ceef5(0x2ad)+'\x20minm'+'ax(25'+_0x3ceef5(0x502)+_0x3ceef5(0x1c2)+_0x3ceef5(0x543)+'gn-it'+'ems:\x20'+'start'+_0x3ceef5(0x543)+_0x3ceef5(0x2a6)+_0x3ceef5(0x380)+_0x3ceef5(0x1f6)+_0x3ceef5(0x3d4)+'ap:\x201'+_0x3ceef5(0x52a)+_0x3ceef5(0x122)+_0x3ceef5(0x48b)+_0x3ceef5(0x3b3)+_0x3ceef5(0x678)+_0x3ceef5(0x390)+_0x3ceef5(0x4dc)+'n-col'+_0x3ceef5(0x441)+'ebkit'+_0x3ceef5(0x1c0)+'llbar'+'\x20{\x20wi'+'dth:\x20'+_0x3ceef5(0x305)+'}\x0a\x20\x20\x20'+_0x3ceef5(0x3c3)+'cols:'+':-web'+'kit-s'+_0x3ceef5(0x373)+'bar-t'+'humb\x20'+_0x3ceef5(0x526)+'kgrou'+'nd:\x20r'+_0x3ceef5(0x6c0)+_0x3ceef5(0x62c)+_0x3ceef5(0x1cf)+_0x3ceef5(0x149)+';\x20bor'+'der-r'+_0x3ceef5(0x1a2)+_0x3ceef5(0x255)+_0x3ceef5(0x390)+'\x20\x20\x20.s'+'k-car'+_0x3ceef5(0x6df)+_0x3ceef5(0x2ca)+_0x3ceef5(0x134)+'us:\x201'+_0x3ceef5(0x37d)+_0x3ceef5(0x4a7)+'round'+':\x20rgb'+_0x3ceef5(0x15a)+',255,'+_0x3ceef5(0x46d)+_0x3ceef5(0x6e3)+'\x20box-'+_0x3ceef5(0x4f0)+_0x3ceef5(0x4b8)+'set\x200'+_0x3ceef5(0x131)+'1px\x20r'+_0x3ceef5(0x6c0)+'55,25'+'5,255'+_0x3ceef5(0x601)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x3ceef5(0x526)+_0x3ceef5(0x375)+_0x3ceef5(0x15f)+_0x3ceef5(0x6c0)+_0x3ceef5(0x62c)+'5,255'+_0x3ceef5(0x1b1)+';\x20box'+_0x3ceef5(0x365)+_0x3ceef5(0x368)+_0x3ceef5(0x1cd)+'0\x200\x200'+_0x3ceef5(0x5c1)+'rgba('+'255,1'+'07,15'+_0x3ceef5(0x372)+_0x3ceef5(0x5c6)+_0x3ceef5(0x609)+'sk-ca'+'rd-he'+_0x3ceef5(0x25a)+'displ')+(_0x3ceef5(0x6dc)+_0x3ceef5(0x6c6)+_0x3ceef5(0x517)+_0x3ceef5(0x1f1)+'s:\x20ce'+_0x3ceef5(0x52f)+_0x3ceef5(0x172)+'\x208px;'+'\x20padd'+'ing:\x20'+_0x3ceef5(0x133)+_0x3ceef5(0x39a)+_0x3ceef5(0x1dc)+_0x3ceef5(0x6d4)+'-card'+_0x3ceef5(0x6a0)+_0x3ceef5(0x17e)+_0x3ceef5(0x3e6)+_0x3ceef5(0x343)+'n-wid'+'th:\x200'+_0x3ceef5(0x390)+_0x3ceef5(0x453)+'k-car'+'d-tit'+_0x3ceef5(0x282)+_0x3ceef5(0x4b7)+'{\x20fon'+'t-siz'+_0x3ceef5(0x21a)+'px;\x20f'+'ont-w'+'eight'+':\x20600'+';\x20col'+'or:\x20r'+_0x3ceef5(0x6c0)+_0x3ceef5(0x1ba)+_0x3ceef5(0x1b6)+_0x3ceef5(0x5cb)+';\x20}\x0a\x20'+_0x3ceef5(0x453)+_0x3ceef5(0x5de)+_0x3ceef5(0x6b6)+'.sk-c'+_0x3ceef5(0x39f)+_0x3ceef5(0x68a)+_0x3ceef5(0x258)+_0x3ceef5(0x632)+_0x3ceef5(0x45f)+_0x3ceef5(0x63a)+_0x3ceef5(0x664)+'}\x0a\x20\x20\x20'+_0x3ceef5(0x466)+'mbody'+_0x3ceef5(0x56a)+_0x3ceef5(0x499)+':\x200\x201'+_0x3ceef5(0x14d)+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x3ceef5(0x466)+_0x3ceef5(0x31c)+_0x3ceef5(0x3cd)+_0x3ceef5(0x550)+_0x3ceef5(0x299)+_0x3ceef5(0x159)+_0x3ceef5(0x342)+_0x3ceef5(0x42e)+_0x3ceef5(0x496)+_0x3ceef5(0x59f)+_0x3ceef5(0x3c7)+_0x3ceef5(0x290)+_0x3ceef5(0x361)+'\x20\x20\x20\x20.'+_0x3ceef5(0x4d1)+_0x3ceef5(0x19f)+_0x3ceef5(0x646)+'y:\x20fl'+_0x3ceef5(0x6c8)+_0x3ceef5(0x676)+_0x3ceef5(0x67f)+':\x20cen'+'ter;\x20'+_0x3ceef5(0x5ec)+_0x3ceef5(0x305)+_0x3ceef5(0x122)+_0x3ceef5(0x6e2)+'px\x200;'+_0x3ceef5(0x300)+_0x3ceef5(0x1d3)+_0x3ceef5(0x518)+'5px;\x20'+_0x3ceef5(0x47c)+'\x20.sk-'+_0x3ceef5(0x2af)+'\x20{\x20fl'+'ex:\x201'+_0x3ceef5(0x69d)+'or:\x20r'+'gba(2'+'46,23'+_0x3ceef5(0x1b6)+',.75)'+_0x3ceef5(0x390)+_0x3ceef5(0x453)+_0x3ceef5(0x37e)+_0x3ceef5(0x4bc)+'ispla'+_0x3ceef5(0x410)+_0x3ceef5(0x2b9)+_0x3ceef5(0x229)+_0x3ceef5(0x302)+'\x2010px'+_0x3ceef5(0x5ba)+_0x3ceef5(0x3df)+_0x3ceef5(0x189)+'}\x0a\x20\x20\x20'+_0x3ceef5(0x466)+_0x3ceef5(0x2db)+_0x3ceef5(0x3ea)+_0x3ceef5(0x139)+_0x3ceef5(0x58b)+'elati'+'ve;\x20w'+_0x3ceef5(0x1f8)+_0x3ceef5(0x250)+_0x3ceef5(0x1e5)+_0x3ceef5(0x64e)+_0x3ceef5(0x12a)+_0x3ceef5(0x5e0)+_0x3ceef5(0x38a)+_0x3ceef5(0x487)+_0x3ceef5(0x4a2)+'adius'+':\x2099p'+_0x3ceef5(0x262)+_0x3ceef5(0x21f)+'und:\x20'+'rgba('+'255,2'+'55,25'+_0x3ceef5(0x338)+');\x20cu'+_0x3ceef5(0x308)+_0x3ceef5(0x4a0)+'ter;\x20'+_0x3ceef5(0x4db)+'\x20none'+_0x3ceef5(0x390)+_0x3ceef5(0x453)+_0x3ceef5(0x55c)+_0x3ceef5(0x5f4)+_0x3ceef5(0x2c0)+'\x20{\x20co'+'ntent'+':\x20\x22\x22;'+_0x3ceef5(0x330)+'tion:'+_0x3ceef5(0x222)+_0x3ceef5(0x165)+_0x3ceef5(0x288)+'\x203px;'+_0x3ceef5(0x566)+':\x203px'+';\x20wid'+_0x3ceef5(0x52d)+'px;\x20h'+_0x3ceef5(0x43c)+_0x3ceef5(0x367)+';\x20bor'+'der-r'+'adius'+_0x3ceef5(0x57b)+';\x20bac'+_0x3ceef5(0x375)+_0x3ceef5(0x15f)+'gba(2'+_0x3ceef5(0x62c)+_0x3ceef5(0x1cf)+_0x3ceef5(0x558)+';\x20tra'+_0x3ceef5(0x6b1)+_0x3ceef5(0x39d)+'eft\x20.'+_0x3ceef5(0x4b2)+_0x3ceef5(0x30c)+'ound\x20'+'.2s;\x20'+_0x3ceef5(0x47c)+'\x20.sk-'+_0x3ceef5(0x2db)+_0x3ceef5(0x31f)+'a-che'+_0x3ceef5(0x60f)+_0x3ceef5(0x293)+_0x3ceef5(0x160)+'backg'+_0x3ceef5(0x45a)+':\x20rgb')+('a(255'+_0x3ceef5(0x202)+'157,.'+_0x3ceef5(0x17b)+_0x3ceef5(0x47c)+_0x3ceef5(0x466)+_0x3ceef5(0x2db)+_0x3ceef5(0x31f)+_0x3ceef5(0x396)+_0x3ceef5(0x60f)+'\x22true'+_0x3ceef5(0x6c3)+'fter\x20'+'{\x20lef'+_0x3ceef5(0x3d2)+_0x3ceef5(0x4f4)+_0x3ceef5(0x30c)+_0x3ceef5(0x2cb)+'\x20#ff6'+_0x3ceef5(0x699)+_0x3ceef5(0x47c)+'\x20.sk-'+_0x3ceef5(0x4cd)+_0x3ceef5(0x5fe)+'ckgro'+_0x3ceef5(0x35e)+_0x3ceef5(0x401)+'255,2'+'55,25'+_0x3ceef5(0x364)+'5);\x20b'+_0x3ceef5(0x2ca)+':\x200;\x20'+'borde'+'r-rad'+_0x3ceef5(0x2d4)+'6px;\x20'+_0x3ceef5(0x278)+_0x3ceef5(0x1d6)+_0x3ceef5(0x67d)+_0x3ceef5(0x2ac)+'ing:\x20'+_0x3ceef5(0x30a)+'px;\x20f'+_0x3ceef5(0x603)+_0x3ceef5(0x583)+'11.5p'+_0x3ceef5(0x56f)+_0x3ceef5(0x6b3)+_0x3ceef5(0x59b)+_0x3ceef5(0x639)+_0x3ceef5(0x178)+_0x3ceef5(0x128)+_0x3ceef5(0x389)+_0x3ceef5(0x131)+_0x3ceef5(0x1cc)+'\x20rgba'+'(255,'+_0x3ceef5(0x1ee)+_0x3ceef5(0x432)+'5);\x20}'+_0x3ceef5(0x1bb)+'.sk-f'+_0x3ceef5(0x4a9)+_0x3ceef5(0x423)+'n\x20{\x20b'+_0x3ceef5(0x30c)+_0x3ceef5(0x2cb)+'\x20#221'+_0x3ceef5(0x451)+_0x3ceef5(0x47c)+_0x3ceef5(0x466)+'range'+_0x3ceef5(0x3ce)+_0x3ceef5(0x2cc)+_0x3ceef5(0x439)+_0x3ceef5(0x34a)+_0x3ceef5(0x53c)+'tems:'+_0x3ceef5(0x572)+'er;\x20g'+_0x3ceef5(0x462)+_0x3ceef5(0x422)+'\x0a\x20\x20\x20\x20'+'.sk-s'+'lider'+_0x3ceef5(0x14f)+_0x3ceef5(0x505)+_0x3ceef5(0x4bb)+_0x3ceef5(0x5d4)+_0x3ceef5(0x169)+_0x3ceef5(0x6ab)+_0x3ceef5(0x6d5)+_0x3ceef5(0x650)+_0x3ceef5(0x42a)+';\x20wid'+_0x3ceef5(0x156)+_0x3ceef5(0x52a)+_0x3ceef5(0x618)+'t:\x208p'+_0x3ceef5(0x262)+'ckgro'+_0x3ceef5(0x35e)+'trans'+'paren'+_0x3ceef5(0x577)+_0x3ceef5(0x609)+_0x3ceef5(0x454)+_0x3ceef5(0x402)+_0x3ceef5(0x3b2)+_0x3ceef5(0x49a)+_0x3ceef5(0x35d)+_0x3ceef5(0x1c7)+'able-'+_0x3ceef5(0x43e)+_0x3ceef5(0x5e8)+_0x3ceef5(0x1eb)+'\x202px;'+_0x3ceef5(0x5e0)+_0x3ceef5(0x2ab)+_0x3ceef5(0x438)+_0x3ceef5(0x2b8)+'\x20back'+_0x3ceef5(0x6a5)+'d:\x20li'+_0x3ceef5(0x5f7)+'gradi'+_0x3ceef5(0x30d)+'ff6b9'+'d,\x20#f'+'f6b9d'+')\x200\x200'+'\x20/\x20va'+'r(--p'+_0x3ceef5(0x54b)+_0x3ceef5(0x6a9)+'%\x20no-'+'repea'+'t,\x20rg'+'ba(25'+_0x3ceef5(0x1cf)+_0x3ceef5(0x15b)+_0x3ceef5(0x272)+_0x3ceef5(0x1dc)+_0x3ceef5(0x6d4)+'-slid'+'er::-'+_0x3ceef5(0x3b9)+_0x3ceef5(0x39b)+_0x3ceef5(0x3a7)+_0x3ceef5(0x3da)+_0x3ceef5(0x477)+_0x3ceef5(0x4e8)+_0x3ceef5(0x3c1)+_0x3ceef5(0x51d)+':\x20non'+'e;\x20wi'+'dth:\x20'+'6px;\x20'+_0x3ceef5(0x618)+_0x3ceef5(0x527)+_0x3ceef5(0x3f9)+_0x3ceef5(0x59f)+'top:\x20'+'-2px;'+'\x20bord'+_0x3ceef5(0x2ab)+_0x3ceef5(0x438)+_0x3ceef5(0x210)+_0x3ceef5(0x630)+_0x3ceef5(0x6a5)+'d:\x20#f'+'f6b9d'+_0x3ceef5(0x390)+_0x3ceef5(0x453)+'k-val'+_0x3ceef5(0x3cd)+'nt-si'+_0x3ceef5(0x299)+'1px;\x20'+_0x3ceef5(0x229)+'weigh'+_0x3ceef5(0x525)+'0;\x20mi'+_0x3ceef5(0x50e)+_0x3ceef5(0x1e4)+_0x3ceef5(0x305)+_0x3ceef5(0x20d)+_0x3ceef5(0x517)+_0x3ceef5(0x600)+'ht;\x20c'+'olor:'+_0x3ceef5(0x154)+_0x3ceef5(0x617)+'238,2'+_0x3ceef5(0x59c)+_0x3ceef5(0x5c6)+_0x3ceef5(0x609)+_0x3ceef5(0x3a4)+_0x3ceef5(0x253))+(_0x3ceef5(0x289)+_0x3ceef5(0x6d1)+'px;\x20h'+_0x3ceef5(0x43c)+_0x3ceef5(0x57c)+_0x3ceef5(0x277)+_0x3ceef5(0x317)+_0x3ceef5(0x2ed)+'order'+'-radi'+'us:\x206'+'px;\x20b'+'ackgr'+_0x3ceef5(0x2cb)+'\x20none'+_0x3ceef5(0x516)+_0x3ceef5(0x5d0)+_0x3ceef5(0x3d1)+_0x3ceef5(0x54e)+':\x20poi'+_0x3ceef5(0x52f)+'\x20}\x0a\x20\x20'+_0x3ceef5(0x6d4)+'-note'+_0x3ceef5(0x3cd)+_0x3ceef5(0x550)+_0x3ceef5(0x299)+'1px;\x20'+_0x3ceef5(0x278)+_0x3ceef5(0x421)+_0x3ceef5(0x260)+_0x3ceef5(0x2e8)+'242,.'+'5);\x20p'+'addin'+'g:\x202p'+_0x3ceef5(0x645)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x3ceef5(0x2eb)+_0x3ceef5(0x1ea)+_0x3ceef5(0x354)+'r:\x20#f'+'f7a93'+_0x3ceef5(0x390)+_0x3ceef5(0x453)+'k-btn'+_0x3ceef5(0x67b)+_0x3ceef5(0x5eb)+'elf:\x20'+_0x3ceef5(0x18f)+_0x3ceef5(0x5b3)+_0x3ceef5(0x487)+_0x3ceef5(0x437)+_0x3ceef5(0x19d)+_0x3ceef5(0x5aa)+'radiu'+_0x3ceef5(0x15e)+_0x3ceef5(0x228)+_0x3ceef5(0x499)+_0x3ceef5(0x367)+'\x2016px'+_0x3ceef5(0x2a0)+_0x3ceef5(0x375)+'nd:\x20#'+'ff6b9'+_0x3ceef5(0x411)+_0x3ceef5(0x60a)+'#fff;'+'\x20font'+_0x3ceef5(0x1d3)+_0x3ceef5(0x518)+_0x3ceef5(0x17a)+_0x3ceef5(0x229)+'weigh'+_0x3ceef5(0x4c1)+'0;\x20cu'+_0x3ceef5(0x308)+'\x20poin'+'ter;\x20'+'}\x0a\x20\x20\x20'+_0x3ceef5(0x466)+_0x3ceef5(0x292)+_0x3ceef5(0x41f)+'{\x20fil'+_0x3ceef5(0x679)+_0x3ceef5(0x4d2)+'tness'+_0x3ceef5(0x261)+_0x3ceef5(0x390)+_0x3ceef5(0x173));window['addEv'+_0x3ceef5(0x161)+'stene'+'r'](_0x45240d[_0x3ceef5(0x693)],_0x182508=>{var _0x3e4d06=_0x3ceef5;_0x182508[_0x3e4d06(0x49e)]===_0x45240d[_0x3e4d06(0x408)]&&(_0x182508['preve'+_0x3e4d06(0x5fa)+_0x3e4d06(0x2e6)](),_0x5b5e05());},!![]);var _0x1a7dcd=document['creat'+'eElem'+_0x3ceef5(0x4a4)](_0x3ceef5(0x239));_0x1a7dcd[_0x3ceef5(0x5ad)]['cssTe'+'xt']=_0x45240d['KGbbn'],_0x1a7dcd['inner'+'HTML']='<svg\x20'+_0x3ceef5(0x666)+_0x3ceef5(0x284)+'\x200\x2024'+'\x2024\x22>'+_0x3ceef5(0x2f1)+_0x3ceef5(0x6da)+'12\x2021'+_0x3ceef5(0x4d6)+_0x3ceef5(0x66e)+_0x3ceef5(0x4cb)+'-4-7.'+_0x3ceef5(0x125)+_0x3ceef5(0x12f)+_0x3ceef5(0x3f1)+'\x204-4.'+_0x3ceef5(0x28d)+'\x204\x204.'+_0x3ceef5(0x3fa)+'-2.5\x20'+_0x3ceef5(0x5bb)+'.5z\x22\x20'+'fill='+'\x22none'+_0x3ceef5(0x32d)+_0x3ceef5(0x4ff)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x3ceef5(0x6bb)+'h=\x222\x22'+_0x3ceef5(0x5cc)+_0x3ceef5(0x48c)+_0x3ceef5(0x3e7)+'=\x22rou'+'nd\x22\x20s'+_0x3ceef5(0x12b)+_0x3ceef5(0x492)+'join='+_0x3ceef5(0x490)+_0x3ceef5(0x470)+_0x3ceef5(0x32a)+'e\x20cx='+_0x3ceef5(0x5a2)+'cy=\x221'+_0x3ceef5(0x3a5)+'\x221.5\x22'+_0x3ceef5(0x3a1)+_0x3ceef5(0x5ca)+'6b9d\x22'+_0x3ceef5(0x596)+_0x3ceef5(0x218),_0x1a7dcd[_0x3ceef5(0x6cc)]=_0x3ceef5(0x2ae)+_0x3ceef5(0x355)+'r',_0x1a7dcd[_0x3ceef5(0x62b)+'seent'+'er']=()=>_0x1a7dcd[_0x3ceef5(0x5ad)]['opaci'+'ty']='1',_0x1a7dcd['onmou'+_0x3ceef5(0x50c)+'ve']=()=>_0x1a7dcd['style']['opaci'+'ty']=_0x3ceef5(0x3b8),_0x1a7dcd['oncli'+'ck']=_0x5d4259=>{var _0x1ce141=_0x3ceef5;_0x5d4259[_0x1ce141(0x1c9)+'ropag'+_0x1ce141(0x2d0)](),_0x5b5e05();},document['body'][_0x3ceef5(0x19b)+_0x3ceef5(0x211)+'d'](_0x1a7dcd),_0xe4335f(),requestAnimationFrame(_0x381740),console['log'](_0x3ceef5(0x2da)+'ra-ko'+_0x3ceef5(0x233)+'enu\x20r'+_0x3ceef5(0x698)+'\x20UWMK'+':',_0x42da00[_0x3ceef5(0x1be)]);});})()));
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
