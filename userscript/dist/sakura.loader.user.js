// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.0.0
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
function _0x4d8f(_0x3a2565,_0x3bf629){_0x3a2565=_0x3a2565-(0x21ed+-0x17b*0x12+0x58d*-0x1);var _0x46eaa8=_0x1c8c();var _0x35e7b3=_0x46eaa8[_0x3a2565];if(_0x4d8f['nDSXpG']===undefined){var _0x20256c=function(_0x3fc854){var _0x2ab686='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3574b3='',_0x5b96c0='';for(var _0x5dd628=0x2012+0x367+-0x2379,_0x11307b,_0x58dc5f,_0x319b7a=0x312+0x1*-0x264b+-0x47*-0x7f;_0x58dc5f=_0x3fc854['charAt'](_0x319b7a++);~_0x58dc5f&&(_0x11307b=_0x5dd628%(-0x2*-0xac3+0xde4+0x17*-0x18a)?_0x11307b*(-0x1a91+0x1df8+0x10d*-0x3)+_0x58dc5f:_0x58dc5f,_0x5dd628++%(-0x1*0x509+0x1*0x1486+-0xf79))?_0x3574b3+=String['fromCharCode'](-0xace+-0x2*-0xd1d+-0xe6d&_0x11307b>>(-(0x2a5*0x9+0xa8e+-0x9*0x3d1)*_0x5dd628&-0x24f1*0x1+-0x1*0xe3e+0x3335)):0x1*0x8e9+0xb9b+-0x34*0x65){_0x58dc5f=_0x2ab686['indexOf'](_0x58dc5f);}for(var _0x380398=-0x2*0x7f3+-0x2d*0x41+0x5*0x577,_0x363d73=_0x3574b3['length'];_0x380398<_0x363d73;_0x380398++){_0x5b96c0+='%'+('00'+_0x3574b3['charCodeAt'](_0x380398)['toString'](0x5*0x59b+-0x2*-0x3fd+-0x23f1))['slice'](-(-0xebe+0x38f+0xbf*0xf));}return decodeURIComponent(_0x5b96c0);};_0x4d8f['kAFtZP']=_0x20256c,_0x4d8f['DIJJLV']={},_0x4d8f['nDSXpG']=!![];}var _0x1fc6c1=_0x46eaa8[-0x4*-0x5a4+0x4f3*0x5+0xb*-0x44d],_0x2a69c6=_0x3a2565+_0x1fc6c1,_0x33cd94=_0x4d8f['DIJJLV'][_0x2a69c6];return!_0x33cd94?(_0x35e7b3=_0x4d8f['kAFtZP'](_0x35e7b3),_0x4d8f['DIJJLV'][_0x2a69c6]=_0x35e7b3):_0x35e7b3=_0x33cd94,_0x35e7b3;}function _0x1c8c(){var _0xebd0ac=['ic8GDMe','mxW1Fdq','AKHhBgq','CZPUB24','AwXKigG','EKnzreO','ns00idC','CMXNthG','icaGlM0','y3KGB24','seTyuhK','BgLJyxq','Fdn8nxW','BI1JBg8','lxj1BM4','B290zxi','DgG6idu','CM9UzYa','D1vNyLK','z2LMEq','igjHBIa','B1HzvNa','CMvWzwe','B1LZyxe','ChvZAa','AwDODdO','Dg87zMK','odaSmtK','ihSGB3a','igzPBgW','Ag9VA3m','r3ngBwe','BMLUzW','u2jkCvq','zcWGi2y','s2z3r2G','C2vSzwe','vhbYBxi','zw51ihi','sgvHBhq','sMvSAuC','B246ig8','s2v5vW','BNrLBNq','CgfKzgK','z21pDhO','wgjOCeu','ie9olG','CYbLyxm','t1nRsuW','tw9Kzsa','icaGzgK','zsb3zwe','ihnVig4','zwv6zsa','igjHBM4','zIbTyxq','y2HLy2S','CvfSC0G','BLL3uhi','nIaXoci','tw54veu','DxmGywm','BMCGzM8','Ag9VA0m','lMXHC3q','BMj6z0C','ywLYlG','C2v0sxq','DxLyrg4','AxrPywW','v0fttsa','tLvTq20','odbWEcW','zMyP','ntuSmJu','swHsExu','zsb7igy','A2vizwe','wxL6yw0','zgrIBgO','zgTPDa','C2v0qxq','Dg9WoIa','Bhv0ztS','lc4WncK','BI1ZDwi','mJiSocW','te5fwgG','B2STCMu','qvbfuxm','zg93BIa','venWtw4','zxrL','AMjbvK0','CZOGCMu','y2XLyxi','y29PBa','ywqGDg8','B3vUzdO','CNnVCJO','wLbxy3e','ywrK','y29TyMe','B3jKzxi','B3vUDc4','BhrLCJO','ywz0zxi','ywqUieK','tgvMDca','zMTVrLy','yMfJA2C','C2v0x3q','AxPLoIa','CMDIysG','ChG7igy','zsbJEd0','u3PIs2m','C2vSzwm','yw1L','Ag9VA0C','ywrIBg8','CvPcBxK','z2v0sxq','rKD1z1q','zxjZy3i','zxiTCMe','tNzkAfe','Agf0igq','rgP3Bvm','ksaWida','r1jnsxG','Dhfkwha','ihSGzMW','C3bHBG','zwfSDgG','AwvSza','CMfPC2u','nJaWia','wKjyzxe','ihWGC2G','mNb4oYa','mxb4oYa','igfWCgW','BMX5kq','Au5Ht2e','BcbKCMe','tMDuBvC','zgvZ','wLn6ywK','DhLSzq','B3G9iJa','zxzLBIa','lNnRlw0','CgfYC2u','yxKGB24','BhrOige','Dhm6yxu','jsbUBY0','zxnJ','Dwffqu4','ide7ig0','i2zMzJS','qxnZzw0','DMvYlxy','idjWEdS','EhbuwuW','icmYmJe','DdOGnJa','EtOGmdS','CNjVCG','Bgv4oIa','lc4WocK','kg92zxi','Bg9NBY0','DYGWida','igHVB2S','ifvUAxq','zg93kda','y2vdAgK','Bgf5ig8','EKzVufm','yxbWBgK','vvjbx0S','C2XPy2u','lwzPBhq','nhWXFdm','mtC5mdeWELvtzNPY','z2v0qxq','AY1Jyxi','zNbZ','tvrgwum','D0T2y2m','BguGC3q','tKCGlsa','z3jVDw4','ohb4oYa','ldiZocW','C2v0ida','zw51','C2u6Ag8','ihSGCge','zZOGnNa','ltjWEdS','zMLSzw4','v3jHCha','ifTfwfa','Bw92zvq','Bgf5oIa','CgfYzw4','BwvUDca','AxrJAa','Fdv8mhW','AxrPB24','DgLVBJO','BM9Uzq','EgXry0K','B3rZlG','Bcb7igq','Efffzha','CgfJAxq','BwrLC2m','t3nuvKi','vgXJEe4','lc40ktS','sgvPz2G','DxjDig0','yxjHBMm','DMC+','DhK6ic4','ig9YigS','A3ndChm','ic40oYa','EdSGz2e','yxvSDa','Bw4TDgK','BNn0ywW','Ahq6idi','igvUDgK','Bw4Ty28','phbHDgG','tgvNAw8','rK5Xs0i','BMC6ida','weLJs0G','wuHMBM8','ugTMs1O','Bg9N','yKTkwMq','ndySmJm','mdSGy3u','twL6sKm','mJu1lde','y2HdB2W','DhjHBxa','igq9iK0','cIaGica','re5Ut3m','ltiUnsa','lIbvC2u','oIbWB2K','BhmGDgG','yMLJlwi','y29TCgW','Aw9UoMy','yxK6igy','sw5PDgK','zgvZyW','t1vsx18','BsbYAwC','zdSGyMe','DtmY','zMLSBd0','yuzLAhi','mtSGBwK','icaUBw4','CMvZDg8','iKLUDgu','ihWGrvi','CMuGkfm','zMLSBfq','sNzrsNO','AxrLiee','DgLKzvC','yJPOB3y','v2fwEK0','Acb7iha','Cg9W','oIaWoYa','D3HeCLG','zfb4tfG','igjHy2S','ignVBg8','sM1QCuS','yNv0Dg8','qwvUs04','A09TAuG','BgfIzwW','B3C6ida','igzVBNq','EKrZALy','ihbSywm','icbIB3G','C2fMzu0','zxzLBNq','ugXtExy','ihn5C3q','idi2ChG','B25SEsW','zw5HyMW','zwfKEs4','B2XVCJS','ignHy2G','zwf0CYa','ywrPDxm','D0jSDxi','Bg9Hzca','DMu7ihC','s2v5qq','zxj5idi','CMvHzey','oYbJB2W','iduWjtS','C3fsvMG','BgLUzvq','ideYChG','B25PBNa','lxDPzhq','zxzLCNK','B3vUDgu','igHLAwC','ysGYntu','zwfK','zM5ouMm','D2fPDgK','rgfTywC','u2TPChm','mdi1ktS','yKLny0e','y2HLCYa','r3PyCK0','C2STy2e','ig1PBM0','B3b0Aw8','C0vOB3G','EfLoqxi','C0jqtNO','EgLIz0m','u2vSzwm','DcbZDge','Bg9YoIa','ihWGBw8','yM9KEq','zcbNCMu','BgfJzs0','EgDWzue','u2HHCNa','BMDL','AxvZoIa','EdSGB3u','DxqGDgG','Dg87ih0','wgnbr0K','ChbLyxi','qvzMExq','DgL0Bgu','yMfYlxq','B2LSicG','A291CI0','AwrLCG','oeHPugvfwa','DdOGmtu','EcKGC2e','vMLZDwe','DfLuzLK','zIXZExm','ywn0Axy','ifvxtuS','t0P1BMu','zvbSDwC','DgnOihq','q3jVC3m','4Ocuig5Via','rvHqxq','B25JBgK','FqOGica','uwzSsuG','y2vZlG','mtuXnZu4menJEMvHrq','oYbQDxm','oIbUB24','BLbSyxq','ywXSihq','AeTxsgW','zxmGB24','EI1PBMq','ALPUEMS','yxrLlwm','nNb4oYa','ugf0Aa','DgvY','igv4Axq','CYbpsgu','mZa5ow1tC1nyAG','ktSGy3u','rhLwCfC','zw1ZoIa','lwv2zw4','q1btihi','AwnRihm','BgLUzwm','mJqYlc4','AtmY','D2L0Ag8','DgnOoJO','EYaTD2u','y2TLzd0','rxHW','AY1OAw4','DhjVA2u','ig5VigG','AgfZ','y2jpvwC','mcbOB28','DKr3sei','CMDPBI0','CIiSici','igvMzMu','lM1Ulxm','mNb4o3i','AwDUyxq','C2vYDMu','uNfTy0i','m3WYFdy','t0TsreK','zxi6oI0','zxiGEYa','lJuGms4','DdOGmZq','yxa6idG','zs5bCha','CZOGy2u','te1c','DMvYihS','BfDxDw0','DMCGEYa','DhvYyxq','yM90Aca','wun1weW','DgXPBMu','rwfJAca','zJmY','Aw50zxi','BMf0Dxi','DxjDigG','mgy1oYa','BwLAD1u','ys1JAgu','yw5uCKe','uJOG','ww5xwwe','DgG6idG','Ag90u3e','oYbOzwK','DgvTlxu','B29RCYa','t0HLywW','qw9rrw0','oJa7D2K','nZTWB2K','qMXVy2S','Dcb7igq','ihSGAgu','Bg9JAW','ndC0odm','vuntq1i','n1jyBgvxwq','AgvPz2G','y3K9iJe','igTVDxi','AhjLEvi','B25TB3u','igjVEc0','iNjVDw4','DgvZDa','zLLQuLa','vgLfufC','v01ligK','CM91BMq','EYbJB2W','DxDpzNK','mJu1lc4','mdb2DZS','r2PRBeq','BvzqCLy','DhLbC0K','nsaWlti','BNrLCJS','zg9JDw0','BMvHCI0','s2v5C3q','tuLtu0K','lca1mcu','zvj1BM4','vgfRzxm','Dg9W','oIaXoYa','DgLKzs4','CIdIGjqG','lsbHihm','lM1Ulxa','ms4XlJa','yKf2CLK','ANvTCfa','lwHLAwC','BsbVBIa','wxvVA0W','ig9Wywm','CMvHzhK','mcWWlJG','CMvJDa','lK92zxi','mJvWEdS','mxW1FdG','oIbYAwC','uvb4twW','lIbuDxi','nxWWFdi','khjLBg8','y2XHC3m','qK5ZB2e','zxH0','q2jNAw0','B1jLy28','reHRB0G','Aw5Mqw0','u3vuAhG','DgfIihS','uMf0zq','nYWWlJm','ihDPzhq','Aw4TD2K','vgzZyw8','AM9PBJ0','otyZnZHgr1DXzwe','BNrezwy','C3rLBMu','Dg9Y','C2STBwq','mJuPoYa','CML0zxm','ihSGD2K','y2SP','Dg9Nz2W','Ee5Zr1y','z2v0','ig1HEsa','C3zrtwS','nNb4ida','ltiUns0','z3jHDMK','uNvUDgK','B3i6ihi','BdOGBM8','BguGAwy','CYaNzNu','Ahq7igm','sxrbzui','Dg5LC3m','uIb2ms4','sw5ZDge','r3f1rhm','yw5Uywi','mcWWlJC','yxb0Dxi','C2L6ztO','EvzeCuy','oYbWB2K','ohb4ksK','zw50','lwjHBNi','lwfWCgW','A2v5C3q','uer6DxC','BwuG','CMXkrvK','yY0XlJu','zxPPzxi','ihDOAwm','wuHqBMW','A2rozKK','ELvps1a','EsbKzwy','rw1fCva','idaGmJq','BKrzAee','rgfUz2u','Bw8GDg8','ic5TBI0','D2LKDgG','Bw92zw0','DMfSDwu','zw1LBNq','BgLNBG','zM9UDc0','EYbMAwW','y2LYy2W','Ag9VA1a','q2XVC2u','Bw1VifS','lcbPBNm','C2STy3q','ChG7ihC','yxr0ywm','CYbnB3y','A3nty2e','idrWEdS','zvHiqMu','qwrIBg8','nsKSida','BgLUzw4','j3qGC3q','igjVCMq','zwfKige','zw50CZO','mtySmc4','x19ZywS','vfzpB0O','ihn0AwW','y2fSBa','lxnJCM8','zsXTB24','BhvLCY4','rw5NAw4','AhvTyIa','CJOGDgG','A2r1DfG','vufmzxC','zcbJAg8','u3bLzwq','lwnVBhm','CgfNzsa','Be1VDgK','AYbVBI4','zcbZzwu','m3W0Fde','AwrtD1e','mdSGyM8','B2nRoYa','ihbVAw4','AcaTidq','nsK7ih0','tfjwDuW','zwfWB24','idiWmg0','BNqTC2K','y3jLyxq','oJa7EI0','C2STDMe','icaUC2S','ywXSzwq','CM9Szq','mhb4oYa','B250zw4','AcbVBMu','teffCvO','C3DPDgm','zMLSBfm','DK16suC','tMfTzq','Aw5NoIa','uNrlzvy','zcb7igi','BMq6ihi','nsK7iha','De5Vzgu','CgDoENO','tg9Hzgu','Dg9jwKm','B3zLCMW','oIaWide','zvzHBhu','Bw91C2u','tNvLDNa','DgHLihC','zw50tgK','BhvYkdi','B2rL','Aufns2C','AwXLzdO','iL06oMe','BMu7ihm','yxjPys0','psiJzMy','oYbTAw4','zxrhyw0','tw92zw0','Bw4TDge','C3rLCa','nNWXmNW','igXPBwK','r1PMs0G','yNjPz2G','ze5ez2G','zM9UDa','uLLqsvm','v3jusgW','DhrPBMC','msWUmZy','BNfAtMG','s2rJCwm','CMvSB2e','ihSGzgK','D0nVBg8','CKr2tMW','oIbJB2W','tg9JywW','yxrPB24','mc41o3q','Bw4TC2K','BM8Gy2G','CIb2ywW','Ad0ImIi','ihSGywW','ihjNyMe','rNrhAuy','lxnOywq','iNrYDwu','DgG6idK','DfLqv2u','BgrYzw4','BgfZDeu','ChG7igi','yxjNzxq','BfDHC0O','ysblB3u','nYWUmsK','lxrPDgW','zw50zxi','ysGYndy','Fdz8mNW','BwLKzgW','BxbzDNq','uMX6C0m','y3qGB24','BgvUz3q','yMvNAw4','oIa4ChG','zuv4Ca','oYb0CMe','oYb3Awq','qvjRwM4','BJOGy28','y2L0EtO','AvnpBwm','igDHDgu','Axb0kq','mcWWlJu','B3vUzca','ihLVDxi','zNfeCMy','idaGmca','BMq6icm','C21HBgW','DNCGlsa','ihbHzgq','u2fRDxi','lc4YnsK','zdOGBgK','D1Hkrwe','uLf6tgm','uevAyKm','CMqTAgu','yM91BMq','mtjWEdS','AwvKigm','u2Pxvwy','qM90Dg8','oNbVAw4','icaGyMe','D2fYBG','oYbYAwC','BerPzsW','Ehjtz0q','Bwf4','z29KrgK','y29SB3i','zvbPEgu','ig1HCMC','oIa5oxa','DMG7EI0','yJLKoYa','B250lxC','nMi5zci','igzVCIa','zxjZihq','nZyZmJy0DfHHD1Px','sePoDxO','ChG7iha','zwXK','zxmGEYa','zhvcC1O','Bg9Y','C2STC2W','igrPC3a','BI13Awq','yxj0lG','C2HVB3q','BxfxEeO','Dc1Iywm','AgfPCG','lwXPBMu','tu9ersa','zZOGmta','q291BNq','z2v0q28','zgL2','CdOGmti','zvjHDgu','oc00lJu','yMTPDc0','oIbKCM8','v2vHCg8','uwTgqwG','ihjLBg8','wKjPuhi','zJzIowq','zdSGy28','lcbZyw4','zenOAwW','CM9Rzxm','yMvS','CIbNyw0','Dxm6idi','oI13zwi','y2HtAxO','Aw5WDxq','phnTywW','z2Hrr24','ie92zxi','yMPWwgO','zg93BG','zKrgDxq','vgfmr3i','oxW1FdC','EMT6EwK','phn2zYa','Bg93oIa','uwHlue8','ChGGDwK','ztSGD2K','idGWChG','vhPXDNm','ug9ZAxq','Bvv3z3m','Bfz4yuS','uKPIyLC','C3bLzwq','yw5ZzM8','z1jyyMy','i2zMzG','sfLqwfC','z29K','C2STBwi','wLvlt3u','sw5MAw4','Aw5KzxG','BezKvxy','y2zKqui','CYbZChi','y3jLzw4','BYb0Agu','Dgv4Dei','rNjHBwu','B1jPDfi','y29Kzq','BI1TywK','v2vItw8','B3zLCMy','igvYCG','B2fKzwq','w3nHA3u','rLbtigm','mwzYksK','lxK6ige','tgLZDa','u0XZzK4','Cg9PBNq','ide2ChG','C3r5Bgu','CY1Zzxi','BMqGt0G','Aw5Uzxi','y29SCZO','C2STzMK','ign1CNm','CMrLCI0','AguGzgu','ywWGBwu','twTXqNa','DfHZELe','icaGic4','oYb1C2u','idHWEdS','yw5LBc4','igDHCdO','idmYChG','BNqGAxq','oYbVCge','tMHiDMe','z0rrqxq','tMnSDgG','CZOGyxu','yxv0BY0','CfH4C2i','yxnLBgK','ywqGD2G','CLrJD3K','wMvYB2u','lxnSAwq','y3jVC3m','v0ftrca','B2reAwu','zhrOoJe','ihrOzsa','BNq6igm','mtiGmJe','DhKGmc4','C2fMzq','uMvJDa','y3nZvgu','nxmGy3u','BhrO','B24Oks4','kdeUmsK','z2jHkdi','B2XPBMu','vLrKELa','C2STC3C','B246igW','vwH3Bxu','EcbYz2i','ywDLigq','Dw5KoIa','zNriExq','EYbSzwy','AxHLzdS','B29Rihi','vxHns1q','A2v5Dxa','qxbWBhK','u2vNB2u','C0nmzhG','AxrLBxm','ohWWFdy','Dw5RBM8','A3vntNe','C3rYB24','yMLdqLe','DgXLCW','nJTWB2K','BIb7igy','uMvZzxq','Cu1rrvm','nsK7igi','mJSGC3q','BtOGmJq','lKXVy2e','sfrIuhK','re9nq28','C3rYB2S','qLDRzhy','lc43nsK','AdOGnJi','nhb4oYa','z2H0oIa','psjTBI0','ywrKAw4','C2STBge','Ae1vC0y','C3rYAw4','y2HPBgq','EuHTr1a','u2fMzxq','zgvSzxq','zgfTywC','lM1Ulxq','zMXLEdS','mxb4ihi','ig5LDMu','zwLNAhq','vuv5EKi','AwrLihS','icaG','zMnpvuW','AgvZ','zZOGmNa','A1D5C0q','ldiXlc4','oYbVDMu','lw5VDgu','oYbIB3i','Ewv1ALy','shjxvvG','v2LWzsa','Ag9VA04','DxjZB3i','zc10Axq','AwX0zxi','EMu6ide','x19tquS','ywqGEYa','C2fRDxi','EgvZige','DgvYoYa','oYbIywm','DKn3ueW','qMzgChO','mZmZndG2ovb3AuLOvW','A2DYB3u','zKLZuM0','Aw4Sihq','ieDLDfy','oIaZmNa','z3jHzgK','Cc1ZAge','Aw5Zzxq','mhG2mda','oMHVC3q','B3zLCIa','lxnHBNm','mhW3Fde','ohG5mc0','BerPzsK','BMnL','DhjHBNm','igP1Bxa','CKrzs0W','oYbMBgu','ugn0','C3bSyxK','vvDnsW','u3rHDgu','Cufjvfm','sfrnta','zw50CW','DMLqs3i','Dhj1zq','nIa2Bde','uMvJB2K','DdOGoha','r29Kie0','i2zMnMi','yxr2qM0','DgHPCYa','r3jHDMK','oIaXms4','zgrPBMC','ywXPz24','wxn1qMC','ALrTAwu','C2v0','DNLIsxO','s2r3yMC','yw5JztO','B3vUzdS','zwjRAxq','y3H6rgC','BwvZC2e','B3bHy2K','zxiTzxy','A2uTBgK','yMX1CG','CMvU','oIa2nta','ignVB2W','ihrVide','lc40nsK','oIa1mcu','ndHWEcK','lwLVxYO','A2L0lxm','zguSihq','D2L0Aca','CejXBvy','y3jLBwu','DMLLD0i','zs1PDgu','AsXZyw4','lwrPCMu','lJa4ktS','oYbMAwW','u3bHy2u','mte2odu4me5JuNL2DG','BIbZAwC','lxjHzgK','C3rPBgW','u0fgrq','D2vIA2K','C0rtrwK','sKfjsxC','mNb4ksa','DhKGDMe','ztOGmtm','yw94Axm','ywXSig8','B2vZig4','zxG7ige','oIb0CMe','vwjlCK0','ntuSlJa','yxjLBNq','AguGDxm','idqGnc4','BufyCgK','zgvYlxq','Fdj8nxW','AwDUlxm','AxrPyxq','vw5PDhK','C2v0uhi','A05qre8','DgLMEs0','ic5ZAY0','CZO6lxC','ieaG','ktSGBwe','vfDKvvm','B2LUDgu','DZOGAw4','igzSzxG','nxm0idi','ienquW','y2vSzxi','BsbSzwy','lc4WnIK','B246ihi','B3uU','Bw92zq','ih0kica','Bw4Ty2W','qxbWBgK','ywnPDhK','vLjpq2q','idK5osa','DgfNtMe','A3LYwuS','mJu1ldi','EYbWB3m','mtb8nhW','ugTxDxq','B2XVCJO','AwrHDgu','DKvXsvO','DgTItxG','D2vPz2G','yLDku1m','lwL0zw0','zLP2zxu','r0nUBuO','igrLzMe','A2XHA2C','vvDnsYa','icnMzJy','ldeWnYW','idi0iIa','BMq6ihq','CJOGCg8','BI5MAxi','BwjVzhK','zhrOoIa','A291CNm','EYbMB24','Bg9HzgK','Bw4TAa','u0fgrsa','CM0GlJq','zxjZ','oJiXndC','zw50oYa','oIbMBgu','z24Ty28','ExHsAem','C2f4rMS','zM9YBxm','qLnmv2q','CLfkBve','C2HHzg8','DhLWzq','yNrUoMG','A3mGyxi','mtfWEca','tKCG4Ocuia','BM9UztS','EdSGFqO','yM90Dg8','ChGPoYa','DvLQt2m','CJOGi2y','sM1Ryvm','iL0GEYa','idqTnc4','C2STyNq','B25JAge','mNm7Cg8','CMfWAwq','yMX5lum','B3nWywm','ideWChG','z2fTzuW','rwffyxa','zxjPDdS','vMTUCeO','Dgv4Dc0','BM9tChi','uenTqw0','ywnRz3i','ANDHwMe','Aw9UlLq','yYGXmda','Dgv4Dem','t1nOB28','CNq7igC','lZ48l3m','C2STBM8','Aw4GC2e','zwLUC3q','oYbHBgK','ihn0CM8','ELfbB2G','mtu3lc4','sg5oy1K','BM9szwm','As1TB24','D29YAYa','CMLUz3m','t3zLCNC','sgLKzxm','EwPvC3a','qxLWtNa','C3rVCfa','oIaXnha','ywrKrxy','ww5cChi','C2f2zq','BxKGC2u','oIbJzw4','DfrqsuK','rMLLBgq','EeXqzKq','DcbHihq','twjKvg0','zMLSBa','mIaXmK0','BwLZyW','u3rHDhu','y1zfEg0','CxvLCNK','BgLNBI0','AxnWBge','DdOGnNa','C3bSAxq','mcuUifm','lxnPEMu','ChjLDMu','C3rHCNq','mc41','DhLqy3q','zc5VBIa','A2v5zg8','zgvYlxi','ig5VBMu','rM9Yy2u','CZOGoha','CI1Yywq','ChG7ih0','mhGYnta','BNrLCI0','rxHsy2O','iezquW','y2fWtw8','nxb4oYa','DxjH','EYbIB3G','nYWWlJG','icaGlNm','CgXHEtO','zYbJyw4','EuvUz2K','z2v0rwW','B3nPDgK','C3zNiJ4','sxvrv2W','B3nLihS','Dgv4Dee','sxnhCM8','AfTHCMK','nc00lJu','vMfSDwu','Bxm6igm','Aw46ida','C2STy28','zdOGi2y','mZuSmJq','kdi1nsW','AdOGmZq','l1jnqIa','z3DAquC','CI51As4','lxnLCMK','AwDUlwK','mdSGFqO','AuXMr1q','v3zirM4','r1vlwLK','zcWGyw4','DhjPyNu','Dw5PDhK','y2vmzwy','zxG6mJe','AwWGC3a','oYbKAxm','tM9kwKS','zsb2ywW','nYWWlJC','Dc1Myw0','u0flvvi','zxr5sxC','EtOGyMW','odiPoYa','B2LS','Bw4TBg8','zvn0EwW','svvyAKS','AKHTww0','Axr5oIa','oIa0ChG','EdSGyMe','swfrEMO','CM9WywC','CMzSB3C','CMeTA28','zsGXnta','idi0iJ4','AuLrv2m','ihSGzM8','BgLUzvC','C2f0Dxi','u2nHBgu','yMHVCa','ksaXmda','zhjVCc0','CMqTDgK','DMLZDwe','D095A2G','CIbHzhy','AgvSza','tM8Gu3a','DMvTzw4','z24TAxq','lc4WnsK','C1bls3G','ChbLBNm','vg90ywW','v2LKDgG','kdeWmhy','vKj2quO','DMvYBge','zNjnzw4','y2fUDMe','r0THwgq','oYbMB24','rgLZywi','ldePoWO','ieLZr3i','Bgf0zwq','oIbYz2i','BwvKicG','BKjMC0C','y1rsDuK','BwLU','ys5RB3u','ocWYndi','igfSAwC','lYbhCMe','EvLssw8','uKnWs2q','zsbBrvG','Cg9ZAxq','C2v0vhi','ldi1nsW','ywX0Ac4','EdSGAgu','ihWGz2e','BurTy0e','ztOGmtC','t1DLCuy','r0jor1O','nZaWia','qMzWsKK','BNnPDgK','zxjYB3i','zKLSueS','zgLZCgW','zw50rwW','refwtw0','BgWGBwu','ihrOAxm','ChGGmdS','DxDTAW','ignLBNq','y3jVBgW','CMfKAxu','iIbZDhi','BtOGnNa','EYbIywm','C2HPzNq','qNLjza','B3C6igK','BML0igy','ktSGFqO','jYb0Agu','Dxm6idy','BgvMDa','zsbZzxi','A2rYB3a','vgzduuq','kc4YmIW','BgLKzxi','uLbUvMi','C2zVCM0','zvKOmtG','Aw9U','CMvMAxG','BM90zs4','yxbWzw4','BhKGkhi','rwL3wMW','ltqTnY4','yxvSDca','wgTPz1m','lwfWCgu','v2v0CNi','CMneD2C','EcaWoYa','ocK7ih0','zNvSBhm','s2HYsLa','tgHrruG','y2TNCM8','rMXWCu8','Avv5sK0','zuvSzw0','mtSGyMe','ihbVC2K','r29Kl2q','icaGica','rxPXAuG','DdOGmJG','s2PPELy','Bw9fEha','yM9Yzgu','DMfS','C2STAgK','mJqSmtC','Dc1ZAxO','mciGCJ0','idfWEca','BM93','q3vZDg8','CM9Wlwy','id0GzMW','zw15igm','uK1c','B2TLpsi','yxrJAgu','iJeYiIa','ywn0A0S','lwjVEdS','mdCSmtu','oYb9cIa','zciVpJW','nsWYntu','Bgu7igy'];_0x1c8c=function(){return _0xebd0ac;};return _0x1c8c();}(function(_0x491e46,_0x12332b){var _0x294449=_0x4d8f,_0x2ce47d=_0x491e46();while(!![]){try{var _0x9e8ee6=parseInt(_0x294449(0x282))/(0x53*-0x35+-0x22d6+-0x1*-0x3406)+parseInt(_0x294449(0x261))/(-0x180f+-0xb*0x115+0x23f8)*(-parseInt(_0x294449(0x30f))/(0x1*0x69b+0x1*0xd4f+-0x13e7))+parseInt(_0x294449(0x534))/(-0x23fb*-0x1+-0x663*0x1+-0x1d94)+-parseInt(_0x294449(0x776))/(0xc64+0xcc6+-0x1925)+-parseInt(_0x294449(0x273))/(0x1*0x1e11+0x1809+-0x3614)+-parseInt(_0x294449(0x2cb))/(0xd51+-0x2467+0x171d)*(parseInt(_0x294449(0x40b))/(0x581*-0x1+-0x128e+0x1817))+parseInt(_0x294449(0x4e9))/(-0x14f9+-0xd16+0x2218);if(_0x9e8ee6===_0x12332b)break;else _0x2ce47d['push'](_0x2ce47d['shift']());}catch(_0x4a141a){_0x2ce47d['push'](_0x2ce47d['shift']());}}}(_0x1c8c,-0x2c*0x2b4+0x1e6ff+0xb2*0x14b),((()=>{'use strict';var _0x5f2d18=_0x4d8f,_0xc4d548={'xFWfX':_0x5f2d18(0x731)+'t','toIZC':_0x5f2d18(0x46d)+'eld','RYPIS':_0x5f2d18(0x246)+'n','pgNzz':_0x5f2d18(0x554),'RJbbW':function(_0x412bb9,_0x164b40){return _0x412bb9(_0x164b40);},'GsFma':'div','YuokL':function(_0x3e4144,_0x5b59f8){return _0x3e4144!==_0x5b59f8;},'HTbPy':_0x5f2d18(0x6bd),'NjQvm':'tulIn','frMen':function(_0x129922,_0x1e7d9e){return _0x129922===_0x1e7d9e;},'tmloP':function(_0x4ed6b7){return _0x4ed6b7();},'jbAVM':'NhQxV','OYYbM':function(_0x1f8dc8,_0x193c1e,_0x48ab45,_0x4f4594){return _0x1f8dc8(_0x193c1e,_0x48ab45,_0x4f4594);},'IuQWl':function(_0x145e1b,_0x4d429b,_0x410dd5,_0x2f95e1,_0x5d5fed){return _0x145e1b(_0x4d429b,_0x410dd5,_0x2f95e1,_0x5d5fed);},'iEBnn':'1|0|3'+'|2|4','FGugT':function(_0x2a6642,_0x11e21a,_0x488fa0,_0x1ace3d,_0x22d49e){return _0x2a6642(_0x11e21a,_0x488fa0,_0x1ace3d,_0x22d49e);},'hsass':'shoot'+_0x5f2d18(0x588),'kdNfI':_0x5f2d18(0x347)+_0x5f2d18(0x504),'LhQEH':_0x5f2d18(0x2b2),'cxzDg':function(_0x187c67){return _0x187c67();},'YnBpr':function(_0x475bd1,_0x21dac1){return _0x475bd1===_0x21dac1;},'DyVpW':'sk-co'+_0x5f2d18(0x411),'svQMk':_0x5f2d18(0x50b)+'9d','jTmie':function(_0x3f8e87,_0x206574){return _0x3f8e87*_0x206574;},'fZveu':_0x5f2d18(0x1ce),'aFehr':function(_0xcdc671,_0x2c7399){return _0xcdc671!==_0x2c7399;},'yVDqF':function(_0x5d5bcc,_0x4ab68b,_0xffbc27,_0x3a6352,_0x251004){return _0x5d5bcc(_0x4ab68b,_0xffbc27,_0x3a6352,_0x251004);},'NhHva':function(_0x4d02be,_0xb82a0c,_0x82c44a,_0x2e7fab,_0x20c324){return _0x4d02be(_0xb82a0c,_0x82c44a,_0x2e7fab,_0x20c324);},'FNqKB':function(_0x13b555,_0x4636a9){return _0x13b555<_0x4636a9;},'blepg':'lVxaK','tkbMx':_0x5f2d18(0x28b),'yjUsp':'OYsWC','AoQEm':'sakur'+'a.kou'+'r.v1','nUjtP':function(_0x453947,_0xc51e98){return _0x453947!==_0xc51e98;},'ZPWcq':_0x5f2d18(0x399),'uYjOc':function(_0x44dd97,_0x53fefe){return _0x44dd97>_0x53fefe;},'kWysD':function(_0x5c1782,_0x1bbc95){return _0x5c1782+_0x1bbc95;},'rDvNl':function(_0x50f901,_0x305891){return _0x50f901>_0x305891;},'TiEPW':_0x5f2d18(0x4e3)+'a.kou'+_0x5f2d18(0x60b)+'v1','YIPHH':_0x5f2d18(0x4a4),'ZBXeq':function(_0x31a984,_0x504793){return _0x31a984-_0x504793;},'LAEqZ':'[saku'+_0x5f2d18(0x62c)+'ur]\x20U'+_0x5f2d18(0x2d6)+_0x5f2d18(0x67a)+'ailed'+':','rcDwg':'butto'+'n','giagM':_0x5f2d18(0x384),'uwOfy':'switc'+'h','NvJhQ':'aria-'+_0x5f2d18(0x6f4)+'ed','OKRDI':'sk-ra'+'nge','CgmSZ':'1|3|0'+_0x5f2d18(0x54b)+'4','AVfyt':_0x5f2d18(0x665),'QPxMl':_0x5f2d18(0x44b),'xibgC':'rgba('+_0x5f2d18(0x712)+_0x5f2d18(0x360)+'7)','atXhm':_0x5f2d18(0x72d)+_0x5f2d18(0x56a)+_0x5f2d18(0x606)+_0x5f2d18(0x3e4)+'5)','lFdUv':function(_0x10585d,_0x1450e1){return _0x10585d/_0x1450e1;},'zFoPS':_0x5f2d18(0x505),'kdutX':_0x5f2d18(0x244)+'rd-he'+'ad','TWdUS':'XwfpP','dPxLX':'SAFE\x20'+_0x5f2d18(0x41b)+'—\x20ove'+'rlay\x20'+_0x5f2d18(0x223)+_0x5f2d18(0x293)+'ooks\x20'+_0x5f2d18(0x2ff)+'ad\x20to'+_0x5f2d18(0x280)+')','JeliG':function(_0x1c0c78,_0x380376){return _0x1c0c78+_0x380376;},'MbdTm':function(_0x19285d,_0x5e984c){return _0x19285d+_0x5e984c;},'IMyCt':_0x5f2d18(0x660)+_0x5f2d18(0x337),'IWiop':'loade'+'d','ItAeB':_0x5f2d18(0x63b),'OSkIL':_0x5f2d18(0x1c6),'wKvcc':function(_0x38d6f6,_0x5e469f){return _0x38d6f6+_0x5e469f;},'vEqIZ':function(_0x5b385e,_0x1dd3ff){return _0x5b385e===_0x1dd3ff;},'VROCd':_0x5f2d18(0x68f),'dXOsk':function(_0x51fa5b){return _0x51fa5b();},'fkoFV':'shown','nsIkJ':'mn-pa'+'nel','VknpJ':_0x5f2d18(0x3be)+'de','GRMIx':_0x5f2d18(0x622)+'go','SIoKL':'heade'+'r','gWGRy':'mn-to'+'p','nNHRX':_0x5f2d18(0x1da)+_0x5f2d18(0x4ae),'xNsGV':_0x5f2d18(0x43d)+'viewB'+_0x5f2d18(0x752)+'\x200\x2024'+_0x5f2d18(0x62e)+'<path'+_0x5f2d18(0x1ee)+_0x5f2d18(0x507)+_0x5f2d18(0x5d4)+'18\x206\x20'+_0x5f2d18(0x6f7)+'/></s'+_0x5f2d18(0x1d3),'KfwGh':'ZXGxx','GzXrM':'kour-'+'io_','npaaO':_0x5f2d18(0x43c),'DAjjj':_0x5f2d18(0x695)+_0x5f2d18(0x455)+'-banr'+'s','ebowZ':_0x5f2d18(0x3e7),'uKjzx':_0x5f2d18(0x72d)+_0x5f2d18(0x1eb)+_0x5f2d18(0x6b6)+_0x5f2d18(0x30a)+'5)','HnNcY':function(_0x2a812a,_0x219cb0){return _0x2a812a*_0x219cb0;},'uPSSV':_0x5f2d18(0x6e5),'SLsfN':'KeyS','QiDzx':_0x5f2d18(0x399)+'1','tqJXp':_0x5f2d18(0x399)+'3','kARBS':function(_0x2abfd8,_0x13a6b5){return _0x2abfd8+_0x13a6b5;},'fDFut':function(_0x5192fe,_0x39b395){return _0x5192fe+_0x39b395;},'mBGZV':function(_0x3033c7,_0xa48ead){return _0x3033c7*_0xa48ead;},'GCnmJ':'rgba('+_0x5f2d18(0x56a)+_0x5f2d18(0x606)+_0x5f2d18(0x32c)+'5)','bTYUx':'left','WvHFn':_0x5f2d18(0x2e8),'miZwU':_0x5f2d18(0x5ee),'iSOmc':_0x5f2d18(0x699),'AwkhG':function(_0x4172bc,_0x375337){return _0x4172bc>=_0x375337;},'xpTYL':_0x5f2d18(0x3f0),'JfGBO':'--p','NgTmW':_0x5f2d18(0x735),'WaVzM':_0x5f2d18(0x5a1)+'n','HHogW':'sk-sw'+_0x5f2d18(0x1c2),'YHPnl':'span','oRitR':_0x5f2d18(0x6dc),'VcycR':'\x20err','Bfvwl':function(_0x47c5fa,_0x46657f,_0x1d4947){return _0x47c5fa(_0x46657f,_0x1d4947);},'sBPNz':_0x5f2d18(0x586)+_0x5f2d18(0x41b)+'-\x20ove'+'rlay\x20'+_0x5f2d18(0x223)+_0x5f2d18(0x293)+_0x5f2d18(0x2c0)+_0x5f2d18(0x2ff)+'ad\x20to'+_0x5f2d18(0x280)+')','GUKZY':function(_0x256def,_0x4c069e){return _0x256def===_0x4c069e;},'ULYJL':_0x5f2d18(0x5c6),'aoxis':_0x5f2d18(0x1e3),'OsTVB':_0x5f2d18(0x5c3)+_0x5f2d18(0x315)+_0x5f2d18(0x436)+_0x5f2d18(0x20a)+_0x5f2d18(0x37c)+'\x20dama'+'ge.\x20B'+_0x5f2d18(0x32b)+_0x5f2d18(0x323)+_0x5f2d18(0x48b)+_0x5f2d18(0x29e)+_0x5f2d18(0x3c0)+_0x5f2d18(0x56f)+'s.','JoccD':_0x5f2d18(0x633)+_0x5f2d18(0x355)+_0x5f2d18(0x349)+'.jump'+_0x5f2d18(0x5e7)+'\x20and\x20'+_0x5f2d18(0x2ae)+_0x5f2d18(0x31f)+_0x5f2d18(0x53d)+_0x5f2d18(0x367),'mPQOT':function(_0x33a181,_0x1cbaa0,_0x3770bc,_0x15fe99,_0x203af8,_0x3c7a45){return _0x33a181(_0x1cbaa0,_0x3770bc,_0x15fe99,_0x203af8,_0x3c7a45);},'etyIw':'lower'+_0x5f2d18(0x6ae)+'oaty','iCTIX':function(_0x114147,_0x141d31,_0x1a3e0e,_0x4b7188,_0x25b4f5,_0x66a902){return _0x114147(_0x141d31,_0x1a3e0e,_0x4b7188,_0x25b4f5,_0x66a902);},'JvQJz':_0x5f2d18(0x488)+'+\x20LMB'+_0x5f2d18(0x609)+'+\x20Spa'+'ce\x20ov'+'erlay'+'.','NUmCm':'Color','cVExm':function(_0x30118e,_0x3f601b,_0x378eaa){return _0x30118e(_0x3f601b,_0x378eaa);},'TmGbF':_0x5f2d18(0x5d5),'TFRaj':_0x5f2d18(0x5bf)+_0x5f2d18(0x25e)+'Recoi'+_0x5f2d18(0x371)+'on.Ti'+_0x5f2d18(0x317),'sqRVh':'captu'+_0x5f2d18(0x206)+_0x5f2d18(0x3a6)+_0x5f2d18(0x2e6)+'ing\x20+'+_0x5f2d18(0x64d)+'ounde'+'d)','qAITS':'0|1|4'+_0x5f2d18(0x6c7)+'2','kOmiH':_0x5f2d18(0x247),'fhWkr':function(_0x331abe,_0x51b932){return _0x331abe+_0x51b932;},'ghQGn':_0x5f2d18(0x76b)+'s','mDmcA':_0x5f2d18(0x4e3)+'a-ui','GKaXd':'posit'+'ion:f'+'ixed;'+_0x5f2d18(0x4f1)+_0x5f2d18(0x380)+_0x5f2d18(0x451)+':2147'+'48364'+_0x5f2d18(0x2c4)+_0x5f2d18(0x5ec)+_0x5f2d18(0x21f)+_0x5f2d18(0x6be)+'e;','bjpXj':'comba'+'t','UbKrM':'visua'+'l','QPHZW':'Misc','UCSCR':_0x5f2d18(0x48f),'cbOUg':_0x5f2d18(0x5e4)+'wn','rlJEY':_0x5f2d18(0x65b)+'ion:f'+_0x5f2d18(0x4a1)+'top:1'+_0x5f2d18(0x29c)+_0x5f2d18(0x6d4)+_0x5f2d18(0x3f5)+_0x5f2d18(0x27a)+_0x5f2d18(0x616)+_0x5f2d18(0x2c9)+'646;c'+_0x5f2d18(0x4dd)+_0x5f2d18(0x3f9)+'ter;w'+'idth:'+'26px;'+'heigh'+'t:26p'+'x;opa'+_0x5f2d18(0x3e0)+_0x5f2d18(0x3bd)+'ransi'+_0x5f2d18(0x1c5)+'opaci'+_0x5f2d18(0x48e)+_0x5f2d18(0x5a3)+_0x5f2d18(0x2b3)+_0x5f2d18(0x286)+_0x5f2d18(0x758)+_0x5f2d18(0x6d5)+_0x5f2d18(0x725)+_0x5f2d18(0x636)+_0x5f2d18(0x592)+_0x5f2d18(0x76a)+'\x204px\x20'+_0x5f2d18(0x72d)+_0x5f2d18(0x1eb)+_0x5f2d18(0x6b6)+_0x5f2d18(0x61b)+'))','obkad':'#ffb3'+'c6','idSwQ':function(_0x971d9a,_0x4a1cc8){return _0x971d9a===_0x4a1cc8;},'HJNuz':_0x5f2d18(0x75e)+_0x5f2d18(0x5a5)+_0x5f2d18(0x253)+'.dll','lUyEy':function(_0x47a025,_0x2aff8d,_0x3b1c5f,_0x29764c,_0x29c855,_0x36c1f9,_0x10c26d,_0xe14c8a){return _0x47a025(_0x2aff8d,_0x3b1c5f,_0x29764c,_0x29c855,_0x36c1f9,_0x10c26d,_0xe14c8a);},'PEZbC':_0x5f2d18(0x2c1)+'th','stBad':_0x5f2d18(0x1e0)+_0x5f2d18(0x276)+_0x5f2d18(0x58f)+'.Over'+_0x5f2d18(0x2ea)+_0x5f2d18(0x508)+_0x5f2d18(0x371)+'on','DNnOs':function(_0x4861e6,_0x498cb9,_0x167e2b,_0x17cbfb,_0x46bd66,_0x4b2cb3,_0x397ce6,_0x1c3391){return _0x4861e6(_0x498cb9,_0x167e2b,_0x17cbfb,_0x46bd66,_0x4b2cb3,_0x397ce6,_0x1c3391);},'JmkaS':_0x5f2d18(0x5b4)+_0x5f2d18(0x27f),'WrTHl':function(_0x5ddea0,_0x323f95,_0x570e5c,_0x39b5d4,_0x5ed21d,_0x32d8e4,_0x5dff4b,_0x16ff77){return _0x5ddea0(_0x323f95,_0x570e5c,_0x39b5d4,_0x5ed21d,_0x32d8e4,_0x5dff4b,_0x16ff77);},'gDdXD':'Legio'+_0x5f2d18(0x276)+'forms'+_0x5f2d18(0x2f8)+'tide.'+_0x5f2d18(0x3a7)+_0x5f2d18(0x332)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x5f2d18(0x2d3)](location['hostn'+_0x5f2d18(0x732)]||''))return;if(window[_0x5f2d18(0x4e1)+'URA_K'+_0x5f2d18(0x1fb)])return;window['__SAK'+_0x5f2d18(0x772)+_0x5f2d18(0x1fb)]=!![];var _0x744ca8=_0xc4d548[_0x5f2d18(0x31c)],_0x513a86=_0xc4d548['obkad'],_0xab443f={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x5f2d18(0x50b)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0xd1423e={..._0xab443f};try{Object['assig'+'n'](_0xd1423e,JSON['parse'](localStorage['getIt'+'em'](_0xc4d548[_0x5f2d18(0x2c2)])||'{}'));}catch(_0xdd5be2){}function _0x4e9909(){var _0xff01ae=_0x5f2d18;try{localStorage['setIt'+'em']('sakur'+_0xff01ae(0x654)+'r.v1',JSON['strin'+'gify'](_0xd1423e));}catch(_0x2edeea){}}var _0x4f4736={'uwmk':!!window['Unity'+_0x5f2d18(0x45c)+_0x5f2d18(0x70c)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0xd1423e[_0x5f2d18(0x21e)+_0x5f2d18(0x39e)],'lastError':''};try{if('IQChX'!=='IQChX'){var _0x2091ea=_0xe39f5d[_0x5f2d18(0x37f)+'eElem'+_0x5f2d18(0x332)]('small');_0x2091ea['class'+'Name']=_0x5f2d18(0x6a6)+'nt',_0x2091ea['textC'+'onten'+'t']=_0x4464bd,_0x20151d[_0x5f2d18(0x68a)+'dChil'+'d'](_0x2091ea);}else window['addEv'+'entLi'+'stene'+'r']('error',_0x1d7a05=>{var _0x51284b=_0x5f2d18;if('uzvTo'!=='aVoVu')try{if(_0x51284b(0x297)==='ypUky')_0x13d6af['set'](_0x2baeb7,null);else{var _0x133736=_0x1d7a05&&(_0x1d7a05[_0x51284b(0x51b)+'ge']||_0x1d7a05['error']&&_0x1d7a05[_0x51284b(0x668)]['messa'+'ge'])||_0x51284b(0x4aa)+'wn';if(_0x1d7a05&&_0x1d7a05[_0x51284b(0x1bb)+_0x51284b(0x732)])_0x133736+=_0xc4d548[_0x51284b(0x393)]+_0xc4d548[_0x51284b(0x447)](String,_0x1d7a05[_0x51284b(0x1bb)+_0x51284b(0x732)])[_0x51284b(0x5dc)]('/')[_0x51284b(0x20e)]()+':'+(_0x1d7a05[_0x51284b(0x35b)+'o']||'?');_0x4f4736[_0x51284b(0x3ca)+'rror']=_0xc4d548[_0x51284b(0x447)](String,_0x133736)[_0x51284b(0x773)](-0x1872+-0x1d22+0x3594,0x1e6c+0x293*-0x3+-0x1613);}}catch(_0x519c04){}else{var _0x3d1888=_0x2904da[_0x51284b(0x37f)+_0x51284b(0x69b)+'ent'](_0xc4d548['xFWfX']);_0x3d1888['class'+_0x51284b(0x38c)]=_0xc4d548[_0x51284b(0x395)];for(var [_0x25675d,_0x11059e]of _0x2ebf37){var _0x46c769=_0x4f71c2[_0x51284b(0x37f)+_0x51284b(0x69b)+'ent'](_0xc4d548[_0x51284b(0x3b0)]);_0x46c769['value']=_0x25675d,_0x46c769['textC'+_0x51284b(0x386)+'t']=_0x11059e,_0x3d1888['appen'+'dChil'+'d'](_0x46c769);}return _0x3d1888['value']=_0x1a67c9,_0x3d1888[_0x51284b(0x5a2)+_0x51284b(0x254)]=()=>_0xdf4084(_0x3d1888[_0x51284b(0x348)]),_0x3d1888;}});}catch(_0x3aaa7e){}var _0x172ca3=null,_0x1506b6=null,_0x1b634c={},_0x366fbd=[],_0x3a9b04=[],_0x49de03=new Map();function _0x27550d(_0x465c67,_0x35c063){var _0x471570=_0x5f2d18;if(!_0x35c063||_0x465c67['inclu'+_0x471570(0x74f)](_0x35c063)||_0x465c67[_0x471570(0x3d8)+'h']>-0x1756+-0x1*-0x220f+-0xa79)return;_0x465c67[_0x471570(0x6d3)](_0x35c063);}function _0xc7a648(_0x1c24e0,_0x326497,_0x4b19d8,_0x62ae90){var _0x3eeb3a=_0x5f2d18,_0x5669fd={'ExRcj':_0xc4d548['GsFma'],'OBVfd':_0x3eeb3a(0x45e)};if(_0xc4d548[_0x3eeb3a(0x2f3)](_0xc4d548[_0x3eeb3a(0x4b7)],_0xc4d548[_0x3eeb3a(0x4b7)])){var _0x17152e=_0x443314[_0x3eeb3a(0x37f)+_0x3eeb3a(0x69b)+'ent'](_0x5669fd[_0x3eeb3a(0x5ed)]);return _0x17152e['class'+'Name']=_0x3eeb3a(0x5b7)+'te'+(_0xbbfbbc?_0x5669fd['OBVfd']:''),_0x17152e['textC'+'onten'+'t']=_0x58ed89,_0x17152e;}else{var _0x3f5fe5=0x52*0x2e+-0x11*-0x1ee+-0x2f8a;try{_0xc4d548[_0x3eeb3a(0x2f3)](_0x3eeb3a(0x4b2),_0xc4d548['NjQvm'])?_0x3f5fe5=_0x326497&&_0x326497['val']?_0x326497[_0x3eeb3a(0x6a5)]():-0x1ce9+0x7*-0x548+0x1*0x41e1:(_0x31dd09['hookN'+'oReco'+'il']=_0x84a59a,_0x54231b());}catch(_0x3038bc){}if(!_0x3f5fe5)return;_0x27550d(_0x1c24e0,_0x3f5fe5),_0x4b19d8[_0x62ae90]=_0x1c24e0[_0x3eeb3a(0x3d8)+'h'];if(_0xc4d548[_0x3eeb3a(0x647)](_0x62ae90,_0x3eeb3a(0x347)+'ents')&&_0x1c24e0[_0x3eeb3a(0x3d8)+'h']){var _0x3b0522=_0x1b634c[_0x3eeb3a(0x5ef)+'ve'];if(_0x3b0522)try{_0x3b0522['enabl'+'ed']=![];}catch(_0x3fb8a4){}}}}function _0x591eea(_0x595137,_0x2c50ff,_0x4313e8){var _0x4cfa2b=_0x5f2d18,_0x413e60=_0x49de03['get'](_0x595137);!_0x413e60&&(_0x413e60=new Map(),_0x49de03['set'](_0x595137,_0x413e60));if(!_0x413e60[_0x4cfa2b(0x294)](_0x2c50ff))try{if(_0x4cfa2b(0x2ab)!==_0x4cfa2b(0x52b)){var _0x4183ac=new _0x172ca3(_0x595137)['readF'+_0x4cfa2b(0x743)](_0x2c50ff,_0x4313e8);_0x413e60[_0x4cfa2b(0x514)](_0x2c50ff,_0x4183ac!==undefined?_0x4183ac['val']():null);}else _0x3b3f5c[_0x4cfa2b(0x432)+'e']=_0x11a1fc,_0xc4d548['tmloP'](_0x53b995);}catch(_0x3da642){_0x413e60['set'](_0x2c50ff,null);}return _0x413e60[_0x4cfa2b(0x31a)](_0x2c50ff);}function _0xae0016(_0x91d71d,_0x2af4fe,_0x6deaca,_0x2cf358){var _0x2f5a9d=_0x5f2d18;try{new _0x172ca3(_0x91d71d)['write'+_0x2f5a9d(0x5cf)](_0x2af4fe,_0x6deaca,_0x2cf358);}catch(_0x26849b){}}function _0x5b2e3b(_0x2a8cbe,_0x266c5b){var _0x2febbf=_0x5f2d18;try{var _0x27b78c=new _0x172ca3(_0x2a8cbe)[_0x2febbf(0x22f)+_0x2febbf(0x743)](_0x266c5b,_0x2febbf(0x1fe));return _0x27b78c?_0x27b78c['val']():-0x3*0x56d+0x13fc+-0x3b5;}catch(_0x494cc9){if(_0xc4d548[_0x2febbf(0x719)]!==_0xc4d548[_0x2febbf(0x719)])_0x4d4757[_0x2febbf(0x5c7)+_0x2febbf(0x62a)+_0x2febbf(0x3bc)](),_0x35c50b();else return-0x1734+-0x8b9+0xb*0x2e7;}}function _0x517f1e(_0x3bb650,_0x32c402,_0x23bfc4,_0x43213c){var _0x28252d=_0x5f2d18,_0x18e798=_0xc4d548['OYYbM'](_0x591eea,_0x3bb650,_0x32c402,_0x23bfc4);if(_0x18e798!=null)_0xc4d548[_0x28252d(0x5fb)](_0xae0016,_0x3bb650,_0x32c402,_0x23bfc4,_0x18e798*_0x43213c);}function _0x38284d(_0x4695ed,_0x219372,_0x1b9c18,_0x4474b3,_0x3ed04d,_0x592047,_0xbe473c){var _0x1dd38b=_0x5f2d18;try{var _0x5040b0=_0x1506b6[_0x1dd38b(0x34e)+_0x1dd38b(0x688)]({'typeName':_0x219372,'methodName':_0x1b9c18,'params':_0x4474b3,'returnType':_0x3ed04d},_0x592047);return _0x5040b0['enabl'+'ed']=_0xc4d548[_0x1dd38b(0x2f3)](_0xbe473c,![]),_0x1b634c[_0x4695ed]=_0x5040b0,_0x4f4736[_0x1dd38b(0x6d9)+_0x1dd38b(0x642)]++,_0x5040b0;}catch(_0xf66187){return console[_0x1dd38b(0x3fb)](_0x1dd38b(0x460)+_0x1dd38b(0x62c)+_0x1dd38b(0x2b5)+'ook\x20r'+'eg\x20fa'+'iled:',_0x4695ed,_0xf66187&&_0xf66187['messa'+'ge']),null;}}function _0x3bdb2a(_0x5c51c5,_0x47ed0a,_0x48882d,_0x1a345b,_0x1f3188,_0x36c285,_0x139123){var _0x416875=_0x5f2d18;if(_0x416875(0x5b0)===_0x416875(0x5b0))try{var _0x7b83ea=_0xc4d548['iEBnn']['split']('|'),_0x4943b1=-0xdb3+-0x1848+0x25fb;while(!![]){switch(_0x7b83ea[_0x4943b1++]){case'0':_0x2ba858['enabl'+'ed']=_0xc4d548[_0x416875(0x2f3)](_0x139123,![]);continue;case'1':var _0x2ba858=_0x1506b6['hookP'+'ostfi'+'x']({'typeName':_0x47ed0a,'methodName':_0x48882d,'params':_0x1a345b,'returnType':_0x1f3188},_0x36c285);continue;case'2':_0x4f4736[_0x416875(0x6d9)+_0x416875(0x642)]++;continue;case'3':_0x1b634c[_0x5c51c5]=_0x2ba858;continue;case'4':return _0x2ba858;}break;}}catch(_0x4ba059){return console['warn'](_0x416875(0x460)+_0x416875(0x62c)+_0x416875(0x2b5)+_0x416875(0x4a2)+'eg\x20fa'+_0x416875(0x3a0),_0x5c51c5,_0x4ba059&&_0x4ba059[_0x416875(0x51b)+'ge']),null;}else try{_0x499fa2['enabl'+'ed']=!!_0x162588;}catch(_0x3c32d2){}}var _0x4b7246=()=>![];try{if(window[_0x5f2d18(0x54e)+_0x5f2d18(0x45c)+'dkit']&&!_0xd1423e['safeM'+_0x5f2d18(0x39e)]){if(_0xc4d548[_0x5f2d18(0x375)](_0x5f2d18(0x36c),'UALew')){_0x172ca3=window[_0x5f2d18(0x54e)+'WebMo'+_0x5f2d18(0x70c)][_0x5f2d18(0x601)+_0x5f2d18(0x1bc)+'er'],_0x1506b6=window['Unity'+_0x5f2d18(0x45c)+'dkit'][_0x5f2d18(0x320)+'me'][_0x5f2d18(0x37f)+_0x5f2d18(0x26a)+'in']({'name':_0x5f2d18(0x3ed)+'aKour','version':_0x5f2d18(0x2ee),'referencedAssemblies':[_0xc4d548[_0x5f2d18(0x40c)]]});if(_0xd1423e[_0x5f2d18(0x733)+'od'])_0xc4d548['lUyEy'](_0x38284d,_0x5f2d18(0x44d),_0xc4d548[_0x5f2d18(0x3f2)],_0x5f2d18(0x1f9)+'ateTa'+'keHea'+_0x5f2d18(0x493),[_0x5f2d18(0x28b),_0x5f2d18(0x28b)],undefined,_0x4b7246,!!_0xd1423e[_0x5f2d18(0x44d)]);if(_0xd1423e[_0x5f2d18(0x733)+'odDie'])_0x38284d('godDi'+'e',_0x5f2d18(0x2c1)+'th',_0x5f2d18(0x3bb)+'Die',[_0x5f2d18(0x28b),'i32','i32',_0xc4d548[_0x5f2d18(0x571)],_0xc4d548['tkbMx']],undefined,_0x4b7246,!!_0xd1423e['god']);if(_0xd1423e[_0x5f2d18(0x4dc)+_0x5f2d18(0x304)+'il'])_0x38284d(_0x5f2d18(0x5bf)+'oil',_0xc4d548['stBad'],'Tick',[_0x5f2d18(0x28b)],undefined,_0x4b7246,!!_0xd1423e[_0x5f2d18(0x5bf)+_0x5f2d18(0x621)]);if(_0xd1423e[_0x5f2d18(0x6fb)+_0x5f2d18(0x32d)+'e'])_0xc4d548[_0x5f2d18(0x1f0)](_0x3bdb2a,'capSh'+'ooter',_0xc4d548[_0x5f2d18(0x59e)],'SetGa'+'meRun'+_0x5f2d18(0x6db),[_0xc4d548[_0x5f2d18(0x571)],'i32'],undefined,(_0xdb86cb,_0x5de476)=>{var _0x5650ab=_0x5f2d18;_0xc4d548[_0x5650ab(0x737)](_0xc7a648,_0x3a9b04,_0x5de476,_0x4f4736,_0xc4d548['hsass']);},!![]);if(_0xd1423e[_0x5f2d18(0x6fb)+_0x5f2d18(0x32d)+'e'])_0xc4d548[_0x5f2d18(0x3b1)](_0x3bdb2a,_0x5f2d18(0x5ef)+'ve',_0xc4d548['gDdXD'],_0x5f2d18(0x5fe)+'unded',[_0xc4d548[_0x5f2d18(0x571)]],'i32',(_0x250366,_0x1151e9)=>{var _0x57c8ba=_0x5f2d18;_0xc7a648(_0x366fbd,_0x1151e9,_0x4f4736,_0xc4d548[_0x57c8ba(0x33d)]);},!![]);}else _0x5e33c4[_0x5f2d18(0x335)+_0x5f2d18(0x42d)]=_0x5e3956,_0x28b4ff();}}catch(_0x236c0a){_0x5f2d18(0x4ba)!=='BWkdv'?(_0x5d09a0(_0x18d681,0x1*-0x14d7+-0x5fb*0x1+-0x30a*-0x9,_0x5f2d18(0x2b2),0x1f16+0xf66*0x2+-0x3de2),_0x4fde71(_0x56aee5,-0x268b+-0x5*0x27e+0x3369,_0xc4d548['LhQEH'],0x27*-0xd+0xb7b+-0x97f*0x1)):console[_0x5f2d18(0x3fb)](_0xc4d548[_0x5f2d18(0x388)],_0x236c0a&&_0x236c0a[_0x5f2d18(0x51b)+'ge']);}function _0x2bfe1d(_0x399379,_0x2b3277){var _0x464067=_0x5f2d18,_0xf1412a=_0x1b634c[_0x399379];if(_0xf1412a)try{_0xc4d548[_0x464067(0x5ca)](_0x464067(0x6e8),_0x464067(0x248))?(_0x5af38f[_0x464067(0x1ec)+'or']=_0x4b91c2,_0xc4d548[_0x464067(0x51a)](_0x4cd2ef)):_0xf1412a['enabl'+'ed']=!!_0x2b3277;}catch(_0x3da6f8){}}setInterval(()=>{var _0x1e23b9=_0x5f2d18,_0x2d190f={'tTPII':function(_0x340cee,_0x1d7d3b){return _0x340cee+_0x1d7d3b;},'lbBuc':function(_0x450df4,_0x2ba738){var _0x3c4e63=_0x4d8f;return _0xc4d548[_0x3c4e63(0x513)](_0x450df4,_0x2ba738);}};if(_0x1e23b9(0x1ce)===_0xc4d548[_0x1e23b9(0x575)]){if(!_0x172ca3||!window[_0x1e23b9(0x614)+_0x1e23b9(0x329)+'nce'])return;var _0x390c52=(Number(_0xd1423e[_0x1e23b9(0x448)+_0x1e23b9(0x4fe)])||-0x754+0x17eb+0x1d*-0x8f)/(-0x1191*-0x1+0x1*-0x6ec+-0xa41),_0x2baf8b=(Number(_0xd1423e['jumpP'+'ct'])||-0x1061+0x45d+0x2*0x634)/(0xc80+0x1445+0xacb*-0x3),_0x4dbd4e=(_0xc4d548[_0x1e23b9(0x447)](Number,_0xd1423e[_0x1e23b9(0x31f)+_0x1e23b9(0x5e2)])||-0x72f*0x5+-0x4b3*0x5+-0x1*-0x3bce)/(0x2157+0x148c+0x19f*-0x21),_0x9f287f=Math['max'](0x5f4+-0x15a*0xe+0x51*0x29,Number(_0xd1423e[_0x1e23b9(0x4c8)+'eValu'+'e'])||0x11ec*-0x2+-0x3c3+-0x2831*-0x1),_0x5b49f6=_0xc4d548[_0x1e23b9(0x200)](_0x390c52,-0xde*-0x2b+-0x262+-0x22e7)||_0xc4d548['aFehr'](_0x2baf8b,-0x257c+0xe12*-0x1+-0x338f*-0x1)||_0x4dbd4e!==0x1d33+0x15b3+-0x32e5||_0xd1423e[_0x1e23b9(0x634)],_0x20d99d=_0xd1423e[_0x1e23b9(0x5ad)+_0x1e23b9(0x23b)]||_0xd1423e['damag'+'eExp']||_0xd1423e['infAm'+_0x1e23b9(0x6a3)]||_0xd1423e[_0x1e23b9(0x5a4)+_0x1e23b9(0x290)];if(!_0x5b49f6&&!_0x20d99d)return;try{if('JYMPZ'!==_0x1e23b9(0x6f5))for(var _0x429bab=-0xd58*0x1+0x9eb*0x2+0x6*-0x115;_0x429bab<_0x366fbd['lengt'+'h'];_0x429bab++){var _0x3bb98b=_0x366fbd[_0x429bab];if(!_0x3bb98b)continue;if(_0x390c52!==0x1ce2+-0xb87*0x1+-0x115a){var _0x33550d=(_0x1e23b9(0x775)+_0x1e23b9(0x1c3)+'2')[_0x1e23b9(0x5dc)]('|'),_0x3e2e5b=-0x19ab+-0x15*-0xe+0x1885;while(!![]){switch(_0x33550d[_0x3e2e5b++]){case'0':_0x517f1e(_0x3bb98b,0x32c+0x181a+0x7a*-0x39,'f32',_0x390c52);continue;case'1':_0xc4d548['yVDqF'](_0x517f1e,_0x3bb98b,0x5d3+0x18f+0xd*-0x8e,'f32',_0x390c52);continue;case'2':_0x517f1e(_0x3bb98b,-0x2233*-0x1+0xa02+-0x131*0x25,'f32',_0x390c52);continue;case'3':_0x517f1e(_0x3bb98b,-0x1b*-0x1+0x2618+-0x1*0x2603,_0x1e23b9(0x2b2),_0x390c52);continue;case'4':_0x517f1e(_0x3bb98b,-0xdd*-0x9+-0x225*-0x3+-0x3e*0x3a,_0x1e23b9(0x2b2),_0x390c52);continue;case'5':_0x517f1e(_0x3bb98b,0x1b90+0xc92+-0x27ee,_0x1e23b9(0x2b2),_0x390c52);continue;}break;}}if(_0x2baf8b!==0x1ee2+-0x10bb*0x1+-0x2*0x713)_0x517f1e(_0x3bb98b,0x175e*-0x1+0x1*0x157c+0x232,_0x1e23b9(0x2b2),_0x2baf8b);_0x4dbd4e!==-0x1673*0x1+-0xdd5*-0x2+-0x2e*0x1d&&(_0x517f1e(_0x3bb98b,-0x1d6+0x92*0x10+-0x702,_0x1e23b9(0x2b2),_0x4dbd4e),_0x517f1e(_0x3bb98b,0xbc3*0x3+-0x2*-0x132e+0x1873*-0x3,_0xc4d548['LhQEH'],_0x4dbd4e));if(_0xd1423e[_0x1e23b9(0x634)])_0xc4d548[_0x1e23b9(0x47c)](_0xae0016,_0x3bb98b,-0x6d*0x19+-0x148d*-0x1+-0x4*0x253,'f32',-(-0x2d2+0x175*-0x9+-0x13d6*-0x1));}else{_0x45ac1f[_0x1e23b9(0x5a8)+_0x1e23b9(0x45f)]=!!_0xbf7131['unity'+_0x1e23b9(0x329)+_0x1e23b9(0x4f9)];try{var _0x3ce95e=-0x11c5+-0x67*0x2f+0x24ae;for(var _0x1d83f8 in _0xe84457){if(_0xca3e15[_0x1d83f8]&&_0x445462[_0x1d83f8][_0x1e23b9(0x771)+'ed'])_0x3ce95e++;}_0x3ac100[_0x1e23b9(0x6d9)+'Ok']=_0x3ce95e;}catch(_0x218ec8){}}}catch(_0x598c12){}try{for(var _0x4a5939=0xd0*-0xc+-0x20fc+0x2abc;_0xc4d548[_0x1e23b9(0x1e1)](_0x4a5939,_0x3a9b04[_0x1e23b9(0x3d8)+'h']);_0x4a5939++){if(_0x1e23b9(0x446)!==_0xc4d548['blepg'])_0x350b7c[_0x1e23b9(0x3af)]=_0x2d190f[_0x1e23b9(0x5ce)]('600\x20'+_0x53fe29[_0x1e23b9(0x2d7)](_0x2d190f['lbBuc'](-0x1404+-0x1f66+-0x3373*-0x1,_0x1f09a6)),_0x1e23b9(0x440)+'-sans'+_0x1e23b9(0x60c)+_0x1e23b9(0x266)+_0x1e23b9(0x2bf)+_0x1e23b9(0x52f)+_0x1e23b9(0x469)+'if'),_0x5d5736[_0x1e23b9(0x38a)+_0x1e23b9(0x751)]=_0x3c98b6?'#fff':_0x1e23b9(0x72d)+'255,2'+_0x1e23b9(0x606)+'0,0.5'+'5)',_0x51b055[_0x1e23b9(0x207)+_0x1e23b9(0x302)](_0x53ad51,_0x1095ba+_0x19d9d3/(-0x2*-0xe82+-0x38c*0x2+-0x42*0x55),_0x2d190f[_0x1e23b9(0x5ce)](_0x2a438c,_0x16ac56/(-0x462+0x1*-0x20f2+0x2556))+(0x1bab+0x3*-0xbda+0x7eb*0x1)*_0x446e7a);else{var _0xe75b4d=_0x5b2e3b(_0x3a9b04[_0x4a5939],0x1712*0x1+0xf07+-0x25e1);if(!_0xe75b4d)continue;_0xd1423e['damag'+'eExp']&&(_0xae0016(_0xe75b4d,0x201+0x754+-0x909,'i32',_0x9f287f),_0xc4d548[_0x1e23b9(0x32f)](_0xae0016,_0xe75b4d,0xebf+-0x5*0x121+-0x8c6,_0xc4d548['tkbMx'],_0x9f287f));_0xd1423e[_0x1e23b9(0x5ad)+'ead']&&(_0xae0016(_0xe75b4d,0xec9*-0x1+-0x7ac*-0x1+-0x1*-0x7a5,_0xc4d548[_0x1e23b9(0x697)],0x2*0xc4+-0x3*-0x329+-0xb03*0x1),_0xae0016(_0xe75b4d,-0xb83+-0xe*0x5b+0xad*0x19,_0xc4d548['LhQEH'],0x1419+0xd4f*-0x1+-0x6c9));if(_0xd1423e[_0x1e23b9(0x306)+_0x1e23b9(0x6a3)])_0xae0016(_0xe75b4d,0x24b3+0x2cf*0x2+0x1*-0x29f5,_0x1e23b9(0x28b),-0x46f*0x2+0x225d+-0x1*0x1598);_0xd1423e[_0x1e23b9(0x5a4)+_0x1e23b9(0x290)]&&(_0xc4d548[_0x1e23b9(0x647)](_0xc4d548['yjUsp'],_0xc4d548[_0x1e23b9(0x5c5)])?(_0x517f1e(_0xe75b4d,-0x1b00+0x2*0x8ec+0x5c*0x1b,_0xc4d548[_0x1e23b9(0x697)],-0x15fe+-0x2268*-0x1+0xe*-0xe3+0.1),_0xae0016(_0xe75b4d,0xa8c*0x2+0x3d2+-0x188a,_0x1e23b9(0x2b2),-0x106e+0x318*-0x4+0xe67*0x2+0.1)):(_0x2293d9[_0x1e23b9(0x38a)+_0x1e23b9(0x751)]=_0x4d564b||'rgba('+'255,2'+'35,24'+_0x1e23b9(0x32c)+'5)',_0x4f3233['fillT'+_0x1e23b9(0x302)](_0x30def1,_0x475952,_0x97abb0),_0x140d3a+=0x6*-0x9d+0x1cc*-0x9+0x13ea));}}}catch(_0x24acf8){}}else{var _0x1c201e=_0x33dfd5[_0x1e23b9(0x37f)+_0x1e23b9(0x69b)+_0x1e23b9(0x332)](_0x1e23b9(0x433));return _0x1c201e[_0x1e23b9(0x593)]=_0x1e23b9(0x401),_0x1c201e['class'+'Name']=_0xc4d548[_0x1e23b9(0x284)],_0x1c201e[_0x1e23b9(0x348)]=/^#[0-9a-f]{6}$/i['test'](_0xa1ff50)?_0x4f65fc:_0xc4d548[_0x1e23b9(0x31c)],_0x1c201e[_0x1e23b9(0x235)+'ut']=()=>_0x6df701(_0x1c201e['value']),_0x1c201e;}},-0x597+0x10c2+-0x1*0xa63),setInterval(()=>{var _0x3c6b54=_0x5f2d18,_0x48c829={'hQByh':_0xc4d548[_0x3c6b54(0x2c2)]};_0x4f4736['gameL'+_0x3c6b54(0x45f)]=!!window['unity'+'Insta'+'nce'];try{if('IXnwW'!==_0x3c6b54(0x271)){var _0x16a0e8=0x1e*-0x135+0x8ef*0x1+0x1b47;for(var _0x44fe3c in _0x1b634c){if(_0x1b634c[_0x44fe3c]&&_0x1b634c[_0x44fe3c][_0x3c6b54(0x771)+'ed'])_0x16a0e8++;}_0x4f4736[_0x3c6b54(0x6d9)+'Ok']=_0x16a0e8;}else _0x52acc9[_0x3c6b54(0x6ff)+'em'](_0x48c829['hQByh'],_0x298b97['strin'+'gify'](_0x48bc77));}catch(_0x4d64e1){}},-0x208c+-0x1*-0x1ad7+0x99d);var _0x1c060e=new Set(),_0x479059={0x1:[],0x3:[]},_0x10d963=![];function _0x35aa16(_0x472162){_0x1c060e['add'](_0x472162['code']);}function _0x151ada(_0x241a48){var _0x2ad02a=_0x5f2d18,_0x1047cf={'bWJSS':function(_0x393384,_0x5de964,_0x3bc842,_0x5b000b,_0x50f7ec){var _0x38d3c5=_0x4d8f;return _0xc4d548[_0x38d3c5(0x737)](_0x393384,_0x5de964,_0x3bc842,_0x5b000b,_0x50f7ec);},'hMUsF':_0xc4d548['kdNfI']};_0xc4d548['nUjtP'](_0x2ad02a(0x2ef),_0x2ad02a(0x44a))?_0x1c060e[_0x2ad02a(0x4c7)+'e'](_0x241a48[_0x2ad02a(0x45a)]):_0x1047cf[_0x2ad02a(0x573)](_0x19e06a,_0x36613e,_0x577438,_0x7e6dbf,_0x1047cf[_0x2ad02a(0x4c2)]);}function _0x39c73d(_0x2978a8){var _0x48b05c=_0x5f2d18;if(_0x2978a8[_0x48b05c(0x361)+'ura'])return;_0x1c060e[_0x48b05c(0x721)](_0xc4d548[_0x48b05c(0x720)]+(_0x2978a8[_0x48b05c(0x215)+'n']+(0x25c5+0xae+-0x2672)));var _0x13e9d0=_0x479059[_0x2978a8[_0x48b05c(0x215)+'n']+(-0x1*-0x780+-0x1*-0xf9a+-0x1b*0xdb)];if(_0x13e9d0){_0x13e9d0[_0x48b05c(0x6d3)](performance['now']());if(_0xc4d548[_0x48b05c(0x59c)](_0x13e9d0['lengt'+'h'],0x77*0x8+0x1f7d+-0x230d))_0x13e9d0[_0x48b05c(0x677)]();}}function _0x58f5f8(_0x4c0161){var _0x42fd0d=_0x5f2d18;if(!_0x4c0161['__sak'+_0x42fd0d(0x5f1)])_0x1c060e[_0x42fd0d(0x4c7)+'e'](_0x42fd0d(0x399)+(_0x4c0161[_0x42fd0d(0x215)+'n']+(0xaeb+-0x173b+0xc51)));}function _0x2439e9(){var _0x1d78f8=_0x5f2d18;if('VxlxI'===_0x1d78f8(0x624)){if(_0x2c9328['__sak'+_0x1d78f8(0x5f1)])return;_0x2a174d[_0x1d78f8(0x721)](_0xc4d548[_0x1d78f8(0x4d4)](_0xc4d548['ZPWcq'],_0x1d5826['butto'+'n']+(0x65*0x5a+0x13c1+-0x3742)));var _0x4f7b51=_0x2555ea[_0xe1682f[_0x1d78f8(0x215)+'n']+(0x1811*-0x1+0x9f3+0xe1f)];if(_0x4f7b51){_0x4f7b51['push'](_0x123d6e['now']());if(_0xc4d548[_0x1d78f8(0x3b9)](_0x4f7b51['lengt'+'h'],-0x22*-0xf1+-0x1*0x16d3+-0x907))_0x4f7b51[_0x1d78f8(0x677)]();}}else _0x1c060e[_0x1d78f8(0x71b)]();}function _0x42ecfc(){var _0x5b1fb0=_0x5f2d18;if(_0x5b1fb0(0x358)===_0x5b1fb0(0x2cf))_0x1be455=_0x50046d[_0x5b1fb0(0x755)](_0x396f79[_0x5b1fb0(0x736)+'em'](_0xc4d548[_0x5b1fb0(0x2d5)])||'{}');else{if(_0x10d963)return;_0x10d963=!![],window['addEv'+_0x5b1fb0(0x39c)+_0x5b1fb0(0x311)+'r'](_0x5b1fb0(0x5e4)+'wn',_0x35aa16,!![]),window[_0x5b1fb0(0x5c9)+_0x5b1fb0(0x39c)+'stene'+'r'](_0xc4d548['YIPHH'],_0x151ada,!![]),window[_0x5b1fb0(0x5c9)+'entLi'+_0x5b1fb0(0x311)+'r']('mouse'+_0x5b1fb0(0x438),_0x39c73d,!![]),window[_0x5b1fb0(0x5c9)+'entLi'+'stene'+'r']('mouse'+'up',_0x58f5f8,!![]),window[_0x5b1fb0(0x5c9)+_0x5b1fb0(0x39c)+'stene'+'r'](_0x5b1fb0(0x51f),_0x2439e9);}}function _0x2781e2(_0x51e921){var _0x16c553=_0x5f2d18,_0x9ad5fd=_0x479059[_0x51e921]||[],_0x588fbd=performance[_0x16c553(0x6ab)]();while(_0x9ad5fd['lengt'+'h']&&_0xc4d548['ZBXeq'](_0x588fbd,_0x9ad5fd[0x53a+0xca9+0x13*-0xf1])>0x250c+0x1*0x1d89+-0x3ead*0x1)_0x9ad5fd['shift']();return _0x9ad5fd[_0x16c553(0x3d8)+'h'];}function _0xf55857(_0x5cb048){var _0x446f73=_0x5f2d18;if(document['body']&&(document['ready'+'State']===_0x446f73(0x2b3)+_0x446f73(0x267)+'e'||document[_0x446f73(0x2f5)+_0x446f73(0x501)]===_0x446f73(0x1f6)+_0x446f73(0x718)))_0x5cb048();else document[_0x446f73(0x5c9)+'entLi'+_0x446f73(0x311)+'r'](_0x446f73(0x4b8)+_0x446f73(0x6e6)+_0x446f73(0x394)+'d',_0x5cb048,{'once':!![]});}_0xf55857(()=>{var _0x358929=_0x5f2d18,_0x2b5753={'tXszQ':_0x358929(0x54e)+_0x358929(0x368)+_0x358929(0x2a7)+_0x358929(0x6c6)+_0x358929(0x687),'cfdAB':'set_t'+_0x358929(0x3cc)+_0x358929(0x458)+'Rate','JmjqK':function(_0x5e6b91,_0x2881f1){return _0x5e6b91===_0x2881f1;},'FtGiF':_0xc4d548[_0x358929(0x243)],'BSLWd':function(_0x4bc2b9,_0x74862c){return _0xc4d548['ZBXeq'](_0x4bc2b9,_0x74862c);},'Kdcqc':function(_0x38af9d,_0x5b8b70){return _0x38af9d(_0x5b8b70);},'wHDEC':_0xc4d548['npaaO'],'GfrIF':_0x358929(0x25f)+'io_30'+_0x358929(0x4f2)+'-pare'+'nt','tOlBx':_0xc4d548['DAjjj'],'RtKeV':function(_0xc21510,_0x5cbcbe){return _0xc4d548['YuokL'](_0xc21510,_0x5cbcbe);},'nbzgG':_0xc4d548['ebowZ'],'nqZNh':'cTRuI','BNsoa':function(_0x284c2a){return _0x284c2a();},'wHUFu':'CANVA'+'S','iUyJM':function(_0x27cf11,_0x362e15){var _0x5eb16a=_0x358929;return _0xc4d548[_0x5eb16a(0x2f3)](_0x27cf11,_0x362e15);},'daVzS':function(_0x26a6e6,_0x125e72){return _0x26a6e6===_0x125e72;},'LnpeN':_0xc4d548[_0x358929(0x24a)],'Nclth':_0xc4d548['uKjzx'],'pmlUx':_0xc4d548[_0x358929(0x2fc)],'sDSEi':_0x358929(0x3d4)+'e','vybIz':function(_0x59c430,_0x250ad1){return _0x59c430+_0x250ad1;},'JptWb':_0x358929(0x665),'fcOUL':'px\x20ui'+_0x358929(0x4f5)+'-seri'+_0x358929(0x266)+_0x358929(0x2bf)+'i,san'+_0x358929(0x469)+'if','SzbKc':function(_0x40efc0,_0xc7a7ae){return _0x40efc0*_0xc7a7ae;},'bTMzU':_0x358929(0x269),'EzqiH':function(_0x14b5f4,_0xaa2c71){return _0x14b5f4*_0xaa2c71;},'RqmcB':function(_0x1a2e10,_0x14a27b){var _0x4cb527=_0x358929;return _0xc4d548[_0x4cb527(0x452)](_0x1a2e10,_0x14a27b);},'hotSq':function(_0x95ab79,_0x34a456){return _0x95ab79/_0x34a456;},'gDQAt':function(_0x194cd2,_0x153336){var _0x9fb66c=_0x358929;return _0xc4d548[_0x9fb66c(0x5be)](_0x194cd2,_0x153336);},'sCLdx':function(_0x5716da,_0x3a4229){return _0x5716da+_0x3a4229;},'DjwmS':function(_0x5a2be3,_0x44356c){return _0x5a2be3*_0x44356c;},'AenKN':function(_0x40c908,_0x739c2e,_0xde2230,_0x1291e8,_0x8d466e,_0x46ce8a,_0x6c208f){return _0x40c908(_0x739c2e,_0xde2230,_0x1291e8,_0x8d466e,_0x46ce8a,_0x6c208f);},'vCwPL':_0xc4d548['uPSSV'],'RCpKd':function(_0x32672b,_0x18a8d4){return _0x32672b+_0x18a8d4;},'UxMKT':function(_0x2643d0,_0x10bc2c){return _0x2643d0+_0x10bc2c;},'oXYVp':_0x358929(0x22d),'iLgcF':_0xc4d548[_0x358929(0x465)],'VwFzC':function(_0x21df40,_0x1ceea3){return _0xc4d548['wKvcc'](_0x21df40,_0x1ceea3);},'IaQzj':function(_0x28fbe4,_0x561954){var _0x29689d=_0x358929;return _0xc4d548[_0x29689d(0x4d4)](_0x28fbe4,_0x561954);},'tYTfY':_0xc4d548['QiDzx'],'TCpMn':'\x20CPS','VzyjX':_0x358929(0x6b0),'EaEap':_0xc4d548[_0x358929(0x73f)],'MTFYC':function(_0x5a75fe,_0x8b50f4){return _0xc4d548['kARBS'](_0x5a75fe,_0x8b50f4);},'vMzIG':_0x358929(0x533),'TVOoJ':function(_0x2c761f,_0x44081f){var _0x24e8f9=_0x358929;return _0xc4d548[_0x24e8f9(0x439)](_0x2c761f,_0x44081f);},'nBfsG':_0xc4d548['svQMk'],'TaLGr':function(_0x5c918d,_0x21985e){return _0xc4d548['mBGZV'](_0x5c918d,_0x21985e);},'VUEWs':function(_0x4c3883,_0x9f7474){return _0x4c3883+_0x9f7474;},'YsuBg':function(_0x331d35,_0x3404b2){var _0x1a436b=_0x358929;return _0xc4d548[_0x1a436b(0x746)](_0x331d35,_0x3404b2);},'Wetrr':function(_0x1402ae,_0x21463f){return _0x1402ae+_0x21463f;},'fTMEc':function(_0xbcaec2,_0x306fec){return _0xbcaec2||_0x306fec;},'VBvAJ':_0xc4d548[_0x358929(0x576)],'wOykh':_0xc4d548['bTYUx'],'anTrA':_0xc4d548[_0x358929(0x610)],'KhrJP':_0xc4d548[_0x358929(0x2b7)],'YQaeG':_0x358929(0x23d)+_0x358929(0x6fa)+_0x358929(0x42f)+'e…','ARkZn':_0xc4d548[_0x358929(0x3e1)],'NuHTo':_0x358929(0x56c)+_0x358929(0x43b)+'|3|2|'+_0x358929(0x4a9)+'|1','URNaO':function(_0x31c4d0,_0x5eaa15){return _0xc4d548['AwkhG'](_0x31c4d0,_0x5eaa15);},'qBVcQ':function(_0x4250ea,_0x34e58a){return _0x4250ea-_0x34e58a;},'QhKPO':'sakur'+_0x358929(0x654)+_0x358929(0x60b)+'v1','iNaOa':function(_0x231a49,_0x2ec9e9){var _0xd21559=_0x358929;return _0xc4d548[_0xd21559(0x513)](_0x231a49,_0x2ec9e9);},'zDsjV':_0xc4d548['GsFma'],'SjWUf':_0xc4d548[_0x358929(0x761)],'zUOKP':'true','GoDnv':_0xc4d548['JfGBO'],'RQzLc':function(_0x5c4646,_0x4341bd){return _0x5c4646/_0x4341bd;},'VTdzP':_0xc4d548[_0x358929(0x74e)],'fIlPK':_0x358929(0x215)+'n','pXxsb':_0xc4d548[_0x358929(0x20c)],'duBsZ':function(_0x1f8a9e,_0x4a341d){return _0x1f8a9e(_0x4a341d);},'yeujV':_0xc4d548['HHogW'],'Cbgim':_0xc4d548['uwOfy'],'BfFpz':_0xc4d548[_0x358929(0x73a)],'fIsRm':_0xc4d548[_0x358929(0x33c)],'mqWxJ':function(_0x29c048,_0x553c94){return _0x29c048===_0x553c94;},'hMFiU':_0xc4d548[_0x358929(0x459)],'LuKsg':_0x358929(0x3ea),'RPnVb':_0xc4d548['VcycR'],'rTcwy':function(_0xa70412,_0x28d2ef,_0x4b07a9,_0x5f19ef,_0x208210){return _0xa70412(_0x28d2ef,_0x4b07a9,_0x5f19ef,_0x208210);},'uaEAN':'i32','AdlLg':function(_0x2eafdc,_0x1a8b43,_0x15b4db){return _0xc4d548['Bfvwl'](_0x2eafdc,_0x1a8b43,_0x15b4db);},'Tfsao':function(_0x5a39de){return _0x5a39de();},'oYsaq':'SAFE','mmKzR':_0xc4d548[_0x358929(0x249)],'rftnV':_0x358929(0x579)+_0x358929(0x3f4)+'\x20','FdIhh':function(_0x231410,_0x547e3b){return _0x231410+_0x547e3b;},'fuucg':function(_0x232c36,_0x4e9b1a){var _0xe0b6d9=_0x358929;return _0xc4d548[_0xe0b6d9(0x4d4)](_0x232c36,_0x4e9b1a);},'vMFgK':_0x358929(0x24e)+'vemen'+'t\x20','yHmGP':_0xc4d548['ItAeB'],'JAIIw':function(_0x2bc443){return _0x2bc443();},'RlzsC':function(_0x418669,_0x1196cb){var _0x551b93=_0x358929;return _0xc4d548[_0x551b93(0x611)](_0x418669,_0x1196cb);},'oQXwJ':_0x358929(0x754)+'desc','xyhAw':_0x358929(0x660)+'me\x20','WWTxq':_0x358929(0x205)+_0x358929(0x2ba),'LNEXh':_0xc4d548['ULYJL'],'lWasJ':function(_0x33a92d){return _0xc4d548['cxzDg'](_0x33a92d);},'Kdwbg':function(_0x3226af,_0x3c28ac){return _0x3226af===_0x3c28ac;},'UEyzB':_0x358929(0x722)+'t','vDFzd':_0xc4d548[_0x358929(0x53f)],'FOYVR':'vtpqs','xgpeA':_0x358929(0x2c5)+_0x358929(0x281)+_0x358929(0x65e)+'Initi'+'ateTa'+_0x358929(0x709)+_0x358929(0x757)+_0x358929(0x46a)+_0x358929(0x742)+_0x358929(0x4b6)+_0x358929(0x3fd)+_0x358929(0x6f0)+'othin'+_0x358929(0x5f6)+'\x20hurt'+_0x358929(0x1d5)+'ill\x20y'+_0x358929(0x560),'zQAoh':function(_0xa9229c,_0x24ac38,_0x11fa81,_0x200b41,_0x6539da,_0x18f3e0){return _0xa9229c(_0x24ac38,_0x11fa81,_0x200b41,_0x6539da,_0x18f3e0);},'jTXdZ':_0x358929(0x23f)+'\x20Reco'+'ilMot'+_0x358929(0x5b1)+_0x358929(0x288)+_0x358929(0x456)+'\x20reco'+_0x358929(0x617)+_0x358929(0x5c2)+_0x358929(0x4cc)+_0x358929(0x63a)+'ance.','HrWUX':_0x358929(0x485)+_0x358929(0x454)+_0x358929(0x35e)+'nd\x20ma'+_0x358929(0x4e4)+'ccura'+_0x358929(0x6c4)+'\x20your'+'\x20weap'+'on\x20ev'+_0x358929(0x22e)+'00ms.','vJLrg':_0xc4d548[_0x358929(0x1cd)],'DHkoH':function(_0x3210e3,_0x936db4,_0x241229,_0x47d58c){return _0x3210e3(_0x936db4,_0x241229,_0x47d58c);},'iIQWc':function(_0xa8a66,_0x24d6d2,_0x5a8bc3,_0x500dfe,_0x4f4763,_0x4cb8e8){return _0xa8a66(_0x24d6d2,_0x5a8bc3,_0x500dfe,_0x4f4763,_0x4cb8e8);},'XJLnj':'Refil'+_0x358929(0x1f4)+_0x358929(0x6ef)+'pon\x27s'+_0x358929(0x227)+'ed\x20am'+_0x358929(0x344)+_0x358929(0x567)+_0x358929(0x237)+_0x358929(0x37d)+'s.','NoJZK':'Scale'+'s\x20all'+'\x20four'+'\x20Move'+_0x358929(0x1c1)+'speed'+_0x358929(0x3ab)+'ts\x20pl'+_0x358929(0x6f9)+_0x358929(0x55c)+'ation'+'.','PQbkQ':function(_0x2e23fe,_0x380b9b,_0x4577ee,_0x24e52f,_0x43fe96,_0x3993a5){return _0x2e23fe(_0x380b9b,_0x4577ee,_0x24e52f,_0x43fe96,_0x3993a5);},'xQEdp':'Jump\x20'+_0x358929(0x657)+'vity','hBtQc':_0xc4d548['JoccD'],'ZSzai':'Jump\x20'+'%','hLnNP':function(_0x4b7f27,_0x19c146,_0x245e13,_0x42e989,_0x4a1c1b,_0x1025a5){return _0xc4d548['mPQOT'](_0x4b7f27,_0x19c146,_0x245e13,_0x42e989,_0x4a1c1b,_0x1025a5);},'AOPYK':function(_0x90884,_0x198287,_0x1b470a,_0xf5183d){return _0x90884(_0x198287,_0x1b470a,_0xf5183d);},'SSSSQ':_0xc4d548[_0x358929(0x61e)],'yxRhC':function(_0x38cef1,_0x29946c,_0x10a134,_0x11da8c,_0xff30f6,_0x5e8f38){return _0xc4d548['iCTIX'](_0x38cef1,_0x29946c,_0x10a134,_0x11da8c,_0xff30f6,_0x5e8f38);},'kNPDO':function(_0x4213fc,_0x246d50,_0x2d23fe,_0x1af5b8,_0x4214a7,_0x16484b){return _0x4213fc(_0x246d50,_0x2d23fe,_0x1af5b8,_0x4214a7,_0x16484b);},'tWDBA':_0xc4d548[_0x358929(0x208)],'iLfGT':_0x358929(0x444)+_0x358929(0x687),'ftHyt':function(_0x1bac70,_0x510301,_0x43b469,_0x2c4a0f,_0x5266c3,_0x4109e1){return _0x1bac70(_0x510301,_0x43b469,_0x2c4a0f,_0x5266c3,_0x4109e1);},'GBNGZ':_0x358929(0x26c)+'hair','nsTHn':_0xc4d548[_0x358929(0x703)],'GZfKH':function(_0xff3221,_0x2e6242,_0x25013c){var _0x40c1ac=_0x358929;return _0xc4d548[_0x40c1ac(0x5d7)](_0xff3221,_0x2e6242,_0x25013c);},'QSNxt':_0x358929(0x461)+_0x358929(0x238)+'r','bocdZ':'No\x20en'+_0x358929(0x6af)+_0x358929(0x238)+_0x358929(0x36a)+'is\x20bu'+_0x358929(0x6bf)+'as\x20no'+_0x358929(0x4ed)+'isibl'+'ePlay'+_0x358929(0x40a)+'o\x20pig'+'gybac'+_0x358929(0x372),'KjizV':function(_0x403bff,_0x4b0374){return _0x403bff===_0x4b0374;},'QkFAh':_0xc4d548['TmGbF'],'BQFRa':_0x358929(0x5c4)+_0x358929(0x2ce)+_0x358929(0x527)+_0x358929(0x6f2)+'er\x20sl'+_0x358929(0x1c8),'gwZAG':_0x358929(0x564)+_0x358929(0x279)+'\x20relo'+'ad.','OWeqF':'god\x20('+_0x358929(0x2c1)+'th.In'+_0x358929(0x54d)+'eTake'+_0x358929(0x6e2)+'h)','XbhpE':function(_0x6cb24a,_0x5c36e3,_0x107947){return _0x6cb24a(_0x5c36e3,_0x107947);},'atvBm':_0xc4d548['TFRaj'],'Yyzam':function(_0x2ff96c,_0x30ec3f,_0x1c087d){return _0x2ff96c(_0x30ec3f,_0x1c087d);},'Elpyd':_0xc4d548[_0x358929(0x232)],'HYPXW':_0x358929(0x3bf)+_0x358929(0x228)+_0x358929(0x5c1)+_0x358929(0x28c)+_0x358929(0x257)+'is','YHfno':function(_0x10ba20,_0x5f1c73,_0x11f51e){return _0x10ba20(_0x5f1c73,_0x11f51e);},'SHgUY':_0x358929(0x64b)+'les\x20C'+'odeSt'+_0x358929(0x49d)+'etect'+'ors\x20a'+_0x358929(0x24c)+'rtup\x20'+'via\x20S'+'topDe'+'tecti'+_0x358929(0x494)+'\x20Keep'+_0x358929(0x6ea),'EmEqP':function(_0x3f8f2a,_0x5e8c49,_0x546d65,_0x1ca313,_0x4ca125,_0x4382e0){return _0xc4d548['iCTIX'](_0x3f8f2a,_0x5e8c49,_0x546d65,_0x1ca313,_0x4ca125,_0x4382e0);},'wiYIH':_0x358929(0x343)+'r','pyvdw':function(_0x596df7,_0x926fa7){return _0x596df7(_0x926fa7);},'Uhwmu':_0xc4d548[_0x358929(0x502)],'YCuXL':'Sakur'+'a\x20Kou'+_0x358929(0x2eb),'LRVuL':function(_0x31cc32,_0x15c7c4){return _0x31cc32===_0x15c7c4;},'UTUdU':_0xc4d548[_0x358929(0x217)],'GjklD':function(_0x14ba21,_0x46fce2){var _0x32a8f1=_0x358929;return _0xc4d548[_0x32a8f1(0x4d4)](_0x14ba21,_0x46fce2);},'aznoI':function(_0x4d171f,_0x111916){return _0xc4d548['kWysD'](_0x4d171f,_0x111916);},'jZnzk':function(_0x48affd,_0x4858ba){return _0xc4d548['fhWkr'](_0x48affd,_0x4858ba);},'mpYvt':_0xc4d548[_0x358929(0x435)],'xlQcI':_0x358929(0x584)+'ng','ySkkb':_0x358929(0x579)+_0x358929(0x2e4)+_0x358929(0x77d)+'overl'+_0x358929(0x756)+_0x358929(0x68b)+_0x358929(0x5b9)+_0x358929(0x277)+_0x358929(0x547)+_0x358929(0x738)+'ipt)','hKWHl':function(_0x463c41){var _0x22211d=_0x358929;return _0xc4d548[_0x22211d(0x51a)](_0x463c41);}};_0xd1423e[_0x358929(0x734)+'ck']&&('aAYcw'==='aAYcw'?setInterval(()=>{var _0x36fe22=_0x358929;try{if(_0x2b5753['JmjqK'](_0x2b5753['wHDEC'],_0x36fe22(0x336))){if(_0x52ed86)_0x445c31[_0x36fe22(0x364)](_0x2b5753[_0x36fe22(0x473)],_0x2b5753[_0x36fe22(0x453)],[0x49f+-0x4af+0x100]);}else for(var _0x5b3dc4 of[_0x36fe22(0x25f)+'io_30'+_0x36fe22(0x5eb)+'-pare'+'nt',_0x36fe22(0x25f)+'io_72'+_0x36fe22(0x4f7)+'paren'+'t',_0x2b5753['GfrIF'],_0x2b5753['tOlBx']]){if(_0x2b5753[_0x36fe22(0x38e)](_0x36fe22(0x259),_0x2b5753[_0x36fe22(0x6fd)])){var _0x5e357a=document[_0x36fe22(0x5f8)+'ement'+_0x36fe22(0x678)](_0x5b3dc4);if(_0x5e357a&&_0x5b3dc4===_0x36fe22(0x695)+'creen'+_0x36fe22(0x333)+'s'){if(_0x2b5753[_0x36fe22(0x3b4)]!==_0x36fe22(0x652)){if(_0x2dd952[_0x42710e]['id']&&_0x2b5753[_0x36fe22(0x214)](_0x417aed[_0x26a140]['id'][_0x36fe22(0x451)+'Of'](_0x2b5753[_0x36fe22(0x3c4)]),0x5*0x60e+0x4fb+-0x2341))_0x5e9b37[_0x11c34c][_0x36fe22(0x468)]['displ'+'ay']='none';}else{var _0x4c29d1=_0x5e357a['child'+_0x36fe22(0x520)];for(var _0x4300ac=0x112*0x9+-0x2325*0x1+0x1983;_0x4300ac<_0x4c29d1[_0x36fe22(0x3d8)+'h'];_0x4300ac++){if(_0x36fe22(0x4ab)!=='kuMNq')_0x4f4956=_0x5abd96[_0x36fe22(0x2d7)](_0x5b1750*(0x1*-0x130a+-0x1*0x9e+0x1790)/_0x2b5753['BSLWd'](_0x5c7366,_0x1b8bda)),_0x37e312=0x1aaf+0xce9+0x8*-0x4f3,_0x553e41=_0x556d35;else{if(_0x4c29d1[_0x4300ac]['id']&&_0x2b5753[_0x36fe22(0x214)](_0x4c29d1[_0x4300ac]['id'][_0x36fe22(0x451)+'Of'](_0x2b5753[_0x36fe22(0x3c4)]),0x956+0x167*0x10+-0x1fc6))_0x4c29d1[_0x4300ac]['style'][_0x36fe22(0x66a)+'ay']='none';}}}}else{if(_0x5e357a)_0x5e357a['style']['displ'+'ay']='none';}}else _0x2b5753['Kdcqc'](_0x5be167,!_0x2a215f);}}catch(_0x678d47){}},0x119*-0xf+-0xc3a+0x2481):(_0x55b9d1[_0x358929(0x21e)+'ode']=_0x239945,_0x2b5753[_0x358929(0x301)](_0x3a8097),_0x58de9d[_0x358929(0x3b6)+'d']()));var _0x1ed265=document['creat'+_0x358929(0x69b)+_0x358929(0x332)](_0x358929(0x648)+'s');_0x1ed265[_0x358929(0x468)][_0x358929(0x491)+'xt']='posit'+_0x358929(0x1f7)+_0x358929(0x4a1)+'inset'+_0x358929(0x2c3)+_0x358929(0x48a)+_0x358929(0x2db)+_0x358929(0x2cc)+'t:100'+_0x358929(0x405)+'index'+_0x358929(0x589)+'48364'+_0x358929(0x4af)+_0x358929(0x5ec)+'event'+_0x358929(0x6be)+'e';var _0x50fd61=_0x1ed265[_0x358929(0x41e)+'ntext']('2d');function _0x4aabe9(){var _0xa73cb3=_0x358929;try{var _0x3377ef=document[_0xa73cb3(0x695)+_0xa73cb3(0x455)+'Eleme'+'nt'],_0x4f0bc8=_0x3377ef&&_0x2b5753[_0xa73cb3(0x38e)](_0x3377ef[_0xa73cb3(0x568)+'me'],_0x2b5753['wHUFu'])?_0x3377ef:document[_0xa73cb3(0x24f)]||document['docum'+_0xa73cb3(0x66b)+_0xa73cb3(0x349)];if(_0x2b5753[_0xa73cb3(0x69a)](_0x1ed265['paren'+_0xa73cb3(0x392)],_0x4f0bc8))_0x4f0bc8['appen'+_0xa73cb3(0x42c)+'d'](_0x1ed265);}catch(_0x17c0d9){try{document[_0xa73cb3(0x24f)][_0xa73cb3(0x68a)+_0xa73cb3(0x42c)+'d'](_0x1ed265);}catch(_0x51dcae){}}}var _0x5de583={'w':0x0,'h':0x0,'dpr':0x0};function _0x30de68(){var _0x10b278=_0x358929,_0x303236=window['devic'+_0x10b278(0x402)+'lRati'+'o']||-0x105+0x18d4+0x1*-0x17ce,_0x271ff4=window[_0x10b278(0x46b)+_0x10b278(0x643)],_0x4de7c5=window['inner'+_0x10b278(0x1d0)+'t'];if(_0x2b5753[_0x10b278(0x214)](_0x271ff4,_0x5de583['w'])&&_0x4de7c5===_0x5de583['h']&&_0x2b5753['daVzS'](_0x303236,_0x5de583['dpr']))return;_0x5de583['w']=_0x271ff4,_0x5de583['h']=_0x4de7c5,_0x5de583['dpr']=_0x303236,_0x1ed265['width']=Math[_0x10b278(0x2d7)](_0x271ff4*_0x303236),_0x1ed265[_0x10b278(0x2cc)+'t']=Math[_0x10b278(0x2d7)](_0x4de7c5*_0x303236),_0x50fd61[_0x10b278(0x65c)+'ansfo'+'rm'](_0x303236,0xc9a+-0x2247+0x1*0x15ad,-0x13*0xc5+-0x215e+-0x41*-0xbd,_0x303236,0x14ba+-0xc7e+-0x83c,-0xcd+-0x1ed7+0x36*0x96);}var _0x32a587=0x1c5b+-0x1724*-0x1+-0x337f,_0x476e17=performance[_0x358929(0x6ab)](),_0x3a8b11=-0x17ff+-0xcdb+0x24da;function _0x493473(_0x54d259){var _0x3e3e25=_0x358929,_0x547cf9=Number(_0xd1423e[_0x3e3e25(0x356)+'le'])||-0x1*-0x25e2+-0x188a+0xd57*-0x1,_0x4c1290=(-0x239b*0x1+0x20c5+0x2f8)*_0x547cf9,_0x269e63=_0x2b5753['SzbKc'](0x23c5+0x1*0x698+-0x2a59,_0x547cf9),_0x15c3d2=_0x2b5753[_0x3e3e25(0x4a7)](_0x4c1290*(-0x15b9*-0x1+0x1*0x1e13+0x1b*-0x1eb),_0x2b5753[_0x3e3e25(0x730)](_0x269e63,-0xd*0x18e+-0xe07*-0x1+-0x1*-0x631)),_0x4b3932=_0x2b5753['gDQAt'](_0x4c1290,0xad*-0x25+-0x47a+0x1d7e)+_0x2b5753[_0x3e3e25(0x73c)](_0x269e63,0x273+-0x15d*-0xb+0x90*-0x1f),_0x106efd=_0xd1423e['ksPos'],_0x39a919=_0x106efd==='br'?_0x54d259['right']-(-0x272*0x8+-0x7b7+0x1b57)-_0x15c3d2:_0x54d259[_0x3e3e25(0x67e)]+(0xfb9+-0x1ef0+-0x1*-0xf47),_0x46bae0=_0x106efd==='ml'?_0x54d259[_0x3e3e25(0x2e8)]+_0x54d259[_0x3e3e25(0x2cc)+'t']/(0x6*-0x636+0x34*0x80+0x2*0x5a3)-_0x4b3932/(-0xfd6+-0x17d1+0x27a9):_0x2b5753['BSLWd'](_0x54d259['botto'+'m']-_0x4b3932,_0x106efd==='bl'?-0x577*0x2+-0x16ef+-0x5*-0x6d9:-0xd22+0x3a5+-0x1*-0xa13),_0x537eff=(_0x16ee1e,_0x2239ac,_0x412622,_0x4e2702,_0x365007,_0x34351e,_0x589b15)=>{var _0x5cc515=_0x3e3e25,_0x3fd407=_0x1c060e['has'](_0x2239ac);_0x50fd61['save'](),_0x50fd61[_0x5cc515(0x3d9)+_0x5cc515(0x27e)]();if(_0x50fd61[_0x5cc515(0x2d7)+_0x5cc515(0x490)])_0x50fd61['round'+_0x5cc515(0x490)](_0x412622,_0x4e2702,_0x365007,_0x34351e,(-0xfe5*-0x1+-0x2283+0x12a5)*_0x547cf9);else _0x50fd61['rect'](_0x412622,_0x4e2702,_0x365007,_0x34351e);_0x50fd61['fillS'+'tyle']=_0x3fd407?_0x5cc515(0x72d)+_0x5cc515(0x1eb)+'07,15'+_0x5cc515(0x5f3)+'5)':_0x2b5753['LnpeN'],_0x50fd61[_0x5cc515(0x5d3)](),_0x50fd61[_0x5cc515(0x631)+'idth']=0x79*0x3b+-0x23e2+0x800,_0x50fd61[_0x5cc515(0x4b9)+_0x5cc515(0x623)+'e']=_0x3fd407?_0x513a86:_0x2b5753[_0x5cc515(0x47e)],_0x50fd61[_0x5cc515(0x4b9)+'e'](),_0x3fd407&&(_0x50fd61[_0x5cc515(0x592)+'wColo'+'r']=_0x744ca8,_0x50fd61[_0x5cc515(0x592)+_0x5cc515(0x22a)]=0x253b+0x14ab*0x1+-0x39d8,_0x50fd61['fill'](),_0x50fd61['shado'+'wBlur']=-0x1*0xe9d+0x247b+0x26e*-0x9),_0x50fd61[_0x5cc515(0x38a)+'tyle']=_0x3fd407?_0x2b5753['pmlUx']:'rgba('+_0x5cc515(0x56a)+'35,24'+'0,0.8'+')',_0x50fd61[_0x5cc515(0x5fd)+'lign']='cente'+'r',_0x50fd61['textB'+_0x5cc515(0x482)+'ne']=_0x2b5753[_0x5cc515(0x53a)],_0x50fd61['font']=_0x2b5753[_0x5cc515(0x515)](_0x2b5753['JptWb'],Math[_0x5cc515(0x2d7)]((-0x10f6+0x1457+-0x355)*_0x547cf9))+_0x2b5753[_0x5cc515(0x4d1)],_0x50fd61[_0x5cc515(0x207)+_0x5cc515(0x302)](_0x16ee1e,_0x412622+_0x365007/(-0x2*-0x46d+-0x2*-0x4ea+-0x12ac),_0x4e2702+_0x34351e/(-0x1*0xdb+-0x102a+-0x5ad*-0x3)-(_0x589b15?_0x2b5753[_0x5cc515(0x730)](-0x26aa+0x18cb+0xde4,_0x547cf9):0x4*0x1d5+0xdcd*-0x1+0x679)),_0x589b15&&(_0x2b5753[_0x5cc515(0x214)](_0x2b5753['bTMzU'],'OJune')?(_0x50fd61['font']='600\x20'+Math[_0x5cc515(0x2d7)](_0x2b5753[_0x5cc515(0x6a0)](0x6*-0x84+0x3f6+-0x1*0xd5,_0x547cf9))+_0x2b5753['fcOUL'],_0x50fd61['fillS'+_0x5cc515(0x751)]=_0x3fd407?_0x5cc515(0x44b):_0x5cc515(0x72d)+'255,2'+'35,24'+'0,0.5'+'5)',_0x50fd61[_0x5cc515(0x207)+_0x5cc515(0x302)](_0x589b15,_0x412622+_0x2b5753['RqmcB'](_0x365007,-0x1018+0x4d6+-0x19c*-0x7),_0x2b5753[_0x5cc515(0x515)](_0x4e2702,_0x2b5753[_0x5cc515(0x2bd)](_0x34351e,-0x5*0x539+0x31*0xc5+-0xb96))+_0x2b5753['gDQAt'](0xe4d+-0x1e00+0xfbb,_0x547cf9))):(_0x59f91d[_0x5cc515(0x487)+_0x5cc515(0x419)]=_0xbf0dc5,_0x3daa84())),_0x50fd61['resto'+'re']();};_0x2b5753[_0x3e3e25(0x216)](_0x537eff,'W',_0x2b5753[_0x3e3e25(0x4e7)],_0x2b5753[_0x3e3e25(0x659)](_0x2b5753[_0x3e3e25(0x4a3)](_0x39a919,_0x4c1290),_0x269e63),_0x46bae0,_0x4c1290,_0x4c1290),_0x537eff('A',_0x2b5753[_0x3e3e25(0x6d0)],_0x39a919,_0x2b5753[_0x3e3e25(0x4a3)](_0x46bae0,_0x4c1290)+_0x269e63,_0x4c1290,_0x4c1290),_0x2b5753[_0x3e3e25(0x216)](_0x537eff,'S',_0x2b5753['iLgcF'],_0x2b5753[_0x3e3e25(0x4a7)](_0x39a919,_0x4c1290)+_0x269e63,_0x2b5753['VwFzC'](_0x46bae0,_0x4c1290)+_0x269e63,_0x4c1290,_0x4c1290),_0x537eff('D','KeyD',_0x39a919+(_0x4c1290+_0x269e63)*(-0x1616+0x1*0x26b9+-0x10a1),_0x2b5753['VwFzC'](_0x2b5753[_0x3e3e25(0x629)](_0x46bae0,_0x4c1290),_0x269e63),_0x4c1290,_0x4c1290);var _0x1ec1a4=_0x2b5753[_0x3e3e25(0x29f)](_0x15c3d2-_0x269e63,0x21b8+0xe29+-0x2b*0x11d),_0x13b744=_0x2b5753['VwFzC'](_0x46bae0,(_0x4c1290+_0x269e63)*(0x6ca*0x3+-0x2*0x16d+0x1b*-0xa6));_0x537eff(_0x3e3e25(0x2a9),_0x2b5753[_0x3e3e25(0x265)],_0x39a919,_0x13b744,_0x1ec1a4,_0x4c1290,_0xd1423e['ksCps']?_0x2b5753[_0x3e3e25(0x4a3)](_0x2781e2(0x8*-0xe3+-0x1d9a+0x24b3),_0x2b5753[_0x3e3e25(0x717)]):''),_0x537eff(_0x2b5753['VzyjX'],_0x2b5753[_0x3e3e25(0x5a9)],_0x2b5753[_0x3e3e25(0x77a)](_0x39a919+_0x1ec1a4,_0x269e63),_0x13b744,_0x1ec1a4,_0x4c1290,_0xd1423e[_0x3e3e25(0x1d6)]?_0x2781e2(-0x261b+0x5b6+0x3d*0x88)+_0x3e3e25(0x55b):''),_0x537eff('',_0x2b5753[_0x3e3e25(0x38b)],_0x39a919,_0x2b5753['TVOoJ'](_0x13b744+_0x4c1290,_0x269e63),_0x15c3d2,_0x2b5753[_0x3e3e25(0x47d)](_0x4c1290,-0x9*-0x1f7+-0x13*-0x150+-0x1*0x2a9f+0.45));}function _0x32f0b5(_0x552d6d){var _0x37e7b6=_0x358929,_0x49d0ce=_0x552d6d[_0x37e7b6(0x346)]/(-0x30b+-0x16fe+0x1a0b),_0x159846=_0x2b5753[_0x37e7b6(0x2bd)](_0x552d6d[_0x37e7b6(0x2cc)+'t'],0x1*0x148f+-0xc*0x1f3+-0x1*-0x2d7),_0x39516c=_0x2b5753[_0x37e7b6(0x3b5)](Number,_0xd1423e[_0x37e7b6(0x432)+'e'])||0x5*0x3fa+-0x51*-0x64+-0x3385,_0x1aada1=/^#[0-9a-f]{6}$/i[_0x37e7b6(0x2d3)](_0xd1423e['chCol'+'or'])?_0xd1423e['chCol'+'or']:_0x2b5753['nBfsG'];_0x50fd61[_0x37e7b6(0x5cb)](),_0x50fd61['strok'+_0x37e7b6(0x623)+'e']=_0x1aada1,_0x50fd61['fillS'+'tyle']=_0x1aada1,_0x50fd61['lineW'+'idth']=Math['max'](-0xe18*-0x1+0x719*-0x4+0xe4d+0.5,_0x2b5753[_0x37e7b6(0x43a)](-0x3*0xa55+-0x1*-0x189d+0x332*0x2,_0x39516c)),_0x50fd61['shado'+_0x37e7b6(0x3b8)+'r']=_0x1aada1,_0x50fd61['shado'+_0x37e7b6(0x22a)]=-0x20d0+-0x189b*-0x1+0x83b;var _0x5b66fc=(-0x1d3c+-0x3b+0x1d7d)*_0x39516c,_0x228801=_0x2b5753[_0x37e7b6(0x73c)](0x51a+-0x8*-0x30b+-0xf*0x1f6,_0x39516c);_0x50fd61[_0x37e7b6(0x3d9)+_0x37e7b6(0x27e)](),_0x50fd61[_0x37e7b6(0x1be)+'o'](_0x49d0ce-_0x5b66fc-_0x228801,_0x159846),_0x50fd61['lineT'+'o'](_0x2b5753['BSLWd'](_0x49d0ce,_0x5b66fc),_0x159846),_0x50fd61['moveT'+'o'](_0x2b5753['VUEWs'](_0x49d0ce,_0x5b66fc),_0x159846),_0x50fd61[_0x37e7b6(0x233)+'o'](_0x49d0ce+_0x5b66fc+_0x228801,_0x159846),_0x50fd61['moveT'+'o'](_0x49d0ce,_0x2b5753[_0x37e7b6(0x590)](_0x2b5753[_0x37e7b6(0x512)](_0x159846,_0x5b66fc),_0x228801)),_0x50fd61[_0x37e7b6(0x233)+'o'](_0x49d0ce,_0x159846-_0x5b66fc),_0x50fd61['moveT'+'o'](_0x49d0ce,_0x2b5753['vybIz'](_0x159846,_0x5b66fc)),_0x50fd61['lineT'+'o'](_0x49d0ce,_0x2b5753['sCLdx'](_0x2b5753[_0x37e7b6(0x691)](_0x159846,_0x5b66fc),_0x228801)),_0x50fd61[_0x37e7b6(0x4b9)+'e'](),_0x50fd61['begin'+'Path'](),_0x50fd61['arc'](_0x49d0ce,_0x159846,(0x4fa*0x3+0x1*0x24a6+-0x5bb*0x9+0.6000000000000001)*_0x39516c,-0x1*0xd4d+0x2ba+0x1*0xa93,Math['PI']*(0x1*-0x15e1+-0x1de6*0x1+0x33c9*0x1)),_0x50fd61['fill'](),_0x50fd61[_0x37e7b6(0x203)+'re']();}function _0x580bdf(_0x5551bc){var _0x2472ac=_0x358929,_0xe5d84e={'mQFkR':function(_0xf94b03,_0x110401){return _0x2b5753['fTMEc'](_0xf94b03,_0x110401);},'PkWut':_0x2b5753[_0x2472ac(0x645)]};_0x50fd61['save'](),_0x50fd61[_0x2472ac(0x3af)]='600\x201'+'2px\x20u'+_0x2472ac(0x5c0)+_0x2472ac(0x5a6)+_0x2472ac(0x366)+_0x2472ac(0x5a6)+'e',_0x50fd61['textA'+'lign']=_0x2b5753[_0x2472ac(0x639)],_0x50fd61[_0x2472ac(0x457)+_0x2472ac(0x482)+'ne']=_0x2b5753[_0x2472ac(0x2b9)];var _0x4b0af2=0x1e77+0x10ef+-0x2f3a,_0x50ddb1=0x2*-0xf95+-0x15e3+0x45*0xc5,_0x25bb28=(_0x4b4184,_0x3d389c)=>{var _0x46e77d=_0x2472ac;_0x50fd61[_0x46e77d(0x38a)+_0x46e77d(0x751)]=_0xe5d84e['mQFkR'](_0x3d389c,_0xe5d84e[_0x46e77d(0x56d)]),_0x50fd61[_0x46e77d(0x207)+'ext'](_0x4b4184,_0x50ddb1,_0x4b0af2),_0x4b0af2+=0x1852+0x3*0xcc4+0x2*-0x1f47;};_0x25bb28(_0x2472ac(0x61d)+'A\x20KOU'+_0x2472ac(0x328)+'1',_0x2b5753[_0x2472ac(0x651)]);if(_0xd1423e[_0x2472ac(0x779)])_0x25bb28(_0x3a8b11+_0x2b5753[_0x2472ac(0x696)]);if(!_0x4f4736[_0x2472ac(0x5a8)+'oaded'])_0x25bb28(_0x2b5753['YQaeG'],_0x2472ac(0x72d)+'255,1'+_0x2472ac(0x6d6)+'0,0.6'+')');_0x50fd61[_0x2472ac(0x203)+'re']();}function _0x5d670f(){var _0x53fa02=_0x358929;if(_0x2b5753[_0x53fa02(0x69a)](_0x53fa02(0x699),_0x2b5753[_0x53fa02(0x3de)]))_0x30da00[_0x53fa02(0x4c7)+'e'](_0x260d9b[_0x53fa02(0x45a)]);else{var _0x37d927=_0x2b5753['NuHTo'][_0x53fa02(0x5dc)]('|'),_0x33edbd=-0x262*-0x2+-0x49*-0x6c+-0x11c8*0x2;while(!![]){switch(_0x37d927[_0x33edbd++]){case'0':if(_0xd1423e[_0x53fa02(0x487)+'hair'])_0x2b5753[_0x53fa02(0x3b5)](_0x32f0b5,_0x7f7cb4);continue;case'1':_0x580bdf(_0x7f7cb4);continue;case'2':_0x50fd61[_0x53fa02(0x71b)+'Rect'](-0x1cd8+0x65+-0x1*-0x1c73,-0x25c1+-0x1e13+-0x43d4*-0x1,_0x5de583['w'],_0x5de583['h']);continue;case'3':_0x2b5753[_0x53fa02(0x301)](_0x4aabe9);continue;case'4':_0x32a587++;continue;case'5':_0x2b5753['URNaO'](_0x2b5753['qBVcQ'](_0x5f4c61,_0x476e17),-0x17d2*-0x1+-0x174+-0x146a)&&(_0x3a8b11=Math[_0x53fa02(0x2d7)](_0x32a587*(0x8f9*0x1+0x1e3b+-0x234c)/(_0x5f4c61-_0x476e17)),_0x32a587=0x2376+0x884+-0x2bfa,_0x476e17=_0x5f4c61);continue;case'6':if(_0xd1423e[_0x53fa02(0x335)+'rokes'])_0x493473(_0x7f7cb4);continue;case'7':_0x30de68();continue;case'8':var _0x7f7cb4={'left':0x0,'top':0x0,'right':_0x5de583['w'],'bottom':_0x5de583['h'],'width':_0x5de583['w'],'height':_0x5de583['h']};continue;case'9':var _0x5f4c61=performance[_0x53fa02(0x6ab)]();continue;case'10':_0x2b5753['Kdcqc'](requestAnimationFrame,_0x5d670f);continue;}break;}}}var _0xf73a=document['creat'+_0x358929(0x69b)+'ent'](_0xc4d548['GsFma']);_0xf73a['id']=_0xc4d548[_0x358929(0x661)],_0xf73a['style'][_0x358929(0x491)+'xt']=_0xc4d548[_0x358929(0x649)];var _0x4b0a96=_0xf73a[_0x358929(0x354)+'hShad'+'ow']({'mode':'open'});(document['body']||document[_0x358929(0x2e1)+_0x358929(0x66b)+'ement'])[_0x358929(0x68a)+_0x358929(0x42c)+'d'](_0xf73a);var _0x4c6b56=![],_0x49f607={};try{_0x358929(0x681)!==_0x358929(0x6c5)?_0x49f607=JSON[_0x358929(0x755)](localStorage[_0x358929(0x736)+'em'](_0x358929(0x4e3)+'a.kou'+_0x358929(0x60b)+'v1')||'{}'):_0x18b4b1['warn'](_0xc4d548[_0x358929(0x388)],_0x21b2df&&_0xfddf6f['messa'+'ge']);}catch(_0x18c2e8){}function _0x4118d4(){var _0x5806af=_0x358929;if(_0x5806af(0x68c)===_0x5806af(0x578))try{_0x133a25[_0x5806af(0x6ff)+'em'](_0x2b5753[_0x5806af(0x43f)],_0x2a706c[_0x5806af(0x4c3)+_0x5806af(0x6ce)](_0x1ed1a3));}catch(_0x24078e){}else try{localStorage[_0x5806af(0x6ff)+'em'](_0xc4d548[_0x5806af(0x2d5)],JSON['strin'+'gify'](_0x49f607));}catch(_0x281a47){}}function _0x34e3e9(_0x2a877b,_0x2287b7){var _0x9b494e=_0x358929,_0x3f4ec1=document['creat'+_0x9b494e(0x69b)+_0x9b494e(0x332)](_0xc4d548[_0x9b494e(0x692)]);return _0x3f4ec1['type']=_0xc4d548[_0x9b494e(0x692)],_0x3f4ec1[_0x9b494e(0x300)+_0x9b494e(0x38c)]=_0x9b494e(0x499)+_0x9b494e(0x1c2),_0x3f4ec1['setAt'+_0x9b494e(0x613)+'te'](_0xc4d548['giagM'],_0xc4d548[_0x9b494e(0x2d9)]),_0x3f4ec1['setAt'+'tribu'+'te'](_0xc4d548[_0x9b494e(0x73a)],String(!!_0x2a877b)),_0x3f4ec1['oncli'+'ck']=_0x3804d7=>{var _0x2ce2f0=_0x9b494e,_0xf6468c={'kyrYK':function(_0x3effee,_0x291dbd){return _0x3effee(_0x291dbd);},'lyRMm':'--p','ZBiPr':function(_0x412929,_0x5a6185){var _0x249a81=_0x4d8f;return _0x2b5753[_0x249a81(0x74c)](_0x412929,_0x5a6185);},'PCmAm':function(_0x29c944,_0xb85856){var _0x28eac0=_0x4d8f;return _0x2b5753[_0x28eac0(0x29f)](_0x29c944,_0xb85856);},'yYRIo':_0x2b5753[_0x2ce2f0(0x21b)],'lJBLD':'sk-ra'+_0x2ce2f0(0x254),'wUgbY':_0x2ce2f0(0x412)+_0x2ce2f0(0x260),'rijFF':function(_0x981dd0){return _0x981dd0();}};if(_0x2b5753[_0x2ce2f0(0x214)]('wXJEa',_0x2b5753[_0x2ce2f0(0x3f7)])){_0x3804d7['stopP'+_0x2ce2f0(0x62a)+_0x2ce2f0(0x3bc)]();var _0x38a145=_0x3f4ec1[_0x2ce2f0(0x777)+_0x2ce2f0(0x613)+'te']('aria-'+_0x2ce2f0(0x6f4)+'ed')!==_0x2b5753[_0x2ce2f0(0x33e)];_0x3f4ec1[_0x2ce2f0(0x70d)+_0x2ce2f0(0x613)+'te']('aria-'+'check'+'ed',String(_0x38a145)),_0x2287b7(_0x38a145);}else{var _0x48d049=_0x144274[_0x2ce2f0(0x37f)+_0x2ce2f0(0x69b)+_0x2ce2f0(0x332)](_0xf6468c[_0x2ce2f0(0x658)]);_0x48d049['class'+'Name']=_0xf6468c['lJBLD'];var _0x5d5823=_0x49cf3e[_0x2ce2f0(0x37f)+'eElem'+'ent']('input');_0x5d5823[_0x2ce2f0(0x593)]='range',_0x5d5823['class'+'Name']=_0xf6468c[_0x2ce2f0(0x6cd)],_0x5d5823[_0x2ce2f0(0x653)]=_0x10da37,_0x5d5823[_0x2ce2f0(0x3ff)]=_0x37cd88,_0x5d5823[_0x2ce2f0(0x3a9)]=_0x264914,_0x5d5823['value']=_0x3c13c1;var _0xa4fa0b=_0x14b108[_0x2ce2f0(0x37f)+_0x2ce2f0(0x69b)+_0x2ce2f0(0x332)](_0x2ce2f0(0x741));_0xa4fa0b['class'+_0x2ce2f0(0x38c)]=_0x2ce2f0(0x381)+'l',_0xa4fa0b[_0x2ce2f0(0x5b3)+_0x2ce2f0(0x386)+'t']=_0x420877(_0x51799d);var _0x1d7b65=()=>{var _0x2f2e3e=_0x2ce2f0;_0xa4fa0b[_0x2f2e3e(0x5b3)+_0x2f2e3e(0x386)+'t']=_0xf6468c[_0x2f2e3e(0x569)](_0x458c7a,_0x5d5823[_0x2f2e3e(0x348)]),_0x48d049['style']['setPr'+'opert'+'y'](_0xf6468c['lyRMm'],_0xf6468c[_0x2f2e3e(0x428)](_0xf6468c[_0x2f2e3e(0x5ae)](_0x5d5823['value']-_0x2f6f88,_0x20878f-_0x217564),0x2*0x836+0x13*0x141+-0x27db)+'%');};return _0x5d5823[_0x2ce2f0(0x235)+'ut']=()=>{var _0x1c4f01=_0x2ce2f0;_0x1d7b65(),_0xf6468c[_0x1c4f01(0x569)](_0x526943,_0x36658e(_0x5d5823[_0x1c4f01(0x348)]));},_0xf6468c['rijFF'](_0x1d7b65),_0x48d049[_0x2ce2f0(0x68a)+'d'](_0x5d5823,_0xa4fa0b),_0x48d049;}},_0x3f4ec1;}function _0xc62131(_0x2f32fa,_0x39518d,_0x5ed04e,_0x1f8784,_0x2a8e93){var _0x4fe11e=_0x358929,_0x27506e=document[_0x4fe11e(0x37f)+'eElem'+'ent']('div');_0x27506e[_0x4fe11e(0x300)+_0x4fe11e(0x38c)]=_0xc4d548[_0x4fe11e(0x2a1)];var _0x12f56f=document[_0x4fe11e(0x37f)+_0x4fe11e(0x69b)+'ent'](_0x4fe11e(0x433));_0x12f56f['type']='range',_0x12f56f[_0x4fe11e(0x300)+_0x4fe11e(0x38c)]=_0x4fe11e(0x412)+'ider',_0x12f56f[_0x4fe11e(0x653)]=_0x39518d,_0x12f56f['max']=_0x5ed04e,_0x12f56f[_0x4fe11e(0x3a9)]=_0x1f8784,_0x12f56f['value']=_0x2f32fa;var _0x5adb30=document[_0x4fe11e(0x37f)+_0x4fe11e(0x69b)+_0x4fe11e(0x332)]('span');_0x5adb30['class'+'Name']=_0x4fe11e(0x381)+'l',_0x5adb30[_0x4fe11e(0x5b3)+_0x4fe11e(0x386)+'t']=_0xc4d548['RJbbW'](String,_0x2f32fa);var _0x2c839e=()=>{var _0x4f9050=_0x4fe11e;_0x5adb30[_0x4f9050(0x5b3)+'onten'+'t']=_0x2b5753[_0x4f9050(0x3b5)](String,_0x12f56f['value']),_0x27506e[_0x4f9050(0x468)][_0x4f9050(0x54f)+'opert'+'y'](_0x2b5753['GoDnv'],_0x2b5753[_0x4f9050(0x3f1)](_0x12f56f['value']-_0x39518d,_0x5ed04e-_0x39518d)*(0xd1e+-0x1*0xabc+-0x1fe)+'%');};return _0x12f56f['oninp'+'ut']=()=>{var _0x44a6d5=_0x4fe11e;_0x2c839e(),_0x2a8e93(Number(_0x12f56f[_0x44a6d5(0x348)]));},_0xc4d548[_0x4fe11e(0x51a)](_0x2c839e),_0x27506e[_0x4fe11e(0x68a)+'d'](_0x12f56f,_0x5adb30),_0x27506e;}function _0x2904a4(_0x4f480d,_0x4ffc31){var _0x19736a=_0x358929,_0xfdeebd=_0xc4d548['CgmSZ']['split']('|'),_0x4ae05b=0x8*0xc7+0x673+-0xcab;while(!![]){switch(_0xfdeebd[_0x4ae05b++]){case'0':_0x42cd29[_0x19736a(0x300)+'Name']=_0x19736a(0x604)+'lor';continue;case'1':var _0x42cd29=document[_0x19736a(0x37f)+_0x19736a(0x69b)+_0x19736a(0x332)](_0x19736a(0x433));continue;case'2':_0x42cd29['value']=/^#[0-9a-f]{6}$/i['test'](_0x4f480d)?_0x4f480d:_0x19736a(0x50b)+'9d';continue;case'3':_0x42cd29['type']=_0x19736a(0x401);continue;case'4':return _0x42cd29;case'5':_0x42cd29[_0x19736a(0x235)+'ut']=()=>_0x4ffc31(_0x42cd29['value']);continue;}break;}}function _0x5b9582(_0x1b8527,_0x12b798,_0x344256){var _0x5a1c94=_0x358929,_0x53100f=document[_0x5a1c94(0x37f)+_0x5a1c94(0x69b)+_0x5a1c94(0x332)](_0x5a1c94(0x731)+'t');_0x53100f['class'+'Name']='sk-fi'+_0x5a1c94(0x40e);for(var [_0x5e91d1,_0x541008]of _0x12b798){if(_0x2b5753[_0x5a1c94(0x69a)]('kcCZb','ZEFyr')){var _0x7db00e=document[_0x5a1c94(0x37f)+_0x5a1c94(0x69b)+_0x5a1c94(0x332)](_0x5a1c94(0x246)+'n');_0x7db00e['value']=_0x5e91d1,_0x7db00e[_0x5a1c94(0x5b3)+_0x5a1c94(0x386)+'t']=_0x541008,_0x53100f['appen'+'dChil'+'d'](_0x7db00e);}else _0x33a25a=_0x2921a5&&_0x2b81e3[_0x5a1c94(0x6a5)]?_0x5a4659[_0x5a1c94(0x6a5)]():0xba1*0x1+-0xd8a+0x3*0xa3;}return _0x53100f['value']=_0x1b8527,_0x53100f[_0x5a1c94(0x5a2)+_0x5a1c94(0x254)]=()=>_0x344256(_0x53100f['value']),_0x53100f;}function _0x12e30e(_0x3d1b44,_0x111961){var _0x30fc30=_0x358929,_0x3b80d6=document['creat'+_0x30fc30(0x69b)+'ent'](_0x2b5753[_0x30fc30(0x669)]);return _0x3b80d6['type']=_0x30fc30(0x215)+'n',_0x3b80d6[_0x30fc30(0x300)+_0x30fc30(0x38c)]=_0x2b5753[_0x30fc30(0x481)],_0x3b80d6[_0x30fc30(0x5b3)+_0x30fc30(0x386)+'t']=_0x3d1b44,_0x3b80d6['oncli'+'ck']=_0x44345f=>{var _0x282ba0=_0x30fc30;'aVxks'!==_0x2b5753[_0x282ba0(0x498)]?(_0x44345f['stopP'+_0x282ba0(0x62a)+'ation'](),_0x111961()):_0x12ac7e['body'][_0x282ba0(0x68a)+_0x282ba0(0x42c)+'d'](_0x2fcf77);},_0x3b80d6;}function _0x50b540(_0x166c7f,_0x1bf49b,_0x3a6190){var _0x2ae6e9=_0x358929,_0x581718={'OBTlP':function(_0x4327ac,_0x3b3c05){return _0x4327ac!==_0x3b3c05;},'rVyMa':function(_0x4a3c7a,_0x3d8691){return _0x2b5753['duBsZ'](_0x4a3c7a,_0x3d8691);},'xLPfD':_0x2ae6e9(0x215)+'n','PkfKZ':_0x2b5753[_0x2ae6e9(0x4d9)],'biCBQ':_0x2b5753[_0x2ae6e9(0x303)],'dNDgh':_0x2b5753[_0x2ae6e9(0x4e8)]},_0x5a1af1=document['creat'+_0x2ae6e9(0x69b)+_0x2ae6e9(0x332)]('div');_0x5a1af1[_0x2ae6e9(0x300)+_0x2ae6e9(0x38c)]='sk-ct'+'l';var _0xcf72f3=document[_0x2ae6e9(0x37f)+_0x2ae6e9(0x69b)+_0x2ae6e9(0x332)](_0x2b5753[_0x2ae6e9(0x4eb)]);_0xcf72f3['class'+'Name']=_0x2ae6e9(0x4c1)+_0x2ae6e9(0x42e),_0xcf72f3[_0x2ae6e9(0x5b3)+'onten'+'t']=_0x166c7f;if(_0x1bf49b){if(_0x2b5753[_0x2ae6e9(0x417)](_0x2b5753['hMFiU'],'NNwOG')){var _0x194b3a=_0x271dab[_0x2ae6e9(0x37f)+_0x2ae6e9(0x69b)+_0x2ae6e9(0x332)](_0x581718[_0x2ae6e9(0x5d0)]);return _0x194b3a[_0x2ae6e9(0x593)]=_0x581718[_0x2ae6e9(0x5d0)],_0x194b3a['class'+_0x2ae6e9(0x38c)]=_0x581718[_0x2ae6e9(0x1e5)],_0x194b3a['setAt'+_0x2ae6e9(0x613)+'te'](_0x2ae6e9(0x384),_0x581718[_0x2ae6e9(0x4ad)]),_0x194b3a['setAt'+_0x2ae6e9(0x613)+'te'](_0x581718[_0x2ae6e9(0x3ae)],_0x253e2f(!!_0x42e1bb)),_0x194b3a[_0x2ae6e9(0x26f)+'ck']=_0x34d19d=>{var _0x271c93=_0x2ae6e9;_0x34d19d['stopP'+'ropag'+_0x271c93(0x3bc)]();var _0x38a3a0=_0x581718['OBTlP'](_0x194b3a['getAt'+_0x271c93(0x613)+'te'](_0x271c93(0x3a3)+_0x271c93(0x6f4)+'ed'),_0x271c93(0x506));_0x194b3a[_0x271c93(0x70d)+'tribu'+'te']('aria-'+_0x271c93(0x6f4)+'ed',_0x2221e9(_0x38a3a0)),_0x581718['rVyMa'](_0x439f8f,_0x38a3a0);},_0x194b3a;}else{var _0xb4253b=document[_0x2ae6e9(0x37f)+'eElem'+'ent'](_0x2b5753['LuKsg']);_0xb4253b[_0x2ae6e9(0x300)+_0x2ae6e9(0x38c)]=_0x2ae6e9(0x6a6)+'nt',_0xb4253b['textC'+_0x2ae6e9(0x386)+'t']=_0x1bf49b,_0xcf72f3[_0x2ae6e9(0x68a)+_0x2ae6e9(0x42c)+'d'](_0xb4253b);}}return _0x5a1af1[_0x2ae6e9(0x68a)+'d'](_0xcf72f3,_0x3a6190),_0x5a1af1;}function _0x2254b1(_0x2dcca8,_0x4a7f2c){var _0x488e98=_0x358929,_0x5dafa3=document[_0x488e98(0x37f)+_0x488e98(0x69b)+'ent'](_0x488e98(0x41f));return _0x5dafa3[_0x488e98(0x300)+_0x488e98(0x38c)]=_0x488e98(0x5b7)+'te'+(_0x4a7f2c?_0x2b5753[_0x488e98(0x684)]:''),_0x5dafa3[_0x488e98(0x5b3)+_0x488e98(0x386)+'t']=_0x2dcca8,_0x5dafa3;}function _0x374ba6(_0x1941dc,_0x577c7a,_0x22088c,_0x56f6c2,_0x12fa3e){var _0x26a7db=_0x358929,_0xfe9fe7={'zCYDJ':'middl'+'e','bKJZd':function(_0x4f0748,_0x18c889){return _0x4f0748+_0x18c889;},'QncpX':_0xc4d548[_0x26a7db(0x25b)],'mAXpi':function(_0x41133c,_0x1489d0){return _0x41133c*_0x1489d0;},'GquDs':_0xc4d548[_0x26a7db(0x2fc)],'JRLuB':function(_0x30ad04,_0x3870c4){return _0x30ad04+_0x3870c4;},'nDYhA':_0xc4d548['xibgC'],'bIMcA':_0x26a7db(0x440)+'-sans'+'-seri'+_0x26a7db(0x266)+_0x26a7db(0x2bf)+_0x26a7db(0x52f)+_0x26a7db(0x469)+'if','iAMKg':_0xc4d548['atXhm'],'YnWYa':function(_0x4f31da,_0x14d53a){return _0xc4d548['lFdUv'](_0x4f31da,_0x14d53a);},'nuNCk':function(_0x18ec0f,_0x229716){return _0x18ec0f*_0x229716;}};if(_0xc4d548[_0x26a7db(0x770)]!==_0x26a7db(0x505)){var _0x4161a6=(_0x26a7db(0x374)+'5|9|1'+_0x26a7db(0x4f6)+_0x26a7db(0x3aa)+'14|11'+_0x26a7db(0x3d3)+_0x26a7db(0x2fa)+'|13|0')['split']('|'),_0x1b8c5c=0x22c5+0x404+-0x26c9;while(!![]){switch(_0x4161a6[_0x1b8c5c++]){case'0':_0x1a1930['resto'+'re']();continue;case'1':_0x3a78ec[_0x26a7db(0x457)+_0x26a7db(0x482)+'ne']=_0xfe9fe7[_0x26a7db(0x6c0)];continue;case'2':_0x22b59d[_0x26a7db(0x5fd)+_0x26a7db(0x34a)]='cente'+'r';continue;case'3':var _0x377319=_0x2f9b0d[_0x26a7db(0x294)](_0x40d6ef);continue;case'4':_0x307a54[_0x26a7db(0x5cb)]();continue;case'5':_0x2935a7['font']=_0xfe9fe7[_0x26a7db(0x1e7)](_0xfe9fe7['QncpX'],_0x19e965[_0x26a7db(0x2d7)](_0xfe9fe7[_0x26a7db(0x549)](0x1*-0x2503+-0x11*-0x1f3+0xfb*0x4,_0x59bfbf)))+('px\x20ui'+_0x26a7db(0x4f5)+_0x26a7db(0x60c)+_0x26a7db(0x266)+'tem-u'+_0x26a7db(0x52f)+_0x26a7db(0x469)+'if');continue;case'6':_0x168673['fillS'+'tyle']=_0x377319?_0xfe9fe7[_0x26a7db(0x32a)]:_0x26a7db(0x72d)+'255,2'+'35,24'+_0x26a7db(0x2f6)+')';continue;case'7':_0x5083b9['fill']();continue;case'8':_0x47466f['fillT'+_0x26a7db(0x302)](_0x42b2d7,_0xfe9fe7['JRLuB'](_0x5ee7ba,_0x335bc0/(0x50e*0x2+-0xd34+-0x2*-0x18d)),_0x19463d+_0x3eae37/(-0x4*-0x42d+0x1b42+-0x1d*0x184)-(_0x33d251?(0x1*0x194b+0x26b+-0x33*0x8b)*_0x3d328b:0x143*-0x7+0x3*-0x64f+0x1a2*0x11));continue;case'9':if(_0x39798c[_0x26a7db(0x2d7)+_0x26a7db(0x490)])_0xd2c715[_0x26a7db(0x2d7)+_0x26a7db(0x490)](_0x486e9,_0x5c2bde,_0x2b7bab,_0x59404d,(0x1*0x191+0x1*-0xe13+0xc89)*_0x22e047);else _0x115a1b[_0x26a7db(0x2f7)](_0x18a759,_0x4f9c66,_0x34314f,_0x259a17);continue;case'10':_0x158051['fillS'+_0x26a7db(0x751)]=_0x377319?'rgba('+_0x26a7db(0x1eb)+_0x26a7db(0x6b6)+'7,0.8'+'5)':_0xfe9fe7[_0x26a7db(0x342)];continue;case'11':_0x377319&&(_0x3d53e1[_0x26a7db(0x592)+_0x26a7db(0x3b8)+'r']=_0x311af6,_0x299d4d['shado'+_0x26a7db(0x22a)]=-0x13*0x1a7+0x6f*0x3+-0x1c6*-0x11,_0x54f9be[_0x26a7db(0x5d3)](),_0x1fea20[_0x26a7db(0x592)+_0x26a7db(0x22a)]=0x82*0x3+-0x1527+0x13a1);continue;case'12':_0xf51e['strok'+'eStyl'+'e']=_0x377319?_0x17312b:_0x26a7db(0x72d)+'255,1'+_0x26a7db(0x6b6)+'7,0.3'+'5)';continue;case'13':_0x587f91&&(_0x44a61f['font']=_0x26a7db(0x745)+_0x564ad5[_0x26a7db(0x2d7)](_0xfe9fe7[_0x26a7db(0x549)](0x1e2*-0xd+-0x178b+0x1807*0x2,_0x37876c))+_0xfe9fe7[_0x26a7db(0x241)],_0x29f4ed['fillS'+_0x26a7db(0x751)]=_0x377319?_0xfe9fe7[_0x26a7db(0x32a)]:_0xfe9fe7[_0x26a7db(0x39f)],_0x1cdf5d[_0x26a7db(0x207)+'ext'](_0x1d5468,_0x109998+_0x12562a/(-0xc7+0x1*-0x1e71+0x1f3a*0x1),_0xfe9fe7[_0x26a7db(0x1e7)](_0xfe9fe7[_0x26a7db(0x1e7)](_0x387b97,_0xfe9fe7[_0x26a7db(0x2bb)](_0x1f8e5f,-0x1*0x10f+0x1*0x468+0xab*-0x5)),_0xfe9fe7['nuNCk'](0x4e5*-0x7+-0x1568+-0x15*-0x2a7,_0x183508))));continue;case'14':_0x340a6d[_0x26a7db(0x4b9)+'e']();continue;case'15':_0x269d41['begin'+_0x26a7db(0x27e)]();continue;case'16':_0x3fd142[_0x26a7db(0x631)+'idth']=-0x1bc9*0x1+-0x1*-0x2383+-0x7b9;continue;}break;}}else{var _0x5c9715=document[_0x26a7db(0x37f)+_0x26a7db(0x69b)+_0x26a7db(0x332)](_0x26a7db(0x41f));_0x5c9715[_0x26a7db(0x300)+'Name']=_0x26a7db(0x244)+'rd'+(_0x22088c?'\x20on':'');var _0x1295ce=document['creat'+_0x26a7db(0x69b)+_0x26a7db(0x332)](_0x26a7db(0x41f));_0x1295ce['class'+'Name']=_0xc4d548[_0x26a7db(0x36b)];var _0x440bfd=document['creat'+_0x26a7db(0x69b)+_0x26a7db(0x332)]('div');_0x440bfd[_0x26a7db(0x300)+'Name']=_0x26a7db(0x244)+_0x26a7db(0x637)+'tle';var _0x508723=document[_0x26a7db(0x37f)+'eElem'+_0x26a7db(0x332)]('stron'+'g');_0x508723['textC'+_0x26a7db(0x386)+'t']=_0x1941dc,_0x440bfd[_0x26a7db(0x68a)+'dChil'+'d'](_0x508723);if(_0x56f6c2){if(_0xc4d548['YuokL'](_0xc4d548[_0x26a7db(0x556)],_0x26a7db(0x707))){var _0x57c634=_0x34e3e9(_0x22088c,_0x5958f2=>{var _0x23f6f0=_0x26a7db;_0x5c9715[_0x23f6f0(0x300)+_0x23f6f0(0x464)]['toggl'+'e']('on',_0x5958f2),_0x56f6c2(_0x5958f2);});_0x1295ce[_0x26a7db(0x68a)+'d'](_0x440bfd,_0x57c634);}else _0x2b5753[_0x26a7db(0x484)](_0x4ff86d,_0x38f079,0x1f*-0x49+0x1d41+-0x141e,_0x26a7db(0x28b),_0x155279),_0x1781fc(_0x3a28bc,-0x10*-0x167+-0x1918+0x2fc,_0x2b5753[_0x26a7db(0x75b)],_0x248c6b);}else _0x1295ce[_0x26a7db(0x68a)+'dChil'+'d'](_0x440bfd);_0x5c9715[_0x26a7db(0x68a)+'dChil'+'d'](_0x1295ce);if(_0x12fa3e&&_0x12fa3e['lengt'+'h']){var _0x37b154=document['creat'+_0x26a7db(0x69b)+_0x26a7db(0x332)](_0xc4d548[_0x26a7db(0x6da)]);_0x37b154['class'+'Name']=_0x26a7db(0x44e)+'ody';var _0x22d054=document[_0x26a7db(0x37f)+'eElem'+'ent'](_0x26a7db(0x41f));_0x22d054[_0x26a7db(0x300)+'Name']=_0x26a7db(0x313)+_0x26a7db(0x75a),_0x22d054['textC'+'onten'+'t']=_0x577c7a,_0x37b154[_0x26a7db(0x68a)+'dChil'+'d'](_0x22d054);for(var _0x5bfe69 of _0x12fa3e)_0x37b154[_0x26a7db(0x68a)+_0x26a7db(0x42c)+'d'](_0x5bfe69);_0x5c9715['appen'+_0x26a7db(0x42c)+'d'](_0x37b154);}return _0x5c9715;}}var _0x4fd78d=[{'id':_0xc4d548[_0x358929(0x437)],'label':'Comba'+'t'},{'id':'move','label':'Move'},{'id':_0xc4d548[_0x358929(0x544)],'label':_0x358929(0x264)+'l'},{'id':'misc','label':_0xc4d548['QPHZW']},{'id':_0xc4d548[_0x358929(0x2ca)],'label':_0x358929(0x4c6)+'y'}];function _0x5a9e63(){var _0x3d2d94=_0x358929,_0x3fdf03=_0x4f4736['safeM'+'ode']?_0xc4d548[_0x3d2d94(0x211)]:_0x4f4736['uwmk']?_0xc4d548[_0x3d2d94(0x6e3)](_0xc4d548[_0x3d2d94(0x5d2)](_0xc4d548['MbdTm']('UWMK\x20'+_0x3d2d94(0x3f4)+'\x20'+(_0x4f4736['hooks'+'Total']?_0xc4d548['kWysD'](_0xc4d548['kWysD'](_0xc4d548[_0x3d2d94(0x5d2)](_0x4f4736[_0x3d2d94(0x6d9)+'Ok'],'/'),_0x4f4736['hooks'+_0x3d2d94(0x642)]),_0x3d2d94(0x76b)+'s'):'0\x20hoo'+_0x3d2d94(0x595)+'med\x20('+_0x3d2d94(0x540)+_0x3d2d94(0x705)),_0xc4d548['IMyCt'])+(_0x4f4736['gameL'+_0x3d2d94(0x45f)]?_0xc4d548['IWiop']:_0x3d2d94(0x584)+'ng'),'\x20|\x20sh'+_0x3d2d94(0x6ca)+'\x20')+(_0x4f4736['shoot'+_0x3d2d94(0x588)]?_0xc4d548[_0x3d2d94(0x326)]:_0x3d2d94(0x1c6)),_0x3d2d94(0x24e)+_0x3d2d94(0x63d)+'t\x20')+(_0x4f4736['movem'+_0x3d2d94(0x504)]?_0xc4d548[_0x3d2d94(0x326)]:_0xc4d548[_0x3d2d94(0x6ec)]):_0x3d2d94(0x579)+_0x3d2d94(0x2e4)+_0x3d2d94(0x597)+_0x3d2d94(0x396)+_0x3d2d94(0x756)+_0x3d2d94(0x68b)+_0x3d2d94(0x5b9)+_0x3d2d94(0x277)+_0x3d2d94(0x547)+'erscr'+_0x3d2d94(0x3e3);if(_0x4f4736['lastE'+_0x3d2d94(0x765)])_0x3fdf03+=_0xc4d548[_0x3d2d94(0x77b)](_0x3d2d94(0x205)+_0x3d2d94(0x2ba),_0x4f4736[_0x3d2d94(0x3ca)+'rror']);return _0x374ba6(_0x3d2d94(0x5d6)+'s',_0x3fdf03,_0x4f4736[_0x3d2d94(0x670)],null,[_0x50b540('240\x20F'+'PS\x20un'+_0x3d2d94(0x2c8),'calls'+_0x3d2d94(0x76c)+_0x3d2d94(0x5f7)+'ne.Ap'+'plica'+'tion.'+_0x3d2d94(0x72b)+'arget'+_0x3d2d94(0x458)+'Rate',_0x12e30e(_0x3d2d94(0x4a5),()=>{var _0x3e54f9=_0x3d2d94;try{if(_0x1506b6)_0x1506b6[_0x3e54f9(0x364)](_0x3e54f9(0x54e)+'Engin'+_0x3e54f9(0x2a7)+'licat'+_0x3e54f9(0x687),'set_t'+_0x3e54f9(0x3cc)+_0x3e54f9(0x458)+_0x3e54f9(0x309),[-0xa99+0x7f5+0x394]);}catch(_0x36adf5){}}))]);}function _0x595515(_0xece6c5){var _0x3ba2c8=_0x358929,_0x2c441f={'bKnwR':function(_0x4881c4,_0x1ff55,_0x543e56){return _0x2b5753['AdlLg'](_0x4881c4,_0x1ff55,_0x543e56);},'pkLBE':_0x3ba2c8(0x44d),'qLuOZ':function(_0x1b5704,_0x302e26,_0x255873){return _0x1b5704(_0x302e26,_0x255873);},'ZRsEd':_0x3ba2c8(0x500),'Nuevp':function(_0x4b1836,_0x15058f){return _0x4b1836===_0x15058f;},'ceLef':_0x2b5753['oYsaq'],'yFofS':_0x2b5753['mmKzR'],'ddblj':function(_0x598d9f,_0x454ce3){return _0x598d9f+_0x454ce3;},'Tprmr':function(_0x147aec,_0xe0f345){return _0x2b5753['VUEWs'](_0x147aec,_0xe0f345);},'UPFGN':_0x2b5753['rftnV'],'iHXAM':function(_0x54e114,_0x47a536){return _0x2b5753['FdIhh'](_0x54e114,_0x47a536);},'nYIwh':function(_0x556d37,_0x354b15){return _0x556d37+_0x354b15;},'OGLBC':function(_0x2323c4,_0x475ee){return _0x2b5753['fuucg'](_0x2323c4,_0x475ee);},'tYPWe':'\x20hook'+'s','ebKle':'loade'+'d','APEQs':_0x3ba2c8(0x747)+_0x3ba2c8(0x6ca)+'\x20','uyXDn':_0x2b5753['vMFgK'],'fnNRc':_0x2b5753[_0x3ba2c8(0x4c5)],'kreiC':_0x3ba2c8(0x246)+'n','tyAsI':function(_0x3f75ae,_0x525664){return _0x3f75ae===_0x525664;},'saxFk':'fqMIN','BfpJI':function(_0x2ae0b8){var _0x7718c4=_0x3ba2c8;return _0x2b5753[_0x7718c4(0x53b)](_0x2ae0b8);},'MizJC':function(_0x1cc326){return _0x1cc326();},'airdT':function(_0x3cfd3a,_0x51d78a){var _0x561e00=_0x3ba2c8;return _0x2b5753[_0x561e00(0x3d6)](_0x3cfd3a,_0x51d78a);},'MnxTE':_0x3ba2c8(0x472),'PlSyv':_0x2b5753['oQXwJ'],'aGehZ':function(_0x33924c,_0xe888b7){return _0x33924c+_0xe888b7;},'rlgLx':function(_0x4f3831,_0x154f85){return _0x4f3831+_0x154f85;},'qKWJy':function(_0x2eee15,_0x29415c){return _0x2eee15+_0x29415c;},'rDYKL':_0x2b5753['xyhAw'],'fkpqB':_0x3ba2c8(0x584)+'ng','nYwPr':function(_0xdcc49a,_0x30d8bd){return _0xdcc49a+_0x30d8bd;},'mVPrV':_0x2b5753['WWTxq'],'VlGcf':'UWMK\x20'+'MISSI'+_0x3ba2c8(0x77d)+'overl'+_0x3ba2c8(0x756)+'ly\x20(r'+'einst'+_0x3ba2c8(0x277)+_0x3ba2c8(0x547)+_0x3ba2c8(0x738)+_0x3ba2c8(0x3e3),'xrSgD':function(_0xa47405,_0x5d7dbe){var _0x294c59=_0x3ba2c8;return _0x2b5753[_0x294c59(0x417)](_0xa47405,_0x5d7dbe);},'ZUKOu':_0x2b5753[_0x3ba2c8(0x713)],'wxDrX':function(_0x3de073){var _0xe80f5d=_0x3ba2c8;return _0x2b5753[_0xe80f5d(0x3cd)](_0x3de073);},'DAVMm':function(_0x42d0fe){return _0x42d0fe();},'SuThx':function(_0x23413e,_0x4b9ce6){return _0x23413e(_0x4b9ce6);},'mUwgs':function(_0x3409f9,_0x3fec53){var _0x19adbc=_0x3ba2c8;return _0x2b5753[_0x19adbc(0x516)](_0x3409f9,_0x3fec53);}};if(_0xece6c5===_0x2b5753[_0x3ba2c8(0x4ce)]){if(_0x2b5753['RtKeV'](_0x2b5753['vDFzd'],_0x2b5753['FOYVR']))return[_0x2b5753[_0x3ba2c8(0x301)](_0x5a9e63),_0x374ba6(_0x3ba2c8(0x50a)+_0x3ba2c8(0x39e),_0x2b5753[_0x3ba2c8(0x252)],_0xd1423e['god'],_0x468694=>{var _0x475760=_0x3ba2c8;_0xd1423e[_0x475760(0x44d)]=_0x468694,_0x4e9909(),_0x2c441f['bKnwR'](_0x2bfe1d,_0x2c441f['pkLBE'],_0x468694),_0x2c441f['qLuOZ'](_0x2bfe1d,_0x475760(0x400)+'e',_0x468694);},[]),_0x2b5753[_0x3ba2c8(0x5bc)](_0x374ba6,'No\x20Re'+_0x3ba2c8(0x71c),_0x2b5753['jTXdZ'],_0xd1423e[_0x3ba2c8(0x5bf)+_0x3ba2c8(0x621)],_0x439c28=>{var _0x154fbe=_0x3ba2c8;if('YyNUs'!==_0x154fbe(0x640))_0xd1423e['noRec'+_0x154fbe(0x621)]=_0x439c28,_0x4e9909(),_0x2b5753['AdlLg'](_0x2bfe1d,_0x154fbe(0x5bf)+_0x154fbe(0x621),_0x439c28);else{if(!_0xb7f4ca)return;var _0x51e521=_0x5248d5['child'+_0x154fbe(0x520)];for(var _0x4204aa=-0x25*0x2e+0x1194+0xaee*-0x1;_0x4204aa<_0x51e521[_0x154fbe(0x3d8)+'h'];_0x4204aa++){var _0x564d60=_0x51e521[_0x4204aa][_0x154fbe(0x5d8)+_0x154fbe(0x24b)+_0x154fbe(0x312)](_0x154fbe(0x754)+_0x154fbe(0x1fa));_0x564d60&&(_0x564d60['textC'+_0x154fbe(0x386)+'t'][_0x154fbe(0x451)+'Of'](_0x2c441f['ZRsEd'])===0x923+-0x394*-0x1+-0xcb7||_0x2c441f[_0x154fbe(0x39a)](_0x564d60[_0x154fbe(0x5b3)+_0x154fbe(0x386)+'t'][_0x154fbe(0x451)+'Of'](_0x2c441f[_0x154fbe(0x615)]),0x2198+0x9d0+0xc*-0x39e))&&(_0x564d60['textC'+_0x154fbe(0x386)+'t']=_0x26f28d[_0x154fbe(0x21e)+_0x154fbe(0x39e)]?_0x2c441f['yFofS']:_0x1383e9[_0x154fbe(0x670)]?_0x2c441f[_0x154fbe(0x70b)](_0x2c441f[_0x154fbe(0x6e0)](_0x2c441f['UPFGN'],_0x21e786[_0x154fbe(0x6d9)+_0x154fbe(0x642)]?_0x2c441f['iHXAM'](_0x2c441f['nYIwh'](_0x2c441f['OGLBC'](_0x3a171e['hooks'+'Ok'],'/'),_0x536faf['hooks'+'Total']),_0x2c441f[_0x154fbe(0x3c8)]):'0\x20hoo'+_0x154fbe(0x595)+_0x154fbe(0x650)+_0x154fbe(0x540)+_0x154fbe(0x705))+('\x20|\x20ga'+'me\x20')+(_0x4bd863['gameL'+_0x154fbe(0x45f)]?_0x2c441f['ebKle']:_0x154fbe(0x584)+'ng')+_0x2c441f[_0x154fbe(0x715)]+(_0x5cce75[_0x154fbe(0x416)+_0x154fbe(0x588)]?'held':'none')+_0x2c441f['uyXDn']+(_0x4c5d63['movem'+_0x154fbe(0x504)]?_0x2c441f[_0x154fbe(0x23c)]:'none'),_0x57dc26[_0x154fbe(0x3ca)+_0x154fbe(0x765)]?_0x2c441f['OGLBC'](_0x154fbe(0x205)+_0x154fbe(0x2ba),_0xa8e0c4['lastE'+'rror']):''):_0x154fbe(0x579)+_0x154fbe(0x2e4)+_0x154fbe(0x77d)+'overl'+_0x154fbe(0x756)+_0x154fbe(0x68b)+_0x154fbe(0x5b9)+_0x154fbe(0x277)+'he\x20us'+_0x154fbe(0x738)+_0x154fbe(0x3e3));}}},[]),_0x374ba6(_0x3ba2c8(0x63c)+'read',_0x2b5753[_0x3ba2c8(0x4da)],_0xd1423e[_0x3ba2c8(0x5ad)+_0x3ba2c8(0x23b)],_0x1e172f=>{var _0x2fdb14=_0x3ba2c8;_0xd1423e[_0x2fdb14(0x5ad)+_0x2fdb14(0x23b)]=_0x1e172f,_0x2b5753[_0x2fdb14(0x301)](_0x4e9909);},[]),_0x374ba6('Rapid'+'\x20Fire'+_0x3ba2c8(0x1bd)+']',_0x3ba2c8(0x633)+'s\x20Ove'+'rtide'+_0x3ba2c8(0x425)+_0x3ba2c8(0x57f)+_0x3ba2c8(0x421)+_0x3ba2c8(0x523)+_0x3ba2c8(0x5dd)+'erver'+_0x3ba2c8(0x31b)+_0x3ba2c8(0x537)+_0x3ba2c8(0x3e2)+'\x20shot'+'s.',_0xd1423e[_0x3ba2c8(0x5a4)+'Exp'],_0x34bad6=>{var _0x66672d=_0x3ba2c8;_0xd1423e[_0x66672d(0x5a4)+'Exp']=_0x34bad6,_0x2b5753[_0x66672d(0x301)](_0x4e9909);},[]),_0x374ba6('Damag'+_0x3ba2c8(0x65a)+'P]',_0x2b5753['vJLrg'],_0xd1423e[_0x3ba2c8(0x4c8)+_0x3ba2c8(0x3db)],_0x459183=>{var _0x3597c5=_0x3ba2c8,_0x1a3b3c={'fYjRP':_0x2c441f['kreiC']};if(_0x2c441f['tyAsI']('skvqy',_0x2c441f[_0x3597c5(0x58e)])){var _0x194c8d=_0x79fa5['creat'+_0x3597c5(0x69b)+_0x3597c5(0x332)](_0x1a3b3c[_0x3597c5(0x2d4)]);_0x194c8d[_0x3597c5(0x348)]=_0x3e251f,_0x194c8d[_0x3597c5(0x5b3)+_0x3597c5(0x386)+'t']=_0x389f3a,_0x53b649['appen'+_0x3597c5(0x42c)+'d'](_0x194c8d);}else _0xd1423e[_0x3597c5(0x4c8)+_0x3597c5(0x3db)]=_0x459183,_0x2c441f['BfpJI'](_0x4e9909);},[_0x2b5753[_0x3ba2c8(0x305)](_0x50b540,_0x3ba2c8(0x23e)+_0x3ba2c8(0x61a)+'ue',null,_0xc62131(_0xd1423e[_0x3ba2c8(0x4c8)+_0x3ba2c8(0x398)+'e'],0x2417*-0x1+0x28f*0x3+-0x3*-0x97c,-0x1*-0x123f+-0x1bb3+0xb68,0x136a+0x1d77+-0x30dc,_0x3d2114=>{var _0x374276=_0x3ba2c8;if(_0x374276(0x625)!=='jHmYm'){_0x552b52['push'](_0xb0dcb7[_0x374276(0x6ab)]());if(_0x15708a['lengt'+'h']>0x47d+-0x1ad3*0x1+0x167e)_0x26e3f5['shift']();}else _0xd1423e['damag'+_0x374276(0x398)+'e']=_0x3d2114,_0x4e9909();}))]),_0x2b5753['iIQWc'](_0x374ba6,_0x3ba2c8(0x450)+_0x3ba2c8(0x209)+_0x3ba2c8(0x350)+_0x3ba2c8(0x26e),_0x2b5753['XJLnj'],_0xd1423e[_0x3ba2c8(0x306)+_0x3ba2c8(0x6a3)],_0x342918=>{var _0x231048=_0x3ba2c8;_0xd1423e[_0x231048(0x306)+'moExp']=_0x342918,_0x2c441f[_0x231048(0x666)](_0x4e9909);},[_0x2254b1('If\x20re'+'loads'+_0x3ba2c8(0x363)+_0x3ba2c8(0x74d)+_0x3ba2c8(0x4ec)+_0x3ba2c8(0x470)+_0x3ba2c8(0x52c)+'nt\x20ha'+_0x3ba2c8(0x641)+'\x20else'+'where'+'.')])];else _0x3d964b[_0x3ba2c8(0x224)+'ed']=![];}if(_0xece6c5===_0x3ba2c8(0x561))return[_0x2b5753[_0x3ba2c8(0x62f)](_0x374ba6,_0x3ba2c8(0x36e),_0x2b5753[_0x3ba2c8(0x619)],_0xd1423e[_0x3ba2c8(0x448)+_0x3ba2c8(0x4fe)]!==0x25ce+0x263c+-0x4ba6,null,[_0x50b540('Speed'+'\x20%','100\x20='+_0x3ba2c8(0x577)+'ult',_0x2b5753['PQbkQ'](_0xc62131,_0xd1423e[_0x3ba2c8(0x448)+_0x3ba2c8(0x4fe)],-0x11ed+-0x11ad+0x23cc,0x1c6c+-0x1*0x1a74+0x66*-0x2,0x11*0xa1+0x93c+0x27d*-0x8,_0x4545a9=>{var _0x2e0b0c=_0x3ba2c8;_0x2c441f['airdT']('Xadob',_0x2c441f[_0x2e0b0c(0x6f8)])?_0x2c441f[_0x2e0b0c(0x2de)](_0x17b1fb[_0x2e0b0c(0x45a)],'Inser'+'t')&&(_0x4c3562['preve'+_0x2e0b0c(0x310)+_0x2e0b0c(0x1d9)](),_0x2c441f[_0x2e0b0c(0x1ea)](_0x2413f8)):(_0xd1423e[_0x2e0b0c(0x448)+_0x2e0b0c(0x4fe)]=_0x4545a9,_0x4e9909());}))]),_0x374ba6(_0x2b5753[_0x3ba2c8(0x1ca)],_0x2b5753['hBtQc'],_0x2b5753[_0x3ba2c8(0x38e)](_0xd1423e[_0x3ba2c8(0x2f0)+'ct'],-0xfe*-0x24+-0x28a+-0x2*0x1065)||_0xd1423e[_0x3ba2c8(0x31f)+'tyPct']!==-0x6f0+0x407*0x1+0x34d,null,[_0x2b5753['DHkoH'](_0x50b540,_0x2b5753[_0x3ba2c8(0x750)],null,_0x2b5753['hLnNP'](_0xc62131,_0xd1423e['jumpP'+'ct'],-0x2*-0x1306+-0x6c3+-0x1f17,0x2250+-0x1dc0+-0x364,0x1*0x2b8+-0x8b6+-0x201*-0x3,_0x2b0146=>{var _0xcc1d3b=_0x3ba2c8;if(_0x2c441f[_0xcc1d3b(0x3fe)]('AypNp',_0x2c441f[_0xcc1d3b(0x44f)]))_0xd1423e[_0xcc1d3b(0x2f0)+'ct']=_0x2b0146,_0x2c441f[_0xcc1d3b(0x210)](_0x4e9909);else{var _0x3c00c2=_0x5730d2[_0x2efa41][_0xcc1d3b(0x5d8)+_0xcc1d3b(0x24b)+'tor'](_0x2c441f[_0xcc1d3b(0x220)]);_0x3c00c2&&(_0x3c00c2[_0xcc1d3b(0x5b3)+_0xcc1d3b(0x386)+'t']['index'+'Of'](_0x2c441f['ZRsEd'])===-0x1855+0x1b20+-0x2cb||_0x3c00c2[_0xcc1d3b(0x5b3)+_0xcc1d3b(0x386)+'t'][_0xcc1d3b(0x451)+'Of'](_0xcc1d3b(0x538))===0x136c+0xa*-0x283+0xf3*0x6)&&(_0x3c00c2[_0xcc1d3b(0x5b3)+_0xcc1d3b(0x386)+'t']=_0x5bb43b[_0xcc1d3b(0x21e)+_0xcc1d3b(0x39e)]?_0x2c441f['yFofS']:_0x35ee75[_0xcc1d3b(0x670)]?_0x2c441f['Tprmr'](_0x2c441f['OGLBC'](_0x2c441f['aGehZ'](_0x2c441f['UPFGN']+(_0x49d807['hooks'+'Total']?_0x2c441f['iHXAM'](_0x2c441f[_0xcc1d3b(0x6c2)](_0x2c441f['qKWJy'](_0x4319c5[_0xcc1d3b(0x6d9)+'Ok'],'/'),_0x9a1a54['hooks'+_0xcc1d3b(0x642)]),_0xcc1d3b(0x76b)+'s'):'0\x20hoo'+_0xcc1d3b(0x595)+'med\x20('+_0xcc1d3b(0x540)+'ff)')+_0x2c441f[_0xcc1d3b(0x4fc)],_0x320b59['gameL'+_0xcc1d3b(0x45f)]?'loade'+'d':_0x2c441f['fkpqB'])+(_0xcc1d3b(0x747)+_0xcc1d3b(0x6ca)+'\x20'),_0x9d3dfe[_0xcc1d3b(0x416)+_0xcc1d3b(0x588)]?_0xcc1d3b(0x63b):'none')+_0x2c441f[_0xcc1d3b(0x700)],_0x1ff6d0[_0xcc1d3b(0x347)+'ents']?_0xcc1d3b(0x63b):'none')+(_0x3088c7[_0xcc1d3b(0x3ca)+'rror']?_0x2c441f[_0xcc1d3b(0x6f6)](_0x2c441f[_0xcc1d3b(0x2dd)],_0x545093[_0xcc1d3b(0x3ca)+_0xcc1d3b(0x765)]):''):_0x2c441f['VlGcf']);}})),_0x2b5753['AOPYK'](_0x50b540,_0x3ba2c8(0x50e)+'ty\x20%',_0x2b5753['SSSSQ'],_0xc62131(_0xd1423e[_0x3ba2c8(0x31f)+_0x3ba2c8(0x5e2)],-0x1d*0x65+-0x4eb+-0x1066*-0x1,0x95f+0x59*0x19+-0x1148,0x1c3c+0x2078*0x1+-0x41*0xef,_0x2fba3f=>{var _0x3e36ed=_0x3ba2c8;_0xd1423e[_0x3e36ed(0x31f)+_0x3e36ed(0x5e2)]=_0x2fba3f,_0x2b5753['Tfsao'](_0x4e9909);}))]),_0x2b5753[_0x3ba2c8(0x58d)](_0x374ba6,'Bunny'+'-hop','Zeroe'+_0x3ba2c8(0x355)+'ement'+_0x3ba2c8(0x6fc)+'JumpT'+'ime\x20s'+'o\x20the'+_0x3ba2c8(0x4fb)+_0x3ba2c8(0x522)+_0x3ba2c8(0x716)+'never'+_0x3ba2c8(0x74a)+'ies.',_0xd1423e['bhop'],_0x301973=>{var _0xe6e022=_0x3ba2c8;_0xd1423e[_0xe6e022(0x634)]=_0x301973,_0x4e9909();},[])];if(_0xece6c5===_0x3ba2c8(0x638)+'l')return[_0x2b5753[_0x3ba2c8(0x550)](_0x374ba6,_0x3ba2c8(0x2e3)+_0x3ba2c8(0x42d),_0x2b5753['tWDBA'],_0xd1423e['keyst'+_0x3ba2c8(0x42d)],_0x522533=>{var _0x5d3640=_0x3ba2c8;_0xd1423e[_0x5d3640(0x335)+_0x5d3640(0x42d)]=_0x522533,_0x4e9909();},[_0x50b540(_0x2b5753[_0x3ba2c8(0x60f)],null,_0x5b9582(_0xd1423e['ksPos'],[['bl',_0x3ba2c8(0x3f8)+_0x3ba2c8(0x55d)+'t'],['br','Botto'+_0x3ba2c8(0x1fc)+'ht'],['ml',_0x3ba2c8(0x728)+_0x3ba2c8(0x3d4)+'e']],_0x33885b=>{_0xd1423e['ksPos']=_0x33885b,_0x4e9909();})),_0x50b540('Size',null,_0x2b5753[_0x3ba2c8(0x49f)](_0xc62131,_0xd1423e['ksSca'+'le'],0x553*0x7+-0x1c7+-0x16*0x19d+0.6,0x23dc+0x1214+-0x35ef+0.6000000000000001,-0x1*0x12c3+-0x5b*0x1d+0x1*0x1d12+0.05,_0x30b643=>{_0xd1423e['ksSca'+'le']=_0x30b643,_0x4e9909();})),_0x50b540(_0x3ba2c8(0x287)+'eadou'+'t',null,_0x2b5753['AdlLg'](_0x34e3e9,_0xd1423e[_0x3ba2c8(0x1d6)],_0x4d0fb9=>{var _0xe89ac9=_0x3ba2c8;_0xd1423e[_0xe89ac9(0x1d6)]=_0x4d0fb9,_0x4e9909();}))]),_0x374ba6(_0x2b5753[_0x3ba2c8(0x664)],_0x3ba2c8(0x6ac)+'m\x20cen'+'ter\x20c'+'rossh'+_0x3ba2c8(0x6fe),_0xd1423e['cross'+'hair'],_0x3dfec5=>{var _0x2fd92a=_0x3ba2c8;_0xd1423e['cross'+_0x2fd92a(0x419)]=_0x3dfec5,_0x4e9909();},[_0x50b540('Size',null,_0xc62131(_0xd1423e[_0x3ba2c8(0x432)+'e'],0x1a9+0x16b4+-0x185d+0.5,0x50b*-0x1+-0x5*-0x3e5+-0x4*0x39b+0.5,0x1b79*-0x1+-0x1e55+-0x842*-0x7+0.1,_0xa6730=>{var _0x36c331=_0x3ba2c8;_0xd1423e[_0x36c331(0x432)+'e']=_0xa6730,_0x4e9909();})),_0x50b540(_0x2b5753['nsTHn'],null,_0x2b5753[_0x3ba2c8(0x3ac)](_0x2904a4,_0xd1423e['chCol'+'or'],_0x4041b0=>{_0xd1423e['chCol'+'or']=_0x4041b0,_0x4e9909();}))]),_0x2b5753[_0x3ba2c8(0x58d)](_0x374ba6,_0x3ba2c8(0x41d)+'ers','FPS\x20o'+_0x3ba2c8(0x646)+'y.',_0xd1423e[_0x3ba2c8(0x779)],null,[_0x50b540(_0x2b5753['QSNxt'],null,_0x34e3e9(_0xd1423e[_0x3ba2c8(0x779)],_0x103d14=>{var _0x1d2d52=_0x3ba2c8;_0xd1423e['fps']=_0x103d14,_0x2c441f[_0x1d2d52(0x66c)](_0x4e9909);})),_0x2254b1(_0x2b5753['bocdZ'])])];if(_0x2b5753[_0x3ba2c8(0x6a2)](_0xece6c5,_0x2b5753[_0x3ba2c8(0x426)]))return[_0x374ba6(_0x3ba2c8(0x359)+'ck',_0x2b5753['BQFRa'],_0xd1423e['adblo'+'ck'],_0x22fb26=>{var _0x2d9950=_0x3ba2c8;_0xd1423e[_0x2d9950(0x734)+'ck']=_0x22fb26,_0x4e9909();},[_0x2254b1('Takes'+'\x20effe'+_0x3ba2c8(0x3d7)+_0x3ba2c8(0x427)+_0x3ba2c8(0x483)+'en\x20to'+'ggled'+'.')])];return[_0x374ba6('Safe\x20'+_0x3ba2c8(0x6ed)+_0x3ba2c8(0x768)+_0x3ba2c8(0x76f)+_0x3ba2c8(0x74b),_0x3ba2c8(0x23f)+_0x3ba2c8(0x268)+_0x3ba2c8(0x1dd)+'rely\x20'+_0x3ba2c8(0x26d)+_0x3ba2c8(0x702)+_0x3ba2c8(0x6d9)+_0x3ba2c8(0x1f2)+_0x3ba2c8(0x66e)+'\x20if\x20m'+_0x3ba2c8(0x6b2)+'s\x20won'+_0x3ba2c8(0x35c)+_0x3ba2c8(0x415),_0xd1423e[_0x3ba2c8(0x21e)+'ode'],_0x3c58c=>{var _0x30721b=_0x3ba2c8;_0xd1423e['safeM'+_0x30721b(0x39e)]=_0x3c58c,_0x4e9909(),location['reloa'+'d']();},[_0x2254b1(_0x3ba2c8(0x564)+_0x3ba2c8(0x279)+'\x20relo'+_0x3ba2c8(0x727)+_0x3ba2c8(0x6f3)+_0x3ba2c8(0x242)+_0x3ba2c8(0x22b)+_0x3ba2c8(0x5b8)+'fe\x20mo'+_0x3ba2c8(0x529)+'he\x20fr'+_0x3ba2c8(0x6f1)+'is\x20ho'+_0x3ba2c8(0x714)+_0x3ba2c8(0x64e)+'\x20—\x20te'+_0x3ba2c8(0x66d)+_0x3ba2c8(0x48b)+_0x3ba2c8(0x6d9)+_0x3ba2c8(0x334)+_0x3ba2c8(0x3f6)+_0x3ba2c8(0x724))]),_0x374ba6('Hook\x20'+'risk\x20'+'switc'+_0x3ba2c8(0x4d2),_0x3ba2c8(0x2b1)+'one\x20i'+_0x3ba2c8(0x1db)+'ls\x20a\x20'+_0x3ba2c8(0x702)+_0x3ba2c8(0x1ed)+_0x3ba2c8(0x497)+_0x3ba2c8(0x409)+_0x3ba2c8(0x39b)+'hole\x20'+_0x3ba2c8(0x370)+'load.'+'\x20ALL\x20'+'OFF\x20b'+_0x3ba2c8(0x33f)+_0x3ba2c8(0x68e)+_0x3ba2c8(0x2ec)+_0x3ba2c8(0x29d)+'ure\x20t'+_0x3ba2c8(0x73b)+_0x3ba2c8(0x541)+'ot\x20ma'+_0x3ba2c8(0x26b)+'he\x20re'+_0x3ba2c8(0x471)+'thod\x20'+'throw'+_0x3ba2c8(0x324)+'nctio'+_0x3ba2c8(0x535)+_0x3ba2c8(0x2b4)+'e\x20mis'+'match'+_0x3ba2c8(0x67c)+'\x20mome'+_0x3ba2c8(0x47a)+'\x20is\x20c'+_0x3ba2c8(0x383)+_0x3ba2c8(0x2fd)+'n\x20the'+_0x3ba2c8(0x2f2)+'one\x20a'+_0x3ba2c8(0x5d1)+'ime,\x20'+_0x3ba2c8(0x3b6)+_0x3ba2c8(0x612)+_0x3ba2c8(0x373)+_0x3ba2c8(0x33b)+_0x3ba2c8(0x387)+_0x3ba2c8(0x3e6)+'\x20buil'+_0x3ba2c8(0x36d)+'kes\x20o'+'n.',_0xd1423e[_0x3ba2c8(0x733)+'od']||_0xd1423e[_0x3ba2c8(0x733)+'odDie']||_0xd1423e['hookN'+_0x3ba2c8(0x304)+'il']||_0xd1423e[_0x3ba2c8(0x6fb)+_0x3ba2c8(0x32d)+'e'],_0x466fff=>{var _0x47672a=_0x3ba2c8;_0xd1423e[_0x47672a(0x733)+'od']=_0x466fff,_0xd1423e['hookG'+_0x47672a(0x489)]=_0x466fff,_0xd1423e[_0x47672a(0x4dc)+'oReco'+'il']=_0x466fff,_0xd1423e[_0x47672a(0x6fb)+_0x47672a(0x32d)+'e']=_0x466fff,_0x4e9909(),location['reloa'+'d']();},[_0x2254b1(_0x2b5753[_0x3ba2c8(0x60a)]),_0x50b540(_0x2b5753[_0x3ba2c8(0x663)],null,_0x34e3e9(_0xd1423e['hookG'+'od'],_0x15109e=>{var _0xc81356=_0x3ba2c8;_0x2b5753['RtKeV'](_0xc81356(0x443),'NTyND')?(_0xd1423e[_0xc81356(0x733)+'od']=_0x15109e,_0x4e9909()):(_0x2dfd1d['preve'+_0xc81356(0x310)+'ault'](),_0x744efc());})),_0x50b540(_0x3ba2c8(0x400)+'e\x20(OH'+_0x3ba2c8(0x742)+_0x3ba2c8(0x4b6)+_0x3ba2c8(0x4f8),null,_0x2b5753[_0x3ba2c8(0x6e9)](_0x34e3e9,_0xd1423e[_0x3ba2c8(0x733)+'odDie'],_0x1990af=>{var _0x51162c=_0x3ba2c8;_0xd1423e[_0x51162c(0x733)+'odDie']=_0x1990af,_0x2b5753[_0x51162c(0x30d)](_0x4e9909);})),_0x2b5753['DHkoH'](_0x50b540,_0x2b5753[_0x3ba2c8(0x50c)],null,_0x2b5753[_0x3ba2c8(0x70a)](_0x34e3e9,_0xd1423e['hookN'+_0x3ba2c8(0x304)+'il'],_0xdd0123=>{var _0x464e4a=_0x3ba2c8;_0xd1423e[_0x464e4a(0x4dc)+_0x464e4a(0x304)+'il']=_0xdd0123,_0x2c441f[_0x464e4a(0x210)](_0x4e9909);})),_0x50b540(_0x2b5753['Elpyd'],_0x2b5753[_0x3ba2c8(0x44c)],_0x2b5753[_0x3ba2c8(0x1e4)](_0x34e3e9,_0xd1423e[_0x3ba2c8(0x6fb)+_0x3ba2c8(0x32d)+'e'],_0x4c3d4b=>{var _0x42cdef=_0x3ba2c8;_0xd1423e[_0x42cdef(0x6fb)+_0x42cdef(0x32d)+'e']=_0x4c3d4b,_0x4e9909();}))]),_0x374ba6('ACTk\x20'+'Kille'+'r',_0x2b5753['SHgUY'],_0xd1423e[_0x3ba2c8(0x6b4)+'ill'],_0x438d24=>{var _0x6d6cb2=_0x3ba2c8;_0xd1423e[_0x6d6cb2(0x6b4)+'ill']=_0x438d24,_0x4e9909();},[_0x2254b1(_0x3ba2c8(0x69e)+'amage'+'/rapi'+_0x3ba2c8(0x250)+'atly\x20'+_0x3ba2c8(0x744)+_0x3ba2c8(0x6cf)+'risk\x20'+_0x3ba2c8(0x753)+_0x3ba2c8(0x52a)+_0x3ba2c8(0x50d)+'on.',!![])]),_0x2b5753[_0x3ba2c8(0x340)](_0x374ba6,_0x2b5753['wiYIH'],'These'+'\x20leav'+_0x3ba2c8(0x67f)+_0x3ba2c8(0x75f)+'isibl'+'e\x20tra'+_0x3ba2c8(0x272),!![],null,[_0x50b540(_0x3ba2c8(0x4db)+_0x3ba2c8(0x5cc)+_0x3ba2c8(0x3b2)+'s',null,_0x2b5753[_0x3ba2c8(0x6e9)](_0x12e30e,_0x3ba2c8(0x4b1),()=>{var _0x571a2e=_0x3ba2c8;if(_0x2c441f[_0x571a2e(0x445)]('jzGNl',_0x571a2e(0x591)))return[_0x146abd('Adblo'+'ck',_0x571a2e(0x5c4)+_0x571a2e(0x2ce)+'-io_*'+_0x571a2e(0x6f2)+'er\x20sl'+_0x571a2e(0x1c8),_0x574fe5['adblo'+'ck'],_0x533e5c=>{_0x5814d2['adblo'+'ck']=_0x533e5c,_0x56ca19();},[_0x2c441f[_0x571a2e(0x307)](_0x10c6ca,_0x571a2e(0x2e7)+_0x571a2e(0x29a)+'ct\x20on'+'\x20relo'+'ad\x20wh'+'en\x20to'+'ggled'+'.')])];else _0xd1423e={..._0xab443f},_0x4e9909(),location[_0x571a2e(0x3b6)+'d']();}))])];}var _0xbd9dc2=null;function _0x2a1760(_0x268b5d){var _0x3b4446=_0x358929;if(_0xc4d548[_0x3b4446(0x570)](_0x3b4446(0x68f),_0xc4d548[_0x3b4446(0x566)])){_0x4c6b56=_0x268b5d;if(!_0xbd9dc2){var _0x57ad4e=(_0x3b4446(0x2fe)+'|3|1|'+'4')['split']('|'),_0x1c24cf=-0x183a+-0x18e*0x6+0x218e;while(!![]){switch(_0x57ad4e[_0x1c24cf++]){case'0':_0x1ae233[_0x3b4446(0x5b3)+'onten'+'t']=_0x2b44db;continue;case'1':_0x4b0a96['appen'+_0x3b4446(0x42c)+'d'](_0xbd9dc2);continue;case'2':_0x4b0a96[_0x3b4446(0x68a)+'dChil'+'d'](_0x1ae233);continue;case'3':_0xbd9dc2=_0xc4d548['dXOsk'](_0x4722d4);continue;case'4':requestAnimationFrame(()=>_0xbd9dc2[_0x3b4446(0x300)+_0x3b4446(0x464)][_0x3b4446(0x721)]('shown'));continue;case'5':var _0x1ae233=document['creat'+_0x3b4446(0x69b)+_0x3b4446(0x332)](_0x3b4446(0x468));continue;}break;}}_0xbd9dc2[_0x3b4446(0x300)+_0x3b4446(0x464)]['toggl'+'e'](_0xc4d548[_0x3b4446(0x729)],_0x268b5d);}else _0x23cd2d['add'](_0x518208[_0x3b4446(0x45a)]);}function _0xea9e77(){_0x2b5753['pyvdw'](_0x2a1760,!_0x4c6b56);}function _0x4722d4(){var _0x2caa73=_0x358929,_0x29db60=document[_0x2caa73(0x37f)+'eElem'+'ent'](_0xc4d548['GsFma']);_0x29db60['class'+'Name']=_0xc4d548['nsIkJ'];var _0x40bb3d=document['creat'+'eElem'+'ent']('nav');_0x40bb3d['class'+_0x2caa73(0x38c)]=_0xc4d548[_0x2caa73(0x5ab)];var _0x35bc5a=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+_0x2caa73(0x332)](_0xc4d548['GsFma']);_0x35bc5a[_0x2caa73(0x300)+_0x2caa73(0x38c)]=_0xc4d548[_0x2caa73(0x73e)],_0x35bc5a[_0x2caa73(0x46b)+'HTML']=_0x2caa73(0x43d)+'viewB'+'ox=\x220'+'\x200\x2024'+_0x2caa73(0x57c)+'class'+_0x2caa73(0x4bf)+_0x2caa73(0x769)+_0x2caa73(0x5fa)+_0x2caa73(0x1df)+_0x2caa73(0x1ee)+'12\x2021'+_0x2caa73(0x339)+_0x2caa73(0x31e)+_0x2caa73(0x600)+_0x2caa73(0x68d)+_0x2caa73(0x2df)+_0x2caa73(0x2a4)+_0x2caa73(0x422)+_0x2caa73(0x5a0)+_0x2caa73(0x55a)+'\x204\x204.'+'5c0\x203'+_0x2caa73(0x1f1)+_0x2caa73(0x6c1)+'.5z\x22\x20'+'fill='+'\x22none'+_0x2caa73(0x674)+'oke=\x22'+_0x2caa73(0x50b)+'9d\x22\x20s'+_0x2caa73(0x292)+_0x2caa73(0x236)+_0x2caa73(0x3c1)+_0x2caa73(0x5bb)+'ke-li'+'necap'+'=\x22rou'+'nd\x22\x20s'+'troke'+_0x2caa73(0x41a)+_0x2caa73(0x30e)+_0x2caa73(0x2d2)+'d\x22/><'+_0x2caa73(0x34d)+'e\x20cx='+'\x2212\x22\x20'+_0x2caa73(0x2cd)+'0\x22\x20r='+'\x221.5\x22'+_0x2caa73(0x6d8)+_0x2caa73(0x3a4)+_0x2caa73(0x408)+'/></s'+'vg>',_0x40bb3d[_0x2caa73(0x68a)+_0x2caa73(0x42c)+'d'](_0x35bc5a);var _0x526511=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+'ent'](_0x2caa73(0x41f));_0x526511[_0x2caa73(0x300)+_0x2caa73(0x38c)]='mn-ma'+'in';var _0x42109b=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+_0x2caa73(0x332)](_0xc4d548['SIoKL']);_0x42109b['class'+'Name']=_0xc4d548['gWGRy'];var _0x3aed31=document['creat'+_0x2caa73(0x69b)+_0x2caa73(0x332)](_0x2caa73(0x41f));_0x3aed31[_0x2caa73(0x300)+_0x2caa73(0x38c)]=_0xc4d548['nNHRX'];var _0x281f83=document['creat'+'eElem'+'ent']('h2');_0x281f83[_0x2caa73(0x300)+_0x2caa73(0x38c)]=_0x2caa73(0x585),_0x281f83[_0x2caa73(0x5b3)+_0x2caa73(0x386)+'t']='Sakur'+'a\x20Kou'+'r';var _0x2a5a6d=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+'ent'](_0x2caa73(0x3ea));_0x2a5a6d['class'+_0x2caa73(0x38c)]='mn-su'+'b',_0x2a5a6d['textC'+_0x2caa73(0x386)+'t']=_0x2caa73(0x582)+'trike'+'.io\x20m'+_0x2caa73(0x782),_0x3aed31[_0x2caa73(0x68a)+'d'](_0x281f83,_0x2a5a6d);var _0x162b86=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+'ent'](_0xc4d548[_0x2caa73(0x692)]);_0x162b86[_0x2caa73(0x593)]='butto'+'n',_0x162b86['class'+'Name']='mn-cl'+'ose',_0x162b86[_0x2caa73(0x25c)]=_0x2caa73(0x34f),_0x162b86['inner'+_0x2caa73(0x503)]=_0xc4d548[_0x2caa73(0x319)],_0x162b86['oncli'+'ck']=()=>_0x2a1760(![]),_0x42109b[_0x2caa73(0x68a)+'d'](_0x3aed31,_0x162b86);var _0x20f414=document[_0x2caa73(0x37f)+_0x2caa73(0x69b)+'ent'](_0xc4d548['GsFma']);_0x20f414[_0x2caa73(0x300)+_0x2caa73(0x38c)]=_0x2caa73(0x1de)+'ls',_0x526511['appen'+'d'](_0x42109b,_0x20f414),_0x29db60[_0x2caa73(0x68a)+'d'](_0x40bb3d,_0x526511);var _0x2f3412=new Map();for(var _0x2f6ec1 of _0x4fd78d){var _0x550354=(_0x2caa73(0x2a0)+'|0|7|'+_0x2caa73(0x6bc))[_0x2caa73(0x5dc)]('|'),_0x176498=0x1b1e+-0x2168+-0xe6*-0x7;while(!![]){switch(_0x550354[_0x176498++]){case'0':_0x40a7aa[_0x2caa73(0x25c)]=_0x2f6ec1['label'];continue;case'1':_0x40a7aa[_0x2caa73(0x26f)+'ck']=(_0x5b4d6d=>()=>_0x525e31(_0x5b4d6d))(_0x2f6ec1['id']);continue;case'2':_0x40a7aa['type']=_0x2caa73(0x215)+'n';continue;case'3':var _0x40a7aa=document['creat'+_0x2caa73(0x69b)+'ent'](_0x2caa73(0x215)+'n');continue;case'4':_0x40bb3d[_0x2caa73(0x68a)+_0x2caa73(0x42c)+'d'](_0x40a7aa);continue;case'5':_0x2f3412[_0x2caa73(0x514)](_0x2f6ec1['id'],_0x40a7aa);continue;case'6':_0x40a7aa['class'+'Name']=_0x2caa73(0x3a8)+'b';continue;case'7':_0x40a7aa[_0x2caa73(0x46b)+_0x2caa73(0x503)]=_0x2caa73(0x434)+'l>'+_0x2f6ec1['label']+('</sma'+'ll>');continue;}break;}}function _0x525e31(_0x4e55ee){var _0x493e9a=_0x2caa73,_0x2ea37e=_0x2b5753[_0x493e9a(0x49b)][_0x493e9a(0x5dc)]('|'),_0x1eba97=-0x23+0x2330+0x230d*-0x1;while(!![]){switch(_0x2ea37e[_0x1eba97++]){case'0':_0x49f607['cat']=_0x4e55ee;continue;case'1':_0x4118d4();continue;case'2':_0x20f414['repla'+_0x493e9a(0x76e)+_0x493e9a(0x3c9)](..._0x2b5753[_0x493e9a(0x410)](_0x595515,_0x4e55ee));continue;case'3':_0x281f83[_0x493e9a(0x5b3)+_0x493e9a(0x386)+'t']=_0x2b5753[_0x493e9a(0x2af)]+_0x37af15[_0x493e9a(0x218)];continue;case'4':var _0x37af15=_0x4fd78d['find'](_0x3026bd=>_0x3026bd['id']===_0x4e55ee)||_0x4fd78d[-0x1*-0x1703+-0x182f+0x6*0x32];continue;case'5':for(var [_0xbfad8d,_0x16fa36]of _0x2f3412)_0x16fa36[_0x493e9a(0x300)+_0x493e9a(0x464)][_0x493e9a(0x318)+'e'](_0x493e9a(0x267)+'e',_0xbfad8d===_0x4e55ee);continue;}break;}}return _0xc4d548[_0x2caa73(0x447)](_0x525e31,_0x49f607['cat']||'comba'+'t'),setInterval(()=>{var _0x2fec55=_0x2caa73;if(!_0x4c6b56)return;var _0x19c050=_0x20f414[_0x2fec55(0x4c4)+_0x2fec55(0x520)];for(var _0x15276f=-0x1690+-0x7*0x179+0x20df;_0x15276f<_0x19c050['lengt'+'h'];_0x15276f++){var _0x17b20a=_0x19c050[_0x15276f][_0x2fec55(0x5d8)+'Selec'+'tor']('.sk-m'+'desc');_0x17b20a&&(_0x17b20a[_0x2fec55(0x5b3)+_0x2fec55(0x386)+'t'][_0x2fec55(0x451)+'Of']('UWMK')===0x698*-0x2+0x1*0xc91+-0x35*-0x3||_0x17b20a[_0x2fec55(0x5b3)+'onten'+'t'][_0x2fec55(0x451)+'Of'](_0x2b5753[_0x2fec55(0x6d2)])===0x18d1+-0xcd2*0x3+0xda5)&&(_0x2b5753[_0x2fec55(0x37b)](_0x2fec55(0x247),_0x2b5753['UTUdU'])?_0x17b20a['textC'+_0x2fec55(0x386)+'t']=_0x4f4736[_0x2fec55(0x21e)+'ode']?'SAFE\x20'+_0x2fec55(0x41b)+'-\x20ove'+'rlay\x20'+_0x2fec55(0x223)+_0x2fec55(0x293)+_0x2fec55(0x2c0)+'(relo'+_0x2fec55(0x71d)+'\x20exit'+')':_0x4f4736['uwmk']?_0x2b5753[_0x2fec55(0x362)](_0x2b5753[_0x2fec55(0x2dc)](_0x2b5753['Wetrr'](_0x2b5753['VwFzC'](_0x2b5753['rftnV'],_0x4f4736[_0x2fec55(0x6d9)+_0x2fec55(0x642)]?_0x2b5753['aznoI'](_0x2b5753['UxMKT'](_0x2b5753[_0x2fec55(0x27b)](_0x4f4736['hooks'+'Ok'],'/'),_0x4f4736['hooks'+_0x2fec55(0x642)]),_0x2b5753[_0x2fec55(0x3d5)]):_0x2fec55(0x296)+'ks\x20ar'+'med\x20('+'all\x20o'+'ff)')+_0x2b5753['xyhAw']+(_0x4f4736[_0x2fec55(0x5a8)+'oaded']?'loade'+'d':_0x2b5753[_0x2fec55(0x1c7)])+('\x20|\x20sh'+'ooter'+'\x20')+(_0x4f4736[_0x2fec55(0x416)+'ers']?_0x2b5753[_0x2fec55(0x4c5)]:_0x2fec55(0x1c6)),'\x20|\x20mo'+'vemen'+'t\x20'),_0x4f4736['movem'+'ents']?_0x2b5753['yHmGP']:'none'),_0x4f4736[_0x2fec55(0x3ca)+_0x2fec55(0x765)]?_0x2b5753['vybIz'](_0x2fec55(0x205)+_0x2fec55(0x2ba),_0x4f4736['lastE'+'rror']):''):_0x2b5753['ySkkb']:(_0x5bb959[_0x2fec55(0x5a4)+'Exp']=_0x175787,_0x25ac37()));}},0xddb+-0xef8+0x505),_0x29db60;}var _0x2b44db='\x0a\x20\x20\x20\x20'+_0x358929(0x4f3)+'\x20{\x20al'+'l:\x20in'+_0x358929(0x701)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x358929(0x5f2)+'-sizi'+'ng:\x20b'+_0x358929(0x723)+_0x358929(0x6b5)+_0x358929(0x403)+_0x358929(0x603)+';\x20fon'+_0x358929(0x61c)+'ily:\x20'+_0x358929(0x204)+_0x358929(0x299)+_0x358929(0x4a6)+'\x20UI\x22,'+_0x358929(0x221)+'em-ui'+_0x358929(0x42b)+_0x358929(0x469)+'if;\x20}'+_0x358929(0x1ef)+_0x358929(0x2ed)+'anel\x20'+_0x358929(0x56b)+_0x358929(0x1c4)+':\x20abs'+'olute'+_0x358929(0x3fc)+_0x358929(0x1dc)+_0x358929(0x4bd)+_0x358929(0x59a)+_0x358929(0x4b5)+_0x358929(0x353)+'idth:'+'\x20min('+'620px'+',\x20cal'+_0x358929(0x5b2)+_0x358929(0x3eb)+_0x358929(0x526)+_0x358929(0x555)+'x-hei'+_0x358929(0x4be)+'min(4'+_0x358929(0x704)+'\x20calc'+_0x358929(0x644)+_0x358929(0x379)+_0x358929(0x331)+';\x0a\x20\x20\x20'+_0x358929(0x6ee)+'splay'+_0x358929(0x58b)+_0x358929(0x1d8)+'p:\x2010'+_0x358929(0x40d)+'addin'+_0x358929(0x41c)+_0x358929(0x3cb)+_0x358929(0x723)+_0x358929(0x536)+_0x358929(0x430)+'2px;\x20'+_0x358929(0x466)+_0x358929(0x51d)+_0x358929(0x35f)+'\x20auto'+';\x0a\x20\x20\x20'+_0x358929(0x3fa)+'ckgro'+_0x358929(0x49e)+'rgba('+_0x358929(0x6a7)+_0x358929(0x4d5)+_0x358929(0x620)+'backd'+_0x358929(0x6ad)+_0x358929(0x4df)+':\x20blu'+'r(22p'+_0x358929(0x263)+_0x358929(0x2ad)+_0x358929(0x62d)+'%);\x20-'+_0x358929(0x539)+_0x358929(0x418)+_0x358929(0x680)+_0x358929(0x774)+'er:\x20b'+_0x358929(0x39d)+_0x358929(0x53c)+_0x358929(0x632)+'ate(1'+'50%);'+_0x358929(0x1ef)+_0x358929(0x21d)+_0x358929(0x3c5)+_0x358929(0x219)+'\x200\x200\x20'+_0x358929(0x4cb)+'gba(2'+_0x358929(0x706)+'5,255'+_0x358929(0x55e)+_0x358929(0x351)+'et\x200\x20'+'1px\x200'+_0x358929(0x3c3)+'(255,'+_0x358929(0x56a)+_0x358929(0x545)+_0x358929(0x35a)+'\x2030px'+_0x358929(0x442)+_0x358929(0x3c3)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x358929(0x1cb)+_0x358929(0x764)+'\x20tran'+_0x358929(0x685)+':\x20tra'+'nslat'+_0x358929(0x686)+_0x358929(0x59b)+'point'+_0x358929(0x51d)+'ents:'+_0x358929(0x5e6)+';\x20tra'+'nsiti'+_0x358929(0x6e4)+'pacit'+'y\x20.35'+_0x358929(0x6eb)+'e,\x20tr'+_0x358929(0x449)+_0x358929(0x587)+_0x358929(0x492)+_0x358929(0x1f5)+_0x358929(0x33a)+_0x358929(0x682)+_0x358929(0x3b3)+_0x358929(0x64c)+_0x358929(0x69f)+_0x358929(0x213)+'r:\x20#f'+'6eef2'+_0x358929(0x64a)+_0x358929(0x6a8)+_0x358929(0x53e)+_0x358929(0x5ea)+'\x0a\x20\x20\x20\x20'+_0x358929(0x2ed)+_0x358929(0x477)+'shown'+_0x358929(0x6d7)+_0x358929(0x565)+_0x358929(0x2e9)+'trans'+'form:'+_0x358929(0x5e6)+_0x358929(0x330)+'nter-'+_0x358929(0x21f)+_0x358929(0x47f)+_0x358929(0x258)+_0x358929(0x1ef)+_0x358929(0x29b)+_0x358929(0x4cf)+_0x358929(0x413)+_0x358929(0x1bf)+'flex;'+_0x358929(0x559)+_0x358929(0x530)+'ction'+_0x358929(0x3ba)+'umn;\x20'+_0x358929(0x511)+_0x358929(0x574)+'s:\x20ce'+_0x358929(0x2e0)+'\x20gap:'+_0x358929(0x357)+_0x358929(0x30b)+_0x358929(0x4bc)+_0x358929(0x72e)+_0x358929(0x766)+_0x358929(0x598)+_0x358929(0x3ec)+'ing:\x20'+'12px\x20'+('0;\x20bo'+_0x358929(0x46f)+'radiu'+'s:\x2016'+'px;\x0a\x20'+_0x358929(0x69f)+_0x358929(0x72a)+'round'+_0x358929(0x64f)+_0x358929(0x23a)+',255,'+_0x358929(0x2da)+_0x358929(0x240)+_0x358929(0x2d1)+_0x358929(0x592)+'w:\x20in'+_0x358929(0x781)+_0x358929(0x3e8)+'1px\x20r'+_0x358929(0x496)+'55,25'+_0x358929(0x6b9)+_0x358929(0x63f)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o\x20{\x20d'+_0x358929(0x5da)+'y:\x20gr'+'id;\x20p'+_0x358929(0x251)+'items'+_0x358929(0x5cd)+_0x358929(0x4e5)+_0x358929(0x346)+_0x358929(0x4ee)+_0x358929(0x65f)+_0x358929(0x6d4)+_0x358929(0x479)+_0x358929(0x6b7)+'\x20\x20\x20.m'+'n-log'+'o-svg'+_0x358929(0x316)+_0x358929(0x581)+_0x358929(0x2f9)+_0x358929(0x239)+'ht:\x202'+_0x358929(0x5f0)+_0x358929(0x45d)+_0x358929(0x43e)+'visib'+_0x358929(0x6ba)+_0x358929(0x4df)+_0x358929(0x424)+_0x358929(0x4f0)+_0x358929(0x76d)+'\x200\x204p'+_0x358929(0x49c)+_0x358929(0x23a)+_0x358929(0x57b)+'157,.'+'8));\x20'+_0x358929(0x270)+_0x358929(0x345)+_0x358929(0x308)+'\x20disp'+'lay:\x20'+_0x358929(0x4ca)+_0x358929(0x656)+'n-ite'+'ms:\x20c'+_0x358929(0x3d1)+_0x358929(0x274)+_0x358929(0x551)+'conte'+_0x358929(0x48c)+_0x358929(0x3d1)+_0x358929(0x3dd)+_0x358929(0x6cb)+_0x358929(0x748)+'heigh'+_0x358929(0x2a5)+_0x358929(0x3cb)+'order'+_0x358929(0x20f)+'borde'+'r-rad'+'ius:\x20'+'10px;'+_0x358929(0x1ef)+'\x20\x20bac'+_0x358929(0x4ea)+_0x358929(0x57d)+'ransp'+_0x358929(0x546)+_0x358929(0x230)+_0x358929(0x321)+_0x358929(0x496)+_0x358929(0x1e8)+'8,242'+_0x358929(0x1cf)+_0x358929(0x46e)+'or:\x20p'+_0x358929(0x557)+'r;\x20fo'+_0x358929(0x37e)+_0x358929(0x4e0)+_0x358929(0x385)+'font-'+_0x358929(0x572)+'t:\x2070'+'0;\x20}\x0a'+_0x358929(0x474)+'mn-ta'+_0x358929(0x20b)+_0x358929(0x2a3)+'color'+':\x20rgb'+_0x358929(0x3d2)+_0x358929(0x780)+'242,.'+_0x358929(0x694)+'\x0a\x20\x20\x20\x20'+_0x358929(0x4c9)+'ab.ac'+'tive\x20'+_0x358929(0x2d8)+'or:\x20#'+'ff6b9'+_0x358929(0x1fd)+_0x358929(0x698)+'und:\x20'+_0x358929(0x72d)+_0x358929(0x1eb)+'07,15'+_0x358929(0x3cf)+_0x358929(0x6b7)+_0x358929(0x6c3)+_0x358929(0x45b)+_0x358929(0x4b0)+'lex:\x20'+_0x358929(0x201)+_0x358929(0x414)+'th:\x200'+_0x358929(0x618)+_0x358929(0x5f5)+'\x20flex'+_0x358929(0x4fd)+'x-dir'+'ectio'+_0x358929(0x3df)+'lumn;'+_0x358929(0x562)+_0x358929(0x202)+'-top\x20'+'{\x20dis'+'play:'+_0x358929(0x559)+';\x20ali'+'gn-it'+_0x358929(0x285)+'cente'+'r;\x20ga'+_0x358929(0x420)+_0x358929(0x40d)+_0x358929(0x4c0)+_0x358929(0x785)+'x\x206px'+_0x358929(0x234)+_0x358929(0x475)+'r-sel'+'ect:\x20'+'none;'+_0x358929(0x562)+'\x20\x20.mn'+_0x358929(0x3d0)+_0x358929(0x40f)+'flex:'+_0x358929(0x75c)+_0x358929(0x30c)+_0x358929(0x581)+_0x358929(0x60e)+'\x20\x20\x20\x20.'+'mn-h\x20'+'{\x20fon'+_0x358929(0x6a8)+_0x358929(0x662)+'px;\x20f'+_0x358929(0x407)+_0x358929(0x4cd)+_0x358929(0x521)+';\x20}\x0a\x20'+_0x358929(0x6c3)+_0x358929(0x711)+_0x358929(0x630)+'nt-si'+_0x358929(0x4e0)+_0x358929(0x749)+_0x358929(0x51c))+(_0x358929(0x1d4)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x358929(0x563)+_0x358929(0x5fc)+_0x358929(0x413)+_0x358929(0x1bf)+'grid;'+_0x358929(0x21c)+_0x358929(0x52e)+_0x358929(0x602)+_0x358929(0x3d1)+';\x20wid'+'th:\x202'+_0x358929(0x77f)+'heigh'+_0x358929(0x6a1)+_0x358929(0x3cb)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x358929(0x255)+'8px;\x20'+_0x358929(0x72a)+_0x358929(0x2d7)+_0x358929(0x543)+'nspar'+_0x358929(0x58a)+_0x358929(0x401)+':\x20inh'+_0x358929(0x5aa)+_0x358929(0x2f4)+_0x358929(0x626)+'.45;\x20'+'curso'+_0x358929(0x57e)+_0x358929(0x2b3)+_0x358929(0x6b7)+_0x358929(0x6c3)+_0x358929(0x6c8)+_0x358929(0x783)+_0x358929(0x2aa)+_0x358929(0x2f4)+'ity:\x20'+_0x358929(0x69c)+_0x358929(0x698)+'und:\x20'+_0x358929(0x72d)+_0x358929(0x56a)+_0x358929(0x706)+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20s'+_0x358929(0x2ac)+'width'+_0x358929(0x5c8)+'x;\x20he'+'ight:'+'\x2014px'+_0x358929(0x532)+_0x358929(0x322)+_0x358929(0x3a2)+_0x358929(0x292)+':\x20cur'+'rentC'+_0x358929(0x226)+_0x358929(0x5bb)+'ke-wi'+_0x358929(0x581)+_0x358929(0x4b4)+'roke-'+_0x358929(0x289)+'ap:\x20r'+_0x358929(0x518)+_0x358929(0x562)+_0x358929(0x202)+_0x358929(0x36f)+_0x358929(0x740)+'ex:\x201'+_0x358929(0x3a5)+_0x358929(0x2f1)+'ht:\x200'+_0x358929(0x4d6)+_0x358929(0x62b)+_0x358929(0x463)+'uto;\x20'+'displ'+'ay:\x20g'+'rid;\x20'+'grid-'+'templ'+_0x358929(0x27c)+'olumn'+_0x358929(0x71a)+'peat('+_0x358929(0x480)+'fill,'+_0x358929(0x245)+'ax(25'+'0px,\x20'+_0x358929(0x462)+_0x358929(0x5ba)+_0x358929(0x63e)+'ems:\x20'+_0x358929(0x5e0)+_0x358929(0x5ba)+_0x358929(0x58c)+_0x358929(0x6e6)+':\x20sta'+_0x358929(0x5b5)+'ap:\x201'+_0x358929(0x385)+_0x358929(0x6e7)+_0x358929(0x1e2)+'\x204px\x20'+_0x358929(0x31d)+_0x358929(0x6b7)+'\x20\x20\x20.m'+'n-col'+_0x358929(0x553)+_0x358929(0x519)+_0x358929(0x365)+'llbar'+'\x20{\x20wi'+_0x358929(0x581)+_0x358929(0x77f)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x358929(0x46c)+_0x358929(0x431)+_0x358929(0x528)+_0x358929(0x672)+_0x358929(0x25d)+_0x358929(0x369)+_0x358929(0x676)+_0x358929(0x4ea)+_0x358929(0x390)+_0x358929(0x496)+'55,25'+_0x358929(0x6b9)+_0x358929(0x767)+';\x20bor'+_0x358929(0x5e5)+_0x358929(0x229)+_0x358929(0x627)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x358929(0x778)+_0x358929(0x38f)+_0x358929(0x723)+_0x358929(0x536)+'us:\x201'+'2px;\x20'+_0x358929(0x72a)+_0x358929(0x2d7)+':\x20rgb'+_0x358929(0x23a)+_0x358929(0x65d)+'255,.'+_0x358929(0x240)+'\x20box-'+_0x358929(0x592)+_0x358929(0x558)+_0x358929(0x781)+'\x200\x200\x20'+'1px\x20r'+_0x358929(0x496)+_0x358929(0x706)+_0x358929(0x6b9)+_0x358929(0x63f)+_0x358929(0x6b7)+_0x358929(0x5f4)+_0x358929(0x778)+_0x358929(0x5e3)+'{\x20bac'+'kgrou'+'nd:\x20r'+_0x358929(0x496)+_0x358929(0x706)+_0x358929(0x6b9)+_0x358929(0x710)+';\x20box'+_0x358929(0x3c5)+_0x358929(0x679)+'nset\x20'+'0\x200\x200'+_0x358929(0x6aa)+'rgba('+'255,1'+_0x358929(0x6b6)+'7,.28'+_0x358929(0x67b)+_0x358929(0x474)+'sk-ca'+_0x358929(0x3f3)+_0x358929(0x4e2)+'displ')+(_0x358929(0x1f8)+'lex;\x20'+_0x358929(0x511)+_0x358929(0x574)+_0x358929(0x2a8)+_0x358929(0x2e0)+_0x358929(0x478)+_0x358929(0x476)+'\x20padd'+_0x358929(0x38d)+_0x358929(0x596)+'12px;'+_0x358929(0x562)+'\x20\x20.sk'+'-card'+_0x358929(0x3d0)+_0x358929(0x708)+'lex:\x20'+_0x358929(0x201)+_0x358929(0x414)+'th:\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x358929(0x4de)+_0x358929(0x77c)+_0x358929(0x6cc)+_0x358929(0x583)+_0x358929(0x6a8)+_0x358929(0x53e)+_0x358929(0x72e)+'ont-w'+_0x358929(0x4cd)+':\x20600'+_0x358929(0x230)+_0x358929(0x321)+_0x358929(0x496)+_0x358929(0x1e8)+_0x358929(0x655)+_0x358929(0x524)+';\x20}\x0a\x20'+_0x358929(0x5f4)+'k-car'+_0x358929(0x5e3)+'.sk-c'+'ard-t'+'itle\x20'+_0x358929(0x4ac)+'g\x20{\x20c'+_0x358929(0x56e)+'\x20#fff'+_0x358929(0x2b6)+_0x358929(0x270)+_0x358929(0x552)+_0x358929(0x580)+_0x358929(0x784)+_0x358929(0x510)+_0x358929(0x397)+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x358929(0x1cc)+'\x20{\x20fo'+_0x358929(0x37e)+_0x358929(0x4e0)+_0x358929(0x749)+'opaci'+'ty:\x20.'+'4;\x20ma'+_0x358929(0x298)+_0x358929(0x59a)+_0x358929(0x675)+_0x358929(0x599)+_0x358929(0x474)+_0x358929(0x352)+_0x358929(0x1c9)+_0x358929(0x5da)+'y:\x20fl'+_0x358929(0x542)+_0x358929(0x5d9)+_0x358929(0x4a8)+_0x358929(0x5cd)+_0x358929(0x4e5)+'gap:\x20'+_0x358929(0x77f)+_0x358929(0x6e7)+'ng:\x204'+_0x358929(0x66f)+_0x358929(0x21a)+_0x358929(0x5de)+_0x358929(0x50f)+'5px;\x20'+_0x358929(0x270)+_0x358929(0x552)+'label'+_0x358929(0x740)+'ex:\x201'+';\x20col'+_0x358929(0x321)+'gba(2'+_0x358929(0x1e8)+_0x358929(0x655)+_0x358929(0x4bb)+';\x20}\x0a\x20'+_0x358929(0x5f4)+_0x358929(0x291)+_0x358929(0x2c6)+'ispla'+_0x358929(0x61f)+_0x358929(0x377)+_0x358929(0x34b)+_0x358929(0x32e)+_0x358929(0x5a7)+_0x358929(0x47b)+'city:'+_0x358929(0x1d7)+_0x358929(0x270)+_0x358929(0x552)+'switc'+_0x358929(0x20d)+_0x358929(0x5f9)+_0x358929(0x55f)+'elati'+_0x358929(0x22c)+'idth:'+_0x358929(0x222)+_0x358929(0x2be)+_0x358929(0x4be)+'14px;'+_0x358929(0x35d)+'er:\x200'+_0x358929(0x4d8)+'der-r'+_0x358929(0x229)+_0x358929(0x404)+_0x358929(0x628)+'ckgro'+_0x358929(0x49e)+_0x358929(0x72d)+_0x358929(0x56a)+_0x358929(0x706)+'5,.07'+_0x358929(0x283)+'rsor:'+_0x358929(0x378)+_0x358929(0x4e5)+'flex:'+'\x20none'+_0x358929(0x6b7)+_0x358929(0x5f4)+'k-swi'+_0x358929(0x28d)+_0x358929(0x726)+'\x20{\x20co'+_0x358929(0x6e6)+':\x20\x22\x22;'+_0x358929(0x69d)+'tion:'+'\x20abso'+_0x358929(0x70f)+'\x20top:'+'\x203px;'+'\x20left'+':\x203px'+_0x358929(0x3dd)+_0x358929(0x2bc)+'px;\x20h'+'eight'+_0x358929(0x3da)+';\x20bor'+_0x358929(0x5e5)+'adius'+_0x358929(0x525)+_0x358929(0x4e6)+_0x358929(0x4ea)+'nd:\x20r'+'gba(2'+_0x358929(0x706)+'5,255'+_0x358929(0x3ee)+_0x358929(0x3dc)+_0x358929(0x667)+_0x358929(0x49a)+'eft\x20.'+'2s,\x20b'+_0x358929(0x5af)+_0x358929(0x3e5)+'.2s;\x20'+_0x358929(0x270)+'\x20.sk-'+'switc'+_0x358929(0x5ff)+_0x358929(0x2b8)+_0x358929(0x28f)+'\x22true'+_0x358929(0x59f)+_0x358929(0x72a)+'round'+':\x20rgb')+(_0x358929(0x23a)+',107,'+_0x358929(0x5bd)+_0x358929(0x314)+_0x358929(0x270)+_0x358929(0x552)+_0x358929(0x389)+'h[ari'+_0x358929(0x2b8)+'cked='+_0x358929(0x3c6)+_0x358929(0x3a1)+'fter\x20'+_0x358929(0x4a0)+_0x358929(0x262)+_0x358929(0x3cb)+'ackgr'+'ound:'+_0x358929(0x57a)+_0x358929(0x406)+'}\x0a\x20\x20\x20'+_0x358929(0x552)+'field'+'\x20{\x20ba'+'ckgro'+'und:\x20'+_0x358929(0x72d)+'255,2'+'55,25'+'5,.03'+_0x358929(0x4b3)+'order'+_0x358929(0x20f)+_0x358929(0x6a4)+_0x358929(0x5e9)+_0x358929(0x255)+_0x358929(0x27d)+'color'+':\x20#f6'+'eef2;'+_0x358929(0x3ec)+'ing:\x20'+'6px\x209'+_0x358929(0x72e)+'ont-s'+_0x358929(0x72c)+'11.5p'+_0x358929(0x256)+_0x358929(0x2b0)+':\x20non'+'e;\x20bo'+'x-sha'+'dow:\x20'+'inset'+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+_0x358929(0x607)+_0x358929(0x56a)+_0x358929(0x545)+_0x358929(0x37a)+_0x358929(0x1ef)+'.sk-f'+'ield\x20'+_0x358929(0x246)+'n\x20{\x20b'+_0x358929(0x5af)+_0x358929(0x71e)+_0x358929(0x762)+'419;\x20'+_0x358929(0x270)+_0x358929(0x552)+'range'+_0x358929(0x3b7)+_0x358929(0x4ff)+_0x358929(0x58b)+'x;\x20al'+_0x358929(0x60d)+'tems:'+_0x358929(0x671)+'er;\x20g'+_0x358929(0x2a6)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-s'+_0x358929(0x683)+'\x20{\x20-w'+'ebkit'+_0x358929(0x690)+_0x358929(0x1d2)+'e:\x20no'+'ne;\x20a'+_0x358929(0x25a)+_0x358929(0x517)+_0x358929(0x5e6)+';\x20wid'+_0x358929(0x3c7)+_0x358929(0x385)+_0x358929(0x2cc)+_0x358929(0x509)+'x;\x20ba'+'ckgro'+'und:\x20'+_0x358929(0x4fa)+_0x358929(0x1c0)+'t;\x20}\x0a'+_0x358929(0x474)+'sk-sl'+'ider:'+_0x358929(0x431)+_0x358929(0x528)+'lider'+_0x358929(0x6c9)+'able-'+'track'+_0x358929(0x2c7)+_0x358929(0x6d4)+_0x358929(0x760)+_0x358929(0x35d)+_0x358929(0x739)+'dius:'+_0x358929(0x760)+_0x358929(0x212)+_0x358929(0x77e)+_0x358929(0x3ef)+_0x358929(0x2e2)+_0x358929(0x4ef)+'ent(#'+'ff6b9'+_0x358929(0x6dd)+_0x358929(0x429)+_0x358929(0x73d)+_0x358929(0x6bb)+'r(--p'+_0x358929(0x2e5)+_0x358929(0x635)+_0x358929(0x759)+_0x358929(0x6d1)+'t,\x20rg'+'ba(25'+'5,255'+_0x358929(0x65d)+_0x358929(0x531)+_0x358929(0x562)+'\x20\x20.sk'+_0x358929(0x486)+_0x358929(0x2a2)+_0x358929(0x539)+'t-sli'+_0x358929(0x54a)+'humb\x20'+_0x358929(0x28e)+_0x358929(0x423)+'appea'+'rance'+_0x358929(0x275)+_0x358929(0x441)+'dth:\x20'+_0x358929(0x27d)+'heigh'+_0x358929(0x5db)+'x;\x20ma'+_0x358929(0x298)+_0x358929(0x70e)+_0x358929(0x1ba)+_0x358929(0x35d)+_0x358929(0x739)+'dius:'+_0x358929(0x231)+_0x358929(0x212)+'groun'+_0x358929(0x605)+_0x358929(0x429)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-val'+_0x358929(0x630)+'nt-si'+_0x358929(0x4e0)+'1px;\x20'+'font-'+_0x358929(0x572)+_0x358929(0x763)+'0;\x20mi'+_0x358929(0x414)+'th:\x202'+_0x358929(0x77f)+_0x358929(0x5ac)+_0x358929(0x511)+_0x358929(0x2fb)+_0x358929(0x325)+_0x358929(0x56e)+'\x20rgba'+'(246,'+'238,2'+'42,.8'+_0x358929(0x67b)+'\x20\x20\x20\x20.'+_0x358929(0x604)+'lor\x20{')+('\x20widt'+_0x358929(0x608)+'px;\x20h'+'eight'+':\x2022p'+'x;\x20bo'+'rder:'+'\x200;\x20b'+_0x358929(0x723)+_0x358929(0x536)+_0x358929(0x67d)+_0x358929(0x3cb)+_0x358929(0x5af)+_0x358929(0x71e)+'\x20none'+';\x20pad'+'ding:'+'\x200;\x20c'+_0x358929(0x4dd)+_0x358929(0x1f3)+_0x358929(0x2e0)+_0x358929(0x562)+_0x358929(0x382)+_0x358929(0x4d7)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+'1px;\x20'+_0x358929(0x401)+':\x20rgb'+_0x358929(0x3d2)+',238,'+_0x358929(0x28a)+_0x358929(0x391)+'addin'+_0x358929(0x4d3)+_0x358929(0x693)+_0x358929(0x270)+_0x358929(0x552)+_0x358929(0x689)+'err\x20{'+'\x20colo'+_0x358929(0x59d)+'f7a93'+_0x358929(0x6b7)+_0x358929(0x5f4)+'k-btn'+_0x358929(0x3c2)+_0x358929(0x54c)+'elf:\x20'+'flex-'+'start'+_0x358929(0x4d8)+'der:\x20'+_0x358929(0x376)+_0x358929(0x46f)+_0x358929(0x673)+_0x358929(0x5e8)+'x;\x20pa'+_0x358929(0x510)+':\x208px'+_0x358929(0x467)+_0x358929(0x4e6)+_0x358929(0x4ea)+_0x358929(0x3e9)+'ff6b9'+_0x358929(0x42a)+_0x358929(0x24d)+_0x358929(0x75d)+_0x358929(0x21a)+_0x358929(0x5de)+_0x358929(0x50f)+_0x358929(0x5f0)+'font-'+_0x358929(0x572)+'t:\x2070'+_0x358929(0x1e9)+_0x358929(0x71f)+_0x358929(0x378)+_0x358929(0x4e5)+'}\x0a\x20\x20\x20'+_0x358929(0x552)+_0x358929(0x594)+_0x358929(0x4f4)+_0x358929(0x34c)+'ter:\x20'+_0x358929(0x3ad)+_0x358929(0x327)+_0x358929(0x495)+';\x20}\x0a\x20'+_0x358929(0x4d0));window[_0x358929(0x5c9)+_0x358929(0x39c)+'stene'+'r'](_0xc4d548[_0x358929(0x295)],_0x174ff4=>{var _0x2c71f8=_0x358929;if(_0xc4d548[_0x2c71f8(0x6de)]!=='ZXGxx'){var _0x295a55=_0x519583['child'+'ren'];for(var _0x41beec=0x1*0x467+-0xbc0+0x759;_0x41beec<_0x295a55[_0x2c71f8(0x3d8)+'h'];_0x41beec++){if(_0x295a55[_0x41beec]['id']&&_0x2b5753[_0x2c71f8(0x37b)](_0x295a55[_0x41beec]['id'][_0x2c71f8(0x451)+'Of'](_0x2b5753['FtGiF']),0xa08+0x1f9f*-0x1+0x1597))_0x295a55[_0x41beec][_0x2c71f8(0x468)]['displ'+'ay']='none';}}else _0x174ff4[_0x2c71f8(0x45a)]==='Inser'+'t'&&(_0x174ff4[_0x2c71f8(0x5df)+_0x2c71f8(0x310)+_0x2c71f8(0x1d9)](),_0xea9e77());},!![]);var _0x8f164b=document['creat'+_0x358929(0x69b)+_0x358929(0x332)](_0xc4d548['GsFma']);_0x8f164b[_0x358929(0x468)][_0x358929(0x491)+'xt']=_0xc4d548[_0x358929(0x338)],_0x8f164b[_0x358929(0x46b)+_0x358929(0x503)]=_0x358929(0x43d)+_0x358929(0x52d)+'ox=\x220'+_0x358929(0x341)+'\x2024\x22>'+_0x358929(0x1df)+_0x358929(0x1ee)+_0x358929(0x48d)+_0x358929(0x339)+_0x358929(0x31e)+_0x358929(0x600)+'-4-7.'+_0x358929(0x2df)+_0x358929(0x2a4)+_0x358929(0x422)+'\x204-4.'+_0x358929(0x55a)+_0x358929(0x548)+'5c0\x203'+_0x358929(0x1f1)+_0x358929(0x6c1)+'.5z\x22\x20'+_0x358929(0x1ff)+'\x22none'+_0x358929(0x674)+_0x358929(0x6b1)+'#ff6b'+'9d\x22\x20s'+_0x358929(0x292)+_0x358929(0x236)+'h=\x222\x22'+_0x358929(0x5bb)+_0x358929(0x51e)+'necap'+'=\x22rou'+'nd\x22\x20s'+_0x358929(0x292)+_0x358929(0x41a)+'join='+_0x358929(0x2d2)+_0x358929(0x6b8)+_0x358929(0x34d)+_0x358929(0x72f)+_0x358929(0x6b3)+'cy=\x221'+_0x358929(0x6a9)+'\x221.5\x22'+'\x20fill'+_0x358929(0x3a4)+'6b9d\x22'+_0x358929(0x5b6)+_0x358929(0x1d3),_0x8f164b['title']='Sakur'+_0x358929(0x3ce)+'r',_0x8f164b[_0x358929(0x2d0)+'seent'+'er']=()=>_0x8f164b[_0x358929(0x468)][_0x358929(0x51c)+'ty']='1',_0x8f164b['onmou'+_0x358929(0x6df)+'ve']=()=>_0x8f164b[_0x358929(0x468)][_0x358929(0x51c)+'ty']=_0x358929(0x5e1),_0x8f164b[_0x358929(0x26f)+'ck']=_0x372495=>{var _0x14fccf=_0x358929;_0x372495[_0x14fccf(0x5c7)+_0x14fccf(0x62a)+_0x14fccf(0x3bc)](),_0x2b5753[_0x14fccf(0x278)](_0xea9e77);},document[_0x358929(0x24f)][_0x358929(0x68a)+_0x358929(0x42c)+'d'](_0x8f164b),_0x42ecfc(),requestAnimationFrame(_0x5d670f),console[_0x358929(0x1e6)](_0x358929(0x460)+'ra-ko'+_0x358929(0x1d1)+_0x358929(0x6e1)+_0x358929(0x225)+_0x358929(0x268)+':',_0x4f4736[_0x358929(0x670)]);});})()));
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
