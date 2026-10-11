// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.7
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
function _0x3039(_0x2c831f,_0x53b4fc){_0x2c831f=_0x2c831f-(0x1*0x528+-0x1927+0x1586);var _0x4d8476=_0x545c();var _0x253c2b=_0x4d8476[_0x2c831f];if(_0x3039['jtgvvn']===undefined){var _0x3a7df4=function(_0x46153f){var _0x5eee30='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5c16d7='',_0x161c4b='';for(var _0x3e7b54=0x1cc+0xb5a+-0xd26,_0x204990,_0x1be408,_0x5af39e=0x1*-0x1ae7+0x14d1+0x616;_0x1be408=_0x46153f['charAt'](_0x5af39e++);~_0x1be408&&(_0x204990=_0x3e7b54%(0x1edc+0x810+-0x26e8)?_0x204990*(0x1331*0x2+-0x2*-0x1286+-0x4b2e)+_0x1be408:_0x1be408,_0x3e7b54++%(0xa9*0xb+-0x2437+0x18*0x135))?_0x5c16d7+=String['fromCharCode'](0x1f31+-0x690+-0x17a2&_0x204990>>(-(0x45c*0x2+0x14c1*-0x1+0xc0b*0x1)*_0x3e7b54&0x87e+0x473+-0xceb)):-0x1*0x1cd3+0xb0b*0x2+0x6bd){_0x1be408=_0x5eee30['indexOf'](_0x1be408);}for(var _0x9ac7d1=-0x24e6*-0x1+0x200*0x10+-0x44e6,_0x2ac364=_0x5c16d7['length'];_0x9ac7d1<_0x2ac364;_0x9ac7d1++){_0x161c4b+='%'+('00'+_0x5c16d7['charCodeAt'](_0x9ac7d1)['toString'](-0x13f*-0x7+0x85b+-0x1104))['slice'](-(0x1*0x1a41+-0x7*-0x24c+0xc5*-0x37));}return decodeURIComponent(_0x161c4b);};_0x3039['XlTMBa']=_0x3a7df4,_0x3039['eCOBRo']={},_0x3039['jtgvvn']=!![];}var _0x1b6ef6=_0x4d8476[-0x21f1*0x1+0x1435+0xdbc],_0x220f96=_0x2c831f+_0x1b6ef6,_0x5e70cc=_0x3039['eCOBRo'][_0x220f96];return!_0x5e70cc?(_0x253c2b=_0x3039['XlTMBa'](_0x253c2b),_0x3039['eCOBRo'][_0x220f96]=_0x253c2b):_0x253c2b=_0x5e70cc,_0x253c2b;}(function(_0x1440bb,_0x4a6669){var _0x4b8739=_0x3039,_0x3e7464=_0x1440bb();while(!![]){try{var _0x163ca3=-parseInt(_0x4b8739(0x529))/(-0x17*0x49+-0x164a+0x1cda)*(-parseInt(_0x4b8739(0x40e))/(0x2*-0x930+0x1c3*-0xb+0x7*0x565))+parseInt(_0x4b8739(0x568))/(0x1ded*-0x1+-0x2209+0x3*0x1553)*(-parseInt(_0x4b8739(0x5c6))/(-0x3*0x98b+-0x1*0x25c+-0x1*-0x1f01))+-parseInt(_0x4b8739(0x5a1))/(0x41b*0x2+-0x998+0x167*0x1)+parseInt(_0x4b8739(0x5b0))/(-0xb16+-0x277+0xd93)+-parseInt(_0x4b8739(0x42c))/(0x1cd*-0xd+-0xde7*-0x1+0x989)+parseInt(_0x4b8739(0x2e1))/(0x1e35+-0x9cd+-0x1460)+-parseInt(_0x4b8739(0x23c))/(-0x16c8+0x2f6*0x7+0x217*0x1)*(-parseInt(_0x4b8739(0x332))/(0x183f+-0x8f1+-0x3d1*0x4));if(_0x163ca3===_0x4a6669)break;else _0x3e7464['push'](_0x3e7464['shift']());}catch(_0x190a3f){_0x3e7464['push'](_0x3e7464['shift']());}}}(_0x545c,-0x275*-0x3a1+0xf637*0x9+0x75c3*-0x9),((()=>{'use strict';var _0x25fb97=_0x3039,_0x40b013={'qKvLe':_0x25fb97(0x2b4)+'a.kou'+_0x25fb97(0x507),'rnpXo':_0x25fb97(0x682),'tvgAg':_0x25fb97(0x3fd)+'wn','sUVza':function(_0x30c793,_0x248f20){return _0x30c793+_0x248f20;},'YtfPU':function(_0x4b414b,_0x475a33){return _0x4b414b+_0x475a33;},'IBroR':_0x25fb97(0x560),'jUoIb':function(_0x564882,_0x5c4a68){return _0x564882(_0x5c4a68);},'MaIAr':'VQYYV','AWPgE':function(_0x2218cd,_0x3cb433){return _0x2218cd===_0x3cb433;},'XEBdO':'movem'+_0x25fb97(0x4b9),'luIJG':'f32','sddch':_0x25fb97(0x1b0),'YIRCK':function(_0x1317ee,_0x25ea96){return _0x1317ee!==_0x25ea96;},'tWdXE':_0x25fb97(0x344),'FSvUZ':function(_0x1bd4c3,_0xbad0d1){return _0x1bd4c3!==_0xbad0d1;},'bVclN':'u32','uSBkJ':function(_0x4a9dfa,_0xb93da9){return _0x4a9dfa*_0xb93da9;},'asQQn':_0x25fb97(0x4d2)+'-sans'+'-seri'+_0x25fb97(0x1e6)+'tem-u'+_0x25fb97(0x46e)+'s-ser'+'if','fuDwz':'rgba('+'255,2'+_0x25fb97(0x3f0)+'0,0.5'+'5)','iEEpt':function(_0x43e99c,_0x4c6fbe){return _0x43e99c+_0x4c6fbe;},'UJhEn':function(_0x32128a,_0x37a1eb){return _0x32128a-_0x37a1eb;},'QxekO':function(_0xc84d9b,_0x582de9){return _0xc84d9b/_0x582de9;},'jKoZV':function(_0x39b7b0,_0x13ae53){return _0x39b7b0===_0x13ae53;},'jlPFs':_0x25fb97(0x65e),'kaEYI':function(_0x30ab50,_0x252e06){return _0x30ab50+_0x252e06;},'zXXhX':function(_0x25407a,_0x211819,_0x6fe9b7,_0x4b1251,_0x530472,_0x2dcac6,_0x2a72ec){return _0x25407a(_0x211819,_0x6fe9b7,_0x4b1251,_0x530472,_0x2dcac6,_0x2a72ec);},'UQKWf':function(_0x5a779d,_0x3c0635){return _0x5a779d+_0x3c0635;},'mhzfo':function(_0x5276eb,_0x371a5e){return _0x5276eb+_0x371a5e;},'TQoKs':function(_0x2b731f,_0x12c656){return _0x2b731f+_0x12c656;},'VtAdi':function(_0x1d58eb,_0x156b1a){return _0x1d58eb+_0x156b1a;},'fohKK':function(_0x143789,_0xa0b48f){return _0x143789+_0xa0b48f;},'vgzJh':'mouse'+'1','rSExe':_0x25fb97(0x700)+'3','tqLcx':function(_0x51c445,_0xec1dc6){return _0x51c445+_0xec1dc6;},'mmaCx':function(_0x5a4f13,_0x55980e){return _0x5a4f13+_0x55980e;},'MFdTB':function(_0x53334d,_0x384bce){return _0x53334d+_0x384bce;},'MPtgf':function(_0x4be883,_0x2dc187){return _0x4be883(_0x2dc187);},'qRKMG':'\x20CPS','hehGW':_0x25fb97(0x6d3)+_0x25fb97(0x47b)+'ur]\x20h'+'ook\x20r'+_0x25fb97(0x339)+'iled:','UEgUv':_0x25fb97(0x6f5),'LHjjQ':function(_0x24b6e3,_0x1fb224,_0x55245d,_0x50018a,_0x1e1487){return _0x24b6e3(_0x1fb224,_0x55245d,_0x50018a,_0x1e1487);},'JypWY':_0x25fb97(0x40a)+_0x25fb97(0x276),'UhmIM':_0x25fb97(0x25b)+'e','JpiRR':'Sakur'+_0x25fb97(0x1ec)+_0x25fb97(0x377),'dPvKl':function(_0x4dd45d,_0x5543b6){return _0x4dd45d!==_0x5543b6;},'BEROa':function(_0x18cd7f,_0x17b15c){return _0x18cd7f/_0x17b15c;},'wNGlx':function(_0xc404b5,_0x3c9e50){return _0xc404b5(_0x3c9e50);},'HxNgY':function(_0x15a7dd,_0x43a106,_0x3a6296,_0x6b21d8,_0x46b004){return _0x15a7dd(_0x43a106,_0x3a6296,_0x6b21d8,_0x46b004);},'ZSRHe':function(_0x120220,_0x3a7367,_0x5eb873,_0x443cad,_0x291f58){return _0x120220(_0x3a7367,_0x5eb873,_0x443cad,_0x291f58);},'BOLkY':function(_0x39ddcd,_0x7e2e37,_0x8866bf,_0x536cf3,_0x43c3fb){return _0x39ddcd(_0x7e2e37,_0x8866bf,_0x536cf3,_0x43c3fb);},'ZNwlO':function(_0x3a603d,_0x4c9692){return _0x3a603d<_0x4c9692;},'FCxdC':function(_0x353a5a,_0x69c141,_0x428325){return _0x353a5a(_0x69c141,_0x428325);},'ssvNE':_0x25fb97(0x188),'uomMK':function(_0x583b5d,_0x4ff428,_0x476d7d,_0x6e865a,_0xac8212){return _0x583b5d(_0x4ff428,_0x476d7d,_0x6e865a,_0xac8212);},'KAGyx':'i32','VLxmF':function(_0x13a102,_0x65ee35,_0x59394f,_0x2c7dec,_0x49e661){return _0x13a102(_0x65ee35,_0x59394f,_0x2c7dec,_0x49e661);},'KXFrf':function(_0x37991c,_0x5b92a9){return _0x37991c===_0x5b92a9;},'fjAaE':_0x25fb97(0x61e),'EpwkN':_0x25fb97(0x6f4),'gyjQT':function(_0x365b07,_0x44fa9e){return _0x365b07===_0x44fa9e;},'SrFHc':function(_0x2aed53,_0x1c360a){return _0x2aed53+_0x1c360a;},'Ywsqw':function(_0x46512a,_0x4b471c){return _0x46512a>_0x4b471c;},'xUmKM':_0x25fb97(0x700)+_0x25fb97(0x2d4),'QTLOe':_0x25fb97(0x2f0),'WrEEe':_0x25fb97(0x346),'VSrRd':_0x25fb97(0x6f7),'MJKzZ':function(_0x2545b8){return _0x2545b8();},'fJuUZ':'OrUOJ','RDhLn':function(_0x87b781,_0x2ed226){return _0x87b781||_0x2ed226;},'DDAKq':'600\x201'+_0x25fb97(0x296)+_0x25fb97(0x42f)+_0x25fb97(0x269)+_0x25fb97(0x29e)+'ospac'+'e','MYeKJ':function(_0x3668fc,_0x578942,_0x25267e){return _0x3668fc(_0x578942,_0x25267e);},'Ilnsa':'SAKUR'+'A\x20KOU'+_0x25fb97(0x5b9)+'1','xmLtA':function(_0x3f959f,_0x2350f0){return _0x3f959f(_0x2350f0);},'hBMVK':'\x20FPS','mEUmy':'rgba('+_0x25fb97(0x432)+_0x25fb97(0x643)+_0x25fb97(0x3d1)+')','IHkeD':_0x25fb97(0x270)+'n','lmxsL':'sk-co'+_0x25fb97(0x50d),'ludZp':'2|1|5'+'|4|3|'+'0','odJID':_0x25fb97(0x352)+_0x25fb97(0x6c8),'Lmsmx':_0x25fb97(0x611),'GYpME':_0x25fb97(0x679),'OUaGj':_0x25fb97(0x521)+'rd','WBAEv':'\x20on','BlKFX':_0x25fb97(0x521)+'rd-he'+'ad','wyuNz':'4|7|6'+_0x25fb97(0x5f8)+_0x25fb97(0x4e0),'FhLKp':_0x25fb97(0x526)+'esc','LYCTc':'ZBpFr','hNCgX':function(_0x4b51c1,_0x2938ae,_0x3be34e,_0x1ed454,_0x51f227,_0x777005){return _0x4b51c1(_0x2938ae,_0x3be34e,_0x1ed454,_0x51f227,_0x777005);},'fQuuV':_0x25fb97(0x6ba)+'\x20Reco'+'ilMot'+'ion.T'+'ick\x20s'+_0x25fb97(0x40c)+_0x25fb97(0x3ad)+'il\x20sp'+_0x25fb97(0x63f)+'\x20neve'+_0x25fb97(0x659)+'ance.','KhLSu':_0x25fb97(0x4f9)+_0x25fb97(0x494)+'P]','eiexk':_0x25fb97(0x2fa)+'rites'+'\x20Over'+'tideW'+_0x25fb97(0x6ae)+_0x25fb97(0x2ad)+_0x25fb97(0x6c5)+_0x25fb97(0x5e9)+'le\x20if'+_0x25fb97(0x417)+'serve'+'r\x20val'+'idate'+'s.','mCWDW':function(_0x5dd645,_0x463900,_0x399712,_0xe5421a){return _0x5dd645(_0x463900,_0x399712,_0xe5421a);},'jRQdA':'Damag'+'e\x20val'+'ue','tpNNR':function(_0x20d197,_0x2419d7,_0x494a50,_0x4ef851,_0x1e7b0f,_0x1a88c6){return _0x20d197(_0x2419d7,_0x494a50,_0x4ef851,_0x1e7b0f,_0x1a88c6);},'ZotbK':'move','ivmZL':function(_0x157552,_0x53a2ed,_0x2fb782,_0x447769,_0x4db368,_0x24e511){return _0x157552(_0x53a2ed,_0x2fb782,_0x447769,_0x4db368,_0x24e511);},'dIQET':'Speed','usrQl':'Scale'+_0x25fb97(0x531)+_0x25fb97(0x271)+'\x20Move'+'ment\x20'+'speed'+_0x25fb97(0x2e9)+_0x25fb97(0x3c8)+'us\x20ac'+'celer'+_0x25fb97(0x601)+'.','Xokdk':_0x25fb97(0x5dd)+_0x25fb97(0x216)+'ult','piHbn':function(_0x49fa02,_0x35c38c,_0x139c17,_0x23c2eb,_0x49cda7,_0x4a8d30){return _0x49fa02(_0x35c38c,_0x139c17,_0x23c2eb,_0x49cda7,_0x4a8d30);},'tIqwS':_0x25fb97(0x1cb)+'ty\x20%','lSrma':function(_0x3fad95,_0x3fee40,_0x424607,_0x5a2a77,_0x282098,_0x4b57e8){return _0x3fad95(_0x3fee40,_0x424607,_0x5a2a77,_0x282098,_0x4b57e8);},'deaDU':_0x25fb97(0x355)+_0x25fb97(0x44d),'QwIxw':_0x25fb97(0x614)+'rokes','ijXHj':'WASD\x20'+_0x25fb97(0x32a)+_0x25fb97(0x422)+_0x25fb97(0x665)+'ce\x20ov'+_0x25fb97(0x31d)+'.','YsCDe':function(_0x43206a,_0x5d2811,_0x2b0904,_0x14db1f,_0x3c4395,_0x53bd12){return _0x43206a(_0x5d2811,_0x2b0904,_0x14db1f,_0x3c4395,_0x53bd12);},'dUAWc':function(_0x273d60,_0x5b28b0,_0x523ce0,_0x45dc96){return _0x273d60(_0x5b28b0,_0x523ce0,_0x45dc96);},'yvzbt':function(_0x19dce2,_0x4c6aac,_0x43917d,_0xc9eb13){return _0x19dce2(_0x4c6aac,_0x43917d,_0xc9eb13);},'lhVYd':function(_0x18e603,_0x33ccf8,_0x103d50,_0x54b48a,_0x179c6f,_0x499f6e){return _0x18e603(_0x33ccf8,_0x103d50,_0x54b48a,_0x179c6f,_0x499f6e);},'KGySF':function(_0x48ed43,_0x879a4e,_0x18c184,_0x12e41c,_0x12ded8,_0x45a3a2){return _0x48ed43(_0x879a4e,_0x18c184,_0x12e41c,_0x12ded8,_0x45a3a2);},'amNhD':_0x25fb97(0x6af),'bexjK':_0x25fb97(0x33e)+'ck','uGggt':'Hides'+'\x20kour'+'-io_*'+_0x25fb97(0x4e5)+'er\x20sl'+_0x25fb97(0x203),'qgAws':'Takes'+_0x25fb97(0x677)+_0x25fb97(0x626)+_0x25fb97(0x5c9)+_0x25fb97(0x2b6)+'en\x20to'+'ggled'+'.','craEL':'Skips'+'\x20UWMK'+_0x25fb97(0x1c7)+_0x25fb97(0x4b4)+'—\x20no\x20'+'WASM\x20'+_0x25fb97(0x43a)+'.\x20Use'+_0x25fb97(0x5bc)+'\x20if\x20m'+_0x25fb97(0x586)+_0x25fb97(0x58e)+_0x25fb97(0x1c2)+_0x25fb97(0x544),'DyMtz':function(_0x8c2a0b,_0x368269){return _0x8c2a0b(_0x368269);},'sFzNM':_0x25fb97(0x371)+_0x25fb97(0x487)+_0x25fb97(0x5c9)+_0x25fb97(0x1c1)+'f\x20mat'+_0x25fb97(0x62c)+_0x25fb97(0x6a0)+_0x25fb97(0x5f2)+_0x25fb97(0x5f5)+'de,\x20t'+'he\x20fr'+'eeze\x20'+_0x25fb97(0x66f)+'ok-re'+_0x25fb97(0x386)+'\x20—\x20te'+'ll\x20me'+_0x25fb97(0x417)+'hooks'+'-appl'+_0x25fb97(0x3f2)+'ount.','KCRcQ':_0x25fb97(0x5e6)+'risk\x20'+_0x25fb97(0x1d1)+'hes','MLwBn':'god\x20('+'OHeal'+_0x25fb97(0x70c)+'itiat'+_0x25fb97(0x465)+_0x25fb97(0x233)+'h)','hifuw':_0x25fb97(0x48a)+_0x25fb97(0x329)+_0x25fb97(0x5ce)+'.Loca'+'lDie)','QKDhZ':'noRec'+_0x25fb97(0x468)+_0x25fb97(0x3ea)+'lMoti'+_0x25fb97(0x496)+_0x25fb97(0x265),'jntLz':'Dange'+'r','dvRfg':_0x25fb97(0x3d6)+_0x25fb97(0x393)+_0x25fb97(0x596)+'ver-v'+_0x25fb97(0x1da)+_0x25fb97(0x70d)+'ces.','wwKbT':_0x25fb97(0x4fb)+'t','ojxba':_0x25fb97(0x27b)+'S','vrvZT':_0x25fb97(0x672)+'r','lGakM':function(_0x2ef86c,_0x32be53){return _0x2ef86c-_0x32be53;},'WBGap':function(_0x1e77ff,_0x18038f,_0x10f9cf,_0x7ccbab,_0x36a76b,_0x43ee48,_0x2cb45b){return _0x1e77ff(_0x18038f,_0x10f9cf,_0x7ccbab,_0x36a76b,_0x43ee48,_0x2cb45b);},'ZJfWY':_0x25fb97(0x662),'SYIga':function(_0x250153,_0x526ea3,_0x292816,_0xdb634f,_0xda4acb,_0x4407a5,_0x2dd0ae,_0x18977e){return _0x250153(_0x526ea3,_0x292816,_0xdb634f,_0xda4acb,_0x4407a5,_0x2dd0ae,_0x18977e);},'gFxWG':function(_0x52bb01,_0x11109c){return _0x52bb01*_0x11109c;},'DQTTD':function(_0x2343d4,_0x4645f7){return _0x2343d4<_0x4645f7;},'IcKDD':'TYOiZ','QAmrG':_0x25fb97(0x6e0)+'nge','HqwyL':'sk-sl'+'ider','MwfEG':_0x25fb97(0x1f8)+'l','sTIpg':_0x25fb97(0x431),'Cydvy':'SAFE\x20'+'MODE\x20'+_0x25fb97(0x360)+'rlay\x20'+_0x25fb97(0x519)+_0x25fb97(0x280)+_0x25fb97(0x70b)+_0x25fb97(0x26a)+'ad\x20to'+_0x25fb97(0x63a)+')','qamGh':function(_0x2c38f8,_0x5f55e4,_0x57ddfe){return _0x2c38f8(_0x5f55e4,_0x57ddfe);},'vLXiv':_0x25fb97(0x317),'oWTlQ':_0x25fb97(0x6be),'SHSMT':_0x25fb97(0x481),'mAEdp':function(_0x317c2c){return _0x317c2c();},'CEspd':function(_0x28788e,_0x317747){return _0x28788e===_0x317747;},'pkXSb':function(_0x5bdf1a,_0x44de1a){return _0x5bdf1a===_0x44de1a;},'XsToo':_0x25fb97(0x44c),'jeYBb':_0x25fb97(0x3dc)+_0x25fb97(0x2a2)+'-\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0x25fb97(0x70b)+_0x25fb97(0x26a)+_0x25fb97(0x6e1)+'\x20exit'+')','AbRDv':'\x20hook'+'s','IofZK':_0x25fb97(0x64b),'EiWUJ':'mn-cl'+_0x25fb97(0x4b7),'daYZV':_0x25fb97(0x187)+'ls','NeMQZ':'<smal'+'l>','fTjQl':'</sma'+_0x25fb97(0x593),'zGZtM':function(_0x497dd0,_0x299566){return _0x497dd0(_0x299566);},'pWzqo':_0x25fb97(0x252)+'t','jhZop':'ZiYGj','jhVNC':'canva'+'s','VIShb':_0x25fb97(0x307),'stVOe':_0x25fb97(0x6e8)+'t','yrLzZ':_0x25fb97(0x61f),'naPsj':'keydo'+'wn','brhyr':_0x25fb97(0x524)+_0x25fb97(0x230)+_0x25fb97(0x5e8)+_0x25fb97(0x2d9)+_0x25fb97(0x575)+_0x25fb97(0x41d)+_0x25fb97(0x67a)+'z-ind'+_0x25fb97(0x55f)+'47483'+_0x25fb97(0x363)+'ursor'+_0x25fb97(0x2be)+_0x25fb97(0x243)+_0x25fb97(0x633)+'26px;'+'heigh'+'t:26p'+_0x25fb97(0x43e)+'city:'+'0.5;t'+_0x25fb97(0x297)+_0x25fb97(0x5e1)+_0x25fb97(0x4ac)+'ty\x200.'+'2s;po'+_0x25fb97(0x3d3)+_0x25fb97(0x1d5)+_0x25fb97(0x44f)+'to;fi'+_0x25fb97(0x3c7)+_0x25fb97(0x3f5)+_0x25fb97(0x404)+'w(0\x200'+'\x204px\x20'+_0x25fb97(0x295)+_0x25fb97(0x432)+_0x25fb97(0x30c)+'7,0.7'+'))','SLFUa':function(_0x340365,_0x4bb1fc){return _0x340365(_0x4bb1fc);},'FUUEa':'#ffb3'+'c6','KgqNe':function(_0x128a3c,_0x6c5306){return _0x128a3c!==_0x6c5306;},'RQxpf':_0x25fb97(0x212),'lyYdG':_0x25fb97(0x48a)+'e','Kazzn':'Local'+_0x25fb97(0x294),'JNXAx':_0x25fb97(0x4c4)+_0x25fb97(0x523)+_0x25fb97(0x2b7)+_0x25fb97(0x2a1)+'tide.'+_0x25fb97(0x3ea)+'lMoti'+'on','CfjSU':_0x25fb97(0x54f)+_0x25fb97(0x3a9)+_0x25fb97(0x647),'CnXbd':'capMo'+'ve','TRmrs':_0x25fb97(0x2ba)+_0x25fb97(0x35c),'jAwjt':_0x25fb97(0x2f1)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x25fb97(0x514)](location['hostn'+_0x25fb97(0x5f0)]||''))return;if(window['__SAK'+_0x25fb97(0x1e1)+'OUR__'])return;window[_0x25fb97(0x4d1)+_0x25fb97(0x1e1)+_0x25fb97(0x22d)]=!![];var _0x3be22b=_0x25fb97(0x5e2)+'9d',_0x25bd9c=_0x40b013[_0x25fb97(0x5f3)],_0x52795a={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x24889b={..._0x52795a};try{_0x40b013['KgqNe']('SvAAh',_0x40b013['RQxpf'])?(_0x23ff4e['hookG'+'od']=_0x4fd8f1,_0x9634e2()):Object[_0x25fb97(0x56e)+'n'](_0x24889b,JSON['parse'](localStorage[_0x25fb97(0x70a)+'em'](_0x25fb97(0x2b4)+_0x25fb97(0x6ad)+_0x25fb97(0x507))||'{}'));}catch(_0x416020){}function _0x1b66b9(){var _0x19d126=_0x25fb97;try{localStorage[_0x19d126(0x685)+'em'](_0x40b013['qKvLe'],JSON[_0x19d126(0x23d)+_0x19d126(0x421)](_0x24889b));}catch(_0x453f3e){}}var _0x3431d9={'uwmk':!!window['Unity'+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x24889b[_0x25fb97(0x3ed)+_0x25fb97(0x3be)],'lastError':''};try{window['addEv'+'entLi'+'stene'+'r']('error',_0x35c4fb=>{var _0x5be208=_0x25fb97,_0x249dc0={'qoRTW':function(_0xa5ce5e,_0x574d8f){return _0xa5ce5e!==_0x574d8f;},'wiKlw':_0x5be208(0x27b)+'S'};try{if(_0x40b013['rnpXo']==='Hqkqa'){var _0x4e20b3=_0x35c4fb&&(_0x35c4fb[_0x5be208(0x57a)+'ge']||_0x35c4fb['error']&&_0x35c4fb[_0x5be208(0x214)][_0x5be208(0x57a)+'ge'])||_0x40b013['tvgAg'];if(_0x35c4fb&&_0x35c4fb[_0x5be208(0x1e8)+_0x5be208(0x5f0)])_0x4e20b3+=_0x40b013['sUVza'](_0x40b013[_0x5be208(0x649)](_0x40b013['IBroR'],_0x40b013[_0x5be208(0x50c)](String,_0x35c4fb[_0x5be208(0x1e8)+'ame'])[_0x5be208(0x520)]('/')['pop']()),':')+(_0x35c4fb[_0x5be208(0x20d)+'o']||'?');_0x3431d9[_0x5be208(0x33f)+_0x5be208(0x503)]=String(_0x4e20b3)['slice'](0x3a8+0x14b1+0x10f*-0x17,-0x26*-0xf5+0x131*0x1+-0x131*0x1f);}else{var _0x246907=_0x30b893[_0x5be208(0x5fd)+_0x5be208(0x3cf)+_0x5be208(0x326)+'nt'],_0x25bfc2=_0x246907&&_0x249dc0[_0x5be208(0x442)](_0x246907[_0x5be208(0x361)+'me'],_0x249dc0['wiKlw'])?_0x246907:_0x5eb287[_0x5be208(0x6cb)]||_0x3856e4[_0x5be208(0x43c)+'entEl'+'ement'];if(_0x2dbc5a['paren'+_0x5be208(0x4e2)]!==_0x25bfc2)_0x25bfc2['appen'+'dChil'+'d'](_0x486e55);}}catch(_0x5772cf){}});}catch(_0x12cc8f){}var _0x36ec47=null,_0x478898=null,_0x3eeab6={},_0x9431f=[],_0x4fa1d4=[],_0x3f54f1=new Map();function _0x4de7b6(_0x36049a,_0x1d511d){var _0x4536bc=_0x25fb97;if(!_0x1d511d||_0x36049a['inclu'+'des'](_0x1d511d)||_0x36049a['lengt'+'h']>-0x4*-0x784+-0x5*0x509+-0x1*0x4a3)return;_0x36049a[_0x4536bc(0x60f)](_0x1d511d);}function _0x42666b(_0x5107d0,_0x1c4df9,_0x538e31,_0x3e39e6){var _0x3e1581=_0x25fb97;if('VQYYV'===_0x40b013[_0x3e1581(0x64e)]){var _0x1f4318=-0x1*-0x1237+-0x1ad1+0x89a;try{_0x1f4318=_0x1c4df9&&_0x1c4df9['val']?_0x1c4df9[_0x3e1581(0x40d)]():0x2455+-0x1*-0xa3d+0x2*-0x1749;}catch(_0x23ad2c){}if(!_0x1f4318)return;_0x4de7b6(_0x5107d0,_0x1f4318),_0x538e31[_0x3e39e6]=_0x5107d0[_0x3e1581(0x53f)+'h'];if(_0x40b013['AWPgE'](_0x3e39e6,_0x40b013[_0x3e1581(0x628)])&&_0x5107d0['lengt'+'h']){var _0x459d20=_0x3eeab6[_0x3e1581(0x533)+'ve'];if(_0x459d20)try{_0x459d20['enabl'+'ed']=![];}catch(_0x4dac58){}}}else try{var _0x218829=new _0x5ade3c(_0x512627)['readF'+_0x3e1581(0x337)](_0x17489e,_0x44faa0);_0x1ec453['set'](_0x2cc332,_0x218829!==_0x1e7a18?_0x218829['val']():null);}catch(_0x5c15ee){_0x2c7444[_0x3e1581(0x2f2)](_0x3c3390,null);}}function _0x4ccbf6(_0x48fb35,_0x419164,_0x418191){var _0x2959b3=_0x25fb97,_0x5e3071={'cSFxA':function(_0x406385,_0x3270cc,_0x321c35,_0x517ccc,_0x5e74bc){return _0x406385(_0x3270cc,_0x321c35,_0x517ccc,_0x5e74bc);},'vukxx':_0x40b013['luIJG']};if(_0x40b013[_0x2959b3(0x4a5)]!==_0x2959b3(0x1b0)){var _0x8ec7b4=new _0x2502e2(_0x11c00d)['readF'+'ield'](_0x50c8a0,_0x2959b3(0x365));return _0x8ec7b4?_0x8ec7b4[_0x2959b3(0x40d)]():0x1cf8+0x73+0x1*-0x1d6b;}else{var _0xff05bd=_0x3f54f1[_0x2959b3(0x1be)](_0x48fb35);!_0xff05bd&&(_0xff05bd=new Map(),_0x3f54f1['set'](_0x48fb35,_0xff05bd));if(!_0xff05bd[_0x2959b3(0x478)](_0x419164)){if(_0x40b013['YIRCK'](_0x40b013[_0x2959b3(0x699)],_0x2959b3(0x344)))_0x5e3071['cSFxA'](_0x2b1344,_0x4e1c4c,-0x1d6f*0x1+-0x362*-0x1+0x1a55,_0x2959b3(0x441),_0x127a8c),_0x5e3071[_0x2959b3(0x4ae)](_0x10abab,_0x257106,-0xcfb*-0x3+-0x224e+0x65*-0xb,_0x5e3071[_0x2959b3(0x409)],_0x45a8b3);else try{var _0x28d098=new _0x36ec47(_0x48fb35)['readF'+'ield'](_0x419164,_0x418191);_0xff05bd[_0x2959b3(0x2f2)](_0x419164,_0x40b013['FSvUZ'](_0x28d098,undefined)?_0x28d098['val']():null);}catch(_0x3bc00f){_0xff05bd[_0x2959b3(0x2f2)](_0x419164,null);}}return _0xff05bd[_0x2959b3(0x1be)](_0x419164);}}function _0x539629(_0x225f74,_0x5e8d50,_0x1e6943,_0x36f61a){var _0x1bc964=_0x25fb97;try{new _0x36ec47(_0x225f74)['write'+_0x1bc964(0x592)](_0x5e8d50,_0x1e6943,_0x36f61a);}catch(_0x350e78){}}function _0x106bf3(_0x5c0b41,_0x3d0d84){try{var _0xf6e64e=new _0x36ec47(_0x5c0b41)['readF'+'ield'](_0x3d0d84,_0x40b013['bVclN']);return _0xf6e64e?_0xf6e64e['val']():0x1*0xa7e+-0x2089+0x160b;}catch(_0x70bf29){return-0xf0+-0x29*-0x83+-0x140b;}}function _0x59b088(_0x3b92f0,_0x4ad1da,_0x588764,_0x59fb5d){var _0x44c276=_0x4ccbf6(_0x3b92f0,_0x4ad1da,_0x588764);if(_0x44c276!=null)_0x539629(_0x3b92f0,_0x4ad1da,_0x588764,_0x44c276*_0x59fb5d);}function _0x27e7e6(_0x3f30fa,_0x2e4f07,_0x1cdd47,_0x547934,_0x17677e,_0x3adb75,_0x10b299){var _0x32e945=_0x25fb97;try{var _0x41a3f2=_0x478898[_0x32e945(0x42a)+'refix']({'typeName':_0x2e4f07,'methodName':_0x1cdd47,'params':_0x547934,'returnType':_0x17677e},_0x3adb75);return _0x41a3f2[_0x32e945(0x285)+'ed']=_0x10b299!==![],_0x3eeab6[_0x3f30fa]=_0x41a3f2,_0x3431d9[_0x32e945(0x43a)+_0x32e945(0x392)]++,_0x41a3f2;}catch(_0x14f2b4){return console['warn'](_0x32e945(0x6d3)+'ra-ko'+_0x32e945(0x68f)+_0x32e945(0x191)+_0x32e945(0x339)+_0x32e945(0x6c2),_0x3f30fa,_0x14f2b4&&_0x14f2b4[_0x32e945(0x57a)+'ge']),null;}}function _0x3d9687(_0x262be9,_0xe71b84,_0x3e4ba8,_0x19ed3e,_0x39f71c,_0x524d54,_0x3fbe72){var _0xdbfcbd=_0x25fb97,_0x561f48={'iDBjE':_0x40b013[_0xdbfcbd(0x45e)]};if(_0x40b013[_0xdbfcbd(0x61d)]==='NHiOG')try{if('gGpUd'!==_0xdbfcbd(0x3e4)){var _0x2224c7=('2|1|3'+'|0|4')['split']('|'),_0x54213d=0x2295+0x1*0xb6f+0x5f*-0x7c;while(!![]){switch(_0x2224c7[_0x54213d++]){case'0':_0x3431d9[_0xdbfcbd(0x43a)+_0xdbfcbd(0x392)]++;continue;case'1':_0x619502['enabl'+'ed']=_0x3fbe72!==![];continue;case'2':var _0x619502=_0x478898[_0xdbfcbd(0x42a)+'ostfi'+'x']({'typeName':_0xe71b84,'methodName':_0x3e4ba8,'params':_0x19ed3e,'returnType':_0x39f71c},_0x524d54);continue;case'3':_0x3eeab6[_0x262be9]=_0x619502;continue;case'4':return _0x619502;}break;}}else{var _0x59b734={'OnezU':_0xdbfcbd(0x51c),'gstVY':function(_0xb08d67,_0x2a2c14){return _0x40b013['uSBkJ'](_0xb08d67,_0x2a2c14);},'eddyk':_0x40b013[_0xdbfcbd(0x29b)],'fawiH':_0xdbfcbd(0x5d1),'VyPvr':_0x40b013[_0xdbfcbd(0x340)],'erNYp':function(_0x53242c,_0x23ffbe){return _0x53242c+_0x23ffbe;},'YlvKm':function(_0x1d1fec,_0x2e0e53){return _0x1d1fec/_0x2e0e53;},'lagXg':_0xdbfcbd(0x295)+'255,1'+_0xdbfcbd(0x30c)+'7,0.3'+'5)','CPbfI':function(_0x194fa7,_0x26a085){return _0x194fa7+_0x26a085;},'YeKCP':function(_0xb02c81,_0x24a675){return _0xb02c81*_0x24a675;},'nLfmr':'middl'+'e'},_0x4a9ce5=_0x40b013[_0xdbfcbd(0x50c)](_0x72147f,_0x5e524f[_0xdbfcbd(0x56b)+'le'])||0xe18+0x1*0x26a3+-0x34ba,_0x136e81=(0x1810+-0x1336*0x1+-0x4b8)*_0x4a9ce5,_0x409dc5=(0x229+-0x1*0x1743+0x11*0x13e)*_0x4a9ce5,_0x2af8f6=_0x40b013[_0xdbfcbd(0x690)](_0x136e81*(0x1*-0xef8+0x16cb+0xa*-0xc8),_0x409dc5*(0x581+-0xb35+0x5b6)),_0x41ab75=_0x40b013[_0xdbfcbd(0x25d)](_0x136e81,-0x18*0x99+-0x427*-0x7+-0xeb6)+_0x409dc5*(0x1261+-0x1b11+0x8b2),_0x40877e=_0x50b75d[_0xdbfcbd(0x2ae)],_0x2664e8=_0x40877e==='br'?_0x429f96[_0xdbfcbd(0x59b)]-(-0x199f+0x66a+0x1345)-_0x2af8f6:_0x3191fe['left']+(-0x15e1+0x1ef*-0xd+-0xbc5*-0x4),_0x5ddc37=_0x40877e==='ml'?_0x40b013['UJhEn'](_0x51184a[_0xdbfcbd(0x1fe)]+_0x40b013[_0xdbfcbd(0x235)](_0x1eade3[_0xdbfcbd(0x46b)+'t'],0x9b9+-0x8*-0x182+-0x15c7),_0x41ab75/(-0x35*-0x31+0x71e*-0x2+0x419*0x1)):_0x40b013['UJhEn'](_0x40b013['UJhEn'](_0x47dbff[_0xdbfcbd(0x18f)+'m'],_0x41ab75),_0x40b013['jKoZV'](_0x40877e,'bl')?-0x98+-0x1a4a+-0x2*-0xda1:-0x2598+-0x5cc+0x2bfa),_0xef01c8=(_0x4cf67a,_0x33cae2,_0x5c4059,_0x7f1064,_0x5317cd,_0x454b6c,_0x21dc18)=>{var _0x493998=_0xdbfcbd,_0x3085de=(_0x493998(0x1d7)+_0x493998(0x3f7)+_0x493998(0x6bd)+'|2|14'+'|13|8'+_0x493998(0x308)+_0x493998(0x674)+_0x493998(0x6e7))[_0x493998(0x520)]('|'),_0x5201cd=-0x173a*-0x1+0x22bd+0x30d*-0x13;while(!![]){switch(_0x3085de[_0x5201cd++]){case'0':_0x27cb21[_0x493998(0x413)+'idth']=0x1137+0x1a3*-0x2+-0xdf0;continue;case'1':_0x21dc18&&(_0x1598e3['font']=_0x59b734['OnezU']+_0x13b85d['round'](_0x59b734['gstVY'](-0x19*-0x175+-0x1*-0x1a03+0x2d*-0x163,_0x4a9ce5))+_0x59b734['eddyk'],_0x4e0609[_0x493998(0x5c8)+'tyle']=_0x32a945?_0x59b734['fawiH']:_0x59b734[_0x493998(0x63e)],_0xf562c9[_0x493998(0x1f2)+'ext'](_0x21dc18,_0x59b734['erNYp'](_0x5c4059,_0x59b734[_0x493998(0x54a)](_0x5317cd,-0x1*0x1fd3+0xbc6+0x140f)),_0x59b734['erNYp'](_0x7f1064+_0x454b6c/(0x22f7*0x1+0x7*0x2cd+-0x3690),(-0x4e+0xaab*0x2+-0x1500)*_0x4a9ce5)));continue;case'2':_0x50eaf3['strok'+'eStyl'+'e']=_0x32a945?_0x31c413:_0x59b734['lagXg'];continue;case'3':_0x113fb6[_0x493998(0x1a5)]();continue;case'4':_0x518f13['begin'+'Path']();continue;case'5':_0x318517[_0x493998(0x617)]=_0x59b734[_0x493998(0x4df)](_0x493998(0x5b2),_0x450f54[_0x493998(0x19e)](_0x59b734[_0x493998(0x425)](0x15f9+-0x154f*0x1+-0x9e,_0x4a9ce5)))+_0x59b734[_0x493998(0x222)];continue;case'6':_0x26a8ff[_0x493998(0x608)]();continue;case'7':if(_0x2851a2[_0x493998(0x19e)+'Rect'])_0x1763ac['round'+'Rect'](_0x5c4059,_0x7f1064,_0x5317cd,_0x454b6c,(0x1*-0xdba+-0xf41+0x2*0xe81)*_0x4a9ce5);else _0x2fc177[_0x493998(0x343)](_0x5c4059,_0x7f1064,_0x5317cd,_0x454b6c);continue;case'8':_0x592fc1[_0x493998(0x5c8)+_0x493998(0x37f)]=_0x32a945?'#fff':_0x493998(0x295)+'255,2'+'35,24'+_0x493998(0x1a4)+')';continue;case'9':_0x458572['textA'+_0x493998(0x58f)]=_0x493998(0x672)+'r';continue;case'10':_0x2bdf44['fillT'+'ext'](_0x4cf67a,_0x5c4059+_0x5317cd/(-0xc7*0x3+0x1*0x16eb+-0x36e*0x6),_0x7f1064+_0x454b6c/(-0x2*-0xaef+0x176*-0x1a+0x1020)-(_0x21dc18?(0x3c*-0x72+0x535*-0x1+-0x1d*-0x11a)*_0x4a9ce5:-0x20bf*-0x1+-0x5a1+-0x1b1e));continue;case'11':_0xc38d82[_0x493998(0x5c8)+_0x493998(0x37f)]=_0x32a945?_0x493998(0x295)+_0x493998(0x432)+_0x493998(0x30c)+'7,0.8'+'5)':_0x493998(0x295)+_0x493998(0x5c1)+_0x493998(0x6f9)+'7)';continue;case'12':_0x1f98d2[_0x493998(0x39f)+'aseli'+'ne']=_0x59b734[_0x493998(0x31f)];continue;case'13':_0x32a945&&(_0x1f2145[_0x493998(0x404)+_0x493998(0x416)+'r']=_0xca8069,_0x41d2cd['shado'+_0x493998(0x60d)]=0x2af*0x4+0x95*-0x39+0x167f,_0x30c946['fill'](),_0x27acbd[_0x493998(0x404)+_0x493998(0x60d)]=-0x1670+-0x20b*-0x12+-0xe56);continue;case'14':_0x3303e3['strok'+'e']();continue;case'15':var _0x32a945=_0x2a275a['has'](_0x33cae2);continue;case'16':_0xe12dfa[_0x493998(0x3af)+'re']();continue;}break;}};_0xef01c8('W',_0x40b013[_0xdbfcbd(0x6c4)],_0x40b013[_0xdbfcbd(0x48d)](_0x40b013[_0xdbfcbd(0x4c0)](_0x2664e8,_0x136e81),_0x409dc5),_0x5ddc37,_0x136e81,_0x136e81),_0x40b013[_0xdbfcbd(0x498)](_0xef01c8,'A',_0xdbfcbd(0x4a8),_0x2664e8,_0x40b013['UQKWf'](_0x5ddc37+_0x136e81,_0x409dc5),_0x136e81,_0x136e81),_0xef01c8('S','KeyS',_0x40b013['mhzfo'](_0x40b013[_0xdbfcbd(0x5ef)](_0x2664e8,_0x136e81),_0x409dc5),_0x5ddc37+_0x136e81+_0x409dc5,_0x136e81,_0x136e81),_0xef01c8('D',_0xdbfcbd(0x662),_0x2664e8+(_0x136e81+_0x409dc5)*(-0x11fb+0x1*0x1718+-0x51b),_0x40b013[_0xdbfcbd(0x2d5)](_0x5ddc37+_0x136e81,_0x409dc5),_0x136e81,_0x136e81);var _0x312b25=_0x40b013[_0xdbfcbd(0x235)](_0x2af8f6-_0x409dc5,-0x29*0xf1+-0x263f+0x4cda),_0x15bd85=_0x5ddc37+_0x40b013['fohKK'](_0x136e81,_0x409dc5)*(-0x4a9*0x8+0x3*-0x67f+0x38c7);_0xef01c8(_0xdbfcbd(0x2c6),_0x40b013[_0xdbfcbd(0x3e3)],_0x2664e8,_0x15bd85,_0x312b25,_0x136e81,_0x2accc2['ksCps']?_0x40b013['fohKK'](_0x32094c(-0x52*0x3b+-0x1*0xab3+0x1d9a),_0xdbfcbd(0x370)):''),_0xef01c8(_0xdbfcbd(0x666),_0x40b013[_0xdbfcbd(0x45a)],_0x40b013['tqLcx'](_0x40b013[_0xdbfcbd(0x5ee)](_0x2664e8,_0x312b25),_0x409dc5),_0x15bd85,_0x312b25,_0x136e81,_0x1f2a75[_0xdbfcbd(0x2a4)]?_0x40b013[_0xdbfcbd(0x6fd)](_0x40b013[_0xdbfcbd(0x372)](_0x2f216c,-0x2*-0xed0+0x45*-0x1d+-0x15cc),_0x40b013['qRKMG']):''),_0xef01c8('',_0xdbfcbd(0x652),_0x2664e8,_0x15bd85+_0x136e81+_0x409dc5,_0x2af8f6,_0x136e81*(0x989+-0x2448+0x1abf+0.45));}}catch(_0x458c76){return console[_0xdbfcbd(0x2d3)](_0xdbfcbd(0x6d3)+_0xdbfcbd(0x47b)+_0xdbfcbd(0x68f)+'ook\x20r'+_0xdbfcbd(0x339)+'iled:',_0x262be9,_0x458c76&&_0x458c76['messa'+'ge']),null;}else return _0xdecc16[_0xdbfcbd(0x2d3)](_0x561f48[_0xdbfcbd(0x542)],_0x387d1b,_0x330557&&_0x4671dd[_0xdbfcbd(0x57a)+'ge']),null;}var _0x527b60=()=>![];try{if(window[_0x25fb97(0x460)+_0x25fb97(0x5c7)+_0x25fb97(0x1b2)]&&!_0x24889b[_0x25fb97(0x3ed)+_0x25fb97(0x3be)]){_0x36ec47=window[_0x25fb97(0x460)+_0x25fb97(0x5c7)+'dkit']['Value'+_0x25fb97(0x34c)+'er'],_0x478898=window[_0x25fb97(0x460)+_0x25fb97(0x5c7)+_0x25fb97(0x1b2)]['Runti'+'me'][_0x25fb97(0x1d0)+'ePlug'+'in']({'name':_0x25fb97(0x303)+_0x25fb97(0x426),'version':'1.1.0','referencedAssemblies':[_0x25fb97(0x4d0)+_0x25fb97(0x697)+_0x25fb97(0x405)+_0x25fb97(0x3bf)]});if(_0x24889b['hookG'+'od'])_0x27e7e6(_0x25fb97(0x1fa),'OHeal'+'th','Initi'+_0x25fb97(0x64a)+'keHea'+'lth',[_0x40b013['KAGyx'],_0x40b013['KAGyx']],undefined,_0x527b60,!!_0x24889b[_0x25fb97(0x1fa)]);if(_0x24889b['hookG'+_0x25fb97(0x36c)])_0x40b013['SYIga'](_0x27e7e6,_0x40b013['lyYdG'],_0x25fb97(0x39d)+'th',_0x40b013[_0x25fb97(0x5bb)],['i32',_0x25fb97(0x70e),_0x25fb97(0x70e),_0x25fb97(0x70e),'i32'],undefined,_0x527b60,!!_0x24889b[_0x25fb97(0x1fa)]);if(_0x24889b[_0x25fb97(0x6a8)+_0x25fb97(0x379)+'il'])_0x27e7e6(_0x25fb97(0x3f6)+'oil',_0x40b013[_0x25fb97(0x226)],'Tick',[_0x25fb97(0x70e)],undefined,_0x527b60,!!_0x24889b[_0x25fb97(0x3f6)+'oil']);if(_0x24889b['hookC'+_0x25fb97(0x3c1)+'e'])_0x3d9687('capSh'+'ooter',_0x25fb97(0x316)+'ter',_0x40b013[_0x25fb97(0x5e4)],['i32',_0x40b013['KAGyx']],undefined,(_0x1eb3a3,_0x3f043d)=>{var _0xfe1a02=_0x25fb97;_0x40b013['LHjjQ'](_0x42666b,_0x4fa1d4,_0x3f043d,_0x3431d9,_0x40b013[_0xfe1a02(0x629)]);},!![]);if(_0x24889b[_0x25fb97(0x23f)+_0x25fb97(0x3c1)+'e'])_0x3d9687(_0x40b013[_0x25fb97(0x41c)],_0x25fb97(0x4c4)+'nPlat'+_0x25fb97(0x2b7)+'.Over'+_0x25fb97(0x2aa)+'Movem'+_0x25fb97(0x251),_0x40b013[_0x25fb97(0x18b)],['i32'],'i32',(_0x455ce4,_0x3750a2)=>{var _0x166486=_0x25fb97;_0x42666b(_0x9431f,_0x3750a2,_0x3431d9,_0x166486(0x488)+'ents');},!![]);}}catch(_0x12f3a2){_0x40b013[_0x25fb97(0x3da)](_0x25fb97(0x2d0),_0x40b013[_0x25fb97(0x19c)])?console['warn']('[saku'+'ra-ko'+'ur]\x20U'+'WMK\x20i'+_0x25fb97(0x59a)+_0x25fb97(0x42d)+':',_0x12f3a2&&_0x12f3a2[_0x25fb97(0x57a)+'ge']):(_0x842990[_0x25fb97(0x23f)+'aptur'+'e']=_0x2ab244,_0x1cf8fe());}function _0x293ad6(_0xdd3bce,_0x17cc19){var _0x34e289=_0x25fb97,_0x27ee3d=_0x3eeab6[_0xdd3bce];if(_0x27ee3d){if(_0x40b013['YIRCK'](_0x34e289(0x2de),'BvDyC'))try{if(_0x40b013['dPvKl'](_0x34e289(0x4dd),_0x34e289(0x3a0)))_0x27ee3d[_0x34e289(0x285)+'ed']=!!_0x17cc19;else{var _0x352712=(_0x34e289(0x3f9)+_0x34e289(0x6b2)+'3')[_0x34e289(0x520)]('|'),_0x2e31e3=0x7*-0x33d+0x1*-0x1511+0x2bbc*0x1;while(!![]){switch(_0x352712[_0x2e31e3++]){case'0':for(var [_0x57dc33,_0x57c877]of _0x3682aa)_0x57c877['class'+'List'][_0x34e289(0x49e)+'e'](_0x40b013[_0x34e289(0x6cd)],_0x40b013['AWPgE'](_0x57dc33,_0x181cf1));continue;case'1':_0x2bbdf5[_0x34e289(0x247)]=_0x146760;continue;case'2':_0x1cb1c8();continue;case'3':_0x113a47['repla'+_0x34e289(0x537)+_0x34e289(0x2ed)](..._0x33e7a8(_0x206b86));continue;case'4':_0x63b33c['textC'+_0x34e289(0x2b5)+'t']=_0x40b013['JpiRR']+_0x477e28['label'];continue;case'5':var _0x477e28=_0x4f15aa[_0x34e289(0x2e4)](_0x386910=>_0x386910['id']===_0x1c80ea)||_0x29ec18[0x121d*-0x2+-0x1d3f*-0x1+0x6fb*0x1];continue;}break;}}}catch(_0x1eb1db){}else{var _0x3b11ed=0x20f2+0xe7a*-0x2+-0x49*0xe;for(var _0x214c15 in _0x275d81){if(_0x795613[_0x214c15]&&_0x47f12d[_0x214c15][_0x34e289(0x4f0)+'ed'])_0x3b11ed++;}_0x31cab8['hooks'+'Ok']=_0x3b11ed;}}}setInterval(()=>{var _0x33427c=_0x25fb97;if(!_0x36ec47||!window['unity'+'Insta'+_0x33427c(0x1a8)])return;var _0x260b8f=(_0x40b013['wNGlx'](Number,_0x24889b['speed'+'Pct'])||-0x140+0x19*-0x161+0x241d)/(-0x28d*0x4+0xd99+0x301*-0x1),_0x1bf1cd=(Number(_0x24889b[_0x33427c(0x2af)+'ct'])||-0x8c9+-0x3e*0x29+0x1*0x131b)/(-0xf5*-0x3+-0x259a+0x231f),_0x327336=(Number(_0x24889b[_0x33427c(0x4cd)+'tyPct'])||0x3*0x1d8+-0x11*-0x18d+-0x1f81)/(-0x1*0xb55+0x1*-0x236b+-0x4*-0xbc9),_0xb4d170=Math[_0x33427c(0x5a7)](-0x30a+0x16*0x106+-0x5*0x3e5,Number(_0x24889b[_0x33427c(0x2c3)+'eValu'+'e'])||0x1*0x2b9+-0x227*-0x1+-0x225*0x2),_0x58d05e=_0x260b8f!==0x15*0x167+0xfc1+-0x2d33||_0x1bf1cd!==0x19*0xbc+-0x11*0x216+-0x1*-0x111b||_0x40b013['FSvUZ'](_0x327336,-0x3d*0x26+0x1d20+-0x1411)||_0x24889b[_0x33427c(0x64d)],_0x4f2286=_0x24889b[_0x33427c(0x499)+'ead']||_0x24889b['damag'+_0x33427c(0x44a)]||_0x24889b['infAm'+_0x33427c(0x3d0)]||_0x24889b[_0x33427c(0x6a5)+_0x33427c(0x676)];if(!_0x58d05e&&!_0x4f2286)return;try{for(var _0x1a4aa1=0x1fa9*0x1+-0x141*0x1+0xf34*-0x2;_0x1a4aa1<_0x9431f['lengt'+'h'];_0x1a4aa1++){var _0x164ad2=_0x9431f[_0x1a4aa1];if(!_0x164ad2)continue;if(_0x260b8f!==-0x102e+0x1cb3+-0xc84){var _0x30ecfb=(_0x33427c(0x4ed)+_0x33427c(0x6d7)+'2')[_0x33427c(0x520)]('|'),_0x4340a0=0x11+0x16c3*-0x1+-0xb59*-0x2;while(!![]){switch(_0x30ecfb[_0x4340a0++]){case'0':_0x40b013[_0x33427c(0x407)](_0x59b088,_0x164ad2,-0x1c2+-0x1b42+-0x216*-0xe,_0x33427c(0x441),_0x260b8f);continue;case'1':_0x40b013[_0x33427c(0x48c)](_0x59b088,_0x164ad2,0x6c*-0x1c+0x269b*-0x1+0x3287,'f32',_0x260b8f);continue;case'2':_0x59b088(_0x164ad2,-0xf02+0xd*0xc7+0x21*0x27,_0x40b013['luIJG'],_0x260b8f);continue;case'3':_0x59b088(_0x164ad2,0xe9f+-0x1736+0x8cb,_0x40b013[_0x33427c(0x4b6)],_0x260b8f);continue;case'4':_0x40b013['HxNgY'](_0x59b088,_0x164ad2,-0x1a91+0x3b0+0x34b*0x7,_0x33427c(0x441),_0x260b8f);continue;case'5':_0x40b013['ZSRHe'](_0x59b088,_0x164ad2,0x1941+-0x5*-0x60f+0x14*-0x2c5,'f32',_0x260b8f);continue;}break;}}if(_0x1bf1cd!==0xd95+0x3d*-0x84+0x11e0)_0x59b088(_0x164ad2,0x1c61+0x261*-0xa+-0x5*0xdb,_0x40b013['luIJG'],_0x1bf1cd);_0x327336!==-0xe78+0x442*0x6+0xf*-0xbd&&(_0x40b013[_0x33427c(0x6ed)](_0x59b088,_0x164ad2,0xc81+-0x17f2+-0xbb9*-0x1,'f32',_0x327336),_0x40b013['ZSRHe'](_0x59b088,_0x164ad2,-0x10f1*0x1+-0xb22+0x1c5f,_0x33427c(0x441),_0x327336));if(_0x24889b['bhop'])_0x40b013['HxNgY'](_0x539629,_0x164ad2,0xfb*0x7+0x347+-0x988,_0x33427c(0x441),-(-0x177b*0x1+0x1*-0x1cfb+0x385d*0x1));}}catch(_0x20d7db){}try{for(var _0x385db7=-0x1f93+-0x560*-0x3+0xf73;_0x40b013[_0x33427c(0x1ff)](_0x385db7,_0x4fa1d4['lengt'+'h']);_0x385db7++){var _0xdec536=_0x40b013['FCxdC'](_0x106bf3,_0x4fa1d4[_0x385db7],-0xf13+-0x87*0x42+-0x4b*-0xab);if(!_0xdec536)continue;if(_0x24889b[_0x33427c(0x2c3)+'eExp']){if('nsrcC'!==_0x40b013[_0x33427c(0x68b)]){var _0xd925e9={'jzmMA':function(_0x4af60f,_0xb3139e){return _0x4af60f(_0xb3139e);},'BFXJG':function(_0x1345fd,_0x4bf5a8){return _0x1345fd(_0x4bf5a8);}};_0x159d2d[_0x33427c(0x5be)+'entLi'+_0x33427c(0x1b6)+'r']('error',_0x47e57c=>{var _0x3c4742=_0x33427c;try{var _0x3736e8=_0x47e57c&&(_0x47e57c['messa'+'ge']||_0x47e57c[_0x3c4742(0x214)]&&_0x47e57c['error']['messa'+'ge'])||'unkno'+'wn';if(_0x47e57c&&_0x47e57c[_0x3c4742(0x1e8)+_0x3c4742(0x5f0)])_0x3736e8+=_0x3c4742(0x560)+_0xd925e9[_0x3c4742(0x456)](_0x43d4a4,_0x47e57c['filen'+_0x3c4742(0x5f0)])[_0x3c4742(0x520)]('/')[_0x3c4742(0x571)]()+':'+(_0x47e57c[_0x3c4742(0x20d)+'o']||'?');_0x5d508a[_0x3c4742(0x33f)+'rror']=_0xd925e9['BFXJG'](_0x43d089,_0x3736e8)[_0x3c4742(0x34f)](-0xb84+-0x1a*0x24+0xf2c,0x69*0x30+-0x85*-0x21+-0x2435);}catch(_0x2e3d54){}});}else _0x40b013[_0x33427c(0x2c5)](_0x539629,_0xdec536,-0x4e1+0x182a+-0x12fd,'i32',_0xb4d170),_0x539629(_0xdec536,-0xefb+0x180f+-0x23*0x40,_0x33427c(0x70e),_0xb4d170);}_0x24889b['noSpr'+'ead']&&(_0x40b013[_0x33427c(0x20a)](_0x539629,_0xdec536,-0x3*-0xc83+-0xa*0x397+0x1*-0x11b,_0x40b013['luIJG'],0x145d+0x201b+-0x8*0x68f),_0x539629(_0xdec536,-0x35*0x5f+-0xa54+0x1e67,'f32',0x10a0+-0x415+0x3*-0x42e));if(_0x24889b[_0x33427c(0x3c5)+'moExp'])_0x539629(_0xdec536,0x1*-0x9e+-0x14cc+0x15c6,_0x40b013[_0x33427c(0x66b)],-0x805+0x13*-0x18d+0x2963);_0x24889b[_0x33427c(0x6a5)+_0x33427c(0x676)]&&(_0x33427c(0x318)===_0x33427c(0x5df)?(_0x5e20f6=_0x13d38f[_0x33427c(0x19e)](_0x40b013[_0x33427c(0x387)](_0x313d9b*(0xf08*-0x1+-0x151*0x11+0x2951),_0x32a8c5-_0x2ed526)),_0x3137c0=-0x9f5*0x2+0xc67*0x1+0x1*0x783,_0x6b0264=_0x3529f9):(_0x40b013[_0x33427c(0x60b)](_0x59b088,_0xdec536,-0xad*-0x29+-0x6*0x5ca+0x7*0x115,'f32',-0x498+-0x2275+0x270d+0.1),_0x539629(_0xdec536,-0x7d1+0x11b3+-0x2*0x4c1,_0x33427c(0x441),0x26cb+0x45*-0x4+0x5*-0x78b+0.1)));}}catch(_0x74cc7b){}},-0x13ae+0x1*-0x2161+0x35d7),setInterval(()=>{var _0x5c55a9=_0x25fb97,_0xac3b9b={'PIUGQ':function(_0x32506e,_0x1ad9c8){return _0x32506e===_0x1ad9c8;},'AbBJv':function(_0x17ee79,_0x5df28d){return _0x17ee79<_0x5df28d;},'NoLLN':_0x5c55a9(0x4ef)+'io_'};if(_0x40b013[_0x5c55a9(0x598)](_0x40b013[_0x5c55a9(0x193)],_0x40b013[_0x5c55a9(0x3cb)])){var _0x10bfe2=_0x1968d7['getEl'+_0x5c55a9(0x49f)+_0x5c55a9(0x1cd)](_0x31c52e);if(_0x10bfe2&&_0xac3b9b[_0x5c55a9(0x389)](_0x1b3415,_0x5c55a9(0x5fd)+'creen'+'-banr'+'s')){var _0x202a48=_0x10bfe2['child'+_0x5c55a9(0x31b)];for(var _0x547959=-0x179d+0x163b+-0x3b*-0x6;_0xac3b9b[_0x5c55a9(0x6f1)](_0x547959,_0x202a48[_0x5c55a9(0x53f)+'h']);_0x547959++){if(_0x202a48[_0x547959]['id']&&_0xac3b9b['PIUGQ'](_0x202a48[_0x547959]['id'][_0x5c55a9(0x47f)+'Of'](_0xac3b9b[_0x5c55a9(0x2e2)]),-0x2*0x200+0x1af8+0x1c*-0xd2))_0x202a48[_0x547959][_0x5c55a9(0x5dc)][_0x5c55a9(0x24a)+'ay']=_0x5c55a9(0x346);}}else{if(_0x10bfe2)_0x10bfe2['style'][_0x5c55a9(0x24a)+'ay']=_0x5c55a9(0x346);}}else{_0x3431d9['gameL'+'oaded']=!!window[_0x5c55a9(0x5a3)+'Insta'+_0x5c55a9(0x1a8)];try{var _0x3015f6=-0x7*-0x42b+-0x1*-0x122b+-0x2f58;for(var _0x61fb4c in _0x3eeab6){if(_0x40b013['gyjQT']('vYWfH',_0x5c55a9(0x4e9))){if(_0x259ccd[_0x1b55e2]&&_0x251a9a[_0x53cc6f][_0x5c55a9(0x4f0)+'ed'])_0x1ccc72++;}else{if(_0x3eeab6[_0x61fb4c]&&_0x3eeab6[_0x61fb4c][_0x5c55a9(0x4f0)+'ed'])_0x3015f6++;}}_0x3431d9['hooks'+'Ok']=_0x3015f6;}catch(_0x1a1587){}}},0x17*0x8+0xaa*0x5+-0x22*0x1);var _0x666bc8=new Set(),_0x2626ea={0x1:[],0x3:[]},_0x28fa06=![];function _0x3de444(_0x1475ea){var _0x49ae03=_0x25fb97;_0x666bc8[_0x49ae03(0x244)](_0x1475ea[_0x49ae03(0x309)]);}function _0xb236bc(_0x2f62a6){var _0x3e748e=_0x25fb97;_0x666bc8['delet'+'e'](_0x2f62a6[_0x3e748e(0x309)]);}function _0x36b481(_0x4623c1){var _0x38ac87=_0x25fb97;if(_0x4623c1[_0x38ac87(0x558)+'ura'])return;_0x666bc8[_0x38ac87(0x244)]('mouse'+_0x40b013[_0x38ac87(0x330)](_0x4623c1['butto'+'n'],-0xa*0x2+0xfb*-0x1b+-0xd47*-0x2));var _0x387a93=_0x2626ea[_0x4623c1[_0x38ac87(0x270)+'n']+(0xc0*0x1+-0x1cac+0x1bed)];if(_0x387a93){_0x387a93['push'](performance['now']());if(_0x40b013[_0x38ac87(0x6b0)](_0x387a93['lengt'+'h'],0x100b+-0x4*0x616+0x875*0x1))_0x387a93[_0x38ac87(0x414)]();}}function _0x1bcda5(_0x6f96a2){var _0x44dca6=_0x25fb97;if(!_0x6f96a2['__sak'+_0x44dca6(0x19b)])_0x666bc8['delet'+'e'](_0x40b013['mmaCx']('mouse',_0x6f96a2[_0x44dca6(0x270)+'n']+(0x21a9+-0xb77*-0x1+-0x2d1f*0x1)));}function _0x4e49d2(){_0x666bc8['clear']();}function _0x18603a(){var _0x1cbc25=_0x25fb97;if(_0x28fa06)return;_0x28fa06=!![],window[_0x1cbc25(0x5be)+'entLi'+'stene'+'r'](_0x1cbc25(0x44b)+'wn',_0x3de444,!![]),window['addEv'+'entLi'+'stene'+'r']('keyup',_0xb236bc,!![]),window[_0x1cbc25(0x5be)+_0x1cbc25(0x2ea)+_0x1cbc25(0x1b6)+'r'](_0x40b013[_0x1cbc25(0x34b)],_0x36b481,!![]),window[_0x1cbc25(0x5be)+_0x1cbc25(0x2ea)+_0x1cbc25(0x1b6)+'r'](_0x1cbc25(0x700)+'up',_0x1bcda5,!![]),window[_0x1cbc25(0x5be)+_0x1cbc25(0x2ea)+'stene'+'r'](_0x40b013['QTLOe'],_0x4e49d2);}function _0x44071a(_0x4b3532){var _0x37fa52=_0x25fb97;if(_0x40b013[_0x37fa52(0x21b)](_0x37fa52(0x394),_0x37fa52(0x394))){if(_0x9813c1[_0xa567bc]['id']&&_0x27b4bf[_0x26f02b]['id'][_0x37fa52(0x47f)+'Of'](_0x37fa52(0x4ef)+_0x37fa52(0x3f3))===0xee8+-0x17b0*0x1+0x8c8)_0x3b7c28[_0x1ccfd1]['style']['displ'+'ay']=_0x40b013[_0x37fa52(0x576)];}else{var _0x22d792=_0x2626ea[_0x4b3532]||[],_0x209145=performance[_0x37fa52(0x3fb)]();while(_0x22d792['lengt'+'h']&&_0x209145-_0x22d792[0x1563+0x1*-0x19db+0x478]>0x5*-0x269+0x287*-0xa+-0x1*-0x293b)_0x22d792[_0x37fa52(0x414)]();return _0x22d792[_0x37fa52(0x53f)+'h'];}}function _0xe00884(_0xf52ab5){var _0x4cbcfe=_0x25fb97;if(_0x4cbcfe(0x6f7)!==_0x40b013[_0x4cbcfe(0x1f0)]){var _0xb2d21b=_0x1b1765(_0x4a2d98,_0x5c95ba,_0x22ce53);if(_0xb2d21b!=null)_0x324efd(_0x4fbf39,_0x187aff,_0x977e3,_0xb2d21b*_0x1554fb);}else{if(document['body']&&(_0x40b013['AWPgE'](document[_0x4cbcfe(0x19d)+'State'],'inter'+_0x4cbcfe(0x25b)+'e')||document[_0x4cbcfe(0x19d)+_0x4cbcfe(0x24f)]===_0x4cbcfe(0x27e)+'ete'))_0x40b013[_0x4cbcfe(0x380)](_0xf52ab5);else document[_0x4cbcfe(0x5be)+'entLi'+_0x4cbcfe(0x1b6)+'r']('DOMCo'+_0x4cbcfe(0x5de)+_0x4cbcfe(0x56c)+'d',_0xf52ab5,{'once':!![]});}}_0xe00884(()=>{var _0x25cfee=_0x25fb97,_0x1db397={'ZXsNa':_0x25cfee(0x4ef)+'io_30'+'0x600'+_0x25cfee(0x6d6)+'nt','AsCkj':_0x25cfee(0x5fd)+_0x25cfee(0x3cf)+_0x25cfee(0x4da)+'s','WSnrP':function(_0x59388f,_0x4c882a){return _0x59388f<_0x4c882a;},'nzOJK':_0x25cfee(0x4ef)+_0x25cfee(0x3f3),'fYQXd':_0x40b013['ojxba'],'yvtKf':function(_0x18ed22,_0x5ad4d3){var _0x382c71=_0x25cfee;return _0x40b013[_0x382c71(0x3da)](_0x18ed22,_0x5ad4d3);},'jzPQW':function(_0x33061a,_0x4f7a05){return _0x33061a===_0x4f7a05;},'IxpAd':function(_0x66badb,_0x4d98e4){var _0x508514=_0x25cfee;return _0x40b013[_0x508514(0x25d)](_0x66badb,_0x4d98e4);},'XCxpS':'rgba('+_0x25cfee(0x2b0)+_0x25cfee(0x3f0)+_0x25cfee(0x1a4)+')','xPrXw':_0x40b013[_0x25cfee(0x282)],'IXieq':'px\x20ui'+'-sans'+_0x25cfee(0x4f7)+'f,sys'+_0x25cfee(0x1af)+_0x25cfee(0x46e)+'s-ser'+'if','zuFrj':function(_0x200dbf,_0x5e49be){return _0x200dbf+_0x5e49be;},'kFxKE':function(_0x39cf6a,_0x14189){return _0x39cf6a/_0x14189;},'VgYHd':function(_0x6cae3f,_0xabfa03){return _0x40b013['lGakM'](_0x6cae3f,_0xabfa03);},'RaFzp':function(_0xe9288b,_0x397f90){return _0xe9288b+_0x397f90;},'ARGjf':function(_0x22c367,_0x377789){return _0x22c367+_0x377789;},'vLIsW':function(_0x32aebe,_0x4c5979){return _0x32aebe+_0x4c5979;},'COtry':function(_0x35787e,_0xe1d09,_0x429b66,_0x2a342e,_0x13da6a,_0x22b2b4,_0x27c9cd){var _0x4dc0a1=_0x25cfee;return _0x40b013[_0x4dc0a1(0x61b)](_0x35787e,_0xe1d09,_0x429b66,_0x2a342e,_0x13da6a,_0x22b2b4,_0x27c9cd);},'YnikB':'KeyW','zSObC':function(_0x13ac65,_0x7120f3,_0x1717d2,_0x34463b,_0x4dfeed,_0x1c68d3,_0x437cf5){return _0x13ac65(_0x7120f3,_0x1717d2,_0x34463b,_0x4dfeed,_0x1c68d3,_0x437cf5);},'tMwWH':_0x25cfee(0x4a8),'WweqQ':_0x40b013['ZJfWY'],'uahRZ':function(_0x5814b8,_0x4154d5){return _0x5814b8*_0x4154d5;},'TvMME':function(_0x44a104,_0x3319d5){return _0x40b013['QxekO'](_0x44a104,_0x3319d5);},'eSLKR':function(_0x2af35c,_0x564a94,_0x1318a4,_0x51e037,_0x42d0ed,_0x37c93a,_0x610440,_0x4f7f06){return _0x40b013['SYIga'](_0x2af35c,_0x564a94,_0x1318a4,_0x51e037,_0x42d0ed,_0x37c93a,_0x610440,_0x4f7f06);},'wMQbp':_0x25cfee(0x700)+'1','NKyjM':function(_0x2e4cee,_0x3fc4f5){return _0x2e4cee(_0x3fc4f5);},'lZHtJ':function(_0x4f1569,_0x36574c){return _0x4f1569(_0x36574c);},'zmdYU':_0x25cfee(0x370),'RWehB':_0x25cfee(0x652),'daacC':function(_0x94e813,_0x3e61d9){return _0x94e813+_0x3e61d9;},'PcMAW':function(_0x183c12,_0x5234b8){var _0x4ed1fe=_0x25cfee;return _0x40b013[_0x4ed1fe(0x25d)](_0x183c12,_0x5234b8);},'rTCTJ':function(_0x1bdec0,_0x354bc8){return _0x1bdec0+_0x354bc8;},'rbcaj':function(_0x2a805b,_0x4f981c){var _0x426d9f=_0x25cfee;return _0x40b013[_0x426d9f(0x2bd)](_0x2a805b,_0x4f981c);},'Amhle':function(_0x483ee5,_0x1be949){return _0x483ee5(_0x1be949);},'nmcuN':function(_0x525993,_0x1dae58){return _0x525993*_0x1dae58;},'PlheM':function(_0x4eda19,_0x513a4d){return _0x4eda19(_0x513a4d);},'cVAwP':'sakur'+_0x25cfee(0x6ad)+_0x25cfee(0x60c)+'v1','WveWS':_0x25cfee(0x6d1),'wbOnf':function(_0x1b5d2e,_0x272b82){var _0x4c7e86=_0x25cfee;return _0x40b013[_0x4c7e86(0x246)](_0x1b5d2e,_0x272b82);},'iIMlp':function(_0xf49e7c,_0x18e07b){return _0x40b013['DQTTD'](_0xf49e7c,_0x18e07b);},'RxTpF':_0x40b013['IcKDD'],'THZwt':function(_0x3b5a73){return _0x3b5a73();},'hOiHm':_0x40b013['QAmrG'],'xzktF':_0x40b013['HqwyL'],'DSMEx':_0x40b013[_0x25cfee(0x646)],'PeVSG':_0x40b013[_0x25cfee(0x402)],'MsGgB':'butto'+'n','jBsFV':'div','gMWnf':_0x25cfee(0x52b)+_0x25cfee(0x1f6)+'ed','XOjuo':_0x40b013[_0x25cfee(0x6b9)],'zxPID':_0x25cfee(0x69a),'UIeec':_0x40b013['Cydvy'],'YMxQN':function(_0x145eda,_0x1efe75){return _0x145eda+_0x1efe75;},'rrfpG':function(_0x25470f,_0x40d0f2){return _0x40b013['SrFHc'](_0x25470f,_0x40d0f2);},'tNVwZ':'UWMK\x20'+'bound'+'\x20','HlNGI':function(_0x4144f5,_0x1b3414){return _0x4144f5+_0x1b3414;},'asBnv':_0x25cfee(0x470)+_0x25cfee(0x1a6)+'med\x20('+'all\x20o'+_0x25cfee(0x5c3),'rRoGr':_0x25cfee(0x616)+'d','QkpnL':'loadi'+'ng','cwrQh':_0x25cfee(0x548),'eYxjh':'\x20|\x20mo'+'vemen'+'t\x20','WYsbe':_0x25cfee(0x346),'eDwTn':'UWMK\x20'+_0x25cfee(0x636)+'NG\x20—\x20'+_0x25cfee(0x67b)+_0x25cfee(0x4fa)+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+'erscr'+_0x25cfee(0x657),'gBnSV':_0x25cfee(0x2df)+'s','oDtiP':function(_0x2ed1ba,_0x47642c,_0x498313){return _0x40b013['qamGh'](_0x2ed1ba,_0x47642c,_0x498313);},'lhNSA':_0x40b013[_0x25cfee(0x70f)],'dTNwh':_0x40b013['oWTlQ'],'hcnET':_0x25cfee(0x3f6)+'oil','NTzLl':'VJRLS','nicpp':_0x25cfee(0x49b),'WzWYO':function(_0xaac862){var _0x3000c5=_0x25cfee;return _0x40b013[_0x3000c5(0x380)](_0xaac862);},'QPtpv':_0x25cfee(0x6bb),'XdIRj':_0x40b013['SHSMT'],'lIJvi':_0x25cfee(0x552),'CmRdx':function(_0x35e6c5){return _0x40b013['mAEdp'](_0x35e6c5);},'XFgxt':_0x25cfee(0x260),'WnvhV':function(_0x371235,_0x200d73){var _0x539fcb=_0x25cfee;return _0x40b013[_0x539fcb(0x415)](_0x371235,_0x200d73);},'gPETN':_0x25cfee(0x656)+_0x25cfee(0x28a),'pZPPR':function(_0x51260d,_0x28d851){var _0x238b0f=_0x25cfee;return _0x40b013[_0x238b0f(0x3e7)](_0x51260d,_0x28d851);},'wXGal':_0x40b013[_0x25cfee(0x603)],'BsTnw':_0x25cfee(0x3d9),'ZulaH':_0x40b013[_0x25cfee(0x69f)],'hkZjK':function(_0x3b895c,_0x12e370){var _0x5c7e85=_0x25cfee;return _0x40b013[_0x5c7e85(0x330)](_0x3b895c,_0x12e370);},'ZNrAd':function(_0x3dcccf,_0x5f5b98){return _0x3dcccf+_0x5f5b98;},'jftfL':function(_0x24216c,_0x7040b7){return _0x40b013['SrFHc'](_0x24216c,_0x7040b7);},'PdOMJ':_0x40b013[_0x25cfee(0x211)],'cRnZu':_0x40b013[_0x25cfee(0x557)],'kJzqt':_0x25cfee(0x22e)+_0x25cfee(0x3e9),'OVJnd':_0x25cfee(0x303)+'a\x20Kou'+'r','batSc':_0x40b013[_0x25cfee(0x228)],'aFPxy':_0x40b013[_0x25cfee(0x2e0)],'OxbDI':_0x40b013[_0x25cfee(0x619)],'LwhGr':_0x40b013[_0x25cfee(0x33c)],'UcTJL':'mn-ta'+'b','MeUvF':function(_0x2c6c46,_0x4323f8){return _0x40b013['zGZtM'](_0x2c6c46,_0x4323f8);},'AQmSI':_0x40b013[_0x25cfee(0x2f5)]};_0x24889b[_0x25cfee(0x1bf)+'ck']&&(_0x40b013[_0x25cfee(0x3da)](_0x40b013['jhZop'],_0x25cfee(0x4c7))?_0x40b013[_0x25cfee(0x238)](setInterval,()=>{var _0x66ad36=_0x25cfee;try{for(var _0x3ec905 of[_0x66ad36(0x4ef)+'io_30'+'0x250'+'-pare'+'nt','kour-'+_0x66ad36(0x195)+_0x66ad36(0x4f5)+'paren'+'t',_0x1db397[_0x66ad36(0x1b7)],_0x1db397[_0x66ad36(0x689)]]){var _0x217aa2=document[_0x66ad36(0x63d)+'ement'+_0x66ad36(0x1cd)](_0x3ec905);if(_0x217aa2&&_0x3ec905===_0x66ad36(0x5fd)+_0x66ad36(0x3cf)+_0x66ad36(0x4da)+'s'){var _0x5bd192=_0x217aa2['child'+'ren'];for(var _0x513c5e=-0x233f+0x1783+0xbbc;_0x1db397['WSnrP'](_0x513c5e,_0x5bd192[_0x66ad36(0x53f)+'h']);_0x513c5e++){if(_0x5bd192[_0x513c5e]['id']&&_0x5bd192[_0x513c5e]['id'][_0x66ad36(0x47f)+'Of'](_0x1db397['nzOJK'])===0x17e2+0x23b+-0x1a1d)_0x5bd192[_0x513c5e]['style'][_0x66ad36(0x24a)+'ay']=_0x66ad36(0x346);}}else{if(_0x217aa2)_0x217aa2[_0x66ad36(0x5dc)]['displ'+'ay']=_0x66ad36(0x346);}}}catch(_0x425649){}},0x2148+-0x1b38+0x1*0x1c0):_0x29526b[_0x25cfee(0x620)+_0x25cfee(0x24c)+'d'](_0x282f7a));var _0x507675=document[_0x25cfee(0x1d0)+_0x25cfee(0x2a8)+'ent'](_0x40b013['jhVNC']);_0x507675[_0x25cfee(0x5dc)]['cssTe'+'xt']=_0x25cfee(0x524)+_0x25cfee(0x230)+_0x25cfee(0x5e8)+'inset'+_0x25cfee(0x3e1)+_0x25cfee(0x68a)+'00vw;'+'heigh'+_0x25cfee(0x237)+_0x25cfee(0x1dc)+_0x25cfee(0x47f)+':2147'+_0x25cfee(0x5d6)+'6;poi'+_0x25cfee(0x4a3)+'event'+_0x25cfee(0x625)+'e';var _0x19b88e=_0x507675['getCo'+_0x25cfee(0x485)]('2d');function _0x227aea(){var _0x1782b2=_0x25cfee;try{var _0x98a692=document['fulls'+_0x1782b2(0x3cf)+_0x1782b2(0x326)+'nt'],_0x32a71a=_0x98a692&&_0x98a692['tagNa'+'me']!==_0x1db397['fYQXd']?_0x98a692:document[_0x1782b2(0x6cb)]||document[_0x1782b2(0x43c)+_0x1782b2(0x194)+_0x1782b2(0x49f)];if(_0x1db397[_0x1782b2(0x1ed)](_0x507675[_0x1782b2(0x66d)+_0x1782b2(0x4e2)],_0x32a71a))_0x32a71a[_0x1782b2(0x620)+_0x1782b2(0x24c)+'d'](_0x507675);}catch(_0x2f3750){try{if(_0x1db397['jzPQW'](_0x1782b2(0x5aa),'FbkMI')){var _0x439e37=_0x2aabca[_0x1782b2(0x1d0)+'eElem'+'ent']('optio'+'n');_0x439e37[_0x1782b2(0x554)]=_0x5cac4b,_0x439e37['textC'+'onten'+'t']=_0x4cdc86,_0x59b02e[_0x1782b2(0x620)+_0x1782b2(0x24c)+'d'](_0x439e37);}else document[_0x1782b2(0x6cb)]['appen'+'dChil'+'d'](_0x507675);}catch(_0x1aa3b1){}}}var _0x3bbaaa={'w':0x0,'h':0x0,'dpr':0x0};function _0x2a8923(){var _0x206b3b=_0x25cfee;if(_0x40b013['dPvKl'](_0x40b013[_0x206b3b(0x686)],_0x40b013['fJuUZ']))_0x31a6e0[_0x206b3b(0x6a5)+_0x206b3b(0x676)]=_0x237f2b,_0x144e2e();else{var _0x174458=('0|6|8'+_0x206b3b(0x263)+_0x206b3b(0x513)+'|1')['split']('|'),_0x400b05=0x4*-0x634+-0x665*-0x1+0x126b;while(!![]){switch(_0x174458[_0x400b05++]){case'0':var _0x4e8d0f=window[_0x206b3b(0x384)+_0x206b3b(0x353)+_0x206b3b(0x313)+'o']||-0x2077+0x1*-0x1a8d+0x209*0x1d;continue;case'1':_0x19b88e[_0x206b3b(0x6b4)+_0x206b3b(0x338)+'rm'](_0x4e8d0f,0x2*-0x411+0x66e*-0x1+-0xe90*-0x1,0x1*-0x2177+-0x5*0x773+-0x35e*-0x15,_0x4e8d0f,-0xdb8+-0x17*0xc1+0x1f0f,-0x326+0x1ffc+0x2*-0xe6b);continue;case'2':_0x3bbaaa['w']=_0x22fbf1;continue;case'3':_0x3bbaaa['h']=_0x233ad9;continue;case'4':_0x507675[_0x206b3b(0x46b)+'t']=Math['round'](_0x233ad9*_0x4e8d0f);continue;case'5':_0x3bbaaa[_0x206b3b(0x4ec)]=_0x4e8d0f;continue;case'6':var _0x22fbf1=window[_0x206b3b(0x511)+'Width'],_0x233ad9=window['inner'+_0x206b3b(0x3db)+'t'];continue;case'7':_0x507675[_0x206b3b(0x6fe)]=Math[_0x206b3b(0x19e)](_0x22fbf1*_0x4e8d0f);continue;case'8':if(_0x40b013[_0x206b3b(0x650)](_0x22fbf1,_0x3bbaaa['w'])&&_0x40b013['gyjQT'](_0x233ad9,_0x3bbaaa['h'])&&_0x4e8d0f===_0x3bbaaa[_0x206b3b(0x4ec)])return;continue;}break;}}}var _0x1a36d8=0x342+-0x1*-0xc0b+0x1*-0xf4d,_0x2c3ee2=performance['now'](),_0x162ec4=-0xa54+0x1*-0x359+0xdad;function _0x4e6ca3(_0x5cd0dc){var _0x2a708e=_0x25cfee,_0x4cac39=Number(_0x24889b[_0x2a708e(0x56b)+'le'])||-0x29*0x7+0x109b+-0xf7b*0x1,_0xeac02d=(-0x925+0x4b4+0x1*0x493)*_0x4cac39,_0x2f39bd=(0x7*0x1bf+0x1*-0x1b7a+0xf45)*_0x4cac39,_0x51effb=_0xeac02d*(-0x7a+-0xfe5+0x2bb*0x6)+_0x1db397['IxpAd'](_0x2f39bd,-0x1645+0x1932+-0x2eb*0x1),_0x84e17f=_0xeac02d*(-0xd4d+-0x2695+0x33e5*0x1)+_0x2f39bd*(-0x27f*0x1+-0x15e1+0x1862),_0x45826c=_0x24889b[_0x2a708e(0x2ae)],_0x1220e2=_0x1db397['jzPQW'](_0x45826c,'br')?_0x5cd0dc[_0x2a708e(0x59b)]-(0x36*-0x52+0x15a*0x1b+0x1f*-0x9e)-_0x51effb:_0x1db397['vLIsW'](_0x5cd0dc[_0x2a708e(0x3ab)],0x1*-0x23ef+-0x1981+0x3d80),_0x371f45=_0x45826c==='ml'?_0x1db397[_0x2a708e(0x2f3)](_0x1db397[_0x2a708e(0x1c3)](_0x5cd0dc[_0x2a708e(0x1fe)],_0x1db397[_0x2a708e(0x4ea)](_0x5cd0dc['heigh'+'t'],-0x20d7+-0x204a+0x4123)),_0x84e17f/(0x89f+0x2361*-0x1+0x1ac4)):_0x1db397['VgYHd'](_0x5cd0dc[_0x2a708e(0x18f)+'m'],_0x84e17f)-(_0x45826c==='bl'?0x1*-0xa85+-0x8b+-0x8*-0x16e:0x164a+-0x1*-0x1e95+0x5*-0xa75),_0x22488d=(_0x5b5005,_0x360ead,_0xf81567,_0x285e49,_0xb5b9e1,_0x100f3b,_0x4eade0)=>{var _0x4e19f1=_0x2a708e,_0x4d2e2d={'mCzuL':function(_0x2c7ffe){return _0x2c7ffe();}},_0x2b8ca5=_0x666bc8[_0x4e19f1(0x478)](_0x360ead);_0x19b88e['save'](),_0x19b88e[_0x4e19f1(0x4f2)+'Path']();if(_0x19b88e['round'+_0x4e19f1(0x623)])_0x19b88e[_0x4e19f1(0x19e)+_0x4e19f1(0x623)](_0xf81567,_0x285e49,_0xb5b9e1,_0x100f3b,_0x1db397['IxpAd'](0x8fe+-0x1*-0x19ab+0x22a2*-0x1,_0x4cac39));else _0x19b88e['rect'](_0xf81567,_0x285e49,_0xb5b9e1,_0x100f3b);_0x19b88e[_0x4e19f1(0x5c8)+'tyle']=_0x2b8ca5?'rgba('+_0x4e19f1(0x432)+_0x4e19f1(0x30c)+'7,0.8'+'5)':_0x4e19f1(0x295)+'22,8,'+_0x4e19f1(0x6f9)+'7)',_0x19b88e['fill'](),_0x19b88e[_0x4e19f1(0x413)+_0x4e19f1(0x438)]=0x1e25+0x5*0x448+0xce3*-0x4,_0x19b88e['strok'+'eStyl'+'e']=_0x2b8ca5?_0x25bd9c:'rgba('+_0x4e19f1(0x432)+_0x4e19f1(0x30c)+_0x4e19f1(0x1ce)+'5)',_0x19b88e[_0x4e19f1(0x4d5)+'e'](),_0x2b8ca5&&(_0x4e19f1(0x373)===_0x4e19f1(0x373)?(_0x19b88e['shado'+_0x4e19f1(0x416)+'r']=_0x3be22b,_0x19b88e[_0x4e19f1(0x404)+'wBlur']=0x1daa+-0x1*-0x1615+-0x33b1,_0x19b88e[_0x4e19f1(0x1a5)](),_0x19b88e['shado'+'wBlur']=0xd4c+0x9e6+-0x1*0x1732):(_0x28b1f9['cross'+_0x4e19f1(0x701)]=_0x1ee831,_0x4d2e2d[_0x4e19f1(0x3a2)](_0xf830ff))),_0x19b88e['fillS'+_0x4e19f1(0x37f)]=_0x2b8ca5?_0x4e19f1(0x5d1):_0x1db397['XCxpS'],_0x19b88e[_0x4e19f1(0x383)+_0x4e19f1(0x58f)]=_0x1db397[_0x4e19f1(0x52d)],_0x19b88e['textB'+_0x4e19f1(0x4a1)+'ne']=_0x4e19f1(0x3fa)+'e',_0x19b88e['font']=_0x4e19f1(0x5b2)+Math['round']((-0x6a*-0x4a+-0x99f+-0x14f9)*_0x4cac39)+_0x1db397['IXieq'],_0x19b88e['fillT'+'ext'](_0x5b5005,_0x1db397['zuFrj'](_0xf81567,_0x1db397[_0x4e19f1(0x4ea)](_0xb5b9e1,0x3*0x957+-0x1*0x2219+0x26*0x29)),_0x1db397['VgYHd'](_0x285e49+_0x1db397[_0x4e19f1(0x4ea)](_0x100f3b,-0x588+-0x3*0x86f+0x1ed7),_0x4eade0?(-0x1*0xe7f+-0xdbe+0x1c42)*_0x4cac39:-0xb3b+0x103d*-0x2+0x2bb5)),_0x4eade0&&(_0x19b88e[_0x4e19f1(0x617)]=_0x1db397[_0x4e19f1(0x704)](_0x1db397[_0x4e19f1(0x5e0)](_0x4e19f1(0x51c),Math[_0x4e19f1(0x19e)]((-0x1134+0x18b3+-0x776)*_0x4cac39)),_0x4e19f1(0x4d2)+_0x4e19f1(0x224)+'-seri'+_0x4e19f1(0x1e6)+'tem-u'+_0x4e19f1(0x46e)+_0x4e19f1(0x449)+'if'),_0x19b88e[_0x4e19f1(0x5c8)+_0x4e19f1(0x37f)]=_0x2b8ca5?_0x4e19f1(0x5d1):_0x4e19f1(0x295)+_0x4e19f1(0x2b0)+_0x4e19f1(0x3f0)+'0,0.5'+'5)',_0x19b88e[_0x4e19f1(0x1f2)+'ext'](_0x4eade0,_0x1db397[_0x4e19f1(0x704)](_0xf81567,_0xb5b9e1/(0x1ef0+0x11*-0x61+-0x187d)),_0x1db397[_0x4e19f1(0x704)](_0x285e49+_0x1db397['kFxKE'](_0x100f3b,0x655+0x88d*-0x4+0x27*0xb7),(0x47d+0x1*0x161f+-0x2f4*0x9)*_0x4cac39))),_0x19b88e[_0x4e19f1(0x3af)+'re']();};_0x1db397['COtry'](_0x22488d,'W',_0x1db397[_0x2a708e(0x3a4)],_0x1220e2+_0xeac02d+_0x2f39bd,_0x371f45,_0xeac02d,_0xeac02d),_0x1db397['zSObC'](_0x22488d,'A',_0x1db397[_0x2a708e(0x256)],_0x1220e2,_0x1db397['vLIsW'](_0x371f45+_0xeac02d,_0x2f39bd),_0xeac02d,_0xeac02d),_0x1db397[_0x2a708e(0x673)](_0x22488d,'S','KeyS',_0x1220e2+_0xeac02d+_0x2f39bd,_0x1db397[_0x2a708e(0x1fc)](_0x371f45+_0xeac02d,_0x2f39bd),_0xeac02d,_0xeac02d),_0x22488d('D',_0x1db397['WweqQ'],_0x1db397[_0x2a708e(0x5e0)](_0x1220e2,_0x1db397[_0x2a708e(0x27d)](_0xeac02d+_0x2f39bd,-0x42d*-0x1+-0xbc1+-0x3cb*-0x2)),_0x1db397[_0x2a708e(0x1c3)](_0x371f45+_0xeac02d,_0x2f39bd),_0xeac02d,_0xeac02d);var _0xddf3cd=_0x1db397[_0x2a708e(0x50b)](_0x1db397['VgYHd'](_0x51effb,_0x2f39bd),0xfbb*-0x2+0xed7+0x1d9*0x9),_0x4fe4c8=_0x371f45+_0x1db397[_0x2a708e(0x1c3)](_0xeac02d,_0x2f39bd)*(-0x11*-0x1ca+0x538*0x2+-0x28d8);_0x1db397[_0x2a708e(0x33a)](_0x22488d,'LMB',_0x1db397['wMQbp'],_0x1220e2,_0x4fe4c8,_0xddf3cd,_0xeac02d,_0x24889b['ksCps']?_0x1db397['NKyjM'](_0x44071a,0x149d+-0xb*-0xb1+-0x1c37*0x1)+'\x20CPS':''),_0x22488d(_0x2a708e(0x666),_0x2a708e(0x700)+'3',_0x1220e2+_0xddf3cd+_0x2f39bd,_0x4fe4c8,_0xddf3cd,_0xeac02d,_0x24889b[_0x2a708e(0x2a4)]?_0x1db397['lZHtJ'](_0x44071a,0xbf4+-0x1*-0xa2f+0x8*-0x2c4)+_0x1db397[_0x2a708e(0x1f3)]:''),_0x22488d('',_0x1db397[_0x2a708e(0x510)],_0x1220e2,_0x1db397['daacC'](_0x1db397[_0x2a708e(0x1fc)](_0x4fe4c8,_0xeac02d),_0x2f39bd),_0x51effb,_0x1db397[_0x2a708e(0x27d)](_0xeac02d,-0x1*0x2171+0x219f+0x2*-0x17+0.45));}function _0x1c1c48(_0x593021){var _0x9f458=_0x25cfee,_0x3aa4d1=_0x593021[_0x9f458(0x6fe)]/(-0x52*0x5+-0x788+0x30c*0x3),_0x3c1d00=_0x593021[_0x9f458(0x46b)+'t']/(0x505*0x5+0x25c+0x1b73*-0x1),_0x59de95=_0x1db397[_0x9f458(0x314)](Number,_0x24889b['chSiz'+'e'])||-0xd91*0x1+0x9e6+0x3ac,_0x3a557c=/^#[0-9a-f]{6}$/i['test'](_0x24889b['chCol'+'or'])?_0x24889b['chCol'+'or']:'#ff6b'+'9d';_0x19b88e['save'](),_0x19b88e[_0x9f458(0x4d5)+_0x9f458(0x3bd)+'e']=_0x3a557c,_0x19b88e['fillS'+'tyle']=_0x3a557c,_0x19b88e['lineW'+_0x9f458(0x438)]=Math[_0x9f458(0x5a7)](0x2191+-0x3d*-0x8+-0x2378+0.5,_0x1db397[_0x9f458(0x50e)](0x8be*-0x3+0x1a3*-0xd+-0x1*-0x2f83,_0x59de95)),_0x19b88e[_0x9f458(0x404)+'wColo'+'r']=_0x3a557c,_0x19b88e[_0x9f458(0x404)+_0x9f458(0x60d)]=0x97b*-0x4+0x612+-0x55*-0x60;var _0x4db352=(-0x11ab*-0x1+-0x6*-0x65c+-0x5*0xb29)*_0x59de95,_0xf36db3=(-0x21a3+-0x5*-0x28e+0x6f7*0x3)*_0x59de95;_0x19b88e['begin'+_0x9f458(0x381)](),_0x19b88e[_0x9f458(0x500)+'o'](_0x3aa4d1-_0x4db352-_0xf36db3,_0x3c1d00),_0x19b88e['lineT'+'o'](_0x3aa4d1-_0x4db352,_0x3c1d00),_0x19b88e[_0x9f458(0x500)+'o'](_0x1db397['rTCTJ'](_0x3aa4d1,_0x4db352),_0x3c1d00),_0x19b88e[_0x9f458(0x281)+'o'](_0x3aa4d1+_0x4db352+_0xf36db3,_0x3c1d00),_0x19b88e['moveT'+'o'](_0x3aa4d1,_0x1db397[_0x9f458(0x62a)](_0x3c1d00,_0x4db352)-_0xf36db3),_0x19b88e[_0x9f458(0x281)+'o'](_0x3aa4d1,_0x3c1d00-_0x4db352),_0x19b88e['moveT'+'o'](_0x3aa4d1,_0x3c1d00+_0x4db352),_0x19b88e[_0x9f458(0x281)+'o'](_0x3aa4d1,_0x3c1d00+_0x4db352+_0xf36db3),_0x19b88e['strok'+'e'](),_0x19b88e['begin'+_0x9f458(0x381)](),_0x19b88e[_0x9f458(0x198)](_0x3aa4d1,_0x3c1d00,(0xffe+-0x158+-0x17*0xa3+0.6000000000000001)*_0x59de95,-0x12e*-0x14+-0xcc9*0x1+0xacf*-0x1,_0x1db397['PcMAW'](Math['PI'],-0x1e42+-0x38f*0x9+0x3e4b)),_0x19b88e[_0x9f458(0x1a5)](),_0x19b88e[_0x9f458(0x3af)+'re']();}function _0x2dc31d(_0x17bb22){var _0x20b70=_0x25cfee,_0x8e6963={'nsCXE':function(_0x591bcd,_0x4625a9){var _0xd009e6=_0x3039;return _0x40b013[_0xd009e6(0x600)](_0x591bcd,_0x4625a9);}};_0x19b88e['save'](),_0x19b88e['font']=_0x40b013[_0x20b70(0x651)],_0x19b88e['textA'+_0x20b70(0x58f)]=_0x20b70(0x3ab),_0x19b88e['textB'+'aseli'+'ne']='top';var _0x143deb=0xe30+0x21*-0xe1+-0x1*-0xefd,_0x249e24=-0x256*-0xd+0x40*0x2+-0x1ed2,_0xf0f6ed=(_0x295ade,_0x4e802a)=>{var _0x1c4724=_0x20b70;_0x19b88e[_0x1c4724(0x5c8)+_0x1c4724(0x37f)]=_0x8e6963[_0x1c4724(0x555)](_0x4e802a,_0x1c4724(0x295)+'255,2'+_0x1c4724(0x3f0)+_0x1c4724(0x3c6)+'5)'),_0x19b88e[_0x1c4724(0x1f2)+'ext'](_0x295ade,_0x249e24,_0x143deb),_0x143deb+=-0x4*0x5fc+0x25e8+0x164*-0xa;};_0x40b013[_0x20b70(0x569)](_0xf0f6ed,_0x40b013['Ilnsa'],_0x20b70(0x5e2)+'9d');if(_0x24889b['fps'])_0x40b013[_0x20b70(0x6aa)](_0xf0f6ed,_0x162ec4+_0x40b013['hBMVK']);if(!_0x3431d9['gameL'+_0x20b70(0x3a5)])_0x40b013[_0x20b70(0x3b2)](_0xf0f6ed,'waiti'+_0x20b70(0x62e)+_0x20b70(0x5ff)+'e…',_0x40b013['mEUmy']);_0x19b88e[_0x20b70(0x3af)+'re']();}function _0x4ae4c6(){var _0x2387d6=_0x25cfee;_0x1db397['Amhle'](requestAnimationFrame,_0x4ae4c6),_0x1a36d8++;var _0x466377=performance['now']();_0x1db397['rbcaj'](_0x466377,_0x2c3ee2)>=-0x22b5+0xb49+0x1960&&(_0x162ec4=Math['round'](_0x1db397['nmcuN'](_0x1a36d8,-0x7a0*-0x5+-0x14c9+-0x13*0xb5)/_0x1db397[_0x2387d6(0x2f3)](_0x466377,_0x2c3ee2)),_0x1a36d8=0xa*0x38c+-0x1c*0x27+0x7cd*-0x4,_0x2c3ee2=_0x466377);_0x2a8923(),_0x227aea(),_0x19b88e[_0x2387d6(0x3b8)+_0x2387d6(0x623)](0xede+0x1f57+-0x2e35,-0x20ef+0x22a1+0x3e*-0x7,_0x3bbaaa['w'],_0x3bbaaa['h']);var _0x290938={'left':0x0,'top':0x0,'right':_0x3bbaaa['w'],'bottom':_0x3bbaaa['h'],'width':_0x3bbaaa['w'],'height':_0x3bbaaa['h']};if(_0x24889b['cross'+_0x2387d6(0x701)])_0x1c1c48(_0x290938);if(_0x24889b['keyst'+_0x2387d6(0x4b0)])_0x1db397[_0x2387d6(0x566)](_0x4e6ca3,_0x290938);_0x2dc31d(_0x290938);}var _0x14ab63=document[_0x25cfee(0x1d0)+'eElem'+'ent'](_0x25cfee(0x611));_0x14ab63['id']=_0x25cfee(0x2b4)+'a-ui',_0x14ab63['style'][_0x25cfee(0x1a7)+'xt']=_0x25cfee(0x524)+'ion:f'+'ixed;'+_0x25cfee(0x5c2)+':0;z-'+'index'+_0x25cfee(0x408)+'48364'+_0x25cfee(0x3e6)+'nter-'+'event'+_0x25cfee(0x625)+'e;';var _0x4c70ba=_0x14ab63[_0x25cfee(0x53b)+_0x25cfee(0x69d)+'ow']({'mode':_0x40b013['VIShb']});(document['body']||document['docum'+_0x25cfee(0x194)+'ement'])[_0x25cfee(0x620)+'dChil'+'d'](_0x14ab63);var _0x50cbc9=![],_0x52d03c={};try{_0x52d03c=JSON['parse'](localStorage[_0x25cfee(0x70a)+'em'](_0x25cfee(0x2b4)+_0x25cfee(0x6ad)+'r.ui.'+'v1')||'{}');}catch(_0x83c3a3){}function _0x2bd053(){var _0x15db9c=_0x25cfee;try{localStorage['setIt'+'em'](_0x1db397[_0x15db9c(0x200)],JSON[_0x15db9c(0x23d)+_0x15db9c(0x421)](_0x52d03c));}catch(_0x91bc35){}}function _0x306a13(_0x20bb4b,_0x23c53c){var _0x237bf4=_0x25cfee,_0x9c6364=document['creat'+_0x237bf4(0x2a8)+_0x237bf4(0x251)](_0x237bf4(0x270)+'n');return _0x9c6364[_0x237bf4(0x6cc)]=_0x40b013[_0x237bf4(0x245)],_0x9c6364[_0x237bf4(0x4d4)+_0x237bf4(0x378)]=_0x237bf4(0x691)+'itch',_0x9c6364['setAt'+'tribu'+'te']('role',_0x237bf4(0x1d1)+'h'),_0x9c6364['setAt'+'tribu'+'te']('aria-'+_0x237bf4(0x1f6)+'ed',String(!!_0x20bb4b)),_0x9c6364['oncli'+'ck']=_0x5d3e41=>{var _0x3ad9a5=_0x237bf4;_0x5d3e41[_0x3ad9a5(0x579)+_0x3ad9a5(0x493)+_0x3ad9a5(0x601)]();var _0x4192a3=_0x9c6364['getAt'+_0x3ad9a5(0x18e)+'te'](_0x3ad9a5(0x52b)+_0x3ad9a5(0x1f6)+'ed')!=='true';_0x9c6364[_0x3ad9a5(0x5e7)+'tribu'+'te']('aria-'+'check'+'ed',String(_0x4192a3)),_0x23c53c(_0x4192a3);},_0x9c6364;}function _0x1f2bed(_0x446a23,_0x15682e,_0x2a2017,_0x529e7d,_0x12c84e){var _0x5b23bc=_0x25cfee,_0x2a361f={'UJAeB':_0x5b23bc(0x6d3)+'ra-ko'+'ur]\x20U'+_0x5b23bc(0x1d3)+_0x5b23bc(0x59a)+_0x5b23bc(0x42d)+':'},_0x1fd4a8=document[_0x5b23bc(0x1d0)+'eElem'+'ent']('div');_0x1fd4a8[_0x5b23bc(0x4d4)+_0x5b23bc(0x378)]=_0x1db397[_0x5b23bc(0x342)];var _0x592a5=document[_0x5b23bc(0x1d0)+_0x5b23bc(0x2a8)+_0x5b23bc(0x251)](_0x5b23bc(0x50a));_0x592a5[_0x5b23bc(0x6cc)]='range',_0x592a5['class'+'Name']=_0x1db397[_0x5b23bc(0x49d)],_0x592a5[_0x5b23bc(0x249)]=_0x15682e,_0x592a5['max']=_0x2a2017,_0x592a5[_0x5b23bc(0x39c)]=_0x529e7d,_0x592a5['value']=_0x446a23;var _0x3ca586=document[_0x5b23bc(0x1d0)+'eElem'+'ent'](_0x1db397['DSMEx']);_0x3ca586[_0x5b23bc(0x4d4)+_0x5b23bc(0x378)]=_0x1db397['PeVSG'],_0x3ca586['textC'+_0x5b23bc(0x2b5)+'t']=String(_0x446a23);var _0x32d0a6=()=>{var _0x303294=_0x5b23bc;'rAxQV'===_0x1db397['WveWS']?_0x3e0e5b['warn'](_0x2a361f[_0x303294(0x227)],_0x2e3850&&_0x35a270[_0x303294(0x57a)+'ge']):(_0x3ca586[_0x303294(0x2d1)+_0x303294(0x2b5)+'t']=_0x1db397[_0x303294(0x65b)](String,_0x592a5[_0x303294(0x554)]),_0x1fd4a8[_0x303294(0x5dc)]['setPr'+'opert'+'y'](_0x303294(0x199),_0x1db397[_0x303294(0x457)](_0x1db397['TvMME'](_0x1db397['rbcaj'](_0x592a5[_0x303294(0x554)],_0x15682e),_0x2a2017-_0x15682e),-0xe24+-0x92*0x5+0x1162)+'%'));};return _0x592a5[_0x5b23bc(0x34d)+'ut']=()=>{var _0x4d312d=_0x5b23bc,_0x58a03c={'iDrOe':_0x4d312d(0x4ef)+_0x4d312d(0x3d7)+_0x4d312d(0x257)+_0x4d312d(0x6d6)+'nt','JmCoo':_0x1db397[_0x4d312d(0x1b7)],'SVGwW':function(_0x4fb480,_0x132493){return _0x4fb480===_0x132493;},'KVOpw':'fulls'+'creen'+_0x4d312d(0x4da)+'s','ZtQwc':function(_0x3f5e07,_0x5e8082){return _0x1db397['iIMlp'](_0x3f5e07,_0x5e8082);},'hBCub':_0x1db397[_0x4d312d(0x692)]};if(_0x1db397[_0x4d312d(0x1ed)](_0x4d312d(0x5d8),_0x1db397[_0x4d312d(0x461)]))_0x1db397['THZwt'](_0x32d0a6),_0x12c84e(Number(_0x592a5[_0x4d312d(0x554)]));else for(var _0x2a0259 of[_0x58a03c[_0x4d312d(0x36b)],_0x4d312d(0x4ef)+'io_72'+'8x90-'+_0x4d312d(0x66d)+'t',_0x58a03c[_0x4d312d(0x26b)],_0x4d312d(0x5fd)+_0x4d312d(0x3cf)+_0x4d312d(0x4da)+'s']){var _0xfd2eb8=_0x1f7e7d['getEl'+'ement'+_0x4d312d(0x1cd)](_0x2a0259);if(_0xfd2eb8&&_0x58a03c[_0x4d312d(0x45c)](_0x2a0259,_0x58a03c[_0x4d312d(0x21d)])){var _0x2cbbe9=_0xfd2eb8['child'+'ren'];for(var _0x313255=0x1993*-0x1+-0x1f6+-0x1b89*-0x1;_0x58a03c[_0x4d312d(0x59c)](_0x313255,_0x2cbbe9[_0x4d312d(0x53f)+'h']);_0x313255++){if(_0x2cbbe9[_0x313255]['id']&&_0x2cbbe9[_0x313255]['id']['index'+'Of'](_0x58a03c['hBCub'])===-0x159e+0xbec+0x49*0x22)_0x2cbbe9[_0x313255][_0x4d312d(0x5dc)]['displ'+'ay']=_0x4d312d(0x346);}}else{if(_0xfd2eb8)_0xfd2eb8[_0x4d312d(0x5dc)][_0x4d312d(0x24a)+'ay']=_0x4d312d(0x346);}}},_0x1db397[_0x5b23bc(0x345)](_0x32d0a6),_0x1fd4a8['appen'+'d'](_0x592a5,_0x3ca586),_0x1fd4a8;}function _0x522ea8(_0x29af01,_0x3f4c1b){var _0x174099=_0x25cfee,_0x5a2c14=document[_0x174099(0x1d0)+_0x174099(0x2a8)+_0x174099(0x251)]('input');return _0x5a2c14['type']='color',_0x5a2c14[_0x174099(0x4d4)+_0x174099(0x378)]=_0x40b013['lmxsL'],_0x5a2c14[_0x174099(0x554)]=/^#[0-9a-f]{6}$/i[_0x174099(0x514)](_0x29af01)?_0x29af01:_0x174099(0x5e2)+'9d',_0x5a2c14[_0x174099(0x34d)+'ut']=()=>_0x3f4c1b(_0x5a2c14[_0x174099(0x554)]),_0x5a2c14;}function _0x129053(_0x2bc814,_0x1933ea,_0x302c26){var _0x509172=_0x25cfee,_0x219885=_0x40b013[_0x509172(0x6d0)][_0x509172(0x520)]('|'),_0x58e9bb=-0x680+0x557*0x5+-0x1*0x1433;while(!![]){switch(_0x219885[_0x58e9bb++]){case'0':return _0x593f88;case'1':_0x593f88['class'+'Name']=_0x40b013[_0x509172(0x38f)];continue;case'2':var _0x593f88=document[_0x509172(0x1d0)+_0x509172(0x2a8)+'ent'](_0x509172(0x3f1)+'t');continue;case'3':_0x593f88[_0x509172(0x6c7)+_0x509172(0x2b8)]=()=>_0x302c26(_0x593f88[_0x509172(0x554)]);continue;case'4':_0x593f88['value']=_0x2bc814;continue;case'5':for(var [_0x5b0d73,_0x320088]of _0x1933ea){var _0x37f0d3=document['creat'+_0x509172(0x2a8)+'ent'](_0x509172(0x1f7)+'n');_0x37f0d3[_0x509172(0x554)]=_0x5b0d73,_0x37f0d3[_0x509172(0x2d1)+_0x509172(0x2b5)+'t']=_0x320088,_0x593f88[_0x509172(0x620)+_0x509172(0x24c)+'d'](_0x37f0d3);}continue;}break;}}function _0x5d4653(_0x4d950f,_0x161ee2){var _0x43d894=_0x25cfee,_0x58ddf5=document['creat'+'eElem'+_0x43d894(0x251)](_0x1db397[_0x43d894(0x559)]);return _0x58ddf5[_0x43d894(0x6cc)]='butto'+'n',_0x58ddf5[_0x43d894(0x4d4)+'Name']='sk-bt'+'n',_0x58ddf5['textC'+'onten'+'t']=_0x4d950f,_0x58ddf5['oncli'+'ck']=_0xe51130=>{var _0x3a70e6=_0x43d894;_0xe51130['stopP'+'ropag'+_0x3a70e6(0x601)](),_0x161ee2();},_0x58ddf5;}function _0x9371ab(_0x50cfd7,_0x5b02a8,_0x23624d){var _0x4a0b7f=_0x25cfee,_0x19d1b8=document['creat'+_0x4a0b7f(0x2a8)+'ent'](_0x40b013[_0x4a0b7f(0x463)]);_0x19d1b8['class'+'Name']='sk-ct'+'l';var _0x808035=document[_0x4a0b7f(0x1d0)+_0x4a0b7f(0x2a8)+'ent'](_0x40b013[_0x4a0b7f(0x646)]);_0x808035[_0x4a0b7f(0x4d4)+_0x4a0b7f(0x378)]=_0x4a0b7f(0x445)+_0x4a0b7f(0x2a7),_0x808035[_0x4a0b7f(0x2d1)+_0x4a0b7f(0x2b5)+'t']=_0x50cfd7;if(_0x5b02a8){var _0x4d5b5c=document[_0x4a0b7f(0x1d0)+'eElem'+_0x4a0b7f(0x251)](_0x4a0b7f(0x3bc));_0x4d5b5c[_0x4a0b7f(0x4d4)+_0x4a0b7f(0x378)]='sk-hi'+'nt',_0x4d5b5c['textC'+_0x4a0b7f(0x2b5)+'t']=_0x5b02a8,_0x808035[_0x4a0b7f(0x620)+_0x4a0b7f(0x24c)+'d'](_0x4d5b5c);}return _0x19d1b8[_0x4a0b7f(0x620)+'d'](_0x808035,_0x23624d),_0x19d1b8;}function _0x9900b6(_0x175951,_0x1f04a2){var _0x3232a1=_0x25cfee,_0x501352=document[_0x3232a1(0x1d0)+'eElem'+'ent'](_0x1db397[_0x3232a1(0x248)]);return _0x501352['class'+_0x3232a1(0x378)]=_0x3232a1(0x398)+'te'+(_0x1f04a2?_0x3232a1(0x46f):''),_0x501352['textC'+'onten'+'t']=_0x175951,_0x501352;}function _0x31b88a(_0x48ed98,_0x46e46c,_0x1bbc43,_0x2d550c,_0x2211b6){var _0x5a9e58=_0x25cfee;if(_0x40b013['jKoZV'](_0x5a9e58(0x635),_0x5a9e58(0x2b9)))_0x41a058['setIt'+'em'](_0x5a9e58(0x2b4)+_0x5a9e58(0x6ad)+'r.v1',_0x53d1ce['strin'+'gify'](_0x101bc8));else{var _0xd6b8a4=document['creat'+'eElem'+'ent']('div');_0xd6b8a4[_0x5a9e58(0x4d4)+_0x5a9e58(0x378)]=_0x40b013[_0x5a9e58(0x30b)]+(_0x1bbc43?_0x40b013[_0x5a9e58(0x3ac)]:'');var _0x5b1fee=document[_0x5a9e58(0x1d0)+'eElem'+_0x5a9e58(0x251)](_0x40b013['Lmsmx']);_0x5b1fee[_0x5a9e58(0x4d4)+'Name']=_0x40b013[_0x5a9e58(0x2e6)];var _0xb0691d=document[_0x5a9e58(0x1d0)+'eElem'+'ent'](_0x40b013['Lmsmx']);_0xb0691d['class'+_0x5a9e58(0x378)]=_0x5a9e58(0x521)+_0x5a9e58(0x578)+_0x5a9e58(0x69c);var _0xdc64bd=document[_0x5a9e58(0x1d0)+_0x5a9e58(0x2a8)+'ent'](_0x5a9e58(0x38b)+'g');_0xdc64bd['textC'+'onten'+'t']=_0x48ed98,_0xb0691d['appen'+_0x5a9e58(0x24c)+'d'](_0xdc64bd);if(_0x2d550c){var _0x1e8e27=_0x40b013['FCxdC'](_0x306a13,_0x1bbc43,_0x336e8d=>{var _0x8cf817=_0x5a9e58;_0xd6b8a4[_0x8cf817(0x4d4)+'List']['toggl'+'e']('on',_0x336e8d),_0x2d550c(_0x336e8d);});_0x5b1fee[_0x5a9e58(0x620)+'d'](_0xb0691d,_0x1e8e27);}else _0x5b1fee[_0x5a9e58(0x620)+_0x5a9e58(0x24c)+'d'](_0xb0691d);_0xd6b8a4['appen'+_0x5a9e58(0x24c)+'d'](_0x5b1fee);if(_0x2211b6&&_0x2211b6['lengt'+'h']){var _0x1c9247=_0x40b013['wyuNz']['split']('|'),_0x4cdca7=0x15e0+0x240*-0x2+0x8b*-0x20;while(!![]){switch(_0x1c9247[_0x4cdca7++]){case'0':_0xd6b8a4[_0x5a9e58(0x620)+_0x5a9e58(0x24c)+'d'](_0x4b8c4e);continue;case'1':_0x30017f[_0x5a9e58(0x2d1)+_0x5a9e58(0x2b5)+'t']=_0x46e46c;continue;case'2':_0x4b8c4e[_0x5a9e58(0x620)+'dChil'+'d'](_0x30017f);continue;case'3':for(var _0x5c293b of _0x2211b6)_0x4b8c4e['appen'+_0x5a9e58(0x24c)+'d'](_0x5c293b);continue;case'4':var _0x4b8c4e=document[_0x5a9e58(0x1d0)+_0x5a9e58(0x2a8)+'ent'](_0x40b013[_0x5a9e58(0x463)]);continue;case'5':_0x30017f[_0x5a9e58(0x4d4)+'Name']=_0x40b013[_0x5a9e58(0x539)];continue;case'6':var _0x30017f=document['creat'+_0x5a9e58(0x2a8)+_0x5a9e58(0x251)]('div');continue;case'7':_0x4b8c4e['class'+'Name']=_0x5a9e58(0x63c)+_0x5a9e58(0x3d2);continue;}break;}}return _0xd6b8a4;}}var _0x578b3f=[{'id':'comba'+'t','label':_0x40b013[_0x25cfee(0x622)]},{'id':_0x40b013[_0x25cfee(0x538)],'label':_0x25cfee(0x39a)},{'id':_0x25cfee(0x21f)+'l','label':_0x25cfee(0x708)+'l'},{'id':_0x40b013['amNhD'],'label':_0x40b013['yrLzZ']},{'id':_0x25cfee(0x564),'label':'Safet'+'y'}];function _0x2134d3(){var _0x5e9e5c=_0x25cfee,_0x4fb45f={'ucIjm':_0x1db397['gMWnf'],'WOiDq':'true','oefIK':_0x5e9e5c(0x270)+'n','oidos':_0x5e9e5c(0x691)+_0x5e9e5c(0x418),'fvBcy':_0x1db397[_0x5e9e5c(0x4e8)],'wpbQJ':function(_0x416879,_0x204ad7){return _0x416879(_0x204ad7);},'uzDBl':_0x1db397[_0x5e9e5c(0x5bf)]},_0x100ce7=_0x3431d9['safeM'+_0x5e9e5c(0x3be)]?_0x1db397['UIeec']:_0x3431d9['uwmk']?_0x1db397[_0x5e9e5c(0x28c)](_0x1db397['vLIsW'](_0x1db397[_0x5e9e5c(0x458)](_0x1db397['tNVwZ']+(_0x3431d9[_0x5e9e5c(0x43a)+'Total']?_0x1db397[_0x5e9e5c(0x5fc)](_0x1db397[_0x5e9e5c(0x6fc)](_0x3431d9['hooks'+'Ok'],'/'),_0x3431d9[_0x5e9e5c(0x43a)+_0x5e9e5c(0x392)])+('\x20hook'+'s'):_0x1db397['asBnv']),'\x20|\x20ga'+_0x5e9e5c(0x287)),_0x3431d9[_0x5e9e5c(0x46a)+_0x5e9e5c(0x3a5)]?_0x1db397[_0x5e9e5c(0x453)]:_0x1db397[_0x5e9e5c(0x35e)])+(_0x5e9e5c(0x192)+'ooter'+'\x20')+(_0x3431d9['shoot'+_0x5e9e5c(0x276)]?_0x1db397['cwrQh']:'none'),_0x1db397['eYxjh'])+(_0x3431d9[_0x5e9e5c(0x488)+'ents']?_0x5e9e5c(0x548):_0x1db397[_0x5e9e5c(0x47a)]):_0x1db397['eDwTn'];if(_0x3431d9[_0x5e9e5c(0x33f)+'rror'])_0x100ce7+=_0x5e9e5c(0x2ec)+'R:\x20'+_0x3431d9['lastE'+'rror'];return _0x31b88a(_0x1db397['gBnSV'],_0x100ce7,_0x3431d9['uwmk'],null,[_0x9371ab(_0x5e9e5c(0x34e)+'PS\x20un'+_0x5e9e5c(0x55b),'calls'+_0x5e9e5c(0x546)+'yEngi'+_0x5e9e5c(0x705)+_0x5e9e5c(0x54d)+'tion.'+'set_t'+_0x5e9e5c(0x336)+_0x5e9e5c(0x53c)+_0x5e9e5c(0x4c5),_0x5d4653('Apply',()=>{var _0x2f3986=_0x5e9e5c;if(_0x2f3986(0x1a0)===_0x4fb45f[_0x2f3986(0x541)])try{_0x34f6fb[_0x2f3986(0x685)+'em']('sakur'+_0x2f3986(0x6ad)+'r.v1',_0x56ec84['strin'+'gify'](_0x4be38b));}catch(_0x28c80d){}else try{if(_0x2f3986(0x1ad)!==_0x2f3986(0x1ad)){var _0x289abb={'FGmyW':function(_0x5e069c,_0x3e17cd){return _0x5e069c!==_0x3e17cd;},'yolir':_0x4fb45f[_0x2f3986(0x1df)],'WPwYj':_0x4fb45f[_0x2f3986(0x4e3)]},_0x5d98a4=_0x132f7[_0x2f3986(0x1d0)+'eElem'+_0x2f3986(0x251)](_0x4fb45f[_0x2f3986(0x583)]);return _0x5d98a4['type']=_0x2f3986(0x270)+'n',_0x5d98a4[_0x2f3986(0x4d4)+'Name']=_0x4fb45f[_0x2f3986(0x469)],_0x5d98a4[_0x2f3986(0x5e7)+_0x2f3986(0x18e)+'te'](_0x4fb45f[_0x2f3986(0x275)],'switc'+'h'),_0x5d98a4[_0x2f3986(0x5e7)+_0x2f3986(0x18e)+'te'](_0x2f3986(0x52b)+_0x2f3986(0x1f6)+'ed',_0x4fb45f['wpbQJ'](_0x55981c,!!_0x1aa39c)),_0x5d98a4['oncli'+'ck']=_0x467d1e=>{var _0x51e998=_0x2f3986;_0x467d1e['stopP'+_0x51e998(0x493)+_0x51e998(0x601)]();var _0x367df9=_0x289abb[_0x51e998(0x522)](_0x5d98a4['getAt'+_0x51e998(0x18e)+'te'](_0x289abb['yolir']),_0x289abb[_0x51e998(0x4dc)]);_0x5d98a4['setAt'+_0x51e998(0x18e)+'te']('aria-'+_0x51e998(0x1f6)+'ed',_0x4729e9(_0x367df9)),_0x74cb5e(_0x367df9);},_0x5d98a4;}else{if(_0x478898)_0x478898[_0x2f3986(0x2cc)]('Unity'+_0x2f3986(0x419)+_0x2f3986(0x1a3)+_0x2f3986(0x29a)+_0x2f3986(0x65d),_0x2f3986(0x20e)+_0x2f3986(0x336)+_0x2f3986(0x53c)+_0x2f3986(0x4c5),[-0x204c+-0x2*0x85a+0x1*0x31f0]);}}catch(_0x42be1b){}}))]);}function _0x3ac471(_0x25c83a){var _0x2a6d1e=_0x25cfee,_0x575407={'xcner':function(_0x37af26){return _0x40b013['MJKzZ'](_0x37af26);},'tdedc':function(_0x2d336e){var _0x43e7f0=_0x3039;return _0x40b013[_0x43e7f0(0x380)](_0x2d336e);},'CtxVv':function(_0x45ba0c,_0x1307d9){return _0x45ba0c||_0x1307d9;},'QYVUd':function(_0x168968,_0x512a90){return _0x168968!==_0x512a90;},'LhXgi':_0x40b013['LYCTc']};if(_0x25c83a===_0x2a6d1e(0x252)+'t')return[_0x2134d3(),_0x40b013[_0x2a6d1e(0x24e)](_0x31b88a,'God\x20M'+_0x2a6d1e(0x3be),'Block'+_0x2a6d1e(0x358)+'alth.'+'Initi'+'ateTa'+'keHea'+_0x2a6d1e(0x3ba)+'nd\x20OH'+'ealth'+_0x2a6d1e(0x60e)+'lDie,'+'\x20so\x20n'+'othin'+_0x2a6d1e(0x587)+_0x2a6d1e(0x3cd)+_0x2a6d1e(0x218)+_0x2a6d1e(0x4fe)+'ou.',_0x24889b['god'],_0x3640ea=>{var _0x4bb5b5=_0x2a6d1e;_0x24889b[_0x4bb5b5(0x1fa)]=_0x3640ea,_0x1db397['THZwt'](_0x1b66b9),_0x293ad6(_0x4bb5b5(0x1fa),_0x3640ea),_0x1db397[_0x4bb5b5(0x49c)](_0x293ad6,'godDi'+'e',_0x3640ea);},[]),_0x31b88a('No\x20Re'+_0x2a6d1e(0x376),_0x40b013['fQuuV'],_0x24889b['noRec'+'oil'],_0x57ceec=>{var _0x5bc70e=_0x2a6d1e;_0x1db397[_0x5bc70e(0x3c4)](_0x1db397[_0x5bc70e(0x42b)],_0x1db397['dTNwh'])?(_0x1f3863[_0x5bc70e(0x64d)]=_0x5cca3f,_0x575407[_0x5bc70e(0x6f3)](_0x1f9a86)):(_0x24889b['noRec'+_0x5bc70e(0x19a)]=_0x57ceec,_0x1b66b9(),_0x293ad6(_0x1db397['hcnET'],_0x57ceec));},[]),_0x40b013['hNCgX'](_0x31b88a,'No\x20Sp'+_0x2a6d1e(0x680),_0x2a6d1e(0x427)+_0x2a6d1e(0x574)+_0x2a6d1e(0x5da)+_0x2a6d1e(0x710)+_0x2a6d1e(0x3a6)+_0x2a6d1e(0x6ac)+_0x2a6d1e(0x3c2)+'\x20your'+_0x2a6d1e(0x26d)+'on\x20ev'+_0x2a6d1e(0x670)+'00ms.',_0x24889b['noSpr'+_0x2a6d1e(0x58a)],_0x345a53=>{var _0xb063e7=_0x2a6d1e;_0x24889b[_0xb063e7(0x499)+_0xb063e7(0x58a)]=_0x345a53,_0x1b66b9();},[]),_0x31b88a(_0x2a6d1e(0x55a)+_0x2a6d1e(0x4c1)+'\x20[EXP'+']','Scale'+'s\x20Ove'+_0x2a6d1e(0x517)+'Weapo'+_0x2a6d1e(0x37a)+_0x2a6d1e(0x46d)+_0x2a6d1e(0x6a7)+_0x2a6d1e(0x535)+_0x2a6d1e(0x45d)+_0x2a6d1e(0x62b)+'still'+'\x20gate'+'\x20shot'+'s.',_0x24889b[_0x2a6d1e(0x6a5)+_0x2a6d1e(0x676)],_0x2d1919=>{var _0x1e3491=_0x2a6d1e;_0x1db397['NTzLl']===_0x1e3491(0x29c)?(_0x2b4fb9['noSpr'+_0x1e3491(0x58a)]=_0xf14568,_0x575407[_0x1e3491(0x66e)](_0x5d30b9)):(_0x24889b['rapid'+'Exp']=_0x2d1919,_0x1b66b9());},[]),_0x31b88a(_0x40b013[_0x2a6d1e(0x3e0)],_0x40b013['eiexk'],_0x24889b[_0x2a6d1e(0x2c3)+'eExp'],_0x208713=>{var _0x1c39e3=_0x2a6d1e,_0xf07d9f={'ZhIEz':function(_0x49d114){var _0x3d84aa=_0x3039;return _0x1db397[_0x3d84aa(0x345)](_0x49d114);}};_0x1db397[_0x1c39e3(0x3c4)](_0x1db397[_0x1c39e3(0x4ee)],_0x1db397[_0x1c39e3(0x4ee)])?(_0x24889b[_0x1c39e3(0x2c3)+_0x1c39e3(0x44a)]=_0x208713,_0x1db397[_0x1c39e3(0x3b5)](_0x1b66b9)):(_0x24d78a['jumpP'+'ct']=_0x33d31e,_0xf07d9f[_0x1c39e3(0x51b)](_0x380007));},[_0x40b013[_0x2a6d1e(0x1d2)](_0x9371ab,_0x40b013[_0x2a6d1e(0x66c)],null,_0x1f2bed(_0x24889b['damag'+_0x2a6d1e(0x48f)+'e'],0x1*-0xf63+0x7*0x4bd+0x8df*-0x2,0x58*0x24+0x24eb+-0x1*0x2f57,0x20a9+-0x1*-0x2441+-0x44e5,_0x2ff25b=>{var _0x293dfc=_0x2a6d1e;_0x24889b[_0x293dfc(0x2c3)+_0x293dfc(0x48f)+'e']=_0x2ff25b,_0x1b66b9();}))]),_0x40b013[_0x2a6d1e(0x291)](_0x31b88a,'Infin'+'ite\x20A'+_0x2a6d1e(0x225)+'EXP]',_0x2a6d1e(0x51d)+_0x2a6d1e(0x2b3)+_0x2a6d1e(0x30f)+_0x2a6d1e(0x6a6)+_0x2a6d1e(0x400)+_0x2a6d1e(0x2d8)+_0x2a6d1e(0x2e3)+_0x2a6d1e(0x4cf)+_0x2a6d1e(0x30d)+'\x20200m'+'s.',_0x24889b['infAm'+_0x2a6d1e(0x3d0)],_0x47298c=>{var _0x4ccd88=_0x2a6d1e;_0x24889b[_0x4ccd88(0x3c5)+_0x4ccd88(0x3d0)]=_0x47298c,_0x1b66b9();},[_0x9900b6('If\x20re'+_0x2a6d1e(0x25f)+'\x20stil'+_0x2a6d1e(0x396)+_0x2a6d1e(0x47d)+_0x2a6d1e(0x4f4)+_0x2a6d1e(0x1e0)+'nt\x20ha'+'ppens'+_0x2a6d1e(0x6ea)+'where'+'.')])];if(_0x25c83a===_0x40b013[_0x2a6d1e(0x538)])return[_0x40b013['ivmZL'](_0x31b88a,_0x40b013[_0x2a6d1e(0x585)],_0x40b013['usrQl'],_0x40b013['YIRCK'](_0x24889b[_0x2a6d1e(0x5d9)+_0x2a6d1e(0x641)],0x1a9b+0x1f76+0x5*-0xb89),null,[_0x9371ab('Speed'+'\x20%',_0x40b013[_0x2a6d1e(0x2ac)],_0x40b013['piHbn'](_0x1f2bed,_0x24889b['speed'+_0x2a6d1e(0x641)],0x738+0x90*-0x44+0x1f3a,0x269f+-0x3d3*0x1+-0x10d0*0x2,-0xe55+0x14ad+-0x653,_0x7e662c=>{var _0x1ba15b=_0x2a6d1e;_0x24889b[_0x1ba15b(0x5d9)+'Pct']=_0x7e662c,_0x1b66b9();}))]),_0x31b88a('Jump\x20'+_0x2a6d1e(0x366)+'vity',_0x2a6d1e(0x1f5)+'s\x20Mov'+_0x2a6d1e(0x49f)+'.jump'+_0x2a6d1e(0x2eb)+'\x20and\x20'+'both\x20'+'gravi'+_0x2a6d1e(0x5e3)+_0x2a6d1e(0x1bb),_0x24889b[_0x2a6d1e(0x2af)+'ct']!==0xc*0x7+-0x1898+0x18a8||_0x24889b[_0x2a6d1e(0x4cd)+_0x2a6d1e(0x22f)]!==0x18*-0xf8+0xb75+-0x1*-0xc2f,null,[_0x9371ab('Jump\x20'+'%',null,_0x1f2bed(_0x24889b[_0x2a6d1e(0x2af)+'ct'],0x212*-0x6+0x19f8+-0x2*0x6ad,0x20af+0x236+-0x21b9,-0x36a+-0x1fa7+0x6*0x5d9,_0x4c5d97=>{var _0x128e0e=_0x2a6d1e;_0x24889b[_0x128e0e(0x2af)+'ct']=_0x4c5d97,_0x1b66b9();})),_0x40b013['mCWDW'](_0x9371ab,_0x40b013['tIqwS'],_0x2a6d1e(0x3b4)+_0x2a6d1e(0x4bc)+'oaty',_0x1f2bed(_0x24889b['gravi'+_0x2a6d1e(0x22f)],0x1*-0x184d+-0x25a2+0x3df9,-0x24b*-0x3+-0x72d+0x8a*0x2,-0xd66+-0x25e4+0x5*0xa43,_0x393181=>{var _0x5b61ca=_0x2a6d1e;_0x24889b['gravi'+_0x5b61ca(0x22f)]=_0x393181,_0x1b66b9();}))]),_0x40b013[_0x2a6d1e(0x664)](_0x31b88a,_0x40b013[_0x2a6d1e(0x4a2)],_0x2a6d1e(0x427)+_0x2a6d1e(0x443)+_0x2a6d1e(0x49f)+_0x2a6d1e(0x350)+'JumpT'+'ime\x20s'+_0x2a6d1e(0x40c)+_0x2a6d1e(0x464)+_0x2a6d1e(0x30a)+_0x2a6d1e(0x606)+'never'+'\x20appl'+'ies.',_0x24889b[_0x2a6d1e(0x64d)],_0x2d142d=>{_0x24889b['bhop']=_0x2d142d,_0x1b66b9();},[])];if(_0x25c83a===_0x2a6d1e(0x21f)+'l'){if(_0x40b013['FSvUZ']('niUVV',_0x2a6d1e(0x5a2)))_0x58b626['fillS'+_0x2a6d1e(0x37f)]=_0x575407[_0x2a6d1e(0x4cb)](_0x44e9e0,'rgba('+'255,2'+_0x2a6d1e(0x3f0)+'0,0.7'+'5)'),_0x2b50b9['fillT'+_0x2a6d1e(0x604)](_0x2d31b6,_0x3cb467,_0x5563bb),_0x3f8a88+=-0x1a1b+-0x75a+-0x2185*-0x1;else return[_0x31b88a(_0x40b013['QwIxw'],_0x40b013['ijXHj'],_0x24889b['keyst'+'rokes'],_0x50311c=>{var _0x5d7f1f=_0x2a6d1e;_0x24889b[_0x5d7f1f(0x1db)+_0x5d7f1f(0x4b0)]=_0x50311c,_0x1b66b9();},[_0x9371ab(_0x2a6d1e(0x397)+'ion',null,_0x129053(_0x24889b[_0x2a6d1e(0x2ae)],[['bl','Botto'+_0x2a6d1e(0x4ca)+'t'],['br',_0x2a6d1e(0x36f)+'m\x20rig'+'ht'],['ml','Left\x20'+_0x2a6d1e(0x3fa)+'e']],_0xd1da19=>{var _0x11954c=_0x2a6d1e;_0x24889b[_0x11954c(0x2ae)]=_0xd1da19,_0x575407['tdedc'](_0x1b66b9);})),_0x9371ab(_0x2a6d1e(0x5ec),null,_0x40b013['YsCDe'](_0x1f2bed,_0x24889b['ksSca'+'le'],-0x1340+0x59f+-0xda1*-0x1+0.6,0x10+0xa93*0x2+-0x1535+0.6000000000000001,0x3*0xc1b+0x1*-0x248e+-0x1*-0x3d+0.05,_0x2891d6=>{var _0xb02a58=_0x2a6d1e;_0x575407[_0xb02a58(0x47e)](_0xb02a58(0x311),_0xb02a58(0x58b))?(_0x24889b['ksSca'+'le']=_0x2891d6,_0x1b66b9()):_0x216c8f['clear']();})),_0x40b013[_0x2a6d1e(0x3fc)](_0x9371ab,'CPS\x20r'+_0x2a6d1e(0x6ff)+'t',null,_0x306a13(_0x24889b[_0x2a6d1e(0x2a4)],_0x6dcb6e=>{_0x24889b['ksCps']=_0x6dcb6e,_0x1b66b9();}))]),_0x31b88a('Cross'+_0x2a6d1e(0x701),_0x2a6d1e(0x1ac)+_0x2a6d1e(0x21c)+_0x2a6d1e(0x375)+'rossh'+_0x2a6d1e(0x403),_0x24889b[_0x2a6d1e(0x3e2)+_0x2a6d1e(0x701)],_0x5b35d7=>{var _0x150513=_0x2a6d1e;_0x24889b['cross'+_0x150513(0x701)]=_0x5b35d7,_0x1b66b9();},[_0x40b013['yvzbt'](_0x9371ab,'Size',null,_0x40b013[_0x2a6d1e(0x2a3)](_0x1f2bed,_0x24889b['chSiz'+'e'],0x1318+-0x1c91+0x61*0x19+0.5,-0x1726+-0xcb*-0x2d+-0xc87+0.5,-0x20f0+-0x241*-0x11+-0x11*0x51+0.1,_0x5f5501=>{var _0x41f395=_0x2a6d1e;_0x24889b[_0x41f395(0x3d4)+'e']=_0x5f5501,_0x1b66b9();})),_0x9371ab(_0x2a6d1e(0x490),null,_0x522ea8(_0x24889b[_0x2a6d1e(0x482)+'or'],_0x515936=>{var _0x3c38bb=_0x2a6d1e;_0x24889b[_0x3c38bb(0x482)+'or']=_0x515936,_0x1b66b9();}))]),_0x40b013['KGySF'](_0x31b88a,_0x2a6d1e(0x3df)+_0x2a6d1e(0x276),_0x2a6d1e(0x4fd)+'verla'+'y.',_0x24889b[_0x2a6d1e(0x65f)],null,[_0x9371ab('FPS\x20c'+'ounte'+'r',null,_0x306a13(_0x24889b[_0x2a6d1e(0x65f)],_0x5547f0=>{var _0x594e4e=_0x2a6d1e;_0x1db397['QPtpv']==='MsDtK'?(_0x24889b[_0x594e4e(0x65f)]=_0x5547f0,_0x1b66b9()):new _0x259e60(_0x5d9f99)[_0x594e4e(0x327)+_0x594e4e(0x592)](_0x367969,_0x51bd14,_0x2f97f3);})),_0x40b013['jUoIb'](_0x9900b6,_0x2a6d1e(0x2d2)+'emy\x20c'+'ounte'+'r:\x20th'+_0x2a6d1e(0x5ab)+_0x2a6d1e(0x273)+'as\x20no'+'\x20GetV'+'isibl'+'ePlay'+_0x2a6d1e(0x4a4)+_0x2a6d1e(0x4b1)+_0x2a6d1e(0x277)+_0x2a6d1e(0x518))])];}if(_0x25c83a===_0x40b013[_0x2a6d1e(0x390)])return[_0x31b88a(_0x40b013['bexjK'],_0x40b013[_0x2a6d1e(0x25a)],_0x24889b[_0x2a6d1e(0x1bf)+'ck'],_0x5cf3ff=>{var _0xc33623=_0x2a6d1e;_0xc33623(0x6f2)!==_0x575407[_0xc33623(0x5fb)]?(_0x24889b[_0xc33623(0x1bf)+'ck']=_0x5cf3ff,_0x575407[_0xc33623(0x6f3)](_0x1b66b9)):_0x4093bd=_0x2e85ec&&_0x42b9c1['val']?_0x547699[_0xc33623(0x40d)]():0x1286+0x17*-0xa9+-0x357;},[_0x9900b6(_0x40b013['qgAws'])])];return[_0x31b88a('Safe\x20'+'Mode\x20'+_0x2a6d1e(0x28e)+_0x2a6d1e(0x22b)+_0x2a6d1e(0x284),_0x40b013['craEL'],_0x24889b[_0x2a6d1e(0x3ed)+_0x2a6d1e(0x3be)],_0x14ec44=>{var _0x1b0020=_0x2a6d1e;_0x24889b[_0x1b0020(0x3ed)+'ode']=_0x14ec44,_0x1db397[_0x1b0020(0x3b5)](_0x1b66b9),location['reloa'+'d']();},[_0x40b013[_0x2a6d1e(0x6de)](_0x9900b6,_0x40b013[_0x2a6d1e(0x450)])]),_0x40b013[_0x2a6d1e(0x29f)](_0x31b88a,_0x40b013[_0x2a6d1e(0x4a6)],'Each\x20'+_0x2a6d1e(0x5b1)+_0x2a6d1e(0x4ff)+_0x2a6d1e(0x38e)+_0x2a6d1e(0x1c5)+_0x2a6d1e(0x391)+'oline'+_0x2a6d1e(0x24d)+_0x2a6d1e(0x1f1)+_0x2a6d1e(0x573)+_0x2a6d1e(0x41a)+_0x2a6d1e(0x43b)+'\x20ALL\x20'+_0x2a6d1e(0x30e)+_0x2a6d1e(0x2ff)+_0x2a6d1e(0x6ec)+_0x2a6d1e(0x217)+'ignat'+_0x2a6d1e(0x2cb)+_0x2a6d1e(0x29d)+'oes\x20n'+'ot\x20ma'+_0x2a6d1e(0x20c)+'he\x20re'+_0x2a6d1e(0x43d)+'thod\x20'+_0x2a6d1e(0x1d9)+'s\x20\x27fu'+'nctio'+'n\x20sig'+'natur'+_0x2a6d1e(0x437)+_0x2a6d1e(0x549)+_0x2a6d1e(0x4b2)+_0x2a6d1e(0x4d6)+_0x2a6d1e(0x55e)+_0x2a6d1e(0x492)+_0x2a6d1e(0x5a0)+_0x2a6d1e(0x1f4)+_0x2a6d1e(0x382)+_0x2a6d1e(0x3d8)+'one\x20a'+'t\x20a\x20t'+_0x2a6d1e(0x36e)+_0x2a6d1e(0x310)+'d,\x20an'+'d\x20see'+'\x20whic'+_0x2a6d1e(0x4cc)+'\x20your'+_0x2a6d1e(0x334)+_0x2a6d1e(0x1bd)+_0x2a6d1e(0x1b8)+'n.',_0x24889b[_0x2a6d1e(0x3dd)+'od']||_0x24889b[_0x2a6d1e(0x3dd)+_0x2a6d1e(0x36c)]||_0x24889b['hookN'+'oReco'+'il']||_0x24889b[_0x2a6d1e(0x23f)+_0x2a6d1e(0x3c1)+'e'],_0x1086b7=>{var _0x24c79e=_0x2a6d1e;if(_0x1db397['jzPQW'](_0x24c79e(0x481),_0x1db397[_0x24c79e(0x38c)])){var _0x50dd9f=(_0x24c79e(0x57b)+_0x24c79e(0x242)+'0')[_0x24c79e(0x520)]('|'),_0x588bd6=0x10c*-0x1d+0x20c+-0x25c*-0xc;while(!![]){switch(_0x50dd9f[_0x588bd6++]){case'0':location['reloa'+'d']();continue;case'1':_0x24889b[_0x24c79e(0x6a8)+_0x24c79e(0x379)+'il']=_0x1086b7;continue;case'2':_0x24889b[_0x24c79e(0x23f)+_0x24c79e(0x3c1)+'e']=_0x1086b7;continue;case'3':_0x24889b['hookG'+_0x24c79e(0x36c)]=_0x1086b7;continue;case'4':_0x24889b['hookG'+'od']=_0x1086b7;continue;case'5':_0x1db397[_0x24c79e(0x3b5)](_0x1b66b9);continue;}break;}}else try{_0x2e0b2d['setIt'+'em'](_0x24c79e(0x2b4)+'a.kou'+_0x24c79e(0x60c)+'v1',_0x2267cf[_0x24c79e(0x23d)+_0x24c79e(0x421)](_0x3e60bf));}catch(_0x113b06){}},[_0x9900b6(_0x2a6d1e(0x371)+'es\x20on'+'\x20relo'+'ad.'),_0x9371ab(_0x40b013['MLwBn'],null,_0x40b013['FCxdC'](_0x306a13,_0x24889b[_0x2a6d1e(0x3dd)+'od'],_0x1c56ec=>{var _0x3963d4=_0x2a6d1e;_0x24889b[_0x3963d4(0x3dd)+'od']=_0x1c56ec,_0x575407[_0x3963d4(0x6f3)](_0x1b66b9);})),_0x9371ab(_0x40b013[_0x2a6d1e(0x351)],null,_0x306a13(_0x24889b['hookG'+'odDie'],_0x34f54e=>{var _0x3a21fa=_0x2a6d1e;_0x24889b['hookG'+'odDie']=_0x34f54e,_0x575407[_0x3a21fa(0x66e)](_0x1b66b9);})),_0x9371ab(_0x40b013[_0x2a6d1e(0x4f6)],null,_0x306a13(_0x24889b[_0x2a6d1e(0x6a8)+_0x2a6d1e(0x379)+'il'],_0x533abe=>{var _0x45ec99=_0x2a6d1e;_0x1db397[_0x45ec99(0x2c4)]!==_0x1db397['lIJvi']?(_0x56039e['keyst'+_0x45ec99(0x4b0)]=_0xdecc3c,_0xec8b93()):(_0x24889b['hookN'+'oReco'+'il']=_0x533abe,_0x1b66b9());})),_0x9371ab('captu'+_0x2a6d1e(0x1ea)+'etGam'+_0x2a6d1e(0x495)+_0x2a6d1e(0x290)+_0x2a6d1e(0x406)+_0x2a6d1e(0x423)+'d)','no\x20ch'+'eats\x20'+_0x2a6d1e(0x57f)+_0x2a6d1e(0x1b5)+_0x2a6d1e(0x359)+'is',_0x40b013[_0x2a6d1e(0x3b2)](_0x306a13,_0x24889b[_0x2a6d1e(0x23f)+_0x2a6d1e(0x3c1)+'e'],_0x57a6fb=>{_0x24889b['hookC'+'aptur'+'e']=_0x57a6fb,_0x1b66b9();}))]),_0x31b88a(_0x2a6d1e(0x69e)+_0x2a6d1e(0x4b5)+'r',_0x2a6d1e(0x33b)+'les\x20C'+_0x2a6d1e(0x67e)+'age\x20d'+_0x2a6d1e(0x2bb)+'ors\x20a'+_0x2a6d1e(0x302)+'rtup\x20'+'via\x20S'+_0x2a6d1e(0x300)+'tecti'+'on().'+'\x20Keep'+'\x20ON.',_0x24889b[_0x2a6d1e(0x5a8)+'ill'],_0x3f9472=>{var _0x2da113=_0x2a6d1e;_0x24889b[_0x2da113(0x5a8)+'ill']=_0x3f9472,_0x1b66b9();},[_0x9900b6('God/d'+'amage'+_0x2a6d1e(0x577)+'d\x20gre'+_0x2a6d1e(0x667)+_0x2a6d1e(0x208)+_0x2a6d1e(0x18d)+'risk\x20'+'even\x20'+'with\x20'+_0x2a6d1e(0x299)+_0x2a6d1e(0x49a),!![])]),_0x31b88a(_0x40b013[_0x2a6d1e(0x1a9)],_0x40b013[_0x2a6d1e(0x483)],!![],null,[_0x9371ab(_0x2a6d1e(0x486)+_0x2a6d1e(0x288)+'tting'+'s',null,_0x5d4653('Reset',()=>{var _0x444a4c=_0x2a6d1e;_0x24889b={..._0x52795a},_0x1b66b9(),location[_0x444a4c(0x310)+'d']();}))])];}var _0x47d574=null;function _0xdaac97(_0x1e17c1){var _0x1ec719=_0x25cfee;_0x50cbc9=_0x1e17c1;if(!_0x47d574){var _0x798db4=('1|0|5'+_0x1ec719(0x55c)+'4')[_0x1ec719(0x520)]('|'),_0x28854e=0x1*0xf03+0x2308+-0x22d*0x17;while(!![]){switch(_0x798db4[_0x28854e++]){case'0':_0xc010ee[_0x1ec719(0x2d1)+_0x1ec719(0x2b5)+'t']=_0x1b04fb;continue;case'1':var _0xc010ee=document[_0x1ec719(0x1d0)+_0x1ec719(0x2a8)+'ent'](_0x1ec719(0x5dc));continue;case'2':_0x4c70ba[_0x1ec719(0x620)+'dChil'+'d'](_0x47d574);continue;case'3':_0x47d574=_0x1db397['CmRdx'](_0x25bc2d);continue;case'4':requestAnimationFrame(()=>_0x47d574['class'+_0x1ec719(0x35d)]['add'](_0x1ec719(0x609)));continue;case'5':_0x4c70ba[_0x1ec719(0x620)+_0x1ec719(0x24c)+'d'](_0xc010ee);continue;}break;}}_0x47d574[_0x1ec719(0x4d4)+_0x1ec719(0x35d)][_0x1ec719(0x49e)+'e']('shown',_0x1e17c1);}function _0x5f0c97(){_0xdaac97(!_0x50cbc9);}function _0x25bc2d(){var _0x4458bd=_0x25cfee,_0x15f9e9={'lqfIj':function(_0x5787a0){return _0x1db397['THZwt'](_0x5787a0);},'aCIfm':_0x4458bd(0x319)+_0x4458bd(0x2a9)+_0x4458bd(0x2c2)+'\x20bann'+'er\x20sl'+_0x4458bd(0x203),'dsewR':function(_0x26381d,_0x3b2cf9){return _0x26381d(_0x3b2cf9);}},_0x432900=document['creat'+'eElem'+_0x4458bd(0x251)]('div');_0x432900[_0x4458bd(0x4d4)+_0x4458bd(0x378)]='mn-pa'+_0x4458bd(0x602);var _0x45eb0b=document[_0x4458bd(0x1d0)+'eElem'+_0x4458bd(0x251)](_0x1db397[_0x4458bd(0x630)]);_0x45eb0b[_0x4458bd(0x4d4)+_0x4458bd(0x378)]=_0x4458bd(0x6f8)+'de';var _0x1f5b06=document['creat'+'eElem'+_0x4458bd(0x251)](_0x1db397[_0x4458bd(0x248)]);_0x1f5b06['class'+_0x4458bd(0x378)]=_0x4458bd(0x703)+'go',_0x1f5b06[_0x4458bd(0x511)+'HTML']='<svg\x20'+_0x4458bd(0x6e6)+'ox=\x220'+_0x4458bd(0x436)+_0x4458bd(0x6a1)+'class'+'=\x22mn-'+_0x4458bd(0x695)+_0x4458bd(0x410)+_0x4458bd(0x5d2)+_0x4458bd(0x31e)+'12\x2021'+'c-1.5'+_0x4458bd(0x283)+'4-4.5'+_0x4458bd(0x48b)+_0x4458bd(0x661)+_0x4458bd(0x1dd)+_0x4458bd(0x687)+'\x204-4.'+_0x4458bd(0x45b)+'\x204\x204.'+'5c0\x203'+_0x4458bd(0x642)+_0x4458bd(0x255)+'.5z\x22\x20'+'fill='+_0x4458bd(0x3d5)+'\x22\x20str'+_0x4458bd(0x5ae)+'#ff6b'+_0x4458bd(0x3a7)+_0x4458bd(0x388)+'-widt'+'h=\x222\x22'+_0x4458bd(0x3bb)+'ke-li'+'necap'+_0x4458bd(0x561)+'nd\x22\x20s'+_0x4458bd(0x388)+_0x4458bd(0x5cf)+'join='+'\x22roun'+'d\x22/><'+'circl'+'e\x20cx='+'\x2212\x22\x20'+_0x4458bd(0x201)+'0\x22\x20r='+'\x221.5\x22'+_0x4458bd(0x2fe)+'=\x22#ff'+_0x4458bd(0x325)+_0x4458bd(0x39e)+_0x4458bd(0x3a3),_0x45eb0b['appen'+_0x4458bd(0x24c)+'d'](_0x1f5b06);var _0x2e76ef=document['creat'+'eElem'+'ent'](_0x4458bd(0x611));_0x2e76ef[_0x4458bd(0x4d4)+_0x4458bd(0x378)]='mn-ma'+'in';var _0x48a6e8=document[_0x4458bd(0x1d0)+_0x4458bd(0x2a8)+'ent'](_0x4458bd(0x4db)+'r');_0x48a6e8[_0x4458bd(0x4d4)+_0x4458bd(0x378)]=_0x4458bd(0x594)+'p';var _0x3f3c45=document[_0x4458bd(0x1d0)+_0x4458bd(0x2a8)+_0x4458bd(0x251)](_0x1db397[_0x4458bd(0x248)]);_0x3f3c45[_0x4458bd(0x4d4)+'Name']=_0x1db397['kJzqt'];var _0x60acbc=document[_0x4458bd(0x1d0)+_0x4458bd(0x2a8)+'ent']('h2');_0x60acbc['class'+_0x4458bd(0x378)]=_0x4458bd(0x61c),_0x60acbc[_0x4458bd(0x2d1)+'onten'+'t']=_0x1db397['OVJnd'];var _0x1d4bdf=document['creat'+_0x4458bd(0x2a8)+'ent'](_0x4458bd(0x3bc));_0x1d4bdf[_0x4458bd(0x4d4)+'Name']='mn-su'+'b',_0x1d4bdf[_0x4458bd(0x2d1)+'onten'+'t']='kours'+_0x4458bd(0x385)+'.io\x20m'+'enu',_0x3f3c45[_0x4458bd(0x620)+'d'](_0x60acbc,_0x1d4bdf);var _0x3aa88a=document[_0x4458bd(0x1d0)+'eElem'+_0x4458bd(0x251)](_0x4458bd(0x270)+'n');_0x3aa88a[_0x4458bd(0x6cc)]=_0x1db397[_0x4458bd(0x559)],_0x3aa88a[_0x4458bd(0x4d4)+'Name']=_0x1db397['batSc'],_0x3aa88a[_0x4458bd(0x6fb)]='Close',_0x3aa88a[_0x4458bd(0x511)+_0x4458bd(0x6c9)]='<svg\x20'+_0x4458bd(0x6e6)+'ox=\x220'+_0x4458bd(0x436)+_0x4458bd(0x27a)+_0x4458bd(0x5d2)+_0x4458bd(0x31e)+'6\x206l1'+_0x4458bd(0x65c)+_0x4458bd(0x4c8)+_0x4458bd(0x5f7)+_0x4458bd(0x39e)+_0x4458bd(0x3a3),_0x3aa88a[_0x4458bd(0x41b)+'ck']=()=>_0xdaac97(![]),_0x48a6e8[_0x4458bd(0x620)+'d'](_0x3f3c45,_0x3aa88a);var _0x4bfab2=document[_0x4458bd(0x1d0)+'eElem'+'ent'](_0x1db397[_0x4458bd(0x248)]);_0x4bfab2['class'+'Name']=_0x1db397[_0x4458bd(0x306)],_0x2e76ef['appen'+'d'](_0x48a6e8,_0x4bfab2),_0x432900[_0x4458bd(0x620)+'d'](_0x45eb0b,_0x2e76ef);var _0x29e22d=new Map();for(var _0x327833 of _0x578b3f){var _0x5e1eb3=(_0x4458bd(0x45f)+'|0|3|'+_0x4458bd(0x18c))[_0x4458bd(0x520)]('|'),_0x5c086e=-0x31d*0xc+0x10f2+0x6*0x367;while(!![]){switch(_0x5e1eb3[_0x5c086e++]){case'0':_0x1523b6[_0x4458bd(0x6fb)]=_0x327833['label'];continue;case'1':_0x29e22d[_0x4458bd(0x2f2)](_0x327833['id'],_0x1523b6);continue;case'2':_0x1523b6[_0x4458bd(0x41b)+'ck']=(_0x1cb899=>()=>_0x5a7a1a(_0x1cb899))(_0x327833['id']);continue;case'3':_0x1523b6[_0x4458bd(0x511)+_0x4458bd(0x6c9)]=_0x1db397[_0x4458bd(0x2bf)]+_0x327833[_0x4458bd(0x304)]+_0x1db397[_0x4458bd(0x590)];continue;case'4':_0x1523b6[_0x4458bd(0x6cc)]=_0x4458bd(0x270)+'n';continue;case'5':var _0x1523b6=document[_0x4458bd(0x1d0)+_0x4458bd(0x2a8)+'ent'](_0x4458bd(0x270)+'n');continue;case'6':_0x1523b6['class'+_0x4458bd(0x378)]=_0x1db397[_0x4458bd(0x210)];continue;case'7':_0x45eb0b[_0x4458bd(0x620)+_0x4458bd(0x24c)+'d'](_0x1523b6);continue;}break;}}function _0x5a7a1a(_0x123b6d){var _0x2d589e=_0x4458bd;if('DHQtY'!==_0x1db397[_0x2d589e(0x3ff)]){var _0x57cee9={'JANKq':function(_0x1b8e9a){var _0x5e56c4=_0x2d589e;return _0x15f9e9[_0x5e56c4(0x232)](_0x1b8e9a);}};return[_0x5899fa(_0x2d589e(0x33e)+'ck',_0x15f9e9[_0x2d589e(0x6e9)],_0x205e12[_0x2d589e(0x1bf)+'ck'],_0x241f49=>{_0x3693d2['adblo'+'ck']=_0x241f49,_0x57cee9['JANKq'](_0x10d076);},[_0x15f9e9[_0x2d589e(0x504)](_0x2f8078,'Takes'+_0x2d589e(0x677)+'ct\x20on'+_0x2d589e(0x5c9)+_0x2d589e(0x2b6)+'en\x20to'+'ggled'+'.')])];}else{var _0x57ddf6=(_0x2d589e(0x684)+'|1|2|'+'5')[_0x2d589e(0x520)]('|'),_0x5948e1=-0x22c2+0x18d1+0x1*0x9f1;while(!![]){switch(_0x57ddf6[_0x5948e1++]){case'0':_0x52d03c[_0x2d589e(0x247)]=_0x123b6d;continue;case'1':_0x60acbc[_0x2d589e(0x2d1)+_0x2d589e(0x2b5)+'t']='Sakur'+'a\x20Kou'+_0x2d589e(0x377)+_0x2b6144['label'];continue;case'2':for(var [_0x1b1627,_0xc5d1c1]of _0x29e22d)_0xc5d1c1[_0x2d589e(0x4d4)+_0x2d589e(0x35d)]['toggl'+'e']('activ'+'e',_0x1db397['WnvhV'](_0x1b1627,_0x123b6d));continue;case'3':var _0x2b6144=_0x578b3f[_0x2d589e(0x2e4)](_0x565e05=>_0x565e05['id']===_0x123b6d)||_0x578b3f[0x20f7+0x1*-0x12b2+-0xe45];continue;case'4':_0x1db397['CmRdx'](_0x2bd053);continue;case'5':_0x4bfab2[_0x2d589e(0x4ad)+'ceChi'+'ldren'](..._0x3ac471(_0x123b6d));continue;}break;}}}return _0x1db397[_0x4458bd(0x4e1)](_0x5a7a1a,_0x52d03c['cat']||_0x1db397['AQmSI']),setInterval(()=>{var _0x28280d=_0x4458bd;if(!_0x50cbc9)return;var _0x19ae50=_0x4bfab2[_0x28280d(0x6da)+_0x28280d(0x31b)];for(var _0x30979a=0x1*-0x259f+-0x1c1*0x4+0xee1*0x3;_0x1db397['iIMlp'](_0x30979a,_0x19ae50['lengt'+'h']);_0x30979a++){var _0x253c5c=_0x19ae50[_0x30979a][_0x28280d(0x6e2)+'Selec'+_0x28280d(0x653)](_0x1db397['gPETN']);_0x253c5c&&(_0x1db397[_0x28280d(0x6a4)](_0x253c5c['textC'+_0x28280d(0x2b5)+'t'][_0x28280d(0x47f)+'Of'](_0x1db397[_0x28280d(0x33d)]),-0x2226+0x246*0x3+-0xdaa*-0x2)||_0x253c5c['textC'+_0x28280d(0x2b5)+'t'][_0x28280d(0x47f)+'Of'](_0x1db397['BsTnw'])===-0x1*0x115b+-0x11*0x20b+0x1a0b*0x2)&&(_0x253c5c['textC'+_0x28280d(0x2b5)+'t']=_0x3431d9['safeM'+'ode']?_0x1db397[_0x28280d(0x25e)]:_0x3431d9[_0x28280d(0x2ab)]?_0x1db397[_0x28280d(0x6fc)](_0x1db397['hkZjK'](_0x1db397['ZNrAd'](_0x1db397[_0x28280d(0x4e4)](_0x1db397[_0x28280d(0x2f9)]+(_0x3431d9[_0x28280d(0x43a)+_0x28280d(0x392)]?_0x1db397['rrfpG'](_0x1db397['RaFzp'](_0x3431d9[_0x28280d(0x43a)+'Ok']+'/',_0x3431d9[_0x28280d(0x43a)+_0x28280d(0x392)]),_0x1db397[_0x28280d(0x5c5)]):'0\x20hoo'+_0x28280d(0x1a6)+'med\x20('+_0x28280d(0x51a)+_0x28280d(0x5c3)),'\x20|\x20ga'+_0x28280d(0x287)),_0x3431d9[_0x28280d(0x46a)+'oaded']?'loade'+'d':_0x1db397[_0x28280d(0x35e)])+(_0x28280d(0x192)+'ooter'+'\x20'),_0x3431d9[_0x28280d(0x40a)+_0x28280d(0x276)]?'held':_0x1db397[_0x28280d(0x47a)])+('\x20|\x20mo'+'vemen'+'t\x20'),_0x3431d9['movem'+'ents']?_0x1db397['cwrQh']:'none')+(_0x3431d9[_0x28280d(0x33f)+'rror']?_0x28280d(0x2ec)+'R:\x20'+_0x3431d9['lastE'+'rror']:''):'UWMK\x20'+_0x28280d(0x636)+_0x28280d(0x333)+_0x28280d(0x67b)+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x28280d(0x36d)+_0x28280d(0x657));}},0x1cdf+-0x1*-0x2095+-0x4*0xe63),_0x432900;}var _0x1b04fb=_0x25cfee(0x286)+':host'+_0x25cfee(0x312)+'l:\x20in'+_0x25cfee(0x6e5)+_0x25cfee(0x234)+'\x20\x20\x20*\x20'+'{\x20box'+_0x25cfee(0x190)+'ng:\x20b'+_0x25cfee(0x581)+_0x25cfee(0x4af)+_0x25cfee(0x2d7)+_0x25cfee(0x5fa)+';\x20fon'+_0x25cfee(0x37e)+_0x25cfee(0x3b0)+_0x25cfee(0x5ed)+'r\x22,\x20\x22'+'Segoe'+_0x25cfee(0x627)+_0x25cfee(0x534)+_0x25cfee(0x540)+_0x25cfee(0x474)+_0x25cfee(0x449)+_0x25cfee(0x671)+_0x25cfee(0x286)+_0x25cfee(0x27f)+_0x25cfee(0x444)+_0x25cfee(0x433)+_0x25cfee(0x40b)+_0x25cfee(0x634)+_0x25cfee(0x55d)+';\x20rig'+_0x25cfee(0x4d3)+_0x25cfee(0x6c0)+'botto'+_0x25cfee(0x21e)+_0x25cfee(0x22c)+_0x25cfee(0x633)+'\x20min('+_0x25cfee(0x2fd)+_0x25cfee(0x57c)+_0x25cfee(0x506)+_0x25cfee(0x706)+_0x25cfee(0x54c)+');\x20ma'+_0x25cfee(0x615)+_0x25cfee(0x698)+_0x25cfee(0x5c4)+_0x25cfee(0x1fd)+_0x25cfee(0x582)+_0x25cfee(0x3c3)+'h\x20-\x204'+'8px))'+_0x25cfee(0x2f6)+'\x20\x20\x20di'+_0x25cfee(0x2c8)+_0x25cfee(0x32f)+_0x25cfee(0x491)+_0x25cfee(0x6dd)+_0x25cfee(0x2ef)+'addin'+'g:\x2010'+_0x25cfee(0x4a0)+_0x25cfee(0x581)+'-radi'+_0x25cfee(0x675)+_0x25cfee(0x5a4)+_0x25cfee(0x509)+_0x25cfee(0x298)+_0x25cfee(0x42e)+'\x20auto'+_0x25cfee(0x2f6)+_0x25cfee(0x5ca)+_0x25cfee(0x1e7)+_0x25cfee(0x229)+_0x25cfee(0x295)+'24,17'+_0x25cfee(0x5e5)+_0x25cfee(0x5b5)+_0x25cfee(0x2cd)+_0x25cfee(0x34a)+_0x25cfee(0x2c1)+_0x25cfee(0x23b)+'r(22p'+_0x25cfee(0x348)+'turat'+'e(150'+_0x25cfee(0x580)+_0x25cfee(0x2f4)+_0x25cfee(0x4f3)+_0x25cfee(0x3b1)+'-filt'+_0x25cfee(0x6c6)+'lur(2'+_0x25cfee(0x3ae)+'satur'+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+'-shad'+'ow:\x200'+_0x25cfee(0x3e8)+_0x25cfee(0x4bd)+_0x25cfee(0x1e2)+_0x25cfee(0x357)+'5,255'+_0x25cfee(0x68d)+',\x20ins'+_0x25cfee(0x5ad)+_0x25cfee(0x640)+'\x20rgba'+_0x25cfee(0x213)+_0x25cfee(0x2b0)+_0x25cfee(0x545)+'5),\x200'+'\x2030px'+_0x25cfee(0x279)+_0x25cfee(0x2f7)+'(0,0,'+_0x25cfee(0x502)+');\x0a\x20\x20'+_0x25cfee(0x669)+'pacit'+_0x25cfee(0x321)+'\x20tran'+_0x25cfee(0x18a)+':\x20tra'+_0x25cfee(0x621)+_0x25cfee(0x6cf)+_0x25cfee(0x4b3)+'point'+_0x25cfee(0x298)+_0x25cfee(0x42e)+_0x25cfee(0x23a)+_0x25cfee(0x618)+'nsiti'+_0x25cfee(0x4ab)+_0x25cfee(0x591)+_0x25cfee(0x1eb)+_0x25cfee(0x5d4)+_0x25cfee(0x5b7)+_0x25cfee(0x338)+_0x25cfee(0x5a5)+_0x25cfee(0x6ce)+_0x25cfee(0x38d)+'ezier'+'(.22,'+'1,.36'+',1);\x0a'+'\x20\x20\x20\x20\x20'+'\x20colo'+_0x25cfee(0x6d2)+_0x25cfee(0x6d4)+_0x25cfee(0x6f6)+_0x25cfee(0x412)+_0x25cfee(0x266)+'px;\x20}'+_0x25cfee(0x286)+_0x25cfee(0x27f)+_0x25cfee(0x6e3)+'shown'+_0x25cfee(0x32c)+_0x25cfee(0x1e4)+':\x201;\x20'+'trans'+_0x25cfee(0x430)+'\x20none'+_0x25cfee(0x1bc)+'nter-'+'event'+_0x25cfee(0x446)+_0x25cfee(0x6fa)+_0x25cfee(0x286)+_0x25cfee(0x209)+'ide\x20{'+_0x25cfee(0x349)+_0x25cfee(0x52f)+_0x25cfee(0x47c)+_0x25cfee(0x2c0)+'-dire'+_0x25cfee(0x268)+':\x20col'+_0x25cfee(0x4d9)+_0x25cfee(0x1ba)+_0x25cfee(0x62d)+_0x25cfee(0x1cc)+_0x25cfee(0x5d3)+_0x25cfee(0x3cc)+_0x25cfee(0x5cc)+'\x20widt'+'h:\x2062'+'px;\x20f'+'lex:\x20'+'none;'+'\x20padd'+_0x25cfee(0x1e3)+_0x25cfee(0x681)+('0;\x20bo'+_0x25cfee(0x46c)+'radiu'+_0x25cfee(0x236)+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+'backg'+_0x25cfee(0x19e)+':\x20rgb'+_0x25cfee(0x367)+_0x25cfee(0x5af)+_0x25cfee(0x4bb)+'025);'+_0x25cfee(0x2db)+_0x25cfee(0x404)+_0x25cfee(0x37d)+_0x25cfee(0x588)+_0x25cfee(0x3e8)+_0x25cfee(0x4bd)+_0x25cfee(0x1e2)+'55,25'+_0x25cfee(0x58d)+_0x25cfee(0x639)+';\x20}\x0a\x20'+_0x25cfee(0x1e5)+_0x25cfee(0x320)+_0x25cfee(0x1ee)+'ispla'+'y:\x20gr'+_0x25cfee(0x455)+_0x25cfee(0x451)+'items'+_0x25cfee(0x58c)+_0x25cfee(0x572)+'width'+':\x2032p'+'x;\x20he'+'ight:'+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x25cfee(0x320)+_0x25cfee(0x2b2)+'\x20{\x20wi'+'dth:\x20'+_0x25cfee(0x56f)+_0x25cfee(0x52a)+'ht:\x202'+_0x25cfee(0x362)+'overf'+_0x25cfee(0x4e6)+_0x25cfee(0x6bc)+_0x25cfee(0x207)+_0x25cfee(0x2c1)+_0x25cfee(0x28b)+_0x25cfee(0x696)+_0x25cfee(0x683)+'\x200\x204p'+_0x25cfee(0x5b3)+_0x25cfee(0x367)+',107,'+_0x25cfee(0x467)+'8));\x20'+_0x25cfee(0x1cf)+_0x25cfee(0x21a)+'tab\x20{'+_0x25cfee(0x349)+'lay:\x20'+_0x25cfee(0x47c)+_0x25cfee(0x62f)+_0x25cfee(0x637)+_0x25cfee(0x1d6)+_0x25cfee(0x323)+';\x20jus'+'tify-'+_0x25cfee(0x6eb)+'nt:\x20c'+_0x25cfee(0x323)+_0x25cfee(0x274)+_0x25cfee(0x53a)+_0x25cfee(0x5a4)+_0x25cfee(0x46b)+_0x25cfee(0x429)+_0x25cfee(0x4a0)+_0x25cfee(0x581)+_0x25cfee(0x261)+_0x25cfee(0x4ce)+'r-rad'+_0x25cfee(0x28d)+'10px;'+'\x0a\x20\x20\x20\x20'+_0x25cfee(0x4c3)+_0x25cfee(0x264)+'nd:\x20t'+_0x25cfee(0x53d)+'arent'+_0x25cfee(0x563)+'or:\x20r'+_0x25cfee(0x1e2)+_0x25cfee(0x68c)+'8,242'+',.4);'+_0x25cfee(0x660)+'or:\x20p'+_0x25cfee(0x5c0)+'r;\x20fo'+'nt-si'+_0x25cfee(0x5f6)+_0x25cfee(0x1ae)+_0x25cfee(0x3ec)+_0x25cfee(0x1ca)+_0x25cfee(0x32e)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-ta'+_0x25cfee(0x68e)+_0x25cfee(0x2ee)+_0x25cfee(0x584)+_0x25cfee(0x6ca)+'a(246'+',238,'+_0x25cfee(0x2da)+'8);\x20}'+_0x25cfee(0x286)+_0x25cfee(0x3b7)+_0x25cfee(0x638)+_0x25cfee(0x440)+_0x25cfee(0x267)+_0x25cfee(0x335)+_0x25cfee(0x65a)+_0x25cfee(0x5a9)+_0x25cfee(0x1e7)+'und:\x20'+'rgba('+_0x25cfee(0x432)+'07,15'+_0x25cfee(0x31a)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x25cfee(0x67f)+_0x25cfee(0x57e)+'lex:\x20'+'1;\x20mi'+_0x25cfee(0x508)+_0x25cfee(0x354)+';\x20dis'+_0x25cfee(0x471)+_0x25cfee(0x2c0)+_0x25cfee(0x2e7)+_0x25cfee(0x6bf)+'ectio'+_0x25cfee(0x69b)+_0x25cfee(0x595)+_0x25cfee(0x6b7)+'\x20\x20.mn'+'-top\x20'+'{\x20dis'+'play:'+_0x25cfee(0x2c0)+_0x25cfee(0x4be)+'gn-it'+_0x25cfee(0x356)+_0x25cfee(0x672)+'r;\x20ga'+_0x25cfee(0x434)+'px;\x20p'+_0x25cfee(0x32d)+'g:\x206p'+_0x25cfee(0x64c)+'\x2012px'+';\x20use'+_0x25cfee(0x258)+'ect:\x20'+'none;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+_0x25cfee(0x272)+_0x25cfee(0x5ea)+_0x25cfee(0x550)+_0x25cfee(0x612)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-h\x20'+_0x25cfee(0x328)+_0x25cfee(0x412)+'e:\x2017'+'px;\x20f'+'ont-w'+'eight'+':\x20650'+';\x20}\x0a\x20'+_0x25cfee(0x1e5)+'n-sub'+'\x20{\x20fo'+'nt-si'+_0x25cfee(0x5f6)+_0x25cfee(0x6e4)+_0x25cfee(0x4ac))+('ty:\x20.'+_0x25cfee(0x6ee)+'\x20\x20\x20\x20.'+_0x25cfee(0x37b)+_0x25cfee(0x2b1)+_0x25cfee(0x349)+'lay:\x20'+_0x25cfee(0x4c6)+_0x25cfee(0x556)+'e-ite'+_0x25cfee(0x1d6)+'enter'+';\x20wid'+_0x25cfee(0x35f)+_0x25cfee(0x5d7)+_0x25cfee(0x46b)+'t:\x2028'+'px;\x20b'+_0x25cfee(0x581)+':\x200;\x20'+'borde'+_0x25cfee(0x54e)+_0x25cfee(0x28d)+_0x25cfee(0x5d7)+'backg'+_0x25cfee(0x19e)+_0x25cfee(0x240)+_0x25cfee(0x324)+'ent;\x20'+_0x25cfee(0x584)+_0x25cfee(0x5cb)+_0x25cfee(0x64f)+_0x25cfee(0x678)+_0x25cfee(0x5f9)+_0x25cfee(0x516)+'curso'+'r:\x20po'+_0x25cfee(0x3d3)+_0x25cfee(0x234)+_0x25cfee(0x1e5)+'n-clo'+'se:ho'+_0x25cfee(0x1b4)+_0x25cfee(0x678)+'ity:\x20'+_0x25cfee(0x31c)+'ckgro'+_0x25cfee(0x229)+_0x25cfee(0x295)+_0x25cfee(0x2b0)+_0x25cfee(0x357)+_0x25cfee(0x2c9)+_0x25cfee(0x189)+_0x25cfee(0x1e9)+'mn-cl'+_0x25cfee(0x231)+_0x25cfee(0x562)+_0x25cfee(0x6fe)+_0x25cfee(0x196)+_0x25cfee(0x459)+_0x25cfee(0x41d)+'\x2014px'+_0x25cfee(0x204)+_0x25cfee(0x5f4)+'ne;\x20s'+_0x25cfee(0x388)+_0x25cfee(0x4b8)+_0x25cfee(0x515)+'olor;'+_0x25cfee(0x3bb)+_0x25cfee(0x2fb)+'dth:\x20'+_0x25cfee(0x1b1)+_0x25cfee(0x424)+_0x25cfee(0x3ef)+'ap:\x20r'+_0x25cfee(0x475)+_0x25cfee(0x6b7)+'\x20\x20.mn'+_0x25cfee(0x4bf)+_0x25cfee(0x4e7)+'ex:\x201'+';\x20min'+'-heig'+'ht:\x200'+';\x20ove'+'rflow'+_0x25cfee(0x3a1)+'uto;\x20'+_0x25cfee(0x24a)+_0x25cfee(0x25c)+_0x25cfee(0x395)+'grid-'+_0x25cfee(0x3f8)+'ate-c'+_0x25cfee(0x341)+'s:\x20re'+_0x25cfee(0x528)+'auto-'+_0x25cfee(0x3b6)+'\x20minm'+_0x25cfee(0x484)+'0px,\x20'+_0x25cfee(0x6d8)+';\x20ali'+'gn-it'+'ems:\x20'+_0x25cfee(0x59d)+_0x25cfee(0x4be)+_0x25cfee(0x4a9)+_0x25cfee(0x5de)+_0x25cfee(0x551)+'rt;\x20g'+_0x25cfee(0x63b)+_0x25cfee(0x1ae)+_0x25cfee(0x1b3)+_0x25cfee(0x439)+_0x25cfee(0x435)+_0x25cfee(0x293)+_0x25cfee(0x234)+_0x25cfee(0x1e5)+'n-col'+'s::-w'+'ebkit'+_0x25cfee(0x2fc)+'llbar'+_0x25cfee(0x4c2)+_0x25cfee(0x612)+'8px;\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+'cols:'+_0x25cfee(0x709)+_0x25cfee(0x655)+_0x25cfee(0x707)+_0x25cfee(0x38a)+_0x25cfee(0x4fc)+'{\x20bac'+_0x25cfee(0x264)+_0x25cfee(0x5fe)+_0x25cfee(0x1e2)+_0x25cfee(0x357)+'5,255'+_0x25cfee(0x512)+';\x20bor'+'der-r'+'adius'+_0x25cfee(0x2dd)+';\x20}\x0a\x20'+_0x25cfee(0x59e)+_0x25cfee(0x645)+_0x25cfee(0x43f)+_0x25cfee(0x581)+_0x25cfee(0x2e5)+_0x25cfee(0x4d7)+'2px;\x20'+_0x25cfee(0x2a0)+'round'+_0x25cfee(0x6ca)+_0x25cfee(0x367)+',255,'+'255,.'+'025);'+'\x20box-'+_0x25cfee(0x404)+_0x25cfee(0x37d)+_0x25cfee(0x588)+_0x25cfee(0x3e8)+'1px\x20r'+_0x25cfee(0x1e2)+_0x25cfee(0x357)+_0x25cfee(0x58d)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x25cfee(0x6f0)+_0x25cfee(0x5b6)+_0x25cfee(0x264)+'nd:\x20r'+'gba(2'+_0x25cfee(0x357)+'5,255'+_0x25cfee(0x52e)+';\x20box'+_0x25cfee(0x215)+_0x25cfee(0x447)+'nset\x20'+_0x25cfee(0x220)+_0x25cfee(0x5bd)+_0x25cfee(0x295)+_0x25cfee(0x432)+'07,15'+_0x25cfee(0x205)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x25cfee(0x521)+'rd-he'+_0x25cfee(0x26f)+'displ')+(_0x25cfee(0x663)+'lex;\x20'+'align'+'-item'+'s:\x20ce'+'nter;'+_0x25cfee(0x3cc)+_0x25cfee(0x5db)+_0x25cfee(0x3eb)+_0x25cfee(0x1e3)+'11px\x20'+'12px;'+_0x25cfee(0x6b7)+_0x25cfee(0x59f)+_0x25cfee(0x532)+_0x25cfee(0x35a)+'e\x20{\x20f'+_0x25cfee(0x44e)+_0x25cfee(0x613)+'n-wid'+_0x25cfee(0x354)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x25cfee(0x645)+_0x25cfee(0x315)+'le\x20st'+'rong\x20'+_0x25cfee(0x328)+'t-siz'+_0x25cfee(0x266)+'px;\x20f'+_0x25cfee(0x1aa)+_0x25cfee(0x6dc)+_0x25cfee(0x322)+';\x20col'+_0x25cfee(0x6b5)+'gba(2'+_0x25cfee(0x68c)+_0x25cfee(0x305)+',.45)'+_0x25cfee(0x234)+'\x20\x20\x20.s'+_0x25cfee(0x645)+'d.on\x20'+_0x25cfee(0x505)+_0x25cfee(0x607)+_0x25cfee(0x4eb)+_0x25cfee(0x38b)+_0x25cfee(0x219)+'olor:'+_0x25cfee(0x22a)+_0x25cfee(0x41f)+_0x25cfee(0x1cf)+'\x20.sk-'+'mbody'+'\x20{\x20pa'+_0x25cfee(0x241)+':\x200\x201'+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x25cfee(0x654)+_0x25cfee(0x61a)+_0x25cfee(0x1d8)+'nt-si'+'ze:\x201'+_0x25cfee(0x6e4)+'opaci'+'ty:\x20.'+_0x25cfee(0x1b9)+'rgin-'+'botto'+'m:\x206p'+'x;\x20}\x0a'+_0x25cfee(0x1e9)+'sk-ct'+_0x25cfee(0x53e)+_0x25cfee(0x1a2)+'y:\x20fl'+'ex;\x20a'+_0x25cfee(0x67c)+'items'+_0x25cfee(0x58c)+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x25cfee(0x1b3)+_0x25cfee(0x66a)+_0x25cfee(0x1ef)+'\x20font'+_0x25cfee(0x567)+':\x2011.'+_0x25cfee(0x362)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x25cfee(0x304)+_0x25cfee(0x4e7)+_0x25cfee(0x543)+_0x25cfee(0x563)+_0x25cfee(0x6b5)+_0x25cfee(0x1e2)+_0x25cfee(0x68c)+'8,242'+_0x25cfee(0x6d9)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-hin'+'t\x20{\x20d'+_0x25cfee(0x1a2)+'y:\x20bl'+'ock;\x20'+'font-'+_0x25cfee(0x1ab)+_0x25cfee(0x67d)+';\x20opa'+_0x25cfee(0x331)+_0x25cfee(0x3b9)+_0x25cfee(0x1cf)+_0x25cfee(0x654)+_0x25cfee(0x1d1)+_0x25cfee(0x5d0)+_0x25cfee(0x570)+_0x25cfee(0x4aa)+_0x25cfee(0x4f1)+'ve;\x20w'+_0x25cfee(0x633)+_0x25cfee(0x4f8)+';\x20hei'+_0x25cfee(0x698)+_0x25cfee(0x501)+'\x20bord'+_0x25cfee(0x4ba)+_0x25cfee(0x52c)+'der-r'+'adius'+':\x2099p'+_0x25cfee(0x50f)+'ckgro'+_0x25cfee(0x229)+_0x25cfee(0x295)+_0x25cfee(0x2b0)+'55,25'+'5,.07'+');\x20cu'+'rsor:'+'\x20poin'+_0x25cfee(0x572)+_0x25cfee(0x272)+'\x20none'+_0x25cfee(0x234)+_0x25cfee(0x59e)+'k-swi'+'tch::'+_0x25cfee(0x497)+'\x20{\x20co'+_0x25cfee(0x5de)+_0x25cfee(0x19f)+_0x25cfee(0x462)+'tion:'+'\x20abso'+_0x25cfee(0x2dc)+'\x20top:'+_0x25cfee(0x5b4)+'\x20left'+':\x203px'+_0x25cfee(0x274)+_0x25cfee(0x4de)+_0x25cfee(0x36a)+_0x25cfee(0x6dc)+_0x25cfee(0x648)+_0x25cfee(0x52c)+'der-r'+_0x25cfee(0x5ac)+_0x25cfee(0x278)+_0x25cfee(0x3fe)+_0x25cfee(0x264)+_0x25cfee(0x5fe)+_0x25cfee(0x1e2)+'55,25'+_0x25cfee(0x58d)+_0x25cfee(0x24b)+_0x25cfee(0x618)+'nsiti'+'on:\x20l'+_0x25cfee(0x48e)+_0x25cfee(0x3a8)+_0x25cfee(0x668)+'ound\x20'+_0x25cfee(0x39b)+_0x25cfee(0x1cf)+_0x25cfee(0x654)+_0x25cfee(0x1d1)+'h[ari'+'a-che'+_0x25cfee(0x2e8)+'\x22true'+_0x25cfee(0x2ca)+_0x25cfee(0x2a0)+_0x25cfee(0x19e)+_0x25cfee(0x6ca))+(_0x25cfee(0x367)+',107,'+'157,.'+_0x25cfee(0x20f)+_0x25cfee(0x1cf)+'\x20.sk-'+'switc'+'h[ari'+'a-che'+_0x25cfee(0x2e8)+_0x25cfee(0x26c)+'\x22]::a'+_0x25cfee(0x26e)+'{\x20lef'+'t:\x2015'+_0x25cfee(0x4a0)+_0x25cfee(0x668)+'ound:'+_0x25cfee(0x6b8)+_0x25cfee(0x525)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x25cfee(0x5a6)+'\x20{\x20ba'+'ckgro'+_0x25cfee(0x229)+'rgba('+'255,2'+'55,25'+_0x25cfee(0x479)+_0x25cfee(0x411)+_0x25cfee(0x581)+_0x25cfee(0x261)+_0x25cfee(0x4ce)+_0x25cfee(0x54e)+_0x25cfee(0x28d)+'6px;\x20'+_0x25cfee(0x584)+_0x25cfee(0x420)+'eef2;'+'\x20padd'+'ing:\x20'+_0x25cfee(0x223)+_0x25cfee(0x4d8)+_0x25cfee(0x347)+'ize:\x20'+_0x25cfee(0x1c0)+_0x25cfee(0x6a3)+_0x25cfee(0x6c3)+_0x25cfee(0x27c)+_0x25cfee(0x6ab)+_0x25cfee(0x2a6)+'dow:\x20'+_0x25cfee(0x5c2)+_0x25cfee(0x3e8)+_0x25cfee(0x1d4)+'\x20rgba'+'(255,'+_0x25cfee(0x2b0)+_0x25cfee(0x545)+_0x25cfee(0x37c)+_0x25cfee(0x286)+_0x25cfee(0x6ef)+_0x25cfee(0x527)+_0x25cfee(0x1f7)+'n\x20{\x20b'+_0x25cfee(0x668)+'ound:'+_0x25cfee(0x57d)+'419;\x20'+_0x25cfee(0x1cf)+_0x25cfee(0x654)+_0x25cfee(0x6b1)+'\x20{\x20di'+'splay'+':\x20fle'+'x;\x20al'+_0x25cfee(0x702)+_0x25cfee(0x32b)+'\x20cent'+'er;\x20g'+'ap:\x208'+'px;\x20}'+_0x25cfee(0x286)+'.sk-s'+_0x25cfee(0x3ee)+_0x25cfee(0x477)+_0x25cfee(0x2ce)+_0x25cfee(0x610)+'aranc'+_0x25cfee(0x480)+_0x25cfee(0x530)+'ppear'+'ance:'+'\x20none'+';\x20wid'+_0x25cfee(0x401)+_0x25cfee(0x1ae)+'heigh'+_0x25cfee(0x472)+'x;\x20ba'+'ckgro'+_0x25cfee(0x229)+_0x25cfee(0x4a7)+'paren'+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-sl'+'ider:'+':-web'+'kit-s'+_0x25cfee(0x3ee)+'-runn'+_0x25cfee(0x3c9)+_0x25cfee(0x239)+_0x25cfee(0x28f)+'ight:'+_0x25cfee(0x56a)+'\x20bord'+_0x25cfee(0x259)+'dius:'+_0x25cfee(0x56a)+_0x25cfee(0x632)+'groun'+_0x25cfee(0x364)+_0x25cfee(0x5b8)+'gradi'+_0x25cfee(0x6d5)+_0x25cfee(0x65a)+'d,\x20#f'+_0x25cfee(0x5f1)+_0x25cfee(0x6c1)+_0x25cfee(0x536)+_0x25cfee(0x1fb)+_0x25cfee(0x40f)+_0x25cfee(0x253)+_0x25cfee(0x631)+_0x25cfee(0x374)+'t,\x20rg'+_0x25cfee(0x473)+'5,255'+_0x25cfee(0x5af)+_0x25cfee(0x197)+_0x25cfee(0x6b7)+'\x20\x20.sk'+_0x25cfee(0x369)+_0x25cfee(0x6a9)+'webki'+_0x25cfee(0x565)+_0x25cfee(0x202)+_0x25cfee(0x4fc)+_0x25cfee(0x206)+'bkit-'+'appea'+_0x25cfee(0x6db)+_0x25cfee(0x27c)+_0x25cfee(0x5cd)+_0x25cfee(0x612)+_0x25cfee(0x301)+_0x25cfee(0x46b)+'t:\x206p'+'x;\x20ma'+_0x25cfee(0x547)+_0x25cfee(0x428)+_0x25cfee(0x1c4)+_0x25cfee(0x624)+'er-ra'+'dius:'+'\x2050%;'+'\x20back'+_0x25cfee(0x694)+'d:\x20#f'+_0x25cfee(0x5f1)+_0x25cfee(0x234)+'\x20\x20\x20.s'+_0x25cfee(0x254)+_0x25cfee(0x1d8)+_0x25cfee(0x658)+_0x25cfee(0x5f6)+'1px;\x20'+'font-'+'weigh'+'t:\x2060'+'0;\x20mi'+_0x25cfee(0x508)+_0x25cfee(0x35f)+_0x25cfee(0x5d7)+'text-'+_0x25cfee(0x1ba)+_0x25cfee(0x597)+_0x25cfee(0x5d5)+'olor:'+'\x20rgba'+_0x25cfee(0x2bc)+_0x25cfee(0x2cf)+'42,.8'+');\x20}\x0a'+_0x25cfee(0x1e9)+'sk-co'+'lor\x20{')+(_0x25cfee(0x20b)+'h:\x2034'+_0x25cfee(0x36a)+_0x25cfee(0x6dc)+_0x25cfee(0x3e5)+_0x25cfee(0x1c9)+_0x25cfee(0x5eb)+'\x200;\x20b'+_0x25cfee(0x581)+_0x25cfee(0x2e5)+_0x25cfee(0x454)+_0x25cfee(0x4a0)+_0x25cfee(0x668)+'ound:'+'\x20none'+';\x20pad'+'ding:'+'\x200;\x20c'+'ursor'+_0x25cfee(0x54b)+'nter;'+'\x20}\x0a\x20\x20'+_0x25cfee(0x59f)+'-note'+'\x20{\x20fo'+_0x25cfee(0x658)+'ze:\x201'+'1px;\x20'+_0x25cfee(0x584)+':\x20rgb'+_0x25cfee(0x35b)+_0x25cfee(0x2d6)+_0x25cfee(0x2da)+'5);\x20p'+_0x25cfee(0x32d)+_0x25cfee(0x51e)+_0x25cfee(0x1c6)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'note.'+'err\x20{'+_0x25cfee(0x605)+_0x25cfee(0x6d2)+_0x25cfee(0x289)+';\x20}\x0a\x20'+_0x25cfee(0x59e)+'k-btn'+_0x25cfee(0x312)+'ign-s'+'elf:\x20'+_0x25cfee(0x2c7)+_0x25cfee(0x59d)+_0x25cfee(0x52c)+_0x25cfee(0x3c0)+_0x25cfee(0x5ba)+'rder-'+_0x25cfee(0x221)+'s:\x208p'+_0x25cfee(0x60a)+'dding'+':\x208px'+'\x2016px'+';\x20bac'+_0x25cfee(0x264)+_0x25cfee(0x2f8)+_0x25cfee(0x65a)+_0x25cfee(0x489)+_0x25cfee(0x599)+_0x25cfee(0x1de)+_0x25cfee(0x4c9)+'-size'+':\x2011.'+'5px;\x20'+_0x25cfee(0x3ec)+_0x25cfee(0x1ca)+_0x25cfee(0x32e)+_0x25cfee(0x6a2)+_0x25cfee(0x3f4)+'\x20poin'+_0x25cfee(0x572)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x25cfee(0x3aa)+'over\x20'+'{\x20fil'+_0x25cfee(0x399)+_0x25cfee(0x466)+'tness'+_0x25cfee(0x41e)+';\x20}\x0a\x20'+_0x25cfee(0x476));window['addEv'+_0x25cfee(0x2ea)+_0x25cfee(0x1b6)+'r'](_0x40b013[_0x25cfee(0x250)],_0x20cad1=>{var _0x12ff46=_0x25cfee;_0x20cad1[_0x12ff46(0x309)]===_0x40b013[_0x12ff46(0x262)]&&(_0x20cad1['preve'+_0x12ff46(0x51f)+_0x12ff46(0x2a5)](),_0x5f0c97());},!![]);var _0x341f10=document[_0x25cfee(0x1d0)+_0x25cfee(0x2a8)+'ent'](_0x25cfee(0x611));_0x341f10['style'][_0x25cfee(0x1a7)+'xt']=_0x40b013['brhyr'],_0x341f10['inner'+_0x25cfee(0x6c9)]='<svg\x20'+_0x25cfee(0x6e6)+_0x25cfee(0x452)+_0x25cfee(0x436)+_0x25cfee(0x27a)+'<path'+_0x25cfee(0x31e)+'12\x2021'+_0x25cfee(0x3ce)+'-2.5-'+_0x25cfee(0x6df)+_0x25cfee(0x48b)+_0x25cfee(0x661)+'.5\x201.'+_0x25cfee(0x687)+_0x25cfee(0x3de)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+_0x25cfee(0x642)+_0x25cfee(0x255)+_0x25cfee(0x688)+_0x25cfee(0x6b3)+'\x22none'+'\x22\x20str'+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x25cfee(0x388)+'-widt'+'h=\x222\x22'+_0x25cfee(0x3bb)+_0x25cfee(0x589)+_0x25cfee(0x644)+_0x25cfee(0x561)+_0x25cfee(0x553)+_0x25cfee(0x388)+'-line'+'join='+'\x22roun'+_0x25cfee(0x3b3)+_0x25cfee(0x6b6)+'e\x20cx='+'\x2212\x22\x20'+_0x25cfee(0x201)+_0x25cfee(0x56d)+_0x25cfee(0x1a1)+_0x25cfee(0x2fe)+_0x25cfee(0x292)+'6b9d\x22'+_0x25cfee(0x39e)+'vg>',_0x341f10[_0x25cfee(0x6fb)]='Sakur'+_0x25cfee(0x1ec)+'r',_0x341f10['onmou'+'seent'+'er']=()=>_0x341f10[_0x25cfee(0x5dc)][_0x25cfee(0x4ac)+'ty']='1',_0x341f10[_0x25cfee(0x448)+'selea'+'ve']=()=>_0x341f10['style'][_0x25cfee(0x4ac)+'ty']=_0x25cfee(0x1c8),_0x341f10[_0x25cfee(0x41b)+'ck']=_0x1811b1=>{var _0x343d9f=_0x25cfee;_0x1811b1[_0x343d9f(0x579)+_0x343d9f(0x493)+_0x343d9f(0x601)](),_0x40b013[_0x343d9f(0x380)](_0x5f0c97);},document[_0x25cfee(0x6cb)]['appen'+_0x25cfee(0x24c)+'d'](_0x341f10),_0x18603a(),_0x40b013[_0x25cfee(0x693)](requestAnimationFrame,_0x4ae4c6),console[_0x25cfee(0x3ca)](_0x25cfee(0x6d3)+_0x25cfee(0x47b)+_0x25cfee(0x368)+_0x25cfee(0x23e)+'eady.'+_0x25cfee(0x1f9)+':',_0x3431d9['uwmk']);});})()));function _0x545c(){var _0x2a4d97=['Cg9Uj3m','ihrVide','Ag9VA04','zxi6oI0','Eg1mDee','ztSGyM8','y2n1CMe','ys5RB3u','zwfWB24','BwLZyW','wxDZCxC','CMfUz2u','Fdr8mhW','zMLSBd0','C2v0vhi','B3i6ihi','y2LYy2W','ih0kica','icnMzJy','C1rjCgC','u2TPChm','txneDeS','DMLZAwi','mxWZFda','tgT6yu4','Ec1KAxi','nhb4oYa','ksaWida','AwXLzdO','DgXPBMu','AMXqrNm','z2uUiei','zxi6igi','B25JAge','zwXK','sfrnta','oIbYz2i','yM9KEq','DhLWzq','vwHTsu0','nxmGy3u','zvKOmtG','BhvKwNa','vgTrvM8','CJOGi2y','w3nHA3u','nMvLzJi','zw50kcm','lxbHCMu','Fdn8mxW','mwzYksK','lc43nsK','y2HPBgq','CMfUy2u','zwLNAhq','CdOGmta','rhLnDhO','nc00lJu','C2STCMe','ywqGDg8','CxvLCNK','yw5LBc4','mxb4oYa','AxrPywW','DMLLD0i','Fdf8mty','q29TyMe','yunjzM0','igvSC2u','y29UDgu','yxvSDca','qK9mA1K','ndSGFqO','lNnRlwy','zc5VBIa','qwjcsNy','CgLODwq','EgnUzxi','s2jADKu','tKHPt0C','oYbMB24','ug1XsNa','Bw4TC2K','mtySmc4','Dg87ih0','DgL0Bgu','zgfHy0m','tuzKvei','D2LKDgG','zwfKB3u','Bw91C2u','AgfPCG','AwDUlwK','Bw4TBg8','uMfgENa','BMuUqxa','DNCGlsa','y3jVBgW','vMLZDwe','oI13zwi','z2v0sxq','B29RCYa','DgGUsw4','zsb0CMe','AtmY','DKXyAxy','BMqGBwe','Bw4Ty28','BNnYy0m','ktSGFqO','C2zVCM0','vfjTCNm','mNWXFdC','igjHBIa','DhjPyNu','yM90Dg8','lxnPEMK','B29Rihi','ihWGC2G','zMPbyuu','zw50rwW','Aw9FnZi','oIaXnha','lJa4ktS','yxjJ','ls1W','B2LS','DxjH','AKf3ANq','CMvHzhK','CM91BMq','oIaIiJS','yKfSs0e','iJeUnsi','AxnWBge','zs5bCha','mcWWlJG','zMLSBa','A3mGyxi','y3nZvgu','BMnL','AM50thO','B250lxC','C2L6ztO','q3vZDg8','DNrVDNK','mhb4oYa','DgvTlxu','uxHoyxK','mJSGC3q','zgTPDa','CgfKzgK','DMvYihS','D2L0Ag8','C3rLBMu','wLHZtMe','A2vZig8','ndSGBwe','ywXPz24','BhvLCY4','oYbWB2K','zcbJAg8','z2v0','ywrIBg8','mteUnxa','ywqUieK','j3qGC3q','DKXjC1C','ltjWEdS','v0fttsa','EcaWoYa','igvUDgK','mc41','EdSGyM8','D2vPz2G','r3jHDMK','CZOGy2u','qNLjza','nYWWlJm','FqOGica','y3jLyxq','C3DPDgm','BunxrfC','v01ligK','mcaXChG','lwv2zw4','Bxm6igm','mtv8nNW','ihSGzM8','DgHYB3C','AxnPyMW','A2v5C3q','DMG7EI0','lJuGms4','i2zMzJS','DwnjAM0','y3jLBwu','vvjbx0S','z2jHkdi','Aw5NoIa','ywnPDhK','icaGlM0','zIXZExm','y2TNCM8','zMLSzw4','icaGic4','CMuGkfm','EsaUmZu','ysblB3u','Exz0s2y','BYb7igq','ChGGmdS','vLnYuMq','DgHLihC','zMLSBfq','EM1Kwvu','lIbuDxi','u2nHBgu','y2HLy2S','B3b0Aw8','C2STDMe','ifvxtuS','z29K','CIGTlxa','ENvgCMO','odbWEcW','Dg9W','wK53Be8','y1zbD1a','y3K9iJe','zgvYlxq','B3rZlG','oYbMAwW','nYWUmJG','EYaTD2u','Bgu7igy','CMfPC2u','lM1Ulxm','wLnssgu','ihDPzhq','DgnOihq','BgLUzw4','C2v0x3q','mJuPoYa','vwnusKW','qwjsrhy','u3zbqwG','kdi1nsW','zxjYB3i','lxnOywq','igrLzMe','lsbHihm','ig9YigS','zYb7igm','ic5TBI0','wuLsq0S','BsbJzw4','s1zpChC','BtOGmJq','DMLZDwe','mcaWida','CMfKAxu','zwrKEwS','nNb4idK','lxnHBNm','Bw1VifS','sK5yqxG','vuPbzui','rwLxvuO','Dw5KoIa','icnMzMy','Bgf5ig8','ChG7ihC','t1vsx18','Bw4TDgK','DhLqy3q','Aw9UoMy','B3nLihm','BhfMswO','sgvHBhq','oYb9cIa','uxHLA08','CZOGmty','DdOXmda','CwfTr2G','DhjHy2S','ig5VBMu','oIbIBhu','oxzsEhrqAW','C3rYAw4','zw51ihi','Ag9VA0m','oIb0CMe','zgrPBMC','Fdj8nxW','DgvYo3C','ywrK','suHRzuq','z0z4v0C','y2f0','AKjZrLy','BwLU','zgLZCgW','lc4YnsK','zenOAwW','igzVCIa','Ae5dz1G','u3rHDgu','BMfqC2O','zw50','y29TyMe','ksaXmda','AY12ywW','ns00idC','De13v0G','mhGYnta','CI1ZzwW','zxiTCMe','DuDNz3q','ywn0Axy','yxK6igC','DvncA0O','wNvSyuG','Bg9Hzhm','reHrDfK','oIaWoYa','D3DlyLq','Fdj8m3W','A2DYB3u','y2SP','ztOGmtm','EYbJB2W','y3rPB24','B3nWywm','khjLBg8','sM1dB28','iNrYDwu','ihDLyxa','zNrLCIa','ywqGEYa','yNv0Dg8','igzVDxi','zMXLEdO','AwXKigG','oYb3Awq','zNzcy3K','zxjZ','z3LIywm','oIa1mcu','idGWChG','idi0iJ4','q0fovKe','oIbUB24','DwfOuLO','y29TCgW','lM1Ulxa','ig5VigG','BgLUzvq','DNj2wLq','ltiUns0','BMX5kq','zw5HyMW','cIaGica','BwuG','BxKGC2u','zJDHotm','zgvZyW','oIbKCM8','wu14uu4','AxvZoIa','kg92zxi','ihSGAgu','Aw5NicS','DhbotLi','psiJzMy','nNb4ida','rgLL','CMDIysG','mNb4ihu','CMfUC2K','zxiTzxy','DgHPCYa','BgLJyxq','yxnruw4','EeTTrhm','Agf0igq','zsXTB24','AxzTwKW','yMfJA2C','lK92zxi','tu9ersa','BgHwwwq','A3ndChm','yxvSDa','Ec1ZAge','yMvS','zuvSzw0','igTVDxi','DgLKzs4','DxDTAW','wg9RzgS','igrHBwe','A3nqB3m','ANvTCfa','mJu1ldi','B3nLihS','BY1ZDMC','BhmGDgG','C2fRDxi','B250zw4','ywqGD2G','zM9YBxm','BMDL','vLzxCMK','sxnhCM8','zxrLy3q','kdi0nIW','vuPOrw4','oNbVAw4','t3HIreK','igzSzxG','AwX0zxi','lwLVxYO','zgfTywC','BeLkDMK','Dw9TtuS','te1c','zMXLEc0','C3bSyxK','nsWUmdu','iL0GEYa','DxjLihq','y2fSBa','yMfJA2q','zwjRAxq','mJm4ldi','svLSuvm','Dgv4Dem','tM8Gzw4','D2fYBG','zg93BG','vNrbzgK','ldiZocW','ig1HCMC','zwqGyw0','Dg9WoJe','mJqYlc4','igjVEc0','Bhv0ztS','oIa0ChG','vNfQA0O','u3rHDhu','zgfzwLy','mZu4nta2nhL3tLruwq','tM9mte4','Bw8GDg8','zMLUza','lxjHzgK','qMXlrLG','oYbMBgu','y2TLzd0','igXPBwK','zw50tgK','rM9Yy2u','ihWGrvi','BgrYzw4','zxiGEYa','ChG7iha','yMX1CG','vKHZve8','C2v0','vMDzsgq','D2vIA2K','CfD6Cw8','oWOGica','ihjNyMe','BMq6icm','De5wD1O','t3zLCNC','A2uTD2K','lxnJCM8','nJiWChG','igzPBgW','EsbKzwy','Dg9Wrgu','nNb4oYa','DcbZDge','u2fRDxi','BgfIzwW','ocWYndi','yuzqEhK','B3bLBG','FdL8mti','y29Kzq','ignVB2W','t1vHr2O','mdCSmtu','zxzLCNK','t0zgigi','zsb3zwe','CMvSB2e','qLv1uha','ihSGywW','BfjHDgK','tKT5AK0','zc10Axq','t1nOB28','DgvOvMO','sfL4Deq','sgLKzxm','nYWUmsK','CMvU','mtSGyMe','zxjSyxK','igq9iK0','BKXMBxi','BI1SB2C','EtOGmdS','oIa2mda','zw50zxi','BNnWyxi','nMi5zci','rwXLBwu','D3jPDgu','EYbMB24','zsaOt0G','kYbmtui','DgvTCZO','ihSGB3a','ywrKAw4','DdOGnZa','oIbMBgu','u3jgsgm','y2L0EtO','ndG5ndm0mg51tuvHEG','tKCGlsa','igj1AwW','B3i6icm','yxjNzxq','AwvSza','yw5ZzM8','zwCGzMe','zvnms1i','rgLZywi','zLrQuwW','D1HhywW','qwrIBg8','BgfZDeu','zNveD3O','B2X1Bw4','Ae9Psg0','CMvJDa','zvPcBNu','veHAD3q','BM9Uzq','B250lxm','EcKGC2e','igrPC3a','CM9Wlwy','EfvTs00','v3jHCha','B25PBNa','mJqWiey','C2XPy2u','lMXHC3q','AgLMDxC','C2STzMK','zvbPEgu','DgG6ida','qNvUBNK','zw1ZoIa','ntuSmJu','CYbpsgu','DxqGDgG','lxrPDgW','ysGYndy','Dw5Kzwq','tgLZDa','uwTWBKW','DgG6idi','4Ocuig92zq','DgfNtMe','nxb4oYa','nJq2o2m','zdOGBgK','DtmY','lYbhCMe','ysGYntu','DxjDig0','lxnSAwq','ChG7igG','AurYt2u','B2reAwu','zxjZy3i','Aw1Llca','qM90Dg8','ienquW','qxbWBgK','tvb0z2y','sNLTBw8','CMvWzwe','DgvYigm','y29PBa','CIdIGjqG','tMfTzq','B1jLy28','BI5MAxi','Bw4Ty2W','nsK7ih0','DZOGAw4','Dc1Myw0','DhLSzq','tuPlELO','ugf0Aa','BIb0Agu','Dgv4Dee','zgv2Awm','DhjPA2u','Bgf0zwq','qKvst2e','DhjVA2u','ueLvr1e','yMfYlxq','C3rYB24','wgrjuMO','yMLJlwi','BhmGysa','B2rksuq','yw1oAeq','DhjHBxa','vg90ywW','igXLyxy','rNvUCMq','CMLKoYa','BcbKCMe','ug9ZAxq','C2STBM8','DgvYoIa','tw92zq','lJjZoYa','C3rLCa','t0HLywW','lZ48l3m','Dgv4Dei','BvPusuO','lxK6ige','Bun6DuW','DMC+','ww5PA0i','B2fKzwq','EgvZige','owqIihm','mNmSigi','BwvsDw4','yNrUoMG','BgvMDa','v0jbrxy','ihjLy28','mNb4ksa','CMvZDg8','AwX5oIa','A2rYB3a','rKn4zem','zciVpJW','Bg93zxi','v3Pxwu8','zMLSBcW','lM1Ulxq','y2XLyxi','ic40oYa','BhrOige','ihn0CM8','C21HBgW','zvn0EwW','B2rL','lMrSBa','zgvYoIa','yxb0Dxi','y3KGB24','kdeWmhy','ANPquvC','Aw5Mqw0','mcWWlJC','BhrLCJO','DhmGCgW','ywjSzs0','Bg9N','rxb3A04','igDHCdO','igH1CNq','yY0XlJu','y3jLzw4','Bw9fEha','mcWWlJy','B2r5','Aw50zxi','y2HtAxO','iM5VBMu','vgHLC2u','Aw9FmZa','BsbVBIa','u0fgrq','rLn2vvO','sgvPz2G','u0fgrsa','Ag9VA0C','idqTnc4','q291BNq','s2Hmu3u','oJa7D2K','y3jVC3m','DMD6sMG','Ce1pD20','oIaYmNa','nZTWB2K','CgTyu2i','idaGmca','DgXLCW','uMvJB2K','ihbHzgq','zM9UDc0','C2fMzu0','BgLKzxi','BgLUzwm','mZuSmJq','C2vSzwm','AwvKigm','Aw9F','CNnVCJO','zhjVCc0','BM9szwm','nhW3Fde','DgvTCgW','mxWYFdu','BwLKzgW','BM93','zfvbv2m','Dw5RBM8','oYbIywm','wezNEhq','ignHy2G','DgG6idK','txDMruC','ywLYlG','C2HHzg8','u2HHCNa','ieLZr3i','teHQALe','oJiXndC','DNvREhG','C2HVB3q','AxrPB24','BYb0Agu','DMfS','mtq1mdj6twzTEK8','lca1mcu','C3zNiJ4','nsK7igi','Dc1ZAxO','BgLUzvC','C2HPzNq','q0vZCgq','D0nVBg8','ihrOzsa','AxrJAa','rw5NAw4','CgfNzsa','B25JBgK','q25yyMq','AwDODdO','kdeUmsK','mgy1oYa','oIaJzJy','z2LMEq','l1jnqIa','B3vUzgu','CM9Rzs0','wwvlq1a','yuTVDxi','wMvYB2u','Dg9WoIa','DdOGmZq','Ag9VA1a','BgHou0e','mZCYmJy4ngjxCeH5tq','ywLSzwq','zw50CZO','As1TB24','zM9YBtO','CM9Szq','mJu1lde','EYbWB3m','CdOGmti','idrWEca','idaGmJq','zsbTAxm','Awr0Aa','BMC6ida','Ag9VA3m','Bg9Hzc4','zg9JDw0','ywWGBwu','EdTVCge','zcb7igi','DgL2zsa','zJmY','Cw9svfC','CYbnB3y','yw5LBca','C2STBge','CZOGyxu','B3C6igK','B25TB3u','CY1Zzxi','zuv4Ca','A2v5zg8','vvDnsW','lwHVCa','Bgv4oIa','Dhm6yxu','C0z6tK0','BgfJzs0','B3G9iJa','CLjVr3i','Dxm6idy','Awq7iha','ANPTtue','D2jpBMy','CNjMCeC','EdSGAgu','CLnfEgu','nxm0idi','u1zhD1C','zxj2zxi','AgvOr1C','nxW0Fdy','vw5PDhK','uNHuCey','ihbVC2K','tg1ZBxG','igP1Bxa','zvrHA2u','yNjPz2G','mtu3lc4','B2LSicG','B2LKB3m','z2fTzuW','AgvPz2G','CMrLCI0','zvjHDgu','AsXZyw4','igvYCG','mcbOB28','CgXHEtO','DdOGoha','yMeOmJu','lcbZyw4','B3vUzdS','icaG','ihSGlxC','AgfZ','nsWUmdm','v1LZyMu','CMeTA28','zMXLEdS','Aw4Sihq','uvLwvwq','Aw5KzxG','ztOGBM8','yxDouMi','y2HdB2W','zhzszMC','yxGOmJu','BNrLEhq','v2LWzsa','zxmGB24','Bw92zw0','zdSGy28','z29KrgK','ltqTnY4','shHoz1K','C1vwEMe','zwz0ic4','zvzHBhu','q29SB3i','EdSGz2e','igLZigm','CM9WywC','zsbBrvG','zvj1BM4','B24UvgK','ywz0zxi','ELHyAfG','BM9tChi','B24U','y0zLDMK','B0r0Ava','EhPRDey','Dg9Nz2W','zw1LBNq','ChG7igi','yxnLBgK','zgvHrfu','BNrLCI0','zxjZihq','C2rKy2G','s0nsy1e','DhjHBNm','s2v5qq','z24Ty28','B246ihi','B246ig8','B3bHy2K','CMvWBge','y1ngEee','lwjVEdS','CM9Rzxm','BYbWAwC','jYb0Agu','ChGPoYa','CMvSEsa','s2LSBgu','BhvjsKC','B3nL','oIbJDxi','zw50CW','zxi6ida','mJu1lc4','id0GzMW','mxb4ihi','oYbHBgK','lwnVBhm','A2ffwuK','iezPCMu','ihSGD2K','icbIywm','tgvNAw8','uMf0zq','z3jPzdS','yurTsuq','mtGGnIa','igzVBNq','BsbSzwy','q3r4vNy','AcbVBMu','z3jHDMK','yM9Yzgu','idK5osa','qxnZzw0','x19tquS','ChGGDwK','Ahq6idi','y2XHC3m','C3rYB2S','ig1VBwu','Dxm6ide','ChG7igy','Dw1UoYa','lwjHBNi','AgvHzgu','v1b3wwO','q0vcsKK','DgG6idG','q1bIzKK','mNWZFda','twvvDKy','De5Vzgu','v09Prhe','AMz0zKW','igjHBM4','Bg93oIa','ihSGzMW','we9QDw8','DgjTEfG','A0z4s0u','AxrSzsa','zhbY','nxW0Fda','BMLJCha','A291CI0','yxbWBgK','zwXHDgK','yMvNAw4','Dc1Iywm','AguGzgu','ohG5mc0','uuTeAfO','lxnLCMK','idi2ChG','rgfTywC','yxKGB24','sw5Zzxi','AhvTyIa','rLbtig8','AwXSihK','BNn0ywW','Bw92zvq','mtrWEdS','mcWUntu','CNjVCG','zhnLD1i','lNnRlwm','yYGXmda','CI52mq','BI13Awq','Cg9PBNq','Aw5WDxq','vhzntuu','ALvVswi','Bg9Y','ugnnqvC','EdSGyMe','uLDLAei','Aw5Uzxi','lc4WocK','nxW3Fdq','DgvZDa','CMvUDem','lJq1oYa','CNrPzgu','AYbVBI4','B25SEsW','ywXSig8','wMHjrxO','nJaWia','uMvMAwW','zZOGmNa','BNrezwy','C3bSAxq','C2STy2e','rKDTEvC','BLbSyxq','Cg9ZAxq','yJLKoYa','C2STBwq','AwvSzca','CgvHDcG','nJf4uhLwEei','igHLAwC','yxjPys0','oYbIB3i','EfbYwhC','lc4WncK','Bgf5oIa','BMu7ige','CYbHBgW','lwnHCMq','y2fWtw8','ihn5C3q','mcuUifm','ic8GDMe','y2vdAgK','wM90yKS','rMHms3a','DgG6idu','yxr0ywm','rNjHBwu','CMfUC3a','Bcb7igq','BgvUz3q','zw0TDwK','DxPeqMW','AurcAKu','zxG6ide','yxj0lG','ntuSlJa','ifvUAxq','CMDPBI0','AgvSza','Bwf0y2G','wwX2s20','oIbWB2K','ndHWEcK','CgXPy2e','CI1Yywq','u2v0r2e','Aw4TD2K','oIbZDge','Dgv2EK0','BMqIihm','DMfSDwu','BNndweu','ihbSywm','sw9MwKS','x19ZywS','txnhz0i','uMfWAwq','Bg9JAW','Fdn8mNW','B2X1Dgu','BNqGAxq','zxG6mJe','ieaG','psjYB3u','DMCGEYa','oYbJB2W','C2fMzq','Dc1ZBgK','ugXOzu0','lxnPEMu','mZeZmtfLyNLACuG','tvLLs0O','idjWEdS','A3nty2e','tg9Hzgu','mciGCJ0','yxnZAwC','mJvWEdS','B3nPDgK','Cg9W','DgvYoYa','Ag9Szsa','CYbZChi','mNb4o3i','v3jfrwu','l3jHCgK','CMqTDgK','C3rVCfa','BwvZC2e','nhWZFde','lcbJywW','icmYmJe','BIb7igy','D29YAYa','jsK7ic0','B3jKzxi','ignHBgm','B2vMsuS','y29SB3i','zeLrrvq','yxrJAgu','zYbJyw4','C2v0ida','A2uTBgK','zwfK','wgLMy0i','oIbJzw4','nsWYntu','CYb3B24','BgLNBG','thDOr3i','CgfJAxq','rMLLBgq','BgW+','Bw4TDg8','BhvTBJS','zsbZzxi','oIbYAwC','s1HgCMy','Bg9YoIa','BML0igy','CMLNAhq','wNrrD2m','C3rHCNq','icaGlNm','icaUC2S','ywXSzwq','mJuYmdKWuMvdq3f1','BMLvvLy','Dw5PDhK','mNb4oYa','CM0GlJq','zMLLBgq','Bwf4','ywn0A0S','zdSGyMe','yuT4uxG','AxmGyNu','ywrPDxm','zxqGmca','B2TLpsi','ldi1nsW','ndC1nde5mhPWDM9hCa','B25LigK','nZaWia','EcbYz2i','idnWEdS','odiPoYa','EYbIywm','zsWGDhi','BMvHCI0','uIb2ms4','mdSGyM8','s2f6EM4','ihrOAxm','idfWEca','ywrKrxy','ENHqsuq','B2LUDgu','mJiSocW','Aw5Zzxq','zMyP','BwLUkdq','ugrptuO','mJCYzxL4Dvft','v2vItw8','zMLSBfm','ihjLBg8','icaGyMe','oIbPBMG','idrWEdS','ztSGD2K','zwfSDgG','lwXPBMu','Acb7iha','i2zMzG','phbHDgG','BNrLCJS','CYbLyxm','Ahq7igm','ndGZnJq','ohb4oYa','A0zyANu','C3bLzwq','zwfKige','idHWEdS','C3r5Bgu','mtaWid0','BNrLBNq','EMDIt1u','qvjhAMy','DgLVBJO','i2zMnMi','DhKGDMe','q2zQu1u','ldiXlc4','sg9VAYa','C2v0qxq','AxHLzdS','yw5Uywi','ide7ig0','CMrLCJO','u2L6zq','iKLUDgu','Bw1Hq3G','vffVs3m','yw1L','zJzIowq','Aw4GC2e','rLvvrwe','BdOGBM8','zMuGBw8','EMu6ide','nIaXoci','Fdv8mxW','Axr5oIa','Aw46ida','tgHyz2K','sgXor0K','zNvSBhm','BMq6ihi','CIbNyw0','uKrOtg4','yxrPB24','BMvS','whnuB28','zxH0','ignVBg8','zg93BIa','yxjKlxq','C2f2zq','C2HVD24','EdSGCge','vKX4Buy','CI51As4','D0jSDxi','lKXVy2e','ChvZAa','lwfWCgu','zgL2','zhrOoIa','mtSGBwK','s2v5C3q','Ec1OzwK','Bg9Hzgu','zM9UDa','oYb0CMe','tMvnuvO','BwrLC2m','v0jhyxa','Bw4TAa','vuvNvxy','yNfrEwO','twLZyW','yxbWzw4','BNnSyxq','C3rwt2u','uMvJDa','igjVCMq','CZPUB24','y3qGB24','ifvjiIW','wevcze8','sNLWv1K','CMjJywO','ig1HEsa','y2HLCYa','lwL0zw0','BMCGzM8','igfSAwC','y1jUwNu','jsbUBY0','igjHy2S','Awr0AdO','oIbHyNm','BwrhCgC','tuLtu0K','BI1PDgu','ywiUywm','lc4WnsK','igv4Axq','yxa6ide','C2STBwi','z2v0rwW','vNLqDNi','CMLUz3m','mxb4ida','ugn0','ltiUnsa','odaSmtK','BMvJyxa','AY1Jyxi','r1LWtuu','BMLUzW','oIa4ChG','wxrMufu','yxrLvge','BMf2','Eca2ChG','yMHVCa','twfjqxi','zxjPDdS','AKTVwLy','rerbs3e','u3bHy2u','Dg9Y','ic5ZAY0','A2L0lxm','lNnRlw0','Axb0kq','BNqTC2K','CIbHzhy','zMy2yJK','BfPiDeO','mIaXmK0','Aw9U','s2v5vW','zNbZ','ign1CNm','nsaWlti','s2v5ra','yxK6igy','BfnYBwe','kYbtCge','uK1c','yxrSEsa','ywnRz3i','icaGig8','BMC6idq','s0fhExG','ALjrzee','CgfYzw4','DgrLzgm','AxmGAg8','zxj5idi','Awy7ih0','y2vUDgu','q090CNK','Fdv8mta','Dxm6idi','rxHW','igvMzMu','ig9Wywm','C3bHBG','mtjWEdS','B3zLCMW','BgLNBI0','ideWChG','B2rLu3q','BI1TywK','CMvHza','mtjWEca','shfRCwe','zg93kda','mhW0Fdm','C2v0sxq','zKP1vvO','oc00lJu','lJv6iIa','qxndA2O','zhrOoJe','C3n2tKu','ndySmJm','lc4WnIK','yJPOB3y','DxjDigG','AuvfChq','C2STC3C','BNPpsKS','u0Xgvwe','z3jVDw4','Bg9NBY0','Cc1ZAge','yMX5lum','z2H0oIa','DfDKweu','r25qwLa','BJOGy28','DgXL','AfnOywq','qunuAYa','AMvzqMi','Bg9Hzca','idi0iIa','mdSGy3u','EdSGB3u','CfPqufi','CMfWAwq'];_0x545c=function(){return _0x2a4d97;};return _0x545c();}
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
