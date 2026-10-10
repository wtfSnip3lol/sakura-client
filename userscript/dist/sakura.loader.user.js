// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.9.0
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
function _0x4ac7(){var _0x5643d1=['qsblt1u','zgrPBMC','C3rYB2S','y2fWtw8','vvLms1u','CMvMAxG','v1PvDLe','yYGXmda','twLZyW','AxvZoIa','Bxm6igm','yxnZAwC','wLjgEe4','C3rPBgW','CMvSEsa','zwfK','ktSGFqO','mcuUifm','EvbHy2S','Bcb7igq','ldiZocW','BgLUzwm','ltqTnY4','ihbVC2K','Bg9NBY0','BMq6ihq','zwjiDfa','vur6rgi','EMu6ide','ovDIu05rDG','mdSGFqO','A2DYB3u','CgvrD2y','vfjgugG','C2v0sxq','ieLZr3i','yw5Uywi','uhf5A2m','s2T5z3i','ywqGDg8','oYb3Awq','vuv2z2q','BJOGy28','nZaWia','r3jHDMK','yxbWBgK','ww1qEge','t1vsx18','EvjWEvO','qNrYCMS','oIbYAwC','Aw5Zzxq','B2XPBMu','B3jKzxi','ANf1qxu','CMrLCI0','zcbNCMu','yufbsK4','lIbuDxi','oxWXoxW','yxnLBgK','kdeUmsK','ChGGDwK','Bw4Ty2W','lwfWCgu','ihjLBg8','igzVDxi','Bwf0y2G','AwvSzca','ldiXlc4','CM91BMq','C3rVCfa','rgzgv3y','Dg9WoIa','BM93','zgTcB08','DgvTCZO','Bw4TDge','rLbtigm','oYb9cIa','CMvSB2e','DNHqDeu','B3b0Aw8','B25Lige','AwvSza','tfDzz1O','qNLjza','BMu7ihm','wfHREe4','mJqYlc4','EgLJsuC','tK52D2u','AxHLzdS','zNvSBhm','CM9Rzxm','AhvTyIa','BhKGkhi','tev5CNG','DdSGFqO','u0fgrsa','CgXHEtO','CfHPqva','u2fOrfu','ic5TBI0','ysGYntu','yxjNzxq','EKruuxG','igjVEc0','Ag9VA04','sMrZvhm','BhLSC0S','Cc1ZAge','zgL2','r29Kl2q','EYbKAxm','C2STAgK','w3nHA3u','yNv0Dg8','icaGyMe','z29K','ntuSmJu','CuzdDNu','v2vHCg8','yMX5lum','yLDWuu0','BgvMDa','B25SEsW','CNznzg0','DgLVBJO','ihbVAw4','AxmGAg8','Dxm6ide','shDOAgm','uMfWAwq','EwzksMq','u29vs0y','mta4mJe5nM1WruTwrW','y3qGB24','CML0zxm','icaGlNm','zxj2zxi','CMvZDg8','AM5JsMG','icbIB3G','BLbSyxq','C3bLzwq','A3jNy0C','mJqSmtC','yLvbEeS','igfIC28','AfnOywq','zcb7igi','Bw4TBwe','zxG6ide','DKjVu3y','oYbMAwW','uK1c','zw51','yxjPys0','mxb4oYa','CMvUDem','lNnRlxm','B2rL','zw51ihi','BIbZAwC','zxnJ','CMvJDa','tgLZDa','ExjOEKy','ufjsB24','D29YAYa','wwfVz0y','re1Vs0q','DgG6idK','r0TQs2m','A3nty2e','swrbDxi','zhrOoIa','ywrKAw4','zwv6zsa','ns00idC','ruruufq','r3bxAMi','idi2ChG','y2TNCM8','BvLgtxO','Fdv8mxW','zxrhyw0','ztOGmtm','igrLzMe','uLv6Afy','igLZigm','x19tquS','rNrjC1m','BKL5Efu','DMvYlxy','u2fMzsa','iKLUDgu','Aw5NicS','yY0XlJu','mJu1ldi','AgfZ','y2HPBgq','CY1Zzxi','y2vSzxi','kdaSmcW','B25LigK','Awr0Aa','jYb0Agu','y3jVBgW','zwqGyw0','uMvxt28','oMHVC3q','C2vSzwe','iNjVDw4','CdOGmta','mtz8mti','ldi1nsW','B246ig8','AwDUlxm','ChG7ih0','zMLSBa','igjVCMq','yMfJA2C','igP1Bxa','z3jPzdS','ihSGB3a','iduWjtS','BwLZyW','ugf0Aa','v3jHCha','re9nq28','BNrLCI0','BM9UztS','AfDwseC','Bw4TDg8','ihSGywW','D0HkBfe','zwXjCgm','lc4WnsK','Aw9UoMy','y1bcwgW','zxG7ige','nsWUmdm','AwzlDgm','zsbZzxi','C0DbDNO','mJu1lc4','vhv0rMK','lwv2zw4','B25PBNa','q29SB3i','uIb2ms4','zs1PDgu','CMfPC2u','oIbUB24','BI5MAxi','B2XVCJO','ndSGBwe','C2zVCM0','Bg9Hzca','BMzpDg8','uMvJB2K','CNr1Cca','C2v0qxq','zfHyuwe','ufmGDw4','DgL0Bgu','y2HdB2W','thz1DeK','D0vpwwW','BguGAwy','DxmGywm','ltiUns0','DLrbt3K','Bg9Hzhm','icmYmJe','A2uTD2K','DeTTChC','lxnLCMK','nsaWlti','sgvPz2G','yMvNAw4','A2L0lxm','DhjHy2S','r1HRtuu','zwf0CYa','lZ48l3m','oYbIywm','AhbLuwW','B25JBgK','zc5VBIa','Aw5WDxq','lcbZyw4','C0fOuNe','AY12ywW','quTfsvK','t1rrq3O','B2fKzwq','t0jswNy','y2HtAxO','CJOGi2y','A2v5zg8','oIbPBMG','zgrsAuu','lM1Ulxq','wvfPufi','zMLSBcW','zJzIowq','EYbMAwW','ihSGzM8','oIa5oxa','psjTBI0','BNrezwy','nIaXoci','rwfPAKK','nsWUmdu','zZOGnNa','y3nZvgu','qM90Dg8','lc4WocK','lc43nsK','C2STBwq','DgHVzca','zw9dAKO','Dw5RBM8','u2HHCNa','uMvZzxq','l3jHCgK','EgHPrg0','BYb0Agu','yMfYlxq','ih0kica','C2STCMe','Awq7iha','ANnitLa','CgfYC2u','vu96Exi','B2TLpsi','uwvLteu','C3r5Bgu','ys5RB3u','s1r3q1G','oYbHBgK','Awr0AdO','CgfNzsa','Bw8GDg8','oxWZ','ueTcDgK','CMfUy2u','zMLSBfq','DhKGDMe','Dgv4Dc0','AfTHCMK','ww91zKi','zxjPDdS','CgfJAxq','DcbHihq','BgnyzMi','CwnLCvK','s2HRBuq','ys11Aq','DMCGEYa','s0Dmyue','lxrPDgW','igLMig0','idjWEdS','B2vZig4','lxj1BM4','mNm7Cg8','idaGmca','ihrYyw4','tw92zq','ywrK','FqOGica','lxnHBNm','rfzNwMS','z2fTzuW','AxmGyNu','Aw50zxi','uxzey1m','BgWGBwu','tfLyy3q','mJzWEdS','nhWXmxW','DxrVoYa','C2u6Ag8','q291BNq','nhW1Fde','C2XPy2u','Bgf5oIa','s3btuhm','mdSGyM8','CMvHzhK','idi0iJ4','CMfUC2K','BerPzsK','rMLLBgq','ig9U','tuTWzvC','mtySmc4','Aw5NoIa','DhjHBNm','oYbIB3G','zsbTAxm','i2zMnMi','tw92zw0','ocWYndi','zxrLy3q','yNrUoMG','ide0ChG','sw5Zzxi','B246igW','D2HLCMu','ywnRz3i','Bw92zw0','AxrSzsa','Dgv4Dem','qNjpCKu','ktSGy3u','lwzPBhq','tLLLzMq','ms4XlJa','CJOGDgG','AM1ltxq','zgvSzxq','ig5LDMu','zsaOt0G','BKPLtvK','EYbMB24','uMvJDa','yMrzAge','z2v0sxq','nYWUmJG','idK5osa','we13r2m','u2vNB2u','B3G9iJa','BwLUkdq','D2vhyva','C2STC3C','wu1rAue','EdSGBwe','AwD6vLO','nxm0idi','oIbYz2i','wLDNDhy','ztSGD2K','zenOAwW','igq9iK0','Bw4TAa','Dxm6idi','Aw9F','yw5ZzM8','BhvYkdi','oIbMBgu','B2reAwu','EgPkEMS','BMqIihm','ALH2EM8','ksaXmda','yMDgDMy','BNnLDca','ChG7ihC','y2vdAgK','BwniuMe','zxHczMy','D2vIA2K','B2f0Eq','zw50rwW','lJq1oYa','vvDnsYa','DwPes3a','C2HiBKK','sLbYrNO','z09jA2e','B2LS','wNfTDfu','A2vizwe','CMfKAxu','wxPstMe','B2r5','CgvHDcG','z3LIywm','zdOGi2y','u0fgrq','DvPuufm','mwzYksK','Aw4Sihq','BNqGAxq','zMuGBw8','jsK7ic0','Bw92zq','BI1JBg8','C01HCfi','kdi0nIW','y3rSrue','y29wzuS','rgPRrxO','idaGmJq','zxi6igi','EYbIB3G','uMf0zq','lwjVEdS','ywrIBg8','nhWZFdi','mtSGBwK','B2XVCJS','zvbSDwC','y1PWtNi','DxDTAW','z2v0qxq','zxjZ','BY1ZDMC','ig5VBMu','nYWWlJC','Ad0ImIi','r29Kie0','Agf0igq','mxb4ida','zgvYlxi','Bw92zvq','BwLU','yMX1CG','zg93BIa','C2STy3q','Dw5KoIa','C2v0','x19ZywS','qKDKBNi','sgLKzxm','yxa6idG','wwr5wNa','B250zw4','mtf8mJm','DMfS','y29TCgW','ic8GDMe','mcWWlJC','mtGGnIa','sLLSze4','ihDPzhq','vK5jA3a','EdSGAgu','qxnZzw0','yxjLBNq','icaGic4','BwjVzhK','DMvYihS','y3LKBwG','s0TUzLO','BsbVBIa','v0ftrca','yxrSEsa','CfzmBwy','B3i6ihi','C2v0ida','y2uGB3y','D0jSDxi','lxnSAwq','wfnqqLm','ywrPDxm','uhHfvg0','C3zNiJ4','lM1Ulxm','Bg9YihS','Ag9VA3m','tKCG4Ocuia','ugn0','ywiUywm','wxHeBgC','zxi7igC','zw50CZO','DgHLihC','ihSGyMe','EKv6tva','BeDowMm','nIa2Bde','oYbWywq','ztOGmtC','AwXLzdO','ywnPDhK','mdSGy3u','rvHqxq','BLbzAeW','mc41o3q','zuvSzw0','CIGYmNa','zcbJAg8','AwDUlwK','nNWXmhW','zezJC28','B3bLBG','BsbYAwC','lwrPCMu','C3bSAxq','yxrLvge','A1nuAhO','Bg9Y','DgXLCW','BMfOqLi','Dw1pvvm','A3mGyxi','BgLKzxi','lJuGms4','zgLUzZO','CYaNzNu','zw4GDg8','AxrLBxm','oIa4ChG','Ec1OzwK','v3Dgv3a','z2v0rwW','zgL1CZO','y2HLy2S','yM90Dg8','EYbWB3m','qvLvzNq','mtSGyMe','iefmtca','yxrPB24','C3fny2K','mJSGC3q','BMLUzW','Fdb8mq','AwWGC3a','lc40nsK','mZuSmJq','A2v5C3q','mtiGmJe','EdSGB3u','rffoqK8','yxjHBMm','BgXIyxi','EYbJB2W','BdOGAw4','DdOGmJG','ChGGmdS','qKzRvM4','ocK7ih0','t1HKuwK','igjHy2S','DgL2zsa','yxvSDa','C3rYB24','ifjLy28','BgLUzw4','ndHWEcK','Eg1Or3K','ywX0Ac4','CZOGyxu','rgjKy3G','ifvxtuS','uLnlBLu','rxHW','ihDLyxa','AwrHDgu','y3jVC3m','BML0igy','oYbJB2W','Bgf0zwq','tuHzBLm','zw5HyMW','nMvLzJi','BwvUDca','lIbvC2u','icaG','B3vUzdS','u2TPChm','z2jHkdi','BgfZDeu','BNrLCJS','D0f1ELa','EsbKzwy','DgG6idu','DLrYu1a','twLKte8','wNvJy1m','lc4YnsK','yM9Yzgu','B3C6ida','B3nWywm','BM9Uzq','iJeYiIa','Bg9YoIa','sxnhCM8','igvMzMu','otqWmZe3z09tEeHx','DcWGCMC','ieDLDfy','yMTPDc0','i2zMzG','ig1PBIG','rLfUAKe','AxrPB24','zu5bCuu','kYbmtui','idfWEca','ihLVDxi','CMfUC3a','Dc1Myw0','sLrQsu8','qLz4uLy','z2v0','yxa6ide','CMLZAYa','AvzVv2C','sw5MAw4','DgvY','BNqTC2K','BYb7igq','ywXpAu8','v0fQvK8','nJa4mdvWD1jKANe','z2LMEq','Chj3z20','C2f0Dxi','CNnVCJO','CYbnB3y','A2uTBgK','ChvZAa','EdSGyMe','ywn0Axy','ChG7igi','mcWWlJy','uwXdzfC','EdSGywW','yxv0BY0','C2HPzNq','ChG7igG','zxiTzxy','y2SP','zxi6ida','AwDUyxq','AwXSihK','u2fMzxq','lwjHBNi','uNDsB1e','vNjly1m','Ahq6ida','B3vUDc4','idnWEdS','r2n2Bxe','DgG6idG','CI52mq','zgTPDa','BIb0Agu','qwrIBg8','A2vZig8','zwXMoIa','mtj8nxW','DgnOoJO','Ahq6idi','svbmzwW','tg9Hzgu','mtrWEdS','CMfUz2u','ywXSzwq','C2v0x3q','zxqGmca','ihSGAgu','zgvZyW','vxnSswm','q2zRzKy','re11vui','CMDPBI0','BNnPDgK','zNr1rxK','yMHVCa','B3qGBwe','u3rHDgu','AdOGnJi','lJjZoYa','v0zpt1K','A3ndChm','C2STyNq','rfLyvge','lJv6iIa','lKXVy2e','thbfCMq','ndySmJm','ic5ZAY0','zdOGBgK','EeHbuhy','z29KicG','zMLUza','zw50','Aw9FmZa','zu9XqwW','B3vUDgu','BMTNwwe','BgLUzvC','DMLHifm','zcWGyw4','oIbJzw4','DdOGnNa','C2STC2W','D2fYBG','uKzKAfC','ChG7igy','A291CNm','zwLUC3q','zxG6mJe','z2H0oIa','Dw1UoYa','zvbSyxK','ignLBNq','zwCGzMe','B3rZlG','Cg9ZAxq','t0vfq2y','CI1Yywq','C2STy28','yM91BMq','CYbpsgu','oIaYmNa','EI1PBMq','tM8Gzw4','sMLrq1y','yKrssK4','ywqGD2G','uNvUDgK','BI1TywK','yxmGBM8','C2HHzg8','BIb7igi','v0DPwvy','ohWYFde','zsWGDhi','BwuG','kc4YmIW','uNzLz3C','AwrLihS','oIbKCM8','mtfWEca','Dg9Nz2W','n3WYmNW','zufoC1e','mhW0Fdm','zvjHDgu','uw5swvC','swjAwhe','A2v5Dxa','Bg93oIa','ENzyvKW','BI1SB2C','ienquW','Dgv4Dee','zvzHBhu','nwmWidm','igvUDgK','Dg5LC3m','zMLSBfm','B24U','mtiZnJy4og1WDLvcAa','ywn0A0S','DgnOihq','sfrnta','v3n6rgq','vxzOrK8','mcWWlJu','nNjRswnhrq','DML0Eq','lwLVxYO','ndC0odm','zvn0EwW','yMvS','DgLKzs4','DhK6ic4','nJiWChG','DwX0','igDHCdO','otq3odjiwfbwBfu','BNrLEhq','C2HVD24','CMLNAhq','zM9UDc0','zM9YBxm','Dgv4Dei','CZOGy2u','BxnHzgW','Aw5Uzxi','yxK6igy','id0GzMW','nMi5zci','igfWCgW','ifvjiIW','FdH8mhW','zxzLCNK','AtmY','Dg9Wrgu','zwXK','vhHytxm','B3rrsMO','BMf4yve','wxrZwu0','C3rLBMu','zgvZ','BgrYzw4','zg9JDw0','ksaWida','AxrPywW','DgG6idi','uNnxsMm','ocKPoYa','zciVpJW','mJu1lde','EdSGz2e','swzrvfu','uvDbqMW','mdb2DZS','DgLVBI4','lYbhCMe','u1fgEhu','oIa0ChG','ig9YigS','B290zxi','EdSGFqO','C2fMzu0','A3nqB3m','zw1ZoIa','CMqTAgu','ohb4ksK','mNb4oYa','AwrLCG','zM9UDa','igzSzxG','n3W1Fde','D2fPDgK','CMvU','Bw91C2u','vM93uxO','DhjPA2u','mNW3Fdm','sujXsvy','BhrOige','zxjZihq','DMfSDwu','Bxv0s0K','neX2r2DVAq','BMqGBwe','rwXLBwu','CMqTDgK','BYbWAwC','BMX5kq','DxjH','swniuKm','u2rTr1K','CMvHzey','t2feteC','mdbTCY4','BwrqAKS','q092vei','BguGC3q','C3rYAw4','thLAAxK','msWUmZy','zwjeCLq','zNDQDK4','ihSGD2K','Bwf4','ig9Wywm','BI13Awq','kdi1nsW','CM9Wlwy','DgXL','zKTTr0K','Bg9HzgK','iL0GEYa','DgvYoYa','BMC6idq','z3jHDMK','uxzNv00','rwfJAca','ywqGEYa','ktSkica','oWOGica','v1vut00','s2v5C3q','iezPCMu','ihSGzgK','yxa6ihi','CgfYzw4','oIbJB2W','lsbHihm','sw5ZDge','AeX1CKK','mtjWEca','zxH0','ANvTCfa','yuTVDxi','oc00lJu','ignVBg8','swfUvhe','igj1AwW','phnTywW','yMeOmJu','mdCSmtu','rNruteS','nhb4oYa','yM9KEq','idaGnha','z29Oqxu','AY1Jyxi','y29Kzq','nc00lJu','Dg87zMK','B1jLy28','qKDPu1q','DgfIihS','C3bSyxK','DdOGnZa','BwLKzgW','zw1LBNq','zLb6qwi','idrWEca','CIbNyw0','Ag1dCwy','kg92zxi','zM9YBtO','y1zWv1y','z01iBuC','D2vPz2G','D2L0Ag8','EYaTD2u','ohG5mc0','zZOGmta','zgvYoIa','zgLZCgW','CwHczuW','CNjVCG','mtbQvgrIuvm','Aw46ida','zxiGC2W','nJaWia','oYbVDMu','ywXPz24','ieTLzxa','Ag9VA0C','ywXSig8','AxrPyxq','txHtv1C','u2fRDxi','y2TLzd0','yMXXsM8','DdOGmZq','BNrLBNq','y3jLyxq','Dhm6yxu','BNnWyxi','C3DPDgm','lc4WncK','AY1IDg4','vhPzruG','yxjJ','C2HVB3q','oIbIBhu','mtaWid0','CJSGz2e','DxqGDgG','Fdv8nhW','nYWWlJG','BM9tChi','wKXTugO','z2LMCM8','B21dtK4','u3bHy2u','Fde1Fde','zxjYB3i','C3bHBG','ihWGz2e','ChG7cIa','AwX0zxi','BhmGysa','BcbKCMe','CwvIv20','Dhj1zq','B29RCYa','lw5VDgu','zwfWB24','z2vrtNu','s2Tlufy','q29TyMe','rM9Yy2u','sg1Nsvy','rLbtig8','BhLkCKu','vgLJAW','BwPouwy','AY1ZD2K','B3vUzca','BeDVDwe','Bw4TDgK','C2fRDxi','igDHDgu','q3vZDg8','y29SB3i','qMnxywW','BMCGzM8','CM9WywC','CMvWzwe','oIbJDxi','Dc1ZAxO','DhLSzq','DNLcA04','ysblB3u','tu9ersa','DhLWzq','yw1Hz2u','C2fMzq','nsK7iha','CNrPzgu','B0P3EMm','vKDswwi','BgLUzvq','B3zLCMy','Fdb8mxW','DgvTlxu','AcaTidq','z24Ty28','mNb4ihu','sgvHBhq','DgvTCgW','Bw9fEha','4Ocuig92zq','Bw4TBg8','DMvTzw4','v2zMAeW','BNqGAge','vw5PDhK','C21HBgW','Axb0kq','ie1VDMu','Aw5JBhu','ihnVig4','zMLSBd0','owqIihm','BMvJyxa','khjLBg8','lwXPBMu','B3i6iha','v01ligK','rNjHBwu','yxK6igC','ChG7iha','oIaWoYa','igzVBNq','lxnPEMu','BMuUqxa','u2v0r2e','EevqtuC','AsXZyw4','iJeUnsi','zgfTywC','CIGTlxa','igTVDxi','iIbZDhi','DMG7EI0','igHVB2S','zwfSDgG','lwL0zw0','nsK7igi','ihn5C3q','B3i6icm','nYWWlJm','B2rLu3q','ChbLyxi','igrPC3a','v0fttsa','oIaXoYa','AwDODdO','BNv6C3G','oJiXndC','vg90ywW','zwfKige','yMXzqve','mteUnxa','yxKGB24','ntuSlJa','CIiSici','phn2zYa','mhb4oYa','ihnOB3q','AgvPz2G','icnMzMy','ug9ZAxq','zguSihq','ignHBgm','vvjbx0S','oYbIB3i','Aw5KzxG','BI1ZDwi','uuf4twm','Ahq7igm','zxvYBuC','yxbWzw4','vKTYEeS','zgrStg4','BhvLCY4','sKDvuxy','y1z3Exi','ChjLDMu','DMLLD0i','oIbWB2K','mcbOB28','zwjRAxq','y2XHC3m','zxfut3a','idqTnc4','Dg9W','D2jOwuO','EtOGyMW','AY1OAw4','lK92zxi','yxb0Dxi','tMfTzq','iNrYDwu','oYbOzwK','mtbWEdS','y3vYC28','C2f2zq','odbWEcW','psiJzMy','rgvUsgi','BM9szwm','zvbPEgu','B3nL','lxjHzgK','ysGYndy','zw50tgK','y3jLzw4','mxb4ihi','nxmGy3u','tuLtu0K','DhjVA2u','CJSGzM8','mJuXndu1B0fku2HT','z2ntC0q','DNCGlsa','AguGDxm','BKvqthq','DhjPyNu','icbIywm','ohb4oYa','t0HLywW','idqGnc4','EKjOs0i','qxbWBgK','psjYB3u','Bw5cv04','ywqUieK','Bhv0ztS','iL06oMe','nsWYntu','BMqGt0G','BNq6igm','BwrLC2m','ifTfwfa','iM5VBMu','zc10Axq','EuTQCKe','idHWEdS','nNb4idK','DhLqy3q','BMnL','ig5VigG','B2LUDgu','mhGYnta','nhWWFde','BgLNBG','BwvKicG','B25TB3u','ndiSlJG','lJa4ktS','AYbVBI4','rgT3tKq','zgv2Awm','CNnQAKu','ig1VBwu','Dw5PDhK','C2v0uhi','ohWYFda','C2STy2e','t3zLCNC','whfVzxy','CZOGmty','CMeTA28','B2LSicG','zw50zxi','CYbpDMu','odiPoYa','wejXwhG','AM9PBJ0','lNnRlwy','mtaXnZi5mxP6B0f5vq','y2L0EtO','BMf2','D2LKDgG','z2DSzwq','igXPBwK','kdeWmhy','zxzLBNq','ldeWnYW','BwvZC2e','zw50CW','s29lB3q','BI1JB2W','B250lxC','yxj0lG','nsK7ih0','yJPOB3y','B3bLCNq','ig1PBM0','yxrLlwm','B3bHy2K','BfjHDgK','kYbtCge','Cwrsu1K','CI1ZzwW','BM90zs4','BtOGnNa','AwvKigm','DgG6ida','wNjUvvm','uvbSuuC','AxvZsg8','ihrOAxm','zxi6oI0','CMfWAwq','ihSGzMW','Bgv4oYa','B3zLCIa','oIa2mda','qNnhtMe','ywrKrxy','vLz6sNy','ELjfvfa','C2STBwi','lxK6ige','nJq2o2m','DhLNufK','yM90Aca','ltiUnsa','BI1PDgu','D2L0Aca','rgLZywi','CIb2ywW','BgfIzwW','igfSAwC','j3qGC3q','oIaXnha','Aw9U','DMvYBge','zsbJEd0','Dxm6idy','igHLAwC','Axr5oIa','CM9Szq','AgfPCG','zJmY','zw15igm','lxrVCca','qMXVy2S','ywLYlG','idrWEdS','q2ziteW','zsb3zwe','sfb5ruy','ideYChG','CMzSB3C','B250lxm','y2XLyxi','zMXLEdO','y3rPB24','B29Rihi','nxb4oYa','DxjZB3i','yxfWyuW','yKLNC3i','nde5oYa','DhvYyxq','DwjRDNa','vMLZDwe','DK9MuuG','AwXS','zMLSzw4','vgHLC2u','phbHDgG','idGWChG','y29TyMe','DgHYB3C','lwHLAwC','Ee9ftva','BgvUz3q','Ag9VA0m','mciGCJ0','icaGlM0','D0nVBg8','zhrOoJe','C0Dwsvu','CMDIysG','Ag9VA1a','C2STBge','vfL3rw4','Cg9W','DgvZDa','C3rLCa','yuXxD1y','mhWZFde','ihSGlxC','B3nPDgK','CZPUB24','cIaGica','D3jPDgu','DdOGoha','CIdIGjqG','CMuGkfm','EvvSA0e','zMXLEdS','ihjNyMe','ihWGBw8','vhPHy2K','zYbJyw4','ihn0CM8','ihSGy28','DMu7ihC','EYbSzwy','zu1vCLO','CYb3B24','yMPMse8','zs5bCha','oYbKAxm','zNbZ','y2fSBhm','Bgv4oIa','mNW2Fdu','ChbLBNm','A291CI0','z0fVr2O','oIaJzJy','yNPAz3G','lNnRlwm','CMXHEsa','u3bLzwq','zxiGEYa','y29SCZO','ig1HCMC','s2LSBgu','z2uUiei','tgvMDca','B24Gzxy','u2L6zq','v2vItw8','Bfbju0G','yxnhue8','q0THDMi','tg9JywW','Ec1ZAge','icaUBw4','DNDQCe8'];_0x4ac7=function(){return _0x5643d1;};return _0x4ac7();}function _0x1887(_0x259552,_0x2d0394){_0x259552=_0x259552-(-0x11*-0x2d+-0x1190+-0x3*-0x523);var _0x368c81=_0x4ac7();var _0x30cf2f=_0x368c81[_0x259552];if(_0x1887['ohfaUo']===undefined){var _0x35946d=function(_0x41d0d1){var _0xdeb3f1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x25cb48='',_0x3746fe='';for(var _0x27ca53=-0x1229*-0x1+0x1*0x9e9+-0x1c12,_0x43c039,_0x5392a2,_0x787245=0x1e*-0x42+-0x7*0x419+0x246b;_0x5392a2=_0x41d0d1['charAt'](_0x787245++);~_0x5392a2&&(_0x43c039=_0x27ca53%(-0x23eb+0x65+0x238a)?_0x43c039*(-0x5d*-0x21+0x1baa+-0x2767)+_0x5392a2:_0x5392a2,_0x27ca53++%(0x1*0x223+-0x17aa+-0x1*-0x158b))?_0x25cb48+=String['fromCharCode'](-0x50f+-0x1624+0x1c32&_0x43c039>>(-(0xd7*-0x4+0x1047+0xce9*-0x1)*_0x27ca53&0x139b+-0xe5*0x17+0xfe*0x1)):0xe7e+-0x8b*-0x26+0x10*-0x232){_0x5392a2=_0xdeb3f1['indexOf'](_0x5392a2);}for(var _0x1aae9f=-0x232a+0x1*0x25a6+-0x27c,_0x2bd8c7=_0x25cb48['length'];_0x1aae9f<_0x2bd8c7;_0x1aae9f++){_0x3746fe+='%'+('00'+_0x25cb48['charCodeAt'](_0x1aae9f)['toString'](-0x1d40+0x27*0x41+-0x1*-0x1369))['slice'](-(-0x192*-0x9+-0x128f+0x46f));}return decodeURIComponent(_0x3746fe);};_0x1887['SYpuTx']=_0x35946d,_0x1887['pWGeyt']={},_0x1887['ohfaUo']=!![];}var _0x5dc980=_0x368c81[0xa4*-0x8+-0x920*-0x4+-0x1f60],_0x5ac8fe=_0x259552+_0x5dc980,_0x3d03e1=_0x1887['pWGeyt'][_0x5ac8fe];return!_0x3d03e1?(_0x30cf2f=_0x1887['SYpuTx'](_0x30cf2f),_0x1887['pWGeyt'][_0x5ac8fe]=_0x30cf2f):_0x30cf2f=_0x3d03e1,_0x30cf2f;}(function(_0xbc8745,_0x1b1a85){var _0x5d6246=_0x1887,_0x4a9834=_0xbc8745();while(!![]){try{var _0x4e33ad=parseInt(_0x5d6246(0x272))/(0x23*-0xc5+-0x49*-0x1f+0x1219)+-parseInt(_0x5d6246(0x311))/(-0x7c*0x13+0x74e+-0x3d*-0x8)*(parseInt(_0x5d6246(0x57a))/(0x3bf*-0x8+-0x2f*-0x8b+0x476))+parseInt(_0x5d6246(0x354))/(-0xb5*-0xd+-0x258a+0x1c5d)*(-parseInt(_0x5d6246(0x47d))/(0x591+-0x1bd0+0x1644))+-parseInt(_0x5d6246(0x306))/(0x1434+0x19aa+-0x2dd8)*(-parseInt(_0x5d6246(0x258))/(-0x4e*0x73+0x1*-0x26d3+0x49e4))+parseInt(_0x5d6246(0x2ff))/(-0x23d9+0x1d7d+-0x4*-0x199)+-parseInt(_0x5d6246(0x5e5))/(0x1c41+-0xbf3+-0xf5*0x11)+-parseInt(_0x5d6246(0x3b0))/(-0xecc+0x1*0x1f15+0x1*-0x103f)*(-parseInt(_0x5d6246(0x4b7))/(0x728+-0x1d3f*-0x1+-0x245c));if(_0x4e33ad===_0x1b1a85)break;else _0x4a9834['push'](_0x4a9834['shift']());}catch(_0x246b2c){_0x4a9834['push'](_0x4a9834['shift']());}}}(_0x4ac7,-0x1ee6b+-0x385e3+0x76e25*0x1),((()=>{'use strict';var _0xcf4bf8=_0x1887,_0x5ecc8b={'gcSsD':function(_0x4c9421,_0x108798){return _0x4c9421(_0x108798);},'yrhzF':function(_0x516669,_0x2208ca){return _0x516669!==_0x2208ca;},'igzVZ':function(_0x2bf211,_0x1b2d18){return _0x2bf211===_0x1b2d18;},'SdmGY':function(_0x3cf115,_0xea58e2){return _0x3cf115+_0xea58e2;},'VNIkp':function(_0x26139d,_0x4dabee){return _0x26139d+_0x4dabee;},'uqCxj':'\x20@\x20','WwFWp':function(_0x3bff38,_0x2e5344,_0xe2797b){return _0x3bff38(_0x2e5344,_0xe2797b);},'ZrnUS':function(_0x5d42af,_0x3dfac9,_0x4089fb,_0x5a9ee6){return _0x5d42af(_0x3dfac9,_0x4089fb,_0x5a9ee6);},'dYeGo':_0xcf4bf8(0x360),'ZQJAR':function(_0x4356cb,_0x113bc8){return _0x4356cb(_0x113bc8);},'QnRYW':_0xcf4bf8(0x5d2)+'n','MHYnS':_0xcf4bf8(0x4f6),'DYXTa':'switc'+'h','zVujC':_0xcf4bf8(0x5fb)+'check'+'ed','YtsYM':function(_0x5ac985,_0xa428ec){return _0x5ac985===_0xa428ec;},'zpwxq':_0xcf4bf8(0x2a4),'RwRoQ':function(_0x241f9b,_0x265bef){return _0x241f9b===_0x265bef;},'nEPLt':_0xcf4bf8(0x593),'dkBoO':_0xcf4bf8(0x521)+'22,8,'+_0xcf4bf8(0x139)+'7)','vyBkN':_0xcf4bf8(0x521)+'255,1'+'07,15'+_0xcf4bf8(0x435)+'5)','iusHo':_0xcf4bf8(0x521)+_0xcf4bf8(0x625)+_0xcf4bf8(0x21c)+'0,0.8'+')','GWwht':function(_0x20fec0,_0x513339){return _0x20fec0+_0x513339;},'rXCUu':function(_0x25facc,_0x4e1661){return _0x25facc*_0x4e1661;},'HKqsm':'px\x20ui'+'-sans'+'-seri'+'f,sys'+_0xcf4bf8(0x406)+_0xcf4bf8(0x428)+'s-ser'+'if','UDzDb':function(_0x168500,_0x500567){return _0x168500+_0x500567;},'vTrSP':function(_0x2342cb,_0xbc43c7){return _0x2342cb+_0xbc43c7;},'gWzjl':'600\x20','GcTuX':function(_0x1b9db3,_0x4a3970){return _0x1b9db3*_0x4a3970;},'FQnjA':_0xcf4bf8(0x25c),'RSKnU':function(_0x2ac7ef,_0x864aa0){return _0x2ac7ef+_0x864aa0;},'SoUKF':function(_0x9ee23d,_0x373c8b){return _0x9ee23d/_0x373c8b;},'fdCwz':'u32','GtOeC':'TuETm','gifro':_0xcf4bf8(0x1a2)+_0xcf4bf8(0x219),'zEzMP':function(_0x1b3fbf){return _0x1b3fbf();},'Nirje':_0xcf4bf8(0x427),'KkKPV':_0xcf4bf8(0x60b),'ftuEy':function(_0x4c8a77,_0x1c538f){return _0x4c8a77!==_0x1c538f;},'cydmh':function(_0x3f9831,_0x150f63){return _0x3f9831===_0x150f63;},'cVpWV':'umjhY','bgFvf':'gpAgU','gAoGj':function(_0x2155c5,_0x405c20,_0x4ae75a,_0x5386f0,_0x3acc81){return _0x2155c5(_0x405c20,_0x4ae75a,_0x5386f0,_0x3acc81);},'VxgjP':_0xcf4bf8(0x148)+'ents','TRFPh':function(_0x117389,_0x1eb5d9){return _0x117389===_0x1eb5d9;},'MidLO':_0xcf4bf8(0x184),'oJwzc':'mouse','CKavb':_0xcf4bf8(0x3ee)+_0xcf4bf8(0xfe)+'r.ui.'+'v1','EDTPT':function(_0x555037,_0x3dc471){return _0x555037/_0x3dc471;},'OBRZv':function(_0x20783e,_0x5c5385){return _0x20783e(_0x5c5385);},'aqpaL':function(_0x3657a8,_0x2af54a){return _0x3657a8!==_0x2af54a;},'wVJkD':function(_0xbf5f89,_0x28a2e7){return _0xbf5f89&&_0x28a2e7;},'sGVIU':function(_0x21f4a1,_0x3d67cb){return _0x21f4a1<_0x3d67cb;},'vivMp':_0xcf4bf8(0x130),'MkKJh':function(_0x406a75,_0xf06f6d){return _0x406a75!==_0xf06f6d;},'zvXVL':function(_0x2defaa,_0xde9262,_0x16ec70,_0x591f98,_0x507ae3){return _0x2defaa(_0xde9262,_0x16ec70,_0x591f98,_0x507ae3);},'BVxRV':_0xcf4bf8(0x4f8),'JYldN':function(_0x547be5,_0x53fb18,_0xa7143,_0xdf48fd,_0x4ea766){return _0x547be5(_0x53fb18,_0xa7143,_0xdf48fd,_0x4ea766);},'nfOto':function(_0x46c9aa,_0x548f8f){return _0x46c9aa!==_0x548f8f;},'PWJGt':function(_0x4c2b9a,_0x119849,_0x47c40d,_0x453e4c,_0x462eb6){return _0x4c2b9a(_0x119849,_0x47c40d,_0x453e4c,_0x462eb6);},'Ryywh':_0xcf4bf8(0x53c),'ascUn':function(_0x3bc68e,_0x553005){return _0x3bc68e<_0x553005;},'bjfHO':_0xcf4bf8(0x519),'lPISH':function(_0x2677a2,_0x321523){return _0x2677a2!==_0x321523;},'ifKtc':_0xcf4bf8(0x3d2),'yfJJd':'cNYWe','qhBeL':function(_0x3f99a0,_0x2fd233){return _0x3f99a0+_0x2fd233;},'mpNtq':function(_0x3a13af,_0x187316){return _0x3a13af+_0x187316;},'UEvgd':function(_0x148d49,_0x5796a2){return _0x148d49!==_0x5796a2;},'QDDfd':'mouse'+'down','yPack':'mouse'+'up','fwjvN':_0xcf4bf8(0x1b4),'LWYgZ':function(_0x1ba722,_0x30dbbf){return _0x1ba722-_0x30dbbf;},'CNylz':_0xcf4bf8(0x4d5),'ZuccS':'PGfcA','cZpNr':function(_0x21dbfd,_0x81a66){return _0x21dbfd>_0x81a66;},'EmFko':_0xcf4bf8(0x124)+_0xcf4bf8(0x27b)+'e','umOUS':_0xcf4bf8(0x1c1)+'ete','cPBXl':function(_0x3d68ac){return _0x3d68ac();},'onukx':_0xcf4bf8(0x644)+_0xcf4bf8(0x3bf)+_0xcf4bf8(0x29b)+'d','OTQCz':_0xcf4bf8(0x5cd),'aLWwV':_0xcf4bf8(0x4e2)+_0xcf4bf8(0x18a),'uDAed':_0xcf4bf8(0x647),'jaole':'CANVA'+'S','VrKcS':function(_0x35bf6f,_0x3baf82){return _0x35bf6f!==_0x3baf82;},'mcKeS':'AXMyQ','qdRSY':_0xcf4bf8(0x29d),'xicIG':'--p','SQFxu':function(_0x5b9d07,_0x53b259){return _0x5b9d07*_0x53b259;},'BiEXo':_0xcf4bf8(0x588),'xEQqh':function(_0x51a2c3,_0x5b90c7){return _0x51a2c3*_0x5b90c7;},'GcuGD':function(_0x395b92,_0xc36e62){return _0x395b92+_0xc36e62;},'GXkME':function(_0x228a2e,_0x3be8af){return _0x228a2e*_0x3be8af;},'lGNZc':function(_0x559cc3,_0xe56caf){return _0x559cc3===_0xe56caf;},'tygPY':function(_0x47e44c,_0x4b8b7e){return _0x47e44c+_0x4b8b7e;},'JhVNV':'KeyA','PIPFi':function(_0x1c65b8,_0x46196b){return _0x1c65b8+_0x46196b;},'JTjIO':function(_0x179e5d,_0x18612b,_0x16054d,_0x8e1ad9,_0x278e03,_0x3c82dd,_0x414f19){return _0x179e5d(_0x18612b,_0x16054d,_0x8e1ad9,_0x278e03,_0x3c82dd,_0x414f19);},'peQwf':'KeyD','wsdXA':function(_0x748323,_0x433f20){return _0x748323*_0x433f20;},'DjkEz':function(_0x3cec9f,_0x29d953){return _0x3cec9f-_0x29d953;},'TutFi':function(_0x1aa872,_0x56d3dd,_0x14c62d,_0x2fde17,_0xac989d,_0x2ba09d,_0x2f8de5,_0x3dad88){return _0x1aa872(_0x56d3dd,_0x14c62d,_0x2fde17,_0xac989d,_0x2ba09d,_0x2f8de5,_0x3dad88);},'tpyFm':_0xcf4bf8(0x34b)+'3','DenHb':function(_0x285c2e,_0x116502){return _0x285c2e+_0x116502;},'bTkgw':_0xcf4bf8(0x3d3),'JcOnF':_0xcf4bf8(0x462),'NYefd':function(_0x925fe7,_0x1fcbd1,_0x3b243b){return _0x925fe7(_0x1fcbd1,_0x3b243b);},'TYwEn':function(_0xfbe123,_0x1a0138){return _0xfbe123+_0x1a0138;},'eqTOp':_0xcf4bf8(0x521)+_0xcf4bf8(0x333)+'80,19'+_0xcf4bf8(0x27d)+')','mutKI':'DDVjt','NOhcd':'sk-ra'+'nge','elIpc':_0xcf4bf8(0x681),'hLurI':_0xcf4bf8(0x2c5)+_0xcf4bf8(0x345),'pXiAP':_0xcf4bf8(0x3d6),'XAjbM':_0xcf4bf8(0x529)+_0xcf4bf8(0x3cd)+'2','cnyvW':_0xcf4bf8(0x523)+'bel','PBbCH':_0xcf4bf8(0x561),'cxWOD':_0xcf4bf8(0x413),'KhkmD':function(_0x5570d2,_0x35be7a){return _0x5570d2+_0x35be7a;},'mnBWN':_0xcf4bf8(0x144)+'t','JtwpO':_0xcf4bf8(0x685),'YANYt':_0xcf4bf8(0x50b),'NCrkK':function(_0x37b275,_0x1dde5a){return _0x37b275-_0x1dde5a;},'geQNu':function(_0x5a7979,_0x5d6ac2){return _0x5a7979*_0x5d6ac2;},'bzZgx':_0xcf4bf8(0x521)+_0xcf4bf8(0x625)+_0xcf4bf8(0x21c)+_0xcf4bf8(0x1c3)+'5)','sqMci':function(_0x49180b){return _0x49180b();},'Xqoev':function(_0x3dfeb3,_0x5c8cc0){return _0x3dfeb3!==_0x5c8cc0;},'PKNxa':_0xcf4bf8(0x12d)+'|3|2|'+'0|6','kSThz':_0xcf4bf8(0x161)+'itch','JPrFz':function(_0x224a46,_0x2ba74f){return _0x224a46(_0x2ba74f);},'QeeLE':_0xcf4bf8(0x2d5)+_0xcf4bf8(0x1ff),'eCcdC':_0xcf4bf8(0x13e)+'9d','ebHtP':'sk-bt'+'n','XXkxN':_0xcf4bf8(0x325),'JiQCV':'SAFE\x20'+'MODE\x20'+_0xcf4bf8(0x40d)+'rlay\x20'+_0xcf4bf8(0x5db)+_0xcf4bf8(0x49a)+_0xcf4bf8(0x3de)+'(relo'+_0xcf4bf8(0x584)+'\x20exit'+')','sAhRq':function(_0x79b353,_0x447dd2){return _0x79b353+_0x447dd2;},'nIyxU':_0xcf4bf8(0x45d)+_0xcf4bf8(0x203)+_0xcf4bf8(0x49f)+'all\x20o'+'ff)','jNgiD':'loade'+'d','jFWZz':_0xcf4bf8(0x370)+'ng','VYctN':_0xcf4bf8(0x535)+_0xcf4bf8(0x40f)+'t\x20','DkwND':'Statu'+'s','XMwGc':_0xcf4bf8(0x1f1),'XSPBS':_0xcf4bf8(0x1ae)+_0xcf4bf8(0x5ff),'QMwvy':'Zeroe'+'s\x20spr'+_0xcf4bf8(0x43f)+_0xcf4bf8(0x355)+'xes\x20a'+'ccura'+'cy\x20on'+'\x20your'+_0xcf4bf8(0x238)+_0xcf4bf8(0x553)+'ery\x202'+_0xcf4bf8(0x35f),'eANsQ':function(_0x31c3e7,_0x4be6a0){return _0x31c3e7!==_0x4be6a0;},'JdsTs':'Jump\x20'+'%','JAMEN':_0xcf4bf8(0x552)+'middl'+'e','JgSNS':'CPS\x20r'+'eadou'+'t','BGiST':_0xcf4bf8(0x3f0)+'m\x20cen'+'ter\x20c'+'rossh'+_0xcf4bf8(0x4fc),'IanTq':_0xcf4bf8(0x2da)+_0xcf4bf8(0x4f9)+_0xcf4bf8(0x2be)+_0xcf4bf8(0x150)+_0xcf4bf8(0x123)+'ild\x20h'+_0xcf4bf8(0x2e0)+_0xcf4bf8(0x25a)+'isibl'+_0xcf4bf8(0x2ce)+_0xcf4bf8(0x351)+_0xcf4bf8(0x358)+_0xcf4bf8(0x18c)+_0xcf4bf8(0x4a3),'MJPSo':function(_0x331620,_0x1faff7){return _0x331620(_0x1faff7);},'lQUQH':'ACTk\x20'+_0xcf4bf8(0x550)+'r','lyJrE':_0xcf4bf8(0xf0),'uZTPS':_0xcf4bf8(0x3bb)+_0xcf4bf8(0x3fa)+_0xcf4bf8(0x530),'MICgW':'\x20|\x20ga'+_0xcf4bf8(0x2e6),'dXXQa':'Sakur'+'a\x20Kou'+'r','WNKrZ':'mn-cl'+_0xcf4bf8(0x473),'DQNBO':_0xcf4bf8(0x5aa)+'b','IbZXq':_0xcf4bf8(0x1b6)+'l','RkZbj':function(_0x42b002,_0x45752e){return _0x42b002===_0x45752e;},'BFkVn':'canva'+'s','WUTOM':_0xcf4bf8(0x3ee)+_0xcf4bf8(0x112),'XBqXx':_0xcf4bf8(0x1f9),'LKnqS':_0xcf4bf8(0x516)+'t','Rvegw':_0xcf4bf8(0x11d),'OaJsT':'visua'+'l','VGRYb':_0xcf4bf8(0x288)+'y','hpeQl':'keydo'+'wn','YMEzR':'[saku'+'ra-ko'+'ur]\x20m'+_0xcf4bf8(0x600)+'eady.'+_0xcf4bf8(0x235)+':','ANDdC':'#ffb3'+'c6','qtBCH':_0xcf4bf8(0x3d5),'exBff':_0xcf4bf8(0x1c9)+_0xcf4bf8(0x5d8)+_0xcf4bf8(0xef)+'.dll','KoKot':_0xcf4bf8(0x5d4),'ysrsa':'godDi'+'e','tgrxE':'Legio'+_0xcf4bf8(0x5ed)+_0xcf4bf8(0x316)+_0xcf4bf8(0x466)+_0xcf4bf8(0x30c)+'Recoi'+'lMoti'+'on','JbPrq':_0xcf4bf8(0x3e8),'aAAJN':_0xcf4bf8(0x322),'Mnmdm':'OShoo'+_0xcf4bf8(0x26d),'UPXPO':_0xcf4bf8(0x426)+'meRun'+_0xcf4bf8(0x218),'otQJj':function(_0x16dd1b,_0x56269f,_0x25843c,_0x41b9bd,_0x5bf54d,_0x404bcf,_0x119af6,_0x18dbc2){return _0x16dd1b(_0x56269f,_0x25843c,_0x41b9bd,_0x5bf54d,_0x404bcf,_0x119af6,_0x18dbc2);},'XzOtS':_0xcf4bf8(0x256)+'unded','rvMdm':function(_0x5ac00d,_0xc061ff){return _0x5ac00d(_0xc061ff);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0xcf4bf8(0x526)](location['hostn'+'ame']||''))return;if(window['__SAK'+'URA_K'+_0xcf4bf8(0x58c)])return;window[_0xcf4bf8(0x61d)+_0xcf4bf8(0x44d)+_0xcf4bf8(0x58c)]=!![];var _0x1ce1d8=_0xcf4bf8(0x13e)+'9d',_0x46b7cd=_0x5ecc8b['ANDdC'],_0x4f5313={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x27b1c4={..._0x4f5313};try{Object[_0xcf4bf8(0x568)+'n'](_0x27b1c4,JSON[_0xcf4bf8(0xf9)](localStorage[_0xcf4bf8(0x159)+'em'](_0xcf4bf8(0x3ee)+_0xcf4bf8(0xfe)+_0xcf4bf8(0x291))||'{}'));}catch(_0x3974c4){}function _0x141cd6(){var _0x12a2b5=_0xcf4bf8;try{_0x5ecc8b[_0x12a2b5(0x605)]('jrHgq','jrHgq')?(_0x1a0666['class'+_0x12a2b5(0x604)][_0x12a2b5(0x2ec)+'e']('on',_0x5597d2),_0x5ecc8b[_0x12a2b5(0x47e)](_0x53ef6d,_0x5f32b0)):localStorage[_0x12a2b5(0x57f)+'em']('sakur'+_0x12a2b5(0xfe)+_0x12a2b5(0x291),JSON['strin'+_0x12a2b5(0x273)](_0x27b1c4));}catch(_0x3d3d8d){}}var _0x33a6d4={'uwmk':!!window[_0xcf4bf8(0x412)+_0xcf4bf8(0x555)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x27b1c4['safeM'+_0xcf4bf8(0x5ff)],'lastError':''};try{window[_0xcf4bf8(0x4df)+_0xcf4bf8(0x476)+_0xcf4bf8(0x329)+'r'](_0x5ecc8b['qtBCH'],_0x2b932f=>{var _0x1c00a5=_0xcf4bf8,_0x1f6a5a={'LmZvY':function(_0x3ef2a8){return _0x3ef2a8();}};if(_0x5ecc8b[_0x1c00a5(0x164)]('RFdhW',_0x1c00a5(0x2c7)))try{if(_0x1c00a5(0x172)!==_0x1c00a5(0x172)){if(_0x557916[_0x2e326a]['id']&&_0x46855c[_0x5d34c6]['id']['index'+'Of'](_0x1c00a5(0x546)+'io_')===0xe00+-0x59*0x4e+0xd1e)_0x3ad4f0[_0x13840d]['style']['displ'+'ay']='none';}else{var _0x692347=_0x2b932f&&(_0x2b932f[_0x1c00a5(0x4c0)+'ge']||_0x2b932f['error']&&_0x2b932f[_0x1c00a5(0x3d5)][_0x1c00a5(0x4c0)+'ge'])||'unkno'+'wn';if(_0x2b932f&&_0x2b932f['filen'+'ame'])_0x692347+=_0x5ecc8b['SdmGY'](_0x5ecc8b[_0x1c00a5(0x1c7)](_0x5ecc8b['uqCxj'],String(_0x2b932f[_0x1c00a5(0x512)+'ame'])[_0x1c00a5(0x1fc)]('/')[_0x1c00a5(0x525)]())+':',_0x2b932f[_0x1c00a5(0x22f)+'o']||'?');_0x33a6d4[_0x1c00a5(0x247)+'rror']=String(_0x692347)[_0x1c00a5(0x12e)](0x1*0xf47+0x1b1a+-0x2a61,0x3*-0x61f+-0x12f+-0x142c*-0x1);}}catch(_0x122d84){}else _0x341dcb['speed'+_0x1c00a5(0x1e1)]=_0x32969e,_0x1f6a5a['LmZvY'](_0x10c83f);});}catch(_0x5f3b4f){}var _0x330071=null,_0x1d7b02=null,_0x5c8ed8={},_0x1b95ea=[],_0x14c0cd=[],_0xbc19b5=new Map();function _0x5a3f66(_0x42d7e8,_0x5ebb5e){var _0x596b97=_0xcf4bf8;if(!_0x5ebb5e||_0x42d7e8[_0x596b97(0x416)+_0x596b97(0x32a)](_0x5ebb5e)||_0x42d7e8[_0x596b97(0x51a)+'h']>-0x373+0x19db+-0xb14*0x2)return;_0x42d7e8['push'](_0x5ebb5e);}function _0x4ddf71(_0x10172a,_0x2a4603,_0x3060e9,_0x14c925){var _0x521061=_0xcf4bf8,_0x2834ea=-0x20e+-0xe*0x239+0x212c;try{_0x2834ea=_0x2a4603&&_0x2a4603['val']?_0x2a4603['val']():0x253a*0x1+-0x43a+-0x2100;}catch(_0x402ca0){}if(!_0x2834ea)return;_0x5ecc8b['WwFWp'](_0x5a3f66,_0x10172a,_0x2834ea),_0x3060e9[_0x14c925]=_0x10172a['lengt'+'h'];if(_0x5ecc8b[_0x521061(0x164)](_0x14c925,'movem'+_0x521061(0x4c1))&&_0x10172a['lengt'+'h']){var _0x54d841=_0x5c8ed8[_0x521061(0x560)+'ve'];if(_0x54d841)try{_0x54d841[_0x521061(0x23f)+'ed']=![];}catch(_0x537420){}}}function _0x5e77ae(_0x2462ef,_0x7c9b0c,_0x358048){var _0x20480a=_0xcf4bf8,_0xc0fa1=_0xbc19b5[_0x20480a(0x268)](_0x2462ef);!_0xc0fa1&&(_0xc0fa1=new Map(),_0xbc19b5[_0x20480a(0x1b8)](_0x2462ef,_0xc0fa1));if(!_0xc0fa1['has'](_0x7c9b0c))try{var _0xcb5eeb=new _0x330071(_0x2462ef)['readF'+'ield'](_0x7c9b0c,_0x358048);_0xc0fa1[_0x20480a(0x1b8)](_0x7c9b0c,_0xcb5eeb!==undefined?_0xcb5eeb[_0x20480a(0x1c0)]():null);}catch(_0x2f9af8){if(_0x5ecc8b[_0x20480a(0x164)]('eybmc',_0x5ecc8b['dYeGo'])){var _0x41b953=_0x5ecc8b[_0x20480a(0x4d4)](_0x1572ea,_0x1f2f4f,_0x51b4d3,_0x31a637);if(_0x41b953!=null)_0x233ceb(_0x30d7bf,_0x54b34e,_0x533843,_0x41b953*_0x2f355b);}else _0xc0fa1['set'](_0x7c9b0c,null);}return _0xc0fa1[_0x20480a(0x268)](_0x7c9b0c);}function _0x233bc5(_0x3780c1,_0x3fad7d,_0x37e9ad,_0x242ca1){var _0xb3ca34=_0xcf4bf8,_0x224313={'FVJBD':function(_0x48d60e){return _0x48d60e();},'LvutI':_0x5ecc8b[_0xb3ca34(0x2f1)]};if(_0x5ecc8b[_0xb3ca34(0x328)](_0x5ecc8b['zpwxq'],_0xb3ca34(0x2a4)))try{if(_0x5ecc8b[_0xb3ca34(0x28a)](_0x5ecc8b[_0xb3ca34(0x481)],_0xb3ca34(0x60d))){var _0x2ec80b={'DMuUB':_0xb3ca34(0x3dd),'RsWJc':'aria-'+'check'+'ed','surSo':function(_0x36e9be,_0xd5d931){return _0x5ecc8b['ZQJAR'](_0x36e9be,_0xd5d931);}},_0x5b1223=_0x1a828f['creat'+_0xb3ca34(0x1f3)+_0xb3ca34(0x2bb)](_0x5ecc8b[_0xb3ca34(0x2f1)]);return _0x5b1223['type']=_0x5ecc8b['QnRYW'],_0x5b1223[_0xb3ca34(0x45f)+_0xb3ca34(0x468)]='sk-sw'+'itch',_0x5b1223[_0xb3ca34(0x665)+_0xb3ca34(0x482)+'te'](_0x5ecc8b[_0xb3ca34(0x23e)],_0x5ecc8b['DYXTa']),_0x5b1223[_0xb3ca34(0x665)+'tribu'+'te'](_0x5ecc8b['zVujC'],_0x455f18(!!_0x332753)),_0x5b1223[_0xb3ca34(0x67f)+'ck']=_0x139510=>{var _0x57ec15=_0xb3ca34;_0x139510[_0x57ec15(0x5a4)+_0x57ec15(0x3f4)+_0x57ec15(0x215)]();var _0x3a5b91=_0x5b1223['getAt'+'tribu'+'te'](_0x57ec15(0x5fb)+_0x57ec15(0x20f)+'ed')!==_0x2ec80b[_0x57ec15(0x2a5)];_0x5b1223['setAt'+'tribu'+'te'](_0x2ec80b[_0x57ec15(0x330)],_0x330801(_0x3a5b91)),_0x2ec80b['surSo'](_0x387fe9,_0x3a5b91);},_0x5b1223;}else new _0x330071(_0x3780c1)[_0xb3ca34(0x52e)+_0xb3ca34(0x136)](_0x3fad7d,_0x37e9ad,_0x242ca1);}catch(_0x5b5460){}else{var _0x51961e=('4|2|0'+'|1|5|'+'3')['split']('|'),_0x218a23=-0xbd+0x7*-0x3cb+0x1b4a*0x1;while(!![]){switch(_0x51961e[_0x218a23++]){case'0':_0x4caa48[_0xb3ca34(0x45f)+'Name']=_0xb3ca34(0x2b0)+'n';continue;case'1':_0x4caa48['textC'+_0xb3ca34(0x1be)+'t']=_0x2c8750;continue;case'2':_0x4caa48[_0xb3ca34(0x3fc)]=_0x224313[_0xb3ca34(0x66a)];continue;case'3':return _0x4caa48;case'4':var _0x4caa48=_0x1db7a5[_0xb3ca34(0x3c0)+_0xb3ca34(0x1f3)+'ent'](_0xb3ca34(0x5d2)+'n');continue;case'5':_0x4caa48['oncli'+'ck']=_0x3aba39=>{var _0x28618b=_0xb3ca34;_0x3aba39['stopP'+_0x28618b(0x3f4)+_0x28618b(0x215)](),_0x224313['FVJBD'](_0x3323d0);};continue;}break;}}}function _0x60429d(_0x349147,_0x38f979){var _0x5418ef=_0xcf4bf8;if(_0x5418ef(0x583)===_0x5418ef(0x583))try{var _0x35dc5a=new _0x330071(_0x349147)[_0x5418ef(0x35d)+'ield'](_0x38f979,_0x5ecc8b['fdCwz']);return _0x35dc5a?_0x35dc5a[_0x5418ef(0x1c0)]():0xa6d+-0x32*0x7d+-0x1*-0xdfd;}catch(_0x46c734){return-0x1*-0x2335+-0x2cf*-0x7+0x6*-0x925;}else{var _0x3e1bb2=_0x1defb1['has'](_0x3985b3);_0x393a7b['save'](),_0x49a321[_0x5418ef(0x677)+_0x5418ef(0x642)]();if(_0x367900[_0x5418ef(0x5a3)+'Rect'])_0x3edb2d[_0x5418ef(0x5a3)+'Rect'](_0x5a1481,_0x106578,_0x3f01ef,_0x5cb61f,(-0x36d*-0x8+0x1d9+0x81*-0x3a)*_0x9a6995);else _0x25babf[_0x5418ef(0x603)](_0x323aaa,_0x3e2680,_0x524f7f,_0x142dc5);_0x47132c[_0x5418ef(0x2fd)+_0x5418ef(0x3f8)]=_0x3e1bb2?_0x5418ef(0x521)+_0x5418ef(0x333)+_0x5418ef(0x38e)+_0x5418ef(0x3ce)+'5)':_0x5ecc8b[_0x5418ef(0x5a8)],_0x3b5dcc[_0x5418ef(0x63a)](),_0x175309[_0x5418ef(0x2c0)+_0x5418ef(0x62c)]=0x25e1+-0x6*0x3cc+-0x54*0x2e,_0x40abe1['strok'+_0x5418ef(0x30a)+'e']=_0x3e1bb2?_0x15bac8:_0x5ecc8b[_0x5418ef(0x3f9)],_0x261497[_0x5418ef(0x55f)+'e'](),_0x3e1bb2&&(_0x7afa59[_0x5418ef(0x2e1)+_0x5418ef(0x51e)+'r']=_0x42a3a5,_0x763be6['shado'+_0x5418ef(0x1d7)]=-0xe7+0x1*-0x1058+0x114d,_0x41a86e[_0x5418ef(0x63a)](),_0x2b663b[_0x5418ef(0x2e1)+'wBlur']=0x24f+0xe*-0x47+0x193),_0x15e124[_0x5418ef(0x2fd)+'tyle']=_0x3e1bb2?_0x5418ef(0x25c):_0x5ecc8b[_0x5418ef(0x4d6)],_0x324566['textA'+_0x5418ef(0x49e)]='cente'+'r',_0x21b43c['textB'+_0x5418ef(0x599)+'ne']=_0x5418ef(0x39d)+'e',_0x12ea82[_0x5418ef(0x346)]=_0x5ecc8b['GWwht']('700\x20'+_0x5bc033[_0x5418ef(0x5a3)](_0x5ecc8b['rXCUu'](0x1e9f+-0x82*0x2e+-0x737,_0x93d0f0)),_0x5ecc8b['HKqsm']),_0x3b2e58['fillT'+_0x5418ef(0x385)](_0x3b7e11,_0x4ccde8+_0x2f7b7d/(-0x22e3*-0x1+0x5*0x621+-0x4186),_0x5ecc8b[_0x5418ef(0x578)](_0x20e3e7,_0x579da3/(0x1a29*0x1+-0x2*0x716+0x1*-0xbfb))-(_0x436906?(0xc6e+-0xf8b*-0x1+-0x1bf4*0x1)*_0x3bfbf6:0x1*0x1943+0x1*0x210d+-0x3a50)),_0x4c4845&&(_0x46a9d7['font']=_0x5ecc8b['vTrSP'](_0x5ecc8b['gWzjl']+_0x43a70d['round'](_0x5ecc8b['GcTuX'](-0xab8+0x1*-0x101+0xbc2,_0x2ff7ab)),_0x5ecc8b['HKqsm']),_0x196558[_0x5418ef(0x2fd)+_0x5418ef(0x3f8)]=_0x3e1bb2?_0x5ecc8b[_0x5418ef(0x25e)]:'rgba('+_0x5418ef(0x625)+'35,24'+_0x5418ef(0x305)+'5)',_0x271b41[_0x5418ef(0x107)+_0x5418ef(0x385)](_0x2928b4,_0x475295+_0x6e2f16/(0x25c5+0x399+0xa57*-0x4),_0x5ecc8b[_0x5418ef(0x236)](_0x4c626e,_0x5ecc8b['SoUKF'](_0x120bc9,-0x2*0xf+0x1*-0x96e+0x98e))+(0x231*0xb+0x2*0xe2+-0x93*0x2d)*_0x2d331e)),_0x2ac01b['resto'+'re']();}}function _0x372377(_0xb146f5,_0x45db13,_0x58cf59,_0x3b1f47){var _0x59ad1b=_0xcf4bf8,_0x5bb4d8=_0x5ecc8b[_0x59ad1b(0x4d4)](_0x5e77ae,_0xb146f5,_0x45db13,_0x58cf59);if(_0x5bb4d8!=null)_0x233bc5(_0xb146f5,_0x45db13,_0x58cf59,_0x5bb4d8*_0x3b1f47);}function _0x2d2d71(_0x2e5fd7,_0x2d3b20,_0xc47a27,_0x15fda9,_0x5f03dd,_0x1e442d,_0x101270){var _0x13242f=_0xcf4bf8,_0xa7dca1={'mYFMz':'sakur'+_0x13242f(0xfe)+_0x13242f(0x291)};if(_0x5ecc8b['GtOeC']!==_0x13242f(0x608))try{var _0x427366=_0x5ecc8b[_0x13242f(0x3d1)][_0x13242f(0x1fc)]('|'),_0xcacd86=-0x3*0xa81+-0x1ae4*-0x1+-0x1*-0x49f;while(!![]){switch(_0x427366[_0xcacd86++]){case'0':_0x33a6d4['hooks'+_0x13242f(0x43e)]++;continue;case'1':return _0x5ce283;case'2':_0x5c8ed8[_0x2e5fd7]=_0x5ce283;continue;case'3':_0x5ce283['enabl'+'ed']=_0x101270!==![];continue;case'4':var _0x5ce283=_0x1d7b02[_0x13242f(0x522)+_0x13242f(0x562)]({'typeName':_0x2d3b20,'methodName':_0xc47a27,'params':_0x15fda9,'returnType':_0x5f03dd},_0x1e442d);continue;}break;}}catch(_0x47e8e9){return console[_0x13242f(0x2c6)]('[saku'+_0x13242f(0x4af)+'ur]\x20h'+_0x13242f(0x507)+_0x13242f(0x2d0)+'iled:',_0x2e5fd7,_0x47e8e9&&_0x47e8e9['messa'+'ge']),null;}else _0x263f4b[_0x13242f(0x568)+'n'](_0xcad8ba,_0x353ee7['parse'](_0x432e03[_0x13242f(0x159)+'em'](_0xa7dca1[_0x13242f(0x616)])||'{}'));}function _0x520d85(_0x46d8a7,_0x54caa5,_0xbf0397,_0xedc8ea,_0x90c6e6,_0x3fea80,_0x581243){var _0x584cbe=_0xcf4bf8;if(_0x5ecc8b['Nirje']!==_0x5ecc8b[_0x584cbe(0x3e2)])try{var _0xdb40e1=('3|4|2'+'|1|0')[_0x584cbe(0x1fc)]('|'),_0x50c700=0x138d+-0x4a+-0x1343*0x1;while(!![]){switch(_0xdb40e1[_0x50c700++]){case'0':return _0xdf5ca6;case'1':_0x33a6d4[_0x584cbe(0x1df)+'Total']++;continue;case'2':_0x5c8ed8[_0x46d8a7]=_0xdf5ca6;continue;case'3':var _0xdf5ca6=_0x1d7b02[_0x584cbe(0x522)+'ostfi'+'x']({'typeName':_0x54caa5,'methodName':_0xbf0397,'params':_0xedc8ea,'returnType':_0x90c6e6},_0x3fea80);continue;case'4':_0xdf5ca6[_0x584cbe(0x23f)+'ed']=_0x5ecc8b[_0x584cbe(0x2a8)](_0x581243,![]);continue;}break;}}catch(_0x3b29d6){if(_0x5ecc8b[_0x584cbe(0x1ce)]('piaGm',_0x5ecc8b[_0x584cbe(0x3a5)]))_0x18333b['set'](_0x2d3dbd,null);else return console[_0x584cbe(0x2c6)](_0x584cbe(0x5d1)+'ra-ko'+'ur]\x20h'+_0x584cbe(0x507)+_0x584cbe(0x2d0)+_0x584cbe(0x1ed),_0x46d8a7,_0x3b29d6&&_0x3b29d6['messa'+'ge']),null;}else _0x525162['safeM'+_0x584cbe(0x5ff)]=_0x295e0b,_0x5ecc8b['zEzMP'](_0x562f8c),_0x31e04e['reloa'+'d']();}var _0x3431e7=()=>![];try{if(window['Unity'+_0xcf4bf8(0x555)+'dkit']&&!_0x27b1c4['safeM'+_0xcf4bf8(0x5ff)]){_0x330071=window['Unity'+_0xcf4bf8(0x555)+'dkit']['Value'+_0xcf4bf8(0x643)+'er'],_0x1d7b02=window[_0xcf4bf8(0x412)+_0xcf4bf8(0x555)+_0xcf4bf8(0x292)][_0xcf4bf8(0x2de)+'me']['creat'+_0xcf4bf8(0x1a5)+'in']({'name':_0xcf4bf8(0x3bb)+_0xcf4bf8(0x387),'version':_0xcf4bf8(0x14f),'referencedAssemblies':[_0x5ecc8b[_0xcf4bf8(0x17b)]]});if(_0x27b1c4[_0xcf4bf8(0x3b7)+'od'])_0x2d2d71(_0x5ecc8b[_0xcf4bf8(0x4c2)],'OHeal'+'th','Initi'+_0xcf4bf8(0x1fd)+_0xcf4bf8(0x187)+'lth',['i32','i32'],undefined,_0x3431e7,!!_0x27b1c4[_0xcf4bf8(0x5d4)]);if(_0x27b1c4['hookG'+'odDie'])_0x5ecc8b['TutFi'](_0x2d2d71,_0x5ecc8b['ysrsa'],'OHeal'+'th',_0xcf4bf8(0x559)+'Die',['i32','i32',_0xcf4bf8(0x322),_0xcf4bf8(0x322),_0xcf4bf8(0x322)],undefined,_0x3431e7,!!_0x27b1c4['god']);if(_0x27b1c4[_0xcf4bf8(0x5c9)+'oReco'+'il'])_0x5ecc8b[_0xcf4bf8(0x655)](_0x2d2d71,_0xcf4bf8(0x471)+_0xcf4bf8(0x185),_0x5ecc8b['tgrxE'],_0x5ecc8b['JbPrq'],[_0x5ecc8b[_0xcf4bf8(0x596)]],undefined,_0x3431e7,!!_0x27b1c4['noRec'+_0xcf4bf8(0x185)]);if(_0x27b1c4['hookC'+_0xcf4bf8(0x467)+'e'])_0x5ecc8b[_0xcf4bf8(0x655)](_0x520d85,'capSh'+'ooter',_0x5ecc8b['Mnmdm'],_0x5ecc8b['UPXPO'],[_0x5ecc8b['aAAJN'],'i32'],undefined,(_0x16e431,_0x5c4f60)=>{var _0x373eb8=_0xcf4bf8;if(_0x373eb8(0x43c)!==_0x5ecc8b[_0x373eb8(0x176)])_0x5ecc8b['gAoGj'](_0x4ddf71,_0x14c0cd,_0x5c4f60,_0x33a6d4,_0x373eb8(0x3c8)+_0x373eb8(0x1a9));else{_0x3793f6['gameL'+_0x373eb8(0x687)]=!!_0x2d6526['unity'+_0x373eb8(0x382)+'nce'];try{var _0x33ba59=0x149*0x11+0x15b*0x1c+-0xbd*0x51;for(var _0x1ddd7f in _0x120ea7){if(_0x237a99[_0x1ddd7f]&&_0x2eacb1[_0x1ddd7f][_0x373eb8(0x58a)+'ed'])_0x33ba59++;}_0x4c5b27[_0x373eb8(0x1df)+'Ok']=_0x33ba59;}catch(_0x183f93){}}},!![]);if(_0x27b1c4[_0xcf4bf8(0x51b)+_0xcf4bf8(0x467)+'e'])_0x5ecc8b[_0xcf4bf8(0x326)](_0x520d85,_0xcf4bf8(0x560)+'ve','Legio'+_0xcf4bf8(0x5ed)+'forms'+_0xcf4bf8(0x466)+'tide.'+_0xcf4bf8(0x13f)+'ent',_0x5ecc8b['XzOtS'],['i32'],_0x5ecc8b[_0xcf4bf8(0x596)],(_0x452960,_0x458aa6)=>{_0x4ddf71(_0x1b95ea,_0x458aa6,_0x33a6d4,_0x5ecc8b['VxgjP']);},!![]);}}catch(_0x1b34da){if(_0x5ecc8b[_0xcf4bf8(0x586)](_0xcf4bf8(0x2e3),_0xcf4bf8(0x2e3))){var _0x2e1e39=_0x5ac8fe&&(_0x3d03e1[_0xcf4bf8(0x4c0)+'ge']||_0x41d0d1[_0xcf4bf8(0x3d5)]&&_0xdeb3f1[_0xcf4bf8(0x3d5)]['messa'+'ge'])||_0xcf4bf8(0xee)+'wn';if(_0x25cb48&&_0x3746fe[_0xcf4bf8(0x512)+'ame'])_0x2e1e39+=_0x5ecc8b[_0xcf4bf8(0x578)](_0x5ecc8b['uqCxj'],_0x27ca53(_0x43c039[_0xcf4bf8(0x512)+'ame'])[_0xcf4bf8(0x1fc)]('/')[_0xcf4bf8(0x525)]())+':'+(_0x5392a2[_0xcf4bf8(0x22f)+'o']||'?');_0x787245[_0xcf4bf8(0x247)+_0xcf4bf8(0x3af)]=_0x1aae9f(_0x2e1e39)[_0xcf4bf8(0x12e)](0x674+-0x1828+0x11b4,-0x950+0x1b3b+-0x114b);}else console['warn'](_0xcf4bf8(0x5d1)+'ra-ko'+'ur]\x20U'+_0xcf4bf8(0x41e)+_0xcf4bf8(0x23b)+'ailed'+':',_0x1b34da&&_0x1b34da[_0xcf4bf8(0x4c0)+'ge']);}function _0x3d813b(_0x22cc2c,_0x42b322){var _0x57ab5e=_0xcf4bf8,_0x3319fc=_0x5c8ed8[_0x22cc2c];if(_0x3319fc){if(_0x5ecc8b[_0x57ab5e(0x57e)](_0x5ecc8b[_0x57ab5e(0x24d)],'BwzXe')){var _0x2ba5bc=new _0x128c97(_0x1d2043)['readF'+'ield'](_0x327bda,_0x112d37);_0x1004a5[_0x57ab5e(0x1b8)](_0x587ddd,_0x2ba5bc!==_0x30fede?_0x2ba5bc[_0x57ab5e(0x1c0)]():null);}else try{_0x3319fc['enabl'+'ed']=!!_0x42b322;}catch(_0x45a749){}}}setInterval(()=>{var _0x2b3ede=_0xcf4bf8,_0x59f9bc={'spteY':_0x5ecc8b['CKavb']};if(!_0x330071||!window[_0x2b3ede(0x4a8)+'Insta'+_0x2b3ede(0x499)])return;var _0x1c04dd=_0x5ecc8b[_0x2b3ede(0x5e4)](Number(_0x27b1c4[_0x2b3ede(0x5ee)+_0x2b3ede(0x1e1)])||-0x7c2+0x238a+0x2*-0xdb2,0x1160+0x1de+-0x12da),_0x4c22ae=(_0x5ecc8b[_0x2b3ede(0x47e)](Number,_0x27b1c4[_0x2b3ede(0x386)+'ct'])||-0x28*-0xb0+0x29*0xe3+-0xd3*0x4d)/(0x12f7+0x21f1+-0x3484),_0x356cd5=_0x5ecc8b['EDTPT'](Number(_0x27b1c4[_0x2b3ede(0x374)+_0x2b3ede(0x498)])||-0x41*0x8b+-0xfb2+0x3361,0x16d*0x13+0x1*-0xfe5+-0x1*0xace),_0x5ba4ea=Math['max'](-0x71*0xb+0x2e7+0x1f5,_0x5ecc8b[_0x2b3ede(0x688)](Number,_0x27b1c4[_0x2b3ede(0x42a)+_0x2b3ede(0x2f9)+'e'])||-0x1*-0x21f4+-0xb3*-0x2f+-0x423b),_0x31c804=_0x1c04dd!==0x36d+-0x1*0xd5+-0x297||_0x5ecc8b[_0x2b3ede(0x50a)](_0x4c22ae,0xea6+-0x3*0x1e2+-0x8ff)||_0x356cd5!==0x22de+0x189c+-0x3b79||_0x27b1c4[_0x2b3ede(0x2a9)],_0x54fa06=_0x27b1c4[_0x2b3ede(0x3cf)+_0x2b3ede(0x56c)]||_0x27b1c4[_0x2b3ede(0x42a)+'eExp']||_0x27b1c4['infAm'+_0x2b3ede(0x40c)]||_0x27b1c4[_0x2b3ede(0x4d9)+'Exp'];if(_0x5ecc8b['wVJkD'](!_0x31c804,!_0x54fa06))return;try{for(var _0x46446d=-0x264b+-0x1e87+0x44d2;_0x5ecc8b[_0x2b3ede(0x520)](_0x46446d,_0x1b95ea[_0x2b3ede(0x51a)+'h']);_0x46446d++){if(_0x5ecc8b['vivMp']===_0x2b3ede(0x130)){var _0x211120=_0x1b95ea[_0x46446d];if(!_0x211120)continue;if(_0x1c04dd!==0x99*-0xe+-0x3d5+0xc34){if(_0x5ecc8b['MkKJh']('lGoua',_0x2b3ede(0x3ec))){if(_0xc27b65[_0x2b3ede(0x1b9)+_0x2b3ede(0x35a)])return;_0x1f2f69[_0x2b3ede(0x11e)](_0x5ecc8b[_0x2b3ede(0x401)]+_0x5ecc8b[_0x2b3ede(0x24c)](_0x1a6508['butto'+'n'],0xb94+-0x22a6+0x1713));var _0x343ac3=_0x314110[_0x3fd574['butto'+'n']+(0x20f0+0x19f9+0x14*-0x2f2)];if(_0x343ac3){_0x343ac3[_0x2b3ede(0x279)](_0xe887ec['now']());if(_0x343ac3['lengt'+'h']>-0x16e5*0x1+0xd*0xd3+0xc56)_0x343ac3[_0x2b3ede(0x281)]();}}else _0x5ecc8b[_0x2b3ede(0x547)](_0x372377,_0x211120,0xb48+-0x113c*-0x2+-0x2*0x16cc,'f32',_0x1c04dd),_0x5ecc8b[_0x2b3ede(0x2f5)](_0x372377,_0x211120,0x1b81+-0x1483*0x1+-0x6d2,_0x5ecc8b[_0x2b3ede(0x267)],_0x1c04dd),_0x5ecc8b[_0x2b3ede(0x1c5)](_0x372377,_0x211120,-0x1*-0x148d+-0x11*0x17+-0x12d6,'f32',_0x1c04dd),_0x5ecc8b['JYldN'](_0x372377,_0x211120,0x1cda+0x1d9*-0x11+-0x2c3*-0x1,_0x2b3ede(0x4f8),_0x1c04dd),_0x372377(_0x211120,0x327+0x4*0x764+0x209b*-0x1,_0x5ecc8b[_0x2b3ede(0x267)],_0x1c04dd),_0x372377(_0x211120,0x2*-0x1161+0x1*-0x20e5+-0x43c7*-0x1,_0x2b3ede(0x4f8),_0x1c04dd);}if(_0x5ecc8b[_0x2b3ede(0x2a8)](_0x4c22ae,0xa22+0x1*-0x1d3b+-0x146*-0xf))_0x372377(_0x211120,-0x313*-0x6+-0x9e8+-0x83a,_0x5ecc8b[_0x2b3ede(0x267)],_0x4c22ae);_0x5ecc8b[_0x2b3ede(0x662)](_0x356cd5,-0x1c*-0x12+0x6*0x16+-0x27b)&&(_0x372377(_0x211120,-0x1*0x1c0c+-0x2109+0x1*0x3d5d,_0x5ecc8b[_0x2b3ede(0x267)],_0x356cd5),_0x5ecc8b['PWJGt'](_0x372377,_0x211120,0xcd9+-0x66e*-0x1+-0x12fb,_0x5ecc8b[_0x2b3ede(0x267)],_0x356cd5));if(_0x27b1c4['bhop'])_0x5ecc8b['JYldN'](_0x233bc5,_0x211120,-0x1*-0x113b+0x9*0x16b+-0x1d62,_0x2b3ede(0x4f8),-(-0x58b+0x1*0x1451+0x1*-0xadf));}else _0x469a51[_0x2b3ede(0x57f)+'em'](_0x59f9bc['spteY'],_0x4ee045['strin'+'gify'](_0x908d7a));}}catch(_0x46e41d){}try{if(_0x5ecc8b['Ryywh']!=='eMUrZ')try{_0x2dba46[_0x2b3ede(0x57f)+'em'](_0x2b3ede(0x3ee)+_0x2b3ede(0xfe)+_0x2b3ede(0x291),_0x56ed0e['strin'+_0x2b3ede(0x273)](_0x3e51f6));}catch(_0xfbfefe){}else for(var _0x23898e=-0x2cd*0x1+-0x1*-0x34e+-0x81;_0x5ecc8b['ascUn'](_0x23898e,_0x14c0cd[_0x2b3ede(0x51a)+'h']);_0x23898e++){var _0x494f39=_0x60429d(_0x14c0cd[_0x23898e],-0x3c+-0x4e8+0x55c);if(!_0x494f39)continue;_0x27b1c4[_0x2b3ede(0x42a)+'eExp']&&(_0x233bc5(_0x494f39,-0x21d9+-0x1*0x6df+0x2904,'i32',_0x5ba4ea),_0x233bc5(_0x494f39,-0x1bd3+0x1be7+0x2*0x20,'i32',_0x5ba4ea));_0x27b1c4[_0x2b3ede(0x3cf)+_0x2b3ede(0x56c)]&&(_0x233bc5(_0x494f39,0x313*-0x6+0x1*0x1965+-0x66b*0x1,_0x2b3ede(0x4f8),-0x1514+0x1f1*0x13+0xd5*-0x13),_0x233bc5(_0x494f39,-0x1*0x230c+0x3e*-0x54+0x37cc,_0x5ecc8b[_0x2b3ede(0x267)],0x9e*0x17+0x12af*-0x1+0x47e));if(_0x27b1c4['infAm'+_0x2b3ede(0x40c)])_0x233bc5(_0x494f39,-0x2*0x57b+0x165+0x21*0x4d,'i32',-0x17*0x87+0xa*-0x2cb+0x22*0x14b);if(_0x27b1c4[_0x2b3ede(0x4d9)+_0x2b3ede(0x237)]){if('xOEMP'===_0x5ecc8b[_0x2b3ede(0x53e)])_0x372377(_0x494f39,-0xa89+0x1f91+-0x147c,_0x5ecc8b['BVxRV'],0xc50+0x1927+-0x2577+0.1),_0x233bc5(_0x494f39,0x2*0x1b+0x195b+-0x1931,_0x5ecc8b[_0x2b3ede(0x267)],-0x3+0x8*0x1d0+-0xe7d+0.1);else{var _0x45fade=_0x4bd501[_0x25aa01];if(_0x45fade)try{_0x45fade[_0x2b3ede(0x23f)+'ed']=!!_0x106f3d;}catch(_0x5508ef){}}}}}catch(_0x57965b){}},-0x72*0x26+-0x2b9+0x146d),_0x5ecc8b[_0xcf4bf8(0x20c)](setInterval,()=>{var _0xa15429=_0xcf4bf8;if(_0x5ecc8b[_0xa15429(0x556)](_0x5ecc8b[_0xa15429(0x651)],_0x5ecc8b[_0xa15429(0x5e3)])){_0x33a6d4['gameL'+'oaded']=!!window[_0xa15429(0x4a8)+_0xa15429(0x382)+_0xa15429(0x499)];try{var _0x2df1a5=-0x1*0x5fc+-0x1*0x2532+0x2b2e;for(var _0x4ff283 in _0x5c8ed8){if(_0x5c8ed8[_0x4ff283]&&_0x5c8ed8[_0x4ff283][_0xa15429(0x58a)+'ed'])_0x2df1a5++;}_0x33a6d4['hooks'+'Ok']=_0x2df1a5;}catch(_0x8fefa){}}else{if(!_0x4156dd||_0x4815c5['inclu'+_0xa15429(0x32a)](_0x19cd6d)||_0x1a1971[_0xa15429(0x51a)+'h']>0x5a6*-0x5+0x2*-0x5fb+-0x143a*-0x2)return;_0xe2670e[_0xa15429(0x279)](_0x546041);}},0x1*-0x23db+0x1*-0x785+0x2f48);var _0x13a75f=new Set(),_0x2afc78={0x1:[],0x3:[]},_0x52d1e2=![];function _0x476358(_0x549128){var _0x441e8e=_0xcf4bf8,_0x33e84b={'hTwxG':_0x5ecc8b['fdCwz']};if(_0x441e8e(0x455)===_0x441e8e(0x4e0))try{var _0x3d7cc5=new _0x35b680(_0x4ba264)[_0x441e8e(0x35d)+_0x441e8e(0x5b1)](_0x4fbd65,_0x33e84b['hTwxG']);return _0x3d7cc5?_0x3d7cc5[_0x441e8e(0x1c0)]():-0x17c9+-0xf44+0x270d;}catch(_0xbe1328){return-0x8e6+0x2*0x1244+-0x189*0x12;}else _0x13a75f[_0x441e8e(0x11e)](_0x549128[_0x441e8e(0x395)]);}function _0x335d73(_0x34fd6b){var _0x23d83a=_0xcf4bf8,_0x56a78e={'CfHLL':function(_0x349f3d,_0x5ecc10){return _0x349f3d===_0x5ecc10;},'XWEoO':_0x23d83a(0x124)+_0x23d83a(0x27b)+'e','gMHmG':function(_0x3e8e04,_0x179bc0){return _0x3e8e04===_0x179bc0;}};if(_0x23d83a(0x463)==='BmFVq'){if(_0x5ef2d7[_0x23d83a(0x391)]&&(_0x56a78e[_0x23d83a(0x4fe)](_0x5c5981['ready'+_0x23d83a(0x2ab)],_0x56a78e['XWEoO'])||_0x56a78e[_0x23d83a(0x3a6)](_0x96fa0d['ready'+_0x23d83a(0x2ab)],_0x23d83a(0x1c1)+'ete')))_0x43b407();else _0x36089d['addEv'+_0x23d83a(0x476)+'stene'+'r'](_0x23d83a(0x644)+_0x23d83a(0x3bf)+_0x23d83a(0x29b)+'d',_0x1b3582,{'once':!![]});}else _0x13a75f['delet'+'e'](_0x34fd6b[_0x23d83a(0x395)]);}function _0x2cd083(_0x40ed15){var _0x56e55e=_0xcf4bf8;if(_0x40ed15['__sak'+'ura'])return;_0x13a75f[_0x56e55e(0x11e)](_0x5ecc8b[_0x56e55e(0x3ae)](_0x5ecc8b['oJwzc'],_0x5ecc8b['qhBeL'](_0x40ed15[_0x56e55e(0x5d2)+'n'],0x37e+-0x11da*0x2+0x2037)));var _0x2ca4b8=_0x2afc78[_0x5ecc8b['mpNtq'](_0x40ed15[_0x56e55e(0x5d2)+'n'],0xfd7+0x260*0x2+0xa*-0x20f)];if(_0x2ca4b8){_0x2ca4b8['push'](performance[_0x56e55e(0x5a7)]());if(_0x2ca4b8[_0x56e55e(0x51a)+'h']>0x217*0x3+0x10b1*-0x2+0x1b45)_0x2ca4b8[_0x56e55e(0x281)]();}}function _0x26ed6(_0x1ebc3b){var _0x52cf70=_0xcf4bf8;if(!_0x1ebc3b[_0x52cf70(0x1b9)+'ura'])_0x13a75f[_0x52cf70(0x152)+'e'](_0x52cf70(0x34b)+(_0x1ebc3b['butto'+'n']+(-0x2b*0x80+-0x39*-0x79+-0x570)));}function _0x2828ee(){var _0x445969=_0xcf4bf8;_0x13a75f[_0x445969(0x504)]();}function _0x363723(){var _0x22253c=_0xcf4bf8;if('TNFrU'==='gLSsR'){var _0x9e9c97=_0x28cfd7[_0x22253c(0x522)+_0x22253c(0x562)]({'typeName':_0x2ceca4,'methodName':_0x545e46,'params':_0x2d5162,'returnType':_0x2defb0},_0x266ce5);return _0x9e9c97[_0x22253c(0x23f)+'ed']=_0x5ecc8b[_0x22253c(0x586)](_0x3c9d45,![]),_0x2a3f6a[_0x4aaa5a]=_0x9e9c97,_0x3b8dd7[_0x22253c(0x1df)+_0x22253c(0x43e)]++,_0x9e9c97;}else{if(_0x52d1e2)return;_0x52d1e2=!![],window['addEv'+_0x22253c(0x476)+_0x22253c(0x329)+'r'](_0x22253c(0xd7)+'wn',_0x476358,!![]),window['addEv'+_0x22253c(0x476)+'stene'+'r']('keyup',_0x335d73,!![]),window[_0x22253c(0x4df)+_0x22253c(0x476)+_0x22253c(0x329)+'r'](_0x5ecc8b['QDDfd'],_0x2cd083,!![]),window[_0x22253c(0x4df)+_0x22253c(0x476)+'stene'+'r'](_0x5ecc8b[_0x22253c(0x56f)],_0x26ed6,!![]),window['addEv'+_0x22253c(0x476)+_0x22253c(0x329)+'r'](_0x5ecc8b[_0x22253c(0x367)],_0x2828ee);}}function _0x34c510(_0x13fdb9){var _0x4e7873=_0xcf4bf8;if(_0x5ecc8b['CNylz']===_0x5ecc8b[_0x4e7873(0x24e)]){_0x4180f8(_0x3e699e),_0x20db6e++;var _0x3e6005=_0x4142a7[_0x4e7873(0x5a7)]();_0x3e6005-_0x100b5f>=0x1*-0xbb3+-0x713+-0x17b*-0xe&&(_0x4c71d2=_0x1d4795[_0x4e7873(0x5a3)](_0x206976*(0x3f1+0x217e*0x1+-0x2187)/_0x5ecc8b[_0x4e7873(0x5b2)](_0x3e6005,_0x36a03c)),_0x459f86=0x25*0x73+-0x1725*0x1+0xa*0xa7,_0x3fd634=_0x3e6005);_0x5ecc8b[_0x4e7873(0x1e8)](_0x410cd8),_0x489d10(),_0x2b7510[_0x4e7873(0x504)+_0x4e7873(0x157)](-0x1*-0x1b1c+-0x1cc6+0x3*0x8e,-0x2*-0xdd+0x1*-0x6b0+0x4f6,_0x565e43['w'],_0x2814d4['h']);var _0x432ce3={'left':0x0,'top':0x0,'right':_0x738bec['w'],'bottom':_0x1e57ae['h'],'width':_0x1b91e6['w'],'height':_0x2edb09['h']};if(_0x18c07f[_0x4e7873(0x23a)+'hair'])_0x5ecc8b[_0x4e7873(0x47e)](_0x3296c8,_0x432ce3);if(_0x15ad0e['keyst'+'rokes'])_0x5386bc(_0x432ce3);_0x276d12(_0x432ce3);}else{var _0x4a5381=_0x2afc78[_0x13fdb9]||[],_0x1ccc84=performance['now']();while(_0x4a5381[_0x4e7873(0x51a)+'h']&&_0x5ecc8b[_0x4e7873(0x1a6)](_0x1ccc84-_0x4a5381[0x248f*0x1+-0xc9*-0x4+0x1*-0x27b3],0xd42+-0x1f*0x5c+0x1ca))_0x4a5381['shift']();return _0x4a5381['lengt'+'h'];}}function _0xa9926e(_0x30d03f){var _0x3cfb57=_0xcf4bf8;if(document['body']&&(document['ready'+_0x3cfb57(0x2ab)]===_0x5ecc8b['EmFko']||document[_0x3cfb57(0x132)+_0x3cfb57(0x2ab)]===_0x5ecc8b[_0x3cfb57(0x202)]))_0x5ecc8b[_0x3cfb57(0x64e)](_0x30d03f);else document[_0x3cfb57(0x4df)+_0x3cfb57(0x476)+_0x3cfb57(0x329)+'r'](_0x5ecc8b['onukx'],_0x30d03f,{'once':!![]});}_0x5ecc8b[_0xcf4bf8(0x5dc)](_0xa9926e,()=>{var _0x4f9c1c=_0xcf4bf8,_0x30b80e={'EuiWV':'sakur'+_0x4f9c1c(0xfe)+'r.v1','KTwCX':_0x5ecc8b['YANYt'],'oLcQL':_0x4f9c1c(0x253),'QWABl':_0x4f9c1c(0x598)+'16|7|'+'3|13|'+'21|1|'+'4|18|'+_0x4f9c1c(0x1f7)+_0x4f9c1c(0x4aa)+'|20|1'+_0x4f9c1c(0x2ed)+_0x4f9c1c(0x297)+_0x4f9c1c(0x1bf)+_0x4f9c1c(0x3d4)+'4','DfFWv':function(_0x1800f2,_0x45b048){return _0x1800f2-_0x45b048;},'bDRJN':function(_0x38fc92,_0x5d4a84){return _0x38fc92/_0x5d4a84;},'GVJvI':function(_0x317211,_0x51b1cd){return _0x5ecc8b['NCrkK'](_0x317211,_0x51b1cd);},'IfwcP':function(_0x2a3782,_0x2b0006){return _0x2a3782+_0x2b0006;},'UslIc':function(_0x45ae2f,_0x216c3d){var _0x49027a=_0x4f9c1c;return _0x5ecc8b[_0x49027a(0x3e1)](_0x45ae2f,_0x216c3d);},'YZenM':_0x5ecc8b[_0x4f9c1c(0x549)],'VowQz':function(_0x2bfae9,_0x79f1e8){return _0x2bfae9-_0x79f1e8;},'YzRNa':function(_0xc1e9d6){var _0xa3222a=_0x4f9c1c;return _0x5ecc8b[_0xa3222a(0x216)](_0xc1e9d6);},'tYqKz':function(_0x407f70){return _0x407f70();},'cVwyr':function(_0x42bd9b,_0x59ec45){return _0x42bd9b(_0x59ec45);},'WszDd':function(_0xe043c2,_0x463c89){var _0x49a9f8=_0x4f9c1c;return _0x5ecc8b[_0x49a9f8(0x4ad)](_0xe043c2,_0x463c89);},'QiaHP':'TlbHa','zDTQx':_0x5ecc8b[_0x4f9c1c(0x558)],'fKmGI':'aria-'+'check'+'ed','LyZiy':_0x4f9c1c(0x3dd),'LZOJw':function(_0x6792fb,_0x1ad4b9){return _0x6792fb(_0x1ad4b9);},'vwjpO':_0x5ecc8b['PKNxa'],'ylpcY':_0x5ecc8b[_0x4f9c1c(0x1fe)],'BGdnr':_0x4f9c1c(0x4f6),'YdyZp':_0x5ecc8b[_0x4f9c1c(0x2b1)],'jmKMt':'butto'+'n','jXvzo':function(_0x51fbad,_0x1dc21a){var _0x4a3a03=_0x4f9c1c;return _0x5ecc8b[_0x4a3a03(0x183)](_0x51fbad,_0x1dc21a);},'eNAqE':_0x4f9c1c(0x3f1),'MxSWW':_0x5ecc8b[_0x4f9c1c(0xfc)],'Pqykc':_0x5ecc8b['eCcdC'],'HPyEF':_0x5ecc8b[_0x4f9c1c(0x577)],'OXdQi':_0x5ecc8b['HKqsm'],'xmhGy':function(_0x4ae041,_0x3e0c7d){return _0x4ae041+_0x3e0c7d;},'oViIB':function(_0x29b1d8,_0x45d45a){var _0x4bbcfe=_0x4f9c1c;return _0x5ecc8b[_0x4bbcfe(0x524)](_0x29b1d8,_0x45d45a);},'yUlkA':_0x4f9c1c(0x5cd),'rbOeq':'sk-ca'+'rd-he'+'ad','krgcG':_0x5ecc8b[_0x4f9c1c(0x5b5)],'tKmpw':_0x5ecc8b[_0x4f9c1c(0x528)],'naGKK':_0x5ecc8b[_0x4f9c1c(0x2db)],'QAxMc':function(_0x21cee6,_0x4fa7a3){return _0x21cee6+_0x4fa7a3;},'gohAu':function(_0x16ca51,_0x294fd9){var _0x105372=_0x4f9c1c;return _0x5ecc8b[_0x105372(0x683)](_0x16ca51,_0x294fd9);},'zWmCo':function(_0x296538,_0x22a677){return _0x296538+_0x22a677;},'gPNFx':function(_0x3a56b9,_0x1e096f){var _0x24197e=_0x4f9c1c;return _0x5ecc8b[_0x24197e(0x35c)](_0x3a56b9,_0x1e096f);},'xHAPv':function(_0x1af755,_0xb0475f){return _0x1af755+_0xb0475f;},'GOJDe':_0x4f9c1c(0x42f)+'s','blqJo':_0x5ecc8b[_0x4f9c1c(0x61f)],'pVLmf':_0x5ecc8b['jNgiD'],'DVgZk':_0x5ecc8b['jFWZz'],'mjNQf':'\x20|\x20sh'+_0x4f9c1c(0x33d)+'\x20','DMoKD':'held','FfstE':_0x5ecc8b['VYctN'],'jhsdM':_0x4f9c1c(0x180)+'MISSI'+_0x4f9c1c(0x1e0)+'overl'+_0x4f9c1c(0x442)+_0x4f9c1c(0x5bd)+'einst'+'all\x20t'+'he\x20us'+'erscr'+_0x4f9c1c(0x414),'ZRFxN':_0x5ecc8b[_0x4f9c1c(0x4a4)],'IfQTU':'240\x20F'+_0x4f9c1c(0x667)+'lock','CJthU':_0x4f9c1c(0x5d4),'WZUvQ':function(_0x2c4f4c,_0x125760,_0x3bf216){var _0x5e8ca8=_0x4f9c1c;return _0x5ecc8b[_0x5e8ca8(0x14e)](_0x2c4f4c,_0x125760,_0x3bf216);},'ZqmtU':function(_0x2695d0,_0xba1c1){return _0x5ecc8b['lPISH'](_0x2695d0,_0xba1c1);},'NFFjA':_0x4f9c1c(0xfd),'EYoLT':function(_0x441d06,_0x56e270){var _0x5682ab=_0x4f9c1c;return _0x5ecc8b[_0x5682ab(0x28a)](_0x441d06,_0x56e270);},'UJHIS':_0x5ecc8b[_0x4f9c1c(0x15c)],'PRRon':_0x4f9c1c(0x274),'JGUQv':_0x4f9c1c(0x5d6),'vxPtE':function(_0x1eff0f){return _0x1eff0f();},'VNGiE':_0x4f9c1c(0xd7)+'wn','weGaP':function(_0x292b0d,_0x561cf1){return _0x292b0d===_0x561cf1;},'wHJlQ':function(_0x41d345){return _0x41d345();},'Tzaci':'yAPyg','IcHRC':function(_0x1c3446){return _0x1c3446();},'OOXIq':function(_0x5dfd13,_0x1cc82b){return _0x5dfd13===_0x1cc82b;},'wAuLt':'comba'+'t','UvhFO':function(_0x5a1522,_0x3995f7){return _0x5a1522===_0x3995f7;},'Btrrk':_0x4f9c1c(0x127),'msadl':function(_0x581a85){return _0x581a85();},'eoCjJ':_0x5ecc8b[_0x4f9c1c(0x1d9)],'ASgpB':_0x4f9c1c(0x4fb)+_0x4f9c1c(0x2d7)+_0x4f9c1c(0x232)+'Initi'+_0x4f9c1c(0x1fd)+'keHea'+_0x4f9c1c(0x350)+_0x4f9c1c(0x48f)+_0x4f9c1c(0x430)+'.Loca'+'lDie,'+_0x4f9c1c(0x417)+'othin'+_0x4f9c1c(0x537)+'\x20hurt'+_0x4f9c1c(0x33c)+_0x4f9c1c(0x287)+'ou.','coVeK':'No\x20Re'+'coil','ELFQw':_0x5ecc8b['QMwvy'],'FZIgL':function(_0x58fdbd,_0x22493f,_0x14ed31,_0x3c6bf2,_0x92e811,_0x3e6241){return _0x58fdbd(_0x22493f,_0x14ed31,_0x3c6bf2,_0x92e811,_0x3e6241);},'OZcMy':'Scale'+_0x4f9c1c(0x4b2)+_0x4f9c1c(0x400)+_0x4f9c1c(0x5d7)+_0x4f9c1c(0x65d)+_0x4f9c1c(0x2f0)+'\x20to\x201'+_0x4f9c1c(0x56e)+_0x4f9c1c(0x5e9)+'\x20may\x20'+_0x4f9c1c(0x56a)+_0x4f9c1c(0x3ef)+_0x4f9c1c(0x447)+'s.','DjoGp':_0x4f9c1c(0x4ac)+_0x4f9c1c(0x5e7)+'\x20Over'+'tideW'+_0x4f9c1c(0x3e0)+'\x20dama'+_0x4f9c1c(0x551)+_0x4f9c1c(0x581)+_0x4f9c1c(0x66c)+'\x20the\x20'+'serve'+_0x4f9c1c(0x4eb)+_0x4f9c1c(0x239)+'s.','ujDKp':function(_0x3e32cf,_0xa87c51,_0x896b1,_0x72da05){return _0x3e32cf(_0xa87c51,_0x896b1,_0x72da05);},'eOqAl':function(_0x32d2ed,_0xf51070,_0x1e02dd,_0xb93bc6,_0x324b64,_0x5adf5a){return _0x32d2ed(_0xf51070,_0x1e02dd,_0xb93bc6,_0x324b64,_0x5adf5a);},'FMduh':'If\x20re'+_0x4f9c1c(0x670)+'\x20stil'+_0x4f9c1c(0x3db)+_0x4f9c1c(0x191)+'he\x20de'+'creme'+_0x4f9c1c(0x411)+_0x4f9c1c(0x545)+'\x20else'+_0x4f9c1c(0x146)+'.','hkEvS':function(_0x5176a8,_0x5b1dcc){var _0x29c5fc=_0x4f9c1c;return _0x5ecc8b[_0x29c5fc(0x2ee)](_0x5176a8,_0x5b1dcc);},'rsjjE':function(_0x54fbd9,_0x196cc1,_0x5aa700,_0xc9edea){return _0x54fbd9(_0x196cc1,_0x5aa700,_0xc9edea);},'QvDcS':'Speed'+'\x20%','TYNlt':_0x4f9c1c(0x3ca)+_0x4f9c1c(0x61a)+_0x4f9c1c(0x30f),'iVoWg':'Jump\x20'+_0x4f9c1c(0x339)+_0x4f9c1c(0x307),'rfkPS':_0x5ecc8b[_0x4f9c1c(0x5ca)],'UOzyr':function(_0x58dbf2,_0x4d3f9b,_0x53c09f,_0x4ba39a){return _0x58dbf2(_0x4d3f9b,_0x53c09f,_0x4ba39a);},'UAeAH':'lower'+_0x4f9c1c(0x31c)+_0x4f9c1c(0x17d),'zzsJq':'Bunny'+'-hop','CFNki':_0x4f9c1c(0x1d1)+_0x4f9c1c(0x261)+'/RMB\x20'+_0x4f9c1c(0x4cd)+_0x4f9c1c(0x1d6)+'erlay'+'.','qjzTy':_0x4f9c1c(0x44a)+'ion','ddlLn':'Botto'+'m\x20lef'+'t','nydDQ':_0x5ecc8b['JAMEN'],'LEyrx':_0x4f9c1c(0x554),'Gcvmq':_0x5ecc8b['JgSNS'],'OEECf':function(_0x5e0c4d,_0x2e2549,_0x26c3e0,_0xb90502,_0x5ef70e,_0x158090){return _0x5e0c4d(_0x2e2549,_0x26c3e0,_0xb90502,_0x5ef70e,_0x158090);},'YoufB':_0x5ecc8b[_0x4f9c1c(0x399)],'ebDrT':_0x4f9c1c(0x658),'axept':function(_0x52d7a7,_0x306bff,_0x1b25e7){return _0x52d7a7(_0x306bff,_0x1b25e7);},'IPLel':_0x4f9c1c(0x12c)+'ers','NmnZh':_0x4f9c1c(0x3e6)+_0x4f9c1c(0x4f1)+'y.','vHCQz':_0x4f9c1c(0x5ab)+'ounte'+'r','ctlEA':_0x5ecc8b[_0x4f9c1c(0x38a)],'vARvp':function(_0x46d27a,_0x4f8e10){return _0x46d27a===_0x4f8e10;},'KKnfZ':_0x4f9c1c(0x294)+'ck','naxaQ':_0x4f9c1c(0x1bb)+_0x4f9c1c(0x42c)+_0x4f9c1c(0x308)+'\x20bann'+_0x4f9c1c(0x3b2)+_0x4f9c1c(0x2d1),'GNztX':function(_0x2fab90,_0x7d6b63){return _0x5ecc8b['MJPSo'](_0x2fab90,_0x7d6b63);},'yRpyZ':function(_0x5932f2,_0x294343,_0x4533ae,_0x3c79be,_0x34ca2f,_0x14abf7){return _0x5932f2(_0x294343,_0x4533ae,_0x3c79be,_0x34ca2f,_0x14abf7);},'dFcso':'noRec'+_0x4f9c1c(0x4b0)+_0x4f9c1c(0x663)+'lMoti'+'on.Ti'+_0x4f9c1c(0x284),'ZWgtv':'captu'+_0x4f9c1c(0x531)+_0x4f9c1c(0x618)+'eRunn'+_0x4f9c1c(0x623)+_0x4f9c1c(0x580)+'ounde'+'d)','xhiDm':'no\x20ch'+_0x4f9c1c(0x67b)+_0x4f9c1c(0x607)+_0x4f9c1c(0x3a8)+_0x4f9c1c(0x3cc)+'is','vTAOy':_0x5ecc8b['lQUQH'],'KrirC':function(_0x9b492f,_0x3effae,_0x9970a5,_0x5e402e,_0x2d3bdd,_0x14a5e3){return _0x9b492f(_0x3effae,_0x9970a5,_0x5e402e,_0x2d3bdd,_0x14a5e3);},'Hwhhc':_0x5ecc8b[_0x4f9c1c(0x3e7)],'jncJh':_0x4f9c1c(0x375),'PxETm':_0x5ecc8b[_0x4f9c1c(0x18f)],'bdYha':function(_0x9b375c,_0x2319a9){return _0x9b375c+_0x2319a9;},'wxQxo':_0x5ecc8b['MICgW'],'MKpeW':'\x20|\x20ER'+'R:\x20','rYpVD':_0x4f9c1c(0x445)+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22\x20'+_0x4f9c1c(0x45f)+_0x4f9c1c(0xe1)+_0x4f9c1c(0x575)+_0x4f9c1c(0x1dc)+'<path'+'\x20d=\x22M'+_0x4f9c1c(0x21e)+'c-1.5'+'-2.5-'+_0x4f9c1c(0x396)+'-4-7.'+_0x4f9c1c(0x675)+_0x4f9c1c(0x205)+_0x4f9c1c(0x388)+_0x4f9c1c(0x461)+_0x4f9c1c(0x165)+_0x4f9c1c(0x486)+_0x4f9c1c(0x2fa)+_0x4f9c1c(0x4e7)+'5-4\x207'+'.5z\x22\x20'+_0x4f9c1c(0x418)+_0x4f9c1c(0x493)+_0x4f9c1c(0x42d)+_0x4f9c1c(0xfb)+'#ff6b'+_0x4f9c1c(0x419)+_0x4f9c1c(0x47b)+'-widt'+'h=\x222\x22'+_0x4f9c1c(0x538)+_0x4f9c1c(0x278)+_0x4f9c1c(0x41a)+_0x4f9c1c(0x489)+'nd\x22\x20s'+'troke'+'-line'+_0x4f9c1c(0x4b5)+'\x22roun'+_0x4f9c1c(0x332)+'circl'+_0x4f9c1c(0x4f2)+_0x4f9c1c(0x254)+'cy=\x221'+_0x4f9c1c(0x51c)+'\x221.5\x22'+'\x20fill'+_0x4f9c1c(0x46f)+_0x4f9c1c(0x31d)+_0x4f9c1c(0x67c)+'vg>','KGLaA':_0x4f9c1c(0x5f5)+'in','XrsKd':_0x4f9c1c(0x648)+'p','bWpQM':_0x4f9c1c(0x16b),'whAPV':_0x5ecc8b[_0x4f9c1c(0x666)],'wEOYl':_0x5ecc8b['WNKrZ'],'gKiNt':'mn-co'+'ls','AqRAS':'4|6|5'+_0x4f9c1c(0x405)+_0x4f9c1c(0x34e),'ddRiE':function(_0x24cff1,_0xaa7ea5){return _0x24cff1+_0xaa7ea5;},'OOAYd':_0x4f9c1c(0x38c)+'l>','blYAQ':_0x5ecc8b[_0x4f9c1c(0x220)],'WffhL':'1|7|0'+'|3|4|'+_0x4f9c1c(0x544),'BsGNa':_0x5ecc8b[_0x4f9c1c(0x5c2)],'GpWjb':_0x5ecc8b[_0x4f9c1c(0x2f2)]};if(_0x27b1c4[_0x4f9c1c(0x1a1)+'ck']){if(_0x5ecc8b['RkZbj'](_0x4f9c1c(0x1e3),_0x4f9c1c(0x1e3)))_0x5ecc8b[_0x4f9c1c(0x14e)](setInterval,()=>{var _0x183edc=_0x4f9c1c;if('bIgsr'===_0x30b80e[_0x183edc(0xff)])try{for(var _0x29f568 of['kour-'+_0x183edc(0x2bc)+_0x183edc(0x49c)+'-pare'+'nt',_0x183edc(0x546)+'io_72'+_0x183edc(0x3aa)+'paren'+'t','kour-'+_0x183edc(0x2bc)+'0x600'+'-pare'+'nt',_0x183edc(0x5ba)+_0x183edc(0x477)+'-banr'+'s']){var _0x204443=document[_0x183edc(0x20d)+_0x183edc(0x39e)+'ById'](_0x29f568);if(_0x204443&&_0x29f568===_0x183edc(0x5ba)+'creen'+_0x183edc(0x289)+'s'){var _0xa949ef=_0x204443['child'+'ren'];for(var _0x546dab=-0xdba+-0xc35+-0x8a5*-0x3;_0x546dab<_0xa949ef[_0x183edc(0x51a)+'h'];_0x546dab++){if('AALOM'!==_0x183edc(0x10f)){if(_0xa949ef[_0x546dab]['id']&&_0xa949ef[_0x546dab]['id'][_0x183edc(0x44f)+'Of'](_0x183edc(0x546)+_0x183edc(0x16d))===-0x931*0x1+0x372+-0x1*-0x5bf)_0xa949ef[_0x546dab][_0x183edc(0xfd)]['displ'+'ay']=_0x30b80e['oLcQL'];}else _0xf295b7=_0x35c2b6&&_0x5a2bb5['val']?_0xa16ef6['val']():-0x1*-0x267b+0xc51*0x2+-0x3f1d;}}else{if(_0x204443)_0x204443['style'][_0x183edc(0x3ad)+'ay']=_0x183edc(0x253);}}}catch(_0x43feaf){}else _0xb49512[_0x183edc(0x57f)+'em'](_0x30b80e['EuiWV'],_0x324c11[_0x183edc(0x363)+'gify'](_0x12ce9d));},-0x2*-0x87+0x1b0a+-0x1448);else{var _0x10e365=_0x4de605['creat'+_0x4f9c1c(0x1f3)+_0x4f9c1c(0x2bb)](_0x5ecc8b[_0x4f9c1c(0x686)]);_0x10e365[_0x4f9c1c(0x45f)+_0x4f9c1c(0x468)]=_0x5ecc8b[_0x4f9c1c(0x528)];var _0x63da35=_0x122dd7[_0x4f9c1c(0x3c0)+_0x4f9c1c(0x1f3)+'ent'](_0x5ecc8b[_0x4f9c1c(0x686)]);_0x63da35[_0x4f9c1c(0x45f)+_0x4f9c1c(0x468)]='sk-md'+_0x4f9c1c(0x602),_0x63da35['textC'+_0x4f9c1c(0x1be)+'t']=_0x3e41e6,_0x10e365[_0x4f9c1c(0x454)+_0x4f9c1c(0x169)+'d'](_0x63da35);for(var _0x4a9ec9 of _0x157823)_0x10e365[_0x4f9c1c(0x454)+_0x4f9c1c(0x169)+'d'](_0x4a9ec9);_0x2a11ae[_0x4f9c1c(0x454)+_0x4f9c1c(0x169)+'d'](_0x10e365);}}var _0x52ac09=document[_0x4f9c1c(0x3c0)+_0x4f9c1c(0x1f3)+'ent'](_0x5ecc8b[_0x4f9c1c(0x227)]);_0x52ac09['style']['cssTe'+'xt']='posit'+_0x4f9c1c(0x64d)+_0x4f9c1c(0x5b9)+_0x4f9c1c(0x590)+':0;wi'+_0x4f9c1c(0x51f)+_0x4f9c1c(0x337)+'heigh'+'t:100'+_0x4f9c1c(0x42e)+'index'+_0x4f9c1c(0x43d)+'48364'+'6;poi'+'nter-'+_0x4f9c1c(0x4be)+_0x4f9c1c(0x52c)+'e';var _0x12a862=_0x52ac09['getCo'+_0x4f9c1c(0x312)]('2d');function _0x3dc4c7(){var _0x56dd48=_0x4f9c1c;try{if(_0x5ecc8b[_0x56dd48(0x586)](_0x5ecc8b['uDAed'],_0x56dd48(0x197))){var _0x164184=document['fulls'+'creen'+_0x56dd48(0x356)+'nt'],_0x435062=_0x164184&&_0x5ecc8b['yrhzF'](_0x164184['tagNa'+'me'],_0x5ecc8b['jaole'])?_0x164184:document['body']||document['docum'+_0x56dd48(0x17e)+_0x56dd48(0x39e)];if(_0x52ac09[_0x56dd48(0x37f)+'tNode']!==_0x435062)_0x435062[_0x56dd48(0x454)+_0x56dd48(0x169)+'d'](_0x52ac09);}else{var _0x3dfeea=_0x168ac4[_0x56dd48(0x560)+'ve'];if(_0x3dfeea)try{_0x3dfeea['enabl'+'ed']=![];}catch(_0x4f4570){}}}catch(_0x145f08){try{if(_0x5ecc8b[_0x56dd48(0x28b)](_0x5ecc8b['mcKeS'],'AXMyQ')){var _0x3be546=_0x3b32b6[_0x56dd48(0x3c0)+'eElem'+_0x56dd48(0x2bb)](_0x56dd48(0x5af)+'n');_0x3be546[_0x56dd48(0x352)]=_0x975bdd,_0x3be546[_0x56dd48(0x14a)+'onten'+'t']=_0x450ca9,_0x166e1f['appen'+_0x56dd48(0x169)+'d'](_0x3be546);}else document[_0x56dd48(0x391)]['appen'+_0x56dd48(0x169)+'d'](_0x52ac09);}catch(_0xb99e21){}}}var _0x1c58af={'w':0x0,'h':0x0,'dpr':0x0};function _0x284555(){var _0x4634ad=_0x4f9c1c,_0x1d8604=('2|4|5'+_0x4634ad(0x320)+'1|6|3'+'|7')['split']('|'),_0x224e8f=-0x5*-0x295+0xa88+0x1771*-0x1;while(!![]){switch(_0x1d8604[_0x224e8f++]){case'0':_0x1c58af['h']=_0x2093ae;continue;case'1':_0x1c58af['dpr']=_0x284da2;continue;case'2':var _0x284da2=window[_0x4634ad(0x4a5)+_0x4634ad(0x472)+_0x4634ad(0x4cc)+'o']||0xbf1+-0x1ad6+-0x773*-0x2;continue;case'3':_0x52ac09['heigh'+'t']=Math['round'](_0x2093ae*_0x284da2);continue;case'4':var _0x3f1d13=window['inner'+'Width'],_0x2093ae=window['inner'+_0x4634ad(0x676)+'t'];continue;case'5':if(_0x3f1d13===_0x1c58af['w']&&_0x2093ae===_0x1c58af['h']&&_0x284da2===_0x1c58af['dpr'])return;continue;case'6':_0x52ac09[_0x4634ad(0x4ba)]=Math['round'](_0x3f1d13*_0x284da2);continue;case'7':_0x12a862['setTr'+_0x4634ad(0x16e)+'rm'](_0x284da2,-0xe65+-0xa10+0x1875,-0x7e6+-0x205e*0x1+0x35b*0xc,_0x284da2,0x6c2*-0x4+-0x97*0x2b+0x107*0x33,0xcf0+0x65e+-0x2c2*0x7);continue;case'8':_0x1c58af['w']=_0x3f1d13;continue;}break;}}var _0x49d09c=0x1ae5+-0x66e*-0x1+-0x2153,_0x17e1a7=performance[_0x4f9c1c(0x5a7)](),_0x2966a7=0x4*-0x74c+-0x9ff+0x272f;function _0x12ecd1(_0x5beeca){var _0x332cd6=_0x4f9c1c,_0x10cc8f={'nahBR':'input','bUAxK':_0x332cd6(0xf6)+'nge','RUzhV':_0x5ecc8b[_0x332cd6(0x4ce)],'WclZu':_0x5ecc8b[_0x332cd6(0x5b7)],'yKjrA':function(_0x1afdaa,_0x257229){var _0xa3f211=_0x332cd6;return _0x5ecc8b[_0xa3f211(0x33a)](_0x1afdaa,_0x257229);},'qceqY':function(_0x56ac6d,_0x43f6e7){return _0x56ac6d-_0x43f6e7;},'GGCWP':function(_0x3049b5,_0x2a0229){return _0x5ecc8b['MkKJh'](_0x3049b5,_0x2a0229);},'SahDU':_0x332cd6(0x521)+_0x332cd6(0x333)+_0x332cd6(0x38e)+'7,0.8'+'5)','OdZZx':_0x5ecc8b[_0x332cd6(0x5a8)],'FtIsS':'#fff','mcHRa':_0x332cd6(0x39d)+'e','fPzAb':_0x5ecc8b['BiEXo'],'UzHuH':function(_0x29bcfe,_0x54911f){return _0x5ecc8b['SoUKF'](_0x29bcfe,_0x54911f);},'FHCju':function(_0x32db79,_0x2aa932){return _0x32db79+_0x2aa932;},'NNvwe':function(_0x9d0237,_0x59568a){return _0x5ecc8b['xEQqh'](_0x9d0237,_0x59568a);},'TzYEH':function(_0x196e35,_0x9f9860){return _0x196e35+_0x9f9860;},'HpWtu':function(_0x40f737,_0x1f353f){var _0x5cfa7b=_0x332cd6;return _0x5ecc8b[_0x5cfa7b(0x33a)](_0x40f737,_0x1f353f);}},_0x8871f8=Number(_0x27b1c4[_0x332cd6(0x60c)+'le'])||0x1183+-0x23f8+0x1276,_0x1764dc=(-0x13f9+-0x1ac1*-0x1+-0x6a6)*_0x8871f8,_0x57697f=(-0x8b5*0x3+-0x1*-0x1dfc+-0xc5*0x5)*_0x8871f8,_0x4c32e1=_0x1764dc*(-0x867+0x1f*-0x5e+0x4*0x4f3)+_0x57697f*(-0x1bc+-0x1a59+0x1a7*0x11),_0x56bc1f=_0x5ecc8b['GcuGD'](_0x5ecc8b[_0x332cd6(0x67a)](_0x1764dc,0x7e2+-0x102*-0xb+-0x12f5),_0x57697f*(-0xf87+-0x11f6+0x217f)),_0x1f3dca=_0x27b1c4[_0x332cd6(0x340)],_0x3ae922=_0x5ecc8b['lGNZc'](_0x1f3dca,'br')?_0x5beeca[_0x332cd6(0x314)]-(-0x192*-0xe+-0x57a+-0x1072)-_0x4c32e1:_0x5ecc8b[_0x332cd6(0x4e5)](_0x5beeca['left'],0xe1f+-0x1b44+0xd35),_0x19ca56=_0x1f3dca==='ml'?_0x5beeca[_0x332cd6(0x462)]+_0x5ecc8b[_0x332cd6(0x5e4)](_0x5beeca['heigh'+'t'],0x46*0x3a+0xfdc+-0x1fb6)-_0x5ecc8b[_0x332cd6(0x612)](_0x56bc1f,-0x4f*-0x1d+0xeb9*0x1+-0xbd5*0x2):_0x5beeca[_0x332cd6(0x210)+'m']-_0x56bc1f-(_0x1f3dca==='bl'?-0x11b*-0xf+-0x19ed+0x26e*0x4:-0xb3*-0x4+0x2692*-0x1+0x245c),_0x350c36=(_0x1c5397,_0x253c2f,_0x21a44f,_0x3339dc,_0x55299b,_0x214386,_0x426d83)=>{var _0x410467=_0x332cd6,_0x5795c1={'mMrIE':_0x10cc8f[_0x410467(0x201)],'nrHpx':_0x10cc8f[_0x410467(0x5f1)],'XrqpL':_0x10cc8f[_0x410467(0x61b)],'qBhfk':function(_0x3100d1){return _0x3100d1();},'lylsK':function(_0x392abc,_0x5d94ed){return _0x392abc(_0x5d94ed);},'YMQiA':_0x10cc8f['WclZu'],'IkurO':function(_0x425dec,_0x3a95a0){var _0x39fd9d=_0x410467;return _0x10cc8f[_0x39fd9d(0x495)](_0x425dec,_0x3a95a0);},'vmTvV':function(_0x1ea7c4,_0x341dba){var _0x54bef7=_0x410467;return _0x10cc8f[_0x54bef7(0x110)](_0x1ea7c4,_0x341dba);}};if(_0x10cc8f['GGCWP']('vBoSv',_0x410467(0x5f7))){var _0x94b616=(_0x410467(0x635)+'|6|1|'+_0x410467(0x2e4)+_0x410467(0x348)+_0x410467(0x129)+_0x410467(0x49d)+'3|15|'+'7|10|'+_0x410467(0x104))[_0x410467(0x1fc)]('|'),_0x3bd221=0x2531+-0x3f5*-0x4+-0x7*0x793;while(!![]){switch(_0x94b616[_0x3bd221++]){case'0':_0xcccaa6[_0x410467(0x45f)+_0x410467(0x468)]='sk-va'+'l';continue;case'1':var _0x292e9e=_0x390e85['creat'+'eElem'+_0x410467(0x2bb)](_0x5795c1['mMrIE']);continue;case'2':_0x292e9e['class'+_0x410467(0x468)]=_0x410467(0x2c5)+'ider';continue;case'3':return _0x4b8ebb;case'4':var _0xcccaa6=_0x3b7394[_0x410467(0x3c0)+'eElem'+_0x410467(0x2bb)](_0x410467(0x3d6));continue;case'5':_0x292e9e[_0x410467(0x369)]=_0x110d7a;continue;case'6':_0x4b8ebb[_0x410467(0x45f)+_0x410467(0x468)]=_0x5795c1['nrHpx'];continue;case'7':_0x292e9e[_0x410467(0x657)+'ut']=()=>{var _0x4b4ec4=_0x410467;_0xa729ae(),_0x12c79e(_0x41a636(_0x292e9e[_0x4b4ec4(0x352)]));};continue;case'8':_0x292e9e[_0x410467(0x3fc)]=_0x5795c1['XrqpL'];continue;case'9':_0x4b8ebb[_0x410467(0x454)+'d'](_0x292e9e,_0xcccaa6);continue;case'10':_0x5795c1['qBhfk'](_0xa729ae);continue;case'11':_0x292e9e[_0x410467(0x352)]=_0x8fcd46;continue;case'12':var _0x4b8ebb=_0xe83d3c[_0x410467(0x3c0)+_0x410467(0x1f3)+_0x410467(0x2bb)]('div');continue;case'13':_0xcccaa6[_0x410467(0x14a)+_0x410467(0x1be)+'t']=_0x21df7e(_0x21532c);continue;case'14':_0x292e9e['step']=_0x4625f1;continue;case'15':var _0xa729ae=()=>{var _0x4aa701=_0x410467;_0xcccaa6[_0x4aa701(0x14a)+_0x4aa701(0x1be)+'t']=_0x57f15c['bWpQV'](_0x190b56,_0x292e9e[_0x4aa701(0x352)]),_0x4b8ebb[_0x4aa701(0xfd)][_0x4aa701(0x4a9)+'opert'+'y'](_0x57f15c['vjitm'],_0x57f15c[_0x4aa701(0x182)](_0x57f15c[_0x4aa701(0x4e1)](_0x292e9e[_0x4aa701(0x352)]-_0x2c0788,_0x57f15c[_0x4aa701(0x3a2)](_0x3c6edb,_0x58c867)),0xc*0x6f+-0x1016+0xde*0xd)+'%');};continue;case'16':var _0x57f15c={'bWpQV':function(_0x598718,_0x2414d7){var _0x526523=_0x410467;return _0x5795c1[_0x526523(0x5cb)](_0x598718,_0x2414d7);},'vjitm':_0x5795c1[_0x410467(0x162)],'shHnI':function(_0x45756a,_0x452f9f){return _0x5795c1['IkurO'](_0x45756a,_0x452f9f);},'zRETP':function(_0x2a7e41,_0x395d91){return _0x2a7e41/_0x395d91;},'hmCqf':function(_0xb43420,_0x1806b0){return _0x5795c1['vmTvV'](_0xb43420,_0x1806b0);}};continue;case'17':_0x292e9e[_0x410467(0x1b3)]=_0x1ae38e;continue;}break;}}else{var _0x2bbfb3=_0x13a75f[_0x410467(0x626)](_0x253c2f);_0x12a862[_0x410467(0x46d)](),_0x12a862[_0x410467(0x677)+_0x410467(0x642)]();if(_0x12a862[_0x410467(0x5a3)+_0x410467(0x157)])_0x12a862[_0x410467(0x5a3)+_0x410467(0x157)](_0x21a44f,_0x3339dc,_0x55299b,_0x214386,(-0x115*0x1+0x2*0xf59+-0x1*0x1d96)*_0x8871f8);else _0x12a862[_0x410467(0x603)](_0x21a44f,_0x3339dc,_0x55299b,_0x214386);_0x12a862[_0x410467(0x2fd)+'tyle']=_0x2bbfb3?_0x10cc8f[_0x410467(0x5c3)]:_0x10cc8f['OdZZx'],_0x12a862[_0x410467(0x63a)](),_0x12a862['lineW'+_0x410467(0x62c)]=-0x91f+0x81*0x34+-0x1114,_0x12a862[_0x410467(0x55f)+_0x410467(0x30a)+'e']=_0x2bbfb3?_0x46b7cd:'rgba('+'255,1'+'07,15'+'7,0.3'+'5)',_0x12a862[_0x410467(0x55f)+'e'](),_0x2bbfb3&&(_0x12a862['shado'+'wColo'+'r']=_0x1ce1d8,_0x12a862[_0x410467(0x2e1)+_0x410467(0x1d7)]=0x2175+-0x1904*-0x1+0x3*-0x1379,_0x12a862['fill'](),_0x12a862[_0x410467(0x2e1)+_0x410467(0x1d7)]=-0x70c+-0x16b4+0x1dc0),_0x12a862['fillS'+_0x410467(0x3f8)]=_0x2bbfb3?_0x10cc8f['FtIsS']:'rgba('+'255,2'+'35,24'+'0,0.8'+')',_0x12a862[_0x410467(0x2f8)+_0x410467(0x49e)]='cente'+'r',_0x12a862['textB'+'aseli'+'ne']=_0x10cc8f[_0x410467(0x17a)],_0x12a862[_0x410467(0x346)]=_0x10cc8f[_0x410467(0x39f)]+Math['round']((0x599*-0x5+0x577+0x1692)*_0x8871f8)+('px\x20ui'+_0x410467(0x120)+'-seri'+'f,sys'+'tem-u'+'i,san'+'s-ser'+'if'),_0x12a862[_0x410467(0x107)+'ext'](_0x1c5397,_0x21a44f+_0x10cc8f['UzHuH'](_0x55299b,-0x67f+-0x83*0x49+0x2bdc),_0x10cc8f['FHCju'](_0x3339dc,_0x214386/(-0x1*0x22dc+-0x1d4b+0x4029))-(_0x426d83?_0x10cc8f[_0x410467(0x5b8)](0x2353*-0x1+-0x1201+0x3559,_0x8871f8):-0x72e*-0x2+-0x12f4+0x3*0x188)),_0x426d83&&(_0x12a862[_0x410467(0x346)]=_0x10cc8f['TzYEH'](_0x410467(0x3b3)+Math[_0x410467(0x5a3)](_0x10cc8f[_0x410467(0x495)](0xd5e+-0x21*-0x1+-0x2*0x6bb,_0x8871f8)),_0x410467(0x59b)+_0x410467(0x120)+_0x410467(0x674)+'f,sys'+_0x410467(0x406)+_0x410467(0x428)+_0x410467(0x628)+'if'),_0x12a862['fillS'+_0x410467(0x3f8)]=_0x2bbfb3?_0x10cc8f[_0x410467(0x61e)]:'rgba('+_0x410467(0x625)+'35,24'+_0x410467(0x305)+'5)',_0x12a862['fillT'+'ext'](_0x426d83,_0x21a44f+_0x55299b/(-0xbe9+0x260*-0x3+0xf*0x145),_0x10cc8f[_0x410467(0x3c6)](_0x3339dc,_0x214386/(0x7*0xa3+-0x1ad+-0x2c6))+_0x10cc8f['HpWtu'](0x1*-0x3c4+-0x2*-0xb3+-0x2*-0x133,_0x8871f8))),_0x12a862['resto'+'re']();}};_0x350c36('W','KeyW',_0x5ecc8b['GWwht'](_0x3ae922,_0x1764dc)+_0x57697f,_0x19ca56,_0x1764dc,_0x1764dc),_0x350c36('A',_0x5ecc8b['JhVNV'],_0x3ae922,_0x5ecc8b['PIPFi'](_0x19ca56+_0x1764dc,_0x57697f),_0x1764dc,_0x1764dc),_0x350c36('S','KeyS',_0x5ecc8b[_0x332cd6(0x1c7)](_0x3ae922+_0x1764dc,_0x57697f),_0x5ecc8b[_0x332cd6(0x35c)](_0x19ca56+_0x1764dc,_0x57697f),_0x1764dc,_0x1764dc),_0x5ecc8b[_0x332cd6(0x266)](_0x350c36,'D',_0x5ecc8b[_0x332cd6(0x57d)],_0x3ae922+_0x5ecc8b['wsdXA'](_0x1764dc+_0x57697f,-0x1107+0xb*-0x315+0x32f0),_0x19ca56+_0x1764dc+_0x57697f,_0x1764dc,_0x1764dc);var _0x2e84ba=_0x5ecc8b[_0x332cd6(0x19b)](_0x4c32e1,_0x57697f)/(-0x17cd+-0x2b*0x56+-0x7*-0x577),_0xc67625=_0x5ecc8b[_0x332cd6(0x4e5)](_0x19ca56,(_0x1764dc+_0x57697f)*(-0x100b+-0x27d+0x128a));_0x350c36('LMB',_0x332cd6(0x34b)+'1',_0x3ae922,_0xc67625,_0x2e84ba,_0x1764dc,_0x27b1c4[_0x332cd6(0x2af)]?_0x34c510(0x913*-0x3+-0x1844+0x337e)+'\x20CPS':''),_0x5ecc8b[_0x332cd6(0x655)](_0x350c36,_0x332cd6(0x5f9),_0x5ecc8b['tpyFm'],_0x5ecc8b[_0x332cd6(0x470)](_0x3ae922,_0x2e84ba)+_0x57697f,_0xc67625,_0x2e84ba,_0x1764dc,_0x27b1c4[_0x332cd6(0x2af)]?_0x34c510(0xd87*0x2+0x1420+-0x20d*0x17)+_0x332cd6(0x2f7):''),_0x350c36('',_0x5ecc8b['bTkgw'],_0x3ae922,_0xc67625+_0x1764dc+_0x57697f,_0x4c32e1,_0x1764dc*(0x1b01+0x128*-0x14+-0x3e1+0.45));}function _0x5e4ca6(_0x2b7e3a){var _0xb9860c=_0x4f9c1c,_0x5ac667=_0x30b80e[_0xb9860c(0x336)][_0xb9860c(0x1fc)]('|'),_0x3f97ea=-0x1*0x1b9+0xe1b*-0x2+-0x4f*-0x61;while(!![]){switch(_0x5ac667[_0x3f97ea++]){case'0':_0x12a862['lineT'+'o'](_0x56dfdf+_0x4a98f0+_0x14443e,_0x390d11);continue;case'1':_0x12a862['shado'+_0xb9860c(0x51e)+'r']=_0x5e2a85;continue;case'2':_0x12a862[_0xb9860c(0x1b2)+'o'](_0x56dfdf+_0x4a98f0,_0x390d11);continue;case'3':_0x12a862[_0xb9860c(0x55f)+_0xb9860c(0x30a)+'e']=_0x5e2a85;continue;case'4':_0x12a862[_0xb9860c(0x2e1)+_0xb9860c(0x1d7)]=-0x1*0x1fb5+-0xf6a+-0x95*-0x51;continue;case'5':_0x12a862['strok'+'e']();continue;case'6':_0x12a862[_0xb9860c(0x677)+_0xb9860c(0x642)]();continue;case'7':_0x12a862['save']();continue;case'8':_0x12a862['lineT'+'o'](_0x30b80e[_0xb9860c(0x5a5)](_0x56dfdf,_0x4a98f0),_0x390d11);continue;case'9':var _0x56dfdf=_0x30b80e[_0xb9860c(0x2dc)](_0x2b7e3a[_0xb9860c(0x4ba)],0x481*0x8+0x22d4+-0x46da),_0x390d11=_0x2b7e3a[_0xb9860c(0x448)+'t']/(-0x549+-0x1db1*0x1+0x8bf*0x4);continue;case'10':_0x12a862['moveT'+'o'](_0x30b80e['GVJvI'](_0x56dfdf,_0x4a98f0)-_0x14443e,_0x390d11);continue;case'11':_0x12a862[_0xb9860c(0x677)+_0xb9860c(0x642)]();continue;case'12':_0x12a862['lineT'+'o'](_0x56dfdf,_0x30b80e['IfwcP'](_0x390d11+_0x4a98f0,_0x14443e));continue;case'13':_0x12a862['fillS'+_0xb9860c(0x3f8)]=_0x5e2a85;continue;case'14':_0x12a862['resto'+'re']();continue;case'15':_0x12a862['fill']();continue;case'16':var _0x5e2a85=/^#[0-9a-f]{6}$/i['test'](_0x27b1c4['chCol'+'or'])?_0x27b1c4[_0xb9860c(0x669)+'or']:_0xb9860c(0x13e)+'9d';continue;case'17':_0x12a862[_0xb9860c(0x403)+'o'](_0x56dfdf,_0x390d11-_0x4a98f0);continue;case'18':var _0x4a98f0=(-0x23*-0x76+-0x1de3+-0x1*-0xdc7)*_0x5cf0b5,_0x14443e=_0x30b80e['UslIc'](0x7*0x3d1+-0x1a8d+0x22*-0x1,_0x5cf0b5);continue;case'19':var _0x5cf0b5=Number(_0x27b1c4[_0xb9860c(0x689)+'e'])||0x200c+-0x115e+-0xead;continue;case'20':_0x12a862['moveT'+'o'](_0x56dfdf,_0x30b80e['DfFWv'](_0x390d11,_0x4a98f0)-_0x14443e);continue;case'21':_0x12a862[_0xb9860c(0x2c0)+'idth']=Math['max'](-0x1d21*-0x1+0x2*0x5e1+-0x28e2+0.5,_0x30b80e['UslIc'](0x2*-0x7f1+-0x1*-0x18c4+-0x20*0x47,_0x5cf0b5));continue;case'22':_0x12a862[_0xb9860c(0x1b2)+'o'](_0x56dfdf,_0x390d11+_0x4a98f0);continue;case'23':_0x12a862[_0xb9860c(0x3c7)](_0x56dfdf,_0x390d11,(-0x110d*-0x1+-0x25cd+0x14c1+0.6000000000000001)*_0x5cf0b5,0x1*-0xa6a+0x1c76+-0x120c,Math['PI']*(0x912+0x1dc8+-0x26d8));continue;}break;}}function _0x189939(_0x5c2cd5){var _0x2728bc=_0x4f9c1c;_0x12a862[_0x2728bc(0x46d)](),_0x12a862[_0x2728bc(0x346)]='600\x201'+_0x2728bc(0x409)+'i-mon'+_0x2728bc(0x252)+'e,mon'+_0x2728bc(0x252)+'e',_0x12a862[_0x2728bc(0x2f8)+_0x2728bc(0x49e)]=_0x2728bc(0x5da),_0x12a862[_0x2728bc(0x317)+'aseli'+'ne']=_0x5ecc8b['JcOnF'];var _0x3a6ded=0x1688+0x43d+-0x1a99,_0x251536=0x1267*0x1+-0x718*-0x1+0x5*-0x517,_0x2c3bfd=(_0x2c9b76,_0x2c40cf)=>{var _0x21d89e=_0x2728bc;_0x12a862['fillS'+_0x21d89e(0x3f8)]=_0x2c40cf||_0x30b80e['YZenM'],_0x12a862[_0x21d89e(0x107)+'ext'](_0x2c9b76,_0x251536,_0x3a6ded),_0x3a6ded+=-0x26c1+0x11*-0x81+-0x2*-0x17b1;};_0x5ecc8b[_0x2728bc(0x14e)](_0x2c3bfd,'SAKUR'+_0x2728bc(0x55d)+_0x2728bc(0x659)+'1',_0x2728bc(0x13e)+'9d');if(_0x27b1c4[_0x2728bc(0x541)])_0x2c3bfd(_0x5ecc8b['TYwEn'](_0x2966a7,'\x20FPS'));if(!_0x33a6d4[_0x2728bc(0x122)+'oaded'])_0x2c3bfd(_0x2728bc(0x349)+_0x2728bc(0x3f3)+_0x2728bc(0x3a1)+'e…',_0x5ecc8b[_0x2728bc(0x460)]);_0x12a862[_0x2728bc(0x5ea)+'re']();}function _0x717f3d(){var _0x463899=_0x4f9c1c;requestAnimationFrame(_0x717f3d),_0x49d09c++;var _0x52a261=performance['now']();_0x52a261-_0x17e1a7>=0x1c5b*0x1+0x736+-0x6b9*0x5&&(_0x2966a7=Math[_0x463899(0x5a3)](_0x49d09c*(0xd3*0x2d+-0x161*-0x2+-0x23f1)/_0x30b80e[_0x463899(0x34c)](_0x52a261,_0x17e1a7)),_0x49d09c=-0x23f2+-0x1bd7+0x3fc9,_0x17e1a7=_0x52a261);_0x30b80e[_0x463899(0x189)](_0x284555),_0x30b80e['tYqKz'](_0x3dc4c7),_0x12a862[_0x463899(0x504)+'Rect'](0x1253*0x1+0x876*0x3+0x43*-0xa7,0x12be+-0xac7+-0x7f7,_0x1c58af['w'],_0x1c58af['h']);var _0x4faded={'left':0x0,'top':0x0,'right':_0x1c58af['w'],'bottom':_0x1c58af['h'],'width':_0x1c58af['w'],'height':_0x1c58af['h']};if(_0x27b1c4[_0x463899(0x23a)+_0x463899(0x4f7)])_0x5e4ca6(_0x4faded);if(_0x27b1c4['keyst'+'rokes'])_0x30b80e[_0x463899(0x459)](_0x12ecd1,_0x4faded);_0x189939(_0x4faded);}var _0x1f561d=document[_0x4f9c1c(0x3c0)+'eElem'+'ent'](_0x4f9c1c(0x5cd));_0x1f561d['id']=_0x5ecc8b[_0x4f9c1c(0x37a)],_0x1f561d[_0x4f9c1c(0xfd)]['cssTe'+'xt']=_0x4f9c1c(0x2d2)+'ion:f'+'ixed;'+'inset'+':0;z-'+'index'+_0x4f9c1c(0x43d)+'48364'+'7;poi'+_0x4f9c1c(0x645)+'event'+'s:non'+'e;';var _0x51e692=_0x1f561d['attac'+_0x4f9c1c(0x5f3)+'ow']({'mode':_0x5ecc8b[_0x4f9c1c(0x4b4)]});(document['body']||document[_0x4f9c1c(0x32c)+_0x4f9c1c(0x17e)+_0x4f9c1c(0x39e)])[_0x4f9c1c(0x454)+_0x4f9c1c(0x169)+'d'](_0x1f561d);var _0x128729=![],_0x312db9={};try{_0x312db9=JSON[_0x4f9c1c(0xf9)](localStorage[_0x4f9c1c(0x159)+'em'](_0x4f9c1c(0x3ee)+_0x4f9c1c(0xfe)+'r.ui.'+'v1')||'{}');}catch(_0x170f06){}function _0x3f5e4c(){var _0x356a2e=_0x4f9c1c;try{_0x30b80e[_0x356a2e(0x303)](_0x356a2e(0xe4),_0x30b80e['QiaHP'])?localStorage[_0x356a2e(0x57f)+'em'](_0x30b80e[_0x356a2e(0x5c7)],JSON[_0x356a2e(0x363)+_0x356a2e(0x273)](_0x312db9)):(_0x31643b['noSpr'+_0x356a2e(0x56c)]=_0xa41e62,_0x30b80e['YzRNa'](_0xf1a80));}catch(_0xadef53){}}function _0x497e82(_0x43654e,_0x43a426){var _0x593ecc=_0x4f9c1c,_0xd6be6b=_0x30b80e[_0x593ecc(0x55c)]['split']('|'),_0x24d957=0x185*-0x3+0xb2a*-0x1+0xfb9;while(!![]){switch(_0xd6be6b[_0x24d957++]){case'0':_0xee4b6f[_0x593ecc(0x67f)+'ck']=_0x3c60c7=>{var _0x1d3d4d=_0x593ecc;_0x3c60c7[_0x1d3d4d(0x5a4)+_0x1d3d4d(0x3f4)+'ation']();var _0x2bdfba=_0xee4b6f[_0x1d3d4d(0x1a8)+'tribu'+'te'](_0x30b80e[_0x1d3d4d(0x36f)])!==_0x30b80e[_0x1d3d4d(0x364)];_0xee4b6f[_0x1d3d4d(0x665)+_0x1d3d4d(0x482)+'te'](_0x30b80e[_0x1d3d4d(0x36f)],_0x30b80e['LZOJw'](String,_0x2bdfba)),_0x43a426(_0x2bdfba);};continue;case'1':_0xee4b6f['class'+'Name']=_0x30b80e['ylpcY'];continue;case'2':_0xee4b6f[_0x593ecc(0x665)+'tribu'+'te'](_0x30b80e['fKmGI'],_0x30b80e['LZOJw'](String,!!_0x43654e));continue;case'3':_0xee4b6f['setAt'+_0x593ecc(0x482)+'te'](_0x30b80e[_0x593ecc(0x1ba)],_0x30b80e[_0x593ecc(0x1bd)]);continue;case'4':var _0xee4b6f=document[_0x593ecc(0x3c0)+_0x593ecc(0x1f3)+_0x593ecc(0x2bb)]('butto'+'n');continue;case'5':_0xee4b6f['type']=_0x30b80e['jmKMt'];continue;case'6':return _0xee4b6f;}break;}}function _0x500fb9(_0x387c40,_0x26b532,_0x4f9e4e,_0x291d63,_0x491add){var _0x1d3a3f=_0x4f9c1c;if('zzemI'===_0x5ecc8b[_0x1d3a3f(0x353)])_0x127afd[_0x1d3a3f(0x391)]['appen'+_0x1d3a3f(0x169)+'d'](_0x32db80);else{var _0x2f9e76=document[_0x1d3a3f(0x3c0)+'eElem'+_0x1d3a3f(0x2bb)](_0x1d3a3f(0x5cd));_0x2f9e76[_0x1d3a3f(0x45f)+'Name']=_0x5ecc8b['NOhcd'];var _0x2e45b9=document[_0x1d3a3f(0x3c0)+_0x1d3a3f(0x1f3)+'ent'](_0x5ecc8b[_0x1d3a3f(0x64b)]);_0x2e45b9[_0x1d3a3f(0x3fc)]=_0x5ecc8b[_0x1d3a3f(0x4ce)],_0x2e45b9['class'+'Name']=_0x5ecc8b[_0x1d3a3f(0x383)],_0x2e45b9['min']=_0x26b532,_0x2e45b9[_0x1d3a3f(0x369)]=_0x4f9e4e,_0x2e45b9[_0x1d3a3f(0x527)]=_0x291d63,_0x2e45b9[_0x1d3a3f(0x352)]=_0x387c40;var _0x3fc0bd=document[_0x1d3a3f(0x3c0)+_0x1d3a3f(0x1f3)+'ent'](_0x5ecc8b['pXiAP']);_0x3fc0bd[_0x1d3a3f(0x45f)+'Name']='sk-va'+'l',_0x3fc0bd[_0x1d3a3f(0x14a)+_0x1d3a3f(0x1be)+'t']=_0x5ecc8b[_0x1d3a3f(0x47e)](String,_0x387c40);var _0x7677e4=()=>{var _0x170807=_0x1d3a3f;_0x3fc0bd['textC'+'onten'+'t']=_0x30b80e['LZOJw'](String,_0x2e45b9['value']),_0x2f9e76[_0x170807(0xfd)]['setPr'+_0x170807(0x4c8)+'y']('--p',_0x30b80e['UslIc']((_0x2e45b9[_0x170807(0x352)]-_0x26b532)/(_0x4f9e4e-_0x26b532),0xb*0x31c+-0x19c3+0x1*-0x80d)+'%');};return _0x2e45b9[_0x1d3a3f(0x657)+'ut']=()=>{var _0x50048e=_0x1d3a3f;_0x7677e4(),_0x30b80e['cVwyr'](_0x491add,_0x30b80e[_0x50048e(0x174)](Number,_0x2e45b9[_0x50048e(0x352)]));},_0x5ecc8b[_0x1d3a3f(0x64e)](_0x7677e4),_0x2f9e76[_0x1d3a3f(0x454)+'d'](_0x2e45b9,_0x3fc0bd),_0x2f9e76;}}function _0x41f38e(_0x478363,_0x34f44b){var _0x1aa13f=_0x4f9c1c,_0x10afdc=document[_0x1aa13f(0x3c0)+'eElem'+_0x1aa13f(0x2bb)]('input');return _0x10afdc['type']=_0x30b80e[_0x1aa13f(0x260)],_0x10afdc['class'+_0x1aa13f(0x468)]=_0x30b80e[_0x1aa13f(0x3ba)],_0x10afdc['value']=/^#[0-9a-f]{6}$/i[_0x1aa13f(0x526)](_0x478363)?_0x478363:_0x30b80e[_0x1aa13f(0x582)],_0x10afdc['oninp'+'ut']=()=>_0x34f44b(_0x10afdc[_0x1aa13f(0x352)]),_0x10afdc;}function _0xa1c152(_0xd62878,_0xa0bd04,_0xf52a9b){var _0x5c16ad=_0x4f9c1c;if(_0x5ecc8b[_0x5c16ad(0x50a)]('Dbdcx',_0x5c16ad(0x234)))_0x1c2378[_0x5c16ad(0x45a)+_0x5c16ad(0xe2)+_0x5c16ad(0x22c)](),_0x2ad0cc();else{var _0x4589f2=_0x5ecc8b['XAjbM']['split']('|'),_0x9ee84f=0x6*-0x273+0x6f*0x4a+0x15*-0xd4;while(!![]){switch(_0x4589f2[_0x9ee84f++]){case'0':var _0x717abd=document[_0x5c16ad(0x3c0)+'eElem'+'ent']('selec'+'t');continue;case'1':for(var [_0x4446a0,_0xfa1de7]of _0xa0bd04){var _0x10c751=document[_0x5c16ad(0x3c0)+_0x5c16ad(0x1f3)+_0x5c16ad(0x2bb)](_0x5c16ad(0x5af)+'n');_0x10c751['value']=_0x4446a0,_0x10c751[_0x5c16ad(0x14a)+_0x5c16ad(0x1be)+'t']=_0xfa1de7,_0x717abd['appen'+'dChil'+'d'](_0x10c751);}continue;case'2':return _0x717abd;case'3':_0x717abd[_0x5c16ad(0x45f)+_0x5c16ad(0x468)]='sk-fi'+_0x5c16ad(0x324);continue;case'4':_0x717abd['oncha'+'nge']=()=>_0xf52a9b(_0x717abd['value']);continue;case'5':_0x717abd['value']=_0xd62878;continue;}break;}}}function _0x16fe42(_0x42c720,_0x46f6c6){var _0x592587=_0x4f9c1c,_0x2cc41a=document['creat'+'eElem'+'ent'](_0x30b80e[_0x592587(0x151)]);return _0x2cc41a['type']=_0x592587(0x5d2)+'n',_0x2cc41a[_0x592587(0x45f)+_0x592587(0x468)]=_0x30b80e[_0x592587(0x500)],_0x2cc41a['textC'+'onten'+'t']=_0x42c720,_0x2cc41a['oncli'+'ck']=_0x248644=>{var _0xd5a688=_0x592587;_0x248644['stopP'+_0xd5a688(0x3f4)+_0xd5a688(0x215)](),_0x30b80e['YzRNa'](_0x46f6c6);},_0x2cc41a;}function _0x2bb748(_0x44d3f0,_0x2018a2,_0xae6ffa){var _0x54372c=_0x4f9c1c,_0x1a8798={'AYUft':function(_0x55ebba,_0x10c1ab){return _0x55ebba===_0x10c1ab;}},_0x2f9d78=document[_0x54372c(0x3c0)+_0x54372c(0x1f3)+'ent'](_0x54372c(0x5cd));_0x2f9d78[_0x54372c(0x45f)+_0x54372c(0x468)]=_0x54372c(0x1b6)+'l';var _0x21f98d=document['creat'+'eElem'+_0x54372c(0x2bb)](_0x54372c(0x3d6));_0x21f98d['class'+'Name']=_0x5ecc8b['cnyvW'],_0x21f98d[_0x54372c(0x14a)+_0x54372c(0x1be)+'t']=_0x44d3f0;if(_0x2018a2){if('TVpVQ'===_0x5ecc8b['PBbCH'])_0x1a8798[_0x54372c(0x212)](_0x8bbdb5[_0x54372c(0x395)],'Inser'+'t')&&(_0x58d722[_0x54372c(0x45a)+_0x54372c(0xe2)+'ault'](),_0x559f17());else{var _0x28e528=document[_0x54372c(0x3c0)+_0x54372c(0x1f3)+'ent'](_0x5ecc8b['cxWOD']);_0x28e528['class'+_0x54372c(0x468)]=_0x54372c(0x5d0)+'nt',_0x28e528[_0x54372c(0x14a)+'onten'+'t']=_0x2018a2,_0x21f98d[_0x54372c(0x454)+'dChil'+'d'](_0x28e528);}}return _0x2f9d78[_0x54372c(0x454)+'d'](_0x21f98d,_0xae6ffa),_0x2f9d78;}function _0x19bdb6(_0x1be604,_0x1883b4){var _0xf5de74=_0x4f9c1c,_0x1d1745=document['creat'+'eElem'+'ent'](_0x5ecc8b[_0xf5de74(0x686)]);return _0x1d1745[_0xf5de74(0x45f)+_0xf5de74(0x468)]=_0x5ecc8b[_0xf5de74(0x111)]('sk-no'+'te',_0x1883b4?'\x20err':''),_0x1d1745[_0xf5de74(0x14a)+_0xf5de74(0x1be)+'t']=_0x1be604,_0x1d1745;}function _0x4bfdba(_0x3a4d90,_0x4e1370,_0x289a3c,_0x5258dd,_0xa346bb){var _0x3105b6=_0x4f9c1c,_0x477e81=document['creat'+_0x3105b6(0x1f3)+'ent']('div');_0x477e81['class'+_0x3105b6(0x468)]=_0x30b80e['oViIB'](_0x3105b6(0x4ab)+'rd',_0x289a3c?_0x3105b6(0x137):'');var _0x4f5953=document['creat'+_0x3105b6(0x1f3)+'ent'](_0x30b80e['yUlkA']);_0x4f5953[_0x3105b6(0x45f)+_0x3105b6(0x468)]=_0x30b80e['rbOeq'];var _0x59f11c=document[_0x3105b6(0x3c0)+'eElem'+_0x3105b6(0x2bb)](_0x30b80e['yUlkA']);_0x59f11c[_0x3105b6(0x45f)+'Name']=_0x3105b6(0x4ab)+_0x3105b6(0x357)+_0x3105b6(0x36e);var _0x131fe1=document['creat'+'eElem'+_0x3105b6(0x2bb)](_0x3105b6(0x22d)+'g');_0x131fe1['textC'+_0x3105b6(0x1be)+'t']=_0x3a4d90,_0x59f11c[_0x3105b6(0x454)+_0x3105b6(0x169)+'d'](_0x131fe1);if(_0x5258dd){if(_0x30b80e[_0x3105b6(0x5ef)]!=='TxXMs')_0x46fdb7[_0x3105b6(0x346)]=_0x3105b6(0x3b3)+_0xa8c482['round'](_0x30b80e[_0x3105b6(0x2a3)](0x135f+0x4c2+-0x8*0x303,_0xa5bc2d))+_0x30b80e[_0x3105b6(0x229)],_0x16d353[_0x3105b6(0x2fd)+_0x3105b6(0x3f8)]=_0x15248b?_0x3105b6(0x25c):_0x3105b6(0x521)+_0x3105b6(0x625)+'35,24'+_0x3105b6(0x305)+'5)',_0x4aa062[_0x3105b6(0x107)+'ext'](_0x5ce4b6,_0x30b80e[_0x3105b6(0x231)](_0x11e715,_0x2e95f1/(0x1*0x593+0x108f+0x8*-0x2c4)),_0x2860be+_0x30b80e[_0x3105b6(0x2dc)](_0x271b37,-0x11bb+-0x1eb*-0x5+0x826)+(0x123f+0xfa3*-0x1+-0xb*0x3c)*_0xfabc71);else{var _0xc94a06=_0x497e82(_0x289a3c,_0x557116=>{var _0x63cd73=_0x3105b6;_0x477e81[_0x63cd73(0x45f)+'List'][_0x63cd73(0x2ec)+'e']('on',_0x557116),_0x5258dd(_0x557116);});_0x4f5953['appen'+'d'](_0x59f11c,_0xc94a06);}}else _0x4f5953[_0x3105b6(0x454)+_0x3105b6(0x169)+'d'](_0x59f11c);_0x477e81[_0x3105b6(0x454)+_0x3105b6(0x169)+'d'](_0x4f5953);if(_0xa346bb&&_0xa346bb['lengt'+'h']){var _0x255c71=document[_0x3105b6(0x3c0)+'eElem'+'ent'](_0x3105b6(0x5cd));_0x255c71[_0x3105b6(0x45f)+_0x3105b6(0x468)]=_0x30b80e[_0x3105b6(0x673)];var _0xa7741e=document[_0x3105b6(0x3c0)+_0x3105b6(0x1f3)+_0x3105b6(0x2bb)]('div');_0xa7741e['class'+_0x3105b6(0x468)]=_0x3105b6(0xeb)+'esc',_0xa7741e['textC'+'onten'+'t']=_0x4e1370,_0x255c71['appen'+_0x3105b6(0x169)+'d'](_0xa7741e);for(var _0x3fa3e7 of _0xa346bb)_0x255c71['appen'+_0x3105b6(0x169)+'d'](_0x3fa3e7);_0x477e81[_0x3105b6(0x454)+_0x3105b6(0x169)+'d'](_0x255c71);}return _0x477e81;}var _0x1c6714=[{'id':_0x5ecc8b['LKnqS'],'label':_0x4f9c1c(0x3e3)+'t'},{'id':_0x4f9c1c(0x195),'label':_0x5ecc8b[_0x4f9c1c(0x2e8)]},{'id':_0x5ecc8b['OaJsT'],'label':_0x4f9c1c(0x50f)+'l'},{'id':_0x4f9c1c(0x641),'label':_0x4f9c1c(0x565)},{'id':_0x4f9c1c(0x3fe),'label':_0x5ecc8b[_0x4f9c1c(0x402)]}];function _0x159de8(){var _0x703df9=_0x4f9c1c,_0x3a2ae2=_0x33a6d4['safeM'+'ode']?_0x30b80e['naGKK']:_0x33a6d4['uwmk']?_0x30b80e[_0x703df9(0x451)](_0x30b80e[_0x703df9(0x393)](_0x30b80e['zWmCo'](_0x30b80e['gPNFx']('UWMK\x20'+_0x703df9(0x2d6)+'\x20',_0x33a6d4[_0x703df9(0x1df)+_0x703df9(0x43e)]?_0x30b80e[_0x703df9(0x2b8)](_0x33a6d4[_0x703df9(0x1df)+'Ok']+'/',_0x33a6d4['hooks'+_0x703df9(0x43e)])+_0x30b80e['GOJDe']:_0x30b80e[_0x703df9(0x3bd)]),_0x703df9(0x3d7)+_0x703df9(0x2e6))+(_0x33a6d4['gameL'+_0x703df9(0x687)]?_0x30b80e['pVLmf']:_0x30b80e[_0x703df9(0x121)])+_0x30b80e[_0x703df9(0x3e9)],_0x33a6d4['shoot'+_0x703df9(0x1a9)]?_0x30b80e[_0x703df9(0x609)]:_0x30b80e['oLcQL'])+_0x30b80e['FfstE'],_0x33a6d4[_0x703df9(0x148)+_0x703df9(0x4c1)]?'held':_0x703df9(0x253)):_0x30b80e['jhsdM'];if(_0x33a6d4['lastE'+'rror'])_0x3a2ae2+='\x20|\x20ER'+'R:\x20'+_0x33a6d4[_0x703df9(0x247)+_0x703df9(0x3af)];return _0x4bfdba(_0x30b80e[_0x703df9(0x569)],_0x3a2ae2,_0x33a6d4[_0x703df9(0x1a7)],null,[_0x2bb748(_0x30b80e[_0x703df9(0x335)],_0x703df9(0x542)+'\x20Unit'+'yEngi'+_0x703df9(0x425)+'plica'+_0x703df9(0x338)+_0x703df9(0x29f)+'arget'+'Frame'+_0x703df9(0x19f),_0x16fe42('Apply',()=>{var _0x4bb670=_0x703df9;try{if(_0x1d7b02)_0x1d7b02['call']('Unity'+'Engin'+_0x4bb670(0x53f)+'licat'+_0x4bb670(0x4f0),'set_t'+_0x4bb670(0x5c6)+_0x4bb670(0x41f)+_0x4bb670(0x19f),[0x31*0xc7+0x1*-0x651+0x1ed6*-0x1]);}catch(_0x387ba7){}}))]);}function _0x1301b6(_0x1bd5d6){var _0x4c8e20=_0x4f9c1c,_0x226f4d={'WSvsO':'fulls'+'creen'+_0x4c8e20(0x289)+'s','YQiPR':_0x4c8e20(0x546)+_0x4c8e20(0x16d),'HmgIV':'none','zBhKB':function(_0x2ebaa3,_0x184f0c){return _0x30b80e['ZqmtU'](_0x2ebaa3,_0x184f0c);},'QlCdW':function(_0x572117){return _0x572117();},'vOfQH':function(_0x3e3b80){return _0x3e3b80();},'BrOrE':function(_0x22f0ce,_0x1cb32a){return _0x22f0ce===_0x1cb32a;},'FtTLK':'MjFlH','WFOOY':'[saku'+'ra-ko'+'ur]\x20h'+_0x4c8e20(0x507)+_0x4c8e20(0x2d0)+'iled:','COvTB':'BcWal','YmPxa':_0x4c8e20(0x2bf),'OaDLG':function(_0x25265b){var _0x27440d=_0x4c8e20;return _0x30b80e[_0x27440d(0x64a)](_0x25265b);}};if(_0x30b80e['OOXIq'](_0x1bd5d6,_0x30b80e['wAuLt'])){if(_0x30b80e[_0x4c8e20(0x304)](_0x30b80e[_0x4c8e20(0x58e)],_0x4c8e20(0x127)))return[_0x30b80e[_0x4c8e20(0x319)](_0x159de8),_0x4bfdba(_0x30b80e[_0x4c8e20(0xed)],_0x30b80e['ASgpB'],_0x27b1c4[_0x4c8e20(0x5d4)],_0x58bb8e=>{var _0x4faffc=_0x4c8e20;_0x27b1c4['god']=_0x58bb8e,_0x30b80e[_0x4faffc(0x189)](_0x141cd6),_0x3d813b(_0x30b80e['CJthU'],_0x58bb8e),_0x30b80e['WZUvQ'](_0x3d813b,'godDi'+'e',_0x58bb8e);},[]),_0x4bfdba(_0x30b80e[_0x4c8e20(0x19a)],_0x4c8e20(0x245)+_0x4c8e20(0x22e)+'ilMot'+'ion.T'+'ick\x20s'+_0x4c8e20(0xf3)+'\x20reco'+_0x4c8e20(0x21a)+'rings'+_0x4c8e20(0x153)+'r\x20adv'+'ance.',_0x27b1c4['noRec'+'oil'],_0x375112=>{var _0x3f8138=_0x4c8e20;_0x27b1c4[_0x3f8138(0x471)+'oil']=_0x375112,_0x141cd6(),_0x3d813b(_0x3f8138(0x471)+'oil',_0x375112);},[]),_0x4bfdba('No\x20Sp'+'read',_0x30b80e['ELFQw'],_0x27b1c4[_0x4c8e20(0x3cf)+'ead'],_0x1135dd=>{var _0x1637e0=_0x4c8e20;_0x27b1c4[_0x1637e0(0x3cf)+_0x1637e0(0x56c)]=_0x1135dd,_0x141cd6();},[]),_0x30b80e['FZIgL'](_0x4bfdba,_0x4c8e20(0x5e2)+_0x4c8e20(0x37c)+_0x4c8e20(0x492)+']',_0x30b80e['OZcMy'],_0x27b1c4['rapid'+_0x4c8e20(0x237)],_0xc3185a=>{var _0x190ade=_0x4c8e20;if(_0x226f4d[_0x190ade(0x487)](_0x190ade(0xf8),'jsHNP')){var _0x5bf2ee=_0x315e6f['getEl'+_0x190ade(0x39e)+_0x190ade(0x5b3)](_0x580eb3);if(_0x5bf2ee&&_0x33bf1b===_0x226f4d['WSvsO']){var _0x3490da=_0x5bf2ee['child'+'ren'];for(var _0x6538b7=-0x1c6b+-0x1a9b*0x1+-0x1b83*-0x2;_0x6538b7<_0x3490da['lengt'+'h'];_0x6538b7++){if(_0x3490da[_0x6538b7]['id']&&_0x3490da[_0x6538b7]['id']['index'+'Of'](_0x226f4d[_0x190ade(0xdb)])===0x19c6+-0x5b+-0x196b)_0x3490da[_0x6538b7][_0x190ade(0xfd)][_0x190ade(0x3ad)+'ay']=_0x226f4d[_0x190ade(0x3e5)];}}else{if(_0x5bf2ee)_0x5bf2ee[_0x190ade(0xfd)]['displ'+'ay']='none';}}else _0x27b1c4['rapid'+'Exp']=_0xc3185a,_0x226f4d[_0x190ade(0x27e)](_0x141cd6);},[]),_0x4bfdba('Damag'+'e\x20[EX'+'P]',_0x30b80e['DjoGp'],_0x27b1c4[_0x4c8e20(0x42a)+'eExp'],_0x2085e9=>{var _0x1d1e57=_0x4c8e20;_0x27b1c4[_0x1d1e57(0x42a)+'eExp']=_0x2085e9,_0x141cd6();},[_0x30b80e['ujDKp'](_0x2bb748,'Damag'+'e\x20val'+'ue',null,_0x500fb9(_0x27b1c4['damag'+'eValu'+'e'],0x1c*0x11a+-0x26f1+0x823,0xb3f+0x8e5+-0x1230,-0x3*-0x5d9+-0x1d06*0x1+-0x170*-0x8,_0x458baa=>{var _0x4fcbdf=_0x4c8e20;_0x27b1c4[_0x4fcbdf(0x42a)+_0x4fcbdf(0x2f9)+'e']=_0x458baa,_0x141cd6();}))]),_0x30b80e[_0x4c8e20(0x2bd)](_0x4bfdba,_0x4c8e20(0x26c)+'ite\x20A'+'mmo\x20['+_0x4c8e20(0x1f0),'Refil'+'ls\x20th'+_0x4c8e20(0x4ff)+'pon\x27s'+'\x20cach'+_0x4c8e20(0x62f)+_0x4c8e20(0x103)+_0x4c8e20(0x15b)+_0x4c8e20(0x321)+'\x20200m'+'s.',_0x27b1c4['infAm'+_0x4c8e20(0x40c)],_0x38a063=>{var _0x3d008a=_0x4c8e20;_0x30b80e[_0x3d008a(0x186)](_0x3d008a(0x271),_0x3d008a(0x3dc))?(_0x27b1c4['infAm'+'moExp']=_0x38a063,_0x30b80e[_0x3d008a(0x189)](_0x141cd6)):(_0x253a05['rapid'+_0x3d008a(0x237)]=_0x54681f,_0x3f05ab());},[_0x19bdb6(_0x30b80e['FMduh'])])];else _0x7c1353[_0x4c8e20(0x1a1)+'ck']=_0x10d2c0,_0x30b80e['tYqKz'](_0x5ab2e4);}if(_0x1bd5d6===_0x4c8e20(0x195))return[_0x4bfdba(_0x4c8e20(0x54c),'Scale'+'s\x20all'+_0x4c8e20(0x59f)+_0x4c8e20(0x415)+_0x4c8e20(0x241)+'speed'+_0x4c8e20(0x4bc)+'ts\x20pl'+_0x4c8e20(0x66d)+_0x4c8e20(0x629)+'ation'+'.',_0x30b80e['hkEvS'](_0x27b1c4['speed'+_0x4c8e20(0x1e1)],-0x8*-0x2a9+0x1549+-0x2a2d),null,[_0x30b80e[_0x4c8e20(0x4a6)](_0x2bb748,_0x30b80e[_0x4c8e20(0x125)],_0x30b80e['TYNlt'],_0x500fb9(_0x27b1c4[_0x4c8e20(0x5ee)+_0x4c8e20(0x1e1)],-0x1173+-0x175*0x9+-0x7f*-0x3e,0x1bdb+-0x157f*-0x1+0xe*-0x371,0x1b3f+0x367*0x7+0x49*-0xb3,_0x1bcfee=>{var _0x3d447d=_0x4c8e20;_0x27b1c4['speed'+_0x3d447d(0x1e1)]=_0x1bcfee,_0x141cd6();}))]),_0x30b80e[_0x4c8e20(0x2bd)](_0x4bfdba,_0x30b80e[_0x4c8e20(0x26b)],'Scale'+_0x4c8e20(0x277)+'ement'+'.jump'+_0x4c8e20(0x3e4)+'\x20and\x20'+_0x4c8e20(0x4e6)+_0x4c8e20(0x374)+_0x4c8e20(0x108)+_0x4c8e20(0x457),_0x27b1c4['jumpP'+'ct']!==-0x586+-0x12dd+0x18c7||_0x27b1c4[_0x4c8e20(0x374)+_0x4c8e20(0x498)]!==0x1*0x6a1+0x1ffa+0xcbd*-0x3,null,[_0x2bb748(_0x30b80e['rfkPS'],null,_0x30b80e['eOqAl'](_0x500fb9,_0x27b1c4[_0x4c8e20(0x386)+'ct'],0x146*-0x8+-0x8*0x337+0x241a,0x1187*0x1+0x205f+0x9a*-0x51,-0x2*0x2bd+-0x9dc*0x1+0xf5b,_0x58015c=>{var _0x1c7e3d=_0x4c8e20;_0x27b1c4[_0x1c7e3d(0x386)+'ct']=_0x58015c,_0x141cd6();})),_0x30b80e['UOzyr'](_0x2bb748,_0x4c8e20(0x589)+'ty\x20%',_0x30b80e['UAeAH'],_0x500fb9(_0x27b1c4['gravi'+'tyPct'],0x1*-0x1bd2+-0x312+0x6b*0x4a,-0x8cc+0x25be*-0x1+0xfc6*0x3,0x2a*0x9+-0x14fe+0x1389*0x1,_0x22ba3c=>{var _0x3d1f19=_0x4c8e20;_0x27b1c4['gravi'+'tyPct']=_0x22ba3c,_0x226f4d[_0x3d1f19(0x510)](_0x141cd6);}))]),_0x4bfdba(_0x30b80e['zzsJq'],'Zeroe'+'s\x20Mov'+'ement'+'.last'+'JumpT'+'ime\x20s'+_0x4c8e20(0xf3)+_0x4c8e20(0x63d)+'\x20cool'+_0x4c8e20(0x1b5)+'never'+_0x4c8e20(0x31e)+'ies.',_0x27b1c4['bhop'],_0x4d2ae3=>{var _0x5bf81d=_0x4c8e20,_0x1f910b={'eurmG':_0x5bf81d(0x2ef)+_0x5bf81d(0x617)+'2','asGPO':_0x30b80e['NFFjA'],'ZLmPj':function(_0x461329){return _0x461329();}};if(_0x30b80e['EYoLT'](_0x30b80e['UJHIS'],_0x30b80e[_0x5bf81d(0x606)])){var _0x2f7bab=_0x1f910b[_0x5bf81d(0x453)][_0x5bf81d(0x1fc)]('|'),_0x18ac14=-0x1dc*0xf+-0x4d*-0x13+0x162d;while(!![]){switch(_0x2f7bab[_0x18ac14++]){case'0':var _0x32e49c=_0x195020[_0x5bf81d(0x3c0)+_0x5bf81d(0x1f3)+_0x5bf81d(0x2bb)](_0x1f910b[_0x5bf81d(0x557)]);continue;case'1':_0x5f0d7b['appen'+_0x5bf81d(0x169)+'d'](_0xbac7d5);continue;case'2':_0x1a69e5(()=>_0x44ce39[_0x5bf81d(0x45f)+'List'][_0x5bf81d(0x11e)](_0x5bf81d(0x313)));continue;case'3':_0x299a54[_0x5bf81d(0x454)+_0x5bf81d(0x169)+'d'](_0x32e49c);continue;case'4':_0x32e49c[_0x5bf81d(0x14a)+_0x5bf81d(0x1be)+'t']=_0x3cfc99;continue;case'5':_0x22abaf=_0x1f910b[_0x5bf81d(0x3d0)](_0x52fa61);continue;}break;}}else _0x27b1c4['bhop']=_0x4d2ae3,_0x141cd6();},[])];if(_0x1bd5d6==='visua'+'l')return[_0x4bfdba(_0x4c8e20(0x37b)+_0x4c8e20(0x5bb),_0x30b80e['CFNki'],_0x27b1c4[_0x4c8e20(0x21d)+_0x4c8e20(0x5bb)],_0x4f1d61=>{var _0x4af9f4=_0x4c8e20;_0x226f4d[_0x4af9f4(0x14b)]('QWPaf',_0x226f4d[_0x4af9f4(0x38f)])?(_0x53f293[_0x4af9f4(0x340)]=_0x2395c2,_0x20e895()):(_0x27b1c4[_0x4af9f4(0x21d)+_0x4af9f4(0x5bb)]=_0x4f1d61,_0x141cd6());},[_0x2bb748(_0x30b80e['qjzTy'],null,_0xa1c152(_0x27b1c4[_0x4c8e20(0x340)],[['bl',_0x30b80e[_0x4c8e20(0x456)]],['br',_0x4c8e20(0xe8)+_0x4c8e20(0x1fa)+'ht'],['ml',_0x30b80e['nydDQ']]],_0x11e05b=>{var _0xa34035=_0x4c8e20;_0x27b1c4[_0xa34035(0x340)]=_0x11e05b,_0x141cd6();})),_0x30b80e['ujDKp'](_0x2bb748,_0x30b80e[_0x4c8e20(0x5be)],null,_0x30b80e['eOqAl'](_0x500fb9,_0x27b1c4[_0x4c8e20(0x60c)+'le'],-0x1372+-0x205b*0x1+0x33cd+0.6,-0x4a2*0x5+0x405*0x1+-0x56*-0x39+0.6000000000000001,0x129b*-0x1+-0x67*-0x1+0x1234+0.05,_0x4cd2fc=>{var _0x13314e=_0x4c8e20;if(_0x30b80e[_0x13314e(0x458)]==='bxJwH')return _0x1ae56b['warn'](_0x226f4d[_0x13314e(0x2ae)],_0x49c1e6,_0x56f71b&&_0x586e6d['messa'+'ge']),null;else _0x27b1c4['ksSca'+'le']=_0x4cd2fc,_0x30b80e[_0x13314e(0x189)](_0x141cd6);})),_0x30b80e['ujDKp'](_0x2bb748,_0x30b80e[_0x4c8e20(0x28f)],null,_0x497e82(_0x27b1c4[_0x4c8e20(0x2af)],_0x3433b6=>{var _0xa7e6d2=_0x4c8e20;_0x27b1c4[_0xa7e6d2(0x2af)]=_0x3433b6,_0x30b80e[_0xa7e6d2(0x189)](_0x141cd6);}))]),_0x30b80e[_0x4c8e20(0x2d3)](_0x4bfdba,'Cross'+_0x4c8e20(0x4f7),_0x30b80e[_0x4c8e20(0x10b)],_0x27b1c4[_0x4c8e20(0x23a)+_0x4c8e20(0x4f7)],_0x2799d4=>{var _0x259d94=_0x4c8e20;_0x27b1c4[_0x259d94(0x23a)+_0x259d94(0x4f7)]=_0x2799d4,_0x141cd6();},[_0x2bb748(_0x4c8e20(0x554),null,_0x500fb9(_0x27b1c4[_0x4c8e20(0x689)+'e'],-0x2f*0x49+0x261b+-0x18b4+0.5,-0x20bb+-0x2507+0xdf4*0x5+0.5,0x14ce+-0xb09+-0x9c5*0x1+0.1,_0x5499eb=>{var _0x3e51f1=_0x4c8e20;_0x27b1c4[_0x3e51f1(0x689)+'e']=_0x5499eb,_0x30b80e[_0x3e51f1(0x5ae)](_0x141cd6);})),_0x2bb748(_0x30b80e[_0x4c8e20(0x366)],null,_0x30b80e['axept'](_0x41f38e,_0x27b1c4['chCol'+'or'],_0x42fabe=>{var _0x70ca43=_0x4c8e20;_0x27b1c4[_0x70ca43(0x669)+'or']=_0x42fabe,_0x141cd6();}))]),_0x4bfdba(_0x30b80e[_0x4c8e20(0x29a)],_0x30b80e['NmnZh'],_0x27b1c4[_0x4c8e20(0x541)],null,[_0x30b80e[_0x4c8e20(0xfa)](_0x2bb748,_0x30b80e['vHCQz'],null,_0x497e82(_0x27b1c4[_0x4c8e20(0x541)],_0xbea66f=>{var _0x9a3eab=_0x4c8e20;_0x9a3eab(0x3f2)!==_0x226f4d[_0x9a3eab(0x361)]?new _0x5ddb13(_0xd607a8)[_0x9a3eab(0x52e)+'Field'](_0x3dc8df,_0x23a062,_0x21a1cc):(_0x27b1c4[_0x9a3eab(0x541)]=_0xbea66f,_0x141cd6());})),_0x19bdb6(_0x30b80e[_0x4c8e20(0x199)])])];if(_0x30b80e['vARvp'](_0x1bd5d6,_0x4c8e20(0x641)))return[_0x4bfdba(_0x30b80e[_0x4c8e20(0x1cf)],_0x30b80e[_0x4c8e20(0x327)],_0x27b1c4[_0x4c8e20(0x1a1)+'ck'],_0x41901a=>{var _0x4c9e89=_0x4c8e20;_0x27b1c4[_0x4c9e89(0x1a1)+'ck']=_0x41901a,_0x30b80e['vxPtE'](_0x141cd6);},[_0x19bdb6('Takes'+_0x4c8e20(0x257)+_0x4c8e20(0x5e6)+_0x4c8e20(0x59e)+_0x4c8e20(0x2dd)+_0x4c8e20(0x208)+_0x4c8e20(0x4bb)+'.')])];return[_0x4bfdba(_0x4c8e20(0x621)+'Mode\x20'+_0x4c8e20(0x3a3)+'lay\x20o'+_0x4c8e20(0x359),'Skips'+'\x20UWMK'+_0x4c8e20(0x2fb)+_0x4c8e20(0x56b)+'—\x20no\x20'+'WASM\x20'+'hooks'+_0x4c8e20(0x242)+_0x4c8e20(0x4d7)+_0x4c8e20(0x116)+'atche'+_0x4c8e20(0x53d)+_0x4c8e20(0x4ee)+_0x4c8e20(0x4c5),_0x27b1c4[_0x4c8e20(0x33f)+_0x4c8e20(0x5ff)],_0x50be1a=>{var _0x28e15f=_0x4c8e20;_0x27b1c4[_0x28e15f(0x33f)+'ode']=_0x50be1a,_0x141cd6(),location[_0x28e15f(0x5ad)+'d']();},[_0x30b80e['GNztX'](_0x19bdb6,'Appli'+'es\x20on'+'\x20relo'+_0x4c8e20(0x48b)+'f\x20mat'+'ches\x20'+_0x4c8e20(0x661)+'in\x20sa'+_0x4c8e20(0x193)+_0x4c8e20(0x44b)+'he\x20fr'+_0x4c8e20(0x610)+_0x4c8e20(0x5df)+'ok-re'+_0x4c8e20(0x23d)+'\x20—\x20te'+_0x4c8e20(0x126)+'\x20the\x20'+_0x4c8e20(0x1df)+'-appl'+_0x4c8e20(0x4d2)+_0x4c8e20(0x28d))]),_0x30b80e[_0x4c8e20(0x58d)](_0x4bfdba,'Hook\x20'+'risk\x20'+_0x4c8e20(0x3c3)+'hes',_0x4c8e20(0x376)+_0x4c8e20(0x62b)+'nstal'+_0x4c8e20(0x3da)+_0x4c8e20(0x439)+'tramp'+_0x4c8e20(0x591)+'\x20for\x20'+_0x4c8e20(0x1e6)+'hole\x20'+_0x4c8e20(0x102)+'load.'+_0x4c8e20(0x214)+'OFF\x20b'+_0x4c8e20(0x24a)+'ault\x20'+_0x4c8e20(0x381)+_0x4c8e20(0x286)+'ure\x20t'+_0x4c8e20(0x1af)+_0x4c8e20(0x118)+_0x4c8e20(0x2aa)+_0x4c8e20(0x301)+'he\x20re'+'al\x20me'+_0x4c8e20(0xec)+_0x4c8e20(0x517)+_0x4c8e20(0x207)+'nctio'+_0x4c8e20(0x601)+'natur'+_0x4c8e20(0x13d)+_0x4c8e20(0x5a0)+_0x4c8e20(0x62d)+_0x4c8e20(0x4a7)+_0x4c8e20(0x192)+_0x4c8e20(0x61c)+_0x4c8e20(0x29e)+_0x4c8e20(0x597)+_0x4c8e20(0x293)+_0x4c8e20(0x1d0)+_0x4c8e20(0x5b0)+_0x4c8e20(0x10e)+'ime,\x20'+'reloa'+_0x4c8e20(0x2c2)+'d\x20see'+'\x20whic'+'h\x20one'+_0x4c8e20(0x263)+_0x4c8e20(0x38b)+_0x4c8e20(0x1f5)+_0x4c8e20(0x295)+'n.',_0x27b1c4['hookG'+'od']||_0x27b1c4[_0x4c8e20(0x3b7)+_0x4c8e20(0x171)]||_0x27b1c4[_0x4c8e20(0x5c9)+_0x4c8e20(0x398)+'il']||_0x27b1c4[_0x4c8e20(0x51b)+'aptur'+'e'],_0x4485ae=>{var _0x4d532f=_0x4c8e20,_0x47821c={'ubkvp':'style'};if('Qmjjm'!==_0x226f4d[_0x4d532f(0x58b)])_0x27b1c4['hookG'+'od']=_0x4485ae,_0x27b1c4[_0x4d532f(0x3b7)+_0x4d532f(0x171)]=_0x4485ae,_0x27b1c4[_0x4d532f(0x5c9)+'oReco'+'il']=_0x4485ae,_0x27b1c4['hookC'+_0x4d532f(0x467)+'e']=_0x4485ae,_0x226f4d['vOfQH'](_0x141cd6),location[_0x4d532f(0x5ad)+'d']();else{_0x4451ec=_0x55eedb;if(!_0x2ea28a){var _0x506f75=_0x771dfa['creat'+'eElem'+'ent'](_0x47821c[_0x4d532f(0x50e)]);_0x506f75[_0x4d532f(0x14a)+_0x4d532f(0x1be)+'t']=_0x474ed1,_0x391b27[_0x4d532f(0x454)+'dChil'+'d'](_0x506f75),_0x3d9b2e=_0x385401(),_0x23f3b9['appen'+_0x4d532f(0x169)+'d'](_0x3d6e09),_0x578cd1(()=>_0x43e630['class'+'List']['add'](_0x4d532f(0x313)));}_0x4fce9b[_0x4d532f(0x45f)+_0x4d532f(0x604)]['toggl'+'e']('shown',_0x1e42e2);}},[_0x19bdb6(_0x4c8e20(0x488)+'es\x20on'+_0x4c8e20(0x59e)+'ad.'),_0x30b80e[_0x4c8e20(0x181)](_0x2bb748,_0x4c8e20(0x2b9)+_0x4c8e20(0x485)+'th.In'+_0x4c8e20(0x3b9)+'eTake'+_0x4c8e20(0x40a)+'h)',null,_0x497e82(_0x27b1c4[_0x4c8e20(0x3b7)+'od'],_0x4c8a42=>{var _0x2c0ac9=_0x4c8e20;_0x27b1c4[_0x2c0ac9(0x3b7)+'od']=_0x4c8a42,_0x30b80e['tYqKz'](_0x141cd6);})),_0x30b80e[_0x4c8e20(0x181)](_0x2bb748,'godDi'+_0x4c8e20(0x154)+'ealth'+_0x4c8e20(0x2b3)+_0x4c8e20(0x135),null,_0x497e82(_0x27b1c4['hookG'+_0x4c8e20(0x171)],_0x4a4911=>{var _0x4e2f18=_0x4c8e20,_0x1e2852={'jTJvp':_0x30b80e['VNGiE'],'LQZDf':_0x4e2f18(0x2f3)};if(_0x30b80e[_0x4e2f18(0x160)]('ZZXTe','vCbjJ')){if(_0x16cd3f)return;_0x1ee927=!![],_0x2d5440['addEv'+'entLi'+'stene'+'r'](_0x1e2852['jTJvp'],_0x500b1a,!![]),_0x138a32['addEv'+_0x4e2f18(0x476)+_0x4e2f18(0x329)+'r'](_0x1e2852['LQZDf'],_0x21fda2,!![]),_0x4cee33[_0x4e2f18(0x4df)+'entLi'+_0x4e2f18(0x329)+'r'](_0x4e2f18(0x34b)+'down',_0xa39e90,!![]),_0x1e4559['addEv'+_0x4e2f18(0x476)+_0x4e2f18(0x329)+'r'](_0x4e2f18(0x34b)+'up',_0x28e7fd,!![]),_0x30e1da[_0x4e2f18(0x4df)+'entLi'+_0x4e2f18(0x329)+'r']('blur',_0x39c3af);}else _0x27b1c4[_0x4e2f18(0x3b7)+_0x4e2f18(0x171)]=_0x4a4911,_0x30b80e[_0x4e2f18(0x64a)](_0x141cd6);})),_0x2bb748(_0x30b80e[_0x4c8e20(0x1f8)],null,_0x497e82(_0x27b1c4[_0x4c8e20(0x5c9)+_0x4c8e20(0x398)+'il'],_0x3400b8=>{var _0x5723c1=_0x4c8e20;_0x27b1c4['hookN'+_0x5723c1(0x398)+'il']=_0x3400b8,_0x226f4d[_0x5723c1(0x35e)](_0x141cd6);})),_0x2bb748(_0x30b80e[_0x4c8e20(0x167)],_0x30b80e[_0x4c8e20(0xf2)],_0x497e82(_0x27b1c4['hookC'+_0x4c8e20(0x467)+'e'],_0x13a672=>{var _0x531ee4=_0x4c8e20,_0x20f7ec={'ReWOo':function(_0x220cd6){return _0x220cd6();}};_0x30b80e[_0x531ee4(0x303)](_0x531ee4(0x155),_0x30b80e[_0x531ee4(0x536)])?(_0x27b1c4[_0x531ee4(0x51b)+_0x531ee4(0x467)+'e']=_0x13a672,_0x30b80e[_0x531ee4(0x35b)](_0x141cd6)):(_0x4a2f0d[_0x531ee4(0x300)+'ill']=_0x582145,_0x20f7ec[_0x531ee4(0x630)](_0xa3e1a5));}))]),_0x4bfdba(_0x30b80e[_0x4c8e20(0x66f)],_0x4c8e20(0x4ea)+'les\x20C'+_0x4c8e20(0x436)+'age\x20d'+_0x4c8e20(0x141)+'ors\x20a'+'t\x20sta'+_0x4c8e20(0x664)+_0x4c8e20(0x2c1)+_0x4c8e20(0x323)+'tecti'+'on().'+_0x4c8e20(0x3b6)+'\x20ON.',_0x27b1c4['actkK'+_0x4c8e20(0x511)],_0x7c9b19=>{_0x27b1c4['actkK'+'ill']=_0x7c9b19,_0x141cd6();},[_0x19bdb6(_0x4c8e20(0x5ce)+_0x4c8e20(0x3fd)+_0x4c8e20(0xf1)+_0x4c8e20(0x595)+_0x4c8e20(0x1d2)+_0x4c8e20(0x65b)+'\x20ban\x20'+_0x4c8e20(0x26a)+'even\x20'+_0x4c8e20(0x4e9)+'this\x20'+_0x4c8e20(0x2fe),!![])]),_0x30b80e['KrirC'](_0x4bfdba,'Dange'+'r',_0x4c8e20(0x513)+'\x20leav'+_0x4c8e20(0x652)+_0x4c8e20(0x620)+'isibl'+'e\x20tra'+'ces.',!![],null,[_0x2bb748('Wipe\x20'+'my\x20se'+'tting'+'s',null,_0x16fe42(_0x30b80e[_0x4c8e20(0x5e1)],()=>{var _0x16fe92=_0x4c8e20;_0x27b1c4={..._0x4f5313},_0x141cd6(),location[_0x16fe92(0x5ad)+'d']();}))])];}var _0x4346e5=null;function _0x4ee6d8(_0x4fd4db){var _0x3512f6=_0x4f9c1c;_0x128729=_0x4fd4db;if(!_0x4346e5){var _0x40dfbb=document[_0x3512f6(0x3c0)+'eElem'+_0x3512f6(0x2bb)]('style');_0x40dfbb['textC'+'onten'+'t']=_0x37026d,_0x51e692[_0x3512f6(0x454)+'dChil'+'d'](_0x40dfbb),_0x4346e5=_0x5c9d6c(),_0x51e692[_0x3512f6(0x454)+'dChil'+'d'](_0x4346e5),requestAnimationFrame(()=>_0x4346e5['class'+'List'][_0x3512f6(0x11e)](_0x3512f6(0x313)));}_0x4346e5['class'+_0x3512f6(0x604)][_0x3512f6(0x2ec)+'e'](_0x3512f6(0x313),_0x4fd4db);}function _0x2bc86f(){var _0x53b636=_0x4f9c1c;'ZaZmA'!==_0x30b80e[_0x53b636(0x5eb)]?_0x4ee6d8(!_0x128729):(_0x2e58b5=new _0xf18e9(),_0x4eb289['set'](_0x31e53c,_0x769c3c));}function _0x5c9d6c(){var _0x48f64b=_0x4f9c1c,_0x169643={'alOiO':function(_0x4d7530,_0x43d479){return _0x30b80e['OOXIq'](_0x4d7530,_0x43d479);},'PuzCs':_0x48f64b(0x18e),'IBqIV':function(_0x52ce18,_0x16fc4d){var _0x248a93=_0x48f64b;return _0x30b80e[_0x248a93(0x158)](_0x52ce18,_0x16fc4d);},'wAuzP':_0x30b80e['wxQxo'],'hQSNo':_0x30b80e[_0x48f64b(0x1d3)],'OhsMf':_0x48f64b(0x370)+'ng','TlAKj':_0x30b80e[_0x48f64b(0x609)],'PKBti':_0x30b80e['oLcQL'],'fvJNu':function(_0x153114,_0x4aa367){return _0x153114+_0x4aa367;},'sGAvz':_0x30b80e[_0x48f64b(0x138)]},_0x296702=document['creat'+'eElem'+'ent'](_0x30b80e[_0x48f64b(0x532)]);_0x296702['class'+_0x48f64b(0x468)]='mn-pa'+'nel';var _0x16d5bb=document[_0x48f64b(0x3c0)+'eElem'+'ent'](_0x48f64b(0x4b9));_0x16d5bb['class'+_0x48f64b(0x468)]='mn-si'+'de';var _0x1cf4e1=document['creat'+_0x48f64b(0x1f3)+_0x48f64b(0x2bb)](_0x30b80e[_0x48f64b(0x532)]);_0x1cf4e1[_0x48f64b(0x45f)+_0x48f64b(0x468)]=_0x48f64b(0x40e)+'go',_0x1cf4e1[_0x48f64b(0x31a)+_0x48f64b(0x302)]=_0x30b80e['rYpVD'],_0x16d5bb['appen'+'dChil'+'d'](_0x1cf4e1);var _0x168be0=document[_0x48f64b(0x3c0)+_0x48f64b(0x1f3)+'ent'](_0x48f64b(0x5cd));_0x168be0[_0x48f64b(0x45f)+_0x48f64b(0x468)]=_0x30b80e[_0x48f64b(0x114)];var _0xda4ad8=document['creat'+_0x48f64b(0x1f3)+'ent']('heade'+'r');_0xda4ad8[_0x48f64b(0x45f)+_0x48f64b(0x468)]=_0x30b80e['XrsKd'];var _0x1b3f6c=document[_0x48f64b(0x3c0)+_0x48f64b(0x1f3)+'ent'](_0x30b80e['yUlkA']);_0x1b3f6c[_0x48f64b(0x45f)+'Name']=_0x48f64b(0x3ed)+_0x48f64b(0x200);var _0xd2077a=document[_0x48f64b(0x3c0)+'eElem'+_0x48f64b(0x2bb)]('h2');_0xd2077a[_0x48f64b(0x45f)+'Name']=_0x30b80e[_0x48f64b(0x5d9)],_0xd2077a[_0x48f64b(0x14a)+_0x48f64b(0x1be)+'t']=_0x30b80e['whAPV'];var _0x29daad=document[_0x48f64b(0x3c0)+_0x48f64b(0x1f3)+_0x48f64b(0x2bb)](_0x48f64b(0x413));_0x29daad[_0x48f64b(0x45f)+_0x48f64b(0x468)]='mn-su'+'b',_0x29daad['textC'+_0x48f64b(0x1be)+'t']=_0x48f64b(0x2c9)+_0x48f64b(0x34d)+'.io\x20m'+_0x48f64b(0x5fa),_0x1b3f6c['appen'+'d'](_0xd2077a,_0x29daad);var _0x4ebd28=document['creat'+_0x48f64b(0x1f3)+_0x48f64b(0x2bb)](_0x48f64b(0x5d2)+'n');_0x4ebd28['type']=_0x30b80e['jmKMt'],_0x4ebd28['class'+_0x48f64b(0x468)]=_0x30b80e[_0x48f64b(0x66b)],_0x4ebd28['title']='Close',_0x4ebd28[_0x48f64b(0x31a)+_0x48f64b(0x302)]='<svg\x20'+_0x48f64b(0x45b)+_0x48f64b(0x15e)+_0x48f64b(0x19c)+_0x48f64b(0x133)+_0x48f64b(0x514)+_0x48f64b(0x16a)+_0x48f64b(0x1ea)+'2\x2012M'+_0x48f64b(0x1c4)+_0x48f64b(0xe3)+_0x48f64b(0x67c)+'vg>',_0x4ebd28['oncli'+'ck']=()=>_0x4ee6d8(![]),_0xda4ad8['appen'+'d'](_0x1b3f6c,_0x4ebd28);var _0x2c9d8a=document[_0x48f64b(0x3c0)+_0x48f64b(0x1f3)+'ent'](_0x48f64b(0x5cd));_0x2c9d8a[_0x48f64b(0x45f)+'Name']=_0x30b80e['gKiNt'],_0x168be0['appen'+'d'](_0xda4ad8,_0x2c9d8a),_0x296702['appen'+'d'](_0x16d5bb,_0x168be0);var _0x45a08d=new Map();for(var _0x18b8f1 of _0x1c6714){var _0x1d5b84=_0x30b80e['AqRAS'][_0x48f64b(0x1fc)]('|'),_0x2e0296=0x1f6*0x12+0x1130+-0x347c;while(!![]){switch(_0x1d5b84[_0x2e0296++]){case'0':_0x2fba9a[_0x48f64b(0x668)]=_0x18b8f1[_0x48f64b(0x4ec)];continue;case'1':_0x2fba9a['inner'+'HTML']=_0x30b80e[_0x48f64b(0xd9)](_0x30b80e['OOAYd']+_0x18b8f1[_0x48f64b(0x4ec)],'</sma'+'ll>');continue;case'2':_0x2fba9a[_0x48f64b(0x67f)+'ck']=(_0x552c24=>()=>_0x1b3708(_0x552c24))(_0x18b8f1['id']);continue;case'3':_0x16d5bb['appen'+_0x48f64b(0x169)+'d'](_0x2fba9a);continue;case'4':var _0x2fba9a=document['creat'+'eElem'+'ent'](_0x30b80e['jmKMt']);continue;case'5':_0x2fba9a[_0x48f64b(0x45f)+_0x48f64b(0x468)]=_0x30b80e[_0x48f64b(0x440)];continue;case'6':_0x2fba9a[_0x48f64b(0x3fc)]=_0x30b80e['jmKMt'];continue;case'7':_0x45a08d['set'](_0x18b8f1['id'],_0x2fba9a);continue;}break;}}function _0x1b3708(_0x1af625){var _0x13f7c0=_0x48f64b;_0x312db9['cat']=_0x1af625,_0x3f5e4c();var _0x777368=_0x1c6714[_0x13f7c0(0x2ba)](_0x4025fa=>_0x4025fa['id']===_0x1af625)||_0x1c6714[-0x1080+0x1c82+-0xc02];_0xd2077a['textC'+'onten'+'t']=_0x30b80e['gohAu'](_0x30b80e[_0x13f7c0(0x1db)],_0x777368[_0x13f7c0(0x4ec)]);for(var [_0xf0a855,_0xcf9761]of _0x45a08d)_0xcf9761[_0x13f7c0(0x45f)+_0x13f7c0(0x604)]['toggl'+'e']('activ'+'e',_0xf0a855===_0x1af625);_0x2c9d8a['repla'+_0x13f7c0(0x179)+_0x13f7c0(0x32b)](..._0x1301b6(_0x1af625));}return _0x1b3708(_0x312db9['cat']||_0x30b80e['wAuLt']),_0x30b80e[_0x48f64b(0x563)](setInterval,()=>{var _0x242fe0=_0x48f64b;if(!_0x128729)return;var _0x5a073e=_0x2c9d8a[_0x242fe0(0x627)+_0x242fe0(0x34a)];for(var _0x29b1be=0x156a+0x1*0x12e8+-0x2852;_0x29b1be<_0x5a073e['lengt'+'h'];_0x29b1be++){var _0x252ca3=_0x5a073e[_0x29b1be]['query'+'Selec'+'tor']('.sk-m'+_0x242fe0(0x2a2));_0x252ca3&&(_0x169643[_0x242fe0(0x270)](_0x252ca3['textC'+_0x242fe0(0x1be)+'t']['index'+'Of']('UWMK'),0xcc6+0xc5d*0x1+-0x1923)||_0x252ca3[_0x242fe0(0x14a)+_0x242fe0(0x1be)+'t'][_0x242fe0(0x44f)+'Of'](_0x169643['PuzCs'])===0x29*-0x1c+0x20b3+-0x1c37)&&(_0x252ca3[_0x242fe0(0x14a)+_0x242fe0(0x1be)+'t']=_0x33a6d4['safeM'+_0x242fe0(0x5ff)]?_0x242fe0(0x5c0)+_0x242fe0(0x3fb)+'-\x20ove'+_0x242fe0(0x54b)+'only,'+'\x20no\x20h'+_0x242fe0(0x3de)+_0x242fe0(0x41b)+_0x242fe0(0x584)+'\x20exit'+')':_0x33a6d4[_0x242fe0(0x1a7)]?_0x169643[_0x242fe0(0x34f)](_0x169643[_0x242fe0(0x34f)](_0x242fe0(0x180)+_0x242fe0(0x2d6)+'\x20'+(_0x33a6d4['hooks'+_0x242fe0(0x43e)]?_0x33a6d4[_0x242fe0(0x1df)+'Ok']+'/'+_0x33a6d4[_0x242fe0(0x1df)+'Total']+(_0x242fe0(0x42f)+'s'):_0x242fe0(0x45d)+'ks\x20ar'+_0x242fe0(0x49f)+_0x242fe0(0x3b8)+'ff)'),_0x169643[_0x242fe0(0x249)])+(_0x33a6d4[_0x242fe0(0x122)+_0x242fe0(0x687)]?_0x169643['hQSNo']:_0x169643['OhsMf'])+('\x20|\x20sh'+_0x242fe0(0x33d)+'\x20'),_0x33a6d4[_0x242fe0(0x3c8)+_0x242fe0(0x1a9)]?'held':_0x242fe0(0x253))+(_0x242fe0(0x535)+'vemen'+'t\x20')+(_0x33a6d4[_0x242fe0(0x148)+'ents']?_0x169643['TlAKj']:_0x169643[_0x242fe0(0x105)])+(_0x33a6d4['lastE'+'rror']?_0x169643['fvJNu'](_0x169643[_0x242fe0(0x653)],_0x33a6d4['lastE'+_0x242fe0(0x3af)]):''):'UWMK\x20'+_0x242fe0(0x47a)+'NG\x20-\x20'+'overl'+_0x242fe0(0x442)+'ly\x20(r'+_0x242fe0(0x2ca)+'all\x20t'+_0x242fe0(0x480)+'erscr'+'ipt)');}},-0x3ae+0x18aa+-0x1114),_0x296702;}var _0x37026d=_0x4f9c1c(0x52d)+_0x4f9c1c(0x631)+_0x4f9c1c(0x649)+_0x4f9c1c(0x224)+_0x4f9c1c(0x32e)+_0x4f9c1c(0x5ac)+'\x20\x20\x20*\x20'+_0x4f9c1c(0x19e)+'-sizi'+'ng:\x20b'+_0x4f9c1c(0x592)+_0x4f9c1c(0x1a0)+_0x4f9c1c(0x54f)+_0x4f9c1c(0x3b1)+';\x20fon'+_0x4f9c1c(0x265)+'ily:\x20'+_0x4f9c1c(0x622)+_0x4f9c1c(0x444)+_0x4f9c1c(0x15d)+_0x4f9c1c(0x31f)+_0x4f9c1c(0x433)+'em-ui'+_0x4f9c1c(0x682)+_0x4f9c1c(0x628)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel\x20'+_0x4f9c1c(0x211)+_0x4f9c1c(0x25f)+':\x20abs'+'olute'+';\x20rig'+_0x4f9c1c(0x299)+_0x4f9c1c(0x390)+_0x4f9c1c(0x210)+'m:\x2024'+_0x4f9c1c(0x178)+'idth:'+_0x4f9c1c(0x25d)+_0x4f9c1c(0x30e)+',\x20cal'+_0x4f9c1c(0x564)+_0x4f9c1c(0x47f)+_0x4f9c1c(0x230)+');\x20ma'+_0x4f9c1c(0x20b)+_0x4f9c1c(0x2cc)+_0x4f9c1c(0x15f)+_0x4f9c1c(0x46e)+_0x4f9c1c(0x44c)+_0x4f9c1c(0x4bd)+_0x4f9c1c(0x407)+_0x4f9c1c(0x343)+_0x4f9c1c(0x379)+'\x20\x20\x20di'+_0x4f9c1c(0x39b)+_0x4f9c1c(0x170)+_0x4f9c1c(0x334)+_0x4f9c1c(0x634)+_0x4f9c1c(0x421)+'addin'+_0x4f9c1c(0x3ab)+_0x4f9c1c(0x27c)+_0x4f9c1c(0x592)+'-radi'+_0x4f9c1c(0x16c)+_0x4f9c1c(0x344)+'point'+_0x4f9c1c(0x283)+_0x4f9c1c(0x1e5)+'\x20auto'+_0x4f9c1c(0x379)+_0x4f9c1c(0x5d3)+_0x4f9c1c(0x615)+_0x4f9c1c(0x1b7)+_0x4f9c1c(0x521)+_0x4f9c1c(0x5f0)+_0x4f9c1c(0x5a2)+_0x4f9c1c(0x4b3)+'backd'+_0x4f9c1c(0x36d)+_0x4f9c1c(0x3d9)+_0x4f9c1c(0x3c9)+_0x4f9c1c(0x1f4)+'x)\x20sa'+_0x4f9c1c(0x50d)+'e(150'+_0x4f9c1c(0x194)+_0x4f9c1c(0x17c)+'t-bac'+'kdrop'+_0x4f9c1c(0x14d)+_0x4f9c1c(0x19d)+_0x4f9c1c(0x16f)+'2px)\x20'+_0x4f9c1c(0x275)+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+_0x4f9c1c(0x5ec)+'-shad'+_0x4f9c1c(0x251)+_0x4f9c1c(0x11b)+_0x4f9c1c(0x478)+'gba(2'+'55,25'+_0x4f9c1c(0x48e)+',.06)'+',\x20ins'+_0x4f9c1c(0x2a0)+_0x4f9c1c(0x1b0)+_0x4f9c1c(0x534)+_0x4f9c1c(0x36c)+'255,2'+_0x4f9c1c(0x443)+'5),\x200'+'\x2030px'+_0x4f9c1c(0x515)+_0x4f9c1c(0x534)+_0x4f9c1c(0x62a)+'0,.55'+_0x4f9c1c(0x378)+'\x20\x20\x20\x20o'+'pacit'+'y:\x200;'+_0x4f9c1c(0x11c)+_0x4f9c1c(0x660)+':\x20tra'+'nslat'+'eY(18'+'px);\x20'+'point'+_0x4f9c1c(0x283)+_0x4f9c1c(0x1e5)+_0x4f9c1c(0x1ab)+';\x20tra'+_0x4f9c1c(0x2a7)+_0x4f9c1c(0x637)+_0x4f9c1c(0x10d)+'y\x20.35'+'s\x20eas'+_0x4f9c1c(0x2e5)+'ansfo'+'rm\x20.4'+_0x4f9c1c(0x479)+'bic-b'+'ezier'+_0x4f9c1c(0x2e7)+_0x4f9c1c(0x365)+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x4f9c1c(0x389)+_0x4f9c1c(0xd6)+_0x4f9c1c(0x240)+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+_0x4f9c1c(0x52d)+'.mn-p'+'anel.'+_0x4f9c1c(0x313)+_0x4f9c1c(0x63f)+_0x4f9c1c(0x1ee)+_0x4f9c1c(0x43a)+'trans'+_0x4f9c1c(0x3a4)+'\x20none'+';\x20poi'+_0x4f9c1c(0x645)+'event'+_0x4f9c1c(0x233)+'to;\x20}'+_0x4f9c1c(0x52d)+_0x4f9c1c(0x1dd)+_0x4f9c1c(0x2e9)+_0x4f9c1c(0x438)+_0x4f9c1c(0x12f)+_0x4f9c1c(0x533)+_0x4f9c1c(0x347)+_0x4f9c1c(0x1fb)+_0x4f9c1c(0x506)+_0x4f9c1c(0x380)+_0x4f9c1c(0x2cd)+_0x4f9c1c(0x3b5)+'-item'+_0x4f9c1c(0x318)+_0x4f9c1c(0x248)+_0x4f9c1c(0x310)+_0x4f9c1c(0x4fd)+'\x20widt'+_0x4f9c1c(0x2ac)+_0x4f9c1c(0x2c8)+_0x4f9c1c(0x543)+'none;'+'\x20padd'+_0x4f9c1c(0x13a)+_0x4f9c1c(0x384)+(_0x4f9c1c(0x131)+_0x4f9c1c(0x594)+_0x4f9c1c(0x188)+_0x4f9c1c(0x4ae)+_0x4f9c1c(0x3d8)+'\x20\x20\x20\x20\x20'+_0x4f9c1c(0x63c)+_0x4f9c1c(0x5a3)+_0x4f9c1c(0x166)+'a(255'+_0x4f9c1c(0x636)+_0x4f9c1c(0x654)+'025);'+'\x20box-'+'shado'+'w:\x20in'+_0x4f9c1c(0x1d5)+_0x4f9c1c(0x11b)+_0x4f9c1c(0x478)+'gba(2'+'55,25'+'5,255'+',.05)'+_0x4f9c1c(0x5ac)+'\x20\x20\x20.m'+_0x4f9c1c(0x2f6)+_0x4f9c1c(0x26f)+'ispla'+'y:\x20gr'+_0x4f9c1c(0xf7)+'lace-'+_0x4f9c1c(0x209)+_0x4f9c1c(0x2c3)+_0x4f9c1c(0x372)+'width'+':\x2032p'+_0x4f9c1c(0x1c8)+_0x4f9c1c(0x43b)+'\x2032px'+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x51d)+_0x4f9c1c(0x2f6)+_0x4f9c1c(0x1aa)+_0x4f9c1c(0x368)+_0x4f9c1c(0x60e)+'25px;'+_0x4f9c1c(0x4f4)+_0x4f9c1c(0x299)+_0x4f9c1c(0x508)+_0x4f9c1c(0x404)+_0x4f9c1c(0x2f4)+'visib'+'le;\x20f'+'ilter'+_0x4f9c1c(0x2ea)+_0x4f9c1c(0x5cc)+'dow(0'+_0x4f9c1c(0x392)+'x\x20rgb'+_0x4f9c1c(0x5c5)+_0x4f9c1c(0x4bf)+'157,.'+_0x4f9c1c(0x331)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x4f9c1c(0x39a)+'\x20disp'+_0x4f9c1c(0x12f)+'flex;'+_0x4f9c1c(0x4ed)+_0x4f9c1c(0x4e8)+_0x4f9c1c(0x567)+_0x4f9c1c(0x4b1)+';\x20jus'+'tify-'+'conte'+_0x4f9c1c(0x490)+_0x4f9c1c(0x4b1)+';\x20wid'+_0x4f9c1c(0x24b)+'2px;\x20'+_0x4f9c1c(0x448)+_0x4f9c1c(0x3be)+_0x4f9c1c(0x27c)+_0x4f9c1c(0x592)+':\x200;\x20'+'borde'+'r-rad'+_0x4f9c1c(0x566)+_0x4f9c1c(0x46b)+'\x0a\x20\x20\x20\x20'+_0x4f9c1c(0x483)+'kgrou'+_0x4f9c1c(0x576)+_0x4f9c1c(0x264)+_0x4f9c1c(0x1ca)+';\x20col'+_0x4f9c1c(0x1d4)+_0x4f9c1c(0x246)+_0x4f9c1c(0x2b5)+'8,242'+',.4);'+'\x20curs'+_0x4f9c1c(0x41d)+_0x4f9c1c(0x49b)+_0x4f9c1c(0x47c)+_0x4f9c1c(0x26e)+'ze:\x201'+_0x4f9c1c(0x446)+_0x4f9c1c(0x315)+_0x4f9c1c(0x3a7)+_0x4f9c1c(0x39c)+_0x4f9c1c(0x57b)+_0x4f9c1c(0x1cb)+_0x4f9c1c(0x5aa)+_0x4f9c1c(0x4c7)+_0x4f9c1c(0x54d)+_0x4f9c1c(0x3f1)+':\x20rgb'+'a(246'+',238,'+'242,.'+_0x4f9c1c(0x228)+'\x0a\x20\x20\x20\x20'+_0x4f9c1c(0xda)+_0x4f9c1c(0x1e2)+_0x4f9c1c(0x22b)+_0x4f9c1c(0x223)+_0x4f9c1c(0x434)+'ff6b9'+'d;\x20ba'+_0x4f9c1c(0x615)+'und:\x20'+_0x4f9c1c(0x521)+_0x4f9c1c(0x333)+_0x4f9c1c(0x38e)+'7,.1)'+_0x4f9c1c(0x5ac)+'\x20\x20\x20.m'+_0x4f9c1c(0x2df)+'n\x20{\x20f'+_0x4f9c1c(0x543)+_0x4f9c1c(0x1a3)+'n-wid'+'th:\x200'+_0x4f9c1c(0x540)+'play:'+_0x4f9c1c(0x347)+';\x20fle'+'x-dir'+'ectio'+_0x4f9c1c(0x587)+'lumn;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x4f9c1c(0x4fa)+_0x4f9c1c(0x5cf)+_0x4f9c1c(0x5c1)+'\x20flex'+';\x20ali'+'gn-it'+_0x4f9c1c(0x341)+'cente'+_0x4f9c1c(0x3cb)+'p:\x2012'+'px;\x20p'+_0x4f9c1c(0x60f)+_0x4f9c1c(0xe6)+'x\x206px'+_0x4f9c1c(0x501)+';\x20use'+_0x4f9c1c(0x4cf)+'ect:\x20'+_0x4f9c1c(0x646)+_0x4f9c1c(0xf5)+_0x4f9c1c(0x55b)+_0x4f9c1c(0x115)+'es\x20{\x20'+'flex:'+'\x201;\x20m'+'in-wi'+'dth:\x20'+'0;\x20}\x0a'+_0x4f9c1c(0x1cb)+'mn-h\x20'+_0x4f9c1c(0x156)+'t-siz'+_0x4f9c1c(0x1ec)+'px;\x20f'+_0x4f9c1c(0x4c4)+'eight'+':\x20650'+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x51d)+_0x4f9c1c(0x450)+_0x4f9c1c(0xdf)+_0x4f9c1c(0x26e)+_0x4f9c1c(0x579)+'1px;\x20'+_0x4f9c1c(0x4cb))+(_0x4f9c1c(0x30d)+'4;\x20}\x0a'+_0x4f9c1c(0x1cb)+_0x4f9c1c(0x59c)+'ose\x20{'+'\x20disp'+_0x4f9c1c(0x12f)+_0x4f9c1c(0x63e)+'\x20plac'+_0x4f9c1c(0x65a)+_0x4f9c1c(0x567)+'enter'+_0x4f9c1c(0x585)+_0x4f9c1c(0x32f)+'8px;\x20'+'heigh'+_0x4f9c1c(0x225)+_0x4f9c1c(0x27c)+_0x4f9c1c(0x592)+_0x4f9c1c(0x422)+'borde'+'r-rad'+_0x4f9c1c(0x566)+_0x4f9c1c(0x484)+'backg'+_0x4f9c1c(0x5a3)+':\x20tra'+_0x4f9c1c(0x3c2)+'ent;\x20'+'color'+_0x4f9c1c(0xd8)+_0x4f9c1c(0x10c)+_0x4f9c1c(0x36a)+_0x4f9c1c(0x4f5)+_0x4f9c1c(0x17f)+_0x4f9c1c(0x46c)+'r:\x20po'+_0x4f9c1c(0x124)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x51d)+_0x4f9c1c(0x196)+_0x4f9c1c(0x12b)+_0x4f9c1c(0x1cd)+_0x4f9c1c(0x36a)+'ity:\x20'+_0x4f9c1c(0x213)+_0x4f9c1c(0x615)+_0x4f9c1c(0x1b7)+_0x4f9c1c(0x521)+'255,2'+_0x4f9c1c(0x5d5)+_0x4f9c1c(0xe5)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x4f9c1c(0x59c)+'ose\x20s'+_0x4f9c1c(0x113)+'width'+_0x4f9c1c(0x4ef)+'x;\x20he'+'ight:'+_0x4f9c1c(0x143)+_0x4f9c1c(0x5f8)+'l:\x20no'+_0x4f9c1c(0x5b4)+'troke'+_0x4f9c1c(0x3f6)+_0x4f9c1c(0x5fd)+_0x4f9c1c(0x1a4)+'\x20stro'+_0x4f9c1c(0x672)+_0x4f9c1c(0x60e)+_0x4f9c1c(0x217)+'roke-'+_0x4f9c1c(0x572)+_0x4f9c1c(0x37e)+_0x4f9c1c(0x244)+'\x20}\x0a\x20\x20'+_0x4f9c1c(0x55b)+'-cols'+'\x20{\x20fl'+_0x4f9c1c(0x5f6)+';\x20min'+_0x4f9c1c(0x518)+_0x4f9c1c(0x28c)+_0x4f9c1c(0x3b4)+_0x4f9c1c(0x502)+_0x4f9c1c(0x4e3)+_0x4f9c1c(0x12a)+_0x4f9c1c(0x3ad)+_0x4f9c1c(0x420)+'rid;\x20'+'grid-'+_0x4f9c1c(0x40b)+_0x4f9c1c(0x4ca)+'olumn'+'s:\x20re'+_0x4f9c1c(0x18b)+_0x4f9c1c(0x280)+_0x4f9c1c(0xdc)+_0x4f9c1c(0x4c9)+'ax(25'+'0px,\x20'+_0x4f9c1c(0x190)+_0x4f9c1c(0x100)+'gn-it'+'ems:\x20'+'start'+_0x4f9c1c(0x100)+_0x4f9c1c(0x408)+_0x4f9c1c(0x3bf)+':\x20sta'+'rt;\x20g'+_0x4f9c1c(0x269)+'0px;\x20'+'paddi'+'ng:\x200'+_0x4f9c1c(0x3a0)+'6px\x200'+_0x4f9c1c(0x5ac)+'\x20\x20\x20.m'+_0x4f9c1c(0x4c3)+'s::-w'+_0x4f9c1c(0x45e)+'-scro'+_0x4f9c1c(0x222)+_0x4f9c1c(0x368)+'dth:\x20'+_0x4f9c1c(0x484)+_0x4f9c1c(0x11f)+_0x4f9c1c(0x5c4)+_0x4f9c1c(0x54e)+':-web'+'kit-s'+_0x4f9c1c(0x62e)+_0x4f9c1c(0xf4)+_0x4f9c1c(0x5bc)+'{\x20bac'+'kgrou'+'nd:\x20r'+_0x4f9c1c(0x246)+_0x4f9c1c(0x5d5)+_0x4f9c1c(0x48e)+_0x4f9c1c(0xe9)+';\x20bor'+'der-r'+'adius'+_0x4f9c1c(0x33b)+_0x4f9c1c(0x5ac)+'\x20\x20\x20.s'+_0x4f9c1c(0x394)+_0x4f9c1c(0x5f4)+'order'+_0x4f9c1c(0x474)+_0x4f9c1c(0x5e0)+'2px;\x20'+_0x4f9c1c(0x63c)+_0x4f9c1c(0x5a3)+':\x20rgb'+'a(255'+',255,'+'255,.'+'025);'+_0x4f9c1c(0x5c8)+'shado'+'w:\x20in'+_0x4f9c1c(0x1d5)+'\x200\x200\x20'+_0x4f9c1c(0x478)+_0x4f9c1c(0x246)+'55,25'+_0x4f9c1c(0x48e)+_0x4f9c1c(0x64c)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x394)+_0x4f9c1c(0x680)+'{\x20bac'+_0x4f9c1c(0x57c)+'nd:\x20r'+_0x4f9c1c(0x246)+_0x4f9c1c(0x5d5)+'5,255'+_0x4f9c1c(0x3c4)+_0x4f9c1c(0x13c)+'-shad'+'ow:\x20i'+_0x4f9c1c(0x177)+'0\x200\x200'+_0x4f9c1c(0x262)+'rgba('+'255,1'+_0x4f9c1c(0x38e)+_0x4f9c1c(0x15a)+_0x4f9c1c(0x56d)+'\x20\x20\x20\x20.'+_0x4f9c1c(0x4ab)+_0x4f9c1c(0x342)+_0x4f9c1c(0x377)+'displ')+(_0x4f9c1c(0x31b)+_0x4f9c1c(0x4db)+'align'+_0x4f9c1c(0x431)+'s:\x20ce'+'nter;'+_0x4f9c1c(0x310)+_0x4f9c1c(0x496)+'\x20padd'+_0x4f9c1c(0x13a)+_0x4f9c1c(0x2eb)+'12px;'+_0x4f9c1c(0xf5)+'\x20\x20.sk'+'-card'+'-titl'+'e\x20{\x20f'+_0x4f9c1c(0x543)+_0x4f9c1c(0x1a3)+'n-wid'+_0x4f9c1c(0x4d3)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x394)+_0x4f9c1c(0x494)+_0x4f9c1c(0x362)+'rong\x20'+_0x4f9c1c(0x156)+_0x4f9c1c(0x3f7)+_0x4f9c1c(0x619)+_0x4f9c1c(0x2c8)+'ont-w'+'eight'+_0x4f9c1c(0x4dd)+_0x4f9c1c(0x23c)+'or:\x20r'+'gba(2'+_0x4f9c1c(0x2b5)+_0x4f9c1c(0x140)+_0x4f9c1c(0x21b)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x394)+'d.on\x20'+_0x4f9c1c(0x54a)+'ard-t'+_0x4f9c1c(0x149)+_0x4f9c1c(0x22d)+'g\x20{\x20c'+_0x4f9c1c(0x65e)+_0x4f9c1c(0x449)+'0f5;\x20'+_0x4f9c1c(0x11f)+_0x4f9c1c(0x2b6)+_0x4f9c1c(0x1cc)+'\x20{\x20pa'+_0x4f9c1c(0x55e)+':\x200\x201'+'2px\x201'+'0px;\x20'+_0x4f9c1c(0x11f)+'\x20.sk-'+_0x4f9c1c(0x491)+_0x4f9c1c(0xdf)+_0x4f9c1c(0x26e)+_0x4f9c1c(0x579)+_0x4f9c1c(0x5fc)+'opaci'+_0x4f9c1c(0x30d)+_0x4f9c1c(0x65f)+_0x4f9c1c(0x2a6)+_0x4f9c1c(0x210)+_0x4f9c1c(0x4d1)+_0x4f9c1c(0x33e)+'\x20\x20\x20\x20.'+_0x4f9c1c(0x1b6)+_0x4f9c1c(0x570)+'ispla'+'y:\x20fl'+_0x4f9c1c(0x64f)+'lign-'+_0x4f9c1c(0x209)+_0x4f9c1c(0x2c3)+_0x4f9c1c(0x372)+'gap:\x20'+'8px;\x20'+'paddi'+_0x4f9c1c(0x373)+_0x4f9c1c(0x226)+_0x4f9c1c(0x423)+_0x4f9c1c(0x424)+':\x2011.'+_0x4f9c1c(0x508)+_0x4f9c1c(0x11f)+_0x4f9c1c(0x2b6)+_0x4f9c1c(0x4ec)+_0x4f9c1c(0x4da)+'ex:\x201'+_0x4f9c1c(0x23c)+_0x4f9c1c(0x1d4)+_0x4f9c1c(0x246)+_0x4f9c1c(0x2b5)+_0x4f9c1c(0x140)+_0x4f9c1c(0xea)+';\x20}\x0a\x20'+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x465)+'t\x20{\x20d'+'ispla'+_0x4f9c1c(0x464)+'ock;\x20'+_0x4f9c1c(0x315)+'size:'+'\x2010px'+';\x20opa'+_0x4f9c1c(0x4b8)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+'h\x20{\x20p'+_0x4f9c1c(0x52b)+'on:\x20r'+'elati'+_0x4f9c1c(0x53a)+_0x4f9c1c(0x101)+_0x4f9c1c(0x614)+_0x4f9c1c(0x46a)+'ght:\x20'+_0x4f9c1c(0x29c)+_0x4f9c1c(0x63b)+_0x4f9c1c(0x285)+_0x4f9c1c(0x44e)+_0x4f9c1c(0x1b1)+'adius'+_0x4f9c1c(0xe0)+_0x4f9c1c(0x27a)+'ckgro'+_0x4f9c1c(0x1b7)+_0x4f9c1c(0x521)+_0x4f9c1c(0x625)+_0x4f9c1c(0x5d5)+'5,.07'+_0x4f9c1c(0x14c)+'rsor:'+_0x4f9c1c(0x5de)+_0x4f9c1c(0x372)+_0x4f9c1c(0x505)+_0x4f9c1c(0x1ab)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x3ea)+_0x4f9c1c(0x298)+'after'+_0x4f9c1c(0x539)+_0x4f9c1c(0x3bf)+':\x20\x22\x22;'+_0x4f9c1c(0x574)+'tion:'+_0x4f9c1c(0x5f2)+_0x4f9c1c(0x48c)+'\x20top:'+_0x4f9c1c(0x28e)+'\x20left'+':\x203px'+';\x20wid'+_0x4f9c1c(0x290)+'px;\x20h'+'eight'+_0x4f9c1c(0x20a)+_0x4f9c1c(0x44e)+'der-r'+_0x4f9c1c(0x1da)+':\x2050%'+_0x4f9c1c(0x67d)+_0x4f9c1c(0x57c)+'nd:\x20r'+_0x4f9c1c(0x246)+_0x4f9c1c(0x5d5)+_0x4f9c1c(0x48e)+_0x4f9c1c(0x24f)+';\x20tra'+_0x4f9c1c(0x2a7)+_0x4f9c1c(0x145)+'eft\x20.'+'2s,\x20b'+_0x4f9c1c(0x147)+_0x4f9c1c(0x3eb)+_0x4f9c1c(0x2ad)+_0x4f9c1c(0x11f)+'\x20.sk-'+'switc'+_0x4f9c1c(0x10a)+'a-che'+'cked='+_0x4f9c1c(0x469)+_0x4f9c1c(0x371)+_0x4f9c1c(0x63c)+_0x4f9c1c(0x5a3)+_0x4f9c1c(0x166))+('a(255'+_0x4f9c1c(0x4bf)+'157,.'+'25);\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x4f9c1c(0x10a)+'a-che'+_0x4f9c1c(0x3bc)+'\x22true'+_0x4f9c1c(0x48d)+'fter\x20'+_0x4f9c1c(0x53b)+'t:\x2015'+_0x4f9c1c(0x27c)+_0x4f9c1c(0x147)+'ound:'+'\x20#ff6'+'b9d;\x20'+_0x4f9c1c(0x11f)+_0x4f9c1c(0x2b6)+'field'+_0x4f9c1c(0x1e7)+_0x4f9c1c(0x615)+_0x4f9c1c(0x1b7)+_0x4f9c1c(0x521)+'255,2'+'55,25'+_0x4f9c1c(0x650)+_0x4f9c1c(0x432)+'order'+':\x200;\x20'+_0x4f9c1c(0x250)+_0x4f9c1c(0x2d4)+'ius:\x20'+'6px;\x20'+_0x4f9c1c(0x3f1)+_0x4f9c1c(0x548)+'eef2;'+'\x20padd'+_0x4f9c1c(0x13a)+_0x4f9c1c(0x497)+_0x4f9c1c(0x2c8)+_0x4f9c1c(0x503)+'ize:\x20'+_0x4f9c1c(0x441)+_0x4f9c1c(0x21f)+'tline'+_0x4f9c1c(0x65c)+'e;\x20bo'+_0x4f9c1c(0x55a)+'dow:\x20'+'inset'+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+_0x4f9c1c(0x625)+_0x4f9c1c(0x443)+_0x4f9c1c(0x4c6)+'\x0a\x20\x20\x20\x20'+_0x4f9c1c(0x4b6)+_0x4f9c1c(0x5a1)+_0x4f9c1c(0x5af)+_0x4f9c1c(0x2e2)+'ackgr'+'ound:'+_0x4f9c1c(0x671)+_0x4f9c1c(0x50c)+_0x4f9c1c(0x11f)+_0x4f9c1c(0x2b6)+'range'+_0x4f9c1c(0x37d)+'splay'+_0x4f9c1c(0x170)+_0x4f9c1c(0x27f)+_0x4f9c1c(0x1f6)+_0x4f9c1c(0x5a9)+_0x4f9c1c(0x2cf)+_0x4f9c1c(0x1e4)+_0x4f9c1c(0x1bc)+_0x4f9c1c(0x639)+'\x0a\x20\x20\x20\x20'+_0x4f9c1c(0x5fe)+_0x4f9c1c(0x204)+_0x4f9c1c(0x52a)+'ebkit'+_0x4f9c1c(0x59d)+_0x4f9c1c(0x221)+'e:\x20no'+'ne;\x20a'+_0x4f9c1c(0x437)+'ance:'+_0x4f9c1c(0x1ab)+_0x4f9c1c(0x585)+_0x4f9c1c(0x60a)+'0px;\x20'+_0x4f9c1c(0x448)+_0x4f9c1c(0x52f)+'x;\x20ba'+_0x4f9c1c(0x615)+_0x4f9c1c(0x1b7)+_0x4f9c1c(0x13b)+_0x4f9c1c(0x37f)+_0x4f9c1c(0x5bf)+'\x20\x20\x20\x20.'+_0x4f9c1c(0x2c5)+'ider:'+':-web'+_0x4f9c1c(0x678)+_0x4f9c1c(0x204)+_0x4f9c1c(0x119)+'able-'+_0x4f9c1c(0x679)+_0x4f9c1c(0x2a1)+'ight:'+'\x202px;'+_0x4f9c1c(0x63b)+'er-ra'+_0x4f9c1c(0x20e)+_0x4f9c1c(0x117)+_0x4f9c1c(0x22a)+'groun'+_0x4f9c1c(0x2b7)+'near-'+'gradi'+'ent(#'+'ff6b9'+'d,\x20#f'+_0x4f9c1c(0xdd)+_0x4f9c1c(0x32d)+_0x4f9c1c(0x1c2)+_0x4f9c1c(0x42b)+',\x2050%'+_0x4f9c1c(0x175)+'%\x20no-'+_0x4f9c1c(0x3f5)+_0x4f9c1c(0x259)+_0x4f9c1c(0x38d)+_0x4f9c1c(0x48e)+_0x4f9c1c(0x636)+_0x4f9c1c(0x4a2)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x4f9c1c(0x1d8)+_0x4f9c1c(0x4d8)+_0x4f9c1c(0x17c)+'t-sli'+'der-t'+_0x4f9c1c(0x5bc)+_0x4f9c1c(0x3a9)+_0x4f9c1c(0x25b)+'appea'+_0x4f9c1c(0x106)+_0x4f9c1c(0x65c)+_0x4f9c1c(0x168)+_0x4f9c1c(0x60e)+'6px;\x20'+_0x4f9c1c(0x448)+_0x4f9c1c(0x2c4)+_0x4f9c1c(0x163)+_0x4f9c1c(0x2a6)+_0x4f9c1c(0x5a6)+'-2px;'+'\x20bord'+'er-ra'+_0x4f9c1c(0x20e)+_0x4f9c1c(0x640)+'\x20back'+'groun'+_0x4f9c1c(0x18d)+_0x4f9c1c(0xdd)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x684)+_0x4f9c1c(0xdf)+_0x4f9c1c(0x26e)+_0x4f9c1c(0x579)+'1px;\x20'+_0x4f9c1c(0x315)+_0x4f9c1c(0x3a7)+'t:\x2060'+'0;\x20mi'+_0x4f9c1c(0x36b)+_0x4f9c1c(0x32f)+'8px;\x20'+_0x4f9c1c(0x109)+_0x4f9c1c(0x3b5)+_0x4f9c1c(0x58f)+_0x4f9c1c(0x452)+_0x4f9c1c(0x65e)+'\x20rgba'+_0x4f9c1c(0x198)+'238,2'+_0x4f9c1c(0x4a1)+_0x4f9c1c(0x56d)+'\x20\x20\x20\x20.'+_0x4f9c1c(0x2d5)+_0x4f9c1c(0x1de))+(_0x4f9c1c(0x1c6)+'h:\x2034'+_0x4f9c1c(0x282)+'eight'+_0x4f9c1c(0x2d8)+'x;\x20bo'+'rder:'+'\x200;\x20b'+'order'+_0x4f9c1c(0x474)+_0x4f9c1c(0x4f3)+_0x4f9c1c(0x27c)+'ackgr'+'ound:'+_0x4f9c1c(0x1ab)+_0x4f9c1c(0x1eb)+_0x4f9c1c(0x206)+'\x200;\x20c'+'ursor'+_0x4f9c1c(0x45c)+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x4f9c1c(0x3df)+_0x4f9c1c(0xdf)+'nt-si'+'ze:\x201'+_0x4f9c1c(0x5fc)+_0x4f9c1c(0x3f1)+_0x4f9c1c(0x166)+_0x4f9c1c(0x475)+_0x4f9c1c(0x571)+_0x4f9c1c(0x5b6)+_0x4f9c1c(0x3ff)+_0x4f9c1c(0x60f)+'g:\x202p'+'x\x200;\x20'+_0x4f9c1c(0x11f)+_0x4f9c1c(0x2b6)+_0x4f9c1c(0x4d0)+'err\x20{'+_0x4f9c1c(0x389)+'r:\x20#f'+'f7a93'+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x5e8)+_0x4f9c1c(0x3c5)+'\x20{\x20al'+_0x4f9c1c(0x638)+_0x4f9c1c(0x296)+'flex-'+'start'+';\x20bor'+_0x4f9c1c(0x3ac)+'0;\x20bo'+'rder-'+_0x4f9c1c(0x188)+'s:\x208p'+'x;\x20pa'+'dding'+':\x208px'+'\x2016px'+_0x4f9c1c(0x67d)+_0x4f9c1c(0x57c)+'nd:\x20#'+'ff6b9'+'d;\x20co'+_0x4f9c1c(0x255)+'#fff;'+_0x4f9c1c(0x423)+'-size'+':\x2011.'+_0x4f9c1c(0x508)+_0x4f9c1c(0x315)+'weigh'+'t:\x2070'+_0x4f9c1c(0x1ef)+_0x4f9c1c(0x276)+_0x4f9c1c(0x5de)+_0x4f9c1c(0x372)+_0x4f9c1c(0x11f)+'\x20.sk-'+_0x4f9c1c(0x142)+_0x4f9c1c(0x4dc)+_0x4f9c1c(0xde)+'ter:\x20'+'brigh'+_0x4f9c1c(0x2fc)+_0x4f9c1c(0x59a)+_0x4f9c1c(0x5ac)+_0x4f9c1c(0x243));window[_0x4f9c1c(0x4df)+'entLi'+'stene'+'r'](_0x5ecc8b[_0x4f9c1c(0x67e)],_0x183bd5=>{var _0x51b5b7=_0x4f9c1c;if(_0x5ecc8b[_0x51b5b7(0x1e9)](_0x183bd5[_0x51b5b7(0x395)],_0x5ecc8b[_0x51b5b7(0x48a)])){if(_0x5ecc8b['JtwpO']!==_0x51b5b7(0x685)){var _0x3559a5=_0x30b80e[_0x51b5b7(0x410)]['split']('|'),_0x58f7c5=0x1eb0+-0xa75+-0x143b;while(!![]){switch(_0x3559a5[_0x58f7c5++]){case'0':var _0x33c072=_0xe5bb22['creat'+'eElem'+'ent'](_0x30b80e[_0x51b5b7(0x4de)]);continue;case'1':var _0x5e4cb3=_0x4931b0[_0x51b5b7(0x3c0)+_0x51b5b7(0x1f3)+'ent'](_0x51b5b7(0x5cd));continue;case'2':if(_0x51bcb1){var _0x3d2bd8=_0x3b4419['creat'+_0x51b5b7(0x1f3)+_0x51b5b7(0x2bb)]('small');_0x3d2bd8['class'+_0x51b5b7(0x468)]=_0x51b5b7(0x5d0)+'nt',_0x3d2bd8[_0x51b5b7(0x14a)+_0x51b5b7(0x1be)+'t']=_0x5b91d7,_0x33c072['appen'+_0x51b5b7(0x169)+'d'](_0x3d2bd8);}continue;case'3':_0x33c072[_0x51b5b7(0x45f)+'Name']='sk-la'+_0x51b5b7(0x30b);continue;case'4':_0x33c072[_0x51b5b7(0x14a)+_0x51b5b7(0x1be)+'t']=_0x213641;continue;case'5':return _0x5e4cb3;case'6':_0x5e4cb3['appen'+'d'](_0x33c072,_0xd37a45);continue;case'7':_0x5e4cb3['class'+'Name']=_0x30b80e[_0x51b5b7(0x613)];continue;}break;}}else _0x183bd5[_0x51b5b7(0x45a)+'ntDef'+_0x51b5b7(0x22c)](),_0x2bc86f();}},!![]);var _0x1efef1=document['creat'+'eElem'+'ent'](_0x5ecc8b['OTQCz']);_0x1efef1['style'][_0x4f9c1c(0xe7)+'xt']=_0x4f9c1c(0x2d2)+_0x4f9c1c(0x64d)+'ixed;'+'top:1'+'2px;r'+'ight:'+'12px;'+_0x4f9c1c(0x2d9)+_0x4f9c1c(0x2cb)+_0x4f9c1c(0x309)+_0x4f9c1c(0x4e4)+_0x4f9c1c(0x509)+':poin'+'ter;w'+_0x4f9c1c(0x101)+_0x4f9c1c(0x128)+'heigh'+'t:26p'+'x;opa'+_0x4f9c1c(0x4b8)+_0x4f9c1c(0x1f2)+_0x4f9c1c(0x134)+_0x4f9c1c(0x5dd)+_0x4f9c1c(0x4cb)+'ty\x200.'+_0x4f9c1c(0x11a)+'inter'+_0x4f9c1c(0x656)+_0x4f9c1c(0x3c1)+_0x4f9c1c(0x397)+'lter:'+'drop-'+_0x4f9c1c(0x2e1)+'w(0\x200'+'\x204px\x20'+'rgba('+_0x4f9c1c(0x333)+'07,15'+_0x4f9c1c(0x1ac)+'))',_0x1efef1['inner'+'HTML']=_0x4f9c1c(0x445)+'viewB'+_0x4f9c1c(0x15e)+'\x200\x2024'+_0x4f9c1c(0x133)+_0x4f9c1c(0x514)+_0x4f9c1c(0x16a)+_0x4f9c1c(0x21e)+_0x4f9c1c(0x624)+_0x4f9c1c(0x66e)+_0x4f9c1c(0x396)+_0x4f9c1c(0x573)+'5\x200-2'+'.5\x201.'+_0x4f9c1c(0x388)+_0x4f9c1c(0x461)+_0x4f9c1c(0x165)+_0x4f9c1c(0x486)+_0x4f9c1c(0x2fa)+_0x4f9c1c(0x4e7)+_0x4f9c1c(0x611)+_0x4f9c1c(0x2b2)+_0x4f9c1c(0x418)+_0x4f9c1c(0x493)+_0x4f9c1c(0x42d)+_0x4f9c1c(0xfb)+'#ff6b'+_0x4f9c1c(0x419)+_0x4f9c1c(0x47b)+'-widt'+_0x4f9c1c(0x1ad)+'\x20stro'+'ke-li'+'necap'+'=\x22rou'+_0x4f9c1c(0x173)+_0x4f9c1c(0x47b)+_0x4f9c1c(0x41c)+'join='+_0x4f9c1c(0x633)+_0x4f9c1c(0x332)+'circl'+'e\x20cx='+'\x2212\x22\x20'+'cy=\x221'+_0x4f9c1c(0x51c)+_0x4f9c1c(0x429)+'\x20fill'+'=\x22#ff'+'6b9d\x22'+'/></s'+'vg>',_0x1efef1[_0x4f9c1c(0x668)]=_0x4f9c1c(0x3bb)+_0x4f9c1c(0x3fa)+'r',_0x1efef1['onmou'+'seent'+'er']=()=>_0x1efef1['style']['opaci'+'ty']='1',_0x1efef1[_0x4f9c1c(0x4a0)+_0x4f9c1c(0x632)+'ve']=()=>_0x1efef1[_0x4f9c1c(0xfd)][_0x4f9c1c(0x4cb)+'ty']='0.5',_0x1efef1['oncli'+'ck']=_0x1cab95=>{var _0xc1aa64=_0x4f9c1c;if(_0x30b80e['weGaP'](_0xc1aa64(0x2b4),'LpErd'))_0x1cab95['stopP'+_0xc1aa64(0x3f4)+'ation'](),_0x2bc86f();else return _0x5e1ae2['warn']('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0xc1aa64(0x2d0)+_0xc1aa64(0x1ed),_0x5aa61d,_0x2bda60&&_0x20c98d[_0xc1aa64(0x4c0)+'ge']),null;},document[_0x4f9c1c(0x391)]['appen'+_0x4f9c1c(0x169)+'d'](_0x1efef1),_0x363723(),requestAnimationFrame(_0x717f3d),console['log'](_0x5ecc8b['YMEzR'],_0x33a6d4[_0x4f9c1c(0x1a7)]);});})()));
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
