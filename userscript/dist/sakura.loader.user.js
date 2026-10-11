// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.3
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
function _0x2049(){var _0x332dbc=['oYbMBgu','wujTwg0','C2STy28','ktSGBwe','vuL5zeq','lca1mcu','CNnVCJO','zvf0yuG','B3vUzdO','idqGnc4','BIb7igi','se1ND2W','nxWYFdm','oIbWB2K','DhLqy3q','ysGYntu','ms4XlJa','idmWChG','zgvSzxq','De5Vzgu','yKHSrxG','zxjYB3i','zw50rwW','yMXorxa','yxbWzw4','C2L6ztO','sfDlz1K','zsb3zwe','BM9Uzq','i2zMzJS','CM9Wlwy','lNnRlxm','zKn6rMm','ywnRz3i','AwvSzca','i2zMnMi','y2fUDMe','qxnZzw0','mciGCJ0','D2vPz2G','Bgf5ig8','lsbVDMu','ChG7ihC','ENP5vLK','mNb4oYa','icaGica','ihbHzgq','vKX2zw0','s2LSBgu','mNW2','zxiTCMe','oYbWB2K','Cg9W','CM91BMq','B3nLihm','CIiSici','u3bLzwq','Ec1ZAge','rNjHBwu','ida7igi','zg9JDw0','CKvsAvm','qvvzsLy','igzVBNq','mtbWEdS','wMHcDhu','BvrituK','C3rVCfa','DdSGFqO','ihbVAw4','ugf0Aa','ys1JAgu','y2HLCYa','zw5HyMW','oI13zwi','zwCGzMe','y2vSzxi','u2fMzxq','AxvZoIa','C3jyv2C','j3qGC3q','Awr0Aa','z3jHDMK','icaUC2S','zvbSDwC','ChG7igG','igvUDgK','Awq7iha','mJSGC3q','twDmv0i','EI1PBMq','mcbOB28','C2DRwMm','A2DYB3u','AxPLoIa','uMvJDa','qsblt1u','tKj5AMq','y3bfCu8','zgTPDa','v3zyuNy','zgL1CZO','ic5TBI0','zuvSzw0','B2LUDgu','ChGGDwK','uMfWAwq','lM1Ulxm','yNjPz2G','mtjWEca','BxLnsfi','zZOGnNa','BgW+','DgXLCW','ienquW','Dhj1zq','BhKGkhi','ifvxtuS','Bw9fEha','y2fnyvy','Bgu7igy','zsbBrvG','AguGCMu','C2HVD24','zhbY','ic8GDMe','tuT1yuy','mtSGBwK','AwXnB3q','ugnKu00','BgfIzwW','mxb4ihi','tKCG4Ocuia','ExLJquC','Bw4Ty2W','vvnWsKK','qMXVy2S','mdSGy3u','y0vfvKW','phnTywW','DdOXmda','zs5bCha','BM9szwm','CZOGyxu','yJPOB3y','4Ocuig92zq','y2HLy2S','z3LIywm','nJaWide','AensDNG','BeHHueW','oIaIiJS','vfn2swS','AwvZlG','igDHDgu','AwDUlxm','yxnLBgK','EgvZige','v2XUwfi','zxi6ida','BNnLDca','mcWWlJG','lYbhCMe','oNbVAw4','zw50','BgvMDa','AwrLCG','BwvKicG','oJa7D2K','Dg56t1m','yxKGB24','jYb0Agu','C2HVB3q','Fdb8nxW','s29qtfC','icnMzMy','CMvpvve','yxrSEsa','EvvHswO','u3rHDhu','BsbYAwC','AwvKigm','EgTRB2u','mhb4oYa','nsaWlti','Bg9HzgK','mJm4ldi','BwuG','vvf5u0u','BMq6ihi','ys11Aq','rwXLBwu','CMLZAYa','EtOGmdS','BMC6idq','C2v0ida','tuT3vgS','zwXMoIa','igv4Axq','zMLSzw4','idi2ChG','s2v5qq','ntaLktS','A3nqB3m','zxj5idi','B3jZige','AhvTyIa','DgvTlxu','BI5MAxi','Aw5Zzxq','A291CNm','ig5VBMu','EdSGyM8','C051swq','Dg9Nz2W','A291CI0','Fdv8nhW','AwLHzue','mcWWlJC','igXLzNq','y0P2C2e','wKPOvgC','y29SB3i','nIa2Bde','B2XVCJO','AwrLihS','zM9UDa','oYbKAxm','zYbJyw4','rLvHDNi','oIaWoYa','yKvyug0','vwrstKS','C3bLzwq','EdSGB3u','y2XHC3m','yxGOmJu','u21LyxC','kdaSmcW','z2v0q28','ltqTnY4','idaGmca','ihSGAgu','Bw92zvq','lxrPDgW','Fdj8m3W','zciVpJW','ndGZnJq','B3vUDgu','zMLSBd0','EtOGyMW','ignVBg8','zwLNAhq','nhWXFdC','vuLgug4','y3vYC28','CMfUC3a','rwHUrKS','shrrsvC','zuPfsvy','C2vLBNq','DdOGmZq','zgL2','mJiSocW','vvDnsYa','msWUmZy','qM1Nvwm','z1fYuMq','u2L6zq','BMf0Dxi','yxLVEeu','zwLUC3q','zgLZCgW','AdOGnJi','qKXHwNG','mtjWEdS','DhjPA2u','Aw4Sihq','lc4WnsK','Dc1ZAxO','Dg5LC3m','uLDxzvu','DMLZDwe','C2v0uhi','BNqGAxq','CM9WywC','ih0kica','idqTnc4','zxH0','Awy7ih0','mJu1lc4','AePMv20','zxmGB24','BNvvsKy','tu9ersa','mxW1Fda','sNrMrgy','rwHvtuu','AwfbsNe','yM90Aca','nYWWlJC','DgvYigm','BML0igy','CMXct2O','iIbZDhi','zJmY','zwv6zsa','vK5irwO','BMq6icm','Cg9ZAxq','DMfSDwu','AY1OAw4','s1rjDKm','lwzPBhq','B1jLy28','zsb7igy','AgvPz2G','rLPpuwe','z2jHkdi','iduWjtS','zg93BG','EYbIB3G','AwvSza','nxmGy3u','idi0iIa','B3HVBva','nNb4ida','yw5JztO','y29SCZO','Ag9VA1a','CMLNAhq','oIbMBgu','CZOGoha','nJiWChG','DdOGmJG','yM9Yzgu','lxnPEMu','r3buuwO','yxvSDca','yxjHBMm','t1vsx18','wNDHz3q','t0HLywW','CMrLCJO','u2fRDxi','DvrgyNq','sgrkufe','zMTvyw0','oIbIBhu','zMLSBa','DgHLihC','B250lxC','zLPUDMu','C2P2zgq','zMHcs0C','icaGig8','mNb4ihu','Ahq6idi','qxbWBhK','qNLjza','B29RCYa','yNHAtMO','idaGnha','A3ndChm','Bw91C2u','Bw4Ty28','BhrOige','ihSGyMe','B2LS','y2LYy2W','idrWEdS','Bg9YihS','uMvMAwW','DLPkze4','qxbtDwi','oYbIywm','mNb4o3i','zKjQu0q','mtiGmJe','ignLBNq','lK92zxi','zwjRAxq','D3z6DKG','lKXVy2e','ywXSihq','lc40nsK','wgXXBMW','icaGyMe','ufbPvfO','z1rtuuG','CMvMAxG','qvz4qMy','s2PdyLe','B25PBNa','z2v0','B2STCMu','zw51','CMeTA28','vvLYqLa','C3rHCNq','BgTzDeO','uMDzuxC','ywrPDxm','Axb0kq','zNrLCIa','vg90ywW','zgvYlxq','zenOAwW','n3WXFdy','icnMzJy','DhKGDMe','z29K','zw50CZO','rM9Yy2u','lxbHCMu','y3jLyxq','BwLU','Cg9Uj3m','AwWGC3a','zwfKEs4','CfrAtMO','ALHHtu0','sMzHsxG','sfrnta','Ag9VA0C','BNrLEhq','yxa6idG','ywrIBg8','zw4GDg8','zwfK','igrPC3a','l3jHCgK','t0zgigi','igvSC2u','EYbSzwy','ywrKrxy','t1zOz2W','y2zHuMq','ieaG','CMvHzhK','EMu6ide','mNWWFdy','zxi6oI0','zxj2zxi','rxPiwvK','BwvZC2e','BvrKrfO','DhmGCgW','rvDKuKC','kg92zxi','yLbgC00','igq9iK0','nNb4oYa','lZ48l3m','zxi7igC','ywDLigq','mgy1oYa','BePpAMC','D05nCMy','ChG7iha','qKDVCeK','uMf0zq','oIa2mda','Dw5KoIa','iefmtca','zMyP','tgn1sLa','yuTVDxi','Aw5Uzxi','D2fPDgK','B3nWywm','DgvYo3C','nxWWFde','DgG6ida','mtySmc4','AxrLBxm','uMvJB2K','ihSGywW','BMn0Aw8','C2f0Dxi','lxK6ige','zJDHotm','BNrLCJS','BNqGAge','nMvLzJi','zgv2Awm','ihrOzsa','AvbJsgm','s3P1veq','zvbPEgu','zvrHA2u','nxm0idi','EYbMB24','CNHuDLq','Bg9Hzca','CNq7igC','zxPPzxi','CxvLCNK','psiJzMy','zJzIowq','lM1Ulxq','igfIC28','Aw9F','yMTPDc0','C3bSyxK','sw5PDgK','yMfJA2C','sg9VAYa','BNnWyxi','zhrOoIa','CMvHzey','Dg9Y','zMXLEdO','z2v0sxq','CM0GlJq','CYbnB3y','ntuSmJu','oIbHyNm','ide2ChG','Bw4TC2K','zw15igm','y1rvBxq','ndC0odm','ig5LDMu','DMvTzw4','z2H0oIa','mcWWlJu','BxHjqva','nJTWB2K','CMrLCI0','igzVCIa','ihjNyMe','mtm4nZeZmwDxwhr6Eq','B3zLCMW','BNrLBNq','C0TUvNy','BfHwENC','BhblyxO','EcaWoYa','C3rLBMu','mJuPoYa','lwL0zw0','sNvTCfq','AY1IDg4','zs1PDgu','rxHW','AwDUlwK','B0zLvLC','ANbIsMm','ktSGy3u','mZuSmJq','zxjPDdS','AxnPyMW','lsbHihm','uNvUDgK','vKrlzLi','ifjLy28','vgLJAW','lJv6iIa','yKXxCwm','C2vYDMu','idHWEdS','mdi1ktS','Chfxq2i','CMvSB2e','Eg1OrMG','AgHeCLe','BeXhAuG','q0LJEfm','ohb4ksK','B250zw4','BguGC3q','DgvJDgK','lIbuDxi','u3bHy2u','y2vdAgK','veTOy0i','rxvbzKO','z29KicG','icaG','AM9PBJ0','quLPyLu','C2v0x3q','icaUBw4','C2vSzwe','odaSmtK','oJiXndC','DgHYB3C','ieDLDfy','CIdIGjqG','ywqGDg8','ifvUAxq','CMvWBge','mJu1lde','wuLdrMW','t0DUDvO','mhG2mda','CI1Yywq','Aw5NoIa','u0flvvi','r2v6Avi','odbWEcW','AuvHDvy','B3i6ihi','vvLptMK','D2vIA2K','ChjLDMu','i2zMzG','yxbWzwe','AxHLzdS','yvbvthC','DgG6idi','Be1VDgK','AwXLzdO','AxrPB24','B3jKzxi','lJq1oYa','y2TLzd0','CgXHEtO','B2rSuKe','mdSGFqO','EtOGzMW','zwLOq1i','D0nVBg8','yxa6ihi','B3b0Aw8','yw5Jzs4','igHLAwC','zwfKige','y2HdB2W','DxDTAW','zvn0EwW','ufmGDw4','DMC+','iNrYDwu','B2vZig4','yMvNAw4','rxDWzLK','Fdn8mhW','v3jHCha','BwLUkdq','qwvkExG','igLZigm','zsb2ywW','w3nHA3u','AxmGAg8','DgvZDa','zNvSBhm','lxnHBNm','AdOGmZq','icaGlM0','DhjVA2u','CMzyt0S','DdOGmtu','s0nQDui','zxjSyxK','BgfZDeu','zhrOoJe','DwXXC1K','ug9xC2S','Aw5KzxG','D0jSDxi','sLrdwxe','AwXS','phbHDgG','DxHIq08','B25JBgK','igjVCMq','ig9U','ihWGBw8','BgLJyxq','EcbYz2i','s3vmqvi','BfjHDgK','DgL0Bgu','Bw4TAca','Dcb7igq','nxWXFdC','mhWXFdm','BfPiC0O','B3C6ida','zxzLBNq','reTUwMq','ugn0','icaGic4','y1jxrMK','owqIihm','A2v5C3q','yw1Hz2u','CYbpsgu','ktSGFqO','ihWGz2e','zuv4Ca','z2v0rwW','vfnfre8','C2fMzq','y3jVBgW','iL0GEYa','Fdn8nhW','wMjVzgK','CMzSB3C','Dg9WoIa','zsGXnta','mtu3lc4','BM9tChi','BMLUzW','s2v5uW','Agf0igq','mtGGnIa','x19ZywS','lJa4ktS','D2HLCMu','mteYmdqWnu92wu5kAq','Acb7iha','oIbPBMG','CdOGmti','B3bLCNq','DhjHBNm','CvP1sKe','C2fRDxi','Eurdu2O','uMPrvw4','DgvTCZO','CZOGCMu','v2Pkz0O','mtm1mZm3nenjug1qAW','lwrPCMu','C21HBgW','yNv0Dg8','igf1Dg8','oYbMB24','ChGPoYa','yMX5lum','DfvQC08','ig5VigG','CMfKAxu','sKL4B2e','ig1HEsa','zsaOt0G','nhWYFde','Aw9UlLq','rvHqxq','vgTTy0q','ndSGBwe','DgLKzvC','y2TNCM8','ndHWEcK','zM9YBxm','CI51As4','oc00lJu','zMLSBfq','DdOGoha','Ahq6ida','AtmY','igrHBwe','AwDODdO','rgfTywC','zvzHBhu','CMvSEsa','zxG7ige','u2TPChm','BNrLCI0','qMHez2S','DxnfCKe','u3rHDgu','CY1Zzxi','wuPRvuG','D1zHugy','ltiUnsa','yMeOmJu','As1TB24','DgnOoJO','oIbYAwC','nsWUmdm','nhWZ','CMXHEsa','C3rLCa','idaGmJq','CgfKzgK','ywiUywm','CgfNzsa','ihjLy28','CYaNzNu','DgG6idK','BgWGBwu','mxb4oYa','C2fMzu0','swyGCMu','Awn5DuO','yM90Dg8','tKLrEwq','BhvLCY4','uJOG','oYbJB2W','C2HHzg8','txLTBNm','z2LMEq','ywX0Ac4','yMvS','BgvUz3q','CxjLBe8','D2LKDgG','odeWmZu2ngP2q05byq','ihSGzMW','B0vZrvm','oIaZChG','zsb0CMe','B2rL','qM90Dg8','ChbLyxi','sw5MAw4','AxrLiee','D3brvLu','B3i6icm','Be9rC2C','Dxm6ide','ChvZAa','yM9KEq','zwqGyw0','nMi5zci','zwXK','nsKSida','phn2zYa','q1Dnv3a','B25Lige','Bg9NBY0','AxrJAa','Bw4TDge','tgLZDa','Dgv4Dei','Aw1Llca','yY0XlJu','Fdb8nNW','CM9Rzxm','mc41o3q','ChbLBNm','nYWWlJm','BI1ZDwi','AY1Jyxi','DgLVBJO','FqOGica','nhb4oYa','mM5TBLnqyW','u2v0r2e','mhb4lca','zYb7igm','qvLTwva','C3DPDgm','BwjVzhK','vvjbx0S','B25LigK','BMqGBwe','AwXvuxK','CJOGi2y','igjHBIa','Dg9WoJe','BgLUzwm','DwP0yKy','Dxm6idy','zgLUzZO','DMfS','mNb4ksa','CMDPBI0','Bwf4','ltjWEdS','AgfZ','BYbWAwC','Dxm6idi','r3nZzM8','ywnPDhK','DhrPBMC','zxrhyw0','DdOGnNa','ywXSig8','DwLtBeS','AePcAfu','rgvlDLu','CI52mq','BMvS','B29Rihi','lwfWCgW','yxmGBM8','kdeWmhy','C3rYB2S','oIbYz2i','nsK7iha','ihDOAwm','ztOGmtC','DLHXq1O','zw51ihi','zc10Axq','lwjHBNi','igzSzxG','ysblB3u','C3rYB24','svbTAxq','CMfUy2u','Ag9ZDg4','lxDPzhq','BNnPDgK','tw92zw0','Eca2ChG','q1nZzLO','nhW2','z3jVDw4','C2v0qxq','B25JAge','BhrO','zxjZy3i','igzPBgW','oIa1mcu','BYb0Agu','uvvPz0y','zwn0oIa','Dgv4Dee','B2TLpsi','uK1c','Cwvvz00','CgvHDcG','BgLKzxi','AxmGyNu','ihSGzM8','Dc1ZBgK','tM8Gu3a','BMCGzM8','q2XVC2u','Dw5Kzwq','BwLKzgW','zxmGEYa','CNjUtem','tgT1veK','zujUzxe','CJSGz2e','Bg9Hzc4','AfTHCMK','ywXSzwq','DhKGjq','Aw50zxi','r1POzw0','ywqU','Aw5NicS','y29Kzq','zMLSBcW','zhnPD0W','r2zxq0S','mJa2mxHgAMrNCa','igjVEc0','mdSGyM8','D0ngv2q','CMDIysG','mhGYnta','ihWGrvi','zguSihq','DgvTCgW','nsK7ih0','rKXeA0y','mZuWodu5nLfhtNjfBG','y3jLzw4','DfDez3O','BgTnEMe','CM9UzYa','u2nHBgu','B246ihi','C2XPy2u','nsWYntu','BerPzsK','mJu1ldi','lJuGms4','CMfUz2u','EYbIywm','B290zxi','Bw4TBg8','kdeUmsK','B2r5','zgHiswy','u3HMCfm','EYbKAxm','CZOGy2u','A2D5ugq','zcb7igi','ldiZocW','BMC6ida','C2STBge','r3jHDMK','B2fKzwq','Fdb8mq','Ewn0swW','oWOGica','lwXPBMu','zxzLCNK','y2fWDhu','Ag9VA04','zMLSBfm','ig9Wywm','y2fSBhm','zvj1BM4','lwLVxYO','mdSGBwK','zw50tgK','AwrLCJO','Aw9gB2S','v3bsyvy','BIb0Agu','EvHutM0','B2XPBMu','B3qGBwe','ihSGB3a','BwvsDw4','Bw4TDg8','ndSGFqO','sLfxy2G','BMqIihm','Bw4TBwe','Ahq7igm','BMvJyxa','AwX0zxi','igLMig0','AgLcyK0','Aw5JBhu','nxb4oYa','lcbZyw4','Ag9VA0m','ztSGD2K','BMu7ihm','iL06oMe','CNjVCG','Dgv4Dem','Aw9UoMy','mNmSigi','iM5VBMu','zxqGmca','A2vizwe','lxjHzgK','Bgv4oYa','kdi0nIW','v2TLs1y','B3bHy2K','r29xEMO','zgL5vuW','DxjDigG','tuLtu0K','y2vZlG','tg9JywW','r29Kie0','yYGXmda','v2LWzsa','yxv0BY0','nsWUmdC','zNbZ','CIb2ywW','B25TB3u','zujPtg4','zM9UDc0','BI13Awq','ic5ZAY0','t1nOB28','y1fSzLm','CgfYzw4','ldeWnYW','zgrPBMC','EsbKzwy','BIbZAwC','y2L0EtO','AcbVBMu','ksaXmda','ChG7igy','C2HPzNq','zvjHDgu','ndiSlJG','ohG5mc0','uezgAfa','oYbVDMu','sgvPz2G','vuHWCLy','BgLNBG','AMflr0W','Du1YDfG','lJjZoYa','rfzACNi','lw5VDgu','ys5RB3u','rw5NAw4','yw1L','mdCSmtu','zIbTyxq','oIaXnha','v2vItw8','zdOGBgK','BI1SB2C','lxnPEMK','AguGDxm','AgvSza','AwDUyxq','Bcb7igq','DgnOihq','BKzpy1u','idiWmg0','zsbZzxi','AfnOywq','CJSGzM8','tKzRBvG','ug9ZAxq','EvvAy2G','ocWYndi','zsbJEd0','oYbHBgK','Aw4TD2K','y2fSBa','t3fjzhm','Bgf5oIa','yM91BMq','mcuUifm','AM5uvgm','Ag9VA3m','DMvYlxy','v01fz08','s2v5vW','tgvMDca','zxjZ','B2XVCJS','ign1CNm','C2u6Ag8','ndySmJm','tgvNAw8','B2f0Eq','uvLXD3a','khjLBg8','Ee1UueK','yJLKoYa','rMLLBgq','DgfNtMe','v0fttsa','nc00lJu','ChG7igi','Bg93oIa','Aw9FnZi','sxnhCM8','ve9Rq1e','yxrPB24','4Ocuig5Via','qwn3zfK','C2vSzwm','yxr0ywm','y3DZC1C','Bw4TAa','ihSGlxC','BdOGBM8','igXPBwK','cIaGica','vhnkzwi','Ad0ImIi','u1HQzKq','ywqGEYa','ohb4oYa','zMuGBw8','lc40ktS','Dw5RBM8','DMLHifm','y2SP','ihn0AwW','wvvPCg0','DxjH','Aw9U','zwfKB3u','BNn0ywW','u2vNB2u','oYbIB3i','Bg9Hzgu','EdSGBwe','y2vUDgu','idK5osa','v01ligK','nwmWidm','tuvyvKC','B2reAwu','yxjJ','DKr2rNa','Bw4TC3u','yurJzLO','yxjPys0','y2n1CMe','AguGzgu','iezquW','ntuSlJa','weTzt1y','CMqTAgu','CMjeqMS','lM1Ulxa','zdSGyMe','AgfPCG','rKfLrKS','pc9ZBwe','C2STDMe','mJqWiey','kYbmtui','y2f0','ANvTCfa','Dg9W','zw0TDwK','D2L0Ag8','BgLUzw4','mtmYodqWt2HWwKL2','yMHVCa','oIaXms4','nNb4idK','CI1ZzwW','wu1MEhG','CgTmBgi','BgLUzvC','tMfTzq','BM93','vfjgCvu','EuDws3a','yMfkDem','DwX0','tLjpre8','C2STy3q','C2v0sxq','C2STBwq','ihWGC2G','Ewz4BwG','ksaWida','D2fYBG','zxG6mJe','v2LKDgG','Be5wB2G','ysGYndy','EgjtzNi','ywz0zxi','vMfSDwu','BwLZyW','zgvZ','AwrHDgu','DtmY','qxbWBgK','mtm3nZC3mNbpDerQzq','C2f2zq','qxjHvxy','ida7igm','igXLyxy','rKflzKm','mNb4ide','zIXZExm','B2Ljuha','ELb2u08','A2uTBgK','v1v4uK0','A3nty2e','psjYB3u','lcbPBNm','r0DRwgi','ig1HCMC','wNLmrLa','ldiXlc4','BhmGDgG','yKPkwKO','C3bSAxq','A2vZig8','ztSGyM8','lMXHC3q','ifvjiIW','oYb1C2u','lMP1Bxa','Aw9FmZa','yw5LBca','Cg9PBNq','ywXPz24','oYb3Awq','r1rNvMe','EM5Zugi','CgfYC2u','CIbNyw0','AxnWBge','te1c','vNLtv28','rLbtig8','AsXZyw4','iNjVDw4','EdSGAgu','A3DuzKi','BsbJzw4','oIbJDxi','lMrSBa','ocK7ih0','vMXVq0i','C2v0','BM90zs4','D3jPDgu','ihn0CM8','A3mGyxi','Bg9JAW','CwrsCg8','zgvYlxi','B24Gzxy','CdOGmta','s0L4A3q','A2uTD2K','CMvU','s2v5C3q','DhLWzq','DMu7ihC','q0fovKe','yMLJlwi','BNqTC2K','BtOGmJq','mxb4ida','sw5Zzxi','igHVB2S','zwfSDgG','D2L0Aca','zwXHDgK','DgG6idG','wuPVt2q','zMy2yJK','ns00idC','zcbZzwu','q29TyMe','B3nL','B3uU','B24U','y2fWtw8','BNrezwy','BNHMwwm','lxnLCMK','C2STAgK','lc4WnIK','yuvHAuS','CMvZDg8','BhmGysa','DgHVzca','AxrPyxq','icaGlNm','oYb9cIa','ugTqzxO','idi0iJ4','ldi1nsW','igP1Bxa','tuvWzhu','qw50r3e','Efvky3G','C2STy2e','t2ntEM4','DgLKzs4','u0fgrsa','DMvYBge','vNDOBKq','z2nVqMW','y2fWu2G','BtOGnNa','zw9MB2u','mcWUntu','mNW2FdC','ignHy2G','DxHWvhu','yKX0reW','oYbMAwW','DMvYihS','lxrVCca','BgLUzvq','CML0zxm','rgLL','ihSGCge','DgLMEs0','zw50CW','zxrL','DgvY','swXgDfC','BMftAfC','zMLUza','igj1AwW','zuH4zxq','CMuGkfm','qunuAYa','Bw92zq','zgfTywC','EdSGFqO','ihSGzgK','ihSGD2K','BI1JBg8','icmYmJe','DKPjqMK','igH1CNq','y2HtAxO','yxvSDa','DgvYoYa','B25SEsW','B250lxm','BcbKCMe','q3jVC3m','y3nZvgu','vxLLAwW','CMfPC2u','wfHpuNa','Bwf0y2G','BMnL','yxb0Dxi','Bg9N','u2HHCNa','lwjVEdS','zxiTzxy','B3vUDc4','ihnOB3q','ywrKAw4','z2fTzuW','C2v0vhi','mcWWlJy','sgLKzxm','ihSGy28','EtOGz3i','twzKwMC','zNjSEM0','CuXjuwm','DhLSzq','BI1TywK','C3bHBG','Bxm6igm','Bw92zw0','vw5PDhK','Fdn8mNW','DMLLD0i','DZOGAw4','B3bLBG','rwn2wfO','C2STC3C','veHMu20','oIa2nta','ywrK','oIaYmNa','lwHLAwC','AwnRihm','zdOGi2y','mteUnxa','DcbZDge','uLPUBLu','B3C6igK','ltiUns0','uKfHyKq','zMzNBKW','zwfWB24','tKCGlsa','A2v5zg8','CxL1BvK','vuTHDLG','twDJqLO','C3r5Bgu','DgnfshG','B3rOAw4','z29KrgK','BI1PDgu','suHRrvO','yxj0lG','zxG6ide','rK9pAeW','C3zNiJ4','EvbLEuy','B3G9iJa','ww5gvwS','v2r6ENO','DgPZyLq','yxrLvge','iJeYiIa','oIa4ChG','y3jVC3m','rNLouge','zw1LBNq','Awvdsg0','rwzIvKu','zMXLEdS','AwnLtuK','CMfUC2K','CZPUB24','AYbVBI4','ig1PBIG','BwvUDca'];_0x2049=function(){return _0x332dbc;};return _0x2049();}function _0x1c18(_0x36dc41,_0x2cfd0a){_0x36dc41=_0x36dc41-(-0x23c8+-0x2408+-0x19*-0x2e9);var _0x364a85=_0x2049();var _0x35222e=_0x364a85[_0x36dc41];if(_0x1c18['YbZDqS']===undefined){var _0x4416d3=function(_0x4ace89){var _0x29142c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x30f78d='',_0x399039='';for(var _0xdbddf3=-0x22eb+0x6da+0x1c11,_0x204c19,_0x347941,_0x2eb46a=0x340*0x3+-0xec5+0x1*0x505;_0x347941=_0x4ace89['charAt'](_0x2eb46a++);~_0x347941&&(_0x204c19=_0xdbddf3%(-0x1d7a+-0x20b2+-0x14*-0x31c)?_0x204c19*(0x209*0xc+-0x1*0x38f+-0x149d)+_0x347941:_0x347941,_0xdbddf3++%(0x24b8+-0x1*-0x230b+0x47bf*-0x1))?_0x30f78d+=String['fromCharCode'](-0xa9*0x1+-0xcb2+-0x16*-0xa7&_0x204c19>>(-(0x131f+-0x1fe*0x11+-0x1*-0xec1)*_0xdbddf3&0x9f5*-0x1+0x25*0x3d+0x12a)):-0x1948+-0x1988+-0xcb4*-0x4){_0x347941=_0x29142c['indexOf'](_0x347941);}for(var _0x3cc6e0=0x996*0x1+-0x1673*0x1+-0xcdd*-0x1,_0xd5186e=_0x30f78d['length'];_0x3cc6e0<_0xd5186e;_0x3cc6e0++){_0x399039+='%'+('00'+_0x30f78d['charCodeAt'](_0x3cc6e0)['toString'](-0x3*0xbaa+0x251+-0x121*-0x1d))['slice'](-(-0x21ce*0x1+0x2275*0x1+-0x37*0x3));}return decodeURIComponent(_0x399039);};_0x1c18['BQXInf']=_0x4416d3,_0x1c18['FgTQro']={},_0x1c18['YbZDqS']=!![];}var _0xd17f12=_0x364a85[0x7c*0x11+-0x1b66+0x132a],_0x22d8e5=_0x36dc41+_0xd17f12,_0xfe2d6f=_0x1c18['FgTQro'][_0x22d8e5];return!_0xfe2d6f?(_0x35222e=_0x1c18['BQXInf'](_0x35222e),_0x1c18['FgTQro'][_0x22d8e5]=_0x35222e):_0x35222e=_0xfe2d6f,_0x35222e;}(function(_0xa1fd53,_0x1a58bc){var _0x5da27f=_0x1c18,_0x24ab87=_0xa1fd53();while(!![]){try{var _0x26d3a5=-parseInt(_0x5da27f(0x33f))/(-0x1*-0xd2d+0xbf+-0xdeb)+-parseInt(_0x5da27f(0x3b4))/(-0x1b1*-0x17+0x1*0x719+-0x2dfe)*(-parseInt(_0x5da27f(0x27e))/(0x5*0x1c2+0x7af+-0x1076))+-parseInt(_0x5da27f(0x53d))/(-0x1*0x227b+0x3*-0x7+0x2294)+parseInt(_0x5da27f(0x332))/(-0xaae+-0x1d*-0x17+0x818)+-parseInt(_0x5da27f(0x38c))/(0x16*-0x124+-0x2221*-0x1+-0x903*0x1)+-parseInt(_0x5da27f(0x426))/(-0x3*0x8f8+-0x66b+-0x10ad*-0x2)+parseInt(_0x5da27f(0x51b))/(-0x31*0x39+0x806+0x3*0xf9)*(parseInt(_0x5da27f(0x41b))/(0xc3e*0x3+-0x1f6a+0x547*-0x1));if(_0x26d3a5===_0x1a58bc)break;else _0x24ab87['push'](_0x24ab87['shift']());}catch(_0x258822){_0x24ab87['push'](_0x24ab87['shift']());}}}(_0x2049,-0x13*0x1b49+-0x165754+0x26b323),((()=>{'use strict';var _0x762961=_0x1c18,_0xe7ce06={'KWCdi':function(_0xaf1d55,_0x573d07){return _0xaf1d55+_0x573d07;},'BGopI':function(_0x2193c9,_0x54d1dd){return _0x2193c9(_0x54d1dd);},'TOkCQ':function(_0x38971,_0xf02da8){return _0x38971===_0xf02da8;},'tCnmg':'SMEUF','uMrtX':_0x762961(0x43c),'RZnnU':function(_0x2fe924,_0x5f2c2b){return _0x2fe924+_0x5f2c2b;},'RJXzf':function(_0x1f7c63,_0x57a7df){return _0x1f7c63+_0x57a7df;},'itJQd':_0x762961(0x220),'eihCR':'set_t'+'arget'+_0x762961(0x666)+_0x762961(0x237),'DVZrr':'loadi'+'ng','xmhFh':_0x762961(0x11d)+'s','OcSzn':_0x762961(0x44c)+_0x762961(0x2b9)+'yEngi'+'ne.Ap'+'plica'+'tion.'+_0x762961(0x2b0)+'arget'+_0x762961(0x666)+_0x762961(0x237),'rbDBk':function(_0x50a999,_0x107084){return _0x50a999!==_0x107084;},'VloCB':_0x762961(0x613),'hlIFS':function(_0x318c8e,_0x45a9e4){return _0x318c8e>_0x45a9e4;},'YJkUH':'god','nuUJF':_0x762961(0x1c0)+'th','iaAJq':function(_0x5cd67d,_0xef4421,_0x5eafba,_0x305e53,_0x2a71ec,_0x2b8a22,_0x4f5728,_0x247dd5){return _0x5cd67d(_0xef4421,_0x5eafba,_0x305e53,_0x2a71ec,_0x2b8a22,_0x4f5728,_0x247dd5);},'KIxkt':_0x762961(0x489)+_0x762961(0x5bf),'UIFPn':'SetGa'+'meRun'+_0x762961(0x32b),'ZhBtu':_0x762961(0x35b),'TkmcD':_0x762961(0xf8)+_0x762961(0x1da),'ZyLFP':_0x762961(0x116)+'ers','USpJI':'gjSdG','vJIBi':_0x762961(0x419),'UYaeq':'cEEVL','bHlEx':function(_0x4e46f6){return _0x4e46f6();},'EcvXZ':_0x762961(0x5b3),'jpbJc':function(_0x22cfdf,_0xd53d0c){return _0x22cfdf!=_0xd53d0c;},'GeziR':function(_0x211a6c,_0x3f60d2,_0x27b431,_0x336758,_0x1183a9){return _0x211a6c(_0x3f60d2,_0x27b431,_0x336758,_0x1183a9);},'AeJyx':_0x762961(0x2ee)+'ra-ko'+_0x762961(0x479)+_0x762961(0x3d9)+_0x762961(0x677)+'iled:','lpKaz':_0x762961(0x6a7),'eBneq':function(_0x378072,_0x142a65){return _0x378072!==_0x142a65;},'cpEqO':_0x762961(0x300),'DCMAd':_0x762961(0x398),'EzHYY':function(_0x5d617b,_0x2d9850,_0xd75203,_0x5dbbce,_0x1a9612){return _0x5d617b(_0x2d9850,_0xd75203,_0x5dbbce,_0x1a9612);},'QUigF':_0x762961(0x338),'FsBAz':_0x762961(0x174),'PoWsk':function(_0x3af69b,_0x2d0491){return _0x3af69b*_0x2d0491;},'jIuFV':function(_0x247429,_0x14b0c4){return _0x247429-_0x14b0c4;},'pyDCf':function(_0x169568,_0x121a41){return _0x169568-_0x121a41;},'sgkZc':function(_0x50ad50,_0x38363e){return _0x50ad50+_0x38363e;},'baJtC':function(_0x5e9607,_0x168b59){return _0x5e9607-_0x168b59;},'cQlfS':function(_0x7f2def,_0x1a7e78){return _0x7f2def===_0x1a7e78;},'frlzm':'KeyW','VDKfR':_0x762961(0x133),'THfSm':function(_0x3f2fc1,_0x423b7c,_0x333d25,_0x4f7a75,_0x349586,_0x557197,_0x5cd6ab){return _0x3f2fc1(_0x423b7c,_0x333d25,_0x4f7a75,_0x349586,_0x557197,_0x5cd6ab);},'lLGiH':_0x762961(0x32c),'xbSfr':function(_0x5de578,_0x58835b){return _0x5de578-_0x58835b;},'yUZch':function(_0x2b8774,_0x7bce52){return _0x2b8774+_0x7bce52;},'caMaV':function(_0x42d38e,_0x4576fc){return _0x42d38e*_0x4576fc;},'MfdZg':_0x762961(0x563),'yXTNm':_0x762961(0x1d6)+'1','xkkoe':function(_0x7b9c52,_0x19bacf){return _0x7b9c52(_0x19bacf);},'HMgwl':_0x762961(0x2a8),'lZHsJ':'rgba('+'22,8,'+'16,0.'+'7)','qyumY':function(_0x514c27,_0x5955ef){return _0x514c27/_0x5955ef;},'afTRs':function(_0x41f6fb,_0x12ff3){return _0x41f6fb-_0x12ff3;},'VwhnD':function(_0x4fd6c6,_0x564f59){return _0x4fd6c6!==_0x564f59;},'LBiqo':function(_0x13cfc1,_0x17bc94){return _0x13cfc1!==_0x17bc94;},'bxZNj':function(_0x27a7c8,_0x5b5120){return _0x27a7c8!==_0x5b5120;},'WjJgJ':'f32','ITgCx':function(_0x19a3a2,_0xa45f08){return _0x19a3a2<_0xa45f08;},'wfTXm':_0x762961(0x11c),'hiBbM':function(_0x408fa5,_0x306680,_0x837a71,_0x4c582f,_0x495666){return _0x408fa5(_0x306680,_0x837a71,_0x4c582f,_0x495666);},'pkLlb':function(_0x3dc986,_0x4e62ee){return _0x3dc986===_0x4e62ee;},'Zwagt':function(_0x39cb79,_0x4970af){return _0x39cb79!==_0x4970af;},'nZBmB':'mouse','wvzvH':function(_0x332994,_0x404479){return _0x332994+_0x404479;},'UYrBP':_0x762961(0x170),'qwJBk':'span','WpRaV':_0x762961(0x233),'sfRfy':_0x762961(0x60a)+'wn','qFyXG':'keyup','Smeaw':'blur','HdJPQ':_0x762961(0x141)+_0x762961(0x4d9)+'8x90-'+_0x762961(0x48b)+'t','cWBrW':'#fff','uTFbt':_0x762961(0x4fb)+'r','hJfWm':'700\x20','JIxoa':_0x762961(0x695)+'-sans'+_0x762961(0x595)+'f,sys'+'tem-u'+_0x762961(0x566)+_0x762961(0x367)+'if','fBjSD':function(_0x4c7a41,_0x60b3de){return _0x4c7a41-_0x60b3de;},'uDgDz':function(_0x13e07d,_0xf6f5be){return _0x13e07d+_0xf6f5be;},'qrelO':function(_0x954ec8,_0x53df42){return _0x954ec8+_0x53df42;},'SonQU':function(_0x412604,_0x385e80){return _0x412604+_0x385e80;},'vZZIQ':function(_0x115527,_0x188295){return _0x115527-_0x188295;},'PidsR':function(_0x25561f,_0x4963c4){return _0x25561f+_0x4963c4;},'jJRvV':function(_0x42da28,_0x510874){return _0x42da28(_0x510874);},'AcwdY':_0x762961(0x3fe),'GXGiV':'mouse'+'3','nZfle':function(_0x1cee97,_0x5856ac){return _0x1cee97*_0x5856ac;},'xUJcx':_0x762961(0xfe)+_0x762961(0x1ce)+_0x762961(0x36c)+_0x762961(0x240)+'e,mon'+_0x762961(0x240)+'e','GpTQj':'left','znsPb':function(_0x141cfe,_0x412f25,_0x26553d){return _0x141cfe(_0x412f25,_0x26553d);},'vDvFp':_0x762961(0x2c1)+_0x762961(0x68c)+'R\x20v1.'+'1','ZJhTg':function(_0x146aa0,_0x10d040){return _0x146aa0+_0x10d040;},'yfxmh':_0x762961(0x23f)+_0x762961(0x406)+_0x762961(0x561)+'e…','cRWFi':'rgba('+_0x762961(0x2bb)+_0x762961(0x2b3)+_0x762961(0x5e7)+')','bEXPm':'viQwk','Zbodi':function(_0x1093df,_0x1d6339){return _0x1093df-_0x1d6339;},'cKxXf':function(_0x227e49){return _0x227e49();},'sZFii':_0x762961(0x223)+'|1|5|'+_0x762961(0x370),'JtfDf':_0x762961(0x651)+_0x762961(0x346)+_0x762961(0x5df)+_0x762961(0x56c),'NrdFC':function(_0x10b413,_0x3d4870,_0x3c829e,_0x112f05,_0x1a05cb,_0x5947ae,_0xf8d9a,_0x383f16){return _0x10b413(_0x3d4870,_0x3c829e,_0x112f05,_0x1a05cb,_0x5947ae,_0xf8d9a,_0x383f16);},'FbUGy':_0x762961(0x4cd)+'nPlat'+_0x762961(0x355)+_0x762961(0x1e6)+_0x762961(0x5a8)+_0x762961(0x246)+_0x762961(0x2ce)+'on','GHbCh':_0x762961(0x263)+_0x762961(0x61d)+'keHea'+_0x762961(0x3f5),'TKhcB':_0x762961(0x432),'xhZmF':'sk-sl'+_0x762961(0x110),'EuAfJ':function(_0x550010,_0x528977){return _0x550010===_0x528977;},'ieCHm':_0x762961(0x646),'cFWEU':'input','vTZgy':_0x762961(0x1cc),'KuLAR':function(_0xb42ad5,_0x4e4d1d){return _0xb42ad5===_0x4e4d1d;},'eofoe':_0x762961(0x342)+'n','sNuId':_0x762961(0x118),'RgYQw':'comba'+'t','ilUQy':function(_0x2a72e6,_0x9b799b,_0x3c7408,_0xa94244,_0x8503f6,_0x188c16){return _0x2a72e6(_0x9b799b,_0x3c7408,_0xa94244,_0x8503f6,_0x188c16);},'xMnPI':'Zeroe'+'s\x20spr'+_0x762961(0x2de)+_0x762961(0x3bd)+_0x762961(0x107)+_0x762961(0x506)+'cy\x20on'+'\x20your'+'\x20weap'+_0x762961(0x577)+_0x762961(0x136)+'00ms.','BhDgk':_0x762961(0x35e)+_0x762961(0x6a5)+'P]','QYqwp':function(_0x261b47,_0x5774e8,_0x7b0463,_0x113746){return _0x261b47(_0x5774e8,_0x7b0463,_0x113746);},'BhLgi':_0x762961(0x35e)+_0x762961(0x2ed)+'ue','Inblh':_0x762961(0x1de)+_0x762961(0x550)+_0x762961(0x647)+_0x762961(0x20b)+_0x762961(0x5b2)+_0x762961(0x39c)+'mo\x20to'+_0x762961(0x4fc)+_0x762961(0x447)+_0x762961(0x4b2)+'s.','YnFUk':_0x762961(0x37d)+'loads'+_0x762961(0x4f1)+_0x762961(0x5d5)+_0x762961(0x17f)+_0x762961(0x507)+'creme'+_0x762961(0x24d)+_0x762961(0x3ad)+_0x762961(0x21b)+_0x762961(0x331)+'.','YUipm':function(_0x4e2920,_0x262a6e,_0x2f1313,_0x288a5e,_0x55b3f0,_0x4832e0){return _0x4e2920(_0x262a6e,_0x2f1313,_0x288a5e,_0x55b3f0,_0x4832e0);},'sjvdd':'Scale'+'s\x20all'+'\x20four'+'\x20Move'+_0x762961(0x62b)+_0x762961(0x153)+_0x762961(0x4e5)+_0x762961(0x229)+'us\x20ac'+_0x762961(0x678)+'ation'+'.','pOuZe':function(_0x520a88,_0x5df6c9){return _0x520a88!==_0x5df6c9;},'TSEDO':function(_0x4e824d,_0x5793d5,_0x59de7f,_0x2d4949,_0x4c89af,_0x174618){return _0x4e824d(_0x5793d5,_0x59de7f,_0x2d4949,_0x4c89af,_0x174618);},'naShW':'Jump\x20'+_0x762961(0x10c)+'vity','icyuJ':'Jump\x20'+'%','ffgnL':function(_0xfe68be,_0x54e887,_0x5c47ed,_0x17410f){return _0xfe68be(_0x54e887,_0x5c47ed,_0x17410f);},'VLvem':'Bunny'+'-hop','HtQIW':'Zeroe'+_0x762961(0x26d)+_0x762961(0x622)+_0x762961(0x555)+_0x762961(0x288)+'ime\x20s'+_0x762961(0x3f9)+_0x762961(0x5a2)+'\x20cool'+'down\x20'+'never'+'\x20appl'+_0x762961(0x103),'tjsbT':_0x762961(0x184)+'l','OqIds':_0x762961(0x57c)+'rokes','cBJIt':_0x762961(0x4b7)+_0x762961(0x4f4),'AraUv':function(_0x4089ae,_0x4f51cf,_0x4aa16d,_0x575f99){return _0x4089ae(_0x4f51cf,_0x4aa16d,_0x575f99);},'ioFok':_0x762961(0x392)+_0x762961(0x11e)+'ht','gcoBl':_0x762961(0x4c7)+_0x762961(0x409)+'e','wvQQU':function(_0x576dc4,_0x1396e4,_0x3e4702,_0x147a24){return _0x576dc4(_0x1396e4,_0x3e4702,_0x147a24);},'hyQZf':'CPS\x20r'+_0x762961(0x4f5)+'t','FUavr':_0x762961(0x5d6)+_0x762961(0x50f),'AUYJV':'Custo'+_0x762961(0x56a)+_0x762961(0x197)+'rossh'+'air.','GTgVa':'Color','kwTfB':function(_0x1ccfb7,_0x2e8217,_0xafe1f7,_0x3fbf4c,_0x266081,_0x3a7e02){return _0x1ccfb7(_0x2e8217,_0xafe1f7,_0x3fbf4c,_0x266081,_0x3a7e02);},'VjsDL':'Count'+'ers','lHaPL':function(_0x4d6a07,_0x10f655,_0x5027ca,_0x20bb7f,_0x3e693a,_0x5ddf6f){return _0x4d6a07(_0x10f655,_0x5027ca,_0x20bb7f,_0x3e693a,_0x5ddf6f);},'srXWg':function(_0x4a6562,_0x202ce4){return _0x4a6562(_0x202ce4);},'tWDgz':_0x762961(0x53c)+'es\x20on'+'\x20relo'+_0x762961(0x415),'CSsfZ':_0x762961(0x2ac)+_0x762961(0x1c0)+'th.In'+_0x762961(0x59c)+_0x762961(0x254)+'Healt'+'h)','NIQyd':function(_0x7a35bc,_0x2960f9,_0x89efb4,_0x45a02b){return _0x7a35bc(_0x2960f9,_0x89efb4,_0x45a02b);},'tcEHx':'no\x20ch'+'eats\x20'+'work\x20'+_0x762961(0x519)+'ut\x20th'+'is','wCFWd':function(_0x18e9c9,_0x2dba69,_0x3e2e58,_0x4a814e,_0x363978,_0x358dc0){return _0x18e9c9(_0x2dba69,_0x3e2e58,_0x4a814e,_0x363978,_0x358dc0);},'odlRA':function(_0x196100,_0xf09b08,_0x120834){return _0x196100(_0xf09b08,_0x120834);},'Uyeil':'God/d'+_0x762961(0x31a)+_0x762961(0x219)+'d\x20gre'+_0x762961(0x11b)+_0x762961(0x5d9)+_0x762961(0x3c0)+_0x762961(0x12a)+'even\x20'+_0x762961(0x587)+'this\x20'+_0x762961(0x591),'HVfcJ':_0x762961(0x47f)+'my\x20se'+_0x762961(0x3d0)+'s','vXqCZ':_0x762961(0x594),'dhHIf':'mn-pa'+_0x762961(0x3d8),'cZTmj':_0x762961(0x45e)+'in','cTUmt':'heade'+'r','dAxbB':'mn-ti'+_0x762961(0x69d),'TSKNZ':'small','XbdlQ':_0x762961(0x13c)+_0x762961(0x17e)+'.io\x20m'+_0x762961(0x1f6),'cncKt':_0x762961(0x6b2)+_0x762961(0x58f),'RALZg':_0x762961(0x3a0)+_0x762961(0x5f5)+'ox=\x220'+_0x762961(0x373)+_0x762961(0x5a0)+_0x762961(0x302)+'\x20d=\x22M'+_0x762961(0x149)+'2\x2012M'+_0x762961(0x32e)+'6\x2018\x22'+_0x762961(0x22f)+'vg>','DKnZd':_0x762961(0x202)+_0x762961(0x5f4)+'5|4|0','lmhlo':function(_0x6d95c8,_0x1b6f73){return _0x6d95c8+_0x1b6f73;},'eQtaH':_0x762961(0x3a5)+'b','tnzOS':function(_0x2228b2){return _0x2228b2();},'HONHq':function(_0x42061c,_0x2bd967){return _0x42061c*_0x2bd967;},'XKYOV':function(_0x224535,_0x1f8b0a){return _0x224535-_0x1f8b0a;},'sKkmo':_0x762961(0x41f)+_0x762961(0x430)+'35,24'+_0x762961(0x144)+'5)','yycAG':'bLtDL','yPeyF':_0x762961(0x69f),'FyNPa':function(_0x1b9c98,_0x9db3a5){return _0x1b9c98*_0x9db3a5;},'oJHNX':'BHCHX','MOIlz':function(_0x5d2bd3,_0x36a207){return _0x5d2bd3(_0x36a207);},'yDCSj':_0x762961(0x4df)+'t','mxIAP':_0x762961(0x23c),'zwRsN':_0x762961(0x5c0),'rOLMm':_0x762961(0x3e8)+'g','cfHvw':_0x762961(0x172)+'bound'+'\x20','vMWwk':_0x762961(0x307)+_0x762961(0x276)+'t\x20','YJoOd':_0x762961(0x513)+_0x762961(0x2e2)+_0x762961(0x574),'RRmbQ':function(_0x448bde){return _0x448bde();},'PcdSM':'godDi'+'e','WkeKV':function(_0x4142eb){return _0x4142eb();},'NPMUf':_0x762961(0x1a7),'yUvgQ':'activ'+'e','doMlM':_0x762961(0x4ad),'rrnLC':'\x20|\x20ER'+_0x762961(0x382),'JfaIx':_0x762961(0x584)+'t','MEXVG':'posit'+_0x762961(0x46d)+_0x762961(0x2cb)+_0x762961(0x13b)+_0x762961(0x112)+_0x762961(0x2fb)+'00vw;'+_0x762961(0x1a6)+_0x762961(0xf6)+'vh;z-'+'index'+_0x762961(0x2b4)+_0x762961(0x161)+_0x762961(0x27a)+_0x762961(0x363)+_0x762961(0x313)+_0x762961(0x628)+'e','VySWo':'sakur'+_0x762961(0x128),'MgcBZ':_0x762961(0x19f)+_0x762961(0x46d)+'ixed;'+'inset'+':0;z-'+_0x762961(0x2fe)+_0x762961(0x2b4)+'48364'+'7;poi'+_0x762961(0x363)+'event'+_0x762961(0x628)+'e;','wpQVU':_0x762961(0x5f7),'qeUgM':_0x762961(0x339)+_0x762961(0x4a2)+_0x762961(0x356)+'v1','Gssfo':'Visua'+'l','hhDrQ':'Misc','jnTTc':_0x762961(0x679)+'y','rykpm':_0x762961(0x19f)+'ion:f'+_0x762961(0x2cb)+_0x762961(0x3c1)+_0x762961(0x1e2)+'ight:'+_0x762961(0x17d)+_0x762961(0x686)+_0x762961(0x531)+_0x762961(0x274)+'646;c'+'ursor'+_0x762961(0x10d)+_0x762961(0x241)+'idth:'+'26px;'+'heigh'+'t:26p'+'x;opa'+_0x762961(0x490)+_0x762961(0x3ac)+_0x762961(0x627)+_0x762961(0x3b1)+_0x762961(0x476)+'ty\x200.'+'2s;po'+_0x762961(0x413)+'-even'+'ts:au'+'to;fi'+'lter:'+'drop-'+_0x762961(0x384)+'w(0\x200'+'\x204px\x20'+_0x762961(0x41f)+_0x762961(0x2bb)+'07,15'+_0x762961(0x196)+'))','BNnyA':_0x762961(0x3a0)+'viewB'+'ox=\x220'+_0x762961(0x373)+_0x762961(0x5a0)+_0x762961(0x302)+_0x762961(0x22d)+_0x762961(0x1e4)+_0x762961(0x3a9)+_0x762961(0x605)+_0x762961(0x4d6)+_0x762961(0x15a)+_0x762961(0x122)+_0x762961(0x431)+_0x762961(0x357)+_0x762961(0x189)+_0x762961(0x255)+_0x762961(0x635)+_0x762961(0x4fe)+_0x762961(0x36a)+'5-4\x207'+_0x762961(0x298)+'fill='+_0x762961(0x46f)+_0x762961(0x19a)+'oke=\x22'+_0x762961(0x64f)+_0x762961(0x318)+_0x762961(0x2f5)+_0x762961(0x3ec)+'h=\x222\x22'+_0x762961(0x572)+_0x762961(0x547)+_0x762961(0x460)+_0x762961(0x54a)+_0x762961(0x45d)+'troke'+'-line'+_0x762961(0x2ae)+_0x762961(0x567)+_0x762961(0x160)+_0x762961(0x1db)+_0x762961(0x4ba)+_0x762961(0x61e)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0x762961(0x39d)+_0x762961(0x22f)+_0x762961(0x2e3),'TsJeb':'#ff6b'+'9d','fEJAc':'#ffb3'+'c6','ndsXx':'error','OVhgl':_0x762961(0x1c2)+_0x762961(0x23d),'DeKvU':'1.1.0','qdNVR':'Tick','MEpdu':function(_0x4516e9,_0x26a038,_0x5e50b4,_0xfd269b,_0x5069a9,_0x8f5c70,_0x244283,_0x3a75d2){return _0x4516e9(_0x26a038,_0x5e50b4,_0xfd269b,_0x5069a9,_0x8f5c70,_0x244283,_0x3a75d2);},'WUxRM':'FRudk','VXhCc':_0x762961(0x2ee)+_0x762961(0x1f7)+'ur]\x20U'+_0x762961(0x4fd)+_0x762961(0x198)+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x762961(0x2f0)](location[_0x762961(0x3eb)+_0x762961(0x4a4)]||''))return;if(window['__SAK'+_0x762961(0x3bb)+_0x762961(0x1be)])return;window['__SAK'+'URA_K'+'OUR__']=!![];var _0x107f40=_0xe7ce06['TsJeb'],_0x39995d=_0xe7ce06['fEJAc'],_0x3b3134={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0xe7ce06[_0x762961(0x4e7)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x1510f2={..._0x3b3134};try{Object['assig'+'n'](_0x1510f2,JSON['parse'](localStorage[_0x762961(0x26b)+'em'](_0x762961(0x339)+_0x762961(0x4a2)+_0x762961(0x3d7))||'{}'));}catch(_0x154298){}function _0x2a456d(){var _0x2857c9=_0x762961,_0x262396={'UBTnI':function(_0x22300f,_0x370d01){return _0xe7ce06['KWCdi'](_0x22300f,_0x370d01);},'FLDkF':'\x20@\x20','KcGld':function(_0x16d4ab,_0x520c09){return _0x16d4ab(_0x520c09);},'sVjPU':function(_0x1a25d1,_0x59ee05){var _0x51b2f8=_0x1c18;return _0xe7ce06[_0x51b2f8(0x236)](_0x1a25d1,_0x59ee05);}};try{if(_0xe7ce06[_0x2857c9(0x4db)](_0xe7ce06['tCnmg'],_0xe7ce06[_0x2857c9(0x49e)]))try{var _0x30799f=_0x4fa88d&&(_0x328448['messa'+'ge']||_0x5ee582['error']&&_0x201975['error'][_0x2857c9(0x227)+'ge'])||'unkno'+'wn';if(_0xb107b8&&_0x5a5638[_0x2857c9(0x131)+_0x2857c9(0x4a4)])_0x30799f+=_0x262396['UBTnI'](_0x262396[_0x2857c9(0x425)]+_0x262396['KcGld'](_0x144054,_0x66e74f['filen'+_0x2857c9(0x4a4)])[_0x2857c9(0x552)]('/')['pop']()+':',_0x59bde5['linen'+'o']||'?');_0x414a49[_0x2857c9(0x2fa)+'rror']=_0x262396['sVjPU'](_0x19c6ba,_0x30799f)[_0x2857c9(0x42d)](-0x1bf6+-0x9e5*-0x2+0x82c*0x1,0xbf*-0x1f+0x1*0x963+0x265*0x6);}catch(_0x56f8bf){}else localStorage[_0x2857c9(0x52b)+'em'](_0x2857c9(0x339)+_0x2857c9(0x4a2)+_0x2857c9(0x3d7),JSON['strin'+'gify'](_0x1510f2));}catch(_0x5cb7ef){}}var _0x5dfee3={'uwmk':!!window['Unity'+'WebMo'+_0x762961(0x68f)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1510f2['safeM'+_0x762961(0x391)],'lastError':''};try{window[_0x762961(0x21d)+_0x762961(0x450)+_0x762961(0x285)+'r'](_0xe7ce06['ndsXx'],_0x473a2b=>{var _0x1dcc58=_0x762961;try{var _0x60b73d=_0x473a2b&&(_0x473a2b['messa'+'ge']||_0x473a2b['error']&&_0x473a2b[_0x1dcc58(0x641)]['messa'+'ge'])||_0x1dcc58(0x4ee)+'wn';if(_0x473a2b&&_0x473a2b[_0x1dcc58(0x131)+'ame'])_0x60b73d+=_0xe7ce06[_0x1dcc58(0x603)](_0xe7ce06['RJXzf'](_0xe7ce06['itJQd'],String(_0x473a2b['filen'+'ame'])['split']('/')[_0x1dcc58(0x660)]())+':',_0x473a2b[_0x1dcc58(0x51a)+'o']||'?');_0x5dfee3[_0x1dcc58(0x2fa)+_0x1dcc58(0x46b)]=String(_0x60b73d)[_0x1dcc58(0x42d)](0x7*0xa8+0x1*0xe87+-0x1bd*0xb,-0xdf*-0x2+0x23eb+-0x2509);}catch(_0x36dd17){}});}catch(_0x460685){}var _0x4499f3=null,_0x4d6573=null,_0x478d7f={},_0x506f5f=[],_0x1758a8=[],_0x3df50c=new Map();function _0x53ee6e(_0x31cfc9,_0x437eb6){var _0x13ab1a=_0x762961,_0x1ec8a6={'Xlqnl':_0xe7ce06[_0x13ab1a(0x2d8)],'lNVoh':function(_0x376f4d,_0x1a15ab){return _0x376f4d+_0x1a15ab;},'UQySE':function(_0x44a9ca,_0x42238e){return _0x44a9ca+_0x42238e;},'oEsES':'UWMK\x20'+_0x13ab1a(0x4c0)+'\x20','KvCJh':_0x13ab1a(0x585)+'s','nvjOR':_0x13ab1a(0x687)+_0x13ab1a(0x573)+_0x13ab1a(0x111)+_0x13ab1a(0x3d3)+_0x13ab1a(0x23b),'fCzFc':_0xe7ce06[_0x13ab1a(0x4a0)],'EwpfY':_0x13ab1a(0x648),'ZnfaZ':function(_0x9c6a01,_0xd91be0,_0x4b9973,_0x60fa10,_0x2fe2d9,_0x28cc46){return _0x9c6a01(_0xd91be0,_0x4b9973,_0x60fa10,_0x2fe2d9,_0x28cc46);},'RAabD':_0xe7ce06[_0x13ab1a(0x29f)],'YICFl':function(_0x9fa85d,_0x3cd8fc,_0x471567,_0x567097){return _0x9fa85d(_0x3cd8fc,_0x471567,_0x567097);},'Ycqff':_0xe7ce06['OcSzn']};if(_0xe7ce06['rbDBk']('RUgln',_0xe7ce06[_0x13ab1a(0x56e)])){if(!_0x437eb6||_0x31cfc9[_0x13ab1a(0x464)+_0x13ab1a(0x539)](_0x437eb6)||_0xe7ce06['hlIFS'](_0x31cfc9[_0x13ab1a(0x389)+'h'],-0x1854+0x8ef*-0x1+-0x17*-0x175))return;_0x31cfc9['push'](_0x437eb6);}else{var _0xc1db44={'RWWeU':_0x1ec8a6[_0x13ab1a(0x1ec)]},_0x2098e7=_0x4254ac[_0x13ab1a(0x37c)+'ode']?_0x13ab1a(0x5a9)+_0x13ab1a(0x190)+_0x13ab1a(0xfb)+'rlay\x20'+_0x13ab1a(0x5d3)+_0x13ab1a(0x348)+'ooks\x20'+_0x13ab1a(0x4d0)+'ad\x20to'+_0x13ab1a(0x130)+')':_0x3469c7['uwmk']?_0x1ec8a6[_0x13ab1a(0x533)](_0x1ec8a6[_0x13ab1a(0x126)](_0x1ec8a6[_0x13ab1a(0x38e)]+(_0x43046e[_0x13ab1a(0x4c3)+_0x13ab1a(0x1ff)]?_0x371500[_0x13ab1a(0x4c3)+'Ok']+'/'+_0x75d751[_0x13ab1a(0x4c3)+_0x13ab1a(0x1ff)]+_0x1ec8a6['KvCJh']:_0x1ec8a6['nvjOR'])+('\x20|\x20ga'+'me\x20'),_0x473c44[_0x13ab1a(0x5e5)+_0x13ab1a(0x442)]?_0x13ab1a(0x4f9)+'d':_0x1ec8a6[_0x13ab1a(0x64c)])+(_0x13ab1a(0x52d)+'ooter'+'\x20'),_0x50f90d['shoot'+_0x13ab1a(0x4c8)]?_0x13ab1a(0x4ad):_0x1ec8a6[_0x13ab1a(0x2e7)])+(_0x13ab1a(0x307)+'vemen'+'t\x20')+(_0x39e594[_0x13ab1a(0x5f2)+'ents']?_0x13ab1a(0x4ad):'none'):_0x13ab1a(0x172)+'MISSI'+'NG\x20—\x20'+_0x13ab1a(0x27f)+'ay\x20on'+'ly\x20(r'+'einst'+_0x13ab1a(0x1ea)+'he\x20us'+_0x13ab1a(0x3f6)+_0x13ab1a(0x1fd);if(_0x192d7b['lastE'+_0x13ab1a(0x46b)])_0x2098e7+=_0x13ab1a(0x421)+_0x13ab1a(0x382)+_0x168170[_0x13ab1a(0x2fa)+_0x13ab1a(0x46b)];return _0x1ec8a6['ZnfaZ'](_0x8e14b1,_0x1ec8a6[_0x13ab1a(0x606)],_0x2098e7,_0x23d152[_0x13ab1a(0x2e0)],null,[_0x1ec8a6[_0x13ab1a(0x2bc)](_0x595a71,'240\x20F'+'PS\x20un'+_0x13ab1a(0x574),_0x1ec8a6['Ycqff'],_0x458380('Apply',()=>{var _0x330461=_0x13ab1a;try{if(_0x74c157)_0x40c789[_0x330461(0x4bd)](_0x330461(0x5f3)+_0x330461(0x4a3)+_0x330461(0xf7)+_0x330461(0x308)+'ion',_0xc1db44[_0x330461(0x183)],[0x1*-0x20b+-0x2632+0x292d]);}catch(_0x4110bc){}}))]);}}function _0xe02f38(_0x1e4866,_0x100ed6,_0x3f15ee,_0x4db9ea){var _0xac6adc=_0x762961,_0x323f39={'lUpvi':_0xe7ce06[_0xac6adc(0x54e)]},_0x376912=0xa*-0x175+-0x19cc+0x285e*0x1;try{_0x376912=_0x100ed6&&_0x100ed6[_0xac6adc(0x3c6)]?_0x100ed6['val']():0x7d6+0x3*-0x47d+0x83*0xb;}catch(_0x32a19c){}if(!_0x376912)return;_0x53ee6e(_0x1e4866,_0x376912),_0x3f15ee[_0x4db9ea]=_0x1e4866[_0xac6adc(0x389)+'h'];if(_0x4db9ea==='movem'+'ents'&&_0x1e4866[_0xac6adc(0x389)+'h']){var _0xc42bc6=_0x478d7f[_0xac6adc(0x592)+'ve'];if(_0xc42bc6){if(_0xac6adc(0x28d)!==_0xac6adc(0x22c))try{_0xe7ce06[_0xac6adc(0xf1)]!==_0xe7ce06['USpJI']?new _0x3276c7(_0x14242e)['write'+_0xac6adc(0x4d3)](_0x4185ac,_0x2dd0ab,_0x4291fc):_0xc42bc6[_0xac6adc(0x675)+'ed']=![];}catch(_0x1f1759){}else{var _0x14e085=(_0xac6adc(0x191)+_0xac6adc(0x324)+_0xac6adc(0x65d))['split']('|'),_0x48bccc=0x48*0x14+0x1e84+-0x2424;while(!![]){switch(_0x14e085[_0x48bccc++]){case'0':if(_0x39b8c5[_0xac6adc(0x212)+'od'])_0x47fa80(_0xe7ce06[_0xac6adc(0x368)],_0xe7ce06[_0xac6adc(0x18f)],_0xac6adc(0x263)+_0xac6adc(0x61d)+'keHea'+_0xac6adc(0x3f5),[_0xac6adc(0x35b),_0xac6adc(0x35b)],_0xbf3f25,_0x53ee22,!!_0x673731[_0xac6adc(0x205)]);continue;case'1':_0xdabd33=_0x2a0944['Unity'+'WebMo'+_0xac6adc(0x68f)]['Value'+'Wrapp'+'er'];continue;case'2':if(_0x1b3747['hookC'+'aptur'+'e'])_0xe7ce06['iaAJq'](_0x2584a1,_0xac6adc(0x5ad)+'ooter',_0xe7ce06[_0xac6adc(0x579)],_0xe7ce06[_0xac6adc(0x168)],[_0xe7ce06[_0xac6adc(0x66d)],_0xac6adc(0x35b)],_0x470e9f,(_0x32ecdf,_0x88fb4b)=>{_0x233a6e(_0x4e13ee,_0x88fb4b,_0x57b6aa,_0x323f39['lUpvi']);},!![]);continue;case'3':if(_0x1aed2e['hookG'+'odDie'])_0x4e8cbf(_0xac6adc(0x611)+'e','OHeal'+'th',_0xac6adc(0x47c)+_0xac6adc(0x5ba),[_0xac6adc(0x35b),'i32','i32',_0xac6adc(0x35b),_0xac6adc(0x35b)],_0x40267f,_0x378f40,!!_0x2b3770[_0xac6adc(0x205)]);continue;case'4':if(_0x1aee9b['hookN'+'oReco'+'il'])_0x3a76b2(_0xe7ce06[_0xac6adc(0x350)],'Legio'+'nPlat'+_0xac6adc(0x355)+'.Over'+'tide.'+_0xac6adc(0x246)+_0xac6adc(0x2ce)+'on',_0xac6adc(0x297),[_0xe7ce06['ZhBtu']],_0x3df43f,_0x24a913,!!_0x26ec2a[_0xac6adc(0xf8)+_0xac6adc(0x1da)]);continue;case'5':_0x20c2de=_0x1d4aeb[_0xac6adc(0x5f3)+'WebMo'+'dkit']['Runti'+'me'][_0xac6adc(0x209)+'ePlug'+'in']({'name':_0xac6adc(0x1c2)+_0xac6adc(0x23d),'version':_0xac6adc(0x63c),'referencedAssemblies':[_0xac6adc(0x651)+'bly-C'+_0xac6adc(0x5df)+'.dll']});continue;case'6':if(_0x54f5d1[_0xac6adc(0x467)+_0xac6adc(0x5dd)+'e'])_0x25d04e(_0xac6adc(0x592)+'ve',_0xac6adc(0x4cd)+'nPlat'+_0xac6adc(0x355)+_0xac6adc(0x1e6)+_0xac6adc(0x5a8)+_0xac6adc(0x3ee)+'ent','IsGro'+'unded',[_0xe7ce06[_0xac6adc(0x66d)]],_0xac6adc(0x35b),(_0x104d21,_0x411ec0)=>{_0x2d4635(_0x3fc725,_0x411ec0,_0x2a29c1,'movem'+'ents');},!![]);continue;}break;}}}}}function _0x3c2af1(_0x4494e5,_0xb03277,_0x88b3e0){var _0xace5de=_0x762961,_0x39142d=_0x3df50c[_0xace5de(0x1f4)](_0x4494e5);!_0x39142d&&(_0x39142d=new Map(),_0x3df50c[_0xace5de(0x56f)](_0x4494e5,_0x39142d));if(!_0x39142d['has'](_0xb03277))try{var _0x38e04a=new _0x4499f3(_0x4494e5)['readF'+'ield'](_0xb03277,_0x88b3e0);_0x39142d['set'](_0xb03277,_0xe7ce06[_0xace5de(0x50c)](_0x38e04a,undefined)?_0x38e04a[_0xace5de(0x3c6)]():null);}catch(_0x3c9eb7){_0x39142d[_0xace5de(0x56f)](_0xb03277,null);}return _0x39142d[_0xace5de(0x1f4)](_0xb03277);}function _0xca275e(_0x10a4ea,_0x25d2e3,_0x1fdae5,_0x44de1a){var _0x434b78=_0x762961,_0x578b3e={'RjQUn':function(_0x32795a){return _0x32795a();}};if(_0xe7ce06[_0x434b78(0x5ce)]===_0x434b78(0x68d))_0x2e48f8['stopP'+'ropag'+_0x434b78(0x4dc)](),_0x578b3e[_0x434b78(0x33b)](_0x463d9a);else try{_0x434b78(0xf4)!==_0xe7ce06['UYaeq']?(_0x3c2464[_0x434b78(0x516)+'ct']=_0x58533d,_0x2006ba()):new _0x4499f3(_0x10a4ea)[_0x434b78(0x571)+_0x434b78(0x4d3)](_0x25d2e3,_0x1fdae5,_0x44de1a);}catch(_0x557b4e){}}function _0x18a2af(_0x13a62e,_0x249453){var _0x3fc5fc=_0x762961;try{if(_0x3fc5fc(0x5b3)===_0xe7ce06[_0x3fc5fc(0x5f8)]){var _0x445505=new _0x4499f3(_0x13a62e)[_0x3fc5fc(0x268)+_0x3fc5fc(0x1ac)](_0x249453,_0x3fc5fc(0x53b));return _0x445505?_0x445505['val']():0x76e+-0x1*-0x9fd+-0x116b;}else _0x4dd3dd[_0x3fc5fc(0x2c8)+_0x3fc5fc(0x593)+_0x3fc5fc(0x5d1)](),_0xe7ce06['bHlEx'](_0x400908);}catch(_0x1afd56){return 0x1*-0x20f7+0x1ab6+-0x641*-0x1;}}function _0x198ea6(_0x4550a2,_0x52f52e,_0x243c55,_0x5e82af){var _0x1f805a=_0x762961,_0x3e5c90=_0x3c2af1(_0x4550a2,_0x52f52e,_0x243c55);if(_0xe7ce06[_0x1f805a(0x28e)](_0x3e5c90,null))_0xe7ce06[_0x1f805a(0x2c2)](_0xca275e,_0x4550a2,_0x52f52e,_0x243c55,_0x3e5c90*_0x5e82af);}function _0xf76f2a(_0x2c452c,_0x1933fd,_0x3bc090,_0x395c9a,_0xffd7cc,_0x43f164,_0x200123){var _0x25bc28=_0x762961;try{var _0x2526f5=_0x4d6573['hookP'+_0x25bc28(0x1f0)]({'typeName':_0x1933fd,'methodName':_0x3bc090,'params':_0x395c9a,'returnType':_0xffd7cc},_0x43f164);return _0x2526f5[_0x25bc28(0x675)+'ed']=_0x200123!==![],_0x478d7f[_0x2c452c]=_0x2526f5,_0x5dfee3['hooks'+'Total']++,_0x2526f5;}catch(_0x37f6ab){return console['warn'](_0xe7ce06[_0x25bc28(0x2eb)],_0x2c452c,_0x37f6ab&&_0x37f6ab['messa'+'ge']),null;}}function _0xe50c2d(_0x257525,_0xd0b1cb,_0x2dab69,_0x3fe8e3,_0x49dce3,_0x2a9114,_0x4799ff){var _0x74d913=_0x762961,_0x32535e={'lkYtJ':function(_0xb51f6e,_0x3b638d){return _0xb51f6e(_0x3b638d);},'UdRNK':_0xe7ce06[_0x74d913(0x283)]};try{if(_0xe7ce06[_0x74d913(0x40d)](_0xe7ce06[_0x74d913(0x68e)],_0x74d913(0x282))){var _0x44e0c2=_0x4d6573[_0x74d913(0x1b3)+'ostfi'+'x']({'typeName':_0xd0b1cb,'methodName':_0x2dab69,'params':_0x3fe8e3,'returnType':_0x49dce3},_0x2a9114);return _0x44e0c2['enabl'+'ed']=_0x4799ff!==![],_0x478d7f[_0x257525]=_0x44e0c2,_0x5dfee3['hooks'+_0x74d913(0x1ff)]++,_0x44e0c2;}else{_0x26a9ad=_0x26710f;if(!_0x170215){var _0x59c31a=_0xba6c5a[_0x74d913(0x209)+'eElem'+'ent'](_0x74d913(0x60e));_0x59c31a['textC'+_0x74d913(0x2a4)+'t']=_0x37843d,_0x1b8163[_0x74d913(0x644)+'dChil'+'d'](_0x59c31a),_0x599059=_0x3e2604(),_0x4a1748[_0x74d913(0x644)+_0x74d913(0x201)+'d'](_0x51fb88),_0x32535e[_0x74d913(0x1fa)](_0x150755,()=>_0x10c30b[_0x74d913(0x155)+'List']['add']('shown'));}_0x8277d[_0x74d913(0x155)+'List'][_0x74d913(0x140)+'e'](_0x32535e[_0x74d913(0x152)],_0x2daa84);}}catch(_0x112beb){return console[_0x74d913(0x530)](_0x74d913(0x2ee)+_0x74d913(0x1f7)+_0x74d913(0x479)+_0x74d913(0x3d9)+'eg\x20fa'+_0x74d913(0x2cf),_0x257525,_0x112beb&&_0x112beb[_0x74d913(0x227)+'ge']),null;}}var _0x552fc1=()=>![];try{if(window[_0x762961(0x5f3)+_0x762961(0x4a8)+_0x762961(0x68f)]&&!_0x1510f2['safeM'+_0x762961(0x391)]){_0x4499f3=window['Unity'+'WebMo'+'dkit']['Value'+_0x762961(0x2e9)+'er'],_0x4d6573=window['Unity'+'WebMo'+_0x762961(0x68f)][_0x762961(0x294)+'me'][_0x762961(0x209)+_0x762961(0x680)+'in']({'name':_0xe7ce06[_0x762961(0x21e)],'version':_0xe7ce06[_0x762961(0x3d6)],'referencedAssemblies':[_0x762961(0x651)+_0x762961(0x346)+_0x762961(0x5df)+_0x762961(0x56c)]});if(_0x1510f2[_0x762961(0x212)+'od'])_0xf76f2a(_0x762961(0x205),'OHeal'+'th',_0x762961(0x263)+_0x762961(0x61d)+_0x762961(0x471)+_0x762961(0x3f5),[_0x762961(0x35b),'i32'],undefined,_0x552fc1,!!_0x1510f2['god']);if(_0x1510f2['hookG'+'odDie'])_0xf76f2a('godDi'+'e',_0xe7ce06['nuUJF'],'Local'+_0x762961(0x5ba),[_0x762961(0x35b),_0x762961(0x35b),_0x762961(0x35b),_0xe7ce06[_0x762961(0x66d)],_0x762961(0x35b)],undefined,_0x552fc1,!!_0x1510f2['god']);if(_0x1510f2['hookN'+_0x762961(0x1a4)+'il'])_0xf76f2a('noRec'+'oil',_0xe7ce06['FbUGy'],_0xe7ce06['qdNVR'],[_0x762961(0x35b)],undefined,_0x552fc1,!!_0x1510f2[_0x762961(0xf8)+'oil']);if(_0x1510f2['hookC'+_0x762961(0x5dd)+'e'])_0xe7ce06[_0x762961(0x5a3)](_0xe50c2d,'capSh'+_0x762961(0x434),_0xe7ce06[_0x762961(0x579)],_0x762961(0x3b5)+_0x762961(0x459)+_0x762961(0x32b),[_0x762961(0x35b),'i32'],undefined,(_0x55a289,_0x1dedc2)=>{var _0x769b76=_0x762961;_0x769b76(0x398)!==_0xe7ce06['DCMAd']?_0x15cebc[_0x769b76(0x417)]==='Inser'+'t'&&(_0x47bb3c['preve'+_0x769b76(0x593)+_0x769b76(0x5d1)](),_0xab1e4e()):_0xe7ce06[_0x769b76(0x226)](_0xe02f38,_0x1758a8,_0x1dedc2,_0x5dfee3,_0x769b76(0x116)+_0x769b76(0x4c8));},!![]);if(_0x1510f2[_0x762961(0x467)+_0x762961(0x5dd)+'e'])_0xe50c2d(_0x762961(0x592)+'ve',_0x762961(0x4cd)+'nPlat'+_0x762961(0x355)+'.Over'+_0x762961(0x5a8)+_0x762961(0x3ee)+'ent','IsGro'+'unded',[_0xe7ce06[_0x762961(0x66d)]],_0xe7ce06['ZhBtu'],(_0x4e0950,_0x5b4e7f)=>{var _0x1bfa9d=_0x762961;_0xe02f38(_0x506f5f,_0x5b4e7f,_0x5dfee3,'movem'+_0x1bfa9d(0x5bd));},!![]);}}catch(_0x556346){if(_0x762961(0x193)===_0xe7ce06[_0x762961(0x548)]){var _0x29d455=('3|4|2'+_0x762961(0x443))[_0x762961(0x552)]('|'),_0x33947=0xe38+-0x34a+0x577*-0x2;while(!![]){switch(_0x29d455[_0x33947++]){case'0':_0x5e90d9[_0x762961(0x4c3)+_0x762961(0x1ff)]++;continue;case'1':return _0x22d71b;case'2':_0x3e474e[_0x1d986c]=_0x22d71b;continue;case'3':var _0x22d71b=_0x51fbe2[_0x762961(0x1b3)+'refix']({'typeName':_0x3f6f8e,'methodName':_0xe68fac,'params':_0x43beab,'returnType':_0x3bc3e6},_0x1d7a50);continue;case'4':_0x22d71b[_0x762961(0x675)+'ed']=_0x47159e!==![];continue;}break;}}else console[_0x762961(0x530)](_0xe7ce06['VXhCc'],_0x556346&&_0x556346['messa'+'ge']);}function _0x8568eb(_0x233802,_0x13d771){var _0x269bb9=_0x762961;if('nbYlY'===_0xe7ce06[_0x269bb9(0x3fa)]){var _0x28c17c=_0x332e2c[_0x3f7532]||[],_0x324fd6=_0x94c7c0['now']();while(_0x28c17c[_0x269bb9(0x389)+'h']&&_0x324fd6-_0x28c17c[-0x18d+0xf57+-0xdca]>0x199a+0x49c+-0x1a4e)_0x28c17c['shift']();return _0x28c17c['lengt'+'h'];}else{var _0x5e8350=_0x478d7f[_0x233802];if(_0x5e8350){if(_0xe7ce06['FsBAz']===_0x269bb9(0x69a))try{var _0x316448=_0x1cb9f6[_0x269bb9(0x1b3)+_0x269bb9(0x1f0)]({'typeName':_0x17dbdf,'methodName':_0x3974c3,'params':_0x4fea91,'returnType':_0x354195},_0x2b59c6);return _0x316448['enabl'+'ed']=_0xe7ce06[_0x269bb9(0x40d)](_0x1b6f23,![]),_0x5f177b[_0x46a150]=_0x316448,_0x50e48e[_0x269bb9(0x4c3)+'Total']++,_0x316448;}catch(_0x520312){return _0x441664['warn'](_0xe7ce06['AeJyx'],_0x4962f4,_0x520312&&_0x520312[_0x269bb9(0x227)+'ge']),null;}else try{_0x5e8350[_0x269bb9(0x675)+'ed']=!!_0x13d771;}catch(_0x5f59cb){}}}}setInterval(()=>{var _0x454a79=_0x762961,_0x27aab5={'GGkXb':_0xe7ce06[_0x454a79(0x311)],'IPmit':'middl'+'e','nFOcU':function(_0xf2e4d1,_0x1fc842){return _0xf2e4d1+_0x1fc842;},'aPULw':function(_0x21c14b,_0xf8c3e8){return _0xe7ce06['caMaV'](_0x21c14b,_0xf8c3e8);},'FAKfC':function(_0x4a7584,_0x2c20fb){var _0x1e54e0=_0x454a79;return _0xe7ce06[_0x1e54e0(0x60b)](_0x4a7584,_0x2c20fb);},'qDpag':function(_0x2a6f51,_0x3f6334){return _0xe7ce06['afTRs'](_0x2a6f51,_0x3f6334);},'xBbtw':_0x454a79(0x695)+_0x454a79(0x2f2)+'-seri'+'f,sys'+'tem-u'+_0x454a79(0x566)+_0x454a79(0x367)+'if','EOirQ':function(_0x4003a4,_0x2c1138){return _0x4003a4+_0x2c1138;}};if('kdTQg'==='NZWVu'){var _0x4b9eda=_0x41f65f[_0x454a79(0x209)+'eElem'+'ent']('style');_0x4b9eda[_0x454a79(0x46c)+_0x454a79(0x2a4)+'t']=_0x39c2f8,_0x250c02['appen'+'dChil'+'d'](_0x4b9eda),_0x27fae5=_0x40d298(),_0x59004a[_0x454a79(0x644)+_0x454a79(0x201)+'d'](_0x29f797),_0xe7ce06[_0x454a79(0x236)](_0x65269c,()=>_0x449a3d[_0x454a79(0x155)+'List']['add'](_0x454a79(0x6a7)));}else{if(!_0x4499f3||!window['unity'+'Insta'+_0x454a79(0x5dc)])return;var _0x35f3be=(Number(_0x1510f2[_0x454a79(0x153)+'Pct'])||-0x41f*0x1+-0x1*0x15a6+0x1a29)/(-0x2676*0x1+0x3d0+0x230a),_0x4661d6=(Number(_0x1510f2[_0x454a79(0x516)+'ct'])||-0x264f+0x1*0x113e+0x3*0x727)/(-0x1138+0x14fa+-0x35e),_0x2ae0e9=_0xe7ce06[_0x454a79(0x60b)](Number(_0x1510f2['gravi'+_0x454a79(0x63a)])||-0xfe1+0x734+-0x911*-0x1,-0x59*-0x15+-0x2299+-0x6ec*-0x4),_0xbcd060=Math[_0x454a79(0x3c9)](-0x2*0xa7+0x150c+-0x1f*0xa3,Number(_0x1510f2['damag'+'eValu'+'e'])||0x20*-0x121+0x26ab+-0x1f5),_0xeca028=_0x35f3be!==-0x23bc+0xfa7*0x1+-0xa0b*-0x2||_0x4661d6!==0xc14+-0x1731+0x58f*0x2||_0x2ae0e9!==0x1ffb+-0x116e*0x1+-0xe8c||_0x1510f2[_0x454a79(0x51c)],_0x272086=_0x1510f2['noSpr'+'ead']||_0x1510f2[_0x454a79(0x5c8)+'eExp']||_0x1510f2['infAm'+'moExp']||_0x1510f2['rapid'+_0x454a79(0x28b)];if(!_0xeca028&&!_0x272086)return;try{if('EWdRG'!==_0x454a79(0x22a))_0x18070e[_0x454a79(0x39b)][_0x454a79(0x644)+_0x454a79(0x201)+'d'](_0x16d100);else for(var _0x1780e4=0x1c36+-0x224f+0x619;_0x1780e4<_0x506f5f[_0x454a79(0x389)+'h'];_0x1780e4++){if('gmlxZ'===_0x454a79(0x49d)){var _0x2962ba=_0xb749f4['capMo'+'ve'];if(_0x2962ba)try{_0x2962ba[_0x454a79(0x675)+'ed']=![];}catch(_0x978817){}}else{var _0x3d4769=_0x506f5f[_0x1780e4];if(!_0x3d4769)continue;if(_0x35f3be!==-0x1d0d+-0x2af*-0xc+-0x326){var _0x4ecf3f=(_0x454a79(0x34d)+_0x454a79(0x117)+'3')[_0x454a79(0x552)]('|'),_0x2d149a=0x1*0xd3f+0x58f*0x2+-0x185d;while(!![]){switch(_0x4ecf3f[_0x2d149a++]){case'0':_0xe7ce06['GeziR'](_0x198ea6,_0x3d4769,-0x21*-0xed+-0xfe3+0x6*-0x269,'f32',_0x35f3be);continue;case'1':_0x198ea6(_0x3d4769,-0x1c3+0x1d2*-0x11+0x1*0x20e5,'f32',_0x35f3be);continue;case'2':_0x198ea6(_0x3d4769,0xae6+-0xb39+0x7f,'f32',_0x35f3be);continue;case'3':_0x198ea6(_0x3d4769,0x273+0xac5*0x1+0xd18*-0x1,'f32',_0x35f3be);continue;case'4':_0x198ea6(_0x3d4769,0xc32+0x1136+-0x10*0x1d4,_0x454a79(0x19b),_0x35f3be);continue;case'5':_0x198ea6(_0x3d4769,0x2*-0x78d+0x143*0x1d+0xd*-0x1a5,_0x454a79(0x19b),_0x35f3be);continue;}break;}}if(_0xe7ce06[_0x454a79(0x5ab)](_0x4661d6,0xcec+0x2d0+-0xfbb))_0x198ea6(_0x3d4769,-0x1ca3+-0x5*0x4f+0x1e7e,_0x454a79(0x19b),_0x4661d6);_0xe7ce06['LBiqo'](_0x2ae0e9,-0xbaa+0x10a0+0x1*-0x4f5)&&(_0xe7ce06[_0x454a79(0x1d3)](_0x454a79(0x4e1),_0x454a79(0x478))?(_0x198ea6(_0x3d4769,0xef8+0x1a2d+-0x28dd,'f32',_0x2ae0e9),_0x198ea6(_0x3d4769,0x10bb+-0x2568+-0x5b*-0x3b,_0xe7ce06['WjJgJ'],_0x2ae0e9)):(_0xa0551e[_0x454a79(0x32a)+_0x454a79(0x217)]=_0x19b563,_0x4bbcb3()));if(_0x1510f2[_0x454a79(0x51c)])_0xca275e(_0x3d4769,0xadf+-0x1d2e+-0x12eb*-0x1,_0x454a79(0x19b),-(0x43+0x9e6+0x216*-0x3));}}}catch(_0x44524f){}try{for(var _0x21533b=0x4ff+-0x1a08*0x1+0x167*0xf;_0xe7ce06['ITgCx'](_0x21533b,_0x1758a8['lengt'+'h']);_0x21533b++){var _0x4dcd98=_0x18a2af(_0x1758a8[_0x21533b],0x2*-0x7e5+-0x1*0x1619+0x261b);if(!_0x4dcd98)continue;_0x1510f2[_0x454a79(0x5c8)+'eExp']&&('yUaIj'===_0xe7ce06['wfTXm']?(_0xca275e(_0x4dcd98,0x126d+-0x5ee*0x2+-0x645,'i32',_0xbcd060),_0xca275e(_0x4dcd98,0x4a0+-0x1313+-0x27*-0x61,_0xe7ce06[_0x454a79(0x66d)],_0xbcd060)):(_0x23aced[_0x454a79(0x135)]=_0x321aec,_0xe7ce06['bHlEx'](_0x1e2ffa)));if(_0x1510f2[_0x454a79(0x32a)+'ead']){if('FNprI'!=='FNprI'){var _0xf4551c=_0x2d928d(_0x3774d4['ksSca'+'le'])||0x94e+0x1e91*-0x1+-0x1544*-0x1,_0x5c59a=(-0x14ed+-0x1*0x23db+0x38ea)*_0xf4551c,_0x2dc12a=(0x6ff+-0x9b8*0x2+0x427*0x3)*_0xf4551c,_0x103d1a=_0x5c59a*(-0xc92+0x443*-0x4+-0xcd*-0x25)+_0xe7ce06[_0x454a79(0x2fd)](_0x2dc12a,-0x1ece+-0x9*0x47+0x214f*0x1),_0x4c6d1e=_0x5c59a*(0x2*0xa+0x169d*-0x1+0x3c2*0x6)+_0x2dc12a*(0x6f1+0x24e*0x1+0x5*-0x1d9),_0x3022c6=_0x40c917['ksPos'],_0x35ab9c=_0x3022c6==='br'?_0xe7ce06['jIuFV'](_0x404da4['right']-(-0x2*0xe21+-0x1ee9+0x3b3b),_0x103d1a):_0x28d70a[_0x454a79(0x10f)]+(0x1*-0x128f+-0x9*-0x1cd+0x26a),_0x5c7402=_0x3022c6==='ml'?_0xe7ce06['pyDCf'](_0xe7ce06[_0x454a79(0x688)](_0x44728e[_0x454a79(0x517)],_0x442247[_0x454a79(0x1a6)+'t']/(0x464+-0x26d5+-0x1*-0x2273)),_0x4c6d1e/(0xd61+-0x232f+0x2*0xae8)):_0xe7ce06[_0x454a79(0x527)](_0x4c2d01['botto'+'m']-_0x4c6d1e,_0xe7ce06[_0x454a79(0x48a)](_0x3022c6,'bl')?-0x254d+-0x11f*0xf+-0x4b*-0xba:0x20bf+0x3ef*0x3+0x14b*-0x22),_0x320b2f=(_0x4ab46b,_0x3e2b4b,_0x43a665,_0xd838db,_0x3c0b67,_0x3d54fa,_0x4ba623)=>{var _0x3491ef=_0x454a79,_0x34bcec=_0x1594ff[_0x3491ef(0x3cb)](_0x3e2b4b);_0x450c4f[_0x3491ef(0x53e)](),_0x30df73[_0x3491ef(0x2e6)+_0x3491ef(0x672)]();if(_0x52e1f4[_0x3491ef(0x661)+'Rect'])_0x320cc0[_0x3491ef(0x661)+_0x3491ef(0x68b)](_0x43a665,_0xd838db,_0x3c0b67,_0x3d54fa,(-0xe39+0x2066+-0x1*0x1226)*_0xf4551c);else _0x2ddbc5['rect'](_0x43a665,_0xd838db,_0x3c0b67,_0x3d54fa);_0x12d010[_0x3491ef(0x44a)+'tyle']=_0x34bcec?_0x3491ef(0x41f)+'255,1'+'07,15'+'7,0.8'+'5)':_0x27aab5[_0x3491ef(0x54c)],_0x51b7f5[_0x3491ef(0x1c7)](),_0x120ed8['lineW'+_0x3491ef(0x67d)]=-0x32d+-0x6f*0xd+0x8d1,_0x5d8374[_0x3491ef(0x3dd)+_0x3491ef(0x2e1)+'e']=_0x34bcec?_0x236e25:_0x3491ef(0x41f)+'255,1'+_0x3491ef(0x4a5)+_0x3491ef(0x3ae)+'5)',_0x453eb2[_0x3491ef(0x3dd)+'e'](),_0x34bcec&&(_0x4c9332['shado'+_0x3491ef(0x2d9)+'r']=_0x350108,_0x3d8e0d[_0x3491ef(0x384)+_0x3491ef(0x2ff)]=0x253c+-0x1aa*-0x3+-0x2*0x1516,_0x4b9860['fill'](),_0x3d09a9[_0x3491ef(0x384)+'wBlur']=-0x1e39*-0x1+0x6*-0xf3+-0x1887),_0x153658[_0x3491ef(0x44a)+_0x3491ef(0x5ee)]=_0x34bcec?_0x3491ef(0x2c9):_0x3491ef(0x41f)+_0x3491ef(0x430)+'35,24'+_0x3491ef(0x10b)+')',_0x5f3ff0[_0x3491ef(0x3fc)+_0x3491ef(0x49c)]='cente'+'r',_0x46a11a[_0x3491ef(0x3a7)+_0x3491ef(0x106)+'ne']=_0x27aab5[_0x3491ef(0x3e9)],_0x1c398d[_0x3491ef(0x14c)]=_0x27aab5[_0x3491ef(0x4b1)]('700\x20'+_0x946d81['round'](_0x27aab5['aPULw'](-0x1f*-0xad+0x241c+-0x3903,_0xf4551c)),_0x3491ef(0x695)+_0x3491ef(0x2f2)+_0x3491ef(0x595)+_0x3491ef(0x544)+_0x3491ef(0x139)+_0x3491ef(0x566)+'s-ser'+'if'),_0x4d1291[_0x3491ef(0x358)+'ext'](_0x4ab46b,_0x43a665+_0x27aab5[_0x3491ef(0x542)](_0x3c0b67,-0xd1*-0x1d+-0x1*0x1a36+0x28b),_0x27aab5['qDpag'](_0x27aab5['nFOcU'](_0xd838db,_0x27aab5['FAKfC'](_0x3d54fa,0x2528+-0x272+-0x22b4*0x1)),_0x4ba623?(0x2ec+-0x4*0x437+0xdf5)*_0xf4551c:-0x17b*0x4+0x579*-0x2+0x10de)),_0x4ba623&&(_0x3db72a[_0x3491ef(0x14c)]='600\x20'+_0x51c27f['round'](_0x27aab5[_0x3491ef(0x2cc)](0x948*0x3+-0x44*0x22+-0xd1*0x17,_0xf4551c))+_0x27aab5['xBbtw'],_0x18cf46[_0x3491ef(0x44a)+'tyle']=_0x34bcec?'#fff':_0x3491ef(0x41f)+'255,2'+'35,24'+'0,0.5'+'5)',_0xfe0729[_0x3491ef(0x358)+_0x3491ef(0x18a)](_0x4ba623,_0x43a665+_0x3c0b67/(0xb58+0x2519+0x3*-0x1025),_0x27aab5['EOirQ'](_0xd838db+_0x27aab5['FAKfC'](_0x3d54fa,-0xedb+-0x1*0x382+0x125f),(0x1e01+-0x77*0x20+0x1*-0xf19)*_0xf4551c))),_0x67f00f[_0x3491ef(0x599)+'re']();};_0x320b2f('W',_0xe7ce06[_0x454a79(0x5ec)],_0x35ab9c+_0x5c59a+_0x2dc12a,_0x5c7402,_0x5c59a,_0x5c59a),_0x320b2f('A',_0xe7ce06[_0x454a79(0x295)],_0x35ab9c,_0x5c7402+_0x5c59a+_0x2dc12a,_0x5c59a,_0x5c59a),_0xe7ce06[_0x454a79(0x5fa)](_0x320b2f,'S',_0xe7ce06[_0x454a79(0x2a1)],_0xe7ce06['RJXzf'](_0x35ab9c,_0x5c59a)+_0x2dc12a,_0xe7ce06[_0x454a79(0x603)](_0x5c7402,_0x5c59a)+_0x2dc12a,_0x5c59a,_0x5c59a),_0x320b2f('D','KeyD',_0xe7ce06['sgkZc'](_0x35ab9c,(_0x5c59a+_0x2dc12a)*(-0x1eca+0x3fe+0x1ace)),_0xe7ce06[_0x454a79(0x603)](_0x5c7402+_0x5c59a,_0x2dc12a),_0x5c59a,_0x5c59a);var _0x480551=_0xe7ce06[_0x454a79(0x535)](_0x103d1a,_0x2dc12a)/(-0x1e5e+-0x1e1b+0x4a7*0xd),_0xeb1dc8=_0xe7ce06[_0x454a79(0x4b8)](_0x5c7402,_0xe7ce06[_0x454a79(0x6a3)](_0x5c59a+_0x2dc12a,-0x59*0x35+-0x1bb*-0x6+-0x3*-0x2af));_0xe7ce06[_0x454a79(0x194)](_0x320b2f,_0xe7ce06['MfdZg'],_0xe7ce06[_0x454a79(0x455)],_0x35ab9c,_0xeb1dc8,_0x480551,_0x5c59a,_0x1845fb['ksCps']?_0xe7ce06['yUZch'](_0xe7ce06['xkkoe'](_0xed4c64,-0x15b6*-0x1+-0x1*-0x1a07+0xbc*-0x41),'\x20CPS'):''),_0x320b2f('RMB','mouse'+'3',_0x35ab9c+_0x480551+_0x2dc12a,_0xeb1dc8,_0x480551,_0x5c59a,_0x1bddea[_0x454a79(0x1d5)]?_0xbb173f(0x46a*0x2+0x49*0x1a+-0x103b)+_0x454a79(0x69e):''),_0x320b2f('',_0xe7ce06[_0x454a79(0x637)],_0x35ab9c,_0xeb1dc8+_0x5c59a+_0x2dc12a,_0x103d1a,_0x5c59a*(0x1*0x17c7+0x16cd+-0x43c*0xb+0.45));}else _0xca275e(_0x4dcd98,0x2b*0x1f+0x5f6+-0xaa3,_0x454a79(0x19b),-0x1cc0+0x19c3+0x2fd*0x1),_0xca275e(_0x4dcd98,0x1*0x463+0x1d4*-0xb+-0x1021*-0x1,_0x454a79(0x19b),-0x783*-0x4+0x20e8+-0x3ef3*0x1);}if(_0x1510f2['infAm'+_0x454a79(0x6a2)])_0xe7ce06[_0x454a79(0x226)](_0xca275e,_0x4dcd98,-0x2*0x16a+-0x1df*-0xd+0x305*-0x7,'i32',0x1c7d+0x9dc*0x2+-0x2c4e);_0x1510f2['rapid'+_0x454a79(0x28b)]&&(_0xe7ce06[_0x454a79(0x463)](_0x198ea6,_0x4dcd98,-0xbae*0x1+0x130d*-0x1+-0x9d*-0x33,_0xe7ce06[_0x454a79(0x33e)],-0x62f*-0x1+0x1*-0xabb+0x48c+0.1),_0xca275e(_0x4dcd98,0x4d1*-0x3+0x2689+-0x17b6,_0xe7ce06['WjJgJ'],-0x1*0x726+-0x214d+0x2873+0.1));}}catch(_0x585dae){}}},-0x5f*-0xc+0x2*-0xe7d+-0x194e*-0x1),setInterval(()=>{var _0x47bbac=_0x762961;_0x5dfee3['gameL'+_0x47bbac(0x442)]=!!window['unity'+'Insta'+_0x47bbac(0x5dc)];try{var _0x56c932=-0x20c*0x1+0x1*0xeb1+-0x53*0x27;for(var _0x2713a7 in _0x478d7f){if(_0x478d7f[_0x2713a7]&&_0x478d7f[_0x2713a7]['appli'+'ed'])_0x56c932++;}_0x5dfee3[_0x47bbac(0x4c3)+'Ok']=_0x56c932;}catch(_0x3b0aa6){}},-0x1778+-0xb36*0x1+0x2696);var _0x30f855=new Set(),_0x4af20b={0x1:[],0x3:[]},_0x237c4b=![];function _0x6a7e96(_0x4ed66a){var _0x19fee4=_0x762961;_0x30f855[_0x19fee4(0x5fc)](_0x4ed66a['code']);}function _0x2c3715(_0x335470){var _0x339b75=_0x762961;_0x30f855['delet'+'e'](_0x335470[_0x339b75(0x417)]);}function _0x543031(_0x596fac){var _0x1c6286=_0x762961;if(_0x596fac[_0x1c6286(0x32f)+_0x1c6286(0x4f3)])return;_0x30f855[_0x1c6286(0x5fc)](_0x1c6286(0x1d6)+(_0x596fac[_0x1c6286(0x342)+'n']+(-0xfa0+-0x1eb4+-0x199*-0x1d)));var _0x13725d=_0x4af20b[_0x596fac[_0x1c6286(0x342)+'n']+(0x115a*0x2+-0x9c1*-0x1+0x472*-0xa)];if(_0x13725d){if(_0xe7ce06[_0x1c6286(0x521)]('okTuh','okTuh')){_0x13725d[_0x1c6286(0x39a)](performance[_0x1c6286(0x524)]());if(_0x13725d[_0x1c6286(0x389)+'h']>-0x1*-0x16ea+-0x8*-0x329+-0x45e*0xb)_0x13725d['shift']();}else _0x1a719d=_0x377a91[_0x1c6286(0x560)](_0x338cf6[_0x1c6286(0x26b)+'em'](_0x1c6286(0x339)+'a.kou'+'r.ui.'+'v1')||'{}');}}function _0x1a6388(_0x53e044){var _0x203d5f=_0x762961,_0x342cb3={'usErA':function(_0x577342){var _0x162bd6=_0x1c18;return _0xe7ce06[_0x162bd6(0x640)](_0x577342);}};if(_0xe7ce06[_0x203d5f(0x1bf)](_0x203d5f(0x251),'iPcHc'))_0x10f316['speed'+'Pct']=_0x591b80,_0x342cb3[_0x203d5f(0x365)](_0x5881e0);else{if(!_0x53e044['__sak'+_0x203d5f(0x4f3)])_0x30f855[_0x203d5f(0x63e)+'e'](_0xe7ce06['nZBmB']+_0xe7ce06['wvzvH'](_0x53e044[_0x203d5f(0x342)+'n'],-0xe8*-0x18+-0xc77+-0x948));}}function _0x299c1f(){_0x30f855['clear']();}function _0x51f36d(){var _0x143c50=_0x762961;if('lJOjg'===_0xe7ce06[_0x143c50(0x453)]){var _0x41d3af=(_0x143c50(0x242)+_0x143c50(0x15f)+_0x143c50(0x3f1))[_0x143c50(0x552)]('|'),_0x23211a=0xd*-0x1a7+-0x4b*0x15+0x1ba2;while(!![]){switch(_0x41d3af[_0x23211a++]){case'0':_0x237c4b=!![];continue;case'1':window['addEv'+_0x143c50(0x450)+_0x143c50(0x285)+'r'](_0xe7ce06['sfRfy'],_0x6a7e96,!![]);continue;case'2':window['addEv'+_0x143c50(0x450)+'stene'+'r'](_0xe7ce06['qFyXG'],_0x2c3715,!![]);continue;case'3':window[_0x143c50(0x21d)+'entLi'+'stene'+'r'](_0x143c50(0x1d6)+_0x143c50(0x1aa),_0x543031,!![]);continue;case'4':window[_0x143c50(0x21d)+_0x143c50(0x450)+_0x143c50(0x285)+'r'](_0x143c50(0x1d6)+'up',_0x1a6388,!![]);continue;case'5':if(_0x237c4b)return;continue;case'6':window[_0x143c50(0x21d)+_0x143c50(0x450)+_0x143c50(0x285)+'r'](_0xe7ce06[_0x143c50(0x157)],_0x299c1f);continue;}break;}}else{var _0x380dc7=_0x2d31d6['creat'+'eElem'+'ent'](_0xe7ce06['UYrBP']);_0x380dc7[_0x143c50(0x155)+_0x143c50(0x523)]=_0x143c50(0x52a)+'l';var _0x1c624d=_0x5e376e['creat'+_0x143c50(0x693)+_0x143c50(0x10e)](_0xe7ce06['qwJBk']);_0x1c624d['class'+_0x143c50(0x523)]=_0x143c50(0x440)+_0x143c50(0x388),_0x1c624d[_0x143c50(0x46c)+_0x143c50(0x2a4)+'t']=_0x59afa6;if(_0x2b1155){var _0x3e19a2=_0x55b442[_0x143c50(0x209)+'eElem'+_0x143c50(0x10e)](_0x143c50(0x341));_0x3e19a2['class'+_0x143c50(0x523)]=_0x143c50(0x596)+'nt',_0x3e19a2[_0x143c50(0x46c)+'onten'+'t']=_0x1d6c73,_0x1c624d[_0x143c50(0x644)+'dChil'+'d'](_0x3e19a2);}return _0x380dc7[_0x143c50(0x644)+'d'](_0x1c624d,_0x16caf9),_0x380dc7;}}function _0xce896c(_0xedb886){var _0x56d983=_0x762961,_0x58b6bd=_0x4af20b[_0xedb886]||[],_0x53b5ab=performance[_0x56d983(0x524)]();while(_0x58b6bd[_0x56d983(0x389)+'h']&&_0xe7ce06['hlIFS'](_0x53b5ab-_0x58b6bd[0x1a93*0x1+0x1768+0x31fb*-0x1],0x19d8+-0x1faa+-0x3*-0x33e))_0x58b6bd[_0x56d983(0x494)]();return _0x58b6bd[_0x56d983(0x389)+'h'];}function _0x5cd2e1(_0x35f81e){var _0x4b17ee=_0x762961;if(document['body']&&(document['ready'+_0x4b17ee(0x366)]===_0x4b17ee(0x413)+'activ'+'e'||document[_0x4b17ee(0x221)+'State']==='compl'+_0x4b17ee(0x5be)))_0xe7ce06['bHlEx'](_0x35f81e);else document[_0x4b17ee(0x21d)+_0x4b17ee(0x450)+_0x4b17ee(0x285)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x35f81e,{'once':!![]});}_0x5cd2e1(()=>{var _0x5ca9e2=_0x762961,_0x1eb033={'SxfpS':function(_0x18aaf7,_0x3a032e){return _0x18aaf7>_0x3a032e;},'PmWiG':'gliFn','WlnXR':function(_0x3357e3,_0x58e0c6){return _0xe7ce06['HONHq'](_0x3357e3,_0x58e0c6);},'XXORp':function(_0x4a4240,_0x43c122){var _0x3d82f8=_0x1c18;return _0xe7ce06[_0x3d82f8(0x4db)](_0x4a4240,_0x43c122);},'KzuTD':function(_0x29a9a8,_0x597a34){return _0x29a9a8/_0x597a34;},'itqsJ':_0x5ca9e2(0x64f)+'9d','rERiS':function(_0x4e7bfd,_0x530f82){var _0x58d562=_0x5ca9e2;return _0xe7ce06[_0x58d562(0x50a)](_0x4e7bfd,_0x530f82);},'fZnve':function(_0x116e5c,_0x11d2e5){var _0x48c757=_0x5ca9e2;return _0xe7ce06[_0x48c757(0x4b8)](_0x116e5c,_0x11d2e5);},'ApSub':_0xe7ce06['sKkmo'],'qaIJA':_0xe7ce06[_0x5ca9e2(0x6b1)],'NudeJ':_0xe7ce06[_0x5ca9e2(0x618)],'Kxpya':function(_0x1a30b2,_0x2ef021){var _0x1002a2=_0x5ca9e2;return _0xe7ce06[_0x1002a2(0x236)](_0x1a30b2,_0x2ef021);},'AIibU':_0x5ca9e2(0x3b9)+'h','wNMrf':'butto'+'n','KCjuB':function(_0x2a0460,_0x3797f4){var _0x194aff=_0x5ca9e2;return _0xe7ce06[_0x194aff(0x621)](_0x2a0460,_0x3797f4);},'wJNof':function(_0x3f7c0e,_0x38f239){return _0x3f7c0e/_0x38f239;},'KjCbQ':function(_0x1bb8ec,_0x588779){return _0x1bb8ec!==_0x588779;},'ujtbF':_0xe7ce06['oJHNX'],'uxbCO':function(_0x27a249,_0x4a2576){return _0xe7ce06['MOIlz'](_0x27a249,_0x4a2576);},'QZXOE':_0xe7ce06[_0x5ca9e2(0x33a)],'rfXOK':'nnvcy','iEauV':_0xe7ce06[_0x5ca9e2(0x279)],'uiSlK':_0x5ca9e2(0x648),'MgLWB':_0xe7ce06[_0x5ca9e2(0x1f8)],'PFFhP':_0x5ca9e2(0x5f0),'UHprV':_0xe7ce06['zwRsN'],'CWMWp':_0x5ca9e2(0x45c),'IlmTk':_0x5ca9e2(0x5a6)+'rd-he'+'ad','EaYRk':_0x5ca9e2(0x5a6)+'rd-ti'+'tle','PPiTZ':_0xe7ce06['rOLMm'],'zxYRK':_0x5ca9e2(0x638)+_0x5ca9e2(0x3aa)+_0x5ca9e2(0x167),'Ptewn':_0xe7ce06[_0x5ca9e2(0x2d8)],'hJBhU':_0xe7ce06['cfHvw'],'hCRvx':_0x5ca9e2(0x585)+'s','eHxet':_0x5ca9e2(0x687)+_0x5ca9e2(0x573)+_0x5ca9e2(0x111)+_0x5ca9e2(0x3d3)+_0x5ca9e2(0x23b),'GfWCK':_0xe7ce06['vMWwk'],'xRhJZ':_0x5ca9e2(0x172)+'MISSI'+_0x5ca9e2(0x6b0)+'overl'+_0x5ca9e2(0x114)+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x5ca9e2(0x3f6)+'ipt)','IrlXd':_0xe7ce06[_0x5ca9e2(0x58a)],'NFkmX':_0xe7ce06[_0x5ca9e2(0x5a7)],'pmkra':function(_0x3ec6bb){return _0xe7ce06['RRmbQ'](_0x3ec6bb);},'wVaPf':function(_0x201a3e,_0x2f56d8,_0x5e4bc2){return _0x201a3e(_0x2f56d8,_0x5e4bc2);},'gCwVj':_0xe7ce06[_0x5ca9e2(0x6ad)],'NRODO':function(_0x2eb859){return _0x2eb859();},'iiaeA':function(_0xe8af09,_0x3815cf,_0x1e628f){var _0x498533=_0x5ca9e2;return _0xe7ce06[_0x498533(0x55f)](_0xe8af09,_0x3815cf,_0x1e628f);},'qdRpo':function(_0x122cb7){var _0x5567c1=_0x5ca9e2;return _0xe7ce06[_0x5567c1(0x475)](_0x122cb7);},'mTHMI':'zPjRM','NJcno':_0xe7ce06['NPMUf'],'knEkW':'oaqpc','OGnuZ':_0xe7ce06['yUvgQ'],'AntGq':function(_0x446c9b){return _0x446c9b();},'YBmXm':'UWMK','UxudF':_0x5ca9e2(0x5a9)+_0x5ca9e2(0x190)+_0x5ca9e2(0x655)+'rlay\x20'+_0x5ca9e2(0x5d3)+_0x5ca9e2(0x348)+_0x5ca9e2(0x1d2)+'(relo'+_0x5ca9e2(0x2b8)+_0x5ca9e2(0x130)+')','BLaZx':function(_0x2eacef,_0x29eeed){return _0x2eacef+_0x29eeed;},'lkMza':function(_0x45e5c8,_0x140fb9){return _0x45e5c8+_0x140fb9;},'pqWCb':'\x20|\x20sh'+_0x5ca9e2(0x434)+'\x20','FOOhL':_0xe7ce06['doMlM'],'hYeKy':_0xe7ce06[_0x5ca9e2(0x40b)],'MNkLg':'UWMK\x20'+_0x5ca9e2(0x47a)+_0x5ca9e2(0x609)+'overl'+_0x5ca9e2(0x114)+_0x5ca9e2(0x6a0)+_0x5ca9e2(0x179)+_0x5ca9e2(0x1ea)+_0x5ca9e2(0x4ac)+_0x5ca9e2(0x3f6)+_0x5ca9e2(0x1fd),'AVxBf':_0xe7ce06[_0x5ca9e2(0x210)]};_0x1510f2['adblo'+'ck']&&setInterval(()=>{var _0x4facdc=_0x5ca9e2,_0x271b51={'CzWcn':function(_0x510fe7){return _0x510fe7();}};try{for(var _0x1bdc63 of[_0x4facdc(0x141)+_0x4facdc(0x559)+_0x4facdc(0x420)+_0x4facdc(0x208)+'nt',_0xe7ce06[_0x4facdc(0x1c4)],_0x4facdc(0x141)+'io_30'+_0x4facdc(0x2be)+_0x4facdc(0x208)+'nt',_0x4facdc(0x2f1)+_0x4facdc(0x427)+'-banr'+'s']){if(_0xe7ce06['cQlfS']('VNHEj',_0x4facdc(0x19d))){var _0x591ec1=document['getEl'+'ement'+_0x4facdc(0x1d1)](_0x1bdc63);if(_0x591ec1&&_0xe7ce06[_0x4facdc(0x48a)](_0x1bdc63,_0x4facdc(0x2f1)+'creen'+_0x4facdc(0x3e5)+'s')){var _0x528322=_0x591ec1['child'+'ren'];for(var _0x19c260=-0x2101+0x24c+0x1*0x1eb5;_0xe7ce06['ITgCx'](_0x19c260,_0x528322[_0x4facdc(0x389)+'h']);_0x19c260++){if(_0x528322[_0x19c260]['id']&&_0x528322[_0x19c260]['id']['index'+'Of']('kour-'+'io_')===-0x43*0x53+-0x1a03+-0xbef*-0x4)_0x528322[_0x19c260]['style']['displ'+'ay']='none';}}else{if(_0x591ec1)_0x591ec1[_0x4facdc(0x60e)]['displ'+'ay']=_0x4facdc(0x648);}}else _0x4da82a[_0x4facdc(0x467)+'aptur'+'e']=_0x55dfba,_0x271b51['CzWcn'](_0x26b1f6);}}catch(_0x4efb14){}},-0xa14+0x11*-0x1e5+0x3219);var _0x103398=document[_0x5ca9e2(0x209)+'eElem'+_0x5ca9e2(0x10e)](_0x5ca9e2(0x650)+'s');_0x103398[_0x5ca9e2(0x60e)][_0x5ca9e2(0x5d7)+'xt']=_0xe7ce06[_0x5ca9e2(0x4ff)];var _0x540f64=_0x103398[_0x5ca9e2(0x159)+_0x5ca9e2(0x213)]('2d');function _0x29c985(){var _0x218b58=_0x5ca9e2;try{var _0x2e98a6=document[_0x218b58(0x2f1)+'creen'+'Eleme'+'nt'],_0x33b994=_0x2e98a6&&_0x2e98a6[_0x218b58(0x4d4)+'me']!==_0x218b58(0x57f)+'S'?_0x2e98a6:document[_0x218b58(0x39b)]||document[_0x218b58(0x668)+_0x218b58(0x642)+_0x218b58(0x622)];if(_0x103398[_0x218b58(0x48b)+'tNode']!==_0x33b994)_0x33b994[_0x218b58(0x644)+_0x218b58(0x201)+'d'](_0x103398);}catch(_0x136448){try{if('IMtoy'===_0x1eb033['PmWiG']){if(_0xa724b7['__sak'+_0x218b58(0x4f3)])return;_0x2d8f97[_0x218b58(0x5fc)](_0x218b58(0x1d6)+(_0x450146['butto'+'n']+(-0xece+0x1ef7+-0x1028)));var _0x33be23=_0x21198a[_0x55d8a0['butto'+'n']+(0x13*-0x132+0x193d+-0x286)];if(_0x33be23){_0x33be23[_0x218b58(0x39a)](_0x4fd5d4['now']());if(_0x1eb033[_0x218b58(0x439)](_0x33be23[_0x218b58(0x389)+'h'],0xdec+-0x2c*0xd+0x9*-0x148))_0x33be23['shift']();}}else document['body']['appen'+_0x218b58(0x201)+'d'](_0x103398);}catch(_0x47f071){}}}var _0x1613fb={'w':0x0,'h':0x0,'dpr':0x0};function _0x567362(){var _0x47950b=_0x5ca9e2,_0x429189=('2|4|3'+'|8|0|'+_0x47950b(0x30f)+'|6')[_0x47950b(0x552)]('|'),_0xe9f826=-0x1757+0x829*-0x2+-0x39b*-0xb;while(!![]){switch(_0x429189[_0xe9f826++]){case'0':_0x1613fb['h']=_0x3dabb8;continue;case'1':_0x103398['width']=Math[_0x47950b(0x661)](_0x1eb033[_0x47950b(0x108)](_0x20a4e8,_0x5accb5));continue;case'2':var _0x5accb5=window[_0x47950b(0x24f)+_0x47950b(0x253)+_0x47950b(0x30b)+'o']||-0x781+-0x1*0x243a+0x2bbc;continue;case'3':if(_0x20a4e8===_0x1613fb['w']&&_0x1eb033['XXORp'](_0x3dabb8,_0x1613fb['h'])&&_0x5accb5===_0x1613fb[_0x47950b(0x6a8)])return;continue;case'4':var _0x20a4e8=window[_0x47950b(0x23e)+_0x47950b(0x532)],_0x3dabb8=window[_0x47950b(0x23e)+_0x47950b(0x49a)+'t'];continue;case'5':_0x1613fb['dpr']=_0x5accb5;continue;case'6':_0x540f64[_0x47950b(0x5e6)+'ansfo'+'rm'](_0x5accb5,0x1*0x9c1+0x15d8+-0x1f99,-0xc*0x97+0x2*-0xc97+0x2042,_0x5accb5,0x3bb+0x2cc*0xd+-0x2817*0x1,-0xda4+-0x1556+0x22fa*0x1);continue;case'7':_0x103398[_0x47950b(0x1a6)+'t']=Math[_0x47950b(0x661)](_0x1eb033['WlnXR'](_0x3dabb8,_0x5accb5));continue;case'8':_0x1613fb['w']=_0x20a4e8;continue;}break;}}var _0x27982f=-0x1*-0x1b9+-0x178c+-0x97*-0x25,_0x537eba=performance[_0x5ca9e2(0x524)](),_0x53d017=-0x251e+-0x193*-0xe+0xf14;function _0x2b23cc(_0x29fe84){var _0x3f6850=_0x5ca9e2,_0x2dd4ae={'oxomP':'kour-'+'io_30'+'0x250'+'-pare'+'nt','yctIl':'kour-'+_0x3f6850(0x4d9)+_0x3f6850(0x497)+'paren'+'t','MKwTk':_0x3f6850(0x141)+_0x3f6850(0x559)+'0x600'+_0x3f6850(0x208)+'nt','Mymns':_0x3f6850(0x2f1)+_0x3f6850(0x427)+_0x3f6850(0x3e5)+'s','SeeJN':_0x3f6850(0x41f)+_0x3f6850(0x171)+_0x3f6850(0x244)+'7)','ayoxE':_0xe7ce06['cWBrW'],'UYONi':'rgba('+_0x3f6850(0x430)+_0x3f6850(0x290)+_0x3f6850(0x10b)+')','fkUam':_0xe7ce06[_0x3f6850(0x1c3)],'aEaiK':function(_0x1d951b,_0x2a9e21){return _0x1d951b+_0x2a9e21;},'FBKZH':_0xe7ce06[_0x3f6850(0x18d)],'GZhem':function(_0x52c872,_0xbe6618){return _0x52c872*_0xbe6618;},'KTIvC':_0xe7ce06[_0x3f6850(0x34a)],'PkPez':function(_0x1e2620,_0x2634a2){return _0xe7ce06['fBjSD'](_0x1e2620,_0x2634a2);},'jXaMM':function(_0x3f7b25,_0x547dbd){return _0x3f7b25+_0x547dbd;}},_0x48ca43=Number(_0x1510f2[_0x3f6850(0x549)+'le'])||0x42c+0x2242+-0x3*0xccf,_0x381158=(0xa4c+-0x9*0x26b+0xb99*0x1)*_0x48ca43,_0x2d6a82=(0x1048+-0x4*0x340+-0x1a2*0x2)*_0x48ca43,_0x58e91d=_0xe7ce06[_0x3f6850(0x2fd)](_0x381158,0x1*0x1dcb+-0xe15+0x1*-0xfb3)+_0x2d6a82*(-0x2107*-0x1+-0x1*0xa58+0x5*-0x489),_0x3a7e1b=_0xe7ce06[_0x3f6850(0x1e8)](_0xe7ce06[_0x3f6850(0x6a3)](_0x381158,-0xaad+0xb8a+-0x6d*0x2),_0xe7ce06[_0x3f6850(0x6a3)](_0x2d6a82,-0x274*0x4+0x141a+0x2*-0x524)),_0x9e215d=_0x1510f2['ksPos'],_0x1be67f=_0x9e215d==='br'?_0xe7ce06[_0x3f6850(0x1e3)](_0x29fe84[_0x3f6850(0x1b4)]-(0x19f9+0x8*0x1a7+-0x1b*0x173),_0x58e91d):_0xe7ce06[_0x3f6850(0x4b8)](_0x29fe84[_0x3f6850(0x10f)],0x9b9*0x1+-0x1121*-0x1+-0x1aca),_0x175f84=_0x9e215d==='ml'?_0xe7ce06['jIuFV'](_0xe7ce06['KWCdi'](_0x29fe84['top'],_0x29fe84[_0x3f6850(0x1a6)+'t']/(0x2568*-0x1+0x137d+-0x11ed*-0x1)),_0x3a7e1b/(-0x1700+-0x40b+0x115*0x19)):_0x29fe84[_0x3f6850(0x37f)+'m']-_0x3a7e1b-(_0xe7ce06['pkLlb'](_0x9e215d,'bl')?-0x1d1*-0x7+-0x5cf*0x3+-0xba*-0x7:0x47*-0x41+0x3*0x1f5+-0x1d2*-0x7),_0x2eb834=(_0x183bde,_0x3ede2c,_0x5e46b5,_0x4283d3,_0x56bba5,_0x4d93a5,_0x581b21)=>{var _0x449b69=_0x3f6850,_0x406920=_0x30f855['has'](_0x3ede2c);_0x540f64[_0x449b69(0x53e)](),_0x540f64[_0x449b69(0x2e6)+'Path']();if(_0x540f64[_0x449b69(0x661)+_0x449b69(0x68b)])_0x540f64[_0x449b69(0x661)+_0x449b69(0x68b)](_0x5e46b5,_0x4283d3,_0x56bba5,_0x4d93a5,(0x1d4e+-0x1ab9+-0x28e)*_0x48ca43);else _0x540f64['rect'](_0x5e46b5,_0x4283d3,_0x56bba5,_0x4d93a5);_0x540f64['fillS'+_0x449b69(0x5ee)]=_0x406920?_0x449b69(0x41f)+'255,1'+_0x449b69(0x4a5)+'7,0.8'+'5)':_0x2dd4ae['SeeJN'],_0x540f64[_0x449b69(0x1c7)](),_0x540f64[_0x449b69(0x522)+'idth']=-0x1*0x227a+-0x1*-0x170f+0xb6c,_0x540f64[_0x449b69(0x3dd)+'eStyl'+'e']=_0x406920?_0x39995d:'rgba('+_0x449b69(0x2bb)+_0x449b69(0x4a5)+_0x449b69(0x3ae)+'5)',_0x540f64['strok'+'e']();_0x406920&&(_0x540f64[_0x449b69(0x384)+_0x449b69(0x2d9)+'r']=_0x107f40,_0x540f64['shado'+_0x449b69(0x2ff)]=0x6db+-0x16ac+0x1*0xfdf,_0x540f64[_0x449b69(0x1c7)](),_0x540f64[_0x449b69(0x384)+'wBlur']=-0x1*0x2331+0x4a*-0x6e+0x617*0xb);_0x540f64['fillS'+_0x449b69(0x5ee)]=_0x406920?_0x2dd4ae[_0x449b69(0x178)]:_0x2dd4ae[_0x449b69(0x2c6)],_0x540f64['textA'+_0x449b69(0x49c)]=_0x2dd4ae[_0x449b69(0x1c5)],_0x540f64['textB'+_0x449b69(0x106)+'ne']=_0x449b69(0x409)+'e',_0x540f64['font']=_0x2dd4ae[_0x449b69(0x598)](_0x2dd4ae['FBKZH'],Math['round'](_0x2dd4ae[_0x449b69(0x414)](0x67*-0x52+-0xa44*0x3+0x3fd6,_0x48ca43)))+_0x2dd4ae[_0x449b69(0x1a2)],_0x540f64['fillT'+'ext'](_0x183bde,_0x5e46b5+_0x56bba5/(0x18e4+-0x171*-0x1b+0x3fcd*-0x1),_0x2dd4ae[_0x449b69(0x59f)](_0x4283d3+_0x4d93a5/(0x1*0xc1f+0x1*0x193a+0xb*-0x365),_0x581b21?(-0xe1e+-0x5ce+-0x5*-0x3fd)*_0x48ca43:-0x1214+-0x74*-0x2+0x1c*0x9d));if(_0x581b21){if('wOnws'!=='EQxzh')_0x540f64['font']=_0x2dd4ae['aEaiK']('600\x20'+Math['round']((-0x17d5+0x69b+0x1143)*_0x48ca43),_0x2dd4ae[_0x449b69(0x1a2)]),_0x540f64[_0x449b69(0x44a)+_0x449b69(0x5ee)]=_0x406920?'#fff':_0x449b69(0x41f)+'255,2'+'35,24'+_0x449b69(0x278)+'5)',_0x540f64[_0x449b69(0x358)+'ext'](_0x581b21,_0x2dd4ae[_0x449b69(0x20f)](_0x5e46b5,_0x56bba5/(-0x101c+0x19a7+-0x989)),_0x2dd4ae['jXaMM'](_0x4283d3,_0x4d93a5/(-0x14b*0x9+-0x25af+-0x1c*-0x1c3))+(0x134*-0xd+-0x1058+-0x2004*-0x1)*_0x48ca43);else for(var _0x21e26d of[_0x2dd4ae[_0x449b69(0x1af)],_0x2dd4ae[_0x449b69(0x444)],_0x2dd4ae[_0x449b69(0x12e)],_0x2dd4ae[_0x449b69(0x385)]]){var _0x5ba2b8=_0x1186e2[_0x449b69(0x31f)+_0x449b69(0x622)+_0x449b69(0x1d1)](_0x21e26d);if(_0x5ba2b8&&_0x21e26d==='fulls'+_0x449b69(0x427)+_0x449b69(0x3e5)+'s'){var _0x11a94a=_0x5ba2b8['child'+_0x449b69(0x57b)];for(var _0x3ca5c2=-0x18b*-0x7+0x17*-0x11b+0x20*0x75;_0x3ca5c2<_0x11a94a['lengt'+'h'];_0x3ca5c2++){if(_0x11a94a[_0x3ca5c2]['id']&&_0x11a94a[_0x3ca5c2]['id'][_0x449b69(0x2fe)+'Of']('kour-'+_0x449b69(0x260))===-0x1ac7+-0x13*0xf9+0x16a1*0x2)_0x11a94a[_0x3ca5c2][_0x449b69(0x60e)]['displ'+'ay']='none';}}else{if(_0x5ba2b8)_0x5ba2b8['style'][_0x449b69(0x17a)+'ay']='none';}}}_0x540f64[_0x449b69(0x599)+'re']();};_0x2eb834('W',_0x3f6850(0x4c6),_0xe7ce06['uDgDz'](_0x1be67f+_0x381158,_0x2d6a82),_0x175f84,_0x381158,_0x381158),_0x2eb834('A','KeyA',_0x1be67f,_0x175f84+_0x381158+_0x2d6a82,_0x381158,_0x381158),_0x2eb834('S',_0x3f6850(0x32c),_0xe7ce06[_0x3f6850(0x38a)](_0x1be67f+_0x381158,_0x2d6a82),_0xe7ce06['SonQU'](_0xe7ce06['KWCdi'](_0x175f84,_0x381158),_0x2d6a82),_0x381158,_0x381158),_0x2eb834('D','KeyD',_0x1be67f+(_0x381158+_0x2d6a82)*(0x181d*-0x1+0x4f7+-0x2*-0x994),_0x175f84+_0x381158+_0x2d6a82,_0x381158,_0x381158);var _0x369858=_0xe7ce06['vZZIQ'](_0x58e91d,_0x2d6a82)/(-0x1*-0x7f+-0x1d12+-0x1*-0x1c95),_0x588ab5=_0x175f84+_0xe7ce06['PidsR'](_0x381158,_0x2d6a82)*(-0x35*0x1d+-0xf7*-0x22+-0x1acb*0x1);_0xe7ce06['iaAJq'](_0x2eb834,_0xe7ce06[_0x3f6850(0x5eb)],_0xe7ce06[_0x3f6850(0x455)],_0x1be67f,_0x588ab5,_0x369858,_0x381158,_0x1510f2[_0x3f6850(0x1d5)]?_0xe7ce06['jJRvV'](_0xce896c,0xd*-0x287+0xf91+-0x114b*-0x1)+'\x20CPS':''),_0x2eb834(_0xe7ce06[_0x3f6850(0x4de)],_0xe7ce06['GXGiV'],_0x1be67f+_0x369858+_0x2d6a82,_0x588ab5,_0x369858,_0x381158,_0x1510f2['ksCps']?_0xce896c(0x1ef6+0x20cd+-0x3fc0)+'\x20CPS':''),_0xe7ce06[_0x3f6850(0x5fa)](_0x2eb834,'','Space',_0x1be67f,_0xe7ce06['qrelO'](_0x588ab5,_0x381158)+_0x2d6a82,_0x58e91d,_0xe7ce06['nZfle'](_0x381158,-0x26e0+-0x11f*0x9+0x30f7+0.45));}function _0x57b8cf(_0x250025){var _0x56af0d=_0x5ca9e2,_0x2ad7b0=_0x1eb033[_0x56af0d(0x252)](_0x250025[_0x56af0d(0x38b)],-0xaf1*0x1+-0x2*0x102+-0x1*-0xcf7),_0x5ba218=_0x250025['heigh'+'t']/(0x86d+0x2*-0x6b7+-0x1*-0x503),_0x488983=Number(_0x1510f2[_0x56af0d(0x5d0)+'e'])||-0xc2*-0x33+0x6*0x607+0x4acf*-0x1,_0x1bf7f1=/^#[0-9a-f]{6}$/i['test'](_0x1510f2['chCol'+'or'])?_0x1510f2[_0x56af0d(0x2df)+'or']:_0x1eb033['itqsJ'];_0x540f64[_0x56af0d(0x53e)](),_0x540f64[_0x56af0d(0x3dd)+'eStyl'+'e']=_0x1bf7f1,_0x540f64['fillS'+_0x56af0d(0x5ee)]=_0x1bf7f1,_0x540f64[_0x56af0d(0x522)+_0x56af0d(0x67d)]=Math[_0x56af0d(0x3c9)](0xf2a+0x2377+0x360*-0xf+0.5,(-0xd3*-0x13+0x26e9*0x1+0x6d2*-0x8)*_0x488983),_0x540f64[_0x56af0d(0x384)+_0x56af0d(0x2d9)+'r']=_0x1bf7f1,_0x540f64['shado'+_0x56af0d(0x2ff)]=-0x1*0x44b+0x128f+0x71f*-0x2;var _0x39ad0f=_0x1eb033['WlnXR'](-0x5ab+0x8fa*0x4+0x41*-0x77,_0x488983),_0x4948b4=(-0x1*-0x1732+-0x229d+0xb73)*_0x488983;_0x540f64['begin'+'Path'](),_0x540f64['moveT'+'o'](_0x1eb033[_0x56af0d(0x669)](_0x2ad7b0,_0x39ad0f)-_0x4948b4,_0x5ba218),_0x540f64['lineT'+'o'](_0x2ad7b0-_0x39ad0f,_0x5ba218),_0x540f64[_0x56af0d(0x15d)+'o'](_0x2ad7b0+_0x39ad0f,_0x5ba218),_0x540f64[_0x56af0d(0x5b8)+'o'](_0x1eb033['fZnve'](_0x2ad7b0,_0x39ad0f)+_0x4948b4,_0x5ba218),_0x540f64[_0x56af0d(0x15d)+'o'](_0x2ad7b0,_0x5ba218-_0x39ad0f-_0x4948b4),_0x540f64['lineT'+'o'](_0x2ad7b0,_0x1eb033[_0x56af0d(0x669)](_0x5ba218,_0x39ad0f)),_0x540f64[_0x56af0d(0x15d)+'o'](_0x2ad7b0,_0x5ba218+_0x39ad0f),_0x540f64['lineT'+'o'](_0x2ad7b0,_0x5ba218+_0x39ad0f+_0x4948b4),_0x540f64['strok'+'e'](),_0x540f64[_0x56af0d(0x2e6)+'Path'](),_0x540f64[_0x56af0d(0x501)](_0x2ad7b0,_0x5ba218,_0x1eb033['WlnXR'](-0x287*0x5+-0x1a67+0x270b+0.6000000000000001,_0x488983),-0x5d8+-0x2f*0xd3+-0x71*-0x65,Math['PI']*(-0x1*-0x131b+0x142d+-0x2746)),_0x540f64[_0x56af0d(0x1c7)](),_0x540f64['resto'+'re']();}function _0x497719(_0x52b31c){var _0x476245=_0x5ca9e2,_0xd87c05={'gTSQH':function(_0x3bf640,_0x352769){return _0x3bf640!==_0x352769;}};if(_0xe7ce06[_0x476245(0x48a)](_0x476245(0x520),_0x476245(0x60c))){var _0x3ebc23=_0x40174c['fulls'+_0x476245(0x427)+_0x476245(0x129)+'nt'],_0x136937=_0x3ebc23&&_0xd87c05[_0x476245(0x1ef)](_0x3ebc23['tagNa'+'me'],_0x476245(0x57f)+'S')?_0x3ebc23:_0x569ee2[_0x476245(0x39b)]||_0x5b3543['docum'+_0x476245(0x642)+'ement'];if(_0x1e9b47['paren'+_0x476245(0x63f)]!==_0x136937)_0x136937['appen'+_0x476245(0x201)+'d'](_0x13b597);}else{_0x540f64[_0x476245(0x53e)](),_0x540f64[_0x476245(0x14c)]=_0xe7ce06[_0x476245(0x5a5)],_0x540f64['textA'+_0x476245(0x49c)]=_0xe7ce06[_0x476245(0x1bb)],_0x540f64[_0x476245(0x3a7)+_0x476245(0x106)+'ne']='top';var _0x534f2c=0x47*-0x77+-0x1*-0x419+-0x1*-0x1d14,_0x373fdd=0x14*0x178+-0xfce+0x6c3*-0x2,_0x30c104=(_0x2a4ac6,_0xdb1c94)=>{var _0x26923d=_0x476245;_0x540f64[_0x26923d(0x44a)+'tyle']=_0xdb1c94||_0x1eb033[_0x26923d(0x1e0)],_0x540f64[_0x26923d(0x358)+'ext'](_0x2a4ac6,_0x373fdd,_0x534f2c),_0x534f2c+=0x457*-0x5+0x22e4+0x1*-0xd21;};_0xe7ce06['znsPb'](_0x30c104,_0xe7ce06[_0x476245(0x502)],_0x476245(0x64f)+'9d');if(_0x1510f2['fps'])_0x30c104(_0xe7ce06[_0x476245(0x147)](_0x53d017,_0x476245(0x508)));if(!_0x5dfee3[_0x476245(0x5e5)+'oaded'])_0x30c104(_0xe7ce06[_0x476245(0x52e)],_0xe7ce06[_0x476245(0x317)]);_0x540f64['resto'+'re']();}}function _0x2d4b02(){var _0x26fd48=_0x5ca9e2;requestAnimationFrame(_0x2d4b02),_0x27982f++;var _0x5671ed=performance[_0x26fd48(0x524)]();_0x5671ed-_0x537eba>=-0x147a*0x1+-0xd0f+-0x4f*-0x73&&(_0xe7ce06[_0x26fd48(0x151)]!=='viQwk'?(_0x52d2e7['rapid'+'Exp']=_0xf07ae8,_0x3aaad4()):(_0x53d017=Math['round'](_0x27982f*(0x3*0x4bf+-0x187a+0xe25)/_0xe7ce06[_0x26fd48(0x325)](_0x5671ed,_0x537eba)),_0x27982f=-0xb67*-0x1+0x108+-0xc6f,_0x537eba=_0x5671ed));_0x567362(),_0xe7ce06['cKxXf'](_0x29c985),_0x540f64['clear'+_0x26fd48(0x68b)](0x871+-0x1*0x270e+0x1e9d,0x6*-0x53+-0x18a*0x18+0x3*0xcf6,_0x1613fb['w'],_0x1613fb['h']);var _0x4f9d3d={'left':0x0,'top':0x0,'right':_0x1613fb['w'],'bottom':_0x1613fb['h'],'width':_0x1613fb['w'],'height':_0x1613fb['h']};if(_0x1510f2[_0x26fd48(0x620)+'hair'])_0x57b8cf(_0x4f9d3d);if(_0x1510f2[_0x26fd48(0x319)+_0x26fd48(0x3ab)])_0x2b23cc(_0x4f9d3d);_0x497719(_0x4f9d3d);}var _0x4896d8=document['creat'+_0x5ca9e2(0x693)+'ent'](_0x5ca9e2(0x170));_0x4896d8['id']=_0xe7ce06[_0x5ca9e2(0x564)],_0x4896d8[_0x5ca9e2(0x60e)]['cssTe'+'xt']=_0xe7ce06[_0x5ca9e2(0x60d)];var _0x3bc446=_0x4896d8[_0x5ca9e2(0x4e0)+_0x5ca9e2(0x4b4)+'ow']({'mode':_0xe7ce06[_0x5ca9e2(0x396)]});(document[_0x5ca9e2(0x39b)]||document['docum'+_0x5ca9e2(0x642)+_0x5ca9e2(0x622)])['appen'+_0x5ca9e2(0x201)+'d'](_0x4896d8);var _0x528ab6=![],_0x436ed3={};try{_0x436ed3=JSON['parse'](localStorage[_0x5ca9e2(0x26b)+'em'](_0xe7ce06[_0x5ca9e2(0x3ff)])||'{}');}catch(_0x4ffb1d){}function _0x2c6d79(){var _0x21c030=_0x5ca9e2,_0x15160d={'yGVKp':function(_0x2f4f3a){return _0x2f4f3a();}};try{_0x21c030(0x5b4)!==_0x1eb033['qaIJA']?(_0x4ecb60[_0x21c030(0x66f)+'ropag'+_0x21c030(0x4dc)](),_0x15160d[_0x21c030(0x526)](_0xe7224d)):localStorage[_0x21c030(0x52b)+'em']('sakur'+_0x21c030(0x4a2)+'r.ui.'+'v1',JSON['strin'+_0x21c030(0x386)](_0x436ed3));}catch(_0x124183){}}function _0x386bf3(_0x5e5989,_0x546940){var _0x3317ab=_0x5ca9e2,_0x368c2c=('3|5|0'+'|1|4|'+'6|2')[_0x3317ab(0x552)]('|'),_0x13048f=0x1986+-0x1424+-0x562;while(!![]){switch(_0x368c2c[_0x13048f++]){case'0':_0x5f24f1[_0x3317ab(0x155)+_0x3317ab(0x523)]=_0x3317ab(0x5f9)+_0x3317ab(0x3a4);continue;case'1':_0x5f24f1['setAt'+'tribu'+'te']('role',_0x1eb033[_0x3317ab(0x2af)]);continue;case'2':return _0x5f24f1;case'3':var _0x5f24f1=document['creat'+'eElem'+'ent']('butto'+'n');continue;case'4':_0x5f24f1[_0x3317ab(0x3f3)+'tribu'+'te'](_0x3317ab(0x505)+_0x3317ab(0xfc)+'ed',String(!!_0x5e5989));continue;case'5':_0x5f24f1[_0x3317ab(0x57d)]=_0x1eb033[_0x3317ab(0x234)];continue;case'6':_0x5f24f1[_0x3317ab(0x304)+'ck']=_0xd7128d=>{var _0x4f713a=_0x3317ab;_0xd7128d[_0x4f713a(0x66f)+_0x4f713a(0x187)+_0x4f713a(0x4dc)]();var _0x30b069=_0x5f24f1['getAt'+'tribu'+'te'](_0x4f713a(0x505)+'check'+'ed')!==_0x1eb033['NudeJ'];_0x5f24f1[_0x4f713a(0x3f3)+'tribu'+'te'](_0x4f713a(0x505)+_0x4f713a(0xfc)+'ed',_0x1eb033['Kxpya'](String,_0x30b069)),_0x546940(_0x30b069);};continue;}break;}}function _0x3d85be(_0x30a987,_0x17074f,_0x44ac99,_0x3af041,_0x2c18a7){var _0x3174d8=_0x5ca9e2,_0x3f8b43={'iceMI':_0xe7ce06['sZFii'],'gnzNf':_0x3174d8(0x63c),'zzyVY':_0xe7ce06[_0x3174d8(0x192)],'vZJdN':_0xe7ce06[_0x3174d8(0x66d)],'eBiLn':function(_0xa90546,_0x5791ac,_0x2946f9,_0x1ccfa9,_0x2fecc6,_0x515d5a,_0x4dac26,_0x1f9316){return _0xe7ce06['NrdFC'](_0xa90546,_0x5791ac,_0x2946f9,_0x1ccfa9,_0x2fecc6,_0x515d5a,_0x4dac26,_0x1f9316);},'RVeAi':'capSh'+_0x3174d8(0x434),'QRmcj':_0x3174d8(0xf8)+_0x3174d8(0x1da),'aDcfZ':_0xe7ce06['FbUGy'],'nqcos':_0x3174d8(0x1c0)+'th','rWNha':_0xe7ce06['GHbCh']},_0x769bbb=document[_0x3174d8(0x209)+_0x3174d8(0x693)+'ent'](_0x3174d8(0x170));_0x769bbb[_0x3174d8(0x155)+_0x3174d8(0x523)]='sk-ra'+'nge';var _0x344fb7=document[_0x3174d8(0x209)+_0x3174d8(0x693)+_0x3174d8(0x10e)]('input');_0x344fb7[_0x3174d8(0x57d)]=_0xe7ce06[_0x3174d8(0x2aa)],_0x344fb7['class'+'Name']=_0xe7ce06['xhZmF'],_0x344fb7[_0x3174d8(0x20a)]=_0x17074f,_0x344fb7['max']=_0x44ac99,_0x344fb7[_0x3174d8(0x372)]=_0x3af041,_0x344fb7[_0x3174d8(0x1a0)]=_0x30a987;var _0x2dd2b6=document[_0x3174d8(0x209)+_0x3174d8(0x693)+'ent'](_0x3174d8(0x5f0));_0x2dd2b6['class'+'Name']=_0x3174d8(0x512)+'l',_0x2dd2b6['textC'+_0x3174d8(0x2a4)+'t']=String(_0x30a987);var _0x3a2557=()=>{var _0x4d9976=_0x3174d8;_0x2dd2b6[_0x4d9976(0x46c)+_0x4d9976(0x2a4)+'t']=String(_0x344fb7[_0x4d9976(0x1a0)]),_0x769bbb[_0x4d9976(0x60e)][_0x4d9976(0x185)+_0x4d9976(0x336)+'y']('--p',_0x1eb033['fZnve'](_0x1eb033[_0x4d9976(0x2f8)](_0x1eb033['wJNof'](_0x344fb7[_0x4d9976(0x1a0)]-_0x17074f,_0x44ac99-_0x17074f),0x14a1+-0xc31*0x1+0x67*-0x14),'%'));};return _0x344fb7['oninp'+'ut']=()=>{var _0x326ea7=_0x3174d8,_0x885fd1={'EfbVE':function(_0x38d2f2,_0x884f7a,_0x868cde,_0x231e8d,_0x140449){return _0x38d2f2(_0x884f7a,_0x868cde,_0x231e8d,_0x140449);}};if(_0x1eb033['KjCbQ'](_0x1eb033[_0x326ea7(0x3c3)],_0x1eb033['ujtbF'])){var _0x4573ab={'eJEIV':function(_0x27b536,_0x49d4d2,_0x4a1dea,_0x59048f,_0x5ba425){return _0x27b536(_0x49d4d2,_0x4a1dea,_0x59048f,_0x5ba425);}};if(_0xd0d2dc['Unity'+'WebMo'+_0x326ea7(0x68f)]&&!_0x4dbb5e[_0x326ea7(0x37c)+'ode']){var _0x2eaeee=_0x3f8b43[_0x326ea7(0x626)]['split']('|'),_0x1303a7=-0x2dd*0x1+-0x15bb*-0x1+-0x12de;while(!![]){switch(_0x2eaeee[_0x1303a7++]){case'0':_0x2a8b5a=_0x7578d6[_0x326ea7(0x5f3)+'WebMo'+_0x326ea7(0x68f)][_0x326ea7(0x294)+'me']['creat'+_0x326ea7(0x680)+'in']({'name':_0x326ea7(0x1c2)+_0x326ea7(0x23d),'version':_0x3f8b43['gnzNf'],'referencedAssemblies':[_0x3f8b43[_0x326ea7(0x657)]]});continue;case'1':if(_0x9500e2[_0x326ea7(0x212)+_0x326ea7(0x500)])_0x4c160e('godDi'+'e',_0x326ea7(0x1c0)+'th','Local'+_0x326ea7(0x5ba),['i32',_0x326ea7(0x35b),_0x3f8b43[_0x326ea7(0x1df)],_0x326ea7(0x35b),_0x3f8b43[_0x326ea7(0x1df)]],_0x26dae8,_0x5328c3,!!_0x26beaf[_0x326ea7(0x205)]);continue;case'2':_0x302c30=_0x256ede['Unity'+_0x326ea7(0x4a8)+_0x326ea7(0x68f)][_0x326ea7(0x537)+_0x326ea7(0x2e9)+'er'];continue;case'3':if(_0x570b46[_0x326ea7(0x467)+'aptur'+'e'])_0x287e8a('capMo'+'ve','Legio'+'nPlat'+_0x326ea7(0x355)+_0x326ea7(0x1e6)+_0x326ea7(0x5a8)+_0x326ea7(0x3ee)+'ent',_0x326ea7(0x4da)+_0x326ea7(0x408),[_0x326ea7(0x35b)],'i32',(_0x3d14ab,_0x15194b)=>{var _0x53af40=_0x326ea7;_0x885fd1[_0x53af40(0x624)](_0x45fc39,_0x3ab889,_0x15194b,_0x3ca723,_0x53af40(0x5f2)+_0x53af40(0x5bd));},!![]);continue;case'4':if(_0x17087f[_0x326ea7(0x467)+_0x326ea7(0x5dd)+'e'])_0x3f8b43[_0x326ea7(0x485)](_0x2f85d9,_0x3f8b43['RVeAi'],_0x326ea7(0x489)+_0x326ea7(0x5bf),'SetGa'+_0x326ea7(0x459)+_0x326ea7(0x32b),[_0x3f8b43['vZJdN'],_0x326ea7(0x35b)],_0x29c4f6,(_0x52f775,_0x14b501)=>{var _0x372029=_0x326ea7;_0x4573ab[_0x372029(0x16d)](_0x5d3d9a,_0x507954,_0x14b501,_0x16e663,'shoot'+_0x372029(0x4c8));},!![]);continue;case'5':if(_0x47a517[_0x326ea7(0x449)+_0x326ea7(0x1a4)+'il'])_0x3f8b43[_0x326ea7(0x485)](_0x459a17,_0x3f8b43['QRmcj'],_0x3f8b43[_0x326ea7(0x504)],_0x326ea7(0x297),[_0x326ea7(0x35b)],_0x4d3bc1,_0x1a87cb,!!_0x2c3f91['noRec'+_0x326ea7(0x1da)]);continue;case'6':if(_0x17bde7[_0x326ea7(0x212)+'od'])_0x3f8b43[_0x326ea7(0x485)](_0x47d5c9,_0x326ea7(0x205),_0x3f8b43['nqcos'],_0x3f8b43['rWNha'],[_0x3f8b43['vZJdN'],_0x326ea7(0x35b)],_0x64c95,_0x34de1d,!!_0x61acb3[_0x326ea7(0x205)]);continue;}break;}}}else _0x3a2557(),_0x1eb033[_0x326ea7(0x303)](_0x2c18a7,Number(_0x344fb7['value']));},_0x3a2557(),_0x769bbb[_0x3174d8(0x644)+'d'](_0x344fb7,_0x2dd2b6),_0x769bbb;}function _0x1d93c6(_0x19c502,_0x3c77a4){var _0x5c34d8=_0x5ca9e2;if(_0xe7ce06[_0x5c34d8(0x2ab)](_0xe7ce06[_0x5c34d8(0x623)],_0x5c34d8(0x646))){var _0x3afe4f=document['creat'+'eElem'+_0x5c34d8(0x10e)](_0xe7ce06['cFWEU']);return _0x3afe4f[_0x5c34d8(0x57d)]='color',_0x3afe4f[_0x5c34d8(0x155)+'Name']=_0x5c34d8(0x62e)+'lor',_0x3afe4f['value']=/^#[0-9a-f]{6}$/i[_0x5c34d8(0x2f0)](_0x19c502)?_0x19c502:'#ff6b'+'9d',_0x3afe4f[_0x5c34d8(0x1f3)+'ut']=()=>_0x3c77a4(_0x3afe4f[_0x5c34d8(0x1a0)]),_0x3afe4f;}else _0x259ece['set'](_0x3d1ea4,null);}function _0x5d6810(_0x2e894b,_0x3386a7,_0x10de1b){var _0x2bcfda=_0x5ca9e2,_0x43c9ca=document['creat'+_0x2bcfda(0x693)+_0x2bcfda(0x10e)](_0x1eb033['QZXOE']);_0x43c9ca[_0x2bcfda(0x155)+_0x2bcfda(0x523)]='sk-fi'+_0x2bcfda(0x39e);for(var [_0x22bea9,_0x17cd6b]of _0x3386a7){var _0x426b97=document[_0x2bcfda(0x209)+'eElem'+'ent'](_0x2bcfda(0x2db)+'n');_0x426b97['value']=_0x22bea9,_0x426b97[_0x2bcfda(0x46c)+_0x2bcfda(0x2a4)+'t']=_0x17cd6b,_0x43c9ca['appen'+_0x2bcfda(0x201)+'d'](_0x426b97);}return _0x43c9ca[_0x2bcfda(0x1a0)]=_0x2e894b,_0x43c9ca[_0x2bcfda(0x3f4)+'nge']=()=>_0x10de1b(_0x43c9ca['value']),_0x43c9ca;}function _0x476958(_0x21c224,_0x524c24){var _0x51f15b=_0x5ca9e2,_0x3b09ce={'Wdzzz':function(_0x12a5ab){return _0x12a5ab();}};if(_0x1eb033[_0x51f15b(0x2f6)]===_0x1eb033[_0x51f15b(0x2c4)])_0x16cd86[_0x51f15b(0x482)]=_0x1b2ad7,_0x297491();else{var _0x59a768=document[_0x51f15b(0x209)+'eElem'+_0x51f15b(0x10e)](_0x1eb033[_0x51f15b(0x234)]);return _0x59a768[_0x51f15b(0x57d)]='butto'+'n',_0x59a768[_0x51f15b(0x155)+'Name']='sk-bt'+'n',_0x59a768[_0x51f15b(0x46c)+_0x51f15b(0x2a4)+'t']=_0x21c224,_0x59a768['oncli'+'ck']=_0x222caf=>{var _0x1292f8=_0x51f15b;_0x222caf['stopP'+_0x1292f8(0x187)+_0x1292f8(0x4dc)](),_0x3b09ce[_0x1292f8(0x61b)](_0x524c24);},_0x59a768;}}function _0xf4a99b(_0x355623,_0xe64a96,_0x1e9b55){var _0xa8cf78=_0x5ca9e2,_0x34b511=document[_0xa8cf78(0x209)+_0xa8cf78(0x693)+_0xa8cf78(0x10e)](_0x1eb033['MgLWB']);_0x34b511[_0xa8cf78(0x155)+_0xa8cf78(0x523)]=_0xa8cf78(0x52a)+'l';var _0x48458f=document[_0xa8cf78(0x209)+_0xa8cf78(0x693)+'ent'](_0x1eb033[_0xa8cf78(0x498)]);_0x48458f[_0xa8cf78(0x155)+_0xa8cf78(0x523)]='sk-la'+'bel',_0x48458f[_0xa8cf78(0x46c)+'onten'+'t']=_0x355623;if(_0xe64a96){if(_0xa8cf78(0x510)==='pdnHB'){var _0x208d2d=_0x262ba8['getEl'+'ement'+_0xa8cf78(0x1d1)](_0xa41dfc);if(_0x208d2d&&_0x5ca49e===_0xa8cf78(0x2f1)+_0xa8cf78(0x427)+'-banr'+'s'){var _0x48128e=_0x208d2d['child'+'ren'];for(var _0x322323=0x1f*-0x41+-0x7e8*0x1+-0x1*-0xfc7;_0x322323<_0x48128e[_0xa8cf78(0x389)+'h'];_0x322323++){if(_0x48128e[_0x322323]['id']&&_0x48128e[_0x322323]['id'][_0xa8cf78(0x2fe)+'Of']('kour-'+_0xa8cf78(0x260))===-0x236e*0x1+-0x5e5+0x2953)_0x48128e[_0x322323][_0xa8cf78(0x60e)]['displ'+'ay']=_0x1eb033['uiSlK'];}}else{if(_0x208d2d)_0x208d2d['style'][_0xa8cf78(0x17a)+'ay']=_0xa8cf78(0x648);}}else{var _0xee8009=document[_0xa8cf78(0x209)+_0xa8cf78(0x693)+'ent'](_0xa8cf78(0x341));_0xee8009['class'+'Name']='sk-hi'+'nt',_0xee8009[_0xa8cf78(0x46c)+'onten'+'t']=_0xe64a96,_0x48458f[_0xa8cf78(0x644)+_0xa8cf78(0x201)+'d'](_0xee8009);}}return _0x34b511[_0xa8cf78(0x644)+'d'](_0x48458f,_0x1e9b55),_0x34b511;}function _0x5879c9(_0x817f0,_0x148ae3){var _0x638b73=_0x5ca9e2,_0x76028a=document['creat'+_0x638b73(0x693)+'ent'](_0x638b73(0x170));return _0x76028a[_0x638b73(0x155)+'Name']='sk-no'+'te'+(_0x148ae3?'\x20err':''),_0x76028a['textC'+'onten'+'t']=_0x817f0,_0x76028a;}function _0x101191(_0x3104b2,_0x432070,_0x193fb0,_0x2e8193,_0x1232d0){var _0x475f01=_0x5ca9e2;if(_0x1eb033[_0x475f01(0x49b)]!==_0x1eb033[_0x475f01(0x3a1)]){var _0x3350d7=document[_0x475f01(0x209)+'eElem'+_0x475f01(0x10e)](_0x1eb033[_0x475f01(0x685)]);_0x3350d7[_0x475f01(0x155)+_0x475f01(0x523)]=_0x475f01(0x5a6)+'rd'+(_0x193fb0?_0x475f01(0x306):'');var _0x8604c8=document['creat'+_0x475f01(0x693)+'ent'](_0x475f01(0x170));_0x8604c8[_0x475f01(0x155)+_0x475f01(0x523)]=_0x1eb033['IlmTk'];var _0x5ac429=document[_0x475f01(0x209)+'eElem'+'ent'](_0x475f01(0x170));_0x5ac429[_0x475f01(0x155)+_0x475f01(0x523)]=_0x1eb033['EaYRk'];var _0x1f4f1f=document[_0x475f01(0x209)+_0x475f01(0x693)+'ent'](_0x1eb033[_0x475f01(0x1ee)]);_0x1f4f1f[_0x475f01(0x46c)+_0x475f01(0x2a4)+'t']=_0x3104b2,_0x5ac429[_0x475f01(0x644)+_0x475f01(0x201)+'d'](_0x1f4f1f);if(_0x2e8193){var _0x39b044=_0x386bf3(_0x193fb0,_0x384183=>{var _0xd04d5c=_0x475f01;_0x3350d7[_0xd04d5c(0x155)+_0xd04d5c(0x3a6)][_0xd04d5c(0x140)+'e']('on',_0x384183),_0x2e8193(_0x384183);});_0x8604c8[_0x475f01(0x644)+'d'](_0x5ac429,_0x39b044);}else _0x8604c8[_0x475f01(0x644)+'dChil'+'d'](_0x5ac429);_0x3350d7['appen'+_0x475f01(0x201)+'d'](_0x8604c8);if(_0x1232d0&&_0x1232d0[_0x475f01(0x389)+'h']){var _0x5f4f9e=_0x1eb033['zxYRK'][_0x475f01(0x552)]('|'),_0x12ac81=0xc*-0x1f9+0xa79+0xd33;while(!![]){switch(_0x5f4f9e[_0x12ac81++]){case'0':_0x1d1ebc['class'+_0x475f01(0x523)]=_0x475f01(0x52c)+'esc';continue;case'1':for(var _0x466f08 of _0x1232d0)_0x58781c[_0x475f01(0x644)+'dChil'+'d'](_0x466f08);continue;case'2':_0x58781c[_0x475f01(0x155)+'Name']='sk-mb'+_0x475f01(0x437);continue;case'3':var _0x1d1ebc=document['creat'+_0x475f01(0x693)+_0x475f01(0x10e)](_0x475f01(0x170));continue;case'4':_0x58781c['appen'+_0x475f01(0x201)+'d'](_0x1d1ebc);continue;case'5':var _0x58781c=document[_0x475f01(0x209)+'eElem'+_0x475f01(0x10e)](_0x1eb033[_0x475f01(0x685)]);continue;case'6':_0x1d1ebc[_0x475f01(0x46c)+'onten'+'t']=_0x432070;continue;case'7':_0x3350d7[_0x475f01(0x644)+_0x475f01(0x201)+'d'](_0x58781c);continue;}break;}}return _0x3350d7;}else _0x4590c2['adblo'+'ck']=_0x3158ea,_0x3c6606();}var _0x42ce3a=[{'id':_0xe7ce06['RgYQw'],'label':_0x5ca9e2(0x58e)+'t'},{'id':'move','label':'Move'},{'id':_0x5ca9e2(0x184)+'l','label':_0xe7ce06[_0x5ca9e2(0x3ce)]},{'id':_0x5ca9e2(0x538),'label':_0xe7ce06[_0x5ca9e2(0x2a0)]},{'id':_0x5ca9e2(0x321),'label':_0xe7ce06[_0x5ca9e2(0x4c2)]}];function _0x5c000c(){var _0x39f0c7=_0x5ca9e2,_0x15fafa=_0x5dfee3[_0x39f0c7(0x37c)+_0x39f0c7(0x391)]?_0x39f0c7(0x5a9)+_0x39f0c7(0x190)+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0x39f0c7(0x1d2)+_0x39f0c7(0x4d0)+'ad\x20to'+_0x39f0c7(0x130)+')':_0x5dfee3['uwmk']?_0x1eb033[_0x39f0c7(0x1ca)](_0x1eb033['hJBhU']+(_0x5dfee3[_0x39f0c7(0x4c3)+_0x39f0c7(0x1ff)]?_0x5dfee3['hooks'+'Ok']+'/'+_0x5dfee3['hooks'+_0x39f0c7(0x1ff)]+_0x1eb033['hCRvx']:_0x1eb033[_0x39f0c7(0x5c4)])+(_0x39f0c7(0x31d)+_0x39f0c7(0x125))+(_0x5dfee3[_0x39f0c7(0x5e5)+'oaded']?_0x39f0c7(0x4f9)+'d':_0x39f0c7(0x123)+'ng'),_0x39f0c7(0x52d)+_0x39f0c7(0x434)+'\x20')+(_0x5dfee3[_0x39f0c7(0x116)+'ers']?_0x39f0c7(0x4ad):'none')+_0x1eb033[_0x39f0c7(0x41a)]+(_0x5dfee3[_0x39f0c7(0x5f2)+'ents']?_0x39f0c7(0x4ad):'none'):_0x1eb033['xRhJZ'];if(_0x5dfee3[_0x39f0c7(0x2fa)+'rror'])_0x15fafa+='\x20|\x20ER'+'R:\x20'+_0x5dfee3[_0x39f0c7(0x2fa)+_0x39f0c7(0x46b)];return _0x101191('Statu'+'s',_0x15fafa,_0x5dfee3['uwmk'],null,[_0xf4a99b(_0x1eb033['IrlXd'],_0x1eb033[_0x39f0c7(0x4b6)],_0x476958(_0x39f0c7(0x1d0),()=>{var _0x46a7ad=_0x39f0c7;try{if(_0x4d6573)_0x4d6573[_0x46a7ad(0x4bd)]('Unity'+_0x46a7ad(0x4a3)+'e.App'+_0x46a7ad(0x308)+_0x46a7ad(0x4f4),_0x1eb033['Ptewn'],[-0x116b+0x2350+0x1*-0x10f5]);}catch(_0x5f23da){}}))]);}function _0x22be6c(_0x1fbbe0){var _0x8a1e31=_0x5ca9e2,_0x3ae869={'jDvhE':_0xe7ce06['vTZgy'],'LkuTI':function(_0x180f79,_0x3d9b4e){var _0x50e66c=_0x1c18;return _0xe7ce06[_0x50e66c(0x30a)](_0x180f79,_0x3d9b4e);},'CIcxS':function(_0x1b4c69){return _0x1b4c69();},'TRFqU':function(_0x209017){return _0x209017();},'WMEgO':function(_0x52ecdb){return _0x52ecdb();},'AHsTR':_0x8a1e31(0x16b),'twvWR':_0x8a1e31(0x310)+_0x8a1e31(0x142)+_0x8a1e31(0x5b1),'WvXRv':_0xe7ce06['eofoe'],'MKuaF':function(_0x53e02f){return _0x53e02f();},'pTZNj':function(_0x18fa99){return _0x18fa99();},'mTdDZ':function(_0x217f51,_0x501414){return _0xe7ce06['eBneq'](_0x217f51,_0x501414);},'fhxkF':_0x8a1e31(0x199),'qLIQc':function(_0x2fd9bb,_0x166460){return _0x2fd9bb+_0x166460;},'GfNXK':'\x20@\x20','zdYRX':_0xe7ce06[_0x8a1e31(0x13f)],'tUjsO':function(_0x111549){return _0xe7ce06['cKxXf'](_0x111549);}};if(_0x1fbbe0===_0xe7ce06[_0x8a1e31(0x1fb)])return[_0xe7ce06[_0x8a1e31(0x640)](_0x5c000c),_0x101191(_0x8a1e31(0x47d)+'ode',_0x8a1e31(0xf2)+_0x8a1e31(0x31b)+_0x8a1e31(0x387)+_0x8a1e31(0x263)+_0x8a1e31(0x61d)+_0x8a1e31(0x471)+_0x8a1e31(0x1d8)+'nd\x20OH'+_0x8a1e31(0x586)+_0x8a1e31(0x1e9)+'lDie,'+'\x20so\x20n'+_0x8a1e31(0x610)+_0x8a1e31(0x14e)+_0x8a1e31(0x5cf)+'\x20or\x20k'+'ill\x20y'+_0x8a1e31(0x590),_0x1510f2[_0x8a1e31(0x205)],_0x15e618=>{var _0xda0581=_0x8a1e31;_0x1510f2['god']=_0x15e618,_0x1eb033['pmkra'](_0x2a456d),_0x1eb033[_0xda0581(0x369)](_0x8568eb,'god',_0x15e618),_0x1eb033[_0xda0581(0x369)](_0x8568eb,_0x1eb033['gCwVj'],_0x15e618);},[]),_0xe7ce06['ilUQy'](_0x101191,'No\x20Re'+'coil',_0x8a1e31(0x362)+_0x8a1e31(0x296)+_0x8a1e31(0x6ac)+_0x8a1e31(0x34e)+_0x8a1e31(0x5ff)+'o\x20the'+_0x8a1e31(0x377)+_0x8a1e31(0x20c)+'rings'+_0x8a1e31(0x275)+'r\x20adv'+_0x8a1e31(0x2dc),_0x1510f2[_0x8a1e31(0xf8)+_0x8a1e31(0x1da)],_0x4214d5=>{var _0x31aaf5=_0x8a1e31;_0x1510f2[_0x31aaf5(0xf8)+'oil']=_0x4214d5,_0x1eb033[_0x31aaf5(0x529)](_0x2a456d),_0x1eb033[_0x31aaf5(0x143)](_0x8568eb,'noRec'+_0x31aaf5(0x1da),_0x4214d5);},[]),_0xe7ce06[_0x8a1e31(0x3be)](_0x101191,_0x8a1e31(0x405)+'read',_0xe7ce06[_0x8a1e31(0x4d1)],_0x1510f2[_0x8a1e31(0x32a)+_0x8a1e31(0x217)],_0x473807=>{var _0x31c186=_0x8a1e31;_0x1510f2[_0x31c186(0x32a)+'ead']=_0x473807,_0x2a456d();},[]),_0xe7ce06[_0x8a1e31(0x3be)](_0x101191,_0x8a1e31(0x696)+'\x20Fire'+'\x20[EXP'+']',_0x8a1e31(0x42b)+'s\x20Ove'+'rtide'+'Weapo'+_0x8a1e31(0x13a)+_0x8a1e31(0x495)+'\x20to\x201'+_0x8a1e31(0x4c1)+_0x8a1e31(0x225)+_0x8a1e31(0x34b)+'still'+_0x8a1e31(0x104)+_0x8a1e31(0x5e3)+'s.',_0x1510f2['rapid'+_0x8a1e31(0x28b)],_0x313c2a=>{var _0x20613c=_0x8a1e31;_0x1510f2['rapid'+_0x20613c(0x28b)]=_0x313c2a,_0x1eb033[_0x20613c(0x529)](_0x2a456d);},[]),_0x101191(_0xe7ce06[_0x8a1e31(0x364)],'Overw'+_0x8a1e31(0x5b9)+'\x20Over'+_0x8a1e31(0x352)+_0x8a1e31(0x608)+_0x8a1e31(0x35c)+'ge.\x20B'+'annab'+'le\x20if'+_0x8a1e31(0x250)+_0x8a1e31(0x29a)+_0x8a1e31(0x483)+_0x8a1e31(0x53a)+'s.',_0x1510f2[_0x8a1e31(0x5c8)+_0x8a1e31(0x31e)],_0xff0797=>{var _0x2244e1=_0x8a1e31,_0x3ec20a={'GoWzj':function(_0x1c4750,_0x4cda93,_0x2c4ed5,_0x424d93,_0x2eac56){return _0x1c4750(_0x4cda93,_0x2c4ed5,_0x424d93,_0x2eac56);}};'KtSOh'===_0x3ae869['jDvhE']?_0x3ec20a[_0x2244e1(0x477)](_0x243500,_0xe1f21c,_0x26a402,_0x332d72,_0x2244e1(0x116)+_0x2244e1(0x4c8)):(_0x1510f2[_0x2244e1(0x5c8)+'eExp']=_0xff0797,_0x2a456d());},[_0xe7ce06[_0x8a1e31(0x4cf)](_0xf4a99b,_0xe7ce06['BhLgi'],null,_0xe7ce06['ilUQy'](_0x3d85be,_0x1510f2[_0x8a1e31(0x5c8)+'eValu'+'e'],-0x1*-0x1753+-0x18fa+-0x1*-0x1b1,-0x2498+0x3b*0x70+0xcbc,0x2067+-0x4ff*0x5+0x767*-0x1,_0x11f15f=>{var _0x51d439=_0x8a1e31;_0x3ae869[_0x51d439(0x40c)]('cJvsa',_0x51d439(0x146))?(_0x1510f2[_0x51d439(0x5c8)+_0x51d439(0x35f)+'e']=_0x11f15f,_0x2a456d()):(_0x6daff4[_0x51d439(0x155)+'List']['toggl'+'e']('on',_0x1c0650),_0x5be7ac(_0x138a3d));}))]),_0xe7ce06[_0x8a1e31(0x3be)](_0x101191,_0x8a1e31(0x394)+_0x8a1e31(0x395)+'mmo\x20['+_0x8a1e31(0x34f),_0xe7ce06['Inblh'],_0x1510f2['infAm'+_0x8a1e31(0x6a2)],_0x3a8fa1=>{_0x1510f2['infAm'+'moExp']=_0x3a8fa1,_0x2a456d();},[_0x5879c9(_0xe7ce06[_0x8a1e31(0x61a)])])];if(_0x1fbbe0===_0x8a1e31(0x5c7))return[_0xe7ce06[_0x8a1e31(0x4f2)](_0x101191,_0x8a1e31(0x664),_0xe7ce06[_0x8a1e31(0x1cb)],_0xe7ce06['pOuZe'](_0x1510f2[_0x8a1e31(0x153)+'Pct'],-0x27*0xb3+-0x1a14+-0x1*-0x35bd),null,[_0xe7ce06[_0x8a1e31(0x4cf)](_0xf4a99b,'Speed'+'\x20%','100\x20='+'\x20defa'+_0x8a1e31(0x528),_0xe7ce06[_0x8a1e31(0x320)](_0x3d85be,_0x1510f2['speed'+_0x8a1e31(0x315)],-0xe92+-0x17ed+0x26b1,0x5*0x650+0xc6c+0x1*-0x2ad0,0x1*-0x1f39+0xb8d+0x47*0x47,_0x29deca=>{var _0x4ee7cf=_0x8a1e31;_0x1510f2['speed'+_0x4ee7cf(0x315)]=_0x29deca,_0x3ae869['CIcxS'](_0x2a456d);}))]),_0x101191(_0xe7ce06[_0x8a1e31(0x5c1)],'Scale'+_0x8a1e31(0x26d)+_0x8a1e31(0x622)+_0x8a1e31(0x558)+_0x8a1e31(0x207)+'\x20and\x20'+_0x8a1e31(0x195)+_0x8a1e31(0x67e)+_0x8a1e31(0x204)+_0x8a1e31(0x381),_0xe7ce06['LBiqo'](_0x1510f2['jumpP'+'ct'],0xd1e+-0x25df+0x1925)||_0x1510f2['gravi'+'tyPct']!==0xf24+0x1*-0x132+-0x2*0x6c7,null,[_0xf4a99b(_0xe7ce06[_0x8a1e31(0x37e)],null,_0xe7ce06[_0x8a1e31(0x4f2)](_0x3d85be,_0x1510f2['jumpP'+'ct'],0x2225+-0x120f+-0x54c*0x3,0xb0a+0x2215*0x1+0x1*-0x2bf3,0xa7*-0x39+-0x971+-0x1*-0x2ea5,_0x4e268c=>{var _0x150633=_0x8a1e31;_0x3ae869[_0x150633(0x40c)]('omXiL',_0x150633(0x281))?(_0x16e1e9['safeM'+'ode']=_0x5a006e,_0x3ae869[_0x150633(0x525)](_0x1e6515),_0x2c3eb1[_0x150633(0x29e)+'d']()):(_0x1510f2[_0x150633(0x516)+'ct']=_0x4e268c,_0x3ae869[_0x150633(0x4c5)](_0x2a456d));})),_0xe7ce06[_0x8a1e31(0x607)](_0xf4a99b,_0x8a1e31(0x441)+_0x8a1e31(0x412),'lower'+'\x20=\x20fl'+_0x8a1e31(0x4ce),_0xe7ce06[_0x8a1e31(0x320)](_0x3d85be,_0x1510f2[_0x8a1e31(0x67e)+'tyPct'],-0x1df6+-0x114d+-0x2f4d*-0x1,-0x1115*-0x1+-0x98b+-0xa*0xad,0x1039+0x17*-0x17f+0x1235,_0x25643b=>{var _0xdad2a7=_0x8a1e31,_0x2d6b04={'reOUQ':function(_0x45f22f){return _0x45f22f();}};_0x3ae869[_0xdad2a7(0x40c)]('EhnFK',_0x3ae869['AHsTR'])?(_0x1510f2[_0xdad2a7(0x67e)+_0xdad2a7(0x63a)]=_0x25643b,_0x2a456d()):(_0x513593[_0xdad2a7(0x67e)+_0xdad2a7(0x63a)]=_0x4ae541,_0x2d6b04[_0xdad2a7(0x11a)](_0x50c0a4));}))]),_0x101191(_0xe7ce06[_0x8a1e31(0x65b)],_0xe7ce06[_0x8a1e31(0x16c)],_0x1510f2['bhop'],_0xf5f948=>{var _0x52a158=_0x8a1e31,_0x4b7ae7={'AYmYP':_0x3ae869['twvWR'],'ulqsY':_0x3ae869[_0x52a158(0x690)],'JJmaM':_0x52a158(0x3a5)+'b','MUnqN':function(_0x4aa69f,_0xacaffb){return _0x4aa69f+_0xacaffb;},'bwbZm':_0x52a158(0x511)+_0x52a158(0x69c)};if(_0x3ae869['LkuTI'](_0x52a158(0x102),_0x52a158(0x21f))){var _0x3aca62=_0x4b7ae7[_0x52a158(0x3b8)][_0x52a158(0x552)]('|'),_0x3df4bd=0x1094+0x23c7+0x1*-0x345b;while(!![]){switch(_0x3aca62[_0x3df4bd++]){case'0':var _0x15b7d9=_0x51f23e['creat'+_0x52a158(0x693)+'ent'](_0x52a158(0x342)+'n');continue;case'1':_0x15b7d9['type']=_0x4b7ae7[_0x52a158(0x2fc)];continue;case'2':_0x15b7d9[_0x52a158(0x304)+'ck']=(_0x1b15b7=>()=>_0x2c6e8b(_0x1b15b7))(_0x45729e['id']);continue;case'3':_0x15b7d9['class'+_0x52a158(0x523)]=_0x4b7ae7['JJmaM'];continue;case'4':_0x15b7d9[_0x52a158(0x23e)+_0x52a158(0x211)]=_0x4b7ae7['MUnqN'](_0x52a158(0xf5)+'l>',_0x564409[_0x52a158(0x6ae)])+_0x4b7ae7['bwbZm'];continue;case'5':_0x15b7d9[_0x52a158(0x30c)]=_0x488d43['label'];continue;case'6':_0x4f8553[_0x52a158(0x56f)](_0x57f433['id'],_0x15b7d9);continue;case'7':_0x5a7c6f['appen'+'dChil'+'d'](_0x15b7d9);continue;}break;}}else _0x1510f2['bhop']=_0xf5f948,_0x3ae869[_0x52a158(0x525)](_0x2a456d);},[])];if(_0xe7ce06[_0x8a1e31(0x30a)](_0x1fbbe0,_0xe7ce06[_0x8a1e31(0x61c)]))return[_0xe7ce06[_0x8a1e31(0x4f2)](_0x101191,_0xe7ce06[_0x8a1e31(0x4be)],'WASD\x20'+_0x8a1e31(0x514)+'/RMB\x20'+'+\x20Spa'+'ce\x20ov'+_0x8a1e31(0x2f9)+'.',_0x1510f2['keyst'+'rokes'],_0x4af76d=>{var _0x2f6ee5=_0x8a1e31;_0x2f6ee5(0x175)==='gQrRd'?(_0x1510f2[_0x2f6ee5(0x319)+_0x2f6ee5(0x3ab)]=_0x4af76d,_0x2a456d()):(_0x2cc0a2={..._0x390a4e},_0x3a62bb(),_0x52f895[_0x2f6ee5(0x29e)+'d']());},[_0xf4a99b(_0xe7ce06['cBJIt'],null,_0xe7ce06[_0x8a1e31(0x53f)](_0x5d6810,_0x1510f2['ksPos'],[['bl','Botto'+'m\x20lef'+'t'],['br',_0xe7ce06[_0x8a1e31(0x452)]],['ml',_0xe7ce06[_0x8a1e31(0x5ac)]]],_0x564d5e=>{var _0x2ca5e0=_0x8a1e31;_0x1510f2[_0x2ca5e0(0x135)]=_0x564d5e,_0x2a456d();})),_0xf4a99b(_0x8a1e31(0x176),null,_0x3d85be(_0x1510f2['ksSca'+'le'],0x1*0x1cfc+-0x747+-0x15b5+0.6,-0x4e*0x3e+0x249+-0x84e*-0x2+0.6000000000000001,-0x1*0x7f1+-0x988*-0x2+0x3b5*-0x3+0.05,_0x3dc0c7=>{_0x1510f2['ksSca'+'le']=_0x3dc0c7,_0x2a456d();})),_0xe7ce06['wvQQU'](_0xf4a99b,_0xe7ce06['hyQZf'],null,_0xe7ce06[_0x8a1e31(0x55f)](_0x386bf3,_0x1510f2['ksCps'],_0x86e917=>{var _0x4ab7c8=_0x8a1e31;_0x1510f2['ksCps']=_0x86e917,_0x1eb033[_0x4ab7c8(0x575)](_0x2a456d);}))]),_0x101191(_0xe7ce06[_0x8a1e31(0x14f)],_0xe7ce06[_0x8a1e31(0x66a)],_0x1510f2[_0x8a1e31(0x620)+'hair'],_0x71df54=>{var _0x5f49a7=_0x8a1e31;_0x1510f2[_0x5f49a7(0x620)+_0x5f49a7(0x50f)]=_0x71df54,_0x3ae869[_0x5f49a7(0x6aa)](_0x2a456d);},[_0xf4a99b(_0x8a1e31(0x176),null,_0x3d85be(_0x1510f2['chSiz'+'e'],-0xea5+0x1dc*-0x12+-0x6d*-0x71+0.5,0x16fa+0x38b*-0x4+-0x8cc+0.5,-0x1162+0x1ddb*-0x1+0x2f3d+0.1,_0x6a1377=>{var _0x25e4da=_0x8a1e31;'jsjXv'!==_0x1eb033[_0x25e4da(0x66e)]?(_0x1510f2['chSiz'+'e']=_0x6a1377,_0x2a456d()):_0x16a473[_0x25e4da(0x675)+'ed']=!!_0xc9aa95;})),_0xe7ce06['AraUv'](_0xf4a99b,_0xe7ce06[_0x8a1e31(0x55e)],null,_0xe7ce06['znsPb'](_0x1d93c6,_0x1510f2[_0x8a1e31(0x2df)+'or'],_0x58146d=>{_0x1510f2['chCol'+'or']=_0x58146d,_0x2a456d();}))]),_0xe7ce06[_0x8a1e31(0x569)](_0x101191,_0xe7ce06['VjsDL'],_0x8a1e31(0x565)+_0x8a1e31(0x5aa)+'y.',_0x1510f2[_0x8a1e31(0x482)],null,[_0xf4a99b('FPS\x20c'+_0x8a1e31(0x162)+'r',null,_0x386bf3(_0x1510f2[_0x8a1e31(0x482)],_0x33134c=>{var _0x1c471f=_0x8a1e31;_0x1510f2[_0x1c471f(0x482)]=_0x33134c,_0x2a456d();})),_0xe7ce06[_0x8a1e31(0x120)](_0x5879c9,'No\x20en'+_0x8a1e31(0x272)+_0x8a1e31(0x162)+'r:\x20th'+_0x8a1e31(0x402)+'ild\x20h'+_0x8a1e31(0x3db)+_0x8a1e31(0x2b6)+'isibl'+'ePlay'+'ers\x20t'+_0x8a1e31(0x3cc)+_0x8a1e31(0xfd)+_0x8a1e31(0x629))])];if(_0x1fbbe0==='misc')return[_0x101191('Adblo'+'ck',_0x8a1e31(0x5e8)+'\x20kour'+_0x8a1e31(0x44e)+'\x20bann'+'er\x20sl'+'ots.',_0x1510f2['adblo'+'ck'],_0x1e55a7=>{var _0x584ef4=_0x8a1e31;_0x1510f2[_0x584ef4(0x215)+'ck']=_0x1e55a7,_0x3ae869[_0x584ef4(0x20e)](_0x2a456d);},[_0x5879c9('Takes'+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x8a1e31(0x216)+'ggled'+'.')])];return[_0x101191('Safe\x20'+'Mode\x20'+_0x8a1e31(0x22b)+_0x8a1e31(0x654)+'nly)',_0x8a1e31(0x362)+'\x20UWMK'+_0x8a1e31(0x682)+_0x8a1e31(0x360)+_0x8a1e31(0x4dd)+'WASM\x20'+_0x8a1e31(0x4c3)+'.\x20Use'+'\x20this'+_0x8a1e31(0x462)+'atche'+'s\x20won'+_0x8a1e31(0x67c)+_0x8a1e31(0x614),_0x1510f2[_0x8a1e31(0x37c)+'ode'],_0x662897=>{var _0x2c09cb=_0x8a1e31;_0x1510f2['safeM'+'ode']=_0x662897,_0x2a456d(),location[_0x2c09cb(0x29e)+'d']();},[_0x5879c9('Appli'+_0x8a1e31(0x18e)+'\x20relo'+'ad.\x20I'+_0x8a1e31(0x4a6)+_0x8a1e31(0x674)+_0x8a1e31(0x258)+'in\x20sa'+_0x8a1e31(0x4ec)+_0x8a1e31(0x422)+'he\x20fr'+_0x8a1e31(0x19c)+_0x8a1e31(0x2ef)+_0x8a1e31(0x1f5)+'lated'+'\x20—\x20te'+_0x8a1e31(0x37a)+'\x20the\x20'+_0x8a1e31(0x4c3)+_0x8a1e31(0x3da)+_0x8a1e31(0x11f)+_0x8a1e31(0x5e2))]),_0xe7ce06[_0x8a1e31(0x100)](_0x101191,_0x8a1e31(0x265)+_0x8a1e31(0x12a)+_0x8a1e31(0x3b9)+'hes','Each\x20'+_0x8a1e31(0x3bc)+_0x8a1e31(0x4f6)+_0x8a1e31(0x59a)+_0x8a1e31(0x4d5)+'tramp'+_0x8a1e31(0x456)+_0x8a1e31(0x27c)+_0x8a1e31(0x1c8)+'hole\x20'+_0x8a1e31(0x376)+_0x8a1e31(0x40f)+_0x8a1e31(0x23a)+_0x8a1e31(0x21a)+_0x8a1e31(0x48e)+_0x8a1e31(0x1bc)+_0x8a1e31(0x293)+_0x8a1e31(0x4ae)+'ure\x20t'+_0x8a1e31(0x32d)+_0x8a1e31(0x2e5)+_0x8a1e31(0x457)+_0x8a1e31(0x4b0)+_0x8a1e31(0x6a6)+'al\x20me'+_0x8a1e31(0x59b)+_0x8a1e31(0x2b5)+_0x8a1e31(0x378)+_0x8a1e31(0x248)+_0x8a1e31(0x48f)+_0x8a1e31(0x177)+'e\x20mis'+_0x8a1e31(0x5db)+_0x8a1e31(0x115)+'\x20mome'+_0x8a1e31(0x186)+_0x8a1e31(0x2ec)+_0x8a1e31(0x411)+_0x8a1e31(0x2a7)+_0x8a1e31(0x454)+'m\x20on\x20'+_0x8a1e31(0x3a2)+'t\x20a\x20t'+_0x8a1e31(0x3a8)+'reloa'+'d,\x20an'+_0x8a1e31(0x58d)+_0x8a1e31(0x3e0)+_0x8a1e31(0x491)+'\x20your'+_0x8a1e31(0x5c3)+'d\x20cho'+_0x8a1e31(0x553)+'n.',_0x1510f2[_0x8a1e31(0x212)+'od']||_0x1510f2[_0x8a1e31(0x212)+_0x8a1e31(0x500)]||_0x1510f2[_0x8a1e31(0x449)+_0x8a1e31(0x1a4)+'il']||_0x1510f2[_0x8a1e31(0x467)+_0x8a1e31(0x5dd)+'e'],_0x15453f=>{var _0x14c12e=_0x8a1e31;_0x1510f2['hookG'+'od']=_0x15453f,_0x1510f2['hookG'+_0x14c12e(0x500)]=_0x15453f,_0x1510f2[_0x14c12e(0x449)+'oReco'+'il']=_0x15453f,_0x1510f2[_0x14c12e(0x467)+_0x14c12e(0x5dd)+'e']=_0x15453f,_0x3ae869[_0x14c12e(0x20e)](_0x2a456d),location['reloa'+'d']();},[_0xe7ce06[_0x8a1e31(0x67b)](_0x5879c9,_0xe7ce06[_0x8a1e31(0x428)]),_0xf4a99b(_0xe7ce06[_0x8a1e31(0x3f0)],null,_0x386bf3(_0x1510f2['hookG'+'od'],_0x574513=>{var _0x454641=_0x8a1e31;_0x3ae869[_0x454641(0x228)]('SdVoC',_0x3ae869['fhxkF'])?(_0x1510f2[_0x454641(0x212)+'od']=_0x574513,_0x2a456d()):_0x468e54[_0x454641(0x5fc)](_0xc17114['code']);})),_0xf4a99b('godDi'+_0x8a1e31(0x34c)+'ealth'+'.Loca'+_0x8a1e31(0x42f),null,_0x386bf3(_0x1510f2['hookG'+'odDie'],_0x250f89=>{var _0x45aedb=_0x8a1e31,_0x43eede={'SXjfD':function(_0x4e03ed,_0x5af901){return _0x3ae869['qLIQc'](_0x4e03ed,_0x5af901);},'TvxfB':function(_0x456e1e,_0x28ff7a){var _0x36640f=_0x1c18;return _0x3ae869[_0x36640f(0x5ed)](_0x456e1e,_0x28ff7a);},'rxTvT':_0x3ae869['GfNXK']};if('ShzKA'===_0x3ae869['zdYRX']){var _0x59fab4=_0x35222e&&(_0x4416d3[_0x45aedb(0x227)+'ge']||_0xd17f12['error']&&_0x22d8e5[_0x45aedb(0x641)][_0x45aedb(0x227)+'ge'])||'unkno'+'wn';if(_0xfe2d6f&&_0x4ace89['filen'+'ame'])_0x59fab4+=_0x43eede[_0x45aedb(0x4e9)](_0x43eede['TvxfB'](_0x43eede[_0x45aedb(0x257)],_0x29142c(_0x30f78d[_0x45aedb(0x131)+_0x45aedb(0x4a4)])['split']('/')['pop']())+':',_0x399039['linen'+'o']||'?');_0xdbddf3[_0x45aedb(0x2fa)+_0x45aedb(0x46b)]=_0x204c19(_0x59fab4)['slice'](-0x2140+0x1e5+0x1f5b,-0x2*-0xf8+0xc33*-0x3+-0x2349*-0x1);}else _0x1510f2[_0x45aedb(0x212)+_0x45aedb(0x500)]=_0x250f89,_0x3ae869[_0x45aedb(0x6aa)](_0x2a456d);})),_0xe7ce06[_0x8a1e31(0x380)](_0xf4a99b,'noRec'+'oil\x20('+_0x8a1e31(0x246)+_0x8a1e31(0x2ce)+'on.Ti'+_0x8a1e31(0x4f0),null,_0x386bf3(_0x1510f2[_0x8a1e31(0x449)+'oReco'+'il'],_0x386de9=>{var _0x10418c=_0x8a1e31,_0x5483d1={'bJJZJ':_0x10418c(0x5a9)+_0x10418c(0x190)+'-\x20ove'+_0x10418c(0x371)+'only,'+_0x10418c(0x348)+'ooks\x20'+_0x10418c(0x4d0)+_0x10418c(0x2b8)+_0x10418c(0x130)+')','blNEp':function(_0x2f1144,_0x3b3feb){return _0x2f1144+_0x3b3feb;},'UIydD':function(_0x374154,_0x5d35c3){return _0x374154+_0x5d35c3;},'BCqQk':function(_0x3177df,_0x13937d){return _0x3177df+_0x13937d;},'oiIPp':_0x10418c(0x307)+_0x10418c(0x276)+'t\x20','bLWqc':function(_0x4502a7,_0x586ec4){return _0x4502a7+_0x586ec4;}};_0x1eb033[_0x10418c(0x1f2)](_0x1eb033['NJcno'],_0x1eb033['knEkW'])?(_0x1510f2[_0x10418c(0x449)+_0x10418c(0x1a4)+'il']=_0x386de9,_0x2a456d()):_0x23e54d[_0x10418c(0x46c)+_0x10418c(0x2a4)+'t']=_0x54b86e[_0x10418c(0x37c)+'ode']?_0x5483d1[_0x10418c(0x551)]:_0x51e8dc[_0x10418c(0x2e0)]?_0x5483d1[_0x10418c(0x643)](_0x5483d1['UIydD'](_0x5483d1[_0x10418c(0x630)](_0x5483d1['BCqQk'](_0x5483d1['UIydD'](_0x10418c(0x172)+_0x10418c(0x4c0)+'\x20',_0x32581f[_0x10418c(0x4c3)+'Total']?_0x5483d1['blNEp'](_0x5483d1['UIydD'](_0x5483d1['BCqQk'](_0xe465b8['hooks'+'Ok'],'/'),_0x36cd6c[_0x10418c(0x4c3)+_0x10418c(0x1ff)]),_0x10418c(0x585)+'s'):_0x10418c(0x687)+_0x10418c(0x573)+'med\x20('+_0x10418c(0x3d3)+_0x10418c(0x23b)),'\x20|\x20ga'+'me\x20'),_0x565b1d[_0x10418c(0x5e5)+'oaded']?_0x10418c(0x4f9)+'d':_0x10418c(0x123)+'ng'),_0x10418c(0x52d)+_0x10418c(0x434)+'\x20')+(_0x5d3bc7['shoot'+_0x10418c(0x4c8)]?'held':'none')+_0x5483d1[_0x10418c(0x545)]+(_0x397c2c[_0x10418c(0x5f2)+_0x10418c(0x5bd)]?'held':_0x10418c(0x648)),_0x57b220[_0x10418c(0x2fa)+'rror']?_0x5483d1[_0x10418c(0x299)]('\x20|\x20ER'+'R:\x20',_0x2e6edd['lastE'+'rror']):''):_0x10418c(0x172)+'MISSI'+_0x10418c(0x609)+_0x10418c(0x27f)+_0x10418c(0x114)+'ly\x20(r'+_0x10418c(0x179)+_0x10418c(0x1ea)+_0x10418c(0x4ac)+_0x10418c(0x3f6)+_0x10418c(0x1fd);})),_0xf4a99b(_0x8a1e31(0x448)+_0x8a1e31(0x5c5)+_0x8a1e31(0x3d1)+_0x8a1e31(0x44d)+_0x8a1e31(0x416)+'\x20IsGr'+'ounde'+'d)',_0xe7ce06[_0x8a1e31(0x60f)],_0xe7ce06['znsPb'](_0x386bf3,_0x1510f2['hookC'+_0x8a1e31(0x5dd)+'e'],_0x450cc7=>{_0x1510f2['hookC'+'aptur'+'e']=_0x450cc7,_0x2a456d();}))]),_0xe7ce06[_0x8a1e31(0x41e)](_0x101191,_0x8a1e31(0x5c6)+_0x8a1e31(0x65c)+'r','Disab'+'les\x20C'+'odeSt'+_0x8a1e31(0x231)+'etect'+_0x8a1e31(0x137)+_0x8a1e31(0x602)+'rtup\x20'+_0x8a1e31(0x4ef)+'topDe'+_0x8a1e31(0x2a6)+'on().'+'\x20Keep'+'\x20ON.',_0x1510f2['actkK'+'ill'],_0x50b496=>{var _0x12043b=_0x8a1e31;_0x1510f2['actkK'+_0x12043b(0x301)]=_0x50b496,_0x3ae869[_0x12043b(0x2a2)](_0x2a456d);},[_0xe7ce06[_0x8a1e31(0x2d5)](_0x5879c9,_0xe7ce06[_0x8a1e31(0x5d8)],!![])]),_0x101191('Dange'+'r','These'+_0x8a1e31(0x541)+_0x8a1e31(0x4b3)+_0x8a1e31(0x4c4)+_0x8a1e31(0x292)+_0x8a1e31(0x390)+_0x8a1e31(0x47b),!![],null,[_0xf4a99b(_0xe7ce06['HVfcJ'],null,_0xe7ce06['znsPb'](_0x476958,'Reset',()=>{var _0x2a8c56=_0x8a1e31;_0x1510f2={..._0x3b3134},_0x3ae869[_0x2a8c56(0x347)](_0x2a456d),location[_0x2a8c56(0x29e)+'d']();}))])];}var _0x2ad463=null;function _0x103cd8(_0x2d0641){var _0xd08d0d=_0x5ca9e2;if(_0xe7ce06[_0xd08d0d(0x3e2)]!==_0xd08d0d(0x594))_0xb5cfc2[_0xd08d0d(0x549)+'le']=_0x50a72e,_0x366068();else{_0x528ab6=_0x2d0641;if(!_0x2ad463){var _0x1be24d=document[_0xd08d0d(0x209)+_0xd08d0d(0x693)+'ent'](_0xd08d0d(0x60e));_0x1be24d['textC'+_0xd08d0d(0x2a4)+'t']=_0x547b5f,_0x3bc446['appen'+_0xd08d0d(0x201)+'d'](_0x1be24d),_0x2ad463=_0x58f343(),_0x3bc446[_0xd08d0d(0x644)+'dChil'+'d'](_0x2ad463),requestAnimationFrame(()=>_0x2ad463[_0xd08d0d(0x155)+_0xd08d0d(0x3a6)]['add'](_0xd08d0d(0x6a7)));}_0x2ad463['class'+'List'][_0xd08d0d(0x140)+'e'](_0xe7ce06['lpKaz'],_0x2d0641);}}function _0x5f1366(){_0xe7ce06['jJRvV'](_0x103cd8,!_0x528ab6);}function _0x58f343(){var _0x3ddc87=_0x5ca9e2,_0x2a45c2=document['creat'+'eElem'+'ent'](_0xe7ce06[_0x3ddc87(0x1f8)]);_0x2a45c2[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0xe7ce06[_0x3ddc87(0x438)];var _0xd75f47=document[_0x3ddc87(0x209)+'eElem'+'ent']('nav');_0xd75f47[_0x3ddc87(0x155)+'Name']=_0x3ddc87(0x271)+'de';var _0x102a30=document['creat'+'eElem'+_0x3ddc87(0x10e)]('div');_0x102a30[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0x3ddc87(0x435)+'go',_0x102a30['inner'+_0x3ddc87(0x211)]=_0x3ddc87(0x3a0)+'viewB'+_0x3ddc87(0x619)+'\x200\x2024'+_0x3ddc87(0x1ae)+'class'+'=\x22mn-'+_0x3ddc87(0x3a3)+_0x3ddc87(0x617)+_0x3ddc87(0x302)+_0x3ddc87(0x22d)+'12\x2021'+_0x3ddc87(0x3a9)+'-2.5-'+_0x3ddc87(0x4d6)+'-4-7.'+_0x3ddc87(0x122)+_0x3ddc87(0x431)+'8-4.5'+_0x3ddc87(0x189)+_0x3ddc87(0x255)+'\x204\x204.'+_0x3ddc87(0x4fe)+_0x3ddc87(0x36a)+_0x3ddc87(0x58c)+_0x3ddc87(0x298)+_0x3ddc87(0x163)+'\x22none'+'\x22\x20str'+_0x3ddc87(0x3fd)+_0x3ddc87(0x64f)+'9d\x22\x20s'+_0x3ddc87(0x2f5)+_0x3ddc87(0x3ec)+_0x3ddc87(0x4e8)+'\x20stro'+_0x3ddc87(0x547)+_0x3ddc87(0x460)+_0x3ddc87(0x54a)+_0x3ddc87(0x45d)+'troke'+_0x3ddc87(0x446)+_0x3ddc87(0x2ae)+'\x22roun'+'d\x22/><'+'circl'+_0x3ddc87(0x4ba)+'\x2212\x22\x20'+'cy=\x221'+_0x3ddc87(0x652)+'\x221.5\x22'+_0x3ddc87(0x3f7)+_0x3ddc87(0x25c)+_0x3ddc87(0x39d)+_0x3ddc87(0x22f)+'vg>',_0xd75f47[_0x3ddc87(0x644)+_0x3ddc87(0x201)+'d'](_0x102a30);var _0x34c49c=document['creat'+_0x3ddc87(0x693)+'ent'](_0xe7ce06['UYrBP']);_0x34c49c[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0xe7ce06['cZTmj'];var _0x2b550b=document[_0x3ddc87(0x209)+'eElem'+_0x3ddc87(0x10e)](_0xe7ce06[_0x3ddc87(0x273)]);_0x2b550b['class'+_0x3ddc87(0x523)]=_0x3ddc87(0x45a)+'p';var _0xef0b5e=document[_0x3ddc87(0x209)+_0x3ddc87(0x693)+'ent']('div');_0xef0b5e[_0x3ddc87(0x155)+'Name']=_0xe7ce06['dAxbB'];var _0x20bb9a=document[_0x3ddc87(0x209)+_0x3ddc87(0x693)+_0x3ddc87(0x10e)]('h2');_0x20bb9a[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0x3ddc87(0x4e2),_0x20bb9a['textC'+'onten'+'t']=_0x3ddc87(0x1c2)+'a\x20Kou'+'r';var _0x45dd53=document['creat'+'eElem'+_0x3ddc87(0x10e)](_0xe7ce06['TSKNZ']);_0x45dd53['class'+_0x3ddc87(0x523)]=_0x3ddc87(0x503)+'b',_0x45dd53['textC'+'onten'+'t']=_0xe7ce06['XbdlQ'],_0xef0b5e[_0x3ddc87(0x644)+'d'](_0x20bb9a,_0x45dd53);var _0x33a799=document[_0x3ddc87(0x209)+_0x3ddc87(0x693)+_0x3ddc87(0x10e)](_0xe7ce06[_0x3ddc87(0x5af)]);_0x33a799[_0x3ddc87(0x57d)]=_0xe7ce06['eofoe'],_0x33a799[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0xe7ce06['cncKt'],_0x33a799[_0x3ddc87(0x30c)]=_0x3ddc87(0x407),_0x33a799[_0x3ddc87(0x23e)+_0x3ddc87(0x211)]=_0xe7ce06['RALZg'],_0x33a799[_0x3ddc87(0x304)+'ck']=()=>_0x103cd8(![]),_0x2b550b[_0x3ddc87(0x644)+'d'](_0xef0b5e,_0x33a799);var _0x1a76c8=document[_0x3ddc87(0x209)+'eElem'+_0x3ddc87(0x10e)]('div');_0x1a76c8[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0x3ddc87(0x1d7)+'ls',_0x34c49c[_0x3ddc87(0x644)+'d'](_0x2b550b,_0x1a76c8),_0x2a45c2[_0x3ddc87(0x644)+'d'](_0xd75f47,_0x34c49c);var _0x585f1d=new Map();for(var _0x5b768a of _0x42ce3a){var _0x515352=_0xe7ce06[_0x3ddc87(0x314)]['split']('|'),_0x4476fc=0x16ee+0x15fd+-0x2ceb*0x1;while(!![]){switch(_0x515352[_0x4476fc++]){case'0':_0xd75f47[_0x3ddc87(0x644)+'dChil'+'d'](_0x3dd2dc);continue;case'1':_0x3dd2dc[_0x3ddc87(0x57d)]=_0x3ddc87(0x342)+'n';continue;case'2':_0x3dd2dc[_0x3ddc87(0x23e)+'HTML']=_0xe7ce06['lmhlo']('<smal'+'l>'+_0x5b768a['label'],_0x3ddc87(0x511)+_0x3ddc87(0x69c));continue;case'3':_0x3dd2dc[_0x3ddc87(0x30c)]=_0x5b768a[_0x3ddc87(0x6ae)];continue;case'4':_0x585f1d[_0x3ddc87(0x56f)](_0x5b768a['id'],_0x3dd2dc);continue;case'5':_0x3dd2dc['oncli'+'ck']=(_0x3b45be=>()=>_0x144c53(_0x3b45be))(_0x5b768a['id']);continue;case'6':_0x3dd2dc[_0x3ddc87(0x155)+_0x3ddc87(0x523)]=_0xe7ce06[_0x3ddc87(0x633)];continue;case'7':var _0x3dd2dc=document[_0x3ddc87(0x209)+'eElem'+'ent']('butto'+'n');continue;}break;}}function _0x144c53(_0x3a8e86){var _0x53ee60=_0x3ddc87,_0x573903=('5|1|2'+_0x53ee60(0x2e8)+'4')['split']('|'),_0x409fcc=-0xa*0x22+-0x12f7+0x144b;while(!![]){switch(_0x573903[_0x409fcc++]){case'0':for(var [_0x1041e0,_0x28334b]of _0x585f1d)_0x28334b[_0x53ee60(0x155)+_0x53ee60(0x3a6)][_0x53ee60(0x140)+'e'](_0x1eb033[_0x53ee60(0x2bd)],_0x1041e0===_0x3a8e86);continue;case'1':_0x1eb033[_0x53ee60(0x5a4)](_0x2c6d79);continue;case'2':var _0x4b9e28=_0x42ce3a[_0x53ee60(0x5c2)](_0x4238f9=>_0x4238f9['id']===_0x3a8e86)||_0x42ce3a[0x7ea+0x5b6+0x8*-0x1b4];continue;case'3':_0x20bb9a[_0x53ee60(0x46c)+'onten'+'t']=_0x53ee60(0x1c2)+_0x53ee60(0x3e7)+_0x53ee60(0x2b7)+_0x4b9e28[_0x53ee60(0x6ae)];continue;case'4':_0x1a76c8[_0x53ee60(0x2ba)+_0x53ee60(0x2a9)+'ldren'](..._0x22be6c(_0x3a8e86));continue;case'5':_0x436ed3['cat']=_0x3a8e86;continue;}break;}}return _0xe7ce06[_0x3ddc87(0x67b)](_0x144c53,_0x436ed3[_0x3ddc87(0x515)]||_0xe7ce06[_0x3ddc87(0x1fb)]),setInterval(()=>{var _0x56404b=_0x3ddc87;if(!_0x528ab6)return;var _0x5c9397=_0x1a76c8['child'+_0x56404b(0x57b)];for(var _0x100882=0x2378+-0x1cfd+0x4f*-0x15;_0x100882<_0x5c9397[_0x56404b(0x389)+'h'];_0x100882++){var _0x5276ee=_0x5c9397[_0x100882][_0x56404b(0x25b)+'Selec'+_0x56404b(0x269)]('.sk-m'+'desc');_0x5276ee&&(_0x1eb033[_0x56404b(0x5da)](_0x5276ee[_0x56404b(0x46c)+'onten'+'t']['index'+'Of'](_0x1eb033[_0x56404b(0x62d)]),-0x1*-0x1b4d+0x2*0x12e0+-0x27*0x1ab)||_0x1eb033[_0x56404b(0x5da)](_0x5276ee[_0x56404b(0x46c)+_0x56404b(0x2a4)+'t']['index'+'Of']('SAFE'),-0x1*-0x10ef+0x15ce+-0x26bd))&&(_0x5276ee['textC'+_0x56404b(0x2a4)+'t']=_0x5dfee3[_0x56404b(0x37c)+'ode']?_0x1eb033['UxudF']:_0x5dfee3['uwmk']?_0x1eb033[_0x56404b(0x1ca)](_0x1eb033[_0x56404b(0x17c)](_0x1eb033[_0x56404b(0x429)](_0x1eb033[_0x56404b(0x3d5)]+(_0x5dfee3[_0x56404b(0x4c3)+_0x56404b(0x1ff)]?_0x5dfee3[_0x56404b(0x4c3)+'Ok']+'/'+_0x5dfee3['hooks'+'Total']+_0x1eb033[_0x56404b(0xff)]:'0\x20hoo'+_0x56404b(0x573)+_0x56404b(0x111)+_0x56404b(0x3d3)+'ff)')+(_0x56404b(0x31d)+_0x56404b(0x125))+(_0x5dfee3['gameL'+_0x56404b(0x442)]?'loade'+'d':_0x56404b(0x123)+'ng'),_0x1eb033[_0x56404b(0x29d)])+(_0x5dfee3['shoot'+'ers']?_0x56404b(0x4ad):_0x1eb033['uiSlK']),_0x56404b(0x307)+_0x56404b(0x276)+'t\x20')+(_0x5dfee3[_0x56404b(0x5f2)+'ents']?_0x1eb033[_0x56404b(0x616)]:_0x1eb033[_0x56404b(0x3d4)]),_0x5dfee3[_0x56404b(0x2fa)+_0x56404b(0x46b)]?_0x1eb033['BLaZx'](_0x1eb033['hYeKy'],_0x5dfee3[_0x56404b(0x2fa)+'rror']):''):_0x1eb033['MNkLg']);}},0x15*0x1cd+0x1b68*-0x1+-0x681),_0x2a45c2;}var _0x547b5f=_0x5ca9e2(0x4e6)+':host'+'\x20{\x20al'+'l:\x20in'+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x5ca9e2(0x1ab)+_0x5ca9e2(0x4ab)+'ng:\x20b'+_0x5ca9e2(0x2d1)+_0x5ca9e2(0x5e0)+_0x5ca9e2(0x54d)+'in:\x200'+_0x5ca9e2(0x344)+'t-fam'+'ily:\x20'+'\x22Inte'+_0x5ca9e2(0x663)+_0x5ca9e2(0x4f7)+_0x5ca9e2(0x556)+'\x20syst'+_0x5ca9e2(0x518)+_0x5ca9e2(0x466)+_0x5ca9e2(0x367)+_0x5ca9e2(0x18b)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x5ca9e2(0x55a)+'{\x20pos'+_0x5ca9e2(0x2d0)+_0x5ca9e2(0x26f)+'olute'+';\x20rig'+_0x5ca9e2(0x1cf)+_0x5ca9e2(0x3b3)+_0x5ca9e2(0x37f)+_0x5ca9e2(0x582)+_0x5ca9e2(0x656)+'idth:'+_0x5ca9e2(0x62a)+_0x5ca9e2(0x1b7)+',\x20cal'+_0x5ca9e2(0x47e)+'vw\x20-\x20'+_0x5ca9e2(0x354)+_0x5ca9e2(0x62f)+'x-hei'+'ght:\x20'+_0x5ca9e2(0x2ea)+_0x5ca9e2(0x2c3)+'\x20calc'+_0x5ca9e2(0x3dc)+'h\x20-\x204'+_0x5ca9e2(0x2a3)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x5ca9e2(0x262)+':\x20fle'+'x;\x20ga'+_0x5ca9e2(0x578)+'px;\x20p'+_0x5ca9e2(0x5e4)+'g:\x2010'+_0x5ca9e2(0x4d7)+'order'+_0x5ca9e2(0x472)+_0x5ca9e2(0x3cd)+_0x5ca9e2(0x658)+_0x5ca9e2(0x55b)+_0x5ca9e2(0x5e1)+'ents:'+_0x5ca9e2(0x343)+_0x5ca9e2(0x445)+_0x5ca9e2(0x1ed)+_0x5ca9e2(0x353)+_0x5ca9e2(0x239)+'rgba('+'24,17'+_0x5ca9e2(0x54f)+'82);\x20'+'backd'+_0x5ca9e2(0x64a)+_0x5ca9e2(0x461)+_0x5ca9e2(0x1c6)+'r(22p'+'x)\x20sa'+'turat'+_0x5ca9e2(0x328)+'%);\x20-'+_0x5ca9e2(0x2c7)+'t-bac'+'kdrop'+_0x5ca9e2(0x1a3)+'er:\x20b'+'lur(2'+_0x5ca9e2(0x3c7)+_0x5ca9e2(0x249)+'ate(1'+_0x5ca9e2(0x134)+_0x5ca9e2(0x4e6)+'\x20\x20box'+'-shad'+_0x5ca9e2(0x312)+_0x5ca9e2(0x15b)+_0x5ca9e2(0x6af)+'gba(2'+'55,25'+'5,255'+_0x5ca9e2(0x597)+_0x5ca9e2(0x54b)+_0x5ca9e2(0x470)+_0x5ca9e2(0x583)+_0x5ca9e2(0x27d)+'(255,'+_0x5ca9e2(0x430)+_0x5ca9e2(0x509)+_0x5ca9e2(0x39f)+_0x5ca9e2(0x63d)+'\x2080px'+'\x20rgba'+_0x5ca9e2(0x158)+_0x5ca9e2(0x5b0)+');\x0a\x20\x20'+_0x5ca9e2(0x1cd)+'pacit'+_0x5ca9e2(0x12b)+'\x20tran'+'sform'+':\x20tra'+'nslat'+'eY(18'+_0x5ca9e2(0x345)+_0x5ca9e2(0x55b)+_0x5ca9e2(0x5e1)+_0x5ca9e2(0x206)+'\x20none'+';\x20tra'+_0x5ca9e2(0x3ed)+'on:\x20o'+'pacit'+'y\x20.35'+'s\x20eas'+'e,\x20tr'+'ansfo'+_0x5ca9e2(0x26c)+_0x5ca9e2(0x1ad)+_0x5ca9e2(0x580)+_0x5ca9e2(0x25a)+'(.22,'+_0x5ca9e2(0x173)+',1);\x0a'+_0x5ca9e2(0x659)+_0x5ca9e2(0x165)+_0x5ca9e2(0x3bf)+_0x5ca9e2(0x24e)+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+_0x5ca9e2(0x4e6)+_0x5ca9e2(0x50d)+'anel.'+_0x5ca9e2(0x6a7)+_0x5ca9e2(0x458)+_0x5ca9e2(0x3cf)+':\x201;\x20'+_0x5ca9e2(0x337)+'form:'+_0x5ca9e2(0x13d)+_0x5ca9e2(0x65f)+_0x5ca9e2(0x363)+_0x5ca9e2(0x313)+_0x5ca9e2(0xf9)+'to;\x20}'+_0x5ca9e2(0x4e6)+_0x5ca9e2(0x697)+_0x5ca9e2(0x14b)+_0x5ca9e2(0x218)+'lay:\x20'+_0x5ca9e2(0x625)+'\x20flex'+_0x5ca9e2(0x340)+'ction'+':\x20col'+'umn;\x20'+_0x5ca9e2(0x55c)+'-item'+'s:\x20ce'+_0x5ca9e2(0x24c)+'\x20gap:'+_0x5ca9e2(0x1dc)+'\x20widt'+_0x5ca9e2(0x17b)+_0x5ca9e2(0x493)+'lex:\x20'+'none;'+_0x5ca9e2(0x65a)+'ing:\x20'+_0x5ca9e2(0x699)+(_0x5ca9e2(0x41d)+_0x5ca9e2(0x27b)+_0x5ca9e2(0x349)+'s:\x2016'+'px;\x0a\x20'+_0x5ca9e2(0x659)+_0x5ca9e2(0x264)+'round'+':\x20rgb'+'a(255'+_0x5ca9e2(0x5a1)+_0x5ca9e2(0x18c)+'025);'+'\x20box-'+'shado'+_0x5ca9e2(0x5f6)+_0x5ca9e2(0x12d)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x5ca9e2(0x26e)+_0x5ca9e2(0x42e)+_0x5ca9e2(0x180)+_0x5ca9e2(0x59e)+'\x20\x20\x20.m'+_0x5ca9e2(0x4aa)+'o\x20{\x20d'+'ispla'+_0x5ca9e2(0x5ea)+_0x5ca9e2(0x683)+'lace-'+_0x5ca9e2(0x245)+':\x20cen'+'ter;\x20'+'width'+':\x2032p'+_0x5ca9e2(0x568)+'ight:'+'\x2032px'+_0x5ca9e2(0x59e)+_0x5ca9e2(0x2f4)+'n-log'+'o-svg'+_0x5ca9e2(0x5cb)+_0x5ca9e2(0x267)+'25px;'+_0x5ca9e2(0x2dd)+'ht:\x202'+'5px;\x20'+'overf'+_0x5ca9e2(0x4d8)+'visib'+_0x5ca9e2(0x6a4)+'ilter'+':\x20dro'+'p-sha'+'dow(0'+_0x5ca9e2(0x1d4)+_0x5ca9e2(0x309)+'a(255'+_0x5ca9e2(0x48c)+'157,.'+'8));\x20'+_0x5ca9e2(0x3b2)+_0x5ca9e2(0x692)+'tab\x20{'+_0x5ca9e2(0x218)+'lay:\x20'+'flex;'+'\x20alig'+_0x5ca9e2(0x612)+_0x5ca9e2(0x5f1)+'enter'+';\x20jus'+_0x5ca9e2(0x5bc)+'conte'+'nt:\x20c'+'enter'+';\x20wid'+'th:\x205'+_0x5ca9e2(0x658)+_0x5ca9e2(0x1a6)+_0x5ca9e2(0x16f)+_0x5ca9e2(0x4d7)+_0x5ca9e2(0x2d1)+_0x5ca9e2(0x150)+_0x5ca9e2(0x1b9)+_0x5ca9e2(0x2bf)+'ius:\x20'+_0x5ca9e2(0x66c)+_0x5ca9e2(0x4e6)+'\x20\x20bac'+_0x5ca9e2(0x689)+'nd:\x20t'+_0x5ca9e2(0x16a)+'arent'+_0x5ca9e2(0x383)+_0x5ca9e2(0x2c5)+_0x5ca9e2(0x1a8)+_0x5ca9e2(0x4cc)+_0x5ca9e2(0x4b9)+_0x5ca9e2(0x4ed)+_0x5ca9e2(0x4ca)+'or:\x20p'+_0x5ca9e2(0x694)+_0x5ca9e2(0x4b5)+_0x5ca9e2(0x581)+_0x5ca9e2(0x222)+_0x5ca9e2(0x121)+_0x5ca9e2(0x486)+_0x5ca9e2(0x653)+'t:\x2070'+'0;\x20}\x0a'+_0x5ca9e2(0x316)+'mn-ta'+_0x5ca9e2(0xfa)+'er\x20{\x20'+_0x5ca9e2(0x148)+':\x20rgb'+'a(246'+',238,'+'242,.'+_0x5ca9e2(0x56d)+'\x0a\x20\x20\x20\x20'+_0x5ca9e2(0x25e)+_0x5ca9e2(0x375)+'tive\x20'+'{\x20col'+_0x5ca9e2(0x397)+_0x5ca9e2(0x58b)+_0x5ca9e2(0x50e)+'ckgro'+_0x5ca9e2(0x239)+'rgba('+_0x5ca9e2(0x2bb)+_0x5ca9e2(0x4a5)+'7,.1)'+_0x5ca9e2(0x59e)+_0x5ca9e2(0x2f4)+_0x5ca9e2(0x5ef)+'n\x20{\x20f'+'lex:\x20'+'1;\x20mi'+_0x5ca9e2(0x487)+_0x5ca9e2(0x243)+_0x5ca9e2(0x14d)+'play:'+_0x5ca9e2(0x3e6)+_0x5ca9e2(0x62c)+'x-dir'+'ectio'+'n:\x20co'+'lumn;'+_0x5ca9e2(0x188)+'\x20\x20.mn'+_0x5ca9e2(0x5b7)+_0x5ca9e2(0x43a)+_0x5ca9e2(0x2d4)+_0x5ca9e2(0x3e6)+_0x5ca9e2(0x4bb)+'gn-it'+'ems:\x20'+_0x5ca9e2(0x4fb)+_0x5ca9e2(0x40e)+_0x5ca9e2(0x335)+_0x5ca9e2(0x235)+_0x5ca9e2(0x5e4)+_0x5ca9e2(0x69b)+_0x5ca9e2(0x3ef)+'\x2012px'+_0x5ca9e2(0x557)+_0x5ca9e2(0x51f)+_0x5ca9e2(0x3fb)+'none;'+_0x5ca9e2(0x188)+_0x5ca9e2(0x2b1)+_0x5ca9e2(0x15e)+_0x5ca9e2(0x40a)+'flex:'+'\x201;\x20m'+_0x5ca9e2(0x4bc)+'dth:\x20'+_0x5ca9e2(0x2d6)+'\x20\x20\x20\x20.'+_0x5ca9e2(0x30d)+_0x5ca9e2(0x256)+_0x5ca9e2(0x181)+_0x5ca9e2(0x3e1)+'px;\x20f'+'ont-w'+_0x5ca9e2(0x166)+_0x5ca9e2(0x5fb)+';\x20}\x0a\x20'+_0x5ca9e2(0x2f4)+_0x5ca9e2(0x3af)+_0x5ca9e2(0x403)+'nt-si'+_0x5ca9e2(0x222)+'1px;\x20'+_0x5ca9e2(0x476))+('ty:\x20.'+_0x5ca9e2(0x45b)+_0x5ca9e2(0x316)+_0x5ca9e2(0x6b2)+'ose\x20{'+_0x5ca9e2(0x218)+_0x5ca9e2(0x4bf)+'grid;'+'\x20plac'+_0x5ca9e2(0x28a)+_0x5ca9e2(0x5f1)+'enter'+_0x5ca9e2(0x55d)+'th:\x202'+'8px;\x20'+_0x5ca9e2(0x1a6)+_0x5ca9e2(0x1b8)+'px;\x20b'+_0x5ca9e2(0x2d1)+_0x5ca9e2(0x150)+_0x5ca9e2(0x1b9)+'r-rad'+_0x5ca9e2(0x67a)+_0x5ca9e2(0x4eb)+_0x5ca9e2(0x264)+_0x5ca9e2(0x661)+':\x20tra'+_0x5ca9e2(0x266)+'ent;\x20'+'color'+_0x5ca9e2(0x334)+_0x5ca9e2(0x291)+_0x5ca9e2(0x44b)+'ity:\x20'+_0x5ca9e2(0x2d2)+_0x5ca9e2(0x169)+'r:\x20po'+'inter'+';\x20}\x0a\x20'+_0x5ca9e2(0x2f4)+_0x5ca9e2(0x5cc)+_0x5ca9e2(0x4cb)+_0x5ca9e2(0x5b6)+_0x5ca9e2(0x44b)+'ity:\x20'+'1;\x20ba'+_0x5ca9e2(0x353)+_0x5ca9e2(0x239)+_0x5ca9e2(0x41f)+_0x5ca9e2(0x430)+_0x5ca9e2(0x26e)+'5,.05'+_0x5ca9e2(0x31c)+_0x5ca9e2(0x316)+_0x5ca9e2(0x6b2)+_0x5ca9e2(0x662)+'vg\x20{\x20'+'width'+_0x5ca9e2(0x4a7)+_0x5ca9e2(0x568)+_0x5ca9e2(0x35d)+'\x2014px'+_0x5ca9e2(0x5b5)+_0x5ca9e2(0x4e4)+_0x5ca9e2(0x469)+'troke'+_0x5ca9e2(0x56b)+'rentC'+_0x5ca9e2(0x4c9)+'\x20stro'+_0x5ca9e2(0x57a)+_0x5ca9e2(0x267)+_0x5ca9e2(0x684)+'roke-'+_0x5ca9e2(0x3c2)+_0x5ca9e2(0x2da)+'ound;'+'\x20}\x0a\x20\x20'+_0x5ca9e2(0x2b1)+'-cols'+'\x20{\x20fl'+_0x5ca9e2(0x615)+';\x20min'+_0x5ca9e2(0x5fe)+_0x5ca9e2(0x35a)+_0x5ca9e2(0x499)+_0x5ca9e2(0x326)+_0x5ca9e2(0x24a)+'uto;\x20'+'displ'+'ay:\x20g'+'rid;\x20'+'grid-'+_0x5ca9e2(0x423)+'ate-c'+'olumn'+_0x5ca9e2(0x33d)+_0x5ca9e2(0x400)+_0x5ca9e2(0x480)+_0x5ca9e2(0x418)+'\x20minm'+_0x5ca9e2(0x156)+_0x5ca9e2(0x3b6)+'1fr))'+_0x5ca9e2(0x4bb)+'gn-it'+'ems:\x20'+_0x5ca9e2(0x1f9)+_0x5ca9e2(0x4bb)+'gn-co'+_0x5ca9e2(0x280)+':\x20sta'+_0x5ca9e2(0x259)+'ap:\x201'+'0px;\x20'+'paddi'+_0x5ca9e2(0x43f)+'\x204px\x20'+_0x5ca9e2(0x1b0)+_0x5ca9e2(0x59e)+_0x5ca9e2(0x2f4)+'n-col'+'s::-w'+_0x5ca9e2(0x1e7)+'-scro'+'llbar'+_0x5ca9e2(0x5cb)+'dth:\x20'+_0x5ca9e2(0x4eb)+'}\x0a\x20\x20\x20'+_0x5ca9e2(0x692)+_0x5ca9e2(0x1b2)+':-web'+'kit-s'+_0x5ca9e2(0x322)+'bar-t'+_0x5ca9e2(0x138)+'{\x20bac'+'kgrou'+_0x5ca9e2(0x127)+_0x5ca9e2(0x1a8)+'55,25'+_0x5ca9e2(0x42e)+',.08)'+_0x5ca9e2(0x4f8)+_0x5ca9e2(0x576)+'adius'+':\x204px'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x5ca9e2(0x43d)+_0x5ca9e2(0x2d1)+'-radi'+_0x5ca9e2(0x399)+'2px;\x20'+_0x5ca9e2(0x264)+_0x5ca9e2(0x661)+':\x20rgb'+'a(255'+',255,'+'255,.'+_0x5ca9e2(0x29c)+_0x5ca9e2(0x41c)+_0x5ca9e2(0x384)+_0x5ca9e2(0x5f6)+_0x5ca9e2(0x12d)+_0x5ca9e2(0x15b)+_0x5ca9e2(0x6af)+_0x5ca9e2(0x1a8)+_0x5ca9e2(0x26e)+_0x5ca9e2(0x42e)+_0x5ca9e2(0x180)+_0x5ca9e2(0x59e)+'\x20\x20\x20.s'+_0x5ca9e2(0x3b0)+'d.on\x20'+_0x5ca9e2(0x433)+'kgrou'+'nd:\x20r'+_0x5ca9e2(0x1a8)+_0x5ca9e2(0x26e)+_0x5ca9e2(0x42e)+',.04)'+';\x20box'+'-shad'+_0x5ca9e2(0x604)+_0x5ca9e2(0x10a)+'0\x200\x200'+'\x201px\x20'+_0x5ca9e2(0x41f)+'255,1'+'07,15'+'7,.28'+_0x5ca9e2(0x31c)+_0x5ca9e2(0x316)+_0x5ca9e2(0x5a6)+_0x5ca9e2(0x50b)+_0x5ca9e2(0x4ea)+'displ')+('ay:\x20f'+_0x5ca9e2(0x473)+_0x5ca9e2(0x55c)+_0x5ca9e2(0x287)+_0x5ca9e2(0x43b)+'nter;'+'\x20gap:'+_0x5ca9e2(0x29b)+'\x20padd'+'ing:\x20'+'11px\x20'+_0x5ca9e2(0x17d)+_0x5ca9e2(0x188)+_0x5ca9e2(0x67f)+'-card'+_0x5ca9e2(0x15e)+_0x5ca9e2(0x1a5)+'lex:\x20'+_0x5ca9e2(0x6ab)+'n-wid'+_0x5ca9e2(0x243)+_0x5ca9e2(0x59e)+'\x20\x20\x20.s'+_0x5ca9e2(0x3b0)+_0x5ca9e2(0x3e4)+_0x5ca9e2(0x2a5)+_0x5ca9e2(0x42a)+'{\x20fon'+'t-siz'+'e:\x2013'+_0x5ca9e2(0x493)+_0x5ca9e2(0x1c9)+_0x5ca9e2(0x166)+_0x5ca9e2(0x238)+';\x20col'+_0x5ca9e2(0x2c5)+_0x5ca9e2(0x1a8)+_0x5ca9e2(0x4cc)+_0x5ca9e2(0x4b9)+_0x5ca9e2(0x1eb)+_0x5ca9e2(0x59e)+'\x20\x20\x20.s'+_0x5ca9e2(0x3b0)+'d.on\x20'+'.sk-c'+'ard-t'+'itle\x20'+_0x5ca9e2(0x3e8)+_0x5ca9e2(0x3b7)+_0x5ca9e2(0x14a)+_0x5ca9e2(0x119)+_0x5ca9e2(0x232)+'}\x0a\x20\x20\x20'+_0x5ca9e2(0x488)+_0x5ca9e2(0x3ba)+_0x5ca9e2(0x5bb)+'dding'+':\x200\x201'+_0x5ca9e2(0x543)+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x5ca9e2(0x488)+'mdesc'+'\x20{\x20fo'+'nt-si'+_0x5ca9e2(0x222)+_0x5ca9e2(0x37b)+_0x5ca9e2(0x476)+'ty:\x20.'+_0x5ca9e2(0x351)+_0x5ca9e2(0x3c8)+'botto'+_0x5ca9e2(0x5ae)+_0x5ca9e2(0x5c9)+_0x5ca9e2(0x316)+_0x5ca9e2(0x52a)+_0x5ca9e2(0x4af)+_0x5ca9e2(0x562)+_0x5ca9e2(0x2d7)+_0x5ca9e2(0x361)+'lign-'+'items'+':\x20cen'+_0x5ca9e2(0x5d2)+'gap:\x20'+_0x5ca9e2(0x4eb)+_0x5ca9e2(0x374)+_0x5ca9e2(0x12c)+'px\x200;'+_0x5ca9e2(0x66b)+_0x5ca9e2(0x1ba)+_0x5ca9e2(0x51d)+_0x5ca9e2(0x465)+_0x5ca9e2(0x3b2)+_0x5ca9e2(0x488)+_0x5ca9e2(0x6ae)+_0x5ca9e2(0x38d)+'ex:\x201'+_0x5ca9e2(0x383)+_0x5ca9e2(0x2c5)+'gba(2'+_0x5ca9e2(0x4cc)+_0x5ca9e2(0x4b9)+',.75)'+_0x5ca9e2(0x59e)+_0x5ca9e2(0x59d)+_0x5ca9e2(0x1a1)+_0x5ca9e2(0x30e)+_0x5ca9e2(0x562)+_0x5ca9e2(0x164)+'ock;\x20'+'font-'+_0x5ca9e2(0x645)+'\x2010px'+';\x20opa'+_0x5ca9e2(0x490)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x5ca9e2(0x488)+'switc'+_0x5ca9e2(0x333)+'ositi'+_0x5ca9e2(0x42c)+_0x5ca9e2(0x588)+_0x5ca9e2(0x57e)+'idth:'+_0x5ca9e2(0x132)+';\x20hei'+_0x5ca9e2(0x277)+'14px;'+_0x5ca9e2(0x305)+_0x5ca9e2(0x109)+';\x20bor'+'der-r'+_0x5ca9e2(0x1fc)+':\x2099p'+'x;\x20ba'+'ckgro'+'und:\x20'+'rgba('+'255,2'+'55,25'+_0x5ca9e2(0x481)+_0x5ca9e2(0x28f)+_0x5ca9e2(0x632)+_0x5ca9e2(0x671)+_0x5ca9e2(0x5d2)+_0x5ca9e2(0x26a)+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+_0x5ca9e2(0x36d)+_0x5ca9e2(0x536)+_0x5ca9e2(0x5e9)+_0x5ca9e2(0x280)+_0x5ca9e2(0x101)+'\x20posi'+'tion:'+_0x5ca9e2(0x25f)+'lute;'+'\x20top:'+'\x203px;'+_0x5ca9e2(0x145)+_0x5ca9e2(0x38f)+';\x20wid'+_0x5ca9e2(0x589)+'px;\x20h'+'eight'+_0x5ca9e2(0x61f)+';\x20bor'+'der-r'+'adius'+_0x5ca9e2(0x3f8)+_0x5ca9e2(0x1e1)+_0x5ca9e2(0x689)+_0x5ca9e2(0x127)+'gba(2'+'55,25'+'5,255'+',.25)'+';\x20tra'+'nsiti'+'on:\x20l'+'eft\x20.'+_0x5ca9e2(0x46e)+_0x5ca9e2(0x64d)+'ound\x20'+_0x5ca9e2(0x49f)+_0x5ca9e2(0x3b2)+_0x5ca9e2(0x488)+_0x5ca9e2(0x3b9)+_0x5ca9e2(0x410)+'a-che'+_0x5ca9e2(0x2d3)+'\x22true'+_0x5ca9e2(0x323)+_0x5ca9e2(0x264)+'round'+_0x5ca9e2(0x3de))+(_0x5ca9e2(0x63b)+_0x5ca9e2(0x48c)+_0x5ca9e2(0x329)+_0x5ca9e2(0x286)+_0x5ca9e2(0x3b2)+_0x5ca9e2(0x488)+'switc'+_0x5ca9e2(0x410)+_0x5ca9e2(0x673)+_0x5ca9e2(0x2d3)+_0x5ca9e2(0x2e4)+_0x5ca9e2(0x46a)+_0x5ca9e2(0x1fe)+_0x5ca9e2(0x21c)+_0x5ca9e2(0x2f7)+'px;\x20b'+'ackgr'+_0x5ca9e2(0x634)+_0x5ca9e2(0x203)+_0x5ca9e2(0x4d2)+_0x5ca9e2(0x3b2)+_0x5ca9e2(0x488)+'field'+_0x5ca9e2(0x1d9)+'ckgro'+'und:\x20'+_0x5ca9e2(0x41f)+'255,2'+_0x5ca9e2(0x26e)+_0x5ca9e2(0x36f)+'5);\x20b'+'order'+':\x200;\x20'+_0x5ca9e2(0x1b9)+_0x5ca9e2(0x2bf)+_0x5ca9e2(0x67a)+_0x5ca9e2(0x22e)+'color'+':\x20#f6'+'eef2;'+'\x20padd'+_0x5ca9e2(0x2c0)+_0x5ca9e2(0x51e)+'px;\x20f'+_0x5ca9e2(0x5d4)+_0x5ca9e2(0x68a)+_0x5ca9e2(0x601)+_0x5ca9e2(0x154)+'tline'+':\x20non'+_0x5ca9e2(0x554)+_0x5ca9e2(0x665)+'dow:\x20'+_0x5ca9e2(0x13b)+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+_0x5ca9e2(0x430)+_0x5ca9e2(0x509)+_0x5ca9e2(0x424)+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x5ca9e2(0x64e)+_0x5ca9e2(0x2db)+_0x5ca9e2(0x636)+'ackgr'+'ound:'+_0x5ca9e2(0x5cd)+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x5ca9e2(0x432)+_0x5ca9e2(0x5ca)+_0x5ca9e2(0x262)+_0x5ca9e2(0x1b5)+'x;\x20al'+_0x5ca9e2(0x28c)+_0x5ca9e2(0x33c)+_0x5ca9e2(0x1e5)+_0x5ca9e2(0x230)+_0x5ca9e2(0x214)+'px;\x20}'+_0x5ca9e2(0x4e6)+_0x5ca9e2(0x64b)+_0x5ca9e2(0x401)+_0x5ca9e2(0x4e3)+_0x5ca9e2(0x1e7)+'-appe'+_0x5ca9e2(0x1bd)+'e:\x20no'+'ne;\x20a'+_0x5ca9e2(0x393)+_0x5ca9e2(0x1b1)+'\x20none'+_0x5ca9e2(0x55d)+_0x5ca9e2(0x379)+_0x5ca9e2(0x121)+'heigh'+_0x5ca9e2(0x359)+'x;\x20ba'+'ckgro'+'und:\x20'+_0x5ca9e2(0x337)+_0x5ca9e2(0x48b)+_0x5ca9e2(0x670)+_0x5ca9e2(0x316)+'sk-sl'+_0x5ca9e2(0x451)+_0x5ca9e2(0x676)+'kit-s'+'lider'+'-runn'+'able-'+'track'+_0x5ca9e2(0x15c)+'ight:'+'\x202px;'+_0x5ca9e2(0x305)+'er-ra'+_0x5ca9e2(0x691)+'\x202px;'+'\x20back'+'groun'+_0x5ca9e2(0x4a9)+'near-'+'gradi'+'ent(#'+'ff6b9'+'d,\x20#f'+_0x5ca9e2(0x25d)+_0x5ca9e2(0x52f)+_0x5ca9e2(0x6a9)+'r(--p'+_0x5ca9e2(0x631)+_0x5ca9e2(0x492)+'%\x20no-'+'repea'+'t,\x20rg'+_0x5ca9e2(0x36b)+'5,255'+_0x5ca9e2(0x5a1)+_0x5ca9e2(0x330)+_0x5ca9e2(0x188)+'\x20\x20.sk'+'-slid'+_0x5ca9e2(0x224)+_0x5ca9e2(0x2c7)+_0x5ca9e2(0x404)+_0x5ca9e2(0x200)+'humb\x20'+'{\x20-we'+_0x5ca9e2(0x261)+_0x5ca9e2(0x2ca)+_0x5ca9e2(0x3ea)+':\x20non'+_0x5ca9e2(0x468)+_0x5ca9e2(0x267)+_0x5ca9e2(0x22e)+'heigh'+_0x5ca9e2(0x3d2)+_0x5ca9e2(0x4fa)+'rgin-'+_0x5ca9e2(0x327)+_0x5ca9e2(0x3ca)+'\x20bord'+_0x5ca9e2(0x65e)+'dius:'+_0x5ca9e2(0x1a9)+'\x20back'+_0x5ca9e2(0x3f2)+_0x5ca9e2(0x600)+_0x5ca9e2(0x25d)+_0x5ca9e2(0x59e)+'\x20\x20\x20.s'+'k-val'+_0x5ca9e2(0x403)+'nt-si'+_0x5ca9e2(0x222)+'1px;\x20'+_0x5ca9e2(0x486)+'weigh'+'t:\x2060'+_0x5ca9e2(0x44f)+_0x5ca9e2(0x487)+_0x5ca9e2(0x2cd)+_0x5ca9e2(0x4eb)+'text-'+_0x5ca9e2(0x55c)+_0x5ca9e2(0x36e)+_0x5ca9e2(0x45f)+_0x5ca9e2(0x14a)+_0x5ca9e2(0x27d)+_0x5ca9e2(0x474)+_0x5ca9e2(0x124)+_0x5ca9e2(0x496)+');\x20}\x0a'+_0x5ca9e2(0x316)+_0x5ca9e2(0x62e)+_0x5ca9e2(0x1dd))+('\x20widt'+_0x5ca9e2(0x2f3)+_0x5ca9e2(0x681)+'eight'+_0x5ca9e2(0x5fd)+_0x5ca9e2(0x13e)+_0x5ca9e2(0x1c1)+_0x5ca9e2(0x667)+_0x5ca9e2(0x2d1)+'-radi'+_0x5ca9e2(0x3c4)+_0x5ca9e2(0x4d7)+_0x5ca9e2(0x64d)+_0x5ca9e2(0x634)+'\x20none'+';\x20pad'+_0x5ca9e2(0x3c5)+_0x5ca9e2(0x540)+'ursor'+_0x5ca9e2(0x639)+'nter;'+_0x5ca9e2(0x188)+'\x20\x20.sk'+_0x5ca9e2(0x4a1)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+_0x5ca9e2(0x37b)+_0x5ca9e2(0x148)+':\x20rgb'+_0x5ca9e2(0x534)+_0x5ca9e2(0x43e)+'242,.'+_0x5ca9e2(0x3df)+'addin'+'g:\x202p'+_0x5ca9e2(0x284)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x5ca9e2(0x570)+'err\x20{'+'\x20colo'+'r:\x20#f'+_0x5ca9e2(0x24b)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x5ca9e2(0x289)+_0x5ca9e2(0x247)+_0x5ca9e2(0x105)+_0x5ca9e2(0x12f)+'flex-'+_0x5ca9e2(0x1f9)+_0x5ca9e2(0x4f8)+'der:\x20'+_0x5ca9e2(0x41d)+_0x5ca9e2(0x27b)+'radiu'+_0x5ca9e2(0x1b6)+'x;\x20pa'+_0x5ca9e2(0x48d)+':\x208px'+_0x5ca9e2(0x270)+_0x5ca9e2(0x1e1)+'kgrou'+_0x5ca9e2(0x19e)+_0x5ca9e2(0x58b)+'d;\x20co'+'lor:\x20'+_0x5ca9e2(0x649)+_0x5ca9e2(0x66b)+'-size'+_0x5ca9e2(0x51d)+_0x5ca9e2(0x465)+_0x5ca9e2(0x486)+_0x5ca9e2(0x653)+'t:\x2070'+_0x5ca9e2(0xf3)+_0x5ca9e2(0x632)+'\x20poin'+_0x5ca9e2(0x5d2)+_0x5ca9e2(0x3b2)+'\x20.sk-'+'btn:h'+'over\x20'+'{\x20fil'+'ter:\x20'+_0x5ca9e2(0x698)+_0x5ca9e2(0x182)+_0x5ca9e2(0x436)+_0x5ca9e2(0x59e)+_0x5ca9e2(0x2ad));window[_0x5ca9e2(0x21d)+_0x5ca9e2(0x450)+'stene'+'r'](_0xe7ce06['sfRfy'],_0x1844b3=>{var _0x43a4c9=_0x5ca9e2;_0x1844b3[_0x43a4c9(0x417)]===_0x1eb033[_0x43a4c9(0x1f1)]&&(_0x43a4c9(0x546)==='zPvSO'?(_0x1844b3['preve'+_0x43a4c9(0x593)+_0x43a4c9(0x5d1)](),_0x5f1366()):(_0xae9547[_0x43a4c9(0x319)+'rokes']=_0xa5754b,_0x1b21dd()));},!![]);var _0x463e45=document[_0x5ca9e2(0x209)+'eElem'+_0x5ca9e2(0x10e)]('div');_0x463e45[_0x5ca9e2(0x60e)][_0x5ca9e2(0x5d7)+'xt']=_0xe7ce06['rykpm'],_0x463e45[_0x5ca9e2(0x23e)+_0x5ca9e2(0x211)]=_0xe7ce06['BNnyA'],_0x463e45[_0x5ca9e2(0x30c)]='Sakur'+'a\x20Kou'+'r',_0x463e45['onmou'+_0x5ca9e2(0x16e)+'er']=()=>_0x463e45[_0x5ca9e2(0x60e)]['opaci'+'ty']='1',_0x463e45[_0x5ca9e2(0x484)+_0x5ca9e2(0x2b2)+'ve']=()=>_0x463e45['style']['opaci'+'ty']='0.5',_0x463e45[_0x5ca9e2(0x304)+'ck']=_0x46dbc5=>{var _0x4db788=_0x5ca9e2;_0x46dbc5['stopP'+_0x4db788(0x187)+_0x4db788(0x4dc)](),_0xe7ce06[_0x4db788(0x113)](_0x5f1366);},document['body']['appen'+'dChil'+'d'](_0x463e45),_0xe7ce06[_0x5ca9e2(0x475)](_0x51f36d),requestAnimationFrame(_0x2d4b02),console[_0x5ca9e2(0x5de)]('[saku'+'ra-ko'+'ur]\x20m'+_0x5ca9e2(0x3e3)+_0x5ca9e2(0x20d)+_0x5ca9e2(0x6a1)+':',_0x5dfee3[_0x5ca9e2(0x2e0)]);});})()));
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
