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
function _0x25db(){var _0x679196=['q3jVC3m','DdOGnZa','CNnVCJO','CJOGi2y','igzPBgW','ywn0A0S','ihDOAwm','Ec1ZAge','y2D1wfC','Dg87zMK','idi2ChG','DgvTlxu','ywrPDxm','AY1Jyxi','zw50','ig9Wywm','vg5fC2K','zM9YBxm','CYbpsgu','C2STy2e','m3WWFdi','vuzKwwu','DgvYo3C','yMfJA2C','DxDTAW','yNv0Dg8','DezTtNC','BxjSCvG','y0zRvK0','igfWCgW','uKXxv2i','ihn0CM8','ywXPz24','y2fWDhu','mZz2CLLXt1q','EYbMB24','A2v5C3q','DgvYigm','DgvZDa','ieLZr3i','DMP2CLe','yxbWBgK','CLvNEfy','C1rcvfu','icmYmJe','veLsALy','ChG7ih0','yxnLBgK','y2vSzxi','lwHVCa','zZOGnNa','A0DsAMK','zwCGzMe','DgG6ida','B24Gzxy','ywnPDhK','qw5SB3K','lwnHCMq','lwjHBNi','q09MDxe','z0fXz0C','BwvZC2e','BgvMDa','BerPzsK','ih0kica','uwf1AfK','lwjVEdS','lc4WnsK','mtr8oxW','Cg9ZAxq','DhLWzq','zw51ihi','AxrJAa','DgvYoYa','Bw4TAa','B3qGBwe','zw4GDg8','y0n5rxa','CYbnB3y','ndC0odm','zcbJAg8','CZOGy2u','phn2zYa','u3bHy2u','B25JBgK','iL0GEYa','BYb0Agu','ieaG','nsWYntu','C2L6ztO','zM9UDc0','nYWWlJG','zw5HyMW','nsWUmdu','DZOGAw4','ie1VDMu','rwXhu2i','EYbIywm','zciVpJW','DgLKzs4','Ec1OzwK','BwLZyW','BhKGkhi','wMvYB2u','idrWEdS','EgzKwNm','zxrL','Eu1XqKS','ww95wMi','oYbHBgK','ywrIBg8','C1LfDgC','ignHBgm','vMLZDwe','EKnmD2G','CgfKzgK','Fdn8mNW','sLDTDfi','msWUmZy','zwvMmJS','DgG6idu','B3G9iJa','idjWEdS','sw5ZDge','BMq6ihq','B3rZlG','oIbYz2i','DgDHv20','B2fKzwq','Cg9Uj3m','nJaWia','v01ligK','zsaOt0G','u1nRwMK','zhbY','tKXdsee','BNrLBNq','kdeWmhy','v3D5s2W','BgfZDeu','EdSGAgu','DM5swxG','BgW+','ifvxtuS','DMu7ihC','DxjDifu','oYbMAwW','AwvZlG','CMvWBge','zw50kcm','mJCYmdG4nwn1yKXnzG','s1Lmv1e','lJq1oYa','DgXL','AMjYBKy','zxrmyLq','q1LjvMi','uMvJDa','C2vSzwm','B3nL','yuvUCem','vw5IwKS','Fdj8mxW','zg50Ahm','t1vsx18','lwXPBMu','DgfIihS','CI1ZzwW','A3jyD0C','oIbPBMG','AfTHCMK','ide0ChG','C2v0uhi','yw5ZzM8','DMfSDwu','BLbSyxq','vMfSDwu','AwvKigm','yxjPys0','qM90Dg8','C2z2BuC','ldi1nsW','BMvHCI0','B2rL','C2STzMK','iJeYiIa','oJa7D2K','oYbWB2K','C3r5Bgu','s2v5ra','vKPUELG','Ag9VA04','yKHwseG','C2HVB3q','uhrkuNq','lwzPBhq','EfD0Dfi','BwvKicG','mdSGy3u','mtrWEdS','yMX5lum','AvbSt2y','C3bSyxK','BgLUzvC','zwXHDgK','Cg9PBNq','zhbTvu4','nZCZnZq4EM5Myxzc','lc43nsK','CM9Rzs0','zMyP','EYbJB2W','zgvSzxq','CgfYC2u','zxiTzxy','BI1PDgu','BI1SB2C','icaGyMe','DxjH','AfjAugC','nMvLzJi','CNjVCG','BIbZAwC','ocK7ih0','B24UvgK','tMfTzq','ohG5mc0','C2zVCM0','B2LSicG','ChjLDMu','rfH1DMO','u0rVwwG','rLbtigm','Dw5Kzwq','wvDSEem','Bgf5oIa','z3LIywm','lNnRlxm','y2TLzd0','BwXzt0S','BML0igy','C2STC2W','yxj0lG','mJu1lde','mdSGFqO','Bg9HzgK','r1nOz28','icaGkIa','AxHLzdS','lwfWCgu','zgrPBMC','AxrPywW','zgLUzZO','jsbUBY0','ANvArMK','mhG2mda','nhWWFde','v2vHCg8','B2nRoYa','qMz4CNG','igvYCG','CNr1Cca','rwjNEu4','ihSGCge','txvODNC','B2TLpsi','sNvTCfq','B3uU','EMu6ide','zcWGi2y','BMu7ihm','DgGUsw4','vuvjwuG','Cg9W','idHWEdS','Bg9Hzgu','oIaIiJS','CZOGmty','A0jkEwK','r01dtxe','ihSGzM8','zgvYlxi','B2XVCJO','zxj2zxi','mJb8nxW','Dw5RBM8','oI13zwi','zc5VBIa','CMfPC2u','yxvSDa','mZuSmJq','BMn0Aw8','vMvJyNy','zuv4Ca','zxiGEYa','zxj5idi','DdOGmtu','yw1Hz2u','oIaZmNa','AxmGyNu','igjHy2S','iL06oMe','r2XNAhq','AwrLCG','C2Xiqw0','y29SB3i','D2L0Aca','yMvNAw4','nNb4ida','C01PA3G','CI51As4','EtOGyMW','qwrIBg8','AeDWtgm','DMfS','CMLUz3m','q0Hfvwu','wM9tuu4','qMXVy2S','Awy7ih0','DgLVBJO','CIb2ywW','ChDRBNy','CYbLyxm','DhK6ic4','CMrLCI0','zg93BIa','ywrKAw4','uKvkseK','oIa4ChG','s2v5uW','zgfTywC','CMqTAgu','Bw92zw0','ChG7iha','B3zLCIa','u2fMzxq','vM5TCxC','BgPMDMi','C2HHzg8','A2DYB3u','Dg9Y','x19tquS','D0jSDxi','ntuSmJu','lc4WocK','De1gsMO','igP1Bxa','EerVC3C','CfPPrKO','ue9TDNG','nMnMuw9myW','v3biy0W','zYbJyw4','oIbZDge','ihWGz2e','Bg93oIa','ntaLktS','ihSGywW','z3jHDMK','mciGCJ0','r3jHDMK','BM93','ideYChG','ihnOB3q','EI1PBMq','l3jHCgK','zgDrrwq','sw5PDgK','C2STyNq','ndSGFqO','zsXTB24','AxrLiee','CMvSB2e','B290zxi','AxrLBxm','lwv2zw4','A1DtDwy','ihSGAgu','y2vUDgu','Axr5oIa','qujet3m','mNmSigi','DdOXmda','BMvS','ic5TBI0','iezquW','lK92zxi','Bw9fEha','B3nLihm','mtaYmJa4v1nwqM9j','B2XVCJS','twPYAfG','BtOGnNa','lxK6ige','zwL5DwK','y2XKrNG','ihWGBw8','nxWZFdq','lxjHzgK','ywrKrxy','mc41o3q','AwvSza','kdeUmsK','zsWGDhi','y2HdB2W','CMvU','oIb0CMe','weLqC2C','v3jHCha','FqOGica','EdSGBwe','ug9ZAxq','Aw9FnZi','re5Iug0','AdOGmZq','D2L0Ag8','qsblt1u','BgLUzvq','igjVCMq','DLDkt08','AwnRihm','B25PBNa','u3bLzwq','z24Ty28','C2HVD24','zvzHBhu','Bw4TBwe','s2LSBgu','B3jKzxi','B3vUzdS','BMf2','zw50zxi','y2XLyxi','nsaWlti','BhvLCY4','uePVsNO','B24Oks4','CgfJAxq','qxbWBgK','ntuSlJa','Aw5NoIa','lxnOywq','zxjZy3i','zxzLBNq','yxvSDca','Aw5JBhu','lxrVCca','r0Xgt3K','EhfRsxu','CwXOtMC','zMDzBxq','mNb4ide','ifvjiIW','thPgz2K','DgvYoIa','EsbKzwy','yNjPz2G','qKX6wvy','Bw4Ty2W','lsbVDMu','nIaXoci','zwqGyw0','z3LowK4','DhjHBxa','sfrnta','lc4WncK','idqGnc4','ChG7ihC','mcaXChG','oYbOzwK','zgvZyW','v3zcqNa','Dgv4Dem','igj1AwW','DhLqy3q','yxrPB24','zsbZzxi','t1LoqKG','z2v0q28','y3K9iJe','rKXpC1y','Eca2ChG','uffSvvy','C2DSsNe','vu1qt1m','DgG6idK','B3bLBG','y3jVC3m','DdOGmJG','ihbVC2K','kdi0nIW','igrPC3a','B2STCMu','lwfWCgW','mcWWlJC','DML0Eq','DKvvC1i','BNrLCI0','lKXVy2e','ic5ZAY0','y2HtAxO','CKzlCKi','swTZywi','mhGYnta','B29Rihi','BI1TywK','idaGmca','oYbWywq','zhDnAfy','ihSGzMW','BI5MAxi','C2fMzu0','Fde1Fdm','zxH0','zu12rva','nIa2Bde','zcbZzwu','4Ocuig5Via','wM9Stwu','y3jLBwu','D2fYBG','Bw92zvq','AwDUlxm','sw5MAw4','zxjSyxK','lc40nsK','nxb4oYa','BwuG','mdb2DZS','yw5LBca','yNbAqKu','z3jHzgK','zxrLy3q','AgvPz2G','y1Hsuw8','D3DvBMC','Awq7iha','lxnHBNm','ys11Aq','ihDLyxa','ndySmJm','BdOGAw4','rgfeAfi','zsb0CMe','svvsu0C','yxv0BY0','Aw4Sihq','Bgv4oYa','C3bLzwq','idaGmJq','mtD8mhW','zwv6zsa','ndGZnJq','i2zMnMi','EYbKAxm','lNnRlw0','t3zLCNC','zuvSzw0','uK1c','A2vizwe','Dxm6ide','Aw50zxi','u0fgrsa','ywXSzwq','iezPCMu','Fdj8nxW','nNWX','igvMzMu','BYb7igq','mtbWEdS','BM9Uzq','AhjbC1O','yMT3EeC','B2vZig4','B2f0Eq','zxG7ige','ALbfCwK','zxiTCMe','Aw5KzxG','C3bHBG','B1jJzNu','DhKGmc4','Fdv8mhW','zMLSBd0','Agf0igq','vg5Irhm','mcWWlJy','ltiUnsa','idqTnc4','qxnoteu','qw1Tqvm','zvKOmtG','B25LigK','q29TyMe','wwPdz2C','y2TNCM8','mJu1ldi','ys5RB3u','oYb0CMe','psiJzMy','zNHgyva','z3jVDw4','u3rHDgu','v2P5Agu','t0HLywW','CM9Wlwy','D2vPz2G','zMXLEdO','mxb4ihi','v2HwugS','zvjHDgu','quXlrgm','nxW0FdC','yMvIBhq','A3nty2e','oIbJB2W','y2HPBgq','r2nhtfq','Bw4TCge','igf1Dg8','yuvNwKu','C2STy28','ChG7igy','rvHqxq','DxjZB3i','mNb4oYa','BgfIzwW','BKPYzge','zMy2yJK','mdi1ktS','Axb0kq','Aw5Zzxq','Dc1ZAxO','zwfSDgG','y2LYy2W','rfPiB28','yxGOmJu','C2STDMe','BcbKCMe','zJmY','oIaXoYa','u2fMzsa','zsbJEd0','rgLZywi','v0ftrca','zhjVCc0','B29RCYa','CIiSici','y3v1D0y','BgLKzxi','rM9Yy2u','De5Vzgu','sfzWrLO','lxnLCMK','vvfIree','ugn0','BsbYAwC','DgvTCgW','Fdv8m3W','DgG6idi','DhLSzq','igvUDgK','DxmGywm','AgvSza','EYbMAwW','yMTPDc0','B0jeExu','yxKGB24','BMqGBwe','oIaXms4','ieTLzxa','lMrSBa','BNrezwy','y3vYC28','u0fgrq','EtOGz3i','zwXMoIa','igjVEc0','C2HPzNq','AfDXr08','zsb7igy','x19ZywS','icaGzgK','mIaXmK0','DxjDigG','icaGica','yxa6ide','CMDIysG','y3KGB24','AxLOu2S','zwjRAxq','AxnmufO','Bw8GDg8','oYbMBgu','sM5PvLK','igzVBNq','yM90Aca','lxnPEMu','ntmZmdKZmfnRAMnVEq','CKDiwMG','pc9ZBwe','yMDmBMi','psjTBI0','C2f0Dxi','Bg9NBY0','q2zSENu','veTJzwW','Aw9U','B3zhvNu','yw5JztO','DgvJDgK','tMHhA1C','lYbhCMe','mJm4ldi','BMT4t1C','nsK7igi','lIbvC2u','Awr0AdO','zMLsvNe','Dw9vDwC','nYWUmJG','Bg9N','re9nq28','z24TAxq','BsbJzw4','Aw46ida','z1vIzNq','Aw4GC2e','mJqYlc4','z2fWoIa','BwvsDw4','kYbtCge','quTOsxq','zgL1CZO','owqIihm','A0fcDgq','C3rYB2S','zxi7igC','ChG7cIa','oJa7EI0','vw5PDhK','s09vAuq','icbIywm','nhb4oYa','AMX5q3K','mcWWlJu','y2HLy2S','CI1Yywq','ywqGD2G','Bcb7igq','i2zMyJm','mtfWEca','yM9Yzgu','zxqGmca','CIdIGjqG','Bg9Y','yMHVCa','yM90Dg8','u2PQwvO','EeLUCgi','EuvUz2K','rg5Lsxy','zw50tgK','zMLuzMG','whPfCfu','ida7igi','sgr2yLi','Ag9VA0m','Chbzvuq','C2STC3C','AMPgz2K','ig5VBMu','ChG7igi','Dgv4Dei','mNb4ksa','igXLyxy','CMfUC2K','Dgv4Dee','yxbWzw4','qxnLtgS','DgHVzca','ig1PBIG','z2v0','CxvLCNK','BgvUz3q','vhbrDfy','AwrHDgu','ltqTnY4','Eg1NCKq','odiPoYa','ywLYlG','rLzfvK4','B3nPDgK','lM1Ulxa','EtOGzMW','igTVDxi','Cc1ZAge','ztSGyM8','CY1Zzxi','zxi6oI0','igq9iK0','khjLBg8','lcbPBNm','r2fdufm','CMfUC3a','zMLSzw4','zxzLCNK','Fdv8n3W','ihjNyMe','nYWWlJC','igzSzxG','t0zgigi','CMvMAxG','EsaUmZu','m3W2Fdi','CM9Szq','zgLZCgW','CNrPzgu','BM9szwm','Aw9F','kg92zxi','idmWChG','ihbHzgq','DhKGDMe','uMvJB2K','zsb3zwe','DMLZAwi','AuLdzMq','mhWZFde','Dw5PDhK','ChGPoYa','rwfJAca','AKnrtui','DgnOihq','zwz0ic4','yxrLvge','AxnPyMW','A2L0lxm','ihrOzsa','CKHiDeW','CgfYzw4','C3DPDgm','y1zuDue','uMfWAwq','oYb9cIa','v2LKDgG','Awr0Aa','zIXZExm','DhmGCgW','z1fxquu','vvDnsW','CMvZDg8','AM9PBJ0','ihDPzhq','ldiZocW','zMLSBfm','oYbQDxm','nwmWidm','DhvPyvG','Eufkz3q','mNb4o3i','ndHWEcK','D1H5Cuy','Dg87ih0','mwzYksK','oIbHyNm','zdSGyMe','s2v5C3q','CMeTA28','q0fovKe','Bw1VifS','tgLZDa','lZ48l3m','y29SCZO','vvjbx0S','u3fAqwO','AhnqB3e','D3jPDgu','C2fMzq','zgTPDa','ztSGD2K','BgLUzwm','BgrKqxK','BhrOige','oIa0ChG','BMC6idq','zcb7igi','DcbZDge','ywX0Ac4','ihWGrvi','oIaWoYa','ihn5C3q','rhbSDNK','ztOGBM8','CNq7igC','ufmGDw4','mdCSmtu','CM91BMq','BNnPDgK','B250zw4','yMfYlxq','BwvUDca','Bhv0ztS','B2r5','r2Lfr2K','DxqGDgG','ihbSywm','ig1PBM0','ihbVAw4','icaGlNm','A2v5zg8','zw50CW','mJvWEdS','u2vNB2u','mNWXmNW','idK5osa','mZm5otm3ngfzyxrQtq','zxmGEYa','CM9WywC','zenOAwW','BwLKzgW','B2reAwu','iJeUnsi','tgDWwwC','yMLJlwi','oYbMB24','AwDUyxq','BNqGAge','DMLZDwe','B2XuD1y','rMLLBgq','Cuf0zK8','rxHW','A3nqB3m','B3b0Aw8','BNrLCJS','nMi5zci','uu5QDu8','idrWEca','zsb2ywW','CMLKoYa','y3jLzw4','CZPUB24','CMXHEsa','CMvHzey','zMLSBfq','tg9Hzgu','B3i6ihi','AwXnB3q','mtu3lc4','lJv6iIa','DgLKzvC','sgvHBhq','BePus3y','icaGlM0','BhmGDgG','icaG','EKf4zLC','vxLNEMq','Dg9Nz2W','tM8Gu3a','DgXPBMu','B3n0zMK','ysGYntu','nZTWB2K','yMX1CG','C2vSzwe','B246igW','Ag9VA0C','sfDSA3O','BerPzsW','rgfUz2u','AwXLzdO','tfLizwK','AwrLihS','oYb1C2u','tgvNAw8','ChG7igG','uMf0zq','Fdr8m3W','A291CI0','Dhj1zq','mJSGC3q','CYbZChi','ohWXmxW','DhjHBNm','D2LKDgG','B250lxm','AtmY','lxbHCMu','vvDnsYa','zwfK','DdOYnNa','mdSGyM8','u2zwBKe','vg90ywW','zwfKEs4','DYGWida','sxnhCM8','oYbJB2W','mJqWiey','lMP1Bxa','DhjPyNu','qvPPA2e','yM9KEq','CJSGzM8','oIa5oxa','igjHBIa','zwn0oIa','C2v0x3q','zJDHotm','igH1CNq','ChGGDwK','Bw4TDge','AguGzNi','svHSEvC','lMXHC3q','z2v0sxq','AxrPyxq','Bgv4oIa','y3fwzgq','B2LS','ieDLDfy','ig5VigG','w3nHA3u','ignLBNq','qxbhBLG','zg93BG','4Ocuig92zq','mhb4oYa','rw5NAw4','Ahq6ida','CMLZAYa','y2XHC3m','EtOGmdS','B25TB3u','AwXS','C2STy3q','oIbJzw4','qLriAwK','zxG6ide','BsbSzwy','EdSGywW','y29TCgW','B3vUDgu','Dxm6idy','Bg9JAW','zvbSDwC','vhn0DNy','EhjOEKi','sgvPz2G','zgvZ','tfrxq3i','zw1ZoIa','mJn8nhW','ys1JAgu','C0nYs0C','lc4YnsK','Bw91C2u','oIa1mcu','zxjZ','tw92zq','jsK7ic0','BI13Awq','mNWWFdq','CdOGmti','zgL2','nsK7iha','zwLUC3q','zMLUza','z09kvvO','B3C6igK','Aw1Llca','B25ovK4','igv4Axq','ndvoELL4uM8','y3qGB24','Bwf4','Avnqz3e','BMuUqxa','zNbZ','ldePoWO','ktSGBwe','qvzQsKi','B3zLCMW','Fdb8mxW','l1jnqIa','wxfHsue','rwHyzhq','ywnRz3i','ltjWEdS','BhrO','EgLxqwm','oIbMBgu','DMLLD0i','rhzpuK0','r1bruw8','ksaXmda','zwXK','Bgf0zwq','r29Kie0','z2fTzuW','zhrOoIa','ihSGzgK','DhvYyxq','mhb4lca','lJjZoYa','uIb2ms4','DgvY','DhjHy2S','AxvZoIa','zMLLBgq','u2vSzwm','ohb4oYa','Be1VDgK','ihSGD2K','DgjdyKS','zMvNv3m','CgXHEtO','AwDUlwK','ihWGC2G','BwjkrLO','C3rPBgW','CM9Rzxm','C3rLBMu','mcbOB28','lJuGms4','wvvLsK4','ifTfwfa','CLvwtuu','B246ihi','oMHVC3q','jYb0Agu','zu5dBMe','ihrYyw4','zxi6ida','tKTxv2i','zwLNAhq','zw1LBNq','Fdj8nNW','zdOGi2y','CM9ZC2G','BMq6ihi','uM5Hy08','mJuPoYa','EdSGB3u','r0rHEeO','yw5LBc4','CMuGkfm','Fdn8mG','tgvMDca','B3vUzca','C3rVCfa','igjHBM4','DgHLihC','mtySmc4','mxb4ida','DdOGmZq','icaGic4','AcbVBMu','EdSGyMe','BwTnsNO','C2v0qxq','yxK6igy','oYbIB3i','tuLtu0K','B1jLy28','ic8GDMe','idi0iJ4','oJiXndC','lc4WnIK','BNqTC2K','sxPpu0C','ksaWida','BguGAwy','sNvTCca','mtGGnIa','y2fSBa','B25SEsW','C3bSAxq','BgLJyxq','yuf2ufq','tefnwwC','CMfKAxu','q2TkvKm','igDHCdO','A2L6EMu','BgWGBwu','y29PBa','oYb3Awq','zc10Axq','zg9JDw0','BI1JBg8','Dcb7igq','A3ndChm','igLMig0','BMTsA0e','zfDnD3m','z2jHkdi','zwfWB24','zJzIowq','tKPYt2e','BI1JB2W','ide2ChG','Dw1UoYa','DLjMv1a','y2f0','C2fRDxi','z2uUiei','tw92zw0','zxnJ','n3WXnNW','lIbuDxi','lcbJywW','DgL0Bgu','CMfUz2u','lJa4ktS','wuXxD0S','AgfPCG','mtSGBwK','nJiWChG','Ag9VA3m','zejRrwy','u0j3qMi','sefywvO','idGWChG','lxnPEMK','Bg9Hzca','oIaXnha','qw9nyM4','cIaGica','igXLzNq','CMfWAwq','y3Pswuy','oc00lJu','C21HBgW','tu9WDwq','y2fWtw8','v2vItw8','icaUC2S','ywXSihq','sgTQtw0','B3nLihS','B2rLu3q','wNjYzNm','C2XPy2u','nc00lJu','Aw5NicS','CvfgwxO','EdSGyM8','ChGGmdS','mxb4oYa','AYbVBI4','EdTVCge','yxjNzxq','igfUzca','u2fRDxi','Bg9Hzc4','mcaWida','uMDru0i','B1Hou0i','AcaTidq','zNvSBhm','twLZyW','ANvTCfa','zM9YBtO','Aw5Mqw0','ywqGDg8','nNb4oYa','wxfUrwC','ldeWnYW','z2LMEq','z29KrgK','EuffA3C','oIbWB2K','zMLSBcW','yxz4vMC','oxW4Fdm','CMvHzhK','ms4XlJa','oIbKCM8','mhWZFdu','q29SB3i','oYbKAxm','CML0zxm','DhjVA2u','DtmY','qvj1tfe','y0TqwhG','A1LdqKe','y3jLyxq','odG0ofnIzMvJAa','qunuAYa','igzVCIa','Ewz6ywC','ywXSig8','sM9lt0C','mJu1lc4','C2f2zq','y3nZvgu','ignVB2W','igHVB2S','ndSGBwe','AwDODdO','ihjLBg8','nsKSida','D1vusLy','Aw5WDxq','zevsuhi','nsK7ih0','lxnSAwq','mteZndi0ugDlAePJ','CI52mq','AguGDxm','B3vUzdO','Ag9VA1a','zcbNCMu','A2uTBgK','zxjYihS','zMDTvNG','lMLVig0','y29Kzq','CMvWzwe','zhjov2m','zw50rwW','mtSGyMe','zxmGB24','uJOG','C2STBwi','lwrPCMu','yw1L','BfjHDgK','igHLAwC','iNjVDw4','BgLNBG','zxjYB3i','oYbVCge','iokaLcb0zq','Acb7iha','C2v0ida','CMLNAhq','D2jPuNa','DMvYihS','u2L6zq','AxmGAg8','mxW0','ruHTzha','zw50CZO','y2fWu2G','Aw5Uzxi','B3bHy2K','yxjKlxq','CJOGCg8','Dw5KoIa','DMCGEYa','ida7igm','D2TxBuW','uunQsNe','z2v0rwW','ztOGmtm','BIb0Agu','mJzWEdS','uxnPquG','iduWjtS','BwLUkdq','icnMzJy','BhvYkdi','A2zYzxq','BM9tChi','yxb0Dxi','yMfJA2q','CZOGoha','CMDPBI0','txn4vMq','vKzjBNu','DxjDig0','yw5Jzs4','zgv2Awm','uNvUDgK','psjYB3u','rNjHBwu','CJOGDgG','DhKGjq','Aw9FmZa','BM9UztS','qu9Sz2m','DdOGnNa','BwrLC2m','icbIB3G','zMjlsLi','oxnMtwzQBW','mJyZouvPzNbmyG','CIbNyw0','odbWEcW','sg9VAYa','zdOGBgK','t1nOB28','Ee1uCgW','yMeOmJu','A29pwhu','C3rLCa','ignVBg8','BhvTBJS','zw50oYa','lxDPzhq','DKrXzfu','ktSGFqO','DgXLCW','CZO6lxC','sePYtwO','v1rnsg0','rgfTywC','z29K','phnTywW','mhW2Fdm','ywrK'];_0x25db=function(){return _0x679196;};return _0x25db();}function _0x33fd(_0x5ea52f,_0x2648b4){_0x5ea52f=_0x5ea52f-(-0x99a+-0xa8e*0x2+0x1f3f);var _0x4ca17e=_0x25db();var _0x3078ec=_0x4ca17e[_0x5ea52f];if(_0x33fd['weWWnN']===undefined){var _0x1ac070=function(_0x5e28a7){var _0x19be76='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x481388='',_0x32f51e='';for(var _0x1ca044=0x1388+-0x2*0x70+0x18*-0xc7,_0x4f8ae0,_0x2245af,_0x360b2e=0x64b*0x1+-0x1b75+0x152a;_0x2245af=_0x5e28a7['charAt'](_0x360b2e++);~_0x2245af&&(_0x4f8ae0=_0x1ca044%(0xdc5+0x2358+-0x3119)?_0x4f8ae0*(0x2171+-0x158*0x9+-0x1519)+_0x2245af:_0x2245af,_0x1ca044++%(-0x1*-0x32+0x118e+0x4*-0x46f))?_0x481388+=String['fromCharCode'](-0x1d0f+0x20b*-0x11+0x40c9&_0x4f8ae0>>(-(-0x2*-0x6c9+-0x15b3+0x1*0x823)*_0x1ca044&-0x215+0x1ebb*0x1+-0x1ca0)):0x911*-0x2+-0x379+-0x159b*-0x1){_0x2245af=_0x19be76['indexOf'](_0x2245af);}for(var _0x10fdce=0x121f+0x6d*-0x5b+0x14a0,_0x334fc7=_0x481388['length'];_0x10fdce<_0x334fc7;_0x10fdce++){_0x32f51e+='%'+('00'+_0x481388['charCodeAt'](_0x10fdce)['toString'](-0x5*-0x81+0x2068+-0x22dd))['slice'](-(-0x51b*-0x7+0x13bc+-0x3*0x127d));}return decodeURIComponent(_0x32f51e);};_0x33fd['HMLfmP']=_0x1ac070,_0x33fd['FIXzNf']={},_0x33fd['weWWnN']=!![];}var _0x2ef099=_0x4ca17e[-0xd3e+0x1*-0x1061+0x1d9f],_0x1f2843=_0x5ea52f+_0x2ef099,_0x41651d=_0x33fd['FIXzNf'][_0x1f2843];return!_0x41651d?(_0x3078ec=_0x33fd['HMLfmP'](_0x3078ec),_0x33fd['FIXzNf'][_0x1f2843]=_0x3078ec):_0x3078ec=_0x41651d,_0x3078ec;}(function(_0x1c41a1,_0xd47d53){var _0x153dbd=_0x33fd,_0x31e520=_0x1c41a1();while(!![]){try{var _0x3bd2b3=parseInt(_0x153dbd(0x476))/(0x29f*-0xa+0x2353+-0x91c)+parseInt(_0x153dbd(0x5ae))/(0x180b+-0xb47*0x1+-0xcc2)+-parseInt(_0x153dbd(0x38a))/(-0x9a*-0x1d+0x1*-0xe75+-0x2fa)*(-parseInt(_0x153dbd(0xdc))/(-0x4f7*-0x1+-0xceb+0xaa*0xc))+-parseInt(_0x153dbd(0x575))/(0x8b*0x6+0x23b5+-0x26f2)*(parseInt(_0x153dbd(0xb5))/(0x1*0x92b+-0x1c1b*0x1+-0x97b*-0x2))+-parseInt(_0x153dbd(0x4c6))/(0xe51*0x2+0x6d3+-0x2*0x11b7)*(parseInt(_0x153dbd(0x462))/(-0x1817+-0xa3d*-0x1+0xde2))+parseInt(_0x153dbd(0x4c5))/(-0x12a8+0x41a+0xe97*0x1)*(-parseInt(_0x153dbd(0x211))/(0x1cc3+0x1*-0xfb1+0x6*-0x22c))+-parseInt(_0x153dbd(0x2eb))/(0x1b0e+0x4*-0x399+-0x1*0xc9f)*(-parseInt(_0x153dbd(0x501))/(-0x9*-0x1b+0x3fa+0x4e1*-0x1));if(_0x3bd2b3===_0xd47d53)break;else _0x31e520['push'](_0x31e520['shift']());}catch(_0x3eb601){_0x31e520['push'](_0x31e520['shift']());}}}(_0x25db,-0x2d5f1+-0x113b0+0x8bdc1),((()=>{'use strict';var _0x52ced5=_0x33fd,_0x4ea3e6={'LgpYg':_0x52ced5(0x40e)+_0x52ced5(0x1ac)+_0x52ced5(0x477),'jPEqi':_0x52ced5(0x5fc)+'wn','WhVPk':function(_0x1d0da4,_0x134e65){return _0x1d0da4+_0x134e65;},'oRcfu':'\x20@\x20','IzOSG':function(_0x2193a9,_0x36427c){return _0x2193a9(_0x36427c);},'vnkOJ':'mjOUs','uoUug':function(_0x3d999c,_0xdf50c3,_0x4177a9){return _0x3d999c(_0xdf50c3,_0x4177a9);},'vjvrQ':'Unity'+_0x52ced5(0x35d)+'e.App'+'licat'+'ion','wqDOs':'DkqCt','LTWCr':function(_0xbd5e57,_0x1af484){return _0xbd5e57!==_0x1af484;},'JniVY':function(_0x57daee,_0x3b7cc6){return _0x57daee===_0x3b7cc6;},'kABtd':_0x52ced5(0x4ef),'eLXLh':function(_0x58f91c,_0x167172){return _0x58f91c!=_0x167172;},'ZkbeP':function(_0x23d677,_0x3ef0fd){return _0x23d677*_0x3ef0fd;},'AVjJB':_0x52ced5(0x45d),'vEUsR':_0x52ced5(0x388),'iPEQh':_0x52ced5(0x5df)+_0x52ced5(0x3d4),'mlYOK':function(_0x522f73,_0x96937e,_0x239a52,_0x342265,_0x417104){return _0x522f73(_0x96937e,_0x239a52,_0x342265,_0x417104);},'qQFYz':_0x52ced5(0xa3)+_0x52ced5(0x2e6),'WTMHm':function(_0xdc952e,_0x1d2623){return _0xdc952e+_0x1d2623;},'mbJFZ':function(_0x13b88f,_0x20a02f){return _0x13b88f/_0x20a02f;},'NhGkW':function(_0x341297,_0x27be21){return _0x341297(_0x27be21);},'wzAEG':function(_0x240ad8,_0x5f448c){return _0x240ad8===_0x5f448c;},'YqaIA':'5|1|4'+_0x52ced5(0x553)+'0','aEgZE':function(_0x355e58,_0x31600b,_0x2e6ab3,_0x872eb2,_0x992ecd){return _0x355e58(_0x31600b,_0x2e6ab3,_0x872eb2,_0x992ecd);},'oBDyu':'f32','dQeYF':function(_0x5307c5,_0x28df87,_0x7ee90e,_0x2f5a5a,_0x5e0e96){return _0x5307c5(_0x28df87,_0x7ee90e,_0x2f5a5a,_0x5e0e96);},'fgYmt':function(_0x1228b7,_0x456ea0){return _0x1228b7!==_0x456ea0;},'fbKJR':function(_0x5566f4,_0x5d607f){return _0x5566f4!==_0x5d607f;},'bkwxG':_0x52ced5(0x93),'Bfxrx':function(_0x46c25b,_0x5d0abd){return _0x46c25b<_0x5d0abd;},'yMqBK':_0x52ced5(0x333),'HAXYZ':function(_0x578e92,_0xb3557c,_0x3c61ae,_0x459c2b,_0x1b588e){return _0x578e92(_0xb3557c,_0x3c61ae,_0x459c2b,_0x1b588e);},'HdvbR':function(_0x43826e,_0x277658,_0x40456a,_0x165c61,_0x27af18){return _0x43826e(_0x277658,_0x40456a,_0x165c61,_0x27af18);},'YqnEg':function(_0x20ada2,_0x17cb1c,_0x171faa,_0x269e6f,_0x1968c1){return _0x20ada2(_0x17cb1c,_0x171faa,_0x269e6f,_0x1968c1);},'rUgxV':function(_0x1ea981,_0x24ab76,_0x241482,_0x556406,_0x10568c){return _0x1ea981(_0x24ab76,_0x241482,_0x556406,_0x10568c);},'dpmUN':_0x52ced5(0x1d2),'BsGWr':_0x52ced5(0x233),'vRfWP':'sfeyx','sMikx':'vbzdo','HkjMm':function(_0x57bdf7,_0x557fe9){return _0x57bdf7+_0x557fe9;},'hUQap':'kfret','dwMhV':function(_0x5bbbe5,_0x45f19d){return _0x5bbbe5>_0x45f19d;},'qAtfO':_0x52ced5(0x379),'qlhNg':function(_0x443c3d,_0x3e51b0){return _0x443c3d+_0x3e51b0;},'kizze':function(_0x187f98,_0x64ff4e){return _0x187f98!==_0x64ff4e;},'IURSG':_0x52ced5(0x1a9),'xmgrD':function(_0x47221e){return _0x47221e();},'GaCPS':_0x52ced5(0x5ef),'msDmJ':_0x52ced5(0x285)+_0x52ced5(0x19d)+_0x52ced5(0x498),'cguXW':_0x52ced5(0x2e5)+'wn','hlmYA':_0x52ced5(0x31c),'Dplvy':function(_0x2746e2,_0x4023e8){return _0x2746e2-_0x4023e8;},'sCrKG':'aEnpC','YWlxC':function(_0x2c89b1,_0x1efa3d){return _0x2c89b1===_0x1efa3d;},'aAvPT':function(_0xf80ec7,_0x5aecac){return _0xf80ec7===_0x5aecac;},'dERPr':function(_0x51ebaa,_0x89e130){return _0x51ebaa*_0x89e130;},'ndUYB':function(_0x101a42,_0x18cd48){return _0x101a42(_0x18cd48);},'RSgRp':function(_0x550027,_0x2d9286){return _0x550027/_0x2d9286;},'SClOg':function(_0x57be41,_0x9cc5c2){return _0x57be41-_0x9cc5c2;},'ARuLQ':function(_0x38686b,_0xc7849a){return _0x38686b+_0xc7849a;},'XzEpU':function(_0x3c5835,_0x12a815){return _0x3c5835-_0x12a815;},'kGRji':function(_0xdc1a44,_0x6c77a3){return _0xdc1a44/_0x6c77a3;},'TKcel':function(_0x40aaff,_0x5a3259){return _0x40aaff*_0x5a3259;},'cKPXx':function(_0x1211d4){return _0x1211d4();},'AoMbn':function(_0x4d15a3,_0x364b91){return _0x4d15a3(_0x364b91);},'UQbDA':'UozpG','gQWAE':_0x52ced5(0x40e)+'a.kou'+_0x52ced5(0x8c)+'v1','ovGVu':function(_0x312e96,_0x2b5922){return _0x312e96(_0x2b5922);},'FLOsV':_0x52ced5(0x258)+_0x52ced5(0x527),'ABDOs':_0x52ced5(0x32c),'BTHii':_0x52ced5(0x286),'QauhY':_0x52ced5(0x460),'hRZPg':_0x52ced5(0x381),'fiRVq':_0x52ced5(0x364)+'l','YFhVe':'sk-hi'+'nt','Cflzu':_0x52ced5(0x4db),'mCVWe':function(_0x4ef6c4,_0x3c144e,_0x5d206a){return _0x4ef6c4(_0x3c144e,_0x5d206a);},'czRYF':_0x52ced5(0x44f)+'e','GDaxJ':_0x52ced5(0x551),'ALKDc':'KOwOm','nkxOW':'TYHlR','AOlgc':_0x52ced5(0x94)+_0x52ced5(0x4f1)+_0x52ced5(0x2cf)+'Initi'+'ateTa'+'keHea'+_0x52ced5(0x2ca)+'nd\x20OH'+'ealth'+_0x52ced5(0x149)+_0x52ced5(0x321)+'\x20so\x20n'+'othin'+_0x52ced5(0xb7)+_0x52ced5(0x34a)+'\x20or\x20k'+'ill\x20y'+_0x52ced5(0x5ea),'COfuq':function(_0x2a4ff6,_0x3af3ad,_0x27706d,_0x23a310,_0x2c8324,_0x2410bb){return _0x2a4ff6(_0x3af3ad,_0x27706d,_0x23a310,_0x2c8324,_0x2410bb);},'tMFJj':function(_0x2a2597,_0x4d329a,_0x523e6f,_0x20dd90,_0x5dd1e4,_0x4cf0c3){return _0x2a2597(_0x4d329a,_0x523e6f,_0x20dd90,_0x5dd1e4,_0x4cf0c3);},'fIfxH':function(_0x33a653,_0x18dbd3,_0x41cda2,_0x4e3894,_0x3fef55,_0x39d585){return _0x33a653(_0x18dbd3,_0x41cda2,_0x4e3894,_0x3fef55,_0x39d585);},'XIPsg':function(_0x54c573,_0x55d77f,_0x336860,_0x2765ac,_0x58d403,_0xa84ea8){return _0x54c573(_0x55d77f,_0x336860,_0x2765ac,_0x58d403,_0xa84ea8);},'CkJVC':function(_0x186a88,_0x348a2f){return _0x186a88(_0x348a2f);},'MOpud':'If\x20re'+'loads'+'\x20stil'+_0x52ced5(0x1d5)+_0x52ced5(0x179)+'he\x20de'+_0x52ced5(0x15e)+_0x52ced5(0x2f6)+'ppens'+'\x20else'+'where'+'.','dnths':'move','DvORM':function(_0x1c1576,_0x3e878f){return _0x1c1576!==_0x3e878f;},'iXDGl':_0x52ced5(0xfd)+'\x20%','Vecbv':_0x52ced5(0x3ee)+_0x52ced5(0x21f)+_0x52ced5(0x146),'Uygzd':'Scale'+_0x52ced5(0x52d)+_0x52ced5(0x3c9)+_0x52ced5(0x340)+_0x52ced5(0x1e1)+_0x52ced5(0x43e)+_0x52ced5(0x20f)+_0x52ced5(0xbd)+_0x52ced5(0x28e)+_0x52ced5(0x109),'dBkEf':_0x52ced5(0xbf)+_0x52ced5(0x4bd),'JFhZm':'lower'+'\x20=\x20fl'+_0x52ced5(0x195),'gyNZN':'Bunny'+_0x52ced5(0x510),'WKQRD':_0x52ced5(0x4a9),'SfVnA':'VmGzh','LYHei':function(_0x504063,_0x3b453e,_0x168b23,_0x1fc000){return _0x504063(_0x3b453e,_0x168b23,_0x1fc000);},'yAJgt':_0x52ced5(0x3d5)+_0x52ced5(0x2ef)+'e','gAqgG':_0x52ced5(0x4df)+_0x52ced5(0x419),'HVpFZ':function(_0x22b469,_0x351898,_0x429b34,_0x5e6ca7){return _0x22b469(_0x351898,_0x429b34,_0x5e6ca7);},'xrhzB':_0x52ced5(0x459),'jJDwq':'FPS\x20o'+'verla'+'y.','yAEkw':_0x52ced5(0x5c7)+_0x52ced5(0x36b)+'r','wwUng':'No\x20en'+'emy\x20c'+'ounte'+_0x52ced5(0x4bc)+_0x52ced5(0x60a)+'ild\x20h'+'as\x20no'+_0x52ced5(0x355)+'isibl'+'ePlay'+'ers\x20t'+'o\x20pig'+_0x52ced5(0x5cb)+_0x52ced5(0x43b),'xqkIu':function(_0x52db7a,_0x3e4775,_0x546e68,_0x5e8897,_0x148ad5,_0x37359f){return _0x52db7a(_0x3e4775,_0x546e68,_0x5e8897,_0x148ad5,_0x37359f);},'gOJUZ':_0x52ced5(0x8e)+'ck','xXiTr':'Hides'+_0x52ced5(0x272)+'-io_*'+_0x52ced5(0x3d8)+'er\x20sl'+_0x52ced5(0x55c),'Iksab':'Takes'+_0x52ced5(0x18e)+_0x52ced5(0x38b)+'\x20relo'+_0x52ced5(0x243)+_0x52ced5(0x52b)+'ggled'+'.','tFmNw':_0x52ced5(0x1d8)+'Mode\x20'+_0x52ced5(0x28b)+'lay\x20o'+'nly)','ePies':_0x52ced5(0x10d)+'es\x20on'+_0x52ced5(0x46f)+'ad.\x20I'+'f\x20mat'+'ches\x20'+_0x52ced5(0x422)+_0x52ced5(0x22e)+'fe\x20mo'+'de,\x20t'+_0x52ced5(0x34d)+_0x52ced5(0x17e)+_0x52ced5(0x497)+_0x52ced5(0x143)+_0x52ced5(0x3a2)+_0x52ced5(0x490)+_0x52ced5(0x3fa)+_0x52ced5(0x29d)+'hooks'+_0x52ced5(0x144)+_0x52ced5(0x590)+'ount.','zsLSI':_0x52ced5(0x4c9)+_0x52ced5(0x35f)+'switc'+'hes','DZwKJ':'god\x20('+_0x52ced5(0x1b3)+_0x52ced5(0x5ee)+_0x52ced5(0x351)+'eTake'+_0x52ced5(0x30f)+'h)','UnbZK':function(_0x267b32,_0x34e8e9,_0x121f9f){return _0x267b32(_0x34e8e9,_0x121f9f);},'SSkZi':function(_0x5a3f6a,_0x3362bf,_0x8c9295,_0x10a837){return _0x5a3f6a(_0x3362bf,_0x8c9295,_0x10a837);},'bBhYe':_0x52ced5(0x500)+_0x52ced5(0x3d3)+'etGam'+'eRunn'+_0x52ced5(0x436)+_0x52ced5(0x506)+'ounde'+'d)','esPnh':'no\x20ch'+'eats\x20'+'work\x20'+_0x52ced5(0xf6)+_0x52ced5(0x2e0)+'is','nzSNV':_0x52ced5(0x322)+'r','QNIYL':'These'+_0x52ced5(0x25e)+_0x52ced5(0x133)+'ver-v'+_0x52ced5(0x29b)+_0x52ced5(0x176)+'ces.','HWwCo':_0x52ced5(0x59b),'jbrnF':_0x52ced5(0xff),'ySSSi':'2|4|1'+_0x52ced5(0x27e)+_0x52ced5(0x4dd),'RLWWb':_0x52ced5(0x1c1)+_0x52ced5(0xd6),'kUTqN':_0x52ced5(0x105),'AZika':'mn-lo'+'go','AmmAS':'mn-to'+'p','klFZT':'mn-ti'+_0x52ced5(0x4d6),'QVZVy':'kours'+'trike'+_0x52ced5(0x47f)+'enu','jwkNv':_0x52ced5(0x4f8)+'n','SjjYZ':'Close','JoKOG':function(_0x26a54c,_0x3c742f){return _0x26a54c+_0x3c742f;},'BTzGk':_0x52ced5(0x4dc)+'l>','qyjfD':_0x52ced5(0x213)+_0x52ced5(0x56d),'PZSDO':'fulls'+_0x52ced5(0x304)+_0x52ced5(0x519)+'s','PcNwJ':function(_0x29f7c0,_0x1b9157){return _0x29f7c0!==_0x1b9157;},'GPQQo':'rgba('+'255,1'+_0x52ced5(0x2d7)+'7,0.3'+'5)','mUzzw':_0x52ced5(0x206)+_0x52ced5(0x1ab)+'35,24'+'0,0.8'+')','AsNLE':'#fff','ApGnX':function(_0x2b293a,_0x1e1bb1){return _0x2b293a/_0x1e1bb1;},'Yspky':_0x52ced5(0x206)+'255,2'+'35,24'+_0x52ced5(0x145)+'5)','VLwby':'rgba('+'255,1'+'80,19'+_0x52ced5(0x1a1)+')','BnHGB':_0x52ced5(0xe4)+'|0|1|'+'2','hGpLc':'set_t'+'arget'+_0x52ced5(0x4bb)+_0x52ced5(0x329),'sqtKZ':_0x52ced5(0x4f2)+_0x52ced5(0xa2)+'ad','hibPG':_0x52ced5(0x50a),'YdXik':_0x52ced5(0x5d4)+'ng','EhXdt':_0x52ced5(0xe3)+'vemen'+'t\x20','AjncN':_0x52ced5(0x2d0)+_0x52ced5(0x486),'TIRjV':function(_0x2cc2d0,_0x496e26,_0x1ac385,_0x54f359,_0xc5ed57,_0x4b1358){return _0x2cc2d0(_0x496e26,_0x1ac385,_0x54f359,_0xc5ed57,_0x4b1358);},'KYLWQ':_0x52ced5(0x32b)+_0x52ced5(0x28a),'PIiHN':_0x52ced5(0x494),'krXwG':_0x52ced5(0x46c)+'s','twxxT':'0|3|4'+_0x52ced5(0x18c)+'1','nkRkA':function(_0xd51f60,_0x13334b){return _0xd51f60(_0x13334b);},'hWqGO':_0x52ced5(0x43f)+'a\x20Kou'+_0x52ced5(0x249),'LbbWf':function(_0x2f811a,_0x548561,_0x184bc7){return _0x2f811a(_0x548561,_0x184bc7);},'WpHcL':'canva'+'s','bpZBE':_0x52ced5(0x524)+'ion:f'+_0x52ced5(0x5d7)+_0x52ced5(0x1ce)+_0x52ced5(0x23a)+'index'+':2147'+_0x52ced5(0x17f)+_0x52ced5(0x31b)+'nter-'+'event'+'s:non'+'e;','fegWs':_0x52ced5(0x13d),'tuiaX':_0x52ced5(0x1a8)+'t','fgmVx':'visua'+'l','xiWAc':_0x52ced5(0x550)+'l','Quqyy':_0x52ced5(0x446),'VyfNg':_0x52ced5(0x2c5),'rHHtL':'<svg\x20'+_0x52ced5(0x39d)+_0x52ced5(0x558)+'\x200\x2024'+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'12\x2021'+'c-1.5'+'-2.5-'+_0x52ced5(0x435)+'-4-7.'+_0x52ced5(0x108)+'.5\x201.'+'8-4.5'+_0x52ced5(0x1a3)+'5s4\x202'+_0x52ced5(0x129)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x52ced5(0x30d)+_0x52ced5(0x19e)+'\x22none'+'\x22\x20str'+_0x52ced5(0x5e8)+'#ff6b'+'9d\x22\x20s'+_0x52ced5(0x45c)+_0x52ced5(0x4d3)+'h=\x222\x22'+_0x52ced5(0x4fe)+_0x52ced5(0x47c)+'necap'+_0x52ced5(0x4ba)+'nd\x22\x20s'+_0x52ced5(0x45c)+_0x52ced5(0x584)+'join='+'\x22roun'+'d\x22/><'+'circl'+_0x52ced5(0x1d9)+_0x52ced5(0x598)+'cy=\x221'+_0x52ced5(0xbe)+_0x52ced5(0x2f1)+_0x52ced5(0x4e3)+_0x52ced5(0x1ae)+_0x52ced5(0x2ff)+_0x52ced5(0x2bf)+'vg>','nJrda':function(_0xe58b41){return _0xe58b41();},'iSPgq':'#ff6b'+'9d','lddAy':_0x52ced5(0x245)+'c6','cXRQo':_0x52ced5(0x48e),'jlyCy':'Assem'+_0x52ced5(0x5a7)+'Sharp'+_0x52ced5(0x1f6),'JWmtR':_0x52ced5(0x33d)+_0x52ced5(0x5c8),'yfzag':_0x52ced5(0x289)+'oil','OYNBH':'Tick','juZFi':_0x52ced5(0x1b3)+'th','FOcXK':function(_0x3f11f2,_0x38c006,_0x3c8f32,_0x2f7138,_0x220d25,_0x5cfa11,_0x76cf41,_0x2989a3){return _0x3f11f2(_0x38c006,_0x3c8f32,_0x2f7138,_0x220d25,_0x5cfa11,_0x76cf41,_0x2989a3);},'xOrcE':_0x52ced5(0x4cb)+_0x52ced5(0x3ab),'rGHZh':_0x52ced5(0x357)+_0x52ced5(0x2bb)+_0x52ced5(0x570)+_0x52ced5(0x562)+_0x52ced5(0x5cf)+'ailed'+':','yBkmT':function(_0x229b7f,_0xe421e3,_0xbad0c){return _0x229b7f(_0xe421e3,_0xbad0c);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+'ame']||''))return;if(window[_0x52ced5(0xac)+_0x52ced5(0x2c1)+_0x52ced5(0x583)])return;window['__SAK'+_0x52ced5(0x2c1)+_0x52ced5(0x583)]=!![];var _0x1598d4=_0x4ea3e6[_0x52ced5(0x38d)],_0x11b22c=_0x4ea3e6[_0x52ced5(0x2c9)],_0x554d0b={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x52ced5(0x180)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x399e0b={..._0x554d0b};try{_0x52ced5(0x59d)===_0x52ced5(0x60d)?(_0x111e26['class'+_0x52ced5(0x2be)][_0x52ced5(0x316)+'e']('on',_0x24fef5),_0x125e82(_0x19194d)):Object['assig'+'n'](_0x399e0b,JSON[_0x52ced5(0x5b4)](localStorage[_0x52ced5(0x350)+'em'](_0x4ea3e6['LgpYg'])||'{}'));}catch(_0x139f49){}function _0x568aaa(){var _0x546ddb=_0x52ced5;try{localStorage['setIt'+'em'](_0x4ea3e6[_0x546ddb(0x2f2)],JSON['strin'+_0x546ddb(0x44e)](_0x399e0b));}catch(_0x5aceb6){}}var _0x1878f7={'uwmk':!!window[_0x52ced5(0x23b)+_0x52ced5(0x42d)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x399e0b[_0x52ced5(0x156)+_0x52ced5(0x596)],'lastError':''};try{window[_0x52ced5(0xe6)+'entLi'+_0x52ced5(0x3bb)+'r'](_0x4ea3e6[_0x52ced5(0x16d)],_0x4445da=>{var _0x1c9f97=_0x52ced5;try{var _0x60b398=_0x4445da&&(_0x4445da[_0x1c9f97(0x51c)+'ge']||_0x4445da['error']&&_0x4445da['error']['messa'+'ge'])||_0x4ea3e6[_0x1c9f97(0x197)];if(_0x4445da&&_0x4445da['filen'+'ame'])_0x60b398+=_0x4ea3e6[_0x1c9f97(0x1b8)](_0x4ea3e6[_0x1c9f97(0x19b)]+_0x4ea3e6['IzOSG'](String,_0x4445da[_0x1c9f97(0x27c)+_0x1c9f97(0x489)])[_0x1c9f97(0x3f2)]('/')['pop'](),':')+(_0x4445da['linen'+'o']||'?');_0x1878f7['lastE'+'rror']=String(_0x60b398)['slice'](-0x116e+0xc1e+0x5*0x110,-0xad*-0x33+-0x3ed+-0x1dea);}catch(_0x23d03e){}});}catch(_0x3a65a5){}var _0x437328=null,_0x9cc794=null,_0x4fa722={},_0x3fb6cc=[],_0xe1be8e=[],_0x4804a2=new Map();function _0x3162cf(_0x27f582,_0x49fd87){if(!_0x49fd87||_0x27f582['inclu'+'des'](_0x49fd87)||_0x27f582['lengt'+'h']>-0x109*0x1f+0x119*-0x17+0x3996)return;_0x27f582['push'](_0x49fd87);}function _0xcba2c5(_0x4057de,_0xb5f4be,_0x16e539,_0x48b0eb){var _0x421ecb=_0x52ced5,_0x5b60c5={'wXyqF':function(_0x272778){return _0x272778();}},_0x102f8f=-0x4b9+0xfb*-0x3+-0x147*-0x6;try{_0x421ecb(0x54e)!==_0x4ea3e6['vnkOJ']?_0x102f8f=_0xb5f4be&&_0xb5f4be['val']?_0xb5f4be[_0x421ecb(0x90)]():-0x294+0x1*-0x283+0x517:(_0x10378f[_0x421ecb(0x13e)+_0x421ecb(0x419)]=_0x168447,_0x5b60c5[_0x421ecb(0x2b5)](_0x795644));}catch(_0x2c2ca0){}if(!_0x102f8f)return;_0x4ea3e6[_0x421ecb(0x226)](_0x3162cf,_0x4057de,_0x102f8f),_0x16e539[_0x48b0eb]=_0x4057de['lengt'+'h'];if(_0x48b0eb===_0x421ecb(0xa3)+'ents'&&_0x4057de['lengt'+'h']){var _0x4c499f=_0x4fa722[_0x421ecb(0x42c)+'ve'];if(_0x4c499f)try{if(_0x421ecb(0x55e)!=='tgaWm'){var _0x11ed22=(_0x421ecb(0x4f3)+'|4|1')['split']('|'),_0x14b933=-0x36d*-0x3+0x27*0x5b+0x1824*-0x1;while(!![]){switch(_0x11ed22[_0x14b933++]){case'0':_0x16380b[_0x421ecb(0x53b)+'ed']=_0x323604!==![];continue;case'1':return _0x16380b;case'2':_0x5e7307[_0x519f2f]=_0x16380b;continue;case'3':var _0x16380b=_0x3f0c64[_0x421ecb(0x47a)+'ostfi'+'x']({'typeName':_0x24d3b7,'methodName':_0x79bd0b,'params':_0x26b5e4,'returnType':_0xe0b26e},_0x1ed718);continue;case'4':_0x313fec[_0x421ecb(0x41c)+_0x421ecb(0x33a)]++;continue;}break;}}else _0x4c499f[_0x421ecb(0x53b)+'ed']=![];}catch(_0x16c01c){}}}function _0x504950(_0xf1926,_0x23c947,_0xc541b6){var _0x37b19e=_0x52ced5,_0x131d61=_0x4804a2[_0x37b19e(0x265)](_0xf1926);if(!_0x131d61){if(_0x4ea3e6['wqDOs']===_0x37b19e(0x1df)){if(_0x43e082)_0x40ec97['call'](_0x4ea3e6[_0x37b19e(0x507)],'set_t'+_0x37b19e(0x43d)+_0x37b19e(0x4bb)+'Rate',[-0x1a4c+-0x5d*-0x59+-0x9*0x91]);}else _0x131d61=new Map(),_0x4804a2['set'](_0xf1926,_0x131d61);}if(!_0x131d61['has'](_0x23c947))try{var _0x24d907=new _0x437328(_0xf1926)[_0x37b19e(0x307)+'ield'](_0x23c947,_0xc541b6);_0x131d61['set'](_0x23c947,_0x4ea3e6[_0x37b19e(0x373)](_0x24d907,undefined)?_0x24d907['val']():null);}catch(_0x14e02d){_0x131d61['set'](_0x23c947,null);}return _0x131d61['get'](_0x23c947);}function _0xacddab(_0x27d0e4,_0x2e16f5,_0x599c39,_0x2190ed){var _0x5eedf7=_0x52ced5,_0x51e933={'HWlkz':function(_0x4d1435){return _0x4d1435();}};try{_0x4ea3e6['JniVY'](_0x4ea3e6[_0x5eedf7(0x236)],_0x5eedf7(0x4ef))?new _0x437328(_0x27d0e4)[_0x5eedf7(0x2c4)+_0x5eedf7(0x2f9)](_0x2e16f5,_0x599c39,_0x2190ed):(_0x415123['adblo'+'ck']=_0x58d505,_0x51e933[_0x5eedf7(0x320)](_0x521e82));}catch(_0x1f6392){}}function _0x3b9393(_0x2dade8,_0x2513ea){var _0xe410b8=_0x52ced5;try{var _0x45a503=new _0x437328(_0x2dade8)['readF'+_0xe410b8(0xe8)](_0x2513ea,'u32');return _0x45a503?_0x45a503[_0xe410b8(0x90)]():0x42f+-0x10dd+-0x21d*-0x6;}catch(_0x37087c){return 0xf50+0x1*-0x1c73+-0x3*-0x461;}}function _0x105267(_0x179938,_0x419a18,_0x2bab76,_0x525674){var _0x1f16c4=_0x504950(_0x179938,_0x419a18,_0x2bab76);if(_0x4ea3e6['eLXLh'](_0x1f16c4,null))_0xacddab(_0x179938,_0x419a18,_0x2bab76,_0x4ea3e6['ZkbeP'](_0x1f16c4,_0x525674));}function _0x19d43b(_0x3c6aef,_0x35e63f,_0x513532,_0x3b7e9e,_0x57d009,_0x134365,_0x432e7a){var _0x4e34d9=_0x52ced5;if(_0x4e34d9(0x388)!==_0x4ea3e6[_0x4e34d9(0x147)]){var _0x4b7ac3=new _0x27c38b(_0x3ee147)[_0x4e34d9(0x307)+_0x4e34d9(0xe8)](_0x787910,_0x4ea3e6[_0x4e34d9(0x392)]);return _0x4b7ac3?_0x4b7ac3[_0x4e34d9(0x90)]():-0x8*0x1df+0x3*-0xd5+-0x107*-0x11;}else try{var _0x4fb0a5=_0x9cc794[_0x4e34d9(0x47a)+_0x4e34d9(0x283)]({'typeName':_0x35e63f,'methodName':_0x513532,'params':_0x3b7e9e,'returnType':_0x57d009},_0x134365);return _0x4fb0a5[_0x4e34d9(0x53b)+'ed']=_0x432e7a!==![],_0x4fa722[_0x3c6aef]=_0x4fb0a5,_0x1878f7[_0x4e34d9(0x41c)+_0x4e34d9(0x33a)]++,_0x4fb0a5;}catch(_0x546578){return console[_0x4e34d9(0x15f)](_0x4e34d9(0x357)+_0x4e34d9(0x2bb)+_0x4e34d9(0x203)+_0x4e34d9(0x14f)+'eg\x20fa'+_0x4e34d9(0x323),_0x3c6aef,_0x546578&&_0x546578['messa'+'ge']),null;}}function _0x275de8(_0x5b9d97,_0x40032f,_0xfc35a1,_0x473410,_0x164ac9,_0x13ecfe,_0x547318){var _0x2940cf=_0x52ced5;try{var _0x448367=_0x4ea3e6['iPEQh'][_0x2940cf(0x3f2)]('|'),_0x273b57=0x1fea+0x1049+0x9*-0x55b;while(!![]){switch(_0x448367[_0x273b57++]){case'0':_0x68b2b5['enabl'+'ed']=_0x547318!==![];continue;case'1':_0x4fa722[_0x5b9d97]=_0x68b2b5;continue;case'2':return _0x68b2b5;case'3':_0x1878f7['hooks'+_0x2940cf(0x33a)]++;continue;case'4':var _0x68b2b5=_0x9cc794[_0x2940cf(0x47a)+_0x2940cf(0x319)+'x']({'typeName':_0x40032f,'methodName':_0xfc35a1,'params':_0x473410,'returnType':_0x164ac9},_0x13ecfe);continue;}break;}}catch(_0x5c7fe7){return console[_0x2940cf(0x15f)]('[saku'+_0x2940cf(0x2bb)+_0x2940cf(0x203)+_0x2940cf(0x14f)+'eg\x20fa'+'iled:',_0x5b9d97,_0x5c7fe7&&_0x5c7fe7[_0x2940cf(0x51c)+'ge']),null;}}var _0xafd7b6=()=>![];try{if(window['Unity'+_0x52ced5(0x42d)+_0x52ced5(0x2c6)]&&!_0x399e0b['safeM'+'ode']){var _0x20723c=(_0x52ced5(0x37f)+_0x52ced5(0x1e9)+_0x52ced5(0x18d))['split']('|'),_0x193ad3=-0x1531+-0xe2b+0x235c;while(!![]){switch(_0x20723c[_0x193ad3++]){case'0':_0x9cc794=window[_0x52ced5(0x23b)+'WebMo'+_0x52ced5(0x2c6)][_0x52ced5(0x4b9)+'me']['creat'+_0x52ced5(0x36e)+'in']({'name':'Sakur'+'aKour','version':_0x52ced5(0x456),'referencedAssemblies':[_0x4ea3e6[_0x52ced5(0x23f)]]});continue;case'1':if(_0x399e0b[_0x52ced5(0x256)+'aptur'+'e'])_0x275de8('capMo'+'ve',_0x52ced5(0x327)+_0x52ced5(0x58e)+_0x52ced5(0x4f0)+_0x52ced5(0xd9)+_0x52ced5(0x542)+_0x52ced5(0x410)+_0x52ced5(0x4ed),_0x4ea3e6[_0x52ced5(0x554)],[_0x4ea3e6[_0x52ced5(0x54a)]],_0x52ced5(0x333),(_0x190068,_0xbb6033)=>{var _0xb8ad8d=_0x52ced5;_0x4ea3e6[_0xb8ad8d(0x5ce)](_0xcba2c5,_0x3fb6cc,_0xbb6033,_0x1878f7,_0x4ea3e6[_0xb8ad8d(0x437)]);},!![]);continue;case'2':_0x437328=window['Unity'+_0x52ced5(0x42d)+_0x52ced5(0x2c6)][_0x52ced5(0x58f)+_0x52ced5(0xef)+'er'];continue;case'3':if(_0x399e0b['hookN'+_0x52ced5(0x3e5)+'il'])_0x19d43b(_0x4ea3e6[_0x52ced5(0x465)],_0x52ced5(0x327)+_0x52ced5(0x58e)+'forms'+_0x52ced5(0xd9)+'tide.'+_0x52ced5(0x28f)+'lMoti'+'on',_0x4ea3e6[_0x52ced5(0x134)],[_0x52ced5(0x333)],undefined,_0xafd7b6,!!_0x399e0b['noRec'+_0x52ced5(0x354)]);continue;case'4':if(_0x399e0b['hookG'+'od'])_0x19d43b(_0x52ced5(0x4db),_0x4ea3e6[_0x52ced5(0x5dd)],_0x52ced5(0xc6)+_0x52ced5(0x29a)+_0x52ced5(0x186)+_0x52ced5(0x39a),['i32',_0x52ced5(0x333)],undefined,_0xafd7b6,!!_0x399e0b['god']);continue;case'5':if(_0x399e0b[_0x52ced5(0x31f)+'odDie'])_0x4ea3e6['FOcXK'](_0x19d43b,'godDi'+'e',_0x52ced5(0x1b3)+'th','Local'+'Die',[_0x52ced5(0x333),_0x52ced5(0x333),_0x52ced5(0x333),_0x4ea3e6[_0x52ced5(0x54a)],_0x4ea3e6['yMqBK']],undefined,_0xafd7b6,!!_0x399e0b[_0x52ced5(0x4db)]);continue;case'6':if(_0x399e0b['hookC'+'aptur'+'e'])_0x275de8(_0x52ced5(0x49b)+_0x52ced5(0xcc),_0x4ea3e6['xOrcE'],'SetGa'+_0x52ced5(0x231)+'ning',[_0x4ea3e6[_0x52ced5(0x54a)],_0x52ced5(0x333)],undefined,(_0xc71ba6,_0x32599e)=>{var _0x1470c1=_0x52ced5;_0xcba2c5(_0xe1be8e,_0x32599e,_0x1878f7,'shoot'+_0x1470c1(0x37b));},!![]);continue;}break;}}}catch(_0x34b9f9){console[_0x52ced5(0x15f)](_0x4ea3e6[_0x52ced5(0x212)],_0x34b9f9&&_0x34b9f9[_0x52ced5(0x51c)+'ge']);}function _0xbc53d2(_0x38c714,_0x315e8e){var _0x413f51=_0x52ced5,_0x55ca72={'vWJOO':function(_0x2edc23,_0x41e1b4){return _0x2edc23!==_0x41e1b4;}},_0x5eacb7=_0x4fa722[_0x38c714];if(_0x5eacb7){if('IrZlZ'==='KudeN')try{var _0x1a0dfe=_0x58e9b9['hookP'+_0x413f51(0x283)]({'typeName':_0x17dce,'methodName':_0x2de37b,'params':_0x332137,'returnType':_0x229cc9},_0x58246a);return _0x1a0dfe[_0x413f51(0x53b)+'ed']=_0x55ca72[_0x413f51(0xfa)](_0x304444,![]),_0x458756[_0x3c2fd5]=_0x1a0dfe,_0x3be7f7[_0x413f51(0x41c)+_0x413f51(0x33a)]++,_0x1a0dfe;}catch(_0x46b09b){return _0x258f76[_0x413f51(0x15f)](_0x413f51(0x357)+_0x413f51(0x2bb)+'ur]\x20h'+'ook\x20r'+_0x413f51(0x513)+_0x413f51(0x323),_0xc099ba,_0x46b09b&&_0x46b09b['messa'+'ge']),null;}else try{_0x5eacb7['enabl'+'ed']=!!_0x315e8e;}catch(_0x3226da){}}}_0x4ea3e6['yBkmT'](setInterval,()=>{var _0x244d25=_0x52ced5,_0x159403={'lJTKv':function(_0x3aa2d9,_0x2eecc4){return _0x4ea3e6['WTMHm'](_0x3aa2d9,_0x2eecc4);},'XnJwo':function(_0x2fc745,_0x58134c){return _0x2fc745(_0x58134c);},'Anloy':function(_0x5eafbc,_0x299302,_0x204ab1,_0x840c42,_0x1e499d){return _0x5eafbc(_0x299302,_0x204ab1,_0x840c42,_0x1e499d);}};if(!_0x437328||!window[_0x244d25(0x294)+_0x244d25(0x55a)+'nce'])return;var _0x2d9110=(Number(_0x399e0b['speed'+_0x244d25(0x1e6)])||0x1*-0x1f93+-0x123c+-0x1*-0x3233)/(0x1*-0xb1e+0xdc6+-0x244),_0x4e1a6=_0x4ea3e6['mbJFZ'](_0x4ea3e6['NhGkW'](Number,_0x399e0b['jumpP'+'ct'])||0x1*-0x2209+-0x13d*-0x1d+-0x17c,0x1dc8*0x1+-0x1*-0x916+-0x2*0x133d),_0x13f517=_0x4ea3e6[_0x244d25(0x3b8)](_0x4ea3e6[_0x244d25(0x3eb)](Number,_0x399e0b[_0x244d25(0xbd)+'tyPct'])||0xae9+0x182d*-0x1+0xda8,0x195c+-0x2455+0xb5d),_0x4df8bb=Math[_0x244d25(0x38c)](0x23f7+0x13f7+-0x37ed,_0x4ea3e6['IzOSG'](Number,_0x399e0b[_0x244d25(0xa1)+_0x244d25(0x100)+'e'])||-0xe3+-0x12f0+0xd1*0x19),_0x100b1d=_0x4ea3e6[_0x244d25(0x373)](_0x2d9110,0x15ab+0x6d*0x24+0x127f*-0x2)||_0x4ea3e6['LTWCr'](_0x4e1a6,0x1cf2+0x11*0x59+-0x22da)||_0x13f517!==0x1b71+-0xa3*0x1f+-0x7b3||_0x399e0b[_0x244d25(0x24b)],_0x143656=_0x399e0b[_0x244d25(0x4af)+'ead']||_0x399e0b[_0x244d25(0xa1)+_0x244d25(0x604)]||_0x399e0b[_0x244d25(0x449)+'moExp']||_0x399e0b['rapid'+_0x244d25(0x2fb)];if(!_0x100b1d&&!_0x143656)return;try{if(_0x4ea3e6['wzAEG'](_0x244d25(0x13b),'UMPOS'))for(var _0x309dcb=-0x320+0x59*0xb+-0xb3*0x1;_0x309dcb<_0x3fb6cc['lengt'+'h'];_0x309dcb++){var _0x5d96fd=_0x3fb6cc[_0x309dcb];if(!_0x5d96fd)continue;if(_0x2d9110!==0x17c*0x1a+-0x7ab+-0x1eec){var _0x5e2b1b=_0x4ea3e6[_0x244d25(0x396)][_0x244d25(0x3f2)]('|'),_0x510213=0x1fca*0x1+0x1ed5+-0x3e9f;while(!![]){switch(_0x5e2b1b[_0x510213++]){case'0':_0x4ea3e6[_0x244d25(0x1c3)](_0x105267,_0x5d96fd,-0x1f83+-0x16*0x8b+-0x1*-0x2b95,_0x4ea3e6[_0x244d25(0x1f1)],_0x2d9110);continue;case'1':_0x4ea3e6['dQeYF'](_0x105267,_0x5d96fd,0x1*-0x1cdc+-0x56*-0xb+0x1956,_0x4ea3e6[_0x244d25(0x1f1)],_0x2d9110);continue;case'2':_0x105267(_0x5d96fd,-0x1bc6*0x1+-0xe74+0x2a56,_0x244d25(0x1d6),_0x2d9110);continue;case'3':_0x105267(_0x5d96fd,0x60a+0x3bc*0x4+-0x14c6*0x1,_0x4ea3e6[_0x244d25(0x1f1)],_0x2d9110);continue;case'4':_0x105267(_0x5d96fd,0x2*0x598+-0x1298+0x798,_0x4ea3e6[_0x244d25(0x1f1)],_0x2d9110);continue;case'5':_0x105267(_0x5d96fd,0x35e*-0x1+-0x5c9*-0x1+0x243*-0x1,_0x244d25(0x1d6),_0x2d9110);continue;}break;}}if(_0x4e1a6!==0x1ca+0x51*-0x39+0x1040)_0x105267(_0x5d96fd,-0xaf*0x1a+-0x1*0xb61+0x1d77,'f32',_0x4e1a6);_0x4ea3e6[_0x244d25(0x119)](_0x13f517,0x1e01+-0x17cc+-0x2*0x31a)&&(_0x105267(_0x5d96fd,0x17a2+-0x176b*0x1+0x11,_0x4ea3e6[_0x244d25(0x1f1)],_0x13f517),_0x105267(_0x5d96fd,0x23a9+-0x5*0x773+0x1e2,_0x244d25(0x1d6),_0x13f517));if(_0x399e0b['bhop'])_0xacddab(_0x5d96fd,0xce2+0x7*0x335+-0x22b9,_0x4ea3e6['oBDyu'],-(-0x1a61+0x7*0xbb+0x192b));}else{var _0x4ea0be=_0x19be76&&(_0x481388[_0x244d25(0x51c)+'ge']||_0x32f51e['error']&&_0x1ca044['error'][_0x244d25(0x51c)+'ge'])||_0x244d25(0x5fc)+'wn';if(_0x4f8ae0&&_0x2245af['filen'+_0x244d25(0x489)])_0x4ea0be+=_0x159403[_0x244d25(0x310)](_0x244d25(0x536),_0x159403['XnJwo'](_0x360b2e,_0x10fdce[_0x244d25(0x27c)+_0x244d25(0x489)])[_0x244d25(0x3f2)]('/')[_0x244d25(0x5f0)]())+':'+(_0x334fc7['linen'+'o']||'?');_0x1f6324[_0x244d25(0x56a)+'rror']=_0x240dd3(_0x4ea0be)[_0x244d25(0x434)](0xf7*0x3+0x7cc+0xa1*-0x11,-0x25c4*0x1+0x190f+0xd55);}}catch(_0x2e1a74){}try{if(_0x4ea3e6[_0x244d25(0x4c4)](_0x4ea3e6[_0x244d25(0x193)],_0x244d25(0x34e)))for(var _0x3bacab=-0x859+-0x21a0+0x29f9;_0x4ea3e6[_0x244d25(0x5e2)](_0x3bacab,_0xe1be8e[_0x244d25(0x267)+'h']);_0x3bacab++){var _0x265848=_0x3b9393(_0xe1be8e[_0x3bacab],0x16f9+-0x2*-0x1eb+-0x1*0x1a97);if(!_0x265848)continue;_0x399e0b['damag'+_0x244d25(0x604)]&&(_0x4ea3e6[_0x244d25(0x1c3)](_0xacddab,_0x265848,-0x1*0x18b3+-0x187*-0x1+0x8*0x2ef,_0x244d25(0x333),_0x4df8bb),_0xacddab(_0x265848,-0x186*-0x2+0x1*-0x1973+0x16bb,_0x4ea3e6[_0x244d25(0x54a)],_0x4df8bb));_0x399e0b[_0x244d25(0x4af)+_0x244d25(0x336)]&&(_0x4ea3e6[_0x244d25(0x41f)](_0xacddab,_0x265848,0x1*-0x25c1+-0x3*0x44f+0x3336,_0x4ea3e6[_0x244d25(0x1f1)],-0x2d*-0xb1+0x1*0x2105+-0x4022),_0x4ea3e6[_0x244d25(0x255)](_0xacddab,_0x265848,0x2624+0xce*-0xd+-0x2*0xda3,_0x244d25(0x1d6),0x3*0x5c1+-0x4b6+-0xc8c*0x1));if(_0x399e0b[_0x244d25(0x449)+_0x244d25(0xda)])_0xacddab(_0x265848,-0x1e87*0x1+-0x106a*-0x1+0xe79,_0x4ea3e6[_0x244d25(0x54a)],0x6b*-0x8+-0x1299+0x19d8);_0x399e0b['rapid'+'Exp']&&(_0x4ea3e6[_0x244d25(0x44c)](_0x105267,_0x265848,-0xe*-0x18b+-0x1af5+-0x5e7*-0x1,_0x244d25(0x1d6),-0x1e13+0x99*-0x1+0x7ab*0x4+0.1),_0x4ea3e6[_0x244d25(0x509)](_0xacddab,_0x265848,0x5ef+-0x1*0x1807+-0x1*-0x1278,_0x4ea3e6['oBDyu'],-0x5*-0x575+0x1c02+-0x13*0x2e9+0.1));}else _0x159403[_0x244d25(0x517)](_0x381e13,_0x16e75e,0x243e*0x1+0x1*-0x1c1f+-0x43*0x1d,_0x244d25(0x1d6),0x125e*0x2+0x1077+0x3533*-0x1),_0x479a96(_0x4f68b7,0xa3*0x2f+0x1ca+-0x1f4f,_0x244d25(0x1d6),0x9*0x3c2+0x2242+-0x4413);}catch(_0x3bae7b){}},-0x1*-0x399+0xae+-0x37f),_0x4ea3e6['uoUug'](setInterval,()=>{var _0x3b4a98=_0x52ced5;_0x1878f7[_0x3b4a98(0x3a4)+_0x3b4a98(0x55f)]=!!window[_0x3b4a98(0x294)+'Insta'+'nce'];try{if(_0x4ea3e6[_0x3b4a98(0x5ad)]===_0x4ea3e6['dpmUN']){var _0x1ee644=0x5aa+-0x3d8*0x6+0x83*0x22;for(var _0x4b38de in _0x4fa722){if(_0x4fa722[_0x4b38de]&&_0x4fa722[_0x4b38de][_0x3b4a98(0x508)+'ed'])_0x1ee644++;}_0x1878f7[_0x3b4a98(0x41c)+'Ok']=_0x1ee644;}else _0x25434e['safeM'+'ode']=_0x28cb2e,_0x5d1e3d(),_0x5ea442[_0x3b4a98(0xcb)+'d']();}catch(_0x518600){}},0x5*0xbd+-0x5e*0x4+0x1af);var _0x3b4aa1=new Set(),_0x4dc473={0x1:[],0x3:[]},_0x2c7783=![];function _0x506464(_0x46c4e2){var _0x2510a1=_0x52ced5;_0x4ea3e6['BsGWr']!=='AKhIt'?_0x451d88['setIt'+'em'](_0x2510a1(0x40e)+_0x2510a1(0x1ac)+_0x2510a1(0x477),_0x45dba5['strin'+'gify'](_0x28418d)):_0x3b4aa1['add'](_0x46c4e2[_0x2510a1(0x480)]);}function _0x4f5833(_0x123004){var _0x1aff53=_0x52ced5;_0x4ea3e6[_0x1aff53(0x40c)]==='CpFbJ'?(_0x46af9b[_0x1aff53(0x14b)+'e']=_0x54bc22,_0x21d2ff()):_0x3b4aa1['delet'+'e'](_0x123004[_0x1aff53(0x480)]);}function _0x35f7a7(_0x54be04){var _0x319ad9=_0x52ced5,_0x2a0a21={'xfdZs':'mouse','rFKrB':function(_0x9a292b,_0x3508ea){return _0x4ea3e6['WTMHm'](_0x9a292b,_0x3508ea);}};if(_0x4ea3e6[_0x319ad9(0x8b)]===_0x4ea3e6[_0x319ad9(0x8b)]){if(_0x54be04['__sak'+_0x319ad9(0x5b9)])return;_0x3b4aa1[_0x319ad9(0x4de)](_0x4ea3e6[_0x319ad9(0x430)](_0x319ad9(0x379),_0x4ea3e6[_0x319ad9(0x1b8)](_0x54be04[_0x319ad9(0x4f8)+'n'],-0x61*-0x36+0x212e+0xc7*-0x45)));var _0x1f33ea=_0x4dc473[_0x54be04[_0x319ad9(0x4f8)+'n']+(-0x1*0x36c+-0x755*0x3+0x196c)];if(_0x1f33ea){if(_0x4ea3e6[_0x319ad9(0x4c4)](_0x319ad9(0x4ae),_0x4ea3e6['hUQap']))try{new _0x18551c(_0x391a79)['write'+_0x319ad9(0x2f9)](_0x176f6b,_0x36be81,_0x249fcc);}catch(_0x19555e){}else{_0x1f33ea['push'](performance[_0x319ad9(0xc0)]());if(_0x4ea3e6[_0x319ad9(0x153)](_0x1f33ea['lengt'+'h'],0x53d*-0x7+-0x1*-0x2017+0x4bc))_0x1f33ea[_0x319ad9(0x1fd)]();}}}else{if(_0x1c6767['__sak'+'ura'])return;_0xac3eaf['add'](_0x2a0a21[_0x319ad9(0x548)]+_0x2a0a21[_0x319ad9(0x14c)](_0x13b05a[_0x319ad9(0x4f8)+'n'],0x5*-0x2ea+-0x2*0x116f+-0x107b*-0x3));var _0x2b32c8=_0x3b4c63[_0x291f45['butto'+'n']+(0xd3d+-0x427+-0x915)];if(_0x2b32c8){_0x2b32c8['push'](_0x7436f1[_0x319ad9(0xc0)]());if(_0x2b32c8['lengt'+'h']>0x7f*-0x35+-0x2239+0x3cac*0x1)_0x2b32c8[_0x319ad9(0x1fd)]();}}}function _0x12aa43(_0x11f9d8){var _0x38a847=_0x52ced5;if(!_0x11f9d8[_0x38a847(0x200)+'ura'])_0x3b4aa1[_0x38a847(0x5b3)+'e'](_0x4ea3e6[_0x38a847(0x2fa)]+_0x4ea3e6[_0x38a847(0x118)](_0x11f9d8[_0x38a847(0x4f8)+'n'],0x6d3+0x97*-0x27+0x102f));}function _0x1cda78(){var _0x229b03=_0x52ced5;_0x4ea3e6['kizze'](_0x4ea3e6[_0x229b03(0x177)],_0x229b03(0x4f4))?_0x3b4aa1[_0x229b03(0x107)]():(_0x1cf061[_0x229b03(0xa1)+_0x229b03(0x604)]=_0x44091f,_0x5b0b32());}function _0x412c5f(){var _0x12a52d=_0x52ced5,_0x443585={'yOBOS':function(_0x1fc2ec,_0x3fe7e1){return _0x4ea3e6['IzOSG'](_0x1fc2ec,_0x3fe7e1);},'CHEUe':function(_0x579994){return _0x4ea3e6['xmgrD'](_0x579994);}};if('UEIYH'!==_0x4ea3e6[_0x12a52d(0x27a)]){var _0x1b76b5=('5|0|4'+'|3|2|'+'1')[_0x12a52d(0x3f2)]('|'),_0x52c166=0x2057*0x1+-0x6d3*0x2+-0x12b1;while(!![]){switch(_0x1b76b5[_0x52c166++]){case'0':_0x258447[_0x12a52d(0x12f)+'onten'+'t']=_0x26efb9;continue;case'1':_0x443585['yOBOS'](_0xe1fd07,()=>_0x5c8177[_0x12a52d(0x360)+'List']['add'](_0x12a52d(0xff)));continue;case'2':_0x4ffcfa[_0x12a52d(0x261)+'dChil'+'d'](_0x3ed165);continue;case'3':_0x5d45f2=_0x443585[_0x12a52d(0x92)](_0x4033a6);continue;case'4':_0x4c11ba['appen'+'dChil'+'d'](_0x258447);continue;case'5':var _0x258447=_0x8e2c9f[_0x12a52d(0x461)+'eElem'+'ent'](_0x12a52d(0x59b));continue;}break;}}else{var _0x2980ef=_0x4ea3e6['msDmJ']['split']('|'),_0x3a1c1e=0x1*0x169+0xcb8+-0x1*0xe21;while(!![]){switch(_0x2980ef[_0x3a1c1e++]){case'0':window[_0x12a52d(0xe6)+'entLi'+'stene'+'r']('mouse'+_0x12a52d(0x35a),_0x35f7a7,!![]);continue;case'1':window[_0x12a52d(0xe6)+_0x12a52d(0x251)+_0x12a52d(0x3bb)+'r'](_0x12a52d(0x379)+'up',_0x12aa43,!![]);continue;case'2':window['addEv'+_0x12a52d(0x251)+_0x12a52d(0x3bb)+'r'](_0x4ea3e6[_0x12a52d(0x4e7)],_0x506464,!![]);continue;case'3':if(_0x2c7783)return;continue;case'4':window[_0x12a52d(0xe6)+_0x12a52d(0x251)+'stene'+'r'](_0x4ea3e6['hlmYA'],_0x1cda78);continue;case'5':window[_0x12a52d(0xe6)+_0x12a52d(0x251)+_0x12a52d(0x3bb)+'r']('keyup',_0x4f5833,!![]);continue;case'6':_0x2c7783=!![];continue;}break;}}}function _0x1d40f8(_0x4a9346){var _0x3163a5=_0x52ced5,_0x5dcd5c=_0x4dc473[_0x4a9346]||[],_0x136694=performance[_0x3163a5(0xc0)]();while(_0x5dcd5c['lengt'+'h']&&_0x4ea3e6['dwMhV'](_0x4ea3e6[_0x3163a5(0x2d3)](_0x136694,_0x5dcd5c[-0x1*-0x829+-0x9f*-0x3b+-0x136*0x25]),0x39*0x4c+0xcb*0x16+-0x1e76))_0x5dcd5c[_0x3163a5(0x1fd)]();return _0x5dcd5c[_0x3163a5(0x267)+'h'];}function _0x210d00(_0x456ba9){var _0xc09790=_0x52ced5,_0x21022e={'tbCbK':function(_0x1c1d6a){return _0x4ea3e6['xmgrD'](_0x1c1d6a);}};if(_0x4ea3e6[_0xc09790(0x377)]===_0xc09790(0x57f)){if(document[_0xc09790(0x343)]&&(document['ready'+_0xc09790(0x1b1)]===_0xc09790(0x188)+'activ'+'e'||_0x4ea3e6[_0xc09790(0x20d)](document[_0xc09790(0x455)+'State'],_0xc09790(0x36a)+_0xc09790(0x549))))_0x456ba9();else document['addEv'+'entLi'+_0xc09790(0x3bb)+'r'](_0xc09790(0x229)+'ntent'+_0xc09790(0x309)+'d',_0x456ba9,{'once':!![]});}else _0x5b758a[_0xc09790(0xa1)+_0xc09790(0x100)+'e']=_0x2488cf,_0x21022e[_0xc09790(0x3b3)](_0x404f9a);}_0x210d00(()=>{var _0x50a00f=_0x52ced5,_0x54db1c={'EbgyN':function(_0x36ad61,_0x1264e2){var _0x2e837e=_0x33fd;return _0x4ea3e6[_0x2e837e(0x473)](_0x36ad61,_0x1264e2);},'iICfd':function(_0xd7b439,_0x4e484a){return _0xd7b439===_0x4e484a;},'DdYaB':'Inser'+'t','mFYtT':_0x50a00f(0x32b)+_0x50a00f(0x4be)+_0x50a00f(0x14e)+_0x50a00f(0x334)+'nt','YKUSE':'kour-'+'io_30'+_0x50a00f(0x5de)+_0x50a00f(0x334)+'nt','DGTel':_0x4ea3e6['PZSDO'],'vnRYx':function(_0x20c5d3,_0x1e5415){return _0x4ea3e6['PcNwJ'](_0x20c5d3,_0x1e5415);},'xWttR':function(_0x48b606,_0x56452){return _0x48b606===_0x56452;},'SqZAj':'JhAYC','WwyKl':_0x50a00f(0x191),'Vnmqw':function(_0x55c360,_0x2ced99){return _0x55c360+_0x2ced99;},'hsPoq':_0x4ea3e6[_0x50a00f(0x39f)],'GShgo':_0x4ea3e6['mUzzw'],'sglJq':_0x50a00f(0x2ef)+'e','hrAsZ':function(_0x43edca,_0x19fa57){return _0x4ea3e6['kGRji'](_0x43edca,_0x19fa57);},'KzsXN':function(_0x33fdd4,_0x1ed0e1){return _0x33fdd4/_0x1ed0e1;},'PJoJz':_0x50a00f(0x561),'TpQtV':function(_0xaf8464,_0x22b6a6){return _0xaf8464*_0x22b6a6;},'PtJRt':_0x4ea3e6[_0x50a00f(0x1a4)],'jCQMB':_0x50a00f(0xd1)+'r','JGMym':function(_0x4fafed,_0x273c69){return _0x4fafed(_0x273c69);},'drNWc':function(_0x43163b,_0x48e0a5){return _0x43163b-_0x48e0a5;},'fxFaP':function(_0x100f66,_0x2cc499){return _0x100f66-_0x2cc499;},'EHmdp':function(_0x1198ca,_0x498efc){var _0x372703=_0x50a00f;return _0x4ea3e6[_0x372703(0x359)](_0x1198ca,_0x498efc);},'YUeJN':function(_0x465b2c,_0x126a65,_0x5e871b,_0x32f53a,_0x5f3bf5,_0xc23cb0,_0x361dec){return _0x465b2c(_0x126a65,_0x5e871b,_0x32f53a,_0x5f3bf5,_0xc23cb0,_0x361dec);},'vyblm':_0x50a00f(0xa0),'DaDhR':function(_0x54e773,_0x2d84ad,_0x4c4174,_0xc8d85f,_0x95eb06,_0x68f278,_0x54c3aa){return _0x54e773(_0x2d84ad,_0x4c4174,_0xc8d85f,_0x95eb06,_0x68f278,_0x54c3aa);},'QNjuO':function(_0x335609,_0x444988){var _0x35b7bd=_0x50a00f;return _0x4ea3e6[_0x35b7bd(0x219)](_0x335609,_0x444988);},'cFkVM':'\x20CPS','GleNK':function(_0x4d5cc1,_0x503848,_0x435079,_0x3f9141,_0x35584b,_0x53a942,_0x1a2bbb,_0x37ec41){return _0x4d5cc1(_0x503848,_0x435079,_0x3f9141,_0x35584b,_0x53a942,_0x1a2bbb,_0x37ec41);},'LOwOb':_0x50a00f(0x185),'iyhSk':function(_0x30b6b6,_0x3a94d0){return _0x30b6b6+_0x3a94d0;},'RgQSB':function(_0x31527e,_0x2c4408){return _0x31527e(_0x2c4408);},'vDqdU':_0x50a00f(0x532),'GgtCB':function(_0x5770e2,_0x2bc04d){return _0x5770e2*_0x2bc04d;},'cldFx':_0x4ea3e6['Yspky'],'Tstvv':_0x50a00f(0x116),'pwknv':_0x50a00f(0x51d),'LAMYg':'top','YLWwK':function(_0x196fe3,_0x5bca08,_0x185ff6){return _0x196fe3(_0x5bca08,_0x185ff6);},'eXFCy':_0x4ea3e6['VLwby'],'NLCHA':_0x50a00f(0xc5),'tHznR':function(_0x413d44,_0x455de3){return _0x413d44*_0x455de3;},'slHAm':_0x50a00f(0x5d0)+_0x50a00f(0x60e),'wynjM':'span','SDoYh':_0x50a00f(0x1d4)+'l','DneIv':function(_0x287408){return _0x287408();},'CYIVb':_0x4ea3e6['BnHGB'],'GiEGi':_0x50a00f(0x1c4)+_0x50a00f(0x24a),'REJHI':'5|1|2'+_0x50a00f(0x32a)+'0','QAWqC':_0x50a00f(0x4f8)+'n','Zrrfs':_0x50a00f(0xc7)+'n','AseLk':_0x4ea3e6[_0x50a00f(0x8f)],'XHbef':'div','QCjJq':function(_0x31d89c,_0x1a09ce){return _0x31d89c+_0x1a09ce;},'NXxuq':'\x20on','ljfvb':_0x4ea3e6['sqtKZ'],'Muhvw':_0x50a00f(0x4f2)+'rd-ti'+_0x50a00f(0x578),'kdpku':'onBtX','XoXkC':_0x4ea3e6['hibPG'],'POmvx':'sk-md'+_0x50a00f(0x411),'pZiFJ':function(_0x6549a7,_0x41e309){return _0x6549a7+_0x41e309;},'ppYUD':_0x50a00f(0x335)+'bound'+'\x20','DNbPm':_0x4ea3e6['YdXik'],'ElGSb':_0x50a00f(0x1ee),'MsxVd':_0x4ea3e6[_0x50a00f(0x397)],'bgLnb':'UWMK\x20'+_0x50a00f(0x3e4)+'NG\x20—\x20'+_0x50a00f(0x393)+_0x50a00f(0x1f2)+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x50a00f(0x111)+_0x50a00f(0x1cd),'PQlUV':_0x4ea3e6['AjncN'],'kWSuf':function(_0x253dd8,_0x41fc8b,_0x1bfdb6,_0xf30e4b,_0x4f3ad6,_0x3661ce){var _0x366c63=_0x50a00f;return _0x4ea3e6[_0x366c63(0x50c)](_0x253dd8,_0x41fc8b,_0x1bfdb6,_0xf30e4b,_0x4f3ad6,_0x3661ce);},'bHVHH':'calls'+'\x20Unit'+_0x50a00f(0x24f)+_0x50a00f(0x38e)+'plica'+'tion.'+_0x50a00f(0x348)+_0x50a00f(0x43d)+'Frame'+_0x50a00f(0x329),'xDosw':_0x4ea3e6[_0x50a00f(0x576)],'RnacO':'GMFSj','iPlOf':function(_0x2b99d1){return _0x2b99d1();},'etLbT':'5|2|3'+_0x50a00f(0x394)+'4','mATox':_0x4ea3e6['PIiHN'],'YoyZb':'SAFE\x20'+'MODE\x20'+_0x50a00f(0x122)+_0x50a00f(0x306)+'only,'+'\x20no\x20h'+_0x50a00f(0x1dd)+'(relo'+_0x50a00f(0x44a)+_0x50a00f(0x389)+')','eNCna':_0x4ea3e6[_0x50a00f(0x587)],'kBJyi':_0x50a00f(0xb9)+_0x50a00f(0x166),'avxVg':_0x4ea3e6['twxxT'],'pTOFk':function(_0x3a6162,_0x2d6bae){var _0x214f9c=_0x50a00f;return _0x4ea3e6[_0x214f9c(0x403)](_0x3a6162,_0x2d6bae);},'nsimX':_0x4ea3e6[_0x50a00f(0x1fe)],'FVEVN':function(_0x2fac77,_0x1d9495){return _0x2fac77!==_0x1d9495;},'Vmtph':function(_0x3e502d,_0x226509){var _0x12e3ec=_0x50a00f;return _0x4ea3e6[_0x12e3ec(0x5e2)](_0x3e502d,_0x226509);},'sfvmG':function(_0x5b8ad4,_0x29b207){var _0x34816c=_0x50a00f;return _0x4ea3e6[_0x34816c(0x467)](_0x5b8ad4,_0x29b207);},'PvvhA':function(_0x39bfd4,_0x119df3){return _0x39bfd4+_0x119df3;},'OOrpb':function(_0x8bb1c1,_0x5a3a22){var _0x2b066b=_0x50a00f;return _0x4ea3e6[_0x2b066b(0x467)](_0x8bb1c1,_0x5a3a22);},'tqhWB':function(_0x29e572,_0x13d72c){return _0x4ea3e6['HkjMm'](_0x29e572,_0x13d72c);},'cCyEp':_0x50a00f(0x3bc)+'ks\x20ar'+_0x50a00f(0x5a4)+_0x50a00f(0x466)+_0x50a00f(0x5b1),'KlHpd':_0x50a00f(0x5f2)+'d','SBwBb':'UWMK\x20'+_0x50a00f(0x3e4)+'NG\x20-\x20'+_0x50a00f(0x393)+_0x50a00f(0x1f2)+'ly\x20(r'+_0x50a00f(0x383)+_0x50a00f(0x42f)+_0x50a00f(0x478)+_0x50a00f(0x111)+_0x50a00f(0x1cd)};_0x399e0b[_0x50a00f(0x54d)+'ck']&&_0x4ea3e6['LbbWf'](setInterval,()=>{var _0x192f9a=_0x50a00f,_0x206bd3={'olTwV':function(_0xe8f19,_0x2646b6){return _0xe8f19/_0x2646b6;},'beblt':function(_0x16749a,_0x125a02){var _0x4ba2b8=_0x33fd;return _0x54db1c[_0x4ba2b8(0x5e5)](_0x16749a,_0x125a02);},'GqFMs':function(_0x1a1ac2,_0x3c39ba){var _0x5593cd=_0x33fd;return _0x54db1c[_0x5593cd(0x292)](_0x1a1ac2,_0x3c39ba);},'nffmK':_0x54db1c['DdYaB']};try{if('vutHy'==='vutHy')for(var _0xcef696 of[_0x54db1c['mFYtT'],_0x192f9a(0x32b)+'io_72'+_0x192f9a(0x5c1)+_0x192f9a(0x29f)+'t',_0x54db1c['YKUSE'],_0x54db1c['DGTel']]){var _0x19a81c=document[_0x192f9a(0x4a5)+_0x192f9a(0x3c9)+'ById'](_0xcef696);if(_0x19a81c&&_0xcef696===_0x192f9a(0x445)+_0x192f9a(0x304)+_0x192f9a(0x519)+'s'){if(_0x54db1c[_0x192f9a(0x56c)](_0x192f9a(0x23c),_0x192f9a(0x23c)))_0x1bb5a5=_0x2855a4['round'](_0x206bd3[_0x192f9a(0x2f8)](_0x206bd3[_0x192f9a(0x1bc)](_0x20d344,-0x2*0xc67+-0x1*0x1d96+0x3a4c),_0x169781-_0x200e74)),_0xe2c883=-0x61a+-0x2*-0xc9d+-0x9*0x220,_0x5888e9=_0x565c37;else{var _0x466e04=_0x19a81c['child'+_0x192f9a(0xec)];for(var _0x3c3ad6=-0x43*-0x1b+0x7*0x1f5+0x3*-0x6ec;_0x3c3ad6<_0x466e04[_0x192f9a(0x267)+'h'];_0x3c3ad6++){if(_0x54db1c[_0x192f9a(0x5a3)](_0x54db1c[_0x192f9a(0x2c2)],_0x192f9a(0x11c)))_0x206bd3['GqFMs'](_0x5d0ff9['code'],_0x206bd3['nffmK'])&&(_0x20c49a[_0x192f9a(0x5c4)+_0x192f9a(0x1f7)+'ault'](),_0x5c5ab4());else{if(_0x466e04[_0x3c3ad6]['id']&&_0x466e04[_0x3c3ad6]['id'][_0x192f9a(0x199)+'Of']('kour-'+_0x192f9a(0x28a))===0x727*-0x3+-0x4*-0x56f+0x47*-0x1)_0x466e04[_0x3c3ad6][_0x192f9a(0x59b)][_0x192f9a(0x287)+'ay']=_0x54db1c[_0x192f9a(0x569)];}}}}else{if(_0x19a81c)_0x19a81c[_0x192f9a(0x59b)][_0x192f9a(0x287)+'ay']='none';}}else{if(!_0x3601be||_0x20682c[_0x192f9a(0x114)+_0x192f9a(0x372)](_0x328190)||_0x30e4df[_0x192f9a(0x267)+'h']>0xa9+0x25d0+-0x2639)return;_0xf5529b['push'](_0x20de49);}}catch(_0x402feb){}},-0xb22+0x13ae+-0xbc);var _0x1cd2b7=document[_0x50a00f(0x461)+_0x50a00f(0x184)+_0x50a00f(0x4ed)](_0x4ea3e6[_0x50a00f(0xb6)]);_0x1cd2b7['style'][_0x50a00f(0x46a)+'xt']='posit'+'ion:f'+_0x50a00f(0x5d7)+'inset'+_0x50a00f(0x599)+'dth:1'+_0x50a00f(0x167)+_0x50a00f(0x16c)+_0x50a00f(0xd5)+'vh;z-'+_0x50a00f(0x199)+_0x50a00f(0x3e8)+'48364'+'6;poi'+_0x50a00f(0x148)+_0x50a00f(0x112)+_0x50a00f(0x305)+'e';var _0x17036e=_0x1cd2b7[_0x50a00f(0x135)+'ntext']('2d');function _0x4c0c18(){var _0x1eae1a=_0x50a00f;try{var _0x1ab4f8=document['fulls'+_0x1eae1a(0x304)+'Eleme'+'nt'],_0x138bcc=_0x1ab4f8&&_0x1ab4f8['tagNa'+'me']!==_0x1eae1a(0x2bc)+'S'?_0x1ab4f8:document[_0x1eae1a(0x343)]||document[_0x1eae1a(0x3fe)+_0x1eae1a(0x483)+_0x1eae1a(0x3c9)];if(_0x4ea3e6[_0x1eae1a(0x3f9)](_0x1cd2b7[_0x1eae1a(0x29f)+_0x1eae1a(0x1e2)],_0x138bcc))_0x138bcc[_0x1eae1a(0x261)+_0x1eae1a(0x2ee)+'d'](_0x1cd2b7);}catch(_0x10f78e){try{document['body']['appen'+'dChil'+'d'](_0x1cd2b7);}catch(_0x3981c1){}}}var _0xdbc2ed={'w':0x0,'h':0x0,'dpr':0x0};function _0x9190f8(){var _0x567686=_0x50a00f,_0x3b960c=window[_0x567686(0x4b8)+'ePixe'+_0x567686(0x48a)+'o']||-0x1c0b*0x1+0x296+0x1976,_0x1b4b0b=window[_0x567686(0x49c)+_0x567686(0x2a4)],_0x50af17=window['inner'+_0x567686(0x371)+'t'];if(_0x1b4b0b===_0xdbc2ed['w']&&_0x4ea3e6[_0x567686(0x5c9)](_0x50af17,_0xdbc2ed['h'])&&_0x4ea3e6[_0x567686(0x3f4)](_0x3b960c,_0xdbc2ed[_0x567686(0x565)]))return;_0xdbc2ed['w']=_0x1b4b0b,_0xdbc2ed['h']=_0x50af17,_0xdbc2ed['dpr']=_0x3b960c,_0x1cd2b7['width']=Math['round'](_0x4ea3e6['dERPr'](_0x1b4b0b,_0x3b960c)),_0x1cd2b7['heigh'+'t']=Math['round'](_0x50af17*_0x3b960c),_0x17036e['setTr'+_0x567686(0x58c)+'rm'](_0x3b960c,0x1f*0x116+0x1*0x5ad+-0x2757,-0x322+-0x43b*0x3+0xfd3,_0x3b960c,-0x21e8+0xd67+-0x1d*-0xb5,0x92*-0x5+-0xfe6+0x5*0x3c0);}var _0x4c11f8=0x77f+0x2*-0x5cf+0x41f,_0x391eea=performance[_0x50a00f(0xc0)](),_0x2b7cb0=0x1*-0xa2b+-0xce1+0x170c;function _0x45fa6d(_0x5a3a3b){var _0x3af16c=_0x50a00f,_0x5e1340=_0x54db1c['JGMym'](Number,_0x399e0b[_0x3af16c(0x1bd)+'le'])||0x266e+0x18b9*0x1+-0x3f26,_0x1da173=(0x251b+-0x196f+0xd3*-0xe)*_0x5e1340,_0x5c0f37=_0x54db1c[_0x3af16c(0x5e5)](-0x1f*-0x2f+0x148*0x4+0x1*-0xacd,_0x5e1340),_0x395631=_0x1da173*(-0x19*0xa5+-0x1aee+0x2b0e)+_0x5c0f37*(-0x1298+0xdb3+0x5*0xfb),_0x171ba6=_0x54db1c['Vnmqw'](_0x1da173*(0xa41+0x132c*-0x1+-0x3*-0x2fa),_0x5c0f37*(-0xb*0x1e7+-0x83*0x24+-0x7df*-0x5)),_0x1dbb0d=_0x399e0b['ksPos'],_0xa9d1c3=_0x1dbb0d==='br'?_0x54db1c[_0x3af16c(0x482)](_0x54db1c['fxFaP'](_0x5a3a3b[_0x3af16c(0x493)],0x28*-0x71+0x1128+0x3*0x30),_0x395631):_0x5a3a3b[_0x3af16c(0x51d)]+(-0x1*-0x1bf9+0x972*0x3+0x1*-0x383f),_0x477ac6=_0x1dbb0d==='ml'?_0x54db1c[_0x3af16c(0xa7)](_0x5a3a3b['top'],_0x54db1c[_0x3af16c(0x499)](_0x5a3a3b['heigh'+'t'],-0x274*-0x7+0x10ef+-0x2219))-_0x171ba6/(0x143e+-0xaa3+0x999*-0x1):_0x54db1c[_0x3af16c(0x1af)](_0x5a3a3b[_0x3af16c(0x24c)+'m'],_0x171ba6)-(_0x1dbb0d==='bl'?-0x351+-0x2b8+0x223*0x3:-0x155+-0x611*0x5+0x2040),_0x34a2d9=(_0x3ead1b,_0x45d021,_0x9f35bd,_0x3871b1,_0xc6c53b,_0x39f08d,_0x3b9e91)=>{var _0x1c7b8e=_0x3af16c,_0x5de4f5=('13|2|'+'12|7|'+'15|14'+'|5|1|'+_0x1c7b8e(0x454)+'|16|6'+'|0|10'+'|11|4')[_0x1c7b8e(0x3f2)]('|'),_0x13392a=0x15a*-0x10+0xf55+-0x3*-0x219;while(!![]){switch(_0x5de4f5[_0x13392a++]){case'0':_0x17036e['font']=_0x54db1c['Vnmqw']('700\x20',Math[_0x1c7b8e(0x2d8)]((0x2*0x524+-0xb*-0xbb+0x1245*-0x1)*_0x5e1340))+('px\x20ui'+'-sans'+_0x1c7b8e(0x1e4)+_0x1c7b8e(0x2a6)+_0x1c7b8e(0x4ea)+'i,san'+_0x1c7b8e(0x275)+'if');continue;case'1':_0x17036e[_0x1c7b8e(0x237)+'eStyl'+'e']=_0x400335?_0x11b22c:_0x54db1c[_0x1c7b8e(0x2c3)];continue;case'2':_0x17036e['save']();continue;case'3':_0x17036e[_0x1c7b8e(0x2ae)+_0x1c7b8e(0x1eb)]=_0x400335?'#fff':_0x54db1c[_0x1c7b8e(0x5d5)];continue;case'4':_0x17036e[_0x1c7b8e(0x2aa)+'re']();continue;case'5':_0x17036e['lineW'+'idth']=-0x5b5+0x1bc3+-0x1*0x160d;continue;case'6':_0x17036e[_0x1c7b8e(0x25c)+'aseli'+'ne']=_0x54db1c[_0x1c7b8e(0x13a)];continue;case'7':if(_0x17036e['round'+_0x1c7b8e(0x57c)])_0x17036e[_0x1c7b8e(0x2d8)+'Rect'](_0x9f35bd,_0x3871b1,_0xc6c53b,_0x39f08d,(0x1d*-0x11a+-0x2eb*0x2+0x25cf)*_0x5e1340);else _0x17036e['rect'](_0x9f35bd,_0x3871b1,_0xc6c53b,_0x39f08d);continue;case'8':_0x400335&&(_0x17036e[_0x1c7b8e(0xa9)+'wColo'+'r']=_0x1598d4,_0x17036e[_0x1c7b8e(0xa9)+_0x1c7b8e(0xad)]=0x1581+0x621*0x1+-0x1b94,_0x17036e['fill'](),_0x17036e['shado'+_0x1c7b8e(0xad)]=0x2*0x67f+0x445+-0x1143);continue;case'9':_0x17036e['strok'+'e']();continue;case'10':_0x17036e['fillT'+'ext'](_0x3ead1b,_0x54db1c[_0x1c7b8e(0xa7)](_0x9f35bd,_0x54db1c[_0x1c7b8e(0x192)](_0xc6c53b,-0x559*-0x5+0x15e6+0x1*-0x30a1)),_0x3871b1+_0x54db1c['KzsXN'](_0x39f08d,-0xa08*0x1+0xdc4+-0x3ba)-(_0x3b9e91?(-0xe48+-0x106b+0x1eb8)*_0x5e1340:-0x17*-0x9f+-0x11c0+-0x1*-0x377));continue;case'11':_0x3b9e91&&(_0x17036e['font']=_0x54db1c[_0x1c7b8e(0xa7)](_0x54db1c[_0x1c7b8e(0x10a)]+Math[_0x1c7b8e(0x2d8)](_0x54db1c[_0x1c7b8e(0x268)](0x1ad3+-0x1*-0xbf6+-0x26c0,_0x5e1340)),_0x1c7b8e(0x34b)+_0x1c7b8e(0x170)+'-seri'+_0x1c7b8e(0x2a6)+'tem-u'+'i,san'+_0x1c7b8e(0x275)+'if'),_0x17036e['fillS'+_0x1c7b8e(0x1eb)]=_0x400335?_0x54db1c[_0x1c7b8e(0x5a1)]:'rgba('+'255,2'+_0x1c7b8e(0x601)+_0x1c7b8e(0x240)+'5)',_0x17036e[_0x1c7b8e(0x308)+_0x1c7b8e(0x158)](_0x3b9e91,_0x54db1c[_0x1c7b8e(0xa7)](_0x9f35bd,_0xc6c53b/(0x1*-0x41+-0x21b7+0x21fa)),_0x3871b1+_0x39f08d/(-0x3f9+0xcd2+-0x8d7*0x1)+(0x228a+0xc11+-0x2e93)*_0x5e1340));continue;case'12':_0x17036e[_0x1c7b8e(0x89)+'Path']();continue;case'13':var _0x400335=_0x3b4aa1['has'](_0x45d021);continue;case'14':_0x17036e['fill']();continue;case'15':_0x17036e[_0x1c7b8e(0x2ae)+'tyle']=_0x400335?'rgba('+_0x1c7b8e(0x5d2)+_0x1c7b8e(0x2d7)+_0x1c7b8e(0x53a)+'5)':'rgba('+'22,8,'+_0x1c7b8e(0x3da)+'7)';continue;case'16':_0x17036e[_0x1c7b8e(0x260)+_0x1c7b8e(0x48d)]=_0x54db1c[_0x1c7b8e(0x297)];continue;}break;}};_0x54db1c[_0x3af16c(0x3be)](_0x34a2d9,'W','KeyW',_0xa9d1c3+_0x1da173+_0x5c0f37,_0x477ac6,_0x1da173,_0x1da173),_0x34a2d9('A','KeyA',_0xa9d1c3,_0x477ac6+_0x1da173+_0x5c0f37,_0x1da173,_0x1da173),_0x34a2d9('S',_0x54db1c['vyblm'],_0xa9d1c3+_0x1da173+_0x5c0f37,_0x477ac6+_0x1da173+_0x5c0f37,_0x1da173,_0x1da173),_0x54db1c[_0x3af16c(0x175)](_0x34a2d9,'D',_0x3af16c(0x59c),_0xa9d1c3+(_0x1da173+_0x5c0f37)*(-0x1607*0x1+0x1dc3+-0x7ba),_0x54db1c['Vnmqw'](_0x477ac6+_0x1da173,_0x5c0f37),_0x1da173,_0x1da173);var _0x4cf7f2=_0x54db1c[_0x3af16c(0x192)](_0x395631-_0x5c0f37,0x32a+0x4*-0x609+0x14fc),_0x5952b5=_0x477ac6+_0x54db1c[_0x3af16c(0x300)](_0x54db1c[_0x3af16c(0xa7)](_0x1da173,_0x5c0f37),0x14a8+0x2217+-0x36bd);_0x34a2d9('LMB',_0x3af16c(0x379)+'1',_0xa9d1c3,_0x5952b5,_0x4cf7f2,_0x1da173,_0x399e0b[_0x3af16c(0x401)]?_0x1d40f8(0x1bb*-0x3+0x2c7+-0x1*-0x26b)+_0x54db1c[_0x3af16c(0x4fb)]:''),_0x54db1c['GleNK'](_0x34a2d9,_0x54db1c['LOwOb'],_0x3af16c(0x379)+'3',_0x54db1c[_0x3af16c(0xa7)](_0x54db1c['iyhSk'](_0xa9d1c3,_0x4cf7f2),_0x5c0f37),_0x5952b5,_0x4cf7f2,_0x1da173,_0x399e0b[_0x3af16c(0x401)]?_0x54db1c[_0x3af16c(0xa7)](_0x54db1c['RgQSB'](_0x1d40f8,-0x655+-0x12a3*-0x2+0xd6*-0x25),_0x54db1c[_0x3af16c(0x4fb)]):''),_0x34a2d9('',_0x54db1c[_0x3af16c(0x4d4)],_0xa9d1c3,_0x5952b5+_0x1da173+_0x5c0f37,_0x395631,_0x54db1c['GgtCB'](_0x1da173,0xc4d+0x1749+-0x2396+0.45));}function _0x528954(_0x2bb0d0){var _0x3b72d9=_0x50a00f,_0x2d26ed=(_0x3b72d9(0x523)+_0x3b72d9(0x412)+_0x3b72d9(0x5fb)+'18|10'+_0x3b72d9(0x157)+'|19|2'+_0x3b72d9(0x2e9)+'2|21|'+_0x3b72d9(0x17d)+_0x3b72d9(0x375)+'13|6|'+_0x3b72d9(0x32f)+'1')[_0x3b72d9(0x3f2)]('|'),_0x1a4a5c=0x11d7+-0x15be+0x6f*0x9;while(!![]){switch(_0x2d26ed[_0x1a4a5c++]){case'0':_0x17036e['lineT'+'o'](_0x319a93,_0x4bc985-_0x40f069);continue;case'1':_0x17036e[_0x3b72d9(0x2aa)+'re']();continue;case'2':_0x17036e['moveT'+'o'](_0x319a93+_0x40f069,_0x4bc985);continue;case'3':var _0x40f069=(0x1*0x22a8+-0x2275+-0x2d)*_0x11df57,_0x26511b=(0x1651+0x1*-0x1f05+0x45e*0x2)*_0x11df57;continue;case'4':_0x17036e[_0x3b72d9(0xf8)+'o'](_0x319a93,_0x4ea3e6['WhVPk'](_0x4bc985+_0x40f069,_0x26511b));continue;case'5':_0x17036e['fillS'+'tyle']=_0x307c77;continue;case'6':_0x17036e['begin'+'Path']();continue;case'7':var _0x307c77=/^#[0-9a-f]{6}$/i[_0x3b72d9(0x505)](_0x399e0b['chCol'+'or'])?_0x399e0b[_0x3b72d9(0xeb)+'or']:_0x3b72d9(0x180)+'9d';continue;case'8':_0x17036e['arc'](_0x319a93,_0x4bc985,(0x5*0x714+0x6cf+-0xb*0x3d6+0.6000000000000001)*_0x11df57,-0x1441+-0x1fba+0x33fb,Math['PI']*(-0x10*0x17d+-0x67d*-0x6+-0xf1c));continue;case'9':var _0x11df57=_0x4ea3e6['ndUYB'](Number,_0x399e0b['chSiz'+'e'])||-0x2eb*0x4+0x1e62+-0x12b5;continue;case'10':_0x17036e[_0x3b72d9(0xa9)+'wColo'+'r']=_0x307c77;continue;case'11':_0x17036e['fill']();continue;case'12':_0x17036e[_0x3b72d9(0xf8)+'o'](_0x319a93-_0x40f069,_0x4bc985);continue;case'13':_0x17036e[_0x3b72d9(0x237)+'e']();continue;case'14':var _0x319a93=_0x4ea3e6['RSgRp'](_0x2bb0d0[_0x3b72d9(0x331)],-0x38f+0x970*0x4+-0x222f),_0x4bc985=_0x2bb0d0[_0x3b72d9(0x16c)+'t']/(-0x265*0x1+0x5*-0x415+0x16d0);continue;case'15':_0x17036e[_0x3b72d9(0xa9)+_0x3b72d9(0xad)]=0x1646+-0xb3+0x1*-0x158d;continue;case'16':_0x17036e[_0x3b72d9(0x469)]();continue;case'17':_0x17036e[_0x3b72d9(0x160)+'o'](_0x319a93,_0x4bc985-_0x40f069-_0x26511b);continue;case'18':_0x17036e[_0x3b72d9(0x5aa)+_0x3b72d9(0x2a5)]=Math[_0x3b72d9(0x38c)](0x8*0x335+-0xa5e+-0xf49+0.5,(0x1ae5+0x1ce5+-0xee*0x3c)*_0x11df57);continue;case'19':_0x17036e[_0x3b72d9(0x89)+'Path']();continue;case'20':_0x17036e[_0x3b72d9(0x237)+'eStyl'+'e']=_0x307c77;continue;case'21':_0x17036e[_0x3b72d9(0xf8)+'o'](_0x4ea3e6[_0x3b72d9(0x4d9)](_0x319a93+_0x40f069,_0x26511b),_0x4bc985);continue;case'22':_0x17036e['moveT'+'o'](_0x4ea3e6['SClOg'](_0x319a93,_0x40f069)-_0x26511b,_0x4bc985);continue;case'23':_0x17036e[_0x3b72d9(0x160)+'o'](_0x319a93,_0x4ea3e6[_0x3b72d9(0x45e)](_0x4bc985,_0x40f069));continue;}break;}}function _0x206bb0(_0x18c29a){var _0x31fc0f=_0x50a00f,_0x31db3c={'ZtbcR':function(_0x29e02b,_0x21ed9f){return _0x29e02b||_0x21ed9f;},'FPxAG':_0x54db1c[_0x31fc0f(0xe2)]};if(_0x54db1c['Tstvv']!==_0x54db1c[_0x31fc0f(0x36f)])_0x1afbd3['keyst'+'rokes']=_0x35572f,_0x191994();else{_0x17036e['save'](),_0x17036e['font']='600\x201'+'2px\x20u'+'i-mon'+'ospac'+_0x31fc0f(0xc9)+'ospac'+'e',_0x17036e['textA'+_0x31fc0f(0x48d)]=_0x54db1c[_0x31fc0f(0x98)],_0x17036e['textB'+_0x31fc0f(0x50e)+'ne']=_0x54db1c[_0x31fc0f(0x3f5)];var _0x55bf24=-0x1ccd+0x415+0x18e4,_0x3d8a87=0x67f+-0xad3+-0x4*-0x118,_0x46b663=(_0x2fd793,_0x572317)=>{var _0x4d7942=_0x31fc0f;_0x17036e[_0x4d7942(0x2ae)+_0x4d7942(0x1eb)]=_0x31db3c['ZtbcR'](_0x572317,_0x31db3c['FPxAG']),_0x17036e[_0x4d7942(0x308)+_0x4d7942(0x158)](_0x2fd793,_0x3d8a87,_0x55bf24),_0x55bf24+=0x3*0x945+0x2021+-0x3be0;};_0x54db1c['YLWwK'](_0x46b663,'SAKUR'+_0x31fc0f(0xf7)+_0x31fc0f(0x3aa)+'1',_0x31fc0f(0x180)+'9d');if(_0x399e0b[_0x31fc0f(0x38f)])_0x54db1c['JGMym'](_0x46b663,_0x54db1c[_0x31fc0f(0x208)](_0x2b7cb0,_0x31fc0f(0xd8)));if(!_0x1878f7['gameL'+_0x31fc0f(0x55f)])_0x46b663('waiti'+'ng\x20fo'+_0x31fc0f(0x4c7)+'e…',_0x54db1c['eXFCy']);_0x17036e[_0x31fc0f(0x2aa)+'re']();}}function _0x376a29(){var _0x54b9da=_0x50a00f;requestAnimationFrame(_0x376a29),_0x4c11f8++;var _0x260012=performance[_0x54b9da(0xc0)]();_0x4ea3e6[_0x54b9da(0x253)](_0x260012,_0x391eea)>=-0x1a21+0x3d*0x7a+-0xfd&&(_0x2b7cb0=Math['round'](_0x4ea3e6[_0x54b9da(0x512)](_0x4ea3e6[_0x54b9da(0x219)](_0x4c11f8,0x1177+-0x151*-0x1d+-0x33bc),_0x260012-_0x391eea)),_0x4c11f8=0x249+0x2*-0x1073+0x1e9d*0x1,_0x391eea=_0x260012);_0x4ea3e6[_0x54b9da(0x45f)](_0x9190f8),_0x4c0c18(),_0x17036e['clear'+'Rect'](0xa4e*0x2+-0x2*0x135d+0x121e,-0x5a7+-0x1c53+0x21fa,_0xdbc2ed['w'],_0xdbc2ed['h']);var _0x115274={'left':0x0,'top':0x0,'right':_0xdbc2ed['w'],'bottom':_0xdbc2ed['h'],'width':_0xdbc2ed['w'],'height':_0xdbc2ed['h']};if(_0x399e0b[_0x54b9da(0x13e)+'hair'])_0x4ea3e6[_0x54b9da(0x424)](_0x528954,_0x115274);if(_0x399e0b[_0x54b9da(0x503)+_0x54b9da(0x3ba)])_0x4ea3e6[_0x54b9da(0x21e)](_0x45fa6d,_0x115274);_0x206bb0(_0x115274);}var _0x5802a8=document['creat'+_0x50a00f(0x184)+'ent'](_0x4ea3e6[_0x50a00f(0x5ba)]);_0x5802a8['id']='sakur'+_0x50a00f(0x171),_0x5802a8[_0x50a00f(0x59b)]['cssTe'+'xt']=_0x4ea3e6[_0x50a00f(0x169)];var _0x5e2eca=_0x5802a8['attac'+'hShad'+'ow']({'mode':_0x4ea3e6[_0x50a00f(0x3b4)]});(document['body']||document[_0x50a00f(0x3fe)+_0x50a00f(0x483)+_0x50a00f(0x3c9)])[_0x50a00f(0x261)+'dChil'+'d'](_0x5802a8);var _0xb3c1c5=![],_0x430043={};try{_0x430043=JSON[_0x50a00f(0x5b4)](localStorage[_0x50a00f(0x350)+'em'](_0x4ea3e6[_0x50a00f(0x2a8)])||'{}');}catch(_0x45a125){}function _0x17699a(){var _0xdbacd1=_0x50a00f;if(_0x4ea3e6[_0xdbacd1(0x3f9)](_0x4ea3e6[_0xdbacd1(0x1e5)],'UozpG'))_0xa0e990[_0xdbacd1(0xbd)+_0xdbacd1(0x131)]=_0x7d8c8c,_0x9b5507();else try{localStorage['setIt'+'em'](_0x4ea3e6['gQWAE'],JSON['strin'+'gify'](_0x430043));}catch(_0x284887){}}function _0x5d95b2(_0x35eaef,_0x59282c){var _0x194be1=_0x50a00f,_0x1945c0=(_0x194be1(0x1bb)+_0x194be1(0x3ca)+_0x194be1(0x293))[_0x194be1(0x3f2)]('|'),_0x908124=0x2bf+0x1*0x1c45+-0x1f04;while(!![]){switch(_0x1945c0[_0x908124++]){case'0':_0x57a8f1['setAt'+_0x194be1(0x341)+'te'](_0x194be1(0x591)+_0x194be1(0x241)+'ed',_0x4ea3e6['ovGVu'](String,!!_0x35eaef));continue;case'1':return _0x57a8f1;case'2':_0x57a8f1['class'+_0x194be1(0x5c0)]=_0x4ea3e6[_0x194be1(0x137)];continue;case'3':_0x57a8f1[_0x194be1(0x533)+'ck']=_0x361fb8=>{var _0x5801bf=_0x194be1;_0x361fb8[_0x5801bf(0x3d7)+_0x5801bf(0x2ed)+_0x5801bf(0x132)]();var _0x1b1801=_0x57a8f1['getAt'+_0x5801bf(0x341)+'te']('aria-'+_0x5801bf(0x241)+'ed')!==_0x15d73f[_0x5801bf(0x314)];_0x57a8f1[_0x5801bf(0x3e1)+'tribu'+'te'](_0x5801bf(0x591)+_0x5801bf(0x241)+'ed',String(_0x1b1801)),_0x59282c(_0x1b1801);};continue;case'4':var _0x57a8f1=document['creat'+'eElem'+_0x194be1(0x4ed)]('butto'+'n');continue;case'5':var _0x15d73f={'zAxfW':_0x4ea3e6[_0x194be1(0xd3)]};continue;case'6':_0x57a8f1[_0x194be1(0x3e1)+_0x194be1(0x341)+'te'](_0x4ea3e6[_0x194be1(0x366)],_0x194be1(0x2a0)+'h');continue;case'7':_0x57a8f1['type']=_0x194be1(0x4f8)+'n';continue;}break;}}function _0x5276d6(_0x589061,_0x1f7e2b,_0x4f5d47,_0x40a263,_0x593adb){var _0x55c4a9=_0x50a00f,_0x578b4b={'fiTfh':_0x54db1c[_0x55c4a9(0x566)],'UTwqo':function(_0x4d285f,_0x52d79e){return _0x4d285f+_0x52d79e;},'xMTpl':function(_0x4a4db7,_0x57c5a5){return _0x54db1c['tHznR'](_0x4a4db7,_0x57c5a5);},'fXHzC':function(_0x26ed4b,_0x30be96){return _0x26ed4b-_0x30be96;},'cqVdd':function(_0x3c9068){return _0x3c9068();}},_0x89f2fa=document['creat'+_0x55c4a9(0x184)+'ent'](_0x55c4a9(0x381));_0x89f2fa['class'+_0x55c4a9(0x5c0)]='sk-ra'+'nge';var _0xfbf9a9=document[_0x55c4a9(0x461)+_0x55c4a9(0x184)+'ent'](_0x55c4a9(0x472));_0xfbf9a9['type']=_0x55c4a9(0x416),_0xfbf9a9['class'+_0x55c4a9(0x5c0)]=_0x54db1c[_0x55c4a9(0x60f)],_0xfbf9a9['min']=_0x1f7e2b,_0xfbf9a9['max']=_0x4f5d47,_0xfbf9a9[_0x55c4a9(0x4cf)]=_0x40a263,_0xfbf9a9[_0x55c4a9(0x58d)]=_0x589061;var _0x45a280=document[_0x55c4a9(0x461)+'eElem'+_0x55c4a9(0x4ed)](_0x54db1c['wynjM']);_0x45a280['class'+_0x55c4a9(0x5c0)]=_0x54db1c[_0x55c4a9(0x5c6)],_0x45a280[_0x55c4a9(0x12f)+_0x55c4a9(0x2da)+'t']=String(_0x589061);var _0x1b4786=()=>{var _0x359759=_0x55c4a9,_0xd4948d={'GMCMq':function(_0x4988c3,_0x2e2f3d,_0x531ac4,_0x164623,_0x277ba9){return _0x4988c3(_0x2e2f3d,_0x531ac4,_0x164623,_0x277ba9);},'wUTJV':function(_0x5272a9,_0x10638e){return _0x5272a9*_0x10638e;}};if(_0x578b4b[_0x359759(0x252)]===_0x578b4b['fiTfh'])_0x45a280[_0x359759(0x12f)+_0x359759(0x2da)+'t']=String(_0xfbf9a9['value']),_0x89f2fa[_0x359759(0x59b)][_0x359759(0x58b)+'opert'+'y']('--p',_0x578b4b['UTwqo'](_0x578b4b[_0x359759(0x4cc)](_0x578b4b['fXHzC'](_0xfbf9a9['value'],_0x1f7e2b)/(_0x4f5d47-_0x1f7e2b),0x1b*-0x71+-0x213d+-0xdc*-0x35),'%'));else{var _0x31ef8c=_0x48863a(_0x1f40c1,_0x4c288b,_0x56e958);if(_0x31ef8c!=null)_0xd4948d[_0x359759(0x5f6)](_0x5b45d8,_0x22fb75,_0x48e57,_0x23f4dc,_0xd4948d[_0x359759(0x471)](_0x31ef8c,_0x5c732d));}};return _0xfbf9a9['oninp'+'ut']=()=>{var _0x54ef9b=_0x55c4a9;_0x578b4b[_0x54ef9b(0x353)](_0x1b4786),_0x593adb(Number(_0xfbf9a9[_0x54ef9b(0x58d)]));},_0x54db1c['DneIv'](_0x1b4786),_0x89f2fa['appen'+'d'](_0xfbf9a9,_0x45a280),_0x89f2fa;}function _0x5e2fe(_0x32cb0a,_0x5a602e){var _0x45060d=_0x50a00f,_0x804a1a=_0x54db1c[_0x45060d(0x57b)]['split']('|'),_0x7a4137=-0x2*0xbb6+0x24f8+-0x121*0xc;while(!![]){switch(_0x804a1a[_0x7a4137++]){case'0':_0x468b5d[_0x45060d(0x58d)]=/^#[0-9a-f]{6}$/i[_0x45060d(0x505)](_0x32cb0a)?_0x32cb0a:_0x45060d(0x180)+'9d';continue;case'1':_0x468b5d[_0x45060d(0xfc)+'ut']=()=>_0x5a602e(_0x468b5d['value']);continue;case'2':return _0x468b5d;case'3':_0x468b5d[_0x45060d(0x525)]=_0x45060d(0x610);continue;case'4':_0x468b5d[_0x45060d(0x360)+_0x45060d(0x5c0)]=_0x54db1c[_0x45060d(0x2df)];continue;case'5':var _0x468b5d=document['creat'+_0x45060d(0x184)+'ent']('input');continue;}break;}}function _0x3663d0(_0x286840,_0x3d967d,_0x87f517){var _0x2aecd2=_0x50a00f,_0x320cfb=_0x54db1c[_0x2aecd2(0x9e)][_0x2aecd2(0x3f2)]('|'),_0x33f54e=-0x9*-0x9a+-0x20c5+0x1b5b;while(!![]){switch(_0x320cfb[_0x33f54e++]){case'0':return _0x3300b3;case'1':_0x3300b3[_0x2aecd2(0x360)+_0x2aecd2(0x5c0)]=_0x2aecd2(0x597)+_0x2aecd2(0x3a1);continue;case'2':for(var [_0x1d1424,_0x376a92]of _0x3d967d){var _0x39cde1=document['creat'+_0x2aecd2(0x184)+_0x2aecd2(0x4ed)](_0x2aecd2(0x2fd)+'n');_0x39cde1[_0x2aecd2(0x58d)]=_0x1d1424,_0x39cde1['textC'+_0x2aecd2(0x2da)+'t']=_0x376a92,_0x3300b3[_0x2aecd2(0x261)+_0x2aecd2(0x2ee)+'d'](_0x39cde1);}continue;case'3':_0x3300b3['oncha'+'nge']=()=>_0x87f517(_0x3300b3['value']);continue;case'4':_0x3300b3[_0x2aecd2(0x58d)]=_0x286840;continue;case'5':var _0x3300b3=document['creat'+_0x2aecd2(0x184)+_0x2aecd2(0x4ed)](_0x2aecd2(0x57d)+'t');continue;}break;}}function _0x4d9deb(_0x203aac,_0x4cebcf){var _0x97a84f=_0x50a00f,_0x23133a=(_0x97a84f(0x458)+_0x97a84f(0x581)+'4')['split']('|'),_0x151f10=0x1308+0x1fba+0x1961*-0x2;while(!![]){switch(_0x23133a[_0x151f10++]){case'0':var _0x39829d=document[_0x97a84f(0x461)+'eElem'+'ent'](_0x54db1c['QAWqC']);continue;case'1':_0x39829d[_0x97a84f(0x533)+'ck']=_0x2e603b=>{var _0x561dc5=_0x97a84f;_0x2e603b['stopP'+_0x561dc5(0x2ed)+'ation'](),_0x54db1c[_0x561dc5(0x250)](_0x4cebcf);};continue;case'2':_0x39829d['textC'+_0x97a84f(0x2da)+'t']=_0x203aac;continue;case'3':_0x39829d[_0x97a84f(0x525)]=_0x54db1c['QAWqC'];continue;case'4':return _0x39829d;case'5':_0x39829d[_0x97a84f(0x360)+_0x97a84f(0x5c0)]=_0x54db1c[_0x97a84f(0x433)];continue;}break;}}function _0x46e785(_0x67982f,_0xb7bc08,_0x1f3957){var _0x4017f2=_0x50a00f;if(_0x4ea3e6[_0x4017f2(0x520)]===_0x4ea3e6[_0x4017f2(0x520)]){var _0x495aa0=document[_0x4017f2(0x461)+_0x4017f2(0x184)+'ent'](_0x4ea3e6['hRZPg']);_0x495aa0['class'+'Name']=_0x4ea3e6[_0x4017f2(0x225)];var _0x3913ea=document[_0x4017f2(0x461)+'eElem'+'ent'](_0x4017f2(0x19a));_0x3913ea['class'+_0x4017f2(0x5c0)]='sk-la'+'bel',_0x3913ea['textC'+_0x4017f2(0x2da)+'t']=_0x67982f;if(_0xb7bc08){var _0x298ddb=document[_0x4017f2(0x461)+'eElem'+_0x4017f2(0x4ed)]('small');_0x298ddb[_0x4017f2(0x360)+_0x4017f2(0x5c0)]=_0x4ea3e6['YFhVe'],_0x298ddb[_0x4017f2(0x12f)+_0x4017f2(0x2da)+'t']=_0xb7bc08,_0x3913ea['appen'+_0x4017f2(0x2ee)+'d'](_0x298ddb);}return _0x495aa0[_0x4017f2(0x261)+'d'](_0x3913ea,_0x1f3957),_0x495aa0;}else try{if(_0x2a1f8c)_0x421822['call'](_0x4017f2(0x23b)+_0x4017f2(0x35d)+'e.App'+'licat'+'ion',_0x54db1c[_0x4017f2(0x262)],[-0xb3*0x27+0x47*-0x7d+0x1f70*0x2]);}catch(_0x3f6278){}}function _0x1ec4c3(_0x23b5c7,_0x3fd5f3){var _0x40de02=_0x50a00f,_0x5790a0={'WvBBp':_0x40de02(0x4f8)+'n'};if('ymWwQ'===_0x40de02(0x1a0)){var _0x539d8e=_0x2f1a0c['creat'+_0x40de02(0x184)+'ent'](_0x5790a0[_0x40de02(0x12e)]);return _0x539d8e[_0x40de02(0x525)]=_0x5790a0['WvBBp'],_0x539d8e['class'+_0x40de02(0x5c0)]='sk-bt'+'n',_0x539d8e['textC'+'onten'+'t']=_0x2fa59e,_0x539d8e[_0x40de02(0x533)+'ck']=_0x2140a5=>{var _0x3e35cd=_0x40de02;_0x2140a5[_0x3e35cd(0x3d7)+_0x3e35cd(0x2ed)+_0x3e35cd(0x132)](),_0x43e760();},_0x539d8e;}else{var _0x3785d4=document[_0x40de02(0x461)+'eElem'+_0x40de02(0x4ed)](_0x54db1c['XHbef']);return _0x3785d4['class'+_0x40de02(0x5c0)]=_0x54db1c[_0x40de02(0x4a4)]('sk-no'+'te',_0x3fd5f3?_0x40de02(0x5e3):''),_0x3785d4[_0x40de02(0x12f)+'onten'+'t']=_0x23b5c7,_0x3785d4;}}function _0x523c14(_0x55771f,_0x4c8576,_0x534023,_0xf49dae,_0x235edd){var _0x4de460=_0x50a00f,_0x43eb01={'eiCyY':function(_0xe3d395,_0x3ee371){return _0xe3d395(_0x3ee371);},'ZolMe':function(_0x5e9aed,_0x507504,_0x2f4bcc){var _0x1392c8=_0x33fd;return _0x54db1c[_0x1392c8(0x418)](_0x5e9aed,_0x507504,_0x2f4bcc);}},_0x2afaa9=document[_0x4de460(0x461)+'eElem'+_0x4de460(0x4ed)](_0x4de460(0x381));_0x2afaa9['class'+'Name']='sk-ca'+'rd'+(_0x534023?_0x54db1c['NXxuq']:'');var _0x1d3429=document[_0x4de460(0x461)+_0x4de460(0x184)+'ent'](_0x54db1c['XHbef']);_0x1d3429['class'+_0x4de460(0x5c0)]=_0x54db1c[_0x4de460(0xa8)];var _0x22d43e=document[_0x4de460(0x461)+_0x4de460(0x184)+_0x4de460(0x4ed)]('div');_0x22d43e['class'+'Name']=_0x54db1c[_0x4de460(0x5e7)];var _0x4d73fa=document['creat'+_0x4de460(0x184)+'ent']('stron'+'g');_0x4d73fa['textC'+_0x4de460(0x2da)+'t']=_0x55771f,_0x22d43e[_0x4de460(0x261)+'dChil'+'d'](_0x4d73fa);if(_0xf49dae){var _0x1a65e3=_0x54db1c[_0x4de460(0x418)](_0x5d95b2,_0x534023,_0x11363b=>{var _0x54f9bc=_0x4de460;_0x2afaa9[_0x54f9bc(0x360)+_0x54f9bc(0x2be)][_0x54f9bc(0x316)+'e']('on',_0x11363b),_0x43eb01['eiCyY'](_0xf49dae,_0x11363b);});_0x1d3429[_0x4de460(0x261)+'d'](_0x22d43e,_0x1a65e3);}else _0x1d3429['appen'+_0x4de460(0x2ee)+'d'](_0x22d43e);_0x2afaa9[_0x4de460(0x261)+_0x4de460(0x2ee)+'d'](_0x1d3429);if(_0x235edd&&_0x235edd[_0x4de460(0x267)+'h']){if(_0x54db1c['kdpku']===_0x54db1c['XoXkC'])_0x2b7409['noRec'+_0x4de460(0x354)]=_0x3f2778,_0x1d3d8f(),_0x43eb01[_0x4de460(0x15d)](_0x52570d,_0x4de460(0x289)+'oil',_0x20ea1e);else{var _0xf1505a=('2|4|3'+'|5|1|'+'6|7|0')[_0x4de460(0x3f2)]('|'),_0x4be035=-0x27*-0x3+0x255f*0x1+-0x25d4;while(!![]){switch(_0xf1505a[_0x4be035++]){case'0':_0x2afaa9['appen'+'dChil'+'d'](_0x9dd51d);continue;case'1':_0x3c9187['textC'+_0x4de460(0x2da)+'t']=_0x4c8576;continue;case'2':var _0x9dd51d=document[_0x4de460(0x461)+_0x4de460(0x184)+_0x4de460(0x4ed)](_0x4de460(0x381));continue;case'3':var _0x3c9187=document[_0x4de460(0x461)+'eElem'+_0x4de460(0x4ed)](_0x4de460(0x381));continue;case'4':_0x9dd51d['class'+_0x4de460(0x5c0)]=_0x4de460(0x487)+_0x4de460(0x2de);continue;case'5':_0x3c9187[_0x4de460(0x360)+'Name']=_0x54db1c[_0x4de460(0xb4)];continue;case'6':_0x9dd51d[_0x4de460(0x261)+_0x4de460(0x2ee)+'d'](_0x3c9187);continue;case'7':for(var _0x27f548 of _0x235edd)_0x9dd51d['appen'+'dChil'+'d'](_0x27f548);continue;}break;}}}return _0x2afaa9;}var _0x5492a7=[{'id':'comba'+'t','label':_0x4ea3e6[_0x50a00f(0x2b1)]},{'id':'move','label':_0x50a00f(0x37c)},{'id':_0x4ea3e6[_0x50a00f(0x47e)],'label':_0x4ea3e6[_0x50a00f(0x39b)]},{'id':_0x50a00f(0x544),'label':_0x4ea3e6['Quqyy']},{'id':_0x4ea3e6['VyfNg'],'label':_0x50a00f(0xa6)+'y'}];function _0x501828(){var _0x75a054=_0x50a00f,_0x2041aa={'UakYS':'Unity'+'Engin'+'e.App'+_0x75a054(0x3f3)+'ion','rUVME':'set_t'+'arget'+'Frame'+'Rate'},_0x401d1d=_0x1878f7['safeM'+'ode']?_0x75a054(0x189)+'MODE\x20'+_0x75a054(0x35b)+_0x75a054(0x306)+_0x75a054(0x3f1)+_0x75a054(0x356)+_0x75a054(0x1dd)+_0x75a054(0x278)+'ad\x20to'+_0x75a054(0x389)+')':_0x1878f7['uwmk']?_0x54db1c[_0x75a054(0xb3)](_0x54db1c[_0x75a054(0xa7)](_0x54db1c['pZiFJ'](_0x54db1c[_0x75a054(0x257)]+(_0x1878f7[_0x75a054(0x41c)+'Total']?_0x1878f7[_0x75a054(0x41c)+'Ok']+'/'+_0x1878f7[_0x75a054(0x41c)+'Total']+(_0x75a054(0x46c)+'s'):'0\x20hoo'+'ks\x20ar'+_0x75a054(0x5a4)+'all\x20o'+_0x75a054(0x5b1))+('\x20|\x20ga'+_0x75a054(0x166))+(_0x1878f7[_0x75a054(0x3a4)+_0x75a054(0x55f)]?_0x75a054(0x5f2)+'d':_0x54db1c['DNbPm'])+('\x20|\x20sh'+'ooter'+'\x20'),_0x1878f7[_0x75a054(0x5a0)+'ers']?_0x54db1c[_0x75a054(0x53f)]:_0x75a054(0x191)),_0x54db1c[_0x75a054(0x4b4)]),_0x1878f7[_0x75a054(0xa3)+_0x75a054(0x2e6)]?_0x75a054(0x1ee):_0x54db1c['WwyKl']):_0x54db1c[_0x75a054(0x214)];if(_0x1878f7[_0x75a054(0x56a)+_0x75a054(0x5bc)])_0x401d1d+=_0x54db1c[_0x75a054(0x208)](_0x54db1c[_0x75a054(0x139)],_0x1878f7[_0x75a054(0x56a)+_0x75a054(0x5bc)]);return _0x54db1c[_0x75a054(0xcf)](_0x523c14,'Statu'+'s',_0x401d1d,_0x1878f7[_0x75a054(0x4f7)],null,[_0x46e785(_0x75a054(0x33f)+_0x75a054(0x2d6)+_0x75a054(0x36d),_0x54db1c[_0x75a054(0x59f)],_0x54db1c[_0x75a054(0x418)](_0x4d9deb,'Apply',()=>{var _0x2644e0=_0x75a054;try{if(_0x9cc794)_0x9cc794[_0x2644e0(0x3f0)](_0x2041aa['UakYS'],_0x2041aa[_0x2644e0(0x3c0)],[-0x13*0x53+0x939*-0x3+-0x32*-0xb2]);}catch(_0x38223f){}}))]);}function _0x43c962(_0x4aa32f){var _0x3e47ef=_0x50a00f,_0x250b14={'HJrMj':function(_0x1479b0){return _0x1479b0();},'VFInu':_0x4ea3e6[_0x3e47ef(0x218)],'GWqCa':function(_0x11c6a5,_0x4731a4,_0x5179a3){return _0x4ea3e6['mCVWe'](_0x11c6a5,_0x4731a4,_0x5179a3);},'NJrOa':_0x4ea3e6[_0x3e47ef(0x428)],'Wjyhe':_0x3e47ef(0x357)+_0x3e47ef(0x2bb)+_0x3e47ef(0x203)+_0x3e47ef(0x14f)+'eg\x20fa'+'iled:','FpoXQ':_0x4ea3e6[_0x3e47ef(0x3d1)],'koOXu':'uFVQy','dWMws':function(_0x4b3f3b){return _0x4b3f3b();},'DXuvj':function(_0x10f9aa,_0xe13191){return _0x10f9aa||_0xe13191;},'wkWmL':function(_0x4a14c5,_0x4619a8){return _0x4ea3e6['LTWCr'](_0x4a14c5,_0x4619a8);},'xInpb':_0x4ea3e6[_0x3e47ef(0x1ba)],'UDKwl':function(_0x3565e8){return _0x3565e8();},'cVTuA':function(_0x1300a8){return _0x1300a8();},'eMvEP':function(_0x41cd82){return _0x41cd82();},'MdkVA':function(_0x22385a){return _0x22385a();}};if(_0x4ea3e6[_0x3e47ef(0x3f4)](_0x4ea3e6[_0x3e47ef(0x221)],_0x4ea3e6['nkxOW'])){if(_0x4aa32f==='comba'+'t')return[_0x4ea3e6[_0x3e47ef(0x45f)](_0x501828),_0x523c14(_0x3e47ef(0x3a3)+_0x3e47ef(0x596),_0x4ea3e6[_0x3e47ef(0x4c0)],_0x399e0b['god'],_0x26c00d=>{var _0x1c04cc=_0x3e47ef;_0x399e0b['god']=_0x26c00d,_0x250b14[_0x1c04cc(0x4d8)](_0x568aaa),_0xbc53d2(_0x250b14[_0x1c04cc(0x4b5)],_0x26c00d),_0x250b14['GWqCa'](_0xbc53d2,_0x250b14[_0x1c04cc(0x408)],_0x26c00d);},[]),_0x4ea3e6[_0x3e47ef(0x51a)](_0x523c14,'No\x20Re'+_0x3e47ef(0x3fb),'Skips'+'\x20Reco'+_0x3e47ef(0x30b)+'ion.T'+_0x3e47ef(0xfb)+_0x3e47ef(0x535)+'\x20reco'+'il\x20sp'+_0x3e47ef(0x91)+'\x20neve'+'r\x20adv'+_0x3e47ef(0x4b7),_0x399e0b[_0x3e47ef(0x289)+_0x3e47ef(0x354)],_0xa399a=>{var _0x30ebb3=_0x3e47ef;_0x399e0b['noRec'+_0x30ebb3(0x354)]=_0xa399a,_0x54db1c['DneIv'](_0x568aaa),_0xbc53d2('noRec'+'oil',_0xa399a);},[]),_0x4ea3e6[_0x3e47ef(0xb0)](_0x523c14,_0x3e47ef(0x317)+'read','Zeroe'+_0x3e47ef(0x32e)+'ead\x20a'+_0x3e47ef(0x1f3)+'xes\x20a'+'ccura'+_0x3e47ef(0x207)+'\x20your'+_0x3e47ef(0x172)+_0x3e47ef(0x515)+_0x3e47ef(0x606)+'00ms.',_0x399e0b['noSpr'+_0x3e47ef(0x336)],_0x11a33a=>{var _0x14bc08=_0x3e47ef,_0x58439e={'BLzYV':_0x250b14[_0x14bc08(0x1b2)]};if(_0x14bc08(0x443)===_0x250b14['FpoXQ'])return _0x45eaae['warn'](_0x58439e[_0x14bc08(0x120)],_0x17fd16,_0x12c813&&_0xbcb2b9[_0x14bc08(0x51c)+'ge']),null;else _0x399e0b['noSpr'+'ead']=_0x11a33a,_0x568aaa();},[]),_0x523c14(_0x3e47ef(0x2a2)+_0x3e47ef(0x18b)+_0x3e47ef(0x3bf)+']','Scale'+'s\x20Ove'+_0x3e47ef(0x288)+_0x3e47ef(0x5e0)+_0x3e47ef(0x155)+_0x3e47ef(0x1b9)+'\x20to\x201'+'0%.\x20S'+_0x3e47ef(0x5fa)+'\x20may\x20'+_0x3e47ef(0x3b9)+'\x20gate'+_0x3e47ef(0xc2)+'s.',_0x399e0b[_0x3e47ef(0x427)+_0x3e47ef(0x2fb)],_0x85766b=>{var _0x46fff0=_0x3e47ef;_0x399e0b[_0x46fff0(0x427)+'Exp']=_0x85766b,_0x568aaa();},[]),_0x523c14(_0x3e47ef(0x4da)+'e\x20[EX'+'P]',_0x3e47ef(0x183)+_0x3e47ef(0x45b)+'\x20Over'+_0x3e47ef(0x30e)+_0x3e47ef(0x406)+'\x20dama'+_0x3e47ef(0x40f)+'annab'+_0x3e47ef(0x3ed)+_0x3e47ef(0x29d)+'serve'+_0x3e47ef(0x97)+_0x3e47ef(0x269)+'s.',_0x399e0b['damag'+'eExp'],_0x229512=>{_0x399e0b['damag'+'eExp']=_0x229512,_0x568aaa();},[_0x46e785(_0x3e47ef(0x4da)+_0x3e47ef(0x302)+'ue',null,_0x4ea3e6['fIfxH'](_0x5276d6,_0x399e0b['damag'+_0x3e47ef(0x100)+'e'],0x1*-0x16ab+-0x2318+-0x39cd*-0x1,0x7e0+-0x1*0x5e4+-0x8,0x51f+0x7*0x3fd+-0x2105,_0xd9ff9=>{var _0x38c092=_0x3e47ef;_0x38c092(0xe1)===_0x250b14[_0x38c092(0x4ce)]?(_0x19ad7[_0x38c092(0x3d7)+_0x38c092(0x2ed)+'ation'](),_0x174f51()):(_0x399e0b['damag'+'eValu'+'e']=_0xd9ff9,_0x568aaa());}))]),_0x4ea3e6[_0x3e47ef(0xee)](_0x523c14,_0x3e47ef(0x162)+_0x3e47ef(0xca)+_0x3e47ef(0x2bd)+_0x3e47ef(0x1c6),'Refil'+_0x3e47ef(0x312)+_0x3e47ef(0x290)+_0x3e47ef(0x560)+'\x20cach'+_0x3e47ef(0x124)+_0x3e47ef(0x20b)+_0x3e47ef(0x2ea)+_0x3e47ef(0x27d)+'\x20200m'+'s.',_0x399e0b['infAm'+_0x3e47ef(0xda)],_0x56fc5e=>{var _0x3e419b=_0x3e47ef;_0x399e0b[_0x3e419b(0x449)+_0x3e419b(0xda)]=_0x56fc5e,_0x250b14['HJrMj'](_0x568aaa);},[_0x4ea3e6[_0x3e47ef(0x3f7)](_0x1ec4c3,_0x4ea3e6[_0x3e47ef(0x42b)])])];if(_0x4aa32f===_0x4ea3e6[_0x3e47ef(0x582)])return[_0x523c14(_0x3e47ef(0xfd),'Scale'+'s\x20all'+'\x20four'+_0x3e47ef(0x53e)+_0x3e47ef(0x2dc)+_0x3e47ef(0x17b)+'\x20limi'+_0x3e47ef(0x2a7)+_0x3e47ef(0x1ed)+_0x3e47ef(0x50f)+'ation'+'.',_0x4ea3e6[_0x3e47ef(0x39e)](_0x399e0b[_0x3e47ef(0x17b)+'Pct'],-0x574*-0x1+0x806+0x29e*-0x5),null,[_0x46e785(_0x4ea3e6['iXDGl'],'100\x20='+'\x20defa'+'ult',_0x5276d6(_0x399e0b['speed'+'Pct'],-0x1bf6+0x1ccf+-0xa7,-0x5*0x536+-0xd92+-0x1466*-0x2,0x1*-0xd21+0x260b+-0x18e5,_0x22dc49=>{var _0x30b089=_0x3e47ef;_0x399e0b[_0x30b089(0x17b)+'Pct']=_0x22dc49,_0x568aaa();}))]),_0x523c14(_0x4ea3e6[_0x3e47ef(0x603)],_0x4ea3e6[_0x3e47ef(0x315)],_0x4ea3e6[_0x3e47ef(0x4c4)](_0x399e0b[_0x3e47ef(0x447)+'ct'],0x102f*0x1+0x44*-0x82+0x12bd)||_0x399e0b[_0x3e47ef(0xbd)+'tyPct']!==-0x48e+-0x1bf*-0x1+-0x3f*-0xd,null,[_0x46e785(_0x3e47ef(0x3ee)+'%',null,_0x5276d6(_0x399e0b[_0x3e47ef(0x447)+'ct'],-0x1dbe+0xad5*-0x1+0x28c5,-0x1*-0x33b+-0x1*-0x1783+-0x1992,-0x152a+-0x1*0x331+-0xf*-0x1a0,_0x40fe6d=>{var _0x12cc99=_0x3e47ef;_0x399e0b['jumpP'+'ct']=_0x40fe6d,_0x250b14[_0x12cc99(0x404)](_0x568aaa);})),_0x46e785(_0x4ea3e6[_0x3e47ef(0x41d)],_0x4ea3e6['JFhZm'],_0x5276d6(_0x399e0b['gravi'+'tyPct'],-0xf*-0xf+0x1*0xe59+-0xf30,-0x1a*-0x1+0x20cb+-0x1*0x201d,-0x1bad+-0x2*-0x4b3+0x124c,_0xd1d3ac=>{var _0x504768=_0x3e47ef;_0x399e0b[_0x504768(0xbd)+_0x504768(0x131)]=_0xd1d3ac,_0x568aaa();}))]),_0x523c14(_0x4ea3e6[_0x3e47ef(0x125)],_0x3e47ef(0x546)+_0x3e47ef(0x52d)+_0x3e47ef(0x3c9)+_0x3e47ef(0x34f)+_0x3e47ef(0x5e9)+'ime\x20s'+_0x3e47ef(0x535)+_0x3e47ef(0xb1)+_0x3e47ef(0x46b)+_0x3e47ef(0x9c)+'never'+_0x3e47ef(0x4fc)+_0x3e47ef(0x572),_0x399e0b[_0x3e47ef(0x24b)],_0x18a849=>{var _0x331c67=_0x3e47ef;_0x250b14[_0x331c67(0x4a3)](_0x250b14[_0x331c67(0x24e)],_0x250b14[_0x331c67(0x24e)])?(_0x378d27[_0x331c67(0x2ae)+'tyle']=_0x250b14[_0x331c67(0x5c5)](_0x5c1e78,_0x331c67(0x206)+_0x331c67(0x1ab)+_0x331c67(0x601)+'0,0.7'+'5)'),_0x902cab[_0x331c67(0x308)+_0x331c67(0x158)](_0x431048,_0x2accae,_0x2a958c),_0x49e733+=-0x1618+-0xbad+-0x21d5*-0x1):(_0x399e0b[_0x331c67(0x24b)]=_0x18a849,_0x250b14['UDKwl'](_0x568aaa));},[])];if(_0x4aa32f===_0x3e47ef(0x2f7)+'l'){if(_0x4ea3e6['WKQRD']===_0x4ea3e6[_0x3e47ef(0x339)])_0x1ea87d[_0x3e47ef(0x1bd)+'le']=_0x3f7323,_0x250b14[_0x3e47ef(0x2a1)](_0x5eef2e);else return[_0x523c14(_0x3e47ef(0x2ba)+_0x3e47ef(0x3ba),_0x3e47ef(0x1db)+'+\x20LMB'+_0x3e47ef(0x395)+_0x3e47ef(0x232)+'ce\x20ov'+_0x3e47ef(0x163)+'.',_0x399e0b[_0x3e47ef(0x503)+_0x3e47ef(0x3ba)],_0x5ad882=>{var _0x7eee53=_0x3e47ef;_0x399e0b[_0x7eee53(0x503)+'rokes']=_0x5ad882,_0x250b14[_0x7eee53(0x404)](_0x568aaa);},[_0x46e785(_0x3e47ef(0xf2)+_0x3e47ef(0x21a),null,_0x4ea3e6[_0x3e47ef(0x324)](_0x3663d0,_0x399e0b['ksPos'],[['bl','Botto'+_0x3e47ef(0x368)+'t'],['br',_0x3e47ef(0x592)+_0x3e47ef(0x1e7)+'ht'],['ml',_0x4ea3e6[_0x3e47ef(0x2b2)]]],_0x2daf7e=>{var _0x14476b=_0x3e47ef;_0x399e0b[_0x14476b(0x2fc)]=_0x2daf7e,_0x568aaa();})),_0x4ea3e6['LYHei'](_0x46e785,_0x3e47ef(0x496),null,_0x5276d6(_0x399e0b[_0x3e47ef(0x1bd)+'le'],-0x38*-0x83+-0xd2b*-0x2+0x1*-0x36fe+0.6,0x2*0xe6f+0x16c5+0x6*-0x89b+0.6000000000000001,0x3*0x4eb+-0x88e+-0x1*0x633+0.05,_0x3b484b=>{_0x399e0b['ksSca'+'le']=_0x3b484b,_0x568aaa();})),_0x46e785('CPS\x20r'+'eadou'+'t',null,_0x5d95b2(_0x399e0b[_0x3e47ef(0x401)],_0x542896=>{var _0x552996=_0x3e47ef,_0x90a8fa={'tbjLA':_0x54db1c['YKUSE'],'MjrhX':_0x54db1c['DGTel'],'isLPZ':_0x54db1c[_0x552996(0xb2)]};if(_0x54db1c['iICfd'](_0x54db1c[_0x552996(0x3ce)],'GMFSj'))_0x399e0b[_0x552996(0x401)]=_0x542896,_0x54db1c[_0x552996(0x5a8)](_0x568aaa);else for(var _0x8eda1a of[_0x552996(0x32b)+_0x552996(0x4be)+'0x250'+'-pare'+'nt',_0x552996(0x32b)+_0x552996(0xf3)+_0x552996(0x5c1)+'paren'+'t',_0x90a8fa['tbjLA'],_0x90a8fa['MjrhX']]){var _0x494996=_0x2af538[_0x552996(0x4a5)+_0x552996(0x3c9)+'ById'](_0x8eda1a);if(_0x494996&&_0x8eda1a===_0x90a8fa[_0x552996(0xde)]){var _0x212219=_0x494996['child'+_0x552996(0xec)];for(var _0x223e0d=-0x115*-0x14+-0x1f54*-0x1+-0x34f8;_0x223e0d<_0x212219[_0x552996(0x267)+'h'];_0x223e0d++){if(_0x212219[_0x223e0d]['id']&&_0x212219[_0x223e0d]['id']['index'+'Of'](_0x90a8fa[_0x552996(0x20a)])===-0x1a82+-0x16f6*0x1+-0x3178*-0x1)_0x212219[_0x223e0d][_0x552996(0x59b)][_0x552996(0x287)+'ay']=_0x552996(0x191);}}else{if(_0x494996)_0x494996[_0x552996(0x59b)]['displ'+'ay']=_0x552996(0x191);}}}))]),_0x523c14(_0x4ea3e6[_0x3e47ef(0x51b)],'Custo'+_0x3e47ef(0x22b)+_0x3e47ef(0x504)+_0x3e47ef(0x3cc)+_0x3e47ef(0x26d),_0x399e0b[_0x3e47ef(0x13e)+_0x3e47ef(0x419)],_0x57cd35=>{var _0x3eb3d6=_0x3e47ef;_0x399e0b[_0x3eb3d6(0x13e)+'hair']=_0x57cd35,_0x568aaa();},[_0x46e785('Size',null,_0x4ea3e6[_0x3e47ef(0x51a)](_0x5276d6,_0x399e0b['chSiz'+'e'],-0xcab+-0x56*-0x5+-0x1*-0xafd+0.5,0x10d0+-0x1261+0x193+0.5,0xc*0xf1+-0x77b*-0x2+-0x1a42+0.1,_0x53cc05=>{var _0x233fb8=_0x3e47ef;_0x399e0b[_0x233fb8(0x14b)+'e']=_0x53cc05,_0x568aaa();})),_0x4ea3e6[_0x3e47ef(0x1e3)](_0x46e785,_0x4ea3e6[_0x3e47ef(0x370)],null,_0x5e2fe(_0x399e0b[_0x3e47ef(0xeb)+'or'],_0x5df310=>{var _0x1b9c22=_0x3e47ef;_0x399e0b[_0x1b9c22(0xeb)+'or']=_0x5df310,_0x568aaa();}))]),_0x523c14('Count'+_0x3e47ef(0x37b),_0x4ea3e6['jJDwq'],_0x399e0b[_0x3e47ef(0x38f)],null,[_0x4ea3e6[_0x3e47ef(0x324)](_0x46e785,_0x4ea3e6[_0x3e47ef(0x450)],null,_0x5d95b2(_0x399e0b[_0x3e47ef(0x38f)],_0x520787=>{var _0x9e01f8=_0x3e47ef;_0x399e0b[_0x9e01f8(0x38f)]=_0x520787,_0x568aaa();})),_0x1ec4c3(_0x4ea3e6[_0x3e47ef(0x16e)])])];}if(_0x4aa32f===_0x3e47ef(0x544))return[_0x4ea3e6[_0x3e47ef(0x117)](_0x523c14,_0x4ea3e6[_0x3e47ef(0x385)],_0x4ea3e6['xXiTr'],_0x399e0b[_0x3e47ef(0x54d)+'ck'],_0x140985=>{var _0x711231=_0x3e47ef;_0x399e0b[_0x711231(0x54d)+'ck']=_0x140985,_0x54db1c[_0x711231(0x5a8)](_0x568aaa);},[_0x1ec4c3(_0x4ea3e6[_0x3e47ef(0x14d)])])];return[_0x523c14(_0x4ea3e6[_0x3e47ef(0x4f9)],'Skips'+_0x3e47ef(0x56e)+_0x3e47ef(0x1ec)+'rely\x20'+_0x3e47ef(0x15c)+'WASM\x20'+'hooks'+_0x3e47ef(0x223)+'\x20this'+_0x3e47ef(0x402)+'atche'+'s\x20won'+'\x27t\x20st'+_0x3e47ef(0x5d1),_0x399e0b['safeM'+_0x3e47ef(0x596)],_0x45f1e3=>{var _0x47d47a=_0x3e47ef;_0x399e0b[_0x47d47a(0x156)+'ode']=_0x45f1e3,_0x250b14[_0x47d47a(0x159)](_0x568aaa),location[_0x47d47a(0xcb)+'d']();},[_0x4ea3e6[_0x3e47ef(0x21b)](_0x1ec4c3,_0x4ea3e6['ePies'])]),_0x523c14(_0x4ea3e6['zsLSI'],_0x3e47ef(0x296)+_0x3e47ef(0x1a7)+'nstal'+'ls\x20a\x20'+'WASM\x20'+_0x3e47ef(0x126)+'oline'+_0x3e47ef(0x464)+_0x3e47ef(0x3d9)+'hole\x20'+'page\x20'+_0x3e47ef(0x440)+'\x20ALL\x20'+_0x3e47ef(0x282)+_0x3e47ef(0x11e)+_0x3e47ef(0x113)+'-\x20a\x20s'+_0x3e47ef(0x2f5)+'ure\x20t'+_0x3e47ef(0x19f)+_0x3e47ef(0x194)+_0x3e47ef(0x52a)+_0x3e47ef(0x298)+'he\x20re'+'al\x20me'+_0x3e47ef(0x263)+'throw'+'s\x20\x27fu'+_0x3e47ef(0x602)+_0x3e47ef(0x5bd)+'natur'+'e\x20mis'+'match'+_0x3e47ef(0x3c3)+'\x20mome'+'nt\x20it'+'\x20is\x20c'+_0x3e47ef(0x18a)+_0x3e47ef(0x413)+_0x3e47ef(0x4a7)+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0x3e47ef(0x387)+_0x3e47ef(0xcb)+'d,\x20an'+_0x3e47ef(0x15b)+_0x3e47ef(0x4e5)+_0x3e47ef(0x3de)+'\x20your'+_0x3e47ef(0x130)+_0x3e47ef(0x52f)+'kes\x20o'+'n.',_0x399e0b[_0x3e47ef(0x31f)+'od']||_0x399e0b[_0x3e47ef(0x31f)+'odDie']||_0x399e0b['hookN'+_0x3e47ef(0x3e5)+'il']||_0x399e0b[_0x3e47ef(0x256)+'aptur'+'e'],_0x3657b0=>{var _0x176cf3=_0x3e47ef,_0x89e100=_0x54db1c[_0x176cf3(0x57a)]['split']('|'),_0x37ef76=-0x16a7+0xf*0x2+0x1689;while(!![]){switch(_0x89e100[_0x37ef76++]){case'0':_0x399e0b[_0x176cf3(0x256)+_0x176cf3(0x4b0)+'e']=_0x3657b0;continue;case'1':_0x54db1c['iPlOf'](_0x568aaa);continue;case'2':_0x399e0b['hookG'+_0x176cf3(0x2f0)]=_0x3657b0;continue;case'3':_0x399e0b[_0x176cf3(0x59e)+'oReco'+'il']=_0x3657b0;continue;case'4':location[_0x176cf3(0xcb)+'d']();continue;case'5':_0x399e0b[_0x176cf3(0x31f)+'od']=_0x3657b0;continue;}break;}},[_0x4ea3e6['AoMbn'](_0x1ec4c3,'Appli'+_0x3e47ef(0x485)+_0x3e47ef(0x46f)+'ad.'),_0x46e785(_0x4ea3e6['DZwKJ'],null,_0x5d95b2(_0x399e0b['hookG'+'od'],_0x91cdf4=>{_0x399e0b['hookG'+'od']=_0x91cdf4,_0x250b14['MdkVA'](_0x568aaa);})),_0x46e785('godDi'+_0x3e47ef(0x563)+_0x3e47ef(0x1d0)+_0x3e47ef(0x149)+_0x3e47ef(0x51e),null,_0x4ea3e6[_0x3e47ef(0x580)](_0x5d95b2,_0x399e0b[_0x3e47ef(0x31f)+'odDie'],_0x4a439c=>{var _0x3b0486=_0x3e47ef;if(_0x3b0486(0x494)!==_0x54db1c['mATox']){var _0x4b553c=_0x1b9ac6[_0x3b0486(0x47a)+'refix']({'typeName':_0x4fddae,'methodName':_0x57adec,'params':_0x18a526,'returnType':_0x2bb2ef},_0xa30c5d);return _0x4b553c[_0x3b0486(0x53b)+'ed']=_0xdce942!==![],_0x268ee8[_0x5a2503]=_0x4b553c,_0xa0163a[_0x3b0486(0x41c)+_0x3b0486(0x33a)]++,_0x4b553c;}else _0x399e0b[_0x3b0486(0x31f)+'odDie']=_0x4a439c,_0x54db1c['DneIv'](_0x568aaa);})),_0x46e785('noRec'+_0x3e47ef(0x5c3)+_0x3e47ef(0x28f)+_0x3e47ef(0x3b1)+_0x3e47ef(0x5bf)+'ck)',null,_0x5d95b2(_0x399e0b[_0x3e47ef(0x59e)+'oReco'+'il'],_0x2206f0=>{var _0xdec2b6=_0x3e47ef;_0x399e0b[_0xdec2b6(0x59e)+_0xdec2b6(0x3e5)+'il']=_0x2206f0,_0x568aaa();})),_0x4ea3e6[_0x3e47ef(0x564)](_0x46e785,_0x4ea3e6['bBhYe'],_0x4ea3e6['esPnh'],_0x5d95b2(_0x399e0b[_0x3e47ef(0x256)+'aptur'+'e'],_0x53446d=>{var _0x3dc9f0=_0x3e47ef;_0x399e0b[_0x3dc9f0(0x256)+'aptur'+'e']=_0x53446d,_0x568aaa();}))]),_0x523c14(_0x3e47ef(0x463)+_0x3e47ef(0x102)+'r',_0x3e47ef(0x1da)+'les\x20C'+_0x3e47ef(0x432)+'age\x20d'+_0x3e47ef(0x16b)+'ors\x20a'+_0x3e47ef(0x2ce)+_0x3e47ef(0x5e4)+'via\x20S'+'topDe'+_0x3e47ef(0x21d)+_0x3e47ef(0x10b)+_0x3e47ef(0x1f5)+'\x20ON.',_0x399e0b[_0x3e47ef(0x4e4)+'ill'],_0x57c4ef=>{var _0xce7be6=_0x3e47ef;_0x399e0b['actkK'+_0xce7be6(0x363)]=_0x57c4ef,_0x568aaa();},[_0x1ec4c3('God/d'+_0x3e47ef(0x608)+_0x3e47ef(0xc4)+_0x3e47ef(0x47b)+'atly\x20'+_0x3e47ef(0x5ff)+_0x3e47ef(0x346)+'risk\x20'+'even\x20'+_0x3e47ef(0x611)+'this\x20'+'on.',!![])]),_0x523c14(_0x4ea3e6['nzSNV'],_0x4ea3e6['QNIYL'],!![],null,[_0x46e785('Wipe\x20'+'my\x20se'+'tting'+'s',null,_0x4ea3e6['uoUug'](_0x4d9deb,'Reset',()=>{_0x399e0b={..._0x554d0b},_0x568aaa(),location['reloa'+'d']();}))])];}else _0x1de113[_0x3e47ef(0x12f)+_0x3e47ef(0x2da)+'t']=_0x95684b[_0x3e47ef(0x156)+'ode']?_0x54db1c['YoyZb']:_0x289305['uwmk']?_0x54db1c[_0x3e47ef(0x4a4)](_0x54db1c['ppYUD']+(_0x469ccf[_0x3e47ef(0x41c)+'Total']?_0x76065a[_0x3e47ef(0x41c)+'Ok']+'/'+_0x57fb6e[_0x3e47ef(0x41c)+_0x3e47ef(0x33a)]+_0x54db1c[_0x3e47ef(0x3c4)]:'0\x20hoo'+'ks\x20ar'+_0x3e47ef(0x5a4)+_0x3e47ef(0x466)+_0x3e47ef(0x5b1))+_0x54db1c[_0x3e47ef(0x5f5)]+(_0x3774cf['gameL'+_0x3e47ef(0x55f)]?_0x3e47ef(0x5f2)+'d':_0x54db1c[_0x3e47ef(0xf4)])+(_0x3e47ef(0x3b7)+_0x3e47ef(0xcc)+'\x20'),_0x333daa[_0x3e47ef(0x5a0)+'ers']?_0x3e47ef(0x1ee):_0x3e47ef(0x191))+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x4668be['movem'+'ents']?_0x3e47ef(0x1ee):_0x3e47ef(0x191))+(_0x4f314a['lastE'+_0x3e47ef(0x5bc)]?'\x20|\x20ER'+'R:\x20'+_0x4daee0['lastE'+'rror']:''):_0x3e47ef(0x335)+_0x3e47ef(0x3e4)+'NG\x20-\x20'+'overl'+'ay\x20on'+_0x3e47ef(0x545)+'einst'+_0x3e47ef(0x42f)+'he\x20us'+_0x3e47ef(0x111)+'ipt)';}var _0x43c6f6=null;function _0x1b4e5b(_0x14d32f){var _0x13f1ae=_0x50a00f;_0xb3c1c5=_0x14d32f;if(!_0x43c6f6){if(_0x4ea3e6[_0x13f1ae(0x3f9)]('FpVjq',_0x13f1ae(0x4fa))){var _0x20a2a1=document['creat'+_0x13f1ae(0x184)+_0x13f1ae(0x4ed)](_0x4ea3e6['HWwCo']);_0x20a2a1[_0x13f1ae(0x12f)+_0x13f1ae(0x2da)+'t']=_0x45651c,_0x5e2eca[_0x13f1ae(0x261)+'dChil'+'d'](_0x20a2a1),_0x43c6f6=_0x4ea3e6['xmgrD'](_0xaba80e),_0x5e2eca[_0x13f1ae(0x261)+'dChil'+'d'](_0x43c6f6),requestAnimationFrame(()=>_0x43c6f6['class'+_0x13f1ae(0x2be)]['add'](_0x13f1ae(0xff)));}else _0x54db1c['iPlOf'](_0x527d44),_0x24b560(_0x54db1c[_0x13f1ae(0x442)](_0x5c229b,_0x7b470['value']));}_0x43c6f6['class'+'List'][_0x13f1ae(0x316)+'e'](_0x4ea3e6[_0x13f1ae(0x579)],_0x14d32f);}function _0x30b009(){var _0xdd7eeb=_0x50a00f;_0x4ea3e6[_0xdd7eeb(0x21e)](_0x1b4e5b,!_0xb3c1c5);}function _0xaba80e(){var _0x236086=_0x50a00f,_0xf8c98f={'NKWWb':_0x4ea3e6['ySSSi'],'GcGLT':'sk-hi'+'nt','gUbft':'span'},_0x4b4c9e=document['creat'+'eElem'+_0x236086(0x4ed)]('div');_0x4b4c9e[_0x236086(0x360)+'Name']=_0x4ea3e6[_0x236086(0x4fd)];var _0x414616=document[_0x236086(0x461)+_0x236086(0x184)+'ent'](_0x4ea3e6['kUTqN']);_0x414616[_0x236086(0x360)+'Name']='mn-si'+'de';var _0x51d2d1=document[_0x236086(0x461)+'eElem'+_0x236086(0x4ed)](_0x4ea3e6[_0x236086(0x5ba)]);_0x51d2d1[_0x236086(0x360)+_0x236086(0x5c0)]=_0x4ea3e6[_0x236086(0x342)],_0x51d2d1[_0x236086(0x49c)+_0x236086(0x127)]='<svg\x20'+_0x236086(0x39d)+'ox=\x220'+_0x236086(0x17c)+'\x2024\x22\x20'+_0x236086(0x360)+_0x236086(0x215)+_0x236086(0x217)+'svg\x22>'+'<path'+_0x236086(0x277)+'12\x2021'+'c-1.5'+'-2.5-'+_0x236086(0x435)+_0x236086(0x26a)+_0x236086(0x108)+_0x236086(0x3bd)+_0x236086(0x429)+_0x236086(0x1a3)+'5s4\x202'+_0x236086(0x129)+_0x236086(0x2b0)+_0x236086(0x1a2)+'5-4\x207'+_0x236086(0x30d)+_0x236086(0x19e)+'\x22none'+'\x22\x20str'+'oke=\x22'+_0x236086(0x180)+_0x236086(0x235)+'troke'+_0x236086(0x4d3)+'h=\x222\x22'+_0x236086(0x4fe)+_0x236086(0x47c)+'necap'+_0x236086(0x4ba)+'nd\x22\x20s'+_0x236086(0x45c)+_0x236086(0x584)+_0x236086(0x2ab)+_0x236086(0x48c)+_0x236086(0x541)+_0x236086(0x1d1)+'e\x20cx='+'\x2212\x22\x20'+_0x236086(0x136)+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0x236086(0x2ff)+_0x236086(0x2bf)+'vg>',_0x414616['appen'+'dChil'+'d'](_0x51d2d1);var _0x135e3c=document['creat'+'eElem'+_0x236086(0x4ed)](_0x4ea3e6['hRZPg']);_0x135e3c['class'+_0x236086(0x5c0)]=_0x236086(0x101)+'in';var _0x464f2a=document['creat'+_0x236086(0x184)+'ent']('heade'+'r');_0x464f2a['class'+'Name']=_0x4ea3e6[_0x236086(0x1a5)];var _0x2b3ac1=document[_0x236086(0x461)+_0x236086(0x184)+'ent'](_0x236086(0x381));_0x2b3ac1[_0x236086(0x360)+_0x236086(0x5c0)]=_0x4ea3e6['klFZT'];var _0x2b5cd0=document['creat'+_0x236086(0x184)+_0x236086(0x4ed)]('h2');_0x2b5cd0['class'+'Name']=_0x236086(0x529),_0x2b5cd0[_0x236086(0x12f)+'onten'+'t']=_0x236086(0x43f)+'a\x20Kou'+'r';var _0x57c99f=document['creat'+'eElem'+'ent'](_0x236086(0x42a));_0x57c99f[_0x236086(0x360)+_0x236086(0x5c0)]='mn-su'+'b',_0x57c99f['textC'+_0x236086(0x2da)+'t']=_0x4ea3e6['QVZVy'],_0x2b3ac1[_0x236086(0x261)+'d'](_0x2b5cd0,_0x57c99f);var _0xf196bd=document[_0x236086(0x461)+_0x236086(0x184)+'ent'](_0x4ea3e6['jwkNv']);_0xf196bd[_0x236086(0x525)]='butto'+'n',_0xf196bd[_0x236086(0x360)+'Name']='mn-cl'+_0x236086(0x57e),_0xf196bd[_0x236086(0x415)]=_0x4ea3e6[_0x236086(0x24d)],_0xf196bd[_0x236086(0x49c)+'HTML']=_0x236086(0x531)+'viewB'+_0x236086(0x558)+'\x200\x2024'+_0x236086(0x3e7)+'<path'+_0x236086(0x277)+_0x236086(0x15a)+_0x236086(0x202)+_0x236086(0x3ef)+_0x236086(0x123)+_0x236086(0x2bf)+'vg>',_0xf196bd[_0x236086(0x533)+'ck']=()=>_0x1b4e5b(![]),_0x464f2a[_0x236086(0x261)+'d'](_0x2b3ac1,_0xf196bd);var _0x8d6fd2=document[_0x236086(0x461)+_0x236086(0x184)+'ent']('div');_0x8d6fd2[_0x236086(0x360)+'Name']='mn-co'+'ls',_0x135e3c[_0x236086(0x261)+'d'](_0x464f2a,_0x8d6fd2),_0x4b4c9e[_0x236086(0x261)+'d'](_0x414616,_0x135e3c);var _0x1c708c=new Map();for(var _0x46853a of _0x5492a7){var _0x49d32d=document['creat'+'eElem'+_0x236086(0x4ed)]('butto'+'n');_0x49d32d[_0x236086(0x525)]=_0x236086(0x4f8)+'n',_0x49d32d['class'+_0x236086(0x5c0)]=_0x236086(0x34c)+'b',_0x49d32d[_0x236086(0x415)]=_0x46853a[_0x236086(0x1c9)],_0x49d32d[_0x236086(0x49c)+_0x236086(0x127)]=_0x4ea3e6['JoKOG'](_0x4ea3e6[_0x236086(0x1b8)](_0x4ea3e6['BTzGk'],_0x46853a[_0x236086(0x1c9)]),_0x4ea3e6['qyjfD']),_0x49d32d['oncli'+'ck']=(_0x2d5243=>()=>_0xf76cf8(_0x2d5243))(_0x46853a['id']),_0x1c708c['set'](_0x46853a['id'],_0x49d32d),_0x414616['appen'+'dChil'+'d'](_0x49d32d);}function _0xf76cf8(_0x425d26){var _0x56a872=_0x236086;if('elSdw'===_0x56a872(0x259)){var _0x1dc41f=_0xf8c98f[_0x56a872(0x3c7)][_0x56a872(0x3f2)]('|'),_0xd502ba=-0x1c4a+-0x1b63*0x1+0x128f*0x3;while(!![]){switch(_0x1dc41f[_0xd502ba++]){case'0':if(_0x4002be){var _0x3075f7=_0x3fd45e['creat'+'eElem'+_0x56a872(0x4ed)](_0x56a872(0x42a));_0x3075f7[_0x56a872(0x360)+'Name']=_0xf8c98f[_0x56a872(0x1c0)],_0x3075f7[_0x56a872(0x12f)+'onten'+'t']=_0x500131,_0x42d9a9[_0x56a872(0x261)+'dChil'+'d'](_0x3075f7);}continue;case'1':var _0x42d9a9=_0x216e4c['creat'+_0x56a872(0x184)+_0x56a872(0x4ed)](_0xf8c98f[_0x56a872(0x22d)]);continue;case'2':var _0x3de099=_0x304ea9[_0x56a872(0x461)+_0x56a872(0x184)+'ent']('div');continue;case'3':return _0x3de099;case'4':_0x3de099[_0x56a872(0x360)+_0x56a872(0x5c0)]=_0x56a872(0x364)+'l';continue;case'5':_0x42d9a9[_0x56a872(0x360)+_0x56a872(0x5c0)]='sk-la'+'bel';continue;case'6':_0x3de099['appen'+'d'](_0x42d9a9,_0x1d161a);continue;case'7':_0x42d9a9[_0x56a872(0x12f)+'onten'+'t']=_0xc834be;continue;}break;}}else{var _0x263004=_0x54db1c[_0x56a872(0x453)]['split']('|'),_0x3e8e07=0xfdc+0x1*0x201b+-0x2ff7;while(!![]){switch(_0x263004[_0x3e8e07++]){case'0':_0x430043[_0x56a872(0x40d)]=_0x425d26;continue;case'1':_0x8d6fd2[_0x56a872(0x573)+'ceChi'+'ldren'](..._0x54db1c['pTOFk'](_0x43c962,_0x425d26));continue;case'2':_0x2b5cd0[_0x56a872(0x12f)+_0x56a872(0x2da)+'t']=_0x54db1c['nsimX']+_0x21e882['label'];continue;case'3':_0x17699a();continue;case'4':var _0x21e882=_0x5492a7[_0x56a872(0x384)](_0x50830e=>_0x50830e['id']===_0x425d26)||_0x5492a7[0x15ac+-0x1*-0x1917+0x2ec3*-0x1];continue;case'5':for(var [_0x4f10ad,_0x32e971]of _0x1c708c)_0x32e971[_0x56a872(0x360)+'List']['toggl'+'e']('activ'+'e',_0x4f10ad===_0x425d26);continue;}break;}}}return _0x4ea3e6[_0x236086(0x21b)](_0xf76cf8,_0x430043[_0x236086(0x40d)]||'comba'+'t'),setInterval(()=>{var _0x2e3f64=_0x236086;if(_0x54db1c[_0x2e3f64(0x26e)](_0x2e3f64(0x3e0),_0x2e3f64(0x3e0))){var _0x32d200=_0x52a0c7[_0x45293f];if(_0x32d200)try{_0x32d200[_0x2e3f64(0x53b)+'ed']=!!_0x5a48cc;}catch(_0x5aea06){}}else{if(!_0xb3c1c5)return;var _0x589498=_0x8d6fd2[_0x2e3f64(0x1bf)+_0x2e3f64(0xec)];for(var _0x5b4f96=-0x1*0x19e7+0x5a6*0x4+0xb*0x4d;_0x54db1c['Vmtph'](_0x5b4f96,_0x589498[_0x2e3f64(0x267)+'h']);_0x5b4f96++){var _0x4ff5b7=_0x589498[_0x5b4f96][_0x2e3f64(0x266)+_0x2e3f64(0x3af)+_0x2e3f64(0xab)](_0x2e3f64(0x182)+_0x2e3f64(0x12d));_0x4ff5b7&&(_0x4ff5b7[_0x2e3f64(0x12f)+'onten'+'t'][_0x2e3f64(0x199)+'Of'](_0x2e3f64(0x2a9))===-0x971*0x2+0x8*0x68+0xfa2||_0x54db1c[_0x2e3f64(0x292)](_0x4ff5b7['textC'+'onten'+'t'][_0x2e3f64(0x199)+'Of'](_0x2e3f64(0x1f9)),0x1112*0x1+-0x1*-0x9d7+-0x1*0x1ae9))&&(_0x4ff5b7['textC'+_0x2e3f64(0x2da)+'t']=_0x1878f7[_0x2e3f64(0x156)+'ode']?_0x54db1c[_0x2e3f64(0x54b)]:_0x1878f7['uwmk']?_0x54db1c[_0x2e3f64(0x593)](_0x54db1c[_0x2e3f64(0xa7)](_0x54db1c['PvvhA'](_0x54db1c[_0x2e3f64(0x593)](_0x54db1c[_0x2e3f64(0x257)]+(_0x1878f7['hooks'+_0x2e3f64(0x33a)]?_0x54db1c['OOrpb'](_0x54db1c['tqhWB'](_0x1878f7[_0x2e3f64(0x41c)+'Ok'],'/'),_0x1878f7[_0x2e3f64(0x41c)+_0x2e3f64(0x33a)])+('\x20hook'+'s'):_0x54db1c[_0x2e3f64(0x52c)]),_0x54db1c['kBJyi'])+(_0x1878f7[_0x2e3f64(0x3a4)+_0x2e3f64(0x55f)]?_0x54db1c['KlHpd']:_0x2e3f64(0x5d4)+'ng')+('\x20|\x20sh'+_0x2e3f64(0xcc)+'\x20'),_0x1878f7[_0x2e3f64(0x5a0)+_0x2e3f64(0x37b)]?_0x54db1c['ElGSb']:'none')+_0x54db1c[_0x2e3f64(0x4b4)],_0x1878f7['movem'+_0x2e3f64(0x2e6)]?'held':'none'),_0x1878f7['lastE'+_0x2e3f64(0x5bc)]?_0x2e3f64(0x2d0)+_0x2e3f64(0x486)+_0x1878f7[_0x2e3f64(0x56a)+_0x2e3f64(0x5bc)]:''):_0x54db1c[_0x2e3f64(0x41e)]);}}},0x141c+0x635*-0x2+-0x3ca),_0x4b4c9e;}var _0x45651c='\x0a\x20\x20\x20\x20'+_0x50a00f(0x3c2)+_0x50a00f(0xbc)+_0x50a00f(0x174)+_0x50a00f(0x5da)+';\x20}\x0a\x20'+_0x50a00f(0x5d6)+'{\x20box'+_0x50a00f(0x421)+'ng:\x20b'+'order'+_0x50a00f(0x521)+'\x20marg'+_0x50a00f(0x22c)+_0x50a00f(0x2f4)+'t-fam'+'ily:\x20'+'\x22Inte'+_0x50a00f(0x1de)+_0x50a00f(0x2e8)+_0x50a00f(0x11b)+_0x50a00f(0x2d2)+'em-ui'+',\x20san'+_0x50a00f(0x275)+_0x50a00f(0x95)+'\x0a\x20\x20\x20\x20'+_0x50a00f(0x270)+_0x50a00f(0x168)+'{\x20pos'+'ition'+_0x50a00f(0x2b8)+'olute'+';\x20rig'+'ht:\x202'+_0x50a00f(0x23e)+'botto'+'m:\x2024'+_0x50a00f(0x12a)+'idth:'+_0x50a00f(0x264)+_0x50a00f(0x41b)+_0x50a00f(0x414)+'c(100'+'vw\x20-\x20'+_0x50a00f(0x2b4)+_0x50a00f(0x391)+_0x50a00f(0x543)+'ght:\x20'+_0x50a00f(0x4ab)+_0x50a00f(0x4c8)+_0x50a00f(0x54f)+_0x50a00f(0x568)+_0x50a00f(0x444)+'8px))'+';\x0a\x20\x20\x20'+_0x50a00f(0x201)+_0x50a00f(0x5a9)+':\x20fle'+'x;\x20ga'+'p:\x2010'+_0x50a00f(0xa4)+_0x50a00f(0x9d)+'g:\x2010'+'px;\x20b'+'order'+'-radi'+'us:\x202'+'2px;\x20'+_0x50a00f(0x5ac)+_0x50a00f(0x5b5)+_0x50a00f(0x49a)+_0x50a00f(0x1c2)+';\x0a\x20\x20\x20'+_0x50a00f(0x5b8)+'ckgro'+'und:\x20'+_0x50a00f(0x206)+'24,17'+',21,.'+_0x50a00f(0x26c)+_0x50a00f(0x4b1)+_0x50a00f(0x1b4)+'ilter'+':\x20blu'+'r(22p'+'x)\x20sa'+_0x50a00f(0x3a7)+'e(150'+_0x50a00f(0x37d)+'webki'+'t-bac'+'kdrop'+_0x50a00f(0x5a2)+'er:\x20b'+_0x50a00f(0x4ad)+_0x50a00f(0x25d)+_0x50a00f(0x216)+'ate(1'+_0x50a00f(0xbb)+_0x50a00f(0x425)+_0x50a00f(0x4c3)+'-shad'+'ow:\x200'+'\x200\x200\x20'+'1px\x20r'+_0x50a00f(0x405)+'55,25'+_0x50a00f(0x537)+_0x50a00f(0x3e9)+_0x50a00f(0x279)+_0x50a00f(0x248)+_0x50a00f(0x3db)+_0x50a00f(0x27f)+'(255,'+'255,2'+'55,.0'+_0x50a00f(0x470)+_0x50a00f(0x28c)+_0x50a00f(0x420)+_0x50a00f(0x27f)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x50a00f(0x10c)+_0x50a00f(0x361)+_0x50a00f(0x3c5)+_0x50a00f(0x5c2)+_0x50a00f(0xed)+'nslat'+_0x50a00f(0x1a6)+_0x50a00f(0x295)+'point'+'er-ev'+'ents:'+'\x20none'+';\x20tra'+_0x50a00f(0x2d9)+'on:\x20o'+_0x50a00f(0x10c)+_0x50a00f(0x284)+_0x50a00f(0x99)+_0x50a00f(0xea)+_0x50a00f(0x58c)+'rm\x20.4'+'5s\x20cu'+_0x50a00f(0x2f3)+'ezier'+'(.22,'+_0x50a00f(0x555)+_0x50a00f(0x390)+_0x50a00f(0x204)+_0x50a00f(0x4d0)+'r:\x20#f'+_0x50a00f(0x5bb)+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x50a00f(0x3d2)+_0x50a00f(0xff)+'\x20{\x20op'+_0x50a00f(0x516)+_0x50a00f(0x1d7)+_0x50a00f(0x330)+_0x50a00f(0x448)+_0x50a00f(0x25a)+_0x50a00f(0x59a)+_0x50a00f(0x148)+'event'+'s:\x20au'+_0x50a00f(0x2b6)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x50a00f(0x325)+'\x20disp'+_0x50a00f(0x5ca)+'flex;'+_0x50a00f(0x281)+_0x50a00f(0x488)+'ction'+_0x50a00f(0x1be)+_0x50a00f(0x40b)+_0x50a00f(0x4ff)+'-item'+_0x50a00f(0x530)+'nter;'+_0x50a00f(0x3f8)+_0x50a00f(0x547)+_0x50a00f(0x2ac)+'h:\x2062'+'px;\x20f'+_0x50a00f(0x352)+_0x50a00f(0x4bf)+'\x20padd'+_0x50a00f(0x10f)+'12px\x20'+(_0x50a00f(0x338)+_0x50a00f(0x9b)+_0x50a00f(0x3f6)+_0x50a00f(0x5f4)+_0x50a00f(0x239)+_0x50a00f(0x204)+_0x50a00f(0x4f6)+_0x50a00f(0x2d8)+_0x50a00f(0x55d)+_0x50a00f(0x31a)+_0x50a00f(0x594)+_0x50a00f(0x468)+_0x50a00f(0x1cc)+'\x20box-'+'shado'+_0x50a00f(0x53d)+_0x50a00f(0x492)+'\x200\x200\x20'+_0x50a00f(0x1b7)+'gba(2'+_0x50a00f(0xae)+_0x50a00f(0x537)+_0x50a00f(0x522)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x50a00f(0x5b7)+_0x50a00f(0x18f)+'ispla'+_0x50a00f(0x1fa)+_0x50a00f(0x16f)+'lace-'+_0x50a00f(0xcd)+_0x50a00f(0x365)+_0x50a00f(0x528)+'width'+_0x50a00f(0x609)+'x;\x20he'+_0x50a00f(0x46e)+'\x2032px'+_0x50a00f(0x2a3)+'\x20\x20\x20.m'+_0x50a00f(0x5b7)+'o-svg'+_0x50a00f(0x3b2)+_0x50a00f(0x3a5)+_0x50a00f(0x2e7)+_0x50a00f(0x48b)+'ht:\x202'+_0x50a00f(0x165)+'overf'+_0x50a00f(0xba)+_0x50a00f(0x291)+'le;\x20f'+'ilter'+_0x50a00f(0x457)+_0x50a00f(0x273)+'dow(0'+'\x200\x204p'+'x\x20rgb'+_0x50a00f(0x31a)+_0x50a00f(0x44d)+_0x50a00f(0x30c)+'8));\x20'+'}\x0a\x20\x20\x20'+_0x50a00f(0xd7)+_0x50a00f(0x585)+_0x50a00f(0x142)+_0x50a00f(0x5ca)+'flex;'+'\x20alig'+_0x50a00f(0x5b6)+'ms:\x20c'+_0x50a00f(0x106)+_0x50a00f(0x2af)+'tify-'+'conte'+'nt:\x20c'+'enter'+_0x50a00f(0x3fc)+_0x50a00f(0x557)+'2px;\x20'+'heigh'+_0x50a00f(0x3dc)+_0x50a00f(0x25b)+_0x50a00f(0x103)+_0x50a00f(0x2d1)+'borde'+_0x50a00f(0x242)+_0x50a00f(0x3ad)+_0x50a00f(0x190)+_0x50a00f(0x425)+_0x50a00f(0x23d)+'kgrou'+_0x50a00f(0x55b)+_0x50a00f(0x27b)+'arent'+_0x50a00f(0x33e)+'or:\x20r'+'gba(2'+'46,23'+'8,242'+',.4);'+'\x20curs'+'or:\x20p'+'ointe'+_0x50a00f(0x344)+'nt-si'+_0x50a00f(0x5eb)+_0x50a00f(0x35c)+_0x50a00f(0x539)+_0x50a00f(0x1b5)+_0x50a00f(0x4e0)+'0;\x20}\x0a'+_0x50a00f(0x3dd)+_0x50a00f(0x34c)+'b:hov'+_0x50a00f(0x605)+'color'+_0x50a00f(0x55d)+'a(246'+_0x50a00f(0x2ad)+_0x50a00f(0x22f)+_0x50a00f(0x5be)+_0x50a00f(0x425)+'.mn-t'+'ab.ac'+'tive\x20'+_0x50a00f(0x5b2)+'or:\x20#'+'ff6b9'+_0x50a00f(0x2b9)+'ckgro'+_0x50a00f(0x4a0)+_0x50a00f(0x206)+_0x50a00f(0x5d2)+_0x50a00f(0x2d7)+'7,.1)'+';\x20}\x0a\x20'+_0x50a00f(0x311)+_0x50a00f(0x150)+'n\x20{\x20f'+_0x50a00f(0x352)+_0x50a00f(0x41a)+_0x50a00f(0x37e)+'th:\x200'+_0x50a00f(0x45a)+_0x50a00f(0x3b5)+'\x20flex'+_0x50a00f(0x20c)+'x-dir'+'ectio'+'n:\x20co'+_0x50a00f(0x4d1)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x50a00f(0x115)+_0x50a00f(0x181)+_0x50a00f(0x3b5)+_0x50a00f(0x281)+_0x50a00f(0x54c)+_0x50a00f(0x22a)+_0x50a00f(0x374)+_0x50a00f(0xd1)+'r;\x20ga'+_0x50a00f(0x380)+'px;\x20p'+_0x50a00f(0x9d)+_0x50a00f(0x511)+_0x50a00f(0x138)+_0x50a00f(0xc1)+_0x50a00f(0x326)+_0x50a00f(0x586)+_0x50a00f(0x347)+'none;'+_0x50a00f(0x51f)+'\x20\x20.mn'+'-titl'+_0x50a00f(0x2ec)+_0x50a00f(0x1b6)+'\x201;\x20m'+'in-wi'+_0x50a00f(0x3a5)+_0x50a00f(0x5d3)+'\x20\x20\x20\x20.'+'mn-h\x20'+_0x50a00f(0x502)+'t-siz'+'e:\x2017'+'px;\x20f'+'ont-w'+_0x50a00f(0x3c8)+':\x20650'+_0x50a00f(0x2a3)+'\x20\x20\x20.m'+'n-sub'+_0x50a00f(0x5f7)+_0x50a00f(0x3ea)+_0x50a00f(0x5eb)+_0x50a00f(0x43a)+_0x50a00f(0x49d))+(_0x50a00f(0x9a)+_0x50a00f(0xc8)+_0x50a00f(0x3dd)+_0x50a00f(0x121)+_0x50a00f(0x431)+_0x50a00f(0x142)+'lay:\x20'+'grid;'+_0x50a00f(0x2e1)+'e-ite'+'ms:\x20c'+'enter'+_0x50a00f(0x3fc)+_0x50a00f(0x1ea)+_0x50a00f(0x3b0)+_0x50a00f(0x16c)+_0x50a00f(0x13f)+'px;\x20b'+'order'+':\x200;\x20'+_0x50a00f(0x247)+'r-rad'+_0x50a00f(0x3ad)+_0x50a00f(0x3b0)+'backg'+_0x50a00f(0x2d8)+_0x50a00f(0xed)+'nspar'+_0x50a00f(0x4d2)+_0x50a00f(0x610)+_0x50a00f(0x588)+'erit;'+_0x50a00f(0x4ee)+_0x50a00f(0xd2)+_0x50a00f(0x577)+_0x50a00f(0x1f8)+_0x50a00f(0x49f)+'inter'+_0x50a00f(0x2a3)+_0x50a00f(0x311)+_0x50a00f(0x3ff)+'se:ho'+_0x50a00f(0x495)+_0x50a00f(0x4ee)+'ity:\x20'+_0x50a00f(0x484)+_0x50a00f(0x1aa)+'und:\x20'+_0x50a00f(0x206)+_0x50a00f(0x1ab)+_0x50a00f(0xae)+_0x50a00f(0x53c)+_0x50a00f(0x4d5)+'\x20\x20\x20\x20.'+_0x50a00f(0x121)+_0x50a00f(0xdb)+_0x50a00f(0x4a1)+'width'+_0x50a00f(0x423)+_0x50a00f(0x56b)+'ight:'+_0x50a00f(0x58a)+_0x50a00f(0x571)+'l:\x20no'+_0x50a00f(0x5ed)+'troke'+':\x20cur'+'rentC'+_0x50a00f(0xdd)+_0x50a00f(0x4fe)+'ke-wi'+'dth:\x20'+_0x50a00f(0x32d)+_0x50a00f(0x5b0)+_0x50a00f(0x2c8)+'ap:\x20r'+_0x50a00f(0x104)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+_0x50a00f(0x154)+_0x50a00f(0x367)+';\x20min'+'-heig'+_0x50a00f(0x35e)+';\x20ove'+'rflow'+_0x50a00f(0xe0)+'uto;\x20'+_0x50a00f(0x287)+'ay:\x20g'+_0x50a00f(0x303)+'grid-'+_0x50a00f(0x1e8)+'ate-c'+'olumn'+'s:\x20re'+'peat('+_0x50a00f(0x178)+_0x50a00f(0x452)+_0x50a00f(0x2e2)+_0x50a00f(0x1d3)+_0x50a00f(0x3a8)+_0x50a00f(0x2b7)+_0x50a00f(0x54c)+_0x50a00f(0x22a)+'ems:\x20'+'start'+_0x50a00f(0x54c)+_0x50a00f(0xfe)+_0x50a00f(0x567)+_0x50a00f(0xb8)+_0x50a00f(0x2d5)+_0x50a00f(0x205)+'0px;\x20'+_0x50a00f(0x552)+'ng:\x200'+_0x50a00f(0x301)+_0x50a00f(0x8a)+_0x50a00f(0x2a3)+'\x20\x20\x20.m'+_0x50a00f(0x409)+_0x50a00f(0x4d7)+_0x50a00f(0x209)+'-scro'+'llbar'+_0x50a00f(0x3b2)+_0x50a00f(0x3a5)+_0x50a00f(0x3b0)+_0x50a00f(0xf0)+'\x20.mn-'+_0x50a00f(0x2c0)+_0x50a00f(0x5fd)+'kit-s'+'croll'+_0x50a00f(0x2db)+'humb\x20'+_0x50a00f(0x540)+_0x50a00f(0xaa)+_0x50a00f(0x3cd)+_0x50a00f(0x405)+_0x50a00f(0xae)+'5,255'+_0x50a00f(0xaf)+_0x50a00f(0x3e3)+'der-r'+_0x50a00f(0x4eb)+_0x50a00f(0x2cb)+';\x20}\x0a\x20'+_0x50a00f(0x2e4)+_0x50a00f(0x4ec)+_0x50a00f(0x2cd)+'order'+_0x50a00f(0xe5)+_0x50a00f(0x187)+_0x50a00f(0x1c8)+_0x50a00f(0x4f6)+_0x50a00f(0x2d8)+_0x50a00f(0x55d)+'a(255'+',255,'+'255,.'+_0x50a00f(0x1cc)+_0x50a00f(0x1fc)+_0x50a00f(0xa9)+_0x50a00f(0x53d)+_0x50a00f(0x492)+_0x50a00f(0x151)+'1px\x20r'+'gba(2'+_0x50a00f(0xae)+'5,255'+_0x50a00f(0x522)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x50a00f(0x4ec)+_0x50a00f(0x5fe)+_0x50a00f(0x540)+_0x50a00f(0xaa)+_0x50a00f(0x3cd)+'gba(2'+'55,25'+_0x50a00f(0x537)+_0x50a00f(0x128)+';\x20box'+_0x50a00f(0x110)+_0x50a00f(0x386)+'nset\x20'+_0x50a00f(0x441)+'\x201px\x20'+_0x50a00f(0x206)+_0x50a00f(0x5d2)+_0x50a00f(0x2d7)+_0x50a00f(0x227)+');\x20}\x0a'+_0x50a00f(0x3dd)+_0x50a00f(0x4f2)+'rd-he'+'ad\x20{\x20'+'displ')+(_0x50a00f(0x3e2)+_0x50a00f(0x17a)+_0x50a00f(0x4ff)+'-item'+_0x50a00f(0x530)+_0x50a00f(0x2fe)+_0x50a00f(0x3f8)+_0x50a00f(0x5f1)+_0x50a00f(0x28d)+_0x50a00f(0x10f)+_0x50a00f(0x246)+'12px;'+_0x50a00f(0x51f)+'\x20\x20.sk'+_0x50a00f(0x518)+'-titl'+_0x50a00f(0x1ff)+'lex:\x20'+_0x50a00f(0x41a)+_0x50a00f(0x37e)+_0x50a00f(0x514)+';\x20}\x0a\x20'+_0x50a00f(0x2e4)+_0x50a00f(0x4ec)+_0x50a00f(0x3fd)+'le\x20st'+'rong\x20'+'{\x20fon'+_0x50a00f(0x1cf)+_0x50a00f(0x4a6)+_0x50a00f(0x1c5)+'ont-w'+_0x50a00f(0x3c8)+':\x20600'+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+'8,242'+_0x50a00f(0x164)+_0x50a00f(0x2a3)+'\x20\x20\x20.s'+_0x50a00f(0x4ec)+_0x50a00f(0x5fe)+'.sk-c'+_0x50a00f(0x49e)+'itle\x20'+'stron'+'g\x20{\x20c'+'olor:'+'\x20#fff'+'0f5;\x20'+_0x50a00f(0xf0)+'\x20.sk-'+'mbody'+_0x50a00f(0x5e6)+_0x50a00f(0x5d9)+':\x200\x201'+_0x50a00f(0x11a)+'0px;\x20'+_0x50a00f(0xf0)+_0x50a00f(0x14a)+_0x50a00f(0x4c2)+_0x50a00f(0x5f7)+_0x50a00f(0x3ea)+'ze:\x201'+'1px;\x20'+'opaci'+'ty:\x20.'+_0x50a00f(0x46d)+_0x50a00f(0x4b3)+_0x50a00f(0x24c)+_0x50a00f(0xdf)+'x;\x20}\x0a'+_0x50a00f(0x3dd)+'sk-ct'+_0x50a00f(0x244)+'ispla'+_0x50a00f(0x271)+_0x50a00f(0x196)+'lign-'+_0x50a00f(0xcd)+_0x50a00f(0x365)+_0x50a00f(0x528)+_0x50a00f(0x230)+'8px;\x20'+'paddi'+_0x50a00f(0x2cc)+_0x50a00f(0x439)+_0x50a00f(0x20e)+_0x50a00f(0x210)+_0x50a00f(0x1f4)+_0x50a00f(0x165)+_0x50a00f(0xf0)+'\x20.sk-'+_0x50a00f(0x1c9)+_0x50a00f(0x154)+_0x50a00f(0x367)+';\x20col'+_0x50a00f(0x30a)+_0x50a00f(0x405)+_0x50a00f(0x173)+'8,242'+_0x50a00f(0x5af)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x50a00f(0x400)+'ispla'+_0x50a00f(0x8d)+_0x50a00f(0x5e1)+'font-'+_0x50a00f(0x538)+'\x2010px'+_0x50a00f(0x48f)+'city:'+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x50a00f(0x2a0)+_0x50a00f(0x491)+_0x50a00f(0x26f)+_0x50a00f(0x3c1)+_0x50a00f(0x5ab)+_0x50a00f(0x56f)+_0x50a00f(0x224)+_0x50a00f(0x4e9)+_0x50a00f(0x12c)+'ght:\x20'+_0x50a00f(0x5a6)+'\x20bord'+_0x50a00f(0x3c6)+_0x50a00f(0x3e3)+_0x50a00f(0x5f8)+_0x50a00f(0x4eb)+_0x50a00f(0x345)+'x;\x20ba'+_0x50a00f(0x1aa)+_0x50a00f(0x4a0)+'rgba('+'255,2'+'55,25'+'5,.07'+');\x20cu'+'rsor:'+_0x50a00f(0x2e3)+'ter;\x20'+'flex:'+_0x50a00f(0x25a)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+'\x20{\x20co'+_0x50a00f(0x567)+_0x50a00f(0x5f3)+_0x50a00f(0x140)+_0x50a00f(0x96)+'\x20abso'+_0x50a00f(0x2dd)+'\x20top:'+'\x203px;'+_0x50a00f(0x426)+':\x203px'+_0x50a00f(0x3fc)+'th:\x208'+_0x50a00f(0x328)+'eight'+_0x50a00f(0x9f)+_0x50a00f(0x3e3)+'der-r'+_0x50a00f(0x4eb)+_0x50a00f(0x37a)+';\x20bac'+_0x50a00f(0xaa)+'nd:\x20r'+'gba(2'+'55,25'+_0x50a00f(0x537)+_0x50a00f(0x378)+_0x50a00f(0x1ad)+_0x50a00f(0x2d9)+_0x50a00f(0x31e)+_0x50a00f(0x299)+_0x50a00f(0xd4)+_0x50a00f(0x398)+_0x50a00f(0x3d6)+_0x50a00f(0x3a9)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x50a00f(0x2a0)+_0x50a00f(0x589)+_0x50a00f(0x376)+'cked='+'\x22true'+_0x50a00f(0x534)+_0x50a00f(0x4f6)+_0x50a00f(0x2d8)+_0x50a00f(0x55d))+(_0x50a00f(0x31a)+_0x50a00f(0x44d)+_0x50a00f(0x30c)+_0x50a00f(0x3cf)+_0x50a00f(0xf0)+'\x20.sk-'+_0x50a00f(0x2a0)+'h[ari'+_0x50a00f(0x376)+_0x50a00f(0x5cd)+'\x22true'+_0x50a00f(0x60c)+'fter\x20'+'{\x20lef'+_0x50a00f(0x607)+'px;\x20b'+_0x50a00f(0x398)+'ound:'+_0x50a00f(0x4ac)+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x50a00f(0x14a)+_0x50a00f(0x3ae)+'\x20{\x20ba'+_0x50a00f(0x1aa)+_0x50a00f(0x4a0)+_0x50a00f(0x206)+'255,2'+'55,25'+'5,.03'+_0x50a00f(0x222)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x50a00f(0x3ad)+_0x50a00f(0x44b)+'color'+':\x20#f6'+_0x50a00f(0x556)+_0x50a00f(0x28d)+_0x50a00f(0x10f)+'6px\x209'+_0x50a00f(0x1c5)+_0x50a00f(0x332)+'ize:\x20'+'11.5p'+_0x50a00f(0x3d0)+_0x50a00f(0x318)+':\x20non'+_0x50a00f(0x274)+_0x50a00f(0x4e6)+'dow:\x20'+_0x50a00f(0x1ce)+_0x50a00f(0x151)+_0x50a00f(0x12b)+_0x50a00f(0x27f)+'(255,'+_0x50a00f(0x1ab)+_0x50a00f(0x10e)+_0x50a00f(0x474)+_0x50a00f(0x425)+'.sk-f'+'ield\x20'+'optio'+'n\x20{\x20b'+'ackgr'+_0x50a00f(0x479)+_0x50a00f(0x50b)+'419;\x20'+_0x50a00f(0xf0)+_0x50a00f(0x14a)+_0x50a00f(0x416)+_0x50a00f(0x3a6)+'splay'+_0x50a00f(0x39c)+_0x50a00f(0x369)+_0x50a00f(0x3b6)+'tems:'+_0x50a00f(0x358)+_0x50a00f(0x238)+'ap:\x208'+_0x50a00f(0x50d)+_0x50a00f(0x425)+_0x50a00f(0x5cc)+'lider'+'\x20{\x20-w'+_0x50a00f(0x209)+_0x50a00f(0x5d8)+'aranc'+_0x50a00f(0x2d4)+'ne;\x20a'+'ppear'+_0x50a00f(0x21c)+_0x50a00f(0x25a)+';\x20wid'+_0x50a00f(0x13c)+'0px;\x20'+'heigh'+'t:\x208p'+_0x50a00f(0x3df)+_0x50a00f(0x1aa)+_0x50a00f(0x4a0)+_0x50a00f(0x330)+_0x50a00f(0x29f)+'t;\x20}\x0a'+_0x50a00f(0x3dd)+_0x50a00f(0x5d0)+'ider:'+':-web'+_0x50a00f(0x29c)+_0x50a00f(0x1e0)+'-runn'+'able-'+_0x50a00f(0x3ac)+_0x50a00f(0xd0)+_0x50a00f(0x46e)+'\x202px;'+'\x20bord'+_0x50a00f(0x198)+_0x50a00f(0x234)+_0x50a00f(0x559)+_0x50a00f(0x60b)+_0x50a00f(0x1b0)+_0x50a00f(0x4ca)+_0x50a00f(0x595)+_0x50a00f(0x16a)+_0x50a00f(0x574)+_0x50a00f(0x1cb)+_0x50a00f(0x5ec)+_0x50a00f(0x407)+_0x50a00f(0x3ec)+_0x50a00f(0x3e6)+'r(--p'+',\x2050%'+_0x50a00f(0x3a0)+_0x50a00f(0x5dc)+_0x50a00f(0x481)+'t,\x20rg'+_0x50a00f(0x4cd)+_0x50a00f(0x537)+_0x50a00f(0x594)+_0x50a00f(0x417)+_0x50a00f(0x51f)+_0x50a00f(0x42e)+_0x50a00f(0x475)+_0x50a00f(0x276)+'webki'+'t-sli'+'der-t'+'humb\x20'+'{\x20-we'+_0x50a00f(0x1f0)+'appea'+'rance'+':\x20non'+_0x50a00f(0x2c7)+_0x50a00f(0x3a5)+_0x50a00f(0x44b)+'heigh'+_0x50a00f(0x4c1)+_0x50a00f(0xf1)+'rgin-'+'top:\x20'+_0x50a00f(0x399)+_0x50a00f(0xf9)+'er-ra'+_0x50a00f(0x234)+_0x50a00f(0x4aa)+'\x20back'+'groun'+_0x50a00f(0x3cb)+'f6b9d'+_0x50a00f(0x2a3)+_0x50a00f(0x2e4)+'k-val'+_0x50a00f(0x5f7)+_0x50a00f(0x3ea)+_0x50a00f(0x5eb)+_0x50a00f(0x43a)+_0x50a00f(0x539)+_0x50a00f(0x1b5)+'t:\x2060'+'0;\x20mi'+_0x50a00f(0x37e)+'th:\x202'+_0x50a00f(0x3b0)+'text-'+'align'+':\x20rig'+'ht;\x20c'+_0x50a00f(0x5f9)+_0x50a00f(0x27f)+_0x50a00f(0x141)+_0x50a00f(0x220)+'42,.8'+_0x50a00f(0x4d5)+_0x50a00f(0x3dd)+_0x50a00f(0x1c4)+'lor\x20{')+('\x20widt'+_0x50a00f(0xf5)+'px;\x20h'+'eight'+':\x2022p'+_0x50a00f(0x438)+'rder:'+_0x50a00f(0x254)+'order'+_0x50a00f(0xe5)+_0x50a00f(0x36c)+_0x50a00f(0x25b)+_0x50a00f(0x398)+_0x50a00f(0x479)+'\x20none'+_0x50a00f(0x152)+_0x50a00f(0x5db)+_0x50a00f(0x4a2)+'ursor'+_0x50a00f(0x451)+_0x50a00f(0x2fe)+_0x50a00f(0x51f)+_0x50a00f(0x42e)+'-note'+'\x20{\x20fo'+_0x50a00f(0x3ea)+_0x50a00f(0x5eb)+_0x50a00f(0x43a)+_0x50a00f(0x610)+_0x50a00f(0x55d)+'a(246'+_0x50a00f(0x2ad)+'242,.'+_0x50a00f(0x382)+_0x50a00f(0x9d)+'g:\x202p'+'x\x200;\x20'+_0x50a00f(0xf0)+'\x20.sk-'+'note.'+_0x50a00f(0x47d)+_0x50a00f(0x4d0)+_0x50a00f(0x4e2)+_0x50a00f(0x349)+_0x50a00f(0x2a3)+_0x50a00f(0x2e4)+'k-btn'+_0x50a00f(0xbc)+_0x50a00f(0x161)+_0x50a00f(0x1fb)+'flex-'+'start'+_0x50a00f(0x3e3)+'der:\x20'+'0;\x20bo'+'rder-'+_0x50a00f(0x3f6)+_0x50a00f(0x4b2)+'x;\x20pa'+_0x50a00f(0x5d9)+_0x50a00f(0x9f)+_0x50a00f(0x40a)+';\x20bac'+'kgrou'+'nd:\x20#'+'ff6b9'+'d;\x20co'+'lor:\x20'+'#fff;'+_0x50a00f(0x20e)+_0x50a00f(0x210)+':\x2011.'+_0x50a00f(0x165)+'font-'+'weigh'+'t:\x2070'+_0x50a00f(0x5a5)+_0x50a00f(0x4e1)+'\x20poin'+_0x50a00f(0x528)+_0x50a00f(0xf0)+_0x50a00f(0x14a)+'btn:h'+_0x50a00f(0xa5)+_0x50a00f(0x1ef)+_0x50a00f(0x11d)+_0x50a00f(0x11f)+'tness'+_0x50a00f(0xe9)+';\x20}\x0a\x20'+_0x50a00f(0x313));window['addEv'+_0x50a00f(0x251)+_0x50a00f(0x3bb)+'r']('keydo'+'wn',_0x3ce4b8=>{var _0x3968f9=_0x50a00f;_0x3ce4b8['code']==='Inser'+'t'&&(_0x3ce4b8['preve'+'ntDef'+_0x3968f9(0x600)](),_0x30b009());},!![]);var _0x1df34e=document[_0x50a00f(0x461)+_0x50a00f(0x184)+_0x50a00f(0x4ed)]('div');_0x1df34e[_0x50a00f(0x59b)][_0x50a00f(0x46a)+'xt']=_0x50a00f(0x524)+'ion:f'+_0x50a00f(0x5d7)+'top:1'+_0x50a00f(0x2b3)+'ight:'+'12px;'+_0x50a00f(0xc3)+'ex:21'+_0x50a00f(0x52e)+'646;c'+_0x50a00f(0x1c7)+':poin'+_0x50a00f(0x4f5)+_0x50a00f(0x224)+_0x50a00f(0x4a8)+'heigh'+_0x50a00f(0x337)+_0x50a00f(0x43c)+'city:'+_0x50a00f(0xe7)+_0x50a00f(0x25f)+_0x50a00f(0x96)+'opaci'+_0x50a00f(0x19c)+'2s;po'+_0x50a00f(0x188)+_0x50a00f(0xce)+'ts:au'+_0x50a00f(0x4e8)+'lter:'+_0x50a00f(0x1dc)+_0x50a00f(0xa9)+_0x50a00f(0x33c)+'\x204px\x20'+_0x50a00f(0x206)+_0x50a00f(0x5d2)+'07,15'+_0x50a00f(0x280)+'))',_0x1df34e[_0x50a00f(0x49c)+_0x50a00f(0x127)]=_0x4ea3e6[_0x50a00f(0x29e)],_0x1df34e[_0x50a00f(0x415)]='Sakur'+'a\x20Kou'+'r',_0x1df34e[_0x50a00f(0x362)+'seent'+'er']=()=>_0x1df34e['style'][_0x50a00f(0x49d)+'ty']='1',_0x1df34e['onmou'+_0x50a00f(0x31d)+'ve']=()=>_0x1df34e[_0x50a00f(0x59b)]['opaci'+'ty']='0.5',_0x1df34e[_0x50a00f(0x533)+'ck']=_0x3ef7ff=>{var _0x5a06e6=_0x50a00f;_0x3ef7ff['stopP'+_0x5a06e6(0x2ed)+'ation'](),_0x4ea3e6[_0x5a06e6(0x26b)](_0x30b009);},document[_0x50a00f(0x343)][_0x50a00f(0x261)+'dChil'+'d'](_0x1df34e),_0x4ea3e6[_0x50a00f(0x1ca)](_0x412c5f),requestAnimationFrame(_0x376a29),console[_0x50a00f(0x228)](_0x50a00f(0x357)+_0x50a00f(0x2bb)+_0x50a00f(0x4b6)+_0x50a00f(0x526)+_0x50a00f(0x33b)+_0x50a00f(0x56e)+':',_0x1878f7[_0x50a00f(0x4f7)]);});})()));
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
