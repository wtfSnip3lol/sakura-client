// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.0.8
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
function _0x2250(_0x562144,_0xbaa458){_0x562144=_0x562144-(-0x2*0xa61+0x1307+0x355);var _0x3a9858=_0x43c9();var _0x56c859=_0x3a9858[_0x562144];if(_0x2250['nFalWp']===undefined){var _0x40c1b4=function(_0xfbe095){var _0x73b9cf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1fd005='',_0x1a2cb4='';for(var _0x3a7fd8=-0x169a*0x1+-0x6*-0x28f+-0x10*-0x74,_0x44d585,_0x5dc465,_0x5ae42c=-0x811+0x99b+-0x18a;_0x5dc465=_0xfbe095['charAt'](_0x5ae42c++);~_0x5dc465&&(_0x44d585=_0x3a7fd8%(0x1a+0x2573*-0x1+-0x5*-0x779)?_0x44d585*(0x1*-0xce5+-0x1da*0x2+0x1*0x10d9)+_0x5dc465:_0x5dc465,_0x3a7fd8++%(-0x5ba*-0x1+0xfb*-0x25+0x1*0x1e91))?_0x1fd005+=String['fromCharCode'](-0x15ff+0x2*0x2b6+0x1192&_0x44d585>>(-(0x1a45+-0xc26+0x1*-0xe1d)*_0x3a7fd8&-0x40b+-0x1209+-0x8a*-0x29)):0x1*-0x1739+0x102b*-0x1+0x2764){_0x5dc465=_0x73b9cf['indexOf'](_0x5dc465);}for(var _0x846b8d=-0x1ee8+-0x406*0x7+0x3b12*0x1,_0xd41a01=_0x1fd005['length'];_0x846b8d<_0xd41a01;_0x846b8d++){_0x1a2cb4+='%'+('00'+_0x1fd005['charCodeAt'](_0x846b8d)['toString'](-0x2672+0x7*0x30e+-0x89*-0x20))['slice'](-(0xb9*-0x13+0x1*0x21fd+-0x1440));}return decodeURIComponent(_0x1a2cb4);};_0x2250['cKoeyd']=_0x40c1b4,_0x2250['MqhTsa']={},_0x2250['nFalWp']=!![];}var _0x5b923e=_0x3a9858[0x841*-0x3+0x9*0x3b1+-0x876*0x1],_0x2c0f91=_0x562144+_0x5b923e,_0x4f62ea=_0x2250['MqhTsa'][_0x2c0f91];return!_0x4f62ea?(_0x56c859=_0x2250['cKoeyd'](_0x56c859),_0x2250['MqhTsa'][_0x2c0f91]=_0x56c859):_0x56c859=_0x4f62ea,_0x56c859;}function _0x43c9(){var _0x3922dd=['ugf0Aa','uMfWAwq','ExPfy2i','iM5VBMu','BIb0Agu','mhb4oYa','ktSGBwe','qMLlrwK','psiJzMy','zwqGyw0','nsaWlti','i2zMnMi','r29Kie0','u0fgrq','idaGmca','EYbMAwW','oYbVCge','igHVB2S','ChG7igG','C2zVCM0','ufLZEKu','B2X1Dgu','Aw9F','shbvC1i','idiWmg0','B29Rihi','CMLUz3m','yMvS','tM8GuMu','C3rLBMu','sgLKzxm','oIa1mcu','nJaWide','zxjPDdS','ns00idC','C3bSAxq','z2v0sxq','CI1Yywq','idqGnc4','C2HHzg8','B24U','AxPLoIa','z24TAxq','rLbtigm','zxG6mJe','Aw9FnZi','wgHIyuG','Dcb7igq','mJa2mwnJz2jNBW','BMvS','zsb0CMe','nYWWlJC','ihSGlxC','zs1PDgu','vMLZDwe','ywn0A0S','oIbMBgu','BM9Uzq','oYbIywm','qwPwrhO','z29K','Aw9UlLq','lc40ktS','wKHYt3O','rMLLBgq','mdSGFqO','zIXZExm','u2vNB2u','DxjDig0','uMvMAwW','u3rHDhu','q0Lcsfe','Bg9YihS','AxrLiee','ExH3Bwu','C2STC2W','Bw91C2u','CMLZAYa','EhvlB1i','CMuGkfm','oIbHyNm','zJzIowq','y2HLy2S','yxK6igy','B24Gzxy','uMf0zq','AgnAB08','ig5VBMu','lwjHBNi','Bcb7igq','yxrJAgu','Bgv4oIa','iNjVDw4','CIdIGjqG','DgXL','BMv2zxi','msWUmZy','y3rPB24','ywnPDhK','B2fKzwq','Aw5NoIa','zwfWB24','zMy2yJK','lNnRlxm','tuLNCgO','igzPBgW','Cg9ZAxq','zw50tgK','C3bLzwq','CMDYrge','t3f6s0m','zwf0CYa','CMvSB2e','Bw4TAca','l3jHCgK','yvfhu0q','yxb0Dxi','tM8Gzw4','lJuGms4','mZiZotm0mvnvt2zzsq','DxDPBgS','Bw4Ty2W','yuLbzfa','CZO6lxC','mtSGyMe','zxiTzxy','A3ndChm','z1rSufy','y2fSBhm','Dw5buKG','AxrSzsa','lM1Ulxm','lYbhCMe','ihDPzhq','BsbVBIa','u2L6zq','z2v0rwW','lNnRlwm','igDHDgu','ywnRz3i','yxjLBNq','B1jLy28','ihLVDxi','DhjPyNu','z3jVDw4','r3jHDMK','Awy7ih0','BNrLBNq','lMrSBa','y2vdAgK','EYbKAxm','Bxm6igm','EYbJB2W','cIaGica','ywrKAw4','zJmY','zw1LBNq','B2vZig4','rvHqxq','CMfWAwq','rxjTtfy','DhjVA2u','AxvZoIa','AKD0Beu','DhLWzq','ie1VDMu','DgHLihC','zvjHDgu','sw5MAw4','t2XuCK8','ztOGmtm','ysGYntu','B246ihi','DgHYB3C','DgG6ida','igLZigm','y3nZvgu','EdSGywW','phn2zYa','C2fMzq','zxi6ida','BhrO','nsWUmdu','yML1r1G','BfHTuhy','mJuPoYa','DMvYihS','lxnOywq','ExrsBw0','EKDxD3e','mJqSmtC','ENLOENO','zMLSBfq','Ce94vw8','CJOGDgG','DxjH','Bgf0zwq','yxbWzw4','B3uU','rwnmteO','lwnHCMq','oYbMAwW','rgfTywC','BgfJzs0','tKCG4Ocuia','rxHW','zgvZ','Dg9Nz2W','Bg9Hzgu','C2HVD24','qxvjqKO','mhWZFdq','uxr4Awe','lIbuDxi','yw5Jzs4','mxb4oYa','DffKz3u','zw50zxi','D2L0Aca','zhbY','zxj0DMO','CYbpsgu','zMLSBcW','swTgq2S','Dgv4Dem','DgL0Bgu','zcb7igi','Aw50zxi','u2HHCNa','mcWWlJu','CMDIysG','lMLVig0','D2L0Ag8','B3vUzdO','z2uUiei','yvHZA2W','B2r5','B3nPDgK','DxjWC3e','Bw4TAa','uK9XrLa','DgLKzvC','AeDMEKO','B3C6igK','pc9ZBwe','BNqGAge','DgG6idG','y3K9iJe','AdOGnJi','vw12zg4','AM9PBJ0','CgXHEtO','svvfDMS','zgL1CZO','oJa7EI0','EwXnA2m','BdOGAw4','zwfK','igfIC28','Ag9VA3m','yJPOB3y','veLeCMe','nxb4oYa','zwXMoIa','EYbIywm','n3W1Fdy','l1jnqIa','Fdn8mxW','DtmY','DML0Eq','ig1HCMC','BMLUzW','re9nq28','CNnVCJO','C2vSzwe','CIb2ywW','v2LWzsa','DhLqy3q','B2reAwu','idK5osa','AhfXAK8','vwriu3y','tfvhz2K','ywLSzwq','y2HPBgq','nJiWChG','BwLUkdq','mJqYlc4','yMfJA2C','q0fovKe','AuzWsLu','CM9Rzs0','icbIB3G','yM9KEq','mdSGy3u','nxm0idi','y29Kzq','ChbLyxi','BKfwzvy','zxi6oI0','C0zSB1G','shb2t04','uNDbr3G','B3zLCIa','yxK6igC','Bw4TDgK','mcuUifm','mc41o3q','oYbHBgK','mcbOB28','ze9uEK0','B2TvwvG','BwvZC2e','ywXSig8','B29RCYa','yxbWBgK','lxnJCM8','igzSzxG','u0H6wKm','FqOGica','y29TyMe','zgvSzxq','BwvUDca','zxmGB24','C2fRDxi','qNLjza','BNn0ywW','AY12ywW','BNqTC2K','jYb0Agu','twLZyW','zMuGBw8','yxvky1O','uMvZzxq','BhfIwKS','ifvUAxq','m3W0Fda','zgrPBMC','AcaTidq','DhK6ic4','nJeXotGYnK9StK5svG','DgvTCgW','Dgv4Dei','q3r3uNG','qunuAYa','idfWEca','zM9YBtO','BM93','D3jPDgu','AePNtKm','EuHRENq','De5Vzgu','t0Hcz0m','igvSC2u','txPSsey','ignVBg8','DNnuAwm','lZ48l3m','z3jHDMK','Awr0AdO','mJu1ldi','C3DPDgm','zdOGi2y','C2vLBNq','BM9szwm','Ec1OzwK','CIbNyw0','zuv4Ca','Dc1ZAxO','wMvYB2u','CI51As4','ExvKwNm','v2vfDNG','DgvYoYa','igjVEc0','BgvMDa','BM9UztS','Dg9Y','yxbWzwe','C2STDMe','s0f5ExK','AdOGmZq','oIaWoYa','qsblt1u','D0jSDxi','AwDUyxq','D2vPz2G','y3KGB24','ywXPz24','ywXSihq','Devgte0','zMLSBa','nZTWB2K','u3rHDgu','C2f2zq','rLnktxC','CYaNzNu','yxnLBgK','ig5VigG','tMfTzq','BI1ZDwi','B2STCMu','t0zHz2K','igP1Bxa','CevKzwy','sgvHBhq','zgv2Awm','ihjLBg8','ntuSlJa','phnTywW','Bg93zxi','BMqGt0G','ug5bsuu','ywviqMu','ufmGDw4','u2zIqMO','sKfdsvO','zw50','BMzdvhK','mcWWlJG','mtiGmJe','A2uTD2K','mtySmc4','AguGzgu','ieaG','C2v0sxq','igjHy2S','oNbVAw4','nsK7igi','zw50CW','oYbIB3i','oIaXms4','nMi5zci','lMXHC3q','A2vOuNa','rwnZuwS','mNWWFdq','uvnSAfC','CujQBMC','EcKGC2e','nhWXFdi','igH1CNq','iL06oMe','yMvNAw4','zsb2ywW','DxrVoYa','zuvSzw0','Dw1UoYa','Ahq6ida','BgLUzvq','B3zLCMy','zeLmDKu','Bg9Y','CMvHzey','EuPnugC','AgfPCG','AtmY','u21yDwO','y2L0EtO','yMnKwLm','CMvU','BhvYkdi','zsbJEd0','zxi7igC','y2HdB2W','Bw4Ty28','u2fMzxq','AvrHuvu','Ad0ImIi','mcWUntu','Bg9HzgK','DgLVBI4','DgXLCW','ie92zxi','Bwf4','mdCSmtu','icaGlM0','icaUBw4','EtOGzMW','zMLSBfm','i2zMzG','uJOG','CgfNzsa','Bw92zvq','ntuSmJu','zxPPzxi','nsWYntu','igv4Axq','CMqTDgK','AxnWBge','ideWChG','ohb4ksK','ys5RB3u','Eca2ChG','BMDL','ztSGyM8','zg1NAeO','vMfzEgy','vu9sq2q','mNWXm3W','oIbIBhu','CI52mq','oI13zwi','idmWChG','DhjHBxa','B25Lige','y2vUDgu','Bw92zq','mJu1lde','rwXLBwu','t2fnBKC','vvnNCeO','sNfAzLG','zxjYB3i','ChGGmdS','ruTxBfu','ywqGDg8','EdSGAgu','A291CI0','ihSGzMW','BMC6idq','CMDxCee','DMLLD0i','x19tquS','BMq6icm','DhvYyxq','EdSGB3u','C2L6ztO','BwjVzhK','idqTnc4','ifTfwfa','oIbJzw4','yxjNzxq','AxmGyNu','vLnHDxG','BerPzsW','CMfKAxu','Cg9PBNq','Dw5RBM8','yw5ZzM8','EgvZige','A2v5zg8','mJqWiey','vvDnsYa','iJeYiIa','ywDLigq','zxiTCMe','zcbNCMu','ldeWnYW','DNPrA3K','zgL2','Aw9U','Dw5KoIa','oYbWB2K','DdOGnNa','CMvZDg8','vg90ywW','C2HVB3q','lxDPzhq','zMLUza','EtOGz3i','DdOXmda','Egf2BMu','mNb4oYa','ihn0AwW','khjLBg8','y3vYC28','A2L0lxm','tLr2wfi','BhvLCY4','ELvJB2C','BMvJyxa','ic5ZAY0','iduWjtS','ktSGFqO','A2DYB3u','oWOGica','t3bIC3C','B25Owuu','ig9Wywm','zM9UDa','iNrYDwu','Dc1ZBgK','BsbSzwy','DxjDigG','AwDODdO','CYbpDMu','AxzoCLu','uIb2ms4','tgPeBuC','zgLZCgW','BI1PDgu','BM90zs4','lNnRlwy','CMvSEsa','B25TB3u','zc5VBIa','u3bHy2u','DxDTAW','mcWWlJy','A291CNm','BxDetNy','C2v0','qM90Dg8','CI1ZzwW','BK1rz3C','jsbUBY0','BMqGBwe','s01Qsui','AY1Jyxi','ida7igm','C2v0qxq','C2STBge','yMHVCa','ic8GDMe','DgG6idu','sMjuuuS','D0nVBg8','mhb4lca','CNq7igC','se9UtNG','C0fswhC','igvUDgK','iezquW','zvbSyxK','Ag9VA0m','AcbVBMu','ihjNyMe','qMXVy2S','yMvjqK4','ldiXlc4','AguGDxm','lwL0zw0','CLDOvgO','yM9Yzgu','mdb2DZS','igq9iK0','Dw5Kzwq','nYWWlJG','B25SEsW','uw1Hqw0','EtOGmdS','Buv6C0S','yMLJlwi','zhfXuKi','DgvYigm','CY1Zzxi','zvKOmtG','AwrLCJO','Axr5oIa','B3jZige','uffvte4','DhLSzq','BMC6igi','BgLJyxq','ihWGC2G','rg9mANa','ExrQuNa','DhjHy2S','mtfWEca','zM9YBxm','kdaSmcW','Bgu7igy','Bg93oIa','vfDZzvu','t0HLywW','C3rHCNq','B3i6ihi','zg93oIa','DuvAq0i','y2SP','rKDhs2K','ocWYndi','idrWEca','u2fRDxi','BKToq1e','Ahq7igm','wNDHre0','EYbMB24','vxPLDMS','z3n2D2e','zg9JDw0','BLr5rMe','igzVBNq','DhKGDMe','igrPC3a','BY1ZDMC','ywn0Axy','oIa0ChG','yNv0Dg8','wKjMD3q','igzVDxi','DdOGnJa','zYb7igm','BwvKicG','CM9WywC','BgfIzwW','D2fYBG','DgfNtMe','zwzOqLe','Cg9Uj3m','u0fgrsa','BMuUqxa','DhmGCgW','tKCGlsa','Dxm6idy','B2XPBMu','zxzLBNq','BhmGDgG','C2u6Ag8','CZOGoha','B2f0Eq','ignVB2W','rLjdwhO','ih0kica','lxnPEMK','lJjZoYa','icaGkIa','BgvZiem','mxb4ihi','CdOGmta','Bw4TC3u','DfrJuNi','lIbvC2u','oYbOzwK','yxa6ide','DgvJDgK','zxjZy3i','zMnjDgO','sKDvveC','DMu7ihC','lxjHzgK','BMn0Aw8','AguGzNi','Aw9UoMy','BhmGysa','kdeUmsK','ktSGy3u','B3n0zMK','Dg9W','ChG7ihC','sNvTCca','uMvJDa','zuXJz20','B1vwsMW','ms4XlJa','nJTWB2K','DxjLihq','zw5HyMW','lwrPCMu','s0rnEgO','D29YAYa','AurUvLO','CIiSici','D1znywO','Fdj8mq','CZOGCMu','zciVpJW','oc00lJu','ywrKrxy','DLjft3G','zgTPDa','qwrUDM8','C3rYB2S','ihnVig4','yY0XlJu','A0j0BhG','iKLUDgu','DwX0','CIGTlxa','mZuSmJq','BwvsDw4','C2STy2e','Ag9VA0C','svDKwue','zcbZzwu','oYbYAwC','B3jKzxi','EdSGyMe','s2XvB0O','ltiUns0','CM0GlJq','CMXHEsa','BM8Gy2G','lwHLAwC','tuTVywm','lsbVDMu','zff4shC','EsbKzwy','yKfPuKm','Bw92zw0','AwDUlwK','ic40oYa','zs5bCha','zwLNAhq','DuDMtuy','wxPeyxK','zwCGzMe','AwXnB3q','yw5LBca','uNzOAvm','ysblB3u','AgfZ','BNnWyxi','uxvlueO','A2v5C3q','DcbHihq','u2vSzwm','Bg9JAW','shHjthO','zMLSzw4','CMrvAhm','z2fTzuW','nYWUmsK','C25uAem','zNbZ','q0fTt3K','ANvTCfa','Aw5Mqw0','DgnOihq','ndySmJm','idi0iJ4','DdSGFqO','tg9JywW','B250zw4','zc10Axq','AxrLBxm','zhrOoIa','CgfYzw4','C0vSs0i','BcbKCMe','u2nHBgu','CMqTAgu','Aw5NicS','C3zNiJ4','zwfKEs4','BIb7igi','icaG','uvHnr2i','BsbYAwC','oJiXndC','tgLZDa','zxiGC2W','rMP3wLC','B2LSicG','oYbWywq','DgLMEs0','EMLmyxi','yu1rqvO','icaGyMe','ig9YigS','CMfUy2u','BYbWAwC','AxmGAg8','CMvMAxG','nJq2o2m','AYbVBI4','Be1VDgK','AwT2v0e','B246igW','zgvYlxi','mcaWida','zg93BIa','yMeOmJu','CM9Szq','DcWGCMC','CM9ZC2G','yxKGB24','Cc1ZAge','nZaWia','ihbHzgq','B3bHy2K','DgLKzs4','y0DRs1O','Aw5Zzxq','BgLUzvC','ihWGz2e','ChGPoYa','idHWEdS','rfLqDhu','lxnPEMu','iJeUnsi','DgG6idi','BgWGBwu','AejYDMS','ugn0','mdSGBwK','CZPUB24','DhjPA2u','zM9UDc0','t1nOB28','kYbtCge','igjVCMq','ywrIBg8','BwLZyW','Axb0kq','y2TNCM8','ohWXFde','v2vItw8','zM1bq0W','zxLPt1G','ywqGEYa','Dgv4Dee','ALzKB0O','vLvbwwW','tMvuD1y','icaGic4','oIaZChG','BK50zw4','zZOGmNa','oIbPBMG','zxqGmca','B3G9iJa','BM9tChi','rvj1BMm','B3nWywm','ienquW','rNjHBwu','odiPoYa','DMvTzw4','zwTKEfC','oYbVDMu','u3bLzwq','zxrbs1y','wu9jEgu','nMvLzJi','zcWGi2y','BgXIyxi','r2Hhv1G','nhb4oYa','wNnUDNu','BYb7igq','B250lxC','y3jLyxq','y1HIzgm','wfDpDxK','zenOAwW','ug9ZAxq','yNfnuxC','ihbVAw4','AwXLzdO','mty3odKXmuXHvMv2zW','ide2ChG','C2STy3q','mJvWEdS','CNrPzgu','CMvHzhK','zw51ihi','Bw4TC2K','C2STy28','EMu6ide','mtC3nZj1AunMEeq','igHLAwC','Dhm6yxu','C2LxC04','DMCGEYa','lK92zxi','zdSGy28','EdSGCge','EhrOCwe','rw5NAw4','ywqUieK','ntuZmtjTtwHnD3e','ocK7ih0','A2rYB3a','BeXOEgm','icaGzgK','zwn0oIa','A2uTBgK','lxnLCMK','A2vizwe','ywLYlG','AwX0zxi','ihSGzM8','CM9Rzxm','Dg9WoIa','v0ftrca','zM1KshK','lwHVCa','DLbJu2m','BKzSsei','DgfIihS','mNb4ide','igfSAwC','C2v0ida','ihDOAwm','zdSGyMe','mJu1lc4','ocKPoYa','DgvY','Ahq6idi','ignHy2G','qurYteO','CMrLCJO','B3C6ida','mJiSocW','zwv6zsa','DMfS','Dw5PDhK','CMrLCI0','v3jHCha','rgvNvMq','CgfKzgK','mdi1ktS','C2fMzu0','C2STBM8','DgGUsw4','zhHjy0S','v2LKDgG','zxzLCNK','sNvTCfq','r3nmuKm','zvzHBhu','DgL2zsa','C2v0vhi','oYbMB24','y2XLyxi','z2fWoIa','y0f3ALa','AwvZlG','Awr0Aa','ltqTnY4','ihn0CM8','CuXzuhO','Dfzyzfu','AwnRihm','v0fttsa','twH2BLC','BgLNBI0','ChG7igy','zwfKB3u','Ag9Szsa','zsXTB24','mcWWlJC','y2LYy2W','B2rL','B3nLihS','AsXZyw4','CKnQDhm','te1c','q2jgA3u','nsWUmdm','zwLUC3q','vw5PDhK','zxj2zxi','yM90Dg8','ihDLyxa','zxi6igi','DdOYnNa','ihSGywW','zhrOoJe','B25JBgK','Aw46ida','DgXPBMu','Ag9VA1a','C21HBgW','iokaLcb0zq','psjYB3u','C3rYAw4','A3mGyxi','zgvYoIa','ug1prhi','y2fWtw8','sMDsq1q','lca1mcu','CKTIuvO','y3jVBgW','y2XHC3m','z2jHkdi','EYbSzwy','CMDPBI0','zxH0','CuDPyMe','s2v5uW','zIbTyxq','B2LS','BgLKzxi','idGWChG','vvDnsW','CMfUz2u','zxjZ','Ec1ZAge','B246ig8','vK9Ir3m','EergDxq','mtu3lc4','icaGlNm','mtaWid0','zZOGmta','tMXRrwi','z01qsLG','oYbIB3G','AfnOywq','Dhvfr2W','B2TLpsi','Fdf8mW','ysGYndy','Dg9Wrgu','yM91BMq','AMHmqxC','mdSGyM8','Bw4TCge','CMvUDem','uNPlzLO','zgvZyW','CM91BMq','swyGCMu','AxnPyMW','nYWWlJm','ihrOAxm','tgvMDca','Aw1Llca','CgvHDcG','ls1W','mtjWEdS','AxrPyxq','CNjVCG','ywrPDxm','yw1L','BgLNBG','AwvSza','CYbnB3y','yNrUoMG','qxbWBgK','Dxrjr1i','Bgf5oIa','CJSGz2e','uMvJB2K','lNnRlw0','z2v0q28','EdTVCge','rLbtig8','s2LSBgu','lxbHCMu','ohb4oYa','Dvbsuu0','kdeWmhy','q3vZDg8','DcbZDge','zeXlvwC','ChG7iha','icaUC2S','AxHLzdS','DdOGnZa','ieDLDfy','DuDxu1y','Aw5Uzxi','sfrnta','BNrLCJS','B0LKD0K','B3zLCMW','zvn0EwW','BhKGkhi','AY1ZD2K','yxrLvge','Bg9Hzhm','BfjHDgK','B25JAge','DvLvBMS','lc43nsK','DMvYlxy','C2f0Dxi','CgXPy2e','u2TPChm','AgvSza','BgfZDeu','qxPLEhC','zw1ZoIa','zguSihq','Aw9FmZa','yxr0ywm','CYbHBgW','mtf8nNW','C3bHBG','u3LNuKO','uurAweK','A1nrDNi','phbHDgG','BguGC3q','DgvYo3C','w3nHA3u','ig1HEsa','AwXKigG','C3rPBgW','C3r5Bgu','zwXHDgK','BKP4AK8','nvnQteTotq','ChG7igi','oIaXnha','BNqGAxq','Aw5KzxG','D2vIA2K','wMfuCvu','idaGnha','yMfYlxq','wNrTENq','DZOGAw4','BguGAwy','mtbWEdS','oYbKAxm','AMPSDxO','BI5MAxi','BLPVDKy','DdOGoha','vgHSAhu','CJOGCg8','oIbUB24','rLbWzfK','oYbJB2W','B0HMyK0','A3nty2e','BwLKzgW','CMvHza','CMzSB3C','odaSmtK','zw15igm','y2TLzd0','kdi1nsW','kdi0nIW','DgvTlxu','oIaIiJS','qLPotwm','zMXLEc0','u2v0r2e','AgvPz2G','y2HtAxO','ndGZnJq','iL0GEYa','Dxm6idi','zsbTAxm','zwfKige','lxrPDgW','yw1Hz2u','DhrPBMC','q2HcA04','B3vUDc4','zMXLEdS','BMqIihm','zwz0ic4','z2LMEq','zYbJyw4','Cg9W','zwn0Aw8','BYb0Agu','EsaUmZu','yw5JztO','z2v0','C2vYDMu','zMyP','yNjPz2G','BwuG','ic5TBI0','nNb4idK','v01bsgi','CML0zxm','4Ocuig92zq','whnNBNO','qxbWBhK','v3rjCfO','nYWUmJG','B2LUDgu','DgLVBJO','B25PBNa','x19ZywS','BgvUz3q','zxj5idi','tu9ersa','igXPBwK','ideYChG','oYb9cIa','lc40nsK','EcaWoYa','ode0ndy4r1vzzur6','zsGXnta','vgHLC2u','CgfYC2u','ldi1nsW','B290zxi','ywz0zxi','ztOGmtC','BI13Awq','uNvUDgK','mhW0Fdu','EvHfAMy','AwWGC3a','z29KrgK','Bw8GDg8','CJSGzM8','qvnlyue','q2nmCuS','ndC0odm','CgLJyuq','yxjKlxq','zNvSBhm','yM90Aca','BgrYzw4','sNzVsfy','A290B2i','Bw9fEha','BNnLDca','BMq6ihq','lcbPBNm','CM9UzYa','zxjZihq','Bwf0y2G','zw50CZO','DgvYoIa','igfWCgW','DMfSDwu','ignHBgm','zgfTywC','BsbJzw4','ndiSlJG','C2v0uhi','z3LIywm','sgvPz2G','AM5SrvG','y3jVC3m','z2H0oIa','BwrLC2m','zcWGyw4','BIbZAwC','u0flvvi','AxrPywW','oYb3Awq','AwrHDgu','ig1PBM0','Bw4TDg8','vxvNAwK','CMeTA28','EM1dyuG','D2LKDgG','CgfJAxq','thnPuNe','oIb0CMe','lwjVEdS','qMDUr3C','AKX5zu0','zcbJAg8','yxjPys0','DMLHifm','ywrK','DgvZDa','DhfXB2W','lM1Ulxa','uef2rMC','oIbYz2i','yw5LBc4','Ag9VA04','ChG7ih0','ihbVC2K','B3b0Aw8','CYb3B24','nNb4oYa','BNnPDgK','q29SB3i','BNrLCI0','vvjbx0S','ndSGFqO','oJa7D2K','C3bSyxK','y29SB3i','svnmu3u','sw5ZDge','BMnL','A2HnqKu','z29KicG','tuLtu0K','sw5PDgK','igDHCdO','ihWGrvi','Bg5Pthy','vLzfqNO','mhG2mda','B24Oks4','m3W5Fdu','CxvLCNK','y3jLzw4','ztOGBM8','BMq6ihi','B3nLihm','AwrLCG','vgLJAW','qw9jqu8','C2v0x3q','B3vUzdS','yxrPB24','zg93BG','BMCGzM8','ndu3mteWAMT2vK5p','mwzYksK','ihSGzgK','AwXS','zwjRAxq','ifjLy28','idaGmJq','Bw4TDge','ChGGDwK','B3qGBwe','tgvNAw8','A3nqB3m','i2zMzJS'];_0x43c9=function(){return _0x3922dd;};return _0x43c9();}(function(_0x561521,_0x20a493){var _0x6e6e59=_0x2250,_0x96bcd6=_0x561521();while(!![]){try{var _0x2d294c=parseInt(_0x6e6e59(0x548))/(0xae7*-0x2+0xd5f+0x870)+-parseInt(_0x6e6e59(0x4d3))/(0x1aea+-0x1*0x2089+-0xb*-0x83)+parseInt(_0x6e6e59(0x387))/(0x51d+-0x11ae+0xc94)+parseInt(_0x6e6e59(0x391))/(-0x1*0x1c19+0x1*0x14e5+0x738)+-parseInt(_0x6e6e59(0x47d))/(-0x20*0x100+-0x20f+0x2214)*(-parseInt(_0x6e6e59(0x6a9))/(-0xb0b*0x2+-0x1a30+0x304c))+parseInt(_0x6e6e59(0x5cc))/(-0x9d*0x4+-0x26b3+0x292e)+-parseInt(_0x6e6e59(0x39c))/(-0x246*0x3+-0x355*-0x1+0x385)*(parseInt(_0x6e6e59(0x585))/(-0xcbd+-0xe*-0x74+0x1*0x66e));if(_0x2d294c===_0x20a493)break;else _0x96bcd6['push'](_0x96bcd6['shift']());}catch(_0x27ed6d){_0x96bcd6['push'](_0x96bcd6['shift']());}}}(_0x43c9,0x78acd+0x1a9ad+0x1381*-0x12),((()=>{'use strict';var _0x1d7cb9=_0x2250,_0x3b6a23={'OFagi':_0x1d7cb9(0x1f4)+'wn','aQGSD':function(_0x2b7b88,_0x2cd5dc){return _0x2b7b88+_0x2cd5dc;},'tQdgu':_0x1d7cb9(0x6fd),'ROojJ':function(_0x5c0e05,_0x3af295){return _0x5c0e05!==_0x3af295;},'ZuMZd':function(_0xd2f44,_0x5a9b77){return _0xd2f44*_0x5a9b77;},'nAVeV':function(_0x288a9a,_0x2abc77){return _0x288a9a!==_0x2abc77;},'dmghJ':_0x1d7cb9(0x40a),'FGGKi':_0x1d7cb9(0x628)+_0x1d7cb9(0x2cd),'GwjTA':_0x1d7cb9(0x297)+'MODE\x20'+'-\x20ove'+_0x1d7cb9(0x2e8)+_0x1d7cb9(0x259)+_0x1d7cb9(0x6e3)+'ooks\x20'+'(relo'+_0x1d7cb9(0x1de)+'\x20exit'+')','LBWTD':_0x1d7cb9(0x1f9)+'bound'+'\x20','VWmsS':_0x1d7cb9(0x566)+'s','ASKaA':function(_0x3de477,_0x24bf6c){return _0x3de477===_0x24bf6c;},'CWvJS':_0x1d7cb9(0x1cb),'EcsQk':_0x1d7cb9(0x6a5)+'|1|2','wfPgo':_0x1d7cb9(0x2d4),'unARH':_0x1d7cb9(0x246),'vREOx':function(_0x31c44d,_0x51aa8b,_0x1e6abb,_0xd68322,_0x1dab96){return _0x31c44d(_0x51aa8b,_0x1e6abb,_0xd68322,_0x1dab96);},'XhbaH':'VwuqQ','PQULN':function(_0x379d3d,_0x393733){return _0x379d3d===_0x393733;},'SHzZC':function(_0x11f4ee,_0x55b604){return _0x11f4ee+_0x55b604;},'QSlhW':'0\x20hoo'+'ks\x20ar'+_0x1d7cb9(0x290)+_0x1d7cb9(0x68e)+_0x1d7cb9(0x4bb),'XWOuy':_0x1d7cb9(0x466),'Qtxia':function(_0x26eaa0,_0x31ec3a){return _0x26eaa0(_0x31ec3a);},'kBtlx':function(_0x2f813b,_0x3f0945){return _0x2f813b(_0x3f0945);},'ROqFP':function(_0x4d5416,_0x336c11){return _0x4d5416!==_0x336c11;},'xDFut':'f32','jjluz':function(_0x3fba80,_0x20ee38,_0x60e5f4,_0x7fb216,_0x569d23){return _0x3fba80(_0x20ee38,_0x60e5f4,_0x7fb216,_0x569d23);},'efhBQ':function(_0x5ca7c3,_0x3e601b){return _0x5ca7c3!==_0x3e601b;},'vPcSc':function(_0x4c298c,_0x5696f6){return _0x4c298c<_0x5696f6;},'zGWwq':function(_0x337c07,_0x1bd30e,_0x4810b2){return _0x337c07(_0x1bd30e,_0x4810b2);},'xuKoR':function(_0x25a1d6,_0x4e3b88,_0x5cc31f,_0x2bc9b6,_0x30ff02){return _0x25a1d6(_0x4e3b88,_0x5cc31f,_0x2bc9b6,_0x30ff02);},'nJxjO':_0x1d7cb9(0x1a2),'hpgLl':function(_0x38ca38,_0x224f44){return _0x38ca38+_0x224f44;},'oUVJl':_0x1d7cb9(0x5a1),'sARXw':function(_0xba16bf,_0x1adcd5){return _0xba16bf+_0x1adcd5;},'MKoac':function(_0x476e29,_0x5cdaa7){return _0x476e29>_0x5cdaa7;},'XekdN':'mouse'+'up','zmCaH':'inter'+'activ'+'e','hfzoS':'compl'+'ete','QmaAm':_0x1d7cb9(0x594),'dQxHw':_0x1d7cb9(0x4e8)+'creen'+_0x1d7cb9(0x5ad)+'s','wpcuD':'FjwZW','yXEjf':'none','ziLar':_0x1d7cb9(0x28b)+'n','Zsnvu':_0x1d7cb9(0x33a),'qBjng':'aria-'+_0x1d7cb9(0x5a7)+'ed','OOVoR':'input','cJOui':_0x1d7cb9(0x52c),'lGlSs':function(_0x38a857,_0x22b3cb){return _0x38a857!==_0x22b3cb;},'Wyaka':'VAyVa','KkQRe':'bMtZi','uGfMF':'selec'+'t','PnAIE':_0x1d7cb9(0x3d4),'LGdcB':_0x1d7cb9(0x522)+'n','yxwme':function(_0x3e1516){return _0x3e1516();},'dxIcK':'WWkao','bdWTJ':'sk-bt'+'n','PmODr':'div','tqqol':'\x20err','bqMQw':function(_0x434e6a){return _0x434e6a();},'fcItj':'Inser'+'t','rKbQZ':_0x1d7cb9(0x41f),'okUYX':function(_0x2669b2){return _0x2669b2();},'GGkaX':_0x1d7cb9(0x389)+'l','IgDIP':_0x1d7cb9(0x457),'MzlHF':_0x1d7cb9(0x561)+_0x1d7cb9(0x3e5),'FPpdY':'Skips'+_0x1d7cb9(0x54d)+_0x1d7cb9(0x2f8)+_0x1d7cb9(0x592)+_0x1d7cb9(0x3db)+'o\x20the'+'\x20reco'+_0x1d7cb9(0x4df)+_0x1d7cb9(0x56f)+'\x20neve'+'r\x20adv'+_0x1d7cb9(0x62b),'nZovF':function(_0x13b0ae,_0x1ab77b,_0x3cbec0,_0x5000b0,_0x124b88,_0x470e32){return _0x13b0ae(_0x1ab77b,_0x3cbec0,_0x5000b0,_0x124b88,_0x470e32);},'TYwZf':_0x1d7cb9(0x319)+_0x1d7cb9(0x224)+_0x1d7cb9(0x38b)+'Weapo'+_0x1d7cb9(0x48c)+_0x1d7cb9(0x5fc)+'\x20to\x201'+_0x1d7cb9(0x687)+_0x1d7cb9(0x3ee)+_0x1d7cb9(0x477)+_0x1d7cb9(0x479)+_0x1d7cb9(0x5df)+'\x20shot'+'s.','NlkEb':function(_0x539237,_0x12d983,_0x30827a,_0x23d994,_0x2be3f1,_0x2f11e5){return _0x539237(_0x12d983,_0x30827a,_0x23d994,_0x2be3f1,_0x2f11e5);},'OaMnG':'Overw'+_0x1d7cb9(0x4c1)+_0x1d7cb9(0x1b3)+_0x1d7cb9(0x646)+_0x1d7cb9(0x5ba)+'\x20dama'+_0x1d7cb9(0x63f)+'annab'+_0x1d7cb9(0x488)+'\x20the\x20'+_0x1d7cb9(0x4ba)+_0x1d7cb9(0x668)+_0x1d7cb9(0x508)+'s.','DoLjp':function(_0x31aa38,_0x180e08,_0x34f407,_0x445b7d,_0x163493,_0x25abf9){return _0x31aa38(_0x180e08,_0x34f407,_0x445b7d,_0x163493,_0x25abf9);},'XktuP':_0x1d7cb9(0x5fd)+_0x1d7cb9(0x59e)+'mmo\x20['+_0x1d7cb9(0x5f3),'xthqa':function(_0x5937dc,_0x2cae63){return _0x5937dc(_0x2cae63);},'vsTic':function(_0x557459,_0x2d13a2,_0xee662e,_0x1908d7,_0x21a50e,_0x5e1117){return _0x557459(_0x2d13a2,_0xee662e,_0x1908d7,_0x21a50e,_0x5e1117);},'NROuG':_0x1d7cb9(0x374),'SygRJ':'Speed'+'\x20%','rdUhs':function(_0x36ecb9,_0x3e4524){return _0x36ecb9!==_0x3e4524;},'Xsgnz':function(_0x196f47,_0x4f1db2,_0x37fde5,_0x340db7){return _0x196f47(_0x4f1db2,_0x37fde5,_0x340db7);},'CbFku':_0x1d7cb9(0x2bf)+'%','lhqOl':function(_0x2667bb,_0x4734ed,_0x3ec1bd,_0x5dc744,_0x59e674,_0x153544){return _0x2667bb(_0x4734ed,_0x3ec1bd,_0x5dc744,_0x59e674,_0x153544);},'ytLcQ':function(_0x31ae43,_0x20a07b,_0x4194f4,_0x5c21db,_0x26684d,_0x521a9c){return _0x31ae43(_0x20a07b,_0x4194f4,_0x5c21db,_0x26684d,_0x521a9c);},'eewxA':function(_0x5e7b3d,_0x4a30ff,_0x485e42,_0x1ce83d,_0x3878fe,_0x26ce98){return _0x5e7b3d(_0x4a30ff,_0x485e42,_0x1ce83d,_0x3878fe,_0x26ce98);},'qlOQA':'Keyst'+_0x1d7cb9(0x3a8),'OyXLM':_0x1d7cb9(0x235)+_0x1d7cb9(0x321)+'ht','BgnGw':_0x1d7cb9(0x5dc),'xKlqk':function(_0x1f93ff,_0x49e08f,_0x546aa6,_0x3097a6,_0xfc09c0,_0xef1cc1){return _0x1f93ff(_0x49e08f,_0x546aa6,_0x3097a6,_0xfc09c0,_0xef1cc1);},'dLKUg':'CPS\x20r'+_0x1d7cb9(0x3e0)+'t','RvhiS':function(_0x842ea0,_0x143013,_0x597f38,_0x2ee378,_0x3db4b0,_0x18f964){return _0x842ea0(_0x143013,_0x597f38,_0x2ee378,_0x3db4b0,_0x18f964);},'FRCXz':function(_0x5d9355,_0x5dcde5,_0x41625b,_0x2f34bc){return _0x5d9355(_0x5dcde5,_0x41625b,_0x2f34bc);},'cGkKZ':'Count'+'ers','iPgmc':_0x1d7cb9(0x445)+'verla'+'y.','lniLv':function(_0x11ac1a,_0x2a5a8b,_0x2e3313,_0x16405f){return _0x11ac1a(_0x2a5a8b,_0x2e3313,_0x16405f);},'zXrdG':_0x1d7cb9(0x580)+'ounte'+'r','WtIpZ':function(_0x2ecccd,_0x2aa645,_0x46497d,_0x225081,_0x453d68,_0x951d7e){return _0x2ecccd(_0x2aa645,_0x46497d,_0x225081,_0x453d68,_0x951d7e);},'JfOBF':'Adblo'+'ck','WRFjf':_0x1d7cb9(0x573)+'\x20kour'+'-io_*'+'\x20bann'+_0x1d7cb9(0x324)+'ots.','beIBN':function(_0x528b3c,_0x4a01d8){return _0x528b3c(_0x4a01d8);},'Xkmcy':function(_0x206c98,_0x115e5d,_0x578dd7,_0x34af9e,_0x5a490e,_0x14cc17){return _0x206c98(_0x115e5d,_0x578dd7,_0x34af9e,_0x5a490e,_0x14cc17);},'urpsq':'Safe\x20'+'Mode\x20'+'(over'+'lay\x20o'+'nly)','yMssF':'Each\x20'+'one\x20i'+_0x1d7cb9(0x69b)+_0x1d7cb9(0x2b9)+_0x1d7cb9(0x3dc)+_0x1d7cb9(0x1d2)+_0x1d7cb9(0x29c)+'\x20for\x20'+_0x1d7cb9(0x5fb)+_0x1d7cb9(0x3e1)+_0x1d7cb9(0x1bc)+'load.'+'\x20ALL\x20'+'OFF\x20b'+_0x1d7cb9(0x2ee)+'ault\x20'+'-\x20a\x20s'+_0x1d7cb9(0x6d6)+_0x1d7cb9(0x2c5)+'hat\x20d'+_0x1d7cb9(0x5f2)+_0x1d7cb9(0x551)+_0x1d7cb9(0x30d)+'he\x20re'+'al\x20me'+'thod\x20'+_0x1d7cb9(0x602)+_0x1d7cb9(0x6e1)+_0x1d7cb9(0x2b6)+_0x1d7cb9(0x504)+'natur'+_0x1d7cb9(0x4a8)+_0x1d7cb9(0x4f3)+_0x1d7cb9(0x69e)+'\x20mome'+_0x1d7cb9(0x480)+_0x1d7cb9(0x604)+'alled'+_0x1d7cb9(0x62a)+_0x1d7cb9(0x559)+_0x1d7cb9(0x5db)+_0x1d7cb9(0x1d3)+_0x1d7cb9(0x300)+_0x1d7cb9(0x431)+'reloa'+_0x1d7cb9(0x503)+_0x1d7cb9(0x2e1)+_0x1d7cb9(0x3b3)+_0x1d7cb9(0x24c)+_0x1d7cb9(0x5e3)+'\x20buil'+_0x1d7cb9(0x515)+'kes\x20o'+'n.','nhnoY':function(_0x2899f8,_0x55aa85){return _0x2899f8(_0x55aa85);},'VUAYl':_0x1d7cb9(0x43d)+_0x1d7cb9(0x698)+_0x1d7cb9(0x6ec)+'ad.','aXskl':_0x1d7cb9(0x531)+'OHeal'+_0x1d7cb9(0x3c8)+_0x1d7cb9(0x435)+'eTake'+_0x1d7cb9(0x6ea)+'h)','nMQgw':function(_0x5ce214,_0x57045b,_0x13adf4){return _0x5ce214(_0x57045b,_0x13adf4);},'hJgNC':'godDi'+'e\x20(OH'+'ealth'+'.Loca'+'lDie)','siWsN':_0x1d7cb9(0x2e9)+_0x1d7cb9(0x5c4)+_0x1d7cb9(0x2c9)+_0x1d7cb9(0x63d)+'ut\x20th'+'is','jhLAw':function(_0x1503c7,_0x58727f,_0x12b459){return _0x1503c7(_0x58727f,_0x12b459);},'yxzoC':function(_0x5b9818,_0xa8d0c9,_0x26901f,_0x5b2b46,_0x4c4857,_0xb9f3d1){return _0x5b9818(_0xa8d0c9,_0x26901f,_0x5b2b46,_0x4c4857,_0xb9f3d1);},'JLEbv':_0x1d7cb9(0x6ad)+_0x1d7cb9(0x446)+'r','xTLAz':'Dange'+'r','iOBkO':_0x1d7cb9(0x4d5)+'\x20leav'+'e\x20ser'+_0x1d7cb9(0x462)+'isibl'+_0x1d7cb9(0x587)+'ces.','mMTJh':_0x1d7cb9(0x669)+'my\x20se'+_0x1d7cb9(0x4ac)+'s','nFlHB':function(_0x1d695f,_0x29ff89,_0x171cd5){return _0x1d695f(_0x29ff89,_0x171cd5);},'iykwO':function(_0x144154,_0x3db89b){return _0x144154!==_0x3db89b;},'qLYPz':_0x1d7cb9(0x47a),'meEnb':_0x1d7cb9(0x626),'ISLSu':_0x1d7cb9(0x277),'NYgzM':'esxGC','tVXdU':'Unity'+_0x1d7cb9(0x39a)+_0x1d7cb9(0x2f3)+_0x1d7cb9(0x268)+'ion','ZStRQ':'sakur'+'a.kou'+_0x1d7cb9(0x1cf),'yudZs':function(_0x3922df,_0x3498e8){return _0x3922df<_0x3498e8;},'bcdZS':function(_0x49c1a0,_0x4f4be0){return _0x49c1a0/_0x4f4be0;},'UdHSv':function(_0xc0c4ee,_0x5a0715){return _0xc0c4ee(_0x5a0715);},'ADrLJ':function(_0xb1f0ed,_0x2d8c4e){return _0xb1f0ed+_0x2d8c4e;},'GhGWX':function(_0x55e0a4,_0x2ab5a6,_0x56f2d3,_0x298f90,_0x2b97cb,_0x271c11,_0x27fe0e){return _0x55e0a4(_0x2ab5a6,_0x56f2d3,_0x298f90,_0x2b97cb,_0x271c11,_0x27fe0e);},'ytjRp':_0x1d7cb9(0x40b),'DbHDP':_0x1d7cb9(0x5a1)+'3','pOxUo':_0x1d7cb9(0x36e),'OHBgC':function(_0x20be3e,_0xd8de8c){return _0x20be3e-_0xd8de8c;},'Uugii':'raIHT','RzKfZ':_0x1d7cb9(0x505)+_0x1d7cb9(0x6d4)+_0x1d7cb9(0x226)+'1','onhYE':function(_0x3008d1){return _0x3008d1();},'zyhzz':_0x1d7cb9(0x225),'rgrDa':function(_0x531179,_0xcfe41c){return _0x531179(_0xcfe41c);},'sNLdN':function(_0x5d9a04,_0x5e3395){return _0x5d9a04(_0x5e3395);},'VVEBz':'\x20on','kHqdG':'stron'+'g','hBrvk':function(_0x3c9664,_0x4221da){return _0x3c9664+_0x4221da;},'iQqOf':'loadi'+'ng','aOAPp':_0x1d7cb9(0x59b)+'s','nNten':_0x1d7cb9(0x1f8)+_0x1d7cb9(0x6f3)+_0x1d7cb9(0x302),'MhvnW':'CDemr','vzQky':_0x1d7cb9(0x453),'JvoHV':function(_0xe6ecc0){return _0xe6ecc0();},'oHfbM':_0x1d7cb9(0x442)+'desc','PyJhT':'nav','BsZkI':'heade'+'r','MDhdh':_0x1d7cb9(0x50a)+'p','ZBfwt':_0x1d7cb9(0x232)+_0x1d7cb9(0x352)+_0x1d7cb9(0x63c)+'enu','QuKPJ':_0x1d7cb9(0x6ee)+'l>','jnlEX':_0x1d7cb9(0x649)+'ll>','ZAgFl':function(_0x4623d9,_0xdf5616){return _0x4623d9+_0xdf5616;},'lVIaq':'nxGBk','DSCSy':_0x1d7cb9(0x2ca),'etAKV':'canva'+'s','sRbKE':_0x1d7cb9(0x5bf)+'ion:f'+_0x1d7cb9(0x450)+_0x1d7cb9(0x344)+_0x1d7cb9(0x653)+'index'+_0x1d7cb9(0x322)+'48364'+_0x1d7cb9(0x6dd)+_0x1d7cb9(0x527)+_0x1d7cb9(0x29d)+'s:non'+'e;','gIRHP':'open','hGfzJ':'Comba'+'t','BiKEi':_0x1d7cb9(0x358),'ucMmd':_0x1d7cb9(0x69f),'nTyFa':_0x1d7cb9(0x1ac)+'y','WMAHb':_0x1d7cb9(0x1f7)+'wn','JlTmt':_0x1d7cb9(0x5bf)+_0x1d7cb9(0x2b8)+'ixed;'+'top:1'+'2px;r'+_0x1d7cb9(0x223)+_0x1d7cb9(0x434)+'z-ind'+_0x1d7cb9(0x581)+_0x1d7cb9(0x4e5)+_0x1d7cb9(0x331)+'ursor'+_0x1d7cb9(0x700)+_0x1d7cb9(0x475)+_0x1d7cb9(0x6bc)+'26px;'+'heigh'+_0x1d7cb9(0x3f2)+_0x1d7cb9(0x444)+'city:'+_0x1d7cb9(0x688)+'ransi'+_0x1d7cb9(0x4c8)+'opaci'+'ty\x200.'+'2s;po'+'inter'+'-even'+_0x1d7cb9(0x393)+'to;fi'+'lter:'+'drop-'+_0x1d7cb9(0x57c)+'w(0\x200'+_0x1d7cb9(0x27b)+'rgba('+'255,1'+'07,15'+_0x1d7cb9(0x588)+'))','ChBkN':_0x1d7cb9(0x560)+'9d','UowWc':'#ffb3'+'c6','KMjIB':function(_0x36edbe,_0x49c985,_0x54c77a,_0x17f77b,_0x246be6,_0x472120,_0x3faa67,_0x45f3ff){return _0x36edbe(_0x49c985,_0x54c77a,_0x17f77b,_0x246be6,_0x472120,_0x3faa67,_0x45f3ff);},'ERunc':_0x1d7cb9(0x591),'fmACL':function(_0x34990d,_0x56b94e,_0x5d8f77,_0xb90d01,_0x5be0f3,_0x15e328,_0x2dd3a3,_0x4422b5){return _0x34990d(_0x56b94e,_0x5d8f77,_0xb90d01,_0x5be0f3,_0x15e328,_0x2dd3a3,_0x4422b5);},'AmTOj':_0x1d7cb9(0x273)+'th','nqgFJ':_0x1d7cb9(0x311)+'Die','Vcxcl':_0x1d7cb9(0x6c1)+'oil','dILvE':_0x1d7cb9(0x552)+'nPlat'+'forms'+_0x1d7cb9(0x396)+_0x1d7cb9(0x342)+_0x1d7cb9(0x441)+_0x1d7cb9(0x333)+'on','mwDNv':_0x1d7cb9(0x4a2)+_0x1d7cb9(0x2dd)+_0x1d7cb9(0x664),'utIGR':'Legio'+'nPlat'+_0x1d7cb9(0x26e)+'.Over'+_0x1d7cb9(0x342)+'Movem'+_0x1d7cb9(0x6f6),'BzmbZ':'IsGro'+_0x1d7cb9(0x257)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+'ame']||''))return;if(window[_0x1d7cb9(0x1e5)+_0x1d7cb9(0x528)+'OUR__'])return;window[_0x1d7cb9(0x1e5)+'URA_K'+'OUR__']=!![];var _0x4a1dfb=_0x3b6a23[_0x1d7cb9(0x4ad)],_0x2a99d2=_0x3b6a23['UowWc'],_0x4eda84={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x9c6b2f={..._0x4eda84};try{Object['assig'+'n'](_0x9c6b2f,JSON['parse'](localStorage[_0x1d7cb9(0x579)+'em'](_0x1d7cb9(0x699)+_0x1d7cb9(0x1c6)+_0x1d7cb9(0x1cf))||'{}'));}catch(_0x22550c){}function _0x308445(){var _0x2ac92c=_0x1d7cb9;try{localStorage[_0x2ac92c(0x6fe)+'em'](_0x2ac92c(0x699)+'a.kou'+'r.v1',JSON['strin'+_0x2ac92c(0x4b2)](_0x9c6b2f));}catch(_0x5e2a45){}}var _0x58d4d2={'uwmk':!!window[_0x1d7cb9(0x3ed)+_0x1d7cb9(0x35c)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x9c6b2f['safeM'+_0x1d7cb9(0x3e5)],'lastError':''};try{window['addEv'+'entLi'+_0x1d7cb9(0x572)+'r'](_0x1d7cb9(0x1db),_0x4b0ace=>{var _0x120184=_0x1d7cb9;try{var _0x3d5b94=_0x4b0ace&&(_0x4b0ace['messa'+'ge']||_0x4b0ace['error']&&_0x4b0ace[_0x120184(0x1db)][_0x120184(0x68d)+'ge'])||_0x3b6a23[_0x120184(0x6e7)];if(_0x4b0ace&&_0x4b0ace[_0x120184(0x304)+'ame'])_0x3d5b94+=_0x3b6a23['aQGSD'](_0x3b6a23[_0x120184(0x62d)]+String(_0x4b0ace['filen'+_0x120184(0x438)])[_0x120184(0x578)]('/')[_0x120184(0x4b4)](),':')+(_0x4b0ace['linen'+'o']||'?');_0x58d4d2['lastE'+_0x120184(0x436)]=String(_0x3d5b94)['slice'](0x1*0xb91+0x307*0x1+-0xe98,0x149f+0xe*0x11b+0x3*-0xbd3);}catch(_0xba3cf9){}});}catch(_0x1fbbea){}var _0x512cce=null,_0x51d458=null,_0x4b0040={},_0x4eed0d=[],_0x17e623=[],_0x2d6a63=new Map();function _0x4f9f0b(_0x42d144,_0x2c3369){var _0x4e4daf=_0x1d7cb9;if(!_0x2c3369||_0x42d144['inclu'+_0x4e4daf(0x623)](_0x2c3369)||_0x42d144['lengt'+'h']>-0xc3e*-0x1+-0x2*0xd2a+0xe56)return;_0x42d144['push'](_0x2c3369);}function _0x5d4b5f(_0x2483c7,_0x1ecbf0,_0x29d6b6,_0x2ed191){var _0x13a3b4=_0x1d7cb9,_0x377154=0x9f*0xd+-0x1*-0xfb5+-0x17c8;try{_0x377154=_0x1ecbf0&&_0x1ecbf0['val']?_0x1ecbf0['val']():-0x1*0x243e+0x6c4+0xebd*0x2;}catch(_0x5dfebf){}if(!_0x377154)return;_0x4f9f0b(_0x2483c7,_0x377154),_0x29d6b6[_0x2ed191]=_0x2483c7['lengt'+'h'];if(_0x2ed191===_0x13a3b4(0x2f0)+_0x13a3b4(0x702)&&_0x2483c7[_0x13a3b4(0x4cb)+'h']){var _0x595d6a=_0x4b0040[_0x13a3b4(0x400)+'ve'];if(_0x595d6a)try{_0x595d6a[_0x13a3b4(0x2c6)+'ed']=![];}catch(_0x14f5e8){}}}function _0x3cd173(_0x4cd15b,_0x4f0a7e,_0x16afb7){var _0xa9e225=_0x1d7cb9,_0x342411=_0x2d6a63[_0xa9e225(0x4b9)](_0x4cd15b);if(!_0x342411){if('lqbZK'!==_0xa9e225(0x6a3))return-0x5*0x25+0x1bad+-0x1af4;else _0x342411=new Map(),_0x2d6a63[_0xa9e225(0x234)](_0x4cd15b,_0x342411);}if(!_0x342411['has'](_0x4f0a7e))try{var _0x2c6004=new _0x512cce(_0x4cd15b)['readF'+_0xa9e225(0x43a)](_0x4f0a7e,_0x16afb7);_0x342411[_0xa9e225(0x234)](_0x4f0a7e,_0x3b6a23['ROojJ'](_0x2c6004,undefined)?_0x2c6004['val']():null);}catch(_0x233426){_0x342411[_0xa9e225(0x234)](_0x4f0a7e,null);}return _0x342411[_0xa9e225(0x4b9)](_0x4f0a7e);}function _0x2ce22e(_0x40edea,_0x3807a0,_0x4ec584,_0x5a5c72){var _0x158238=_0x1d7cb9;try{new _0x512cce(_0x40edea)[_0x158238(0x6b1)+_0x158238(0x595)](_0x3807a0,_0x4ec584,_0x5a5c72);}catch(_0x5c4348){}}function _0x279510(_0x5a815b,_0x3a9a9f){var _0x500fe2=_0x1d7cb9;try{var _0xff02a3=new _0x512cce(_0x5a815b)[_0x500fe2(0x19f)+'ield'](_0x3a9a9f,_0x500fe2(0x661));return _0xff02a3?_0xff02a3[_0x500fe2(0x3bf)]():0x1984+0x1f21+-0x38a5*0x1;}catch(_0x5cdef9){return 0x4e5+-0x141e+0xf39;}}function _0x2b134d(_0x598ad,_0x3f3056,_0x4e17a1,_0x14439f){var _0xa6dbc=_0x3cd173(_0x598ad,_0x3f3056,_0x4e17a1);if(_0xa6dbc!=null)_0x2ce22e(_0x598ad,_0x3f3056,_0x4e17a1,_0x3b6a23['ZuMZd'](_0xa6dbc,_0x14439f));}function _0x5bdfb9(_0x498348,_0x54a1fe,_0x39f1f5,_0x11761f,_0x1eae77,_0x123b59,_0x355d17){var _0x2f0311=_0x1d7cb9,_0x92b329={'Opbsw':_0x2f0311(0x58e)};try{if(_0x3b6a23[_0x2f0311(0x67f)](_0x3b6a23[_0x2f0311(0x1ca)],_0x3b6a23[_0x2f0311(0x1ca)])){var _0x123550=_0x13815d[_0x2f0311(0x671)+_0x2f0311(0x1a6)];for(var _0x138cb3=0x12cf+-0x193d+0x66e*0x1;_0x138cb3<_0x123550[_0x2f0311(0x4cb)+'h'];_0x138cb3++){if(_0x123550[_0x138cb3]['id']&&_0x123550[_0x138cb3]['id']['index'+'Of'](_0x2f0311(0x1e0)+_0x2f0311(0x56b))===0x31b*0x3+0x703+-0x1a2*0xa)_0x123550[_0x138cb3]['style'][_0x2f0311(0x228)+'ay']=_0x92b329[_0x2f0311(0x21b)];}}else{var _0x57dd66=_0x3b6a23[_0x2f0311(0x279)][_0x2f0311(0x578)]('|'),_0x190a69=0x1*0x22be+-0x110e+-0x11b0;while(!![]){switch(_0x57dd66[_0x190a69++]){case'0':var _0x49e68c=_0x51d458[_0x2f0311(0x3f8)+_0x2f0311(0x330)]({'typeName':_0x54a1fe,'methodName':_0x39f1f5,'params':_0x11761f,'returnType':_0x1eae77},_0x123b59);continue;case'1':return _0x49e68c;case'2':_0x58d4d2['hooks'+'Total']++;continue;case'3':_0x49e68c[_0x2f0311(0x2c6)+'ed']=_0x355d17!==![];continue;case'4':_0x4b0040[_0x498348]=_0x49e68c;continue;}break;}}}catch(_0x31123a){return console[_0x2f0311(0x293)](_0x2f0311(0x476)+'ra-ko'+'ur]\x20h'+_0x2f0311(0x56e)+'eg\x20fa'+'iled:',_0x498348,_0x31123a&&_0x31123a[_0x2f0311(0x68d)+'ge']),null;}}function _0xf870f9(_0x2c6948,_0x5877be,_0x340169,_0x34fed2,_0x53cc79,_0x118962,_0x20e4ed){var _0x2b6d7a=_0x1d7cb9,_0x17342e={'KzrvL':_0x3b6a23['GwjTA'],'LsiRq':function(_0x24adbf,_0x5e02bb){return _0x24adbf+_0x5e02bb;},'HpUsR':function(_0x24c72e,_0x176d3b){return _0x24c72e+_0x176d3b;},'ekdxW':_0x3b6a23['LBWTD'],'iFpJU':function(_0x4e0204,_0x1f41e8){return _0x4e0204+_0x1f41e8;},'aIAdP':_0x3b6a23['VWmsS'],'auJcZ':_0x2b6d7a(0x68a)+_0x2b6d7a(0x3fd)+_0x2b6d7a(0x290)+_0x2b6d7a(0x68e)+_0x2b6d7a(0x4bb),'KtTsL':_0x2b6d7a(0x269)+_0x2b6d7a(0x4d8)+'\x20','aMQAZ':'held','OnWkT':_0x2b6d7a(0x58e)};if('Umvdn'!==_0x2b6d7a(0x64e))_0x2e1650={..._0x441f4b},_0x281c96(),_0x266954[_0x2b6d7a(0x5c5)+'d']();else try{if(_0x3b6a23[_0x2b6d7a(0x4e3)](_0x2b6d7a(0x1cb),_0x3b6a23['CWvJS'])){var _0xb48889=_0x3b6a23[_0x2b6d7a(0x708)][_0x2b6d7a(0x578)]('|'),_0x5e746f=0x17bf+-0x5*0x9f+-0x14a4;while(!![]){switch(_0xb48889[_0x5e746f++]){case'0':_0x4b0040[_0x2c6948]=_0x105bbf;continue;case'1':_0x58d4d2[_0x2b6d7a(0x658)+_0x2b6d7a(0x206)]++;continue;case'2':return _0x105bbf;case'3':var _0x105bbf=_0x51d458['hookP'+_0x2b6d7a(0x2bc)+'x']({'typeName':_0x5877be,'methodName':_0x340169,'params':_0x34fed2,'returnType':_0x53cc79},_0x118962);continue;case'4':_0x105bbf[_0x2b6d7a(0x2c6)+'ed']=_0x20e4ed!==![];continue;}break;}}else _0x2ca87e[_0x2b6d7a(0x518)](_0x5ad219[_0x2b6d7a(0x67d)]);}catch(_0x8eb548){if(_0x3b6a23['wfPgo']!==_0x3b6a23[_0x2b6d7a(0x5d6)])return console['warn']('[saku'+_0x2b6d7a(0x50c)+_0x2b6d7a(0x222)+_0x2b6d7a(0x56e)+_0x2b6d7a(0x2f7)+_0x2b6d7a(0x386),_0x2c6948,_0x8eb548&&_0x8eb548[_0x2b6d7a(0x68d)+'ge']),null;else _0x2e3b91[_0x2b6d7a(0x635)+_0x2b6d7a(0x312)+'t']=_0x4fe2f6[_0x2b6d7a(0x3c6)+_0x2b6d7a(0x3e5)]?_0x17342e['KzrvL']:_0x1a63e0['uwmk']?_0x17342e[_0x2b6d7a(0x510)](_0x17342e['HpUsR'](_0x17342e['HpUsR'](_0x17342e[_0x2b6d7a(0x372)]+(_0x3c1206['hooks'+_0x2b6d7a(0x206)]?_0x17342e[_0x2b6d7a(0x677)](_0x17342e[_0x2b6d7a(0x56c)](_0x547e8e[_0x2b6d7a(0x658)+'Ok'],'/'),_0x5118ee[_0x2b6d7a(0x658)+'Total'])+_0x17342e[_0x2b6d7a(0x5cf)]:_0x17342e[_0x2b6d7a(0x6a1)])+(_0x2b6d7a(0x346)+'me\x20'),_0x11c250[_0x2b6d7a(0x306)+_0x2b6d7a(0x5b8)]?_0x2b6d7a(0x625)+'d':_0x2b6d7a(0x1b0)+'ng')+_0x17342e['KtTsL']+(_0x29637a[_0x2b6d7a(0x207)+_0x2b6d7a(0x412)]?_0x17342e[_0x2b6d7a(0x32a)]:_0x2b6d7a(0x58e)),'\x20|\x20mo'+'vemen'+'t\x20')+(_0x2f4c89['movem'+_0x2b6d7a(0x702)]?'held':_0x17342e['OnWkT']),_0x198824[_0x2b6d7a(0x467)+_0x2b6d7a(0x436)]?_0x2b6d7a(0x535)+'R:\x20'+_0x5dff39[_0x2b6d7a(0x467)+'rror']:''):'UWMK\x20'+'MISSI'+_0x2b6d7a(0x29a)+'overl'+_0x2b6d7a(0x33d)+'ly\x20(r'+_0x2b6d7a(0x3ec)+'all\x20t'+_0x2b6d7a(0x251)+'erscr'+'ipt)';}}var _0x5c1b51=()=>![];try{if(window['Unity'+_0x1d7cb9(0x35c)+_0x1d7cb9(0x2d3)]&&!_0x9c6b2f['safeM'+_0x1d7cb9(0x3e5)]){_0x512cce=window[_0x1d7cb9(0x3ed)+_0x1d7cb9(0x35c)+'dkit']['Value'+_0x1d7cb9(0x3c2)+'er'],_0x51d458=window[_0x1d7cb9(0x3ed)+_0x1d7cb9(0x35c)+'dkit'][_0x1d7cb9(0x4dc)+'me'][_0x1d7cb9(0x37f)+'ePlug'+'in']({'name':_0x1d7cb9(0x27c)+'aKour','version':_0x1d7cb9(0x2c3),'referencedAssemblies':['Assem'+'bly-C'+_0x1d7cb9(0x639)+_0x1d7cb9(0x5e9)]});if(_0x9c6b2f[_0x1d7cb9(0x2df)+'od'])_0x3b6a23[_0x1d7cb9(0x23a)](_0x5bdfb9,_0x3b6a23[_0x1d7cb9(0x36c)],'OHeal'+'th',_0x1d7cb9(0x533)+_0x1d7cb9(0x45c)+'keHea'+_0x1d7cb9(0x60a),[_0x1d7cb9(0x1a2),_0x1d7cb9(0x1a2)],undefined,_0x5c1b51,!!_0x9c6b2f[_0x1d7cb9(0x591)]);if(_0x9c6b2f[_0x1d7cb9(0x2df)+'odDie'])_0x3b6a23[_0x1d7cb9(0x35d)](_0x5bdfb9,_0x1d7cb9(0x4e0)+'e',_0x3b6a23['AmTOj'],_0x3b6a23['nqgFJ'],[_0x3b6a23['nJxjO'],_0x1d7cb9(0x1a2),_0x1d7cb9(0x1a2),_0x1d7cb9(0x1a2),_0x1d7cb9(0x1a2)],undefined,_0x5c1b51,!!_0x9c6b2f['god']);if(_0x9c6b2f[_0x1d7cb9(0x51f)+_0x1d7cb9(0x5e2)+'il'])_0x5bdfb9(_0x3b6a23['Vcxcl'],_0x3b6a23[_0x1d7cb9(0x19d)],_0x1d7cb9(0x541),[_0x3b6a23[_0x1d7cb9(0x47c)]],undefined,_0x5c1b51,!!_0x9c6b2f[_0x1d7cb9(0x6c1)+_0x1d7cb9(0x40d)]);if(_0x9c6b2f[_0x1d7cb9(0x24b)+'aptur'+'e'])_0xf870f9('capSh'+'ooter',_0x1d7cb9(0x354)+_0x1d7cb9(0x3b7),_0x3b6a23[_0x1d7cb9(0x233)],['i32',_0x1d7cb9(0x1a2)],undefined,(_0x4f61d1,_0x3a2497)=>{var _0x191d5a=_0x1d7cb9;_0x3b6a23[_0x191d5a(0x2d2)](_0x5d4b5f,_0x17e623,_0x3a2497,_0x58d4d2,_0x191d5a(0x207)+'ers');},!![]);if(_0x9c6b2f[_0x1d7cb9(0x24b)+'aptur'+'e'])_0xf870f9(_0x1d7cb9(0x400)+'ve',_0x3b6a23[_0x1d7cb9(0x43e)],_0x3b6a23['BzmbZ'],['i32'],'i32',(_0xc54c3a,_0x3225d0)=>{_0x5d4b5f(_0x4eed0d,_0x3225d0,_0x58d4d2,'movem'+'ents');},!![]);}}catch(_0x509a1e){console[_0x1d7cb9(0x293)](_0x1d7cb9(0x476)+'ra-ko'+'ur]\x20U'+'WMK\x20i'+'nit\x20f'+_0x1d7cb9(0x670)+':',_0x509a1e&&_0x509a1e['messa'+'ge']);}function _0x125530(_0x2e4a0d,_0x39da29){var _0x30c6aa=_0x1d7cb9,_0x12404f={'LkPiX':function(_0x68c5ad,_0x258a3c){return _0x68c5ad(_0x258a3c);}},_0x254590=_0x4b0040[_0x2e4a0d];if(_0x254590){if(_0x3b6a23[_0x30c6aa(0x583)]!==_0x3b6a23[_0x30c6aa(0x583)])_0x12404f['LkPiX'](_0x417cf6,!_0xb46ba5);else try{_0x3b6a23[_0x30c6aa(0x265)]('DegVd',_0x30c6aa(0x3c3))?_0x254590['enabl'+'ed']=!!_0x39da29:_0x45f34b[_0x30c6aa(0x696)+'e'](_0x35ba2b[_0x30c6aa(0x67d)]);}catch(_0x29805f){}}}setInterval(()=>{var _0x2b1baf=_0x1d7cb9,_0x289d7a={'JgRCT':function(_0x46dc74,_0x119cf1){return _0x46dc74===_0x119cf1;},'EhlZG':function(_0x2c6540,_0x43655b){var _0x12c119=_0x2250;return _0x3b6a23[_0x12c119(0x5c8)](_0x2c6540,_0x43655b);},'YzDay':function(_0x223d1a,_0x1ac818){return _0x223d1a+_0x1ac818;},'NeTwV':function(_0x1a1116,_0x5928a7){var _0x19d022=_0x2250;return _0x3b6a23[_0x19d022(0x693)](_0x1a1116,_0x5928a7);},'XedMf':_0x3b6a23['VWmsS'],'biuGX':_0x3b6a23[_0x2b1baf(0x70a)],'gMPJX':_0x2b1baf(0x346)+_0x2b1baf(0x4bd),'KlUoJ':_0x2b1baf(0x269)+'ooter'+'\x20','tTcRr':'\x20|\x20mo'+'vemen'+'t\x20','VObGs':_0x3b6a23[_0x2b1baf(0x381)],'yHkzt':_0x2b1baf(0x535)+'R:\x20'};if(!_0x512cce||!window[_0x2b1baf(0x3c0)+_0x2b1baf(0x52e)+'nce'])return;var _0x4320e5=(Number(_0x9c6b2f['speed'+'Pct'])||-0x154+0x926+-0x76e)/(-0x659+0x92*0x3f+-0x1d31*0x1),_0x3360f7=(_0x3b6a23['Qtxia'](Number,_0x9c6b2f['jumpP'+'ct'])||0x1*-0x1fc+0x164f+-0x13ef)/(0xe4d*-0x2+-0x1*-0xffd+0xd01),_0x44841a=(_0x3b6a23['kBtlx'](Number,_0x9c6b2f['gravi'+_0x2b1baf(0x66a)])||-0x2ca+0xa88*-0x3+0x22c6)/(-0xd*-0x9a+-0x22a*-0x1+-0x266*0x4),_0x172eac=Math['max'](-0xe1d+-0xde4+0xa*0x2cd,Number(_0x9c6b2f[_0x2b1baf(0x4f9)+'eValu'+'e'])||-0x1*-0xae7+0x2f9*0x3+0x133c*-0x1),_0x252e19=_0x3b6a23[_0x2b1baf(0x645)](_0x4320e5,-0x2558+-0x563*-0x4+0xfcd)||_0x3360f7!==-0x252d*-0x1+0x1*-0xfc1+-0x156b||_0x3b6a23[_0x2b1baf(0x645)](_0x44841a,-0x245b*0x1+0x137a+0x10e2)||_0x9c6b2f[_0x2b1baf(0x23f)],_0x8ab044=_0x9c6b2f[_0x2b1baf(0x36b)+_0x2b1baf(0x656)]||_0x9c6b2f[_0x2b1baf(0x4f9)+_0x2b1baf(0x6c4)]||_0x9c6b2f['infAm'+'moExp']||_0x9c6b2f[_0x2b1baf(0x5f4)+_0x2b1baf(0x622)];if(!_0x252e19&&!_0x8ab044)return;try{for(var _0x158d34=-0x1a3f*0x1+-0x1*0xbf6+0x2635;_0x158d34<_0x4eed0d[_0x2b1baf(0x4cb)+'h'];_0x158d34++){var _0x531cb9=_0x4eed0d[_0x158d34];if(!_0x531cb9)continue;if(_0x4320e5!==-0x510+-0x2*-0x12f4+-0x20d7){var _0x4f351a=(_0x2b1baf(0x70d)+'|0|3|'+'5')[_0x2b1baf(0x578)]('|'),_0x5eb654=0x7ae+0x10*0x3d+-0xb7e;while(!![]){switch(_0x4f351a[_0x5eb654++]){case'0':_0x2b134d(_0x531cb9,-0x1548+0x2*0x1eb+0xfb*0x12,_0x3b6a23[_0x2b1baf(0x416)],_0x4320e5);continue;case'1':_0x3b6a23[_0x2b1baf(0x2d2)](_0x2b134d,_0x531cb9,0x1818+-0x1eaa+0x2*0x35f,_0x3b6a23[_0x2b1baf(0x416)],_0x4320e5);continue;case'2':_0x2b134d(_0x531cb9,-0x103+-0x1f55+-0x822*-0x4,_0x3b6a23[_0x2b1baf(0x416)],_0x4320e5);continue;case'3':_0x3b6a23[_0x2b1baf(0x2d2)](_0x2b134d,_0x531cb9,-0x13*0x21+-0x141c+0x16ab,_0x2b1baf(0x5f0),_0x4320e5);continue;case'4':_0x3b6a23[_0x2b1baf(0x48b)](_0x2b134d,_0x531cb9,-0x1818+0x1a94+-0x254,_0x2b1baf(0x5f0),_0x4320e5);continue;case'5':_0x2b134d(_0x531cb9,0x1bf+-0x1593+0x13f4,'f32',_0x4320e5);continue;}break;}}if(_0x3b6a23[_0x2b1baf(0x295)](_0x3360f7,-0x3*-0x5ba+0x267*-0x1+-0xec6))_0x2b134d(_0x531cb9,0x1233+-0x4*0x722+-0xaa5*-0x1,_0x3b6a23['xDFut'],_0x3360f7);if(_0x44841a!==-0xd*-0x119+0x8bd*-0x3+0x17*0x85){if('uwilk'===_0x2b1baf(0x5cd))_0x3b6a23[_0x2b1baf(0x2d2)](_0x2b134d,_0x531cb9,0x26ee+0x541*-0x6+-0x720,_0x2b1baf(0x5f0),_0x44841a),_0x2b134d(_0x531cb9,-0x7*0x516+0x26d3+-0x2ed,_0x3b6a23[_0x2b1baf(0x416)],_0x44841a);else{var _0x2a18a0=_0x2d7760[_0x2a4140][_0x2b1baf(0x53b)+_0x2b1baf(0x301)+_0x2b1baf(0x6ce)](_0x2b1baf(0x442)+_0x2b1baf(0x42a));_0x2a18a0&&(_0x289d7a[_0x2b1baf(0x401)](_0x2a18a0[_0x2b1baf(0x635)+_0x2b1baf(0x312)+'t'][_0x2b1baf(0x481)+'Of'](_0x2b1baf(0x410)),-0xfd5+-0x1db1+0x2d86*0x1)||_0x2a18a0['textC'+_0x2b1baf(0x312)+'t'][_0x2b1baf(0x481)+'Of'](_0x2b1baf(0x562))===-0xf5e*-0x2+-0x8*0x203+-0x752*0x2)&&(_0x2a18a0['textC'+'onten'+'t']=_0x5aa7f7[_0x2b1baf(0x3c6)+_0x2b1baf(0x3e5)]?'SAFE\x20'+'MODE\x20'+_0x2b1baf(0x2ec)+'rlay\x20'+_0x2b1baf(0x259)+_0x2b1baf(0x6e3)+'ooks\x20'+'(relo'+_0x2b1baf(0x1de)+_0x2b1baf(0x1c1)+')':_0x4aa1b0[_0x2b1baf(0x230)]?_0x289d7a['EhlZG'](_0x289d7a[_0x2b1baf(0x2f6)](_0x289d7a[_0x2b1baf(0x363)](_0x2b1baf(0x1f9)+'bound'+'\x20',_0x589edb[_0x2b1baf(0x658)+_0x2b1baf(0x206)]?_0x289d7a['YzDay'](_0x398c32['hooks'+'Ok']+'/'+_0x3f15f5[_0x2b1baf(0x658)+_0x2b1baf(0x206)],_0x289d7a['XedMf']):_0x289d7a[_0x2b1baf(0x60c)])+_0x289d7a[_0x2b1baf(0x41c)],_0x347946['gameL'+_0x2b1baf(0x5b8)]?_0x2b1baf(0x625)+'d':'loadi'+'ng')+_0x289d7a[_0x2b1baf(0x2e5)]+(_0x33897c['shoot'+'ers']?'held':_0x2b1baf(0x58e)),_0x289d7a[_0x2b1baf(0x2ac)])+(_0xef59f5[_0x2b1baf(0x2f0)+'ents']?_0x289d7a[_0x2b1baf(0x415)]:'none')+(_0x8281e7[_0x2b1baf(0x467)+_0x2b1baf(0x436)]?_0x289d7a[_0x2b1baf(0x6b3)]+_0x4458c7['lastE'+_0x2b1baf(0x436)]:''):'UWMK\x20'+_0x2b1baf(0x532)+_0x2b1baf(0x29a)+_0x2b1baf(0x458)+_0x2b1baf(0x33d)+'ly\x20(r'+'einst'+'all\x20t'+_0x2b1baf(0x251)+'erscr'+'ipt)');}}if(_0x9c6b2f[_0x2b1baf(0x23f)])_0x2ce22e(_0x531cb9,-0x20d3*-0x1+-0x1*-0x1a2b+-0x3a62,'f32',-(-0x1f4b*0x1+0x241a+-0x1d*0x8));}}catch(_0x1553d3){}try{for(var _0x45d6f6=0x1df9*-0x1+0x266c+-0x1*0x873;_0x3b6a23[_0x2b1baf(0x3ad)](_0x45d6f6,_0x17e623[_0x2b1baf(0x4cb)+'h']);_0x45d6f6++){var _0x22f093=_0x3b6a23['zGWwq'](_0x279510,_0x17e623[_0x45d6f6],0xc*-0x1e7+0x163*-0x7+-0x5*-0x68d);if(!_0x22f093)continue;_0x9c6b2f['damag'+_0x2b1baf(0x6c4)]&&(_0x3b6a23[_0x2b1baf(0x5a3)](_0x2ce22e,_0x22f093,-0x1*0x1381+0x1*-0x26c+0x1639,_0x3b6a23[_0x2b1baf(0x47c)],_0x172eac),_0x3b6a23[_0x2b1baf(0x5a3)](_0x2ce22e,_0x22f093,0x19d*0xd+-0x1*0x79+0x4*-0x50b,_0x3b6a23[_0x2b1baf(0x47c)],_0x172eac));_0x9c6b2f[_0x2b1baf(0x36b)+_0x2b1baf(0x656)]&&(_0x2ce22e(_0x22f093,0x2352+-0x7*-0x12b+-0x2af7,_0x3b6a23['xDFut'],-0x1*-0xf86+0x1*0x1a5a+0xa78*-0x4),_0x2ce22e(_0x22f093,-0x86*-0x1d+0x8fa+0xa0*-0x26,_0x2b1baf(0x5f0),-0xf16+-0x8f0+0x1807));if(_0x9c6b2f['infAm'+_0x2b1baf(0x4ed)])_0x3b6a23[_0x2b1baf(0x48b)](_0x2ce22e,_0x22f093,-0x1a54+-0xb25*0x1+-0x95*-0x41,_0x2b1baf(0x1a2),0xe32+0x3a4*-0x2+-0x303);_0x9c6b2f[_0x2b1baf(0x5f4)+_0x2b1baf(0x622)]&&(_0x2b134d(_0x22f093,0x40b+-0x1c41+-0xc61*-0x2,_0x3b6a23[_0x2b1baf(0x416)],0x1*-0x5b1+0x2526+-0x1f75+0.1),_0x2ce22e(_0x22f093,0x17df+0xd21*0x1+-0x24a0,'f32',-0x804+-0x5e*-0xa+0x458+0.1));}}catch(_0xbe7603){}},-0x4a8+0x25*0x29+0x7d*-0x1),setInterval(()=>{var _0x1fada4=_0x1d7cb9;_0x58d4d2[_0x1fada4(0x306)+'oaded']=!!window['unity'+_0x1fada4(0x52e)+_0x1fada4(0x52f)];try{var _0x578445=-0x65d*-0x6+-0x2286+0x68*-0x9;for(var _0x3a6985 in _0x4b0040){if(_0x4b0040[_0x3a6985]&&_0x4b0040[_0x3a6985][_0x1fada4(0x690)+'ed'])_0x578445++;}_0x58d4d2[_0x1fada4(0x658)+'Ok']=_0x578445;}catch(_0x18147c){}},-0x38*-0x1f+0x1*0xd19+-0xff9);var _0x556dbb=new Set(),_0x176ed9={0x1:[],0x3:[]},_0x5a92bd=![];function _0x2f8e54(_0x3f06e3){var _0x41cde7=_0x1d7cb9;_0x556dbb[_0x41cde7(0x518)](_0x3f06e3['code']);}function _0x91d60e(_0x42b132){var _0x4531a7=_0x1d7cb9;_0x556dbb['delet'+'e'](_0x42b132[_0x4531a7(0x67d)]);}function _0x54ef83(_0x22ac90){var _0x3b02dd=_0x1d7cb9;if(_0x22ac90['__sak'+_0x3b02dd(0x618)])return;_0x556dbb[_0x3b02dd(0x518)](_0x3b6a23['hpgLl'](_0x3b6a23[_0x3b02dd(0x2c2)],_0x3b6a23['sARXw'](_0x22ac90[_0x3b02dd(0x28b)+'n'],0xe*-0x13d+-0x1*-0x552+-0x11*-0xb5)));var _0x54e375=_0x176ed9[_0x22ac90['butto'+'n']+(-0x1*-0x22e5+0xa24+-0x2d08)];if(_0x54e375){_0x54e375['push'](performance[_0x3b02dd(0x6b0)]());if(_0x3b6a23[_0x3b02dd(0x2eb)](_0x54e375['lengt'+'h'],-0x4cd*-0x8+0x5f*0x2e+-0x61*0x92))_0x54e375['shift']();}}function _0x357c47(_0x3a5087){var _0x48b29f=_0x1d7cb9;if(!_0x3a5087[_0x48b29f(0x4ca)+'ura'])_0x556dbb[_0x48b29f(0x696)+'e'](_0x3b6a23[_0x48b29f(0x5c8)](_0x3b6a23[_0x48b29f(0x2c2)],_0x3b6a23[_0x48b29f(0x247)](_0x3a5087[_0x48b29f(0x28b)+'n'],-0x1c18+0x2*-0xfca+-0x1*-0x3bad)));}function _0x2ec9f0(){var _0x509575=_0x1d7cb9;_0x556dbb[_0x509575(0x3d2)]();}function _0x2ac403(){var _0x3fa845=_0x1d7cb9;if(_0x5a92bd)return;_0x5a92bd=!![],window[_0x3fa845(0x2d1)+_0x3fa845(0x5c0)+_0x3fa845(0x572)+'r'](_0x3fa845(0x1f7)+'wn',_0x2f8e54,!![]),window['addEv'+'entLi'+'stene'+'r']('keyup',_0x91d60e,!![]),window[_0x3fa845(0x2d1)+_0x3fa845(0x5c0)+_0x3fa845(0x572)+'r'](_0x3fa845(0x5a1)+_0x3fa845(0x546),_0x54ef83,!![]),window['addEv'+_0x3fa845(0x5c0)+_0x3fa845(0x572)+'r'](_0x3b6a23['XekdN'],_0x357c47,!![]),window['addEv'+_0x3fa845(0x5c0)+_0x3fa845(0x572)+'r']('blur',_0x2ec9f0);}function _0x456f2b(_0x495852){var _0x3959f8=_0x1d7cb9,_0x461846=_0x176ed9[_0x495852]||[],_0x1311f1=performance['now']();while(_0x461846[_0x3959f8(0x4cb)+'h']&&_0x1311f1-_0x461846[-0x20f4+-0x3*0x58f+0x31a1]>-0x20f0+-0x10cd+0x35a5)_0x461846['shift']();return _0x461846[_0x3959f8(0x4cb)+'h'];}function _0x1d12af(_0x519f57){var _0x6d3b91=_0x1d7cb9;if(document[_0x6d3b91(0x67a)]&&(document['ready'+_0x6d3b91(0x6de)]===_0x3b6a23[_0x6d3b91(0x50d)]||document[_0x6d3b91(0x38c)+_0x6d3b91(0x6de)]===_0x3b6a23['hfzoS']))_0x519f57();else document[_0x6d3b91(0x2d1)+_0x6d3b91(0x5c0)+_0x6d3b91(0x572)+'r'](_0x6d3b91(0x665)+_0x6d3b91(0x5e8)+'Loade'+'d',_0x519f57,{'once':!![]});}_0x1d12af(()=>{var _0x534129=_0x1d7cb9,_0x1c1457={'OeYiS':_0x3b6a23[_0x534129(0x3da)],'IKzTK':_0x3b6a23['ZStRQ'],'hcZoO':function(_0x4b8544,_0x363d70){return _0x4b8544!==_0x363d70;},'LUGgi':function(_0x178a4e,_0x3b283f){var _0x34ccf7=_0x534129;return _0x3b6a23[_0x34ccf7(0x6c8)](_0x178a4e,_0x3b283f);},'CiRLY':_0x534129(0x63b)+_0x534129(0x1d6)+_0x534129(0x1b5)+_0x534129(0x258)+'5)','rcxKD':function(_0xd369d2,_0x45ab0b){var _0x478d4b=_0x534129;return _0x3b6a23[_0x478d4b(0x1a5)](_0xd369d2,_0x45ab0b);},'QDZXI':function(_0x3cbb63,_0x5559f4){return _0x3cbb63-_0x5559f4;},'rgWpA':function(_0x5434de,_0x1c88ac){var _0x20b18b=_0x534129;return _0x3b6a23[_0x20b18b(0x66e)](_0x5434de,_0x1c88ac);},'GsLRC':function(_0x5e20a3,_0x22db8a){var _0x3c57d7=_0x534129;return _0x3b6a23[_0x3c57d7(0x3ba)](_0x5e20a3,_0x22db8a);},'TWseU':function(_0x57231a,_0x1f25b1){return _0x57231a*_0x1f25b1;},'USgpJ':function(_0x4bf745,_0x1e9a20){return _0x4bf745+_0x1e9a20;},'gTlPV':function(_0x411dfb,_0x1b149f){return _0x411dfb===_0x1b149f;},'EKWlU':function(_0x5b174a,_0x35ab88){return _0x5b174a-_0x35ab88;},'TIDra':'KeyW','ylMkc':function(_0x2daa00,_0x5aa0bf){return _0x2daa00+_0x5aa0bf;},'JGUTG':function(_0xade359,_0x3a9b30,_0x5c3268,_0x1797c5,_0x3d5414,_0x3ebb0d,_0x4c93d2){var _0x31ee6c=_0x534129;return _0x3b6a23[_0x31ee6c(0x37a)](_0xade359,_0x3a9b30,_0x5c3268,_0x1797c5,_0x3d5414,_0x3ebb0d,_0x4c93d2);},'nfCTy':function(_0x11a83a,_0x329136,_0x36dab7,_0x1adf1a,_0x41eb8b,_0x383095,_0x460150){return _0x11a83a(_0x329136,_0x36dab7,_0x1adf1a,_0x41eb8b,_0x383095,_0x460150);},'sElKB':_0x3b6a23[_0x534129(0x26b)],'kotob':function(_0xf19f00,_0x407c8a){return _0xf19f00*_0x407c8a;},'gsvwa':function(_0x3fa8b3,_0x5697cb){return _0x3fa8b3+_0x5697cb;},'NpJzU':function(_0x10139d,_0x37765f){var _0x285934=_0x534129;return _0x3b6a23[_0x285934(0x1a5)](_0x10139d,_0x37765f);},'sFloX':function(_0x4d463d,_0x2f12e3){return _0x3b6a23['hpgLl'](_0x4d463d,_0x2f12e3);},'uPRQM':function(_0x54cdca,_0x583303){return _0x54cdca+_0x583303;},'xxIcs':_0x534129(0x3e9),'mvfjM':_0x3b6a23['DbHDP'],'BoROP':_0x3b6a23[_0x534129(0x616)],'KeyPL':function(_0x405501,_0x7cc505,_0x412089,_0x5711d9,_0x1bdcdd,_0x137e73,_0x6d9e97){return _0x405501(_0x7cc505,_0x412089,_0x5711d9,_0x1bdcdd,_0x137e73,_0x6d9e97);},'mtSnz':'#ff6b'+'9d','PSEFV':function(_0x24283f,_0x59f45b){return _0x24283f*_0x59f45b;},'LASHy':function(_0x85d4b2,_0x47e4b5){return _0x85d4b2-_0x47e4b5;},'HxILz':function(_0x2d432a,_0x2ab5d9){var _0xfd551f=_0x534129;return _0x3b6a23[_0xfd551f(0x6b5)](_0x2d432a,_0x2ab5d9);},'zEQwE':_0x3b6a23[_0x534129(0x50b)],'ertvj':_0x3b6a23[_0x534129(0x429)],'dOTzM':_0x534129(0x249),'JqZfX':function(_0x22b59e,_0x3037c5){return _0x22b59e(_0x3037c5);},'HpvON':function(_0x530183){var _0x9b773e=_0x534129;return _0x3b6a23[_0x9b773e(0x21c)](_0x530183);},'FrTAi':_0x3b6a23[_0x534129(0x614)],'kSQvr':_0x534129(0x699)+'a.kou'+'r.ui.'+'v1','OyRKC':'true','ZmvNS':function(_0x2c7360,_0x144d80){var _0x22db08=_0x534129;return _0x3b6a23[_0x22db08(0x5c2)](_0x2c7360,_0x144d80);},'ZaTqU':function(_0x69a562,_0x524689){return _0x69a562/_0x524689;},'OlTrO':function(_0x5f4f9a,_0x163d54){return _0x5f4f9a-_0x163d54;},'IAkpb':function(_0x28110c,_0x582e9d){return _0x28110c-_0x582e9d;},'FwnUi':function(_0x133f18,_0x49f0a6){return _0x3b6a23['sNLdN'](_0x133f18,_0x49f0a6);},'EcLLJ':_0x534129(0x200),'AoIAO':_0x3b6a23[_0x534129(0x537)],'nDFog':_0x534129(0x2de)+_0x534129(0x1c2)+_0x534129(0x5b3),'YOIxe':_0x3b6a23['kHqdG'],'eLcgm':'sk-md'+'esc','Uzevk':function(_0x35258c,_0x31403b){return _0x3b6a23['hpgLl'](_0x35258c,_0x31403b);},'ApSwj':function(_0x3dfa2d,_0x301818){var _0x42894b=_0x534129;return _0x3b6a23[_0x42894b(0x34e)](_0x3dfa2d,_0x301818);},'Ztmzt':_0x3b6a23['iQqOf'],'amDdC':_0x534129(0x466),'xavne':_0x3b6a23[_0x534129(0x4de)],'LnOVG':_0x534129(0x1f9)+_0x534129(0x532)+_0x534129(0x621)+_0x534129(0x458)+_0x534129(0x33d)+'ly\x20(r'+_0x534129(0x3ec)+_0x534129(0x6da)+_0x534129(0x251)+_0x534129(0x2b1)+'ipt)','LhGNO':function(_0x174e4c,_0x70c6b1){var _0x33a0d7=_0x534129;return _0x3b6a23[_0x33a0d7(0x247)](_0x174e4c,_0x70c6b1);},'PAvFg':_0x3b6a23['aOAPp'],'OqzKC':function(_0x4759b3,_0x3cdba3,_0xadf35f,_0x377d7f){return _0x4759b3(_0x3cdba3,_0xadf35f,_0x377d7f);},'evEvX':_0x3b6a23[_0x534129(0x366)],'pGUns':'calls'+'\x20Unit'+'yEngi'+_0x534129(0x298)+_0x534129(0x464)+_0x534129(0x1b1)+_0x534129(0x543)+_0x534129(0x1ee)+_0x534129(0x36f)+'Rate','Azexw':'godDi'+'e','KAyyy':function(_0x45f167){return _0x45f167();},'Thlhu':_0x3b6a23[_0x534129(0x3dd)],'RwAGx':_0x3b6a23[_0x534129(0x1ff)],'dqqRB':function(_0x419f72){return _0x419f72();},'qujhQ':function(_0x18b61d){var _0x54e133=_0x534129;return _0x3b6a23[_0x54e133(0x4eb)](_0x18b61d);},'aeHBe':function(_0x42b435,_0x57656f){return _0x3b6a23['sARXw'](_0x42b435,_0x57656f);},'VSaux':'Sakur'+'a\x20Kou'+_0x534129(0x5b2),'CslzD':_0x3b6a23[_0x534129(0x494)],'LrZJS':function(_0xc988ef,_0x1ce806){return _0xc988ef+_0x1ce806;},'AjVDz':_0x534129(0x346)+_0x534129(0x4bd),'fmdHy':'\x20|\x20mo'+_0x534129(0x371)+'t\x20','FKoHG':'UWMK\x20'+_0x534129(0x532)+_0x534129(0x29a)+_0x534129(0x458)+_0x534129(0x33d)+_0x534129(0x45a)+_0x534129(0x3ec)+_0x534129(0x6da)+_0x534129(0x251)+'erscr'+'ipt)','lLhxc':_0x3b6a23['PyJhT'],'zUcog':_0x3b6a23['BsZkI'],'mEzsK':_0x3b6a23['MDhdh'],'qXnAK':'small','rWhTj':_0x3b6a23[_0x534129(0x28c)],'MIgpj':'butto'+'n','lXmPv':_0x534129(0x607)+'viewB'+'ox=\x220'+_0x534129(0x54e)+'\x2024\x22>'+_0x534129(0x473)+_0x534129(0x256)+'6\x206l1'+'2\x2012M'+'18\x206\x20'+'6\x2018\x22'+'/></s'+'vg>','KDMxj':_0x534129(0x65e)+_0x534129(0x660)+_0x534129(0x709),'QxCTa':_0x3b6a23[_0x534129(0x2fe)],'QXMGb':_0x3b6a23[_0x534129(0x4ff)],'FfCng':function(_0x486567,_0x3a7de2){return _0x486567(_0x3a7de2);},'yJMPg':function(_0x383ba7,_0x1ba1e7,_0x3730b8){var _0x27224b=_0x534129;return _0x3b6a23[_0x27224b(0x612)](_0x383ba7,_0x1ba1e7,_0x3730b8);},'jVdoJ':'2|0|4'+_0x534129(0x421),'rCjts':function(_0x5b126f,_0x44fbd1){return _0x5b126f!==_0x44fbd1;},'khMBE':_0x534129(0x1ba),'JbTQK':function(_0x24e5bd,_0x8e01bf){var _0x5dce38=_0x534129;return _0x3b6a23[_0x5dce38(0x6b5)](_0x24e5bd,_0x8e01bf);},'PYszE':function(_0x3b9cd3,_0x40f6dc){return _0x3b6a23['ZAgFl'](_0x3b9cd3,_0x40f6dc);},'jLyeM':'700\x20','zOQfD':_0x534129(0x1d4)+'r'};_0x9c6b2f[_0x534129(0x357)+'ck']&&(_0x3b6a23['lVIaq']!==_0x3b6a23['DSCSy']?_0x3b6a23['zGWwq'](setInterval,()=>{var _0x48e61c=_0x534129;if('jcOJe'!=='jcOJe'){if(_0x49bc7b)_0x3c55d9['call'](_0x1c1457['OeYiS'],_0x48e61c(0x543)+'arget'+_0x48e61c(0x36f)+_0x48e61c(0x5aa),[0x1*0xb3+-0x842*-0x1+0x805*-0x1]);}else try{if(_0x3b6a23[_0x48e61c(0x25a)]===_0x48e61c(0x594))for(var _0x43ead0 of[_0x48e61c(0x1e0)+'io_30'+'0x250'+'-pare'+'nt',_0x48e61c(0x1e0)+_0x48e61c(0x582)+'8x90-'+_0x48e61c(0x316)+'t',_0x48e61c(0x1e0)+'io_30'+_0x48e61c(0x538)+_0x48e61c(0x447)+'nt',_0x3b6a23[_0x48e61c(0x2ed)]]){if(_0x3b6a23['wpcuD']===_0x48e61c(0x325)){var _0x3c204b=document[_0x48e61c(0x5dd)+'ement'+'ById'](_0x43ead0);if(_0x3c204b&&_0x43ead0===_0x3b6a23[_0x48e61c(0x2ed)]){var _0x55b492=_0x3c204b[_0x48e61c(0x671)+_0x48e61c(0x1a6)];for(var _0x2d5f06=0x1a3d+-0x1e42+0x157*0x3;_0x2d5f06<_0x55b492[_0x48e61c(0x4cb)+'h'];_0x2d5f06++){if(_0x55b492[_0x2d5f06]['id']&&_0x55b492[_0x2d5f06]['id'][_0x48e61c(0x481)+'Of']('kour-'+'io_')===0xd2+0x1*-0x2363+0x1*0x2291)_0x55b492[_0x2d5f06][_0x48e61c(0x47a)][_0x48e61c(0x228)+'ay']=_0x3b6a23[_0x48e61c(0x4de)];}}else{if(_0x3c204b)_0x3c204b[_0x48e61c(0x47a)][_0x48e61c(0x228)+'ay']=_0x3b6a23['yXEjf'];}}else new _0x28728d(_0x1747fb)['write'+'Field'](_0x5de102,_0xc75cbc,_0x3a90f7);}else _0x5572e5[_0x48e61c(0x6fe)+'em'](_0x1c1457['IKzTK'],_0x3e6ce5[_0x48e61c(0x3fc)+'gify'](_0x37f20b));}catch(_0x517a3f){}},0x1eec*0x1+0x1fdd*-0x1+0x3*0x2eb):_0x15ae28['set'](_0x20bb82,null));var _0x33dbed=document[_0x534129(0x37f)+_0x534129(0x713)+_0x534129(0x6f6)](_0x3b6a23[_0x534129(0x375)]);_0x33dbed[_0x534129(0x47a)]['cssTe'+'xt']='posit'+_0x534129(0x2b8)+_0x534129(0x450)+_0x534129(0x344)+_0x534129(0x52a)+_0x534129(0x3f4)+_0x534129(0x255)+'heigh'+_0x534129(0x20b)+'vh;z-'+_0x534129(0x481)+_0x534129(0x322)+_0x534129(0x4a5)+_0x534129(0x2c4)+_0x534129(0x527)+_0x534129(0x29d)+_0x534129(0x351)+'e';var _0x1796fd=_0x33dbed[_0x534129(0x443)+'ntext']('2d');function _0x2847af(){var _0x313124=_0x534129;try{var _0x4b97d7=document[_0x313124(0x4e8)+_0x313124(0x53c)+_0x313124(0x1d7)+'nt'],_0x5b4515=_0x4b97d7&&_0x4b97d7[_0x313124(0x294)+'me']!==_0x313124(0x676)+'S'?_0x4b97d7:document['body']||document[_0x313124(0x283)+'entEl'+'ement'];if(_0x1c1457[_0x313124(0x5ab)](_0x33dbed[_0x313124(0x316)+_0x313124(0x6b4)],_0x5b4515))_0x5b4515['appen'+_0x313124(0x382)+'d'](_0x33dbed);}catch(_0x1ab971){try{document['body']['appen'+'dChil'+'d'](_0x33dbed);}catch(_0x307e8a){}}}var _0x3e96a2={'w':0x0,'h':0x0,'dpr':0x0};function _0x2af2de(){var _0xd83cfb=_0x534129,_0x41cb8f=window[_0xd83cfb(0x6eb)+'ePixe'+_0xd83cfb(0x45e)+'o']||-0x1ff3+0x2*0x322+0x19b0,_0x2da549=window['inner'+_0xd83cfb(0x3ca)],_0x30720c=window[_0xd83cfb(0x454)+_0xd83cfb(0x4fe)+'t'];if(_0x2da549===_0x3e96a2['w']&&_0x30720c===_0x3e96a2['h']&&_0x41cb8f===_0x3e96a2[_0xd83cfb(0x630)])return;_0x3e96a2['w']=_0x2da549,_0x3e96a2['h']=_0x30720c,_0x3e96a2['dpr']=_0x41cb8f,_0x33dbed['width']=Math['round'](_0x2da549*_0x41cb8f),_0x33dbed[_0xd83cfb(0x4a3)+'t']=Math['round'](_0x30720c*_0x41cb8f),_0x1796fd[_0xd83cfb(0x3d0)+_0xd83cfb(0x1f5)+'rm'](_0x41cb8f,-0x6+-0x24be*0x1+0x24c4,-0x198*-0x18+-0xa*0x246+0x7c2*-0x2,_0x41cb8f,0x1d*-0x100+-0x283*-0xd+-0xb*0x55,-0xd2d+-0x2618+0x753*0x7);}var _0x5c4fbb=0x1*-0x2276+0x2380+0x13*-0xe,_0x38b26e=performance[_0x534129(0x6b0)](),_0x44084c=-0xc97*0x3+0x1e*-0x53+-0x3f*-0xc1;function _0x4f538b(_0x4a1176){var _0x328c31=_0x534129,_0x5b4a8d={'eeoTd':_0x328c31(0x1b0)+'ng','QhYzd':_0x328c31(0x4e8)+'creen'+'-banr'+'s','awWfT':function(_0x477112,_0x4f8bb0){var _0x4abd5f=_0x328c31;return _0x1c1457[_0x4abd5f(0x66f)](_0x477112,_0x4f8bb0);},'JACIZ':_0x1c1457['CiRLY'],'wVMaj':'ILCFX','IoGSF':_0x328c31(0x1ba),'CtwRx':function(_0x39c6bb,_0x1cb476){return _0x39c6bb+_0x1cb476;},'LjDmG':'px\x20ui'+'-sans'+'-seri'+'f,sys'+_0x328c31(0x49e)+_0x328c31(0x3e7)+_0x328c31(0x260)+'if','tEFLM':function(_0xff6cc9,_0xd30a37){return _0x1c1457['rcxKD'](_0xff6cc9,_0xd30a37);},'picaD':function(_0xdaa374,_0x937aff){var _0x25cbf0=_0x328c31;return _0x1c1457[_0x25cbf0(0x471)](_0xdaa374,_0x937aff);},'weujX':function(_0x23e610,_0x397227){return _0x23e610/_0x397227;},'SfbBj':function(_0x3c45b9,_0x6d8bae){return _0x3c45b9!==_0x6d8bae;},'UORCd':_0x328c31(0x627),'ErmLV':function(_0x29aaf,_0x5049d1){return _0x29aaf*_0x5049d1;}},_0xe579e3=_0x1c1457[_0x328c31(0x1e3)](Number,_0x9c6b2f['ksSca'+'le'])||0xfd5+0x9b2+-0x1986,_0x425d59=(0x33f*-0x4+-0x2*0x7b5+0x1c88)*_0xe579e3,_0x4016a7=(0x1e50+-0x14c8+-0x7*0x15c)*_0xe579e3,_0x221efe=_0x1c1457[_0x328c31(0x3cd)](_0x425d59*(-0xfb*-0x25+0x15*-0x162+-0x73a),_0x1c1457[_0x328c31(0x272)](_0x4016a7,0x1*0x1e53+0x2*-0x362+-0x178d)),_0x27bfa6=_0x1c1457[_0x328c31(0x3cd)](_0x1c1457[_0x328c31(0x272)](_0x425d59,0x11f6*0x2+-0x693+-0x1d56),_0x4016a7*(-0x7f*-0x9+-0x5*-0x2de+-0x12cb*0x1)),_0x380462=_0x9c6b2f[_0x328c31(0x553)],_0x1fd780=_0x380462==='br'?_0x1c1457[_0x328c31(0x471)](_0x4a1176['right'],0x773*0x4+0x1*-0x1623+-0x799)-_0x221efe:_0x1c1457['USgpJ'](_0x4a1176['left'],-0x1886+0x34e+-0x718*-0x3),_0xa46fcd=_0x1c1457[_0x328c31(0x5d4)](_0x380462,'ml')?_0x1c1457[_0x328c31(0x471)](_0x4a1176[_0x328c31(0x2bd)]+_0x4a1176[_0x328c31(0x4a3)+'t']/(0x434*0x4+-0x1886+-0x7b8*-0x1),_0x1c1457['rcxKD'](_0x27bfa6,-0x1492+0x64+0x1430)):_0x1c1457[_0x328c31(0x471)](_0x1c1457[_0x328c31(0x1dd)](_0x4a1176['botto'+'m'],_0x27bfa6),_0x380462==='bl'?-0x13bb+0x1fd+0x1*0x121e:0x8ea+-0x262a+0x1dd6),_0x3aede5=(_0x257cb8,_0x15527a,_0x514da9,_0x257ab8,_0x493640,_0x12faf0,_0x4da215)=>{var _0x181841=_0x328c31,_0x2a69d2={'joQRF':'SAFE\x20'+_0x181841(0x4cd)+'—\x20ove'+_0x181841(0x2e8)+_0x181841(0x259)+'\x20no\x20h'+_0x181841(0x68f)+_0x181841(0x20f)+_0x181841(0x1de)+_0x181841(0x1c1)+')','RuVmF':function(_0x1c4ca9,_0x18929e){return _0x1c4ca9+_0x18929e;},'pHrJm':_0x5b4a8d['eeoTd'],'DYPtu':_0x181841(0x1f8)+_0x181841(0x6f3)+_0x181841(0x302),'ikvWA':_0x181841(0x5d5)+_0x181841(0x6a4)+'yEngi'+'ne.Ap'+'plica'+'tion.'+'set_t'+_0x181841(0x1ee)+'Frame'+_0x181841(0x5aa),'yzEcb':_0x181841(0x4c4),'CAmOy':_0x5b4a8d['QhYzd'],'SmXuj':function(_0x4b1d0b,_0x4230b4){return _0x4b1d0b===_0x4230b4;},'WCIFC':function(_0x357f8a,_0x18723e){return _0x5b4a8d['awWfT'](_0x357f8a,_0x18723e);},'CcLqK':'kour-'+_0x181841(0x56b)},_0x4c42f2=_0x556dbb['has'](_0x15527a);_0x1796fd[_0x181841(0x6df)](),_0x1796fd[_0x181841(0x710)+_0x181841(0x555)]();if(_0x1796fd['round'+'Rect'])_0x1796fd[_0x181841(0x42b)+_0x181841(0x2c0)](_0x514da9,_0x257ab8,_0x493640,_0x12faf0,(0x2*0x8b4+-0x2190+-0x3*-0x565)*_0xe579e3);else _0x1796fd['rect'](_0x514da9,_0x257ab8,_0x493640,_0x12faf0);_0x1796fd['fillS'+'tyle']=_0x4c42f2?_0x5b4a8d[_0x181841(0x6f5)]:_0x181841(0x63b)+_0x181841(0x3bd)+_0x181841(0x6fb)+'7)',_0x1796fd[_0x181841(0x6dc)](),_0x1796fd[_0x181841(0x345)+_0x181841(0x3d6)]=-0xff3+-0xe95+0x1e89,_0x1796fd['strok'+'eStyl'+'e']=_0x4c42f2?_0x2a99d2:_0x181841(0x63b)+_0x181841(0x1d6)+_0x181841(0x1b5)+_0x181841(0x42e)+'5)',_0x1796fd[_0x181841(0x2d5)+'e']();if(_0x4c42f2){if(_0x5b4a8d[_0x181841(0x2cc)]!==_0x5b4a8d['wVMaj']){var _0x15506d={'ZwaDM':_0x181841(0x543)+'arget'+'Frame'+'Rate'},_0x75e29b=_0x2c0201['safeM'+_0x181841(0x3e5)]?_0x2a69d2['joQRF']:_0x17c135['uwmk']?_0x181841(0x1f9)+'bound'+'\x20'+(_0x5423e0['hooks'+_0x181841(0x206)]?_0x2a69d2['RuVmF'](_0x5a173c['hooks'+'Ok'],'/')+_0x3bc772[_0x181841(0x658)+_0x181841(0x206)]+('\x20hook'+'s'):_0x181841(0x68a)+'ks\x20ar'+'med\x20('+_0x181841(0x68e)+'ff)')+(_0x181841(0x346)+_0x181841(0x4bd))+(_0x225ca9['gameL'+_0x181841(0x5b8)]?_0x181841(0x625)+'d':_0x2a69d2['pHrJm'])+(_0x181841(0x269)+'ooter'+'\x20')+(_0x54862f[_0x181841(0x207)+_0x181841(0x412)]?'held':_0x181841(0x58e))+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x31a459[_0x181841(0x2f0)+_0x181841(0x702)]?_0x181841(0x466):'none'):_0x181841(0x1f9)+_0x181841(0x532)+'NG\x20—\x20'+_0x181841(0x458)+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+'erscr'+_0x181841(0x359);if(_0x59a322[_0x181841(0x467)+_0x181841(0x436)])_0x75e29b+='\x20|\x20ER'+_0x181841(0x1bb)+_0xb39784[_0x181841(0x467)+_0x181841(0x436)];return _0x24f08b(_0x181841(0x59b)+'s',_0x75e29b,_0x7f942[_0x181841(0x230)],null,[_0x44040d(_0x2a69d2[_0x181841(0x349)],_0x2a69d2[_0x181841(0x334)],_0x5661b2(_0x2a69d2[_0x181841(0x557)],()=>{var _0x12a98c=_0x181841;try{if(_0x3a4e81)_0x33e5fc['call'](_0x12a98c(0x3ed)+_0x12a98c(0x39a)+'e.App'+_0x12a98c(0x268)+_0x12a98c(0x201),_0x15506d[_0x12a98c(0x27f)],[-0x245f*0x1+-0xb*0x119+0x3162]);}catch(_0x587117){}}))]);}else _0x1796fd[_0x181841(0x57c)+_0x181841(0x243)+'r']=_0x4a1dfb,_0x1796fd[_0x181841(0x57c)+'wBlur']=0x4ca*-0x2+0x2*0x33e+-0x1a*-0x1f,_0x1796fd['fill'](),_0x1796fd['shado'+_0x181841(0x6d5)]=0xab4+0x7a*0x25+-0x1c56;}_0x1796fd[_0x181841(0x1b9)+'tyle']=_0x4c42f2?_0x5b4a8d['IoGSF']:_0x181841(0x63b)+'255,2'+_0x181841(0x2dc)+'0,0.8'+')',_0x1796fd['textA'+'lign']=_0x181841(0x1d4)+'r',_0x1796fd['textB'+_0x181841(0x6e2)+'ne']=_0x181841(0x496)+'e',_0x1796fd['font']=_0x5b4a8d['CtwRx'](_0x181841(0x33f)+Math[_0x181841(0x42b)]((-0x1a34+-0x3fd*0x9+-0x3*-0x14b7)*_0xe579e3),_0x5b4a8d[_0x181841(0x227)]),_0x1796fd[_0x181841(0x615)+'ext'](_0x257cb8,_0x514da9+_0x5b4a8d[_0x181841(0x6db)](_0x493640,0xe02+0x3b*-0xa3+0x3*0x7db),_0x5b4a8d[_0x181841(0x4e6)](_0x257ab8+_0x5b4a8d['weujX'](_0x12faf0,0x1a6d+-0x1148+-0x923),_0x4da215?(-0x1013*-0x1+-0x3ff*-0x1+-0x3*0x6af)*_0xe579e3:-0x1*0x8a7+-0xc51+0x14f8));if(_0x4da215){if(_0x5b4a8d[_0x181841(0x6f4)](_0x181841(0x380),_0x5b4a8d[_0x181841(0x1cc)]))_0x1796fd[_0x181841(0x21e)]=_0x5b4a8d['CtwRx']('600\x20'+Math['round']((0xf5*0xd+0x133*0x3+0x1*-0x1001)*_0xe579e3),_0x181841(0x550)+'-sans'+_0x181841(0x3a3)+'f,sys'+_0x181841(0x49e)+'i,san'+'s-ser'+'if'),_0x1796fd[_0x181841(0x1b9)+_0x181841(0x266)]=_0x4c42f2?'#fff':_0x181841(0x63b)+'255,2'+_0x181841(0x2dc)+'0,0.5'+'5)',_0x1796fd[_0x181841(0x615)+_0x181841(0x409)](_0x4da215,_0x5b4a8d[_0x181841(0x6ac)](_0x514da9,_0x5b4a8d[_0x181841(0x6db)](_0x493640,0x821*0x3+-0x24b*-0x1+-0x1aac)),_0x257ab8+_0x12faf0/(-0x2fb+0xdef+-0xaf2)+_0x5b4a8d[_0x181841(0x5f5)](0x7e7+0x11c9*-0x1+0x9ea,_0xe579e3));else for(var _0x49e91c of['kour-'+_0x181841(0x46b)+'0x250'+_0x181841(0x447)+'nt',_0x181841(0x1e0)+'io_72'+'8x90-'+_0x181841(0x316)+'t','kour-'+'io_30'+_0x181841(0x538)+_0x181841(0x447)+'nt',_0x2a69d2[_0x181841(0x30a)]]){var _0x6a2e30=_0x4af551['getEl'+'ement'+_0x181841(0x69a)](_0x49e91c);if(_0x6a2e30&&_0x2a69d2[_0x181841(0x1a3)](_0x49e91c,_0x2a69d2[_0x181841(0x30a)])){var _0x589bd8=_0x6a2e30[_0x181841(0x671)+_0x181841(0x1a6)];for(var _0xd003a7=-0x977*0x1+0x779*0x1+-0x5*-0x66;_0x2a69d2['WCIFC'](_0xd003a7,_0x589bd8[_0x181841(0x4cb)+'h']);_0xd003a7++){if(_0x589bd8[_0xd003a7]['id']&&_0x589bd8[_0xd003a7]['id']['index'+'Of'](_0x2a69d2[_0x181841(0x4e4)])===-0x18b1+-0x25a9+0x3e5a)_0x589bd8[_0xd003a7][_0x181841(0x47a)]['displ'+'ay']='none';}}else{if(_0x6a2e30)_0x6a2e30[_0x181841(0x47a)]['displ'+'ay']=_0x181841(0x58e);}}}_0x1796fd[_0x181841(0x205)+'re']();};_0x3aede5('W',_0x1c1457[_0x328c31(0x65a)],_0x1c1457['ylMkc'](_0x1fd780,_0x425d59)+_0x4016a7,_0xa46fcd,_0x425d59,_0x425d59),_0x1c1457[_0x328c31(0x2b3)](_0x3aede5,'A','KeyA',_0x1fd780,_0x1c1457['USgpJ'](_0x1c1457['USgpJ'](_0xa46fcd,_0x425d59),_0x4016a7),_0x425d59,_0x425d59),_0x1c1457[_0x328c31(0x6f7)](_0x3aede5,'S',_0x1c1457[_0x328c31(0x317)],_0x1fd780+_0x425d59+_0x4016a7,_0xa46fcd+_0x425d59+_0x4016a7,_0x425d59,_0x425d59),_0x1c1457[_0x328c31(0x6f7)](_0x3aede5,'D','KeyD',_0x1fd780+_0x1c1457[_0x328c31(0x4ec)](_0x1c1457[_0x328c31(0x1d9)](_0x425d59,_0x4016a7),-0xaa6+-0x1*0x1f0+0x68*0x1f),_0x1c1457['gsvwa'](_0xa46fcd,_0x425d59)+_0x4016a7,_0x425d59,_0x425d59);var _0x3bc5bd=_0x1c1457['NpJzU'](_0x221efe-_0x4016a7,0x17f3+-0x43f+0x13b2*-0x1),_0x239e9d=_0x1c1457['sFloX'](_0xa46fcd,_0x1c1457['uPRQM'](_0x425d59,_0x4016a7)*(0x13a8+-0xd3d+-0x223*0x3));_0x3aede5(_0x1c1457['xxIcs'],'mouse'+'1',_0x1fd780,_0x239e9d,_0x3bc5bd,_0x425d59,_0x9c6b2f['ksCps']?_0x1c1457[_0x328c31(0x1d9)](_0x1c1457['rgWpA'](_0x456f2b,0x1eec+-0x695+-0x7*0x37a),_0x328c31(0x36e)):''),_0x3aede5('RMB',_0x1c1457['mvfjM'],_0x1c1457[_0x328c31(0x449)](_0x1c1457[_0x328c31(0x282)](_0x1fd780,_0x3bc5bd),_0x4016a7),_0x239e9d,_0x3bc5bd,_0x425d59,_0x9c6b2f[_0x328c31(0x5d3)]?_0x1c1457[_0x328c31(0x1e3)](_0x456f2b,0x180d*-0x1+0x9*-0x3af+-0x61*-0x97)+_0x1c1457['BoROP']:''),_0x1c1457['KeyPL'](_0x3aede5,'',_0x328c31(0x22f),_0x1fd780,_0x1c1457[_0x328c31(0x1d9)](_0x239e9d,_0x425d59)+_0x4016a7,_0x221efe,_0x1c1457['kotob'](_0x425d59,-0x9b3+-0xe81+0x1834+0.45));}function _0x13b5e(_0x19dd87){var _0x1837fe=_0x534129,_0x2645bf=_0x19dd87['width']/(-0x1a*-0xa1+0xd*-0x1cf+0x72b),_0x15b611=_0x19dd87[_0x1837fe(0x4a3)+'t']/(-0x1*-0x2a0+-0x66f+0x3d1),_0x35f0e6=_0x1c1457[_0x1837fe(0x1e3)](Number,_0x9c6b2f['chSiz'+'e'])||-0x23e4+-0xf6b*-0x1+0x1*0x147a,_0x2d0911=/^#[0-9a-f]{6}$/i['test'](_0x9c6b2f[_0x1837fe(0x1aa)+'or'])?_0x9c6b2f['chCol'+'or']:_0x1c1457['mtSnz'];_0x1796fd['save'](),_0x1796fd[_0x1837fe(0x2d5)+_0x1837fe(0x459)+'e']=_0x2d0911,_0x1796fd['fillS'+_0x1837fe(0x266)]=_0x2d0911,_0x1796fd['lineW'+'idth']=Math[_0x1837fe(0x1b4)](0x1f*-0x6d+0x1*0x24dd+0x9*-0x2a1+0.5,(0x3*0x5a8+0x329+-0x33*0x65)*_0x35f0e6),_0x1796fd['shado'+'wColo'+'r']=_0x2d0911,_0x1796fd[_0x1837fe(0x57c)+'wBlur']=-0x125c+0x1505+0x5*-0x87;var _0x1800ec=_0x1c1457['PSEFV'](-0x3*-0x41f+-0x3*-0x96b+-0x2898,_0x35f0e6),_0x39bd9e=(-0x3*0xc82+-0x1174+0x2*0x1b81)*_0x35f0e6;_0x1796fd[_0x1837fe(0x710)+_0x1837fe(0x555)](),_0x1796fd[_0x1837fe(0x1bd)+'o'](_0x1c1457['LASHy'](_0x2645bf,_0x1800ec)-_0x39bd9e,_0x15b611),_0x1796fd[_0x1837fe(0x19b)+'o'](_0x2645bf-_0x1800ec,_0x15b611),_0x1796fd[_0x1837fe(0x1bd)+'o'](_0x2645bf+_0x1800ec,_0x15b611),_0x1796fd[_0x1837fe(0x19b)+'o'](_0x2645bf+_0x1800ec+_0x39bd9e,_0x15b611),_0x1796fd['moveT'+'o'](_0x2645bf,_0x1c1457['QDZXI'](_0x1c1457[_0x1837fe(0x303)](_0x15b611,_0x1800ec),_0x39bd9e)),_0x1796fd[_0x1837fe(0x19b)+'o'](_0x2645bf,_0x15b611-_0x1800ec),_0x1796fd[_0x1837fe(0x1bd)+'o'](_0x2645bf,_0x1c1457[_0x1837fe(0x449)](_0x15b611,_0x1800ec)),_0x1796fd['lineT'+'o'](_0x2645bf,_0x1c1457['gsvwa'](_0x15b611+_0x1800ec,_0x39bd9e)),_0x1796fd['strok'+'e'](),_0x1796fd[_0x1837fe(0x710)+_0x1837fe(0x555)](),_0x1796fd['arc'](_0x2645bf,_0x15b611,(-0x1*0x247f+-0x2*0x11a1+0x47c2+0.6000000000000001)*_0x35f0e6,0x88*-0x2f+0x1b1*-0x11+0x35b9,Math['PI']*(-0x597+-0x169*-0x2+0x4f*0x9)),_0x1796fd['fill'](),_0x1796fd[_0x1837fe(0x205)+'re']();}function _0x34135f(_0x329674){var _0xa53394=_0x534129,_0x22ae5a={'uYUnk':function(_0x17bc98,_0x54ccc7){return _0x1c1457['gTlPV'](_0x17bc98,_0x54ccc7);},'DRGUP':_0xa53394(0x6e0)};if(_0x1c1457['zEQwE']===_0x1c1457['zEQwE']){_0x1796fd[_0xa53394(0x6df)](),_0x1796fd[_0xa53394(0x21e)]=_0xa53394(0x575)+'2px\x20u'+'i-mon'+'ospac'+_0xa53394(0x3e2)+_0xa53394(0x36d)+'e',_0x1796fd['textA'+_0xa53394(0x439)]=_0xa53394(0x6cc),_0x1796fd[_0xa53394(0x6ab)+'aseli'+'ne']=_0xa53394(0x2bd);var _0x279f79=0x268f*-0x1+0x2570+0x14b*0x1,_0x491cc8=0x1363+0x1*0x10f2+-0x52f*0x7,_0x3ee966=(_0x57e745,_0x302069)=>{var _0x8b5907=_0xa53394;_0x22ae5a[_0x8b5907(0x460)](_0x22ae5a['DRGUP'],_0x8b5907(0x4a0))?(_0x37d8c2['bhop']=_0x528d22,_0x23a728()):(_0x1796fd['fillS'+'tyle']=_0x302069||_0x8b5907(0x63b)+'255,2'+_0x8b5907(0x2dc)+_0x8b5907(0x3e3)+'5)',_0x1796fd['fillT'+_0x8b5907(0x409)](_0x57e745,_0x491cc8,_0x279f79),_0x279f79+=0x1*-0xce8+0x2357*-0x1+-0x53*-0x95);};_0x3ee966(_0x1c1457[_0xa53394(0x631)],'#ff6b'+'9d');if(_0x9c6b2f['fps'])_0x3ee966(_0x1c1457[_0xa53394(0x3cd)](_0x44084c,_0x1c1457[_0xa53394(0x68b)]));if(!_0x58d4d2[_0xa53394(0x306)+_0xa53394(0x5b8)])_0x3ee966('waiti'+_0xa53394(0x547)+_0xa53394(0x6c3)+'e…',_0xa53394(0x63b)+_0xa53394(0x1d6)+_0xa53394(0x499)+_0xa53394(0x231)+')');_0x1796fd['resto'+'re']();}else _0x25b363[_0xa53394(0x1b9)+_0xa53394(0x266)]=_0xb8b038||_0xa53394(0x63b)+_0xa53394(0x6bd)+'35,24'+_0xa53394(0x3e3)+'5)',_0x5e6e5c[_0xa53394(0x615)+_0xa53394(0x409)](_0x207aa2,_0x530a54,_0x2ff854),_0xc80f1f+=-0xa*-0x2df+0x3e9+0x208f*-0x1;}function _0x1e1169(){var _0x31b9ae=_0x534129;requestAnimationFrame(_0x1e1169),_0x5c4fbb++;var _0x401365=performance[_0x31b9ae(0x6b0)]();_0x1c1457[_0x31b9ae(0x471)](_0x401365,_0x38b26e)>=0x299*0xd+-0x2534+-0x1*-0x563&&(_0x44084c=Math[_0x31b9ae(0x42b)](_0x5c4fbb*(0x1*0x2001+0x1*-0x78d+0x2*-0xa46)/(_0x401365-_0x38b26e)),_0x5c4fbb=0x1f35+0x23ff+-0x4334,_0x38b26e=_0x401365);_0x2af2de(),_0x2847af(),_0x1796fd['clear'+'Rect'](0xa71*-0x3+-0x1879+0x37cc,0x1*0x1859+0x11*0xbc+-0xc47*0x3,_0x3e96a2['w'],_0x3e96a2['h']);var _0x59f214={'left':0x0,'top':0x0,'right':_0x3e96a2['w'],'bottom':_0x3e96a2['h'],'width':_0x3e96a2['w'],'height':_0x3e96a2['h']};if(_0x9c6b2f[_0x31b9ae(0x500)+_0x31b9ae(0x1a1)])_0x13b5e(_0x59f214);if(_0x9c6b2f['keyst'+_0x31b9ae(0x3a8)])_0x1c1457[_0x31b9ae(0x1da)](_0x4f538b,_0x59f214);_0x34135f(_0x59f214);}var _0x5e0222=document[_0x534129(0x37f)+_0x534129(0x713)+'ent'](_0x3b6a23['PmODr']);_0x5e0222['id']='sakur'+'a-ui',_0x5e0222[_0x534129(0x47a)][_0x534129(0x605)+'xt']=_0x3b6a23['sRbKE'];var _0x3b265c=_0x5e0222[_0x534129(0x46c)+_0x534129(0x41e)+'ow']({'mode':_0x3b6a23['gIRHP']});(document['body']||document['docum'+'entEl'+_0x534129(0x5f1)])[_0x534129(0x61a)+'dChil'+'d'](_0x5e0222);var _0x1bb046=![],_0x156f59={};try{_0x156f59=JSON[_0x534129(0x4d6)](localStorage['getIt'+'em']('sakur'+_0x534129(0x1c6)+_0x534129(0x6c7)+'v1')||'{}');}catch(_0x4b2a5a){}function _0x30e35e(){var _0x1e0590=_0x534129,_0x4e9915={'KwrOZ':function(_0x14b91d){return _0x14b91d();}};if('kuXwc'==='kuXwc')try{_0x1c1457['FrTAi']==='KwmHP'?(_0x341d02[_0x1e0590(0x2df)+'od']=_0x4ba42c,_0x4e9915['KwrOZ'](_0x2b6c4a)):localStorage[_0x1e0590(0x6fe)+'em'](_0x1c1457[_0x1e0590(0x472)],JSON['strin'+'gify'](_0x156f59));}catch(_0x6017ec){}else _0x4014ff[_0x1e0590(0x553)]=_0x39f764,_0x1c1457[_0x1e0590(0x682)](_0x45b68a);}function _0x506521(_0x5c204c,_0x2b2722){var _0x10fd55=_0x534129,_0x29f37f=document['creat'+'eElem'+_0x10fd55(0x6f6)](_0x3b6a23['ziLar']);return _0x29f37f['type']=_0x10fd55(0x28b)+'n',_0x29f37f['class'+_0x10fd55(0x6e4)]='sk-sw'+'itch',_0x29f37f['setAt'+_0x10fd55(0x5e4)+'te'](_0x3b6a23[_0x10fd55(0x37c)],_0x10fd55(0x6be)+'h'),_0x29f37f[_0x10fd55(0x23d)+_0x10fd55(0x5e4)+'te'](_0x3b6a23[_0x10fd55(0x70b)],_0x3b6a23['Qtxia'](String,!!_0x5c204c)),_0x29f37f[_0x10fd55(0x3f5)+'ck']=_0x51c7ca=>{var _0x4e3afe=_0x10fd55;_0x51c7ca['stopP'+'ropag'+_0x4e3afe(0x545)]();var _0x569286=_0x29f37f['getAt'+_0x4e3afe(0x5e4)+'te']('aria-'+'check'+'ed')!==_0x1c1457['OyRKC'];_0x29f37f[_0x4e3afe(0x23d)+_0x4e3afe(0x5e4)+'te'](_0x4e3afe(0x516)+_0x4e3afe(0x5a7)+'ed',_0x1c1457['rgWpA'](String,_0x569286)),_0x1c1457['ZmvNS'](_0x2b2722,_0x569286);},_0x29f37f;}function _0x47bdb7(_0x3292a5,_0x4ba2f5,_0x13050c,_0x3458c6,_0x45a5b2){var _0xf34ca7=_0x534129,_0x2f7412=document['creat'+'eElem'+_0xf34ca7(0x6f6)]('div');_0x2f7412[_0xf34ca7(0x405)+'Name']='sk-ra'+_0xf34ca7(0x1c8);var _0xabaeb6=document[_0xf34ca7(0x37f)+'eElem'+_0xf34ca7(0x6f6)]('input');_0xabaeb6['type']=_0xf34ca7(0x411),_0xabaeb6[_0xf34ca7(0x405)+'Name']='sk-sl'+_0xf34ca7(0x540),_0xabaeb6['min']=_0x4ba2f5,_0xabaeb6[_0xf34ca7(0x1b4)]=_0x13050c,_0xabaeb6['step']=_0x3458c6,_0xabaeb6[_0xf34ca7(0x4f7)]=_0x3292a5;var _0x53ac2=document['creat'+'eElem'+_0xf34ca7(0x6f6)](_0xf34ca7(0x46f));_0x53ac2[_0xf34ca7(0x405)+_0xf34ca7(0x6e4)]=_0xf34ca7(0x6d0)+'l',_0x53ac2['textC'+_0xf34ca7(0x312)+'t']=_0x3b6a23[_0xf34ca7(0x629)](String,_0x3292a5);var _0x155fff=()=>{var _0xb1059=_0xf34ca7;_0x53ac2['textC'+'onten'+'t']=String(_0xabaeb6[_0xb1059(0x4f7)]),_0x2f7412[_0xb1059(0x47a)][_0xb1059(0x4fc)+'opert'+'y'](_0xb1059(0x433),_0x1c1457['kotob'](_0x1c1457['ZaTqU'](_0x1c1457[_0xb1059(0x5fe)](_0xabaeb6[_0xb1059(0x4f7)],_0x4ba2f5),_0x1c1457['IAkpb'](_0x13050c,_0x4ba2f5)),-0xba9+0x18*0x35+0x715*0x1)+'%');};return _0xabaeb6['oninp'+'ut']=()=>{var _0x3604b8=_0xf34ca7;_0x155fff(),_0x45a5b2(Number(_0xabaeb6[_0x3604b8(0x4f7)]));},_0x155fff(),_0x2f7412['appen'+'d'](_0xabaeb6,_0x53ac2),_0x2f7412;}function _0x4c74e6(_0x4f8da3,_0x56f778){var _0xc3896e=_0x534129,_0x578f2a=document[_0xc3896e(0x37f)+'eElem'+'ent'](_0x3b6a23['OOVoR']);return _0x578f2a[_0xc3896e(0x5f9)]=_0x3b6a23['cJOui'],_0x578f2a[_0xc3896e(0x405)+_0xc3896e(0x6e4)]='sk-co'+_0xc3896e(0x19e),_0x578f2a['value']=/^#[0-9a-f]{6}$/i[_0xc3896e(0x519)](_0x4f8da3)?_0x4f8da3:_0xc3896e(0x560)+'9d',_0x578f2a[_0xc3896e(0x4c9)+'ut']=()=>_0x56f778(_0x578f2a['value']),_0x578f2a;}function _0x361495(_0x9da7b7,_0x132e81,_0x163546){var _0x164110=_0x534129;if(_0x3b6a23['lGlSs'](_0x3b6a23['Wyaka'],_0x3b6a23['KkQRe'])){var _0x225c02=document[_0x164110(0x37f)+_0x164110(0x713)+_0x164110(0x6f6)](_0x3b6a23[_0x164110(0x2f5)]);_0x225c02[_0x164110(0x405)+_0x164110(0x6e4)]='sk-fi'+'eld';for(var [_0x491470,_0x32be17]of _0x132e81){if(_0x3b6a23['ROojJ'](_0x3b6a23[_0x164110(0x6f1)],_0x164110(0x3d4))){if(_0x502dc9[_0x30532d]&&_0x25d5b2[_0x4a418a][_0x164110(0x690)+'ed'])_0x36aea5++;}else{var _0x10657c=document[_0x164110(0x37f)+'eElem'+'ent'](_0x3b6a23['LGdcB']);_0x10657c['value']=_0x491470,_0x10657c[_0x164110(0x635)+'onten'+'t']=_0x32be17,_0x225c02[_0x164110(0x61a)+_0x164110(0x382)+'d'](_0x10657c);}}return _0x225c02[_0x164110(0x4f7)]=_0x9da7b7,_0x225c02[_0x164110(0x45f)+_0x164110(0x1c8)]=()=>_0x163546(_0x225c02['value']),_0x225c02;}else _0x45da48[_0x164110(0x2ff)+_0x164110(0x3a8)]=_0x38afb0,_0x3d46aa();}function _0xadf466(_0x3b0189,_0x12b750){var _0x250207=_0x534129,_0x4a8e9d={'nKNCQ':function(_0x18b89e){var _0x3ce603=_0x2250;return _0x3b6a23[_0x3ce603(0x59f)](_0x18b89e);},'pEdef':'butto'+'n','eyiOX':'sk-bt'+'n'};if(_0x3b6a23[_0x250207(0x3c9)]!=='XnWXk'){var _0x4fc3c7=document['creat'+_0x250207(0x713)+'ent'](_0x250207(0x28b)+'n');return _0x4fc3c7[_0x250207(0x5f9)]=_0x3b6a23[_0x250207(0x329)],_0x4fc3c7['class'+_0x250207(0x6e4)]=_0x3b6a23['bdWTJ'],_0x4fc3c7[_0x250207(0x635)+_0x250207(0x312)+'t']=_0x3b0189,_0x4fc3c7['oncli'+'ck']=_0x1b4ea9=>{_0x1b4ea9['stopP'+'ropag'+'ation'](),_0x12b750();},_0x4fc3c7;}else{var _0x5a84fe=_0xa3835b['creat'+'eElem'+_0x250207(0x6f6)](_0x4a8e9d[_0x250207(0x6e9)]);return _0x5a84fe[_0x250207(0x5f9)]='butto'+'n',_0x5a84fe[_0x250207(0x405)+_0x250207(0x6e4)]=_0x4a8e9d[_0x250207(0x35e)],_0x5a84fe['textC'+'onten'+'t']=_0x19f539,_0x5a84fe[_0x250207(0x3f5)+'ck']=_0x5d61cd=>{var _0x20ecd0=_0x250207;_0x5d61cd['stopP'+_0x20ecd0(0x291)+_0x20ecd0(0x545)](),_0x4a8e9d[_0x20ecd0(0x27d)](_0x41fe95);},_0x5a84fe;}}function _0x142b9a(_0x51ad1c,_0x2ff685,_0x516e93){var _0x5bbddf=_0x534129,_0x58d365=document[_0x5bbddf(0x37f)+'eElem'+'ent'](_0x5bbddf(0x200));_0x58d365['class'+_0x5bbddf(0x6e4)]=_0x5bbddf(0x389)+'l';var _0x1e27d7=document[_0x5bbddf(0x37f)+_0x5bbddf(0x713)+_0x5bbddf(0x6f6)](_0x5bbddf(0x46f));_0x1e27d7['class'+'Name']=_0x5bbddf(0x23e)+_0x5bbddf(0x570),_0x1e27d7[_0x5bbddf(0x635)+_0x5bbddf(0x312)+'t']=_0x51ad1c;if(_0x2ff685){var _0x3b0389=document[_0x5bbddf(0x37f)+'eElem'+'ent'](_0x5bbddf(0x3f9));_0x3b0389[_0x5bbddf(0x405)+_0x5bbddf(0x6e4)]='sk-hi'+'nt',_0x3b0389['textC'+'onten'+'t']=_0x2ff685,_0x1e27d7['appen'+_0x5bbddf(0x382)+'d'](_0x3b0389);}return _0x58d365[_0x5bbddf(0x61a)+'d'](_0x1e27d7,_0x516e93),_0x58d365;}function _0x5862d7(_0xd79459,_0x14c891){var _0xe2032a=_0x534129,_0x4fae40=document[_0xe2032a(0x37f)+_0xe2032a(0x713)+_0xe2032a(0x6f6)](_0x3b6a23['PmODr']);return _0x4fae40[_0xe2032a(0x405)+_0xe2032a(0x6e4)]=_0xe2032a(0x3c7)+'te'+(_0x14c891?_0x3b6a23[_0xe2032a(0x51a)]:''),_0x4fae40[_0xe2032a(0x635)+_0xe2032a(0x312)+'t']=_0xd79459,_0x4fae40;}function _0x4be112(_0x349f05,_0x746f19,_0x40f128,_0x195239,_0x4558cf){var _0x2d4ce3=_0x534129,_0x5e1394=document['creat'+_0x2d4ce3(0x713)+_0x2d4ce3(0x6f6)](_0x1c1457[_0x2d4ce3(0x61c)]);_0x5e1394[_0x2d4ce3(0x405)+'Name']=_0x2d4ce3(0x2de)+'rd'+(_0x40f128?_0x1c1457[_0x2d4ce3(0x542)]:'');var _0x356633=document[_0x2d4ce3(0x37f)+_0x2d4ce3(0x713)+_0x2d4ce3(0x6f6)](_0x1c1457[_0x2d4ce3(0x61c)]);_0x356633[_0x2d4ce3(0x405)+_0x2d4ce3(0x6e4)]='sk-ca'+_0x2d4ce3(0x31a)+'ad';var _0x44b205=document['creat'+_0x2d4ce3(0x713)+'ent']('div');_0x44b205[_0x2d4ce3(0x405)+'Name']=_0x1c1457['nDFog'];var _0x415f92=document['creat'+_0x2d4ce3(0x713)+_0x2d4ce3(0x6f6)](_0x1c1457[_0x2d4ce3(0x376)]);_0x415f92['textC'+'onten'+'t']=_0x349f05,_0x44b205[_0x2d4ce3(0x61a)+'dChil'+'d'](_0x415f92);if(_0x195239){var _0x251011=_0x506521(_0x40f128,_0x17580e=>{var _0x190f2e=_0x2d4ce3;_0x5e1394[_0x190f2e(0x405)+'List']['toggl'+'e']('on',_0x17580e),_0x1c1457['FwnUi'](_0x195239,_0x17580e);});_0x356633[_0x2d4ce3(0x61a)+'d'](_0x44b205,_0x251011);}else _0x356633['appen'+_0x2d4ce3(0x382)+'d'](_0x44b205);_0x5e1394[_0x2d4ce3(0x61a)+_0x2d4ce3(0x382)+'d'](_0x356633);if(_0x4558cf&&_0x4558cf[_0x2d4ce3(0x4cb)+'h']){var _0x6791b5=document[_0x2d4ce3(0x37f)+_0x2d4ce3(0x713)+'ent'](_0x2d4ce3(0x200));_0x6791b5[_0x2d4ce3(0x405)+_0x2d4ce3(0x6e4)]='sk-mb'+_0x2d4ce3(0x641);var _0x37be64=document['creat'+'eElem'+'ent'](_0x2d4ce3(0x200));_0x37be64['class'+'Name']=_0x1c1457[_0x2d4ce3(0x2c1)],_0x37be64['textC'+_0x2d4ce3(0x312)+'t']=_0x746f19,_0x6791b5['appen'+_0x2d4ce3(0x382)+'d'](_0x37be64);for(var _0x4a4c46 of _0x4558cf)_0x6791b5[_0x2d4ce3(0x61a)+'dChil'+'d'](_0x4a4c46);_0x5e1394[_0x2d4ce3(0x61a)+'dChil'+'d'](_0x6791b5);}return _0x5e1394;}var _0x29eb82=[{'id':_0x534129(0x695)+'t','label':_0x3b6a23[_0x534129(0x647)]},{'id':_0x534129(0x1d5),'label':'Move'},{'id':'visua'+'l','label':_0x534129(0x58b)+'l'},{'id':_0x3b6a23[_0x534129(0x55c)],'label':_0x3b6a23['ucMmd']},{'id':_0x534129(0x608),'label':_0x3b6a23[_0x534129(0x284)]}];function _0x2bdb5f(){var _0x2a3526=_0x534129,_0x2fcf06=_0x58d4d2['safeM'+'ode']?'SAFE\x20'+_0x2a3526(0x4cd)+_0x2a3526(0x4c2)+'rlay\x20'+_0x2a3526(0x259)+_0x2a3526(0x6e3)+'ooks\x20'+_0x2a3526(0x20f)+_0x2a3526(0x1de)+'\x20exit'+')':_0x58d4d2[_0x2a3526(0x230)]?_0x1c1457[_0x2a3526(0x681)](_0x2a3526(0x1f9)+_0x2a3526(0x424)+'\x20'+(_0x58d4d2[_0x2a3526(0x658)+'Total']?_0x1c1457[_0x2a3526(0x281)](_0x1c1457['ApSwj'](_0x58d4d2[_0x2a3526(0x658)+'Ok']+'/',_0x58d4d2[_0x2a3526(0x658)+'Total']),_0x2a3526(0x566)+'s'):_0x2a3526(0x68a)+'ks\x20ar'+_0x2a3526(0x290)+'all\x20o'+'ff)'),_0x2a3526(0x346)+'me\x20')+(_0x58d4d2['gameL'+'oaded']?'loade'+'d':_0x1c1457['Ztmzt'])+('\x20|\x20sh'+_0x2a3526(0x4d8)+'\x20')+(_0x58d4d2['shoot'+_0x2a3526(0x412)]?'held':'none')+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x58d4d2[_0x2a3526(0x2f0)+_0x2a3526(0x702)]?_0x1c1457['amDdC']:_0x1c1457[_0x2a3526(0x20c)]):_0x1c1457['LnOVG'];if(_0x58d4d2['lastE'+_0x2a3526(0x436)])_0x2fcf06+=_0x1c1457['LhGNO'](_0x2a3526(0x535)+_0x2a3526(0x1bb),_0x58d4d2[_0x2a3526(0x467)+'rror']);return _0x4be112(_0x1c1457[_0x2a3526(0x51c)],_0x2fcf06,_0x58d4d2[_0x2a3526(0x230)],null,[_0x1c1457[_0x2a3526(0x5c3)](_0x142b9a,_0x1c1457['evEvX'],_0x1c1457['pGUns'],_0xadf466(_0x2a3526(0x4c4),()=>{var _0x3bbdbc=_0x2a3526;try{if(_0x51d458)_0x51d458['call'](_0x3bbdbc(0x3ed)+_0x3bbdbc(0x39a)+'e.App'+_0x3bbdbc(0x268)+'ion',_0x3bbdbc(0x543)+_0x3bbdbc(0x1ee)+_0x3bbdbc(0x36f)+_0x3bbdbc(0x5aa),[-0x7*0x17b+0xe*-0x114+0x1a65]);}catch(_0x56ea54){}}))]);}function _0x3cba6a(_0x1cfb5c){var _0x587175=_0x534129,_0x629d28={'tssxi':function(_0x507e2e){return _0x507e2e();},'bAiRC':function(_0xd462ca,_0x568d23,_0x321985){return _0xd462ca(_0x568d23,_0x321985);},'jGtlE':_0x587175(0x6c1)+'oil','WeEvx':function(_0x1669d6){var _0x291787=_0x587175;return _0x3b6a23[_0x291787(0x384)](_0x1669d6);},'kehRp':'wRexb','fZlSz':'kour-'+'io_','CIBHQ':_0x3b6a23[_0x587175(0x2b2)],'BMldZ':_0x3b6a23[_0x587175(0x403)],'NTvXR':function(_0x28d826){return _0x28d826();},'Tfrrp':'OdAof','NdAKI':function(_0x33b1f7){var _0x2d03f9=_0x587175;return _0x3b6a23[_0x2d03f9(0x68c)](_0x33b1f7);},'snThC':_0x3b6a23['GGkaX'],'iTaQU':function(_0x465041,_0x50eaf5){return _0x3b6a23['ASKaA'](_0x465041,_0x50eaf5);}};if(_0x3b6a23['ASKaA'](_0x1cfb5c,_0x587175(0x695)+'t')){if(_0x587175(0x457)===_0x3b6a23['IgDIP'])return[_0x3b6a23[_0x587175(0x68c)](_0x2bdb5f),_0x4be112(_0x3b6a23[_0x587175(0x6b7)],_0x587175(0x24e)+_0x587175(0x632)+'alth.'+'Initi'+'ateTa'+_0x587175(0x3a4)+'lth\x20a'+_0x587175(0x6f0)+'ealth'+'.Loca'+_0x587175(0x1f1)+_0x587175(0x2d6)+'othin'+_0x587175(0x4b3)+_0x587175(0x70e)+_0x587175(0x32c)+'ill\x20y'+_0x587175(0x61b),_0x9c6b2f['god'],_0x25095a=>{var _0xfd84d5=_0x587175;_0x9c6b2f['god']=_0x25095a,_0x1c1457[_0xfd84d5(0x682)](_0x308445),_0x125530(_0xfd84d5(0x591),_0x25095a),_0x125530(_0x1c1457[_0xfd84d5(0x468)],_0x25095a);},[]),_0x4be112(_0x587175(0x571)+'coil',_0x3b6a23[_0x587175(0x492)],_0x9c6b2f['noRec'+'oil'],_0xa19f62=>{var _0x1169a0=_0x587175;_0x9c6b2f[_0x1169a0(0x6c1)+_0x1169a0(0x40d)]=_0xa19f62,_0x629d28['tssxi'](_0x308445),_0x629d28[_0x1169a0(0x2ef)](_0x125530,_0x629d28[_0x1169a0(0x5f8)],_0xa19f62);},[]),_0x3b6a23[_0x587175(0x48d)](_0x4be112,'No\x20Sp'+_0x587175(0x497),_0x587175(0x6c6)+'s\x20spr'+_0x587175(0x4a9)+_0x587175(0x239)+_0x587175(0x1f6)+'ccura'+_0x587175(0x6d8)+'\x20your'+_0x587175(0x3f0)+_0x587175(0x5a9)+_0x587175(0x4cc)+'00ms.',_0x9c6b2f[_0x587175(0x36b)+_0x587175(0x656)],_0x505c04=>{var _0x4601f4=_0x587175;_0x9c6b2f['noSpr'+'ead']=_0x505c04,_0x629d28[_0x4601f4(0x6c9)](_0x308445);},[]),_0x3b6a23[_0x587175(0x48d)](_0x4be112,_0x587175(0x556)+'\x20Fire'+_0x587175(0x1ec)+']',_0x3b6a23['TYwZf'],_0x9c6b2f['rapid'+'Exp'],_0x3a7f73=>{var _0x40d743=_0x587175;_0x9c6b2f['rapid'+_0x40d743(0x622)]=_0x3a7f73,_0x1c1457['KAyyy'](_0x308445);},[]),_0x3b6a23[_0x587175(0x41b)](_0x4be112,_0x587175(0x61f)+'e\x20[EX'+'P]',_0x3b6a23[_0x587175(0x1d8)],_0x9c6b2f[_0x587175(0x4f9)+_0x587175(0x6c4)],_0x1163e4=>{var _0x12f4b0=_0x587175;_0x9c6b2f[_0x12f4b0(0x4f9)+'eExp']=_0x1163e4,_0x308445();},[_0x142b9a('Damag'+_0x587175(0x711)+'ue',null,_0x3b6a23[_0x587175(0x41b)](_0x47bdb7,_0x9c6b2f[_0x587175(0x4f9)+_0x587175(0x3ce)+'e'],-0x2602+-0x7b1+0x2dbd,-0x3ba+0x267d*0x1+0xe3*-0x25,-0x97e+0x2*-0x554+0x142b,_0x4ea747=>{var _0x3240bb=_0x587175;_0x9c6b2f[_0x3240bb(0x4f9)+_0x3240bb(0x3ce)+'e']=_0x4ea747,_0x308445();}))]),_0x3b6a23[_0x587175(0x26a)](_0x4be112,_0x3b6a23['XktuP'],_0x587175(0x59a)+_0x587175(0x29e)+'e\x20wea'+_0x587175(0x296)+_0x587175(0x3b9)+_0x587175(0x55e)+_0x587175(0x4e1)+_0x587175(0x66c)+_0x587175(0x3cb)+_0x587175(0x56d)+'s.',_0x9c6b2f[_0x587175(0x30c)+_0x587175(0x4ed)],_0x331e95=>{var _0x3a6ee6=_0x587175;_0x9c6b2f[_0x3a6ee6(0x30c)+_0x3a6ee6(0x4ed)]=_0x331e95,_0x308445();},[_0x3b6a23[_0x587175(0x399)](_0x5862d7,_0x587175(0x42c)+_0x587175(0x45d)+_0x587175(0x20e)+_0x587175(0x318)+'in,\x20t'+_0x587175(0x6fc)+'creme'+_0x587175(0x64a)+'ppens'+_0x587175(0x6b6)+'where'+'.')])];else{var _0x2bec2b=_0x44bcc8['hookP'+'refix']({'typeName':_0x2ef634,'methodName':_0x39bad4,'params':_0x5badc3,'returnType':_0x233e87},_0x21ceea);return _0x2bec2b['enabl'+'ed']=_0x45d019!==![],_0x368463[_0x4ee90c]=_0x2bec2b,_0x344004[_0x587175(0x658)+_0x587175(0x206)]++,_0x2bec2b;}}if(_0x3b6a23[_0x587175(0x265)](_0x1cfb5c,_0x587175(0x1d5)))return[_0x3b6a23['vsTic'](_0x4be112,_0x3b6a23['NROuG'],'Scale'+_0x587175(0x46d)+_0x587175(0x28d)+_0x587175(0x5fa)+_0x587175(0x697)+'speed'+_0x587175(0x4ce)+_0x587175(0x299)+'us\x20ac'+'celer'+_0x587175(0x545)+'.',_0x9c6b2f['speed'+_0x587175(0x34f)]!==-0x1edc+0x1ac5*-0x1+-0x1357*-0x3,null,[_0x142b9a(_0x3b6a23[_0x587175(0x470)],_0x587175(0x419)+'\x20defa'+_0x587175(0x2da),_0x47bdb7(_0x9c6b2f[_0x587175(0x5c1)+'Pct'],0x1f*-0xc+-0x1b2+0x358,0x3*0x7fe+-0x165b+-0x73,0xfb3*0x1+-0xb7a+-0x434,_0x2380e4=>{var _0x29716d=_0x587175;_0x9c6b2f[_0x29716d(0x5c1)+_0x29716d(0x34f)]=_0x2380e4,_0x308445();}))]),_0x3b6a23[_0x587175(0x6b9)](_0x4be112,_0x587175(0x2bf)+_0x587175(0x5d9)+_0x587175(0x662),_0x587175(0x319)+_0x587175(0x43b)+_0x587175(0x5f1)+'.jump'+'Force'+'\x20and\x20'+_0x587175(0x4e9)+'gravi'+_0x587175(0x286)+_0x587175(0x213),_0x9c6b2f['jumpP'+'ct']!==0xbff*0x1+0x3b*-0x16+0x7*-0xef||_0x3b6a23[_0x587175(0x305)](_0x9c6b2f['gravi'+'tyPct'],-0x2166+0x1*0x199d+0x82d),null,[_0x3b6a23[_0x587175(0x4c3)](_0x142b9a,_0x3b6a23[_0x587175(0x3ea)],null,_0x47bdb7(_0x9c6b2f['jumpP'+'ct'],0x2a5*0x5+-0x223e+-0x1537*-0x1,0x1894+0x1*0x23c2+-0x3b2a,0x1702+-0xfb4+0x175*-0x5,_0xd694a2=>{var _0x3b64e8=_0x587175;_0x9c6b2f[_0x3b64e8(0x30b)+'ct']=_0xd694a2,_0x308445();})),_0x142b9a(_0x587175(0x5e6)+'ty\x20%',_0x587175(0x6ef)+'\x20=\x20fl'+_0x587175(0x2a1),_0x3b6a23['lhqOl'](_0x47bdb7,_0x9c6b2f['gravi'+_0x587175(0x66a)],0x10f*0xf+0x1e33+-0x2e0a,0x18ff+-0x252c+0xcf5,0x532+0x12bb+0x78*-0x33,_0x22a1f6=>{var _0x5778f4=_0x587175;_0x5778f4(0x651)!=='IUEvk'?(_0x316d0b[_0x5778f4(0x51f)+'oReco'+'il']=_0x224bfa,_0x333065()):(_0x9c6b2f[_0x5778f4(0x6bb)+'tyPct']=_0x22a1f6,_0x308445());}))]),_0x3b6a23['ytLcQ'](_0x4be112,'Bunny'+_0x587175(0x3ac),_0x587175(0x6c6)+'s\x20Mov'+_0x587175(0x5f1)+_0x587175(0x706)+_0x587175(0x3cc)+'ime\x20s'+_0x587175(0x4b6)+_0x587175(0x6e8)+_0x587175(0x2a2)+_0x587175(0x338)+_0x587175(0x5b4)+_0x587175(0x4f6)+_0x587175(0x3d5),_0x9c6b2f['bhop'],_0x344478=>{var _0x1b8d54=_0x587175;_0x9c6b2f[_0x1b8d54(0x23f)]=_0x344478,_0x308445();},[])];if(_0x1cfb5c==='visua'+'l')return[_0x3b6a23['eewxA'](_0x4be112,_0x3b6a23['qlOQA'],_0x587175(0x3aa)+'+\x20LMB'+_0x587175(0x65f)+_0x587175(0x355)+'ce\x20ov'+'erlay'+'.',_0x9c6b2f[_0x587175(0x2ff)+_0x587175(0x3a8)],_0x134024=>{var _0x1ff6bd=_0x587175;if(_0x1c1457[_0x1ff6bd(0x48f)]===_0x1c1457['Thlhu'])_0x9c6b2f[_0x1ff6bd(0x2ff)+_0x1ff6bd(0x3a8)]=_0x134024,_0x308445();else try{_0x40d7e1['enabl'+'ed']=!!_0x366780;}catch(_0x2b2bfe){}},[_0x142b9a(_0x587175(0x383)+_0x587175(0x201),null,_0x361495(_0x9c6b2f[_0x587175(0x553)],[['bl',_0x587175(0x235)+_0x587175(0x221)+'t'],['br',_0x3b6a23['OyXLM']],['ml',_0x587175(0x430)+'middl'+'e']],_0x57fb4d=>{_0x9c6b2f['ksPos']=_0x57fb4d,_0x629d28['WeEvx'](_0x308445);})),_0x142b9a(_0x3b6a23[_0x587175(0x513)],null,_0x3b6a23['xKlqk'](_0x47bdb7,_0x9c6b2f[_0x587175(0x495)+'le'],-0x1079*0x1+0x866*-0x1+0x18df*0x1+0.6,-0x61a+0x24cb+-0x3d6*0x8+0.6000000000000001,-0xd1+0x11e6+0x1*-0x1115+0.05,_0x11aaec=>{_0x9c6b2f['ksSca'+'le']=_0x11aaec,_0x308445();})),_0x142b9a(_0x3b6a23[_0x587175(0x44d)],null,_0x506521(_0x9c6b2f['ksCps'],_0x46be73=>{var _0x2a7d58=_0x587175;_0x629d28[_0x2a7d58(0x707)]==='ngSCR'?(_0x2ba22d[_0x2a7d58(0x3c6)+_0x2a7d58(0x3e5)]=_0x5cfe9d,_0x129c67(),_0x3f599d['reloa'+'d']()):(_0x9c6b2f[_0x2a7d58(0x5d3)]=_0x46be73,_0x308445());}))]),_0x3b6a23[_0x587175(0x2fa)](_0x4be112,'Cross'+_0x587175(0x1a1),_0x587175(0x44b)+_0x587175(0x4fa)+_0x587175(0x25f)+_0x587175(0x33c)+_0x587175(0x3a5),_0x9c6b2f['cross'+_0x587175(0x1a1)],_0x52670b=>{var _0x495f0a=_0x587175;if(_0x495f0a(0x634)===_0x495f0a(0x634))_0x9c6b2f['cross'+'hair']=_0x52670b,_0x308445();else{if(_0xbbb843[_0x28a6c5]['id']&&_0x53b529[_0x3c5582]['id']['index'+'Of'](_0x629d28['fZlSz'])===0x72d*-0x1+-0xdae+0x14db)_0x5d0c78[_0x4b0e05][_0x495f0a(0x47a)][_0x495f0a(0x228)+'ay']=_0x495f0a(0x58e);}},[_0x3b6a23[_0x587175(0x2a3)](_0x142b9a,_0x587175(0x5dc),null,_0x47bdb7(_0x9c6b2f[_0x587175(0x4a4)+'e'],0x1bc*0x10+-0xc77*-0x1+-0x2837*0x1+0.5,0xd99+-0x2024+-0x128d*-0x1+0.5,-0x2249+0x573*0x1+-0xe6b*-0x2+0.1,_0x6e22b8=>{var _0x56d126=_0x587175;_0x9c6b2f[_0x56d126(0x4a4)+'e']=_0x6e22b8,_0x1c1457['KAyyy'](_0x308445);})),_0x3b6a23[_0x587175(0x2a3)](_0x142b9a,_0x587175(0x526),null,_0x4c74e6(_0x9c6b2f[_0x587175(0x1aa)+'or'],_0x3001e0=>{var _0x5596bd=_0x587175;_0x9c6b2f['chCol'+'or']=_0x3001e0,_0x629d28[_0x5596bd(0x6c9)](_0x308445);}))]),_0x4be112(_0x3b6a23[_0x587175(0x343)],_0x3b6a23['iPgmc'],_0x9c6b2f[_0x587175(0x309)],null,[_0x3b6a23[_0x587175(0x536)](_0x142b9a,_0x3b6a23['zXrdG'],null,_0x506521(_0x9c6b2f[_0x587175(0x309)],_0x93b1e9=>{var _0x194a8e=_0x587175;_0x9c6b2f[_0x194a8e(0x309)]=_0x93b1e9,_0x308445();})),_0x3b6a23[_0x587175(0x2d8)](_0x5862d7,_0x587175(0x5ca)+_0x587175(0x49a)+'ounte'+_0x587175(0x617)+_0x587175(0x1ef)+_0x587175(0x478)+'as\x20no'+_0x587175(0x452)+_0x587175(0x42d)+_0x587175(0x24a)+_0x587175(0x4f2)+_0x587175(0x32e)+_0x587175(0x4fd)+_0x587175(0x332))])];if(_0x1cfb5c===_0x587175(0x358))return[_0x3b6a23[_0x587175(0x4c5)](_0x4be112,_0x3b6a23['JfOBF'],_0x3b6a23['WRFjf'],_0x9c6b2f[_0x587175(0x357)+'ck'],_0x4e2b24=>{var _0x2b0d3c=_0x587175;_0x9c6b2f[_0x2b0d3c(0x357)+'ck']=_0x4e2b24,_0x308445();},[_0x3b6a23[_0x587175(0x24f)](_0x5862d7,'Takes'+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+'en\x20to'+'ggled'+'.')])];return[_0x3b6a23['Xkmcy'](_0x4be112,_0x3b6a23[_0x587175(0x643)],_0x587175(0x465)+'\x20UWMK'+_0x587175(0x248)+_0x587175(0x22c)+'—\x20no\x20'+_0x587175(0x3dc)+_0x587175(0x658)+_0x587175(0x2ad)+_0x587175(0x42f)+'\x20if\x20m'+_0x587175(0x5af)+_0x587175(0x523)+'\x27t\x20st'+'art.',_0x9c6b2f['safeM'+_0x587175(0x3e5)],_0x32ce92=>{var _0x4f7ed9=_0x587175;_0x1c1457[_0x4f7ed9(0x5ab)]('uGWSV',_0x1c1457[_0x4f7ed9(0x683)])?_0x5c6a9b[_0x4f7ed9(0x67d)]===_0x629d28[_0x4f7ed9(0x59c)]&&(_0x5d66c6['preve'+'ntDef'+'ault'](),_0x2a1bdc()):(_0x9c6b2f[_0x4f7ed9(0x3c6)+_0x4f7ed9(0x3e5)]=_0x32ce92,_0x1c1457[_0x4f7ed9(0x25e)](_0x308445),location[_0x4f7ed9(0x5c5)+'d']());},[_0x5862d7(_0x587175(0x43d)+_0x587175(0x698)+_0x587175(0x6ec)+_0x587175(0x39b)+_0x587175(0x40c)+'ches\x20'+'load\x20'+'in\x20sa'+_0x587175(0x6a0)+_0x587175(0x46a)+_0x587175(0x2b7)+_0x587175(0x3be)+_0x587175(0x32f)+_0x587175(0x6e6)+_0x587175(0x619)+_0x587175(0x3fa)+_0x587175(0x34d)+'\x20the\x20'+'hooks'+'-appl'+'ied\x20c'+_0x587175(0x4ae))]),_0x4be112('Hook\x20'+_0x587175(0x5a2)+'switc'+'hes',_0x3b6a23['yMssF'],_0x9c6b2f[_0x587175(0x2df)+'od']||_0x9c6b2f[_0x587175(0x2df)+_0x587175(0x66b)]||_0x9c6b2f[_0x587175(0x51f)+'oReco'+'il']||_0x9c6b2f['hookC'+_0x587175(0x5c9)+'e'],_0x345357=>{var _0x153088=_0x587175;_0x9c6b2f[_0x153088(0x2df)+'od']=_0x345357,_0x9c6b2f[_0x153088(0x2df)+_0x153088(0x66b)]=_0x345357,_0x9c6b2f[_0x153088(0x51f)+_0x153088(0x5e2)+'il']=_0x345357,_0x9c6b2f['hookC'+_0x153088(0x5c9)+'e']=_0x345357,_0x1c1457[_0x153088(0x682)](_0x308445),location[_0x153088(0x5c5)+'d']();},[_0x3b6a23['nhnoY'](_0x5862d7,_0x3b6a23[_0x587175(0x362)]),_0x3b6a23['FRCXz'](_0x142b9a,_0x3b6a23[_0x587175(0x640)],null,_0x3b6a23[_0x587175(0x237)](_0x506521,_0x9c6b2f['hookG'+'od'],_0x42f46a=>{_0x9c6b2f['hookG'+'od']=_0x42f46a,_0x1c1457['HpvON'](_0x308445);})),_0x3b6a23[_0x587175(0x2a3)](_0x142b9a,_0x3b6a23[_0x587175(0x6b2)],null,_0x506521(_0x9c6b2f[_0x587175(0x2df)+'odDie'],_0x491feb=>{var _0x5ac1e7=_0x587175,_0x5672b2={'hqqjO':function(_0x3ce97f,_0x2ee6bc){return _0x3ce97f!==_0x2ee6bc;}};if(_0x629d28['BMldZ']!=='tuEGl')try{var _0x333478=_0x3c2d0e[_0x5ac1e7(0x3f8)+'refix']({'typeName':_0xe77eed,'methodName':_0x301a23,'params':_0x5b31d6,'returnType':_0xa97a6},_0x50346f);return _0x333478[_0x5ac1e7(0x2c6)+'ed']=_0x5672b2[_0x5ac1e7(0x66d)](_0x56d26b,![]),_0xadde9d[_0x121cad]=_0x333478,_0x561b8c['hooks'+_0x5ac1e7(0x206)]++,_0x333478;}catch(_0x5440bb){return _0x11387c[_0x5ac1e7(0x293)]('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x5ac1e7(0x2f7)+'iled:',_0x3596dc,_0x5440bb&&_0x5440bb[_0x5ac1e7(0x68d)+'ge']),null;}else _0x9c6b2f['hookG'+_0x5ac1e7(0x66b)]=_0x491feb,_0x629d28[_0x5ac1e7(0x212)](_0x308445);})),_0x3b6a23[_0x587175(0x2a3)](_0x142b9a,_0x587175(0x6c1)+_0x587175(0x326)+_0x587175(0x441)+_0x587175(0x333)+'on.Ti'+_0x587175(0x278),null,_0x506521(_0x9c6b2f['hookN'+_0x587175(0x5e2)+'il'],_0x4f184a=>{var _0x446b22=_0x587175;_0x9c6b2f['hookN'+_0x446b22(0x5e2)+'il']=_0x4f184a,_0x308445();})),_0x3b6a23['Xsgnz'](_0x142b9a,'captu'+_0x587175(0x5a4)+'etGam'+'eRunn'+_0x587175(0x31b)+'\x20IsGr'+'ounde'+'d)',_0x3b6a23[_0x587175(0x394)],_0x3b6a23[_0x587175(0x425)](_0x506521,_0x9c6b2f[_0x587175(0x24b)+_0x587175(0x5c9)+'e'],_0x31fbac=>{var _0x240310=_0x587175;if(_0x629d28['Tfrrp']==='EzkYk')try{var _0x216331=_0x2c1f20['hookP'+_0x240310(0x2bc)+'x']({'typeName':_0x4d37f6,'methodName':_0x4de682,'params':_0x51e00f,'returnType':_0x291157},_0x553792);return _0x216331[_0x240310(0x2c6)+'ed']=_0x4be309!==![],_0x1dada1[_0x4319b1]=_0x216331,_0x42f623[_0x240310(0x658)+_0x240310(0x206)]++,_0x216331;}catch(_0x141cd9){return _0xd684f4[_0x240310(0x293)](_0x240310(0x476)+'ra-ko'+_0x240310(0x222)+_0x240310(0x56e)+_0x240310(0x2f7)+'iled:',_0x379b4e,_0x141cd9&&_0x141cd9['messa'+'ge']),null;}else _0x9c6b2f['hookC'+_0x240310(0x5c9)+'e']=_0x31fbac,_0x629d28['NdAKI'](_0x308445);}))]),_0x3b6a23['yxzoC'](_0x4be112,_0x3b6a23['JLEbv'],'Disab'+_0x587175(0x2a8)+'odeSt'+_0x587175(0x1fb)+'etect'+_0x587175(0x264)+_0x587175(0x44c)+'rtup\x20'+_0x587175(0x517)+_0x587175(0x423)+_0x587175(0x2b0)+_0x587175(0x539)+'\x20Keep'+'\x20ON.',_0x9c6b2f[_0x587175(0x58c)+_0x587175(0x54b)],_0x497184=>{var _0x5bdcc7=_0x587175;if(_0x629d28[_0x5bdcc7(0x1ad)]('mDfxv','mDfxv'))_0x9c6b2f[_0x5bdcc7(0x58c)+_0x5bdcc7(0x54b)]=_0x497184,_0x308445();else{var _0x4da3a0=_0x316c2a[_0x5bdcc7(0x37f)+_0x5bdcc7(0x713)+_0x5bdcc7(0x6f6)](_0x5bdcc7(0x200));_0x4da3a0[_0x5bdcc7(0x405)+_0x5bdcc7(0x6e4)]=_0x629d28[_0x5bdcc7(0x308)];var _0x90ffb3=_0xd1a58a[_0x5bdcc7(0x37f)+_0x5bdcc7(0x713)+_0x5bdcc7(0x6f6)]('span');_0x90ffb3['class'+'Name']=_0x5bdcc7(0x23e)+'bel',_0x90ffb3[_0x5bdcc7(0x635)+_0x5bdcc7(0x312)+'t']=_0x5deda0;if(_0x56c436){var _0x58ad69=_0x13b99e[_0x5bdcc7(0x37f)+'eElem'+_0x5bdcc7(0x6f6)](_0x5bdcc7(0x3f9));_0x58ad69['class'+_0x5bdcc7(0x6e4)]='sk-hi'+'nt',_0x58ad69['textC'+_0x5bdcc7(0x312)+'t']=_0x4650dc,_0x90ffb3[_0x5bdcc7(0x61a)+'dChil'+'d'](_0x58ad69);}return _0x4da3a0['appen'+'d'](_0x90ffb3,_0xf5d284),_0x4da3a0;}},[_0x5862d7('God/d'+_0x587175(0x4ab)+_0x587175(0x5c7)+_0x587175(0x1fd)+'atly\x20'+'raise'+'\x20ban\x20'+'risk\x20'+'even\x20'+_0x587175(0x62f)+'this\x20'+_0x587175(0x57d),!![])]),_0x4be112(_0x3b6a23['xTLAz'],_0x3b6a23['iOBkO'],!![],null,[_0x142b9a(_0x3b6a23['mMTJh'],null,_0x3b6a23[_0x587175(0x3ae)](_0xadf466,_0x587175(0x6a2),()=>{var _0x358b78=_0x587175;_0x9c6b2f={..._0x4eda84},_0x1c1457['qujhQ'](_0x308445),location[_0x358b78(0x5c5)+'d']();}))])];}var _0x2dbe9e=null;function _0x4f7723(_0x381cfd){var _0xe46e0f=_0x534129;if(_0x3b6a23['iykwO']('Shcrr',_0xe46e0f(0x611))){_0x1bb046=_0x381cfd;if(!_0x2dbe9e){var _0x35736b=document['creat'+_0xe46e0f(0x713)+_0xe46e0f(0x6f6)](_0x3b6a23[_0xe46e0f(0x3d9)]);_0x35736b[_0xe46e0f(0x635)+'onten'+'t']=_0x18071b,_0x3b265c['appen'+_0xe46e0f(0x382)+'d'](_0x35736b),_0x2dbe9e=_0x1fca38(),_0x3b265c[_0xe46e0f(0x61a)+_0xe46e0f(0x382)+'d'](_0x2dbe9e),requestAnimationFrame(()=>_0x2dbe9e[_0xe46e0f(0x405)+_0xe46e0f(0x323)][_0xe46e0f(0x518)]('shown'));}_0x2dbe9e[_0xe46e0f(0x405)+_0xe46e0f(0x323)][_0xe46e0f(0x624)+'e'](_0x3b6a23['meEnb'],_0x381cfd);}else return _0x41c0e2['warn']('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0xe46e0f(0x386),_0x5803ed,_0x2465c2&&_0x55116f['messa'+'ge']),null;}function _0x2cabde(){_0x4f7723(!_0x1bb046);}function _0x1fca38(){var _0x3ced03=_0x534129,_0x19da46=document[_0x3ced03(0x37f)+'eElem'+_0x3ced03(0x6f6)]('div');_0x19da46['class'+_0x3ced03(0x6e4)]=_0x3ced03(0x427)+_0x3ced03(0x586);var _0x5d2427=document['creat'+_0x3ced03(0x713)+_0x3ced03(0x6f6)](_0x1c1457[_0x3ced03(0x39f)]);_0x5d2427['class'+_0x3ced03(0x6e4)]=_0x3ced03(0x38e)+'de';var _0x360d26=document['creat'+_0x3ced03(0x713)+_0x3ced03(0x6f6)](_0x3ced03(0x200));_0x360d26[_0x3ced03(0x405)+'Name']='mn-lo'+'go',_0x360d26['inner'+'HTML']=_0x3ced03(0x607)+_0x3ced03(0x1e4)+_0x3ced03(0x36a)+_0x3ced03(0x54e)+'\x2024\x22\x20'+'class'+'=\x22mn-'+'logo-'+_0x3ced03(0x31c)+_0x3ced03(0x473)+'\x20d=\x22M'+_0x3ced03(0x6f9)+'c-1.5'+_0x3ced03(0x2e6)+'4-4.5'+_0x3ced03(0x3d7)+'5\x200-2'+_0x3ced03(0x5cb)+_0x3ced03(0x2d0)+_0x3ced03(0x1eb)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x3ced03(0x577)+'.5z\x22\x20'+'fill='+_0x3ced03(0x558)+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x3ced03(0x5f6)+_0x3ced03(0x208)+'h=\x222\x22'+_0x3ced03(0x3d8)+'ke-li'+'necap'+_0x3ced03(0x3fb)+_0x3ced03(0x4b0)+'troke'+'-line'+_0x3ced03(0x64f)+'\x22roun'+_0x3ced03(0x2cf)+'circl'+_0x3ced03(0x1a8)+_0x3ced03(0x1fa)+_0x3ced03(0x64c)+'0\x22\x20r='+'\x221.5\x22'+_0x3ced03(0x5be)+_0x3ced03(0x55d)+_0x3ced03(0x705)+_0x3ced03(0x6ba)+'vg>',_0x5d2427[_0x3ced03(0x61a)+_0x3ced03(0x382)+'d'](_0x360d26);var _0x182d62=document['creat'+_0x3ced03(0x713)+'ent'](_0x3ced03(0x200));_0x182d62['class'+_0x3ced03(0x6e4)]='mn-ma'+'in';var _0x1e26d8=document[_0x3ced03(0x37f)+'eElem'+'ent'](_0x1c1457[_0x3ced03(0x214)]);_0x1e26d8[_0x3ced03(0x405)+'Name']=_0x1c1457[_0x3ced03(0x25c)];var _0x50de15=document[_0x3ced03(0x37f)+_0x3ced03(0x713)+_0x3ced03(0x6f6)](_0x3ced03(0x200));_0x50de15['class'+_0x3ced03(0x6e4)]=_0x3ced03(0x686)+_0x3ced03(0x1b2);var _0x4d9507=document[_0x3ced03(0x37f)+'eElem'+_0x3ced03(0x6f6)]('h2');_0x4d9507[_0x3ced03(0x405)+_0x3ced03(0x6e4)]=_0x3ced03(0x644),_0x4d9507['textC'+_0x3ced03(0x312)+'t']='Sakur'+_0x3ced03(0x2fb)+'r';var _0x48cbc5=document[_0x3ced03(0x37f)+_0x3ced03(0x713)+_0x3ced03(0x6f6)](_0x1c1457['qXnAK']);_0x48cbc5[_0x3ced03(0x405)+_0x3ced03(0x6e4)]=_0x3ced03(0x2ab)+'b',_0x48cbc5[_0x3ced03(0x635)+'onten'+'t']=_0x1c1457[_0x3ced03(0x253)],_0x50de15[_0x3ced03(0x61a)+'d'](_0x4d9507,_0x48cbc5);var _0x21f3dd=document[_0x3ced03(0x37f)+'eElem'+_0x3ced03(0x6f6)](_0x1c1457[_0x3ced03(0x5bd)]);_0x21f3dd[_0x3ced03(0x5f9)]='butto'+'n',_0x21f3dd['class'+_0x3ced03(0x6e4)]=_0x3ced03(0x5ce)+'ose',_0x21f3dd[_0x3ced03(0x636)]='Close',_0x21f3dd[_0x3ced03(0x454)+_0x3ced03(0x455)]=_0x1c1457[_0x3ced03(0x60d)],_0x21f3dd[_0x3ced03(0x3f5)+'ck']=()=>_0x4f7723(![]),_0x1e26d8[_0x3ced03(0x61a)+'d'](_0x50de15,_0x21f3dd);var _0x356d9a=document[_0x3ced03(0x37f)+_0x3ced03(0x713)+'ent']('div');_0x356d9a[_0x3ced03(0x405)+'Name']=_0x3ced03(0x1ab)+'ls',_0x182d62['appen'+'d'](_0x1e26d8,_0x356d9a),_0x19da46[_0x3ced03(0x61a)+'d'](_0x5d2427,_0x182d62);var _0x470c0f=new Map();for(var _0x5508ac of _0x29eb82){var _0xc14613=_0x1c1457[_0x3ced03(0x2c8)][_0x3ced03(0x578)]('|'),_0x34935a=-0xad*-0x5+0x1871+0x1*-0x1bd2;while(!![]){switch(_0xc14613[_0x34935a++]){case'0':_0x470c0f['set'](_0x5508ac['id'],_0x2f9a89);continue;case'1':_0x2f9a89['inner'+'HTML']=_0x1c1457['Uzevk'](_0x1c1457['QxCTa']+_0x5508ac[_0x3ced03(0x292)],_0x1c1457[_0x3ced03(0x320)]);continue;case'2':_0x2f9a89[_0x3ced03(0x3f5)+'ck']=(_0x1bdb26=>()=>_0x28e59a(_0x1bdb26))(_0x5508ac['id']);continue;case'3':_0x2f9a89[_0x3ced03(0x636)]=_0x5508ac[_0x3ced03(0x292)];continue;case'4':_0x5d2427['appen'+_0x3ced03(0x382)+'d'](_0x2f9a89);continue;case'5':_0x2f9a89[_0x3ced03(0x5f9)]=_0x1c1457[_0x3ced03(0x5bd)];continue;case'6':_0x2f9a89['class'+'Name']=_0x3ced03(0x54f)+'b';continue;case'7':var _0x2f9a89=document[_0x3ced03(0x37f)+_0x3ced03(0x713)+'ent']('butto'+'n');continue;}break;}}function _0x28e59a(_0x44eb31){var _0x51225a=_0x3ced03,_0x45fea3=(_0x51225a(0x4dd)+'|1|2|'+'3')[_0x51225a(0x578)]('|'),_0x4bce03=0x26b4+0x94d+-0x1*0x3001;while(!![]){switch(_0x45fea3[_0x4bce03++]){case'0':_0x156f59['cat']=_0x44eb31;continue;case'1':_0x4d9507['textC'+_0x51225a(0x312)+'t']=_0x1c1457[_0x51225a(0x6f2)](_0x1c1457[_0x51225a(0x1f0)],_0x472b9c[_0x51225a(0x292)]);continue;case'2':for(var [_0x2c1bd6,_0x242f96]of _0x470c0f)_0x242f96['class'+_0x51225a(0x323)]['toggl'+'e'](_0x51225a(0x289)+'e',_0x2c1bd6===_0x44eb31);continue;case'3':_0x356d9a['repla'+_0x51225a(0x5ea)+_0x51225a(0x4ea)](..._0x3cba6a(_0x44eb31));continue;case'4':_0x1c1457[_0x51225a(0x6d1)](_0x30e35e);continue;case'5':var _0x472b9c=_0x29eb82[_0x51225a(0x209)](_0x5dd78b=>_0x5dd78b['id']===_0x44eb31)||_0x29eb82[-0x1d04+0x4*0x789+-0x120];continue;}break;}}return _0x1c1457['FfCng'](_0x28e59a,_0x156f59['cat']||_0x3ced03(0x695)+'t'),_0x1c1457[_0x3ced03(0x1a0)](setInterval,()=>{var _0x6aedf3=_0x3ced03;if(!_0x1bb046)return;var _0x4cdd7c=_0x356d9a[_0x6aedf3(0x671)+_0x6aedf3(0x1a6)];for(var _0x1098fb=0x2525+0xda3+-0x514*0xa;_0x1098fb<_0x4cdd7c['lengt'+'h'];_0x1098fb++){var _0x535ef9=_0x4cdd7c[_0x1098fb][_0x6aedf3(0x53b)+_0x6aedf3(0x301)+'tor'](_0x1c1457['CslzD']);_0x535ef9&&(_0x1c1457['gTlPV'](_0x535ef9[_0x6aedf3(0x635)+'onten'+'t'][_0x6aedf3(0x481)+'Of'](_0x6aedf3(0x410)),-0x15e8+-0x9*-0x41d+-0x35*0x49)||_0x535ef9[_0x6aedf3(0x635)+_0x6aedf3(0x312)+'t'][_0x6aedf3(0x481)+'Of']('SAFE')===-0x16b1+0x21d0+-0xdb*0xd)&&(_0x535ef9['textC'+_0x6aedf3(0x312)+'t']=_0x58d4d2[_0x6aedf3(0x3c6)+'ode']?_0x6aedf3(0x297)+'MODE\x20'+_0x6aedf3(0x2ec)+'rlay\x20'+'only,'+_0x6aedf3(0x6e3)+'ooks\x20'+_0x6aedf3(0x20f)+_0x6aedf3(0x1de)+_0x6aedf3(0x1c1)+')':_0x58d4d2[_0x6aedf3(0x230)]?_0x1c1457['LrZJS'](_0x1c1457['GsLRC'](_0x6aedf3(0x1f9)+'bound'+'\x20'+(_0x58d4d2[_0x6aedf3(0x658)+_0x6aedf3(0x206)]?_0x1c1457[_0x6aedf3(0x281)](_0x58d4d2['hooks'+'Ok']+'/'+_0x58d4d2[_0x6aedf3(0x658)+'Total'],'\x20hook'+'s'):_0x6aedf3(0x68a)+'ks\x20ar'+_0x6aedf3(0x290)+_0x6aedf3(0x68e)+_0x6aedf3(0x4bb))+_0x1c1457[_0x6aedf3(0x590)]+(_0x58d4d2[_0x6aedf3(0x306)+'oaded']?'loade'+'d':_0x1c1457[_0x6aedf3(0x486)]),_0x6aedf3(0x269)+_0x6aedf3(0x4d8)+'\x20'),_0x58d4d2['shoot'+'ers']?_0x6aedf3(0x466):_0x1c1457[_0x6aedf3(0x20c)])+_0x1c1457[_0x6aedf3(0x3ab)]+(_0x58d4d2[_0x6aedf3(0x2f0)+_0x6aedf3(0x702)]?_0x6aedf3(0x466):_0x1c1457[_0x6aedf3(0x20c)])+(_0x58d4d2[_0x6aedf3(0x467)+'rror']?_0x6aedf3(0x535)+'R:\x20'+_0x58d4d2[_0x6aedf3(0x467)+'rror']:''):_0x1c1457['FKoHG']);}},0x1357*-0x1+-0x7*-0x166+0xd75),_0x19da46;}var _0x18071b='\x0a\x20\x20\x20\x20'+':host'+_0x534129(0x3f3)+_0x534129(0x655)+_0x534129(0x506)+';\x20}\x0a\x20'+_0x534129(0x2a7)+'{\x20box'+_0x534129(0x2a5)+_0x534129(0x267)+_0x534129(0x2e3)+_0x534129(0x512)+_0x534129(0x663)+_0x534129(0x3f6)+';\x20fon'+'t-fam'+'ily:\x20'+_0x534129(0x2d9)+_0x534129(0x2cb)+_0x534129(0x598)+'\x20UI\x22,'+'\x20syst'+'em-ui'+',\x20san'+'s-ser'+_0x534129(0x5e7)+'\x0a\x20\x20\x20\x20'+_0x534129(0x51b)+_0x534129(0x2f9)+'{\x20pos'+'ition'+_0x534129(0x5a5)+_0x534129(0x56a)+_0x534129(0x2e2)+_0x534129(0x3b8)+_0x534129(0x37b)+'botto'+'m:\x2024'+_0x534129(0x2be)+'idth:'+'\x20min('+_0x534129(0x672)+',\x20cal'+'c(100'+'vw\x20-\x20'+'48px)'+_0x534129(0x55b)+_0x534129(0x6c2)+_0x534129(0x501)+_0x534129(0x673)+'80px,'+_0x534129(0x4f8)+_0x534129(0x44a)+_0x534129(0x6a7)+_0x534129(0x1c5)+_0x534129(0x21a)+_0x534129(0x3a0)+_0x534129(0x52b)+_0x534129(0x58d)+'x;\x20ga'+_0x534129(0x2aa)+_0x534129(0x44e)+'addin'+_0x534129(0x41a)+'px;\x20b'+'order'+_0x534129(0x2b5)+_0x534129(0x4a7)+'2px;\x20'+'point'+_0x534129(0x5d2)+_0x534129(0x4f4)+'\x20auto'+';\x0a\x20\x20\x20'+_0x534129(0x32b)+_0x534129(0x35a)+_0x534129(0x202)+_0x534129(0x63b)+_0x534129(0x613)+_0x534129(0x250)+_0x534129(0x370)+'backd'+'rop-f'+'ilter'+_0x534129(0x1ce)+'r(22p'+_0x534129(0x70c)+_0x534129(0x1e7)+_0x534129(0x4d4)+'%);\x20-'+_0x534129(0x482)+'t-bac'+_0x534129(0x39e)+'-filt'+_0x534129(0x3f1)+_0x534129(0x1a7)+'2px)\x20'+_0x534129(0x463)+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+_0x534129(0x679)+_0x534129(0x610)+_0x534129(0x3bc)+'\x200\x200\x20'+'1px\x20r'+_0x534129(0x406)+_0x534129(0x1be)+_0x534129(0x1c0)+',.06)'+_0x534129(0x4f0)+_0x534129(0x369)+'1px\x200'+_0x534129(0x24d)+_0x534129(0x49c)+'255,2'+_0x534129(0x6ed)+'5),\x200'+_0x534129(0x1d1)+_0x534129(0x40f)+_0x534129(0x24d)+_0x534129(0x26f)+_0x534129(0x1af)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x534129(0x50f)+_0x534129(0x25b)+'\x20tran'+_0x534129(0x568)+':\x20tra'+'nslat'+_0x534129(0x261)+_0x534129(0x347)+_0x534129(0x1f3)+_0x534129(0x5d2)+_0x534129(0x4f4)+'\x20none'+';\x20tra'+_0x534129(0x525)+_0x534129(0x414)+'pacit'+_0x534129(0x4b7)+'s\x20eas'+'e,\x20tr'+_0x534129(0x1f5)+_0x534129(0x2e7)+'5s\x20cu'+_0x534129(0x25d)+_0x534129(0x1bf)+'(.22,'+_0x534129(0x5b5)+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x534129(0x6b8)+'r:\x20#f'+_0x534129(0x377)+_0x534129(0x3d1)+'t-siz'+'e:\x2013'+'px;\x20}'+_0x534129(0x5ee)+'.mn-p'+_0x534129(0x51e)+'shown'+'\x20{\x20op'+_0x534129(0x5b7)+':\x201;\x20'+'trans'+_0x534129(0x6af)+_0x534129(0x5ac)+_0x534129(0x203)+'nter-'+'event'+'s:\x20au'+'to;\x20}'+_0x534129(0x5ee)+_0x534129(0x5d8)+'ide\x20{'+_0x534129(0x287)+_0x534129(0x43f)+_0x534129(0x4af)+_0x534129(0x692)+_0x534129(0x2c7)+_0x534129(0x5b6)+':\x20col'+_0x534129(0x714)+_0x534129(0x6d9)+_0x534129(0x252)+'s:\x20ce'+_0x534129(0x456)+_0x534129(0x534)+'\x204px;'+'\x20widt'+_0x534129(0x64d)+'px;\x20f'+'lex:\x20'+_0x534129(0x6cd)+_0x534129(0x340)+'ing:\x20'+'12px\x20'+('0;\x20bo'+_0x534129(0x3c1)+_0x534129(0x1f2)+'s:\x2016'+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+_0x534129(0x675)+'round'+':\x20rgb'+_0x534129(0x600)+',255,'+_0x534129(0x3b5)+'025);'+'\x20box-'+_0x534129(0x57c)+_0x534129(0x487)+'set\x200'+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+_0x534129(0x1c0)+',.05)'+_0x534129(0x4d0)+'\x20\x20\x20.m'+'n-log'+_0x534129(0x37d)+_0x534129(0x1c3)+_0x534129(0x20a)+'id;\x20p'+_0x534129(0x620)+_0x534129(0x314)+_0x534129(0x1ed)+_0x534129(0x6ca)+_0x534129(0x50e)+':\x2032p'+_0x534129(0x1df)+'ight:'+'\x2032px'+_0x534129(0x4d0)+_0x534129(0x1b6)+'n-log'+_0x534129(0x288)+'\x20{\x20wi'+_0x534129(0x315)+_0x534129(0x38a)+_0x534129(0x392)+'ht:\x202'+_0x534129(0x65b)+_0x534129(0x19c)+_0x534129(0x271)+'visib'+_0x534129(0x270)+_0x534129(0x3a6)+':\x20dro'+_0x534129(0x33e)+'dow(0'+_0x534129(0x484)+'x\x20rgb'+'a(255'+_0x534129(0x1fe)+'157,.'+_0x534129(0x3b6)+_0x534129(0x694)+_0x534129(0x4be)+_0x534129(0x3af)+_0x534129(0x287)+_0x534129(0x43f)+_0x534129(0x4af)+_0x534129(0x3b1)+_0x534129(0x229)+_0x534129(0x5ec)+'enter'+';\x20jus'+_0x534129(0x328)+'conte'+'nt:\x20c'+'enter'+_0x534129(0x507)+_0x534129(0x241)+'2px;\x20'+'heigh'+'t:\x2034'+'px;\x20b'+_0x534129(0x2e3)+':\x200;\x20'+_0x534129(0x254)+_0x534129(0x57a)+'ius:\x20'+_0x534129(0x489)+_0x534129(0x5ee)+'\x20\x20bac'+'kgrou'+_0x534129(0x4ef)+'ransp'+_0x534129(0x5e1)+';\x20col'+_0x534129(0x275)+_0x534129(0x406)+'46,23'+_0x534129(0x27a)+_0x534129(0x593)+'\x20curs'+'or:\x20p'+_0x534129(0x4c7)+_0x534129(0x4e2)+'nt-si'+'ze:\x201'+_0x534129(0x55a)+_0x534129(0x353)+_0x534129(0x6d7)+_0x534129(0x451)+_0x534129(0x596)+_0x534129(0x364)+'mn-ta'+_0x534129(0x659)+'er\x20{\x20'+_0x534129(0x52c)+_0x534129(0x51d)+_0x534129(0x422)+',238,'+_0x534129(0x674)+_0x534129(0x39d)+_0x534129(0x5ee)+'.mn-t'+'ab.ac'+_0x534129(0x3cf)+_0x534129(0x5ed)+'or:\x20#'+'ff6b9'+_0x534129(0x3b4)+'ckgro'+_0x534129(0x202)+'rgba('+_0x534129(0x1d6)+_0x534129(0x1b5)+_0x534129(0x307)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-mai'+'n\x20{\x20f'+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x534129(0x603)+_0x534129(0x48a)+_0x534129(0x650)+_0x534129(0x692)+';\x20fle'+'x-dir'+_0x534129(0x4b5)+'n:\x20co'+'lumn;'+_0x534129(0x2a4)+_0x534129(0x1b7)+'-top\x20'+_0x534129(0x5eb)+_0x534129(0x650)+_0x534129(0x692)+';\x20ali'+_0x534129(0x57f)+_0x534129(0x469)+_0x534129(0x1d4)+_0x534129(0x440)+'p:\x2012'+_0x534129(0x44e)+_0x534129(0x5ef)+'g:\x206p'+_0x534129(0x1c7)+_0x534129(0x4cf)+';\x20use'+_0x534129(0x236)+_0x534129(0x3a1)+_0x534129(0x6cd)+_0x534129(0x2a4)+_0x534129(0x1b7)+_0x534129(0x4aa)+'es\x20{\x20'+'flex:'+'\x201;\x20m'+'in-wi'+_0x534129(0x315)+_0x534129(0x596)+_0x534129(0x364)+_0x534129(0x5c6)+'{\x20fon'+_0x534129(0x6c5)+_0x534129(0x4da)+_0x534129(0x3df)+'ont-w'+_0x534129(0x2f4)+':\x20650'+_0x534129(0x4d0)+'\x20\x20\x20.m'+_0x534129(0x6e5)+_0x534129(0x3a7)+_0x534129(0x69d)+'ze:\x201'+_0x534129(0x62c)+_0x534129(0x341))+(_0x534129(0x6a8)+_0x534129(0x529)+_0x534129(0x364)+_0x534129(0x5ce)+_0x534129(0x3e6)+'\x20disp'+_0x534129(0x43f)+'grid;'+'\x20plac'+_0x534129(0x58a)+'ms:\x20c'+_0x534129(0x62e)+_0x534129(0x507)+_0x534129(0x34c)+_0x534129(0x448)+_0x534129(0x4a3)+'t:\x2028'+'px;\x20b'+'order'+_0x534129(0x6d3)+_0x534129(0x254)+'r-rad'+_0x534129(0x5f7)+_0x534129(0x448)+'backg'+_0x534129(0x42b)+_0x534129(0x511)+_0x534129(0x2fd)+'ent;\x20'+_0x534129(0x52c)+_0x534129(0x368)+_0x534129(0x576)+_0x534129(0x21d)+'ity:\x20'+'.45;\x20'+_0x534129(0x210)+_0x534129(0x490)+_0x534129(0x638)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-clo'+_0x534129(0x29f)+_0x534129(0x60f)+_0x534129(0x21d)+_0x534129(0x263)+_0x534129(0x5d1)+_0x534129(0x35a)+'und:\x20'+_0x534129(0x63b)+_0x534129(0x6bd)+_0x534129(0x1be)+_0x534129(0x60b)+_0x534129(0x218)+_0x534129(0x364)+_0x534129(0x5ce)+_0x534129(0x53f)+_0x534129(0x395)+_0x534129(0x50e)+_0x534129(0x47f)+'x;\x20he'+_0x534129(0x223)+'\x2014px'+_0x534129(0x61e)+'l:\x20no'+'ne;\x20s'+'troke'+':\x20cur'+_0x534129(0x428)+'olor;'+_0x534129(0x3d8)+_0x534129(0x6fa)+_0x534129(0x315)+'2;\x20st'+_0x534129(0x678)+'linec'+'ap:\x20r'+_0x534129(0x544)+'\x20}\x0a\x20\x20'+_0x534129(0x1b7)+'-cols'+_0x534129(0x1e1)+'ex:\x201'+';\x20min'+_0x534129(0x2ea)+_0x534129(0x19a)+_0x534129(0x373)+_0x534129(0x498)+'-y:\x20a'+_0x534129(0x712)+'displ'+_0x534129(0x685)+'rid;\x20'+'grid-'+_0x534129(0x6aa)+'ate-c'+'olumn'+_0x534129(0x2ce)+_0x534129(0x432)+'auto-'+_0x534129(0x633)+_0x534129(0x509)+'ax(25'+_0x534129(0x244)+_0x534129(0x549)+_0x534129(0x689)+_0x534129(0x57f)+_0x534129(0x469)+'start'+_0x534129(0x689)+'gn-co'+_0x534129(0x5e8)+':\x20sta'+_0x534129(0x245)+_0x534129(0x2af)+_0x534129(0x55a)+_0x534129(0x3c4)+'ng:\x200'+_0x534129(0x27b)+'6px\x200'+';\x20}\x0a\x20'+_0x534129(0x1b6)+'n-col'+_0x534129(0x5d0)+'ebkit'+_0x534129(0x691)+_0x534129(0x379)+'\x20{\x20wi'+_0x534129(0x315)+_0x534129(0x448)+'}\x0a\x20\x20\x20'+_0x534129(0x4be)+'cols:'+_0x534129(0x1d0)+'kit-s'+_0x534129(0x404)+_0x534129(0x485)+'humb\x20'+_0x534129(0x65d)+_0x534129(0x219)+_0x534129(0x53e)+'gba(2'+_0x534129(0x1be)+_0x534129(0x1c0)+',.08)'+_0x534129(0x703)+_0x534129(0x336)+_0x534129(0x437)+_0x534129(0x28a)+_0x534129(0x4d0)+_0x534129(0x418)+'k-car'+_0x534129(0x637)+'order'+_0x534129(0x2b5)+'us:\x201'+_0x534129(0x20d)+'backg'+_0x534129(0x42b)+_0x534129(0x51d)+'a(255'+_0x534129(0x4d7)+_0x534129(0x3b5)+_0x534129(0x3c5)+_0x534129(0x6cb)+_0x534129(0x57c)+'w:\x20in'+_0x534129(0x3b2)+_0x534129(0x563)+_0x534129(0x2a9)+_0x534129(0x406)+_0x534129(0x1be)+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x534129(0x418)+_0x534129(0x23b)+'d.on\x20'+'{\x20bac'+'kgrou'+_0x534129(0x53e)+_0x534129(0x406)+_0x534129(0x1be)+_0x534129(0x1c0)+',.04)'+_0x534129(0x41d)+'-shad'+_0x534129(0x648)+_0x534129(0x4ee)+_0x534129(0x337)+_0x534129(0x6ae)+'rgba('+_0x534129(0x1d6)+_0x534129(0x1b5)+_0x534129(0x4c6)+');\x20}\x0a'+_0x534129(0x364)+_0x534129(0x2de)+_0x534129(0x31a)+_0x534129(0x35f)+'displ')+(_0x534129(0x5a8)+'lex;\x20'+_0x534129(0x6d9)+'-item'+'s:\x20ce'+_0x534129(0x456)+'\x20gap:'+_0x534129(0x348)+_0x534129(0x340)+_0x534129(0x5b9)+_0x534129(0x26d)+_0x534129(0x434)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x534129(0x61d)+'-titl'+'e\x20{\x20f'+_0x534129(0x5b0)+'1;\x20mi'+'n-wid'+'th:\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x534129(0x23b)+_0x534129(0x313)+_0x534129(0x474)+_0x534129(0x4f1)+_0x534129(0x280)+'t-siz'+_0x534129(0x5ff)+'px;\x20f'+_0x534129(0x37e)+'eight'+':\x20600'+_0x534129(0x493)+_0x534129(0x275)+'gba(2'+_0x534129(0x30e)+_0x534129(0x27a)+_0x534129(0x4d1)+';\x20}\x0a\x20'+_0x534129(0x418)+_0x534129(0x23b)+_0x534129(0x22e)+_0x534129(0x5de)+_0x534129(0x4e7)+_0x534129(0x5d7)+'stron'+_0x534129(0x28f)+'olor:'+'\x20#fff'+'0f5;\x20'+'}\x0a\x20\x20\x20'+_0x534129(0x216)+_0x534129(0x1ea)+'\x20{\x20pa'+_0x534129(0x6a6)+':\x200\x201'+_0x534129(0x3b0)+_0x534129(0x55a)+'}\x0a\x20\x20\x20'+_0x534129(0x216)+_0x534129(0x502)+_0x534129(0x3a7)+_0x534129(0x69d)+_0x534129(0x390)+_0x534129(0x62c)+_0x534129(0x341)+_0x534129(0x6a8)+'4;\x20ma'+_0x534129(0x408)+_0x534129(0x3ef)+'m:\x206p'+'x;\x20}\x0a'+_0x534129(0x364)+'sk-ct'+_0x534129(0x5ae)+'ispla'+_0x534129(0x1b8)+'ex;\x20a'+_0x534129(0x3de)+_0x534129(0x314)+':\x20cen'+'ter;\x20'+_0x534129(0x3d3)+'8px;\x20'+_0x534129(0x3c4)+_0x534129(0x1e2)+_0x534129(0x1dc)+_0x534129(0x285)+'-size'+_0x534129(0x704)+_0x534129(0x65b)+'}\x0a\x20\x20\x20'+_0x534129(0x216)+'label'+_0x534129(0x1e1)+'ex:\x201'+';\x20col'+_0x534129(0x275)+_0x534129(0x406)+_0x534129(0x30e)+_0x534129(0x27a)+_0x534129(0x461)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x534129(0x584)+'ispla'+'y:\x20bl'+'ock;\x20'+'font-'+_0x534129(0x1e9)+_0x534129(0x1c4)+_0x534129(0x565)+_0x534129(0x1a4)+_0x534129(0x2f2)+_0x534129(0x694)+_0x534129(0x216)+'switc'+'h\x20{\x20p'+_0x534129(0x642)+_0x534129(0x601)+_0x534129(0x47b)+_0x534129(0x2b4)+'idth:'+'\x2026px'+_0x534129(0x2ae)+'ght:\x20'+'14px;'+_0x534129(0x356)+_0x534129(0x609)+';\x20bor'+_0x534129(0x336)+'adius'+':\x2099p'+'x;\x20ba'+'ckgro'+_0x534129(0x202)+_0x534129(0x63b)+_0x534129(0x6bd)+_0x534129(0x1be)+'5,.07'+_0x534129(0x2bb)+_0x534129(0x666)+'\x20poin'+'ter;\x20'+'flex:'+'\x20none'+';\x20}\x0a\x20'+_0x534129(0x418)+_0x534129(0x45b)+'tch::'+_0x534129(0x4d9)+'\x20{\x20co'+'ntent'+_0x534129(0x49f)+_0x534129(0x521)+_0x534129(0x4c8)+_0x534129(0x657)+'lute;'+'\x20top:'+'\x203px;'+'\x20left'+_0x534129(0x365)+';\x20wid'+_0x534129(0x64b)+'px;\x20h'+_0x534129(0x2f4)+':\x208px'+';\x20bor'+_0x534129(0x336)+'adius'+_0x534129(0x574)+_0x534129(0x58f)+_0x534129(0x219)+_0x534129(0x53e)+'gba(2'+'55,25'+_0x534129(0x1c0)+',.25)'+';\x20tra'+_0x534129(0x525)+_0x534129(0x335)+_0x534129(0x4b1)+'2s,\x20b'+_0x534129(0x5e0)+'ound\x20'+_0x534129(0x2a6)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+'h[ari'+'a-che'+_0x534129(0x49b)+_0x534129(0x21f)+_0x534129(0x4a6)+_0x534129(0x675)+'round'+_0x534129(0x51d))+('a(255'+',107,'+_0x534129(0x417)+_0x534129(0x60e)+'}\x0a\x20\x20\x20'+_0x534129(0x216)+_0x534129(0x6be)+'h[ari'+'a-che'+_0x534129(0x49b)+'\x22true'+_0x534129(0x70f)+'fter\x20'+_0x534129(0x407)+'t:\x2015'+_0x534129(0x47e)+_0x534129(0x5e0)+_0x534129(0x63e)+'\x20#ff6'+'b9d;\x20'+_0x534129(0x694)+'\x20.sk-'+'field'+'\x20{\x20ba'+_0x534129(0x35a)+'und:\x20'+'rgba('+_0x534129(0x6bd)+_0x534129(0x1be)+_0x534129(0x3eb)+_0x534129(0x701)+_0x534129(0x2e3)+_0x534129(0x6d3)+'borde'+'r-rad'+_0x534129(0x5f7)+'6px;\x20'+_0x534129(0x52c)+':\x20#f6'+'eef2;'+'\x20padd'+_0x534129(0x5b9)+_0x534129(0x4bf)+'px;\x20f'+'ont-s'+_0x534129(0x57e)+'11.5p'+_0x534129(0x1e8)+_0x534129(0x3f7)+_0x534129(0x491)+_0x534129(0x1c9)+_0x534129(0x413)+_0x534129(0x276)+'inset'+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+_0x534129(0x49c)+_0x534129(0x6bd)+_0x534129(0x6ed)+'5);\x20}'+_0x534129(0x5ee)+_0x534129(0x22b)+'ield\x20'+'optio'+_0x534129(0x31e)+_0x534129(0x5e0)+_0x534129(0x63e)+'\x20#221'+'419;\x20'+_0x534129(0x694)+_0x534129(0x216)+_0x534129(0x411)+_0x534129(0x54a)+_0x534129(0x52b)+':\x20fle'+_0x534129(0x606)+_0x534129(0x2f1)+'tems:'+'\x20cent'+_0x534129(0x1a9)+'ap:\x208'+_0x534129(0x520)+_0x534129(0x5ee)+_0x534129(0x5bc)+'lider'+_0x534129(0x589)+_0x534129(0x54c)+'-appe'+'aranc'+_0x534129(0x53d)+'ne;\x20a'+_0x534129(0x67e)+_0x534129(0x4b8)+_0x534129(0x5ac)+_0x534129(0x507)+'th:\x209'+_0x534129(0x55a)+_0x534129(0x4a3)+_0x534129(0x48e)+_0x534129(0x2e4)+'ckgro'+'und:\x20'+'trans'+_0x534129(0x316)+_0x534129(0x310)+'\x20\x20\x20\x20.'+_0x534129(0x5a0)+_0x534129(0x262)+':-web'+_0x534129(0x211)+_0x534129(0x40e)+'-runn'+'able-'+_0x534129(0x26c)+'\x20{\x20he'+'ight:'+'\x202px;'+_0x534129(0x356)+'er-ra'+_0x534129(0x652)+'\x202px;'+'\x20back'+_0x534129(0x5e5)+'d:\x20li'+'near-'+'gradi'+'ent(#'+_0x534129(0x5bb)+_0x534129(0x378)+'f6b9d'+')\x200\x200'+_0x534129(0x240)+_0x534129(0x2db)+_0x534129(0x402)+')\x20100'+_0x534129(0x238)+'repea'+_0x534129(0x33b)+_0x534129(0x339)+_0x534129(0x1c0)+',255,'+'.08);'+_0x534129(0x2a4)+_0x534129(0x44f)+'-slid'+_0x534129(0x680)+'webki'+_0x534129(0x220)+'der-t'+'humb\x20'+'{\x20-we'+'bkit-'+_0x534129(0x6cf)+_0x534129(0x32d)+_0x534129(0x491)+'e;\x20wi'+'dth:\x20'+_0x534129(0x524)+'heigh'+_0x534129(0x204)+'x;\x20ma'+'rgin-'+_0x534129(0x3a9)+'-2px;'+_0x534129(0x356)+_0x534129(0x1fc)+_0x534129(0x652)+_0x534129(0x217)+_0x534129(0x6ff)+_0x534129(0x5e5)+_0x534129(0x6bf)+_0x534129(0x5a6)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x534129(0x69c)+_0x534129(0x3a7)+'nt-si'+'ze:\x201'+_0x534129(0x62c)+_0x534129(0x353)+'weigh'+_0x534129(0x28e)+_0x534129(0x350)+_0x534129(0x4db)+_0x534129(0x34c)+_0x534129(0x448)+'text-'+'align'+':\x20rig'+_0x534129(0x27e)+'olor:'+'\x20rgba'+_0x534129(0x49d)+'238,2'+_0x534129(0x4fb)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x534129(0x38f)+_0x534129(0x59d))+(_0x534129(0x5da)+_0x534129(0x6d2)+_0x534129(0x567)+_0x534129(0x2f4)+':\x2022p'+'x;\x20bo'+_0x534129(0x3bb)+'\x200;\x20b'+_0x534129(0x2e3)+_0x534129(0x2b5)+_0x534129(0x29b)+'px;\x20b'+'ackgr'+_0x534129(0x63e)+'\x20none'+_0x534129(0x327)+'ding:'+_0x534129(0x23c)+'ursor'+':\x20poi'+_0x534129(0x456)+_0x534129(0x2a4)+'\x20\x20.sk'+'-note'+'\x20{\x20fo'+'nt-si'+_0x534129(0x390)+'1px;\x20'+_0x534129(0x52c)+_0x534129(0x51d)+_0x534129(0x422)+',238,'+_0x534129(0x674)+'5);\x20p'+_0x534129(0x5ef)+_0x534129(0x367)+_0x534129(0x4d2)+_0x534129(0x694)+_0x534129(0x216)+_0x534129(0x22a)+'err\x20{'+'\x20colo'+'r:\x20#f'+'f7a93'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+_0x534129(0x3f3)+'ign-s'+_0x534129(0x65c)+_0x534129(0x4a1)+_0x534129(0x274)+';\x20bor'+_0x534129(0x3fe)+_0x534129(0x426)+'rder-'+'radiu'+_0x534129(0x2a0)+_0x534129(0x398)+'dding'+':\x208px'+_0x534129(0x388)+_0x534129(0x58f)+'kgrou'+_0x534129(0x1e6)+'ff6b9'+_0x534129(0x397)+'lor:\x20'+_0x534129(0x554)+_0x534129(0x285)+_0x534129(0x34a)+_0x534129(0x704)+_0x534129(0x65b)+_0x534129(0x353)+'weigh'+_0x534129(0x451)+_0x534129(0x67b)+_0x534129(0x666)+_0x534129(0x385)+_0x534129(0x6ca)+'}\x0a\x20\x20\x20'+_0x534129(0x216)+_0x534129(0x43c)+_0x534129(0x684)+_0x534129(0x564)+_0x534129(0x4f5)+_0x534129(0x4bc)+'tness'+_0x534129(0x2ba)+_0x534129(0x4d0)+_0x534129(0x31f));window[_0x534129(0x2d1)+_0x534129(0x5c0)+_0x534129(0x572)+'r'](_0x3b6a23[_0x534129(0x4c0)],_0x59e4da=>{var _0x5f5bf9=_0x534129;if(_0x3b6a23[_0x5f5bf9(0x265)](_0x3b6a23[_0x5f5bf9(0x52d)],_0x5f5bf9(0x277))){if(_0x59e4da[_0x5f5bf9(0x67d)]===_0x3b6a23[_0x5f5bf9(0x2b2)]){if(_0x5f5bf9(0x2e0)!==_0x3b6a23['NYgzM'])_0x59e4da['preve'+'ntDef'+'ault'](),_0x2cabde();else{var _0x5afb40=_0x1c1457[_0x5f5bf9(0x361)][_0x5f5bf9(0x578)]('|'),_0x309bb3=-0x1961+0x262e+-0x1*0xccd;while(!![]){switch(_0x5afb40[_0x309bb3++]){case'0':_0xa3aa7d[_0x5f5bf9(0x2c6)+'ed']=_0x1c1457[_0x5f5bf9(0x3e8)](_0x29bc9c,![]);continue;case'1':_0x5d922f[_0x5f5bf9(0x658)+_0x5f5bf9(0x206)]++;continue;case'2':var _0xa3aa7d=_0x5f4c06['hookP'+_0x5f5bf9(0x2bc)+'x']({'typeName':_0x473a3c,'methodName':_0x2ca430,'params':_0x298f6e,'returnType':_0x16879f},_0x5065b9);continue;case'3':return _0xa3aa7d;case'4':_0x3c66b3[_0x20136e]=_0xa3aa7d;continue;}break;}}}}else{var _0x567707=(_0x5f5bf9(0x46e)+_0x5f5bf9(0x1cd)+_0x5f5bf9(0x35b)+'0|15|'+'12|16'+'|0|14'+'|7|4|'+_0x5f5bf9(0x53a))['split']('|'),_0x2f6465=0x2661+-0xcd+0x1e1*-0x14;while(!![]){switch(_0x567707[_0x2f6465++]){case'0':_0x1d58fe[_0x5f5bf9(0x1b9)+'tyle']=_0x556ec1?_0x1c1457[_0x5f5bf9(0x530)]:_0x5f5bf9(0x63b)+_0x5f5bf9(0x6bd)+_0x5f5bf9(0x2dc)+_0x5f5bf9(0x6f8)+')';continue;case'1':_0x4ec2dc[_0x5f5bf9(0x6dc)]();continue;case'2':_0x51eae7[_0x5f5bf9(0x710)+_0x5f5bf9(0x555)]();continue;case'3':_0x355191['fillT'+_0x5f5bf9(0x409)](_0x38348e,_0x450c1f+_0xf00908/(0x1276*0x1+-0x112*-0x1+-0x2a*0x77),_0x1c1457[_0x5f5bf9(0x242)](_0x18f216+_0x432e39/(-0x26fe+-0xca7*0x3+-0x63*-0xc7),_0x1ce6e9?(0x21fd+-0x95+-0x2163)*_0x6510:0x981+0x1be6+-0x2567));continue;case'4':_0x479ddb[_0x5f5bf9(0x21e)]=_0x1c1457[_0x5f5bf9(0x569)](_0x1c1457[_0x5f5bf9(0x514)]+_0x587286['round']((-0x8a9+-0x192d+-0x2*-0x10f1)*_0x4ee202),'px\x20ui'+'-sans'+_0x5f5bf9(0x3a3)+_0x5f5bf9(0x597)+_0x5f5bf9(0x49e)+'i,san'+_0x5f5bf9(0x260)+'if');continue;case'5':_0xda0d09[_0x5f5bf9(0x205)+'re']();continue;case'6':_0x562738[_0x5f5bf9(0x6df)]();continue;case'7':_0x1ade6a[_0x5f5bf9(0x6ab)+'aseli'+'ne']='middl'+'e';continue;case'8':_0x5ce923[_0x5f5bf9(0x1b9)+_0x5f5bf9(0x266)]=_0x556ec1?_0x1c1457['CiRLY']:_0x5f5bf9(0x63b)+'22,8,'+_0x5f5bf9(0x6fb)+'7)';continue;case'9':_0x55a35d&&(_0x1a3248['font']=_0x1c1457[_0x5f5bf9(0x654)](_0x1c1457['LrZJS']('600\x20',_0x33effd['round']((-0x175*0x17+-0x24a7+-0x4633*-0x1)*_0x5bd37a)),_0x5f5bf9(0x550)+'-sans'+_0x5f5bf9(0x3a3)+_0x5f5bf9(0x597)+_0x5f5bf9(0x49e)+_0x5f5bf9(0x3e7)+_0x5f5bf9(0x260)+'if'),_0x4a5ee1[_0x5f5bf9(0x1b9)+_0x5f5bf9(0x266)]=_0x556ec1?_0x5f5bf9(0x1ba):_0x5f5bf9(0x63b)+'255,2'+_0x5f5bf9(0x2dc)+_0x5f5bf9(0x63a)+'5)',_0x2a3073['fillT'+'ext'](_0x5ebc58,_0x37f646+_0x147f56/(0x1ed+0x1b7*-0xd+0x4*0x518),_0x10970e+_0x1c1457[_0x5f5bf9(0x483)](_0x1853c0,-0x4e2+-0x119d*0x1+-0x7*-0x337)+(0x1ab6+-0x1226+-0x34*0x2a)*_0x12de17));continue;case'10':_0x388224[_0x5f5bf9(0x345)+_0x5f5bf9(0x3d6)]=0x1*0x227f+0x3*0x17+0x329*-0xb;continue;case'11':var _0x556ec1=_0x17cd01[_0x5f5bf9(0x2fc)](_0x425f00);continue;case'12':_0x50a866['strok'+'e']();continue;case'13':if(_0x51bacd[_0x5f5bf9(0x42b)+_0x5f5bf9(0x2c0)])_0x52e25c['round'+'Rect'](_0x8ac595,_0x562174,_0x2cc7a9,_0x53a39c,_0x1c1457['TWseU'](-0x56+0x43*0x70+-0x1cf3,_0x15ecac));else _0x44510f['rect'](_0x36e909,_0x1302e0,_0x1d8487,_0xb802b8);continue;case'14':_0x3b90e3[_0x5f5bf9(0x360)+'lign']=_0x1c1457['zOQfD'];continue;case'15':_0x24b5cb['strok'+'eStyl'+'e']=_0x556ec1?_0x3d2860:_0x5f5bf9(0x63b)+_0x5f5bf9(0x1d6)+'07,15'+_0x5f5bf9(0x42e)+'5)';continue;case'16':_0x556ec1&&(_0x4e7ce9[_0x5f5bf9(0x57c)+_0x5f5bf9(0x243)+'r']=_0x2ef849,_0x1161c0[_0x5f5bf9(0x57c)+'wBlur']=-0x5*0x6c9+0x6*-0x10d+-0x2849*-0x1,_0x515d79[_0x5f5bf9(0x6dc)](),_0x59b067['shado'+_0x5f5bf9(0x6d5)]=-0x127a+-0xd4*0x2a+0x1*0x3542);continue;}break;}}},!![]);var _0x5db0d3=document[_0x534129(0x37f)+_0x534129(0x713)+_0x534129(0x6f6)](_0x3b6a23[_0x534129(0x3ff)]);_0x5db0d3[_0x534129(0x47a)][_0x534129(0x605)+'xt']=_0x3b6a23['JlTmt'],_0x5db0d3[_0x534129(0x454)+_0x534129(0x455)]='<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0x534129(0x30f)+_0x534129(0x473)+_0x534129(0x256)+_0x534129(0x6f9)+_0x534129(0x2d7)+_0x534129(0x2e6)+'4-4.5'+_0x534129(0x3d7)+_0x534129(0x55f)+_0x534129(0x5cb)+_0x534129(0x2d0)+_0x534129(0x1eb)+_0x534129(0x67c)+_0x534129(0x57b)+'5c0\x203'+'-2.5\x20'+_0x534129(0x577)+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+_0x534129(0x420)+_0x534129(0x560)+'9d\x22\x20s'+'troke'+_0x534129(0x208)+_0x534129(0x1ae)+_0x534129(0x3d8)+_0x534129(0x3a2)+_0x534129(0x215)+'=\x22rou'+'nd\x22\x20s'+_0x534129(0x5f6)+'-line'+_0x534129(0x64f)+_0x534129(0x5b1)+_0x534129(0x2cf)+_0x534129(0x3e4)+_0x534129(0x1a8)+_0x534129(0x1fa)+_0x534129(0x64c)+'0\x22\x20r='+_0x534129(0x34b)+_0x534129(0x5be)+_0x534129(0x55d)+_0x534129(0x705)+'/></s'+'vg>',_0x5db0d3[_0x534129(0x636)]=_0x534129(0x27c)+_0x534129(0x2fb)+'r',_0x5db0d3[_0x534129(0x22d)+_0x534129(0x6c0)+'er']=()=>_0x5db0d3[_0x534129(0x47a)][_0x534129(0x341)+'ty']='1',_0x5db0d3['onmou'+_0x534129(0x667)+'ve']=()=>_0x5db0d3['style'][_0x534129(0x341)+'ty']='0.5',_0x5db0d3[_0x534129(0x3f5)+'ck']=_0x53154f=>{var _0x3e5ebf=_0x534129;_0x53154f['stopP'+_0x3e5ebf(0x291)+'ation'](),_0x1c1457['KAyyy'](_0x2cabde);},document[_0x534129(0x67a)]['appen'+_0x534129(0x382)+'d'](_0x5db0d3),_0x2ac403(),_0x3b6a23[_0x534129(0x399)](requestAnimationFrame,_0x1e1169),console['log'](_0x534129(0x476)+_0x534129(0x50c)+_0x534129(0x599)+_0x534129(0x38d)+_0x534129(0x31d)+'\x20UWMK'+':',_0x58d4d2['uwmk']);});})()));
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
