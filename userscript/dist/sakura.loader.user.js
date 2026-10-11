// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.0.6
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
(function(_0x365608,_0x44e8ab){var _0x18cc55=_0x27ad,_0x46046c=_0x365608();while(!![]){try{var _0x2007ea=-parseInt(_0x18cc55(0x86))/(0xa*0x1cd+0xff9+-0x21fa*0x1)*(-parseInt(_0x18cc55(0xcc))/(0x22*-0x107+-0x23c3+0x46b3))+parseInt(_0x18cc55(0x4f1))/(0x3*-0x748+0xd7d+0x85e)+parseInt(_0x18cc55(0x16a))/(-0x1cb6+-0x9d*-0x5+-0x1*-0x19a9)*(parseInt(_0x18cc55(0x115))/(0x1*-0xd1f+0x135*-0x1f+0x328f))+parseInt(_0x18cc55(0x2b4))/(-0x88f+0x1*0xbe+0x7d7)*(-parseInt(_0x18cc55(0x112))/(-0x1ad6+-0x22a3*-0x1+-0x7c6))+-parseInt(_0x18cc55(0x3a8))/(0x156b+-0x35*-0x5b+-0x283a)+parseInt(_0x18cc55(0xdb))/(-0x57*0x3b+0x99b+0xa7b)+-parseInt(_0x18cc55(0x3d4))/(0xb*0x368+-0x2419*0x1+-0x155);if(_0x2007ea===_0x44e8ab)break;else _0x46046c['push'](_0x46046c['shift']());}catch(_0xcd36b4){_0x46046c['push'](_0x46046c['shift']());}}}(_0x436a,0x2b7fc+-0x56b*0x58+0xe*0x3805),((()=>{'use strict';var _0x1d8a87=_0x27ad,_0x3b09cf={'xfGDY':_0x1d8a87(0x25e),'NCAYn':function(_0x2c79ec,_0x224ba6){return _0x2c79ec===_0x224ba6;},'IKdrW':'compl'+_0x1d8a87(0xfd),'sEPFn':'DOMCo'+'ntent'+_0x1d8a87(0x31d)+'d','VZvFy':function(_0x71a41,_0x12c849){return _0x71a41!==_0x12c849;},'VzgQK':function(_0xd1ecd2,_0x1d93b3,_0x17f25e){return _0xd1ecd2(_0x1d93b3,_0x17f25e);},'vHrKz':function(_0x3a51e6,_0x4dd2d3){return _0x3a51e6===_0x4dd2d3;},'AXbvv':'movem'+'ents','TnVnb':_0x1d8a87(0x33d)+_0x1d8a87(0x95),'tSwEg':function(_0x4870a3,_0x4fe594,_0x33bdf3,_0x584db6){return _0x4870a3(_0x4fe594,_0x33bdf3,_0x584db6);},'UxEpL':function(_0x18bfe7,_0x3e6ba9){return _0x18bfe7!=_0x3e6ba9;},'eoxAe':function(_0x303f92,_0xde85f5,_0x575c06,_0x56e47b,_0x26407a){return _0x303f92(_0xde85f5,_0x575c06,_0x56e47b,_0x26407a);},'yyYeJ':function(_0x318390,_0x59bbc7){return _0x318390>_0x59bbc7;},'dhjwz':function(_0x3e3c09,_0x2010e0){return _0x3e3c09===_0x2010e0;},'jOVfb':function(_0x1b7b70,_0x531fb9){return _0x1b7b70!==_0x531fb9;},'soyfZ':_0x1d8a87(0x5e6)+_0x1d8a87(0x5e7)+_0x1d8a87(0x5bf)+_0x1d8a87(0x531)+_0x1d8a87(0x1af)+_0x1d8a87(0x157),'fnnMr':_0x1d8a87(0x411),'aBQom':'shoot'+_0x1d8a87(0x27a),'BRNAh':function(_0x42e051,_0x2817bf,_0x33152b,_0x3ef1d8,_0x5bfab1){return _0x42e051(_0x2817bf,_0x33152b,_0x3ef1d8,_0x5bfab1);},'CXTyR':_0x1d8a87(0xb2),'CZGdj':function(_0x3f68e1,_0x3cc4b9){return _0x3f68e1!==_0x3cc4b9;},'FNVsE':'UDZLG','kxFYo':_0x1d8a87(0x4f9),'Dqbda':function(_0x433b51){return _0x433b51();},'ozoPe':function(_0x27cf31,_0x489cb7){return _0x27cf31/_0x489cb7;},'woZBZ':function(_0x515c4f,_0x11c455){return _0x515c4f!==_0x11c455;},'XtENQ':function(_0x70199e,_0x2f5c24){return _0x70199e&&_0x2f5c24;},'draiL':function(_0x5411c9,_0x36496a){return _0x5411c9===_0x36496a;},'fagwh':_0x1d8a87(0x3f2),'yWBsp':function(_0x447162,_0x189d95,_0x148598,_0x3ad410,_0x57a930){return _0x447162(_0x189d95,_0x148598,_0x3ad410,_0x57a930);},'xvhlD':function(_0x54ae4e,_0x26d406){return _0x54ae4e!==_0x26d406;},'DpMKN':function(_0x12b481,_0x39b0ca,_0x5bd3ff,_0x500d87,_0x4d4b49){return _0x12b481(_0x39b0ca,_0x5bd3ff,_0x500d87,_0x4d4b49);},'pupzk':function(_0x430c47,_0xa53607,_0x30d0e0,_0x1505ac,_0x28cf93){return _0x430c47(_0xa53607,_0x30d0e0,_0x1505ac,_0x28cf93);},'nonBD':'Icaxy','zFkON':_0x1d8a87(0x1c4),'UmXpP':_0x1d8a87(0x2c5),'zwgjP':function(_0x157c68,_0x45a9b5,_0x4c93ae,_0x5ac662,_0x2d62b8){return _0x157c68(_0x45a9b5,_0x4c93ae,_0x5ac662,_0x2d62b8);},'TlJVN':function(_0x3e60f4,_0x4a9c54,_0x161f51,_0x39f3b0,_0x1931a1){return _0x3e60f4(_0x4a9c54,_0x161f51,_0x39f3b0,_0x1931a1);},'YCatP':function(_0x58684e){return _0x58684e();},'Hjpzs':_0x1d8a87(0xea),'paOtG':_0x1d8a87(0x30a),'yaBNE':'WtndU','ZqpFh':function(_0x466c07,_0x53042f){return _0x466c07===_0x53042f;},'kBDQh':_0x1d8a87(0x114),'MXiUr':'TmRBJ','PatLk':function(_0x373cf6,_0x31f300){return _0x373cf6!==_0x31f300;},'VGEDg':_0x1d8a87(0x3d8),'zNzQM':function(_0x85fcf1,_0x3a5bd2){return _0x85fcf1+_0x3a5bd2;},'ZibPB':function(_0x3ff915,_0x3d13b1){return _0x3ff915+_0x3d13b1;},'CGbOR':_0x1d8a87(0x332),'hulEg':'mouse'+'up','LqtsS':_0x1d8a87(0x313)+'activ'+'e','PIGBb':function(_0x79e7e6){return _0x79e7e6();},'MfiJB':_0x1d8a87(0x481),'UqDdw':function(_0x43c37a,_0x5cd670){return _0x43c37a!==_0x5cd670;},'jaShx':'CANVA'+'S','dGKKm':function(_0x292326,_0x4aa346){return _0x292326!==_0x4aa346;},'xpgQy':_0x1d8a87(0x180),'KXiuA':function(_0xeb1893,_0xcfa769){return _0xeb1893*_0xcfa769;},'AMJty':function(_0x1c33e4,_0x144ac6){return _0x1c33e4*_0x144ac6;},'IZjWs':'px\x20ui'+_0x1d8a87(0x562)+'-seri'+_0x1d8a87(0x1e1)+'tem-u'+_0x1d8a87(0x3c7)+_0x1d8a87(0x94)+'if','iQuBr':function(_0x38c5c1,_0x59fbcd){return _0x38c5c1*_0x59fbcd;},'fVrJo':function(_0x3d775d,_0x30d4b9){return _0x3d775d+_0x30d4b9;},'KoIDk':function(_0x3a3ec4,_0x6a1213){return _0x3a3ec4*_0x6a1213;},'NAqHW':function(_0x2881a8,_0x43e5d8){return _0x2881a8-_0x43e5d8;},'JeWSw':_0x1d8a87(0x5ba),'huNht':function(_0x21ec7d,_0x378e97){return _0x21ec7d+_0x378e97;},'wCcsf':function(_0xc6e3eb,_0x1a78dc){return _0xc6e3eb+_0x1a78dc;},'zwLlx':function(_0x71eb4b,_0x4f1864){return _0x71eb4b+_0x4f1864;},'LHaPK':function(_0xef2e3e,_0x14b1c2){return _0xef2e3e+_0x14b1c2;},'awkFu':_0x1d8a87(0x189),'YzSCl':_0x1d8a87(0x248)+'1','BMlPV':function(_0x54550e,_0x49cc75){return _0x54550e+_0x49cc75;},'pgErY':'RMB','otkPq':'mouse'+'3','IIvhk':_0x1d8a87(0x478),'osPuz':_0x1d8a87(0x55e)+'9d','MZTCB':function(_0x33cbcf,_0x1adfcb){return _0x33cbcf-_0x1adfcb;},'skvAw':function(_0x370839,_0xf28a36){return _0x370839(_0xf28a36);},'rfCzv':_0x1d8a87(0x1bc),'kAYbH':_0x1d8a87(0x2bc)+_0x1d8a87(0x5af),'huBhk':function(_0x48c1de,_0x16cc9b){return _0x48c1de(_0x16cc9b);},'ExXvS':_0x1d8a87(0x21d),'bQKum':_0x1d8a87(0x5d8),'OPMUO':'div','cpudq':function(_0x21b571){return _0x21b571();},'qfyuz':_0x1d8a87(0x3b1),'usJlT':'Assem'+'bly-C'+_0x1d8a87(0x4bf)+'.dll','BiMtN':'Initi'+_0x1d8a87(0x348)+_0x1d8a87(0x176)+_0x1d8a87(0x610),'kNwoX':function(_0x1179c9){return _0x1179c9();},'Pmbjy':function(_0x3d575d){return _0x3d575d();},'fEEMJ':function(_0xbfd4fb,_0x1f65e1,_0xf7bda3,_0x4092bb,_0x1a1aad,_0x55e91f){return _0xbfd4fb(_0x1f65e1,_0xf7bda3,_0x4092bb,_0x1a1aad,_0x55e91f);},'cSRhr':_0x1d8a87(0x223)+_0x1d8a87(0x574),'mcUht':_0x1d8a87(0x456)+_0x1d8a87(0xb0)+'ead\x20a'+_0x1d8a87(0x4be)+_0x1d8a87(0x3a7)+_0x1d8a87(0xd9)+'cy\x20on'+_0x1d8a87(0x5e1)+_0x1d8a87(0x393)+_0x1d8a87(0x237)+_0x1d8a87(0xe8)+_0x1d8a87(0xe2),'koJLI':'Rapid'+_0x1d8a87(0x4f8)+_0x1d8a87(0x2bd)+']','BIglA':'Scale'+_0x1d8a87(0x1c1)+_0x1d8a87(0x532)+_0x1d8a87(0x20e)+_0x1d8a87(0x30c)+'eRate'+_0x1d8a87(0x4ae)+_0x1d8a87(0x181)+'erver'+'\x20may\x20'+_0x1d8a87(0x2a2)+_0x1d8a87(0x2a5)+'\x20shot'+'s.','GZqIh':function(_0x153379,_0x45136e,_0x5b76ee,_0x308ec7){return _0x153379(_0x45136e,_0x5b76ee,_0x308ec7);},'PoCav':_0x1d8a87(0x4b4)+_0x1d8a87(0x3e0)+'\x20stil'+'l\x20dra'+'in,\x20t'+'he\x20de'+'creme'+_0x1d8a87(0x551)+_0x1d8a87(0x1cb)+'\x20else'+_0x1d8a87(0x430)+'.','DJLBH':function(_0x562b43,_0x15ad11,_0x49153b,_0x501ee0,_0x193032,_0x4b5ca2){return _0x562b43(_0x15ad11,_0x49153b,_0x501ee0,_0x193032,_0x4b5ca2);},'aDEVx':_0x1d8a87(0x19e)+'s\x20all'+_0x1d8a87(0x1b2)+'\x20Move'+'ment\x20'+_0x1d8a87(0x191)+_0x1d8a87(0x279)+_0x1d8a87(0x1e9)+'us\x20ac'+'celer'+'ation'+'.','zHoIA':function(_0xb76605,_0x304646,_0x26f706,_0x21671d){return _0xb76605(_0x304646,_0x26f706,_0x21671d);},'yyWzz':function(_0x3014cc,_0x5e192b,_0x1dc857,_0x161e00){return _0x3014cc(_0x5e192b,_0x1dc857,_0x161e00);},'grJQV':'Jump\x20'+'%','ymhiC':function(_0x3c74af,_0x3a7ed2,_0x419384,_0x39ed2c,_0x2374f2,_0x2d3675){return _0x3c74af(_0x3a7ed2,_0x419384,_0x39ed2c,_0x2374f2,_0x2d3675);},'catqs':function(_0x521378,_0xdb9369,_0x16170f,_0x1ba8c5,_0x8508eb,_0x5bfa53){return _0x521378(_0xdb9369,_0x16170f,_0x1ba8c5,_0x8508eb,_0x5bfa53);},'OucEH':'Zeroe'+'s\x20Mov'+'ement'+_0x1d8a87(0x2dc)+_0x1d8a87(0x611)+_0x1d8a87(0x40a)+'o\x20the'+'\x20jump'+'\x20cool'+_0x1d8a87(0x194)+'never'+_0x1d8a87(0x28a)+'ies.','ROcOk':'visua'+'l','nRAPy':function(_0x311572,_0x24cceb,_0x165c77,_0x3aea55,_0x43e539,_0x5e15fa){return _0x311572(_0x24cceb,_0x165c77,_0x3aea55,_0x43e539,_0x5e15fa);},'jERVz':'Keyst'+_0x1d8a87(0x106),'HLxmJ':_0x1d8a87(0x35e)+_0x1d8a87(0x4a5)+'/RMB\x20'+_0x1d8a87(0x211)+_0x1d8a87(0x5d7)+_0x1d8a87(0x3f3)+'.','XDCVx':function(_0x2b1710,_0x39d2ad,_0x2774fa,_0x5cda14){return _0x2b1710(_0x39d2ad,_0x2774fa,_0x5cda14);},'JpLqI':_0x1d8a87(0x2cf)+'m\x20rig'+'ht','thILi':'Left\x20'+_0x1d8a87(0x20f)+'e','BGtZv':function(_0xd0f2d3,_0x7bdbfa,_0x4355f6,_0xc8d4b3){return _0xd0f2d3(_0x7bdbfa,_0x4355f6,_0xc8d4b3);},'MpObR':'Size','PkNhw':_0x1d8a87(0xd6)+_0x1d8a87(0x5dd)+_0x1d8a87(0x21c)+_0x1d8a87(0x29f)+'air.','EWlAq':'Color','OtjtD':function(_0x2c7a62,_0x1b8ff9,_0x49660c,_0x59a12d,_0x39ce2d,_0x408de7){return _0x2c7a62(_0x1b8ff9,_0x49660c,_0x59a12d,_0x39ce2d,_0x408de7);},'lkhhr':_0x1d8a87(0x3a0)+'ers','PxtuR':'FPS\x20o'+_0x1d8a87(0x59f)+'y.','IJrYn':function(_0x6889c7,_0x1b7393,_0x4449cb){return _0x6889c7(_0x1b7393,_0x4449cb);},'xOPEN':function(_0x2311a1,_0x55bfa8){return _0x2311a1(_0x55bfa8);},'IoiHW':_0x1d8a87(0x1a2)+'ck','DZHxE':'Hides'+'\x20kour'+'-io_*'+'\x20bann'+'er\x20sl'+'ots.','lpsDJ':_0x1d8a87(0x13c)+'\x20effe'+_0x1d8a87(0x407)+'\x20relo'+'ad\x20wh'+_0x1d8a87(0x5aa)+_0x1d8a87(0x56c)+'.','xhAoW':function(_0x2a14d4,_0x1529a3,_0x1e8482,_0x11bb80,_0x160c3f,_0x4b0bd8){return _0x2a14d4(_0x1529a3,_0x1e8482,_0x11bb80,_0x160c3f,_0x4b0bd8);},'hbmlT':'Appli'+'es\x20on'+'\x20relo'+_0x1d8a87(0x4f5)+'f\x20mat'+_0x1d8a87(0xca)+_0x1d8a87(0x577)+_0x1d8a87(0x496)+_0x1d8a87(0x3a9)+'de,\x20t'+_0x1d8a87(0x10b)+'eeze\x20'+'is\x20ho'+_0x1d8a87(0x22d)+_0x1d8a87(0x49e)+_0x1d8a87(0x3d1)+_0x1d8a87(0x52b)+_0x1d8a87(0x271)+_0x1d8a87(0x515)+'-appl'+_0x1d8a87(0x2be)+_0x1d8a87(0xa0),'jOfUg':'Hook\x20'+_0x1d8a87(0xa6)+'switc'+_0x1d8a87(0x52d),'HmHAb':function(_0x114dc6,_0x41b46c,_0x93b525){return _0x114dc6(_0x41b46c,_0x93b525);},'nWvzJ':function(_0x49744f,_0x44f281,_0x5c04dc,_0x2e7b5e){return _0x49744f(_0x44f281,_0x5c04dc,_0x2e7b5e);},'bYYIX':_0x1d8a87(0x335)+_0x1d8a87(0x134)+_0x1d8a87(0x37f)+_0x1d8a87(0x42c)+_0x1d8a87(0x409),'SDHFH':function(_0x257090,_0x43c118,_0x4f92a7){return _0x257090(_0x43c118,_0x4f92a7);},'ejyTp':_0x1d8a87(0x5ee)+'Kille'+'r','xTuMD':_0x1d8a87(0x476)+'les\x20C'+'odeSt'+_0x1d8a87(0x268)+_0x1d8a87(0x2da)+_0x1d8a87(0x3c6)+_0x1d8a87(0x349)+_0x1d8a87(0x187)+'via\x20S'+_0x1d8a87(0x4a4)+_0x1d8a87(0x286)+_0x1d8a87(0x253)+_0x1d8a87(0x4df)+'\x20ON.','ZFngO':_0x1d8a87(0x145)+'amage'+_0x1d8a87(0x1ea)+_0x1d8a87(0x5c2)+_0x1d8a87(0x125)+_0x1d8a87(0x493)+'\x20ban\x20'+_0x1d8a87(0xa6)+'even\x20'+'with\x20'+_0x1d8a87(0x55d)+_0x1d8a87(0x5ea),'tyiwn':_0x1d8a87(0x166)+_0x1d8a87(0x10f)+'tting'+'s','iMYzX':_0x1d8a87(0x1f2),'IBiEf':function(_0x5748ad,_0x5bdb3e){return _0x5748ad(_0x5bdb3e);},'OdscL':'error','LLiXF':_0x1d8a87(0x267),'NTaas':function(_0x52c205){return _0x52c205();},'unrCf':_0x1d8a87(0x5d0)+'MODE\x20'+_0x1d8a87(0x347)+_0x1d8a87(0x2e5)+'only,'+'\x20no\x20h'+_0x1d8a87(0x173)+_0x1d8a87(0x272)+_0x1d8a87(0x365)+'\x20exit'+')','kMWFG':function(_0x208167,_0x42e29d){return _0x208167+_0x42e29d;},'HsESI':'hSSLT','yjfBn':function(_0x525b55,_0x4aca6d){return _0x525b55+_0x4aca6d;},'UYpFY':'\x20hook'+'s','MzbBd':'loadi'+'ng','Ubejx':_0x1d8a87(0x592),'wINFO':_0x1d8a87(0x3cb)+'de','ccQiK':'mn-to'+'p','WgLRB':_0x1d8a87(0x34a)+'a\x20Kou'+'r','Ndkoo':'small','Yvkac':_0x1d8a87(0x528)+'n','AJPwD':'Close','xGTxJ':_0x1d8a87(0xf6)+'l>','TmlEm':'</sma'+_0x1d8a87(0x3f1),'wYQhL':_0x1d8a87(0xf3)+'t','ZvXLi':function(_0x4a9065,_0x5209e1){return _0x4a9065!==_0x5209e1;},'yVRFk':_0x1d8a87(0x461),'wqhOH':'fulls'+_0x1d8a87(0x5ae)+'-banr'+'s','rVmaj':function(_0x4aa2bf,_0x3730db){return _0x4aa2bf+_0x3730db;},'KlWLl':'sakur'+'a.kou'+_0x1d8a87(0x440)+'v1','HlYBT':'sk-ra'+_0x1d8a87(0x384),'NrtSr':'cjZAW','AnvXw':'set_t'+'arget'+'Frame'+_0x1d8a87(0x38e),'KqWjj':function(_0xc9b32d,_0x4a603a){return _0xc9b32d+_0x4a603a;},'hQSlJ':_0x1d8a87(0x5c4)+_0x1d8a87(0x49f)+'\x20','tNXXz':'none','taKAu':'hZogr','AfbAP':_0x1d8a87(0x2ef)+'s','mjnSI':_0x1d8a87(0x28e)+_0x1d8a87(0x224)+_0x1d8a87(0xe9)+'inset'+_0x1d8a87(0x229)+_0x1d8a87(0xd2)+_0x1d8a87(0xac)+_0x1d8a87(0x2f7)+'t:100'+_0x1d8a87(0x13b)+_0x1d8a87(0x417)+_0x1d8a87(0x371)+_0x1d8a87(0x342)+_0x1d8a87(0x103)+_0x1d8a87(0x607)+'event'+_0x1d8a87(0x504)+'e','FEDkr':'posit'+'ion:f'+'ixed;'+'inset'+':0;z-'+_0x1d8a87(0x417)+_0x1d8a87(0x371)+_0x1d8a87(0x342)+_0x1d8a87(0xb1)+'nter-'+'event'+_0x1d8a87(0x504)+'e;','jSkEq':_0x1d8a87(0xce),'lDgPG':_0x1d8a87(0x457),'sZNml':_0x1d8a87(0x573)+'y','ooQJC':'keydo'+'wn','jlVsf':_0x1d8a87(0x21a)+'viewB'+_0x1d8a87(0xb9)+'\x200\x2024'+_0x1d8a87(0x516)+_0x1d8a87(0x254)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x1d8a87(0x443)+_0x1d8a87(0x615)+'-4-7.'+'5\x200-2'+_0x1d8a87(0x2c3)+'8-4.5'+_0x1d8a87(0x29e)+'5s4\x202'+'\x204\x204.'+_0x1d8a87(0x3a1)+_0x1d8a87(0xfe)+_0x1d8a87(0x544)+'.5z\x22\x20'+'fill='+_0x1d8a87(0xf2)+_0x1d8a87(0x343)+'oke=\x22'+_0x1d8a87(0x55e)+'9d\x22\x20s'+_0x1d8a87(0x3ec)+'-widt'+_0x1d8a87(0x330)+'\x20stro'+_0x1d8a87(0x4c6)+'necap'+'=\x22rou'+'nd\x22\x20s'+_0x1d8a87(0x3ec)+_0x1d8a87(0x4c9)+'join='+_0x1d8a87(0x4e3)+_0x1d8a87(0x105)+_0x1d8a87(0x14c)+_0x1d8a87(0x336)+'\x2212\x22\x20'+_0x1d8a87(0xf5)+_0x1d8a87(0x17a)+_0x1d8a87(0x5e5)+_0x1d8a87(0x547)+_0x1d8a87(0x37d)+_0x1d8a87(0x4cb)+_0x1d8a87(0x2f0)+'vg>','ybdoD':'#ffb3'+'c6','cGLyF':_0x1d8a87(0x2bf),'HWDXk':function(_0x26c607,_0x504f07,_0x3f46e7,_0x32becc,_0x4aa3af,_0x1fde5c,_0x586a47,_0x5a295a){return _0x26c607(_0x504f07,_0x3f46e7,_0x32becc,_0x4aa3af,_0x1fde5c,_0x586a47,_0x5a295a);},'QZQXS':_0x1d8a87(0x328)+'oil','nvnKB':_0x1d8a87(0x4ca),'AIZjh':_0x1d8a87(0x498)+_0x1d8a87(0x1ff)+_0x1d8a87(0x5b6),'IWYLU':function(_0x20ec6a,_0x2a294c,_0x597436){return _0x20ec6a(_0x2a294c,_0x597436);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+_0x1d8a87(0x123)]||''))return;if(window[_0x1d8a87(0x346)+_0x1d8a87(0x262)+_0x1d8a87(0x5e4)])return;window[_0x1d8a87(0x346)+'URA_K'+_0x1d8a87(0x5e4)]=!![];var _0x19db92=_0x3b09cf[_0x1d8a87(0x29c)],_0x33fd18=_0x3b09cf['ybdoD'],_0x1df3e5={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x3b09cf['osPuz'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x4ee42e={..._0x1df3e5};try{if(_0x3b09cf[_0x1d8a87(0x50c)](_0x1d8a87(0x1e7),_0x3b09cf['cGLyF'])){var _0x48e86f=_0x28fd7c(_0x3f786c,_0x27fdeb=>{var _0x5aff96=_0x1d8a87;_0x35fbf7[_0x5aff96(0x12c)+'List']['toggl'+'e']('on',_0x27fdeb),_0x3e7c96(_0x27fdeb);});_0x3935f9[_0x1d8a87(0x315)+'d'](_0x3f366f,_0x48e86f);}else Object[_0x1d8a87(0x351)+'n'](_0x4ee42e,JSON['parse'](localStorage[_0x1d8a87(0x219)+'em']('sakur'+_0x1d8a87(0x35f)+_0x1d8a87(0xc3))||'{}'));}catch(_0x2c9b1d){}function _0x3e3fb4(){var _0x393758=_0x1d8a87;try{localStorage['setIt'+'em'](_0x393758(0x1f6)+_0x393758(0x35f)+'r.v1',JSON[_0x393758(0x2cc)+_0x393758(0x1ad)](_0x4ee42e));}catch(_0x2964fc){}}var _0x3d8b21={'uwmk':!!window[_0x1d8a87(0x4a7)+_0x1d8a87(0x1b5)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4ee42e[_0x1d8a87(0x4d4)+_0x1d8a87(0x433)],'lastError':''};try{window[_0x1d8a87(0x293)+_0x1d8a87(0x122)+'stene'+'r'](_0x1d8a87(0x4ac),_0x22916c=>{var _0x3b41e8=_0x1d8a87;try{var _0x25811e=_0x22916c&&(_0x22916c[_0x3b41e8(0x583)+'ge']||_0x22916c[_0x3b41e8(0x4ac)]&&_0x22916c[_0x3b41e8(0x4ac)][_0x3b41e8(0x583)+'ge'])||_0x3b41e8(0xa3)+'wn';if(_0x22916c&&_0x22916c[_0x3b41e8(0x54f)+_0x3b41e8(0x123)])_0x25811e+=_0x3b09cf[_0x3b41e8(0x1a1)]+String(_0x22916c['filen'+_0x3b41e8(0x123)])[_0x3b41e8(0x441)]('/')[_0x3b41e8(0x35a)]()+':'+(_0x22916c['linen'+'o']||'?');_0x3d8b21[_0x3b41e8(0x538)+_0x3b41e8(0x195)]=String(_0x25811e)[_0x3b41e8(0x178)](-0x161*0x2+-0x99f*0x1+0xc61,0x2*-0xb09+-0x10*-0xac+-0x1*-0xbf2);}catch(_0x4322f2){}});}catch(_0x4700f4){}var _0x3500af=null,_0x556edb=null,_0x808ef9={},_0x5a9445=[],_0x3358e0=[],_0x36bf2e=new Map();function _0x33675a(_0x47fc70,_0x25efa0){var _0x565e80=_0x1d8a87;if(_0x3b09cf['VZvFy'](_0x565e80(0x220),'cWMao')){if(_0xc63b73[_0x565e80(0x34f)]&&(_0x4192af[_0x565e80(0x584)+_0x565e80(0x2d2)]==='inter'+_0x565e80(0x39e)+'e'||_0x3b09cf['NCAYn'](_0x5abd1d['ready'+_0x565e80(0x2d2)],_0x3b09cf[_0x565e80(0x49b)])))_0x311119();else _0x118e46[_0x565e80(0x293)+'entLi'+'stene'+'r'](_0x3b09cf['sEPFn'],_0x65d29c,{'once':!![]});}else{if(!_0x25efa0||_0x47fc70['inclu'+'des'](_0x25efa0)||_0x47fc70['lengt'+'h']>-0x25e1+-0x1*-0x142c+0x11f5)return;_0x47fc70[_0x565e80(0x49d)](_0x25efa0);}}function _0x49d4a9(_0x547a97,_0x2d2d8f,_0x236588,_0x42cf68){var _0x593b83=_0x1d8a87,_0x3483bb=-0x2f*-0x2f+0x2f4+-0xb95*0x1;try{_0x3483bb=_0x2d2d8f&&_0x2d2d8f['val']?_0x2d2d8f[_0x593b83(0x275)]():0x1ea+0x1b*0x7a+-0x16*0xac;}catch(_0x3c9611){}if(!_0x3483bb)return;_0x3b09cf[_0x593b83(0x8b)](_0x33675a,_0x547a97,_0x3483bb),_0x236588[_0x42cf68]=_0x547a97['lengt'+'h'];if(_0x3b09cf[_0x593b83(0x50c)](_0x42cf68,_0x3b09cf['AXbvv'])&&_0x547a97[_0x593b83(0x604)+'h']){var _0x35c5e1=_0x808ef9['capMo'+'ve'];if(_0x35c5e1)try{_0x35c5e1['enabl'+'ed']=![];}catch(_0x2b6834){}}}function _0xd0ae41(_0x16ce7f,_0x7f190,_0x515570){var _0x11aeb8=_0x1d8a87,_0x783e99={'PjXQH':_0x11aeb8(0x291)+'n','GBrrs':_0x3b09cf['TnVnb']},_0x3032de=_0x36bf2e[_0x11aeb8(0x1ee)](_0x16ce7f);!_0x3032de&&(_0x3032de=new Map(),_0x36bf2e[_0x11aeb8(0x41d)](_0x16ce7f,_0x3032de));if(!_0x3032de['has'](_0x7f190))try{var _0x5712b7=new _0x3500af(_0x16ce7f)['readF'+'ield'](_0x7f190,_0x515570);_0x3032de[_0x11aeb8(0x41d)](_0x7f190,_0x5712b7!==undefined?_0x5712b7[_0x11aeb8(0x275)]():null);}catch(_0x113c5c){if(_0x3b09cf[_0x11aeb8(0x240)](_0x11aeb8(0x5b1),'mqARi'))_0x3032de['set'](_0x7f190,null);else{var _0x16c95d=('5|4|3'+_0x11aeb8(0x567)+'0')[_0x11aeb8(0x441)]('|'),_0x4a8bd9=0x1b6f*-0x1+0x9ea+-0xf*-0x12b;while(!![]){switch(_0x16c95d[_0x4a8bd9++]){case'0':return _0x22fee3;case'1':_0x22fee3['value']=_0x3fa5cb;continue;case'2':_0x22fee3[_0x11aeb8(0x435)+_0x11aeb8(0x384)]=()=>_0xa1545c(_0x22fee3['value']);continue;case'3':for(var [_0xdb060a,_0xa05542]of _0x22716c){var _0x169cff=_0x42d374['creat'+_0x11aeb8(0x56d)+'ent'](_0x783e99['PjXQH']);_0x169cff[_0x11aeb8(0x1a5)]=_0xdb060a,_0x169cff['textC'+'onten'+'t']=_0xa05542,_0x22fee3['appen'+'dChil'+'d'](_0x169cff);}continue;case'4':_0x22fee3['class'+_0x11aeb8(0x469)]=_0x783e99['GBrrs'];continue;case'5':var _0x22fee3=_0x1871cc[_0x11aeb8(0x208)+'eElem'+_0x11aeb8(0x32e)]('selec'+'t');continue;}break;}}}return _0x3032de[_0x11aeb8(0x1ee)](_0x7f190);}function _0x4eee35(_0x14db3d,_0x1ba27d,_0x3bc5f8,_0x3ae9cc){var _0x55de05=_0x1d8a87;try{_0x55de05(0x20c)===_0x55de05(0x20c)?new _0x3500af(_0x14db3d)[_0x55de05(0x273)+_0x55de05(0x3b2)](_0x1ba27d,_0x3bc5f8,_0x3ae9cc):_0x2044ce[_0x55de05(0x315)+_0x55de05(0x37a)+'d'](_0x12b8a9);}catch(_0x1984b7){}}function _0x4b7c7a(_0x313137,_0x23d983){var _0x1fc7d9=_0x1d8a87;try{var _0x1d9583=new _0x3500af(_0x313137)['readF'+_0x1fc7d9(0x1e8)](_0x23d983,'u32');return _0x1d9583?_0x1d9583[_0x1fc7d9(0x275)]():-0x1296+0x1*-0xd10+0x1fa6;}catch(_0x4b9b01){return-0x789+0x15*0x38+-0x2f1*-0x1;}}function _0x145038(_0x5efc99,_0x422792,_0x205da7,_0x237077){var _0x1b4f6f=_0x1d8a87,_0xcae178=_0x3b09cf['tSwEg'](_0xd0ae41,_0x5efc99,_0x422792,_0x205da7);if(_0x3b09cf[_0x1b4f6f(0x31b)](_0xcae178,null))_0x3b09cf[_0x1b4f6f(0x21f)](_0x4eee35,_0x5efc99,_0x422792,_0x205da7,_0xcae178*_0x237077);}function _0x218d30(_0x177f5a,_0x5c8bc2,_0x113bff,_0x1d780c,_0x1601f4,_0xc8f81d,_0x450494){var _0x3dcfb9=_0x1d8a87;if(_0x3b09cf['dhjwz']('RntMt','RntMt'))try{if(_0x3dcfb9(0x1e6)===_0x3dcfb9(0x283)){_0x1886f2[_0x3dcfb9(0x49d)](_0x4c7d0b['now']());if(_0x3b09cf['yyYeJ'](_0x3f18b9['lengt'+'h'],-0x10aa+0x20e0+0x1*-0x100e))_0x243f0c['shift']();}else{var _0x48a80d=_0x556edb['hookP'+'refix']({'typeName':_0x5c8bc2,'methodName':_0x113bff,'params':_0x1d780c,'returnType':_0x1601f4},_0xc8f81d);return _0x48a80d[_0x3dcfb9(0x9c)+'ed']=_0x3b09cf['jOVfb'](_0x450494,![]),_0x808ef9[_0x177f5a]=_0x48a80d,_0x3d8b21[_0x3dcfb9(0x515)+_0x3dcfb9(0x387)]++,_0x48a80d;}}catch(_0x7b08b4){return console[_0x3dcfb9(0x576)](_0x3dcfb9(0x5e6)+'ra-ko'+_0x3dcfb9(0x5bf)+'ook\x20r'+_0x3dcfb9(0x1af)+_0x3dcfb9(0x157),_0x177f5a,_0x7b08b4&&_0x7b08b4['messa'+'ge']),null;}else _0x444ef0[_0x3dcfb9(0x15f)+'e'](_0x2844b5[_0x3dcfb9(0x22c)]);}function _0x1ee1be(_0x40bf03,_0x18b270,_0x54a832,_0xe26a19,_0x25479d,_0x1e1782,_0x32ec4d){var _0x4ab702=_0x1d8a87;try{if(_0x3b09cf[_0x4ab702(0x50c)](_0x3b09cf[_0x4ab702(0x495)],_0x4ab702(0x411))){var _0x34cb8c=_0x556edb['hookP'+_0x4ab702(0x462)+'x']({'typeName':_0x18b270,'methodName':_0x54a832,'params':_0xe26a19,'returnType':_0x25479d},_0x1e1782);return _0x34cb8c[_0x4ab702(0x9c)+'ed']=_0x3b09cf[_0x4ab702(0xe0)](_0x32ec4d,![]),_0x808ef9[_0x40bf03]=_0x34cb8c,_0x3d8b21['hooks'+'Total']++,_0x34cb8c;}else try{_0x352dc9[_0x4ab702(0x9c)+'ed']=!!_0xeb084a;}catch(_0x44e155){}}catch(_0x2752ed){if('haDMs'!==_0x4ab702(0x47a))try{var _0x4059eb=_0x1e5b41[_0x4ab702(0x5cb)+'ostfi'+'x']({'typeName':_0x11fd53,'methodName':_0x5d299e,'params':_0x542f9a,'returnType':_0x598f96},_0x59abf6);return _0x4059eb['enabl'+'ed']=_0x1f0ef7!==![],_0x593891[_0x783e21]=_0x4059eb,_0x1ab3d5[_0x4ab702(0x515)+'Total']++,_0x4059eb;}catch(_0x29cc43){return _0x3d96ec[_0x4ab702(0x576)](_0x3b09cf[_0x4ab702(0x40e)],_0x47af07,_0x29cc43&&_0x29cc43['messa'+'ge']),null;}else return console[_0x4ab702(0x576)](_0x4ab702(0x5e6)+_0x4ab702(0x5e7)+_0x4ab702(0x5bf)+_0x4ab702(0x531)+_0x4ab702(0x1af)+_0x4ab702(0x157),_0x40bf03,_0x2752ed&&_0x2752ed[_0x4ab702(0x583)+'ge']),null;}}var _0x392be1=()=>![];try{if(window[_0x1d8a87(0x4a7)+_0x1d8a87(0x1b5)+_0x1d8a87(0x4e6)]&&!_0x4ee42e['safeM'+_0x1d8a87(0x433)]){_0x3500af=window['Unity'+'WebMo'+_0x1d8a87(0x4e6)][_0x1d8a87(0x445)+'Wrapp'+'er'],_0x556edb=window[_0x1d8a87(0x4a7)+_0x1d8a87(0x1b5)+'dkit'][_0x1d8a87(0x52c)+'me']['creat'+_0x1d8a87(0x4e2)+'in']({'name':_0x1d8a87(0x34a)+_0x1d8a87(0x43f),'version':_0x3b09cf[_0x1d8a87(0x12e)],'referencedAssemblies':[_0x1d8a87(0x500)+_0x1d8a87(0x5ed)+_0x1d8a87(0x4bf)+_0x1d8a87(0x61c)]});if(_0x4ee42e[_0x1d8a87(0x11e)+'od'])_0x3b09cf[_0x1d8a87(0x1e2)](_0x218d30,'god',_0x1d8a87(0x12d)+'th',_0x3b09cf['BiMtN'],[_0x1d8a87(0x1c4),_0x3b09cf[_0x1d8a87(0x17c)]],undefined,_0x392be1,!!_0x4ee42e[_0x1d8a87(0xea)]);if(_0x4ee42e['hookG'+_0x1d8a87(0x39f)])_0x218d30(_0x1d8a87(0x335)+'e',_0x1d8a87(0x12d)+'th','Local'+_0x1d8a87(0x1f0),[_0x3b09cf[_0x1d8a87(0x17c)],'i32',_0x3b09cf['zFkON'],_0x1d8a87(0x1c4),'i32'],undefined,_0x392be1,!!_0x4ee42e['god']);if(_0x4ee42e['hookN'+'oReco'+'il'])_0x218d30(_0x3b09cf[_0x1d8a87(0x3f5)],_0x1d8a87(0x42f)+_0x1d8a87(0x2d8)+_0x1d8a87(0x1e5)+_0x1d8a87(0x1c6)+_0x1d8a87(0x19c)+_0x1d8a87(0x16e)+_0x1d8a87(0x302)+'on',_0x3b09cf[_0x1d8a87(0x41a)],[_0x3b09cf[_0x1d8a87(0x17c)]],undefined,_0x392be1,!!_0x4ee42e[_0x1d8a87(0x328)+_0x1d8a87(0x47e)]);if(_0x4ee42e['hookC'+'aptur'+'e'])_0x1ee1be('capSh'+_0x1d8a87(0x49f),_0x1d8a87(0x3e2)+'ter',_0x3b09cf['AIZjh'],[_0x3b09cf[_0x1d8a87(0x17c)],'i32'],undefined,(_0x54accd,_0x4773f0)=>{var _0xc0d2ad=_0x1d8a87;_0x49d4a9(_0x3358e0,_0x4773f0,_0x3d8b21,_0x3b09cf[_0xc0d2ad(0x2c9)]);},!![]);if(_0x4ee42e['hookC'+'aptur'+'e'])_0x1ee1be(_0x1d8a87(0x228)+'ve',_0x1d8a87(0x42f)+_0x1d8a87(0x2d8)+'forms'+_0x1d8a87(0x1c6)+_0x1d8a87(0x19c)+'Movem'+_0x1d8a87(0x32e),_0x1d8a87(0x32f)+'unded',[_0x3b09cf[_0x1d8a87(0x17c)]],'i32',(_0x4e8193,_0x16324b)=>{var _0x611d3e=_0x1d8a87;'pxFgW'===_0x3b09cf[_0x611d3e(0x261)]?_0x3b09cf[_0x611d3e(0x50b)](_0x4e1628,_0x3e2cca,_0x3decaf,_0x4a4079,'movem'+'ents'):_0x3b09cf[_0x611d3e(0x21f)](_0x49d4a9,_0x5a9445,_0x16324b,_0x3d8b21,_0x3b09cf['AXbvv']);},!![]);}}catch(_0x50fe68){console['warn'](_0x1d8a87(0x5e6)+'ra-ko'+'ur]\x20U'+_0x1d8a87(0x1bd)+_0x1d8a87(0x61d)+_0x1d8a87(0x289)+':',_0x50fe68&&_0x50fe68['messa'+'ge']);}function _0x1825be(_0x2c5aaf,_0xe8b998){var _0x5c8c54=_0x1d8a87;if('PxOWR'==='PxOWR'){var _0x14baa4=_0x808ef9[_0x2c5aaf];if(_0x14baa4){if(_0x3b09cf[_0x5c8c54(0x4f3)](_0x3b09cf['FNVsE'],_0x3b09cf[_0x5c8c54(0x4a3)]))try{_0x14baa4['enabl'+'ed']=!!_0xe8b998;}catch(_0x598243){}else try{if(_0x1c2592)_0x2b09ef[_0x5c8c54(0x2ac)](_0x5c8c54(0x4a7)+_0x5c8c54(0x416)+_0x5c8c54(0x467)+'licat'+'ion','set_t'+'arget'+_0x5c8c54(0x4fb)+'Rate',[0x2*0x939+0x39*0x73+-0x2b1d]);}catch(_0x120575){}}}else{var _0x271d17=_0x56374f[_0x5c8c54(0x228)+'ve'];if(_0x271d17)try{_0x271d17['enabl'+'ed']=![];}catch(_0x402553){}}}_0x3b09cf['IWYLU'](setInterval,()=>{var _0x46ca5b=_0x1d8a87,_0x2e0ad3={'RhsIT':function(_0x171ab2,_0x32d4e0){return _0x3b09cf['dhjwz'](_0x171ab2,_0x32d4e0);},'kiQCw':function(_0x2016e3){return _0x3b09cf['Dqbda'](_0x2016e3);}};if(!_0x3500af||!window[_0x46ca5b(0x20b)+'Insta'+'nce'])return;var _0x251ced=(Number(_0x4ee42e[_0x46ca5b(0x191)+_0x46ca5b(0x5c9)])||0x155+0x17*0x7c+-0xc15)/(0x25f4+0x1eb6+0x3cb*-0x12),_0x4496ee=(Number(_0x4ee42e[_0x46ca5b(0x5b7)+'ct'])||-0x23da+0x2*0x216+0x2012)/(-0x37d*-0xa+0xf41+0x2d*-0x11b),_0x4bb12e=_0x3b09cf[_0x46ca5b(0x14b)](Number(_0x4ee42e['gravi'+_0x46ca5b(0x238)])||0x207*-0x8+0x9a6+0x6f6,0x17bc+-0x1d*0x125+-0x1*-0x9d9),_0x18f158=Math[_0x46ca5b(0x534)](0xf7a+-0x1a9b+0x1*0xb22,Number(_0x4ee42e[_0x46ca5b(0x392)+_0x46ca5b(0x182)+'e'])||0x1345*0x1+0x2*0xdbd+-0xf63*0x3),_0x1e43ce=_0x251ced!==0x2*0x967+0x170f*-0x1+-0xda*-0x5||_0x4496ee!==0x241*-0x1+0x820*0x4+-0x9e*0x31||_0x3b09cf[_0x46ca5b(0x618)](_0x4bb12e,-0x1707+0x2107+-0x9ff)||_0x4ee42e['bhop'],_0x5dc2c6=_0x4ee42e[_0x46ca5b(0x5be)+_0x46ca5b(0x5c6)]||_0x4ee42e[_0x46ca5b(0x392)+_0x46ca5b(0x472)]||_0x4ee42e[_0x46ca5b(0x4cd)+_0x46ca5b(0xed)]||_0x4ee42e[_0x46ca5b(0x454)+_0x46ca5b(0x2e1)];if(_0x3b09cf['XtENQ'](!_0x1e43ce,!_0x5dc2c6))return;try{for(var _0x42f5ad=-0x1*-0x1661+0x1e7*0x2+0x1a2f*-0x1;_0x42f5ad<_0x5a9445['lengt'+'h'];_0x42f5ad++){var _0x216870=_0x5a9445[_0x42f5ad];if(!_0x216870)continue;if(_0x251ced!==0x1e7b+-0xb6e+-0x130c){if(_0x3b09cf[_0x46ca5b(0x46a)](_0x46ca5b(0x3fd),'WGLhM')){var _0x3dff2d=(_0x46ca5b(0x2ec)+_0x46ca5b(0x1a6)+_0x46ca5b(0x569)+'|4')[_0x46ca5b(0x441)]('|'),_0x2b4d61=0x1*0x2291+-0x126e+0xf3*-0x11;while(!![]){switch(_0x3dff2d[_0x2b4d61++]){case'0':if(_0x2e0ad3['RhsIT'](_0x5f46e5,_0x3ed80c['w'])&&_0x2e0ad3[_0x46ca5b(0x34b)](_0x3b9a6b,_0x216588['h'])&&_0x168a03===_0x175c10['dpr'])return;continue;case'1':_0x20b586['h']=_0x3b9a6b;continue;case'2':_0x9237b7['w']=_0x5f46e5;continue;case'3':_0x1117d1['heigh'+'t']=_0x4de725['round'](_0x3b9a6b*_0x168a03);continue;case'4':_0x573d24[_0x46ca5b(0x42b)+_0x46ca5b(0x4bc)+'rm'](_0x168a03,-0x108e+-0x7a9*0x3+0x1*0x2789,-0x497+-0x206c+0x2503*0x1,_0x168a03,0x1061*-0x1+-0x1853+0x28b4,0x1008+-0xb*0x26b+0xa91);continue;case'5':_0x1972e8['width']=_0x38e98e[_0x46ca5b(0xa9)](_0x5f46e5*_0x168a03);continue;case'6':_0x1a6ddb['dpr']=_0x168a03;continue;case'7':var _0x5f46e5=_0x4b9a36[_0x46ca5b(0x2bb)+_0x46ca5b(0x372)],_0x3b9a6b=_0x3659ab['inner'+_0x46ca5b(0x3ff)+'t'];continue;case'8':var _0x168a03=_0x5c5026[_0x46ca5b(0x53a)+_0x46ca5b(0x18e)+'lRati'+'o']||-0xdf+0x6b5+-0x5d5;continue;}break;}}else _0x145038(_0x216870,0x4d3*-0x3+0xa*0x203+-0x57d,_0x3b09cf[_0x46ca5b(0x2e0)],_0x251ced),_0x3b09cf[_0x46ca5b(0x50b)](_0x145038,_0x216870,0x1ca0+-0x103c*0x2+0x404,_0x3b09cf['fagwh'],_0x251ced),_0x145038(_0x216870,-0x1399*0x1+-0x19f9+0x2dc2,_0x46ca5b(0x3f2),_0x251ced),_0x145038(_0x216870,-0x26d9+-0xed*-0xe+0x1a17,_0x3b09cf[_0x46ca5b(0x2e0)],_0x251ced),_0x3b09cf['yWBsp'](_0x145038,_0x216870,0x23c2+0x1cc0+0x4066*-0x1,_0x46ca5b(0x3f2),_0x251ced),_0x145038(_0x216870,0x1eb*-0x1+0xcb3+-0xaa8,_0x3b09cf[_0x46ca5b(0x2e0)],_0x251ced);}if(_0x4496ee!==0x3*-0x4e4+-0x26*-0x52+0x281)_0x145038(_0x216870,-0x19e9+-0x19b1*-0x1+0x88,'f32',_0x4496ee);_0x3b09cf[_0x46ca5b(0x23c)](_0x4bb12e,-0x1fba+0xb*0x16b+-0xa*-0x19d)&&(_0x3b09cf[_0x46ca5b(0x57c)](_0x145038,_0x216870,-0x4ff+-0x1a*0x9b+0x1505,_0x3b09cf[_0x46ca5b(0x2e0)],_0x4bb12e),_0x145038(_0x216870,-0x610+-0xc1b+0x1277,'f32',_0x4bb12e));if(_0x4ee42e[_0x46ca5b(0x50a)])_0x3b09cf[_0x46ca5b(0x535)](_0x4eee35,_0x216870,0x939+-0x6cd+-0x1d0,_0x3b09cf[_0x46ca5b(0x2e0)],-(-0x57+-0x1048*-0x2+-0x1c52));}}catch(_0x47601e){}try{for(var _0x5c230a=0x15c8+-0x21cd+0xc05;_0x5c230a<_0x3358e0[_0x46ca5b(0x604)+'h'];_0x5c230a++){var _0x15d2f2=_0x4b7c7a(_0x3358e0[_0x5c230a],-0x1781+-0xaf+-0x16*-0x11c);if(!_0x15d2f2)continue;_0x4ee42e[_0x46ca5b(0x392)+'eExp']&&(_0x3b09cf[_0x46ca5b(0x415)]!==_0x3b09cf[_0x46ca5b(0x415)]?(_0x21032e[_0x46ca5b(0x454)+'Exp']=_0x30cd9f,_0x2e0ad3[_0x46ca5b(0x205)](_0x3ce3f4)):(_0x3b09cf[_0x46ca5b(0x60d)](_0x4eee35,_0x15d2f2,0x5*-0x704+0xdb2+0x1*0x15ae,_0x3b09cf['zFkON'],_0x18f158),_0x4eee35(_0x15d2f2,0x5d*-0x52+-0xd1*-0x29+-0x35b,'i32',_0x18f158)));if(_0x4ee42e['noSpr'+_0x46ca5b(0x5c6)]){if(_0x3b09cf['UmXpP']!=='CWKdV')_0x3b09cf['zwgjP'](_0x4eee35,_0x15d2f2,0x1*-0x2335+-0x2136+0x44f3,_0x3b09cf['fagwh'],-0xe*0x2c5+-0x1*-0xa46+0x1c80),_0x3b09cf[_0x46ca5b(0x535)](_0x4eee35,_0x15d2f2,0x142+0xb*-0x19d+0x10e5*0x1,_0x3b09cf[_0x46ca5b(0x2e0)],0xe7+0xc98+-0xb*0x13a);else{var _0x130ffa=_0x12b654[_0x46ca5b(0x208)+_0x46ca5b(0x56d)+_0x46ca5b(0x32e)]('butto'+'n');return _0x130ffa[_0x46ca5b(0x130)]=_0x46ca5b(0x528)+'n',_0x130ffa['class'+'Name']='sk-bt'+'n',_0x130ffa['textC'+_0x46ca5b(0x5dc)+'t']=_0x3f52fb,_0x130ffa['oncli'+'ck']=_0x5661b2=>{var _0x165c28=_0x46ca5b;_0x5661b2['stopP'+'ropag'+_0x165c28(0x263)](),_0xaee365();},_0x130ffa;}}if(_0x4ee42e['infAm'+'moExp'])_0x3b09cf[_0x46ca5b(0xba)](_0x4eee35,_0x15d2f2,0xbe4+-0x1786*-0x1+-0xe*0x281,_0x46ca5b(0x1c4),0x1584+0xc5*0x29+-0x312a);_0x4ee42e['rapid'+_0x46ca5b(0x2e1)]&&(_0x3b09cf['eoxAe'](_0x145038,_0x15d2f2,-0x575+0x376*-0x6+0x1ac5,'f32',-0x1*-0xb61+0xf5+-0x2*0x62b+0.1),_0x4eee35(_0x15d2f2,0x572+-0xf5*0x1a+0x13d0,_0x3b09cf['fagwh'],0x1*0x1b81+0x19a4+-0x3525+0.1));}}catch(_0x5d7ce2){}},0x2*0x4f6+0xa*-0x2d2+0x1310),_0x3b09cf[_0x1d8a87(0x4c5)](setInterval,()=>{var _0x419127=_0x1d8a87;_0x3d8b21['gameL'+'oaded']=!!window[_0x419127(0x20b)+_0x419127(0x200)+_0x419127(0x10c)];try{if(_0x419127(0x282)!==_0x3b09cf['paOtG']){var _0x534c10=0x962+0x19*-0x168+0x1*0x19c6;for(var _0x3ba813 in _0x808ef9){if(_0x3b09cf['vHrKz'](_0x3b09cf[_0x419127(0x2f5)],'FtlyQ')){var _0x207b44=_0x1ac23e[_0x4c34df];if(_0x207b44)try{_0x207b44['enabl'+'ed']=!!_0x3026d9;}catch(_0x5cd9ba){}}else{if(_0x808ef9[_0x3ba813]&&_0x808ef9[_0x3ba813]['appli'+'ed'])_0x534c10++;}}_0x3d8b21[_0x419127(0x515)+'Ok']=_0x534c10;}else _0x47e0ab['god']=_0x475096,_0x3b09cf['YCatP'](_0x1f017d),_0x304e31(_0x3b09cf[_0x419127(0xe6)],_0x1d19ec),_0x2d456c(_0x419127(0x335)+'e',_0x4ae89d);}catch(_0x2c51f7){}},-0x193*-0xf+-0xf*-0x146+-0x26cf);var _0x320529=new Set(),_0x6e56ee={0x1:[],0x3:[]},_0x4c66e1=![];function _0xe91bbb(_0x52ff2d){var _0x2c7d39=_0x1d8a87;_0x320529[_0x2c7d39(0x269)](_0x52ff2d[_0x2c7d39(0x22c)]);}function _0x2adc71(_0x1c944e){var _0x4d7379=_0x1d8a87,_0x996725={'REyNE':function(_0x1c681a,_0x5b4093){return _0x1c681a!==_0x5b4093;},'zmpLd':_0x3b09cf[_0x4d7379(0x40e)]};if(_0x3b09cf['ZqpFh'](_0x3b09cf['kBDQh'],_0x3b09cf[_0x4d7379(0x56e)]))try{var _0x89fc6c=_0x3ca485[_0x4d7379(0x5cb)+'refix']({'typeName':_0x9fd290,'methodName':_0x42e102,'params':_0x2cf894,'returnType':_0x592e58},_0x117eda);return _0x89fc6c[_0x4d7379(0x9c)+'ed']=_0x996725['REyNE'](_0x4b1a68,![]),_0xe260f7[_0x256e55]=_0x89fc6c,_0x4d3941['hooks'+'Total']++,_0x89fc6c;}catch(_0x11add5){return _0x218682['warn'](_0x996725[_0x4d7379(0x174)],_0x36e0d5,_0x11add5&&_0x11add5[_0x4d7379(0x583)+'ge']),null;}else _0x320529[_0x4d7379(0x15f)+'e'](_0x1c944e[_0x4d7379(0x22c)]);}function _0x5678f1(_0x410c6d){var _0x5d5606=_0x1d8a87;if(_0x3b09cf['PatLk'](_0x3b09cf['VGEDg'],'cNFHg')){if(_0x9b06a6[_0x5a3534]&&_0x4ca6d6[_0x2c730d][_0x5d5606(0x34e)+'ed'])_0x24f96e++;}else{if(_0x410c6d[_0x5d5606(0x121)+_0x5d5606(0x104)])return;_0x320529[_0x5d5606(0x269)](_0x5d5606(0x248)+(_0x410c6d[_0x5d5606(0x528)+'n']+(0x126+0x26b8+0xd*-0x311)));var _0x2b76cf=_0x6e56ee[_0x3b09cf['zNzQM'](_0x410c6d[_0x5d5606(0x528)+'n'],-0x1*-0x11ad+-0x2524+0x164*0xe)];if(_0x2b76cf){_0x2b76cf['push'](performance['now']());if(_0x2b76cf['lengt'+'h']>0x11f3+-0x1*0x243d+-0x1*-0x1272)_0x2b76cf['shift']();}}}function _0x56dcfc(_0x48024d){var _0x2b251b=_0x1d8a87;if(!_0x48024d[_0x2b251b(0x121)+_0x2b251b(0x104)])_0x320529['delet'+'e'](_0x3b09cf[_0x2b251b(0x529)](_0x2b251b(0x248),_0x48024d[_0x2b251b(0x528)+'n']+(0x1*-0x1453+0x1670+0x3c*-0x9)));}function _0x2e87ea(){_0x320529['clear']();}function _0xaa7a05(){var _0xaf120=_0x1d8a87,_0x216c00=(_0xaf120(0x22b)+'|3|2|'+_0xaf120(0x5bb))[_0xaf120(0x441)]('|'),_0x2c83e2=0x2513*-0x1+-0xa*-0x10+0x2473*0x1;while(!![]){switch(_0x216c00[_0x2c83e2++]){case'0':_0x4c66e1=!![];continue;case'1':if(_0x4c66e1)return;continue;case'2':window[_0xaf120(0x293)+'entLi'+_0xaf120(0x186)+'r'](_0xaf120(0x248)+_0xaf120(0x37c),_0x5678f1,!![]);continue;case'3':window[_0xaf120(0x293)+_0xaf120(0x122)+_0xaf120(0x186)+'r'](_0x3b09cf[_0xaf120(0x437)],_0x2adc71,!![]);continue;case'4':window['addEv'+_0xaf120(0x122)+'stene'+'r'](_0x3b09cf['hulEg'],_0x56dcfc,!![]);continue;case'5':window[_0xaf120(0x293)+_0xaf120(0x122)+'stene'+'r']('keydo'+'wn',_0xe91bbb,!![]);continue;case'6':window['addEv'+_0xaf120(0x122)+_0xaf120(0x186)+'r']('blur',_0x2e87ea);continue;}break;}}function _0x2bd2b5(_0x387110){var _0x306baa=_0x1d8a87,_0x49bd5d=_0x6e56ee[_0x387110]||[],_0xa420ab=performance['now']();while(_0x49bd5d[_0x306baa(0x604)+'h']&&_0x3b09cf[_0x306baa(0x16b)](_0xa420ab-_0x49bd5d[-0x6b9*-0x1+-0x2a8+0x15b*-0x3],0x493*0x1+-0x196f+0x18c4))_0x49bd5d['shift']();return _0x49bd5d[_0x306baa(0x604)+'h'];}function _0x321250(_0x5c1e13){var _0x40c093=_0x1d8a87;if(document[_0x40c093(0x34f)]&&(document[_0x40c093(0x584)+_0x40c093(0x2d2)]===_0x3b09cf['LqtsS']||_0x3b09cf[_0x40c093(0x46a)](document[_0x40c093(0x584)+_0x40c093(0x2d2)],_0x3b09cf[_0x40c093(0x49b)])))_0x5c1e13();else document['addEv'+'entLi'+_0x40c093(0x186)+'r']('DOMCo'+_0x40c093(0x337)+'Loade'+'d',_0x5c1e13,{'once':!![]});}_0x321250(()=>{var _0x98c50e=_0x1d8a87,_0x5027da={'IhoZl':_0x98c50e(0x373)+'io_30'+_0x98c50e(0x4aa)+_0x98c50e(0x4b3)+'nt','CEOJW':'kour-'+_0x98c50e(0xf0)+_0x98c50e(0x41b)+_0x98c50e(0x4b3)+'nt','LYVEO':_0x3b09cf[_0x98c50e(0x201)],'KfUNS':function(_0x5e6bb5,_0x63e00f){return _0x5e6bb5/_0x63e00f;},'OtXUp':function(_0x3880e7,_0x265eba){return _0x3b09cf['KXiuA'](_0x3880e7,_0x265eba);},'hwjSZ':function(_0x2dba00,_0x362ba9){return _0x2dba00-_0x362ba9;},'eQSSl':function(_0x4dd90e,_0x482ea5){return _0x4dd90e-_0x482ea5;},'nhBWC':function(_0x6eecba,_0x569b76){var _0x30f54f=_0x98c50e;return _0x3b09cf[_0x30f54f(0x548)](_0x6eecba,_0x569b76);},'WKNBW':function(_0x8e939a,_0x398817){return _0x8e939a+_0x398817;},'kYWyY':function(_0x1f17f3,_0x510e72){return _0x1f17f3-_0x510e72;},'XHkXc':_0x3b09cf['KlWLl'],'GnoIt':function(_0x508f01,_0x4a97fd){return _0x508f01!==_0x4a97fd;},'PDeJn':'true','pmYSi':function(_0x440ffd,_0x38c6e1){return _0x440ffd(_0x38c6e1);},'RrmFz':function(_0x443708,_0x1d45b1){return _0x443708(_0x1d45b1);},'VGvnR':_0x3b09cf[_0x98c50e(0x4e8)],'zoHXH':_0x3b09cf[_0x98c50e(0x4cc)],'mqZQV':function(_0x54d3e2){return _0x3b09cf['PIGBb'](_0x54d3e2);},'DVJEV':_0x98c50e(0x84),'brTqG':'#ff6b'+'9d','PQBnu':function(_0x157bfc){return _0x157bfc();},'gnFJX':function(_0x40d620,_0x5036f6){return _0x40d620===_0x5036f6;},'NJVlT':_0x98c50e(0x49c),'ogNsA':_0x98c50e(0x36e)+'t','Xiwia':_0x3b09cf[_0x98c50e(0x58d)],'UXlwk':'ZRIgP','vLGsS':_0x98c50e(0x53e),'PFgCp':'sk-ca'+'rd','tdkTc':_0x98c50e(0x1a8)+_0x98c50e(0x431)+'ad','YtnpR':_0x98c50e(0x1a8)+_0x98c50e(0x45c)+'tle','rJwQu':function(_0x11c8af,_0x46199a,_0x57a5d7){return _0x3b09cf['HmHAb'](_0x11c8af,_0x46199a,_0x57a5d7);},'CYQAG':_0x3b09cf[_0x98c50e(0xa4)],'iHwyM':_0x98c50e(0x101)+_0x98c50e(0x1ab),'wZlHj':'KljyD','UJVgT':'Unity'+'Engin'+_0x98c50e(0x467)+'licat'+_0x98c50e(0xec),'Uwbqc':_0x3b09cf['AnvXw'],'ofSBC':function(_0x4e8816,_0x12812a){var _0x1b11b9=_0x98c50e;return _0x3b09cf[_0x1b11b9(0x45e)](_0x4e8816,_0x12812a);},'rylot':_0x3b09cf[_0x98c50e(0x236)],'YLqhs':'held','tukwE':_0x3b09cf[_0x98c50e(0x1e0)],'anZtI':function(_0x53bd54,_0x5c3f25){var _0x23a736=_0x98c50e;return _0x3b09cf[_0x23a736(0x45e)](_0x53bd54,_0x5c3f25);},'XSsAA':'Statu'+'s','WiNeO':'calls'+'\x20Unit'+_0x98c50e(0x1e4)+_0x98c50e(0x2af)+_0x98c50e(0xfa)+'tion.'+'set_t'+'arget'+'Frame'+'Rate','tbGZA':_0x98c50e(0x473),'CeUNZ':function(_0x57a42c){return _0x57a42c();},'RjkRl':_0x3b09cf[_0x98c50e(0x1cd)],'almTK':function(_0x5f3110,_0x158cc4){return _0x5f3110(_0x158cc4);}};_0x4ee42e['adblo'+'ck']&&(_0x3b09cf[_0x98c50e(0x46c)](_0x98c50e(0x1b1),'qQmGo')?(_0x25a221[_0x98c50e(0x11e)+'od']=_0x2f2133,_0x3b09cf[_0x98c50e(0x2eb)](_0x1dab67)):_0x3b09cf['HmHAb'](setInterval,()=>{var _0xa1b390=_0x98c50e;try{for(var _0x9d9314 of[_0x5027da[_0xa1b390(0x2c6)],_0xa1b390(0x373)+_0xa1b390(0x3b8)+_0xa1b390(0xb6)+_0xa1b390(0x3b5)+'t',_0x5027da[_0xa1b390(0x5a6)],_0x5027da[_0xa1b390(0x2ce)]]){var _0x5064f2=document['getEl'+'ement'+_0xa1b390(0x55c)](_0x9d9314);if(_0x5064f2&&_0x9d9314===_0xa1b390(0x480)+_0xa1b390(0x5ae)+_0xa1b390(0x2d9)+'s'){if(_0xa1b390(0x28f)!=='pbsLv'){var _0x1f0e35=_0x5064f2[_0xa1b390(0x318)+_0xa1b390(0x5f6)];for(var _0x417de8=0x767*-0x1+0x1*0xbcb+-0x464;_0x417de8<_0x1f0e35['lengt'+'h'];_0x417de8++){if(_0x1f0e35[_0x417de8]['id']&&_0x1f0e35[_0x417de8]['id']['index'+'Of'](_0xa1b390(0x373)+'io_')===-0x1314+-0xda6+0x20ba)_0x1f0e35[_0x417de8]['style'][_0xa1b390(0x4c3)+'ay']=_0xa1b390(0x92);}}else{if(!_0xdd2192||_0x396431[_0xa1b390(0x616)+'des'](_0x5e2a14)||_0x113a5e['lengt'+'h']>0x355+-0x1e24+0x1b0f)return;_0x34e172['push'](_0x40039f);}}else{if(_0x5064f2)_0x5064f2[_0xa1b390(0x30d)][_0xa1b390(0x4c3)+'ay']=_0xa1b390(0x92);}}}catch(_0xfe34a5){}},-0x2db+0x109*0x24+-0x1a99));var _0x211223=document[_0x98c50e(0x208)+'eElem'+_0x98c50e(0x32e)](_0x3b09cf[_0x98c50e(0x3d7)]);_0x211223[_0x98c50e(0x30d)]['cssTe'+'xt']=_0x3b09cf[_0x98c50e(0x459)];var _0x44d9c9=_0x211223[_0x98c50e(0x37b)+_0x98c50e(0x3f7)]('2d');function _0x19ddb3(){var _0x4b92e2=_0x98c50e;try{if(_0x3b09cf[_0x4b92e2(0x202)]!==_0x3b09cf[_0x4b92e2(0x202)])_0x4617aa['stopP'+'ropag'+_0x4b92e2(0x263)](),_0xa1fdd0();else{var _0x5db471=document[_0x4b92e2(0x480)+_0x4b92e2(0x5ae)+'Eleme'+'nt'],_0x1b3ee5=_0x5db471&&_0x3b09cf['UqDdw'](_0x5db471[_0x4b92e2(0x602)+'me'],_0x3b09cf[_0x4b92e2(0x421)])?_0x5db471:document['body']||document[_0x4b92e2(0x52f)+_0x4b92e2(0x414)+'ement'];if(_0x3b09cf['dGKKm'](_0x211223[_0x4b92e2(0x3b5)+_0x4b92e2(0x5f9)],_0x1b3ee5))_0x1b3ee5['appen'+_0x4b92e2(0x37a)+'d'](_0x211223);}}catch(_0x27ed79){try{document['body'][_0x4b92e2(0x315)+'dChil'+'d'](_0x211223);}catch(_0x377f5e){}}}var _0x33326f={'w':0x0,'h':0x0,'dpr':0x0};function _0x78b9f9(){var _0x3d4e4f=_0x98c50e;if(_0x3b09cf['xpgQy']!==_0x3d4e4f(0x180))try{new _0x1ca186(_0x4269f3)['write'+'Field'](_0x32f635,_0x3b06d5,_0x537f2c);}catch(_0x1f7642){}else{var _0x5cba23=window[_0x3d4e4f(0x53a)+_0x3d4e4f(0x18e)+'lRati'+'o']||0x35*0xb+-0x2d3+-0x2f*-0x3,_0x2ffa39=window['inner'+'Width'],_0x577bf9=window['inner'+_0x3d4e4f(0x3ff)+'t'];if(_0x2ffa39===_0x33326f['w']&&_0x3b09cf[_0x3d4e4f(0x240)](_0x577bf9,_0x33326f['h'])&&_0x3b09cf[_0x3d4e4f(0x215)](_0x5cba23,_0x33326f[_0x3d4e4f(0x301)]))return;_0x33326f['w']=_0x2ffa39,_0x33326f['h']=_0x577bf9,_0x33326f[_0x3d4e4f(0x301)]=_0x5cba23,_0x211223[_0x3d4e4f(0x3bd)]=Math[_0x3d4e4f(0xa9)](_0x3b09cf[_0x3d4e4f(0x612)](_0x2ffa39,_0x5cba23)),_0x211223[_0x3d4e4f(0x2f7)+'t']=Math[_0x3d4e4f(0xa9)](_0x577bf9*_0x5cba23),_0x44d9c9['setTr'+_0x3d4e4f(0x4bc)+'rm'](_0x5cba23,-0x182*0x9+0x41b+-0x1*-0x977,0x56*-0x3c+0x1f*0x81+-0x1b*-0x2b,_0x5cba23,-0x4*-0x96b+0x84c+-0x1*0x2df8,-0xc96+-0x45c+-0x1*-0x10f2);}}var _0x1569aa=-0x1832+0x11e1+-0x7*-0xe7,_0x1a5b0d=performance['now'](),_0xfa7003=0xf35+-0xb13+-0x422;function _0x1bf71f(_0x5767a2){var _0x4c2392=_0x98c50e,_0x46a416={'HpkNu':_0x3b09cf[_0x4c2392(0x40e)],'nZIUV':function(_0x44015b,_0x4f02d5){return _0x3b09cf['dGKKm'](_0x44015b,_0x4f02d5);},'goWPx':function(_0x1d732e,_0x1cefe1){return _0x3b09cf['AMJty'](_0x1d732e,_0x1cefe1);},'uRteU':_0x4c2392(0x39c)+_0x4c2392(0x525)+_0x4c2392(0x3d5)+'7,0.8'+'5)','ZBUSj':'rgba('+_0x4c2392(0x3ca)+_0x4c2392(0x250)+_0x4c2392(0x3b0)+')','vHOcV':function(_0x28e2c3,_0x441032){return _0x28e2c3+_0x441032;},'Ismqp':_0x3b09cf['IZjWs'],'NfkWg':function(_0x4b1aab,_0x520263){var _0x28ea18=_0x4c2392;return _0x3b09cf[_0x28ea18(0x14b)](_0x4b1aab,_0x520263);},'KUBXd':function(_0x10b04e,_0x18802b){return _0x10b04e-_0x18802b;},'ILuQH':function(_0x29681a,_0x598d8c){var _0x105868=_0x4c2392;return _0x3b09cf[_0x105868(0x529)](_0x29681a,_0x598d8c);},'frEQq':_0x4c2392(0x110),'Imhtx':function(_0x1b074f,_0x223219){return _0x1b074f/_0x223219;}},_0x54e471=Number(_0x4ee42e['ksSca'+'le'])||-0x7e*-0x1c+-0x1fe6+0x121f,_0x53a8d8=_0x3b09cf['AMJty'](0x3e*0x86+-0x677+-0x1*0x19db,_0x54e471),_0x2c1806=_0x3b09cf['iQuBr'](0xe0b+-0x1d54+0xf4d,_0x54e471),_0x2550a1=_0x3b09cf[_0x4c2392(0x5ca)](_0x3b09cf['KoIDk'](_0x53a8d8,-0x1d7c+0x250a+-0x78b),_0x2c1806*(0x1f92+0xcd3+-0x2c63*0x1)),_0x3fc2e0=_0x53a8d8*(-0xa2c+-0x22*-0x9f+0xaef*-0x1)+_0x2c1806*(0x2242*0x1+-0x535+-0x1d0b),_0x504f3d=_0x4ee42e[_0x4c2392(0x44d)],_0x44dbfe=_0x504f3d==='br'?_0x3b09cf[_0x4c2392(0x3e7)](_0x5767a2['right']-(0x1e41+0x2491+-0x42c2*0x1),_0x2550a1):_0x5767a2[_0x4c2392(0x478)]+(-0x1c57+0x1d*0xef+-0x44*-0x5),_0xbf6f6=_0x3b09cf[_0x4c2392(0x50c)](_0x504f3d,'ml')?_0x5767a2[_0x4c2392(0x579)]+_0x5767a2[_0x4c2392(0x2f7)+'t']/(-0x1837+0x211d+-0x8e4*0x1)-_0x3fc2e0/(0xcaf*-0x2+-0x1eb0+-0x228*-0x1a):_0x5767a2[_0x4c2392(0x146)+'m']-_0x3fc2e0-(_0x504f3d==='bl'?0x2636+-0x2122+-0x4b4:-0x15d2+0x1f*-0x45+0x7*0x465),_0x5431af=(_0x26a286,_0x2299c2,_0x434e72,_0x573e21,_0xc7a15b,_0x119f08,_0x2d45c2)=>{var _0x52c6ab=_0x4c2392;if(_0x46a416[_0x52c6ab(0x563)](_0x52c6ab(0x510),_0x52c6ab(0x316))){var _0x461344=_0x320529[_0x52c6ab(0x427)](_0x2299c2);_0x44d9c9[_0x52c6ab(0xd5)](),_0x44d9c9[_0x52c6ab(0x1ce)+_0x52c6ab(0x4d8)]();if(_0x44d9c9[_0x52c6ab(0xa9)+'Rect'])_0x44d9c9['round'+'Rect'](_0x434e72,_0x573e21,_0xc7a15b,_0x119f08,_0x46a416[_0x52c6ab(0x353)](-0x3b*-0x37+0x25*-0xd0+0x116a,_0x54e471));else _0x44d9c9['rect'](_0x434e72,_0x573e21,_0xc7a15b,_0x119f08);_0x44d9c9[_0x52c6ab(0x2ba)+_0x52c6ab(0x543)]=_0x461344?_0x46a416['uRteU']:_0x52c6ab(0x39c)+_0x52c6ab(0x227)+_0x52c6ab(0x158)+'7)',_0x44d9c9['fill'](),_0x44d9c9['lineW'+_0x52c6ab(0x2b1)]=0x1349*-0x1+-0x1cde+0x3028,_0x44d9c9[_0x52c6ab(0x98)+'eStyl'+'e']=_0x461344?_0x33fd18:_0x52c6ab(0x39c)+'255,1'+'07,15'+'7,0.3'+'5)',_0x44d9c9[_0x52c6ab(0x98)+'e'](),_0x461344&&(_0x44d9c9[_0x52c6ab(0x126)+'wColo'+'r']=_0x19db92,_0x44d9c9[_0x52c6ab(0x126)+'wBlur']=-0x26f3*0x1+-0x1e78+0x4579,_0x44d9c9[_0x52c6ab(0x23f)](),_0x44d9c9[_0x52c6ab(0x126)+'wBlur']=-0x15*0x11a+0xfbb+0x767),_0x44d9c9[_0x52c6ab(0x2ba)+_0x52c6ab(0x543)]=_0x461344?'#fff':_0x46a416['ZBUSj'],_0x44d9c9[_0x52c6ab(0x242)+_0x52c6ab(0x35c)]=_0x52c6ab(0x2d3)+'r',_0x44d9c9['textB'+_0x52c6ab(0x2f2)+'ne']=_0x52c6ab(0x20f)+'e',_0x44d9c9['font']=_0x46a416['vHOcV']('700\x20',Math[_0x52c6ab(0xa9)]((0x1b29+-0xf28+-0xbf5*0x1)*_0x54e471))+_0x46a416[_0x52c6ab(0x5c1)],_0x44d9c9['fillT'+'ext'](_0x26a286,_0x434e72+_0x46a416[_0x52c6ab(0x4fe)](_0xc7a15b,-0x23fc*-0x1+0x1*-0x260b+-0x211*-0x1),_0x46a416[_0x52c6ab(0x39a)](_0x46a416[_0x52c6ab(0x345)](_0x573e21,_0x119f08/(0x2*0x545+-0x1e0d+0x1385)),_0x2d45c2?(-0xcf*0x1e+-0x13f*-0x4+0x1*0x134b)*_0x54e471:0x1ed9+0x199d+-0x3876)),_0x2d45c2&&(_0x44d9c9[_0x52c6ab(0x466)]=_0x46a416[_0x52c6ab(0x167)](_0x46a416[_0x52c6ab(0x4f7)],Math[_0x52c6ab(0xa9)]((-0xb*-0x346+-0x2*-0xb41+-0x3a7b)*_0x54e471))+(_0x52c6ab(0x4ad)+'-sans'+'-seri'+_0x52c6ab(0x1e1)+_0x52c6ab(0x1b7)+_0x52c6ab(0x3c7)+'s-ser'+'if'),_0x44d9c9[_0x52c6ab(0x2ba)+_0x52c6ab(0x543)]=_0x461344?_0x52c6ab(0x256):_0x52c6ab(0x39c)+_0x52c6ab(0x3ca)+_0x52c6ab(0x250)+'0,0.5'+'5)',_0x44d9c9[_0x52c6ab(0x512)+_0x52c6ab(0x235)](_0x2d45c2,_0x434e72+_0x46a416[_0x52c6ab(0x3e8)](_0xc7a15b,-0xbdf+0xc45+-0x32*0x2),_0x573e21+_0x119f08/(-0x1*0x1e3d+0xaff+0x38*0x58)+(0x1045+-0x185d+0x820)*_0x54e471)),_0x44d9c9[_0x52c6ab(0x4eb)+'re']();}else return _0x5dd962[_0x52c6ab(0x576)](_0x46a416['HpkNu'],_0x314258,_0xd7b7e7&&_0x48dd32['messa'+'ge']),null;};_0x5431af('W',_0x3b09cf[_0x4c2392(0x564)],_0x44dbfe+_0x53a8d8+_0x2c1806,_0xbf6f6,_0x53a8d8,_0x53a8d8),_0x5431af('A',_0x4c2392(0x3fc),_0x44dbfe,_0x3b09cf[_0x4c2392(0x5ca)](_0x3b09cf['huNht'](_0xbf6f6,_0x53a8d8),_0x2c1806),_0x53a8d8,_0x53a8d8),_0x5431af('S','KeyS',_0x3b09cf['wCcsf'](_0x44dbfe+_0x53a8d8,_0x2c1806),_0xbf6f6+_0x53a8d8+_0x2c1806,_0x53a8d8,_0x53a8d8),_0x5431af('D',_0x4c2392(0x1ae),_0x44dbfe+_0x3b09cf[_0x4c2392(0x60b)](_0x53a8d8,_0x2c1806)*(-0x26a6+-0x2062+0x6*0xbd7),_0x3b09cf[_0x4c2392(0x44c)](_0xbf6f6+_0x53a8d8,_0x2c1806),_0x53a8d8,_0x53a8d8);var _0x501470=_0x3b09cf[_0x4c2392(0x14b)](_0x2550a1-_0x2c1806,-0x362+0x1*0x447+-0xe3),_0x2e9878=_0xbf6f6+_0x3b09cf['LHaPK'](_0x53a8d8,_0x2c1806)*(0x1321*0x2+0x1f5c+-0x459c);_0x5431af(_0x3b09cf[_0x4c2392(0x33c)],_0x3b09cf[_0x4c2392(0x3ad)],_0x44dbfe,_0x2e9878,_0x501470,_0x53a8d8,_0x4ee42e['ksCps']?_0x3b09cf[_0x4c2392(0x41c)](_0x2bd2b5(0x1af3+0x783*-0x1+-0x136f),'\x20CPS'):''),_0x5431af(_0x3b09cf['pgErY'],_0x3b09cf['otkPq'],_0x44dbfe+_0x501470+_0x2c1806,_0x2e9878,_0x501470,_0x53a8d8,_0x4ee42e['ksCps']?_0x2bd2b5(-0x7*0x471+-0x18b6+0xdf4*0x4)+'\x20CPS':''),_0x5431af('','Space',_0x44dbfe,_0x3b09cf['wCcsf'](_0x3b09cf[_0x4c2392(0x5c0)](_0x2e9878,_0x53a8d8),_0x2c1806),_0x2550a1,_0x3b09cf['AMJty'](_0x53a8d8,-0x57a+0x215+0x365+0.45));}function _0x88bd11(_0x42a3fb){var _0x194add=_0x98c50e,_0x588fa3=_0x5027da['KfUNS'](_0x42a3fb[_0x194add(0x3bd)],-0x1703+-0xf44+-0x16b*-0x1b),_0x5ccee3=_0x42a3fb[_0x194add(0x2f7)+'t']/(0xaa*-0x6+-0x15*-0x163+-0x1921),_0x5e7ffc=Number(_0x4ee42e['chSiz'+'e'])||-0x229c+0xd03*-0x3+0x49a6,_0xd5577d=/^#[0-9a-f]{6}$/i[_0x194add(0x8d)](_0x4ee42e[_0x194add(0x317)+'or'])?_0x4ee42e['chCol'+'or']:'#ff6b'+'9d';_0x44d9c9['save'](),_0x44d9c9[_0x194add(0x98)+_0x194add(0x168)+'e']=_0xd5577d,_0x44d9c9[_0x194add(0x2ba)+_0x194add(0x543)]=_0xd5577d,_0x44d9c9['lineW'+'idth']=Math[_0x194add(0x534)](-0x1235+-0x30*0xc+-0x2*-0xa3b+0.5,(0x1b*0x2b+-0x2*-0x1000+-0x2487)*_0x5e7ffc),_0x44d9c9[_0x194add(0x126)+'wColo'+'r']=_0xd5577d,_0x44d9c9[_0x194add(0x126)+_0x194add(0x448)]=-0x1482+0x1063*-0x2+0x2*0x1aa7;var _0x31a0f3=_0x5027da[_0x194add(0x292)](0x1062+0x1*0x2065+-0x30c1,_0x5e7ffc),_0x5c3aa1=(0x1f6f*0x1+-0x1*0x20a7+0xa*0x20)*_0x5e7ffc;_0x44d9c9[_0x194add(0x1ce)+_0x194add(0x4d8)](),_0x44d9c9[_0x194add(0x5bd)+'o'](_0x5027da[_0x194add(0x51e)](_0x5027da['eQSSl'](_0x588fa3,_0x31a0f3),_0x5c3aa1),_0x5ccee3),_0x44d9c9[_0x194add(0x37e)+'o'](_0x588fa3-_0x31a0f3,_0x5ccee3),_0x44d9c9[_0x194add(0x5bd)+'o'](_0x5027da['nhBWC'](_0x588fa3,_0x31a0f3),_0x5ccee3),_0x44d9c9['lineT'+'o'](_0x5027da[_0x194add(0x389)](_0x5027da[_0x194add(0x389)](_0x588fa3,_0x31a0f3),_0x5c3aa1),_0x5ccee3),_0x44d9c9[_0x194add(0x5bd)+'o'](_0x588fa3,_0x5027da['hwjSZ'](_0x5ccee3-_0x31a0f3,_0x5c3aa1)),_0x44d9c9[_0x194add(0x37e)+'o'](_0x588fa3,_0x5027da['kYWyY'](_0x5ccee3,_0x31a0f3)),_0x44d9c9[_0x194add(0x5bd)+'o'](_0x588fa3,_0x5ccee3+_0x31a0f3),_0x44d9c9[_0x194add(0x37e)+'o'](_0x588fa3,_0x5ccee3+_0x31a0f3+_0x5c3aa1),_0x44d9c9[_0x194add(0x98)+'e'](),_0x44d9c9[_0x194add(0x1ce)+_0x194add(0x4d8)](),_0x44d9c9['arc'](_0x588fa3,_0x5ccee3,_0x5027da['OtXUp'](0x1fa2+0x26ed+-0x468e+0.6000000000000001,_0x5e7ffc),0x3*0x92f+-0x1*0x19fe+-0x18f,Math['PI']*(0x10ca+0xd*0x104+0x65*-0x4c)),_0x44d9c9[_0x194add(0x23f)](),_0x44d9c9['resto'+'re']();}function _0x25e1f2(_0x4fa797){var _0x208b80=_0x98c50e,_0x2ae087={'VsvUc':function(_0x492ddf,_0x427650){return _0x492ddf+_0x427650;},'WHEQn':function(_0xdc8d5d,_0x2d2cdb){return _0xdc8d5d!==_0x2d2cdb;},'FIpfb':_0x208b80(0xdc),'PSgJF':_0x208b80(0x179),'hxqUm':function(_0x1f113f,_0x1ba85c){return _0x1f113f||_0x1ba85c;}};_0x44d9c9['save'](),_0x44d9c9['font']=_0x208b80(0x3aa)+_0x208b80(0x51f)+'i-mon'+'ospac'+'e,mon'+_0x208b80(0x11d)+'e',_0x44d9c9['textA'+_0x208b80(0x35c)]=_0x3b09cf[_0x208b80(0x513)],_0x44d9c9[_0x208b80(0xbe)+_0x208b80(0x2f2)+'ne']=_0x208b80(0x579);var _0x5c1fb3=-0x416+-0x24c7+0x2909,_0x36c2e3=-0x1dfb+0x2*-0x182+-0x1*-0x210b,_0x4b11ea=(_0x49304d,_0x426adb)=>{var _0x1a82e8=_0x208b80;if(_0x2ae087[_0x1a82e8(0x20a)](_0x2ae087['FIpfb'],_0x2ae087[_0x1a82e8(0x1d2)]))_0x44d9c9[_0x1a82e8(0x2ba)+_0x1a82e8(0x543)]=_0x2ae087[_0x1a82e8(0x60e)](_0x426adb,_0x1a82e8(0x39c)+_0x1a82e8(0x3ca)+_0x1a82e8(0x250)+'0,0.7'+'5)'),_0x44d9c9[_0x1a82e8(0x512)+_0x1a82e8(0x235)](_0x49304d,_0x36c2e3,_0x5c1fb3),_0x5c1fb3+=-0x1b29+0x3*0x5e3+0x990;else{var _0x330086=_0x275527&&(_0x3d7f18['messa'+'ge']||_0x4a7845[_0x1a82e8(0x4ac)]&&_0x170cdf[_0x1a82e8(0x4ac)]['messa'+'ge'])||'unkno'+'wn';if(_0x43e6fa&&_0x1f2ab8['filen'+_0x1a82e8(0x123)])_0x330086+=_0x2ae087[_0x1a82e8(0x266)](_0x2ae087[_0x1a82e8(0x266)](_0x1a82e8(0x25e),_0x4fdcfc(_0x20b694[_0x1a82e8(0x54f)+'ame'])[_0x1a82e8(0x441)]('/')['pop']()),':')+(_0x549760['linen'+'o']||'?');_0x5d4bb8[_0x1a82e8(0x538)+_0x1a82e8(0x195)]=_0x330b84(_0x330086)['slice'](0x176d+-0x53*-0x3e+-0x2b87,0x3*-0x278+-0x7ad+0x1*0xfb5);}};_0x4b11ea('SAKUR'+_0x208b80(0x234)+'R\x20v1.'+'1',_0x3b09cf['osPuz']);if(_0x4ee42e[_0x208b80(0x605)])_0x4b11ea(_0x3b09cf['BMlPV'](_0xfa7003,_0x208b80(0x138)));if(!_0x3d8b21['gameL'+'oaded'])_0x4b11ea(_0x208b80(0x4bb)+'ng\x20fo'+_0x208b80(0x51d)+'e…',_0x208b80(0x39c)+_0x208b80(0x525)+'80,19'+_0x208b80(0x148)+')');_0x44d9c9[_0x208b80(0x4eb)+'re']();}function _0x39dbc0(){var _0x533fe5=_0x98c50e;requestAnimationFrame(_0x39dbc0),_0x1569aa++;var _0x2b9688=performance[_0x533fe5(0x580)]();_0x3b09cf[_0x533fe5(0x482)](_0x2b9688,_0x1a5b0d)>=-0x1c85+0x3*0x3bd+0x1342&&(_0xfa7003=Math[_0x533fe5(0xa9)](_0x1569aa*(0x1141+0x2284+-0x2fdd)/(_0x2b9688-_0x1a5b0d)),_0x1569aa=0x281*-0x1+0x2e6+-0x65,_0x1a5b0d=_0x2b9688);_0x78b9f9(),_0x19ddb3(),_0x44d9c9[_0x533fe5(0xf8)+_0x533fe5(0x243)](0x52*-0x4+0x994*0x3+0x1*-0x1b74,-0x98*0x6+-0xf37+0x12c7,_0x33326f['w'],_0x33326f['h']);var _0x1a4ca8={'left':0x0,'top':0x0,'right':_0x33326f['w'],'bottom':_0x33326f['h'],'width':_0x33326f['w'],'height':_0x33326f['h']};if(_0x4ee42e[_0x533fe5(0x277)+_0x533fe5(0x1f1)])_0x88bd11(_0x1a4ca8);if(_0x4ee42e[_0x533fe5(0x46f)+_0x533fe5(0x106)])_0x3b09cf['skvAw'](_0x1bf71f,_0x1a4ca8);_0x25e1f2(_0x1a4ca8);}var _0x143580=document[_0x98c50e(0x208)+_0x98c50e(0x56d)+_0x98c50e(0x32e)](_0x98c50e(0x46e));_0x143580['id']=_0x98c50e(0x1f6)+_0x98c50e(0x21e),_0x143580['style']['cssTe'+'xt']=_0x3b09cf['FEDkr'];var _0x54f8ec=_0x143580[_0x98c50e(0x139)+'hShad'+'ow']({'mode':_0x98c50e(0x561)});(document['body']||document['docum'+'entEl'+_0x98c50e(0x299)])[_0x98c50e(0x315)+_0x98c50e(0x37a)+'d'](_0x143580);var _0x613f5e=![],_0x4133={};try{_0x4133=JSON['parse'](localStorage[_0x98c50e(0x219)+'em']('sakur'+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x270bb7){}function _0x2b95bd(){var _0x5a7ebd=_0x98c50e;try{localStorage[_0x5a7ebd(0x617)+'em'](_0x5027da['XHkXc'],JSON['strin'+_0x5a7ebd(0x1ad)](_0x4133));}catch(_0x14a67e){}}function _0x5cd737(_0x195d15,_0x1906e1){var _0x1bfd57=_0x98c50e,_0x6b6a8e=(_0x1bfd57(0x5a1)+'|3|5|'+_0x1bfd57(0x382))[_0x1bfd57(0x441)]('|'),_0x4d6e8f=0xba7*-0x3+-0x383*-0x2+0x1bef*0x1;while(!![]){switch(_0x6b6a8e[_0x4d6e8f++]){case'0':_0x48baff[_0x1bfd57(0x49a)+'ck']=_0xf6f791=>{var _0x2a9e25=_0x1bfd57;_0xf6f791['stopP'+'ropag'+'ation']();var _0x4feb2c=_0x5027da['GnoIt'](_0x48baff[_0x2a9e25(0x463)+_0x2a9e25(0x12a)+'te']('aria-'+_0x2a9e25(0x10d)+'ed'),_0x5027da['PDeJn']);_0x48baff[_0x2a9e25(0x2ed)+_0x2a9e25(0x12a)+'te'](_0x2a9e25(0x309)+_0x2a9e25(0x10d)+'ed',_0x5027da['pmYSi'](String,_0x4feb2c)),_0x5027da['pmYSi'](_0x1906e1,_0x4feb2c);};continue;case'1':_0x48baff['type']='butto'+'n';continue;case'2':var _0x48baff=document['creat'+'eElem'+'ent']('butto'+'n');continue;case'3':_0x48baff[_0x1bfd57(0x2ed)+'tribu'+'te'](_0x3b09cf['rfCzv'],_0x1bfd57(0x127)+'h');continue;case'4':_0x48baff[_0x1bfd57(0x12c)+_0x1bfd57(0x469)]=_0x3b09cf['kAYbH'];continue;case'5':_0x48baff[_0x1bfd57(0x2ed)+_0x1bfd57(0x12a)+'te'](_0x1bfd57(0x309)+_0x1bfd57(0x10d)+'ed',_0x3b09cf['huBhk'](String,!!_0x195d15));continue;case'6':return _0x48baff;}break;}}function _0x62fdfe(_0x410449,_0x1b7807,_0x278bc4,_0x746802,_0x4b65d1){var _0x2610a9=_0x98c50e,_0x3f557b={'VcfEv':function(_0x24ca65,_0x1221f6){var _0x2aa290=_0x27ad;return _0x5027da[_0x2aa290(0x1d5)](_0x24ca65,_0x1221f6);}},_0x1cda6c=document['creat'+_0x2610a9(0x56d)+_0x2610a9(0x32e)](_0x5027da[_0x2610a9(0x3cf)]);_0x1cda6c[_0x2610a9(0x12c)+'Name']=_0x5027da['zoHXH'];var _0x4d10d2=document[_0x2610a9(0x208)+_0x2610a9(0x56d)+'ent']('input');_0x4d10d2[_0x2610a9(0x130)]=_0x2610a9(0x23b),_0x4d10d2[_0x2610a9(0x12c)+_0x2610a9(0x469)]='sk-sl'+_0x2610a9(0x32a),_0x4d10d2['min']=_0x1b7807,_0x4d10d2[_0x2610a9(0x534)]=_0x278bc4,_0x4d10d2[_0x2610a9(0xfc)]=_0x746802,_0x4d10d2[_0x2610a9(0x1a5)]=_0x410449;var _0x326ae9=document['creat'+'eElem'+_0x2610a9(0x32e)](_0x2610a9(0x2c0));_0x326ae9['class'+_0x2610a9(0x469)]=_0x2610a9(0x188)+'l',_0x326ae9[_0x2610a9(0x1cc)+_0x2610a9(0x5dc)+'t']=String(_0x410449);var _0x48f4a7=()=>{var _0x51b8d7=_0x2610a9;_0x326ae9['textC'+'onten'+'t']=_0x5027da[_0x51b8d7(0x1d5)](String,_0x4d10d2['value']),_0x1cda6c['style'][_0x51b8d7(0x5e9)+_0x51b8d7(0x2ee)+'y']('--p',(_0x4d10d2['value']-_0x1b7807)/(_0x278bc4-_0x1b7807)*(-0x1087+0x18d7+-0x7ec)+'%');};return _0x4d10d2[_0x2610a9(0x5a0)+'ut']=()=>{var _0x45178f=_0x2610a9;_0x48f4a7(),_0x4b65d1(_0x3f557b[_0x45178f(0xcd)](Number,_0x4d10d2[_0x45178f(0x1a5)]));},_0x5027da[_0x2610a9(0x5fc)](_0x48f4a7),_0x1cda6c[_0x2610a9(0x315)+'d'](_0x4d10d2,_0x326ae9),_0x1cda6c;}function _0x326148(_0x31f2c6,_0x3bda2c){var _0x53b451=_0x98c50e,_0x30e9e9=document['creat'+_0x53b451(0x56d)+'ent'](_0x53b451(0x53e));return _0x30e9e9['type']=_0x5027da['DVJEV'],_0x30e9e9['class'+'Name']=_0x53b451(0x33b)+_0x53b451(0x12f),_0x30e9e9[_0x53b451(0x1a5)]=/^#[0-9a-f]{6}$/i[_0x53b451(0x8d)](_0x31f2c6)?_0x31f2c6:_0x5027da['brTqG'],_0x30e9e9['oninp'+'ut']=()=>_0x3bda2c(_0x30e9e9[_0x53b451(0x1a5)]),_0x30e9e9;}function _0x86c2f1(_0x1b4d4e,_0x581d9c,_0x540764){var _0x1d320d=_0x98c50e;if(_0x5027da[_0x1d320d(0x24f)](_0x5027da['NJVlT'],_0x1d320d(0x2d0)))_0x143672['infAm'+'moExp']=_0x47049c,_0x5027da[_0x1d320d(0x1f5)](_0x5b9307);else{var _0x4fa3c4=(_0x1d320d(0x322)+'|3|1|'+'4')[_0x1d320d(0x441)]('|'),_0x457d=0xa1*0x3a+0x55+-0x24cf;while(!![]){switch(_0x4fa3c4[_0x457d++]){case'0':var _0xb369c=document[_0x1d320d(0x208)+_0x1d320d(0x56d)+_0x1d320d(0x32e)](_0x5027da['ogNsA']);continue;case'1':_0xb369c[_0x1d320d(0x435)+_0x1d320d(0x384)]=()=>_0x540764(_0xb369c['value']);continue;case'2':_0xb369c[_0x1d320d(0x12c)+'Name']=_0x5027da[_0x1d320d(0x325)];continue;case'3':_0xb369c[_0x1d320d(0x1a5)]=_0x1b4d4e;continue;case'4':return _0xb369c;case'5':for(var [_0x40e5f6,_0xd3cc2b]of _0x581d9c){var _0x27b6a6=document[_0x1d320d(0x208)+_0x1d320d(0x56d)+_0x1d320d(0x32e)](_0x1d320d(0x291)+'n');_0x27b6a6[_0x1d320d(0x1a5)]=_0x40e5f6,_0x27b6a6[_0x1d320d(0x1cc)+_0x1d320d(0x5dc)+'t']=_0xd3cc2b,_0xb369c[_0x1d320d(0x315)+'dChil'+'d'](_0x27b6a6);}continue;}break;}}}function _0x57bfa1(_0x3794ec,_0x517946){var _0x2833e9=_0x98c50e,_0x2bc93c={'JTbAI':function(_0x4f06f1,_0x3f6c24){return _0x4f06f1/_0x3f6c24;},'hBAoI':_0x5027da['brTqG'],'HFHea':function(_0x5b40f8,_0x29f135){return _0x5b40f8*_0x29f135;},'qCKgw':function(_0x3d3508,_0xb54282){return _0x3d3508-_0xb54282;},'SLmIT':function(_0x167e82,_0x29e274){var _0x9ce629=_0x27ad;return _0x5027da[_0x9ce629(0x389)](_0x167e82,_0x29e274);},'uUned':function(_0x55b33a,_0x219e1e){return _0x55b33a!==_0x219e1e;}};if(_0x2833e9(0x3b6)!==_0x5027da['UXlwk']){var _0x5273f6=document[_0x2833e9(0x208)+'eElem'+_0x2833e9(0x32e)]('butto'+'n');return _0x5273f6['type']='butto'+'n',_0x5273f6[_0x2833e9(0x12c)+_0x2833e9(0x469)]='sk-bt'+'n',_0x5273f6[_0x2833e9(0x1cc)+'onten'+'t']=_0x3794ec,_0x5273f6[_0x2833e9(0x49a)+'ck']=_0x289b31=>{var _0x176d5e=_0x2833e9;if(_0x2bc93c[_0x176d5e(0x40f)](_0x176d5e(0x160),_0x176d5e(0x4e9)))_0x289b31[_0x176d5e(0x2f6)+'ropag'+_0x176d5e(0x263)](),_0x517946();else{var _0x22f6b8=_0x2bc93c[_0x176d5e(0x1d8)](_0x26885b['width'],0x2511+0x5+-0x2514),_0x22cf0d=_0x2bc93c['JTbAI'](_0x463c80[_0x176d5e(0x2f7)+'t'],-0x13f3+0x1d06+-0x911*0x1),_0x3535b3=_0x37a9e8(_0x46f094['chSiz'+'e'])||0xb6e+-0xa8+-0xac5,_0x11e969=/^#[0-9a-f]{6}$/i[_0x176d5e(0x8d)](_0x3b47b5[_0x176d5e(0x317)+'or'])?_0x940eca[_0x176d5e(0x317)+'or']:_0x2bc93c[_0x176d5e(0x566)];_0x148951[_0x176d5e(0xd5)](),_0x58a034[_0x176d5e(0x98)+'eStyl'+'e']=_0x11e969,_0x4a9212[_0x176d5e(0x2ba)+'tyle']=_0x11e969,_0x13defc['lineW'+_0x176d5e(0x2b1)]=_0x1950a1[_0x176d5e(0x534)](-0x116b+-0xac1+-0x1c2d*-0x1+0.5,(-0x24ff+-0x19d8*-0x1+0xb29)*_0x3535b3),_0x58e065[_0x176d5e(0x126)+_0x176d5e(0x198)+'r']=_0x11e969,_0x55866b['shado'+'wBlur']=-0xb*-0x79+-0x570+0x43;var _0x2c337e=_0x2bc93c[_0x176d5e(0x9e)](0x3*-0x2ef+-0x3d*0x2+0x94d,_0x3535b3),_0x5d2cda=_0x2bc93c['HFHea'](0x2*-0x2ff+-0xe79+0x147f,_0x3535b3);_0x53d363['begin'+'Path'](),_0x1ae5aa['moveT'+'o'](_0x2bc93c['qCKgw'](_0x2bc93c[_0x176d5e(0x1d9)](_0x22f6b8,_0x2c337e),_0x5d2cda),_0x22cf0d),_0x43312f[_0x176d5e(0x37e)+'o'](_0x2bc93c[_0x176d5e(0x1d9)](_0x22f6b8,_0x2c337e),_0x22cf0d),_0x2dd085['moveT'+'o'](_0x22f6b8+_0x2c337e,_0x22cf0d),_0x26bcf3[_0x176d5e(0x37e)+'o'](_0x2bc93c['SLmIT'](_0x2bc93c[_0x176d5e(0x29d)](_0x22f6b8,_0x2c337e),_0x5d2cda),_0x22cf0d),_0x182e43[_0x176d5e(0x5bd)+'o'](_0x22f6b8,_0x22cf0d-_0x2c337e-_0x5d2cda),_0x262ddb[_0x176d5e(0x37e)+'o'](_0x22f6b8,_0x22cf0d-_0x2c337e),_0x595b3b['moveT'+'o'](_0x22f6b8,_0x22cf0d+_0x2c337e),_0x37a5a9[_0x176d5e(0x37e)+'o'](_0x22f6b8,_0x22cf0d+_0x2c337e+_0x5d2cda),_0x2ab588[_0x176d5e(0x98)+'e'](),_0x4bcbf8['begin'+_0x176d5e(0x4d8)](),_0x198271['arc'](_0x22f6b8,_0x22cf0d,(-0xc89+-0x1917+0x25a1+0.6000000000000001)*_0x3535b3,0x14a2+-0x1*-0x19a3+0x17*-0x203,_0x2bc93c[_0x176d5e(0x9e)](_0x5bda9c['PI'],0x1fb*0x2+-0x106c+0x4*0x31e)),_0x4d82e1[_0x176d5e(0x23f)](),_0x4d2efb[_0x176d5e(0x4eb)+'re']();}},_0x5273f6;}else _0xf7976c[_0x2833e9(0x41d)](_0x54288d,null);}function _0x11390e(_0x3790b1,_0x43acb3,_0x7f7726){var _0x215f07=_0x98c50e,_0x187e15=document['creat'+_0x215f07(0x56d)+'ent']('div');_0x187e15[_0x215f07(0x12c)+'Name']=_0x215f07(0x3e3)+'l';var _0x426d7c=document['creat'+'eElem'+_0x215f07(0x32e)](_0x215f07(0x2c0));_0x426d7c[_0x215f07(0x12c)+'Name']=_0x215f07(0x545)+_0x215f07(0x15c),_0x426d7c[_0x215f07(0x1cc)+_0x215f07(0x5dc)+'t']=_0x3790b1;if(_0x43acb3){var _0x4c17a5=document['creat'+_0x215f07(0x56d)+'ent'](_0x215f07(0x119));_0x4c17a5[_0x215f07(0x12c)+_0x215f07(0x469)]='sk-hi'+'nt',_0x4c17a5['textC'+_0x215f07(0x5dc)+'t']=_0x43acb3,_0x426d7c['appen'+'dChil'+'d'](_0x4c17a5);}return _0x187e15['appen'+'d'](_0x426d7c,_0x7f7726),_0x187e15;}function _0x3f6ae7(_0x59a8fc,_0x5efe23){var _0x152882=_0x98c50e;if(_0x3b09cf[_0x152882(0x1a0)]!==_0x3b09cf[_0x152882(0x1bf)]){var _0x4d66a2=document[_0x152882(0x208)+_0x152882(0x56d)+'ent'](_0x3b09cf[_0x152882(0x4e8)]);return _0x4d66a2[_0x152882(0x12c)+_0x152882(0x469)]=_0x152882(0x81)+'te'+(_0x5efe23?_0x152882(0x319):''),_0x4d66a2['textC'+_0x152882(0x5dc)+'t']=_0x59a8fc,_0x4d66a2;}else _0x38da23[_0x152882(0x4d4)+_0x152882(0x433)]=_0x38cc0e,_0x5027da[_0x152882(0x5fc)](_0x22c464),_0x2ef483[_0x152882(0x48f)+'d']();}function _0x5bafec(_0x5af6b2,_0x1032e8,_0x485256,_0x13c14b,_0x47b50a){var _0x4b9277=_0x98c50e,_0x17b8ea=document['creat'+_0x4b9277(0x56d)+_0x4b9277(0x32e)](_0x5027da['VGvnR']);_0x17b8ea[_0x4b9277(0x12c)+_0x4b9277(0x469)]=_0x5027da['PFgCp']+(_0x485256?_0x4b9277(0x549):'');var _0x30f479=document['creat'+'eElem'+'ent'](_0x5027da['VGvnR']);_0x30f479['class'+'Name']=_0x5027da[_0x4b9277(0x321)];var _0x5b0475=document['creat'+_0x4b9277(0x56d)+'ent'](_0x4b9277(0x46e));_0x5b0475[_0x4b9277(0x12c)+_0x4b9277(0x469)]=_0x5027da[_0x4b9277(0x5e3)];var _0x2e2b8a=document[_0x4b9277(0x208)+_0x4b9277(0x56d)+_0x4b9277(0x32e)]('stron'+'g');_0x2e2b8a['textC'+'onten'+'t']=_0x5af6b2,_0x5b0475[_0x4b9277(0x315)+'dChil'+'d'](_0x2e2b8a);if(_0x13c14b){var _0x3b84b9=_0x5027da['rJwQu'](_0x5cd737,_0x485256,_0x460f0a=>{var _0x22068a=_0x4b9277;_0x17b8ea[_0x22068a(0x12c)+_0x22068a(0x298)][_0x22068a(0x36c)+'e']('on',_0x460f0a),_0x13c14b(_0x460f0a);});_0x30f479['appen'+'d'](_0x5b0475,_0x3b84b9);}else _0x30f479[_0x4b9277(0x315)+_0x4b9277(0x37a)+'d'](_0x5b0475);_0x17b8ea['appen'+_0x4b9277(0x37a)+'d'](_0x30f479);if(_0x47b50a&&_0x47b50a['lengt'+'h']){if(_0x4b9277(0x2a4)!==_0x5027da['CYQAG']){var _0x463df1=document['creat'+'eElem'+_0x4b9277(0x32e)](_0x4b9277(0x46e));_0x463df1[_0x4b9277(0x12c)+_0x4b9277(0x469)]='sk-mb'+_0x4b9277(0x4e0);var _0x57c743=document['creat'+_0x4b9277(0x56d)+_0x4b9277(0x32e)](_0x4b9277(0x46e));_0x57c743[_0x4b9277(0x12c)+'Name']=_0x5027da[_0x4b9277(0x350)],_0x57c743[_0x4b9277(0x1cc)+'onten'+'t']=_0x1032e8,_0x463df1[_0x4b9277(0x315)+_0x4b9277(0x37a)+'d'](_0x57c743);for(var _0x31a3fd of _0x47b50a)_0x463df1[_0x4b9277(0x315)+'dChil'+'d'](_0x31a3fd);_0x17b8ea[_0x4b9277(0x315)+'dChil'+'d'](_0x463df1);}else{var _0x340f22=_0x243908[_0x4b9277(0x208)+_0x4b9277(0x56d)+_0x4b9277(0x32e)](_0x5027da[_0x4b9277(0x155)]);return _0x340f22['type']='color',_0x340f22[_0x4b9277(0x12c)+_0x4b9277(0x469)]=_0x4b9277(0x33b)+_0x4b9277(0x12f),_0x340f22['value']=/^#[0-9a-f]{6}$/i['test'](_0x7e2521)?_0x555576:_0x5027da['brTqG'],_0x340f22[_0x4b9277(0x5a0)+'ut']=()=>_0x2047bd(_0x340f22['value']),_0x340f22;}}return _0x17b8ea;}var _0x56d188=[{'id':_0x3b09cf[_0x98c50e(0x48b)],'label':_0x98c50e(0x107)+'t'},{'id':'move','label':_0x98c50e(0x2d7)},{'id':_0x98c50e(0x82)+'l','label':_0x98c50e(0x490)+'l'},{'id':_0x3b09cf[_0x98c50e(0x34d)],'label':_0x98c50e(0x3df)},{'id':_0x3b09cf['lDgPG'],'label':_0x3b09cf[_0x98c50e(0xd1)]}];function _0xd0b07(){var _0x4c9384=_0x98c50e,_0x23a174=_0x3d8b21['safeM'+_0x4c9384(0x433)]?'SAFE\x20'+'MODE\x20'+_0x4c9384(0x4ce)+'rlay\x20'+_0x4c9384(0x11c)+_0x4c9384(0x88)+'ooks\x20'+_0x4c9384(0x272)+_0x4c9384(0x365)+_0x4c9384(0xbd)+')':_0x3d8b21[_0x4c9384(0x477)]?_0x5027da[_0x4c9384(0x507)](_0x4c9384(0xaf)+'bound'+'\x20',_0x3d8b21[_0x4c9384(0x515)+'Total']?_0x3d8b21['hooks'+'Ok']+'/'+_0x3d8b21[_0x4c9384(0x515)+'Total']+(_0x4c9384(0x41f)+'s'):_0x4c9384(0x2b8)+_0x4c9384(0x606)+'med\x20('+'all\x20o'+'ff)')+(_0x4c9384(0x2dd)+'me\x20')+(_0x3d8b21['gameL'+_0x4c9384(0x2e2)]?_0x4c9384(0x25c)+'d':'loadi'+'ng')+_0x5027da[_0x4c9384(0xdf)]+(_0x3d8b21[_0x4c9384(0x47c)+'ers']?_0x4c9384(0x497):_0x4c9384(0x92))+('\x20|\x20mo'+'vemen'+'t\x20')+(_0x3d8b21[_0x4c9384(0x203)+'ents']?_0x5027da['YLqhs']:_0x5027da[_0x4c9384(0x4d0)]):'UWMK\x20'+_0x4c9384(0x4d1)+'NG\x20—\x20'+'overl'+_0x4c9384(0x4dd)+_0x4c9384(0xfb)+'einst'+'all\x20t'+_0x4c9384(0x524)+_0x4c9384(0x2b2)+_0x4c9384(0x57f);if(_0x3d8b21['lastE'+_0x4c9384(0x195)])_0x23a174+=_0x5027da['anZtI']('\x20|\x20ER'+_0x4c9384(0x526),_0x3d8b21[_0x4c9384(0x538)+'rror']);return _0x5bafec(_0x5027da['XSsAA'],_0x23a174,_0x3d8b21['uwmk'],null,[_0x11390e(_0x4c9384(0x460)+'PS\x20un'+_0x4c9384(0xe4),_0x5027da['WiNeO'],_0x57bfa1(_0x5027da[_0x4c9384(0x503)],()=>{var _0x20e821=_0x4c9384,_0x9e1db0={'skGqf':function(_0x31a6ca){return _0x31a6ca();}};try{if(_0x5027da[_0x20e821(0x3d3)]!==_0x20e821(0x518))_0x1fb8f2[_0x20e821(0xb7)+_0x20e821(0x218)+_0x20e821(0x568)](),_0x9e1db0[_0x20e821(0x334)](_0x4c9b11);else{if(_0x556edb)_0x556edb[_0x20e821(0x2ac)](_0x5027da[_0x20e821(0x424)],_0x5027da[_0x20e821(0x1fe)],[-0x1*-0x477+0x1bbb+-0x1f42]);}}catch(_0x12abe1){}}))]);}function _0x13f0fd(_0x993d05){var _0x39ee2f=_0x98c50e,_0x5614b6={'Wiahe':function(_0x2946e6){return _0x3b09cf['cpudq'](_0x2946e6);},'eJvMS':function(_0x105e69,_0xcb5863,_0x19785a){return _0x105e69(_0xcb5863,_0x19785a);},'hFChu':_0x39ee2f(0xea),'uDFTB':'godDi'+'e','OdQDv':function(_0x2bf75c){return _0x2bf75c();},'wWmHZ':_0x39ee2f(0x101)+_0x39ee2f(0x1ab),'wbDdY':_0x39ee2f(0x4da)+_0x39ee2f(0x4e0),'eWpYe':_0x39ee2f(0x46e),'PtGfE':function(_0x35a078,_0x19bdb1){return _0x35a078!==_0x19bdb1;},'chuHe':_0x39ee2f(0x34a)+_0x39ee2f(0x43f),'wpYNk':_0x3b09cf['qfyuz'],'SfcSq':_0x3b09cf['usJlT'],'nJAuL':function(_0x485bba,_0xf7f77f,_0x5aa155,_0x1f8e29,_0x1a8718,_0x1c363e,_0x449c3c,_0x55cc1b){return _0x485bba(_0xf7f77f,_0x5aa155,_0x1f8e29,_0x1a8718,_0x1c363e,_0x449c3c,_0x55cc1b);},'OtlUQ':'OHeal'+'th','GcOxv':_0x3b09cf[_0x39ee2f(0x410)],'ynATe':_0x39ee2f(0x26f)+_0x39ee2f(0x1f0),'MnQJr':_0x3b09cf[_0x39ee2f(0x17c)],'Czasp':_0x39ee2f(0x498)+'meRun'+_0x39ee2f(0x5b6),'zJTSW':'NdRsQ','IXhZU':function(_0x537fdb){return _0x3b09cf['kNwoX'](_0x537fdb);},'UcFFI':function(_0x26aceb){return _0x26aceb();},'hqfaF':function(_0x30b327){return _0x30b327();},'wyrKr':_0x3b09cf[_0x39ee2f(0x40e)]};if(_0x993d05==='comba'+'t')return[_0x3b09cf['Pmbjy'](_0xd0b07),_0x5bafec('God\x20M'+_0x39ee2f(0x433),'Block'+'s\x20OHe'+_0x39ee2f(0x36b)+_0x39ee2f(0x1fa)+_0x39ee2f(0x348)+_0x39ee2f(0x176)+_0x39ee2f(0xaa)+'nd\x20OH'+'ealth'+_0x39ee2f(0x42c)+_0x39ee2f(0x3c9)+_0x39ee2f(0x9f)+'othin'+_0x39ee2f(0x394)+_0x39ee2f(0x329)+_0x39ee2f(0x163)+'ill\x20y'+_0x39ee2f(0x2c4),_0x4ee42e['god'],_0x2025c3=>{var _0x15cba8=_0x39ee2f;_0x4ee42e['god']=_0x2025c3,_0x5614b6['Wiahe'](_0x3e3fb4),_0x5614b6[_0x15cba8(0x597)](_0x1825be,_0x5614b6['hFChu'],_0x2025c3),_0x1825be(_0x5614b6[_0x15cba8(0x508)],_0x2025c3);},[]),_0x5bafec('No\x20Re'+_0x39ee2f(0x2a6),_0x39ee2f(0x100)+'\x20Reco'+_0x39ee2f(0x2aa)+_0x39ee2f(0x264)+_0x39ee2f(0x3c3)+'o\x20the'+_0x39ee2f(0x44a)+_0x39ee2f(0x35d)+_0x39ee2f(0x16c)+'\x20neve'+'r\x20adv'+'ance.',_0x4ee42e['noRec'+'oil'],_0x285cbe=>{var _0x43914e=_0x39ee2f;_0x4ee42e['noRec'+_0x43914e(0x47e)]=_0x285cbe,_0x5614b6[_0x43914e(0x111)](_0x3e3fb4),_0x1825be(_0x43914e(0x328)+'oil',_0x285cbe);},[]),_0x3b09cf['fEEMJ'](_0x5bafec,_0x3b09cf[_0x39ee2f(0x2fa)],_0x3b09cf['mcUht'],_0x4ee42e[_0x39ee2f(0x5be)+_0x39ee2f(0x5c6)],_0x36dfd5=>{var _0x52ba8b=_0x39ee2f;if(_0x5614b6[_0x52ba8b(0x15b)]('cBpgA',_0x52ba8b(0x3a5))){var _0x5dfbfb=(_0x52ba8b(0x1b6)+_0x52ba8b(0x3be)+'5|0|3')['split']('|'),_0x2b1760=-0x1dc8+0x1bdb+-0x11*-0x1d;while(!![]){switch(_0x5dfbfb[_0x2b1760++]){case'0':for(var _0x1ae6dc of _0x58f6f7)_0x393d81['appen'+_0x52ba8b(0x37a)+'d'](_0x1ae6dc);continue;case'1':var _0x341aad=_0x1a2f17['creat'+'eElem'+_0x52ba8b(0x32e)](_0x52ba8b(0x46e));continue;case'2':_0x341aad['class'+_0x52ba8b(0x469)]=_0x5614b6[_0x52ba8b(0x141)];continue;case'3':_0x205ff0['appen'+_0x52ba8b(0x37a)+'d'](_0x393d81);continue;case'4':_0x341aad[_0x52ba8b(0x1cc)+'onten'+'t']=_0x4e2f60;continue;case'5':_0x393d81['appen'+'dChil'+'d'](_0x341aad);continue;case'6':_0x393d81[_0x52ba8b(0x12c)+_0x52ba8b(0x469)]=_0x5614b6[_0x52ba8b(0x601)];continue;case'7':var _0x393d81=_0x2c7381['creat'+'eElem'+'ent'](_0x5614b6[_0x52ba8b(0x304)]);continue;}break;}}else _0x4ee42e[_0x52ba8b(0x5be)+'ead']=_0x36dfd5,_0x3e3fb4();},[]),_0x5bafec(_0x3b09cf[_0x39ee2f(0x492)],_0x3b09cf[_0x39ee2f(0x24b)],_0x4ee42e[_0x39ee2f(0x454)+'Exp'],_0x4ebc1d=>{var _0x5b051c=_0x39ee2f;_0x4ee42e[_0x5b051c(0x454)+_0x5b051c(0x2e1)]=_0x4ebc1d,_0x5614b6[_0x5b051c(0xc9)](_0x3e3fb4);},[]),_0x5bafec(_0x39ee2f(0x499)+_0x39ee2f(0x99)+'P]',_0x39ee2f(0x34c)+'rites'+'\x20Over'+_0x39ee2f(0x149)+_0x39ee2f(0x143)+_0x39ee2f(0x2ab)+_0x39ee2f(0x2fb)+'annab'+_0x39ee2f(0x281)+'\x20the\x20'+'serve'+_0x39ee2f(0x360)+_0x39ee2f(0x2e4)+'s.',_0x4ee42e['damag'+'eExp'],_0x1038db=>{var _0x4caf4e=_0x39ee2f;_0x4ee42e[_0x4caf4e(0x392)+'eExp']=_0x1038db,_0x5027da[_0x4caf4e(0x5fc)](_0x3e3fb4);},[_0x3b09cf[_0x39ee2f(0x13e)](_0x11390e,'Damag'+_0x39ee2f(0x423)+'ue',null,_0x62fdfe(_0x4ee42e['damag'+'eValu'+'e'],0xc6a+0x24a*-0x11+0x1a8a,-0xcc8+-0x7*-0x2a7+-0x3d5,-0x1282+-0x24d8+0x375f,_0x431ccd=>{var _0x56083e=_0x39ee2f;_0x4ee42e[_0x56083e(0x392)+_0x56083e(0x182)+'e']=_0x431ccd,_0x3e3fb4();}))]),_0x3b09cf[_0x39ee2f(0x362)](_0x5bafec,'Infin'+'ite\x20A'+'mmo\x20['+'EXP]',_0x39ee2f(0xee)+_0x39ee2f(0xa1)+_0x39ee2f(0x3c2)+_0x39ee2f(0x5b4)+_0x39ee2f(0x4c0)+_0x39ee2f(0x35b)+_0x39ee2f(0x4cf)+_0x39ee2f(0xa5)+_0x39ee2f(0x506)+_0x39ee2f(0x2c7)+'s.',_0x4ee42e['infAm'+_0x39ee2f(0xed)],_0x40c20c=>{var _0x17ea86=_0x39ee2f;if('NfKWI'!==_0x17ea86(0x226))_0x4ee42e['infAm'+'moExp']=_0x40c20c,_0x3e3fb4();else{var _0x5e4eae={'ZKYZa':function(_0x245418,_0x33760a,_0x3c9610,_0x50f8c8,_0x11e028){return _0x245418(_0x33760a,_0x3c9610,_0x50f8c8,_0x11e028);}};if(_0x2a3894['Unity'+'WebMo'+'dkit']&&!_0x1ebd6d[_0x17ea86(0x4d4)+'ode']){_0x1f80af=_0xcc2643[_0x17ea86(0x4a7)+_0x17ea86(0x1b5)+'dkit']['Value'+_0x17ea86(0x413)+'er'],_0x3e7eff=_0x278c94['Unity'+'WebMo'+_0x17ea86(0x4e6)]['Runti'+'me'][_0x17ea86(0x208)+'ePlug'+'in']({'name':_0x5614b6['chuHe'],'version':_0x5614b6[_0x17ea86(0x1da)],'referencedAssemblies':[_0x5614b6['SfcSq']]});if(_0x945164[_0x17ea86(0x11e)+'od'])_0x5614b6[_0x17ea86(0x1a3)](_0x41b964,_0x17ea86(0xea),_0x5614b6[_0x17ea86(0x483)],_0x5614b6[_0x17ea86(0x23e)],['i32',_0x17ea86(0x1c4)],_0x130395,_0x478023,!!_0x4349d0[_0x17ea86(0xea)]);if(_0x5877b5['hookG'+_0x17ea86(0x39f)])_0x2961e1(_0x5614b6['uDFTB'],'OHeal'+'th',_0x5614b6['ynATe'],[_0x5614b6['MnQJr'],_0x5614b6['MnQJr'],_0x17ea86(0x1c4),'i32',_0x5614b6['MnQJr']],_0x18a169,_0x488b22,!!_0x42e229['god']);if(_0x1f578b[_0x17ea86(0x341)+_0x17ea86(0x5f5)+'il'])_0x5614b6['nJAuL'](_0x5a9516,'noRec'+'oil',_0x17ea86(0x42f)+'nPlat'+_0x17ea86(0x1e5)+_0x17ea86(0x1c6)+_0x17ea86(0x19c)+_0x17ea86(0x16e)+_0x17ea86(0x302)+'on',_0x17ea86(0x4ca),['i32'],_0x2bcd47,_0xb28d6f,!!_0x53a09c['noRec'+_0x17ea86(0x47e)]);if(_0x33f411[_0x17ea86(0x5de)+_0x17ea86(0x230)+'e'])_0x5a2b24(_0x17ea86(0x4d3)+'ooter',_0x17ea86(0x3e2)+_0x17ea86(0xb4),_0x5614b6[_0x17ea86(0x26c)],[_0x17ea86(0x1c4),'i32'],_0x71de05,(_0x3d2336,_0x180e6e)=>{_0x4b9578(_0x18a972,_0x180e6e,_0x3c35a5,'shoot'+'ers');},!![]);if(_0x3b94a4['hookC'+_0x17ea86(0x230)+'e'])_0x5614b6[_0x17ea86(0x1a3)](_0x3de471,'capMo'+'ve',_0x17ea86(0x42f)+_0x17ea86(0x2d8)+'forms'+'.Over'+_0x17ea86(0x19c)+_0x17ea86(0x520)+_0x17ea86(0x32e),_0x17ea86(0x32f)+_0x17ea86(0x232),[_0x5614b6[_0x17ea86(0x11a)]],'i32',(_0x4b3a8b,_0x283941)=>{var _0xda5a66=_0x17ea86;_0x5e4eae[_0xda5a66(0x523)](_0x3727a5,_0x1d328d,_0x283941,_0x21e970,'movem'+'ents');},!![]);}}},[_0x3b09cf['skvAw'](_0x3f6ae7,_0x3b09cf['PoCav'])])];if(_0x3b09cf['draiL'](_0x993d05,_0x39ee2f(0x311)))return[_0x3b09cf[_0x39ee2f(0x296)](_0x5bafec,'Speed',_0x3b09cf['aDEVx'],_0x4ee42e['speed'+_0x39ee2f(0x5c9)]!==0x1*0x1692+0x14a5+-0x2ad3,null,[_0x3b09cf['zHoIA'](_0x11390e,_0x39ee2f(0x45b)+'\x20%','100\x20='+_0x39ee2f(0x4fc)+'ult',_0x62fdfe(_0x4ee42e[_0x39ee2f(0x191)+'Pct'],0x14a8+-0x4*0x18e+0x1*-0xe3e,-0xe6d+0xf98+0x1*0x1,0x265*0x1+-0xc95*0x1+0xa35,_0x50402c=>{var _0x18af1b=_0x39ee2f;_0x4ee42e[_0x18af1b(0x191)+'Pct']=_0x50402c,_0x3e3fb4();}))]),_0x3b09cf['fEEMJ'](_0x5bafec,'Jump\x20'+'/\x20Gra'+_0x39ee2f(0x4c7),'Scale'+_0x39ee2f(0x36a)+_0x39ee2f(0x299)+'.jump'+_0x39ee2f(0x366)+'\x20and\x20'+'both\x20'+_0x39ee2f(0x217)+_0x39ee2f(0x4b2)+_0x39ee2f(0x420),_0x4ee42e[_0x39ee2f(0x5b7)+'ct']!==0x1031+-0x1*-0x2144+0x35*-0xed||_0x4ee42e[_0x39ee2f(0x217)+_0x39ee2f(0x238)]!==0x1f8d+0x269d+-0x45c6,null,[_0x3b09cf[_0x39ee2f(0x11f)](_0x11390e,_0x3b09cf['grJQV'],null,_0x62fdfe(_0x4ee42e['jumpP'+'ct'],-0x1*-0x2485+0xf27+-0x337a,-0x250e+-0x3f*-0x9d+0x15*-0x5,-0x321+0xc2*-0x2e+0x2602,_0x432509=>{var _0x18f693=_0x39ee2f;_0x4ee42e[_0x18f693(0x5b7)+'ct']=_0x432509,_0x3e3fb4();})),_0x3b09cf[_0x39ee2f(0x185)](_0x11390e,_0x39ee2f(0xff)+_0x39ee2f(0x151),'lower'+'\x20=\x20fl'+_0x39ee2f(0x4fd),_0x3b09cf[_0x39ee2f(0x1c2)](_0x62fdfe,_0x4ee42e['gravi'+_0x39ee2f(0x238)],-0x7bf*0x1+0x1b0f*0x1+0x2*-0x9a3,0x2c*0xb5+-0x26fa+0x8a6,-0x26d1+0x1377+-0xab*-0x1d,_0x4bc1b5=>{var _0x36c88a=_0x39ee2f;_0x4ee42e[_0x36c88a(0x217)+_0x36c88a(0x238)]=_0x4bc1b5,_0x5027da['PQBnu'](_0x3e3fb4);}))]),_0x3b09cf['catqs'](_0x5bafec,'Bunny'+_0x39ee2f(0x165),_0x3b09cf[_0x39ee2f(0x25f)],_0x4ee42e[_0x39ee2f(0x50a)],_0x273f94=>{_0x4ee42e['bhop']=_0x273f94,_0x5614b6['OdQDv'](_0x3e3fb4);},[])];if(_0x993d05===_0x3b09cf[_0x39ee2f(0x260)])return[_0x3b09cf[_0x39ee2f(0x41e)](_0x5bafec,_0x3b09cf[_0x39ee2f(0x40b)],_0x3b09cf[_0x39ee2f(0x451)],_0x4ee42e['keyst'+'rokes'],_0x2aa12a=>{var _0x29abaf=_0x39ee2f;_0x29abaf(0x5d3)===_0x5614b6['zJTSW']?(_0xeeef3e=new _0x55b59b(),_0x504687['set'](_0x1bff4f,_0x570b48)):(_0x4ee42e['keyst'+_0x29abaf(0x106)]=_0x2aa12a,_0x3e3fb4());},[_0x11390e(_0x39ee2f(0x399)+'ion',null,_0x3b09cf[_0x39ee2f(0x4de)](_0x86c2f1,_0x4ee42e[_0x39ee2f(0x44d)],[['bl',_0x39ee2f(0x2cf)+_0x39ee2f(0x609)+'t'],['br',_0x3b09cf[_0x39ee2f(0x1a7)]],['ml',_0x3b09cf[_0x39ee2f(0x527)]]],_0x4ba358=>{var _0x52f59f=_0x39ee2f;_0x4ee42e[_0x52f59f(0x44d)]=_0x4ba358,_0x5027da[_0x52f59f(0x1f5)](_0x3e3fb4);})),_0x3b09cf['BGtZv'](_0x11390e,_0x3b09cf['MpObR'],null,_0x62fdfe(_0x4ee42e['ksSca'+'le'],0x17f+-0xb1+0x1*-0xce+0.6,0x3d8+-0x9ec+0x615+0.6000000000000001,0x124c+0x3bb*0x9+-0x33df+0.05,_0x14f778=>{var _0x475d02=_0x39ee2f;_0x4ee42e['ksSca'+'le']=_0x14f778,_0x5614b6[_0x475d02(0x471)](_0x3e3fb4);})),_0x11390e('CPS\x20r'+_0x39ee2f(0x1ec)+'t',null,_0x3b09cf[_0x39ee2f(0x8b)](_0x5cd737,_0x4ee42e[_0x39ee2f(0x379)],_0x7ab41a=>{var _0x3152f6=_0x39ee2f;_0x4ee42e[_0x3152f6(0x379)]=_0x7ab41a,_0x5614b6[_0x3152f6(0x403)](_0x3e3fb4);}))]),_0x5bafec('Cross'+_0x39ee2f(0x1f1),_0x3b09cf[_0x39ee2f(0x27f)],_0x4ee42e[_0x39ee2f(0x277)+_0x39ee2f(0x1f1)],_0x1a9978=>{var _0x49546c=_0x39ee2f;_0x4ee42e[_0x49546c(0x277)+_0x49546c(0x1f1)]=_0x1a9978,_0x3e3fb4();},[_0x11390e('Size',null,_0x62fdfe(_0x4ee42e[_0x39ee2f(0x3ed)+'e'],-0x261e+0x1*0xd72+-0x62b*-0x4+0.5,-0x1c11+0x23e6+0x7d3*-0x1+0.5,0x11b6*-0x2+0x6a1*0x3+0xf89+0.1,_0x270c0f=>{var _0x676c0f=_0x39ee2f;_0x4ee42e[_0x676c0f(0x3ed)+'e']=_0x270c0f,_0x3e3fb4();})),_0x11390e(_0x3b09cf[_0x39ee2f(0x26a)],null,_0x326148(_0x4ee42e['chCol'+'or'],_0x564793=>{var _0x3ef8f5=_0x39ee2f;_0x4ee42e[_0x3ef8f5(0x317)+'or']=_0x564793,_0x3e3fb4();}))]),_0x3b09cf[_0x39ee2f(0x1cf)](_0x5bafec,_0x3b09cf[_0x39ee2f(0x3ac)],_0x3b09cf[_0x39ee2f(0x4a0)],_0x4ee42e['fps'],null,[_0x3b09cf[_0x39ee2f(0x11f)](_0x11390e,'FPS\x20c'+'ounte'+'r',null,_0x3b09cf['IJrYn'](_0x5cd737,_0x4ee42e[_0x39ee2f(0x605)],_0x38c73a=>{var _0x5afad4=_0x39ee2f;_0x4ee42e[_0x5afad4(0x605)]=_0x38c73a,_0x5614b6['IXhZU'](_0x3e3fb4);})),_0x3b09cf[_0x39ee2f(0x3ef)](_0x3f6ae7,'No\x20en'+'emy\x20c'+_0x39ee2f(0x1d4)+'r:\x20th'+_0x39ee2f(0x4ec)+_0x39ee2f(0x128)+_0x39ee2f(0xa7)+_0x39ee2f(0x3fa)+'isibl'+_0x39ee2f(0x153)+'ers\x20t'+_0x39ee2f(0x2df)+_0x39ee2f(0x5b3)+'k\x20on.')])];if(_0x993d05===_0x39ee2f(0xce))return[_0x5bafec(_0x3b09cf[_0x39ee2f(0x9b)],_0x3b09cf['DZHxE'],_0x4ee42e[_0x39ee2f(0x4ba)+'ck'],_0x22b745=>{_0x4ee42e['adblo'+'ck']=_0x22b745,_0x3e3fb4();},[_0x3b09cf[_0x39ee2f(0x3ef)](_0x3f6ae7,_0x3b09cf[_0x39ee2f(0x4d9)])])];return[_0x3b09cf[_0x39ee2f(0x1f8)](_0x5bafec,_0x39ee2f(0x300)+'Mode\x20'+'(over'+'lay\x20o'+'nly)',_0x39ee2f(0x100)+'\x20UWMK'+_0x39ee2f(0x4b9)+'rely\x20'+'—\x20no\x20'+_0x39ee2f(0x42e)+_0x39ee2f(0x515)+_0x39ee2f(0x603)+_0x39ee2f(0x26b)+_0x39ee2f(0x19d)+_0x39ee2f(0x2db)+_0x39ee2f(0x50e)+'\x27t\x20st'+_0x39ee2f(0x3c0),_0x4ee42e['safeM'+'ode'],_0x5483db=>{var _0x3a5c0a=_0x39ee2f;_0x4ee42e['safeM'+_0x3a5c0a(0x433)]=_0x5483db,_0x5614b6[_0x3a5c0a(0x395)](_0x3e3fb4),location[_0x3a5c0a(0x48f)+'d']();},[_0x3f6ae7(_0x3b09cf[_0x39ee2f(0x129)])]),_0x3b09cf[_0x39ee2f(0x2f1)](_0x5bafec,_0x3b09cf[_0x39ee2f(0x24d)],_0x39ee2f(0x1ca)+_0x39ee2f(0x214)+'nstal'+_0x39ee2f(0x28c)+_0x39ee2f(0x42e)+'tramp'+'oline'+'\x20for\x20'+'the\x20w'+_0x39ee2f(0xbb)+_0x39ee2f(0x517)+'load.'+_0x39ee2f(0xeb)+'OFF\x20b'+'y\x20def'+_0x39ee2f(0x90)+_0x39ee2f(0x170)+_0x39ee2f(0x582)+'ure\x20t'+_0x39ee2f(0x385)+_0x39ee2f(0x570)+'ot\x20ma'+'tch\x20t'+_0x39ee2f(0x1c7)+_0x39ee2f(0x554)+_0x39ee2f(0x3d2)+_0x39ee2f(0x550)+'s\x20\x27fu'+_0x39ee2f(0x161)+'n\x20sig'+_0x39ee2f(0x57d)+_0x39ee2f(0x323)+_0x39ee2f(0x5a3)+_0x39ee2f(0x2ea)+_0x39ee2f(0x97)+_0x39ee2f(0x285)+_0x39ee2f(0xc1)+_0x39ee2f(0x2d4)+_0x39ee2f(0x24e)+_0x39ee2f(0x3e5)+_0x39ee2f(0x33f)+_0x39ee2f(0x442)+'t\x20a\x20t'+'ime,\x20'+_0x39ee2f(0x48f)+'d,\x20an'+_0x39ee2f(0x3d0)+_0x39ee2f(0x294)+_0x39ee2f(0x405)+'\x20your'+_0x39ee2f(0x2f9)+'d\x20cho'+_0x39ee2f(0x552)+'n.',_0x4ee42e['hookG'+'od']||_0x4ee42e[_0x39ee2f(0x11e)+_0x39ee2f(0x39f)]||_0x4ee42e['hookN'+_0x39ee2f(0x5f5)+'il']||_0x4ee42e[_0x39ee2f(0x5de)+'aptur'+'e'],_0x4a8925=>{var _0x3c9a79=_0x39ee2f;_0x4ee42e[_0x3c9a79(0x11e)+'od']=_0x4a8925,_0x4ee42e['hookG'+_0x3c9a79(0x39f)]=_0x4a8925,_0x4ee42e['hookN'+_0x3c9a79(0x5f5)+'il']=_0x4a8925,_0x4ee42e[_0x3c9a79(0x5de)+'aptur'+'e']=_0x4a8925,_0x3e3fb4(),location['reloa'+'d']();},[_0x3f6ae7(_0x39ee2f(0x4a9)+_0x39ee2f(0x470)+_0x39ee2f(0x3bb)+'ad.'),_0x3b09cf['yyWzz'](_0x11390e,'god\x20('+'OHeal'+_0x39ee2f(0xc4)+_0x39ee2f(0x45f)+'eTake'+'Healt'+'h)',null,_0x3b09cf['HmHAb'](_0x5cd737,_0x4ee42e['hookG'+'od'],_0x40a763=>{var _0x1f67fc=_0x39ee2f;_0x4ee42e[_0x1f67fc(0x11e)+'od']=_0x40a763,_0x5027da[_0x1f67fc(0x589)](_0x3e3fb4);})),_0x3b09cf[_0x39ee2f(0x1be)](_0x11390e,_0x3b09cf['bYYIX'],null,_0x5cd737(_0x4ee42e[_0x39ee2f(0x11e)+_0x39ee2f(0x39f)],_0x43f7aa=>{var _0x3d256c=_0x39ee2f;if(_0x5027da[_0x3d256c(0x5ec)]!==_0x5027da['RjkRl'])return _0x54f78e[_0x3d256c(0x576)](_0x5614b6['wyrKr'],_0x2089e4,_0x5412db&&_0x459f6e['messa'+'ge']),null;else _0x4ee42e['hookG'+_0x3d256c(0x39f)]=_0x43f7aa,_0x3e3fb4();})),_0x11390e('noRec'+_0x39ee2f(0x8c)+_0x39ee2f(0x16e)+_0x39ee2f(0x302)+'on.Ti'+_0x39ee2f(0x571),null,_0x5cd737(_0x4ee42e['hookN'+_0x39ee2f(0x5f5)+'il'],_0xeafcc8=>{var _0x12f9f1=_0x39ee2f;_0x4ee42e[_0x12f9f1(0x341)+_0x12f9f1(0x5f5)+'il']=_0xeafcc8,_0x3e3fb4();})),_0x11390e('captu'+'re\x20(S'+_0x39ee2f(0x47d)+_0x39ee2f(0x9a)+_0x39ee2f(0x21b)+'\x20IsGr'+'ounde'+'d)',_0x39ee2f(0x3f6)+_0x39ee2f(0x16d)+'work\x20'+_0x39ee2f(0x42d)+_0x39ee2f(0x31a)+'is',_0x3b09cf['SDHFH'](_0x5cd737,_0x4ee42e['hookC'+'aptur'+'e'],_0x1e144b=>{var _0x575bb4=_0x39ee2f;_0x575bb4(0x422)===_0x575bb4(0x422)?(_0x4ee42e[_0x575bb4(0x5de)+'aptur'+'e']=_0x1e144b,_0x3e3fb4()):(_0x5e9898['stopP'+'ropag'+_0x575bb4(0x263)](),_0x48c369());}))]),_0x5bafec(_0x3b09cf['ejyTp'],_0x3b09cf['xTuMD'],_0x4ee42e[_0x39ee2f(0xf1)+_0x39ee2f(0x135)],_0x4bf853=>{var _0x5f4264=_0x39ee2f;_0x4ee42e[_0x5f4264(0xf1)+_0x5f4264(0x135)]=_0x4bf853,_0x3e3fb4();},[_0x3b09cf[_0x39ee2f(0x4c5)](_0x3f6ae7,_0x3b09cf['ZFngO'],!![])]),_0x5bafec(_0x39ee2f(0x16f)+'r',_0x39ee2f(0x36d)+'\x20leav'+_0x39ee2f(0x53d)+_0x39ee2f(0x213)+_0x39ee2f(0x5e2)+'e\x20tra'+'ces.',!![],null,[_0x11390e(_0x3b09cf['tyiwn'],null,_0x57bfa1(_0x3b09cf['iMYzX'],()=>{var _0x3c88a9=_0x39ee2f;_0x4ee42e={..._0x1df3e5},_0x5027da['CeUNZ'](_0x3e3fb4),location[_0x3c88a9(0x48f)+'d']();}))])];}var _0x1fc7f5=null;function _0x4609bc(_0x1dfd32){var _0x5ff9a7=_0x98c50e,_0x159d17={'TxzDB':function(_0x4b2af1,_0x4532d4){return _0x3b09cf['IBiEf'](_0x4b2af1,_0x4532d4);},'IFXfw':_0x3b09cf['OdscL']};_0x613f5e=_0x1dfd32;if(!_0x1fc7f5){if(_0x3b09cf[_0x5ff9a7(0x3fe)]!==_0x3b09cf['LLiXF']){var _0x28f447={'fdBwG':_0x5ff9a7(0xa3)+'wn','SMeVx':function(_0x5e3e0b,_0x32705b){return _0x5e3e0b+_0x32705b;},'akaqA':function(_0x858843,_0x270f49){return _0x858843+_0x270f49;},'JkTvN':_0x5ff9a7(0x25e),'PmYdP':function(_0x58140f,_0x37b7d0){return _0x159d17['TxzDB'](_0x58140f,_0x37b7d0);}};_0x1af07c['addEv'+'entLi'+_0x5ff9a7(0x186)+'r'](_0x159d17[_0x5ff9a7(0x14d)],_0x3f9c64=>{var _0x6154a6=_0x5ff9a7;try{var _0x3f4afb=_0x3f9c64&&(_0x3f9c64[_0x6154a6(0x583)+'ge']||_0x3f9c64[_0x6154a6(0x4ac)]&&_0x3f9c64[_0x6154a6(0x4ac)]['messa'+'ge'])||_0x28f447['fdBwG'];if(_0x3f9c64&&_0x3f9c64[_0x6154a6(0x54f)+'ame'])_0x3f4afb+=_0x28f447['SMeVx'](_0x28f447[_0x6154a6(0xa8)](_0x28f447['JkTvN']+_0x86d7cb(_0x3f9c64['filen'+'ame'])[_0x6154a6(0x441)]('/')[_0x6154a6(0x35a)](),':'),_0x3f9c64['linen'+'o']||'?');_0x1c7099['lastE'+_0x6154a6(0x195)]=_0x28f447[_0x6154a6(0x252)](_0x46f4e0,_0x3f4afb)[_0x6154a6(0x178)](0x1e5f+-0x2*-0x3cb+-0x25f5,0x3d9+0x57*0x65+-0x258c);}catch(_0xb9b91b){}});}else{var _0xf01619=document['creat'+'eElem'+'ent'](_0x5ff9a7(0x30d));_0xf01619[_0x5ff9a7(0x1cc)+'onten'+'t']=_0x5cb81c,_0x54f8ec['appen'+_0x5ff9a7(0x37a)+'d'](_0xf01619),_0x1fc7f5=_0x3b09cf['NTaas'](_0x5942f9),_0x54f8ec['appen'+'dChil'+'d'](_0x1fc7f5),requestAnimationFrame(()=>_0x1fc7f5['class'+_0x5ff9a7(0x298)]['add'](_0x5ff9a7(0x38f)));}}_0x1fc7f5[_0x5ff9a7(0x12c)+'List'][_0x5ff9a7(0x36c)+'e'](_0x5ff9a7(0x38f),_0x1dfd32);}function _0x281581(){var _0x5b6fe0=_0x98c50e,_0x144906={'VgRpZ':_0x3b09cf[_0x5b6fe0(0x378)],'LmbzF':function(_0x516f0b,_0x4fa359){return _0x516f0b+_0x4fa359;},'mJZzH':'UWMK\x20'+'bound'+'\x20','nMmwL':function(_0x4c8a8d,_0x427cff){return _0x4c8a8d+_0x427cff;},'QzKgv':function(_0x5b74ac,_0x17d8fa){var _0x5712d6=_0x5b6fe0;return _0x3b09cf[_0x5712d6(0x120)](_0x5b74ac,_0x17d8fa);},'aoMAK':_0x5b6fe0(0x41f)+'s','KQCyE':_0x5b6fe0(0x92)};_0x5b6fe0(0x559)!=='LnABw'?_0x20f04c[_0x5b6fe0(0x1cc)+'onten'+'t']=_0x4903fc[_0x5b6fe0(0x4d4)+'ode']?_0x144906[_0x5b6fe0(0x132)]:_0x4a7c3c[_0x5b6fe0(0x477)]?_0x144906[_0x5b6fe0(0x40c)](_0x144906[_0x5b6fe0(0x40c)](_0x144906['LmbzF'](_0x144906['LmbzF'](_0x144906[_0x5b6fe0(0x40c)](_0x144906[_0x5b6fe0(0x4ee)]+(_0x5671a9['hooks'+'Total']?_0x144906[_0x5b6fe0(0x465)](_0x144906[_0x5b6fe0(0x3de)](_0x139d6c['hooks'+'Ok'],'/'),_0x129ebc['hooks'+_0x5b6fe0(0x387)])+_0x144906['aoMAK']:_0x5b6fe0(0x2b8)+_0x5b6fe0(0x606)+'med\x20('+_0x5b6fe0(0x83)+_0x5b6fe0(0x3ba)),'\x20|\x20ga'+_0x5b6fe0(0x5b9)),_0x3264e5[_0x5b6fe0(0x4b7)+_0x5b6fe0(0x2e2)]?'loade'+'d':_0x5b6fe0(0x5d9)+'ng'),_0x5b6fe0(0x5c4)+_0x5b6fe0(0x49f)+'\x20')+(_0x252dd7[_0x5b6fe0(0x47c)+_0x5b6fe0(0x27a)]?_0x5b6fe0(0x497):_0x144906['KQCyE']),_0x5b6fe0(0x1e3)+'vemen'+'t\x20'),_0x1e3eb8['movem'+_0x5b6fe0(0x2b5)]?'held':_0x144906['KQCyE'])+(_0x2e70cc['lastE'+_0x5b6fe0(0x195)]?_0x144906['nMmwL'](_0x5b6fe0(0x212)+'R:\x20',_0x395ef4[_0x5b6fe0(0x538)+_0x5b6fe0(0x195)]):''):_0x5b6fe0(0xaf)+_0x5b6fe0(0x4d1)+_0x5b6fe0(0x48a)+'overl'+'ay\x20on'+'ly\x20(r'+_0x5b6fe0(0x5b5)+_0x5b6fe0(0x247)+'he\x20us'+_0x5b6fe0(0x2b2)+_0x5b6fe0(0x57f):_0x4609bc(!_0x613f5e);}function _0x5942f9(){var _0x295aa4=_0x98c50e,_0x58a2e8={'ritsZ':_0x295aa4(0x43b)+'\x20kour'+_0x295aa4(0x47b)+_0x295aa4(0x354)+'er\x20sl'+_0x295aa4(0x3dc),'ynmDi':function(_0x23f3d2,_0x1d411a){return _0x23f3d2!==_0x1d411a;},'sPhgD':_0x3b09cf['HsESI'],'CXTGi':function(_0x34b6e0,_0x3a9eb1){var _0x248615=_0x295aa4;return _0x3b09cf[_0x248615(0x60b)](_0x34b6e0,_0x3a9eb1);},'tKHAb':function(_0xaebac8,_0x581dad){return _0xaebac8+_0x581dad;},'hwegk':function(_0x4ae1fc,_0x1d8744){var _0x5a3158=_0x295aa4;return _0x3b09cf[_0x5a3158(0x3cd)](_0x4ae1fc,_0x1d8744);},'xvYCt':'UWMK\x20'+_0x295aa4(0x5df)+'\x20','QcXIi':_0x3b09cf[_0x295aa4(0x418)],'RNnBc':'\x20|\x20ga'+_0x295aa4(0x5b9),'wJeXw':_0x3b09cf['MzbBd'],'zqPVH':_0x295aa4(0x1e3)+_0x295aa4(0xef)+'t\x20','McuBZ':'none'},_0x2cfdfc=document[_0x295aa4(0x208)+'eElem'+_0x295aa4(0x32e)](_0x3b09cf[_0x295aa4(0x4e8)]);_0x2cfdfc['class'+_0x295aa4(0x469)]='mn-pa'+_0x295aa4(0x5fa);var _0x491d2d=document['creat'+'eElem'+_0x295aa4(0x32e)](_0x3b09cf[_0x295aa4(0x5f0)]);_0x491d2d['class'+_0x295aa4(0x469)]=_0x3b09cf[_0x295aa4(0x2a1)];var _0x55a514=document['creat'+_0x295aa4(0x56d)+'ent'](_0x3b09cf[_0x295aa4(0x4e8)]);_0x55a514[_0x295aa4(0x12c)+_0x295aa4(0x469)]=_0x295aa4(0x4b6)+'go',_0x55a514[_0x295aa4(0x2bb)+'HTML']=_0x295aa4(0x21a)+'viewB'+_0x295aa4(0xb9)+'\x200\x2024'+_0x295aa4(0x2fd)+'class'+_0x295aa4(0x380)+_0x295aa4(0x31e)+'svg\x22>'+'<path'+_0x295aa4(0x4ab)+_0x295aa4(0x2cd)+_0x295aa4(0x5fd)+'-2.5-'+_0x295aa4(0x615)+'-4-7.'+_0x295aa4(0x4bd)+'.5\x201.'+_0x295aa4(0x1b0)+'\x204-4.'+'5s4\x202'+_0x295aa4(0x572)+_0x295aa4(0x3a1)+_0x295aa4(0xfe)+_0x295aa4(0x544)+_0x295aa4(0x17e)+'fill='+'\x22none'+'\x22\x20str'+_0x295aa4(0x23d)+_0x295aa4(0x55e)+_0x295aa4(0x363)+'troke'+_0x295aa4(0x560)+_0x295aa4(0x330)+_0x295aa4(0x156)+_0x295aa4(0x4c6)+_0x295aa4(0x553)+_0x295aa4(0x144)+_0x295aa4(0x2a3)+_0x295aa4(0x3ec)+'-line'+'join='+'\x22roun'+_0x295aa4(0x105)+_0x295aa4(0x14c)+_0x295aa4(0x336)+'\x2212\x22\x20'+_0x295aa4(0xf5)+_0x295aa4(0x17a)+'\x221.5\x22'+_0x295aa4(0x547)+'=\x22#ff'+'6b9d\x22'+'/></s'+'vg>',_0x491d2d[_0x295aa4(0x315)+'dChil'+'d'](_0x55a514);var _0x4907f9=document['creat'+_0x295aa4(0x56d)+_0x295aa4(0x32e)](_0x295aa4(0x46e));_0x4907f9['class'+_0x295aa4(0x469)]=_0x295aa4(0x46d)+'in';var _0x2724f7=document['creat'+'eElem'+_0x295aa4(0x32e)](_0x295aa4(0x4af)+'r');_0x2724f7[_0x295aa4(0x12c)+'Name']=_0x3b09cf[_0x295aa4(0x50f)];var _0x59d411=document[_0x295aa4(0x208)+_0x295aa4(0x56d)+_0x295aa4(0x32e)](_0x295aa4(0x46e));_0x59d411[_0x295aa4(0x12c)+_0x295aa4(0x469)]='mn-ti'+'tles';var _0x3c7f1c=document['creat'+_0x295aa4(0x56d)+'ent']('h2');_0x3c7f1c[_0x295aa4(0x12c)+_0x295aa4(0x469)]='mn-h',_0x3c7f1c['textC'+'onten'+'t']=_0x3b09cf[_0x295aa4(0x19b)];var _0x2ec7e8=document[_0x295aa4(0x208)+_0x295aa4(0x56d)+_0x295aa4(0x32e)](_0x3b09cf[_0x295aa4(0x446)]);_0x2ec7e8['class'+_0x295aa4(0x469)]='mn-su'+'b',_0x2ec7e8['textC'+'onten'+'t']=_0x295aa4(0x5e8)+_0x295aa4(0x3b9)+'.io\x20m'+_0x295aa4(0x5f4),_0x59d411[_0x295aa4(0x315)+'d'](_0x3c7f1c,_0x2ec7e8);var _0x4642ff=document[_0x295aa4(0x208)+_0x295aa4(0x56d)+_0x295aa4(0x32e)](_0x3b09cf['Yvkac']);_0x4642ff['type']=_0x295aa4(0x528)+'n',_0x4642ff[_0x295aa4(0x12c)+'Name']=_0x295aa4(0x4e5)+'ose',_0x4642ff['title']=_0x3b09cf[_0x295aa4(0x1eb)],_0x4642ff['inner'+'HTML']=_0x295aa4(0x21a)+_0x295aa4(0x30f)+_0x295aa4(0xb9)+_0x295aa4(0x3c1)+_0x295aa4(0x516)+_0x295aa4(0x254)+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+_0x295aa4(0x591)+_0x295aa4(0x444)+'/></s'+_0x295aa4(0x305),_0x4642ff['oncli'+'ck']=()=>_0x4609bc(![]),_0x2724f7[_0x295aa4(0x315)+'d'](_0x59d411,_0x4642ff);var _0x2fb2e6=document['creat'+_0x295aa4(0x56d)+_0x295aa4(0x32e)](_0x295aa4(0x46e));_0x2fb2e6[_0x295aa4(0x12c)+'Name']='mn-co'+'ls',_0x4907f9['appen'+'d'](_0x2724f7,_0x2fb2e6),_0x2cfdfc['appen'+'d'](_0x491d2d,_0x4907f9);var _0x304a59=new Map();for(var _0x70c66e of _0x56d188){var _0x38b351=document[_0x295aa4(0x208)+_0x295aa4(0x56d)+'ent'](_0x3b09cf['Yvkac']);_0x38b351['type']=_0x295aa4(0x528)+'n',_0x38b351[_0x295aa4(0x12c)+_0x295aa4(0x469)]='mn-ta'+'b',_0x38b351[_0x295aa4(0x450)]=_0x70c66e['label'],_0x38b351[_0x295aa4(0x2bb)+_0x295aa4(0x3d9)]=_0x3b09cf[_0x295aa4(0x109)]+_0x70c66e['label']+_0x3b09cf['TmlEm'],_0x38b351[_0x295aa4(0x49a)+'ck']=(_0x3b5459=>()=>_0x572cf8(_0x3b5459))(_0x70c66e['id']),_0x304a59[_0x295aa4(0x41d)](_0x70c66e['id'],_0x38b351),_0x491d2d[_0x295aa4(0x315)+_0x295aa4(0x37a)+'d'](_0x38b351);}function _0x572cf8(_0x1dd46e){var _0xe3b571=_0x295aa4,_0x30a07b=(_0xe3b571(0x58a)+'|1|4|'+'5')[_0xe3b571(0x441)]('|'),_0x52558d=0x22ff+0x39*-0x31+-0xc0b*0x2;while(!![]){switch(_0x30a07b[_0x52558d++]){case'0':var _0x4febba=_0x56d188[_0xe3b571(0x1f9)](_0x5c1ed8=>_0x5c1ed8['id']===_0x1dd46e)||_0x56d188[0x1*-0x2141+0x521+0x1c20];continue;case'1':_0x3c7f1c[_0xe3b571(0x1cc)+_0xe3b571(0x5dc)+'t']=_0xe3b571(0x34a)+'a\x20Kou'+_0xe3b571(0x4b0)+_0x4febba[_0xe3b571(0x1b9)];continue;case'2':_0x2b95bd();continue;case'3':_0x4133[_0xe3b571(0x3bc)]=_0x1dd46e;continue;case'4':for(var [_0x3d210b,_0x3dec8f]of _0x304a59)_0x3dec8f[_0xe3b571(0x12c)+'List'][_0xe3b571(0x36c)+'e']('activ'+'e',_0x3d210b===_0x1dd46e);continue;case'5':_0x2fb2e6[_0xe3b571(0x489)+_0xe3b571(0xc0)+_0xe3b571(0x54e)](..._0x5027da[_0xe3b571(0x60f)](_0x13f0fd,_0x1dd46e));continue;}break;}}return _0x572cf8(_0x4133['cat']||_0x3b09cf['wYQhL']),setInterval(()=>{var _0x4bfcda=_0x295aa4,_0x5f4140={'GCUSb':function(_0x5e0546,_0x5ab6f5,_0x30af19,_0x1e3464,_0x45010d,_0x48ee12){return _0x5e0546(_0x5ab6f5,_0x30af19,_0x1e3464,_0x45010d,_0x48ee12);},'yZWhj':_0x58a2e8['ritsZ'],'odWnq':function(_0x42b1a6,_0x5a4fce){return _0x42b1a6(_0x5a4fce);}};if(!_0x613f5e)return;var _0x51c8c8=_0x2fb2e6['child'+_0x4bfcda(0x5f6)];for(var _0x421e8a=0x1947+0x2e7*-0xc+0x98d;_0x421e8a<_0x51c8c8['lengt'+'h'];_0x421e8a++){var _0xcf22c2=_0x51c8c8[_0x421e8a]['query'+_0x4bfcda(0x5ce)+_0x4bfcda(0x249)](_0x4bfcda(0x426)+_0x4bfcda(0x12b));if(_0xcf22c2&&(_0xcf22c2[_0x4bfcda(0x1cc)+'onten'+'t']['index'+'Of'](_0x4bfcda(0x2a0))===-0x1bf6+-0x1bfd+0x37f3||_0xcf22c2['textC'+_0x4bfcda(0x5dc)+'t'][_0x4bfcda(0x417)+'Of']('SAFE')===-0xdcd+-0xccb+0x1*0x1a98)){if(_0x58a2e8[_0x4bfcda(0x131)](_0x58a2e8[_0x4bfcda(0x4d7)],_0x58a2e8[_0x4bfcda(0x4d7)]))return[_0x5f4140[_0x4bfcda(0x59c)](_0xf72490,'Adblo'+'ck',_0x5f4140[_0x4bfcda(0x58c)],_0x352ef1['adblo'+'ck'],_0x5586d8=>{_0x343dc5['adblo'+'ck']=_0x5586d8,_0x186928();},[_0x5f4140[_0x4bfcda(0x4db)](_0x313052,_0x4bfcda(0x13c)+_0x4bfcda(0x61b)+_0x4bfcda(0x407)+_0x4bfcda(0x3bb)+'ad\x20wh'+_0x4bfcda(0x5aa)+_0x4bfcda(0x56c)+'.')])];else _0xcf22c2['textC'+_0x4bfcda(0x5dc)+'t']=_0x3d8b21[_0x4bfcda(0x4d4)+_0x4bfcda(0x433)]?_0x4bfcda(0x5d0)+'MODE\x20'+_0x4bfcda(0x347)+_0x4bfcda(0x2e5)+'only,'+'\x20no\x20h'+_0x4bfcda(0x173)+'(relo'+_0x4bfcda(0x365)+'\x20exit'+')':_0x3d8b21['uwmk']?_0x58a2e8[_0x4bfcda(0x530)](_0x58a2e8[_0x4bfcda(0x588)](_0x58a2e8['hwegk'](_0x58a2e8['xvYCt']+(_0x3d8b21[_0x4bfcda(0x515)+_0x4bfcda(0x387)]?_0x3d8b21['hooks'+'Ok']+'/'+_0x3d8b21[_0x4bfcda(0x515)+_0x4bfcda(0x387)]+_0x58a2e8['QcXIi']:'0\x20hoo'+_0x4bfcda(0x606)+'med\x20('+_0x4bfcda(0x83)+'ff)')+_0x58a2e8[_0x4bfcda(0x183)]+(_0x3d8b21[_0x4bfcda(0x4b7)+_0x4bfcda(0x2e2)]?'loade'+'d':_0x58a2e8[_0x4bfcda(0x1ac)]),_0x4bfcda(0x5c4)+_0x4bfcda(0x49f)+'\x20'),_0x3d8b21['shoot'+'ers']?_0x4bfcda(0x497):'none'),_0x58a2e8[_0x4bfcda(0x1df)])+(_0x3d8b21['movem'+_0x4bfcda(0x2b5)]?_0x4bfcda(0x497):_0x58a2e8[_0x4bfcda(0x505)])+(_0x3d8b21['lastE'+_0x4bfcda(0x195)]?_0x4bfcda(0x212)+_0x4bfcda(0x526)+_0x3d8b21['lastE'+_0x4bfcda(0x195)]:''):'UWMK\x20'+_0x4bfcda(0x4d1)+'NG\x20-\x20'+_0x4bfcda(0x4f2)+_0x4bfcda(0x4dd)+_0x4bfcda(0xfb)+_0x4bfcda(0x5b5)+'all\x20t'+_0x4bfcda(0x524)+'erscr'+_0x4bfcda(0x57f);}}},0x1*0x1b97+-0x117f+-0xb*0x90),_0x2cfdfc;}var _0x5cb81c='\x0a\x20\x20\x20\x20'+_0x98c50e(0x55b)+_0x98c50e(0x44f)+_0x98c50e(0x113)+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x98c50e(0x116)+'-sizi'+_0x98c50e(0x33e)+_0x98c50e(0x1aa)+_0x98c50e(0x27d)+'\x20marg'+_0x98c50e(0x25d)+_0x98c50e(0x396)+'t-fam'+'ily:\x20'+_0x98c50e(0x4c8)+_0x98c50e(0x613)+_0x98c50e(0x118)+'\x20UI\x22,'+_0x98c50e(0x429)+'em-ui'+_0x98c50e(0x7f)+'s-ser'+_0x98c50e(0x475)+_0x98c50e(0x5a8)+_0x98c50e(0x556)+_0x98c50e(0x327)+_0x98c50e(0x13d)+_0x98c50e(0x5d6)+_0x98c50e(0x2e7)+'olute'+';\x20rig'+_0x98c50e(0x206)+_0x98c50e(0x251)+_0x98c50e(0x146)+_0x98c50e(0x501)+_0x98c50e(0x3f0)+'idth:'+_0x98c50e(0xd4)+_0x98c50e(0x25a)+_0x98c50e(0x4f6)+_0x98c50e(0x3da)+'vw\x20-\x20'+_0x98c50e(0x4d2)+_0x98c50e(0x4f0)+'x-hei'+_0x98c50e(0x324)+'min(4'+_0x98c50e(0x39d)+_0x98c50e(0x541)+'(100v'+_0x98c50e(0x452)+_0x98c50e(0x5ef)+';\x0a\x20\x20\x20'+_0x98c50e(0x308)+_0x98c50e(0x193)+_0x98c50e(0x32b)+_0x98c50e(0x2b3)+_0x98c50e(0x326)+'px;\x20p'+_0x98c50e(0x137)+_0x98c50e(0xf7)+'px;\x20b'+'order'+_0x98c50e(0x339)+'us:\x202'+'2px;\x20'+_0x98c50e(0xab)+_0x98c50e(0x5b8)+_0x98c50e(0x265)+'\x20auto'+';\x0a\x20\x20\x20'+_0x98c50e(0x5c3)+_0x98c50e(0x10e)+'und:\x20'+'rgba('+'24,17'+_0x98c50e(0x2f3)+_0x98c50e(0x3b7)+_0x98c50e(0x521)+_0x98c50e(0x17d)+_0x98c50e(0x3a2)+_0x98c50e(0x4ea)+_0x98c50e(0x3ea)+_0x98c50e(0x355)+_0x98c50e(0x25b)+_0x98c50e(0x2e6)+_0x98c50e(0x536)+_0x98c50e(0xd7)+_0x98c50e(0x333)+_0x98c50e(0x47f)+_0x98c50e(0xb5)+'er:\x20b'+_0x98c50e(0x56b)+_0x98c50e(0x533)+_0x98c50e(0xd8)+_0x98c50e(0x449)+_0x98c50e(0x2d1)+_0x98c50e(0x5a8)+_0x98c50e(0x455)+_0x98c50e(0xc8)+'ow:\x200'+'\x200\x200\x20'+'1px\x20r'+_0x98c50e(0x1c8)+'55,25'+_0x98c50e(0x1c5)+_0x98c50e(0x53c)+_0x98c50e(0x38a)+'et\x200\x20'+_0x98c50e(0x369)+'\x20rgba'+_0x98c50e(0x5ac)+_0x98c50e(0x3ca)+_0x98c50e(0x5da)+_0x98c50e(0x18d)+_0x98c50e(0x401)+'\x2080px'+'\x20rgba'+_0x98c50e(0x2fc)+_0x98c50e(0x4ed)+');\x0a\x20\x20'+_0x98c50e(0x3f9)+_0x98c50e(0x8e)+'y:\x200;'+_0x98c50e(0x44e)+'sform'+':\x20tra'+'nslat'+'eY(18'+_0x98c50e(0x338)+'point'+'er-ev'+_0x98c50e(0x265)+'\x20none'+_0x98c50e(0x159)+'nsiti'+'on:\x20o'+'pacit'+_0x98c50e(0x575)+_0x98c50e(0x51a)+'e,\x20tr'+'ansfo'+'rm\x20.4'+_0x98c50e(0x370)+'bic-b'+'ezier'+_0x98c50e(0x27b)+_0x98c50e(0x390)+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x98c50e(0x8f)+'r:\x20#f'+'6eef2'+_0x98c50e(0x396)+_0x98c50e(0x4b1)+'e:\x2013'+_0x98c50e(0x142)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x98c50e(0x164)+'shown'+_0x98c50e(0x197)+_0x98c50e(0x29a)+':\x201;\x20'+_0x98c50e(0x608)+'form:'+_0x98c50e(0x46b)+';\x20poi'+_0x98c50e(0x607)+_0x98c50e(0x3e9)+_0x98c50e(0x307)+'to;\x20}'+_0x98c50e(0x5a8)+_0x98c50e(0x4c2)+'ide\x20{'+'\x20disp'+_0x98c50e(0x358)+'flex;'+'\x20flex'+_0x98c50e(0x1a9)+_0x98c50e(0x4b8)+':\x20col'+'umn;\x20'+_0x98c50e(0x1b8)+_0x98c50e(0x57e)+'s:\x20ce'+_0x98c50e(0x48e)+_0x98c50e(0x207)+_0x98c50e(0x184)+'\x20widt'+_0x98c50e(0x2d6)+_0x98c50e(0x26d)+_0x98c50e(0x331)+_0x98c50e(0xde)+'\x20padd'+_0x98c50e(0xe7)+_0x98c50e(0x3e4)+(_0x98c50e(0x231)+_0x98c50e(0x3d6)+'radiu'+_0x98c50e(0x2b0)+'px;\x0a\x20'+_0x98c50e(0x542)+'backg'+_0x98c50e(0xa9)+':\x20rgb'+_0x98c50e(0x1fb)+_0x98c50e(0x491)+'255,.'+'025);'+'\x20box-'+'shado'+_0x98c50e(0x89)+_0x98c50e(0xc6)+_0x98c50e(0x3eb)+_0x98c50e(0x3c8)+_0x98c50e(0x1c8)+_0x98c50e(0x51b)+_0x98c50e(0x1c5)+',.05)'+';\x20}\x0a\x20'+_0x98c50e(0x509)+_0x98c50e(0xb3)+'o\x20{\x20d'+_0x98c50e(0x33a)+_0x98c50e(0x222)+_0x98c50e(0x1dd)+'lace-'+'items'+':\x20cen'+_0x98c50e(0x397)+_0x98c50e(0x3bd)+':\x2032p'+'x;\x20he'+_0x98c50e(0x587)+'\x2032px'+';\x20}\x0a\x20'+_0x98c50e(0x509)+'n-log'+'o-svg'+'\x20{\x20wi'+_0x98c50e(0x18f)+'25px;'+'\x20heig'+_0x98c50e(0x206)+_0x98c50e(0x1de)+_0x98c50e(0x255)+'low:\x20'+_0x98c50e(0x600)+_0x98c50e(0x5eb)+_0x98c50e(0x3a2)+_0x98c50e(0x42a)+_0x98c50e(0x93)+_0x98c50e(0x15e)+'\x200\x204p'+_0x98c50e(0x28d)+'a(255'+',107,'+_0x98c50e(0x5b2)+'8));\x20'+'}\x0a\x20\x20\x20'+_0x98c50e(0x468)+_0x98c50e(0xa2)+_0x98c50e(0x38b)+_0x98c50e(0x358)+_0x98c50e(0x117)+'\x20alig'+_0x98c50e(0x428)+_0x98c50e(0x2ad)+'enter'+';\x20jus'+_0x98c50e(0x4a1)+_0x98c50e(0x60a)+'nt:\x20c'+_0x98c50e(0x555)+';\x20wid'+_0x98c50e(0x24a)+_0x98c50e(0x3ce)+'heigh'+_0x98c50e(0x14e)+_0x98c50e(0x58b)+_0x98c50e(0x1aa)+':\x200;\x20'+_0x98c50e(0x312)+'r-rad'+_0x98c50e(0x391)+_0x98c50e(0xe5)+'\x0a\x20\x20\x20\x20'+_0x98c50e(0x2f8)+'kgrou'+_0x98c50e(0x5f3)+_0x98c50e(0x2ae)+'arent'+_0x98c50e(0x11b)+_0x98c50e(0x32c)+_0x98c50e(0x1c8)+'46,23'+_0x98c50e(0x1dc)+_0x98c50e(0x108)+'\x20curs'+'or:\x20p'+_0x98c50e(0x3fb)+_0x98c50e(0x13a)+'nt-si'+'ze:\x201'+_0x98c50e(0x210)+'font-'+'weigh'+_0x98c50e(0x18a)+_0x98c50e(0xcf)+'\x20\x20\x20\x20.'+'mn-ta'+'b:hov'+_0x98c50e(0x2c1)+'color'+_0x98c50e(0x91)+_0x98c50e(0x4fa)+_0x98c50e(0x352)+'242,.'+_0x98c50e(0x102)+_0x98c50e(0x5a8)+_0x98c50e(0x15d)+'ab.ac'+_0x98c50e(0x502)+_0x98c50e(0x614)+'or:\x20#'+'ff6b9'+'d;\x20ba'+'ckgro'+_0x98c50e(0x3ee)+'rgba('+_0x98c50e(0x525)+_0x98c50e(0x3d5)+_0x98c50e(0x5f8)+';\x20}\x0a\x20'+_0x98c50e(0x509)+_0x98c50e(0x1d3)+_0x98c50e(0x4a6)+_0x98c50e(0x331)+'1;\x20mi'+_0x98c50e(0x57b)+'th:\x200'+';\x20dis'+_0x98c50e(0x59e)+'\x20flex'+_0x98c50e(0x5f7)+'x-dir'+_0x98c50e(0x58f)+_0x98c50e(0x1d1)+'lumn;'+_0x98c50e(0x5ff)+_0x98c50e(0x359)+_0x98c50e(0x5d5)+_0x98c50e(0x233)+_0x98c50e(0x59e)+_0x98c50e(0x419)+';\x20ali'+_0x98c50e(0x5b0)+_0x98c50e(0x593)+'cente'+_0x98c50e(0x4e4)+'p:\x2012'+_0x98c50e(0x9d)+_0x98c50e(0x137)+_0x98c50e(0x400)+'x\x206px'+_0x98c50e(0x276)+_0x98c50e(0x154)+_0x98c50e(0x3a6)+'ect:\x20'+_0x98c50e(0xde)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x98c50e(0x1a4)+_0x98c50e(0x340)+_0x98c50e(0x4e7)+_0x98c50e(0x474)+'in-wi'+_0x98c50e(0x18f)+'0;\x20}\x0a'+_0x98c50e(0x1f7)+_0x98c50e(0x24c)+_0x98c50e(0x56f)+_0x98c50e(0x4b1)+_0x98c50e(0x26e)+'px;\x20f'+_0x98c50e(0x3f8)+_0x98c50e(0x54b)+_0x98c50e(0x2a9)+';\x20}\x0a\x20'+_0x98c50e(0x509)+_0x98c50e(0x5ad)+_0x98c50e(0x320)+_0x98c50e(0x4ef)+_0x98c50e(0x5a7)+_0x98c50e(0x43d)+_0x98c50e(0x486))+('ty:\x20.'+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x98c50e(0x54d)+'\x20disp'+'lay:\x20'+_0x98c50e(0x1f4)+'\x20plac'+'e-ite'+'ms:\x20c'+_0x98c50e(0x555)+_0x98c50e(0x5c7)+_0x98c50e(0x140)+'8px;\x20'+_0x98c50e(0x2f7)+'t:\x2028'+_0x98c50e(0x58b)+_0x98c50e(0x1aa)+_0x98c50e(0x5d4)+_0x98c50e(0x312)+_0x98c50e(0xc7)+_0x98c50e(0x391)+_0x98c50e(0x377)+'backg'+_0x98c50e(0xa9)+_0x98c50e(0x19f)+'nspar'+'ent;\x20'+_0x98c50e(0x84)+':\x20inh'+'erit;'+_0x98c50e(0x5d2)+'ity:\x20'+'.45;\x20'+'curso'+'r:\x20po'+_0x98c50e(0x313)+';\x20}\x0a\x20'+_0x98c50e(0x509)+_0x98c50e(0xae)+_0x98c50e(0x280)+_0x98c50e(0x43a)+_0x98c50e(0x5d2)+'ity:\x20'+'1;\x20ba'+'ckgro'+'und:\x20'+'rgba('+'255,2'+_0x98c50e(0x51b)+_0x98c50e(0x15a)+_0x98c50e(0x278)+_0x98c50e(0x1f7)+'mn-cl'+'ose\x20s'+'vg\x20{\x20'+_0x98c50e(0x3bd)+_0x98c50e(0x192)+'x;\x20he'+_0x98c50e(0x587)+_0x98c50e(0x39b)+_0x98c50e(0x40d)+_0x98c50e(0x59b)+'ne;\x20s'+'troke'+_0x98c50e(0x375)+'rentC'+_0x98c50e(0x519)+'\x20stro'+'ke-wi'+'dth:\x20'+_0x98c50e(0x5fb)+'roke-'+'linec'+_0x98c50e(0x4c4)+'ound;'+_0x98c50e(0x5ff)+_0x98c50e(0x359)+'-cols'+_0x98c50e(0x595)+_0x98c50e(0x1ed)+';\x20min'+'-heig'+'ht:\x200'+_0x98c50e(0x48d)+'rflow'+_0x98c50e(0x54c)+'uto;\x20'+_0x98c50e(0x4c3)+_0x98c50e(0x3f4)+_0x98c50e(0x2de)+_0x98c50e(0x5f1)+_0x98c50e(0x2ff)+_0x98c50e(0x537)+_0x98c50e(0x581)+'s:\x20re'+'peat('+_0x98c50e(0x53b)+_0x98c50e(0x60c)+'\x20minm'+'ax(25'+_0x98c50e(0x162)+_0x98c50e(0x171)+_0x98c50e(0x1c9)+_0x98c50e(0x5b0)+_0x98c50e(0x593)+'start'+';\x20ali'+'gn-co'+_0x98c50e(0x337)+_0x98c50e(0x3af)+'rt;\x20g'+_0x98c50e(0x225)+_0x98c50e(0x210)+'paddi'+_0x98c50e(0x4a2)+'\x204px\x20'+_0x98c50e(0x172)+';\x20}\x0a\x20'+_0x98c50e(0x509)+'n-col'+'s::-w'+'ebkit'+'-scro'+'llbar'+_0x98c50e(0x5d1)+_0x98c50e(0x18f)+_0x98c50e(0x377)+_0x98c50e(0x96)+_0x98c50e(0x468)+'cols:'+_0x98c50e(0x31c)+'kit-s'+'croll'+_0x98c50e(0x402)+_0x98c50e(0x2cb)+_0x98c50e(0x585)+_0x98c50e(0x2b9)+'nd:\x20r'+'gba(2'+_0x98c50e(0x51b)+_0x98c50e(0x1c5)+',.08)'+_0x98c50e(0x1c3)+'der-r'+'adius'+_0x98c50e(0x22e)+_0x98c50e(0x388)+'\x20\x20\x20.s'+_0x98c50e(0x3ab)+_0x98c50e(0x4ff)+_0x98c50e(0x1aa)+_0x98c50e(0x339)+'us:\x201'+_0x98c50e(0x3ce)+_0x98c50e(0x31f)+'round'+':\x20rgb'+_0x98c50e(0x1fb)+_0x98c50e(0x491)+_0x98c50e(0x18b)+_0x98c50e(0xb8)+_0x98c50e(0x1ba)+_0x98c50e(0x126)+_0x98c50e(0x89)+'set\x200'+_0x98c50e(0x3eb)+_0x98c50e(0x3c8)+_0x98c50e(0x1c8)+_0x98c50e(0x51b)+'5,255'+',.05)'+_0x98c50e(0x388)+_0x98c50e(0x464)+_0x98c50e(0x3ab)+'d.on\x20'+_0x98c50e(0x585)+_0x98c50e(0x2b9)+'nd:\x20r'+_0x98c50e(0x1c8)+_0x98c50e(0x51b)+_0x98c50e(0x1c5)+_0x98c50e(0x274)+';\x20box'+_0x98c50e(0xc8)+'ow:\x20i'+'nset\x20'+'0\x200\x200'+_0x98c50e(0x1b4)+_0x98c50e(0x39c)+_0x98c50e(0x525)+'07,15'+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+'rd-he'+_0x98c50e(0x246)+'displ')+(_0x98c50e(0x259)+'lex;\x20'+'align'+'-item'+_0x98c50e(0x2b7)+_0x98c50e(0x48e)+'\x20gap:'+_0x98c50e(0x290)+'\x20padd'+'ing:\x20'+'11px\x20'+_0x98c50e(0x51c)+_0x98c50e(0x5ff)+_0x98c50e(0x361)+'-card'+'-titl'+'e\x20{\x20f'+'lex:\x20'+_0x98c50e(0x29b)+_0x98c50e(0x57b)+_0x98c50e(0x412)+_0x98c50e(0x388)+'\x20\x20\x20.s'+'k-car'+_0x98c50e(0x32d)+_0x98c50e(0x14f)+'rong\x20'+_0x98c50e(0x56f)+'t-siz'+_0x98c50e(0x310)+_0x98c50e(0x26d)+_0x98c50e(0x3f8)+_0x98c50e(0x54b)+_0x98c50e(0xc5)+';\x20col'+'or:\x20r'+'gba(2'+_0x98c50e(0x257)+'8,242'+',.45)'+';\x20}\x0a\x20'+_0x98c50e(0x464)+'k-car'+_0x98c50e(0x43e)+_0x98c50e(0x619)+_0x98c50e(0x22a)+'itle\x20'+_0x98c50e(0xad)+'g\x20{\x20c'+_0x98c50e(0x434)+_0x98c50e(0x55a)+'0f5;\x20'+_0x98c50e(0x96)+_0x98c50e(0x458)+_0x98c50e(0x4f4)+'\x20{\x20pa'+_0x98c50e(0x4d6)+_0x98c50e(0x598)+'2px\x201'+'0px;\x20'+_0x98c50e(0x96)+_0x98c50e(0x458)+_0x98c50e(0x258)+_0x98c50e(0x320)+'nt-si'+_0x98c50e(0x5a7)+_0x98c50e(0x43d)+_0x98c50e(0x486)+_0x98c50e(0x314)+'4;\x20ma'+'rgin-'+_0x98c50e(0x146)+_0x98c50e(0x376)+'x;\x20}\x0a'+_0x98c50e(0x1f7)+_0x98c50e(0x3e3)+'l\x20{\x20d'+_0x98c50e(0x33a)+_0x98c50e(0x152)+_0x98c50e(0xf9)+'lign-'+'items'+_0x98c50e(0x3cc)+'ter;\x20'+_0x98c50e(0x45d)+'8px;\x20'+_0x98c50e(0x5cf)+'ng:\x204'+_0x98c50e(0x36f)+'\x20font'+_0x98c50e(0x1c0)+_0x98c50e(0x175)+'5px;\x20'+_0x98c50e(0x96)+_0x98c50e(0x458)+_0x98c50e(0x1b9)+_0x98c50e(0x595)+_0x98c50e(0x1ed)+_0x98c50e(0x11b)+_0x98c50e(0x32c)+'gba(2'+_0x98c50e(0x257)+_0x98c50e(0x1dc)+_0x98c50e(0x3a3)+_0x98c50e(0x388)+'\x20\x20\x20.s'+_0x98c50e(0x3ae)+'t\x20{\x20d'+'ispla'+_0x98c50e(0x540)+_0x98c50e(0xe1)+_0x98c50e(0x1d7)+_0x98c50e(0x209)+_0x98c50e(0x438)+_0x98c50e(0x287)+_0x98c50e(0x511)+_0x98c50e(0x196)+_0x98c50e(0x96)+'\x20.sk-'+_0x98c50e(0x127)+_0x98c50e(0x590)+_0x98c50e(0x484)+'on:\x20r'+_0x98c50e(0x43c)+_0x98c50e(0x5ab)+_0x98c50e(0x5db)+'\x2026px'+';\x20hei'+'ght:\x20'+'14px;'+_0x98c50e(0x5bc)+'er:\x200'+_0x98c50e(0x1c3)+_0x98c50e(0x244)+_0x98c50e(0x59a)+_0x98c50e(0x44b)+_0x98c50e(0x408)+_0x98c50e(0x10e)+'und:\x20'+_0x98c50e(0x39c)+'255,2'+_0x98c50e(0x51b)+_0x98c50e(0x297)+');\x20cu'+_0x98c50e(0x356)+'\x20poin'+'ter;\x20'+_0x98c50e(0x4e7)+_0x98c50e(0x46b)+_0x98c50e(0x388)+_0x98c50e(0x464)+'k-swi'+_0x98c50e(0x147)+_0x98c50e(0x177)+_0x98c50e(0x5cc)+_0x98c50e(0x337)+':\x20\x22\x22;'+_0x98c50e(0xda)+_0x98c50e(0x204)+'\x20abso'+_0x98c50e(0x1d0)+'\x20top:'+_0x98c50e(0x4a8)+'\x20left'+':\x203px'+_0x98c50e(0x5c7)+_0x98c50e(0x22f)+'px;\x20h'+_0x98c50e(0x54b)+_0x98c50e(0x38c)+';\x20bor'+_0x98c50e(0x244)+_0x98c50e(0x59a)+_0x98c50e(0x5c8)+_0x98c50e(0x3db)+'kgrou'+'nd:\x20r'+_0x98c50e(0x1c8)+'55,25'+_0x98c50e(0x1c5)+_0x98c50e(0x5a2)+_0x98c50e(0x159)+'nsiti'+_0x98c50e(0x45a)+'eft\x20.'+_0x98c50e(0x1f3)+_0x98c50e(0x295)+_0x98c50e(0x136)+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x98c50e(0x127)+_0x98c50e(0x3b4)+_0x98c50e(0x1bb)+'cked='+_0x98c50e(0x5a9)+_0x98c50e(0x344)+_0x98c50e(0x31f)+'round'+_0x98c50e(0x91))+('a(255'+',107,'+_0x98c50e(0x5b2)+_0x98c50e(0x514)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x98c50e(0x127)+_0x98c50e(0x3b4)+'a-che'+_0x98c50e(0x539)+'\x22true'+'\x22]::a'+'fter\x20'+_0x98c50e(0x58e)+'t:\x2015'+_0x98c50e(0x58b)+_0x98c50e(0x295)+'ound:'+'\x20#ff6'+_0x98c50e(0x133)+_0x98c50e(0x96)+_0x98c50e(0x458)+_0x98c50e(0x2a8)+'\x20{\x20ba'+_0x98c50e(0x10e)+'und:\x20'+_0x98c50e(0x39c)+'255,2'+_0x98c50e(0x51b)+'5,.03'+'5);\x20b'+_0x98c50e(0x1aa)+_0x98c50e(0x5d4)+'borde'+_0x98c50e(0xc7)+'ius:\x20'+'6px;\x20'+'color'+':\x20#f6'+'eef2;'+_0x98c50e(0x1fd)+_0x98c50e(0xe7)+_0x98c50e(0x2ca)+'px;\x20f'+_0x98c50e(0x57a)+'ize:\x20'+'11.5p'+'x;\x20ou'+_0x98c50e(0x3e6)+_0x98c50e(0x383)+_0x98c50e(0x216)+_0x98c50e(0x2e3)+'dow:\x20'+'inset'+'\x200\x200\x20'+_0x98c50e(0x2e9)+_0x98c50e(0x54a)+_0x98c50e(0x5ac)+_0x98c50e(0x3ca)+'55,.0'+_0x98c50e(0x1db)+_0x98c50e(0x5a8)+_0x98c50e(0x30e)+'ield\x20'+'optio'+'n\x20{\x20b'+'ackgr'+'ound:'+'\x20#221'+_0x98c50e(0x28b)+'}\x0a\x20\x20\x20'+_0x98c50e(0x458)+_0x98c50e(0x23b)+'\x20{\x20di'+'splay'+_0x98c50e(0x32b)+_0x98c50e(0x124)+'ign-i'+_0x98c50e(0x20d)+'\x20cent'+'er;\x20g'+_0x98c50e(0x3bf)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x98c50e(0x368)+'lider'+'\x20{\x20-w'+'ebkit'+'-appe'+_0x98c50e(0x3e1)+_0x98c50e(0x425)+_0x98c50e(0x2fe)+_0x98c50e(0x1ef)+_0x98c50e(0x1d6)+_0x98c50e(0x46b)+_0x98c50e(0x5c7)+'th:\x209'+'0px;\x20'+'heigh'+_0x98c50e(0x38d)+'x;\x20ba'+'ckgro'+'und:\x20'+_0x98c50e(0x608)+_0x98c50e(0x3b5)+_0x98c50e(0x3c4)+'\x20\x20\x20\x20.'+_0x98c50e(0x87)+'ider:'+':-web'+'kit-s'+_0x98c50e(0x5c5)+_0x98c50e(0x565)+_0x98c50e(0x14a)+_0x98c50e(0xcb)+'\x20{\x20he'+_0x98c50e(0x587)+_0x98c50e(0x5a4)+_0x98c50e(0x5bc)+'er-ra'+'dius:'+_0x98c50e(0x5a4)+_0x98c50e(0x52a)+'groun'+_0x98c50e(0x5fe)+_0x98c50e(0x199)+'gradi'+_0x98c50e(0x3b3)+_0x98c50e(0xbf)+_0x98c50e(0x61a)+_0x98c50e(0x55f)+')\x200\x200'+_0x98c50e(0x367)+'r(--p'+_0x98c50e(0x557)+')\x20100'+_0x98c50e(0x436)+'repea'+_0x98c50e(0xd0)+'ba(25'+_0x98c50e(0x1c5)+',255,'+_0x98c50e(0x398)+'\x20}\x0a\x20\x20'+_0x98c50e(0x361)+'-slid'+_0x98c50e(0x2a7)+_0x98c50e(0xd7)+_0x98c50e(0x18c)+_0x98c50e(0xe3)+_0x98c50e(0x2cb)+_0x98c50e(0x594)+'bkit-'+_0x98c50e(0x221)+'rance'+':\x20non'+_0x98c50e(0x404)+_0x98c50e(0x18f)+_0x98c50e(0x190)+_0x98c50e(0x2f7)+_0x98c50e(0x599)+_0x98c50e(0x4e1)+_0x98c50e(0x3a4)+_0x98c50e(0x52e)+'-2px;'+_0x98c50e(0x5bc)+'er-ra'+'dius:'+'\x2050%;'+'\x20back'+_0x98c50e(0x80)+_0x98c50e(0x485)+_0x98c50e(0x55f)+_0x98c50e(0x388)+_0x98c50e(0x464)+_0x98c50e(0x53f)+_0x98c50e(0x320)+_0x98c50e(0x4ef)+'ze:\x201'+'1px;\x20'+_0x98c50e(0x1d7)+_0x98c50e(0x27e)+_0x98c50e(0x4c1)+_0x98c50e(0x239)+'n-wid'+_0x98c50e(0x140)+'8px;\x20'+_0x98c50e(0x3dd)+'align'+':\x20rig'+_0x98c50e(0x2f4)+_0x98c50e(0x434)+'\x20rgba'+_0x98c50e(0x4d5)+'238,2'+_0x98c50e(0xd3)+_0x98c50e(0x278)+'\x20\x20\x20\x20.'+'sk-co'+_0x98c50e(0x19a))+(_0x98c50e(0x50d)+_0x98c50e(0x546)+'px;\x20h'+_0x98c50e(0x54b)+_0x98c50e(0x30b)+_0x98c50e(0x522)+_0x98c50e(0x150)+_0x98c50e(0x488)+'order'+'-radi'+_0x98c50e(0x494)+_0x98c50e(0x58b)+'ackgr'+_0x98c50e(0x1b3)+'\x20none'+_0x98c50e(0x386)+_0x98c50e(0x2e8)+_0x98c50e(0x2c8)+'ursor'+':\x20poi'+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x98c50e(0x13f)+'\x20{\x20fo'+'nt-si'+_0x98c50e(0x5a7)+'1px;\x20'+_0x98c50e(0x84)+':\x20rgb'+'a(246'+',238,'+_0x98c50e(0x374)+_0x98c50e(0x56a)+_0x98c50e(0x137)+'g:\x202p'+_0x98c50e(0x578)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x98c50e(0x357)+'err\x20{'+'\x20colo'+_0x98c50e(0x17b)+_0x98c50e(0x406)+_0x98c50e(0x388)+'\x20\x20\x20.s'+_0x98c50e(0x4b5)+'\x20{\x20al'+'ign-s'+_0x98c50e(0x288)+_0x98c50e(0x48c)+'start'+_0x98c50e(0x1c3)+_0x98c50e(0x5a5)+'0;\x20bo'+_0x98c50e(0x3d6)+_0x98c50e(0x59d)+'s:\x208p'+'x;\x20pa'+_0x98c50e(0x4d6)+':\x208px'+_0x98c50e(0x596)+';\x20bac'+'kgrou'+_0x98c50e(0x17f)+'ff6b9'+_0x98c50e(0x1fc)+_0x98c50e(0x447)+'#fff;'+_0x98c50e(0xf4)+'-size'+_0x98c50e(0x175)+'5px;\x20'+_0x98c50e(0x1d7)+_0x98c50e(0x27e)+_0x98c50e(0x18a)+'0;\x20cu'+'rsor:'+'\x20poin'+_0x98c50e(0x397)+_0x98c50e(0x96)+_0x98c50e(0x458)+'btn:h'+_0x98c50e(0xdd)+_0x98c50e(0x5e0)+'ter:\x20'+_0x98c50e(0x381)+'tness'+_0x98c50e(0x306)+_0x98c50e(0x388)+_0x98c50e(0x2b6));window['addEv'+'entLi'+'stene'+'r'](_0x3b09cf[_0x98c50e(0x4dc)],_0x276f66=>{var _0x339fd5=_0x98c50e;if(_0x3b09cf['ZvXLi'](_0x3b09cf[_0x339fd5(0x270)],'ahJHv')){_0x55bf91[_0x339fd5(0x4b7)+'oaded']=!!_0x300c9b[_0x339fd5(0x20b)+_0x339fd5(0x200)+'nce'];try{var _0x34cce7=-0x1f41+-0x1*-0xb96+0x5*0x3ef;for(var _0x1df126 in _0x161644){if(_0xff58a8[_0x1df126]&&_0x24867b[_0x1df126][_0x339fd5(0x34e)+'ed'])_0x34cce7++;}_0x5d9ff1[_0x339fd5(0x515)+'Ok']=_0x34cce7;}catch(_0x52d71b){}}else _0x276f66[_0x339fd5(0x22c)]===_0x339fd5(0x284)+'t'&&(_0x276f66['preve'+_0x339fd5(0x218)+_0x339fd5(0x568)](),_0x281581());},!![]);var _0x405a4d=document[_0x98c50e(0x208)+'eElem'+_0x98c50e(0x32e)](_0x98c50e(0x46e));_0x405a4d['style'][_0x98c50e(0x453)+'xt']=_0x98c50e(0x28e)+_0x98c50e(0x224)+_0x98c50e(0xe9)+_0x98c50e(0x10a)+'2px;r'+_0x98c50e(0x587)+'12px;'+_0x98c50e(0x558)+'ex:21'+_0x98c50e(0xbc)+_0x98c50e(0x27c)+_0x98c50e(0x2d5)+_0x98c50e(0x2c2)+'ter;w'+_0x98c50e(0x5db)+'26px;'+_0x98c50e(0x2f7)+_0x98c50e(0xc2)+'x;opa'+_0x98c50e(0x511)+_0x98c50e(0x303)+_0x98c50e(0x439)+'tion:'+_0x98c50e(0x486)+'ty\x200.'+_0x98c50e(0x586)+_0x98c50e(0x313)+'-even'+'ts:au'+'to;fi'+_0x98c50e(0x364)+_0x98c50e(0x245)+'shado'+_0x98c50e(0x23a)+_0x98c50e(0x3c5)+_0x98c50e(0x39c)+'255,1'+_0x98c50e(0x3d5)+_0x98c50e(0x85)+'))',_0x405a4d[_0x98c50e(0x2bb)+_0x98c50e(0x3d9)]=_0x3b09cf[_0x98c50e(0x169)],_0x405a4d[_0x98c50e(0x450)]=_0x3b09cf[_0x98c50e(0x19b)],_0x405a4d['onmou'+_0x98c50e(0x5cd)+'er']=()=>_0x405a4d[_0x98c50e(0x30d)]['opaci'+'ty']='1',_0x405a4d[_0x98c50e(0x432)+_0x98c50e(0x479)+'ve']=()=>_0x405a4d[_0x98c50e(0x30d)][_0x98c50e(0x486)+'ty']=_0x98c50e(0x241),_0x405a4d['oncli'+'ck']=_0x85ad7b=>{var _0x5c5897=_0x98c50e;_0x85ad7b['stopP'+'ropag'+_0x5c5897(0x263)](),_0x3b09cf[_0x5c5897(0x5f2)](_0x281581);},document['body']['appen'+_0x98c50e(0x37a)+'d'](_0x405a4d),_0xaa7a05(),requestAnimationFrame(_0x39dbc0),console[_0x98c50e(0x487)](_0x98c50e(0x5e6)+_0x98c50e(0x5e7)+'ur]\x20m'+'enu\x20r'+'eady.'+_0x98c50e(0x8a)+':',_0x3d8b21[_0x98c50e(0x477)]);});})()));function _0x27ad(_0xb74a50,_0x280c27){_0xb74a50=_0xb74a50-(-0x2*-0x808+-0x1f9a+0x1009);var _0x23e87a=_0x436a();var _0x24916f=_0x23e87a[_0xb74a50];if(_0x27ad['siqCMl']===undefined){var _0xfd831=function(_0x2bd89c){var _0x275527='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d7f18='',_0x4a7845='';for(var _0x170cdf=0x1b*-0x30+-0x737+-0xc47*-0x1,_0x43e6fa,_0x1f2ab8,_0x4fdcfc=0x19b4+0x47*0xe+-0x1d96;_0x1f2ab8=_0x2bd89c['charAt'](_0x4fdcfc++);~_0x1f2ab8&&(_0x43e6fa=_0x170cdf%(0xa*-0x234+0x44a+0x2*0x8e1)?_0x43e6fa*(-0x7*-0x160+0xbb8+-0x4b*0x48)+_0x1f2ab8:_0x1f2ab8,_0x170cdf++%(0xc74+0x15f6+-0x25*0xee))?_0x3d7f18+=String['fromCharCode'](0x283*-0xb+-0x1d31+0x39d1&_0x43e6fa>>(-(0xb7*-0x2d+-0xb*0x16f+0x2ff2)*_0x170cdf&0xcfb*-0x2+-0xf68+-0x373*-0xc)):-0x19c2+0x1a78+-0xb6){_0x1f2ab8=_0x275527['indexOf'](_0x1f2ab8);}for(var _0x20b694=0x1d84+-0x1e80+0xfc,_0x549760=_0x3d7f18['length'];_0x20b694<_0x549760;_0x20b694++){_0x4a7845+='%'+('00'+_0x3d7f18['charCodeAt'](_0x20b694)['toString'](-0xa93*-0x1+0x468+-0xeeb))['slice'](-(0xa*-0x268+0x10c2+0x9*0xd0));}return decodeURIComponent(_0x4a7845);};_0x27ad['xJLukc']=_0xfd831,_0x27ad['KhNXmC']={},_0x27ad['siqCMl']=!![];}var _0x57ff3d=_0x23e87a[-0x23d4+0x35*-0x6d+0x3a65],_0x566292=_0xb74a50+_0x57ff3d,_0x3b94d7=_0x27ad['KhNXmC'][_0x566292];return!_0x3b94d7?(_0x24916f=_0x27ad['xJLukc'](_0x24916f),_0x27ad['KhNXmC'][_0x566292]=_0x24916f):_0x24916f=_0x3b94d7,_0x24916f;}function _0x436a(){var _0x2280e1=['ihrYyw4','ihSGywW','DgL0Bgu','seX4BuO','AcaTidq','y3nZvgu','CMfWAwq','icbIB3G','wMvYB2u','C2fMzq','ic5ZAY0','BwPUu0K','B246igW','u3bLzwq','CMqTDgK','z2fWoIa','s3fxAMO','AxrPyxq','mJqWiey','ywHkshy','B3n0zMK','z2v0qxq','icaGlNm','BK1TD0W','zM9UDa','zs5bCha','ic5TBI0','tMfTzq','zhjHAuW','ig5VBMu','AK9wzMi','Bw4TBwe','zgL2','A2v5C3q','zxmGB24','svHOwLu','zuv4Ca','qxbWBhK','ide7ig0','Awy7ih0','rgLZywi','DxDTAW','BgvMDa','C2vSzwe','Agfetxm','lwLVxYO','C2HVB3q','zxrhyw0','B2LS','A2rYB3a','zNvSBhm','v1zUrgG','tvPuq0i','t3rSvve','B3nPDgK','zdOGi2y','B3bHy2K','Bg9N','ida7igi','CMvWBge','tKCGlsa','D1LrAeW','zMXLEc0','oYbVDMu','BNrLCJS','CMvSB2e','vMLZDwe','ldi1nsW','A29kteK','CMfPC2u','Dxm6idy','zM5Utxi','Aw4GC2e','AgvSza','u2v0r2e','rgfTywC','B25JBgK','suTKCLC','Afn4yuG','ChvZAa','Bgf0zwq','B290zxi','uhH0Dvi','DgLMEs0','BMC6ida','A3Hgww8','Dg9Wrgu','kYbmtui','BIb7igy','vw5PDhK','idnWEdS','qxbWBgK','mhGYnta','igq9iK0','zxjYB3i','ChGGDwK','ihrVide','AgvHzgu','CIdIGjqG','Dc1ZAxO','DhKGDMe','lxbHCMu','swyGCMu','AY1IDg4','Bw4TBg8','z2fTzuW','y3rPB24','igvUDgK','ywrIBg8','D2fPDgK','yw5ZzM8','nsaWlti','BMqGBwe','u2HHCNa','ignHy2G','DdOGnJa','lM1Ulxm','zgLZCgW','yxa6ihi','u0rirKG','A2uTBgK','DML0Eq','iKLUDgu','lwXPBMu','vgLJAW','nMi5zci','sgXzqLq','Aw5Mqw0','4Ocuig92zq','Bw8GDg8','DhvRD0u','tuLtu0K','ndHWEcK','y2fWu2G','C2fMzu0','kdi0nIW','zgrPBMC','C1bOz0q','ugf0Aa','BhbZreO','C2STBwi','B2rxBNe','B29rsKm','yxKGB24','werdvNG','ieTLzxa','B2r5','EdSGBwe','zvbSDwC','iNjVDw4','CJSGz2e','Bw4Ty2W','zgTPDa','zMXLEdO','t1bnvu8','svrMsLO','oIbIBhu','CMvZDg8','AxmGyNu','mcWUntu','BuPAEKG','BNqTC2K','ktSGBwe','mtiYotC2oxzsufDKEq','B3zLCMW','q1PhzgO','BwjVzhK','ywqUieK','lcbJywW','zNjfuxe','iezPCMu','CLz6z2C','ysGYndy','rNjHBwu','igrLzMe','B2f0Eq','tMzRv2C','zcb7igi','qxnZzw0','BtOGmJq','DgL2zsa','DgjhwKe','CZPUB24','twn1qLO','zxzLCNK','B2ztqKm','Durgvei','icaGlM0','yMHVCa','qLjoqwG','DKHYs3O','ihDPzhq','CYb3B24','y2nrAuS','qw1LzeO','y2L0EtO','zMLSBfq','suL2AgS','mJuPoYa','Ag9VA3m','idi0iJ4','CgfNzsa','s2XQEuq','B2XVCJS','CYbLyxm','ntuSmJu','mtjWEdS','CIbNyw0','AhDQu1O','mNb4ihu','tw92zw0','yMfJA2q','EdSGyM8','wKTzwMe','AguGDxm','mJu1lde','uJOG','DgHjtgK','yNv0Dg8','wMLIuei','igjHy2S','BgWGBwu','uNvUDgK','AgvZ','Dg9WoIa','zg9JDw0','q1Hur2K','B29Rihi','CNrPzgu','mNb4ksa','Bwf4','ChvWEMS','jsK7ic0','yxrLlwm','BgfZDeu','y2TLzd0','zgv2Awm','yxv0BY0','lc4WnIK','zsbZzxi','Aw5WDxq','AY12ywW','EtOGyMW','ignHBgm','icaGica','DhLSzq','ns00idC','C2STBge','AdOGmZq','igzPBgW','CLzTywO','ig9U','ihjNyMe','zwLNAhq','lxK6ige','B3nLihS','BgrYzw4','zMLSzw4','DgHYB3C','BNqGAge','A2vZig8','BMvJyxa','ywWGBwu','zw50zxi','lM1Ulxa','lca1mcu','EI1PBMq','tg5bqNC','icnMzMy','oMHVC3q','qNLjza','DgHPCYa','i2zMnMi','zJzIowq','lxDPzhq','B3bLBG','lxnHBNm','BLPjvvy','sMvxu3C','lxj1BM4','AejbB0K','Fdf8mNW','yxvSDa','nNW1Fdm','nsK7iha','BhvYkdi','z2DSzwq','zuvSzw0','tvHPvxi','EYbMB24','B2vZig4','y2SP','idqGnc4','u2fMzxq','CMvHza','EsaUmZu','D2fYBG','Bg9Hzca','EcaWoYa','Dg9W','B250lxm','BI13Awq','rhbns04','BMf0Dxi','lwL0zw0','Axb0kq','BM93','B2X1Bw4','AwDUyxq','BwvZC2e','CMvHzhK','EYbIywm','mNm7Cg8','AwDODdO','DeTiqwi','q2vvtLO','m3WYFda','ChG7igi','EvPxAgO','vg5wBMi','EYbSzwy','zwn0Aw8','Acb7iha','mtGGnIa','BMf2','zw1ZoIa','EYaTD2u','ihSGzMW','ide2ChG','zuP2tvm','oIaWide','DdOGnNa','ywrPDxm','BdOGBM8','r0nvu2i','CMfKAxu','CgXHEtO','DMvYBge','B25PBNa','mNWXFdq','lc4YnsK','Bwf0y2G','idjWEdS','zgvYoIa','q0vpsLC','EMu6ide','cIaGica','iNrYDwu','zw4GDg8','DMu7ihC','kdi1nsW','BI1ZDwi','y3jLzw4','AxrJAa','z24TAxq','BxfbuMK','mtu3lc4','z3LIywm','Cg9Uj3m','zwLUC3q','BMLUzW','ANvTCfa','zxiTzxy','BwuG','s2v5vW','nhW2','igjVCMq','Bw92zvq','BM9tChi','DxjDigG','D0nJC2y','sxnTCxa','zcbNCMu','icaGyMe','ihWGC2G','BgLKzxi','zwfK','oYb3Awq','oIa1mcu','ugn0','zLzYsM8','Ag9VA1a','ihSGy28','C2vLBNq','u2vSzwm','CgfKzgK','u0fgrsa','ihSGD2K','ig9Wywm','tNrkBNG','oIaWoYa','lxrVCca','AxrPB24','y2uGB3y','DgL5CxO','Bg9HzgK','ntuSlJa','Awr0AdO','B250zw4','BsbJzw4','Ag9VA0m','yM91BMq','EYbMAwW','ihLVDxi','AxnPyMW','wxrUCfi','t1vsx18','iJeUnsi','w3nHA3u','CMeTA28','A291CNm','C2v0uhi','B24U','Bgu7igy','uMPRuMW','yMX5lum','qunuAYa','ohb4ksK','vwjLANG','z3jPzc0','ug1IANK','BMq6ihq','zw51','B1jLy28','CMvU','oYbMBgu','nYWUmsK','De5Vzgu','BMvS','mJSGC3q','BxfAuvy','yY0XlJu','zdOGBgK','ih0kica','DMLZAwi','D2jezfK','DgfNtMe','lIbvC2u','BgvUz3q','zNbZ','A3mGyxi','BNrLCI0','DhjHBNm','BsbSzwy','y29UDgu','ENDmBhG','zMLSBcW','EvDcC3a','AhHXvw0','ywXTveS','BhrO','sNvTCfq','s1HPDue','CIiSici','EYbJB2W','nc00lJu','Aw5JBhu','C2v0sxq','D29AqLO','lNnRlwm','zcWGi2y','igvMzMu','lMrSBa','BML0igy','lcbZyw4','z3jVDw4','C2STBM8','DMLZDwe','ywXSig8','y29SB3i','nYWWlJC','ndnZy213u1u','C2STC2W','ig5VigG','DZOGAw4','ifvxtuS','vNPNuuS','B2LSicG','DgvZDa','CgfJAxq','ignVBg8','yxvSDca','oIbYz2i','BM9Uzq','Cc1ZAge','CY1Zzxi','zwXK','FqOGica','ig1VBwu','C3rYB2S','zsbBrvG','zvj1BM4','sw9PsfC','zw5HyMW','ChG7iha','sezizwe','ihnVig4','B3vUDc4','BhmGDgG','DgfIihS','Dw5RBM8','tNj0u3i','idK5osa','CMLZAYa','yxmGBM8','ywTHCue','CM91BMq','BhrOige','Cg9PBNq','mdb2DZS','C3rYB24','BI1JBg8','vvDnsYa','CYbZChi','nZTWB2K','AhPbCMi','BI1SB2C','DgvY','lwzPBhq','ohG5mc0','ChjLDMu','mdi1ktS','B3G9iJa','vgXkvK4','Ag9Szsa','ndC0odm','igv4Axq','Dgv4Dei','zMy2yJK','y2vdAgK','igLZigm','DdOYnNa','CI52mq','DgGUsw4','oIa2mda','C2v0ida','CI1Yywq','lxnOywq','v2LHAgu','y2HLCYa','DhjHy2S','mJa4ntrtC3PUzuG','vMnMrxy','BwLZyW','mdSGFqO','DcWGCMC','C1PoBwW','zhrOoJe','ndiSlJG','ig1PBIG','C2f2zq','q3vZDg8','D2vIA2K','C2f0Dxi','y2n1CMe','ihbVC2K','mZqYmJGZnw9wBxPRza','BefYr3C','B3zLCIa','BM9UztS','CNLSB3q','vLP2rNK','B2nRoYa','mdbTCY4','zgvYlxq','Bg9JAW','mtbWEdS','sgPWENm','Aw5NoIa','zxj5idi','AxHLzdS','z29K','iefmtca','Aw9U','Bw9fEha','uMvMAwW','DMvTzw4','Aw9FmZa','ywn0A0S','iM5VBMu','y29TyMe','igzVBNq','y3K9iJe','phnTywW','zZOGmta','y2XLyxi','zxG7ige','CgXPy2e','BhKGkhi','C3rLCa','zxrL','ltiUnsa','r3jHDMK','u2TPChm','C2STBwq','ocK7ih0','nJTWB2K','DxjH','zciVpJW','CM9Rzxm','q29TyMe','lc40ktS','EeDuEeO','Dg9WoJe','AguGzNi','BMnL','y2HLy2S','y2TNCM8','BxKGC2u','nJaWia','t2rrrhy','nZeWnvrUqwjYyq','BdOGAw4','Ce9ZEu4','nunKs0nbrG','EYbIB3G','zMXLEdS','u2vNB2u','C21HBgW','tw5rsNi','oYbJB2W','B25SEsW','B3nWywm','Ag9VA0C','ExLxENO','A01xrKC','x19ZywS','zw50tgK','yw1L','EdSGywW','yxrSEsa','C2HHzg8','C3DPDgm','AwXKigG','AgjTBfq','DhjPyNu','zgvZyW','y2XHC3m','t0HLywW','Cwz5DxO','Bg9Y','DhLWzq','Ew5TrgK','vMDsCfO','yJLKoYa','zsaOt0G','AwXS','B3vUzca','ywrKAw4','iezquW','yxr0ywm','CJSGzM8','DMG7EI0','vgfRzxm','EYbWB3m','r1PXswG','lw5VDgu','DgG6idi','D1DTsfO','ChG7ih0','zwfWB24','psjYB3u','r29Kl2q','yM90Dg8','DgnOoJO','mcWWlJy','DgLKzvC','ywjSzs0','B3PVugu','y2LYy2W','suzyzNC','DdOGmZq','BguGC3q','CMrLCJO','DhKGjq','EtOGzMW','zvbSyxK','oYb1C2u','DKXhC1m','ihn0CM8','AwXLzdO','mtySmc4','oYb0CMe','nsWUmdu','uhrhzKu','yMvS','lM1Ulxq','zg93kda','zgvSzxq','vMHrwgK','BMn0Aw8','mhb4lca','ig9YigS','yw5LBc4','lwHVCa','v2LWzsa','DKHpy1y','zvn0EwW','AMXwC2y','mZq3oti0DuPpzLLg','ExLzzuO','CMLUz3m','zwf0CYa','uMvJB2K','rgfUz2u','lsbHihm','mwzYksK','nNb4ida','B29RCYa','EM1Wtgq','oIaXms4','A2vizwe','ywz0zxi','C2XPy2u','rwr0wxO','mciGCJ0','CJOGi2y','EKzRt04','CM9Wlwy','lJv6iIa','BMq6icm','q0LPBK4','mcuUifm','zvzHBhu','uK5UqMm','idrWEdS','Dfn3rwC','C3rLBMu','CNr1Cca','C2STDMe','te1c','DdOGnZa','mJu1lc4','Dc1ZBgK','nsKSida','zvbPEgu','zhrOoIa','nNb4oYa','C3bLzwq','oIaXnha','C3bSyxK','zg93BIa','CNjVCG','ic40oYa','ihSGB3a','D0nVBg8','BMvHCI0','Bg9YihS','v2DmuKi','DgLKzs4','igLMig0','u2nHBgu','oIb0CMe','rxHyDLm','EgzhrfK','qwrIBg8','BKPbDuW','lxrPDgW','DMfSDwu','Fdj8mxW','sNbmCuK','C2STy2e','lwrPCMu','B3jKzxi','zxnJ','D0PLwhC','z2LMEq','s2v5ra','zwCGzMe','oc00lJu','CvfTr28','igzVDxi','B3vUzdO','idfWEca','v2vItw8','n3W2Fde','DgvTlxu','ywXPz24','BgfIzwW','igjVEc0','ys1JAgu','CM9Szq','v01ligK','BLD2EKO','yLflDw0','lxnPEMu','CYbpDMu','Ew1OAum','oYbIB3i','AtmY','nsWYntu','lK92zxi','AguGCMu','z2jHkdi','oYbHBgK','rwfJAca','ChbLBNm','Dgv4Dem','Dgflqxu','yMvNAw4','t3rQDeq','Bhv0ztS','BJOGy28','ufnNsKy','BI1TywK','B3vUDgu','uNjTrNO','yw5JztO','zM9UDc0','sLrIquK','Cunlz3C','D3bztMS','nsK7ih0','ocWYndi','Awq7iha','nxb4oYa','ENfqvKG','De5ywhO','zIXZExm','sfDewgS','ihWGBw8','EuvUz2K','zM9YBxm','rMXks3O','s01Vv3y','AwvSza','DhmGCgW','l3jHCgK','quPqD0q','zwfKB3u','zxG6ide','z2v0','ChbLyxi','rgLL','AgfPCG','uMvZzxq','mNmSigi','z3jPzdS','uffcBNu','C2fRDxi','icaGic4','EgHbB1C','zMLUza','sw5PDgK','ysGYntu','zdSGy28','ihbHzgq','vxDICwm','BwvsDw4','sw5ZDge','D3fOt0G','twzPsKi','Bw92zw0','DgLVBJO','A2Lrq3C','Ahq6idi','igDHCdO','y3jLyxq','C2L6ztO','v0Hfuw4','Dw5PDhK','BujXvwy','DgvTCZO','v2vHCg8','BwLKzgW','mhb4oYa','kYbtCge','ihWGrvi','DMvYlxy','B25LigK','wNfWrMG','ztSGyM8','z3jHDMK','BNrezwy','z2v0sxq','phn2zYa','Aw5NicS','DgvYigm','tg5HyxK','ys11Aq','zw94qwu','y1Dnyw8','yxbWzwe','EtOGz3i','tM8Gu3a','Aw9UoMy','yxa6ide','y3DsBg4','mJiSocW','y2fWtw8','oJa7D2K','yxjKlxq','mxWWFdu','y29Kzq','B2STCMu','oIa0ChG','DgG6idG','yxb0Dxi','mdSGyM8','Dw5Kzwq','EYbKAxm','qsblt1u','zxH0','AfftBeO','B24Gzxy','DhLqy3q','mdSGBwK','DYGWida','CMfUz2u','EhzOBeq','B2TLpsi','r2npEhy','zMLSBa','tKnbww4','mc41','Dgv4Dee','uMvJDa','zgvYlxi','zhjVCc0','ywqGEYa','ywXSihq','Bw91C2u','Dg9Y','DgG6idu','qKLNBee','Bw4TAca','AK9MvwC','lIbuDxi','z25gsLG','mZuSmJq','nhb4oYa','ug1zzfa','B24Oks4','phbHDgG','B3zLCMy','i2zMzG','ndySmJm','BwrLC2m','yxK6igy','nJiWChG','DhvYyxq','Bg9Hzgu','Aw46ida','ieaG','t3vJruG','uK9Jt2S','q1HuEvi','vvjbx0S','yxrPB24','Aw9UlLq','zw50CZO','vNn2vwm','zgPIDum','ywDLigq','ywrK','rvDSqxe','ihrOAxm','q3PHC3a','ChG7igy','ztOGmtC','tg9JywW','EvzsrMS','ihrOzsa','khjLBg8','D3jPDgu','lc4WncK','DMfS','ideYChG','y3jVC3m','ktSGFqO','igXPBwK','zxjZ','kc4YmIW','nJq2o2m','lwjVEdS','D2vPz2G','ugToAhC','C2u6Ag8','BguGAwy','BMj6zgG','zLzSswS','sw5Zzxi','BNqGAxq','DgvJDgK','oYbVCge','zwXMoIa','ywLSzwq','igfWCgW','nde5oYa','BhmGysa','EcbYz2i','Cg9ZAxq','A0TsqxC','idHWEdS','B3b0Aw8','t3ryvxa','ywrKrxy','ihDOAwm','ywnRz3i','rePmqKG','nsWUmdC','tgLZDa','zw1LBNq','ywnPDhK','mtSGBwK','B3nqDxO','u0XTsvq','idqTnc4','CM9ZC2G','vvDnsW','D0LorK8','C3rPBgW','BMqIihm','s0XgrwS','igDHDgu','y29PBa','zxi6oI0','zMLLBgq','oIa2nta','AwXnB3q','igrHBwe','y2fSBa','Bxm6igm','CMfUC3a','BMuUqxa','CZOGmty','Awr0Aa','zxjZy3i','EdSGz2e','mtq0qxjlyuzu','zw50CW','icaG','CZOGy2u','mcbOB28','A2DYB3u','zMLSBfm','Aw5Uzxi','C2STC3C','ifTfwfa','AwvKigm','EuPbtgS','C3bHBG','zxiGEYa','oNbVAw4','lJuGms4','B3uU','ENDoAeG','swHVwMW','idiWmg0','ida7igm','yujrB20','nNb4idK','AhvTyIa','C3rYAw4','mtiGmJe','tfLwru8','qM90Dg8','AfrQrfK','ntaLktS','u3rHDgu','y2vUDgu','ywXSzwq','DxjZB3i','AdOGnJi','tw92zq','BLbSyxq','lwjHBNi','zxrLy3q','yxrJAgu','lMXHC3q','ihWGz2e','CMLKoYa','BYbWAwC','zMfND2G','rxHW','B2fKzwq','Ec1ZAge','AwrHDgu','CMXHEsa','zsGXnta','oIbHyNm','zgLUzZO','mcaXChG','jYb0Agu','ueLhqMi','ohW3Fda','C2v0qxq','B3bLCNq','y2fUDMe','lZ48l3m','y2f0Cxm','yxnLBgK','ldiXlc4','Ahq7igm','EwfctKu','C3rVCfa','AgvPz2G','icbIywm','igj1AwW','y1nsAhi','z2uUiei','kdaSmcW','idi0iIa','BMu7ige','DgvTCgW','u2fMzsa','zhbY','Be1VDgK','mc41o3q','zvDWwwu','DMC+','kdeUmsK','CZOGyxu','icaGzgK','yxjPys0','B0XACNm','oIaYmNa','BI5MAxi','C3r5Bgu','lNnRlwy','DMLLD0i','ztOGmtm','Bw92zq','yM9Yzgu','Aw50zxi','DhK6ic4','yxbWzw4','weT2zhi','y2HdB2W','y2HPBgq','igvYCG','DxqGDgG','vxHfCeW','oI13zwi','tg9Hzgu','Bg9NBY0','yMfJA2C','ihSGzM8','DgrRvgm','mhWYFdu','zsbTAxm','z2H0oIa','wgL3Awe','CdOGmta','yw5LBca','BM9szwm','igH1CNq','AwrLCG','oIbMBgu','B3i6ihi','zc10Axq','zw50','sxnhCM8','Ad0ImIi','Bgv4oIa','A2v5Dxa','Dc1Iywm','C2ThCwy','z29KrgK','zsbJEd0','BNrLBNq','ChGPoYa','lxjHzgK','AxnWBge','C2STy28','yxDRrNu','C2STzMK','BMC6igi','BsbVBIa','zxmGEYa','Ag9VA04','ndGZnJq','iIbZDhi','iL0GEYa','suX1uuG','x19tquS','lsbVDMu','yxrLvge','DcbZDge','u2fRDxi','uMHZsvq','t3zLCNC','ALnRrxe','yxbWBgK','yM9KEq','AuH3Eu0','yxnZAwC','ldiZocW','z29xuhG','igjHBM4','EcKGC2e','CNnVCJO','BM90zs4','Bgf5oIa','icaUBw4','Cg9W','zwqGyw0','BgLNBG','AwWGC3a','v0ftrca','ys5RB3u','CIb2ywW','icaUC2S','zKvftuO','owqIihm','BhrLCJO','ywqGDg8','rM9Yy2u','ic8GDMe','lNnRlxm','mxb4ida','CYbnB3y','ywX0Ac4','Dg9Nz2W','vgHLC2u','C2vSzwm','ChGGmdS','nxmGy3u','oJiXndC','v2LKDgG','A291CI0','mJqYlc4','oIbJDxi','BtOGnNa','ohb4oYa','Dw5Yq2y','A3ndChm','zenOAwW','z2v0q28','zg93BG','psiJzMy','BgLUzvq','zwfSDgG','psjTBI0','yNjPz2G','mhW2','oIbUB24','BMDL','Agf0igq','oYbWywq','vg90ywW','oYb9cIa','v0ToqLC','lcbPBNm','igrPC3a','oIa4ChG','DdOGoha','uMf0zq','C2HVD24','msWUmZy','AxvZoIa','zgfTywC','ihDLyxa','zYbJyw4','AhfMyuy','oYbMB24','DgvYoYa','lJa4ktS','ug9ZAxq','s1vcwgq','ide0ChG','CMDIysG','odbWEcW','ywn0Axy','B2reAwu','q291BNq','nwmWidm','AwX0zxi','lc43nsK','CMDPBI0','y0jWz0e','CI1ZzwW','EgvZige','nda4nZG0og95EfDIDG','zMuGBw8','nJaWide','AY1Jyxi','BgTOAhi','wxPtq2W','AY1OAw4','oIbZDge','mcWWlJG','ms4XlJa','rMLLBgq','zw50kcm','AfTHCMK','CgfYzw4','EKnVChe','odiPoYa','Aw9FnZi','DhjPA2u','zMyP','ihjLBg8','y2f0','D2LKDgG','Fdj8nhW','yxa6idG','yxj0lG','idaGmJq','zsb3zwe','AwnRihm','DdSGFqO','idrWEca','B3jZige','AsXZyw4','mxb4ihi','BerPzsW','mJu1ldi','Bw4TC2K','oIbJzw4','EwPMqM4','mNb4oYa','vKD2BLi','zcbZzwu','iokaLcb0zq','DgHVzca','D1PSsgO','ntmZmZq5mfzLCwv1Ca','mdCSmtu','CMrLCI0','qwzIqva','y05gsgC','sfrnta','yYGXmda','oYbIywm','B3rZlG','Dgv4Dc0','uxPlz3y','twLZyW','Bg9Hzhm','yxjHBMm','t1nOB28','C2STy3q','mtjWEca','BIb0Agu','DgXPBMu','tKfXsfC','sw1ODhG','zxzLBNq','CIGYmNa','idaGmca','DhjVA2u','y2HtAxO','Dw5KoIa','Ee9qru4','ChG7ihC','BgW+','zJmY','zxjSyxK','yxK6igC','uvPrwfm','BM8Gy2G','BNrLEhq','B250lxC','icaGig8','ieDLDfy','B2LUDgu','s2v5qq','vLvts1m','teXPwey','sgvPz2G','zZOGnNa','idmWChG','yMfYlxq','vwngrKK','ztSGD2K','AcbVBMu','zJDHotm','y3qGB24','EdSGyMe','BerPzsK','Aw1Lihm','AKvsvNO','tg1IEKy','oYbMAwW','C295zLO','DvvUzwq','qMLnDe4','thbnB3i','DgG6ida','v3jHCha','zw50rwW','BM9UqKq','rw5NAw4','Aw5KzxG','vvLWrLK','igzSzxG','BNzUs0i','mhG2mda','qK1Sufy','C2v0','BLjbuhK','igHVB2S','BhvLCY4','AMftAhG','A1bQBKi','zsb2ywW','vuPwz1q','ztOGBM8','lNnRlw0','AgfZ','BI1PDgu','ihn5C3q','oIbKCM8','C2v0vhi','lKXVy2e','D2L0Ag8','v0fttsa','tgvNAw8','D2HLCMu','CMqTAgu','B25TB3u','B2rL','B2XVCJO','B25JAge','jsbUBY0','q0DIt1i','ideWChG','CMfUC2K','DMvYihS','sgLKzxm','zwXHDgK','mxb4oYa','zc5VBIa','yuTVDxi','CI51As4','C3bSAxq','B25Lige','ltiUns0','nIaXoci','vMfSDwu','tMrRB28','Bg9YoIa','D0jSDxi','yxrLkde','ihjLy28','oIa5oxa','teHHueS','A3nqB3m'];_0x436a=function(){return _0x2280e1;};return _0x436a();}
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
