// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.0.7
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
function _0xae57(){var _0x37b251=['ohb4ksK','zKTpsNG','t0HLywW','C2XPy2u','lc4WnsK','Dc1Myw0','yMfYlxq','y3jVC3m','icaUBw4','zsGXnta','yMfJA2C','ksaWida','oYbMBgu','tK5LzMy','svL1t24','ndSGFqO','DhLSzq','B3rOAw4','CMrLCJO','Exf6CKO','ufbktNm','Ee1JuMi','lca1mcu','lxnSAwq','ywrPDxm','AY1IDg4','Fdv8n3W','vLDnyK0','AxrSzsa','y3jLyxq','y2SP','zw51ihi','Agn5Au0','D2Plz3K','yxbJAgy','y29TCgW','D0jSDxi','A291CI0','BgvUz3q','q3vZDg8','C2STy28','Aw5JBhu','ywWGBwu','kc4YmIW','C2v0ida','zsbZzxi','nZmYndrPCvLxA04','DdOGnZa','BM1bCNC','zu9UsKy','y29Kzq','tg9JywW','nNb4oYa','z29KicG','iKLUDgu','BIbZAwC','Dg9WoIa','lwHVCa','lMLVig0','AxnPyMW','rxDHEMm','BNrLCI0','Bg93zxi','C2STy2e','v2LWzsa','A3ndChm','nwmWidm','lM1Ulxa','C2v0x3q','yw5ZzM8','y2fWDhu','zgL1CZO','y2XHC3m','mKTVDNrtDG','uMvJDa','lc4WnIK','yxjNzxq','nxmGy3u','Bw4Ty2W','CMfWAwq','ig5VBMu','zwXty2e','C2v0sxq','nc00lJu','C2v0qxq','FqOGica','yxvSDca','B3jZige','A291CNm','igLMig0','oYbIB3i','zhjVCc0','Dw1UoYa','ys5RB3u','zw1LBNq','r3jHDMK','tu9ersa','sMrIs2W','rg12q20','Ag9VA1a','i2zMzG','DxjH','zxiTCMe','DhjVA2u','mdbTCY4','oYbOzwK','BhKGkhi','ig1PBM0','AwX5oIa','CNnVCJO','B1LLzwu','mNb4oYa','idHWEdS','tKHlzNu','t1fWu0S','qMXVy2S','BM9tChi','mtySmc4','q2LOD3e','BgfJzs0','igHLAwC','rxzVwgu','vMfSDwu','zcbJAg8','BMqGt0G','q1btihi','Bg93oIa','vvrJtvC','igXLzNq','C3rYB24','zwfK','B24Gzxy','r0LizMW','BwLZyW','DYGWida','uNroCe8','zK9YCwy','AxHLzdS','EgnZsgu','ywn0Axy','iduWjtS','iezPCMu','zM9UDa','BwLKzgW','B246ig8','DxjDigG','mtSGyMe','CMLKoYa','Bg9YihS','ide2ChG','lwHLAwC','sgPQuM8','igDHCdO','Bw4Ty28','zw4GDg8','z2jHkdi','BMC6igi','BMqIihm','zwv6zsa','r29Kl2q','DhKGjq','lxnPEMK','ywLSzwq','CfbiwMu','igjVEc0','zxiTzxy','C3bSyxK','A2vZig8','iNrYDwu','DuXewfa','oIbIBhu','CgPosu8','C3bLzwq','lIbuDxi','AwrLCG','zNv6DKO','u2TPChm','B250lxm','ELnJqMG','ChG7igi','zvn0EwW','DgGUsw4','zg9JDw0','CM91BMq','lcbPBNm','B3vUzdO','ugTlrue','DgHLihC','oYbIB3G','AguGzNi','mNWXnhW','CMvHzey','oYbMB24','y3jLzw4','yxa6ide','ChjLDMu','CgfYC2u','DhjPyNu','kdaSmcW','q2DIu3O','AsXZyw4','EKfxufi','lwfWCgu','zwf0CYa','uNvUDgK','oYbQDxm','u2fMzsa','mdCSmtu','Cg5Vz3C','y3nZvgu','zg93kda','AwDUlwK','zJzIowq','v2vHCg8','rwXLBwu','Aw5NoIa','vvjSDfG','zwXHDgK','Ag9VA0m','u2fRDxi','Bgf5oIa','zIbTyxq','zw1ZoIa','Aw5Zzxq','BNrezwy','zgLZCgW','rMjYtNu','Ahq7igm','BLbSyxq','zMLSBfq','y2HdB2W','DwrAA0W','zxjZ','igv4Axq','EtOGyMW','u0fgrq','ida7igi','vxzMBNK','Bw9fEha','rfjIDuW','DhbYEvO','ig1VBwu','ns00idC','Dgv4Dei','EtOGmdS','ihSGy28','sKr5qve','zguSihq','quXoBxK','wLb4B2e','ocK7ih0','ywrK','AwrLCJO','Dgv4Dem','DhbUBhy','mhG2mda','DgHVzca','uMfWAwq','ihDOAwm','BsbJzw4','oIbMBgu','B2X1Dgu','icaGlM0','zJmY','DhjHBNm','m3W0Fde','nsWYntu','vxbszwG','BhrOige','AxrLiee','ywrIBg8','A3nWCK0','iM5VBMu','zM9UDc0','D0jUvLy','rwvuvw8','zwfKB3u','vNvsDu8','ignHy2G','wMvYB2u','cIaGica','oIa5oxa','s2LSBgu','Dg87ih0','yvDRvMu','vvjbx0S','DdSGFqO','x19tquS','B0TAsei','psjYB3u','sufbvLy','DuLhD04','oYb3Awq','swDls3i','ug1fswi','y2L0EtO','sKHws2C','ifvUAxq','oIaXnha','r29Kie0','zNjQwuK','CNLTB1a','ihLVDxi','D3zpAhC','iL0GEYa','AgfPCG','C3DPDgm','zKTWrMG','y2HPBgq','AKrzwwe','Bgv4oIa','DhjPA2u','swyGCMu','CZOGmty','s0P0rNi','ohb4oYa','DMG7EI0','lxrPDgW','De9ysxq','vMvuChK','BNvoBuG','BwvKicG','jsK7ic0','ihSGzgK','ltqTnY4','BK5xB0O','idiWmg0','DgvZDa','lc4WocK','DufewMe','oIbWB2K','vfrUDwC','yLn4svm','C2v0vhi','DgvYo3C','oYbVDMu','AgfZ','igrPC3a','ntuSlJa','D2fYBG','lNnRlw0','oIbUB24','sfjAyuy','BMC6idq','Aw9FmZa','lwjHBNi','lc43nsK','zxi6oI0','ndySmJm','DvvJq3O','wgvNCva','DhKGmc4','nxb4oYa','zcbZzwu','Dg9Y','ndGZnJq','z3jHzgK','CJSGz2e','u2L6zq','yxbWzw4','CgfJAxq','tKHVt3m','B2fJzgK','mdSGBwK','lcbJywW','Bw4TBwe','Aujev0i','vLf4y2W','B3jKzxi','w3nHA3u','Bgf0zwq','vuHWvKm','s2v5vW','uMvJB2K','C2HPzNq','ig1PBIG','EdSGFqO','zhb0zwS','BNnWyxi','DMfSDwu','C3rVCfa','BvPprKC','vw5PDhK','DgLKzvC','CM9ZC2G','C2STy3q','vNncreq','lxbHCMu','DdOXmda','ihjLBg8','CMrrCe8','yMX5lum','Bw4TBg8','oYb1C2u','BsbYAwC','shzUzM4','v2vZt0u','ideWChG','lwv2zw4','rNjHBwu','lKXVy2e','ywXPz24','Fdv8nhW','yw5JztO','mtjWEdS','qKrewui','Bhv0ztS','ktSkica','Eg1eCNO','ocWYndi','B3bLBG','BgfIzwW','tKCGlsa','lK92zxi','ztSGyM8','ignVB2W','rgfUz2u','igP1Bxa','sw5mvu4','mZuSmJq','Aw9FnZi','igfIC28','Fdr8m3W','lc4WncK','DxzWAha','Agf0igq','B25TB3u','idfWEca','tKTJwwK','ywLYlG','CdOGmta','B29Rihi','qxbWBgK','t2PbwNm','yMvS','BIb0Agu','ig1HCMC','DgnOoJO','EvnyDw0','zc10Axq','y2LYy2W','B3bHy2K','ignHBgm','kg92zxi','zxi7igC','C2STzMK','ANrJENm','BgW+','D2LKDgG','oIa4ChG','ywnRz3i','t3DsAwS','sgvtvKO','r2DgswS','oYbHBgK','Be9RA0u','zwvMmJS','zc5VBIa','Dg5LC3m','CePTEvC','DxmGywm','sNvTCca','AcaTidq','y2HtAxO','lIbvC2u','wND6zfG','Bw4TAca','z1zuu2q','mtu2mdG3mNnisNDysW','CZOGoha','zwfKEs4','CgDJz20','tNH1AfO','t2nrtNa','AwvSzca','DdOGoha','zxmGEYa','zNbZ','AwWGC3a','y3K9iJe','mtGGnIa','ywrKAw4','EI1PBMq','lNnRlxm','ida7igm','BwLU','zenOAwW','tuLtu0K','rvHqxq','DgLKzs4','mxb4ihi','zxjYB3i','y2XLyxi','lsbHihm','EYaTD2u','ihWGC2G','zhrOoIa','zMy2yJK','BgvMDa','y0rhD2K','B246igW','ktSGy3u','lJa4ktS','ugXVqwO','EsbKzwy','iJeUnsi','AwvZlG','AeT6uLC','y2fSBa','CgvHDcG','DdOYnNa','wwzTtMe','ugn0','rLzrD2e','ztOGmtm','lMXHC3q','kdeWmhy','CNjVCG','zM9YBxm','DgG6idG','mJu1lc4','BgLUzvC','AguGCMu','q29SB3i','z3jHDMK','yxrPB24','yxrLvge','BNnPDgK','vvDnsW','A2DYB3u','zMyP','CgfNzsa','B2XVCJS','Bg9Hzhm','zgvYlxi','z2fWoIa','i2zMnMi','CgfYzw4','ihbHzgq','sxnLsNK','ihSGzMW','BYbWAwC','qMvNwM8','y3jVBgW','uw9Ts3G','A3nty2e','y2rIA0m','B2reAwu','AvfHtw0','ntuSmJu','DgG6idu','DhvYyxq','EsaUmZu','EYbJB2W','qNfjC04','u2v0r2e','iefmtca','mJu1ldi','BhnjrwG','zg93oIa','zs1PDgu','zxiGEYa','CM9UzYa','BYb0Agu','Dg87zMK','ztOGmtC','C21HBgW','CYbpDMu','zw50oYa','yM91BMq','BvDPtwe','Bg9JAW','D29YAYa','zxrhyw0','zYbJyw4','lw5VDgu','BgfZDeu','igzVCIa','vNLTAuq','rvjYEKK','u0fgrsa','oMHVC3q','ywrKrxy','j3qGC3q','ANvTCfa','qKPXug0','nIa2Bde','nsKSida','DwX0','Dgv4Dee','BMC6ida','igXLyxy','Awy7ih0','zxH0','zsbBrvG','Dc1Iywm','y2TNCM8','DZOGAw4','yK1rAK8','u2vSzwm','mNb4o3i','Aw9U','idnWEdS','zgvZ','u2nHBgu','Cg9Uj3m','Cu5SANe','Cg9ZAxq','zsb3zwe','B1nACwO','DgL2zsa','ChvZAa','tg5UtLa','mwzYksK','mIaXmK0','zw50','C2STBwq','zuvSzw0','vgfRzxm','AwXKigG','tu9Aq2G','BM9UztS','zNrLCIa','vM1oDwG','rwzLyum','sgvPz2G','Aw9F','igvMzMu','CIdIGjqG','vMznsNy','z29KrgK','zKXyte0','zhbY','yxa6ihi','ztSGD2K','zsb7igy','yxnZAwC','tgLZDa','CM9Rzxm','ywDLigq','tMfTzq','AfnOywq','nYWUmsK','C2fRDxi','s1bRugq','AYbVBI4','C3bSAxq','ndiSlJG','nhW1Fde','rwLjzeW','BgLUzw4','Bwf4','yMeOmJu','Dc1ZAxO','u0TWBee','z1zewKW','BIb7igy','zwjRAxq','BMq6ihi','swvSDLa','AvPIsMG','lwnHCMq','zuv4Ca','zxjSyxK','A2v5Dxa','zMLSBd0','wwXHqwm','idaGmJq','B2TLpsi','rgLZywi','yw5LBc4','B29RCYa','z2v0qxq','BwvUDca','vKnZvuG','oYb9cIa','AY12ywW','yxK6igy','mxW2Fdi','DhLWzq','z3jVDw4','EKLuzKO','Aw5Mqw0','C2f2zq','AhvTyIa','Bg9Y','pc9ZBwe','EdSGyM8','icaUC2S','ihSGlxC','C3rHCNq','qsblt1u','CMLZAYa','ihnOB3q','zwfSDgG','zw50zxi','z3LIywm','CdOGmti','y29UDgu','B250zw4','C2STBwi','ywqU','zwqGyw0','ihrYyw4','yxjPys0','AwDUyxq','Aw5KzxG','igzSzxG','DdOGnNa','sgvHBhq','BwvsDw4','tM8Gu3a','ignVBg8','Bw8GDg8','vu5xvw0','DgvTCgW','vwLguee','C3rLBMu','s2v5uW','AdOGnJi','z2fTzuW','mtu3lc4','yxj0lG','BI13Awq','wMjTsvi','C2L6ztO','Axb0kq','DgvY','EeDoAue','oIaXms4','zMHuAfe','C2vSzwm','B3C6ida','Be1VDgK','CMqTAgu','wMfZs1q','yJLKoYa','BM9Uzq','CM9YEw0','Bg9Hzc4','z2v0sxq','mcWUntu','AguGzgu','FdiWFdm','BgWGBwu','v3j0u2S','DMLHifm','ihn0CM8','zxi6ida','ChzKyK8','yxK6igC','r2j6v1e','EYbSzwy','ihrVide','ldi1nsW','yKrXz3e','mxb4oYa','B3b0Aw8','yxb0Dxi','AxrLBxm','icnMzJy','Dw5Kzwq','mhb4oYa','DdOGmtu','BwvZC2e','zMLSBfm','B25JBgK','CM5twhq','y2f0','sKrMALu','Ag9ZDg4','idi0iJ4','igjHy2S','yNPszNm','igvUDgK','DgvYigm','Bw92zw0','EKfdCgC','l3jHCgK','yMvNAw4','ywXSihq','BMf2','zxzLBNq','t1vsx18','D3jYzMm','nMi5zci','Bcb7igq','B2fKzwq','zvzcrxe','BhrO','Dg9Nz2W','zMLSBcW','EdSGAgu','tM8GuMu','rhnswMS','ALzYyu0','igjHBM4','yNHqv24','B3G9iJa','mcaXChG','AMzKBNa','mJqWiey','C3rLCa','DhjHy2S','oIbZDge','A2rYB3a','CMvHzhK','vgLJAW','CM9WywC','ie92zxi','mJa0mJi4C29VqvvA','C2f0Dxi','rgLL','C0P1t0u','CMfKAxu','yMLJlwi','ktSGFqO','kdeUmsK','CgXHEtO','mJqSmtC','idrWEdS','igq9iK0','CMvJDa','AY1Jyxi','wwPsy2O','D21PwKe','lxnPEMu','i2zMyJm','y2fSBhm','igf1Dg8','y29SCZO','ic5ZAY0','yw1L','s2HMuMe','DgLVBJO','rMzpzeW','lxnJCM8','nsK7ih0','zxG6ide','igTVDxi','CMDIysG','y2vUDgu','DhrPBMC','ieDLDfy','v1P0s0K','oIbYz2i','Dcb7igq','B25JAge','zxG6mJe','EMu6ide','DMLZDwe','icaG','vgnIyKm','BJOGy28','AcbVBMu','tKDYrwG','ihWGz2e','i2zMzJS','mJvWEdS','DMC+','yxHuugq','zdOGi2y','B25Lige','zxqGmca','Bw4TDg8','yKLiEfy','mxW2FdC','C0LMs08','rxHW','De5Vzgu','idaGmca','wvngqwC','oYbWB2K','odaSmtK','B3n0zMK','B3zLCMW','uMzvCgi','CMLNAhq','CgzXz0K','ic40oYa','BhbOAvy','u3bLzwq','ignLBNq','C2v0uhi','Ag9VA3m','B25SEsW','Dg9WoJe','y0TsrhO','BNrLBNq','mJzWEdS','Dhm6yxu','C25JDgm','rgjgz2C','EKfIC2G','zwXMoIa','uJOG','CLj0B3e','rwfJAca','CMrLCI0','sw9Svfu','ms4XlJa','AwDODdO','DgnOihq','z2LMEq','t0zgigi','DxrVoYa','ihWGrvi','igjVCMq','uMvMAwW','B3rZlG','yxjJ','zYb7igm','nYWWlJG','B3i6ihi','AwXnB3q','Bw91C2u','uNnXtuK','lwXPBMu','BvbLzNq','CNrPzgu','BMDL','C2zVCM0','A2L0lxm','y29SB3i','Ag9VA0C','C2v0','sxnhCM8','v0Dwvey','zsWGDhi','C2u6Ag8','mJfuqMLrq3O','AxrJAa','C3bHBG','q2fjtNK','vNHsuKC','AxHpsKu','ig9YigS','lwrPCMu','zsbTAxm','rMXsz2W','CxvLCNK','z24Ty28','CgfKzgK','rMvMz1a','zw5HyMW','wvnyC1i','lcbZyw4','wKjiAxy','AwrHDgu','DgvTlxu','y0PcwNu','B2LSicG','vufKzLO','ChG7cIa','mtSGBwK','A2vizwe','ysGYntu','C2HVD24','DLnYvM8','BerhDwq','zcbNCMu','ndSGBwe','B3vUDgu','zxjYihS','v1zZshC','zdOGBgK','zs5bCha','AwnRihm','oIaJzJy','D2HLCMu','qxnZzw0','v0fttsa','BNnSyxq','CMqTDgK','tw92zq','lYbhCMe','BI1SB2C','z24TAxq','Awr0Aa','phn2zYa','y2TiqNm','A3nqB3m','sw5PDgK','CYbnB3y','ztOGBM8','wMr4y2K','D2n2CMq','zwLUC3q','mhWXnNW','ELfOze0','CMvSB2e','mNW1Fda','v2vItw8','oIa2nta','ihSGzM8','wevcBwq','yxKGB24','s2v5qq','idrWEca','ide7ig0','s2v5C3q','BMnL','B3vUzca','DhLqy3q','vvDnsYa','ywz0zxi','mciGCJ0','DgvYoYa','lxnLCMK','vhLTBfy','B25PBNa','ig1HEsa','AxmGAg8','DxLQzeu','mdSGFqO','Fdf8mhW','C3rYAw4','D0nVBg8','lMrSBa','mdi1ktS','ruDiEfO','CMXHEsa','Bw92zvq','Bg9HzgK','idGWChG','A1vHuLi','lwL0zw0','CMvHza','q0fovKe','oIbKCM8','CY1Zzxi','B2rL','AtmY','icaGic4','B1jLy28','C2fMzu0','zgTPDa','icnMzMy','Aw9UoMy','nJTWB2K','ndHWEcK','r2HAsxe','quzxCMG','B3nWywm','oIaZChG','B2rjwgG','zMuGBw8','u2PeEhK','EuPjDxC','x19ZywS','igrHBwe','zdSGyMe','EuvUz2K','y2TLzd0','z3jPzdS','C2HVB3q','ihrVCdO','ig9U','psiJzMy','yNjPz2G','EcbYz2i','AwrLihS','ltiUnsa','Axr5oIa','BM90zs4','vePqBNC','C2STAgK','Eg5fv2G','Bwf0y2G','D21SAMO','Aw1Llca','CNq7igC','zgfTywC','C2HHzg8','FdeZFde','zMXLEdS','B2LS','ywqGDg8','BNzRugm','DxjZB3i','BNqGAge','igzVBNq','zeHMq1u','oNbVAw4','4Ocuig5Via','Bw4TDge','qM90Dg8','ueXbv0i','C3zNiJ4','BNrLCJS','zw50CW','tw9Kzsa','Aw5WDxq','Bg9NBY0','BhvYkdi','EdSGyMe','DhmGCgW','z0vQwfC','u2rXEK0','BK5YD3K','ihSGB3a','igzPBgW','lJjZoYa','ywjSzs0','oIaIiJS','yMfJA2q','tM8Gzw4','wKjdsfi','BdOGAw4','igfSAwC','DcbHihq','y29TyMe','zxjZy3i','khjLBg8','zxPPzxi','y2n1CMe','ihbSywm','BI1ZDwi','BwrLC2m','AY1ZD2K','nYWWlJm','iNjVDw4','vNvlu20','DMvYlxy','yxvSDa','yuTVDxi','AePzwMi','v3jHCha','ifvxtuS','AxvZoIa','y0jzDxe','DNCGlsa','mNm7Cg8','B2LUDgu','rLbtig8','sfrnta','BNq6igm','BgLUzvq','BMqGBwe','B2r5','ihWGBw8','zxnJ','ldePoWO','zsXTB24','uvnuCei','BgLKzxi','mJmWmev2ruzmzW','s3nltg8','ihn5C3q','BLbPA0S','BMCGzM8','sgLKzxm','AuXgDuq','zMXLEdO','ic5TBI0','C2STC2W','mcWWlJG','zwCGzMe','DgG6idK','zwz0ic4','z2DSzwq','ihSGywW','BNnLDca','sKL2DKm','y0vfuLO','vuHTBhe','igzVDxi','lNnRlwm','BMu7ihm','z2H0oIa','Ee13wxq','zw51','u3bHy2u','zgrPBMC','zw50rwW','BM93','y2fWtw8','B290zxi','rNbTtem','BwuG','DxDTAW','A2v5C3q','DgXLCW','B0nwteq','lZ48l3m','lwLVxYO','reHiqu8','yLnsuLG','zciVpJW','u3jYBxa','Dg9W','yLrSvKS','Bg9N','CMfUy2u','zgL2','ENf1EeK','AgvSza','oIaWoYa','Fdn8mNW','zxiGC2W','BMvJyxa','CMeTA28','oIa0ChG','BePdtwS','AMjLqNe','yxrSEsa','DMvYihS','rLzyzwO','zMX5tMy','BgzxD04','zhrOoJe','Aw4TD2K','DhK6ic4','BgLovgW','Ec1KAxi','CI52mq','zw50tgK','B3vUzdS','tgvNAw8','BNqTC2K','t09SD3e','ihrOzsa','A2v5zg8','mcWWlJy','oYbIywm','zg93BG','ocKPoYa','B3bLCNq','BM8Gy2G','Dw5KoIa','ENzyyNK','B250lxC','BMn0Aw8','y29PBa','zvzHBhu','EYbMB24','EcKGC2e','DxjDig0','ysGYndy','DgXPBMu','CfrQsgy','wxPuAwC','ChGPoYa','EdSGywW','BguGAwy','ChG7ih0','AuLdDgC','tLbwu0e','sMfODvy','D2vPz2G','C3rYB2S','CKXMEMG','mteWnty4zeTfs0fY','DMLLD0i','vg90ywW','ihjNyMe','AfTHCMK','DtmY','z29K','yxrJAgu','EYbKAxm','nsaWlti','EMzXtgC','sw5Zzxi','Ahq6idi','B3b6DKC','mtjWEca','icaGlNm','lsbVDMu','idqGnc4','CMvU','wwP5tfq','AxnWBge','odbWEcW','CM9Wlwy','renHyxC','B2X1Bw4','yM9KEq','odiPoYa','t2LLAKC','ChG7igG','C3r5Bgu','ldiZocW','ugf0Aa','CML0zxm','B3zLCIa','mtiGmJe','lxrVCca','oc00lJu','yxa6idG','BhmGysa','v01ozue','Bw4TC2K','ChG7igy','oIa2mda','yw5Jzs4','DgG6idi','odqYnen0z0jlAa','zvvqAKG','lxnHBNm','seT6tNK','A1PeuLm','owqIihm','igrLzMe','rMLLBgq','te1c','C3rPBgW','CMvMAxG','u2HHCNa','ihSGAgu','yxGOmJu','zNvSBhm','zwLNAhq','yJPOB3y','wwHftvi','oIbJB2W','DgLVBI4','DgvYoIa','phnTywW','CMuGkfm','mJqYlc4','igHVB2S','vMLZDwe','AM9PBJ0','mJC2mtC4DwvwzK9w','zvjHDgu','lwzPBhq','tgf0A1G','B25LigK','lc40nsK','nsK7iha','ie1VDMu','BerPzsW','igH1CNq','Aw5Uzxi','ih0kica','sej2Bxq','A3mGyxi','mgy1oYa','ieaG','DcWGCMC','sw5ZDge','mtf8mtK','A1Hkvxu','D2L0Aca','zwXK','A2HmseG','q2z5qNO','s2zpww0','ywXSig8','vLH6BgW','nZaWia','DMfS','zdSGy28','qunuAYa','yw1Hz2u','t1nOB28','yM9Yzgu','q3rzBuq','DMCGEYa','ufbnyvm','Bg9Hzgu','CMDPBI0','D0DVsgy','oIb0CMe','BM9szwm','CMfUz2u','phbHDgG','Awr0AdO','lNnRlwy','mtrWEdS','oYbJB2W','zZOGnNa','ltiUns0','Dg9Wrgu','zxj5idi','ig5LDMu','tNjJqwK','sNP2ELi','teLwCLO','yw5Uywi','mti0otjRz1j3Ce8','CZPUB24','D2vIA2K','Fdf8m3W','wePqq0C','BgLUzwm','ndC0odm','Ag9VA04','oIaZmNa','BsbVBIa','nJaWide','y2vdAgK','AgvPz2G','zIXZExm','EdSGB3u','qxL4Dva','mtbvBKTpyLu','ldeWnYW','rw5NAw4','CJOGi2y','Dwfuuuy','BMq6icm','zw50CZO','z2v0rwW','icmYmJe','ktSGBwe','DgL0Bgu','mJu1lde','icbIywm','Dw5PDhK','Aw50zxi','z2uUiei','B2XVCJO','B3nLihm','zMLSzw4','AxrPywW','yNv0Dg8','odi2mxbnDfvxCG','BgLJyxq','CI1Yywq','ChG7iha','D3zgzgG','oIaWide','BhrLCJO','B21WC0W','qwrIBg8','Acb7iha','idmYChG','y2uGB3y','zgvSzxq','AwvSza','AwXS','BgLNBG','CMfPC2u','C3f4B3m','zxzLBIa','ywn0A0S','CMvZDg8','u1rkqMO','BMLUzW','mJuPoYa','q0DsAvO','zMLSBa','nxm0idi','BgrYzw4','CIiSici','D3rhCxi','DgLMEs0','mJm4ldi','zLrZCxa','BMuUqxa'];_0xae57=function(){return _0x37b251;};return _0xae57();}function _0x4420(_0x532e3f,_0x44e77d){_0x532e3f=_0x532e3f-(-0x1173+0xf03*0x1+0x398);var _0x55fe03=_0xae57();var _0x49ade1=_0x55fe03[_0x532e3f];if(_0x4420['dLGokO']===undefined){var _0x25d904=function(_0x3c7d63){var _0x4cf9b3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5494c6='',_0x1bdf15='';for(var _0x28649a=-0x2520+0x1c*0xeb+0xb6c,_0x3b9137,_0x3aa30e,_0x16fd50=0x1fc3+0x6*-0x421+-0x6fd;_0x3aa30e=_0x3c7d63['charAt'](_0x16fd50++);~_0x3aa30e&&(_0x3b9137=_0x28649a%(0x113*0xd+-0x4f7+0x5*-0x1cc)?_0x3b9137*(-0x18f+-0x1*-0x16e4+-0x1515)+_0x3aa30e:_0x3aa30e,_0x28649a++%(0x253a+0x1adb+-0x4011))?_0x5494c6+=String['fromCharCode'](0xacb+0x147b+-0x17*0x151&_0x3b9137>>(-(-0x19cf+-0x1546+0x2f17)*_0x28649a&0x212c*-0x1+0x2c*-0x2b+0x2*0x144b)):0x1196*0x2+-0x1cbf+-0x66d){_0x3aa30e=_0x4cf9b3['indexOf'](_0x3aa30e);}for(var _0x386fec=-0x1fcd+-0x162c+0x1*0x35f9,_0x11f07a=_0x5494c6['length'];_0x386fec<_0x11f07a;_0x386fec++){_0x1bdf15+='%'+('00'+_0x5494c6['charCodeAt'](_0x386fec)['toString'](0x328*0x5+0x7*0x3c1+-0x33b*0xd))['slice'](-(0xfe*0xb+0x2122+-0x6*0x757));}return decodeURIComponent(_0x1bdf15);};_0x4420['FBNafr']=_0x25d904,_0x4420['CazPYi']={},_0x4420['dLGokO']=!![];}var _0x37a2fd=_0x55fe03[0x1f63+0x439+0xd4*-0x2b],_0x4051fb=_0x532e3f+_0x37a2fd,_0xa585f=_0x4420['CazPYi'][_0x4051fb];return!_0xa585f?(_0x49ade1=_0x4420['FBNafr'](_0x49ade1),_0x4420['CazPYi'][_0x4051fb]=_0x49ade1):_0x49ade1=_0xa585f,_0x49ade1;}(function(_0xd59f75,_0x12cded){var _0x2fd83e=_0x4420,_0x1b5049=_0xd59f75();while(!![]){try{var _0x450c42=-parseInt(_0x2fd83e(0x58e))/(0x1*0x1d9+-0xfa1+-0xdc9*-0x1)*(parseInt(_0x2fd83e(0x4c5))/(-0x158e+0x742*0x2+-0x52*-0x16))+-parseInt(_0x2fd83e(0x47d))/(-0xf9c+-0x1776+-0x3*-0xd07)+parseInt(_0x2fd83e(0x573))/(-0x1483+0x10d*-0x1a+0x2fd9)*(parseInt(_0x2fd83e(0x50e))/(0x21ee*-0x1+0x179c+0xa57))+-parseInt(_0x2fd83e(0x2c3))/(0x1645*0x1+0x4*0x788+-0x345f)*(-parseInt(_0x2fd83e(0x33b))/(0x1b0b*0x1+0x2*-0x3b+0x8da*-0x3))+-parseInt(_0x2fd83e(0x16d))/(-0x1*-0x405+0x1*0x102a+-0x1427)+parseInt(_0x2fd83e(0x4aa))/(0x1946+-0x18ff+0x1*-0x3e)*(-parseInt(_0x2fd83e(0x413))/(-0x1669+-0xb2b+-0x14b*-0x1a))+-parseInt(_0x2fd83e(0x523))/(-0x17*-0x43+0x73*-0x47+0x52f*0x5)*(-parseInt(_0x2fd83e(0x4fe))/(0x1dba*0x1+0x12e*-0x1+-0x80*0x39));if(_0x450c42===_0x12cded)break;else _0x1b5049['push'](_0x1b5049['shift']());}catch(_0x5250a3){_0x1b5049['push'](_0x1b5049['shift']());}}}(_0xae57,0x115f4*-0x4+-0x2860e+0x9dfce),((()=>{'use strict';var _0x4638a1=_0x4420,_0x57d498={'NPVSA':_0x4638a1(0x21c)+_0x4638a1(0x5a2)+_0x4638a1(0x458),'CaINy':'unkno'+'wn','PloAj':function(_0x1953d6,_0x531782){return _0x1953d6+_0x531782;},'KEzTL':'zfqLg','NxuhZ':function(_0x518b14,_0x3a97fc){return _0x518b14>_0x3a97fc;},'opzvG':'UnfEs','hKzRW':function(_0x1185c9,_0x60dd2c,_0xfbec52,_0x1ee875){return _0x1185c9(_0x60dd2c,_0xfbec52,_0x1ee875);},'khLHH':function(_0x2e759c,_0x5eb3f1){return _0x2e759c*_0x5eb3f1;},'bSRRX':function(_0x23f3c0,_0x441b29){return _0x23f3c0!==_0x441b29;},'WZtKI':'[saku'+'ra-ko'+'ur]\x20h'+_0x4638a1(0x148)+_0x4638a1(0x41e)+'iled:','iQaMm':function(_0x13347e,_0x2df925,_0x3ca268,_0x4ec3a2,_0x3812e0){return _0x13347e(_0x2df925,_0x3ca268,_0x4ec3a2,_0x3812e0);},'Jpcda':_0x4638a1(0x3b8)+_0x4638a1(0x62d),'zScBh':function(_0x368bd9,_0x44de02){return _0x368bd9===_0x44de02;},'VymiD':_0x4638a1(0x2a1)+_0x4638a1(0x3db),'TTnug':function(_0x53ca1f,_0x36ab2d){return _0x53ca1f(_0x36ab2d);},'YSFAg':function(_0x2858eb,_0x11628f){return _0x2858eb*_0x11628f;},'WMNeA':function(_0x137f26,_0x4f0c7a){return _0x137f26*_0x4f0c7a;},'ZBCHR':function(_0x39f50f,_0x5a169){return _0x39f50f-_0x5a169;},'KNicz':function(_0x17c00e,_0x69843b){return _0x17c00e/_0x69843b;},'VQxcl':function(_0x8e7aaf,_0xdf2be3){return _0x8e7aaf+_0xdf2be3;},'tpnlv':function(_0x474020,_0x5201b3){return _0x474020(_0x5201b3);},'NrcAi':function(_0x57ec43,_0xcb2f30){return _0x57ec43/_0xcb2f30;},'FpmLC':function(_0x167de6,_0x2af361){return _0x167de6/_0x2af361;},'sSemm':function(_0x4c01dc,_0x6a0c4d){return _0x4c01dc<_0x6a0c4d;},'SdqzM':_0x4638a1(0x278),'rnSXt':'f32','IolTU':function(_0x15a655,_0x3fea5f){return _0x15a655!==_0x3fea5f;},'PkKEA':function(_0x201d9b,_0x3716cf,_0x55d012,_0x4c1a57,_0x4d6554){return _0x201d9b(_0x3716cf,_0x55d012,_0x4c1a57,_0x4d6554);},'sqxos':function(_0x5d5c4c,_0xce9742){return _0x5d5c4c!==_0xce9742;},'DjSZM':'cJBZu','ERrzI':function(_0x18004e,_0x55d088,_0x142a40,_0x1efb74,_0x58043c){return _0x18004e(_0x55d088,_0x142a40,_0x1efb74,_0x58043c);},'SKplA':_0x4638a1(0x3a1),'MOZCh':function(_0x4ef063,_0x1a154f){return _0x4ef063!==_0x1a154f;},'gVDZL':_0x4638a1(0x3c6),'MVkZA':'KVfpb','gEjXW':function(_0x1c7237,_0x4d2bbf,_0x539d58,_0x2b4ce9,_0x31bc31){return _0x1c7237(_0x4d2bbf,_0x539d58,_0x2b4ce9,_0x31bc31);},'WGVTF':_0x4638a1(0x319),'yJIuw':_0x4638a1(0x6be),'sIfKO':function(_0x2b3651,_0x1e86ec){return _0x2b3651+_0x1e86ec;},'lphiV':_0x4638a1(0x32c)+_0x4638a1(0x462),'wBnVV':'blur','ckHBs':function(_0x2982d0,_0x2dbb13){return _0x2982d0>_0x2dbb13;},'IelvP':function(_0x5392c2,_0x29e01a){return _0x5392c2===_0x29e01a;},'EfeaC':function(_0x57272e,_0x2eead8){return _0x57272e===_0x2eead8;},'ZwzdX':function(_0x1ba2d1){return _0x1ba2d1();},'cLDgj':'DOMCo'+_0x4638a1(0x311)+'Loade'+'d','bfzEl':function(_0x3f5c38,_0x17e72e){return _0x3f5c38>=_0x17e72e;},'pgcgm':'Hcino','Srrmp':_0x4638a1(0x21c)+_0x4638a1(0x5a2)+'r.ui.'+'v1','mPeft':_0x4638a1(0x467),'wvOhw':_0x4638a1(0x340),'InLUN':_0x4638a1(0x259)+'check'+'ed','VfMJv':'switc'+'h','jDYYa':_0x4638a1(0x522)+'n','eOnJF':'sk-sw'+_0x4638a1(0x33c),'lDGud':_0x4638a1(0x443),'CfyBz':'sk-ra'+_0x4638a1(0x331),'YSXsR':_0x4638a1(0x3dd),'lltkC':_0x4638a1(0x41c)+_0x4638a1(0x5f3),'YXBRY':'sk-va'+'l','DHHAO':_0x4638a1(0x156)+_0x4638a1(0x4da),'wNiyw':_0x4638a1(0x376),'IJVBE':'xkNZt','YqIZO':'PpqIn','CgWwq':function(_0x77d92){return _0x77d92();},'kZDRS':function(_0x16ce35,_0x2da2a7){return _0x16ce35===_0x2da2a7;},'rorym':'xxUGk','PDMAY':_0x4638a1(0x263),'yUVOk':_0x4638a1(0x3c3)+'nt','cnwqn':'sk-ct'+'l','pnogw':function(_0x1a5464,_0x3c9084){return _0x1a5464+_0x3c9084;},'nPikK':'\x20err','rLfzh':'none','KsKLo':function(_0x22b360,_0x1ff626){return _0x22b360*_0x1ff626;},'cDGwi':'px\x20ui'+_0x4638a1(0x4ac)+'-seri'+_0x4638a1(0x50b)+_0x4638a1(0x34e)+_0x4638a1(0x60d)+_0x4638a1(0x39f)+'if','bdNFr':function(_0x2118e7,_0x4b885a){return _0x2118e7/_0x4b885a;},'bTlVK':function(_0x534210,_0x27e62a){return _0x534210+_0x27e62a;},'baPVE':function(_0x6548ff,_0x2a569b){return _0x6548ff/_0x2a569b;},'pkHNF':_0x4638a1(0x267),'ySXum':'KeyD','elSca':function(_0x1fcf13,_0x1ba886,_0x1b85a3,_0x31b329,_0x5b5f94,_0x3bf8d4,_0x565265,_0x3470b5){return _0x1fcf13(_0x1ba886,_0x1b85a3,_0x31b329,_0x5b5f94,_0x3bf8d4,_0x565265,_0x3470b5);},'VWMbM':function(_0x16bc87,_0x17b974){return _0x16bc87||_0x17b974;},'GaOsI':_0x4638a1(0x508)+'2px\x20u'+'i-mon'+_0x4638a1(0x3ac)+_0x4638a1(0x410)+_0x4638a1(0x3ac)+'e','pJmyW':_0x4638a1(0x43f),'GbzWQ':function(_0x8c2194,_0x1832db,_0x40c87a){return _0x8c2194(_0x1832db,_0x40c87a);},'oVrYr':_0x4638a1(0x2e1)+_0x4638a1(0x519)+_0x4638a1(0x302)+_0x4638a1(0x460)+')','FfOdL':'sk-ca'+_0x4638a1(0x366)+'tle','gVTSd':function(_0x2d14b6,_0x554c18){return _0x2d14b6+_0x554c18;},'wmiZA':'0\x20hoo'+'ks\x20ar'+_0x4638a1(0x686)+'all\x20o'+'ff)','bzRfs':_0x4638a1(0x188)+_0x4638a1(0x432)+'\x20','XLWcO':'held','uvphp':'Apply','KSeLn':'godDi'+'e','uHPJR':function(_0x5a283f,_0x223559){return _0x5a283f===_0x223559;},'aEDaf':'cLCzy','AyxuP':_0x4638a1(0x540),'YlaAc':_0x4638a1(0x38e),'GIHfl':_0x4638a1(0x385)+_0x4638a1(0x1d2)+'\x20','XEBUZ':_0x4638a1(0x45b)+'nPlat'+_0x4638a1(0x19f)+_0x4638a1(0x136)+_0x4638a1(0x182)+_0x4638a1(0x6ba)+_0x4638a1(0x276)+'on','rdQpO':_0x4638a1(0x3f0)+'t','kAcQy':_0x4638a1(0x67d)+_0x4638a1(0x1ae)+'\x20stil'+'l\x20dra'+'in,\x20t'+_0x4638a1(0x27f)+'creme'+_0x4638a1(0x3d1)+'ppens'+'\x20else'+_0x4638a1(0x362)+'.','oXcPu':'move','QAMpK':_0x4638a1(0x166)+'%','IAAVV':_0x4638a1(0x583)+'\x20=\x20fl'+'oaty','IYuOn':'WASD\x20'+'+\x20LMB'+'/RMB\x20'+'+\x20Spa'+_0x4638a1(0x52e)+_0x4638a1(0x230)+'.','iLFuD':function(_0x577a7f,_0x4202d5,_0x24801b,_0x5da368,_0x3b0f64,_0x5b69c9){return _0x577a7f(_0x4202d5,_0x24801b,_0x5da368,_0x3b0f64,_0x5b69c9);},'lJCMk':_0x4638a1(0x56c)+_0x4638a1(0x648)+_0x4638a1(0x2a0)+_0x4638a1(0x6c5)+_0x4638a1(0x146),'jtczs':_0x4638a1(0x613)+_0x4638a1(0x3dc)+_0x4638a1(0x154)+'lay\x20o'+'nly)','EGHxZ':_0x4638a1(0x58b)+_0x4638a1(0x4c0)+_0x4638a1(0x1d6)+'eRunn'+'ing\x20+'+'\x20IsGr'+'ounde'+'d)','BqIsN':_0x4638a1(0x465)+_0x4638a1(0x610)+_0x4638a1(0x1d5)+'witho'+'ut\x20th'+'is','tOXIt':function(_0x1e1ae9,_0x37fb94){return _0x1e1ae9!==_0x37fb94;},'zACpg':'mn-pa'+'nel','lVCdZ':'mn-h','oYeee':'small','vSrVo':_0x4638a1(0x450),'NMROJ':_0x4638a1(0x21c)+'a-ui','dxMxY':_0x4638a1(0x133),'RsqMI':_0x4638a1(0x4c3)+'l','GgFIk':'misc','iZbJh':'safe','eUPjH':_0x4638a1(0x45f)+'wn','OjAZs':'posit'+_0x4638a1(0x3a7)+_0x4638a1(0x5ce)+_0x4638a1(0x30f)+_0x4638a1(0x1f1)+'ight:'+_0x4638a1(0x12d)+_0x4638a1(0x17b)+_0x4638a1(0x2e9)+_0x4638a1(0x504)+'646;c'+'ursor'+_0x4638a1(0x3d4)+_0x4638a1(0x693)+_0x4638a1(0x4f1)+_0x4638a1(0x312)+_0x4638a1(0x50a)+_0x4638a1(0x197)+'x;opa'+_0x4638a1(0x66c)+'0.5;t'+'ransi'+_0x4638a1(0x2db)+'opaci'+_0x4638a1(0x6a4)+_0x4638a1(0x405)+_0x4638a1(0x51c)+_0x4638a1(0x6d3)+_0x4638a1(0x313)+_0x4638a1(0x1cd)+_0x4638a1(0x529)+_0x4638a1(0x5a0)+_0x4638a1(0x3ca)+_0x4638a1(0x5cb)+_0x4638a1(0x37f)+'rgba('+_0x4638a1(0x519)+'07,15'+'7,0.7'+'))','YhEMR':function(_0xa78f5c){return _0xa78f5c();},'nuNmH':_0x4638a1(0x6b6)+'ra-ko'+_0x4638a1(0x46e)+_0x4638a1(0x564)+_0x4638a1(0x16f)+_0x4638a1(0x401)+':','xMwYt':_0x4638a1(0x1b1)+'9d','FefgP':_0x4638a1(0x2d4)+'c6','Pprnc':function(_0x5dbdad,_0x5775ca){return _0x5dbdad===_0x5775ca;},'iKxtr':'error','BJqPm':function(_0x484e93,_0x382b85){return _0x484e93===_0x382b85;},'CfKlp':_0x4638a1(0x5a7),'LzGWn':'OHeal'+'th','JDfjU':_0x4638a1(0x4ee)+'oil','wvFdh':'capSh'+_0x4638a1(0x432),'oKZHB':_0x4638a1(0x431)+'ve','pjNIO':'Legio'+_0x4638a1(0x629)+'forms'+_0x4638a1(0x136)+_0x4638a1(0x182)+'Movem'+'ent'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x4638a1(0x68c)](location[_0x4638a1(0x29b)+'ame']||''))return;if(window['__SAK'+_0x4638a1(0x662)+_0x4638a1(0x2a8)])return;window[_0x4638a1(0x664)+_0x4638a1(0x662)+_0x4638a1(0x2a8)]=!![];var _0x439006=_0x57d498[_0x4638a1(0x42b)],_0x1949bc=_0x57d498[_0x4638a1(0x348)],_0x5571aa={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x4638a1(0x1b1)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0xd79d98={..._0x5571aa};try{Object[_0x4638a1(0x215)+'n'](_0xd79d98,JSON['parse'](localStorage[_0x4638a1(0x27d)+'em']('sakur'+_0x4638a1(0x5a2)+'r.v1')||'{}'));}catch(_0x45a7db){}function _0x13b853(){var _0x5a62a9=_0x4638a1;try{localStorage[_0x5a62a9(0x597)+'em'](_0x57d498[_0x5a62a9(0x478)],JSON[_0x5a62a9(0x391)+_0x5a62a9(0x320)](_0xd79d98));}catch(_0x2b339b){}}var _0x2d6dab={'uwmk':!!window['Unity'+_0x4638a1(0x379)+_0x4638a1(0x3a5)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0xd79d98[_0x4638a1(0x3a4)+_0x4638a1(0x3a0)],'lastError':''};try{_0x57d498['Pprnc']('GHbnV','OrQIh')?(_0x34ede0['fps']=_0x3abd7b,_0x1fb67c()):window[_0x4638a1(0x1df)+_0x4638a1(0x459)+'stene'+'r'](_0x57d498['iKxtr'],_0x5ebee6=>{var _0x50fce8=_0x4638a1;try{var _0xb4d2f7=_0x5ebee6&&(_0x5ebee6['messa'+'ge']||_0x5ebee6[_0x50fce8(0x184)]&&_0x5ebee6['error'][_0x50fce8(0x295)+'ge'])||_0x57d498[_0x50fce8(0x33e)];if(_0x5ebee6&&_0x5ebee6['filen'+_0x50fce8(0x2d9)])_0xb4d2f7+=_0x57d498['PloAj'](_0x50fce8(0x4d4)+String(_0x5ebee6[_0x50fce8(0x520)+_0x50fce8(0x2d9)])[_0x50fce8(0x21f)]('/')['pop'](),':')+(_0x5ebee6[_0x50fce8(0x223)+'o']||'?');_0x2d6dab['lastE'+'rror']=String(_0xb4d2f7)[_0x50fce8(0x548)](-0xe98+-0x15f2+-0x248a*-0x1,-0x388*-0x1+-0x2b*-0x67+-0x1435);}catch(_0x4948a0){}});}catch(_0xbeda18){}var _0x3b2dea=null,_0x3f1a0c=null,_0x7389ff={},_0xe128a=[],_0x4ba2e3=[],_0x12e6fb=new Map();function _0x56c246(_0x388f4d,_0x3c17be){var _0x43b746=_0x4638a1,_0x3f9f3c={'SkvZb':function(_0x28ba79,_0x573cdd){return _0x28ba79+_0x573cdd;}};if(_0x57d498['KEzTL']===_0x43b746(0x487)){if(!_0x3c17be||_0x388f4d[_0x43b746(0x56e)+_0x43b746(0x1f4)](_0x3c17be)||_0x57d498[_0x43b746(0x171)](_0x388f4d[_0x43b746(0x56b)+'h'],-0x3dd+-0x21f4+0x2611))return;_0x388f4d[_0x43b746(0x1fc)](_0x3c17be);}else{var _0x275507=('6|0|2'+_0x43b746(0x55f)+_0x43b746(0x64e))['split']('|'),_0x59b91c=0x9*0x2ff+0x1abf+0x37*-0xfa;while(!![]){switch(_0x275507[_0x59b91c++]){case'0':_0x2eed2b['type']='butto'+'n';continue;case'1':_0x2fbe82[_0x43b746(0x6ac)+_0x43b746(0x17f)+'d'](_0x2eed2b);continue;case'2':_0x2eed2b['class'+'Name']=_0x43b746(0x3d6)+'b';continue;case'3':_0x2eed2b['oncli'+'ck']=(_0x367119=>()=>_0x231cef(_0x367119))(_0xd5f0e['id']);continue;case'4':_0x147bd6['set'](_0x10436b['id'],_0x2eed2b);continue;case'5':_0x2eed2b['title']=_0x575205['label'];continue;case'6':var _0x2eed2b=_0x4dd869[_0x43b746(0x562)+_0x43b746(0x202)+_0x43b746(0x200)](_0x43b746(0x522)+'n');continue;case'7':_0x2eed2b['inner'+'HTML']=_0x3f9f3c['SkvZb']('<smal'+'l>',_0x2d5e76['label'])+(_0x43b746(0x247)+_0x43b746(0x158));continue;}break;}}}function _0x58adb2(_0x6e04d,_0x4f68db,_0x517461,_0x1a88cb){var _0x36a690=_0x4638a1,_0xee2ce3={'yIRYp':function(_0x5d302d,_0x4f1788){return _0x5d302d===_0x4f1788;},'uLDXP':_0x36a690(0x56a)+'io_'},_0x480d9b=-0x2645*-0x1+0x12f*0xa+0x7f*-0x65;try{_0x480d9b=_0x4f68db&&_0x4f68db['val']?_0x4f68db[_0x36a690(0x4e1)]():0x3cc*-0x6+-0x1*-0x1a3c+0x1*-0x374;}catch(_0x119e76){}if(!_0x480d9b)return;_0x56c246(_0x6e04d,_0x480d9b),_0x517461[_0x1a88cb]=_0x6e04d[_0x36a690(0x56b)+'h'];if(_0x1a88cb===_0x36a690(0x2a1)+'ents'&&_0x6e04d[_0x36a690(0x56b)+'h']){var _0x640aad=_0x7389ff['capMo'+'ve'];if(_0x640aad){if(_0x36a690(0x6d1)==='WesOE')try{_0x640aad['enabl'+'ed']=![];}catch(_0xb82744){}else{if(_0x301c88[_0x4392b6]['id']&&_0xee2ce3['yIRYp'](_0x402a4f[_0x3a7c70]['id']['index'+'Of'](_0xee2ce3[_0x36a690(0x5ee)]),0x691*-0x2+0x1f63+-0x1*0x1241))_0x14bf7f[_0x7ec31b]['style']['displ'+'ay']=_0x36a690(0x27a);}}}}function _0x31e3bb(_0x34e747,_0xd79279,_0x45ab77){var _0x55879c=_0x4638a1,_0x4d1e35=_0x12e6fb['get'](_0x34e747);!_0x4d1e35&&(_0x4d1e35=new Map(),_0x12e6fb[_0x55879c(0x336)](_0x34e747,_0x4d1e35));if(!_0x4d1e35['has'](_0xd79279))try{var _0xdf42ad=new _0x3b2dea(_0x34e747)['readF'+_0x55879c(0x530)](_0xd79279,_0x45ab77);_0x4d1e35[_0x55879c(0x336)](_0xd79279,_0xdf42ad!==undefined?_0xdf42ad[_0x55879c(0x4e1)]():null);}catch(_0x4b79f0){'WjPBO'!==_0x55879c(0x575)?_0x4d1e35[_0x55879c(0x336)](_0xd79279,null):_0xcafb9f[_0x55879c(0x6ac)+'dChil'+'d'](_0xce4142);}return _0x4d1e35['get'](_0xd79279);}function _0xa21ca(_0x3d3fd4,_0x54dd9d,_0x427a99,_0x1614c6){var _0x3b8d2a=_0x4638a1;try{new _0x3b2dea(_0x3d3fd4)['write'+_0x3b8d2a(0x4b1)](_0x54dd9d,_0x427a99,_0x1614c6);}catch(_0x3d9b0a){}}function _0x369fd1(_0xcf8837,_0x4caf29){var _0x475169=_0x4638a1;if('JdbKl'===_0x475169(0x5a6))try{if('UnfEs'===_0x57d498[_0x475169(0x48a)]){var _0x28b32f=new _0x3b2dea(_0xcf8837)[_0x475169(0x604)+_0x475169(0x530)](_0x4caf29,_0x475169(0x482));return _0x28b32f?_0x28b32f['val']():-0x1aed+-0x3*0x565+0x2b1c;}else _0x428896[_0x475169(0x168)+'e']=_0x5e548e,_0x4c82b9();}catch(_0x465ee5){return 0x56a+0x3d*-0x13+-0xe3;}else try{if(_0x193a86)_0x4f5404[_0x475169(0x195)](_0x475169(0x6c3)+'Engin'+'e.App'+_0x475169(0x524)+'ion',_0x475169(0x589)+_0x475169(0x591)+'Frame'+'Rate',[-0x51*-0x2+0x1021+-0x1*0xfd3]);}catch(_0x5e3ffd){}}function _0x3f7dfd(_0x308100,_0x54523d,_0x23dbda,_0x4b3577){var _0xd0a9cb=_0x4638a1,_0xfce403=_0x57d498[_0xd0a9cb(0x194)](_0x31e3bb,_0x308100,_0x54523d,_0x23dbda);if(_0xfce403!=null)_0xa21ca(_0x308100,_0x54523d,_0x23dbda,_0x57d498['khLHH'](_0xfce403,_0x4b3577));}function _0xde5fdb(_0x2305ac,_0xd0a962,_0x33f09b,_0x2eeab9,_0x2055fb,_0x51a65c,_0x20fb6a){var _0x5085e3=_0x4638a1,_0x4857c3={'yBYat':function(_0x2b7592,_0x2657c9){return _0x2b7592(_0x2657c9);}};try{var _0x48da28=_0x3f1a0c['hookP'+_0x5085e3(0x4b4)]({'typeName':_0xd0a962,'methodName':_0x33f09b,'params':_0x2eeab9,'returnType':_0x2055fb},_0x51a65c);return _0x48da28['enabl'+'ed']=_0x57d498[_0x5085e3(0x43c)](_0x20fb6a,![]),_0x7389ff[_0x2305ac]=_0x48da28,_0x2d6dab['hooks'+_0x5085e3(0x47f)]++,_0x48da28;}catch(_0x458dc8){if('YyIKD'==='YyIKD')return console['warn'](_0x57d498[_0x5085e3(0x2e5)],_0x2305ac,_0x458dc8&&_0x458dc8[_0x5085e3(0x295)+'ge']),null;else _0x1415c8(),_0x4857c3['yBYat'](_0x499a0d,_0x242e29(_0x4a659c['value']));}}function _0xbc6163(_0x5be786,_0x23b05b,_0x2c623a,_0x32601c,_0x1aa1d4,_0x2c2137,_0x41fc01){var _0x29e633=_0x4638a1;try{var _0xa9cd64=_0x3f1a0c[_0x29e633(0x5a8)+_0x29e633(0x303)+'x']({'typeName':_0x23b05b,'methodName':_0x2c623a,'params':_0x32601c,'returnType':_0x1aa1d4},_0x2c2137);return _0xa9cd64['enabl'+'ed']=_0x57d498[_0x29e633(0x43c)](_0x41fc01,![]),_0x7389ff[_0x5be786]=_0xa9cd64,_0x2d6dab['hooks'+'Total']++,_0xa9cd64;}catch(_0x4c5cf4){return console['warn'](_0x57d498[_0x29e633(0x2e5)],_0x5be786,_0x4c5cf4&&_0x4c5cf4['messa'+'ge']),null;}}var _0x352ed1=()=>![];try{if(_0x57d498[_0x4638a1(0x1e2)](_0x4638a1(0x5a7),_0x57d498['CfKlp'])){if(window[_0x4638a1(0x6c3)+_0x4638a1(0x379)+'dkit']&&!_0xd79d98[_0x4638a1(0x3a4)+_0x4638a1(0x3a0)]){_0x3b2dea=window[_0x4638a1(0x6c3)+'WebMo'+'dkit'][_0x4638a1(0x5bf)+_0x4638a1(0x400)+'er'],_0x3f1a0c=window[_0x4638a1(0x6c3)+'WebMo'+'dkit'][_0x4638a1(0x611)+'me'][_0x4638a1(0x562)+'ePlug'+'in']({'name':_0x4638a1(0x620)+'aKour','version':_0x4638a1(0x31d),'referencedAssemblies':[_0x4638a1(0x363)+_0x4638a1(0x6cc)+_0x4638a1(0x4b5)+_0x4638a1(0x393)]});if(_0xd79d98['hookG'+'od'])_0xde5fdb(_0x4638a1(0x483),'OHeal'+'th',_0x4638a1(0x36f)+'ateTa'+_0x4638a1(0x354)+'lth',['i32',_0x4638a1(0x3a1)],undefined,_0x352ed1,!!_0xd79d98[_0x4638a1(0x483)]);if(_0xd79d98[_0x4638a1(0x335)+_0x4638a1(0x1bc)])_0x57d498['elSca'](_0xde5fdb,'godDi'+'e',_0x57d498['LzGWn'],_0x4638a1(0x578)+_0x4638a1(0x2c5),[_0x4638a1(0x3a1),'i32',_0x4638a1(0x3a1),_0x4638a1(0x3a1),'i32'],undefined,_0x352ed1,!!_0xd79d98['god']);if(_0xd79d98['hookN'+'oReco'+'il'])_0xde5fdb(_0x57d498[_0x4638a1(0x29a)],_0x57d498['XEBUZ'],_0x4638a1(0x2c0),[_0x57d498['SKplA']],undefined,_0x352ed1,!!_0xd79d98[_0x4638a1(0x4ee)+_0x4638a1(0x3cd)]);if(_0xd79d98[_0x4638a1(0x61f)+_0x4638a1(0x28f)+'e'])_0xbc6163(_0x57d498[_0x4638a1(0x527)],_0x4638a1(0x4e5)+_0x4638a1(0x270),_0x4638a1(0x1c4)+_0x4638a1(0x25f)+_0x4638a1(0x539),[_0x57d498[_0x4638a1(0x227)],_0x4638a1(0x3a1)],undefined,(_0x24ed5a,_0x370135)=>{var _0x5b6731=_0x4638a1;_0x57d498[_0x5b6731(0x1bd)](_0x58adb2,_0x4ba2e3,_0x370135,_0x2d6dab,_0x57d498['Jpcda']);},!![]);if(_0xd79d98['hookC'+'aptur'+'e'])_0xbc6163(_0x57d498[_0x4638a1(0x665)],_0x57d498[_0x4638a1(0x5f0)],_0x4638a1(0x337)+_0x4638a1(0x292),[_0x57d498['SKplA']],_0x57d498['SKplA'],(_0x26ae62,_0x25a9c8)=>{var _0xbc2c89=_0x4638a1;if(_0x57d498['zScBh']('LrCxa',_0xbc2c89(0x12e)))try{new _0x151b89(_0x1d077c)['write'+'Field'](_0x42eaa0,_0x916649,_0x2b5da8);}catch(_0x1b6305){}else _0x58adb2(_0xe128a,_0x25a9c8,_0x2d6dab,_0x57d498[_0xbc2c89(0x1db)]);},!![]);}}else _0x4caf49[_0x4638a1(0x58d)+_0x4638a1(0x216)]['toggl'+'e']('on',_0x16cea7),_0x57d498[_0x4638a1(0x690)](_0x18af92,_0x124dba);}catch(_0x1559d1){console[_0x4638a1(0x698)](_0x4638a1(0x6b6)+_0x4638a1(0x44a)+'ur]\x20U'+'WMK\x20i'+'nit\x20f'+_0x4638a1(0x5e7)+':',_0x1559d1&&_0x1559d1['messa'+'ge']);}function _0x435356(_0x1d77ff,_0x153b63){var _0x50cad4=_0x7389ff[_0x1d77ff];if(_0x50cad4)try{_0x50cad4['enabl'+'ed']=!!_0x153b63;}catch(_0x3d7647){}}setInterval(()=>{var _0x5c3f7b=_0x4638a1;if(!_0x3b2dea||!window['unity'+_0x5c3f7b(0x4d6)+_0x5c3f7b(0x382)])return;var _0x3214d5=_0x57d498[_0x5c3f7b(0x4fa)](Number(_0xd79d98['speed'+'Pct'])||-0x2*0x6bf+0x269+0xb79,-0x17*-0x4f+0xbde+-0x1293),_0x1ccd79=(Number(_0xd79d98['jumpP'+'ct'])||0xa06+0x1*-0xc0b+0x269)/(0x4f0+0x39*-0x2d+-0x579*-0x1),_0x47a480=_0x57d498[_0x5c3f7b(0x433)](Number(_0xd79d98['gravi'+'tyPct'])||-0x6b*-0x4e+-0x1239+0x1*-0xdfd,-0x1c73*0x1+-0x1*0x15c5+0x329c),_0x2e1997=Math[_0x5c3f7b(0x224)](-0x1c7+0x19*0x49+-0x1*0x559,_0x57d498['tpnlv'](Number,_0xd79d98[_0x5c3f7b(0x3c9)+'eValu'+'e'])||-0x1247*0x2+-0x30*0xc9+0x4ad4),_0x3034a2=_0x3214d5!==0x7b5+0x12da+-0x46d*0x6||_0x1ccd79!==-0x1*-0x1cad+0xa*-0x115+-0xa*0x1c9||_0x47a480!==-0x6*-0x5aa+-0x95*0x1d+-0x111a||_0xd79d98['bhop'],_0x22abcd=_0xd79d98['noSpr'+'ead']||_0xd79d98[_0x5c3f7b(0x3c9)+'eExp']||_0xd79d98[_0x5c3f7b(0x243)+_0x5c3f7b(0x633)]||_0xd79d98['rapid'+'Exp'];if(!_0x3034a2&&!_0x22abcd)return;try{for(var _0x63a720=-0x25de+0x429*-0x4+0x3682;_0x57d498['sSemm'](_0x63a720,_0xe128a['lengt'+'h']);_0x63a720++){if(_0x57d498[_0x5c3f7b(0x5f7)](_0x57d498[_0x5c3f7b(0x3e3)],_0x57d498[_0x5c3f7b(0x3e3)])){var _0x5b9b=_0xe128a[_0x63a720];if(!_0x5b9b)continue;if(_0x3214d5!==0x1*-0x1c33+-0x12d9*0x1+0x1*0x2f0d){var _0x38fcf6=(_0x5c3f7b(0x221)+_0x5c3f7b(0x447)+'0')[_0x5c3f7b(0x21f)]('|'),_0x324415=0x1f2a*-0x1+-0x89*-0xd+-0x1*-0x1835;while(!![]){switch(_0x38fcf6[_0x324415++]){case'0':_0x3f7dfd(_0x5b9b,-0x11f0+-0x5*-0x3d3+-0x10f,'f32',_0x3214d5);continue;case'1':_0x3f7dfd(_0x5b9b,-0x11b8+0x2563*-0x1+0x374b,'f32',_0x3214d5);continue;case'2':_0x57d498[_0x5c3f7b(0x1bd)](_0x3f7dfd,_0x5b9b,-0x268b+-0x1*0x1319+0x420*0xe,'f32',_0x3214d5);continue;case'3':_0x3f7dfd(_0x5b9b,0x1c96+-0xc4*-0x29+-0x3bc6,_0x57d498['rnSXt'],_0x3214d5);continue;case'4':_0x3f7dfd(_0x5b9b,0x1*-0x8f+-0x1*-0x11d7+0x2*-0x890,'f32',_0x3214d5);continue;case'5':_0x3f7dfd(_0x5b9b,0x4f*-0x3e+-0x2347+0x3695,_0x5c3f7b(0x64c),_0x3214d5);continue;}break;}}if(_0x57d498[_0x5c3f7b(0x31c)](_0x1ccd79,-0x175c+0x32b*0x2+0x1107*0x1))_0x57d498['PkKEA'](_0x3f7dfd,_0x5b9b,0x4f5+-0x26b8+0x2213,_0x57d498['rnSXt'],_0x1ccd79);_0x57d498[_0x5c3f7b(0x534)](_0x47a480,0x38*-0x97+-0x2*0x203+0x250f)&&(_0x3f7dfd(_0x5b9b,-0x1f66+0xccc+-0x2*-0x971,_0x5c3f7b(0x64c),_0x47a480),_0x3f7dfd(_0x5b9b,0x2*0xf1c+0xd04+0x18*-0x1ca,'f32',_0x47a480));if(_0xd79d98['bhop'])_0x57d498['iQaMm'](_0xa21ca,_0x5b9b,0x34*-0x5e+-0xc1c+0x3fa*0x8,'f32',-(0x19*-0x4d+0x1319*0x1+-0x7ad));}else _0x2e152c=_0x14bd26&&_0xbe37be[_0x5c3f7b(0x4e1)]?_0x1c3ad7[_0x5c3f7b(0x4e1)]():-0x3*0x6fd+-0x4e6+0x19dd;}}catch(_0x102999){}try{for(var _0x3483f7=-0x1a69*0x1+-0x188f*0x1+0x32f8;_0x3483f7<_0x4ba2e3[_0x5c3f7b(0x56b)+'h'];_0x3483f7++){var _0x237f8c=_0x369fd1(_0x4ba2e3[_0x3483f7],0x13ff+0x1234+-0x25fb);if(!_0x237f8c)continue;if(_0xd79d98['damag'+'eExp']){if(_0x57d498['DjSZM']===_0x5c3f7b(0x34f))_0xa21ca(_0x237f8c,-0x27f+-0x1273*0x1+0x153e,_0x5c3f7b(0x3a1),_0x2e1997),_0x57d498[_0x5c3f7b(0x1dc)](_0xa21ca,_0x237f8c,-0x1689+-0x1bbd+0x329a,_0x57d498[_0x5c3f7b(0x227)],_0x2e1997);else{var _0x36662b=(_0x5c3f7b(0x4d7)+_0x5c3f7b(0x280)+'|7|10'+_0x5c3f7b(0x12b)+_0x5c3f7b(0x375)+'15|21'+'|2|23'+'|18|9'+'|8|17'+_0x5c3f7b(0x3cb)+_0x5c3f7b(0x603)+_0x5c3f7b(0x23f)+'2')[_0x5c3f7b(0x21f)]('|'),_0xcac9b1=0x251+-0x159f+0x134e;while(!![]){switch(_0x36662b[_0xcac9b1++]){case'0':_0x5da4b4['shado'+_0x5c3f7b(0x569)]=0x16*0x61+-0x2428+-0x48*-0x63;continue;case'1':_0x298d2a[_0x5c3f7b(0x327)](_0x34764d,_0x1aa39a,(-0xd6d+-0xbf+0xe2d+0.6000000000000001)*_0xea5011,0x218c+0x2548+-0x46d4*0x1,_0x57d498[_0x5c3f7b(0x300)](_0x29e3de['PI'],-0x2390+-0x1242+0x35d4));continue;case'2':_0x23d717['lineT'+'o'](_0x34764d-_0x34d0d2,_0x1aa39a);continue;case'3':_0x2e2bbc[_0x5c3f7b(0x244)]();continue;case'4':_0x491cc4[_0x5c3f7b(0x3ca)+_0x5c3f7b(0x392)+'r']=_0x17ed23;continue;case'5':_0x27f9f3['lineW'+_0x5c3f7b(0x36b)]=_0x5e828f[_0x5c3f7b(0x224)](0xc5*0x7+0x30f*-0x6+0x19f*0x8+0.5,_0x57d498[_0x5c3f7b(0x4a4)](-0x1ee5+-0x217d+-0x4*-0x1019,_0xea5011));continue;case'6':_0x2a3e1b['fill']();continue;case'7':_0x26cdb7['strok'+_0x5c3f7b(0x5f9)+'e']=_0x17ed23;continue;case'8':_0x548e40[_0x5c3f7b(0x40a)+'o'](_0x34764d,_0x57d498[_0x5c3f7b(0x3ec)](_0x1aa39a,_0x34d0d2));continue;case'9':_0x54fe40['moveT'+'o'](_0x34764d,_0x57d498['ZBCHR'](_0x1aa39a,_0x34d0d2)-_0x1e400f);continue;case'10':_0x4b35b0[_0x5c3f7b(0x296)+_0x5c3f7b(0x555)]=_0x17ed23;continue;case'11':var _0x34764d=_0x14a37d[_0x5c3f7b(0x159)]/(0x2024+0x861+-0x2883*0x1),_0x1aa39a=_0x57d498['KNicz'](_0x5d338d[_0x5c3f7b(0x50a)+'t'],0x56+-0x1*-0x57+-0xab);continue;case'12':_0x36c393[_0x5c3f7b(0x47b)+'e']();continue;case'13':_0x32b819[_0x5c3f7b(0x40a)+'o'](_0x34764d,_0x57d498[_0x5c3f7b(0x6b4)](_0x1aa39a+_0x34d0d2,_0x1e400f));continue;case'14':_0x53f040['begin'+_0x5c3f7b(0x49c)]();continue;case'15':_0x31364a[_0x5c3f7b(0x2a4)+'Path']();continue;case'16':var _0x34d0d2=(-0x959+-0x199f+0x22fe)*_0xea5011,_0x1e400f=(0x65*0xd+0x25c9*-0x1+0x20b0)*_0xea5011;continue;case'17':_0x19a73c[_0x5c3f7b(0x397)+'o'](_0x34764d,_0x1aa39a+_0x34d0d2);continue;case'18':_0x580b2c[_0x5c3f7b(0x40a)+'o'](_0x34764d+_0x34d0d2+_0x1e400f,_0x1aa39a);continue;case'19':var _0xea5011=_0x57d498[_0x5c3f7b(0x643)](_0x50e5cb,_0x576371[_0x5c3f7b(0x168)+'e'])||0x5b*0x5b+-0x21ba+0x3b*0x6;continue;case'20':var _0x17ed23=/^#[0-9a-f]{6}$/i[_0x5c3f7b(0x68c)](_0x2c7385[_0x5c3f7b(0x62b)+'or'])?_0x38d7d8['chCol'+'or']:_0x5c3f7b(0x1b1)+'9d';continue;case'21':_0x3ea4fc['moveT'+'o'](_0x34764d-_0x34d0d2-_0x1e400f,_0x1aa39a);continue;case'22':_0xfb3694['resto'+'re']();continue;case'23':_0x219da4['moveT'+'o'](_0x34764d+_0x34d0d2,_0x1aa39a);continue;}break;}}}_0xd79d98[_0x5c3f7b(0x5b9)+_0x5c3f7b(0x5c7)]&&(_0x57d498['PkKEA'](_0xa21ca,_0x237f8c,-0x14bb+-0x1*0xedc+0x241f,_0x57d498[_0x5c3f7b(0x298)],0xcd5+-0x1d3b+0x1066),_0xa21ca(_0x237f8c,0x1325+0x70b+-0x19c8,_0x5c3f7b(0x64c),0x2245*-0x1+-0x1802+-0xa*-0x5d4));if(_0xd79d98[_0x5c3f7b(0x243)+_0x5c3f7b(0x633)])_0x57d498['PkKEA'](_0xa21ca,_0x237f8c,-0x24*-0x7+0xc*0x8a+-0x4*0x1c6,_0x5c3f7b(0x3a1),-0x9fa+0xf6*0x7+0x727*0x1);_0xd79d98['rapid'+_0x5c3f7b(0x2fd)]&&(_0x57d498[_0x5c3f7b(0x5ff)](_0x3f7dfd,_0x237f8c,0x10*0x20+-0x2*-0x246+-0x20*0x30,_0x57d498['rnSXt'],-0x1e7*0x8+0x33*-0x61+0x1*0x228b+0.1),_0xa21ca(_0x237f8c,-0x8*-0x1b4+-0x21*-0xfd+-0x2ddd,_0x57d498['rnSXt'],-0xa7a+-0x7ff+0x1279+0.1));}}catch(_0x2931ee){}},0x5*-0xe9+0x2608+-0x20b3),setInterval(()=>{var _0x1d8dce=_0x4638a1;if(_0x57d498['sqxos'](_0x1d8dce(0x3ff),_0x57d498[_0x1d8dce(0x228)])){_0x2d6dab['gameL'+'oaded']=!!window[_0x1d8dce(0x51b)+'Insta'+'nce'];try{var _0x128a23=-0x39d+-0x20bb+0x122c*0x2;for(var _0x3aa828 in _0x7389ff){if(_0x7389ff[_0x3aa828]&&_0x7389ff[_0x3aa828]['appli'+'ed'])_0x128a23++;}_0x2d6dab['hooks'+'Ok']=_0x128a23;}catch(_0x53699b){}}else try{var _0x1a0149=new _0x3322c8(_0x50beb5)[_0x1d8dce(0x604)+'ield'](_0x3353dc,_0x3129a9);_0x4f389e['set'](_0x2f4f7f,_0x57d498[_0x1d8dce(0x205)](_0x1a0149,_0x360ec3)?_0x1a0149['val']():null);}catch(_0x39d5fc){_0x83d208[_0x1d8dce(0x336)](_0x545b85,null);}},-0x1fd*-0x7+-0x86*-0x45+0x2e21*-0x1);var _0x25aab6=new Set(),_0x50e69d={0x1:[],0x3:[]},_0x23aec5=![];function _0x58b09b(_0x3f6f06){var _0x264552=_0x4638a1;if(_0x264552(0x6ae)!==_0x57d498['MVkZA'])_0x25aab6['add'](_0x3f6f06['code']);else{if(_0x3c7021[_0x264552(0x496)]&&(_0x3244ce['ready'+'State']==='inter'+'activ'+'e'||_0x3ac899[_0x264552(0x2bf)+'State']===_0x264552(0x568)+'ete'))_0x289cd5();else _0x5b7886[_0x264552(0x1df)+'entLi'+_0x264552(0x266)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x52badb,{'once':!![]});}}function _0x150464(_0x4fd793){var _0x454e25=_0x4638a1,_0x2f82dd={'TcbbC':function(_0x2af27f,_0x2e1adf,_0xe9008b,_0x530163,_0x446071){return _0x2af27f(_0x2e1adf,_0xe9008b,_0x530163,_0x446071);}};_0x454e25(0x661)!==_0x454e25(0x661)?(_0x2f82dd[_0x454e25(0x2ed)](_0x1bcca8,_0x4df473,-0x109a+0x1bd6+-0xaf0,_0x454e25(0x3a1),_0xd5793f),_0x2f82dd['TcbbC'](_0x3c4352,_0x1ad4f1,0x26b0+0x173*-0x2+-0x2376,_0x454e25(0x3a1),_0x5ae434)):_0x25aab6['delet'+'e'](_0x4fd793[_0x454e25(0x577)]);}function _0x1c0295(_0x3b224e){var _0x229630=_0x4638a1;if(_0x3b224e[_0x229630(0x3b2)+_0x229630(0x5aa)])return;_0x25aab6[_0x229630(0x640)](_0x229630(0x32c)+(_0x3b224e['butto'+'n']+(0x1c92+0x1159*-0x2+0x621)));var _0x1582f1=_0x50e69d[_0x3b224e['butto'+'n']+(-0x20a7+-0x25ee+0x82*0x8b)];if(_0x1582f1){if(_0x229630(0x558)!==_0x229630(0x558))_0x3812d9(_0x118672,0x10dc+0x895+-0x7*0x38f,_0x57d498['rnSXt'],-0x2098+0x2cf+0x1dc9),_0x57d498[_0x229630(0x3e2)](_0x522347,_0x1f15ff,-0x1072+-0x638+0x1712,_0x229630(0x64c),0xefe+-0x29*0xd6+0x1*0x1349);else{_0x1582f1['push'](performance['now']());if(_0x1582f1['lengt'+'h']>0x1eaa+0x14fb*0x1+-0x337d)_0x1582f1['shift']();}}}function _0x21856f(_0x4a8abd){var _0x33dc1d=_0x4638a1;if(_0x57d498[_0x33dc1d(0x338)]===_0x57d498[_0x33dc1d(0x3b1)]){_0x568420[_0x33dc1d(0x269)+'oaded']=!!_0x149502[_0x33dc1d(0x51b)+'Insta'+'nce'];try{var _0x1209f0=0x7a7+-0x3*0x10c+-0x483;for(var _0x3ed9e7 in _0x4e7e22){if(_0x4d54b5[_0x3ed9e7]&&_0xa8c25b[_0x3ed9e7]['appli'+'ed'])_0x1209f0++;}_0x2ff3ed[_0x33dc1d(0x30d)+'Ok']=_0x1209f0;}catch(_0x5816d2){}}else{if(!_0x4a8abd[_0x33dc1d(0x3b2)+_0x33dc1d(0x5aa)])_0x25aab6[_0x33dc1d(0x52f)+'e']('mouse'+_0x57d498[_0x33dc1d(0x2fc)](_0x4a8abd[_0x33dc1d(0x522)+'n'],0x17*-0x7+-0x1ab8+0x30a*0x9));}}function _0x3acfbc(){_0x25aab6['clear']();}function _0x5c21d8(){var _0x36fc6a=_0x4638a1;if(_0x23aec5)return;_0x23aec5=!![],window[_0x36fc6a(0x1df)+'entLi'+'stene'+'r']('keydo'+'wn',_0x58b09b,!![]),window['addEv'+'entLi'+_0x36fc6a(0x266)+'r'](_0x36fc6a(0x231),_0x150464,!![]),window['addEv'+_0x36fc6a(0x459)+_0x36fc6a(0x266)+'r'](_0x57d498[_0x36fc6a(0x309)],_0x1c0295,!![]),window['addEv'+_0x36fc6a(0x459)+'stene'+'r']('mouse'+'up',_0x21856f,!![]),window['addEv'+'entLi'+_0x36fc6a(0x266)+'r'](_0x57d498[_0x36fc6a(0x657)],_0x3acfbc);}function _0x84647c(_0x5432d2){var _0x1ca035=_0x4638a1,_0x435ab3=_0x50e69d[_0x5432d2]||[],_0x98bda7=performance[_0x1ca035(0x430)]();while(_0x435ab3[_0x1ca035(0x56b)+'h']&&_0x57d498[_0x1ca035(0x36d)](_0x98bda7-_0x435ab3[-0xceb*-0x1+-0xd*0x2c7+0x1c*0xd4],-0x2067+0x1*0x240d+0x42))_0x435ab3[_0x1ca035(0x6bb)]();return _0x435ab3[_0x1ca035(0x56b)+'h'];}function _0x19311d(_0x582141){var _0x405ae9=_0x4638a1;if(_0x57d498[_0x405ae9(0x43c)]('NBWcj',_0x405ae9(0x372))){if(document[_0x405ae9(0x496)]&&(_0x57d498[_0x405ae9(0x22c)](document['ready'+'State'],_0x405ae9(0x51c)+_0x405ae9(0x5d0)+'e')||_0x57d498[_0x405ae9(0x209)](document[_0x405ae9(0x2bf)+'State'],_0x405ae9(0x568)+'ete')))_0x57d498['ZwzdX'](_0x582141);else document['addEv'+'entLi'+_0x405ae9(0x266)+'r'](_0x57d498['cLDgj'],_0x582141,{'once':!![]});}else _0x10d403['infAm'+'moExp']=_0x5d8d25,_0x42c688();}_0x19311d(()=>{var _0x50d676=_0x4638a1,_0x5eaf7e={'IseJy':function(_0x317b03,_0x42be85){return _0x57d498['TTnug'](_0x317b03,_0x42be85);},'bDqgq':'Takes'+_0x50d676(0x20c)+'ct\x20on'+_0x50d676(0x6ca)+'ad\x20wh'+'en\x20to'+_0x50d676(0x421)+'.','pTjHf':function(_0x533e7b,_0x5dded1){return _0x533e7b===_0x5dded1;},'UHpVC':function(_0x22a913,_0x28f309){return _0x22a913<_0x28f309;},'fuzvJ':_0x57d498[_0x50d676(0x47c)],'uaTQF':function(_0x3af1d4,_0xb3f4ed,_0x4d91e4,_0x8865e0,_0x40da34){var _0x770cb7=_0x50d676;return _0x57d498[_0x770cb7(0x5ff)](_0x3af1d4,_0xb3f4ed,_0x4d91e4,_0x8865e0,_0x40da34);},'JHVKg':_0x57d498['rnSXt'],'wDCIR':function(_0xa30c7a,_0xe07d4b){return _0xa30c7a===_0xe07d4b;},'xmDrz':function(_0x272938,_0x87d959){return _0x272938===_0x87d959;},'JzvzR':'rgba('+_0x50d676(0x519)+_0x50d676(0x614)+_0x50d676(0x3f9)+'5)','bSEoh':_0x50d676(0x5d4)+'e','nNWoJ':function(_0x18238e,_0x350ea4){return _0x18238e+_0x350ea4;},'DGNYg':function(_0x2e9c14,_0xe90514){return _0x2e9c14+_0xe90514;},'UoQDm':_0x50d676(0x4e0),'kUaRR':function(_0x2ddf3f,_0x4d0148){return _0x2ddf3f+_0x4d0148;},'PLzAX':function(_0x1fa711,_0x3da3b6){return _0x1fa711-_0x3da3b6;},'YzTig':function(_0x53ace1,_0x3fe657){var _0x4fc380=_0x50d676;return _0x57d498[_0x4fc380(0x414)](_0x53ace1,_0x3fe657);},'llrTX':function(_0xcf734b,_0x784cbc){return _0xcf734b+_0x784cbc;},'PPMaS':function(_0x4d040a,_0x2f38c1){return _0x4d040a+_0x2f38c1;},'cEERZ':'600\x20','zquxI':_0x57d498[_0x50d676(0x18c)],'qILku':function(_0x524f91,_0x2d56e3){return _0x57d498['bdNFr'](_0x524f91,_0x2d56e3);},'cdbkC':function(_0x189765,_0x59ec87){var _0x49a36f=_0x50d676;return _0x57d498[_0x49a36f(0x440)](_0x189765,_0x59ec87);},'QomKx':function(_0x619cd1,_0x4b7465){return _0x619cd1(_0x4b7465);},'CgbSz':function(_0x1b66f3,_0x3f9b82){var _0x119630=_0x50d676;return _0x57d498[_0x119630(0x3ec)](_0x1b66f3,_0x3f9b82);},'LnnNP':function(_0x5222a0,_0x2a8aad){return _0x5222a0-_0x2a8aad;},'bSxIS':function(_0x4ad43c,_0x3d016c){return _0x57d498['baPVE'](_0x4ad43c,_0x3d016c);},'fOrqf':function(_0xb1734b,_0x773175,_0x3f44da,_0x2ef2ab,_0x2a4068,_0x331d0d,_0xe1e5d4){return _0xb1734b(_0x773175,_0x3f44da,_0x2ef2ab,_0x2a4068,_0x331d0d,_0xe1e5d4);},'yaBFA':_0x50d676(0x37e),'TymlV':function(_0xdcc339,_0x58b87e){var _0xf704e5=_0x50d676;return _0x57d498[_0xf704e5(0x190)](_0xdcc339,_0x58b87e);},'CtYmD':_0x57d498['pkHNF'],'UHmlq':_0x57d498[_0x50d676(0x14f)],'HRZaF':function(_0x1248f5,_0x5a7eee){var _0x3ae566=_0x50d676;return _0x57d498[_0x3ae566(0x440)](_0x1248f5,_0x5a7eee);},'VuRuO':function(_0x338758,_0x4ee9b4,_0xe2d312,_0x394d24,_0x53b408,_0x4258ff,_0xa5829f,_0xb69873){var _0x4f795e=_0x50d676;return _0x57d498[_0x4f795e(0x596)](_0x338758,_0x4ee9b4,_0xe2d312,_0x394d24,_0x53b408,_0x4258ff,_0xa5829f,_0xb69873);},'Eqyof':function(_0x5d436c,_0x373b8a){var _0x46e471=_0x50d676;return _0x57d498[_0x46e471(0x615)](_0x5d436c,_0x373b8a);},'ZbmIR':'RMB','zAWPR':_0x50d676(0x32c)+'3','PmEIb':function(_0x539210,_0x58868d){return _0x539210+_0x58868d;},'FvhWs':function(_0x2ed92c,_0x42f8a0){return _0x2ed92c*_0x42f8a0;},'sJxzE':function(_0x3c61c1,_0x2cdcb1){return _0x3c61c1/_0x2cdcb1;},'XDRUC':function(_0x48a59a,_0x3e051b){var _0x43d95c=_0x50d676;return _0x57d498[_0x43d95c(0x4db)](_0x48a59a,_0x3e051b);},'oSMJh':function(_0x51deaf,_0x3c9800){return _0x51deaf+_0x3c9800;},'RtNpO':function(_0x2b96d9,_0x345a16){return _0x2b96d9+_0x345a16;},'xnEWh':function(_0x102ceb,_0x3ab074){return _0x57d498['VQxcl'](_0x102ceb,_0x3ab074);},'nzKJd':_0x50d676(0x310),'fbhBt':function(_0x5aa8d4,_0x477b2b){var _0x11536c=_0x50d676;return _0x57d498[_0x11536c(0x560)](_0x5aa8d4,_0x477b2b);},'pQVoA':_0x50d676(0x2e1)+'255,2'+_0x50d676(0x13c)+'0,0.7'+'5)','RKAdY':_0x57d498['GaOsI'],'KJtFr':_0x57d498[_0x50d676(0x164)],'AFWrh':function(_0x53956b,_0x1a02dd,_0x2a7abd){var _0x4d06dd=_0x50d676;return _0x57d498[_0x4d06dd(0x288)](_0x53956b,_0x1a02dd,_0x2a7abd);},'URltX':'SAKUR'+_0x50d676(0x24c)+'R\x20v1.'+'1','fKOJx':function(_0x54ad0e,_0x3229de){return _0x54ad0e+_0x3229de;},'YjRcj':_0x57d498['oVrYr'],'lsIEh':'true','fKpFh':_0x57d498[_0x50d676(0x13b)],'sJuOE':'input','WrtSk':function(_0x484fcb){return _0x484fcb();},'YjyLT':_0x57d498[_0x50d676(0x358)],'iBDWB':_0x50d676(0x3ba),'oacdi':_0x57d498[_0x50d676(0x2dc)],'bIHxV':_0x50d676(0x5c6)+'g','VxRRG':function(_0x53285a,_0x2f5d22,_0x3c797b){return _0x53285a(_0x2f5d22,_0x3c797b);},'SjDxy':_0x50d676(0x494),'AZuUm':'fhqtH','pvdbO':'5|2|0'+_0x50d676(0x501)+'4|7|6','mZOFG':_0x50d676(0x255)+_0x50d676(0x40c),'kXJUu':function(_0xaa8b54,_0x51eccf){return _0xaa8b54+_0x51eccf;},'snctc':function(_0x2a80f1,_0x56d52d){var _0x5ac581=_0x50d676;return _0x57d498[_0x5ac581(0x16c)](_0x2a80f1,_0x56d52d);},'PPJNs':function(_0x58a66b,_0x81e655){return _0x58a66b+_0x81e655;},'lfmXZ':'\x20hook'+'s','ZBHiv':_0x57d498[_0x50d676(0x2d2)],'nNrwy':'\x20|\x20ga'+'me\x20','aXYKL':_0x50d676(0x398)+'ng','APBSq':_0x57d498[_0x50d676(0x29e)],'KYNiu':_0x50d676(0x40d)+'vemen'+'t\x20','VeTpy':_0x57d498['XLWcO'],'etuNy':_0x50d676(0x385)+_0x50d676(0x180)+'NG\x20—\x20'+_0x50d676(0x304)+'ay\x20on'+_0x50d676(0x5af)+'einst'+_0x50d676(0x2a5)+'he\x20us'+'erscr'+_0x50d676(0x26f),'HeSVJ':function(_0x4b1cbc,_0x42e848,_0x391e34,_0x238bac,_0x872525,_0x1ba5f1){return _0x4b1cbc(_0x42e848,_0x391e34,_0x238bac,_0x872525,_0x1ba5f1);},'ReDgh':'Statu'+'s','ZTAIu':_0x57d498[_0x50d676(0x141)],'HBvmt':_0x57d498['KSeLn'],'hcyiM':'noRec'+_0x50d676(0x3cd),'wrrfc':function(_0x512a97){return _0x512a97();},'UAdfZ':function(_0x18c669,_0x17da47){return _0x57d498['uHPJR'](_0x18c669,_0x17da47);},'fTsqp':_0x50d676(0x3aa),'eVqdi':_0x57d498['aEDaf'],'CGRiZ':_0x57d498[_0x50d676(0x50d)],'PLAWB':_0x57d498[_0x50d676(0x233)],'xzMiA':function(_0x1b1914){return _0x1b1914();},'JahuV':function(_0x5e38af,_0x1ed9c0){return _0x5e38af===_0x1ed9c0;},'xHzcA':function(_0x574a24,_0x346bae){return _0x574a24===_0x346bae;},'DZhgG':function(_0x1650b5,_0x5ac557){return _0x1650b5+_0x5ac557;},'NFadg':_0x57d498[_0x50d676(0x5c9)],'NkreD':'UWMK\x20'+_0x50d676(0x180)+_0x50d676(0x135)+_0x50d676(0x304)+_0x50d676(0x37d)+_0x50d676(0x5af)+_0x50d676(0x374)+'all\x20t'+'he\x20us'+_0x50d676(0x3f1)+_0x50d676(0x26f),'rymoP':_0x50d676(0x363)+_0x50d676(0x6cc)+'Sharp'+'.dll','jfdnp':_0x50d676(0x3a1),'nXsHO':_0x57d498['XEBUZ'],'Uvfny':function(_0x134df9,_0x1c13b9){return _0x134df9!==_0x1c13b9;},'XINmS':_0x57d498[_0x50d676(0x6cb)],'EiIdL':_0x50d676(0x670)+_0x50d676(0x3a0),'vptCt':_0x50d676(0x5b8)+'s\x20OHe'+'alth.'+'Initi'+_0x50d676(0x1a7)+'keHea'+_0x50d676(0x651)+_0x50d676(0x5c1)+_0x50d676(0x24f)+'.Loca'+_0x50d676(0x4cd)+'\x20so\x20n'+_0x50d676(0x556)+_0x50d676(0x1d7)+_0x50d676(0x4ce)+_0x50d676(0x341)+'ill\x20y'+'ou.','apchf':function(_0x468746,_0x1bf446,_0x33291e,_0x130da0,_0xefef9b,_0x2e4704){return _0x468746(_0x1bf446,_0x33291e,_0x130da0,_0xefef9b,_0x2e4704);},'XzyIW':'Skips'+'\x20Reco'+_0x50d676(0x32b)+'ion.T'+_0x50d676(0x360)+_0x50d676(0x1cc)+'\x20reco'+_0x50d676(0x177)+'rings'+_0x50d676(0x4f9)+'r\x20adv'+_0x50d676(0x4a8),'uUcCz':_0x50d676(0x260)+_0x50d676(0x39c),'UXlPo':'Scale'+_0x50d676(0x1d0)+_0x50d676(0x330)+_0x50d676(0x61a)+'n.fir'+_0x50d676(0x4c6)+_0x50d676(0x28a)+'0%.\x20S'+'erver'+_0x50d676(0x38c)+_0x50d676(0x4b3)+'\x20gate'+_0x50d676(0x24e)+'s.','LatkX':'Damag'+_0x50d676(0x1eb)+'P]','HKzNy':function(_0x101213,_0x2d65d2){return _0x101213(_0x2d65d2);},'WiaYN':_0x57d498['kAcQy'],'EvoXe':_0x57d498['oXcPu'],'AYVIV':function(_0x2625c3,_0x3e1833,_0x47d364,_0x139526,_0x1fe924,_0x4ce093){return _0x2625c3(_0x3e1833,_0x47d364,_0x139526,_0x1fe924,_0x4ce093);},'QSTpB':function(_0x2eab07,_0x12d571,_0x35000d,_0x3b66d1){return _0x2eab07(_0x12d571,_0x35000d,_0x3b66d1);},'ApoAh':'Speed'+'\x20%','oCVLD':function(_0x2c6fb1,_0x48b726,_0x35ca56,_0x133937,_0x53c55b,_0xc3a2e0){return _0x2c6fb1(_0x48b726,_0x35ca56,_0x133937,_0x53c55b,_0xc3a2e0);},'fLXLM':_0x50d676(0x166)+_0x50d676(0x368)+'vity','cNPKv':_0x50d676(0x1f5)+'s\x20Mov'+_0x50d676(0x5a3)+'.jump'+'Force'+'\x20and\x20'+'both\x20'+_0x50d676(0x1a5)+'ty\x20va'+'lues.','UpReh':function(_0x4635de,_0x1b08ca){return _0x4635de!==_0x1b08ca;},'xcsHe':function(_0x503255,_0x4268b9,_0x1ed54b,_0x57ff7f){return _0x503255(_0x4268b9,_0x1ed54b,_0x57ff7f);},'KfOYm':_0x57d498['QAMpK'],'jbeBq':_0x57d498[_0x50d676(0x667)],'NHKfu':'Zeroe'+_0x50d676(0x370)+'ement'+_0x50d676(0x19c)+'JumpT'+'ime\x20s'+_0x50d676(0x1cc)+_0x50d676(0x13a)+_0x50d676(0x138)+'down\x20'+'never'+'\x20appl'+_0x50d676(0x193),'rPATS':_0x57d498[_0x50d676(0x553)],'jVraM':'Botto'+'m\x20lef'+'t','OwRik':'Left\x20'+_0x50d676(0x5d4)+'e','IgKKr':function(_0x180232,_0x568777,_0x45aae3,_0x45983d,_0x303a2b,_0xc930f4){var _0xedfd7a=_0x50d676;return _0x57d498[_0xedfd7a(0x419)](_0x180232,_0x568777,_0x45aae3,_0x45983d,_0x303a2b,_0xc930f4);},'ZDLAe':_0x57d498[_0x50d676(0x44c)],'zAbsh':function(_0x11af36,_0x5456ec,_0x1ac4b3,_0x443126){return _0x11af36(_0x5456ec,_0x1ac4b3,_0x443126);},'BGpbt':'Count'+'ers','dHfCU':function(_0x3ed187,_0x4e92a8){var _0xc47b9=_0x50d676;return _0x57d498[_0xc47b9(0x22c)](_0x3ed187,_0x4e92a8);},'ueSPT':_0x50d676(0x5ca),'LIVrZ':function(_0x8c243b,_0xbf023b,_0x4473ea,_0x2079a7,_0x16f625,_0x3b74d5){return _0x8c243b(_0xbf023b,_0x4473ea,_0x2079a7,_0x16f625,_0x3b74d5);},'lfWwN':_0x57d498[_0x50d676(0x157)],'oSZqj':function(_0x40d317,_0x5eb0e4){return _0x40d317(_0x5eb0e4);},'BegZo':function(_0x141eda,_0x4dbf46,_0x5e4f62,_0x627fe6){var _0x454c71=_0x50d676;return _0x57d498[_0x454c71(0x194)](_0x141eda,_0x4dbf46,_0x5e4f62,_0x627fe6);},'DbFgg':_0x57d498[_0x50d676(0x395)],'eVBEq':_0x57d498[_0x50d676(0x1c3)],'RfUpb':function(_0xaf155f,_0xb0aaff,_0xa05812){return _0x57d498['GbzWQ'](_0xaf155f,_0xb0aaff,_0xa05812);},'uQFIw':_0x50d676(0x585)+'my\x20se'+_0x50d676(0x2e3)+'s','wcvrd':function(_0x3b5a46,_0x105faf,_0x55b209){return _0x3b5a46(_0x105faf,_0x55b209);},'tpryZ':'style','nvkPc':_0x50d676(0x356),'wjKgy':function(_0x5c940e,_0x471ea4){var _0x5e7c03=_0x50d676;return _0x57d498[_0x5e7c03(0x683)](_0x5c940e,_0x471ea4);},'RMyTI':_0x57d498[_0x50d676(0x2a2)],'pPHZe':_0x50d676(0x36c)+'viewB'+_0x50d676(0x2b7)+_0x50d676(0x234)+'\x2024\x22\x20'+'class'+'=\x22mn-'+_0x50d676(0x3de)+_0x50d676(0x3d9)+_0x50d676(0x4f0)+_0x50d676(0x2ce)+'12\x2021'+'c-1.5'+_0x50d676(0x4f6)+'4-4.5'+_0x50d676(0x689)+_0x50d676(0x486)+'.5\x201.'+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x50d676(0x48e)+_0x50d676(0x587)+'-2.5\x20'+_0x50d676(0x637)+'.5z\x22\x20'+_0x50d676(0x232)+'\x22none'+'\x22\x20str'+_0x50d676(0x235)+_0x50d676(0x1b1)+'9d\x22\x20s'+_0x50d676(0x5ac)+'-widt'+'h=\x222\x22'+_0x50d676(0x284)+'ke-li'+_0x50d676(0x449)+_0x50d676(0x666)+_0x50d676(0x5e2)+'troke'+_0x50d676(0x32e)+_0x50d676(0x4c4)+_0x50d676(0x3fa)+_0x50d676(0x43d)+_0x50d676(0x151)+'e\x20cx='+'\x2212\x22\x20'+'cy=\x221'+_0x50d676(0x387)+_0x50d676(0x192)+_0x50d676(0x3e6)+_0x50d676(0x3bb)+_0x50d676(0x2aa)+'/></s'+'vg>','oaCLH':_0x57d498['lVCdZ'],'odIXh':_0x50d676(0x620)+'a\x20Kou'+'r','gLHpi':_0x57d498[_0x50d676(0x5b3)],'Lcnti':_0x50d676(0x59d)+_0x50d676(0x67c)+_0x50d676(0x57f)+_0x50d676(0x42c),'fhThQ':'butto'+'n'};if(_0xd79d98[_0x50d676(0x653)+'ck']){if(_0x57d498[_0x50d676(0x357)]!==_0x50d676(0x5b7))setInterval(()=>{var _0x493364=_0x50d676;try{if(_0x5eaf7e['pTjHf'](_0x493364(0x1f7),'MiOym'))return[_0x33cc0c('Adblo'+'ck',_0x493364(0x418)+_0x493364(0x2e0)+'-io_*'+'\x20bann'+'er\x20sl'+_0x493364(0x326),_0x50bcec['adblo'+'ck'],_0x57ffe1=>{_0x2a4657['adblo'+'ck']=_0x57ffe1,_0x2b5fb6();},[_0x5eaf7e[_0x493364(0x1b4)](_0x18d1a6,_0x5eaf7e[_0x493364(0x28c)])])];else for(var _0xaa5b3c of['kour-'+_0x493364(0x69d)+'0x250'+_0x493364(0x6c8)+'nt','kour-'+_0x493364(0x13d)+'8x90-'+_0x493364(0x1b2)+'t','kour-'+_0x493364(0x69d)+_0x493364(0x644)+_0x493364(0x6c8)+'nt','fulls'+_0x493364(0x606)+_0x493364(0x69e)+'s']){var _0x544761=document[_0x493364(0x515)+_0x493364(0x5a3)+'ById'](_0xaa5b3c);if(_0x544761&&_0xaa5b3c===_0x493364(0x4b8)+'creen'+'-banr'+'s'){var _0x5758f8=_0x544761[_0x493364(0x679)+_0x493364(0x48f)];for(var _0x3dd562=0x13bb+-0xe38+0x11*-0x53;_0x5eaf7e[_0x493364(0x6b8)](_0x3dd562,_0x5758f8['lengt'+'h']);_0x3dd562++){if(_0x5758f8[_0x3dd562]['id']&&_0x5758f8[_0x3dd562]['id'][_0x493364(0x25b)+'Of'](_0x493364(0x56a)+_0x493364(0x20b))===-0x8e5+-0x1ee0*-0x1+-0x15fb)_0x5758f8[_0x3dd562][_0x493364(0x49a)]['displ'+'ay']='none';}}else{if(_0x544761)_0x544761[_0x493364(0x49a)][_0x493364(0x626)+'ay']=_0x5eaf7e[_0x493364(0x5f4)];}}}catch(_0x43bb82){}},0x1*-0xbe3+0x2378+-0xfc5);else try{var _0x4d580b=_0x41ffc5[_0x50d676(0x5a8)+_0x50d676(0x4b4)]({'typeName':_0x4e6a0a,'methodName':_0x101d0e,'params':_0x38f63b,'returnType':_0x3c9348},_0x3e3d67);return _0x4d580b['enabl'+'ed']=_0x2e7df3!==![],_0x45d19d[_0x27576f]=_0x4d580b,_0x2d527e['hooks'+_0x50d676(0x47f)]++,_0x4d580b;}catch(_0x496ece){return _0x1d1b3c['warn']('[saku'+'ra-ko'+_0x50d676(0x5d6)+'ook\x20r'+'eg\x20fa'+'iled:',_0x1a0f3c,_0x496ece&&_0x496ece['messa'+'ge']),null;}}var _0x2414bc=document[_0x50d676(0x562)+_0x50d676(0x202)+'ent']('canva'+'s');_0x2414bc[_0x50d676(0x49a)]['cssTe'+'xt']='posit'+_0x50d676(0x3a7)+_0x50d676(0x5ce)+'inset'+':0;wi'+_0x50d676(0x453)+'00vw;'+_0x50d676(0x50a)+_0x50d676(0x6c9)+_0x50d676(0x681)+_0x50d676(0x25b)+':2147'+_0x50d676(0x6a8)+_0x50d676(0x3a8)+'nter-'+_0x50d676(0x2a7)+'s:non'+'e';var _0x28dcd3=_0x2414bc['getCo'+'ntext']('2d');function _0xb36a1b(){var _0x2d14f8=_0x50d676;if(_0x57d498['bSRRX']('liNTl',_0x2d14f8(0x456)))_0x592206['setIt'+'em'](_0x2d14f8(0x21c)+_0x2d14f8(0x5a2)+'r.ui.'+'v1',_0x3daf3c[_0x2d14f8(0x391)+'gify'](_0x53e87e));else try{var _0x2edc40=document['fulls'+'creen'+_0x2d14f8(0x61b)+'nt'],_0x44ca61=_0x2edc40&&_0x2edc40['tagNa'+'me']!==_0x2d14f8(0x39d)+'S'?_0x2edc40:document[_0x2d14f8(0x496)]||document[_0x2d14f8(0x5fb)+_0x2d14f8(0x42f)+_0x2d14f8(0x5a3)];if(_0x57d498[_0x2d14f8(0x43c)](_0x2414bc[_0x2d14f8(0x1b2)+_0x2d14f8(0x2fe)],_0x44ca61))_0x44ca61['appen'+_0x2d14f8(0x17f)+'d'](_0x2414bc);}catch(_0x578a70){try{_0x57d498[_0x2d14f8(0x534)](_0x2d14f8(0x160),_0x2d14f8(0x45d))?document['body']['appen'+_0x2d14f8(0x17f)+'d'](_0x2414bc):(_0x2eb454(_0x126821,-0xa45+-0x1e83+0x2954,_0x2d14f8(0x64c),0x6ac+-0xe4d+-0x7*-0x117+0.1),_0x5eaf7e['uaTQF'](_0x3925d8,_0x420af1,-0xba0*-0x2+-0x5b*0x26+-0x95e,_0x5eaf7e[_0x2d14f8(0x66d)],0xbf5+0x133e+-0x1f33+0.1));}catch(_0xd1f3e9){}}}var _0x4da5ba={'w':0x0,'h':0x0,'dpr':0x0};function _0x5d3978(){var _0x1e3950=_0x50d676,_0x432afd=window['devic'+'ePixe'+'lRati'+'o']||-0x12c1+0xa*0x1ec+-0x76,_0x5dc728=window[_0x1e3950(0x4cf)+'Width'],_0xf0f607=window['inner'+_0x1e3950(0x20a)+'t'];if(_0x5eaf7e['wDCIR'](_0x5dc728,_0x4da5ba['w'])&&_0xf0f607===_0x4da5ba['h']&&_0x5eaf7e[_0x1e3950(0x131)](_0x432afd,_0x4da5ba[_0x1e3950(0x211)]))return;_0x4da5ba['w']=_0x5dc728,_0x4da5ba['h']=_0xf0f607,_0x4da5ba['dpr']=_0x432afd,_0x2414bc[_0x1e3950(0x159)]=Math['round'](_0x5dc728*_0x432afd),_0x2414bc[_0x1e3950(0x50a)+'t']=Math[_0x1e3950(0x5fc)](_0xf0f607*_0x432afd),_0x28dcd3[_0x1e3950(0x692)+_0x1e3950(0x58a)+'rm'](_0x432afd,-0x7*0xce+-0x642+0x2*0x5f2,-0xbc2+-0x10f0+-0x2*-0xe59,_0x432afd,0x4e9*0x2+-0x916+-0x1*0xbc,-0x1bb*0x7+0x4a6+-0x27d*-0x3);}var _0x2b0708=0xe04+0xf1d+-0x1d21,_0x35ee32=performance[_0x50d676(0x430)](),_0x2e9755=-0x6e*-0xd+-0x1a5a+-0x14c4*-0x1;function _0x35055e(_0xd8fb5d){var _0x1d2ff8=_0x50d676,_0x56863a=_0x5eaf7e[_0x1d2ff8(0x1b9)](Number,_0xd79d98[_0x1d2ff8(0x1ba)+'le'])||0x1f8e+0x2381+-0xb2d*0x6,_0x3306a3=(-0x1*-0x2012+-0x2*-0xb21+-0x1*0x3632)*_0x56863a,_0x5e5f59=(0xafb+-0x3d*0x65+0x81*0x1a)*_0x56863a,_0x49a223=_0x5eaf7e['YzTig'](_0x3306a3,0x1295+0x13*-0x156+0x6d0)+_0x5e5f59*(-0x964*0x1+-0x17bc+0x2122),_0x302ec4=_0x3306a3*(0x1ea3+0x741*0x1+-0x1*0x25e1)+_0x5eaf7e[_0x1d2ff8(0x472)](_0x5e5f59,-0xb*-0x25d+0x575+0x17*-0x15e),_0x5755ca=_0xd79d98[_0x1d2ff8(0x36e)],_0x1adb28=_0x5755ca==='br'?_0x5eaf7e['CgbSz'](_0xd8fb5d[_0x1d2ff8(0x306)]-(-0x1*0x860+-0x34d+0xbbd),_0x49a223):_0xd8fb5d[_0x1d2ff8(0x18b)]+(0x13e*0xf+-0x1*-0x977+-0x1c09),_0x14d127=_0x5755ca==='ml'?_0x5eaf7e[_0x1d2ff8(0x1fd)](_0x5eaf7e[_0x1d2ff8(0x68a)](_0xd8fb5d['top'],_0x5eaf7e['qILku'](_0xd8fb5d[_0x1d2ff8(0x50a)+'t'],-0xe7c+-0x19d*-0x6+0x16*0x38)),_0x5eaf7e[_0x1d2ff8(0x691)](_0x302ec4,0x94e+0x2*-0x4c7+-0x6*-0xb)):_0x5eaf7e['CgbSz'](_0xd8fb5d['botto'+'m'],_0x302ec4)-(_0x5eaf7e[_0x1d2ff8(0x471)](_0x5755ca,'bl')?0x1*0x2681+-0x1891+-0x70*0x1f:-0xf07+-0x4*-0x564+-0x5f3),_0x729394=(_0x4004e9,_0x24db11,_0xa8db37,_0x510ee4,_0x29cfc4,_0x52f432,_0x23e71a)=>{var _0x5525da=_0x1d2ff8,_0xbf79c6=_0x25aab6[_0x5525da(0x695)](_0x24db11);_0x28dcd3['save'](),_0x28dcd3[_0x5525da(0x2a4)+_0x5525da(0x49c)]();if(_0x28dcd3['round'+'Rect'])_0x28dcd3['round'+_0x5525da(0x58f)](_0xa8db37,_0x510ee4,_0x29cfc4,_0x52f432,(-0x1e*-0x7c+-0x1de3+-0x7b1*-0x2)*_0x56863a);else _0x28dcd3[_0x5525da(0x2cf)](_0xa8db37,_0x510ee4,_0x29cfc4,_0x52f432);_0x28dcd3[_0x5525da(0x296)+'tyle']=_0xbf79c6?_0x5525da(0x2e1)+_0x5525da(0x519)+_0x5525da(0x614)+_0x5525da(0x329)+'5)':'rgba('+'22,8,'+_0x5525da(0x5ba)+'7)',_0x28dcd3[_0x5525da(0x53c)](),_0x28dcd3[_0x5525da(0x1a2)+'idth']=-0x1*0x6ab+0xc1*-0x2f+0x2a1b,_0x28dcd3['strok'+'eStyl'+'e']=_0xbf79c6?_0x1949bc:_0x5eaf7e[_0x5525da(0x4fb)],_0x28dcd3['strok'+'e'](),_0xbf79c6&&(_0x28dcd3[_0x5525da(0x3ca)+_0x5525da(0x392)+'r']=_0x439006,_0x28dcd3[_0x5525da(0x3ca)+_0x5525da(0x569)]=0x1d59+0x7*0xb3+0x2230*-0x1,_0x28dcd3[_0x5525da(0x53c)](),_0x28dcd3['shado'+'wBlur']=-0x1*-0xd76+-0x1*0x1b0d+0xd97),_0x28dcd3[_0x5525da(0x296)+_0x5525da(0x555)]=_0xbf79c6?_0x5525da(0x5a9):_0x5525da(0x2e1)+_0x5525da(0x1c6)+'35,24'+_0x5525da(0x41d)+')',_0x28dcd3[_0x5525da(0x1e6)+_0x5525da(0x532)]='cente'+'r',_0x28dcd3[_0x5525da(0x638)+'aseli'+'ne']=_0x5eaf7e['bSEoh'],_0x28dcd3[_0x5525da(0x5d3)]=_0x5eaf7e[_0x5525da(0x68a)](_0x5eaf7e['DGNYg'](_0x5eaf7e['UoQDm'],Math['round']((0x139*-0x12+0x5d*-0x19+0x1f23)*_0x56863a)),'px\x20ui'+'-sans'+_0x5525da(0x389)+'f,sys'+_0x5525da(0x34e)+_0x5525da(0x60d)+'s-ser'+'if'),_0x28dcd3['fillT'+_0x5525da(0x1ea)](_0x4004e9,_0x5eaf7e[_0x5525da(0x39a)](_0xa8db37,_0x29cfc4/(0x8*0x399+-0x813+0x2f5*-0x7)),_0x5eaf7e['PLzAX'](_0x510ee4+_0x52f432/(0x21a6+0x2*0x12b8+-0x4714),_0x23e71a?_0x5eaf7e[_0x5525da(0x472)](-0x64f*-0x4+0x1ac3+-0x33fa*0x1,_0x56863a):-0xab4+0x9*0x3+-0xa99*-0x1)),_0x23e71a&&(_0x28dcd3['font']=_0x5eaf7e['llrTX'](_0x5eaf7e[_0x5525da(0x4e9)](_0x5eaf7e[_0x5525da(0x425)],Math['round'](_0x5eaf7e[_0x5525da(0x472)](0x242e+-0xdf7*0x1+-0x162e,_0x56863a))),_0x5eaf7e[_0x5525da(0x444)]),_0x28dcd3[_0x5525da(0x296)+_0x5525da(0x555)]=_0xbf79c6?'#fff':'rgba('+_0x5525da(0x1c6)+_0x5525da(0x13c)+'0,0.5'+'5)',_0x28dcd3[_0x5525da(0x62a)+'ext'](_0x23e71a,_0xa8db37+_0x5eaf7e['qILku'](_0x29cfc4,0x222f+-0x1*-0x531+-0x275e),_0x5eaf7e[_0x5525da(0x1bb)](_0x510ee4+_0x52f432/(-0x1774+0x278*0x2+-0x2*-0x943),(0xf5a+-0x1*0x258a+-0x9e*-0x24)*_0x56863a))),_0x28dcd3['resto'+'re']();};_0x5eaf7e['fOrqf'](_0x729394,'W',_0x1d2ff8(0x6b9),_0x1adb28+_0x3306a3+_0x5e5f59,_0x14d127,_0x3306a3,_0x3306a3),_0x5eaf7e[_0x1d2ff8(0x5cd)](_0x729394,'A',_0x5eaf7e['yaBFA'],_0x1adb28,_0x5eaf7e[_0x1d2ff8(0x39a)](_0x5eaf7e['TymlV'](_0x14d127,_0x3306a3),_0x5e5f59),_0x3306a3,_0x3306a3),_0x729394('S',_0x5eaf7e[_0x1d2ff8(0x4e7)],_0x5eaf7e[_0x1d2ff8(0x68a)](_0x1adb28+_0x3306a3,_0x5e5f59),_0x5eaf7e[_0x1d2ff8(0x4e9)](_0x14d127,_0x3306a3)+_0x5e5f59,_0x3306a3,_0x3306a3),_0x729394('D',_0x5eaf7e[_0x1d2ff8(0x426)],_0x1adb28+_0x5eaf7e[_0x1d2ff8(0x38a)](_0x3306a3,_0x5e5f59)*(0x550*-0x2+-0x6eb+0x118d),_0x5eaf7e[_0x1d2ff8(0x69b)](_0x14d127,_0x3306a3)+_0x5e5f59,_0x3306a3,_0x3306a3);var _0x56e760=(_0x49a223-_0x5e5f59)/(-0x21*0x45+-0x1*-0x3b0+0x537),_0x22fb0c=_0x14d127+_0x5eaf7e[_0x1d2ff8(0x1bb)](_0x3306a3,_0x5e5f59)*(0x1*0x1334+-0x1247+-0x2f*0x5);_0x5eaf7e[_0x1d2ff8(0x65a)](_0x729394,_0x1d2ff8(0x4b2),_0x1d2ff8(0x32c)+'1',_0x1adb28,_0x22fb0c,_0x56e760,_0x3306a3,_0xd79d98[_0x1d2ff8(0x586)]?_0x5eaf7e['Eqyof'](_0x84647c(-0x2425+-0x26e1+0x1*0x4b07),'\x20CPS'):''),_0x729394(_0x5eaf7e[_0x1d2ff8(0x26d)],_0x5eaf7e[_0x1d2ff8(0x60e)],_0x5eaf7e[_0x1d2ff8(0x66b)](_0x1adb28+_0x56e760,_0x5e5f59),_0x22fb0c,_0x56e760,_0x3306a3,_0xd79d98['ksCps']?_0x5eaf7e[_0x1d2ff8(0x4e9)](_0x84647c(0x2da+-0x1dd3+0x1afc),'\x20CPS'):''),_0x729394('',_0x1d2ff8(0x42d),_0x1adb28,_0x22fb0c+_0x3306a3+_0x5e5f59,_0x49a223,_0x5eaf7e['FvhWs'](_0x3306a3,-0x145d+0x17cd+-0x370+0.45));}function _0x3630c4(_0x2ff088){var _0x2dcd2a=_0x50d676,_0x6ab792=_0x2ff088['width']/(0xee5+0x1ac7+-0x29aa),_0x573dae=_0x5eaf7e['sJxzE'](_0x2ff088['heigh'+'t'],-0x22d1+-0x125*0x2+0x251d),_0x2804d9=Number(_0xd79d98['chSiz'+'e'])||0x21b7+0x1*-0x155a+0x62e*-0x2,_0x15c64f=/^#[0-9a-f]{6}$/i[_0x2dcd2a(0x68c)](_0xd79d98[_0x2dcd2a(0x62b)+'or'])?_0xd79d98[_0x2dcd2a(0x62b)+'or']:'#ff6b'+'9d';_0x28dcd3[_0x2dcd2a(0x244)](),_0x28dcd3['strok'+'eStyl'+'e']=_0x15c64f,_0x28dcd3[_0x2dcd2a(0x296)+_0x2dcd2a(0x555)]=_0x15c64f,_0x28dcd3['lineW'+_0x2dcd2a(0x36b)]=Math[_0x2dcd2a(0x224)](-0x2394*-0x1+0x6*-0xb3+-0x1*0x1f61+0.5,_0x5eaf7e['XDRUC'](-0x251+-0x3e1+0x31a*0x2,_0x2804d9)),_0x28dcd3[_0x2dcd2a(0x3ca)+_0x2dcd2a(0x392)+'r']=_0x15c64f,_0x28dcd3[_0x2dcd2a(0x3ca)+_0x2dcd2a(0x569)]=0x2444+-0x12f3*0x1+0x1*-0x114b;var _0x2f2f08=(0x6*0x1c9+0xd*0x186+-0x3*0xa2a)*_0x2804d9,_0x4fb0e0=(-0x2c*-0x20+0xe07+-0x1*0x137f)*_0x2804d9;_0x28dcd3[_0x2dcd2a(0x2a4)+_0x2dcd2a(0x49c)](),_0x28dcd3['moveT'+'o'](_0x6ab792-_0x2f2f08-_0x4fb0e0,_0x573dae),_0x28dcd3[_0x2dcd2a(0x40a)+'o'](_0x6ab792-_0x2f2f08,_0x573dae),_0x28dcd3[_0x2dcd2a(0x397)+'o'](_0x5eaf7e['oSMJh'](_0x6ab792,_0x2f2f08),_0x573dae),_0x28dcd3[_0x2dcd2a(0x40a)+'o'](_0x6ab792+_0x2f2f08+_0x4fb0e0,_0x573dae),_0x28dcd3['moveT'+'o'](_0x6ab792,_0x5eaf7e[_0x2dcd2a(0x1fd)](_0x5eaf7e['PLzAX'](_0x573dae,_0x2f2f08),_0x4fb0e0)),_0x28dcd3['lineT'+'o'](_0x6ab792,_0x5eaf7e[_0x2dcd2a(0x60c)](_0x573dae,_0x2f2f08)),_0x28dcd3[_0x2dcd2a(0x397)+'o'](_0x6ab792,_0x573dae+_0x2f2f08),_0x28dcd3[_0x2dcd2a(0x40a)+'o'](_0x6ab792,_0x5eaf7e[_0x2dcd2a(0x5cc)](_0x5eaf7e[_0x2dcd2a(0x3c4)](_0x573dae,_0x2f2f08),_0x4fb0e0)),_0x28dcd3['strok'+'e'](),_0x28dcd3['begin'+_0x2dcd2a(0x49c)](),_0x28dcd3[_0x2dcd2a(0x327)](_0x6ab792,_0x573dae,(0x1*-0x1a99+-0x1*-0x22e9+-0x84f+0.6000000000000001)*_0x2804d9,0xe41+-0x37*-0x75+-0x2764,Math['PI']*(0x1*-0x19d+-0x1e*-0x51+-0x7df)),_0x28dcd3[_0x2dcd2a(0x53c)](),_0x28dcd3['resto'+'re']();}function _0x6011be(_0x228b2b){var _0x1d2b28=_0x50d676,_0x10e3a6={'XJPCG':'mouse'};_0x28dcd3[_0x1d2b28(0x244)](),_0x28dcd3['font']=_0x5eaf7e['RKAdY'],_0x28dcd3[_0x1d2b28(0x1e6)+'lign']=_0x1d2b28(0x18b),_0x28dcd3['textB'+'aseli'+'ne']=_0x5eaf7e[_0x1d2b28(0x67f)];var _0x3d4b52=0x469*0x7+-0x1*0x607+0x18ac*-0x1,_0x140a6f=0x20ee+-0xa67*0x2+-0xc14,_0x98e5b8=(_0x43ca8a,_0x3d7967)=>{var _0x27fe45=_0x1d2b28;if(_0x5eaf7e['wDCIR'](_0x5eaf7e['nzKJd'],_0x27fe45(0x1ef))){if(!_0x254644['__sak'+_0x27fe45(0x5aa)])_0x2d3673['delet'+'e'](_0x10e3a6[_0x27fe45(0x502)]+(_0x5cf0b4['butto'+'n']+(0x35+0x1*0x7a7+-0x7db)));}else _0x28dcd3[_0x27fe45(0x296)+'tyle']=_0x5eaf7e['fbhBt'](_0x3d7967,_0x5eaf7e['pQVoA']),_0x28dcd3[_0x27fe45(0x62a)+'ext'](_0x43ca8a,_0x140a6f,_0x3d4b52),_0x3d4b52+=-0x12d1+-0xa3*0x3d+-0x1*-0x39b8;};_0x5eaf7e[_0x1d2b28(0x3ab)](_0x98e5b8,_0x5eaf7e[_0x1d2b28(0x61d)],'#ff6b'+'9d');if(_0xd79d98['fps'])_0x98e5b8(_0x5eaf7e[_0x1d2b28(0x546)](_0x2e9755,'\x20FPS'));if(!_0x2d6dab[_0x1d2b28(0x269)+_0x1d2b28(0x2ac)])_0x5eaf7e['AFWrh'](_0x98e5b8,'waiti'+_0x1d2b28(0x417)+'r\x20gam'+'e…',_0x5eaf7e[_0x1d2b28(0x2d1)]);_0x28dcd3[_0x1d2b28(0x537)+'re']();}function _0x4080f4(){var _0xeeb131=_0x50d676,_0x25d294={'oCWym':function(_0x2b4eac,_0x1b29e1,_0x2cd541){return _0x2b4eac(_0x1b29e1,_0x2cd541);},'EeTUo':'noRec'+'oil'};requestAnimationFrame(_0x4080f4),_0x2b0708++;var _0x577fbf=performance[_0xeeb131(0x430)]();_0x57d498['bfzEl'](_0x577fbf-_0x35ee32,0x1*-0x23f2+-0x123b+-0x3821*-0x1)&&(_0x57d498[_0xeeb131(0x534)](_0x57d498[_0xeeb131(0x170)],'CHXcf')?(_0x2e9755=Math[_0xeeb131(0x5fc)](_0x57d498['NrcAi'](_0x2b0708*(0x1544+0x2*-0x356+-0xab0),_0x577fbf-_0x35ee32)),_0x2b0708=-0xb76+0x2708+-0x1b92,_0x35ee32=_0x577fbf):(_0x5da77b['noRec'+_0xeeb131(0x3cd)]=_0x369d73,_0x87466e(),_0x25d294['oCWym'](_0x4d262c,_0x25d294[_0xeeb131(0x658)],_0x2bb37d)));_0x5d3978(),_0x57d498[_0xeeb131(0x16a)](_0xb36a1b),_0x28dcd3[_0xeeb131(0x185)+'Rect'](-0xeea+0x1d7b*-0x1+-0x2c65*-0x1,0x7f*-0x49+-0xbaf+0x1*0x2fe6,_0x4da5ba['w'],_0x4da5ba['h']);var _0xc5c94f={'left':0x0,'top':0x0,'right':_0x4da5ba['w'],'bottom':_0x4da5ba['h'],'width':_0x4da5ba['w'],'height':_0x4da5ba['h']};if(_0xd79d98[_0xeeb131(0x54c)+_0xeeb131(0x676)])_0x3630c4(_0xc5c94f);if(_0xd79d98[_0xeeb131(0x436)+'rokes'])_0x35055e(_0xc5c94f);_0x6011be(_0xc5c94f);}var _0x55f264=document['creat'+_0x50d676(0x202)+_0x50d676(0x200)](_0x57d498['lDGud']);_0x55f264['id']=_0x57d498['NMROJ'],_0x55f264[_0x50d676(0x49a)][_0x50d676(0x616)+'xt']=_0x50d676(0x1f8)+_0x50d676(0x3a7)+'ixed;'+_0x50d676(0x624)+':0;z-'+_0x50d676(0x25b)+':2147'+'48364'+'7;poi'+_0x50d676(0x582)+_0x50d676(0x2a7)+_0x50d676(0x4ff)+'e;';var _0x49aa41=_0x55f264['attac'+_0x50d676(0x21a)+'ow']({'mode':_0x57d498['dxMxY']});(document['body']||document[_0x50d676(0x5fb)+'entEl'+_0x50d676(0x5a3)])['appen'+'dChil'+'d'](_0x55f264);var _0x440de6=![],_0x1a1211={};try{_0x1a1211=JSON[_0x50d676(0x609)](localStorage[_0x50d676(0x27d)+'em'](_0x57d498[_0x50d676(0x43e)])||'{}');}catch(_0x180e85){}function _0x19e251(){var _0x20297f=_0x50d676;if(_0x57d498[_0x20297f(0x534)](_0x20297f(0x307),'pfqgI'))_0x42d4ea['shado'+_0x20297f(0x392)+'r']=_0x1ce02f,_0x3ca163['shado'+_0x20297f(0x569)]=0x1*0x1d51+0x1eea+-0x3c2d,_0x6fcc09[_0x20297f(0x53c)](),_0x28755e[_0x20297f(0x3ca)+_0x20297f(0x569)]=0x26e4+0x1*-0x118a+0x155a*-0x1;else try{localStorage['setIt'+'em'](_0x57d498[_0x20297f(0x43e)],JSON[_0x20297f(0x391)+_0x20297f(0x320)](_0x1a1211));}catch(_0x50038c){}}function _0x3d4db6(_0x573874,_0x2c3d80){var _0x335ed0=_0x50d676;if(_0x57d498[_0x335ed0(0x32f)]!==_0x57d498[_0x335ed0(0x674)]){var _0x107b46=('2|5|3'+_0x335ed0(0x390)+'4|6')['split']('|'),_0x3db8fe=0x1*0x1681+-0x34*0x3b+-0xa85;while(!![]){switch(_0x107b46[_0x3db8fe++]){case'0':_0x8bab00[_0x335ed0(0x599)+'tribu'+'te'](_0x57d498['InLUN'],String(!!_0x573874));continue;case'1':_0x8bab00[_0x335ed0(0x599)+_0x335ed0(0x60a)+'te']('role',_0x57d498[_0x335ed0(0x20e)]);continue;case'2':var _0x8bab00=document['creat'+'eElem'+'ent'](_0x57d498[_0x335ed0(0x67a)]);continue;case'3':_0x8bab00[_0x335ed0(0x58d)+_0x335ed0(0x219)]=_0x57d498[_0x335ed0(0x576)];continue;case'4':_0x8bab00[_0x335ed0(0x297)+'ck']=_0x36cd59=>{var _0x349813=_0x335ed0;_0x36cd59['stopP'+_0x349813(0x2c1)+'ation']();var _0x423791=_0x8bab00[_0x349813(0x239)+'tribu'+'te'](_0x349813(0x259)+'check'+'ed')!==_0x5eaf7e[_0x349813(0x1c7)];_0x8bab00[_0x349813(0x599)+_0x349813(0x60a)+'te'](_0x5eaf7e[_0x349813(0x678)],_0x5eaf7e[_0x349813(0x1b4)](String,_0x423791)),_0x2c3d80(_0x423791);};continue;case'5':_0x8bab00[_0x335ed0(0x240)]=_0x335ed0(0x522)+'n';continue;case'6':return _0x8bab00;}break;}}else try{_0x39457b['setIt'+'em'](_0x335ed0(0x21c)+'a.kou'+'r.v1',_0x2dc8a7[_0x335ed0(0x391)+_0x335ed0(0x320)](_0x4ba0dc));}catch(_0x3dba00){}}function _0x5dcae2(_0x153d33,_0x31d8ce,_0x2acf42,_0x390294,_0x41a301){var _0x3fa68f=_0x50d676,_0x478547={'udZkL':function(_0x107434,_0x29bec4){var _0x339cdf=_0x4420;return _0x57d498[_0x339cdf(0x643)](_0x107434,_0x29bec4);},'KPkPd':function(_0x8f8ab8,_0x47c971){return _0x8f8ab8*_0x47c971;},'FVQwa':function(_0x2dd022,_0x2864d4){return _0x2dd022/_0x2864d4;},'KWDbZ':function(_0x4f7550,_0x3760da){return _0x57d498['ZBCHR'](_0x4f7550,_0x3760da);}},_0x462012=document['creat'+_0x3fa68f(0x202)+_0x3fa68f(0x200)](_0x57d498[_0x3fa68f(0x358)]);_0x462012['class'+'Name']=_0x57d498[_0x3fa68f(0x4dc)];var _0x5223ff=document[_0x3fa68f(0x562)+_0x3fa68f(0x202)+'ent'](_0x57d498[_0x3fa68f(0x34a)]);_0x5223ff[_0x3fa68f(0x240)]='range',_0x5223ff['class'+_0x3fa68f(0x219)]=_0x57d498['lltkC'],_0x5223ff[_0x3fa68f(0x17e)]=_0x31d8ce,_0x5223ff[_0x3fa68f(0x224)]=_0x2acf42,_0x5223ff[_0x3fa68f(0x2bb)]=_0x390294,_0x5223ff[_0x3fa68f(0x6c0)]=_0x153d33;var _0x4a764d=document['creat'+'eElem'+'ent'](_0x3fa68f(0x33d));_0x4a764d[_0x3fa68f(0x58d)+'Name']=_0x57d498['YXBRY'],_0x4a764d[_0x3fa68f(0x642)+'onten'+'t']=_0x57d498['tpnlv'](String,_0x153d33);var _0x3ace50=()=>{var _0x53caf4=_0x3fa68f;_0x4a764d[_0x53caf4(0x642)+'onten'+'t']=_0x478547[_0x53caf4(0x62c)](String,_0x5223ff[_0x53caf4(0x6c0)]),_0x462012[_0x53caf4(0x49a)][_0x53caf4(0x30c)+'opert'+'y']('--p',_0x478547[_0x53caf4(0x21d)](_0x478547[_0x53caf4(0x19a)](_0x478547['KWDbZ'](_0x5223ff['value'],_0x31d8ce),_0x2acf42-_0x31d8ce),-0x6b*0x5+-0xb*0x2d3+-0x71*-0x4c)+'%');};return _0x5223ff['oninp'+'ut']=()=>{_0x3ace50(),_0x41a301(Number(_0x5223ff['value']));},_0x57d498[_0x3fa68f(0x16a)](_0x3ace50),_0x462012['appen'+'d'](_0x5223ff,_0x4a764d),_0x462012;}function _0x5a16f1(_0x1bf714,_0x490150){var _0x56f3d9=_0x50d676,_0x343d1b=document[_0x56f3d9(0x562)+'eElem'+_0x56f3d9(0x200)](_0x5eaf7e[_0x56f3d9(0x2c6)]);return _0x343d1b[_0x56f3d9(0x240)]=_0x56f3d9(0x334),_0x343d1b[_0x56f3d9(0x58d)+'Name']='sk-co'+_0x56f3d9(0x246),_0x343d1b[_0x56f3d9(0x6c0)]=/^#[0-9a-f]{6}$/i['test'](_0x1bf714)?_0x1bf714:'#ff6b'+'9d',_0x343d1b[_0x56f3d9(0x38b)+'ut']=()=>_0x490150(_0x343d1b[_0x56f3d9(0x6c0)]),_0x343d1b;}function _0x2d5c62(_0x11ebae,_0x2c7af4,_0x29af26){var _0x372087=_0x50d676;if('DsRZk'===_0x372087(0x2b3)){var _0x129426=document['creat'+'eElem'+_0x372087(0x200)](_0x372087(0x274)+'t');_0x129426[_0x372087(0x58d)+'Name']=_0x57d498[_0x372087(0x43b)];for(var [_0xa7d0ac,_0x5f09de]of _0x2c7af4){if(_0x57d498['wNiyw']!==_0x57d498['IJVBE']){var _0x45d6b5=document['creat'+'eElem'+'ent'](_0x372087(0x28e)+'n');_0x45d6b5['value']=_0xa7d0ac,_0x45d6b5[_0x372087(0x642)+_0x372087(0x254)+'t']=_0x5f09de,_0x129426[_0x372087(0x6ac)+'dChil'+'d'](_0x45d6b5);}else _0x1caade['jumpP'+'ct']=_0x510840,_0x5eaf7e['WrtSk'](_0x29989c);}return _0x129426[_0x372087(0x6c0)]=_0x11ebae,_0x129426[_0x372087(0x2e8)+'nge']=()=>_0x29af26(_0x129426[_0x372087(0x6c0)]),_0x129426;}else return _0x253d5f[_0x372087(0x698)](_0x372087(0x6b6)+_0x372087(0x44a)+'ur]\x20h'+'ook\x20r'+_0x372087(0x41e)+'iled:',_0x148400,_0x486f0b&&_0x1347eb['messa'+'ge']),null;}function _0x3f4c74(_0x2e76e2,_0x286cfe){var _0x41c893=_0x50d676,_0x58e0f3={'VhmTf':'input','FlRgl':'sk-sl'+_0x41c893(0x5f3),'iICtg':'span','VCsUH':function(_0x1db4ba){return _0x1db4ba();},'AJbOz':function(_0x198893,_0x150542){return _0x198893-_0x150542;},'Ewazc':_0x57d498['YqIZO'],'RxSVn':function(_0x1e43a7){return _0x57d498['CgWwq'](_0x1e43a7);}};if(_0x57d498[_0x41c893(0x4ae)](_0x57d498[_0x41c893(0x27b)],_0x57d498['PDMAY']))_0x31badc['damag'+_0x41c893(0x22f)]=_0x3e51fe,_0x259dc8();else{var _0x4c1f01=document['creat'+_0x41c893(0x202)+'ent'](_0x57d498[_0x41c893(0x67a)]);return _0x4c1f01['type']=_0x41c893(0x522)+'n',_0x4c1f01[_0x41c893(0x58d)+_0x41c893(0x219)]='sk-bt'+'n',_0x4c1f01[_0x41c893(0x642)+_0x41c893(0x254)+'t']=_0x2e76e2,_0x4c1f01['oncli'+'ck']=_0xd20681=>{var _0x3d1a45=_0x41c893,_0x176d6b={'XEBmd':'--p','CIlzw':function(_0xdf43ca,_0xf9f99a){return _0xdf43ca+_0xf9f99a;},'qCUar':function(_0x51bb37,_0x149d70){return _0x51bb37/_0x149d70;},'YfmNa':function(_0x58f38d,_0x1ee284){return _0x58e0f3['AJbOz'](_0x58f38d,_0x1ee284);}};if(_0x3d1a45(0x498)===_0x58e0f3[_0x3d1a45(0x581)]){var _0x7e0ce1=_0xfc399f[_0x3d1a45(0x562)+'eElem'+_0x3d1a45(0x200)]('div');_0x7e0ce1[_0x3d1a45(0x58d)+_0x3d1a45(0x219)]='sk-ra'+'nge';var _0x1b1f72=_0xb6fd20[_0x3d1a45(0x562)+_0x3d1a45(0x202)+_0x3d1a45(0x200)](_0x58e0f3['VhmTf']);_0x1b1f72['type']=_0x3d1a45(0x4ef),_0x1b1f72['class'+_0x3d1a45(0x219)]=_0x58e0f3[_0x3d1a45(0x344)],_0x1b1f72[_0x3d1a45(0x17e)]=_0x5536aa,_0x1b1f72[_0x3d1a45(0x224)]=_0x43f7e0,_0x1b1f72['step']=_0x1f34a4,_0x1b1f72[_0x3d1a45(0x6c0)]=_0xb105b6;var _0x11074c=_0x13aab3[_0x3d1a45(0x562)+'eElem'+_0x3d1a45(0x200)](_0x58e0f3[_0x3d1a45(0x477)]);_0x11074c[_0x3d1a45(0x58d)+'Name']='sk-va'+'l',_0x11074c['textC'+'onten'+'t']=_0x9bf2ad(_0x5a4bbb);var _0x5eff73=()=>{var _0x546788=_0x3d1a45;_0x11074c[_0x546788(0x642)+_0x546788(0x254)+'t']=_0x45f8ab(_0x1b1f72[_0x546788(0x6c0)]),_0x7e0ce1['style'][_0x546788(0x30c)+_0x546788(0x464)+'y'](_0x176d6b[_0x546788(0x37c)],_0x176d6b['CIlzw'](_0x176d6b['qCUar'](_0x1b1f72['value']-_0x38a116,_0x176d6b[_0x546788(0x198)](_0x2f705d,_0x53e95b))*(-0x4cf*0x8+-0xc3b*0x1+-0x1c3*-0x1d),'%'));};return _0x1b1f72[_0x3d1a45(0x38b)+'ut']=()=>{var _0xe11d59=_0x3d1a45;_0x5eff73(),_0x58b682(_0x4a816c(_0x1b1f72[_0xe11d59(0x6c0)]));},_0x58e0f3[_0x3d1a45(0x23b)](_0x5eff73),_0x7e0ce1[_0x3d1a45(0x6ac)+'d'](_0x1b1f72,_0x11074c),_0x7e0ce1;}else _0xd20681['stopP'+'ropag'+'ation'](),_0x58e0f3['RxSVn'](_0x286cfe);},_0x4c1f01;}}function _0xb49580(_0x4b29b2,_0x2f5ac5,_0x2b79a6){var _0x2831b5=_0x50d676,_0x5e37d8=(_0x2831b5(0x378)+_0x2831b5(0x13f)+_0x2831b5(0x2fb))[_0x2831b5(0x21f)]('|'),_0x4376c7=-0x295*-0x4+-0xfba+0x2b3*0x2;while(!![]){switch(_0x5e37d8[_0x4376c7++]){case'0':var _0x207e22=document[_0x2831b5(0x562)+'eElem'+_0x2831b5(0x200)](_0x2831b5(0x33d));continue;case'1':if(_0x2f5ac5){var _0x57a994=document[_0x2831b5(0x562)+'eElem'+_0x2831b5(0x200)](_0x2831b5(0x1cf));_0x57a994[_0x2831b5(0x58d)+_0x2831b5(0x219)]=_0x57d498['yUVOk'],_0x57a994['textC'+'onten'+'t']=_0x2f5ac5,_0x207e22[_0x2831b5(0x6ac)+_0x2831b5(0x17f)+'d'](_0x57a994);}continue;case'2':var _0x3c4440=document['creat'+_0x2831b5(0x202)+_0x2831b5(0x200)](_0x2831b5(0x443));continue;case'3':_0x207e22[_0x2831b5(0x642)+_0x2831b5(0x254)+'t']=_0x4b29b2;continue;case'4':_0x207e22[_0x2831b5(0x58d)+_0x2831b5(0x219)]='sk-la'+_0x2831b5(0x14b);continue;case'5':_0x3c4440['class'+_0x2831b5(0x219)]=_0x57d498['cnwqn'];continue;case'6':_0x3c4440['appen'+'d'](_0x207e22,_0x2b79a6);continue;case'7':return _0x3c4440;}break;}}function _0x7ad649(_0x45c590,_0x11c27a){var _0x48af85=_0x50d676,_0x34ee2b=document['creat'+_0x48af85(0x202)+_0x48af85(0x200)](_0x57d498[_0x48af85(0x358)]);return _0x34ee2b[_0x48af85(0x58d)+'Name']=_0x57d498['pnogw']('sk-no'+'te',_0x11c27a?_0x57d498[_0x48af85(0x416)]:''),_0x34ee2b['textC'+'onten'+'t']=_0x45c590,_0x34ee2b;}function _0x5855cf(_0x189fe5,_0x108052,_0x14c507,_0x2dbf74,_0x36ac08){var _0x1f76b3=_0x50d676,_0x1c4ce7=document['creat'+'eElem'+'ent'](_0x5eaf7e[_0x1f76b3(0x490)]);_0x1c4ce7[_0x1f76b3(0x58d)+'Name']=_0x5eaf7e['oSMJh'](_0x1f76b3(0x584)+'rd',_0x14c507?_0x5eaf7e[_0x1f76b3(0x6b3)]:'');var _0x2c794f=document[_0x1f76b3(0x562)+_0x1f76b3(0x202)+'ent'](_0x1f76b3(0x443));_0x2c794f['class'+'Name']='sk-ca'+'rd-he'+'ad';var _0x16d693=document[_0x1f76b3(0x562)+_0x1f76b3(0x202)+_0x1f76b3(0x200)](_0x5eaf7e[_0x1f76b3(0x490)]);_0x16d693[_0x1f76b3(0x58d)+'Name']=_0x5eaf7e[_0x1f76b3(0x6af)];var _0x2102a7=document[_0x1f76b3(0x562)+'eElem'+'ent'](_0x5eaf7e[_0x1f76b3(0x2fa)]);_0x2102a7[_0x1f76b3(0x642)+_0x1f76b3(0x254)+'t']=_0x189fe5,_0x16d693['appen'+_0x1f76b3(0x17f)+'d'](_0x2102a7);if(_0x2dbf74){var _0x2464ec=_0x5eaf7e[_0x1f76b3(0x33f)](_0x3d4db6,_0x14c507,_0x1152fb=>{var _0x2f2a73=_0x1f76b3;_0x1c4ce7[_0x2f2a73(0x58d)+_0x2f2a73(0x216)]['toggl'+'e']('on',_0x1152fb),_0x2dbf74(_0x1152fb);});_0x2c794f[_0x1f76b3(0x6ac)+'d'](_0x16d693,_0x2464ec);}else _0x5eaf7e[_0x1f76b3(0x3b0)]!==_0x5eaf7e['AZuUm']?_0x2c794f['appen'+_0x1f76b3(0x17f)+'d'](_0x16d693):(_0x2fa2b8[_0x1f76b3(0x586)]=_0x978085,_0x546233());_0x1c4ce7[_0x1f76b3(0x6ac)+'dChil'+'d'](_0x2c794f);if(_0x36ac08&&_0x36ac08[_0x1f76b3(0x56b)+'h']){var _0x9ce50b=_0x5eaf7e[_0x1f76b3(0x286)]['split']('|'),_0x34ede7=0x1acd+-0x1bf+0x190e*-0x1;while(!![]){switch(_0x9ce50b[_0x34ede7++]){case'0':var _0x22971a=document['creat'+_0x1f76b3(0x202)+_0x1f76b3(0x200)](_0x5eaf7e['YjyLT']);continue;case'1':_0x22971a['class'+_0x1f76b3(0x219)]=_0x1f76b3(0x201)+_0x1f76b3(0x40e);continue;case'2':_0x5a87ca[_0x1f76b3(0x58d)+_0x1f76b3(0x219)]=_0x5eaf7e[_0x1f76b3(0x6c2)];continue;case'3':_0x22971a[_0x1f76b3(0x642)+_0x1f76b3(0x254)+'t']=_0x108052;continue;case'4':_0x5a87ca[_0x1f76b3(0x6ac)+'dChil'+'d'](_0x22971a);continue;case'5':var _0x5a87ca=document[_0x1f76b3(0x562)+'eElem'+'ent'](_0x1f76b3(0x443));continue;case'6':_0x1c4ce7['appen'+_0x1f76b3(0x17f)+'d'](_0x5a87ca);continue;case'7':for(var _0x5d3fba of _0x36ac08)_0x5a87ca[_0x1f76b3(0x6ac)+'dChil'+'d'](_0x5d3fba);continue;}break;}}return _0x1c4ce7;}var _0x1b1c3f=[{'id':'comba'+'t','label':'Comba'+'t'},{'id':'move','label':_0x50d676(0x367)},{'id':_0x50d676(0x2eb)+'l','label':_0x57d498[_0x50d676(0x32d)]},{'id':_0x57d498[_0x50d676(0x15e)],'label':'Misc'},{'id':_0x57d498[_0x50d676(0x22d)],'label':'Safet'+'y'}];function _0x391615(){var _0x3aa2bf=_0x50d676,_0x4c0c8d={'GRXuH':_0x3aa2bf(0x6c3)+_0x3aa2bf(0x510)+_0x3aa2bf(0x35f)+_0x3aa2bf(0x524)+_0x3aa2bf(0x1f2)},_0x5d136b=_0x2d6dab[_0x3aa2bf(0x3a4)+_0x3aa2bf(0x3a0)]?_0x3aa2bf(0x1dd)+_0x3aa2bf(0x5a5)+'—\x20ove'+'rlay\x20'+_0x3aa2bf(0x30e)+'\x20no\x20h'+_0x3aa2bf(0x238)+_0x3aa2bf(0x3f2)+'ad\x20to'+_0x3aa2bf(0x62e)+')':_0x2d6dab[_0x3aa2bf(0x435)]?_0x5eaf7e[_0x3aa2bf(0x39a)](_0x5eaf7e['TymlV'](_0x5eaf7e[_0x3aa2bf(0x4d8)]('UWMK\x20'+_0x3aa2bf(0x1d2)+'\x20',_0x2d6dab[_0x3aa2bf(0x30d)+_0x3aa2bf(0x47f)]?_0x5eaf7e[_0x3aa2bf(0x314)](_0x5eaf7e[_0x3aa2bf(0x559)](_0x2d6dab[_0x3aa2bf(0x30d)+'Ok'],'/')+_0x2d6dab[_0x3aa2bf(0x30d)+_0x3aa2bf(0x47f)],_0x5eaf7e['lfmXZ']):_0x5eaf7e[_0x3aa2bf(0x34c)])+_0x5eaf7e[_0x3aa2bf(0x3e4)]+(_0x2d6dab['gameL'+_0x3aa2bf(0x2ac)]?'loade'+'d':_0x5eaf7e['aXYKL']),_0x5eaf7e['APBSq'])+(_0x2d6dab['shoot'+'ers']?_0x3aa2bf(0x445):'none')+_0x5eaf7e['KYNiu'],_0x2d6dab['movem'+'ents']?_0x5eaf7e[_0x3aa2bf(0x684)]:_0x3aa2bf(0x27a)):_0x5eaf7e['etuNy'];if(_0x2d6dab['lastE'+'rror'])_0x5d136b+='\x20|\x20ER'+_0x3aa2bf(0x318)+_0x2d6dab[_0x3aa2bf(0x1d9)+_0x3aa2bf(0x19e)];return _0x5eaf7e['HeSVJ'](_0x5855cf,_0x5eaf7e['ReDgh'],_0x5d136b,_0x2d6dab['uwmk'],null,[_0xb49580(_0x3aa2bf(0x2ba)+'PS\x20un'+_0x3aa2bf(0x1d4),_0x3aa2bf(0x2d5)+_0x3aa2bf(0x66e)+_0x3aa2bf(0x3b5)+_0x3aa2bf(0x544)+'plica'+_0x3aa2bf(0x4bd)+_0x3aa2bf(0x589)+_0x3aa2bf(0x591)+'Frame'+'Rate',_0x3f4c74(_0x5eaf7e['ZTAIu'],()=>{var _0x4385cb=_0x3aa2bf;try{if(_0x3f1a0c)_0x3f1a0c['call'](_0x4c0c8d['GRXuH'],'set_t'+'arget'+_0x4385cb(0x128)+'Rate',[0x973*-0x1+0x2fa*-0x7+0x1f39*0x1]);}catch(_0x4f67d8){}}))]);}function _0x8c7059(_0x5ca84b){var _0x5c3c83=_0x50d676,_0x15fc78={'bxPWn':function(_0x461290,_0x1975c0){return _0x461290>_0x1975c0;},'QzTtU':function(_0x41c434,_0x13375f){return _0x5eaf7e['LnnNP'](_0x41c434,_0x13375f);},'HxGQi':function(_0x31826c,_0x3ec2f0){return _0x5eaf7e['xHzcA'](_0x31826c,_0x3ec2f0);},'NGrEh':function(_0x127d42,_0x1b087a){return _0x127d42<_0x1b087a;},'UTcMW':_0x5c3c83(0x1a9),'VXzll':function(_0x7f84c9,_0x77b0a5){return _0x5eaf7e['DZhgG'](_0x7f84c9,_0x77b0a5);},'JbCGk':_0x5eaf7e['NFadg'],'sEMFk':'\x20hook'+'s','ksprM':_0x5c3c83(0x445),'WVsHw':_0x5eaf7e['NkreD'],'UiFPA':function(_0x598f99){return _0x598f99();},'nzZzm':_0x5c3c83(0x671),'flyNf':_0x5c3c83(0x424),'uADZa':_0x5c3c83(0x31d),'wrfdq':_0x5eaf7e[_0x5c3c83(0x672)],'xGNiA':'OHeal'+'th','uIGwN':_0x5c3c83(0x36f)+_0x5c3c83(0x1a7)+'keHea'+_0x5c3c83(0x2ae),'VmNuh':_0x5eaf7e[_0x5c3c83(0x2b9)],'xMcRb':_0x5c3c83(0x20f)+'e','jqYAK':function(_0x50b128,_0x23fdbb,_0x446494,_0x4398c1,_0x4e70ea,_0x302b5c,_0x38fcdc,_0x133e39){return _0x50b128(_0x23fdbb,_0x446494,_0x4398c1,_0x4e70ea,_0x302b5c,_0x38fcdc,_0x133e39);},'mWiMa':_0x5eaf7e['nXsHO'],'VsBDD':function(_0x19e024,_0x17da61,_0x1f3b1f,_0x3ba0fe,_0x18b288,_0x31438c,_0x4856c6,_0x3b3005){return _0x19e024(_0x17da61,_0x1f3b1f,_0x3ba0fe,_0x18b288,_0x31438c,_0x4856c6,_0x3b3005);},'EPDwq':_0x5c3c83(0x45b)+_0x5c3c83(0x629)+'forms'+'.Over'+_0x5c3c83(0x182)+'Movem'+_0x5c3c83(0x200),'ompsL':function(_0x1bb55d,_0x763e7d){return _0x5eaf7e['Uvfny'](_0x1bb55d,_0x763e7d);},'XegqP':function(_0x4ef5a1){return _0x4ef5a1();},'KhfRa':function(_0x1132dc,_0x2bef08,_0x3b3547,_0x5f85a3,_0x54cf6f){return _0x1132dc(_0x2bef08,_0x3b3547,_0x5f85a3,_0x54cf6f);},'gzxJc':function(_0x19c204,_0x42763f,_0x225a64,_0x4441bb,_0x1d0e80){var _0x5a530f=_0x5c3c83;return _0x5eaf7e[_0x5a530f(0x512)](_0x19c204,_0x42763f,_0x225a64,_0x4441bb,_0x1d0e80);},'JDyAQ':function(_0x3467d9,_0x50056c,_0x597594,_0x36e604,_0x2e00f0){return _0x3467d9(_0x50056c,_0x597594,_0x36e604,_0x2e00f0);},'OcQNp':_0x5c3c83(0x64c),'bnYNW':_0x5c3c83(0x6d0)};if(_0x5ca84b===_0x5eaf7e['XINmS'])return[_0x391615(),_0x5855cf(_0x5eaf7e[_0x5c3c83(0x222)],_0x5eaf7e['vptCt'],_0xd79d98[_0x5c3c83(0x483)],_0x43b218=>{var _0x3e3601=_0x5c3c83;_0xd79d98['god']=_0x43b218,_0x13b853(),_0x435356(_0x3e3601(0x483),_0x43b218),_0x435356(_0x5eaf7e[_0x3e3601(0x4d1)],_0x43b218);},[]),_0x5eaf7e['apchf'](_0x5855cf,_0x5c3c83(0x2b2)+_0x5c3c83(0x46a),_0x5eaf7e['XzyIW'],_0xd79d98[_0x5c3c83(0x4ee)+_0x5c3c83(0x3cd)],_0x4aabd5=>{var _0x80fab6=_0x5c3c83;_0xd79d98[_0x80fab6(0x4ee)+'oil']=_0x4aabd5,_0x13b853(),_0x435356(_0x5eaf7e[_0x80fab6(0x565)],_0x4aabd5);},[]),_0x5855cf(_0x5eaf7e[_0x5c3c83(0x6a2)],_0x5c3c83(0x65c)+'s\x20spr'+'ead\x20a'+_0x5c3c83(0x40b)+'xes\x20a'+_0x5c3c83(0x3f4)+'cy\x20on'+'\x20your'+'\x20weap'+_0x5c3c83(0x5c8)+_0x5c3c83(0x4f8)+_0x5c3c83(0x5ad),_0xd79d98['noSpr'+_0x5c3c83(0x5c7)],_0xb6c019=>{var _0x205092=_0x5c3c83;_0xd79d98['noSpr'+_0x205092(0x5c7)]=_0xb6c019,_0x5eaf7e['wrrfc'](_0x13b853);},[]),_0x5eaf7e[_0x5c3c83(0x15d)](_0x5855cf,_0x5c3c83(0x646)+_0x5c3c83(0x5d2)+'\x20[EXP'+']',_0x5eaf7e['UXlPo'],_0xd79d98[_0x5c3c83(0x594)+'Exp'],_0x25de1b=>{var _0x26e4e9=_0x5c3c83;if(_0x5eaf7e[_0x26e4e9(0x351)](_0x5eaf7e[_0x26e4e9(0x543)],_0x5eaf7e['eVqdi'])){var _0x5bc667=_0x10f7ca[_0x44cfac]||[],_0x2d9c63=_0x3e500b['now']();while(_0x5bc667[_0x26e4e9(0x56b)+'h']&&_0x15fc78[_0x26e4e9(0x2b6)](_0x15fc78['QzTtU'](_0x2d9c63,_0x5bc667[-0x1207+-0x13*0x3e+0x16a1]),0x1*-0x768+0x79*0x26+0x353*-0x2))_0x5bc667['shift']();return _0x5bc667[_0x26e4e9(0x56b)+'h'];}else _0xd79d98[_0x26e4e9(0x594)+_0x26e4e9(0x2fd)]=_0x25de1b,_0x5eaf7e[_0x26e4e9(0x2a9)](_0x13b853);},[]),_0x5855cf(_0x5eaf7e[_0x5c3c83(0x4c8)],'Overw'+_0x5c3c83(0x49d)+_0x5c3c83(0x2c2)+_0x5c3c83(0x6c4)+'eapon'+_0x5c3c83(0x3b3)+_0x5c3c83(0x51d)+_0x5c3c83(0x4fd)+_0x5c3c83(0x475)+_0x5c3c83(0x45e)+'serve'+'r\x20val'+_0x5c3c83(0x34d)+'s.',_0xd79d98[_0x5c3c83(0x3c9)+_0x5c3c83(0x22f)],_0x538754=>{var _0x3efc0b=_0x5c3c83;_0x15fc78['HxGQi']('LCoVP','LCoVP')?(_0xd79d98['damag'+_0x3efc0b(0x22f)]=_0x538754,_0x13b853()):(_0x554d29[_0x3efc0b(0x5b9)+'ead']=_0x1744c0,_0x2362e6());},[_0xb49580('Damag'+'e\x20val'+'ue',null,_0x5eaf7e[_0x5c3c83(0x567)](_0x5dcae2,_0xd79d98[_0x5c3c83(0x3c9)+'eValu'+'e'],-0xda4+-0x266f+0x341d,0x4*0x5c6+-0xb9*0x22+0x36e,-0xf52*0x2+0xf06*0x2+-0x9d*-0x1,_0x4e7d22=>{var _0x3959f1=_0x5c3c83;_0xd79d98[_0x3959f1(0x3c9)+_0x3959f1(0x46b)+'e']=_0x4e7d22,_0x13b853();}))]),_0x5855cf('Infin'+_0x5c3c83(0x652)+'mmo\x20['+_0x5c3c83(0x181),_0x5c3c83(0x325)+'ls\x20th'+_0x5c3c83(0x1f9)+_0x5c3c83(0x1f6)+_0x5c3c83(0x65b)+_0x5c3c83(0x257)+_0x5c3c83(0x262)+'\x20999\x20'+'every'+_0x5c3c83(0x68b)+'s.',_0xd79d98[_0x5c3c83(0x243)+'moExp'],_0x54b7e8=>{var _0x1b2a81=_0x5c3c83;_0xd79d98[_0x1b2a81(0x243)+_0x1b2a81(0x633)]=_0x54b7e8,_0x5eaf7e[_0x1b2a81(0x282)](_0x13b853);},[_0x5eaf7e[_0x5c3c83(0x4ad)](_0x7ad649,_0x5eaf7e['WiaYN'])])];if(_0x5ca84b===_0x5eaf7e[_0x5c3c83(0x5be)])return[_0x5eaf7e['AYVIV'](_0x5855cf,_0x5c3c83(0x30a),_0x5c3c83(0x1f5)+'s\x20all'+_0x5c3c83(0x427)+_0x5c3c83(0x4cc)+_0x5c3c83(0x23a)+'speed'+'\x20limi'+_0x5c3c83(0x3e1)+_0x5c3c83(0x165)+'celer'+_0x5c3c83(0x1a6)+'.',_0xd79d98['speed'+_0x5c3c83(0x199)]!==0xc08+-0xb6e+-0x6*0x9,null,[_0x5eaf7e[_0x5c3c83(0x411)](_0xb49580,_0x5eaf7e['ApoAh'],'100\x20='+_0x5c3c83(0x4b0)+_0x5c3c83(0x1e5),_0x5eaf7e['oCVLD'](_0x5dcae2,_0xd79d98[_0x5c3c83(0x5f1)+'Pct'],0x4e0+0x1a48+-0x1ef6,-0x22*0x2+-0xa3f*0x1+0x3*0x3e5,0x1e94+0x9c7*0x3+0x1*-0x3be4,_0x1b2a15=>{var _0x533c25=_0x5c3c83;if(_0x5eaf7e[_0x533c25(0x53b)]===_0x5eaf7e[_0x533c25(0x3d8)]){if(!_0x5852ce)return;var _0x7dcb42=_0xcbca5b[_0x533c25(0x679)+_0x533c25(0x48f)];for(var _0x1ddc99=0x21f2*0x1+0xfbb+-0x31ad;_0x15fc78[_0x533c25(0x2f0)](_0x1ddc99,_0x7dcb42[_0x533c25(0x56b)+'h']);_0x1ddc99++){var _0x1d1f5d=_0x7dcb42[_0x1ddc99]['query'+_0x533c25(0x1f0)+_0x533c25(0x6a7)]('.sk-m'+'desc');_0x1d1f5d&&(_0x1d1f5d[_0x533c25(0x642)+_0x533c25(0x254)+'t'][_0x533c25(0x25b)+'Of'](_0x15fc78[_0x533c25(0x5c4)])===0x9*-0x239+-0x7*-0x16f+0x9f8||_0x1d1f5d[_0x533c25(0x642)+_0x533c25(0x254)+'t']['index'+'Of']('SAFE')===0x259c+0x1539+-0x1*0x3ad5)&&(_0x1d1f5d[_0x533c25(0x642)+_0x533c25(0x254)+'t']=_0x23b254[_0x533c25(0x3a4)+_0x533c25(0x3a0)]?_0x533c25(0x1dd)+_0x533c25(0x5a5)+'-\x20ove'+_0x533c25(0x396)+_0x533c25(0x30e)+'\x20no\x20h'+_0x533c25(0x238)+_0x533c25(0x3f2)+_0x533c25(0x3ce)+_0x533c25(0x62e)+')':_0x22c991[_0x533c25(0x435)]?_0x15fc78[_0x533c25(0x4df)](_0x15fc78['VXzll'](_0x15fc78['JbCGk']+(_0x45dee4[_0x533c25(0x30d)+_0x533c25(0x47f)]?_0x1694dc[_0x533c25(0x30d)+'Ok']+'/'+_0x40cd88[_0x533c25(0x30d)+_0x533c25(0x47f)]+_0x15fc78['sEMFk']:'0\x20hoo'+_0x533c25(0x4d2)+_0x533c25(0x686)+_0x533c25(0x4de)+'ff)')+(_0x533c25(0x2f1)+_0x533c25(0x434))+(_0x5d6980[_0x533c25(0x269)+'oaded']?_0x533c25(0x4ea)+'d':_0x533c25(0x398)+'ng')+('\x20|\x20sh'+_0x533c25(0x432)+'\x20'),_0x5976c6[_0x533c25(0x3b8)+_0x533c25(0x62d)]?_0x15fc78[_0x533c25(0x654)]:_0x533c25(0x27a))+('\x20|\x20mo'+'vemen'+'t\x20'),_0x1079f7['movem'+_0x533c25(0x3db)]?'held':'none')+(_0x3ba3ac['lastE'+'rror']?_0x15fc78['VXzll'](_0x533c25(0x323)+'R:\x20',_0x4bfd27[_0x533c25(0x1d9)+'rror']):''):_0x15fc78[_0x533c25(0x35d)]);}}else _0xd79d98[_0x533c25(0x5f1)+_0x533c25(0x199)]=_0x1b2a15,_0x13b853();}))]),_0x5855cf(_0x5eaf7e[_0x5c3c83(0x210)],_0x5eaf7e['cNPKv'],_0x5eaf7e[_0x5c3c83(0x632)](_0xd79d98['jumpP'+'ct'],0x21ea*-0x1+0x6d*0x2c+0xf92)||_0x5eaf7e[_0x5c3c83(0x650)](_0xd79d98[_0x5c3c83(0x1a5)+_0x5c3c83(0x384)],0x9*0x66+-0x229b+0x1f69),null,[_0x5eaf7e['xcsHe'](_0xb49580,_0x5eaf7e[_0x5c3c83(0x4dd)],null,_0x5dcae2(_0xd79d98[_0x5c3c83(0x1e1)+'ct'],-0xd3c+-0xab*0x6+-0x5d*-0x30,-0x1b8f+-0x6b8+0x79*0x4b,0x79c+-0x13f*0x18+-0x1*-0x1651,_0x5a2cf0=>{_0xd79d98['jumpP'+'ct']=_0x5a2cf0,_0x15fc78['UiFPA'](_0x13b853);})),_0x5eaf7e[_0x5c3c83(0x5cf)](_0xb49580,_0x5c3c83(0x5a4)+_0x5c3c83(0x5e5),_0x5eaf7e[_0x5c3c83(0x44d)],_0x5dcae2(_0xd79d98['gravi'+_0x5c3c83(0x384)],-0x210d+-0xd0c+0x2e23,-0x15ac+-0x2*-0x1104+-0xb94,0x1*-0x787+0x23fc+-0x410*0x7,_0x123ef7=>{var _0x135377=_0x5c3c83;_0x15fc78['nzZzm']!==_0x15fc78[_0x135377(0x451)]?(_0xd79d98['gravi'+_0x135377(0x384)]=_0x123ef7,_0x13b853()):_0x32a51f[_0x135377(0x349)+'ed']=!!_0x34578a;}))]),_0x5855cf('Bunny'+_0x5c3c83(0x57e),_0x5eaf7e[_0x5c3c83(0x5b6)],_0xd79d98['bhop'],_0x4f9fa9=>{_0xd79d98['bhop']=_0x4f9fa9,_0x13b853();},[])];if(_0x5ca84b===_0x5c3c83(0x2eb)+'l')return[_0x5855cf(_0x5c3c83(0x381)+_0x5c3c83(0x217),_0x5eaf7e['rPATS'],_0xd79d98['keyst'+_0x5c3c83(0x217)],_0x4faefe=>{var _0x4db423=_0x5c3c83;_0xd79d98[_0x4db423(0x436)+_0x4db423(0x217)]=_0x4faefe,_0x5eaf7e[_0x4db423(0x282)](_0x13b853);},[_0x5eaf7e[_0x5c3c83(0x5cf)](_0xb49580,'Posit'+_0x5c3c83(0x1f2),null,_0x2d5c62(_0xd79d98[_0x5c3c83(0x36e)],[['bl',_0x5eaf7e[_0x5c3c83(0x2b4)]],['br',_0x5c3c83(0x3d7)+_0x5c3c83(0x6cf)+'ht'],['ml',_0x5eaf7e[_0x5c3c83(0x15c)]]],_0x3883ed=>{_0xd79d98['ksPos']=_0x3883ed,_0x13b853();})),_0xb49580('Size',null,_0x5eaf7e[_0x5c3c83(0x438)](_0x5dcae2,_0xd79d98['ksSca'+'le'],-0x1095*0x2+0x2*0x964+0xe62+0.6,-0x1d*0x139+0x1be6+0x790+0.6000000000000001,0x5e3+-0x26b+0x18*-0x25+0.05,_0x14700b=>{var _0x27172d=_0x5c3c83;_0xd79d98[_0x27172d(0x1ba)+'le']=_0x14700b,_0x13b853();})),_0x5eaf7e['QSTpB'](_0xb49580,_0x5c3c83(0x5c2)+_0x5c3c83(0x659)+'t',null,_0x5eaf7e[_0x5c3c83(0x3ab)](_0x3d4db6,_0xd79d98[_0x5c3c83(0x586)],_0x5ec370=>{var _0x5a3679=_0x5c3c83;_0xd79d98[_0x5a3679(0x586)]=_0x5ec370,_0x13b853();}))]),_0x5eaf7e[_0x5c3c83(0x66a)](_0x5855cf,'Cross'+_0x5c3c83(0x676),_0x5eaf7e['ZDLAe'],_0xd79d98[_0x5c3c83(0x54c)+_0x5c3c83(0x676)],_0x2640d6=>{var _0x444ecc=_0x5c3c83;_0xd79d98[_0x444ecc(0x54c)+'hair']=_0x2640d6,_0x13b853();},[_0x5eaf7e[_0x5c3c83(0x316)](_0xb49580,_0x5c3c83(0x6ab),null,_0x5eaf7e[_0x5c3c83(0x567)](_0x5dcae2,_0xd79d98['chSiz'+'e'],0x1f3d+-0xfa1*0x1+-0xf9c+0.5,-0x206e*-0x1+-0xe72*-0x1+0x2ede*-0x1+0.5,0x11e7+-0x3*-0x6f1+0x26ba*-0x1+0.1,_0x18f5bf=>{_0xd79d98['chSiz'+'e']=_0x18f5bf,_0x13b853();})),_0xb49580(_0x5c3c83(0x1a4),null,_0x5eaf7e['VxRRG'](_0x5a16f1,_0xd79d98[_0x5c3c83(0x62b)+'or'],_0x491a29=>{var _0x15fef7=_0x5c3c83;_0xd79d98[_0x15fef7(0x62b)+'or']=_0x491a29,_0x13b853();}))]),_0x5eaf7e[_0x5c3c83(0x15d)](_0x5855cf,_0x5eaf7e['BGpbt'],_0x5c3c83(0x407)+'verla'+'y.',_0xd79d98[_0x5c3c83(0x176)],null,[_0xb49580('FPS\x20c'+_0x5c3c83(0x35b)+'r',null,_0x3d4db6(_0xd79d98[_0x5c3c83(0x176)],_0x54849c=>{_0xd79d98['fps']=_0x54849c,_0x5eaf7e['xzMiA'](_0x13b853);})),_0x5eaf7e[_0x5c3c83(0x1b9)](_0x7ad649,_0x5c3c83(0x3eb)+'emy\x20c'+_0x5c3c83(0x35b)+'r:\x20th'+'is\x20bu'+_0x5c3c83(0x204)+'as\x20no'+_0x5c3c83(0x2e4)+_0x5c3c83(0x580)+'ePlay'+'ers\x20t'+_0x5c3c83(0x1b6)+_0x5c3c83(0x251)+_0x5c3c83(0x21e))])];if(_0x5eaf7e[_0x5c3c83(0x3d3)](_0x5ca84b,_0x5eaf7e['ueSPT']))return[_0x5855cf(_0x5c3c83(0x52b)+'ck','Hides'+_0x5c3c83(0x2e0)+_0x5c3c83(0x43a)+_0x5c3c83(0x2b5)+_0x5c3c83(0x448)+_0x5c3c83(0x326),_0xd79d98['adblo'+'ck'],_0x481bbd=>{var _0x323e4b=_0x5c3c83;_0xd79d98[_0x323e4b(0x653)+'ck']=_0x481bbd,_0x13b853();},[_0x7ad649(_0x5c3c83(0x203)+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x5c3c83(0x5df)+_0x5c3c83(0x421)+'.')])];return[_0x5eaf7e[_0x5c3c83(0x4fc)](_0x5855cf,_0x5eaf7e[_0x5c3c83(0x452)],_0x5c3c83(0x5f5)+_0x5c3c83(0x401)+_0x5c3c83(0x29f)+'rely\x20'+_0x5c3c83(0x3d5)+_0x5c3c83(0x364)+_0x5c3c83(0x30d)+_0x5c3c83(0x169)+'\x20this'+_0x5c3c83(0x59e)+_0x5c3c83(0x484)+'s\x20won'+_0x5c3c83(0x1e0)+_0x5c3c83(0x26b),_0xd79d98[_0x5c3c83(0x3a4)+'ode'],_0x18483b=>{var _0x4f655c=_0x5c3c83;_0xd79d98['safeM'+_0x4f655c(0x3a0)]=_0x18483b,_0x13b853(),location[_0x4f655c(0x377)+'d']();},[_0x7ad649(_0x5c3c83(0x149)+'es\x20on'+_0x5c3c83(0x6ca)+'ad.\x20I'+_0x5c3c83(0x622)+'ches\x20'+'load\x20'+'in\x20sa'+_0x5c3c83(0x3af)+_0x5c3c83(0x63c)+_0x5c3c83(0x602)+_0x5c3c83(0x5e3)+_0x5c3c83(0x38d)+'ok-re'+_0x5c3c83(0x6b7)+'\x20—\x20te'+_0x5c3c83(0x281)+_0x5c3c83(0x45e)+_0x5c3c83(0x30d)+'-appl'+'ied\x20c'+'ount.')]),_0x5eaf7e[_0x5c3c83(0x15d)](_0x5855cf,'Hook\x20'+_0x5c3c83(0x24d)+_0x5c3c83(0x677)+'hes',_0x5c3c83(0x31a)+_0x5c3c83(0x4c9)+'nstal'+_0x5c3c83(0x4a3)+_0x5c3c83(0x364)+'tramp'+'oline'+_0x5c3c83(0x1da)+_0x5c3c83(0x600)+'hole\x20'+_0x5c3c83(0x1ac)+_0x5c3c83(0x27c)+_0x5c3c83(0x1c5)+_0x5c3c83(0x321)+_0x5c3c83(0x191)+_0x5c3c83(0x59b)+_0x5c3c83(0x186)+_0x5c3c83(0x25a)+'ure\x20t'+_0x5c3c83(0x142)+'oes\x20n'+'ot\x20ma'+_0x5c3c83(0x31f)+_0x5c3c83(0x1a3)+_0x5c3c83(0x56f)+_0x5c3c83(0x645)+'throw'+'s\x20\x27fu'+_0x5c3c83(0x469)+_0x5c3c83(0x57c)+'natur'+_0x5c3c83(0x343)+_0x5c3c83(0x3c5)+'\x27\x20the'+_0x5c3c83(0x636)+'nt\x20it'+'\x20is\x20c'+'alled'+_0x5c3c83(0x5f2)+_0x5c3c83(0x14c)+_0x5c3c83(0x507)+_0x5c3c83(0x2f7)+_0x5c3c83(0x3ef)+_0x5c3c83(0x3c7)+_0x5c3c83(0x377)+'d,\x20an'+_0x5c3c83(0x6a6)+_0x5c3c83(0x647)+_0x5c3c83(0x2ef)+_0x5c3c83(0x673)+'\x20buil'+_0x5c3c83(0x5c0)+_0x5c3c83(0x5ec)+'n.',_0xd79d98[_0x5c3c83(0x335)+'od']||_0xd79d98['hookG'+_0x5c3c83(0x1bc)]||_0xd79d98['hookN'+_0x5c3c83(0x3a3)+'il']||_0xd79d98['hookC'+'aptur'+'e'],_0x4b325a=>{var _0x44c174=_0x5c3c83;_0xd79d98[_0x44c174(0x335)+'od']=_0x4b325a,_0xd79d98[_0x44c174(0x335)+'odDie']=_0x4b325a,_0xd79d98[_0x44c174(0x505)+'oReco'+'il']=_0x4b325a,_0xd79d98[_0x44c174(0x61f)+'aptur'+'e']=_0x4b325a,_0x13b853(),location[_0x44c174(0x377)+'d']();},[_0x5eaf7e[_0x5c3c83(0x1fa)](_0x7ad649,'Appli'+'es\x20on'+_0x5c3c83(0x6ca)+_0x5c3c83(0x256)),_0xb49580(_0x5c3c83(0x57a)+_0x5c3c83(0x547)+_0x5c3c83(0x5fa)+'itiat'+'eTake'+_0x5c3c83(0x25e)+'h)',null,_0x3d4db6(_0xd79d98['hookG'+'od'],_0x1e821b=>{var _0x8a1171=_0x5c3c83;if('DRbuL'===_0x8a1171(0x634))_0xd79d98[_0x8a1171(0x335)+'od']=_0x1e821b,_0x13b853();else{_0xbe61e0=_0x38cf75[_0x8a1171(0x6c3)+_0x8a1171(0x379)+'dkit']['Value'+_0x8a1171(0x400)+'er'],_0x1db5e9=_0x3cd6ec[_0x8a1171(0x6c3)+_0x8a1171(0x379)+_0x8a1171(0x3a5)]['Runti'+'me']['creat'+'ePlug'+'in']({'name':'Sakur'+_0x8a1171(0x3fe),'version':_0x15fc78[_0x8a1171(0x68e)],'referencedAssemblies':[_0x15fc78['wrfdq']]});if(_0x47f2f8[_0x8a1171(0x335)+'od'])_0x4fd0c9(_0x8a1171(0x483),_0x15fc78[_0x8a1171(0x271)],_0x15fc78[_0x8a1171(0x668)],[_0x15fc78['VmNuh'],_0x8a1171(0x3a1)],_0x4d8fe5,_0x52cf5a,!!_0x2cb896[_0x8a1171(0x483)]);if(_0x16cc51['hookG'+_0x8a1171(0x1bc)])_0x4c44be(_0x15fc78[_0x8a1171(0x55a)],_0x15fc78[_0x8a1171(0x271)],_0x8a1171(0x578)+'Die',[_0x8a1171(0x3a1),_0x15fc78['VmNuh'],_0x15fc78[_0x8a1171(0x208)],_0x8a1171(0x3a1),_0x15fc78[_0x8a1171(0x208)]],_0x953d07,_0x48c1b2,!!_0x56b75c[_0x8a1171(0x483)]);if(_0x29b11f[_0x8a1171(0x505)+'oReco'+'il'])_0x15fc78['jqYAK'](_0x33924d,'noRec'+'oil',_0x15fc78[_0x8a1171(0x1d3)],_0x8a1171(0x2c0),[_0x15fc78[_0x8a1171(0x208)]],_0x5dc0e7,_0x193c59,!!_0x10d20c['noRec'+_0x8a1171(0x3cd)]);if(_0x3a03bc[_0x8a1171(0x61f)+'aptur'+'e'])_0x15fc78[_0x8a1171(0x6c7)](_0x12775a,'capSh'+_0x8a1171(0x432),_0x8a1171(0x4e5)+_0x8a1171(0x270),'SetGa'+'meRun'+_0x8a1171(0x539),[_0x15fc78[_0x8a1171(0x208)],_0x8a1171(0x3a1)],_0x261d7e,(_0x8dae74,_0x450638)=>{var _0x2a12d4=_0x8a1171;_0x4fc0ae(_0x3e6a41,_0x450638,_0x2d1482,_0x2a12d4(0x3b8)+'ers');},!![]);if(_0x248699[_0x8a1171(0x61f)+_0x8a1171(0x28f)+'e'])_0xdf8a53(_0x8a1171(0x431)+'ve',_0x15fc78['EPDwq'],'IsGro'+_0x8a1171(0x292),[_0x15fc78['VmNuh']],_0x8a1171(0x3a1),(_0x20f733,_0x51dbfe)=>{var _0x1d8972=_0x8a1171;_0x24efd7(_0x2bba8a,_0x51dbfe,_0x159458,'movem'+_0x1d8972(0x3db));},!![]);}})),_0x5eaf7e[_0x5c3c83(0x1b7)](_0xb49580,_0x5c3c83(0x20f)+'e\x20(OH'+_0x5c3c83(0x24f)+_0x5c3c83(0x129)+'lDie)',null,_0x3d4db6(_0xd79d98[_0x5c3c83(0x335)+_0x5c3c83(0x1bc)],_0x231056=>{var _0x3efc77=_0x5c3c83;_0x15fc78[_0x3efc77(0x52a)](_0x3efc77(0x5dc),_0x3efc77(0x63d))?(_0xd79d98[_0x3efc77(0x335)+'odDie']=_0x231056,_0x15fc78[_0x3efc77(0x6a3)](_0x13b853)):(_0x28a024[_0x3efc77(0x6c1)+'ropag'+_0x3efc77(0x1a6)](),_0x32f672());})),_0xb49580(_0x5c3c83(0x4ee)+_0x5c3c83(0x350)+'Recoi'+'lMoti'+'on.Ti'+_0x5c3c83(0x563),null,_0x3d4db6(_0xd79d98['hookN'+'oReco'+'il'],_0x22b1b8=>{var _0x5c3cf6=_0x5c3c83;_0xd79d98['hookN'+_0x5c3cf6(0x3a3)+'il']=_0x22b1b8,_0x13b853();})),_0xb49580(_0x5eaf7e[_0x5c3c83(0x315)],_0x5eaf7e[_0x5c3c83(0x2ad)],_0x3d4db6(_0xd79d98['hookC'+'aptur'+'e'],_0xb38d1f=>{var _0x26c04e=_0x5c3c83;_0xd79d98[_0x26c04e(0x61f)+_0x26c04e(0x28f)+'e']=_0xb38d1f,_0x15fc78[_0x26c04e(0x6a3)](_0x13b853);}))]),_0x5855cf(_0x5c3c83(0x4e3)+_0x5c3c83(0x65f)+'r',_0x5c3c83(0x236)+'les\x20C'+'odeSt'+_0x5c3c83(0x218)+'etect'+_0x5c3c83(0x59c)+'t\x20sta'+'rtup\x20'+_0x5c3c83(0x283)+_0x5c3c83(0x4f7)+'tecti'+'on().'+'\x20Keep'+'\x20ON.',_0xd79d98[_0x5c3c83(0x536)+_0x5c3c83(0x531)],_0x1550d0=>{var _0x4af4fb=_0x5c3c83;_0x15fc78['bnYNW']==='tPEXm'?(_0x15fc78[_0x4af4fb(0x2da)](_0x2276fc,_0x1a9301,0x941+-0x63b+-0x2de*0x1,'f32',_0x6d8cd9),_0x15fc78['gzxJc'](_0x46ee1a,_0x205fdd,0x4*-0x376+0x56*0x26+0x140,_0x4af4fb(0x64c),_0x244c08),_0x15fc78[_0x4af4fb(0x63b)](_0x2e5975,_0x553d88,-0x1*0x6a5+0xfe8+-0x913,_0x15fc78['OcQNp'],_0x5a0c10),_0x15fc78['gzxJc'](_0x36b124,_0x3b9679,0x6ce*0x2+0x2497+-0x31ff,_0x15fc78['OcQNp'],_0x38a1e2),_0x203fe4(_0x5ddfa5,0x4*-0x66+0x179f+-0x15eb*0x1,_0x15fc78[_0x4af4fb(0x172)],_0x1ab212),_0xbde38c(_0x5ca13a,-0x1f00+0x27*-0x11+-0x4d1*-0x7,'f32',_0x106c79)):(_0xd79d98[_0x4af4fb(0x536)+'ill']=_0x1550d0,_0x15fc78[_0x4af4fb(0x265)](_0x13b853));},[_0x5eaf7e[_0x5c3c83(0x305)](_0x7ad649,_0x5c3c83(0x5e4)+_0x5c3c83(0x4e4)+_0x5c3c83(0x2a3)+_0x5c3c83(0x359)+_0x5c3c83(0x44e)+_0x5c3c83(0x533)+'\x20ban\x20'+'risk\x20'+_0x5c3c83(0x535)+_0x5c3c83(0x4d9)+'this\x20'+'on.',!![])]),_0x5855cf(_0x5c3c83(0x139)+'r','These'+_0x5c3c83(0x1e8)+_0x5c3c83(0x572)+_0x5c3c83(0x3fc)+'isibl'+'e\x20tra'+'ces.',!![],null,[_0xb49580(_0x5eaf7e['uQFIw'],null,_0x5eaf7e[_0x5c3c83(0x373)](_0x3f4c74,'Reset',()=>{var _0x1a80d7=_0x5c3c83,_0x577e61={'ZPxoa':_0x1a80d7(0x21c)+_0x1a80d7(0x5a2)+_0x1a80d7(0x458)};_0x5eaf7e[_0x1a80d7(0x479)]('cBYuq',_0x1a80d7(0x403))?(_0xd79d98={..._0x5571aa},_0x13b853(),location['reloa'+'d']()):_0x5d2027[_0x1a80d7(0x597)+'em'](_0x577e61[_0x1a80d7(0x63e)],_0x5076fd[_0x1a80d7(0x391)+_0x1a80d7(0x320)](_0x9318b9));}))])];}var _0x248c10=null;function _0x1165b0(_0x1757a8){var _0x78bac8=_0x50d676;_0x440de6=_0x1757a8;if(!_0x248c10){var _0x342658=document['creat'+_0x78bac8(0x202)+_0x78bac8(0x200)](_0x5eaf7e[_0x78bac8(0x635)]);_0x342658[_0x78bac8(0x642)+_0x78bac8(0x254)+'t']=_0x49873a,_0x49aa41['appen'+_0x78bac8(0x17f)+'d'](_0x342658),_0x248c10=_0x5eaf7e[_0x78bac8(0x282)](_0x511c8a),_0x49aa41[_0x78bac8(0x6ac)+'dChil'+'d'](_0x248c10),_0x5eaf7e['HKzNy'](requestAnimationFrame,()=>_0x248c10[_0x78bac8(0x58d)+_0x78bac8(0x216)][_0x78bac8(0x640)]('shown'));}_0x248c10['class'+_0x78bac8(0x216)]['toggl'+'e'](_0x5eaf7e[_0x78bac8(0x3cf)],_0x1757a8);}function _0x476c13(){_0x1165b0(!_0x440de6);}function _0x511c8a(){var _0x79b715=_0x50d676,_0x1db40a={'axTPd':function(_0x329183,_0x566781){var _0x252abd=_0x4420;return _0x5eaf7e[_0x252abd(0x566)](_0x329183,_0x566781);},'tOpfw':_0x79b715(0x538),'zITfJ':_0x79b715(0x1a9),'NNeff':_0x79b715(0x630),'OFQZv':'SAFE\x20'+_0x79b715(0x5a5)+_0x79b715(0x48d)+'rlay\x20'+_0x79b715(0x30e)+'\x20no\x20h'+_0x79b715(0x238)+'(relo'+_0x79b715(0x3ce)+_0x79b715(0x62e)+')','vZRQt':function(_0x485917,_0x36b890){return _0x485917+_0x36b890;},'Cihwq':function(_0x2f854c,_0xb14db){return _0x2f854c+_0xb14db;},'Xgvka':function(_0x3078da,_0xaf2e8e){var _0x9050ab=_0x79b715;return _0x5eaf7e[_0x9050ab(0x3c4)](_0x3078da,_0xaf2e8e);},'kOlKh':function(_0x44462e,_0x5ef2bc){return _0x44462e+_0x5ef2bc;},'wGoHf':function(_0xdfaca1,_0x4bc9b0){return _0xdfaca1+_0x4bc9b0;},'VuKSm':_0x79b715(0x2f1)+_0x79b715(0x434),'gweuO':'loadi'+'ng','LAPzt':_0x5eaf7e['VeTpy'],'TJPnw':'\x20|\x20ER'+'R:\x20'},_0x85ac9e=document[_0x79b715(0x562)+'eElem'+'ent'](_0x5eaf7e[_0x79b715(0x490)]);_0x85ac9e[_0x79b715(0x58d)+_0x79b715(0x219)]=_0x5eaf7e['RMyTI'];var _0x201b9d=document[_0x79b715(0x562)+_0x79b715(0x202)+_0x79b715(0x200)](_0x79b715(0x2a6));_0x201b9d['class'+_0x79b715(0x219)]=_0x79b715(0x4a5)+'de';var _0x1213a6=document[_0x79b715(0x562)+_0x79b715(0x202)+'ent']('div');_0x1213a6['class'+_0x79b715(0x219)]=_0x79b715(0x6cd)+'go',_0x1213a6[_0x79b715(0x4cf)+_0x79b715(0x408)]=_0x5eaf7e[_0x79b715(0x5e8)],_0x201b9d[_0x79b715(0x6ac)+_0x79b715(0x17f)+'d'](_0x1213a6);var _0x1b2a09=document[_0x79b715(0x562)+'eElem'+_0x79b715(0x200)](_0x5eaf7e['YjyLT']);_0x1b2a09[_0x79b715(0x58d)+_0x79b715(0x219)]=_0x79b715(0x6b2)+'in';var _0x6838bf=document[_0x79b715(0x562)+_0x79b715(0x202)+_0x79b715(0x200)]('heade'+'r');_0x6838bf['class'+'Name']=_0x79b715(0x2f9)+'p';var _0x2bef1e=document[_0x79b715(0x562)+_0x79b715(0x202)+_0x79b715(0x200)]('div');_0x2bef1e[_0x79b715(0x58d)+'Name']='mn-ti'+_0x79b715(0x437);var _0x500832=document[_0x79b715(0x562)+'eElem'+_0x79b715(0x200)]('h2');_0x500832[_0x79b715(0x58d)+_0x79b715(0x219)]=_0x5eaf7e['oaCLH'],_0x500832['textC'+_0x79b715(0x254)+'t']=_0x5eaf7e[_0x79b715(0x3ae)];var _0x58d1db=document['creat'+'eElem'+'ent'](_0x5eaf7e['gLHpi']);_0x58d1db['class'+'Name']='mn-su'+'b',_0x58d1db['textC'+_0x79b715(0x254)+'t']=_0x5eaf7e['Lcnti'],_0x2bef1e[_0x79b715(0x6ac)+'d'](_0x500832,_0x58d1db);var _0x59118b=document['creat'+'eElem'+_0x79b715(0x200)](_0x5eaf7e[_0x79b715(0x273)]);_0x59118b[_0x79b715(0x240)]=_0x79b715(0x522)+'n',_0x59118b['class'+'Name']=_0x79b715(0x593)+'ose',_0x59118b[_0x79b715(0x518)]='Close',_0x59118b[_0x79b715(0x4cf)+_0x79b715(0x408)]='<svg\x20'+'viewB'+_0x79b715(0x2b7)+'\x200\x2024'+_0x79b715(0x29c)+_0x79b715(0x4f0)+_0x79b715(0x2ce)+_0x79b715(0x1e3)+_0x79b715(0x1ff)+_0x79b715(0x179)+'6\x2018\x22'+_0x79b715(0x439)+_0x79b715(0x2f4),_0x59118b['oncli'+'ck']=()=>_0x1165b0(![]),_0x6838bf[_0x79b715(0x6ac)+'d'](_0x2bef1e,_0x59118b);var _0x6f90ad=document['creat'+_0x79b715(0x202)+_0x79b715(0x200)](_0x5eaf7e[_0x79b715(0x490)]);_0x6f90ad[_0x79b715(0x58d)+'Name']=_0x79b715(0x5de)+'ls',_0x1b2a09[_0x79b715(0x6ac)+'d'](_0x6838bf,_0x6f90ad),_0x85ac9e['appen'+'d'](_0x201b9d,_0x1b2a09);var _0x511bc6=new Map();for(var _0x7261b4 of _0x1b1c3f){var _0x142444=document['creat'+'eElem'+'ent']('butto'+'n');_0x142444[_0x79b715(0x240)]=_0x79b715(0x522)+'n',_0x142444[_0x79b715(0x58d)+_0x79b715(0x219)]=_0x79b715(0x3d6)+'b',_0x142444[_0x79b715(0x518)]=_0x7261b4[_0x79b715(0x134)],_0x142444['inner'+'HTML']=_0x79b715(0x4bf)+'l>'+_0x7261b4['label']+('</sma'+'ll>'),_0x142444['oncli'+'ck']=(_0xac585e=>()=>_0x4c4194(_0xac585e))(_0x7261b4['id']),_0x511bc6[_0x79b715(0x336)](_0x7261b4['id'],_0x142444),_0x201b9d[_0x79b715(0x6ac)+_0x79b715(0x17f)+'d'](_0x142444);}function _0x4c4194(_0xf17707){var _0x4d2203=_0x79b715;_0x1a1211[_0x4d2203(0x299)]=_0xf17707,_0x5eaf7e['xzMiA'](_0x19e251);var _0x200b59=_0x1b1c3f['find'](_0x4687b3=>_0x4687b3['id']===_0xf17707)||_0x1b1c3f[-0x1a3+0x454+-0x2b1*0x1];_0x500832['textC'+'onten'+'t']=_0x4d2203(0x620)+'a\x20Kou'+_0x4d2203(0x20d)+_0x200b59[_0x4d2203(0x134)];for(var [_0x18b109,_0x1c0acb]of _0x511bc6)_0x1c0acb[_0x4d2203(0x58d)+'List'][_0x4d2203(0x2af)+'e'](_0x4d2203(0x5d0)+'e',_0x18b109===_0xf17707);_0x6f90ad['repla'+_0x4d2203(0x509)+_0x4d2203(0x53e)](..._0x8c7059(_0xf17707));}return _0x4c4194(_0x1a1211[_0x79b715(0x299)]||'comba'+'t'),_0x5eaf7e[_0x79b715(0x3ab)](setInterval,()=>{var _0x1081d8=_0x79b715,_0x2753c9={'NKcYi':_0x1081d8(0x1cf),'nhPXw':_0x1081d8(0x3c3)+'nt'};if(_0x1db40a[_0x1081d8(0x2f5)]('STJBj',_0x1db40a['tOpfw'])){var _0x51cf7b=_0x4d68cd[_0x1081d8(0x562)+'eElem'+_0x1081d8(0x200)](_0x2753c9[_0x1081d8(0x145)]);_0x51cf7b[_0x1081d8(0x58d)+_0x1081d8(0x219)]=_0x2753c9['nhPXw'],_0x51cf7b[_0x1081d8(0x642)+_0x1081d8(0x254)+'t']=_0x28ceb1,_0x438b7d[_0x1081d8(0x6ac)+'dChil'+'d'](_0x51cf7b);}else{if(!_0x440de6)return;var _0x532fad=_0x6f90ad[_0x1081d8(0x679)+'ren'];for(var _0x51561d=-0x6d2+-0x3bd+0x3*0x385;_0x51561d<_0x532fad[_0x1081d8(0x56b)+'h'];_0x51561d++){if('FbrNu'!==_0x1081d8(0x627))_0x557211['enabl'+'ed']=![];else{var _0x4bf460=_0x532fad[_0x51561d][_0x1081d8(0x345)+'Selec'+_0x1081d8(0x6a7)](_0x1081d8(0x699)+'desc');_0x4bf460&&(_0x4bf460[_0x1081d8(0x642)+_0x1081d8(0x254)+'t'][_0x1081d8(0x25b)+'Of'](_0x1db40a[_0x1081d8(0x242)])===-0x1*0x496+0x6ab+-0x215*0x1||_0x4bf460[_0x1081d8(0x642)+'onten'+'t'][_0x1081d8(0x25b)+'Of'](_0x1db40a[_0x1081d8(0x552)])===0x15f1+-0x1*-0x665+0x3*-0x972)&&(_0x4bf460[_0x1081d8(0x642)+'onten'+'t']=_0x2d6dab['safeM'+_0x1081d8(0x3a0)]?_0x1db40a['OFQZv']:_0x2d6dab[_0x1081d8(0x435)]?_0x1db40a['vZRQt'](_0x1db40a[_0x1081d8(0x5bb)](_0x1db40a['Xgvka'](_0x1081d8(0x385)+_0x1081d8(0x1d2)+'\x20'+(_0x2d6dab[_0x1081d8(0x30d)+'Total']?_0x1db40a['kOlKh'](_0x1db40a[_0x1081d8(0x4ec)](_0x2d6dab['hooks'+'Ok']+'/',_0x2d6dab[_0x1081d8(0x30d)+'Total']),_0x1081d8(0x4c2)+'s'):'0\x20hoo'+'ks\x20ar'+_0x1081d8(0x686)+_0x1081d8(0x4de)+_0x1081d8(0x1ab)),_0x1db40a[_0x1081d8(0x3fb)])+(_0x2d6dab['gameL'+'oaded']?_0x1081d8(0x4ea)+'d':_0x1db40a['gweuO']),_0x1081d8(0x188)+_0x1081d8(0x432)+'\x20')+(_0x2d6dab[_0x1081d8(0x3b8)+_0x1081d8(0x62d)]?_0x1db40a['LAPzt']:'none'),'\x20|\x20mo'+'vemen'+'t\x20')+(_0x2d6dab[_0x1081d8(0x2a1)+_0x1081d8(0x3db)]?_0x1db40a['LAPzt']:_0x1081d8(0x27a))+(_0x2d6dab[_0x1081d8(0x1d9)+'rror']?_0x1db40a[_0x1081d8(0x3c2)]+_0x2d6dab['lastE'+_0x1081d8(0x19e)]:''):_0x1081d8(0x385)+_0x1081d8(0x180)+'NG\x20-\x20'+_0x1081d8(0x304)+'ay\x20on'+'ly\x20(r'+_0x1081d8(0x374)+_0x1081d8(0x2a5)+'he\x20us'+'erscr'+_0x1081d8(0x26f));}}}},-0x260a*0x1+0x1ebb+0x63*0x1d),_0x85ac9e;}var _0x49873a=_0x50d676(0x65d)+_0x50d676(0x1de)+_0x50d676(0x422)+_0x50d676(0x3ed)+_0x50d676(0x521)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+'{\x20box'+_0x50d676(0x5e6)+_0x50d676(0x5e1)+_0x50d676(0x6b5)+'-box;'+_0x50d676(0x14d)+'in:\x200'+_0x50d676(0x605)+_0x50d676(0x54a)+_0x50d676(0x5b1)+_0x50d676(0x57b)+_0x50d676(0x53f)+'Segoe'+'\x20UI\x22,'+_0x50d676(0x415)+'em-ui'+_0x50d676(0x34b)+_0x50d676(0x39f)+_0x50d676(0x1e9)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel\x20'+'{\x20pos'+'ition'+':\x20abs'+_0x50d676(0x64a)+';\x20rig'+'ht:\x202'+'4px;\x20'+'botto'+'m:\x2024'+'px;\x20w'+'idth:'+_0x50d676(0x6bc)+'620px'+_0x50d676(0x6b1)+'c(100'+_0x50d676(0x404)+_0x50d676(0x3a9)+_0x50d676(0x517)+'x-hei'+'ght:\x20'+'min(4'+_0x50d676(0x492)+_0x50d676(0x153)+_0x50d676(0x19d)+_0x50d676(0x167)+_0x50d676(0x545)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+'splay'+_0x50d676(0x649)+'x;\x20ga'+_0x50d676(0x147)+'px;\x20p'+'addin'+'g:\x2010'+'px;\x20b'+_0x50d676(0x6b5)+'-radi'+'us:\x202'+'2px;\x20'+'point'+'er-ev'+'ents:'+_0x50d676(0x2d6)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+'ckgro'+'und:\x20'+'rgba('+_0x50d676(0x2cc)+',21,.'+_0x50d676(0x497)+_0x50d676(0x3ea)+_0x50d676(0x493)+'ilter'+_0x50d676(0x5ef)+'r(22p'+_0x50d676(0x46d)+_0x50d676(0x1c0)+_0x50d676(0x54e)+_0x50d676(0x687)+'webki'+_0x50d676(0x1ec)+_0x50d676(0x2be)+_0x50d676(0x4c7)+'er:\x20b'+_0x50d676(0x3df)+'2px)\x20'+_0x50d676(0x2c4)+'ate(1'+'50%);'+_0x50d676(0x65d)+'\x20\x20box'+'-shad'+_0x50d676(0x275)+_0x50d676(0x2ff)+'1px\x20r'+'gba(2'+_0x50d676(0x1be)+_0x50d676(0x64f)+_0x50d676(0x590)+_0x50d676(0x5fd)+_0x50d676(0x2f8)+'1px\x200'+'\x20rgba'+'(255,'+_0x50d676(0x1c6)+_0x50d676(0x697)+_0x50d676(0x1e4)+'\x2030px'+_0x50d676(0x399)+'\x20rgba'+_0x50d676(0x60b)+_0x50d676(0x27e)+_0x50d676(0x130)+'\x20\x20\x20\x20o'+_0x50d676(0x6ad)+_0x50d676(0x639)+_0x50d676(0x258)+_0x50d676(0x332)+_0x50d676(0x4ed)+_0x50d676(0x365)+'eY(18'+_0x50d676(0x473)+'point'+_0x50d676(0x5ea)+_0x50d676(0x514)+_0x50d676(0x595)+';\x20tra'+_0x50d676(0x1a8)+_0x50d676(0x5d5)+_0x50d676(0x6ad)+_0x50d676(0x1c1)+'s\x20eas'+_0x50d676(0x339)+_0x50d676(0x58a)+'rm\x20.4'+_0x50d676(0x592)+_0x50d676(0x2c8)+_0x50d676(0x3f3)+_0x50d676(0x570)+'1,.36'+_0x50d676(0x40f)+'\x20\x20\x20\x20\x20'+_0x50d676(0x261)+'r:\x20#f'+'6eef2'+';\x20fon'+_0x50d676(0x226)+_0x50d676(0x19b)+_0x50d676(0x476)+_0x50d676(0x65d)+_0x50d676(0x588)+_0x50d676(0x237)+_0x50d676(0x356)+_0x50d676(0x3e5)+'acity'+':\x201;\x20'+_0x50d676(0x64d)+'form:'+'\x20none'+_0x50d676(0x301)+_0x50d676(0x582)+_0x50d676(0x2a7)+'s:\x20au'+_0x50d676(0x660)+_0x50d676(0x65d)+'.mn-s'+_0x50d676(0x3be)+_0x50d676(0x696)+'lay:\x20'+_0x50d676(0x3cc)+_0x50d676(0x25c)+_0x50d676(0x342)+'ction'+_0x50d676(0x4bc)+_0x50d676(0x5a1)+_0x50d676(0x12a)+'-item'+'s:\x20ce'+_0x50d676(0x3da)+_0x50d676(0x5dd)+_0x50d676(0x2cd)+'\x20widt'+_0x50d676(0x268)+_0x50d676(0x4a6)+_0x50d676(0x67b)+_0x50d676(0x206)+'\x20padd'+_0x50d676(0x61c)+_0x50d676(0x48b)+('0;\x20bo'+_0x50d676(0x31b)+_0x50d676(0x2c7)+_0x50d676(0x67e)+_0x50d676(0x352)+'\x20\x20\x20\x20\x20'+_0x50d676(0x54f)+_0x50d676(0x5fc)+':\x20rgb'+_0x50d676(0x355)+_0x50d676(0x28b)+_0x50d676(0x1a1)+_0x50d676(0x394)+_0x50d676(0x5e9)+_0x50d676(0x3ca)+_0x50d676(0x1ee)+_0x50d676(0x571)+_0x50d676(0x2ff)+_0x50d676(0x183)+'gba(2'+'55,25'+'5,255'+_0x50d676(0x549)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o\x20{\x20d'+_0x50d676(0x491)+'y:\x20gr'+'id;\x20p'+_0x50d676(0x5bc)+_0x50d676(0x290)+':\x20cen'+'ter;\x20'+'width'+_0x50d676(0x506)+_0x50d676(0x2b1)+_0x50d676(0x31e)+_0x50d676(0x52d)+_0x50d676(0x23c)+_0x50d676(0x64b)+_0x50d676(0x369)+'o-svg'+'\x20{\x20wi'+'dth:\x20'+_0x50d676(0x2f3)+_0x50d676(0x5bd)+_0x50d676(0x489)+_0x50d676(0x6a5)+'overf'+_0x50d676(0x5c3)+'visib'+'le;\x20f'+'ilter'+_0x50d676(0x39e)+'p-sha'+_0x50d676(0x617)+'\x200\x204p'+_0x50d676(0x3bd)+_0x50d676(0x355)+_0x50d676(0x50f)+_0x50d676(0x26a)+_0x50d676(0x463)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+_0x50d676(0x696)+_0x50d676(0x621)+_0x50d676(0x3cc)+_0x50d676(0x3ee)+'n-ite'+'ms:\x20c'+'enter'+_0x50d676(0x612)+_0x50d676(0x541)+_0x50d676(0x253)+_0x50d676(0x409)+'enter'+_0x50d676(0x669)+_0x50d676(0x1bf)+_0x50d676(0x5b4)+_0x50d676(0x50a)+'t:\x2034'+_0x50d676(0x5f8)+_0x50d676(0x6b5)+':\x200;\x20'+'borde'+_0x50d676(0x525)+'ius:\x20'+'10px;'+'\x0a\x20\x20\x20\x20'+_0x50d676(0x51a)+_0x50d676(0x1aa)+'nd:\x20t'+'ransp'+'arent'+_0x50d676(0x4f4)+_0x50d676(0x32a)+_0x50d676(0x5e0)+'46,23'+_0x50d676(0x132)+',.4);'+'\x20curs'+'or:\x20p'+_0x50d676(0x406)+'r;\x20fo'+_0x50d676(0x45c)+'ze:\x201'+_0x50d676(0x293)+_0x50d676(0x656)+_0x50d676(0x47a)+_0x50d676(0x574)+'0;\x20}\x0a'+_0x50d676(0x3a2)+_0x50d676(0x3d6)+_0x50d676(0x4ba)+_0x50d676(0x1ca)+_0x50d676(0x334)+_0x50d676(0x2e6)+_0x50d676(0x46f)+_0x50d676(0x49b)+_0x50d676(0x4c1)+_0x50d676(0x63f)+'\x0a\x20\x20\x20\x20'+'.mn-t'+'ab.ac'+_0x50d676(0x1fb)+_0x50d676(0x1c2)+'or:\x20#'+'ff6b9'+_0x50d676(0x3b4)+'ckgro'+_0x50d676(0x466)+'rgba('+_0x50d676(0x519)+_0x50d676(0x614)+_0x50d676(0x21b)+';\x20}\x0a\x20'+_0x50d676(0x64b)+'n-mai'+_0x50d676(0x229)+'lex:\x20'+_0x50d676(0x353)+_0x50d676(0x26c)+'th:\x200'+';\x20dis'+_0x50d676(0x2cb)+_0x50d676(0x25c)+_0x50d676(0x551)+_0x50d676(0x457)+'ectio'+_0x50d676(0x2ee)+'lumn;'+_0x50d676(0x4d0)+'\x20\x20.mn'+_0x50d676(0x4a0)+_0x50d676(0x485)+'play:'+'\x20flex'+_0x50d676(0x15f)+'gn-it'+_0x50d676(0x623)+_0x50d676(0x2e2)+_0x50d676(0x6aa)+_0x50d676(0x252)+_0x50d676(0x526)+_0x50d676(0x17a)+_0x50d676(0x4f5)+'x\x206px'+'\x2012px'+_0x50d676(0x6ce)+'r-sel'+'ect:\x20'+_0x50d676(0x206)+'\x20}\x0a\x20\x20'+_0x50d676(0x54d)+_0x50d676(0x682)+_0x50d676(0x175)+'flex:'+_0x50d676(0x380)+_0x50d676(0x454)+_0x50d676(0x189)+_0x50d676(0x38f)+'\x20\x20\x20\x20.'+_0x50d676(0x16b)+'{\x20fon'+'t-siz'+_0x50d676(0x1ce)+_0x50d676(0x4a6)+_0x50d676(0x468)+_0x50d676(0x4b9)+_0x50d676(0x37a)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x50d676(0x3f6)+_0x50d676(0x37b)+_0x50d676(0x45c)+'ze:\x201'+_0x50d676(0x28d)+_0x50d676(0x152))+(_0x50d676(0x455)+_0x50d676(0x554)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20{'+'\x20disp'+_0x50d676(0x621)+_0x50d676(0x3b7)+_0x50d676(0x3f5)+_0x50d676(0x1c9)+'ms:\x20c'+_0x50d676(0x250)+';\x20wid'+_0x50d676(0x4a9)+_0x50d676(0x680)+_0x50d676(0x50a)+'t:\x2028'+'px;\x20b'+'order'+_0x50d676(0x446)+'borde'+'r-rad'+_0x50d676(0x402)+_0x50d676(0x680)+_0x50d676(0x54f)+'round'+_0x50d676(0x4ed)+_0x50d676(0x6bf)+_0x50d676(0x1d1)+'color'+':\x20inh'+'erit;'+'\x20opac'+'ity:\x20'+'.45;\x20'+'curso'+'r:\x20po'+_0x50d676(0x51c)+';\x20}\x0a\x20'+_0x50d676(0x64b)+'n-clo'+_0x50d676(0x33a)+_0x50d676(0x44f)+'\x20opac'+_0x50d676(0x3c0)+_0x50d676(0x5d7)+_0x50d676(0x1ed)+_0x50d676(0x466)+_0x50d676(0x2e1)+_0x50d676(0x1c6)+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x50d676(0x51f)+_0x50d676(0x4e8)+_0x50d676(0x159)+_0x50d676(0x66f)+'x;\x20he'+_0x50d676(0x31e)+'\x2014px'+';\x20fil'+'l:\x20no'+_0x50d676(0x429)+_0x50d676(0x5ac)+':\x20cur'+'rentC'+_0x50d676(0x1ad)+_0x50d676(0x284)+'ke-wi'+_0x50d676(0x189)+'2;\x20st'+'roke-'+_0x50d676(0x503)+_0x50d676(0x212)+_0x50d676(0x45a)+'\x20}\x0a\x20\x20'+_0x50d676(0x54d)+'-cols'+_0x50d676(0x1b5)+_0x50d676(0x2df)+';\x20min'+_0x50d676(0x5db)+'ht:\x200'+_0x50d676(0x694)+'rflow'+'-y:\x20a'+_0x50d676(0x322)+'displ'+_0x50d676(0x287)+_0x50d676(0x5d8)+'grid-'+_0x50d676(0x264)+'ate-c'+_0x50d676(0x495)+'s:\x20re'+_0x50d676(0x196)+'auto-'+_0x50d676(0x2b0)+_0x50d676(0x5b0)+_0x50d676(0x4b7)+'0px,\x20'+_0x50d676(0x1fe)+_0x50d676(0x15f)+_0x50d676(0x36a)+'ems:\x20'+'start'+_0x50d676(0x15f)+_0x50d676(0x346)+_0x50d676(0x311)+_0x50d676(0x2bd)+_0x50d676(0x3c8)+_0x50d676(0x607)+'0px;\x20'+'paddi'+_0x50d676(0x1e7)+'\x204px\x20'+'6px\x200'+_0x50d676(0x23c)+_0x50d676(0x64b)+'n-col'+'s::-w'+_0x50d676(0x22a)+_0x50d676(0x2dd)+'llbar'+'\x20{\x20wi'+'dth:\x20'+'8px;\x20'+_0x50d676(0x59a)+_0x50d676(0x41b)+_0x50d676(0x2d7)+':-web'+_0x50d676(0x333)+_0x50d676(0x1b8)+_0x50d676(0x54b)+_0x50d676(0x245)+'{\x20bac'+_0x50d676(0x1aa)+'nd:\x20r'+'gba(2'+_0x50d676(0x1be)+'5,255'+_0x50d676(0x68d)+';\x20bor'+'der-r'+_0x50d676(0x55d)+_0x50d676(0x44b)+_0x50d676(0x23c)+_0x50d676(0x48c)+'k-car'+'d\x20{\x20b'+_0x50d676(0x6b5)+'-radi'+'us:\x201'+_0x50d676(0x5b4)+_0x50d676(0x54f)+_0x50d676(0x5fc)+_0x50d676(0x2e6)+'a(255'+',255,'+_0x50d676(0x1a1)+_0x50d676(0x394)+_0x50d676(0x5e9)+_0x50d676(0x3ca)+'w:\x20in'+'set\x200'+_0x50d676(0x2ff)+'1px\x20r'+'gba(2'+'55,25'+_0x50d676(0x64f)+_0x50d676(0x549)+';\x20}\x0a\x20'+_0x50d676(0x48c)+_0x50d676(0x2d0)+_0x50d676(0x162)+'{\x20bac'+'kgrou'+_0x50d676(0x22b)+'gba(2'+_0x50d676(0x1be)+_0x50d676(0x64f)+_0x50d676(0x140)+_0x50d676(0x601)+'-shad'+'ow:\x20i'+_0x50d676(0x423)+'0\x200\x200'+_0x50d676(0x144)+'rgba('+_0x50d676(0x519)+'07,15'+'7,.28'+_0x50d676(0x2c9)+_0x50d676(0x3a2)+_0x50d676(0x584)+_0x50d676(0x277)+'ad\x20{\x20'+_0x50d676(0x626))+(_0x50d676(0x23e)+'lex;\x20'+'align'+_0x50d676(0x39b)+'s:\x20ce'+'nter;'+_0x50d676(0x5dd)+_0x50d676(0x5b5)+_0x50d676(0x1b3)+_0x50d676(0x61c)+'11px\x20'+_0x50d676(0x12d)+_0x50d676(0x4d0)+_0x50d676(0x249)+_0x50d676(0x22e)+'-titl'+_0x50d676(0x214)+_0x50d676(0x67b)+_0x50d676(0x353)+'n-wid'+'th:\x200'+_0x50d676(0x23c)+'\x20\x20\x20.s'+'k-car'+_0x50d676(0x150)+'le\x20st'+_0x50d676(0x1cb)+_0x50d676(0x46c)+'t-siz'+_0x50d676(0x19b)+_0x50d676(0x4a6)+_0x50d676(0x468)+_0x50d676(0x4b9)+_0x50d676(0x4a7)+_0x50d676(0x4f4)+_0x50d676(0x32a)+'gba(2'+_0x50d676(0x6a1)+'8,242'+_0x50d676(0x4ca)+_0x50d676(0x23c)+'\x20\x20\x20.s'+'k-car'+_0x50d676(0x162)+_0x50d676(0x428)+'ard-t'+_0x50d676(0x561)+_0x50d676(0x5c6)+_0x50d676(0x328)+'olor:'+_0x50d676(0x3a6)+_0x50d676(0x4d3)+_0x50d676(0x59a)+'\x20.sk-'+'mbody'+'\x20{\x20pa'+_0x50d676(0x42e)+_0x50d676(0x528)+'2px\x201'+_0x50d676(0x293)+'}\x0a\x20\x20\x20'+_0x50d676(0x2d8)+_0x50d676(0x3f7)+_0x50d676(0x37b)+_0x50d676(0x45c)+'ze:\x201'+'1px;\x20'+'opaci'+'ty:\x20.'+_0x50d676(0x35a)+'rgin-'+'botto'+'m:\x206p'+_0x50d676(0x6bd)+'\x20\x20\x20\x20.'+_0x50d676(0x6c6)+_0x50d676(0x2ab)+'ispla'+'y:\x20fl'+'ex;\x20a'+'lign-'+'items'+':\x20cen'+_0x50d676(0x388)+_0x50d676(0x1b0)+'8px;\x20'+_0x50d676(0x347)+_0x50d676(0x69c)+'px\x200;'+_0x50d676(0x3d2)+'-size'+':\x2011.'+_0x50d676(0x6a5)+_0x50d676(0x59a)+'\x20.sk-'+_0x50d676(0x134)+'\x20{\x20fl'+'ex:\x201'+_0x50d676(0x4f4)+_0x50d676(0x32a)+'gba(2'+_0x50d676(0x6a1)+'8,242'+_0x50d676(0x69f)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+_0x50d676(0x2e7)+_0x50d676(0x491)+_0x50d676(0x62f)+'ock;\x20'+'font-'+_0x50d676(0x26e)+_0x50d676(0x6d2)+';\x20opa'+'city:'+_0x50d676(0x308)+'}\x0a\x20\x20\x20'+_0x50d676(0x2d8)+'switc'+_0x50d676(0x52c)+'ositi'+'on:\x20r'+_0x50d676(0x61e)+'ve;\x20w'+'idth:'+'\x2026px'+_0x50d676(0x5ae)+_0x50d676(0x42a)+_0x50d676(0x4f3)+_0x50d676(0x324)+_0x50d676(0x285)+';\x20bor'+_0x50d676(0x1af)+'adius'+_0x50d676(0x65e)+'x;\x20ba'+_0x50d676(0x1ed)+_0x50d676(0x466)+'rgba('+_0x50d676(0x1c6)+_0x50d676(0x1be)+'5,.07'+_0x50d676(0x18e)+_0x50d676(0x5b2)+'\x20poin'+'ter;\x20'+_0x50d676(0x41a)+_0x50d676(0x595)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x50d676(0x3f8)+_0x50d676(0x14e)+_0x50d676(0x386)+_0x50d676(0x63a)+_0x50d676(0x311)+_0x50d676(0x3e9)+'\x20posi'+_0x50d676(0x2db)+_0x50d676(0x13e)+_0x50d676(0x12f)+_0x50d676(0x3b9)+_0x50d676(0x1f3)+_0x50d676(0x5c5)+_0x50d676(0x3ad)+_0x50d676(0x669)+_0x50d676(0x1a0)+'px;\x20h'+_0x50d676(0x4b9)+':\x208px'+_0x50d676(0x59f)+_0x50d676(0x1af)+_0x50d676(0x55d)+':\x2050%'+_0x50d676(0x461)+'kgrou'+'nd:\x20r'+_0x50d676(0x5e0)+_0x50d676(0x1be)+_0x50d676(0x64f)+',.25)'+';\x20tra'+'nsiti'+_0x50d676(0x18d)+_0x50d676(0x420)+'2s,\x20b'+_0x50d676(0x15b)+_0x50d676(0x383)+_0x50d676(0x3e7)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x50d676(0x481)+'a-che'+'cked='+_0x50d676(0x5ed)+_0x50d676(0x675)+'backg'+'round'+':\x20rgb')+(_0x50d676(0x355)+',107,'+_0x50d676(0x26a)+_0x50d676(0x53a)+_0x50d676(0x59a)+_0x50d676(0x2d8)+_0x50d676(0x677)+'h[ari'+'a-che'+_0x50d676(0x3b6)+_0x50d676(0x5ed)+'\x22]::a'+_0x50d676(0x207)+_0x50d676(0x289)+_0x50d676(0x294)+_0x50d676(0x5f8)+'ackgr'+'ound:'+_0x50d676(0x291)+_0x50d676(0x279)+_0x50d676(0x59a)+_0x50d676(0x2d8)+'field'+'\x20{\x20ba'+_0x50d676(0x1ed)+_0x50d676(0x466)+_0x50d676(0x2e1)+_0x50d676(0x1c6)+'55,25'+'5,.03'+'5);\x20b'+_0x50d676(0x6b5)+':\x200;\x20'+_0x50d676(0x4e6)+_0x50d676(0x525)+'ius:\x20'+'6px;\x20'+'color'+_0x50d676(0x361)+_0x50d676(0x161)+'\x20padd'+_0x50d676(0x61c)+'6px\x209'+_0x50d676(0x4a6)+_0x50d676(0x5f6)+'ize:\x20'+'11.5p'+_0x50d676(0x50c)+_0x50d676(0x470)+':\x20non'+_0x50d676(0x137)+'x-sha'+_0x50d676(0x1c8)+_0x50d676(0x624)+_0x50d676(0x2ff)+_0x50d676(0x2b8)+_0x50d676(0x480)+'(255,'+_0x50d676(0x1c6)+'55,.0'+_0x50d676(0x2de)+_0x50d676(0x65d)+_0x50d676(0x4f2)+_0x50d676(0x173)+_0x50d676(0x28e)+'n\x20{\x20b'+_0x50d676(0x15b)+'ound:'+_0x50d676(0x516)+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x50d676(0x4ef)+_0x50d676(0x688)+_0x50d676(0x5eb)+_0x50d676(0x649)+_0x50d676(0x474)+_0x50d676(0x618)+'tems:'+_0x50d676(0x30b)+_0x50d676(0x155)+_0x50d676(0x4a2)+_0x50d676(0x476)+'\x0a\x20\x20\x20\x20'+_0x50d676(0x17c)+'lider'+_0x50d676(0x24a)+'ebkit'+_0x50d676(0x60f)+'aranc'+_0x50d676(0x371)+'ne;\x20a'+'ppear'+_0x50d676(0x12c)+'\x20none'+';\x20wid'+_0x50d676(0x41f)+_0x50d676(0x293)+_0x50d676(0x50a)+_0x50d676(0x174)+_0x50d676(0x3e0)+_0x50d676(0x1ed)+'und:\x20'+_0x50d676(0x64d)+'paren'+_0x50d676(0x663)+_0x50d676(0x3a2)+_0x50d676(0x41c)+_0x50d676(0x641)+':-web'+_0x50d676(0x333)+_0x50d676(0x412)+'-runn'+_0x50d676(0x3e8)+_0x50d676(0x2bc)+_0x50d676(0x4b6)+'ight:'+'\x202px;'+_0x50d676(0x324)+'er-ra'+'dius:'+'\x202px;'+_0x50d676(0x29d)+'groun'+_0x50d676(0x35e)+'near-'+_0x50d676(0x6a9)+'ent(#'+_0x50d676(0x18a)+'d,\x20#f'+_0x50d676(0x619)+_0x50d676(0x550)+'\x20/\x20va'+'r(--p'+_0x50d676(0x55b)+')\x20100'+'%\x20no-'+'repea'+_0x50d676(0x4d5)+_0x50d676(0x225)+_0x50d676(0x64f)+',255,'+_0x50d676(0x18f)+_0x50d676(0x4d0)+'\x20\x20.sk'+_0x50d676(0x55c)+_0x50d676(0x6a0)+_0x50d676(0x500)+'t-sli'+'der-t'+'humb\x20'+_0x50d676(0x187)+'bkit-'+'appea'+_0x50d676(0x442)+_0x50d676(0x69a)+_0x50d676(0x213)+_0x50d676(0x189)+_0x50d676(0x579)+'heigh'+_0x50d676(0x25d)+'x;\x20ma'+_0x50d676(0x4eb)+_0x50d676(0x57d)+'-2px;'+'\x20bord'+_0x50d676(0x5ab)+_0x50d676(0x58c)+_0x50d676(0x5d1)+'\x20back'+_0x50d676(0x241)+_0x50d676(0x2f6)+_0x50d676(0x619)+_0x50d676(0x23c)+_0x50d676(0x48c)+_0x50d676(0x23d)+_0x50d676(0x37b)+'nt-si'+_0x50d676(0x2ea)+'1px;\x20'+'font-'+_0x50d676(0x47a)+'t:\x2060'+_0x50d676(0x6b0)+_0x50d676(0x26c)+_0x50d676(0x4a9)+'8px;\x20'+'text-'+'align'+':\x20rig'+_0x50d676(0x628)+_0x50d676(0x51e)+_0x50d676(0x480)+'(246,'+_0x50d676(0x542)+_0x50d676(0x220)+_0x50d676(0x2c9)+'\x20\x20\x20\x20.'+_0x50d676(0x56d)+_0x50d676(0x5d9))+('\x20widt'+'h:\x2034'+_0x50d676(0x499)+_0x50d676(0x4b9)+':\x2022p'+_0x50d676(0x248)+_0x50d676(0x557)+_0x50d676(0x631)+_0x50d676(0x6b5)+'-radi'+'us:\x206'+_0x50d676(0x5f8)+'ackgr'+_0x50d676(0x5fe)+_0x50d676(0x595)+';\x20pad'+'ding:'+_0x50d676(0x17d)+_0x50d676(0x3d0)+_0x50d676(0x68f)+_0x50d676(0x3da)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x50d676(0x1d8)+_0x50d676(0x37b)+_0x50d676(0x45c)+_0x50d676(0x2ea)+_0x50d676(0x28d)+'color'+_0x50d676(0x2e6)+_0x50d676(0x46f)+',238,'+_0x50d676(0x4c1)+_0x50d676(0x4cb)+_0x50d676(0x17a)+'g:\x202p'+'x\x200;\x20'+_0x50d676(0x59a)+_0x50d676(0x2d8)+_0x50d676(0x3c1)+_0x50d676(0x35c)+'\x20colo'+_0x50d676(0x511)+'f7a93'+_0x50d676(0x23c)+_0x50d676(0x48c)+_0x50d676(0x55e)+_0x50d676(0x422)+'ign-s'+_0x50d676(0x317)+'flex-'+_0x50d676(0x24b)+_0x50d676(0x59f)+'der:\x20'+'0;\x20bo'+_0x50d676(0x31b)+'radiu'+_0x50d676(0x16e)+'x;\x20pa'+'dding'+_0x50d676(0x15a)+_0x50d676(0x5da)+_0x50d676(0x461)+_0x50d676(0x1aa)+_0x50d676(0x513)+_0x50d676(0x18a)+_0x50d676(0x4e2)+'lor:\x20'+_0x50d676(0x2f2)+'\x20font'+_0x50d676(0x2d3)+_0x50d676(0x272)+'5px;\x20'+'font-'+_0x50d676(0x47a)+'t:\x2070'+'0;\x20cu'+_0x50d676(0x5b2)+'\x20poin'+_0x50d676(0x388)+_0x50d676(0x59a)+'\x20.sk-'+'btn:h'+_0x50d676(0x49e)+'{\x20fil'+_0x50d676(0x4be)+_0x50d676(0x3bc)+_0x50d676(0x163)+_0x50d676(0x2ca)+';\x20}\x0a\x20'+_0x50d676(0x2ec));window[_0x50d676(0x1df)+_0x50d676(0x459)+'stene'+'r'](_0x57d498[_0x50d676(0x4ab)],_0x5ca438=>{var _0x225c06=_0x50d676;_0x5ca438['code']===_0x225c06(0x488)+'t'&&(_0x5ca438[_0x225c06(0x608)+_0x225c06(0x625)+_0x225c06(0x3fd)](),_0x476c13());},!![]);var _0x1718e9=document['creat'+_0x50d676(0x202)+_0x50d676(0x200)](_0x50d676(0x443));_0x1718e9[_0x50d676(0x49a)][_0x50d676(0x616)+'xt']=_0x57d498[_0x50d676(0x14a)],_0x1718e9[_0x50d676(0x4cf)+_0x50d676(0x408)]=_0x50d676(0x36c)+_0x50d676(0x47e)+_0x50d676(0x2b7)+'\x200\x2024'+_0x50d676(0x29c)+'<path'+'\x20d=\x22M'+_0x50d676(0x49f)+'c-1.5'+_0x50d676(0x4f6)+_0x50d676(0x598)+_0x50d676(0x689)+'5\x200-2'+'.5\x201.'+_0x50d676(0x4a1)+'\x204-4.'+_0x50d676(0x53d)+'\x204\x204.'+_0x50d676(0x587)+_0x50d676(0x3bf)+_0x50d676(0x637)+'.5z\x22\x20'+'fill='+_0x50d676(0x655)+'\x22\x20str'+'oke=\x22'+_0x50d676(0x1b1)+_0x50d676(0x4af)+_0x50d676(0x5ac)+'-widt'+'h=\x222\x22'+'\x20stro'+'ke-li'+'necap'+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+'join='+_0x50d676(0x3fa)+_0x50d676(0x43d)+_0x50d676(0x151)+'e\x20cx='+'\x2212\x22\x20'+_0x50d676(0x178)+_0x50d676(0x387)+_0x50d676(0x192)+'\x20fill'+'=\x22#ff'+'6b9d\x22'+_0x50d676(0x439)+_0x50d676(0x2f4),_0x1718e9['title']='Sakur'+'a\x20Kou'+'r',_0x1718e9[_0x50d676(0x143)+'seent'+'er']=()=>_0x1718e9[_0x50d676(0x49a)][_0x50d676(0x152)+'ty']='1',_0x1718e9['onmou'+'selea'+'ve']=()=>_0x1718e9[_0x50d676(0x49a)]['opaci'+'ty']='0.5',_0x1718e9[_0x50d676(0x297)+'ck']=_0x12ec74=>{var _0x544691=_0x50d676;_0x12ec74[_0x544691(0x6c1)+'ropag'+_0x544691(0x1a6)](),_0x57d498['CgWwq'](_0x476c13);},document[_0x50d676(0x496)][_0x50d676(0x6ac)+_0x50d676(0x17f)+'d'](_0x1718e9),_0x57d498[_0x50d676(0x4bb)](_0x5c21d8),requestAnimationFrame(_0x4080f4),console[_0x50d676(0x441)](_0x57d498[_0x50d676(0x685)],_0x2d6dab[_0x50d676(0x435)]);});})()));
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
