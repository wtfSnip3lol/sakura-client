// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.15
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
function _0x203a(_0x221be6,_0x350311){_0x221be6=_0x221be6-(-0x2024*0x1+0x1a26+0x72e);var _0x2ea041=_0x4095();var _0x29b536=_0x2ea041[_0x221be6];if(_0x203a['HksQFb']===undefined){var _0x251111=function(_0x1935d7){var _0x168bc5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2012cd='',_0x4d67dd='';for(var _0x5135ad=0x1*0xa93+0x30+0x227*-0x5,_0x2cbf93,_0x249aa7,_0x51f7c9=-0xffb*0x1+0x13*-0xaf+-0x4d4*-0x6;_0x249aa7=_0x1935d7['charAt'](_0x51f7c9++);~_0x249aa7&&(_0x2cbf93=_0x5135ad%(-0x86b+-0x17d0*-0x1+-0xf61*0x1)?_0x2cbf93*(-0x1*-0x50e+-0x1e54+0x1986)+_0x249aa7:_0x249aa7,_0x5135ad++%(0x1c21*-0x1+-0x3*0x683+-0x17d7*-0x2))?_0x2012cd+=String['fromCharCode'](0x1bb*-0xe+-0xf2*0xb+0x239f&_0x2cbf93>>(-(0x1277*-0x1+0x16c5+-0x2*0x226)*_0x5135ad&0x2b*0x10+0x1462+0x5*-0x49c)):0xce*0x1c+0x1e21+0x11*-0x319){_0x249aa7=_0x168bc5['indexOf'](_0x249aa7);}for(var _0x2e12af=-0x156f+0x47*0x2b+0x982,_0x383fd2=_0x2012cd['length'];_0x2e12af<_0x383fd2;_0x2e12af++){_0x4d67dd+='%'+('00'+_0x2012cd['charCodeAt'](_0x2e12af)['toString'](-0x253c+-0x6b5+-0x1*-0x2c01))['slice'](-(-0x119b*-0x1+-0x2080+0x221*0x7));}return decodeURIComponent(_0x4d67dd);};_0x203a['ZBQFrd']=_0x251111,_0x203a['bdzTuE']={},_0x203a['HksQFb']=!![];}var _0x324d70=_0x2ea041[0x65*-0x3b+-0x2642+0x3b*0x10b],_0x621b46=_0x221be6+_0x324d70,_0xd63a9b=_0x203a['bdzTuE'][_0x621b46];return!_0xd63a9b?(_0x29b536=_0x203a['ZBQFrd'](_0x29b536),_0x203a['bdzTuE'][_0x621b46]=_0x29b536):_0x29b536=_0xd63a9b,_0x29b536;}(function(_0x4dac73,_0x4fc1a3){var _0xa8c09e=_0x203a,_0x522f39=_0x4dac73();while(!![]){try{var _0x516954=-parseInt(_0xa8c09e(0x22f))/(-0x2*-0xd4+-0x6f0+0x1c3*0x3)+-parseInt(_0xa8c09e(0x426))/(-0x115b+0xde1+0xdf*0x4)+parseInt(_0xa8c09e(0x621))/(-0xc36+0x1f54+-0x131b*0x1)+parseInt(_0xa8c09e(0x3e6))/(-0x203e+-0x328*-0xb+0x1e*-0x15)+-parseInt(_0xa8c09e(0x2da))/(-0xc9*0x2+0xcc5+-0xb2e)+parseInt(_0xa8c09e(0x662))/(-0x26e5+0x1*-0x209c+-0x1*-0x4787)+parseInt(_0xa8c09e(0x148))/(0x1336*0x2+-0x17*-0x19+-0x28a4)*(parseInt(_0xa8c09e(0x4a4))/(-0x26ef+0x3dd+-0x1*-0x231a));if(_0x516954===_0x4fc1a3)break;else _0x522f39['push'](_0x522f39['shift']());}catch(_0x10030d){_0x522f39['push'](_0x522f39['shift']());}}}(_0x4095,-0xaf*-0x251e+-0x16c17*-0xb+-0x1b8def),((()=>{'use strict';var _0x270bc9=_0x203a,_0x1aa686={'BaeAS':_0x270bc9(0x602),'Srpmb':function(_0x2a4c49,_0x31035a){return _0x2a4c49===_0x31035a;},'LSVzC':_0x270bc9(0x168),'aCAre':'unkno'+'wn','ZKueO':function(_0x4c6d70,_0x243ff8){return _0x4c6d70+_0x243ff8;},'VNSXj':function(_0x4dc1ff,_0x18b578){return _0x4dc1ff(_0x18b578);},'fYzMD':_0x270bc9(0x140),'ofCtb':function(_0x313eec){return _0x313eec();},'ODctW':_0x270bc9(0x43a)+'n','SjmgM':function(_0x4513f,_0x2ace11){return _0x4513f!==_0x2ace11;},'VRNJF':_0x270bc9(0x370),'iDlCS':_0x270bc9(0x1a2),'OgjTN':'movem'+_0x270bc9(0x603),'eUsBT':function(_0x3759a9,_0x2503d1){return _0x3759a9!==_0x2503d1;},'vgIHA':'chIWP','kPeYZ':_0x270bc9(0x4ab),'HHKiI':_0x270bc9(0x180),'gGbLK':'sk-la'+_0x270bc9(0x3c8),'yJPFj':_0x270bc9(0x413),'RrWgV':_0x270bc9(0x410),'cxpnA':'small','NeYwk':_0x270bc9(0x356)+'nt','SdofA':function(_0x188aab,_0x341ad2){return _0x188aab===_0x341ad2;},'CoCtO':_0x270bc9(0x5eb),'hFONk':_0x270bc9(0x564),'lOJBf':function(_0x3151d0,_0x5ed571,_0x21f847,_0x237ad7){return _0x3151d0(_0x5ed571,_0x21f847,_0x237ad7);},'ERvOU':function(_0x83cdfa,_0x4d9d90){return _0x83cdfa!=_0x4d9d90;},'vblSt':function(_0x336e84,_0x283516,_0x3f8901,_0x40eb40,_0x592d5b){return _0x336e84(_0x283516,_0x3f8901,_0x40eb40,_0x592d5b);},'tmkfp':_0x270bc9(0x326)+_0x270bc9(0x15a)+_0x270bc9(0x137)+_0x270bc9(0x5f0)+'eg\x20fa'+'iled:','yDGZq':function(_0x2d1f0a,_0x260748){return _0x2d1f0a(_0x260748);},'cpJBq':function(_0x4c5f6e,_0x13efcf){return _0x4c5f6e/_0x13efcf;},'lhkMv':function(_0x348c1c,_0x5b8c22){return _0x348c1c(_0x5b8c22);},'OVlbs':function(_0x4a75be,_0x5101d9){return _0x4a75be(_0x5101d9);},'WkMiU':function(_0x28f086,_0x472b92){return _0x28f086!==_0x472b92;},'Nmyzt':'f32','EIsbD':function(_0x325319,_0xc065b,_0x591b9e,_0x5afe4c,_0x3a4730){return _0x325319(_0xc065b,_0x591b9e,_0x5afe4c,_0x3a4730);},'FabME':function(_0x49387d,_0x2d7a83,_0x3a1c07,_0x9e7841,_0x1dfd16){return _0x49387d(_0x2d7a83,_0x3a1c07,_0x9e7841,_0x1dfd16);},'GCBMF':'GbSAl','FHPbB':function(_0x4493b5,_0x17c499,_0x654241,_0x36e36e,_0x49150b){return _0x4493b5(_0x17c499,_0x654241,_0x36e36e,_0x49150b);},'PAggA':function(_0x5b40a7,_0x25b04e,_0x2b8046){return _0x5b40a7(_0x25b04e,_0x2b8046);},'oCeHh':_0x270bc9(0x5a4),'iyQlC':function(_0x4af770,_0x5be48d,_0x26ec8b,_0x16c46,_0x3ca06b){return _0x4af770(_0x5be48d,_0x26ec8b,_0x16c46,_0x3ca06b);},'nVdmy':function(_0x1c6c85,_0x7c92dd,_0xc567d1,_0x2d7ba8,_0x3cf95e){return _0x1c6c85(_0x7c92dd,_0xc567d1,_0x2d7ba8,_0x3cf95e);},'LVoxI':function(_0x4825d0,_0x3c0df5){return _0x4825d0!=_0x3c0df5;},'JytfM':function(_0x4149be,_0x4e8afb){return _0x4149be*_0x4e8afb;},'pNlvb':function(_0x3cef8e,_0x33686f){return _0x3cef8e===_0x33686f;},'AeleB':'vHAJs','wxBGO':'keyup','HKYSi':_0x270bc9(0x232)+'up','bFQXA':function(_0x3b4fff,_0x2ea084){return _0x3b4fff>_0x2ea084;},'tSMrp':_0x270bc9(0x16e)+_0x270bc9(0x150)+'e','fEnnO':function(_0x58ed30,_0x378d2d){return _0x58ed30!==_0x378d2d;},'FdoSU':_0x270bc9(0x643),'BLtFq':'YXOpJ','KdSsz':_0x270bc9(0x3b9),'xkNrT':_0x270bc9(0x5b3)+_0x270bc9(0x250)+_0x270bc9(0x63f)+_0x270bc9(0x655)+_0x270bc9(0x415)+_0x270bc9(0x4f3)+'|12|9'+'|7|11','ENvcu':function(_0x5123d8,_0x247a37){return _0x5123d8+_0x247a37;},'tRPqZ':function(_0x33a09e,_0x3f044b){return _0x33a09e*_0x3f044b;},'IxIkw':_0x270bc9(0x310),'KSgfR':function(_0x56f754,_0x10ccbd){return _0x56f754-_0x10ccbd;},'yPvIW':function(_0xa93aab,_0x50190e){return _0xa93aab/_0x50190e;},'JmPxw':function(_0x1d5350,_0x17503a,_0x2a5dd0,_0x2d9030,_0x3fcfcd,_0x223aa6,_0x5aa9f9){return _0x1d5350(_0x17503a,_0x2a5dd0,_0x2d9030,_0x3fcfcd,_0x223aa6,_0x5aa9f9);},'sAaDo':function(_0x954db6,_0x5773cf,_0x433896,_0x286c1b,_0x441652,_0x53d931,_0x4ae927){return _0x954db6(_0x5773cf,_0x433896,_0x286c1b,_0x441652,_0x53d931,_0x4ae927);},'gvhEy':_0x270bc9(0x487),'tDfxl':function(_0x53c8c4,_0x1b21c9){return _0x53c8c4+_0x1b21c9;},'sHYhn':_0x270bc9(0x690),'XOlbj':function(_0x35789b,_0x40b7db){return _0x35789b+_0x40b7db;},'vwkIq':'mouse'+'1','SFvZs':function(_0x31635f,_0x4d52e7){return _0x31635f(_0x4d52e7);},'hIwwc':function(_0x3caf9a,_0x2dc0e1,_0x563eab,_0x5331ec,_0x1f0f13,_0x33e97e,_0x4cb9fc,_0x1c5385){return _0x3caf9a(_0x2dc0e1,_0x563eab,_0x5331ec,_0x1f0f13,_0x33e97e,_0x4cb9fc,_0x1c5385);},'LtRlw':_0x270bc9(0x30b),'ltOKC':_0x270bc9(0x232)+'3','cksRA':_0x270bc9(0x53a),'FFueb':_0x270bc9(0x4a3)+'9d','tdcEj':function(_0x513153,_0x543725){return _0x513153-_0x543725;},'flUAv':function(_0x5b248e,_0x576b75){return _0x5b248e-_0x576b75;},'uvHFt':function(_0xf73b11,_0x1625e8){return _0xf73b11+_0x1625e8;},'fcBSQ':function(_0x58b363,_0x526530){return _0x58b363+_0x526530;},'mkBkp':function(_0x597cd5,_0x2a77bd){return _0x597cd5+_0x2a77bd;},'UIfgW':_0x270bc9(0x506),'bnqsY':function(_0x102dd3,_0x3c4ce6){return _0x102dd3>=_0x3c4ce6;},'UKyub':function(_0x139ac9){return _0x139ac9();},'VaVMQ':_0x270bc9(0x44b)+_0x270bc9(0x206)+'ed','rfBhK':_0x270bc9(0x5ca)+'n','vmlOG':'--p','KsNcD':_0x270bc9(0x5d6)+_0x270bc9(0x248),'YwsKx':'range','Detkb':'3|0|5'+_0x270bc9(0x3c6)+'1','rkbSP':_0x270bc9(0x447),'OpgYN':_0x270bc9(0x232),'gIhDt':_0x270bc9(0x5b1)+'n','QvSNh':_0x270bc9(0x653),'qhhSC':function(_0x27425e){return _0x27425e();},'NyIXR':_0x270bc9(0x259)+_0x270bc9(0x53f)+_0x270bc9(0x66f)+'paren'+'t','rtwYi':_0x270bc9(0x455),'XXXoH':function(_0x137e9f){return _0x137e9f();},'lhPgS':_0x270bc9(0x479)+'t','azGWX':_0x270bc9(0x3ae),'NyxJJ':_0x270bc9(0x4cc)+_0x270bc9(0x3aa)+_0x270bc9(0x64e)+_0x270bc9(0x4da)+_0x270bc9(0x3ab),'dKfTZ':_0x270bc9(0x23f)+_0x270bc9(0x46d)+_0x270bc9(0x59d),'JCgxJ':function(_0x15ae5b,_0x3426f0){return _0x15ae5b===_0x3426f0;},'qLAKA':'BQaNQ','WBydw':function(_0x2a5e39){return _0x2a5e39();},'iVMaW':_0x270bc9(0x346)+_0x270bc9(0x33a)+_0x270bc9(0x348),'ZYDta':_0x270bc9(0x359)+_0x270bc9(0x555),'xycoD':_0x270bc9(0x532)+'\x20Reco'+_0x270bc9(0x62d)+'ion.T'+_0x270bc9(0x5a6)+'o\x20the'+_0x270bc9(0x4b0)+_0x270bc9(0x1d1)+_0x270bc9(0x3cf)+'\x20neve'+_0x270bc9(0x63a)+'ance.','bsJvP':_0x270bc9(0x164)+'s\x20spr'+'ead\x20a'+_0x270bc9(0x14d)+_0x270bc9(0x2d0)+_0x270bc9(0x5cf)+'cy\x20on'+'\x20your'+_0x270bc9(0x338)+'on\x20ev'+_0x270bc9(0x3d5)+_0x270bc9(0x566),'HUDaI':function(_0x33f05b,_0x3e2e5f,_0x183365,_0x164343,_0xf91442,_0xc0c970){return _0x33f05b(_0x3e2e5f,_0x183365,_0x164343,_0xf91442,_0xc0c970);},'nZkoz':function(_0x50292f,_0x30c7da,_0x3fed3d,_0x389a62,_0x5b4d79,_0x4ec22e){return _0x50292f(_0x30c7da,_0x3fed3d,_0x389a62,_0x5b4d79,_0x4ec22e);},'CdTls':_0x270bc9(0x278)+'loads'+_0x270bc9(0x1c3)+_0x270bc9(0x3a1)+_0x270bc9(0x669)+_0x270bc9(0x366)+_0x270bc9(0x691)+'nt\x20ha'+_0x270bc9(0x18b)+'\x20else'+_0x270bc9(0x386)+'.','IvsGX':_0x270bc9(0x38f)+_0x270bc9(0x57c)+_0x270bc9(0x517),'PbItM':_0x270bc9(0x5f2)+'-hop','MJrnC':_0x270bc9(0x421)+_0x270bc9(0x2b4)+_0x270bc9(0x340)+_0x270bc9(0x2be)+'ce\x20ov'+'erlay'+'.','uuApW':_0x270bc9(0x29a),'dQaCz':function(_0x2085e1,_0x3ad14f){return _0x2085e1(_0x3ad14f);},'sZQak':function(_0x5b278f,_0x184a00,_0x2b5b9a,_0x40073e){return _0x5b278f(_0x184a00,_0x2b5b9a,_0x40073e);},'jtGGf':_0x270bc9(0x4c7)+'my\x20se'+_0x270bc9(0x483)+'s','YUOpf':_0x270bc9(0x1ef),'Xskuz':_0x270bc9(0x29b)+_0x270bc9(0x4c5)+'\x20','eaXTu':'\x20hook'+'s','rzxEb':'nav','oNPFs':'mn-lo'+'go','hGEDG':'mn-ti'+'tles','jcUrN':_0x270bc9(0x399)+'s','iKQhJ':'comba'+'t','nMsJL':_0x270bc9(0x5e5)+'l','PkgyY':_0x270bc9(0x17c)+'l','aQiFG':'safe','tCQwP':_0x270bc9(0x1b7)+'ion:f'+'ixed;'+'top:1'+_0x270bc9(0x39b)+_0x270bc9(0x64b)+'12px;'+_0x270bc9(0x20e)+'ex:21'+'47483'+'646;c'+_0x270bc9(0x20d)+':poin'+_0x270bc9(0x1b9)+_0x270bc9(0x520)+_0x270bc9(0x3ac)+_0x270bc9(0x3fb)+_0x270bc9(0x61a)+'x;opa'+_0x270bc9(0x5a9)+_0x270bc9(0x3fe)+_0x270bc9(0x147)+'tion:'+'opaci'+'ty\x200.'+_0x270bc9(0x1ad)+'inter'+'-even'+'ts:au'+_0x270bc9(0x33c)+_0x270bc9(0x27a)+'drop-'+'shado'+_0x270bc9(0x59e)+'\x204px\x20'+'rgba('+'255,1'+'07,15'+_0x270bc9(0x1c6)+'))','AyAFe':'Sakur'+_0x270bc9(0x34e)+'r','bbZEK':function(_0x6f0b4b){return _0x6f0b4b();},'xJAXi':function(_0x441aef,_0x15b59f){return _0x441aef(_0x15b59f);},'UxnQJ':_0x270bc9(0x326)+_0x270bc9(0x15a)+'ur]\x20m'+_0x270bc9(0x5ff)+'eady.'+'\x20UWMK'+':','ECYQc':_0x270bc9(0x275)+_0x270bc9(0x49c)+'6|1','zJsGO':_0x270bc9(0x13e)+'ve','PFkYu':'Initi'+_0x270bc9(0x306)+_0x270bc9(0x4bd)+'lth','rCDdB':_0x270bc9(0x637),'TGhgN':'Assem'+_0x270bc9(0x557)+'Sharp'+_0x270bc9(0x37e),'QnQpD':_0x270bc9(0x2f3),'mBzLg':function(_0x2c7140,_0x40c410,_0xb743cd,_0x68a7bf,_0x5aa543,_0x349bda,_0x1a3016,_0x28cb11){return _0x2c7140(_0x40c410,_0xb743cd,_0x68a7bf,_0x5aa543,_0x349bda,_0x1a3016,_0x28cb11);},'xJiDZ':_0x270bc9(0x584)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x270bc9(0x42c)](location['hostn'+_0x270bc9(0x30d)]||''))return;if(window['__SAK'+_0x270bc9(0x5c5)+_0x270bc9(0x157)])return;window[_0x270bc9(0x610)+_0x270bc9(0x5c5)+'OUR__']=!![];var _0x303c7f=_0x1aa686[_0x270bc9(0x1bc)],_0xc6c3d8='#ffb3'+'c6',_0x5c3b90={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x270bc9(0x4a3)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x18f8f4={..._0x5c3b90};try{Object['assig'+'n'](_0x18f8f4,JSON['parse'](localStorage[_0x270bc9(0x4a9)+'em'](_0x270bc9(0x346)+'a.kou'+'r.v1')||'{}'));}catch(_0x3f2eee){}function _0x1e7850(){var _0x4126df=_0x270bc9;try{localStorage[_0x4126df(0x4ce)+'em'](_0x4126df(0x346)+_0x4126df(0x33a)+_0x4126df(0x348),JSON[_0x4126df(0x29f)+_0x4126df(0x484)](_0x18f8f4));}catch(_0x4b85fb){}}var _0x2dda20={'uwmk':!!window[_0x270bc9(0x4cc)+'WebMo'+_0x270bc9(0x545)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x18f8f4[_0x270bc9(0x17f)+'ode'],'lastError':''};try{window[_0x270bc9(0x3bb)+_0x270bc9(0x64d)+'stene'+'r'](_0x270bc9(0x2c3),_0x13fdbb=>{var _0x4a1811=_0x270bc9,_0x3122c4={'WipNl':_0x1aa686[_0x4a1811(0x606)]};if(_0x1aa686['Srpmb'](_0x1aa686['LSVzC'],_0x4a1811(0x46f))){var _0x11e9fa=(_0x4a1811(0x463)+'|3|0|'+'4')['split']('|'),_0x3dd0dc=0x847+0x1868+0xae5*-0x3;while(!![]){switch(_0x11e9fa[_0x3dd0dc++]){case'0':_0x548ed6[_0x4a1811(0x24b)+_0x4a1811(0x57b)+'d'](_0x220a44);continue;case'1':var _0x57ad3e=_0x4c01a5[_0x4a1811(0x402)+'eElem'+'ent'](_0x3122c4['WipNl']);continue;case'2':_0x57ad3e['textC'+'onten'+'t']=_0x1853ae;continue;case'3':_0x521c67=_0x3f85b7();continue;case'4':_0x1bbf62(()=>_0x168c26[_0x4a1811(0x582)+'List']['add']('shown'));continue;case'5':_0x24a0f7['appen'+'dChil'+'d'](_0x57ad3e);continue;}break;}}else try{var _0x18cd99=_0x13fdbb&&(_0x13fdbb['messa'+'ge']||_0x13fdbb['error']&&_0x13fdbb[_0x4a1811(0x2c3)][_0x4a1811(0x4b2)+'ge'])||_0x1aa686['aCAre'];if(_0x13fdbb&&_0x13fdbb['filen'+_0x4a1811(0x30d)])_0x18cd99+=_0x1aa686[_0x4a1811(0x5ba)]('\x20@\x20',_0x1aa686[_0x4a1811(0x41a)](String,_0x13fdbb['filen'+'ame'])['split']('/')[_0x4a1811(0x69a)]())+':'+(_0x13fdbb[_0x4a1811(0x289)+'o']||'?');_0x2dda20['lastE'+'rror']=String(_0x18cd99)['slice'](-0x5d8+0x5df+-0x7,-0x216*0xc+0xcbb+0xced);}catch(_0x245909){}});}catch(_0x42df56){}var _0x3503b3=null,_0x27e817=null,_0xc21719={},_0x3eb8c2=[],_0x63e74f=[],_0x70bca9=new Map();function _0x5b337d(_0x2953eb,_0x186c0b){var _0x2aa6b1=_0x270bc9;if(_0x1aa686['fYzMD']==='HekTn'){if(!_0x186c0b||_0x2953eb['inclu'+_0x2aa6b1(0x281)](_0x186c0b)||_0x2953eb[_0x2aa6b1(0x5da)+'h']>0x21*-0x6b+0x101b+-0x18*0x16)return;_0x2953eb[_0x2aa6b1(0x27c)](_0x186c0b);}else{if(_0x2c2bf5[_0x4f34f0]&&_0x25a35a[_0x267611][_0x2aa6b1(0x541)+'ed'])_0x28d2d3++;}}function _0x542bca(_0x2db96f,_0x147ba5,_0x37f96d,_0x546cf3){var _0x4a5ccc=_0x270bc9,_0x4a6808={'fevGe':_0x1aa686[_0x4a5ccc(0x26e)]},_0x2528a6=-0x2*0x137+0x1*0x111e+-0x1d6*0x8;try{_0x1aa686['SjmgM'](_0x1aa686[_0x4a5ccc(0x4ad)],_0x1aa686[_0x4a5ccc(0x396)])?_0x2528a6=_0x147ba5&&_0x147ba5[_0x4a5ccc(0x388)]?_0x147ba5[_0x4a5ccc(0x388)]():0x2*-0x2b1+0x269*-0xd+-0x24b7*-0x1:(_0x2c4e36={..._0x47508b},_0x1aa686[_0x4a5ccc(0x1b5)](_0x54c186),_0x100609[_0x4a5ccc(0x467)+'d']());}catch(_0xd714ac){}if(!_0x2528a6)return;_0x5b337d(_0x2db96f,_0x2528a6),_0x37f96d[_0x546cf3]=_0x2db96f[_0x4a5ccc(0x5da)+'h'];if(_0x1aa686['Srpmb'](_0x546cf3,_0x1aa686[_0x4a5ccc(0x2de)])&&_0x2db96f[_0x4a5ccc(0x5da)+'h']){if(_0x1aa686[_0x4a5ccc(0x26b)](_0x4a5ccc(0x1ab),_0x1aa686[_0x4a5ccc(0x203)])){var _0x12cd8b=_0xc21719[_0x4a5ccc(0x13e)+'ve'];if(_0x12cd8b)try{_0x12cd8b[_0x4a5ccc(0x49d)+'ed']=![];}catch(_0x21e601){}}else{var _0xf32f3=(_0x4a5ccc(0x227)+_0x4a5ccc(0x341)+'2')[_0x4a5ccc(0x5f6)]('|'),_0xea900e=-0xcbc+-0x2525+0x31e1;while(!![]){switch(_0xf32f3[_0xea900e++]){case'0':var _0x1ca266=_0x45d831[_0x4a5ccc(0x402)+_0x4a5ccc(0x507)+'ent']('selec'+'t');continue;case'1':_0x1ca266['oncha'+'nge']=()=>_0xddaa9f(_0x1ca266[_0x4a5ccc(0x23b)]);continue;case'2':return _0x1ca266;case'3':_0x1ca266['value']=_0x201eb5;continue;case'4':for(var [_0x140f5c,_0x3bf04a]of _0x20aca3){var _0x2dbe62=_0x336a83['creat'+'eElem'+_0x4a5ccc(0x3b1)](_0x4a6808['fevGe']);_0x2dbe62['value']=_0x140f5c,_0x2dbe62[_0x4a5ccc(0x2d1)+_0x4a5ccc(0x320)+'t']=_0x3bf04a,_0x1ca266['appen'+_0x4a5ccc(0x57b)+'d'](_0x2dbe62);}continue;case'5':_0x1ca266['class'+_0x4a5ccc(0x198)]=_0x4a5ccc(0x17b)+_0x4a5ccc(0x531);continue;}break;}}}}function _0x222db1(_0x21b5d2,_0xdc04c5,_0x478611){var _0x5ed405=_0x270bc9;if(_0x5ed405(0x4cb)===_0x1aa686[_0x5ed405(0x380)]){var _0x5e5fa5=_0x128119[_0x12cf0f];if(_0x5e5fa5)try{_0x5e5fa5[_0x5ed405(0x49d)+'ed']=!!_0x5f5403;}catch(_0x255814){}}else{var _0x188571=_0x70bca9[_0x5ed405(0x1f9)](_0x21b5d2);if(!_0x188571){if(_0x1aa686['HHKiI']==='uZIFD')_0x188571=new Map(),_0x70bca9[_0x5ed405(0x55d)](_0x21b5d2,_0x188571);else{var _0x45107d=_0x583d57[_0x5ed405(0x143)+_0x5ed405(0x1d9)+'lRati'+'o']||-0x81*0x23+0x18c8+-0x724,_0x397307=_0x52f5e2['inner'+'Width'],_0xd52204=_0x4320ea['inner'+'Heigh'+'t'];if(_0x1aa686[_0x5ed405(0x31b)](_0x397307,_0x1854ff['w'])&&_0x1aa686['Srpmb'](_0xd52204,_0x26b1f3['h'])&&_0x45107d===_0x2c199b[_0x5ed405(0x3fc)])return;_0x5e6814['w']=_0x397307,_0x79c4ce['h']=_0xd52204,_0x1ff061['dpr']=_0x45107d,_0x227705['width']=_0x468fed[_0x5ed405(0x535)](_0x397307*_0x45107d),_0x19ece9[_0x5ed405(0x3fb)+'t']=_0x37ba7b[_0x5ed405(0x535)](_0xd52204*_0x45107d),_0x36e3a1['setTr'+'ansfo'+'rm'](_0x45107d,-0x2587+-0x7a6*0x2+0x34d3,-0x24d9+0x40d*0x6+0xc8b,_0x45107d,0x47d+0x4*0x25d+-0xdf1,0x7*0xf8+-0xd7*0x25+0x184b);}}if(!_0x188571[_0x5ed405(0x352)](_0xdc04c5))try{var _0x544da9=new _0x3503b3(_0x21b5d2)[_0x5ed405(0x5dd)+'ield'](_0xdc04c5,_0x478611);_0x188571[_0x5ed405(0x55d)](_0xdc04c5,_0x1aa686['SjmgM'](_0x544da9,undefined)?_0x544da9[_0x5ed405(0x388)]():null);}catch(_0x3bf3f7){_0x188571[_0x5ed405(0x55d)](_0xdc04c5,null);}return _0x188571[_0x5ed405(0x1f9)](_0xdc04c5);}}function _0x496c79(_0x41af79,_0x1199e3,_0x5ef0fa,_0x945928){var _0x1dba09=_0x270bc9;if(_0x1aa686['SdofA']('UCJHO',_0x1aa686[_0x1dba09(0x39f)]))try{new _0x3503b3(_0x41af79)['write'+_0x1dba09(0x14f)](_0x1199e3,_0x5ef0fa,_0x945928);}catch(_0x51ef67){}else{var _0x2f9c5a=('1|6|3'+_0x1dba09(0x2b5)+'7|5|2')[_0x1dba09(0x5f6)]('|'),_0x3bf033=-0xf88+0x230b+-0x87*0x25;while(!![]){switch(_0x2f9c5a[_0x3bf033++]){case'0':_0x1c07ca[_0x1dba09(0x582)+_0x1dba09(0x198)]=_0x1aa686['gGbLK'];continue;case'1':var _0x5e03f5=_0x5e4df7[_0x1dba09(0x402)+'eElem'+'ent'](_0x1aa686[_0x1dba09(0x68a)]);continue;case'2':return _0x5e03f5;case'3':var _0x1c07ca=_0x53c3a3['creat'+'eElem'+'ent'](_0x1aa686[_0x1dba09(0x34a)]);continue;case'4':_0x1c07ca[_0x1dba09(0x2d1)+'onten'+'t']=_0x2fca5c;continue;case'5':_0x5e03f5['appen'+'d'](_0x1c07ca,_0x2aaeee);continue;case'6':_0x5e03f5[_0x1dba09(0x582)+_0x1dba09(0x198)]='sk-ct'+'l';continue;case'7':if(_0x157bec){var _0x2b5827=_0x1accaf[_0x1dba09(0x402)+'eElem'+_0x1dba09(0x3b1)](_0x1aa686[_0x1dba09(0x5ed)]);_0x2b5827['class'+_0x1dba09(0x198)]=_0x1aa686[_0x1dba09(0x162)],_0x2b5827[_0x1dba09(0x2d1)+'onten'+'t']=_0x8a81d0,_0x1c07ca[_0x1dba09(0x24b)+_0x1dba09(0x57b)+'d'](_0x2b5827);}continue;}break;}}}function _0xe633ba(_0x59b65c,_0x2ec8bd){var _0x27c30e=_0x270bc9;try{var _0x1b07ce=new _0x3503b3(_0x59b65c)[_0x27c30e(0x5dd)+_0x27c30e(0x571)](_0x2ec8bd,_0x1aa686[_0x27c30e(0x25f)]);return _0x1b07ce?_0x1b07ce['val']():-0x5d1*-0x1+-0xb9*0x1+-0x518;}catch(_0xae1091){return-0x30e*0x1+0x17aa+-0x527*0x4;}}function _0x28ab0b(_0x3233d6,_0xbd441,_0x5628a3,_0xba3ec9){var _0x18fd17=_0x270bc9,_0x6b988a=_0x1aa686[_0x18fd17(0x266)](_0x222db1,_0x3233d6,_0xbd441,_0x5628a3);if(_0x1aa686['ERvOU'](_0x6b988a,null))_0x1aa686[_0x18fd17(0x3a7)](_0x496c79,_0x3233d6,_0xbd441,_0x5628a3,_0x6b988a*_0xba3ec9);}function _0x246dc2(_0x4dffc4,_0x51fad8,_0xada181,_0x55bcad,_0x2a3bc6,_0x17e4b0,_0x42f824){var _0x4bf1b8=_0x270bc9;try{var _0x29520e=_0x27e817[_0x4bf1b8(0x15e)+'refix']({'typeName':_0x51fad8,'methodName':_0xada181,'params':_0x55bcad,'returnType':_0x2a3bc6},_0x17e4b0);return _0x29520e['enabl'+'ed']=_0x1aa686[_0x4bf1b8(0x5b5)](_0x42f824,![]),_0xc21719[_0x4dffc4]=_0x29520e,_0x2dda20['hooks'+_0x4bf1b8(0x14c)]++,_0x29520e;}catch(_0x47611c){return console[_0x4bf1b8(0x5d2)](_0x1aa686['tmkfp'],_0x4dffc4,_0x47611c&&_0x47611c['messa'+'ge']),null;}}function _0x18d485(_0x2c0f49,_0x1d8ae3,_0x2799fc,_0x142ce6,_0x436534,_0x59aa65,_0x405504){var _0x56a7ef=_0x270bc9;try{var _0x35ab27=(_0x56a7ef(0x36a)+'|4|3')[_0x56a7ef(0x5f6)]('|'),_0x590511=0x6b6*0x5+0x2ea*-0x9+0x754*-0x1;while(!![]){switch(_0x35ab27[_0x590511++]){case'0':_0xc21719[_0x2c0f49]=_0x8fcfd1;continue;case'1':_0x8fcfd1['enabl'+'ed']=_0x405504!==![];continue;case'2':var _0x8fcfd1=_0x27e817[_0x56a7ef(0x15e)+'ostfi'+'x']({'typeName':_0x1d8ae3,'methodName':_0x2799fc,'params':_0x142ce6,'returnType':_0x436534},_0x59aa65);continue;case'3':return _0x8fcfd1;case'4':_0x2dda20['hooks'+'Total']++;continue;}break;}}catch(_0x21acc8){return console[_0x56a7ef(0x5d2)](_0x56a7ef(0x326)+_0x56a7ef(0x15a)+'ur]\x20h'+'ook\x20r'+_0x56a7ef(0x5cb)+'iled:',_0x2c0f49,_0x21acc8&&_0x21acc8['messa'+'ge']),null;}}var _0x4cee52=()=>![];try{if(window[_0x270bc9(0x4cc)+_0x270bc9(0x3c5)+'dkit']&&!_0x18f8f4[_0x270bc9(0x17f)+'ode']){var _0x36f15b=_0x1aa686[_0x270bc9(0x3cd)]['split']('|'),_0x30f2cd=0x5*-0x2ff+0x13f9+0x4fe*-0x1;while(!![]){switch(_0x36f15b[_0x30f2cd++]){case'0':if(_0x18f8f4[_0x270bc9(0x53b)+_0x270bc9(0x58e)])_0x246dc2(_0x270bc9(0x5fc)+'e','OHeal'+'th','Local'+'Die',[_0x270bc9(0x5a4),_0x1aa686[_0x270bc9(0x32e)],_0x1aa686['oCeHh'],'i32',_0x270bc9(0x5a4)],undefined,_0x4cee52,!!_0x18f8f4[_0x270bc9(0x3f5)]);continue;case'1':if(_0x18f8f4[_0x270bc9(0x596)+_0x270bc9(0x233)+'e'])_0x18d485(_0x1aa686['zJsGO'],'Legio'+_0x270bc9(0x5e1)+_0x270bc9(0x153)+'.Over'+'tide.'+'Movem'+'ent',_0x270bc9(0x4eb)+_0x270bc9(0x5c4),[_0x270bc9(0x5a4)],_0x270bc9(0x5a4),(_0x14e5ea,_0x55bd73)=>{_0x1aa686['vblSt'](_0x542bca,_0x3eb8c2,_0x55bd73,_0x2dda20,_0x1aa686['OgjTN']);},!![]);continue;case'2':if(_0x18f8f4['hookG'+'od'])_0x246dc2('god','OHeal'+'th',_0x1aa686['PFkYu'],[_0x270bc9(0x5a4),'i32'],undefined,_0x4cee52,!!_0x18f8f4[_0x270bc9(0x3f5)]);continue;case'3':_0x3503b3=window[_0x270bc9(0x4cc)+_0x270bc9(0x3c5)+'dkit']['Value'+_0x270bc9(0x1da)+'er'];continue;case'4':_0x27e817=window[_0x270bc9(0x4cc)+_0x270bc9(0x3c5)+_0x270bc9(0x545)][_0x270bc9(0x222)+'me'][_0x270bc9(0x402)+_0x270bc9(0x5c8)+'in']({'name':'Sakur'+'aKour','version':_0x1aa686[_0x270bc9(0x590)],'referencedAssemblies':[_0x1aa686[_0x270bc9(0x142)]]});continue;case'5':if(_0x18f8f4[_0x270bc9(0x4a1)+_0x270bc9(0x423)+'il'])_0x246dc2('noRec'+'oil','Legio'+'nPlat'+_0x270bc9(0x153)+'.Over'+_0x270bc9(0x1a7)+'Recoi'+'lMoti'+'on',_0x1aa686[_0x270bc9(0x3ad)],[_0x270bc9(0x5a4)],undefined,_0x4cee52,!!_0x18f8f4[_0x270bc9(0x3fa)+'oil']);continue;case'6':if(_0x18f8f4[_0x270bc9(0x596)+_0x270bc9(0x233)+'e'])_0x1aa686['mBzLg'](_0x18d485,_0x270bc9(0x632)+_0x270bc9(0x196),'OShoo'+_0x270bc9(0x583),_0x270bc9(0x254)+_0x270bc9(0x304)+_0x270bc9(0x4ba),[_0x270bc9(0x5a4),_0x270bc9(0x5a4)],undefined,(_0x45c9b6,_0x3fde7d)=>{var _0x3a14bd=_0x270bc9;_0x542bca(_0x63e74f,_0x3fde7d,_0x2dda20,_0x3a14bd(0x51a)+'ers');},!![]);continue;}break;}}}catch(_0x586b3f){if(_0x1aa686['xJiDZ']===_0x270bc9(0x584))console['warn'](_0x270bc9(0x326)+_0x270bc9(0x15a)+'ur]\x20U'+_0x270bc9(0x478)+_0x270bc9(0x276)+_0x270bc9(0x47e)+':',_0x586b3f&&_0x586b3f['messa'+'ge']);else{_0x504c11=_0xc8af94;if(!_0x59d6bc){var _0x11913d=_0x1837bb['creat'+_0x270bc9(0x507)+_0x270bc9(0x3b1)](_0x270bc9(0x602));_0x11913d['textC'+'onten'+'t']=_0x5343ab,_0xd9c052['appen'+_0x270bc9(0x57b)+'d'](_0x11913d),_0x5e0e83=_0x24e321(),_0x2b025d[_0x270bc9(0x24b)+_0x270bc9(0x57b)+'d'](_0x2aa2be),_0x1aa686['yDGZq'](_0x11b04c,()=>_0x1936ed[_0x270bc9(0x582)+_0x270bc9(0x55b)][_0x270bc9(0x4fd)](_0x270bc9(0x221)));}_0x105fdd[_0x270bc9(0x582)+'List'][_0x270bc9(0x4c2)+'e']('shown',_0x166588);}}function _0x35cba8(_0x3c46a6,_0x4ae56b){var _0x3f0a20=_0xc21719[_0x3c46a6];if(_0x3f0a20)try{_0x3f0a20['enabl'+'ed']=!!_0x4ae56b;}catch(_0x4c16ee){}}_0x1aa686[_0x270bc9(0x2a8)](setInterval,()=>{var _0x3731e4=_0x270bc9;if(!_0x3503b3||!window['unity'+_0x3731e4(0x630)+_0x3731e4(0x199)])return;var _0x6e2f46=(Number(_0x18f8f4[_0x3731e4(0x435)+_0x3731e4(0x2c7)])||-0x1fd3*0x1+-0x55e+0x2595)/(-0x2*0x10f3+0x5c1+0x1c89*0x1),_0xefbe53=_0x1aa686[_0x3731e4(0x381)](_0x1aa686[_0x3731e4(0x67d)](Number,_0x18f8f4[_0x3731e4(0x4ea)+'ct'])||0x6*-0x47e+-0x163e+0x3196,-0x508+0x11e6+-0x1*0xc7a),_0x22319d=_0x1aa686['cpJBq'](_0x1aa686[_0x3731e4(0x318)](Number,_0x18f8f4['gravi'+_0x3731e4(0x605)])||0xcbf+-0x26d2*0x1+0x1a77,0x1a67+-0x1a*0x161+0x9d7),_0x3de4cf=Math['max'](0x1c79*0x1+-0x11*0x1ed+0x445,_0x1aa686[_0x3731e4(0x5dc)](Number,_0x18f8f4['damag'+_0x3731e4(0x45c)+'e'])||-0xba9*0x1+0x1c32+-0x3*0x551),_0x16ce03=_0x1aa686[_0x3731e4(0x249)](_0x6e2f46,0x3*0x170+0x10d5+-0x1524)||_0x1aa686[_0x3731e4(0x5b5)](_0xefbe53,0x1b50+0x1a98+-0x35e7)||_0x22319d!==-0x2317+0x1955+0x9c3||_0x18f8f4[_0x3731e4(0x2d9)],_0x913d07=_0x18f8f4[_0x3731e4(0x3e7)+_0x3731e4(0x312)]||_0x18f8f4[_0x3731e4(0x509)+_0x3731e4(0x4e4)]||_0x18f8f4[_0x3731e4(0x68e)+'moExp']||_0x18f8f4['rapid'+_0x3731e4(0x429)];if(!_0x16ce03&&!_0x913d07)return;try{for(var _0x5511c1=0x12*0x175+-0xbf1+-0x35*0x45;_0x5511c1<_0x3eb8c2[_0x3731e4(0x5da)+'h'];_0x5511c1++){var _0x728c39=_0x3eb8c2[_0x5511c1];if(!_0x728c39)continue;_0x6e2f46!==-0x15a*-0x7+0x1da*-0x3+-0x3e7&&(_0x28ab0b(_0x728c39,-0x13d*0x13+-0x14f8+0x2ca7,'f32',_0x6e2f46),_0x28ab0b(_0x728c39,0x1384+-0x2103+-0x1*-0xdab,_0x1aa686['Nmyzt'],_0x6e2f46),_0x1aa686['vblSt'](_0x28ab0b,_0x728c39,-0xa7c+-0x9e*-0xb+0x3e2,_0x3731e4(0x207),_0x6e2f46),_0x1aa686[_0x3731e4(0x208)](_0x28ab0b,_0x728c39,0x1296+-0x1bb6+0x954,'f32',_0x6e2f46),_0x1aa686['FabME'](_0x28ab0b,_0x728c39,-0x1a11+0xdc1+0xc6c,_0x3731e4(0x207),_0x6e2f46),_0x28ab0b(_0x728c39,0x2c5*0x1+-0x2*-0x76+0xb*-0x53,_0x3731e4(0x207),_0x6e2f46));if(_0xefbe53!==-0x158d+-0x3*-0x77f+-0xef)_0x28ab0b(_0x728c39,-0xf*0x76+-0x8fe+0x1038,_0x3731e4(0x207),_0xefbe53);_0x1aa686[_0x3731e4(0x5b5)](_0x22319d,0x2*-0xee8+-0x212*-0x10+0x4d*-0xb)&&(_0x1aa686['GCBMF']!==_0x1aa686[_0x3731e4(0x49b)]?_0x2d9a76[_0x3731e4(0x49d)+'ed']=!!_0x1af54e:(_0x1aa686[_0x3731e4(0x208)](_0x28ab0b,_0x728c39,-0x3b6*0x1+0x1d0*-0x12+-0x2*-0x124f,_0x3731e4(0x207),_0x22319d),_0x1aa686[_0x3731e4(0x1ca)](_0x28ab0b,_0x728c39,0x737*0x1+0x7*-0x171+0x74*0x7,_0x3731e4(0x207),_0x22319d)));if(_0x18f8f4['bhop'])_0x496c79(_0x728c39,-0x157*-0x1b+0x20f0+-0x4481,_0x1aa686[_0x3731e4(0x296)],-(-0x1*-0x92b+0x1d*-0x14e+0x2092));}}catch(_0x598578){}try{for(var _0x5c7bf8=0x1021*-0x1+-0x2232+-0xd*-0x3df;_0x5c7bf8<_0x63e74f[_0x3731e4(0x5da)+'h'];_0x5c7bf8++){var _0x3455df=_0x1aa686[_0x3731e4(0x2a8)](_0xe633ba,_0x63e74f[_0x5c7bf8],-0x1f24+-0x6f7*0x4+-0x1*-0x3b38);if(!_0x3455df)continue;_0x18f8f4[_0x3731e4(0x509)+_0x3731e4(0x4e4)]&&(_0x496c79(_0x3455df,0x1e5*0x2+-0x1e55+0x1ad7,_0x1aa686['oCeHh'],_0x3de4cf),_0x496c79(_0x3455df,0x3*0x109+0x14ca+0x1*-0x1791,_0x3731e4(0x5a4),_0x3de4cf));_0x18f8f4[_0x3731e4(0x3e7)+'ead']&&(_0x1aa686[_0x3731e4(0x1ca)](_0x496c79,_0x3455df,0x1*-0x1cb9+-0x1*-0x1a8+-0x2d*-0x9d,_0x3731e4(0x207),0x14ff+0x2b*0x77+-0x7a*0x56),_0x1aa686[_0x3731e4(0x612)](_0x496c79,_0x3455df,-0x4d9+-0x1*-0xad5+-0x2*0x2ca,'f32',0x62c+-0x3*0x2eb+0x296));if(_0x18f8f4[_0x3731e4(0x68e)+'moExp'])_0x1aa686['iyQlC'](_0x496c79,_0x3455df,-0x2*0xb39+0xfd*0x13+0x407,_0x3731e4(0x5a4),-0x1*0x1861+0x917+0x1*0x1331);_0x18f8f4['rapid'+_0x3731e4(0x429)]&&(_0x28ab0b(_0x3455df,-0x88b*0x1+0x14e6+0x1*-0xbcf,_0x1aa686['Nmyzt'],0x54e+0x2054+0x1*-0x25a2+0.1),_0x1aa686[_0x3731e4(0x18e)](_0x496c79,_0x3455df,-0x5*0x4f9+-0x4*-0x641+0x39*0x1,_0x3731e4(0x207),0x4f3*-0x4+0x20f2+0x6*-0x231+0.1));}}catch(_0xb50bf1){}},0x1*0x14db+0x1*-0x247f+0x836*0x2),setInterval(()=>{var _0x427b5c=_0x270bc9;_0x2dda20[_0x427b5c(0x23d)+_0x427b5c(0x18d)]=!!window[_0x427b5c(0x324)+_0x427b5c(0x630)+'nce'];try{if(_0x1aa686['SdofA'](_0x427b5c(0x681),_0x427b5c(0x461))){var _0x190129=_0x45c8b1(_0x4ae17b,_0x13cc8a,_0x2c28a3);if(_0x1aa686['LVoxI'](_0x190129,null))_0x314c16(_0x314707,_0x1ccff0,_0x386518,_0x1aa686[_0x427b5c(0x4ef)](_0x190129,_0x4bd8ab));}else{var _0x1f0f18=0x1740+-0x13b0+-0x10*0x39;for(var _0x3b3af2 in _0xc21719){if(_0xc21719[_0x3b3af2]&&_0xc21719[_0x3b3af2][_0x427b5c(0x541)+'ed'])_0x1f0f18++;}_0x2dda20[_0x427b5c(0x151)+'Ok']=_0x1f0f18;}}catch(_0x2440f9){}},0x14a2+0x1*0x24b1+-0x356b);var _0x49ff0e=new Set(),_0x335d61={0x1:[],0x3:[]},_0x1fd5cb=![];function _0xa61966(_0x156e59){var _0x5a55f1=_0x270bc9;_0x49ff0e['add'](_0x156e59[_0x5a55f1(0x539)]);}function _0x53113c(_0x107907){var _0x556b72=_0x270bc9;_0x49ff0e['delet'+'e'](_0x107907[_0x556b72(0x539)]);}function _0x55e8df(_0x53b6f2){var _0x16e820=_0x270bc9;if(_0x16e820(0x65b)!=='XvxdY'){if(_0x53b6f2[_0x16e820(0x2d8)+_0x16e820(0x627)])return;_0x49ff0e[_0x16e820(0x4fd)](_0x1aa686[_0x16e820(0x5ba)](_0x16e820(0x232),_0x1aa686[_0x16e820(0x5ba)](_0x53b6f2[_0x16e820(0x5ca)+'n'],0x1c06+-0xeec*-0x2+0x1*-0x39dd)));var _0x4e8383=_0x335d61[_0x53b6f2[_0x16e820(0x5ca)+'n']+(0x2127+-0xe9e+-0x1288)];if(_0x4e8383){_0x4e8383[_0x16e820(0x27c)](performance[_0x16e820(0x622)]());if(_0x4e8383[_0x16e820(0x5da)+'h']>-0x1*-0x1e2d+-0xe8+-0x1d1d)_0x4e8383['shift']();}}else _0xde0556=_0x414b99&&_0x1bcfa1['val']?_0x2c1cf6[_0x16e820(0x388)]():-0x1*0x5ff+0x977*0x2+-0xcef;}function _0x48377a(_0x535dc6){var _0x2a01d=_0x270bc9;if(!_0x535dc6['__sak'+'ura'])_0x49ff0e['delet'+'e'](_0x1aa686[_0x2a01d(0x5ba)](_0x2a01d(0x232),_0x535dc6[_0x2a01d(0x5ca)+'n']+(0x1319+0x2253+-0x223*0x19)));}function _0x19a47f(){_0x49ff0e['clear']();}function _0x85285b(){var _0xc964d2=_0x270bc9;if(_0xc964d2(0x360)!==_0x1aa686[_0xc964d2(0x1e9)])_0x1aa686[_0xc964d2(0x646)](_0x154457['code'],_0xc964d2(0x67a)+'t')&&(_0x5c7c32['preve'+'ntDef'+_0xc964d2(0x187)](),_0x1aa686[_0xc964d2(0x1b5)](_0x3a3718));else{if(_0x1fd5cb)return;_0x1fd5cb=!![],window[_0xc964d2(0x3bb)+'entLi'+'stene'+'r']('keydo'+'wn',_0xa61966,!![]),window[_0xc964d2(0x3bb)+'entLi'+'stene'+'r'](_0x1aa686[_0xc964d2(0x5ae)],_0x53113c,!![]),window[_0xc964d2(0x3bb)+'entLi'+'stene'+'r']('mouse'+_0xc964d2(0x1c7),_0x55e8df,!![]),window[_0xc964d2(0x3bb)+_0xc964d2(0x64d)+'stene'+'r'](_0x1aa686[_0xc964d2(0x667)],_0x48377a,!![]),window[_0xc964d2(0x3bb)+_0xc964d2(0x64d)+_0xc964d2(0x5bc)+'r']('blur',_0x19a47f);}}function _0x5007c0(_0x56f55b){var _0x5d2805=_0x270bc9,_0x5dff77=_0x335d61[_0x56f55b]||[],_0x5161fe=performance['now']();while(_0x5dff77[_0x5d2805(0x5da)+'h']&&_0x1aa686['bFQXA'](_0x5161fe-_0x5dff77[-0xe3e*-0x2+0x1ed5+-0x3b51],-0x245c+-0x2529+0x19cf*0x3))_0x5dff77['shift']();return _0x5dff77[_0x5d2805(0x5da)+'h'];}function _0x1f97a5(_0x5ecd81){var _0x3637e3=_0x270bc9;if(document[_0x3637e3(0x24c)]&&(document['ready'+'State']===_0x1aa686[_0x3637e3(0x4d2)]||document['ready'+'State']==='compl'+_0x3637e3(0x2ad)))_0x5ecd81();else document['addEv'+'entLi'+'stene'+'r']('DOMCo'+_0x3637e3(0x4f8)+'Loade'+'d',_0x5ecd81,{'once':!![]});}_0x1f97a5(()=>{var _0x9b22f1=_0x270bc9,_0x3aae90={'QWnZw':_0x1aa686[_0x9b22f1(0x44c)],'yCggS':_0x9b22f1(0x259)+_0x9b22f1(0x3ec)+_0x9b22f1(0x4a5)+_0x9b22f1(0x4e1)+'nt','HXalm':function(_0x1f255c,_0x43dc03){return _0x1f255c===_0x43dc03;},'idcYU':_0x1aa686[_0x9b22f1(0x40b)],'qlPkJ':'none','gicrw':function(_0x4d57f3){return _0x1aa686['XXXoH'](_0x4d57f3);},'dJNeX':function(_0x237b1a,_0x19b393){return _0x237b1a===_0x19b393;},'QlqSL':function(_0xfa10c1,_0x1de7d9){return _0xfa10c1*_0x1de7d9;},'ClenG':_0x9b22f1(0x598)+_0x9b22f1(0x163),'GeSkY':_0x9b22f1(0x326)+_0x9b22f1(0x15a)+'ur]\x20h'+'ook\x20r'+_0x9b22f1(0x5cb)+_0x9b22f1(0x152),'xpdEe':function(_0x38baf0,_0x39e2b7){return _0x38baf0(_0x39e2b7);},'hztTS':_0x1aa686['lhPgS'],'CIlJJ':_0x1aa686[_0x9b22f1(0x68a)],'WoFzx':_0x9b22f1(0x5aa),'JpZih':'cHNPm','EkqFo':_0x9b22f1(0x656),'IkICp':_0x9b22f1(0x5ad)+'rd','ujZJP':_0x9b22f1(0x291)+'g','pWxEl':_0x9b22f1(0x5d5)+'|6|1|'+_0x9b22f1(0x59f),'gZirZ':'sk-mb'+_0x9b22f1(0x2fc),'pDqGa':_0x9b22f1(0x3eb)+_0x9b22f1(0x511),'pFLYN':function(_0x58485a,_0x16cef2,_0x19a44e,_0x44a8ce,_0x1bae5d){return _0x58485a(_0x16cef2,_0x19a44e,_0x44a8ce,_0x1bae5d);},'ZHNXD':'shoot'+'ers','UPbxE':_0x1aa686[_0x9b22f1(0x3e5)],'ZzPAt':_0x1aa686['NyxJJ'],'PWoEO':'lWdZb','LMQaq':function(_0xc3796b,_0x21a36d){return _0xc3796b+_0x21a36d;},'yEOhj':function(_0x2c3237,_0x52d8f4){return _0x2c3237+_0x52d8f4;},'waaAL':'loadi'+'ng','zeXtF':'\x20|\x20sh'+_0x9b22f1(0x196)+'\x20','ZwEom':'held','nprKV':'\x20|\x20ER'+_0x9b22f1(0x5b0),'ZpTtE':'Statu'+'s','wRzjv':_0x1aa686['dKfTZ'],'jeMfG':function(_0x5990c7,_0x2b18eb){return _0x1aa686['fEnnO'](_0x5990c7,_0x2b18eb);},'Cvsvb':'eiBUT','ihrqg':'VExLT','XBAsH':function(_0xc692b4){var _0x37cf1a=_0x9b22f1;return _0x1aa686[_0x37cf1a(0x1b5)](_0xc692b4);},'nySgy':function(_0x3ad29d,_0x560b79){return _0x1aa686['JCgxJ'](_0x3ad29d,_0x560b79);},'tTsVP':function(_0x27ee30){return _0x27ee30();},'VpJTy':_0x1aa686[_0x9b22f1(0x384)],'OeGeE':function(_0x4ad6f6){var _0x9bcdf1=_0x9b22f1;return _0x1aa686[_0x9bcdf1(0x3b2)](_0x4ad6f6);},'Roqjg':function(_0xc8bcaa,_0x2144c6){return _0xc8bcaa>_0x2144c6;},'hlfpN':function(_0x1ba8c5,_0xf04d77){return _0x1ba8c5/_0xf04d77;},'iHkeV':function(_0x25f287,_0x26acbb){return _0x25f287===_0x26acbb;},'PkBgx':_0x9b22f1(0x1c1),'NcXev':_0x1aa686[_0x9b22f1(0x22a)],'NZtDr':_0x1aa686[_0x9b22f1(0x32c)],'LrPkl':_0x1aa686['ZYDta'],'ZHDXj':_0x1aa686[_0x9b22f1(0x54f)],'zBHrI':function(_0x4dd257,_0x427960,_0x2fa8fb,_0x282abe,_0x24e8d3,_0x2fd774){return _0x4dd257(_0x427960,_0x2fa8fb,_0x282abe,_0x24e8d3,_0x2fd774);},'rcVUo':_0x1aa686['bsJvP'],'esxKP':function(_0x15a51b,_0x55f08f,_0x368e65,_0x16ec9d,_0x102724,_0x27420c){var _0x5415ca=_0x9b22f1;return _0x1aa686[_0x5415ca(0x498)](_0x15a51b,_0x55f08f,_0x368e65,_0x16ec9d,_0x102724,_0x27420c);},'QKrFT':'Scale'+'s\x20Ove'+'rtide'+_0x9b22f1(0x556)+_0x9b22f1(0x3f1)+'eRate'+'\x20to\x201'+_0x9b22f1(0x217)+_0x9b22f1(0x1e0)+_0x9b22f1(0x580)+'still'+_0x9b22f1(0x183)+_0x9b22f1(0x41e)+'s.','IDhbA':'Damag'+_0x9b22f1(0x67b)+'P]','oScBn':'Overw'+'rites'+'\x20Over'+_0x9b22f1(0x135)+'eapon'+_0x9b22f1(0x59c)+'ge.\x20B'+_0x9b22f1(0x5f7)+'le\x20if'+'\x20the\x20'+_0x9b22f1(0x515)+'r\x20val'+_0x9b22f1(0x42f)+'s.','FbuMY':function(_0x387a8d,_0x33728c,_0x11e7b9,_0x2e12a3,_0x4afbe5,_0x4caf1b){var _0x52e6c4=_0x9b22f1;return _0x1aa686[_0x52e6c4(0x3cb)](_0x387a8d,_0x33728c,_0x11e7b9,_0x2e12a3,_0x4afbe5,_0x4caf1b);},'dMTYw':'Refil'+'ls\x20th'+_0x9b22f1(0x393)+_0x9b22f1(0x2b8)+_0x9b22f1(0x625)+'ed\x20am'+_0x9b22f1(0x189)+_0x9b22f1(0x263)+'every'+'\x20200m'+'s.','mXQGX':_0x1aa686['CdTls'],'wHYgb':function(_0x2a4e93,_0x4a5c3a,_0x2b3559,_0x126094,_0x2461dd,_0x2bd867){return _0x2a4e93(_0x4a5c3a,_0x2b3559,_0x126094,_0x2461dd,_0x2bd867);},'wvFyS':_0x9b22f1(0x698),'bhwiY':function(_0x69e48,_0x58e8a9,_0x4e08e6,_0x3577b6){var _0x5ece9d=_0x9b22f1;return _0x1aa686[_0x5ece9d(0x266)](_0x69e48,_0x58e8a9,_0x4e08e6,_0x3577b6);},'oLakl':'Speed'+'\x20%','JobUG':_0x1aa686['IvsGX'],'KFdge':function(_0x5a868f,_0x34f0f1,_0x271f5e,_0x399d8a,_0x123394,_0x4dde06){return _0x5a868f(_0x34f0f1,_0x271f5e,_0x399d8a,_0x123394,_0x4dde06);},'HRTiX':_0x1aa686[_0x9b22f1(0x3ba)],'eJGdd':_0x9b22f1(0x164)+_0x9b22f1(0x3a0)+_0x9b22f1(0x2a9)+_0x9b22f1(0x574)+'JumpT'+_0x9b22f1(0x4a0)+'o\x20the'+'\x20jump'+_0x9b22f1(0x634)+'down\x20'+'never'+'\x20appl'+'ies.','eImop':_0x1aa686['MJrnC'],'qVCgS':function(_0x42b277,_0x2ceee2,_0x110d88,_0x8b60a7){return _0x42b277(_0x2ceee2,_0x110d88,_0x8b60a7);},'MqDFH':function(_0x5cc039,_0x17bbd2,_0x15c739,_0x8e7c59,_0x460558,_0x5e31f3){return _0x5cc039(_0x17bbd2,_0x15c739,_0x8e7c59,_0x460558,_0x5e31f3);},'moxbM':_0x9b22f1(0x523)+_0x9b22f1(0x347),'yLGfD':'Size','uJoxG':function(_0x36e510,_0x5f381c,_0x387c2,_0x4179be){return _0x1aa686['lOJBf'](_0x36e510,_0x5f381c,_0x387c2,_0x4179be);},'hahQa':_0x9b22f1(0x26a)+'ounte'+'r','AbieC':function(_0x4befed,_0xfb8e54,_0x2ddf19){return _0x4befed(_0xfb8e54,_0x2ddf19);},'JcoJr':_0x9b22f1(0x34d)+_0x9b22f1(0x491)+_0x9b22f1(0x3bd)+_0x9b22f1(0x1b2)+_0x9b22f1(0x138)+_0x9b22f1(0x675)+'as\x20no'+_0x9b22f1(0x361)+_0x9b22f1(0x197)+'ePlay'+_0x9b22f1(0x3a5)+_0x9b22f1(0x1a3)+'gybac'+'k\x20on.','rbtPW':function(_0x5b66c1,_0x11d957){var _0x17dd40=_0x9b22f1;return _0x1aa686[_0x17dd40(0x680)](_0x5b66c1,_0x11d957);},'VjvII':_0x1aa686[_0x9b22f1(0x52a)],'vGeEN':_0x9b22f1(0x1d8)+'\x20kour'+_0x9b22f1(0x174)+'\x20bann'+'er\x20sl'+_0x9b22f1(0x2d5),'CdAtf':function(_0x1695ee,_0x5e8343){return _0x1aa686['dQaCz'](_0x1695ee,_0x5e8343);},'ZHbJE':_0x9b22f1(0x51f)+_0x9b22f1(0x3ff)+_0x9b22f1(0x57d)+_0x9b22f1(0x2b6),'kXNQs':function(_0x2937f3,_0x47a796,_0x213940){return _0x1aa686['PAggA'](_0x2937f3,_0x47a796,_0x213940);},'CCHOL':function(_0x2fe4e2,_0x50f8bc,_0x5ce949,_0x3f734a){var _0x51f1ca=_0x9b22f1;return _0x1aa686[_0x51f1ca(0x52b)](_0x2fe4e2,_0x50f8bc,_0x5ce949,_0x3f734a);},'RkYhR':_0x1aa686[_0x9b22f1(0x4dd)],'nkPAM':function(_0x73c0f6){return _0x73c0f6();},'BYXJF':'f32','lfkeD':function(_0x3cd34f,_0x3f4503){return _0x3cd34f!==_0x3f4503;},'NHPYx':_0x1aa686[_0x9b22f1(0x3e3)],'kvwkU':_0x9b22f1(0x602),'UxsMY':_0x9b22f1(0x5c0),'lhJfl':function(_0x5b58f7,_0xe3edc8){return _0x5b58f7===_0xe3edc8;},'GbqYb':_0x1aa686[_0x9b22f1(0x559)],'wJNao':_0x1aa686[_0x9b22f1(0x43d)],'VSLtD':_0x1aa686[_0x9b22f1(0x676)],'OofAr':_0x9b22f1(0x682)+'de','KjbCc':_0x1aa686[_0x9b22f1(0x417)],'DRRbh':_0x9b22f1(0x2b1)+_0x9b22f1(0x4c3)+'ox=\x220'+_0x9b22f1(0x285)+_0x9b22f1(0x2cc)+_0x9b22f1(0x582)+'=\x22mn-'+'logo-'+_0x9b22f1(0x678)+_0x9b22f1(0x4f9)+'\x20d=\x22M'+'12\x2021'+_0x9b22f1(0x650)+'-2.5-'+_0x9b22f1(0x5e4)+'-4-7.'+_0x9b22f1(0x327)+_0x9b22f1(0x403)+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x9b22f1(0x56d)+_0x9b22f1(0x246)+_0x9b22f1(0x2ce)+'5-4\x207'+'.5z\x22\x20'+'fill='+'\x22none'+_0x9b22f1(0x2ab)+_0x9b22f1(0x33f)+_0x9b22f1(0x4a3)+'9d\x22\x20s'+'troke'+_0x9b22f1(0x2ae)+_0x9b22f1(0x299)+_0x9b22f1(0x5d8)+'ke-li'+_0x9b22f1(0x2a2)+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+'join='+_0x9b22f1(0x176)+_0x9b22f1(0x286)+'circl'+'e\x20cx='+_0x9b22f1(0x575)+'cy=\x221'+_0x9b22f1(0x5fe)+'\x221.5\x22'+_0x9b22f1(0x1ac)+_0x9b22f1(0x43f)+'6b9d\x22'+'/></s'+'vg>','qWLya':_0x9b22f1(0x2fe)+'r','YyXgY':_0x1aa686[_0x9b22f1(0x244)],'nSeNr':_0x9b22f1(0x4b7),'Pbtpz':_0x1aa686[_0x9b22f1(0x336)],'sRtbp':_0x9b22f1(0x53d)+'ose','eNrlv':_0x9b22f1(0x2b1)+_0x9b22f1(0x4c3)+_0x9b22f1(0x45f)+_0x9b22f1(0x285)+_0x9b22f1(0x170)+'<path'+_0x9b22f1(0x31c)+_0x9b22f1(0x3db)+_0x9b22f1(0x2bb)+_0x9b22f1(0x4c0)+'6\x2018\x22'+_0x9b22f1(0x62b)+_0x9b22f1(0x2f4),'crfsm':'comba'+'t','SfwtM':function(_0x16fa86,_0x3b3a20,_0x381a70){return _0x16fa86(_0x3b3a20,_0x381a70);},'AIUgr':function(_0x59b5d8,_0x26c65e){return _0x59b5d8===_0x26c65e;},'PBVUc':_0x9b22f1(0x67a)+'t'};_0x18f8f4[_0x9b22f1(0x3ea)+'ck']&&setInterval(()=>{var _0x3dbb52=_0x9b22f1;try{for(var _0x42ddc0 of[_0x3dbb52(0x259)+_0x3dbb52(0x3ec)+_0x3dbb52(0x61d)+_0x3dbb52(0x4e1)+'nt',_0x3aae90[_0x3dbb52(0x60c)],_0x3aae90[_0x3dbb52(0x654)],_0x3dbb52(0x400)+'creen'+'-banr'+'s']){var _0x2946fb=document['getEl'+'ement'+_0x3dbb52(0x13a)](_0x42ddc0);if(_0x2946fb&&_0x3aae90[_0x3dbb52(0x4a6)](_0x42ddc0,_0x3dbb52(0x400)+_0x3dbb52(0x412)+'-banr'+'s')){if(_0x3aae90[_0x3dbb52(0x696)]===_0x3dbb52(0x455)){var _0x534033=_0x2946fb['child'+_0x3dbb52(0x17a)];for(var _0x5b11d0=-0x7*-0x1a0+0x2*-0x12c8+0x1*0x1a30;_0x5b11d0<_0x534033[_0x3dbb52(0x5da)+'h'];_0x5b11d0++){if(_0x534033[_0x5b11d0]['id']&&_0x3aae90[_0x3dbb52(0x4a6)](_0x534033[_0x5b11d0]['id'][_0x3dbb52(0x4d1)+'Of']('kour-'+_0x3dbb52(0x3d8)),0x7af+0x1359+-0x1b08))_0x534033[_0x5b11d0]['style'][_0x3dbb52(0x66d)+'ay']=_0x3aae90[_0x3dbb52(0x4d5)];}}else _0x5ed1ae[_0x3dbb52(0x191)]=_0x7b4a97,_0x277234();}else{if(_0x2946fb)_0x2946fb[_0x3dbb52(0x602)]['displ'+'ay']='none';}}}catch(_0x25f419){}},0x1*0x92b+-0x2*-0xef9+-0x1f4d);var _0x4e087b=document['creat'+_0x9b22f1(0x507)+'ent'](_0x1aa686[_0x9b22f1(0x2ed)]);_0x4e087b[_0x9b22f1(0x602)][_0x9b22f1(0x42e)+'xt']=_0x9b22f1(0x1b7)+'ion:f'+'ixed;'+'inset'+_0x9b22f1(0x323)+_0x9b22f1(0x4c8)+_0x9b22f1(0x489)+_0x9b22f1(0x3fb)+'t:100'+_0x9b22f1(0x374)+_0x9b22f1(0x4d1)+':2147'+_0x9b22f1(0x305)+_0x9b22f1(0x419)+_0x9b22f1(0x33b)+'event'+'s:non'+'e';var _0x45e887=_0x4e087b[_0x9b22f1(0x61f)+_0x9b22f1(0x4b5)]('2d');function _0x22b33b(){var _0x4b2685=_0x9b22f1;if(_0x1aa686[_0x4b2685(0x394)](_0x1aa686[_0x4b2685(0x1f3)],_0x1aa686['BLtFq']))try{var _0x3a1c60=document[_0x4b2685(0x400)+'creen'+_0x4b2685(0x239)+'nt'],_0x570bce=_0x3a1c60&&_0x3a1c60['tagNa'+'me']!==_0x4b2685(0x565)+'S'?_0x3a1c60:document['body']||document[_0x4b2685(0x592)+_0x4b2685(0x1ed)+_0x4b2685(0x2a9)];if(_0x4e087b[_0x4b2685(0x492)+'tNode']!==_0x570bce)_0x570bce[_0x4b2685(0x24b)+'dChil'+'d'](_0x4e087b);}catch(_0x5a6626){if(_0x1aa686[_0x4b2685(0x249)](_0x4b2685(0x3b9),_0x1aa686[_0x4b2685(0x486)]))_0x4300fe['safeM'+_0x4b2685(0x555)]=_0x3e6356,_0x3aae90[_0x4b2685(0x202)](_0x35a60f),_0x25833c['reloa'+'d']();else try{document[_0x4b2685(0x24c)]['appen'+'dChil'+'d'](_0x4e087b);}catch(_0x527f1f){}}else _0x48bfa1['infAm'+_0x4b2685(0x3a3)]=_0x27d55a,_0x5f4db1();}var _0xcee37f={'w':0x0,'h':0x0,'dpr':0x0};function _0x2ac445(){var _0x469a5b=_0x9b22f1;if(_0x469a5b(0x693)===_0x469a5b(0x693)){var _0x4dbb7a=window[_0x469a5b(0x143)+_0x469a5b(0x1d9)+_0x469a5b(0x5bb)+'o']||-0x1a21+0x15*-0x65+0x21*0x10b,_0x106a23=window['inner'+_0x469a5b(0x2f6)],_0x2cadd3=window[_0x469a5b(0x3da)+'Heigh'+'t'];if(_0x3aae90['HXalm'](_0x106a23,_0xcee37f['w'])&&_0x3aae90[_0x469a5b(0x256)](_0x2cadd3,_0xcee37f['h'])&&_0x4dbb7a===_0xcee37f[_0x469a5b(0x3fc)])return;_0xcee37f['w']=_0x106a23,_0xcee37f['h']=_0x2cadd3,_0xcee37f['dpr']=_0x4dbb7a,_0x4e087b[_0x469a5b(0x2a7)]=Math[_0x469a5b(0x535)](_0x3aae90['QlqSL'](_0x106a23,_0x4dbb7a)),_0x4e087b[_0x469a5b(0x3fb)+'t']=Math[_0x469a5b(0x535)](_0x2cadd3*_0x4dbb7a),_0x45e887['setTr'+_0x469a5b(0x47c)+'rm'](_0x4dbb7a,0x3c0+-0x3*0x5+-0x3b1,-0xef2+-0x19b2+0x484*0x9,_0x4dbb7a,0x1*0x2197+0xf0e+0x30a5*-0x1,-0x2*0x86+0x413*-0x6+0x197e);}else{if(_0x53cc53)_0x2a1e21[_0x469a5b(0x1f0)](_0x469a5b(0x4cc)+'Engin'+_0x469a5b(0x64e)+_0x469a5b(0x4da)+_0x469a5b(0x3ab),_0x469a5b(0x373)+'arget'+_0x469a5b(0x17e)+'Rate',[0x13ce+-0x387*-0x3+-0x1d73]);}}var _0x1576e8=0x392+0x19ea+-0x44*0x6f,_0x5847da=performance['now'](),_0x5be314=0x1258*-0x2+-0x1486+0x1312*0x3;function _0x11c2f9(_0x5e70d5){var _0x12de48=_0x9b22f1,_0x2b133f={'kEiOs':_0x1aa686['xkNrT'],'EGAhU':'middl'+'e','XnxDn':function(_0x158802,_0x4f5cde){return _0x1aa686['ZKueO'](_0x158802,_0x4f5cde);},'dyeeA':_0x12de48(0x1b3),'TAtUR':function(_0x4b47b1,_0x42bee3){return _0x4b47b1*_0x42bee3;},'kXlOX':'px\x20ui'+'-sans'+_0x12de48(0x47a)+_0x12de48(0x62f)+'tem-u'+'i,san'+'s-ser'+'if','NkiXj':function(_0x299079,_0x413737){var _0x29ba1f=_0x12de48;return _0x1aa686[_0x29ba1f(0x381)](_0x299079,_0x413737);},'zqUJq':function(_0x3f2df3,_0x54b231){var _0xb81739=_0x12de48;return _0x1aa686[_0xb81739(0x585)](_0x3f2df3,_0x54b231);},'ywIsv':function(_0x2f71a4,_0x27b6f0){return _0x2f71a4/_0x27b6f0;},'RwHvK':function(_0x4fd745,_0x130b39){var _0xc1582a=_0x12de48;return _0x1aa686[_0xc1582a(0x2d3)](_0x4fd745,_0x130b39);},'hgLnJ':_0x1aa686[_0x12de48(0x55f)]},_0x573adb=Number(_0x18f8f4[_0x12de48(0x561)+'le'])||0xf62+0x6e*0x1e+-0x1c45,_0x112a96=(0xd9d+0x8b1+-0x58b*0x4)*_0x573adb,_0x27278f=(-0x76d*-0x5+0x7cb+0xb3a*-0x4)*_0x573adb,_0x1088b1=_0x112a96*(0x9*0x1c8+0x1e9e+-0x2ea3)+_0x27278f*(0x1f*0x3c+-0x175b+0x13d*0xd),_0x54d581=_0x112a96*(0x1df6+-0x4a4+-0x194f)+_0x27278f*(-0xf46+-0x9e3+-0x17b*-0x11),_0x2efe91=_0x18f8f4['ksPos'],_0x4e098c=_0x1aa686[_0x12de48(0x31b)](_0x2efe91,'br')?_0x1aa686['KSgfR'](_0x5e70d5['right']-(0x1*0x1cb5+0x6c7+-0x236c),_0x1088b1):_0x1aa686['ENvcu'](_0x5e70d5['left'],-0x11f3+0x25fc+-0x13f9),_0x3f99ba=_0x2efe91==='ml'?_0x1aa686['ZKueO'](_0x5e70d5['top'],_0x1aa686['yPvIW'](_0x5e70d5[_0x12de48(0x3fb)+'t'],-0x2*-0x25a+-0x1*-0xf9c+-0x144e))-_0x1aa686[_0x12de48(0x381)](_0x54d581,-0xc41*-0x1+0x9fa+-0x1639):_0x5e70d5['botto'+'m']-_0x54d581-(_0x2efe91==='bl'?0x16ec+0xefc+-0x2588:-0x1373+-0x1167+0x10*0x257),_0xbaf3c0=(_0x1553dd,_0x586c91,_0xf5037a,_0x4b66ad,_0xe11d66,_0x54824a,_0x109435)=>{var _0x1a6947=_0x12de48,_0x15102b=_0x2b133f[_0x1a6947(0x16a)][_0x1a6947(0x5f6)]('|'),_0xe71c63=0x2698+-0x177c+0x4*-0x3c7;while(!![]){switch(_0x15102b[_0xe71c63++]){case'0':_0x45e887[_0x1a6947(0x31f)]();continue;case'1':_0x45e887['fill']();continue;case'2':_0x45e887['fillS'+_0x1a6947(0x28c)]=_0x321b01?'rgba('+_0x1a6947(0x211)+'07,15'+'7,0.8'+'5)':_0x1a6947(0x167)+_0x1a6947(0x546)+'16,0.'+'7)';continue;case'3':_0x45e887['textB'+_0x1a6947(0x3c7)+'ne']=_0x2b133f[_0x1a6947(0x379)];continue;case'4':_0x45e887[_0x1a6947(0x57a)+_0x1a6947(0x369)]='cente'+'r';continue;case'5':_0x321b01&&(_0x45e887['shado'+'wColo'+'r']=_0x303c7f,_0x45e887[_0x1a6947(0x364)+'wBlur']=0x2062+0x256b+0x1*-0x45bf,_0x45e887[_0x1a6947(0x2d6)](),_0x45e887[_0x1a6947(0x364)+'wBlur']=-0xa1*-0x14+-0x1*0x18ab+0xc17);continue;case'6':_0x45e887[_0x1a6947(0x628)+_0x1a6947(0x490)]=-0x1c4c+-0x23ab+-0x17*-0x2c8;continue;case'7':_0x109435&&(_0x45e887['font']=_0x2b133f[_0x1a6947(0x14a)](_0x2b133f['dyeeA']+Math[_0x1a6947(0x535)](_0x2b133f['TAtUR'](0x16*0x143+-0xb23+0x1096*-0x1,_0x573adb)),_0x2b133f['kXlOX']),_0x45e887[_0x1a6947(0x3f9)+'tyle']=_0x321b01?'#fff':_0x1a6947(0x167)+'255,2'+'35,24'+'0,0.5'+'5)',_0x45e887[_0x1a6947(0x1f1)+'ext'](_0x109435,_0x2b133f[_0x1a6947(0x14a)](_0xf5037a,_0xe11d66/(-0x23f9*0x1+-0x23f0*0x1+0x3*0x17f9)),_0x2b133f['XnxDn'](_0x4b66ad,_0x2b133f[_0x1a6947(0x4f0)](_0x54824a,0x2339*0x1+0x4*0x5b9+0x55*-0xaf))+_0x2b133f[_0x1a6947(0x1e1)](-0x176c+0x21e7+0x19*-0x6b,_0x573adb)));continue;case'8':_0x45e887['strok'+'e']();continue;case'9':_0x45e887[_0x1a6947(0x1f1)+_0x1a6947(0x553)](_0x1553dd,_0x2b133f[_0x1a6947(0x4ff)](_0xf5037a,_0xe11d66/(0x515*-0x1+0x1*0x2588+-0x2071)),_0x2b133f[_0x1a6947(0x14a)](_0x4b66ad,_0x2b133f[_0x1a6947(0x56b)](_0x54824a,0x2226+0x2683+0x1*-0x48a7))-(_0x109435?_0x2b133f[_0x1a6947(0x1e1)](-0x2dd*-0x2+0x4*0x656+-0x1f0d,_0x573adb):0x1*0xaf3+0x35*-0x7a+0xb*0x14d));continue;case'10':if(_0x45e887[_0x1a6947(0x535)+_0x1a6947(0x301)])_0x45e887['round'+'Rect'](_0xf5037a,_0x4b66ad,_0xe11d66,_0x54824a,_0x2b133f[_0x1a6947(0x204)](0x5*0x63e+0x163c+-0x19*0x223,_0x573adb));else _0x45e887['rect'](_0xf5037a,_0x4b66ad,_0xe11d66,_0x54824a);continue;case'11':_0x45e887[_0x1a6947(0x240)+'re']();continue;case'12':_0x45e887['font']=_0x2b133f[_0x1a6947(0x4ff)](_0x2b133f[_0x1a6947(0x4ff)](_0x2b133f[_0x1a6947(0x679)],Math[_0x1a6947(0x535)]((-0x1a23*-0x1+-0x65+-0x19b2)*_0x573adb)),_0x1a6947(0x1af)+_0x1a6947(0x46a)+_0x1a6947(0x47a)+_0x1a6947(0x62f)+'tem-u'+_0x1a6947(0x49e)+_0x1a6947(0x5be)+'if');continue;case'13':var _0x321b01=_0x49ff0e[_0x1a6947(0x352)](_0x586c91);continue;case'14':_0x45e887['begin'+_0x1a6947(0x1df)]();continue;case'15':_0x45e887[_0x1a6947(0x3f9)+_0x1a6947(0x28c)]=_0x321b01?'#fff':'rgba('+'255,2'+_0x1a6947(0x3a8)+'0,0.8'+')';continue;case'16':_0x45e887['strok'+'eStyl'+'e']=_0x321b01?_0xc6c3d8:'rgba('+_0x1a6947(0x211)+_0x1a6947(0x5fb)+'7,0.3'+'5)';continue;}break;}};_0x1aa686[_0x12de48(0x46e)](_0xbaf3c0,'W',_0x12de48(0x3f2),_0x4e098c+_0x112a96+_0x27278f,_0x3f99ba,_0x112a96,_0x112a96),_0xbaf3c0('A','KeyA',_0x4e098c,_0x1aa686[_0x12de48(0x585)](_0x3f99ba,_0x112a96)+_0x27278f,_0x112a96,_0x112a96),_0x1aa686[_0x12de48(0x620)](_0xbaf3c0,'S',_0x1aa686[_0x12de48(0x4fc)],_0x4e098c+_0x112a96+_0x27278f,_0x1aa686['tDfxl'](_0x3f99ba+_0x112a96,_0x27278f),_0x112a96,_0x112a96),_0xbaf3c0('D',_0x1aa686['sHYhn'],_0x4e098c+_0x1aa686[_0x12de48(0x4ef)](_0x1aa686['ENvcu'](_0x112a96,_0x27278f),0xe68+0x89a+-0x1700),_0x1aa686['XOlbj'](_0x3f99ba,_0x112a96)+_0x27278f,_0x112a96,_0x112a96);var _0x182447=(_0x1088b1-_0x27278f)/(-0x197c+-0x2*0xd8d+-0x1*-0x3498),_0x243790=_0x1aa686[_0x12de48(0x5ba)](_0x3f99ba,_0x1aa686['JytfM'](_0x112a96+_0x27278f,-0x338*-0x4+-0x45b+-0x883));_0xbaf3c0('LMB',_0x1aa686[_0x12de48(0x4ee)],_0x4e098c,_0x243790,_0x182447,_0x112a96,_0x18f8f4['ksCps']?_0x1aa686[_0x12de48(0x313)](_0x5007c0,-0x14*-0x1c1+0x1c21+-0xa*0x652)+_0x12de48(0x21f):''),_0x1aa686[_0x12de48(0x146)](_0xbaf3c0,_0x1aa686['LtRlw'],_0x1aa686[_0x12de48(0x23e)],_0x4e098c+_0x182447+_0x27278f,_0x243790,_0x182447,_0x112a96,_0x18f8f4[_0x12de48(0x518)]?_0x1aa686['lhkMv'](_0x5007c0,-0x25b2+-0x620+-0x2bd5*-0x1)+'\x20CPS':''),_0xbaf3c0('',_0x12de48(0x45a),_0x4e098c,_0x1aa686['ENvcu'](_0x1aa686[_0x12de48(0x585)](_0x243790,_0x112a96),_0x27278f),_0x1088b1,_0x112a96*(-0x1*-0x1661+-0x1*-0xb5d+-0x7*0x4d2+0.45));}function _0x4eaba8(_0x303f12){var _0x1584e3=_0x9b22f1;if(_0x1584e3(0x53a)===_0x1aa686['cksRA']){var _0x5c04d3=_0x303f12['width']/(0x297*-0x4+-0x886+0x34*0x5d),_0x493b9b=_0x303f12[_0x1584e3(0x3fb)+'t']/(0x420+-0x587+0x169),_0x309665=_0x1aa686[_0x1584e3(0x67d)](Number,_0x18f8f4['chSiz'+'e'])||-0x306*-0x8+-0x2406+0xbd7,_0x13320a=/^#[0-9a-f]{6}$/i['test'](_0x18f8f4['chCol'+'or'])?_0x18f8f4['chCol'+'or']:_0x1aa686[_0x1584e3(0x1bc)];_0x45e887['save'](),_0x45e887['strok'+_0x1584e3(0x1b0)+'e']=_0x13320a,_0x45e887[_0x1584e3(0x3f9)+_0x1584e3(0x28c)]=_0x13320a,_0x45e887['lineW'+_0x1584e3(0x490)]=Math['max'](0x945+0x23eb+0x2b*-0x10d+0.5,(0xbea+0x1a*-0x7a+0x7c)*_0x309665),_0x45e887[_0x1584e3(0x364)+_0x1584e3(0x62a)+'r']=_0x13320a,_0x45e887[_0x1584e3(0x364)+_0x1584e3(0x3a6)]=-0x17f*-0x2+-0x2006+0x1d0e;var _0x12756c=(-0xe6d+0x23e4+0x1*-0x1571)*_0x309665,_0x3b30f2=_0x1aa686[_0x1584e3(0x4ef)](0x19*-0x18+-0xc3*-0x9+-0x47b,_0x309665);_0x45e887[_0x1584e3(0x4f1)+'Path'](),_0x45e887[_0x1584e3(0x46b)+'o'](_0x1aa686['tdcEj'](_0x1aa686[_0x1584e3(0x35b)](_0x5c04d3,_0x12756c),_0x3b30f2),_0x493b9b),_0x45e887[_0x1584e3(0x668)+'o'](_0x5c04d3-_0x12756c,_0x493b9b),_0x45e887['moveT'+'o'](_0x1aa686[_0x1584e3(0x1a1)](_0x5c04d3,_0x12756c),_0x493b9b),_0x45e887[_0x1584e3(0x668)+'o'](_0x1aa686[_0x1584e3(0x623)](_0x1aa686[_0x1584e3(0x585)](_0x5c04d3,_0x12756c),_0x3b30f2),_0x493b9b),_0x45e887['moveT'+'o'](_0x5c04d3,_0x493b9b-_0x12756c-_0x3b30f2),_0x45e887[_0x1584e3(0x668)+'o'](_0x5c04d3,_0x493b9b-_0x12756c),_0x45e887['moveT'+'o'](_0x5c04d3,_0x493b9b+_0x12756c),_0x45e887['lineT'+'o'](_0x5c04d3,_0x1aa686[_0x1584e3(0x3fd)](_0x1aa686[_0x1584e3(0x495)](_0x493b9b,_0x12756c),_0x3b30f2)),_0x45e887[_0x1584e3(0x383)+'e'](),_0x45e887[_0x1584e3(0x4f1)+'Path'](),_0x45e887['arc'](_0x5c04d3,_0x493b9b,(-0x742+0x393+0x3b0+0.6000000000000001)*_0x309665,0x395*0x1+-0x1bac+0x1817,Math['PI']*(0x68*0x17+0xe56+-0x17ac)),_0x45e887[_0x1584e3(0x2d6)](),_0x45e887['resto'+'re']();}else try{var _0x32c942=_0x3aae90[_0x1584e3(0x614)][_0x1584e3(0x5f6)]('|'),_0x3afcfa=-0x2648+0x9c8+0x1c80;while(!![]){switch(_0x32c942[_0x3afcfa++]){case'0':_0x2c5f2d['enabl'+'ed']=_0x181d78!==![];continue;case'1':_0x373de7[_0x472e8a]=_0x2c5f2d;continue;case'2':return _0x2c5f2d;case'3':_0x37e49f[_0x1584e3(0x151)+_0x1584e3(0x14c)]++;continue;case'4':var _0x2c5f2d=_0xf12414['hookP'+_0x1584e3(0x552)]({'typeName':_0x13aabf,'methodName':_0x4331ec,'params':_0x2e47ad,'returnType':_0x33dff3},_0x3c3676);continue;}break;}}catch(_0x40fca5){return _0x564050['warn'](_0x3aae90['GeSkY'],_0x56bdb3,_0x40fca5&&_0x40fca5[_0x1584e3(0x4b2)+'ge']),null;}}function _0x925619(_0x45ac5a){var _0x1a4fbe=_0x9b22f1,_0x568d8f={'qGPFW':function(_0x3c3e26,_0xd15ab){return _0x3c3e26||_0xd15ab;}};_0x45e887[_0x1a4fbe(0x31f)](),_0x45e887[_0x1a4fbe(0x1e6)]=_0x1a4fbe(0x63e)+_0x1a4fbe(0x536)+_0x1a4fbe(0x37b)+_0x1a4fbe(0x4d6)+_0x1a4fbe(0x3ca)+_0x1a4fbe(0x4d6)+'e',_0x45e887['textA'+_0x1a4fbe(0x369)]='left',_0x45e887[_0x1a4fbe(0x1dc)+_0x1a4fbe(0x3c7)+'ne']=_0x1aa686[_0x1a4fbe(0x43b)];var _0xa6d93b=0x1*-0x523+-0x2484+0x3*0xdf1,_0x2076de=-0x20e2+0x1bba+-0x6f*-0xc,_0x51ed4a=(_0x56825b,_0x590971)=>{var _0x2413c7=_0x1a4fbe;_0x45e887[_0x2413c7(0x3f9)+'tyle']=_0x568d8f[_0x2413c7(0x382)](_0x590971,'rgba('+_0x2413c7(0x271)+_0x2413c7(0x3a8)+'0,0.7'+'5)'),_0x45e887[_0x2413c7(0x1f1)+_0x2413c7(0x553)](_0x56825b,_0x2076de,_0xa6d93b),_0xa6d93b+=-0xb19*-0x3+0x1b*0xd3+0x43*-0xd4;};_0x1aa686[_0x1a4fbe(0x2a8)](_0x51ed4a,_0x1a4fbe(0x3e2)+'A\x20KOU'+_0x1a4fbe(0x521)+'1',_0x1a4fbe(0x4a3)+'9d');if(_0x18f8f4[_0x1a4fbe(0x474)])_0x1aa686[_0x1a4fbe(0x313)](_0x51ed4a,_0x1aa686[_0x1a4fbe(0x32b)](_0x5be314,'\x20FPS'));if(!_0x2dda20['gameL'+_0x1a4fbe(0x18d)])_0x1aa686['PAggA'](_0x51ed4a,_0x1a4fbe(0x635)+_0x1a4fbe(0x5e9)+'r\x20gam'+'e…',_0x1a4fbe(0x167)+_0x1a4fbe(0x211)+_0x1a4fbe(0x1cd)+'0,0.6'+')');_0x45e887[_0x1a4fbe(0x240)+'re']();}function _0x31ee65(){var _0x4e9f05=_0x9b22f1,_0x732612=(_0x4e9f05(0x56f)+'|3|8|'+_0x4e9f05(0x512)+_0x4e9f05(0x1f6)+'|6')[_0x4e9f05(0x5f6)]('|'),_0x46c196=-0x982*0x1+0x112*0x11+-0x8b0*0x1;while(!![]){switch(_0x732612[_0x46c196++]){case'0':if(_0x18f8f4['keyst'+'rokes'])_0x11c2f9(_0x3f8917);continue;case'1':var _0x594e1b=performance['now']();continue;case'2':if(_0x18f8f4['cross'+'hair'])_0x4eaba8(_0x3f8917);continue;case'3':_0x1aa686[_0x4e9f05(0x594)](_0x1aa686[_0x4e9f05(0x5f3)](_0x594e1b,_0x5847da),-0x23*0x67+-0x2+0x100b)&&(_0x5be314=Math[_0x4e9f05(0x535)](_0x1576e8*(0x9bc+0xd5*-0x2+-0x215*0x2)/(_0x594e1b-_0x5847da)),_0x1576e8=-0xa12+0x8eb*0x1+0x127,_0x5847da=_0x594e1b);continue;case'4':_0x1576e8++;continue;case'5':_0x45e887[_0x4e9f05(0x5df)+_0x4e9f05(0x301)](0x28b+0x13*0x3f+0x4d*-0x18,-0x3c1*-0x5+-0x3d*-0x4d+-0x251e,_0xcee37f['w'],_0xcee37f['h']);continue;case'6':_0x925619(_0x3f8917);continue;case'7':var _0x3f8917={'left':0x0,'top':0x0,'right':_0xcee37f['w'],'bottom':_0xcee37f['h'],'width':_0xcee37f['w'],'height':_0xcee37f['h']};continue;case'8':_0x1aa686[_0x4e9f05(0x36c)](_0x2ac445);continue;case'9':requestAnimationFrame(_0x31ee65);continue;case'10':_0x22b33b();continue;}break;}}var _0x213686=document['creat'+_0x9b22f1(0x507)+_0x9b22f1(0x3b1)](_0x9b22f1(0x413));_0x213686['id']=_0x9b22f1(0x346)+'a-ui',_0x213686['style'][_0x9b22f1(0x42e)+'xt']=_0x9b22f1(0x1b7)+_0x9b22f1(0x3d0)+_0x9b22f1(0x597)+_0x9b22f1(0x4c6)+_0x9b22f1(0x2a1)+_0x9b22f1(0x4d1)+':2147'+_0x9b22f1(0x305)+_0x9b22f1(0x692)+'nter-'+_0x9b22f1(0x36f)+_0x9b22f1(0x2ef)+'e;';var _0x1a4be0=_0x213686['attac'+'hShad'+'ow']({'mode':'open'});(document[_0x9b22f1(0x24c)]||document[_0x9b22f1(0x592)+_0x9b22f1(0x1ed)+_0x9b22f1(0x2a9)])['appen'+'dChil'+'d'](_0x213686);var _0xc242dd=![],_0x1a2d16={};try{_0x1a2d16=JSON[_0x9b22f1(0x19b)](localStorage[_0x9b22f1(0x4a9)+'em'](_0x9b22f1(0x346)+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x4548c9){}function _0x270a53(){var _0x15970d=_0x9b22f1;try{localStorage['setIt'+'em'](_0x15970d(0x346)+'a.kou'+'r.ui.'+'v1',JSON[_0x15970d(0x29f)+_0x15970d(0x484)](_0x1a2d16));}catch(_0x339444){}}function _0x2f6243(_0x499f92,_0x46b7c0){var _0x381c6e=_0x9b22f1,_0x246269={'LWFGH':_0x1aa686[_0x381c6e(0x29c)],'YfKyK':_0x381c6e(0x4e9),'QCAQs':function(_0x5721c2,_0x811911){return _0x5721c2(_0x811911);},'LkExF':function(_0x3142a1,_0x358920){return _0x3142a1(_0x358920);}},_0xdd4360=document['creat'+_0x381c6e(0x507)+_0x381c6e(0x3b1)](_0x1aa686[_0x381c6e(0x336)]);return _0xdd4360[_0x381c6e(0x5c9)]=_0x381c6e(0x5ca)+'n',_0xdd4360[_0x381c6e(0x582)+_0x381c6e(0x198)]=_0x381c6e(0x5a7)+_0x381c6e(0x292),_0xdd4360['setAt'+_0x381c6e(0x179)+'te'](_0x381c6e(0x55c),'switc'+'h'),_0xdd4360[_0x381c6e(0x335)+'tribu'+'te'](_0x381c6e(0x44b)+'check'+'ed',String(!!_0x499f92)),_0xdd4360[_0x381c6e(0x161)+'ck']=_0x22b366=>{var _0x435375=_0x381c6e;_0x22b366[_0x435375(0x3ed)+_0x435375(0x41f)+_0x435375(0x1a9)]();var _0x3f4afd=_0xdd4360[_0x435375(0x549)+_0x435375(0x179)+'te'](_0x246269['LWFGH'])!==_0x246269[_0x435375(0x166)];_0xdd4360['setAt'+_0x435375(0x179)+'te']('aria-'+_0x435375(0x206)+'ed',_0x246269[_0x435375(0x5ef)](String,_0x3f4afd)),_0x246269[_0x435375(0x32a)](_0x46b7c0,_0x3f4afd);},_0xdd4360;}function _0x4c1b9c(_0xb1e1d5,_0x1fcecf,_0x2f95fa,_0x45d69f,_0x3a6bc1){var _0x9d825d=_0x9b22f1,_0x50e806={'Twmrf':_0x1aa686['vmlOG'],'YnGGE':function(_0x37d715,_0x269b25){return _0x37d715*_0x269b25;}},_0x5c54a5=document[_0x9d825d(0x402)+_0x9d825d(0x507)+'ent'](_0x1aa686['yJPFj']);_0x5c54a5[_0x9d825d(0x582)+_0x9d825d(0x198)]=_0x1aa686['KsNcD'];var _0x3766c1=document[_0x9d825d(0x402)+_0x9d825d(0x507)+_0x9d825d(0x3b1)]('input');_0x3766c1[_0x9d825d(0x5c9)]=_0x1aa686[_0x9d825d(0x56a)],_0x3766c1[_0x9d825d(0x582)+_0x9d825d(0x198)]=_0x9d825d(0x34c)+_0x9d825d(0x4e0),_0x3766c1[_0x9d825d(0x228)]=_0x1fcecf,_0x3766c1[_0x9d825d(0x237)]=_0x2f95fa,_0x3766c1[_0x9d825d(0x1c5)]=_0x45d69f,_0x3766c1[_0x9d825d(0x23b)]=_0xb1e1d5;var _0x44bcbe=document[_0x9d825d(0x402)+_0x9d825d(0x507)+_0x9d825d(0x3b1)](_0x9d825d(0x410));_0x44bcbe[_0x9d825d(0x582)+_0x9d825d(0x198)]=_0x9d825d(0x52d)+'l',_0x44bcbe[_0x9d825d(0x2d1)+_0x9d825d(0x320)+'t']=String(_0xb1e1d5);var _0x3beb67=()=>{var _0x2f8bd2=_0x9d825d;_0x44bcbe[_0x2f8bd2(0x2d1)+'onten'+'t']=String(_0x3766c1['value']),_0x5c54a5[_0x2f8bd2(0x602)][_0x2f8bd2(0x30e)+_0x2f8bd2(0x441)+'y'](_0x50e806[_0x2f8bd2(0x554)],_0x50e806['YnGGE']((_0x3766c1[_0x2f8bd2(0x23b)]-_0x1fcecf)/(_0x2f95fa-_0x1fcecf),0x155e+-0x1*0xe3f+-0x6bb)+'%');};return _0x3766c1['oninp'+'ut']=()=>{var _0x383576=_0x9d825d;_0x3beb67(),_0x3aae90[_0x383576(0x60b)](_0x3a6bc1,Number(_0x3766c1[_0x383576(0x23b)]));},_0x1aa686['UKyub'](_0x3beb67),_0x5c54a5[_0x9d825d(0x24b)+'d'](_0x3766c1,_0x44bcbe),_0x5c54a5;}function _0x9e830a(_0x179e77,_0x5f581f){var _0x10e006=_0x9b22f1,_0x16e472=_0x1aa686['Detkb']['split']('|'),_0xff9da1=0x22f+0x5*-0x205+0x7ea;while(!![]){switch(_0x16e472[_0xff9da1++]){case'0':_0x5ea307[_0x10e006(0x5c9)]='color';continue;case'1':return _0x5ea307;case'2':_0x5ea307['value']=/^#[0-9a-f]{6}$/i['test'](_0x179e77)?_0x179e77:_0x10e006(0x4a3)+'9d';continue;case'3':var _0x5ea307=document[_0x10e006(0x402)+_0x10e006(0x507)+'ent'](_0x1aa686['rkbSP']);continue;case'4':_0x5ea307[_0x10e006(0x48a)+'ut']=()=>_0x5f581f(_0x5ea307['value']);continue;case'5':_0x5ea307['class'+_0x10e006(0x198)]='sk-co'+'lor';continue;}break;}}function _0x54f611(_0xa94e19,_0x363722,_0xbf430){var _0x2f9c4c=_0x9b22f1,_0x2b45b6=document[_0x2f9c4c(0x402)+'eElem'+_0x2f9c4c(0x3b1)](_0x3aae90['hztTS']);_0x2b45b6['class'+_0x2f9c4c(0x198)]=_0x2f9c4c(0x17b)+_0x2f9c4c(0x531);for(var [_0x431d19,_0x6abb3a]of _0x363722){var _0x405e31=document['creat'+_0x2f9c4c(0x507)+_0x2f9c4c(0x3b1)]('optio'+'n');_0x405e31[_0x2f9c4c(0x23b)]=_0x431d19,_0x405e31['textC'+_0x2f9c4c(0x320)+'t']=_0x6abb3a,_0x2b45b6[_0x2f9c4c(0x24b)+_0x2f9c4c(0x57b)+'d'](_0x405e31);}return _0x2b45b6[_0x2f9c4c(0x23b)]=_0xa94e19,_0x2b45b6[_0x2f9c4c(0x395)+'nge']=()=>_0xbf430(_0x2b45b6['value']),_0x2b45b6;}function _0x167a9d(_0x51abf7,_0x4150d0){var _0x44eaf3=_0x9b22f1,_0x361515={'YqjvM':function(_0x484e7f){return _0x484e7f();},'nTDqO':_0x1aa686['OpgYN']};if(_0x1aa686[_0x44eaf3(0x394)]('xRKYO',_0x44eaf3(0x5c7))){var _0x3682cd=('0|5|3'+_0x44eaf3(0x3c6)+'1')[_0x44eaf3(0x5f6)]('|'),_0x549d49=-0x11f2+-0x42c+0x161e;while(!![]){switch(_0x3682cd[_0x549d49++]){case'0':var _0x102b02=document[_0x44eaf3(0x402)+_0x44eaf3(0x507)+'ent'](_0x1aa686[_0x44eaf3(0x336)]);continue;case'1':return _0x102b02;case'2':_0x102b02[_0x44eaf3(0x2d1)+'onten'+'t']=_0x51abf7;continue;case'3':_0x102b02[_0x44eaf3(0x582)+_0x44eaf3(0x198)]=_0x1aa686['gIhDt'];continue;case'4':_0x102b02[_0x44eaf3(0x161)+'ck']=_0x5a6cb9=>{var _0x6956b4=_0x44eaf3;_0x5a6cb9[_0x6956b4(0x3ed)+_0x6956b4(0x41f)+'ation'](),_0x361515[_0x6956b4(0x631)](_0x4150d0);};continue;case'5':_0x102b02[_0x44eaf3(0x5c9)]=_0x1aa686[_0x44eaf3(0x336)];continue;}break;}}else{if(_0x57d23e[_0x44eaf3(0x2d8)+_0x44eaf3(0x627)])return;_0x457e7a[_0x44eaf3(0x4fd)](_0x361515['nTDqO']+(_0x36ab9b['butto'+'n']+(0x1e9f+0x14c+-0x13*0x1ae)));var _0x67e528=_0x11d05c[_0x232a98['butto'+'n']+(-0x150f+0x1*0x6d9+0x1*0xe37)];if(_0x67e528){_0x67e528[_0x44eaf3(0x27c)](_0x4cd6fb[_0x44eaf3(0x622)]());if(_0x67e528[_0x44eaf3(0x5da)+'h']>-0x845*-0x3+-0x423+-0xa42*0x2)_0x67e528[_0x44eaf3(0x6a1)]();}}}function _0x4e98c3(_0x5d5774,_0x5f2cb2,_0x2e0b5f){var _0x1d3340=_0x9b22f1,_0x2ba4e0=document['creat'+'eElem'+'ent'](_0x1d3340(0x413));_0x2ba4e0[_0x1d3340(0x582)+_0x1d3340(0x198)]=_0x1d3340(0x1e2)+'l';var _0xa57b5a=document[_0x1d3340(0x402)+_0x1d3340(0x507)+_0x1d3340(0x3b1)](_0x1d3340(0x410));_0xa57b5a[_0x1d3340(0x582)+_0x1d3340(0x198)]=_0x1aa686['gGbLK'],_0xa57b5a[_0x1d3340(0x2d1)+'onten'+'t']=_0x5d5774;if(_0x5f2cb2){if(_0x1aa686[_0x1d3340(0x680)](_0x1d3340(0x653),_0x1aa686[_0x1d3340(0x2c4)])){var _0x48ab61=document[_0x1d3340(0x402)+_0x1d3340(0x507)+_0x1d3340(0x3b1)](_0x1aa686[_0x1d3340(0x5ed)]);_0x48ab61[_0x1d3340(0x582)+_0x1d3340(0x198)]=_0x1aa686['NeYwk'],_0x48ab61[_0x1d3340(0x2d1)+'onten'+'t']=_0x5f2cb2,_0xa57b5a[_0x1d3340(0x24b)+'dChil'+'d'](_0x48ab61);}else _0x3de421[_0x1d3340(0x24b)+_0x1d3340(0x57b)+'d'](_0x19d405);}return _0x2ba4e0[_0x1d3340(0x24b)+'d'](_0xa57b5a,_0x2e0b5f),_0x2ba4e0;}function _0x56bebc(_0x36c45d,_0x490f9a){var _0x58152b=_0x9b22f1,_0x339e7c=document['creat'+_0x58152b(0x507)+_0x58152b(0x3b1)](_0x3aae90['CIlJJ']);return _0x339e7c[_0x58152b(0x582)+'Name']=_0x58152b(0x4b6)+'te'+(_0x490f9a?_0x3aae90[_0x58152b(0x2b2)]:''),_0x339e7c['textC'+'onten'+'t']=_0x36c45d,_0x339e7c;}function _0x1788b1(_0x3bac6a,_0x1b21fb,_0x108143,_0x4bde7d,_0x53c26f){var _0x211aa4=_0x9b22f1;if(_0x3aae90[_0x211aa4(0x470)]!==_0x3aae90[_0x211aa4(0x4df)]){var _0x947ff4=document[_0x211aa4(0x402)+_0x211aa4(0x507)+_0x211aa4(0x3b1)]('div');_0x947ff4[_0x211aa4(0x582)+_0x211aa4(0x198)]=_0x3aae90[_0x211aa4(0x32d)]+(_0x108143?'\x20on':'');var _0x33f75d=document[_0x211aa4(0x402)+_0x211aa4(0x507)+'ent']('div');_0x33f75d[_0x211aa4(0x582)+'Name']=_0x211aa4(0x5ad)+_0x211aa4(0x230)+'ad';var _0x16ed66=document[_0x211aa4(0x402)+_0x211aa4(0x507)+'ent'](_0x3aae90['CIlJJ']);_0x16ed66['class'+_0x211aa4(0x198)]='sk-ca'+_0x211aa4(0x1f7)+_0x211aa4(0x149);var _0x2f4380=document[_0x211aa4(0x402)+_0x211aa4(0x507)+'ent'](_0x3aae90['ujZJP']);_0x2f4380[_0x211aa4(0x2d1)+'onten'+'t']=_0x3bac6a,_0x16ed66[_0x211aa4(0x24b)+'dChil'+'d'](_0x2f4380);if(_0x4bde7d){var _0x11b6fd=_0x2f6243(_0x108143,_0x433519=>{var _0x224e07=_0x211aa4;_0x947ff4['class'+_0x224e07(0x55b)]['toggl'+'e']('on',_0x433519),_0x4bde7d(_0x433519);});_0x33f75d['appen'+'d'](_0x16ed66,_0x11b6fd);}else _0x33f75d['appen'+_0x211aa4(0x57b)+'d'](_0x16ed66);_0x947ff4['appen'+_0x211aa4(0x57b)+'d'](_0x33f75d);if(_0x53c26f&&_0x53c26f[_0x211aa4(0x5da)+'h']){var _0x465e5a=_0x3aae90[_0x211aa4(0x365)][_0x211aa4(0x5f6)]('|'),_0x1885b1=0x1*-0x2c5+0x1d2f+-0x1a6a;while(!![]){switch(_0x465e5a[_0x1885b1++]){case'0':_0x31da29['class'+'Name']=_0x3aae90['gZirZ'];continue;case'1':_0x3b7616[_0x211aa4(0x2d1)+_0x211aa4(0x320)+'t']=_0x1b21fb;continue;case'2':var _0x31da29=document['creat'+_0x211aa4(0x507)+'ent'](_0x211aa4(0x413));continue;case'3':var _0x3b7616=document[_0x211aa4(0x402)+_0x211aa4(0x507)+_0x211aa4(0x3b1)](_0x3aae90[_0x211aa4(0x5e8)]);continue;case'4':for(var _0x557fb1 of _0x53c26f)_0x31da29[_0x211aa4(0x24b)+_0x211aa4(0x57b)+'d'](_0x557fb1);continue;case'5':_0x31da29[_0x211aa4(0x24b)+'dChil'+'d'](_0x3b7616);continue;case'6':_0x3b7616[_0x211aa4(0x582)+'Name']=_0x3aae90[_0x211aa4(0x178)];continue;case'7':_0x947ff4['appen'+'dChil'+'d'](_0x31da29);continue;}break;}}return _0x947ff4;}else _0x17426a[_0x211aa4(0x3ea)+'ck']=_0x46654f,_0x3e071e();}var _0x450397=[{'id':_0x1aa686[_0x9b22f1(0x440)],'label':_0x9b22f1(0x3bc)+'t'},{'id':_0x9b22f1(0x294),'label':_0x9b22f1(0x1f8)},{'id':_0x1aa686['nMsJL'],'label':_0x1aa686['PkgyY']},{'id':_0x1aa686['uuApW'],'label':_0x9b22f1(0x4aa)},{'id':_0x1aa686[_0x9b22f1(0x344)],'label':_0x9b22f1(0x22c)+'y'}];function _0x24ca9e(){var _0x288bd7=_0x9b22f1;if(_0x288bd7(0x213)===_0x3aae90[_0x288bd7(0x15c)])_0x3aae90[_0x288bd7(0x6a2)](_0x1d1884,_0x3eb759,_0xbe5561,_0x50eb93,_0x3aae90['ZHNXD']);else{var _0x1bcf18=_0x2dda20['safeM'+_0x288bd7(0x555)]?'SAFE\x20'+'MODE\x20'+'—\x20ove'+_0x288bd7(0x242)+_0x288bd7(0x3b6)+_0x288bd7(0x4e5)+_0x288bd7(0x3a4)+_0x288bd7(0x69f)+_0x288bd7(0x38b)+_0x288bd7(0x28e)+')':_0x2dda20[_0x288bd7(0x2f9)]?_0x3aae90['LMQaq'](_0x288bd7(0x29b)+'bound'+'\x20'+(_0x2dda20[_0x288bd7(0x151)+'Total']?_0x3aae90['yEOhj'](_0x3aae90[_0x288bd7(0x65c)](_0x2dda20['hooks'+'Ok'],'/'),_0x2dda20[_0x288bd7(0x151)+_0x288bd7(0x14c)])+(_0x288bd7(0x560)+'s'):_0x288bd7(0x58f)+'ks\x20ar'+_0x288bd7(0x3d9)+'all\x20o'+_0x288bd7(0x51d))+('\x20|\x20ga'+_0x288bd7(0x24a))+(_0x2dda20[_0x288bd7(0x23d)+_0x288bd7(0x18d)]?_0x288bd7(0x282)+'d':_0x3aae90['waaAL']),_0x3aae90['zeXtF'])+(_0x2dda20[_0x288bd7(0x51a)+_0x288bd7(0x56e)]?_0x3aae90[_0x288bd7(0x407)]:_0x288bd7(0x609))+(_0x288bd7(0x629)+'vemen'+'t\x20')+(_0x2dda20[_0x288bd7(0x2e4)+'ents']?'held':_0x288bd7(0x609)):_0x288bd7(0x29b)+_0x288bd7(0x37d)+_0x288bd7(0x64c)+_0x288bd7(0x1ee)+'ay\x20on'+'ly\x20(r'+'einst'+_0x288bd7(0x2cd)+'he\x20us'+_0x288bd7(0x225)+'ipt)';if(_0x2dda20[_0x288bd7(0x4bc)+_0x288bd7(0x4af)])_0x1bcf18+=_0x3aae90[_0x288bd7(0x30a)]+_0x2dda20[_0x288bd7(0x4bc)+_0x288bd7(0x4af)];return _0x1788b1(_0x3aae90[_0x288bd7(0x652)],_0x1bcf18,_0x2dda20['uwmk'],null,[_0x4e98c3(_0x3aae90['wRzjv'],_0x288bd7(0x66b)+_0x288bd7(0x473)+_0x288bd7(0x160)+_0x288bd7(0x45d)+_0x288bd7(0x439)+'tion.'+_0x288bd7(0x373)+_0x288bd7(0x513)+'Frame'+'Rate',_0x167a9d(_0x288bd7(0x55a),()=>{var _0x502c67=_0x288bd7;if(_0x3aae90[_0x502c67(0x24e)]==='evmGU')_0x564368['cross'+'hair']=_0x220989,_0x383dab();else try{if(_0x502c67(0x3dc)===_0x502c67(0x3dc)){if(_0x27e817)_0x27e817['call'](_0x3aae90[_0x502c67(0x65f)],_0x502c67(0x373)+_0x502c67(0x513)+_0x502c67(0x17e)+'Rate',[-0x1*-0x48b+0x7*-0x17f+0x2*0x36f]);}else _0x40b703[_0x502c67(0x55d)](_0x3ad1ef,null);}catch(_0xdf5629){}}))]);}}function _0x50f14b(_0x267fab){var _0x4ca9dd=_0x9b22f1,_0x4b78a9={'gQtmo':function(_0x4c64e0,_0xcbde01){return _0x3aae90['dJNeX'](_0x4c64e0,_0xcbde01);},'VAcBa':_0x4ca9dd(0x1a6),'REdOC':function(_0xdd0478,_0x23a226){return _0x3aae90['Roqjg'](_0xdd0478,_0x23a226);},'EecKI':function(_0x461ba3,_0x1dd7dc){var _0x4f938e=_0x4ca9dd;return _0x3aae90[_0x4f938e(0x343)](_0x461ba3,_0x1dd7dc);},'UAYjm':function(_0x1da211,_0x27293f){return _0x3aae90['iHkeV'](_0x1da211,_0x27293f);},'hZBZy':_0x3aae90[_0x4ca9dd(0x4e7)],'HoMnk':function(_0xde4c3,_0x490ef1){return _0xde4c3+_0x490ef1;},'PMwhv':_0x3aae90['NcXev'],'viKVz':'fMrXy','rYFrT':function(_0x21a5a7){return _0x21a5a7();},'BxmmG':_0x3aae90['NZtDr'],'UFHRq':'1|3|5'+_0x4ca9dd(0x329)+'4','BhxBR':function(_0xc5b00f){return _0xc5b00f();},'HonHC':function(_0x83c9b1){return _0x83c9b1();}};if(_0x4ca9dd(0x454)!==_0x4ca9dd(0x454))_0x5c8d73[_0x4ca9dd(0x4fd)](_0x362064['code']);else{if(_0x267fab===_0x4ca9dd(0x27d)+'t')return[_0x24ca9e(),_0x1788b1(_0x3aae90[_0x4ca9dd(0x368)],_0x4ca9dd(0x155)+_0x4ca9dd(0x2dd)+_0x4ca9dd(0x309)+'Initi'+_0x4ca9dd(0x306)+_0x4ca9dd(0x4bd)+_0x4ca9dd(0x442)+'nd\x20OH'+'ealth'+'.Loca'+_0x4ca9dd(0x404)+'\x20so\x20n'+_0x4ca9dd(0x39a)+_0x4ca9dd(0x4e2)+'\x20hurt'+'\x20or\x20k'+'ill\x20y'+_0x4ca9dd(0x677),_0x18f8f4[_0x4ca9dd(0x3f5)],_0x5f5392=>{var _0x150fc1=_0x4ca9dd;_0x18f8f4[_0x150fc1(0x3f5)]=_0x5f5392,_0x3aae90[_0x150fc1(0x202)](_0x1e7850),_0x35cba8(_0x150fc1(0x3f5),_0x5f5392),_0x35cba8(_0x150fc1(0x5fc)+'e',_0x5f5392);},[]),_0x1788b1(_0x4ca9dd(0x337)+_0x4ca9dd(0x257),_0x3aae90[_0x4ca9dd(0x642)],_0x18f8f4[_0x4ca9dd(0x3fa)+'oil'],_0x1c54ef=>{var _0x2d5afb=_0x4ca9dd;_0x18f8f4[_0x2d5afb(0x3fa)+'oil']=_0x1c54ef,_0x1e7850(),_0x35cba8('noRec'+'oil',_0x1c54ef);},[]),_0x3aae90['zBHrI'](_0x1788b1,'No\x20Sp'+_0x4ca9dd(0x5e2),_0x3aae90[_0x4ca9dd(0x533)],_0x18f8f4[_0x4ca9dd(0x3e7)+_0x4ca9dd(0x312)],_0x1f60cf=>{var _0x49a389=_0x4ca9dd;_0x4b78a9[_0x49a389(0x5a5)]('dcxoL',_0x4b78a9[_0x49a389(0x47d)])?_0x5af0c2[_0x49a389(0x24c)]['appen'+_0x49a389(0x57b)+'d'](_0x28b002):(_0x18f8f4['noSpr'+'ead']=_0x1f60cf,_0x1e7850());},[]),_0x3aae90[_0x4ca9dd(0x2db)](_0x1788b1,'Rapid'+_0x4ca9dd(0x51e)+_0x4ca9dd(0x3d1)+']',_0x3aae90['QKrFT'],_0x18f8f4[_0x4ca9dd(0x2b7)+'Exp'],_0x2eb748=>{var _0xb3391=_0x4ca9dd;if(_0xb3391(0x16c)===_0xb3391(0x28a)){if(!_0x2ad333||_0x24991d['inclu'+_0xb3391(0x281)](_0x25a5ae)||_0x4b78a9[_0xb3391(0x476)](_0x2909e5['lengt'+'h'],0x6*0x4a2+0x5*-0x5c3+0x143))return;_0x14e4a7['push'](_0x5505be);}else _0x18f8f4['rapid'+'Exp']=_0x2eb748,_0x1e7850();},[]),_0x3aae90[_0x4ca9dd(0x2db)](_0x1788b1,_0x3aae90['IDhbA'],_0x3aae90['oScBn'],_0x18f8f4['damag'+_0x4ca9dd(0x4e4)],_0x179431=>{var _0xcb13f8=_0x4ca9dd;_0x18f8f4['damag'+_0xcb13f8(0x4e4)]=_0x179431,_0x1e7850();},[_0x4e98c3('Damag'+_0x4ca9dd(0x284)+'ue',null,_0x3aae90[_0x4ca9dd(0x4e6)](_0x4c1b9c,_0x18f8f4[_0x4ca9dd(0x509)+'eValu'+'e'],0x21*-0xcd+0x13a6+0x5*0x15d,0x1*-0x377+0xa64+-0x4f9,0xf8+0xd49+-0xe3c,_0xc9df0b=>{var _0x498ef4=_0x4ca9dd;_0x18f8f4[_0x498ef4(0x509)+_0x498ef4(0x45c)+'e']=_0xc9df0b,_0x3aae90['gicrw'](_0x1e7850);}))]),_0x3aae90[_0x4ca9dd(0x58c)](_0x1788b1,_0x4ca9dd(0x2c9)+'ite\x20A'+'mmo\x20['+'EXP]',_0x3aae90[_0x4ca9dd(0x1fe)],_0x18f8f4[_0x4ca9dd(0x68e)+_0x4ca9dd(0x3a3)],_0x496243=>{var _0x8c21db=_0x4ca9dd;_0x3aae90['jeMfG']('eiBUT',_0x3aae90[_0x8c21db(0x190)])?(_0x289f15=_0xe44a0e[_0x8c21db(0x535)](_0x4b78a9['EecKI'](_0x5bb0fe*(-0x664+-0x2*-0x10af+-0x1712),_0x3bf412-_0x5d4cb1)),_0x28bc3d=-0x1a3*-0x1+-0x1c58+-0x1*-0x1ab5,_0x163963=_0x5c092e):(_0x18f8f4['infAm'+'moExp']=_0x496243,_0x1e7850());},[_0x56bebc(_0x3aae90['mXQGX'])])];if(_0x267fab===_0x4ca9dd(0x294))return[_0x3aae90[_0x4ca9dd(0x3be)](_0x1788b1,_0x3aae90['wvFyS'],'Scale'+_0x4ca9dd(0x28f)+_0x4ca9dd(0x65e)+_0x4ca9dd(0x1e7)+'ment\x20'+'speed'+_0x4ca9dd(0x448)+'ts\x20pl'+_0x4ca9dd(0x4b9)+_0x4ca9dd(0x519)+'ation'+'.',_0x18f8f4['speed'+'Pct']!==-0x664*-0x1+0x1*-0x1802+0x1202,null,[_0x3aae90['bhwiY'](_0x4e98c3,_0x3aae90[_0x4ca9dd(0x2fa)],_0x4ca9dd(0x2ea)+_0x4ca9dd(0x4f2)+'ult',_0x4c1b9c(_0x18f8f4['speed'+'Pct'],-0x1ce*0x14+-0x4*-0x62f+0xb8e*0x1,-0x27*0xcb+0x26d6+0x159*-0x5,-0x214b*-0x1+-0x24a9+0x363,_0x4847fd=>{var _0x6fc197=_0x4ca9dd;_0x18f8f4[_0x6fc197(0x435)+'Pct']=_0x4847fd,_0x1e7850();}))]),_0x1788b1(_0x3aae90['JobUG'],'Scale'+'s\x20Mov'+'ement'+'.jump'+'Force'+_0x4ca9dd(0x5ee)+_0x4ca9dd(0x2c8)+_0x4ca9dd(0x25d)+'ty\x20va'+'lues.',_0x18f8f4['jumpP'+'ct']!==0x11a8+-0x8d5*0x4+0x10*0x121||_0x3aae90['jeMfG'](_0x18f8f4[_0x4ca9dd(0x25d)+_0x4ca9dd(0x605)],-0xeab*-0x2+-0xb*0x1b+-0x943*0x3),null,[_0x4e98c3(_0x4ca9dd(0x38f)+'%',null,_0x4c1b9c(_0x18f8f4[_0x4ca9dd(0x4ea)+'ct'],-0x2291*0x1+0x3*-0x85f+0x3be*0x10,-0x5*-0x756+-0x103+-0x227f,0x32*0x2a+0x2632+-0x2e61,_0xabfb1=>{var _0x19cb56=_0x4ca9dd;_0x3aae90[_0x19cb56(0x256)]('VIgvb',_0x3aae90['ihrqg'])?(_0x530ddd['chSiz'+'e']=_0x1fa2a8,_0x53c998()):(_0x18f8f4[_0x19cb56(0x4ea)+'ct']=_0xabfb1,_0x1e7850());})),_0x4e98c3(_0x4ca9dd(0x3ce)+'ty\x20%',_0x4ca9dd(0x39d)+_0x4ca9dd(0x645)+_0x4ca9dd(0x62c),_0x3aae90['KFdge'](_0x4c1b9c,_0x18f8f4[_0x4ca9dd(0x25d)+_0x4ca9dd(0x605)],0x1e6+-0x16e6+0x150a,-0x29d+0x4f5*-0x6+0x2123*0x1,-0x11e*0x1a+0x1b1f+0x1f2,_0x2dbaf0=>{var _0x21d7c9=_0x4ca9dd;_0x18f8f4[_0x21d7c9(0x25d)+'tyPct']=_0x2dbaf0,_0x3aae90['XBAsH'](_0x1e7850);}))]),_0x3aae90[_0x4ca9dd(0x3be)](_0x1788b1,_0x3aae90['HRTiX'],_0x3aae90[_0x4ca9dd(0x1ec)],_0x18f8f4['bhop'],_0x19b960=>{var _0x4a6cf7=_0x4ca9dd;if(_0x3aae90[_0x4a6cf7(0x481)](_0x4a6cf7(0x504),_0x4a6cf7(0x283)))try{_0xee9653['enabl'+'ed']=![];}catch(_0x464ba8){}else _0x18f8f4[_0x4a6cf7(0x2d9)]=_0x19b960,_0x1e7850();},[])];if(_0x3aae90[_0x4ca9dd(0x4a6)](_0x267fab,_0x4ca9dd(0x5e5)+'l'))return[_0x3aae90[_0x4ca9dd(0x50b)](_0x1788b1,'Keyst'+_0x4ca9dd(0x1c4),_0x3aae90[_0x4ca9dd(0x316)],_0x18f8f4['keyst'+'rokes'],_0x3ca14d=>{var _0x3eb176=_0x4ca9dd;_0x18f8f4[_0x3eb176(0x660)+_0x3eb176(0x1c4)]=_0x3ca14d,_0x1e7850();},[_0x4e98c3('Posit'+_0x4ca9dd(0x3ab),null,_0x3aae90['qVCgS'](_0x54f611,_0x18f8f4[_0x4ca9dd(0x191)],[['bl','Botto'+_0x4ca9dd(0x315)+'t'],['br',_0x4ca9dd(0x664)+'m\x20rig'+'ht'],['ml',_0x4ca9dd(0x633)+_0x4ca9dd(0x130)+'e']],_0x4b034f=>{var _0x64a14e=_0x4ca9dd;if(_0x4b78a9['UAYjm'](_0x4b78a9[_0x64a14e(0x3cc)],'dFLcs'))_0x18f8f4[_0x64a14e(0x191)]=_0x4b034f,_0x1e7850();else return _0x571a2e[_0x64a14e(0x5d2)](_0x64a14e(0x326)+'ra-ko'+_0x64a14e(0x137)+_0x64a14e(0x5f0)+'eg\x20fa'+_0x64a14e(0x152),_0x16a955,_0x5aa083&&_0x3ee0bb['messa'+'ge']),null;})),_0x4e98c3('Size',null,_0x3aae90[_0x4ca9dd(0x334)](_0x4c1b9c,_0x18f8f4[_0x4ca9dd(0x561)+'le'],0x23fe+0x1da2*-0x1+-0x65c+0.6,0xb5*-0x1b+-0x1*0x9+-0x53*-0x3b+0.6000000000000001,0x916*-0x4+0x3*-0x11f+-0x13*-0x217+0.05,_0x3cd392=>{_0x18f8f4['ksSca'+'le']=_0x3cd392,_0x1e7850();})),_0x4e98c3(_0x4ca9dd(0x172)+'eadou'+'t',null,_0x2f6243(_0x18f8f4['ksCps'],_0x44b41a=>{_0x18f8f4['ksCps']=_0x44b41a,_0x1e7850();}))]),_0x3aae90[_0x4ca9dd(0x4e6)](_0x1788b1,_0x3aae90['moxbM'],'Custo'+_0x4ca9dd(0x5a3)+'ter\x20c'+_0x4ca9dd(0x165)+_0x4ca9dd(0x60e),_0x18f8f4[_0x4ca9dd(0x184)+'hair'],_0x5f5a49=>{var _0x45f375=_0x4ca9dd;if(_0x4b78a9['viKVz']===_0x4b78a9['viKVz'])_0x18f8f4[_0x45f375(0x184)+'hair']=_0x5f5a49,_0x4b78a9['rYFrT'](_0x1e7850);else{if(!_0x463f3e[_0x45f375(0x2d8)+'ura'])_0x1075db[_0x45f375(0x5f4)+'e'](_0x4b78a9['HoMnk'](_0x4b78a9[_0x45f375(0x1bd)],_0x1b861c['butto'+'n']+(0x12e*0x12+0x222c+0xd*-0x443)));}},[_0x3aae90['qVCgS'](_0x4e98c3,_0x3aae90[_0x4ca9dd(0x5fd)],null,_0x4c1b9c(_0x18f8f4[_0x4ca9dd(0x3ee)+'e'],-0x491*-0x1+0x1*-0x13+-0x47e+0.5,-0x1*0x11d6+-0x13c0+-0x12cc*-0x2+0.5,-0x1231*0x1+0x926*-0x2+0x247d+0.1,_0x487725=>{var _0x5d1ea7=_0x4ca9dd;_0x18f8f4[_0x5d1ea7(0x3ee)+'e']=_0x487725,_0x3aae90['XBAsH'](_0x1e7850);})),_0x3aae90[_0x4ca9dd(0x5c3)](_0x4e98c3,'Color',null,_0x9e830a(_0x18f8f4['chCol'+'or'],_0x1ecb6c=>{var _0x505121=_0x4ca9dd;_0x18f8f4['chCol'+'or']=_0x1ecb6c,_0x3aae90[_0x505121(0x2bc)](_0x1e7850);}))]),_0x1788b1(_0x4ca9dd(0x2aa)+_0x4ca9dd(0x56e),'FPS\x20o'+_0x4ca9dd(0x3d7)+'y.',_0x18f8f4[_0x4ca9dd(0x474)],null,[_0x4e98c3(_0x3aae90[_0x4ca9dd(0x262)],null,_0x3aae90['AbieC'](_0x2f6243,_0x18f8f4[_0x4ca9dd(0x474)],_0x40716e=>{var _0x30efba=_0x4ca9dd;_0x30efba(0x1db)==='OtkCE'?(_0x18f8f4['fps']=_0x40716e,_0x1e7850()):_0x2408b5[_0x30efba(0x4ce)+'em'](_0x4b78a9['BxmmG'],_0x2f447d[_0x30efba(0x29f)+_0x30efba(0x484)](_0x565cab));})),_0x3aae90[_0x4ca9dd(0x60b)](_0x56bebc,_0x3aae90['JcoJr'])])];if(_0x3aae90['rbtPW'](_0x267fab,_0x3aae90['VjvII']))return[_0x1788b1(_0x4ca9dd(0x502)+'ck',_0x3aae90['vGeEN'],_0x18f8f4['adblo'+'ck'],_0x20ce0e=>{var _0x252e88=_0x4ca9dd;_0x18f8f4[_0x252e88(0x3ea)+'ck']=_0x20ce0e,_0x1e7850();},[_0x3aae90[_0x4ca9dd(0x269)](_0x56bebc,'Takes'+'\x20effe'+_0x4ca9dd(0x469)+_0x4ca9dd(0x3b5)+_0x4ca9dd(0x67f)+'en\x20to'+'ggled'+'.')])];return[_0x1788b1(_0x4ca9dd(0x503)+'Mode\x20'+_0x4ca9dd(0x363)+_0x4ca9dd(0x331)+_0x4ca9dd(0x1c9),'Skips'+_0x4ca9dd(0x449)+_0x4ca9dd(0x270)+'rely\x20'+'—\x20no\x20'+_0x4ca9dd(0x436)+_0x4ca9dd(0x151)+_0x4ca9dd(0x4be)+'\x20this'+'\x20if\x20m'+_0x4ca9dd(0x308)+_0x4ca9dd(0x42b)+'\x27t\x20st'+_0x4ca9dd(0x4b8),_0x18f8f4[_0x4ca9dd(0x17f)+'ode'],_0x38a978=>{var _0x2d2c43=_0x4ca9dd;_0x18f8f4[_0x2d2c43(0x17f)+_0x2d2c43(0x555)]=_0x38a978,_0x1e7850(),location['reloa'+'d']();},[_0x56bebc(_0x4ca9dd(0x658)+'es\x20on'+_0x4ca9dd(0x3b5)+'ad.\x20I'+'f\x20mat'+_0x4ca9dd(0x159)+'load\x20'+'in\x20sa'+_0x4ca9dd(0x1d2)+_0x4ca9dd(0x48d)+'he\x20fr'+_0x4ca9dd(0x3d3)+'is\x20ho'+_0x4ca9dd(0x401)+'lated'+'\x20—\x20te'+_0x4ca9dd(0x2df)+_0x4ca9dd(0x1b6)+'hooks'+_0x4ca9dd(0x52e)+'ied\x20c'+_0x4ca9dd(0x1ae))]),_0x1788b1(_0x3aae90['ZHbJE'],_0x4ca9dd(0x317)+'one\x20i'+_0x4ca9dd(0x3df)+'ls\x20a\x20'+'WASM\x20'+_0x4ca9dd(0x218)+_0x4ca9dd(0x524)+'\x20for\x20'+_0x4ca9dd(0x28d)+'hole\x20'+_0x4ca9dd(0x445)+'load.'+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+'ault\x20'+_0x4ca9dd(0x19e)+'ignat'+_0x4ca9dd(0x5c6)+_0x4ca9dd(0x694)+'oes\x20n'+_0x4ca9dd(0x607)+'tch\x20t'+'he\x20re'+_0x4ca9dd(0x5ce)+'thod\x20'+'throw'+_0x4ca9dd(0x4ac)+_0x4ca9dd(0x595)+_0x4ca9dd(0x2e2)+_0x4ca9dd(0x663)+_0x4ca9dd(0x224)+_0x4ca9dd(0x193)+_0x4ca9dd(0x3c0)+'\x20mome'+_0x4ca9dd(0x639)+_0x4ca9dd(0x349)+_0x4ca9dd(0x30f)+'.\x20Tur'+_0x4ca9dd(0x5fa)+_0x4ca9dd(0x615)+_0x4ca9dd(0x223)+_0x4ca9dd(0x1d4)+_0x4ca9dd(0x619)+'reloa'+_0x4ca9dd(0x23a)+_0x4ca9dd(0x4db)+_0x4ca9dd(0x18c)+_0x4ca9dd(0x54d)+_0x4ca9dd(0x255)+_0x4ca9dd(0x136)+'d\x20cho'+_0x4ca9dd(0x2dc)+'n.',_0x18f8f4[_0x4ca9dd(0x53b)+'od']||_0x18f8f4['hookG'+_0x4ca9dd(0x58e)]||_0x18f8f4[_0x4ca9dd(0x4a1)+'oReco'+'il']||_0x18f8f4['hookC'+'aptur'+'e'],_0x47b923=>{var _0x2d0b48=_0x4ca9dd,_0x3d3fb6=_0x4b78a9[_0x2d0b48(0x2c0)]['split']('|'),_0x58a724=-0xb2d*-0x1+-0x17*-0x133+-0x26c2;while(!![]){switch(_0x3d3fb6[_0x58a724++]){case'0':_0x4b78a9['BhxBR'](_0x1e7850);continue;case'1':_0x18f8f4[_0x2d0b48(0x53b)+'od']=_0x47b923;continue;case'2':_0x18f8f4[_0x2d0b48(0x596)+'aptur'+'e']=_0x47b923;continue;case'3':_0x18f8f4[_0x2d0b48(0x53b)+_0x2d0b48(0x58e)]=_0x47b923;continue;case'4':location[_0x2d0b48(0x467)+'d']();continue;case'5':_0x18f8f4[_0x2d0b48(0x4a1)+'oReco'+'il']=_0x47b923;continue;}break;}},[_0x56bebc(_0x4ca9dd(0x658)+'es\x20on'+_0x4ca9dd(0x3b5)+'ad.'),_0x4e98c3(_0x4ca9dd(0x57e)+'OHeal'+'th.In'+'itiat'+_0x4ca9dd(0x298)+'Healt'+'h)',null,_0x3aae90[_0x4ca9dd(0x212)](_0x2f6243,_0x18f8f4['hookG'+'od'],_0x11d55c=>{var _0x46b8a4=_0x4ca9dd;_0x18f8f4[_0x46b8a4(0x53b)+'od']=_0x11d55c,_0x1e7850();})),_0x3aae90[_0x4ca9dd(0x505)](_0x4e98c3,'godDi'+_0x4ca9dd(0x2b0)+'ealth'+'.Loca'+_0x4ca9dd(0x3e9),null,_0x2f6243(_0x18f8f4[_0x4ca9dd(0x53b)+_0x4ca9dd(0x58e)],_0x374003=>{var _0x426f9c=_0x4ca9dd;_0x18f8f4['hookG'+_0x426f9c(0x58e)]=_0x374003,_0x3aae90[_0x426f9c(0x202)](_0x1e7850);})),_0x4e98c3(_0x4ca9dd(0x3fa)+'oil\x20('+_0x4ca9dd(0x69b)+_0x4ca9dd(0x158)+_0x4ca9dd(0x21a)+'ck)',null,_0x2f6243(_0x18f8f4[_0x4ca9dd(0x4a1)+_0x4ca9dd(0x423)+'il'],_0x16e9bc=>{var _0x2f041c=_0x4ca9dd;_0x18f8f4['hookN'+_0x2f041c(0x423)+'il']=_0x16e9bc,_0x4b78a9['HonHC'](_0x1e7850);})),_0x3aae90[_0x4ca9dd(0x611)](_0x4e98c3,_0x4ca9dd(0x322)+'re\x20(S'+_0x4ca9dd(0x345)+'eRunn'+_0x4ca9dd(0x528)+_0x4ca9dd(0x261)+_0x4ca9dd(0x15f)+'d)',_0x4ca9dd(0x350)+_0x4ca9dd(0x4c4)+_0x4ca9dd(0x3f3)+'witho'+'ut\x20th'+'is',_0x2f6243(_0x18f8f4[_0x4ca9dd(0x596)+_0x4ca9dd(0x233)+'e'],_0x57b98e=>{var _0x5b2394=_0x4ca9dd;if(_0x5b2394(0x14b)===_0x3aae90['VpJTy'])_0x18f8f4['hookC'+'aptur'+'e']=_0x57b98e,_0x1e7850();else try{_0x2aba2b[_0x5b2394(0x49d)+'ed']=!!_0x471c7b;}catch(_0x7ab1d){}}))]),_0x1788b1(_0x4ca9dd(0x188)+_0x4ca9dd(0x16b)+'r','Disab'+_0x4ca9dd(0x5d4)+'odeSt'+_0x4ca9dd(0x496)+'etect'+'ors\x20a'+_0x4ca9dd(0x526)+_0x4ca9dd(0x302)+'via\x20S'+'topDe'+_0x4ca9dd(0x61e)+'on().'+'\x20Keep'+_0x4ca9dd(0x3de),_0x18f8f4['actkK'+'ill'],_0x3c2f7b=>{var _0x4b4420=_0x4ca9dd;_0x18f8f4[_0x4b4420(0x659)+_0x4b4420(0x64a)]=_0x3c2f7b,_0x3aae90[_0x4b4420(0x4a8)](_0x1e7850);},[_0x3aae90['kXNQs'](_0x56bebc,_0x4ca9dd(0x173)+'amage'+_0x4ca9dd(0x569)+'d\x20gre'+'atly\x20'+_0x4ca9dd(0x5d7)+_0x4ca9dd(0x62e)+'risk\x20'+'even\x20'+_0x4ca9dd(0x2d4)+'this\x20'+_0x4ca9dd(0x5db),!![])]),_0x1788b1(_0x4ca9dd(0x5f5)+'r',_0x4ca9dd(0x657)+_0x4ca9dd(0x530)+_0x4ca9dd(0x636)+'ver-v'+_0x4ca9dd(0x197)+_0x4ca9dd(0x4f6)+'ces.',!![],null,[_0x4e98c3(_0x3aae90['RkYhR'],null,_0x167a9d('Reset',()=>{_0x18f8f4={..._0x5c3b90},_0x1e7850(),location['reloa'+'d']();}))])];}}var _0x5595fd=null;function _0x48cf26(_0x204b25){var _0x14f401=_0x9b22f1,_0x2cbf35={'GlWSk':_0x3aae90['BYXJF']};if(_0x3aae90[_0x14f401(0x40c)]('LlfCq',_0x3aae90['NHPYx']))_0x293af2(_0x5c753c,0x117d+-0x3ab*-0x4+-0x1f9d,_0x2cbf35[_0x14f401(0x1b8)],-0x19*-0x152+-0x22e7+-0x1e5*-0x1+0.1),_0x181bf5(_0x35a123,0x11de+0x3*-0x94f+0xa6f*0x1,'f32',0x2*-0x3ae+0x3*0x233+0xc3+0.1);else{_0xc242dd=_0x204b25;if(!_0x5595fd){if('ZRuxZ'!==_0x14f401(0x601)){var _0x23d3a9=document[_0x14f401(0x402)+_0x14f401(0x507)+'ent'](_0x3aae90['kvwkU']);_0x23d3a9[_0x14f401(0x2d1)+'onten'+'t']=_0x27e6c0,_0x1a4be0[_0x14f401(0x24b)+_0x14f401(0x57b)+'d'](_0x23d3a9),_0x5595fd=_0x24c7bf(),_0x1a4be0['appen'+'dChil'+'d'](_0x5595fd),requestAnimationFrame(()=>_0x5595fd[_0x14f401(0x582)+_0x14f401(0x55b)][_0x14f401(0x4fd)]('shown'));}else _0x236294['stopP'+_0x14f401(0x41f)+'ation'](),_0x3aae90['nkPAM'](_0x2991c4);}_0x5595fd[_0x14f401(0x582)+_0x14f401(0x55b)]['toggl'+'e']('shown',_0x204b25);}}function _0x13b0c2(){var _0x3411a6=_0x9b22f1;_0x1aa686[_0x3411a6(0x67d)](_0x48cf26,!_0xc242dd);}function _0x24c7bf(){var _0x45ba80=_0x9b22f1,_0x2694ba={'FLbIi':function(_0x4017b6){return _0x4017b6();},'AKWja':function(_0x28ca51,_0x4ff6d5){return _0x28ca51+_0x4ff6d5;},'JAEoR':'Sakur'+'a\x20Kou'+_0x45ba80(0x171),'VlWiM':function(_0x134709,_0x479519){var _0x89eb7a=_0x45ba80;return _0x3aae90[_0x89eb7a(0x5cc)](_0x134709,_0x479519);},'kzCIe':_0x3aae90['UxsMY'],'bVmPo':function(_0x5b3954,_0x111c6c){return _0x5b3954<_0x111c6c;},'RwJUz':function(_0x11d197,_0x5ac9b0){var _0x1003cc=_0x45ba80;return _0x3aae90[_0x1003cc(0x3e0)](_0x11d197,_0x5ac9b0);},'VHBxC':_0x45ba80(0x69c),'gVFgF':'SAFE','AtZTC':'SAFE\x20'+'MODE\x20'+_0x45ba80(0x525)+'rlay\x20'+'only,'+_0x45ba80(0x4e5)+_0x45ba80(0x3a4)+_0x45ba80(0x69f)+_0x45ba80(0x38b)+_0x45ba80(0x28e)+')','pVDVh':function(_0x429e82,_0x527203){var _0x3d66e1=_0x45ba80;return _0x3aae90[_0x3d66e1(0x397)](_0x429e82,_0x527203);},'uehgj':_0x3aae90[_0x45ba80(0x432)],'oiqol':_0x3aae90['wJNao'],'VpCcX':'none'},_0xde3376=document[_0x45ba80(0x402)+_0x45ba80(0x507)+_0x45ba80(0x3b1)](_0x3aae90[_0x45ba80(0x5e8)]);_0xde3376['class'+_0x45ba80(0x198)]=_0x45ba80(0x562)+_0x45ba80(0x2ca);var _0x36c7ae=document['creat'+_0x45ba80(0x507)+_0x45ba80(0x3b1)](_0x3aae90[_0x45ba80(0x538)]);_0x36c7ae['class'+_0x45ba80(0x198)]=_0x3aae90['OofAr'];var _0x489a0e=document['creat'+_0x45ba80(0x507)+_0x45ba80(0x3b1)](_0x3aae90['CIlJJ']);_0x489a0e[_0x45ba80(0x582)+'Name']=_0x3aae90['KjbCc'],_0x489a0e[_0x45ba80(0x3da)+_0x45ba80(0x49a)]=_0x3aae90[_0x45ba80(0x1eb)],_0x36c7ae[_0x45ba80(0x24b)+'dChil'+'d'](_0x489a0e);var _0x539cea=document[_0x45ba80(0x402)+_0x45ba80(0x507)+_0x45ba80(0x3b1)]('div');_0x539cea['class'+'Name']=_0x45ba80(0x2e6)+'in';var _0x137358=document[_0x45ba80(0x402)+_0x45ba80(0x507)+_0x45ba80(0x3b1)](_0x3aae90[_0x45ba80(0x303)]);_0x137358['class'+'Name']='mn-to'+'p';var _0x3a59b0=document[_0x45ba80(0x402)+'eElem'+_0x45ba80(0x3b1)](_0x3aae90[_0x45ba80(0x5e8)]);_0x3a59b0[_0x45ba80(0x582)+_0x45ba80(0x198)]=_0x3aae90['YyXgY'];var _0xaad17b=document['creat'+_0x45ba80(0x507)+_0x45ba80(0x3b1)]('h2');_0xaad17b['class'+'Name']=_0x3aae90['nSeNr'],_0xaad17b[_0x45ba80(0x2d1)+_0x45ba80(0x320)+'t']='Sakur'+'a\x20Kou'+'r';var _0x18bba1=document[_0x45ba80(0x402)+_0x45ba80(0x507)+_0x45ba80(0x3b1)]('small');_0x18bba1[_0x45ba80(0x582)+'Name']='mn-su'+'b',_0x18bba1[_0x45ba80(0x2d1)+_0x45ba80(0x320)+'t']=_0x45ba80(0x297)+_0x45ba80(0x50a)+_0x45ba80(0x4ae)+'enu',_0x3a59b0[_0x45ba80(0x24b)+'d'](_0xaad17b,_0x18bba1);var _0x84c023=document['creat'+_0x45ba80(0x507)+'ent'](_0x3aae90[_0x45ba80(0x1a5)]);_0x84c023[_0x45ba80(0x5c9)]=_0x45ba80(0x5ca)+'n',_0x84c023[_0x45ba80(0x582)+_0x45ba80(0x198)]=_0x3aae90[_0x45ba80(0x342)],_0x84c023['title']=_0x45ba80(0x4dc),_0x84c023[_0x45ba80(0x3da)+_0x45ba80(0x49a)]=_0x3aae90['eNrlv'],_0x84c023[_0x45ba80(0x161)+'ck']=()=>_0x48cf26(![]),_0x137358['appen'+'d'](_0x3a59b0,_0x84c023);var _0x563ca7=document['creat'+_0x45ba80(0x507)+'ent'](_0x45ba80(0x413));_0x563ca7['class'+_0x45ba80(0x198)]='mn-co'+'ls',_0x539cea[_0x45ba80(0x24b)+'d'](_0x137358,_0x563ca7),_0xde3376[_0x45ba80(0x24b)+'d'](_0x36c7ae,_0x539cea);var _0x392423=new Map();for(var _0x5b7848 of _0x450397){var _0x641a9d=document[_0x45ba80(0x402)+_0x45ba80(0x507)+_0x45ba80(0x3b1)]('butto'+'n');_0x641a9d['type']=_0x3aae90[_0x45ba80(0x1a5)],_0x641a9d[_0x45ba80(0x582)+_0x45ba80(0x198)]=_0x45ba80(0x5a8)+'b',_0x641a9d['title']=_0x5b7848[_0x45ba80(0x451)],_0x641a9d['inner'+'HTML']=_0x45ba80(0x234)+'l>'+_0x5b7848[_0x45ba80(0x451)]+(_0x45ba80(0x3dd)+_0x45ba80(0x38c)),_0x641a9d[_0x45ba80(0x161)+'ck']=(_0x4cdc5a=>()=>_0x335cd3(_0x4cdc5a))(_0x5b7848['id']),_0x392423['set'](_0x5b7848['id'],_0x641a9d),_0x36c7ae[_0x45ba80(0x24b)+'dChil'+'d'](_0x641a9d);}function _0x335cd3(_0x34ce45){var _0x504a82=_0x45ba80;_0x1a2d16[_0x504a82(0x280)]=_0x34ce45,_0x2694ba[_0x504a82(0x434)](_0x270a53);var _0x1a85c1=_0x450397[_0x504a82(0x2cb)](_0x2325b6=>_0x2325b6['id']===_0x34ce45)||_0x450397[-0x61*0x64+-0xde5*0x1+0x33c9];_0xaad17b['textC'+'onten'+'t']=_0x2694ba['AKWja'](_0x2694ba[_0x504a82(0x699)],_0x1a85c1[_0x504a82(0x451)]);for(var [_0x197213,_0xd3846]of _0x392423)_0xd3846['class'+_0x504a82(0x55b)]['toggl'+'e']('activ'+'e',_0x197213===_0x34ce45);_0x563ca7[_0x504a82(0x567)+_0x504a82(0x59b)+_0x504a82(0x14e)](..._0x50f14b(_0x34ce45));}return _0x3aae90['CdAtf'](_0x335cd3,_0x1a2d16['cat']||_0x3aae90['crfsm']),_0x3aae90['SfwtM'](setInterval,()=>{var _0x444d40=_0x45ba80;if(_0x2694ba['VlWiM'](_0x444d40(0x501),_0x2694ba[_0x444d40(0x2a5)])){if(!_0xc242dd)return;var _0x3a3d7d=_0x563ca7[_0x444d40(0x2eb)+_0x444d40(0x17a)];for(var _0x36e4be=0x19d0+-0x2638+0xc68;_0x2694ba[_0x444d40(0x30c)](_0x36e4be,_0x3a3d7d[_0x444d40(0x5da)+'h']);_0x36e4be++){var _0x29b065=_0x3a3d7d[_0x36e4be][_0x444d40(0x3b7)+_0x444d40(0x563)+'tor'](_0x444d40(0x1c0)+_0x444d40(0x5ab));_0x29b065&&(_0x2694ba[_0x444d40(0x581)](_0x29b065['textC'+'onten'+'t'][_0x444d40(0x4d1)+'Of'](_0x2694ba['VHBxC']),-0x26aa+-0x1*0x2a5+0x294f)||_0x2694ba[_0x444d40(0x581)](_0x29b065[_0x444d40(0x2d1)+'onten'+'t'][_0x444d40(0x4d1)+'Of'](_0x2694ba[_0x444d40(0x409)]),-0x1*-0xb31+0x24f0+0x25*-0x14d))&&(_0x29b065['textC'+_0x444d40(0x320)+'t']=_0x2dda20[_0x444d40(0x17f)+'ode']?_0x2694ba[_0x444d40(0x5b6)]:_0x2dda20[_0x444d40(0x2f9)]?_0x2694ba['pVDVh'](_0x2694ba[_0x444d40(0x25b)](_0x2694ba[_0x444d40(0x25b)](_0x2694ba['uehgj'],_0x2dda20['hooks'+'Total']?_0x2694ba['AKWja'](_0x2694ba[_0x444d40(0x42a)](_0x2dda20[_0x444d40(0x151)+'Ok'],'/'),_0x2dda20[_0x444d40(0x151)+_0x444d40(0x14c)])+_0x2694ba['oiqol']:'0\x20hoo'+_0x444d40(0x444)+_0x444d40(0x3d9)+'all\x20o'+'ff)')+(_0x444d40(0x60a)+'me\x20'),_0x2dda20[_0x444d40(0x23d)+_0x444d40(0x18d)]?_0x444d40(0x282)+'d':_0x444d40(0x1cf)+'ng')+(_0x444d40(0x674)+_0x444d40(0x196)+'\x20'),_0x2dda20['shoot'+_0x444d40(0x56e)]?'held':_0x2694ba['VpCcX'])+(_0x444d40(0x629)+'vemen'+'t\x20')+(_0x2dda20['movem'+'ents']?_0x444d40(0x279):'none')+(_0x2dda20[_0x444d40(0x4bc)+_0x444d40(0x4af)]?'\x20|\x20ER'+'R:\x20'+_0x2dda20['lastE'+_0x444d40(0x4af)]:''):_0x444d40(0x29b)+'MISSI'+_0x444d40(0x4fa)+_0x444d40(0x1ee)+_0x444d40(0x558)+_0x444d40(0x3a9)+'einst'+_0x444d40(0x2cd)+'he\x20us'+_0x444d40(0x225)+_0x444d40(0x44f));}}else{_0x57db1c['gameL'+_0x444d40(0x18d)]=!!_0x3aeb61['unity'+_0x444d40(0x630)+_0x444d40(0x199)];try{var _0x3c3402=0x22de+0x42*-0x67+-0x850;for(var _0x3feee7 in _0xa65af8){if(_0x3eb356[_0x3feee7]&&_0x36e9e4[_0x3feee7][_0x444d40(0x541)+'ed'])_0x3c3402++;}_0x3e5487[_0x444d40(0x151)+'Ok']=_0x3c3402;}catch(_0x323264){}}},-0x316*-0x6+0x1*-0xedd+0x5*0xd),_0xde3376;}var _0x27e6c0=_0x9b22f1(0x3f4)+_0x9b22f1(0x672)+_0x9b22f1(0x4de)+_0x9b22f1(0x16d)+'itial'+';\x20}\x0a\x20'+_0x9b22f1(0x18f)+_0x9b22f1(0x568)+'-sizi'+'ng:\x20b'+_0x9b22f1(0x586)+_0x9b22f1(0x243)+_0x9b22f1(0x1d6)+'in:\x200'+';\x20fon'+_0x9b22f1(0x4d7)+_0x9b22f1(0x54c)+'\x22Inte'+_0x9b22f1(0x60f)+_0x9b22f1(0x64f)+'\x20UI\x22,'+'\x20syst'+'em-ui'+',\x20san'+_0x9b22f1(0x5be)+_0x9b22f1(0x24f)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel\x20'+_0x9b22f1(0x25a)+_0x9b22f1(0x267)+':\x20abs'+_0x9b22f1(0x2fd)+';\x20rig'+'ht:\x202'+'4px;\x20'+'botto'+_0x9b22f1(0x41c)+_0x9b22f1(0x613)+_0x9b22f1(0x520)+'\x20min('+_0x9b22f1(0x3c2)+',\x20cal'+_0x9b22f1(0x673)+'vw\x20-\x20'+'48px)'+_0x9b22f1(0x5d0)+_0x9b22f1(0x640)+_0x9b22f1(0x54a)+_0x9b22f1(0x1d7)+_0x9b22f1(0x260)+'\x20calc'+_0x9b22f1(0x45b)+'h\x20-\x204'+_0x9b22f1(0x13d)+_0x9b22f1(0x1de)+_0x9b22f1(0x268)+'splay'+_0x9b22f1(0x219)+_0x9b22f1(0x42d)+_0x9b22f1(0x446)+_0x9b22f1(0x695)+'addin'+'g:\x2010'+_0x9b22f1(0x391)+_0x9b22f1(0x586)+'-radi'+'us:\x202'+_0x9b22f1(0x477)+'point'+_0x9b22f1(0x1ea)+_0x9b22f1(0x20b)+'\x20auto'+_0x9b22f1(0x1de)+_0x9b22f1(0x13f)+_0x9b22f1(0x4f5)+_0x9b22f1(0x5e6)+_0x9b22f1(0x167)+_0x9b22f1(0x311)+_0x9b22f1(0x273)+_0x9b22f1(0x2f8)+_0x9b22f1(0x3c3)+'rop-f'+_0x9b22f1(0x548)+_0x9b22f1(0x389)+_0x9b22f1(0x139)+'x)\x20sa'+_0x9b22f1(0x3b4)+_0x9b22f1(0x459)+'%);\x20-'+_0x9b22f1(0x4e3)+_0x9b22f1(0x2e1)+_0x9b22f1(0x325)+'-filt'+_0x9b22f1(0x39e)+_0x9b22f1(0x433)+_0x9b22f1(0x38d)+'satur'+_0x9b22f1(0x47b)+'50%);'+_0x9b22f1(0x3f4)+'\x20\x20box'+'-shad'+'ow:\x200'+'\x200\x200\x20'+_0x9b22f1(0x205)+_0x9b22f1(0x1d0)+'55,25'+_0x9b22f1(0x5b4)+',.06)'+_0x9b22f1(0x21b)+'et\x200\x20'+_0x9b22f1(0x688)+_0x9b22f1(0x177)+_0x9b22f1(0x144)+'255,2'+_0x9b22f1(0x68f)+_0x9b22f1(0x355)+_0x9b22f1(0x1fc)+_0x9b22f1(0x58b)+_0x9b22f1(0x177)+'(0,0,'+_0x9b22f1(0x543)+_0x9b22f1(0x18a)+_0x9b22f1(0x3f6)+'pacit'+_0x9b22f1(0x200)+'\x20tran'+_0x9b22f1(0x497)+_0x9b22f1(0x5b7)+_0x9b22f1(0x34f)+_0x9b22f1(0x186)+'px);\x20'+'point'+_0x9b22f1(0x1ea)+_0x9b22f1(0x20b)+_0x9b22f1(0x428)+';\x20tra'+_0x9b22f1(0x357)+_0x9b22f1(0x63b)+'pacit'+_0x9b22f1(0x1c8)+_0x9b22f1(0x462)+'e,\x20tr'+_0x9b22f1(0x47c)+'rm\x20.4'+_0x9b22f1(0x48f)+_0x9b22f1(0x385)+'ezier'+_0x9b22f1(0x4bb)+_0x9b22f1(0x134)+_0x9b22f1(0x44a)+_0x9b22f1(0x3d4)+_0x9b22f1(0x457)+'r:\x20#f'+_0x9b22f1(0x2e9)+_0x9b22f1(0x4a7)+'t-siz'+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x9b22f1(0x288)+_0x9b22f1(0x398)+'shown'+_0x9b22f1(0x4d4)+'acity'+_0x9b22f1(0x456)+_0x9b22f1(0x300)+_0x9b22f1(0x624)+'\x20none'+_0x9b22f1(0x3f7)+'nter-'+_0x9b22f1(0x36f)+'s:\x20au'+'to;\x20}'+_0x9b22f1(0x3f4)+_0x9b22f1(0x1d5)+'ide\x20{'+'\x20disp'+_0x9b22f1(0x5b9)+_0x9b22f1(0x4c1)+_0x9b22f1(0x4bf)+_0x9b22f1(0x37a)+_0x9b22f1(0x154)+':\x20col'+_0x9b22f1(0x2b3)+_0x9b22f1(0x231)+'-item'+_0x9b22f1(0x2b9)+_0x9b22f1(0x2cf)+'\x20gap:'+'\x204px;'+_0x9b22f1(0x3bf)+_0x9b22f1(0x44e)+_0x9b22f1(0x4ec)+_0x9b22f1(0x307)+'none;'+_0x9b22f1(0x3e4)+'ing:\x20'+_0x9b22f1(0x52f)+(_0x9b22f1(0x21e)+_0x9b22f1(0x570)+_0x9b22f1(0x1be)+_0x9b22f1(0x4d3)+_0x9b22f1(0x5bf)+_0x9b22f1(0x3d4)+'backg'+'round'+':\x20rgb'+_0x9b22f1(0x36e)+_0x9b22f1(0x480)+_0x9b22f1(0x4b3)+_0x9b22f1(0x2c6)+_0x9b22f1(0x5ec)+'shado'+_0x9b22f1(0x26f)+'set\x200'+_0x9b22f1(0x50e)+_0x9b22f1(0x205)+_0x9b22f1(0x1d0)+_0x9b22f1(0x201)+'5,255'+_0x9b22f1(0x53e)+_0x9b22f1(0x46c)+'\x20\x20\x20.m'+_0x9b22f1(0x2f7)+'o\x20{\x20d'+_0x9b22f1(0x22e)+'y:\x20gr'+'id;\x20p'+_0x9b22f1(0x66e)+'items'+':\x20cen'+'ter;\x20'+_0x9b22f1(0x2a7)+':\x2032p'+'x;\x20he'+'ight:'+_0x9b22f1(0x47f)+_0x9b22f1(0x46c)+'\x20\x20\x20.m'+_0x9b22f1(0x2f7)+_0x9b22f1(0x351)+_0x9b22f1(0x25e)+'dth:\x20'+'25px;'+_0x9b22f1(0x527)+'ht:\x202'+'5px;\x20'+'overf'+_0x9b22f1(0x192)+'visib'+_0x9b22f1(0x20f)+'ilter'+_0x9b22f1(0x19a)+_0x9b22f1(0x1d3)+'dow(0'+_0x9b22f1(0x3d2)+_0x9b22f1(0x431)+_0x9b22f1(0x36e)+_0x9b22f1(0x54e)+'157,.'+_0x9b22f1(0x5d1)+_0x9b22f1(0x69d)+_0x9b22f1(0x35c)+_0x9b22f1(0x471)+'\x20disp'+_0x9b22f1(0x5b9)+'flex;'+_0x9b22f1(0x577)+'n-ite'+_0x9b22f1(0x21c)+_0x9b22f1(0x58d)+_0x9b22f1(0x5b8)+_0x9b22f1(0x1e3)+_0x9b22f1(0x358)+_0x9b22f1(0x452)+_0x9b22f1(0x58d)+';\x20wid'+_0x9b22f1(0x31a)+'2px;\x20'+_0x9b22f1(0x3fb)+'t:\x2034'+_0x9b22f1(0x391)+_0x9b22f1(0x586)+_0x9b22f1(0x362)+_0x9b22f1(0x48e)+'r-rad'+'ius:\x20'+_0x9b22f1(0x408)+_0x9b22f1(0x3f4)+_0x9b22f1(0x27e)+'kgrou'+_0x9b22f1(0x547)+_0x9b22f1(0x626)+_0x9b22f1(0x4c9)+_0x9b22f1(0x274)+_0x9b22f1(0x1aa)+_0x9b22f1(0x1d0)+_0x9b22f1(0x258)+'8,242'+',.4);'+_0x9b22f1(0x371)+_0x9b22f1(0x195)+_0x9b22f1(0x5e3)+'r;\x20fo'+_0x9b22f1(0x390)+_0x9b22f1(0x216)+'0px;\x20'+'font-'+'weigh'+_0x9b22f1(0x550)+_0x9b22f1(0x13b)+'\x20\x20\x20\x20.'+'mn-ta'+_0x9b22f1(0x5cd)+_0x9b22f1(0x43c)+'color'+_0x9b22f1(0x43e)+'a(246'+_0x9b22f1(0x464)+_0x9b22f1(0x3e8)+_0x9b22f1(0x131)+_0x9b22f1(0x3f4)+'.mn-t'+_0x9b22f1(0x3c1)+_0x9b22f1(0x37f)+'{\x20col'+_0x9b22f1(0x618)+_0x9b22f1(0x2bd)+'d;\x20ba'+_0x9b22f1(0x4f5)+_0x9b22f1(0x5e6)+_0x9b22f1(0x167)+_0x9b22f1(0x211)+_0x9b22f1(0x5fb)+'7,.1)'+';\x20}\x0a\x20'+_0x9b22f1(0x5f1)+_0x9b22f1(0x247)+_0x9b22f1(0x252)+_0x9b22f1(0x307)+'1;\x20mi'+_0x9b22f1(0x443)+_0x9b22f1(0x4f7)+_0x9b22f1(0x20a)+'play:'+_0x9b22f1(0x4bf)+_0x9b22f1(0x35a)+'x-dir'+'ectio'+_0x9b22f1(0x499)+_0x9b22f1(0x5e0)+_0x9b22f1(0x1ff)+_0x9b22f1(0x182)+_0x9b22f1(0x647)+'{\x20dis'+_0x9b22f1(0x67c)+_0x9b22f1(0x4bf)+_0x9b22f1(0x40e)+_0x9b22f1(0x542)+'ems:\x20'+_0x9b22f1(0x427)+_0x9b22f1(0x4b4)+'p:\x2012'+_0x9b22f1(0x695)+_0x9b22f1(0x58a)+_0x9b22f1(0x1c2)+_0x9b22f1(0x600)+_0x9b22f1(0x2ac)+_0x9b22f1(0x458)+'r-sel'+_0x9b22f1(0x34b)+_0x9b22f1(0x235)+_0x9b22f1(0x1ff)+'\x20\x20.mn'+'-titl'+_0x9b22f1(0x37c)+_0x9b22f1(0x40f)+_0x9b22f1(0x5a1)+_0x9b22f1(0x36d)+_0x9b22f1(0x666)+'0;\x20}\x0a'+_0x9b22f1(0x67e)+_0x9b22f1(0x1e8)+'{\x20fon'+'t-siz'+_0x9b22f1(0x2c1)+_0x9b22f1(0x4ec)+_0x9b22f1(0x377)+_0x9b22f1(0x41d)+_0x9b22f1(0x2e7)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+'\x20{\x20fo'+'nt-si'+'ze:\x201'+'1px;\x20'+'opaci')+(_0x9b22f1(0x1e4)+'4;\x20}\x0a'+_0x9b22f1(0x67e)+'mn-cl'+_0x9b22f1(0x229)+_0x9b22f1(0x251)+_0x9b22f1(0x5b9)+_0x9b22f1(0x1fb)+_0x9b22f1(0x57f)+_0x9b22f1(0x2e5)+'ms:\x20c'+_0x9b22f1(0x58d)+_0x9b22f1(0x418)+'th:\x202'+_0x9b22f1(0x2ee)+'heigh'+_0x9b22f1(0x697)+'px;\x20b'+'order'+':\x200;\x20'+'borde'+_0x9b22f1(0x66a)+'ius:\x20'+_0x9b22f1(0x2ee)+'backg'+_0x9b22f1(0x535)+':\x20tra'+_0x9b22f1(0x641)+_0x9b22f1(0x1ba)+'color'+':\x20inh'+'erit;'+_0x9b22f1(0x3c4)+'ity:\x20'+_0x9b22f1(0x2bf)+_0x9b22f1(0x508)+'r:\x20po'+_0x9b22f1(0x16e)+_0x9b22f1(0x46c)+'\x20\x20\x20.m'+'n-clo'+_0x9b22f1(0x238)+'ver\x20{'+'\x20opac'+_0x9b22f1(0x25c)+_0x9b22f1(0x1dd)+_0x9b22f1(0x4f5)+_0x9b22f1(0x5e6)+'rgba('+'255,2'+_0x9b22f1(0x201)+_0x9b22f1(0x50d)+_0x9b22f1(0x2e0)+_0x9b22f1(0x67e)+'mn-cl'+_0x9b22f1(0x453)+_0x9b22f1(0x35d)+_0x9b22f1(0x2a7)+_0x9b22f1(0x141)+_0x9b22f1(0x468)+_0x9b22f1(0x64b)+_0x9b22f1(0x194)+_0x9b22f1(0x65d)+'l:\x20no'+_0x9b22f1(0x573)+'troke'+':\x20cur'+_0x9b22f1(0x5af)+_0x9b22f1(0x2e3)+_0x9b22f1(0x5d8)+_0x9b22f1(0x245)+_0x9b22f1(0x666)+'2;\x20st'+'roke-'+_0x9b22f1(0x544)+'ap:\x20r'+'ound;'+'\x20}\x0a\x20\x20'+_0x9b22f1(0x182)+'-cols'+_0x9b22f1(0x55e)+'ex:\x201'+';\x20min'+_0x9b22f1(0x599)+'ht:\x200'+';\x20ove'+'rflow'+_0x9b22f1(0x4d9)+_0x9b22f1(0x215)+_0x9b22f1(0x66d)+'ay:\x20g'+_0x9b22f1(0x15b)+_0x9b22f1(0x5bd)+_0x9b22f1(0x156)+_0x9b22f1(0x438)+'olumn'+'s:\x20re'+_0x9b22f1(0x293)+_0x9b22f1(0x3e1)+_0x9b22f1(0x32f)+_0x9b22f1(0x485)+_0x9b22f1(0x686)+_0x9b22f1(0x56c)+'1fr))'+';\x20ali'+_0x9b22f1(0x542)+_0x9b22f1(0x44d)+_0x9b22f1(0x4cf)+';\x20ali'+_0x9b22f1(0x220)+'ntent'+_0x9b22f1(0x460)+_0x9b22f1(0x5d9)+'ap:\x201'+_0x9b22f1(0x4fe)+_0x9b22f1(0x210)+_0x9b22f1(0x5f9)+'\x204px\x20'+'6px\x200'+_0x9b22f1(0x46c)+'\x20\x20\x20.m'+_0x9b22f1(0x3af)+_0x9b22f1(0x272)+_0x9b22f1(0x2a0)+_0x9b22f1(0x2f2)+_0x9b22f1(0x69e)+'\x20{\x20wi'+_0x9b22f1(0x666)+_0x9b22f1(0x2ee)+_0x9b22f1(0x69d)+_0x9b22f1(0x35c)+'cols:'+_0x9b22f1(0x277)+'kit-s'+'croll'+_0x9b22f1(0x52c)+'humb\x20'+'{\x20bac'+'kgrou'+_0x9b22f1(0x3f0)+'gba(2'+_0x9b22f1(0x201)+'5,255'+',.08)'+_0x9b22f1(0x2c2)+_0x9b22f1(0x588)+'adius'+_0x9b22f1(0x51b)+';\x20}\x0a\x20'+_0x9b22f1(0x1bb)+_0x9b22f1(0x375)+_0x9b22f1(0x61c)+_0x9b22f1(0x586)+'-radi'+_0x9b22f1(0x665)+'2px;\x20'+_0x9b22f1(0x5b2)+_0x9b22f1(0x535)+_0x9b22f1(0x43e)+_0x9b22f1(0x36e)+_0x9b22f1(0x480)+_0x9b22f1(0x4b3)+_0x9b22f1(0x2c6)+'\x20box-'+_0x9b22f1(0x364)+_0x9b22f1(0x26f)+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x9b22f1(0x1d0)+_0x9b22f1(0x201)+_0x9b22f1(0x5b4)+_0x9b22f1(0x53e)+';\x20}\x0a\x20'+_0x9b22f1(0x1bb)+_0x9b22f1(0x375)+_0x9b22f1(0x529)+_0x9b22f1(0x49f)+'kgrou'+'nd:\x20r'+_0x9b22f1(0x1d0)+_0x9b22f1(0x201)+'5,255'+',.04)'+_0x9b22f1(0x2a3)+'-shad'+_0x9b22f1(0x1f5)+_0x9b22f1(0x5a2)+'0\x200\x200'+_0x9b22f1(0x333)+'rgba('+'255,1'+'07,15'+'7,.28'+_0x9b22f1(0x2e0)+'\x20\x20\x20\x20.'+_0x9b22f1(0x5ad)+_0x9b22f1(0x230)+_0x9b22f1(0x181)+_0x9b22f1(0x66d))+(_0x9b22f1(0x1ce)+_0x9b22f1(0x1fa)+'align'+'-item'+_0x9b22f1(0x2b9)+_0x9b22f1(0x2cf)+_0x9b22f1(0x265)+'\x208px;'+'\x20padd'+'ing:\x20'+_0x9b22f1(0x319)+_0x9b22f1(0x425)+_0x9b22f1(0x1ff)+'\x20\x20.sk'+_0x9b22f1(0x5c1)+_0x9b22f1(0x684)+_0x9b22f1(0x2d7)+_0x9b22f1(0x307)+_0x9b22f1(0x644)+'n-wid'+'th:\x200'+';\x20}\x0a\x20'+_0x9b22f1(0x1bb)+'k-car'+'d-tit'+'le\x20st'+'rong\x20'+'{\x20fon'+_0x9b22f1(0x1f4)+_0x9b22f1(0x4a2)+_0x9b22f1(0x4ec)+_0x9b22f1(0x377)+'eight'+_0x9b22f1(0x617)+_0x9b22f1(0x274)+_0x9b22f1(0x1aa)+'gba(2'+_0x9b22f1(0x258)+_0x9b22f1(0x209)+',.45)'+';\x20}\x0a\x20'+_0x9b22f1(0x1bb)+_0x9b22f1(0x375)+_0x9b22f1(0x529)+_0x9b22f1(0x236)+_0x9b22f1(0x33d)+_0x9b22f1(0x2a4)+'stron'+'g\x20{\x20c'+_0x9b22f1(0x169)+_0x9b22f1(0x5ac)+'0f5;\x20'+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+_0x9b22f1(0x516)+_0x9b22f1(0x24d)+'dding'+_0x9b22f1(0x63c)+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+_0x9b22f1(0x2f1)+_0x9b22f1(0x591)+'nt-si'+_0x9b22f1(0x216)+_0x9b22f1(0x3b0)+_0x9b22f1(0x589)+_0x9b22f1(0x1e4)+'4;\x20ma'+'rgin-'+'botto'+'m:\x206p'+_0x9b22f1(0x687)+_0x9b22f1(0x67e)+'sk-ct'+'l\x20{\x20d'+'ispla'+_0x9b22f1(0x2c5)+_0x9b22f1(0x2e8)+'lign-'+_0x9b22f1(0x572)+_0x9b22f1(0x50c)+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x9b22f1(0x210)+'ng:\x204'+'px\x200;'+'\x20font'+_0x9b22f1(0x638)+':\x2011.'+'5px;\x20'+_0x9b22f1(0x69d)+'\x20.sk-'+_0x9b22f1(0x451)+_0x9b22f1(0x55e)+'ex:\x201'+_0x9b22f1(0x274)+_0x9b22f1(0x1aa)+_0x9b22f1(0x1d0)+_0x9b22f1(0x258)+_0x9b22f1(0x209)+_0x9b22f1(0x4f4)+_0x9b22f1(0x46c)+_0x9b22f1(0x1bb)+_0x9b22f1(0x1fd)+_0x9b22f1(0x4fb)+_0x9b22f1(0x22e)+'y:\x20bl'+_0x9b22f1(0x578)+_0x9b22f1(0x185)+_0x9b22f1(0x579)+_0x9b22f1(0x132)+_0x9b22f1(0x422)+'city:'+_0x9b22f1(0x214)+_0x9b22f1(0x69d)+_0x9b22f1(0x38a)+_0x9b22f1(0x57d)+_0x9b22f1(0x1f2)+'ositi'+_0x9b22f1(0x510)+'elati'+_0x9b22f1(0x387)+_0x9b22f1(0x520)+_0x9b22f1(0x551)+';\x20hei'+'ght:\x20'+_0x9b22f1(0x36b)+_0x9b22f1(0x68c)+_0x9b22f1(0x39c)+_0x9b22f1(0x2c2)+_0x9b22f1(0x588)+_0x9b22f1(0x537)+_0x9b22f1(0x608)+'x;\x20ba'+'ckgro'+_0x9b22f1(0x5e6)+'rgba('+_0x9b22f1(0x271)+'55,25'+'5,.07'+');\x20cu'+_0x9b22f1(0x321)+'\x20poin'+'ter;\x20'+_0x9b22f1(0x40f)+_0x9b22f1(0x428)+_0x9b22f1(0x46c)+_0x9b22f1(0x1bb)+'k-swi'+_0x9b22f1(0x3b8)+_0x9b22f1(0x295)+'\x20{\x20co'+_0x9b22f1(0x4f8)+_0x9b22f1(0x4e8)+_0x9b22f1(0x1b1)+_0x9b22f1(0x424)+_0x9b22f1(0x27b)+'lute;'+_0x9b22f1(0x1a0)+_0x9b22f1(0x689)+_0x9b22f1(0x53c)+':\x203px'+_0x9b22f1(0x418)+_0x9b22f1(0x4ed)+_0x9b22f1(0x514)+_0x9b22f1(0x41d)+_0x9b22f1(0x61b)+_0x9b22f1(0x2c2)+'der-r'+_0x9b22f1(0x537)+_0x9b22f1(0x226)+';\x20bac'+'kgrou'+_0x9b22f1(0x3f0)+'gba(2'+'55,25'+_0x9b22f1(0x5b4)+_0x9b22f1(0x40a)+_0x9b22f1(0x66c)+'nsiti'+'on:\x20l'+'eft\x20.'+'2s,\x20b'+_0x9b22f1(0x19f)+_0x9b22f1(0x534)+'.2s;\x20'+_0x9b22f1(0x69d)+'\x20.sk-'+_0x9b22f1(0x57d)+_0x9b22f1(0x50f)+_0x9b22f1(0x3f8)+_0x9b22f1(0x29e)+'\x22true'+'\x22]\x20{\x20'+_0x9b22f1(0x5b2)+'round'+_0x9b22f1(0x43e))+(_0x9b22f1(0x36e)+_0x9b22f1(0x54e)+'157,.'+_0x9b22f1(0x2d2)+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+_0x9b22f1(0x57d)+_0x9b22f1(0x50f)+'a-che'+_0x9b22f1(0x29e)+'\x22true'+_0x9b22f1(0x1b4)+_0x9b22f1(0x22b)+'{\x20lef'+_0x9b22f1(0x2f0)+'px;\x20b'+'ackgr'+'ound:'+'\x20#ff6'+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+_0x9b22f1(0x31e)+'\x20{\x20ba'+'ckgro'+'und:\x20'+'rgba('+_0x9b22f1(0x271)+_0x9b22f1(0x201)+'5,.03'+_0x9b22f1(0x5c2)+'order'+_0x9b22f1(0x362)+_0x9b22f1(0x48e)+_0x9b22f1(0x66a)+_0x9b22f1(0x354)+_0x9b22f1(0x51c)+_0x9b22f1(0x59a)+_0x9b22f1(0x414)+_0x9b22f1(0x540)+_0x9b22f1(0x3e4)+'ing:\x20'+_0x9b22f1(0x20c)+'px;\x20f'+'ont-s'+'ize:\x20'+_0x9b22f1(0x13c)+_0x9b22f1(0x68d)+'tline'+_0x9b22f1(0x406)+_0x9b22f1(0x616)+'x-sha'+_0x9b22f1(0x26d)+_0x9b22f1(0x4c6)+_0x9b22f1(0x50e)+_0x9b22f1(0x2af)+'\x20rgba'+'(255,'+'255,2'+'55,.0'+_0x9b22f1(0x19d)+_0x9b22f1(0x3f4)+'.sk-f'+_0x9b22f1(0x2f5)+'optio'+'n\x20{\x20b'+_0x9b22f1(0x19f)+'ound:'+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+'range'+'\x20{\x20di'+'splay'+_0x9b22f1(0x219)+_0x9b22f1(0x466)+'ign-i'+_0x9b22f1(0x376)+_0x9b22f1(0x31d)+_0x9b22f1(0x430)+'ap:\x208'+_0x9b22f1(0x437)+_0x9b22f1(0x3f4)+'.sk-s'+'lider'+_0x9b22f1(0x2ec)+_0x9b22f1(0x2a0)+'-appe'+'aranc'+'e:\x20no'+'ne;\x20a'+_0x9b22f1(0x23c)+'ance:'+'\x20none'+_0x9b22f1(0x418)+'th:\x209'+_0x9b22f1(0x4fe)+_0x9b22f1(0x3fb)+_0x9b22f1(0x5e7)+_0x9b22f1(0x587)+_0x9b22f1(0x4f5)+_0x9b22f1(0x5e6)+_0x9b22f1(0x300)+_0x9b22f1(0x492)+_0x9b22f1(0x685)+_0x9b22f1(0x67e)+_0x9b22f1(0x34c)+_0x9b22f1(0x4cd)+_0x9b22f1(0x277)+_0x9b22f1(0x5f8)+'lider'+'-runn'+_0x9b22f1(0x38e)+_0x9b22f1(0x372)+'\x20{\x20he'+'ight:'+'\x202px;'+'\x20bord'+'er-ra'+_0x9b22f1(0x54b)+'\x202px;'+_0x9b22f1(0x65a)+_0x9b22f1(0x661)+'d:\x20li'+_0x9b22f1(0x649)+_0x9b22f1(0x1cc)+_0x9b22f1(0x3a2)+'ff6b9'+_0x9b22f1(0x45e)+_0x9b22f1(0x450)+_0x9b22f1(0x330)+_0x9b22f1(0x21d)+_0x9b22f1(0x287)+_0x9b22f1(0x5ea)+_0x9b22f1(0x683)+_0x9b22f1(0x648)+_0x9b22f1(0x671)+'t,\x20rg'+_0x9b22f1(0x290)+'5,255'+',255,'+_0x9b22f1(0x2ba)+_0x9b22f1(0x1ff)+_0x9b22f1(0x1e5)+'-slid'+_0x9b22f1(0x17d)+'webki'+'t-sli'+'der-t'+_0x9b22f1(0x604)+_0x9b22f1(0x367)+'bkit-'+'appea'+_0x9b22f1(0x35e)+':\x20non'+_0x9b22f1(0x4d0)+_0x9b22f1(0x666)+'6px;\x20'+'heigh'+_0x9b22f1(0x392)+_0x9b22f1(0x576)+_0x9b22f1(0x15d)+'top:\x20'+_0x9b22f1(0x253)+'\x20bord'+'er-ra'+_0x9b22f1(0x54b)+_0x9b22f1(0x28b)+'\x20back'+_0x9b22f1(0x661)+'d:\x20#f'+'f6b9d'+_0x9b22f1(0x46c)+_0x9b22f1(0x1bb)+'k-val'+_0x9b22f1(0x591)+'nt-si'+_0x9b22f1(0x216)+'1px;\x20'+'font-'+_0x9b22f1(0x3b3)+'t:\x2060'+'0;\x20mi'+'n-wid'+'th:\x202'+_0x9b22f1(0x2ee)+'text-'+_0x9b22f1(0x231)+':\x20rig'+_0x9b22f1(0x472)+_0x9b22f1(0x169)+_0x9b22f1(0x177)+_0x9b22f1(0x4d8)+'238,2'+_0x9b22f1(0x5a0)+');\x20}\x0a'+_0x9b22f1(0x67e)+'sk-co'+_0x9b22f1(0x378))+(_0x9b22f1(0x3bf)+_0x9b22f1(0x145)+'px;\x20h'+'eight'+_0x9b22f1(0x670)+'x;\x20bo'+'rder:'+'\x200;\x20b'+_0x9b22f1(0x586)+'-radi'+'us:\x206'+'px;\x20b'+_0x9b22f1(0x19f)+_0x9b22f1(0x48c)+_0x9b22f1(0x428)+';\x20pad'+_0x9b22f1(0x6a0)+'\x200;\x20c'+'ursor'+_0x9b22f1(0x339)+_0x9b22f1(0x2cf)+_0x9b22f1(0x1ff)+_0x9b22f1(0x1e5)+_0x9b22f1(0x500)+'\x20{\x20fo'+_0x9b22f1(0x390)+'ze:\x201'+_0x9b22f1(0x3b0)+_0x9b22f1(0x59a)+_0x9b22f1(0x43e)+_0x9b22f1(0x405)+',238,'+_0x9b22f1(0x3e8)+_0x9b22f1(0x2ff)+_0x9b22f1(0x58a)+_0x9b22f1(0x175)+_0x9b22f1(0x19c)+'}\x0a\x20\x20\x20'+_0x9b22f1(0x38a)+_0x9b22f1(0x651)+_0x9b22f1(0x60d)+_0x9b22f1(0x457)+'r:\x20#f'+'f7a93'+';\x20}\x0a\x20'+_0x9b22f1(0x1bb)+_0x9b22f1(0x5d3)+'\x20{\x20al'+_0x9b22f1(0x68b)+_0x9b22f1(0x33e)+_0x9b22f1(0x482)+_0x9b22f1(0x4cf)+';\x20bor'+_0x9b22f1(0x27f)+_0x9b22f1(0x21e)+'rder-'+_0x9b22f1(0x1be)+_0x9b22f1(0x48b)+'x;\x20pa'+'dding'+':\x208px'+_0x9b22f1(0x493)+';\x20bac'+_0x9b22f1(0x1a8)+'nd:\x20#'+'ff6b9'+_0x9b22f1(0x328)+_0x9b22f1(0x314)+_0x9b22f1(0x26c)+_0x9b22f1(0x5de)+_0x9b22f1(0x638)+_0x9b22f1(0x40d)+_0x9b22f1(0x22d)+_0x9b22f1(0x185)+_0x9b22f1(0x3b3)+_0x9b22f1(0x550)+_0x9b22f1(0x63d)+_0x9b22f1(0x321)+_0x9b22f1(0x133)+'ter;\x20'+_0x9b22f1(0x69d)+_0x9b22f1(0x38a)+'btn:h'+'over\x20'+'{\x20fil'+_0x9b22f1(0x416)+'brigh'+'tness'+'(1.1)'+_0x9b22f1(0x46c)+_0x9b22f1(0x29d));window['addEv'+'entLi'+_0x9b22f1(0x5bc)+'r']('keydo'+'wn',_0x1d5afc=>{var _0x207077=_0x9b22f1;_0x3aae90[_0x207077(0x593)](_0x1d5afc[_0x207077(0x539)],_0x3aae90[_0x207077(0x522)])&&(_0x1d5afc[_0x207077(0x264)+_0x207077(0x2a6)+'ault'](),_0x13b0c2());},!![]);var _0x14876e=document[_0x9b22f1(0x402)+_0x9b22f1(0x507)+_0x9b22f1(0x3b1)](_0x9b22f1(0x413));_0x14876e[_0x9b22f1(0x602)][_0x9b22f1(0x42e)+'xt']=_0x1aa686['tCQwP'],_0x14876e[_0x9b22f1(0x3da)+'HTML']=_0x9b22f1(0x2b1)+_0x9b22f1(0x4c3)+_0x9b22f1(0x45f)+_0x9b22f1(0x285)+'\x2024\x22>'+_0x9b22f1(0x4f9)+'\x20d=\x22M'+_0x9b22f1(0x411)+_0x9b22f1(0x650)+_0x9b22f1(0x1a4)+'4-4.5'+'-4-7.'+_0x9b22f1(0x327)+'.5\x201.'+_0x9b22f1(0x488)+_0x9b22f1(0x353)+_0x9b22f1(0x465)+_0x9b22f1(0x56d)+'5c0\x203'+_0x9b22f1(0x2ce)+_0x9b22f1(0x1bf)+'.5z\x22\x20'+_0x9b22f1(0x3ef)+_0x9b22f1(0x2fb)+'\x22\x20str'+_0x9b22f1(0x33f)+_0x9b22f1(0x4a3)+_0x9b22f1(0x241)+_0x9b22f1(0x494)+_0x9b22f1(0x2ae)+_0x9b22f1(0x299)+_0x9b22f1(0x5d8)+'ke-li'+'necap'+_0x9b22f1(0x35f)+'nd\x22\x20s'+_0x9b22f1(0x494)+_0x9b22f1(0x420)+_0x9b22f1(0x4ca)+_0x9b22f1(0x176)+_0x9b22f1(0x286)+'circl'+_0x9b22f1(0x41b)+_0x9b22f1(0x575)+_0x9b22f1(0x3c9)+_0x9b22f1(0x5fe)+'\x221.5\x22'+_0x9b22f1(0x1ac)+'=\x22#ff'+'6b9d\x22'+'/></s'+_0x9b22f1(0x2f4),_0x14876e[_0x9b22f1(0x4b1)]=_0x1aa686[_0x9b22f1(0x475)],_0x14876e['onmou'+'seent'+'er']=()=>_0x14876e[_0x9b22f1(0x602)]['opaci'+'ty']='1',_0x14876e[_0x9b22f1(0x3d6)+'selea'+'ve']=()=>_0x14876e[_0x9b22f1(0x602)]['opaci'+'ty']=_0x9b22f1(0x16f),_0x14876e['oncli'+'ck']=_0x3415e0=>{var _0x2584cd=_0x9b22f1;_0x3415e0['stopP'+'ropag'+'ation'](),_0x1aa686[_0x2584cd(0x1cb)](_0x13b0c2);},document[_0x9b22f1(0x24c)]['appen'+_0x9b22f1(0x57b)+'d'](_0x14876e),_0x1aa686['bbZEK'](_0x85285b),_0x1aa686['xJAXi'](requestAnimationFrame,_0x31ee65),console[_0x9b22f1(0x332)](_0x1aa686['UxnQJ'],_0x2dda20[_0x9b22f1(0x2f9)]);});})()));function _0x4095(){var _0x4bb6ba=['lca1mcu','vunkse8','igjVEc0','y3HWBKe','igfUzca','uunbuxm','B29Rihi','icaGlM0','qNvUBNK','s1nNzLi','zgvSzxq','rgfUz2u','C3bSAxq','yw5Uywi','A2L0lxm','BMC6ida','BIb0Agu','mdCSmtu','z29KrgK','EuXhzKq','mciGCJ0','zw51ihi','Eca2ChG','s2vlBfa','C3r5Bgu','zw50CW','AhvTyIa','DhLqy3q','qMfLqvm','B3qGBwe','oIa5oxa','BM9Uzq','ihWGz2e','EhbKrwu','uvDUwNC','zxjYihS','ywLYlG','CIiSici','x19tquS','q0nit0W','rMfItuu','ChG7ihC','q2XLBKC','BsbVBIa','ztSGyM8','oIa2mda','B3i6icm','Aw1Llca','DdOYnNa','oIa4ChG','zcb7igi','mhGYnta','DgvJDgK','z2v0q28','C0fHrg8','mtK4nJCXnhLyrxruqq','BM93','we9SyMO','zM9YBtO','ignHy2G','CMfUC3a','DxjH','BgLUzvC','ihWGBw8','D0nVBg8','lZ48l3m','B2f0Eq','AwXnB3q','igjHBIa','zIXZExm','sw5ZDge','wxfQDK0','y2fWu2G','tgvMDca','ignVB2W','D2fPDgK','zsbZzxi','ms4XlJa','lxnPEMu','BNqGAxq','CIbHzhy','B246ig8','oIaWide','mdSGy3u','nJaWide','Fdj8mxW','Ec1OzwK','BNnWyxi','wKHewgO','C3zirhK','mtSGBwK','id0GzMW','Ce5SDMi','lxrVCca','jsbUBY0','BMvHCI0','AwXS','AwDODdO','tKCG4Ocuia','zw50tgK','zs5bCha','u2vNB2u','yY0XlJu','BM90zs4','wNbuDeu','rKLxBK4','EunNz1m','nNWXnNW','CNz2tuu','vgHLC2u','qxbWBgK','ywn0A0S','igjHy2S','wu1lEe8','te1ryxe','oYbMAwW','igzVDxi','wNPqqxq','A2v5C3q','z3jVDw4','odGXodG1neLIyLfYvG','BMf0Dxi','qM90Dg8','Dxm6ide','zhrOoIa','seTzu2K','BgLUzvq','Aw4Sihq','CI1Yywq','y2fSBhm','oYb0CMe','zgLZCgW','BgfJzs0','ohG5mc0','oIaYmNa','CMvWzwe','oMHVC3q','yYGXmda','ihWGC2G','AwXKigG','CNP4rwi','B3uU','C3zNiJ4','AgDmBKO','sw5Zzxi','zsbBrvG','CgXHEtO','BgHRtxy','icaGic4','ywqGD2G','u2rVzKe','EvfgAfu','Bw4TC2K','ksaXmda','lxrPDgW','DdSGFqO','yxGOmJu','EdSGFqO','mxb4ida','idnWEdS','EuPqrMO','AwDUlxm','igjVCMq','EdSGB3u','Aw5Mqw0','ntuSlJa','s2v5ra','y3jLBwu','nZTWB2K','AvnfqMy','Agf0igq','ChG7iha','AwrJwvu','DdOGmJG','u3bLzwq','sKffB1i','Cg9W','uMvJB2K','vvDnsW','FqOGica','BgXIyxi','khjLBg8','zgLUzZO','C2HPzNq','Cezmwu4','BwLKzgW','ocK7ih0','ideWChG','ihbVAw4','msWUmZy','DgLKzvC','igj1AwW','DxjDigG','AxmGyNu','CIGYmNa','qNLjza','mdSGFqO','mteUnxa','ohb4ksK','y2fWtw8','icaGyMe','sgvRvg4','oIaXnha','veDOz04','zgv2Awm','kdi1nsW','AdOGmZq','AeL3D2m','CMfUC2K','n1bjveX5ra','DgXL','wg54rg4','qLfHtLe','vg90ywW','BMqGBwe','BgrYzw4','rMLLBgq','ywn0Axy','Ag9VA3m','AwXLzdO','zM9YBxm','y3rPB24','qMXVy2S','DgvTCgW','t1vsx18','Be1VDgK','y2HLCYa','CMeTA28','CMLKoYa','ufDVru8','CMDPBI0','Ag9VA1a','B3vUzgu','EuvUz2K','B25JBgK','tMvzD2S','Fdn8mG','wMvYB2u','CM9ZC2G','wwzlEuS','CMDIysG','thfmBwK','B2XVCJO','A0vPt3m','s2LSBgu','Be9mEKq','BdOGAw4','Aw50zxi','mc41','idi0iJ4','CIdIGjqG','q1btihi','r29Kl2q','lwLVxYO','zZOGmNa','iNjVDw4','ihjNyMe','CerXr2e','DhjPyNu','CMvU','C2STzMK','vMLZDwe','zxi6oI0','rNjHBwu','C2fMzu0','DvPjrKq','ywqGEYa','icaUBw4','igDHDgu','y3jVC3m','zM9UDc0','zvKOmtG','yxvSDa','qunuAYa','Bw8GDg8','ktSkica','ChbLBNm','ihDOAwm','B2fKzwq','BLzKBxK','icaGkIa','q3zZDMi','A3nqB3m','Bg93oIa','Bwf0y2G','ide0ChG','B3i6iha','B290zxi','AxnPyMW','tMfTzq','BMnL','oIbKCM8','CgfYC2u','EcaWoYa','nsK7ih0','lsbHihm','ywnRz3i','ihrVCdO','DxzirNq','DNDctM4','BYbWAwC','ltiUns0','ugj0ChO','q3vkBxq','DgLKzs4','A2DYB3u','yxrPB24','B3i6ihi','yvrtDhO','igzPBgW','mNm7Cg8','B3vUDc4','ChGGDwK','zvn0EwW','ihbVC2K','CJOGDgG','nJaWia','iL06oMe','B2zdDgi','ihrOzsa','Cg9ZAxq','r2Xxu2S','DgvYo3C','zw50oYa','icaGlNm','rKz1zwi','ue13Ahy','CMfKAxu','ns00idC','lNnRlw0','zezmy3m','zZOGnNa','ihn0AwW','CM9Rzxm','C3rLCa','nYWWlJC','zg93BG','EsaUmZu','BMX5kq','rKHqyKi','CwHOu0m','z3jHzgK','odaSmtK','yxK6igy','Bg9HzgK','z2jHkdi','AwWGC3a','zMuGBw8','Cc1ZAge','DcbHihq','lM1Ulxm','ig1HCMC','BwLUkdq','sgLKzxm','zvbPEgu','v3jHCha','t3rRq0u','Dgv4Dei','mtSGyMe','oWOGica','ugf0Aa','zxj2zxi','vef0vvi','C2STy3q','DgLMEs0','DhK6ic4','icaUC2S','zM9UDa','ie1VDMu','Bw4TAca','qwvSzui','zxiTzxy','rfjsyMG','zuPhzgq','zw50rwW','B3zLCMW','tgXMq3e','y2fSBa','zMLSBfq','Acb7iha','rMrVu1u','Dc1ZAxO','B3C6igK','n3WYFda','CMqTDgK','tw92zq','z2v0','Bgv4oYa','z3jPzdS','idmWChG','AY1OAw4','ze1uwxC','ih0kica','EtOGmdS','ntuSmJu','z2LJCNC','DMDjsee','uNDiDKS','mxb4ihi','y2HLy2S','zJmY','ruLZyKq','ocWYndi','oYbKAxm','zw50CZO','nNb4idK','DxjZB3i','EI1PBMq','Bgu7igy','CgfKzgK','mJu1lde','A1Houxm','zezgCNy','ic40oYa','DxrVoYa','EMu6ide','mcuUifm','DhjHBxa','oIbMBgu','B24UvgK','lcbPBNm','Bxm6igm','ic8GDMe','mdSGyM8','ienquW','z24Ty28','C2HVD24','uNvUDgK','B25Lige','zsbTAxm','zxjZy3i','oIa1mcu','mhW1Fdq','BwLU','B3nLihS','t3bNwu4','zNrLCIa','u2fMzxq','nxb4oYa','AxnWBge','otq3mZe3ALjzvef3','CMqTAgu','ywXPz24','Bw91C2u','yxb0Dxi','phnTywW','BM9UztS','lNnRlwm','Bwf4','C2u6Ag8','rwXLBwu','zcWGyw4','DMfSDwu','ChbLyxi','z2fTzuW','Bhrps0m','mJqWiey','CMvZDg8','owqIihm','CMXHEsa','lwjVEdS','AeDfreC','A2uTD2K','nwmWidm','BI1TywK','BMDL','v2TnAvu','BwuG','yxbWzw4','yM9KEq','ihSGCge','vvbIEeu','Awy7ih0','mtr8mta','igrPC3a','BIb7igy','ltjWEdS','u2v0r2e','ihLVDxi','zePozvG','y29PBa','ndySmJm','A291CI0','EYbWB3m','quTxAMe','Axr5oIa','z3jHDMK','ihSGD2K','AezptMS','odbWEcW','ieLZr3i','AgfOuwe','idK5osa','ChjLDMu','igDHCdO','Be9kqMy','AxrPB24','icaGzgK','q2rbDgy','rLbtigm','zvvZqLq','i2zMzJS','zg93oIa','t0rJDfC','DZOGAw4','igvUDgK','mJu1ldi','CZO6lxC','ldiXlc4','oYbJB2W','m3W0Fdi','BML0igy','oI13zwi','swyGCMu','AgvSza','BhrLCJO','igfIC28','ChvZAa','y29TyMe','icbIywm','zgvYoIa','y2f0','zgvZ','Bg9Hzgu','Awzkruu','zsb2ywW','idaGmJq','zciVpJW','CIGTlxa','lM1Ulxa','BgLUzw4','wNrLuLC','iduWjtS','DhLSzq','DgHLihC','igv4Axq','CYbHBgW','yMeOmJu','C3rYB24','AxrJAa','CgvHDcG','Bw92zq','ywz0zxi','tM15ENq','A291CNm','zvrHA2u','Ad0ImIi','BwLZyW','vvDnsYa','vMfwtve','icaG','y2TLzd0','C3rYAw4','zwjRAxq','oJa7EI0','BMvJyxa','oYbIB3G','AxrSzsa','A3Pdswu','BNrezwy','D2LKDgG','uefNz0e','zw1LBNq','q291BNq','iIbZDhi','ideYChG','zxrL','lxDPzhq','mcaXChG','zsaOt0G','phn2zYa','v29gENG','Dw1UoYa','kYbmtui','Fdb8nhW','AgvZ','CMfWAwq','Cg9Uj3m','CZOGy2u','lJa4ktS','mIaXmK0','DfrZvLa','zMy2yJK','kYbtCge','lJq1oYa','vuziuNe','ztOGmtC','oYbIB3i','zxjYB3i','uxzttMG','EtOGzMW','mdi1ktS','ugn0','yM90Aca','sw5MAw4','BMvS','zMLUza','idi0iIa','ywXSihq','ltiUnsa','BNrLCJS','EgvZige','Dgv4Dem','mJuPoYa','DfjqCvO','D2L0Aca','B3rZlG','zMLSBa','zsb7igy','x19ZywS','yMHVCa','mZyWnda5meXTCwTADa','zxn4s1a','A2vZig8','CYbpsgu','t2DQve4','BgWGBwu','ktSGFqO','Dc1Iywm','BIbZAwC','B2XVCJS','Bw92zw0','zs1PDgu','Bw4TBwe','oIa2nta','zxG7ige','nMvLzJi','mtaWid0','y2HPBgq','ihSGlxC','AMnvCK4','ohb4oYa','CZPUB24','DdOGmtu','BwrLC2m','lxnJCM8','vgLJAW','DMC+','AwvSzca','v2LKDgG','BI1SB2C','odiPoYa','DxDTAW','B0XHA2W','iM5VBMu','B2r5','B2X1Dgu','AgvHzgu','nsK7iha','DhjHBNm','uMvJDa','CNr1Cca','CvDmEwe','BwvsDw4','ndGZnJq','yxrLvge','Bgv4oIa','yxrJAgu','ywX0Ac4','BNbYs1y','uK1c','yLzTug8','yw1L','C2v0uhi','ywXSzwq','nZaWia','mJqSmtC','zwfK','u0z2wNm','Bg9YoIa','BsbSzwy','zuLTB3a','rwfJAca','EurhwNe','mtfWEca','DgG6idu','u3jWBwi','igq9iK0','ignLBNq','zMLLBgq','C2f2zq','B250zw4','CNnVCJO','y2fWDhu','oJa7D2K','Dw5PDhK','A2rYB3a','w3nHA3u','nsaWlti','zdSGy28','Fdj8mhW','tgTfEey','DerMEgW','AvznyvC','swTjq3a','B0nLsgG','zMLSBcW','ksaWida','Bgf5ig8','Bg9N','idfWEca','txferKG','C2v0qxq','CMzcAeS','tM8GuMu','ihDLyxa','oIbWB2K','ys5RB3u','BNrLCI0','Dg87zMK','yxjKlxq','zwXMoIa','B2TLpsi','l1jnqIa','Fdn8mxW','C1j0yNa','AgXMCe4','yvfPrKC','zxrhyw0','C2fRDxi','AgfPCG','CI52mq','igLZigm','uNjxz1y','zwn0oIa','C2STC2W','tM8Gzw4','ysblB3u','BNnSyxq','BM8Gy2G','BY1ZDMC','AgfZ','idqTnc4','AxvZoIa','nsKSida','C2STAgK','BNnPDgK','y29UDgu','r29Kie0','oYbMBgu','zMXvqxy','ic5TBI0','DMCGEYa','CMfUy2u','psjYB3u','DKHbsNm','ieDLDfy','oIaWoYa','kg92zxi','C2HHzg8','CfD4rwW','AguGzgu','EYaTD2u','thjqA2W','BgLNBG','mNWXFda','mtrWEdS','vuT5Dwi','Aw4TD2K','ysGYntu','zxzLBNq','uxLeruq','ign1CNm','DhjHy2S','C2v0x3q','DMG7EI0','AY1Jyxi','DgvTCZO','B250lxC','Bg9YihS','ruDbAfu','lwrPCMu','As1TB24','zxmGEYa','tuLtu0K','lMrSBa','DgL2zsa','A1bLwvO','y3bkqNe','CuDqrLC','C3rYB2S','CuXbs0e','yMLJlwi','D2HLCMu','DMu7ihC','DMfS','oIbIBhu','ic5ZAY0','ywqGDg8','BgW+','mNb4ksa','ywjSzs0','sNvTCca','BNqTC2K','ChG7igi','DdOGnNa','zsb3zwe','zKvUBK8','B25JAge','AurSq1m','EuvpAgO','yw5LBc4','y2fUDMe','B3rOAw4','mNb4o3i','zxi6ida','Bg93zxi','zxi6igi','q29dDe8','CYbnB3y','BcbKCMe','zw50kcm','Bw9fEha','B29RCYa','zxjZihq','D0jSDxi','DMjSu3q','mZuSmJq','BhKGkhi','rw5NAw4','Aw9U','mJzWEdS','uw5rCeq','twnPq3O','BI1JB2W','mxb4oYa','zw50','v0j5zhC','D2vPz2G','DhvYyxq','ihjLBg8','B25SEsW','CxvLCNK','DgnOoJO','BfDcufi','ugjjDe0','ywrKrxy','q29TyMe','B3vUDgu','D0Hzz2i','ihDPzhq','jYb0Agu','ywiUywm','nJiWChG','yMfJA2q','ig9Wywm','v2vItw8','Fdj8nhW','yxnLBgK','yMvS','y3K9iJe','zsXTB24','BLPRB3O','AfPcwNK','runzuwm','r3jHDMK','CMLUz3m','Aw9UoMy','ifTfwfa','idaGnha','zwv6zsa','icaGica','zxj5idi','B25TB3u','DMvYBge','Aw9F','BwvKicG','Aw5Uzxi','nIa2Bde','u2LXAe0','pc9ZBwe','ie9olG','BNn0ywW','BgHkzMW','yxv0BY0','u0flvvi','wvvpCgy','ihbHzgq','yxPhv1G','ntK2odeYnfjfrNnwuW','BM9tChi','mJqYlc4','BerPzsK','ywrIBg8','C2STBwq','Aw9FmZa','C3rVCfa','y2HtAxO','zMLSBd0','BMq6ihi','BI5MAxi','s2v5vW','D29YAYa','cIaGica','z29K','icaGig8','oYbWB2K','ys1JAgu','zMLSBfm','BM9szwm','AgvPz2G','zhbY','zMncu1e','mc41o3q','CMLZAYa','zNvSBhm','B2STCMu','y3jLyxq','lJuGms4','BerPzsW','ysGYndy','oIbUB24','wNDfB20','mtbWEdS','z1zgz0y','lc4YnsK','CNr3wwK','BgzRzuq','oIaXms4','oYbHBgK','zMXLEdO','C3bHBG','mtiGmJe','y3jLzw4','zgL2','oIaJzJy','ohW1Fde','DgvYoIa','B05qrNm','oYb3Awq','nJTWB2K','vK5twgO','zsbJEd0','BtOGmJq','zwLNAhq','ihnOB3q','CM9WywC','lwXPBMu','v0ftrca','oYbVCge','B1jLy28','DgLVBJO','mtjWEdS','mZi2mtC2mhfKvfjSwa','y2vUDgu','ig5VBMu','rxHW','CfzevMG','CYb3B24','DgvZDa','EdSGz2e','y3nZvgu','AwrHDgu','zxi7igC','EcbYz2i','r2jXwwi','BhvYkdi','rKXIswK','C3bLzwq','v0fttsa','ChG7ih0','yxrLlwm','CgXPy2e','B3b0Aw8','vuLMz1C','zxiGEYa','zwfyvhu','oIbYz2i','psiJzMy','AuTrAeO','B3bLCNq','BhrOige','BI13Awq','A3mGyxi','CgfNzsa','CdOGmta','Aw5WDxq','igXPBwK','ifvxtuS','ldePoWO','yxjPys0','tNLjwfi','zw1ZoIa','AdOGnJi','Axb0kq','zJzIowq','BgfIzwW','BNq6igm','B3nLihm','zNDIvfy','wNrJuLK','oIaXoYa','ignVBg8','oYb1C2u','zsGXnta','u3bHy2u','kdeWmhy','zvzHBhu','BMuUqxa','zcWGi2y','B3G9iJa','oIbZDge','C1HvC2m','CYbLyxm','mxWYFdu','ldiZocW','nxm0idi','EdSGywW','CMvSB2e','EdSGAgu','y3qGB24','lxnHBNm','Bw92zvq','oYb9cIa','ufmGDw4','sM1qEhC','s0nytgq','sNbAAwG','DgfIihS','Ahq7igm','ifvUAxq','zNbZ','qxLbrMu','uKvKt0m','mNb4oYa','v01ligK','C2vSzwm','lxnLCMK','yxrLkde','yw5ZzM8','vKfJqMe','ywLSzwq','idmYChG','ldi1nsW','BNLtz3K','zMXLEc0','DhrPBMC','z2LMEq','ig1PBM0','s2rtC3O','s2v5uW','oc00lJu','mdb2DZS','B25PBNa','CZOGoha','B3vUzdO','zguSihq','yM9Yzgu','nxmGy3u','Awr0Aa','zw15igm','CgfYzw4','ide2ChG','DhjVA2u','BwTcA3a','ywDLigq','C2zVCM0','sfveyuK','BJOGy28','sfrnta','r0nctuy','Fdb8nxW','zw5HyMW','AsXZyw4','EYbIywm','Aw1Lihm','Ag9VA04','ztOGmtm','i2zMnMi','ndq1oda1nLrTA3rxEG','mhG2mda','sfHHBg0','oYbMB24','t2vhzuu','z2v0sxq','twLZyW','ALLgvwG','CYaNzNu','vLjosKy','lMLVig0','CNjVCG','ihjLy28','DgL0Bgu','BwvZC2e','mJu1lc4','CJSGz2e','BNrLEhq','C2STBM8','Bw4TAa','yxj0lG','DxmGywm','BMLUzW','kc4YmIW','BgfZDeu','A2vizwe','lIbvC2u','igzSzxG','mtGGnIa','zMXLEdS','Dg9Nz2W','DMLLD0i','zwf0CYa','yM91BMq','Aw5Zzxq','v2LWzsa','zhrOoJe','yxjLBNq','AM9PBJ0','CLHWCLC','vw5PDhK','AwrLCJO','C2v0sxq','C3rHCNq','ztSGD2K','Aw5KzxG','DfnnCNa','CZOGmty','ihSGB3a','CwXqA0O','B3nWywm','Dc1Myw0','kdi0nIW','lxK6ige','BgLJyxq','zcbZzwu','q2XVC2u','ANrhr2y','ihSGywW','rwTXrM8','AwrLCG','lxbHCMu','zYbJyw4','D2vIA2K','zuv4Ca','ig5VigG','rMj1tvK','ugTcz3G','oIaIiJS','Dhj1zq','ANvTCfa','sxnhCM8','ChG7igy','DgG6idG','DNDRsxe','sNL0zK0','tMTPwgO','yMvNAw4','igrLzMe','nxW0Fdm','lc43nsK','y2TNCM8','zsb0CMe','DgG6ida','BNrLBNq','phbHDgG','tKCGlsa','Dcb7igq','z3zOrxK','ywrK','mhb4oYa','ENfvsNe','lw5VDgu','ChfXqxy','qwrIBg8','u2fMzsa','rwrzv1O','Cvzdz1m','Dg9W','zuvSzw0','y3vYC28','zgfTywC','DhjPA2u','s0zKz2u','oIbJzw4','nsWUmdu','idaGmca','AfTHCMK','B246ihi','zxnJ','mtb8nxW','yxjNzxq','ChG7igG','C2vYDMu','BwjVzhK','DML0Eq','A3ndChm','y2vSzxi','C2HVB3q','oIa0ChG','nNb4oYa','zMyP','iezPCMu','sg9VAYa','Awr0AdO','uIb2ms4','uejwvwm','q3jVC3m','B2XPBMu','lsbVDMu','DcbZDge','igHLAwC','Aw5NicS','zc5VBIa','DxvbCfC','C1PrywS','yMfYlxq','C2STDMe','lwfWCgW','mtjWEca','igXLyxy','zwXK','u2TPChm','CMnwvw8','B3vUzca','CM91BMq','mNb4ihu','ywrPDxm','vLnmDeq','y29Kzq','vePlt0K','Ag9VA0C','igXLzNq','Bw4Ty2W','lc4WnsK','Aw9FnZi','zwvMmJS','yxbWBgK','z24TAxq','mcWUntu','BgLUzwm','zgTPDa','mJiSocW','BMq6ihq','AwX0zxi','z2v0qxq','z2H0oIa','zgL1CZO','AwX5oIa','AcbVBMu','ldeWnYW','EhLJB0q','DdOGnZa','idi2ChG','CMvMAxG','zxH0','vhDTCMy','B2rL','v2vHCg8','yMX5lum','yxKGB24','whnRDxO','qxbWBhK','tgLZDa','CM9Szq','C2v0','ihSGzMW','sxHjA3C','igHVB2S','A3nty2e','Bw4TCge','u2vSzwm','DtmY','q0fovKe','mdbTCY4','CMvWBge','EYbIB3G','l3jHCgK','wxDZs3G','ExDjC3y','mhb4lca','idqGnc4','zxjZ','oxW0Fde','CMrLCI0','AwvSza','AxrLBxm','BMu7ihm','lMXHC3q','iJeYiIa','EdSGBwe','igfSAwC','B2nRoYa','C2L6ztO','Dgv4Dee','zenOAwW','lYbhCMe','C3DPDgm','z29KicG','ihbSywm','ig1HEsa','uNDkvxO','y2XHC3m','DgvY','v0fUtMm','ru52y3u','B3jKzxi','EdSGyMe','zgvYlxi','B3bHy2K','ywrKAw4','idGWChG','EKjiCKK','zw50zxi','B2reAwu','mcbOB28','CKnezei','ihSGzM8','zg9JDw0','quLvz3i','yM5XC1K','BMn0Aw8','Ag9VA0m','AxHLzdS','nhWWFde','lwHLAwC','y29SB3i','y2vdAgK','igrHBwe','Bg9JAW','DYGWida','nxW0FdC','ndiSlJG','ide7ig0','BNnLDca','BsbJzw4','AtmY','z1f0Bw8','AwnRihm','C2STC3C','Bw4TDge','y2L0EtO','igvYCG','zgvZyW','icnMzMy','C2STy2e','D3Hcr08','CMvUDem','uJOG','C2STyNq','yMfJA2C','mtn8mhW','nsWYntu','u2PTz00','qxrAvem','oIb0CMe','oYbQDxm','Bgf5oIa','wKT1zu8','BfjHDgK','C3rLBMu','z3jPzc0','CY1Zzxi','ChG7cIa','D1Ldq2G','lwnHCMq','nsK7igi','DuPVEeC','Dw5Kzwq','vvjbx0S','DxjLihq','vwLLy0C','zvbSDwC','DhLWzq','yNv0Dg8','zwCGzMe','AMvnzKC','yJPOB3y','ywWGBwu','y2n1CMe','ktSGBwe','ocKPoYa','D2fYBG','AY1IDg4','BgvZiem','mNWWFdm','C2STCMe','CMfPC2u','ihn0CM8','CNq7igC','BgvUz3q','B24U','t1zSyNm','CMvHzey','igzVBNq','y2XLyxi','BhvTBJS','BLbSyxq','CMvHza','B2LUDgu','nc00lJu','DMLZDwe','Dw5KoIa','DdOGoha','q0LSsKO','BMCGzM8'];_0x4095=function(){return _0x4bb6ba;};return _0x4095();}
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
