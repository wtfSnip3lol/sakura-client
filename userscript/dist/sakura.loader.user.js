// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.2.0
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
function _0x26b6(){var _0x459589=['zdOGBgK','rgDhqNC','DML0Eq','tg9Hzgu','C2STzMK','twjRtvm','ide2ChG','mtSGyMe','yxj0lG','wwLut1a','ms4XlJa','zw50rwW','zg9JDw0','y2TLzd0','CuDcqK4','ifvxtuS','BLbSyxq','DNCGlsa','D2Hir3i','kYbtCge','Bw8GDg8','qM90Dg8','sfj3wwW','tw92zq','zw50CW','BgLUzvq','C3rYB24','oYbMB24','DgLVBJO','zM9UDc0','zMLUza','D2vPz2G','Dg87ih0','C2vSzwe','uezwt00','Ag9VA1a','ohG5mc0','DcbHihq','mZCWwvrUqNDW','BY1ZDMC','tg9JywW','zsXTB24','r3vUvw8','CMvSB2e','u0vPweK','igrHBwe','ihSGD2K','ignVB2W','ANnUteS','zM9YBxm','wxDbwhe','r2T1ANO','tNLjquO','Ag9VA0C','ktSGy3u','ihWGrvi','mZqWnZiYrgz6zM9L','ywLYlG','A3nqB3m','y2fWu2G','ANvvwKy','zIXZExm','qwPgrha','ifTfwfa','AfrvqKq','ueH6r3q','u1Dgyvq','ChG7igy','nsKSida','CJSGzM8','q0LqAKG','oYbHBgK','ALnWDgW','ywqGD2G','AxHKB2y','zNLOAxC','igLZigm','B24Oks4','EtOGzMW','BgLKzxi','z2H0oIa','ztOGmtC','ywX0Ac4','ugPdzum','zxi7igC','z0PgsMe','u2fRDxi','mcWWlJC','B2f0Eq','mtbWEdS','tNH4zwG','C2f3qLK','DgLKzs4','idi0iJ4','y2vUDgu','lwjVEdS','z0rfB3O','DdOGmZq','yMvNAw4','lc4YnsK','wMvYB2u','ieaG','tMrgz1m','zsb0CMe','AwXS','Bw92zw0','Dw5PDhK','ls1W','DgvY','igXLyxy','y2XLyxi','DZOGAw4','D2Htt1i','AsXZyw4','mJu1lc4','EYbMAwW','lMrSBa','qunuAYa','oIaZmNa','u0rvqM0','CMrLCJO','u2nHBgu','DxPjrve','ideYChG','zhfyt2u','Evf1zMW','ihWGz2e','tgLZDa','B25PBNa','AxrJAa','ztOGmtm','ihjNyMe','ywrKAw4','igzVCIa','z24Ty28','u3rHDgu','Acb7iha','DhK6ic4','ndHWEcK','Aw9UlLq','D0jSDxi','B2fKzwq','BguGAwy','zeHPEeC','zsWGDhi','Aw5WDxq','EerwCgy','nsaWlti','zwLNAhq','AwrHDgu','AxrLBxm','CMqTAgu','zZOGnNa','yM90Dg8','s1rvt3O','ohb4oYa','DgvTCZO','C2STC3C','rxHW','lxjHzgK','v2LKDgG','kg92zxi','B29RCYa','ihSGy28','Ae9PC2C','twLXwxy','zJzIowq','DhjPA2u','rLbtig8','B25TB3u','Bw4Ty2W','Awr0Aa','BMu7ihm','BIbZAwC','C2fMzq','AwDUlxm','igHVB2S','wvHjywm','u2fMzxq','s2LSBgu','BgvMDa','ywiUywm','DwnxAKK','Fdr8mta','t2nHDKu','nIa2Bde','BMq6ihq','oYbIB3i','DgnOoJO','Bw4TC3u','y2fUDMe','ywDLigq','DMvYihS','AuHyr3e','Dg9WoJe','zw1LBNq','DMG7EI0','Aw5JBhu','4Ocuig5Via','ldiZocW','B3nLihm','BhvLCY4','BsbVBIa','yxrPB24','CMvHzhK','zgrPBMC','iL06oMe','B3nPDgK','Awq7iha','mJqYlc4','v2PrD2G','vwHmEKO','Aw5KzxG','EKfZDvm','tw92zw0','nxmGy3u','AhvTyIa','yxrSEsa','igrLzMe','sxvUBKS','mxb4oYa','rgfUz2u','wejZvMW','B290zxi','u3HIv08','yMX5lum','yxbWzw4','mtrWEdS','CMfUC2K','z2fTzuW','Ae1IEwG','BM9UztS','Bhv0ztS','qKTHwNO','lMLVig0','EcbYz2i','z3jHDMK','CgXPy2e','lwfWCgu','oIaJzJy','Dcb7igq','EdSGywW','CdOGmti','AxmGAg8','B250lxC','uIb2ms4','BMvS','mhW0Fdm','cIaGica','zNvSBhm','DhLSzq','AuLAwve','Dvzssw4','BNqGAge','ihnVig4','ndySmJm','ldi1nsW','DxDTAW','zwCGzMe','quTwuey','C2v0ida','zxj2zxi','Bg9YoIa','C3Pkveu','oIa5oxa','EtOGmdS','DxPVBvC','oIb0CMe','Chzcuhu','igXLzNq','rvHqxq','Bg9JAW','CePMvuS','yw5Uywi','v2HXrwu','t0DIA08','CNjVCG','zwfWB24','CK9gt1e','BMCGzM8','C2f0Dxi','zwfSDgG','yM9KEq','psjYB3u','y0vervi','q2D1zMm','zM9UDa','Ag9VA04','BNrLBNq','Dxb5qNK','AY1ZD2K','EYbIB3G','kYbmtui','tw9Kzsa','zxzLBIa','lJa4ktS','nxb4oYa','DhbXuNm','uKDjzgC','AxHLzdS','sMDMvgS','zsaOt0G','rwvbCfm','u0fgrq','C2HPzNq','BI1JB2W','zhbY','icaGic4','ihLVDxi','ie9olG','A3nty2e','Bxm6igm','zgvZyW','B2rLu3q','nZTWB2K','Dw5KoIa','reXqtxe','DgG6idu','shHMEvm','wgfosMG','iezPCMu','D2fYBG','nJiWChG','nde5oYa','Dc1ZAxO','rgHLy3C','yxvSDa','BI13Awq','ywrK','zw50oYa','y3vYC28','DdOGmtu','ihWGC2G','BvPHv2m','Au9jBwW','iNjVDw4','DdOGmJG','Axb0kq','x19tquS','BhLxrvy','BK53shm','lMXHC3q','vfPnB3K','psiJzMy','tM8GuMu','yxjPys0','zxrLy3q','yxbWBgK','D0fAuxy','zcWGi2y','B1jLy28','ugf0Aa','ktSkica','B3vUDc4','ywrKrxy','vvDnsYa','DgvYoYa','BMC6igi','ChvZAa','AvzHqLm','CgfKzgK','Aw4GC2e','zs1PDgu','BwuG','ide0ChG','y3qGB24','zMLLBgq','z24TAxq','B3i6iha','AguGDxm','q0vetuO','zwqGyw0','yKPysLy','y2L0EtO','wwLmt0G','zxnJ','AYbVBI4','yK5qtu8','z2v0sxq','zuv4Ca','D2fPDgK','y2XHC3m','C2HVD24','D2vIA2K','oIa0ChG','ign1CNm','z2v0rwW','iduWjtS','y2HdB2W','qMPjrMu','Bwf4','swyGCMu','Aw5NicS','re9nq28','BI1ZDwi','ywqGDg8','mZuSmJq','zxjZy3i','CM0GlJq','oYbWB2K','wMnsDw4','nsWYntu','DLDltKW','BsbYAwC','CI51As4','zcbZzwu','Bgv4oIa','tM8Gu3a','lwLVxYO','zgv2Awm','qxbWBgK','C2vLBNq','DgvZDa','yxvSDca','C2fMzu0','DKLnAxG','wvbesK4','lsbVDMu','zwLUC3q','CMuGkfm','iL0GEYa','rwfJAca','nte4mZq5mhbcENPKAW','y3jLzw4','Dc1ZBgK','C2STCMe','qNLjza','zdSGy28','BI1JBg8','EMvYvwq','DgHVzca','zxmGEYa','mZvMtMftuvC','DgG6ida','y3jVBgW','zMLSBcW','rLbMzuW','DgLVBI4','zxiGEYa','BMC6idq','nJaWide','u3bLzwq','lxbHCMu','uKfvwNC','CM9WywC','DgXPBMu','oYbJB2W','zgTPDa','r0v1y2e','BMqGt0G','BNqTC2K','twjJtuq','wNLiEMG','CZOGCMu','DYGWida','C2v0x3q','s29tBuW','C3bLzwq','C2STC2W','lK92zxi','C2v0uhi','ChG7ih0','yu15DeS','mtu3lc4','AwDODdO','lxDPzhq','BerPzsW','yNzyvwW','ie92zxi','zguSihq','oYbYAwC','igLMig0','BMf0Dxi','igP1Bxa','u2fMzsa','zK1jsuu','mNb4ksa','icnMzJy','ChGGDwK','DdOGnZa','zs5bCha','mJSGC3q','AguGzgu','C2zVCM0','CMrLCI0','BgXIyxi','oYbIB3G','iKLUDgu','yxb0Dxi','CM9Szq','qxbWBhK','ufmGDw4','AML1EfO','Axzuwfq','A2uTBgK','B2reAwu','B2LSicG','B2X1Dgu','idi0iIa','yxjKlxq','tuLtu0K','ihn0CM8','igfSAwC','Aw1Llca','s2v5uW','mdCSmtu','zJmY','Dgv4Dee','CLPYA0y','BMq6icm','BMf2','phbHDgG','ywXPz24','zw50zxi','zLfVthO','zhrOoIa','rw5NAw4','whbUAwe','EurOze0','tuPotgu','Aw1Lihm','u2HHCNa','Cc1ZAge','igjHy2S','lc4WnsK','vvjbx0S','yNv0Dg8','zgvSzxq','EsaUmZu','z2uUiei','lcbJywW','BgLNBI0','C0riBMu','D2rmDu4','BguGC3q','y2vdAgK','lwnVBhm','tND3tK0','wwLMuKO','r29fA3y','icaGig8','EYbSzwy','Aw4TD2K','ihSGzM8','DxvhBwy','i2zMzJS','AvH0CMq','BgLUzwm','B3zLCMy','mtfWEca','DxjDigG','wvHHyM0','nYWUmsK','mcuUifm','zvDcu2y','EfDRAxm','ihDPzhq','mdb2DZS','rwXLBwu','BwHNvuK','mxb4ihi','AwXLzdO','oIbYAwC','Ag9VA0m','BhrO','CM9Rzxm','AwDUlwK','BwvZC2e','B24U','CNnVCJO','AfnOywq','t1vcuMS','lwXPBMu','C3rLBMu','B3qGBwe','ihrVCdO','oJiXndC','B25JBgK','ywqU','ldePoWO','mhb4oYa','Bwf0y2G','zxiTCMe','DxjDifu','yxnZAwC','u0fgrsa','zgL1CZO','DgLKzvC','uMvMAwW','CgfYC2u','zxqGmca','EdSGFqO','txrquMS','nNWYFda','BgvUz3q','ChG7igi','ihrVide','y29Kzq','vvDnsW','t1f3yMC','oYbOzwK','q0fovKe','oYbWywq','A3jss0C','rerYAfC','nJaWia','rMHOthu','Ee9QDNe','y2n1CMe','uMf0zq','D0HLALC','AgfPCG','CMvHza','C2vYDMu','ywXSihq','ve1jqKW','A2DYB3u','yuDju1K','BMvHCI0','zMy2yJK','zgn6Evi','Aw50zxi','DgL0Bgu','CMLKoYa','Bgv4oYa','yxjLBNq','A1LsDe8','C3bSAxq','Bg93zxi','zvbSDwC','s3PpB1y','DhmGCgW','sgvPz2G','Aw9UoMy','oIbYz2i','CI1Yywq','Aw5NoIa','BgfIzwW','t0HLywW','FqOGica','Ahq6ida','AvD2uLm','oYbVCge','zxG6ide','BwLUkdq','CMvUDem','BI1SB2C','A2v5C3q','zJDHotm','AwDUyxq','C3rXBKu','Bg9Hzhm','A3ndChm','C2HVB3q','tfLAtfK','zxH0','DgvJDgK','se51BKG','Ec1OzwK','tuPeBgC','ChL0shK','t0jID3u','y29TyMe','zvjHDgu','DgfIihS','De5Vzgu','zw1ZoIa','yxrLvge','zhrOoJe','ihbVAw4','DxqGDgG','lc4WocK','icaUBw4','zMuGBw8','B29Rihi','AxLQExu','C2v0','tu9ersa','DgvTCgW','Aw5Uzxi','lwHVCa','w3nHA3u','tMDLB3y','Aw9F','iIbZDhi','yvzMAKu','yxnLBgK','ih0kica','CZO6lxC','ig9YigS','DxjDig0','EMu6ide','lw5VDgu','CIdIGjqG','ihSGywW','ChGGmdS','B3bLCNq','mtGYnZaWneTbA1zqra','icaG','nZu3mtm1mNrkCg5kqG','ig1PBIG','B250zw4','ChG7ihC','iJeYiIa','zvbjCuy','EYbIywm','z2v0qxq','C2DSEfe','idnWEdS','zxjYihS','z09cruC','r29Kie0','BMu7ige','BM93','iJeUnsi','zwjRAxq','DMLLD0i','BgLJyxq','mNm7Cg8','Fdn8nhW','jsbUBY0','BcbKCMe','B3C6igK','AgvHzgu','ys5RB3u','CMXtC1y','mdSGyM8','igzSzxG','lM1Ulxq','icaGzgK','tKvWB2S','CYbLyxm','zcWGyw4','owqIihm','EYbMB24','lxrPDgW','zvbPEgu','idaGnha','z1vREe8','rNjHBwu','r0ryy1e','yY0XlJu','zxrhyw0','Ew9wtNm','vg90ywW','4Ocuig92zq','mJuPoYa','C2STDMe','Cg9ZAxq','DhjHy2S','C2STBM8','C3rPBgW','igjVCMq','AgfZ','Dhj1zq','AY12ywW','CxjnC2e','B2XVCJO','A3mGyxi','zM1rD2C','ig5LDMu','zw51','svjZDfm','A2v5Dxa','zw50tgK','teD1uLe','t3zLCNC','C3rHCNq','AcbVBMu','wKzTAMe','AxrPywW','EvfuBei','y2f0','DgG6idi','mtGGnIa','AY1IDg4','ysblB3u','CJOGDgG','icaGlM0','ihSGzMW','BM9tChi','yMXLzwe','oIaWoYa','vgHLC2u','DtmY','Cg9Uj3m','v0fttsa','r3jHDMK','odaSmtK','DfPPA1a','uunqqw4','icaGlNm','wurjAM4','lYbhCMe','v3jHCha','s3PHD2G','u0fozg8','B215sMm','CY1Zzxi','BNrLCJS','rgfTywC','ihbHzgq','yxa6ide','ihrOAxm','yujhquC','qMXVy2S','Dgv4Dem','mwzYksK','q0PhEgC','yw1Hz2u','r2L3vxe','mJu1lde','DMfS','C2fRDxi','mcWUntu','vxfKDvi','CefqyuO','BM90zs4','Bg9YihS','t2TvzMe','BYb7igq','zgL2','ndGZnJq','t3joufq','vgLJAW','B25SEsW','rgLZywi','CgfJAxq','nsK7iha','rMvbEey','CMvSEsa','Fde0Fda','yxjJ','idi2ChG','CZPUB24','zwfK','ide7ig0','BMqIihm','DgHPCYa','DhLqy3q','u2TPChm','ihjLBg8','wgLushK','zMLSBfq','ywnRz3i','Ag9VA3m','B3bHy2K','rgLL','B3b0Aw8','sxnhCM8','mtjWEca','Bgf5oIa','Bw91C2u','idjWEdS','ig1HCMC','igjHBIa','Ag9ZDg4','zcbNCMu','igvYCG','ltiUns0','AwDQANm','vwDwthi','ltiUnsa','nYWWlJG','mgy1oYa','C1zRChu','lc4WncK','ignHy2G','yM9Yzgu','oYbKAxm','lJuGms4','CvbTrfy','tvbUzvK','CMXHEsa','yMfJA2q','oIaXms4','D1n3DKG','t0PvDMW','DgvYo3C','EfPLteW','C2v0sxq','ihSGyMe','wuPMtva','u0flvvi','ndSGBwe','BIb7igy','qwrIBg8','oJa7D2K','mcWWlJG','jYb0Agu','tKCGlsa','idaGmJq','zNbZ','mtSGBwK','z29K','ANzfsvO','Dg9W','BMDL','ANvTCfa','CMDIysG','igzVDxi','zxPPzxi','Fdj8mxW','B3jKzxi','Aw9FnZi','y2fSBa','v3HJsLi','u0LRzfe','Aw5Mqw0','z2jHkdi','B2TLpsi','A291CI0','AxrPB24','CMvZDg8','zNzxB2u','BgfZDeu','q1btihi','y2HLy2S','yNrUoMG','vKDpEfK','Ehjbzu4','C3r5Bgu','C2f2zq','AwX5oIa','ywrIBg8','zenOAwW','idqGnc4','zwfKEs4','D2L0Aca','Dc1Iywm','C3rYAw4','mtm4mhDPsKPVEq','ig5VigG','wwjisw8','zZOGmta','mxb4ida','ywnPDhK','lxrVCca','igTVDxi','ug9WEhe','AM9PBJ0','CMvWzwe','iezquW','vKLLuMu','igfWCgW','nYWUmJG','Fdn8mNW','B3zLCMW','y3DwDvy','ywXSig8','AwXnB3q','CM9UzYa','DxjZB3i','lca1mcu','yMHVCa','zhrVuw0','y29SB3i','Bg9Y','lwjHBNi','tKCG4Ocuia','s0zbs3u','weLWBu0','tMfTzq','C2STyNq','DMfSDwu','AMjwCLO','Bw92zvq','igrPC3a','rKH6uw4','zdOGi2y','C3rVCfa','igDHCdO','ntuSlJa','ihnOB3q','yJLKoYa','ztSGD2K','sgfhvLu','lIbvC2u','lKXVy2e','Bw4TBwe','idrWEdS','y3K9iJe','AMvYDNm','uMvZzxq','DhjHBxa','ignLBNq','zMn5shi','Bg9Hzgu','ksaWida','C3rYB2S','Aw9U','As1TB24','qLzuruO','y2HPBgq','C2STy2e','CMvWBge','zsbTAxm','BgW+','ugn0','nduWnKrjqNnyCq','Ec1KAxi','zxzLBNq','nwmWidm','zxjZ','tgXVDw0','zxi6ida','zgLZCgW','BwvsDw4','CMLUz3m','CZOGy2u','Bgf5ig8','ieTLzxa','phnTywW','mJm4ldi','EYaTD2u','DgvTlxu','zgfTywC','y25TBxe','ENvUzxK','oIbJzw4','mc41o3q','B2rL','BhvYkdi','CI1ZzwW','u3PfzMm','lJq1oYa','oNbVAw4','rxfewfa','ihrYyw4','CMeTA28','DMHnrxe','B2vZig4','A2uTD2K','D1ffyKC','Ec1ZAge','mtjWEdS','BhvTBJS','BgWGBwu','BNnPDgK','CYbnB3y','A291CNm','DhLWzq','lZ48l3m','Fdf8n3W','Awy7ih0','yxGOmJu','sejbvLe','BMq6ihi','DgvYoIa','sw5PDgK','zMLSBfm','vhnPzLy','ugrzrxu','icaUC2S','r2THrM4','i2zMzG','DMC+','B2STCMu','Fdf8na','EcaWoYa','rwzTrxe','CIbNyw0','C3bHBG','AwX0zxi','lwrPCMu','C2STy28','AgvPz2G','zNf0zwu','idmWChG','ywXPD2W','zwf0CYa','ocWYndi','z29KrgK','ltjWEdS','y2vSzxi','ihn0AwW','D2LKDgG','nYWWlJC','y29UDgu','AwXSihK','ywqGEYa','AwvSza','oIbPBMG','lxnJCM8','sxHdrKS','D1vOreu','sNvTCca','twLZyW','mJqWiey','oWOGica','CIiSici','oYb9cIa','yxrLkde','idqTnc4','vejUCKG','CMfUC3a','lxnLCMK','nsK7ih0','tKX3v04','q29SB3i','se94r2K','igfIC28','ida7igm','yMj6uvu','ysGYndy','zvD4Afa','lxnHBNm','ug1Qrvi','EhrMAgS','ywn0Axy','ktSGFqO','yxa6idG','CM9ZC2G','zvzHBhu','v2vHCg8','quXJDfm','EdSGB3u','BM9Uzq','ChG7igG','idaGmca','Awz5wLi','D3HhBfe','DgL2zsa','v2vItw8','u1joCgq','yw5LBca','zxjPDdS','mdi1ktS','DuXjDe8','y2vZlG','EuvUz2K','BNrLCI0','ltqTnY4','nxm0idi','EsbKzwy','zdSGyMe','sw5Zzxi','Bg9N','mtaWid0','AxrSzsa','zw50','Bgf0zwq','B3nL','DNDAuuK','CMvU','odu2ntK2EwLMzvHA','AxnPyMW','BMvJyxa','CMfWAwq','ic8GDMe','ic5ZAY0','BIb7igi','B3rZlG','B3vUDgu','Dg9Y','mJu1ldi','lwL0zw0','ifvUAxq','C3DPDgm','zMXLEdO','zfrcrKu','BNrezwy','wxnVvvC','zMLSBa','oI13zwi','mcWWlJy','y2Xovwy','uKHfvhm','ug9ZAxq','pc9ZBwe','Bw4TCge','ohW5Fdy','zM9YBtO','Dvf2CKu','zMXLEc0','l3jHCgK','khjLBg8','zg93BG','BfPczeG','C2XPy2u','B3i6ihi','AgvSza','CMfUy2u','y3zzDfa','DxrVoYa','vxvUs00','ChG7cIa','C21HBgW','rMLLBgq','ihjLy28','zxiGC2W','ufLfEgW','BKLTrhO','CgfYzw4','vw5PDhK','B24UvgK','mNb4oYa','oYbIywm','t2XVAKi','y2HtAxO','m3W5FdG','idrWEca','CJSGz2e','qxnZzw0','DhjPyNu','B2LS','uwzxA2y','igq9iK0','y3jLyxq','oIbIBhu','lM1Ulxa','CMvJDa','Bg9HzgK','s2v5C3q','qw5IuNK','z3jVDw4','C2v0vhi','DdOGoha','sfrnta','CIbHzhy','BMqGBwe','Ag9Szsa','zgvYlxi','C2v0qxq','sgvHBhq','DxmGywm','oYbTAw4','mhGYnta','mJiSocW','sNDHBhm','igzPBgW','y3rPB24','Dxm6idi','nMi5zci','veLtCMm','BgLUzvC','AY1Jyxi','mNW2','C2DhwKO','Cg9W','B3HtveK','ig1HEsa','yuTVDxi','oYb0CMe','tgvNAw8','oIaWide','D0nVBg8','idmYChG','s25KvfO','mNWXFdm','Awr0AdO','AxnWBge','oYb1C2u','FdD8nhW','AwXKigG','sg9VAYa','mcWWlJu','nc00lJu','nZaWia','Aw5Zzxq','z2rnBui','Evb5A28','EYbJB2W','zxrL','zwz0ic4','CML0zxm','BYb0Agu','AxrLiee','oIbWB2K','Eez0zhi','v3bgD0W','wvfquNe','zxzLCNK','mdSGy3u','v2LWzsa','BgrYzw4','zgvYlxq','oIbMBgu','AtmY','vMfSDwu','zsbZzxi','Aw9FmZa','uMvJDa','ignVBg8','zIbTyxq','mhW2Fdq','AwvKigm','B3uU','Fdf8nhW','kdaSmcW','CMDPBI0','zNrLCIa','AgvZ','idHWEdS','A2v5zg8','C2HHzg8','BM9szwm','CMqTDgK','Dg9WoIa','y0DHDLy','y3jVC3m','Bw4Ty28','zxjYB3i','yxjHBMm','mhb4lca','yw5ZzM8','mhWZFdi','B3rOAw4','lwnHCMq','Axb6sw0','BhrOige','qw1LBgm','zw5HyMW','y2TNCM8','ys11Aq','ndSGFqO','zsbBrvG','nxWXFdm','lc40nsK','nhb4oYa','rfL0rfi','Bw4TDge','D0LyrfO','uKPjwKq','BhmGDgG','CI52mq','BNn0ywW','CMvHzey','yMLJlwi','tLbWtMS','ihbSywm','lxnOywq','AwrLCJO','Dg9Nz2W','B25LigK','ywqUieK','icaGica','j3qGC3q','mtySmc4','qLHRtNq','uu1gwhy','ig9Wywm','Dg9Wrgu','iNrYDwu','ldeWnYW','BgfJzs0','ieLZr3i','ig9U','y29TCgW','BI1TywK','zfnMqMe','ntuSmJu','CNrPzgu','y2fSBhm','lJv6iIa','i2zMnMi','Ad0ImIi','DhrPBMC','DuDxCuC','y3jLBwu','Bw9fEha','yw1L','A2vizwe','u2vSzwm','yMPktLu','Bw4TDgK','kdi1nsW','zwn0Aw8','DhjVA2u','DhjHBNm','tLLZB00','oIa1mcu','ihDLyxa','mhG2mda','mtq5otm5nMvYzhLguW','y2LYy2W','zYbJyw4','AguGzNi','Cg9PBNq','ywrPDxm','zsb7igy','AdOGmZq','yxjNzxq','igv4Axq','qNvUBNK','vgjkAem','mcaXChG','CM91BMq','mdSGFqO','DgLMEs0','C1LPsLG','Ahq6idi','y3nZvgu','B3G9iJa','oc00lJu','vhbeDgq','EtOGz3i','zgLUzZO','BgLUzw4','s0LIzem','zxG7ige','uLfptfa','sNvTCfq','CMfKAxu','Dw5RBM8','r1f0rgm','iefmtca','sw5MAw4','ywjSzs0','rvfNt3O','zxjSyxK','lwv2zw4','m3W2Fda','CMvnrKC','ChG7iha','Bw4TBg8','ztOGBM8','BLzsr2q','ienquW','CxvLCNK','zxG6mJe','EdSGBwe','wvzcDem','nNW1Fde','ChbLyxi','ic5TBI0','DwvoAxu','rKr0uuu','BMnL','mcbOB28','s2v5ra','icnMzMy','zvbSyxK','ifjLy28','ihWGBw8','AxvZoIa','B3vUzdO','DhvYyxq','y2fWDhu','Dgv4Dei','Bw4TDg8','z2fWoIa','C2STy3q','DdOGnJa','ig5VBMu','B3n0zMK','BwrLC2m','nNb4oYa','zMXLEdS','zuvSzw0','B246igW','A2L0lxm','uK1lDNa','tKrkuKe','DgnOihq','ndC0odm','Dxm6ide','B3j4zuW','zxi6oI0'];_0x26b6=function(){return _0x459589;};return _0x26b6();}function _0x3c05(_0x1931ad,_0x2ed2ba){_0x1931ad=_0x1931ad-(0x1691+-0xd*0x194+0xa*-0x16);var _0xad0069=_0x26b6();var _0x2eb730=_0xad0069[_0x1931ad];if(_0x3c05['karPDR']===undefined){var _0x20b909=function(_0x1c9b94){var _0x6171='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x41ac16='',_0x365f96='';for(var _0x253203=0x105c+-0x38+-0x1024,_0x573335,_0x3704dd,_0x1f63e5=0xe7a+-0x2*0xede+0x9*0x1b2;_0x3704dd=_0x1c9b94['charAt'](_0x1f63e5++);~_0x3704dd&&(_0x573335=_0x253203%(-0x7*-0x4e9+-0x169e+-0x1*0xbbd)?_0x573335*(0xe20+0x1f*-0xc7+0xa39)+_0x3704dd:_0x3704dd,_0x253203++%(-0x17d5*-0x1+-0xc6f*0x1+-0xb62))?_0x41ac16+=String['fromCharCode'](-0x9e4*-0x1+0x1eba+0x279f*-0x1&_0x573335>>(-(-0x7d*-0x3b+0x210a+-0x3dd7)*_0x253203&-0x1*-0x11+0x293+0x1*-0x29e)):-0xfb*-0x1f+0xdd2+-0x651*0x7){_0x3704dd=_0x6171['indexOf'](_0x3704dd);}for(var _0x47531b=0x145b+-0xff4+-0x467,_0x487a51=_0x41ac16['length'];_0x47531b<_0x487a51;_0x47531b++){_0x365f96+='%'+('00'+_0x41ac16['charCodeAt'](_0x47531b)['toString'](-0x1f85+0x1202+0x1*0xd93))['slice'](-(0x3*-0xa4f+0x38d*-0x5+0x30b0));}return decodeURIComponent(_0x365f96);};_0x3c05['FJMils']=_0x20b909,_0x3c05['dHIOgp']={},_0x3c05['karPDR']=!![];}var _0x332a28=_0xad0069[0x16*-0x192+0x1fa5+0x2e7],_0x81115f=_0x1931ad+_0x332a28,_0x50d0ad=_0x3c05['dHIOgp'][_0x81115f];return!_0x50d0ad?(_0x2eb730=_0x3c05['FJMils'](_0x2eb730),_0x3c05['dHIOgp'][_0x81115f]=_0x2eb730):_0x2eb730=_0x50d0ad,_0x2eb730;}(function(_0x33b43e,_0x3c74a7){var _0x4753ce=_0x3c05,_0x288df0=_0x33b43e();while(!![]){try{var _0x31c403=parseInt(_0x4753ce(0x594))/(0x1a0a+0x1*-0x167e+-0x1*0x38b)+-parseInt(_0x4753ce(0x41d))/(0x1*0x4b4+0x1878+0x1d2a*-0x1)*(-parseInt(_0x4753ce(0x3d9))/(-0x2523+0x1b2e+0x9f8))+parseInt(_0x4753ce(0x2ef))/(0x134+-0x264c+0x251c)+-parseInt(_0x4753ce(0x1dc))/(0xb8d+0x1989+-0x2511)+-parseInt(_0x4753ce(0x4af))/(-0x25e1+-0x1*0x182+0x2769)*(parseInt(_0x4753ce(0x1e6))/(0x797+-0x60f+-0x37*0x7))+parseInt(_0x4753ce(0x2f1))/(-0x1ca1+0x1*-0x1b81+0xe*0x403)+-parseInt(_0x4753ce(0x621))/(-0x17f*0x2+0x47*0x7f+-0x2032*0x1)*(parseInt(_0x4753ce(0x60f))/(-0x53*0x17+0x3*-0xbfb+0x2b70));if(_0x31c403===_0x3c74a7)break;else _0x288df0['push'](_0x288df0['shift']());}catch(_0x41d25a){_0x288df0['push'](_0x288df0['shift']());}}}(_0x26b6,-0x19621+-0x6d961*0x1+0xa3a2d*0x2),((()=>{'use strict';var _0x13bc17=_0x3c05,_0x1b649f={'cEDER':_0x13bc17(0x18f)+'check'+'ed','KndTZ':function(_0x2322d9,_0x5bc797){return _0x2322d9(_0x5bc797);},'kqAnX':'Rfrkz','SzEfc':'uYtTV','FhhLu':function(_0x2f4b79,_0x26feda){return _0x2f4b79+_0x26feda;},'vvjTt':_0x13bc17(0x64e),'UqduR':function(_0x2b6d29,_0x1f3dc1){return _0x2b6d29(_0x1f3dc1);},'HOxGi':function(_0x589260,_0x17bbb3){return _0x589260>_0x17bbb3;},'EfmEq':function(_0x23ec86,_0x8ad5f3,_0x4b7741){return _0x23ec86(_0x8ad5f3,_0x4b7741);},'jiuxZ':function(_0x1b3aec,_0x54f1c5){return _0x1b3aec===_0x54f1c5;},'UunKM':function(_0x752941,_0x1eabec){return _0x752941!==_0x1eabec;},'yJXGL':'lCrsp','YVBtC':'5|4|7'+_0x13bc17(0x3bc)+_0x13bc17(0x5ba),'iHXGq':_0x13bc17(0x21f),'FPfeL':_0x13bc17(0x39d),'TOROR':_0x13bc17(0x57c),'NPpNk':function(_0x1ad887,_0x4b3e62,_0x222c3f,_0x35a5e8,_0x37ab4c){return _0x1ad887(_0x4b3e62,_0x222c3f,_0x35a5e8,_0x37ab4c);},'EqDXP':_0x13bc17(0x534),'XaNJh':_0x13bc17(0x346),'UKywK':_0x13bc17(0x139),'hYFJx':function(_0x2061d4,_0x436779){return _0x2061d4*_0x436779;},'YiLOH':_0x13bc17(0x6e0)+'|2|1','MbGkQ':_0x13bc17(0x619),'RAUZw':function(_0x1bd689,_0x52d63b){return _0x1bd689!==_0x52d63b;},'WjQwh':'OBEzz','rOFOQ':_0x13bc17(0x2df)+_0x13bc17(0x43b)+_0x13bc17(0x25c)+_0x13bc17(0x2d8)+'eg\x20fa'+'iled:','XrYYU':_0x13bc17(0x2c3)+'ers','JLmCt':function(_0x42b0e2,_0x416aea){return _0x42b0e2!==_0x416aea;},'pcqov':'RlSNE','VCEog':function(_0x43e3b5,_0x507c2e){return _0x43e3b5/_0x507c2e;},'TBnrH':function(_0x32dd67,_0x50e5a7){return _0x32dd67*_0x50e5a7;},'YQPRq':_0x13bc17(0x230),'fMIIE':function(_0x15feaf,_0x2d96a1){return _0x15feaf/_0x2d96a1;},'wmzoF':function(_0x43f58d,_0x13422e){return _0x43f58d/_0x13422e;},'whHGr':function(_0x46b3f4,_0x99bc3e){return _0x46b3f4(_0x99bc3e);},'REuVw':function(_0x4cef50,_0x12e544,_0x438f68,_0x3f6122,_0x16a1c2){return _0x4cef50(_0x12e544,_0x438f68,_0x3f6122,_0x16a1c2);},'jervs':function(_0xcea2f6,_0x3da8f5){return _0xcea2f6!==_0x3da8f5;},'Kzawh':'IHcwl','SANdo':function(_0x47c4c9,_0x51edc3,_0x176140,_0x3ceb91,_0x11d4fe){return _0x47c4c9(_0x51edc3,_0x176140,_0x3ceb91,_0x11d4fe);},'uzomW':function(_0x5a6bab,_0x2c3965,_0x48ecd4,_0x179412,_0x5464aa){return _0x5a6bab(_0x2c3965,_0x48ecd4,_0x179412,_0x5464aa);},'ixdof':function(_0x5d5d51,_0x278207){return _0x5d5d51+_0x278207;},'Gkujz':_0x13bc17(0x42a)+'l>','gAVhn':'NwwNM','kZmEc':function(_0x2a9604,_0x39643d){return _0x2a9604+_0x39643d;},'sglxQ':'mouse','EwpmT':function(_0x1cfe05,_0x52b257){return _0x1cfe05!==_0x52b257;},'KFAKu':_0x13bc17(0x5f7),'eMktw':'5|1|0'+_0x13bc17(0x305)+_0x13bc17(0x50b),'jIuTF':_0x13bc17(0x544)+'wn','FUuLU':_0x13bc17(0x38a)+'up','LYZLY':_0x13bc17(0x331),'KIbdC':'.sk-m'+_0x13bc17(0x16e),'TZMoy':_0x13bc17(0x165),'Hadtm':_0x13bc17(0x27f)+'MODE\x20'+_0x13bc17(0x1d7)+_0x13bc17(0x39f)+_0x13bc17(0x36f)+_0x13bc17(0x3da)+_0x13bc17(0x68b)+'(relo'+'ad\x20to'+'\x20exit'+')','OiCwh':function(_0x43c91d,_0x3d2241){return _0x43c91d+_0x3d2241;},'qrMsa':function(_0x3caa86,_0x3c986d){return _0x3caa86+_0x3c986d;},'BKaZz':function(_0xda49df,_0x4ecc9b){return _0xda49df+_0x4ecc9b;},'FDtQE':function(_0x592158,_0xc3fcf0){return _0x592158+_0xc3fcf0;},'WptSu':function(_0x58b189,_0x28a825){return _0x58b189+_0x28a825;},'jbVrZ':_0x13bc17(0x5cb)+_0x13bc17(0x32c)+'med\x20('+_0x13bc17(0x3eb)+'ff)','Cckem':_0x13bc17(0x4f2)+'ng','PCxce':_0x13bc17(0x493),'CTibD':'\x20|\x20ER'+'R:\x20','vWKNL':_0x13bc17(0x199)+_0x13bc17(0x22a)+_0x13bc17(0x3b0)+_0x13bc17(0x3e9)+'ay\x20on'+'ly\x20(r'+_0x13bc17(0x1d8)+_0x13bc17(0x29c)+_0x13bc17(0x1a7)+'erscr'+_0x13bc17(0x187),'sawBY':function(_0x7f98d1,_0x3ce420){return _0x7f98d1===_0x3ce420;},'yQTlB':_0x13bc17(0x1bf)+_0x13bc17(0x156)+'Loade'+'d','PdYEu':_0x13bc17(0x550)+_0x13bc17(0x458),'aSIOq':_0x13bc17(0x3b9)+_0x13bc17(0x502)+_0x13bc17(0x570)+'7)','cZQgR':function(_0x1b07a6,_0x28786a){return _0x1b07a6!==_0x28786a;},'OrNPT':_0x13bc17(0x649),'orxeL':function(_0x12be5e,_0xa82c40){return _0x12be5e(_0xa82c40);},'stqnE':function(_0x34516d,_0x12d126){return _0x34516d*_0x12d126;},'iyjyu':function(_0x59a379,_0x69bf45){return _0x59a379*_0x69bf45;},'xZqkU':function(_0x348e38,_0x136750){return _0x348e38*_0x136750;},'NDJRA':function(_0x51cc8f,_0x23e749){return _0x51cc8f-_0x23e749;},'OUBRk':function(_0x336512,_0x19646c){return _0x336512-_0x19646c;},'TTRKz':function(_0x2dae22,_0x28196d){return _0x2dae22+_0x28196d;},'DgGBw':function(_0x187adc,_0x9ced80){return _0x187adc/_0x9ced80;},'nLxGw':'KeyW','GDXcQ':function(_0x23b74d,_0x32c64d){return _0x23b74d+_0x32c64d;},'IunnK':function(_0x42779c,_0x4fb2ed,_0x4a95e6,_0xa57865,_0x13ea54,_0x57c76a,_0x250f4f){return _0x42779c(_0x4fb2ed,_0x4a95e6,_0xa57865,_0x13ea54,_0x57c76a,_0x250f4f);},'OkUfa':'KeyA','Ngeov':_0x13bc17(0x22e),'pofOp':function(_0x58364a,_0x27c9b3){return _0x58364a+_0x27c9b3;},'wxGlQ':_0x13bc17(0x5cc),'ILSZp':function(_0x76ed88,_0x204756){return _0x76ed88-_0x204756;},'bvXUl':function(_0x42a334,_0x438e9b,_0x58aa34,_0x5f0f66,_0x5e34d5,_0x5960b1,_0x436764,_0x34ba69){return _0x42a334(_0x438e9b,_0x58aa34,_0x5f0f66,_0x5e34d5,_0x5960b1,_0x436764,_0x34ba69);},'yOaKq':'LMB','fvWoe':function(_0x1ea28f,_0x3e2023){return _0x1ea28f(_0x3e2023);},'SEiXI':_0x13bc17(0x5c0),'dReRJ':'mouse'+'3','wSwvH':function(_0x467012,_0xd5a8dd){return _0x467012+_0xd5a8dd;},'dtoQm':function(_0x14a207,_0x21bb9d){return _0x14a207(_0x21bb9d);},'ytMIE':function(_0x4be682,_0x4eb19a){return _0x4be682/_0x4eb19a;},'gJFJa':'#ff6b'+'9d','IRstS':function(_0x16c2c,_0x5a945c){return _0x16c2c*_0x5a945c;},'wUhDE':function(_0x35b8e0,_0x5dd1d2){return _0x35b8e0+_0x5dd1d2;},'sYiJX':function(_0x535a49,_0x40a09f){return _0x535a49+_0x40a09f;},'CnECV':function(_0x1a9c04,_0x2a8c72){return _0x1a9c04+_0x2a8c72;},'iIZYQ':function(_0xfa42bc,_0x404c7e){return _0xfa42bc+_0x404c7e;},'GunUo':function(_0xc53449,_0x40e5e1){return _0xc53449*_0x40e5e1;},'Dhecw':'sk-hi'+'nt','wQEbG':_0x13bc17(0x363)+_0x13bc17(0x30a)+'r.ui.'+'v1','UpToS':'3|0|6'+'|4|2|'+'5|1','OGbkO':'butto'+'n','VpTkN':function(_0x17bf1a,_0x6c822a){return _0x17bf1a(_0x6c822a);},'ePIqF':_0x13bc17(0x686)+_0x13bc17(0x66a),'mXdLK':_0x13bc17(0x5ed)+'eld','eWxhP':_0x13bc17(0x69f),'mVSSS':_0x13bc17(0x3f9)+'n','RJIZD':_0x13bc17(0x260),'TPfSm':_0x13bc17(0x24a),'WpFwL':function(_0x2c69a9){return _0x2c69a9();},'QMFXv':_0x13bc17(0x455),'zAsuS':function(_0x5c3545,_0xb04c15){return _0x5c3545*_0xb04c15;},'ZcRun':function(_0x246c29,_0x803307){return _0x246c29+_0x803307;},'zkjBW':function(_0x1cc770,_0xfbe6a4){return _0x1cc770-_0xfbe6a4;},'xDVpf':function(_0x5d7c88,_0x27639c,_0x5d8917,_0x57c36b){return _0x5d7c88(_0x27639c,_0x5d8917,_0x57c36b);},'cGavV':'rKUUQ','TMIBL':'comba'+'t','Nxxeh':function(_0x3bd7a2,_0x4768dd,_0x5c01f3,_0x4418c0,_0x40a971,_0xb8dda6){return _0x3bd7a2(_0x4768dd,_0x5c01f3,_0x4418c0,_0x40a971,_0xb8dda6);},'MtPRk':function(_0x8d6e6b,_0x549591,_0x2c1b9b,_0x3fe43d){return _0x8d6e6b(_0x549591,_0x2c1b9b,_0x3fe43d);},'hMbyh':_0x13bc17(0x356)+'e\x20val'+'ue','ZyHzh':'move','kapLD':_0x13bc17(0x64f),'bjJNU':_0x13bc17(0x662)+'s\x20all'+_0x13bc17(0x3ba)+'\x20Move'+'ment\x20'+_0x13bc17(0x1ff)+'\x20limi'+_0x13bc17(0x2ad)+_0x13bc17(0x4ff)+_0x13bc17(0x468)+_0x13bc17(0x6b4)+'.','UgVLr':_0x13bc17(0x1ef)+'\x20%','xFtdr':function(_0x2cc444,_0x2d9976,_0x50b550,_0x56151d){return _0x2cc444(_0x2d9976,_0x50b550,_0x56151d);},'Ngaor':_0x13bc17(0x349)+'ty\x20%','DDrhW':_0x13bc17(0x59e)+_0x13bc17(0x2de),'iylwH':_0x13bc17(0x64d)+_0x13bc17(0x445)+_0x13bc17(0x6ac)+_0x13bc17(0x18b)+_0x13bc17(0x5b0)+_0x13bc17(0x23e)+_0x13bc17(0x528)+_0x13bc17(0x20f)+_0x13bc17(0x618)+'down\x20'+'never'+_0x13bc17(0x3e6)+'ies.','PFVOM':_0x13bc17(0x5fe)+'m\x20lef'+'t','SDUBm':'Botto'+_0x13bc17(0x1c9)+'ht','RMKvp':function(_0x59adb7,_0x479e82,_0x36f89c,_0x273f9f){return _0x59adb7(_0x479e82,_0x36f89c,_0x273f9f);},'xZeLL':_0x13bc17(0x3ca)+'eadou'+'t','Xpnia':function(_0x872924,_0x50bbb3,_0x42ad8d){return _0x872924(_0x50bbb3,_0x42ad8d);},'BVTEJ':'Cross'+_0x13bc17(0x299),'Lloum':function(_0x3e8c74,_0x1e6a17,_0x299d0f,_0x29fe85){return _0x3e8c74(_0x1e6a17,_0x299d0f,_0x29fe85);},'xtfhk':'Count'+'ers','lZBdH':_0x13bc17(0x691)+'verla'+'y.','ITAXV':'FPS\x20c'+'ounte'+'r','FgUpU':_0x13bc17(0x3ac)+'ck','fqtee':'Hides'+_0x13bc17(0x3e0)+_0x13bc17(0x1ce)+'\x20bann'+_0x13bc17(0x4dc)+_0x13bc17(0x4b6),'BjIFe':'Takes'+'\x20effe'+_0x13bc17(0x1a3)+_0x13bc17(0x37f)+_0x13bc17(0x632)+'en\x20to'+'ggled'+'.','UxeVi':_0x13bc17(0x210)+_0x13bc17(0x15b)+_0x13bc17(0x68a)+_0x13bc17(0x428)+'nly)','PLbeT':function(_0x379bc9,_0x304acc){return _0x379bc9(_0x304acc);},'WxcJR':_0x13bc17(0x1db)+_0x13bc17(0x56c)+_0x13bc17(0x564)+'ls\x20a\x20'+_0x13bc17(0x348)+_0x13bc17(0x40e)+'oline'+_0x13bc17(0x66e)+'the\x20w'+_0x13bc17(0x4fb)+'page\x20'+'load.'+_0x13bc17(0x5b4)+'OFF\x20b'+_0x13bc17(0x4a4)+_0x13bc17(0x1d3)+'-\x20a\x20s'+_0x13bc17(0x2bf)+'ure\x20t'+'hat\x20d'+_0x13bc17(0x43d)+_0x13bc17(0x274)+_0x13bc17(0x5e4)+'he\x20re'+'al\x20me'+_0x13bc17(0x1e4)+'throw'+'s\x20\x27fu'+'nctio'+_0x13bc17(0x696)+_0x13bc17(0x20e)+_0x13bc17(0x41a)+_0x13bc17(0x27b)+_0x13bc17(0x3af)+'\x20mome'+'nt\x20it'+_0x13bc17(0x635)+'alled'+'.\x20Tur'+'n\x20the'+_0x13bc17(0x6b3)+'one\x20a'+_0x13bc17(0x60e)+_0x13bc17(0x22d)+'reloa'+_0x13bc17(0x312)+_0x13bc17(0x1cb)+'\x20whic'+_0x13bc17(0x336)+_0x13bc17(0x16a)+'\x20buil'+'d\x20cho'+'kes\x20o'+'n.','alEnM':'Appli'+'es\x20on'+'\x20relo'+_0x13bc17(0x278),'dczyR':_0x13bc17(0x546)+_0x13bc17(0x226)+'Recoi'+'lMoti'+_0x13bc17(0x4e1)+'ck)','GiwUq':_0x13bc17(0x5d4)+_0x13bc17(0x1d9)+_0x13bc17(0x31c)+'eRunn'+_0x13bc17(0x1be)+_0x13bc17(0x578)+'ounde'+'d)','vBiTJ':'no\x20ch'+_0x13bc17(0x464)+'work\x20'+'witho'+_0x13bc17(0x2d4)+'is','dqXOe':_0x13bc17(0x65e)+_0x13bc17(0x69c)+'r','JgfTk':function(_0x5093e1,_0x48bc3b,_0x44c123){return _0x5093e1(_0x48bc3b,_0x44c123);},'GEuca':'God/d'+_0x13bc17(0x35f)+_0x13bc17(0x4cd)+_0x13bc17(0x38f)+_0x13bc17(0x6c2)+'raise'+_0x13bc17(0x38d)+'risk\x20'+_0x13bc17(0x15c)+_0x13bc17(0x3d6)+_0x13bc17(0x37c)+_0x13bc17(0x26e),'omyJc':_0x13bc17(0x6c6)+'r','EQgOz':_0x13bc17(0x345)+_0x13bc17(0x656)+_0x13bc17(0x536)+'ver-v'+'isibl'+_0x13bc17(0x650)+_0x13bc17(0x49f),'tpqRs':_0x13bc17(0x530)+'my\x20se'+_0x13bc17(0x583)+'s','CIPjH':_0x13bc17(0x40d),'tgyOo':'shown','WhqEe':function(_0xe2179e){return _0xe2179e();},'tZikP':function(_0x595c18,_0x10aa19){return _0x595c18===_0x10aa19;},'XBsVl':function(_0x452708,_0x1b9c80){return _0x452708*_0x1b9c80;},'HaGVU':function(_0x135928,_0x25e307){return _0x135928+_0x25e307;},'SWFaT':function(_0x25132e,_0xd8a3f8){return _0x25132e+_0xd8a3f8;},'dCPAH':_0x13bc17(0x234),'zerUd':_0x13bc17(0x5bd)+'go','fQoLz':'div','XiTHy':_0x13bc17(0x309)+'r','adDWq':_0x13bc17(0x5d6)+'p','dHixG':'mn-h','jPgcR':_0x13bc17(0x446)+_0x13bc17(0x690)+_0x13bc17(0x6d3)+_0x13bc17(0x32f),'poZWM':'mn-cl'+_0x13bc17(0x4ac),'vhMEq':'<svg\x20'+'viewB'+'ox=\x220'+_0x13bc17(0x3b1)+'\x2024\x22>'+_0x13bc17(0x235)+_0x13bc17(0x4ed)+_0x13bc17(0x6a2)+'2\x2012M'+_0x13bc17(0x33c)+'6\x2018\x22'+_0x13bc17(0x448)+_0x13bc17(0x456),'igjjs':'mn-ta'+'b','QCPAn':function(_0xbb83b6,_0x16db66){return _0xbb83b6(_0x16db66);},'ZFmja':function(_0xe8ea9d,_0x467821,_0x1aa172){return _0xe8ea9d(_0x467821,_0x1aa172);},'vEpfj':_0x13bc17(0x625),'OQwbg':'kour-'+_0x13bc17(0x3be)+_0x13bc17(0x60d)+'paren'+'t','ivTXT':function(_0x5a45de,_0x1faa63){return _0x5a45de-_0x1faa63;},'oxSTI':function(_0x335f7d,_0x239eaf){return _0x335f7d+_0x239eaf;},'HNunH':_0x13bc17(0x324)+'te','iKIXn':_0x13bc17(0x390),'rZrkF':function(_0x114c0f,_0x458635){return _0x114c0f(_0x458635);},'FeAxF':_0x13bc17(0x63f)+'a\x20Kou'+_0x13bc17(0x2eb),'GQtDc':'activ'+'e','QtPvE':_0x13bc17(0x1df)+_0x13bc17(0x3b7),'YiTOP':'span','xrAeN':_0x13bc17(0x321)+'l','yoVNs':'zAaYJ','SxbWO':function(_0x4b9da5,_0x46ac1a){return _0x4b9da5+_0x46ac1a;},'tFtUC':function(_0x55df91,_0x1d2048){return _0x55df91+_0x1d2048;},'pOtGn':'loade'+'d','OyuWb':_0x13bc17(0x4d3),'wIXDZ':_0x13bc17(0x5d0)+'vemen'+'t\x20','reMFG':'MiqYv','CJGxg':'jSNEg','OlojB':function(_0x3d5cf9,_0x2c3448){return _0x3d5cf9===_0x2c3448;},'sVkpu':'sakur'+_0x13bc17(0x558),'YJfMP':_0x13bc17(0x322)+'ion:f'+'ixed;'+'inset'+':0;z-'+_0x13bc17(0x6bd)+_0x13bc17(0x276)+_0x13bc17(0x36c)+_0x13bc17(0x170)+'nter-'+'event'+_0x13bc17(0x378)+'e;','Popxq':_0x13bc17(0x2c9),'zuney':'visua'+'l','Amelc':'Visua'+'l','TbJhC':'misc','eJrcZ':_0x13bc17(0x475),'vwZQI':'<svg\x20'+_0x13bc17(0x302)+'ox=\x220'+_0x13bc17(0x3b1)+_0x13bc17(0x646)+_0x13bc17(0x235)+_0x13bc17(0x4ed)+'12\x2021'+_0x13bc17(0x31b)+_0x13bc17(0x391)+'4-4.5'+_0x13bc17(0x4a2)+'5\x200-2'+_0x13bc17(0x39c)+_0x13bc17(0x5a8)+_0x13bc17(0x47b)+'5s4\x202'+_0x13bc17(0x3d4)+_0x13bc17(0x420)+_0x13bc17(0x394)+'5-4\x207'+_0x13bc17(0x580)+'fill='+'\x22none'+'\x22\x20str'+_0x13bc17(0x3c4)+'#ff6b'+_0x13bc17(0x313)+_0x13bc17(0x58e)+_0x13bc17(0x207)+_0x13bc17(0x582)+'\x20stro'+_0x13bc17(0x224)+'necap'+'=\x22rou'+'nd\x22\x20s'+_0x13bc17(0x58e)+_0x13bc17(0x272)+_0x13bc17(0x3e2)+_0x13bc17(0x185)+'d\x22/><'+_0x13bc17(0x595)+'e\x20cx='+_0x13bc17(0x2f5)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+_0x13bc17(0x18d)+_0x13bc17(0x507)+_0x13bc17(0x448)+_0x13bc17(0x456),'yQufl':function(_0x50db9d){return _0x50db9d();},'QBenx':_0x13bc17(0x2df)+'ra-ko'+_0x13bc17(0x2e8)+'enu\x20r'+_0x13bc17(0x3d5)+_0x13bc17(0x5f8)+':','lyWEV':'#ffb3'+'c6','MbkMS':_0x13bc17(0x54c),'teVMJ':'Sakur'+_0x13bc17(0x510),'kYRtO':'SetGa'+_0x13bc17(0x425)+'ning','YXabm':_0x13bc17(0x512)+_0x13bc17(0x5f9)+_0x13bc17(0x61a)+_0x13bc17(0x201)+_0x13bc17(0x645)+_0x13bc17(0x6bf)+'ent','XjrWw':'[saku'+'ra-ko'+_0x13bc17(0x27d)+'WMK\x20i'+'nit\x20f'+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x13bc17(0x1d2)](location[_0x13bc17(0x38e)+_0x13bc17(0x587)]||''))return;if(window[_0x13bc17(0x188)+_0x13bc17(0x243)+'OUR__'])return;window['__SAK'+_0x13bc17(0x243)+'OUR__']=!![];var _0x3b2450='#ff6b'+'9d',_0x111d7d=_0x1b649f[_0x13bc17(0x189)],_0x5e41cd={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x13bc17(0x581)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x20cccc={..._0x5e41cd};try{Object['assig'+'n'](_0x20cccc,JSON[_0x13bc17(0x283)](localStorage[_0x13bc17(0x1b0)+'em']('sakur'+'a.kou'+_0x13bc17(0x563))||'{}'));}catch(_0x277a19){}function _0x430fd6(){var _0x294b03=_0x13bc17;try{if(_0x1b649f['kqAnX']===_0x1b649f[_0x294b03(0x436)]){_0x4eac80[_0x294b03(0x400)+_0x294b03(0x1f2)+_0x294b03(0x6b4)]();var _0x5b6f75=_0x517c0b[_0x294b03(0x2f8)+'tribu'+'te'](_0x1b649f[_0x294b03(0x152)])!==_0x294b03(0x328);_0x42e6e9['setAt'+_0x294b03(0x4ea)+'te'](_0x1b649f[_0x294b03(0x152)],_0x1b649f[_0x294b03(0x516)](_0x34c352,_0x5b6f75)),_0x57288d(_0x5b6f75);}else localStorage['setIt'+'em'](_0x294b03(0x363)+_0x294b03(0x30a)+_0x294b03(0x563),JSON['strin'+'gify'](_0x20cccc));}catch(_0x187bc1){}}var _0x372c09={'uwmk':!!window['Unity'+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x20cccc[_0x13bc17(0x1d4)+'ode'],'lastError':''};try{window['addEv'+_0x13bc17(0x332)+_0x13bc17(0x273)+'r'](_0x1b649f[_0x13bc17(0x5ee)],_0x17bf91=>{var _0x4d5584=_0x13bc17;try{var _0x2af29e=_0x17bf91&&(_0x17bf91[_0x4d5584(0x26d)+'ge']||_0x17bf91[_0x4d5584(0x54c)]&&_0x17bf91[_0x4d5584(0x54c)]['messa'+'ge'])||'unkno'+'wn';if(_0x17bf91&&_0x17bf91['filen'+_0x4d5584(0x587)])_0x2af29e+=_0x1b649f[_0x4d5584(0x294)](_0x1b649f['vvjTt']+_0x1b649f[_0x4d5584(0x365)](String,_0x17bf91['filen'+_0x4d5584(0x587)])['split']('/')[_0x4d5584(0x50d)](),':')+(_0x17bf91['linen'+'o']||'?');_0x372c09['lastE'+'rror']=_0x1b649f['UqduR'](String,_0x2af29e)[_0x4d5584(0x4d1)](-0x2*-0x424+-0x1db0*0x1+0x1568,-0x24ea+0x2159+0x25*0x1d);}catch(_0x1c3c63){}});}catch(_0x92742b){}var _0x2ba7c3=null,_0x15cf6a=null,_0xcf07ee={},_0x90cf84=[],_0xfcd5ab=[],_0x2acff2=new Map();function _0x2c30be(_0x44abd7,_0x1aa275){var _0x4017bd=_0x13bc17;if(!_0x1aa275||_0x44abd7[_0x4017bd(0x6ae)+'des'](_0x1aa275)||_0x1b649f[_0x4017bd(0x482)](_0x44abd7['lengt'+'h'],0xe53+-0x2334+0x1521))return;_0x44abd7['push'](_0x1aa275);}function _0x36125c(_0x4f8495,_0x381319,_0x1fdfa9,_0x47b94f){var _0x40f2ab=_0x13bc17,_0x37d7d8=0x1*-0x1a65+-0x182c+0x3291;try{_0x37d7d8=_0x381319&&_0x381319[_0x40f2ab(0x362)]?_0x381319['val']():0x2*-0x1367+0x24*-0x6a+0x35b6;}catch(_0x280e77){}if(!_0x37d7d8)return;_0x1b649f['EfmEq'](_0x2c30be,_0x4f8495,_0x37d7d8),_0x1fdfa9[_0x47b94f]=_0x4f8495[_0x40f2ab(0x288)+'h'];if(_0x1b649f[_0x40f2ab(0x222)](_0x47b94f,_0x40f2ab(0x652)+'ents')&&_0x4f8495['lengt'+'h']){if(_0x1b649f[_0x40f2ab(0x4d7)]('lCrsp',_0x1b649f['yJXGL'])){var _0x729c39=new _0x2b24c8(_0x38fce4)[_0x40f2ab(0x565)+_0x40f2ab(0x46f)](_0x4bd1ae,'u32');return _0x729c39?_0x729c39['val']():0x1*0xb3a+-0xdd0+-0x2*-0x14b;}else{var _0x4ddc37=_0xcf07ee['capMo'+'ve'];if(_0x4ddc37)try{_0x4ddc37[_0x40f2ab(0x556)+'ed']=![];}catch(_0x109a92){}}}}function _0x579cae(_0x341b6c,_0x5250b6,_0x2219e9){var _0x2af6d4=_0x13bc17;if(_0x2af6d4(0x23d)==='pEtZU')try{_0x2ed4cd['enabl'+'ed']=!!_0x2bad8f;}catch(_0x5ab07d){}else{var _0x4ba8fc=_0x2acff2['get'](_0x341b6c);!_0x4ba8fc&&(_0x4ba8fc=new Map(),_0x2acff2['set'](_0x341b6c,_0x4ba8fc));if(!_0x4ba8fc['has'](_0x5250b6)){if(_0x1b649f['UunKM'](_0x1b649f[_0x2af6d4(0x1ea)],_0x1b649f['TOROR']))try{var _0x2ce738=new _0x2ba7c3(_0x341b6c)[_0x2af6d4(0x565)+'ield'](_0x5250b6,_0x2219e9);_0x4ba8fc['set'](_0x5250b6,_0x2ce738!==undefined?_0x2ce738['val']():null);}catch(_0x402c92){_0x4ba8fc[_0x2af6d4(0x2da)](_0x5250b6,null);}else{var _0x31ac71=_0x1b649f[_0x2af6d4(0x5c4)][_0x2af6d4(0x2a9)]('|'),_0x4c5030=-0xbcf+-0x979+0x1548;while(!![]){switch(_0x31ac71[_0x4c5030++]){case'0':return _0x5f108c;case'1':_0x5f108c[_0x2af6d4(0x4fd)+'tribu'+'te'](_0x1b649f[_0x2af6d4(0x6aa)],_0x2af6d4(0x4bc)+'h');continue;case'2':_0x5f108c[_0x2af6d4(0x1b3)+'Name']='sk-sw'+_0x2af6d4(0x66a);continue;case'3':_0x5f108c['setAt'+_0x2af6d4(0x4ea)+'te']('aria-'+_0x2af6d4(0x3cb)+'ed',_0x1b649f['UqduR'](_0x2255e1,!!_0x535389));continue;case'4':var _0x5f108c=_0x2de55e['creat'+'eElem'+'ent'](_0x2af6d4(0x244)+'n');continue;case'5':var _0x539634={'aMytK':function(_0x43b6e7,_0x2f451b){return _0x43b6e7!==_0x2f451b;},'hTUBD':_0x2af6d4(0x18f)+_0x2af6d4(0x3cb)+'ed'};continue;case'6':_0x5f108c[_0x2af6d4(0x277)+'ck']=_0x3ec508=>{var _0x44c2e6=_0x2af6d4;_0x3ec508[_0x44c2e6(0x400)+'ropag'+'ation']();var _0x34b882=_0x539634[_0x44c2e6(0x204)](_0x5f108c['getAt'+_0x44c2e6(0x4ea)+'te']('aria-'+_0x44c2e6(0x3cb)+'ed'),_0x44c2e6(0x328));_0x5f108c[_0x44c2e6(0x4fd)+'tribu'+'te'](_0x539634[_0x44c2e6(0x629)],_0x5c64a3(_0x34b882)),_0x31667a(_0x34b882);};continue;case'7':_0x5f108c[_0x2af6d4(0x447)]=_0x2af6d4(0x244)+'n';continue;}break;}}}return _0x4ba8fc['get'](_0x5250b6);}}function _0x3b98a2(_0x4cd43d,_0x5d4f51,_0x16f615,_0x4e9c16){var _0x14b301=_0x13bc17;try{new _0x2ba7c3(_0x4cd43d)['write'+_0x14b301(0x4da)](_0x5d4f51,_0x16f615,_0x4e9c16);}catch(_0x54b5cb){}}function _0x1a1fa6(_0x44571c,_0x506afb){var _0x44c3a7=_0x13bc17;try{var _0x4b343e=new _0x2ba7c3(_0x44571c)[_0x44c3a7(0x565)+_0x44c3a7(0x46f)](_0x506afb,_0x1b649f[_0x44c3a7(0x175)]);return _0x4b343e?_0x4b343e['val']():-0x48a+0x3*0x455+-0x1*0x875;}catch(_0x281777){if(_0x1b649f['UKywK']!==_0x44c3a7(0x410))return 0x176+-0x11a*0x5+0x2*0x206;else _0x1b649f[_0x44c3a7(0x567)](_0x461674,_0x11478a,0x2bb*-0xd+-0x11*-0xaa+0x1*0x1881,_0x1b649f[_0x44c3a7(0x439)],_0xed57e1),_0x1e31d5(_0x3c7b2d,-0x1536+0x1069*0x1+0x521,'i32',_0x34e139);}}function _0x110947(_0x52ad53,_0x122911,_0x198327,_0x33ba8b){var _0x4101e2=_0x579cae(_0x52ad53,_0x122911,_0x198327);if(_0x4101e2!=null)_0x3b98a2(_0x52ad53,_0x122911,_0x198327,_0x1b649f['hYFJx'](_0x4101e2,_0x33ba8b));}function _0x1eae7c(_0x228f26,_0x545114,_0x14d92c,_0xe87e84,_0x4273ea,_0x17bc6e,_0x4aa8a1){var _0x3e8afe=_0x13bc17;try{var _0x279285=_0x1b649f[_0x3e8afe(0x1ac)]['split']('|'),_0x36bc76=0x9d*-0x11+-0x3*0x99e+-0x2747*-0x1;while(!![]){switch(_0x279285[_0x36bc76++]){case'0':var _0x3ce6bf=_0x15cf6a['hookP'+'refix']({'typeName':_0x545114,'methodName':_0x14d92c,'params':_0xe87e84,'returnType':_0x4273ea},_0x17bc6e);continue;case'1':return _0x3ce6bf;case'2':_0x372c09[_0x3e8afe(0x383)+_0x3e8afe(0x31e)]++;continue;case'3':_0xcf07ee[_0x228f26]=_0x3ce6bf;continue;case'4':_0x3ce6bf['enabl'+'ed']=_0x4aa8a1!==![];continue;}break;}}catch(_0x32c2f3){if(_0x1b649f[_0x3e8afe(0x4d7)]('jsnLK',_0x1b649f['MbGkQ']))_0x11601f['shado'+'wColo'+'r']=_0x1d9345,_0x36cdc7[_0x3e8afe(0x545)+_0x3e8afe(0x675)]=0x1323*0x1+0x2b*-0x8f+0x4f0,_0x24f1e5[_0x3e8afe(0x4c1)](),_0x38872c[_0x3e8afe(0x545)+'wBlur']=0x29d*-0xb+-0x1*0x1071+0x2d30;else return console[_0x3e8afe(0x177)]('[saku'+_0x3e8afe(0x43b)+_0x3e8afe(0x25c)+'ook\x20r'+'eg\x20fa'+_0x3e8afe(0x267),_0x228f26,_0x32c2f3&&_0x32c2f3[_0x3e8afe(0x26d)+'ge']),null;}}function _0x268032(_0x260bb3,_0x1bda80,_0x4c6ad0,_0x21d0d4,_0x4eae27,_0x2bc66d,_0x1c3e60){var _0x44b696=_0x13bc17,_0x4b7e0f={'YPDJN':function(_0x22aecf,_0x101302){var _0x1a2400=_0x3c05;return _0x1b649f[_0x1a2400(0x1f1)](_0x22aecf,_0x101302);}};try{var _0x418158=_0x15cf6a['hookP'+'ostfi'+'x']({'typeName':_0x1bda80,'methodName':_0x4c6ad0,'params':_0x21d0d4,'returnType':_0x4eae27},_0x2bc66d);return _0x418158[_0x44b696(0x556)+'ed']=_0x1c3e60!==![],_0xcf07ee[_0x260bb3]=_0x418158,_0x372c09['hooks'+'Total']++,_0x418158;}catch(_0x5def6f){if('Zhnjf'===_0x1b649f[_0x44b696(0x6bb)])try{var _0x59af0f=new _0xe561f5(_0x1fecdb)['readF'+'ield'](_0x1d3601,_0x116a7a);_0x393f11[_0x44b696(0x2da)](_0x3c0b08,_0x4b7e0f[_0x44b696(0x1d6)](_0x59af0f,_0x2e1cd8)?_0x59af0f[_0x44b696(0x362)]():null);}catch(_0x1daf2c){_0x2e95ce[_0x44b696(0x2da)](_0x36af40,null);}else return console['warn'](_0x1b649f[_0x44b696(0x14c)],_0x260bb3,_0x5def6f&&_0x5def6f[_0x44b696(0x26d)+'ge']),null;}}var _0x3485f4=()=>![];try{if(window[_0x13bc17(0x4e0)+_0x13bc17(0x499)+_0x13bc17(0x1f5)]&&!_0x20cccc[_0x13bc17(0x1d4)+'ode']){_0x2ba7c3=window[_0x13bc17(0x4e0)+_0x13bc17(0x499)+_0x13bc17(0x1f5)][_0x13bc17(0x535)+_0x13bc17(0x350)+'er'],_0x15cf6a=window[_0x13bc17(0x4e0)+'WebMo'+_0x13bc17(0x1f5)]['Runti'+'me'][_0x13bc17(0x4ee)+_0x13bc17(0x2ab)+'in']({'name':_0x1b649f['teVMJ'],'version':_0x13bc17(0x5f3),'referencedAssemblies':[_0x13bc17(0x4e9)+_0x13bc17(0x6ca)+_0x13bc17(0x23f)+_0x13bc17(0x65d)]});if(_0x20cccc[_0x13bc17(0x61e)+'od'])_0x1eae7c(_0x13bc17(0x3b4),'OHeal'+'th',_0x13bc17(0x44f)+'ateTa'+_0x13bc17(0x588)+_0x13bc17(0x26a),[_0x13bc17(0x534),_0x13bc17(0x534)],undefined,_0x3485f4,!!_0x20cccc[_0x13bc17(0x3b4)]);if(_0x20cccc[_0x13bc17(0x61e)+'odDie'])_0x1eae7c(_0x13bc17(0x466)+'e','OHeal'+'th',_0x13bc17(0x611)+_0x13bc17(0x385),[_0x1b649f['EqDXP'],_0x1b649f[_0x13bc17(0x439)],'i32',_0x13bc17(0x534),_0x1b649f[_0x13bc17(0x439)]],undefined,_0x3485f4,!!_0x20cccc[_0x13bc17(0x3b4)]);if(_0x20cccc[_0x13bc17(0x155)+'oReco'+'il'])_0x1eae7c(_0x13bc17(0x546)+'oil','Legio'+'nPlat'+_0x13bc17(0x61a)+'.Over'+'tide.'+'Recoi'+'lMoti'+'on',_0x13bc17(0x36e),[_0x1b649f['EqDXP']],undefined,_0x3485f4,!!_0x20cccc[_0x13bc17(0x546)+'oil']);if(_0x20cccc[_0x13bc17(0x269)+'aptur'+'e'])_0x268032(_0x13bc17(0x624)+_0x13bc17(0x6c8),'OShoo'+_0x13bc17(0x655),_0x1b649f[_0x13bc17(0x2a8)],[_0x1b649f['EqDXP'],_0x1b649f['EqDXP']],undefined,(_0x2c3199,_0x1b7675)=>{_0x36125c(_0xfcd5ab,_0x1b7675,_0x372c09,_0x1b649f['XrYYU']);},!![]);if(_0x20cccc[_0x13bc17(0x269)+_0x13bc17(0x21e)+'e'])_0x1b649f[_0x13bc17(0x209)](_0x268032,'capMo'+'ve',_0x1b649f[_0x13bc17(0x25d)],_0x13bc17(0x387)+'unded',[_0x1b649f['EqDXP']],_0x13bc17(0x534),(_0x54686e,_0x28d25c)=>{var _0x271ed3=_0x13bc17;_0x36125c(_0x90cf84,_0x28d25c,_0x372c09,_0x271ed3(0x652)+_0x271ed3(0x601));},!![]);}}catch(_0x26d634){'AHJhx'==='AHJhx'?console[_0x13bc17(0x177)](_0x1b649f['XjrWw'],_0x26d634&&_0x26d634[_0x13bc17(0x26d)+'ge']):(_0xf4c664[_0x13bc17(0x2c2)]=_0x29c023,_0x565324());}function _0x5b79ed(_0x1db293,_0x5cbad2){var _0x2d286b=_0x13bc17,_0x334487=_0xcf07ee[_0x1db293];if(_0x334487)try{_0x1b649f['JLmCt'](_0x2d286b(0x310),_0x1b649f['pcqov'])?_0x334487[_0x2d286b(0x556)+'ed']=!!_0x5cbad2:_0x5c570f(!_0x44116e);}catch(_0x560dfc){}}setInterval(()=>{var _0x305559=_0x13bc17;if(!_0x2ba7c3||!window[_0x305559(0x653)+'Insta'+'nce'])return;var _0x185b02=_0x1b649f[_0x305559(0x211)](Number(_0x20cccc[_0x305559(0x1ff)+_0x305559(0x41c)])||-0x11f+0x2*-0x60e+0x13d*0xb,-0x1fc2+0x24d9+-0x4b3*0x1),_0x4e464c=_0x1b649f['wmzoF'](Number(_0x20cccc['jumpP'+'ct'])||0x10c3+0xad6+-0x1b35,0xb7a+-0x1*-0x17e9+-0x22ff),_0xd9f6db=(_0x1b649f[_0x305559(0x5fb)](Number,_0x20cccc[_0x305559(0x6d5)+_0x305559(0x37d)])||0x1*0xac1+-0x27*-0x37+-0x12be*0x1)/(0x53*-0x41+0x1e1d+-0x8a6),_0x5601a6=Math['max'](0x2286+0xd*-0x293+-0x10e,_0x1b649f[_0x305559(0x365)](Number,_0x20cccc['damag'+'eValu'+'e'])||-0x20d9+-0x1682*0x1+0x1*0x37f1),_0x235f36=_0x185b02!==0x19d0+-0xd*-0x151+-0x2aec||_0x4e464c!==-0x4fb+0x230+-0x166*-0x2||_0x1b649f['JLmCt'](_0xd9f6db,0x242f+-0xe2*0x29+-0x1*-0x4)||_0x20cccc[_0x305559(0x3f0)],_0x3bbb06=_0x20cccc[_0x305559(0x342)+_0x305559(0x379)]||_0x20cccc['damag'+'eExp']||_0x20cccc[_0x305559(0x3c2)+'moExp']||_0x20cccc['rapid'+_0x305559(0x687)];if(!_0x235f36&&!_0x3bbb06)return;try{for(var _0x40e782=0x40*0x52+0x1ecf*-0x1+0xa4f;_0x40e782<_0x90cf84[_0x305559(0x288)+'h'];_0x40e782++){var _0x4e9aed=_0x90cf84[_0x40e782];if(!_0x4e9aed)continue;_0x185b02!==0x14*0x25+-0x1091*-0x1+-0x1374&&(_0x1b649f[_0x305559(0x567)](_0x110947,_0x4e9aed,-0x1921*-0x1+-0x146f+0x2*-0x245,'f32',_0x185b02),_0x1b649f['NPpNk'](_0x110947,_0x4e9aed,-0x1498+0x2*-0x548+0x14*0x191,'f32',_0x185b02),_0x1b649f[_0x305559(0x567)](_0x110947,_0x4e9aed,-0x1*-0x1cea+-0x1048+-0x213*0x6,'f32',_0x185b02),_0x110947(_0x4e9aed,-0x1*0x1309+-0x2*-0xf5b+-0x1*0xb79,_0x305559(0x230),_0x185b02),_0x1b649f['NPpNk'](_0x110947,_0x4e9aed,-0x2643+0x30c*0xa+0x11*0x77,_0x305559(0x230),_0x185b02),_0x110947(_0x4e9aed,-0x1d3b+0x2d7*0xb+0x2*-0xf1,'f32',_0x185b02));if(_0x1b649f[_0x305559(0x4d7)](_0x4e464c,0x3d*0x1c+0x1f16+-0x25c1*0x1))_0x1b649f['REuVw'](_0x110947,_0x4e9aed,0x2*0xd81+0x17c8+0x8e*-0x5b,_0x1b649f['YQPRq'],_0x4e464c);_0x1b649f[_0x305559(0x40c)](_0xd9f6db,0x1b58+-0x4*-0xc5+0xd*-0x257)&&(_0x1b649f[_0x305559(0x222)]('hFEDL','uvwon')?(_0x18c632['font']=_0x1b649f[_0x305559(0x294)]('600\x20'+_0x429488['round']((-0xc3+0x16af+-0xd*0x1af)*_0x2d5639),_0x305559(0x214)+_0x305559(0x488)+_0x305559(0x47e)+_0x305559(0x626)+_0x305559(0x42d)+_0x305559(0x65a)+_0x305559(0x354)+'if'),_0x3e2578['fillS'+_0x305559(0x6e3)]=_0x31c659?'#fff':_0x305559(0x3b9)+'255,2'+'35,24'+'0,0.5'+'5)',_0x483107[_0x305559(0x381)+_0x305559(0x2c5)](_0x3cfc23,_0x356da0+_0x1b649f['VCEog'](_0x1ab5ca,-0x1850+0x18*0x42+0x911*0x2),_0x351d08+_0x42f444/(-0x977+-0x3*0x88e+-0x707*-0x5)+_0x1b649f['TBnrH'](0x8c4+-0x1*0x23e9+-0x9*-0x305,_0x4153e7))):(_0x110947(_0x4e9aed,-0x97*-0x16+-0x2513*-0x1+-0x31c5,_0x1b649f[_0x305559(0x52d)],_0xd9f6db),_0x110947(_0x4e9aed,0x27*0x85+-0x1d*-0x133+-0x36be,_0x305559(0x230),_0xd9f6db)));if(_0x20cccc[_0x305559(0x3f0)])_0x3b98a2(_0x4e9aed,-0x1247*-0x2+0x101e+0x62*-0x88,_0x1b649f['YQPRq'],-(0x5a1*0x2+0x2542*0x1+-0x2c9d));}}catch(_0x52a58a){}try{if(_0x1b649f['UunKM'](_0x305559(0x160),_0x305559(0x39e)))for(var _0x27a54e=0x2324+-0x27*-0xef+-0x478d;_0x27a54e<_0xfcd5ab[_0x305559(0x288)+'h'];_0x27a54e++){if(_0x1b649f[_0x305559(0x351)]===_0x1b649f['Kzawh']){var _0x52fd5a=_0x1a1fa6(_0xfcd5ab[_0x27a54e],-0xf5b+0x174c+-0x7b9);if(!_0x52fd5a)continue;_0x20cccc['damag'+'eExp']&&(_0x1b649f[_0x305559(0x352)](_0x3b98a2,_0x52fd5a,0x12*0x151+0xd3b*0x1+-0x24a1,_0x1b649f[_0x305559(0x439)],_0x5601a6),_0x1b649f[_0x305559(0x140)](_0x3b98a2,_0x52fd5a,0x2496+0xa7*-0x1f+-0x1009,_0x1b649f[_0x305559(0x439)],_0x5601a6));_0x20cccc['noSpr'+'ead']&&(_0x3b98a2(_0x52fd5a,0x109f*0x2+-0x117f*0x1+0x1*-0xf37,_0x305559(0x230),-0x5*0x3c3+-0x379+0x1648),_0x3b98a2(_0x52fd5a,-0x110a+0x20fb*-0x1+0x326d,_0x1b649f['YQPRq'],-0x1*-0x81+0x1*0x853+-0x8d3));if(_0x20cccc['infAm'+_0x305559(0x586)])_0x3b98a2(_0x52fd5a,0x93+-0x947+0x910,_0x305559(0x534),-0x5b*0x4f+-0x17f4+0x37f0);_0x20cccc[_0x305559(0x4b2)+'Exp']&&(_0x110947(_0x52fd5a,0x233b+-0x550+0x1*-0x1d5f,_0x305559(0x230),-0xc67+-0x1*0x3bb+0x1022+0.1),_0x1b649f['uzomW'](_0x3b98a2,_0x52fd5a,-0xf06+0x1442+0x4dc*-0x1,_0x1b649f['YQPRq'],-0x262e+0x5*-0x346+-0x1*-0x368c+0.1));}else _0x15f154(_0xac0eaf,-0x26a2+0x4ff*-0x7+-0x1*-0x4a27,_0x1b649f[_0x305559(0x52d)],0x1727+-0x4*0x5d5+0x2d+0.1),_0x1b649f[_0x305559(0x567)](_0x3ada0e,_0xec94e8,0x42*0x1e+0xb1b*-0x1+0x3bf,'f32',0x6e3+0x2303*-0x1+0x1c20+0.1);}else return _0x23dc73[_0x305559(0x177)](_0x305559(0x2df)+_0x305559(0x43b)+_0x305559(0x25c)+'ook\x20r'+_0x305559(0x138)+'iled:',_0x8d4c30,_0x1266aa&&_0x30d015['messa'+'ge']),null;}catch(_0x13a010){}},-0x7c5*-0x1+0x258f*0x1+-0x2c8c),setInterval(()=>{var _0x148da5=_0x13bc17;_0x372c09['gameL'+'oaded']=!!window[_0x148da5(0x653)+'Insta'+_0x148da5(0x5ca)];try{var _0xb80ba=0x76*-0x41+-0x19f5*-0x1+0x401;for(var _0x3a215f in _0xcf07ee){if(_0x148da5(0x472)==='cxepM')try{_0x5bbc96[_0x148da5(0x3a6)+'em'](_0x148da5(0x363)+_0x148da5(0x30a)+_0x148da5(0x1ca)+'v1',_0x1ad928[_0x148da5(0x3d8)+'gify'](_0x1e56a1));}catch(_0x313c4a){}else{if(_0xcf07ee[_0x3a215f]&&_0xcf07ee[_0x3a215f][_0x148da5(0x191)+'ed'])_0xb80ba++;}}_0x372c09[_0x148da5(0x383)+'Ok']=_0xb80ba;}catch(_0x51a3b0){}},-0x14f3*-0x1+0x12*-0x19a+0xbc9*0x1);var _0x402f27=new Set(),_0x5f27ab={0x1:[],0x3:[]},_0x59af25=![];function _0x570fb5(_0x3e5c31){var _0x33f0e2=_0x13bc17,_0xe1744c={'AjFDp':function(_0xdefaa1,_0x462004){var _0x15e4ea=_0x3c05;return _0x1b649f[_0x15e4ea(0x633)](_0xdefaa1,_0x462004);}};_0x33f0e2(0x4dd)===_0x33f0e2(0x2e3)?_0x2901ef['addEv'+_0x33f0e2(0x332)+'stene'+'r']('error',_0x34c963=>{var _0xe9409f=_0x33f0e2;try{var _0x2aa8f5=_0x34c963&&(_0x34c963[_0xe9409f(0x26d)+'ge']||_0x34c963['error']&&_0x34c963['error'][_0xe9409f(0x26d)+'ge'])||_0xe9409f(0x5b2)+'wn';if(_0x34c963&&_0x34c963['filen'+_0xe9409f(0x587)])_0x2aa8f5+=_0xe1744c['AjFDp'](_0xe1744c[_0xe9409f(0x627)]('\x20@\x20',_0x5efc3b(_0x34c963['filen'+_0xe9409f(0x587)])['split']('/')[_0xe9409f(0x50d)]())+':',_0x34c963[_0xe9409f(0x5ac)+'o']||'?');_0x52d95a['lastE'+'rror']=_0x5803f5(_0x2aa8f5)[_0xe9409f(0x4d1)](0xe*0x29e+-0x8b0+0x6fd*-0x4,0x731+0xbcf+0x38*-0x54);}catch(_0x289c81){}}):_0x402f27[_0x33f0e2(0x17e)](_0x3e5c31[_0x33f0e2(0x28b)]);}function _0xf6be37(_0x356ea2){var _0x5965a5=_0x13bc17;_0x402f27[_0x5965a5(0x245)+'e'](_0x356ea2['code']);}function _0x50aa8c(_0x386b58){var _0x59705a=_0x13bc17,_0x2bffd5={'MYxBh':_0x59705a(0x55f)+'b','PHzGt':function(_0x2f00ae,_0x38bf23){return _0x1b649f['ixdof'](_0x2f00ae,_0x38bf23);},'jGkyq':function(_0x502867,_0x2733b2){return _0x502867+_0x2733b2;},'wTlpE':_0x1b649f[_0x59705a(0x61c)]};if(_0x59705a(0x24f)!==_0x1b649f['gAVhn']){var _0x415414=(_0x59705a(0x53b)+'|7|5|'+_0x59705a(0x517))['split']('|'),_0xcac0f9=0x17*-0x11+-0xef*-0x17+-0x13f2;while(!![]){switch(_0x415414[_0xcac0f9++]){case'0':var _0x1810ed=_0x46e5d7['creat'+_0x59705a(0x5df)+_0x59705a(0x4aa)](_0x59705a(0x244)+'n');continue;case'1':_0xaeea3f[_0x59705a(0x2da)](_0x42bfb2['id'],_0x1810ed);continue;case'2':_0x1810ed[_0x59705a(0x277)+'ck']=(_0x5c312f=>()=>_0x5f4f28(_0x5c312f))(_0x146cec['id']);continue;case'3':_0x1586d3['appen'+_0x59705a(0x3d3)+'d'](_0x1810ed);continue;case'4':_0x1810ed['class'+'Name']=_0x2bffd5['MYxBh'];continue;case'5':_0x1810ed['inner'+_0x59705a(0x4f8)]=_0x2bffd5[_0x59705a(0x62a)](_0x2bffd5['jGkyq'](_0x2bffd5['wTlpE'],_0x342a0a[_0x59705a(0x2b3)]),_0x59705a(0x4c7)+_0x59705a(0x41b));continue;case'6':_0x1810ed['type']=_0x59705a(0x244)+'n';continue;case'7':_0x1810ed[_0x59705a(0x2a4)]=_0x3e78fc['label'];continue;}break;}}else{if(_0x386b58['__sak'+'ura'])return;_0x402f27[_0x59705a(0x17e)]('mouse'+(_0x386b58[_0x59705a(0x244)+'n']+(-0x2680+0x1e15+-0x16*-0x62)));var _0x1fa1f1=_0x5f27ab[_0x1b649f['kZmEc'](_0x386b58['butto'+'n'],-0x817*-0x1+0x21ae+-0x1*0x29c4)];if(_0x1fa1f1){_0x1fa1f1[_0x59705a(0x19c)](performance['now']());if(_0x1fa1f1['lengt'+'h']>-0x2368+0x1*0x1b5e+0x832)_0x1fa1f1[_0x59705a(0x166)]();}}}function _0xda4365(_0x317103){var _0x1bf9c3=_0x13bc17;if(!_0x317103['__sak'+'ura'])_0x402f27['delet'+'e'](_0x1b649f[_0x1bf9c3(0x2f9)]+_0x1b649f[_0x1bf9c3(0x633)](_0x317103[_0x1bf9c3(0x244)+'n'],-0x1552+-0x15+0x1568));}function _0x2f5037(){var _0x2a929b=_0x13bc17;_0x402f27[_0x2a929b(0x657)]();}function _0xa0c89c(){var _0x18376b=_0x13bc17,_0x23c570={'zeQqw':function(_0x3ff029,_0x3918f5,_0x142980){return _0x3ff029(_0x3918f5,_0x142980);}};if(_0x1b649f['EwpmT'](_0x1b649f[_0x18376b(0x3f6)],_0x18376b(0x6a1))){var _0x1e493e=_0x1b649f['eMktw'][_0x18376b(0x2a9)]('|'),_0x22ae12=0x11*-0x97+0x12f6+-0x8ef*0x1;while(!![]){switch(_0x1e493e[_0x22ae12++]){case'0':window[_0x18376b(0x198)+_0x18376b(0x332)+_0x18376b(0x273)+'r'](_0x1b649f['jIuTF'],_0x570fb5,!![]);continue;case'1':_0x59af25=!![];continue;case'2':window[_0x18376b(0x198)+_0x18376b(0x332)+_0x18376b(0x273)+'r'](_0x1b649f['FUuLU'],_0xda4365,!![]);continue;case'3':window['addEv'+_0x18376b(0x332)+_0x18376b(0x273)+'r'](_0x1b649f[_0x18376b(0x2c4)],_0xf6be37,!![]);continue;case'4':window[_0x18376b(0x198)+_0x18376b(0x332)+_0x18376b(0x273)+'r']('mouse'+_0x18376b(0x4cf),_0x50aa8c,!![]);continue;case'5':if(_0x59af25)return;continue;case'6':window[_0x18376b(0x198)+'entLi'+_0x18376b(0x273)+'r']('blur',_0x2f5037);continue;}break;}}else{var _0x52660d=_0x23c570['zeQqw'](_0x19647b,_0x13658d,_0x22210c=>{var _0x4ea1f2=_0x18376b;_0x18a2d6[_0x4ea1f2(0x1b3)+'List']['toggl'+'e']('on',_0x22210c),_0x39a50b(_0x22210c);});_0x4bd320[_0x18376b(0x6cb)+'d'](_0x438a92,_0x52660d);}}function _0x41a245(_0x5e1f1e){var _0x98a480=_0x13bc17,_0x212a23=_0x5f27ab[_0x5e1f1e]||[],_0xc8bc0d=performance[_0x98a480(0x2ff)]();while(_0x212a23[_0x98a480(0x288)+'h']&&_0x1b649f['HOxGi'](_0xc8bc0d-_0x212a23[-0xe4a+0x2423+0x15d9*-0x1],-0x51a*0x4+0x13c5+0x48b))_0x212a23['shift']();return _0x212a23[_0x98a480(0x288)+'h'];}function _0x8012f2(_0x5ee9ff){var _0x59869e=_0x13bc17;if('IPvrz'==='RUIhA'){var _0x391826=_0xe27d58[_0x589317]['query'+'Selec'+'tor'](_0x1b649f[_0x59869e(0x5ad)]);_0x391826&&(_0x391826['textC'+_0x59869e(0x2f3)+'t'][_0x59869e(0x6bd)+'Of'](_0x59869e(0x28c))===0x247d+0x3c5*-0xa+0x135||_0x391826[_0x59869e(0x35c)+_0x59869e(0x2f3)+'t'][_0x59869e(0x6bd)+'Of'](_0x1b649f[_0x59869e(0x18c)])===-0x15c9+0x2a0*-0x6+0x2589)&&(_0x391826['textC'+_0x59869e(0x2f3)+'t']=_0xdde7d3[_0x59869e(0x1d4)+'ode']?_0x1b649f['Hadtm']:_0x16d523[_0x59869e(0x137)]?_0x1b649f['OiCwh'](_0x1b649f[_0x59869e(0x32a)](_0x1b649f[_0x59869e(0x6d2)](_0x1b649f[_0x59869e(0x5c9)](_0x1b649f['qrMsa'](_0x59869e(0x199)+'bound'+'\x20',_0x536a5f[_0x59869e(0x383)+'Total']?_0x1b649f['WptSu'](_0x1b649f['qrMsa'](_0x2e55e5['hooks'+'Ok']+'/',_0x163093['hooks'+_0x59869e(0x31e)]),_0x59869e(0x699)+'s'):_0x1b649f[_0x59869e(0x3fb)]),'\x20|\x20ga'+_0x59869e(0x1a1)),_0x3ef671[_0x59869e(0x6ce)+_0x59869e(0x676)]?_0x59869e(0x411)+'d':_0x1b649f['Cckem']),'\x20|\x20sh'+_0x59869e(0x6c8)+'\x20')+(_0x4deacf[_0x59869e(0x2c3)+'ers']?_0x59869e(0x4d3):_0x59869e(0x493)),'\x20|\x20mo'+'vemen'+'t\x20')+(_0x161726['movem'+_0x59869e(0x601)]?_0x59869e(0x4d3):_0x1b649f['PCxce'])+(_0x430dfc[_0x59869e(0x3c9)+_0x59869e(0x14a)]?_0x1b649f['FDtQE'](_0x1b649f['CTibD'],_0x290847[_0x59869e(0x3c9)+_0x59869e(0x14a)]):''):_0x1b649f[_0x59869e(0x1c8)]);}else{if(document['body']&&(document[_0x59869e(0x6b5)+_0x59869e(0x670)]===_0x59869e(0x2a3)+'activ'+'e'||_0x1b649f[_0x59869e(0x644)](document['ready'+'State'],'compl'+'ete')))_0x5ee9ff();else document[_0x59869e(0x198)+'entLi'+_0x59869e(0x273)+'r'](_0x1b649f[_0x59869e(0x339)],_0x5ee9ff,{'once':!![]});}}_0x8012f2(()=>{var _0x481f93=_0x13bc17,_0x912a0={'Jwals':_0x1b649f[_0x481f93(0x149)],'OJUvl':function(_0x5af942){return _0x5af942();},'iVaBS':function(_0x3eb6a3,_0xc56b7f){return _0x3eb6a3*_0xc56b7f;},'iOIml':_0x1b649f['vEpfj'],'SgTNR':function(_0x2877f7,_0x113375){var _0x192e99=_0x481f93;return _0x1b649f[_0x192e99(0x644)](_0x2877f7,_0x113375);},'bjUnW':_0x481f93(0x3ea),'fNMwQ':_0x1b649f[_0x481f93(0x28d)],'dvhYQ':_0x481f93(0x6e2)+_0x481f93(0x1dd)+'-banr'+'s','lbdFW':function(_0x2626e1,_0x1468e6){return _0x2626e1===_0x1468e6;},'xvOFA':_0x481f93(0x3c5)+_0x481f93(0x2e1),'aliwl':_0x481f93(0x493),'DLPMq':function(_0x14cd3a,_0x4a4b15){return _0x14cd3a(_0x4a4b15);},'bJXJV':function(_0x1389fe,_0x1a5450){return _0x1389fe>=_0x1a5450;},'yPyko':function(_0x2600ff,_0x21cf5c){var _0xb2b547=_0x481f93;return _0x1b649f[_0xb2b547(0x223)](_0x2600ff,_0x21cf5c);},'uGWqG':function(_0x4b068a,_0x2e1610){return _0x1b649f['jervs'](_0x4b068a,_0x2e1610);},'NyIAJ':'bWplw','FHzQn':function(_0x18e1f5,_0x502836){return _0x18e1f5===_0x502836;},'ipzIm':function(_0x4c84df,_0x15bca9){return _0x1b649f['sawBY'](_0x4c84df,_0x15bca9);},'GoEkv':function(_0x3a83d2,_0x12d9dd,_0x366d8f){return _0x3a83d2(_0x12d9dd,_0x366d8f);},'ZcqtA':'rgba('+'255,1'+_0x481f93(0x34a)+_0x481f93(0x4c3)+')','vIMix':_0x481f93(0x3a9)+'A\x20KOU'+_0x481f93(0x6de)+'1','dTBFE':_0x481f93(0x1ee)+'2px\x20u'+_0x481f93(0x415)+'ospac'+_0x481f93(0x612)+'ospac'+'e','TpDtd':_0x1b649f[_0x481f93(0x238)],'ALctS':function(_0x4f6b1b,_0x362a97){var _0x20d625=_0x481f93;return _0x1b649f[_0x20d625(0x50e)](_0x4f6b1b,_0x362a97);},'PmjER':_0x1b649f[_0x481f93(0x2c7)],'wHejW':_0x1b649f['iKIXn'],'SBKAv':function(_0x40e4f,_0x215604){return _0x40e4f!==_0x215604;},'ARrUS':function(_0x2079f9,_0x5a8c25){return _0x2079f9/_0x5a8c25;},'YcGFd':function(_0x31e3a3,_0x1b5de4){return _0x31e3a3*_0x1b5de4;},'QfWkf':_0x481f93(0x18f)+_0x481f93(0x3cb)+'ed','wujcm':function(_0x16d663,_0x2b0869){var _0x2b326b=_0x481f93;return _0x1b649f[_0x2b326b(0x232)](_0x16d663,_0x2b0869);},'hOisg':function(_0x5d840e,_0x48508b){return _0x5d840e(_0x48508b);},'fmQwg':_0x1b649f[_0x481f93(0x373)],'SIkdQ':_0x1b649f[_0x481f93(0x5b3)],'bleea':function(_0x327f76,_0x12b78f){return _0x327f76===_0x12b78f;},'RHETs':function(_0x137765,_0x19544f){return _0x137765(_0x19544f);},'yLAMo':_0x481f93(0x654),'nVRGd':function(_0x1d39e6){return _0x1d39e6();},'nkiCv':function(_0x248d60,_0x3229a6){return _0x248d60(_0x3229a6);},'cvYtP':_0x1b649f['QtPvE'],'bGISt':'range','DYtDR':_0x1b649f[_0x481f93(0x5f2)],'AnbRy':_0x1b649f[_0x481f93(0x3ce)],'dnIDF':function(_0x512b33){return _0x512b33();},'YDIjn':function(_0xab5c15,_0x578275){return _0xab5c15!==_0x578275;},'uLItO':_0x481f93(0x4cb),'pytHy':_0x1b649f['gJFJa'],'HhYXm':function(_0x5afb3f,_0x5f1818){return _0x1b649f['oxSTI'](_0x5afb3f,_0x5f1818);},'hsCaE':function(_0xab6e06,_0x5941be){return _0x1b649f['sawBY'](_0xab6e06,_0x5941be);},'cnmmq':_0x481f93(0x57a)+_0x481f93(0x525),'RQOLP':_0x481f93(0x366),'clNUf':_0x481f93(0x418)+_0x481f93(0x547)+'tle','pYCIb':_0x1b649f[_0x481f93(0x31d)],'sgGZJ':_0x481f93(0x4e0)+_0x481f93(0x23a)+_0x481f93(0x216)+_0x481f93(0x303)+_0x481f93(0x414),'yDhdM':function(_0x12b60b,_0x1099e2){var _0x745a25=_0x481f93;return _0x1b649f[_0x745a25(0x6c9)](_0x12b60b,_0x1099e2);},'VIeRe':function(_0x4e914d,_0x12de2a){return _0x1b649f['tFtUC'](_0x4e914d,_0x12de2a);},'fyhiw':_0x1b649f['pOtGn'],'PqAxh':_0x481f93(0x4f2)+'ng','swuwu':_0x1b649f['OyuWb'],'kbgia':_0x1b649f[_0x481f93(0x560)],'HBAVQ':'\x20|\x20ER'+'R:\x20','KzOoV':_0x481f93(0x57f)+_0x481f93(0x4bb)+_0x481f93(0x4a0)+'ne.Ap'+_0x481f93(0x6d6)+_0x481f93(0x1eb)+_0x481f93(0x1fd)+_0x481f93(0x59c)+_0x481f93(0x319)+_0x481f93(0x297),'aGISY':function(_0x2387ce){return _0x2387ce();},'vfyDq':_0x1b649f[_0x481f93(0x5bb)],'NeXuv':_0x481f93(0x3f7),'ifyZR':'kour-'+_0x481f93(0x537)+'0x250'+_0x481f93(0x1f0)+'nt','pJfUK':_0x1b649f[_0x481f93(0x35e)],'krRKG':function(_0x55be10,_0x152ac8){var _0x38784e=_0x481f93;return _0x1b649f[_0x38784e(0x4e4)](_0x55be10,_0x152ac8);}};_0x20cccc[_0x481f93(0x3d2)+'ck']&&_0x1b649f[_0x481f93(0x337)](setInterval,()=>{var _0x5e5ce6=_0x481f93,_0x135016={'CEDMJ':function(_0xdff121){var _0x5d2e51=_0x3c05;return _0x912a0[_0x5d2e51(0x3a3)](_0xdff121);},'Cgufc':function(_0x2e467f,_0x5f77d0){return _0x2e467f===_0x5f77d0;},'PjCeC':function(_0x5279b5,_0x3a4cc8){var _0x4344f9=_0x3c05;return _0x912a0[_0x4344f9(0x19d)](_0x5279b5,_0x3a4cc8);}};if(_0x912a0[_0x5e5ce6(0x184)]!==_0x5e5ce6(0x454))try{if(_0x912a0['SgTNR']('cwVuV',_0x912a0['bjUnW']))for(var _0x5e4871 of['kour-'+_0x5e5ce6(0x537)+_0x5e5ce6(0x501)+_0x5e5ce6(0x1f0)+'nt',_0x912a0['fNMwQ'],'kour-'+_0x5e5ce6(0x537)+'0x600'+_0x5e5ce6(0x1f0)+'nt',_0x912a0['dvhYQ']]){var _0x1e5f60=document['getEl'+_0x5e5ce6(0x6ac)+_0x5e5ce6(0x1e0)](_0x5e4871);if(_0x1e5f60&&_0x5e4871===_0x912a0['dvhYQ']){var _0x181db6=_0x1e5f60[_0x5e5ce6(0x417)+_0x5e5ce6(0x4ae)];for(var _0x3834b2=0x705+0x121c*-0x2+0x1d33;_0x3834b2<_0x181db6[_0x5e5ce6(0x288)+'h'];_0x3834b2++){if(_0x912a0['SgTNR'](_0x5e5ce6(0x49a),_0x5e5ce6(0x61b))){var _0x4491a4=_0x45489d[_0x5e5ce6(0x4ee)+'eElem'+_0x5e5ce6(0x4aa)](_0x5e5ce6(0x244)+'n');return _0x4491a4['type']=_0x912a0[_0x5e5ce6(0x503)],_0x4491a4[_0x5e5ce6(0x1b3)+'Name']='sk-bt'+'n',_0x4491a4[_0x5e5ce6(0x35c)+'onten'+'t']=_0x56c664,_0x4491a4[_0x5e5ce6(0x277)+'ck']=_0x3395c3=>{var _0x2b88b6=_0x5e5ce6;_0x3395c3[_0x2b88b6(0x400)+_0x2b88b6(0x1f2)+_0x2b88b6(0x6b4)](),_0x135016[_0x2b88b6(0x1a8)](_0x202ddb);},_0x4491a4;}else{if(_0x181db6[_0x3834b2]['id']&&_0x912a0['lbdFW'](_0x181db6[_0x3834b2]['id'][_0x5e5ce6(0x6bd)+'Of'](_0x912a0['xvOFA']),0x2511+-0x17a*0xb+-0x14d3))_0x181db6[_0x3834b2][_0x5e5ce6(0x3cf)][_0x5e5ce6(0x424)+'ay']=_0x912a0[_0x5e5ce6(0x463)];}}}else{if(_0x1e5f60)_0x1e5f60[_0x5e5ce6(0x3cf)]['displ'+'ay']=_0x5e5ce6(0x493);}}else _0x21acc6[_0x5e5ce6(0x61e)+_0x5e5ce6(0x225)]=_0x17a590,_0x29b858();}catch(_0x3e39a0){}else{var _0x14fb42=_0x366be7[_0x5e5ce6(0x1cf)+_0x5e5ce6(0x316)+'lRati'+'o']||0xa64+-0x13*-0x47+-0x14e*0xc,_0x4411f9=_0x1da432['inner'+'Width'],_0x3abcbf=_0x333253[_0x5e5ce6(0x2dd)+_0x5e5ce6(0x2ae)+'t'];if(_0x135016[_0x5e5ce6(0x153)](_0x4411f9,_0x13b9f5['w'])&&_0x3abcbf===_0x36cb5c['h']&&_0x14fb42===_0x185e86['dpr'])return;_0x51f8a4['w']=_0x4411f9,_0x1962d1['h']=_0x3abcbf,_0x439523['dpr']=_0x14fb42,_0x32b1a0['width']=_0x4699f7[_0x5e5ce6(0x5a1)](_0x135016[_0x5e5ce6(0x63c)](_0x4411f9,_0x14fb42)),_0xc9a5ad[_0x5e5ce6(0x460)+'t']=_0x895924['round'](_0x135016[_0x5e5ce6(0x63c)](_0x3abcbf,_0x14fb42)),_0x18f608[_0x5e5ce6(0x4f6)+'ansfo'+'rm'](_0x14fb42,0xf1*-0x1d+-0x8*0x4dc+0x3*0x160f,-0x13*-0x61+0x13a9+-0x23d*0xc,_0x14fb42,0x8b3+-0x124d+0x99a,-0x1*-0x1359+-0x9c+-0x12bd);}},0xe99*0x2+-0xbe0*0x1+-0x2*0x4c1);var _0x5626ff=document[_0x481f93(0x4ee)+'eElem'+'ent'](_0x481f93(0x6a7)+'s');_0x5626ff[_0x481f93(0x3cf)][_0x481f93(0x5a6)+'xt']=_0x481f93(0x322)+_0x481f93(0x2af)+_0x481f93(0x161)+'inset'+_0x481f93(0x3ad)+_0x481f93(0x2d2)+_0x481f93(0x263)+_0x481f93(0x460)+'t:100'+_0x481f93(0x6ad)+'index'+':2147'+'48364'+'6;poi'+_0x481f93(0x4a1)+'event'+_0x481f93(0x378)+'e';var _0x193398=_0x5626ff['getCo'+'ntext']('2d');function _0x2c430d(){var _0x1d6fda=_0x481f93;try{var _0x480b0e=document[_0x1d6fda(0x6e2)+'creen'+_0x1d6fda(0x264)+'nt'],_0x498c4c=_0x480b0e&&_0x912a0[_0x1d6fda(0x584)](_0x480b0e['tagNa'+'me'],_0x1d6fda(0x28f)+'S')?_0x480b0e:document['body']||document['docum'+'entEl'+_0x1d6fda(0x6ac)];if(_0x5626ff[_0x1d6fda(0x4df)+_0x1d6fda(0x2cf)]!==_0x498c4c)_0x498c4c[_0x1d6fda(0x6cb)+'dChil'+'d'](_0x5626ff);}catch(_0x281e68){if(_0x912a0[_0x1d6fda(0x61d)]!=='bWplw'){_0x912a0['DLPMq'](_0x818252,_0x2d0852),_0x291622++;var _0x4c01b6=_0x2b64db[_0x1d6fda(0x2ff)]();_0x912a0[_0x1d6fda(0x1aa)](_0x4c01b6-_0x34923e,0x2651+-0x3df*-0x7+-0x3f76)&&(_0x2b4378=_0x4a3255[_0x1d6fda(0x5a1)](_0x47b7a6*(-0x1187*0x1+0x24a5*-0x1+-0x15*-0x2c4)/_0x912a0[_0x1d6fda(0x523)](_0x4c01b6,_0x172100)),_0x241ef6=-0x18a*0x3+0x1a52*0x1+-0x15b4,_0x42e310=_0x4c01b6);_0x25a737(),_0x1c81cf(),_0x313ce9[_0x1d6fda(0x657)+_0x1d6fda(0x538)](0x1ed6+-0x56*0x3+-0x1dd4,0xbe9+-0x811+-0x7b*0x8,_0x2aa6d9['w'],_0x4210d8['h']);var _0x5b9d36={'left':0x0,'top':0x0,'right':_0x228698['w'],'bottom':_0x39e123['h'],'width':_0x2decf1['w'],'height':_0x1e85df['h']};if(_0x46aa4f[_0x1d6fda(0x54a)+_0x1d6fda(0x299)])_0x912a0['DLPMq'](_0x1f3aa8,_0x5b9d36);if(_0x469914['keyst'+'rokes'])_0x912a0[_0x1d6fda(0x172)](_0x1171e2,_0x5b9d36);_0x48f7d8(_0x5b9d36);}else try{document[_0x1d6fda(0x150)]['appen'+'dChil'+'d'](_0x5626ff);}catch(_0x50d2e2){}}}var _0xdc07f3={'w':0x0,'h':0x0,'dpr':0x0};function _0x2396f1(){var _0x45db6e=_0x481f93,_0x46e07b=window[_0x45db6e(0x1cf)+_0x45db6e(0x316)+'lRati'+'o']||-0x1f99+-0x6*0x379+0x8*0x68e,_0x398ea9=window['inner'+_0x45db6e(0x689)],_0x11e5ee=window['inner'+'Heigh'+'t'];if(_0x912a0[_0x45db6e(0x3fe)](_0x398ea9,_0xdc07f3['w'])&&_0x11e5ee===_0xdc07f3['h']&&_0x912a0[_0x45db6e(0x553)](_0x46e07b,_0xdc07f3['dpr']))return;_0xdc07f3['w']=_0x398ea9,_0xdc07f3['h']=_0x11e5ee,_0xdc07f3[_0x45db6e(0x168)]=_0x46e07b,_0x5626ff[_0x45db6e(0x46a)]=Math['round'](_0x912a0['iVaBS'](_0x398ea9,_0x46e07b)),_0x5626ff[_0x45db6e(0x460)+'t']=Math[_0x45db6e(0x5a1)](_0x912a0['iVaBS'](_0x11e5ee,_0x46e07b)),_0x193398['setTr'+_0x45db6e(0x54f)+'rm'](_0x46e07b,0x69*0x25+-0x2*0xe2f+0xd31,0x2647+-0x1729+-0x9*0x1ae,_0x46e07b,0x147f+-0x2451+0xfd2,-0x18c7+-0x329*0x4+0x3*0xc79);}var _0x39ae58=0x4a*-0x25+-0x1f97+-0x2a49*-0x1,_0x4083a1=performance['now'](),_0x287a4d=-0x7*0x227+0x1533+-0x5*0x13a;function _0xdcaceb(_0x3b9b85){var _0x75cb3f=_0x481f93,_0x10eab4={'dFBPA':_0x1b649f[_0x75cb3f(0x452)],'CkaCz':_0x1b649f['aSIOq'],'YsoUW':_0x75cb3f(0x3b9)+_0x75cb3f(0x4b9)+_0x75cb3f(0x1c2)+_0x75cb3f(0x3ae)+')','gUkxO':function(_0x51853f,_0x46e947){return _0x1b649f['FDtQE'](_0x51853f,_0x46e947);},'bbzQU':function(_0x2aaf86,_0x11f01e){return _0x2aaf86*_0x11f01e;},'LcKMB':_0x75cb3f(0x293),'jvEIZ':'#fff'};if(_0x1b649f['cZQgR'](_0x75cb3f(0x649),_0x1b649f[_0x75cb3f(0x36d)]))_0x5937b2['damag'+'eValu'+'e']=_0x46b304,_0x1da531();else{var _0xaae3a2=_0x1b649f['orxeL'](Number,_0x20cccc['ksSca'+'le'])||-0x1e59+-0x2*0x366+0x2526,_0x5f48f7=_0x1b649f[_0x75cb3f(0x47c)](-0x2342+-0x4a*0x65+0x204b*0x2,_0xaae3a2),_0x1d03c1=_0x1b649f[_0x75cb3f(0x2c0)](0x2d7*0x2+-0xc60+0x6b6,_0xaae3a2),_0x760559=_0x5f48f7*(-0xa23*0x1+-0x105d+0x1a83)+_0x1b649f[_0x75cb3f(0x2d9)](_0x1d03c1,-0x56f*-0x1+-0x1b93+0xa2*0x23),_0x4987eb=_0x1b649f['FDtQE'](_0x1b649f['iyjyu'](_0x5f48f7,-0x16c8+0xfff+0x6cc),_0x1b649f['xZqkU'](_0x1d03c1,-0xc1*0x25+0x107e*-0x2+0x3ce3)),_0x27cd4c=_0x20cccc['ksPos'],_0x2504b8=_0x27cd4c==='br'?_0x1b649f[_0x75cb3f(0x5e3)](_0x1b649f[_0x75cb3f(0x271)](_0x3b9b85['right'],-0x3*0xff+0x20ef+-0x1de2),_0x760559):_0x1b649f['TTRKz'](_0x3b9b85[_0x75cb3f(0x69d)],-0x76e+-0x69*-0x25+-0x7af),_0x7de595=_0x1b649f[_0x75cb3f(0x222)](_0x27cd4c,'ml')?_0x3b9b85['top']+_0x1b649f['VCEog'](_0x3b9b85['heigh'+'t'],0x129a+0x1687+-0x1*0x291f)-_0x1b649f[_0x75cb3f(0x5ea)](_0x4987eb,0x2c2+-0x2c0+0x0):_0x1b649f['OUBRk'](_0x3b9b85['botto'+'m'],_0x4987eb)-(_0x27cd4c==='bl'?0xc6e+0x21ac+-0x2dba:0x89*0x9+0x1d00+-0x213b),_0x446d96=(_0x39bbd3,_0x3b3398,_0x56a953,_0x207410,_0x3b5d52,_0xbd2e17,_0x45bef5)=>{var _0x1f2296=_0x75cb3f,_0x1d8f17=_0x402f27[_0x1f2296(0x327)](_0x3b3398);_0x193398[_0x1f2296(0x3d0)](),_0x193398[_0x1f2296(0x64b)+'Path']();if(_0x193398[_0x1f2296(0x5a1)+'Rect'])_0x193398[_0x1f2296(0x5a1)+'Rect'](_0x56a953,_0x207410,_0x3b5d52,_0xbd2e17,(0x1d8*-0xe+-0xa5*-0x19+0x9ba)*_0xaae3a2);else _0x193398[_0x1f2296(0x4f1)](_0x56a953,_0x207410,_0x3b5d52,_0xbd2e17);_0x193398['fillS'+'tyle']=_0x1d8f17?_0x1f2296(0x3b9)+_0x1f2296(0x361)+_0x1f2296(0x22f)+_0x1f2296(0x395)+'5)':_0x10eab4['CkaCz'],_0x193398[_0x1f2296(0x4c1)](),_0x193398[_0x1f2296(0x509)+_0x1f2296(0x694)]=0x214*-0x3+0x1*-0x1b8c+-0x1*-0x21c9,_0x193398[_0x1f2296(0x413)+'eStyl'+'e']=_0x1d8f17?_0x111d7d:_0x1f2296(0x3b9)+_0x1f2296(0x361)+_0x1f2296(0x22f)+'7,0.3'+'5)',_0x193398[_0x1f2296(0x413)+'e']();_0x1d8f17&&('TISrc'===_0x1f2296(0x508)?(_0x193398[_0x1f2296(0x545)+_0x1f2296(0x514)+'r']=_0x3b2450,_0x193398[_0x1f2296(0x545)+_0x1f2296(0x675)]=-0x3f6+0x3*-0x89f+0x1de1*0x1,_0x193398['fill'](),_0x193398[_0x1f2296(0x545)+'wBlur']=-0x6*0x42d+-0x1092+0x29a0):_0x2a5a1d[_0x1f2296(0x27e)+'n'](_0x5d93fc,_0x2aa211['parse'](_0x47f373['getIt'+'em']('sakur'+_0x1f2296(0x30a)+'r.v1')||'{}')));_0x193398[_0x1f2296(0x450)+'tyle']=_0x1d8f17?_0x1f2296(0x455):_0x10eab4[_0x1f2296(0x4c0)],_0x193398['textA'+'lign']='cente'+'r',_0x193398[_0x1f2296(0x5d5)+'aseli'+'ne']='middl'+'e',_0x193398['font']=_0x10eab4[_0x1f2296(0x318)]('700\x20',Math[_0x1f2296(0x5a1)]((-0xd19+0xc*-0x2d3+-0x1*-0x2f09)*_0xaae3a2))+('px\x20ui'+'-sans'+'-seri'+_0x1f2296(0x626)+'tem-u'+_0x1f2296(0x65a)+_0x1f2296(0x354)+'if'),_0x193398[_0x1f2296(0x381)+_0x1f2296(0x2c5)](_0x39bbd3,_0x10eab4[_0x1f2296(0x318)](_0x56a953,_0x3b5d52/(0x1e*-0xf6+-0x256a+-0x1a8*-0x28)),_0x207410+_0xbd2e17/(0xdfb+0x24b5*-0x1+0xa*0x246)-(_0x45bef5?_0x10eab4[_0x1f2296(0x485)](-0x222f+0x23*-0x5f+-0x3*-0xfbb,_0xaae3a2):0x1896+0x1*0xdeb+-0x1*0x2681));if(_0x45bef5){if(_0x1f2296(0x333)==='LGuRQ')_0x193398['font']=_0x10eab4['LcKMB']+Math[_0x1f2296(0x5a1)](_0x10eab4[_0x1f2296(0x485)](0xb8f+0xcf9+-0x187f,_0xaae3a2))+(_0x1f2296(0x214)+_0x1f2296(0x488)+'-seri'+'f,sys'+_0x1f2296(0x42d)+'i,san'+_0x1f2296(0x354)+'if'),_0x193398['fillS'+'tyle']=_0x1d8f17?_0x10eab4[_0x1f2296(0x3b5)]:_0x1f2296(0x3b9)+_0x1f2296(0x4b9)+_0x1f2296(0x1c2)+_0x1f2296(0x51e)+'5)',_0x193398[_0x1f2296(0x381)+'ext'](_0x45bef5,_0x56a953+_0x3b5d52/(0x3*0x772+0x8e6+0x476*-0x7),_0x10eab4['gUkxO'](_0x207410+_0xbd2e17/(0x18ce+-0x122c*-0x2+-0x2b*0x16c),(-0x10*-0x116+0xc1*-0x25+0xa8d)*_0xaae3a2));else try{var _0x39c21a=_0x10eab4['dFBPA']['split']('|'),_0x2530e6=0x16d7+0x1*0x66f+0xea3*-0x2;while(!![]){switch(_0x39c21a[_0x2530e6++]){case'0':var _0x511a45=_0x4ecf83[_0x1f2296(0x60c)+_0x1f2296(0x5db)+'x']({'typeName':_0x5a9418,'methodName':_0xe42773,'params':_0x903acb,'returnType':_0x39e86f},_0x33e9aa);continue;case'1':_0xd64bc3[_0x1f2296(0x383)+_0x1f2296(0x31e)]++;continue;case'2':_0x3a962e[_0x1958ab]=_0x511a45;continue;case'3':_0x511a45['enabl'+'ed']=_0x330092!==![];continue;case'4':return _0x511a45;}break;}}catch(_0x369c02){return _0x229ec0[_0x1f2296(0x177)]('[saku'+'ra-ko'+_0x1f2296(0x25c)+_0x1f2296(0x2d8)+_0x1f2296(0x138)+_0x1f2296(0x267),_0x572a27,_0x369c02&&_0x369c02[_0x1f2296(0x26d)+'ge']),null;}}_0x193398[_0x1f2296(0x3c7)+'re']();};_0x446d96('W',_0x1b649f['nLxGw'],_0x1b649f[_0x75cb3f(0x31a)](_0x2504b8+_0x5f48f7,_0x1d03c1),_0x7de595,_0x5f48f7,_0x5f48f7),_0x1b649f[_0x75cb3f(0x6c4)](_0x446d96,'A',_0x1b649f[_0x75cb3f(0x369)],_0x2504b8,_0x1b649f['OiCwh'](_0x7de595+_0x5f48f7,_0x1d03c1),_0x5f48f7,_0x5f48f7),_0x1b649f['IunnK'](_0x446d96,'S',_0x1b649f[_0x75cb3f(0x2e0)],_0x1b649f['pofOp'](_0x2504b8+_0x5f48f7,_0x1d03c1),_0x7de595+_0x5f48f7+_0x1d03c1,_0x5f48f7,_0x5f48f7),_0x446d96('D',_0x1b649f[_0x75cb3f(0x497)],_0x2504b8+(_0x5f48f7+_0x1d03c1)*(-0xb75+-0x24cb+-0x80b*-0x6),_0x1b649f[_0x75cb3f(0x294)](_0x7de595,_0x5f48f7)+_0x1d03c1,_0x5f48f7,_0x5f48f7);var _0x9a5f0b=_0x1b649f['ILSZp'](_0x760559,_0x1d03c1)/(0x19*-0x4e+-0x19f6+-0x2*-0x10cb),_0x5702be=_0x7de595+(_0x5f48f7+_0x1d03c1)*(0x44+0x943*0x3+-0x1*0x1c0b);_0x1b649f['bvXUl'](_0x446d96,_0x1b649f['yOaKq'],'mouse'+'1',_0x2504b8,_0x5702be,_0x9a5f0b,_0x5f48f7,_0x20cccc[_0x75cb3f(0x2c2)]?_0x1b649f[_0x75cb3f(0x3c8)](_0x41a245,0x1*-0x55d+-0x15ad+0x1*0x1b0b)+_0x1b649f[_0x75cb3f(0x615)]:''),_0x446d96('RMB',_0x1b649f['dReRJ'],_0x1b649f['wSwvH'](_0x2504b8,_0x9a5f0b)+_0x1d03c1,_0x5702be,_0x9a5f0b,_0x5f48f7,_0x20cccc[_0x75cb3f(0x2c2)]?_0x1b649f[_0x75cb3f(0x3f1)](_0x41a245,-0x1c9f+-0x149*0xb+0x2ac5*0x1)+'\x20CPS':''),_0x446d96('','Space',_0x2504b8,_0x5702be+_0x5f48f7+_0x1d03c1,_0x760559,_0x5f48f7*(-0x203*0x13+0x2*0x161+0x2377+0.45));}}function _0x5ab82a(_0x31f22d){var _0xc2ce17=_0x481f93,_0x33008f=_0x1b649f['ytMIE'](_0x31f22d[_0xc2ce17(0x46a)],-0x9d5*-0x1+0x1598+-0x1f6b),_0x3bcb4e=_0x31f22d['heigh'+'t']/(0x2598+-0xc0*-0x2+-0x2716),_0x309511=Number(_0x20cccc['chSiz'+'e'])||0x1a6a+-0x1188+-0x8e1,_0x40acf1=/^#[0-9a-f]{6}$/i['test'](_0x20cccc[_0xc2ce17(0x1ba)+'or'])?_0x20cccc[_0xc2ce17(0x1ba)+'or']:_0x1b649f[_0xc2ce17(0x63e)];_0x193398[_0xc2ce17(0x3d0)](),_0x193398[_0xc2ce17(0x413)+'eStyl'+'e']=_0x40acf1,_0x193398[_0xc2ce17(0x450)+_0xc2ce17(0x6e3)]=_0x40acf1,_0x193398[_0xc2ce17(0x509)+_0xc2ce17(0x694)]=Math[_0xc2ce17(0x1bc)](-0x1601+-0x2122+0x3724+0.5,(-0x1*-0x1857+0x3dd+0x6*-0x4b3)*_0x309511),_0x193398['shado'+_0xc2ce17(0x514)+'r']=_0x40acf1,_0x193398[_0xc2ce17(0x545)+_0xc2ce17(0x675)]=-0xc66+-0x15e8*0x1+0x2254;var _0x307cce=(0x454+-0x220+-0x117*0x2)*_0x309511,_0x47096f=_0x1b649f[_0xc2ce17(0x330)](0x1180+-0x174b+0x5d3,_0x309511);_0x193398['begin'+'Path'](),_0x193398[_0xc2ce17(0x3fc)+'o'](_0x33008f-_0x307cce-_0x47096f,_0x3bcb4e),_0x193398[_0xc2ce17(0x602)+'o'](_0x33008f-_0x307cce,_0x3bcb4e),_0x193398['moveT'+'o'](_0x33008f+_0x307cce,_0x3bcb4e),_0x193398[_0xc2ce17(0x602)+'o'](_0x1b649f[_0xc2ce17(0x473)](_0x33008f+_0x307cce,_0x47096f),_0x3bcb4e),_0x193398['moveT'+'o'](_0x33008f,_0x1b649f['OUBRk'](_0x3bcb4e-_0x307cce,_0x47096f)),_0x193398[_0xc2ce17(0x602)+'o'](_0x33008f,_0x3bcb4e-_0x307cce),_0x193398[_0xc2ce17(0x3fc)+'o'](_0x33008f,_0x1b649f[_0xc2ce17(0x5a4)](_0x3bcb4e,_0x307cce)),_0x193398['lineT'+'o'](_0x33008f,_0x1b649f['CnECV'](_0x1b649f[_0xc2ce17(0x131)](_0x3bcb4e,_0x307cce),_0x47096f)),_0x193398[_0xc2ce17(0x413)+'e'](),_0x193398[_0xc2ce17(0x64b)+_0xc2ce17(0x195)](),_0x193398[_0xc2ce17(0x376)](_0x33008f,_0x3bcb4e,(0x3*-0xa42+0x2514+-0x64d+0.6000000000000001)*_0x309511,-0x3*-0x229+0x1314+-0x198f,_0x1b649f[_0xc2ce17(0x613)](Math['PI'],0x26af+-0x176f*0x1+-0xf3e)),_0x193398['fill'](),_0x193398[_0xc2ce17(0x3c7)+'re']();}function _0x48db01(_0x3eccf9){var _0x15dead=_0x481f93,_0x1474dd=(_0x15dead(0x4c9)+_0x15dead(0x449)+'5|4|3'+'|10|2'+'|0')[_0x15dead(0x2a9)]('|'),_0xba7c58=-0x1*0x197e+0xecf+0xaaf;while(!![]){switch(_0x1474dd[_0xba7c58++]){case'0':_0x193398['resto'+'re']();continue;case'1':_0x193398[_0x15dead(0x231)+'lign']=_0x15dead(0x69d);continue;case'2':if(!_0x372c09[_0x15dead(0x6ce)+_0x15dead(0x676)])_0x912a0[_0x15dead(0x251)](_0x2436c7,_0x15dead(0x1b2)+_0x15dead(0x14d)+_0x15dead(0x45b)+'e…',_0x912a0['ZcqtA']);continue;case'3':_0x2436c7(_0x912a0[_0x15dead(0x1d5)],'#ff6b'+'9d');continue;case'4':var _0x2436c7=(_0x171686,_0xe1bd1f)=>{var _0x2c94b6=_0x15dead;_0x193398['fillS'+_0x2c94b6(0x6e3)]=_0xe1bd1f||_0x1d4799['PuSPm'],_0x193398[_0x2c94b6(0x381)+'ext'](_0x171686,_0x167c49,_0x456d5e),_0x456d5e+=0xf3b+0x52d+-0x1458;};continue;case'5':var _0x456d5e=0x2693+-0x1*0x1afe+0x17*-0x7f,_0x167c49=0x1f9f+0x112f+-0x30c2;continue;case'6':_0x193398['font']=_0x912a0[_0x15dead(0x4be)];continue;case'7':_0x193398[_0x15dead(0x5d5)+_0x15dead(0x2e4)+'ne']=_0x15dead(0x3b6);continue;case'8':var _0x1d4799={'PuSPm':'rgba('+_0x15dead(0x4b9)+'35,24'+_0x15dead(0x640)+'5)'};continue;case'9':_0x193398[_0x15dead(0x3d0)]();continue;case'10':if(_0x20cccc['fps'])_0x2436c7(_0x287a4d+_0x15dead(0x3e4));continue;}break;}}function _0x18ad99(){var _0x49bebd=_0x481f93;if(_0x912a0['SBKAv'](_0x49bebd(0x2b7),'iWvRS')){var _0x2d8ece=_0x50e285[_0x49bebd(0x4ee)+_0x49bebd(0x5df)+_0x49bebd(0x4aa)](_0x912a0[_0x49bebd(0x5a9)]);return _0x2d8ece[_0x49bebd(0x1b3)+'Name']=_0x912a0[_0x49bebd(0x491)](_0x912a0[_0x49bebd(0x489)],_0xf29371?_0x912a0[_0x49bebd(0x298)]:''),_0x2d8ece['textC'+'onten'+'t']=_0x44a128,_0x2d8ece;}else{requestAnimationFrame(_0x18ad99),_0x39ae58++;var _0x9c58f=performance['now']();_0x912a0['bJXJV'](_0x9c58f-_0x4083a1,-0x15b5+-0x22ea+0xbb7*0x5)&&(_0x287a4d=Math[_0x49bebd(0x5a1)](_0x912a0['ARrUS'](_0x912a0['YcGFd'](_0x39ae58,0x2011*-0x1+-0x6b*0x56+0x47eb),_0x9c58f-_0x4083a1)),_0x39ae58=-0x20f2*0x1+-0x17ba+0x38ac,_0x4083a1=_0x9c58f);_0x2396f1(),_0x912a0[_0x49bebd(0x3a3)](_0x2c430d),_0x193398[_0x49bebd(0x657)+'Rect'](0x1d3*0x7+-0xfb6*-0x2+-0x2c31,-0xaba*-0x2+0x16f5+0x2c69*-0x1,_0xdc07f3['w'],_0xdc07f3['h']);var _0x4eda2c={'left':0x0,'top':0x0,'right':_0xdc07f3['w'],'bottom':_0xdc07f3['h'],'width':_0xdc07f3['w'],'height':_0xdc07f3['h']};if(_0x20cccc['cross'+'hair'])_0x5ab82a(_0x4eda2c);if(_0x20cccc['keyst'+_0x49bebd(0x26b)])_0xdcaceb(_0x4eda2c);_0x48db01(_0x4eda2c);}}var _0x20eae2=document['creat'+'eElem'+_0x481f93(0x4aa)](_0x481f93(0x36b));_0x20eae2['id']=_0x1b649f[_0x481f93(0x397)],_0x20eae2['style'][_0x481f93(0x5a6)+'xt']=_0x1b649f[_0x481f93(0x3a8)];var _0x175d90=_0x20eae2['attac'+_0x481f93(0x270)+'ow']({'mode':'open'});(document[_0x481f93(0x150)]||document[_0x481f93(0x5f5)+_0x481f93(0x5f4)+_0x481f93(0x6ac)])[_0x481f93(0x6cb)+_0x481f93(0x3d3)+'d'](_0x20eae2);var _0xe07787=![],_0x5a0583={};try{if(_0x1b649f['Popxq']!==_0x1b649f[_0x481f93(0x3e1)]){var _0x3b6728=_0x57dd4d['creat'+_0x481f93(0x5df)+_0x481f93(0x4aa)](_0x481f93(0x4d9));_0x3b6728['class'+'Name']=_0x1b649f['Dhecw'],_0x3b6728[_0x481f93(0x35c)+_0x481f93(0x2f3)+'t']=_0xf3189e,_0x57aa39[_0x481f93(0x6cb)+_0x481f93(0x3d3)+'d'](_0x3b6728);}else _0x5a0583=JSON['parse'](localStorage['getIt'+'em'](_0x1b649f['wQEbG'])||'{}');}catch(_0x2868){}function _0x46edfa(){var _0x104fb9=_0x481f93;try{localStorage['setIt'+'em'](_0x1b649f[_0x104fb9(0x43f)],JSON[_0x104fb9(0x3d8)+'gify'](_0x5a0583));}catch(_0x3c89e5){}}function _0x28ee86(_0xd0d936,_0x27ac94){var _0x21b7c0=_0x481f93,_0x8a3f31=_0x1b649f['UpToS'][_0x21b7c0(0x2a9)]('|'),_0x1ddbbf=0xd*-0x25e+0x1*-0x947+0x280d;while(!![]){switch(_0x8a3f31[_0x1ddbbf++]){case'0':_0x1f49f1[_0x21b7c0(0x447)]=_0x1b649f['OGbkO'];continue;case'1':return _0x1f49f1;case'2':_0x1f49f1[_0x21b7c0(0x4fd)+'tribu'+'te'](_0x1b649f['cEDER'],_0x1b649f['VpTkN'](String,!!_0xd0d936));continue;case'3':var _0x1f49f1=document[_0x21b7c0(0x4ee)+_0x21b7c0(0x5df)+_0x21b7c0(0x4aa)](_0x21b7c0(0x244)+'n');continue;case'4':_0x1f49f1['setAt'+_0x21b7c0(0x4ea)+'te'](_0x21b7c0(0x21f),_0x21b7c0(0x4bc)+'h');continue;case'5':_0x1f49f1['oncli'+'ck']=_0xcc9e5e=>{var _0x32be32=_0x21b7c0;_0xcc9e5e['stopP'+_0x32be32(0x1f2)+_0x32be32(0x6b4)]();var _0x36f3eb=_0x1f49f1[_0x32be32(0x2f8)+_0x32be32(0x4ea)+'te'](_0x912a0['QfWkf'])!=='true';_0x1f49f1['setAt'+'tribu'+'te'](_0x912a0[_0x32be32(0x4ec)],_0x912a0['wujcm'](String,_0x36f3eb)),_0x912a0[_0x32be32(0x68d)](_0x27ac94,_0x36f3eb);};continue;case'6':_0x1f49f1[_0x21b7c0(0x1b3)+_0x21b7c0(0x3f8)]=_0x1b649f[_0x21b7c0(0x2f6)];continue;}break;}}function _0x47f62a(_0x21d1bc,_0x48171b,_0x30d634,_0x5f1f1c,_0x495a72){var _0x264257=_0x481f93,_0x51eaab={'xOjvq':function(_0x41c971,_0x96d350){return _0x41c971!==_0x96d350;},'MbcMD':'aBGAG','UhLzJ':function(_0xb85ac3){return _0x912a0['nVRGd'](_0xb85ac3);},'nNwHs':function(_0x4bc4a5,_0x42c54f){return _0x912a0['nkiCv'](_0x4bc4a5,_0x42c54f);}};if('NLwWN'!==_0x264257(0x480)){_0x69a646[_0x264257(0x33a)]=_0x4ad5b9,_0x912a0[_0x264257(0x3a3)](_0xd9d272);var _0x4ac9ef=_0x5d944d[_0x264257(0x607)](_0x5c38dc=>_0x5c38dc['id']===_0x48a9b6)||_0xbcea85[0x19b9+-0x6cd+-0x12ec];_0x33bcbc['textC'+'onten'+'t']=_0x912a0['ALctS'](_0x912a0[_0x264257(0x32d)],_0x4ac9ef['label']);for(var [_0x53b6ae,_0x3b0d66]of _0x5177c4)_0x3b0d66[_0x264257(0x1b3)+'List']['toggl'+'e'](_0x912a0[_0x264257(0x3c1)],_0x912a0[_0x264257(0x343)](_0x53b6ae,_0x490b70));_0x35516f[_0x264257(0x419)+_0x264257(0x24d)+'ldren'](..._0x2848ad(_0x55a420));}else{var _0x3cfb04=document[_0x264257(0x4ee)+'eElem'+_0x264257(0x4aa)](_0x264257(0x36b));_0x3cfb04[_0x264257(0x1b3)+_0x264257(0x3f8)]=_0x912a0[_0x264257(0x4d5)];var _0xaae639=document[_0x264257(0x4ee)+'eElem'+_0x264257(0x4aa)](_0x264257(0x67a));_0xaae639[_0x264257(0x447)]=_0x912a0['bGISt'],_0xaae639[_0x264257(0x1b3)+_0x264257(0x3f8)]=_0x264257(0x200)+'ider',_0xaae639['min']=_0x48171b,_0xaae639['max']=_0x30d634,_0xaae639['step']=_0x5f1f1c,_0xaae639['value']=_0x21d1bc;var _0x5ae7fc=document['creat'+_0x264257(0x5df)+_0x264257(0x4aa)](_0x912a0[_0x264257(0x55e)]);_0x5ae7fc[_0x264257(0x1b3)+_0x264257(0x3f8)]=_0x912a0[_0x264257(0x4f4)],_0x5ae7fc[_0x264257(0x35c)+'onten'+'t']=String(_0x21d1bc);var _0x31cfaf=()=>{var _0x37e73e=_0x264257;_0x5ae7fc['textC'+'onten'+'t']=_0x912a0[_0x37e73e(0x4c5)](String,_0xaae639['value']),_0x3cfb04['style']['setPr'+'opert'+'y'](_0x912a0['yLAMo'],_0x912a0[_0x37e73e(0x523)](_0xaae639[_0x37e73e(0x3fa)],_0x48171b)/_0x912a0[_0x37e73e(0x523)](_0x30d634,_0x48171b)*(0x1b7d+0x796+-0x22af)+'%');};return _0xaae639[_0x264257(0x669)+'ut']=()=>{var _0x57cd97=_0x264257;_0x51eaab[_0x57cd97(0x295)](_0x51eaab[_0x57cd97(0x1f9)],_0x57cd97(0x35a))?_0xe8622f['setIt'+'em']('sakur'+_0x57cd97(0x30a)+_0x57cd97(0x563),_0x4cc6f6[_0x57cd97(0x3d8)+'gify'](_0x2082ff)):(_0x51eaab[_0x57cd97(0x6bc)](_0x31cfaf),_0x495a72(_0x51eaab[_0x57cd97(0x18a)](Number,_0xaae639[_0x57cd97(0x3fa)])));},_0x912a0['dnIDF'](_0x31cfaf),_0x3cfb04[_0x264257(0x6cb)+'d'](_0xaae639,_0x5ae7fc),_0x3cfb04;}}function _0x6e20e2(_0x10289f,_0x5d6806){var _0x46e020=_0x481f93;if(_0x912a0[_0x46e020(0x34e)](_0x912a0[_0x46e020(0x49e)],'qBCTD')){var _0x13cbf8=document[_0x46e020(0x4ee)+'eElem'+'ent'](_0x46e020(0x67a));return _0x13cbf8[_0x46e020(0x447)]=_0x46e020(0x3f2),_0x13cbf8[_0x46e020(0x1b3)+_0x46e020(0x3f8)]=_0x46e020(0x45f)+_0x46e020(0x3f3),_0x13cbf8['value']=/^#[0-9a-f]{6}$/i[_0x46e020(0x1d2)](_0x10289f)?_0x10289f:_0x912a0[_0x46e020(0x2ca)],_0x13cbf8['oninp'+'ut']=()=>_0x5d6806(_0x13cbf8[_0x46e020(0x3fa)]),_0x13cbf8;}else _0x4b37ed=new _0x19bd02(),_0x28cf6e[_0x46e020(0x2da)](_0x3467e3,_0x54a731);}function _0x43aae4(_0x307822,_0x5b3325,_0x2f8e16){var _0x38f587=_0x481f93,_0xfd9ece=document[_0x38f587(0x4ee)+_0x38f587(0x5df)+_0x38f587(0x4aa)]('selec'+'t');_0xfd9ece[_0x38f587(0x1b3)+_0x38f587(0x3f8)]=_0x1b649f['mXdLK'];for(var [_0x241e6c,_0x4227f2]of _0x5b3325){var _0x5ada35=document['creat'+'eElem'+'ent'](_0x38f587(0x386)+'n');_0x5ada35['value']=_0x241e6c,_0x5ada35[_0x38f587(0x35c)+_0x38f587(0x2f3)+'t']=_0x4227f2,_0xfd9ece[_0x38f587(0x6cb)+'dChil'+'d'](_0x5ada35);}return _0xfd9ece['value']=_0x307822,_0xfd9ece['oncha'+_0x38f587(0x3b7)]=()=>_0x2f8e16(_0xfd9ece[_0x38f587(0x3fa)]),_0xfd9ece;}function _0x2e4227(_0x330e85,_0x48cd0b){var _0x179987=_0x481f93;if(_0x1b649f['sawBY'](_0x1b649f[_0x179987(0x487)],_0x1b649f['eWxhP'])){var _0x5eb345=('5|0|1'+_0x179987(0x3e8)+'4')[_0x179987(0x2a9)]('|'),_0x39d98b=-0x1a3e*-0x1+-0x1*-0x1c55+-0x1*0x3693;while(!![]){switch(_0x5eb345[_0x39d98b++]){case'0':_0x3c5569[_0x179987(0x447)]=_0x179987(0x244)+'n';continue;case'1':_0x3c5569[_0x179987(0x1b3)+_0x179987(0x3f8)]=_0x1b649f['mVSSS'];continue;case'2':_0x3c5569['oncli'+'ck']=_0x511828=>{var _0x4bf056=_0x179987;_0x511828[_0x4bf056(0x400)+'ropag'+'ation'](),_0x48cd0b();};continue;case'3':_0x3c5569[_0x179987(0x35c)+_0x179987(0x2f3)+'t']=_0x330e85;continue;case'4':return _0x3c5569;case'5':var _0x3c5569=document[_0x179987(0x4ee)+_0x179987(0x5df)+_0x179987(0x4aa)](_0x179987(0x244)+'n');continue;}break;}}else _0x1dc48b[_0x179987(0x1b3)+'List'][_0x179987(0x56b)+'e']('on',_0x148c2c),_0x5b4be9(_0x49e464);}function _0x14e817(_0x1e92f4,_0x5e2d8d,_0x55bd4d){var _0x368725=_0x481f93,_0x2ebe0c=(_0x368725(0x287)+_0x368725(0x51b)+_0x368725(0x55b))['split']('|'),_0x585529=-0x22a3+0x1*-0x1079+0x198e*0x2;while(!![]){switch(_0x2ebe0c[_0x585529++]){case'0':var _0x44e5c3=document['creat'+_0x368725(0x5df)+_0x368725(0x4aa)](_0x368725(0x45c));continue;case'1':_0xedd31['appen'+'d'](_0x44e5c3,_0x55bd4d);continue;case'2':_0xedd31['class'+_0x368725(0x3f8)]=_0x368725(0x5d8)+'l';continue;case'3':return _0xedd31;case'4':_0x44e5c3['textC'+'onten'+'t']=_0x1e92f4;continue;case'5':if(_0x5e2d8d){var _0x33e753=document[_0x368725(0x4ee)+_0x368725(0x5df)+_0x368725(0x4aa)](_0x368725(0x4d9));_0x33e753['class'+_0x368725(0x3f8)]=_0x1b649f[_0x368725(0x17b)],_0x33e753['textC'+_0x368725(0x2f3)+'t']=_0x5e2d8d,_0x44e5c3[_0x368725(0x6cb)+_0x368725(0x3d3)+'d'](_0x33e753);}continue;case'6':var _0xedd31=document['creat'+'eElem'+_0x368725(0x4aa)](_0x368725(0x36b));continue;case'7':_0x44e5c3[_0x368725(0x1b3)+'Name']='sk-la'+'bel';continue;}break;}}function _0x40c1ba(_0x3cff53,_0x43a7df){var _0x55b599=_0x481f93,_0x3cdce7=document[_0x55b599(0x4ee)+'eElem'+'ent']('div');return _0x3cdce7['class'+'Name']=_0x912a0['HhYXm'](_0x912a0[_0x55b599(0x489)],_0x43a7df?'\x20err':''),_0x3cdce7['textC'+_0x55b599(0x2f3)+'t']=_0x3cff53,_0x3cdce7;}function _0x581d1a(_0x4951d3,_0x253719,_0xf8f914,_0x17d56c,_0x58fb56){var _0x4cf7c3=_0x481f93,_0x136378={'drxLM':function(_0x1a42a6,_0x19493e){return _0x1a42a6||_0x19493e;},'sQkGP':'rgba('+_0x4cf7c3(0x4b9)+'35,24'+_0x4cf7c3(0x640)+'5)','pyMup':function(_0x39e9c5,_0x5caf4c){return _0x39e9c5===_0x5caf4c;},'YcZRG':_0x912a0[_0x4cf7c3(0x5af)]},_0x3ff87a=document[_0x4cf7c3(0x4ee)+_0x4cf7c3(0x5df)+_0x4cf7c3(0x4aa)]('div');_0x3ff87a[_0x4cf7c3(0x1b3)+_0x4cf7c3(0x3f8)]='sk-ca'+'rd'+(_0xf8f914?_0x4cf7c3(0x579):'');var _0x5b09af=document['creat'+'eElem'+'ent'](_0x4cf7c3(0x36b));_0x5b09af['class'+_0x4cf7c3(0x3f8)]=_0x4cf7c3(0x418)+_0x4cf7c3(0x680)+'ad';var _0x3ae92c=document[_0x4cf7c3(0x4ee)+_0x4cf7c3(0x5df)+_0x4cf7c3(0x4aa)](_0x912a0[_0x4cf7c3(0x5a9)]);_0x3ae92c[_0x4cf7c3(0x1b3)+'Name']=_0x912a0[_0x4cf7c3(0x4c4)];var _0x951ef6=document[_0x4cf7c3(0x4ee)+_0x4cf7c3(0x5df)+'ent'](_0x4cf7c3(0x603)+'g');_0x951ef6[_0x4cf7c3(0x35c)+_0x4cf7c3(0x2f3)+'t']=_0x4951d3,_0x3ae92c[_0x4cf7c3(0x6cb)+_0x4cf7c3(0x3d3)+'d'](_0x951ef6);if(_0x17d56c){var _0xf93f7f=_0x28ee86(_0xf8f914,_0x501f3b=>{var _0x5a4653=_0x4cf7c3;_0x136378['pyMup'](_0x136378['YcZRG'],_0x5a4653(0x366))?(_0x3ff87a[_0x5a4653(0x1b3)+_0x5a4653(0x668)]['toggl'+'e']('on',_0x501f3b),_0x17d56c(_0x501f3b)):(_0x25af57[_0x5a4653(0x450)+'tyle']=_0x136378['drxLM'](_0x519bd8,_0x136378['sQkGP']),_0x510e1d[_0x5a4653(0x381)+_0x5a4653(0x2c5)](_0x16f13a,_0x10cd7f,_0x58f502),_0x21caaf+=-0x1*0x17d6+-0x2*-0x11cd+-0x2*0x5da);});_0x5b09af['appen'+'d'](_0x3ae92c,_0xf93f7f);}else{if(_0x4cf7c3(0x590)!==_0x912a0['pYCIb'])_0x5b09af['appen'+_0x4cf7c3(0x3d3)+'d'](_0x3ae92c);else{if(_0x482ada['body']&&(_0x912a0['hsCaE'](_0x4eaa48[_0x4cf7c3(0x6b5)+'State'],_0x4cf7c3(0x2a3)+_0x4cf7c3(0x48b)+'e')||_0x17603b['ready'+_0x4cf7c3(0x670)]===_0x912a0[_0x4cf7c3(0x42f)]))_0x5596a8();else _0x47cdd0['addEv'+_0x4cf7c3(0x332)+_0x4cf7c3(0x273)+'r'](_0x4cf7c3(0x1bf)+'ntent'+_0x4cf7c3(0x5ec)+'d',_0x54940e,{'once':!![]});}}_0x3ff87a['appen'+_0x4cf7c3(0x3d3)+'d'](_0x5b09af);if(_0x58fb56&&_0x58fb56[_0x4cf7c3(0x288)+'h']){var _0x1dd866=document[_0x4cf7c3(0x4ee)+'eElem'+_0x4cf7c3(0x4aa)](_0x4cf7c3(0x36b));_0x1dd866[_0x4cf7c3(0x1b3)+'Name']='sk-mb'+'ody';var _0x58b7fd=document[_0x4cf7c3(0x4ee)+_0x4cf7c3(0x5df)+'ent'](_0x912a0[_0x4cf7c3(0x5a9)]);_0x58b7fd[_0x4cf7c3(0x1b3)+_0x4cf7c3(0x3f8)]='sk-md'+_0x4cf7c3(0x1ad),_0x58b7fd[_0x4cf7c3(0x35c)+'onten'+'t']=_0x253719,_0x1dd866[_0x4cf7c3(0x6cb)+_0x4cf7c3(0x3d3)+'d'](_0x58b7fd);for(var _0x2d767a of _0x58fb56)_0x1dd866[_0x4cf7c3(0x6cb)+_0x4cf7c3(0x3d3)+'d'](_0x2d767a);_0x3ff87a['appen'+_0x4cf7c3(0x3d3)+'d'](_0x1dd866);}return _0x3ff87a;}var _0x244db9=[{'id':_0x481f93(0x2cc)+'t','label':'Comba'+'t'},{'id':_0x1b649f[_0x481f93(0x1fa)],'label':_0x481f93(0x600)},{'id':_0x1b649f[_0x481f93(0x430)],'label':_0x1b649f[_0x481f93(0x555)]},{'id':_0x1b649f[_0x481f93(0x59f)],'label':_0x1b649f['eJrcZ']},{'id':_0x481f93(0x697),'label':_0x481f93(0x69b)+'y'}];function _0xa06d75(){var _0x2e1704=_0x481f93,_0x1ff0ac=_0x372c09['safeM'+_0x2e1704(0x433)]?'SAFE\x20'+_0x2e1704(0x2db)+_0x2e1704(0x31f)+_0x2e1704(0x39f)+_0x2e1704(0x36f)+'\x20no\x20h'+_0x2e1704(0x68b)+_0x2e1704(0x4ce)+_0x2e1704(0x1c1)+_0x2e1704(0x59d)+')':_0x372c09[_0x2e1704(0x137)]?_0x912a0[_0x2e1704(0x491)](_0x912a0['yDhdM'](_0x912a0[_0x2e1704(0x491)](_0x2e1704(0x199)+'bound'+'\x20'+(_0x372c09[_0x2e1704(0x383)+_0x2e1704(0x31e)]?_0x912a0[_0x2e1704(0x3e5)](_0x372c09[_0x2e1704(0x383)+'Ok']+'/',_0x372c09['hooks'+_0x2e1704(0x31e)])+(_0x2e1704(0x699)+'s'):_0x2e1704(0x5cb)+'ks\x20ar'+'med\x20('+_0x2e1704(0x3eb)+'ff)'),_0x2e1704(0x667)+_0x2e1704(0x1a1))+(_0x372c09[_0x2e1704(0x6ce)+_0x2e1704(0x676)]?_0x912a0[_0x2e1704(0x634)]:_0x912a0['PqAxh'])+(_0x2e1704(0x182)+_0x2e1704(0x6c8)+'\x20'),_0x372c09['shoot'+'ers']?_0x912a0['swuwu']:_0x2e1704(0x493)),_0x912a0['kbgia'])+(_0x372c09[_0x2e1704(0x652)+'ents']?_0x2e1704(0x4d3):_0x912a0['aliwl']):_0x2e1704(0x199)+_0x2e1704(0x22a)+_0x2e1704(0x3f5)+_0x2e1704(0x3e9)+'ay\x20on'+'ly\x20(r'+_0x2e1704(0x1d8)+_0x2e1704(0x29c)+_0x2e1704(0x1a7)+_0x2e1704(0x1c3)+_0x2e1704(0x187);if(_0x372c09['lastE'+'rror'])_0x1ff0ac+=_0x912a0[_0x2e1704(0x23c)](_0x912a0[_0x2e1704(0x44c)],_0x372c09[_0x2e1704(0x3c9)+_0x2e1704(0x14a)]);return _0x581d1a('Statu'+'s',_0x1ff0ac,_0x372c09[_0x2e1704(0x137)],null,[_0x14e817(_0x2e1704(0x476)+_0x2e1704(0x221)+_0x2e1704(0x145),_0x912a0[_0x2e1704(0x2ac)],_0x2e4227(_0x2e1704(0x220),()=>{var _0x2152d9=_0x2e1704,_0x154ed7={'pZjyu':'sakur'+_0x2152d9(0x30a)+_0x2152d9(0x1ca)+'v1'};if(_0x2152d9(0x183)===_0x2152d9(0x183))try{if(_0x15cf6a)_0x15cf6a[_0x2152d9(0x3bf)](_0x912a0[_0x2152d9(0x50c)],_0x2152d9(0x1fd)+_0x2152d9(0x59c)+'Frame'+_0x2152d9(0x297),[0x3*-0xc6b+0x1b18+0xb19]);}catch(_0x3dbe89){}else _0x3cf5f1=_0x3d42c1[_0x2152d9(0x283)](_0x48380d[_0x2152d9(0x1b0)+'em'](_0x154ed7['pZjyu'])||'{}');}))]);}function _0x49cda9(_0x828d82){var _0x5b6bbc=_0x481f93,_0x321ba2={'uzIEQ':function(_0x4daa6b,_0x3c84ad){return _0x4daa6b===_0x3c84ad;},'HxfyS':_0x1b649f[_0x5b6bbc(0x561)],'yBPMX':_0x1b649f['TPfSm'],'whSOR':function(_0x28d6eb){var _0x392db3=_0x5b6bbc;return _0x1b649f[_0x392db3(0x52c)](_0x28d6eb);},'BXkNt':function(_0x59cacc,_0x4fb94f,_0x11f959){return _0x59cacc(_0x4fb94f,_0x11f959);},'nbxhG':'noRec'+_0x5b6bbc(0x4eb),'hZvec':function(_0x4de92b,_0x3ac29f){return _0x4de92b*_0x3ac29f;},'ximYm':function(_0x57594e,_0x15b1d5){return _0x57594e+_0x15b1d5;},'iXtrd':_0x5b6bbc(0x214)+_0x5b6bbc(0x488)+_0x5b6bbc(0x47e)+'f,sys'+_0x5b6bbc(0x42d)+_0x5b6bbc(0x65a)+_0x5b6bbc(0x354)+'if','YifRJ':_0x1b649f[_0x5b6bbc(0x572)],'uuGmf':function(_0x5e1884,_0x191884){var _0x1777e0=_0x5b6bbc;return _0x1b649f[_0x1777e0(0x3a2)](_0x5e1884,_0x191884);},'VGOxY':function(_0x497c88,_0x49e0b8){var _0xb2a84a=_0x5b6bbc;return _0x1b649f[_0xb2a84a(0x6be)](_0x497c88,_0x49e0b8);},'vNcLC':_0x5b6bbc(0x3b9)+'255,2'+'35,24'+'0,0.8'+')','hzNXm':function(_0x3322e6,_0x43fb42){var _0x382688=_0x5b6bbc;return _0x1b649f[_0x382688(0x1c6)](_0x3322e6,_0x43fb42);},'bNPMO':function(_0x1e98eb,_0x4f7c9b){return _0x1b649f['zkjBW'](_0x1e98eb,_0x4f7c9b);},'szJTE':function(_0x557c43,_0x36e47,_0x39601e,_0x362482){var _0x2ba6fb=_0x5b6bbc;return _0x1b649f[_0x2ba6fb(0x67b)](_0x557c43,_0x36e47,_0x39601e,_0x362482);},'KTUOz':function(_0x3d900a,_0x58cf19){return _0x3d900a!=_0x58cf19;},'ndIJp':_0x1b649f[_0x5b6bbc(0x549)],'bgemA':_0x5b6bbc(0x2fc),'dBnCQ':function(_0x27c5ff){return _0x27c5ff();}};if(_0x828d82===_0x1b649f[_0x5b6bbc(0x29d)])return[_0xa06d75(),_0x1b649f[_0x5b6bbc(0x643)](_0x581d1a,_0x5b6bbc(0x2fd)+_0x5b6bbc(0x433),_0x5b6bbc(0x35b)+'s\x20OHe'+_0x5b6bbc(0x63b)+_0x5b6bbc(0x44f)+_0x5b6bbc(0x2d1)+_0x5b6bbc(0x588)+_0x5b6bbc(0x554)+_0x5b6bbc(0x1f7)+_0x5b6bbc(0x14f)+_0x5b6bbc(0x408)+_0x5b6bbc(0x208)+_0x5b6bbc(0x134)+_0x5b6bbc(0x551)+_0x5b6bbc(0x596)+'\x20hurt'+_0x5b6bbc(0x2e7)+_0x5b6bbc(0x46d)+_0x5b6bbc(0x53d),_0x20cccc[_0x5b6bbc(0x3b4)],_0x1b238a=>{var _0x27cb34=_0x5b6bbc;_0x20cccc[_0x27cb34(0x3b4)]=_0x1b238a,_0x912a0[_0x27cb34(0x29f)](_0x430fd6),_0x5b79ed(_0x27cb34(0x3b4),_0x1b238a),_0x5b79ed(_0x27cb34(0x466)+'e',_0x1b238a);},[]),_0x581d1a(_0x5b6bbc(0x18e)+'coil',_0x5b6bbc(0x37e)+_0x5b6bbc(0x5cf)+_0x5b6bbc(0x3ec)+_0x5b6bbc(0x674)+'ick\x20s'+_0x5b6bbc(0x528)+_0x5b6bbc(0x4db)+'il\x20sp'+_0x5b6bbc(0x426)+_0x5b6bbc(0x32e)+_0x5b6bbc(0x4f9)+'ance.',_0x20cccc[_0x5b6bbc(0x546)+_0x5b6bbc(0x4eb)],_0xff7efa=>{var _0x57d13b=_0x5b6bbc;_0x321ba2[_0x57d13b(0x663)](_0x321ba2[_0x57d13b(0x174)],_0x321ba2['yBPMX'])?(_0x338277[_0x57d13b(0x16c)+'le']=_0x18c2b9,_0x273275()):(_0x20cccc[_0x57d13b(0x546)+'oil']=_0xff7efa,_0x321ba2[_0x57d13b(0x659)](_0x430fd6),_0x321ba2[_0x57d13b(0x571)](_0x5b79ed,_0x321ba2['nbxhG'],_0xff7efa));},[]),_0x581d1a(_0x5b6bbc(0x1cd)+_0x5b6bbc(0x29a),'Zeroe'+'s\x20spr'+'ead\x20a'+_0x5b6bbc(0x4fa)+'xes\x20a'+_0x5b6bbc(0x296)+'cy\x20on'+_0x5b6bbc(0x16a)+_0x5b6bbc(0x592)+'on\x20ev'+'ery\x202'+'00ms.',_0x20cccc[_0x5b6bbc(0x342)+'ead'],_0x572fd6=>{var _0x1da0b6=_0x5b6bbc;_0x20cccc[_0x1da0b6(0x342)+'ead']=_0x572fd6,_0x430fd6();},[]),_0x1b649f[_0x5b6bbc(0x643)](_0x581d1a,'Rapid'+_0x5b6bbc(0x176)+_0x5b6bbc(0x628)+']','Scale'+'s\x20Ove'+_0x5b6bbc(0x57e)+_0x5b6bbc(0x490)+'n.fir'+_0x5b6bbc(0x2cd)+_0x5b6bbc(0x28a)+_0x5b6bbc(0x25f)+_0x5b6bbc(0x13b)+_0x5b6bbc(0x50f)+_0x5b6bbc(0x325)+'\x20gate'+_0x5b6bbc(0x403)+'s.',_0x20cccc['rapid'+_0x5b6bbc(0x687)],_0x41797d=>{var _0x1b982b=_0x5b6bbc;_0x20cccc[_0x1b982b(0x4b2)+'Exp']=_0x41797d,_0x321ba2['whSOR'](_0x430fd6);},[]),_0x581d1a(_0x5b6bbc(0x356)+_0x5b6bbc(0x55a)+'P]',_0x5b6bbc(0x334)+_0x5b6bbc(0x527)+_0x5b6bbc(0x20a)+_0x5b6bbc(0x281)+_0x5b6bbc(0x14b)+_0x5b6bbc(0x616)+_0x5b6bbc(0x247)+_0x5b6bbc(0x147)+_0x5b6bbc(0x677)+'\x20the\x20'+_0x5b6bbc(0x29b)+'r\x20val'+_0x5b6bbc(0x67e)+'s.',_0x20cccc[_0x5b6bbc(0x42e)+_0x5b6bbc(0x1b1)],_0x33c871=>{var _0x5db61e=_0x5b6bbc;_0x20cccc[_0x5db61e(0x42e)+'eExp']=_0x33c871,_0x430fd6();},[_0x1b649f[_0x5b6bbc(0x286)](_0x14e817,_0x1b649f[_0x5b6bbc(0x6cf)],null,_0x1b649f[_0x5b6bbc(0x643)](_0x47f62a,_0x20cccc[_0x5b6bbc(0x42e)+'eValu'+'e'],0xdb9+0xfa*-0x27+0x1867,-0xa3*-0x20+-0xb4e*-0x1+-0x1dba,-0x1f73+-0x52b+0x53*0x71,_0x33e570=>{var _0x2a5216=_0x5b6bbc;_0x20cccc['damag'+_0x2a5216(0x48f)+'e']=_0x33e570,_0x430fd6();}))]),_0x581d1a(_0x5b6bbc(0x5b5)+_0x5b6bbc(0x529)+'mmo\x20['+_0x5b6bbc(0x144),_0x5b6bbc(0x282)+_0x5b6bbc(0x562)+'e\x20wea'+_0x5b6bbc(0x347)+_0x5b6bbc(0x399)+_0x5b6bbc(0x1a9)+_0x5b6bbc(0x5fd)+'\x20999\x20'+_0x5b6bbc(0x52e)+'\x20200m'+'s.',_0x20cccc[_0x5b6bbc(0x3c2)+'moExp'],_0x499471=>{var _0x4f3b5b=_0x5b6bbc;_0x20cccc['infAm'+_0x4f3b5b(0x586)]=_0x499471,_0x430fd6();},[_0x40c1ba(_0x5b6bbc(0x1bd)+_0x5b6bbc(0x2c1)+_0x5b6bbc(0x469)+_0x5b6bbc(0x307)+'in,\x20t'+_0x5b6bbc(0x218)+_0x5b6bbc(0x585)+_0x5b6bbc(0x133)+'ppens'+'\x20else'+'where'+'.')])];if(_0x828d82===_0x1b649f[_0x5b6bbc(0x1fa)]){if('NdFgS'!==_0x1b649f['kapLD']){var _0x36b525=new _0x3f703d(_0x3a5b4d)['readF'+_0x5b6bbc(0x46f)](_0x4d1e66,_0x26d74e);_0x6b8499['set'](_0x16b570,_0x36b525!==_0x47da44?_0x36b525[_0x5b6bbc(0x362)]():null);}else return[_0x581d1a(_0x5b6bbc(0x1ef),_0x1b649f[_0x5b6bbc(0x58a)],_0x1b649f[_0x5b6bbc(0x40c)](_0x20cccc[_0x5b6bbc(0x1ff)+'Pct'],0xd80+0x509*0x5+-0x2649),null,[_0x14e817(_0x1b649f[_0x5b6bbc(0x393)],_0x5b6bbc(0x4a8)+_0x5b6bbc(0x6c3)+'ult',_0x1b649f[_0x5b6bbc(0x643)](_0x47f62a,_0x20cccc[_0x5b6bbc(0x1ff)+_0x5b6bbc(0x41c)],0x1f84+-0x1357+-0xbfb*0x1,0x1084+-0x35e+-0xbfa,-0x241f+0x1924+0xb00,_0x253768=>{var _0x17059a=_0x5b6bbc;_0x20cccc[_0x17059a(0x1ff)+_0x17059a(0x41c)]=_0x253768,_0x430fd6();}))]),_0x581d1a(_0x5b6bbc(0x474)+_0x5b6bbc(0x34f)+_0x5b6bbc(0x5eb),'Scale'+_0x5b6bbc(0x445)+_0x5b6bbc(0x6ac)+'.jump'+'Force'+'\x20and\x20'+'both\x20'+_0x5b6bbc(0x6d5)+'ty\x20va'+_0x5b6bbc(0x6b2),_0x1b649f[_0x5b6bbc(0x40c)](_0x20cccc[_0x5b6bbc(0x3b8)+'ct'],0x239c+0x263a*0x1+-0x4972)||_0x20cccc['gravi'+_0x5b6bbc(0x37d)]!==0xd*0xbf+0xf1e+-0x186d,null,[_0x1b649f[_0x5b6bbc(0x52b)](_0x14e817,_0x5b6bbc(0x474)+'%',null,_0x47f62a(_0x20cccc[_0x5b6bbc(0x3b8)+'ct'],-0x259a+-0x250f+-0x4adb*-0x1,0x1*0xae1+0x1*-0x14b3+-0xe*-0xc9,-0x1115*0x1+0x1*0x1381+0x29*-0xf,_0x1cdd6d=>{_0x20cccc['jumpP'+'ct']=_0x1cdd6d,_0x430fd6();})),_0x1b649f[_0x5b6bbc(0x67b)](_0x14e817,_0x1b649f['Ngaor'],_0x5b6bbc(0x2aa)+'\x20=\x20fl'+_0x5b6bbc(0x641),_0x1b649f[_0x5b6bbc(0x643)](_0x47f62a,_0x20cccc[_0x5b6bbc(0x6d5)+_0x5b6bbc(0x37d)],-0x1*0x1bf1+0x17d2+0x163*0x3,0x1452+0x1255*0x2+-0x3834,-0x151*0x8+0xbe8+0x1*-0x15b,_0x57249f=>{var _0x372a45=_0x5b6bbc;if(_0x321ba2[_0x372a45(0x663)](_0x372a45(0x5c8),'WUrlq')){var _0x21067d=('16|15'+_0x372a45(0x375)+'|7|3|'+_0x372a45(0x5c5)+_0x372a45(0x4e6)+'|11|2'+_0x372a45(0x6a0)+'|1|12')[_0x372a45(0x2a9)]('|'),_0x27855e=0x1f2e+0x1*0x13c7+0x5*-0xa31;while(!![]){switch(_0x21067d[_0x27855e++]){case'0':if(_0x55dfe7['round'+_0x372a45(0x538)])_0x4b6bdb['round'+_0x372a45(0x538)](_0x1736f4,_0x2eaef8,_0x4b5729,_0x4b51f9,_0x321ba2['hZvec'](0xb*-0xde+0xe*0x1e1+-0x10bd,_0x454d37));else _0x3eac9e['rect'](_0x5e46ca,_0x3f9ea4,_0x2a4c76,_0x1c8581);continue;case'1':_0x45edac&&(_0x45f800[_0x372a45(0x154)]=_0x321ba2['ximYm']('600\x20',_0x31073f[_0x372a45(0x5a1)]((0x1a48+0x2175+-0x3bb4)*_0x5444f7))+_0x321ba2['iXtrd'],_0x272be3[_0x372a45(0x450)+_0x372a45(0x6e3)]=_0x773ae3?_0x321ba2[_0x372a45(0x250)]:'rgba('+_0x372a45(0x4b9)+'35,24'+_0x372a45(0x51e)+'5)',_0x3bdb7c[_0x372a45(0x381)+'ext'](_0x4c2565,_0x321ba2[_0x372a45(0x256)](_0x32c104,_0x262b5d/(0x1*-0x1367+-0x8ad+0x1c16)),_0x321ba2['uuGmf'](_0x321ba2[_0x372a45(0x256)](_0x1c240e,_0xd7d800/(-0x2042*-0x1+0x4*-0x1c+-0x1fd0)),_0x321ba2[_0x372a45(0x3cd)](-0x865*0x2+-0x2641+0x3713,_0x6d88bb))));continue;case'2':_0x49e62d['textB'+'aseli'+'ne']='middl'+'e';continue;case'3':_0x11ae19['fill']();continue;case'4':_0x221e53[_0x372a45(0x154)]=_0x372a45(0x520)+_0x3df4fc[_0x372a45(0x5a1)]((-0x1*-0x1bc9+-0x3*-0x7d5+0x445*-0xc)*_0x5d23cc)+_0x321ba2[_0x372a45(0x258)];continue;case'5':_0x1bf61f['strok'+'eStyl'+'e']=_0x773ae3?_0xbcd2cf:_0x372a45(0x3b9)+_0x372a45(0x361)+_0x372a45(0x22f)+'7,0.3'+'5)';continue;case'6':_0x338be1[_0x372a45(0x509)+_0x372a45(0x694)]=0x269b*-0x1+0x259*0x5+0x1adf;continue;case'7':_0x19357f[_0x372a45(0x450)+_0x372a45(0x6e3)]=_0x773ae3?'rgba('+_0x372a45(0x361)+'07,15'+'7,0.8'+'5)':_0x372a45(0x3b9)+'22,8,'+_0x372a45(0x570)+'7)';continue;case'8':_0x234bc7[_0x372a45(0x450)+'tyle']=_0x773ae3?_0x372a45(0x455):_0x321ba2['vNcLC'];continue;case'9':_0x773ae3&&(_0xb97a3e['shado'+'wColo'+'r']=_0x8e46bc,_0x348caa[_0x372a45(0x545)+'wBlur']=0x16*-0xef+0x1374*0x1+0x124,_0x2cfa8e['fill'](),_0x166c0b['shado'+_0x372a45(0x675)]=0xa61+-0x85f*-0x4+-0x2bdd);continue;case'10':_0x161303['fillT'+_0x372a45(0x2c5)](_0x13c455,_0x321ba2['hzNXm'](_0x8c5e61,_0x15abb2/(-0x1d9+-0x2538+-0x595*-0x7)),_0x321ba2[_0x372a45(0x1af)](_0xa90dff+_0x2efc2b/(-0xf*-0x16f+0x12b*-0x1+0x515*-0x4),_0x532b6a?(0x122a+0x1d7b+-0x2fa0)*_0x433a19:0x7d5+0x1f*-0xb5+0x3*0x4b2));continue;case'11':_0xb5fab6['textA'+'lign']=_0x372a45(0x647)+'r';continue;case'12':_0x50ebd1[_0x372a45(0x3c7)+'re']();continue;case'13':_0x47d826['strok'+'e']();continue;case'14':_0x2617b3[_0x372a45(0x64b)+_0x372a45(0x195)]();continue;case'15':_0x4ef5b4[_0x372a45(0x3d0)]();continue;case'16':var _0x773ae3=_0x1d7892[_0x372a45(0x327)](_0x2564c5);continue;}break;}}else _0x20cccc[_0x372a45(0x6d5)+_0x372a45(0x37d)]=_0x57249f,_0x430fd6();}))]),_0x1b649f['Nxxeh'](_0x581d1a,_0x1b649f[_0x5b6bbc(0x292)],_0x1b649f['iylwH'],_0x20cccc[_0x5b6bbc(0x3f0)],_0x515794=>{var _0xbad57=_0x5b6bbc;_0xbad57(0x68e)!==_0x912a0['vfyDq']?_0x49d59a[_0xbad57(0x150)][_0xbad57(0x6cb)+_0xbad57(0x3d3)+'d'](_0xbe967f):(_0x20cccc[_0xbad57(0x3f0)]=_0x515794,_0x430fd6());},[])];}if(_0x828d82==='visua'+'l')return[_0x581d1a(_0x5b6bbc(0x4f3)+'rokes','WASD\x20'+_0x5b6bbc(0x15a)+'/RMB\x20'+_0x5b6bbc(0x5fc)+'ce\x20ov'+_0x5b6bbc(0x5b8)+'.',_0x20cccc['keyst'+_0x5b6bbc(0x26b)],_0x3169a1=>{var _0x3a2dd0=_0x5b6bbc;if('rNVWA'===_0x912a0['NeXuv'])try{_0x3e260e['body'][_0x3a2dd0(0x6cb)+_0x3a2dd0(0x3d3)+'d'](_0x5077ce);}catch(_0x232a18){}else _0x20cccc[_0x3a2dd0(0x2bd)+'rokes']=_0x3169a1,_0x430fd6();},[_0x14e817(_0x5b6bbc(0x4c6)+_0x5b6bbc(0x414),null,_0x1b649f[_0x5b6bbc(0x52b)](_0x43aae4,_0x20cccc[_0x5b6bbc(0x623)],[['bl',_0x1b649f[_0x5b6bbc(0x60b)]],['br',_0x1b649f[_0x5b6bbc(0x660)]],['ml','Left\x20'+'middl'+'e']],_0x1e854c=>{_0x20cccc['ksPos']=_0x1e854c,_0x430fd6();})),_0x14e817('Size',null,_0x47f62a(_0x20cccc[_0x5b6bbc(0x16c)+'le'],0x1d95*-0x1+0x1305*-0x1+0x309a+0.6,0x245b*0x1+-0x14*0x3+-0x3*0xc0a+0.6000000000000001,0x2674+0x1d8f+-0x2f5*0x17+0.05,_0x376010=>{_0x20cccc['ksSca'+'le']=_0x376010,_0x430fd6();})),_0x1b649f[_0x5b6bbc(0x5e2)](_0x14e817,_0x1b649f[_0x5b6bbc(0x3a5)],null,_0x1b649f[_0x5b6bbc(0x23b)](_0x28ee86,_0x20cccc['ksCps'],_0x520afd=>{var _0x304af2=_0x5b6bbc;if(_0x321ba2['ndIJp']!==_0x321ba2['bgemA'])_0x20cccc[_0x304af2(0x2c2)]=_0x520afd,_0x430fd6();else{var _0x168b69=_0x321ba2[_0x304af2(0x13d)](_0x524543,_0x268585,_0x138044,_0x1d296e);if(_0x321ba2[_0x304af2(0x683)](_0x168b69,null))_0x49ff86(_0x5eae65,_0x199d62,_0x15a54b,_0x321ba2['VGOxY'](_0x168b69,_0x27ffbb));}}))]),_0x581d1a(_0x1b649f[_0x5b6bbc(0x416)],'Custo'+'m\x20cen'+'ter\x20c'+_0x5b6bbc(0x48e)+_0x5b6bbc(0x622),_0x20cccc[_0x5b6bbc(0x54a)+'hair'],_0x2df998=>{var _0x4b76c3=_0x5b6bbc,_0xcf2c7a={'wAZQv':_0x912a0[_0x4b76c3(0x496)],'upyBy':_0x4b76c3(0x6e2)+'creen'+_0x4b76c3(0x3f4)+'s','TsifV':'kour-'+_0x4b76c3(0x2e1),'gdMmB':_0x912a0[_0x4b76c3(0x463)]};if(_0x912a0[_0x4b76c3(0x146)]==='tSGfj')for(var _0x326443 of[_0xcf2c7a[_0x4b76c3(0x192)],_0x4b76c3(0x3c5)+'io_72'+'8x90-'+_0x4b76c3(0x4df)+'t',_0x4b76c3(0x3c5)+_0x4b76c3(0x537)+_0x4b76c3(0x593)+_0x4b76c3(0x1f0)+'nt','fulls'+_0x4b76c3(0x1dd)+'-banr'+'s']){var _0xa4d577=_0x5e0532[_0x4b76c3(0x1b8)+'ement'+'ById'](_0x326443);if(_0xa4d577&&_0x326443===_0xcf2c7a[_0x4b76c3(0x157)]){var _0x1da48e=_0xa4d577['child'+_0x4b76c3(0x4ae)];for(var _0x589106=-0x1ceb*-0x1+0xfd4+0x91*-0x4f;_0x589106<_0x1da48e['lengt'+'h'];_0x589106++){if(_0x1da48e[_0x589106]['id']&&_0x1da48e[_0x589106]['id']['index'+'Of'](_0xcf2c7a[_0x4b76c3(0x451)])===0xb8b+0x10cc+-0x1c57)_0x1da48e[_0x589106]['style'][_0x4b76c3(0x424)+'ay']=_0x4b76c3(0x493);}}else{if(_0xa4d577)_0xa4d577['style'][_0x4b76c3(0x424)+'ay']=_0xcf2c7a[_0x4b76c3(0x522)];}}else _0x20cccc[_0x4b76c3(0x54a)+_0x4b76c3(0x299)]=_0x2df998,_0x430fd6();},[_0x14e817('Size',null,_0x47f62a(_0x20cccc[_0x5b6bbc(0x4e5)+'e'],-0x3*-0xb0f+0x121*-0x9+-0x1704+0.5,-0x49*-0x1+-0xc3b+0xbf4+0.5,-0xf3d*-0x2+-0xb81+-0x12f9+0.1,_0x3568d8=>{var _0x22fcc5=_0x5b6bbc;_0x20cccc[_0x22fcc5(0x4e5)+'e']=_0x3568d8,_0x321ba2['dBnCQ'](_0x430fd6);})),_0x1b649f['Lloum'](_0x14e817,_0x5b6bbc(0x481),null,_0x1b649f[_0x5b6bbc(0x45a)](_0x6e20e2,_0x20cccc[_0x5b6bbc(0x1ba)+'or'],_0x420aff=>{_0x20cccc['chCol'+'or']=_0x420aff,_0x430fd6();}))]),_0x581d1a(_0x1b649f[_0x5b6bbc(0x48a)],_0x1b649f[_0x5b6bbc(0x4d0)],_0x20cccc[_0x5b6bbc(0x3b2)],null,[_0x14e817(_0x1b649f['ITAXV'],null,_0x28ee86(_0x20cccc[_0x5b6bbc(0x3b2)],_0xd2f29=>{var _0x2e1eb5=_0x5b6bbc;_0x20cccc['fps']=_0xd2f29,_0x321ba2[_0x2e1eb5(0x659)](_0x430fd6);})),_0x1b649f[_0x5b6bbc(0x5e7)](_0x40c1ba,'No\x20en'+'emy\x20c'+_0x5b6bbc(0x4b7)+_0x5b6bbc(0x33f)+'is\x20bu'+_0x5b6bbc(0x51c)+'as\x20no'+'\x20GetV'+_0x5b6bbc(0x4b0)+_0x5b6bbc(0x5ce)+'ers\x20t'+'o\x20pig'+'gybac'+_0x5b6bbc(0x1ae))])];if(_0x828d82==='misc')return[_0x581d1a(_0x1b649f['FgUpU'],_0x1b649f[_0x5b6bbc(0x461)],_0x20cccc['adblo'+'ck'],_0x25887c=>{var _0x4a394e=_0x5b6bbc;_0x20cccc['adblo'+'ck']=_0x25887c,_0x912a0[_0x4a394e(0x5bf)](_0x430fd6);},[_0x40c1ba(_0x1b649f[_0x5b6bbc(0x1bb)])])];return[_0x581d1a(_0x1b649f['UxeVi'],'Skips'+_0x5b6bbc(0x5f8)+'\x20enti'+_0x5b6bbc(0x374)+_0x5b6bbc(0x6af)+_0x5b6bbc(0x348)+_0x5b6bbc(0x383)+_0x5b6bbc(0x407)+_0x5b6bbc(0x359)+_0x5b6bbc(0x20d)+'atche'+'s\x20won'+_0x5b6bbc(0x56f)+_0x5b6bbc(0x5f1),_0x20cccc['safeM'+'ode'],_0xf29809=>{var _0x45da7c=_0x5b6bbc;_0x912a0[_0x45da7c(0x291)]('KDbjz',_0x45da7c(0x5ff))?_0xd41ee5['set'](_0x15e826,null):(_0x20cccc[_0x45da7c(0x1d4)+_0x45da7c(0x433)]=_0xf29809,_0x430fd6(),location[_0x45da7c(0x614)+'d']());},[_0x1b649f['PLbeT'](_0x40c1ba,_0x5b6bbc(0x1d0)+'es\x20on'+'\x20relo'+_0x5b6bbc(0x56d)+_0x5b6bbc(0x53a)+'ches\x20'+'load\x20'+_0x5b6bbc(0x19f)+_0x5b6bbc(0x2d7)+_0x5b6bbc(0x20b)+_0x5b6bbc(0x597)+'eeze\x20'+_0x5b6bbc(0x6dc)+_0x5b6bbc(0x457)+_0x5b6bbc(0x4ab)+'\x20—\x20te'+_0x5b6bbc(0x443)+'\x20the\x20'+_0x5b6bbc(0x383)+'-appl'+_0x5b6bbc(0x53c)+_0x5b6bbc(0x197))]),_0x1b649f[_0x5b6bbc(0x643)](_0x581d1a,_0x5b6bbc(0x51d)+'risk\x20'+'switc'+_0x5b6bbc(0x542),_0x1b649f[_0x5b6bbc(0x3c0)],_0x20cccc[_0x5b6bbc(0x61e)+'od']||_0x20cccc[_0x5b6bbc(0x61e)+_0x5b6bbc(0x225)]||_0x20cccc[_0x5b6bbc(0x155)+'oReco'+'il']||_0x20cccc[_0x5b6bbc(0x269)+_0x5b6bbc(0x21e)+'e'],_0x2c3a1f=>{var _0x12ef50=_0x5b6bbc,_0x588668=(_0x12ef50(0x550)+_0x12ef50(0x53e)+'5')['split']('|'),_0x180b1e=0x3*-0x4bd+0x11*0xdb+-0x7*0xc;while(!![]){switch(_0x588668[_0x180b1e++]){case'0':_0x20cccc[_0x12ef50(0x61e)+'od']=_0x2c3a1f;continue;case'1':_0x20cccc[_0x12ef50(0x269)+_0x12ef50(0x21e)+'e']=_0x2c3a1f;continue;case'2':_0x20cccc['hookN'+'oReco'+'il']=_0x2c3a1f;continue;case'3':_0x20cccc[_0x12ef50(0x61e)+'odDie']=_0x2c3a1f;continue;case'4':_0x430fd6();continue;case'5':location['reloa'+'d']();continue;}break;}},[_0x40c1ba(_0x1b649f['alEnM']),_0x1b649f['xFtdr'](_0x14e817,'god\x20('+_0x5b6bbc(0x2b4)+'th.In'+'itiat'+'eTake'+_0x5b6bbc(0x4fe)+'h)',null,_0x28ee86(_0x20cccc['hookG'+'od'],_0x56a433=>{var _0x7ea83=_0x5b6bbc;_0x20cccc[_0x7ea83(0x61e)+'od']=_0x56a433,_0x321ba2['whSOR'](_0x430fd6);})),_0x1b649f[_0x5b6bbc(0x5e2)](_0x14e817,_0x5b6bbc(0x466)+_0x5b6bbc(0x163)+_0x5b6bbc(0x14f)+_0x5b6bbc(0x408)+'lDie)',null,_0x28ee86(_0x20cccc['hookG'+_0x5b6bbc(0x225)],_0x550891=>{var _0xe43ffa=_0x5b6bbc;_0x20cccc[_0xe43ffa(0x61e)+_0xe43ffa(0x225)]=_0x550891,_0x430fd6();})),_0x1b649f[_0x5b6bbc(0x422)](_0x14e817,_0x1b649f[_0x5b6bbc(0x2a2)],null,_0x28ee86(_0x20cccc[_0x5b6bbc(0x155)+'oReco'+'il'],_0x1b151d=>{var _0x5ad58a=_0x5b6bbc;_0x20cccc[_0x5ad58a(0x155)+_0x5ad58a(0x194)+'il']=_0x1b151d,_0x430fd6();})),_0x14e817(_0x1b649f[_0x5b6bbc(0x360)],_0x1b649f['vBiTJ'],_0x28ee86(_0x20cccc[_0x5b6bbc(0x269)+'aptur'+'e'],_0x7eae18=>{var _0xfaa5d3=_0x5b6bbc;_0x20cccc[_0xfaa5d3(0x269)+_0xfaa5d3(0x21e)+'e']=_0x7eae18,_0x912a0['dnIDF'](_0x430fd6);}))]),_0x1b649f['Nxxeh'](_0x581d1a,_0x1b649f[_0x5b6bbc(0x665)],_0x5b6bbc(0x370)+'les\x20C'+_0x5b6bbc(0x16f)+_0x5b6bbc(0x6a8)+_0x5b6bbc(0x190)+'ors\x20a'+'t\x20sta'+'rtup\x20'+'via\x20S'+_0x5b6bbc(0x574)+_0x5b6bbc(0x2c6)+_0x5b6bbc(0x636)+_0x5b6bbc(0x429)+_0x5b6bbc(0x16b),_0x20cccc['actkK'+_0x5b6bbc(0x651)],_0x381965=>{var _0x2ce2a9=_0x5b6bbc;_0x20cccc['actkK'+_0x2ce2a9(0x651)]=_0x381965,_0x430fd6();},[_0x1b649f[_0x5b6bbc(0x162)](_0x40c1ba,_0x1b649f[_0x5b6bbc(0x1f6)],!![])]),_0x1b649f[_0x5b6bbc(0x643)](_0x581d1a,_0x1b649f[_0x5b6bbc(0x353)],_0x1b649f[_0x5b6bbc(0x5b7)],!![],null,[_0x14e817(_0x1b649f[_0x5b6bbc(0x15f)],null,_0x1b649f['EfmEq'](_0x2e4227,_0x1b649f[_0x5b6bbc(0x62f)],()=>{_0x20cccc={..._0x5e41cd},_0x430fd6(),location['reloa'+'d']();}))])];}var _0x2f896a=null;function _0xebb1e4(_0x5713eb){var _0x4b6598=_0x481f93;_0xe07787=_0x5713eb;if(!_0x2f896a){var _0x1c8312=document['creat'+'eElem'+_0x4b6598(0x4aa)]('style');_0x1c8312[_0x4b6598(0x35c)+'onten'+'t']=_0xd588a0,_0x175d90[_0x4b6598(0x6cb)+'dChil'+'d'](_0x1c8312),_0x2f896a=_0x2ff57d(),_0x175d90[_0x4b6598(0x6cb)+_0x4b6598(0x3d3)+'d'](_0x2f896a),_0x1b649f[_0x4b6598(0x3c8)](requestAnimationFrame,()=>_0x2f896a[_0x4b6598(0x1b3)+'List'][_0x4b6598(0x17e)](_0x4b6598(0x1b4)));}_0x2f896a[_0x4b6598(0x1b3)+_0x4b6598(0x668)][_0x4b6598(0x56b)+'e'](_0x1b649f['tgyOo'],_0x5713eb);}function _0xe5e1f5(){_0xebb1e4(!_0xe07787);}function _0x2ff57d(){var _0x26242c=_0x481f93,_0x27ecd5={'YbHIo':function(_0x58841d){var _0x3e70cc=_0x3c05;return _0x1b649f[_0x3e70cc(0x148)](_0x58841d);},'yqEHH':function(_0x148418,_0x30a9d5){return _0x148418+_0x30a9d5;},'xWkis':function(_0x3ee710,_0x2ae29a){var _0x3c4bb9=_0x3c05;return _0x1b649f[_0x3c4bb9(0x34b)](_0x3ee710,_0x2ae29a);},'YXIac':function(_0x22ad88,_0x3ba003){return _0x1b649f['VpTkN'](_0x22ad88,_0x3ba003);},'rlSsV':function(_0x7be78d,_0x5448af){var _0x5ea503=_0x3c05;return _0x1b649f[_0x5ea503(0x6c7)](_0x7be78d,_0x5448af);},'ofoPp':function(_0x26f701,_0xcc57d0){return _0x26f701<_0xcc57d0;},'wdLuN':_0x26242c(0x142),'kQQUW':_0x1b649f[_0x26242c(0x5ad)],'pCmRr':function(_0x217488,_0x30dcb6){var _0x54d254=_0x26242c;return _0x1b649f[_0x54d254(0x406)](_0x217488,_0x30dcb6);},'nImDz':function(_0x48a106,_0x190457){var _0xc566c7=_0x26242c;return _0x1b649f[_0xc566c7(0x5c9)](_0x48a106,_0x190457);},'KoSmL':function(_0x16e961,_0x4d961b){var _0x3a11e0=_0x26242c;return _0x1b649f[_0x3a11e0(0x62b)](_0x16e961,_0x4d961b);},'IRnpU':function(_0x306a58,_0x586aab){return _0x306a58+_0x586aab;},'sbaeJ':'\x20hook'+'s','jSptl':'0\x20hoo'+_0x26242c(0x32c)+'med\x20('+_0x26242c(0x3eb)+'ff)','cImEV':'\x20|\x20sh'+_0x26242c(0x6c8)+'\x20','WXXBf':'held','uVRIn':_0x26242c(0x493),'xbEhp':'\x20|\x20mo'+'vemen'+'t\x20','EeApS':_0x26242c(0x620)+'R:\x20','EMBiD':_0x1b649f[_0x26242c(0x1c8)]},_0x462c6e=document[_0x26242c(0x4ee)+'eElem'+_0x26242c(0x4aa)]('div');_0x462c6e['class'+'Name']=_0x26242c(0x4c8)+_0x26242c(0x6df);var _0x1cc401=document[_0x26242c(0x4ee)+_0x26242c(0x5df)+'ent'](_0x1b649f['dCPAH']);_0x1cc401[_0x26242c(0x1b3)+_0x26242c(0x3f8)]='mn-si'+'de';var _0xc1c861=document[_0x26242c(0x4ee)+_0x26242c(0x5df)+_0x26242c(0x4aa)](_0x26242c(0x36b));_0xc1c861[_0x26242c(0x1b3)+_0x26242c(0x3f8)]=_0x1b649f[_0x26242c(0x1e3)],_0xc1c861[_0x26242c(0x2dd)+_0x26242c(0x4f8)]='<svg\x20'+_0x26242c(0x302)+_0x26242c(0x5a7)+'\x200\x2024'+_0x26242c(0x228)+'class'+'=\x22mn-'+'logo-'+'svg\x22>'+_0x26242c(0x235)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x26242c(0x391)+_0x26242c(0x51f)+_0x26242c(0x4a2)+_0x26242c(0x67c)+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x26242c(0x4a3)+'\x204\x204.'+'5c0\x203'+_0x26242c(0x394)+'5-4\x207'+_0x26242c(0x580)+'fill='+'\x22none'+_0x26242c(0x2e2)+_0x26242c(0x3c4)+'#ff6b'+_0x26242c(0x313)+_0x26242c(0x58e)+_0x26242c(0x207)+_0x26242c(0x582)+_0x26242c(0x22b)+_0x26242c(0x224)+_0x26242c(0x4b1)+_0x26242c(0x151)+_0x26242c(0x37b)+'troke'+_0x26242c(0x272)+'join='+_0x26242c(0x185)+'d\x22/><'+'circl'+'e\x20cx='+_0x26242c(0x2f5)+_0x26242c(0x40b)+'0\x22\x20r='+_0x26242c(0x300)+_0x26242c(0x504)+'=\x22#ff'+'6b9d\x22'+_0x26242c(0x448)+_0x26242c(0x456),_0x1cc401['appen'+_0x26242c(0x3d3)+'d'](_0xc1c861);var _0x10f151=document['creat'+'eElem'+'ent'](_0x1b649f['fQoLz']);_0x10f151[_0x26242c(0x1b3)+'Name']=_0x26242c(0x409)+'in';var _0x56752f=document[_0x26242c(0x4ee)+'eElem'+_0x26242c(0x4aa)](_0x1b649f[_0x26242c(0x380)]);_0x56752f[_0x26242c(0x1b3)+_0x26242c(0x3f8)]=_0x1b649f['adDWq'];var _0x2841f4=document[_0x26242c(0x4ee)+'eElem'+_0x26242c(0x4aa)](_0x1b649f['fQoLz']);_0x2841f4[_0x26242c(0x1b3)+'Name']=_0x26242c(0x58b)+'tles';var _0x5cf65a=document['creat'+_0x26242c(0x5df)+_0x26242c(0x4aa)]('h2');_0x5cf65a[_0x26242c(0x1b3)+_0x26242c(0x3f8)]=_0x1b649f[_0x26242c(0x678)],_0x5cf65a[_0x26242c(0x35c)+_0x26242c(0x2f3)+'t']='Sakur'+_0x26242c(0x33e)+'r';var _0x3afdf2=document[_0x26242c(0x4ee)+_0x26242c(0x5df)+'ent']('small');_0x3afdf2['class'+'Name']=_0x26242c(0x6a6)+'b',_0x3afdf2[_0x26242c(0x35c)+_0x26242c(0x2f3)+'t']=_0x1b649f['jPgcR'],_0x2841f4[_0x26242c(0x6cb)+'d'](_0x5cf65a,_0x3afdf2);var _0x25d548=document[_0x26242c(0x4ee)+'eElem'+'ent']('butto'+'n');_0x25d548[_0x26242c(0x447)]=_0x1b649f['OGbkO'],_0x25d548[_0x26242c(0x1b3)+'Name']=_0x1b649f['poZWM'],_0x25d548[_0x26242c(0x2a4)]='Close',_0x25d548['inner'+_0x26242c(0x4f8)]=_0x1b649f[_0x26242c(0x43c)],_0x25d548[_0x26242c(0x277)+'ck']=()=>_0xebb1e4(![]),_0x56752f[_0x26242c(0x6cb)+'d'](_0x2841f4,_0x25d548);var _0x363cd8=document[_0x26242c(0x4ee)+_0x26242c(0x5df)+'ent'](_0x1b649f[_0x26242c(0x238)]);_0x363cd8[_0x26242c(0x1b3)+_0x26242c(0x3f8)]=_0x26242c(0x54b)+'ls',_0x10f151[_0x26242c(0x6cb)+'d'](_0x56752f,_0x363cd8),_0x462c6e['appen'+'d'](_0x1cc401,_0x10f151);var _0x4ad8d2=new Map();for(var _0x5d8eb9 of _0x244db9){var _0x45f986=document[_0x26242c(0x4ee)+'eElem'+'ent'](_0x26242c(0x244)+'n');_0x45f986[_0x26242c(0x447)]=_0x26242c(0x244)+'n',_0x45f986['class'+'Name']=_0x1b649f[_0x26242c(0x392)],_0x45f986[_0x26242c(0x2a4)]=_0x5d8eb9[_0x26242c(0x2b3)],_0x45f986['inner'+'HTML']=_0x1b649f[_0x26242c(0x61c)]+_0x5d8eb9[_0x26242c(0x2b3)]+(_0x26242c(0x4c7)+_0x26242c(0x41b)),_0x45f986['oncli'+'ck']=(_0x2ba3ca=>()=>_0x25a512(_0x2ba3ca))(_0x5d8eb9['id']),_0x4ad8d2['set'](_0x5d8eb9['id'],_0x45f986),_0x1cc401['appen'+_0x26242c(0x3d3)+'d'](_0x45f986);}function _0x25a512(_0x181a6b){var _0x405a52=_0x26242c;_0x5a0583[_0x405a52(0x33a)]=_0x181a6b,_0x27ecd5[_0x405a52(0x3db)](_0x46edfa);var _0x59d0c0=_0x244db9[_0x405a52(0x607)](_0x26aac3=>_0x26aac3['id']===_0x181a6b)||_0x244db9[-0x3f*-0x5b+0x1*-0x84b+0x1*-0xe1a];_0x5cf65a['textC'+'onten'+'t']=_0x27ecd5['yqEHH'](_0x405a52(0x63f)+_0x405a52(0x33e)+_0x405a52(0x2eb),_0x59d0c0[_0x405a52(0x2b3)]);for(var [_0x1cc5d5,_0x42cfcc]of _0x4ad8d2)_0x42cfcc[_0x405a52(0x1b3)+_0x405a52(0x668)]['toggl'+'e'](_0x405a52(0x48b)+'e',_0x27ecd5[_0x405a52(0x261)](_0x1cc5d5,_0x181a6b));_0x363cd8[_0x405a52(0x419)+_0x405a52(0x24d)+_0x405a52(0x531)](..._0x27ecd5[_0x405a52(0x69a)](_0x49cda9,_0x181a6b));}return _0x1b649f[_0x26242c(0x34c)](_0x25a512,_0x5a0583['cat']||_0x26242c(0x2cc)+'t'),_0x1b649f[_0x26242c(0x337)](setInterval,()=>{var _0x2839ba=_0x26242c,_0x3e7cc3={'ThLfq':function(_0x3bb63a,_0x1ed2ca){return _0x3bb63a(_0x1ed2ca);},'mhgUI':_0x2839ba(0x654),'KiMZY':function(_0x35559a,_0x4b5474){var _0x3d6a3f=_0x2839ba;return _0x27ecd5[_0x3d6a3f(0x30b)](_0x35559a,_0x4b5474);},'OBbwu':function(_0x21e83e,_0x43f017){return _0x21e83e/_0x43f017;}};if(!_0xe07787)return;var _0x587937=_0x363cd8['child'+_0x2839ba(0x4ae)];for(var _0x3a4a1c=0x1*-0x199f+-0x2f*-0x83+-0x6*-0x43;_0x27ecd5['ofoPp'](_0x3a4a1c,_0x587937['lengt'+'h']);_0x3a4a1c++){if(_0x27ecd5[_0x2839ba(0x24b)]==='bnSbz')_0x45f66d[_0x2839ba(0x35c)+_0x2839ba(0x2f3)+'t']=_0x3e7cc3['ThLfq'](_0x470034,_0x48805d[_0x2839ba(0x3fa)]),_0x2406af[_0x2839ba(0x3cf)][_0x2839ba(0x202)+_0x2839ba(0x2ee)+'y'](_0x3e7cc3[_0x2839ba(0x265)],_0x3e7cc3['KiMZY'](_0x3e7cc3[_0x2839ba(0x2cb)](_0x3f71ac[_0x2839ba(0x3fa)]-_0x42056b,_0x36135b-_0x1c86fd),-0x4c7*-0x2+0xe9c+-0x17c6)+'%');else{var _0x386016=_0x587937[_0x3a4a1c][_0x2839ba(0x5c1)+_0x2839ba(0x589)+_0x2839ba(0x4b8)](_0x27ecd5['kQQUW']);_0x386016&&(_0x386016[_0x2839ba(0x35c)+_0x2839ba(0x2f3)+'t'][_0x2839ba(0x6bd)+'Of']('UWMK')===-0x653*0x1+-0x9*0x5c+-0x1*-0x98f||_0x386016['textC'+'onten'+'t'][_0x2839ba(0x6bd)+'Of']('SAFE')===-0x557*0x2+0x209*0x2+0x69c)&&(_0x386016[_0x2839ba(0x35c)+'onten'+'t']=_0x372c09[_0x2839ba(0x1d4)+_0x2839ba(0x433)]?_0x2839ba(0x27f)+_0x2839ba(0x2db)+_0x2839ba(0x1d7)+_0x2839ba(0x39f)+'only,'+_0x2839ba(0x3da)+_0x2839ba(0x68b)+_0x2839ba(0x4ce)+_0x2839ba(0x1c1)+_0x2839ba(0x59d)+')':_0x372c09['uwmk']?_0x27ecd5['pCmRr'](_0x27ecd5['nImDz'](_0x27ecd5[_0x2839ba(0x1fe)](_0x27ecd5[_0x2839ba(0x4de)]('UWMK\x20'+'bound'+'\x20'+(_0x372c09['hooks'+_0x2839ba(0x31e)]?_0x27ecd5['IRnpU'](_0x372c09['hooks'+'Ok']+'/',_0x372c09[_0x2839ba(0x383)+_0x2839ba(0x31e)])+_0x27ecd5['sbaeJ']:_0x27ecd5[_0x2839ba(0x631)])+('\x20|\x20ga'+_0x2839ba(0x1a1)),_0x372c09[_0x2839ba(0x6ce)+_0x2839ba(0x676)]?_0x2839ba(0x411)+'d':_0x2839ba(0x4f2)+'ng'),_0x27ecd5['cImEV'])+(_0x372c09[_0x2839ba(0x2c3)+_0x2839ba(0x421)]?_0x27ecd5['WXXBf']:_0x27ecd5[_0x2839ba(0x132)])+_0x27ecd5['xbEhp'],_0x372c09['movem'+_0x2839ba(0x601)]?_0x2839ba(0x4d3):'none'),_0x372c09[_0x2839ba(0x3c9)+_0x2839ba(0x14a)]?_0x27ecd5[_0x2839ba(0x164)]+_0x372c09[_0x2839ba(0x3c9)+_0x2839ba(0x14a)]:''):_0x27ecd5['EMBiD']);}}},0x1986+-0x902+-0xc9c),_0x462c6e;}var _0xd588a0=_0x481f93(0x6e1)+':host'+_0x481f93(0x2ec)+'l:\x20in'+_0x481f93(0x338)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x481f93(0x159)+'-sizi'+_0x481f93(0x19b)+_0x481f93(0x3bd)+_0x481f93(0x648)+_0x481f93(0x38c)+'in:\x200'+_0x481f93(0x604)+'t-fam'+_0x481f93(0x3d1)+_0x481f93(0x21d)+_0x481f93(0x478)+'Segoe'+'\x20UI\x22,'+'\x20syst'+'em-ui'+',\x20san'+_0x481f93(0x354)+_0x481f93(0x44a)+_0x481f93(0x6e1)+_0x481f93(0x4f0)+_0x481f93(0x49b)+'{\x20pos'+_0x481f93(0x3c6)+':\x20abs'+_0x481f93(0x227)+_0x481f93(0x20c)+_0x481f93(0x5a5)+_0x481f93(0x55d)+_0x481f93(0x682)+'m:\x2024'+_0x481f93(0x2f4)+'idth:'+_0x481f93(0x2f2)+_0x481f93(0x178)+_0x481f93(0x248)+'c(100'+_0x481f93(0x5fa)+_0x481f93(0x673)+');\x20ma'+_0x481f93(0x2c8)+'ght:\x20'+_0x481f93(0x2ba)+'80px,'+'\x20calc'+'(100v'+'h\x20-\x204'+'8px))'+_0x481f93(0x477)+_0x481f93(0x30f)+'splay'+':\x20fle'+'x;\x20ga'+'p:\x2010'+_0x481f93(0x5bc)+_0x481f93(0x66d)+_0x481f93(0x3dc)+'px;\x20b'+'order'+'-radi'+_0x481f93(0x506)+'2px;\x20'+_0x481f93(0x598)+'er-ev'+'ents:'+'\x20auto'+_0x481f93(0x477)+'\x20\x20\x20ba'+_0x481f93(0x557)+_0x481f93(0x171)+_0x481f93(0x3b9)+'24,17'+',21,.'+'82);\x20'+_0x481f93(0x3a0)+'rop-f'+_0x481f93(0x45d)+_0x481f93(0x4ef)+'r(22p'+'x)\x20sa'+_0x481f93(0x5d3)+'e(150'+'%);\x20-'+_0x481f93(0x1b5)+_0x481f93(0x3d7)+'kdrop'+'-filt'+'er:\x20b'+_0x481f93(0x434)+_0x481f93(0x212)+_0x481f93(0x14e)+_0x481f93(0x47a)+'50%);'+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x481f93(0x569)+'ow:\x200'+_0x481f93(0x495)+_0x481f93(0x266)+_0x481f93(0x3c3)+'55,25'+_0x481f93(0x1c7)+',.06)'+',\x20ins'+_0x481f93(0x284)+_0x481f93(0x3dd)+_0x481f93(0x66c)+_0x481f93(0x58c)+'255,2'+_0x481f93(0x402)+_0x481f93(0x62d)+_0x481f93(0x462)+'\x2080px'+'\x20rgba'+_0x481f93(0x53f)+_0x481f93(0x364)+_0x481f93(0x196)+_0x481f93(0x252)+_0x481f93(0x371)+_0x481f93(0x13f)+_0x481f93(0x43a)+_0x481f93(0x219)+_0x481f93(0x141)+'nslat'+'eY(18'+'px);\x20'+'point'+'er-ev'+'ents:'+'\x20none'+_0x481f93(0x511)+_0x481f93(0x444)+'on:\x20o'+'pacit'+_0x481f93(0x246)+_0x481f93(0x311)+_0x481f93(0x679)+_0x481f93(0x54f)+_0x481f93(0x1c4)+_0x481f93(0x6c0)+_0x481f93(0x566)+_0x481f93(0x3bb)+'(.22,'+'1,.36'+_0x481f93(0x279)+_0x481f93(0x56e)+_0x481f93(0x539)+'r:\x20#f'+'6eef2'+';\x20fon'+_0x481f93(0x17a)+_0x481f93(0x66b)+_0x481f93(0x203)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel.'+'shown'+'\x20{\x20op'+_0x481f93(0x3de)+':\x201;\x20'+_0x481f93(0x58f)+_0x481f93(0x4ca)+_0x481f93(0x5da)+_0x481f93(0x1c5)+'nter-'+_0x481f93(0x41f)+'s:\x20au'+_0x481f93(0x609)+_0x481f93(0x6e1)+'.mn-s'+'ide\x20{'+'\x20disp'+'lay:\x20'+'flex;'+_0x481f93(0x30d)+_0x481f93(0x45e)+_0x481f93(0x505)+':\x20col'+'umn;\x20'+'align'+_0x481f93(0x4ba)+'s:\x20ce'+_0x481f93(0x355)+'\x20gap:'+_0x481f93(0x40a)+_0x481f93(0x262)+'h:\x2062'+'px;\x20f'+_0x481f93(0x1cc)+_0x481f93(0x6d0)+'\x20padd'+_0x481f93(0x2b2)+_0x481f93(0x388)+(_0x481f93(0x30c)+_0x481f93(0x21a)+_0x481f93(0x5b1)+'s:\x2016'+_0x481f93(0x4d8)+_0x481f93(0x56e)+'backg'+_0x481f93(0x5a1)+_0x481f93(0x2b0)+'a(255'+_0x481f93(0x136)+_0x481f93(0x65b)+_0x481f93(0x49d)+'\x20box-'+_0x481f93(0x545)+_0x481f93(0x658)+'set\x200'+'\x200\x200\x20'+_0x481f93(0x266)+_0x481f93(0x3c3)+'55,25'+'5,255'+',.05)'+_0x481f93(0x479)+'\x20\x20\x20.m'+_0x481f93(0x2bc)+_0x481f93(0x36a)+'ispla'+_0x481f93(0x5aa)+_0x481f93(0x6b9)+_0x481f93(0x577)+'items'+_0x481f93(0x431)+'ter;\x20'+_0x481f93(0x46a)+_0x481f93(0x65f)+'x;\x20he'+_0x481f93(0x206)+_0x481f93(0x515)+_0x481f93(0x479)+'\x20\x20\x20.m'+'n-log'+_0x481f93(0x610)+'\x20{\x20wi'+_0x481f93(0x239)+'25px;'+'\x20heig'+_0x481f93(0x5a5)+_0x481f93(0x15e)+_0x481f93(0x25a)+'low:\x20'+'visib'+'le;\x20f'+'ilter'+':\x20dro'+_0x481f93(0x240)+'dow(0'+_0x481f93(0x317)+_0x481f93(0x6d4)+'a(255'+_0x481f93(0x576)+_0x481f93(0x205)+'8));\x20'+'}\x0a\x20\x20\x20'+_0x481f93(0x5c7)+_0x481f93(0x2ce)+_0x481f93(0x3fd)+_0x481f93(0x389)+_0x481f93(0x5de)+_0x481f93(0x22c)+'n-ite'+_0x481f93(0x16d)+'enter'+';\x20jus'+_0x481f93(0x5a3)+_0x481f93(0x46c)+'nt:\x20c'+_0x481f93(0x237)+';\x20wid'+_0x481f93(0x173)+_0x481f93(0x4e2)+'heigh'+_0x481f93(0x64a)+_0x481f93(0x289)+_0x481f93(0x3bd)+_0x481f93(0x344)+'borde'+_0x481f93(0x2b1)+_0x481f93(0x5d1)+_0x481f93(0x642)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+'kgrou'+_0x481f93(0x6a3)+_0x481f93(0x47d)+_0x481f93(0x2a7)+_0x481f93(0x1f4)+_0x481f93(0x4d2)+_0x481f93(0x3c3)+_0x481f93(0x135)+'8,242'+',.4);'+_0x481f93(0x1b7)+_0x481f93(0x1a6)+'ointe'+_0x481f93(0x62e)+_0x481f93(0x1f8)+'ze:\x201'+'0px;\x20'+_0x481f93(0x606)+'weigh'+'t:\x2070'+_0x481f93(0x5a2)+_0x481f93(0x169)+'mn-ta'+'b:hov'+_0x481f93(0x1ec)+'color'+_0x481f93(0x2b0)+_0x481f93(0x486)+_0x481f93(0x6b0)+_0x481f93(0x6ba)+'8);\x20}'+'\x0a\x20\x20\x20\x20'+_0x481f93(0x30e)+_0x481f93(0x69e)+_0x481f93(0x498)+_0x481f93(0x524)+'or:\x20#'+'ff6b9'+_0x481f93(0x4a5)+'ckgro'+'und:\x20'+_0x481f93(0x3b9)+'255,1'+'07,15'+_0x481f93(0x25e)+_0x481f93(0x479)+_0x481f93(0x340)+_0x481f93(0x57b)+_0x481f93(0x3ab)+'lex:\x20'+_0x481f93(0x3b3)+_0x481f93(0x17d)+'th:\x200'+_0x481f93(0x39b)+'play:'+'\x20flex'+';\x20fle'+_0x481f93(0x41e)+_0x481f93(0x58d)+'n:\x20co'+_0x481f93(0x442)+_0x481f93(0x2e5)+_0x481f93(0x2d6)+_0x481f93(0x3df)+'{\x20dis'+'play:'+'\x20flex'+_0x481f93(0x630)+_0x481f93(0x1a5)+_0x481f93(0x2d0)+'cente'+_0x481f93(0x4e8)+_0x481f93(0x6db)+_0x481f93(0x5bc)+'addin'+_0x481f93(0x681)+'x\x206px'+_0x481f93(0x664)+_0x481f93(0x51a)+_0x481f93(0x435)+'ect:\x20'+_0x481f93(0x6d0)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x481f93(0x315)+_0x481f93(0x1e5)+'flex:'+_0x481f93(0x37a)+_0x481f93(0x254)+'dth:\x20'+_0x481f93(0x5a2)+_0x481f93(0x169)+'mn-h\x20'+_0x481f93(0x314)+_0x481f93(0x17a)+_0x481f93(0x63a)+'px;\x20f'+_0x481f93(0x6dd)+_0x481f93(0x67d)+':\x20650'+_0x481f93(0x479)+_0x481f93(0x340)+_0x481f93(0x1c0)+'\x20{\x20fo'+_0x481f93(0x1f8)+'ze:\x201'+_0x481f93(0x6c5)+_0x481f93(0x384))+(_0x481f93(0x672)+_0x481f93(0x559)+_0x481f93(0x169)+'mn-cl'+'ose\x20{'+_0x481f93(0x3fd)+_0x481f93(0x389)+'grid;'+_0x481f93(0x568)+_0x481f93(0x1a0)+'ms:\x20c'+_0x481f93(0x237)+';\x20wid'+_0x481f93(0x33b)+_0x481f93(0x684)+'heigh'+_0x481f93(0x186)+_0x481f93(0x289)+'order'+_0x481f93(0x344)+'borde'+_0x481f93(0x2b1)+_0x481f93(0x5d1)+'8px;\x20'+'backg'+_0x481f93(0x5a1)+_0x481f93(0x141)+'nspar'+_0x481f93(0x17f)+_0x481f93(0x3f2)+_0x481f93(0x470)+_0x481f93(0x49c)+_0x481f93(0x573)+'ity:\x20'+_0x481f93(0x437)+_0x481f93(0x180)+'r:\x20po'+_0x481f93(0x2a3)+_0x481f93(0x479)+_0x481f93(0x340)+_0x481f93(0x1e2)+'se:ho'+_0x481f93(0x6a9)+_0x481f93(0x573)+'ity:\x20'+_0x481f93(0x5f0)+_0x481f93(0x557)+_0x481f93(0x171)+_0x481f93(0x3b9)+'255,2'+_0x481f93(0x57d)+'5,.05'+_0x481f93(0x48c)+_0x481f93(0x169)+_0x481f93(0x693)+_0x481f93(0x6b1)+'vg\x20{\x20'+_0x481f93(0x46a)+':\x2014p'+'x;\x20he'+_0x481f93(0x206)+_0x481f93(0x1a2)+';\x20fil'+'l:\x20no'+_0x481f93(0x695)+'troke'+':\x20cur'+_0x481f93(0x2bb)+'olor;'+'\x20stro'+_0x481f93(0x43e)+_0x481f93(0x239)+_0x481f93(0x217)+'roke-'+_0x481f93(0x259)+'ap:\x20r'+'ound;'+'\x20}\x0a\x20\x20'+_0x481f93(0x2d6)+_0x481f93(0x24e)+_0x481f93(0x341)+_0x481f93(0x2b9)+_0x481f93(0x500)+'-heig'+_0x481f93(0x2b6)+';\x20ove'+'rflow'+'-y:\x20a'+_0x481f93(0x4d6)+'displ'+'ay:\x20g'+_0x481f93(0x2a5)+'grid-'+_0x481f93(0x2dc)+'ate-c'+'olumn'+_0x481f93(0x1fb)+'peat('+'auto-'+_0x481f93(0x1e9)+'\x20minm'+_0x481f93(0x44b)+_0x481f93(0x54e)+_0x481f93(0x35d)+';\x20ali'+_0x481f93(0x1a5)+'ems:\x20'+_0x481f93(0x335)+_0x481f93(0x630)+_0x481f93(0x66f)+_0x481f93(0x156)+':\x20sta'+'rt;\x20g'+_0x481f93(0x358)+_0x481f93(0x27a)+'paddi'+'ng:\x200'+_0x481f93(0x4e7)+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x481f93(0x167)+_0x481f93(0x2e6)+'ebkit'+_0x481f93(0x471)+_0x481f93(0x21b)+_0x481f93(0x617)+'dth:\x20'+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x481f93(0x5c7)+'cols:'+_0x481f93(0x4c2)+_0x481f93(0x5e1)+_0x481f93(0x1e8)+'bar-t'+_0x481f93(0x6c1)+_0x481f93(0x2f7)+_0x481f93(0x29e)+'nd:\x20r'+_0x481f93(0x3c3)+_0x481f93(0x57d)+_0x481f93(0x1c7)+_0x481f93(0x2d5)+_0x481f93(0x6a4)+_0x481f93(0x4fc)+'adius'+_0x481f93(0x1b6)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x481f93(0x50a)+'d\x20{\x20b'+'order'+'-radi'+_0x481f93(0x5e6)+'2px;\x20'+'backg'+_0x481f93(0x5a1)+_0x481f93(0x2b0)+'a(255'+_0x481f93(0x136)+_0x481f93(0x65b)+'025);'+'\x20box-'+_0x481f93(0x545)+'w:\x20in'+_0x481f93(0x13a)+_0x481f93(0x495)+_0x481f93(0x266)+'gba(2'+_0x481f93(0x57d)+'5,255'+_0x481f93(0x242)+_0x481f93(0x479)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'{\x20bac'+_0x481f93(0x29e)+_0x481f93(0x44d)+_0x481f93(0x3c3)+_0x481f93(0x57d)+'5,255'+_0x481f93(0x398)+_0x481f93(0x21c)+_0x481f93(0x569)+_0x481f93(0x308)+'nset\x20'+'0\x200\x200'+'\x201px\x20'+_0x481f93(0x3b9)+_0x481f93(0x361)+_0x481f93(0x22f)+_0x481f93(0x3e7)+');\x20}\x0a'+_0x481f93(0x169)+_0x481f93(0x418)+'rd-he'+_0x481f93(0x46e)+_0x481f93(0x424))+('ay:\x20f'+_0x481f93(0x2a6)+'align'+_0x481f93(0x4ba)+_0x481f93(0x427)+_0x481f93(0x355)+_0x481f93(0x401)+_0x481f93(0x543)+'\x20padd'+'ing:\x20'+_0x481f93(0x25b)+_0x481f93(0x441)+_0x481f93(0x2e5)+_0x481f93(0x453)+_0x481f93(0x552)+'-titl'+_0x481f93(0x59a)+_0x481f93(0x1cc)+'1;\x20mi'+_0x481f93(0x17d)+_0x481f93(0x1e7)+';\x20}\x0a\x20'+_0x481f93(0x34d)+'k-car'+'d-tit'+_0x481f93(0x24c)+_0x481f93(0x3ed)+'{\x20fon'+'t-siz'+'e:\x2013'+_0x481f93(0x62c)+_0x481f93(0x6dd)+_0x481f93(0x67d)+':\x20600'+_0x481f93(0x1f4)+_0x481f93(0x4d2)+_0x481f93(0x3c3)+'46,23'+_0x481f93(0x465)+_0x481f93(0x55c)+_0x481f93(0x479)+'\x20\x20\x20.s'+_0x481f93(0x50a)+'d.on\x20'+'.sk-c'+_0x481f93(0x229)+_0x481f93(0x4a9)+_0x481f93(0x603)+'g\x20{\x20c'+'olor:'+_0x481f93(0x5cd)+_0x481f93(0x396)+_0x481f93(0x2b5)+_0x481f93(0x4b4)+'mbody'+'\x20{\x20pa'+'dding'+_0x481f93(0x513)+'2px\x201'+_0x481f93(0x27a)+_0x481f93(0x2b5)+_0x481f93(0x4b4)+_0x481f93(0x5dc)+_0x481f93(0x255)+_0x481f93(0x1f8)+_0x481f93(0x2e9)+_0x481f93(0x6c5)+_0x481f93(0x384)+'ty:\x20.'+_0x481f93(0x3aa)+'rgin-'+_0x481f93(0x682)+'m:\x206p'+_0x481f93(0x285)+_0x481f93(0x169)+_0x481f93(0x5d8)+'l\x20{\x20d'+_0x481f93(0x519)+_0x481f93(0x637)+_0x481f93(0x5ae)+_0x481f93(0x249)+_0x481f93(0x67f)+':\x20cen'+_0x481f93(0x19a)+_0x481f93(0x5d7)+_0x481f93(0x684)+_0x481f93(0x19e)+_0x481f93(0x1ed)+_0x481f93(0x2ed)+'\x20font'+'-size'+_0x481f93(0x3a1)+_0x481f93(0x15e)+_0x481f93(0x2b5)+'\x20.sk-'+_0x481f93(0x2b3)+'\x20{\x20fl'+'ex:\x201'+';\x20col'+'or:\x20r'+_0x481f93(0x3c3)+_0x481f93(0x135)+_0x481f93(0x465)+',.75)'+_0x481f93(0x479)+_0x481f93(0x34d)+'k-hin'+_0x481f93(0x6d9)+_0x481f93(0x519)+'y:\x20bl'+'ock;\x20'+'font-'+'size:'+'\x2010px'+_0x481f93(0x2b8)+_0x481f93(0x1ab)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x481f93(0x4b4)+'switc'+_0x481f93(0x671)+_0x481f93(0x6b8)+'on:\x20r'+'elati'+'ve;\x20w'+_0x481f93(0x518)+_0x481f93(0x377)+_0x481f93(0x28e)+_0x481f93(0x639)+_0x481f93(0x6cc)+'\x20bord'+_0x481f93(0x423)+_0x481f93(0x6a4)+'der-r'+_0x481f93(0x599)+_0x481f93(0x13e)+'x;\x20ba'+'ckgro'+_0x481f93(0x171)+'rgba('+'255,2'+_0x481f93(0x57d)+'5,.07'+_0x481f93(0x61f)+'rsor:'+'\x20poin'+_0x481f93(0x19a)+_0x481f93(0x4bd)+'\x20none'+_0x481f93(0x479)+'\x20\x20\x20.s'+_0x481f93(0x158)+_0x481f93(0x6a5)+'after'+_0x481f93(0x68c)+_0x481f93(0x156)+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0x481f93(0x483)+_0x481f93(0x6d1)+_0x481f93(0x275)+_0x481f93(0x2fa)+_0x481f93(0x143)+':\x203px'+';\x20wid'+'th:\x208'+_0x481f93(0x494)+_0x481f93(0x67d)+':\x208px'+_0x481f93(0x6a4)+'der-r'+_0x481f93(0x599)+_0x481f93(0x591)+_0x481f93(0x4e3)+'kgrou'+_0x481f93(0x44d)+_0x481f93(0x3c3)+_0x481f93(0x57d)+'5,255'+_0x481f93(0x64c)+';\x20tra'+'nsiti'+_0x481f93(0x5e0)+_0x481f93(0x526)+'2s,\x20b'+'ackgr'+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+_0x481f93(0x4b4)+_0x481f93(0x4bc)+'h[ari'+'a-che'+_0x481f93(0x5f6)+_0x481f93(0x575)+_0x481f93(0x1da)+'backg'+_0x481f93(0x5a1)+':\x20rgb')+('a(255'+_0x481f93(0x576)+_0x481f93(0x205)+_0x481f93(0x320)+_0x481f93(0x2b5)+_0x481f93(0x4b4)+_0x481f93(0x4bc)+'h[ari'+'a-che'+_0x481f93(0x5f6)+_0x481f93(0x575)+_0x481f93(0x6b7)+_0x481f93(0x541)+_0x481f93(0x253)+_0x481f93(0x181)+_0x481f93(0x289)+'ackgr'+_0x481f93(0x5d2)+_0x481f93(0x213)+_0x481f93(0x404)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x481f93(0x1a4)+_0x481f93(0x3a7)+'ckgro'+'und:\x20'+_0x481f93(0x3b9)+'255,2'+_0x481f93(0x57d)+'5,.03'+'5);\x20b'+_0x481f93(0x3bd)+':\x200;\x20'+_0x481f93(0x39a)+'r-rad'+'ius:\x20'+_0x481f93(0x5dd)+'color'+_0x481f93(0x6d8)+'eef2;'+_0x481f93(0x357)+_0x481f93(0x2b2)+'6px\x209'+_0x481f93(0x62c)+'ont-s'+'ize:\x20'+'11.5p'+_0x481f93(0x492)+_0x481f93(0x1f3)+':\x20non'+'e;\x20bo'+_0x481f93(0x440)+'dow:\x20'+_0x481f93(0x521)+_0x481f93(0x495)+_0x481f93(0x5a0)+_0x481f93(0x66c)+_0x481f93(0x58c)+_0x481f93(0x4b9)+_0x481f93(0x402)+_0x481f93(0x47f)+_0x481f93(0x6e1)+'.sk-f'+'ield\x20'+_0x481f93(0x386)+_0x481f93(0x4b5)+'ackgr'+_0x481f93(0x5d2)+'\x20#221'+_0x481f93(0x179)+'}\x0a\x20\x20\x20'+_0x481f93(0x4b4)+'range'+'\x20{\x20di'+'splay'+_0x481f93(0x533)+_0x481f93(0x6da)+_0x481f93(0x26c)+_0x481f93(0x685)+_0x481f93(0x40f)+_0x481f93(0x63d)+_0x481f93(0x48d)+_0x481f93(0x203)+'\x0a\x20\x20\x20\x20'+'.sk-s'+_0x481f93(0x638)+'\x20{\x20-w'+_0x481f93(0x301)+_0x481f93(0x6d7)+_0x481f93(0x54d)+_0x481f93(0x5be)+_0x481f93(0x2fe)+_0x481f93(0x5c6)+'ance:'+'\x20none'+';\x20wid'+'th:\x209'+_0x481f93(0x27a)+'heigh'+_0x481f93(0x4f7)+'x;\x20ba'+_0x481f93(0x557)+'und:\x20'+_0x481f93(0x58f)+_0x481f93(0x4df)+'t;\x20}\x0a'+_0x481f93(0x169)+'sk-sl'+_0x481f93(0x56a)+':-web'+_0x481f93(0x5e1)+_0x481f93(0x638)+'-runn'+_0x481f93(0x5b6)+_0x481f93(0x323)+'\x20{\x20he'+'ight:'+_0x481f93(0x38b)+_0x481f93(0x326)+_0x481f93(0x27c)+_0x481f93(0x280)+'\x202px;'+_0x481f93(0x241)+'groun'+_0x481f93(0x5e9)+_0x481f93(0x2a0)+'gradi'+'ent(#'+_0x481f93(0x2a1)+_0x481f93(0x193)+_0x481f93(0x68f)+_0x481f93(0x412)+_0x481f93(0x4b3)+'r(--p'+_0x481f93(0x3ef)+')\x20100'+_0x481f93(0x306)+_0x481f93(0x3e3)+'t,\x20rg'+'ba(25'+'5,255'+_0x481f93(0x136)+_0x481f93(0x15d)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-slid'+_0x481f93(0x5e8)+'webki'+_0x481f93(0x1de)+_0x481f93(0x532)+_0x481f93(0x6c1)+_0x481f93(0x42c)+'bkit-'+'appea'+_0x481f93(0x4d4)+':\x20non'+_0x481f93(0x405)+_0x481f93(0x239)+'6px;\x20'+_0x481f93(0x460)+'t:\x206p'+_0x481f93(0x5c3)+_0x481f93(0x540)+_0x481f93(0x548)+_0x481f93(0x467)+_0x481f93(0x326)+_0x481f93(0x27c)+'dius:'+_0x481f93(0x1b9)+_0x481f93(0x241)+_0x481f93(0x4f5)+_0x481f93(0x3ff)+'f6b9d'+_0x481f93(0x479)+_0x481f93(0x34d)+_0x481f93(0x329)+_0x481f93(0x255)+_0x481f93(0x1f8)+_0x481f93(0x2e9)+_0x481f93(0x6c5)+'font-'+'weigh'+_0x481f93(0x5d9)+'0;\x20mi'+_0x481f93(0x17d)+'th:\x202'+_0x481f93(0x684)+'text-'+_0x481f93(0x236)+_0x481f93(0x268)+'ht;\x20c'+_0x481f93(0x32b)+_0x481f93(0x66c)+'(246,'+_0x481f93(0x42b)+'42,.8'+');\x20}\x0a'+_0x481f93(0x169)+'sk-co'+_0x481f93(0x368))+('\x20widt'+_0x481f93(0x59b)+'px;\x20h'+_0x481f93(0x67d)+':\x2022p'+'x;\x20bo'+_0x481f93(0x661)+'\x200;\x20b'+_0x481f93(0x3bd)+_0x481f93(0x688)+'us:\x206'+'px;\x20b'+_0x481f93(0x382)+_0x481f93(0x5d2)+_0x481f93(0x5da)+_0x481f93(0x290)+_0x481f93(0x5ab)+_0x481f93(0x484)+_0x481f93(0x3ee)+_0x481f93(0x52a)+'nter;'+'\x20}\x0a\x20\x20'+_0x481f93(0x453)+_0x481f93(0x2ea)+_0x481f93(0x255)+'nt-si'+'ze:\x201'+_0x481f93(0x6c5)+'color'+':\x20rgb'+_0x481f93(0x486)+_0x481f93(0x6b0)+_0x481f93(0x6ba)+_0x481f93(0x372)+'addin'+'g:\x202p'+_0x481f93(0x459)+'}\x0a\x20\x20\x20'+_0x481f93(0x4b4)+_0x481f93(0x367)+_0x481f93(0x2fb)+_0x481f93(0x539)+'r:\x20#f'+_0x481f93(0x2be)+_0x481f93(0x479)+_0x481f93(0x34d)+_0x481f93(0x33d)+_0x481f93(0x2ec)+_0x481f93(0x698)+'elf:\x20'+_0x481f93(0x4cc)+_0x481f93(0x335)+_0x481f93(0x6a4)+'der:\x20'+_0x481f93(0x30c)+_0x481f93(0x21a)+_0x481f93(0x5b1)+'s:\x208p'+'x;\x20pa'+_0x481f93(0x6b6)+':\x208px'+_0x481f93(0x5ef)+_0x481f93(0x4e3)+'kgrou'+_0x481f93(0x233)+_0x481f93(0x2a1)+_0x481f93(0x1e1)+_0x481f93(0x13c)+_0x481f93(0x257)+'\x20font'+'-size'+':\x2011.'+_0x481f93(0x15e)+_0x481f93(0x606)+_0x481f93(0x608)+_0x481f93(0x215)+_0x481f93(0x52f)+_0x481f93(0x26f)+_0x481f93(0x2d3)+_0x481f93(0x19a)+_0x481f93(0x2b5)+_0x481f93(0x4b4)+_0x481f93(0x3cc)+'over\x20'+_0x481f93(0x65c)+_0x481f93(0x44e)+'brigh'+'tness'+'(1.1)'+_0x481f93(0x479)+_0x481f93(0x2f0));window[_0x481f93(0x198)+'entLi'+_0x481f93(0x273)+'r']('keydo'+'wn',_0x17b46e=>{var _0x50a9ad=_0x481f93;_0x17b46e['code']===_0x50a9ad(0x4a6)+'t'&&(_0x17b46e['preve'+_0x50a9ad(0x4bf)+_0x50a9ad(0x17c)](),_0x1b649f['WpFwL'](_0xe5e1f5));},!![]);var _0x4c0aa5=document['creat'+'eElem'+_0x481f93(0x4aa)]('div');_0x4c0aa5[_0x481f93(0x3cf)][_0x481f93(0x5a6)+'xt']=_0x481f93(0x322)+_0x481f93(0x2af)+'ixed;'+_0x481f93(0x6ab)+'2px;r'+_0x481f93(0x206)+'12px;'+'z-ind'+_0x481f93(0x5c2)+_0x481f93(0x5e5)+'646;c'+'ursor'+_0x481f93(0x438)+_0x481f93(0x3a4)+'idth:'+'26px;'+_0x481f93(0x460)+'t:26p'+'x;opa'+_0x481f93(0x1ab)+_0x481f93(0x432)+_0x481f93(0x6cd)+_0x481f93(0x605)+_0x481f93(0x384)+'ty\x200.'+_0x481f93(0x304)+'inter'+_0x481f93(0x5b9)+'ts:au'+'to;fi'+'lter:'+'drop-'+_0x481f93(0x545)+_0x481f93(0x1fc)+_0x481f93(0x4e7)+'rgba('+_0x481f93(0x361)+'07,15'+_0x481f93(0x46b)+'))',_0x4c0aa5[_0x481f93(0x2dd)+'HTML']=_0x1b649f[_0x481f93(0x4ad)],_0x4c0aa5[_0x481f93(0x2a4)]='Sakur'+_0x481f93(0x33e)+'r',_0x4c0aa5['onmou'+_0x481f93(0x1d1)+'er']=()=>_0x4c0aa5[_0x481f93(0x3cf)]['opaci'+'ty']='1',_0x4c0aa5[_0x481f93(0x692)+_0x481f93(0x60a)+'ve']=()=>_0x4c0aa5[_0x481f93(0x3cf)][_0x481f93(0x384)+'ty']='0.5',_0x4c0aa5['oncli'+'ck']=_0x270042=>{var _0x27764f=_0x481f93;_0x270042[_0x27764f(0x400)+_0x27764f(0x1f2)+'ation'](),_0xe5e1f5();},document[_0x481f93(0x150)]['appen'+'dChil'+'d'](_0x4c0aa5),_0x1b649f[_0x481f93(0x666)](_0xa0c89c),requestAnimationFrame(_0x18ad99),console[_0x481f93(0x4a7)](_0x1b649f['QBenx'],_0x372c09[_0x481f93(0x137)]);});})()));
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
