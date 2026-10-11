// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.0.3
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
function _0x593b(){var _0x28e526=['tgLZDa','B3qGBwe','ihnVig4','ldePoWO','nsWYntu','zsbTAxm','y3jLBwu','zMLSzw4','CgfJAxq','sgvPz2G','nhb4oYa','DhLqy3q','zw50tgK','ChbLyxi','Cur6z0W','zgrPBMC','qLPjBM0','z2fTzuW','z2v0','vKPnq0m','uwvezMi','yNv0Dg8','y3jLyxq','C2v0sxq','CenntLK','ysGYndy','C3DPDgm','i2zMzG','EhrWs1O','BgDQBhG','DxjLihq','nhW2Fdi','ChH6qwG','t0nRzhG','ChG7ih0','B25JAge','q0XsBvm','y2HLy2S','Bw9fEha','igfSAwC','zNbZ','AhHyBee','wwz4Dfa','B250lxC','ihbVAw4','zuvRAMm','pc9ZBwe','DgL0Bgu','yw5ZzM8','vvDqugG','kc4YmIW','EYbWB3m','DhriwwS','yw1L','mtv8mNW','B2LUDgu','oIbYz2i','ie92zxi','C3bSAxq','CMfKAxu','ihWGrvi','C2STC2W','CIb2ywW','ChG7igG','y2vdAgK','re9nq28','z1vjAvm','y3K9iJe','B3vUzca','mcbOB28','AY1ZD2K','mcWWlJu','ldeWnYW','yLb1Evi','DgXL','zvbPEgu','u3rHDgu','z29K','tM8GuMu','zsb3zwe','BhrLCJO','CJOGi2y','Eg9XEKe','CM9Rzxm','D2vIA2K','C21HBgW','Be1VDgK','BfjHDgK','yM9KEq','iKLUDgu','Bw4TAca','z1jTvui','zwCGzMe','qvLwCMW','ywqUieK','C2f2zq','BhmGDgG','mtq2ntm5nZfqt2ngq0e','oYbIB3i','B2reAwu','DdOGnZa','B2X1Dgu','zgL2','zgLUzZO','AtmY','DgvZDa','rMLLBgq','y2uGB3y','qxHkqMu','ihrOzsa','lwHLAwC','tgvNAw8','mNb4oYa','B3vUzdO','CJOGCg8','CwHgzvG','zJmY','s2v5ra','C2v0uhi','C2STBwi','B2XPBMu','Cc1ZAge','zwn0oIa','ic40oYa','y2TNCM8','ihSGzMW','mtaWid0','u2L6zq','B25SEsW','ltiUnsa','z3jHDMK','Bg93zxi','yxbWzwe','BMvS','C3bSyxK','DMfSDwu','mhG2mda','yxmGBM8','tw92zq','Ahq7igm','phnTywW','BMC6ida','C3rVCfa','DdOGmJG','BI13Awq','qM90Dg8','kdeWmhy','BIb7igy','ywrKrxy','BxbAy0S','DhLSzq','y2fSBa','Cef4uve','AguGCMu','Aw50zxi','y3vYC28','Dg9WoJe','ohG5mc0','C3rLBMu','vuXSueu','q1zUr2O','u0fgrq','CgvHDcG','rgXiC3C','C3rYB2S','z2vksem','svf6AvO','uvbny2u','C2f0Dxi','sw5PDgK','rfHwBgm','z2v0qxq','Bhv0ztS','oI13zwi','DgvTCgW','Bg9N','FdD8mtq','mdSGyM8','q1btihi','AdOGnJi','ihn0AwW','v2LKDgG','lxj1BM4','tgresvG','ywLYlG','z3b0zvq','mtiGmJe','tM9jEeG','zw1ZoIa','wMvYB2u','ldiZocW','zwv6zsa','EMz3rMW','C2L6ztO','C3PAAuS','uwH0vNO','tg9Hzgu','qsblt1u','mNb4o3i','u0jwrgy','ig1PBM0','yxj0lG','zgvSzxq','u3Hbz2u','BNqGAge','AwvSzca','DuvvsuG','Fdr8mtK','B2f0Eq','oYbIywm','tKCGlsa','r29Kie0','thbKBe8','q1nIsMe','vgLJAW','AwDODdO','EhrOtw4','mtjWEca','id0GzMW','Ahq6idi','B2rLu3q','AgvHzgu','ywXSihq','EtOGyMW','kdeUmsK','Eg9wEgu','D09OuuO','C2fMzu0','lK92zxi','zMDyzfe','BMDfvNm','tfbVEhq','wgLyC0G','mhb4lca','Aw9FmZa','ndGZnJq','C2STy3q','DwvxBgO','C2XPy2u','mtCWmJffwgfkvg8','sNvTCfq','BKPut3i','C2fRDxi','m3WXFdi','D2vPz2G','zvzHBhu','y2XLyxi','DLHIB3a','zZOGnNa','zw5HyMW','Bwf0y2G','Dxm6ide','zxi7igC','DMvYihS','zsbZzxi','nYWWlJm','wvDVsLO','AgvPz2G','Aw5WDxq','mJm5ntjfA0HYCuW','zwfSDgG','C2STyNq','BYb0Agu','B3rZlG','igvUDgK','B29RCYa','r0XqAhq','zgvYlxq','BwLUkdq','B3nPDgK','C2u6Ag8','BNrLCI0','AwvSza','zxiTzxy','DgLKzvC','ieDLDfy','AwXLzdO','BcbKCMe','AxvZoIa','sg9VAYa','yxjLBNq','AwWGC3a','zxrLy3q','DdOGoha','zvrHA2u','swHLsK4','oYbMB24','Aw5Uzxi','lxrPDgW','BMnL','zg93BG','oMHVC3q','BIbZAwC','icaUC2S','ugf0Aa','Ec1KAxi','Dw5Kzwq','Bg9JAW','A2vizwe','mZC2mdKZm3P0vM5Ssa','DMfS','ys5RB3u','lxjHzgK','icaGlM0','v2rTzui','z29KrgK','zwLNAhq','s2fZqvK','ihSGD2K','Auz6qwy','zu5vr24','Bvzpr2q','BKLdBwS','vKT1q0q','CwLwqNO','s2v5uW','oYb9cIa','zg9JDw0','B2fKzwq','B25Lige','zMLSBfq','nde5oYa','rw5NAw4','Bgf0zwq','Cg9W','A3nty2e','BMu7ihm','ndHWEcK','DMvTzw4','ywqGD2G','idHWEdS','igXLyxy','ih0kica','Dg5LC3m','B290zxi','B2r5','CMvMAxG','nMvLzJi','y29Kzq','lxnPEMu','thPZwvq','zMLLBgq','zxnJ','Aw5Mqw0','zw4GDg8','t1zOy0C','qwrIBg8','A291CI0','wejXsfe','otz1wwjWzuS','rNvRBge','BNnLDca','BgvMDa','m3WXnxW','oWOGica','EtOGz3i','Aw4GC2e','vgfRzxm','zMy2yJK','tLPit20','nsWUmdu','v3jHCha','Bw4TCge','mdSGFqO','DxjH','zxG6mJe','CMqTAgu','y2fWtw8','yM91BMq','EdSGAgu','Ag9VA04','ChG7cIa','mtj8mhW','DcbHihq','C3rHCNq','ANvTCfa','Dxm6idy','twLZyW','ywWGBwu','zxjYB3i','B24Oks4','Bw4Ty2W','C2vYDMu','CMvSB2e','sKrzyxO','CNq7igC','A2DYB3u','Axr5oIa','qNrYDwm','vg90ywW','u0flvvi','mJzWEdS','zwn0Aw8','s2v5C3q','ywqGDg8','q3H3u3O','mc41o3q','DcbZDge','z2LMEq','CgXHEtO','DgvYigm','EdSGyM8','D2HLCMu','CY1Zzxi','oIb0CMe','zw50CZO','igvYCG','rLDUAeW','y3Pczhe','tu9ersa','oYbVDMu','ihWGz2e','yMfYlxq','lxnHBNm','yxnLBgK','BfH2u3K','rNHwyvO','C2STy28','zwqGyw0','Dg87ih0','DufHENC','sNLAyva','wMPKDfO','sw5MAw4','ktSGFqO','BwjVzhK','igLMig0','icnMzJy','tKCG4Ocuia','mdSGy3u','igzVBNq','tw9Kzsa','Dxm6idi','s0HUtLK','lxDPzhq','Aw9UlLq','DMf6wNi','DMLHifm','mNW1FdC','BvrzvLi','vMLZDwe','EsbKzwy','zxzLBIa','B3jVqKm','DMCGEYa','B3vUzdS','cIaGica','v01ligK','ywrPDxm','icaUBw4','C2HHzg8','nIaXoci','rvzVrxa','i2zMnMi','Dg9WoIa','sNLMAvu','lc4YnsK','yLjPBfK','t2r0Eey','zxjSyxK','CMfWAwq','wNHVD1G','qMjHv1G','zIXZExm','B3nL','twrpvMu','mJu1lc4','mJzwv3bMvM0','mdCSmtu','zIbTyxq','Bxm6igm','ndiSlJG','oJiXndC','mJvyDxbktKu','ExjYtxm','BgW+','zw50rwW','zg93oIa','wenyqKK','AxfpC1G','DdOGmtu','Bw92zq','qM9MyMG','zcWGyw4','vgjiv3e','zM9UDa','CZPUB24','ysblB3u','BNnWyxi','vvjpsK0','CNjVCG','BgLJyxq','BM9szwm','nsK7iha','BM9Uzq','BeTYrMC','qxbWBgK','oYb1C2u','uJOG','DxDTAW','nJiWChG','Ag5jzeO','BNrLBNq','BgLNBG','Bgv4oIa','sKXnsM0','ChG7igy','vfrQvwO','sgfQwvi','yxb5Eue','AwXS','ocKPoYa','BgLUzvC','yxrLkde','y2L0EtO','lMXHC3q','B2rdENe','CIdIGjqG','mtb8nNW','mJu1ldi','zvj1BM4','ignHBgm','Aw4TD2K','mhb4oYa','CYbZChi','EhPcz2W','AxnnAfm','y2XHC3m','B24U','mJiSocW','B2rL','zuvSzw0','igrHBwe','BM9tChi','CMLUz3m','rhbWtu4','y3jLzw4','D1Pdrge','ignHy2G','rLbtigm','igq9iK0','B3jKzxi','y3jVC3m','zxG6ide','CYbnB3y','s3zhzeW','B3b0Aw8','BM93','mJqYlc4','EdTVCge','whv0wfK','DcWGCMC','B2rTCwy','nYWWlJG','zsbBrvG','B246ig8','vNbtrve','y0ntBM0','B3i6ihi','nJq2o2m','Aw9F','4Ocuig92zq','zvbSDwC','Cg9ZAxq','zsWGDhi','icaG','mJK5nhfZwNfiAa','zgTPDa','yYGXmda','CMvSEsa','AujrCuu','Aw5Zzxq','igrLzMe','rwfJAca','oJa7EI0','EI1PBMq','uMvJB2K','Bg9HzgK','q29TyMe','sMH2Dum','BgLUzwm','CgfYzw4','nNW4Fde','B3zLCMy','mtSGBwK','EfnMvfe','D3L1te8','zwfWB24','sgvHBhq','BMq6ihi','nsKSida','DhLWzq','ihbHzgq','ndySmJm','zc10Axq','CMzSB3C','q2LpruO','ugT0z04','nMi5zci','rurvugS','ihrVCdO','DhKGjq','D0jSDxi','zZOGmta','vfnvC1O','z2fPEuK','ihSGywW','zgL1CZO','zgzQC2y','khjLBg8','zxi6igi','CZOGmty','BMuUqxa','u2v0r2e','ztSGD2K','B3LlzwC','yMTPDc0','suXjrMu','BwvsDw4','z3LIywm','iIbZDhi','zxi6oI0','Fdn8na','AxPLoIa','zg93BIa','te1c','lwfWCgu','zs5bCha','zsb2ywW','iL06oMe','zenOAwW','CMLNAhq','DNrIu1u','icaGyMe','AY1Jyxi','DhjPyNu','ihDPzhq','z3jVDw4','AwXnB3q','mZuSmJq','BMqIihm','BxbkzeG','DhjHBNm','EhrTEhi','s2XYEfu','rNjly0W','zw51','ALHcwuq','rxnXtMu','BhrO','zdOGBgK','uNPSug4','sMjgww4','ywqGEYa','oIbYAwC','nJiXmMTfBxPQuq','u2DXD2u','nJaWia','idi0iIa','oYbMAwW','zsaOt0G','oIaXms4','uMvZzxq','ihWGBw8','y3nZvgu','ztOGmtm','y2HPBgq','msWUmZy','BMvJyxa','CM0GlJq','CMvHza','zsb7igy','u2fRDxi','BvLUsKK','BLbSyxq','vKrewK4','yMfJA2C','uvr6rwO','zfDWzfe','A3mGyxi','qxbWBhK','ufmGDw4','ywnPDhK','sKrXsxu','v3jbs2G','Cujttg8','swjer1q','iezquW','C3rstNG','lJq1oYa','nwmWidm','oIaXoYa','Dw5RBM8','DhjVA2u','mdb2DZS','ig1HCMC','zwf0CYa','rNjHBwu','B25PBNa','z2v0rwW','oYbWywq','yxa6idG','y0HSr3G','tw92zw0','zw50oYa','t0HLywW','Fdv8mhW','wLb0sMG','yxjPys0','CMqTDgK','A3ndChm','yxGOmJu','Dgv4Dei','BgLUzvq','idi0iJ4','DMPdDKe','uvDfuxK','Bcb7igq','ugXut0W','Evjdrfm','ocWYndi','CYbpsgu','BMLUzW','ns00idC','zxqGmca','A21hyvK','D2fYBG','Bg9Hzhm','EtOGzMW','r3b2EwO','yxjNzxq','yxjHBMm','z24TAxq','C2v0qxq','lxrVCca','ywrKAw4','Aw1Lihm','ig9Wywm','igjVEc0','zxjZihq','ve1bq2y','DwX0','Dhj1zq','EwDwAuK','oIbJB2W','rxHW','mhWXFdi','AsXZyw4','BI1SB2C','CMfUz2u','yxrLlwm','lc40nsK','mJSGC3q','EeTeA28','idK5osa','rurNv3u','zwHID2q','igjHy2S','mcaWida','CMLZAYa','idaGmca','Bgv4oYa','oYbQDxm','CMfUC2K','CIbHzhy','ic5TBI0','FqOGica','nYWUmsK','Fdr8mNW','zw50','iduWjtS','vMfNq1G','lxnLCMK','sNj4CNy','C2vLBNq','q090Ag0','zhrOoIa','mtfWEca','AgfPCG','B3zLCMW','sNP3sM0','y3zfwu0','C2HPzNq','te9qD08','BgWGBwu','B3nLihm','Dc1ZAxO','CI1ZzwW','z2DSzwq','C3r5Bgu','z24Ty28','ihjNyMe','Aw5NoIa','mNmSigi','zuv4Ca','qunuAYa','BMqGt0G','oIaIiJS','y2vUDgu','zM9YBxm','B2nRoYa','uxPuD08','Fdv8mxW','BMX5kq','uMf0zq','lKXVy2e','qwLbuNO','mdi1ktS','BhvYkdi','rgjlz2u','CMDPBI0','zxiTCMe','AeXMEfO','DgHYB3C','zwLUC3q','zfbPzKS','ide2ChG','igXLzNq','icmYmJe','DgXPBMu','igzSzxG','mtu3lc4','r1HxzMK','DgfNtMe','z3jPzdS','CMLKoYa','Awr0Aa','B2X1Bw4','yxbWBgK','ihWGC2G','ig5VBMu','ide7ig0','ihn5C3q','igHLAwC','B3vmu3e','Awq7iha','Aw1Lvgq','q3vZDg8','BYbWAwC','ldi1nsW','Aw9UoMy','zgvZyW','AfnRzK4','iefmtca','BMn0Aw8','CZOGy2u','BhrOige','CMeTA28','u0fgrsa','igDHCdO','v2nquhq','lwHVCa','u3nbB3e','A291CNm','ChG7ihC','ifvUAxq','yxr0ywm','nc00lJu','C2v0x3q','lwL0zw0','BfHMy3m','Dhm6yxu','BgLUzw4','qNLTs1m','DxqGDgG','FdiYFdK','ig1VBwu','mJqSmtC','y2TLzd0','D2fPDgK','x19ZywS','owqIihm','wxnuqwm','BwjLshK','Dg9Y','oYb0CMe','BMq6ihq','EgnQzxy','Ag9VA0m','ANbntLi','EdSGyMe','v0fttsa','yxbWzw4','ywLSzwq','lcbJywW','Dw1iELC','Acb7iha','C3rLCa','tu1VuuC','idfWEca','BgfZDeu','B1jLy28','DgvJDgK','idnWEdS','Fdr8mhW','AejqANm','zMLSBa','AxmGyNu','u1Pisfm','EdSGBwe','ieaG','B2P0ENG','vw5PDhK','EYbSzwy','vMLNzfm','ywjqs0i','igTVDxi','u2vNB2u','igjVCMq','mtbWEdS','igfIC28','AxHLzdS','B3bHy2K','CMvU','swyGCMu','BsbSzwy','idmWChG','A3nqB3m','zw15igm','AxrLBxm','s2v5qq','AguGzNi','yxrPB24','B2TLpsi','zw1LBNq','zvjHDgu','q291BNq','Dc1Myw0','y29SB3i','B3C6igK','AwrLCG','DgG6idK','ywrIBg8','C0fnuhe','igrPC3a','DNCGlsa','CYaNzNu','CMvHzhK','ntuSmJu','C2HVB3q','A2uTD2K','ihSGzgK','DML0Eq','zgfTywC','q3jVC3m','sMX2t3m','B250zw4','EhD2zxy','qNLjza','iNrYDwu','yMHVCa','idrWEca','zJzIowq','Dfz5zuO','Ec1OzwK','idaGmJq','ChG7igi','ltiUns0','v2vItw8','DMC+','sNvTCca','ifjLy28','AwrLCJO','Bgf5oIa','oYbJB2W','y29TyMe','vvDnsYa','s015wem','ignVB2W','BMC6igi','tMfTzq','v3LKruC','zhPysuq','x19tquS','ywfdz0i','yu1Irhi','vMfSDwu','CvPPz2G','y2HtAxO','C2STCMe','B3uU','EYbIywm','mhW0Fde','mc41','ywz0zxi','m3W2Fdi','DdOYnNa','AxrPB24','B2STCMu','BJOGy28','AKLcy2G','Bg9Hzca','z1PvBfq','A2v5Dxa','mxb4ihi','mtD8mte','z29KicG','tu5AquO','igLZigm','mJu1lde','uwnjB0q','lZ48l3m','zxjZy3i','ideWChG','B3i6icm','Ad0ImIi','zMLSBd0','AxmGAg8','igf1Dg8','BwvUDca','mxW1Fdi','nIa2Bde','CNr1Cca','AgvZ','ihrVide','Dgv4Dc0','yxvSDca','CM9UzYa','C2STDMe','mhW4Fde','rMPkEgC','DgvTlxu','vNbVA2e','DdSGFqO','lcbZyw4','q1DUA0S','iJeYiIa','oYbOzwK','ic8GDMe','otu1mtrsrNvTD3K','ChjLDMu','rgnTA0u','ugn0','CMDIysG','iM5VBMu','Bw91C2u','rfHbCMi','ChGGmdS','z3jPzc0','zwfKEs4','icaGic4','B2LS','B2XVCJS','yM90Dg8','lwv2zw4','ihn0CM8','lc4WnIK','zdSGyMe','DwLKEhm','w3nHA3u','tuLtu0K','BhzAqwm','zw1quxi','lNnRlwy','EYbMB24','BtOGnNa','AwDUlxm','CM91BMq','DMLLD0i','A3HPBfC','z2H0oIa','CMvJDa','DgHLihC','AcaTidq','BNqGAxq','igv4Axq','t3bbzhC','BgXIyxi','AgfZ','uMvJDa','EcbYz2i','yw5Jzs4','lc4WocK','mIaXmK0','j3qGC3q','zeXvt1u','Dw5PDhK','Bwf4','lsbVDMu','B3i6iha','t1H6u3G','oIaWoYa','yvzyrvq','u3bqBgi','mJq5mNbtAfnoEq','oc00lJu','nsK7igi','zMn2z0C','vezvA0G','lNnRlw0','ztOGmtC','C3rYAw4','y3rPB24','z3jHzgK','z2uUiei','oYbVCge','rLbtig8','v0ftrca','lMLVig0','zw50CW','CxvLCNK','CMXHEsa','nxb4oYa','nJaWide','Aujmzvm','ihSGyMe','yMX5lum','oYb3Awq','C1HTDw4','lwXPBMu','CgfKzgK','mcWWlJG','AwX0zxi','zxjYihS','BgfIzwW','s25yyKq','EKjitKe','icbIywm','DgLVBJO','mcWUntu','rKLXwfG','igfWCgW','yM9Yzgu','zsbJEd0','rfbltxK','Dg9W','ywnRz3i','CMuGkfm','Dgv4Dee','Bw4Ty28','CdOGmti','AfTHCMK','Fdv8m3W','Aw9FnZi','zc5VBIa','DuHvs1K','Axb0kq','A2v5zg8','Bw92zw0','B25TB3u','D2vttfy','jsbUBY0','turiA1C','yxK6igC','uwHJDu4','uMvMAwW','BMqGBwe','AM9PBJ0','DgfIihS','ohb4oYa','kYbtCge','B2XVCJO','CMrLCI0','D2vqCLG','AwvZlG','Ec1ZAge','CI52mq','zvrcBeq','BI1PDgu','B3vUDgu','mxb4oYa','BIb0Agu','Bgf5ig8','tKfPs3m','BM9UztS','ohb4ksK','BNnPDgK','Bg9Hzc4','qMXVy2S','q3vuuhy','Aw1Llca','mciGCJ0','n3WXFdi','kg92zxi','zxmGEYa','DgvYoYa','C3rPBgW','lwfWCgW','DhvYyxq','uuT3vw4','yNjPz2G','zMLSBfm','AwrLihS','mJvWEdS','zxjZ','C2HVD24','AY1OAw4','zciVpJW','lxnOywq','ihrYyw4','CZOGyxu','BNrLEhq','ndbRA1zpCvO','ndSGFqO','AguGDxm','v25qDNi','BI5MAxi','zs1PDgu','v3vxsNC','qNnOrNG','zunQA1e','Bxv2AfG','mwzYksK','z2jHkdi','ie1VDMu','t1nOB28','l3jHCgK','Ag9VA3m','igfUzca','zYb7igm','ChbLBNm','yMvS','iJeUnsi','ihSGB3a','idqTnc4','De5Vzgu','rLfmswy','t21stxy','nsWUmdm','DgnOoJO','zvn0EwW','Bw4TDge','DgXLCW','mcaXChG','AhvTyIa','zcb7igi','mtjWEdS','BLbzuhi','Bg9YihS','CMvUDem','B3bLCNq','iL0GEYa','AxnWBge','zwfKige','DxmGywm','CMvHzey','BMq6icm','zw50kcm','zKzzA24','ysGYntu','odaSmtK','z2Lns0S','BgLNBI0','lJjZoYa','B25JBgK','B3vUzgu','igjHBIa','AY12ywW','BNrLCJS','Ae56ugG','Ag9Szsa','wM5yu2y','yw5JztO','B3nWywm','AgvSza','yw1Hz2u','zgLZCgW','BNqTC2K','y2LYy2W','Bw4TC3u','lwjVEdS','DxjDigG','ywXSig8','AwXSihK','B3vXv0e','zvHsuLO','A3rjqLi','AKPruvO','Ag9VA0C','B3nLihS','lcbPBNm','DZOGAw4','BsbJzw4','C1nNuuK','CMfUy2u','EdSGCge','yY0XlJu','ktSGy3u','zM9UDc0','Aw9U','CYbLyxm','s2v5vW','u3rHDhu','y2fWDhu','As1TB24','t09SAui','rwXLBwu','AxnPyMW','lsbHihm','qvbOrwW','AMf6wLO','AKfrqu4','DgvYoIa','zgvYlxi','zMXLEdS','AY1IDg4','zxmGB24','u2fMzsa','tg9JywW','lIbvC2u','C3rYB24','igzVCIa','AwX5oIa','zsb0CMe','lw5VDgu','y29TCgW','Bw4TAa','DgvYo3C','oIa4ChG','BgLTuu8','yw5LBca','BgLKzxi','BI1JBg8','Eu1Hy2O','q2XVC2u','Aw5KzxG','zvKOmtG','mtf8n3W','CM9Szq','A1D1ruS','DgvTCZO','DxjZB3i','C2STBM8','DgLVBI4','EYbMAwW','A2vZig8','idi2ChG','yvreBxa','zw50zxi','D3jPDgu','zwXK','BMDL','zNvSBhm','rvHqxq','ntuSlJa','u3bLzwq','icbIB3G','tgngyMC','BMvHCI0','AwDUlwK','iokaLcb0zq','t0DtBwG','ig1HEsa','lwnVBhm','vNjrAhK','zgvZ','uKXrD0m','ntaLktS','z2v0sxq','y2f0','zxzLBNq','Dw5KoIa','DgG6ida','ig9U','yxrLvge','C2STBwq','phbHDgG','rgPpCuW','mJiXntm2ou5cv2XirG','B3C6ida','nxm0idi','oIbMBgu','C2STy2e','zwXMoIa','igzVDxi','jsK7ic0','ignVBg8','BgvZiem','BwvZC2e','zxrL','Dg9Nz2W','sw5ZDge','lNnRlwm','zMXLEdO','u2TPChm','mtH8mJm','EuvUz2K','sfrnta','BhKGkhi','ywXPz24','uK1c','A2v5C3q','Bw92zvq','zxjPDdS','CdOGmta','yMvNAw4','uLjVwLq','ys11Aq','AwXKigG','zvbSyxK','CNrPzgu','BMv2zxi','lYbhCMe','Awr0AdO','ChGGDwK','mtGGnIa','BY1ZDMC','lJv6iIa','t3r2weO','EeTpsfq','EMu6ide','sM90rvG','lc4WnsK','Dgv4Dem','oIbWB2K','y2n1CMe','sw5Zzxi','Bw4TBwe','EvPfru8','DhmGCgW','BgfJzs0','ys1JAgu','Bw4TDg8','ChG7iha','CM9WywC','BvbIsfO','D2LKDgG','yxb0Dxi','Bg93oIa','wuDUu2W','Ag9VA1a','yxrJAgu','oYbTAw4','DMvYlxy','kdi0nIW','B29Rihi','oJa7D2K','Bgu7igy','BwuG','Dc1ZBgK','ltqTnY4','ugTJqwi','zxiGEYa','CI1Yywq','lxnSAwq','C3bLzwq','ihnOB3q','icaGlNm','idqGnc4','zxH0','ywrK','tKDYwNO','q0Tqu2e','BgvUz3q','DxjDifu','qLHQthm','ignLBNq','ruPvv2m','EsaUmZu','v2vHCg8','C3bHBG','r1vcAe4','zsXTB24','CMvZDg8','BI1TywK','ign1CNm','Dw1UoYa','zgv2Awm','zwfK','B3jZige','oIaZChG','yMPpBuS','y3KGB24','DNz3B0e','CYb3B24','A2fVtvG','ic5ZAY0','nZTWB2K','CgfYC2u','DgDOChC','phn2zYa','ndC0odm','rgfTywC','C2v0','z2fWoIa','nNb4oYa'];_0x593b=function(){return _0x28e526;};return _0x593b();}function _0x40fb(_0x5760b0,_0x3e4d45){_0x5760b0=_0x5760b0-(0xa*0x3a4+-0x2362+-0x1*0x37);var _0x27bec7=_0x593b();var _0x32f8a0=_0x27bec7[_0x5760b0];if(_0x40fb['RUPmCe']===undefined){var _0x50281b=function(_0x1843f4){var _0x1cd23e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x18c331='',_0x597730='';for(var _0x3101c4=-0x1f2a+-0x4dd+0x17*0x191,_0x347664,_0x3eb37c,_0x3268af=0x12f+0x1209+-0x3*0x668;_0x3eb37c=_0x1843f4['charAt'](_0x3268af++);~_0x3eb37c&&(_0x347664=_0x3101c4%(-0x15*-0x14e+-0x1e21*-0x1+-0x1*0x3983)?_0x347664*(0x471*0x6+0xab0+-0x2f*0xca)+_0x3eb37c:_0x3eb37c,_0x3101c4++%(0xc7*-0x1e+0xc2e+0xb28))?_0x18c331+=String['fromCharCode'](0x2*0xfd9+-0x16db*0x1+-0x7d8&_0x347664>>(-(-0x1177+-0x3*-0x8c0+-0x6b*0x15)*_0x3101c4&0x5*0x7bb+0x17ac+-0x3e4d)):0x1126+-0x46a*-0x7+-0x300c){_0x3eb37c=_0x1cd23e['indexOf'](_0x3eb37c);}for(var _0x25c1c0=0x2126*-0x1+-0xca*0x21+-0x8*-0x766,_0x173a0b=_0x18c331['length'];_0x25c1c0<_0x173a0b;_0x25c1c0++){_0x597730+='%'+('00'+_0x18c331['charCodeAt'](_0x25c1c0)['toString'](-0x19df+-0x1*0x339+-0x1*-0x1d28))['slice'](-(0x1*0x2240+0xaa1*-0x3+0x3*-0xc9));}return decodeURIComponent(_0x597730);};_0x40fb['XVqLkr']=_0x50281b,_0x40fb['IMVozT']={},_0x40fb['RUPmCe']=!![];}var _0x118cf6=_0x27bec7[0x25d5*0x1+-0xac+-0x2529],_0x5a80aa=_0x5760b0+_0x118cf6,_0x5c87ee=_0x40fb['IMVozT'][_0x5a80aa];return!_0x5c87ee?(_0x32f8a0=_0x40fb['XVqLkr'](_0x32f8a0),_0x40fb['IMVozT'][_0x5a80aa]=_0x32f8a0):_0x32f8a0=_0x5c87ee,_0x32f8a0;}(function(_0x30b6f1,_0x4b2a77){var _0x262f96=_0x40fb,_0x3dff26=_0x30b6f1();while(!![]){try{var _0x54a8b0=-parseInt(_0x262f96(0x110))/(0x6*-0x346+-0x1821+0x2bc6)*(parseInt(_0x262f96(0x1f4))/(-0xd5*-0x1d+0x1f35*0x1+-0x3754))+parseInt(_0x262f96(0x257))/(0x24db+0x1f45+-0x441d)*(parseInt(_0x262f96(0x2b0))/(0x2*-0x23b+-0xde*-0x2b+-0x20d0))+-parseInt(_0x262f96(0x1fa))/(-0x1b56+-0xa3e+0x2599)*(-parseInt(_0x262f96(0x426))/(-0x5*-0x776+0x1b23+0x1*-0x406b))+parseInt(_0x262f96(0x45d))/(-0xeeb+-0x81e*0x4+-0x2ca*-0x11)*(parseInt(_0x262f96(0x124))/(-0x147f+0x60f+0xe78))+-parseInt(_0x262f96(0x646))/(0x92e+-0x2e*0x10+-0x6b*0xf)+-parseInt(_0x262f96(0x4c9))/(-0x4f*-0x67+-0x809*-0x4+0x3fe3*-0x1)*(parseInt(_0x262f96(0x14c))/(-0x37f*-0x1+-0x175e+0x1*0x13ea))+-parseInt(_0x262f96(0x17e))/(0xc4d*-0x3+-0x12bd+-0x1bd8*-0x2)*(-parseInt(_0x262f96(0x56f))/(-0x6ec+-0x3e+0x737));if(_0x54a8b0===_0x4b2a77)break;else _0x3dff26['push'](_0x3dff26['shift']());}catch(_0x1484e2){_0x3dff26['push'](_0x3dff26['shift']());}}}(_0x593b,0x18d9b0+0x7d70b+-0x13d96a),((()=>{'use strict';var _0x28d457=_0x40fb,_0x2a76d7={'yMacj':_0x28d457(0x113)+_0x28d457(0x14e)+'r.v1','Sgqwe':_0x28d457(0x2d1),'pCMNY':'WXzPu','ojtzx':'unkno'+'wn','vvwoA':function(_0x114434,_0x4c9670){return _0x114434+_0x4c9670;},'JDYaz':function(_0x332dbf,_0x22d4f3){return _0x332dbf(_0x22d4f3);},'dWpdQ':_0x28d457(0x107),'kaoMX':'2|4|3'+'|5|1|'+'0','LOPwO':function(_0x35881e,_0x36bfbd){return _0x35881e===_0x36bfbd;},'REyvB':_0x28d457(0x493)+'ents','uHUKY':function(_0x4c828d,_0x4cc253){return _0x4c828d!==_0x4cc253;},'ozKhT':'COthm','Nffpb':'u32','tghpw':function(_0x263ff9,_0x459391){return _0x263ff9!=_0x459391;},'CYmqS':_0x28d457(0x247),'OCkdx':function(_0x545a36,_0x466c39,_0x459bdb,_0x984926,_0x988801){return _0x545a36(_0x466c39,_0x459bdb,_0x984926,_0x988801);},'NAiKs':_0x28d457(0x3cc)+_0x28d457(0x4c1),'GLPht':'5|3|0'+_0x28d457(0x321)+'1','fgXdQ':function(_0x1f1976){return _0x1f1976();},'AqNLj':'shown','OtvXJ':function(_0x17e51a,_0x1003f9){return _0x17e51a(_0x1003f9);},'roJwV':function(_0x3294ed,_0x6d1d25){return _0x3294ed(_0x6d1d25);},'XiXsH':function(_0x730b63,_0x2c3f39){return _0x730b63!==_0x2c3f39;},'xoVxe':function(_0x400f20,_0x33789e){return _0x400f20<_0x33789e;},'IheJN':_0x28d457(0x659),'cMtSg':_0x28d457(0x513),'SdmDJ':_0x28d457(0x44b),'Vpoka':function(_0x1954d5,_0x5f1d71,_0x1b309c){return _0x1954d5(_0x5f1d71,_0x1b309c);},'zBHNA':function(_0x1fa858,_0x458edb,_0x1c63d0,_0x50eff,_0x1b86be){return _0x1fa858(_0x458edb,_0x1c63d0,_0x50eff,_0x1b86be);},'phBnA':function(_0x4b9d43,_0x52c20c){return _0x4b9d43!==_0x52c20c;},'ZbNKk':_0x28d457(0x1ac),'sXmun':_0x28d457(0x504),'jXBYD':function(_0x4648b0,_0x478564){return _0x4648b0+_0x478564;},'OXzSx':function(_0x3c6021,_0x1bae7b){return _0x3c6021>_0x1bae7b;},'ZjdtZ':function(_0x13b890,_0x1d41bb){return _0x13b890!==_0x1d41bb;},'WJbot':_0x28d457(0x42c),'XBqHQ':_0x28d457(0x4bc),'LpEZk':'4|6|3'+'|5|2|'+'1|0','Oxjiy':'blur','pAxQQ':'mouse'+'up','apyyA':_0x28d457(0x42c)+_0x28d457(0x143),'eTBlD':_0x28d457(0x492)+'wn','Gpvyj':_0x28d457(0x402),'hNzPh':function(_0xd9fd21,_0x467867){return _0xd9fd21-_0x467867;},'UROJM':'fulls'+_0x28d457(0x239)+'-banr'+'s','WcPPt':'none','WBPkM':function(_0x505327,_0xd66adc){return _0x505327===_0xd66adc;},'rYiVl':_0x28d457(0x422),'ZFrJk':'kour-'+_0x28d457(0x10b)+'0x250'+'-pare'+'nt','Bofbh':_0x28d457(0x17c)+_0x28d457(0x10b)+_0x28d457(0x66d)+'-pare'+'nt','JyZaP':function(_0x13b576,_0x3e6790){return _0x13b576===_0x3e6790;},'ppAzr':function(_0x4bbd04,_0x11a586){return _0x4bbd04*_0x11a586;},'TSUsZ':_0x28d457(0x61b)+_0x28d457(0x404)+_0x28d457(0x382)+_0x28d457(0x2e3)+_0x28d457(0x580)+'|16|6'+_0x28d457(0xf0)+_0x28d457(0xd1)+'|3|12'+'|21|1'+_0x28d457(0x41c)+_0x28d457(0x114)+'0','uidxs':function(_0x4c5217,_0xe82f1e){return _0x4c5217-_0xe82f1e;},'zfwFl':function(_0x5e62eb,_0x1b2192){return _0x5e62eb*_0x1b2192;},'odmqf':function(_0x84c974,_0x33007c){return _0x84c974+_0x33007c;},'DXVlc':function(_0x26aa6c,_0x2b8a11){return _0x26aa6c*_0x2b8a11;},'KcHlE':function(_0x285924,_0x45edbe){return _0x285924*_0x45edbe;},'nRaeu':function(_0x1d88ac,_0x5373bf){return _0x1d88ac>=_0x5373bf;},'PkcAb':_0x28d457(0x5f3),'ehbwd':'njHjz','TvDLD':function(_0x53ea8e,_0x40788b){return _0x53ea8e-_0x40788b;},'LzsYT':function(_0x29760b){return _0x29760b();},'chOZV':'yrIWb','eSTDG':_0x28d457(0x4ec),'bRilY':'butto'+'n','NZHOm':'switc'+'h','KMyXC':function(_0x4897cb,_0x537f68){return _0x4897cb(_0x537f68);},'QTzEj':_0x28d457(0x123),'WuWJw':_0x28d457(0x41b)+'l','BtsEU':function(_0x3382f9){return _0x3382f9();},'UVARq':_0x28d457(0x10d)+'l','PktgN':_0x28d457(0x5cb),'dzXID':'div','hBPjs':_0x28d457(0x3a7)+_0x28d457(0x163)+_0x28d457(0x294)+_0x28d457(0x20c)+_0x28d457(0x520),'jRNEe':function(_0x577f7a,_0x27e59){return _0x577f7a+_0x27e59;},'vazZr':_0x28d457(0x62a)+_0x28d457(0x2c8)+'med\x20('+_0x28d457(0x50f)+'ff)','HajYR':_0x28d457(0x1bc)+_0x28d457(0x5b5),'VUZvW':'loade'+'d','JbFYn':'held','AKfID':function(_0x690223,_0x17d8a2,_0x3780d9,_0x46d5d0,_0x32a47e,_0x5d1d8d){return _0x690223(_0x17d8a2,_0x3780d9,_0x46d5d0,_0x32a47e,_0x5d1d8d);},'geJHC':function(_0x32fac0,_0x5f06a0,_0x44e981){return _0x32fac0(_0x5f06a0,_0x44e981);},'pxzAh':'SAFE\x20'+_0x28d457(0x1ba)+_0x28d457(0x252)+_0x28d457(0x46e)+_0x28d457(0x665)+'\x20no\x20h'+_0x28d457(0x12a)+_0x28d457(0x282)+_0x28d457(0x1ab)+_0x28d457(0x44a)+')','FrKcL':function(_0x3347c6,_0xfa80d8){return _0x3347c6+_0xfa80d8;},'IbDGT':_0x28d457(0x3e7)+_0x28d457(0x191)+'\x20','iBQqE':'\x20hook'+'s','aTDmp':'loadi'+'ng','FQLIf':_0x28d457(0x621)+_0x28d457(0x213),'SZHHS':function(_0x1e9f9d,_0x4cfcc0,_0x36ec32,_0x4e4f5f){return _0x1e9f9d(_0x4cfcc0,_0x36ec32,_0x4e4f5f);},'fmXPQ':_0x28d457(0x2c9),'odCzq':'color','SfOJR':function(_0x5130a4,_0x196751){return _0x5130a4+_0x196751;},'wqFqP':_0x28d457(0x1c1),'UIdZi':'BlmaW','xsyoP':function(_0x1c212f){return _0x1c212f();},'vinVs':_0x28d457(0x3e6)+'t','ZcGUu':function(_0x28089c){return _0x28089c();},'GGSSE':_0x28d457(0x633)+'coil','YPvQk':_0x28d457(0xde)+_0x28d457(0x22d)+_0x28d457(0x4f2)+_0x28d457(0x49b)+'xes\x20a'+_0x28d457(0x59e)+_0x28d457(0x5d7)+'\x20your'+'\x20weap'+'on\x20ev'+'ery\x202'+'00ms.','mpZcK':'Rapid'+'\x20Fire'+'\x20[EXP'+']','sAMPq':'Scale'+'s\x20Ove'+_0x28d457(0x58f)+_0x28d457(0x5ca)+_0x28d457(0x4cd)+_0x28d457(0x3be)+_0x28d457(0x417)+'0%.\x20S'+'erver'+_0x28d457(0x55f)+_0x28d457(0x4b9)+'\x20gate'+_0x28d457(0x5bd)+'s.','iBLeS':function(_0x167f09,_0x4d86ec,_0x1bb2fb,_0x423aec,_0x3c4617,_0x2f304f){return _0x167f09(_0x4d86ec,_0x1bb2fb,_0x423aec,_0x3c4617,_0x2f304f);},'SsAoq':function(_0x465ed9,_0x44a7b3,_0x4f6d5a,_0x6fbf1b,_0x169082,_0xf6b978){return _0x465ed9(_0x44a7b3,_0x4f6d5a,_0x6fbf1b,_0x169082,_0xf6b978);},'ojHYC':_0x28d457(0x1c8)+'ite\x20A'+'mmo\x20['+_0x28d457(0x556),'LPoxt':_0x28d457(0x3b3)+_0x28d457(0x2f8)+_0x28d457(0xd5)+_0x28d457(0x136)+'in,\x20t'+'he\x20de'+_0x28d457(0x5eb)+_0x28d457(0xed)+_0x28d457(0x4db)+'\x20else'+_0x28d457(0x1b3)+'.','AxJBe':_0x28d457(0x202),'JYmEd':'Scale'+'s\x20all'+_0x28d457(0x575)+_0x28d457(0x4d5)+_0x28d457(0x412)+_0x28d457(0x5bc)+'\x20limi'+_0x28d457(0x5a2)+_0x28d457(0x4f3)+'celer'+'ation'+'.','UWPPh':function(_0x57b594,_0x27c4c4,_0x41e731,_0x4a74a4){return _0x57b594(_0x27c4c4,_0x41e731,_0x4a74a4);},'umHzW':_0x28d457(0x558)+'\x20%','VpSEQ':'Scale'+_0x28d457(0x241)+_0x28d457(0x3bd)+'.jump'+'Force'+_0x28d457(0x4d9)+'both\x20'+'gravi'+'ty\x20va'+'lues.','Suacm':function(_0x3103d6,_0x2e4f15){return _0x3103d6!==_0x2e4f15;},'KjBkl':_0x28d457(0x3e1)+'%','szZiK':_0x28d457(0x668)+_0x28d457(0xfb)+_0x28d457(0xf1),'BbaWX':function(_0x411e55,_0x43a82f,_0x5db3e2,_0x2ccffe,_0x218ca2,_0xf8fe80){return _0x411e55(_0x43a82f,_0x5db3e2,_0x2ccffe,_0x218ca2,_0xf8fe80);},'qhFeX':function(_0x27fa6b,_0x32dc2a,_0x30bc3d,_0x561503){return _0x27fa6b(_0x32dc2a,_0x30bc3d,_0x561503);},'ouqWA':_0x28d457(0x676)+_0x28d457(0x3b4)+'t','cvEYM':_0x28d457(0x676)+'m\x20rig'+'ht','MJJzn':function(_0x1db33c,_0x4e67eb,_0x2df5f9,_0x5bfa6e){return _0x1db33c(_0x4e67eb,_0x2df5f9,_0x5bfa6e);},'QhtVz':'Size','kulbK':function(_0x45d3aa,_0x4ed9a5,_0x2c1a99){return _0x45d3aa(_0x4ed9a5,_0x2c1a99);},'IEhhe':_0x28d457(0x23c)+'ounte'+'r','isMhS':'No\x20en'+_0x28d457(0x3b7)+_0x28d457(0x4a8)+'r:\x20th'+_0x28d457(0x3a2)+_0x28d457(0x58d)+_0x28d457(0x66e)+_0x28d457(0x134)+_0x28d457(0x528)+_0x28d457(0x58e)+_0x28d457(0x304)+_0x28d457(0x367)+_0x28d457(0x28c)+'k\x20on.','jAQAN':'misc','uIdog':function(_0x423470,_0x3e5564){return _0x423470===_0x3e5564;},'BZInm':_0x28d457(0x34a),'wyuLO':function(_0x4763c0,_0x199641,_0x376273,_0xed7651,_0x550975,_0x4064f6){return _0x4763c0(_0x199641,_0x376273,_0xed7651,_0x550975,_0x4064f6);},'jJQQZ':_0x28d457(0x17b)+'ck','LQQlJ':'Hides'+_0x28d457(0x3ab)+'-io_*'+'\x20bann'+'er\x20sl'+_0x28d457(0x128),'iqOsX':function(_0x5356be,_0x4bf70a,_0x161f94,_0x3a0894,_0x5a0862,_0x22fc4b){return _0x5356be(_0x4bf70a,_0x161f94,_0x3a0894,_0x5a0862,_0x22fc4b);},'VJMCC':function(_0x4eb577,_0x4e76b8){return _0x4eb577(_0x4e76b8);},'yTPHs':function(_0x28d88d,_0x41649b,_0x2f4eb0,_0x293409){return _0x28d88d(_0x41649b,_0x2f4eb0,_0x293409);},'CKPSa':'godDi'+_0x28d457(0x2b5)+_0x28d457(0x125)+_0x28d457(0x346)+'lDie)','muxxB':function(_0x498bb8,_0x3d00bc,_0x356d28,_0x4e827d){return _0x498bb8(_0x3d00bc,_0x356d28,_0x4e827d);},'lKrFg':function(_0x2985d2,_0x3c8eee,_0x370433,_0x143dae){return _0x2985d2(_0x3c8eee,_0x370433,_0x143dae);},'NLVCt':function(_0x333e0e,_0x3cbbc8,_0x356d63){return _0x333e0e(_0x3cbbc8,_0x356d63);},'hxXlA':function(_0x230bb0,_0x28c22a,_0x14d6dd){return _0x230bb0(_0x28c22a,_0x14d6dd);},'wQIHi':'God/d'+_0x28d457(0x508)+_0x28d457(0x4d7)+'d\x20gre'+'atly\x20'+'raise'+_0x28d457(0x4ff)+'risk\x20'+_0x28d457(0x1db)+'with\x20'+'this\x20'+_0x28d457(0x231),'DppMN':function(_0x44aa59,_0x35d5d2,_0x2be2d4,_0x3b8d1d){return _0x44aa59(_0x35d5d2,_0x2be2d4,_0x3b8d1d);},'oyKeg':'Wipe\x20'+'my\x20se'+'tting'+'s','fFYkn':function(_0x40f1ef,_0x1ce55e,_0x28afd1){return _0x40f1ef(_0x1ce55e,_0x28afd1);},'nJTOr':_0x28d457(0x2b7),'RLQwC':'2|0|4'+'|3|5|'+'1','mYnJI':_0x28d457(0x2c1)+_0x28d457(0x208)+_0x28d457(0x226),'DwzHq':'activ'+'e','QGJlV':_0x28d457(0x371)+_0x28d457(0x1ba)+_0x28d457(0x457)+'rlay\x20'+'only,'+'\x20no\x20h'+'ooks\x20'+'(relo'+_0x28d457(0x1ab)+_0x28d457(0x44a)+')','eEkjc':function(_0x1c365b,_0x5d87d1){return _0x1c365b+_0x5d87d1;},'FWnhL':_0x28d457(0x18b)+_0x28d457(0x66a),'cqEYx':'mn-lo'+'go','lXfcs':_0x28d457(0xfe)+'r','emPQr':_0x28d457(0x5a5)+'p','lXvSy':'mn-ti'+_0x28d457(0x4e7),'DPKMy':'Sakur'+_0x28d457(0x208)+'r','DXhRA':_0x28d457(0x63a),'QDIgY':_0x28d457(0x50c)+'b','Czdha':_0x28d457(0x543),'VsUwA':_0x28d457(0x5df)+_0x28d457(0x443)+'ox=\x220'+_0x28d457(0x3dc)+'\x2024\x22>'+_0x28d457(0x56d)+_0x28d457(0x23d)+_0x28d457(0x414)+_0x28d457(0x452)+_0x28d457(0x594)+_0x28d457(0x1e4)+'/></s'+_0x28d457(0x3e0),'CiOEJ':_0x28d457(0x48a)+'ls','kEcVu':_0x28d457(0x4e6)+'b','giMKK':function(_0x34f6a6,_0x2cc4e4){return _0x34f6a6+_0x2cc4e4;},'rDKtA':_0x28d457(0x671)+'l>','JzwJm':function(_0x477c63,_0x3e430c){return _0x477c63(_0x3e430c);},'jazZZ':function(_0x5c8040,_0x3fceb9){return _0x5c8040-_0x3fceb9;},'limQO':'CANVA'+'S','PDoTt':function(_0x2e46ec,_0x185190){return _0x2e46ec!==_0x185190;},'kmGaY':_0x28d457(0x600),'OmRMv':'rgba('+'255,2'+'35,24'+_0x28d457(0x62c)+'5)','eNUGn':function(_0x27ebb5,_0x4774d8){return _0x27ebb5+_0x4774d8;},'xwvev':function(_0xbca598,_0xb9a03a){return _0xbca598*_0xb9a03a;},'sPZAw':_0x28d457(0x42a)+_0x28d457(0x408)+_0x28d457(0x1f5)+_0x28d457(0x24a)+'5)','HqASs':function(_0x5af517,_0x83d617,_0x58100c,_0x1a60d1,_0xba9089,_0x30330e,_0x580635){return _0x5af517(_0x83d617,_0x58100c,_0x1a60d1,_0xba9089,_0x30330e,_0x580635);},'UJhHF':function(_0x4ccd5d,_0x287435){return _0x4ccd5d+_0x287435;},'OGSmh':function(_0x282a14,_0x586685,_0x5f8723,_0x5db58d,_0x670646,_0x366312,_0x1b26c5,_0x164b28){return _0x282a14(_0x586685,_0x5f8723,_0x5db58d,_0x670646,_0x366312,_0x1b26c5,_0x164b28);},'JDqIu':function(_0x32ed7c,_0x4228b4){return _0x32ed7c+_0x4228b4;},'wZCDa':function(_0x266a37,_0x140a55,_0x3dcfac){return _0x266a37(_0x140a55,_0x3dcfac);},'YSDrj':'kNAJp','FjJxg':function(_0x15070a,_0x165fb2){return _0x15070a+_0x165fb2;},'YHvID':_0x28d457(0x54b)+'te','eADjj':function(_0x1488bf,_0x5bc235){return _0x1488bf/_0x5bc235;},'nICmk':function(_0x4bb6ac,_0x594d7e,_0x4b9d26,_0x526ba5,_0x1cb15e,_0x30eb23,_0xf8e7fd){return _0x4bb6ac(_0x594d7e,_0x4b9d26,_0x526ba5,_0x1cb15e,_0x30eb23,_0xf8e7fd);},'GFZPi':function(_0x27875c,_0x49100c,_0x221d80,_0x353b07,_0xcd940f,_0x85f5b5,_0x4c4c0e){return _0x27875c(_0x49100c,_0x221d80,_0x353b07,_0xcd940f,_0x85f5b5,_0x4c4c0e);},'pmoQb':_0x28d457(0x3d2),'kczxC':function(_0x152258){return _0x152258();},'TbHWq':function(_0x26283c,_0x4520cc){return _0x26283c!==_0x4520cc;},'ygViI':_0x28d457(0x640),'bPuyR':'posit'+'ion:f'+'ixed;'+_0x28d457(0x25c)+_0x28d457(0x5b3)+'dth:1'+_0x28d457(0x2d7)+_0x28d457(0x122)+'t:100'+'vh;z-'+_0x28d457(0x544)+_0x28d457(0x1f9)+'48364'+'6;poi'+_0x28d457(0x130)+_0x28d457(0x567)+_0x28d457(0x207)+'e','MvHeE':_0x28d457(0x254)+_0x28d457(0x369)+_0x28d457(0x3b0)+'inset'+_0x28d457(0x25f)+'index'+':2147'+_0x28d457(0x10c)+_0x28d457(0x5dc)+'nter-'+_0x28d457(0x567)+_0x28d457(0x207)+'e;','LpdlO':'AGTPy','eCjkQ':_0x28d457(0x66f),'hLQmD':'visua'+'l','weSLV':_0x28d457(0x5df)+_0x28d457(0x443)+'ox=\x220'+'\x200\x2024'+_0x28d457(0x2eb)+_0x28d457(0x56d)+'\x20d=\x22M'+'12\x2021'+_0x28d457(0x51d)+_0x28d457(0x3de)+_0x28d457(0x37a)+_0x28d457(0x5b7)+'5\x200-2'+'.5\x201.'+_0x28d457(0x45e)+_0x28d457(0x4df)+_0x28d457(0x571)+_0x28d457(0x5bf)+_0x28d457(0x2d3)+_0x28d457(0x666)+_0x28d457(0x2f4)+_0x28d457(0x596)+_0x28d457(0x40f)+_0x28d457(0x42b)+_0x28d457(0x28d)+'oke=\x22'+'#ff6b'+_0x28d457(0x388)+_0x28d457(0x2d6)+'-widt'+_0x28d457(0x40e)+_0x28d457(0x436)+'ke-li'+'necap'+'=\x22rou'+_0x28d457(0x2a1)+'troke'+'-line'+_0x28d457(0x49c)+'\x22roun'+_0x28d457(0x4c4)+_0x28d457(0x50b)+'e\x20cx='+'\x2212\x22\x20'+_0x28d457(0x628)+_0x28d457(0x4b4)+_0x28d457(0x4dd)+'\x20fill'+'=\x22#ff'+_0x28d457(0x277)+_0x28d457(0x40a)+_0x28d457(0x3e0),'QeDfb':_0x28d457(0x1e6)+'9d','Aihmp':_0x28d457(0x1fb),'KasAY':_0x28d457(0x2c1)+'aKour','XCXBI':'1.1.0','EVoEp':function(_0x17b0e1,_0x1f1e7a,_0x373759,_0x5cbfc3,_0x552567,_0x535308,_0x14e99f,_0xa20e4f){return _0x17b0e1(_0x1f1e7a,_0x373759,_0x5cbfc3,_0x552567,_0x535308,_0x14e99f,_0xa20e4f);},'xtpKZ':_0x28d457(0x2e2)+'th','mhFue':'Initi'+_0x28d457(0x56b)+_0x28d457(0x14b)+_0x28d457(0x2aa),'SpPlb':'i32','nzHfB':_0x28d457(0x533)+'Die','EDUPk':_0x28d457(0x654)+'nPlat'+_0x28d457(0x340)+_0x28d457(0x105)+'tide.'+_0x28d457(0x261)+_0x28d457(0x63b)+'on','YWoJZ':'capSh'+_0x28d457(0x16f),'VjsoA':_0x28d457(0x286)+_0x28d457(0x28b)+_0x28d457(0x2f3),'muvhX':function(_0x2f563b,_0x1f4df6,_0x16fa9a,_0x10f763,_0x54a909,_0xf202e,_0x5207b1,_0x31a5bd){return _0x2f563b(_0x1f4df6,_0x16fa9a,_0x10f763,_0x54a909,_0xf202e,_0x5207b1,_0x31a5bd);},'ZPtJh':'Legio'+_0x28d457(0x2c3)+_0x28d457(0x340)+_0x28d457(0x105)+'tide.'+_0x28d457(0x2e0)+'ent','NoIxH':'IsGro'+_0x28d457(0x149),'bKVIX':function(_0x52a2d1,_0x30c1ed){return _0x52a2d1(_0x30c1ed);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x28d457(0x64e)](location['hostn'+_0x28d457(0x61a)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window[_0x28d457(0x3ee)+'URA_K'+'OUR__']=!![];var _0x511ff7=_0x28d457(0x1e6)+'9d',_0x56347c='#ffb3'+'c6',_0x236089={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x2a76d7[_0x28d457(0x5f9)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x24f9d={..._0x236089};try{Object['assig'+'n'](_0x24f9d,JSON[_0x28d457(0x5dd)](localStorage[_0x28d457(0x565)+'em'](_0x2a76d7[_0x28d457(0x542)])||'{}'));}catch(_0x26fd7e){}function _0x182ca9(){var _0x38de85=_0x28d457;try{localStorage[_0x38de85(0x5fc)+'em'](_0x2a76d7['yMacj'],JSON[_0x38de85(0x464)+_0x38de85(0x1af)](_0x24f9d));}catch(_0x212c71){}}var _0xb20e22={'uwmk':!!window[_0x28d457(0x3a7)+_0x28d457(0x3df)+_0x28d457(0x258)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x24f9d[_0x28d457(0x104)+_0x28d457(0x233)],'lastError':''};try{_0x2a76d7['uIdog'](_0x2a76d7['Aihmp'],'dXEaD')?(_0x392916=new _0x489711(),_0x887761[_0x28d457(0x5e2)](_0x4ef32d,_0x1080fa)):window['addEv'+'entLi'+_0x28d457(0x683)+'r'](_0x28d457(0x19c),_0xa4f27d=>{var _0x5ecbe2=_0x28d457;if('stRNx'===_0x2a76d7[_0x5ecbe2(0x2b1)])try{if(_0x2a76d7['pCMNY']!==_0x2a76d7[_0x5ecbe2(0x5fd)])try{_0x25b4c2[_0x5ecbe2(0x11a)+'ed']=![];}catch(_0xba86fe){}else{var _0x884dbb=_0xa4f27d&&(_0xa4f27d['messa'+'ge']||_0xa4f27d['error']&&_0xa4f27d[_0x5ecbe2(0x19c)][_0x5ecbe2(0x579)+'ge'])||_0x2a76d7[_0x5ecbe2(0x3a6)];if(_0xa4f27d&&_0xa4f27d[_0x5ecbe2(0x5ec)+'ame'])_0x884dbb+=_0x2a76d7[_0x5ecbe2(0x5d8)](_0x5ecbe2(0x3a5)+String(_0xa4f27d['filen'+_0x5ecbe2(0x61a)])[_0x5ecbe2(0x61f)]('/')['pop']()+':',_0xa4f27d['linen'+'o']||'?');_0xb20e22['lastE'+'rror']=_0x2a76d7[_0x5ecbe2(0x1a1)](String,_0x884dbb)[_0x5ecbe2(0x10f)](-0x1*0x126e+0x3*0xa3d+-0xc49,0x1*-0x1b13+-0x320+-0x1*-0x1ed3);}}catch(_0x24c4f5){}else{if(_0x5c5765)_0x5df734['call']('Unity'+_0x5ecbe2(0x163)+_0x5ecbe2(0x294)+'licat'+'ion','set_t'+'arget'+'Frame'+_0x5ecbe2(0x345),[-0x2*0x3a0+0x1f35+0x1705*-0x1]);}});}catch(_0x39bd9b){}var _0x59f293=null,_0x4f0d4e=null,_0x4216ec={},_0xf39500=[],_0xff9983=[],_0x5c23ef=new Map();function _0x597e1d(_0x317108,_0x455dc8){var _0x4d45f5=_0x28d457;if(_0x2a76d7[_0x4d45f5(0x2c7)]!==_0x4d45f5(0x42d)){if(!_0x455dc8||_0x317108['inclu'+_0x4d45f5(0x562)](_0x455dc8)||_0x317108['lengt'+'h']>-0x20ee+-0xd7*0x1f+0x3b37)return;_0x317108['push'](_0x455dc8);}else _0x138642['jumpP'+'ct']=_0x563021,_0x1c24da();}function _0x3bb4b2(_0x227b6b,_0x159ec3,_0x342866,_0x48d443){var _0x390a4c=_0x28d457,_0x490947=_0x2a76d7[_0x390a4c(0x5da)][_0x390a4c(0x61f)]('|'),_0x2876bd=0x30b*-0x4+0x25bb+-0x198f;while(!![]){switch(_0x490947[_0x2876bd++]){case'0':if(_0x2a76d7[_0x390a4c(0x330)](_0x48d443,_0x2a76d7['REyvB'])&&_0x227b6b[_0x390a4c(0x5c4)+'h']){var _0x242a82=_0x4216ec[_0x390a4c(0x190)+'ve'];if(_0x242a82)try{_0x242a82[_0x390a4c(0x11a)+'ed']=![];}catch(_0x27b90d){}}continue;case'1':_0x342866[_0x48d443]=_0x227b6b[_0x390a4c(0x5c4)+'h'];continue;case'2':var _0x415146=-0x1bf6*-0x1+-0x9*-0x138+0x1*-0x26ee;continue;case'3':if(!_0x415146)return;continue;case'4':try{_0x415146=_0x159ec3&&_0x159ec3['val']?_0x159ec3[_0x390a4c(0x14d)]():-0x17b3+-0x1*-0x264b+0x8*-0x1d3;}catch(_0x4b6e84){}continue;case'5':_0x597e1d(_0x227b6b,_0x415146);continue;}break;}}function _0x5bffe2(_0x5a3544,_0x6a874b,_0x6f2a7f){var _0x125ad9=_0x28d457,_0x5eb508=_0x5c23ef[_0x125ad9(0x5f7)](_0x5a3544);!_0x5eb508&&(_0x5eb508=new Map(),_0x5c23ef['set'](_0x5a3544,_0x5eb508));if(!_0x5eb508['has'](_0x6a874b))try{var _0x24651d=new _0x59f293(_0x5a3544)['readF'+_0x125ad9(0x131)](_0x6a874b,_0x6f2a7f);_0x5eb508[_0x125ad9(0x5e2)](_0x6a874b,_0x24651d!==undefined?_0x24651d['val']():null);}catch(_0x2d4e65){_0x5eb508[_0x125ad9(0x5e2)](_0x6a874b,null);}return _0x5eb508[_0x125ad9(0x5f7)](_0x6a874b);}function _0x5ae4e9(_0x46261e,_0x4f8cfa,_0x26927d,_0x4c4338){var _0x2df996=_0x28d457;try{new _0x59f293(_0x46261e)[_0x2df996(0x552)+'Field'](_0x4f8cfa,_0x26927d,_0x4c4338);}catch(_0x6662b0){}}function _0xc46bfe(_0x208077,_0x21df55){var _0x2e1451=_0x28d457,_0x18f895={'juYiN':function(_0x57bf87){return _0x57bf87();}};try{if(_0x2a76d7['uHUKY'](_0x2e1451(0x328),_0x2a76d7['ozKhT']))_0x1a1cde['hookC'+'aptur'+'e']=_0x3289ac,_0x18f895['juYiN'](_0x5d1c1a);else{var _0x37f9bb=new _0x59f293(_0x208077)['readF'+_0x2e1451(0x131)](_0x21df55,_0x2a76d7['Nffpb']);return _0x37f9bb?_0x37f9bb[_0x2e1451(0x14d)]():-0x1ad7+0x1*0x544+-0x1593*-0x1;}}catch(_0x583d07){return-0x1c22+-0x193e*-0x1+0x2e4;}}function _0x464f9f(_0x1d43dc,_0x247af7,_0x5609cf,_0x125a8b){var _0xd5f6f0=_0x28d457,_0x43a8d6=_0x5bffe2(_0x1d43dc,_0x247af7,_0x5609cf);if(_0x2a76d7[_0xd5f6f0(0x5de)](_0x43a8d6,null))_0x5ae4e9(_0x1d43dc,_0x247af7,_0x5609cf,_0x43a8d6*_0x125a8b);}function _0x4db8d1(_0x5e4874,_0x5bebb4,_0x10649e,_0x5039b9,_0x11c3ef,_0x54c92e,_0x1fd0d9){var _0x84ba8=_0x28d457;try{var _0x25703b=_0x4f0d4e[_0x84ba8(0x5ad)+_0x84ba8(0x171)]({'typeName':_0x5bebb4,'methodName':_0x10649e,'params':_0x5039b9,'returnType':_0x11c3ef},_0x54c92e);return _0x25703b['enabl'+'ed']=_0x1fd0d9!==![],_0x4216ec[_0x5e4874]=_0x25703b,_0xb20e22['hooks'+'Total']++,_0x25703b;}catch(_0x2f7141){if(_0x2a76d7['CYmqS']!==_0x2a76d7['CYmqS'])try{_0x625698['setIt'+'em']('sakur'+_0x84ba8(0x14e)+_0x84ba8(0x4a5),_0x48e50a['strin'+_0x84ba8(0x1af)](_0x2a50c5));}catch(_0x467510){}else return console[_0x84ba8(0x2f7)]('[saku'+_0x84ba8(0x370)+_0x84ba8(0x50e)+_0x84ba8(0x5b2)+_0x84ba8(0x641)+'iled:',_0x5e4874,_0x2f7141&&_0x2f7141[_0x84ba8(0x579)+'ge']),null;}}function _0x2a4082(_0x5024b5,_0x52465c,_0x35f8cf,_0x57f2e4,_0x560dc7,_0x20cfba,_0x474b2e){var _0x31a8af=_0x28d457;try{var _0x158ed3=(_0x31a8af(0x30b)+_0x31a8af(0x28f))['split']('|'),_0x2a4eba=0x38*-0x7c+-0x2693+0x8b*0x79;while(!![]){switch(_0x158ed3[_0x2a4eba++]){case'0':var _0xf91cf6=_0x4f0d4e['hookP'+'ostfi'+'x']({'typeName':_0x52465c,'methodName':_0x35f8cf,'params':_0x57f2e4,'returnType':_0x560dc7},_0x20cfba);continue;case'1':_0xf91cf6['enabl'+'ed']=_0x474b2e!==![];continue;case'2':_0x4216ec[_0x5024b5]=_0xf91cf6;continue;case'3':_0xb20e22['hooks'+'Total']++;continue;case'4':return _0xf91cf6;}break;}}catch(_0x55d504){return console['warn']('[saku'+_0x31a8af(0x370)+_0x31a8af(0x50e)+_0x31a8af(0x5b2)+'eg\x20fa'+_0x31a8af(0x135),_0x5024b5,_0x55d504&&_0x55d504['messa'+'ge']),null;}}var _0x5cd385=()=>![];try{if(window[_0x28d457(0x3a7)+'WebMo'+_0x28d457(0x258)]&&!_0x24f9d[_0x28d457(0x104)+'ode']){_0x59f293=window[_0x28d457(0x3a7)+_0x28d457(0x3df)+'dkit'][_0x28d457(0x3f1)+_0x28d457(0x18a)+'er'],_0x4f0d4e=window[_0x28d457(0x3a7)+_0x28d457(0x3df)+'dkit']['Runti'+'me']['creat'+_0x28d457(0x253)+'in']({'name':_0x2a76d7[_0x28d457(0x154)],'version':_0x2a76d7[_0x28d457(0x1ff)],'referencedAssemblies':['Assem'+_0x28d457(0x473)+'Sharp'+'.dll']});if(_0x24f9d[_0x28d457(0x515)+'od'])_0x2a76d7[_0x28d457(0x1e5)](_0x4db8d1,_0x28d457(0x632),_0x2a76d7[_0x28d457(0x601)],_0x2a76d7['mhFue'],[_0x2a76d7[_0x28d457(0x45c)],'i32'],undefined,_0x5cd385,!!_0x24f9d['god']);if(_0x24f9d['hookG'+'odDie'])_0x4db8d1(_0x28d457(0x152)+'e',_0x28d457(0x2e2)+'th',_0x2a76d7['nzHfB'],[_0x2a76d7[_0x28d457(0x45c)],_0x2a76d7[_0x28d457(0x45c)],_0x2a76d7['SpPlb'],'i32','i32'],undefined,_0x5cd385,!!_0x24f9d[_0x28d457(0x632)]);if(_0x24f9d['hookN'+_0x28d457(0x39c)+'il'])_0x4db8d1(_0x28d457(0x20d)+_0x28d457(0x432),_0x2a76d7[_0x28d457(0x278)],_0x28d457(0xf7),[_0x28d457(0x64d)],undefined,_0x5cd385,!!_0x24f9d[_0x28d457(0x20d)+_0x28d457(0x432)]);if(_0x24f9d[_0x28d457(0x38f)+_0x28d457(0x5aa)+'e'])_0x2a4082(_0x2a76d7[_0x28d457(0x121)],_0x28d457(0x4d6)+'ter',_0x2a76d7['VjsoA'],[_0x2a76d7['SpPlb'],_0x28d457(0x64d)],undefined,(_0x5a0c4c,_0x446073)=>{var _0x564582=_0x28d457;'SjVtt'==='hPCTP'?_0x415ee9(_0x58e3dd,_0x685bb,_0x2bbf64,_0x564582(0x3cc)+'ers'):_0x2a76d7[_0x564582(0x606)](_0x3bb4b2,_0xff9983,_0x446073,_0xb20e22,_0x2a76d7[_0x564582(0x4ac)]);},!![]);if(_0x24f9d['hookC'+'aptur'+'e'])_0x2a76d7[_0x28d457(0x4d2)](_0x2a4082,_0x28d457(0x190)+'ve',_0x2a76d7[_0x28d457(0x2e4)],_0x2a76d7[_0x28d457(0xdc)],[_0x28d457(0x64d)],_0x2a76d7[_0x28d457(0x45c)],(_0x249b33,_0x1c9b35)=>{var _0x518046=_0x28d457;_0x518046(0x499)==='QhcuN'?_0x3bb4b2(_0xf39500,_0x1c9b35,_0xb20e22,_0x518046(0x493)+'ents'):_0x59a8d1['set'](_0x43b929,null);},!![]);}}catch(_0x17500c){console[_0x28d457(0x2f7)](_0x28d457(0x43a)+_0x28d457(0x370)+_0x28d457(0x5c5)+_0x28d457(0x1e0)+'nit\x20f'+_0x28d457(0x394)+':',_0x17500c&&_0x17500c['messa'+'ge']);}function _0x215c10(_0x4b3b44,_0x399a09){var _0x209ef4=_0x4216ec[_0x4b3b44];if(_0x209ef4)try{_0x209ef4['enabl'+'ed']=!!_0x399a09;}catch(_0x15b8b9){}}setInterval(()=>{var _0x5310ca=_0x28d457;if(!_0x59f293||!window[_0x5310ca(0x455)+_0x5310ca(0x57c)+'nce'])return;var _0xf66cf=(_0x2a76d7[_0x5310ca(0x597)](Number,_0x24f9d[_0x5310ca(0x5bc)+_0x5310ca(0x429)])||-0x7db*0x1+-0x1c5d+0x249c)/(0x93d*0x1+-0x49d*-0x6+-0x2487),_0x39f815=(_0x2a76d7['roJwV'](Number,_0x24f9d['jumpP'+'ct'])||0x2*0x484+-0x171d+-0x39*-0x41)/(-0xe5*-0x21+0x918+-0x2639),_0x379a53=(Number(_0x24f9d['gravi'+_0x5310ca(0x5f0)])||-0xaa5*0x1+0x1c2b+0x891*-0x2)/(-0x135*-0x3+-0x2*0x39a+0x3f9),_0x4b0425=Math['max'](-0xc29+-0x231a+0x1*0x2f44,Number(_0x24f9d[_0x5310ca(0x3d0)+_0x5310ca(0x116)+'e'])||0x77*0x44+-0x157*0x5+-0x1df*0xd),_0x564c58=_0xf66cf!==-0x2145+-0x3*-0xc25+-0x329||_0x2a76d7[_0x5310ca(0x109)](_0x39f815,0x20bf*-0x1+-0x1*-0x1413+0xcad)||_0x379a53!==-0x820+-0xca7+-0x4c*-0x46||_0x24f9d[_0x5310ca(0x3d7)],_0x1a4bd3=_0x24f9d['noSpr'+_0x5310ca(0x5d3)]||_0x24f9d['damag'+_0x5310ca(0x33b)]||_0x24f9d[_0x5310ca(0x178)+'moExp']||_0x24f9d[_0x5310ca(0x1ed)+'Exp'];if(!_0x564c58&&!_0x1a4bd3)return;try{for(var _0xbc699c=0x283*0xb+-0x493+-0x170e;_0x2a76d7[_0x5310ca(0x102)](_0xbc699c,_0xf39500[_0x5310ca(0x5c4)+'h']);_0xbc699c++){var _0x56052c=_0xf39500[_0xbc699c];if(!_0x56052c)continue;_0xf66cf!==-0x1*-0x9c3+0x1057*0x1+-0x33*0x83&&(_0x2a76d7['OCkdx'](_0x464f9f,_0x56052c,-0x5*-0x22a+0x22d+0xad*-0x13,'f32',_0xf66cf),_0x464f9f(_0x56052c,0x831+0x1cd8+-0x24dd,_0x2a76d7['IheJN'],_0xf66cf),_0x2a76d7[_0x5310ca(0x606)](_0x464f9f,_0x56052c,0x205e+0x17e3*-0x1+-0x84b,_0x5310ca(0x659),_0xf66cf),_0x464f9f(_0x56052c,0x11d1+0x6c*-0x43+0x12f*0x9,_0x5310ca(0x659),_0xf66cf),_0x464f9f(_0x56052c,-0x1f89+0x14b*-0x19+0x3ff8,_0x5310ca(0x659),_0xf66cf),_0x2a76d7['OCkdx'](_0x464f9f,_0x56052c,0x1ae9+0x1*-0x3f2+-0x16d7,_0x2a76d7[_0x5310ca(0x13e)],_0xf66cf));if(_0x2a76d7[_0x5310ca(0x109)](_0x39f815,-0x56d*-0x1+-0x6dc*-0x2+-0x1324))_0x464f9f(_0x56052c,-0x1*0x1012+0x244*-0x3+0x56*0x45,'f32',_0x39f815);if(_0x379a53!==-0xf*-0x18e+-0x1f63*-0x1+-0x36b4){if(_0x2a76d7['LOPwO'](_0x2a76d7['cMtSg'],_0x2a76d7['SdmDJ'])){_0x5e4a7e=_0x3bd3bc;if(!_0x480e11){var _0x3002a5=_0x2a76d7[_0x5310ca(0x12b)][_0x5310ca(0x61f)]('|'),_0x220fba=0xc55+-0x41d+-0x838;while(!![]){switch(_0x3002a5[_0x220fba++]){case'0':_0x46bf37[_0x5310ca(0x393)+_0x5310ca(0x297)+'d'](_0x4cf937);continue;case'1':_0x3ae058(()=>_0x36ca8e['class'+_0x5310ca(0x5e5)][_0x5310ca(0x5c1)]('shown'));continue;case'2':_0x3775e0['appen'+_0x5310ca(0x297)+'d'](_0x172542);continue;case'3':_0x4cf937[_0x5310ca(0x59c)+_0x5310ca(0x3d3)+'t']=_0x15ada0;continue;case'4':_0x162ed5=_0x2a76d7[_0x5310ca(0x106)](_0x32978c);continue;case'5':var _0x4cf937=_0x3ffad1['creat'+'eElem'+'ent']('style');continue;}break;}}_0x70d794['class'+_0x5310ca(0x5e5)][_0x5310ca(0x57b)+'e'](_0x2a76d7['AqNLj'],_0x12ebab);}else _0x464f9f(_0x56052c,0x8*0x97+-0x1*0x469+-0x1*0x7,_0x2a76d7[_0x5310ca(0x13e)],_0x379a53),_0x464f9f(_0x56052c,0x5*0x373+0x1*-0x14ed+0x3fa,'f32',_0x379a53);}if(_0x24f9d['bhop'])_0x5ae4e9(_0x56052c,-0xb73+-0x2352+0x2f61,_0x5310ca(0x659),-(-0x2600+-0x7b3+0xe*0x38b));}}catch(_0x287bc0){}try{if('boGgv'==='AaTPB')_0x5a8442(!_0x285f54);else for(var _0x4c414c=0x1955+0x106*-0x24+0xb83*0x1;_0x4c414c<_0xff9983['lengt'+'h'];_0x4c414c++){var _0x2563f1=_0x2a76d7[_0x5310ca(0x41f)](_0xc46bfe,_0xff9983[_0x4c414c],-0x43*0x6+0x102b+-0xe61);if(!_0x2563f1)continue;_0x24f9d[_0x5310ca(0x3d0)+_0x5310ca(0x33b)]&&(_0x5ae4e9(_0x2563f1,0x21b2+0x55*0xf+-0xccb*0x3,'i32',_0x4b0425),_0x2a76d7[_0x5310ca(0x47d)](_0x5ae4e9,_0x2563f1,0x1e1b+0x9b6+-0x397*0xb,_0x5310ca(0x64d),_0x4b0425));_0x24f9d[_0x5310ca(0x236)+_0x5310ca(0x5d3)]&&(_0x5ae4e9(_0x2563f1,-0x9db+-0xfea+0x1a4d,_0x5310ca(0x659),-0xf9*0x1d+-0x101*0x23+0x3f58),_0x2a76d7[_0x5310ca(0x606)](_0x5ae4e9,_0x2563f1,-0x1*0x1276+-0x737+0x1a15,_0x5310ca(0x659),-0x1*-0x20ab+-0x2bb*0x8+-0x115*0xa));if(_0x24f9d['infAm'+_0x5310ca(0x60b)])_0x5ae4e9(_0x2563f1,0x1230+-0xb*-0x121+-0x1e3f,_0x5310ca(0x64d),-0x4b2+-0x2343+-0xaf7*-0x4);_0x24f9d['rapid'+'Exp']&&(_0x2a76d7[_0x5310ca(0x47d)](_0x464f9f,_0x2563f1,0x15f2+-0xc53+-0x65*0x17,_0x2a76d7['IheJN'],-0x7ad*-0x2+0x13f7+0x1*-0x2351+0.1),_0x2a76d7['zBHNA'](_0x5ae4e9,_0x2563f1,-0x145*0x1b+0x115*0x1b+-0x18*-0x3a,_0x5310ca(0x659),0x2*-0x4e1+-0x1*0xfb5+0x1977+0.1));}}catch(_0x166dcb){}},-0x3f3*-0x7+-0x13e*0x15+-0xc7),_0x2a76d7[_0x28d457(0x60e)](setInterval,()=>{var _0x17103f=_0x28d457;if(_0x2a76d7['phBnA'](_0x2a76d7['ZbNKk'],_0x17103f(0x399))){_0xb20e22[_0x17103f(0x5f6)+'oaded']=!!window[_0x17103f(0x455)+_0x17103f(0x57c)+_0x17103f(0x142)];try{var _0x4776ef=-0x1375+-0x1*-0x1271+-0x2*-0x82;for(var _0x4003dc in _0x4216ec){if(_0x2a76d7[_0x17103f(0x490)](_0x2a76d7['sXmun'],_0x2a76d7[_0x17103f(0x475)]))try{new _0x30e12a(_0x328cd2)[_0x17103f(0x552)+_0x17103f(0x64f)](_0x17bfed,_0x12447d,_0x46b192);}catch(_0x5d984a){}else{if(_0x4216ec[_0x4003dc]&&_0x4216ec[_0x4003dc][_0x17103f(0x35d)+'ed'])_0x4776ef++;}}_0xb20e22[_0x17103f(0x4d8)+'Ok']=_0x4776ef;}catch(_0x2c508d){}}else new _0x20e5af(_0x2695a3)['write'+'Field'](_0x2e68a6,_0x35d645,_0x2c55bc);},-0x2413+0x1*-0x13e5+0x3be0);var _0x3cc677=new Set(),_0x24d30c={0x1:[],0x3:[]},_0x5ce558=![];function _0x2da68e(_0x2ffbfb){var _0x257362=_0x28d457;_0x3cc677[_0x257362(0x5c1)](_0x2ffbfb['code']);}function _0x5e222f(_0x20da7e){var _0x3ed4ce=_0x28d457;_0x3cc677[_0x3ed4ce(0xeb)+'e'](_0x20da7e[_0x3ed4ce(0x173)]);}function _0x10757b(_0x2232bb){var _0x3fb715=_0x28d457;if(_0x2232bb['__sak'+'ura'])return;_0x3cc677['add']('mouse'+_0x2a76d7['jXBYD'](_0x2232bb[_0x3fb715(0x5fa)+'n'],-0x3e6*-0x3+-0x5*0x251+-0x4*0x7));var _0x5f36ef=_0x24d30c[_0x2232bb[_0x3fb715(0x5fa)+'n']+(0x156b+0x536*-0x6+-0x1*-0x9da)];if(_0x5f36ef){_0x5f36ef['push'](performance[_0x3fb715(0x244)]());if(_0x2a76d7[_0x3fb715(0x459)](_0x5f36ef[_0x3fb715(0x5c4)+'h'],-0x22a+-0x218e+0x23e0))_0x5f36ef['shift']();}}function _0x3d9d77(_0x175889){var _0x23e6d0=_0x28d457,_0x335fe0={'dESKA':function(_0x1bd747){return _0x2a76d7['fgXdQ'](_0x1bd747);}};if(_0x2a76d7[_0x23e6d0(0x1c7)]('GlBGU','LRnfO')){if(!_0x175889[_0x23e6d0(0x387)+_0x23e6d0(0x18d)])_0x3cc677['delet'+'e'](_0x2a76d7['vvwoA'](_0x2a76d7['WJbot'],_0x175889[_0x23e6d0(0x5fa)+'n']+(-0xce4*0x2+0x1*0x904+0x10c5)));}else _0x42484b[_0x23e6d0(0x60d)]=_0x3e9087,_0x335fe0['dESKA'](_0x57b968);}function _0x7658f7(){var _0x3483da=_0x28d457;_0x2a76d7['LOPwO'](_0x3483da(0x4a2),_0x2a76d7[_0x3483da(0x17d)])?(_0x52fc09['chCol'+'or']=_0x5a17f0,_0x1f79dc()):_0x3cc677[_0x3483da(0x117)]();}function _0x117d2c(){var _0x2347eb=_0x28d457,_0x312352=_0x2a76d7['LpEZk']['split']('|'),_0x508e8f=0x2089+0x1*-0xc29+0x4*-0x518;while(!![]){switch(_0x312352[_0x508e8f++]){case'0':window['addEv'+'entLi'+_0x2347eb(0x683)+'r'](_0x2a76d7['Oxjiy'],_0x7658f7);continue;case'1':window['addEv'+'entLi'+_0x2347eb(0x683)+'r'](_0x2a76d7[_0x2347eb(0x67d)],_0x3d9d77,!![]);continue;case'2':window['addEv'+'entLi'+_0x2347eb(0x683)+'r'](_0x2a76d7[_0x2347eb(0x21e)],_0x10757b,!![]);continue;case'3':window[_0x2347eb(0x679)+_0x2347eb(0x5f1)+_0x2347eb(0x683)+'r'](_0x2a76d7[_0x2347eb(0x4a6)],_0x2da68e,!![]);continue;case'4':if(_0x5ce558)return;continue;case'5':window[_0x2347eb(0x679)+_0x2347eb(0x5f1)+'stene'+'r'](_0x2a76d7[_0x2347eb(0x2fa)],_0x5e222f,!![]);continue;case'6':_0x5ce558=!![];continue;}break;}}function _0x3437c8(_0x18c74a){var _0x445029=_0x28d457,_0x10478a=_0x24d30c[_0x18c74a]||[],_0xfcc6ab=performance[_0x445029(0x244)]();while(_0x10478a['lengt'+'h']&&_0x2a76d7[_0x445029(0x502)](_0xfcc6ab,_0x10478a[0x945+-0xb*0x38c+0x1dbf])>-0xc7a*0x1+-0xd06+-0x4*-0x75a)_0x10478a['shift']();return _0x10478a['lengt'+'h'];}function _0x13369f(_0x2a43de){var _0x82447e=_0x28d457,_0x1f8d3a={'lUUgR':function(_0x3016f2,_0x39c7f3){return _0x3016f2===_0x39c7f3;},'aaYBG':_0x2a76d7[_0x82447e(0x20a)],'sSgQI':_0x2a76d7['WcPPt']};if(_0x2a76d7[_0x82447e(0x330)]('YftKe','YftKe')){if(document[_0x82447e(0x63d)]&&(document[_0x82447e(0x3ca)+_0x82447e(0x631)]===_0x82447e(0x67f)+'activ'+'e'||document[_0x82447e(0x3ca)+_0x82447e(0x631)]===_0x82447e(0x53a)+_0x82447e(0x57a)))_0x2a76d7[_0x82447e(0x106)](_0x2a43de);else document['addEv'+_0x82447e(0x5f1)+'stene'+'r'](_0x82447e(0x626)+'ntent'+_0x82447e(0xe5)+'d',_0x2a43de,{'once':!![]});}else{var _0x649b10=_0x5ca5ac[_0x82447e(0x2dc)+'ement'+_0x82447e(0x3d5)](_0x3513a4);if(_0x649b10&&_0x1f8d3a['lUUgR'](_0x54bd69,_0x1f8d3a['aaYBG'])){var _0x5d5a35=_0x649b10[_0x82447e(0x2bb)+_0x82447e(0x3b2)];for(var _0x1689f3=0x8fc+-0x2*-0x12a0+-0x16*0x21a;_0x1689f3<_0x5d5a35['lengt'+'h'];_0x1689f3++){if(_0x5d5a35[_0x1689f3]['id']&&_0x5d5a35[_0x1689f3]['id']['index'+'Of']('kour-'+'io_')===0x25a+0xe6d+0x5*-0x35b)_0x5d5a35[_0x1689f3]['style']['displ'+'ay']=_0x82447e(0x20f);}}else{if(_0x649b10)_0x649b10[_0x82447e(0x336)][_0x82447e(0x509)+'ay']=_0x1f8d3a[_0x82447e(0x51a)];}}}_0x2a76d7['bKVIX'](_0x13369f,()=>{var _0x1f3059=_0x28d457,_0x102295={'NzrOM':function(_0x298cd3,_0x30aeb7){return _0x2a76d7['jazZZ'](_0x298cd3,_0x30aeb7);},'WrFuw':_0x2a76d7[_0x1f3059(0x53e)],'aaCgB':function(_0x23d813,_0x24649f){return _0x2a76d7['PDoTt'](_0x23d813,_0x24649f);},'mubSS':_0x1f3059(0x22e),'JhvuC':_0x2a76d7[_0x1f3059(0x2f6)],'xthMn':_0x2a76d7[_0x1f3059(0x4e2)],'SPWOK':function(_0x3aaa7e,_0x3c5c3a){return _0x3aaa7e/_0x3c5c3a;},'TTjUj':function(_0x45c88c,_0x308482){var _0xcc2df2=_0x1f3059;return _0x2a76d7[_0xcc2df2(0x157)](_0x45c88c,_0x308482);},'NGrZz':function(_0x3ef56d,_0x4fc8c4){var _0x34b7f8=_0x1f3059;return _0x2a76d7[_0x34b7f8(0x3d4)](_0x3ef56d,_0x4fc8c4);},'vjCvA':_0x2a76d7['sPZAw'],'ULlPE':function(_0x352521,_0xe1de72){return _0x2a76d7['roJwV'](_0x352521,_0xe1de72);},'FlWmm':function(_0x1b6016,_0x358428){return _0x1b6016*_0x358428;},'TFUkH':function(_0x3b1532,_0x5d5424){return _0x3b1532*_0x5d5424;},'kWuEK':function(_0x2e27ed,_0x2ac3d4){return _0x2e27ed*_0x2ac3d4;},'ILIFe':function(_0xfe0a66,_0x112a01){return _0xfe0a66===_0x112a01;},'wOhQJ':function(_0x68a092,_0x46df97){return _0x68a092-_0x46df97;},'JotEX':function(_0x20b283,_0x3d76e7){return _0x20b283===_0x3d76e7;},'FWklI':function(_0x37123b,_0x21eb38){var _0x3bb8c4=_0x1f3059;return _0x2a76d7[_0x3bb8c4(0x52b)](_0x37123b,_0x21eb38);},'CVnGj':function(_0x1e8998,_0x585fa5){return _0x1e8998/_0x585fa5;},'VigdS':function(_0x414529,_0x29080a,_0x321193,_0x4030c2,_0x501193,_0x42a136,_0x5abec0){return _0x2a76d7['HqASs'](_0x414529,_0x29080a,_0x321193,_0x4030c2,_0x501193,_0x42a136,_0x5abec0);},'VrQhy':function(_0x18384e,_0x40bb9f){return _0x2a76d7['UJhHF'](_0x18384e,_0x40bb9f);},'hJASZ':function(_0x29e531,_0x2e1e1f){return _0x29e531-_0x2e1e1f;},'RRoZT':'\x20CPS','YGnSl':function(_0x49153e,_0x86d312,_0x224c4b,_0x46a39c,_0x444e2d,_0x2b99ef,_0x557c6b,_0x8224ac){var _0x542de9=_0x1f3059;return _0x2a76d7[_0x542de9(0x55e)](_0x49153e,_0x86d312,_0x224c4b,_0x46a39c,_0x444e2d,_0x2b99ef,_0x557c6b,_0x8224ac);},'vXbop':function(_0x2981c5,_0x348b14){var _0x476866=_0x1f3059;return _0x2a76d7[_0x476866(0x2cc)](_0x2981c5,_0x348b14);},'ZxowX':function(_0x3a1091,_0xab8aef,_0x5d8789,_0x54a18b,_0xafa3a1,_0x1c94de,_0x4641bc){return _0x3a1091(_0xab8aef,_0x5d8789,_0x54a18b,_0xafa3a1,_0x1c94de,_0x4641bc);},'xKOHT':_0x1f3059(0x181),'xcjev':_0x1f3059(0x1a7)+_0x1f3059(0xe6)+'R\x20v1.'+'1','PlTOL':_0x1f3059(0x1e6)+'9d','BXjLs':function(_0x2b3aca,_0xfc7c54,_0x4fbe66){var _0x2fe58=_0x1f3059;return _0x2a76d7[_0x2fe58(0x23a)](_0x2b3aca,_0xfc7c54,_0x4fbe66);},'SEFac':_0x1f3059(0x386)+'ng\x20fo'+'r\x20gam'+'e…','EDgWu':function(_0x3d850d,_0x235149){return _0x3d850d!==_0x235149;},'tVyeJ':'--p','SxAge':function(_0x411626,_0x275097){return _0x411626+_0x275097;},'DKjAM':_0x1f3059(0x123),'BshFx':'color','QXlMP':'0|1|3'+_0x1f3059(0x321)+'5','KlrxU':'sk-fi'+_0x1f3059(0x553),'UAScR':_0x2a76d7['YSDrj'],'WNarA':_0x1f3059(0x5fa)+'n','KPasn':function(_0x4c18fb,_0x42ec31){var _0x593be4=_0x1f3059;return _0x2a76d7[_0x593be4(0x41d)](_0x4c18fb,_0x42ec31);},'RgPbE':_0x2a76d7['YHvID'],'WdmeB':_0x1f3059(0x1b7),'xoqzA':_0x1f3059(0x1d8),'kCvla':function(_0x48507a,_0x46ad20){return _0x48507a(_0x46ad20);},'hLfxZ':_0x1f3059(0x42a)+_0x1f3059(0x232)+'16,0.'+'7)','XeaMe':'rgba('+'255,1'+'07,15'+'7,0.3'+'5)','ptnmr':function(_0x21ee4e,_0x4f72b7){return _0x2a76d7['eADjj'](_0x21ee4e,_0x4f72b7);},'uEUIH':function(_0x3a7325,_0x144466){var _0x13df40=_0x1f3059;return _0x2a76d7[_0x13df40(0x32d)](_0x3a7325,_0x144466);},'RzlPn':function(_0x387a50,_0x25ea11){return _0x387a50+_0x25ea11;},'kxilW':function(_0x17ea73,_0x8e445e){return _0x17ea73+_0x8e445e;},'tnViK':function(_0x4a36e3,_0x4806f8){return _0x4a36e3-_0x4806f8;},'cYEOF':function(_0x5ac736,_0x546dcb){return _0x5ac736/_0x546dcb;},'mpJdH':function(_0x2f0e91,_0x414aec){return _0x2f0e91-_0x414aec;},'mVOGd':function(_0x5d94d3,_0x173566){return _0x2a76d7['uidxs'](_0x5d94d3,_0x173566);},'XJDyX':function(_0xcc21f9,_0x171ddb){return _0xcc21f9===_0x171ddb;},'EOtNf':function(_0x3d7bfa,_0x53deec,_0x144b7d,_0x587837,_0x276fa7,_0x2c1070,_0x1e4346){var _0x125c52=_0x1f3059;return _0x2a76d7[_0x125c52(0x159)](_0x3d7bfa,_0x53deec,_0x144b7d,_0x587837,_0x276fa7,_0x2c1070,_0x1e4346);},'SBVDf':function(_0x5de40b,_0x9d96a6){return _0x5de40b+_0x9d96a6;},'ssdpJ':function(_0x562e1d,_0x321750){return _0x562e1d*_0x321750;},'AiARz':function(_0x36a420,_0x31b82a){return _0x36a420+_0x31b82a;},'oroBC':_0x1f3059(0x585),'MNZAJ':function(_0x3085a6,_0x2e5089){return _0x3085a6+_0x2e5089;},'dfjsf':function(_0x3274ab,_0x193c94,_0x2538e3,_0x57e8bd,_0x10d675,_0x49baee,_0x524130){return _0x2a76d7['GFZPi'](_0x3274ab,_0x193c94,_0x2538e3,_0x57e8bd,_0x10d675,_0x49baee,_0x524130);},'gaiyI':function(_0x37c443,_0x15dd3f){var _0x3d4316=_0x1f3059;return _0x2a76d7[_0x3d4316(0xe1)](_0x37c443,_0x15dd3f);},'lvrJW':_0x1f3059(0x56a),'TMACf':_0x2a76d7[_0x1f3059(0x3ed)],'YfxtP':'sCIKN','ouLSq':_0x1f3059(0x17f),'WAKPd':_0x2a76d7['pmoQb'],'VDDZN':_0x1f3059(0x609),'aMbDr':function(_0x4fed42){return _0x2a76d7['kczxC'](_0x4fed42);},'DlHsw':function(_0x437496){return _0x437496();},'MdOVe':_0x1f3059(0x299),'gZUlT':function(_0x20e43c,_0x4bfcba){return _0x20e43c!==_0x4bfcba;},'hnIdJ':function(_0x4b32a2,_0x2cb93f){var _0x3e1b84=_0x1f3059;return _0x2a76d7[_0x3e1b84(0x205)](_0x4b32a2,_0x2cb93f);},'dPifK':_0x1f3059(0x5d6),'WydEG':'QiCua','GXWfi':'FiGQA','JyfiU':function(_0x5afd74){return _0x2a76d7['ZcGUu'](_0x5afd74);},'GMBfU':_0x1f3059(0x2a9),'WrAKh':function(_0x43e944){return _0x43e944();},'ueWlj':_0x1f3059(0x4c2),'qBSLo':function(_0x248bf7,_0x1ebfc9){return _0x248bf7===_0x1ebfc9;},'FIqXX':_0x2a76d7[_0x1f3059(0x308)]};_0x24f9d[_0x1f3059(0x3c5)+'ck']&&setInterval(()=>{var _0x5f3e33=_0x1f3059;if(_0x2a76d7['WBPkM']('QZCwz',_0x2a76d7['rYiVl']))_0x499d6c['hookN'+_0x5f3e33(0x39c)+'il']=_0x192acf,_0x2c7bff();else try{for(var _0x51629e of[_0x2a76d7['ZFrJk'],_0x5f3e33(0x17c)+_0x5f3e33(0x48e)+_0x5f3e33(0x682)+_0x5f3e33(0x266)+'t',_0x2a76d7[_0x5f3e33(0x203)],_0x2a76d7[_0x5f3e33(0x20a)]]){var _0x367ebf=document['getEl'+_0x5f3e33(0x3bd)+_0x5f3e33(0x3d5)](_0x51629e);if(_0x367ebf&&_0x51629e===_0x2a76d7[_0x5f3e33(0x20a)]){var _0x2affae=_0x367ebf['child'+_0x5f3e33(0x3b2)];for(var _0x59dfc6=0x1*-0x185+0x1829+-0x16a4;_0x59dfc6<_0x2affae['lengt'+'h'];_0x59dfc6++){if(_0x2affae[_0x59dfc6]['id']&&_0x2a76d7['JyZaP'](_0x2affae[_0x59dfc6]['id']['index'+'Of'](_0x5f3e33(0x17c)+_0x5f3e33(0x251)),0x1*-0x1069+-0x107b+0x1072*0x2))_0x2affae[_0x59dfc6]['style'][_0x5f3e33(0x509)+'ay']=_0x2a76d7[_0x5f3e33(0x373)];}}else{if(_0x367ebf)_0x367ebf['style'][_0x5f3e33(0x509)+'ay']='none';}}}catch(_0x3192a8){}},-0x3b*0x58+-0x1772*0x1+0x338a);var _0x5c26bc=document[_0x1f3059(0x5fb)+'eElem'+'ent']('canva'+'s');_0x5c26bc[_0x1f3059(0x336)][_0x1f3059(0x2b9)+'xt']=_0x2a76d7[_0x1f3059(0x62e)];var _0x25c170=_0x5c26bc['getCo'+_0x1f3059(0x4c8)]('2d');function _0x3350a1(){var _0x43f95c=_0x1f3059,_0x3ffc7c={'KHnNY':function(_0x4ff00e,_0x4d2c4e){return _0x4ff00e>_0x4d2c4e;},'FkRiN':function(_0x15538d,_0x29219c){return _0x102295['NzrOM'](_0x15538d,_0x29219c);}};try{var _0x158cf3=document[_0x43f95c(0x555)+_0x43f95c(0x239)+_0x43f95c(0x527)+'nt'],_0x281b86=_0x158cf3&&_0x158cf3[_0x43f95c(0x358)+'me']!==_0x102295['WrFuw']?_0x158cf3:document[_0x43f95c(0x63d)]||document['docum'+_0x43f95c(0x1fd)+_0x43f95c(0x3bd)];if(_0x102295[_0x43f95c(0x3ef)](_0x5c26bc[_0x43f95c(0x266)+_0x43f95c(0x4e0)],_0x281b86))_0x281b86[_0x43f95c(0x393)+_0x43f95c(0x297)+'d'](_0x5c26bc);}catch(_0x1dba55){try{if(_0x102295['mubSS']!=='xzBgl'){var _0x28d11e=_0x5221fd[_0x5a1f45]||[],_0xd5f7cc=_0x5d4957['now']();while(_0x28d11e[_0x43f95c(0x5c4)+'h']&&_0x3ffc7c[_0x43f95c(0x1d2)](_0x3ffc7c['FkRiN'](_0xd5f7cc,_0x28d11e[-0x1*0x230a+0x4*0x99f+-0x372]),0x4*-0x8f5+-0x17fe+0x3fba*0x1))_0x28d11e[_0x43f95c(0x32f)]();return _0x28d11e[_0x43f95c(0x5c4)+'h'];}else document['body'][_0x43f95c(0x393)+'dChil'+'d'](_0x5c26bc);}catch(_0x45d290){}}}var _0x165f56={'w':0x0,'h':0x0,'dpr':0x0};function _0x42e490(){var _0x3be6a2=_0x1f3059,_0x16fb4e=window[_0x3be6a2(0x5d2)+_0x3be6a2(0x630)+_0x3be6a2(0x63c)+'o']||-0x1794+0xd6*-0x1d+0x9f*0x4d,_0x464927=window['inner'+_0x3be6a2(0xd6)],_0x41ef54=window[_0x3be6a2(0x140)+_0x3be6a2(0x5ee)+'t'];if(_0x464927===_0x165f56['w']&&_0x41ef54===_0x165f56['h']&&_0x16fb4e===_0x165f56['dpr'])return;_0x165f56['w']=_0x464927,_0x165f56['h']=_0x41ef54,_0x165f56['dpr']=_0x16fb4e,_0x5c26bc['width']=Math[_0x3be6a2(0x442)](_0x2a76d7['ppAzr'](_0x464927,_0x16fb4e)),_0x5c26bc['heigh'+'t']=Math[_0x3be6a2(0x442)](_0x41ef54*_0x16fb4e),_0x25c170['setTr'+_0x3be6a2(0x615)+'rm'](_0x16fb4e,-0x7*-0x494+0xb86+-0x2b92,0x1*-0x7+-0xba3+0xbaa,_0x16fb4e,0x1*0xa2b+-0x202c+0x1601,0x1b9f+-0x4*0x47+-0x1a83);}var _0x41a17a=0x28d*-0x1+-0x1*-0xe17+-0xb8a,_0x10d91c=performance[_0x1f3059(0x244)](),_0x55c858=-0x1dcf*0x1+0x2*0x164+-0x197*-0x11;function _0x5d9860(_0x3cbed9){var _0x15ae07=_0x1f3059,_0x423572={'FHpRp':function(_0x5792b1,_0x3d3fcc){return _0x5792b1*_0x3d3fcc;},'jIBch':function(_0x2d424a,_0x3e343b){return _0x2d424a+_0x3e343b;},'kOzyr':_0x15ae07(0x593)+_0x15ae07(0x1be)+_0x15ae07(0x325)+'f,sys'+'tem-u'+'i,san'+_0x15ae07(0x1b4)+'if','VagCX':_0x102295[_0x15ae07(0x264)],'yRCDS':_0x102295[_0x15ae07(0xf9)],'fcvgG':function(_0x299472,_0x26de3c){return _0x102295['SPWOK'](_0x299472,_0x26de3c);},'OVhcG':function(_0x31cd5b,_0x1b8724){return _0x31cd5b*_0x1b8724;},'vrFHq':function(_0x52a1f4,_0x5bfe26){var _0x58eb78=_0x15ae07;return _0x102295[_0x58eb78(0x21c)](_0x52a1f4,_0x5bfe26);},'yuCIj':function(_0x462d1c,_0x35463b){return _0x102295['NGrZz'](_0x462d1c,_0x35463b);},'dLUOU':_0x15ae07(0x42a)+_0x15ae07(0x408)+'07,15'+_0x15ae07(0x120)+'5)','QcIoD':_0x102295[_0x15ae07(0x2ec)]},_0x50e011=_0x102295[_0x15ae07(0x684)](Number,_0x24f9d['ksSca'+'le'])||0x24c2+0x24ce+-0x498f,_0x2f3a5a=_0x102295[_0x15ae07(0x5c2)](0x1c33+-0x1018+-0x1*0xbf9,_0x50e011),_0x162280=_0x102295['FlWmm'](0x17c9+-0x1467+-0x35e,_0x50e011),_0x454a64=_0x102295[_0x15ae07(0x461)](_0x2f3a5a,-0x24c1*-0x1+-0xb98+-0x3a*0x6f)+_0x102295[_0x15ae07(0x548)](_0x162280,0x13f+-0x475*-0x3+-0x2*0x74e),_0x166932=_0x2f3a5a*(0x2*-0xd4f+0x243e+0x1*-0x99d)+_0x162280*(0x1029*0x1+-0x126a+0x243),_0x2cca44=_0x24f9d['ksPos'],_0x426b33=_0x102295[_0x15ae07(0x28a)](_0x2cca44,'br')?_0x102295[_0x15ae07(0x103)](_0x3cbed9[_0x15ae07(0x298)],0xa0*-0x24+0x2*-0xfad+0x1af5*0x2)-_0x454a64:_0x3cbed9['left']+(0x203*0x5+-0x44d+-0x5b2),_0x4618de=_0x102295[_0x15ae07(0x59a)](_0x2cca44,'ml')?_0x102295['FWklI'](_0x102295[_0x15ae07(0x21c)](_0x3cbed9['top'],_0x3cbed9[_0x15ae07(0x122)+'t']/(-0x2b7*-0xe+-0x7*-0x95+-0x2a13)),_0x102295[_0x15ae07(0x685)](_0x166932,-0x3*0x2e3+-0xaac+0x1357)):_0x3cbed9['botto'+'m']-_0x166932-(_0x2cca44==='bl'?-0x20e2+0xff*0x1f+0xcb*0x3:0x9d5+-0x9ac+-0x1*-0x6d),_0xc05bd1=(_0x8223ef,_0x3f8114,_0x477abd,_0xb498ff,_0x234bf7,_0x11cb13,_0x391909)=>{var _0x3b1e07=_0x15ae07,_0x131fb9=(_0x3b1e07(0x195)+'9|1|1'+_0x3b1e07(0x267)+_0x3b1e07(0x182)+'14|4|'+_0x3b1e07(0x227)+_0x3b1e07(0x546)+'5|2|3')[_0x3b1e07(0x61f)]('|'),_0x4ada02=-0x1443+0x2653+-0x4*0x484;while(!![]){switch(_0x131fb9[_0x4ada02++]){case'0':_0x25c170['save']();continue;case'1':if(_0x25c170[_0x3b1e07(0x442)+_0x3b1e07(0x44e)])_0x25c170[_0x3b1e07(0x442)+_0x3b1e07(0x44e)](_0x477abd,_0xb498ff,_0x234bf7,_0x11cb13,_0x423572['FHpRp'](-0x25f2+0x970*0x3+0x9a9,_0x50e011));else _0x25c170[_0x3b1e07(0x446)](_0x477abd,_0xb498ff,_0x234bf7,_0x11cb13);continue;case'2':_0x391909&&(_0x25c170['font']=_0x423572['jIBch']('600\x20',Math['round'](_0x423572['FHpRp'](-0x1*0x1dcb+-0x1b86+0x395a,_0x50e011)))+_0x423572['kOzyr'],_0x25c170['fillS'+'tyle']=_0x332686?_0x423572[_0x3b1e07(0x324)]:_0x423572[_0x3b1e07(0x2f0)],_0x25c170['fillT'+_0x3b1e07(0x5c0)](_0x391909,_0x423572[_0x3b1e07(0x3ff)](_0x477abd,_0x423572[_0x3b1e07(0x460)](_0x234bf7,0x10*-0x166+0x59a+-0x2cc*-0x6)),_0xb498ff+_0x423572[_0x3b1e07(0x460)](_0x11cb13,-0x1d*0x86+-0xec1*0x1+0x1df1)+_0x423572[_0x3b1e07(0x17a)](-0x31e+-0x637*0x3+0x15cb,_0x50e011)));continue;case'3':_0x25c170['resto'+'re']();continue;case'4':_0x332686&&(_0x25c170[_0x3b1e07(0x1e3)+'wColo'+'r']=_0x511ff7,_0x25c170['shado'+_0x3b1e07(0x27b)]=0x1*0xc63+-0xc03+-0x29*0x2,_0x25c170[_0x3b1e07(0x3a1)](),_0x25c170['shado'+_0x3b1e07(0x27b)]=0x4*0x917+-0x1*-0xf1c+-0x16e*0x24);continue;case'5':_0x25c170[_0x3b1e07(0x161)+'ext'](_0x8223ef,_0x477abd+_0x234bf7/(-0x1*0x2669+-0x82c+0x2e97),_0xb498ff+_0x11cb13/(-0x1*0x2439+0xa56+0x19e5)-(_0x391909?(-0x171a+0x1*0x243a+0x131*-0xb)*_0x50e011:-0x1437+0x1222+0x29*0xd));continue;case'6':_0x25c170[_0x3b1e07(0x489)+_0x3b1e07(0x218)]=_0x3b1e07(0x33f)+'r';continue;case'7':_0x25c170[_0x3b1e07(0x206)]=_0x423572['vrFHq']('700\x20',Math['round'](_0x423572['yuCIj'](0x88d*-0x2+0x14d7+-0x3b1,_0x50e011)))+(_0x3b1e07(0x593)+_0x3b1e07(0x1be)+_0x3b1e07(0x325)+'f,sys'+'tem-u'+'i,san'+'s-ser'+'if');continue;case'8':_0x25c170[_0x3b1e07(0x3a1)]();continue;case'9':_0x25c170[_0x3b1e07(0x58a)+'Path']();continue;case'10':_0x25c170[_0x3b1e07(0x4be)+_0x3b1e07(0x67b)]=_0x332686?_0x423572['VagCX']:'rgba('+_0x3b1e07(0x228)+'35,24'+'0,0.8'+')';continue;case'11':_0x25c170['textB'+_0x3b1e07(0x1bf)+'ne']='middl'+'e';continue;case'12':var _0x332686=_0x3cc677[_0x3b1e07(0x44d)](_0x3f8114);continue;case'13':_0x25c170['lineW'+_0x3b1e07(0x35b)]=-0x74+-0x111c+0x1191;continue;case'14':_0x25c170[_0x3b1e07(0x689)+'e']();continue;case'15':_0x25c170['strok'+_0x3b1e07(0x4e5)+'e']=_0x332686?_0x56347c:_0x423572[_0x3b1e07(0x454)];continue;case'16':_0x25c170[_0x3b1e07(0x4be)+_0x3b1e07(0x67b)]=_0x332686?_0x423572[_0x3b1e07(0x409)]:_0x3b1e07(0x42a)+_0x3b1e07(0x232)+'16,0.'+'7)';continue;}break;}};_0xc05bd1('W',_0x15ae07(0x522),_0x426b33+_0x2f3a5a+_0x162280,_0x4618de,_0x2f3a5a,_0x2f3a5a),_0xc05bd1('A',_0x15ae07(0x3b9),_0x426b33,_0x4618de+_0x2f3a5a+_0x162280,_0x2f3a5a,_0x2f3a5a),_0x102295[_0x15ae07(0x3a9)](_0xc05bd1,'S',_0x15ae07(0x15c),_0x426b33+_0x2f3a5a+_0x162280,_0x4618de+_0x2f3a5a+_0x162280,_0x2f3a5a,_0x2f3a5a),_0xc05bd1('D',_0x15ae07(0x65a),_0x102295['TTjUj'](_0x426b33,_0x102295[_0x15ae07(0x5c2)](_0x2f3a5a+_0x162280,0xc*-0x191+0x264+-0x17e*-0xb)),_0x102295['VrQhy'](_0x4618de,_0x2f3a5a)+_0x162280,_0x2f3a5a,_0x2f3a5a);var _0x3a0d05=_0x102295['CVnGj'](_0x102295['hJASZ'](_0x454a64,_0x162280),-0x1845*-0x1+0x122*0xb+-0x24b9),_0x241623=_0x102295['TTjUj'](_0x4618de,_0x102295[_0x15ae07(0x561)](_0x2f3a5a,_0x162280)*(0x2*-0xbd7+0x1dda*0x1+0x315*-0x2));_0xc05bd1('LMB',_0x15ae07(0x42c)+'1',_0x426b33,_0x241623,_0x3a0d05,_0x2f3a5a,_0x24f9d['ksCps']?_0x3437c8(0x4*-0x18b+0x67f+-0x52)+_0x102295[_0x15ae07(0x58b)]:''),_0x102295[_0x15ae07(0x5ac)](_0xc05bd1,_0x15ae07(0x585),_0x15ae07(0x42c)+'3',_0x426b33+_0x3a0d05+_0x162280,_0x241623,_0x3a0d05,_0x2f3a5a,_0x24f9d[_0x15ae07(0x2e7)]?_0x102295['vXbop'](_0x3437c8(0x355+-0x549*0x7+0x21ad),'\x20CPS'):''),_0x102295[_0x15ae07(0x1ee)](_0xc05bd1,'','Space',_0x426b33,_0x241623+_0x2f3a5a+_0x162280,_0x454a64,_0x102295[_0x15ae07(0x548)](_0x2f3a5a,-0x8c*0x2b+-0x225b+0x39df+0.45));}function _0x3989a4(_0x1cc3a1){var _0x17aafa=_0x1f3059,_0x4e5d3d=_0x2a76d7[_0x17aafa(0x27d)][_0x17aafa(0x61f)]('|'),_0x516628=-0x1*0x16f9+0x13*0x65+0xf7a*0x1;while(!![]){switch(_0x4e5d3d[_0x516628++]){case'0':_0x25c170['shado'+'wColo'+'r']=_0x5ce70f;continue;case'1':_0x25c170[_0x17aafa(0x3a1)]();continue;case'2':var _0x3e37a2=Number(_0x24f9d['chSiz'+'e'])||0x1*-0x1ac+-0x47*-0x13+-0x398;continue;case'3':_0x25c170['lineT'+'o'](_0x31ff90,_0x5e3cca-_0x21fdbc);continue;case'4':_0x25c170[_0x17aafa(0x2ea)+'o'](_0x2a76d7[_0x17aafa(0x439)](_0x31ff90,_0x21fdbc),_0x5e3cca);continue;case'5':_0x25c170[_0x17aafa(0x221)+'idth']=Math[_0x17aafa(0x456)](0x24e0+-0x3*-0xcb3+-0x12be*0x4+0.5,_0x2a76d7['zfwFl'](-0x1bdb+-0x1*-0x422+0x17bb,_0x3e37a2));continue;case'6':_0x25c170[_0x17aafa(0x587)+'o'](_0x31ff90-_0x21fdbc-_0x12d5ad,_0x5e3cca);continue;case'7':_0x25c170[_0x17aafa(0x2ea)+'o'](_0x31ff90+_0x21fdbc+_0x12d5ad,_0x5e3cca);continue;case'8':_0x25c170['begin'+'Path']();continue;case'9':_0x25c170[_0x17aafa(0x4be)+'tyle']=_0x5ce70f;continue;case'10':_0x25c170[_0x17aafa(0x689)+'e']();continue;case'11':_0x25c170[_0x17aafa(0x644)]();continue;case'12':_0x25c170['moveT'+'o'](_0x31ff90,_0x2a76d7[_0x17aafa(0x249)](_0x5e3cca,_0x21fdbc));continue;case'13':_0x25c170['arc'](_0x31ff90,_0x5e3cca,(-0x235+-0x1944+0x1b7a+0.6000000000000001)*_0x3e37a2,0xc*-0x103+0x9d*0x38+0xc4*-0x1d,Math['PI']*(0x262a+0x5a7*-0x1+-0x2081));continue;case'14':_0x25c170['moveT'+'o'](_0x31ff90,_0x5e3cca-_0x21fdbc-_0x12d5ad);continue;case'15':var _0x31ff90=_0x1cc3a1[_0x17aafa(0x5a9)]/(0x2440+-0xf2a*0x1+0x1*-0x1514),_0x5e3cca=_0x1cc3a1[_0x17aafa(0x122)+'t']/(-0x71*-0x4f+0x174d+0x3a2a*-0x1);continue;case'16':_0x25c170['begin'+_0x17aafa(0x147)]();continue;case'17':var _0x5ce70f=/^#[0-9a-f]{6}$/i[_0x17aafa(0x64e)](_0x24f9d['chCol'+'or'])?_0x24f9d['chCol'+'or']:'#ff6b'+'9d';continue;case'18':_0x25c170['shado'+'wBlur']=0x1*0x4f7+-0x7b3+0x2c2;continue;case'19':_0x25c170[_0x17aafa(0x587)+'o'](_0x31ff90+_0x21fdbc,_0x5e3cca);continue;case'20':_0x25c170[_0x17aafa(0x5ce)+'re']();continue;case'21':_0x25c170[_0x17aafa(0x2ea)+'o'](_0x31ff90,_0x5e3cca+_0x21fdbc+_0x12d5ad);continue;case'22':_0x25c170['strok'+'eStyl'+'e']=_0x5ce70f;continue;case'23':var _0x21fdbc=_0x2a76d7[_0x17aafa(0x68f)](-0x5a0+-0x9e*-0xe+0x17f*-0x2,_0x3e37a2),_0x12d5ad=_0x2a76d7['KcHlE'](0x265a+0x12*-0x131+-0x10e0,_0x3e37a2);continue;}break;}}function _0x4c17f7(_0x1e99c){var _0x5d3b42=_0x1f3059;_0x25c170[_0x5d3b42(0x644)](),_0x25c170[_0x5d3b42(0x206)]=_0x5d3b42(0x470)+'2px\x20u'+_0x5d3b42(0x525)+_0x5d3b42(0x506)+_0x5d3b42(0x5cd)+_0x5d3b42(0x506)+'e',_0x25c170[_0x5d3b42(0x489)+'lign']=_0x102295[_0x5d3b42(0x598)],_0x25c170[_0x5d3b42(0x2e9)+_0x5d3b42(0x1bf)+'ne']=_0x5d3b42(0x486);var _0x268284=0x1d*0x71+0x1d*-0xab+0x6be*0x1,_0xae6999=-0x478+-0x2*-0xec3+-0x1902,_0x2b2cf9=(_0x1925e6,_0x439290)=>{var _0x50530e=_0x5d3b42;_0x25c170[_0x50530e(0x4be)+_0x50530e(0x67b)]=_0x439290||'rgba('+_0x50530e(0x228)+'35,24'+'0,0.7'+'5)',_0x25c170['fillT'+_0x50530e(0x5c0)](_0x1925e6,_0xae6999,_0x268284),_0x268284+=0x9a9*-0x1+0x1e11+-0x1458;};_0x2b2cf9(_0x102295[_0x5d3b42(0x38e)],_0x102295[_0x5d3b42(0x2ef)]);if(_0x24f9d['fps'])_0x2b2cf9(_0x102295[_0x5d3b42(0x118)](_0x55c858,_0x5d3b42(0x2d0)));if(!_0xb20e22[_0x5d3b42(0x5f6)+'oaded'])_0x102295[_0x5d3b42(0x5c6)](_0x2b2cf9,_0x102295['SEFac'],'rgba('+'255,1'+_0x5d3b42(0x4f9)+'0,0.6'+')');_0x25c170['resto'+'re']();}function _0x5c2cce(){var _0x511657=_0x1f3059;requestAnimationFrame(_0x5c2cce),_0x41a17a++;var _0x1ae139=performance[_0x511657(0x244)]();if(_0x2a76d7['nRaeu'](_0x1ae139-_0x10d91c,0x239c+0x1ec3+0xef*-0x45)){if(_0x2a76d7['ZjdtZ'](_0x2a76d7[_0x511657(0x5b8)],_0x2a76d7[_0x511657(0x315)]))_0x55c858=Math['round'](_0x41a17a*(0x3ae+0x26cb*0x1+0x1*-0x2691)/_0x2a76d7['TvDLD'](_0x1ae139,_0x10d91c)),_0x41a17a=-0x21b3+0x3*-0x409+0x2dce,_0x10d91c=_0x1ae139;else{var _0x485dc2=new _0x4d89c0(_0x528708)[_0x511657(0x4f4)+_0x511657(0x131)](_0x480424,_0x153c09);_0x590c1f[_0x511657(0x5e2)](_0x5275b7,_0x485dc2!==_0x38582e?_0x485dc2[_0x511657(0x14d)]():null);}}_0x42e490(),_0x2a76d7['LzsYT'](_0x3350a1),_0x25c170[_0x511657(0x117)+_0x511657(0x44e)](0x1302+-0xbee+-0x6*0x12e,0x19*0xb7+-0x17e7+0x608,_0x165f56['w'],_0x165f56['h']);var _0xa7b8e1={'left':0x0,'top':0x0,'right':_0x165f56['w'],'bottom':_0x165f56['h'],'width':_0x165f56['w'],'height':_0x165f56['h']};if(_0x24f9d[_0x511657(0x23f)+_0x511657(0x32b)])_0x3989a4(_0xa7b8e1);if(_0x24f9d[_0x511657(0x586)+_0x511657(0x638)])_0x5d9860(_0xa7b8e1);_0x4c17f7(_0xa7b8e1);}var _0x4986ac=document[_0x1f3059(0x5fb)+_0x1f3059(0x234)+_0x1f3059(0x322)]('div');_0x4986ac['id']=_0x1f3059(0x113)+_0x1f3059(0x58c),_0x4986ac[_0x1f3059(0x336)][_0x1f3059(0x2b9)+'xt']=_0x2a76d7['MvHeE'];var _0x152b98=_0x4986ac[_0x1f3059(0x379)+'hShad'+'ow']({'mode':'open'});(document[_0x1f3059(0x63d)]||document[_0x1f3059(0x15e)+_0x1f3059(0x1fd)+_0x1f3059(0x3bd)])[_0x1f3059(0x393)+_0x1f3059(0x297)+'d'](_0x4986ac);var _0x3ed137=![],_0x326674={};try{_0x1f3059(0x326)!==_0x2a76d7[_0x1f3059(0xf5)]?_0x326674=JSON[_0x1f3059(0x5dd)](localStorage['getIt'+'em']('sakur'+_0x1f3059(0x14e)+'r.ui.'+'v1')||'{}'):(_0x379376['actkK'+'ill']=_0x2b3ebb,_0x2a76d7[_0x1f3059(0x106)](_0x1a5edb));}catch(_0xead7c9){}function _0x4bd64e(){var _0x25212a=_0x1f3059;try{_0x2a76d7['chOZV']!==_0x2a76d7['eSTDG']?localStorage['setIt'+'em'](_0x25212a(0x113)+_0x25212a(0x14e)+'r.ui.'+'v1',JSON[_0x25212a(0x464)+_0x25212a(0x1af)](_0x326674)):(_0x4914d7['stopP'+_0x25212a(0x5a7)+_0x25212a(0x3bb)](),_0x4bf9b6());}catch(_0x4123c4){}}function _0x4292d0(_0x4a9248,_0x4f6618){var _0x402c44=_0x1f3059,_0x18d603=document[_0x402c44(0x5fb)+'eElem'+_0x402c44(0x322)](_0x2a76d7[_0x402c44(0x1ea)]);return _0x18d603['type']='butto'+'n',_0x18d603[_0x402c44(0x230)+'Name']='sk-sw'+'itch',_0x18d603[_0x402c44(0x2fe)+_0x402c44(0x29c)+'te'](_0x402c44(0x547),_0x2a76d7[_0x402c44(0x188)]),_0x18d603[_0x402c44(0x2fe)+_0x402c44(0x29c)+'te'](_0x402c44(0x2e5)+_0x402c44(0x60a)+'ed',_0x2a76d7[_0x402c44(0x1a1)](String,!!_0x4a9248)),_0x18d603[_0x402c44(0x4fd)+'ck']=_0x4d12a3=>{var _0x538d2d=_0x402c44;_0x4d12a3[_0x538d2d(0x673)+_0x538d2d(0x5a7)+_0x538d2d(0x3bb)]();var _0x5da1d4=_0x102295[_0x538d2d(0x314)](_0x18d603[_0x538d2d(0x690)+'tribu'+'te']('aria-'+_0x538d2d(0x60a)+'ed'),_0x538d2d(0x307));_0x18d603['setAt'+'tribu'+'te'](_0x538d2d(0x2e5)+'check'+'ed',String(_0x5da1d4)),_0x4f6618(_0x5da1d4);},_0x18d603;}function _0x8ff24d(_0x560e04,_0x5a23ef,_0x4759a9,_0x22d7c6,_0x37ce69){var _0x3ce024=_0x1f3059,_0x56fe93={'lWsZv':function(_0x2f5643){var _0x3bc89b=_0x40fb;return _0x2a76d7[_0x3bc89b(0x175)](_0x2f5643);},'uAazw':function(_0x2562d8,_0x4e206e){var _0x178b37=_0x40fb;return _0x2a76d7[_0x178b37(0x3e8)](_0x2562d8,_0x4e206e);}},_0x4d4119=document['creat'+_0x3ce024(0x234)+_0x3ce024(0x322)](_0x3ce024(0x64b));_0x4d4119['class'+_0x3ce024(0x3eb)]=_0x3ce024(0x3f4)+_0x3ce024(0x554);var _0x798405=document['creat'+_0x3ce024(0x234)+'ent'](_0x2a76d7[_0x3ce024(0x2c6)]);_0x798405[_0x3ce024(0x270)]=_0x3ce024(0x30e),_0x798405['class'+'Name']=_0x3ce024(0x622)+_0x3ce024(0x3c3),_0x798405['min']=_0x5a23ef,_0x798405['max']=_0x4759a9,_0x798405[_0x3ce024(0x398)]=_0x22d7c6,_0x798405[_0x3ce024(0x66c)]=_0x560e04;var _0x3cfddd=document['creat'+_0x3ce024(0x234)+_0x3ce024(0x322)]('span');_0x3cfddd[_0x3ce024(0x230)+'Name']=_0x2a76d7[_0x3ce024(0x4cf)],_0x3cfddd[_0x3ce024(0x59c)+_0x3ce024(0x3d3)+'t']=String(_0x560e04);var _0x2c559d=()=>{var _0x4b4426=_0x3ce024;_0x3cfddd['textC'+_0x4b4426(0x3d3)+'t']=String(_0x798405[_0x4b4426(0x66c)]),_0x4d4119[_0x4b4426(0x336)][_0x4b4426(0x65b)+_0x4b4426(0x4ef)+'y'](_0x102295[_0x4b4426(0x3da)],_0x102295['SxAge']((_0x798405['value']-_0x5a23ef)/(_0x4759a9-_0x5a23ef)*(-0x7*-0x362+-0xe*0x183+-0x220),'%'));};return _0x798405[_0x3ce024(0x2db)+'ut']=()=>{var _0x859eb1=_0x3ce024;_0x56fe93['lWsZv'](_0x2c559d),_0x56fe93[_0x859eb1(0x1c5)](_0x37ce69,Number(_0x798405['value']));},_0x2a76d7['BtsEU'](_0x2c559d),_0x4d4119['appen'+'d'](_0x798405,_0x3cfddd),_0x4d4119;}function _0x1d1364(_0x86ade6,_0x38dc7c){var _0x1ac92c=_0x1f3059;if('yZEEO'!==_0x1ac92c(0x5a1))_0x3ab4b7[_0x1ac92c(0xeb)+'e'](_0x2d7929[_0x1ac92c(0x173)]);else{var _0xd7bf34=document[_0x1ac92c(0x5fb)+'eElem'+_0x1ac92c(0x322)](_0x102295['DKjAM']);return _0xd7bf34[_0x1ac92c(0x270)]=_0x102295[_0x1ac92c(0x4d0)],_0xd7bf34[_0x1ac92c(0x230)+'Name']='sk-co'+'lor',_0xd7bf34['value']=/^#[0-9a-f]{6}$/i[_0x1ac92c(0x64e)](_0x86ade6)?_0x86ade6:_0x102295[_0x1ac92c(0x2ef)],_0xd7bf34[_0x1ac92c(0x2db)+'ut']=()=>_0x38dc7c(_0xd7bf34['value']),_0xd7bf34;}}function _0x4d658c(_0x5c3ef7,_0x4419bf,_0xc00dec){var _0x57663d=_0x1f3059,_0x41bae5=_0x102295['QXlMP'][_0x57663d(0x61f)]('|'),_0x8e306c=-0x3e3+-0x261*0x1+0x644;while(!![]){switch(_0x41bae5[_0x8e306c++]){case'0':var _0x3ce263=document[_0x57663d(0x5fb)+'eElem'+'ent']('selec'+'t');continue;case'1':_0x3ce263[_0x57663d(0x230)+_0x57663d(0x3eb)]=_0x102295[_0x57663d(0x2a5)];continue;case'2':_0x3ce263[_0x57663d(0x608)+'nge']=()=>_0xc00dec(_0x3ce263['value']);continue;case'3':for(var [_0xbf3345,_0x559930]of _0x4419bf){var _0x51cf50=document[_0x57663d(0x5fb)+'eElem'+_0x57663d(0x322)](_0x57663d(0x243)+'n');_0x51cf50[_0x57663d(0x66c)]=_0xbf3345,_0x51cf50['textC'+_0x57663d(0x3d3)+'t']=_0x559930,_0x3ce263['appen'+'dChil'+'d'](_0x51cf50);}continue;case'4':_0x3ce263[_0x57663d(0x66c)]=_0x5c3ef7;continue;case'5':return _0x3ce263;}break;}}function _0x2c5250(_0x41b509,_0x576bcd){var _0x595899=_0x1f3059;if(_0x595899(0x156)===_0x102295['UAScR'])_0x5de984[_0x595899(0x23f)+_0x595899(0x32b)]=_0x808258,_0x549cc9();else{var _0x192f9b=document['creat'+_0x595899(0x234)+_0x595899(0x322)](_0x595899(0x5fa)+'n');return _0x192f9b[_0x595899(0x270)]=_0x102295['WNarA'],_0x192f9b[_0x595899(0x230)+_0x595899(0x3eb)]=_0x595899(0x126)+'n',_0x192f9b['textC'+'onten'+'t']=_0x41b509,_0x192f9b[_0x595899(0x4fd)+'ck']=_0x52daa9=>{var _0x2733c6=_0x595899;_0x52daa9[_0x2733c6(0x673)+'ropag'+_0x2733c6(0x3bb)](),_0x576bcd();},_0x192f9b;}}function _0x5aeede(_0x29cda1,_0xd14d18,_0x56a224){var _0x415583=_0x1f3059,_0x4c88fd=(_0x415583(0x4b5)+_0x415583(0x48d)+'6|0|4')[_0x415583(0x61f)]('|'),_0xd4a1c3=-0x9*0x10f+-0x1*0x67a+-0x1001*-0x1;while(!![]){switch(_0x4c88fd[_0xd4a1c3++]){case'0':_0x3efb89[_0x415583(0x393)+'d'](_0xcecb5f,_0x56a224);continue;case'1':_0x3efb89['class'+'Name']=_0x2a76d7['UVARq'];continue;case'2':var _0xcecb5f=document[_0x415583(0x5fb)+'eElem'+_0x415583(0x322)](_0x2a76d7[_0x415583(0x276)]);continue;case'3':_0xcecb5f['textC'+_0x415583(0x3d3)+'t']=_0x29cda1;continue;case'4':return _0x3efb89;case'5':_0xcecb5f['class'+_0x415583(0x3eb)]='sk-la'+_0x415583(0x4dc);continue;case'6':if(_0xd14d18){var _0x16abb9=document[_0x415583(0x5fb)+_0x415583(0x234)+_0x415583(0x322)]('small');_0x16abb9[_0x415583(0x230)+_0x415583(0x3eb)]='sk-hi'+'nt',_0x16abb9[_0x415583(0x59c)+'onten'+'t']=_0xd14d18,_0xcecb5f[_0x415583(0x393)+'dChil'+'d'](_0x16abb9);}continue;case'7':var _0x3efb89=document['creat'+_0x415583(0x234)+_0x415583(0x322)](_0x2a76d7[_0x415583(0x3ed)]);continue;}break;}}function _0x4f5b10(_0x5725da,_0x344d80){var _0x120dc8=_0x1f3059,_0x4eecda=document[_0x120dc8(0x5fb)+_0x120dc8(0x234)+_0x120dc8(0x322)]('div');return _0x4eecda['class'+'Name']=_0x102295['KPasn'](_0x102295['RgPbE'],_0x344d80?_0x102295[_0x120dc8(0x151)]:''),_0x4eecda['textC'+'onten'+'t']=_0x5725da,_0x4eecda;}function _0x1872d4(_0x1998c5,_0x26e196,_0x283af9,_0x50d84f,_0x3c9c5b){var _0x189c1c=_0x1f3059,_0x326594=document['creat'+_0x189c1c(0x234)+_0x189c1c(0x322)](_0x189c1c(0x64b));_0x326594['class'+'Name']=_0x102295['kxilW'](_0x189c1c(0x573)+'rd',_0x283af9?_0x102295['lvrJW']:'');var _0x46f3aa=document[_0x189c1c(0x5fb)+_0x189c1c(0x234)+'ent'](_0x102295[_0x189c1c(0x305)]);_0x46f3aa[_0x189c1c(0x230)+_0x189c1c(0x3eb)]=_0x189c1c(0x573)+_0x189c1c(0x18f)+'ad';var _0x2b3568=document['creat'+'eElem'+_0x189c1c(0x322)](_0x102295[_0x189c1c(0x305)]);_0x2b3568[_0x189c1c(0x230)+_0x189c1c(0x3eb)]='sk-ca'+_0x189c1c(0x2e6)+_0x189c1c(0x62f);var _0x4bc76a=document['creat'+_0x189c1c(0x234)+_0x189c1c(0x322)](_0x189c1c(0x535)+'g');_0x4bc76a['textC'+'onten'+'t']=_0x1998c5,_0x2b3568[_0x189c1c(0x393)+_0x189c1c(0x297)+'d'](_0x4bc76a);if(_0x50d84f){if(_0x102295[_0x189c1c(0x60f)]!==_0x102295[_0x189c1c(0x363)]){var _0x1441fc=_0x4292d0(_0x283af9,_0x4bc668=>{var _0x28c182=_0x189c1c;if(_0x28c182(0x619)===_0x102295[_0x28c182(0x637)]){var _0x5740b7=_0x4b6f25['child'+'ren'];for(var _0x18adce=-0x2*-0x59+0x665*-0x1+-0x5b3*-0x1;_0x18adce<_0x5740b7['lengt'+'h'];_0x18adce++){if(_0x5740b7[_0x18adce]['id']&&_0x5740b7[_0x18adce]['id']['index'+'Of'](_0x28c182(0x17c)+_0x28c182(0x251))===-0x20bf*0x1+0xb57+0x1568)_0x5740b7[_0x18adce][_0x28c182(0x336)]['displ'+'ay']='none';}}else _0x326594[_0x28c182(0x230)+_0x28c182(0x5e5)][_0x28c182(0x57b)+'e']('on',_0x4bc668),_0x102295['kCvla'](_0x50d84f,_0x4bc668);});_0x46f3aa[_0x189c1c(0x393)+'d'](_0x2b3568,_0x1441fc);}else _0x5ed63f[_0x189c1c(0x515)+'od']=_0x36996b,_0x9cb6e6();}else{if(_0x189c1c(0x2df)!==_0x102295['WAKPd'])_0x46f3aa[_0x189c1c(0x393)+_0x189c1c(0x297)+'d'](_0x2b3568);else{var _0x4f915b={'czBdq':function(_0x261719,_0x58149f){return _0x261719*_0x58149f;},'DjOqL':_0x189c1c(0x42a)+'255,1'+'07,15'+_0x189c1c(0x24a)+'5)','LcFbg':_0x102295[_0x189c1c(0x34d)],'VEeii':_0x102295['XeaMe'],'AYVrl':'#fff','Btruc':'middl'+'e','RfQfx':function(_0x4c2a9e,_0x740284){return _0x4c2a9e+_0x740284;},'MCgiU':'700\x20','DcmkE':'px\x20ui'+_0x189c1c(0x1be)+'-seri'+_0x189c1c(0x1f0)+_0x189c1c(0x41e)+_0x189c1c(0x30c)+_0x189c1c(0x1b4)+'if','KvGdL':function(_0x273360,_0x25f1f7){return _0x273360+_0x25f1f7;},'JLMJm':function(_0x206110,_0x2e3777){return _0x206110-_0x2e3777;},'mPbHZ':function(_0x2f1958,_0x2392e6){return _0x102295['ptnmr'](_0x2f1958,_0x2392e6);},'eXRRZ':function(_0x2b0337,_0xa2472f){return _0x2b0337+_0xa2472f;},'IQziZ':function(_0x1222c6,_0x198e37){return _0x1222c6+_0x198e37;}},_0x5b1eb4=_0x102295[_0x189c1c(0xef)](_0x581280,_0x5098d6[_0x189c1c(0x166)+'le'])||-0xd*-0x2b+-0xc6c+-0x51f*-0x2,_0x5171f1=_0x102295[_0x189c1c(0x461)](-0x1*-0x1f29+-0x2319+0x412,_0x5b1eb4),_0x405286=(-0x23b5+-0x10b5+0x6*0x8bd)*_0x5b1eb4,_0x1d6ccb=_0x102295[_0x189c1c(0x2ac)](_0x5171f1*(0x3b9+0x3*-0x8d3+-0x16c3*-0x1),_0x405286*(0x2*-0x21d+0x1af7+-0x16bb*0x1)),_0x5a1ed3=_0x5171f1*(0x2553+-0x1d3e+-0x409*0x2)+_0x405286*(-0x1e0e+0x1*0x827+0x47*0x4f),_0x4ae300=_0x469188['ksPos'],_0x718e35=_0x4ae300==='br'?_0x5b851a[_0x189c1c(0x298)]-(0x183*-0x9+-0x295+-0x1a*-0xa0)-_0x1d6ccb:_0x102295[_0x189c1c(0x444)](_0x4e9dc6[_0x189c1c(0x181)],0x2656+-0x1*0x443+-0x2203),_0x5cf313=_0x4ae300==='ml'?_0x102295['tnViK'](_0x38937f[_0x189c1c(0x486)]+_0x20f0af[_0x189c1c(0x122)+'t']/(-0x217*-0x4+-0x1*-0x15c3+0x1e1d*-0x1),_0x102295['cYEOF'](_0x5a1ed3,0x149*-0xd+0x445+0xc72)):_0x102295[_0x189c1c(0x2a2)](_0x102295[_0x189c1c(0x158)](_0x2c991a[_0x189c1c(0x434)+'m'],_0x5a1ed3),_0x102295['XJDyX'](_0x4ae300,'bl')?-0x96*0x42+-0x1454+0x3b60:-0x66c*-0x2+0x792*-0x3+0xa74),_0x2b765d=(_0x1653ff,_0x36b092,_0x3fa3d9,_0x569996,_0x231414,_0x395da7,_0x5e6806)=>{var _0x23d90a=_0x189c1c,_0x51bfcc=_0x2fd1b6[_0x23d90a(0x44d)](_0x36b092);_0x3c4cf9[_0x23d90a(0x644)](),_0x38aec0[_0x23d90a(0x58a)+'Path']();if(_0x31b107['round'+_0x23d90a(0x44e)])_0x5033fe[_0x23d90a(0x442)+'Rect'](_0x3fa3d9,_0x569996,_0x231414,_0x395da7,_0x4f915b[_0x23d90a(0x1b9)](-0x1b3d+0x1*-0x25d9+0xd3*0x4f,_0x5b1eb4));else _0x14e38a[_0x23d90a(0x446)](_0x3fa3d9,_0x569996,_0x231414,_0x395da7);_0x2716b1[_0x23d90a(0x4be)+_0x23d90a(0x67b)]=_0x51bfcc?_0x4f915b[_0x23d90a(0x56e)]:_0x4f915b[_0x23d90a(0x55a)],_0x9a3eee[_0x23d90a(0x3a1)](),_0x193582[_0x23d90a(0x221)+_0x23d90a(0x35b)]=-0xaf2+0x1c9f*-0x1+0x2792,_0x42c476[_0x23d90a(0x689)+_0x23d90a(0x4e5)+'e']=_0x51bfcc?_0x405aac:_0x4f915b['VEeii'],_0xaf7678[_0x23d90a(0x689)+'e'](),_0x51bfcc&&(_0x554c0b[_0x23d90a(0x1e3)+'wColo'+'r']=_0x2d84c5,_0x7ca387['shado'+'wBlur']=0xa*-0x1bd+-0x1*0x1cbd+0x2e2d*0x1,_0x1c6c7b[_0x23d90a(0x3a1)](),_0x1d78e0['shado'+_0x23d90a(0x27b)]=0x1ff*0x5+0x11bd+0x6ee*-0x4),_0xf346ba[_0x23d90a(0x4be)+'tyle']=_0x51bfcc?_0x4f915b[_0x23d90a(0x642)]:_0x23d90a(0x42a)+'255,2'+'35,24'+_0x23d90a(0x478)+')',_0x242131[_0x23d90a(0x489)+'lign']='cente'+'r',_0x5bb576[_0x23d90a(0x2e9)+_0x23d90a(0x1bf)+'ne']=_0x4f915b[_0x23d90a(0x1a5)],_0x2bc310[_0x23d90a(0x206)]=_0x4f915b['RfQfx'](_0x4f915b['MCgiU']+_0x38fd42[_0x23d90a(0x442)]((-0x16f0+-0x11*-0x167+-0x3*0x49)*_0x5b1eb4),_0x4f915b[_0x23d90a(0x428)]),_0x1b5e13['fillT'+_0x23d90a(0x5c0)](_0x1653ff,_0x4f915b[_0x23d90a(0x242)](_0x3fa3d9,_0x231414/(-0x4ce+-0x1ede+0x2*0x11d7)),_0x4f915b[_0x23d90a(0x21a)](_0x569996+_0x4f915b[_0x23d90a(0x5a8)](_0x395da7,-0x1ca*-0x15+0x1e4*0x4+-0x13*0x260),_0x5e6806?(0x109*-0xd+-0x3*-0x341+-0x3b7*-0x1)*_0x5b1eb4:-0x174d+-0x274*0xe+0x39a5)),_0x5e6806&&(_0x392e1f[_0x23d90a(0x206)]=_0x23d90a(0x2b2)+_0x5c353b[_0x23d90a(0x442)]((-0x13*0x209+-0x5ae*0x1+-0x256*-0x13)*_0x5b1eb4)+_0x4f915b['DcmkE'],_0x5724a8[_0x23d90a(0x4be)+_0x23d90a(0x67b)]=_0x51bfcc?'#fff':_0x23d90a(0x42a)+'255,2'+_0x23d90a(0x2a0)+'0,0.5'+'5)',_0x22e60e[_0x23d90a(0x161)+'ext'](_0x5e6806,_0x4f915b[_0x23d90a(0x512)](_0x3fa3d9,_0x231414/(-0x3*-0xa91+0x2*0xcec+-0x3989)),_0x4f915b[_0x23d90a(0x68b)](_0x569996+_0x395da7/(0x4f*-0x6d+0xd*0x1b+0x3*0xac2),_0x4f915b[_0x23d90a(0x1b9)](-0x4*0x781+0x1dad+0x5*0x13,_0x5b1eb4)))),_0xd57a07[_0x23d90a(0x5ce)+'re']();};_0x102295['EOtNf'](_0x2b765d,'W',_0x189c1c(0x522),_0x718e35+_0x5171f1+_0x405286,_0x5cf313,_0x5171f1,_0x5171f1),_0x2b765d('A','KeyA',_0x718e35,_0x5cf313+_0x5171f1+_0x405286,_0x5171f1,_0x5171f1),_0x102295['ZxowX'](_0x2b765d,'S',_0x189c1c(0x15c),_0x102295[_0x189c1c(0xec)](_0x718e35,_0x5171f1)+_0x405286,_0x102295['VrQhy'](_0x5cf313,_0x5171f1)+_0x405286,_0x5171f1,_0x5171f1),_0x2b765d('D','KeyD',_0x102295[_0x189c1c(0xe8)](_0x718e35,_0x102295['ssdpJ'](_0x5171f1+_0x405286,0x31*-0xc5+0x591+0x2026)),_0x102295[_0x189c1c(0x347)](_0x5cf313+_0x5171f1,_0x405286),_0x5171f1,_0x5171f1);var _0x3cbfb0=(_0x1d6ccb-_0x405286)/(-0x1e4a*-0x1+-0x1*-0x20e1+-0x3f29),_0x2aca50=_0x5cf313+_0x102295[_0x189c1c(0x2ac)](_0x5171f1,_0x405286)*(0x5*0x667+-0x15cb+-0xa36);_0x2b765d(_0x189c1c(0x292),_0x189c1c(0x42c)+'1',_0x718e35,_0x2aca50,_0x3cbfb0,_0x5171f1,_0x31476d[_0x189c1c(0x2e7)]?_0x3c6b68(-0xc73*0x3+-0x4*0x421+-0x7b2*-0x7)+_0x102295[_0x189c1c(0x58b)]:''),_0x2b765d(_0x102295[_0x189c1c(0x1dc)],'mouse'+'3',_0x102295[_0x189c1c(0x406)](_0x718e35+_0x3cbfb0,_0x405286),_0x2aca50,_0x3cbfb0,_0x5171f1,_0x1062c7[_0x189c1c(0x2e7)]?_0x87bd4d(-0x107*0x26+0x1817+-0x2fe*-0x5)+_0x102295[_0x189c1c(0x58b)]:''),_0x102295[_0x189c1c(0x281)](_0x2b765d,'','Space',_0x718e35,_0x102295['RzlPn'](_0x2aca50,_0x5171f1)+_0x405286,_0x1d6ccb,_0x102295[_0x189c1c(0x27e)](_0x5171f1,0xe59*-0x2+-0x1*-0x4ff+-0x1*-0x17b3+0.45));}}_0x326594['appen'+_0x189c1c(0x297)+'d'](_0x46f3aa);if(_0x3c9c5b&&_0x3c9c5b[_0x189c1c(0x5c4)+'h']){var _0x5c7b7a=('3|0|7'+_0x189c1c(0x343)+_0x189c1c(0x604))[_0x189c1c(0x61f)]('|'),_0x3d2872=0x1a9a+-0xf4e*-0x2+-0x3936;while(!![]){switch(_0x5c7b7a[_0x3d2872++]){case'0':_0xfb3274['class'+_0x189c1c(0x3eb)]=_0x189c1c(0x65c)+_0x189c1c(0x170);continue;case'1':_0x1dd7df['textC'+_0x189c1c(0x3d3)+'t']=_0x26e196;continue;case'2':_0x326594[_0x189c1c(0x393)+'dChil'+'d'](_0xfb3274);continue;case'3':var _0xfb3274=document['creat'+_0x189c1c(0x234)+_0x189c1c(0x322)](_0x189c1c(0x64b));continue;case'4':_0xfb3274['appen'+_0x189c1c(0x297)+'d'](_0x1dd7df);continue;case'5':_0x1dd7df[_0x189c1c(0x230)+'Name']=_0x189c1c(0x56c)+_0x189c1c(0x177);continue;case'6':for(var _0x56fb89 of _0x3c9c5b)_0xfb3274[_0x189c1c(0x393)+'dChil'+'d'](_0x56fb89);continue;case'7':var _0x1dd7df=document['creat'+_0x189c1c(0x234)+'ent']('div');continue;}break;}}return _0x326594;}var _0x23b007=[{'id':'comba'+'t','label':_0x1f3059(0x263)+'t'},{'id':_0x2a76d7[_0x1f3059(0x651)],'label':_0x2a76d7[_0x1f3059(0x4d1)]},{'id':_0x2a76d7['hLQmD'],'label':_0x1f3059(0x1d9)+'l'},{'id':'misc','label':_0x1f3059(0x19a)},{'id':'safe','label':'Safet'+'y'}];function _0x44387b(){var _0xab4854=_0x1f3059,_0x288d89={'lgjlx':_0x2a76d7[_0xab4854(0x3a0)],'zPgIp':_0xab4854(0x37b)+'arget'+_0xab4854(0x2da)+_0xab4854(0x345)},_0x30e1e9=_0xb20e22[_0xab4854(0x104)+_0xab4854(0x233)]?_0xab4854(0x371)+'MODE\x20'+_0xab4854(0x252)+'rlay\x20'+_0xab4854(0x665)+'\x20no\x20h'+_0xab4854(0x12a)+'(relo'+'ad\x20to'+_0xab4854(0x44a)+')':_0xb20e22[_0xab4854(0x214)]?'UWMK\x20'+_0xab4854(0x191)+'\x20'+(_0xb20e22['hooks'+'Total']?_0x2a76d7['jRNEe'](_0x2a76d7[_0xab4854(0x2a8)](_0xb20e22[_0xab4854(0x4d8)+'Ok'],'/')+_0xb20e22['hooks'+_0xab4854(0x1a6)],'\x20hook'+'s'):_0x2a76d7[_0xab4854(0x1d5)])+_0x2a76d7[_0xab4854(0x21d)]+(_0xb20e22[_0xab4854(0x5f6)+_0xab4854(0x15f)]?_0x2a76d7['VUZvW']:_0xab4854(0x262)+'ng')+(_0xab4854(0x35e)+_0xab4854(0x16f)+'\x20')+(_0xb20e22[_0xab4854(0x3cc)+_0xab4854(0x4c1)]?_0xab4854(0x507):_0xab4854(0x20f))+('\x20|\x20mo'+_0xab4854(0x169)+'t\x20')+(_0xb20e22[_0xab4854(0x493)+_0xab4854(0x46c)]?_0x2a76d7['JbFYn']:'none'):_0xab4854(0x3e7)+_0xab4854(0x43b)+_0xab4854(0x1cd)+_0xab4854(0x32c)+'ay\x20on'+'ly\x20(r'+'einst'+_0xab4854(0xff)+_0xab4854(0x4cb)+_0xab4854(0x40b)+'ipt)';if(_0xb20e22[_0xab4854(0x39b)+_0xab4854(0x20b)])_0x30e1e9+=_0xab4854(0x621)+'R:\x20'+_0xb20e22[_0xab4854(0x39b)+'rror'];return _0x2a76d7['AKfID'](_0x1872d4,'Statu'+'s',_0x30e1e9,_0xb20e22['uwmk'],null,[_0x5aeede('240\x20F'+_0xab4854(0x2ca)+_0xab4854(0x14a),'calls'+_0xab4854(0x378)+_0xab4854(0x581)+_0xab4854(0x285)+'plica'+_0xab4854(0x54c)+_0xab4854(0x37b)+_0xab4854(0x2fb)+_0xab4854(0x2da)+'Rate',_0x2a76d7['geJHC'](_0x2c5250,_0xab4854(0x2c9),()=>{var _0x488b97=_0xab4854;try{if(_0x4f0d4e)_0x4f0d4e['call'](_0x288d89[_0x488b97(0x602)],_0x288d89['zPgIp'],[0x59f+0x1af*0x4+-0xb6b*0x1]);}catch(_0x107d2e){}}))]);}function _0x2753ee(_0x45cf12){var _0x2611a1=_0x1f3059,_0x1f0b67={'GUBhN':_0x2a76d7[_0x2611a1(0x605)],'APhEl':function(_0x713ac2,_0x57a0a0){var _0x2b19e8=_0x2611a1;return _0x2a76d7[_0x2b19e8(0x2a6)](_0x713ac2,_0x57a0a0);},'mbeHy':function(_0x49a792,_0x3929e9){return _0x49a792+_0x3929e9;},'CuTPv':_0x2a76d7[_0x2611a1(0x2cf)],'BymKS':function(_0x2c96b7,_0x489bae){return _0x2c96b7+_0x489bae;},'abPKB':_0x2a76d7[_0x2611a1(0x25b)],'pEabK':_0x2611a1(0x1bc)+'me\x20','sKFoA':_0x2a76d7[_0x2611a1(0x550)],'WnPvr':_0x2611a1(0x35e)+_0x2611a1(0x16f)+'\x20','YsTAc':'held','CSbJa':_0x2a76d7[_0x2611a1(0x4e1)],'NVOKN':function(_0x54d0cd,_0x37d714,_0x3f598c,_0x41e9e5){var _0x43d3d0=_0x2611a1;return _0x2a76d7[_0x43d3d0(0x3a3)](_0x54d0cd,_0x37d714,_0x3f598c,_0x41e9e5);},'DGXmH':'240\x20F'+'PS\x20un'+_0x2611a1(0x14a),'MyYOE':_0x2a76d7['fmXPQ'],'yDQNR':function(_0xe8f922){return _0xe8f922();},'MDHkW':function(_0x2b628d,_0x429cbb,_0x4827b3){var _0x2dca64=_0x2611a1;return _0x2a76d7[_0x2dca64(0x68a)](_0x2b628d,_0x429cbb,_0x4827b3);},'yDZzB':_0x2a76d7[_0x2611a1(0x225)],'Golwb':function(_0x166674,_0x116dc8,_0x25d9d3,_0x3bf6c0,_0x37c185){return _0x166674(_0x116dc8,_0x25d9d3,_0x3bf6c0,_0x37c185);},'cOzfm':function(_0x3f7c5,_0x17bcee){return _0x2a76d7['SfOJR'](_0x3f7c5,_0x17bcee);},'KnXbD':function(_0x3df4d1,_0x46cd52){return _0x3df4d1(_0x46cd52);},'hSkfN':_0x2a76d7['wqFqP'],'OdtxF':function(_0x235a0f){return _0x235a0f();},'xSfTQ':function(_0x40c4a0){return _0x40c4a0();},'fOPXq':function(_0x53d28c){return _0x2a76d7['BtsEU'](_0x53d28c);},'xKDko':function(_0x3bccce){return _0x3bccce();},'dbvoP':function(_0x2fcc87){return _0x2fcc87();},'DDbsS':function(_0x113b6c,_0x2de283){var _0x18adf4=_0x2611a1;return _0x2a76d7[_0x18adf4(0x1c6)](_0x113b6c,_0x2de283);},'LypfW':function(_0x476686,_0x255492){return _0x2a76d7['uHUKY'](_0x476686,_0x255492);},'PNqMc':_0x2a76d7['UIdZi'],'jpMNR':function(_0x1369be){return _0x2a76d7['xsyoP'](_0x1369be);}};if(_0x2611a1(0x2ed)==='hsjqF'){var _0xcb7e7c=_0x5c996a['safeM'+'ode']?_0x1f0b67[_0x2611a1(0x5cc)]:_0xf37f7b['uwmk']?_0x1f0b67['APhEl'](_0x1f0b67[_0x2611a1(0x38a)](_0x1f0b67[_0x2611a1(0x52a)](_0x1f0b67[_0x2611a1(0x4b2)],_0x9e449c[_0x2611a1(0x4d8)+'Total']?_0x1f0b67[_0x2611a1(0x380)](_0x4f0e92[_0x2611a1(0x4d8)+'Ok']+'/'+_0x344304['hooks'+_0x2611a1(0x1a6)],_0x1f0b67[_0x2611a1(0x3aa)]):_0x2611a1(0x62a)+_0x2611a1(0x2c8)+'med\x20('+'all\x20o'+'ff)')+_0x1f0b67['pEabK'],_0x2cb20d[_0x2611a1(0x5f6)+_0x2611a1(0x15f)]?'loade'+'d':_0x1f0b67['sKFoA'])+_0x1f0b67[_0x2611a1(0x4cc)],_0xdea32b[_0x2611a1(0x3cc)+'ers']?_0x1f0b67[_0x2611a1(0x389)]:'none')+(_0x2611a1(0x2b8)+'vemen'+'t\x20')+(_0x3d38c5['movem'+_0x2611a1(0x46c)]?_0x1f0b67[_0x2611a1(0x389)]:_0x2611a1(0x20f)):'UWMK\x20'+_0x2611a1(0x43b)+'NG\x20—\x20'+_0x2611a1(0x32c)+'ay\x20on'+_0x2611a1(0x583)+_0x2611a1(0x34f)+'all\x20t'+_0x2611a1(0x4cb)+'erscr'+'ipt)';if(_0x37f489['lastE'+'rror'])_0xcb7e7c+=_0x1f0b67['BymKS'](_0x1f0b67[_0x2611a1(0xf6)],_0x10ce6b[_0x2611a1(0x39b)+'rror']);return _0x25fe6a(_0x2611a1(0x523)+'s',_0xcb7e7c,_0x372cd6[_0x2611a1(0x214)],null,[_0x1f0b67['NVOKN'](_0x15f46c,_0x1f0b67['DGXmH'],'calls'+'\x20Unit'+'yEngi'+'ne.Ap'+'plica'+_0x2611a1(0x54c)+'set_t'+'arget'+'Frame'+_0x2611a1(0x345),_0x5b19bc(_0x1f0b67['MyYOE'],()=>{var _0x96ae7a=_0x2611a1;try{if(_0x2db6bb)_0x580394[_0x96ae7a(0x67c)]('Unity'+'Engin'+_0x96ae7a(0x294)+'licat'+_0x96ae7a(0x520),'set_t'+_0x96ae7a(0x2fb)+_0x96ae7a(0x2da)+'Rate',[-0x26b6*-0x1+0x3bd+-0x2983]);}catch(_0x33ef73){}}))]);}else{if(_0x2a76d7[_0x2611a1(0x1c6)](_0x45cf12,_0x2a76d7['vinVs']))return[_0x2a76d7['ZcGUu'](_0x44387b),_0x1872d4(_0x2611a1(0xf4)+_0x2611a1(0x233),_0x2611a1(0x4b1)+_0x2611a1(0x2f2)+'alth.'+_0x2611a1(0x68e)+_0x2611a1(0x56b)+_0x2611a1(0x14b)+_0x2611a1(0x36f)+_0x2611a1(0x33d)+_0x2611a1(0x125)+_0x2611a1(0x346)+'lDie,'+_0x2611a1(0x5e7)+'othin'+'g\x20can'+'\x20hurt'+'\x20or\x20k'+_0x2611a1(0x510)+_0x2611a1(0x3f5),_0x24f9d[_0x2611a1(0x632)],_0x2f8e3f=>{var _0x14ebd2=_0x2611a1;_0x24f9d['god']=_0x2f8e3f,_0x182ca9(),_0x215c10(_0x14ebd2(0x632),_0x2f8e3f),_0x215c10(_0x14ebd2(0x152)+'e',_0x2f8e3f);},[]),_0x1872d4(_0x2a76d7['GGSSE'],'Skips'+_0x2611a1(0x3e2)+_0x2611a1(0x29f)+_0x2611a1(0x1d4)+'ick\x20s'+'o\x20the'+'\x20reco'+_0x2611a1(0x13a)+_0x2611a1(0x237)+'\x20neve'+_0x2611a1(0x31d)+_0x2611a1(0x450),_0x24f9d['noRec'+'oil'],_0x10e594=>{var _0xcdb114=_0x2611a1;_0x24f9d[_0xcdb114(0x20d)+_0xcdb114(0x432)]=_0x10e594,_0x1f0b67['yDQNR'](_0x182ca9),_0x1f0b67[_0xcdb114(0x497)](_0x215c10,'noRec'+_0xcdb114(0x432),_0x10e594);},[]),_0x1872d4('No\x20Sp'+_0x2611a1(0x2bf),_0x2a76d7['YPvQk'],_0x24f9d[_0x2611a1(0x236)+_0x2611a1(0x5d3)],_0x437dd7=>{var _0x5dfbd5=_0x2611a1;_0x24f9d[_0x5dfbd5(0x236)+'ead']=_0x437dd7,_0x182ca9();},[]),_0x1872d4(_0x2a76d7[_0x2611a1(0x67a)],_0x2a76d7[_0x2611a1(0x3c6)],_0x24f9d[_0x2611a1(0x1ed)+'Exp'],_0x43c7e3=>{var _0x5ecd87=_0x2611a1;_0x24f9d[_0x5ecd87(0x1ed)+_0x5ecd87(0x30a)]=_0x43c7e3,_0x1f0b67['yDQNR'](_0x182ca9);},[]),_0x2a76d7['iBLeS'](_0x1872d4,_0x2611a1(0x5e1)+_0x2611a1(0x24b)+'P]','Overw'+'rites'+_0x2611a1(0x61e)+_0x2611a1(0x133)+_0x2611a1(0x26c)+_0x2611a1(0x235)+_0x2611a1(0x467)+'annab'+'le\x20if'+'\x20the\x20'+_0x2611a1(0x19f)+_0x2611a1(0x623)+'idate'+'s.',_0x24f9d[_0x2611a1(0x3d0)+'eExp'],_0x20766c=>{var _0x87bb9f=_0x2611a1;if(_0x102295[_0x87bb9f(0x314)](_0x102295[_0x87bb9f(0x2c4)],'zusqK'))_0x24f9d[_0x87bb9f(0x3d0)+'eExp']=_0x20766c,_0x102295['aMbDr'](_0x182ca9);else{var _0x2550bf=_0x2e42fa['creat'+_0x87bb9f(0x234)+_0x87bb9f(0x322)]('input');return _0x2550bf['type']=_0x1f0b67['yDZzB'],_0x2550bf['class'+'Name']='sk-co'+'lor',_0x2550bf[_0x87bb9f(0x66c)]=/^#[0-9a-f]{6}$/i[_0x87bb9f(0x64e)](_0x48f6ab)?_0x2e49df:'#ff6b'+'9d',_0x2550bf['oninp'+'ut']=()=>_0x5c50c1(_0x2550bf['value']),_0x2550bf;}},[_0x2a76d7[_0x2611a1(0x3a3)](_0x5aeede,_0x2611a1(0x5e1)+_0x2611a1(0x295)+'ue',null,_0x2a76d7['SsAoq'](_0x8ff24d,_0x24f9d['damag'+_0x2611a1(0x116)+'e'],0x2*-0xcee+-0x2*-0x3d6+0x123a,0x4*0x7be+0x1*-0x223a+0x536,0x12ad*0x1+0x1*-0x25ba+-0x989*-0x2,_0x458ad0=>{var _0x139efb=_0x2611a1;_0x24f9d[_0x139efb(0x3d0)+'eValu'+'e']=_0x458ad0,_0x102295[_0x139efb(0x3f0)](_0x182ca9);}))]),_0x2a76d7[_0x2611a1(0x375)](_0x1872d4,_0x2a76d7['ojHYC'],_0x2611a1(0x49a)+_0x2611a1(0x645)+_0x2611a1(0x634)+'pon\x27s'+_0x2611a1(0x23b)+_0x2611a1(0x1c3)+'mo\x20to'+_0x2611a1(0x313)+'every'+'\x20200m'+'s.',_0x24f9d['infAm'+_0x2611a1(0x60b)],_0x3f3fbb=>{var _0x13e5aa=_0x2611a1;_0x24f9d[_0x13e5aa(0x178)+'moExp']=_0x3f3fbb,_0x102295[_0x13e5aa(0x688)](_0x182ca9);},[_0x4f5b10(_0x2a76d7[_0x2611a1(0x108)])])];if(_0x45cf12===_0x2a76d7[_0x2611a1(0x651)])return[_0x2a76d7[_0x2611a1(0x471)](_0x1872d4,'Speed',_0x2a76d7['JYmEd'],_0x2a76d7['ZjdtZ'](_0x24f9d[_0x2611a1(0x5bc)+_0x2611a1(0x429)],0x135c+-0x2*0xc51+0x1*0x5aa),null,[_0x2a76d7[_0x2611a1(0x616)](_0x5aeede,_0x2a76d7[_0x2611a1(0x396)],_0x2611a1(0x663)+_0x2611a1(0x25d)+_0x2611a1(0x306),_0x8ff24d(_0x24f9d['speed'+'Pct'],-0x1769+0xb*-0x326+0x3a3d,0xe65+-0x26e*-0x9+-0x2317,-0x5*0x5a5+-0x81*-0x20+0xc1e,_0x262e5c=>{var _0x4296ea=_0x2611a1;_0x4296ea(0x299)!==_0x102295[_0x4296ea(0x1f2)]?(_0x1f0b67['Golwb'](_0x5ea08d,_0x31e8b6,-0xaaa+0x2*0xae3+-0xa94,_0x4296ea(0x659),0x14ad*0x1+-0x5db+0x769*-0x2),_0x1f2076(_0x3496c6,-0x5*-0x2cf+-0x1*-0xfd1+-0x1d74,_0x4296ea(0x659),-0x1*-0x13d9+-0x47d+-0xf5b)):(_0x24f9d[_0x4296ea(0x5bc)+_0x4296ea(0x429)]=_0x262e5c,_0x102295['DlHsw'](_0x182ca9));}))]),_0x1872d4(_0x2611a1(0x3e1)+_0x2611a1(0x591)+_0x2611a1(0x3cf),_0x2a76d7[_0x2611a1(0x24d)],_0x2a76d7['Suacm'](_0x24f9d['jumpP'+'ct'],-0x309+0x2c2*-0x3+0x5*0x257)||_0x24f9d['gravi'+'tyPct']!==-0x142+-0x191c+0x1ac2,null,[_0x5aeede(_0x2a76d7['KjBkl'],null,_0x8ff24d(_0x24f9d[_0x2611a1(0x198)+'ct'],-0x9b1+0x46+0x99d,0xe0f+0xad3*0x1+-0x17b6,-0x24b+0x3*0x565+0x35*-0x43,_0x4c4f9f=>{_0x24f9d['jumpP'+'ct']=_0x4c4f9f,_0x182ca9();})),_0x5aeede('Gravi'+_0x2611a1(0x27a),_0x2a76d7[_0x2611a1(0xe3)],_0x8ff24d(_0x24f9d[_0x2611a1(0x667)+_0x2611a1(0x5f0)],0x1*-0x1976+-0x61*0xf+0x1f2f,-0xd5*0x5+-0x6*0x35d+0x191f,0xe79*0x1+-0x1*0x1cf7+-0x1*-0xe83,_0xefa8ec=>{var _0x11c84e=_0x2611a1;_0x24f9d['gravi'+_0x11c84e(0x5f0)]=_0xefa8ec,_0x182ca9();}))]),_0x2a76d7[_0x2611a1(0x1ef)](_0x1872d4,'Bunny'+_0x2611a1(0x374),'Zeroe'+_0x2611a1(0x241)+'ement'+_0x2611a1(0x224)+_0x2611a1(0x111)+_0x2611a1(0x301)+_0x2611a1(0x127)+'\x20jump'+_0x2611a1(0x3e9)+_0x2611a1(0x291)+_0x2611a1(0x590)+_0x2611a1(0x482)+_0x2611a1(0x4a3),_0x24f9d['bhop'],_0x4c0d1c=>{var _0x3049f1=_0x2611a1,_0x299f6f={'KDfVL':_0x3049f1(0x2d5)+'wn','qiVBz':function(_0x381044,_0x175262){return _0x1f0b67['cOzfm'](_0x381044,_0x175262);},'Mmqqk':'\x20@\x20','lvZAc':function(_0x4ddebc,_0x213472){var _0x1b7eec=_0x3049f1;return _0x1f0b67[_0x1b7eec(0x47c)](_0x4ddebc,_0x213472);}};if(_0x1f0b67[_0x3049f1(0x36b)]==='AtxLj'){var _0xe12bdf=_0x27bec7&&(_0x32f8a0[_0x3049f1(0x579)+'ge']||_0x50281b['error']&&_0x118cf6['error'][_0x3049f1(0x579)+'ge'])||_0x299f6f['KDfVL'];if(_0x5a80aa&&_0x5c87ee[_0x3049f1(0x5ec)+'ame'])_0xe12bdf+=_0x299f6f[_0x3049f1(0x15b)](_0x299f6f['Mmqqk']+_0x299f6f[_0x3049f1(0x43c)](_0x1843f4,_0x1cd23e['filen'+_0x3049f1(0x61a)])[_0x3049f1(0x61f)]('/')[_0x3049f1(0x165)](),':')+(_0x18c331[_0x3049f1(0x37f)+'o']||'?');_0x597730['lastE'+'rror']=_0x3101c4(_0xe12bdf)['slice'](-0x55a*-0x7+0x12ff+0x3875*-0x1,0x20ef+-0x1fe7+-0x8*0xd);}else _0x24f9d[_0x3049f1(0x3d7)]=_0x4c0d1c,_0x1f0b67[_0x3049f1(0x1eb)](_0x182ca9);},[])];if(_0x45cf12==='visua'+'l')return[_0x1872d4(_0x2611a1(0x1aa)+_0x2611a1(0x638),_0x2611a1(0x46a)+'+\x20LMB'+'/RMB\x20'+_0x2611a1(0x49f)+_0x2611a1(0x650)+_0x2611a1(0x1ec)+'.',_0x24f9d['keyst'+'rokes'],_0x56d113=>{var _0x574788=_0x2611a1,_0xfe3c2e={'gALvJ':function(_0x208f91,_0x3576f5){var _0x32763a=_0x40fb;return _0x102295[_0x32763a(0x401)](_0x208f91,_0x3576f5);}};if(_0x102295[_0x574788(0x216)](_0x102295[_0x574788(0x350)],_0x102295[_0x574788(0x3ec)]))_0x24f9d['keyst'+_0x574788(0x638)]=_0x56d113,_0x182ca9();else{var _0x5bc90c=_0xfc7530['fulls'+_0x574788(0x239)+'Eleme'+'nt'],_0x298b03=_0x5bc90c&&_0xfe3c2e['gALvJ'](_0x5bc90c['tagNa'+'me'],'CANVA'+'S')?_0x5bc90c:_0x14eae3['body']||_0x45dd5c[_0x574788(0x15e)+_0x574788(0x1fd)+_0x574788(0x3bd)];if(_0x332478[_0x574788(0x266)+_0x574788(0x4e0)]!==_0x298b03)_0x298b03[_0x574788(0x393)+_0x574788(0x297)+'d'](_0x2bd2f3);}},[_0x2a76d7['SZHHS'](_0x5aeede,'Posit'+_0x2611a1(0x520),null,_0x2a76d7[_0x2611a1(0x658)](_0x4d658c,_0x24f9d[_0x2611a1(0x3b6)],[['bl',_0x2a76d7[_0x2611a1(0x511)]],['br',_0x2a76d7[_0x2611a1(0x32e)]],['ml','Left\x20'+'middl'+'e']],_0xeb7558=>{var _0x183eb1=_0x2611a1;if(_0x102295[_0x183eb1(0x357)]===_0x102295[_0x183eb1(0x357)])_0x24f9d['ksPos']=_0xeb7558,_0x182ca9();else{var _0x3cc563=_0x1332a3[_0x9df33d];if(_0x3cc563)try{_0x3cc563[_0x183eb1(0x11a)+'ed']=!!_0x152781;}catch(_0x4e1949){}}})),_0x2a76d7['MJJzn'](_0x5aeede,_0x2a76d7[_0x2611a1(0xe4)],null,_0x2a76d7['AKfID'](_0x8ff24d,_0x24f9d['ksSca'+'le'],0xfa3+-0x1*0x1150+0x1ad+0.6,0x268e+0x1*-0x2113+-0x57a+0.6000000000000001,0x1abb+-0x2*-0x7c3+-0x175*0x1d+0.05,_0x3d6c54=>{_0x24f9d['ksSca'+'le']=_0x3d6c54,_0x182ca9();})),_0x5aeede(_0x2611a1(0xd3)+'eadou'+'t',null,_0x4292d0(_0x24f9d['ksCps'],_0xcb92b4=>{var _0x59dbf5=_0x2611a1;_0x24f9d['ksCps']=_0xcb92b4,_0x102295[_0x59dbf5(0x688)](_0x182ca9);}))]),_0x1872d4(_0x2611a1(0x3d1)+_0x2611a1(0x32b),_0x2611a1(0x366)+_0x2611a1(0x519)+_0x2611a1(0x1b1)+'rossh'+_0x2611a1(0xd9),_0x24f9d[_0x2611a1(0x23f)+'hair'],_0x4d2ea6=>{var _0xaaea48=_0x2611a1;_0x24f9d['cross'+_0xaaea48(0x32b)]=_0x4d2ea6,_0x1f0b67[_0xaaea48(0x26a)](_0x182ca9);},[_0x5aeede(_0x2611a1(0x664),null,_0x8ff24d(_0x24f9d[_0x2611a1(0x3f3)+'e'],-0xa*-0x21e+0x1*0x2699+-0x3bc5+0.5,-0xe52+0x19ae+0x1*-0xb5a+0.5,-0x19fc+-0x9*-0xc2+0x132a+0.1,_0x1ece61=>{var _0x37ab8f=_0x2611a1;_0x24f9d[_0x37ab8f(0x3f3)+'e']=_0x1ece61,_0x182ca9();})),_0x5aeede('Color',null,_0x2a76d7['kulbK'](_0x1d1364,_0x24f9d['chCol'+'or'],_0x444705=>{_0x24f9d['chCol'+'or']=_0x444705,_0x182ca9();}))]),_0x1872d4(_0x2611a1(0x3bf)+_0x2611a1(0x4c1),_0x2611a1(0x469)+'verla'+'y.',_0x24f9d['fps'],null,[_0x5aeede(_0x2a76d7['IEhhe'],null,_0x4292d0(_0x24f9d['fps'],_0x5b4308=>{_0x24f9d['fps']=_0x5b4308,_0x1f0b67['fOPXq'](_0x182ca9);})),_0x4f5b10(_0x2a76d7[_0x2611a1(0x22f)])])];if(_0x45cf12===_0x2a76d7[_0x2611a1(0x52c)]){if(_0x2a76d7['uIdog'](_0x2611a1(0x68c),_0x2a76d7[_0x2611a1(0x5f5)]))_0x562a49[_0x2611a1(0x586)+_0x2611a1(0x638)]=_0x49ce84,_0x102295['aMbDr'](_0x460926);else return[_0x2a76d7[_0x2611a1(0x26b)](_0x1872d4,_0x2a76d7[_0x2611a1(0x514)],_0x2a76d7['LQQlJ'],_0x24f9d[_0x2611a1(0x3c5)+'ck'],_0x2fc769=>{var _0x42107f=_0x2611a1;_0x24f9d[_0x42107f(0x3c5)+'ck']=_0x2fc769,_0x1f0b67[_0x42107f(0x312)](_0x182ca9);},[_0x2a76d7[_0x2611a1(0x1a1)](_0x4f5b10,_0x2611a1(0x186)+'\x20effe'+'ct\x20on'+'\x20relo'+_0x2611a1(0x16a)+_0x2611a1(0x179)+_0x2611a1(0x335)+'.')])];}return[_0x2a76d7[_0x2611a1(0x200)](_0x1872d4,_0x2611a1(0x532)+_0x2611a1(0x1d0)+_0x2611a1(0x4b6)+_0x2611a1(0x4ab)+_0x2611a1(0x344),_0x2611a1(0x57f)+'\x20UWMK'+_0x2611a1(0x129)+_0x2611a1(0x25a)+'—\x20no\x20'+'WASM\x20'+_0x2611a1(0x4d8)+_0x2611a1(0x534)+'\x20this'+_0x2611a1(0x1cb)+_0x2611a1(0x5ae)+_0x2611a1(0x5d9)+_0x2611a1(0x453)+_0x2611a1(0xea),_0x24f9d[_0x2611a1(0x104)+_0x2611a1(0x233)],_0x5d2796=>{var _0x2a7877=_0x2611a1;_0x24f9d[_0x2a7877(0x104)+'ode']=_0x5d2796,_0x1f0b67['dbvoP'](_0x182ca9),location['reloa'+'d']();},[_0x2a76d7['VJMCC'](_0x4f5b10,_0x2611a1(0x211)+_0x2611a1(0x531)+'\x20relo'+_0x2611a1(0x643)+_0x2611a1(0x1f6)+'ches\x20'+_0x2611a1(0x400)+_0x2611a1(0x185)+'fe\x20mo'+'de,\x20t'+_0x2611a1(0x3ba)+_0x2611a1(0xe0)+_0x2611a1(0x410)+_0x2611a1(0x3fd)+_0x2611a1(0x164)+_0x2611a1(0x55d)+_0x2611a1(0x331)+_0x2611a1(0x652)+'hooks'+_0x2611a1(0x4ba)+'ied\x20c'+'ount.')]),_0x1872d4(_0x2611a1(0x138)+_0x2611a1(0x318)+'switc'+_0x2611a1(0x416),_0x2611a1(0x25e)+'one\x20i'+'nstal'+'ls\x20a\x20'+_0x2611a1(0x392)+'tramp'+_0x2611a1(0x65d)+_0x2611a1(0x536)+_0x2611a1(0x447)+_0x2611a1(0x503)+'page\x20'+_0x2611a1(0x4b0)+_0x2611a1(0x36c)+'OFF\x20b'+_0x2611a1(0x1da)+_0x2611a1(0x419)+_0x2611a1(0x529)+'ignat'+_0x2611a1(0x603)+'hat\x20d'+'oes\x20n'+_0x2611a1(0x5e6)+'tch\x20t'+_0x2611a1(0x67e)+_0x2611a1(0x19b)+'thod\x20'+_0x2611a1(0x34e)+_0x2611a1(0x3c9)+_0x2611a1(0x36d)+_0x2611a1(0x145)+'natur'+_0x2611a1(0x5ea)+_0x2611a1(0x11b)+'\x27\x20the'+_0x2611a1(0x383)+_0x2611a1(0x449)+_0x2611a1(0x407)+'alled'+'.\x20Tur'+_0x2611a1(0x4aa)+'m\x20on\x20'+_0x2611a1(0x160)+_0x2611a1(0x196)+_0x2611a1(0x4b3)+_0x2611a1(0x1a0)+_0x2611a1(0x204)+'d\x20see'+'\x20whic'+'h\x20one'+'\x20your'+'\x20buil'+'d\x20cho'+_0x2611a1(0x54e)+'n.',_0x24f9d['hookG'+'od']||_0x24f9d[_0x2611a1(0x515)+'odDie']||_0x24f9d[_0x2611a1(0x193)+'oReco'+'il']||_0x24f9d['hookC'+_0x2611a1(0x5aa)+'e'],_0x23b75e=>{var _0x4c7319=_0x2611a1;_0x24f9d['hookG'+'od']=_0x23b75e,_0x24f9d['hookG'+_0x4c7319(0x648)]=_0x23b75e,_0x24f9d[_0x4c7319(0x193)+_0x4c7319(0x39c)+'il']=_0x23b75e,_0x24f9d[_0x4c7319(0x38f)+_0x4c7319(0x5aa)+'e']=_0x23b75e,_0x102295[_0x4c7319(0x1e8)](_0x182ca9),location[_0x4c7319(0x1a0)+'d']();},[_0x4f5b10(_0x2611a1(0x211)+_0x2611a1(0x531)+'\x20relo'+'ad.'),_0x2a76d7['yTPHs'](_0x5aeede,_0x2611a1(0x405)+'OHeal'+'th.In'+'itiat'+_0x2611a1(0x13d)+_0x2611a1(0x26d)+'h)',null,_0x4292d0(_0x24f9d['hookG'+'od'],_0x4425f1=>{var _0x572dcf=_0x2611a1;_0x24f9d[_0x572dcf(0x515)+'od']=_0x4425f1,_0x182ca9();})),_0x2a76d7['MJJzn'](_0x5aeede,_0x2a76d7[_0x2611a1(0x5c3)],null,_0x4292d0(_0x24f9d[_0x2611a1(0x515)+'odDie'],_0x275207=>{var _0x41e8c8=_0x2611a1;_0x24f9d['hookG'+_0x41e8c8(0x648)]=_0x275207,_0x182ca9();})),_0x2a76d7['muxxB'](_0x5aeede,_0x2611a1(0x20d)+'oil\x20('+_0x2611a1(0x261)+'lMoti'+'on.Ti'+'ck)',null,_0x4292d0(_0x24f9d['hookN'+'oReco'+'il'],_0xb8cb75=>{var _0x43587d=_0x2611a1;_0x24f9d[_0x43587d(0x193)+_0x43587d(0x39c)+'il']=_0xb8cb75,_0x102295['JyfiU'](_0x182ca9);})),_0x2a76d7[_0x2611a1(0x210)](_0x5aeede,_0x2611a1(0x524)+_0x2611a1(0x488)+'etGam'+_0x2611a1(0x229)+'ing\x20+'+'\x20IsGr'+_0x2611a1(0x4fe)+'d)','no\x20ch'+_0x2611a1(0x2d9)+'work\x20'+'witho'+_0x2611a1(0x381)+'is',_0x2a76d7['NLVCt'](_0x4292d0,_0x24f9d[_0x2611a1(0x38f)+_0x2611a1(0x5aa)+'e'],_0x31e726=>{var _0x6380aa=_0x2611a1;if(_0x1f0b67['DDbsS'](_0x6380aa(0x627),'ktvAy'))try{var _0x25f635=_0x5cd949[_0x6380aa(0x5ad)+'ostfi'+'x']({'typeName':_0x4919e6,'methodName':_0x435349,'params':_0x56b0ca,'returnType':_0x2c8dcd},_0x371e07);return _0x25f635['enabl'+'ed']=_0x2d8527!==![],_0x531965[_0x3faed6]=_0x25f635,_0xa35c1[_0x6380aa(0x4d8)+'Total']++,_0x25f635;}catch(_0x32c200){return _0x1fcae1[_0x6380aa(0x2f7)](_0x6380aa(0x43a)+_0x6380aa(0x370)+_0x6380aa(0x50e)+'ook\x20r'+'eg\x20fa'+_0x6380aa(0x135),_0xf014aa,_0x32c200&&_0x32c200[_0x6380aa(0x579)+'ge']),null;}else _0x24f9d[_0x6380aa(0x38f)+'aptur'+'e']=_0x31e726,_0x1f0b67['yDQNR'](_0x182ca9);}))]),_0x1872d4(_0x2611a1(0x33c)+'Kille'+'r','Disab'+_0x2611a1(0x578)+_0x2611a1(0xfd)+'age\x20d'+_0x2611a1(0x13b)+_0x2611a1(0x5d4)+_0x2611a1(0x1ae)+_0x2611a1(0x415)+_0x2611a1(0x1d6)+'topDe'+_0x2611a1(0x39d)+_0x2611a1(0x19d)+'\x20Keep'+'\x20ON.',_0x24f9d['actkK'+_0x2611a1(0x21f)],_0x251a6b=>{var _0x5db7bf=_0x2611a1;_0x102295['GMBfU']!==_0x5db7bf(0xda)?(_0x24f9d['actkK'+'ill']=_0x251a6b,_0x182ca9()):_0x6f6500['setIt'+'em'](_0x5db7bf(0x113)+_0x5db7bf(0x14e)+_0x5db7bf(0x4a5),_0x330bcb[_0x5db7bf(0x464)+'gify'](_0x215521));},[_0x2a76d7[_0x2611a1(0x60e)](_0x4f5b10,_0x2a76d7['wQIHi'],!![])]),_0x2a76d7['wyuLO'](_0x1872d4,'Dange'+'r','These'+_0x2611a1(0x16c)+_0x2611a1(0x11f)+_0x2611a1(0x5b0)+_0x2611a1(0x528)+_0x2611a1(0x538)+'ces.',!![],null,[_0x2a76d7[_0x2611a1(0x238)](_0x5aeede,_0x2a76d7[_0x2611a1(0x288)],null,_0x2a76d7[_0x2611a1(0x4f7)](_0x2c5250,_0x2a76d7[_0x2611a1(0x112)],()=>{var _0xe99ad=_0x2611a1;_0x1f0b67['LypfW'](_0x1f0b67['PNqMc'],'kgjmb')?(_0x24f9d={..._0x236089},_0x1f0b67[_0xe99ad(0x390)](_0x182ca9),location[_0xe99ad(0x1a0)+'d']()):(_0x17479a['infAm'+_0xe99ad(0x60b)]=_0x47141a,_0x22ad66());}))])];}}var _0x310ddd=null;function _0xa636a7(_0x111e05){var _0x35be5f=_0x1f3059;_0x3ed137=_0x111e05;if(!_0x310ddd){var _0x16d71f=(_0x35be5f(0x413)+_0x35be5f(0x39f)+'3')[_0x35be5f(0x61f)]('|'),_0x4a9ee2=-0x2c8*-0x5+-0x42*-0x37+0xe0b*-0x2;while(!![]){switch(_0x16d71f[_0x4a9ee2++]){case'0':_0x152b98[_0x35be5f(0x393)+_0x35be5f(0x297)+'d'](_0x310ddd);continue;case'1':var _0x5c3224=document['creat'+_0x35be5f(0x234)+'ent']('style');continue;case'2':_0x152b98[_0x35be5f(0x393)+'dChil'+'d'](_0x5c3224);continue;case'3':requestAnimationFrame(()=>_0x310ddd['class'+'List']['add']('shown'));continue;case'4':_0x310ddd=_0x102295[_0x35be5f(0x2cd)](_0x475761);continue;case'5':_0x5c3224[_0x35be5f(0x59c)+'onten'+'t']=_0x2d4625;continue;}break;}}_0x310ddd[_0x35be5f(0x230)+'List']['toggl'+'e'](_0x102295[_0x35be5f(0x10e)],_0x111e05);}function _0x406276(){_0xa636a7(!_0x3ed137);}function _0x475761(){var _0x394dc0=_0x1f3059,_0x281581={'cBdfG':function(_0x254a8b,_0x39ccc6){return _0x254a8b(_0x39ccc6);},'czehX':_0x394dc0(0x15a),'OOpnI':_0x2a76d7[_0x394dc0(0x563)],'LdDIX':_0x2a76d7[_0x394dc0(0x2c2)],'EAjcH':_0x2a76d7['DwzHq'],'WCFTZ':function(_0x2c9ecc,_0x13264b){return _0x2a76d7['JyZaP'](_0x2c9ecc,_0x13264b);},'lUhis':_0x394dc0(0x686),'gvdKB':_0x2a76d7['QGJlV'],'hptVD':function(_0x107ed2,_0x2f75fc){return _0x107ed2+_0x2f75fc;},'ibPrJ':'UWMK\x20'+_0x394dc0(0x191)+'\x20','qZigh':function(_0x39fba2,_0x19ce22){var _0x2f058d=_0x394dc0;return _0x2a76d7[_0x2f058d(0x612)](_0x39fba2,_0x19ce22);},'OOliB':'\x20hook'+'s','EJUWc':_0x2a76d7[_0x394dc0(0x21d)],'xtmxr':_0x2a76d7[_0x394dc0(0x2ad)],'YUJMj':_0x394dc0(0x2b8)+_0x394dc0(0x169)+'t\x20'},_0x261c10=document[_0x394dc0(0x5fb)+_0x394dc0(0x234)+'ent'](_0x2a76d7[_0x394dc0(0x3ed)]);_0x261c10[_0x394dc0(0x230)+_0x394dc0(0x3eb)]=_0x2a76d7[_0x394dc0(0x1b8)];var _0x764346=document['creat'+'eElem'+'ent']('nav');_0x764346[_0x394dc0(0x230)+_0x394dc0(0x3eb)]='mn-si'+'de';var _0x2adf87=document[_0x394dc0(0x5fb)+'eElem'+_0x394dc0(0x322)](_0x394dc0(0x64b));_0x2adf87[_0x394dc0(0x230)+'Name']=_0x2a76d7['cqEYx'],_0x2adf87['inner'+'HTML']='<svg\x20'+_0x394dc0(0x443)+'ox=\x220'+_0x394dc0(0x3dc)+_0x394dc0(0x2b3)+'class'+'=\x22mn-'+'logo-'+'svg\x22>'+_0x394dc0(0x56d)+'\x20d=\x22M'+_0x394dc0(0xdb)+'c-1.5'+_0x394dc0(0x3de)+'4-4.5'+_0x394dc0(0x5b7)+'5\x200-2'+'.5\x201.'+_0x394dc0(0x45e)+'\x204-4.'+'5s4\x202'+_0x394dc0(0x5bf)+'5c0\x203'+'-2.5\x20'+_0x394dc0(0x2f4)+_0x394dc0(0x596)+_0x394dc0(0x40f)+_0x394dc0(0x42b)+_0x394dc0(0x28d)+_0x394dc0(0x3bc)+_0x394dc0(0x1e6)+'9d\x22\x20s'+'troke'+_0x394dc0(0x1d3)+_0x394dc0(0x40e)+_0x394dc0(0x436)+'ke-li'+_0x394dc0(0x2bd)+'=\x22rou'+'nd\x22\x20s'+_0x394dc0(0x2d6)+_0x394dc0(0x476)+_0x394dc0(0x49c)+'\x22roun'+'d\x22/><'+'circl'+_0x394dc0(0x484)+_0x394dc0(0x423)+_0x394dc0(0x628)+_0x394dc0(0x4b4)+_0x394dc0(0x4dd)+'\x20fill'+'=\x22#ff'+_0x394dc0(0x277)+_0x394dc0(0x40a)+'vg>',_0x764346['appen'+'dChil'+'d'](_0x2adf87);var _0x4d0550=document['creat'+_0x394dc0(0x234)+_0x394dc0(0x322)]('div');_0x4d0550[_0x394dc0(0x230)+_0x394dc0(0x3eb)]=_0x394dc0(0x5a0)+'in';var _0x171c2c=document[_0x394dc0(0x5fb)+'eElem'+'ent'](_0x2a76d7[_0x394dc0(0x37d)]);_0x171c2c[_0x394dc0(0x230)+_0x394dc0(0x3eb)]=_0x2a76d7[_0x394dc0(0x43d)];var _0x2d6677=document['creat'+_0x394dc0(0x234)+_0x394dc0(0x322)]('div');_0x2d6677[_0x394dc0(0x230)+'Name']=_0x2a76d7[_0x394dc0(0x1c0)];var _0x25f0ab=document[_0x394dc0(0x5fb)+_0x394dc0(0x234)+'ent']('h2');_0x25f0ab['class'+_0x394dc0(0x3eb)]=_0x394dc0(0x53b),_0x25f0ab['textC'+_0x394dc0(0x3d3)+'t']=_0x2a76d7['DPKMy'];var _0xf4258=document[_0x394dc0(0x5fb)+'eElem'+_0x394dc0(0x322)](_0x2a76d7['DXhRA']);_0xf4258['class'+'Name']=_0x2a76d7['QDIgY'],_0xf4258['textC'+_0x394dc0(0x3d3)+'t']=_0x394dc0(0x376)+'trike'+_0x394dc0(0x46b)+_0x394dc0(0x2a7),_0x2d6677[_0x394dc0(0x393)+'d'](_0x25f0ab,_0xf4258);var _0x2e56e5=document[_0x394dc0(0x5fb)+'eElem'+_0x394dc0(0x322)]('butto'+'n');_0x2e56e5[_0x394dc0(0x270)]=_0x2a76d7['bRilY'],_0x2e56e5[_0x394dc0(0x230)+_0x394dc0(0x3eb)]=_0x394dc0(0x19e)+_0x394dc0(0x1f1),_0x2e56e5[_0x394dc0(0x614)]=_0x2a76d7['Czdha'],_0x2e56e5[_0x394dc0(0x140)+_0x394dc0(0x582)]=_0x2a76d7['VsUwA'],_0x2e56e5['oncli'+'ck']=()=>_0xa636a7(![]),_0x171c2c[_0x394dc0(0x393)+'d'](_0x2d6677,_0x2e56e5);var _0x4c478d=document[_0x394dc0(0x5fb)+'eElem'+_0x394dc0(0x322)]('div');_0x4c478d[_0x394dc0(0x230)+_0x394dc0(0x3eb)]=_0x2a76d7[_0x394dc0(0x275)],_0x4d0550[_0x394dc0(0x393)+'d'](_0x171c2c,_0x4c478d),_0x261c10[_0x394dc0(0x393)+'d'](_0x764346,_0x4d0550);var _0x1a69ec=new Map();for(var _0x446432 of _0x23b007){var _0x79fc76=(_0x394dc0(0x3fa)+'|7|5|'+_0x394dc0(0x3f7))[_0x394dc0(0x61f)]('|'),_0x14528b=-0x1*-0x56c+-0x1*0xa52+0x4e6;while(!![]){switch(_0x79fc76[_0x14528b++]){case'0':_0x341d95['oncli'+'ck']=(_0x4fb93e=>()=>_0x33dd20(_0x4fb93e))(_0x446432['id']);continue;case'1':_0x764346[_0x394dc0(0x393)+'dChil'+'d'](_0x341d95);continue;case'2':_0x341d95[_0x394dc0(0x230)+'Name']=_0x2a76d7['kEcVu'];continue;case'3':var _0x341d95=document[_0x394dc0(0x5fb)+_0x394dc0(0x234)+_0x394dc0(0x322)]('butto'+'n');continue;case'4':_0x1a69ec['set'](_0x446432['id'],_0x341d95);continue;case'5':_0x341d95['inner'+_0x394dc0(0x582)]=_0x2a76d7[_0x394dc0(0x4fa)](_0x2a76d7['rDKtA']+_0x446432[_0x394dc0(0x47b)],_0x394dc0(0x613)+_0x394dc0(0x1fc));continue;case'6':_0x341d95['type']=_0x394dc0(0x5fa)+'n';continue;case'7':_0x341d95['title']=_0x446432['label'];continue;}break;}}function _0x33dd20(_0x565bd4){var _0x2a6c29=_0x394dc0,_0x440e72={'imeTd':'0|6|3'+'|8|4|'+_0x2a6c29(0x1d7)+'|10|1'+'|9','aVXET':function(_0x3f0992,_0x3e0eea){return _0x281581['cBdfG'](_0x3f0992,_0x3e0eea);},'QzTwO':function(_0x461664){return _0x461664();},'GsCgV':function(_0x6df69,_0x2a8f81){return _0x6df69/_0x2a8f81;},'Swzdf':function(_0x449410,_0x3e0753){return _0x449410(_0x3e0753);}};if(_0x281581['czehX']===_0x2a6c29(0x24e)){var _0x52a8ca=_0x440e72[_0x2a6c29(0x365)]['split']('|'),_0xef80b7=0x1*-0x2047+0xa36*0x3+0x1a5*0x1;while(!![]){switch(_0x52a8ca[_0xef80b7++]){case'0':_0xfc236e(_0x24edf5);continue;case'1':if(_0x180b60[_0x2a6c29(0x586)+_0x2a6c29(0x638)])_0x440e72[_0x2a6c29(0x45b)](_0x29bb6d,_0x3f56b5);continue;case'2':_0x440e72[_0x2a6c29(0x342)](_0x1800d0);continue;case'3':var _0x47b4c4=_0x573c1a['now']();continue;case'4':_0x293d6f();continue;case'5':_0x454888['clear'+'Rect'](-0x1fdc+-0x1efa+0x3ed6,0xcbb+0x103*-0xd+-0x36*-0x2,_0x152672['w'],_0x40dc67['h']);continue;case'6':_0xf7ee33++;continue;case'7':var _0x3f56b5={'left':0x0,'top':0x0,'right':_0x12e554['w'],'bottom':_0x31b79c['h'],'width':_0x4c1763['w'],'height':_0x349f82['h']};continue;case'8':_0x47b4c4-_0x313e5f>=0x1f39*-0x1+0x6d*-0xd+-0xa*-0x3df&&(_0x293346=_0x1f2ca0[_0x2a6c29(0x442)](_0x440e72['GsCgV'](_0x47191b*(-0x1*-0xf47+-0x1ada+0xf7b),_0x47b4c4-_0x16498b)),_0x90d954=-0x945+-0x1*-0x2087+-0x1a*0xe5,_0xcaa065=_0x47b4c4);continue;case'9':_0x440e72[_0x2a6c29(0x45b)](_0x26e7b3,_0x3f56b5);continue;case'10':if(_0x389b19['cross'+_0x2a6c29(0x32b)])_0x440e72['Swzdf'](_0x4b48c8,_0x3f56b5);continue;}break;}}else{var _0x1b4fde=_0x281581['OOpnI']['split']('|'),_0x9eb37c=-0x1533*-0x1+0x1*0x15c1+-0x2af4;while(!![]){switch(_0x1b4fde[_0x9eb37c++]){case'0':_0x4bd64e();continue;case'1':_0x4c478d['repla'+_0x2a6c29(0x625)+'ldren'](..._0x2753ee(_0x565bd4));continue;case'2':_0x326674['cat']=_0x565bd4;continue;case'3':_0x25f0ab[_0x2a6c29(0x59c)+_0x2a6c29(0x3d3)+'t']=_0x281581[_0x2a6c29(0xd8)]+_0x216a15['label'];continue;case'4':var _0x216a15=_0x23b007['find'](_0x9e37da=>_0x9e37da['id']===_0x565bd4)||_0x23b007[0x16fe+-0x26f6+0xff8];continue;case'5':for(var [_0x13ab03,_0x4f3394]of _0x1a69ec)_0x4f3394[_0x2a6c29(0x230)+_0x2a6c29(0x5e5)][_0x2a6c29(0x57b)+'e'](_0x281581['EAjcH'],_0x281581['WCFTZ'](_0x13ab03,_0x565bd4));continue;}break;}}}return _0x2a76d7[_0x394dc0(0x32d)](_0x33dd20,_0x326674[_0x394dc0(0x566)]||_0x394dc0(0x3e6)+'t'),setInterval(()=>{var _0x4a92b4=_0x394dc0;if(!_0x3ed137)return;var _0x14a46c=_0x4c478d[_0x4a92b4(0x2bb)+'ren'];for(var _0x33f8a9=0x54*-0x55+-0x219+0x1dfd;_0x33f8a9<_0x14a46c[_0x4a92b4(0x5c4)+'h'];_0x33f8a9++){var _0x3afa9b=_0x14a46c[_0x33f8a9][_0x4a92b4(0x46d)+'Selec'+_0x4a92b4(0x38b)](_0x4a92b4(0x462)+_0x4a92b4(0x36a));_0x3afa9b&&(_0x3afa9b['textC'+_0x4a92b4(0x3d3)+'t'][_0x4a92b4(0x544)+'Of']('UWMK')===-0xc21+-0x7ca+-0x13eb*-0x1||_0x3afa9b[_0x4a92b4(0x59c)+_0x4a92b4(0x3d3)+'t'][_0x4a92b4(0x544)+'Of'](_0x281581['lUhis'])===-0x9*0x1ed+0x24d8+-0x1383)&&(_0x3afa9b[_0x4a92b4(0x59c)+_0x4a92b4(0x3d3)+'t']=_0xb20e22[_0x4a92b4(0x104)+'ode']?_0x281581['gvdKB']:_0xb20e22[_0x4a92b4(0x214)]?_0x281581['hptVD'](_0x281581['ibPrJ'],_0xb20e22['hooks'+_0x4a92b4(0x1a6)]?_0x281581[_0x4a92b4(0x3f2)](_0xb20e22[_0x4a92b4(0x4d8)+'Ok']+'/'+_0xb20e22[_0x4a92b4(0x4d8)+'Total'],_0x281581[_0x4a92b4(0x526)]):'0\x20hoo'+_0x4a92b4(0x2c8)+'med\x20('+_0x4a92b4(0x50f)+'ff)')+_0x281581[_0x4a92b4(0x5c8)]+(_0xb20e22[_0x4a92b4(0x5f6)+'oaded']?'loade'+'d':'loadi'+'ng')+(_0x4a92b4(0x35e)+_0x4a92b4(0x16f)+'\x20')+(_0xb20e22['shoot'+_0x4a92b4(0x4c1)]?_0x281581[_0x4a92b4(0x2a4)]:_0x4a92b4(0x20f))+_0x281581['YUJMj']+(_0xb20e22[_0x4a92b4(0x493)+'ents']?_0x281581[_0x4a92b4(0x2a4)]:_0x4a92b4(0x20f))+(_0xb20e22[_0x4a92b4(0x39b)+'rror']?'\x20|\x20ER'+_0x4a92b4(0x213)+_0xb20e22[_0x4a92b4(0x39b)+_0x4a92b4(0x20b)]:''):_0x4a92b4(0x3e7)+'MISSI'+_0x4a92b4(0xf3)+_0x4a92b4(0x32c)+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+_0x4a92b4(0x4cb)+_0x4a92b4(0x40b)+_0x4a92b4(0x491));}},0x1*-0x21b2+-0xb81+0x1*0x311b),_0x261c10;}var _0x2d4625=_0x1f3059(0x1df)+_0x1f3059(0x144)+_0x1f3059(0x27f)+'l:\x20in'+'itial'+_0x1f3059(0x15d)+'\x20\x20\x20*\x20'+'{\x20box'+'-sizi'+_0x1f3059(0x3ea)+_0x1f3059(0x23e)+_0x1f3059(0x50d)+_0x1f3059(0x2d8)+'in:\x200'+_0x1f3059(0x13f)+_0x1f3059(0x3c0)+_0x1f3059(0x537)+_0x1f3059(0x63e)+'r\x22,\x20\x22'+_0x1f3059(0x3ac)+'\x20UI\x22,'+_0x1f3059(0x361)+'em-ui'+_0x1f3059(0x421)+_0x1f3059(0x1b4)+'if;\x20}'+_0x1f3059(0x1df)+'.mn-p'+_0x1f3059(0x53f)+_0x1f3059(0x618)+_0x1f3059(0x3fc)+':\x20abs'+_0x1f3059(0x64a)+';\x20rig'+_0x1f3059(0xfc)+_0x1f3059(0x5ef)+_0x1f3059(0x434)+'m:\x2024'+_0x1f3059(0x377)+_0x1f3059(0x592)+'\x20min('+_0x1f3059(0x215)+_0x1f3059(0x395)+_0x1f3059(0x259)+_0x1f3059(0x3c8)+_0x1f3059(0x168)+');\x20ma'+_0x1f3059(0x3db)+'ght:\x20'+_0x1f3059(0x12d)+'80px,'+_0x1f3059(0x22a)+_0x1f3059(0x677)+_0x1f3059(0x448)+_0x1f3059(0x4ae)+_0x1f3059(0x183)+'\x20\x20\x20di'+_0x1f3059(0x66b)+_0x1f3059(0x572)+'x;\x20ga'+_0x1f3059(0x589)+'px;\x20p'+'addin'+_0x1f3059(0x27c)+'px;\x20b'+_0x1f3059(0x23e)+_0x1f3059(0x14f)+_0x1f3059(0x1d1)+'2px;\x20'+'point'+_0x1f3059(0x132)+_0x1f3059(0x1b6)+_0x1f3059(0x411)+_0x1f3059(0x183)+_0x1f3059(0x29a)+_0x1f3059(0x661)+_0x1f3059(0x568)+_0x1f3059(0x42a)+_0x1f3059(0x384)+',21,.'+'82);\x20'+'backd'+'rop-f'+_0x1f3059(0x479)+':\x20blu'+'r(22p'+'x)\x20sa'+_0x1f3059(0x4bb)+'e(150'+_0x1f3059(0x576)+_0x1f3059(0x639)+'t-bac'+'kdrop'+'-filt'+_0x1f3059(0x283)+_0x1f3059(0x349)+'2px)\x20'+_0x1f3059(0x68d)+_0x1f3059(0x222)+_0x1f3059(0x564)+'\x0a\x20\x20\x20\x20'+_0x1f3059(0x559)+'-shad'+_0x1f3059(0x570)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x1f3059(0x3cb)+'5,255'+_0x1f3059(0x437)+_0x1f3059(0x517)+_0x1f3059(0x2f5)+'1px\x200'+_0x1f3059(0x338)+'(255,'+_0x1f3059(0x228)+'55,.0'+_0x1f3059(0x26f)+_0x1f3059(0x3b5)+'\x2080px'+'\x20rgba'+'(0,0,'+_0x1f3059(0x480)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x1f3059(0x5ed)+'y:\x200;'+_0x1f3059(0x4c6)+'sform'+':\x20tra'+'nslat'+_0x1f3059(0x545)+'px);\x20'+'point'+_0x1f3059(0x132)+_0x1f3059(0x1b6)+'\x20none'+';\x20tra'+_0x1f3059(0x4af)+_0x1f3059(0x24c)+_0x1f3059(0x5ed)+_0x1f3059(0x5c9)+_0x1f3059(0x521)+_0x1f3059(0x255)+_0x1f3059(0x615)+_0x1f3059(0x2be)+'5s\x20cu'+'bic-b'+'ezier'+_0x1f3059(0x617)+_0x1f3059(0x2bc)+_0x1f3059(0x5e8)+'\x20\x20\x20\x20\x20'+_0x1f3059(0x577)+_0x1f3059(0x636)+_0x1f3059(0x172)+_0x1f3059(0x13f)+_0x1f3059(0x333)+_0x1f3059(0x2ba)+_0x1f3059(0x607)+_0x1f3059(0x1df)+'.mn-p'+'anel.'+'shown'+_0x1f3059(0x4de)+_0x1f3059(0x2cb)+_0x1f3059(0x2d4)+_0x1f3059(0x2a3)+'form:'+'\x20none'+';\x20poi'+_0x1f3059(0x130)+'event'+_0x1f3059(0x4c7)+_0x1f3059(0x1c4)+_0x1f3059(0x1df)+'.mn-s'+_0x1f3059(0x4bf)+'\x20disp'+'lay:\x20'+_0x1f3059(0x52f)+'\x20flex'+'-dire'+_0x1f3059(0x465)+_0x1f3059(0x309)+_0x1f3059(0x5d1)+_0x1f3059(0x584)+_0x1f3059(0x37c)+_0x1f3059(0x36e)+_0x1f3059(0x501)+'\x20gap:'+'\x204px;'+_0x1f3059(0x29d)+_0x1f3059(0xd4)+_0x1f3059(0x21b)+_0x1f3059(0x219)+_0x1f3059(0x4ad)+_0x1f3059(0x271)+'ing:\x20'+_0x1f3059(0xfa)+(_0x1f3059(0xd2)+'rder-'+'radiu'+_0x1f3059(0x284)+_0x1f3059(0x194)+'\x20\x20\x20\x20\x20'+_0x1f3059(0x2c5)+_0x1f3059(0x442)+_0x1f3059(0x61d)+'a(255'+_0x1f3059(0x368)+_0x1f3059(0x1f3)+_0x1f3059(0x348)+_0x1f3059(0x303)+_0x1f3059(0x1e3)+'w:\x20in'+'set\x200'+_0x1f3059(0x319)+_0x1f3059(0x403)+_0x1f3059(0x4d4)+'55,25'+_0x1f3059(0x5e9)+_0x1f3059(0x59b)+_0x1f3059(0x15d)+_0x1f3059(0x150)+_0x1f3059(0x30d)+'o\x20{\x20d'+_0x1f3059(0x4f1)+_0x1f3059(0x184)+_0x1f3059(0x364)+_0x1f3059(0x5a3)+_0x1f3059(0x3b8)+':\x20cen'+_0x1f3059(0x4b8)+'width'+':\x2032p'+_0x1f3059(0x192)+'ight:'+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x1f3059(0x595)+_0x1f3059(0x155)+_0x1f3059(0x329)+_0x1f3059(0x4c0)+_0x1f3059(0x362)+_0x1f3059(0xfc)+_0x1f3059(0x46f)+_0x1f3059(0x268)+_0x1f3059(0x5ab)+'visib'+_0x1f3059(0x5b4)+_0x1f3059(0x479)+':\x20dro'+_0x1f3059(0x65e)+'dow(0'+'\x200\x204p'+_0x1f3059(0x44f)+'a(255'+_0x1f3059(0x62d)+_0x1f3059(0x356)+_0x1f3059(0x220)+_0x1f3059(0x31f)+'\x20.mn-'+_0x1f3059(0x49d)+_0x1f3059(0x3c7)+_0x1f3059(0x3e4)+'flex;'+_0x1f3059(0x60c)+_0x1f3059(0x4a7)+'ms:\x20c'+_0x1f3059(0x551)+_0x1f3059(0x31b)+'tify-'+'conte'+'nt:\x20c'+_0x1f3059(0x551)+_0x1f3059(0x474)+'th:\x205'+_0x1f3059(0x655)+_0x1f3059(0x122)+'t:\x2034'+'px;\x20b'+_0x1f3059(0x23e)+_0x1f3059(0x45a)+_0x1f3059(0x483)+'r-rad'+_0x1f3059(0x137)+_0x1f3059(0x3ae)+_0x1f3059(0x1df)+_0x1f3059(0x47e)+_0x1f3059(0x1a3)+_0x1f3059(0x38d)+'ransp'+_0x1f3059(0x139)+_0x1f3059(0x3e5)+_0x1f3059(0x24f)+_0x1f3059(0x4d4)+_0x1f3059(0x272)+_0x1f3059(0x2f1)+',.4);'+_0x1f3059(0x5d0)+_0x1f3059(0x458)+_0x1f3059(0x61c)+'r;\x20fo'+_0x1f3059(0x50a)+_0x1f3059(0x599)+_0x1f3059(0x22c)+_0x1f3059(0x51f)+_0x1f3059(0x115)+'t:\x2070'+_0x1f3059(0x18c)+'\x20\x20\x20\x20.'+'mn-ta'+'b:hov'+_0x1f3059(0x5b9)+'color'+':\x20rgb'+_0x1f3059(0x5fe)+_0x1f3059(0xdf)+_0x1f3059(0x245)+'8);\x20}'+_0x1f3059(0x1df)+'.mn-t'+'ab.ac'+'tive\x20'+'{\x20col'+_0x1f3059(0x40d)+_0x1f3059(0x187)+_0x1f3059(0x438)+_0x1f3059(0x661)+_0x1f3059(0x568)+'rgba('+_0x1f3059(0x408)+'07,15'+_0x1f3059(0x320)+_0x1f3059(0x15d)+_0x1f3059(0x150)+_0x1f3059(0x5cf)+_0x1f3059(0x678)+_0x1f3059(0x219)+_0x1f3059(0x269)+'n-wid'+'th:\x200'+';\x20dis'+'play:'+_0x1f3059(0x355)+';\x20fle'+_0x1f3059(0x148)+_0x1f3059(0x1a9)+_0x1f3059(0x3fe)+'lumn;'+_0x1f3059(0x16d)+_0x1f3059(0x1e2)+_0x1f3059(0x2ff)+'{\x20dis'+_0x1f3059(0x1b0)+_0x1f3059(0x355)+';\x20ali'+_0x1f3059(0x2fd)+_0x1f3059(0xdd)+_0x1f3059(0x33f)+'r;\x20ga'+_0x1f3059(0x48b)+_0x1f3059(0x5a6)+_0x1f3059(0x300)+_0x1f3059(0x119)+'x\x206px'+'\x2012px'+_0x1f3059(0x212)+_0x1f3059(0x334)+_0x1f3059(0x65f)+_0x1f3059(0x4ad)+_0x1f3059(0x16d)+'\x20\x20.mn'+_0x1f3059(0x141)+_0x1f3059(0x4b7)+_0x1f3059(0x57e)+_0x1f3059(0x360)+_0x1f3059(0x22b)+'dth:\x20'+_0x1f3059(0x18c)+'\x20\x20\x20\x20.'+_0x1f3059(0x63f)+_0x1f3059(0x43f)+_0x1f3059(0x333)+_0x1f3059(0x463)+'px;\x20f'+'ont-w'+_0x1f3059(0x153)+':\x20650'+';\x20}\x0a\x20'+_0x1f3059(0x150)+'n-sub'+'\x20{\x20fo'+_0x1f3059(0x50a)+'ze:\x201'+_0x1f3059(0x4a9)+'opaci')+('ty:\x20.'+_0x1f3059(0x4ca)+_0x1f3059(0x431)+'mn-cl'+_0x1f3059(0x516)+'\x20disp'+_0x1f3059(0x3e4)+_0x1f3059(0x359)+'\x20plac'+_0x1f3059(0x4ce)+_0x1f3059(0x1f7)+'enter'+';\x20wid'+'th:\x202'+_0x1f3059(0x49e)+_0x1f3059(0x122)+_0x1f3059(0x674)+'px;\x20b'+_0x1f3059(0x23e)+':\x200;\x20'+_0x1f3059(0x483)+_0x1f3059(0x5ba)+_0x1f3059(0x137)+'8px;\x20'+'backg'+_0x1f3059(0x442)+_0x1f3059(0x1b5)+_0x1f3059(0x209)+_0x1f3059(0x2e1)+'color'+':\x20inh'+_0x1f3059(0x588)+_0x1f3059(0x302)+'ity:\x20'+_0x1f3059(0x2d2)+_0x1f3059(0x680)+_0x1f3059(0x657)+_0x1f3059(0x67f)+';\x20}\x0a\x20'+_0x1f3059(0x150)+_0x1f3059(0x541)+_0x1f3059(0x12f)+_0x1f3059(0x11e)+_0x1f3059(0x302)+_0x1f3059(0x1a4)+'1;\x20ba'+'ckgro'+'und:\x20'+_0x1f3059(0x42a)+_0x1f3059(0x228)+_0x1f3059(0x3cb)+_0x1f3059(0x189)+');\x20}\x0a'+_0x1f3059(0x431)+_0x1f3059(0x19e)+_0x1f3059(0x332)+_0x1f3059(0x1dd)+'width'+':\x2014p'+_0x1f3059(0x192)+_0x1f3059(0xf8)+'\x2014px'+_0x1f3059(0x2b4)+'l:\x20no'+_0x1f3059(0x167)+'troke'+':\x20cur'+_0x1f3059(0x4ee)+_0x1f3059(0x433)+_0x1f3059(0x436)+_0x1f3059(0x3cd)+'dth:\x20'+_0x1f3059(0x311)+'roke-'+_0x1f3059(0x265)+'ap:\x20r'+_0x1f3059(0x1de)+_0x1f3059(0x16d)+'\x20\x20.mn'+_0x1f3059(0x560)+_0x1f3059(0x662)+_0x1f3059(0x240)+_0x1f3059(0x5af)+_0x1f3059(0x653)+'ht:\x200'+_0x1f3059(0x1bb)+_0x1f3059(0x274)+'-y:\x20a'+'uto;\x20'+'displ'+_0x1f3059(0x498)+_0x1f3059(0x35a)+_0x1f3059(0x42f)+_0x1f3059(0xcf)+_0x1f3059(0x30f)+_0x1f3059(0x35c)+'s:\x20re'+_0x1f3059(0x687)+'auto-'+'fill,'+_0x1f3059(0xe9)+_0x1f3059(0x2e8)+_0x1f3059(0x10a)+_0x1f3059(0x4d3)+';\x20ali'+_0x1f3059(0x2fd)+_0x1f3059(0xdd)+'start'+';\x20ali'+_0x1f3059(0x337)+_0x1f3059(0x217)+':\x20sta'+_0x1f3059(0x1a2)+'ap:\x201'+'0px;\x20'+_0x1f3059(0x477)+_0x1f3059(0x672)+'\x204px\x20'+'6px\x200'+';\x20}\x0a\x20'+_0x1f3059(0x150)+'n-col'+'s::-w'+'ebkit'+'-scro'+_0x1f3059(0x44c)+_0x1f3059(0x155)+_0x1f3059(0x329)+_0x1f3059(0x49e)+_0x1f3059(0x31f)+_0x1f3059(0x31e)+'cols:'+_0x1f3059(0x692)+'kit-s'+'croll'+_0x1f3059(0x1bd)+'humb\x20'+_0x1f3059(0x3f6)+_0x1f3059(0x1a3)+_0x1f3059(0x26e)+_0x1f3059(0x4d4)+'55,25'+_0x1f3059(0x5e9)+_0x1f3059(0x451)+_0x1f3059(0x647)+_0x1f3059(0x52e)+_0x1f3059(0x1e1)+':\x204px'+_0x1f3059(0x15d)+'\x20\x20\x20.s'+_0x1f3059(0x29b)+_0x1f3059(0x4ea)+_0x1f3059(0x23e)+'-radi'+_0x1f3059(0x11c)+_0x1f3059(0x655)+'backg'+'round'+':\x20rgb'+_0x1f3059(0x4f8)+',255,'+_0x1f3059(0x1f3)+_0x1f3059(0x348)+'\x20box-'+'shado'+_0x1f3059(0x518)+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x1f3059(0x4d4)+_0x1f3059(0x3cb)+_0x1f3059(0x5e9)+_0x1f3059(0x59b)+_0x1f3059(0x15d)+_0x1f3059(0x5be)+_0x1f3059(0x29b)+_0x1f3059(0x48f)+'{\x20bac'+_0x1f3059(0x1a3)+_0x1f3059(0x26e)+'gba(2'+_0x1f3059(0x3cb)+_0x1f3059(0x5e9)+',.04)'+';\x20box'+_0x1f3059(0x4c5)+_0x1f3059(0x3c2)+_0x1f3059(0x180)+_0x1f3059(0x317)+_0x1f3059(0x39a)+'rgba('+'255,1'+_0x1f3059(0x1f5)+'7,.28'+_0x1f3059(0x1c9)+_0x1f3059(0x431)+_0x1f3059(0x573)+_0x1f3059(0x18f)+_0x1f3059(0x2ae)+_0x1f3059(0x509))+('ay:\x20f'+_0x1f3059(0x31a)+'align'+_0x1f3059(0x37c)+'s:\x20ce'+_0x1f3059(0x501)+_0x1f3059(0x372)+_0x1f3059(0x16b)+_0x1f3059(0x271)+_0x1f3059(0x339)+_0x1f3059(0x32a)+_0x1f3059(0x4eb)+_0x1f3059(0x16d)+_0x1f3059(0x146)+'-card'+'-titl'+_0x1f3059(0x2c0)+_0x1f3059(0x219)+'1;\x20mi'+_0x1f3059(0x675)+_0x1f3059(0x569)+_0x1f3059(0x15d)+_0x1f3059(0x5be)+'k-car'+_0x1f3059(0x273)+'le\x20st'+_0x1f3059(0x41a)+_0x1f3059(0x43f)+_0x1f3059(0x333)+_0x1f3059(0x2ba)+_0x1f3059(0x21b)+_0x1f3059(0x610)+'eight'+':\x20600'+';\x20col'+_0x1f3059(0x24f)+_0x1f3059(0x4d4)+'46,23'+_0x1f3059(0x2f1)+_0x1f3059(0x310)+_0x1f3059(0x15d)+'\x20\x20\x20.s'+_0x1f3059(0x29b)+_0x1f3059(0x48f)+_0x1f3059(0x57d)+'ard-t'+'itle\x20'+_0x1f3059(0x535)+_0x1f3059(0x4da)+_0x1f3059(0x4a0)+'\x20#fff'+'0f5;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x1f3059(0x1ca)+'\x20{\x20pa'+'dding'+':\x200\x201'+'2px\x201'+_0x1f3059(0x22c)+_0x1f3059(0x31f)+_0x1f3059(0x5db)+'mdesc'+'\x20{\x20fo'+_0x1f3059(0x50a)+_0x1f3059(0x599)+_0x1f3059(0x4a9)+'opaci'+'ty:\x20.'+'4;\x20ma'+'rgin-'+_0x1f3059(0x434)+_0x1f3059(0x440)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x1f3059(0x10d)+_0x1f3059(0x2ee)+'ispla'+_0x1f3059(0x2f9)+'ex;\x20a'+_0x1f3059(0x4fb)+_0x1f3059(0x3b8)+':\x20cen'+'ter;\x20'+_0x1f3059(0x5e3)+_0x1f3059(0x49e)+_0x1f3059(0x477)+'ng:\x204'+_0x1f3059(0x42e)+_0x1f3059(0x1cf)+_0x1f3059(0x174)+_0x1f3059(0x2b6)+_0x1f3059(0x46f)+_0x1f3059(0x31f)+_0x1f3059(0x5db)+'label'+_0x1f3059(0x662)+'ex:\x201'+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+_0x1f3059(0x2f1)+',.75)'+_0x1f3059(0x15d)+_0x1f3059(0x5be)+_0x1f3059(0x4c3)+'t\x20{\x20d'+'ispla'+_0x1f3059(0x100)+_0x1f3059(0x341)+'font-'+_0x1f3059(0xe2)+_0x1f3059(0x40c)+_0x1f3059(0x468)+'city:'+_0x1f3059(0x660)+_0x1f3059(0x31f)+_0x1f3059(0x5db)+_0x1f3059(0x5ff)+_0x1f3059(0x397)+_0x1f3059(0x12e)+'on:\x20r'+'elati'+'ve;\x20w'+'idth:'+_0x1f3059(0x54f)+_0x1f3059(0x424)+_0x1f3059(0x445)+'14px;'+'\x20bord'+'er:\x200'+';\x20bor'+'der-r'+_0x1f3059(0x1e1)+':\x2099p'+_0x1f3059(0x391)+_0x1f3059(0x661)+_0x1f3059(0x568)+_0x1f3059(0x42a)+_0x1f3059(0x228)+'55,25'+'5,.07'+_0x1f3059(0x51e)+'rsor:'+_0x1f3059(0x611)+_0x1f3059(0x4b8)+_0x1f3059(0x57e)+_0x1f3059(0x35f)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x1f3059(0x62b)+_0x1f3059(0x4e4)+_0x1f3059(0x3f9)+'\x20{\x20co'+'ntent'+_0x1f3059(0x33e)+'\x20posi'+_0x1f3059(0x47f)+_0x1f3059(0x3af)+_0x1f3059(0x691)+_0x1f3059(0x279)+_0x1f3059(0x39e)+_0x1f3059(0x352)+_0x1f3059(0x5d5)+_0x1f3059(0x474)+'th:\x208'+_0x1f3059(0x624)+_0x1f3059(0x153)+':\x208px'+_0x1f3059(0x647)+_0x1f3059(0x52e)+_0x1f3059(0x1e1)+':\x2050%'+';\x20bac'+_0x1f3059(0x1a3)+'nd:\x20r'+'gba(2'+'55,25'+'5,255'+_0x1f3059(0x1e9)+_0x1f3059(0x38c)+'nsiti'+'on:\x20l'+'eft\x20.'+_0x1f3059(0x33a)+_0x1f3059(0x487)+_0x1f3059(0x629)+_0x1f3059(0x4fc)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x1f3059(0x5ff)+_0x1f3059(0x48c)+_0x1f3059(0x5a4)+_0x1f3059(0x385)+_0x1f3059(0x3d6)+_0x1f3059(0x4f0)+_0x1f3059(0x2c5)+'round'+':\x20rgb')+('a(255'+',107,'+_0x1f3059(0x356)+'25);\x20'+'}\x0a\x20\x20\x20'+_0x1f3059(0x5db)+_0x1f3059(0x5ff)+_0x1f3059(0x48c)+_0x1f3059(0x5a4)+'cked='+'\x22true'+_0x1f3059(0x296)+'fter\x20'+_0x1f3059(0x3a8)+_0x1f3059(0x201)+'px;\x20b'+'ackgr'+_0x1f3059(0x656)+_0x1f3059(0x1cc)+'b9d;\x20'+_0x1f3059(0x31f)+_0x1f3059(0x5db)+_0x1f3059(0x176)+_0x1f3059(0x472)+'ckgro'+_0x1f3059(0x568)+'rgba('+'255,2'+'55,25'+_0x1f3059(0x4e3)+_0x1f3059(0x45f)+_0x1f3059(0x23e)+_0x1f3059(0x45a)+'borde'+_0x1f3059(0x5ba)+'ius:\x20'+_0x1f3059(0x5e4)+_0x1f3059(0x3c1)+':\x20#f6'+'eef2;'+_0x1f3059(0x271)+'ing:\x20'+'6px\x209'+'px;\x20f'+'ont-s'+_0x1f3059(0x290)+'11.5p'+'x;\x20ou'+_0x1f3059(0x354)+':\x20non'+'e;\x20bo'+_0x1f3059(0x4a4)+_0x1f3059(0x1fe)+_0x1f3059(0x25c)+'\x200\x200\x20'+_0x1f3059(0x4e8)+'\x20rgba'+'(255,'+'255,2'+_0x1f3059(0x557)+'5);\x20}'+_0x1f3059(0x1df)+_0x1f3059(0x43e)+_0x1f3059(0xee)+'optio'+'n\x20{\x20b'+_0x1f3059(0x487)+'ound:'+_0x1f3059(0x353)+_0x1f3059(0x162)+_0x1f3059(0x31f)+'\x20.sk-'+'range'+_0x1f3059(0x3ce)+_0x1f3059(0x66b)+_0x1f3059(0x572)+'x;\x20al'+_0x1f3059(0x55c)+_0x1f3059(0x549)+_0x1f3059(0x5c7)+_0x1f3059(0x11d)+_0x1f3059(0x2de)+_0x1f3059(0x607)+'\x0a\x20\x20\x20\x20'+'.sk-s'+'lider'+'\x20{\x20-w'+'ebkit'+_0x1f3059(0x293)+_0x1f3059(0x2fc)+'e:\x20no'+'ne;\x20a'+_0x1f3059(0x5f2)+_0x1f3059(0x505)+_0x1f3059(0x35f)+';\x20wid'+_0x1f3059(0x3c4)+_0x1f3059(0x22c)+'heigh'+_0x1f3059(0x13c)+'x;\x20ba'+'ckgro'+_0x1f3059(0x568)+'trans'+_0x1f3059(0x266)+_0x1f3059(0x420)+_0x1f3059(0x431)+'sk-sl'+_0x1f3059(0x3e3)+_0x1f3059(0x692)+'kit-s'+_0x1f3059(0x540)+_0x1f3059(0xd7)+'able-'+'track'+'\x20{\x20he'+'ight:'+'\x202px;'+_0x1f3059(0x3ad)+_0x1f3059(0x34c)+'dius:'+'\x202px;'+_0x1f3059(0x316)+'groun'+_0x1f3059(0x2ab)+_0x1f3059(0x55b)+_0x1f3059(0x466)+_0x1f3059(0x4f6)+_0x1f3059(0x187)+'d,\x20#f'+_0x1f3059(0x3d9)+')\x200\x200'+_0x1f3059(0x425)+'r(--p'+',\x2050%'+')\x20100'+_0x1f3059(0x496)+'repea'+_0x1f3059(0x248)+'ba(25'+_0x1f3059(0x5e9)+',255,'+'.08);'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x1f3059(0x5bb)+_0x1f3059(0x28e)+'webki'+_0x1f3059(0x5b6)+_0x1f3059(0x12c)+_0x1f3059(0x4e9)+'{\x20-we'+_0x1f3059(0x289)+_0x1f3059(0x669)+_0x1f3059(0x51b)+':\x20non'+_0x1f3059(0x287)+_0x1f3059(0x329)+_0x1f3059(0x5e4)+'heigh'+'t:\x206p'+_0x1f3059(0x3a4)+_0x1f3059(0x34b)+_0x1f3059(0x1e7)+'-2px;'+_0x1f3059(0x3ad)+_0x1f3059(0x34c)+_0x1f3059(0x280)+_0x1f3059(0x323)+'\x20back'+_0x1f3059(0x29e)+'d:\x20#f'+_0x1f3059(0x3d9)+_0x1f3059(0x15d)+_0x1f3059(0x5be)+_0x1f3059(0x500)+'\x20{\x20fo'+_0x1f3059(0x50a)+'ze:\x201'+_0x1f3059(0x4a9)+_0x1f3059(0x51f)+_0x1f3059(0x115)+'t:\x2060'+'0;\x20mi'+_0x1f3059(0x675)+'th:\x202'+_0x1f3059(0x49e)+_0x1f3059(0x418)+'align'+_0x1f3059(0x2af)+_0x1f3059(0x670)+_0x1f3059(0x4a0)+_0x1f3059(0x338)+_0x1f3059(0x5b1)+'238,2'+_0x1f3059(0x1f8)+_0x1f3059(0x1c9)+_0x1f3059(0x431)+_0x1f3059(0x1c2)+_0x1f3059(0x4ed))+('\x20widt'+'h:\x2034'+_0x1f3059(0x624)+'eight'+':\x2022p'+_0x1f3059(0x1b2)+'rder:'+'\x200;\x20b'+_0x1f3059(0x23e)+'-radi'+_0x1f3059(0x199)+_0x1f3059(0x3dd)+_0x1f3059(0x487)+_0x1f3059(0x656)+_0x1f3059(0x35f)+_0x1f3059(0x2dd)+_0x1f3059(0x64c)+'\x200;\x20c'+_0x1f3059(0x54a)+_0x1f3059(0x59d)+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x1f3059(0x539)+'\x20{\x20fo'+'nt-si'+_0x1f3059(0x599)+_0x1f3059(0x4a9)+'color'+_0x1f3059(0x61d)+_0x1f3059(0x5fe)+_0x1f3059(0xdf)+_0x1f3059(0x245)+_0x1f3059(0x20e)+_0x1f3059(0x300)+'g:\x202p'+'x\x200;\x20'+_0x1f3059(0x31f)+'\x20.sk-'+'note.'+_0x1f3059(0x47a)+'\x20colo'+_0x1f3059(0x636)+'f7a93'+_0x1f3059(0x15d)+_0x1f3059(0x5be)+_0x1f3059(0x530)+'\x20{\x20al'+_0x1f3059(0x441)+_0x1f3059(0x574)+'flex-'+_0x1f3059(0x197)+';\x20bor'+'der:\x20'+'0;\x20bo'+_0x1f3059(0x4a1)+_0x1f3059(0x620)+'s:\x208p'+_0x1f3059(0x51c)+_0x1f3059(0x5f4)+_0x1f3059(0x53d)+_0x1f3059(0x351)+_0x1f3059(0xf2)+'kgrou'+_0x1f3059(0x4f5)+_0x1f3059(0x187)+'d;\x20co'+'lor:\x20'+'#fff;'+'\x20font'+_0x1f3059(0x174)+_0x1f3059(0x2b6)+'5px;\x20'+_0x1f3059(0x51f)+_0x1f3059(0x115)+_0x1f3059(0x649)+_0x1f3059(0x1ce)+'rsor:'+_0x1f3059(0x611)+_0x1f3059(0x4b8)+_0x1f3059(0x31f)+_0x1f3059(0x5db)+'btn:h'+'over\x20'+_0x1f3059(0x54d)+_0x1f3059(0x52d)+_0x1f3059(0x4bd)+_0x1f3059(0x16e)+_0x1f3059(0x101)+_0x1f3059(0x15d)+_0x1f3059(0x256));window[_0x1f3059(0x679)+'entLi'+'stene'+'r'](_0x2a76d7[_0x1f3059(0x4a6)],_0x2dcad4=>{var _0x2ef0dd=_0x1f3059;_0x102295[_0x2ef0dd(0x2ce)](_0x2dcad4[_0x2ef0dd(0x173)],_0x2ef0dd(0x59f)+'t')&&(_0x102295['ILIFe']('NIXoG',_0x102295[_0x2ef0dd(0x481)])?_0x1d5b08[_0x2ef0dd(0x393)+'dChil'+'d'](_0x24d780):(_0x2dcad4[_0x2ef0dd(0x427)+'ntDef'+'ault'](),_0x406276()));},!![]);var _0x430698=document[_0x1f3059(0x5fb)+_0x1f3059(0x234)+'ent'](_0x2a76d7[_0x1f3059(0x3ed)]);_0x430698[_0x1f3059(0x336)][_0x1f3059(0x2b9)+'xt']=_0x1f3059(0x254)+_0x1f3059(0x369)+_0x1f3059(0x3b0)+_0x1f3059(0x681)+_0x1f3059(0xe7)+_0x1f3059(0xf8)+_0x1f3059(0x4eb)+_0x1f3059(0x260)+_0x1f3059(0x18e)+_0x1f3059(0x5e0)+_0x1f3059(0x250)+'ursor'+':poin'+_0x1f3059(0x53c)+_0x1f3059(0x592)+_0x1f3059(0x1a8)+_0x1f3059(0x122)+_0x1f3059(0x3fb)+_0x1f3059(0x246)+_0x1f3059(0x223)+_0x1f3059(0x1ad)+_0x1f3059(0x31c)+'tion:'+_0x1f3059(0x3b1)+'ty\x200.'+'2s;po'+_0x1f3059(0x67f)+_0x1f3059(0x435)+_0x1f3059(0x37e)+'to;fi'+_0x1f3059(0x635)+'drop-'+_0x1f3059(0x1e3)+'w(0\x200'+_0x1f3059(0x3d8)+'rgba('+'255,1'+'07,15'+'7,0.7'+'))',_0x430698[_0x1f3059(0x140)+_0x1f3059(0x582)]=_0x2a76d7[_0x1f3059(0x495)],_0x430698[_0x1f3059(0x614)]=_0x2a76d7[_0x1f3059(0x485)],_0x430698[_0x1f3059(0x494)+_0x1f3059(0x327)+'er']=()=>_0x430698[_0x1f3059(0x336)]['opaci'+'ty']='1',_0x430698[_0x1f3059(0x494)+'selea'+'ve']=()=>_0x430698[_0x1f3059(0x336)][_0x1f3059(0x3b1)+'ty']=_0x1f3059(0x3f8),_0x430698[_0x1f3059(0x4fd)+'ck']=_0x1f456a=>{var _0x35d9ca=_0x1f3059;_0x1f456a[_0x35d9ca(0x673)+_0x35d9ca(0x5a7)+'ation'](),_0x406276();},document['body']['appen'+_0x1f3059(0x297)+'d'](_0x430698),_0x117d2c(),_0x2a76d7[_0x1f3059(0x5f8)](requestAnimationFrame,_0x5c2cce),console[_0x1f3059(0xd0)](_0x1f3059(0x43a)+_0x1f3059(0x370)+'ur]\x20m'+'enu\x20r'+_0x1f3059(0x430)+'\x20UWMK'+':',_0xb20e22[_0x1f3059(0x214)]);});})()));
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
