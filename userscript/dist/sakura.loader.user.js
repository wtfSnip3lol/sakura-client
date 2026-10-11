// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.4.0
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
function _0x4597(_0x25fa9f,_0x3ee1ff){_0x25fa9f=_0x25fa9f-(-0x1ff3+0x16df*0x1+0x9b4);var _0x15f7a6=_0x1a16();var _0x1f0f94=_0x15f7a6[_0x25fa9f];if(_0x4597['KNhZQL']===undefined){var _0x31a6c7=function(_0x2c8286){var _0xcd237c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xf21874='',_0x1c5e07='';for(var _0x248d29=0x12f*0x1d+-0x1*-0xa4a+0x8d*-0x51,_0x4f5eb0,_0x35c988,_0x588df9=0x1*-0x1f03+0x204+-0x1cff*-0x1;_0x35c988=_0x2c8286['charAt'](_0x588df9++);~_0x35c988&&(_0x4f5eb0=_0x248d29%(0x1*-0x101e+0x9c1+0x1*0x661)?_0x4f5eb0*(0xe50+-0x12e8+0x4d8)+_0x35c988:_0x35c988,_0x248d29++%(0x3d7+0x84f+-0x1*0xc22))?_0xf21874+=String['fromCharCode'](0x12e7*0x2+-0x1329*0x2+0x183&_0x4f5eb0>>(-(-0x149f+0x1237*-0x1+-0xe2*-0x2c)*_0x248d29&0x6df*0x3+-0x25a2*-0x1+-0x3a39)):-0x87b+0xb22+-0x2a7){_0x35c988=_0xcd237c['indexOf'](_0x35c988);}for(var _0x3ce67e=0xd+-0xe*0x61+0x541,_0x57cbb2=_0xf21874['length'];_0x3ce67e<_0x57cbb2;_0x3ce67e++){_0x1c5e07+='%'+('00'+_0xf21874['charCodeAt'](_0x3ce67e)['toString'](0x1eef+0x130*-0x5+-0x18ef))['slice'](-(-0x2490+0x9*0x23+0x2357));}return decodeURIComponent(_0x1c5e07);};_0x4597['xTECbD']=_0x31a6c7,_0x4597['ZiOPGW']={},_0x4597['KNhZQL']=!![];}var _0x3d9d5b=_0x15f7a6[-0x1*-0x232e+-0x1163*0x1+0x1*-0x11cb],_0x2bc3d7=_0x25fa9f+_0x3d9d5b,_0x53ed29=_0x4597['ZiOPGW'][_0x2bc3d7];return!_0x53ed29?(_0x1f0f94=_0x4597['xTECbD'](_0x1f0f94),_0x4597['ZiOPGW'][_0x2bc3d7]=_0x1f0f94):_0x1f0f94=_0x53ed29,_0x1f0f94;}function _0x1a16(){var _0xb59671=['AgrbyNK','igzVDxi','zM5Iv3a','BKneqvm','zMLUza','u2TkDhy','oIbWB2K','lM1Ulxa','zuv4Ca','BwvKicG','yYGXmda','B25JAge','zgvZyW','DMG7EI0','BgrnAwm','kc4YmIW','Dw5PDhK','tu9Ztgq','Bw92zq','DMruz2C','sgLKzxm','ntuSlJa','kYbmtui','CYbpsgu','Aw5Mqw0','kdi1nsW','B25JBgK','rLbtigm','rLLxrNq','oIaXms4','4Ocuig5Via','CgvHDcG','CM9ZC2G','yMjZuMW','Dg9Y','t3P5tKm','mteUnxa','y2HPBgq','igvMzMu','DML0Eq','vfHvA2G','nxm0idi','ntuSmJu','ChG7cIa','sePwuwq','uwXdyMy','q29SB3i','Cg9W','DgL1qw4','zZOGnNa','AwPwrKC','uxHirMe','DdOXmda','yxKGB24','Ahq6ida','we1QEMu','ywXSihq','yw5ZzM8','B2rL','mNmSigi','C2f2zq','C2vSzwe','Agf0igq','Egnxrxe','wg1VsgK','CMuGkfm','qu5JAe4','mcuUifm','C2v0vhi','ihWGz2e','nde0ndj2r3j5zMu','CMfUC3a','DMLZDwe','lsbVDMu','yxnLBgK','vLbPEMO','A2v5zg8','zwn0oIa','yxj0vKK','BgvZiem','ChG7ihC','EKrJBeO','lc40nsK','igzPBgW','qMzzr3a','ksaXmda','BNq6igm','z0vkt3m','BhvTBJS','Bw4TAca','ndGZnJq','CY1Zzxi','wKvdteK','C2f0Dxi','D2fPDgK','B3zLCIa','BdOGAw4','De1rufO','BcbKCMe','CMvWBge','BgfIzwW','CMvHzey','Bgu7igy','y3nZvgu','BhKGkhi','BM9UztS','BNrLBNq','q0fovKe','BwfSEvy','AwXKigG','vNzYvLC','AwXLzdO','Aw46ida','CxvLCNK','ywn0A0S','lwv2zw4','ELHprum','icmYmJe','B25Lige','Awy7ih0','rLPQuhK','idi0iJ4','C3bHBG','yxbWzwe','B2r5','AxrPywW','y2fSBa','zcbZzwu','oIaYmNa','ihrOAxm','ig9Wywm','Bg1QDxq','BNrezwy','zw50','BwLUkdq','zxi6igi','Ec1OzwK','Bgf5ig8','Aw9FnZi','mZuSmJq','zsbTAxm','yMvNAw4','qMH1C1C','BMq6ihq','ignHy2G','ChGGDwK','z29K','yJLKoYa','Dg9WoIa','BLbjtNi','B29Rihi','AguGCMu','CYbnB3y','r3zVEgS','C3rYB2S','zg93oIa','AxHLzdS','C2fMzq','DNCGlsa','CNboCLa','zwCGzMe','DxrVoYa','ic5TBI0','lKXVy2e','mNb4ide','Bezuyuy','t1nOB28','wKDjueC','B3b0Aw8','CMvZDg8','DhjHy2S','vwvRBgm','tKCG4Ocuia','B29RCYa','tg9JywW','DgL0Bgu','C2jLr0i','Aw5JBhu','iduWjtS','lM1Ulxm','Acb7iha','idrWEdS','C2v0sxq','oYbVCge','Dg9W','iJeYiIa','DxmGywm','FdL8ohW','r3blrgu','BgLNBG','m3W1Fde','BJOGy28','y1fwEum','BMDL','zguSihq','zxiTzxy','mJqYlc4','ztSGD2K','DeDguMi','mIaXmK0','CvDczum','zgfTywC','mhWYFdq','rwfJAca','AwDUlxm','ueTyuMO','u0flvvi','i2zMnMi','Cc1ZAge','BKHbAvO','A2v5C3q','CM9Rzxm','y3PbANG','zxzLBIa','DgHYB3C','DgvJDgK','D3jPDgu','ihWGBw8','ALvdALe','oIbPBMG','kdaSmcW','qMXVy2S','rxHW','zxjZy3i','C3bSAxq','vg90ywW','DgHhtgq','C2v0qxq','AwvSza','Aw5WDxq','CMDIysG','vgryAhe','ChG7iha','zJzIowq','DxjH','ywX0Ac4','C3r5Bgu','ieLZr3i','uK9sq2S','u3bLzwq','DMzqwNK','BMX5kq','BM9Uzq','oIbYz2i','oYbWB2K','Bw8GDg8','lMrSBa','lc4WncK','yxvSDa','zMLSBfm','svrhuxK','C2HPzNq','y2fWu2G','nZiXndrdqvnyAgW','DhLqy3q','r3zgvha','y2rZq3G','CZPUB24','BgvMDa','C3DPDgm','D0jSDxi','Dgv4Dem','BYbWAwC','mxb4ida','sNnhA3K','zxiGEYa','ihWGrvi','C3rHCNq','y0jcr0W','z29KrgK','t3LuzfK','Fdb8nxW','Dgv4Dei','ihDOAwm','B2LUDgu','zwfK','DhnPDgm','qK1Xtxi','lZ48l3m','D0nVBg8','icaGig8','CMDPBI0','zw4GDg8','Aw1Lihm','CJOGi2y','BhbVCxO','oIaWoYa','nNb4ida','v0fttsa','sw5ZDge','mhGYnta','mtu3lc4','ENfYsxu','phn2zYa','DgvYigm','B3bLBG','CMvU','B2vZig4','B3rZlG','rvHqxq','AgvPz2G','zw50tgK','z24Ty28','zxi6oI0','AwnSqLy','y2LYy2W','DcbZDge','BwvsDw4','EtOGyMW','CMfUC2K','ChG7igy','Dw5RBM8','Dw5Kzwq','lwHLAwC','igLMig0','yxmGBM8','vgnuzwu','q29TyMe','nsKSida','mhG2mda','C1zlrhC','zsb3zwe','ENzMz1C','EtOGzMW','mJm4ldi','BKPdvMW','uMvJB2K','DMLLD0i','CIdIGjqG','uMvZzxq','A3jyCvu','zsbZzxi','Fdb8mG','EePzC2G','AwrHDgu','Cu90ALO','Cg9ZAxq','mtv8mte','BgLJyxq','BI13Awq','nYWWlJG','BwLKzgW','teH2rKq','zxjPDdS','zxj5idi','DMLZAwi','swyGCMu','lxnPEMu','BMu7ige','yxK6igC','t0Titwi','CMfKAxu','uIb2ms4','AxrLBxm','zxH0','igfWCgW','qM90Dg8','A2v5Dxa','CMXmr1G','Bg93zxi','Dg87zMK','C2STDMe','icaGzgK','EvLkzxK','BM9szwm','oc00lJu','Awr0Aa','oYbOzwK','mZe0m3HUtxLSBa','icaG','z2v0sxq','yxjLBNq','DNrdsgW','s2zfBNe','CuX2vLO','Ahq6idi','Fdj8nxW','EI1PBMq','AxrPB24','BMnL','nsWYntu','oIb0CMe','lM1Ulxq','ysGYndy','tgTnz20','igXLyxy','AhnyCvi','AdOGnJi','mJu1lde','q1nPDLC','EeHuB1m','nJaWia','BNqTC2K','zw51','ysblB3u','qLblwvy','DdOGnZa','ywrKrxy','vevHBKm','C2STAgK','Bw91C2u','BgW+','l3jHCgK','mcWUntu','nde5oYa','z3jPzdS','rgzKBgy','y1PHv2y','CgfYC2u','t3zLCNC','ic40oYa','DZOGAw4','idaGnha','x19tquS','oYbYAwC','DgvYoIa','oYb9cIa','D0TzsfO','qxbWBgK','CMLZAYa','C2STy2e','lwjHBNi','oNbVAw4','ALfqEM4','sw5MAw4','EYbIB3G','EYbMAwW','wxjqA08','DhjHBxa','r2DZEee','ig5VBMu','DKnIwfK','igjHBIa','q1nICKG','ie9olG','yxv0BY0','C2STCMe','vhD1Dwe','B3G9iJa','yxK6igy','zxG7ige','AxmGyNu','CMeTA28','Dw5xqwK','DMfSDwu','ywqGDg8','oYbWywq','lxbHCMu','zwXHDgK','DdOGnNa','B24Oks4','B3zLCMW','zwfKB3u','CKfkDMW','Bw4TCge','mcbOB28','zMXLEdO','vvj0uwK','Ae1dtwe','B2v6rg0','rvDOv2q','wNbxq1O','C2fMzu0','yxnZAwC','nsaWlti','igP1Bxa','DgnOihq','zwfSDgG','AKvSEhC','tun0CgW','zwLUC3q','zMuGBw8','ihDPzhq','iL0GEYa','BMC6igi','idqGnc4','zsaOt0G','lJuGms4','Cg9Uj3m','Ahq7igm','igzSzxG','y2vUDgu','ohb4ksK','zhrOoIa','q21utei','EYaTD2u','B25SEsW','AhvTyIa','yxjPys0','lc4WnIK','B3jKzxi','y2fSBhm','uuXmBKi','v01ligK','y3jLyxq','B2reAwu','q291BNq','zNrLCIa','BMv2zxi','s012C2K','tu9ersa','lxnLCMK','CJOGDgG','ywnRz3i','B3PAD2m','Bujhq3O','BeHQD3K','Bg9NBY0','B290zxi','C2HVD24','zcWGyw4','y2HLy2S','B3vUzgu','DxjZB3i','iokaLcb0zq','CMqTAgu','nMi5zci','ihSGy28','z3jHzgK','CMrLCI0','CM91BMq','ndSGFqO','C3rVCfa','zw50oYa','BwLZyW','r0Ppq3m','mhWXFdq','mxWZFdi','C2HHzg8','zwjRAxq','ifTfwfa','y29SCZO','v2vHCg8','DgG6idu','BwjtBLi','AfTHCMK','BM9tChi','Dc1ZAxO','zvrHA2u','ihrOzsa','Bgf5oIa','icaGica','u0fgrq','Ag9Szsa','yMHVCa','C0jnBMm','ihDLyxa','lwjVEdS','BeDmyLG','ihrVide','lwrPCMu','rw5NAw4','A2z2uhK','ysGYntu','qNDIyKS','zJDHotm','C3rLBMu','qwnAruy','BNnLDca','ug9ZAxq','mJu1lc4','yxa6ide','iJeUnsi','DgvTCgW','CZOGoha','B25PBNa','A291CNm','zNHYBK8','zxnJ','icbIywm','zgvYlxi','u2nHBgu','zw1LBNq','yMDQChq','oYbTAw4','BMCGzM8','BM93','vvjbx0S','idaGmJq','AY1OAw4','vw5Uu0O','Aw5NicS','DgrYBKC','DgvTlxu','y2fWtw8','yM91BMq','DgLVBJO','ugzPyuy','ihrVCdO','BLbSyxq','Bg9Hzhm','igj1AwW','nNb4oYa','vLfqsMK','sfrnta','igjVCMq','wMvYB2u','Cu94rui','iIbZDhi','lNnRlxm','zenOAwW','y29Kzq','Efbhwhe','CMfWAwq','B3qGBwe','CNjVCG','zxzLBNq','B3vUzdO','oYbJB2W','zdSGy28','z2fTzuW','CwjhEee','zvzHBhu','mta4ntmWyxvPExLv','oIaZmNa','y2XHC3m','C3rYB24','ywiUywm','ntaLktS','BgLKzxi','mdSGBwK','ihLVDxi','wvHTy2C','CI51As4','EMu6ide','zMDlu2i','igvYCG','igzVBNq','CgfYzw4','Ag9ZDg4','AwXSihK','AgDSBKm','Bw4Ty28','idK5osa','zMXLEdS','AKvwseO','u0fgrsa','vuPAueG','A291CI0','sw5Lz2m','B3vUzdS','CMvMAxG','CuPtwgi','icnMzJy','lK92zxi','AsXZyw4','DhLSzq','tw92zw0','yNrUoMG','Aw1Llca','A2uTBgK','nNb4idK','ihSGzM8','igjHy2S','msWUmZy','EgvZige','u2vNB2u','zZOGmNa','DdOGnJa','zs1PDgu','BgWGBwu','EtOGz3i','phbHDgG','Bw92zw0','tffjsge','oIbMBgu','psjTBI0','u0PbBMm','mJu1ldi','lMP1Bxa','B2XVCJO','Aw9UoMy','Dxm6ide','vvDnsYa','Bg9HzgK','oIbUB24','EcKGC2e','B09wC2K','r1Hsqxm','BhPSqMS','igjVEc0','nsK7ih0','Aw50zxi','r0L6zgG','ms4XlJa','ic5ZAY0','mxb4ihi','D1j4yuW','B2r6rKC','sgvPz2G','tM8Gzw4','t0zgigi','t1vsx18','CIb2ywW','A3nqB3m','CJSGz2e','B250zw4','vvrcC1G','u2HKvhC','B3rOAw4','icaGlNm','Ad0ImIi','icaUC2S','Bw9fEha','ihnVig4','BI1JBg8','CZO6lxC','BguGAwy','oYbMB24','EsbKzwy','t1vwC08','wuPmz3y','ugvkEMy','B2DAqvO','v3jHCha','C3bLzwq','AwX0zxi','yMfYlxq','ywHgyMy','yxrLvge','AwXS','idjWEdS','A2L0lxm','BsbVBIa','zgLZCgW','ugDsvuK','DgvZDa','BhvLCY4','thbcqMO','BhvYkdi','DgfNtMe','Dc1Iywm','ltqTnY4','Bg9YoIa','oJiXndC','AgvSza','ywrK','C3zNiJ4','tM8GuMu','pc9ZBwe','B24UvgK','BLPbrfa','iezPCMu','mcaXChG','ig9U','AxDTr1O','mJzWEdS','lMLVig0','B3bHy2K','Bgf0zwq','r29Kl2q','mtSGyMe','mtjWEdS','u2HHCNa','Ec1KAxi','y29TyMe','ywXSig8','wxfdtgu','ndySmJm','C2u6Ag8','CZOGy2u','AxmGAg8','t0rJz0i','iezquW','zxqGmca','BgLNBI0','C0fHrKW','ig1PBM0','ywXPz24','tfzcvKq','sg9VAYa','ywjSzs0','zcbJAg8','rLbtig8','yxj0lG','yuTVDxi','CfvXzwW','y3K9iJe','ugzMBg8','zc5VBIa','yxrLlwm','t0vMEuq','u3rHDgu','rwXLBwu','qNLjza','zxG6mJe','yMfJA2C','zxiTCMe','B246ig8','ihjNyMe','z3jHDMK','ihSGzMW','Bcb7igq','ENftBg4','tufTDxi','Be1VDgK','y2TNCM8','oIa1mcu','DhK6ic4','z3LIywm','Fde2Fde','ktSGy3u','BgvUz3q','ztOGBM8','ELzmAui','AY1Jyxi','lc4YnsK','yNv0Dg8','CuvRAMu','B3nWywm','EgnZvKG','lxjHzgK','Bg9Hzgu','4Ocuig92zq','B250lxm','zvKOmtG','q3HKBLK','yM9KEq','oMHVC3q','AY1IDg4','DuHnC2i','D2L0Ag8','Dg9Nz2W','B25TB3u','Aff5s2u','Bhv0ztS','nsWUmdu','zs5bCha','ufmGDw4','mwzYksK','Axr5oIa','yxa6ihi','ihnOB3q','Dw5KoIa','B3bLCNq','oYbIywm','AwDUlwK','A3ndChm','ignHBgm','ywWGBwu','C2v0x3q','CM9WywC','i2zMzJS','zg9JDw0','lxnPEMK','oYb3Awq','y3jVC3m','ywn0Axy','z29KicG','uMf0zq','B2fKzwq','AgfZ','i2zMyJm','ig1HCMC','qsblt1u','nsK7iha','DMfS','Aw5NoIa','D2fYBG','A3nty2e','CIGYmNa','sxnAvMO','AwrLCG','tgvNAw8','oYbQDxm','BgX5Egq','y2HtAxO','oIaZChG','tK1Zve0','AguGzgu','C2vLBNq','oIaXoYa','zMLLBgq','mtqYmJqZmejwtNjxvq','Bw4Ty2W','Dg5LC3m','uKzcAva','zwv6zsa','oIaIiJS','twLZyW','lwnHCMq','ignVBg8','BgfZDeu','mcWWlJy','C21HBgW','CMLKoYa','yxr3rwG','q2Dxu3q','BeffEhy','mJuPoYa','BxbACgy','uKPnsxu','B2STCMu','zwvMmJS','zwXK','DgG6ida','BIb0Agu','Cgv6qwC','B1jLy28','BgLUzw4','BgfJzs0','vMLZDwe','DgvYoYa','ywrKAw4','psiJzMy','ugn0','zdOGi2y','lxrVCca','r2z0rhO','AxrnuNi','zsXTB24','yxrSEsa','yJPOB3y','EfPjCei','idqTnc4','mxb4oYa','u0PqAK4','zwfKEs4','tMzrDwm','yxbWzw4','vvDPCfu','nYWWlJm','lJv6iIa','igXLzNq','oIbYAwC','wNDLvuK','mJqWiey','zw50CW','ifvUAxq','lwXPBMu','CMvSB2e','rgfUz2u','z2LMEq','vKz2Du8','nIaXoci','z2jHkdi','lwfWCgW','yxjNzxq','BvrKDgm','Fdv8m3W','BYb0Agu','DgXIB2C','qwrIBg8','Awr0AdO','Bgv4oYa','idfWEca','icaGyMe','mtSGBwK','odaSmtK','z2v0','lca1mcu','mtG1nZq4m016yxvjDq','BgLUzvC','tgH0r0y','oYbMBgu','vvDnsW','Aw5Uzxi','ohG5mc0','ihSGD2K','C2STzMK','Dw1StuW','idi0iIa','Axb0kq','BhmGDgG','CIbNyw0','y3jLzw4','s2v5qq','zgL2','CI52mq','rgfTywC','ihSGzgK','Dgv4Dee','ih0kica','DvDUr0K','zg93BIa','mhb4oYa','A0fvCee','ihn0CM8','Awq7iha','igDHCdO','zsGXnta','AwrLihS','A2DYB3u','u2L6zq','vgfRzxm','igv4Axq','z2v0rwW','oIa2nta','BMPXA3i','q1L4z2G','t1P5teK','mdSGFqO','mdSGy3u','ChG7ih0','Cfjgu2q','ndK3mKjRqLrpwq','oYbIB3i','Dhm6yxu','lxK6ige','tMfTzq','zciVpJW','zNvSBhm','CJSGzM8','mhb4lca','ksaWida','r29Kie0','ywqGD2G','icaGlM0','Bw1VifS','oIaXnha','icbIB3G','CMXHEsa','ie1VDMu','CMvJDa','DgvYo3C','ywLSzwq','uJOG','ys5RB3u','BI1TywK','Bw4TDge','zgL1CZO','zMXLEc0','Dhj1zq','z2v0q28','Ag9VA0C','yxrPB24','mJSGC3q','odiPoYa','sMjhBMi','Cu9NAuG','wLfzvhy','uMjPr1O','vMfSDwu','t0HLywW','z2v0qxq','C3rPBgW','nJjkuvPAsxi','CMvUDem','oIaWide','zJmY','nxb4oYa','suD1BuG','lxnHBNm','BMqIihm','Ae1MAwi','zIXZExm','idrWEca','BgXIyxi','D2L0Aca','oWOGica','lw5VDgu','igLZigm','Bwf4','C2zVCM0','iL06oMe','lJa4ktS','CfHiwK8','ChvZAa','lcbJywW','oIaJzJy','qxbWBhK','AguGzNi','AwDODdO','zxi6ida','zg93BG','uMfWAwq','EYbIywm','zhjVCc0','C2STy28','CM9Szq','iM5VBMu','CI1ZzwW','ig5VigG','mtiGmJe','ig5LDMu','DMC+','u2r2BLm','u3bHy2u','CNPJv0y','oIbJB2W','lwHVCa','Aw9UlLq','D2LKDgG','CZOGyxu','EYbMB24','ugnKrKG','qNvUBNK','Aw9F','y2fUDMe','zxj2zxi','zMyP','nZTWB2K','ihjLy28','Bxm6igm','DvnKswi','CejLzhe','mcWWlJG','igHVB2S','zgLUzZO','Dejrswi','v2LKDgG','ihbSywm','yM90Dg8','icaGic4','CMfPC2u','y2f0','qMrwze4','BMuUqxa','y2vSzxi','oJa7EI0','q2XVC2u','ktSkica','r0nID0K','CM9UzYa','sxnhCM8','z24TAxq','CYbLyxm','yw5LBc4','mtySmc4','CNrPzgu','igrPC3a','u0notwy','lxDPzhq','BNnWyxi','C2STy3q','uhPrr3a','DxjDifu','Ag9VA0m','BNrLCJS','EdSGyM8','AtmY','AuTtuwW','CI1Yywq','r3jHDMK','idmYChG','ywrPDxm','ldiZocW','Exvlrxy','BMu7ihm','rgLZywi','wLjQt08','C3bkDM4','Aw5KzxG','w3nHA3u','y3jVBgW','DdOGoha','zxjYihS','BI5MAxi','B3nL','rg51vxG','AdOGmZq','qLf5B0O','AxnWBge','DtmY','zgTPDa','t2fzuMy','mdCSmtu','vNj4wvm','D3j2zum','nJTWB2K','sKXtC1q','DhjVA2u','yxb0Dxi','B250lxC','ChbLyxi','C3rYAw4','B3uU','ig1VBwu','zfPArfC','igfIC28','yMTPDc0','Bw4TDg8','qNvnC2C','zsbJEd0','CYbHBgW','CLvsu3K','ide7ig0','ihbHzgq','oIbJzw4','mxW0Fdm','i2zMzG','DgG6idK','tuvuywS','y2vZlG','zhbY','DgLKzs4','rgP0wMi','zM9YBxm','zxrL','igzVCIa','CgfJAxq','y3rPB24','zgXdqKm','khjLBg8','BNrLCI0','DcWGCMC','wNzHteW','BsbSzwy','ugf0Aa','ufjVww0','AguGDxm','BgLUzwm','DMvYBge','whPmDxG','lcbZyw4','BLDTz1i','kYbtCge','zNPIEMu','DhjPyNu','te9HA3m','DgG6idi','idaGmca','BufxEMW','BM90zs4','ndCYA1D1D0vZ','zM9UDa','u2fRDxi','C2XPy2u','vw5PDhK','zgv2Awm','EdSGB3u','C2HVB3q','ignLBNq','y29SB3i','zMLSBfq','BdOGBM8','AxrJAa','zwLNAhq','DMCGEYa','DdOGmJG','vhnequ0','sNvTCca','AxrSzsa','y2uGB3y','zYb7igm','zxjYB3i','lIbuDxi','ihSGywW','lNnRlw0','Aw9FmZa','ihWGC2G','B2rLu3q','B3zLCMy','ywDLigq','uxjzEMi','Bw4TC2K','D3D1yMm','DgGUsw4','zMLSzw4','vgjRChC','BfjHDgK','sw5Zzxi','yNrwteO','DhLWzq','iefmtca','yLjKuey','BwjVzhK','AeHksMG','Ag9VA1a','vM1LuMG','BNnPDgK','Cg9PBNq','BtOGnNa','C3LtwxO','u3fjzue','zg93kda','ywLYlG','BMvHCI0','ls1W','idmWChG','CIbHzhy','BMf0Dxi','C2v0','ldi1nsW','quPetu0','yw5Uywi','uMvJDa','DgLVBI4','BwuG','cIaGica','ltiUnsa','zwfWB24','EdSGFqO','y2TLzd0','zwf0CYa','q2nyCva','AwvKigm','Aw5Zzxq','CMzSB3C','idGWChG','s2v5uW','BMq6icm','BLPNEwG','ode0BMzTywDu','D2vIA2K','D3zArvy','zYbJyw4','tMrPEeK','u3rHDhu','zgDIvgG','vg1AvMq','nZaWia','EMDYEva','AvrkCwW','whLZvMu','sfvgwLa','ohb4oYa','D2vPz2G','ltiUns0','Ag9VA04','Cu5HtxG','BY1ZDMC','Aw9U','B3nLihS','DhvYyxq','DxjDigG','BwrLC2m','zc10Axq','B2PwDg8','s0vRv2q','DfHzuKu','B3n0zMK','wg1HsxO','Bgv4oIa','D2jjrKq','zwqGyw0','ihSGyMe','y2SP','ifvjiIW','vfLRuMq','ChGPoYa','lxnSAwq','zvbSyxK','z3jPzc0','Aw4GC2e','ANvTCfa','te1c','B2XVCJS','mNWWFdC','zuvSzw0','B2LS','Bg9N','zMLSBa','CIGTlxa','yw1L','igq9iK0','zw50CZO','reHztxi','oePkC2nkvW','wfL5q0u','ihjLBg8','zxPPzxi','y3qGB24','y2L0EtO','zvbPEgu','DgG6idG','mJiSocW','CM9Rzs0','v2vItw8','DgHPCYa','B2TLpsi','y2HdB2W','CMfUy2u','ChjWr1y','tMT6qKS','A3mGyxi','yuzMwuu','uxbou3O','zw5HyMW','mJqSmtC','DwXjy3i','oYb0CMe','ldeWnYW','DhKGjq','idnWEdS','DgLMEs0','AgvHzgu','B0TKDfK','ywrIBg8','EdSGywW','CdOGmti','BNrLEhq','zw50zxi','zM9UDc0','BgLUzvq','Fdr8ma','EsaUmZu','ig1PBIG','AuX6rhG','Bg9YihS','DdOGmtu','Dw1UoYa','zvbSDwC','tKCGlsa','FqOGica','tgLZDa','CM0GlJq','sw5pvwi','C2fRDxi','Ag9VA3m','EcaWoYa','rezvtLa','oIbJDxi','teD6sLa','lwzPBhq','mciGCJ0','zfz3AuC','j3qGC3q','B3vUDgu','EeztCei','CMH3C0m','ys1JAgu','wNjYywO','s25psvC','yK1PC1K','DhKGmc4','uxr1q3i','lMXHC3q','EdSGyMe','B3i6ihi','yM9Yzgu','AxvZoIa','B2X1Dgu','BhrLCJO','DhjHBNm','BMq6ihi','mNb4oYa','CMrLCJO','ocKPoYa','zMy2yJK','DxDTAW','mdSGyM8','BI1PDgu','BgrYzw4','iNrYDwu','zw50rwW','zxjSyxK','EenjDwG','AgfPCG','zNbZ','BwvZC2e','iNjVDw4','lJq1oYa','zgvSzxq','ifvxtuS','zZOGmta','id0GzMW','DMvTzw4','zxjZ','Dc1ZBgK','Bw4TBg8','BI1SB2C','B3C6ida','oIa5oxa','ChG7igi','u2fMzxq','BMDYC1K','zuv0yxG','oIa0ChG','Bw92zvq'];_0x1a16=function(){return _0xb59671;};return _0x1a16();}(function(_0x41654b,_0x3b6b47){var _0x48d2b3=_0x4597,_0x2c5fd4=_0x41654b();while(!![]){try{var _0x9315ed=parseInt(_0x48d2b3(0x405))/(-0x354*-0x1+0x97*0x1f+-0x39a*0x6)*(-parseInt(_0x48d2b3(0x42e))/(0x20a2+0x8d1+-0x2971))+parseInt(_0x48d2b3(0x61c))/(-0xca3+0x4*-0x7cc+0x15eb*0x2)*(parseInt(_0x48d2b3(0x566))/(0x1c06+0x1be3+-0x29*0x15d))+-parseInt(_0x48d2b3(0x38b))/(-0x1511+-0x3a5+0x18bb*0x1)+-parseInt(_0x48d2b3(0x11f))/(-0x2175*-0x1+-0x1*0x191f+-0x850)+-parseInt(_0x48d2b3(0x192))/(0x1334+0x625+-0x1952)*(parseInt(_0x48d2b3(0x4e0))/(0xa57+-0x1307*0x1+0x8b8))+-parseInt(_0x48d2b3(0x3d9))/(-0x1bb5+0xa*-0x10+0x1c5e)+-parseInt(_0x48d2b3(0x287))/(-0x898+0x67a*-0x2+-0x732*-0x3)*(-parseInt(_0x48d2b3(0x52f))/(-0xc9c+-0x2c5*-0x1+-0xfd*-0xa));if(_0x9315ed===_0x3b6b47)break;else _0x2c5fd4['push'](_0x2c5fd4['shift']());}catch(_0x356501){_0x2c5fd4['push'](_0x2c5fd4['shift']());}}}(_0x1a16,0x3bf3*-0x7+0x11b*0x277+0x12936),((()=>{'use strict';var _0x271a49=_0x4597,_0x598f89={'UJZPH':function(_0x372e1e,_0x169e72){return _0x372e1e+_0x169e72;},'wrveC':function(_0x4871d6,_0x470e4d){return _0x4871d6===_0x470e4d;},'jEVHJ':'rXMez','LkMgm':_0x271a49(0x602),'TsDAM':function(_0x269db0){return _0x269db0();},'PcdFH':'NYZQi','PxmEc':'xRhCR','Zrraj':'kour-'+_0x271a49(0x461),'lFTaF':function(_0x84491e,_0x294f0d){return _0x84491e-_0x294f0d;},'mEVyg':_0x271a49(0x426),'OzyNC':function(_0x115cb4,_0x51591b){return _0x115cb4!==_0x51591b;},'PRoYm':'ByPIm','ZpWCZ':function(_0x3cfe0b,_0x321537){return _0x3cfe0b(_0x321537);},'nZgyh':function(_0x5401e2,_0x237302){return _0x5401e2/_0x237302;},'zyZGu':'ynelT','jQPzn':_0x271a49(0x4a3),'iclBV':function(_0x32254d,_0x143d5b){return _0x32254d+_0x143d5b;},'eRUvf':_0x271a49(0x1a9),'krXqU':function(_0x2bd29d,_0x4c68e7){return _0x2bd29d*_0x4c68e7;},'JOSPi':_0x271a49(0x108)+'255,2'+'35,24'+'0,0.5'+'5)','owymy':'middl'+'e','Tbkpw':_0x271a49(0x203)+'r','TcTee':_0x271a49(0x108)+_0x271a49(0x1a6)+'07,15'+_0x271a49(0x3bb)+'5)','HUmxf':'cdsCx','fgKSb':function(_0x22d5d3,_0x3377d0,_0x3c2495,_0x23c5a0){return _0x22d5d3(_0x3377d0,_0x3c2495,_0x23c5a0);},'UWipU':function(_0x46b828,_0x582229){return _0x46b828!=_0x582229;},'QxHFa':_0x271a49(0x499)+_0x271a49(0x1dc)+_0x271a49(0x545)+_0x271a49(0xb8)+_0x271a49(0xc2)+'iled:','CxdnY':function(_0x331423,_0x1eb9b0){return _0x331423===_0x1eb9b0;},'ANchN':_0x271a49(0x2f0),'sBMnc':function(_0x3cdac2,_0x582d1b,_0x363f74,_0x40df79,_0x4dba9b){return _0x3cdac2(_0x582d1b,_0x363f74,_0x40df79,_0x4dba9b);},'PzDuC':'shoot'+'ers','umlML':'DahKE','QLLnB':'#ff6b'+'9d','artVI':_0x271a49(0x107),'uSdIb':function(_0x55bc51,_0x5f483d){return _0x55bc51<_0x5f483d;},'rURSy':_0x271a49(0x4f8)+_0x271a49(0x5e2),'KMvsi':_0x271a49(0x240),'XMjze':function(_0x42d27c,_0x83a9be){return _0x42d27c+_0x83a9be;},'xFSpB':function(_0xc19e08,_0x5b43fc){return _0xc19e08+_0x5b43fc;},'bgjpt':function(_0x12f89c,_0x540624){return _0x12f89c+_0x540624;},'cZaWf':function(_0x2b76b1,_0x45ed59){return _0x2b76b1+_0x45ed59;},'iHIID':'\x20hook'+'s','xcsVH':'loadi'+'ng','pBedq':_0x271a49(0xfb)+_0x271a49(0x5c9)+'t\x20','VPizj':_0x271a49(0x12c)+_0x271a49(0x41a),'iKSQl':'tthEP','Twuua':function(_0x255a03,_0x30d71e){return _0x255a03!==_0x30d71e;},'WITIf':function(_0x5ec6d6,_0x10aea1){return _0x5ec6d6<_0x10aea1;},'MOsLd':_0x271a49(0x5bf),'URtQi':function(_0x52e681,_0x4a3a26,_0x2a77b0,_0x255dd2,_0x14324c){return _0x52e681(_0x4a3a26,_0x2a77b0,_0x255dd2,_0x14324c);},'zqSln':_0x271a49(0x431),'GgsxA':function(_0x4b11fa,_0xa677eb,_0x374c9e,_0x1214b9,_0x1a41f1){return _0x4b11fa(_0xa677eb,_0x374c9e,_0x1214b9,_0x1a41f1);},'NkzBK':_0x271a49(0x48c),'ZDPmF':'IsZVj','zVLiB':function(_0x2cfda8,_0x51c4be){return _0x2cfda8!==_0x51c4be;},'XleBq':'BrmRr','fAEck':'YpHpC','malyV':function(_0x1b1ba8){return _0x1b1ba8();},'tdrnG':_0x271a49(0x4d9),'ACsJk':function(_0x3af8ba,_0x2d8d60){return _0x3af8ba+_0x2d8d60;},'hHJJh':_0x271a49(0x1b2),'ldMic':function(_0x16552f,_0x24ebc6){return _0x16552f+_0x24ebc6;},'ZRjOO':_0x271a49(0x622)+'wn','Inegc':_0x271a49(0x187),'ShdTw':'blur','prpGV':'DOMCo'+_0x271a49(0x640)+'Loade'+'d','VyhbA':'WEeyy','bMisY':'RWaHr','ZweUI':'kour-'+'io_30'+_0x271a49(0x161)+_0x271a49(0x1e1)+'nt','JJmgh':function(_0x55e2e0,_0x43e8a0){return _0x55e2e0!==_0x43e8a0;},'sySYz':'none','DjtZb':function(_0x39e4d9,_0x388bf9){return _0x39e4d9*_0x388bf9;},'mTdtc':_0x271a49(0x4e4)+_0x271a49(0x249)+'e.App'+_0x271a49(0x174)+'ion','Exxgl':_0x271a49(0x108)+_0x271a49(0x2be)+_0x271a49(0xad)+_0x271a49(0x46a)+')','tOken':_0x271a49(0xb3)+_0x271a49(0x434)+'-seri'+_0x271a49(0x437)+'tem-u'+'i,san'+_0x271a49(0x631)+'if','JLSsT':function(_0x269ced,_0x520b95){return _0x269ced+_0x520b95;},'GIzdh':function(_0xf4e0a3,_0x311f33){return _0xf4e0a3!==_0x311f33;},'pUqel':function(_0x4d9e29,_0x146140){return _0x4d9e29+_0x146140;},'nPORc':function(_0x194167,_0x2b4a85){return _0x194167*_0x2b4a85;},'SCNMf':function(_0x48f0c6,_0x2b1d8d){return _0x48f0c6+_0x2b1d8d;},'NdixI':function(_0x16225f,_0x1c691f){return _0x16225f*_0x1c691f;},'cBBGL':function(_0x1958c9,_0x4ff5b8){return _0x1958c9===_0x4ff5b8;},'FYWFt':function(_0x5e65c2,_0xa23125){return _0x5e65c2-_0xa23125;},'XmoHi':function(_0x171da8,_0x3d1455){return _0x171da8-_0x3d1455;},'wKYHZ':function(_0x419b71,_0x2ee5ea){return _0x419b71===_0x2ee5ea;},'pNuSH':'KeyW','Pfflo':function(_0x203219,_0x3c487,_0x469079,_0x26c467,_0x5191c5,_0x1eaa1f,_0x1b442b){return _0x203219(_0x3c487,_0x469079,_0x26c467,_0x5191c5,_0x1eaa1f,_0x1b442b);},'LGzJP':_0x271a49(0x3e8),'taHpw':function(_0x463b4d,_0x55cb76){return _0x463b4d*_0x55cb76;},'TXUkh':function(_0x346d0a,_0x33e10e){return _0x346d0a+_0x33e10e;},'SdvnS':function(_0x2f2742,_0x1bf59e,_0x13c361,_0x4df9b3,_0xef6d02,_0x435d62,_0x524769,_0x2e4842){return _0x2f2742(_0x1bf59e,_0x13c361,_0x4df9b3,_0xef6d02,_0x435d62,_0x524769,_0x2e4842);},'zqrIu':_0x271a49(0x55a),'XYyCE':function(_0xd1bfdf,_0x526929){return _0xd1bfdf(_0x526929);},'KcAje':'RMB','JsGky':function(_0x6f17d3,_0x52703d){return _0x6f17d3+_0x52703d;},'kbCkv':'600\x201'+'2px\x20u'+'i-mon'+_0x271a49(0x34b)+_0x271a49(0x3b0)+_0x271a49(0x34b)+'e','rbrao':_0x271a49(0xf0)+_0x271a49(0x378)+_0x271a49(0x182)+'1','BPKYV':function(_0x49f83c,_0x9a0306){return _0x49f83c+_0x9a0306;},'Gvoxk':_0x271a49(0x31d),'qbGxA':_0x271a49(0x108)+'255,1'+_0x271a49(0x3d6)+_0x271a49(0x395)+')','vtCHl':function(_0x46469e,_0x48f074){return _0x46469e!==_0x48f074;},'TEanC':'thGLd','BdVdN':'BwbbK','gEJOs':_0x271a49(0x3e9),'nJCVl':_0x271a49(0x1d6)+_0x271a49(0xe3),'onRLx':'range','hQyKe':_0x271a49(0x18b)+'l','xrxQb':function(_0x3eb4bd){return _0x3eb4bd();},'tiuAn':_0x271a49(0x3db),'zvfgW':'selec'+'t','HUFZP':function(_0x5c3a5e,_0x864213){return _0x5c3a5e!==_0x864213;},'VmeRh':_0x271a49(0xca)+'n','sbeGB':'butto'+'n','yYJey':function(_0x9af1fe,_0x129a01){return _0x9af1fe===_0x129a01;},'SIiqA':_0x271a49(0x1c6)+'rd-he'+'ad','ruJbA':_0x271a49(0x1c6)+'rd-ti'+'tle','HrnFz':_0x271a49(0x28a)+'g','GftDz':function(_0x222ea8,_0x3f49fd,_0x423568){return _0x222ea8(_0x3f49fd,_0x423568);},'tBQIb':_0x271a49(0x398),'xPGXq':function(_0x5bd431,_0x508ef9){return _0x5bd431+_0x508ef9;},'TYkRd':'UWMK\x20'+'bound'+'\x20','WggVQ':function(_0xa39577,_0x1376cd){return _0xa39577+_0x1376cd;},'fxrnO':_0x271a49(0x1e9)+_0x271a49(0x577)+_0x271a49(0x5df)+'all\x20o'+_0x271a49(0x464),'odzFG':_0x271a49(0x34e)+'d','InOUb':_0x271a49(0x301),'njqkr':function(_0x1fa8f9,_0x51a31b,_0x3e2c61,_0x294124,_0x1d510b,_0x13620b){return _0x1fa8f9(_0x51a31b,_0x3e2c61,_0x294124,_0x1d510b,_0x13620b);},'hHyvh':_0x271a49(0x446),'BegHS':_0x271a49(0x3cf),'Ueklc':function(_0x2f726f){return _0x2f726f();},'wwubc':_0x271a49(0x230)+'|2|3|'+'6|5','iTJql':'mouse'+'up','nHAiZ':_0x271a49(0x315)+'t','eadak':function(_0x2720d1){return _0x2720d1();},'jElxw':_0x271a49(0x40f)+_0x271a49(0x610),'vCbXY':_0x271a49(0xff)+_0x271a49(0x5ed)+_0x271a49(0x10d)+'Initi'+_0x271a49(0x2f1)+'keHea'+'lth\x20a'+'nd\x20OH'+'ealth'+_0x271a49(0xc5)+'lDie,'+_0x271a49(0x2e2)+_0x271a49(0x2dd)+_0x271a49(0x532)+'\x20hurt'+'\x20or\x20k'+_0x271a49(0x298)+_0x271a49(0x4b0),'OKHMb':function(_0x53adb0,_0x3c84aa,_0x23cd49,_0x117443,_0xc72f84,_0x5d2ebc){return _0x53adb0(_0x3c84aa,_0x23cd49,_0x117443,_0xc72f84,_0x5d2ebc);},'RvTyv':_0x271a49(0x304)+'coil','fWLOc':function(_0x718992,_0x3c565e,_0x283cb3,_0x58205e,_0x2ebd9d,_0x1274e1){return _0x718992(_0x3c565e,_0x283cb3,_0x58205e,_0x2ebd9d,_0x1274e1);},'JPFRp':'No\x20Sp'+'read','cQVyC':'Zeroe'+'s\x20spr'+'ead\x20a'+'nd\x20ma'+_0x271a49(0x2b1)+'ccura'+'cy\x20on'+_0x271a49(0x28f)+_0x271a49(0x244)+'on\x20ev'+_0x271a49(0x17a)+'00ms.','xJNtG':_0x271a49(0x25d)+'s\x20Ove'+_0x271a49(0x481)+_0x271a49(0x236)+_0x271a49(0x49d)+'eRate'+_0x271a49(0x247)+_0x271a49(0x619)+_0x271a49(0x463)+'\x20may\x20'+_0x271a49(0x42d)+'\x20gate'+_0x271a49(0x362)+'s.','unWAi':function(_0x5e71eb,_0x1853e6,_0x3e2de0,_0xa2ee07,_0xd1934f,_0x1a82cb){return _0x5e71eb(_0x1853e6,_0x3e2de0,_0xa2ee07,_0xd1934f,_0x1a82cb);},'UIPuf':'Scale'+_0x271a49(0x4b8)+_0x271a49(0x5d7)+_0x271a49(0x416)+'ment\x20'+_0x271a49(0x2ed)+'\x20limi'+'ts\x20pl'+_0x271a49(0xdc)+_0x271a49(0x476)+'ation'+'.','SqIeA':function(_0x27ee04,_0x348f6a,_0x215709,_0x4d828a,_0x5acb0d,_0x417b44){return _0x27ee04(_0x348f6a,_0x215709,_0x4d828a,_0x5acb0d,_0x417b44);},'KlGDg':function(_0x5f1cdf,_0x3efc13,_0x3e422d,_0x5cf097){return _0x5f1cdf(_0x3efc13,_0x3e422d,_0x5cf097);},'CSivW':_0x271a49(0x460)+_0x271a49(0x45a),'qWBeC':_0x271a49(0x61e)+'l','MCtpl':function(_0x38a477,_0x4fbc57,_0x358752,_0x415b02,_0x5a3438,_0x5f4995){return _0x38a477(_0x4fbc57,_0x358752,_0x415b02,_0x5a3438,_0x5f4995);},'iwmGZ':'Keyst'+_0x271a49(0xf5),'llyxd':_0x271a49(0x251)+_0x271a49(0x542),'lGLbX':function(_0x1cf293,_0x27af22,_0x518a6c,_0x51df6e,_0x4ec56c,_0x196b02){return _0x1cf293(_0x27af22,_0x518a6c,_0x51df6e,_0x4ec56c,_0x196b02);},'oezDm':function(_0x257db7,_0x491341,_0x35d273){return _0x257db7(_0x491341,_0x35d273);},'QpNSz':'Cross'+_0x271a49(0x5c0),'PKXRj':function(_0x2fe294,_0x4c17e7,_0x3f26f9,_0x4faa16){return _0x2fe294(_0x4c17e7,_0x3f26f9,_0x4faa16);},'fzQyR':_0x271a49(0x3f9),'MAmur':_0x271a49(0x604),'mbSnR':_0x271a49(0x212)+_0x271a49(0x5ca),'hsXqR':_0x271a49(0x3d0)+'ck','ojVto':_0x271a49(0x3fa)+_0x271a49(0x5fc)+_0x271a49(0x56a)+'\x20relo'+_0x271a49(0x410)+_0x271a49(0x13c)+'ggled'+'.','XcdrO':function(_0x4e06ec,_0x1903eb,_0x218b65,_0xe3efb1,_0x17806a,_0x3893e7){return _0x4e06ec(_0x1903eb,_0x218b65,_0xe3efb1,_0x17806a,_0x3893e7);},'MUDbb':_0x271a49(0x1c4)+'es\x20on'+_0x271a49(0x568)+'ad.\x20I'+'f\x20mat'+'ches\x20'+'load\x20'+_0x271a49(0x558)+_0x271a49(0x1f9)+_0x271a49(0xe4)+_0x271a49(0x447)+_0x271a49(0x38f)+_0x271a49(0x31b)+_0x271a49(0x39e)+_0x271a49(0x30f)+_0x271a49(0x224)+_0x271a49(0x2b6)+'\x20the\x20'+_0x271a49(0x599)+_0x271a49(0x3ca)+_0x271a49(0x528)+'ount.','oKdtY':_0x271a49(0x1c4)+'es\x20on'+'\x20relo'+'ad.','pezAg':function(_0x21dde5,_0x152bb5,_0x47a35d){return _0x21dde5(_0x152bb5,_0x47a35d);},'tMQPZ':function(_0x3ad906,_0x5b8989,_0x58c955,_0x203ed2){return _0x3ad906(_0x5b8989,_0x58c955,_0x203ed2);},'VvrVW':'captu'+_0x271a49(0x617)+'etGam'+'eRunn'+_0x271a49(0x267)+_0x271a49(0x10f)+_0x271a49(0x222)+'d)','KcSkA':_0x271a49(0x310)+'amage'+_0x271a49(0x1b4)+'d\x20gre'+_0x271a49(0x3b1)+_0x271a49(0x472)+_0x271a49(0x1d2)+'risk\x20'+_0x271a49(0xf7)+_0x271a49(0x43a)+_0x271a49(0x571)+'on.','hKBZr':_0x271a49(0x3c5)+'r','VrgnB':_0x271a49(0x4ff)+'de','hMfib':_0x271a49(0x582)+'r','dZZDW':_0x271a49(0x4b5)+'p','IOGHz':'mn-ti'+'tles','Etjes':'mn-su'+'b','OaYRf':_0x271a49(0x258)+'trike'+_0x271a49(0x30d)+_0x271a49(0x1ab),'kAUpA':_0x271a49(0x38c)+_0x271a49(0x49e),'hnKwH':_0x271a49(0x29a)+'ls','iLzDx':_0x271a49(0x305)+_0x271a49(0x1b3),'BhusW':_0x271a49(0x3af),'SKKLx':function(_0x39253b,_0x511d0d){return _0x39253b!==_0x511d0d;},'LVBVD':function(_0x2fe4b0,_0x23eb26){return _0x2fe4b0===_0x23eb26;},'kZwDx':function(_0x424dc6){return _0x424dc6();},'UnnSJ':function(_0x12fa31,_0x43d83d){return _0x12fa31!==_0x43d83d;},'LpBBj':'\x20@\x20','Qpxdv':_0x271a49(0x294),'tXYRE':'sk-fi'+_0x271a49(0x3a0),'aFfYE':_0x271a49(0x31c),'lzlBk':function(_0x2633a5){return _0x2633a5();},'UlqpP':'wvZEV','YrPkO':_0x271a49(0x371)+'e','vdTgg':_0x271a49(0x3dd),'qJSXb':_0x271a49(0x61b)+_0x271a49(0x520),'hglnC':_0x271a49(0x2c3)+'MISSI'+_0x271a49(0x593)+_0x271a49(0x1e5)+'ay\x20on'+'ly\x20(r'+_0x271a49(0x1f8)+'all\x20t'+'he\x20us'+_0x271a49(0x101)+'ipt)','XmaIz':_0x271a49(0x505)+'t','HZBjg':_0x271a49(0x462)+'s','ElgJc':'posit'+_0x271a49(0x2c1)+_0x271a49(0xbe)+_0x271a49(0x529)+':0;wi'+'dth:1'+'00vw;'+'heigh'+_0x271a49(0x60a)+_0x271a49(0x5e3)+'index'+':2147'+_0x271a49(0x630)+_0x271a49(0x4a9)+'nter-'+_0x271a49(0x280)+'s:non'+'e','LHvFD':_0x271a49(0x598)+'a-ui','LfXDN':_0x271a49(0x598)+_0x271a49(0x41b)+'r.ui.'+'v1','wqPYY':_0x271a49(0x5e8),'TdBMl':_0x271a49(0x3a7)+'l','VrxYS':_0x271a49(0x5d1)+'y','zMtvl':_0x271a49(0x4e2)+'a\x20Kou'+'r','Ywgqn':'[saku'+'ra-ko'+'ur]\x20m'+'enu\x20r'+_0x271a49(0x3b7)+'\x20UWMK'+':','wMRYX':_0x271a49(0x598)+'a.kou'+'r.v1','VFvuO':_0x271a49(0x535),'hdAby':_0x271a49(0x4f5),'rzcWF':'Sakur'+_0x271a49(0x329),'fjWVN':_0x271a49(0xb4),'tGFRb':'godDi'+'e','DHYMr':'OHeal'+'th','EWhWd':'noRec'+_0x271a49(0x55e),'SJAnc':_0x271a49(0xc8)+'ter','EFEEk':function(_0x113be8,_0x358a88,_0x40a0f2){return _0x113be8(_0x358a88,_0x40a0f2);},'UTBsX':function(_0x42440d,_0x205b81){return _0x42440d(_0x205b81);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x271a49(0x2f8)](location[_0x271a49(0x297)+'ame']||''))return;if(window['__SAK'+_0x271a49(0x263)+_0x271a49(0x2d6)])return;window[_0x271a49(0x1bf)+_0x271a49(0x263)+_0x271a49(0x2d6)]=!![];var _0x259d4a=_0x598f89[_0x271a49(0x20e)],_0x42fdc7=_0x271a49(0x376)+'c6',_0x1d0f5f={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x271a49(0xf1)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x59c232={..._0x1d0f5f};try{Object[_0x271a49(0x1f1)+'n'](_0x59c232,JSON[_0x271a49(0x1ba)](localStorage[_0x271a49(0x194)+'em'](_0x598f89['wMRYX'])||'{}'));}catch(_0x2426a9){}function _0x455f28(){var _0x2344f5=_0x271a49;try{localStorage[_0x2344f5(0xd8)+'em'](_0x2344f5(0x598)+_0x2344f5(0x41b)+_0x2344f5(0x3ea),JSON[_0x2344f5(0x4af)+_0x2344f5(0x3c6)](_0x59c232));}catch(_0x216ecd){}}var _0xee6aa4={'uwmk':!!window['Unity'+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x59c232[_0x271a49(0x1f0)+_0x271a49(0x610)],'lastError':''};try{if(_0x271a49(0x137)===_0x598f89[_0x271a49(0x3c7)]){var _0x4c345a=_0x138072['devic'+_0x271a49(0x56c)+_0x271a49(0x504)+'o']||0x5d*0x1d+0x1cb0+0x7d8*-0x5,_0x2ce707=_0x4e7f88[_0x271a49(0x3de)+_0x271a49(0x46e)],_0x428456=_0x1e4c8c[_0x271a49(0x3de)+'Heigh'+'t'];if(_0x2ce707===_0x1d0db8['w']&&_0x428456===_0x146525['h']&&_0x4c345a===_0x1ca480[_0x271a49(0x4c2)])return;_0x7aa85c['w']=_0x2ce707,_0x5c9e2c['h']=_0x428456,_0x583025[_0x271a49(0x4c2)]=_0x4c345a,_0x1e6d16['width']=_0x3daf56['round'](_0x2ce707*_0x4c345a),_0x21298b[_0x271a49(0x14e)+'t']=_0x52c4a0[_0x271a49(0x22a)](_0x428456*_0x4c345a),_0x2a088d[_0x271a49(0x61a)+'ansfo'+'rm'](_0x4c345a,-0x1*-0x35+-0x1421+-0x3c*-0x55,-0x63f+0x25ef+-0x1fb0,_0x4c345a,0x1649+0x6be*-0x4+-0xb*-0x6d,0x1e99+0x15f8+-0x3491);}else window[_0x271a49(0x1af)+'entLi'+_0x271a49(0x24e)+'r'](_0x598f89[_0x271a49(0x5d6)],_0x143e29=>{var _0x5bfecd=_0x271a49;try{var _0x34e9c1=_0x143e29&&(_0x143e29[_0x5bfecd(0x5c2)+'ge']||_0x143e29[_0x5bfecd(0x4f5)]&&_0x143e29[_0x5bfecd(0x4f5)][_0x5bfecd(0x5c2)+'ge'])||'unkno'+'wn';if(_0x143e29&&_0x143e29[_0x5bfecd(0x502)+_0x5bfecd(0x562)])_0x34e9c1+=_0x598f89[_0x5bfecd(0x29f)]('\x20@\x20',String(_0x143e29[_0x5bfecd(0x502)+_0x5bfecd(0x562)])[_0x5bfecd(0x102)]('/')[_0x5bfecd(0x605)]())+':'+(_0x143e29[_0x5bfecd(0x3a5)+'o']||'?');_0xee6aa4[_0x5bfecd(0x394)+_0x5bfecd(0x27f)]=String(_0x34e9c1)['slice'](0x2455+0x265+-0x26ba,-0xc48+-0x1dc9*-0x1+-0x10e1);}catch(_0x426b65){}});}catch(_0xfc9034){}var _0x4c7fe8=null,_0x33b940=null,_0x451579={},_0x4cecc2=[],_0xc1241b=[],_0x12d80a=new Map();function _0x75808f(_0x1310ac,_0x512638){var _0x4bfd8d=_0x271a49;if(_0x598f89['wrveC'](_0x598f89[_0x4bfd8d(0x29d)],_0x598f89[_0x4bfd8d(0x1a2)]))_0x4f0566['set'](_0x3d5b6b,null);else{if(!_0x512638||_0x1310ac[_0x4bfd8d(0xd3)+'des'](_0x512638)||_0x1310ac['lengt'+'h']>-0x6*0x67+0xb56+-0x8ac)return;_0x1310ac[_0x4bfd8d(0x443)](_0x512638);}}function _0x313efb(_0x1f5f4b,_0x2f892c,_0x2e5d75,_0x4021c0){var _0x2d003e=_0x271a49,_0x4ee8e9=0x26ff*-0x1+0xa18+0x1ce7;try{_0x4ee8e9=_0x2f892c&&_0x2f892c[_0x2d003e(0x37a)]?_0x2f892c[_0x2d003e(0x37a)]():-0x3f5*-0x2+0xb31+-0x131b*0x1;}catch(_0x16d2bc){}if(!_0x4ee8e9)return;_0x75808f(_0x1f5f4b,_0x4ee8e9),_0x2e5d75[_0x4021c0]=_0x1f5f4b[_0x2d003e(0x344)+'h'];if(_0x4021c0===_0x2d003e(0x2b9)+'ents'&&_0x1f5f4b['lengt'+'h']){if(_0x598f89[_0x2d003e(0x45f)]!==_0x598f89['PxmEc']){var _0x930927=_0x451579[_0x2d003e(0x26a)+'ve'];if(_0x930927)try{_0x930927['enabl'+'ed']=![];}catch(_0x288d6c){}}else _0x38e97e['bhop']=_0x362ca3,_0x598f89[_0x2d003e(0x4f0)](_0x26e172);}}function _0x57cf3f(_0x264ac0,_0x55b5d3,_0x50d377){var _0x261542=_0x271a49,_0x36426d={'lmjut':'kour-'+_0x261542(0xac)+'8x90-'+_0x261542(0x296)+'t','LkTsu':_0x598f89[_0x261542(0x5a6)],'RORCk':_0x261542(0x114),'AJDMM':function(_0x1aa8f3,_0x32e39c){return _0x1aa8f3(_0x32e39c);},'UgMXT':function(_0x2a89ea,_0xb6014d){return _0x2a89ea>=_0xb6014d;},'lXiNi':function(_0xc9a639,_0x462d1a){var _0x48d197=_0x261542;return _0x598f89[_0x48d197(0xc7)](_0xc9a639,_0x462d1a);}},_0x197e24=_0x12d80a[_0x261542(0x3d7)](_0x264ac0);!_0x197e24&&(_0x197e24=new Map(),_0x12d80a[_0x261542(0x51a)](_0x264ac0,_0x197e24));if(!_0x197e24[_0x261542(0x375)](_0x55b5d3))try{if(_0x598f89['mEVyg']!==_0x261542(0x21c)){var _0x526151=new _0x4c7fe8(_0x264ac0)['readF'+_0x261542(0x106)](_0x55b5d3,_0x50d377);_0x197e24['set'](_0x55b5d3,_0x526151!==undefined?_0x526151['val']():null);}else for(var _0x272167 of[_0x261542(0x2a0)+'io_30'+_0x261542(0x144)+_0x261542(0x1e1)+'nt',_0x36426d[_0x261542(0xa5)],'kour-'+'io_30'+_0x261542(0x161)+_0x261542(0x1e1)+'nt',_0x261542(0x40b)+_0x261542(0x3e7)+_0x261542(0x1c7)+'s']){var _0x56ee12=_0x54da10['getEl'+_0x261542(0x25e)+_0x261542(0x332)](_0x272167);if(_0x56ee12&&_0x272167===_0x261542(0x40b)+'creen'+'-banr'+'s'){var _0x5a64a4=_0x56ee12[_0x261542(0x5fb)+_0x261542(0x14a)];for(var _0x32e33c=0x2b*0x15+0x1596+0x85f*-0x3;_0x32e33c<_0x5a64a4[_0x261542(0x344)+'h'];_0x32e33c++){if(_0x5a64a4[_0x32e33c]['id']&&_0x5a64a4[_0x32e33c]['id'][_0x261542(0x498)+'Of'](_0x36426d['LkTsu'])===-0x13*0x1c+-0x1*-0xe8d+0x67*-0x1f)_0x5a64a4[_0x32e33c][_0x261542(0x10e)]['displ'+'ay']=_0x36426d['RORCk'];}}else{if(_0x56ee12)_0x56ee12['style']['displ'+'ay']=_0x36426d[_0x261542(0x110)];}}}catch(_0x404e45){if(_0x598f89['OzyNC'](_0x598f89[_0x261542(0x4d1)],_0x598f89[_0x261542(0x4d1)])){_0x36426d[_0x261542(0x51c)](_0x5930fd,_0xa0e81e),_0x9d13b3++;var _0x39e940=_0x55ffcc['now']();_0x36426d['UgMXT'](_0x39e940-_0x19b10d,-0x1*0x1a+0x2af*0x7+-0x10bb)&&(_0x27948d=_0x5cbe6d[_0x261542(0x22a)](_0x5aa7f0*(0x2213+-0x2196+0x36b)/_0x36426d['lXiNi'](_0x39e940,_0x21588a)),_0x232976=0x1*0x1f1b+0x24b7*0x1+-0x43d2,_0x44f9d6=_0x39e940);_0x498bf8(),_0x565c88(),_0x4e799b['clear'+_0x261542(0x51e)](-0xee5+-0x40a*0x1+0x12ef,-0x41d+0x17ff*-0x1+0x2*0xe0e,_0x3b4dd5['w'],_0x244a71['h']);var _0x33c96f={'left':0x0,'top':0x0,'right':_0x2ba52d['w'],'bottom':_0x4b71a7['h'],'width':_0x1679b7['w'],'height':_0x54b290['h']};if(_0x4807ff['cross'+_0x261542(0x5c0)])_0xf7780c(_0x33c96f);if(_0x592d93[_0x261542(0xf4)+_0x261542(0xf5)])_0x2db764(_0x33c96f);_0x36426d[_0x261542(0x51c)](_0x37acf0,_0x33c96f);}else _0x197e24[_0x261542(0x51a)](_0x55b5d3,null);}return _0x197e24[_0x261542(0x3d7)](_0x55b5d3);}function _0x33ca60(_0x42a89e,_0x27064b,_0x270acd,_0x47a5d3){var _0x501722=_0x271a49;try{new _0x4c7fe8(_0x42a89e)[_0x501722(0xfa)+'Field'](_0x27064b,_0x270acd,_0x47a5d3);}catch(_0x393c03){}}function _0x139cbf(_0x35bdc2,_0x1fb101){var _0x5d080e=_0x271a49,_0x2c72f1={'PzQGp':function(_0x28df3f,_0x149fab){return _0x598f89['nZgyh'](_0x28df3f,_0x149fab);}};if(_0x5d080e(0x356)!==_0x5d080e(0x5a7))try{if(_0x598f89['wrveC'](_0x598f89['zyZGu'],_0x598f89['zyZGu'])){var _0x1b2db4=new _0x4c7fe8(_0x35bdc2)[_0x5d080e(0x63b)+'ield'](_0x1fb101,_0x598f89[_0x5d080e(0x1c9)]);return _0x1b2db4?_0x1b2db4[_0x5d080e(0x37a)]():-0x1ae3+0x133a+0x25*0x35;}else _0x36f8dc[_0x5d080e(0x289)+_0x5d080e(0x595)][_0x5d080e(0x358)+'e']('on',_0x284365),_0x598f89[_0x5d080e(0x1ef)](_0x2b8b3a,_0x4e4af6);}catch(_0x56b8f5){if(_0x5d080e(0x34a)===_0x5d080e(0x34a))return 0x1*0x1271+0x8a0+-0x1b11;else _0x73ad4c=_0x4ac452[_0x5d080e(0x22a)](_0x2c72f1[_0x5d080e(0x487)](_0x17b810*(0x3b0*0x7+-0x3*-0xbcb+-0x82f*0x7),_0x3b4756-_0x3fe8a6)),_0x47c267=-0xf47*0x1+0x2*0xe4e+-0xd55*0x1,_0x1e4865=_0x3c5373;}else{_0x36da12[_0x5d080e(0x473)]=_0x32670e,_0x44162e();var _0x43a523=_0x4f55ce['find'](_0x1cb96a=>_0x1cb96a['id']===_0x526692)||_0x586208[-0x674+0x17*0x8d+0x1*-0x637];_0x46220a['textC'+_0x5d080e(0x2da)+'t']=_0x598f89[_0x5d080e(0x29f)]('Sakur'+_0x5d080e(0x1ac)+_0x5d080e(0x16a),_0x43a523['label']);for(var [_0x246917,_0x504bf6]of _0x195c89)_0x504bf6[_0x5d080e(0x289)+_0x5d080e(0x595)]['toggl'+'e'](_0x5d080e(0x371)+'e',_0x246917===_0x2b1fd7);_0x525b4c[_0x5d080e(0x639)+'ceChi'+'ldren'](..._0x411074(_0x852f9c));}}function _0x215526(_0x5dd651,_0x266ac2,_0x899f9b,_0xd056d9){var _0x232c1f=_0x271a49,_0x3ce149={'nZADP':'6|13|'+_0x232c1f(0x55c)+'|12|4'+_0x232c1f(0x342)+'0|14|'+_0x232c1f(0x173)+_0x232c1f(0xdd)+_0x232c1f(0xe0),'oCvme':function(_0x3e1642,_0x15a107){return _0x3e1642*_0x15a107;},'OZyLI':function(_0x1ecdd5,_0x54d090){var _0x3aadbd=_0x232c1f;return _0x598f89[_0x3aadbd(0x152)](_0x1ecdd5,_0x54d090);},'deWHc':_0x598f89['eRUvf'],'jUCjQ':function(_0x1714ad,_0x5862d8){var _0x2ab8b1=_0x232c1f;return _0x598f89[_0x2ab8b1(0x16c)](_0x1714ad,_0x5862d8);},'nCDAS':_0x598f89['JOSPi'],'tZvQt':_0x232c1f(0x537),'tKziG':function(_0x3d6a8b,_0x2bd517){return _0x3d6a8b*_0x2bd517;},'KfEnq':_0x598f89['owymy'],'nWmgR':_0x598f89[_0x232c1f(0x503)],'ckVqQ':_0x598f89[_0x232c1f(0x15e)]};if(_0x598f89['HUmxf']===_0x232c1f(0x122)){var _0xdf9ccb=_0x598f89[_0x232c1f(0x293)](_0x57cf3f,_0x5dd651,_0x266ac2,_0x899f9b);if(_0x598f89[_0x232c1f(0x3ba)](_0xdf9ccb,null))_0x33ca60(_0x5dd651,_0x266ac2,_0x899f9b,_0xdf9ccb*_0xd056d9);}else{var _0xb9d118=_0x3ce149[_0x232c1f(0x307)][_0x232c1f(0x102)]('|'),_0x29fe91=0x179*0x9+-0x5c1+-0x40*0x1e;while(!![]){switch(_0xb9d118[_0x29fe91++]){case'0':if(_0x36a08d['round'+_0x232c1f(0x51e)])_0x3190fb[_0x232c1f(0x22a)+'Rect'](_0x4e4f41,_0x516acb,_0x9381ba,_0x583b62,_0x3ce149['oCvme'](-0x1*0xba7+-0x10cf*0x1+0x1c7d,_0x28ced7));else _0xc04b0f[_0x232c1f(0x417)](_0x7af493,_0x30a0d0,_0x362406,_0x84b849);continue;case'1':_0x1eecca[_0x232c1f(0xcb)+'re']();continue;case'2':_0x3d64d6['begin'+_0x232c1f(0x4d0)]();continue;case'3':_0x2b7928[_0x232c1f(0x4ea)+'ext'](_0x436ab7,_0x2b47e7+_0x50a848/(-0xfd2+0x2068+-0x2*0x84a),_0x3ce149['OZyLI'](_0x195655,_0x30e2e0/(0x2*-0x121+0xf7b+-0xd37))-(_0x577ced?(0x2e*0xd7+0x5d*0x17+-0x9*0x538)*_0x261c6c:-0x25cd+0x928*0x1+0x1ca5));continue;case'4':_0x561301['lineW'+_0x232c1f(0x190)]=0x247f+-0xe02+-0x167c;continue;case'5':_0x1f0fed&&(_0x2771ca[_0x232c1f(0x4e1)]=_0x3ce149['OZyLI'](_0x3ce149['deWHc']+_0x19b7d2['round'](_0x3ce149[_0x232c1f(0xfc)](0x27a*-0xe+0x247f+-0x1ca,_0xdc021d)),_0x232c1f(0xb3)+_0x232c1f(0x434)+_0x232c1f(0x217)+_0x232c1f(0x437)+'tem-u'+'i,san'+_0x232c1f(0x631)+'if'),_0x325636[_0x232c1f(0x11b)+_0x232c1f(0x2a8)]=_0x5c9924?'#fff':_0x3ce149[_0x232c1f(0x5d9)],_0x569d7f[_0x232c1f(0x4ea)+_0x232c1f(0x184)](_0x538886,_0x3ce149['OZyLI'](_0x5d0613,_0x25ad43/(0xdd5+0x1315+-0x20e8)),_0x3ce149[_0x232c1f(0x400)](_0x28fe1e+_0x4a62ab/(-0xc97+-0x132d*-0x2+0x13*-0x15b),_0x3ce149['oCvme'](-0x10ba+-0x253*-0x9+-0xf*0x47,_0x5174d5))));continue;case'6':var _0x5c9924=_0x15ba3e[_0x232c1f(0x375)](_0x33ac62);continue;case'7':_0x106c7e[_0x232c1f(0x11b)+_0x232c1f(0x2a8)]=_0x5c9924?_0x232c1f(0x108)+_0x232c1f(0x1a6)+'07,15'+_0x232c1f(0x176)+'5)':'rgba('+_0x232c1f(0x56e)+_0x232c1f(0x480)+'7)';continue;case'8':_0x2840be[_0x232c1f(0x4e1)]=_0x3ce149['OZyLI'](_0x3ce149['tZvQt']+_0x4f0e3c[_0x232c1f(0x22a)](_0x3ce149['tKziG'](0x6*-0x3aa+0x135*-0x6+0x1d46,_0x116ebf)),_0x232c1f(0xb3)+_0x232c1f(0x434)+'-seri'+_0x232c1f(0x437)+_0x232c1f(0x269)+'i,san'+'s-ser'+'if');continue;case'9':_0x14c34d[_0x232c1f(0x132)+_0x232c1f(0x620)+'ne']=_0x3ce149[_0x232c1f(0x197)];continue;case'10':_0x567b15[_0x232c1f(0xbc)+'e']();continue;case'11':_0x18ba14[_0x232c1f(0x3ed)+'lign']=_0x3ce149[_0x232c1f(0x4d7)];continue;case'12':_0x2966c9[_0x232c1f(0x560)]();continue;case'13':_0x32b34d[_0x232c1f(0x612)]();continue;case'14':_0x5c9924&&(_0x4b4f77[_0x232c1f(0x232)+_0x232c1f(0x139)+'r']=_0x582dcf,_0x30d4e1['shado'+_0x232c1f(0x126)]=-0xfc6*0x1+0x16f1+-0x1*0x71d,_0x3c6c8e[_0x232c1f(0x560)](),_0x453463[_0x232c1f(0x232)+_0x232c1f(0x126)]=-0x5ad+-0x1878+0x1e25);continue;case'15':_0x5909d1['fillS'+_0x232c1f(0x2a8)]=_0x5c9924?_0x232c1f(0x4be):_0x232c1f(0x108)+_0x232c1f(0x2be)+'35,24'+_0x232c1f(0x46a)+')';continue;case'16':_0x5ecdfa[_0x232c1f(0xbc)+'eStyl'+'e']=_0x5c9924?_0x984077:_0x3ce149['ckVqQ'];continue;}break;}}}function _0x427fa0(_0x5ef77a,_0x50ee30,_0x31d127,_0x42cab3,_0x164621,_0x350200,_0x13820d){var _0x1e1dd0=_0x271a49;try{var _0x3e8db9=(_0x1e1dd0(0x231)+_0x1e1dd0(0x58b))['split']('|'),_0x5a5209=-0x11b9*-0x2+0x1*0x72d+-0x3*0xe35;while(!![]){switch(_0x3e8db9[_0x5a5209++]){case'0':return _0x5dc9bf;case'1':var _0x5dc9bf=_0x33b940['hookP'+_0x1e1dd0(0x2a3)]({'typeName':_0x50ee30,'methodName':_0x31d127,'params':_0x42cab3,'returnType':_0x164621},_0x350200);continue;case'2':_0x451579[_0x5ef77a]=_0x5dc9bf;continue;case'3':_0x5dc9bf[_0x1e1dd0(0x57a)+'ed']=_0x13820d!==![];continue;case'4':_0xee6aa4['hooks'+_0x1e1dd0(0x103)]++;continue;}break;}}catch(_0x217393){return console[_0x1e1dd0(0x37c)](_0x598f89[_0x1e1dd0(0x609)],_0x5ef77a,_0x217393&&_0x217393['messa'+'ge']),null;}}function _0x4b3d38(_0x50fc2f,_0x140cc5,_0xf20409,_0x4089fb,_0x164c3e,_0x24efc6,_0x569703){var _0x5cffb7=_0x271a49;try{if(_0x598f89[_0x5cffb7(0x5f9)](_0x5cffb7(0x2ba),_0x5cffb7(0x39a))){var _0x451196=_0x33b940[_0x5cffb7(0x50c)+_0x5cffb7(0x54b)+'x']({'typeName':_0x140cc5,'methodName':_0xf20409,'params':_0x4089fb,'returnType':_0x164c3e},_0x24efc6);return _0x451196[_0x5cffb7(0x57a)+'ed']=_0x598f89[_0x5cffb7(0x5f9)](_0x569703,![]),_0x451579[_0x50fc2f]=_0x451196,_0xee6aa4['hooks'+_0x5cffb7(0x103)]++,_0x451196;}else{_0x56bde1=_0x1e99f9;if(!_0x5eb23e){var _0x449451=_0x71b2e5[_0x5cffb7(0x210)+_0x5cffb7(0x55d)+_0x5cffb7(0xa7)]('style');_0x449451['textC'+_0x5cffb7(0x2da)+'t']=_0x4963aa,_0xea66e['appen'+_0x5cffb7(0x27a)+'d'](_0x449451),_0xf6025e=_0x2dee98(),_0x54c40a['appen'+_0x5cffb7(0x27a)+'d'](_0xc62213),_0x5a0f8c(()=>_0x48d44a[_0x5cffb7(0x289)+_0x5cffb7(0x595)][_0x5cffb7(0x302)]('shown'));}_0x4389c9['class'+_0x5cffb7(0x595)]['toggl'+'e'](_0x5cffb7(0x21f),_0x428309);}}catch(_0x4c3c88){if(_0x598f89[_0x5cffb7(0x352)](_0x5cffb7(0x2f0),_0x598f89[_0x5cffb7(0x618)]))return console[_0x5cffb7(0x37c)]('[saku'+_0x5cffb7(0x1dc)+_0x5cffb7(0x545)+_0x5cffb7(0xb8)+'eg\x20fa'+_0x5cffb7(0x645),_0x50fc2f,_0x4c3c88&&_0x4c3c88[_0x5cffb7(0x5c2)+'ge']),null;else _0x5a9fda[_0x5cffb7(0x57a)+'ed']=![];}}var _0x5c84ce=()=>![];try{if(window[_0x271a49(0x4e4)+_0x271a49(0x570)+_0x271a49(0x4a4)]&&!_0x59c232[_0x271a49(0x1f0)+_0x271a49(0x610)]){_0x4c7fe8=window['Unity'+_0x271a49(0x570)+_0x271a49(0x4a4)][_0x271a49(0x42a)+_0x271a49(0x2ec)+'er'],_0x33b940=window[_0x271a49(0x4e4)+_0x271a49(0x570)+_0x271a49(0x4a4)]['Runti'+'me']['creat'+_0x271a49(0x592)+'in']({'name':_0x598f89[_0x271a49(0x458)],'version':_0x271a49(0x2ce),'referencedAssemblies':['Assem'+'bly-C'+_0x271a49(0x313)+_0x271a49(0x118)]});if(_0x59c232['hookG'+'od'])_0x427fa0(_0x598f89['fjWVN'],_0x271a49(0x42b)+'th','Initi'+'ateTa'+'keHea'+'lth',['i32',_0x598f89[_0x271a49(0x576)]],undefined,_0x5c84ce,!!_0x59c232[_0x271a49(0xb4)]);if(_0x59c232['hookG'+_0x271a49(0x211)])_0x598f89[_0x271a49(0x456)](_0x427fa0,_0x598f89[_0x271a49(0xe8)],_0x598f89[_0x271a49(0x565)],_0x271a49(0xd0)+'Die',[_0x598f89[_0x271a49(0x576)],_0x271a49(0x48c),_0x598f89[_0x271a49(0x576)],'i32',_0x598f89[_0x271a49(0x576)]],undefined,_0x5c84ce,!!_0x59c232['god']);if(_0x59c232['hookN'+_0x271a49(0x3a4)+'il'])_0x427fa0(_0x598f89[_0x271a49(0x1ee)],_0x271a49(0x381)+_0x271a49(0x26f)+_0x271a49(0x4c5)+'.Over'+'tide.'+_0x271a49(0x168)+_0x271a49(0x33d)+'on','Tick',[_0x598f89['NkzBK']],undefined,_0x5c84ce,!!_0x59c232['noRec'+'oil']);if(_0x59c232['hookC'+_0x271a49(0x4ac)+'e'])_0x598f89['SdvnS'](_0x4b3d38,_0x271a49(0x11e)+_0x271a49(0x21e),_0x598f89[_0x271a49(0x2bd)],'SetGa'+_0x271a49(0x155)+'ning',[_0x598f89['NkzBK'],_0x271a49(0x48c)],undefined,(_0x18e98b,_0x3fbdd1)=>{var _0x46e715=_0x271a49;_0x598f89[_0x46e715(0x243)](_0x313efb,_0xc1241b,_0x3fbdd1,_0xee6aa4,_0x598f89['PzDuC']);},!![]);if(_0x59c232['hookC'+_0x271a49(0x4ac)+'e'])_0x598f89['SdvnS'](_0x4b3d38,'capMo'+'ve',_0x271a49(0x381)+'nPlat'+_0x271a49(0x4c5)+_0x271a49(0x2a6)+_0x271a49(0x4c3)+_0x271a49(0x2a9)+'ent',_0x271a49(0x47c)+_0x271a49(0x15a),[_0x598f89[_0x271a49(0x576)]],'i32',(_0xb3b9ac,_0x1157b0)=>{var _0x29f202=_0x271a49,_0x373a6a={'CPQpG':function(_0xe45e1f){return _0xe45e1f();}};if(_0x29f202(0x22f)===_0x598f89[_0x29f202(0x3e2)]){var _0x5c448c=('1|4|0'+_0x29f202(0x19a)+'3')['split']('|'),_0x2d60a9=0x1ae3*0x1+0x1*-0x2479+0x996;while(!![]){switch(_0x5c448c[_0x2d60a9++]){case'0':_0x51ca33[_0x29f202(0x53f)+_0x29f202(0x3a4)+'il']=_0x51369c;continue;case'1':_0x29901f[_0x29f202(0x422)+'od']=_0x3daea0;continue;case'2':_0x1249cf[_0x29f202(0x489)+_0x29f202(0x4ac)+'e']=_0x4f4444;continue;case'3':_0x2daa70[_0x29f202(0x3c4)+'d']();continue;case'4':_0x59d0b9['hookG'+_0x29f202(0x211)]=_0x4997b1;continue;case'5':_0x373a6a['CPQpG'](_0x285fdb);continue;}break;}}else _0x313efb(_0x4cecc2,_0x1157b0,_0xee6aa4,_0x29f202(0x2b9)+'ents');},!![]);}}catch(_0x45b2f9){console[_0x271a49(0x37c)]('[saku'+_0x271a49(0x1dc)+_0x271a49(0x488)+_0x271a49(0x20f)+'nit\x20f'+_0x271a49(0x419)+':',_0x45b2f9&&_0x45b2f9['messa'+'ge']);}function _0x3f6fb4(_0x240af6,_0xcfa589){var _0x3e1520=_0x271a49,_0x2b1756={'BPJKk':_0x598f89[_0x3e1520(0x20e)],'sAaFL':_0x598f89[_0x3e1520(0x624)],'BQyoJ':_0x3e1520(0x44e)+'lor'};if(_0x3e1520(0x3b6)===_0x3e1520(0x3b6)){var _0x30467a=_0x451579[_0x240af6];if(_0x30467a){if('eEtax'===_0x3e1520(0x5d3))try{_0x30467a[_0x3e1520(0x57a)+'ed']=!!_0xcfa589;}catch(_0x4103af){}else _0x1732d8[_0x3e1520(0x3b9)+'dChil'+'d'](_0x31604f);}}else{var _0x3f5473=(_0x3e1520(0x4bd)+_0x3e1520(0x131)+'2')['split']('|'),_0x4aade8=-0x9cf*-0x1+-0xeef+0x520;while(!![]){switch(_0x3f5473[_0x4aade8++]){case'0':_0x3c2193['value']=/^#[0-9a-f]{6}$/i['test'](_0x3179ec)?_0xfe00e4:_0x2b1756['BPJKk'];continue;case'1':var _0x3c2193=_0x4c780d[_0x3e1520(0x210)+_0x3e1520(0x55d)+'ent'](_0x2b1756[_0x3e1520(0x320)]);continue;case'2':return _0x3c2193;case'3':_0x3c2193['class'+_0x3e1520(0x409)]=_0x2b1756[_0x3e1520(0x4a1)];continue;case'4':_0x3c2193['type']=_0x3e1520(0x4e9);continue;case'5':_0x3c2193[_0x3e1520(0x257)+'ut']=()=>_0x3c6515(_0x3c2193['value']);continue;}break;}}}_0x598f89[_0x271a49(0x1ed)](setInterval,()=>{var _0x270c17=_0x271a49,_0x21490f={'IPCqQ':function(_0x3350d5){var _0x30ae14=_0x4597;return _0x598f89[_0x30ae14(0x4f0)](_0x3350d5);},'IPqkD':_0x270c17(0x499)+_0x270c17(0x1dc)+'ur]\x20h'+_0x270c17(0xb8)+_0x270c17(0xc2)+_0x270c17(0x645),'IZTRZ':function(_0x43bc40,_0x14ebd4){return _0x598f89['CxdnY'](_0x43bc40,_0x14ebd4);}};if(_0x598f89[_0x270c17(0x48d)]===_0x270c17(0x386)){var _0x449e14=new _0x37c021(_0xd9302d)[_0x270c17(0x63b)+_0x270c17(0x106)](_0x8f7227,_0x9063a);_0x58b754['set'](_0x30c4f1,_0x449e14!==_0x324b13?_0x449e14['val']():null);}else{if(!_0x4c7fe8||!window[_0x270c17(0x5e6)+_0x270c17(0x143)+_0x270c17(0x19d)])return;var _0x4f8b77=(_0x598f89['ZpWCZ'](Number,_0x59c232['speed'+_0x270c17(0x3ab)])||0xb2c+-0x1559*-0x1+-0x2021)/(-0x1*0x78b+0x28*0xcb+-0x17c9),_0x5afa91=_0x598f89['nZgyh'](Number(_0x59c232['jumpP'+'ct'])||-0x100f+-0x1029+0x209c,-0x1*-0x161+0xf0+-0x1ed),_0x1a26b7=(Number(_0x59c232['gravi'+_0x270c17(0x120)])||0xa*0x29e+0xdf7+-0x27bf)/(-0x13c3*0x1+-0x1de+0x1605),_0x27530d=Math['max'](-0x1e14+0x1f9a+0x1*-0x185,Number(_0x59c232['damag'+'eValu'+'e'])||-0x1bfc+0x1*0x8b0+0x13e2),_0x568030=_0x598f89[_0x270c17(0x1d7)](_0x4f8b77,-0x32*-0x65+-0x1235*0x1+-0x184)||_0x5afa91!==-0x1*-0x2b7+-0x13c0+0x110a||_0x598f89[_0x270c17(0x1d7)](_0x1a26b7,0x10*-0xd1+-0x14b*-0xc+-0x13*0x21)||_0x59c232[_0x270c17(0x242)],_0x337c1e=_0x59c232[_0x270c17(0x23a)+'ead']||_0x59c232[_0x270c17(0xeb)+'eExp']||_0x59c232[_0x270c17(0x5ee)+_0x270c17(0x2e1)]||_0x59c232['rapid'+_0x270c17(0x100)];if(!_0x568030&&!_0x337c1e)return;try{for(var _0xf0f2d=-0x16ea+0x1248+0x251*0x2;_0x598f89['WITIf'](_0xf0f2d,_0x4cecc2[_0x270c17(0x344)+'h']);_0xf0f2d++){if(_0x598f89[_0x270c17(0x5e7)]!==_0x598f89[_0x270c17(0x5e7)]){if(!_0x480462)return;var _0x1d04ea=_0x1499a5['child'+'ren'];for(var _0x2ea0d0=0x1*-0xe12+-0x1ff5+0x2e07*0x1;_0x598f89[_0x270c17(0x468)](_0x2ea0d0,_0x1d04ea[_0x270c17(0x344)+'h']);_0x2ea0d0++){var _0xab8d7b=_0x1d04ea[_0x2ea0d0][_0x270c17(0x647)+'Selec'+_0x270c17(0x5f8)](_0x598f89[_0x270c17(0x4b9)]);_0xab8d7b&&(_0xab8d7b['textC'+_0x270c17(0x2da)+'t'][_0x270c17(0x498)+'Of'](_0x270c17(0x3dd))===0x19*0x177+0x191*-0x15+-0x3ba||_0x598f89[_0x270c17(0x352)](_0xab8d7b[_0x270c17(0x127)+_0x270c17(0x2da)+'t'][_0x270c17(0x498)+'Of'](_0x598f89[_0x270c17(0x215)]),-0x3*-0x4b4+0x1e62+-0x2c7e))&&(_0xab8d7b[_0x270c17(0x127)+'onten'+'t']=_0x4722bd[_0x270c17(0x1f0)+'ode']?_0x270c17(0x29e)+_0x270c17(0x216)+_0x270c17(0x61f)+'rlay\x20'+'only,'+_0x270c17(0x452)+'ooks\x20'+'(relo'+'ad\x20to'+_0x270c17(0x3fb)+')':_0x845219[_0x270c17(0x5b8)]?_0x598f89[_0x270c17(0x60d)](_0x598f89['xFSpB'](_0x598f89[_0x270c17(0x25f)](_0x598f89['cZaWf'](_0x598f89['XMjze']('UWMK\x20'+_0x270c17(0x26b)+'\x20',_0x3298ed[_0x270c17(0x599)+_0x270c17(0x103)]?_0x598f89[_0x270c17(0x29f)](_0x1e0ace['hooks'+'Ok'],'/')+_0x3fff64['hooks'+'Total']+_0x598f89['iHIID']:'0\x20hoo'+'ks\x20ar'+_0x270c17(0x5df)+_0x270c17(0x316)+'ff)'),_0x270c17(0x61b)+'me\x20')+(_0x317c51[_0x270c17(0x284)+_0x270c17(0x374)]?'loade'+'d':_0x598f89[_0x270c17(0x34c)]),_0x270c17(0x4fa)+'ooter'+'\x20'),_0x43174a[_0x270c17(0x4e7)+'ers']?'held':_0x270c17(0x114))+_0x598f89['pBedq']+(_0xa874ea['movem'+'ents']?_0x270c17(0x301):_0x270c17(0x114)),_0x4760e6[_0x270c17(0x394)+_0x270c17(0x27f)]?_0x598f89[_0x270c17(0x621)]+_0x2cfb50[_0x270c17(0x394)+_0x270c17(0x27f)]:''):'UWMK\x20'+'MISSI'+_0x270c17(0x593)+_0x270c17(0x1e5)+'ay\x20on'+'ly\x20(r'+_0x270c17(0x1f8)+_0x270c17(0x60e)+_0x270c17(0x4d2)+_0x270c17(0x101)+_0x270c17(0x3e4));}}else{var _0xef062c=_0x4cecc2[_0xf0f2d];if(!_0xef062c)continue;_0x4f8b77!==0x1923+0x1b*0x67+-0x23ff&&(_0x598f89['wrveC']('aMrzh',_0x270c17(0x540))?(_0x12a9fb[_0x270c17(0xeb)+_0x270c17(0x286)+'e']=_0x18ac0d,_0x21490f['IPCqQ'](_0x3267a8)):(_0x598f89['URtQi'](_0x215526,_0xef062c,-0xe85+0x139*-0x11+0x1*0x2376,_0x270c17(0x431),_0x4f8b77),_0x598f89['sBMnc'](_0x215526,_0xef062c,-0x1*-0x7ff+0x23d5*0x1+-0x2ba8,'f32',_0x4f8b77),_0x215526(_0xef062c,0x170f+-0x1*-0xa3+-0x1782,_0x598f89[_0x270c17(0x33b)],_0x4f8b77),_0x215526(_0xef062c,0x1c72+0x305*-0xb+0x4f9,_0x270c17(0x431),_0x4f8b77),_0x598f89[_0x270c17(0x1cf)](_0x215526,_0xef062c,-0x15e6*-0x1+0x6*-0x460+-0x23b*-0x2,'f32',_0x4f8b77),_0x215526(_0xef062c,-0x13d2+0x1*0x1b2f+0x73d*-0x1,'f32',_0x4f8b77)));if(_0x5afa91!==-0x6a7+-0x181e+0x1ec6)_0x215526(_0xef062c,-0x1258*0x1+-0x6*0x6+0x12cc*0x1,'f32',_0x5afa91);_0x1a26b7!==-0x4c*0x1c+-0x7f0+0xdb*0x13&&(_0x598f89['sBMnc'](_0x215526,_0xef062c,-0x1*0x135a+-0x5*-0x58e+-0x824,_0x270c17(0x431),_0x1a26b7),_0x215526(_0xef062c,-0x3e5*-0x5+0x1bf*-0x5+-0xa72,_0x270c17(0x431),_0x1a26b7));if(_0x59c232[_0x270c17(0x242)])_0x33ca60(_0xef062c,-0x1*-0x1855+0x8*-0x41+0x3*-0x73b,_0x598f89[_0x270c17(0x33b)],-(-0x2592+-0x2257+0x4bd0));}}}catch(_0x23b231){}try{for(var _0x48732f=0x1c4e+0x4b4+-0x2102;_0x48732f<_0xc1241b[_0x270c17(0x344)+'h'];_0x48732f++){var _0x2c8508=_0x139cbf(_0xc1241b[_0x48732f],-0x1992+0x20c2+-0x1*0x6f8);if(!_0x2c8508)continue;_0x59c232[_0x270c17(0xeb)+'eExp']&&(_0x598f89[_0x270c17(0x1eb)](_0x33ca60,_0x2c8508,0xe67*-0x1+0x1d95+0x17d*-0xa,_0x598f89[_0x270c17(0x576)],_0x27530d),_0x33ca60(_0x2c8508,-0x1*0x20e7+-0x1*-0x1233+0xf08,_0x598f89['NkzBK'],_0x27530d));if(_0x59c232['noSpr'+'ead']){if(_0x270c17(0x37f)!==_0x598f89['ZDPmF'])return _0x175425['warn'](_0x21490f['IPqkD'],_0x15658d,_0x445600&&_0x480447[_0x270c17(0x5c2)+'ge']),null;else _0x598f89[_0x270c17(0x243)](_0x33ca60,_0x2c8508,-0x1ae2+0x125f*0x1+0x90b*0x1,_0x598f89['zqSln'],0xb7b+-0x6*0x466+0xee9*0x1),_0x33ca60(_0x2c8508,0x2*-0x116a+-0x26c1+-0x5b1*-0xd,'f32',-0x2f9*0x1+-0x1dfe*-0x1+-0x1b04);}if(_0x59c232['infAm'+'moExp'])_0x33ca60(_0x2c8508,0x43*-0xb+0x10c*0x22+-0x1*0x205b,_0x598f89['NkzBK'],0x245a+0x263e+-0x46b1);if(_0x59c232['rapid'+'Exp']){if(_0x598f89['CxdnY'](_0x270c17(0x198),'qLvVZ'))_0x215526(_0x2c8508,0x3*-0x7cb+-0x113*-0xb+0xc1c,_0x270c17(0x431),0xdda+-0x112e+0x354+0.1),_0x598f89[_0x270c17(0x1cf)](_0x33ca60,_0x2c8508,-0x91*0x3f+-0x359+0x2768,_0x270c17(0x431),-0x2323+0x1440+0xee3+0.1);else{var _0x1b155a=_0x5b85e1[_0x270c17(0x5fb)+_0x270c17(0x14a)];for(var _0x5ac843=0x8b5+0x7*0x350+-0x1fe5;_0x5ac843<_0x1b155a['lengt'+'h'];_0x5ac843++){if(_0x1b155a[_0x5ac843]['id']&&_0x21490f['IZTRZ'](_0x1b155a[_0x5ac843]['id'][_0x270c17(0x498)+'Of'](_0x270c17(0x2a0)+_0x270c17(0x461)),-0xec9+-0xf7a+0x1e43))_0x1b155a[_0x5ac843][_0x270c17(0x10e)][_0x270c17(0x2f6)+'ay']='none';}}}}}catch(_0x38c9a7){}}},-0xe5*-0x15+-0x1*-0x6bf+0xb*-0x240),_0x598f89['EFEEk'](setInterval,()=>{var _0x424e29=_0x271a49;_0xee6aa4[_0x424e29(0x284)+_0x424e29(0x374)]=!!window['unity'+'Insta'+_0x424e29(0x19d)];try{var _0x248b07=0x1f5a+-0x2689*-0x1+-0x45e3*0x1;for(var _0x54deec in _0x451579){if(_0x598f89[_0x424e29(0x346)](_0x598f89['XleBq'],_0x598f89['fAEck'])){if(_0x451579[_0x54deec]&&_0x451579[_0x54deec]['appli'+'ed'])_0x248b07++;}else{var _0x28c77b=_0x37e946[_0x424e29(0x40b)+'creen'+'Eleme'+'nt'],_0x46e3fe=_0x28c77b&&_0x28c77b[_0x424e29(0x2fc)+'me']!=='CANVA'+'S'?_0x28c77b:_0x5518c6['body']||_0x56c12a[_0x424e29(0x36d)+_0x424e29(0x5bd)+_0x424e29(0x25e)];if(_0x505313[_0x424e29(0x296)+'tNode']!==_0x46e3fe)_0x46e3fe['appen'+_0x424e29(0x27a)+'d'](_0x116660);}}_0xee6aa4[_0x424e29(0x599)+'Ok']=_0x248b07;}catch(_0x206854){}},-0x615+0x74*0x11+0x249);var _0x384d67=new Set(),_0x5b2353={0x1:[],0x3:[]},_0x3ac90f=![];function _0x1182ad(_0x31f996){var _0x350ab7=_0x271a49;_0x350ab7(0x4d9)===_0x598f89[_0x350ab7(0x268)]?_0x384d67[_0x350ab7(0x302)](_0x31f996[_0x350ab7(0x27b)]):(_0x1271a1['hookG'+'od']=_0x1304ee,_0x598f89[_0x350ab7(0x642)](_0x101ae6));}function _0x340648(_0x479c66){var _0x52d04f=_0x271a49;_0x384d67[_0x52d04f(0x5c5)+'e'](_0x479c66['code']);}function _0x119611(_0x1bc732){var _0xbec08e=_0x271a49;if(_0x1bc732['__sak'+'ura'])return;_0x384d67[_0xbec08e(0x302)](_0x598f89['ACsJk'](_0x598f89[_0xbec08e(0x50b)],_0x1bc732[_0xbec08e(0x349)+'n']+(0x5*0x7b3+0x2*0x53f+-0x30fc)));var _0x4b68ce=_0x5b2353[_0x1bc732[_0xbec08e(0x349)+'n']+(-0xf33+0xed4+-0x4*-0x18)];if(_0x4b68ce){_0x4b68ce[_0xbec08e(0x443)](performance[_0xbec08e(0x262)]());if(_0x4b68ce['lengt'+'h']>0x262a+0x16b5*0x1+0x585*-0xb)_0x4b68ce['shift']();}}function _0x2c2bf4(_0x4f7bc5){var _0x8f406=_0x271a49;if(!_0x4f7bc5['__sak'+_0x8f406(0x10c)])_0x384d67[_0x8f406(0x5c5)+'e'](_0x598f89[_0x8f406(0x5e4)](_0x8f406(0x1b2),_0x4f7bc5[_0x8f406(0x349)+'n']+(0x21d6+-0x228a+0xb5)));}function _0x55de3c(){_0x384d67['clear']();}function _0x16f84b(){var _0x45473f=_0x271a49;if(_0x3ac90f)return;_0x3ac90f=!![],window[_0x45473f(0x1af)+_0x45473f(0x14f)+_0x45473f(0x24e)+'r'](_0x598f89[_0x45473f(0x496)],_0x1182ad,!![]),window[_0x45473f(0x1af)+'entLi'+_0x45473f(0x24e)+'r'](_0x598f89[_0x45473f(0x2a1)],_0x340648,!![]),window[_0x45473f(0x1af)+_0x45473f(0x14f)+'stene'+'r']('mouse'+_0x45473f(0x44a),_0x119611,!![]),window[_0x45473f(0x1af)+'entLi'+_0x45473f(0x24e)+'r']('mouse'+'up',_0x2c2bf4,!![]),window[_0x45473f(0x1af)+'entLi'+'stene'+'r'](_0x598f89[_0x45473f(0x2dc)],_0x55de3c);}function _0x4fd129(_0x2f50e7){var _0x2dcaff=_0x271a49,_0x446971=_0x5b2353[_0x2f50e7]||[],_0x4ab71b=performance[_0x2dcaff(0x262)]();while(_0x446971['lengt'+'h']&&_0x4ab71b-_0x446971[-0x4*-0x272+0x1*-0x102f+0x667]>-0x25a5+0x214f*0x1+0x1*0x83e)_0x446971[_0x2dcaff(0x11d)]();return _0x446971['lengt'+'h'];}function _0x290852(_0x2eb0fd){var _0x4705ad=_0x271a49;if(document[_0x4705ad(0x353)]&&(document['ready'+_0x4705ad(0x330)]===_0x4705ad(0x2cc)+'activ'+'e'||document['ready'+'State']==='compl'+_0x4705ad(0x4c6)))_0x2eb0fd();else document[_0x4705ad(0x1af)+'entLi'+_0x4705ad(0x24e)+'r'](_0x598f89[_0x4705ad(0x575)],_0x2eb0fd,{'once':!![]});}_0x598f89[_0x271a49(0x2db)](_0x290852,()=>{var _0x13c516=_0x271a49,_0x5bdc54={'GCbwI':function(_0x318cac){var _0x395b7a=_0x4597;return _0x598f89[_0x395b7a(0x642)](_0x318cac);},'wdmjv':_0x598f89['sbeGB'],'TdXhq':_0x598f89[_0x13c516(0xb0)],'ulIcr':function(_0x415857,_0x299f18){return _0x598f89['SKKLx'](_0x415857,_0x299f18);},'SkJtv':function(_0x442bff,_0x1499fb){var _0x5d2074=_0x13c516;return _0x598f89[_0x5d2074(0x323)](_0x442bff,_0x1499fb);},'GpKDe':'zXOEC','nByRs':function(_0x237825,_0x38e50c){return _0x237825*_0x38e50c;},'ijVFG':function(_0x3accc6,_0xae2e18){return _0x3accc6-_0xae2e18;},'ITGQy':function(_0x38194e,_0x4dfd18){return _0x38194e+_0x4dfd18;},'FbarJ':function(_0x3fbc1e,_0x55ec39){return _0x598f89['JLSsT'](_0x3fbc1e,_0x55ec39);},'rhwsC':function(_0x594250,_0x1f4985){return _0x594250||_0x1f4985;},'uWnGI':'rgba('+_0x13c516(0x2be)+'35,24'+'0,0.7'+'5)','diJKL':_0x13c516(0x603),'KEkWd':function(_0xb9c3c6,_0x10b744){return _0xb9c3c6(_0x10b744);},'wSvAx':_0x13c516(0x1ec),'dvVRS':function(_0x1028eb,_0x5e37b5){return _0x598f89['nZgyh'](_0x1028eb,_0x5e37b5);},'XzLux':function(_0xbcb7b){return _0x598f89['kZwDx'](_0xbcb7b);},'tSZPl':function(_0x26c746){return _0x26c746();},'pXHZO':function(_0x829ba0,_0x315800){var _0x579094=_0x13c516;return _0x598f89[_0x579094(0x266)](_0x829ba0,_0x315800);},'QDBYv':_0x13c516(0x20a)+'check'+'ed','rpNrP':function(_0x30ec17,_0x59b31f){return _0x30ec17(_0x59b31f);},'sVKDw':_0x598f89[_0x13c516(0x2fa)],'OEfyD':_0x13c516(0x3e9),'PeJzf':function(_0xb43635,_0x225c49){return _0xb43635+_0x225c49;},'JaazF':_0x598f89['Qpxdv'],'wbIFD':_0x598f89[_0x13c516(0x164)],'mBGCz':_0x598f89[_0x13c516(0x54a)],'lJqDB':_0x13c516(0xca)+'n','UcLFA':_0x13c516(0x36a)+'arget'+'Frame'+_0x13c516(0x373),'huPcc':_0x598f89[_0x13c516(0x578)],'yuKEv':function(_0x2f591b){var _0x5a9721=_0x13c516;return _0x598f89[_0x5a9721(0x2c9)](_0x2f591b);},'jIxnA':function(_0x23b772,_0x57f4e3){return _0x23b772===_0x57f4e3;},'bbsRl':_0x598f89['UlqpP'],'ZvaLL':function(_0x55132d,_0xacd4e4){return _0x55132d+_0xacd4e4;},'oOVsi':_0x598f89[_0x13c516(0x1cd)],'qOxEB':function(_0xfa5889,_0x1a3bcf){return _0xfa5889<_0x1a3bcf;},'ogZAZ':_0x598f89[_0x13c516(0x5e9)],'CgWSt':function(_0x3ed4e1,_0x96c9c6){return _0x3ed4e1+_0x96c9c6;},'PfiaF':function(_0x88dd3d,_0x321bee){return _0x88dd3d+_0x321bee;},'ZQYTv':function(_0x3ba5cc,_0x134b9e){return _0x3ba5cc+_0x134b9e;},'pRFSd':function(_0x2ae397,_0x1d683d){return _0x2ae397+_0x1d683d;},'YqCLe':_0x598f89[_0x13c516(0x259)],'NfQuc':_0x598f89[_0x13c516(0x2a4)],'QrYzb':_0x598f89[_0x13c516(0x34c)],'hXwFk':_0x13c516(0x4fa)+_0x13c516(0x21e)+'\x20','vfPZy':_0x598f89['InOUb'],'SGdgC':_0x598f89['sySYz'],'RJMIu':_0x13c516(0xfb)+'vemen'+'t\x20','mpZpf':function(_0x18dca2,_0x4c5be3){return _0x18dca2+_0x4c5be3;},'btVLJ':_0x13c516(0x12c)+'R:\x20','FZjPy':_0x598f89[_0x13c516(0x299)],'HGQQH':_0x598f89[_0x13c516(0x54c)]};_0x59c232[_0x13c516(0x584)+'ck']&&setInterval(()=>{var _0x2e48b6=_0x13c516;if(_0x598f89[_0x2e48b6(0x4a8)](_0x598f89['VyhbA'],_0x598f89[_0x2e48b6(0x5a8)]))_0x408c74(_0x505820,0x1ac4+0x1c58+-0x3690,'f32',0x1fee+0x1457+-0x3445+0.1),_0x368cc1(_0x385a1f,-0x212d+0x1*-0x5a4+-0x4f*-0x7f,_0x2e48b6(0x431),-0x46+-0x15ac+-0x1*-0x15f2+0.1);else try{for(var _0x54a369 of[_0x2e48b6(0x2a0)+_0x2e48b6(0x4f9)+_0x2e48b6(0x144)+_0x2e48b6(0x1e1)+'nt',_0x2e48b6(0x2a0)+'io_72'+_0x2e48b6(0x3df)+_0x2e48b6(0x296)+'t',_0x598f89[_0x2e48b6(0x3bf)],_0x2e48b6(0x40b)+'creen'+_0x2e48b6(0x1c7)+'s']){if(_0x598f89['JJmgh'](_0x2e48b6(0x509),_0x2e48b6(0x4b6))){var _0x338b58=document[_0x2e48b6(0x3fc)+_0x2e48b6(0x25e)+'ById'](_0x54a369);if(_0x338b58&&_0x54a369===_0x2e48b6(0x40b)+_0x2e48b6(0x3e7)+_0x2e48b6(0x1c7)+'s'){var _0x364c2a=_0x338b58[_0x2e48b6(0x5fb)+_0x2e48b6(0x14a)];for(var _0x30d6d2=0x2569+-0x2*0xc25+0x1*-0xd1f;_0x30d6d2<_0x364c2a['lengt'+'h'];_0x30d6d2++){if(_0x364c2a[_0x30d6d2]['id']&&_0x364c2a[_0x30d6d2]['id']['index'+'Of']('kour-'+'io_')===-0xd*-0xf4+-0x5bd+0x83*-0xd)_0x364c2a[_0x30d6d2]['style']['displ'+'ay']=_0x598f89[_0x2e48b6(0x511)];}}else{if(_0x338b58)_0x338b58[_0x2e48b6(0x10e)]['displ'+'ay']=_0x598f89[_0x2e48b6(0x511)];}}else _0x17ca1b[_0x2e48b6(0x27d)+_0x2e48b6(0x100)]=_0xbf4437,_0x5bdc54[_0x2e48b6(0x47a)](_0x2772a7);}}catch(_0x1cbcb0){}},0x8e1+0x6f6+-0x807);var _0x53c18c=document['creat'+'eElem'+'ent'](_0x598f89['HZBjg']);_0x53c18c[_0x13c516(0x10e)][_0x13c516(0x63d)+'xt']=_0x598f89['ElgJc'];var _0x3ada44=_0x53c18c[_0x13c516(0x421)+_0x13c516(0x587)]('2d');function _0x28ecb0(){var _0x345cfb=_0x13c516,_0x10b3c6={'czAjx':function(_0x2cd38f){return _0x2cd38f();},'PgRUI':_0x5bdc54['wdmjv'],'Mltkl':'sk-bt'+'n'};try{if(_0x5bdc54[_0x345cfb(0x109)]!==_0x345cfb(0x427)){var _0x32d0d1=document['fulls'+_0x345cfb(0x3e7)+_0x345cfb(0x331)+'nt'],_0x2040ab=_0x32d0d1&&_0x32d0d1[_0x345cfb(0x2fc)+'me']!==_0x345cfb(0x641)+'S'?_0x32d0d1:document['body']||document[_0x345cfb(0x36d)+'entEl'+'ement'];if(_0x5bdc54[_0x345cfb(0x57c)](_0x53c18c['paren'+'tNode'],_0x2040ab))_0x2040ab[_0x345cfb(0x3b9)+_0x345cfb(0x27a)+'d'](_0x53c18c);}else _0x40f083[_0x345cfb(0x232)+'wColo'+'r']=_0x4c2ac6,_0x31200d[_0x345cfb(0x232)+'wBlur']=0x1*-0xe59+-0x259f*-0x1+-0x1738,_0x3e21a5['fill'](),_0x3fbb7e[_0x345cfb(0x232)+_0x345cfb(0x126)]=0x105b+-0x25*-0xa6+-0x2859;}catch(_0x447854){try{if(_0x5bdc54[_0x345cfb(0x5db)](_0x5bdc54[_0x345cfb(0xde)],_0x345cfb(0x64a)))document[_0x345cfb(0x353)][_0x345cfb(0x3b9)+_0x345cfb(0x27a)+'d'](_0x53c18c);else{var _0x1c244a=_0x1b854c['creat'+_0x345cfb(0x55d)+'ent'](_0x10b3c6[_0x345cfb(0x2f7)]);return _0x1c244a[_0x345cfb(0x507)]='butto'+'n',_0x1c244a[_0x345cfb(0x289)+_0x345cfb(0x409)]=_0x10b3c6['Mltkl'],_0x1c244a[_0x345cfb(0x127)+_0x345cfb(0x2da)+'t']=_0x18e20f,_0x1c244a['oncli'+'ck']=_0x2b3bd9=>{var _0x3bacdd=_0x345cfb;_0x2b3bd9['stopP'+_0x3bacdd(0x36b)+_0x3bacdd(0x423)](),_0x10b3c6[_0x3bacdd(0xf6)](_0xa5bd10);},_0x1c244a;}}catch(_0x1abf42){}}}var _0x6c230b={'w':0x0,'h':0x0,'dpr':0x0};function _0x3b2de7(){var _0x29ea54=_0x13c516,_0x151e07=window[_0x29ea54(0x4e5)+'ePixe'+_0x29ea54(0x504)+'o']||0x550+0x1*0x7f5+-0xd44,_0x4d1bfc=window['inner'+_0x29ea54(0x46e)],_0x45b01c=window[_0x29ea54(0x3de)+_0x29ea54(0x2d3)+'t'];if(_0x4d1bfc===_0x6c230b['w']&&_0x45b01c===_0x6c230b['h']&&_0x151e07===_0x6c230b['dpr'])return;_0x6c230b['w']=_0x4d1bfc,_0x6c230b['h']=_0x45b01c,_0x6c230b['dpr']=_0x151e07,_0x53c18c['width']=Math[_0x29ea54(0x22a)](_0x4d1bfc*_0x151e07),_0x53c18c['heigh'+'t']=Math[_0x29ea54(0x22a)](_0x598f89[_0x29ea54(0x4c4)](_0x45b01c,_0x151e07)),_0x3ada44[_0x29ea54(0x61a)+'ansfo'+'rm'](_0x151e07,-0x116*-0x1f+-0x3c3*-0x5+-0x77f*0x7,0x1*-0xbc9+0x3ed*-0x1+0xfb6,_0x151e07,-0x2100+-0x21f3+0x42f3,0x9ac*-0x4+-0x1*0xad+0x275d);}var _0x4641d4=0x1848+-0x164b+0x1fd*-0x1,_0x41a2cc=performance['now'](),_0x3505d1=0xa57*0x1+0x1*0x47d+-0xed4;function _0xb6f8ca(_0x1815b2){var _0xc3b02a=_0x13c516,_0x230077={'iAwSC':_0x598f89[_0xc3b02a(0x3cc)],'aTDFr':_0xc3b02a(0x36a)+'arget'+'Frame'+_0xc3b02a(0x373),'hdSDb':'rgba('+'255,1'+_0xc3b02a(0x4a6)+'7,0.8'+'5)','OUVsO':_0x598f89['Exxgl'],'ySpUO':_0x598f89['Tbkpw'],'nPINr':function(_0x13416f,_0x1793e0){return _0x13416f+_0x1793e0;},'lJQQL':_0x598f89['tOken'],'IGumH':function(_0x4dbe9e,_0x53d141){return _0x4dbe9e/_0x53d141;},'GXRAs':function(_0xe2a6ca,_0x4e1d6e){var _0x154496=_0xc3b02a;return _0x598f89[_0x154496(0x4aa)](_0xe2a6ca,_0x4e1d6e);},'BfYGp':function(_0xa03b20,_0x16a5cf){var _0x5d1f27=_0xc3b02a;return _0x598f89[_0x5d1f27(0x4c4)](_0xa03b20,_0x16a5cf);},'COgTB':function(_0x3cf74e,_0x1acb33){var _0x544903=_0xc3b02a;return _0x598f89[_0x544903(0x2cd)](_0x3cf74e,_0x1acb33);},'VQPJi':'BqrnH','lnlct':function(_0x2b7dcd,_0x387688){var _0x44f597=_0xc3b02a;return _0x598f89[_0x44f597(0x32a)](_0x2b7dcd,_0x387688);},'HuuvF':_0xc3b02a(0x4be),'iCUEC':'rgba('+_0xc3b02a(0x2be)+_0xc3b02a(0xad)+'0,0.5'+'5)','mAWzl':function(_0x4dce89,_0x5ec4e2){return _0x4dce89/_0x5ec4e2;}},_0x47fd56=_0x598f89['ZpWCZ'](Number,_0x59c232['ksSca'+'le'])||0x149b+0x8d*0x7+-0x1875,_0x265491=_0x598f89['nPORc'](-0x1529+0xc56+0x8f5,_0x47fd56),_0x2f5b8d=(0x1ae0*0x1+-0x1a2a+-0xb2*0x1)*_0x47fd56,_0xab65dd=_0x598f89[_0xc3b02a(0x483)](_0x598f89['DjtZb'](_0x265491,0x1cb1+0x22c9*0x1+-0x3f77*0x1),_0x598f89[_0xc3b02a(0x533)](_0x2f5b8d,0x1*0xa35+-0x83d*0x1+-0x1f6)),_0x5f4ac9=_0x598f89[_0xc3b02a(0x5e4)](_0x265491*(0x8e*-0x3e+-0x8*0x34+0x2407),_0x2f5b8d*(-0x26f1+-0x23f0+0x4ae3)),_0x454e6e=_0x59c232[_0xc3b02a(0x2d8)],_0x4ebcb6=_0x598f89[_0xc3b02a(0x12e)](_0x454e6e,'br')?_0x598f89[_0xc3b02a(0x5f2)](_0x598f89[_0xc3b02a(0x616)](_0x1815b2['right'],-0x1806+-0x1097+0x28ad),_0xab65dd):_0x1815b2[_0xc3b02a(0x124)]+(0xf1a+0x7*0x4ab+-0x7*0x6d1),_0x38c10d=_0x454e6e==='ml'?_0x1815b2[_0xc3b02a(0xda)]+_0x1815b2['heigh'+'t']/(-0x1708+0x734+-0x1*-0xfd6)-_0x598f89[_0xc3b02a(0x52e)](_0x5f4ac9,-0x2*0x41+-0x15df+0x1*0x1663):_0x1815b2['botto'+'m']-_0x5f4ac9-(_0x598f89[_0xc3b02a(0x1c3)](_0x454e6e,'bl')?0x535+-0xc61*0x2+0x13ed*0x1:-0x6d0*-0x3+0x216*-0x2+-0xfae),_0x12d71d=(_0x4003b2,_0x51d478,_0x91151f,_0x3f2ed7,_0x460ac2,_0x2ae265,_0x356b70)=>{var _0x496422=_0xc3b02a,_0x124768=_0x384d67[_0x496422(0x375)](_0x51d478);_0x3ada44[_0x496422(0x612)](),_0x3ada44[_0x496422(0xaf)+'Path']();if(_0x3ada44['round'+_0x496422(0x51e)])_0x3ada44[_0x496422(0x22a)+'Rect'](_0x91151f,_0x3f2ed7,_0x460ac2,_0x2ae265,(0x17a9+-0xe1b+0x3*-0x32d)*_0x47fd56);else _0x3ada44[_0x496422(0x417)](_0x91151f,_0x3f2ed7,_0x460ac2,_0x2ae265);_0x3ada44[_0x496422(0x11b)+_0x496422(0x2a8)]=_0x124768?_0x230077['hdSDb']:'rgba('+_0x496422(0x56e)+_0x496422(0x480)+'7)',_0x3ada44[_0x496422(0x560)](),_0x3ada44[_0x496422(0x3da)+_0x496422(0x190)]=0x1*0x217e+0x1*0x1b65+0x1*-0x3ce2,_0x3ada44[_0x496422(0xbc)+'eStyl'+'e']=_0x124768?_0x42fdc7:_0x496422(0x108)+_0x496422(0x1a6)+_0x496422(0x4a6)+_0x496422(0x3bb)+'5)',_0x3ada44[_0x496422(0xbc)+'e']();_0x124768&&(_0x3ada44['shado'+_0x496422(0x139)+'r']=_0x259d4a,_0x3ada44[_0x496422(0x232)+_0x496422(0x126)]=-0x1c33+-0x5*0x236+-0x1d*-0x15b,_0x3ada44[_0x496422(0x560)](),_0x3ada44[_0x496422(0x232)+_0x496422(0x126)]=0x1a*-0x12e+-0x1d6c+0x3c18);_0x3ada44[_0x496422(0x11b)+_0x496422(0x2a8)]=_0x124768?'#fff':_0x230077[_0x496422(0x2e8)],_0x3ada44['textA'+_0x496422(0xdf)]=_0x230077['ySpUO'],_0x3ada44[_0x496422(0x132)+_0x496422(0x620)+'ne']=_0x496422(0x177)+'e',_0x3ada44[_0x496422(0x4e1)]=_0x230077[_0x496422(0xb7)](_0x496422(0x537),Math['round']((-0x5dc+0xca*0xe+0x1c*-0x2f)*_0x47fd56))+_0x230077['lJQQL'],_0x3ada44[_0x496422(0x4ea)+'ext'](_0x4003b2,_0x91151f+_0x230077[_0x496422(0x433)](_0x460ac2,-0x1e85+-0x1391+0x3218),_0x230077[_0x496422(0x2c8)](_0x3f2ed7,_0x230077['IGumH'](_0x2ae265,0x2*0x74a+0x1fe+-0x1090))-(_0x356b70?_0x230077[_0x496422(0x62a)](-0x957*-0x3+-0x1*0x2291+-0x1*-0x691,_0x47fd56):-0xfbf+0xc*-0x1d3+0x25a3));if(_0x356b70){if(_0x230077['COgTB'](_0x496422(0x59b),_0x230077[_0x496422(0x273)]))_0x3ada44[_0x496422(0x4e1)]=_0x230077['nPINr'](_0x230077['lnlct']('600\x20',Math['round']((-0x1*0x15cd+-0x1252+0x202*0x14)*_0x47fd56)),_0x496422(0xb3)+'-sans'+'-seri'+_0x496422(0x437)+_0x496422(0x269)+_0x496422(0x2a7)+'s-ser'+'if'),_0x3ada44['fillS'+'tyle']=_0x124768?_0x230077['HuuvF']:_0x230077['iCUEC'],_0x3ada44[_0x496422(0x4ea)+'ext'](_0x356b70,_0x91151f+_0x460ac2/(-0x773+-0x1375+-0x2b1*-0xa),_0x3f2ed7+_0x230077[_0x496422(0x4de)](_0x2ae265,0x2e3*0x1+0x1955+-0x1*0x1c36)+(0x1d1b*0x1+0x8*0xce+0x2383*-0x1)*_0x47fd56);else{if(_0x2aeb4e)_0xea59ac[_0x496422(0xa0)](_0x230077['iAwSC'],_0x230077['aTDFr'],[0x9*-0xfc+0x262d+-0x1c61]);}}_0x3ada44[_0x496422(0xcb)+'re']();};_0x12d71d('W',_0x598f89['pNuSH'],_0x4ebcb6+_0x265491+_0x2f5b8d,_0x38c10d,_0x265491,_0x265491),_0x598f89[_0xc3b02a(0x32c)](_0x12d71d,'A',_0x598f89[_0xc3b02a(0x59d)],_0x4ebcb6,_0x38c10d+_0x265491+_0x2f5b8d,_0x265491,_0x265491),_0x12d71d('S',_0xc3b02a(0x52c),_0x598f89[_0xc3b02a(0x152)](_0x598f89[_0xc3b02a(0x4aa)](_0x4ebcb6,_0x265491),_0x2f5b8d),_0x38c10d+_0x265491+_0x2f5b8d,_0x265491,_0x265491),_0x12d71d('D','KeyD',_0x598f89[_0xc3b02a(0x60d)](_0x4ebcb6,_0x598f89['taHpw'](_0x598f89[_0xc3b02a(0x5a3)](_0x265491,_0x2f5b8d),-0x1*-0x15cf+0x1c00+-0x31cd)),_0x598f89['TXUkh'](_0x38c10d+_0x265491,_0x2f5b8d),_0x265491,_0x265491);var _0x34b7ac=_0x598f89[_0xc3b02a(0x52e)](_0xab65dd-_0x2f5b8d,-0xb5b+0xd10+0x1d*-0xf),_0x99a4d5=_0x598f89[_0xc3b02a(0x5fe)](_0x38c10d,_0x598f89['NdixI'](_0x598f89[_0xc3b02a(0x1b9)](_0x265491,_0x2f5b8d),-0x26a1+0xad3*-0x2+-0x3d*-0xfd));_0x598f89['SdvnS'](_0x12d71d,_0x598f89[_0xc3b02a(0x146)],_0xc3b02a(0x1b2)+'1',_0x4ebcb6,_0x99a4d5,_0x34b7ac,_0x265491,_0x59c232['ksCps']?_0x598f89[_0xc3b02a(0x567)](_0x4fd129,-0x49*-0x17+0xbf*-0x7+-0x155)+'\x20CPS':''),_0x12d71d(_0x598f89['KcAje'],_0xc3b02a(0x1b2)+'3',_0x598f89[_0xc3b02a(0x32a)](_0x4ebcb6,_0x34b7ac)+_0x2f5b8d,_0x99a4d5,_0x34b7ac,_0x265491,_0x59c232['ksCps']?_0x598f89[_0xc3b02a(0x12a)](_0x4fd129(0x566+-0xc9b*-0x1+-0x11fe),'\x20CPS'):''),_0x598f89[_0xc3b02a(0x32c)](_0x12d71d,'',_0xc3b02a(0x457),_0x4ebcb6,_0x99a4d5+_0x265491+_0x2f5b8d,_0xab65dd,_0x598f89['taHpw'](_0x265491,-0x1e15*0x1+0x23be+-0x5a9+0.45));}function _0x1222ee(_0x138488){var _0x3a8562=_0x13c516,_0x2de084=_0x138488['width']/(0x4c3+-0x679*0x5+0x1b9c),_0x59c7cf=_0x138488[_0x3a8562(0x14e)+'t']/(0x226c+-0x615*0x4+-0xa16),_0x1287c5=Number(_0x59c232[_0x3a8562(0x384)+'e'])||-0x217b*-0x1+-0x1067+-0x1113,_0x30396a=/^#[0-9a-f]{6}$/i[_0x3a8562(0x2f8)](_0x59c232['chCol'+'or'])?_0x59c232[_0x3a8562(0x573)+'or']:'#ff6b'+'9d';_0x3ada44['save'](),_0x3ada44['strok'+'eStyl'+'e']=_0x30396a,_0x3ada44['fillS'+'tyle']=_0x30396a,_0x3ada44['lineW'+_0x3a8562(0x190)]=Math[_0x3a8562(0x43e)](0x21d*0xe+0x577*0x1+-0x230c*0x1+0.5,(0xa45*0x3+-0x2*0x59a+-0x1399)*_0x1287c5),_0x3ada44[_0x3a8562(0x232)+_0x3a8562(0x139)+'r']=_0x30396a,_0x3ada44['shado'+_0x3a8562(0x126)]=0x20a+-0x2*0x649+0xa8e;var _0x1db9df=_0x5bdc54['nByRs'](0x1*0x2635+-0x4d4+-0x215b*0x1,_0x1287c5),_0x1ca745=_0x5bdc54['nByRs'](-0x1*-0x201e+0x119*0x1a+-0x3ca0,_0x1287c5);_0x3ada44[_0x3a8562(0xaf)+_0x3a8562(0x4d0)](),_0x3ada44['moveT'+'o'](_0x5bdc54[_0x3a8562(0x608)](_0x2de084-_0x1db9df,_0x1ca745),_0x59c7cf),_0x3ada44[_0x3a8562(0x58a)+'o'](_0x2de084-_0x1db9df,_0x59c7cf),_0x3ada44['moveT'+'o'](_0x5bdc54['ITGQy'](_0x2de084,_0x1db9df),_0x59c7cf),_0x3ada44['lineT'+'o'](_0x2de084+_0x1db9df+_0x1ca745,_0x59c7cf),_0x3ada44[_0x3a8562(0x5d5)+'o'](_0x2de084,_0x59c7cf-_0x1db9df-_0x1ca745),_0x3ada44['lineT'+'o'](_0x2de084,_0x5bdc54['ijVFG'](_0x59c7cf,_0x1db9df)),_0x3ada44['moveT'+'o'](_0x2de084,_0x5bdc54[_0x3a8562(0x11c)](_0x59c7cf,_0x1db9df)),_0x3ada44[_0x3a8562(0x58a)+'o'](_0x2de084,_0x5bdc54['FbarJ'](_0x59c7cf+_0x1db9df,_0x1ca745)),_0x3ada44['strok'+'e'](),_0x3ada44['begin'+'Path'](),_0x3ada44['arc'](_0x2de084,_0x59c7cf,(-0xf6+0x7a7*-0x1+-0x2*-0x44f+0.6000000000000001)*_0x1287c5,0x2b*0xc+0x11*-0x1f7+0x1f63,Math['PI']*(-0x6be+-0x1*-0x13ad+0xced*-0x1)),_0x3ada44[_0x3a8562(0x560)](),_0x3ada44['resto'+'re']();}function _0x52573b(_0x3feb6b){var _0x19f33f=_0x13c516;_0x3ada44['save'](),_0x3ada44[_0x19f33f(0x4e1)]=_0x598f89['kbCkv'],_0x3ada44['textA'+_0x19f33f(0xdf)]=_0x19f33f(0x124),_0x3ada44[_0x19f33f(0x132)+'aseli'+'ne']='top';var _0x4c5357=0x1eb6+-0x26*-0x3d+0x1*-0x2798,_0x22ffe4=-0x275*0x7+-0x227c*-0x1+0x1*-0x113d,_0x20362d=(_0x913389,_0x135969)=>{var _0x176f0a=_0x19f33f;_0x3ada44['fillS'+_0x176f0a(0x2a8)]=_0x5bdc54[_0x176f0a(0x5a4)](_0x135969,_0x5bdc54[_0x176f0a(0x3ef)]),_0x3ada44[_0x176f0a(0x4ea)+_0x176f0a(0x184)](_0x913389,_0x22ffe4,_0x4c5357),_0x4c5357+=-0x1*0x238d+-0x43*-0x1f+0x1b80;};_0x20362d(_0x598f89['rbrao'],_0x598f89[_0x19f33f(0x20e)]);if(_0x59c232['fps'])_0x20362d(_0x598f89[_0x19f33f(0x1ad)](_0x3505d1,_0x598f89[_0x19f33f(0xbb)]));if(!_0xee6aa4[_0x19f33f(0x284)+'oaded'])_0x20362d(_0x19f33f(0x634)+_0x19f33f(0x261)+_0x19f33f(0x3e6)+'e…',_0x598f89[_0x19f33f(0x285)]);_0x3ada44[_0x19f33f(0xcb)+'re']();}function _0x10d9ac(){var _0x5d148b=_0x13c516,_0x4907df={'spJvn':function(_0x2b062e,_0x4d3288){return _0x2b062e!==_0x4d3288;}};if(_0x5bdc54['diJKL']!==_0x5d148b(0x1e7)){_0x5bdc54[_0x5d148b(0x549)](requestAnimationFrame,_0x10d9ac),_0x4641d4++;var _0x23bd63=performance[_0x5d148b(0x262)]();if(_0x23bd63-_0x41a2cc>=0xde7+0x1*0xc25+-0x1818){if(_0x5bdc54['wSvAx']!==_0x5d148b(0x24f))_0x3505d1=Math['round'](_0x5bdc54['dvVRS'](_0x4641d4*(0x26d0+-0x19f2+-0x1*0x8f6),_0x23bd63-_0x41a2cc)),_0x4641d4=0x1*-0x8da+-0x25d9+0x2eb3,_0x41a2cc=_0x23bd63;else try{var _0x19a944=('1|3|4'+_0x5d148b(0x16e))[_0x5d148b(0x102)]('|'),_0x439029=-0x1e50+-0x216e+0x3fbe;while(!![]){switch(_0x19a944[_0x439029++]){case'0':_0x2fc5d6[_0x5d148b(0x599)+_0x5d148b(0x103)]++;continue;case'1':var _0x935945=_0x1d0e74[_0x5d148b(0x50c)+_0x5d148b(0x2a3)]({'typeName':_0x263857,'methodName':_0x3703ec,'params':_0x479835,'returnType':_0x255bcb},_0x538601);continue;case'2':return _0x935945;case'3':_0x935945[_0x5d148b(0x57a)+'ed']=_0x4907df[_0x5d148b(0x497)](_0x1c29e2,![]);continue;case'4':_0x11125f[_0xacc4a]=_0x935945;continue;}break;}}catch(_0xb0e1ba){return _0x20243f['warn']('[saku'+_0x5d148b(0x1dc)+'ur]\x20h'+'ook\x20r'+_0x5d148b(0xc2)+_0x5d148b(0x645),_0x39a32a,_0xb0e1ba&&_0xb0e1ba['messa'+'ge']),null;}}_0x5bdc54[_0x5d148b(0x4d5)](_0x3b2de7),_0x5bdc54['tSZPl'](_0x28ecb0),_0x3ada44['clear'+_0x5d148b(0x51e)](0x1a99+0x1*0xd7b+-0x24*0x11d,0x1f*0x5+0x1c81+-0x24*0xcf,_0x6c230b['w'],_0x6c230b['h']);var _0x1ba3dd={'left':0x0,'top':0x0,'right':_0x6c230b['w'],'bottom':_0x6c230b['h'],'width':_0x6c230b['w'],'height':_0x6c230b['h']};if(_0x59c232['cross'+_0x5d148b(0x5c0)])_0x1222ee(_0x1ba3dd);if(_0x59c232[_0x5d148b(0xf4)+'rokes'])_0xb6f8ca(_0x1ba3dd);_0x52573b(_0x1ba3dd);}else _0x196e0d[_0x5d148b(0x37d)+'le']=_0x32d6af,_0x286580();}var _0xc81b64=document[_0x13c516(0x210)+_0x13c516(0x55d)+'ent'](_0x13c516(0x3e9));_0xc81b64['id']=_0x598f89[_0x13c516(0x178)],_0xc81b64['style']['cssTe'+'xt']=_0x13c516(0x172)+'ion:f'+'ixed;'+'inset'+_0x13c516(0x477)+'index'+_0x13c516(0x300)+_0x13c516(0x630)+_0x13c516(0x465)+_0x13c516(0x4cc)+_0x13c516(0x280)+_0x13c516(0x123)+'e;';var _0x33482c=_0xc81b64['attac'+'hShad'+'ow']({'mode':_0x13c516(0x149)});(document[_0x13c516(0x353)]||document['docum'+'entEl'+'ement'])[_0x13c516(0x3b9)+_0x13c516(0x27a)+'d'](_0xc81b64);var _0x1d9003=![],_0x11ca40={};try{_0x11ca40=JSON[_0x13c516(0x1ba)](localStorage[_0x13c516(0x194)+'em'](_0x598f89['LfXDN'])||'{}');}catch(_0x261e7c){}function _0x4e13ff(){var _0x4d8925=_0x13c516;try{_0x598f89[_0x4d8925(0x196)](_0x598f89[_0x4d8925(0x1b0)],_0x4d8925(0x104))?(_0x5c3d1c['actkK'+_0x4d8925(0x2f2)]=_0x31feb6,_0x1679e7()):localStorage['setIt'+'em']('sakur'+_0x4d8925(0x41b)+_0x4d8925(0x291)+'v1',JSON['strin'+'gify'](_0x11ca40));}catch(_0x10cee0){}}function _0x165ee9(_0x12f955,_0x3dcde1){var _0x17609d=_0x13c516,_0x11e0d4=document[_0x17609d(0x210)+_0x17609d(0x55d)+_0x17609d(0xa7)]('butto'+'n');return _0x11e0d4['type']=_0x17609d(0x349)+'n',_0x11e0d4[_0x17609d(0x289)+_0x17609d(0x409)]='sk-sw'+_0x17609d(0x4ec),_0x11e0d4[_0x17609d(0x105)+_0x17609d(0x4da)+'te'](_0x17609d(0x44f),_0x17609d(0x125)+'h'),_0x11e0d4[_0x17609d(0x105)+'tribu'+'te']('aria-'+_0x17609d(0x221)+'ed',String(!!_0x12f955)),_0x11e0d4[_0x17609d(0x5f0)+'ck']=_0x514710=>{var _0x36776e=_0x17609d;_0x514710[_0x36776e(0x22c)+_0x36776e(0x36b)+_0x36776e(0x423)]();var _0x1aabf5=_0x5bdc54[_0x36776e(0x442)](_0x11e0d4[_0x36776e(0x42c)+'tribu'+'te'](_0x36776e(0x20a)+_0x36776e(0x221)+'ed'),_0x36776e(0x420));_0x11e0d4['setAt'+_0x36776e(0x4da)+'te'](_0x5bdc54['QDBYv'],_0x5bdc54[_0x36776e(0xc1)](String,_0x1aabf5)),_0x5bdc54[_0x36776e(0x549)](_0x3dcde1,_0x1aabf5);},_0x11e0d4;}function _0x1e3309(_0x26bb7d,_0x1003ce,_0x1c3be4,_0x2cb8b0,_0x57b6d5){var _0x37659c=_0x13c516,_0x2cf892={'mMMWE':function(_0x4726bc,_0x27d3e4){return _0x4726bc(_0x27d3e4);},'CmTLB':function(_0x5ce83b,_0x7d6d5b){return _0x5ce83b/_0x7d6d5b;},'CYxgh':function(_0x5ec7e5,_0x59c080){return _0x5ec7e5-_0x59c080;},'ovZNb':_0x598f89[_0x37659c(0x474)],'xHToS':function(_0x2a0d02){var _0x151b57=_0x37659c;return _0x598f89[_0x151b57(0x642)](_0x2a0d02);}},_0x4f93a8=document['creat'+_0x37659c(0x55d)+'ent'](_0x598f89['gEJOs']);_0x4f93a8[_0x37659c(0x289)+_0x37659c(0x409)]=_0x598f89[_0x37659c(0x167)];var _0x4cfcdd=document[_0x37659c(0x210)+'eElem'+_0x37659c(0xa7)](_0x598f89['artVI']);_0x4cfcdd[_0x37659c(0x507)]=_0x598f89['onRLx'],_0x4cfcdd[_0x37659c(0x289)+_0x37659c(0x409)]='sk-sl'+_0x37659c(0x380),_0x4cfcdd['min']=_0x1003ce,_0x4cfcdd[_0x37659c(0x43e)]=_0x1c3be4,_0x4cfcdd['step']=_0x2cb8b0,_0x4cfcdd[_0x37659c(0x1de)]=_0x26bb7d;var _0x52c62b=document[_0x37659c(0x210)+_0x37659c(0x55d)+_0x37659c(0xa7)]('span');_0x52c62b[_0x37659c(0x289)+'Name']=_0x598f89[_0x37659c(0x35a)],_0x52c62b[_0x37659c(0x127)+'onten'+'t']=String(_0x26bb7d);var _0x519972=()=>{var _0x2c90b0=_0x37659c;_0x52c62b['textC'+'onten'+'t']=_0x2cf892['mMMWE'](String,_0x4cfcdd[_0x2c90b0(0x1de)]),_0x4f93a8[_0x2c90b0(0x10e)]['setPr'+_0x2c90b0(0x364)+'y'](_0x2c90b0(0x516),_0x2cf892[_0x2c90b0(0x206)](_0x4cfcdd['value']-_0x1003ce,_0x2cf892[_0x2c90b0(0x3ff)](_0x1c3be4,_0x1003ce))*(0x44*0x54+0x2d*-0xc9+0xd69)+'%');};return _0x4cfcdd['oninp'+'ut']=()=>{var _0x45dbdd=_0x37659c,_0x293ba0={'CSbrH':function(_0x43cc9f){return _0x43cc9f();}};_0x2cf892['ovZNb']===_0x45dbdd(0x24c)?(_0x2cf892[_0x45dbdd(0x1a8)](_0x519972),_0x57b6d5(Number(_0x4cfcdd['value']))):(_0x509705[_0x45dbdd(0x370)+_0x45dbdd(0x5c0)]=_0x1e77ec,_0x293ba0[_0x45dbdd(0x1d3)](_0xbe45fe));},_0x598f89['xrxQb'](_0x519972),_0x4f93a8[_0x37659c(0x3b9)+'d'](_0x4cfcdd,_0x52c62b),_0x4f93a8;}function _0x4108fa(_0x1fc3d0,_0x1c397c){var _0x2063d4=_0x13c516;if(_0x598f89[_0x2063d4(0x2cd)](_0x2063d4(0x3db),_0x598f89[_0x2063d4(0x606)])){var _0x39c30a=_0x2bc3d7&&(_0x53ed29[_0x2063d4(0x5c2)+'ge']||_0x2c8286['error']&&_0xcd237c['error']['messa'+'ge'])||_0x2063d4(0x159)+'wn';if(_0xf21874&&_0x1c5e07['filen'+_0x2063d4(0x562)])_0x39c30a+=_0x5bdc54[_0x2063d4(0x162)]+_0x5bdc54[_0x2063d4(0x549)](_0x248d29,_0x4f5eb0[_0x2063d4(0x502)+_0x2063d4(0x562)])[_0x2063d4(0x102)]('/')['pop']()+':'+(_0x35c988[_0x2063d4(0x3a5)+'o']||'?');_0x588df9[_0x2063d4(0x394)+'rror']=_0x3ce67e(_0x39c30a)[_0x2063d4(0x4e3)](-0x6f*0x2e+0xcaf+0xd*0x8f,-0x1967+0x5ce*0x5+-0x2ff*0x1);}else{var _0x2a9cbe=(_0x2063d4(0xec)+_0x2063d4(0x3cd)+'1')['split']('|'),_0x3cb0bc=0x1610+0x21*0x5c+0x21ec*-0x1;while(!![]){switch(_0x2a9cbe[_0x3cb0bc++]){case'0':var _0x28fc49=document['creat'+'eElem'+_0x2063d4(0xa7)](_0x598f89[_0x2063d4(0x624)]);continue;case'1':return _0x28fc49;case'2':_0x28fc49[_0x2063d4(0x507)]=_0x2063d4(0x4e9);continue;case'3':_0x28fc49[_0x2063d4(0x257)+'ut']=()=>_0x1c397c(_0x28fc49[_0x2063d4(0x1de)]);continue;case'4':_0x28fc49[_0x2063d4(0x289)+_0x2063d4(0x409)]=_0x2063d4(0x44e)+'lor';continue;case'5':_0x28fc49[_0x2063d4(0x1de)]=/^#[0-9a-f]{6}$/i[_0x2063d4(0x2f8)](_0x1fc3d0)?_0x1fc3d0:_0x598f89[_0x2063d4(0x20e)];continue;}break;}}}function _0x26548f(_0x851dbc,_0x5d0866,_0x287e59){var _0x3a3042=_0x13c516;if(_0x3a3042(0xc9)!==_0x3a3042(0x627)){var _0x52d4a3=document[_0x3a3042(0x210)+_0x3a3042(0x55d)+_0x3a3042(0xa7)](_0x598f89['zvfgW']);_0x52d4a3['class'+_0x3a3042(0x409)]=_0x3a3042(0x3e1)+_0x3a3042(0x3a0);for(var [_0x2e4c84,_0x484c49]of _0x5d0866){if(_0x598f89[_0x3a3042(0x53b)](_0x3a3042(0x53a),_0x3a3042(0x53a)))_0xc8ed83[_0x3a3042(0x2ed)+_0x3a3042(0x3ab)]=_0x154cbb,_0x4d709e();else{var _0x259140=document[_0x3a3042(0x210)+_0x3a3042(0x55d)+_0x3a3042(0xa7)](_0x598f89[_0x3a3042(0x50d)]);_0x259140['value']=_0x2e4c84,_0x259140[_0x3a3042(0x127)+_0x3a3042(0x2da)+'t']=_0x484c49,_0x52d4a3['appen'+_0x3a3042(0x27a)+'d'](_0x259140);}}return _0x52d4a3['value']=_0x851dbc,_0x52d4a3['oncha'+_0x3a3042(0xe3)]=()=>_0x287e59(_0x52d4a3[_0x3a3042(0x1de)]),_0x52d4a3;}else _0x587282=new _0x3820b4(),_0x3ddb16['set'](_0x4b439d,_0x403dda);}function _0x4e8c3b(_0xae31af,_0x3d6ec5){var _0x5b51da=_0x13c516,_0x3993d6=document[_0x5b51da(0x210)+_0x5b51da(0x55d)+_0x5b51da(0xa7)]('butto'+'n');return _0x3993d6[_0x5b51da(0x507)]=_0x598f89[_0x5b51da(0xd2)],_0x3993d6[_0x5b51da(0x289)+_0x5b51da(0x409)]='sk-bt'+'n',_0x3993d6['textC'+_0x5b51da(0x2da)+'t']=_0xae31af,_0x3993d6['oncli'+'ck']=_0x5f580d=>{var _0x3a1cd0=_0x5b51da;_0x5f580d['stopP'+_0x3a1cd0(0x36b)+'ation'](),_0x3d6ec5();},_0x3993d6;}function _0x4e1997(_0x331b94,_0x55c879,_0x35e9d1){var _0xe3beae=_0x13c516,_0x56afe5=document[_0xe3beae(0x210)+_0xe3beae(0x55d)+'ent'](_0xe3beae(0x3e9));_0x56afe5['class'+'Name']='sk-ct'+'l';var _0x27f394=document['creat'+'eElem'+'ent'](_0xe3beae(0x650));_0x27f394[_0xe3beae(0x289)+'Name']='sk-la'+'bel',_0x27f394['textC'+_0xe3beae(0x2da)+'t']=_0x331b94;if(_0x55c879){var _0x585f78=document[_0xe3beae(0x210)+'eElem'+_0xe3beae(0xa7)](_0xe3beae(0x396));_0x585f78['class'+_0xe3beae(0x409)]=_0xe3beae(0x1b1)+'nt',_0x585f78[_0xe3beae(0x127)+_0xe3beae(0x2da)+'t']=_0x55c879,_0x27f394[_0xe3beae(0x3b9)+'dChil'+'d'](_0x585f78);}return _0x56afe5[_0xe3beae(0x3b9)+'d'](_0x27f394,_0x35e9d1),_0x56afe5;}function _0x2bd889(_0x28dcf3,_0x624fbe){var _0xae2888=_0x13c516,_0x1ad567=document[_0xae2888(0x210)+_0xae2888(0x55d)+_0xae2888(0xa7)](_0x5bdc54[_0xae2888(0x32f)]);return _0x1ad567['class'+'Name']=_0x5bdc54[_0xae2888(0x2ea)]('sk-no'+'te',_0x624fbe?_0x5bdc54['JaazF']:''),_0x1ad567['textC'+_0xae2888(0x2da)+'t']=_0x28dcf3,_0x1ad567;}function _0x1b6673(_0x16543c,_0x3966b5,_0x273d04,_0x5b4e1e,_0xe2bc71){var _0x1c4347=_0x13c516,_0x1de73e={'vsgCb':_0x598f89[_0x1c4347(0x511)],'QtuCr':function(_0x22166d){return _0x22166d();}};if(_0x598f89[_0x1c4347(0x18d)]('ozZwc',_0x1c4347(0x21a))){var _0x1ea7fc=document['creat'+'eElem'+'ent'](_0x598f89['gEJOs']);_0x1ea7fc[_0x1c4347(0x289)+_0x1c4347(0x409)]=_0x1c4347(0x1c6)+'rd'+(_0x273d04?_0x1c4347(0x30a):'');var _0x260fac=document['creat'+_0x1c4347(0x55d)+_0x1c4347(0xa7)](_0x598f89['gEJOs']);_0x260fac['class'+'Name']=_0x598f89['SIiqA'];var _0xf5511f=document['creat'+'eElem'+'ent'](_0x598f89[_0x1c4347(0x62d)]);_0xf5511f[_0x1c4347(0x289)+_0x1c4347(0x409)]=_0x598f89['ruJbA'];var _0x54789b=document[_0x1c4347(0x210)+_0x1c4347(0x55d)+'ent'](_0x598f89['HrnFz']);_0x54789b[_0x1c4347(0x127)+_0x1c4347(0x2da)+'t']=_0x16543c,_0xf5511f[_0x1c4347(0x3b9)+_0x1c4347(0x27a)+'d'](_0x54789b);if(_0x5b4e1e){if(_0x1c4347(0x527)!=='UnNgE'){var _0xf939d2=_0x598f89['GftDz'](_0x165ee9,_0x273d04,_0x15f184=>{var _0x2a4861=_0x1c4347;_0x1ea7fc['class'+_0x2a4861(0x595)][_0x2a4861(0x358)+'e']('on',_0x15f184),_0x5b4e1e(_0x15f184);});_0x260fac['appen'+'d'](_0xf5511f,_0xf939d2);}else{var _0x1b9552=_0x532c0b['creat'+_0x1c4347(0x55d)+_0x1c4347(0xa7)](_0x5bdc54[_0x1c4347(0x54e)]);_0x1b9552[_0x1c4347(0x289)+'Name']=_0x5bdc54[_0x1c4347(0x21b)];for(var [_0x1fd380,_0x2a9d8f]of _0x57ac9d){var _0x50f86c=_0x139b8e['creat'+'eElem'+_0x1c4347(0xa7)](_0x5bdc54['lJqDB']);_0x50f86c[_0x1c4347(0x1de)]=_0x1fd380,_0x50f86c[_0x1c4347(0x127)+_0x1c4347(0x2da)+'t']=_0x2a9d8f,_0x1b9552[_0x1c4347(0x3b9)+'dChil'+'d'](_0x50f86c);}return _0x1b9552['value']=_0x1c2e33,_0x1b9552[_0x1c4347(0x5e1)+_0x1c4347(0xe3)]=()=>_0x5f0466(_0x1b9552['value']),_0x1b9552;}}else{if(_0x598f89[_0x1c4347(0x46d)]==='atwEh')_0x260fac['appen'+_0x1c4347(0x27a)+'d'](_0xf5511f);else{if(_0x36e3e5[_0x17e948]['id']&&_0x189aa5[_0x4e6c0d]['id'][_0x1c4347(0x498)+'Of'](_0x1c4347(0x2a0)+'io_')===0xc7b+0x1bd*0x3+-0x5*0x38a)_0x1a5b8d[_0xfdbcd5]['style']['displ'+'ay']=_0x1de73e['vsgCb'];}}_0x1ea7fc['appen'+_0x1c4347(0x27a)+'d'](_0x260fac);if(_0xe2bc71&&_0xe2bc71[_0x1c4347(0x344)+'h']){var _0x427254=document[_0x1c4347(0x210)+_0x1c4347(0x55d)+'ent'](_0x598f89['gEJOs']);_0x427254[_0x1c4347(0x289)+_0x1c4347(0x409)]='sk-mb'+_0x1c4347(0x652);var _0x1a8abe=document[_0x1c4347(0x210)+_0x1c4347(0x55d)+_0x1c4347(0xa7)](_0x598f89[_0x1c4347(0x62d)]);_0x1a8abe['class'+_0x1c4347(0x409)]='sk-md'+_0x1c4347(0x25a),_0x1a8abe['textC'+'onten'+'t']=_0x3966b5,_0x427254[_0x1c4347(0x3b9)+_0x1c4347(0x27a)+'d'](_0x1a8abe);for(var _0x2c616e of _0xe2bc71)_0x427254['appen'+'dChil'+'d'](_0x2c616e);_0x1ea7fc[_0x1c4347(0x3b9)+'dChil'+'d'](_0x427254);}return _0x1ea7fc;}else _0x3cb3f7[_0x1c4347(0x23a)+_0x1c4347(0x135)]=_0xabe3db,_0x1de73e[_0x1c4347(0x5aa)](_0x364b83);}var _0xe261a4=[{'id':_0x598f89['nHAiZ'],'label':_0x13c516(0x15f)+'t'},{'id':_0x598f89['wqPYY'],'label':'Move'},{'id':'visua'+'l','label':_0x598f89['TdBMl']},{'id':_0x13c516(0x22e),'label':_0x13c516(0x391)},{'id':_0x13c516(0xbf),'label':_0x598f89[_0x13c516(0x4a7)]}];function _0x5828c1(){var _0x3fc9ee=_0x13c516,_0x1aa290=_0xee6aa4['safeM'+_0x3fc9ee(0x610)]?_0x3fc9ee(0x29e)+'MODE\x20'+'—\x20ove'+_0x3fc9ee(0x415)+_0x3fc9ee(0x208)+_0x3fc9ee(0x452)+_0x3fc9ee(0xcf)+_0x3fc9ee(0x4cb)+_0x3fc9ee(0x1df)+_0x3fc9ee(0x3fb)+')':_0xee6aa4[_0x3fc9ee(0x5b8)]?_0x598f89[_0x3fc9ee(0x29f)](_0x598f89[_0x3fc9ee(0x27c)](_0x598f89[_0x3fc9ee(0x29f)](_0x598f89[_0x3fc9ee(0x553)]+(_0xee6aa4['hooks'+'Total']?_0x598f89['XMjze'](_0x598f89['WggVQ'](_0xee6aa4[_0x3fc9ee(0x599)+'Ok'],'/')+_0xee6aa4[_0x3fc9ee(0x599)+'Total'],'\x20hook'+'s'):_0x598f89[_0x3fc9ee(0x259)])+(_0x3fc9ee(0x61b)+'me\x20')+(_0xee6aa4[_0x3fc9ee(0x284)+'oaded']?_0x598f89[_0x3fc9ee(0x2d2)]:'loadi'+'ng')+('\x20|\x20sh'+_0x3fc9ee(0x21e)+'\x20'),_0xee6aa4['shoot'+_0x3fc9ee(0x5ca)]?_0x598f89[_0x3fc9ee(0x597)]:_0x3fc9ee(0x114)),_0x598f89[_0x3fc9ee(0x469)]),_0xee6aa4['movem'+_0x3fc9ee(0x3c1)]?_0x3fc9ee(0x301):'none'):'UWMK\x20'+'MISSI'+_0x3fc9ee(0xce)+_0x3fc9ee(0x1e5)+_0x3fc9ee(0x60b)+_0x3fc9ee(0x63e)+'einst'+'all\x20t'+_0x3fc9ee(0x4d2)+'erscr'+_0x3fc9ee(0x3e4);if(_0xee6aa4['lastE'+'rror'])_0x1aa290+='\x20|\x20ER'+_0x3fc9ee(0x41a)+_0xee6aa4[_0x3fc9ee(0x394)+_0x3fc9ee(0x27f)];return _0x598f89[_0x3fc9ee(0x3fe)](_0x1b6673,'Statu'+'s',_0x1aa290,_0xee6aa4['uwmk'],null,[_0x4e1997(_0x3fc9ee(0x3c0)+_0x3fc9ee(0x35e)+'lock',_0x3fc9ee(0x20d)+_0x3fc9ee(0x3c2)+'yEngi'+_0x3fc9ee(0x475)+'plica'+'tion.'+_0x3fc9ee(0x36a)+_0x3fc9ee(0x3cb)+'Frame'+_0x3fc9ee(0x373),_0x4e8c3b(_0x598f89['hHyvh'],()=>{var _0x18d3f9=_0x3fc9ee;try{if(_0x33b940)_0x33b940['call'](_0x18d3f9(0x4e4)+'Engin'+_0x18d3f9(0x35d)+'licat'+'ion',_0x5bdc54['UcLFA'],[0x3f*0x43+-0x1dd3+0xe46]);}catch(_0x258f7b){}}))]);}function _0x3ed740(_0x5934e5){var _0x90dce5=_0x13c516,_0x9c1ede={'dlCBC':_0x598f89['BegHS'],'OyTdY':function(_0x42448e){var _0x53e04c=_0x4597;return _0x598f89[_0x53e04c(0xcd)](_0x42448e);},'TbIbp':function(_0x1d26e3,_0x43a62b,_0x37d79e){return _0x1d26e3(_0x43a62b,_0x37d79e);},'ZECLI':function(_0x4f3c77,_0x244c9b,_0x5a204d){return _0x4f3c77(_0x244c9b,_0x5a204d);},'METak':_0x598f89[_0x90dce5(0x500)],'DSRPw':_0x598f89[_0x90dce5(0x2a1)],'tHXiz':_0x90dce5(0x1b2)+_0x90dce5(0x44a),'rlLGX':_0x598f89[_0x90dce5(0x2dc)],'GvFTp':_0x598f89[_0x90dce5(0x539)],'fNsOi':_0x90dce5(0xca)+'n','TmZVd':function(_0x258c23,_0x57523d){return _0x258c23===_0x57523d;},'fnbWp':_0x90dce5(0x13f),'oLorW':'set_t'+_0x90dce5(0x3cb)+'Frame'+_0x90dce5(0x373),'IJRJn':function(_0x36643f,_0xf7a98f){var _0x4970c1=_0x90dce5;return _0x598f89[_0x4970c1(0x12a)](_0x36643f,_0xf7a98f);},'CXzbr':function(_0xdb5cbc,_0x5b4e40){var _0x11855d=_0x90dce5;return _0x598f89[_0x11855d(0x60d)](_0xdb5cbc,_0x5b4e40);},'AFVSh':'UWMK\x20'+_0x90dce5(0x26b)+'\x20','kfvPy':'held','RFBiP':function(_0x334cc5){return _0x334cc5();},'HrBUk':function(_0x25f9b2){return _0x598f89['malyV'](_0x25f9b2);},'YXmcg':function(_0x52c581){return _0x52c581();}};if(_0x5934e5===_0x598f89[_0x90dce5(0xf3)])return[_0x598f89['eadak'](_0x5828c1),_0x1b6673(_0x598f89[_0x90dce5(0x1f6)],_0x598f89[_0x90dce5(0x1d1)],_0x59c232[_0x90dce5(0xb4)],_0x2d6a93=>{var _0x2e5806=_0x90dce5,_0x1a3407={'DnuUx':function(_0x4d18c8){return _0x4d18c8();}};_0x9c1ede[_0x2e5806(0x4ca)]===_0x9c1ede['dlCBC']?(_0x59c232[_0x2e5806(0xb4)]=_0x2d6a93,_0x9c1ede[_0x2e5806(0x130)](_0x455f28),_0x9c1ede['TbIbp'](_0x3f6fb4,_0x2e5806(0xb4),_0x2d6a93),_0x3f6fb4(_0x2e5806(0x12f)+'e',_0x2d6a93)):(_0x3725d5[_0x2e5806(0x338)+_0x2e5806(0x120)]=_0x39265e,_0x1a3407[_0x2e5806(0x49f)](_0x1d9e08));},[]),_0x598f89[_0x90dce5(0x180)](_0x1b6673,_0x598f89['RvTyv'],'Skips'+'\x20Reco'+'ilMot'+_0x90dce5(0x45b)+'ick\x20s'+'o\x20the'+_0x90dce5(0x466)+'il\x20sp'+'rings'+_0x90dce5(0x454)+_0x90dce5(0x518)+'ance.',_0x59c232[_0x90dce5(0x18e)+'oil'],_0x21c19d=>{var _0x25429f=_0x90dce5;_0x59c232[_0x25429f(0x18e)+'oil']=_0x21c19d,_0x9c1ede['OyTdY'](_0x455f28),_0x9c1ede[_0x25429f(0x632)](_0x3f6fb4,_0x25429f(0x18e)+_0x25429f(0x55e),_0x21c19d);},[]),_0x598f89['fWLOc'](_0x1b6673,_0x598f89['JPFRp'],_0x598f89[_0x90dce5(0xe2)],_0x59c232['noSpr'+'ead'],_0x3e7304=>{var _0x253332=_0x90dce5;if(_0x253332(0x5a0)!==_0x253332(0x5a0)){var _0x451f55=_0x9c1ede[_0x253332(0x4c0)][_0x253332(0x102)]('|'),_0x39651f=-0x1ebf+-0x1*-0x2182+-0x65*0x7;while(!![]){switch(_0x451f55[_0x39651f++]){case'0':if(_0x52029e)return;continue;case'1':_0x4a600c=!![];continue;case'2':_0x31c046[_0x253332(0x1af)+_0x253332(0x14f)+'stene'+'r'](_0x9c1ede['DSRPw'],_0x4c12d1,!![]);continue;case'3':_0x3f6be7[_0x253332(0x1af)+_0x253332(0x14f)+_0x253332(0x24e)+'r'](_0x9c1ede['tHXiz'],_0x200deb,!![]);continue;case'4':_0x1e63a2[_0x253332(0x1af)+_0x253332(0x14f)+'stene'+'r'](_0x253332(0x622)+'wn',_0x1ae5c2,!![]);continue;case'5':_0x19cefb[_0x253332(0x1af)+'entLi'+_0x253332(0x24e)+'r'](_0x9c1ede[_0x253332(0x188)],_0x54ef07);continue;case'6':_0x34c5bb[_0x253332(0x1af)+_0x253332(0x14f)+_0x253332(0x24e)+'r'](_0x9c1ede[_0x253332(0x121)],_0x4768ad,!![]);continue;}break;}}else _0x59c232[_0x253332(0x23a)+_0x253332(0x135)]=_0x3e7304,_0x5bdc54['XzLux'](_0x455f28);},[]),_0x1b6673(_0x90dce5(0x44b)+_0x90dce5(0x308)+_0x90dce5(0x234)+']',_0x598f89['xJNtG'],_0x59c232['rapid'+'Exp'],_0x50545e=>{var _0x304313=_0x90dce5;'Xggfc'!==_0x5bdc54['huPcc']?(_0x59c232['rapid'+_0x304313(0x100)]=_0x50545e,_0x455f28()):(_0x5c2357['chSiz'+'e']=_0x35e12a,_0x27d579());},[]),_0x1b6673(_0x90dce5(0x3eb)+'e\x20[EX'+'P]',_0x90dce5(0x1bb)+'rites'+'\x20Over'+'tideW'+_0x90dce5(0x523)+'\x20dama'+'ge.\x20B'+_0x90dce5(0x51d)+_0x90dce5(0x2e5)+_0x90dce5(0x23d)+'serve'+_0x90dce5(0x2d7)+_0x90dce5(0x170)+'s.',_0x59c232[_0x90dce5(0xeb)+_0x90dce5(0x5de)],_0x4b33d3=>{var _0x3a302f=_0x90dce5;if(_0x9c1ede[_0x3a302f(0x536)](_0x9c1ede[_0x3a302f(0x5d8)],_0x3a302f(0x13f)))_0x59c232[_0x3a302f(0xeb)+_0x3a302f(0x5de)]=_0x4b33d3,_0x455f28();else{var _0xa66f2a=_0x15aa50['creat'+_0x3a302f(0x55d)+_0x3a302f(0xa7)](_0x9c1ede['fNsOi']);_0xa66f2a['value']=_0x284da3,_0xa66f2a['textC'+_0x3a302f(0x2da)+'t']=_0x65827a,_0x411284[_0x3a302f(0x3b9)+_0x3a302f(0x27a)+'d'](_0xa66f2a);}},[_0x4e1997('Damag'+'e\x20val'+'ue',null,_0x598f89['fWLOc'](_0x1e3309,_0x59c232['damag'+'eValu'+'e'],0x4db*0x7+0x143*-0x17+0x4ee*-0x1,-0x266f+-0x397*0x8+0x451b,0x11f+-0x1*0x1b72+-0x3*-0x8c8,_0x523af3=>{_0x59c232['damag'+'eValu'+'e']=_0x523af3,_0x9c1ede['OyTdY'](_0x455f28);}))]),_0x598f89[_0x90dce5(0x1dd)](_0x1b6673,_0x90dce5(0x1ca)+'ite\x20A'+_0x90dce5(0x412)+_0x90dce5(0x14d),'Refil'+_0x90dce5(0x3e5)+_0x90dce5(0x163)+_0x90dce5(0x200)+_0x90dce5(0xb2)+_0x90dce5(0x54f)+_0x90dce5(0x117)+_0x90dce5(0x29b)+'every'+'\x20200m'+'s.',_0x59c232[_0x90dce5(0x5ee)+'moExp'],_0x38bef7=>{_0x59c232['infAm'+'moExp']=_0x38bef7,_0x455f28();},[_0x598f89[_0x90dce5(0x1ef)](_0x2bd889,_0x90dce5(0x17c)+_0x90dce5(0x270)+'\x20stil'+_0x90dce5(0x638)+'in,\x20t'+_0x90dce5(0x387)+'creme'+'nt\x20ha'+'ppens'+'\x20else'+'where'+'.')])];if(_0x5934e5==='move')return[_0x1b6673(_0x90dce5(0x111),_0x598f89['UIPuf'],_0x598f89[_0x90dce5(0x196)](_0x59c232[_0x90dce5(0x2ed)+'Pct'],-0x4e+-0x1f25+0x1*0x1fd7),null,[_0x4e1997('Speed'+'\x20%','100\x20='+'\x20defa'+'ult',_0x598f89[_0x90dce5(0x512)](_0x1e3309,_0x59c232[_0x90dce5(0x2ed)+_0x90dce5(0x3ab)],-0xf41+-0x1*0x18d+0x1100,0x2458+-0x2391+-0x65*-0x1,-0x251e+0x3fd*0x6+0xd35,_0xe6811d=>{var _0xf25e1c=_0x90dce5;_0x59c232[_0xf25e1c(0x2ed)+_0xf25e1c(0x3ab)]=_0xe6811d,_0x455f28();}))]),_0x1b6673('Jump\x20'+'/\x20Gra'+_0x90dce5(0x5fd),'Scale'+_0x90dce5(0xba)+_0x90dce5(0x25e)+_0x90dce5(0x2bf)+'Force'+'\x20and\x20'+'both\x20'+_0x90dce5(0x338)+'ty\x20va'+_0x90dce5(0x2f9),_0x59c232[_0x90dce5(0x559)+'ct']!==-0x42*0x75+0x10eb+0xda3*0x1||_0x59c232['gravi'+_0x90dce5(0x120)]!==0x1565*0x1+-0x744+-0xdbd*0x1,null,[_0x598f89['fgKSb'](_0x4e1997,_0x90dce5(0x4f1)+'%',null,_0x1e3309(_0x59c232[_0x90dce5(0x559)+'ct'],0x24bb*0x1+0x1*0x26ed+-0x4b76,-0xa*-0x45+0x1675+-0x17fb,-0x1476+-0xa43+0x2*0xf5f,_0x5075a8=>{var _0x4fb8c2=_0x90dce5,_0x2e1a3a={'jjoNH':'Unity'+_0x4fb8c2(0x249)+'e.App'+'licat'+'ion','DltjN':_0x9c1ede['oLorW'],'kzfLB':'SAFE\x20'+_0x4fb8c2(0x216)+_0x4fb8c2(0x34f)+_0x4fb8c2(0x415)+'only,'+'\x20no\x20h'+'ooks\x20'+_0x4fb8c2(0x4cb)+_0x4fb8c2(0x1df)+_0x4fb8c2(0x3fb)+')','LOaks':function(_0x16bf90,_0x2123fd){return _0x9c1ede['IJRJn'](_0x16bf90,_0x2123fd);},'xcWEq':function(_0x2d049b,_0x128296){return _0x9c1ede['CXzbr'](_0x2d049b,_0x128296);},'xZIpB':_0x9c1ede['AFVSh'],'XanxK':function(_0x6108d,_0x1d4ee7){return _0x6108d+_0x1d4ee7;},'zgryP':_0x4fb8c2(0x1e9)+'ks\x20ar'+_0x4fb8c2(0x5df)+'all\x20o'+'ff)','wRxaL':_0x4fb8c2(0x34e)+'d','YJLgv':_0x4fb8c2(0x2c4)+'ng','Dfdlf':_0x4fb8c2(0x114),'ngrsY':_0x9c1ede[_0x4fb8c2(0x24a)],'xJYsh':function(_0x24f96f,_0xce43b0){return _0x24f96f+_0xce43b0;},'JibZj':_0x4fb8c2(0x534)+'s','qOtjZ':function(_0x423f2d,_0x426eb5,_0xc7be65,_0x2e331c){return _0x423f2d(_0x426eb5,_0xc7be65,_0x2e331c);},'RbiGZ':'Apply'};if(_0x4fb8c2(0x136)!==_0x4fb8c2(0x136)){var _0x3e21e2=_0x2db9b5['safeM'+_0x4fb8c2(0x610)]?_0x2e1a3a['kzfLB']:_0xc62f74[_0x4fb8c2(0x5b8)]?_0x2e1a3a[_0x4fb8c2(0x4db)](_0x2e1a3a['xcWEq'](_0x2e1a3a['LOaks'](_0x2e1a3a[_0x4fb8c2(0x4db)](_0x2e1a3a[_0x4fb8c2(0x3b3)],_0x3947fb['hooks'+'Total']?_0x2e1a3a[_0x4fb8c2(0x615)](_0x2e1a3a['XanxK'](_0x2e1a3a[_0x4fb8c2(0x4db)](_0x559d8c[_0x4fb8c2(0x599)+'Ok'],'/'),_0x5ab5ae[_0x4fb8c2(0x599)+_0x4fb8c2(0x103)]),_0x4fb8c2(0x46b)+'s'):_0x2e1a3a[_0x4fb8c2(0x538)]),_0x4fb8c2(0x61b)+'me\x20')+(_0x5069ed[_0x4fb8c2(0x284)+'oaded']?_0x2e1a3a[_0x4fb8c2(0x2d1)]:_0x2e1a3a[_0x4fb8c2(0x2e9)])+('\x20|\x20sh'+_0x4fb8c2(0x21e)+'\x20'),_0x56ca32['shoot'+_0x4fb8c2(0x5ca)]?_0x4fb8c2(0x301):_0x2e1a3a[_0x4fb8c2(0x1b8)]),_0x4fb8c2(0xfb)+_0x4fb8c2(0x5c9)+'t\x20')+(_0x31981b['movem'+'ents']?_0x2e1a3a[_0x4fb8c2(0x5d2)]:_0x2e1a3a['Dfdlf']):'UWMK\x20'+'MISSI'+'NG\x20—\x20'+'overl'+_0x4fb8c2(0x60b)+_0x4fb8c2(0x63e)+'einst'+_0x4fb8c2(0x60e)+_0x4fb8c2(0x4d2)+_0x4fb8c2(0x101)+_0x4fb8c2(0x3e4);if(_0x29f547[_0x4fb8c2(0x394)+_0x4fb8c2(0x27f)])_0x3e21e2+=_0x2e1a3a[_0x4fb8c2(0x16f)](_0x4fb8c2(0x12c)+_0x4fb8c2(0x41a),_0x492c1c[_0x4fb8c2(0x394)+_0x4fb8c2(0x27f)]);return _0x53cb27(_0x2e1a3a['JibZj'],_0x3e21e2,_0x3991b3[_0x4fb8c2(0x5b8)],null,[_0x2e1a3a[_0x4fb8c2(0x171)](_0x17bb93,_0x4fb8c2(0x3c0)+_0x4fb8c2(0x35e)+'lock',_0x4fb8c2(0x20d)+'\x20Unit'+'yEngi'+_0x4fb8c2(0x475)+'plica'+_0x4fb8c2(0x51f)+_0x4fb8c2(0x36a)+_0x4fb8c2(0x3cb)+'Frame'+_0x4fb8c2(0x373),_0x11789f(_0x2e1a3a[_0x4fb8c2(0x429)],()=>{try{if(_0x423aba)_0x26746d['call'](_0x2e1a3a['jjoNH'],_0x2e1a3a['DltjN'],[0x637*-0x3+0x1*0x1522+-0x18d*0x1]);}catch(_0xbde1b6){}}))]);}else _0x59c232[_0x4fb8c2(0x559)+'ct']=_0x5075a8,_0x9c1ede[_0x4fb8c2(0x38e)](_0x455f28);})),_0x598f89['KlGDg'](_0x4e1997,_0x90dce5(0x48f)+_0x90dce5(0x57f),_0x90dce5(0x189)+_0x90dce5(0x5c8)+'oaty',_0x1e3309(_0x59c232[_0x90dce5(0x338)+_0x90dce5(0x120)],0x37*0x16+0x909+-0x3*0x493,-0x2b*-0x6b+0x1aba+0x1*-0x2beb,-0x3d*0x2+0x1804+-0x1785*0x1,_0x324cf9=>{var _0x217efb=_0x90dce5;_0x59c232[_0x217efb(0x338)+_0x217efb(0x120)]=_0x324cf9,_0x455f28();}))]),_0x1b6673(_0x598f89[_0x90dce5(0x1a7)],_0x90dce5(0x276)+_0x90dce5(0xba)+_0x90dce5(0x25e)+_0x90dce5(0x5ab)+'JumpT'+_0x90dce5(0x13d)+_0x90dce5(0x3ce)+_0x90dce5(0x1f3)+'\x20cool'+_0x90dce5(0x3f0)+_0x90dce5(0x214)+_0x90dce5(0x185)+'ies.',_0x59c232[_0x90dce5(0x242)],_0x195719=>{var _0x5cff21=_0x90dce5;_0x59c232[_0x5cff21(0x242)]=_0x195719,_0x5bdc54['GCbwI'](_0x455f28);},[])];if(_0x5934e5===_0x598f89[_0x90dce5(0xea)])return[_0x598f89[_0x90dce5(0x1f7)](_0x1b6673,_0x598f89[_0x90dce5(0x30b)],'WASD\x20'+_0x90dce5(0x5ec)+'/RMB\x20'+_0x90dce5(0x4d8)+_0x90dce5(0x4f3)+_0x90dce5(0x5be)+'.',_0x59c232[_0x90dce5(0xf4)+_0x90dce5(0xf5)],_0x1469b8=>{var _0x4ca53e=_0x90dce5;_0x59c232[_0x4ca53e(0xf4)+'rokes']=_0x1469b8,_0x455f28();},[_0x4e1997(_0x598f89[_0x90dce5(0x383)],null,_0x598f89['KlGDg'](_0x26548f,_0x59c232['ksPos'],[['bl','Botto'+_0x90dce5(0x4cf)+'t'],['br',_0x90dce5(0x186)+'m\x20rig'+'ht'],['ml','Left\x20'+_0x90dce5(0x177)+'e']],_0x581852=>{_0x59c232['ksPos']=_0x581852,_0x9c1ede['RFBiP'](_0x455f28);})),_0x598f89['fgKSb'](_0x4e1997,_0x90dce5(0x3f9),null,_0x598f89[_0x90dce5(0x246)](_0x1e3309,_0x59c232[_0x90dce5(0x37d)+'le'],0x73d*-0x5+-0xeb4+0x2b*0x12f+0.6,-0x26a*-0x10+-0x256f+0x2*-0x98+0.6000000000000001,-0x7*0x463+-0x1816+0x36cb+0.05,_0x42b576=>{_0x59c232['ksSca'+'le']=_0x42b576,_0x9c1ede['HrBUk'](_0x455f28);})),_0x598f89['fgKSb'](_0x4e1997,'CPS\x20r'+_0x90dce5(0x1e6)+'t',null,_0x598f89[_0x90dce5(0x1ed)](_0x165ee9,_0x59c232[_0x90dce5(0x367)],_0x1d6dd7=>{_0x59c232['ksCps']=_0x1d6dd7,_0x455f28();}))]),_0x598f89['MCtpl'](_0x1b6673,_0x598f89[_0x90dce5(0x579)],'Custo'+'m\x20cen'+_0x90dce5(0x148)+_0x90dce5(0x5f6)+_0x90dce5(0x514),_0x59c232[_0x90dce5(0x370)+'hair'],_0xf7f7cb=>{var _0xff78b5=_0x90dce5;_0x59c232[_0xff78b5(0x370)+_0xff78b5(0x5c0)]=_0xf7f7cb,_0x455f28();},[_0x598f89['PKXRj'](_0x4e1997,_0x598f89['fzQyR'],null,_0x598f89['unWAi'](_0x1e3309,_0x59c232[_0x90dce5(0x384)+'e'],0x2353*0x1+-0xb*0xda+-0x19f5+0.5,-0x67*0x56+0x1904*-0x1+0x3ba0+0.5,-0x354+0x1e39+-0x1ae5+0.1,_0x1ab555=>{var _0x15ce2e=_0x90dce5;_0x59c232[_0x15ce2e(0x384)+'e']=_0x1ab555,_0x455f28();})),_0x4e1997(_0x598f89[_0x90dce5(0x33c)],null,_0x4108fa(_0x59c232['chCol'+'or'],_0x3a2136=>{_0x59c232['chCol'+'or']=_0x3a2136,_0x455f28();}))]),_0x1b6673(_0x598f89[_0x90dce5(0x238)],_0x90dce5(0x327)+_0x90dce5(0x4d4)+'y.',_0x59c232['fps'],null,[_0x598f89[_0x90dce5(0xef)](_0x4e1997,_0x90dce5(0x5f1)+_0x90dce5(0x5a2)+'r',null,_0x165ee9(_0x59c232[_0x90dce5(0x5c1)],_0x2a9bae=>{var _0x1ff4b0=_0x90dce5;_0x59c232[_0x1ff4b0(0x5c1)]=_0x2a9bae,_0x9c1ede['RFBiP'](_0x455f28);})),_0x2bd889(_0x90dce5(0x2d4)+'emy\x20c'+_0x90dce5(0x5a2)+_0x90dce5(0x218)+_0x90dce5(0x1db)+_0x90dce5(0x643)+_0x90dce5(0x15d)+'\x20GetV'+'isibl'+_0x90dce5(0x556)+'ers\x20t'+_0x90dce5(0x128)+_0x90dce5(0x341)+'k\x20on.')])];if(_0x5934e5===_0x90dce5(0x22e))return[_0x1b6673(_0x598f89[_0x90dce5(0x1a4)],_0x90dce5(0x5ea)+'\x20kour'+'-io_*'+'\x20bann'+'er\x20sl'+_0x90dce5(0x14c),_0x59c232['adblo'+'ck'],_0x37543f=>{_0x59c232['adblo'+'ck']=_0x37543f,_0x455f28();},[_0x2bd889(_0x598f89[_0x90dce5(0x548)])])];return[_0x598f89['XcdrO'](_0x1b6673,'Safe\x20'+'Mode\x20'+'(over'+_0x90dce5(0xab)+_0x90dce5(0x113),'Skips'+_0x90dce5(0x5c6)+'\x20enti'+'rely\x20'+_0x90dce5(0x5f4)+_0x90dce5(0x142)+_0x90dce5(0x599)+'.\x20Use'+_0x90dce5(0xa3)+_0x90dce5(0x15c)+'atche'+'s\x20won'+_0x90dce5(0x5a1)+_0x90dce5(0x328),_0x59c232[_0x90dce5(0x1f0)+_0x90dce5(0x610)],_0x1278b2=>{var _0x8d42b=_0x90dce5;_0x59c232[_0x8d42b(0x1f0)+_0x8d42b(0x610)]=_0x1278b2,_0x5bdc54['yuKEv'](_0x455f28),location['reloa'+'d']();},[_0x2bd889(_0x598f89['MUDbb'])]),_0x1b6673(_0x90dce5(0x324)+_0x90dce5(0x1c5)+_0x90dce5(0x125)+'hes',_0x90dce5(0xed)+'one\x20i'+'nstal'+'ls\x20a\x20'+_0x90dce5(0x142)+_0x90dce5(0x1ce)+'oline'+_0x90dce5(0x4c7)+'the\x20w'+_0x90dce5(0x241)+'page\x20'+'load.'+_0x90dce5(0x508)+_0x90dce5(0x2d5)+_0x90dce5(0x2e7)+'ault\x20'+'-\x20a\x20s'+'ignat'+'ure\x20t'+_0x90dce5(0x614)+_0x90dce5(0x14b)+_0x90dce5(0x27e)+_0x90dce5(0x1f4)+_0x90dce5(0xb9)+_0x90dce5(0x369)+'thod\x20'+_0x90dce5(0xf8)+'s\x20\x27fu'+'nctio'+'n\x20sig'+_0x90dce5(0x519)+_0x90dce5(0xae)+'match'+'\x27\x20the'+_0x90dce5(0x4b1)+'nt\x20it'+_0x90dce5(0x43d)+'alled'+_0x90dce5(0x4f6)+_0x90dce5(0x3a2)+_0x90dce5(0x2f5)+_0x90dce5(0x64c)+'t\x20a\x20t'+_0x90dce5(0x2ab)+_0x90dce5(0x3c4)+_0x90dce5(0x220)+_0x90dce5(0xa1)+_0x90dce5(0x133)+'h\x20one'+'\x20your'+_0x90dce5(0x271)+_0x90dce5(0x326)+'kes\x20o'+'n.',_0x59c232['hookG'+'od']||_0x59c232[_0x90dce5(0x422)+_0x90dce5(0x211)]||_0x59c232['hookN'+'oReco'+'il']||_0x59c232[_0x90dce5(0x489)+_0x90dce5(0x4ac)+'e'],_0x3ceb4b=>{var _0x164084=_0x90dce5;_0x59c232['hookG'+'od']=_0x3ceb4b,_0x59c232[_0x164084(0x422)+'odDie']=_0x3ceb4b,_0x59c232[_0x164084(0x53f)+_0x164084(0x3a4)+'il']=_0x3ceb4b,_0x59c232[_0x164084(0x489)+'aptur'+'e']=_0x3ceb4b,_0x455f28(),location['reloa'+'d']();},[_0x2bd889(_0x598f89[_0x90dce5(0x583)]),_0x4e1997(_0x90dce5(0x372)+_0x90dce5(0x42b)+_0x90dce5(0x501)+'itiat'+_0x90dce5(0x23c)+'Healt'+'h)',null,_0x598f89[_0x90dce5(0x3ae)](_0x165ee9,_0x59c232['hookG'+'od'],_0x4ebcd4=>{_0x59c232['hookG'+'od']=_0x4ebcd4,_0x455f28();})),_0x4e1997('godDi'+_0x90dce5(0x1fe)+_0x90dce5(0x1f5)+_0x90dce5(0xc5)+'lDie)',null,_0x165ee9(_0x59c232['hookG'+_0x90dce5(0x211)],_0x426caf=>{var _0x1791e8=_0x90dce5;_0x59c232['hookG'+_0x1791e8(0x211)]=_0x426caf,_0x455f28();})),_0x4e1997('noRec'+'oil\x20('+'Recoi'+'lMoti'+_0x90dce5(0x306)+_0x90dce5(0x551),null,_0x598f89[_0x90dce5(0x3a3)](_0x165ee9,_0x59c232['hookN'+_0x90dce5(0x3a4)+'il'],_0x4bfa49=>{var _0x43879d=_0x90dce5;_0x59c232[_0x43879d(0x53f)+_0x43879d(0x3a4)+'il']=_0x4bfa49,_0x5bdc54[_0x43879d(0x493)](_0x455f28);})),_0x598f89[_0x90dce5(0x637)](_0x4e1997,_0x598f89[_0x90dce5(0x644)],'no\x20ch'+_0x90dce5(0x526)+'work\x20'+_0x90dce5(0x357)+'ut\x20th'+'is',_0x165ee9(_0x59c232[_0x90dce5(0x489)+_0x90dce5(0x4ac)+'e'],_0x621b09=>{var _0x4c9b2f=_0x90dce5;_0x59c232[_0x4c9b2f(0x489)+_0x4c9b2f(0x4ac)+'e']=_0x621b09,_0x455f28();}))]),_0x598f89[_0x90dce5(0x1f7)](_0x1b6673,'ACTk\x20'+'Kille'+'r',_0x90dce5(0x495)+_0x90dce5(0x625)+_0x90dce5(0x4fb)+_0x90dce5(0x4fd)+'etect'+'ors\x20a'+_0x90dce5(0x154)+'rtup\x20'+'via\x20S'+'topDe'+_0x90dce5(0xf9)+_0x90dce5(0x1e4)+'\x20Keep'+_0x90dce5(0x1d4),_0x59c232[_0x90dce5(0x648)+'ill'],_0x3fdbe0=>{var _0x404d9a=_0x90dce5;_0x59c232[_0x404d9a(0x648)+'ill']=_0x3fdbe0,_0x9c1ede[_0x404d9a(0x290)](_0x455f28);},[_0x2bd889(_0x598f89['KcSkA'],!![])]),_0x1b6673(_0x598f89['hKBZr'],'These'+_0x90dce5(0x1a3)+_0x90dce5(0x16d)+'ver-v'+'isibl'+'e\x20tra'+_0x90dce5(0x4c1),!![],null,[_0x4e1997('Wipe\x20'+'my\x20se'+'tting'+'s',null,_0x4e8c3b(_0x90dce5(0x16b),()=>{var _0x560777=_0x90dce5;_0x59c232={..._0x1d0f5f},_0x9c1ede[_0x560777(0x290)](_0x455f28),location[_0x560777(0x3c4)+'d']();}))])];}var _0x506785=null;function _0x19fbae(_0x40822a){var _0x16b667=_0x13c516;_0x1d9003=_0x40822a;if(!_0x506785){var _0x349dd3=document[_0x16b667(0x210)+_0x16b667(0x55d)+'ent'](_0x16b667(0x10e));_0x349dd3[_0x16b667(0x127)+_0x16b667(0x2da)+'t']=_0x5e06cb,_0x33482c[_0x16b667(0x3b9)+_0x16b667(0x27a)+'d'](_0x349dd3),_0x506785=_0x4403d2(),_0x33482c['appen'+_0x16b667(0x27a)+'d'](_0x506785),_0x5bdc54['rpNrP'](requestAnimationFrame,()=>_0x506785[_0x16b667(0x289)+'List'][_0x16b667(0x302)](_0x16b667(0x21f)));}_0x506785['class'+'List']['toggl'+'e']('shown',_0x40822a);}function _0xe50820(){_0x19fbae(!_0x1d9003);}function _0x4403d2(){var _0x14ef30=_0x13c516,_0x38f575=document[_0x14ef30(0x210)+_0x14ef30(0x55d)+_0x14ef30(0xa7)](_0x598f89[_0x14ef30(0x62d)]);_0x38f575[_0x14ef30(0x289)+_0x14ef30(0x409)]=_0x14ef30(0x1e8)+'nel';var _0x11ae69=document['creat'+'eElem'+_0x14ef30(0xa7)]('nav');_0x11ae69[_0x14ef30(0x289)+'Name']=_0x598f89['VrgnB'];var _0x45a8a8=document['creat'+_0x14ef30(0x55d)+'ent'](_0x14ef30(0x3e9));_0x45a8a8['class'+'Name']=_0x14ef30(0x5cc)+'go',_0x45a8a8['inner'+'HTML']=_0x14ef30(0x147)+_0x14ef30(0x169)+_0x14ef30(0x1d8)+_0x14ef30(0x264)+_0x14ef30(0x3e3)+_0x14ef30(0x289)+_0x14ef30(0x2bc)+_0x14ef30(0x21d)+_0x14ef30(0x303)+'<path'+_0x14ef30(0x563)+_0x14ef30(0x453)+'c-1.5'+'-2.5-'+'4-4.5'+_0x14ef30(0x2fe)+'5\x200-2'+_0x14ef30(0x1ff)+_0x14ef30(0x18f)+_0x14ef30(0x3b4)+_0x14ef30(0x5ff)+'\x204\x204.'+'5c0\x203'+_0x14ef30(0x522)+'5-4\x207'+'.5z\x22\x20'+'fill='+'\x22none'+_0x14ef30(0x278)+_0x14ef30(0x572)+'#ff6b'+'9d\x22\x20s'+_0x14ef30(0x4ab)+_0x14ef30(0x484)+_0x14ef30(0x2df)+_0x14ef30(0x3f3)+_0x14ef30(0x2ac)+'necap'+'=\x22rou'+'nd\x22\x20s'+_0x14ef30(0x4ab)+_0x14ef30(0x3c3)+'join='+'\x22roun'+'d\x22/><'+'circl'+'e\x20cx='+_0x14ef30(0xdb)+_0x14ef30(0x32b)+_0x14ef30(0x59f)+_0x14ef30(0x254)+_0x14ef30(0x629)+_0x14ef30(0x3aa)+_0x14ef30(0x226)+_0x14ef30(0x138)+_0x14ef30(0x455),_0x11ae69['appen'+_0x14ef30(0x27a)+'d'](_0x45a8a8);var _0x5cc3dc=document[_0x14ef30(0x210)+'eElem'+_0x14ef30(0xa7)](_0x14ef30(0x3e9));_0x5cc3dc[_0x14ef30(0x289)+_0x14ef30(0x409)]='mn-ma'+'in';var _0x329673=document['creat'+_0x14ef30(0x55d)+_0x14ef30(0xa7)](_0x598f89[_0x14ef30(0x436)]);_0x329673['class'+'Name']=_0x598f89[_0x14ef30(0x4b2)];var _0x316f6d=document['creat'+_0x14ef30(0x55d)+_0x14ef30(0xa7)](_0x14ef30(0x3e9));_0x316f6d[_0x14ef30(0x289)+_0x14ef30(0x409)]=_0x598f89['IOGHz'];var _0x5d9620=document[_0x14ef30(0x210)+_0x14ef30(0x55d)+'ent']('h2');_0x5d9620[_0x14ef30(0x289)+_0x14ef30(0x409)]='mn-h',_0x5d9620['textC'+_0x14ef30(0x2da)+'t']='Sakur'+'a\x20Kou'+'r';var _0x45ab44=document['creat'+_0x14ef30(0x55d)+_0x14ef30(0xa7)](_0x14ef30(0x396));_0x45ab44[_0x14ef30(0x289)+'Name']=_0x598f89['Etjes'],_0x45ab44['textC'+_0x14ef30(0x2da)+'t']=_0x598f89[_0x14ef30(0x4a5)],_0x316f6d['appen'+'d'](_0x5d9620,_0x45ab44);var _0x19aeca=document[_0x14ef30(0x210)+'eElem'+'ent'](_0x598f89[_0x14ef30(0xd2)]);_0x19aeca[_0x14ef30(0x507)]=_0x14ef30(0x349)+'n',_0x19aeca[_0x14ef30(0x289)+'Name']=_0x598f89[_0x14ef30(0x3f2)],_0x19aeca['title']=_0x14ef30(0x478),_0x19aeca[_0x14ef30(0x3de)+_0x14ef30(0x274)]='<svg\x20'+_0x14ef30(0x169)+_0x14ef30(0x1d8)+_0x14ef30(0x264)+_0x14ef30(0x64f)+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x14ef30(0xe9)+'18\x206\x20'+_0x14ef30(0x3c8)+_0x14ef30(0x138)+_0x14ef30(0x455),_0x19aeca['oncli'+'ck']=()=>_0x19fbae(![]),_0x329673['appen'+'d'](_0x316f6d,_0x19aeca);var _0x54c1d7=document[_0x14ef30(0x210)+_0x14ef30(0x55d)+'ent'](_0x598f89['gEJOs']);_0x54c1d7[_0x14ef30(0x289)+_0x14ef30(0x409)]=_0x598f89['hnKwH'],_0x5cc3dc[_0x14ef30(0x3b9)+'d'](_0x329673,_0x54c1d7),_0x38f575['appen'+'d'](_0x11ae69,_0x5cc3dc);var _0x1df779=new Map();for(var _0x13a12e of _0xe261a4){var _0x4f77d8=document[_0x14ef30(0x210)+_0x14ef30(0x55d)+_0x14ef30(0xa7)]('butto'+'n');_0x4f77d8[_0x14ef30(0x507)]=_0x598f89[_0x14ef30(0xd2)],_0x4f77d8['class'+_0x14ef30(0x409)]=_0x14ef30(0x41d)+'b',_0x4f77d8[_0x14ef30(0xd1)]=_0x13a12e['label'],_0x4f77d8[_0x14ef30(0x3de)+'HTML']=_0x598f89[_0x14ef30(0x5fe)]('<smal'+'l>'+_0x13a12e[_0x14ef30(0x63a)],_0x598f89[_0x14ef30(0x58e)]),_0x4f77d8[_0x14ef30(0x5f0)+'ck']=(_0x15ea97=>()=>_0x221739(_0x15ea97))(_0x13a12e['id']),_0x1df779['set'](_0x13a12e['id'],_0x4f77d8),_0x11ae69[_0x14ef30(0x3b9)+_0x14ef30(0x27a)+'d'](_0x4f77d8);}function _0x221739(_0x3172d9){var _0x4bed8f=_0x14ef30;if(_0x5bdc54['jIxnA'](_0x4bed8f(0x531),_0x5bdc54[_0x4bed8f(0x5f7)])){_0x11ca40['cat']=_0x3172d9,_0x4e13ff();var _0x432e88=_0xe261a4[_0x4bed8f(0x5da)](_0xb845bf=>_0xb845bf['id']===_0x3172d9)||_0xe261a4[-0x15a2+-0x19*-0x32+0x10c0];_0x5d9620[_0x4bed8f(0x127)+_0x4bed8f(0x2da)+'t']=_0x5bdc54[_0x4bed8f(0x4ce)](_0x4bed8f(0x4e2)+_0x4bed8f(0x1ac)+_0x4bed8f(0x16a),_0x432e88['label']);for(var [_0x2478ed,_0x421cca]of _0x1df779)_0x421cca['class'+_0x4bed8f(0x595)]['toggl'+'e'](_0x5bdc54[_0x4bed8f(0x2c7)],_0x2478ed===_0x3172d9);_0x54c1d7['repla'+'ceChi'+_0x4bed8f(0x5bb)](..._0x5bdc54[_0x4bed8f(0x549)](_0x3ed740,_0x3172d9));}else _0x46c8b9[_0x4bed8f(0x573)+'or']=_0x18268e,_0x579888();}return _0x598f89[_0x14ef30(0x1ef)](_0x221739,_0x11ca40['cat']||_0x598f89['nHAiZ']),setInterval(()=>{var _0x4ab31=_0x14ef30;if(!_0x1d9003)return;var _0xb08b39=_0x54c1d7['child'+_0x4ab31(0x14a)];for(var _0x188aab=0x5cd+-0x23b2+0x1de5;_0x5bdc54[_0x4ab31(0x277)](_0x188aab,_0xb08b39[_0x4ab31(0x344)+'h']);_0x188aab++){var _0x48091b=_0xb08b39[_0x188aab][_0x4ab31(0x647)+'Selec'+'tor'](_0x4ab31(0x4f8)+_0x4ab31(0x5e2));_0x48091b&&(_0x48091b[_0x4ab31(0x127)+'onten'+'t']['index'+'Of'](_0x5bdc54[_0x4ab31(0x2eb)])===-0x272*-0x6+-0x817+-0x695||_0x48091b['textC'+_0x4ab31(0x2da)+'t'][_0x4ab31(0x498)+'Of']('SAFE')===-0x4f*0x36+0x41*0xb+0xddf)&&(_0x48091b['textC'+'onten'+'t']=_0xee6aa4[_0x4ab31(0x1f0)+'ode']?_0x4ab31(0x29e)+_0x4ab31(0x216)+'-\x20ove'+'rlay\x20'+'only,'+_0x4ab31(0x452)+'ooks\x20'+_0x4ab31(0x4cb)+'ad\x20to'+_0x4ab31(0x3fb)+')':_0xee6aa4[_0x4ab31(0x5b8)]?_0x5bdc54[_0x4ab31(0x399)](_0x5bdc54['FbarJ'](_0x5bdc54[_0x4ab31(0x26d)](_0x5bdc54[_0x4ab31(0x428)](_0x5bdc54[_0x4ab31(0x404)](_0x4ab31(0x2c3)+'bound'+'\x20',_0xee6aa4['hooks'+_0x4ab31(0x103)]?_0xee6aa4[_0x4ab31(0x599)+'Ok']+'/'+_0xee6aa4[_0x4ab31(0x599)+_0x4ab31(0x103)]+(_0x4ab31(0x46b)+'s'):_0x5bdc54[_0x4ab31(0x317)])+_0x5bdc54[_0x4ab31(0x3b8)],_0xee6aa4[_0x4ab31(0x284)+'oaded']?_0x4ab31(0x34e)+'d':_0x5bdc54[_0x4ab31(0x4fe)]),_0x5bdc54['hXwFk'])+(_0xee6aa4[_0x4ab31(0x4e7)+_0x4ab31(0x5ca)]?_0x5bdc54[_0x4ab31(0x112)]:_0x5bdc54['SGdgC']),_0x5bdc54[_0x4ab31(0x39d)])+(_0xee6aa4[_0x4ab31(0x2b9)+_0x4ab31(0x3c1)]?_0x5bdc54['vfPZy']:_0x4ab31(0x114)),_0xee6aa4['lastE'+_0x4ab31(0x27f)]?_0x5bdc54[_0x4ab31(0x39c)](_0x5bdc54[_0x4ab31(0x506)],_0xee6aa4['lastE'+_0x4ab31(0x27f)]):''):_0x5bdc54[_0x4ab31(0x64e)]);}},-0x7c3*-0x1+0x1095+-0xa38*0x2),_0x38f575;}var _0x5e06cb='\x0a\x20\x20\x20\x20'+_0x13c516(0x354)+_0x13c516(0x4f7)+_0x13c516(0x636)+_0x13c516(0x653)+_0x13c516(0x1c2)+'\x20\x20\x20*\x20'+_0x13c516(0x1cb)+_0x13c516(0x36e)+_0x13c516(0x1fc)+_0x13c516(0x20c)+_0x13c516(0x245)+_0x13c516(0x377)+_0x13c516(0x646)+_0x13c516(0x2e6)+'t-fam'+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+_0x13c516(0x2b2)+_0x13c516(0x552)+'\x20syst'+'em-ui'+_0x13c516(0x4d6)+_0x13c516(0x631)+_0x13c516(0x64d)+_0x13c516(0x521)+_0x13c516(0x5dd)+'anel\x20'+'{\x20pos'+_0x13c516(0x19c)+':\x20abs'+_0x13c516(0x5b0)+_0x13c516(0x1c0)+'ht:\x202'+'4px;\x20'+_0x13c516(0x470)+'m:\x2024'+_0x13c516(0x626)+_0x13c516(0x3d1)+_0x13c516(0x58d)+'620px'+_0x13c516(0x444)+_0x13c516(0x5e0)+_0x13c516(0xc0)+'48px)'+');\x20ma'+_0x13c516(0xaa)+'ght:\x20'+_0x13c516(0xa8)+'80px,'+_0x13c516(0x368)+'(100v'+'h\x20-\x204'+_0x13c516(0x204)+';\x0a\x20\x20\x20'+_0x13c516(0x18c)+'splay'+_0x13c516(0x2bb)+'x;\x20ga'+'p:\x2010'+_0x13c516(0x10a)+_0x13c516(0x3a9)+_0x13c516(0x5c7)+_0x13c516(0x5d0)+_0x13c516(0x20c)+_0x13c516(0x34d)+'us:\x202'+_0x13c516(0x5b4)+_0x13c516(0x50f)+'er-ev'+_0x13c516(0x564)+'\x20auto'+_0x13c516(0x43b)+_0x13c516(0x3d4)+'ckgro'+_0x13c516(0x363)+'rgba('+_0x13c516(0x57b)+',21,.'+_0x13c516(0x425)+'backd'+'rop-f'+_0x13c516(0x2ee)+':\x20blu'+_0x13c516(0x37e)+_0x13c516(0x2c6)+_0x13c516(0x544)+_0x13c516(0x3f6)+'%);\x20-'+_0x13c516(0x530)+_0x13c516(0x2fd)+'kdrop'+_0x13c516(0x59e)+_0x13c516(0xa9)+_0x13c516(0x2fb)+'2px)\x20'+_0x13c516(0x633)+'ate(1'+_0x13c516(0x28c)+_0x13c516(0x521)+_0x13c516(0x414)+'-shad'+_0x13c516(0x5ce)+'\x200\x200\x20'+_0x13c516(0x2d0)+'gba(2'+'55,25'+_0x13c516(0x19e)+_0x13c516(0x20b)+',\x20ins'+_0x13c516(0x31e)+_0x13c516(0x129)+_0x13c516(0x337)+'(255,'+_0x13c516(0x2be)+_0x13c516(0x5eb)+_0x13c516(0x160)+_0x13c516(0x517)+_0x13c516(0x52b)+'\x20rgba'+_0x13c516(0xfe)+_0x13c516(0x1b5)+_0x13c516(0x479)+_0x13c516(0x13a)+_0x13c516(0x4c8)+'y:\x200;'+'\x20tran'+_0x13c516(0x43f)+_0x13c516(0x19f)+'nslat'+_0x13c516(0x351)+_0x13c516(0x554)+_0x13c516(0x50f)+_0x13c516(0xe5)+'ents:'+_0x13c516(0x1d0)+';\x20tra'+'nsiti'+_0x13c516(0x336)+_0x13c516(0x4c8)+_0x13c516(0x58c)+_0x13c516(0x47e)+'e,\x20tr'+_0x13c516(0x60f)+_0x13c516(0x596)+'5s\x20cu'+'bic-b'+_0x13c516(0x569)+_0x13c516(0x5e5)+_0x13c516(0x2b0)+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x13c516(0x393)+_0x13c516(0x13e)+'6eef2'+';\x20fon'+_0x13c516(0x23b)+'e:\x2013'+_0x13c516(0x403)+'\x0a\x20\x20\x20\x20'+_0x13c516(0x5dd)+_0x13c516(0x47f)+'shown'+'\x20{\x20op'+'acity'+_0x13c516(0x389)+'trans'+'form:'+'\x20none'+_0x13c516(0x116)+_0x13c516(0x4cc)+_0x13c516(0x280)+_0x13c516(0x45d)+'to;\x20}'+_0x13c516(0x521)+_0x13c516(0xd5)+_0x13c516(0x3f7)+_0x13c516(0x482)+_0x13c516(0x23e)+_0x13c516(0x29c)+'\x20flex'+_0x13c516(0x248)+_0x13c516(0x4c9)+_0x13c516(0x459)+_0x13c516(0x591)+'align'+'-item'+_0x13c516(0x31a)+_0x13c516(0x48a)+_0x13c516(0x3f5)+_0x13c516(0xd7)+_0x13c516(0x1fa)+_0x13c516(0x1a5)+_0x13c516(0x158)+_0x13c516(0x54d)+_0x13c516(0x63f)+_0x13c516(0x4bb)+'ing:\x20'+'12px\x20'+(_0x13c516(0x5b9)+'rder-'+_0x13c516(0x181)+'s:\x2016'+_0x13c516(0x601)+_0x13c516(0x23f)+_0x13c516(0x334)+_0x13c516(0x22a)+_0x13c516(0x115)+'a(255'+_0x13c516(0x51b)+'255,.'+'025);'+'\x20box-'+'shado'+_0x13c516(0x1bd)+'set\x200'+_0x13c516(0x4dd)+_0x13c516(0x2d0)+_0x13c516(0x3c9)+_0x13c516(0x600)+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x13c516(0x411)+'n-log'+'o\x20{\x20d'+_0x13c516(0x4a2)+_0x13c516(0x2b7)+_0x13c516(0x3f4)+_0x13c516(0x3a6)+_0x13c516(0x183)+_0x13c516(0x4bc)+'ter;\x20'+_0x13c516(0x45c)+_0x13c516(0x288)+'x;\x20he'+_0x13c516(0x448)+_0x13c516(0x490)+';\x20}\x0a\x20'+_0x13c516(0x411)+_0x13c516(0x5cd)+_0x13c516(0x541)+'\x20{\x20wi'+_0x13c516(0x205)+'25px;'+'\x20heig'+_0x13c516(0x199)+'5px;\x20'+_0x13c516(0x4fc)+'low:\x20'+_0x13c516(0x17b)+_0x13c516(0x63c)+_0x13c516(0x2ee)+':\x20dro'+_0x13c516(0xf2)+_0x13c516(0x513)+_0x13c516(0x1be)+'x\x20rgb'+_0x13c516(0x24b)+',107,'+_0x13c516(0x145)+_0x13c516(0x5b6)+_0x13c516(0x594)+_0x13c516(0xc4)+'tab\x20{'+_0x13c516(0x482)+'lay:\x20'+'flex;'+'\x20alig'+_0x13c516(0x5ba)+'ms:\x20c'+_0x13c516(0x588)+_0x13c516(0x382)+_0x13c516(0x581)+'conte'+_0x13c516(0x62c)+'enter'+_0x13c516(0x36f)+_0x13c516(0x237)+'2px;\x20'+_0x13c516(0x14e)+'t:\x2034'+'px;\x20b'+'order'+_0x13c516(0x140)+_0x13c516(0x5ae)+_0x13c516(0x48e)+_0x13c516(0x5af)+'10px;'+'\x0a\x20\x20\x20\x20'+_0x13c516(0x25b)+_0x13c516(0x3f8)+_0x13c516(0xb1)+_0x13c516(0x61d)+_0x13c516(0x195)+_0x13c516(0x282)+'or:\x20r'+'gba(2'+_0x13c516(0x318)+'8,242'+',.4);'+'\x20curs'+'or:\x20p'+_0x13c516(0x134)+_0x13c516(0x40c)+_0x13c516(0x1aa)+_0x13c516(0x292)+_0x13c516(0x3f1)+_0x13c516(0x589)+'weigh'+_0x13c516(0x1ae)+_0x13c516(0x401)+_0x13c516(0x471)+_0x13c516(0x41d)+_0x13c516(0x3b2)+_0x13c516(0x12b)+'color'+':\x20rgb'+_0x13c516(0x1a1)+_0x13c516(0x492)+'242,.'+'8);\x20}'+_0x13c516(0x521)+_0x13c516(0x1a0)+_0x13c516(0x28b)+'tive\x20'+'{\x20col'+'or:\x20#'+_0x13c516(0x5b7)+'d;\x20ba'+_0x13c516(0x33e)+'und:\x20'+_0x13c516(0x108)+_0x13c516(0x1a6)+_0x13c516(0x4a6)+'7,.1)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x13c516(0x41c)+'n\x20{\x20f'+_0x13c516(0x54d)+'1;\x20mi'+'n-wid'+_0x13c516(0x3a1)+';\x20dis'+'play:'+'\x20flex'+_0x13c516(0x3dc)+_0x13c516(0x314)+'ectio'+_0x13c516(0xe1)+_0x13c516(0x62e)+_0x13c516(0x3ee)+'\x20\x20.mn'+_0x13c516(0x3ad)+'{\x20dis'+'play:'+_0x13c516(0x202)+';\x20ali'+_0x13c516(0x47d)+'ems:\x20'+'cente'+_0x13c516(0x2d9)+_0x13c516(0x586)+_0x13c516(0x10a)+_0x13c516(0x3a9)+_0x13c516(0x607)+'x\x206px'+'\x2012px'+';\x20use'+_0x13c516(0x451)+_0x13c516(0x623)+'none;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+_0x13c516(0x1ea)+_0x13c516(0x4ba)+'in-wi'+_0x13c516(0x205)+_0x13c516(0x401)+_0x13c516(0x471)+_0x13c516(0x62f)+_0x13c516(0x45e)+_0x13c516(0x23b)+'e:\x2017'+'px;\x20f'+_0x13c516(0x4ad)+_0x13c516(0x4ed)+_0x13c516(0x3fd)+_0x13c516(0x1c2)+_0x13c516(0x411)+'n-sub'+_0x13c516(0x2ae)+'nt-si'+'ze:\x201'+_0x13c516(0x3b5)+_0x13c516(0x30e))+(_0x13c516(0x340)+_0x13c516(0x22b)+'\x20\x20\x20\x20.'+'mn-cl'+_0x13c516(0x543)+_0x13c516(0x482)+'lay:\x20'+_0x13c516(0x1b7)+_0x13c516(0x46f)+_0x13c516(0x2b5)+_0x13c516(0x467)+_0x13c516(0x588)+';\x20wid'+'th:\x202'+'8px;\x20'+_0x13c516(0x14e)+_0x13c516(0x4ef)+_0x13c516(0x5d0)+_0x13c516(0x20c)+_0x13c516(0x140)+_0x13c516(0x5ae)+'r-rad'+'ius:\x20'+_0x13c516(0x53c)+_0x13c516(0x334)+_0x13c516(0x22a)+_0x13c516(0x19f)+_0x13c516(0x485)+_0x13c516(0x22d)+_0x13c516(0x4e9)+_0x13c516(0xfd)+_0x13c516(0x179)+_0x13c516(0xa4)+_0x13c516(0x360)+_0x13c516(0x5c4)+'curso'+'r:\x20po'+'inter'+_0x13c516(0x1c2)+_0x13c516(0x411)+_0x13c516(0x2e3)+_0x13c516(0x319)+'ver\x20{'+_0x13c516(0xa4)+_0x13c516(0x360)+_0x13c516(0x311)+_0x13c516(0x33e)+_0x13c516(0x363)+'rgba('+_0x13c516(0x2be)+_0x13c516(0x600)+_0x13c516(0x35c)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x13c516(0x38c)+'ose\x20s'+_0x13c516(0x4ee)+_0x13c516(0x45c)+_0x13c516(0x413)+'x;\x20he'+'ight:'+'\x2014px'+';\x20fil'+_0x13c516(0x4eb)+_0x13c516(0x494)+'troke'+_0x13c516(0x59c)+_0x13c516(0x42f)+_0x13c516(0x55b)+_0x13c516(0x3f3)+'ke-wi'+'dth:\x20'+_0x13c516(0x424)+_0x13c516(0x56f)+_0x13c516(0x4d3)+_0x13c516(0x361)+_0x13c516(0x2a2)+_0x13c516(0x3ee)+'\x20\x20.mn'+'-cols'+'\x20{\x20fl'+'ex:\x201'+_0x13c516(0x260)+_0x13c516(0x15b)+_0x13c516(0x60c)+';\x20ove'+_0x13c516(0x52a)+_0x13c516(0x408)+_0x13c516(0xc3)+_0x13c516(0x2f6)+_0x13c516(0x17f)+_0x13c516(0x397)+_0x13c516(0x557)+_0x13c516(0x255)+_0x13c516(0x32e)+'olumn'+'s:\x20re'+_0x13c516(0x5f5)+_0x13c516(0x1d5)+'fill,'+_0x13c516(0x321)+'ax(25'+_0x13c516(0x40d)+_0x13c516(0x35f)+';\x20ali'+'gn-it'+'ems:\x20'+_0x13c516(0x12d)+';\x20ali'+_0x13c516(0x150)+_0x13c516(0x640)+':\x20sta'+'rt;\x20g'+_0x13c516(0x253)+'0px;\x20'+'paddi'+'ng:\x200'+'\x204px\x20'+_0x13c516(0x141)+_0x13c516(0x1c2)+_0x13c516(0x411)+'n-col'+_0x13c516(0x2e4)+'ebkit'+'-scro'+_0x13c516(0x439)+_0x13c516(0x3e0)+'dth:\x20'+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x13c516(0xc4)+_0x13c516(0x235)+':-web'+_0x13c516(0x2f4)+_0x13c516(0x49a)+_0x13c516(0x2ef)+'humb\x20'+_0x13c516(0x44c)+_0x13c516(0x3f8)+_0x13c516(0x5b3)+_0x13c516(0x3c9)+_0x13c516(0x600)+_0x13c516(0x19e)+',.08)'+_0x13c516(0x406)+_0x13c516(0x25c)+_0x13c516(0x491)+_0x13c516(0x5d4)+_0x13c516(0x1c2)+'\x20\x20\x20.s'+'k-car'+'d\x20{\x20b'+'order'+'-radi'+_0x13c516(0x2c2)+_0x13c516(0x5b4)+_0x13c516(0x334)+'round'+':\x20rgb'+_0x13c516(0x24b)+_0x13c516(0x51b)+_0x13c516(0x252)+'025);'+_0x13c516(0x2ca)+_0x13c516(0x232)+_0x13c516(0x1bd)+'set\x200'+'\x200\x200\x20'+_0x13c516(0x2d0)+_0x13c516(0x3c9)+_0x13c516(0x600)+_0x13c516(0x19e)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x13c516(0x347)+_0x13c516(0x32d)+_0x13c516(0x44c)+'kgrou'+_0x13c516(0x5b3)+_0x13c516(0x3c9)+_0x13c516(0x600)+'5,255'+_0x13c516(0x119)+';\x20box'+'-shad'+'ow:\x20i'+_0x13c516(0x250)+'0\x200\x200'+_0x13c516(0x3d3)+_0x13c516(0x108)+_0x13c516(0x1a6)+_0x13c516(0x4a6)+'7,.28'+');\x20}\x0a'+_0x13c516(0x471)+_0x13c516(0x1c6)+_0x13c516(0x225)+'ad\x20{\x20'+_0x13c516(0x2f6))+(_0x13c516(0x1d9)+_0x13c516(0x3d2)+'align'+'-item'+_0x13c516(0x31a)+_0x13c516(0x48a)+'\x20gap:'+'\x208px;'+_0x13c516(0x4bb)+_0x13c516(0x37b)+'11px\x20'+_0x13c516(0x312)+'\x20}\x0a\x20\x20'+_0x13c516(0x2e0)+_0x13c516(0x392)+'-titl'+'e\x20{\x20f'+_0x13c516(0x54d)+_0x13c516(0x3d5)+'n-wid'+_0x13c516(0x3a1)+';\x20}\x0a\x20'+_0x13c516(0x2de)+_0x13c516(0x347)+_0x13c516(0x547)+'le\x20st'+_0x13c516(0x47b)+_0x13c516(0x45e)+_0x13c516(0x23b)+'e:\x2013'+_0x13c516(0x158)+_0x13c516(0x4ad)+_0x13c516(0x4ed)+':\x20600'+_0x13c516(0x282)+_0x13c516(0x5ad)+'gba(2'+'46,23'+'8,242'+_0x13c516(0x628)+';\x20}\x0a\x20'+_0x13c516(0x2de)+'k-car'+'d.on\x20'+'.sk-c'+'ard-t'+_0x13c516(0x4f2)+'stron'+_0x13c516(0x4f4)+'olor:'+'\x20#fff'+'0f5;\x20'+'}\x0a\x20\x20\x20'+_0x13c516(0x2cf)+_0x13c516(0x50a)+'\x20{\x20pa'+'dding'+_0x13c516(0x430)+_0x13c516(0xc6)+_0x13c516(0x3f1)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x13c516(0x546)+_0x13c516(0x2ae)+_0x13c516(0x1aa)+_0x13c516(0x292)+_0x13c516(0x3b5)+'opaci'+_0x13c516(0x340)+'4;\x20ma'+_0x13c516(0x13b)+'botto'+_0x13c516(0x510)+_0x13c516(0x524)+'\x20\x20\x20\x20.'+_0x13c516(0x486)+_0x13c516(0x33a)+'ispla'+_0x13c516(0x165)+_0x13c516(0x1da)+_0x13c516(0x31f)+'items'+_0x13c516(0x4bc)+_0x13c516(0x3a8)+'gap:\x20'+'8px;\x20'+'paddi'+'ng:\x204'+'px\x200;'+'\x20font'+_0x13c516(0x17d)+':\x2011.'+'5px;\x20'+_0x13c516(0x594)+_0x13c516(0x2cf)+_0x13c516(0x63a)+_0x13c516(0x339)+'ex:\x201'+';\x20col'+_0x13c516(0x5ad)+_0x13c516(0x3c9)+_0x13c516(0x318)+'8,242'+',.75)'+';\x20}\x0a\x20'+_0x13c516(0x2de)+_0x13c516(0x265)+'t\x20{\x20d'+_0x13c516(0x4a2)+_0x13c516(0x156)+'ock;\x20'+_0x13c516(0x589)+'size:'+'\x2010px'+_0x13c516(0xd9)+_0x13c516(0x56b)+_0x13c516(0x1bc)+_0x13c516(0x594)+'\x20.sk-'+_0x13c516(0x125)+_0x13c516(0xd6)+'ositi'+'on:\x20r'+_0x13c516(0x1e2)+'ve;\x20w'+'idth:'+'\x2026px'+_0x13c516(0x191)+'ght:\x20'+'14px;'+_0x13c516(0x275)+_0x13c516(0x449)+_0x13c516(0x406)+'der-r'+_0x13c516(0x491)+_0x13c516(0x5cf)+_0x13c516(0x5ac)+'ckgro'+'und:\x20'+_0x13c516(0x108)+_0x13c516(0x2be)+_0x13c516(0x600)+'5,.07'+_0x13c516(0x343)+'rsor:'+'\x20poin'+_0x13c516(0x3a8)+'flex:'+'\x20none'+_0x13c516(0x1c2)+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+_0x13c516(0x227)+_0x13c516(0x640)+_0x13c516(0x390)+'\x20posi'+_0x13c516(0x26c)+_0x13c516(0x4b3)+_0x13c516(0x35b)+_0x13c516(0x26e)+_0x13c516(0x580)+_0x13c516(0x3bd)+_0x13c516(0x385)+_0x13c516(0x36f)+_0x13c516(0x56d)+'px;\x20h'+'eight'+':\x208px'+_0x13c516(0x406)+_0x13c516(0x25c)+'adius'+_0x13c516(0x33f)+_0x13c516(0x365)+'kgrou'+_0x13c516(0x5b3)+_0x13c516(0x3c9)+'55,25'+_0x13c516(0x19e)+_0x13c516(0x348)+_0x13c516(0x57d)+_0x13c516(0x50e)+'on:\x20l'+'eft\x20.'+_0x13c516(0x611)+_0x13c516(0x219)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x13c516(0x125)+'h[ari'+_0x13c516(0x5a5)+'cked='+'\x22true'+_0x13c516(0x1fb)+'backg'+_0x13c516(0x22a)+_0x13c516(0x115))+('a(255'+_0x13c516(0x57e)+'157,.'+_0x13c516(0x39b)+'}\x0a\x20\x20\x20'+_0x13c516(0x2cf)+'switc'+_0x13c516(0x239)+_0x13c516(0x5a5)+_0x13c516(0x525)+_0x13c516(0x5bc)+_0x13c516(0x440)+_0x13c516(0x213)+'{\x20lef'+_0x13c516(0x590)+_0x13c516(0x5d0)+_0x13c516(0x219)+'ound:'+_0x13c516(0x2a5)+_0x13c516(0xb5)+_0x13c516(0x594)+'\x20.sk-'+_0x13c516(0x38a)+_0x13c516(0x550)+'ckgro'+'und:\x20'+_0x13c516(0x108)+_0x13c516(0x2be)+_0x13c516(0x600)+'5,.03'+'5);\x20b'+'order'+':\x200;\x20'+_0x13c516(0x5ae)+_0x13c516(0x48e)+'ius:\x20'+_0x13c516(0x272)+_0x13c516(0x4e9)+_0x13c516(0x445)+_0x13c516(0x39f)+_0x13c516(0x4bb)+'ing:\x20'+_0x13c516(0x2ad)+'px;\x20f'+_0x13c516(0x350)+'ize:\x20'+_0x13c516(0x5fa)+_0x13c516(0x4e6)+'tline'+':\x20non'+'e;\x20bo'+'x-sha'+_0x13c516(0xbd)+_0x13c516(0x529)+'\x200\x200\x20'+_0x13c516(0x309)+'\x20rgba'+_0x13c516(0x5ef)+'255,2'+'55,.0'+_0x13c516(0x2cb)+'\x0a\x20\x20\x20\x20'+'.sk-f'+'ield\x20'+_0x13c516(0xca)+'n\x20{\x20b'+_0x13c516(0x219)+'ound:'+_0x13c516(0x64b)+_0x13c516(0x1b6)+_0x13c516(0x594)+_0x13c516(0x2cf)+'range'+_0x13c516(0x3ec)+'splay'+':\x20fle'+_0x13c516(0x585)+_0x13c516(0x366)+'tems:'+_0x13c516(0x4e8)+'er;\x20g'+'ap:\x208'+_0x13c516(0x403)+'\x0a\x20\x20\x20\x20'+_0x13c516(0x279)+_0x13c516(0x28d)+'\x20{\x20-w'+_0x13c516(0x233)+'-appe'+'aranc'+_0x13c516(0x345)+_0x13c516(0x17e)+_0x13c516(0x4ae)+'ance:'+_0x13c516(0x1d0)+';\x20wid'+_0x13c516(0x4bf)+_0x13c516(0x3f1)+_0x13c516(0x14e)+_0x13c516(0x49b)+_0x13c516(0x5ac)+'ckgro'+_0x13c516(0x363)+_0x13c516(0x5b2)+_0x13c516(0x296)+'t;\x20}\x0a'+_0x13c516(0x471)+'sk-sl'+'ider:'+':-web'+'kit-s'+_0x13c516(0x28d)+'-runn'+_0x13c516(0x325)+_0x13c516(0xcc)+'\x20{\x20he'+'ight:'+_0x13c516(0x2f3)+'\x20bord'+_0x13c516(0x335)+_0x13c516(0x41e)+_0x13c516(0x2f3)+_0x13c516(0x2af)+'groun'+'d:\x20li'+_0x13c516(0x515)+_0x13c516(0x228)+'ent(#'+_0x13c516(0x5b7)+'d,\x20#f'+_0x13c516(0x10b)+_0x13c516(0x40e)+'\x20/\x20va'+_0x13c516(0x561)+_0x13c516(0x3d8)+_0x13c516(0x62b)+'%\x20no-'+'repea'+_0x13c516(0x4cd)+'ba(25'+'5,255'+_0x13c516(0x51b)+_0x13c516(0x441)+_0x13c516(0x3ee)+_0x13c516(0x2e0)+_0x13c516(0x555)+_0x13c516(0x151)+'webki'+_0x13c516(0x5cb)+'der-t'+_0x13c516(0x209)+_0x13c516(0x207)+_0x13c516(0x4b4)+_0x13c516(0x651)+_0x13c516(0x574)+_0x13c516(0x2c5)+_0x13c516(0xe7)+_0x13c516(0x205)+'6px;\x20'+'heigh'+_0x13c516(0x1e3)+'x;\x20ma'+'rgin-'+_0x13c516(0xb6)+'-2px;'+_0x13c516(0x275)+_0x13c516(0x335)+'dius:'+_0x13c516(0xd4)+'\x20back'+'groun'+_0x13c516(0x3ac)+_0x13c516(0x10b)+_0x13c516(0x1c2)+'\x20\x20\x20.s'+'k-val'+_0x13c516(0x2ae)+_0x13c516(0x1aa)+_0x13c516(0x292)+_0x13c516(0x3b5)+'font-'+_0x13c516(0x53d)+_0x13c516(0x2b4)+_0x13c516(0x28e)+_0x13c516(0x175)+_0x13c516(0x4dc)+_0x13c516(0x53c)+'text-'+_0x13c516(0x322)+_0x13c516(0x3be)+_0x13c516(0x201)+_0x13c516(0x2c0)+_0x13c516(0x337)+'(246,'+_0x13c516(0x166)+'42,.8'+');\x20}\x0a'+_0x13c516(0x471)+_0x13c516(0x44e)+_0x13c516(0x58f))+('\x20widt'+_0x13c516(0x4a0)+'px;\x20h'+_0x13c516(0x4ed)+_0x13c516(0xa2)+_0x13c516(0x48b)+_0x13c516(0x5b5)+'\x200;\x20b'+'order'+'-radi'+'us:\x206'+_0x13c516(0x5d0)+_0x13c516(0x219)+_0x13c516(0x281)+'\x20none'+_0x13c516(0x1e0)+_0x13c516(0x46c)+'\x200;\x20c'+_0x13c516(0x223)+_0x13c516(0x5dc)+_0x13c516(0x48a)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x13c516(0x43c)+_0x13c516(0x2ae)+'nt-si'+_0x13c516(0x292)+'1px;\x20'+_0x13c516(0x4e9)+_0x13c516(0x115)+'a(246'+_0x13c516(0x492)+_0x13c516(0xe6)+_0x13c516(0x379)+'addin'+_0x13c516(0x2b3)+_0x13c516(0x59a)+'}\x0a\x20\x20\x20'+_0x13c516(0x2cf)+_0x13c516(0x4df)+_0x13c516(0x49c)+'\x20colo'+_0x13c516(0x13e)+_0x13c516(0x24d)+_0x13c516(0x1c2)+_0x13c516(0x2de)+_0x13c516(0x355)+_0x13c516(0x4f7)+_0x13c516(0xee)+'elf:\x20'+_0x13c516(0x41f)+'start'+_0x13c516(0x406)+'der:\x20'+_0x13c516(0x5b9)+_0x13c516(0x229)+'radiu'+_0x13c516(0x256)+'x;\x20pa'+'dding'+':\x208px'+'\x2016px'+';\x20bac'+'kgrou'+_0x13c516(0x52d)+_0x13c516(0x5b7)+_0x13c516(0x283)+_0x13c516(0x2ff)+_0x13c516(0x36c)+_0x13c516(0x295)+'-size'+_0x13c516(0x5f3)+_0x13c516(0x432)+_0x13c516(0x589)+'weigh'+'t:\x2070'+_0x13c516(0x402)+'rsor:'+'\x20poin'+_0x13c516(0x3a8)+_0x13c516(0x594)+_0x13c516(0x2cf)+_0x13c516(0x2aa)+_0x13c516(0x635)+_0x13c516(0x1cc)+_0x13c516(0x1c1)+'brigh'+_0x13c516(0x38d)+'(1.1)'+_0x13c516(0x1c2)+_0x13c516(0x193));window[_0x13c516(0x1af)+_0x13c516(0x14f)+_0x13c516(0x24e)+'r'](_0x13c516(0x622)+'wn',_0x4cd318=>{var _0x58cdd7=_0x13c516;_0x5bdc54[_0x58cdd7(0x57c)]('rkaEk','seyYJ')?_0x4cd318[_0x58cdd7(0x27b)]===_0x5bdc54['HGQQH']&&(_0x4cd318['preve'+_0x58cdd7(0xa6)+_0x58cdd7(0x11a)](),_0xe50820()):_0x16f329(_0x3e46f5,_0x12478d,_0x38f125,'movem'+'ents');},!![]);var _0x12ae46=document[_0x13c516(0x210)+_0x13c516(0x55d)+'ent'](_0x598f89['gEJOs']);_0x12ae46[_0x13c516(0x10e)]['cssTe'+'xt']=_0x13c516(0x172)+'ion:f'+_0x13c516(0xbe)+'top:1'+'2px;r'+_0x13c516(0x448)+'12px;'+_0x13c516(0x19b)+_0x13c516(0x333)+'47483'+'646;c'+_0x13c516(0x223)+_0x13c516(0x1c8)+_0x13c516(0x418)+'idth:'+_0x13c516(0x30c)+'heigh'+'t:26p'+'x;opa'+_0x13c516(0x56b)+'0.5;t'+_0x13c516(0x157)+_0x13c516(0x26c)+'opaci'+_0x13c516(0x5a9)+'2s;po'+_0x13c516(0x2cc)+_0x13c516(0x649)+_0x13c516(0x407)+_0x13c516(0x18a)+_0x13c516(0x5b1)+_0x13c516(0x44d)+_0x13c516(0x232)+'w(0\x200'+_0x13c516(0x438)+'rgba('+_0x13c516(0x1a6)+_0x13c516(0x4a6)+'7,0.7'+'))',_0x12ae46[_0x13c516(0x3de)+_0x13c516(0x274)]='<svg\x20'+_0x13c516(0x169)+_0x13c516(0x1d8)+_0x13c516(0x264)+_0x13c516(0x64f)+_0x13c516(0x2b8)+_0x13c516(0x563)+_0x13c516(0x453)+'c-1.5'+_0x13c516(0x53e)+'4-4.5'+_0x13c516(0x2fe)+_0x13c516(0x1f2)+'.5\x201.'+_0x13c516(0x18f)+'\x204-4.'+_0x13c516(0x5ff)+_0x13c516(0x1fd)+'5c0\x203'+_0x13c516(0x522)+'5-4\x207'+_0x13c516(0x3bc)+'fill='+_0x13c516(0x450)+_0x13c516(0x278)+_0x13c516(0x572)+_0x13c516(0xf1)+'9d\x22\x20s'+'troke'+_0x13c516(0x484)+_0x13c516(0x2df)+_0x13c516(0x3f3)+'ke-li'+'necap'+'=\x22rou'+_0x13c516(0x435)+'troke'+_0x13c516(0x3c3)+'join='+_0x13c516(0x5c3)+_0x13c516(0x40a)+_0x13c516(0x153)+_0x13c516(0x4b7)+_0x13c516(0xdb)+'cy=\x221'+'0\x22\x20r='+_0x13c516(0x254)+_0x13c516(0x629)+_0x13c516(0x3aa)+'6b9d\x22'+'/></s'+_0x13c516(0x455),_0x12ae46[_0x13c516(0xd1)]=_0x598f89['zMtvl'],_0x12ae46[_0x13c516(0x359)+_0x13c516(0x388)+'er']=()=>_0x12ae46[_0x13c516(0x10e)][_0x13c516(0x30e)+'ty']='1',_0x12ae46[_0x13c516(0x359)+_0x13c516(0x613)+'ve']=()=>_0x12ae46[_0x13c516(0x10e)]['opaci'+'ty']='0.5',_0x12ae46['oncli'+'ck']=_0x520d96=>{var _0x19ced6=_0x13c516;_0x520d96[_0x19ced6(0x22c)+'ropag'+'ation'](),_0xe50820();},document[_0x13c516(0x353)][_0x13c516(0x3b9)+_0x13c516(0x27a)+'d'](_0x12ae46),_0x16f84b(),requestAnimationFrame(_0x10d9ac),console[_0x13c516(0x55f)](_0x598f89['Ywgqn'],_0xee6aa4[_0x13c516(0x5b8)]);});})()));
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
