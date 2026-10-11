// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.5.0
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
function _0x4f55(_0x4568e2,_0x243704){_0x4568e2=_0x4568e2-(-0x2081+-0x1354+0x1*0x3463);var _0x2ecadf=_0x20bd();var _0x3ffc1f=_0x2ecadf[_0x4568e2];if(_0x4f55['NZINnn']===undefined){var _0x59b360=function(_0x36ab22){var _0x212428='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x381e9b='',_0x5783af='';for(var _0x27c6d8=-0x1*-0x217+0x34d+0x2b2*-0x2,_0x1f6a37,_0x1fbe78,_0x45c3ce=0x24c8+-0xce9+-0x17df;_0x1fbe78=_0x36ab22['charAt'](_0x45c3ce++);~_0x1fbe78&&(_0x1f6a37=_0x27c6d8%(-0x107*0x3+-0x1f53+-0x4*-0x89b)?_0x1f6a37*(0x1456+-0x52*0x9+0x6*-0x2de)+_0x1fbe78:_0x1fbe78,_0x27c6d8++%(0x2*0x19b+0x1d4a+-0x207c))?_0x381e9b+=String['fromCharCode'](-0x9*-0x43f+-0x1d*0xf1+-0x9eb&_0x1f6a37>>(-(-0x1560+-0x62*-0x13+0xe1c)*_0x27c6d8&-0x1024+0x21c3+-0x1199)):-0x592+0x4f8+0x9a){_0x1fbe78=_0x212428['indexOf'](_0x1fbe78);}for(var _0x389f48=0xe60+0x2386+-0x31e6,_0x14260e=_0x381e9b['length'];_0x389f48<_0x14260e;_0x389f48++){_0x5783af+='%'+('00'+_0x381e9b['charCodeAt'](_0x389f48)['toString'](0x6cd+-0x8e5*-0x4+-0x2a51))['slice'](-(-0xb*0x1+-0x7a2+0x7*0x119));}return decodeURIComponent(_0x5783af);};_0x4f55['jauGBY']=_0x59b360,_0x4f55['tgRPtF']={},_0x4f55['NZINnn']=!![];}var _0x9f8d94=_0x2ecadf[0xf*0x281+-0x214f*0x1+-0x440],_0xfb8201=_0x4568e2+_0x9f8d94,_0x5e407e=_0x4f55['tgRPtF'][_0xfb8201];return!_0x5e407e?(_0x3ffc1f=_0x4f55['jauGBY'](_0x3ffc1f),_0x4f55['tgRPtF'][_0xfb8201]=_0x3ffc1f):_0x3ffc1f=_0x5e407e,_0x3ffc1f;}function _0x20bd(){var _0x4a459e=['vMPiv1O','oIbHyNm','yxrJAgu','tM8GuMu','kg92zxi','oIbJzw4','ocWYndi','vgzmC0u','C2HVD24','AY1ZD2K','q1vuu2u','mNWWFdu','BwvKicG','B3jKzxi','s2v5ra','zgLUzZO','BgrYzw4','EdSGyM8','ANDeuvG','nxWXmNW','z2uUiei','y2HLy2S','zwfKige','vgLAuum','rwDLtKq','vg5vELq','oIbIBhu','u3rHDgu','yMfJA2q','y3rPB24','AdOGnJi','EMu6ide','rvzHsKy','quXhvNO','BMq6ihq','C3r5Bgu','zMyP','lKXVy2e','DMLHifm','ywqUieK','BMDL','oYbIB3i','mtySmc4','zcWGi2y','lJa4ktS','wMfms1a','phn2zYa','BNrLEhq','mxWYFda','wejYBfC','mJu1lde','DgG6ida','suLTrMW','icaGlNm','CZOGCMu','yw5LBca','ChGPoYa','y2XLyxi','mtrWEdS','u0zVwwi','zsb0CMe','CgfYC2u','BwvZC2e','CMvUDem','B3C6igK','zMLLBgq','Ag9VA0C','sgzdAeC','CYbLyxm','oYb1C2u','BhrLCJO','igvYCG','zw50zxi','rw5NAw4','u3DLyM8','CMqTAgu','lwzPBhq','BMvS','ihbSywm','iNrYDwu','BdOGBM8','u3bnse8','nNW0Fdm','r1PQvuK','oIbPBMG','u0fgrq','zsbJEd0','sw5xsMW','wNnxBMG','ihnOB3q','Ag9VA3m','Aw46ida','lc40ktS','B2XVCJS','oIaWoYa','y3qGB24','B2nRoYa','zwfSDgG','C3rHCNq','BdOGAw4','Bg9NBY0','ihbVC2K','nxWXFdy','vMndsfG','rgfTywC','zvj1BM4','DxjH','mxb4ida','s0nHrhm','lMP1Bxa','ig9Wywm','ihDLyxa','mteUnxa','i2zMzJS','y3jVC3m','C2STAgK','wMvYB2u','lJjZoYa','DgvTlxu','y3jLzw4','oIa0ChG','Fdj8m3W','BI1TywK','zgv2Awm','BMqGBwe','Bg93zxi','Fdf8na','yMLJlwi','BIb7igy','ieaG','zsXTB24','mhGYnta','igjHBM4','AtmY','sezJz1u','mwzYksK','icbIB3G','C3rVCfa','ChjLDMu','AwvMCe0','idfWEca','Ag9ZDg4','y3jLBwu','r01TENe','iL06oMe','CIGYmNa','y2vdAgK','DZOGAw4','zMLSzw4','zwCGzMe','yMeOmJu','Acb7iha','yM90Dg8','lxnJCM8','uNHevwy','qMPKEwy','Dg87zMK','ignVB2W','swPXs04','BJOGy28','ocKPoYa','zwfKB3u','lc4WnIK','oIbYAwC','uMfWAwq','mJm4ldi','oJa7EI0','C21HBgW','zenOAwW','CMeTA28','zxzLBNq','nNb4ida','sKzlChq','ywnRz3i','Aw4GC2e','Dg9W','AYbVBI4','Bw4TBg8','ig5VigG','ugPKz2O','A2v5C3q','y2TLzd0','mJSGC3q','nNb4idK','thfcDNG','rNj5AMy','zg93BG','yxa6ihi','mcbOB28','mte1odGYnvPoDvr6BW','ide7ig0','oIb0CMe','ChG7ihC','idmWChG','EsaUmZu','BcbKCMe','EYbKAxm','nsWYntu','BuXzz08','nZa0nJC0nhfPvKnpsa','zc5VBIa','zw5HyMW','sfHOwfe','igrPC3a','DhLSzq','lwfWCgu','zNrLCIa','lc4WocK','DdOGnJa','CI1Yywq','ywrPDxm','wgjSyw0','DdOGoha','ohG5mc0','zMy2yJK','oYbMB24','zc10Axq','B24Gzxy','DxqGDgG','ztOGmtm','igjVCMq','EdSGB3u','B3vUzgu','tLfsy04','BguGAwy','zhrOoIa','C3rLCa','mZKYndKWyKL0z0Dk','ndSGBwe','D2fYBG','mciGCJ0','ihn5C3q','ifjLy28','Awr0Aa','BNq6igm','DgL0Bgu','EI1PBMq','ifvxtuS','Bxm6igm','zxzLBIa','sefPzeq','ldi1nsW','wKXVrfO','lJuGms4','sLbSrhK','C3rYB2S','ls1W','C2fMzq','D3jPDgu','zMXLEdS','DgvYoIa','Ag9VA1a','rLbtigm','DdOGnZa','tKfRsg0','DgznBuK','ihDPzhq','ltqTnY4','BwLZyW','ywn0Axy','B29RCYa','tu9ersa','ldeWnYW','ifvUAxq','ywDLigq','x19tquS','mJu1lc4','uuXKEg8','zxjZy3i','AwDUyxq','BNrezwy','y0zsvMG','AwvSzca','Ag9VA04','DhDtA08','BMu7ihm','qwrIBg8','BgfZDeu','ihrOzsa','qxPgDNa','zdOGi2y','oYb0CMe','ihjLBg8','ANvTCfa','mxW0Fde','D0XWqxG','DgG6idG','ic8GDMe','C2v0uhi','swrtwKS','CMrLCJO','v1ndzNG','nZaWia','lM1Ulxq','ig1PBIG','DhK6ic4','q2foBe8','sgvPz2G','r0rlCgi','AwDODdO','kdeUmsK','lwnVBhm','AwXnB3q','kdi0nIW','C2STy2e','zw50tgK','DgvY','nMvLzJi','Fdz8mty','z2v0sxq','ihrVide','zsbBrvG','DgG6idu','w3nHA3u','jYb0Agu','DdOGmtu','yM90Aca','zNbZ','zwjRAxq','Dg5LC3m','C2STBwq','zMLSBfm','D2LKDgG','B2TLpsi','swHWCee','idaGmJq','CNr1Cca','Ag1oCfq','iNjVDw4','lwjVEdS','uMvJDa','oIa5oxa','s2v5C3q','ignVBg8','B3bLBG','z2v0q28','BMq6ihi','rLngCMq','AguGCMu','ig1VBwu','zNvSBhm','CNDXzMK','Bg9Hzca','ihSGB3a','BgLUzwm','icaUC2S','C3bSAxq','y2L0EtO','CMXHEsa','qxbWBgK','zdSGy28','C2STBge','FdD8mxW','y3jLyxq','nYWUmJG','rgLL','lIbuDxi','zgfTywC','kdi1nsW','Aw9FmZa','A2v5zg8','re9nq28','yNv0Dg8','BNrLCJS','4Ocuig5Via','zejwqMi','EezSqMW','ohb4ksK','DMvTzw4','zgL1CZO','DKr6t2K','AwrLCG','rMLLBgq','z2LMEq','idnWEdS','z3jPzc0','DMLLD0i','zMuGBw8','BwrLC2m','BgjLt0O','uNLHvhu','r0Hcsgi','v2jwAK8','tKCGlsa','ywXSzwq','Dw5KoIa','DgLKzvC','yxrSEsa','igP1Bxa','yw1L','EYbJB2W','z3jHzgK','CNq7igC','BwvsDw4','CM0GlJq','zuvSzw0','CIdIGjqG','CZOGmty','ywWGBwu','CMDIysG','Aw9FnZi','B3vUzdO','CJSGz2e','DgXL','nYWUmsK','zsGXnta','zxjYB3i','BhvLCY4','AwWGC3a','mNb4ide','B2r5','CNjVCG','Aw5JBhu','AgvZ','Bgf0zwq','lxbHCMu','igfSAwC','z29K','CMvWzwe','Ahq6idi','rNzdAuq','mZuSmJq','BerPzsK','BgWGBwu','B2reAwu','q2XVC2u','tw92zw0','BwjVzhK','Ag9VA0m','ywn0A0S','C1fRre0','DdOGmJG','nJiWChG','BgvZiem','Bgf5oIa','C3rPBgW','z2T6weW','jsbUBY0','mtfWEca','C2f2zq','DMDhseS','BMq6icm','tgLZDa','zwfK','s3niywS','yxrLlwm','B25JAge','AwvZlG','CunlsNK','DhjHBNm','Dc1Myw0','B2n5Awe','idi2ChG','uhfuANa','BLD0Ahm','tuLtu0K','whnlCfC','yxvSDca','ChG7igy','A3ndChm','BMu7ige','yM91BMq','tM8Gu3a','tg5byMu','AgfPCG','AcaTidq','BhvTBJS','B3n0zMK','zYbJyw4','C0HbsMq','v0DIwKC','ywiUywm','AwvSza','AxvIr2m','ig1HEsa','iokaLcb0zq','DxjDifu','BM9tChi','ohb4oYa','DdOGnNa','B3i6ihi','ChG7igG','B29Rihi','BhPWD1K','oIbMBgu','uwrhqum','z0njBvm','zxqGmca','BNn0ywW','A2L0lxm','u2L6zq','A2uTBgK','lYbhCMe','CM91BMq','BM9Uzq','zxnTC1C','y2n1CMe','zxjZihq','CZOGy2u','Dgv4Dee','AY1Jyxi','BYb0Agu','DxjDigG','m3WYFde','C1bwCKe','wwTMuuK','uxjiu1O','u2fRDxi','lxjHzgK','ie92zxi','FdeW','oIa1mcu','B2LS','idi0iJ4','C3DPDgm','zw50rwW','CIbHzhy','AfTHCMK','vuf4yMi','zcbJAg8','ChG7cIa','sePUCMW','ih0kica','ruvuCLa','lwfWCgW','EgHuvvq','nsK7iha','mtu3lc4','oYbTAw4','qNHuAeS','odiPoYa','DgfIihS','idK5osa','cIaGica','C2vSzwm','C2XPy2u','Dhm6yxu','D0nVBg8','nxb4oYa','AgLoEuK','lwLVxYO','zgvZyW','lxnOywq','vgfRzxm','oIbYz2i','igzSzxG','ywLSzwq','C2vLBNq','lK92zxi','igzVBNq','DgvJDgK','lwjHBNi','ndm4ndKXnKLKAevWCq','B0n5veO','igvSC2u','CMvU','sLvSD3K','iM5VBMu','tg9Hzgu','BgH1Dum','Bw4TC3u','C2HPzNq','j3qGC3q','zw1ZoIa','ocK7ih0','BhrOige','suH6CNu','B2fKzwq','CMvHzey','DgL2zsa','ywrKAw4','nNb4oYa','zZOGnNa','zw50CZO','oYbIywm','whLUAKm','uhjes3y','ChG7ih0','Fdj8nhW','Dc1Iywm','s2zit0S','zMLSBfq','yxa6ide','sLPcuwC','AhvTyIa','BsbYAwC','zxiTzxy','EuvUz2K','ChGGmdS','oIaWide','zZOGmta','EsbKzwy','zuPhDvO','y2fSBa','ywX0Ac4','CNnVCJO','vvjbx0S','ywrIBg8','zvbPEgu','oJiXndC','Dw5NCxa','z3jVDw4','CMLKoYa','BI1PDgu','yLH0Ewi','AwrLihS','C2STBwi','y2fUDMe','z2jHkdi','y2HPBgq','zvrHA2u','uMvZzxq','z0DJuxu','Dc1ZBgK','ideYChG','s0rjzLa','Du5kyMu','CgntDgq','Bw91C2u','yMvNAw4','y2f0','vvDnsYa','mtuZoteZmfLdELnIsq','mJu1ldi','EYaTD2u','mhb4lca','sw5Zzxi','CMzSB3C','C3bHBG','icaGlM0','BgLUzw4','q0DWAMS','ChvZAa','DhLqy3q','igXLyxy','nsK7igi','ic40oYa','ALz1yKi','z2v0rwW','EK9jCw0','C2HVB3q','mtGGnIa','zw50CW','lMXHC3q','zxH0','DgXLCW','AwXS','vNrsve0','Ahq7igm','zMXLEdO','DLnxDgC','DhKGDMe','mhb4oYa','A2vZig8','kYbmtui','yKfJrLO','v3LAqMC','zxjYihS','zgvYlxq','Dgv4Dei','CdOGmta','BY1ZDMC','BNqGAxq','iefmtca','lMrSBa','rgfUz2u','DhvYyxq','Aw5WDxq','CgXHEtO','Bw92zq','tvjMs2y','ihrVCdO','C2v0vhi','mgy1oYa','v2v4BhK','oYbHBgK','iKLUDgu','B2rLu3q','mcWWlJG','zxiGC2W','zwXK','Bwf4','BeTtzge','CMrLCI0','BwvUDca','C2f0Dxi','DgGUsw4','zciVpJW','DdOGmZq','m1vQzhDJyW','zgfVB20','idaGmca','C2STBM8','qNvUBNK','Bg9HzgK','iJeUnsi','tMfTzq','BI1SB2C','ltjWEdS','vgPXz1y','u2TPChm','r1rTB3O','DhjPyNu','AcbVBMu','Aw5NoIa','zw9Ms1e','oIbUB24','mdCSmtu','DMLZDwe','ndGZnJq','ueDNwgu','BgvMDa','B3vUDc4','ktSkica','BgvUz3q','B24U','ntuSmJu','icnMzMy','rxDuv0K','CYbHBgW','A2uTD2K','EYbSzwy','DhrPBMC','psjTBI0','rxfqsK0','mNb4ihu','lxj1BM4','ie1VDMu','Dc1ZAxO','zwv6zsa','DgHLihC','zsb2ywW','Cg9W','zwn0oIa','lxrVCca','EtOGzMW','Bg9Y','sw5MAw4','C2v0sxq','CMqTDgK','C2STy3q','CenTvxK','EYbIywm','ltiUnsa','igrHBwe','oYbJB2W','EdSGyMe','nNWXmxW','yMHVCa','DtmY','uNvUDgK','u2vSzwm','igzPBgW','CJOGCg8','BMLUzW','qwTtuhO','lM1Ulxa','Bg9IB3i','B3bHy2K','rvjkzw8','CgL6v3q','yxj0lG','mNb4ksa','s0nXshK','y2XHC3m','zvn0EwW','igfUzca','mtaWid0','EdSGFqO','lNnRlxm','s2XAANm','C2STCMe','n3r0tMvhtW','ksaWida','zxPPzxi','zwXHDgK','zguSihq','wwPUAey','Bgv4oIa','Ahq6ida','v0ftrca','y2fWtw8','y29TyMe','zgvYoIa','igjHBIa','rfzAveK','CI52mq','oNbVAw4','ihrOAxm','zxrrB2m','ihjNyMe','v2vItw8','CMfUz2u','yxKGB24','Bgf5ig8','z24Ty28','r05UDLG','r29Kl2q','y3vYC28','vwTuEfe','rhn5wgC','A3nqB3m','whDgswe','ywXPz24','zxjZ','v3jHCha','z3jHDMK','DMvYlxy','CMfUC3a','sgn4t1q','ihSGzgK','Aw9UoMy','ihWGBw8','i2zMzG','tgvMDca','ywnPDhK','CYbpDMu','DgvYoYa','A2v5Dxa','zhjVCc0','BMf0Dxi','mJiSocW','B3G9iJa','mJDiBvbZzxy','DMzksfO','Dw5PDhK','Cg9PBNq','zxmGEYa','yxK6igy','oYbOzwK','ide2ChG','igLMig0','rNjHBwu','vuXZzg8','icaGic4','CIGTlxa','AgfZ','ns00idC','t1vsx18','DgnOoJO','CZOGoha','B25SEsW','ihjLy28','idHWEdS','mNb4oYa','icaGkIa','yxvSDa','B2XVCJO','EdSGz2e','DgLVBJO','zw1LBNq','yM9KEq','lZ48l3m','odbWEcW','uM9oq08','CLnYD0i','Awy7ih0','AgvSza','ysblB3u','uNfNq3y','y2HtAxO','CM9Rzxm','ktSGFqO','C2STy28','BMC6idq','BhvYkdi','DcWGCMC','oYb3Awq','tw9Kzsa','DgHYB3C','nxm0idi','lxnPEMu','zJmY','rwfJAca','C2HHzg8','nc00lJu','vuPyyKu','zcbZzwu','sgLKzxm','uJOG','yw5JztO','zw50','C2fMzu0','ChbLBNm','ihWGC2G','y3KGB24','DgvZDa','Dxm6ide','zwqGyw0','AguGzNi','CvbyBgS','zMLSBa','mtSGBwK','i2zMnMi','mhW3Fdm','B25PBNa','uhP3q1m','uhnwywO','BM93','Aw1Llca','q1btihi','u0Hgufq','DdOXmda','s2v5qq','ruH4q20','yuTVDxi','B2z5Afu','AxnPyMW','wNr1s08','AwXKigG','zIbTyxq','sxz4u3C','BM9UztS','CMvSB2e','C0DrEfK','EcbYz2i','CuDbtNm','DxDTAW','Aw5NicS','tgvNAw8','B3b0Aw8','CMvHzhK','s0r5BNO','mcaXChG','u0flvvi','CLrju2K','mdSGy3u','zgPNwfy','u2nHBgu','sfHSAuS','Du9rsfC','ihbHzgq','vevxCxO','D1Lqz0y','BMvHCI0','z2v0','ihDOAwm','t0zgigi','A3nty2e','s3nJz2G','Aw50zxi','nIa2Bde','zgTPDa','u3bLzwq','rwXLBwu','icaGzgK','ig9YigS','icnMzJy','icaGica','DdSGFqO','Bg1SEgS','u1zoBu0','lxnLCMK','C3bLzwq','oIbZDge','AgvHzgu','BNnSyxq','D0jSDxi','BgLNBI0','BgLJyxq','ntuSlJa','BLPdqxq','idmYChG','yxrLkde','nJq2o2m','yxb0Dxi','ig5VBMu','A2XsuvG','B3i6iha','qNLjza','EgrOs2C','v0fttsa','iJeYiIa','Dg9Nz2W','qMvdvey','CKzNtuG','u2HHCNa','BhKGkhi','t0XzD1m','vg90ywW','zMLUza','ywXSihq','lsbHihm','B3bLCNq','ChG7iha','zvzHBhu','oYb9cIa','CgfYzw4','BwuG','BMvJyxa','B3rOAw4','AxHLzdS','tg9JywW','EhvktLm','ugn0','ru5nt1a','zwfKEs4','Dhj1zq','oIbJDxi','igjVEc0','CxfQzgq','ktSGBwe','rhPOvwO','A1Dxseq','DxjDig0','D2vPz2G','Bw92zw0','Dgv4Dem','DYGWida','rxHW','ug51uvq','C2v0qxq','oIa2mda','lxrPDgW','CMvWBge','yxbWzwe','Fdn8mJm','ihSGD2K','B250zw4','BMqIihm','sNvTCfq','CvbRsKy','Dg87ih0','ys11Aq','CMuGkfm','Axr5oIa','rKjvC00','u3bHy2u','DgLKzs4','BNrLCI0','ywXSig8','AxrPywW','B3zLCMW','pc9ZBwe','Dxm6idi','ihSGzMW','BIb7igi','DdOYnNa','lMLVig0','Axb0kq','CZPUB24','qwfhwhy','BMnL','ksaXmda','t2zRDe8','zgLZCgW','CI1ZzwW','icaUBw4','ldePoWO','Ag9Szsa','EuLVq3m','mdi1ktS','BI13Awq','uMf0zq','nde5oYa','v2D6CeS','Dw1UoYa','Dcb7igq','DeLWzuu','sgDKueO','zxiTCMe','ugf0Aa','y2LYy2W','zw51','Dg9Wrgu','CffVBNi','Exf6r1a','B3nWywm','lwL0zw0','CIb2ywW','vLrPtwG','v2LWzsa','C3bSyxK','iezPCMu','Fdj8ohW','yMfJA2C','EdSGCge','zvKOmtG','yxK6igC','owqIihm','mcWWlJy','B2fkyu8','ig5LDMu','yM9Yzgu','BxKGC2u','re5eyxu','z3LIywm','Fdf8m3W','shLMC0O','phbHDgG','BYbWAwC','ztOGBM8','igHVB2S','uvj3wfe','yYGXmda','y3K9iJe','AgvPz2G','mJb8mtu','BM9szwm','C2fRDxi','ihn0CM8','Bw4Ty28','B3nLihm','BhmGDgG','mJqSmtC','rw5fsLy','Dg9WoJe','rLbsDgi','CMfKAxu','y2vZlG','Dg9Y','CM9ZC2G','igTVDxi','mxb4ihi','D29YAYa','mhWZFde','igDHCdO','y3nZvgu','FdL8mte','icaGyMe','zhbY','rfrkrLq','BM90zs4','BMqGt0G','y2TNCM8','Ee54EKC','BwLKzgW','zg9JDw0','zwLUC3q','nJTWB2K','Bw1VifS','yxrLvge','yxa6idG','ndySmJm','psiJzMy','Cg9ZAxq','igv4Axq','BgLUzvC','Aw9UlLq','DgvYigm','y29UDgu','z2fTzuW','Aw5Uzxi','C1D2qM8','DgfMEKu','oMHVC3q','yw1Hz2u','DhLWzq','u2vNB2u','zsb7igy','y2HdB2W','AeTVte8','CMfWAwq','BMv2zxi','DhjVA2u','BNnPDgK','BMf2','A291CI0','lcbZyw4','odaSmtK','tujVy2m','vw5PDhK','yY0XlJu','x19ZywS','CeLfAuy','ys5RB3u','ic5ZAY0','Aw4TD2K','v3DxAue','nMi5zci','CMLZAYa','zxHqD3m','Bg55swe','s21qvgK','yxjLBNq','DMC+','igrLzMe','idrWEca','zw15igm','t1nOB28','vNfpCNK','zg93BIa','AfnYreG','C3rYAw4','BNnLDca','z01kq0W','AfnOywq','A2vizwe','AvbcqMO','qM90Dg8','CJSGzM8','Dw5RBM8','oYbWywq','Bw4Ty2W','AxrJAa','EdSGBwe','DxrVoYa','AwvKigm','uMvJB2K','BNnWyxi','Dg9WoIa','Aw5Mqw0','ihLVDxi','r2fbAxu','Dw5Kzwq','CgvHDcG','mcWWlJC','zw4GDg8','yxjNzxq','zg93oIa','CMvZDg8','ChG7igi','z2DSzwq','Bg9JAW','iL0GEYa','ig9U','tw92zq','Bg9YoIa','zgL2','oIaYmNa','BgLKzxi','tvrbrNy','z1r4ruG','u0DbrNK','r29Kie0','B095Exq','BhrO','ihWGrvi','B0DTtKu','lJv6iIa','CYbnB3y','yLDWvfu','u0fgrsa','icaG','ndC0odm','B3vUDgu','EtOGmdS','DMfSDwu','zIXZExm','Bw9fEha','DgG6idi','y29PBa','ihn0AwW','AwnRihm','AsXZyw4','igXPBwK','ihSGzM8','tw5mtxm','zwXMoIa','B25JBgK','qMXVy2S','mcWUntu','C2v0ida','D2LyBge','DMPNqK8','Aw5KzxG','oWOGica','DhjHy2S','s2LSBgu','igvMzMu','lcbJywW','BMuUqxa','AgXuC1a','sw5PDgK','iduWjtS','B25TB3u','ywrK','CYbpsgu','idqTnc4','q291BNq','ndG2nZK4nK1Nv2vJCq','AuDIse4','ysGYndy','r2r2tLy','DhKGmc4','rMviBg0','ldiXlc4','DgvTCgW','ihbVAw4','mZa0mdGWmMj0zgPmBq','yKzlzxO','ywrKrxy','v3nkAM0','zJzIowq','y2HLCYa','yxbWBgK','B3rZlG','zvzft3m','oIa4ChG','idjWEdS','nsWUmdC','ue1svNu','zNLyAge','mdSGBwK','A2DYB3u','zMLSBd0','Exn2zey','EgvZige','nwmWidm','yxjPys0','CxvLCNK','lNnRlwm','y29TCgW','vgDiyvy','lc43nsK','vw5RAxO','CNrPzgu','ChGGDwK','Bw92zvq','oIaJzJy','Awr0AdO','oIaXms4','EYbMB24','z29KrgK','BMC6igi','wKT0zLG','B3nL','y1jxDgm','Du9xree','DMfS','oI13zwi','BNqTC2K','BfjHDgK','BerPzsW','mNmSigi','vfDyqNq','mhG2mda','lc4WnsK','qwzlt1C','EYbWB3m','BgLNBG','Aw9F','Bw4TDge','icbIywm','y29Kzq','AxvZoIa','mc41','B1jLy28','phnTywW','mtiGmJe','y29SB3i','Cxn0uvG','Dg93y1y','khjLBg8','idqGnc4','DgLMEs0','vvDnsW','lwXPBMu','Bw4TDg8','s3npBe4','DhPry24','B3C6ida','oYbMAwW','z1b6suG','l3jHCgK','sw5ZDge','Dxm6idy','ktSGy3u','zwLNAhq','CgfJAxq','zgvYlxi','CY1Zzxi','nYWWlJG','yxnLBgK','BLD0B08','zxi7igC','ysGYntu','igq9iK0','sfrnta','vgHLC2u','EcKGC2e','terMzMe','AwX5oIa','C2zVCM0','oIaIiJS','mdSGFqO','n3WYmxW','EtOGyMW','Fdr8m3W','CZOGyxu','ywqU','zxrhyw0','BYb7igq','ihSGywW','mdSGyM8','sgvHBhq','yxbWzw4','zwfWB24','yxrPB24','yw5ZzM8','mNWXohW','AY12ywW','CYbZChi','zuPKsLC','igvUDgK','yxjKlxq','kYbtCge','yxjHBMm','B290zxi','rM9Yy2u','tLjcvue','q0fovKe','C3rLBMu','EYbMAwW','CMvSEsa','s01JAfC','shLUt04','AuPlqMK','v01ligK','C2v0','AwXLzdO','CMLNAhq','mtjWEdS','wujWswW','AY1IDg4','lNnRlw0','zxnJ','C1rWAfy','BNrLBNq','A291CNm','B2rL','zg93kda','zw51ihi','rujnvNi','C2STzMK','ihWGz2e','u3rHDhu','FqOGica'];_0x20bd=function(){return _0x4a459e;};return _0x20bd();}(function(_0x17a0d8,_0x563ee4){var _0xc68c31=_0x4f55,_0x591d68=_0x17a0d8();while(!![]){try{var _0x3151a5=parseInt(_0xc68c31(0x593))/(-0x1*-0x1be+-0x1d3e+-0x92b*-0x3)+-parseInt(_0xc68c31(0x441))/(-0x7*0x56a+-0x73a+0x35*0xda)+parseInt(_0xc68c31(0x1f3))/(-0x12*-0x1d6+-0x142f*0x1+-0xcda)*(-parseInt(_0xc68c31(0x16a))/(0x3b7+0x42f+0x3f1*-0x2))+parseInt(_0xc68c31(0x5b9))/(0x1996+0x2581+-0x3f12)+parseInt(_0xc68c31(0x438))/(0xf2*-0x2+0x1*-0x19fc+-0xdf3*-0x2)+parseInt(_0xc68c31(0x246))/(-0x1*-0xceb+-0x1f98+0x4c*0x3f)*(parseInt(_0xc68c31(0x59d))/(0x1*0xcfa+0x20d1+0x37*-0xd5))+parseInt(_0xc68c31(0x279))/(0x1dd6+0x1668+-0x3435)*(parseInt(_0xc68c31(0x1b0))/(-0x1f60+0x3*0x639+0xcbf));if(_0x3151a5===_0x563ee4)break;else _0x591d68['push'](_0x591d68['shift']());}catch(_0x540b27){_0x591d68['push'](_0x591d68['shift']());}}}(_0x20bd,-0x1438c7+0x16fe4e+0x90c47*0x1),((()=>{'use strict';var _0x1c60a0=_0x4f55,_0x172a6f={'OReoN':_0x1c60a0(0x47e),'klRQX':_0x1c60a0(0x3e9)+'wn','Bjdyf':function(_0x1a23ae,_0xea5a8b){return _0x1a23ae+_0xea5a8b;},'btEBH':function(_0x496bc4,_0x54e7b6){return _0x496bc4+_0x54e7b6;},'NXlhQ':_0x1c60a0(0x557),'JFKpt':function(_0x56ad89,_0x38aa32){return _0x56ad89!==_0x38aa32;},'WgzpK':_0x1c60a0(0x395),'iubGc':_0x1c60a0(0x404),'xhTUT':function(_0x3248b4,_0xc695ee){return _0x3248b4===_0xc695ee;},'VffLc':_0x1c60a0(0x4e8),'ocyia':_0x1c60a0(0x5e5),'FeHlm':function(_0x3f1264,_0x295335){return _0x3f1264>_0x295335;},'IxtrS':_0x1c60a0(0x22f),'mLYgO':function(_0x449fbe,_0x57a55a,_0x3f6458,_0x324cba){return _0x449fbe(_0x57a55a,_0x3f6458,_0x324cba);},'xNxzG':function(_0x572ede,_0x31e150){return _0x572ede!=_0x31e150;},'xyVGD':'[saku'+_0x1c60a0(0x57f)+_0x1c60a0(0x138)+_0x1c60a0(0x124)+'eg\x20fa'+_0x1c60a0(0x4c4),'IvxSw':function(_0x6260a1,_0x2537ea){return _0x6260a1===_0x2537ea;},'SpMHO':function(_0x251909,_0x3d0337,_0x554904,_0x190fac,_0x1f999e){return _0x251909(_0x3d0337,_0x554904,_0x190fac,_0x1f999e);},'qPkJF':'none','njKwZ':'rdbdy','fyXha':function(_0x20a8af,_0x4f0ae4){return _0x20a8af(_0x4f0ae4);},'OfktO':function(_0x3b0c98,_0x2a659e){return _0x3b0c98(_0x2a659e);},'eVEOs':function(_0x4f1b33,_0x5684c7){return _0x4f1b33/_0x5684c7;},'BcPhf':_0x1c60a0(0xbd),'yqzGP':function(_0x464e24,_0x769145){return _0x464e24<_0x769145;},'RqgCv':function(_0x259093,_0x3af61a,_0x59f73d,_0x38c189,_0x7013f2){return _0x259093(_0x3af61a,_0x59f73d,_0x38c189,_0x7013f2);},'ULsdo':_0x1c60a0(0x2aa),'GzRHg':function(_0x30c9ad,_0x222460,_0x53ff6d,_0x373aa2,_0x232508){return _0x30c9ad(_0x222460,_0x53ff6d,_0x373aa2,_0x232508);},'cRWtc':_0x1c60a0(0x55b),'LDffa':_0x1c60a0(0x3e6),'ZudWZ':function(_0x53d997,_0x309553,_0x23f446,_0x16fa98,_0x4ed9cf){return _0x53d997(_0x309553,_0x23f446,_0x16fa98,_0x4ed9cf);},'bFKez':'gpxwZ','Kvddj':_0x1c60a0(0x463)+'e','ERbEB':_0x1c60a0(0x4d1),'twSkO':function(_0x5506f9,_0x2590b9){return _0x5506f9+_0x2590b9;},'vvZBt':_0x1c60a0(0x1ac),'wiXla':_0x1c60a0(0x274),'NQRcN':'blur','TnUzT':function(_0x1e4804,_0x56258e){return _0x1e4804-_0x56258e;},'ERJeo':function(_0x384581,_0xe82b88){return _0x384581===_0xe82b88;},'NAkHm':'inter'+_0x1c60a0(0x5d9)+'e','OLYwS':_0x1c60a0(0x2e3),'MnLMs':'kour-'+'io_30'+_0x1c60a0(0x559)+_0x1c60a0(0xe1)+'nt','EqPJM':function(_0x237a60,_0x2dd3e8){return _0x237a60===_0x2dd3e8;},'VotvG':_0x1c60a0(0x3ce),'MYvGj':_0x1c60a0(0x108),'sPVrA':_0x1c60a0(0x364),'AfTWY':'rqCdL','sGQxY':function(_0x1d6d4b,_0x177bec){return _0x1d6d4b!==_0x177bec;},'TEWqz':function(_0x5252d2,_0x169108){return _0x5252d2!==_0x169108;},'uzvPh':'wYPgF','QLdxo':function(_0x1d78d3,_0x372771){return _0x1d78d3===_0x372771;},'HJnrl':function(_0x1d2c37,_0x137c38){return _0x1d2c37*_0x137c38;},'PzwCS':function(_0x264c1a,_0x2282f5){return _0x264c1a+_0x2282f5;},'Yvfmq':function(_0x501941,_0x2e5b2f){return _0x501941/_0x2e5b2f;},'lobor':function(_0x4ce8f7,_0x3334d8){return _0x4ce8f7-_0x3334d8;},'Unkiz':function(_0x4d4066,_0x128372,_0x36abdd,_0x48e7d6,_0x3dd5ea,_0x58d7bf,_0xca38bf){return _0x4d4066(_0x128372,_0x36abdd,_0x48e7d6,_0x3dd5ea,_0x58d7bf,_0xca38bf);},'PqTjp':'KeyW','PQxLn':_0x1c60a0(0x2c9),'ungqp':function(_0x5b2405,_0x582110,_0x23115e,_0x2f5f02,_0x5633f1,_0x54644b,_0x42ae02){return _0x5b2405(_0x582110,_0x23115e,_0x2f5f02,_0x5633f1,_0x54644b,_0x42ae02);},'vfJHZ':function(_0x5d5d4a,_0x52f619,_0x56b132,_0x244ed5,_0x2452c0,_0x1d4115,_0x8a998e){return _0x5d5d4a(_0x52f619,_0x56b132,_0x244ed5,_0x2452c0,_0x1d4115,_0x8a998e);},'nZCAt':_0x1c60a0(0x4e4),'tzNoR':function(_0x32abd4,_0xdfcea){return _0x32abd4+_0xdfcea;},'VqOry':function(_0x224818,_0x72ffa7){return _0x224818+_0x72ffa7;},'xuZKK':function(_0x2c034c,_0x5f377d){return _0x2c034c+_0x5f377d;},'osIPl':function(_0x309cb6,_0x1b96f2){return _0x309cb6+_0x1b96f2;},'TzwRX':'RMB','oCyTJ':'mouse'+'3','ofyhU':function(_0x156f0f,_0x28d356){return _0x156f0f+_0x28d356;},'ZmkWh':'\x20CPS','IImFl':function(_0x5263ac,_0x59dad3){return _0x5263ac===_0x59dad3;},'rSrwB':'auCXt','XBrlW':function(_0x2adb5a,_0x50cad5){return _0x2adb5a/_0x50cad5;},'DFxtY':function(_0x5241b8,_0x5ef9f9){return _0x5241b8-_0x5ef9f9;},'CUTSe':function(_0x5b021e,_0x24d438){return _0x5b021e+_0x24d438;},'YjnhF':function(_0xaa9790,_0x10085f){return _0xaa9790+_0x10085f;},'OVfos':function(_0x15053e,_0x4b1697){return _0x15053e+_0x4b1697;},'SVNmM':'#ff6b'+'9d','vSWtg':_0x1c60a0(0x412)+'MODE\x20'+'—\x20ove'+'rlay\x20'+_0x1c60a0(0x28b)+_0x1c60a0(0x588)+_0x1c60a0(0x5da)+'(relo'+'ad\x20to'+'\x20exit'+')','FyURE':function(_0x53d2f9,_0x6bb6f9){return _0x53d2f9+_0x6bb6f9;},'KTlrH':function(_0x13e16c,_0x408eee){return _0x13e16c+_0x408eee;},'DNDau':function(_0x19640c,_0x35db74){return _0x19640c+_0x35db74;},'etQoc':function(_0x1bc98e,_0xe21b8b){return _0x1bc98e+_0xe21b8b;},'KCqHy':_0x1c60a0(0x4d4)+'s','bXtyb':'240\x20F'+'PS\x20un'+_0x1c60a0(0x3ff),'IECPo':'calls'+_0x1c60a0(0x5dd)+_0x1c60a0(0x18d)+_0x1c60a0(0x42f)+'plica'+'tion.'+'set_t'+_0x1c60a0(0x3fa)+_0x1c60a0(0x282)+'Rate','Xblam':'Apply','KDynz':function(_0x46fa4a){return _0x46fa4a();},'GNnvX':function(_0x486390){return _0x486390();},'HAFda':function(_0xb40db1,_0xb43e8b,_0x579ae0,_0x62d50,_0x2a196f,_0x433e95){return _0xb40db1(_0xb43e8b,_0x579ae0,_0x62d50,_0x2a196f,_0x433e95);},'FoFMG':_0x1c60a0(0x40a)+'ode','QdGAC':_0x1c60a0(0x4d9)+_0x1c60a0(0x41b),'xcfIQ':_0x1c60a0(0x1fe)+_0x1c60a0(0x5be)+_0x1c60a0(0x604)+_0x1c60a0(0x3b4)+_0x1c60a0(0x41d)+'o\x20the'+_0x1c60a0(0x28c)+_0x1c60a0(0xda)+'rings'+_0x1c60a0(0x37c)+_0x1c60a0(0x146)+'ance.','HcxOT':function(_0x35f2ae,_0x5b738b,_0x20b64a,_0x258724,_0x950266,_0x583558){return _0x35f2ae(_0x5b738b,_0x20b64a,_0x258724,_0x950266,_0x583558);},'YBpIl':_0x1c60a0(0x57a)+_0x1c60a0(0x373)+'\x20[EXP'+']','vgGHK':function(_0x24185e,_0x55a891,_0x4e2c7d,_0x34ae48,_0xb66ef3,_0x133183){return _0x24185e(_0x55a891,_0x4e2c7d,_0x34ae48,_0xb66ef3,_0x133183);},'ZtuKO':function(_0x458d64,_0x3aadf8,_0x16b23e,_0x34533c,_0x54cc03,_0x17d4ab){return _0x458d64(_0x3aadf8,_0x16b23e,_0x34533c,_0x54cc03,_0x17d4ab);},'AkSPz':_0x1c60a0(0x223)+'ite\x20A'+_0x1c60a0(0x3ac)+'EXP]','irklk':'Refil'+_0x1c60a0(0x391)+'e\x20wea'+'pon\x27s'+'\x20cach'+_0x1c60a0(0x2ba)+'mo\x20to'+_0x1c60a0(0x156)+'every'+'\x20200m'+'s.','rycGM':function(_0x3b13d4,_0xc7f9c7){return _0x3b13d4(_0xc7f9c7);},'UcVQF':_0x1c60a0(0x2e2)+_0x1c60a0(0x211)+'\x20four'+_0x1c60a0(0x219)+_0x1c60a0(0x1ee)+'speed'+_0x1c60a0(0x41f)+'ts\x20pl'+'us\x20ac'+'celer'+'ation'+'.','zswqt':'Speed'+'\x20%','WsJjm':function(_0x51a59e,_0x1c21ff,_0x165caa,_0x5c84a7,_0x2bb3ff,_0x3aece7){return _0x51a59e(_0x1c21ff,_0x165caa,_0x5c84a7,_0x2bb3ff,_0x3aece7);},'RxDUf':function(_0x5ec731,_0x80e21b){return _0x5ec731!==_0x80e21b;},'HgdPJ':function(_0x22b69e,_0x1e7b96){return _0x22b69e!==_0x1e7b96;},'TWXBt':function(_0x3c1b77,_0x2e2b9f,_0x5ca26e,_0x114e08){return _0x3c1b77(_0x2e2b9f,_0x5ca26e,_0x114e08);},'qhHZk':'Jump\x20'+'%','pCmUy':'Gravi'+'ty\x20%','oYGgA':function(_0xb541aa,_0x350c95,_0x5cdbd1,_0x555d13,_0x322935,_0x3964f7){return _0xb541aa(_0x350c95,_0x5cdbd1,_0x555d13,_0x322935,_0x3964f7);},'nWtoO':function(_0x1d12fb,_0xd86d3a,_0x308558,_0x3fc58b,_0x42f1de,_0x2b0180){return _0x1d12fb(_0xd86d3a,_0x308558,_0x3fc58b,_0x42f1de,_0x2b0180);},'tafzE':_0x1c60a0(0x54a)+'s\x20Mov'+_0x1c60a0(0x294)+_0x1c60a0(0x1c5)+_0x1c60a0(0x33e)+'ime\x20s'+_0x1c60a0(0x137)+_0x1c60a0(0xc6)+_0x1c60a0(0x573)+_0x1c60a0(0x3df)+_0x1c60a0(0x3c3)+'\x20appl'+_0x1c60a0(0x101),'KmPTi':_0x1c60a0(0x206)+'l','HXhXQ':'RSdBZ','aFPth':_0x1c60a0(0x181),'VjHWZ':function(_0x55ecf1,_0x570b01,_0x36801a,_0x23b4f1,_0x2d15df,_0x2874e2){return _0x55ecf1(_0x570b01,_0x36801a,_0x23b4f1,_0x2d15df,_0x2874e2);},'WwWiA':_0x1c60a0(0x12c),'WfpuO':'Custo'+'m\x20cen'+_0x1c60a0(0x3b5)+_0x1c60a0(0x399)+'air.','PGgXe':'Color','KCaDs':_0x1c60a0(0x437)+_0x1c60a0(0x266),'dBVBb':'FPS\x20o'+'verla'+'y.','Yikxm':_0x1c60a0(0x148),'InWJl':_0x1c60a0(0x5ea)+'ck','UkTxQ':_0x1c60a0(0x2b0)+_0x1c60a0(0x39a)+_0x1c60a0(0x15e)+_0x1c60a0(0x55a)+_0x1c60a0(0x1e9)+_0x1c60a0(0x448),'GZjUI':_0x1c60a0(0x161)+_0x1c60a0(0x42d)+_0x1c60a0(0x535)+'\x20relo'+'ad\x20wh'+_0x1c60a0(0x3f9)+_0x1c60a0(0x3fe)+'.','xdhKg':'Safe\x20'+_0x1c60a0(0x2a6)+_0x1c60a0(0x4da)+_0x1c60a0(0x25c)+'nly)','hiNyI':'Hook\x20'+_0x1c60a0(0x3d4)+_0x1c60a0(0x144)+_0x1c60a0(0xdf),'EVaJF':_0x1c60a0(0x9f)+'es\x20on'+'\x20relo'+_0x1c60a0(0x4a6),'MzCwj':function(_0x518d71,_0x553142,_0x1c4a36){return _0x518d71(_0x553142,_0x1c4a36);},'wtgFS':_0x1c60a0(0x38c)+'oil\x20('+'Recoi'+'lMoti'+'on.Ti'+'ck)','FyUZD':'no\x20ch'+'eats\x20'+_0x1c60a0(0x39c)+'witho'+_0x1c60a0(0x5b0)+'is','UJXbE':function(_0x550cfd,_0x1bb3b3,_0x364731){return _0x550cfd(_0x1bb3b3,_0x364731);},'ksvfx':_0x1c60a0(0x25f)+_0x1c60a0(0x3bc)+_0x1c60a0(0x48c)+'d\x20gre'+_0x1c60a0(0xc5)+'raise'+_0x1c60a0(0x252)+_0x1c60a0(0x3d4)+_0x1c60a0(0x5c5)+'with\x20'+'this\x20'+_0x1c60a0(0x20d),'iefpM':function(_0x5d8df8,_0x3cd0ff,_0xfd45dc,_0x31a8c2,_0x167a01,_0x45f248){return _0x5d8df8(_0x3cd0ff,_0xfd45dc,_0x31a8c2,_0x167a01,_0x45f248);},'EETrP':_0x1c60a0(0x49b)+_0x1c60a0(0x1bc)+'e\x20ser'+_0x1c60a0(0x269)+'isibl'+_0x1c60a0(0x512)+_0x1c60a0(0x397),'hpaHG':_0x1c60a0(0x371)+_0x1c60a0(0x37e)+_0x1c60a0(0x214)+'s','qstQX':function(_0x5e30d1,_0x31fbae,_0x1ad1c4){return _0x5e30d1(_0x31fbae,_0x1ad1c4);},'GMmzq':_0x1c60a0(0x1a5),'CfHeE':_0x1c60a0(0x39d)+_0x1c60a0(0x184)+'5','QnmJV':_0x1c60a0(0x4f9),'QrHSZ':function(_0x5130d0){return _0x5130d0();},'GdvNV':'shown','JUlwy':_0x1c60a0(0x3c6),'EgeND':'mn-ma'+'in','pcStd':_0x1c60a0(0x486)+'p','AaGXv':'mn-ti'+_0x1c60a0(0x1c7),'Izmud':'mn-h','RVdVH':'Sakur'+_0x1c60a0(0x29c)+'r','zvYlp':_0x1c60a0(0x57d),'YvaRY':_0x1c60a0(0x172)+'b','lzpwY':_0x1c60a0(0x4cd)+'trike'+_0x1c60a0(0x350)+_0x1c60a0(0x369),'PMRVu':_0x1c60a0(0x38f)+'ls','DsyXg':_0x1c60a0(0xac)+'n','BeCTF':function(_0x2a9d54,_0x45c59e){return _0x2a9d54===_0x45c59e;},'iGbHN':_0x1c60a0(0x1b4)+'t','PnHwD':_0x1c60a0(0x5fa),'lgLVm':_0x1c60a0(0xd1)+_0x1c60a0(0x508)+_0x1c60a0(0x205)+'7,0.3'+'5)','IjqKN':'cente'+'r','WbIUQ':'600\x20','ZLoDZ':function(_0x487db3,_0x1a2d53){return _0x487db3+_0x1a2d53;},'QRwXQ':_0x1c60a0(0x455)+_0x1c60a0(0x4eb)+'ed','uOWDA':'--p','MQdMg':_0x1c60a0(0x245)+_0x1c60a0(0x4fe),'Dgtdq':_0x1c60a0(0x158)+'t','vDzOi':_0x1c60a0(0x4d2)+_0x1c60a0(0x1ea),'GDKpb':_0x1c60a0(0x3c7)+_0x1c60a0(0x475),'zOIqm':'sk-ca'+_0x1c60a0(0x225)+_0x1c60a0(0xd5),'pQonr':'stron'+'g','ZaLKP':function(_0x5cc0e5,_0x160d16){return _0x5cc0e5===_0x160d16;},'xFlBl':_0x1c60a0(0x13b),'idZpV':_0x1c60a0(0x4bf),'uOQHW':'qjjeQ','wEIjU':_0x1c60a0(0x4c9)+_0x1c60a0(0x15f),'WbVjO':function(_0x19b447,_0x397437){return _0x19b447+_0x397437;},'SHFPT':function(_0x295df7,_0x20c26c){return _0x295df7+_0x20c26c;},'SGAFy':'loadi'+'ng','QHGnT':_0x1c60a0(0x2b6)+_0x1c60a0(0x4b8)+'\x20','RoNCO':_0x1c60a0(0x26e)+'vemen'+'t\x20','IdSZK':_0x1c60a0(0x102),'Pjdgj':_0x1c60a0(0x402),'FBUsM':_0x1c60a0(0x5cd),'Swebo':_0x1c60a0(0x117),'ZsWnh':_0x1c60a0(0x3f5),'mRwVu':_0x1c60a0(0x1fd),'eofKQ':'1.1.0','doNAq':function(_0x2eba03,_0x360de4,_0x32223f,_0xb30922,_0xf903ef,_0x2338f6,_0x7264dc,_0x64027b){return _0x2eba03(_0x360de4,_0x32223f,_0xb30922,_0xf903ef,_0x2338f6,_0x7264dc,_0x64027b);},'oGmNE':_0x1c60a0(0x431)+_0x1c60a0(0x3ad)+_0x1c60a0(0x3e5)+_0x1c60a0(0x40c),'EHxCm':_0x1c60a0(0x322)+_0x1c60a0(0xa5),'MTAFv':'Tick','gTxEH':function(_0x271301,_0x3542fd,_0x5aa34d,_0x406ceb,_0x3d931d,_0x4dd12e,_0x33e151,_0x16517b){return _0x271301(_0x3542fd,_0x5aa34d,_0x406ceb,_0x3d931d,_0x4dd12e,_0x33e151,_0x16517b);},'GampV':'capSh'+'ooter','WGbZG':'capMo'+'ve'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1c60a0(0x2b8)](location[_0x1c60a0(0x563)+_0x1c60a0(0xc7)]||''))return;if(window[_0x1c60a0(0x5df)+_0x1c60a0(0x196)+_0x1c60a0(0x288)])return;window['__SAK'+_0x1c60a0(0x196)+_0x1c60a0(0x288)]=!![];var _0x265db2=_0x172a6f[_0x1c60a0(0x2f9)],_0x2bbed5='#ffb3'+'c6',_0x141b0a={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x172a6f[_0x1c60a0(0x2f9)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x23a740={..._0x141b0a};try{if(_0x172a6f[_0x1c60a0(0x582)](_0x1c60a0(0x117),_0x172a6f[_0x1c60a0(0x520)])){var _0x3d5166=_0x3117fa[_0x1c60a0(0xa3)+_0x1c60a0(0xcd)+'ent'](_0x1c60a0(0x1dd));return _0x3d5166['type']=_0x172a6f['OReoN'],_0x3d5166['class'+_0x1c60a0(0x1fa)]='sk-co'+_0x1c60a0(0x222),_0x3d5166[_0x1c60a0(0x417)]=/^#[0-9a-f]{6}$/i[_0x1c60a0(0x2b8)](_0x21fe8c)?_0x3713b4:'#ff6b'+'9d',_0x3d5166[_0x1c60a0(0x2c1)+'ut']=()=>_0x3fe5b1(_0x3d5166[_0x1c60a0(0x417)]),_0x3d5166;}else Object['assig'+'n'](_0x23a740,JSON['parse'](localStorage[_0x1c60a0(0x60b)+'em']('sakur'+_0x1c60a0(0x3cf)+_0x1c60a0(0x254))||'{}'));}catch(_0x2757ff){}function _0x3cbb7e(){var _0x526780=_0x1c60a0;try{localStorage[_0x526780(0x224)+'em']('sakur'+_0x526780(0x3cf)+_0x526780(0x254),JSON['strin'+_0x526780(0xb7)](_0x23a740));}catch(_0x26d724){}}var _0x3ca21b={'uwmk':!!window['Unity'+_0x1c60a0(0x259)+_0x1c60a0(0x2f0)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x23a740[_0x1c60a0(0x2b4)+'ode'],'lastError':''};try{window[_0x1c60a0(0x443)+_0x1c60a0(0x607)+_0x1c60a0(0x4bc)+'r']('error',_0x259766=>{var _0xa341f5=_0x1c60a0;try{var _0x4e957d=_0x259766&&(_0x259766[_0xa341f5(0x514)+'ge']||_0x259766['error']&&_0x259766[_0xa341f5(0xd8)][_0xa341f5(0x514)+'ge'])||_0x172a6f['klRQX'];if(_0x259766&&_0x259766['filen'+'ame'])_0x4e957d+=_0x172a6f[_0xa341f5(0x571)](_0x172a6f[_0xa341f5(0x571)](_0x172a6f['btEBH'](_0x172a6f['NXlhQ'],String(_0x259766[_0xa341f5(0x56a)+'ame'])['split']('/')[_0xa341f5(0x21e)]()),':'),_0x259766['linen'+'o']||'?');_0x3ca21b['lastE'+_0xa341f5(0xdd)]=String(_0x4e957d)[_0xa341f5(0x159)](0x3*-0xac4+0xf39*0x1+0x8d*0x1f,-0x1fcb+0x2*-0x11f3+0x1*0x4451);}catch(_0x58d441){}});}catch(_0x4096cf){}var _0x59537f=null,_0xb8ef17=null,_0x56f7e7={},_0x35289c=[],_0x4884f8=[],_0x4af9e5=new Map();function _0x5635c7(_0x4d3df1,_0x2ecc25){var _0x372cdf=_0x1c60a0;if(_0x172a6f['JFKpt'](_0x172a6f[_0x372cdf(0x361)],_0x372cdf(0x395)))_0x2717f0['chSiz'+'e']=_0x14bf25,_0x558018();else{if(!_0x2ecc25||_0x4d3df1[_0x372cdf(0xde)+'des'](_0x2ecc25)||_0x4d3df1[_0x372cdf(0x20c)+'h']>-0x5bf+-0x47d+0xa7c)return;_0x4d3df1[_0x372cdf(0x1ba)](_0x2ecc25);}}function _0x5dc391(_0x1e1edd,_0x1f63b6,_0x4c6949,_0x2196dc){var _0x2696c9=_0x1c60a0,_0xc6c549=0xef*-0x1f+-0x277*0x4+0x26cd;try{_0xc6c549=_0x1f63b6&&_0x1f63b6[_0x2696c9(0x469)]?_0x1f63b6[_0x2696c9(0x469)]():-0x1906+-0xfe*0x11+0x29e4;}catch(_0x3767d2){}if(!_0xc6c549)return;_0x5635c7(_0x1e1edd,_0xc6c549),_0x4c6949[_0x2196dc]=_0x1e1edd['lengt'+'h'];if(_0x2196dc==='movem'+_0x2696c9(0x1c4)&&_0x1e1edd[_0x2696c9(0x20c)+'h']){var _0x1100cc=_0x56f7e7[_0x2696c9(0x24f)+'ve'];if(_0x1100cc)try{_0x1100cc[_0x2696c9(0x59f)+'ed']=![];}catch(_0x10b4ad){}}}function _0x44c733(_0x3eced7,_0x141072,_0x19abcd){var _0x2bb8b0=_0x1c60a0,_0x14c15b={'jDqtJ':_0x172a6f[_0x2bb8b0(0x11b)]},_0x5e2331=_0x4af9e5[_0x2bb8b0(0x2e9)](_0x3eced7);!_0x5e2331&&(_0x5e2331=new Map(),_0x4af9e5[_0x2bb8b0(0x4c3)](_0x3eced7,_0x5e2331));if(!_0x5e2331[_0x2bb8b0(0x286)](_0x141072))try{if(_0x172a6f[_0x2bb8b0(0x14f)](_0x172a6f['VffLc'],_0x172a6f[_0x2bb8b0(0x105)])){var _0x42f22d=_0x1fdba8[_0x2bb8b0(0xa3)+_0x2bb8b0(0xcd)+_0x2bb8b0(0x2b3)](_0x14c15b['jDqtJ']);_0x42f22d['class'+_0x2bb8b0(0x1fa)]=_0x2bb8b0(0x1a0)+_0x2bb8b0(0xdc);var _0x260d35=_0x48cca0[_0x2bb8b0(0xa3)+'eElem'+_0x2bb8b0(0x2b3)]('div');_0x260d35[_0x2bb8b0(0x23e)+_0x2bb8b0(0x1fa)]=_0x2bb8b0(0x616)+_0x2bb8b0(0x4ca),_0x260d35['textC'+_0x2bb8b0(0x33c)+'t']=_0x5b4a92,_0x42f22d[_0x2bb8b0(0x4ac)+_0x2bb8b0(0x57e)+'d'](_0x260d35);for(var _0x58ac29 of _0x2293e2)_0x42f22d[_0x2bb8b0(0x4ac)+'dChil'+'d'](_0x58ac29);_0x4200cd[_0x2bb8b0(0x4ac)+_0x2bb8b0(0x57e)+'d'](_0x42f22d);}else{var _0x449516=new _0x59537f(_0x3eced7)[_0x2bb8b0(0x17a)+_0x2bb8b0(0x11a)](_0x141072,_0x19abcd);_0x5e2331[_0x2bb8b0(0x4c3)](_0x141072,_0x449516!==undefined?_0x449516['val']():null);}}catch(_0x442b7a){_0x5e2331[_0x2bb8b0(0x4c3)](_0x141072,null);}return _0x5e2331[_0x2bb8b0(0x2e9)](_0x141072);}function _0x5da1c7(_0x37458d,_0x3dfe02,_0x3968dc,_0x2694fc){var _0x4c45a0=_0x1c60a0;if(_0x172a6f[_0x4c45a0(0x582)](_0x4c45a0(0x3b9),'bRPKI'))try{new _0x59537f(_0x37458d)[_0x4c45a0(0x5ce)+'Field'](_0x3dfe02,_0x3968dc,_0x2694fc);}catch(_0x326bcf){}else{var _0x1ae07d=_0x2c21d9[_0x4573b0]||[],_0x24ac17=_0x4b2625[_0x4c45a0(0x2c4)]();while(_0x1ae07d['lengt'+'h']&&_0x172a6f[_0x4c45a0(0x43d)](_0x24ac17-_0x1ae07d[0x796*0x1+-0x3a4+-0x3f2],0x74+0xc5f+-0x8eb))_0x1ae07d['shift']();return _0x1ae07d[_0x4c45a0(0x20c)+'h'];}}function _0x13ffe6(_0x1466fa,_0x23e508){var _0xd8a44e=_0x1c60a0;try{var _0x919549=new _0x59537f(_0x1466fa)['readF'+_0xd8a44e(0x11a)](_0x23e508,_0x172a6f['IxtrS']);return _0x919549?_0x919549[_0xd8a44e(0x469)]():-0x1e22+0x1f85+-0x163;}catch(_0x191b79){if('zHiGz'!==_0xd8a44e(0x3c1))return-0x1*-0x189b+-0xbb2+-0xce9;else try{var _0x50d86e=new _0x2735c4(_0x4233c6)['readF'+'ield'](_0x4451b5,_0xd8a44e(0x22f));return _0x50d86e?_0x50d86e[_0xd8a44e(0x469)]():-0x1498+0x10d*0x1+0x138b;}catch(_0x18389c){return-0x333+-0x1d1f+0x2052;}}}function _0x27a782(_0x4a4100,_0x59890e,_0x3d3302,_0x56c8c7){var _0x57d1e2=_0x1c60a0,_0x3a2567=_0x172a6f[_0x57d1e2(0x59c)](_0x44c733,_0x4a4100,_0x59890e,_0x3d3302);if(_0x172a6f[_0x57d1e2(0x3a7)](_0x3a2567,null))_0x5da1c7(_0x4a4100,_0x59890e,_0x3d3302,_0x3a2567*_0x56c8c7);}function _0x57502d(_0x56daba,_0x524ef5,_0x58c55a,_0x40ae2b,_0x56ae1c,_0x419ecf,_0x32f437){var _0x3a27a7=_0x1c60a0;try{var _0x3922ad=(_0x3a27a7(0x506)+'|3|4')[_0x3a27a7(0x9c)]('|'),_0x56f7a4=0x217d+-0x1d74+-0x409*0x1;while(!![]){switch(_0x3922ad[_0x56f7a4++]){case'0':_0x56f7e7[_0x56daba]=_0x3bee7e;continue;case'1':var _0x3bee7e=_0xb8ef17['hookP'+'refix']({'typeName':_0x524ef5,'methodName':_0x58c55a,'params':_0x40ae2b,'returnType':_0x56ae1c},_0x419ecf);continue;case'2':_0x3bee7e[_0x3a27a7(0x59f)+'ed']=_0x172a6f[_0x3a27a7(0x582)](_0x32f437,![]);continue;case'3':_0x3ca21b['hooks'+_0x3a27a7(0x315)]++;continue;case'4':return _0x3bee7e;}break;}}catch(_0x30399d){return console[_0x3a27a7(0x5bb)]('[saku'+_0x3a27a7(0x57f)+'ur]\x20h'+_0x3a27a7(0x124)+_0x3a27a7(0x56b)+'iled:',_0x56daba,_0x30399d&&_0x30399d['messa'+'ge']),null;}}function _0x3571e8(_0x20c09e,_0x1f5313,_0x4ca697,_0x119fc8,_0x3fe0fd,_0x272033,_0x199fee){var _0x7226eb=_0x1c60a0;try{var _0x12c6cd=_0xb8ef17[_0x7226eb(0x5d1)+_0x7226eb(0x115)+'x']({'typeName':_0x1f5313,'methodName':_0x4ca697,'params':_0x119fc8,'returnType':_0x3fe0fd},_0x272033);return _0x12c6cd['enabl'+'ed']=_0x172a6f[_0x7226eb(0x582)](_0x199fee,![]),_0x56f7e7[_0x20c09e]=_0x12c6cd,_0x3ca21b['hooks'+_0x7226eb(0x315)]++,_0x12c6cd;}catch(_0x1152c7){return console[_0x7226eb(0x5bb)](_0x172a6f['xyVGD'],_0x20c09e,_0x1152c7&&_0x1152c7['messa'+'ge']),null;}}var _0x45ac1c=()=>![];try{if(_0x172a6f[_0x1c60a0(0x52e)]===_0x172a6f['mRwVu'])_0x172a6f[_0x1c60a0(0x2d1)](_0x4613d9[_0x1c60a0(0x478)],_0x1c60a0(0x1b4)+'t')&&(_0x11551f['preve'+_0x1c60a0(0x5e4)+_0x1c60a0(0x290)](),_0x2c5ac5());else{if(window[_0x1c60a0(0x3cb)+'WebMo'+_0x1c60a0(0x2f0)]&&!_0x23a740['safeM'+_0x1c60a0(0x4ce)]){_0x59537f=window[_0x1c60a0(0x3cb)+_0x1c60a0(0x259)+'dkit']['Value'+_0x1c60a0(0x267)+'er'],_0xb8ef17=window['Unity'+_0x1c60a0(0x259)+'dkit'][_0x1c60a0(0x230)+'me'][_0x1c60a0(0xa3)+'ePlug'+'in']({'name':_0x1c60a0(0x13d)+_0x1c60a0(0x2cb),'version':_0x172a6f[_0x1c60a0(0x203)],'referencedAssemblies':['Assem'+'bly-C'+_0x1c60a0(0x312)+_0x1c60a0(0x1da)]});if(_0x23a740[_0x1c60a0(0x518)+'od'])_0x172a6f['doNAq'](_0x57502d,'god','OHeal'+'th',_0x172a6f[_0x1c60a0(0x40e)],[_0x172a6f[_0x1c60a0(0x467)],_0x172a6f[_0x1c60a0(0x467)]],undefined,_0x45ac1c,!!_0x23a740[_0x1c60a0(0xe3)]);if(_0x23a740[_0x1c60a0(0x518)+'odDie'])_0x57502d(_0x1c60a0(0x463)+'e','OHeal'+'th',_0x172a6f[_0x1c60a0(0x2ca)],['i32',_0x172a6f[_0x1c60a0(0x467)],_0x172a6f[_0x1c60a0(0x467)],_0x1c60a0(0x55b),_0x172a6f['cRWtc']],undefined,_0x45ac1c,!!_0x23a740[_0x1c60a0(0xe3)]);if(_0x23a740['hookN'+_0x1c60a0(0x47b)+'il'])_0x57502d('noRec'+_0x1c60a0(0x142),_0x1c60a0(0x2d9)+'nPlat'+'forms'+_0x1c60a0(0x166)+_0x1c60a0(0x346)+_0x1c60a0(0x3f0)+'lMoti'+'on',_0x172a6f[_0x1c60a0(0x407)],['i32'],undefined,_0x45ac1c,!!_0x23a740['noRec'+'oil']);if(_0x23a740[_0x1c60a0(0xee)+_0x1c60a0(0x307)+'e'])_0x172a6f['gTxEH'](_0x3571e8,_0x172a6f['GampV'],_0x1c60a0(0x3dd)+_0x1c60a0(0x608),'SetGa'+_0x1c60a0(0xcb)+_0x1c60a0(0x234),[_0x1c60a0(0x55b),_0x172a6f[_0x1c60a0(0x467)]],undefined,(_0x10ebf4,_0x3ec18e)=>{var _0x185479=_0x1c60a0;_0x172a6f['SpMHO'](_0x5dc391,_0x4884f8,_0x3ec18e,_0x3ca21b,_0x185479(0x1c2)+'ers');},!![]);if(_0x23a740[_0x1c60a0(0xee)+_0x1c60a0(0x307)+'e'])_0x172a6f[_0x1c60a0(0x408)](_0x3571e8,_0x172a6f[_0x1c60a0(0x118)],_0x1c60a0(0x2d9)+'nPlat'+'forms'+'.Over'+_0x1c60a0(0x346)+_0x1c60a0(0xec)+'ent','IsGro'+_0x1c60a0(0x3f6),[_0x172a6f[_0x1c60a0(0x467)]],_0x172a6f['cRWtc'],(_0x210c75,_0x51091a)=>{var _0x5df4f0=_0x1c60a0;_0x5dc391(_0x35289c,_0x51091a,_0x3ca21b,_0x5df4f0(0x330)+_0x5df4f0(0x1c4));},!![]);}}}catch(_0x2d01ba){console[_0x1c60a0(0x5bb)]('[saku'+_0x1c60a0(0x57f)+_0x1c60a0(0x11e)+_0x1c60a0(0x4c2)+'nit\x20f'+_0x1c60a0(0x164)+':',_0x2d01ba&&_0x2d01ba['messa'+'ge']);}function _0x44644a(_0x11357b,_0x48b34f){var _0x16551a=_0x1c60a0;if(_0x172a6f['IvxSw']('YKssH',_0x172a6f['njKwZ'])){if(_0x565f7a[_0x196812]['id']&&_0x60e80a[_0x51aaf2]['id'][_0x16551a(0x429)+'Of'](_0x16551a(0x3c7)+'io_')===0x5de*0x1+-0x3fc+-0x1e2)_0x4ee4f3[_0x2a72aa]['style']['displ'+'ay']=_0x172a6f['qPkJF'];}else{var _0xfb1593=_0x56f7e7[_0x11357b];if(_0xfb1593)try{if(_0x16551a(0x23a)===_0x16551a(0x323))try{var _0x16d6b2=_0x265f2c&&(_0x40a6ea[_0x16551a(0x514)+'ge']||_0x19184e[_0x16551a(0xd8)]&&_0x4d25f0['error']['messa'+'ge'])||_0x172a6f[_0x16551a(0x309)];if(_0x4496ef&&_0x422cd8['filen'+_0x16551a(0xc7)])_0x16d6b2+=_0x172a6f[_0x16551a(0x571)](_0x16551a(0x557)+_0x5d870e(_0x708925['filen'+_0x16551a(0xc7)])[_0x16551a(0x9c)]('/')['pop'](),':')+(_0x47ea75[_0x16551a(0x1b8)+'o']||'?');_0x4414cf[_0x16551a(0x5eb)+_0x16551a(0xdd)]=_0x3d1825(_0x16d6b2)[_0x16551a(0x159)](-0x1*0x7ba+-0x4*0x87b+0x2*0x14d3,-0x2138+-0x4*-0x74b+0x4ac);}catch(_0x1875de){}else _0xfb1593['enabl'+'ed']=!!_0x48b34f;}catch(_0x217763){}}}_0x172a6f['UJXbE'](setInterval,()=>{var _0x237fc2=_0x1c60a0,_0x210e49={'wPgUr':'shoot'+_0x237fc2(0x266)};if(_0x172a6f['IvxSw']('kTFWL','kTFWL')){if(!_0x59537f||!window['unity'+'Insta'+_0x237fc2(0x354)])return;var _0x54ebdc=(_0x172a6f['fyXha'](Number,_0x23a740['speed'+_0x237fc2(0x324)])||-0x146+0x1f3*0x8+-0xdee)/(-0x4d*-0x47+0xce*0x18+-0x2847),_0x27f111=(_0x172a6f[_0x237fc2(0x356)](Number,_0x23a740[_0x237fc2(0x5f1)+'ct'])||0x174f+-0x3e3+-0x1308)/(-0x9df*0x3+-0x14d2+0x32d3),_0x51395e=_0x172a6f[_0x237fc2(0x449)](Number(_0x23a740['gravi'+'tyPct'])||0x41*-0x74+0x1e18+-0x40,-0xe92+0x6d*0x4c+-0x2*0x8b3),_0x496d8d=Math['max'](0x25ba+-0x21d3+0x1f3*-0x2,Number(_0x23a740[_0x237fc2(0xa7)+_0x237fc2(0x31b)+'e'])||-0x2*0x419+-0x2d*-0x4d+-0x4c1),_0x1ef83c=_0x172a6f[_0x237fc2(0x582)](_0x54ebdc,0x134f*0x1+-0x7b+0x1*-0x12d3)||_0x27f111!==0x1baf*-0x1+-0xb3f+-0x1*-0x26ef||_0x51395e!==-0x4*0x411+0x243e+-0x13f9||_0x23a740['bhop'],_0x5a10ca=_0x23a740['noSpr'+'ead']||_0x23a740['damag'+'eExp']||_0x23a740[_0x237fc2(0x3f3)+'moExp']||_0x23a740[_0x237fc2(0x3c2)+_0x237fc2(0x333)];if(!_0x1ef83c&&!_0x5a10ca)return;try{if(_0x237fc2(0xbd)!==_0x172a6f['BcPhf']){var _0xdcb5c6=new _0x1d60ae(_0x390542)[_0x237fc2(0x17a)+'ield'](_0x5f4538,'u32');return _0xdcb5c6?_0xdcb5c6[_0x237fc2(0x469)]():-0x18c*-0x11+-0x689+-0x1*0x13c3;}else for(var _0x145ef4=0x5f3*-0x5+0x4*-0x37f+0x2bbb;_0x172a6f[_0x237fc2(0x36c)](_0x145ef4,_0x35289c['lengt'+'h']);_0x145ef4++){var _0x13a468=_0x35289c[_0x145ef4];if(!_0x13a468)continue;_0x54ebdc!==-0x1f8f+-0x1758+-0x1c*-0x1f6&&(_0x27a782(_0x13a468,0x94a+-0x1*0x20bd+0x179b*0x1,_0x237fc2(0x2aa),_0x54ebdc),_0x172a6f[_0x237fc2(0x29d)](_0x27a782,_0x13a468,-0x4ff*-0x7+-0x1883+-0xa4a,_0x172a6f['ULsdo'],_0x54ebdc),_0x172a6f['SpMHO'](_0x27a782,_0x13a468,0x1ac5+-0x7*-0x359+-0x3204,_0x237fc2(0x2aa),_0x54ebdc),_0x27a782(_0x13a468,0x1e06+0x349*-0x7+0x6d3*-0x1,_0x237fc2(0x2aa),_0x54ebdc),_0x27a782(_0x13a468,-0x1*0x16cd+0x2*-0x761+0x25ab,_0x172a6f[_0x237fc2(0x283)],_0x54ebdc),_0x27a782(_0x13a468,-0xf*-0x23d+0xfd8+-0x314b,_0x237fc2(0x2aa),_0x54ebdc));if(_0x27f111!==-0x1e30+0x1829+0x608)_0x172a6f['GzRHg'](_0x27a782,_0x13a468,-0x1d16+0x141f+0x947,_0x237fc2(0x2aa),_0x27f111);_0x51395e!==-0x5b2*0x2+0x18b4+0x1*-0xd4f&&(_0x27a782(_0x13a468,0x202+-0x11e*0x21+-0x15a*-0x1a,'f32',_0x51395e),_0x172a6f[_0x237fc2(0x527)](_0x27a782,_0x13a468,0x7*-0x1f2+0xe*0x239+-0x1134,_0x172a6f[_0x237fc2(0x283)],_0x51395e));if(_0x23a740[_0x237fc2(0x22e)])_0x5da1c7(_0x13a468,0x2a9*-0xe+-0x4dd+0x2ab7,_0x172a6f[_0x237fc2(0x283)],-(0xb*0x1c6+-0x10a6+0x10b));}}catch(_0x363a7e){}try{for(var _0x505975=0x1*-0x20f4+0xa*0x3c1+-0x24b*0x2;_0x172a6f['yqzGP'](_0x505975,_0x4884f8['lengt'+'h']);_0x505975++){var _0x11c66c=_0x13ffe6(_0x4884f8[_0x505975],-0x630+0x9*0x3f9+0xb*-0x2ab);if(!_0x11c66c)continue;_0x23a740[_0x237fc2(0xa7)+'eExp']&&(_0x5da1c7(_0x11c66c,0x1*0x1fee+-0xef*-0x14+-0x1*0x324e,_0x172a6f['cRWtc'],_0x496d8d),_0x172a6f['RqgCv'](_0x5da1c7,_0x11c66c,-0x12e*-0x12+0xc3*0xb+-0x7*0x42f,_0x172a6f[_0x237fc2(0x467)],_0x496d8d));_0x23a740[_0x237fc2(0x11f)+'ead']&&(_0x172a6f[_0x237fc2(0x49d)]!==_0x237fc2(0x192)?(_0x172a6f['ZudWZ'](_0x5da1c7,_0x11c66c,-0xf7*-0xb+-0x2*0x334+0x3ad*-0x1,_0x237fc2(0x2aa),0x1bbb+0x1747+-0x3302),_0x172a6f[_0x237fc2(0x527)](_0x5da1c7,_0x11c66c,-0x1c8+0x158c+0x2c4*-0x7,'f32',-0x2434*0x1+-0x24a4+0x48d9)):_0x47c3cf(_0x781f42,_0xc570c8,_0x34387b,_0x210e49['wPgUr']));if(_0x23a740['infAm'+_0x237fc2(0x419)])_0x5da1c7(_0x11c66c,-0x2dd*0x7+-0x22ba+-0xb*-0x503,_0x237fc2(0x55b),-0x5*-0x7ab+0x25*-0x47+-0x182d);_0x23a740['rapid'+_0x237fc2(0x333)]&&(_0x172a6f['ZudWZ'](_0x27a782,_0x11c66c,0x1107+-0xd2d+-0x34e,_0x237fc2(0x2aa),-0x1291+0x2*-0x411+0x1ab3+0.1),_0x5da1c7(_0x11c66c,-0x20f5+-0xf77*-0x2+0x29*0xf,_0x237fc2(0x2aa),-0x23f7+-0x24ad+0x1229*0x4+0.1));}}catch(_0xe7bcdb){}}else try{_0xfe089['setIt'+'em'](_0x237fc2(0x38d)+'a.kou'+'r.ui.'+'v1',_0x15d775[_0x237fc2(0x3e1)+'gify'](_0x36bfa1));}catch(_0x411054){}},0x1731+0x6b*0x11+-0x1d84),setInterval(()=>{var _0x3bd80c=_0x1c60a0;_0x3ca21b[_0x3bd80c(0x3b7)+_0x3bd80c(0x179)]=!!window[_0x3bd80c(0x27b)+_0x3bd80c(0x48d)+'nce'];try{var _0x9c5070=-0x1937+0x2087+-0x750;for(var _0x45afcb in _0x56f7e7){if(_0x56f7e7[_0x45afcb]&&_0x56f7e7[_0x45afcb][_0x3bd80c(0x447)+'ed'])_0x9c5070++;}_0x3ca21b[_0x3bd80c(0x530)+'Ok']=_0x9c5070;}catch(_0x204423){}},0x12d*-0x1+0x50d*0x1+-0x1*-0x8);var _0x55774e=new Set(),_0x9454bb={0x1:[],0x3:[]},_0x53bb88=![];function _0x4e8643(_0x3d1762){var _0x1834e8=_0x1c60a0;if(_0x172a6f['JFKpt']('jveHk',_0x1834e8(0x61d)))_0x55774e[_0x1834e8(0x434)](_0x3d1762['code']);else try{var _0x418b08=_0x50621f[_0x1834e8(0x5d1)+'ostfi'+'x']({'typeName':_0x21c078,'methodName':_0x2856d5,'params':_0x4489b9,'returnType':_0x5a207b},_0x67bde6);return _0x418b08[_0x1834e8(0x59f)+'ed']=_0x4422b6!==![],_0x23f007[_0x20c904]=_0x418b08,_0x11da5e['hooks'+_0x1834e8(0x315)]++,_0x418b08;}catch(_0x2891e2){return _0xae3690['warn'](_0x1834e8(0x60f)+_0x1834e8(0x57f)+_0x1834e8(0x138)+'ook\x20r'+'eg\x20fa'+_0x1834e8(0x4c4),_0xa216d6,_0x2891e2&&_0x2891e2['messa'+'ge']),null;}}function _0x205a56(_0x312dc4){var _0x8ae0b1=_0x1c60a0;if(_0x172a6f[_0x8ae0b1(0x14f)](_0x8ae0b1(0x3ca),_0x172a6f[_0x8ae0b1(0x442)])){var _0x29484d={'ZKtfX':function(_0x3b6921,_0x3a19c5){return _0x3b6921(_0x3a19c5);}};_0x5e544e[_0x8ae0b1(0x443)+_0x8ae0b1(0x607)+_0x8ae0b1(0x4bc)+'r'](_0x8ae0b1(0xd8),_0x5b62a6=>{var _0x262f4e=_0x8ae0b1;try{var _0x3e1597=_0x5b62a6&&(_0x5b62a6['messa'+'ge']||_0x5b62a6[_0x262f4e(0xd8)]&&_0x5b62a6[_0x262f4e(0xd8)][_0x262f4e(0x514)+'ge'])||_0x262f4e(0x3e9)+'wn';if(_0x5b62a6&&_0x5b62a6['filen'+'ame'])_0x3e1597+=_0x262f4e(0x557)+_0x29484d[_0x262f4e(0x465)](_0x15992d,_0x5b62a6[_0x262f4e(0x56a)+'ame'])[_0x262f4e(0x9c)]('/')[_0x262f4e(0x21e)]()+':'+(_0x5b62a6[_0x262f4e(0x1b8)+'o']||'?');_0x3890e5[_0x262f4e(0x5eb)+_0x262f4e(0xdd)]=_0xe1f651(_0x3e1597)[_0x262f4e(0x159)](0x192+-0x267e+0x24ec,0x2676+0x2ac*0x6+-0x35de);}catch(_0x302a54){}});}else _0x55774e['delet'+'e'](_0x312dc4['code']);}function _0x50fb9f(_0x523a6e){var _0x265fa4=_0x1c60a0,_0x4bc1fd={'KfHOK':function(_0x218bd6,_0x349111,_0x32a0f4){return _0x218bd6(_0x349111,_0x32a0f4);},'GGQGZ':_0x265fa4(0xe3),'PrDKv':_0x172a6f['Kvddj']};if(_0x172a6f['ERbEB']!=='wusek'){if(_0x523a6e[_0x265fa4(0x3cd)+_0x265fa4(0x540)])return;_0x55774e['add'](_0x172a6f[_0x265fa4(0x5e8)]('mouse',_0x172a6f['Bjdyf'](_0x523a6e[_0x265fa4(0xac)+'n'],0x1751+0x13*0x1cf+-0x39ad)));var _0x37a32c=_0x9454bb[_0x523a6e[_0x265fa4(0xac)+'n']+(0x1*-0xe87+-0x53d+0x13c5)];if(_0x37a32c){_0x37a32c['push'](performance[_0x265fa4(0x2c4)]());if(_0x37a32c['lengt'+'h']>-0xa99*0x2+-0x1*0x1feb+0x3545)_0x37a32c['shift']();}}else _0x1aac3e[_0x265fa4(0xe3)]=_0x3a79e8,_0x182c16(),_0x4bc1fd[_0x265fa4(0x186)](_0x6a588c,_0x4bc1fd['GGQGZ'],_0x4aaad4),_0x3a5bc5(_0x4bc1fd[_0x265fa4(0x182)],_0x2c9a2d);}function _0x2dd2d8(_0x25ad61){var _0x1f3c9a=_0x1c60a0;if(!_0x25ad61['__sak'+_0x1f3c9a(0x540)])_0x55774e['delet'+'e'](_0x172a6f['vvZBt']+(_0x25ad61[_0x1f3c9a(0xac)+'n']+(0x2204+-0xac5+-0x173e)));}function _0x50dad4(){_0x55774e['clear']();}function _0x5c01d1(){var _0x4ce5af=_0x1c60a0;if(_0x53bb88)return;_0x53bb88=!![],window[_0x4ce5af(0x443)+_0x4ce5af(0x607)+'stene'+'r'](_0x4ce5af(0xaa)+'wn',_0x4e8643,!![]),window[_0x4ce5af(0x443)+_0x4ce5af(0x607)+'stene'+'r'](_0x172a6f[_0x4ce5af(0x427)],_0x205a56,!![]),window[_0x4ce5af(0x443)+'entLi'+'stene'+'r'](_0x4ce5af(0x1ac)+_0x4ce5af(0x590),_0x50fb9f,!![]),window[_0x4ce5af(0x443)+'entLi'+_0x4ce5af(0x4bc)+'r'](_0x4ce5af(0x1ac)+'up',_0x2dd2d8,!![]),window[_0x4ce5af(0x443)+'entLi'+_0x4ce5af(0x4bc)+'r'](_0x172a6f[_0x4ce5af(0x5b5)],_0x50dad4);}function _0x3d0d61(_0x3046b6){var _0x1d1b60=_0x1c60a0,_0x1b9766=_0x9454bb[_0x3046b6]||[],_0x18d3a4=performance[_0x1d1b60(0x2c4)]();while(_0x1b9766[_0x1d1b60(0x20c)+'h']&&_0x172a6f[_0x1d1b60(0x4ef)](_0x18d3a4,_0x1b9766[-0x1bb1+-0x1946*0x1+0x1*0x34f7])>-0x1d50+-0x1e14+0x3f4c)_0x1b9766[_0x1d1b60(0x173)]();return _0x1b9766[_0x1d1b60(0x20c)+'h'];}function _0x443e59(_0x2b8d8f){var _0x5cc1e3=_0x1c60a0;if(document['body']&&(_0x172a6f['ERJeo'](document['ready'+_0x5cc1e3(0x4f1)],_0x172a6f[_0x5cc1e3(0x5d4)])||document[_0x5cc1e3(0x2db)+_0x5cc1e3(0x4f1)]===_0x5cc1e3(0x458)+'ete'))_0x2b8d8f();else document['addEv'+_0x5cc1e3(0x607)+'stene'+'r'](_0x5cc1e3(0xab)+_0x5cc1e3(0x4cc)+_0x5cc1e3(0x170)+'d',_0x2b8d8f,{'once':!![]});}_0x172a6f['fyXha'](_0x443e59,()=>{var _0x590272=_0x1c60a0,_0xb9b369={'JZBQg':function(_0x3c8335,_0x42a6b5,_0x3b1a94,_0x35b345,_0x1b3cef){return _0x172a6f['RqgCv'](_0x3c8335,_0x42a6b5,_0x3b1a94,_0x35b345,_0x1b3cef);},'HyfsJ':_0x590272(0x2aa),'TfLsE':function(_0x13a351,_0x465c69){var _0x4fecfa=_0x590272;return _0x172a6f[_0x4fecfa(0x257)](_0x13a351,_0x465c69);},'KsHak':_0x172a6f['PnHwD'],'KmVxz':_0x172a6f['lgLVm'],'DVZTI':_0x172a6f[_0x590272(0x574)],'Yzgmc':_0x172a6f['WbIUQ'],'kWWHD':function(_0x23c806,_0x197b66){var _0x520ed0=_0x590272;return _0x172a6f[_0x520ed0(0x5c8)](_0x23c806,_0x197b66);},'JPlDy':function(_0x4aa6ac,_0x4ff4a9){return _0x4aa6ac+_0x4ff4a9;},'LqBvx':_0x590272(0xd1)+_0x590272(0x277)+_0x590272(0x500)+'7)','ALGVz':'2|3|0'+_0x590272(0x554),'rJfaS':function(_0x167eaf,_0x10b2f8){return _0x167eaf||_0x10b2f8;},'XsKpW':_0x590272(0x209),'eJdJW':_0x590272(0x2bf)+'9d','AzFvp':'\x20FPS','gMJCL':function(_0x413b9c,_0x322885,_0x332d58){return _0x413b9c(_0x322885,_0x332d58);},'HAidD':function(_0x80b167,_0x241934){return _0x172a6f['DFxtY'](_0x80b167,_0x241934);},'oaJaO':function(_0x3fd97f,_0x28e8d7){var _0x337065=_0x590272;return _0x172a6f[_0x337065(0x507)](_0x3fd97f,_0x28e8d7);},'PnuQT':function(_0xa0c41f){var _0x13b020=_0x590272;return _0x172a6f[_0x13b020(0x25e)](_0xa0c41f);},'xYhqB':function(_0x1bada9,_0x23d20b){return _0x1bada9(_0x23d20b);},'vjgBO':function(_0x5e12d1,_0x590cff){return _0x5e12d1(_0x590cff);},'NRBUA':_0x172a6f[_0x590272(0x387)],'gGcQu':_0x590272(0xac)+'n','joztH':_0x172a6f[_0x590272(0x468)],'towcV':function(_0x5887eb,_0x3df675){return _0x5887eb*_0x3df675;},'PsVaj':function(_0x231b9c,_0x276128){return _0x231b9c-_0x276128;},'IhppA':function(_0x19e993){return _0x19e993();},'CQvMj':function(_0xf2dd0,_0x37564e){return _0xf2dd0!==_0x37564e;},'qqjdd':_0x590272(0x4c0),'SeonN':_0x172a6f['MQdMg'],'xuGui':'sk-sl'+_0x590272(0xb5),'XwFIa':function(_0x2e9d81,_0x2ffb52){return _0x2e9d81(_0x2ffb52);},'lKSda':function(_0x214759,_0x5cdf8f){return _0x172a6f['xhTUT'](_0x214759,_0x5cdf8f);},'WyZBg':_0x172a6f['Dgtdq'],'IHzru':_0x172a6f[_0x590272(0xb4)],'djgXV':_0x590272(0x2da)+'n','Caupg':_0x172a6f[_0x590272(0x600)],'oOyyt':_0x172a6f['qPkJF'],'EnEJV':function(_0x176233,_0x2c5c32){return _0x176233===_0x2c5c32;},'sQkDM':function(_0x44a104,_0x313fb5){return _0x44a104===_0x313fb5;},'znpzl':'NUQbB','jVubB':_0x590272(0x51d),'esmsW':function(_0x525b9e,_0x5e3511){return _0x525b9e(_0x5e3511);},'tcsWp':_0x590272(0x5f3),'rwqfi':'1|0|6'+_0x590272(0x54f)+'5|7|4'+_0x590272(0x3a0)+'|12|8'+_0x590272(0x140),'KsOlN':_0x172a6f[_0x590272(0x1c1)],'tfMmI':_0x172a6f[_0x590272(0x36b)],'TiZQC':function(_0x2cee51,_0x16da7f){var _0x48e597=_0x590272;return _0x172a6f[_0x48e597(0x503)](_0x2cee51,_0x16da7f);},'iJKBi':_0x172a6f[_0x590272(0xb0)],'RUXRu':function(_0x2ea9c3){var _0x3e6564=_0x590272;return _0x172a6f[_0x3e6564(0x25e)](_0x2ea9c3);},'rTISi':function(_0x14a6f0){return _0x14a6f0();},'ATTQQ':_0x172a6f['idZpV'],'lbDcT':_0x172a6f[_0x590272(0x2e4)],'qPXlk':function(_0x24164b,_0x1efb86){var _0xe33798=_0x590272;return _0x172a6f[_0xe33798(0x2e6)](_0x24164b,_0x1efb86);},'sTphV':'jFzwH','yIoCs':function(_0x1b1f15,_0x1e6faf){return _0x172a6f['btEBH'](_0x1b1f15,_0x1e6faf);},'DTJFT':function(_0x386fd4,_0x9421bd){return _0x386fd4(_0x9421bd);},'Kscgh':function(_0x327290,_0x3b3063){return _0x327290===_0x3b3063;},'Reebf':_0x590272(0x48b),'TgHaV':_0x590272(0x5d9)+'e','HFcgU':function(_0x332357,_0x54429a){var _0x51f852=_0x590272;return _0x172a6f[_0x51f852(0x310)](_0x332357,_0x54429a);},'FKDcg':function(_0x22971f,_0x410846){return _0x22971f(_0x410846);},'ENMOP':function(_0x24bcd5,_0x18b175){return _0x24bcd5<_0x18b175;},'VcCHX':_0x172a6f['wEIjU'],'nmQMZ':function(_0x3c49c8,_0x587dce){return _0x3c49c8===_0x587dce;},'XxEYF':_0x590272(0x52b),'LnAbe':function(_0x300a2c,_0x5281cf){var _0x1c4083=_0x590272;return _0x172a6f[_0x1c4083(0xc0)](_0x300a2c,_0x5281cf);},'imtxm':function(_0x1da147,_0x2454a9){var _0x3d97c5=_0x590272;return _0x172a6f[_0x3d97c5(0x2c7)](_0x1da147,_0x2454a9);},'RyaTu':function(_0x4a9926,_0x520f80){return _0x4a9926+_0x520f80;},'hZsxA':_0x590272(0x1af)+_0x590272(0x10f)+'\x20','bWpTU':function(_0xd3517e,_0x4ce587){return _0xd3517e+_0x4ce587;},'lmlxk':_0x590272(0x4d3)+_0x590272(0x31e),'rWEfl':_0x172a6f[_0x590272(0x409)],'CGpjk':_0x172a6f['QHGnT'],'gfpbE':_0x172a6f[_0x590272(0x298)]};if(_0x23a740['adblo'+'ck']){if(_0x172a6f[_0x590272(0x5f7)]!==_0x590272(0x472))setInterval(()=>{var _0x1125ca=_0x590272,_0x12bd04={'agKIv':function(_0x5cac0e,_0x41c99a){return _0x5cac0e/_0x41c99a;},'daoom':function(_0x2c92e5,_0x2bb3c4){return _0x2c92e5-_0x2bb3c4;}};if(_0x172a6f[_0x1125ca(0x14f)](_0x172a6f[_0x1125ca(0x314)],'HXliK'))try{for(var _0x556a59 of[_0x172a6f[_0x1125ca(0x421)],_0x1125ca(0x3c7)+_0x1125ca(0xd2)+_0x1125ca(0x5ab)+_0x1125ca(0x31d)+'t','kour-'+_0x1125ca(0xa9)+_0x1125ca(0x470)+_0x1125ca(0xe1)+'nt','fulls'+'creen'+_0x1125ca(0x169)+'s']){if(_0x172a6f[_0x1125ca(0x216)](_0x172a6f['VotvG'],_0x1125ca(0x3ce))){var _0x27d906=document[_0x1125ca(0x1c0)+_0x1125ca(0x294)+'ById'](_0x556a59);if(_0x27d906&&_0x172a6f[_0x1125ca(0x14f)](_0x556a59,_0x1125ca(0x96)+_0x1125ca(0x54d)+_0x1125ca(0x169)+'s')){var _0x197bb6=_0x27d906[_0x1125ca(0x1a3)+'ren'];for(var _0x177e91=-0x1c8d+0x1*-0x623+0x22b0;_0x172a6f[_0x1125ca(0x36c)](_0x177e91,_0x197bb6['lengt'+'h']);_0x177e91++){if(_0x172a6f['MYvGj']===_0x172a6f[_0x1125ca(0x13a)])_0xb9b369[_0x1125ca(0x189)](_0x342445,_0x14349b,-0x5c2+0x3f9+-0x251*-0x1,_0x1125ca(0x2aa),-0x19b+0xd*-0x251+0x74*0x46),_0x501737(_0xdcdf5b,0x21ee+0x10b8+-0xda*0x3b,_0xb9b369[_0x1125ca(0x382)],0x251c+0x13dd+-0x38f8);else{if(_0x197bb6[_0x177e91]['id']&&_0x197bb6[_0x177e91]['id'][_0x1125ca(0x429)+'Of']('kour-'+_0x1125ca(0x475))===0x160b+0x1619+0x71*-0x64)_0x197bb6[_0x177e91][_0x1125ca(0x4f9)][_0x1125ca(0x357)+'ay']='none';}}}else{if(_0x27d906)_0x27d906[_0x1125ca(0x4f9)]['displ'+'ay']=_0x172a6f[_0x1125ca(0x33f)];}}else _0x299ea4[_0x1125ca(0x331)+_0x1125ca(0x33c)+'t']=_0x53ce83(_0x33df64['value']),_0x1640a6['style'][_0x1125ca(0x5f6)+_0x1125ca(0x319)+'y'](_0x1125ca(0x5cc),_0x12bd04['agKIv'](_0x3e5e14['value']-_0x328abd,_0x12bd04[_0x1125ca(0x1f4)](_0x3faaa1,_0x21f20f))*(-0x5e5+0x1*0x1d47+-0x16fe)+'%');}}catch(_0x15a79e){}else new _0x50774a(_0x3067f7)[_0x1125ca(0x5ce)+_0x1125ca(0xb6)](_0x10a347,_0x4567b1,_0x42458a);},-0x1*0x1a7b+-0x2*-0x10ad+-0xf1*-0x1);else{var _0xfd01ea=_0x32059f['creat'+'eElem'+_0x590272(0x2b3)]('optio'+'n');_0xfd01ea[_0x590272(0x417)]=_0x3ad615,_0xfd01ea['textC'+'onten'+'t']=_0xe184cf,_0x6120c2['appen'+'dChil'+'d'](_0xfd01ea);}}var _0x2b353a=document['creat'+_0x590272(0xcd)+'ent'](_0x590272(0x1a1)+'s');_0x2b353a[_0x590272(0x4f9)][_0x590272(0x39f)+'xt']=_0x590272(0x3b1)+'ion:f'+'ixed;'+'inset'+':0;wi'+'dth:1'+'00vw;'+_0x590272(0x38a)+_0x590272(0x2c8)+'vh;z-'+'index'+_0x590272(0x199)+_0x590272(0x207)+_0x590272(0x3ab)+_0x590272(0x347)+_0x590272(0x580)+'s:non'+'e';var _0x16656b=_0x2b353a[_0x590272(0x91)+_0x590272(0x505)]('2d');function _0x3ef5f9(){var _0x277917=_0x590272,_0x4ab7c2={'FvCiD':function(_0x5122b6,_0x23c235,_0x34e557,_0x25fa18,_0x536eb8){return _0x5122b6(_0x23c235,_0x34e557,_0x25fa18,_0x536eb8);}};if('rqCdL'===_0x172a6f['AfTWY'])try{var _0x2a74cd=document['fulls'+'creen'+_0x277917(0x2f2)+'nt'],_0x362314=_0x2a74cd&&_0x172a6f[_0x277917(0x2d4)](_0x2a74cd['tagNa'+'me'],_0x277917(0x4bb)+'S')?_0x2a74cd:document[_0x277917(0x295)]||document['docum'+_0x277917(0x145)+_0x277917(0x294)];if(_0x172a6f[_0x277917(0x2e6)](_0x2b353a[_0x277917(0x31d)+'tNode'],_0x362314))_0x362314['appen'+'dChil'+'d'](_0x2b353a);}catch(_0x38b3ec){try{_0x172a6f['ERJeo'](_0x277917(0x2e7),_0x172a6f['uzvPh'])?document[_0x277917(0x295)]['appen'+'dChil'+'d'](_0x2b353a):_0x4ab7c2[_0x277917(0xe6)](_0x53eb4a,_0xcba94e,_0x524f60,_0x305af5,_0x277917(0x330)+_0x277917(0x1c4));}catch(_0x42161d){}}else _0x143221['ksSca'+'le']=_0x39ee44,_0x3c47ec();}var _0x4e3e1e={'w':0x0,'h':0x0,'dpr':0x0};function _0x12bf4a(){var _0x3e6deb=_0x590272,_0x3fdd66=window['devic'+_0x3e6deb(0x198)+_0x3e6deb(0x46c)+'o']||-0x3c+-0x1b64+0x1ba1,_0x5c47da=window['inner'+'Width'],_0xa2f0a5=window[_0x3e6deb(0x3b8)+'Heigh'+'t'];if(_0x172a6f[_0x3e6deb(0x5e1)](_0x5c47da,_0x4e3e1e['w'])&&_0xa2f0a5===_0x4e3e1e['h']&&_0x3fdd66===_0x4e3e1e[_0x3e6deb(0x3a2)])return;_0x4e3e1e['w']=_0x5c47da,_0x4e3e1e['h']=_0xa2f0a5,_0x4e3e1e['dpr']=_0x3fdd66,_0x2b353a['width']=Math['round'](_0x172a6f[_0x3e6deb(0x14b)](_0x5c47da,_0x3fdd66)),_0x2b353a[_0x3e6deb(0x38a)+'t']=Math['round'](_0x172a6f[_0x3e6deb(0x14b)](_0xa2f0a5,_0x3fdd66)),_0x16656b[_0x3e6deb(0x1e2)+_0x3e6deb(0x4af)+'rm'](_0x3fdd66,0x13a6+0x1*0x1e68+-0x320e,0xacc*-0x1+-0x1*-0x2615+0x37*-0x7f,_0x3fdd66,0x2035+0xea1+0x1*-0x2ed6,0x233d+-0x1*-0x161f+0x1*-0x395c);}var _0x79155a=0x75*-0x19+-0x8ee*0x4+0x2f25,_0x3275fb=performance[_0x590272(0x2c4)](),_0x1c37e1=-0x204d+-0x29c*-0x1+-0x2b3*-0xb;function _0x56b514(_0xe72e80){var _0x4109ae=_0x590272,_0x4b2876=Number(_0x23a740['ksSca'+'le'])||-0x1*0x570+0x19fe*0x1+-0x148d,_0x3f9625=(0xdd3+-0x1*0x15ff+0x84e)*_0x4b2876,_0x3a2a5c=_0x172a6f[_0x4109ae(0x14b)](0x1*-0x84e+-0x96d+0x11bf,_0x4b2876),_0x99bd5a=_0x172a6f[_0x4109ae(0x2c2)](_0x3f9625*(-0x14e7+0x666+0x3a1*0x4),_0x3a2a5c*(-0x1*0x1fa5+0x1*-0xc65+-0x1*-0x2c0c)),_0x27e001=_0x3f9625*(0x3*-0x833+0x22e3+-0xa47)+_0x3a2a5c*(-0x2*0xb1f+-0x2660+0x3ca0),_0x194e48=_0x23a740['ksPos'],_0x1c9bc3=_0x194e48==='br'?_0x172a6f['TnUzT'](_0xe72e80[_0x4109ae(0x4c5)]-(0xd70+-0x3*-0x1e3+-0x1309*0x1),_0x99bd5a):_0xe72e80[_0x4109ae(0x209)]+(0x408+-0x7e1+0x3e9),_0x2f001e=_0x194e48==='ml'?_0x172a6f['TnUzT'](_0x172a6f['btEBH'](_0xe72e80[_0x4109ae(0x585)],_0xe72e80[_0x4109ae(0x38a)+'t']/(0x3b6+0x1c03*0x1+-0x1fb7*0x1)),_0x172a6f['Yvfmq'](_0x27e001,-0x231e+0x17*0x53+0x1bab*0x1)):_0x172a6f[_0x4109ae(0x237)](_0xe72e80[_0x4109ae(0x56e)+'m']-_0x27e001,_0x194e48==='bl'?0x1d49+0x162+-0xa19*0x3:0x7*0x224+0x29*0x8b+-0x24a9),_0x30e1f6=(_0x1eae15,_0x4608b7,_0x48f51a,_0x48f6ab,_0x1263dc,_0x469c9e,_0x5056fc)=>{var _0x2b38fc=_0x4109ae,_0x285f35=(_0x2b38fc(0x2c0)+'|14|1'+'2|5|1'+_0x2b38fc(0x5f2)+'5|9|1'+_0x2b38fc(0x60a)+_0x2b38fc(0x374)+'10|13')['split']('|'),_0x3d8b61=-0x17c+0x7e4+0x4*-0x19a;while(!![]){switch(_0x285f35[_0x3d8b61++]){case'0':var _0x6d569e=_0x55774e['has'](_0x4608b7);continue;case'1':_0x16656b['fillS'+_0x2b38fc(0x5a2)]=_0x6d569e?_0x2b38fc(0x26f):'rgba('+_0x2b38fc(0x1b1)+'35,24'+_0x2b38fc(0x1e8)+')';continue;case'2':_0x16656b['font']=_0xb9b369[_0x2b38fc(0x4dd)](_0xb9b369[_0x2b38fc(0xfe)]+Math[_0x2b38fc(0x12f)]((0x1d19+0x1c99*0x1+0x2f*-0x13a)*_0x4b2876),'px\x20ui'+'-sans'+'-seri'+_0x2b38fc(0x418)+_0x2b38fc(0x54c)+_0x2b38fc(0x41e)+_0x2b38fc(0x493)+'if');continue;case'3':_0x16656b[_0x2b38fc(0x1ad)+'Path']();continue;case'4':_0x16656b['strok'+_0x2b38fc(0x23f)+'e']=_0x6d569e?_0x2bbed5:_0xb9b369['KmVxz'];continue;case'5':_0x16656b[_0x2b38fc(0x2bd)]();continue;case'6':_0x16656b['textA'+_0x2b38fc(0x474)]=_0xb9b369[_0x2b38fc(0x253)];continue;case'7':_0x16656b['save']();continue;case'8':_0x16656b['fillT'+'ext'](_0x1eae15,_0x48f51a+_0x1263dc/(0xb9+0x10c3+0x117a*-0x1),_0x48f6ab+_0x469c9e/(-0x130*-0x1+-0x1266*0x1+-0x2*-0x89c)-(_0x5056fc?(0x1fd3+-0x1d0f+-0x13*0x25)*_0x4b2876:-0x21c8+0x7*-0x527+0x45d9));continue;case'9':_0x6d569e&&(_0x16656b['shado'+_0x2b38fc(0x15b)+'r']=_0x265db2,_0x16656b[_0x2b38fc(0x2ac)+_0x2b38fc(0x2ff)]=-0x32d*0x2+-0x450+-0x157*-0x8,_0x16656b['fill'](),_0x16656b['shado'+'wBlur']=0x7*-0x3f5+0x102*0x7+0x14a5);continue;case'10':_0x5056fc&&(_0x16656b['font']=_0xb9b369['TfLsE'](_0xb9b369['Yzgmc']+Math[_0x2b38fc(0x12f)]((0x112a+0x1fd7+-0x30f8)*_0x4b2876),_0x2b38fc(0x45d)+'-sans'+_0x2b38fc(0x2fa)+'f,sys'+'tem-u'+_0x2b38fc(0x41e)+'s-ser'+'if'),_0x16656b[_0x2b38fc(0x617)+'tyle']=_0x6d569e?_0x2b38fc(0x26f):'rgba('+_0x2b38fc(0x1b1)+_0x2b38fc(0xe7)+'0,0.5'+'5)',_0x16656b[_0x2b38fc(0x187)+'ext'](_0x5056fc,_0xb9b369[_0x2b38fc(0x32d)](_0x48f51a,_0x1263dc/(-0x1cd7+-0x236e+0x4047)),_0xb9b369[_0x2b38fc(0x5ca)](_0x48f6ab+_0x469c9e/(0x1397+-0x2*0x78c+-0x17f*0x3),(-0xda*-0x21+-0x1ba7*-0x1+-0x37b9)*_0x4b2876)));continue;case'11':_0x16656b[_0x2b38fc(0x3b3)+_0x2b38fc(0x5bf)]=-0x1986+0x1a2c*-0x1+-0x5*-0xa57;continue;case'12':_0x16656b[_0x2b38fc(0x617)+'tyle']=_0x6d569e?_0x2b38fc(0xd1)+_0x2b38fc(0x508)+'07,15'+_0x2b38fc(0x494)+'5)':_0xb9b369[_0x2b38fc(0x58e)];continue;case'13':_0x16656b[_0x2b38fc(0x3fc)+'re']();continue;case'14':if(_0x16656b['round'+_0x2b38fc(0x620)])_0x16656b[_0x2b38fc(0x12f)+_0x2b38fc(0x620)](_0x48f51a,_0x48f6ab,_0x1263dc,_0x469c9e,(0x1e33+-0xd2d+0x13*-0xe5)*_0x4b2876);else _0x16656b['rect'](_0x48f51a,_0x48f6ab,_0x1263dc,_0x469c9e);continue;case'15':_0x16656b[_0x2b38fc(0x5cb)+'e']();continue;case'16':_0x16656b[_0x2b38fc(0x1d5)+_0x2b38fc(0x495)+'ne']=_0x2b38fc(0x3a8)+'e';continue;}break;}};_0x172a6f[_0x4109ae(0x45b)](_0x30e1f6,'W',_0x172a6f[_0x4109ae(0x107)],_0x1c9bc3+_0x3f9625+_0x3a2a5c,_0x2f001e,_0x3f9625,_0x3f9625),_0x30e1f6('A',_0x172a6f['PQxLn'],_0x1c9bc3,_0x172a6f[_0x4109ae(0x571)](_0x2f001e,_0x3f9625)+_0x3a2a5c,_0x3f9625,_0x3f9625),_0x172a6f[_0x4109ae(0x19a)](_0x30e1f6,'S','KeyS',_0x1c9bc3+_0x3f9625+_0x3a2a5c,_0x2f001e+_0x3f9625+_0x3a2a5c,_0x3f9625,_0x3f9625),_0x172a6f[_0x4109ae(0x27a)](_0x30e1f6,'D',_0x172a6f[_0x4109ae(0x303)],_0x172a6f['tzNoR'](_0x1c9bc3,_0x172a6f[_0x4109ae(0x3de)](_0x3f9625,_0x3a2a5c)*(-0x13+0x1b*0x153+-0x23ac)),_0x172a6f['xuZKK'](_0x2f001e+_0x3f9625,_0x3a2a5c),_0x3f9625,_0x3f9625);var _0x3bb8af=(_0x99bd5a-_0x3a2a5c)/(-0xa*0x47+0xd*0x182+-0x10d2),_0x1248b0=_0x172a6f[_0x4109ae(0x3de)](_0x2f001e,_0x172a6f['osIPl'](_0x3f9625,_0x3a2a5c)*(-0x1bf1+-0xb*-0x2db+-0x376));_0x30e1f6('LMB','mouse'+'1',_0x1c9bc3,_0x1248b0,_0x3bb8af,_0x3f9625,_0x23a740[_0x4109ae(0x10d)]?_0x3d0d61(0x1d23*-0x1+0x65*-0x5+0x1f1d)+'\x20CPS':''),_0x30e1f6(_0x172a6f['TzwRX'],_0x172a6f[_0x4109ae(0x16b)],_0x1c9bc3+_0x3bb8af+_0x3a2a5c,_0x1248b0,_0x3bb8af,_0x3f9625,_0x23a740['ksCps']?_0x172a6f[_0x4109ae(0x2cc)](_0x3d0d61(0xf3b+0x749*0x1+-0x1681),_0x172a6f['ZmkWh']):''),_0x30e1f6('',_0x4109ae(0x345),_0x1c9bc3,_0x1248b0+_0x3f9625+_0x3a2a5c,_0x99bd5a,_0x3f9625*(-0x3*-0xa57+0x23*0x63+-0x2c8e+0.45));}function _0x53f8e2(_0x3f2f0e){var _0x39d823=_0x590272;if(_0x172a6f[_0x39d823(0x50a)]('auCXt',_0x172a6f[_0x39d823(0x299)])){var _0x555b5d=(_0x39d823(0x4a2)+'17|9|'+_0x39d823(0x22d)+'4|10|'+'0|1|1'+_0x39d823(0x139)+'4|19|'+_0x39d823(0x38b)+_0x39d823(0x33a)+'|16|2'+_0x39d823(0x4b0)+_0x39d823(0x4e9)+'8')[_0x39d823(0x9c)]('|'),_0x986dc9=0x264c+0x1a6b+-0x40b7;while(!![]){switch(_0x555b5d[_0x986dc9++]){case'0':_0x16656b[_0x39d823(0x2ac)+'wBlur']=-0x1deb+-0x1*-0xae1+0x4*0x4c4;continue;case'1':var _0x31579b=(0x1f58+-0x548*-0x4+-0x3472)*_0x3ae925,_0x169362=_0x172a6f[_0x39d823(0x14b)](-0x1b18+0x951*-0x1+0x2471,_0x3ae925);continue;case'2':_0x16656b[_0x39d823(0x45e)+'o'](_0x1455f4-_0x31579b-_0x169362,_0x27058d);continue;case'3':_0x16656b['lineT'+'o'](_0x1455f4,_0x27058d-_0x31579b);continue;case'4':_0x16656b['lineW'+_0x39d823(0x5bf)]=Math['max'](-0xb12+0x10dd*-0x1+0x1bf0+0.5,_0x172a6f['HJnrl'](-0x1*-0x187f+-0x25a+0x761*-0x3,_0x3ae925));continue;case'5':_0x16656b['arc'](_0x1455f4,_0x27058d,_0x172a6f[_0x39d823(0x14b)](-0x554*0x6+-0x200*-0x5+0x2d*0x7d+0.6000000000000001,_0x3ae925),0x16b2*0x1+-0x43*-0x13+-0x1bab,Math['PI']*(-0xbda+0x3*-0xa7f+-0x4d1*-0x9));continue;case'6':_0x16656b['strok'+_0x39d823(0x23f)+'e']=_0x5ad83a;continue;case'7':var _0x1455f4=_0x172a6f['Yvfmq'](_0x3f2f0e[_0x39d823(0x618)],0x107*0x20+0x13bc+0x2*-0x1a4d),_0x27058d=_0x172a6f[_0x39d823(0x507)](_0x3f2f0e[_0x39d823(0x38a)+'t'],-0xe54+-0x19eb+0x2841);continue;case'8':_0x16656b['resto'+'re']();continue;case'9':_0x16656b['save']();continue;case'10':_0x16656b['shado'+'wColo'+'r']=_0x5ad83a;continue;case'11':_0x16656b[_0x39d823(0x617)+'tyle']=_0x5ad83a;continue;case'12':_0x16656b['fill']();continue;case'13':_0x16656b['begin'+_0x39d823(0x367)]();continue;case'14':_0x16656b['lineT'+'o'](_0x172a6f['DFxtY'](_0x1455f4,_0x31579b),_0x27058d);continue;case'15':_0x16656b[_0x39d823(0x45e)+'o'](_0x1455f4,_0x172a6f[_0x39d823(0x237)](_0x27058d,_0x31579b)-_0x169362);continue;case'16':_0x16656b['lineT'+'o'](_0x1455f4,_0x172a6f[_0x39d823(0x2c2)](_0x27058d+_0x31579b,_0x169362));continue;case'17':var _0x5ad83a=/^#[0-9a-f]{6}$/i[_0x39d823(0x2b8)](_0x23a740[_0x39d823(0x3c0)+'or'])?_0x23a740[_0x39d823(0x3c0)+'or']:_0x39d823(0x2bf)+'9d';continue;case'18':_0x16656b[_0x39d823(0x1ad)+'Path']();continue;case'19':_0x16656b[_0x39d823(0x45e)+'o'](_0x172a6f['VqOry'](_0x1455f4,_0x31579b),_0x27058d);continue;case'20':_0x16656b['lineT'+'o'](_0x172a6f[_0x39d823(0x4e0)](_0x172a6f[_0x39d823(0x24b)](_0x1455f4,_0x31579b),_0x169362),_0x27058d);continue;case'21':var _0x3ae925=Number(_0x23a740[_0x39d823(0x29e)+'e'])||0x1*-0xe20+-0x1a96+0x7*0x5d1;continue;case'22':_0x16656b[_0x39d823(0x5cb)+'e']();continue;case'23':_0x16656b[_0x39d823(0x45e)+'o'](_0x1455f4,_0x172a6f['OVfos'](_0x27058d,_0x31579b));continue;}break;}}else{var _0x39b330=_0xb9b369[_0x39d823(0x4f7)]['split']('|'),_0x52bf83=-0x5ed*-0x1+-0x132a+0xd3d;while(!![]){switch(_0x39b330[_0x52bf83++]){case'0':_0x4ead87[_0x270c80]=_0x299d94;continue;case'1':_0x8aebb0[_0x39d823(0x530)+_0x39d823(0x315)]++;continue;case'2':var _0x299d94=_0x15648b['hookP'+_0x39d823(0x115)+'x']({'typeName':_0x3650c8,'methodName':_0x2ea21a,'params':_0x5d9380,'returnType':_0x519e37},_0xe586b0);continue;case'3':_0x299d94['enabl'+'ed']=_0x30c1f0!==![];continue;case'4':return _0x299d94;}break;}}}function _0x22af75(_0x4beda2){var _0x2680ef=_0x590272;_0x16656b[_0x2680ef(0xf9)](),_0x16656b['font']='600\x201'+_0x2680ef(0x217)+'i-mon'+_0x2680ef(0x36d)+_0x2680ef(0x558)+_0x2680ef(0x36d)+'e',_0x16656b[_0x2680ef(0x135)+_0x2680ef(0x474)]=_0xb9b369[_0x2680ef(0x10a)],_0x16656b[_0x2680ef(0x1d5)+_0x2680ef(0x495)+'ne']='top';var _0x555fe7=-0x1b40+0x5cf*-0x1+-0x1*-0x213b,_0xe4dc28=0x1a9*0x7+-0x9a6+-0x1ed,_0x48be77=(_0x3764c4,_0x36897b)=>{var _0x4538c4=_0x2680ef;_0x16656b[_0x4538c4(0x617)+'tyle']=_0xb9b369['rJfaS'](_0x36897b,_0x4538c4(0xd1)+'255,2'+_0x4538c4(0xe7)+_0x4538c4(0x3f8)+'5)'),_0x16656b['fillT'+_0x4538c4(0x1c6)](_0x3764c4,_0xe4dc28,_0x555fe7),_0x555fe7+=0x12b5+-0x6f+-0x25*0x7e;};_0x48be77(_0x2680ef(0x2de)+'A\x20KOU'+'R\x20v1.'+'1',_0xb9b369[_0x2680ef(0x4b3)]);if(_0x23a740['fps'])_0x48be77(_0x1c37e1+_0xb9b369[_0x2680ef(0x5ed)]);if(!_0x3ca21b['gameL'+_0x2680ef(0x179)])_0xb9b369[_0x2680ef(0x3e3)](_0x48be77,'waiti'+'ng\x20fo'+'r\x20gam'+'e…',_0x2680ef(0xd1)+'255,1'+_0x2680ef(0x3c9)+_0x2680ef(0x37a)+')');_0x16656b[_0x2680ef(0x3fc)+'re']();}function _0x123c30(){var _0x35a039=_0x590272;requestAnimationFrame(_0x123c30),_0x79155a++;var _0x3aac13=performance[_0x35a039(0x2c4)]();_0xb9b369[_0x35a039(0x5c6)](_0x3aac13,_0x3275fb)>=0x1*0x1e29+-0x65*0xa+0x1843*-0x1&&(_0x35a039(0x171)!==_0x35a039(0x171)?(_0x587975['cross'+_0x35a039(0x112)]=_0x3125f8,_0x3a6b2c()):(_0x1c37e1=Math['round'](_0xb9b369[_0x35a039(0x37b)](_0x79155a*(-0xd76+-0xcb*0x3+-0x3f3*-0x5),_0x3aac13-_0x3275fb)),_0x79155a=-0x55*-0x7+-0x1e93+-0x71*-0x40,_0x3275fb=_0x3aac13));_0xb9b369[_0x35a039(0x334)](_0x12bf4a),_0x3ef5f9(),_0x16656b[_0x35a039(0x50f)+_0x35a039(0x620)](-0x268f+0x1*0x7c7+0x4*0x7b2,0x602+0xb0c+-0x2*0x887,_0x4e3e1e['w'],_0x4e3e1e['h']);var _0x433aa6={'left':0x0,'top':0x0,'right':_0x4e3e1e['w'],'bottom':_0x4e3e1e['h'],'width':_0x4e3e1e['w'],'height':_0x4e3e1e['h']};if(_0x23a740[_0x35a039(0x548)+_0x35a039(0x112)])_0xb9b369['xYhqB'](_0x53f8e2,_0x433aa6);if(_0x23a740[_0x35a039(0x58a)+'rokes'])_0xb9b369[_0x35a039(0x428)](_0x56b514,_0x433aa6);_0x22af75(_0x433aa6);}var _0x34bc2a=document['creat'+'eElem'+'ent'](_0x172a6f[_0x590272(0x11b)]);_0x34bc2a['id']=_0x590272(0x38d)+_0x590272(0x341),_0x34bc2a[_0x590272(0x4f9)]['cssTe'+'xt']=_0x590272(0x3b1)+_0x590272(0x26d)+'ixed;'+'inset'+_0x590272(0x57c)+_0x590272(0x429)+_0x590272(0x199)+_0x590272(0x207)+'7;poi'+'nter-'+_0x590272(0x580)+_0x590272(0x352)+'e;';var _0x5b20c2=_0x34bc2a['attac'+_0x590272(0x3e4)+'ow']({'mode':_0x590272(0x90)});(document['body']||document[_0x590272(0x3a9)+_0x590272(0x145)+_0x590272(0x294)])[_0x590272(0x4ac)+_0x590272(0x57e)+'d'](_0x34bc2a);var _0x57447f=![],_0x4f1d8d={};try{_0x4f1d8d=JSON[_0x590272(0x513)](localStorage[_0x590272(0x60b)+'em'](_0x590272(0x38d)+_0x590272(0x3cf)+'r.ui.'+'v1')||'{}');}catch(_0xcb786c){}function _0x4cdd76(){var _0x5744a7=_0x590272;try{localStorage[_0x5744a7(0x224)+'em'](_0x5744a7(0x38d)+_0x5744a7(0x3cf)+'r.ui.'+'v1',JSON[_0x5744a7(0x3e1)+'gify'](_0x4f1d8d));}catch(_0x240765){}}function _0x5a2df6(_0x2e0e6c,_0x596ecf){var _0x29ae44=_0x590272,_0x1c8418={'BxThK':_0xb9b369[_0x29ae44(0x4ba)],'xmdgD':_0x29ae44(0x327),'djPtH':function(_0x39e7ec,_0x19da22){return _0xb9b369['xYhqB'](_0x39e7ec,_0x19da22);}},_0x24c895=document['creat'+_0x29ae44(0xcd)+'ent'](_0x29ae44(0xac)+'n');return _0x24c895[_0x29ae44(0x3bd)]=_0xb9b369[_0x29ae44(0x1a6)],_0x24c895[_0x29ae44(0x23e)+'Name']='sk-sw'+_0x29ae44(0x3ec),_0x24c895[_0x29ae44(0x335)+'tribu'+'te']('role',_0x29ae44(0x144)+'h'),_0x24c895[_0x29ae44(0x335)+'tribu'+'te'](_0x29ae44(0x455)+'check'+'ed',_0xb9b369[_0x29ae44(0x428)](String,!!_0x2e0e6c)),_0x24c895[_0x29ae44(0x423)+'ck']=_0x20addd=>{var _0x776ebb=_0x29ae44;_0x20addd[_0x776ebb(0x55f)+'ropag'+'ation']();var _0x549d65=_0x24c895['getAt'+'tribu'+'te'](_0x1c8418[_0x776ebb(0x153)])!==_0x1c8418['xmdgD'];_0x24c895['setAt'+_0x776ebb(0x200)+'te']('aria-'+'check'+'ed',String(_0x549d65)),_0x1c8418['djPtH'](_0x596ecf,_0x549d65);},_0x24c895;}function _0x7f0f18(_0x3280b9,_0x14cddc,_0x7c7730,_0x13848d,_0x120953){var _0x1ba307=_0x590272;if(_0xb9b369['CQvMj']('HOVHw',_0xb9b369[_0x1ba307(0x32a)])){var _0x35e9e2=document['creat'+_0x1ba307(0xcd)+_0x1ba307(0x2b3)](_0x1ba307(0x404));_0x35e9e2[_0x1ba307(0x23e)+'Name']=_0xb9b369['SeonN'];var _0x4e7835=document['creat'+_0x1ba307(0xcd)+_0x1ba307(0x2b3)]('input');_0x4e7835[_0x1ba307(0x3bd)]=_0x1ba307(0x25a),_0x4e7835[_0x1ba307(0x23e)+_0x1ba307(0x1fa)]=_0xb9b369['xuGui'],_0x4e7835['min']=_0x14cddc,_0x4e7835[_0x1ba307(0x1eb)]=_0x7c7730,_0x4e7835[_0x1ba307(0x5b8)]=_0x13848d,_0x4e7835['value']=_0x3280b9;var _0x197838=document['creat'+'eElem'+_0x1ba307(0x2b3)]('span');_0x197838['class'+_0x1ba307(0x1fa)]='sk-va'+'l',_0x197838[_0x1ba307(0x331)+_0x1ba307(0x33c)+'t']=_0xb9b369[_0x1ba307(0x264)](String,_0x3280b9);var _0x2196d6=()=>{var _0x53b8eb=_0x1ba307;_0x197838[_0x53b8eb(0x331)+_0x53b8eb(0x33c)+'t']=String(_0x4e7835[_0x53b8eb(0x417)]),_0x35e9e2[_0x53b8eb(0x4f9)][_0x53b8eb(0x5f6)+_0x53b8eb(0x319)+'y'](_0xb9b369['joztH'],_0xb9b369['towcV'](_0xb9b369[_0x53b8eb(0x2c3)](_0x4e7835[_0x53b8eb(0x417)],_0x14cddc)/(_0x7c7730-_0x14cddc),0xff+-0xd*0x25c+-0x1e11*-0x1)+'%');};return _0x4e7835[_0x1ba307(0x2c1)+'ut']=()=>{var _0x5bc592=_0x1ba307;_0xb9b369[_0x5bc592(0x61a)](_0x2196d6),_0x120953(Number(_0x4e7835['value']));},_0x2196d6(),_0x35e9e2['appen'+'d'](_0x4e7835,_0x197838),_0x35e9e2;}else return 0x8*-0x15f+0x19cc+-0xed4;}function _0x1228ab(_0x5d27d0,_0x589b39){var _0x442a97=_0x590272,_0x34b3c3=('5|3|0'+'|2|1|'+'4')['split']('|'),_0xddff4b=0x4fe+-0x6a*0x3a+-0x3ce*-0x5;while(!![]){switch(_0x34b3c3[_0xddff4b++]){case'0':_0x3b7f26['class'+'Name']=_0x442a97(0x2a1)+_0x442a97(0x222);continue;case'1':_0x3b7f26[_0x442a97(0x2c1)+'ut']=()=>_0x589b39(_0x3b7f26[_0x442a97(0x417)]);continue;case'2':_0x3b7f26[_0x442a97(0x417)]=/^#[0-9a-f]{6}$/i[_0x442a97(0x2b8)](_0x5d27d0)?_0x5d27d0:_0x172a6f['SVNmM'];continue;case'3':_0x3b7f26['type']=_0x442a97(0x47e);continue;case'4':return _0x3b7f26;case'5':var _0x3b7f26=document[_0x442a97(0xa3)+_0x442a97(0xcd)+'ent'](_0x442a97(0x1dd));continue;}break;}}function _0x54be8f(_0x36e0f0,_0x47e2f4,_0x5e9669){var _0x34cb3f=_0x590272;if(_0xb9b369[_0x34cb3f(0x1ec)](_0x34cb3f(0x58f),'EMsVL'))_0x27cd19['delet'+'e'](_0x1a2d35['code']);else{var _0xf56b02=('0|4|5'+_0x34cb3f(0x381)+'2')[_0x34cb3f(0x9c)]('|'),_0x3c934e=0x1f3a+-0x4ab+0x1a8f*-0x1;while(!![]){switch(_0xf56b02[_0x3c934e++]){case'0':var _0x2e7aaa=document[_0x34cb3f(0xa3)+_0x34cb3f(0xcd)+_0x34cb3f(0x2b3)](_0xb9b369[_0x34cb3f(0x1d2)]);continue;case'1':_0x2e7aaa['value']=_0x36e0f0;continue;case'2':return _0x2e7aaa;case'3':_0x2e7aaa[_0x34cb3f(0x100)+_0x34cb3f(0x4fe)]=()=>_0x5e9669(_0x2e7aaa['value']);continue;case'4':_0x2e7aaa[_0x34cb3f(0x23e)+'Name']=_0xb9b369[_0x34cb3f(0x178)];continue;case'5':for(var [_0x13a60d,_0x5e2862]of _0x47e2f4){var _0x2ccc35=document[_0x34cb3f(0xa3)+_0x34cb3f(0xcd)+_0x34cb3f(0x2b3)](_0xb9b369[_0x34cb3f(0x2e1)]);_0x2ccc35['value']=_0x13a60d,_0x2ccc35[_0x34cb3f(0x331)+_0x34cb3f(0x33c)+'t']=_0x5e2862,_0x2e7aaa[_0x34cb3f(0x4ac)+'dChil'+'d'](_0x2ccc35);}continue;}break;}}}function _0xc95900(_0x4b657f,_0x3eab13){var _0x3cf8dd=_0x590272,_0x4a561f={'SFoYb':_0x3cf8dd(0x96)+'creen'+_0x3cf8dd(0x169)+'s','GHBHb':function(_0x4b0905,_0xe086f0){return _0x4b0905===_0xe086f0;},'uNJbe':function(_0x33e0c5,_0x2ae66f){return _0x33e0c5<_0x2ae66f;},'WSCfx':_0xb9b369['Caupg'],'JCxJJ':_0xb9b369[_0x3cf8dd(0x40b)],'KDIfP':_0x3cf8dd(0x1d1)},_0x450e3e=document[_0x3cf8dd(0xa3)+_0x3cf8dd(0xcd)+_0x3cf8dd(0x2b3)](_0xb9b369[_0x3cf8dd(0x1a6)]);return _0x450e3e[_0x3cf8dd(0x3bd)]=_0x3cf8dd(0xac)+'n',_0x450e3e[_0x3cf8dd(0x23e)+_0x3cf8dd(0x1fa)]='sk-bt'+'n',_0x450e3e['textC'+'onten'+'t']=_0x4b657f,_0x450e3e['oncli'+'ck']=_0xf22faa=>{var _0x224e3d=_0x3cf8dd;if(_0x4a561f[_0x224e3d(0x1a9)]!==_0x224e3d(0x311))_0xf22faa['stopP'+'ropag'+'ation'](),_0x3eab13();else for(var _0x2d0d4a of[_0x224e3d(0x3c7)+_0x224e3d(0xa9)+_0x224e3d(0x559)+'-pare'+'nt',_0x224e3d(0x3c7)+_0x224e3d(0xd2)+'8x90-'+_0x224e3d(0x31d)+'t','kour-'+'io_30'+_0x224e3d(0x470)+'-pare'+'nt',_0x4a561f['SFoYb']]){var _0x1cc486=_0x20bfb2[_0x224e3d(0x1c0)+'ement'+_0x224e3d(0x30b)](_0x2d0d4a);if(_0x1cc486&&_0x4a561f[_0x224e3d(0xbf)](_0x2d0d4a,_0x4a561f[_0x224e3d(0x511)])){var _0x3ef1be=_0x1cc486[_0x224e3d(0x1a3)+_0x224e3d(0x16d)];for(var _0x2905c0=0x1c8a+0x24b5*-0x1+0x82b;_0x4a561f[_0x224e3d(0x1aa)](_0x2905c0,_0x3ef1be['lengt'+'h']);_0x2905c0++){if(_0x3ef1be[_0x2905c0]['id']&&_0x3ef1be[_0x2905c0]['id'][_0x224e3d(0x429)+'Of'](_0x4a561f[_0x224e3d(0x5f9)])===-0x779+-0xac5+0x123e*0x1)_0x3ef1be[_0x2905c0][_0x224e3d(0x4f9)][_0x224e3d(0x357)+'ay']=_0x224e3d(0x130);}}else{if(_0x1cc486)_0x1cc486[_0x224e3d(0x4f9)]['displ'+'ay']=_0x4a561f['JCxJJ'];}}},_0x450e3e;}function _0x4e5a32(_0x578ed3,_0x3a2287,_0x31fcea){var _0x52a7b3=_0x590272,_0x315baf=document[_0x52a7b3(0xa3)+_0x52a7b3(0xcd)+'ent'](_0x52a7b3(0x404));_0x315baf[_0x52a7b3(0x23e)+'Name']=_0x52a7b3(0x226)+'l';var _0x53bb7d=document['creat'+'eElem'+'ent'](_0x52a7b3(0x1b6));_0x53bb7d[_0x52a7b3(0x23e)+'Name']=_0x52a7b3(0xa1)+'bel',_0x53bb7d[_0x52a7b3(0x331)+_0x52a7b3(0x33c)+'t']=_0x578ed3;if(_0x3a2287){if(_0xb9b369['CQvMj'](_0x52a7b3(0x128),_0x52a7b3(0x128))){var _0x4a9934=(_0x52a7b3(0x53c)+_0x52a7b3(0x4a4)+'2|8|7'+'|0')[_0x52a7b3(0x9c)]('|'),_0x5b1897=-0x2f2+0x28b+0x67;while(!![]){switch(_0x4a9934[_0x5b1897++]){case'0':_0x322b1c[_0x52a7b3(0x1e2)+'ansfo'+'rm'](_0xbb5842,0x397*-0x1+-0x3*0x347+0xd6c,-0xf3e*0x1+0xa*0x2a2+0x102*-0xb,_0xbb5842,0xeb3*-0x2+-0x68d+0x23f3,0x42*-0x30+0x3c0+-0x4*-0x228);continue;case'1':var _0x360dee=_0x1f7851[_0x52a7b3(0x3b8)+'Width'],_0x212cb9=_0xf47e9b[_0x52a7b3(0x3b8)+_0x52a7b3(0x5ff)+'t'];continue;case'2':_0x28f58e[_0x52a7b3(0x3a2)]=_0xbb5842;continue;case'3':_0xe97f5a['h']=_0x212cb9;continue;case'4':_0x349dfc['w']=_0x360dee;continue;case'5':var _0xbb5842=_0x391c69[_0x52a7b3(0x551)+'ePixe'+'lRati'+'o']||0x4c*-0x1f+0x4f*-0x3b+0x1b6a;continue;case'6':if(_0xb9b369[_0x52a7b3(0x393)](_0x360dee,_0x1e013e['w'])&&_0xb9b369[_0x52a7b3(0xf0)](_0x212cb9,_0x44276d['h'])&&_0xb9b369[_0x52a7b3(0xf0)](_0xbb5842,_0x5ba58b[_0x52a7b3(0x3a2)]))return;continue;case'7':_0x178144['heigh'+'t']=_0x1da899['round'](_0x212cb9*_0xbb5842);continue;case'8':_0x28beab[_0x52a7b3(0x618)]=_0x37d839[_0x52a7b3(0x12f)](_0xb9b369[_0x52a7b3(0x480)](_0x360dee,_0xbb5842));continue;}break;}}else{var _0xc6e022=document[_0x52a7b3(0xa3)+_0x52a7b3(0xcd)+_0x52a7b3(0x2b3)]('small');_0xc6e022[_0x52a7b3(0x23e)+_0x52a7b3(0x1fa)]=_0x52a7b3(0x549)+'nt',_0xc6e022['textC'+'onten'+'t']=_0x3a2287,_0x53bb7d['appen'+_0x52a7b3(0x57e)+'d'](_0xc6e022);}}return _0x315baf[_0x52a7b3(0x4ac)+'d'](_0x53bb7d,_0x31fcea),_0x315baf;}function _0x3c294e(_0x272814,_0x2b7bc0){var _0x1fd6a1=_0x590272;if(_0xb9b369['CQvMj'](_0xb9b369['znpzl'],'NGZOB')){var _0x56db3a=document[_0x1fd6a1(0xa3)+_0x1fd6a1(0xcd)+_0x1fd6a1(0x2b3)](_0x1fd6a1(0x404));return _0x56db3a['class'+_0x1fd6a1(0x1fa)]=_0xb9b369[_0x1fd6a1(0x5ca)](_0x1fd6a1(0x1f6)+'te',_0x2b7bc0?_0xb9b369[_0x1fd6a1(0x1bf)]:''),_0x56db3a['textC'+_0x1fd6a1(0x33c)+'t']=_0x272814,_0x56db3a;}else _0x404fdf['class'+_0x1fd6a1(0xfc)][_0x1fd6a1(0x30f)+'e']('on',_0x41b4d2),_0x2dbd77(_0xb0e028);}function _0x2087a6(_0x337366,_0x114db2,_0x394e0,_0x31e793,_0x176edf){var _0x20892c=_0x590272;if(_0x20892c(0x452)!==_0xb9b369['tcsWp']){var _0x462a57=_0xb9b369[_0x20892c(0x97)]['split']('|'),_0x29d23d=-0xf0b+0x1f4c+-0x1041;while(!![]){switch(_0x462a57[_0x29d23d++]){case'0':_0x23543c[_0x20892c(0x23e)+'Name']='sk-ca'+'rd'+(_0x394e0?_0x20892c(0x401):'');continue;case'1':var _0x23543c=document[_0x20892c(0xa3)+'eElem'+_0x20892c(0x2b3)]('div');continue;case'2':_0x570110[_0x20892c(0x23e)+_0x20892c(0x1fa)]='sk-ca'+_0x20892c(0x521)+'ad';continue;case'3':var _0x464e76=document['creat'+_0x20892c(0xcd)+_0x20892c(0x2b3)](_0x20892c(0x404));continue;case'4':_0x3d070c['textC'+_0x20892c(0x33c)+'t']=_0x337366;continue;case'5':_0x464e76[_0x20892c(0x23e)+'Name']=_0xb9b369[_0x20892c(0x487)];continue;case'6':var _0x570110=document['creat'+_0x20892c(0xcd)+'ent'](_0x20892c(0x404));continue;case'7':var _0x3d070c=document[_0x20892c(0xa3)+_0x20892c(0xcd)+'ent'](_0xb9b369[_0x20892c(0x5d5)]);continue;case'8':if(_0x176edf&&_0x176edf['lengt'+'h']){var _0x30c7a1=(_0x20892c(0x4e1)+_0x20892c(0xa2)+_0x20892c(0x528))[_0x20892c(0x9c)]('|'),_0x118684=0x826+0x1abf+0x22e5*-0x1;while(!![]){switch(_0x30c7a1[_0x118684++]){case'0':_0x2dfee7['class'+_0x20892c(0x1fa)]=_0x20892c(0x1a0)+'ody';continue;case'1':_0x3b878a[_0x20892c(0x331)+'onten'+'t']=_0x114db2;continue;case'2':var _0x2dfee7=document[_0x20892c(0xa3)+_0x20892c(0xcd)+_0x20892c(0x2b3)]('div');continue;case'3':_0x23543c['appen'+_0x20892c(0x57e)+'d'](_0x2dfee7);continue;case'4':for(var _0x494ed4 of _0x176edf)_0x2dfee7['appen'+_0x20892c(0x57e)+'d'](_0x494ed4);continue;case'5':var _0x3b878a=document[_0x20892c(0xa3)+'eElem'+_0x20892c(0x2b3)](_0x20892c(0x404));continue;case'6':_0x2dfee7[_0x20892c(0x4ac)+'dChil'+'d'](_0x3b878a);continue;case'7':_0x3b878a[_0x20892c(0x23e)+_0x20892c(0x1fa)]='sk-md'+_0x20892c(0x4ca);continue;}break;}}continue;case'9':_0x464e76[_0x20892c(0x4ac)+'dChil'+'d'](_0x3d070c);continue;case'10':return _0x23543c;case'11':if(_0x31e793){var _0x2194f2=_0xb9b369['gMJCL'](_0x5a2df6,_0x394e0,_0x26729a=>{var _0x32ee93=_0x20892c;_0x23543c[_0x32ee93(0x23e)+'List'][_0x32ee93(0x30f)+'e']('on',_0x26729a),_0xb9b369[_0x32ee93(0x131)](_0x31e793,_0x26729a);});_0x570110[_0x20892c(0x4ac)+'d'](_0x464e76,_0x2194f2);}else _0x570110[_0x20892c(0x4ac)+'dChil'+'d'](_0x464e76);continue;case'12':_0x23543c[_0x20892c(0x4ac)+_0x20892c(0x57e)+'d'](_0x570110);continue;}break;}}else _0x1feabc(!_0x19ad5b);}var _0x3d26bf=[{'id':_0x590272(0x250)+'t','label':'Comba'+'t'},{'id':_0x590272(0x1df),'label':_0x172a6f[_0x590272(0x589)]},{'id':_0x172a6f['KmPTi'],'label':'Visua'+'l'},{'id':_0x590272(0x5d8),'label':'Misc'},{'id':_0x172a6f[_0x590272(0x344)],'label':'Safet'+'y'}];function _0x5c6555(){var _0x55aae9=_0x590272,_0x3f6464=_0x3ca21b['safeM'+_0x55aae9(0x4ce)]?_0x172a6f[_0x55aae9(0x1cc)]:_0x3ca21b['uwmk']?_0x172a6f['FyURE'](_0x172a6f['osIPl'](_0x172a6f['KTlrH'](_0x55aae9(0x1af)+_0x55aae9(0x10f)+'\x20'+(_0x3ca21b[_0x55aae9(0x530)+_0x55aae9(0x315)]?_0x172a6f[_0x55aae9(0x37f)](_0x3ca21b[_0x55aae9(0x530)+'Ok'],'/')+_0x3ca21b[_0x55aae9(0x530)+_0x55aae9(0x315)]+('\x20hook'+'s'):_0x55aae9(0x592)+'ks\x20ar'+_0x55aae9(0x4e2)+'all\x20o'+'ff)')+(_0x55aae9(0x4d3)+'me\x20'),_0x3ca21b[_0x55aae9(0x3b7)+_0x55aae9(0x179)]?'loade'+'d':_0x55aae9(0x1f8)+'ng')+('\x20|\x20sh'+_0x55aae9(0x4b8)+'\x20'),_0x3ca21b[_0x55aae9(0x1c2)+_0x55aae9(0x266)]?_0x55aae9(0x29b):'none'),_0x55aae9(0x26e)+_0x55aae9(0xb2)+'t\x20')+(_0x3ca21b[_0x55aae9(0x330)+_0x55aae9(0x1c4)]?'held':_0x172a6f[_0x55aae9(0x33f)]):_0x55aae9(0x1af)+'MISSI'+'NG\x20—\x20'+_0x55aae9(0x34a)+_0x55aae9(0x25b)+'ly\x20(r'+_0x55aae9(0x3aa)+_0x55aae9(0x317)+'he\x20us'+_0x55aae9(0x5e2)+'ipt)';if(_0x3ca21b[_0x55aae9(0x5eb)+'rror'])_0x3f6464+=_0x172a6f[_0x55aae9(0x257)](_0x55aae9(0x40d)+_0x55aae9(0x2b1),_0x3ca21b[_0x55aae9(0x5eb)+_0x55aae9(0xdd)]);return _0x2087a6(_0x172a6f[_0x55aae9(0x23d)],_0x3f6464,_0x3ca21b[_0x55aae9(0x2d7)],null,[_0x4e5a32(_0x172a6f[_0x55aae9(0x19e)],_0x172a6f['IECPo'],_0xc95900(_0x172a6f[_0x55aae9(0x5a9)],()=>{var _0x4337d8=_0x55aae9;try{if(_0xb8ef17)_0xb8ef17[_0x4337d8(0x193)]('Unity'+_0x4337d8(0x51f)+'e.App'+_0x4337d8(0x301)+'ion','set_t'+_0x4337d8(0x3fa)+'Frame'+_0x4337d8(0x35f),[-0x2b*-0xb3+-0x298*0x7+-0xaf9]);}catch(_0x4caf61){}}))]);}function _0x21fd0b(_0x544198){var _0x3988c5=_0x590272,_0x20d3cc={'EHnOw':_0x3988c5(0x463)+'e','GTmoz':function(_0x13a0a2){return _0x13a0a2();},'CaNlO':_0x3988c5(0x244),'HfChG':function(_0x4c96d8){return _0x172a6f['KDynz'](_0x4c96d8);},'gkzXL':'CshbW','EwTWI':function(_0x445f03){return _0x445f03();},'MRfKf':function(_0x3d8446){return _0x3d8446();},'DzhUj':function(_0x2f4852,_0x166212){return _0x2f4852!==_0x166212;},'VtRTM':function(_0x24ffd0){var _0x17cce4=_0x3988c5;return _0x172a6f[_0x17cce4(0x25e)](_0x24ffd0);},'tzQcn':function(_0x319079){return _0x319079();}};if(_0x544198==='comba'+'t')return[_0x172a6f[_0x3988c5(0x2dc)](_0x5c6555),_0x172a6f['HAFda'](_0x2087a6,_0x172a6f['FoFMG'],_0x3988c5(0x424)+_0x3988c5(0x435)+_0x3988c5(0x194)+_0x3988c5(0x431)+'ateTa'+_0x3988c5(0x3e5)+_0x3988c5(0x177)+_0x3988c5(0x3a5)+'ealth'+'.Loca'+_0x3988c5(0x46d)+'\x20so\x20n'+_0x3988c5(0x320)+_0x3988c5(0x116)+'\x20hurt'+_0x3988c5(0x2f4)+'ill\x20y'+'ou.',_0x23a740[_0x3988c5(0xe3)],_0x5bafc0=>{var _0x52d1d7=_0x3988c5;_0x23a740[_0x52d1d7(0xe3)]=_0x5bafc0,_0x3cbb7e(),_0x44644a('god',_0x5bafc0),_0x44644a(_0x20d3cc['EHnOw'],_0x5bafc0);},[]),_0x2087a6(_0x172a6f[_0x3988c5(0x127)],_0x172a6f['xcfIQ'],_0x23a740[_0x3988c5(0x38c)+'oil'],_0x49fde9=>{var _0x492203=_0x3988c5;_0x23a740[_0x492203(0x38c)+_0x492203(0x142)]=_0x49fde9,_0x3cbb7e(),_0xb9b369['gMJCL'](_0x44644a,'noRec'+_0x492203(0x142),_0x49fde9);},[]),_0x172a6f[_0x3988c5(0x26b)](_0x2087a6,_0x3988c5(0x110)+'read','Zeroe'+_0x3988c5(0x4b2)+_0x3988c5(0x4ec)+_0x3988c5(0x552)+_0x3988c5(0x453)+_0x3988c5(0x132)+_0x3988c5(0x2b7)+'\x20your'+_0x3988c5(0x545)+_0x3988c5(0x5af)+'ery\x202'+'00ms.',_0x23a740['noSpr'+_0x3988c5(0xfd)],_0x12ad41=>{var _0x43475e=_0x3988c5;_0x23a740['noSpr'+_0x43475e(0xfd)]=_0x12ad41,_0x3cbb7e();},[]),_0x2087a6(_0x172a6f[_0x3988c5(0x4c7)],_0x3988c5(0x2e2)+_0x3988c5(0x272)+_0x3988c5(0x45c)+'Weapo'+'n.fir'+'eRate'+_0x3988c5(0x60c)+'0%.\x20S'+'erver'+_0x3988c5(0x11c)+_0x3988c5(0xf5)+'\x20gate'+_0x3988c5(0x52f)+'s.',_0x23a740['rapid'+_0x3988c5(0x333)],_0x1e01ba=>{var _0x467394=_0x3988c5;_0x20d3cc[_0x467394(0x5fe)]!==_0x467394(0x2d6)?(_0x23a740[_0x467394(0x3c2)+_0x467394(0x333)]=_0x1e01ba,_0x3cbb7e()):(_0x2f16d7[_0x467394(0x11f)+_0x467394(0xfd)]=_0x1a09c7,_0x20d3cc[_0x467394(0x1ff)](_0x2ebc4d));},[]),_0x172a6f[_0x3988c5(0xfa)](_0x2087a6,'Damag'+_0x3988c5(0x60d)+'P]','Overw'+'rites'+_0x3988c5(0x13f)+_0x3988c5(0xc4)+_0x3988c5(0x4ad)+_0x3988c5(0x22a)+_0x3988c5(0x4ea)+'annab'+_0x3988c5(0x5b6)+'\x20the\x20'+'serve'+_0x3988c5(0x36f)+'idate'+'s.',_0x23a740[_0x3988c5(0xa7)+'eExp'],_0x25ec74=>{var _0x45f3a7=_0x3988c5;_0xb9b369[_0x45f3a7(0x4ed)](_0x45f3a7(0x430),_0xb9b369[_0x45f3a7(0x4c1)])?_0x42d1a2[_0x45f3a7(0x224)+'em']('sakur'+'a.kou'+_0x45f3a7(0x254),_0x339b76[_0x45f3a7(0x3e1)+'gify'](_0x536f47)):(_0x23a740['damag'+'eExp']=_0x25ec74,_0xb9b369['RUXRu'](_0x3cbb7e));},[_0x172a6f[_0x3988c5(0x59c)](_0x4e5a32,_0x3988c5(0x53e)+_0x3988c5(0x21d)+'ue',null,_0x7f0f18(_0x23a740['damag'+_0x3988c5(0x31b)+'e'],-0x860+0x1916+-0x10ac,-0x17ba+-0x1*-0x209b+-0x6ed,-0x1d7d+0x932+-0x1450*-0x1,_0xb03bb1=>{var _0x35c46c=_0x3988c5;_0x23a740['damag'+_0x35c46c(0x31b)+'e']=_0xb03bb1,_0xb9b369['PnuQT'](_0x3cbb7e);}))]),_0x172a6f[_0x3988c5(0x2ce)](_0x2087a6,_0x172a6f[_0x3988c5(0x235)],_0x172a6f['irklk'],_0x23a740[_0x3988c5(0x3f3)+_0x3988c5(0x419)],_0x372476=>{var _0x1add37=_0x3988c5;_0x23a740['infAm'+_0x1add37(0x419)]=_0x372476,_0x3cbb7e();},[_0x172a6f['rycGM'](_0x3c294e,'If\x20re'+'loads'+_0x3988c5(0x41c)+_0x3988c5(0x599)+'in,\x20t'+'he\x20de'+_0x3988c5(0x564)+'nt\x20ha'+_0x3988c5(0x2b5)+_0x3988c5(0x16c)+'where'+'.')])];if(_0x544198===_0x3988c5(0x1df))return[_0x2087a6(_0x3988c5(0x2f1),_0x172a6f['UcVQF'],_0x172a6f[_0x3988c5(0x582)](_0x23a740[_0x3988c5(0x2fb)+_0x3988c5(0x324)],-0x392*0x2+-0x2*0x449+0x1*0x101a),null,[_0x4e5a32(_0x172a6f['zswqt'],_0x3988c5(0x241)+_0x3988c5(0x3da)+'ult',_0x172a6f['HcxOT'](_0x7f0f18,_0x23a740['speed'+'Pct'],-0x3*-0xcf2+-0x4e1+-0x1*0x21c3,-0x120d*0x1+0x178f+0xde*-0x5,-0xc5e+0x2*0x8df+-0x55b,_0x55cce2=>{_0x23a740['speed'+'Pct']=_0x55cce2,_0x20d3cc['HfChG'](_0x3cbb7e);}))]),_0x172a6f[_0x3988c5(0x444)](_0x2087a6,'Jump\x20'+_0x3988c5(0x12e)+'vity','Scale'+_0x3988c5(0x410)+'ement'+_0x3988c5(0x543)+_0x3988c5(0x4b9)+_0x3988c5(0x240)+_0x3988c5(0x612)+_0x3988c5(0x268)+_0x3988c5(0x1cd)+_0x3988c5(0xd9),_0x172a6f[_0x3988c5(0x570)](_0x23a740['jumpP'+'ct'],-0xbc8+0x2*0x1af+0x467*0x2)||_0x172a6f[_0x3988c5(0x365)](_0x23a740[_0x3988c5(0x268)+_0x3988c5(0x1bb)],-0x1f2b+-0x25ff+-0x266*-0x1d),null,[_0x172a6f['TWXBt'](_0x4e5a32,_0x172a6f['qhHZk'],null,_0x172a6f[_0x3988c5(0x444)](_0x7f0f18,_0x23a740['jumpP'+'ct'],-0xd5c+-0x1*-0x1930+-0xba2,0x9*0x67+-0x7d6+0x7*0xc5,0x1*0x1381+-0x24b4+0x1138,_0x164d37=>{var _0x4dcccc=_0x3988c5,_0x3f2971={'lnyIa':'[saku'+'ra-ko'+_0x4dcccc(0x138)+_0x4dcccc(0x124)+_0x4dcccc(0x56b)+'iled:'};if(_0x20d3cc[_0x4dcccc(0xf6)]===_0x4dcccc(0x3e0))return _0x487f5c[_0x4dcccc(0x5bb)](_0x3f2971[_0x4dcccc(0x3d6)],_0xbced5,_0x546163&&_0x1238b6['messa'+'ge']),null;else _0x23a740[_0x4dcccc(0x5f1)+'ct']=_0x164d37,_0x3cbb7e();})),_0x4e5a32(_0x172a6f[_0x3988c5(0x227)],_0x3988c5(0x553)+'\x20=\x20fl'+'oaty',_0x172a6f['oYGgA'](_0x7f0f18,_0x23a740['gravi'+_0x3988c5(0x1bb)],-0x12c1+-0x147c+0x5*0x7db,0x25da+0x979*-0x2+-0x8*0x244,0x5a+-0x731*-0x5+-0x244a,_0x564e06=>{var _0x4bf677=_0x3988c5;_0x23a740[_0x4bf677(0x268)+'tyPct']=_0x564e06,_0x3cbb7e();}))]),_0x172a6f[_0x3988c5(0x496)](_0x2087a6,_0x3988c5(0x1f7)+'-hop',_0x172a6f[_0x3988c5(0x3ba)],_0x23a740[_0x3988c5(0x22e)],_0x432f29=>{var _0x57cb27=_0x3988c5;_0x23a740[_0x57cb27(0x22e)]=_0x432f29,_0x3cbb7e();},[])];if(_0x172a6f[_0x3988c5(0x239)](_0x544198,_0x172a6f[_0x3988c5(0x3d7)])){if(_0x172a6f[_0x3988c5(0x5a0)]===_0x172a6f['aFPth'])_0x528a25[_0x3988c5(0x38c)+_0x3988c5(0x142)]=_0x3c7ed3,_0x5a8501(),_0x20f53d(_0x3988c5(0x38c)+'oil',_0x235720);else return[_0x172a6f[_0x3988c5(0x4d6)](_0x2087a6,_0x3988c5(0x8e)+'rokes',_0x3988c5(0x24e)+_0x3988c5(0x1d0)+'/RMB\x20'+_0x3988c5(0x4b6)+'ce\x20ov'+'erlay'+'.',_0x23a740['keyst'+'rokes'],_0x82464a=>{var _0x134b07=_0x3988c5;_0x23a740['keyst'+_0x134b07(0x29f)]=_0x82464a,_0x3cbb7e();},[_0x172a6f[_0x3988c5(0x46f)](_0x4e5a32,'Posit'+'ion',null,_0x54be8f(_0x23a740[_0x3988c5(0x263)],[['bl',_0x3988c5(0x3e7)+'m\x20lef'+'t'],['br',_0x3988c5(0x3e7)+_0x3988c5(0x18b)+'ht'],['ml',_0x3988c5(0x270)+_0x3988c5(0x3a8)+'e']],_0x2c6e7c=>{var _0x1d5205=_0x3988c5;_0x23a740['ksPos']=_0x2c6e7c,_0x20d3cc[_0x1d5205(0x519)](_0x3cbb7e);})),_0x4e5a32(_0x172a6f[_0x3988c5(0x3d2)],null,_0x172a6f[_0x3988c5(0x4d6)](_0x7f0f18,_0x23a740[_0x3988c5(0x2ec)+'le'],-0xaa2*0x3+0x15f+0x3*0xa2d+0.6,-0xa5e+-0x2ca+0xd29+0.6000000000000001,-0x11*0x161+0x3*0xa94+-0x84b+0.05,_0x4d6270=>{var _0x5799e4=_0x3988c5;_0x23a740['ksSca'+'le']=_0x4d6270,_0xb9b369[_0x5799e4(0x2df)](_0x3cbb7e);})),_0x4e5a32(_0x3988c5(0x2c6)+_0x3988c5(0x577)+'t',null,_0x5a2df6(_0x23a740[_0x3988c5(0x10d)],_0x54ef23=>{var _0x1b4307=_0x3988c5;_0x1b4307(0x93)===_0x1b4307(0x1e4)?(_0x38d416['hookC'+_0x1b4307(0x307)+'e']=_0x455303,_0x20d3cc['GTmoz'](_0x5d72d3)):(_0x23a740['ksCps']=_0x54ef23,_0x20d3cc[_0x1b4307(0x210)](_0x3cbb7e));}))]),_0x2087a6('Cross'+_0x3988c5(0x112),_0x172a6f['WfpuO'],_0x23a740['cross'+_0x3988c5(0x112)],_0x5e2efc=>{_0x23a740['cross'+'hair']=_0x5e2efc,_0x3cbb7e();},[_0x4e5a32(_0x172a6f[_0x3988c5(0x3d2)],null,_0x7f0f18(_0x23a740[_0x3988c5(0x29e)+'e'],0x1*0xb77+0x1e3d+-0x29b4+0.5,-0x1a35+-0x14a+-0x1*-0x1b81+0.5,-0x13c5+-0x62*-0x4+0x123d+0.1,_0x57e9c3=>{var _0x4cadd1=_0x3988c5;_0xb9b369['ATTQQ']===_0xb9b369['lbDcT']?(_0x592d76[_0x4cadd1(0x518)+'odDie']=_0x3c4ba4,_0x558a9a()):(_0x23a740[_0x4cadd1(0x29e)+'e']=_0x57e9c3,_0x3cbb7e());})),_0x4e5a32(_0x172a6f[_0x3988c5(0x208)],null,_0x1228ab(_0x23a740['chCol'+'or'],_0x235d11=>{_0x23a740['chCol'+'or']=_0x235d11,_0x3cbb7e();}))]),_0x172a6f[_0x3988c5(0x26b)](_0x2087a6,_0x172a6f[_0x3988c5(0x542)],_0x172a6f[_0x3988c5(0xaf)],_0x23a740[_0x3988c5(0x613)],null,[_0x172a6f[_0x3988c5(0x59c)](_0x4e5a32,_0x3988c5(0x5d2)+'ounte'+'r',null,_0x5a2df6(_0x23a740[_0x3988c5(0x613)],_0x569305=>{var _0x186753=_0x3988c5;_0x23a740[_0x186753(0x613)]=_0x569305,_0x3cbb7e();})),_0x3c294e('No\x20en'+_0x3988c5(0x3dc)+_0x3988c5(0x415)+'r:\x20th'+'is\x20bu'+_0x3988c5(0x2cf)+'as\x20no'+'\x20GetV'+_0x3988c5(0x2cd)+'ePlay'+_0x3988c5(0x133)+_0x3988c5(0x384)+_0x3988c5(0x380)+_0x3988c5(0x586))])];}if(_0x544198==='misc'){if(_0x3988c5(0x370)===_0x172a6f['Yikxm'])_0x31129a['keyst'+'rokes']=_0xac2e5d,_0x519942();else return[_0x2087a6(_0x172a6f[_0x3988c5(0x52d)],_0x172a6f[_0x3988c5(0x261)],_0x23a740['adblo'+'ck'],_0x387481=>{var _0x4c266a=_0x3988c5;_0x23a740[_0x4c266a(0x197)+'ck']=_0x387481,_0x3cbb7e();},[_0x3c294e(_0x172a6f[_0x3988c5(0x529)])])];}return[_0x2087a6(_0x172a6f[_0x3988c5(0x30c)],'Skips'+_0x3988c5(0x5c3)+_0x3988c5(0x4b4)+_0x3988c5(0x4be)+_0x3988c5(0xae)+_0x3988c5(0x30d)+_0x3988c5(0x530)+'.\x20Use'+_0x3988c5(0x256)+_0x3988c5(0x281)+_0x3988c5(0x4d8)+'s\x20won'+_0x3988c5(0x174)+_0x3988c5(0x23b),_0x23a740[_0x3988c5(0x2b4)+'ode'],_0x116c6e=>{var _0x89fe16=_0x3988c5;_0xb9b369[_0x89fe16(0x2bc)]('TvzVx',_0xb9b369[_0x89fe16(0x4cb)])?(_0x23a740[_0x89fe16(0x2b4)+'ode']=_0x116c6e,_0x3cbb7e(),location['reloa'+'d']()):(_0x24f0f0['ksPos']=_0xdd7291,_0x324da4());},[_0x172a6f[_0x3988c5(0x44e)](_0x3c294e,'Appli'+'es\x20on'+_0x3988c5(0x5f0)+_0x3988c5(0x4fd)+_0x3988c5(0x2d0)+_0x3988c5(0x446)+_0x3988c5(0x98)+_0x3988c5(0x584)+_0x3988c5(0xbb)+_0x3988c5(0x24a)+_0x3988c5(0x2bb)+_0x3988c5(0x21b)+'is\x20ho'+'ok-re'+_0x3988c5(0xe0)+_0x3988c5(0x11d)+_0x3988c5(0xe9)+_0x3988c5(0x5ec)+'hooks'+_0x3988c5(0x14e)+_0x3988c5(0x3ef)+_0x3988c5(0x20a))]),_0x2087a6(_0x172a6f[_0x3988c5(0x15d)],_0x3988c5(0x2ab)+'one\x20i'+_0x3988c5(0x12a)+'ls\x20a\x20'+'WASM\x20'+'tramp'+'oline'+'\x20for\x20'+_0x3988c5(0x21c)+_0x3988c5(0x35b)+'page\x20'+'load.'+_0x3988c5(0x1d9)+_0x3988c5(0x2eb)+_0x3988c5(0x191)+_0x3988c5(0x10b)+_0x3988c5(0x318)+_0x3988c5(0x5e3)+'ure\x20t'+'hat\x20d'+'oes\x20n'+'ot\x20ma'+'tch\x20t'+_0x3988c5(0x94)+_0x3988c5(0xd0)+'thod\x20'+_0x3988c5(0x2a7)+'s\x20\x27fu'+'nctio'+'n\x20sig'+_0x3988c5(0x276)+'e\x20mis'+'match'+_0x3988c5(0x610)+_0x3988c5(0x95)+_0x3988c5(0x1d8)+'\x20is\x20c'+_0x3988c5(0xc2)+_0x3988c5(0xa6)+'n\x20the'+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0x3988c5(0x2c5)+'reloa'+'d,\x20an'+_0x3988c5(0x2af)+_0x3988c5(0x2ea)+_0x3988c5(0x201)+_0x3988c5(0x3f4)+'\x20buil'+_0x3988c5(0x149)+_0x3988c5(0x1cf)+'n.',_0x23a740[_0x3988c5(0x518)+'od']||_0x23a740['hookG'+'odDie']||_0x23a740['hookN'+_0x3988c5(0x47b)+'il']||_0x23a740[_0x3988c5(0xee)+_0x3988c5(0x307)+'e'],_0x399120=>{var _0x5b5904=_0x3988c5;_0x23a740[_0x5b5904(0x518)+'od']=_0x399120,_0x23a740['hookG'+_0x5b5904(0xea)]=_0x399120,_0x23a740[_0x5b5904(0x5e7)+'oReco'+'il']=_0x399120,_0x23a740['hookC'+'aptur'+'e']=_0x399120,_0x3cbb7e(),location['reloa'+'d']();},[_0x3c294e(_0x172a6f[_0x3988c5(0x4f6)]),_0x4e5a32('god\x20('+'OHeal'+_0x3988c5(0x1f0)+'itiat'+_0x3988c5(0x1a4)+_0x3988c5(0x4ab)+'h)',null,_0x172a6f['MzCwj'](_0x5a2df6,_0x23a740[_0x3988c5(0x518)+'od'],_0x35b06b=>{var _0x344c8e=_0x3988c5;_0x23a740[_0x344c8e(0x518)+'od']=_0x35b06b,_0x3cbb7e();})),_0x4e5a32(_0x3988c5(0x463)+'e\x20(OH'+_0x3988c5(0x537)+_0x3988c5(0x4fb)+_0x3988c5(0xe8),null,_0x172a6f['MzCwj'](_0x5a2df6,_0x23a740['hookG'+_0x3988c5(0xea)],_0xe68f3=>{var _0x1dfa2a=_0x3988c5;_0x23a740['hookG'+_0x1dfa2a(0xea)]=_0xe68f3,_0xb9b369['rTISi'](_0x3cbb7e);})),_0x4e5a32(_0x172a6f['wtgFS'],null,_0x5a2df6(_0x23a740[_0x3988c5(0x5e7)+_0x3988c5(0x47b)+'il'],_0x5c11e2=>{var _0x1a0dc9=_0x3988c5;_0x23a740['hookN'+'oReco'+'il']=_0x5c11e2,_0x20d3cc[_0x1a0dc9(0x1e0)](_0x3cbb7e);})),_0x4e5a32('captu'+_0x3988c5(0x342)+_0x3988c5(0x4a7)+_0x3988c5(0x53f)+_0x3988c5(0x2d8)+'\x20IsGr'+_0x3988c5(0x5b4)+'d)',_0x172a6f['FyUZD'],_0x172a6f[_0x3988c5(0x2ae)](_0x5a2df6,_0x23a740[_0x3988c5(0xee)+'aptur'+'e'],_0x5b8839=>{var _0x158564=_0x3988c5;_0x23a740[_0x158564(0xee)+_0x158564(0x307)+'e']=_0x5b8839,_0x3cbb7e();}))]),_0x172a6f[_0x3988c5(0x4d6)](_0x2087a6,'ACTk\x20'+_0x3988c5(0x42c)+'r','Disab'+_0x3988c5(0xf3)+_0x3988c5(0x1e7)+_0x3988c5(0x5de)+'etect'+'ors\x20a'+'t\x20sta'+_0x3988c5(0x61c)+_0x3988c5(0x4fc)+_0x3988c5(0x36a)+_0x3988c5(0x168)+'on().'+'\x20Keep'+'\x20ON.',_0x23a740['actkK'+_0x3988c5(0x1c8)],_0x39a36d=>{var _0x1391a8=_0x3988c5,_0x52e421={'Fbjvs':function(_0x25c794){return _0x25c794();}};_0x20d3cc[_0x1391a8(0x32c)]('CNyLk',_0x1391a8(0x3d5))?(_0x23a740[_0x1391a8(0xef)+'ill']=_0x39a36d,_0x20d3cc[_0x1391a8(0x1c9)](_0x3cbb7e)):(_0x278741={..._0x1312ff},_0x52e421['Fbjvs'](_0x1d65b1),_0x5a8f61['reloa'+'d']());},[_0x172a6f[_0x3988c5(0x2ae)](_0x3c294e,_0x172a6f['ksvfx'],!![])]),_0x172a6f[_0x3988c5(0x561)](_0x2087a6,_0x3988c5(0x1db)+'r',_0x172a6f[_0x3988c5(0x14d)],!![],null,[_0x4e5a32(_0x172a6f['hpaHG'],null,_0x172a6f[_0x3988c5(0x47f)](_0xc95900,_0x172a6f[_0x3988c5(0x565)],()=>{var _0x14cd85=_0x3988c5;_0x23a740={..._0x141b0a},_0x20d3cc[_0x14cd85(0x488)](_0x3cbb7e),location[_0x14cd85(0x2d3)+'d']();}))])];}var _0x28a5c4=null;function _0x1714aa(_0x15fa0c){var _0x2bd92d=_0x590272;_0x57447f=_0x15fa0c;if(!_0x28a5c4){var _0x3aeeca=_0x172a6f['CfHeE'][_0x2bd92d(0x9c)]('|'),_0x46e05b=0x1f52+0x4b+0x1f9d*-0x1;while(!![]){switch(_0x3aeeca[_0x46e05b++]){case'0':var _0x31b8d7=document['creat'+_0x2bd92d(0xcd)+_0x2bd92d(0x2b3)](_0x172a6f['QnmJV']);continue;case'1':_0x5b20c2[_0x2bd92d(0x4ac)+_0x2bd92d(0x57e)+'d'](_0x31b8d7);continue;case'2':_0x28a5c4=_0x172a6f[_0x2bd92d(0x13c)](_0x3a2436);continue;case'3':_0x31b8d7[_0x2bd92d(0x331)+'onten'+'t']=_0x30a2ea;continue;case'4':_0x5b20c2[_0x2bd92d(0x4ac)+'dChil'+'d'](_0x28a5c4);continue;case'5':requestAnimationFrame(()=>_0x28a5c4[_0x2bd92d(0x23e)+_0x2bd92d(0xfc)]['add']('shown'));continue;}break;}}_0x28a5c4[_0x2bd92d(0x23e)+'List']['toggl'+'e'](_0x172a6f[_0x2bd92d(0x43b)],_0x15fa0c);}function _0x9a6ad2(){var _0x1b6cf2=_0x590272;if(_0xb9b369[_0x1b6cf2(0x2ed)](_0xb9b369['Reebf'],_0x1b6cf2(0x48b)))_0x1714aa(!_0x57447f);else{_0x7b618b[_0x1b6cf2(0x1ae)]=_0x22b9e2,_0xb9b369[_0x1b6cf2(0x61a)](_0xa09ea8);var _0x4b3598=_0x1ff2c4[_0x1b6cf2(0x316)](_0x448073=>_0x448073['id']===_0x19327e)||_0x36e350[-0x19*-0x7+0x228d+-0x119e*0x2];_0x5f9d7e[_0x1b6cf2(0x331)+_0x1b6cf2(0x33c)+'t']=_0xb9b369['yIoCs']('Sakur'+'a\x20Kou'+_0x1b6cf2(0xce),_0x4b3598['label']);for(var [_0x24406a,_0x1deee4]of _0x1c325e)_0x1deee4['class'+'List'][_0x1b6cf2(0x30f)+'e']('activ'+'e',_0x24406a===_0x4f2f7b);_0xd1fb36[_0x1b6cf2(0x338)+_0x1b6cf2(0x568)+_0x1b6cf2(0x4e6)](..._0xb9b369[_0x1b6cf2(0x3a3)](_0x480fde,_0x2a0b45));}}function _0x3a2436(){var _0x1341a8=_0x590272,_0x336078=document['creat'+'eElem'+_0x1341a8(0x2b3)](_0x172a6f['iubGc']);_0x336078[_0x1341a8(0x23e)+_0x1341a8(0x1fa)]='mn-pa'+_0x1341a8(0x523);var _0x1d3858=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)](_0x172a6f[_0x1341a8(0x16e)]);_0x1d3858['class'+'Name']='mn-si'+'de';var _0x24ae9b=document['creat'+'eElem'+_0x1341a8(0x2b3)](_0x1341a8(0x404));_0x24ae9b['class'+'Name']=_0x1341a8(0x587)+'go',_0x24ae9b[_0x1341a8(0x3b8)+_0x1341a8(0x49a)]='<svg\x20'+_0x1341a8(0xba)+_0x1341a8(0x278)+_0x1341a8(0x61b)+'\x2024\x22\x20'+_0x1341a8(0x23e)+_0x1341a8(0x215)+_0x1341a8(0x53a)+'svg\x22>'+_0x1341a8(0x383)+'\x20d=\x22M'+_0x1341a8(0x47d)+_0x1341a8(0x3cc)+'-2.5-'+_0x1341a8(0x2ad)+'-4-7.'+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x1341a8(0x454)+_0x1341a8(0x229)+_0x1341a8(0x287)+_0x1341a8(0x40f)+_0x1341a8(0x451)+_0x1341a8(0x16f)+'\x22\x20str'+_0x1341a8(0x619)+_0x1341a8(0x2bf)+_0x1341a8(0x379)+'troke'+'-widt'+'h=\x222\x22'+_0x1341a8(0x38e)+_0x1341a8(0x12d)+'necap'+'=\x22rou'+_0x1341a8(0x33d)+_0x1341a8(0x3c4)+_0x1341a8(0x485)+'join='+_0x1341a8(0x61e)+_0x1341a8(0x1f1)+_0x1341a8(0x368)+_0x1341a8(0x52c)+'\x2212\x22\x20'+_0x1341a8(0x389)+_0x1341a8(0x5bc)+_0x1341a8(0x1f9)+_0x1341a8(0x232)+_0x1341a8(0x3b0)+_0x1341a8(0x3d3)+_0x1341a8(0x296)+'vg>',_0x1d3858['appen'+_0x1341a8(0x57e)+'d'](_0x24ae9b);var _0x58086d=document['creat'+'eElem'+'ent'](_0x172a6f['iubGc']);_0x58086d[_0x1341a8(0x23e)+_0x1341a8(0x1fa)]=_0x172a6f[_0x1341a8(0x4ee)];var _0x2003a0=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)](_0x1341a8(0x2fd)+'r');_0x2003a0[_0x1341a8(0x23e)+'Name']=_0x172a6f[_0x1341a8(0x1ab)];var _0x1f6b04=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)](_0x172a6f[_0x1341a8(0x11b)]);_0x1f6b04['class'+'Name']=_0x172a6f[_0x1341a8(0x353)];var _0x2b698f=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)]('h2');_0x2b698f[_0x1341a8(0x23e)+_0x1341a8(0x1fa)]=_0x172a6f['Izmud'],_0x2b698f[_0x1341a8(0x331)+_0x1341a8(0x33c)+'t']=_0x172a6f['RVdVH'];var _0x5b8bbf=document[_0x1341a8(0xa3)+'eElem'+_0x1341a8(0x2b3)](_0x172a6f['zvYlp']);_0x5b8bbf['class'+_0x1341a8(0x1fa)]=_0x172a6f['YvaRY'],_0x5b8bbf['textC'+_0x1341a8(0x33c)+'t']=_0x172a6f[_0x1341a8(0x125)],_0x1f6b04[_0x1341a8(0x4ac)+'d'](_0x2b698f,_0x5b8bbf);var _0x44de36=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)](_0x1341a8(0xac)+'n');_0x44de36[_0x1341a8(0x3bd)]=_0x1341a8(0xac)+'n',_0x44de36[_0x1341a8(0x23e)+'Name']='mn-cl'+_0x1341a8(0x466),_0x44de36[_0x1341a8(0x5c1)]=_0x1341a8(0xeb),_0x44de36[_0x1341a8(0x3b8)+'HTML']='<svg\x20'+'viewB'+'ox=\x220'+_0x1341a8(0x61b)+'\x2024\x22>'+'<path'+_0x1341a8(0x499)+_0x1341a8(0x2ef)+'2\x2012M'+_0x1341a8(0x1c3)+'6\x2018\x22'+_0x1341a8(0x296)+_0x1341a8(0x3d9),_0x44de36[_0x1341a8(0x423)+'ck']=()=>_0x1714aa(![]),_0x2003a0[_0x1341a8(0x4ac)+'d'](_0x1f6b04,_0x44de36);var _0x3a4d24=document['creat'+_0x1341a8(0xcd)+_0x1341a8(0x2b3)]('div');_0x3a4d24[_0x1341a8(0x23e)+_0x1341a8(0x1fa)]=_0x172a6f[_0x1341a8(0x44d)],_0x58086d[_0x1341a8(0x4ac)+'d'](_0x2003a0,_0x3a4d24),_0x336078[_0x1341a8(0x4ac)+'d'](_0x1d3858,_0x58086d);var _0x58bab1=new Map();for(var _0x53069c of _0x3d26bf){var _0x3022ed=document[_0x1341a8(0xa3)+_0x1341a8(0xcd)+_0x1341a8(0x2b3)](_0x172a6f[_0x1341a8(0x262)]);_0x3022ed[_0x1341a8(0x3bd)]='butto'+'n',_0x3022ed['class'+_0x1341a8(0x1fa)]=_0x1341a8(0x476)+'b',_0x3022ed['title']=_0x53069c['label'],_0x3022ed[_0x1341a8(0x3b8)+'HTML']=_0x172a6f[_0x1341a8(0x5e8)](_0x1341a8(0x47c)+'l>'+_0x53069c['label'],_0x1341a8(0x34b)+'ll>'),_0x3022ed[_0x1341a8(0x423)+'ck']=(_0x3563d3=>()=>_0x676dea(_0x3563d3))(_0x53069c['id']),_0x58bab1['set'](_0x53069c['id'],_0x3022ed),_0x1d3858['appen'+_0x1341a8(0x57e)+'d'](_0x3022ed);}function _0x676dea(_0x4580fe){var _0x5e6dfd=_0x1341a8,_0x1bd654=('0|4|5'+'|3|1|'+'2')['split']('|'),_0x57237c=0x1*0x1f33+0x22b+0x10af*-0x2;while(!![]){switch(_0x1bd654[_0x57237c++]){case'0':_0x4f1d8d[_0x5e6dfd(0x1ae)]=_0x4580fe;continue;case'1':for(var [_0x502fb6,_0x396f30]of _0x58bab1)_0x396f30[_0x5e6dfd(0x23e)+'List']['toggl'+'e'](_0xb9b369[_0x5e6dfd(0x459)],_0xb9b369[_0x5e6dfd(0x55c)](_0x502fb6,_0x4580fe));continue;case'2':_0x3a4d24['repla'+_0x5e6dfd(0x568)+_0x5e6dfd(0x4e6)](..._0xb9b369['FKDcg'](_0x21fd0b,_0x4580fe));continue;case'3':_0x2b698f[_0x5e6dfd(0x331)+_0x5e6dfd(0x33c)+'t']=_0x5e6dfd(0x13d)+_0x5e6dfd(0x29c)+_0x5e6dfd(0xce)+_0x4fad3c['label'];continue;case'4':_0x4cdd76();continue;case'5':var _0x4fad3c=_0x3d26bf[_0x5e6dfd(0x316)](_0x49a5d8=>_0x49a5d8['id']===_0x4580fe)||_0x3d26bf[-0xc07*0x3+0x18db+-0x1*-0xb3a];continue;}break;}}return _0x172a6f[_0x1341a8(0x356)](_0x676dea,_0x4f1d8d['cat']||'comba'+'t'),setInterval(()=>{var _0x1ee3dd=_0x1341a8;if(!_0x57447f)return;var _0x3059a7=_0x3a4d24[_0x1ee3dd(0x1a3)+_0x1ee3dd(0x16d)];for(var _0x3ca8fb=-0x1*0x1a3f+0x249+0x17f6;_0xb9b369[_0x1ee3dd(0x325)](_0x3ca8fb,_0x3059a7['lengt'+'h']);_0x3ca8fb++){var _0x4c6c1f=_0x3059a7[_0x3ca8fb][_0x1ee3dd(0x456)+_0x1ee3dd(0x231)+_0x1ee3dd(0x398)](_0xb9b369[_0x1ee3dd(0x53d)]);_0x4c6c1f&&(_0xb9b369['nmQMZ'](_0x4c6c1f['textC'+'onten'+'t']['index'+'Of'](_0x1ee3dd(0x484)),-0x235c+0x34e+-0xb*-0x2ea)||_0x4c6c1f[_0x1ee3dd(0x331)+'onten'+'t']['index'+'Of'](_0xb9b369['XxEYF'])===0x6e7*-0x1+0x15d*0x6+-0x147)&&(_0x4c6c1f['textC'+'onten'+'t']=_0x3ca21b['safeM'+'ode']?'SAFE\x20'+_0x1ee3dd(0x5db)+'-\x20ove'+_0x1ee3dd(0x9e)+'only,'+_0x1ee3dd(0x588)+'ooks\x20'+_0x1ee3dd(0x481)+'ad\x20to'+_0x1ee3dd(0x3b2)+')':_0x3ca21b['uwmk']?_0xb9b369[_0x1ee3dd(0x111)](_0xb9b369['imtxm'](_0xb9b369[_0x1ee3dd(0xbe)](_0xb9b369[_0x1ee3dd(0x35c)](_0xb9b369['hZsxA']+(_0x3ca21b[_0x1ee3dd(0x530)+_0x1ee3dd(0x315)]?_0xb9b369[_0x1ee3dd(0x411)](_0x3ca21b[_0x1ee3dd(0x530)+'Ok']+'/',_0x3ca21b[_0x1ee3dd(0x530)+_0x1ee3dd(0x315)])+(_0x1ee3dd(0x386)+'s'):_0x1ee3dd(0x592)+'ks\x20ar'+_0x1ee3dd(0x4e2)+_0x1ee3dd(0x348)+_0x1ee3dd(0x4fa)),_0xb9b369[_0x1ee3dd(0x2f8)]),_0x3ca21b[_0x1ee3dd(0x3b7)+'oaded']?'loade'+'d':_0xb9b369['rWEfl']),_0xb9b369[_0x1ee3dd(0x1b9)])+(_0x3ca21b[_0x1ee3dd(0x1c2)+_0x1ee3dd(0x266)]?_0x1ee3dd(0x29b):_0xb9b369[_0x1ee3dd(0x40b)])+_0xb9b369['gfpbE'],_0x3ca21b['movem'+_0x1ee3dd(0x1c4)]?_0x1ee3dd(0x29b):'none')+(_0x3ca21b[_0x1ee3dd(0x5eb)+_0x1ee3dd(0xdd)]?'\x20|\x20ER'+'R:\x20'+_0x3ca21b[_0x1ee3dd(0x5eb)+_0x1ee3dd(0xdd)]:''):_0x1ee3dd(0x1af)+_0x1ee3dd(0x109)+_0x1ee3dd(0xc1)+'overl'+'ay\x20on'+_0x1ee3dd(0x313)+_0x1ee3dd(0x3aa)+'all\x20t'+'he\x20us'+_0x1ee3dd(0x5e2)+_0x1ee3dd(0x351));}},-0x228a+0x3d*0x38+-0x36*-0x77),_0x336078;}var _0x30a2ea=_0x590272(0x157)+_0x590272(0x3bb)+_0x590272(0x4a9)+_0x590272(0x539)+_0x590272(0x349)+';\x20}\x0a\x20'+_0x590272(0x28f)+'{\x20box'+'-sizi'+_0x590272(0x464)+'order'+_0x590272(0x61f)+'\x20marg'+_0x590272(0x531)+_0x590272(0x5ad)+_0x590272(0x104)+_0x590272(0x49e)+_0x590272(0x1e6)+'r\x22,\x20\x22'+_0x590272(0x3be)+'\x20UI\x22,'+_0x590272(0x5bd)+'em-ui'+_0x590272(0x3c8)+'s-ser'+_0x590272(0x29a)+'\x0a\x20\x20\x20\x20'+_0x590272(0x236)+_0x590272(0x50d)+_0x590272(0x473)+'ition'+_0x590272(0x4d7)+'olute'+';\x20rig'+'ht:\x202'+'4px;\x20'+'botto'+'m:\x2024'+_0x590272(0x596)+_0x590272(0x460)+_0x590272(0x5fc)+_0x590272(0xf2)+_0x590272(0x42e)+_0x590272(0x388)+'vw\x20-\x20'+'48px)'+_0x590272(0x32b)+'x-hei'+'ght:\x20'+'min(4'+_0x590272(0x297)+'\x20calc'+'(100v'+_0x590272(0x113)+_0x590272(0xb1)+_0x590272(0x42a)+_0x590272(0x2f3)+_0x590272(0x372)+_0x590272(0x126)+_0x590272(0x292)+_0x590272(0x1d6)+_0x590272(0x31a)+_0x590272(0x17c)+_0x590272(0x190)+'px;\x20b'+'order'+_0x590272(0x13e)+_0x590272(0x34c)+'2px;\x20'+_0x590272(0x27c)+'er-ev'+_0x590272(0x17f)+'\x20auto'+_0x590272(0x42a)+_0x590272(0x3a1)+_0x590272(0x3a6)+_0x590272(0xc3)+'rgba('+_0x590272(0x392)+_0x590272(0x43e)+_0x590272(0x154)+_0x590272(0x4f2)+'rop-f'+'ilter'+_0x590272(0x4f0)+_0x590272(0x567)+_0x590272(0x49c)+_0x590272(0x1dc)+_0x590272(0xd7)+'%);\x20-'+'webki'+_0x590272(0x185)+'kdrop'+_0x590272(0x522)+'er:\x20b'+_0x590272(0x2a3)+_0x590272(0x23c)+_0x590272(0x1ef)+_0x590272(0x305)+'50%);'+'\x0a\x20\x20\x20\x20'+_0x590272(0x55e)+'-shad'+_0x590272(0x489)+'\x200\x200\x20'+_0x590272(0x39b)+_0x590272(0x1a2)+'55,25'+'5,255'+_0x590272(0x578)+',\x20ins'+_0x590272(0x129)+_0x590272(0x541)+'\x20rgba'+_0x590272(0xa8)+_0x590272(0x1b1)+_0x590272(0x302)+'5),\x200'+_0x590272(0x597)+'\x2080px'+_0x590272(0x258)+'(0,0,'+_0x590272(0x425)+_0x590272(0x20b)+'\x20\x20\x20\x20o'+_0x590272(0x491)+_0x590272(0x416)+'\x20tran'+_0x590272(0x49f)+_0x590272(0x595)+_0x590272(0x2fe)+_0x590272(0x377)+_0x590272(0x50e)+_0x590272(0x27c)+_0x590272(0x18c)+_0x590272(0x17f)+'\x20none'+';\x20tra'+_0x590272(0x3c5)+'on:\x20o'+_0x590272(0x491)+_0x590272(0x598)+_0x590272(0x51a)+'e,\x20tr'+'ansfo'+_0x590272(0xcc)+'5s\x20cu'+_0x590272(0x555)+_0x590272(0x248)+'(.22,'+'1,.36'+_0x590272(0x35a)+_0x590272(0x2f6)+'\x20colo'+'r:\x20#f'+_0x590272(0x609)+_0x590272(0x5ad)+_0x590272(0x21a)+'e:\x2013'+'px;\x20}'+_0x590272(0x157)+'.mn-p'+'anel.'+_0x590272(0x4de)+_0x590272(0x99)+_0x590272(0x271)+':\x201;\x20'+_0x590272(0x103)+'form:'+_0x590272(0x308)+';\x20poi'+_0x590272(0x347)+_0x590272(0x580)+_0x590272(0x4a5)+_0x590272(0x340)+_0x590272(0x157)+'.mn-s'+_0x590272(0x19f)+'\x20disp'+'lay:\x20'+_0x590272(0x5cf)+_0x590272(0x163)+'-dire'+_0x590272(0x4f3)+':\x20col'+_0x590272(0x362)+_0x590272(0x265)+_0x590272(0x36e)+_0x590272(0x134)+_0x590272(0xad)+'\x20gap:'+'\x204px;'+_0x590272(0x5d6)+_0x590272(0x4f4)+_0x590272(0x10c)+'lex:\x20'+_0x590272(0x2d2)+_0x590272(0x2e5)+_0x590272(0x202)+'12px\x20'+('0;\x20bo'+_0x590272(0x1ed)+_0x590272(0x396)+_0x590272(0xcf)+_0x590272(0x14a)+'\x20\x20\x20\x20\x20'+'backg'+'round'+_0x590272(0x162)+_0x590272(0x498)+_0x590272(0x5c7)+_0x590272(0x5e0)+_0x590272(0x35d)+_0x590272(0x329)+'shado'+_0x590272(0x569)+'set\x200'+'\x200\x200\x20'+_0x590272(0x39b)+'gba(2'+'55,25'+_0x590272(0x59b)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x590272(0x4a8)+'ispla'+'y:\x20gr'+'id;\x20p'+'lace-'+'items'+_0x590272(0x4db)+_0x590272(0x273)+'width'+':\x2032p'+'x;\x20he'+'ight:'+_0x590272(0x304)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x590272(0x1fb)+_0x590272(0x1d7)+'\x20{\x20wi'+'dth:\x20'+'25px;'+'\x20heig'+_0x590272(0xe5)+'5px;\x20'+'overf'+'low:\x20'+'visib'+'le;\x20f'+'ilter'+':\x20dro'+'p-sha'+_0x590272(0x4cf)+'\x200\x204p'+_0x590272(0x2d5)+_0x590272(0x498)+_0x590272(0x5dc)+_0x590272(0x151)+_0x590272(0x576)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x590272(0x155)+_0x590272(0x5a1)+_0x590272(0xf4)+_0x590272(0x5cf)+_0x590272(0xe2)+_0x590272(0x19d)+_0x590272(0x5c4)+_0x590272(0x51e)+';\x20jus'+_0x590272(0x483)+_0x590272(0x3b6)+_0x590272(0x5c0)+_0x590272(0x51e)+';\x20wid'+_0x590272(0x60e)+_0x590272(0x28e)+'heigh'+_0x590272(0x1f2)+_0x590272(0x3fd)+_0x590272(0x4e3)+_0x590272(0x534)+_0x590272(0x37d)+'r-rad'+_0x590272(0x479)+'10px;'+_0x590272(0x157)+_0x590272(0x477)+_0x590272(0x450)+_0x590272(0x4f8)+_0x590272(0x26a)+_0x590272(0x3d8)+';\x20col'+_0x590272(0x122)+'gba(2'+'46,23'+_0x590272(0x4dc)+_0x590272(0x532)+'\x20curs'+_0x590272(0x30a)+'ointe'+_0x590272(0x3e8)+_0x590272(0x46b)+_0x590272(0x4f5)+_0x590272(0x1ce)+'font-'+'weigh'+_0x590272(0x5d3)+_0x590272(0x4a1)+_0x590272(0x284)+_0x590272(0x476)+'b:hov'+'er\x20{\x20'+_0x590272(0x47e)+_0x590272(0x162)+'a(246'+',238,'+'242,.'+_0x590272(0x176)+_0x590272(0x157)+_0x590272(0x5fb)+_0x590272(0x119)+_0x590272(0x17b)+_0x590272(0xc8)+'or:\x20#'+'ff6b9'+'d;\x20ba'+_0x590272(0x3a6)+_0x590272(0xc3)+'rgba('+'255,1'+_0x590272(0x205)+_0x590272(0xd6)+';\x20}\x0a\x20'+_0x590272(0x1b7)+_0x590272(0x550)+_0x590272(0x556)+_0x590272(0x24c)+'1;\x20mi'+_0x590272(0x35e)+_0x590272(0x509)+';\x20dis'+_0x590272(0x1de)+'\x20flex'+';\x20fle'+'x-dir'+'ectio'+_0x590272(0x575)+_0x590272(0x114)+_0x590272(0x14c)+'\x20\x20.mn'+_0x590272(0x220)+_0x590272(0x59a)+'play:'+'\x20flex'+';\x20ali'+'gn-it'+'ems:\x20'+'cente'+_0x590272(0xd4)+'p:\x2012'+_0x590272(0x31a)+'addin'+_0x590272(0x17e)+'x\x206px'+_0x590272(0x1a8)+_0x590272(0x51b)+_0x590272(0x358)+_0x590272(0x21f)+'none;'+_0x590272(0x14c)+_0x590272(0x359)+_0x590272(0x337)+_0x590272(0x27d)+_0x590272(0x1cb)+_0x590272(0x594)+_0x590272(0x3d1)+'dth:\x20'+_0x590272(0x4a1)+'\x20\x20\x20\x20.'+'mn-h\x20'+'{\x20fon'+'t-siz'+'e:\x2017'+_0x590272(0x10c)+'ont-w'+'eight'+':\x20650'+_0x590272(0x31c)+'\x20\x20\x20.m'+'n-sub'+_0x590272(0x420)+_0x590272(0x46b)+'ze:\x201'+'1px;\x20'+_0x590272(0x238))+(_0x590272(0x5fd)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20{'+'\x20disp'+'lay:\x20'+'grid;'+_0x590272(0x524)+'e-ite'+_0x590272(0x5c4)+_0x590272(0x51e)+';\x20wid'+_0x590272(0x41a)+_0x590272(0x120)+'heigh'+_0x590272(0xf1)+'px;\x20b'+'order'+_0x590272(0x534)+_0x590272(0x37d)+_0x590272(0x5a7)+_0x590272(0x479)+'8px;\x20'+_0x590272(0x375)+'round'+_0x590272(0x595)+_0x590272(0x3f1)+'ent;\x20'+_0x590272(0x47e)+_0x590272(0x52a)+'erit;'+'\x20opac'+_0x590272(0x343)+'.45;\x20'+_0x590272(0x260)+_0x590272(0x233)+_0x590272(0x2ee)+_0x590272(0x31c)+_0x590272(0x1b7)+'n-clo'+'se:ho'+'ver\x20{'+_0x590272(0x544)+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x590272(0xc3)+'rgba('+'255,2'+'55,25'+'5,.05'+_0x590272(0x2a0)+_0x590272(0x284)+_0x590272(0x3eb)+_0x590272(0x390)+'vg\x20{\x20'+_0x590272(0x618)+':\x2014p'+'x;\x20he'+'ight:'+'\x2014px'+_0x590272(0x48a)+_0x590272(0x526)+_0x590272(0x5e9)+'troke'+_0x590272(0x328)+_0x590272(0x515)+_0x590272(0x533)+'\x20stro'+_0x590272(0x212)+'dth:\x20'+_0x590272(0x58c)+'roke-'+_0x590272(0x9a)+_0x590272(0x591)+'ound;'+_0x590272(0x14c)+'\x20\x20.mn'+_0x590272(0x603)+'\x20{\x20fl'+'ex:\x201'+_0x590272(0x152)+'-heig'+_0x590272(0x24d)+';\x20ove'+_0x590272(0x1b5)+'-y:\x20a'+_0x590272(0x3ee)+_0x590272(0x357)+_0x590272(0x378)+_0x590272(0x19c)+_0x590272(0xb9)+_0x590272(0x43f)+_0x590272(0xff)+'olumn'+_0x590272(0x50c)+_0x590272(0x3f7)+'auto-'+'fill,'+'\x20minm'+'ax(25'+_0x590272(0x1b3)+_0x590272(0x55d)+_0x590272(0x1e5)+'gn-it'+_0x590272(0x175)+_0x590272(0x538)+_0x590272(0x1e5)+_0x590272(0x25d)+'ntent'+_0x590272(0x2fc)+_0x590272(0xca)+_0x590272(0x188)+_0x590272(0x1ce)+'paddi'+'ng:\x200'+'\x204px\x20'+_0x590272(0x581)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+'s::-w'+'ebkit'+_0x590272(0x56f)+'llbar'+_0x590272(0x33b)+'dth:\x20'+'8px;\x20'+_0x590272(0x4d5)+'\x20.mn-'+'cols:'+_0x590272(0x46a)+'kit-s'+'croll'+'bar-t'+_0x590272(0x18a)+_0x590272(0x228)+_0x590272(0x450)+_0x590272(0x92)+'gba(2'+_0x590272(0x20e)+_0x590272(0x59b)+_0x590272(0x5a5)+';\x20bor'+_0x590272(0x492)+_0x590272(0x5a8)+_0x590272(0x54e)+';\x20}\x0a\x20'+_0x590272(0x50b)+_0x590272(0x136)+'d\x20{\x20b'+_0x590272(0x4e3)+_0x590272(0x13e)+_0x590272(0x2b9)+'2px;\x20'+_0x590272(0x375)+_0x590272(0x12f)+_0x590272(0x162)+'a(255'+',255,'+'255,.'+'025);'+_0x590272(0x329)+'shado'+'w:\x20in'+_0x590272(0x426)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+_0x590272(0x59b)+_0x590272(0x471)+';\x20}\x0a\x20'+_0x590272(0x50b)+_0x590272(0x136)+_0x590272(0x59e)+_0x590272(0x228)+_0x590272(0x450)+'nd:\x20r'+_0x590272(0x1a2)+'55,25'+_0x590272(0x59b)+',.04)'+';\x20box'+_0x590272(0x160)+_0x590272(0x516)+_0x590272(0x3e2)+'0\x200\x200'+_0x590272(0x562)+_0x590272(0xd1)+_0x590272(0x508)+'07,15'+_0x590272(0xa4)+');\x20}\x0a'+_0x590272(0x284)+_0x590272(0x606)+_0x590272(0x521)+'ad\x20{\x20'+'displ')+(_0x590272(0x27e)+'lex;\x20'+_0x590272(0x265)+_0x590272(0x36e)+'s:\x20ce'+_0x590272(0xad)+_0x590272(0x39e)+_0x590272(0x28d)+'\x20padd'+_0x590272(0x202)+_0x590272(0xf8)+'12px;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-card'+_0x590272(0x337)+_0x590272(0x3bf)+_0x590272(0x24c)+_0x590272(0x2be)+'n-wid'+'th:\x200'+_0x590272(0x31c)+'\x20\x20\x20.s'+'k-car'+_0x590272(0x5ae)+'le\x20st'+'rong\x20'+_0x590272(0x462)+_0x590272(0x21a)+_0x590272(0x5b1)+_0x590272(0x10c)+'ont-w'+_0x590272(0x490)+_0x590272(0x336)+_0x590272(0x22b)+_0x590272(0x122)+_0x590272(0x1a2)+_0x590272(0x3af)+_0x590272(0x4dc)+',.45)'+_0x590272(0x31c)+'\x20\x20\x20.s'+_0x590272(0x136)+'d.on\x20'+_0x590272(0x457)+_0x590272(0x4b5)+'itle\x20'+'stron'+'g\x20{\x20c'+'olor:'+_0x590272(0x20f)+_0x590272(0x1e3)+_0x590272(0x4d5)+'\x20.sk-'+_0x590272(0xed)+'\x20{\x20pa'+'dding'+_0x590272(0x18f)+_0x590272(0xdb)+'0px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x590272(0xbc)+_0x590272(0x420)+'nt-si'+_0x590272(0x4f5)+'1px;\x20'+_0x590272(0x238)+_0x590272(0x5fd)+_0x590272(0x5ba)+'rgin-'+_0x590272(0x56e)+'m:\x206p'+_0x590272(0x242)+'\x20\x20\x20\x20.'+_0x590272(0x226)+'l\x20{\x20d'+'ispla'+_0x590272(0x221)+'ex;\x20a'+_0x590272(0x300)+'items'+_0x590272(0x4db)+'ter;\x20'+'gap:\x20'+_0x590272(0x120)+'paddi'+_0x590272(0x2a2)+_0x590272(0x18e)+'\x20font'+_0x590272(0x2a9)+_0x590272(0x461)+_0x590272(0x15c)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'label'+_0x590272(0x34d)+'ex:\x201'+_0x590272(0x22b)+'or:\x20r'+_0x590272(0x1a2)+_0x590272(0x3af)+_0x590272(0x4dc)+_0x590272(0x45a)+_0x590272(0x31c)+'\x20\x20\x20.s'+'k-hin'+_0x590272(0x363)+'ispla'+_0x590272(0x4a3)+_0x590272(0x536)+'font-'+'size:'+'\x2010px'+';\x20opa'+_0x590272(0x9d)+_0x590272(0x1be)+_0x590272(0x4d5)+_0x590272(0x3d0)+_0x590272(0x144)+_0x590272(0x56d)+'ositi'+'on:\x20r'+_0x590272(0x249)+'ve;\x20w'+_0x590272(0x460)+_0x590272(0x106)+_0x590272(0x27f)+'ght:\x20'+_0x590272(0x510)+'\x20bord'+'er:\x200'+_0x590272(0x4ff)+_0x590272(0x492)+_0x590272(0x5a8)+_0x590272(0x621)+_0x590272(0x22c)+_0x590272(0x3a6)+_0x590272(0xc3)+'rgba('+_0x590272(0x1b1)+'55,25'+_0x590272(0x44c)+_0x590272(0x48f)+_0x590272(0x195)+_0x590272(0x440)+_0x590272(0x273)+'flex:'+_0x590272(0x308)+_0x590272(0x31c)+_0x590272(0x50b)+_0x590272(0x4df)+_0x590272(0x289)+'after'+'\x20{\x20co'+'ntent'+_0x590272(0x4a0)+_0x590272(0x53b)+_0x590272(0x293)+'\x20abso'+'lute;'+_0x590272(0x1e1)+_0x590272(0xb8)+'\x20left'+':\x203px'+_0x590272(0x2a5)+_0x590272(0x5f4)+_0x590272(0x123)+'eight'+':\x208px'+_0x590272(0x4ff)+_0x590272(0x492)+_0x590272(0x5a8)+_0x590272(0x141)+';\x20bac'+_0x590272(0x450)+_0x590272(0x92)+_0x590272(0x1a2)+'55,25'+_0x590272(0x59b)+',.25)'+_0x590272(0x5ef)+_0x590272(0x3c5)+'on:\x20l'+'eft\x20.'+_0x590272(0x46e)+_0x590272(0x583)+'ound\x20'+_0x590272(0x54b)+'}\x0a\x20\x20\x20'+_0x590272(0x3d0)+_0x590272(0x144)+'h[ari'+'a-che'+'cked='+_0x590272(0x525)+_0x590272(0x400)+_0x590272(0x375)+_0x590272(0x12f)+_0x590272(0x162))+(_0x590272(0x498)+_0x590272(0x5dc)+'157,.'+'25);\x20'+_0x590272(0x4d5)+_0x590272(0x3d0)+_0x590272(0x144)+_0x590272(0x147)+'a-che'+_0x590272(0x58b)+'\x22true'+_0x590272(0x566)+_0x590272(0x5a4)+_0x590272(0x213)+_0x590272(0x611)+_0x590272(0x3fd)+'ackgr'+'ound:'+_0x590272(0x2f5)+'b9d;\x20'+_0x590272(0x4d5)+'\x20.sk-'+_0x590272(0x517)+'\x20{\x20ba'+_0x590272(0x3a6)+_0x590272(0xc3)+_0x590272(0xd1)+_0x590272(0x1b1)+_0x590272(0x20e)+'5,.03'+_0x590272(0x1bd)+_0x590272(0x4e3)+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+_0x590272(0x17d)+_0x590272(0x47e)+_0x590272(0x45f)+'eef2;'+'\x20padd'+'ing:\x20'+_0x590272(0x58d)+'px;\x20f'+'ont-s'+'ize:\x20'+_0x590272(0x546)+_0x590272(0x5b3)+'tline'+':\x20non'+'e;\x20bo'+'x-sha'+_0x590272(0x3fb)+'inset'+_0x590272(0x1f5)+_0x590272(0x2dd)+_0x590272(0x258)+'(255,'+'255,2'+'55,.0'+'5);\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x590272(0x5e6)+_0x590272(0x2da)+_0x590272(0x34e)+'ackgr'+_0x590272(0xd3)+'\x20#221'+_0x590272(0x360)+_0x590272(0x4d5)+'\x20.sk-'+_0x590272(0x25a)+_0x590272(0x26c)+_0x590272(0x372)+_0x590272(0x126)+'x;\x20al'+'ign-i'+'tems:'+'\x20cent'+_0x590272(0x497)+_0x590272(0x3ae)+_0x590272(0x183)+'\x0a\x20\x20\x20\x20'+_0x590272(0x243)+_0x590272(0x406)+'\x20{\x20-w'+_0x590272(0x614)+_0x590272(0x5a3)+_0x590272(0x4b7)+_0x590272(0x385)+_0x590272(0x10e)+'ppear'+_0x590272(0x2b2)+_0x590272(0x308)+';\x20wid'+'th:\x209'+'0px;\x20'+'heigh'+_0x590272(0x5aa)+_0x590272(0x22c)+'ckgro'+_0x590272(0xc3)+_0x590272(0x103)+_0x590272(0x31d)+_0x590272(0x2f7)+'\x20\x20\x20\x20.'+'sk-sl'+'ider:'+':-web'+_0x590272(0x12b)+_0x590272(0x406)+_0x590272(0x218)+'able-'+_0x590272(0x42b)+'\x20{\x20he'+_0x590272(0x601)+_0x590272(0x44b)+_0x590272(0x5b2)+'er-ra'+'dius:'+_0x590272(0x44b)+'\x20back'+_0x590272(0x19b)+'d:\x20li'+_0x590272(0x2e8)+_0x590272(0xc9)+'ent(#'+_0x590272(0x5ac)+_0x590272(0x501)+_0x590272(0x445)+_0x590272(0x247)+_0x590272(0x5f5)+_0x590272(0x285)+',\x2050%'+_0x590272(0x355)+_0x590272(0xf7)+_0x590272(0xe4)+_0x590272(0x2a4)+_0x590272(0x56c)+_0x590272(0x59b)+',255,'+_0x590272(0x502)+'\x20}\x0a\x20\x20'+_0x590272(0x9b)+'-slid'+'er::-'+'webki'+_0x590272(0x1a7)+_0x590272(0x1d4)+_0x590272(0x18a)+_0x590272(0x1b2)+'bkit-'+_0x590272(0x339)+'rance'+_0x590272(0x204)+'e;\x20wi'+_0x590272(0x5b7)+'6px;\x20'+_0x590272(0x38a)+_0x590272(0x121)+_0x590272(0x3ed)+'rgin-'+_0x590272(0x3f2)+_0x590272(0x1fc)+_0x590272(0x5b2)+_0x590272(0x366)+_0x590272(0xb3)+_0x590272(0x432)+'\x20back'+_0x590272(0x19b)+_0x590272(0x5ee)+'f6b9d'+';\x20}\x0a\x20'+_0x590272(0x50b)+_0x590272(0x4b1)+_0x590272(0x420)+'nt-si'+_0x590272(0x4f5)+'1px;\x20'+'font-'+'weigh'+_0x590272(0x5a6)+_0x590272(0x44f)+_0x590272(0x35e)+_0x590272(0x41a)+'8px;\x20'+'text-'+_0x590272(0x265)+_0x590272(0x579)+_0x590272(0x1ca)+_0x590272(0x291)+_0x590272(0x258)+_0x590272(0x605)+_0x590272(0x57b)+'42,.8'+_0x590272(0x2a0)+_0x590272(0x284)+_0x590272(0x2a1)+'lor\x20{')+(_0x590272(0x5d6)+'h:\x2034'+_0x590272(0x123)+_0x590272(0x490)+_0x590272(0x405)+_0x590272(0x4e7)+_0x590272(0x5f8)+'\x200;\x20b'+_0x590272(0x4e3)+'-radi'+_0x590272(0x48e)+'px;\x20b'+'ackgr'+_0x590272(0xd3)+_0x590272(0x308)+_0x590272(0x3ea)+_0x590272(0x4e5)+'\x200;\x20c'+'ursor'+':\x20poi'+_0x590272(0xad)+_0x590272(0x14c)+_0x590272(0x9b)+'-note'+'\x20{\x20fo'+_0x590272(0x46b)+'ze:\x201'+'1px;\x20'+_0x590272(0x47e)+_0x590272(0x162)+_0x590272(0x43a)+',238,'+'242,.'+_0x590272(0x150)+_0x590272(0x17c)+'g:\x202p'+'x\x200;\x20'+_0x590272(0x4d5)+'\x20.sk-'+_0x590272(0x3a4)+_0x590272(0x1d3)+_0x590272(0x8f)+'r:\x20#f'+'f7a93'+';\x20}\x0a\x20'+_0x590272(0x50b)+_0x590272(0x4c8)+'\x20{\x20al'+'ign-s'+_0x590272(0x422)+'flex-'+_0x590272(0x538)+_0x590272(0x4ff)+_0x590272(0x251)+_0x590272(0x4aa)+'rder-'+_0x590272(0x396)+_0x590272(0x28a)+_0x590272(0x376)+'dding'+_0x590272(0x44a)+_0x590272(0x280)+_0x590272(0x180)+'kgrou'+_0x590272(0xfb)+'ff6b9'+_0x590272(0xa0)+_0x590272(0x403)+_0x590272(0x547)+_0x590272(0x167)+'-size'+_0x590272(0x461)+'5px;\x20'+'font-'+_0x590272(0x32f)+_0x590272(0x5d3)+_0x590272(0x2e0)+_0x590272(0x195)+_0x590272(0x440)+_0x590272(0x273)+_0x590272(0x4d5)+_0x590272(0x3d0)+'btn:h'+'over\x20'+_0x590272(0x4bd)+_0x590272(0x5d0)+'brigh'+_0x590272(0x615)+_0x590272(0x602)+_0x590272(0x31c)+_0x590272(0x413));window['addEv'+_0x590272(0x607)+_0x590272(0x4bc)+'r']('keydo'+'wn',_0x43c73e=>{var _0x34fc14=_0x590272;_0x172a6f['BeCTF'](_0x43c73e['code'],_0x172a6f[_0x34fc14(0x439)])&&(_0x43c73e[_0x34fc14(0x560)+'ntDef'+_0x34fc14(0x290)](),_0x9a6ad2());},!![]);var _0x10f935=document['creat'+_0x590272(0xcd)+_0x590272(0x2b3)](_0x590272(0x404));_0x10f935['style'][_0x590272(0x39f)+'xt']=_0x590272(0x3b1)+_0x590272(0x26d)+_0x590272(0x321)+_0x590272(0x394)+'2px;r'+_0x590272(0x601)+_0x590272(0x4c6)+_0x590272(0x5c2)+'ex:21'+_0x590272(0x414)+_0x590272(0x306)+'ursor'+_0x590272(0x255)+'ter;w'+'idth:'+'26px;'+'heigh'+_0x590272(0x34f)+'x;opa'+_0x590272(0x9d)+'0.5;t'+'ransi'+'tion:'+'opaci'+_0x590272(0x43c)+'2s;po'+'inter'+'-even'+_0x590272(0x15a)+_0x590272(0x572)+_0x590272(0x51c)+_0x590272(0x275)+'shado'+_0x590272(0x332)+_0x590272(0x3db)+_0x590272(0xd1)+_0x590272(0x508)+'07,15'+'7,0.7'+'))',_0x10f935[_0x590272(0x3b8)+_0x590272(0x49a)]=_0x590272(0x504)+_0x590272(0xba)+_0x590272(0x278)+_0x590272(0x61b)+_0x590272(0x143)+_0x590272(0x383)+_0x590272(0x499)+'12\x2021'+_0x590272(0x3cc)+'-2.5-'+_0x590272(0x2ad)+_0x590272(0x5d7)+'5\x200-2'+_0x590272(0x5c9)+'8-4.5'+_0x590272(0x436)+_0x590272(0x2a8)+_0x590272(0x482)+_0x590272(0x454)+_0x590272(0x229)+_0x590272(0x287)+_0x590272(0x40f)+_0x590272(0x451)+'\x22none'+'\x22\x20str'+_0x590272(0x619)+_0x590272(0x2bf)+_0x590272(0x379)+'troke'+'-widt'+'h=\x222\x22'+_0x590272(0x38e)+_0x590272(0x12d)+_0x590272(0x31f)+'=\x22rou'+_0x590272(0x33d)+_0x590272(0x3c4)+_0x590272(0x485)+'join='+'\x22roun'+'d\x22/><'+_0x590272(0x368)+_0x590272(0x52c)+_0x590272(0x30e)+_0x590272(0x389)+_0x590272(0x5bc)+_0x590272(0x1f9)+_0x590272(0x232)+'=\x22#ff'+_0x590272(0x3d3)+_0x590272(0x296)+_0x590272(0x3d9),_0x10f935[_0x590272(0x5c1)]=_0x590272(0x13d)+'a\x20Kou'+'r',_0x10f935[_0x590272(0x433)+_0x590272(0x165)+'er']=()=>_0x10f935[_0x590272(0x4f9)][_0x590272(0x238)+'ty']='1',_0x10f935[_0x590272(0x433)+'selea'+'ve']=()=>_0x10f935[_0x590272(0x4f9)][_0x590272(0x238)+'ty']=_0x590272(0x47a),_0x10f935['oncli'+'ck']=_0x5b766b=>{var _0x5e8855=_0x590272;_0x5b766b['stopP'+'ropag'+_0x5e8855(0x4ae)](),_0x172a6f['GNnvX'](_0x9a6ad2);},document[_0x590272(0x295)][_0x590272(0x4ac)+'dChil'+'d'](_0x10f935),_0x5c01d1(),requestAnimationFrame(_0x123c30),console['log'](_0x590272(0x60f)+'ra-ko'+_0x590272(0x32e)+_0x590272(0x4d0)+_0x590272(0x326)+'\x20UWMK'+':',_0x3ca21b[_0x590272(0x2d7)]);});})()));
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
