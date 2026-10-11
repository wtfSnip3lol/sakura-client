// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.1
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
(function(_0x3d117e,_0xf08005){var _0xdc5de5=_0x312f,_0x252e20=_0x3d117e();while(!![]){try{var _0x3fa202=parseInt(_0xdc5de5(0x3b8))/(0x38*-0x80+-0x72d+-0x1197*-0x2)+parseInt(_0xdc5de5(0x313))/(-0x35a*0x3+-0x1733+-0x5*-0x6a7)+parseInt(_0xdc5de5(0xa6))/(-0x3*-0x419+0x2215+-0x2e5d)+parseInt(_0xdc5de5(0x150))/(-0x191*-0x4+0x326*0x6+-0x4*0x649)+-parseInt(_0xdc5de5(0x42d))/(-0x1*0x43b+0x26+0x41a)+parseInt(_0xdc5de5(0x515))/(-0x92b*-0x2+-0x1ac6+0x876)+-parseInt(_0xdc5de5(0x3fa))/(-0x1c15+0x23ca+-0x7ae);if(_0x3fa202===_0xf08005)break;else _0x252e20['push'](_0x252e20['shift']());}catch(_0x883f3c){_0x252e20['push'](_0x252e20['shift']());}}}(_0x1ac5,0x6814c+0x11e262+0x116*-0xb5c),((()=>{'use strict';var _0x1af4c4=_0x312f,_0x50128c={'LhRuz':function(_0xb4de8,_0x58a081){return _0xb4de8(_0x58a081);},'lsxdM':function(_0x32c979,_0x42e2b2){return _0x32c979*_0x42e2b2;},'nZFLu':function(_0x182ad0,_0x1d2a48){return _0x182ad0-_0x1d2a48;},'JutfB':function(_0xda09d6,_0x3a412d){return _0xda09d6+_0x3a412d;},'RkVIi':function(_0x46bcbe,_0x8b0773){return _0x46bcbe+_0x8b0773;},'CCmOE':function(_0x10cf6f,_0x5082f7){return _0x10cf6f*_0x5082f7;},'kVZte':function(_0x56de80,_0x528897){return _0x56de80+_0x528897;},'kHvnI':'\x20@\x20','hcSUs':function(_0xb6be92,_0x2013bb){return _0xb6be92>_0x2013bb;},'BNMxb':function(_0x14ae57){return _0x14ae57();},'xQxtd':function(_0x22b15f,_0x5c767b){return _0x22b15f!==_0x5c767b;},'frkez':function(_0x3ddf90,_0x41a2ca){return _0x3ddf90===_0x41a2ca;},'NVigh':_0x1af4c4(0x472),'ADbaJ':_0x1af4c4(0x4e6),'wBmZt':function(_0x165fa3,_0x1b2cd0){return _0x165fa3!=_0x1b2cd0;},'bQTQU':function(_0x37e995,_0x292c52){return _0x37e995===_0x292c52;},'esuiv':_0x1af4c4(0x2c0)+'t','STXQg':function(_0x9c9dd8){return _0x9c9dd8();},'OkmGD':'[saku'+_0x1af4c4(0xc2)+_0x1af4c4(0x410)+'ook\x20r'+_0x1af4c4(0x3e3)+'iled:','VcYhh':_0x1af4c4(0x3f3)+'a.kou'+'r.v1','knJwn':_0x1af4c4(0x5ed)+_0x1af4c4(0x587),'mIjOZ':'#fff','sqOgH':function(_0x25cf38,_0x5ee4dd){return _0x25cf38/_0x5ee4dd;},'KaAkw':function(_0x34c2fc,_0x257169){return _0x34c2fc*_0x257169;},'IFTLc':function(_0xb91c26,_0x2997c4){return _0xb91c26===_0x2997c4;},'yzRVl':_0x1af4c4(0x1cb),'FzhBd':function(_0x5c534e,_0x84fc68){return _0x5c534e+_0x84fc68;},'QZIeZ':'mouse'+'3','cAdfi':'iMKTt','KOiOw':function(_0x6f90d8){return _0x6f90d8();},'HKKEX':_0x1af4c4(0x55a),'jqdtS':'switc'+'h','GlMtF':_0x1af4c4(0x260)+'n','gWYoT':_0x1af4c4(0x42b)+'check'+'ed','HdEVy':function(_0x223ce9,_0x58733e){return _0x223ce9(_0x58733e);},'rGfdf':function(_0x58f209,_0xb6035c){return _0x58f209(_0xb6035c);},'LwITT':function(_0x29761d,_0x51568f){return _0x29761d/_0x51568f;},'OsKNk':function(_0x4115c3,_0x3c47a0){return _0x4115c3&&_0x3c47a0;},'KzFHA':function(_0x47a4ef,_0x337172){return _0x47a4ef<_0x337172;},'VbceZ':'xCBGw','WUNFg':_0x1af4c4(0x4f4),'wzZtt':function(_0x3caa0f,_0x1bf8ab,_0x1d2f1b,_0x3881ea,_0x2bed86){return _0x3caa0f(_0x1bf8ab,_0x1d2f1b,_0x3881ea,_0x2bed86);},'MQwBC':function(_0x306b0f,_0x454ccd,_0x2cac2c,_0x851910,_0x5ab76b){return _0x306b0f(_0x454ccd,_0x2cac2c,_0x851910,_0x5ab76b);},'mTSri':function(_0x55e0ab,_0x1d15b1){return _0x55e0ab!==_0x1d15b1;},'veQeg':'DuDYC','eCzPg':function(_0x4ac364,_0x2d1685,_0x520e4c){return _0x4ac364(_0x2d1685,_0x520e4c);},'QWuFe':'i32','FWKtO':function(_0x22005a,_0x2b5f90){return _0x22005a>_0x2b5f90;},'CJVkk':_0x1af4c4(0xc0),'Knlyd':'keyup','GcZzd':'blur','bRllm':function(_0x1523b0,_0x19e47d){return _0x1523b0-_0x19e47d;},'haUik':_0x1af4c4(0x298)+_0x1af4c4(0x4ca)+'e','OEArR':_0x1af4c4(0x252),'CFZxw':'none','yKgfk':function(_0x41abae,_0x36c965){return _0x41abae*_0x36c965;},'MvaSD':function(_0x7dba5d,_0x19a700){return _0x7dba5d*_0x19a700;},'KfmMl':function(_0x2fc8c4,_0xde1921){return _0x2fc8c4*_0xde1921;},'TOFZV':function(_0x42068a,_0x5baabb){return _0x42068a-_0x5baabb;},'qysvS':function(_0x3aa2ef,_0x3c16eb){return _0x3aa2ef+_0x3c16eb;},'oFhCq':function(_0x45e5cb,_0x5aa8c5,_0x1691da,_0x172248,_0x8443c3,_0x45d2bd,_0x56c953){return _0x45e5cb(_0x5aa8c5,_0x1691da,_0x172248,_0x8443c3,_0x45d2bd,_0x56c953);},'AXncP':function(_0x49d5e5,_0x2cb0c2){return _0x49d5e5+_0x2cb0c2;},'BkHDb':function(_0x5be8df,_0x431347){return _0x5be8df+_0x431347;},'jIHfR':function(_0xd2a20e,_0x8d0cf2){return _0xd2a20e+_0x8d0cf2;},'lKaQd':function(_0xc9652f,_0x29db43){return _0xc9652f+_0x29db43;},'SCGtZ':function(_0x33f12f,_0x144784,_0x53d816,_0x43abc4,_0x3e5993,_0x49320b,_0x33535e,_0xf53f58){return _0x33f12f(_0x144784,_0x53d816,_0x43abc4,_0x3e5993,_0x49320b,_0x33535e,_0xf53f58);},'cMejm':function(_0x526a97,_0x2fd013){return _0x526a97+_0x2fd013;},'fwSCk':_0x1af4c4(0x39f),'BHHPY':function(_0x3d4810,_0x3ae161){return _0x3d4810(_0x3ae161);},'KeSQw':_0x1af4c4(0x21e),'YRIzs':function(_0xd24135,_0x412d4a){return _0xd24135+_0x412d4a;},'YRZZf':function(_0x4189e4,_0x47e3bb){return _0x4189e4+_0x47e3bb;},'bCyqU':_0x1af4c4(0x503),'UReDK':_0x1af4c4(0x2c6),'VQFBt':_0x1af4c4(0x545)+_0x1af4c4(0x32a)+'1|0','fVylM':function(_0x536dd4,_0x2cb9e0){return _0x536dd4(_0x2cb9e0);},'gKxDn':'0|1|5'+_0x1af4c4(0x26a)+'2','HXLqX':_0x1af4c4(0xea)+_0x1af4c4(0x1c6),'yDCfQ':'optio'+'n','ybGhB':'sk-no'+'te','JhWCy':_0x1af4c4(0x1f6)+_0x1af4c4(0x21a),'WHaSy':'div','XRMcA':'\x20on','zFdMx':_0x1af4c4(0x598)+'MODE\x20'+_0x1af4c4(0x3ce)+_0x1af4c4(0x530)+'only,'+'\x20no\x20h'+_0x1af4c4(0x446)+_0x1af4c4(0x565)+'ad\x20to'+'\x20exit'+')','gqLjJ':function(_0x54d09a,_0x2ee49a){return _0x54d09a+_0x2ee49a;},'SmbgY':function(_0xceeb06,_0x4dd2cf){return _0xceeb06+_0x4dd2cf;},'Eengy':function(_0x1036bc,_0x2cf033){return _0x1036bc+_0x2cf033;},'IqPtQ':function(_0x1b5aa9,_0x4b669b){return _0x1b5aa9+_0x4b669b;},'NDKKU':_0x1af4c4(0x170)+'bound'+'\x20','yKTGX':'\x20hook'+'s','Mfakf':'\x20|\x20ga'+'me\x20','JSNHf':'loadi'+'ng','OkWsi':_0x1af4c4(0x52e)+_0x1af4c4(0x32e)+'\x20','mPAzj':_0x1af4c4(0x4b5),'HkBjG':_0x1af4c4(0x55b)+_0x1af4c4(0x3c5)+'t\x20','GKhDm':'240\x20F'+_0x1af4c4(0x18e)+_0x1af4c4(0x9f),'sBfNc':function(_0x1e9e5c){return _0x1e9e5c();},'fXaIz':function(_0x1fd851,_0x1d46f9){return _0x1fd851+_0x1d46f9;},'WRTxc':_0x1af4c4(0x4e9)+_0x1af4c4(0x18a)+'07,15'+'7,0.8'+'5)','Tmtpv':function(_0xcdbba9,_0x20e39d){return _0xcdbba9/_0x20e39d;},'iztUN':_0x1af4c4(0x505)+'r','AOafF':function(_0x597c75,_0x26dfac){return _0x597c75-_0x26dfac;},'rBcUL':_0x1af4c4(0x194),'nPcMB':_0x1af4c4(0x58f),'WowLh':function(_0x34c0c1,_0x57f5d2){return _0x34c0c1(_0x57f5d2);},'PHAXK':function(_0xf6e51c,_0x5b90e3){return _0xf6e51c-_0x5b90e3;},'dhOSK':function(_0x3c750a,_0x19777d){return _0x3c750a!==_0x19777d;},'WlBSi':function(_0x55cde3){return _0x55cde3();},'CjmWs':function(_0x4c11db,_0x181f65){return _0x4c11db<_0x181f65;},'oUFnv':_0x1af4c4(0x88)+_0x1af4c4(0x156),'vgGGz':'Zeroe'+'s\x20spr'+'ead\x20a'+_0x1af4c4(0x5cd)+_0x1af4c4(0x38f)+_0x1af4c4(0xa3)+'cy\x20on'+'\x20your'+_0x1af4c4(0x59e)+_0x1af4c4(0x390)+_0x1af4c4(0x130)+'00ms.','dbldb':'Overw'+_0x1af4c4(0x285)+_0x1af4c4(0x177)+_0x1af4c4(0x43c)+'eapon'+'\x20dama'+_0x1af4c4(0x196)+_0x1af4c4(0x15a)+_0x1af4c4(0x3a7)+'\x20the\x20'+'serve'+'r\x20val'+_0x1af4c4(0x4f5)+'s.','bkBTy':_0x1af4c4(0x534)+_0x1af4c4(0x411)+'vity','VDCEL':function(_0x4f5c3c,_0x411572,_0xef6b82,_0x53b7c5){return _0x4f5c3c(_0x411572,_0xef6b82,_0x53b7c5);},'mohyW':'Gravi'+_0x1af4c4(0x57b),'cdZmF':function(_0x59dcf4,_0x24e59b,_0x37b905){return _0x59dcf4(_0x24e59b,_0x37b905);},'tIcCe':_0x1af4c4(0x2a9)+_0x1af4c4(0x33d)+_0x1af4c4(0x116)+_0x1af4c4(0x4d2)+_0x1af4c4(0x58e)+_0x1af4c4(0x4e2)+_0x1af4c4(0x569)+'.','LtdiQ':'Appli'+'es\x20on'+'\x20relo'+_0x1af4c4(0x1d5)+_0x1af4c4(0x53b)+'ches\x20'+_0x1af4c4(0x11d)+'in\x20sa'+'fe\x20mo'+'de,\x20t'+_0x1af4c4(0x386)+'eeze\x20'+_0x1af4c4(0x1d0)+_0x1af4c4(0xee)+'lated'+_0x1af4c4(0x554)+_0x1af4c4(0x547)+_0x1af4c4(0x1f9)+'hooks'+_0x1af4c4(0x169)+'ied\x20c'+'ount.','vMvVj':function(_0x137f5a,_0x87120d,_0x3454ba,_0x13ae27,_0x24fb0b,_0x12cbf4){return _0x137f5a(_0x87120d,_0x3454ba,_0x13ae27,_0x24fb0b,_0x12cbf4);},'mfoHB':_0x1af4c4(0x4cf)+'e\x20(OH'+_0x1af4c4(0x37a)+_0x1af4c4(0x4fe)+'lDie)','pUPgZ':_0x1af4c4(0x138)+_0x1af4c4(0x348)+_0x1af4c4(0x113)+'eRunn'+'ing\x20+'+_0x1af4c4(0x481)+_0x1af4c4(0x1af)+'d)','KFlqQ':_0x1af4c4(0x5c2)+_0x1af4c4(0x3e8)+'/rapi'+'d\x20gre'+'atly\x20'+_0x1af4c4(0x18c)+_0x1af4c4(0x1a0)+_0x1af4c4(0x223)+_0x1af4c4(0xf5)+'with\x20'+'this\x20'+_0x1af4c4(0x1d4),'UkSJg':_0x1af4c4(0x1f5)+'my\x20se'+'tting'+'s','bMqRr':_0x1af4c4(0x3b1),'dDNGt':'Sakur'+_0x1af4c4(0x240)+'r','uHHIm':_0x1af4c4(0x26b)+_0x1af4c4(0x1ee)+_0x1af4c4(0x2b8)+'enu','WcZBh':function(_0x194ef7,_0x8f34a){return _0x194ef7+_0x8f34a;},'bQQym':function(_0x57abc7,_0x54b08c){return _0x57abc7>_0x54b08c;},'kvTjO':function(_0x5811e8,_0x4c58e6,_0x46e0fd){return _0x5811e8(_0x4c58e6,_0x46e0fd);},'ckIcd':_0x1af4c4(0x3f3)+_0x1af4c4(0x373)+_0x1af4c4(0x251)+'v1','TkkUF':'Comba'+'t','XmvVL':_0x1af4c4(0x453),'fwOBT':'posit'+'ion:f'+_0x1af4c4(0x337)+_0x1af4c4(0x541)+'2px;r'+'ight:'+_0x1af4c4(0x15d)+_0x1af4c4(0x59d)+_0x1af4c4(0x394)+_0x1af4c4(0x413)+'646;c'+_0x1af4c4(0x1ff)+_0x1af4c4(0x2a8)+_0x1af4c4(0xc1)+_0x1af4c4(0x41e)+_0x1af4c4(0x4af)+'heigh'+_0x1af4c4(0x491)+_0x1af4c4(0x5ea)+_0x1af4c4(0x437)+_0x1af4c4(0x1a6)+_0x1af4c4(0xb6)+_0x1af4c4(0x10b)+_0x1af4c4(0xa2)+_0x1af4c4(0x525)+_0x1af4c4(0x381)+'inter'+_0x1af4c4(0x17a)+_0x1af4c4(0x3dc)+_0x1af4c4(0xaa)+_0x1af4c4(0x2ae)+'drop-'+'shado'+_0x1af4c4(0x20f)+'\x204px\x20'+'rgba('+'255,1'+_0x1af4c4(0x2d5)+_0x1af4c4(0x367)+'))','hkkfE':function(_0x28d73c,_0x216a89){return _0x28d73c(_0x216a89);},'uqcoW':_0x1af4c4(0x4be)+'9d','HUlrG':_0x1af4c4(0x2eb),'zImfT':'IXiwu','riwON':'Assem'+_0x1af4c4(0x30f)+_0x1af4c4(0x4d0)+_0x1af4c4(0xe8),'SWZWX':function(_0x42be9a,_0x1d6e77,_0x1e9806,_0xd30a13,_0x2e72a9,_0x5d94a0,_0x206b71,_0x15f824){return _0x42be9a(_0x1d6e77,_0x1e9806,_0xd30a13,_0x2e72a9,_0x5d94a0,_0x206b71,_0x15f824);},'PUBFx':'god','QRiwF':'OHeal'+'th','dWQtw':_0x1af4c4(0x26d)+'oil','LBxmg':_0x1af4c4(0x2b0)+_0x1af4c4(0x403)+'forms'+_0x1af4c4(0x5e1)+_0x1af4c4(0x1b6)+'Recoi'+'lMoti'+'on','BGEHM':_0x1af4c4(0x579)+'ooter','lWkHo':'SetGa'+_0x1af4c4(0x5d6)+_0x1af4c4(0x312),'eNOJK':_0x1af4c4(0x30a)+'ve','AIgzI':function(_0x26e1a3,_0x11bf28){return _0x26e1a3===_0x11bf28;},'aIQFg':'aZnGa','WAFub':'[saku'+_0x1af4c4(0xc2)+'ur]\x20U'+_0x1af4c4(0x4c9)+_0x1af4c4(0xe6)+_0x1af4c4(0xe9)+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1af4c4(0x5cb)](location[_0x1af4c4(0x48d)+_0x1af4c4(0x19b)]||''))return;if(window[_0x1af4c4(0x2c4)+_0x1af4c4(0x55e)+_0x1af4c4(0x1b9)])return;window['__SAK'+_0x1af4c4(0x55e)+'OUR__']=!![];var _0x19a4b0=_0x50128c[_0x1af4c4(0x168)],_0x322a48=_0x1af4c4(0x5c6)+'c6',_0x29206e={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x50128c[_0x1af4c4(0x168)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x33347f={..._0x29206e};try{if(_0x50128c[_0x1af4c4(0x32f)](_0x50128c['HUlrG'],_0x1af4c4(0x2eb))){var _0x47cb2a=_0x5c0cfe[_0x1af4c4(0x5b1)]/(0xb5c+0xb0c+-0x1666),_0x5aa5f1=_0x4e5167['heigh'+'t']/(0x10b9+-0x23e2+0x132b*0x1),_0x2d4034=_0x50128c['LhRuz'](_0x3767d2,_0x41d009[_0x1af4c4(0xb1)+'e'])||-0x149b+-0x84f+0x1ceb,_0x29d270=/^#[0-9a-f]{6}$/i['test'](_0x454f13[_0x1af4c4(0x460)+'or'])?_0x183b84['chCol'+'or']:'#ff6b'+'9d';_0x1e019a['save'](),_0x34bdfd[_0x1af4c4(0x20c)+_0x1af4c4(0x2bb)+'e']=_0x29d270,_0x59f76d[_0x1af4c4(0xc8)+_0x1af4c4(0x2d9)]=_0x29d270,_0x25e963['lineW'+_0x1af4c4(0x44a)]=_0xb5cab6['max'](0x2*-0x10f7+-0x1*0x245c+-0x3b*-0x131+0.5,_0x50128c['lsxdM'](-0x11e2+-0x1324+-0x2508*-0x1,_0x2d4034)),_0x2b5d11[_0x1af4c4(0x20e)+_0x1af4c4(0x234)+'r']=_0x29d270,_0x3e7ec8['shado'+_0x1af4c4(0x57f)]=0x1f0+0x22db+-0x24c5;var _0x17d930=_0x50128c[_0x1af4c4(0x2e5)](-0x3*-0xa8e+0x24f0+-0x4494,_0x2d4034),_0x56fb4d=(-0x1884+0x15f4+0x298)*_0x2d4034;_0x8a89b[_0x1af4c4(0x3b7)+_0x1af4c4(0x317)](),_0x3da34b['moveT'+'o'](_0x50128c[_0x1af4c4(0x4bb)](_0x47cb2a-_0x17d930,_0x56fb4d),_0x5aa5f1),_0x55dbb8[_0x1af4c4(0x548)+'o'](_0x47cb2a-_0x17d930,_0x5aa5f1),_0x2d3549['moveT'+'o'](_0x50128c[_0x1af4c4(0x316)](_0x47cb2a,_0x17d930),_0x5aa5f1),_0x44ab43[_0x1af4c4(0x548)+'o'](_0x50128c[_0x1af4c4(0x316)](_0x47cb2a,_0x17d930)+_0x56fb4d,_0x5aa5f1),_0x499feb[_0x1af4c4(0x4ec)+'o'](_0x47cb2a,_0x50128c[_0x1af4c4(0x4bb)](_0x5aa5f1,_0x17d930)-_0x56fb4d),_0x51eccd[_0x1af4c4(0x548)+'o'](_0x47cb2a,_0x5aa5f1-_0x17d930),_0x3ece9a['moveT'+'o'](_0x47cb2a,_0x5aa5f1+_0x17d930),_0x1f70d3[_0x1af4c4(0x548)+'o'](_0x47cb2a,_0x50128c[_0x1af4c4(0x4fd)](_0x5aa5f1,_0x17d930)+_0x56fb4d),_0x26d1e6[_0x1af4c4(0x20c)+'e'](),_0x1169d3['begin'+_0x1af4c4(0x317)](),_0x40ab22['arc'](_0x47cb2a,_0x5aa5f1,_0x50128c[_0x1af4c4(0x37c)](-0xb7b*0x3+0x167*-0xd+0x57*0x9b+0.6000000000000001,_0x2d4034),-0x1807+-0x2131*0x1+0x3938,_0x52385b['PI']*(-0x927+-0x21cc+-0x1*-0x2af5)),_0x411ae8[_0x1af4c4(0x5dc)](),_0x192e5d[_0x1af4c4(0x350)+'re']();}else Object[_0x1af4c4(0x494)+'n'](_0x33347f,JSON[_0x1af4c4(0x13d)](localStorage['getIt'+'em'](_0x1af4c4(0x3f3)+_0x1af4c4(0x373)+'r.v1')||'{}'));}catch(_0x5f02ca){}function _0x588328(){var _0x2a0472=_0x1af4c4;try{'tSRTH'==='tSRTH'?localStorage[_0x2a0472(0x141)+'em'](_0x2a0472(0x3f3)+'a.kou'+'r.v1',JSON[_0x2a0472(0x246)+'gify'](_0x33347f)):_0x548a43['enabl'+'ed']=!!_0x59282d;}catch(_0x29ae28){}}var _0x5a1816={'uwmk':!!window['Unity'+'WebMo'+_0x1af4c4(0x29a)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x33347f['safeM'+_0x1af4c4(0x2b9)],'lastError':''};try{window[_0x1af4c4(0x564)+'entLi'+_0x1af4c4(0x2b5)+'r'](_0x1af4c4(0x4b4),_0xd8e206=>{var _0x289d80=_0x1af4c4;try{var _0x52e27c=_0xd8e206&&(_0xd8e206['messa'+'ge']||_0xd8e206['error']&&_0xd8e206[_0x289d80(0x4b4)][_0x289d80(0x1d2)+'ge'])||'unkno'+'wn';if(_0xd8e206&&_0xd8e206['filen'+_0x289d80(0x19b)])_0x52e27c+=_0x50128c['JutfB'](_0x50128c[_0x289d80(0x52f)](_0x50128c['kHvnI'],String(_0xd8e206['filen'+_0x289d80(0x19b)])[_0x289d80(0x1b4)]('/')[_0x289d80(0x41f)]()),':')+(_0xd8e206[_0x289d80(0x34e)+'o']||'?');_0x5a1816[_0x289d80(0x272)+_0x289d80(0x2d8)]=String(_0x52e27c)[_0x289d80(0x536)](-0x22aa+-0xceb*0x3+-0x37f*-0x15,-0x2199+-0x21e6+0x441f);}catch(_0x481872){}});}catch(_0x3bf060){}var _0x6aa59d=null,_0x17c344=null,_0xb8c203={},_0x541a32=[],_0x31c38e=[],_0x4fb9f1=new Map();function _0x33cf8a(_0x1ddfad,_0x557ecc){var _0x48f3de=_0x1af4c4;if(!_0x557ecc||_0x1ddfad['inclu'+_0x48f3de(0x3d9)](_0x557ecc)||_0x50128c[_0x48f3de(0xc3)](_0x1ddfad['lengt'+'h'],-0x2255+-0x1*0xd17+-0x1*-0x2fac))return;_0x1ddfad[_0x48f3de(0x1a3)](_0x557ecc);}function _0x27007a(_0x3d4516,_0x205b80,_0x250186,_0x2d13c8){var _0xcb47cd=_0x1af4c4,_0x1a5409=0x1*0x2c3+0x2*0x10c7+-0x2451;try{'taXsu'===_0xcb47cd(0x2d0)?(_0x52d4dc[_0xcb47cd(0x5b8)]=_0x458562,_0x50128c['BNMxb'](_0x41ec44)):_0x1a5409=_0x205b80&&_0x205b80[_0xcb47cd(0x2b2)]?_0x205b80[_0xcb47cd(0x2b2)]():0x6a3*-0x5+-0x2*0x11a2+0x4473;}catch(_0x288550){}if(!_0x1a5409)return;_0x33cf8a(_0x3d4516,_0x1a5409),_0x250186[_0x2d13c8]=_0x3d4516['lengt'+'h'];if(_0x2d13c8===_0xcb47cd(0x5ed)+'ents'&&_0x3d4516[_0xcb47cd(0x296)+'h']){var _0x5c2870=_0xb8c203['capMo'+'ve'];if(_0x5c2870)try{_0x5c2870[_0xcb47cd(0x15f)+'ed']=![];}catch(_0x22ebe5){}}}function _0x80787e(_0x3cc40d,_0x5bd9a1,_0x72b86){var _0x5eb7b8=_0x1af4c4,_0x5020cd=_0x4fb9f1[_0x5eb7b8(0x3d5)](_0x3cc40d);!_0x5020cd&&(_0x5020cd=new Map(),_0x4fb9f1[_0x5eb7b8(0x160)](_0x3cc40d,_0x5020cd));if(!_0x5020cd[_0x5eb7b8(0x56d)](_0x5bd9a1))try{var _0x546ab0=new _0x6aa59d(_0x3cc40d)['readF'+'ield'](_0x5bd9a1,_0x72b86);_0x5020cd['set'](_0x5bd9a1,_0x50128c[_0x5eb7b8(0x4f3)](_0x546ab0,undefined)?_0x546ab0[_0x5eb7b8(0x2b2)]():null);}catch(_0xcf186e){_0x5020cd['set'](_0x5bd9a1,null);}return _0x5020cd['get'](_0x5bd9a1);}function _0x5dda48(_0x202168,_0x2ad008,_0x170570,_0x32dd52){var _0xeefdc3=_0x1af4c4,_0xbca391={'ZVKvo':function(_0x2cad84){return _0x2cad84();}};try{_0x50128c[_0xeefdc3(0x5ce)](_0x50128c['NVigh'],_0xeefdc3(0x472))?new _0x6aa59d(_0x202168)[_0xeefdc3(0x1b8)+_0xeefdc3(0xf0)](_0x2ad008,_0x170570,_0x32dd52):(_0x1c9418['ksCps']=_0x529ce3,_0xbca391[_0xeefdc3(0x5e0)](_0xb3dbe4));}catch(_0x3fa8b3){}}function _0x506003(_0x15875d,_0x427cfa){var _0x1bf020=_0x1af4c4;try{var _0x18f645=new _0x6aa59d(_0x15875d)['readF'+_0x1bf020(0x342)](_0x427cfa,_0x1bf020(0x303));return _0x18f645?_0x18f645['val']():-0x25b1+0x11*-0x166+-0x3d77*-0x1;}catch(_0x186784){if(_0x1bf020(0x4b3)!==_0x50128c[_0x1bf020(0x36a)])return 0x1bb6+-0x2469+0x8b3;else _0x29c5cc['speed'+'Pct']=_0x49745a,_0x1aade2();}}function _0x277917(_0x18070f,_0x1b4712,_0x3c4d98,_0x4b7962){var _0x16a189=_0x1af4c4,_0x9a290=_0x80787e(_0x18070f,_0x1b4712,_0x3c4d98);if(_0x50128c[_0x16a189(0x5c0)](_0x9a290,null))_0x5dda48(_0x18070f,_0x1b4712,_0x3c4d98,_0x50128c[_0x16a189(0x37c)](_0x9a290,_0x4b7962));}function _0x1a2676(_0x56ac79,_0xf9fe4e,_0x4a2e23,_0x4761da,_0x493b17,_0xf8bd4b,_0x2e4eaa){var _0x483fbd=_0x1af4c4;try{if('ftvey'!=='UHdvG'){var _0x1af0f9=(_0x483fbd(0x2ee)+'|1|2')[_0x483fbd(0x1b4)]('|'),_0x1d4b6c=-0x1e49*-0x1+0x2432+-0x427b;while(!![]){switch(_0x1af0f9[_0x1d4b6c++]){case'0':_0x30fd38['enabl'+'ed']=_0x2e4eaa!==![];continue;case'1':_0x5a1816[_0x483fbd(0x55d)+'Total']++;continue;case'2':return _0x30fd38;case'3':_0xb8c203[_0x56ac79]=_0x30fd38;continue;case'4':var _0x30fd38=_0x17c344['hookP'+_0x483fbd(0x13f)]({'typeName':_0xf9fe4e,'methodName':_0x4a2e23,'params':_0x4761da,'returnType':_0x493b17},_0xf8bd4b);continue;}break;}}else _0x50128c['bQTQU'](_0x3d6785['code'],_0x50128c['esuiv'])&&(_0x23c649['preve'+'ntDef'+'ault'](),_0x50128c[_0x483fbd(0x50e)](_0x35f572));}catch(_0x5081d0){return console['warn'](_0x50128c[_0x483fbd(0x5cf)],_0x56ac79,_0x5081d0&&_0x5081d0[_0x483fbd(0x1d2)+'ge']),null;}}function _0xeb9a2(_0x31d8dc,_0x41a816,_0x3398dc,_0xd7055,_0x19ec4e,_0x4e4b44,_0x4b98c9){var _0x199fbb=_0x1af4c4;try{var _0x2b607c=_0x17c344['hookP'+_0x199fbb(0x3fe)+'x']({'typeName':_0x41a816,'methodName':_0x3398dc,'params':_0xd7055,'returnType':_0x19ec4e},_0x4e4b44);return _0x2b607c['enabl'+'ed']=_0x50128c[_0x199fbb(0x4f3)](_0x4b98c9,![]),_0xb8c203[_0x31d8dc]=_0x2b607c,_0x5a1816[_0x199fbb(0x55d)+_0x199fbb(0x37d)]++,_0x2b607c;}catch(_0x3cd0da){return console['warn'](_0x199fbb(0x39a)+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x199fbb(0x3e3)+_0x199fbb(0x17e),_0x31d8dc,_0x3cd0da&&_0x3cd0da[_0x199fbb(0x1d2)+'ge']),null;}}var _0x192b04=()=>![];try{if(_0x50128c[_0x1af4c4(0x4f3)](_0x50128c[_0x1af4c4(0x5ca)],_0x1af4c4(0x110))){if(window[_0x1af4c4(0x53e)+_0x1af4c4(0x19a)+_0x1af4c4(0x29a)]&&!_0x33347f[_0x1af4c4(0x92)+'ode']){_0x6aa59d=window['Unity'+'WebMo'+_0x1af4c4(0x29a)][_0x1af4c4(0x112)+'Wrapp'+'er'],_0x17c344=window[_0x1af4c4(0x53e)+'WebMo'+_0x1af4c4(0x29a)][_0x1af4c4(0x4ed)+'me']['creat'+_0x1af4c4(0x11f)+'in']({'name':_0x1af4c4(0x506)+'aKour','version':_0x1af4c4(0x331),'referencedAssemblies':[_0x50128c['riwON']]});if(_0x33347f['hookG'+'od'])_0x50128c['SWZWX'](_0x1a2676,_0x50128c['PUBFx'],_0x50128c[_0x1af4c4(0x59f)],'Initi'+_0x1af4c4(0xcc)+_0x1af4c4(0xae)+_0x1af4c4(0x1e1),[_0x1af4c4(0x4ef),_0x50128c['QWuFe']],undefined,_0x192b04,!!_0x33347f['god']);if(_0x33347f['hookG'+'odDie'])_0x1a2676(_0x1af4c4(0x4cf)+'e',_0x50128c['QRiwF'],_0x1af4c4(0x1b2)+'Die',[_0x50128c[_0x1af4c4(0x140)],_0x50128c[_0x1af4c4(0x140)],_0x1af4c4(0x4ef),_0x1af4c4(0x4ef),_0x1af4c4(0x4ef)],undefined,_0x192b04,!!_0x33347f['god']);if(_0x33347f['hookN'+_0x1af4c4(0x89)+'il'])_0x1a2676(_0x50128c['dWQtw'],_0x50128c['LBxmg'],_0x1af4c4(0xe0),['i32'],undefined,_0x192b04,!!_0x33347f[_0x1af4c4(0x26d)+_0x1af4c4(0x292)]);if(_0x33347f[_0x1af4c4(0x512)+_0x1af4c4(0x557)+'e'])_0x50128c[_0x1af4c4(0x552)](_0xeb9a2,_0x50128c[_0x1af4c4(0x5c3)],'OShoo'+'ter',_0x50128c[_0x1af4c4(0x47e)],['i32',_0x50128c[_0x1af4c4(0x140)]],undefined,(_0x4141a,_0x153063)=>{var _0x35ebb5=_0x1af4c4,_0x4efb0c={'jfvbh':_0x50128c[_0x35ebb5(0x5ad)]};'AZJLd'===_0x35ebb5(0x261)?_0x34322a[_0x35ebb5(0x141)+'em'](_0x4efb0c['jfvbh'],_0x26c515[_0x35ebb5(0x246)+_0x35ebb5(0x451)](_0x39223b)):_0x27007a(_0x31c38e,_0x153063,_0x5a1816,'shoot'+_0x35ebb5(0x314));},!![]);if(_0x33347f[_0x1af4c4(0x512)+'aptur'+'e'])_0xeb9a2(_0x50128c['eNOJK'],'Legio'+_0x1af4c4(0x403)+'forms'+_0x1af4c4(0x5e1)+_0x1af4c4(0x1b6)+_0x1af4c4(0x268)+_0x1af4c4(0x378),'IsGro'+'unded',[_0x50128c['QWuFe']],'i32',(_0x2c6e1a,_0x5bbf21)=>{var _0x1b6f33=_0x1af4c4;_0x27007a(_0x541a32,_0x5bbf21,_0x5a1816,_0x50128c[_0x1b6f33(0x206)]);},!![]);}}else try{_0x3ecc0f[_0x1af4c4(0x141)+'em'](_0x50128c['VcYhh'],_0xf91411['strin'+'gify'](_0x1ef05a));}catch(_0x500b9f){}}catch(_0xb90c0c){_0x50128c[_0x1af4c4(0x346)](_0x50128c[_0x1af4c4(0x145)],'bsCKC')?_0x4891e7['add'](_0x164422['code']):console[_0x1af4c4(0x188)](_0x50128c['WAFub'],_0xb90c0c&&_0xb90c0c['messa'+'ge']);}function _0x3b64e1(_0x8b7b59,_0x16ce7f){var _0x56a059=_0x1af4c4,_0x4dd870={'LBMSH':_0x56a059(0x5a4)+'5|0|8'+'|6|11'+_0x56a059(0x3d3)+_0x56a059(0x100)+_0x56a059(0x511)+_0x56a059(0x498)+'|12|1','sFDjW':function(_0x3b753a,_0x15b4b6){var _0x5cbf36=_0x56a059;return _0x50128c[_0x5cbf36(0x2e5)](_0x3b753a,_0x15b4b6);},'CIxLc':_0x50128c[_0x56a059(0xcf)],'fJlfT':function(_0x3f1b4d,_0x38a4e9){return _0x3f1b4d/_0x38a4e9;},'ZZmFB':function(_0x5b4d57,_0x5e7173){var _0xba7cf0=_0x56a059;return _0x50128c[_0xba7cf0(0x316)](_0x5b4d57,_0x5e7173);},'pynom':function(_0x3af489,_0x1c2f28){return _0x3af489*_0x1c2f28;},'XrJmf':function(_0x1bc753,_0x3c3b4a){return _0x50128c['RkVIi'](_0x1bc753,_0x3c3b4a);},'OtGvM':_0x56a059(0x3f0),'dOccT':_0x56a059(0x543)+_0x56a059(0x40d)+_0x56a059(0x5a3)+_0x56a059(0x269)+'tem-u'+'i,san'+'s-ser'+'if','cCyJd':_0x56a059(0x4e9)+_0x56a059(0x366)+_0x56a059(0x561)+'0,0.5'+'5)','IoENw':function(_0x45c379,_0x14f0cc){return _0x45c379+_0x14f0cc;},'VNjrv':function(_0x3ff53a,_0x4db995){var _0xdd55cf=_0x56a059;return _0x50128c[_0xdd55cf(0x3f1)](_0x3ff53a,_0x4db995);},'vVdOn':function(_0x1f29d9,_0x2f540e){var _0x120aa0=_0x56a059;return _0x50128c[_0x120aa0(0x158)](_0x1f29d9,_0x2f540e);},'ZhjZW':function(_0x2fb8d9,_0xa2cc8c){return _0x2fb8d9*_0xa2cc8c;},'FCJgp':function(_0x2b43db,_0x3801fe){return _0x2b43db*_0x3801fe;},'fCrDJ':function(_0x99c2e4,_0x49ff80){return _0x99c2e4*_0x49ff80;},'gdzFT':function(_0x19d0ec,_0x1b6125){var _0x5f3457=_0x56a059;return _0x50128c[_0x5f3457(0x2e3)](_0x19d0ec,_0x1b6125);},'YnikE':function(_0x4967e3,_0x2aeb4a){return _0x4967e3-_0x2aeb4a;},'WuDQX':function(_0x362960,_0x2d8155){return _0x362960-_0x2d8155;},'sglbt':_0x56a059(0x47f),'XCVAp':_0x50128c[_0x56a059(0xe5)],'muptv':function(_0x5a6c9b,_0x3528cf){return _0x5a6c9b+_0x3528cf;},'QQnfg':function(_0x307e9d,_0x452d67){var _0x3f8ce6=_0x56a059;return _0x50128c[_0x3f8ce6(0x316)](_0x307e9d,_0x452d67);},'qdLyA':function(_0x47e2ee,_0xdb54b4){return _0x47e2ee+_0xdb54b4;},'Kicii':function(_0x2c84bd,_0x2fd0e7){return _0x50128c['FzhBd'](_0x2c84bd,_0x2fd0e7);},'oxYZI':function(_0x34717f,_0xfc6e8e,_0xa8387b,_0x2e6a74,_0x3f193b,_0x4abffa,_0x3b587c,_0x3fff8b){return _0x34717f(_0xfc6e8e,_0xa8387b,_0x2e6a74,_0x3f193b,_0x4abffa,_0x3b587c,_0x3fff8b);},'mSBmB':function(_0xf0a541,_0x1e3e2c){return _0xf0a541(_0x1e3e2c);},'AZctD':_0x56a059(0x21e),'yPLRl':_0x50128c['QZIeZ'],'selEG':function(_0x306784,_0x5a5035,_0x484c18,_0xbdc260,_0x15b634,_0x15e3a5,_0x1a2af6){return _0x306784(_0x5a5035,_0x484c18,_0xbdc260,_0x15b634,_0x15e3a5,_0x1a2af6);}};if('iMKTt'===_0x50128c[_0x56a059(0xfe)]){var _0x21d23e=_0xb8c203[_0x8b7b59];if(_0x21d23e)try{_0x21d23e[_0x56a059(0x15f)+'ed']=!!_0x16ce7f;}catch(_0x460480){}}else{var _0xc8079b=_0x5f2388(_0x29428b[_0x56a059(0x5a9)+'le'])||0x6bc+-0x87*0x2b+0xff2,_0x301d91=(-0xab*0x15+0x12aa*-0x2+0x337d)*_0xc8079b,_0x5837d4=(-0xdb0+0x25d*-0x5+0x8b*0x2f)*_0xc8079b,_0x1ffe17=_0x4dd870[_0x56a059(0x420)](_0x301d91,-0x3b*-0x4+0x1dd1+-0x1eba)+_0x4dd870[_0x56a059(0x507)](_0x5837d4,-0x350*-0xb+0x3b*0x56+-0x258*0x18),_0x200497=_0x4dd870[_0x56a059(0x4a4)](_0x4dd870[_0x56a059(0x384)](_0x301d91,-0x519+-0x26e9+-0xbf*-0x3b),_0x4dd870['fCrDJ'](_0x5837d4,-0x24d*0x1+0x1d2a*0x1+-0x1adb*0x1)),_0x348d53=_0x270da7[_0x56a059(0x2d2)],_0x54605b=_0x4dd870[_0x56a059(0xad)](_0x348d53,'br')?_0x4dd870[_0x56a059(0x5b3)](_0x36bc5f[_0x56a059(0x25d)],-0xfbb*-0x2+0x9c5*-0x1+0x1*-0x15a1)-_0x1ffe17:_0x4dd870['ZZmFB'](_0x11a246[_0x56a059(0x49c)],-0x1060+-0x123*0x9+-0x1aab*-0x1),_0x53a8ee=_0x348d53==='ml'?_0x21aa80['top']+_0x41a72a[_0x56a059(0x44f)+'t']/(-0x10a8+-0xf5e*-0x2+-0xe12)-_0x4dd870[_0x56a059(0x27c)](_0x200497,-0xdd8+0x85b+0x57f):_0x4dd870[_0x56a059(0x23d)](_0x49bc0a[_0x56a059(0x26c)+'m']-_0x200497,_0x348d53==='bl'?0x2ac*-0x9+-0x8bf+0x212b:0x1*-0x1c8d+-0x5d*-0x38+0x8cb),_0x1a1fa9=(_0x17644b,_0x2f228c,_0x2b90d1,_0x364c1b,_0x349a41,_0x5795f6,_0x1086ce)=>{var _0xe72fdf=_0x56a059,_0xeb9f40=_0x4dd870[_0xe72fdf(0x13b)][_0xe72fdf(0x1b4)]('|'),_0x4c18e6=-0x2*-0x103d+-0x4*0x146+-0x1b62;while(!![]){switch(_0xeb9f40[_0x4c18e6++]){case'0':if(_0x297d1d['round'+_0xe72fdf(0x79)])_0x2a94f7['round'+'Rect'](_0x2b90d1,_0x364c1b,_0x349a41,_0x5795f6,_0x4dd870[_0xe72fdf(0x17b)](-0xf58*0x1+0x6d5+-0x445*-0x2,_0xc8079b));else _0xf8020b[_0xe72fdf(0x254)](_0x2b90d1,_0x364c1b,_0x349a41,_0x5795f6);continue;case'1':_0x5abbea[_0xe72fdf(0x350)+'re']();continue;case'2':_0x59da9e['textB'+_0xe72fdf(0x152)+'ne']=_0xe72fdf(0x550)+'e';continue;case'3':_0xc8ae0f['save']();continue;case'4':_0x57e17d[_0xe72fdf(0x3a1)+_0xe72fdf(0x484)]='cente'+'r';continue;case'5':_0x4851bf['begin'+_0xe72fdf(0x317)]();continue;case'6':_0x243e61[_0xe72fdf(0x5dc)]();continue;case'7':_0x3e2f2d[_0xe72fdf(0xc8)+'tyle']=_0x573a4f?_0x4dd870[_0xe72fdf(0x190)]:_0xe72fdf(0x4e9)+'255,2'+'35,24'+'0,0.8'+')';continue;case'8':_0x2a441a['fillS'+'tyle']=_0x573a4f?_0xe72fdf(0x4e9)+_0xe72fdf(0x18a)+_0xe72fdf(0x2d5)+_0xe72fdf(0x16f)+'5)':_0xe72fdf(0x4e9)+'22,8,'+'16,0.'+'7)';continue;case'9':_0x4048f5[_0xe72fdf(0x333)+'ext'](_0x17644b,_0x2b90d1+_0x4dd870['fJlfT'](_0x349a41,-0xdf*-0x1+0x81d*0x1+-0x17f*0x6),_0x4dd870['ZZmFB'](_0x364c1b,_0x4dd870['fJlfT'](_0x5795f6,-0x1f9a+-0x26b*0x3+-0x1*-0x26dd))-(_0x1086ce?_0x4dd870[_0xe72fdf(0xac)](-0xe*0x47+-0x1a8f+-0xe*-0x22d,_0xc8079b):0x1*-0x60e+0x1*0x12d2+-0x331*0x4));continue;case'10':_0x152b3b[_0xe72fdf(0x20c)+'e']();continue;case'11':_0x1461f4['lineW'+_0xe72fdf(0x44a)]=-0x112*-0x5+0x2440+-0x2999;continue;case'12':_0x1086ce&&(_0x52d03c['font']=_0x4dd870['XrJmf'](_0x4dd870['OtGvM'],_0xaf1fc0[_0xe72fdf(0x12e)]((-0x7*0xdd+0x1*0x104d+-0x1*0xa39)*_0xc8079b))+_0x4dd870['dOccT'],_0x4dabb1[_0xe72fdf(0xc8)+_0xe72fdf(0x2d9)]=_0x573a4f?_0x4dd870['CIxLc']:_0x4dd870['cCyJd'],_0x3a9ebe[_0xe72fdf(0x333)+_0xe72fdf(0x3d0)](_0x1086ce,_0x4dd870[_0xe72fdf(0x4a4)](_0x2b90d1,_0x4dd870[_0xe72fdf(0x27c)](_0x349a41,-0x93+0x807+-0x3b9*0x2)),_0x364c1b+_0x4dd870[_0xe72fdf(0x279)](_0x5795f6,0x1e2*0x5+0x307*-0x5+0x1e9*0x3)+_0x4dd870[_0xe72fdf(0x384)](-0x10ac*-0x2+-0x267b+-0x15*-0x3f,_0xc8079b)));continue;case'13':var _0x573a4f=_0x446c56['has'](_0x2f228c);continue;case'14':_0x1869d6['font']=_0x4dd870[_0xe72fdf(0x283)](_0xe72fdf(0x42e),_0x3547dd[_0xe72fdf(0x12e)]((-0x18ec+0xeff+0x9f9)*_0xc8079b))+_0x4dd870['dOccT'];continue;case'15':_0x132514['strok'+_0xe72fdf(0x2bb)+'e']=_0x573a4f?_0x225b29:_0xe72fdf(0x4e9)+'255,1'+_0xe72fdf(0x2d5)+_0xe72fdf(0x97)+'5)';continue;case'16':_0x573a4f&&(_0x309042[_0xe72fdf(0x20e)+'wColo'+'r']=_0x886ecc,_0x4841a3['shado'+_0xe72fdf(0x57f)]=0x4*0x2c+-0x1db0*0x1+0xe87*0x2,_0x55f2d3[_0xe72fdf(0x5dc)](),_0x426803['shado'+_0xe72fdf(0x57f)]=0x2474+0x3a1+-0x2815);continue;}break;}};_0x1a1fa9('W',_0x4dd870[_0x56a059(0x3c6)],_0x4dd870['XrJmf'](_0x54605b,_0x301d91)+_0x5837d4,_0x53a8ee,_0x301d91,_0x301d91),_0x1a1fa9('A',_0x4dd870[_0x56a059(0x27f)],_0x54605b,_0x4dd870[_0x56a059(0x242)](_0x53a8ee+_0x301d91,_0x5837d4),_0x301d91,_0x301d91),_0x1a1fa9('S','KeyS',_0x4dd870[_0x56a059(0xe4)](_0x4dd870[_0x56a059(0x214)](_0x54605b,_0x301d91),_0x5837d4),_0x4dd870[_0x56a059(0x52b)](_0x4dd870[_0x56a059(0x4a4)](_0x53a8ee,_0x301d91),_0x5837d4),_0x301d91,_0x301d91),_0x1a1fa9('D',_0x56a059(0x5e8),_0x54605b+_0x4dd870['FCJgp'](_0x301d91+_0x5837d4,-0x175c+-0xa99+0x21f7),_0x4dd870[_0x56a059(0x242)](_0x53a8ee+_0x301d91,_0x5837d4),_0x301d91,_0x301d91);var _0x66d9dd=(_0x1ffe17-_0x5837d4)/(0xc48+0x31e+-0xf64),_0x121b67=_0x53a8ee+_0x4dd870[_0x56a059(0x17b)](_0x4dd870[_0x56a059(0x11a)](_0x301d91,_0x5837d4),0xcf1+0x213b*0x1+-0x2e2a);_0x4dd870[_0x56a059(0x1f2)](_0x1a1fa9,'LMB',_0x56a059(0xc0)+'1',_0x54605b,_0x121b67,_0x66d9dd,_0x301d91,_0x4d307a[_0x56a059(0x2c1)]?_0x4dd870[_0x56a059(0x214)](_0x4dd870[_0x56a059(0x555)](_0x2e64b1,-0x127c+0x26da*-0x1+-0x1*-0x3957),_0x4dd870[_0x56a059(0x2c7)]):''),_0x1a1fa9(_0x56a059(0x39f),_0x4dd870['yPLRl'],_0x54605b+_0x66d9dd+_0x5837d4,_0x121b67,_0x66d9dd,_0x301d91,_0x1e0954['ksCps']?_0x4dd870[_0x56a059(0x4a4)](_0xa1aa3f(-0x24e7+0x511*-0x1+0x29fb),_0x4dd870[_0x56a059(0x2c7)]):''),_0x4dd870[_0x56a059(0x17c)](_0x1a1fa9,'','Space',_0x54605b,_0x121b67+_0x301d91+_0x5837d4,_0x1ffe17,_0x301d91*(-0x1*0xfa6+0x2*-0x424+-0xbf7*-0x2+0.45));}}setInterval(()=>{var _0xb9f62b=_0x1af4c4,_0x4d2c5f={'nWASx':function(_0x206d85,_0x48433d){return _0x206d85===_0x48433d;}};if(!_0x6aa59d||!window[_0xb9f62b(0x364)+_0xb9f62b(0x39c)+'nce'])return;var _0x219414=(Number(_0x33347f[_0xb9f62b(0x4e4)+_0xb9f62b(0x1ab)])||0x11c8+-0x2f*0x28+-0xa0c)/(0x4*-0x112+0x12f4+0x1*-0xe48),_0x11e0b7=(_0x50128c[_0xb9f62b(0x3da)](Number,_0x33347f[_0xb9f62b(0x22b)+'ct'])||-0x1*-0x1cb7+0x239+-0x1e8c)/(0x4*0x2a5+0x24df+0x7*-0x6b9),_0x1e12ee=_0x50128c[_0xb9f62b(0x3e5)](_0x50128c['HdEVy'](Number,_0x33347f['gravi'+_0xb9f62b(0x398)])||0x3*0x33e+0x2411+-0x2d67,0xe62+-0x20eb*-0x1+-0xfa3*0x3),_0x373083=Math['max'](-0x4fe*0x2+-0x44*-0x25+0x29,Number(_0x33347f['damag'+_0xb9f62b(0x2d3)+'e'])||0x11f2*0x2+-0x265f+0x311),_0x3ff661=_0x219414!==-0x20c6*0x1+0x1b1*-0x10+0x1*0x3bd7||_0x11e0b7!==-0x1c*-0x53+0x151+0x214*-0x5||_0x50128c[_0xb9f62b(0x4f3)](_0x1e12ee,0x1*0x8d1+-0xfa0+0x1b4*0x4)||_0x33347f[_0xb9f62b(0x476)],_0xd0d491=_0x33347f[_0xb9f62b(0x2a4)+'ead']||_0x33347f[_0xb9f62b(0x104)+'eExp']||_0x33347f[_0xb9f62b(0x516)+_0xb9f62b(0x531)]||_0x33347f[_0xb9f62b(0x560)+'Exp'];if(_0x50128c['OsKNk'](!_0x3ff661,!_0xd0d491))return;try{for(var _0x4490ef=-0x213e+0x260*0x1+0x12*0x1b7;_0x50128c['KzFHA'](_0x4490ef,_0x541a32['lengt'+'h']);_0x4490ef++){if(_0xb9f62b(0x39e)===_0x50128c[_0xb9f62b(0x4d6)]){var _0x9b3bca=_0x541a32[_0x4490ef];if(!_0x9b3bca)continue;_0x50128c['xQxtd'](_0x219414,-0x25c7+0xc5*-0x1+0x1*0x268d)&&(_0x277917(_0x9b3bca,-0x5*-0x431+-0x12bf+0x2*-0x107,_0x50128c['WUNFg'],_0x219414),_0x277917(_0x9b3bca,0x12*-0x1f2+0x1*0x1424+-0x2*-0x786,_0xb9f62b(0x4f4),_0x219414),_0x50128c[_0xb9f62b(0x84)](_0x277917,_0x9b3bca,-0x3*0xb31+-0x25af+0x4772,_0xb9f62b(0x4f4),_0x219414),_0x50128c['wzZtt'](_0x277917,_0x9b3bca,-0x2588+-0x1*-0x29c+0x2320,'f32',_0x219414),_0x50128c[_0xb9f62b(0x495)](_0x277917,_0x9b3bca,0x7+-0x1fba+-0x1fcf*-0x1,_0xb9f62b(0x4f4),_0x219414),_0x277917(_0x9b3bca,0xa7b+0x1*-0x1c6f+-0x59*-0x34,_0x50128c[_0xb9f62b(0xbf)],_0x219414));if(_0x11e0b7!==0x1b52+0x129a+0x1*-0x2deb)_0x277917(_0x9b3bca,-0xd6c*-0x2+-0x1f6*0xa+0x2*-0x376,'f32',_0x11e0b7);_0x50128c['xQxtd'](_0x1e12ee,0xef3+-0x4f*-0x56+-0x297c)&&(_0x277917(_0x9b3bca,0x2004+0x5*-0x170+-0x188c,_0xb9f62b(0x4f4),_0x1e12ee),_0x50128c[_0xb9f62b(0x495)](_0x277917,_0x9b3bca,0x2187+-0x1726+-0xa15,_0xb9f62b(0x4f4),_0x1e12ee));if(_0x33347f[_0xb9f62b(0x476)])_0x5dda48(_0x9b3bca,0x105*-0x19+0x1a74+-0x5b,_0xb9f62b(0x4f4),-(-0x19e6+0x1*-0x209+0x1*0x1fd6));}else _0x22fcb6['ksPos']=_0x852edd,_0x50128c['KOiOw'](_0x5335d3);}}catch(_0x28ea69){}try{if(_0x50128c['mTSri'](_0xb9f62b(0x519),_0xb9f62b(0x519))){var _0x553c49=('7|0|3'+_0xb9f62b(0x4fa)+_0xb9f62b(0x32d))[_0xb9f62b(0x1b4)]('|'),_0x5860e3=0x113e+-0x1e15+0xcd7;while(!![]){switch(_0x553c49[_0x5860e3++]){case'0':var _0x5dd8a4=_0x4e960a['creat'+_0xb9f62b(0x4c7)+_0xb9f62b(0x378)](_0xb9f62b(0x260)+'n');continue;case'1':return _0x5dd8a4;case'2':_0x5dd8a4[_0xb9f62b(0x480)+'tribu'+'te'](_0x50128c[_0xb9f62b(0x3f4)],_0x50128c[_0xb9f62b(0x3a3)]);continue;case'3':_0x5dd8a4[_0xb9f62b(0x462)]=_0x50128c['GlMtF'];continue;case'4':_0x5dd8a4[_0xb9f62b(0x480)+_0xb9f62b(0x1f1)+'te'](_0x50128c[_0xb9f62b(0x13e)],_0x5b8ce3(!!_0x481b46));continue;case'5':_0x5dd8a4[_0xb9f62b(0x4da)+'ck']=_0x417715=>{var _0x380d85=_0xb9f62b;_0x417715['stopP'+_0x380d85(0x4a7)+'ation']();var _0x1f4d04=_0x5dd8a4[_0x380d85(0x582)+'tribu'+'te']('aria-'+'check'+'ed')!==_0x380d85(0x58f);_0x5dd8a4[_0x380d85(0x480)+_0x380d85(0x1f1)+'te'](_0x380d85(0x42b)+'check'+'ed',_0x268619[_0x380d85(0x2d1)](_0x2140a6,_0x1f4d04)),_0x268619['bysRC'](_0x38103f,_0x1f4d04);};continue;case'6':_0x5dd8a4[_0xb9f62b(0x3c0)+'Name']=_0xb9f62b(0x10c)+_0xb9f62b(0x80);continue;case'7':var _0x268619={'oOlBV':function(_0x4af510,_0x2d689b){return _0x4af510(_0x2d689b);},'bysRC':function(_0x4a5b52,_0x43c35c){return _0x50128c['HdEVy'](_0x4a5b52,_0x43c35c);}};continue;}break;}}else for(var _0x4bcb36=-0x25ca+0x34b*0x1+0x227f;_0x4bcb36<_0x31c38e['lengt'+'h'];_0x4bcb36++){if('DuDYC'===_0x50128c['veQeg']){var _0x3bd236=_0x50128c[_0xb9f62b(0x193)](_0x506003,_0x31c38e[_0x4bcb36],0x1*-0x997+0xb1+0x2*0x48f);if(!_0x3bd236)continue;_0x33347f['damag'+_0xb9f62b(0x85)]&&(_0x5dda48(_0x3bd236,0x2527*-0x1+-0x90f+0x2e82,_0x50128c['QWuFe'],_0x373083),_0x5dda48(_0x3bd236,0x163a+-0x517*-0x6+0xd1c*-0x4,'i32',_0x373083));_0x33347f[_0xb9f62b(0x2a4)+'ead']&&(_0x5dda48(_0x3bd236,0xdad+0x32*0x77+-0x2463*0x1,'f32',0x707+0x20de+-0x27e5),_0x5dda48(_0x3bd236,0xa0d+-0x1*0x2079+0x16d4,_0xb9f62b(0x4f4),-0x10*0xb0+0x167*-0x2+0xdcf));if(_0x33347f['infAm'+_0xb9f62b(0x531)])_0x50128c[_0xb9f62b(0x84)](_0x5dda48,_0x3bd236,-0x20e9+-0x905+0x2a4a,'i32',0xf6*0x13+0x1ce3+0x267*-0x12);_0x33347f['rapid'+_0xb9f62b(0x176)]&&(_0x277917(_0x3bd236,0x265*-0xe+-0x1acf+0x3ce1,_0xb9f62b(0x4f4),-0x934+-0x1ba7+0x24db+0.1),_0x5dda48(_0x3bd236,-0x1*0x5d5+-0x299*0x1+0x8ce,_0xb9f62b(0x4f4),0x2571+-0x9ad*0x2+-0x1217+0.1));}else for(var _0x2b7e5a of['kour-'+_0xb9f62b(0x3ef)+_0xb9f62b(0x3aa)+_0xb9f62b(0x132)+'nt',_0xb9f62b(0x88)+_0xb9f62b(0x101)+'8x90-'+_0xb9f62b(0x497)+'t','kour-'+'io_30'+_0xb9f62b(0x3c7)+_0xb9f62b(0x132)+'nt','fulls'+'creen'+_0xb9f62b(0x1f0)+'s']){var _0x580352=_0x4d0945['getEl'+_0xb9f62b(0x111)+'ById'](_0x2b7e5a);if(_0x580352&&_0x2b7e5a==='fulls'+'creen'+_0xb9f62b(0x1f0)+'s'){var _0x5e6d9c=_0x580352['child'+'ren'];for(var _0x4d19cb=-0x224c+0x1010*0x1+-0x2*-0x91e;_0x4d19cb<_0x5e6d9c['lengt'+'h'];_0x4d19cb++){if(_0x5e6d9c[_0x4d19cb]['id']&&_0x4d2c5f['nWASx'](_0x5e6d9c[_0x4d19cb]['id'][_0xb9f62b(0xff)+'Of']('kour-'+_0xb9f62b(0x156)),0x118a+0x966*-0x3+-0x2*-0x554))_0x5e6d9c[_0x4d19cb]['style']['displ'+'ay']=_0xb9f62b(0x9d);}}else{if(_0x580352)_0x580352[_0xb9f62b(0x361)][_0xb9f62b(0x447)+'ay']='none';}}}}catch(_0x2d5367){}},0x224f*-0x1+-0x12*-0x1cb+0x7*0x67),setInterval(()=>{var _0x4b88cc=_0x1af4c4;_0x5a1816['gameL'+_0x4b88cc(0x3bb)]=!!window[_0x4b88cc(0x364)+_0x4b88cc(0x39c)+'nce'];try{if(_0x50128c['mTSri']('jnSQx','Sozot')){var _0x4a28c4=0x13*0x4e+0x1*-0x35f+-0x26b;for(var _0x2e9a7e in _0xb8c203){if(_0xb8c203[_0x2e9a7e]&&_0xb8c203[_0x2e9a7e][_0x4b88cc(0x485)+'ed'])_0x4a28c4++;}_0x5a1816['hooks'+'Ok']=_0x4a28c4;}else _0x50128c[_0x4b88cc(0x84)](_0x157356,_0x1d580b,_0x114f48,_0x1c3fd3,_0x4b88cc(0x5ed)+_0x4b88cc(0x587));}catch(_0x213345){}},-0x1e02+0x5c5*0x1+0x5*0x5a1);var _0x65e0e0=new Set(),_0x23a5ee={0x1:[],0x3:[]},_0x2f8b5a=![];function _0x288e42(_0x5de8b8){_0x65e0e0['add'](_0x5de8b8['code']);}function _0x304048(_0x12951d){var _0x1c141f=_0x1af4c4;_0x65e0e0[_0x1c141f(0x2b3)+'e'](_0x12951d[_0x1c141f(0x1bb)]);}function _0xc6d958(_0x5970ee){var _0x3b0286=_0x1af4c4;if(_0x5970ee[_0x3b0286(0x448)+'ura'])return;_0x65e0e0['add'](_0x50128c[_0x3b0286(0xab)]('mouse',_0x5970ee['butto'+'n']+(0x1a2*0x13+-0x257e+0x679)));var _0x1abccd=_0x23a5ee[_0x50128c[_0x3b0286(0x4fd)](_0x5970ee['butto'+'n'],0x279*0xd+-0x233d+0x319*0x1)];if(_0x1abccd){_0x1abccd[_0x3b0286(0x1a3)](performance[_0x3b0286(0x4b6)]());if(_0x50128c[_0x3b0286(0x19c)](_0x1abccd['lengt'+'h'],-0x38*0x20+-0x3a7*0x5+0x196b))_0x1abccd[_0x3b0286(0x380)]();}}function _0x19cd34(_0x1c1695){var _0x3b8d6a=_0x1af4c4;if(!_0x1c1695[_0x3b8d6a(0x448)+'ura'])_0x65e0e0[_0x3b8d6a(0x2b3)+'e'](_0x50128c[_0x3b8d6a(0x549)]+(_0x1c1695[_0x3b8d6a(0x260)+'n']+(-0x115*0x1+-0xb51+0xc67)));}function _0x1f4a52(){var _0x593fad=_0x1af4c4;_0x65e0e0[_0x593fad(0x24c)]();}function _0x1d1aa4(){var _0x31798b=_0x1af4c4;if(_0x2f8b5a)return;_0x2f8b5a=!![],window[_0x31798b(0x564)+'entLi'+_0x31798b(0x2b5)+'r'](_0x31798b(0x330)+'wn',_0x288e42,!![]),window[_0x31798b(0x564)+_0x31798b(0x429)+_0x31798b(0x2b5)+'r'](_0x50128c[_0x31798b(0x5b6)],_0x304048,!![]),window[_0x31798b(0x564)+_0x31798b(0x429)+'stene'+'r'](_0x31798b(0xc0)+_0x31798b(0x107),_0xc6d958,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x31798b(0xc0)+'up',_0x19cd34,!![]),window[_0x31798b(0x564)+'entLi'+_0x31798b(0x2b5)+'r'](_0x50128c['GcZzd'],_0x1f4a52);}function _0x3f4a5d(_0x25cb76){var _0x2f061b=_0x1af4c4,_0x435bef=_0x23a5ee[_0x25cb76]||[],_0x55c4f9=performance['now']();while(_0x435bef[_0x2f061b(0x296)+'h']&&_0x50128c['bRllm'](_0x55c4f9,_0x435bef[-0x289*-0x1+-0x1*-0x21eb+-0x1*0x2474])>-0x87a+0xa33+0x22f)_0x435bef['shift']();return _0x435bef['lengt'+'h'];}function _0x8ede91(_0x5062be){var _0x504fb0=_0x1af4c4;if(document[_0x504fb0(0x178)]&&(document[_0x504fb0(0x466)+'State']===_0x50128c[_0x504fb0(0x599)]||_0x50128c[_0x504fb0(0x5ce)](document['ready'+_0x504fb0(0x3a4)],'compl'+_0x504fb0(0x1fa))))_0x5062be();else document['addEv'+_0x504fb0(0x429)+_0x504fb0(0x2b5)+'r']('DOMCo'+'ntent'+_0x504fb0(0x463)+'d',_0x5062be,{'once':!![]});}_0x8ede91(()=>{var _0x485bd3=_0x1af4c4,_0x58a396={'fOpgo':function(_0x5e4d0d,_0x3140a9){var _0x462af7=_0x312f;return _0x50128c[_0x462af7(0x5d8)](_0x5e4d0d,_0x3140a9);},'dIOQb':function(_0x57996f,_0x2d1e70){var _0x4213cc=_0x312f;return _0x50128c[_0x4213cc(0x32f)](_0x57996f,_0x2d1e70);},'jsyqa':_0x485bd3(0x8f),'EOtzs':function(_0x1379cd,_0x3baa59){return _0x1379cd/_0x3baa59;},'kefJa':function(_0x5dd9bf,_0x16e8ac){return _0x5dd9bf-_0x16e8ac;},'ykMLn':function(_0x33d1ec,_0x62c303){return _0x33d1ec*_0x62c303;},'kDsJJ':_0x50128c['WRTxc'],'lPfSV':'rgba('+'22,8,'+_0x485bd3(0x57a)+'7)','NJpSO':_0x485bd3(0x42e),'ncuTU':function(_0x291e9c,_0x17cb40){return _0x291e9c+_0x17cb40;},'FwNXM':function(_0x15b88d,_0x319419){return _0x15b88d*_0x319419;},'BNlyq':'rgba('+'255,2'+_0x485bd3(0x561)+_0x485bd3(0xd5)+'5)','ClKgn':function(_0x36ca50,_0x5e52ff){var _0x46a287=_0x485bd3;return _0x50128c[_0x46a287(0x2ba)](_0x36ca50,_0x5e52ff);},'dPmFD':function(_0x15dbb9,_0x17e44e){var _0x12b231=_0x485bd3;return _0x50128c[_0x12b231(0x12a)](_0x15dbb9,_0x17e44e);},'xlJkR':function(_0x22e311,_0x5614f4){return _0x22e311*_0x5614f4;},'ihZMx':_0x50128c[_0x485bd3(0x1a7)],'HkLtt':function(_0x3143dc,_0x9c1a3a){return _0x3143dc(_0x9c1a3a);},'PHLcM':_0x485bd3(0x4be)+'9d','pEQul':function(_0xc0c22f,_0x179edc){var _0x1a9af0=_0x485bd3;return _0x50128c[_0x1a9af0(0x37c)](_0xc0c22f,_0x179edc);},'NPBWD':function(_0x55dfcd,_0x571a90){return _0x55dfcd-_0x571a90;},'jcZRz':function(_0x365357,_0x26fbb0){return _0x365357-_0x26fbb0;},'WTYMq':function(_0x367960,_0x50c11d){var _0x1cccd2=_0x485bd3;return _0x50128c[_0x1cccd2(0x23a)](_0x367960,_0x50c11d);},'eoLjb':'8|3|1'+_0x485bd3(0x16a)+'7|5|4'+_0x485bd3(0x4bd),'ZQdre':_0x485bd3(0x49c),'sJHAC':function(_0x5f4a93,_0x25dc4a){return _0x50128c['LhRuz'](_0x5f4a93,_0x25dc4a);},'GROdN':_0x50128c[_0x485bd3(0x218)],'ZVnxI':'SAKUR'+'A\x20KOU'+_0x485bd3(0x25b)+'1','XTwgm':_0x50128c['nPcMB'],'TLxwO':function(_0xedfd1d,_0x4a2fe2){return _0x50128c['WowLh'](_0xedfd1d,_0x4a2fe2);},'Bwibk':function(_0x3fca5d,_0x2696c3){return _0x3fca5d*_0x2696c3;},'xFstd':function(_0x45cf35,_0x244de0){var _0x66092a=_0x485bd3;return _0x50128c[_0x66092a(0x4b1)](_0x45cf35,_0x244de0);},'yXKPf':function(_0x219dc,_0x2cf060){return _0x50128c['fVylM'](_0x219dc,_0x2cf060);},'vpLgb':function(_0x39b3c7,_0x5e9d0b){var _0x2df210=_0x485bd3;return _0x50128c[_0x2df210(0x473)](_0x39b3c7,_0x5e9d0b);},'rvGpc':_0x485bd3(0x5da),'UaRHm':function(_0x164f22,_0x41facb){return _0x50128c['HdEVy'](_0x164f22,_0x41facb);},'duoZb':function(_0x2fe836){return _0x2fe836();},'UxyZr':_0x485bd3(0x1db)+'|6|2|'+'0|4|1','WFfTA':_0x485bd3(0x500),'bFIrM':function(_0x102088){var _0x28a11e=_0x485bd3;return _0x50128c[_0x28a11e(0x1fb)](_0x102088);},'KLqcM':function(_0x1bfcad){var _0x4ebf45=_0x485bd3;return _0x50128c[_0x4ebf45(0x108)](_0x1bfcad);},'kttsB':function(_0xb85c73){return _0xb85c73();},'GANCO':function(_0x1be425,_0x10783a){var _0xcef8a0=_0x485bd3;return _0x50128c[_0xcef8a0(0x172)](_0x1be425,_0x10783a);},'TeFVW':function(_0x493d53,_0x4fdc1){return _0x50128c['bQTQU'](_0x493d53,_0x4fdc1);},'NcdWH':_0x50128c[_0x485bd3(0x200)],'FAPQC':_0x50128c['CFZxw'],'kQFwd':function(_0x23cb0c){return _0x50128c['BNMxb'](_0x23cb0c);},'TowNz':_0x50128c['GlMtF'],'omHft':function(_0x11ae5e,_0x40c0b6,_0x4989c2,_0x301fde,_0x3067b4,_0x5c09f5){return _0x11ae5e(_0x40c0b6,_0x4989c2,_0x301fde,_0x3067b4,_0x5c09f5);},'RZjRR':_0x50128c[_0x485bd3(0x553)],'xzvMd':function(_0x43d952,_0x3d07d5,_0x5d59a2,_0x1220d3,_0x48669f,_0x51e53c){return _0x43d952(_0x3d07d5,_0x5d59a2,_0x1220d3,_0x48669f,_0x51e53c);},'slcig':'Rapid'+'\x20Fire'+'\x20[EXP'+']','kmeVX':_0x50128c['dbldb'],'cChPD':function(_0x3e1c7d,_0x2bc77f,_0x414723,_0x4f477c){return _0x3e1c7d(_0x2bc77f,_0x414723,_0x4f477c);},'jYxSZ':'If\x20re'+_0x485bd3(0x50c)+_0x485bd3(0x344)+_0x485bd3(0x47a)+'in,\x20t'+_0x485bd3(0x469)+_0x485bd3(0x2ad)+_0x485bd3(0xf1)+_0x485bd3(0x90)+_0x485bd3(0x3ee)+'where'+'.','IlKfq':function(_0x332aeb,_0x513d57){return _0x332aeb===_0x513d57;},'rxghS':_0x485bd3(0x5d3)+_0x485bd3(0x426)+'\x20four'+'\x20Move'+_0x485bd3(0x567)+_0x485bd3(0x4e4)+_0x485bd3(0x29d)+_0x485bd3(0x280)+_0x485bd3(0x1b5)+_0x485bd3(0x3a8)+_0x485bd3(0x5ab)+'.','jsbOA':_0x485bd3(0x3be)+'\x20defa'+'ult','TBHkT':_0x50128c[_0x485bd3(0xd1)],'uFlwe':function(_0x3a2771,_0x97b5d6){return _0x3a2771!==_0x97b5d6;},'djjdr':function(_0x289ca2,_0x236e2a,_0x517977,_0x5839dd){var _0x18807c=_0x485bd3;return _0x50128c[_0x18807c(0x396)](_0x289ca2,_0x236e2a,_0x517977,_0x5839dd);},'LTfFh':_0x50128c['mohyW'],'oalHq':function(_0x5eb796,_0x4a2bfe,_0x47010c,_0x4db819,_0x3a6e91,_0xc2186d){return _0x5eb796(_0x4a2bfe,_0x47010c,_0x4db819,_0x3a6e91,_0xc2186d);},'BHJfx':_0x485bd3(0x47d),'mQOIm':_0x485bd3(0x48b)+'ion','wjLSd':function(_0x1aef1b,_0x3f2d48,_0x3feba1,_0x25a50a){return _0x1aef1b(_0x3f2d48,_0x3feba1,_0x25a50a);},'PrDwa':function(_0x1c2b04,_0x14bad4,_0x57a0d8,_0x5d6ac0,_0x56b175,_0x4aaf7e){return _0x1c2b04(_0x14bad4,_0x57a0d8,_0x5d6ac0,_0x56b175,_0x4aaf7e);},'Ubxqh':function(_0x53fc79,_0x21f73e,_0x553d1f){var _0x1d1e88=_0x485bd3;return _0x50128c[_0x1d1e88(0x192)](_0x53fc79,_0x21f73e,_0x553d1f);},'cEmrv':'Count'+'ers','eHVgA':_0x485bd3(0x559),'awjKD':function(_0x36d6da,_0x52dee4){return _0x50128c['frkez'](_0x36d6da,_0x52dee4);},'qVUnQ':'zJpFC','khSlv':_0x50128c[_0x485bd3(0x3c9)],'dFeuT':'Safe\x20'+'Mode\x20'+_0x485bd3(0x4ee)+_0x485bd3(0x2cc)+_0x485bd3(0x5d1),'pDHou':_0x50128c['LtdiQ'],'SRZIR':function(_0x1dda2c,_0x4b1b2d,_0x44bfda,_0x1127fd,_0x3eced2,_0x37b278){var _0x5ee5b1=_0x485bd3;return _0x50128c[_0x5ee5b1(0x4ba)](_0x1dda2c,_0x4b1b2d,_0x44bfda,_0x1127fd,_0x3eced2,_0x37b278);},'iHHIW':_0x485bd3(0x483)+'one\x20i'+_0x485bd3(0x36f)+'ls\x20a\x20'+_0x485bd3(0x35e)+'tramp'+_0x485bd3(0x59a)+'\x20for\x20'+'the\x20w'+'hole\x20'+_0x485bd3(0x1cc)+'load.'+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+_0x485bd3(0x211)+_0x485bd3(0xb7)+_0x485bd3(0x58b)+'ure\x20t'+'hat\x20d'+_0x485bd3(0x4fc)+_0x485bd3(0x3a5)+_0x485bd3(0x5b7)+'he\x20re'+'al\x20me'+_0x485bd3(0x83)+_0x485bd3(0x2bf)+_0x485bd3(0x281)+_0x485bd3(0xfa)+_0x485bd3(0x53c)+_0x485bd3(0xeb)+_0x485bd3(0x24f)+_0x485bd3(0x50b)+_0x485bd3(0xcb)+'\x20mome'+_0x485bd3(0x46f)+_0x485bd3(0x154)+_0x485bd3(0x388)+'.\x20Tur'+'n\x20the'+_0x485bd3(0x3bc)+_0x485bd3(0xbb)+_0x485bd3(0xb5)+'ime,\x20'+_0x485bd3(0x489)+_0x485bd3(0xc4)+_0x485bd3(0x208)+'\x20whic'+'h\x20one'+_0x485bd3(0x479)+_0x485bd3(0x94)+'d\x20cho'+_0x485bd3(0x2de)+'n.','wASCD':function(_0x2a65de,_0x51d806,_0x479db8,_0x3697b8){return _0x2a65de(_0x51d806,_0x479db8,_0x3697b8);},'TYzBB':_0x50128c['mfoHB'],'pyXGI':_0x50128c[_0x485bd3(0x2a1)],'PZbln':function(_0x14776f,_0xb8e7d1,_0x3ade69,_0x2851c6,_0x2822e5,_0x51f923){var _0x3c3a86=_0x485bd3;return _0x50128c[_0x3c3a86(0x4ba)](_0x14776f,_0xb8e7d1,_0x3ade69,_0x2851c6,_0x2822e5,_0x51f923);},'zvQnT':'Disab'+'les\x20C'+_0x485bd3(0x51c)+_0x485bd3(0x2fc)+_0x485bd3(0x274)+_0x485bd3(0x5ba)+_0x485bd3(0x81)+'rtup\x20'+_0x485bd3(0x250)+_0x485bd3(0x4ce)+_0x485bd3(0x142)+_0x485bd3(0x1dc)+_0x485bd3(0x4ad)+_0x485bd3(0x1ad),'njMLI':_0x50128c[_0x485bd3(0x229)],'uyjGX':_0x50128c[_0x485bd3(0x9b)],'DwfzY':'4|0|2'+_0x485bd3(0x3db)+'3','bBbDa':'style','pXsLh':_0x485bd3(0x2dc),'UdZbm':function(_0x3a36db){return _0x3a36db();},'pItTm':_0x50128c['bMqRr'],'kJPvk':_0x485bd3(0x573)+_0x485bd3(0x10f),'ybXYD':'held','PvxHq':'div','BuIBz':_0x485bd3(0x212)+'de','zCBIr':_0x485bd3(0x563)+'viewB'+_0x485bd3(0x9c)+'\x200\x2024'+'\x2024\x22\x20'+_0x485bd3(0x3c0)+_0x485bd3(0x416)+_0x485bd3(0x22d)+_0x485bd3(0x36d)+'<path'+_0x485bd3(0x431)+'12\x2021'+_0x485bd3(0x91)+_0x485bd3(0x42c)+'4-4.5'+_0x485bd3(0x197)+_0x485bd3(0x56f)+_0x485bd3(0x24d)+_0x485bd3(0x338)+'\x204-4.'+_0x485bd3(0xdc)+_0x485bd3(0x2cf)+'5c0\x203'+_0x485bd3(0x203)+_0x485bd3(0x353)+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+_0x485bd3(0x423)+_0x485bd3(0x4be)+_0x485bd3(0x18b)+_0x485bd3(0x5b4)+_0x485bd3(0x441)+_0x485bd3(0xf6)+'\x20stro'+_0x485bd3(0x1a8)+_0x485bd3(0x1fd)+'=\x22rou'+_0x485bd3(0xbc)+_0x485bd3(0x5b4)+_0x485bd3(0x201)+_0x485bd3(0x546)+_0x485bd3(0x210)+'d\x22/><'+_0x485bd3(0x20a)+_0x485bd3(0x32b)+'\x2212\x22\x20'+_0x485bd3(0x1b0)+_0x485bd3(0x499)+_0x485bd3(0x3eb)+_0x485bd3(0x3dd)+'=\x22#ff'+_0x485bd3(0x93)+_0x485bd3(0x1c2)+_0x485bd3(0x293),'sictn':_0x485bd3(0x23c)+'in','xvVPc':_0x485bd3(0x40e),'CYmTU':_0x50128c[_0x485bd3(0x286)],'UtqrQ':_0x50128c['uHHIm'],'rclNH':_0x485bd3(0x134),'OWtHr':'mn-ta'+'b','ooGpZ':function(_0x465657,_0x3ee9f1){return _0x50128c['WcZBh'](_0x465657,_0x3ee9f1);},'ATSQU':function(_0x26a82a,_0x55c5af){var _0x41759d=_0x485bd3;return _0x50128c[_0x41759d(0x387)](_0x26a82a,_0x55c5af);},'BShdx':function(_0x211eb3,_0x47ad52,_0x19a4d6){return _0x211eb3(_0x47ad52,_0x19a4d6);},'ACDen':function(_0x4108c3,_0x4f085a){var _0x1171e0=_0x485bd3;return _0x50128c[_0x1171e0(0x1a5)](_0x4108c3,_0x4f085a);}};_0x33347f[_0x485bd3(0x5e2)+'ck']&&_0x50128c[_0x485bd3(0x400)](setInterval,()=>{var _0x2e0995=_0x485bd3;try{if(_0x50128c[_0x2e0995(0x59c)]==='GDjvO'){if(!_0x24c3a2[_0x2e0995(0x448)+_0x2e0995(0x119)])_0x16ac7d[_0x2e0995(0x2b3)+'e'](_0x58a396['fOpgo']('mouse',_0x58a396['fOpgo'](_0x5f5b18[_0x2e0995(0x260)+'n'],0xa3*0x13+-0x1ce2+0x10ca)));}else for(var _0x57dc4c of[_0x2e0995(0x88)+'io_30'+_0x2e0995(0x3aa)+_0x2e0995(0x132)+'nt',_0x2e0995(0x88)+'io_72'+'8x90-'+_0x2e0995(0x497)+'t',_0x2e0995(0x88)+_0x2e0995(0x3ef)+_0x2e0995(0x3c7)+'-pare'+'nt',_0x2e0995(0x2da)+'creen'+_0x2e0995(0x1f0)+'s']){var _0x3764f1=document[_0x2e0995(0x5a7)+'ement'+'ById'](_0x57dc4c);if(_0x3764f1&&_0x57dc4c==='fulls'+_0x2e0995(0x41b)+_0x2e0995(0x1f0)+'s'){if(_0x50128c[_0x2e0995(0x4f3)](_0x2e0995(0x144),'JsKAU')){var _0x3d9b68=_0x3764f1['child'+'ren'];for(var _0x32c79c=-0x3*0xcdf+0x1*0x10f2+0x1*0x15ab;_0x32c79c<_0x3d9b68[_0x2e0995(0x296)+'h'];_0x32c79c++){if(_0x3d9b68[_0x32c79c]['id']&&_0x3d9b68[_0x32c79c]['id'][_0x2e0995(0xff)+'Of'](_0x2e0995(0x88)+_0x2e0995(0x156))===-0x17*-0x71+0x1e29+0x2b*-0xf0)_0x3d9b68[_0x32c79c]['style']['displ'+'ay']='none';}}else new _0x5deb4e(_0x528b6c)['write'+_0x2e0995(0xf0)](_0xf7d2f,_0x5ed058,_0x1baf99);}else{if(_0x3764f1)_0x3764f1['style'][_0x2e0995(0x447)+'ay']=_0x50128c['CFZxw'];}}}catch(_0x49604e){}},0x394*-0x4+0x11*-0x48+0x1ae8);var _0x157a8b=document[_0x485bd3(0x455)+'eElem'+'ent']('canva'+'s');_0x157a8b[_0x485bd3(0x361)][_0x485bd3(0x5a0)+'xt']=_0x485bd3(0x3f2)+_0x485bd3(0x4e3)+'ixed;'+'inset'+_0x485bd3(0x5e6)+_0x485bd3(0x5bf)+_0x485bd3(0x5a5)+_0x485bd3(0x44f)+_0x485bd3(0xc6)+'vh;z-'+_0x485bd3(0xff)+':2147'+'48364'+'6;poi'+_0x485bd3(0x382)+_0x485bd3(0x186)+'s:non'+'e';var _0x34fa92=_0x157a8b[_0x485bd3(0x58a)+_0x485bd3(0xec)]('2d');function _0x1f7a68(){var _0xc87562=_0x485bd3;try{var _0x249f7d=document[_0xc87562(0x2da)+_0xc87562(0x41b)+_0xc87562(0x46c)+'nt'],_0x59f7d1=_0x249f7d&&_0x58a396['dIOQb'](_0x249f7d[_0xc87562(0x204)+'me'],'CANVA'+'S')?_0x249f7d:document[_0xc87562(0x178)]||document[_0xc87562(0x474)+_0xc87562(0x34a)+_0xc87562(0x111)];if(_0x157a8b['paren'+'tNode']!==_0x59f7d1)_0x59f7d1[_0xc87562(0x1e4)+_0xc87562(0x1d1)+'d'](_0x157a8b);}catch(_0x24b6a){try{document['body'][_0xc87562(0x1e4)+_0xc87562(0x1d1)+'d'](_0x157a8b);}catch(_0x20c8e1){}}}var _0x17e3c2={'w':0x0,'h':0x0,'dpr':0x0};function _0xd009d5(){var _0x2805a2=_0x485bd3,_0x2631db=window['devic'+_0x2805a2(0x520)+_0x2805a2(0x44b)+'o']||-0x1c4b*-0x1+-0x12*-0xf0+-0x6*0x787,_0x5a263f=window[_0x2805a2(0x4a1)+_0x2805a2(0x558)],_0x22feec=window['inner'+'Heigh'+'t'];if(_0x5a263f===_0x17e3c2['w']&&_0x22feec===_0x17e3c2['h']&&_0x2631db===_0x17e3c2[_0x2805a2(0x12c)])return;_0x17e3c2['w']=_0x5a263f,_0x17e3c2['h']=_0x22feec,_0x17e3c2['dpr']=_0x2631db,_0x157a8b[_0x2805a2(0x5b1)]=Math['round'](_0x5a263f*_0x2631db),_0x157a8b[_0x2805a2(0x44f)+'t']=Math[_0x2805a2(0x12e)](_0x50128c[_0x2805a2(0x2e5)](_0x22feec,_0x2631db)),_0x34fa92['setTr'+_0x2805a2(0x3d6)+'rm'](_0x2631db,-0x169f+-0x13b*0xc+0x2563,-0x1275+0x55*0x53+0x91a*-0x1,_0x2631db,0x66+-0x20ef+0x2089,0x1f0f*-0x1+0xaee+0x1421*0x1);}var _0x544e3f=-0x1adf+-0x425+0x14*0x18d,_0x1d28b8=performance[_0x485bd3(0x4b6)](),_0x1d61a8=0x1fbc+0x1754+-0x371*0x10;function _0x25a62a(_0x443984){var _0x55ba33=_0x485bd3,_0x5009d7=Number(_0x33347f[_0x55ba33(0x5a9)+'le'])||0x2fd*0x8+0x341*0x6+-0x2b6d*0x1,_0x764e23=_0x50128c[_0x55ba33(0x11b)](0x7df+0x1*-0x1af5+0x1338,_0x5009d7),_0x48131a=(-0x3*0x761+0x228a*0x1+-0xc63)*_0x5009d7,_0x5eb0dc=_0x50128c[_0x55ba33(0x316)](_0x764e23*(-0x25c9*0x1+0x1f26+0x6a6),_0x50128c[_0x55ba33(0x375)](_0x48131a,0x20dd+0xde6+-0x2ec1)),_0xf2380d=_0x50128c['KaAkw'](_0x764e23,-0xaec+-0x2f*0x5f+-0x4*-0x718)+_0x50128c[_0x55ba33(0x2c5)](_0x48131a,-0x2b3*0x5+0x173b+-0x9ba),_0x358275=_0x33347f[_0x55ba33(0x2d2)],_0x32b5eb=_0x358275==='br'?_0x50128c['TOFZV'](_0x443984[_0x55ba33(0x25d)],0x18c6+0x4*0x474+-0x2a86)-_0x5eb0dc:_0x50128c[_0x55ba33(0x3f8)](_0x443984[_0x55ba33(0x49c)],-0x1feb+0x11f9+0xe02),_0x2c4d86=_0x358275==='ml'?_0x443984['top']+_0x443984[_0x55ba33(0x44f)+'t']/(0x3*0xa8b+0x1*-0x222+-0x1d7d)-_0xf2380d/(-0x12*0x1bf+0x13d8+0xb98):_0x50128c['bRllm'](_0x443984['botto'+'m']-_0xf2380d,_0x358275==='bl'?-0x18b6+0x1303*-0x1+-0x47*-0x9f:0x173a+0x751+0x1df5*-0x1),_0x31fdb1=(_0x2970cd,_0x506f9a,_0x1ba24c,_0x3d219e,_0x2dac5b,_0x4f144e,_0x40e857)=>{var _0x2e60cd=_0x55ba33,_0x71ad0a=(_0x2e60cd(0x2ec)+'4|13|'+_0x2e60cd(0x4de)+'0|10|'+_0x2e60cd(0x133)+_0x2e60cd(0x5e9)+_0x2e60cd(0x191)+_0x2e60cd(0xa0))[_0x2e60cd(0x1b4)]('|'),_0x3a2964=-0x241f+0x1d7b+-0x32*-0x22;while(!![]){switch(_0x71ad0a[_0x3a2964++]){case'0':_0x34fa92['lineW'+_0x2e60cd(0x44a)]=-0x7b1*0x1+0x1*0xff3+-0x1*0x841;continue;case'1':_0x34fa92['fillS'+_0x2e60cd(0x2d9)]=_0x2eeb3b?_0x58a396['jsyqa']:_0x2e60cd(0x4e9)+'255,2'+_0x2e60cd(0x561)+_0x2e60cd(0x8e)+')';continue;case'2':_0x34fa92['fillT'+'ext'](_0x2970cd,_0x1ba24c+_0x58a396['EOtzs'](_0x2dac5b,-0xc95+0x16ed*-0x1+-0x8e1*-0x4),_0x58a396[_0x2e60cd(0x575)](_0x3d219e+_0x4f144e/(0x394*-0x1+-0x23ad+-0x17*-0x1b5),_0x40e857?_0x58a396[_0x2e60cd(0x57d)](0xfc9+0x11fc+0x240*-0xf,_0x5009d7):0x5*-0x6b3+-0x167*-0x7+0x17ae*0x1));continue;case'3':_0x34fa92[_0x2e60cd(0x350)+'re']();continue;case'4':_0x34fa92[_0x2e60cd(0xc8)+_0x2e60cd(0x2d9)]=_0x2eeb3b?_0x58a396[_0x2e60cd(0x2f0)]:_0x58a396[_0x2e60cd(0x4d3)];continue;case'5':var _0x2eeb3b=_0x65e0e0[_0x2e60cd(0x56d)](_0x506f9a);continue;case'6':_0x34fa92[_0x2e60cd(0xd2)]();continue;case'7':_0x34fa92['strok'+'e']();continue;case'8':_0x34fa92['textB'+'aseli'+'ne']='middl'+'e';continue;case'9':_0x34fa92[_0x2e60cd(0x262)]=_0x58a396['fOpgo'](_0x58a396['NJpSO'],Math['round'](_0x58a396['ykMLn'](0x198f+0x511*0x3+0x9*-0x486,_0x5009d7)))+(_0x2e60cd(0x543)+_0x2e60cd(0x40d)+_0x2e60cd(0x5a3)+_0x2e60cd(0x269)+'tem-u'+_0x2e60cd(0x3b0)+_0x2e60cd(0x4b7)+'if');continue;case'10':_0x34fa92[_0x2e60cd(0x20c)+_0x2e60cd(0x2bb)+'e']=_0x2eeb3b?_0x322a48:_0x2e60cd(0x4e9)+_0x2e60cd(0x18a)+_0x2e60cd(0x2d5)+'7,0.3'+'5)';continue;case'11':_0x2eeb3b&&(_0x34fa92[_0x2e60cd(0x20e)+'wColo'+'r']=_0x19a4b0,_0x34fa92[_0x2e60cd(0x20e)+_0x2e60cd(0x57f)]=0xed*0x7+-0x128+-0x545*0x1,_0x34fa92['fill'](),_0x34fa92[_0x2e60cd(0x20e)+'wBlur']=0x58*-0x55+0x5c3+-0x4b1*-0x5);continue;case'12':_0x34fa92[_0x2e60cd(0x5dc)]();continue;case'13':if(_0x34fa92[_0x2e60cd(0x12e)+'Rect'])_0x34fa92[_0x2e60cd(0x12e)+_0x2e60cd(0x79)](_0x1ba24c,_0x3d219e,_0x2dac5b,_0x4f144e,(0x1cf1+0x26ab+-0x4395)*_0x5009d7);else _0x34fa92[_0x2e60cd(0x254)](_0x1ba24c,_0x3d219e,_0x2dac5b,_0x4f144e);continue;case'14':_0x34fa92['begin'+_0x2e60cd(0x317)]();continue;case'15':_0x40e857&&(_0x34fa92[_0x2e60cd(0x262)]=_0x58a396[_0x2e60cd(0x4ae)](_0x2e60cd(0x3f0),Math[_0x2e60cd(0x12e)](_0x58a396[_0x2e60cd(0x4c8)](-0x11de+-0x1093+0x2*0x113d,_0x5009d7)))+(_0x2e60cd(0x543)+'-sans'+_0x2e60cd(0x5a3)+'f,sys'+_0x2e60cd(0x40b)+'i,san'+'s-ser'+'if'),_0x34fa92['fillS'+_0x2e60cd(0x2d9)]=_0x2eeb3b?_0x58a396[_0x2e60cd(0x38e)]:_0x58a396[_0x2e60cd(0x8d)],_0x34fa92[_0x2e60cd(0x333)+_0x2e60cd(0x3d0)](_0x40e857,_0x1ba24c+_0x58a396[_0x2e60cd(0x1e3)](_0x2dac5b,-0x1435*0x1+0x623*0x5+0x8*-0x14f),_0x58a396['dPmFD'](_0x3d219e,_0x4f144e/(0x8*-0x427+-0x1528+-0x2*-0x1b31))+_0x58a396[_0x2e60cd(0x492)](0x4a*0x44+-0x1a5+-0x1*0x11fb,_0x5009d7)));continue;case'16':_0x34fa92[_0x2e60cd(0x3a1)+_0x2e60cd(0x484)]=_0x58a396['ihZMx'];continue;}break;}};_0x31fdb1('W',_0x55ba33(0x47f),_0x50128c['RkVIi'](_0x32b5eb,_0x764e23)+_0x48131a,_0x2c4d86,_0x764e23,_0x764e23),_0x50128c[_0x55ba33(0x309)](_0x31fdb1,'A',_0x50128c[_0x55ba33(0xe5)],_0x32b5eb,_0x50128c['FzhBd'](_0x2c4d86+_0x764e23,_0x48131a),_0x764e23,_0x764e23),_0x50128c['oFhCq'](_0x31fdb1,'S',_0x55ba33(0x2f3),_0x50128c[_0x55ba33(0xb2)](_0x32b5eb,_0x764e23)+_0x48131a,_0x50128c['BkHDb'](_0x2c4d86,_0x764e23)+_0x48131a,_0x764e23,_0x764e23),_0x31fdb1('D','KeyD',_0x32b5eb+_0x50128c[_0x55ba33(0xa1)](_0x764e23,_0x48131a)*(0x85*0x25+-0x156*-0x8+-0x1de7),_0x50128c[_0x55ba33(0x1a2)](_0x2c4d86,_0x764e23)+_0x48131a,_0x764e23,_0x764e23);var _0x308f06=_0x50128c[_0x55ba33(0x391)](_0x5eb0dc,_0x48131a)/(0x6af+-0xd12*-0x1+-0x13bf),_0x2b97b4=_0x2c4d86+(_0x764e23+_0x48131a)*(0x354*0x2+0x1e48+0xa3*-0x3a);_0x50128c[_0x55ba33(0x552)](_0x31fdb1,_0x55ba33(0x49f),_0x55ba33(0xc0)+'1',_0x32b5eb,_0x2b97b4,_0x308f06,_0x764e23,_0x33347f[_0x55ba33(0x2c1)]?_0x50128c['cMejm'](_0x3f4a5d(0x3*-0x59b+-0x1*0x10bf+0x2191),'\x20CPS'):''),_0x31fdb1(_0x50128c[_0x55ba33(0x245)],_0x55ba33(0xc0)+'3',_0x32b5eb+_0x308f06+_0x48131a,_0x2b97b4,_0x308f06,_0x764e23,_0x33347f['ksCps']?_0x50128c['BHHPY'](_0x3f4a5d,-0x4*-0x655+0x808+-0x2159*0x1)+_0x50128c[_0x55ba33(0x31c)]:''),_0x50128c[_0x55ba33(0x309)](_0x31fdb1,'','Space',_0x32b5eb,_0x50128c[_0x55ba33(0x2ea)](_0x50128c[_0x55ba33(0x16b)](_0x2b97b4,_0x764e23),_0x48131a),_0x5eb0dc,_0x50128c[_0x55ba33(0x11b)](_0x764e23,-0x2422+0x1261*0x2+-0xa0+0.45));}function _0x5ccb53(_0x34f0a7){var _0x3aed8a=_0x485bd3,_0x9f44d3=_0x58a396['ClKgn'](_0x34f0a7['width'],-0x601*-0x3+0x327*-0x2+-0x257*0x5),_0x5f51d5=_0x34f0a7[_0x3aed8a(0x44f)+'t']/(-0x59d+0x1*0x21d7+-0x1c38),_0xd25321=_0x58a396[_0x3aed8a(0x1ca)](Number,_0x33347f[_0x3aed8a(0xb1)+'e'])||-0x1f*-0x52+-0x1166+0x1*0x779,_0x2f3d35=/^#[0-9a-f]{6}$/i[_0x3aed8a(0x5cb)](_0x33347f[_0x3aed8a(0x460)+'or'])?_0x33347f['chCol'+'or']:_0x58a396[_0x3aed8a(0x438)];_0x34fa92[_0x3aed8a(0xd2)](),_0x34fa92['strok'+'eStyl'+'e']=_0x2f3d35,_0x34fa92['fillS'+_0x3aed8a(0x2d9)]=_0x2f3d35,_0x34fa92[_0x3aed8a(0x217)+_0x3aed8a(0x44a)]=Math['max'](0x129a+0xd1e+-0x1*0x1fb7+0.5,_0x58a396[_0x3aed8a(0x4c8)](0x34*0x7d+0x191b*0x1+-0x497*0xb,_0xd25321)),_0x34fa92['shado'+'wColo'+'r']=_0x2f3d35,_0x34fa92['shado'+'wBlur']=-0x226f*0x1+0x115*-0x1f+0x110*0x40;var _0x2e24c9=_0x58a396['pEQul'](-0xef*-0x1b+0x89f+0x2*-0x10e7,_0xd25321),_0x404df5=(-0x1346+0x1f50+-0xc02)*_0xd25321;_0x34fa92[_0x3aed8a(0x3b7)+_0x3aed8a(0x317)](),_0x34fa92['moveT'+'o'](_0x58a396[_0x3aed8a(0x592)](_0x58a396[_0x3aed8a(0x2b4)](_0x9f44d3,_0x2e24c9),_0x404df5),_0x5f51d5),_0x34fa92[_0x3aed8a(0x548)+'o'](_0x9f44d3-_0x2e24c9,_0x5f51d5),_0x34fa92[_0x3aed8a(0x4ec)+'o'](_0x9f44d3+_0x2e24c9,_0x5f51d5),_0x34fa92[_0x3aed8a(0x548)+'o'](_0x9f44d3+_0x2e24c9+_0x404df5,_0x5f51d5),_0x34fa92[_0x3aed8a(0x4ec)+'o'](_0x9f44d3,_0x5f51d5-_0x2e24c9-_0x404df5),_0x34fa92[_0x3aed8a(0x548)+'o'](_0x9f44d3,_0x58a396[_0x3aed8a(0x580)](_0x5f51d5,_0x2e24c9)),_0x34fa92['moveT'+'o'](_0x9f44d3,_0x58a396[_0x3aed8a(0x54d)](_0x5f51d5,_0x2e24c9)),_0x34fa92[_0x3aed8a(0x548)+'o'](_0x9f44d3,_0x58a396['ncuTU'](_0x5f51d5+_0x2e24c9,_0x404df5)),_0x34fa92[_0x3aed8a(0x20c)+'e'](),_0x34fa92[_0x3aed8a(0x3b7)+'Path'](),_0x34fa92[_0x3aed8a(0x594)](_0x9f44d3,_0x5f51d5,(0x51d*-0x1+0x248a+-0x1f6c+0.6000000000000001)*_0xd25321,-0x138b*0x1+0x2413+-0x1*0x1088,Math['PI']*(-0xa19*-0x1+-0x33*-0x6d+0xa9a*-0x3)),_0x34fa92[_0x3aed8a(0x5dc)](),_0x34fa92[_0x3aed8a(0x350)+'re']();}function _0x58c240(_0x185e83){var _0x503dd0=_0x485bd3,_0x1c9a36=_0x58a396['eoLjb'][_0x503dd0(0x1b4)]('|'),_0x4e7a7c=0x1*-0x229b+-0xbab+0x2e46;while(!![]){switch(_0x1c9a36[_0x4e7a7c++]){case'0':var _0x2fd035=0x182a+-0x1*0xbff+0x1*-0xbff,_0x1dc63c=-0x206b*0x1+0x298+0x1ddf;continue;case'1':_0x34fa92[_0x503dd0(0x3a1)+_0x503dd0(0x484)]=_0x58a396[_0x503dd0(0x5e5)];continue;case'2':if(!_0x5a1816[_0x503dd0(0x586)+_0x503dd0(0x3bb)])_0x3f8840('waiti'+_0x503dd0(0x50a)+_0x503dd0(0x414)+'e…','rgba('+_0x503dd0(0x18a)+_0x503dd0(0x29f)+_0x503dd0(0x1ea)+')');continue;case'3':_0x34fa92[_0x503dd0(0x262)]='600\x201'+_0x503dd0(0x2f8)+_0x503dd0(0x35d)+_0x503dd0(0x24b)+_0x503dd0(0x15c)+_0x503dd0(0x24b)+'e';continue;case'4':if(_0x33347f[_0x503dd0(0x5b8)])_0x58a396[_0x503dd0(0x24a)](_0x3f8840,_0x1d61a8+_0x58a396['GROdN']);continue;case'5':_0x3f8840(_0x58a396[_0x503dd0(0x3cd)],_0x503dd0(0x4be)+'9d');continue;case'6':_0x34fa92[_0x503dd0(0xe7)+'aseli'+'ne']=_0x503dd0(0x54a);continue;case'7':var _0x3f8840=(_0x1caecb,_0x6cfa0b)=>{var _0x45f96e=_0x503dd0;_0x34fa92[_0x45f96e(0xc8)+_0x45f96e(0x2d9)]=_0x6cfa0b||_0x45f96e(0x4e9)+'255,2'+'35,24'+'0,0.7'+'5)',_0x34fa92[_0x45f96e(0x333)+_0x45f96e(0x3d0)](_0x1caecb,_0x1dc63c,_0x2fd035),_0x2fd035+=0x1811*-0x1+-0x23d2+-0x1*-0x3bf3;};continue;case'8':_0x34fa92[_0x503dd0(0xd2)]();continue;case'9':_0x34fa92['resto'+'re']();continue;}break;}}function _0x48a9f8(){var _0x4ea0fd=_0x485bd3;requestAnimationFrame(_0x48a9f8),_0x544e3f++;var _0x1f7ddc=performance['now']();_0x1f7ddc-_0x1d28b8>=-0x417+0x5*-0x103+0xb1a&&(_0x1d61a8=Math['round'](_0x544e3f*(0x212*-0xb+-0x23*-0x6b+-0x5*-0x269)/_0x58a396[_0x4ea0fd(0x592)](_0x1f7ddc,_0x1d28b8)),_0x544e3f=0x24e7*0x1+-0x13bd+-0x112a*0x1,_0x1d28b8=_0x1f7ddc);_0xd009d5(),_0x1f7a68(),_0x34fa92[_0x4ea0fd(0x24c)+'Rect'](0x1869+-0x7b7*-0x1+-0x2020,-0x13e5+-0xab7*0x1+0x28d*0xc,_0x17e3c2['w'],_0x17e3c2['h']);var _0x4992c5={'left':0x0,'top':0x0,'right':_0x17e3c2['w'],'bottom':_0x17e3c2['h'],'width':_0x17e3c2['w'],'height':_0x17e3c2['h']};if(_0x33347f[_0x4ea0fd(0xcd)+'hair'])_0x5ccb53(_0x4992c5);if(_0x33347f['keyst'+'rokes'])_0x25a62a(_0x4992c5);_0x58c240(_0x4992c5);}var _0x17bcc7=document[_0x485bd3(0x455)+_0x485bd3(0x4c7)+'ent'](_0x485bd3(0x3de));_0x17bcc7['id']='sakur'+_0x485bd3(0x299),_0x17bcc7['style']['cssTe'+'xt']=_0x485bd3(0x3f2)+_0x485bd3(0x4e3)+_0x485bd3(0x337)+'inset'+':0;z-'+_0x485bd3(0xff)+':2147'+'48364'+'7;poi'+_0x485bd3(0x382)+_0x485bd3(0x186)+'s:non'+'e;';var _0x50fd9c=_0x17bcc7[_0x485bd3(0x393)+'hShad'+'ow']({'mode':_0x485bd3(0xdf)});(document[_0x485bd3(0x178)]||document[_0x485bd3(0x474)+_0x485bd3(0x34a)+_0x485bd3(0x111)])['appen'+'dChil'+'d'](_0x17bcc7);var _0x5a514c=![],_0x2812c1={};try{_0x2812c1=JSON['parse'](localStorage[_0x485bd3(0xed)+'em'](_0x50128c[_0x485bd3(0x551)])||'{}');}catch(_0x129ddc){}function _0x5492b1(){var _0x48c0d0=_0x485bd3;try{localStorage[_0x48c0d0(0x141)+'em'](_0x48c0d0(0x3f3)+_0x48c0d0(0x373)+_0x48c0d0(0x251)+'v1',JSON[_0x48c0d0(0x246)+_0x48c0d0(0x451)](_0x2812c1));}catch(_0x323b4c){}}function _0x45d856(_0x2efede,_0x52dc9e){var _0x361fb0=_0x485bd3;if(_0x50128c[_0x361fb0(0x102)]!==_0x50128c['UReDK']){var _0x5055f0=_0x50128c['VQFBt'][_0x361fb0(0x1b4)]('|'),_0x5ae17b=0xb35+-0x5ef*-0x1+0x4*-0x449;while(!![]){switch(_0x5055f0[_0x5ae17b++]){case'0':return _0x2ef9b3;case'1':_0x2ef9b3[_0x361fb0(0x4da)+'ck']=_0x27ded7=>{var _0x32e1b0=_0x361fb0;_0x27ded7['stopP'+_0x32e1b0(0x4a7)+_0x32e1b0(0x5ab)]();var _0x2208dc=_0x58a396[_0x32e1b0(0xbd)](_0x2ef9b3['getAt'+_0x32e1b0(0x1f1)+'te'](_0x32e1b0(0x42b)+'check'+'ed'),_0x58a396[_0x32e1b0(0x459)]);_0x2ef9b3['setAt'+'tribu'+'te'](_0x32e1b0(0x42b)+_0x32e1b0(0x535)+'ed',_0x58a396[_0x32e1b0(0x1ca)](String,_0x2208dc)),_0x52dc9e(_0x2208dc);};continue;case'2':var _0x2ef9b3=document[_0x361fb0(0x455)+'eElem'+_0x361fb0(0x378)](_0x361fb0(0x260)+'n');continue;case'3':_0x2ef9b3[_0x361fb0(0x480)+_0x361fb0(0x1f1)+'te'](_0x50128c['gWYoT'],_0x50128c['fVylM'](String,!!_0x2efede));continue;case'4':_0x2ef9b3[_0x361fb0(0x462)]='butto'+'n';continue;case'5':_0x2ef9b3[_0x361fb0(0x480)+'tribu'+'te']('role',_0x50128c['jqdtS']);continue;case'6':_0x2ef9b3[_0x361fb0(0x3c0)+_0x361fb0(0xce)]='sk-sw'+'itch';continue;}break;}}else{var _0x303f5c=_0x4eaa8a['hookP'+'refix']({'typeName':_0xcba1c2,'methodName':_0x492ab0,'params':_0x5ecdd3,'returnType':_0x589f82},_0xe076dc);return _0x303f5c[_0x361fb0(0x15f)+'ed']=_0x548870!==![],_0x2958f4[_0x4f98e3]=_0x303f5c,_0xb8f68c[_0x361fb0(0x55d)+'Total']++,_0x303f5c;}}function _0x5b53ff(_0x25a6bb,_0x48703a,_0x5492a6,_0x1c79bb,_0x2ef2f1){var _0x237547=_0x485bd3,_0xc903c8={'kVvzo':'top','JmJkW':'SAKUR'+_0x237547(0x478)+'R\x20v1.'+'1','MhMba':'#ff6b'+'9d','hHVdQ':function(_0x6ce5a6,_0x6d53e5){var _0x6f3fd4=_0x237547;return _0x58a396[_0x6f3fd4(0xa8)](_0x6ce5a6,_0x6d53e5);},'fDsNA':_0x237547(0x194)};if(_0x58a396[_0x237547(0x418)](_0x237547(0x385),_0x237547(0x385))){var _0x166a35={'TaKLp':'rgba('+_0x237547(0x366)+'35,24'+_0x237547(0x584)+'5)'};_0x2e6d71[_0x237547(0xd2)](),_0x2f834b[_0x237547(0x262)]=_0x237547(0x55f)+_0x237547(0x2f8)+_0x237547(0x35d)+'ospac'+_0x237547(0x15c)+_0x237547(0x24b)+'e',_0x40ebf0['textA'+_0x237547(0x484)]='left',_0x5cc97d[_0x237547(0xe7)+_0x237547(0x152)+'ne']=_0xc903c8['kVvzo'];var _0xf67384=-0x1a96+0x154c+0x1d2*0x3,_0x549dae=0x37*0x87+0x11b9*0x1+0x1757*-0x2,_0x255641=(_0x9ea3a5,_0xd4e0dd)=>{var _0x333505=_0x237547;_0x508a52[_0x333505(0xc8)+_0x333505(0x2d9)]=_0xd4e0dd||_0x166a35[_0x333505(0x1f8)],_0x4bcaa7['fillT'+_0x333505(0x3d0)](_0x9ea3a5,_0x549dae,_0xf67384),_0xf67384+=-0x242e+0x1*0x1d8c+0x6b2;};_0x255641(_0xc903c8[_0x237547(0x258)],_0xc903c8[_0x237547(0x371)]);if(_0x56e0b5['fps'])_0xc903c8[_0x237547(0x227)](_0x255641,_0x57b98b+_0xc903c8[_0x237547(0x5a6)]);if(!_0x2e9282[_0x237547(0x586)+_0x237547(0x3bb)])_0x255641('waiti'+_0x237547(0x50a)+'r\x20gam'+'e…','rgba('+_0x237547(0x18a)+'80,19'+_0x237547(0x1ea)+')');_0x3afdf5[_0x237547(0x350)+'re']();}else{var _0x58fdc9=document['creat'+'eElem'+_0x237547(0x378)](_0x237547(0x3de));_0x58fdc9['class'+'Name']='sk-ra'+'nge';var _0x4ed002=document[_0x237547(0x455)+_0x237547(0x4c7)+_0x237547(0x378)](_0x237547(0x2cb));_0x4ed002[_0x237547(0x462)]='range',_0x4ed002[_0x237547(0x3c0)+_0x237547(0xce)]=_0x237547(0x3c1)+'ider',_0x4ed002['min']=_0x48703a,_0x4ed002['max']=_0x5492a6,_0x4ed002[_0x237547(0x28a)]=_0x1c79bb,_0x4ed002[_0x237547(0x1a4)]=_0x25a6bb;var _0x272888=document[_0x237547(0x455)+_0x237547(0x4c7)+'ent'](_0x58a396['rvGpc']);_0x272888['class'+_0x237547(0xce)]='sk-va'+'l',_0x272888['textC'+'onten'+'t']=_0x58a396[_0x237547(0x589)](String,_0x25a6bb);var _0x2e34be=()=>{var _0x5eddc6=_0x237547;_0x272888['textC'+_0x5eddc6(0xf9)+'t']=_0x58a396[_0x5eddc6(0xa8)](String,_0x4ed002[_0x5eddc6(0x1a4)]),_0x58fdc9[_0x5eddc6(0x361)]['setPr'+_0x5eddc6(0x5b0)+'y']('--p',_0x58a396['Bwibk'](_0x58a396['xFstd'](_0x4ed002[_0x5eddc6(0x1a4)],_0x48703a)/(_0x5492a6-_0x48703a),-0x287*0x9+-0xbc9+0x22ec)+'%');};return _0x4ed002['oninp'+'ut']=()=>{var _0x227cef=_0x237547;_0x2e34be(),_0x58a396['yXKPf'](_0x2ef2f1,_0x58a396['HkLtt'](Number,_0x4ed002[_0x227cef(0x1a4)]));},_0x2e34be(),_0x58fdc9['appen'+'d'](_0x4ed002,_0x272888),_0x58fdc9;}}function _0x515321(_0x71f372,_0x1adbc5){var _0x5a3007=_0x485bd3,_0x5c2d36=document[_0x5a3007(0x455)+'eElem'+_0x5a3007(0x378)](_0x5a3007(0x2cb));return _0x5c2d36['type']='color',_0x5c2d36['class'+_0x5a3007(0xce)]=_0x5a3007(0x456)+'lor',_0x5c2d36['value']=/^#[0-9a-f]{6}$/i['test'](_0x71f372)?_0x71f372:_0x5a3007(0x4be)+'9d',_0x5c2d36[_0x5a3007(0x2cd)+'ut']=()=>_0x1adbc5(_0x5c2d36['value']),_0x5c2d36;}function _0x593f53(_0x3f047b,_0x843467,_0x136c73){var _0x5b830f=_0x485bd3,_0x4ac382=_0x50128c[_0x5b830f(0x16d)]['split']('|'),_0x55bc4c=-0x5*-0x392+-0x1431+0x257;while(!![]){switch(_0x4ac382[_0x55bc4c++]){case'0':var _0x21bae4=document['creat'+_0x5b830f(0x4c7)+'ent'](_0x5b830f(0x5b9)+'t');continue;case'1':_0x21bae4['class'+_0x5b830f(0xce)]=_0x50128c['HXLqX'];continue;case'2':return _0x21bae4;case'3':_0x21bae4[_0x5b830f(0x1a4)]=_0x3f047b;continue;case'4':_0x21bae4['oncha'+_0x5b830f(0x5d7)]=()=>_0x136c73(_0x21bae4['value']);continue;case'5':for(var [_0x91ed37,_0x24e463]of _0x843467){var _0x4166e1=document['creat'+_0x5b830f(0x4c7)+_0x5b830f(0x378)](_0x50128c['yDCfQ']);_0x4166e1[_0x5b830f(0x1a4)]=_0x91ed37,_0x4166e1['textC'+_0x5b830f(0xf9)+'t']=_0x24e463,_0x21bae4[_0x5b830f(0x1e4)+_0x5b830f(0x1d1)+'d'](_0x4166e1);}continue;}break;}}function _0xf4d675(_0x271168,_0x1a0cc2){var _0x6d950=_0x485bd3,_0x3c9938=('2|5|0'+_0x6d950(0x294)+'1')[_0x6d950(0x1b4)]('|'),_0x2d00ef=0x2016+-0x2*-0x592+0x1*-0x2b3a;while(!![]){switch(_0x3c9938[_0x2d00ef++]){case'0':_0x4a2a3f['class'+_0x6d950(0xce)]='sk-bt'+'n';continue;case'1':return _0x4a2a3f;case'2':var _0x4a2a3f=document[_0x6d950(0x455)+_0x6d950(0x4c7)+_0x6d950(0x378)](_0x6d950(0x260)+'n');continue;case'3':_0x4a2a3f[_0x6d950(0x4da)+'ck']=_0x183d62=>{var _0x3969ad=_0x6d950;_0x183d62[_0x3969ad(0xfc)+'ropag'+'ation'](),_0x58a396[_0x3969ad(0x57e)](_0x1a0cc2);};continue;case'4':_0x4a2a3f[_0x6d950(0x3e9)+_0x6d950(0xf9)+'t']=_0x271168;continue;case'5':_0x4a2a3f['type']=_0x6d950(0x260)+'n';continue;}break;}}function _0x2016f1(_0x5c5faf,_0xddb0d4,_0x34b241){var _0x68c11c=_0x485bd3,_0x16100c=_0x58a396[_0x68c11c(0x2aa)]['split']('|'),_0xb8aa48=-0xf23+-0x1922+0x2845;while(!![]){switch(_0x16100c[_0xb8aa48++]){case'0':if(_0xddb0d4){var _0x501f2c=document['creat'+'eElem'+'ent'](_0x58a396[_0x68c11c(0x305)]);_0x501f2c['class'+'Name']=_0x68c11c(0x44d)+'nt',_0x501f2c['textC'+_0x68c11c(0xf9)+'t']=_0xddb0d4,_0x41d66d['appen'+'dChil'+'d'](_0x501f2c);}continue;case'1':return _0x375bcd;case'2':_0x41d66d[_0x68c11c(0x3e9)+_0x68c11c(0xf9)+'t']=_0x5c5faf;continue;case'3':var _0x375bcd=document[_0x68c11c(0x455)+'eElem'+_0x68c11c(0x378)]('div');continue;case'4':_0x375bcd[_0x68c11c(0x1e4)+'d'](_0x41d66d,_0x34b241);continue;case'5':var _0x41d66d=document[_0x68c11c(0x455)+_0x68c11c(0x4c7)+'ent']('span');continue;case'6':_0x41d66d['class'+_0x68c11c(0xce)]='sk-la'+_0x68c11c(0x372);continue;case'7':_0x375bcd[_0x68c11c(0x3c0)+'Name']=_0x68c11c(0x98)+'l';continue;}break;}}function _0x510f86(_0x5bff6e,_0x10a00e){var _0x40ca8e=_0x485bd3,_0x432d40=document[_0x40ca8e(0x455)+_0x40ca8e(0x4c7)+'ent'](_0x40ca8e(0x3de));return _0x432d40['class'+_0x40ca8e(0xce)]=_0x50128c[_0x40ca8e(0x22f)]+(_0x10a00e?_0x40ca8e(0x31d):''),_0x432d40[_0x40ca8e(0x3e9)+'onten'+'t']=_0x5bff6e,_0x432d40;}function _0x169708(_0x587107,_0x7518f4,_0x59eea6,_0x474727,_0x8153b4){var _0x586d1c=_0x485bd3,_0x2c6569=('7|11|'+'10|6|'+_0x586d1c(0x10a)+'2|5|0'+_0x586d1c(0x143)+'2|3')['split']('|'),_0x6cd272=-0x8fb+-0x2*-0xae5+-0xccf;while(!![]){switch(_0x2c6569[_0x6cd272++]){case'0':_0x4d101f[_0x586d1c(0x1e4)+_0x586d1c(0x1d1)+'d'](_0x104843);continue;case'1':_0x451812['appen'+_0x586d1c(0x1d1)+'d'](_0x1cdb73);continue;case'2':if(_0x8153b4&&_0x8153b4[_0x586d1c(0x296)+'h']){var _0xf71402=document[_0x586d1c(0x455)+_0x586d1c(0x4c7)+_0x586d1c(0x378)]('div');_0xf71402[_0x586d1c(0x3c0)+_0x586d1c(0xce)]=_0x50128c[_0x586d1c(0xfd)];var _0x4ed09b=document[_0x586d1c(0x455)+'eElem'+_0x586d1c(0x378)](_0x50128c[_0x586d1c(0x247)]);_0x4ed09b[_0x586d1c(0x3c0)+'Name']=_0x586d1c(0x2e9)+'esc',_0x4ed09b['textC'+_0x586d1c(0xf9)+'t']=_0x7518f4,_0xf71402[_0x586d1c(0x1e4)+_0x586d1c(0x1d1)+'d'](_0x4ed09b);for(var _0xa22f04 of _0x8153b4)_0xf71402[_0x586d1c(0x1e4)+_0x586d1c(0x1d1)+'d'](_0xa22f04);_0x451812[_0x586d1c(0x1e4)+_0x586d1c(0x1d1)+'d'](_0xf71402);}continue;case'3':return _0x451812;case'4':var _0x4d101f=document[_0x586d1c(0x455)+_0x586d1c(0x4c7)+'ent'](_0x586d1c(0x3de));continue;case'5':_0x104843[_0x586d1c(0x3e9)+'onten'+'t']=_0x587107;continue;case'6':_0x1cdb73[_0x586d1c(0x3c0)+'Name']='sk-ca'+'rd-he'+'ad';continue;case'7':var _0x451812=document[_0x586d1c(0x455)+_0x586d1c(0x4c7)+'ent']('div');continue;case'8':_0x4d101f[_0x586d1c(0x3c0)+'Name']=_0x586d1c(0x184)+'rd-ti'+'tle';continue;case'9':if(_0x474727){var _0x1aa179=_0x45d856(_0x59eea6,_0x3038c3=>{var _0x57c794=_0x586d1c;_0x451812['class'+'List'][_0x57c794(0x2fa)+'e']('on',_0x3038c3),_0x58a396['UaRHm'](_0x474727,_0x3038c3);});_0x1cdb73[_0x586d1c(0x1e4)+'d'](_0x4d101f,_0x1aa179);}else _0x1cdb73['appen'+_0x586d1c(0x1d1)+'d'](_0x4d101f);continue;case'10':var _0x1cdb73=document[_0x586d1c(0x455)+_0x586d1c(0x4c7)+'ent']('div');continue;case'11':_0x451812[_0x586d1c(0x3c0)+_0x586d1c(0xce)]='sk-ca'+'rd'+(_0x59eea6?_0x50128c[_0x586d1c(0x3e7)]:'');continue;case'12':var _0x104843=document['creat'+'eElem'+_0x586d1c(0x378)](_0x586d1c(0x1da)+'g');continue;}break;}}var _0x1b470e=[{'id':'comba'+'t','label':_0x50128c[_0x485bd3(0x526)]},{'id':'move','label':_0x485bd3(0x233)},{'id':_0x485bd3(0x518)+'l','label':'Visua'+'l'},{'id':_0x485bd3(0x559),'label':_0x50128c[_0x485bd3(0x570)]},{'id':_0x485bd3(0x167),'label':'Safet'+'y'}];function _0x5e6590(){var _0x1771ec=_0x485bd3,_0x49a3e8=_0x5a1816[_0x1771ec(0x92)+'ode']?_0x50128c['zFdMx']:_0x5a1816[_0x1771ec(0x1dd)]?_0x50128c[_0x1771ec(0x171)](_0x50128c['SmbgY'](_0x50128c[_0x1771ec(0x362)](_0x50128c[_0x1771ec(0x4eb)](_0x50128c['NDKKU'],_0x5a1816[_0x1771ec(0x55d)+'Total']?_0x50128c[_0x1771ec(0x3f8)](_0x5a1816['hooks'+'Ok'],'/')+_0x5a1816[_0x1771ec(0x55d)+_0x1771ec(0x37d)]+_0x50128c['yKTGX']:_0x1771ec(0x4d4)+_0x1771ec(0x578)+'med\x20('+_0x1771ec(0x56e)+'ff)'),_0x50128c[_0x1771ec(0x502)])+(_0x5a1816[_0x1771ec(0x586)+'oaded']?'loade'+'d':_0x50128c['JSNHf']),_0x50128c[_0x1771ec(0x28f)]),_0x5a1816['shoot'+_0x1771ec(0x314)]?_0x50128c['mPAzj']:_0x50128c[_0x1771ec(0x34c)])+_0x50128c[_0x1771ec(0x45f)]+(_0x5a1816[_0x1771ec(0x5ed)+_0x1771ec(0x587)]?_0x1771ec(0x4b5):_0x1771ec(0x9d)):_0x1771ec(0x170)+'MISSI'+_0x1771ec(0x8a)+'overl'+_0x1771ec(0x289)+'ly\x20(r'+_0x1771ec(0x583)+'all\x20t'+_0x1771ec(0x21c)+_0x1771ec(0x52d)+_0x1771ec(0x3ea);if(_0x5a1816[_0x1771ec(0x272)+_0x1771ec(0x2d8)])_0x49a3e8+=_0x1771ec(0x5ec)+'R:\x20'+_0x5a1816[_0x1771ec(0x272)+'rror'];return _0x169708('Statu'+'s',_0x49a3e8,_0x5a1816[_0x1771ec(0x1dd)],null,[_0x2016f1(_0x50128c['GKhDm'],_0x1771ec(0x395)+_0x1771ec(0x5ac)+_0x1771ec(0x56b)+_0x1771ec(0x4bf)+'plica'+'tion.'+_0x1771ec(0x392)+_0x1771ec(0x1e9)+_0x1771ec(0x46e)+_0x1771ec(0x597),_0xf4d675('Apply',()=>{var _0xe025a2=_0x1771ec;try{if(_0x17c344)_0x17c344['call']('Unity'+_0xe025a2(0x284)+_0xe025a2(0x468)+_0xe025a2(0x23f)+'ion','set_t'+_0xe025a2(0x1e9)+'Frame'+'Rate',[0x24a1+-0x5*-0x761+-0x4896]);}catch(_0x507e1b){}}))]);}function _0x3135c4(_0x453208){var _0x1c79b3=_0x485bd3,_0x19023a={'YOaSf':function(_0x5b8bdd,_0x35e319){return _0x5b8bdd===_0x35e319;},'jjUQY':function(_0x26ee5c,_0x309741){var _0x2e2888=_0x312f;return _0x58a396[_0x2e2888(0xf7)](_0x26ee5c,_0x309741);},'MTWQz':function(_0x2a653d){return _0x2a653d();},'iglbL':_0x1c79b3(0x4cf)+'e','hdPkV':_0x58a396[_0x1c79b3(0xd6)]};if(_0x453208===_0x1c79b3(0x343)+'t'){if('UZapB'===_0x1c79b3(0x419)){if(_0x43c31b[_0x1c79b3(0x178)]&&(_0x19023a[_0x1c79b3(0x267)](_0x25ff92[_0x1c79b3(0x466)+_0x1c79b3(0x3a4)],'inter'+'activ'+'e')||_0x19023a[_0x1c79b3(0x421)](_0x3bbc60[_0x1c79b3(0x466)+_0x1c79b3(0x3a4)],'compl'+_0x1c79b3(0x1fa))))_0x19023a[_0x1c79b3(0x257)](_0x51e512);else _0x1b0a00[_0x1c79b3(0x564)+'entLi'+_0x1c79b3(0x2b5)+'r'](_0x1c79b3(0x45d)+_0x1c79b3(0x4df)+'Loade'+'d',_0x56a25f,{'once':!![]});}else return[_0x5e6590(),_0x169708(_0x1c79b3(0x10d)+'ode',_0x1c79b3(0x21f)+'s\x20OHe'+'alth.'+_0x1c79b3(0x486)+'ateTa'+_0x1c79b3(0xae)+_0x1c79b3(0x3fd)+_0x1c79b3(0x265)+_0x1c79b3(0x37a)+_0x1c79b3(0x4fe)+_0x1c79b3(0x17f)+_0x1c79b3(0x3a9)+_0x1c79b3(0x4db)+'g\x20can'+_0x1c79b3(0x13a)+'\x20or\x20k'+'ill\x20y'+_0x1c79b3(0x58d),_0x33347f[_0x1c79b3(0x566)],_0x3c0b35=>{var _0x254764=_0x1c79b3;_0x33347f[_0x254764(0x566)]=_0x3c0b35,_0x588328(),_0x3b64e1(_0x254764(0x566),_0x3c0b35),_0x3b64e1(_0x19023a[_0x254764(0x3e6)],_0x3c0b35);},[]),_0x169708('No\x20Re'+'coil','Skips'+'\x20Reco'+'ilMot'+_0x1c79b3(0x1d8)+_0x1c79b3(0x56c)+'o\x20the'+_0x1c79b3(0x114)+_0x1c79b3(0x510)+_0x1c79b3(0x315)+'\x20neve'+_0x1c79b3(0x2fd)+'ance.',_0x33347f['noRec'+_0x1c79b3(0x292)],_0x1ee19c=>{var _0x2f0ede=_0x1c79b3;_0x33347f[_0x2f0ede(0x26d)+_0x2f0ede(0x292)]=_0x1ee19c,_0x588328(),_0x3b64e1('noRec'+'oil',_0x1ee19c);},[]),_0x58a396[_0x1c79b3(0x220)](_0x169708,'No\x20Sp'+_0x1c79b3(0x166),_0x58a396['RZjRR'],_0x33347f[_0x1c79b3(0x2a4)+_0x1c79b3(0x18d)],_0x4a3cd9=>{var _0x3f49ca=_0x1c79b3;_0x33347f[_0x3f49ca(0x2a4)+_0x3f49ca(0x18d)]=_0x4a3cd9,_0x58a396[_0x3f49ca(0x41c)](_0x588328);},[]),_0x58a396['xzvMd'](_0x169708,_0x58a396['slcig'],_0x1c79b3(0x5d3)+'s\x20Ove'+_0x1c79b3(0x4f9)+_0x1c79b3(0x2db)+'n.fir'+'eRate'+'\x20to\x201'+_0x1c79b3(0x450)+_0x1c79b3(0x542)+'\x20may\x20'+'still'+_0x1c79b3(0x53d)+_0x1c79b3(0x148)+'s.',_0x33347f[_0x1c79b3(0x560)+'Exp'],_0x4257a2=>{_0x33347f['rapid'+'Exp']=_0x4257a2,_0x588328();},[]),_0x169708('Damag'+'e\x20[EX'+'P]',_0x58a396[_0x1c79b3(0x2a0)],_0x33347f[_0x1c79b3(0x104)+'eExp'],_0x393efd=>{var _0x1e05ea=_0x1c79b3;_0x33347f[_0x1e05ea(0x104)+_0x1e05ea(0x85)]=_0x393efd,_0x588328();},[_0x58a396[_0x1c79b3(0x355)](_0x2016f1,_0x1c79b3(0x165)+'e\x20val'+'ue',null,_0x58a396['omHft'](_0x5b53ff,_0x33347f[_0x1c79b3(0x104)+_0x1c79b3(0x2d3)+'e'],-0xbf*-0x28+-0x65*0x56+0x420,0x97*-0x27+0x26*0x33+0x1163,0x1ca0*-0x1+-0x1d83+0xe8a*0x4,_0x30b29f=>{var _0x404a13=_0x1c79b3;_0x33347f[_0x404a13(0x104)+'eValu'+'e']=_0x30b29f,_0x588328();}))]),_0x169708(_0x1c79b3(0x2b1)+'ite\x20A'+'mmo\x20['+_0x1c79b3(0x365),'Refil'+'ls\x20th'+_0x1c79b3(0x255)+'pon\x27s'+_0x1c79b3(0x37b)+_0x1c79b3(0x379)+'mo\x20to'+'\x20999\x20'+_0x1c79b3(0x2f4)+_0x1c79b3(0x231)+'s.',_0x33347f[_0x1c79b3(0x516)+_0x1c79b3(0x531)],_0x44ef32=>{var _0x13ce8f=_0x1c79b3;_0x33347f[_0x13ce8f(0x516)+_0x13ce8f(0x531)]=_0x44ef32,_0x58a396[_0x13ce8f(0xf3)](_0x588328);},[_0x510f86(_0x58a396['jYxSZ'])])];}if(_0x58a396['IlKfq'](_0x453208,'move'))return[_0x58a396['omHft'](_0x169708,'Speed',_0x58a396['rxghS'],_0x33347f[_0x1c79b3(0x4e4)+_0x1c79b3(0x1ab)]!==-0xb08+0xb*0x102+0x56,null,[_0x2016f1(_0x1c79b3(0x47c)+'\x20%',_0x58a396[_0x1c79b3(0x21b)],_0x5b53ff(_0x33347f[_0x1c79b3(0x4e4)+'Pct'],-0x130e+0x1e36+-0xaf6,0x218c+-0xc9a+-0x13c6*0x1,-0x201+-0x634*-0x2+-0xa62*0x1,_0xf8cc54=>{var _0x1153e1=_0x1c79b3;_0x33347f[_0x1153e1(0x4e4)+_0x1153e1(0x1ab)]=_0xf8cc54,_0x58a396['kttsB'](_0x588328);}))]),_0x169708(_0x58a396[_0x1c79b3(0x126)],'Scale'+'s\x20Mov'+'ement'+_0x1c79b3(0x3b2)+_0x1c79b3(0x1f4)+_0x1c79b3(0x369)+_0x1c79b3(0x1ba)+'gravi'+'ty\x20va'+_0x1c79b3(0x41d),_0x58a396[_0x1c79b3(0x2fe)](_0x33347f['jumpP'+'ct'],-0x5f7+0x20ad+-0x1a52)||_0x33347f[_0x1c79b3(0x5db)+'tyPct']!==-0x1aed+0x3*-0x939+0xc*0x495,null,[_0x58a396[_0x1c79b3(0xd7)](_0x2016f1,_0x1c79b3(0x534)+'%',null,_0x5b53ff(_0x33347f['jumpP'+'ct'],0x32*-0xb+0x2146+-0x1eee,0xa40+0xff1+-0x1905,-0x24f9+-0x11*-0xa2+0x17*0x124,_0x3dc951=>{_0x33347f['jumpP'+'ct']=_0x3dc951,_0x588328();})),_0x2016f1(_0x58a396['LTfFh'],'lower'+'\x20=\x20fl'+'oaty',_0x5b53ff(_0x33347f['gravi'+_0x1c79b3(0x398)],-0x90d+-0x169a+0x1fb1,-0x1*0x1a89+0x1325*-0x1+0x2e76*0x1,0x1*0x1f79+-0x961+-0x1613*0x1,_0x4b5ed4=>{var _0x7ec852=_0x1c79b3;_0x33347f[_0x7ec852(0x5db)+_0x7ec852(0x398)]=_0x4b5ed4,_0x588328();}))]),_0x58a396['oalHq'](_0x169708,_0x1c79b3(0x51f)+'-hop',_0x1c79b3(0x121)+_0x1c79b3(0x508)+_0x1c79b3(0x111)+_0x1c79b3(0x41a)+_0x1c79b3(0x509)+_0x1c79b3(0x5d9)+_0x1c79b3(0x14f)+'\x20jump'+'\x20cool'+'down\x20'+'never'+'\x20appl'+_0x1c79b3(0x49a),_0x33347f[_0x1c79b3(0x476)],_0x2463fb=>{var _0x3e7808=_0x1c79b3;_0x33347f[_0x3e7808(0x476)]=_0x2463fb,_0x588328();},[])];if(_0x58a396[_0x1c79b3(0x345)](_0x453208,_0x1c79b3(0x518)+'l')){if(_0x58a396['BHJfx']!=='CsFCL')return[_0x169708(_0x1c79b3(0x47b)+_0x1c79b3(0x320),_0x1c79b3(0x48a)+_0x1c79b3(0x1ed)+_0x1c79b3(0x430)+'+\x20Spa'+'ce\x20ov'+_0x1c79b3(0x493)+'.',_0x33347f['keyst'+_0x1c79b3(0x320)],_0x148bf6=>{var _0x152959=_0x1c79b3;_0x33347f['keyst'+_0x152959(0x320)]=_0x148bf6,_0x19023a['MTWQz'](_0x588328);},[_0x2016f1(_0x58a396[_0x1c79b3(0x2bd)],null,_0x58a396[_0x1c79b3(0x4f7)](_0x593f53,_0x33347f['ksPos'],[['bl',_0x1c79b3(0x1c0)+'m\x20lef'+'t'],['br',_0x1c79b3(0x1c0)+'m\x20rig'+'ht'],['ml','Left\x20'+_0x1c79b3(0x550)+'e']],_0x2df5d2=>{var _0x5ed1de=_0x1c79b3;if(_0x19023a['YOaSf']('DWXGY',_0x5ed1de(0x123))){var _0x25134f=_0x47c101['creat'+_0x5ed1de(0x4c7)+_0x5ed1de(0x378)](_0x19023a['hdPkV']);return _0x25134f['type']=_0x5ed1de(0x260)+'n',_0x25134f[_0x5ed1de(0x3c0)+'Name']=_0x5ed1de(0x2f7)+'n',_0x25134f[_0x5ed1de(0x3e9)+_0x5ed1de(0xf9)+'t']=_0x420e81,_0x25134f[_0x5ed1de(0x4da)+'ck']=_0xb2541c=>{var _0x132e4d=_0x5ed1de;_0xb2541c[_0x132e4d(0xfc)+'ropag'+_0x132e4d(0x5ab)](),_0x5e5427();},_0x25134f;}else _0x33347f['ksPos']=_0x2df5d2,_0x588328();})),_0x2016f1('Size',null,_0x58a396['PrDwa'](_0x5b53ff,_0x33347f['ksSca'+'le'],0x1de6+-0x178*0xf+-0x7de+0.6,0x15db+-0x282*-0xc+0x3d*-0xda+0.6000000000000001,0x2*-0x6e7+-0x4*-0x47d+-0x426+0.05,_0x129971=>{_0x33347f['ksSca'+'le']=_0x129971,_0x588328();})),_0x2016f1(_0x1c79b3(0x37e)+'eadou'+'t',null,_0x58a396[_0x1c79b3(0x27e)](_0x45d856,_0x33347f['ksCps'],_0x5f4c3f=>{_0x33347f['ksCps']=_0x5f4c3f,_0x19023a['MTWQz'](_0x588328);}))]),_0x169708('Cross'+'hair','Custo'+_0x1c79b3(0x529)+_0x1c79b3(0xc9)+_0x1c79b3(0x3e1)+_0x1c79b3(0x59b),_0x33347f[_0x1c79b3(0xcd)+_0x1c79b3(0x374)],_0x3ee21f=>{var _0x4ffe9c=_0x1c79b3;_0x33347f[_0x4ffe9c(0xcd)+'hair']=_0x3ee21f,_0x588328();},[_0x58a396['wjLSd'](_0x2016f1,'Size',null,_0x58a396['omHft'](_0x5b53ff,_0x33347f[_0x1c79b3(0xb1)+'e'],0xff2+0x8c2+-0x18b4+0.5,0x8bd*-0x3+-0x2489+0x3ec2+0.5,0x36*-0x29+-0x70+-0x916*-0x1+0.1,_0x1223f9=>{var _0x4b1a79=_0x1c79b3;if(_0x19023a[_0x4b1a79(0x421)]('zenhC',_0x4b1a79(0x34f))){var _0x5135ad=_0xa4f9ce[_0x4b1a79(0x455)+'eElem'+'ent'](_0x4b1a79(0x500));_0x5135ad[_0x4b1a79(0x3c0)+_0x4b1a79(0xce)]='sk-hi'+'nt',_0x5135ad['textC'+'onten'+'t']=_0x39c4f7,_0x3eeb4e['appen'+'dChil'+'d'](_0x5135ad);}else _0x33347f[_0x4b1a79(0xb1)+'e']=_0x1223f9,_0x588328();})),_0x2016f1('Color',null,_0x515321(_0x33347f[_0x1c79b3(0x460)+'or'],_0xc222d0=>{var _0x49bc42=_0x1c79b3;_0x33347f[_0x49bc42(0x460)+'or']=_0xc222d0,_0x588328();}))]),_0x169708(_0x58a396['cEmrv'],'FPS\x20o'+'verla'+'y.',_0x33347f['fps'],null,[_0x2016f1(_0x1c79b3(0x43b)+'ounte'+'r',null,_0x58a396[_0x1c79b3(0x27e)](_0x45d856,_0x33347f[_0x1c79b3(0x5b8)],_0x161aca=>{var _0x384c92=_0x1c79b3;_0x33347f[_0x384c92(0x5b8)]=_0x161aca,_0x588328();})),_0x510f86(_0x1c79b3(0x595)+'emy\x20c'+_0x1c79b3(0x82)+_0x1c79b3(0x159)+_0x1c79b3(0x26f)+'ild\x20h'+_0x1c79b3(0x407)+'\x20GetV'+_0x1c79b3(0x4bc)+_0x1c79b3(0x415)+'ers\x20t'+_0x1c79b3(0x3d8)+_0x1c79b3(0x4c2)+'k\x20on.')])];else{var _0x4e80c9=_0x2d854a['getEl'+'ement'+'ById'](_0x20612d);if(_0x4e80c9&&_0xe59f79===_0x1c79b3(0x2da)+'creen'+'-banr'+'s'){var _0x2e4273=_0x4e80c9[_0x1c79b3(0x19e)+'ren'];for(var _0x24e91f=-0x210a+-0xb7c+-0x29*-0x116;_0x58a396['GANCO'](_0x24e91f,_0x2e4273[_0x1c79b3(0x296)+'h']);_0x24e91f++){if(_0x2e4273[_0x24e91f]['id']&&_0x58a396[_0x1c79b3(0xf7)](_0x2e4273[_0x24e91f]['id']['index'+'Of'](_0x58a396[_0x1c79b3(0x4a9)]),-0x1ac8+0x19*0x44+-0x4*-0x509))_0x2e4273[_0x24e91f][_0x1c79b3(0x361)][_0x1c79b3(0x447)+'ay']=_0x58a396[_0x1c79b3(0xa9)];}}else{if(_0x4e80c9)_0x4e80c9['style']['displ'+'ay']=_0x58a396[_0x1c79b3(0xa9)];}}}if(_0x453208===_0x58a396[_0x1c79b3(0x278)]){if(_0x58a396[_0x1c79b3(0x359)]('zJpFC',_0x58a396[_0x1c79b3(0xb0)]))return[_0x169708(_0x1c79b3(0x2c9)+'ck',_0x1c79b3(0x139)+'\x20kour'+'-io_*'+'\x20bann'+'er\x20sl'+_0x1c79b3(0x399),_0x33347f['adblo'+'ck'],_0x4c5f86=>{_0x33347f['adblo'+'ck']=_0x4c5f86,_0x588328();},[_0x510f86(_0x58a396['khSlv'])])];else _0xc4c0f0['class'+'List'][_0x1c79b3(0x2fa)+'e']('on',_0x126a29),_0x58a396[_0x1c79b3(0x24a)](_0x5dc8b6,_0x31807f);}return[_0x169708(_0x58a396[_0x1c79b3(0x2a2)],_0x1c79b3(0x435)+'\x20UWMK'+_0x1c79b3(0x219)+_0x1c79b3(0x409)+'—\x20no\x20'+'WASM\x20'+'hooks'+'.\x20Use'+'\x20this'+_0x1c79b3(0x146)+'atche'+'s\x20won'+_0x1c79b3(0x370)+'art.',_0x33347f[_0x1c79b3(0x92)+'ode'],_0x142875=>{var _0x2d2969=_0x1c79b3;_0x33347f[_0x2d2969(0x92)+_0x2d2969(0x2b9)]=_0x142875,_0x19023a[_0x2d2969(0x257)](_0x588328),location['reloa'+'d']();},[_0x58a396[_0x1c79b3(0x24a)](_0x510f86,_0x58a396[_0x1c79b3(0x124)])]),_0x58a396['SRZIR'](_0x169708,_0x1c79b3(0x3a6)+_0x1c79b3(0x223)+'switc'+_0x1c79b3(0x49b),_0x58a396[_0x1c79b3(0x273)],_0x33347f['hookG'+'od']||_0x33347f['hookG'+_0x1c79b3(0x40a)]||_0x33347f[_0x1c79b3(0x5a8)+'oReco'+'il']||_0x33347f[_0x1c79b3(0x512)+_0x1c79b3(0x557)+'e'],_0x19dfda=>{var _0x471e94=_0x1c79b3;_0x33347f['hookG'+'od']=_0x19dfda,_0x33347f[_0x471e94(0x2d7)+_0x471e94(0x40a)]=_0x19dfda,_0x33347f['hookN'+'oReco'+'il']=_0x19dfda,_0x33347f['hookC'+_0x471e94(0x557)+'e']=_0x19dfda,_0x58a396['KLqcM'](_0x588328),location['reloa'+'d']();},[_0x510f86(_0x1c79b3(0x38a)+_0x1c79b3(0x349)+'\x20relo'+_0x1c79b3(0xe2)),_0x58a396[_0x1c79b3(0x58c)](_0x2016f1,_0x1c79b3(0x3e2)+_0x1c79b3(0x405)+_0x1c79b3(0xd3)+_0x1c79b3(0x27d)+_0x1c79b3(0xb3)+_0x1c79b3(0x322)+'h)',null,_0x45d856(_0x33347f[_0x1c79b3(0x2d7)+'od'],_0x5d076d=>{var _0x19044f=_0x1c79b3;_0x33347f[_0x19044f(0x2d7)+'od']=_0x5d076d,_0x58a396[_0x19044f(0xf3)](_0x588328);})),_0x58a396[_0x1c79b3(0x4f7)](_0x2016f1,_0x58a396['TYzBB'],null,_0x45d856(_0x33347f[_0x1c79b3(0x2d7)+'odDie'],_0x3a929c=>{var _0xa0dd56=_0x1c79b3;_0x33347f[_0xa0dd56(0x2d7)+_0xa0dd56(0x40a)]=_0x3a929c,_0x588328();})),_0x2016f1(_0x1c79b3(0x26d)+'oil\x20('+'Recoi'+_0x1c79b3(0x15e)+_0x1c79b3(0x1b3)+_0x1c79b3(0x2ed),null,_0x45d856(_0x33347f[_0x1c79b3(0x5a8)+_0x1c79b3(0x89)+'il'],_0x14208c=>{var _0x5d9868=_0x1c79b3;_0x33347f[_0x5d9868(0x5a8)+_0x5d9868(0x89)+'il']=_0x14208c,_0x588328();})),_0x2016f1(_0x58a396['pyXGI'],_0x1c79b3(0x1bd)+'eats\x20'+_0x1c79b3(0x4b2)+'witho'+_0x1c79b3(0x276)+'is',_0x45d856(_0x33347f[_0x1c79b3(0x512)+_0x1c79b3(0x557)+'e'],_0x12065f=>{var _0x474d73=_0x1c79b3;_0x33347f[_0x474d73(0x512)+_0x474d73(0x557)+'e']=_0x12065f,_0x58a396['kQFwd'](_0x588328);}))]),_0x58a396[_0x1c79b3(0x5e3)](_0x169708,'ACTk\x20'+_0x1c79b3(0x18f)+'r',_0x58a396['zvQnT'],_0x33347f['actkK'+_0x1c79b3(0x2b6)],_0x188a31=>{var _0x14341a=_0x1c79b3;_0x33347f[_0x14341a(0x45b)+'ill']=_0x188a31,_0x588328();},[_0x58a396['Ubxqh'](_0x510f86,_0x58a396['njMLI'],!![])]),_0x58a396[_0x1c79b3(0x220)](_0x169708,'Dange'+'r',_0x1c79b3(0x162)+'\x20leav'+'e\x20ser'+_0x1c79b3(0x50d)+'isibl'+'e\x20tra'+'ces.',!![],null,[_0x2016f1(_0x58a396['uyjGX'],null,_0xf4d675('Reset',()=>{var _0x31576a=_0x1c79b3,_0x5e5b84={'nDHUG':function(_0x2579e1){var _0x100f10=_0x312f;return _0x19023a[_0x100f10(0x257)](_0x2579e1);}};'EMXfF'==='EMXfF'?(_0x33347f={..._0x29206e},_0x19023a['MTWQz'](_0x588328),location['reloa'+'d']()):(_0x4ca825['gravi'+'tyPct']=_0x47447f,_0x5e5b84[_0x31576a(0x3e0)](_0x132b78));}))])];}var _0x156ea9=null;function _0x4e97b7(_0x3ff8c5){var _0x22008f=_0x485bd3;_0x5a514c=_0x3ff8c5;if(!_0x156ea9){var _0xb57715=_0x58a396['DwfzY'][_0x22008f(0x1b4)]('|'),_0x425a50=0xca4*-0x2+-0x1*0x1e46+-0xd*-0x446;while(!![]){switch(_0xb57715[_0x425a50++]){case'0':_0x5bba52['textC'+'onten'+'t']=_0x17df9e;continue;case'1':_0x156ea9=_0x58a396[_0x22008f(0x57e)](_0x5886ad);continue;case'2':_0x50fd9c[_0x22008f(0x1e4)+_0x22008f(0x1d1)+'d'](_0x5bba52);continue;case'3':_0x58a396[_0x22008f(0x1ca)](requestAnimationFrame,()=>_0x156ea9[_0x22008f(0x3c0)+'List']['add'](_0x22008f(0x2dc)));continue;case'4':var _0x5bba52=document[_0x22008f(0x455)+_0x22008f(0x4c7)+_0x22008f(0x378)](_0x58a396['bBbDa']);continue;case'5':_0x50fd9c[_0x22008f(0x1e4)+'dChil'+'d'](_0x156ea9);continue;}break;}}_0x156ea9['class'+_0x22008f(0xbe)]['toggl'+'e'](_0x58a396[_0x22008f(0x3c2)],_0x3ff8c5);}function _0x4f5de0(){var _0x28b028=_0x485bd3,_0x3f87ad={'ZmWRT':function(_0x363a61){var _0x300ba6=_0x312f;return _0x58a396[_0x300ba6(0x4d5)](_0x363a61);}};_0x58a396[_0x28b028(0x45a)]!=='QUoPF'?(_0x56c516['keyst'+'rokes']=_0x144666,_0x3f87ad[_0x28b028(0x383)](_0x39c5f6)):_0x58a396[_0x28b028(0x4ab)](_0x4e97b7,!_0x5a514c);}function _0x5886ad(){var _0x43bb22=_0x485bd3,_0x5432af={'gWTTB':function(_0x134048,_0x2f69f6){return _0x58a396['xlJkR'](_0x134048,_0x2f69f6);},'laEef':_0x58a396['kJPvk'],'Wpjft':function(_0x34e64a,_0x5b577d){return _0x34e64a+_0x5b577d;},'wGVoo':_0x43bb22(0x170)+_0x43bb22(0x1e2)+'\x20','KqrcQ':function(_0x208942,_0x5266c8){var _0x24bdf4=_0x43bb22;return _0x58a396[_0x24bdf4(0x4ae)](_0x208942,_0x5266c8);},'XrrHa':'\x20|\x20ga'+'me\x20','utDVn':_0x43bb22(0x4f1)+'d','RMQGd':'\x20|\x20sh'+_0x43bb22(0x32e)+'\x20','OiXXO':_0x58a396['ybXYD']},_0x2f12e3=document['creat'+_0x43bb22(0x4c7)+_0x43bb22(0x378)](_0x58a396[_0x43bb22(0x5de)]);_0x2f12e3['class'+_0x43bb22(0xce)]='mn-pa'+_0x43bb22(0x443);var _0x44b540=document[_0x43bb22(0x455)+_0x43bb22(0x4c7)+'ent'](_0x43bb22(0x4a6));_0x44b540['class'+_0x43bb22(0xce)]=_0x58a396[_0x43bb22(0x3cf)];var _0x1bb727=document['creat'+_0x43bb22(0x4c7)+'ent'](_0x58a396['PvxHq']);_0x1bb727[_0x43bb22(0x3c0)+'Name']=_0x43bb22(0x5df)+'go',_0x1bb727[_0x43bb22(0x4a1)+'HTML']=_0x58a396[_0x43bb22(0x527)],_0x44b540[_0x43bb22(0x1e4)+_0x43bb22(0x1d1)+'d'](_0x1bb727);var _0x34569b=document['creat'+_0x43bb22(0x4c7)+_0x43bb22(0x378)](_0x43bb22(0x3de));_0x34569b[_0x43bb22(0x3c0)+_0x43bb22(0xce)]=_0x58a396[_0x43bb22(0x5d5)];var _0x2bbd72=document['creat'+'eElem'+_0x43bb22(0x378)]('heade'+'r');_0x2bbd72[_0x43bb22(0x3c0)+_0x43bb22(0xce)]='mn-to'+'p';var _0x9a03ba=document['creat'+'eElem'+'ent']('div');_0x9a03ba['class'+_0x43bb22(0xce)]='mn-ti'+_0x43bb22(0xc7);var _0x213635=document[_0x43bb22(0x455)+'eElem'+_0x43bb22(0x378)]('h2');_0x213635[_0x43bb22(0x3c0)+_0x43bb22(0xce)]=_0x58a396[_0x43bb22(0x87)],_0x213635[_0x43bb22(0x3e9)+'onten'+'t']=_0x58a396['CYmTU'];var _0xc0efe0=document[_0x43bb22(0x455)+_0x43bb22(0x4c7)+_0x43bb22(0x378)](_0x43bb22(0x500));_0xc0efe0[_0x43bb22(0x3c0)+_0x43bb22(0xce)]=_0x43bb22(0x310)+'b',_0xc0efe0['textC'+_0x43bb22(0xf9)+'t']=_0x58a396[_0x43bb22(0x327)],_0x9a03ba[_0x43bb22(0x1e4)+'d'](_0x213635,_0xc0efe0);var _0x21c816=document[_0x43bb22(0x455)+_0x43bb22(0x4c7)+_0x43bb22(0x378)](_0x43bb22(0x260)+'n');_0x21c816[_0x43bb22(0x462)]=_0x58a396[_0x43bb22(0xd6)],_0x21c816['class'+'Name']=_0x43bb22(0x51e)+_0x43bb22(0x1e0),_0x21c816['title']='Close',_0x21c816[_0x43bb22(0x4a1)+_0x43bb22(0x4c6)]=_0x43bb22(0x563)+_0x43bb22(0x48f)+_0x43bb22(0x9c)+_0x43bb22(0xa5)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x43bb22(0x259)+'18\x206\x20'+_0x43bb22(0x4d9)+'/></s'+_0x43bb22(0x293),_0x21c816[_0x43bb22(0x4da)+'ck']=()=>_0x4e97b7(![]),_0x2bbd72[_0x43bb22(0x1e4)+'d'](_0x9a03ba,_0x21c816);var _0x3f354c=document['creat'+_0x43bb22(0x4c7)+_0x43bb22(0x378)](_0x43bb22(0x3de));_0x3f354c['class'+_0x43bb22(0xce)]=_0x43bb22(0xdb)+'ls',_0x34569b['appen'+'d'](_0x2bbd72,_0x3f354c),_0x2f12e3['appen'+'d'](_0x44b540,_0x34569b);var _0x3d17f4=new Map();for(var _0x45c90d of _0x1b470e){if(_0x58a396[_0x43bb22(0x54b)]===_0x43bb22(0x134)){var _0x385b3c=document[_0x43bb22(0x455)+'eElem'+'ent'](_0x58a396['TowNz']);_0x385b3c['type']=_0x58a396[_0x43bb22(0xd6)],_0x385b3c[_0x43bb22(0x3c0)+_0x43bb22(0xce)]=_0x58a396['OWtHr'],_0x385b3c[_0x43bb22(0x33c)]=_0x45c90d['label'],_0x385b3c[_0x43bb22(0x4a1)+_0x43bb22(0x4c6)]=_0x58a396[_0x43bb22(0x4ae)](_0x58a396[_0x43bb22(0x30b)](_0x43bb22(0x3ca)+'l>',_0x45c90d['label']),_0x43bb22(0x106)+'ll>'),_0x385b3c['oncli'+'ck']=(_0x7e8c79=>()=>_0x56007e(_0x7e8c79))(_0x45c90d['id']),_0x3d17f4[_0x43bb22(0x160)](_0x45c90d['id'],_0x385b3c),_0x44b540['appen'+'dChil'+'d'](_0x385b3c);}else _0x50ed17['shado'+'wColo'+'r']=_0x24d320,_0x1fd82c[_0x43bb22(0x20e)+_0x43bb22(0x57f)]=0x7ca+-0x1bb*-0x13+-0x289d,_0x23851d[_0x43bb22(0x5dc)](),_0x25d203[_0x43bb22(0x20e)+_0x43bb22(0x57f)]=-0x3b0*-0x3+-0x3d*-0x65+-0x2321;}function _0x56007e(_0x4eecf9){var _0x440555=_0x43bb22,_0xcb24c9=('1|3|5'+_0x440555(0x3e4)+'4')[_0x440555(0x1b4)]('|'),_0x360467=0x172+0x698+-0x2ae*0x3;while(!![]){switch(_0xcb24c9[_0x360467++]){case'0':for(var [_0x4325c8,_0x2765f6]of _0x3d17f4)_0x2765f6[_0x440555(0x3c0)+'List'][_0x440555(0x2fa)+'e'](_0x440555(0x4ca)+'e',_0x58a396[_0x440555(0xf7)](_0x4325c8,_0x4eecf9));continue;case'1':_0x2812c1['cat']=_0x4eecf9;continue;case'2':_0x213635['textC'+_0x440555(0xf9)+'t']='Sakur'+_0x440555(0x240)+_0x440555(0x4d1)+_0x2c3527[_0x440555(0xd9)];continue;case'3':_0x5492b1();continue;case'4':_0x3f354c['repla'+_0x440555(0x354)+'ldren'](..._0x58a396['TLxwO'](_0x3135c4,_0x4eecf9));continue;case'5':var _0x2c3527=_0x1b470e[_0x440555(0x53a)](_0x2dfb5e=>_0x2dfb5e['id']===_0x4eecf9)||_0x1b470e[-0x2c*-0x6+-0x1*-0xe9b+-0xfa3];continue;}break;}}return _0x58a396['ATSQU'](_0x56007e,_0x2812c1['cat']||'comba'+'t'),_0x58a396[_0x43bb22(0x180)](setInterval,()=>{var _0x44a5f7=_0x43bb22,_0x21d557={'PPJYX':function(_0x1c20c5,_0xd5cb3d){return _0x5432af['gWTTB'](_0x1c20c5,_0xd5cb3d);}};if(_0x44a5f7(0x51a)===_0x44a5f7(0x5b2))_0x1166b6=_0x3ab45b['round'](_0x21d557['PPJYX'](_0x26febc,0x1674+0x19*-0x12d+0xad9)/(_0x58040b-_0x36ec09)),_0x4230fc=0x1caa*0x1+0x1*0x4df+0x1*-0x2189,_0x1e6f69=_0x44fe37;else{if(!_0x5a514c)return;var _0x24d458=_0x3f354c['child'+'ren'];for(var _0x3f3a91=-0x1*-0x1f6c+0x63d+-0x1f*0x137;_0x3f3a91<_0x24d458['lengt'+'h'];_0x3f3a91++){var _0x8ccb44=_0x24d458[_0x3f3a91]['query'+_0x44a5f7(0x477)+_0x44a5f7(0x202)](_0x5432af['laEef']);_0x8ccb44&&(_0x8ccb44['textC'+'onten'+'t']['index'+'Of'](_0x44a5f7(0x13c))===-0x1*0xd81+-0x314*-0x6+-0x4f7||_0x8ccb44[_0x44a5f7(0x3e9)+'onten'+'t'][_0x44a5f7(0xff)+'Of']('SAFE')===0x310+-0x1393+0x1083)&&(_0x8ccb44[_0x44a5f7(0x3e9)+'onten'+'t']=_0x5a1816[_0x44a5f7(0x92)+_0x44a5f7(0x2b9)]?'SAFE\x20'+_0x44a5f7(0x179)+_0x44a5f7(0x5cc)+_0x44a5f7(0x530)+'only,'+'\x20no\x20h'+_0x44a5f7(0x446)+'(relo'+'ad\x20to'+_0x44a5f7(0xba)+')':_0x5a1816['uwmk']?_0x5432af['Wpjft'](_0x5432af['wGVoo']+(_0x5a1816[_0x44a5f7(0x55d)+'Total']?_0x5432af[_0x44a5f7(0x226)](_0x5432af['KqrcQ'](_0x5a1816[_0x44a5f7(0x55d)+'Ok'],'/')+_0x5a1816[_0x44a5f7(0x55d)+_0x44a5f7(0x37d)],'\x20hook'+'s'):'0\x20hoo'+_0x44a5f7(0x578)+_0x44a5f7(0x434)+'all\x20o'+'ff)'),_0x5432af['XrrHa'])+(_0x5a1816[_0x44a5f7(0x586)+'oaded']?_0x5432af[_0x44a5f7(0x14b)]:_0x44a5f7(0x16e)+'ng')+_0x5432af[_0x44a5f7(0x4c5)]+(_0x5a1816[_0x44a5f7(0x230)+_0x44a5f7(0x314)]?_0x44a5f7(0x4b5):_0x44a5f7(0x9d))+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x5a1816['movem'+'ents']?_0x5432af[_0x44a5f7(0x3b9)]:_0x44a5f7(0x9d))+(_0x5a1816[_0x44a5f7(0x272)+'rror']?'\x20|\x20ER'+_0x44a5f7(0x22a)+_0x5a1816[_0x44a5f7(0x272)+_0x44a5f7(0x2d8)]:''):_0x44a5f7(0x170)+_0x44a5f7(0x51b)+'NG\x20-\x20'+_0x44a5f7(0x52a)+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+_0x44a5f7(0x21c)+_0x44a5f7(0x52d)+_0x44a5f7(0x3ea));}}},0x47a*0x7+0xda0+-0x290e),_0x2f12e3;}var _0x17df9e='\x0a\x20\x20\x20\x20'+':host'+'\x20{\x20al'+'l:\x20in'+_0x485bd3(0x1e5)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x485bd3(0x4f2)+_0x485bd3(0x4d7)+'ng:\x20b'+_0x485bd3(0x4ac)+'-box;'+_0x485bd3(0x3fb)+_0x485bd3(0x593)+_0x485bd3(0x1bc)+_0x485bd3(0x295)+'ily:\x20'+'\x22Inte'+_0x485bd3(0x4c0)+_0x485bd3(0x339)+'\x20UI\x22,'+'\x20syst'+_0x485bd3(0x1de)+_0x485bd3(0x532)+_0x485bd3(0x4b7)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x485bd3(0x149)+_0x485bd3(0x3b3)+'{\x20pos'+'ition'+_0x485bd3(0x3f9)+_0x485bd3(0x109)+';\x20rig'+_0x485bd3(0xca)+_0x485bd3(0x514)+_0x485bd3(0x26c)+'m:\x2024'+_0x485bd3(0x221)+_0x485bd3(0x41e)+_0x485bd3(0x27a)+'620px'+_0x485bd3(0x174)+_0x485bd3(0x198)+_0x485bd3(0x28e)+'48px)'+');\x20ma'+'x-hei'+_0x485bd3(0x1e6)+_0x485bd3(0x4b0)+_0x485bd3(0x28c)+_0x485bd3(0x351)+_0x485bd3(0x428)+_0x485bd3(0x40c)+_0x485bd3(0x8b)+_0x485bd3(0x572)+'\x20\x20\x20di'+_0x485bd3(0x1b7)+':\x20fle'+_0x485bd3(0x43d)+_0x485bd3(0x99)+'px;\x20p'+'addin'+'g:\x2010'+_0x485bd3(0x440)+_0x485bd3(0x4ac)+'-radi'+_0x485bd3(0x290)+'2px;\x20'+_0x485bd3(0x46a)+'er-ev'+_0x485bd3(0x3d7)+_0x485bd3(0x1ef)+_0x485bd3(0x572)+_0x485bd3(0x50f)+_0x485bd3(0x29c)+_0x485bd3(0x4cc)+'rgba('+_0x485bd3(0x1c7)+_0x485bd3(0x9e)+_0x485bd3(0x182)+_0x485bd3(0x4a5)+_0x485bd3(0x2e8)+'ilter'+_0x485bd3(0x22c)+'r(22p'+'x)\x20sa'+'turat'+_0x485bd3(0x4a3)+'%);\x20-'+'webki'+_0x485bd3(0x23e)+_0x485bd3(0x4e0)+'-filt'+_0x485bd3(0x449)+_0x485bd3(0x5c7)+_0x485bd3(0x5d0)+_0x485bd3(0x129)+_0x485bd3(0x2d4)+_0x485bd3(0x1a9)+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+'-shad'+_0x485bd3(0x185)+'\x200\x200\x20'+_0x485bd3(0x326)+_0x485bd3(0x155)+_0x485bd3(0x307)+_0x485bd3(0x5e7)+_0x485bd3(0x556)+_0x485bd3(0x2df)+'et\x200\x20'+'1px\x200'+'\x20rgba'+'(255,'+'255,2'+'55,.0'+_0x485bd3(0x54e)+_0x485bd3(0x175)+_0x485bd3(0x21d)+_0x485bd3(0x352)+_0x485bd3(0x1ae)+_0x485bd3(0x4e1)+_0x485bd3(0x5af)+_0x485bd3(0x360)+_0x485bd3(0x402)+_0x485bd3(0x1df)+_0x485bd3(0x25c)+_0x485bd3(0x14a)+':\x20tra'+'nslat'+_0x485bd3(0x4f8)+_0x485bd3(0x117)+'point'+'er-ev'+'ents:'+'\x20none'+_0x485bd3(0x329)+'nsiti'+_0x485bd3(0x304)+_0x485bd3(0x402)+_0x485bd3(0x4e7)+'s\x20eas'+'e,\x20tr'+'ansfo'+_0x485bd3(0x452)+'5s\x20cu'+'bic-b'+_0x485bd3(0x1e7)+_0x485bd3(0x2ca)+_0x485bd3(0x1ec)+_0x485bd3(0x3b5)+_0x485bd3(0x45c)+'\x20colo'+_0x485bd3(0x23b)+_0x485bd3(0x5ee)+_0x485bd3(0x1bc)+_0x485bd3(0x3cc)+'e:\x2013'+_0x485bd3(0x5bb)+_0x485bd3(0x3b4)+_0x485bd3(0x149)+_0x485bd3(0x490)+'shown'+_0x485bd3(0x266)+'acity'+_0x485bd3(0x2c3)+_0x485bd3(0x306)+_0x485bd3(0x216)+'\x20none'+_0x485bd3(0x417)+_0x485bd3(0x382)+'event'+_0x485bd3(0x2f9)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x485bd3(0x43e)+_0x485bd3(0x38c)+_0x485bd3(0x325)+_0x485bd3(0x2e4)+_0x485bd3(0x3ae)+'\x20flex'+_0x485bd3(0x2af)+_0x485bd3(0x96)+_0x485bd3(0x282)+'umn;\x20'+_0x485bd3(0x275)+'-item'+'s:\x20ce'+_0x485bd3(0x239)+_0x485bd3(0x36e)+_0x485bd3(0x253)+_0x485bd3(0x3a2)+'h:\x2062'+'px;\x20f'+_0x485bd3(0xda)+'none;'+_0x485bd3(0xb4)+_0x485bd3(0x46b)+_0x485bd3(0xf2)+(_0x485bd3(0x562)+'rder-'+_0x485bd3(0x20b)+'s:\x2016'+_0x485bd3(0x1d3)+_0x485bd3(0x45c)+_0x485bd3(0x55c)+'round'+_0x485bd3(0xb9)+_0x485bd3(0x408)+_0x485bd3(0x164)+'255,.'+_0x485bd3(0x2e7)+_0x485bd3(0x271)+_0x485bd3(0x20e)+'w:\x20in'+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x485bd3(0x155)+_0x485bd3(0x307)+_0x485bd3(0x5e7)+_0x485bd3(0x2e1)+_0x485bd3(0xef)+_0x485bd3(0x157)+_0x485bd3(0x2a6)+_0x485bd3(0x147)+'ispla'+_0x485bd3(0x311)+_0x485bd3(0x4c4)+'lace-'+'items'+':\x20cen'+_0x485bd3(0x48c)+_0x485bd3(0x5b1)+':\x2032p'+_0x485bd3(0x521)+'ight:'+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x485bd3(0x2a6)+_0x485bd3(0xc5)+_0x485bd3(0x118)+_0x485bd3(0x31f)+'25px;'+_0x485bd3(0x363)+'ht:\x202'+_0x485bd3(0x277)+_0x485bd3(0x32c)+_0x485bd3(0x189)+'visib'+'le;\x20f'+'ilter'+_0x485bd3(0x576)+_0x485bd3(0x35b)+_0x485bd3(0x86)+_0x485bd3(0x5c9)+_0x485bd3(0x45e)+_0x485bd3(0x408)+_0x485bd3(0x571)+_0x485bd3(0x537)+'8));\x20'+_0x485bd3(0x238)+_0x485bd3(0x31b)+'tab\x20{'+'\x20disp'+_0x485bd3(0x2e4)+'flex;'+'\x20alig'+_0x485bd3(0x3d1)+_0x485bd3(0x1cf)+_0x485bd3(0x25a)+_0x485bd3(0x35a)+'tify-'+_0x485bd3(0x427)+_0x485bd3(0x291)+_0x485bd3(0x25a)+_0x485bd3(0x4f0)+'th:\x205'+_0x485bd3(0x433)+_0x485bd3(0x44f)+_0x485bd3(0x37f)+_0x485bd3(0x440)+'order'+_0x485bd3(0x3af)+_0x485bd3(0x12d)+_0x485bd3(0x3bf)+_0x485bd3(0x5d4)+_0x485bd3(0x2e6)+'\x0a\x20\x20\x20\x20'+_0x485bd3(0x256)+_0x485bd3(0xe1)+_0x485bd3(0x57c)+_0x485bd3(0x10e)+'arent'+_0x485bd3(0x4f6)+'or:\x20r'+_0x485bd3(0x155)+'46,23'+'8,242'+_0x485bd3(0x358)+_0x485bd3(0x136)+'or:\x20p'+_0x485bd3(0x5ae)+'r;\x20fo'+'nt-si'+'ze:\x201'+'0px;\x20'+_0x485bd3(0x14c)+'weigh'+'t:\x2070'+_0x485bd3(0x241)+'\x20\x20\x20\x20.'+'mn-ta'+'b:hov'+'er\x20{\x20'+'color'+_0x485bd3(0xb9)+_0x485bd3(0x20d)+_0x485bd3(0xf8)+_0x485bd3(0x1eb)+_0x485bd3(0x173)+_0x485bd3(0x3b4)+_0x485bd3(0x585)+'ab.ac'+'tive\x20'+_0x485bd3(0x205)+_0x485bd3(0x1e8)+'ff6b9'+_0x485bd3(0x14d)+'ckgro'+_0x485bd3(0x4cc)+_0x485bd3(0x4e9)+'255,1'+'07,15'+'7,.1)'+_0x485bd3(0xef)+_0x485bd3(0x157)+'n-mai'+'n\x20{\x20f'+_0x485bd3(0xda)+_0x485bd3(0x5bd)+_0x485bd3(0x7c)+_0x485bd3(0x209)+_0x485bd3(0x49e)+'play:'+'\x20flex'+';\x20fle'+'x-dir'+_0x485bd3(0x225)+_0x485bd3(0x422)+_0x485bd3(0x3ba)+_0x485bd3(0x436)+_0x485bd3(0x439)+'-top\x20'+_0x485bd3(0x4c3)+_0x485bd3(0x8c)+'\x20flex'+_0x485bd3(0x591)+_0x485bd3(0x5be)+'ems:\x20'+'cente'+'r;\x20ga'+_0x485bd3(0xe3)+_0x485bd3(0x224)+'addin'+'g:\x206p'+'x\x206px'+_0x485bd3(0x3df)+_0x485bd3(0x207)+'r-sel'+'ect:\x20'+'none;'+_0x485bd3(0x436)+_0x485bd3(0x439)+_0x485bd3(0xa7)+_0x485bd3(0x2ce)+'flex:'+_0x485bd3(0x577)+'in-wi'+'dth:\x20'+'0;\x20}\x0a'+_0x485bd3(0x2f1)+'mn-h\x20'+'{\x20fon'+_0x485bd3(0x3cc)+_0x485bd3(0x432)+'px;\x20f'+'ont-w'+_0x485bd3(0x5a2)+_0x485bd3(0x38b)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x485bd3(0x7b)+_0x485bd3(0x43a)+_0x485bd3(0x445)+_0x485bd3(0x131)+'1px;\x20'+_0x485bd3(0xa2))+('ty:\x20.'+_0x485bd3(0x30c)+'\x20\x20\x20\x20.'+_0x485bd3(0x51e)+'ose\x20{'+_0x485bd3(0x325)+'lay:\x20'+'grid;'+_0x485bd3(0x24e)+'e-ite'+'ms:\x20c'+_0x485bd3(0x25a)+_0x485bd3(0x4f0)+_0x485bd3(0x128)+'8px;\x20'+_0x485bd3(0x44f)+_0x485bd3(0x3ac)+_0x485bd3(0x440)+'order'+_0x485bd3(0x3af)+_0x485bd3(0x12d)+_0x485bd3(0x3bf)+'ius:\x20'+'8px;\x20'+_0x485bd3(0x55c)+'round'+_0x485bd3(0x368)+_0x485bd3(0x2c8)+_0x485bd3(0x538)+'color'+_0x485bd3(0x36b)+_0x485bd3(0x264)+_0x485bd3(0x4a0)+'ity:\x20'+'.45;\x20'+_0x485bd3(0x404)+'r:\x20po'+'inter'+_0x485bd3(0xef)+_0x485bd3(0x157)+_0x485bd3(0x334)+'se:ho'+'ver\x20{'+'\x20opac'+_0x485bd3(0x1c1)+'1;\x20ba'+_0x485bd3(0x29c)+_0x485bd3(0x4cc)+'rgba('+_0x485bd3(0x366)+_0x485bd3(0x307)+_0x485bd3(0x56a)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x485bd3(0x51e)+_0x485bd3(0x324)+_0x485bd3(0x1ac)+_0x485bd3(0x5b1)+':\x2014p'+_0x485bd3(0x521)+'ight:'+'\x2014px'+_0x485bd3(0x195)+_0x485bd3(0x328)+'ne;\x20s'+_0x485bd3(0x5b4)+':\x20cur'+_0x485bd3(0x237)+_0x485bd3(0x43f)+'\x20stro'+'ke-wi'+_0x485bd3(0x31f)+'2;\x20st'+_0x485bd3(0x4cb)+'linec'+_0x485bd3(0x95)+_0x485bd3(0x26e)+_0x485bd3(0x436)+'\x20\x20.mn'+_0x485bd3(0x2f2)+_0x485bd3(0x31e)+_0x485bd3(0x2a7)+_0x485bd3(0x3ec)+'-heig'+'ht:\x200'+_0x485bd3(0x4e5)+'rflow'+_0x485bd3(0x7a)+'uto;\x20'+'displ'+_0x485bd3(0x1c3)+'rid;\x20'+'grid-'+'templ'+_0x485bd3(0x458)+_0x485bd3(0x5c5)+'s:\x20re'+'peat('+'auto-'+_0x485bd3(0x4ff)+_0x485bd3(0x2bc)+_0x485bd3(0x389)+_0x485bd3(0x412)+_0x485bd3(0x4dd)+';\x20ali'+'gn-it'+'ems:\x20'+'start'+';\x20ali'+_0x485bd3(0x2d6)+'ntent'+_0x485bd3(0x1c5)+'rt;\x20g'+'ap:\x201'+_0x485bd3(0xfb)+_0x485bd3(0x513)+'ng:\x200'+_0x485bd3(0x199)+'6px\x200'+_0x485bd3(0xef)+_0x485bd3(0x157)+_0x485bd3(0x1f7)+_0x485bd3(0x4d8)+'ebkit'+'-scro'+_0x485bd3(0x2c2)+'\x20{\x20wi'+_0x485bd3(0x31f)+'8px;\x20'+_0x485bd3(0x238)+'\x20.mn-'+'cols:'+':-web'+'kit-s'+_0x485bd3(0x33b)+_0x485bd3(0x7f)+'humb\x20'+'{\x20bac'+_0x485bd3(0xe1)+_0x485bd3(0x544)+_0x485bd3(0x155)+'55,25'+'5,255'+',.08)'+';\x20bor'+'der-r'+_0x485bd3(0x3bd)+_0x485bd3(0x1c4)+_0x485bd3(0xef)+'\x20\x20\x20.s'+_0x485bd3(0x53f)+_0x485bd3(0x425)+_0x485bd3(0x4ac)+_0x485bd3(0x161)+'us:\x201'+_0x485bd3(0x433)+_0x485bd3(0x55c)+_0x485bd3(0x12e)+_0x485bd3(0xb9)+'a(255'+',255,'+_0x485bd3(0x301)+_0x485bd3(0x2e7)+'\x20box-'+'shado'+'w:\x20in'+_0x485bd3(0x125)+_0x485bd3(0x356)+_0x485bd3(0x326)+'gba(2'+'55,25'+_0x485bd3(0x5e7)+_0x485bd3(0x2e1)+_0x485bd3(0xef)+'\x20\x20\x20.s'+_0x485bd3(0x53f)+'d.on\x20'+'{\x20bac'+'kgrou'+_0x485bd3(0x544)+_0x485bd3(0x155)+'55,25'+_0x485bd3(0x5e7)+_0x485bd3(0x533)+_0x485bd3(0x5eb)+_0x485bd3(0x105)+'ow:\x20i'+_0x485bd3(0x27b)+_0x485bd3(0x457)+'\x201px\x20'+_0x485bd3(0x4e9)+'255,1'+'07,15'+_0x485bd3(0x40f)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x485bd3(0x184)+'rd-he'+_0x485bd3(0x464)+_0x485bd3(0x447))+('ay:\x20f'+_0x485bd3(0x228)+_0x485bd3(0x275)+_0x485bd3(0x2ab)+'s:\x20ce'+_0x485bd3(0x239)+_0x485bd3(0x36e)+'\x208px;'+_0x485bd3(0xb4)+'ing:\x20'+_0x485bd3(0x5a1)+_0x485bd3(0x15d)+_0x485bd3(0x436)+_0x485bd3(0x335)+_0x485bd3(0x16c)+'-titl'+'e\x20{\x20f'+_0x485bd3(0xda)+_0x485bd3(0x5bd)+_0x485bd3(0x7c)+'th:\x200'+_0x485bd3(0xef)+'\x20\x20\x20.s'+'k-car'+_0x485bd3(0x467)+_0x485bd3(0x33e)+_0x485bd3(0x151)+_0x485bd3(0x30e)+'t-siz'+_0x485bd3(0x5c4)+_0x485bd3(0x340)+_0x485bd3(0x4a2)+_0x485bd3(0x5a2)+_0x485bd3(0x4e8)+_0x485bd3(0x4f6)+'or:\x20r'+'gba(2'+'46,23'+'8,242'+_0x485bd3(0x3c8)+_0x485bd3(0xef)+_0x485bd3(0x44c)+'k-car'+'d.on\x20'+_0x485bd3(0x4fb)+'ard-t'+'itle\x20'+_0x485bd3(0x1da)+_0x485bd3(0x39b)+_0x485bd3(0x336)+'\x20#fff'+_0x485bd3(0x7e)+'}\x0a\x20\x20\x20'+_0x485bd3(0x3ad)+_0x485bd3(0x215)+'\x20{\x20pa'+_0x485bd3(0x376)+':\x200\x201'+_0x485bd3(0x444)+_0x485bd3(0xfb)+_0x485bd3(0x238)+_0x485bd3(0x3ad)+_0x485bd3(0x135)+_0x485bd3(0x43a)+'nt-si'+_0x485bd3(0x131)+'1px;\x20'+'opaci'+_0x485bd3(0x30d)+'4;\x20ma'+_0x485bd3(0x17d)+'botto'+'m:\x206p'+_0x485bd3(0x2f5)+_0x485bd3(0x2f1)+_0x485bd3(0x98)+_0x485bd3(0x4dc)+'ispla'+'y:\x20fl'+'ex;\x20a'+'lign-'+_0x485bd3(0x288)+_0x485bd3(0x235)+_0x485bd3(0x48c)+_0x485bd3(0x3f7)+_0x485bd3(0x3d4)+'paddi'+_0x485bd3(0xf4)+_0x485bd3(0x590)+_0x485bd3(0x302)+_0x485bd3(0x461)+_0x485bd3(0xdd)+'5px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x485bd3(0xd9)+_0x485bd3(0x31e)+_0x485bd3(0x2a7)+_0x485bd3(0x4f6)+_0x485bd3(0x528)+_0x485bd3(0x155)+_0x485bd3(0x213)+_0x485bd3(0x308)+_0x485bd3(0x347)+_0x485bd3(0xef)+_0x485bd3(0x44c)+_0x485bd3(0x488)+_0x485bd3(0x2f6)+_0x485bd3(0x3a0)+_0x485bd3(0x4aa)+_0x485bd3(0x54c)+_0x485bd3(0x14c)+_0x485bd3(0x15b)+_0x485bd3(0x29e)+_0x485bd3(0x323)+'city:'+_0x485bd3(0xd8)+_0x485bd3(0x238)+_0x485bd3(0x3ad)+'switc'+_0x485bd3(0x1a1)+'ositi'+_0x485bd3(0x187)+'elati'+_0x485bd3(0x33f)+_0x485bd3(0x41e)+'\x2026px'+_0x485bd3(0x1d6)+_0x485bd3(0x1e6)+_0x485bd3(0x2ff)+'\x20bord'+_0x485bd3(0x236)+';\x20bor'+'der-r'+'adius'+':\x2099p'+_0x485bd3(0x48e)+'ckgro'+_0x485bd3(0x4cc)+'rgba('+'255,2'+_0x485bd3(0x307)+'5,.07'+');\x20cu'+'rsor:'+'\x20poin'+'ter;\x20'+_0x485bd3(0x9a)+_0x485bd3(0x4b9)+_0x485bd3(0xef)+_0x485bd3(0x44c)+'k-swi'+_0x485bd3(0x232)+_0x485bd3(0x2dd)+_0x485bd3(0x2fb)+_0x485bd3(0x4df)+_0x485bd3(0x1c9)+_0x485bd3(0x5dd)+'tion:'+'\x20abso'+_0x485bd3(0x12b)+'\x20top:'+'\x203px;'+'\x20left'+':\x203px'+_0x485bd3(0x4f0)+'th:\x208'+'px;\x20h'+_0x485bd3(0x5a2)+_0x485bd3(0x470)+_0x485bd3(0x78)+_0x485bd3(0x1be)+_0x485bd3(0x3bd)+_0x485bd3(0x540)+_0x485bd3(0x25f)+_0x485bd3(0xe1)+'nd:\x20r'+_0x485bd3(0x155)+_0x485bd3(0x307)+'5,255'+',.25)'+';\x20tra'+_0x485bd3(0x524)+'on:\x20l'+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x485bd3(0x2e0)+_0x485bd3(0x1ce)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x485bd3(0x406)+'a-che'+'cked='+_0x485bd3(0x287)+'\x22]\x20{\x20'+'backg'+_0x485bd3(0x12e)+_0x485bd3(0xb9))+('a(255'+_0x485bd3(0x571)+'157,.'+_0x485bd3(0x35f)+'}\x0a\x20\x20\x20'+_0x485bd3(0x3ad)+_0x485bd3(0x487)+_0x485bd3(0x406)+_0x485bd3(0x424)+'cked='+_0x485bd3(0x287)+_0x485bd3(0x51d)+'fter\x20'+'{\x20lef'+_0x485bd3(0x36c)+_0x485bd3(0x440)+_0x485bd3(0x19f)+_0x485bd3(0x475)+'\x20#ff6'+'b9d;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x485bd3(0xa4)+'\x20{\x20ba'+_0x485bd3(0x29c)+_0x485bd3(0x4cc)+_0x485bd3(0x4e9)+_0x485bd3(0x366)+'55,25'+_0x485bd3(0x249)+'5);\x20b'+'order'+_0x485bd3(0x3af)+'borde'+_0x485bd3(0x3bf)+_0x485bd3(0x5d4)+_0x485bd3(0x4b8)+'color'+_0x485bd3(0x2ac)+_0x485bd3(0x103)+_0x485bd3(0xb4)+'ing:\x20'+_0x485bd3(0x2b7)+'px;\x20f'+'ont-s'+_0x485bd3(0x7d)+'11.5p'+_0x485bd3(0x318)+'tline'+':\x20non'+_0x485bd3(0x35c)+'x-sha'+'dow:\x20'+_0x485bd3(0x341)+_0x485bd3(0x356)+_0x485bd3(0x153)+'\x20rgba'+_0x485bd3(0x38d)+_0x485bd3(0x366)+'55,.0'+_0x485bd3(0x1f3)+_0x485bd3(0x3b4)+'.sk-f'+'ield\x20'+_0x485bd3(0x54f)+'n\x20{\x20b'+'ackgr'+_0x485bd3(0x475)+_0x485bd3(0x11e)+_0x485bd3(0x401)+_0x485bd3(0x238)+_0x485bd3(0x3ad)+'range'+_0x485bd3(0x297)+'splay'+_0x485bd3(0x263)+_0x485bd3(0x588)+'ign-i'+'tems:'+_0x485bd3(0x471)+'er;\x20g'+_0x485bd3(0xaf)+_0x485bd3(0x5bb)+_0x485bd3(0x3b4)+'.sk-s'+_0x485bd3(0x22e)+_0x485bd3(0x4c1)+_0x485bd3(0x181)+_0x485bd3(0x357)+'aranc'+_0x485bd3(0x39d)+'ne;\x20a'+'ppear'+_0x485bd3(0x46d)+'\x20none'+_0x485bd3(0x4f0)+_0x485bd3(0x3cb)+'0px;\x20'+_0x485bd3(0x44f)+'t:\x208p'+'x;\x20ba'+_0x485bd3(0x29c)+_0x485bd3(0x4cc)+'trans'+_0x485bd3(0x497)+_0x485bd3(0x243)+_0x485bd3(0x2f1)+_0x485bd3(0x3c1)+_0x485bd3(0x1fc)+':-web'+_0x485bd3(0x3b6)+_0x485bd3(0x22e)+_0x485bd3(0x3fc)+'able-'+'track'+'\x20{\x20he'+_0x485bd3(0x5c1)+'\x202px;'+'\x20bord'+_0x485bd3(0x377)+'dius:'+_0x485bd3(0x1bf)+'\x20back'+'groun'+_0x485bd3(0x28d)+_0x485bd3(0xde)+'gradi'+_0x485bd3(0x5c8)+_0x485bd3(0x3f6)+'d,\x20#f'+'f6b9d'+')\x200\x200'+_0x485bd3(0x44e)+_0x485bd3(0x122)+',\x2050%'+')\x20100'+_0x485bd3(0x25e)+_0x485bd3(0x52c)+'t,\x20rg'+_0x485bd3(0x3ed)+_0x485bd3(0x5e7)+',255,'+_0x485bd3(0x517)+_0x485bd3(0x436)+_0x485bd3(0x335)+_0x485bd3(0x1b1)+_0x485bd3(0x19d)+'webki'+'t-sli'+'der-t'+_0x485bd3(0x11c)+_0x485bd3(0x596)+_0x485bd3(0x5b5)+'appea'+_0x485bd3(0x2e2)+':\x20non'+_0x485bd3(0x442)+'dth:\x20'+_0x485bd3(0x4b8)+_0x485bd3(0x44f)+_0x485bd3(0x2ef)+_0x485bd3(0x3c3)+'rgin-'+_0x485bd3(0x523)+'-2px;'+_0x485bd3(0x3d2)+_0x485bd3(0x377)+_0x485bd3(0x244)+_0x485bd3(0x4a8)+_0x485bd3(0x29b)+'groun'+_0x485bd3(0x482)+_0x485bd3(0x5bc)+_0x485bd3(0xef)+_0x485bd3(0x44c)+'k-val'+'\x20{\x20fo'+'nt-si'+'ze:\x201'+_0x485bd3(0x332)+_0x485bd3(0x14c)+_0x485bd3(0x34d)+_0x485bd3(0xd4)+'0;\x20mi'+_0x485bd3(0x7c)+'th:\x202'+'8px;\x20'+_0x485bd3(0x4ea)+'align'+_0x485bd3(0x5e4)+_0x485bd3(0xd0)+'olor:'+'\x20rgba'+_0x485bd3(0x3ff)+'238,2'+_0x485bd3(0x222)+_0x485bd3(0x1fe)+_0x485bd3(0x2f1)+_0x485bd3(0x456)+_0x485bd3(0x31a))+('\x20widt'+_0x485bd3(0x163)+'px;\x20h'+_0x485bd3(0x5a2)+':\x2022p'+_0x485bd3(0x14e)+_0x485bd3(0x581)+'\x200;\x20b'+'order'+_0x485bd3(0x161)+_0x485bd3(0x120)+_0x485bd3(0x440)+'ackgr'+_0x485bd3(0x475)+_0x485bd3(0x4b9)+';\x20pad'+_0x485bd3(0x42f)+_0x485bd3(0x539)+_0x485bd3(0x1ff)+_0x485bd3(0x115)+_0x485bd3(0x239)+_0x485bd3(0x436)+_0x485bd3(0x335)+'-note'+_0x485bd3(0x43a)+_0x485bd3(0x445)+'ze:\x201'+_0x485bd3(0x332)+_0x485bd3(0x34b)+':\x20rgb'+_0x485bd3(0x20d)+_0x485bd3(0xf8)+_0x485bd3(0x1eb)+_0x485bd3(0x12f)+_0x485bd3(0x1cd)+_0x485bd3(0x42a)+_0x485bd3(0x2a5)+_0x485bd3(0x238)+_0x485bd3(0x3ad)+_0x485bd3(0x3c4)+'err\x20{'+_0x485bd3(0x4cd)+_0x485bd3(0x23b)+_0x485bd3(0x5d2)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+'\x20{\x20al'+_0x485bd3(0x270)+_0x485bd3(0x319)+'flex-'+'start'+';\x20bor'+_0x485bd3(0x522)+_0x485bd3(0x562)+_0x485bd3(0x1d9)+'radiu'+_0x485bd3(0x454)+'x;\x20pa'+_0x485bd3(0x376)+_0x485bd3(0x470)+'\x2016px'+';\x20bac'+_0x485bd3(0xe1)+'nd:\x20#'+_0x485bd3(0x3f6)+_0x485bd3(0x574)+'lor:\x20'+'#fff;'+_0x485bd3(0x302)+'-size'+_0x485bd3(0xdd)+_0x485bd3(0x277)+_0x485bd3(0x14c)+_0x485bd3(0x34d)+_0x485bd3(0x397)+_0x485bd3(0x28b)+_0x485bd3(0x1c8)+_0x485bd3(0x1aa)+_0x485bd3(0x48c)+_0x485bd3(0x238)+'\x20.sk-'+_0x485bd3(0x1d7)+'over\x20'+'{\x20fil'+_0x485bd3(0x2be)+'brigh'+_0x485bd3(0x127)+'(1.1)'+_0x485bd3(0xef)+'\x20\x20\x20');window[_0x485bd3(0x564)+'entLi'+'stene'+'r'](_0x485bd3(0x330)+'wn',_0x1d9034=>{var _0x16028a=_0x485bd3;_0x1d9034['code']==='Inser'+'t'&&(_0x1d9034['preve'+_0x16028a(0x49d)+_0x16028a(0x137)](),_0x50128c[_0x16028a(0x183)](_0x4f5de0));},!![]);var _0xa15078=document[_0x485bd3(0x455)+_0x485bd3(0x4c7)+'ent'](_0x485bd3(0x3de));_0xa15078[_0x485bd3(0x361)][_0x485bd3(0x5a0)+'xt']=_0x50128c[_0x485bd3(0x504)],_0xa15078['inner'+'HTML']='<svg\x20'+_0x485bd3(0x48f)+'ox=\x220'+_0x485bd3(0xa5)+'\x2024\x22>'+_0x485bd3(0x33a)+_0x485bd3(0x431)+'12\x2021'+'c-1.5'+_0x485bd3(0x42c)+_0x485bd3(0x496)+'-4-7.'+_0x485bd3(0x56f)+'.5\x201.'+'8-4.5'+_0x485bd3(0x3ab)+_0x485bd3(0xdc)+_0x485bd3(0x2cf)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+'fill='+_0x485bd3(0x465)+'\x22\x20str'+_0x485bd3(0x423)+_0x485bd3(0x4be)+_0x485bd3(0x18b)+_0x485bd3(0x5b4)+'-widt'+'h=\x222\x22'+_0x485bd3(0x3f5)+'ke-li'+_0x485bd3(0x1fd)+_0x485bd3(0x568)+_0x485bd3(0xbc)+'troke'+'-line'+_0x485bd3(0x546)+_0x485bd3(0x210)+_0x485bd3(0x300)+_0x485bd3(0x20a)+_0x485bd3(0x32b)+'\x2212\x22\x20'+_0x485bd3(0x1b0)+_0x485bd3(0x499)+_0x485bd3(0x3eb)+'\x20fill'+'=\x22#ff'+'6b9d\x22'+_0x485bd3(0x1c2)+'vg>',_0xa15078['title']=_0x50128c[_0x485bd3(0x286)],_0xa15078[_0x485bd3(0x5aa)+_0x485bd3(0x2a3)+'er']=()=>_0xa15078['style']['opaci'+'ty']='1',_0xa15078[_0x485bd3(0x5aa)+_0x485bd3(0x321)+'ve']=()=>_0xa15078[_0x485bd3(0x361)]['opaci'+'ty']=_0x485bd3(0x248),_0xa15078['oncli'+'ck']=_0x36d24d=>{var _0x2c9e4b=_0x485bd3;if('oKmqq'==='CgQfx'){_0x2b43ca[_0x2c9e4b(0x1a3)](_0x45d551['now']());if(_0x58a396[_0x2c9e4b(0xb8)](_0x2ad360[_0x2c9e4b(0x296)+'h'],0x2308+-0x2453*0x1+0x35*0x7))_0x397062[_0x2c9e4b(0x380)]();}else _0x36d24d['stopP'+_0x2c9e4b(0x4a7)+_0x2c9e4b(0x5ab)](),_0x50128c['KOiOw'](_0x4f5de0);},document['body'][_0x485bd3(0x1e4)+_0x485bd3(0x1d1)+'d'](_0xa15078),_0x50128c[_0x485bd3(0x50e)](_0x1d1aa4),_0x50128c['hkkfE'](requestAnimationFrame,_0x48a9f8),console[_0x485bd3(0x501)]('[saku'+'ra-ko'+'ur]\x20m'+'enu\x20r'+'eady.'+'\x20UWMK'+':',_0x5a1816[_0x485bd3(0x1dd)]);});})()));function _0x312f(_0x5a632f,_0x9588ee){_0x5a632f=_0x5a632f-(-0x162f+-0xcd7+-0xe*-0x289);var _0x3bddfd=_0x1ac5();var _0x6172a2=_0x3bddfd[_0x5a632f];if(_0x312f['BqJrwd']===undefined){var _0x4e3931=function(_0x4085ac){var _0x12a3d2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x44eefa='',_0x447963='';for(var _0x3147db=-0x234*0xf+0xe09+0x1303,_0xf000df,_0x3095c2,_0x5471aa=0x2cc*0x6+-0x261+0x1*-0xe67;_0x3095c2=_0x4085ac['charAt'](_0x5471aa++);~_0x3095c2&&(_0xf000df=_0x3147db%(0x2*0x18+0x1787+-0x17b3*0x1)?_0xf000df*(-0xdb9+0x1787+-0x98e)+_0x3095c2:_0x3095c2,_0x3147db++%(0x15*0x2d+0x74f*-0x1+0x3a2))?_0x44eefa+=String['fromCharCode'](-0x17a4+-0xcf*0x12+0x4f*0x7f&_0xf000df>>(-(-0x1f3e+0x2368+-0x428)*_0x3147db&-0x1910+0x1d24+-0x40e)):-0x7*0x225+0x80*0x37+-0x17*0x8b){_0x3095c2=_0x12a3d2['indexOf'](_0x3095c2);}for(var _0x12ec37=-0x2450+-0x2425+-0x4875*-0x1,_0xf8be87=_0x44eefa['length'];_0x12ec37<_0xf8be87;_0x12ec37++){_0x447963+='%'+('00'+_0x44eefa['charCodeAt'](_0x12ec37)['toString'](0x49*0x18+0xa7*0xe+-0x54e*0x3))['slice'](-(0x173c+-0x11*0x61+-0x1*0x10c9));}return decodeURIComponent(_0x447963);};_0x312f['lGDmOt']=_0x4e3931,_0x312f['Nvrogp']={},_0x312f['BqJrwd']=!![];}var _0x36f1e5=_0x3bddfd[-0x3*0x21a+0x25b4+0x1f66*-0x1],_0x1b96c9=_0x5a632f+_0x36f1e5,_0x175143=_0x312f['Nvrogp'][_0x1b96c9];return!_0x175143?(_0x6172a2=_0x312f['lGDmOt'](_0x6172a2),_0x312f['Nvrogp'][_0x1b96c9]=_0x6172a2):_0x6172a2=_0x175143,_0x6172a2;}function _0x1ac5(){var _0x18d5b9=['ztOGmtC','mNb4oYa','BwvKicG','u2TPChm','ih0kica','y2L0EtO','ueHmy00','icaUBw4','ihSGzM8','rLbtigm','DgLKzvC','EdSGz2e','lM1Ulxm','B2XVCJS','ChG7igi','lxDPzhq','ztSGD2K','BMvS','mNb4ide','BNqTC2K','B29RCYa','zgLZCgW','x19ZywS','zxi6igi','Awr0Aa','BfjHDgK','icaGlNm','C2STAgK','ic8GDMe','AgvPz2G','mcuUifm','z2LMEq','CM0GlJq','twLZyW','CZOGoha','y3jLyxq','C2STy28','mcaWida','yxrLlwm','wfr3z20','CeL0vg0','ywn0A0S','icaGica','re9nq28','EcbYz2i','sgTcAKC','y2HdB2W','lxnPEMu','DhLWzq','tg9Hzgu','ywqGEYa','iM5VBMu','CMvHzhK','zc10Axq','zs5bCha','AguGzgu','Cg9PBNq','Aw5NoIa','rwXLBwu','yw5JztO','rNjHBwu','BNqGAxq','oIa4ChG','ignLBNq','y01kAvi','zgHpu0S','zg9JDw0','B3vUzdO','yMHVCa','u2vSzwm','qsblt1u','ihLVDxi','BcbKCMe','s2v5C3q','u3bLzwq','EMrfB1y','BfDRsg8','s2v5vW','C2v0qxq','ieLZr3i','zdOGi2y','rwfJAca','BgLNBG','yxbWBgK','sw5PDgK','C3DPDgm','AY1OAw4','CMvSB2e','v0ftrca','ug9ZAxq','DgvYoYa','Ag9ZDg4','EdSGyMe','DMLLD0i','yw5LBc4','DdOYnNa','EgXkA1i','zxjSyxK','yxnZAwC','tvf3qKm','nc00lJu','CgfYzw4','Fde0FdK','mciGCJ0','AwvZlG','AgvZ','BgvMDa','BNrezwy','oYbKAxm','te1c','ig9Wywm','Aw5Uzxi','B250lxC','zsGXnta','sw9ftNC','yMfJA2q','BMf2','CM9WywC','iduWjtS','tMnKv0G','EtOGyMW','EvHlugy','B3jKzxi','ieTLzxa','BMn1vfu','mJzWEdS','BwLUkdq','ueHbweS','D29YAYa','yvbjAxe','zxjYB3i','AgvSza','BM93','CY1Zzxi','nNb4oYa','ig5VBMu','DK12vMO','BLPgthu','AxnPyMW','Fdj8oq','i2zMnMi','BMuUqxa','CIiSici','ihSGlxC','z3LIywm','EYbKAxm','Awq7iha','uK1rr2q','sfrnta','zuvSzw0','rNDowe0','v01ligK','ywn0Axy','CM9Rzs0','Dw5KoIa','ignVBg8','Dg9Wrgu','z29KrgK','u2HHCNa','CIdIGjqG','ihjLBg8','BfbMu1y','mcbOB28','vwrAyM0','vMjJzvO','lxnPEMK','CZO6lxC','nIaXoci','B25JBgK','B3rOAw4','Bcb7igq','mwzYksK','nhWXmNW','BNrLBNq','A2rYB3a','mcWUntu','zw4GDg8','Aw9UoMy','C3bLzwq','oYbVDMu','tMndv1G','EsaUmZu','oIa2mda','CMDIysG','Dgv4Dc0','sxfqDfe','Bw92zvq','uNvUDgK','kg92zxi','AtmY','oYb3Awq','Bg9Hzgu','EYbIB3G','Eff4Dgq','zJmY','AwrHDgu','oYbJB2W','D2Pmu2q','zvKOmtG','CNrPzgu','Fdz8mNW','lNnRlwm','B2vZig4','uMTwswK','lKXVy2e','zMLSBcW','C21HBgW','Bg9N','twzHA2y','tKPUrgq','zNDpqLq','y2vUDgu','u2fRDxi','rKnkz3a','CYbnB3y','sNvTCfq','BMCGzM8','Bwf0y2G','Bg9Hzhm','DMvYlxy','u1ryuwC','icaGyMe','AwWGC3a','n3W0Fdi','Ag9VA0m','CgfKzgK','nhb4oYa','ntmZmdqZmfzuA09nrG','Aw5Mqw0','lJa4ktS','DMLZDwe','wNvRy3G','Cuz5q2i','tuLtu0K','B2rLu3q','iL06oMe','Bw4Ty2W','qNvUBNK','zvbPEgu','EdSGAgu','zgvYoIa','Dg9WoIa','BNnPDgK','DhKGmc4','vgTRvuy','EKncsxi','B3i6ihi','BsbJzw4','B3zLCMW','CwrmEue','CMvWzwe','zxjZy3i','ihWGC2G','A1zADgu','CMXHEsa','Bw9fEha','lcbZyw4','lc4WncK','sNvTCca','y2HLy2S','C2XPy2u','mtu3lc4','zw50oYa','ida7igm','zMLUza','zIbTyxq','BIbZAwC','igDHDgu','vw5PDhK','AY1Jyxi','oIa1mcu','Dg9WoJe','zxj2zxi','ChGGDwK','BMq6ihi','mNW0Fdy','AM9PBJ0','BgWGBwu','BgLUzvq','q0PwA2S','Dg9W','CMnStKG','B2nRoYa','zfbTrKq','nsKSida','B3b0Aw8','BwLKzgW','y2Tjy2q','u0nhDfO','DMDhr3O','iokaLcb0zq','BvncBui','lc4WnIK','yxb0Dxi','v2LKDgG','BwLZyW','CM9Szq','ihWGBw8','yMfJA2C','Ag9VA3m','vvjbx0S','nJaWide','CMfWAwq','mZuSmJq','mdSGyM8','phn2zYa','ywrKrxy','khjLBg8','z29K','BwvUDca','psjYB3u','z2DSzwq','nsWUmdu','EuvUz2K','AwnRihm','AgfZ','ywXSig8','nsaWlti','wg12vKW','ldeWnYW','oWOGica','lNnRlw0','zdSGy28','A2vMsMe','oIbKCM8','ide7ig0','A3mGyxi','y2fWu2G','mtySmc4','DhKGjq','BMq6ihq','EwTntg4','zhvVwMi','D0jSDxi','v1rztxe','CMrLCJO','z2v0qxq','zwLUC3q','mcWWlJC','lM1Ulxq','z2fTzuW','zw50CW','EdSGywW','vwfssg0','z2v0q28','AwDUyxq','D0ftq0q','B3uU','ywqGD2G','Dhj1zq','ChGGmdS','oYbHBgK','tLbcv0q','Aw46ida','yxjJ','tM8Gzw4','EYaTD2u','uMf0zq','u0fgrsa','AgfvAwS','B2XPBMu','ywLYlG','t0vbCLi','EI1PBMq','ihDLyxa','uvjPD0y','y3nZvgu','mtfWEca','zwLNAhq','lxnLCMK','mtn8m3W','mdb2DZS','zKrZtKe','z2v0rwW','Ag9VA04','A3nty2e','B25TB3u','yxrPB24','ifvUAxq','vMnzAgG','B2LUDgu','ktSkica','B3bLCNq','D2LKDgG','svDKDNC','ww5PA0u','DhjVA2u','yMTPDc0','s25SEwq','DgnOihq','zNbZ','C2vSzwm','B3jZige','ChG7ih0','zJzIowq','mtSGBwK','z24TAxq','zhrOoJe','D0jTwNq','AwDODdO','r29Kl2q','qKDfse0','ztOGmtm','B2X1Bw4','i2zMyJm','BhvYkdi','zw50kcm','idaGnha','EKLTzLq','DgvZDa','lsbVDMu','BMqGBwe','zNjRzxO','t2TTr0q','mNb4ksa','BMX5kq','zJDHotm','u2nHBgu','AxvZoIa','C2LJDg4','BwvsDw4','BMDL','zLHHsxO','Aw1Lihm','C3bHBG','z3jHDMK','zMLSBa','ihbVC2K','uhz4she','Bw4TBg8','wLzlDM8','lK92zxi','ywrIBg8','ufPIBg4','oIbYAwC','wLfKCMu','oJa7D2K','nsWYntu','s2v5ra','mxWXnNW','EdTVCge','oYbIB3G','ihWGrvi','Bw92zw0','nMvLzJi','oYbIB3i','uMvJDa','lxK6ige','BI1ZDwi','BI13Awq','AxPLoIa','mgy1oYa','yMfYlxq','AxrJAa','DcbZDge','B3vUDgu','DgHVzca','D3PADhq','zuv4Ca','zg93kda','Ehzwugm','A291CI0','B1jLy28','tKCG4Ocuia','ohb4ksK','CgXHEtO','qK5SExe','mcWWlJG','i2zMzG','ChbLBNm','yY0XlJu','C2fMzu0','nMi5zci','igj1AwW','yxa6ihi','y3rPB24','nYWWlJm','C2STy3q','CdOGmta','zMXLEdO','vwTtsMC','B3G9iJa','BM9Uzq','ldiXlc4','Bg9JAW','Fde1Fdm','AKLizLi','B3bHy2K','y2n1CMe','zMLLBgq','idaGmJq','ndeYotG3mKTbwvLYEG','lxrPDgW','veX4D08','rKfquum','Dg87zMK','rNPOqMq','ChLUB20','z2r6rLq','A2vizwe','yxa6idG','CvzvBLe','y2HtAxO','qvHUy1a','zvrHA2u','ihbHzgq','DcbHihq','CMfUC2K','lsbHihm','qunezw4','oIbYz2i','igv4Axq','B25Lige','BMqIihm','zeLpuwi','tgLZDa','v1vorMC','Bw91C2u','DgvYo3C','CMeTA28','Agntvxm','zcWGyw4','BY1ZDMC','DdOXmda','DgXLCW','zMLSBfm','DgvYigm','Ahq6idi','jYb0Agu','yxrLvge','y3jVC3m','tMfTzq','BuLQt1O','Ahq7igm','yMTcvhK','C2f2zq','DgGUsw4','DdOGnJa','mcWWlJu','vg93tNO','zgPQzhi','ic40oYa','BgfIzwW','Bgv4oIa','Bw4Ty28','nxm0idi','oIaXms4','BMvHCI0','B3bLBG','vgLJAW','A2DYB3u','ywqU','CdOGmti','wLPTrKi','ExPsvMW','BML0igy','Dgv4Dei','lMrSBa','ywLSzwq','C2STzMK','BMf0Dxi','BNrLEhq','z2v0sxq','B2STCMu','oYb9cIa','rMLLBgq','BNqGAge','mtjWEca','s0XXy00','BMC6idq','zxzLBIa','Ad0ImIi','vgvgvLC','ldiZocW','B250zw4','BMn0Aw8','mhb4oYa','C3rVCfa','sMHxq3K','y0fKzMK','Aw5KzxG','mhWXnNW','Aw9FnZi','yKn5Cvu','zwvMmJS','zgfTywC','lxnOywq','pc9ZBwe','zg93BG','v2Xcu2K','B2X1Dgu','nhW4Fde','DgLVBJO','C2STC3C','r29Kie0','CMfUC3a','zgvZyW','C3rWzLa','zw1LBNq','vMfSDwu','zxrhyw0','ihjLy28','oIbWB2K','y3qGB24','ChGPoYa','ihSGD2K','DxjH','s2LJAwK','EuTNzMS','AhvTyIa','Bg9Hzca','icmYmJe','zvbSDwC','Dxm6idy','wMvYB2u','CIGTlxa','DeXqCNq','CeriB3u','C2v0ida','vejiA1q','Dg5LC3m','DgG6idi','C2f0Dxi','y01LAM0','Bhv0ztS','zhbY','yM9Yzgu','CM91BMq','nsK7iha','zxj5idi','EMu6ide','lxbHCMu','n3WXmxW','sMfms1u','BwrLC2m','ign1CNm','yxvSDa','y2fWDhu','sgLKzxm','igH1CNq','tejnu0G','vvDnsW','CgfYC2u','z1DzB1q','CMvMAxG','uvD1rMu','C2v0sxq','DgvJDgK','FdL8mxW','tKjRCLi','yuLrrMC','igLMig0','BYb7igq','ihnOB3q','lM1Ulxa','C2zVCM0','DxrevM4','zM9UDc0','zdSGyMe','EdSGyM8','BYb0Agu','nta3mtC5nNbqtMDlwa','CM9UzYa','yxnLBgK','mcaXChG','igLZigm','z2jHkdi','Aw9F','icaGlM0','s2fbA3C','CJOGDgG','yw5Uywi','C2L6ztO','zsXTB24','mtjWEdS','Be1VDgK','zw5HyMW','C2v0','lxjHzgK','vgHLC2u','AdOGmZq','ldi1nsW','rgfTywC','CMvHza','C2fMzq','DxfJB1C','lwfWCgW','Fdz8mhW','wvjAwMy','lwnHCMq','z0T4rg4','Bg9HzgK','nYWWlJG','vvDnsYa','z3fmAKO','q2PTv3m','ocK7ih0','lcbJywW','idmWChG','rxHW','ie92zxi','yM9KEq','tu9ersa','lwv2zw4','C0zeALC','C2vSruC','CMDPBI0','AwXLzdO','BerPzsW','qLnOzhG','zwjRAxq','odiPoYa','C0jMtMm','C2STy2e','B3C6ida','zxzLBNq','B246ihi','D2fYBG','Bg93oIa','mJu1lde','owqIihm','CMfPC2u','zwfK','ufmGDw4','s2LSBgu','q0L4tgm','ohW5Fdi','y2rABuy','zun6ugC','iezquW','oYbMAwW','z2uUiei','ltqTnY4','yYGXmda','idrWEca','v2vItw8','yw1L','rLDlDe8','zxi6oI0','y2HPBgq','ywnRz3i','igjHBIa','Acb7iha','BeTHuwq','ChvZAa','DMfSDwu','yLfrEw0','mc41o3q','AxP0vu4','A2uTBgK','ntaLktS','ihbVAw4','ugn0','DMCGEYa','ie9olG','kdaSmcW','B3vUzgu','y3K9iJe','lxnSAwq','tg9JywW','B24UvgK','C3bSAxq','DxmGywm','DgLKzs4','C3bSyxK','D3jPDgu','t1vsx18','yM90Aca','y29Kzq','oYbMB24','BM8Gy2G','zgvYlxi','idjWEdS','qM90Dg8','Axr5oIa','lZ48l3m','yxK6igC','oIa0ChG','oIbZDge','zwXK','mJqSmtC','CNnVCJO','oIaIiJS','sgTmDhq','s2v5qq','CgfNzsa','ywrKAw4','lJjZoYa','Bxm6igm','AxmGAg8','zenOAwW','BwvZC2e','ChG7cIa','B24U','ywqUieK','oYbOzwK','yNrUoMG','Aw9UlLq','CMrLCI0','C3rYB24','m3W3Fdu','B24Oks4','DxDTAW','zw0TDwK','EtOGmdS','B3nL','BhrO','yM91BMq','q2Xlz24','yxbWzw4','AxrPywW','z2H0oIa','zxPPzxi','B3i6icm','yxjNzxq','mcWWlJy','mJqYlc4','msWUmZy','kYbmtui','DhjPA2u','igf1Dg8','lwjHBNi','DhjPyNu','B3HzwKK','nsK7ih0','rM9Yy2u','v2LWzsa','C2STBwi','BI1JB2W','vgfltha','ihrOzsa','zxrL','qK5nEgi','AwrLCJO','BMvJyxa','ktSGFqO','DxjZB3i','B1vgBNy','lwXPBMu','Dg9Y','ltiUnsa','DgfNtMe','EYbJB2W','A25kD24','oYb1C2u','zcbZzwu','DgG6ida','y2LYy2W','CMfKAxu','C3rYB2S','ysGYndy','C2HHzg8','DYGWida','iNjVDw4','yxvSDca','Bw4TC2K','ndySmJm','uvfUzMC','BwjVzhK','zM9YBtO','BgLUzvC','CKjJvuW','igvUDgK','B2r5','ANnIt0e','AguGDxm','idGWChG','ienquW','qMXVy2S','B21izNq','ChG7ihC','ndiSlJG','CMLZAYa','ChG7iha','zwn0Aw8','v3bQzNq','AeHwzfe','Bgv4oYa','s0zSCve','uJOG','ANvTCfa','oIbIBhu','Bg9NBY0','BgLKzxi','EwjhAei','C2HVB3q','idiWmg0','DgnOoJO','tw92zq','D0nVBg8','oIbJzw4','zxi6ida','CMvUDem','FqOGica','BNrLCJS','qu9HzKy','CJOGi2y','Bw4TBwe','v3veuvG','Dc1Iywm','BgLJyxq','ysblB3u','mdSGFqO','BxvWDhy','DdSGFqO','zgL1CZO','zNDtq2S','C3rYAw4','v0HHu3K','mc41','nsWUmdm','C0Piqum','B3nWywm','y2XLyxi','lJuGms4','ihbSywm','zsbTAxm','DMLHifm','CI51As4','zg1tDuy','idrWEdS','CMvJDa','zsb3zwe','icbIywm','tvrxuxO','sM1kA1C','mIaXmK0','zw50zxi','uIb2ms4','ihrYyw4','CMLNAhq','jsbUBY0','oYbIywm','yNv0Dg8','qNPYweG','zM9UDa','oIbMBgu','zxjPDdS','BMqGt0G','ihSGB3a','wu9Hu2y','tw92zw0','zIXZExm','Fdn8nhW','A291CNm','yM90Dg8','BM9szwm','B3vUzdS','AxmGyNu','AwDUlxm','igjVEc0','BgfZDeu','AuHisvC','zxrLy3q','ywXPz24','DxqGDgG','nxb4oYa','zuHwz0e','vK5QCNy','ig1PBIG','BNnLDca','zKPSzLq','AxrPyxq','vwj4CwG','wenwqxa','DhmGCgW','CYaNzNu','oIbJB2W','whjkBwy','rw5NAw4','CML0zxm','zeror3q','iNrYDwu','AxrLBxm','yxKGB24','C3rLCa','mdSGy3u','odbWEcW','zdOGBgK','DNCGlsa','t2TxC2K','Dxm6idi','BNq6igm','B2LS','DMC+','Fdr8m3W','Dc1Myw0','BgvUz3q','ihSGzgK','Aw50zxi','ys11Aq','zgTPDa','igjHy2S','y2TNCM8','igXPBwK','ideWChG','odaSmtK','A21LvLG','Cfvqz1O','zezLDvq','C2vLBNq','BM9tChi','EcaWoYa','BI1SB2C','zxG6ide','oNbVAw4','vgfRzxm','vxH5wNi','lwL0zw0','oIaJzJy','y3jLBwu','BhrLCJO','lwrPCMu','tgvNAw8','sw5MAw4','DMfS','zgvSzxq','AMnAuNO','C3rLBMu','AwXS','nNb4idK','lMLVig0','B2rL','vg10Chy','zvn0EwW','ig1PBM0','Bvfpsw0','DgvYoIa','DgHYB3C','sw5Zzxi','A3ndChm','BgXIyxi','oIaXoYa','x19tquS','s2zTtwW','zuDNC1y','qvPJDeq','BNnWyxi','qwrIBg8','kc4YmIW','Aw5WDxq','Bgf5ig8','B25PBNa','zxmGEYa','idqGnc4','z3ryDee','B09SqLy','A3nqB3m','zvzHBhu','yxrLkde','mdCSmtu','z24Ty28','Ag9VA0C','CNjVCG','DhLSzq','zNvSBhm','v2vHCg8','C2HVD24','ywz0zxi','A2vZig8','lcbPBNm','B3vUzca','lc4WnsK','CMfUy2u','suzutgm','Bgf5oIa','Bhn4ze0','mtbWEdS','mdi1ktS','CM9Wlwy','C2STBwq','wvjjENm','CfzWEe8','nxW2Fde','y2SP','nhWWFdm','DdOGnNa','A0rZsKO','icaGic4','lwnVBhm','s2v5uW','zxzLCNK','EdSGFqO','Dcb7igq','C2STyNq','mNb4ihu','CZOGyxu','Dg9Nz2W','ihSGy28','ywDLigq','CIbHzhy','DuzSD2u','mtrWEdS','zciVpJW','mJu1lc4','igzVBNq','DtmY','B246ig8','v0zMvee','DhjHBNm','ntuSmJu','ocWYndi','B0zOq3e','y2fWtw8','B29hCfO','ndSGFqO','DhK6ic4','EYbMB24','yMX5lum','Bw4TC3u','EtOGz3i','BMLUzW','mty5nZKXnLrUEgHfzG','zxjZ','CMLUz3m','sNv0zKi','ugf0Aa','EdSGB3u','zwXMoIa','Bg9YihS','ic5TBI0','s2vtuxC','igvYCG','ihSGzMW','zhrOoIa','CM9Rzxm','C2vSzwe','sgvHBhq','oYbVCge','B3nLihm','igrPC3a','mxb4ihi','vxrXCLe','BdOGBM8','oYb0CMe','Fdv8m3W','zsbJEd0','B3zLCMy','nhW1Fde','B290zxi','BvrtCMK','A2v5zg8','ms4XlJa','mxb4oYa','zMLSBfq','BI1JBg8','icaUC2S','B2XVCJO','AxHLzdS','oc00lJu','u2vNB2u','phbHDgG','y3jVBgW','DgL0Bgu','igvMzMu','BguGC3q','DMu7ihC','ChG7igy','Aw5Zzxq','AwvSza','y29TyMe','ihn0AwW','swXlzNe','quLNEKK','lc43nsK','CMuGkfm','zxmGB24','zw50rwW','y29SB3i','q0zAEhC','D2vPz2G','BgLUzw4','yvjVsNG','CMvZDg8','ignHBgm','ihjNyMe','ns00idC','y2vdAgK','y0nOueq','idaGmca','lwfWCgu','lc40ktS','yxDQs0q','oYbQDxm','Cc1ZAge','ztSGyM8','As1TB24','v0fttsa','mJuPoYa','icaGig8','C3r5Bgu','rwvUz3K','igHLAwC','Dw5PDhK','rvHqxq','mJu1ldi','nYWWlJC','oIb0CMe','igfUzca','qurIyuO','oIbPBMG','DdOGmtu','C3zNiJ4','igDHCdO','BNn0ywW','j3qGC3q','twHnyMe','yMvS','ys5RB3u','AgfPCG','txzHu0q','zgrPBMC','zxiTCMe','zw50','zwqGyw0','zwfSDgG','ignHy2G','q0nTt0u','vg90ywW','q1btihi','DdOGmZq','C2HPzNq','mNm7Cg8','BNrLCI0','wM1xuLq','DLzKt24','q21RA3O','AguGzNi','qKHiufK','ywXSzwq','yxGOmJu','qxbWBgK','oIa2nta','AwrLihS','kdi1nsW','ANn5Cwe','EgvZige','B24Gzxy','ve9gwLy','C2v0x3q','yxr0ywm','zxG6mJe','y2fSBhm','vKrdruW','DdOGnZa','DhLqy3q','B3rZlG','w3nHA3u','zYb7igm','sw5ZDge','ztOGBM8','Eencr3C','uK1c','AxnWBge','Dgv4Dee','ihDPzhq','ANfKDfm','u3rHDgu','B3qGBwe','sg9VAYa','BguGAwy','y2vSzxi','ihnVig4','mhGYnta','idqTnc4','DdOGmJG','ic5ZAY0','zMXLEdS','oIaWoYa','AsXZyw4','uvvVuey','lMP1Bxa','yw5LBca','cIaGica','ldePoWO','A2L0lxm','yMvNAw4','mtaWmtK1mNHuCgTTsa','t2Lywe8','BhvTBJS','B2fKzwq','BsbVBIa','ywrPDxm','mtaWid0','CI1Yywq','y2XHC3m','C2STC2W','CfHZtgG','EdSGBwe','BM90zs4','DMvTzw4','C2DSyNq','mhG2mda','lc40nsK','DeLJq2u','phnTywW','DgG6idK','Dc1ZAxO','wLzUEeK','4Ocuig92zq','qNvjqNO','zxH0','BI1PDgu','igjVCMq','Fde1Fde','ohb4oYa','z2v0','yw5ZzM8','zw50CZO','BYbWAwC','zgvZ','CKDMzgy','Fdf8nxW','Dhm6yxu','igzPBgW','zgL2','ideYChG','BKrivuC','CM9ZC2G','z29KicG','zwCGzMe','Fdj8mhW','thDjvfq','AwDSyKW','wfjny0e','yw1Hz2u','Dgv4Dem','Axb0kq','iJeUnsi','oYbTAw4','yMeOmJu','igvSC2u','Aw9FmZa','nJaWia','C3fpz0G','Cg9ZAxq','C2fRDxi','seTlrvG','ihn0CM8','zMy2yJK','z2fWoIa','CxLZDLm','oIbHyNm','mJG4mdqXmZjpuvPouLu','ig1HCMC','lxj1BM4','BhrOige','B3n0zMK','kdi0nIW','A3zuAK8','nde5oYa','CgfJAxq','BLbSyxq','y3vYC28','t0HLywW','AfTHCMK','yxmGBM8','ysGYntu','CMvSEsa','B2reAwu','DgvTlxu','AcaTidq','lxnHBNm','Bw4TAa','nYWUmJG','DxjDigG','lYbhCMe','mhb4lca','ndC0odm','CIbNyw0','zvbSyxK','psjTBI0','oYbWB2K','DNbmz2i','vwrmrg8','lMXHC3q','y3jLzw4','yKzjCK0','BhvLCY4','Awr0AdO','Cg9W','wMHQwLC','AMPvuvK','BJOGy28','B2TLpsi','ys1JAgu','zcb7igi','CYbHBgW','y29UDgu','kdeWmhy','zw50tgK','zZOGmNa','yxjPys0','ltiUns0','mJm5nti3merkDxjuBq','nZaWia','zgLUzZO','l1jnqIa','igq9iK0'];_0x1ac5=function(){return _0x18d5b9;};return _0x1ac5();}
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
