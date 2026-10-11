// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.6
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
function _0x5470(_0x27e806,_0x3b7bfb){_0x27e806=_0x27e806-(0x725*-0x2+-0x3*-0xaf3+-0x907*0x2);var _0x107028=_0x567d();var _0xb9c064=_0x107028[_0x27e806];if(_0x5470['aKjNEF']===undefined){var _0x5ae66a=function(_0x302e4c){var _0x164905='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3de9c2='',_0xddf4e1='';for(var _0x356fc4=-0xb0c*-0x1+0x10b3+0x1*-0x1bbf,_0x32b58e,_0x1460f2,_0x128b06=-0x45*-0x64+0x2b*0x89+-0x31f7;_0x1460f2=_0x302e4c['charAt'](_0x128b06++);~_0x1460f2&&(_0x32b58e=_0x356fc4%(-0xd56+-0x2077+-0x25*-0x13d)?_0x32b58e*(0x1*0xed2+-0x1*0x1382+-0x4f*-0x10)+_0x1460f2:_0x1460f2,_0x356fc4++%(0xf6*0xa+-0x17*-0x13c+-0x25fc))?_0x3de9c2+=String['fromCharCode'](0x1455*0x1+0x503*0x1+-0x1859&_0x32b58e>>(-(0x912+0x3*-0x2de+-0x76)*_0x356fc4&0x3bd+-0x84b*-0x2+-0x144d)):0x2*0xf96+-0x125*-0xa+-0x2a9e){_0x1460f2=_0x164905['indexOf'](_0x1460f2);}for(var _0x4651d7=0x19*0x145+0xd4*-0x4+0x1c6d*-0x1,_0x30cebf=_0x3de9c2['length'];_0x4651d7<_0x30cebf;_0x4651d7++){_0xddf4e1+='%'+('00'+_0x3de9c2['charCodeAt'](_0x4651d7)['toString'](0x1701+0x14b+-0x183c))['slice'](-(0x150b*-0x1+0x220*-0x9+0x282d));}return decodeURIComponent(_0xddf4e1);};_0x5470['RlaEtR']=_0x5ae66a,_0x5470['ffYCcd']={},_0x5470['aKjNEF']=!![];}var _0x11f268=_0x107028[0x10a0+-0xc8b*-0x3+-0x3641],_0x174eb5=_0x27e806+_0x11f268,_0x37a896=_0x5470['ffYCcd'][_0x174eb5];return!_0x37a896?(_0xb9c064=_0x5470['RlaEtR'](_0xb9c064),_0x5470['ffYCcd'][_0x174eb5]=_0xb9c064):_0xb9c064=_0x37a896,_0xb9c064;}(function(_0x2b3066,_0x1af2ee){var _0x43aee5=_0x5470,_0x588de3=_0x2b3066();while(!![]){try{var _0x2ef6aa=parseInt(_0x43aee5(0x3ec))/(0xe7c+0x1b9f+-0x2a1a)*(parseInt(_0x43aee5(0x39d))/(-0x1536+0x14d7+0x61))+parseInt(_0x43aee5(0x4e8))/(0x5*0x1d+0x26c5+-0x1*0x2753)*(parseInt(_0x43aee5(0x247))/(0x12f8+0xaac+-0x1da0))+-parseInt(_0x43aee5(0x3d8))/(-0xf6a*0x2+0x2*0x8b7+0xd6b)*(parseInt(_0x43aee5(0x1ad))/(0x80*-0x1a+0x2b*0xad+-0x5*0x335))+parseInt(_0x43aee5(0x55f))/(0x102d+-0x635+0x1*-0x9f1)+parseInt(_0x43aee5(0x543))/(-0xf05+0x1714+-0x89*0xf)+-parseInt(_0x43aee5(0x17e))/(-0x120d+-0x355*-0x9+-0xbe7)+parseInt(_0x43aee5(0x11c))/(-0x5f*0x1d+0x1c3*0x11+-0x1326)*(-parseInt(_0x43aee5(0x5cf))/(-0x1fd*0x13+-0x1ce*-0xe+0xc8e));if(_0x2ef6aa===_0x1af2ee)break;else _0x588de3['push'](_0x588de3['shift']());}catch(_0x15d847){_0x588de3['push'](_0x588de3['shift']());}}}(_0x567d,0x115f*-0x1e+-0x982d0+-0x26*-0x7d11),((()=>{'use strict';var _0x1256f8=_0x5470,_0x292e55={'FsUta':'sakur'+_0x1256f8(0x39b)+'r.v1','vLWwO':function(_0x5eefdd,_0x54ef22){return _0x5eefdd+_0x54ef22;},'tXofK':function(_0x36f689,_0x5c9ff9){return _0x36f689(_0x5c9ff9);},'eTBrM':function(_0x2bc1d1,_0x387c74){return _0x2bc1d1>_0x387c74;},'GoXaC':_0x1256f8(0x488),'LnZqv':function(_0x5cb497){return _0x5cb497();},'ERagW':'noRec'+_0x1256f8(0x1d0),'ndJqj':_0x1256f8(0x59b),'JcdVS':_0x1256f8(0x367)+'e','owcZN':function(_0x51f65e,_0x1c7cf0){return _0x51f65e(_0x1c7cf0);},'BdKei':'QxYai','tuMun':function(_0x5c0075,_0x56450d){return _0x5c0075===_0x56450d;},'sstJs':'IWASi','VjhDc':function(_0x2af05e,_0x29ef2f,_0x2f93d6,_0x4680a1,_0x414bf1){return _0x2af05e(_0x29ef2f,_0x2f93d6,_0x4680a1,_0x414bf1);},'zxzAk':function(_0x4886ff,_0xb6c528){return _0x4886ff*_0xb6c528;},'evRYD':function(_0x2642bf,_0x69dba0){return _0x2642bf===_0x69dba0;},'PBQxa':_0x1256f8(0x189),'IKPpI':function(_0x30c2c3,_0x1f6c09){return _0x30c2c3===_0x1f6c09;},'YAtji':_0x1256f8(0x13c),'JSDke':function(_0x4adcd9,_0x530ffa){return _0x4adcd9+_0x530ffa;},'ZUnhr':function(_0x2bd448,_0xf1bb70){return _0x2bd448+_0xf1bb70;},'ufgCT':'0\x20hoo'+'ks\x20ar'+_0x1256f8(0x14a)+'all\x20o'+_0x1256f8(0x47e),'IwDON':_0x1256f8(0x12f)+'ooter'+'\x20','FvZJB':_0x1256f8(0x612),'KfmFC':_0x1256f8(0x1d2)+_0x1256f8(0x593),'joEBn':_0x1256f8(0xba),'tBrsX':function(_0x553333,_0x3e947c){return _0x553333!==_0x3e947c;},'BdqXy':'[saku'+'ra-ko'+'ur]\x20h'+_0x1256f8(0x2d9)+_0x1256f8(0xc0)+_0x1256f8(0x327),'iLZEs':function(_0x15be7b,_0x210cbf,_0x3229e7,_0x134e68,_0x4d9564){return _0x15be7b(_0x210cbf,_0x3229e7,_0x134e68,_0x4d9564);},'uwxuQ':_0x1256f8(0x2c3)+_0x1256f8(0x519),'qSlaE':function(_0xd568f7,_0x5aa941){return _0xd568f7/_0x5aa941;},'zpUeI':function(_0x25cf4e,_0xa61560){return _0x25cf4e+_0xa61560;},'HkVaN':function(_0x55ac51,_0x55f2b2){return _0x55ac51!==_0x55f2b2;},'EnCsB':'bodOB','hArWr':_0x1256f8(0x516)+_0x1256f8(0x30f),'joqeb':function(_0x886cf1,_0x204aa5,_0x1c6668,_0x325db5,_0x55ea52,_0x398b41,_0x1e28f6,_0x58d21c){return _0x886cf1(_0x204aa5,_0x1c6668,_0x325db5,_0x55ea52,_0x398b41,_0x1e28f6,_0x58d21c);},'DRfPZ':'OHeal'+'th','BiDHG':'i32','emqWl':'godDi'+'e','UpnMJ':function(_0x4be349,_0x3c08ce,_0x59d62e,_0x29af86,_0x258b70,_0x58cae9,_0xcc6a1d,_0x46d9e7){return _0x4be349(_0x3c08ce,_0x59d62e,_0x29af86,_0x258b70,_0x58cae9,_0xcc6a1d,_0x46d9e7);},'MyaAF':_0x1256f8(0x508)+_0x1256f8(0x33e)+'ning','Fktiy':_0x1256f8(0xee)+'unded','IIMJO':function(_0x4b9e0a){return _0x4b9e0a();},'wSlgZ':_0x1256f8(0x1a3),'BceBJ':function(_0x1a8e90,_0x38ca67){return _0x1a8e90-_0x38ca67;},'mVYUw':function(_0x4c1c85,_0x36d1d8){return _0x4c1c85/_0x36d1d8;},'fEoDa':function(_0x521670,_0xeb45f2){return _0x521670(_0xeb45f2);},'opiXU':function(_0x512d49,_0x36d3e7){return _0x512d49(_0x36d3e7);},'yewGL':function(_0x19c1a1,_0x4f593a){return _0x19c1a1/_0x4f593a;},'nSNoR':function(_0xdaa34a,_0x5a4c73){return _0xdaa34a(_0x5a4c73);},'jAanj':function(_0x453f03,_0x3ff5af){return _0x453f03!==_0x3ff5af;},'kUWDL':function(_0x2877b6,_0x50afe3){return _0x2877b6&&_0x50afe3;},'dDvbn':function(_0x4682f1,_0x4f23aa){return _0x4682f1<_0x4f23aa;},'JLTzP':function(_0x5ab1cf,_0x4f6f6c){return _0x5ab1cf===_0x4f6f6c;},'qbRvP':_0x1256f8(0x575),'dUked':_0x1256f8(0x38a),'jGTkw':function(_0x144ffd,_0x149623){return _0x144ffd!==_0x149623;},'CQGXN':'FjpKv','hVqRS':function(_0x2b985b,_0x4b7680,_0x4f7c12,_0x58119e,_0x252f49){return _0x2b985b(_0x4b7680,_0x4f7c12,_0x58119e,_0x252f49);},'tHnWr':_0x1256f8(0x95),'ZAKaO':'rHuYG','KNfcI':function(_0x2f638c,_0x2304d5,_0x29f2ca,_0x108320,_0x1675d6){return _0x2f638c(_0x2304d5,_0x29f2ca,_0x108320,_0x1675d6);},'KmkYQ':function(_0x5882a6,_0x2d78cb,_0x53db08,_0x234be6,_0x434c8d){return _0x5882a6(_0x2d78cb,_0x53db08,_0x234be6,_0x434c8d);},'ScgXQ':function(_0x16e844,_0x53f16a){return _0x16e844+_0x53f16a;},'nOslN':function(_0x34f9ea,_0x19d2ee){return _0x34f9ea+_0x19d2ee;},'hFltV':function(_0x520107,_0x2e7baf){return _0x520107>_0x2e7baf;},'mEvPz':_0x1256f8(0x143),'vZoBb':_0x1256f8(0x406),'qUeDC':'keydo'+'wn','OoFQb':'keyup','pyAVt':_0x1256f8(0x406)+'down','iesrZ':'mouse'+'up','XPrza':_0x1256f8(0x196)+_0x1256f8(0x2eb),'uIVfF':function(_0x4c4ac5,_0x40b0f1){return _0x4c4ac5===_0x40b0f1;},'lyxxI':'left','sgGHh':_0x1256f8(0x104)+'9d','zTGlG':_0x1256f8(0x468)+_0x1256f8(0xe5)+'i-mon'+_0x1256f8(0x509)+_0x1256f8(0x50d)+'ospac'+'e','TsPID':_0x1256f8(0x23a)+_0x1256f8(0x3b9)+_0x1256f8(0x5d5)+'e…','lnIOf':'rgba('+_0x1256f8(0x20c)+_0x1256f8(0x54a)+'0,0.6'+')','vBSaS':'sk-fi'+_0x1256f8(0x3a6),'VrXrX':function(_0x1964b0,_0x10d172){return _0x1964b0===_0x10d172;},'WxVxt':'WNKUQ','rnGlg':'1|3|0'+'|4|2|'+'5','NpGDO':_0x1256f8(0x4d8)+'n','fpkTp':_0x1256f8(0x4aa)+'n','VxfGk':_0x1256f8(0x3c3)+_0x1256f8(0x4cb)+_0x1256f8(0x27c),'bkFve':'small','EqRdO':'span','HgBGL':'div','QjAiW':'sk-no'+'te','KvONU':'sk-ca'+'rd','rLHvV':_0x1256f8(0x1db),'lBRoY':_0x1256f8(0x28f)+'esc','yJXmQ':function(_0x5c6526,_0x3a86dc,_0xc14fb7){return _0x5c6526(_0x3a86dc,_0xc14fb7);},'UgKWk':function(_0x4eab2c){return _0x4eab2c();},'vzKax':'EhlBl','IzUdr':function(_0x395230,_0x1f931f){return _0x395230===_0x1f931f;},'XCXUr':function(_0x5ab852,_0x907a79){return _0x5ab852===_0x907a79;},'lPFdv':function(_0x115a2a){return _0x115a2a();},'SlOlo':_0x1256f8(0x4b8)+'ode','uxMsH':function(_0x1ef2e5,_0x5757b1,_0x151be2,_0x285809,_0x4f7aaa,_0x2a5c3f){return _0x1ef2e5(_0x5757b1,_0x151be2,_0x285809,_0x4f7aaa,_0x2a5c3f);},'XjNdh':function(_0x39b0c1,_0x25935d,_0x47cfd3,_0x5acbcb,_0x44b356,_0x534257){return _0x39b0c1(_0x25935d,_0x47cfd3,_0x5acbcb,_0x44b356,_0x534257);},'robRX':_0x1256f8(0x356)+_0x1256f8(0x583),'jkNpo':_0x1256f8(0x384)+'\x20Fire'+'\x20[EXP'+']','svjdL':'Overw'+_0x1256f8(0x10c)+_0x1256f8(0x555)+'tideW'+_0x1256f8(0x2d4)+_0x1256f8(0x302)+_0x1256f8(0x3de)+_0x1256f8(0x57d)+_0x1256f8(0x4e9)+_0x1256f8(0x537)+_0x1256f8(0x373)+_0x1256f8(0x2f6)+_0x1256f8(0x1c6)+'s.','IwwkZ':function(_0x41e3fd,_0x4f1eec,_0x319fb2,_0x1dc932){return _0x41e3fd(_0x4f1eec,_0x319fb2,_0x1dc932);},'rqmhJ':_0x1256f8(0x61b)+_0x1256f8(0x1d4)+'\x20four'+_0x1256f8(0x46a)+'ment\x20'+_0x1256f8(0x478)+_0x1256f8(0x5e0)+_0x1256f8(0x5c1)+_0x1256f8(0x142)+'celer'+_0x1256f8(0x3d9)+'.','teJtG':function(_0x3162d2,_0x2c1e13,_0x150705,_0x368734){return _0x3162d2(_0x2c1e13,_0x150705,_0x368734);},'qwbkJ':_0x1256f8(0x617)+'\x20%','WEDoY':_0x1256f8(0x2da)+'ty\x20%','SGdBb':'lower'+_0x1256f8(0x24a)+'oaty','eCEFV':_0x1256f8(0x40e)+_0x1256f8(0x2e0),'ZQbMz':'Zeroe'+_0x1256f8(0x184)+'ement'+_0x1256f8(0x4a4)+_0x1256f8(0x1d1)+'ime\x20s'+_0x1256f8(0x545)+'\x20jump'+_0x1256f8(0x58f)+'down\x20'+_0x1256f8(0x315)+_0x1256f8(0x57b)+'ies.','nPvCk':_0x1256f8(0x365)+'l','gLSTp':'Keyst'+_0x1256f8(0x5ab),'yPfMX':function(_0x1d9d4d,_0x4f78ba,_0x5ccfb4,_0x5361e5){return _0x1d9d4d(_0x4f78ba,_0x5ccfb4,_0x5361e5);},'EIPHI':_0x1256f8(0x1f4)+'ion','zGQXO':_0x1256f8(0xa9)+_0x1256f8(0x29b)+'t','pkIpL':function(_0x36496c,_0xd873f3,_0x21e2fd,_0x5bc166,_0x87e688,_0x3a1c06){return _0x36496c(_0xd873f3,_0x21e2fd,_0x5bc166,_0x87e688,_0x3a1c06);},'xBStc':_0x1256f8(0x376)+'eadou'+'t','sjPbC':function(_0x3a0ea6,_0x48290a,_0x38835e,_0x4e3e58,_0x78f266,_0x124144){return _0x3a0ea6(_0x48290a,_0x38835e,_0x4e3e58,_0x78f266,_0x124144);},'eWrSC':_0x1256f8(0x344)+'hair','CNjrl':_0x1256f8(0xde),'xAvSB':_0x1256f8(0xdb),'wxGFm':function(_0x4d6952,_0x5d8f1a,_0x1b8bb0,_0x89d9e8,_0x484b72,_0x21161c){return _0x4d6952(_0x5d8f1a,_0x1b8bb0,_0x89d9e8,_0x484b72,_0x21161c);},'BYVna':'No\x20en'+_0x1256f8(0x422)+_0x1256f8(0xdd)+'r:\x20th'+_0x1256f8(0x35e)+'ild\x20h'+'as\x20no'+_0x1256f8(0x133)+_0x1256f8(0x561)+_0x1256f8(0x1fa)+'ers\x20t'+_0x1256f8(0x58c)+_0x1256f8(0x563)+'k\x20on.','eyvGN':'misc','RVMPI':'Safe\x20'+'Mode\x20'+'(over'+_0x1256f8(0x62f)+_0x1256f8(0x262),'SxFfC':function(_0x409a6c,_0xbe9bf8,_0x56cae9,_0x5e1beb){return _0x409a6c(_0xbe9bf8,_0x56cae9,_0x5e1beb);},'nRCKU':_0x1256f8(0x466)+'OHeal'+'th.In'+'itiat'+'eTake'+'Healt'+'h)','nFNoc':_0x1256f8(0x180)+_0x1256f8(0x48b)+'ealth'+'.Loca'+'lDie)','AyKwM':function(_0x348f22,_0x48508a,_0x407e29){return _0x348f22(_0x48508a,_0x407e29);},'FAwWt':_0x1256f8(0x43f)+_0x1256f8(0x546)+_0x1256f8(0x600)+'eRunn'+'ing\x20+'+_0x1256f8(0x3f9)+_0x1256f8(0xe9)+'d)','VnYAZ':_0x1256f8(0x1b2)+_0x1256f8(0x40c)+'work\x20'+_0x1256f8(0x50c)+'ut\x20th'+'is','OecwT':'God/d'+'amage'+'/rapi'+_0x1256f8(0x107)+_0x1256f8(0x259)+_0x1256f8(0x1e3)+'\x20ban\x20'+_0x1256f8(0x62d)+'even\x20'+'with\x20'+_0x1256f8(0x132)+_0x1256f8(0x4f5),'CfpPI':'Dange'+'r','oDTNQ':_0x1256f8(0x96)+_0x1256f8(0x18c)+'e\x20ser'+'ver-v'+'isibl'+'e\x20tra'+_0x1256f8(0x5a8),'lvRtA':'Wipe\x20'+_0x1256f8(0x276)+_0x1256f8(0x17c)+'s','anYet':_0x1256f8(0x34a),'ukxjJ':'Slflt','iKZpG':function(_0x40677d){return _0x40677d();},'JHjeQ':_0x1256f8(0x236)+_0x1256f8(0x181)+'0x600'+_0x1256f8(0x36f)+'nt','qteSJ':function(_0x31eb04,_0x51fa6d){return _0x31eb04*_0x51fa6d;},'JfKFu':_0x1256f8(0x5c6)+'22,8,'+'16,0.'+'7)','GlFHl':'#fff','qhHhy':'cente'+'r','vdftA':function(_0x5df278,_0x29646d){return _0x5df278+_0x29646d;},'bUnBC':function(_0x1e607e,_0x2f5b37){return _0x1e607e*_0x2f5b37;},'OymQU':_0x1256f8(0x497),'btKaR':function(_0x447b90,_0xbce04c){return _0x447b90===_0xbce04c;},'KuUMj':function(_0x370e71,_0x18f259){return _0x370e71-_0x18f259;},'bTLOX':'KeyA','vaPRU':function(_0x12739f,_0x4785b6){return _0x12739f+_0x4785b6;},'qxCFL':function(_0x35c515,_0x58e815,_0x3bdf42,_0x2412c7,_0x3316ac,_0x63b149,_0x1dbdff,_0x1b4349){return _0x35c515(_0x58e815,_0x3bdf42,_0x2412c7,_0x3316ac,_0x63b149,_0x1dbdff,_0x1b4349);},'XXVHR':_0x1256f8(0x523),'alAHT':_0x1256f8(0x5f0),'raGLo':_0x1256f8(0xef),'ZdSpV':_0x1256f8(0x1e0),'HlKHm':_0x1256f8(0x3aa),'Buzlf':_0x1256f8(0x270),'AZzhl':_0x1256f8(0x159)+_0x1256f8(0x4b4)+_0x1256f8(0x218)+'licat'+'ion','GFdDw':'UWMK\x20'+'bound'+'\x20','hKERj':'\x20|\x20ga'+_0x1256f8(0xfe),'VYigp':_0x1256f8(0x507),'dutea':_0x1256f8(0x58b),'recWv':_0x1256f8(0x45c)+'desc','yoxlY':function(_0x36a688,_0x208f24){return _0x36a688+_0x208f24;},'hBpQT':'\x20hook'+'s','xEJSf':_0x1256f8(0x45b)+'ng','XyLmr':'mn-ma'+'in','cNHiX':_0x1256f8(0x5ba)+'p','ITRkT':function(_0x5673c8,_0x42184b){return _0x5673c8+_0x42184b;},'euqjb':_0x1256f8(0x3ce)+_0x1256f8(0x60c),'VqPyS':function(_0x1fb184,_0x247031,_0x2db33a){return _0x1fb184(_0x247031,_0x2db33a);},'XVfpV':'posit'+'ion:f'+_0x1256f8(0xcb)+_0x1256f8(0x4c7)+':0;wi'+_0x1256f8(0x83)+_0x1256f8(0x486)+_0x1256f8(0x3d0)+_0x1256f8(0x227)+_0x1256f8(0x449)+_0x1256f8(0x2bf)+_0x1256f8(0x47f)+'48364'+'6;poi'+_0x1256f8(0x435)+'event'+_0x1256f8(0x177)+'e','rDDiA':'posit'+'ion:f'+_0x1256f8(0xcb)+_0x1256f8(0x4c7)+_0x1256f8(0x13d)+'index'+_0x1256f8(0x47f)+_0x1256f8(0xdf)+'7;poi'+'nter-'+'event'+'s:non'+'e;','OSCdZ':'PjOZK','CbqBw':_0x1256f8(0x3ed),'aBBRs':'sakur'+_0x1256f8(0x39b)+_0x1256f8(0x597)+'v1','wREIu':'Move','Nbkyf':'Misc','pZFES':_0x1256f8(0x380)+'c6','WRrDO':'error','QaScL':_0x1256f8(0x355),'XztOH':'Sakur'+_0x1256f8(0x10f),'iozWi':_0x1256f8(0x479),'IRehx':_0x1256f8(0x52d)+_0x1256f8(0x326)+_0x1256f8(0x1be)+_0x1256f8(0x237),'wGwgi':_0x1256f8(0x527)+_0x1256f8(0x505)+_0x1256f8(0x402)+_0x1256f8(0xad)+'tide.'+'Recoi'+'lMoti'+'on','Bjlok':_0x1256f8(0x42d)+_0x1256f8(0x4e5),'kmiTx':_0x1256f8(0x106)+'ve','cbWkO':_0x1256f8(0x1a6)+'ra-ko'+_0x1256f8(0x525)+_0x1256f8(0x287)+'nit\x20f'+_0x1256f8(0x631)+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x1256f8(0x300)+_0x1256f8(0x3e7)]||''))return;if(window[_0x1256f8(0x128)+_0x1256f8(0x4d3)+'OUR__'])return;window['__SAK'+_0x1256f8(0x4d3)+'OUR__']=!![];var _0x351d33=_0x292e55['sgGHh'],_0x5a3568=_0x292e55['pZFES'],_0x19b1c3={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x1256f8(0x104)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x571bcc={..._0x19b1c3};try{Object['assig'+'n'](_0x571bcc,JSON['parse'](localStorage['getIt'+'em'](_0x1256f8(0x409)+'a.kou'+_0x1256f8(0x2a2))||'{}'));}catch(_0x496e25){}function _0x2d7827(){var _0x10000b=_0x1256f8;try{localStorage['setIt'+'em'](_0x292e55[_0x10000b(0x44d)],JSON[_0x10000b(0x2e6)+'gify'](_0x571bcc));}catch(_0x322baa){}}var _0x4c7631={'uwmk':!!window[_0x1256f8(0x159)+_0x1256f8(0x101)+_0x1256f8(0x503)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x571bcc[_0x1256f8(0x284)+'ode'],'lastError':''};try{if(_0x1256f8(0xe6)==='oiifh')window[_0x1256f8(0x25f)+_0x1256f8(0x4e6)+_0x1256f8(0x2b1)+'r'](_0x292e55[_0x1256f8(0x5fe)],_0x370377=>{var _0x2b2a20=_0x1256f8;try{var _0x565aed=_0x370377&&(_0x370377[_0x2b2a20(0x1b9)+'ge']||_0x370377['error']&&_0x370377['error']['messa'+'ge'])||_0x2b2a20(0x2e7)+'wn';if(_0x370377&&_0x370377[_0x2b2a20(0x58d)+_0x2b2a20(0x3e7)])_0x565aed+=_0x292e55['vLWwO'](_0x292e55['vLWwO']('\x20@\x20',String(_0x370377[_0x2b2a20(0x58d)+_0x2b2a20(0x3e7)])['split']('/')[_0x2b2a20(0x1c0)]())+':',_0x370377[_0x2b2a20(0x2b9)+'o']||'?');_0x4c7631[_0x2b2a20(0x602)+'rror']=_0x292e55[_0x2b2a20(0x4d1)](String,_0x565aed)[_0x2b2a20(0x2f4)](0x1e14+-0xd2f*-0x2+-0x5*0xb4a,0xc60+0xa*0x2bd+-0x2722*0x1);}catch(_0x4d4f4b){}});else return _0x1a94c4[_0x1256f8(0x4c1)](_0x1256f8(0x1a6)+_0x1256f8(0x4b6)+_0x1256f8(0x52a)+'ook\x20r'+_0x1256f8(0xc0)+_0x1256f8(0x327),_0x41de30,_0x5d76f4&&_0x334c07['messa'+'ge']),null;}catch(_0x2056da){}var _0x3bba9c=null,_0x443021=null,_0xc2f259={},_0x1afd5e=[],_0x431a67=[],_0x2b17aa=new Map();function _0xcf089a(_0xd9a6e3,_0x1c96d8){var _0x461337=_0x1256f8;if(!_0x1c96d8||_0xd9a6e3['inclu'+_0x461337(0x48a)](_0x1c96d8)||_0x292e55['eTBrM'](_0xd9a6e3['lengt'+'h'],0x21d9+0xee*0xd+-0x2daf))return;_0xd9a6e3['push'](_0x1c96d8);}function _0x433a6c(_0x573df3,_0x5e94c7,_0x155906,_0xaa9bed){var _0x5818db=_0x1256f8,_0x21eb89=('1|0|2'+_0x5818db(0x215)+'3')['split']('|'),_0x52d51c=-0x241*0x9+-0x39*-0x69+0x1*-0x318;while(!![]){switch(_0x21eb89[_0x52d51c++]){case'0':try{_0x162d40=_0x5e94c7&&_0x5e94c7['val']?_0x5e94c7['val']():-0x1df*0xe+-0x1a42+-0x12*-0x2ea;}catch(_0x3d3705){}continue;case'1':var _0x162d40=0x25c0+-0x248*-0x6+-0x3370;continue;case'2':if(!_0x162d40)return;continue;case'3':if(_0xaa9bed==='movem'+_0x5818db(0x30f)&&_0x573df3[_0x5818db(0x4ea)+'h']){var _0x1d75bf=_0xc2f259[_0x5818db(0x106)+'ve'];if(_0x1d75bf)try{_0x1d75bf[_0x5818db(0x3ff)+'ed']=![];}catch(_0x384003){}}continue;case'4':_0xcf089a(_0x573df3,_0x162d40);continue;case'5':_0x155906[_0xaa9bed]=_0x573df3[_0x5818db(0x4ea)+'h'];continue;}break;}}function _0x3294da(_0x265dd6,_0x5e846d,_0x5cc027){var _0x1d8f9d=_0x1256f8;if('XSkWa'!=='QQoxT'){var _0x7781c9=_0x2b17aa[_0x1d8f9d(0x4eb)](_0x265dd6);!_0x7781c9&&(_0x1d8f9d(0x271)===_0x1d8f9d(0x271)?(_0x7781c9=new Map(),_0x2b17aa['set'](_0x265dd6,_0x7781c9)):(_0x3acc80['stopP'+'ropag'+'ation'](),_0x187431()));if(!_0x7781c9[_0x1d8f9d(0x264)](_0x5e846d)){if(_0x292e55[_0x1d8f9d(0x4d6)]==='pXCDY')try{var _0x4429b9=new _0x3bba9c(_0x265dd6)[_0x1d8f9d(0x2b0)+'ield'](_0x5e846d,_0x5cc027);_0x7781c9[_0x1d8f9d(0x285)](_0x5e846d,_0x4429b9!==undefined?_0x4429b9[_0x1d8f9d(0x513)]():null);}catch(_0x4a76b2){_0x7781c9['set'](_0x5e846d,null);}else _0x5b93ad(_0x5dc444,-0xea1*-0x2+-0x39+-0x1cbd,'i32',_0x20bf58),_0xa1f11c(_0x5005b2,0xae3+-0x2*-0xdab+-0x25e5,_0x1d8f9d(0xd9),_0x17ed4e);}return _0x7781c9[_0x1d8f9d(0x4eb)](_0x5e846d);}else{_0x594554[_0x1d8f9d(0x3eb)+_0x1d8f9d(0x4be)]=!!_0x22846b[_0x1d8f9d(0x56f)+_0x1d8f9d(0x50a)+_0x1d8f9d(0x260)];try{var _0x235113=-0x25af*-0x1+-0x1*0x1066+0x1549*-0x1;for(var _0x3b0069 in _0x26fa5a){if(_0x4ccc80[_0x3b0069]&&_0x46a7bf[_0x3b0069][_0x1d8f9d(0x51d)+'ed'])_0x235113++;}_0x20f258[_0x1d8f9d(0x50f)+'Ok']=_0x235113;}catch(_0x5674){}}}function _0x233b12(_0x4e078b,_0x313eb2,_0x360c66,_0x303779){var _0x385c49=_0x1256f8;try{new _0x3bba9c(_0x4e078b)['write'+_0x385c49(0x374)](_0x313eb2,_0x360c66,_0x303779);}catch(_0x350812){}}function _0x415cf6(_0x2a2be9,_0x44caae){var _0x5b9cda=_0x1256f8,_0x2a5c6d={'fOWFn':function(_0x505759,_0xa390f9){return _0x505759+_0xa390f9;},'bFuLN':_0x292e55['JcdVS'],'FfQGf':function(_0x28a315,_0x2edc19){return _0x28a315===_0x2edc19;},'AUgjM':function(_0xf2e73d,_0x596412){var _0x4a490e=_0x5470;return _0x292e55[_0x4a490e(0xbd)](_0xf2e73d,_0x596412);}};if(_0x292e55['BdKei']!==_0x5b9cda(0xd1))_0x411999['noRec'+_0x5b9cda(0x1d0)]=_0x340217,_0x292e55[_0x5b9cda(0x458)](_0x5b3651),_0x585be4(_0x292e55[_0x5b9cda(0xf7)],_0x376610);else try{if(_0x5b9cda(0x9c)===_0x5b9cda(0x9c)){var _0x53f605=new _0x3bba9c(_0x2a2be9)[_0x5b9cda(0x2b0)+_0x5b9cda(0x562)](_0x44caae,_0x5b9cda(0x638));return _0x53f605?_0x53f605[_0x5b9cda(0x513)]():0x3d0*0x8+0x733*-0x1+-0x174d;}else{if(_0x1ad7e1)return;_0x3e424b=!![],_0x4795a1['addEv'+'entLi'+_0x5b9cda(0x2b1)+'r']('keydo'+'wn',_0x1f64fc,!![]),_0x64c9da['addEv'+_0x5b9cda(0x4e6)+'stene'+'r'](_0x5b9cda(0x524),_0x55a3a2,!![]),_0x3fce7e[_0x5b9cda(0x25f)+'entLi'+_0x5b9cda(0x2b1)+'r'](_0x5b9cda(0x406)+_0x5b9cda(0x266),_0x20b333,!![]),_0x4614b4[_0x5b9cda(0x25f)+_0x5b9cda(0x4e6)+'stene'+'r'](_0x5b9cda(0x406)+'up',_0x42e154,!![]),_0x5e224c[_0x5b9cda(0x25f)+_0x5b9cda(0x4e6)+'stene'+'r'](_0x292e55['ndJqj'],_0x43f5fb);}}catch(_0x39f19d){if(_0x292e55[_0x5b9cda(0x423)](_0x292e55[_0x5b9cda(0x10a)],_0x292e55[_0x5b9cda(0x10a)]))return-0x238b+0x261c+0x9*-0x49;else{_0x535413[_0x5b9cda(0x84)]=_0x489b98,_0x4271b0();var _0x394d43=_0x4cd549[_0x5b9cda(0x5bf)](_0x1a2e94=>_0x1a2e94['id']===_0x2b9345)||_0x302e97[0xdc1+0xb3*0x2e+0x2deb*-0x1];_0x525272[_0x5b9cda(0x592)+'onten'+'t']=_0x2a5c6d['fOWFn']('Sakur'+'a\x20Kou'+_0x5b9cda(0x621),_0x394d43['label']);for(var [_0x5560ca,_0x2f44eb]of _0x4bb522)_0x2f44eb[_0x5b9cda(0x47d)+'List']['toggl'+'e'](_0x2a5c6d[_0x5b9cda(0x162)],_0x2a5c6d[_0x5b9cda(0x5d3)](_0x5560ca,_0x10ce59));_0x27213a[_0x5b9cda(0x23b)+_0x5b9cda(0x294)+'ldren'](..._0x2a5c6d[_0x5b9cda(0x2a6)](_0x290ad3,_0x2a1255));}}}function _0x1f9d9e(_0x3c936c,_0x1292b3,_0x433523,_0x3b6431){var _0x1ff46d=_0x1256f8,_0x2b10ff=_0x3294da(_0x3c936c,_0x1292b3,_0x433523);if(_0x2b10ff!=null)_0x292e55[_0x1ff46d(0xf9)](_0x233b12,_0x3c936c,_0x1292b3,_0x433523,_0x292e55[_0x1ff46d(0x490)](_0x2b10ff,_0x3b6431));}function _0xda6bb6(_0x4128d2,_0x32ad6f,_0x20ddb9,_0x240fd1,_0x4c0e40,_0x15e47e,_0x33dfdb){var _0x56857c=_0x1256f8;try{if(_0x292e55[_0x56857c(0x572)]!==_0x292e55[_0x56857c(0x572)]){var _0x592fef=_0x458352[_0x4bc604][_0x56857c(0x1b4)+_0x56857c(0x5c4)+_0x56857c(0x603)](_0x56857c(0x45c)+'desc');_0x592fef&&(_0x292e55[_0x56857c(0x120)](_0x592fef['textC'+'onten'+'t'][_0x56857c(0x2bf)+'Of'](_0x292e55[_0x56857c(0x27b)]),-0x8c0+0x15bb*-0x1+0x11*0x1cb)||_0x292e55[_0x56857c(0x5f8)](_0x592fef[_0x56857c(0x592)+_0x56857c(0x368)+'t'][_0x56857c(0x2bf)+'Of'](_0x292e55[_0x56857c(0x9d)]),0x30b+-0xc6*0xe+0x7c9))&&(_0x592fef[_0x56857c(0x592)+'onten'+'t']=_0x175947['safeM'+_0x56857c(0x5ea)]?_0x56857c(0x62b)+_0x56857c(0x55e)+'-\x20ove'+_0x56857c(0x389)+_0x56857c(0x359)+_0x56857c(0x1de)+_0x56857c(0x634)+_0x56857c(0x169)+_0x56857c(0x30b)+_0x56857c(0x32c)+')':_0x52a964[_0x56857c(0x517)]?_0x292e55[_0x56857c(0x4c6)](_0x292e55['vLWwO'](_0x292e55['JSDke']('UWMK\x20'+'bound'+'\x20'+(_0x137147[_0x56857c(0x50f)+'Total']?_0x292e55[_0x56857c(0x547)](_0x2e040f[_0x56857c(0x50f)+'Ok']+'/'+_0x38fad9[_0x56857c(0x50f)+'Total'],'\x20hook'+'s'):_0x292e55[_0x56857c(0x29a)])+(_0x56857c(0x31d)+_0x56857c(0xfe))+(_0x324610['gameL'+'oaded']?'loade'+'d':'loadi'+'ng'),_0x292e55[_0x56857c(0x1cd)])+(_0x56aae9[_0x56857c(0x2c3)+'ers']?_0x56857c(0x612):_0x56857c(0x168))+('\x20|\x20mo'+_0x56857c(0xcc)+'t\x20'),_0x22cee2['movem'+_0x56857c(0x30f)]?_0x292e55['FvZJB']:'none'),_0x4f24d0['lastE'+'rror']?_0x292e55[_0x56857c(0x3a9)]+_0x2467ca['lastE'+'rror']:''):'UWMK\x20'+_0x56857c(0x4ec)+_0x56857c(0x4e0)+'overl'+'ay\x20on'+_0x56857c(0x188)+'einst'+_0x56857c(0x613)+'he\x20us'+'erscr'+_0x56857c(0x590));}else{var _0x481317=_0x443021[_0x56857c(0x5ef)+_0x56857c(0xca)]({'typeName':_0x32ad6f,'methodName':_0x20ddb9,'params':_0x240fd1,'returnType':_0x4c0e40},_0x15e47e);return _0x481317[_0x56857c(0x3ff)+'ed']=_0x292e55['tBrsX'](_0x33dfdb,![]),_0xc2f259[_0x4128d2]=_0x481317,_0x4c7631['hooks'+_0x56857c(0x396)]++,_0x481317;}}catch(_0x5d9ff1){return console[_0x56857c(0x4c1)](_0x292e55['BdqXy'],_0x4128d2,_0x5d9ff1&&_0x5d9ff1[_0x56857c(0x1b9)+'ge']),null;}}function _0x56175b(_0x12ec18,_0x11430d,_0x3cb1f6,_0x3003bf,_0x2ea298,_0x46b3f6,_0x35241d){var _0xaa1882=_0x1256f8;try{var _0x57b831=_0x443021['hookP'+_0xaa1882(0x529)+'x']({'typeName':_0x11430d,'methodName':_0x3cb1f6,'params':_0x3003bf,'returnType':_0x2ea298},_0x46b3f6);return _0x57b831['enabl'+'ed']=_0x35241d!==![],_0xc2f259[_0x12ec18]=_0x57b831,_0x4c7631['hooks'+'Total']++,_0x57b831;}catch(_0x554498){return console[_0xaa1882(0x4c1)](_0x292e55['BdqXy'],_0x12ec18,_0x554498&&_0x554498['messa'+'ge']),null;}}var _0x37414f=()=>![];try{if(_0x292e55[_0x1256f8(0x642)]!==_0x1256f8(0x4a3)){if(window[_0x1256f8(0x159)+_0x1256f8(0x101)+_0x1256f8(0x503)]&&!_0x571bcc[_0x1256f8(0x284)+'ode']){_0x3bba9c=window['Unity'+_0x1256f8(0x101)+'dkit']['Value'+'Wrapp'+'er'],_0x443021=window[_0x1256f8(0x159)+'WebMo'+_0x1256f8(0x503)]['Runti'+'me']['creat'+'ePlug'+'in']({'name':_0x292e55['XztOH'],'version':_0x1256f8(0x5a5),'referencedAssemblies':['Assem'+'bly-C'+'Sharp'+_0x1256f8(0x5d2)]});if(_0x571bcc[_0x1256f8(0x4a1)+'od'])_0xda6bb6(_0x292e55[_0x1256f8(0x20b)],'OHeal'+'th',_0x292e55['IRehx'],[_0x292e55['BiDHG'],_0x1256f8(0xd9)],undefined,_0x37414f,!!_0x571bcc[_0x1256f8(0x479)]);if(_0x571bcc['hookG'+_0x1256f8(0x60e)])_0xda6bb6(_0x292e55['emqWl'],'OHeal'+'th',_0x1256f8(0x18e)+_0x1256f8(0x261),[_0x1256f8(0xd9),'i32','i32',_0x292e55['BiDHG'],_0x1256f8(0xd9)],undefined,_0x37414f,!!_0x571bcc[_0x1256f8(0x479)]);if(_0x571bcc[_0x1256f8(0x33d)+_0x1256f8(0x377)+'il'])_0x292e55[_0x1256f8(0x599)](_0xda6bb6,_0x1256f8(0xe8)+_0x1256f8(0x1d0),_0x292e55['wGwgi'],_0x1256f8(0x2f2),['i32'],undefined,_0x37414f,!!_0x571bcc[_0x1256f8(0xe8)+_0x1256f8(0x1d0)]);if(_0x571bcc['hookC'+_0x1256f8(0x272)+'e'])_0x56175b('capSh'+'ooter',_0x292e55['Bjlok'],_0x292e55['MyaAF'],[_0x292e55[_0x1256f8(0x8a)],_0x1256f8(0xd9)],undefined,(_0x10ec81,_0x525464)=>{_0x292e55['iLZEs'](_0x433a6c,_0x431a67,_0x525464,_0x4c7631,_0x292e55['uwxuQ']);},!![]);if(_0x571bcc['hookC'+'aptur'+'e'])_0x56175b(_0x292e55['kmiTx'],'Legio'+_0x1256f8(0x505)+_0x1256f8(0x402)+_0x1256f8(0xad)+'tide.'+_0x1256f8(0x4d9)+'ent',_0x1256f8(0xee)+_0x1256f8(0x4ee),[_0x1256f8(0xd9)],_0x292e55[_0x1256f8(0x8a)],(_0x36423e,_0x4c43f0)=>{var _0x55c97a=_0x1256f8;if(_0x55c97a(0x5d0)!=='kUGsS')try{new _0x49ef2d(_0x393bf2)['write'+_0x55c97a(0x374)](_0x1512bd,_0xcf5bc4,_0x4ca94c);}catch(_0x359075){}else _0x433a6c(_0x1afd5e,_0x4c43f0,_0x4c7631,'movem'+_0x55c97a(0x30f));},!![]);}}else _0x227c01[_0x1256f8(0x553)+'aptur'+'e']=_0x4f66fe,_0x9ed702();}catch(_0x5b040d){console['warn'](_0x292e55[_0x1256f8(0xd4)],_0x5b040d&&_0x5b040d[_0x1256f8(0x1b9)+'ge']);}function _0x4ae9f5(_0x28b772,_0x1e4d97){var _0x34b557=_0x1256f8,_0x128749={'dgJwQ':'7|18|'+_0x34b557(0x551)+'|20|1'+_0x34b557(0x28e)+'|4|16'+_0x34b557(0x528)+_0x34b557(0x464)+'4|6|1'+'5|17|'+'10|5|'+_0x34b557(0x369)+_0x34b557(0x25c)+'9','FOrJu':function(_0x51b416,_0x47e2fd){return _0x51b416+_0x47e2fd;},'rTMxu':function(_0x535256,_0x20650e){var _0x482b8d=_0x34b557;return _0x292e55[_0x482b8d(0x140)](_0x535256,_0x20650e);},'rHqCf':function(_0x2445bb,_0x2ce8d1){return _0x2445bb-_0x2ce8d1;},'owvsA':function(_0x507625,_0x50a101){var _0x508b88=_0x34b557;return _0x292e55[_0x508b88(0x4b5)](_0x507625,_0x50a101);},'lKxRu':function(_0x256f4f,_0x2ca30d){return _0x292e55['zxzAk'](_0x256f4f,_0x2ca30d);},'FJTjA':function(_0x27b90d,_0xc98ff4){return _0x27b90d*_0xc98ff4;}};if(_0x292e55['HkVaN']('bodOB',_0x292e55['EnCsB']))_0x3df81a[_0x34b557(0x15a)+'e'](_0x4fb21c['code']);else{var _0x4ec66b=_0xc2f259[_0x28b772];if(_0x4ec66b)try{if(_0x34b557(0x375)!=='TOcxo'){var _0x282b64=_0x128749[_0x34b557(0x279)][_0x34b557(0x24d)]('|'),_0x40c9f9=-0xe*-0x236+-0x40b+-0x1ae9;while(!![]){switch(_0x282b64[_0x40c9f9++]){case'0':_0x2a6ea4['begin'+_0x34b557(0x57a)]();continue;case'1':_0x23654d[_0x34b557(0x242)+'tyle']=_0x237449;continue;case'2':_0xb39a21[_0x34b557(0x1dc)+_0x34b557(0x2cf)+'r']=_0x237449;continue;case'3':_0x26844b['fill']();continue;case'4':_0x39444d[_0x34b557(0x1dc)+_0x34b557(0x305)]=-0xaf3+0x7*0x55e+-0x1a99;continue;case'5':_0x45db91[_0x34b557(0x403)+'o'](_0x374698,_0x128749['FOrJu'](_0x52838a+_0x1fe870,_0x45cbd4));continue;case'6':_0x1bb9d2[_0x34b557(0x403)+'o'](_0x374698+_0x1fe870+_0x45cbd4,_0x52838a);continue;case'7':var _0x374698=_0x128749[_0x34b557(0x5bd)](_0x109ff5['width'],-0x5e7*-0x4+0x1fce+-0x3768),_0x52838a=_0x4085d6[_0x34b557(0x3d0)+'t']/(-0x1fa6+-0x4b8+0x6*0x610);continue;case'8':_0x1a67b2[_0x34b557(0x1f6)+'Path']();continue;case'9':_0x15385c[_0x34b557(0x58a)+'re']();continue;case'10':_0xc7067e[_0x34b557(0x2f0)+'o'](_0x374698,_0x128749['FOrJu'](_0x52838a,_0x1fe870));continue;case'11':_0x1e2dcf[_0x34b557(0x403)+'o'](_0x128749['rHqCf'](_0x374698,_0x1fe870),_0x52838a);continue;case'12':_0x5acf16[_0x34b557(0xc4)]();continue;case'13':var _0x237449=/^#[0-9a-f]{6}$/i[_0x34b557(0x263)](_0x1b46e7[_0x34b557(0x1f9)+'or'])?_0x4ebbb0['chCol'+'or']:_0x34b557(0x104)+'9d';continue;case'14':_0x57ff0e['moveT'+'o'](_0x128749[_0x34b557(0x4ad)](_0x374698,_0x1fe870),_0x52838a);continue;case'15':_0x5aad1a['moveT'+'o'](_0x374698,_0x52838a-_0x1fe870-_0x45cbd4);continue;case'16':var _0x1fe870=_0x128749[_0x34b557(0x38d)](0x25e5+-0x148*0x1d+0xb7*-0x1,_0x4d6387),_0x45cbd4=_0x128749[_0x34b557(0x38d)](0x4a*-0x3b+-0x281*-0xf+-0x1479,_0x4d6387);continue;case'17':_0x4e2242[_0x34b557(0x403)+'o'](_0x374698,_0x128749[_0x34b557(0x580)](_0x52838a,_0x1fe870));continue;case'18':var _0x4d6387=_0x47353c(_0x51b349['chSiz'+'e'])||0x2190+-0x15c1+-0xbce;continue;case'19':_0x57d83b[_0x34b557(0x5ae)+_0x34b557(0x644)]=_0x33d332[_0x34b557(0x341)](-0x1280+-0x49*-0xb+0x7*0x232+0.5,_0x128749[_0x34b557(0x469)](-0x17*-0x1a7+0x1395+-0x3994,_0x4d6387));continue;case'20':_0x3adffe[_0x34b557(0x32d)+_0x34b557(0x110)+'e']=_0x237449;continue;case'21':_0x17000d[_0x34b557(0x2f0)+'o'](_0x374698-_0x1fe870-_0x45cbd4,_0x52838a);continue;case'22':_0x39285f[_0x34b557(0x32d)+'e']();continue;case'23':_0x13c482[_0x34b557(0x343)](_0x374698,_0x52838a,(0x10b*0x11+0x13e3+-0x259d+0.6000000000000001)*_0x4d6387,0x1ae*0x3+0x26f3+0x2bfd*-0x1,_0x4c382b['PI']*(-0x422*0x7+-0x2c5+-0x1fb5*-0x1));continue;}break;}}else _0x4ec66b['enabl'+'ed']=!!_0x1e4d97;}catch(_0x48ae72){}}}setInterval(()=>{var _0x264f50=_0x1256f8,_0x38eda2={'RiYFZ':_0x264f50(0x2c3)+'ers','lPyoq':_0x292e55['wSlgZ'],'fdQOv':function(_0x3a8e2c,_0x3b39f4){return _0x3a8e2c+_0x3b39f4;},'bXMVO':function(_0x354662,_0x19985b){return _0x354662/_0x19985b;},'uPPFI':function(_0xecb2d3,_0x57ede9){var _0x569988=_0x264f50;return _0x292e55[_0x569988(0x160)](_0xecb2d3,_0x57ede9);},'gZbzk':'12|10'+'|5|4|'+_0x264f50(0x152)+_0x264f50(0x2fb)+'|9|13'+_0x264f50(0x532)+'16|7|'+_0x264f50(0x607)+_0x264f50(0x1a2),'RfLmF':'span','Wcknh':_0x264f50(0x1af)+'l','oHFzL':'sk-ra'+_0x264f50(0x2fe),'VRfcW':_0x264f50(0x3aa)};if(!_0x3bba9c||!window['unity'+_0x264f50(0x50a)+'nce'])return;var _0x26a73f=_0x292e55['mVYUw'](_0x292e55[_0x264f50(0x5a6)](Number,_0x571bcc['speed'+_0x264f50(0x153)])||-0x173f+-0x3*-0x60e+0x579,-0x1*0x23+-0x101e+0x10a5),_0x281be0=(_0x292e55['opiXU'](Number,_0x571bcc['jumpP'+'ct'])||-0x1a25+0x2aa*0xd+-0x819)/(0x8*0xda+-0x2449+0x1ddd),_0x368866=_0x292e55['yewGL'](_0x292e55[_0x264f50(0x59d)](Number,_0x571bcc[_0x264f50(0x591)+_0x264f50(0x164)])||0xb9*0x19+-0x2376+0x11c9,0x2c5*-0x3+0x53b*0x1+0x378),_0x5951c6=Math[_0x264f50(0x341)](-0x1027*-0x1+0x5e*-0x1c+0x2*-0x2ef,Number(_0x571bcc[_0x264f50(0x5ee)+_0x264f50(0x2cb)+'e'])||0x5e2+-0x1777*-0x1+-0x1cc3),_0xed0ae1=_0x292e55['jAanj'](_0x26a73f,-0x1*-0x227f+-0x5*0x39d+-0x106d)||_0x281be0!==-0xa71+0x635+0x7*0x9b||_0x292e55[_0x264f50(0x42c)](_0x368866,0x1*-0x2461+-0x4a0+0x2902)||_0x571bcc[_0x264f50(0x11f)],_0x101574=_0x571bcc[_0x264f50(0xfc)+'ead']||_0x571bcc[_0x264f50(0x5ee)+_0x264f50(0x21b)]||_0x571bcc['infAm'+_0x264f50(0x5cc)]||_0x571bcc[_0x264f50(0x352)+'Exp'];if(_0x292e55[_0x264f50(0x3a0)](!_0xed0ae1,!_0x101574))return;try{for(var _0x4ea46e=0x1cd7+0x32c+-0x37*0x95;_0x292e55[_0x264f50(0x3ae)](_0x4ea46e,_0x1afd5e['lengt'+'h']);_0x4ea46e++){if(_0x292e55[_0x264f50(0x347)](_0x292e55['qbRvP'],_0x264f50(0x575))){var _0x1188f9=_0x1afd5e[_0x4ea46e];if(!_0x1188f9)continue;if(_0x26a73f!==-0x1ef5+-0xd87+0x2c7d){var _0xd72b01=('4|1|5'+'|3|2|'+'0')[_0x264f50(0x24d)]('|'),_0x1edb3a=0x1799*0x1+0x163*-0x2+-0x14d3;while(!![]){switch(_0xd72b01[_0x1edb3a++]){case'0':_0x1f9d9e(_0x1188f9,-0x37*-0x67+0x26d5*0x1+-0x1e6b*0x2,'f32',_0x26a73f);continue;case'1':_0x292e55[_0x264f50(0x59e)](_0x1f9d9e,_0x1188f9,-0x1526+-0x1541*-0x1+0x1*0x11,_0x292e55[_0x264f50(0x465)],_0x26a73f);continue;case'2':_0x1f9d9e(_0x1188f9,0x9a*-0x16+0x11ec+-0x4*0x125,_0x292e55[_0x264f50(0x465)],_0x26a73f);continue;case'3':_0x292e55['VjhDc'](_0x1f9d9e,_0x1188f9,0x270f+0x2dd*-0x5+-0x188a,_0x264f50(0x38a),_0x26a73f);continue;case'4':_0x292e55[_0x264f50(0x59e)](_0x1f9d9e,_0x1188f9,-0x2*-0x871+0x506*-0x2+0x9*-0xbe,'f32',_0x26a73f);continue;case'5':_0x1f9d9e(_0x1188f9,-0x23c7+0x3*0x6c2+0xfb1,_0x264f50(0x38a),_0x26a73f);continue;}break;}}if(_0x281be0!==0x1e60+-0x444*0x5+-0x90b)_0x1f9d9e(_0x1188f9,-0x64b*0x1+-0x2589*0x1+0x2c24,_0x292e55['dUked'],_0x281be0);if(_0x292e55['jGTkw'](_0x368866,-0x1b58+-0x1ca*0x7+-0xad*-0x3b)){if(_0x292e55[_0x264f50(0x347)]('FjpKv',_0x292e55[_0x264f50(0x4c9)]))_0x292e55[_0x264f50(0x411)](_0x1f9d9e,_0x1188f9,0x241b+-0xe27*-0x1+-0x31fa,_0x292e55['dUked'],_0x368866),_0x1f9d9e(_0x1188f9,0x528+0x11c9+-0xb*0x20f,_0x292e55['dUked'],_0x368866);else{var _0x1a7638={'NuqZT':_0x292e55[_0x264f50(0x4d4)]};if(_0x33d7bd[_0x264f50(0x159)+'WebMo'+_0x264f50(0x503)]&&!_0xab0fbf[_0x264f50(0x284)+'ode']){_0x4dcb79=_0x37f8ff[_0x264f50(0x159)+'WebMo'+_0x264f50(0x503)][_0x264f50(0x578)+'Wrapp'+'er'],_0xd00064=_0x417c78[_0x264f50(0x159)+_0x264f50(0x101)+_0x264f50(0x503)][_0x264f50(0xd7)+'me'][_0x264f50(0x3ea)+_0x264f50(0x11d)+'in']({'name':_0x264f50(0x588)+_0x264f50(0x10f),'version':'1.1.0','referencedAssemblies':['Assem'+'bly-C'+_0x264f50(0x55d)+_0x264f50(0x5d2)]});if(_0x25462a[_0x264f50(0x4a1)+'od'])_0x292e55[_0x264f50(0x333)](_0x586e78,_0x264f50(0x479),_0x292e55[_0x264f50(0x13f)],_0x264f50(0x52d)+'ateTa'+_0x264f50(0x1be)+_0x264f50(0x237),[_0x292e55[_0x264f50(0x8a)],'i32'],_0x170cca,_0x5e9bef,!!_0x2ae915['god']);if(_0x196933['hookG'+_0x264f50(0x60e)])_0x3aadb6(_0x292e55[_0x264f50(0x5f2)],_0x292e55[_0x264f50(0x13f)],'Local'+_0x264f50(0x261),[_0x292e55['BiDHG'],_0x292e55[_0x264f50(0x8a)],_0x292e55['BiDHG'],_0x292e55[_0x264f50(0x8a)],_0x292e55[_0x264f50(0x8a)]],_0x52ac3a,_0x32525e,!!_0x2cface[_0x264f50(0x479)]);if(_0x1e226d[_0x264f50(0x33d)+'oReco'+'il'])_0x292e55[_0x264f50(0x599)](_0x469681,_0x292e55['ERagW'],'Legio'+_0x264f50(0x505)+'forms'+_0x264f50(0xad)+'tide.'+_0x264f50(0x51c)+_0x264f50(0x8b)+'on','Tick',[_0x264f50(0xd9)],_0x7dbb33,_0x4de4f1,!!_0x5dbeba[_0x264f50(0xe8)+_0x264f50(0x1d0)]);if(_0x42bf1b['hookC'+_0x264f50(0x272)+'e'])_0x3d111a('capSh'+_0x264f50(0x1d5),_0x264f50(0x42d)+_0x264f50(0x4e5),_0x292e55[_0x264f50(0x2c2)],[_0x292e55[_0x264f50(0x8a)],_0x264f50(0xd9)],_0x54e959,(_0x4cde8f,_0x46d2e7)=>{_0x161fbb(_0x3c1587,_0x46d2e7,_0x34864c,_0x38eda2['RiYFZ']);},!![]);if(_0x5a8f71['hookC'+'aptur'+'e'])_0x335967('capMo'+'ve','Legio'+'nPlat'+_0x264f50(0x402)+_0x264f50(0xad)+'tide.'+_0x264f50(0x4d9)+_0x264f50(0x129),_0x292e55[_0x264f50(0x2c7)],['i32'],'i32',(_0x2144fc,_0x2f1233)=>{var _0x2c52cf=_0x264f50;_0x2ee8de(_0x367beb,_0x2f1233,_0x55c4e3,_0x1a7638[_0x2c52cf(0x460)]);},!![]);}}}if(_0x571bcc[_0x264f50(0x11f)])_0x233b12(_0x1188f9,0x40+0x2*-0x5e7+0x1*0xc2a,_0x292e55[_0x264f50(0x465)],-(0x559*-0x2+-0x4fd*0x1+0x1396));}else _0x222b74[_0x264f50(0x28d)+_0x264f50(0xfb)]=_0x39851d,_0x292e55['IIMJO'](_0x5cd9ba);}}catch(_0x338ce5){}try{for(var _0xabd9f9=-0x61*-0x5f+0xb*0x284+-0x713*0x9;_0xabd9f9<_0x431a67[_0x264f50(0x4ea)+'h'];_0xabd9f9++){var _0x50489b=_0x415cf6(_0x431a67[_0xabd9f9],0x48*0x44+-0x1471+0x189);if(!_0x50489b)continue;if(_0x571bcc['damag'+'eExp']){if(_0x292e55[_0x264f50(0x4e1)]!==_0x292e55[_0x264f50(0x56a)])_0x233b12(_0x50489b,0x1274+0xdb5+0x1fdd*-0x1,_0x264f50(0xd9),_0x5951c6),_0x233b12(_0x50489b,-0x2*0xae4+0x1437+0x1e5,_0x292e55[_0x264f50(0x8a)],_0x5951c6);else{var _0x219a25=_0x38eda2[_0x264f50(0x193)]['split']('|'),_0x38a546=0x261d*-0x1+-0x8*-0x82+-0x17b*-0x17;while(!![]){switch(_0x219a25[_0x38a546++]){case'0':_0x225ccc['appen'+'d'](_0x2cf732,_0xb01a28);continue;case'1':var _0xb01a28=_0x19c45d[_0x264f50(0x3ea)+_0x264f50(0x2e9)+'ent'](_0x38eda2[_0x264f50(0x216)]);continue;case'2':_0x2cf732[_0x264f50(0x559)+'ut']=()=>{var _0x17bc5b=_0x264f50;_0x10e2b7(),_0x13d8ce[_0x17bc5b(0x100)](_0x2540cd,_0x13d8ce['CYpxS'](_0x3cee17,_0x2cf732[_0x17bc5b(0x1ae)]));};continue;case'3':_0xb01a28['class'+'Name']=_0x38eda2[_0x264f50(0x4fe)];continue;case'4':var _0x2cf732=_0x183741[_0x264f50(0x3ea)+'eElem'+_0x264f50(0x129)](_0x264f50(0x387));continue;case'5':_0x225ccc['class'+_0x264f50(0x5f6)]=_0x38eda2[_0x264f50(0x36c)];continue;case'6':_0x2cf732['max']=_0x19eaa5;continue;case'7':var _0x10e2b7=()=>{var _0x3b3ea8=_0x264f50;_0xb01a28[_0x3b3ea8(0x592)+'onten'+'t']=_0x5a3c6e(_0x2cf732['value']),_0x225ccc['style']['setPr'+_0x3b3ea8(0x397)+'y'](_0x38eda2[_0x3b3ea8(0x54b)],_0x38eda2[_0x3b3ea8(0x619)](_0x38eda2[_0x3b3ea8(0x14b)](_0x2cf732[_0x3b3ea8(0x1ae)]-_0x31ffb1,_0x38eda2[_0x3b3ea8(0x248)](_0x460c9a,_0x4f403f))*(-0xc70+0x1*0xc0a+0x2*0x65),'%'));};continue;case'8':return _0x225ccc;case'9':_0x2cf732['step']=_0x3bfa07;continue;case'10':var _0x225ccc=_0x3e48c3[_0x264f50(0x3ea)+_0x264f50(0x2e9)+'ent'](_0x264f50(0x63f));continue;case'11':_0x2cf732['type']=_0x38eda2[_0x264f50(0xe4)];continue;case'12':var _0x13d8ce={'UzsoF':function(_0x1069a5,_0x95bac9){return _0x1069a5(_0x95bac9);},'CYpxS':function(_0x19b9f6,_0xc1bd83){return _0x19b9f6(_0xc1bd83);}};continue;case'13':_0x2cf732[_0x264f50(0x1ae)]=_0x336ef4;continue;case'14':_0x10e2b7();continue;case'15':_0x2cf732[_0x264f50(0x12d)]=_0x464a42;continue;case'16':_0xb01a28[_0x264f50(0x592)+'onten'+'t']=_0x4c62da(_0x30e7c4);continue;case'17':_0x2cf732[_0x264f50(0x47d)+'Name']=_0x264f50(0xac)+'ider';continue;}break;}}}_0x571bcc['noSpr'+_0x264f50(0x149)]&&('oqNGx'===_0x264f50(0x2e8)?(_0x583b71[_0x264f50(0x498)]=_0x5d417e,_0x1c5dc6()):(_0x233b12(_0x50489b,0xa7*-0x21+0x1326+0x2e9,_0x264f50(0x38a),0x1850+-0x24ab+-0x1*-0xc5b),_0x233b12(_0x50489b,0x1ab8+0x79c*-0x2+-0xb18,_0x292e55['dUked'],-0x65*-0x33+0x2*0x1183+0x1b92*-0x2)));if(_0x571bcc[_0x264f50(0x510)+_0x264f50(0x5cc)])_0x292e55['KNfcI'](_0x233b12,_0x50489b,0x7*0x4bc+-0x29*-0xaf+0x3*-0x1445,'i32',-0x6*0x3f1+0x14*0xed+0x909*0x1);_0x571bcc['rapid'+_0x264f50(0x4af)]&&(_0x292e55['KmkYQ'](_0x1f9d9e,_0x50489b,0xf*-0x10b+-0x36d*0x2+0x170b,_0x264f50(0x38a),-0x21e4+-0x1df8+0x3fdc+0.1),_0x233b12(_0x50489b,-0x3e6+0x1*-0x200b+0x2451,'f32',0x2f1+-0x3*-0x3f3+-0xeca+0.1));}}catch(_0x4856d5){}},0x1e3f*-0x1+0xc*0x188+-0x29*-0x4f),_0x292e55[_0x1256f8(0x55c)](setInterval,()=>{var _0x1f6af9=_0x1256f8;_0x4c7631[_0x1f6af9(0x3eb)+_0x1f6af9(0x4be)]=!!window[_0x1f6af9(0x56f)+'Insta'+_0x1f6af9(0x260)];try{var _0x15b186=0x12ca+0x21e0+-0x34aa*0x1;for(var _0x523a4d in _0xc2f259){if(_0xc2f259[_0x523a4d]&&_0xc2f259[_0x523a4d][_0x1f6af9(0x51d)+'ed'])_0x15b186++;}_0x4c7631[_0x1f6af9(0x50f)+'Ok']=_0x15b186;}catch(_0x59be15){}},-0x239d+-0x1574+0x21*0x1d9);var _0x6e6234=new Set(),_0x21b589={0x1:[],0x3:[]},_0x23c776=![];function _0x899134(_0x1698a9){var _0x172859=_0x1256f8;_0x6e6234['add'](_0x1698a9[_0x172859(0x36d)]);}function _0x571465(_0x4c592d){var _0x578384=_0x1256f8;_0x6e6234[_0x578384(0x15a)+'e'](_0x4c592d[_0x578384(0x36d)]);}function _0x5a39ad(_0x3433c8){var _0x5a3c2a=_0x1256f8,_0x35170a={'Ztfet':_0x5a3c2a(0x1a6)+'ra-ko'+_0x5a3c2a(0x525)+'WMK\x20i'+'nit\x20f'+_0x5a3c2a(0x631)+':'};if(_0x292e55[_0x5a3c2a(0x1ff)](_0x5a3c2a(0x157),_0x5a3c2a(0x157)))_0x5ef8ab['warn'](_0x35170a[_0x5a3c2a(0x3e1)],_0x1768b4&&_0x4500b5[_0x5a3c2a(0x1b9)+'ge']);else{if(_0x3433c8['__sak'+'ura'])return;_0x6e6234[_0x5a3c2a(0x192)]('mouse'+_0x292e55[_0x5a3c2a(0x1c5)](_0x3433c8[_0x5a3c2a(0x4aa)+'n'],-0x51*0x1+0xb*-0x271+0x1b2d));var _0x20771f=_0x21b589[_0x292e55[_0x5a3c2a(0x19d)](_0x3433c8['butto'+'n'],-0x64c+0x4*0x9b7+-0x208f)];if(_0x20771f){_0x20771f[_0x5a3c2a(0xb1)](performance[_0x5a3c2a(0x624)]());if(_0x292e55[_0x5a3c2a(0x1c8)](_0x20771f[_0x5a3c2a(0x4ea)+'h'],0x6b8+-0x23a3+0x1d13))_0x20771f[_0x5a3c2a(0xec)]();}}}function _0x50b3e1(_0x4b5f7b){var _0xc08f9f=_0x1256f8;if(_0xc08f9f(0x143)!==_0x292e55['mEvPz'])try{_0x21b74c['setIt'+'em'](_0xc08f9f(0x409)+_0xc08f9f(0x39b)+_0xc08f9f(0x2a2),_0x414555['strin'+_0xc08f9f(0xd3)](_0x426c85));}catch(_0x1c50f9){}else{if(!_0x4b5f7b[_0xc08f9f(0x16f)+'ura'])_0x6e6234['delet'+'e'](_0x292e55[_0xc08f9f(0x392)]+(_0x4b5f7b[_0xc08f9f(0x4aa)+'n']+(0x2051*-0x1+-0x1b3e+0x3b90)));}}function _0x22630d(){var _0x4fe1bf=_0x1256f8;_0x4fe1bf(0xbf)!=='DgPPZ'?_0x6e6234['clear']():(_0x21445b[_0x4fe1bf(0x478)+_0x4fe1bf(0x153)]=_0x50dec1,_0x2bb971());}function _0x346694(){var _0x379f52=_0x1256f8;if(_0x23c776)return;_0x23c776=!![],window[_0x379f52(0x25f)+_0x379f52(0x4e6)+_0x379f52(0x2b1)+'r'](_0x292e55['qUeDC'],_0x899134,!![]),window['addEv'+_0x379f52(0x4e6)+_0x379f52(0x2b1)+'r'](_0x292e55[_0x379f52(0xa5)],_0x571465,!![]),window[_0x379f52(0x25f)+'entLi'+_0x379f52(0x2b1)+'r'](_0x292e55['pyAVt'],_0x5a39ad,!![]),window['addEv'+_0x379f52(0x4e6)+_0x379f52(0x2b1)+'r'](_0x292e55[_0x379f52(0x3be)],_0x50b3e1,!![]),window[_0x379f52(0x25f)+_0x379f52(0x4e6)+_0x379f52(0x2b1)+'r'](_0x292e55['ndJqj'],_0x22630d);}function _0x580ae7(_0x550477){var _0x33576a=_0x1256f8,_0xd72998=_0x21b589[_0x550477]||[],_0x2e75f1=performance['now']();while(_0xd72998[_0x33576a(0x4ea)+'h']&&_0x2e75f1-_0xd72998[0x49*0x46+0x1e3f+-0x3235]>-0x22b4+0x88d+0x3*0xa05)_0xd72998['shift']();return _0xd72998['lengt'+'h'];}function _0x4a8664(_0x54bdb1){var _0x77a510=_0x1256f8;if(document['body']&&(document[_0x77a510(0xe7)+_0x77a510(0x209)]===_0x77a510(0x38e)+_0x77a510(0x367)+'e'||_0x292e55[_0x77a510(0x423)](document[_0x77a510(0xe7)+_0x77a510(0x209)],_0x292e55['XPrza'])))_0x54bdb1();else document[_0x77a510(0x25f)+_0x77a510(0x4e6)+_0x77a510(0x2b1)+'r'](_0x77a510(0x5b3)+'ntent'+_0x77a510(0x4f2)+'d',_0x54bdb1,{'once':!![]});}_0x292e55['tXofK'](_0x4a8664,()=>{var _0x560a0c=_0x1256f8,_0xce47ea={'Nygps':function(_0x4dc4cb){return _0x4dc4cb();},'YUrnH':_0x560a0c(0x236)+_0x560a0c(0x181)+_0x560a0c(0x219)+'-pare'+'nt','MMvcb':_0x560a0c(0x236)+'io_72'+'8x90-'+_0x560a0c(0x51f)+'t','JCxTu':_0x292e55[_0x560a0c(0x199)],'yqKNm':_0x560a0c(0x424)+'creen'+'-banr'+'s','GlihP':function(_0x5776cb,_0x48687c){return _0x5776cb===_0x48687c;},'BcgvC':_0x560a0c(0x570),'qxPyJ':function(_0x23962a,_0x4b5aef){var _0x2ce298=_0x560a0c;return _0x292e55[_0x2ce298(0x3ae)](_0x23962a,_0x4b5aef);},'aAjLz':function(_0x253ffb,_0x4c1e21){var _0x499e27=_0x560a0c;return _0x292e55[_0x499e27(0x61e)](_0x253ffb,_0x4c1e21);},'pjWUv':'rgba('+_0x560a0c(0x20c)+_0x560a0c(0x1c4)+_0x560a0c(0x46b)+'5)','TIRRR':_0x292e55[_0x560a0c(0x5b4)],'ESLqP':'rgba('+'255,1'+_0x560a0c(0x1c4)+_0x560a0c(0x44f)+'5)','OunjA':_0x292e55['GlFHl'],'UOLDS':_0x292e55[_0x560a0c(0x165)],'vcJfe':function(_0x1114a6,_0x40b18e){return _0x1114a6+_0x40b18e;},'JPcFX':function(_0x2e9cfd,_0x246e94){return _0x2e9cfd/_0x246e94;},'YxaBQ':function(_0x28279a,_0x4aac87){return _0x28279a*_0x4aac87;},'YkMVy':function(_0x2a2f66,_0xe17b29){var _0x651acf=_0x560a0c;return _0x292e55[_0x651acf(0x3e8)](_0x2a2f66,_0xe17b29);},'eClEo':function(_0x115d19,_0x2bee81){return _0x292e55['bUnBC'](_0x115d19,_0x2bee81);},'jfuYn':_0x292e55[_0x560a0c(0x204)],'jKYxi':function(_0x2e5521,_0x404d3d){return _0x2e5521(_0x404d3d);},'HxtIs':function(_0x3f3f33,_0x24404c){return _0x292e55['btKaR'](_0x3f3f33,_0x24404c);},'wGMYN':'zRant','vdzav':function(_0x4cb7a0,_0xd11217){return _0x292e55['nSNoR'](_0x4cb7a0,_0xd11217);},'eHnDU':function(_0x1d5850,_0x570384){return _0x1d5850*_0x570384;},'YLfxs':function(_0x330a7e,_0x37a519){return _0x330a7e*_0x37a519;},'SMUet':function(_0x3b5068,_0x3e3d8b){return _0x292e55['ScgXQ'](_0x3b5068,_0x3e3d8b);},'qJiMa':function(_0x46ebaa,_0x2f2e31){var _0x177759=_0x560a0c;return _0x292e55[_0x177759(0x496)](_0x46ebaa,_0x2f2e31);},'NQPBI':function(_0x50ca9a,_0x509738){return _0x50ca9a/_0x509738;},'TiFKQ':_0x292e55[_0x560a0c(0x531)],'YcwoW':function(_0xb1f102,_0x3de42b){return _0x292e55['vaPRU'](_0xb1f102,_0x3de42b);},'qjFDa':function(_0x5586bc,_0x3682d4){return _0x5586bc+_0x3682d4;},'PLYzz':function(_0x4e965a,_0x4ed503){return _0x4e965a/_0x4ed503;},'eiJIw':function(_0x540b87,_0x18efc3){return _0x540b87+_0x18efc3;},'CeSvS':function(_0xbde56d,_0x12d49c,_0x1f6549,_0x3b8583,_0x2edb97,_0x1bafca,_0x1f1408,_0x4e6714){return _0x292e55['qxCFL'](_0xbde56d,_0x12d49c,_0x1f6549,_0x3b8583,_0x2edb97,_0x1bafca,_0x1f1408,_0x4e6714);},'mpoIi':_0x292e55[_0x560a0c(0xe2)],'SrJYA':_0x560a0c(0x20d),'nlcxD':function(_0xb71eab,_0x2c486b){return _0x292e55['zpUeI'](_0xb71eab,_0x2c486b);},'TURtZ':function(_0x806143,_0x1cc6c9){var _0x2c163f=_0x560a0c;return _0x292e55[_0x2c163f(0x61e)](_0x806143,_0x1cc6c9);},'AEVJs':_0x292e55['alAHT'],'qiBYt':function(_0x52c7f8,_0x11d1d6){return _0x52c7f8(_0x11d1d6);},'sPISR':function(_0x1c2e37,_0x59d33c){return _0x1c2e37!==_0x59d33c;},'gRlhO':function(_0x51543c){var _0x3c1b42=_0x560a0c;return _0x292e55[_0x3c1b42(0x41c)](_0x51543c);},'ycPpm':function(_0x760ec3,_0x367b8c){return _0x760ec3(_0x367b8c);},'dtWzu':function(_0x307de4){return _0x307de4();},'aroHb':_0x560a0c(0x601)+_0x560a0c(0xae)+'ed','euhzP':_0x292e55[_0x560a0c(0x622)],'tidTJ':_0x560a0c(0x12e)+_0x560a0c(0x62a)+_0x560a0c(0x10b),'brBAS':_0x560a0c(0x24c),'giXse':'butto'+'n','kCvpz':function(_0x25b545,_0x6ba82){var _0x5b7259=_0x560a0c;return _0x292e55[_0x5b7259(0x490)](_0x25b545,_0x6ba82);},'nqyii':function(_0x4fbd79,_0x2a62fc){var _0x5b1e04=_0x560a0c;return _0x292e55[_0x5b1e04(0x496)](_0x4fbd79,_0x2a62fc);},'ohzgu':function(_0x18a8a9,_0x4122f7){return _0x18a8a9-_0x4122f7;},'jKFPa':function(_0x3aedd6,_0x448131){return _0x3aedd6(_0x448131);},'BToJt':function(_0x2a4184,_0x1e32d6){return _0x2a4184===_0x1e32d6;},'FNbBF':_0x292e55[_0x560a0c(0x388)],'SSgRg':_0x560a0c(0x2ee)+'nge','ZWuQD':_0x292e55['HlKHm'],'lfLWh':_0x560a0c(0x1af)+'l','IrZAr':function(_0x2d5421,_0x40c2cb){return _0x2d5421===_0x40c2cb;},'czLRH':_0x292e55[_0x560a0c(0x31f)],'yobRW':'JaIhA','iBrhF':_0x560a0c(0x104)+'9d','hzDtZ':_0x292e55[_0x560a0c(0x47c)],'ocRWV':function(_0x552c37,_0x37531b){return _0x292e55['JSDke'](_0x552c37,_0x37531b);},'VzNUJ':function(_0x225e4e,_0x2f3ffa){return _0x225e4e+_0x2f3ffa;},'GFAaZ':_0x292e55['GFdDw'],'zbovw':_0x560a0c(0x41e)+'ks\x20ar'+_0x560a0c(0x14a)+_0x560a0c(0x5bb)+_0x560a0c(0x47e),'zjJlO':_0x292e55[_0x560a0c(0x5e5)],'MuplU':_0x560a0c(0x17a)+'vemen'+'t\x20','LJzXX':function(_0x391157,_0x3f42c2,_0x127d4d,_0x5d2b2d){var _0x145852=_0x560a0c;return _0x292e55[_0x145852(0x585)](_0x391157,_0x3f42c2,_0x127d4d,_0x5d2b2d);},'ezMdz':_0x292e55['VYigp'],'yOWJT':_0x292e55[_0x560a0c(0x5bc)],'YEJUs':'godDi'+'e','tzwSa':_0x560a0c(0x2c3)+_0x560a0c(0x519),'ywXmY':'style','iEQdl':_0x560a0c(0x63a)+'ck','NkEOL':'Takes'+_0x560a0c(0x5f5)+_0x560a0c(0x1f1)+_0x560a0c(0x17f)+_0x560a0c(0x14c)+_0x560a0c(0xeb)+_0x560a0c(0x594)+'.','tTgCk':'activ'+'e','jkQTt':function(_0x16ffee,_0x1a64f2){return _0x16ffee<_0x1a64f2;},'vgJfw':_0x292e55['recWv'],'eVVtY':_0x292e55[_0x560a0c(0x27b)],'XCPvY':function(_0x42a361,_0xe08088){return _0x42a361+_0xe08088;},'qvaYs':function(_0x33d2a6,_0x4dce5d){return _0x292e55['zpUeI'](_0x33d2a6,_0x4dce5d);},'YLImz':function(_0x1eaf4c,_0x16488d){var _0x494c91=_0x560a0c;return _0x292e55[_0x494c91(0x9b)](_0x1eaf4c,_0x16488d);},'HlGsj':_0x292e55[_0x560a0c(0x46f)],'NDzNS':_0x292e55[_0x560a0c(0x4f6)],'HLwgE':_0x560a0c(0x168),'kBhzE':function(_0x28939f,_0xb6da14){var _0x4c42a5=_0x560a0c;return _0x292e55[_0x4c42a5(0x9b)](_0x28939f,_0xb6da14);},'BqRxG':'\x20|\x20ER'+_0x560a0c(0x593),'nFaYr':_0x560a0c(0x2f8)+'go','OuoaL':_0x292e55['XyLmr'],'VSKSU':_0x560a0c(0x321)+'r','GHsqO':_0x292e55[_0x560a0c(0x3b5)],'PHZJj':_0x292e55[_0x560a0c(0x646)],'cMJjg':_0x560a0c(0x1ab)+'tles','RMpTK':_0x560a0c(0x588)+'a\x20Kou'+'r','nHNQI':_0x560a0c(0x15d)+'trike'+'.io\x20m'+'enu','MqSZC':function(_0x346861,_0x5e85a3){var _0x37be0f=_0x560a0c;return _0x292e55[_0x37be0f(0x514)](_0x346861,_0x5e85a3);},'EHaVg':_0x292e55[_0x560a0c(0x59a)],'OmVvd':_0x560a0c(0x401)+'t','QAofR':function(_0x458269,_0x5dacfe,_0x44daa6){return _0x458269(_0x5dacfe,_0x44daa6);}};_0x571bcc[_0x560a0c(0x431)+'ck']&&_0x292e55[_0x560a0c(0x35a)](setInterval,()=>{var _0x344c71=_0x560a0c;try{for(var _0x106d95 of[_0xce47ea[_0x344c71(0x598)],_0xce47ea['MMvcb'],_0xce47ea[_0x344c71(0x394)],_0xce47ea['yqKNm']]){var _0x219f83=document[_0x344c71(0x312)+_0x344c71(0x43d)+_0x344c71(0x1c2)](_0x106d95);if(_0x219f83&&_0x106d95==='fulls'+_0x344c71(0x5de)+_0x344c71(0x400)+'s'){if(_0xce47ea[_0x344c71(0x11b)]('JzZVl',_0xce47ea['BcgvC']))_0x3ec56d['ksPos']=_0x1fbacf,_0xce47ea[_0x344c71(0x19f)](_0x23082b);else{var _0x1c72ee=_0x219f83['child'+_0x344c71(0x2ea)];for(var _0x3c1dd8=-0x21b2+-0x67c*0x1+0x282e;_0xce47ea['qxPyJ'](_0x3c1dd8,_0x1c72ee['lengt'+'h']);_0x3c1dd8++){if(_0x1c72ee[_0x3c1dd8]['id']&&_0x1c72ee[_0x3c1dd8]['id'][_0x344c71(0x2bf)+'Of'](_0x344c71(0x236)+'io_')===-0x129d+-0x25de+-0x1*-0x387b)_0x1c72ee[_0x3c1dd8][_0x344c71(0xe3)]['displ'+'ay']='none';}}}else{if(_0x219f83)_0x219f83[_0x344c71(0xe3)]['displ'+'ay']=_0x344c71(0x168);}}}catch(_0x585a56){}},0x266*-0x4+0x204f+-0xee7);var _0x3cc247=document['creat'+_0x560a0c(0x2e9)+_0x560a0c(0x129)](_0x560a0c(0x3a5)+'s');_0x3cc247[_0x560a0c(0xe3)][_0x560a0c(0x3af)+'xt']=_0x292e55[_0x560a0c(0x501)];var _0x24edd6=_0x3cc247['getCo'+_0x560a0c(0x395)]('2d');function _0x41a02f(){var _0x102c2a=_0x560a0c;try{var _0x6ebc6f=document[_0x102c2a(0x424)+'creen'+'Eleme'+'nt'],_0x1d4eeb=_0x6ebc6f&&_0x292e55[_0x102c2a(0x1ff)](_0x6ebc6f['tagNa'+'me'],_0x102c2a(0x3db)+'S')?_0x6ebc6f:document['body']||document[_0x102c2a(0xbb)+_0x102c2a(0x22a)+_0x102c2a(0x43d)];if(_0x3cc247['paren'+'tNode']!==_0x1d4eeb)_0x1d4eeb[_0x102c2a(0x179)+_0x102c2a(0x51e)+'d'](_0x3cc247);}catch(_0x3c84fa){try{document['body'][_0x102c2a(0x179)+_0x102c2a(0x51e)+'d'](_0x3cc247);}catch(_0x138fdc){}}}var _0x4dee63={'w':0x0,'h':0x0,'dpr':0x0};function _0x34c3b5(){var _0x52e922=_0x560a0c,_0x55866d=window['devic'+'ePixe'+'lRati'+'o']||0x1d8b+-0x140e+-0x97c,_0x1add8c=window[_0x52e922(0x16a)+_0x52e922(0x5b5)],_0x48fc3d=window[_0x52e922(0x16a)+_0x52e922(0x5b1)+'t'];if(_0x292e55[_0x52e922(0x197)](_0x1add8c,_0x4dee63['w'])&&_0x48fc3d===_0x4dee63['h']&&_0x55866d===_0x4dee63['dpr'])return;_0x4dee63['w']=_0x1add8c,_0x4dee63['h']=_0x48fc3d,_0x4dee63['dpr']=_0x55866d,_0x3cc247['width']=Math[_0x52e922(0x520)](_0x1add8c*_0x55866d),_0x3cc247[_0x52e922(0x3d0)+'t']=Math['round'](_0x48fc3d*_0x55866d),_0x24edd6[_0x52e922(0x5ec)+_0x52e922(0x2c1)+'rm'](_0x55866d,-0x1269+0x152f+0x8e*-0x5,0x1111*0x1+0x56*0x50+-0x2bf1,_0x55866d,0x21a3+0xb*0x332+-0x44c9,0x131d+0x1efb*0x1+-0x1c*0x1ca);}var _0x3e7eb8=0xfe2+-0x5ef+0x9f3*-0x1,_0x15c1b2=performance[_0x560a0c(0x624)](),_0x485a5c=-0x1eb*-0x10+-0x1*-0xecd+0x919*-0x5;function _0x5589c1(_0x3510a3){var _0x120afd=_0x560a0c;if(_0xce47ea[_0x120afd(0x558)](_0xce47ea[_0x120afd(0x3c2)],_0x120afd(0x18d))){var _0xc818eb=_0xce47ea[_0x120afd(0x45d)](Number,_0x571bcc['ksSca'+'le'])||0x10af*-0x2+-0x1edb*-0x1+0x284,_0x407d22=(0xfac+-0x25*0x4a+-0x4d8)*_0xc818eb,_0x4d0a42=_0xce47ea[_0x120afd(0x3fb)](0x692+0x25ed+0xc1*-0x3b,_0xc818eb),_0x182b06=_0xce47ea[_0x120afd(0x40a)](_0x407d22,0x18e8+0x2*-0xaef+-0x5*0x9b)+_0x4d0a42*(0x27f+0xcd3+-0xf5*0x10),_0xf2c46e=_0xce47ea[_0x120afd(0x4cd)](_0x407d22*(-0xda4+0x26a1+-0x18fa),_0xce47ea[_0x120afd(0xa0)](_0x4d0a42,-0xcce+0xd74+-0x52*0x2)),_0xca472b=_0x571bcc[_0x120afd(0x372)],_0x4819ff=_0xca472b==='br'?_0xce47ea[_0x120afd(0xa8)](_0x3510a3[_0x120afd(0x145)]-(-0x869*-0x2+0x3*-0x67+-0x52f*0x3),_0x182b06):_0x3510a3['left']+(0x4*-0x1bb+0x1e1*0xc+-0xf90),_0x46b79b=_0xca472b==='ml'?_0x3510a3[_0x120afd(0x620)]+_0xce47ea['NQPBI'](_0x3510a3[_0x120afd(0x3d0)+'t'],-0x6cf+-0xe43+-0x1*-0x1514)-_0xf2c46e/(-0xef*0x17+0x21fb*-0x1+0x3776):_0xce47ea['qJiMa'](_0x3510a3['botto'+'m'],_0xf2c46e)-(_0xca472b==='bl'?0xa95+-0x8b*-0xa+0xfa3*-0x1:-0x1f5*-0xb+0xf78*0x2+0x13*-0x2bb),_0x296890=(_0x4e2395,_0x4c572b,_0x196944,_0x11bea9,_0x3e802e,_0x4f7be8,_0xd0ee0b)=>{var _0x48588e=_0x120afd,_0x1d8bbe=_0x6e6234[_0x48588e(0x264)](_0x4c572b);_0x24edd6['save'](),_0x24edd6[_0x48588e(0x1f6)+_0x48588e(0x57a)]();if(_0x24edd6['round'+_0x48588e(0x3cd)])_0x24edd6[_0x48588e(0x520)+'Rect'](_0x196944,_0x11bea9,_0x3e802e,_0x4f7be8,_0xce47ea[_0x48588e(0x12c)](0x2617+0x8*0x33a+-0x3fe0,_0xc818eb));else _0x24edd6['rect'](_0x196944,_0x11bea9,_0x3e802e,_0x4f7be8);_0x24edd6['fillS'+_0x48588e(0x4f8)]=_0x1d8bbe?_0xce47ea[_0x48588e(0x147)]:_0xce47ea[_0x48588e(0x564)],_0x24edd6[_0x48588e(0x56b)](),_0x24edd6['lineW'+'idth']=-0x329*0x2+0x145c+0xe09*-0x1,_0x24edd6['strok'+_0x48588e(0x110)+'e']=_0x1d8bbe?_0x5a3568:_0xce47ea['ESLqP'],_0x24edd6[_0x48588e(0x32d)+'e'](),_0x1d8bbe&&(_0x24edd6[_0x48588e(0x1dc)+_0x48588e(0x2cf)+'r']=_0x351d33,_0x24edd6[_0x48588e(0x1dc)+_0x48588e(0x305)]=0x1*-0x1193+0x2550+0x1*-0x13af,_0x24edd6[_0x48588e(0x56b)](),_0x24edd6[_0x48588e(0x1dc)+'wBlur']=0x1*-0xbe9+-0x69a*0x1+0x1*0x1283),_0x24edd6['fillS'+_0x48588e(0x4f8)]=_0x1d8bbe?_0xce47ea[_0x48588e(0x43e)]:_0x48588e(0x5c6)+'255,2'+_0x48588e(0x48d)+'0,0.8'+')',_0x24edd6[_0x48588e(0x282)+'lign']=_0xce47ea[_0x48588e(0x567)],_0x24edd6[_0x48588e(0x37d)+'aseli'+'ne']='middl'+'e',_0x24edd6['font']=_0xce47ea[_0x48588e(0x2db)](_0x48588e(0x39c)+Math['round']((-0x25a5+0x11*-0xbd+-0x323e*-0x1)*_0xc818eb),_0x48588e(0x31e)+'-sans'+'-seri'+_0x48588e(0x3d7)+'tem-u'+'i,san'+_0x48588e(0x2d3)+'if'),_0x24edd6[_0x48588e(0x296)+'ext'](_0x4e2395,_0xce47ea['vcJfe'](_0x196944,_0xce47ea[_0x48588e(0x1e1)](_0x3e802e,0x25e8+0x896+0xaf*-0x44)),_0x11bea9+_0x4f7be8/(0x1*-0xa39+0x330+0x1*0x70b)-(_0xd0ee0b?_0xce47ea[_0x48588e(0xa0)](0x13d7+-0x593*-0x5+-0x1a5*0x1d,_0xc818eb):0x1c93+-0x1bb9+-0xda)),_0xd0ee0b&&(_0x24edd6[_0x48588e(0x16d)]=_0xce47ea[_0x48588e(0x2ff)](_0x48588e(0x2b6),Math['round'](_0xce47ea[_0x48588e(0xa0)](0xe38+0x21aa+-0xff3*0x3,_0xc818eb)))+(_0x48588e(0x31e)+'-sans'+_0x48588e(0x626)+_0x48588e(0x3d7)+_0x48588e(0x280)+_0x48588e(0x412)+_0x48588e(0x2d3)+'if'),_0x24edd6[_0x48588e(0x242)+_0x48588e(0x4f8)]=_0x1d8bbe?_0xce47ea[_0x48588e(0x43e)]:_0x48588e(0x5c6)+'255,2'+_0x48588e(0x48d)+_0x48588e(0x27a)+'5)',_0x24edd6['fillT'+'ext'](_0xd0ee0b,_0x196944+_0xce47ea['JPcFX'](_0x3e802e,-0xd4+0x1d3f+-0x1*0x1c69),_0x11bea9+_0x4f7be8/(-0x1*0x262+-0x2492+0x26f6)+_0xce47ea['eClEo'](-0x38*-0x8d+0x1*-0x1fa5+0xd5,_0xc818eb))),_0x24edd6[_0x48588e(0x58a)+'re']();};_0x296890('W',_0x120afd(0x63b),_0x4819ff+_0x407d22+_0x4d0a42,_0x46b79b,_0x407d22,_0x407d22),_0x296890('A',_0xce47ea['TiFKQ'],_0x4819ff,_0xce47ea['YcwoW'](_0x46b79b,_0x407d22)+_0x4d0a42,_0x407d22,_0x407d22),_0x296890('S','KeyS',_0xce47ea['vcJfe'](_0x4819ff+_0x407d22,_0x4d0a42),_0xce47ea[_0x120afd(0x316)](_0x46b79b,_0x407d22)+_0x4d0a42,_0x407d22,_0x407d22),_0x296890('D',_0x120afd(0x166),_0x4819ff+_0xce47ea['YxaBQ'](_0xce47ea[_0x120afd(0x21e)](_0x407d22,_0x4d0a42),0x9b0+-0x245a+-0x472*-0x6),_0xce47ea['qjFDa'](_0x46b79b,_0x407d22)+_0x4d0a42,_0x407d22,_0x407d22);var _0x4125ee=_0xce47ea['PLYzz'](_0xce47ea['qJiMa'](_0x182b06,_0x4d0a42),0x1013+0x2236+-0x3247),_0x113f28=_0x46b79b+_0xce47ea[_0x120afd(0x109)](_0x407d22,_0x4d0a42)*(-0x3*0x7c3+0x1bc1+-0x476);_0xce47ea['CeSvS'](_0x296890,_0x120afd(0x54c),_0x120afd(0x406)+'1',_0x4819ff,_0x113f28,_0x4125ee,_0x407d22,_0x571bcc[_0x120afd(0x4fa)]?_0x580ae7(0x138+-0x136d+-0x12*-0x103)+_0xce47ea['mpoIi']:''),_0xce47ea[_0x120afd(0x5e9)](_0x296890,_0xce47ea['SrJYA'],_0x120afd(0x406)+'3',_0xce47ea['SMUet'](_0xce47ea['YcwoW'](_0x4819ff,_0x4125ee),_0x4d0a42),_0x113f28,_0x4125ee,_0x407d22,_0x571bcc[_0x120afd(0x4fa)]?_0x580ae7(0x1987*0x1+-0x1c6*-0x2+-0x1d10)+_0xce47ea[_0x120afd(0x5e4)]:''),_0x296890('','Space',_0x4819ff,_0x113f28+_0x407d22+_0x4d0a42,_0x182b06,_0xce47ea['aAjLz'](_0x407d22,0xab1+0x16*-0x35+-0x623+0.45));}else{var _0x4db1c5=_0x107028&&(_0xb9c064['messa'+'ge']||_0x5ae66a[_0x120afd(0x60f)]&&_0x11f268[_0x120afd(0x60f)]['messa'+'ge'])||_0x120afd(0x2e7)+'wn';if(_0x174eb5&&_0x37a896['filen'+_0x120afd(0x3e7)])_0x4db1c5+=_0xce47ea['vcJfe'](_0xce47ea['YkMVy'](_0xce47ea['jfuYn']+_0x302e4c(_0x164905['filen'+'ame'])[_0x120afd(0x24d)]('/')[_0x120afd(0x1c0)](),':'),_0x3de9c2['linen'+'o']||'?');_0xddf4e1['lastE'+'rror']=_0xce47ea['jKYxi'](_0x356fc4,_0x4db1c5)[_0x120afd(0x2f4)](-0x2529+0x10c0+0x1469,-0xd51+-0x1e85+0x2c76);}}function _0x4decea(_0xf8ad07){var _0x8a73fa=_0x560a0c,_0x559dd4=_0xce47ea[_0x8a73fa(0x2ce)](_0xf8ad07[_0x8a73fa(0x301)],0x1145+-0x2ad*0x5+-0x2*0x1f1),_0xf9b419=_0xf8ad07['heigh'+'t']/(0x787+0x1149+0x5*-0x4f6),_0x2765fb=Number(_0x571bcc[_0x8a73fa(0x201)+'e'])||0x2420+0x25ad+-0x24e6*0x2,_0x3e8013=/^#[0-9a-f]{6}$/i['test'](_0x571bcc['chCol'+'or'])?_0x571bcc['chCol'+'or']:_0x8a73fa(0x104)+'9d';_0x24edd6[_0x8a73fa(0xc4)](),_0x24edd6[_0x8a73fa(0x32d)+_0x8a73fa(0x110)+'e']=_0x3e8013,_0x24edd6[_0x8a73fa(0x242)+_0x8a73fa(0x4f8)]=_0x3e8013,_0x24edd6['lineW'+'idth']=Math['max'](-0x19*-0xaf+-0x3*0x1fd+-0xb1f+0.5,(-0x6c6+-0xa1a+0x10e2)*_0x2765fb),_0x24edd6[_0x8a73fa(0x1dc)+'wColo'+'r']=_0x3e8013,_0x24edd6[_0x8a73fa(0x1dc)+_0x8a73fa(0x305)]=-0x20fb*-0x1+-0x6c3*0x1+0x2*-0xd19;var _0x4730f5=(-0x9*-0x34d+-0x2442+-0x231*-0x3)*_0x2765fb,_0x2d1a27=(0x901*0x2+0x303+-0x1*0x14fd)*_0x2765fb;_0x24edd6[_0x8a73fa(0x1f6)+'Path'](),_0x24edd6[_0x8a73fa(0x2f0)+'o'](_0x559dd4-_0x4730f5-_0x2d1a27,_0xf9b419),_0x24edd6['lineT'+'o'](_0x559dd4-_0x4730f5,_0xf9b419),_0x24edd6[_0x8a73fa(0x2f0)+'o'](_0x559dd4+_0x4730f5,_0xf9b419),_0x24edd6[_0x8a73fa(0x403)+'o'](_0xce47ea[_0x8a73fa(0x4cd)](_0x559dd4+_0x4730f5,_0x2d1a27),_0xf9b419),_0x24edd6[_0x8a73fa(0x2f0)+'o'](_0x559dd4,_0xf9b419-_0x4730f5-_0x2d1a27),_0x24edd6[_0x8a73fa(0x403)+'o'](_0x559dd4,_0xf9b419-_0x4730f5),_0x24edd6['moveT'+'o'](_0x559dd4,_0xf9b419+_0x4730f5),_0x24edd6[_0x8a73fa(0x403)+'o'](_0x559dd4,_0xce47ea[_0x8a73fa(0x316)](_0xce47ea['nlcxD'](_0xf9b419,_0x4730f5),_0x2d1a27)),_0x24edd6['strok'+'e'](),_0x24edd6['begin'+_0x8a73fa(0x57a)](),_0x24edd6[_0x8a73fa(0x343)](_0x559dd4,_0xf9b419,(0x23b5+-0x2242+-0x172+0.6000000000000001)*_0x2765fb,-0x2*-0x131c+0x1a4*0xe+0xb*-0x590,_0xce47ea[_0x8a73fa(0x1ca)](Math['PI'],0x13f0+0x2d5+-0x1*0x16c3)),_0x24edd6[_0x8a73fa(0x56b)](),_0x24edd6['resto'+'re']();}function _0x36ff1b(_0x5b49ed){var _0x4b7880=_0x560a0c,_0x3665fb=('7|4|1'+_0x4b7880(0x220)+_0x4b7880(0x3fc)+'|8|3')[_0x4b7880(0x24d)]('|'),_0x2f21ca=0x2*0x10df+-0x13aa+0x44*-0x35;while(!![]){switch(_0x3665fb[_0x2f21ca++]){case'0':var _0x6db65b=(_0x2d036b,_0x3adcbd)=>{var _0x556f35=_0x4b7880;_0x24edd6['fillS'+'tyle']=_0x3adcbd||'rgba('+_0x556f35(0x455)+'35,24'+_0x556f35(0x428)+'5)',_0x24edd6['fillT'+_0x556f35(0x1fe)](_0x2d036b,_0x491444,_0x3e12a2),_0x3e12a2+=0x2*0x172+-0xf39+0x1*0xc65;};continue;case'1':_0x24edd6[_0x4b7880(0x282)+_0x4b7880(0x4a9)]=_0x292e55[_0x4b7880(0x404)];continue;case'2':_0x6db65b(_0x4b7880(0x295)+_0x4b7880(0xd0)+_0x4b7880(0x382)+'1',_0x292e55[_0x4b7880(0x154)]);continue;case'3':_0x24edd6[_0x4b7880(0x58a)+'re']();continue;case'4':_0x24edd6['font']=_0x292e55['zTGlG'];continue;case'5':var _0x3e12a2=-0xf39+0x228f+-0x16*0xdf,_0x491444=-0x454+-0x69a*0x1+0xafa;continue;case'6':if(_0x571bcc[_0x4b7880(0x498)])_0x6db65b(_0x485a5c+_0x4b7880(0x126));continue;case'7':_0x24edd6['save']();continue;case'8':if(!_0x4c7631['gameL'+'oaded'])_0x6db65b(_0x292e55[_0x4b7880(0x25d)],_0x292e55[_0x4b7880(0x556)]);continue;case'9':_0x24edd6[_0x4b7880(0x37d)+'aseli'+'ne']='top';continue;}break;}}function _0x536c60(){var _0x560d97=_0x560a0c,_0x5972be={'LHNnS':function(_0x490ddd){return _0x490ddd();}};if(_0xce47ea[_0x560d97(0x97)]!==_0x560d97(0x12b)){_0xce47ea[_0x560d97(0x419)](requestAnimationFrame,_0x536c60),_0x3e7eb8++;var _0x44fb29=performance[_0x560d97(0x624)]();_0xce47ea['qJiMa'](_0x44fb29,_0x15c1b2)>=0x14a2*-0x1+-0x17*0x182+0x3944&&(_0xce47ea['sPISR']('GhpKn','GhpKn')?(_0x1ec20b['jumpP'+'ct']=_0x17e2f7,_0x5972be['LHNnS'](_0x484598)):(_0x485a5c=Math[_0x560d97(0x520)](_0xce47ea[_0x560d97(0x2ce)](_0x3e7eb8*(0x180+-0x184*-0x10+-0x15d8),_0xce47ea[_0x560d97(0xa8)](_0x44fb29,_0x15c1b2))),_0x3e7eb8=0x1*-0x112+0x16bf+0xb3*-0x1f,_0x15c1b2=_0x44fb29));_0xce47ea[_0x560d97(0x4e2)](_0x34c3b5),_0xce47ea['Nygps'](_0x41a02f),_0x24edd6[_0x560d97(0x4c5)+'Rect'](-0x21bb+0x3db+-0x2*-0xef0,0x1919+0x1a4f+-0x3368,_0x4dee63['w'],_0x4dee63['h']);var _0x2cae49={'left':0x0,'top':0x0,'right':_0x4dee63['w'],'bottom':_0x4dee63['h'],'width':_0x4dee63['w'],'height':_0x4dee63['h']};if(_0x571bcc[_0x560d97(0x238)+'hair'])_0x4decea(_0x2cae49);if(_0x571bcc[_0x560d97(0x187)+'rokes'])_0xce47ea[_0x560d97(0x130)](_0x5589c1,_0x2cae49);_0x36ff1b(_0x2cae49);}else _0xb455c1[_0x560d97(0x238)+'hair']=_0x5f5d8c,_0x31c8c8();}var _0x2b5d82=document[_0x560a0c(0x3ea)+_0x560a0c(0x2e9)+_0x560a0c(0x129)](_0x292e55[_0x560a0c(0x646)]);_0x2b5d82['id']='sakur'+_0x560a0c(0x136),_0x2b5d82['style']['cssTe'+'xt']=_0x292e55[_0x560a0c(0x44a)];var _0x3370dc=_0x2b5d82['attac'+_0x560a0c(0x3f6)+'ow']({'mode':_0x560a0c(0x3e3)});(document[_0x560a0c(0x2b3)]||document[_0x560a0c(0xbb)+'entEl'+_0x560a0c(0x43d)])[_0x560a0c(0x179)+_0x560a0c(0x51e)+'d'](_0x2b5d82);var _0x11b01d=![],_0x4bcde7={};try{_0x292e55[_0x560a0c(0x1ea)]!==_0x292e55[_0x560a0c(0x5e6)]?_0x4bcde7=JSON['parse'](localStorage['getIt'+'em'](_0x292e55[_0x560a0c(0x5c0)])||'{}'):(_0xf75d4[_0x560a0c(0x352)+'Exp']=_0x164e04,_0xce47ea['dtWzu'](_0x1cd3fa));}catch(_0x3caf60){}function _0x556069(){var _0x1afa3c=_0x560a0c;try{localStorage[_0x1afa3c(0x3f1)+'em'](_0x1afa3c(0x409)+_0x1afa3c(0x39b)+'r.ui.'+'v1',JSON['strin'+_0x1afa3c(0xd3)](_0x4bcde7));}catch(_0x3ffe71){}}function _0x29b6b0(_0x18b511,_0x18a110){var _0x336e1c=_0x560a0c,_0x566441=_0xce47ea[_0x336e1c(0x533)][_0x336e1c(0x24d)]('|'),_0x1aa257=0x599+0x16cb+-0x1c64;while(!![]){switch(_0x566441[_0x1aa257++]){case'0':_0x4fe99b['setAt'+_0x336e1c(0x29c)+'te'](_0xce47ea['brBAS'],_0x336e1c(0x463)+'h');continue;case'1':var _0x4fe99b=document[_0x336e1c(0x3ea)+'eElem'+'ent']('butto'+'n');continue;case'2':return _0x4fe99b;case'3':_0x4fe99b['setAt'+'tribu'+'te'](_0xce47ea[_0x336e1c(0x332)],String(!!_0x18b511));continue;case'4':_0x4fe99b[_0x336e1c(0x5fd)]=_0xce47ea['giXse'];continue;case'5':_0x4fe99b['oncli'+'ck']=_0x2c70a9=>{var _0x46890b=_0x336e1c;_0x2c70a9[_0x46890b(0x393)+_0x46890b(0x60b)+_0x46890b(0x3d9)]();var _0x5e4fc6=_0xce47ea[_0x46890b(0x325)](_0x4fe99b[_0x46890b(0x3c9)+'tribu'+'te'](_0xce47ea[_0x46890b(0x332)]),_0xce47ea[_0x46890b(0x415)]);_0x4fe99b[_0x46890b(0x565)+_0x46890b(0x29c)+'te'](_0x46890b(0x601)+_0x46890b(0xae)+'ed',String(_0x5e4fc6)),_0x18a110(_0x5e4fc6);};continue;case'6':_0x4fe99b[_0x336e1c(0x47d)+'Name']=_0x336e1c(0xf4)+_0x336e1c(0x587);continue;}break;}}function _0x10a8ac(_0x4f4515,_0x5af0f1,_0x467088,_0x206d9c,_0x54fb56){var _0x42fc4a=_0x560a0c,_0x5c56ce={'QYuEc':function(_0x10639e,_0x10987b){return _0x10639e===_0x10987b;},'XxeQX':'athOh','RWOmV':function(_0x418abb,_0x48e318){var _0x2fbbf3=_0x5470;return _0xce47ea[_0x2fbbf3(0x103)](_0x418abb,_0x48e318);}};if(_0xce47ea[_0x42fc4a(0x18a)](_0x42fc4a(0x1e0),_0xce47ea[_0x42fc4a(0x32f)])){var _0x20036a=document[_0x42fc4a(0x3ea)+'eElem'+_0x42fc4a(0x129)](_0x42fc4a(0x63f));_0x20036a['class'+_0x42fc4a(0x5f6)]=_0xce47ea[_0x42fc4a(0xe0)];var _0x3ae9d0=document['creat'+_0x42fc4a(0x2e9)+'ent'](_0x42fc4a(0x387));_0x3ae9d0[_0x42fc4a(0x5fd)]=_0xce47ea['ZWuQD'],_0x3ae9d0['class'+'Name']=_0x42fc4a(0xac)+_0x42fc4a(0x61a),_0x3ae9d0[_0x42fc4a(0x12d)]=_0x5af0f1,_0x3ae9d0['max']=_0x467088,_0x3ae9d0[_0x42fc4a(0x8f)]=_0x206d9c,_0x3ae9d0[_0x42fc4a(0x1ae)]=_0x4f4515;var _0x2f20e9=document[_0x42fc4a(0x3ea)+_0x42fc4a(0x2e9)+'ent'](_0x42fc4a(0x203));_0x2f20e9[_0x42fc4a(0x47d)+_0x42fc4a(0x5f6)]=_0xce47ea['lfLWh'],_0x2f20e9[_0x42fc4a(0x592)+'onten'+'t']=String(_0x4f4515);var _0xf63835=()=>{var _0x131495=_0x42fc4a;_0x2f20e9[_0x131495(0x592)+_0x131495(0x368)+'t']=String(_0x3ae9d0[_0x131495(0x1ae)]),_0x20036a[_0x131495(0xe3)][_0x131495(0x3fa)+_0x131495(0x397)+'y'](_0x131495(0x1a3),_0xce47ea['kCvpz'](_0xce47ea[_0x131495(0x36b)](_0x3ae9d0['value'],_0x5af0f1)/_0xce47ea[_0x131495(0x63c)](_0x467088,_0x5af0f1),-0x1*-0xb6f+-0x16b+-0x9a0)+'%');};return _0x3ae9d0[_0x42fc4a(0x559)+'ut']=()=>{var _0x57ff12=_0x42fc4a;if(_0x5c56ce['QYuEc']('dvatG',_0x5c56ce['XxeQX'])){_0xb7dd86[_0x57ff12(0xb1)](_0xc6eae1[_0x57ff12(0x624)]());if(_0x4f2f10['lengt'+'h']>0x12c9+0xafd+-0x1d9e*0x1)_0x2b0707[_0x57ff12(0xec)]();}else _0xf63835(),_0x5c56ce['RWOmV'](_0x54fb56,Number(_0x3ae9d0['value']));},_0xf63835(),_0x20036a['appen'+'d'](_0x3ae9d0,_0x2f20e9),_0x20036a;}else{if(_0x2e680c)_0x5c267b['call']('Unity'+_0x42fc4a(0x4b4)+_0x42fc4a(0x218)+_0x42fc4a(0x2af)+_0x42fc4a(0x246),'set_t'+_0x42fc4a(0x290)+_0x42fc4a(0x1ac)+'Rate',[-0x832*-0x1+0x1a1+-0x8e3]);}}function _0x1ba2c5(_0x116736,_0x18dbf8){var _0x206101=_0x560a0c;if(_0xce47ea['IrZAr'](_0xce47ea[_0x206101(0x3d1)],_0xce47ea[_0x206101(0x229)]))_0x745b72[_0x206101(0x192)](_0x57553a[_0x206101(0x36d)]);else{var _0x4378db=document['creat'+'eElem'+_0x206101(0x129)](_0x206101(0x387));return _0x4378db['type']='color',_0x4378db[_0x206101(0x47d)+'Name']=_0x206101(0x3b4)+_0x206101(0x4cf),_0x4378db[_0x206101(0x1ae)]=/^#[0-9a-f]{6}$/i[_0x206101(0x263)](_0x116736)?_0x116736:_0xce47ea[_0x206101(0x4ab)],_0x4378db[_0x206101(0x559)+'ut']=()=>_0x18dbf8(_0x4378db['value']),_0x4378db;}}function _0x489722(_0x232d7b,_0x4247a8,_0xdf3d67){var _0x1296c0=_0x560a0c,_0x5da5ce=document[_0x1296c0(0x3ea)+_0x1296c0(0x2e9)+'ent'](_0x1296c0(0x4db)+'t');_0x5da5ce['class'+_0x1296c0(0x5f6)]=_0x292e55[_0x1296c0(0x41b)];for(var [_0x2f519f,_0x24515b]of _0x4247a8){if(_0x292e55[_0x1296c0(0x3ac)](_0x292e55[_0x1296c0(0xf1)],_0x1296c0(0xfa)))_0x478b14[_0x1296c0(0x4a1)+'odDie']=_0x4b267e,_0x168daa();else{var _0x39d945=document['creat'+_0x1296c0(0x2e9)+_0x1296c0(0x129)](_0x1296c0(0x30d)+'n');_0x39d945[_0x1296c0(0x1ae)]=_0x2f519f,_0x39d945[_0x1296c0(0x592)+_0x1296c0(0x368)+'t']=_0x24515b,_0x5da5ce['appen'+_0x1296c0(0x51e)+'d'](_0x39d945);}}return _0x5da5ce['value']=_0x232d7b,_0x5da5ce['oncha'+_0x1296c0(0x2fe)]=()=>_0xdf3d67(_0x5da5ce[_0x1296c0(0x1ae)]),_0x5da5ce;}function _0x584768(_0x47b914,_0x59b4c6){var _0x3d08c5=_0x560a0c,_0xcbb0fb=_0x292e55[_0x3d08c5(0xab)][_0x3d08c5(0x24d)]('|'),_0x175bed=0x2e*0x31+0x1*-0xdd3+0x505*0x1;while(!![]){switch(_0xcbb0fb[_0x175bed++]){case'0':_0x5052d9[_0x3d08c5(0x47d)+'Name']=_0x292e55[_0x3d08c5(0x5d7)];continue;case'1':var _0x5052d9=document[_0x3d08c5(0x3ea)+_0x3d08c5(0x2e9)+'ent'](_0x292e55[_0x3d08c5(0x212)]);continue;case'2':_0x5052d9[_0x3d08c5(0x41f)+'ck']=_0x326361=>{_0x326361['stopP'+'ropag'+'ation'](),_0x59b4c6();};continue;case'3':_0x5052d9[_0x3d08c5(0x5fd)]='butto'+'n';continue;case'4':_0x5052d9['textC'+_0x3d08c5(0x368)+'t']=_0x47b914;continue;case'5':return _0x5052d9;}break;}}function _0x125ba2(_0x4ff4c1,_0xbd58af,_0x8a3efa){var _0x29ca4f=_0x560a0c,_0x5db5e6=_0x292e55['VxfGk'][_0x29ca4f(0x24d)]('|'),_0x27f44f=0x26*-0x30+0xfdc+-0x8bc;while(!![]){switch(_0x5db5e6[_0x27f44f++]){case'0':if(_0xbd58af){var _0x835372=document['creat'+'eElem'+'ent'](_0x292e55['bkFve']);_0x835372[_0x29ca4f(0x47d)+_0x29ca4f(0x5f6)]='sk-hi'+'nt',_0x835372['textC'+'onten'+'t']=_0xbd58af,_0x2226d2['appen'+'dChil'+'d'](_0x835372);}continue;case'1':_0x121d0d[_0x29ca4f(0x179)+'d'](_0x2226d2,_0x8a3efa);continue;case'2':var _0x121d0d=document[_0x29ca4f(0x3ea)+'eElem'+_0x29ca4f(0x129)]('div');continue;case'3':return _0x121d0d;case'4':_0x121d0d[_0x29ca4f(0x47d)+'Name']='sk-ct'+'l';continue;case'5':_0x2226d2['textC'+_0x29ca4f(0x368)+'t']=_0x4ff4c1;continue;case'6':var _0x2226d2=document['creat'+'eElem'+_0x29ca4f(0x129)](_0x292e55[_0x29ca4f(0x171)]);continue;case'7':_0x2226d2[_0x29ca4f(0x47d)+_0x29ca4f(0x5f6)]=_0x29ca4f(0x1dd)+_0x29ca4f(0x542);continue;}break;}}function _0x379ba7(_0xa931b8,_0x40a782){var _0x1e425=_0x560a0c,_0x119756=document['creat'+'eElem'+_0x1e425(0x129)](_0x292e55[_0x1e425(0x646)]);return _0x119756[_0x1e425(0x47d)+'Name']=_0x292e55['QjAiW']+(_0x40a782?'\x20err':''),_0x119756[_0x1e425(0x592)+_0x1e425(0x368)+'t']=_0xa931b8,_0x119756;}function _0x526f8e(_0x5f4ee8,_0x4a438b,_0x45467b,_0x417a58,_0x406fee){var _0x3d07e8=_0x560a0c,_0x543d39=document['creat'+'eElem'+_0x3d07e8(0x129)](_0x3d07e8(0x63f));_0x543d39['class'+_0x3d07e8(0x5f6)]=_0x292e55[_0x3d07e8(0x2cc)]+(_0x45467b?_0x292e55['rLHvV']:'');var _0x1aa18d=document[_0x3d07e8(0x3ea)+'eElem'+_0x3d07e8(0x129)](_0x3d07e8(0x63f));_0x1aa18d[_0x3d07e8(0x47d)+'Name']=_0x3d07e8(0x1a9)+_0x3d07e8(0x618)+'ad';var _0x24752c=document[_0x3d07e8(0x3ea)+_0x3d07e8(0x2e9)+_0x3d07e8(0x129)](_0x292e55[_0x3d07e8(0x646)]);_0x24752c[_0x3d07e8(0x47d)+'Name']='sk-ca'+_0x3d07e8(0x4a0)+'tle';var _0x1dda6f=document['creat'+_0x3d07e8(0x2e9)+_0x3d07e8(0x129)](_0x3d07e8(0x254)+'g');_0x1dda6f['textC'+'onten'+'t']=_0x5f4ee8,_0x24752c['appen'+_0x3d07e8(0x51e)+'d'](_0x1dda6f);if(_0x417a58){var _0x4ac1f5=_0x29b6b0(_0x45467b,_0x4c187c=>{var _0x9aa662=_0x3d07e8;_0x9aa662(0x308)===_0x9aa662(0x308)?(_0x543d39['class'+_0x9aa662(0x629)][_0x9aa662(0x49b)+'e']('on',_0x4c187c),_0xce47ea[_0x9aa662(0x419)](_0x417a58,_0x4c187c)):(_0x4cbb9a['hookN'+'oReco'+'il']=_0x3822c9,_0x53139f());});_0x1aa18d[_0x3d07e8(0x179)+'d'](_0x24752c,_0x4ac1f5);}else _0x1aa18d['appen'+_0x3d07e8(0x51e)+'d'](_0x24752c);_0x543d39['appen'+_0x3d07e8(0x51e)+'d'](_0x1aa18d);if(_0x406fee&&_0x406fee['lengt'+'h']){var _0x5ab7f5=(_0x3d07e8(0x52c)+_0x3d07e8(0x49e)+_0x3d07e8(0x4dd))['split']('|'),_0x2650f5=0x2159*0x1+-0xb26+-0x1633*0x1;while(!![]){switch(_0x5ab7f5[_0x2650f5++]){case'0':for(var _0x1979e2 of _0x406fee)_0x4d8c29[_0x3d07e8(0x179)+_0x3d07e8(0x51e)+'d'](_0x1979e2);continue;case'1':_0x4d8c29['class'+'Name']=_0x3d07e8(0x5ce)+_0x3d07e8(0x351);continue;case'2':_0x316b1a[_0x3d07e8(0x592)+'onten'+'t']=_0x4a438b;continue;case'3':var _0x316b1a=document['creat'+_0x3d07e8(0x2e9)+_0x3d07e8(0x129)](_0x3d07e8(0x63f));continue;case'4':_0x4d8c29[_0x3d07e8(0x179)+_0x3d07e8(0x51e)+'d'](_0x316b1a);continue;case'5':_0x316b1a['class'+'Name']=_0x292e55['lBRoY'];continue;case'6':var _0x4d8c29=document[_0x3d07e8(0x3ea)+_0x3d07e8(0x2e9)+'ent'](_0x3d07e8(0x63f));continue;case'7':_0x543d39['appen'+'dChil'+'d'](_0x4d8c29);continue;}break;}}return _0x543d39;}var _0x78eb93=[{'id':_0x560a0c(0x401)+'t','label':_0x560a0c(0x60d)+'t'},{'id':'move','label':_0x292e55[_0x560a0c(0x5d8)]},{'id':_0x560a0c(0x365)+'l','label':'Visua'+'l'},{'id':_0x560a0c(0x584),'label':_0x292e55[_0x560a0c(0x5fc)]},{'id':'safe','label':_0x560a0c(0x231)+'y'}];function _0x285e7c(){var _0x270043=_0x560a0c,_0x2d825a=_0x4c7631[_0x270043(0x284)+_0x270043(0x5ea)]?_0x270043(0x62b)+_0x270043(0x55e)+_0x270043(0x195)+'rlay\x20'+_0x270043(0x359)+_0x270043(0x1de)+_0x270043(0x634)+'(relo'+_0x270043(0x30b)+'\x20exit'+')':_0x4c7631['uwmk']?_0xce47ea['vcJfe'](_0xce47ea[_0x270043(0x131)](_0xce47ea['VzNUJ'](_0xce47ea['GFAaZ'],_0x4c7631['hooks'+_0x270043(0x396)]?_0xce47ea[_0x270043(0x316)](_0xce47ea['YkMVy'](_0x4c7631[_0x270043(0x50f)+'Ok']+'/',_0x4c7631[_0x270043(0x50f)+'Total']),_0x270043(0x2b2)+'s'):_0xce47ea[_0x270043(0x323)])+_0xce47ea[_0x270043(0x32b)],_0x4c7631[_0x270043(0x3eb)+'oaded']?_0x270043(0x3f2)+'d':_0x270043(0x45b)+'ng'),'\x20|\x20sh'+'ooter'+'\x20')+(_0x4c7631[_0x270043(0x2c3)+_0x270043(0x519)]?_0x270043(0x612):_0x270043(0x168))+_0xce47ea[_0x270043(0x444)]+(_0x4c7631['movem'+_0x270043(0x30f)]?'held':_0x270043(0x168)):'UWMK\x20'+_0x270043(0x4ec)+'NG\x20—\x20'+_0x270043(0x381)+_0x270043(0x36a)+_0x270043(0x188)+_0x270043(0x2ca)+'all\x20t'+_0x270043(0x2c9)+'erscr'+_0x270043(0x590);if(_0x4c7631[_0x270043(0x602)+_0x270043(0x14f)])_0x2d825a+=_0xce47ea[_0x270043(0x50e)](_0x270043(0x1d2)+_0x270043(0x593),_0x4c7631[_0x270043(0x602)+_0x270043(0x14f)]);return _0x526f8e(_0x270043(0x49d)+'s',_0x2d825a,_0x4c7631[_0x270043(0x517)],null,[_0xce47ea[_0x270043(0xb7)](_0x125ba2,'240\x20F'+'PS\x20un'+'lock','calls'+_0x270043(0x226)+_0x270043(0x53a)+'ne.Ap'+_0x270043(0x98)+'tion.'+_0x270043(0x5d4)+_0x270043(0x290)+_0x270043(0x1ac)+'Rate',_0x584768(_0xce47ea[_0x270043(0x399)],()=>{var _0x4ff2bd=_0x270043;try{if(_0x443021)_0x443021[_0x4ff2bd(0x54e)](_0xce47ea[_0x4ff2bd(0xc2)],_0x4ff2bd(0x5d4)+_0x4ff2bd(0x290)+'Frame'+_0x4ff2bd(0x635),[-0x539+0x21+-0xc1*-0x8]);}catch(_0x237a5b){}}))]);}function _0xab8715(_0x1e44e1){var _0x2a540d=_0x560a0c,_0x557eea={'eACmo':'[saku'+_0x2a540d(0x4b6)+'ur]\x20h'+_0x2a540d(0x2d9)+_0x2a540d(0xc0)+_0x2a540d(0x327),'USDDa':function(_0x4302b6,_0x872ba9,_0x365602){return _0x292e55['yJXmQ'](_0x4302b6,_0x872ba9,_0x365602);},'NNaWY':_0x2a540d(0x63f),'tjzWN':'\x20err','cZgva':_0x2a540d(0x63e),'YOlAE':function(_0x61a562,_0x479493){return _0x61a562!==_0x479493;},'wDjLz':function(_0x160678){return _0x160678();},'nmUys':_0x2a540d(0x167)+'nt','FCMrO':function(_0x10860b){return _0x292e55['UgKWk'](_0x10860b);},'JRxep':_0x292e55[_0x2a540d(0x2a0)]};if(_0x292e55['IzUdr'](_0x1e44e1,_0x2a540d(0x401)+'t')){if(_0x292e55['XCXUr']('VyGbz','lCpVr'))try{var _0x311842=_0x9fffc6['hookP'+'ostfi'+'x']({'typeName':_0x105bf9,'methodName':_0x4dd3f3,'params':_0xc371aa,'returnType':_0x4fb14c},_0x3c5827);return _0x311842['enabl'+'ed']=_0x37dd98!==![],_0x409852[_0x1f833f]=_0x311842,_0x212d91['hooks'+_0x2a540d(0x396)]++,_0x311842;}catch(_0x200aa1){return _0x190d60[_0x2a540d(0x4c1)](_0x557eea['eACmo'],_0x30ceb8,_0x200aa1&&_0x200aa1['messa'+'ge']),null;}else return[_0x292e55[_0x2a540d(0x41c)](_0x285e7c),_0x526f8e(_0x292e55['SlOlo'],_0x2a540d(0x360)+'s\x20OHe'+_0x2a540d(0x5b7)+'Initi'+_0x2a540d(0x326)+_0x2a540d(0x1be)+_0x2a540d(0x1ee)+'nd\x20OH'+'ealth'+'.Loca'+'lDie,'+'\x20so\x20n'+_0x2a540d(0x31c)+_0x2a540d(0x34f)+_0x2a540d(0x13b)+_0x2a540d(0x56d)+_0x2a540d(0x24f)+_0x2a540d(0x1da),_0x571bcc[_0x2a540d(0x479)],_0x5d0edb=>{var _0x1b181b=_0x2a540d;_0xce47ea['yOWJT']==='PsceF'?_0x34ccd0[_0x1b181b(0x3f1)+'em'](_0x1b181b(0x409)+_0x1b181b(0x39b)+'r.v1',_0x32553e[_0x1b181b(0x2e6)+_0x1b181b(0xd3)](_0x2a5af7)):(_0x571bcc[_0x1b181b(0x479)]=_0x5d0edb,_0x2d7827(),_0x4ae9f5(_0x1b181b(0x479),_0x5d0edb),_0x4ae9f5(_0xce47ea['YEJUs'],_0x5d0edb));},[]),_0x292e55['uxMsH'](_0x526f8e,_0x2a540d(0x2a5)+'coil','Skips'+_0x2a540d(0x277)+'ilMot'+'ion.T'+_0x2a540d(0x4ba)+_0x2a540d(0x545)+_0x2a540d(0x611)+_0x2a540d(0x568)+_0x2a540d(0xf0)+'\x20neve'+'r\x20adv'+_0x2a540d(0x26f),_0x571bcc[_0x2a540d(0xe8)+'oil'],_0x2f00e7=>{var _0x41115b=_0x2a540d;if('FfeXv'===_0x41115b(0x1fc))_0x571bcc[_0x41115b(0xe8)+'oil']=_0x2f00e7,_0x2d7827(),_0x557eea['USDDa'](_0x4ae9f5,_0x41115b(0xe8)+_0x41115b(0x1d0),_0x2f00e7);else{var _0x4ded68=_0x51e58f['creat'+'eElem'+'ent'](_0x41115b(0x4aa)+'n');return _0x4ded68[_0x41115b(0x5fd)]='butto'+'n',_0x4ded68[_0x41115b(0x47d)+'Name']=_0x41115b(0x4d8)+'n',_0x4ded68['textC'+_0x41115b(0x368)+'t']=_0xb8f1b,_0x4ded68[_0x41115b(0x41f)+'ck']=_0x48fba4=>{var _0x5eb485=_0x41115b;_0x48fba4[_0x5eb485(0x393)+_0x5eb485(0x60b)+_0x5eb485(0x3d9)](),_0x5bd6cd();},_0x4ded68;}},[]),_0x292e55[_0x2a540d(0xfd)](_0x526f8e,_0x292e55[_0x2a540d(0x172)],_0x2a540d(0xb9)+_0x2a540d(0x3fd)+'ead\x20a'+'nd\x20ma'+_0x2a540d(0x87)+_0x2a540d(0x43b)+'cy\x20on'+_0x2a540d(0x42a)+_0x2a540d(0xb3)+_0x2a540d(0x2f3)+'ery\x202'+'00ms.',_0x571bcc[_0x2a540d(0xfc)+_0x2a540d(0x149)],_0x369d2b=>{var _0x3bd65f=_0x2a540d;_0x571bcc[_0x3bd65f(0xfc)+'ead']=_0x369d2b,_0x2d7827();},[]),_0x526f8e(_0x292e55['jkNpo'],_0x2a540d(0x61b)+_0x2a540d(0x1c7)+_0x2a540d(0x1bb)+'Weapo'+'n.fir'+'eRate'+'\x20to\x201'+_0x2a540d(0x3ee)+'erver'+'\x20may\x20'+'still'+'\x20gate'+_0x2a540d(0x139)+'s.',_0x571bcc[_0x2a540d(0x352)+_0x2a540d(0x4af)],_0x56a8ed=>{_0x571bcc['rapid'+'Exp']=_0x56a8ed,_0x2d7827();},[]),_0x526f8e(_0x2a540d(0x5f4)+_0x2a540d(0x2f5)+'P]',_0x292e55['svjdL'],_0x571bcc[_0x2a540d(0x5ee)+_0x2a540d(0x21b)],_0xab1046=>{var _0x1955b4=_0x2a540d;_0x571bcc[_0x1955b4(0x5ee)+_0x1955b4(0x21b)]=_0xab1046,_0x2d7827();},[_0x292e55[_0x2a540d(0x1d8)](_0x125ba2,_0x2a540d(0x5f4)+_0x2a540d(0x3bf)+'ue',null,_0x292e55['XjNdh'](_0x10a8ac,_0x571bcc['damag'+_0x2a540d(0x2cb)+'e'],0x10a5*0x1+0x21c0+0x325b*-0x1,-0x11bd+-0x8b1*0x3+0x2dc4,0xb7c+-0x7b*0x3b+0x10e2,_0xb2234e=>{var _0x160c1b=_0x2a540d;_0x571bcc['damag'+_0x160c1b(0x2cb)+'e']=_0xb2234e,_0x2d7827();}))]),_0x526f8e('Infin'+_0x2a540d(0x5a9)+'mmo\x20['+_0x2a540d(0x4ca),_0x2a540d(0x386)+_0x2a540d(0x8c)+_0x2a540d(0x37a)+_0x2a540d(0x5a1)+'\x20cach'+_0x2a540d(0x44e)+'mo\x20to'+_0x2a540d(0x1fd)+'every'+_0x2a540d(0x269)+'s.',_0x571bcc['infAm'+_0x2a540d(0x5cc)],_0x5f599c=>{var _0x4578c6=_0x2a540d;if('SOuqM'===_0x557eea['cZgva']){var _0xca0c53=_0x1a4fc8[_0x4578c6(0x3ea)+'eElem'+_0x4578c6(0x129)](_0x557eea[_0x4578c6(0x3f8)]);return _0xca0c53['class'+'Name']=_0x4578c6(0x5eb)+'te'+(_0x4d8d95?_0x557eea[_0x4578c6(0xd5)]:''),_0xca0c53[_0x4578c6(0x592)+'onten'+'t']=_0x4185d4,_0xca0c53;}else _0x571bcc[_0x4578c6(0x510)+'moExp']=_0x5f599c,_0x2d7827();},[_0x379ba7(_0x2a540d(0x278)+'loads'+'\x20stil'+'l\x20dra'+_0x2a540d(0x58e)+'he\x20de'+'creme'+_0x2a540d(0xc8)+'ppens'+_0x2a540d(0x124)+_0x2a540d(0x268)+'.')])];}if(_0x1e44e1==='move')return[_0x526f8e(_0x2a540d(0x617),_0x292e55[_0x2a540d(0x13e)],_0x571bcc[_0x2a540d(0x478)+'Pct']!==0x1930+0x1a*-0x1e+0xe8*-0x18,null,[_0x292e55['teJtG'](_0x125ba2,_0x292e55[_0x2a540d(0x378)],'100\x20='+_0x2a540d(0x1f3)+_0x2a540d(0x24e),_0x10a8ac(_0x571bcc[_0x2a540d(0x478)+'Pct'],0x2*0xb0+-0x2235*0x1+-0x13*-0x1bd,-0x16f6*-0x1+-0x3*-0xb85+-0x3859,0x384+0x12a9+-0x1628,_0x555d2b=>{var _0x36a867=_0x2a540d;_0x571bcc[_0x36a867(0x478)+'Pct']=_0x555d2b,_0xce47ea[_0x36a867(0x19f)](_0x2d7827);}))]),_0x526f8e(_0x2a540d(0x328)+_0x2a540d(0x1e6)+_0x2a540d(0x37c),_0x2a540d(0x61b)+'s\x20Mov'+'ement'+_0x2a540d(0x3a2)+'Force'+_0x2a540d(0x337)+'both\x20'+'gravi'+'ty\x20va'+_0x2a540d(0x30c),_0x292e55[_0x2a540d(0x42c)](_0x571bcc['jumpP'+'ct'],0x193f+0x1e28+-0x3703)||_0x571bcc['gravi'+_0x2a540d(0x164)]!==0x11*-0xd3+0x55*-0x4+0xfbb,null,[_0x125ba2('Jump\x20'+'%',null,_0x10a8ac(_0x571bcc[_0x2a540d(0x641)+'ct'],-0xb6e+0x3*-0xcfb+0x10db*0x3,-0x7b5*0x3+-0x1*0xba9+0x23f4,0xa*-0x2e9+0x1*-0x5a6+0x22c5,_0xbd5a5f=>{_0x571bcc['jumpP'+'ct']=_0xbd5a5f,_0x2d7827();})),_0x125ba2(_0x292e55[_0x2a540d(0x54f)],_0x292e55[_0x2a540d(0x462)],_0x292e55[_0x2a540d(0xfd)](_0x10a8ac,_0x571bcc[_0x2a540d(0x591)+'tyPct'],0x1*0x383+-0x88c+0x1b1*0x3,-0x1aa2+-0xc10+-0x1*-0x277a,0x1e2+-0x1eca+-0x1*-0x1ced,_0x288dbe=>{var _0x20b7ea=_0x2a540d,_0x59c882={'mgjdi':function(_0x27e86f,_0x426303){var _0x2b1c43=_0x5470;return _0x557eea[_0x2b1c43(0xbe)](_0x27e86f,_0x426303);},'uZsaa':'butto'+'n','LHmDr':'role','AfwGY':function(_0x3c6a10,_0x54ab11){return _0x3c6a10(_0x54ab11);}};if('Doqaf'!==_0x20b7ea(0x134))_0x571bcc[_0x20b7ea(0x591)+_0x20b7ea(0x164)]=_0x288dbe,_0x2d7827();else{var _0x4aee48={'TmPDI':function(_0x35f20c,_0xf1fbde){return _0x59c882['mgjdi'](_0x35f20c,_0xf1fbde);}},_0x1d3324=_0x33a7b4[_0x20b7ea(0x3ea)+_0x20b7ea(0x2e9)+'ent'](_0x59c882['uZsaa']);return _0x1d3324['type']=_0x59c882['uZsaa'],_0x1d3324[_0x20b7ea(0x47d)+_0x20b7ea(0x5f6)]='sk-sw'+_0x20b7ea(0x587),_0x1d3324[_0x20b7ea(0x565)+_0x20b7ea(0x29c)+'te'](_0x59c882[_0x20b7ea(0x291)],'switc'+'h'),_0x1d3324[_0x20b7ea(0x565)+_0x20b7ea(0x29c)+'te'](_0x20b7ea(0x601)+_0x20b7ea(0xae)+'ed',_0x59c882[_0x20b7ea(0x57c)](_0x547393,!!_0x3b0e6c)),_0x1d3324[_0x20b7ea(0x41f)+'ck']=_0x3f9acf=>{var _0x178ce5=_0x20b7ea;_0x3f9acf[_0x178ce5(0x393)+_0x178ce5(0x60b)+'ation']();var _0x3fc1a1=_0x4aee48[_0x178ce5(0x30e)](_0x1d3324['getAt'+_0x178ce5(0x29c)+'te'](_0x178ce5(0x601)+_0x178ce5(0xae)+'ed'),_0x178ce5(0xef));_0x1d3324[_0x178ce5(0x565)+_0x178ce5(0x29c)+'te'](_0x178ce5(0x601)+_0x178ce5(0xae)+'ed',_0x3833ee(_0x3fc1a1)),_0x3dfc14(_0x3fc1a1);},_0x1d3324;}}))]),_0x526f8e(_0x292e55['eCEFV'],_0x292e55[_0x2a540d(0x1ec)],_0x571bcc[_0x2a540d(0x11f)],_0x42040a=>{var _0x342943=_0x2a540d;_0x571bcc['bhop']=_0x42040a,_0xce47ea[_0x342943(0x4e2)](_0x2d7827);},[])];if(_0x1e44e1===_0x292e55[_0x2a540d(0x329)])return[_0x292e55[_0x2a540d(0xfd)](_0x526f8e,_0x292e55[_0x2a540d(0x5dd)],_0x2a540d(0x224)+'+\x20LMB'+_0x2a540d(0x115)+_0x2a540d(0x627)+'ce\x20ov'+'erlay'+'.',_0x571bcc[_0x2a540d(0x187)+_0x2a540d(0x5ab)],_0x3181b6=>{var _0x118f8a=_0x2a540d;_0x571bcc[_0x118f8a(0x187)+_0x118f8a(0x5ab)]=_0x3181b6,_0x2d7827();},[_0x292e55['yPfMX'](_0x125ba2,_0x292e55['EIPHI'],null,_0x292e55[_0x2a540d(0x585)](_0x489722,_0x571bcc[_0x2a540d(0x372)],[['bl',_0x292e55[_0x2a540d(0x82)]],['br',_0x2a540d(0xa9)+_0x2a540d(0x2bd)+'ht'],['ml',_0x2a540d(0x26c)+_0x2a540d(0x623)+'e']],_0x2c958b=>{_0x571bcc['ksPos']=_0x2c958b,_0x557eea['wDjLz'](_0x2d7827);})),_0x125ba2(_0x2a540d(0xde),null,_0x292e55[_0x2a540d(0x586)](_0x10a8ac,_0x571bcc['ksSca'+'le'],-0xaed+-0x3*0x567+0x17*0x12e+0.6,0xc37+-0xc9*-0x9+0x1347*-0x1+0.6000000000000001,-0x3e*-0x2e+-0x5*-0x1cf+-0x142f+0.05,_0x101a29=>{var _0xd15074=_0x2a540d;_0x571bcc[_0xd15074(0x1b5)+'le']=_0x101a29,_0x2d7827();})),_0x125ba2(_0x292e55['xBStc'],null,_0x29b6b0(_0x571bcc[_0x2a540d(0x4fa)],_0x315682=>{var _0x29793a=_0x2a540d;_0x571bcc[_0x29793a(0x4fa)]=_0x315682,_0x2d7827();}))]),_0x292e55[_0x2a540d(0x37f)](_0x526f8e,_0x292e55['eWrSC'],'Custo'+_0x2a540d(0x421)+_0x2a540d(0x5c8)+_0x2a540d(0x51b)+_0x2a540d(0x484),_0x571bcc['cross'+_0x2a540d(0xbc)],_0x53328d=>{var _0x39e430=_0x2a540d;_0x571bcc['cross'+_0x39e430(0xbc)]=_0x53328d,_0xce47ea[_0x39e430(0x19f)](_0x2d7827);},[_0x125ba2(_0x292e55[_0x2a540d(0x214)],null,_0x10a8ac(_0x571bcc[_0x2a540d(0x201)+'e'],0xdef+0xf98+0x1d87*-0x1+0.5,0x189d+-0x1c6*-0xb+-0x2c1d+0.5,0x23ba+0x1a*-0x1c+-0x20e2+0.1,_0x5509dd=>{_0x571bcc['chSiz'+'e']=_0x5509dd,_0x2d7827();})),_0x292e55[_0x2a540d(0x223)](_0x125ba2,_0x292e55[_0x2a540d(0x52e)],null,_0x1ba2c5(_0x571bcc['chCol'+'or'],_0x295b06=>{_0x571bcc['chCol'+'or']=_0x295b06,_0x2d7827();}))]),_0x292e55['wxGFm'](_0x526f8e,'Count'+'ers',_0x2a540d(0x4a7)+_0x2a540d(0x250)+'y.',_0x571bcc['fps'],null,[_0x125ba2(_0x2a540d(0x170)+_0x2a540d(0xdd)+'r',null,_0x29b6b0(_0x571bcc['fps'],_0x5d8efc=>{var _0x49a3f8=_0x2a540d,_0x1b0cfe={'smfQN':'sk-ct'+'l','NfIPJ':_0x49a3f8(0x203),'CNPcb':_0x49a3f8(0x39f),'udYhS':_0x557eea[_0x49a3f8(0x1a4)]};if('BAwuP'!==_0x49a3f8(0x52f))_0x571bcc[_0x49a3f8(0x498)]=_0x5d8efc,_0x557eea[_0x49a3f8(0x28a)](_0x2d7827);else{var _0x5cabd7=_0x146b91[_0x49a3f8(0x3ea)+_0x49a3f8(0x2e9)+_0x49a3f8(0x129)](_0x49a3f8(0x63f));_0x5cabd7[_0x49a3f8(0x47d)+_0x49a3f8(0x5f6)]=_0x1b0cfe[_0x49a3f8(0x457)];var _0x563132=_0x89702b[_0x49a3f8(0x3ea)+_0x49a3f8(0x2e9)+'ent'](_0x1b0cfe[_0x49a3f8(0x2d8)]);_0x563132[_0x49a3f8(0x47d)+_0x49a3f8(0x5f6)]='sk-la'+_0x49a3f8(0x542),_0x563132[_0x49a3f8(0x592)+_0x49a3f8(0x368)+'t']=_0x4a2fd3;if(_0x2cc920){var _0x508fd8=_0x335e4a['creat'+_0x49a3f8(0x2e9)+'ent'](_0x1b0cfe[_0x49a3f8(0x3cf)]);_0x508fd8['class'+'Name']=_0x1b0cfe[_0x49a3f8(0x3e2)],_0x508fd8[_0x49a3f8(0x592)+'onten'+'t']=_0x134804,_0x563132[_0x49a3f8(0x179)+'dChil'+'d'](_0x508fd8);}return _0x5cabd7['appen'+'d'](_0x563132,_0xc6a17a),_0x5cabd7;}})),_0x379ba7(_0x292e55['BYVna'])])];if(_0x292e55[_0x2a540d(0x197)](_0x1e44e1,_0x292e55['eyvGN'])){if(_0x292e55['jAanj'](_0x2a540d(0x102),_0x2a540d(0x2de)))return[_0x526f8e(_0x2a540d(0x63a)+'ck',_0x2a540d(0x494)+'\x20kour'+_0x2a540d(0x366)+_0x2a540d(0x335)+'er\x20sl'+_0x2a540d(0x5ff),_0x571bcc[_0x2a540d(0x431)+'ck'],_0xf7f983=>{var _0x143a0a=_0x2a540d;_0x571bcc[_0x143a0a(0x431)+'ck']=_0xf7f983,_0xce47ea['gRlhO'](_0x2d7827);},[_0x292e55[_0x2a540d(0x5fb)](_0x379ba7,_0x2a540d(0x10e)+_0x2a540d(0x5f5)+_0x2a540d(0x1f1)+_0x2a540d(0x17f)+'ad\x20wh'+_0x2a540d(0xeb)+'ggled'+'.')])];else _0x50b93e[_0x2a540d(0x201)+'e']=_0x41b340,_0x28963f();}return[_0x526f8e(_0x292e55[_0x2a540d(0xc1)],_0x2a540d(0x53f)+'\x20UWMK'+_0x2a540d(0x50b)+'rely\x20'+_0x2a540d(0x5b8)+'WASM\x20'+_0x2a540d(0x50f)+_0x2a540d(0x3b2)+_0x2a540d(0x1a0)+_0x2a540d(0x485)+_0x2a540d(0x3a4)+_0x2a540d(0x560)+_0x2a540d(0x436)+_0x2a540d(0x5a4),_0x571bcc['safeM'+'ode'],_0x43f448=>{var _0x167b2d=_0x2a540d;_0x571bcc['safeM'+_0x167b2d(0x5ea)]=_0x43f448,_0x557eea[_0x167b2d(0x554)](_0x2d7827),location[_0x167b2d(0x304)+'d']();},[_0x379ba7('Appli'+_0x2a540d(0x441)+_0x2a540d(0x17f)+'ad.\x20I'+'f\x20mat'+'ches\x20'+_0x2a540d(0x3f0)+_0x2a540d(0x383)+_0x2a540d(0x239)+_0x2a540d(0x176)+'he\x20fr'+_0x2a540d(0x2dc)+_0x2a540d(0x116)+'ok-re'+_0x2a540d(0x418)+'\x20—\x20te'+_0x2a540d(0x506)+_0x2a540d(0x537)+_0x2a540d(0x50f)+'-appl'+_0x2a540d(0xf8)+'ount.')]),_0x526f8e(_0x2a540d(0xcf)+'risk\x20'+_0x2a540d(0x463)+_0x2a540d(0x286),_0x2a540d(0x21f)+_0x2a540d(0xa7)+_0x2a540d(0x407)+_0x2a540d(0x12a)+_0x2a540d(0x49f)+_0x2a540d(0x125)+'oline'+_0x2a540d(0x467)+_0x2a540d(0x244)+_0x2a540d(0x4ed)+_0x2a540d(0xcd)+_0x2a540d(0x20f)+_0x2a540d(0x461)+_0x2a540d(0x456)+_0x2a540d(0x183)+'ault\x20'+_0x2a540d(0x5f1)+'ignat'+_0x2a540d(0x1e2)+'hat\x20d'+_0x2a540d(0x452)+_0x2a540d(0x5dc)+'tch\x20t'+'he\x20re'+_0x2a540d(0x19a)+'thod\x20'+_0x2a540d(0x41d)+_0x2a540d(0xff)+_0x2a540d(0x4a8)+_0x2a540d(0x4d5)+'natur'+'e\x20mis'+_0x2a540d(0x319)+'\x27\x20the'+'\x20mome'+_0x2a540d(0xa6)+'\x20is\x20c'+'alled'+'.\x20Tur'+'n\x20the'+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0x2a540d(0x2d5)+_0x2a540d(0x304)+_0x2a540d(0xed)+'d\x20see'+'\x20whic'+'h\x20one'+_0x2a540d(0x42a)+_0x2a540d(0x4b7)+_0x2a540d(0x2ec)+_0x2a540d(0x361)+'n.',_0x571bcc['hookG'+'od']||_0x571bcc[_0x2a540d(0x4a1)+_0x2a540d(0x60e)]||_0x571bcc[_0x2a540d(0x33d)+_0x2a540d(0x377)+'il']||_0x571bcc[_0x2a540d(0x553)+'aptur'+'e'],_0x3811ea=>{var _0x7ba88=_0x2a540d;_0x571bcc[_0x7ba88(0x4a1)+'od']=_0x3811ea,_0x571bcc['hookG'+_0x7ba88(0x60e)]=_0x3811ea,_0x571bcc[_0x7ba88(0x33d)+_0x7ba88(0x377)+'il']=_0x3811ea,_0x571bcc[_0x7ba88(0x553)+_0x7ba88(0x272)+'e']=_0x3811ea,_0x2d7827(),location[_0x7ba88(0x304)+'d']();},[_0x379ba7('Appli'+_0x2a540d(0x441)+'\x20relo'+'ad.'),_0x292e55[_0x2a540d(0x4f4)](_0x125ba2,_0x292e55['nRCKU'],null,_0x292e55[_0x2a540d(0x55c)](_0x29b6b0,_0x571bcc[_0x2a540d(0x4a1)+'od'],_0x5c3f8e=>{var _0x45549e=_0x2a540d;_0x571bcc[_0x45549e(0x4a1)+'od']=_0x5c3f8e,_0x2d7827();})),_0x125ba2(_0x292e55[_0x2a540d(0x3ef)],null,_0x29b6b0(_0x571bcc[_0x2a540d(0x4a1)+_0x2a540d(0x60e)],_0x47afc4=>{var _0x1e0c9c=_0x2a540d;_0x571bcc[_0x1e0c9c(0x4a1)+_0x1e0c9c(0x60e)]=_0x47afc4,_0x2d7827();})),_0x292e55['yPfMX'](_0x125ba2,_0x2a540d(0xe8)+_0x2a540d(0x362)+'Recoi'+_0x2a540d(0x8b)+'on.Ti'+_0x2a540d(0x40d),null,_0x292e55['AyKwM'](_0x29b6b0,_0x571bcc['hookN'+_0x2a540d(0x377)+'il'],_0x26f57d=>{var _0x14c50f=_0x2a540d;if(_0x14c50f(0x156)!==_0x557eea[_0x14c50f(0x210)]){var _0x2dac76=_0x5ecd8a['hookP'+'ostfi'+'x']({'typeName':_0x42560e,'methodName':_0x2cb296,'params':_0x4c9acf,'returnType':_0x471b72},_0x49b443);return _0x2dac76['enabl'+'ed']=_0x1d1dd3!==![],_0x31f783[_0x1582c0]=_0x2dac76,_0x230886['hooks'+'Total']++,_0x2dac76;}else _0x571bcc['hookN'+_0x14c50f(0x377)+'il']=_0x26f57d,_0x2d7827();})),_0x125ba2(_0x292e55['FAwWt'],_0x292e55[_0x2a540d(0x4e4)],_0x29b6b0(_0x571bcc[_0x2a540d(0x553)+'aptur'+'e'],_0x546e1a=>{var _0x2afa3a=_0x2a540d;_0x571bcc[_0x2afa3a(0x553)+'aptur'+'e']=_0x546e1a,_0x2d7827();}))]),_0x526f8e('ACTk\x20'+_0x2a540d(0x2fc)+'r',_0x2a540d(0x5ac)+_0x2a540d(0x34b)+'odeSt'+'age\x20d'+'etect'+_0x2a540d(0x44b)+_0x2a540d(0x9a)+_0x2a540d(0x22e)+_0x2a540d(0x19b)+_0x2a540d(0x1f8)+_0x2a540d(0x2ed)+_0x2a540d(0x235)+'\x20Keep'+_0x2a540d(0x47a),_0x571bcc[_0x2a540d(0x28d)+'ill'],_0x41d819=>{var _0x3623c4=_0x2a540d;_0x571bcc['actkK'+_0x3623c4(0xfb)]=_0x41d819,_0x2d7827();},[_0x379ba7(_0x292e55[_0x2a540d(0x202)],!![])]),_0x526f8e(_0x292e55[_0x2a540d(0x2e2)],_0x292e55['oDTNQ'],!![],null,[_0x125ba2(_0x292e55[_0x2a540d(0x5c5)],null,_0x584768(_0x2a540d(0x4dc),()=>{var _0x3b2592=_0x2a540d;_0x571bcc={..._0x19b1c3},_0x557eea['wDjLz'](_0x2d7827),location[_0x3b2592(0x304)+'d']();}))])];}var _0x26638a=null;function _0x43b263(_0x122830){var _0x1693b9=_0x560a0c,_0x48d18f={'ToyWW':_0xce47ea['tzwSa']};if('dvvlj'===_0x1693b9(0x450)){_0x11b01d=_0x122830;if(!_0x26638a){var _0x7ebf89=(_0x1693b9(0xf5)+_0x1693b9(0xd6)+'0')[_0x1693b9(0x24d)]('|'),_0x4a1c4d=0x422+-0xa5*-0x12+0xd4*-0x13;while(!![]){switch(_0x7ebf89[_0x4a1c4d++]){case'0':requestAnimationFrame(()=>_0x26638a[_0x1693b9(0x47d)+'List'][_0x1693b9(0x192)](_0x1693b9(0x45a)));continue;case'1':_0x3370dc[_0x1693b9(0x179)+'dChil'+'d'](_0x26638a);continue;case'2':var _0x47dcbc=document['creat'+'eElem'+_0x1693b9(0x129)](_0xce47ea[_0x1693b9(0x61c)]);continue;case'3':_0x26638a=_0x4b7949();continue;case'4':_0x47dcbc[_0x1693b9(0x592)+_0x1693b9(0x368)+'t']=_0x402750;continue;case'5':_0x3370dc['appen'+_0x1693b9(0x51e)+'d'](_0x47dcbc);continue;}break;}}_0x26638a['class'+'List']['toggl'+'e'](_0x1693b9(0x45a),_0x122830);}else _0x1c92bf(_0x5e82bc,_0x598001,_0x4e62f8,_0x48d18f[_0x1693b9(0x451)]);}function _0x3809b8(){var _0x507fd3=_0x560a0c;if(_0x292e55['anYet']!==_0x292e55['ukxjJ'])_0x43b263(!_0x11b01d);else return[_0x5dcb6e(_0xce47ea[_0x507fd3(0xda)],'Hides'+'\x20kour'+_0x507fd3(0x366)+_0x507fd3(0x335)+_0x507fd3(0x353)+_0x507fd3(0x5ff),_0x83380f['adblo'+'ck'],_0x10b5c5=>{_0x26b9e3['adblo'+'ck']=_0x10b5c5,_0x5b638f();},[_0x9d61f4(_0xce47ea[_0x507fd3(0x16c)])])];}function _0x4b7949(){var _0x238c28=_0x560a0c,_0x36563b=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+_0x238c28(0x129)](_0x238c28(0x63f));_0x36563b[_0x238c28(0x47d)+_0x238c28(0x5f6)]='mn-pa'+_0x238c28(0x34e);var _0x110dcc=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+_0x238c28(0x129)](_0x238c28(0x322));_0x110dcc['class'+'Name']='mn-si'+'de';var _0x155c27=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+'ent'](_0x238c28(0x63f));_0x155c27['class'+'Name']=_0xce47ea[_0x238c28(0x1f7)],_0x155c27['inner'+'HTML']=_0x238c28(0x5c7)+_0x238c28(0x27d)+'ox=\x220'+_0x238c28(0x49c)+'\x2024\x22\x20'+'class'+_0x238c28(0x123)+_0x238c28(0x5c3)+_0x238c28(0x438)+'<path'+_0x238c28(0x36e)+_0x238c28(0x48c)+'c-1.5'+_0x238c28(0x30a)+'4-4.5'+_0x238c28(0xb5)+_0x238c28(0x470)+_0x238c28(0x610)+'8-4.5'+'\x204-4.'+_0x238c28(0x53e)+_0x238c28(0x492)+_0x238c28(0xd2)+_0x238c28(0x440)+_0x238c28(0x3ad)+_0x238c28(0xf2)+'fill='+'\x22none'+_0x238c28(0x4e3)+_0x238c28(0x1d6)+_0x238c28(0x104)+'9d\x22\x20s'+_0x238c28(0xaf)+_0x238c28(0x53c)+_0x238c28(0x476)+'\x20stro'+_0x238c28(0x475)+_0x238c28(0x632)+_0x238c28(0x121)+_0x238c28(0xb0)+'troke'+'-line'+_0x238c28(0x472)+_0x238c28(0x22c)+_0x238c28(0x2c4)+_0x238c28(0x410)+_0x238c28(0x18f)+_0x238c28(0x112)+_0x238c28(0x20a)+_0x238c28(0x175)+'\x221.5\x22'+_0x238c28(0x29e)+_0x238c28(0x1f2)+'6b9d\x22'+'/></s'+'vg>',_0x110dcc[_0x238c28(0x179)+_0x238c28(0x51e)+'d'](_0x155c27);var _0x6b51f1=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+_0x238c28(0x129)](_0x238c28(0x63f));_0x6b51f1['class'+'Name']=_0xce47ea[_0x238c28(0xea)];var _0xa276ec=document['creat'+'eElem'+'ent'](_0xce47ea[_0x238c28(0x4ae)]);_0xa276ec[_0x238c28(0x47d)+_0x238c28(0x5f6)]=_0xce47ea[_0x238c28(0x1bc)];var _0x12ed6f=document[_0x238c28(0x3ea)+'eElem'+_0x238c28(0x129)](_0xce47ea['PHZJj']);_0x12ed6f[_0x238c28(0x47d)+'Name']=_0xce47ea['cMJjg'];var _0x3dbc73=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+_0x238c28(0x129)]('h2');_0x3dbc73[_0x238c28(0x47d)+'Name']='mn-h',_0x3dbc73[_0x238c28(0x592)+_0x238c28(0x368)+'t']=_0xce47ea[_0x238c28(0x25b)];var _0x1cfd43=document['creat'+_0x238c28(0x2e9)+'ent'](_0x238c28(0x39f));_0x1cfd43[_0x238c28(0x47d)+_0x238c28(0x5f6)]=_0x238c28(0x552)+'b',_0x1cfd43['textC'+_0x238c28(0x368)+'t']=_0xce47ea[_0x238c28(0x275)],_0x12ed6f[_0x238c28(0x179)+'d'](_0x3dbc73,_0x1cfd43);var _0x2551f6=document[_0x238c28(0x3ea)+_0x238c28(0x2e9)+'ent'](_0xce47ea[_0x238c28(0x538)]);_0x2551f6[_0x238c28(0x5fd)]='butto'+'n',_0x2551f6[_0x238c28(0x47d)+_0x238c28(0x5f6)]='mn-cl'+_0x238c28(0x27e),_0x2551f6[_0x238c28(0x89)]=_0x238c28(0x230),_0x2551f6[_0x238c28(0x16a)+'HTML']='<svg\x20'+_0x238c28(0x27d)+_0x238c28(0x536)+'\x200\x2024'+'\x2024\x22>'+_0x238c28(0x5cd)+_0x238c28(0x36e)+_0x238c28(0x27f)+'2\x2012M'+'18\x206\x20'+_0x238c28(0x1b8)+_0x238c28(0x55b)+_0x238c28(0x33a),_0x2551f6['oncli'+'ck']=()=>_0x43b263(![]),_0xa276ec['appen'+'d'](_0x12ed6f,_0x2551f6);var _0x5ef75e=document[_0x238c28(0x3ea)+'eElem'+_0x238c28(0x129)]('div');_0x5ef75e['class'+'Name']=_0x238c28(0x158)+'ls',_0x6b51f1[_0x238c28(0x179)+'d'](_0xa276ec,_0x5ef75e),_0x36563b[_0x238c28(0x179)+'d'](_0x110dcc,_0x6b51f1);var _0x230e20=new Map();for(var _0x347980 of _0x78eb93){var _0x573204=(_0x238c28(0x9e)+_0x238c28(0x5d9)+'1|5|0')[_0x238c28(0x24d)]('|'),_0x4ae0de=0x3*-0x883+0x98f*0x3+-0x324;while(!![]){switch(_0x573204[_0x4ae0de++]){case'0':_0x110dcc[_0x238c28(0x179)+'dChil'+'d'](_0x9daf73);continue;case'1':_0x9daf73[_0x238c28(0x41f)+'ck']=(_0x3b85f6=>()=>_0xe502bc(_0x3b85f6))(_0x347980['id']);continue;case'2':_0x9daf73[_0x238c28(0x16a)+'HTML']=_0xce47ea['MqSZC'](_0x238c28(0xc6)+'l>'+_0x347980[_0x238c28(0x3b3)],_0xce47ea[_0x238c28(0x3ba)]);continue;case'3':_0x9daf73['type']='butto'+'n';continue;case'4':var _0x9daf73=document['creat'+_0x238c28(0x2e9)+'ent']('butto'+'n');continue;case'5':_0x230e20[_0x238c28(0x285)](_0x347980['id'],_0x9daf73);continue;case'6':_0x9daf73['class'+'Name']=_0x238c28(0x448)+'b';continue;case'7':_0x9daf73['title']=_0x347980['label'];continue;}break;}}function _0xe502bc(_0x4dbe8f){var _0x41ad11=_0x238c28;_0x4bcde7['cat']=_0x4dbe8f,_0x556069();var _0x2bcab9=_0x78eb93['find'](_0x39911c=>_0x39911c['id']===_0x4dbe8f)||_0x78eb93[0x15*0x11+0x113a+-0x129f];_0x3dbc73['textC'+'onten'+'t']='Sakur'+_0x41ad11(0x17b)+'r\x20—\x20'+_0x2bcab9['label'];for(var [_0x1f2567,_0x382ef0]of _0x230e20)_0x382ef0[_0x41ad11(0x47d)+_0x41ad11(0x629)]['toggl'+'e'](_0xce47ea['tTgCk'],_0x1f2567===_0x4dbe8f);_0x5ef75e['repla'+_0x41ad11(0x294)+_0x41ad11(0xb4)](..._0xce47ea[_0x41ad11(0x419)](_0xab8715,_0x4dbe8f));}return _0xe502bc(_0x4bcde7['cat']||_0xce47ea['OmVvd']),_0xce47ea[_0x238c28(0x5e1)](setInterval,()=>{var _0x3dfd25=_0x238c28,_0x1b0b22={'MWOsY':function(_0x6aba9e,_0x391a9f){return _0x6aba9e!==_0x391a9f;},'hvPgZ':function(_0x5537d4){return _0x5537d4();}};if('euhSf'!==_0x3dfd25(0x1d7)){var _0x466ea1=new _0x2ed872(_0xe55e99)[_0x3dfd25(0x2b0)+_0x3dfd25(0x562)](_0x26d0fc,_0x1abf31);_0x758ac7['set'](_0x25442c,_0x1b0b22[_0x3dfd25(0x1bf)](_0x466ea1,_0x14289f)?_0x466ea1['val']():null);}else{if(!_0x11b01d)return;var _0xd3eec6=_0x5ef75e['child'+'ren'];for(var _0x120c0d=-0x2d2*-0x5+0x466+-0x1280;_0xce47ea['jkQTt'](_0x120c0d,_0xd3eec6['lengt'+'h']);_0x120c0d++){var _0x437020=_0xd3eec6[_0x120c0d][_0x3dfd25(0x1b4)+_0x3dfd25(0x5c4)+_0x3dfd25(0x603)](_0xce47ea['vgJfw']);_0x437020&&(_0x437020[_0x3dfd25(0x592)+_0x3dfd25(0x368)+'t'][_0x3dfd25(0x2bf)+'Of'](_0xce47ea[_0x3dfd25(0x48f)])===-0xb29+-0x1f83*0x1+-0x4*-0xaab||_0x437020['textC'+_0x3dfd25(0x368)+'t'][_0x3dfd25(0x2bf)+'Of']('SAFE')===0x1242+0xd5+0x3*-0x65d)&&(_0xce47ea['sPISR']('ggMAy','uNdiC')?_0x437020[_0x3dfd25(0x592)+_0x3dfd25(0x368)+'t']=_0x4c7631['safeM'+'ode']?_0x3dfd25(0x62b)+'MODE\x20'+'-\x20ove'+_0x3dfd25(0x389)+_0x3dfd25(0x359)+'\x20no\x20h'+_0x3dfd25(0x634)+_0x3dfd25(0x169)+'ad\x20to'+_0x3dfd25(0x32c)+')':_0x4c7631[_0x3dfd25(0x517)]?_0xce47ea[_0x3dfd25(0x2a8)](_0xce47ea[_0x3dfd25(0x2ff)](_0xce47ea['qvaYs'](_0xce47ea[_0x3dfd25(0x2d6)](_0x3dfd25(0x3fe)+'bound'+'\x20',_0x4c7631[_0x3dfd25(0x50f)+_0x3dfd25(0x396)]?_0xce47ea[_0x3dfd25(0x2e1)](_0x4c7631['hooks'+'Ok'],'/')+_0x4c7631['hooks'+_0x3dfd25(0x396)]+_0xce47ea[_0x3dfd25(0xd8)]:_0x3dfd25(0x41e)+_0x3dfd25(0x4de)+'med\x20('+'all\x20o'+_0x3dfd25(0x47e)),_0x3dfd25(0x31d)+'me\x20')+(_0x4c7631['gameL'+'oaded']?'loade'+'d':_0xce47ea['NDzNS'])+(_0x3dfd25(0x12f)+_0x3dfd25(0x1d5)+'\x20'),_0x4c7631['shoot'+_0x3dfd25(0x519)]?_0x3dfd25(0x612):'none'),'\x20|\x20mo'+_0x3dfd25(0xcc)+'t\x20')+(_0x4c7631['movem'+'ents']?_0x3dfd25(0x612):_0xce47ea[_0x3dfd25(0x4fb)])+(_0x4c7631[_0x3dfd25(0x602)+_0x3dfd25(0x14f)]?_0xce47ea['kBhzE'](_0xce47ea['BqRxG'],_0x4c7631['lastE'+_0x3dfd25(0x14f)]):''):'UWMK\x20'+_0x3dfd25(0x4ec)+'NG\x20-\x20'+_0x3dfd25(0x381)+_0x3dfd25(0x36a)+_0x3dfd25(0x188)+_0x3dfd25(0x2ca)+_0x3dfd25(0x613)+_0x3dfd25(0x2c9)+_0x3dfd25(0x303)+'ipt)':(_0x1a4a0d['noSpr'+_0x3dfd25(0x149)]=_0x569b5e,_0x1b0b22[_0x3dfd25(0x313)](_0x1eeb3c)));}}},-0x232*-0x9+-0x5*-0x27b+-0x1c41),_0x36563b;}var _0x402750=_0x560a0c(0x2d2)+_0x560a0c(0x358)+_0x560a0c(0xc3)+'l:\x20in'+_0x560a0c(0x191)+';\x20}\x0a\x20'+_0x560a0c(0x34c)+_0x560a0c(0x119)+'-sizi'+'ng:\x20b'+_0x560a0c(0x426)+'-box;'+'\x20marg'+_0x560a0c(0x2fa)+_0x560a0c(0x4ff)+_0x560a0c(0x3bb)+_0x560a0c(0x23c)+_0x560a0c(0x150)+'r\x22,\x20\x22'+'Segoe'+_0x560a0c(0x288)+_0x560a0c(0x4bb)+_0x560a0c(0x643)+_0x560a0c(0x11e)+'s-ser'+_0x560a0c(0x45f)+_0x560a0c(0x2d2)+_0x560a0c(0x2f9)+_0x560a0c(0x4b9)+_0x560a0c(0x320)+'ition'+_0x560a0c(0x3bd)+_0x560a0c(0x345)+_0x560a0c(0x1c3)+_0x560a0c(0x63d)+_0x560a0c(0x309)+_0x560a0c(0x2a4)+_0x560a0c(0x499)+_0x560a0c(0x495)+'idth:'+'\x20min('+'620px'+_0x560a0c(0xa2)+'c(100'+_0x560a0c(0x636)+'48px)'+_0x560a0c(0x535)+_0x560a0c(0x274)+_0x560a0c(0x633)+_0x560a0c(0x637)+_0x560a0c(0x4c3)+_0x560a0c(0x1e7)+_0x560a0c(0x2c5)+_0x560a0c(0x3da)+_0x560a0c(0x1a8)+';\x0a\x20\x20\x20'+_0x560a0c(0xb2)+_0x560a0c(0x5aa)+_0x560a0c(0x217)+_0x560a0c(0x2e5)+_0x560a0c(0x3e9)+'px;\x20p'+_0x560a0c(0x348)+'g:\x2010'+_0x560a0c(0x55a)+_0x560a0c(0x426)+_0x560a0c(0x3c1)+'us:\x202'+_0x560a0c(0x548)+_0x560a0c(0x205)+_0x560a0c(0x581)+_0x560a0c(0x49a)+_0x560a0c(0x42b)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x560a0c(0x35c)+_0x560a0c(0x3d6)+_0x560a0c(0x5c6)+'24,17'+_0x560a0c(0x5df)+_0x560a0c(0x439)+_0x560a0c(0x22d)+_0x560a0c(0x5da)+_0x560a0c(0x4f1)+':\x20blu'+_0x560a0c(0x3d3)+'x)\x20sa'+'turat'+_0x560a0c(0x194)+_0x560a0c(0x430)+_0x560a0c(0x45e)+_0x560a0c(0x391)+_0x560a0c(0x163)+_0x560a0c(0x398)+_0x560a0c(0x385)+_0x560a0c(0x5be)+_0x560a0c(0x10d)+_0x560a0c(0x81)+'ate(1'+'50%);'+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x560a0c(0x573)+'ow:\x200'+_0x560a0c(0x318)+_0x560a0c(0xc9)+'gba(2'+'55,25'+_0x560a0c(0x2b4)+_0x560a0c(0x5fa)+_0x560a0c(0x2be)+_0x560a0c(0x596)+'1px\x200'+_0x560a0c(0x173)+'(255,'+_0x560a0c(0x455)+_0x560a0c(0x34d)+_0x560a0c(0x3cc)+'\x2030px'+_0x560a0c(0x357)+_0x560a0c(0x173)+'(0,0,'+_0x560a0c(0x62c)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x560a0c(0x52b)+'y:\x200;'+'\x20tran'+_0x560a0c(0x628)+_0x560a0c(0x23f)+_0x560a0c(0x35b)+'eY(18'+'px);\x20'+_0x560a0c(0x205)+'er-ev'+'ents:'+'\x20none'+_0x560a0c(0x405)+'nsiti'+'on:\x20o'+'pacit'+'y\x20.35'+_0x560a0c(0x434)+_0x560a0c(0x1b0)+_0x560a0c(0x2c1)+'rm\x20.4'+_0x560a0c(0x4fc)+'bic-b'+_0x560a0c(0x3d2)+_0x560a0c(0xe1)+'1,.36'+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x560a0c(0x232)+'r:\x20#f'+'6eef2'+_0x560a0c(0x4ff)+_0x560a0c(0x137)+_0x560a0c(0x3ab)+_0x560a0c(0x62e)+_0x560a0c(0x2d2)+'.mn-p'+'anel.'+'shown'+'\x20{\x20op'+_0x560a0c(0x26d)+':\x201;\x20'+_0x560a0c(0x4ef)+'form:'+_0x560a0c(0x330)+';\x20poi'+'nter-'+_0x560a0c(0x1ef)+_0x560a0c(0x489)+_0x560a0c(0x630)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x560a0c(0x26a)+_0x560a0c(0x60a)+'lay:\x20'+'flex;'+'\x20flex'+_0x560a0c(0x317)+_0x560a0c(0x459)+':\x20col'+_0x560a0c(0x26e)+_0x560a0c(0x3c0)+_0x560a0c(0x4ce)+_0x560a0c(0x589)+_0x560a0c(0x221)+'\x20gap:'+_0x560a0c(0x3a7)+'\x20widt'+'h:\x2062'+_0x560a0c(0x148)+'lex:\x20'+_0x560a0c(0x334)+_0x560a0c(0x252)+'ing:\x20'+_0x560a0c(0x15c)+('0;\x20bo'+'rder-'+_0x560a0c(0x51a)+'s:\x2016'+'px;\x0a\x20'+_0x560a0c(0x48e)+'backg'+'round'+_0x560a0c(0x390)+'a(255'+_0x560a0c(0x4ac)+'255,.'+_0x560a0c(0x5e7)+'\x20box-'+_0x560a0c(0x1dc)+'w:\x20in'+'set\x200'+_0x560a0c(0x318)+_0x560a0c(0xc9)+'gba(2'+'55,25'+_0x560a0c(0x2b4)+_0x560a0c(0x512)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o\x20{\x20d'+'ispla'+_0x560a0c(0x135)+'id;\x20p'+_0x560a0c(0x615)+_0x560a0c(0x504)+':\x20cen'+_0x560a0c(0x526)+_0x560a0c(0x301)+_0x560a0c(0x2ba)+_0x560a0c(0x4b0)+'ight:'+_0x560a0c(0x4d2)+_0x560a0c(0x414)+_0x560a0c(0x540)+_0x560a0c(0x11a)+_0x560a0c(0x243)+'\x20{\x20wi'+'dth:\x20'+'25px;'+_0x560a0c(0x577)+_0x560a0c(0x63d)+_0x560a0c(0x4f7)+'overf'+_0x560a0c(0x311)+_0x560a0c(0x605)+_0x560a0c(0x22f)+'ilter'+_0x560a0c(0x1d3)+_0x560a0c(0x46d)+_0x560a0c(0x4da)+_0x560a0c(0x3a1)+_0x560a0c(0x595)+_0x560a0c(0x178)+_0x560a0c(0x117)+_0x560a0c(0x2d7)+'8));\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+'\x20disp'+'lay:\x20'+'flex;'+_0x560a0c(0x487)+'n-ite'+_0x560a0c(0x241)+'enter'+_0x560a0c(0x515)+'tify-'+_0x560a0c(0x3a8)+_0x560a0c(0x141)+_0x560a0c(0x16e)+';\x20wid'+_0x560a0c(0x22b)+_0x560a0c(0x548)+_0x560a0c(0x3d0)+'t:\x2034'+_0x560a0c(0x55a)+_0x560a0c(0x426)+':\x200;\x20'+'borde'+_0x560a0c(0x1b7)+'ius:\x20'+'10px;'+'\x0a\x20\x20\x20\x20'+_0x560a0c(0x92)+_0x560a0c(0x336)+_0x560a0c(0x3e5)+_0x560a0c(0x3ca)+'arent'+_0x560a0c(0x28c)+_0x560a0c(0x1f0)+_0x560a0c(0x2b7)+_0x560a0c(0x3dc)+'8,242'+',.4);'+'\x20curs'+'or:\x20p'+_0x560a0c(0x5a2)+'r;\x20fo'+_0x560a0c(0x3c7)+_0x560a0c(0x4b3)+_0x560a0c(0x91)+_0x560a0c(0x446)+'weigh'+_0x560a0c(0x265)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x560a0c(0x448)+'b:hov'+_0x560a0c(0x576)+'color'+':\x20rgb'+'a(246'+_0x560a0c(0x447)+_0x560a0c(0x18b)+_0x560a0c(0x182)+_0x560a0c(0x2d2)+_0x560a0c(0x4bc)+_0x560a0c(0x350)+_0x560a0c(0x111)+_0x560a0c(0x338)+'or:\x20#'+'ff6b9'+_0x560a0c(0x299)+_0x560a0c(0x35c)+_0x560a0c(0x3d6)+_0x560a0c(0x5c6)+'255,1'+_0x560a0c(0x1c4)+'7,.1)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x560a0c(0x144)+'n\x20{\x20f'+'lex:\x20'+_0x560a0c(0x569)+_0x560a0c(0x307)+_0x560a0c(0x40b)+';\x20dis'+_0x560a0c(0x281)+'\x20flex'+_0x560a0c(0x437)+'x-dir'+_0x560a0c(0x273)+_0x560a0c(0x349)+_0x560a0c(0x4a5)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x560a0c(0x42f)+_0x560a0c(0x604)+'play:'+_0x560a0c(0x453)+';\x20ali'+_0x560a0c(0x47b)+_0x560a0c(0x539)+_0x560a0c(0x174)+'r;\x20ga'+_0x560a0c(0x579)+'px;\x20p'+'addin'+'g:\x206p'+_0x560a0c(0x1c1)+_0x560a0c(0x2a7)+';\x20use'+_0x560a0c(0x29d)+_0x560a0c(0x32e)+'none;'+_0x560a0c(0x4a6)+_0x560a0c(0x3e4)+_0x560a0c(0x606)+'es\x20{\x20'+_0x560a0c(0x364)+_0x560a0c(0x38c)+'in-wi'+_0x560a0c(0x2dd)+_0x560a0c(0x493)+_0x560a0c(0x41a)+_0x560a0c(0x283)+_0x560a0c(0x314)+_0x560a0c(0x137)+'e:\x2017'+_0x560a0c(0x148)+_0x560a0c(0x8e)+'eight'+_0x560a0c(0x2ab)+';\x20}\x0a\x20'+_0x560a0c(0x540)+'n-sub'+'\x20{\x20fo'+_0x560a0c(0x3c7)+'ze:\x201'+_0x560a0c(0x3e6)+'opaci')+(_0x560a0c(0x1f5)+'4;\x20}\x0a'+_0x560a0c(0x41a)+'mn-cl'+'ose\x20{'+_0x560a0c(0x60a)+'lay:\x20'+'grid;'+_0x560a0c(0x138)+'e-ite'+'ms:\x20c'+_0x560a0c(0x16e)+';\x20wid'+'th:\x202'+_0x560a0c(0x3c4)+'heigh'+_0x560a0c(0x3d4)+'px;\x20b'+_0x560a0c(0x426)+':\x200;\x20'+_0x560a0c(0x4c0)+'r-rad'+_0x560a0c(0x249)+'8px;\x20'+_0x560a0c(0x38b)+_0x560a0c(0x520)+_0x560a0c(0x23f)+_0x560a0c(0x14e)+'ent;\x20'+'color'+_0x560a0c(0x331)+'erit;'+'\x20opac'+_0x560a0c(0x557)+'.45;\x20'+_0x560a0c(0x19c)+_0x560a0c(0x346)+'inter'+_0x560a0c(0x414)+_0x560a0c(0x540)+_0x560a0c(0x522)+_0x560a0c(0x645)+_0x560a0c(0x544)+'\x20opac'+_0x560a0c(0x557)+_0x560a0c(0x5a7)+'ckgro'+_0x560a0c(0x3d6)+_0x560a0c(0x5c6)+'255,2'+'55,25'+_0x560a0c(0x13a)+_0x560a0c(0x534)+'\x20\x20\x20\x20.'+'mn-cl'+_0x560a0c(0x370)+_0x560a0c(0x54d)+_0x560a0c(0x301)+':\x2014p'+_0x560a0c(0x4b0)+'ight:'+_0x560a0c(0x5cb)+';\x20fil'+_0x560a0c(0x21a)+_0x560a0c(0x5ed)+'troke'+_0x560a0c(0x5f9)+_0x560a0c(0x1e5)+_0x560a0c(0x1eb)+_0x560a0c(0x2a1)+'ke-wi'+_0x560a0c(0x2dd)+_0x560a0c(0x44c)+'roke-'+_0x560a0c(0x5c2)+_0x560a0c(0x2e4)+'ound;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+_0x560a0c(0x186)+'ex:\x201'+';\x20min'+'-heig'+'ht:\x200'+_0x560a0c(0x40f)+'rflow'+'-y:\x20a'+'uto;\x20'+_0x560a0c(0x245)+'ay:\x20g'+_0x560a0c(0x297)+_0x560a0c(0x427)+'templ'+'ate-c'+_0x560a0c(0x161)+_0x560a0c(0x105)+_0x560a0c(0x5e8)+'auto-'+_0x560a0c(0x118)+_0x560a0c(0x29f)+_0x560a0c(0x93)+_0x560a0c(0x340)+_0x560a0c(0x35f)+';\x20ali'+_0x560a0c(0x47b)+_0x560a0c(0x539)+'start'+_0x560a0c(0x88)+'gn-co'+_0x560a0c(0x16b)+':\x20sta'+'rt;\x20g'+_0x560a0c(0x541)+'0px;\x20'+'paddi'+_0x560a0c(0x1b6)+_0x560a0c(0x2d1)+_0x560a0c(0x9f)+_0x560a0c(0x414)+'\x20\x20\x20.m'+_0x560a0c(0x127)+'s::-w'+_0x560a0c(0x225)+_0x560a0c(0x2ef)+'llbar'+'\x20{\x20wi'+_0x560a0c(0x2dd)+_0x560a0c(0x3c4)+_0x560a0c(0x190)+_0x560a0c(0x56e)+'cols:'+':-web'+_0x560a0c(0x37e)+_0x560a0c(0x432)+_0x560a0c(0x306)+'humb\x20'+'{\x20bac'+_0x560a0c(0x336)+_0x560a0c(0x185)+_0x560a0c(0x2b7)+'55,25'+_0x560a0c(0x2b4)+_0x560a0c(0x454)+_0x560a0c(0x39a)+_0x560a0c(0x2aa)+_0x560a0c(0xa3)+_0x560a0c(0x33c)+_0x560a0c(0x414)+_0x560a0c(0xc7)+'k-car'+_0x560a0c(0x255)+'order'+_0x560a0c(0x3c1)+'us:\x201'+_0x560a0c(0x548)+'backg'+'round'+_0x560a0c(0x390)+'a(255'+',255,'+_0x560a0c(0x267)+'025);'+_0x560a0c(0x90)+_0x560a0c(0x1dc)+'w:\x20in'+_0x560a0c(0x3a3)+'\x200\x200\x20'+_0x560a0c(0xc9)+_0x560a0c(0x2b7)+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x560a0c(0xc7)+'k-car'+'d.on\x20'+_0x560a0c(0x5b0)+_0x560a0c(0x336)+_0x560a0c(0x185)+_0x560a0c(0x2b7)+'55,25'+_0x560a0c(0x2b4)+_0x560a0c(0x608)+_0x560a0c(0x3b7)+_0x560a0c(0x573)+'ow:\x20i'+_0x560a0c(0x4df)+'0\x200\x200'+_0x560a0c(0x1cc)+'rgba('+'255,1'+_0x560a0c(0x1c4)+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x560a0c(0x1a9)+'rd-he'+_0x560a0c(0x42e)+_0x560a0c(0x245))+(_0x560a0c(0x14d)+_0x560a0c(0x1e4)+'align'+_0x560a0c(0x4ce)+'s:\x20ce'+_0x560a0c(0x221)+_0x560a0c(0x1bd)+_0x560a0c(0x371)+_0x560a0c(0x252)+'ing:\x20'+'11px\x20'+_0x560a0c(0x208)+_0x560a0c(0x4a6)+'\x20\x20.sk'+'-card'+'-titl'+_0x560a0c(0x4bd)+_0x560a0c(0x2c0)+'1;\x20mi'+_0x560a0c(0x307)+'th:\x200'+_0x560a0c(0x414)+'\x20\x20\x20.s'+_0x560a0c(0x2a9)+_0x560a0c(0x94)+'le\x20st'+_0x560a0c(0x15f)+'{\x20fon'+'t-siz'+_0x560a0c(0x3ab)+'px;\x20f'+_0x560a0c(0x8e)+_0x560a0c(0x3f4)+_0x560a0c(0x3b8)+';\x20col'+'or:\x20r'+'gba(2'+_0x560a0c(0x3dc)+_0x560a0c(0x5e3)+_0x560a0c(0x1e9)+';\x20}\x0a\x20'+_0x560a0c(0xc7)+'k-car'+'d.on\x20'+_0x560a0c(0x23e)+_0x560a0c(0x61f)+'itle\x20'+_0x560a0c(0x254)+_0x560a0c(0x2f1)+_0x560a0c(0x1cb)+_0x560a0c(0x53b)+_0x560a0c(0xa4)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x560a0c(0x3bc)+_0x560a0c(0x19e)+_0x560a0c(0x59f)+_0x560a0c(0x3c8)+_0x560a0c(0x324)+_0x560a0c(0x91)+_0x560a0c(0x190)+_0x560a0c(0x251)+_0x560a0c(0x28b)+'\x20{\x20fo'+'nt-si'+_0x560a0c(0x4b3)+'1px;\x20'+_0x560a0c(0x25e)+_0x560a0c(0x1f5)+_0x560a0c(0x20e)+_0x560a0c(0x5db)+'botto'+_0x560a0c(0x5af)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x560a0c(0x640)+'l\x20{\x20d'+_0x560a0c(0x1fb)+_0x560a0c(0x5b6)+'ex;\x20a'+_0x560a0c(0xaa)+_0x560a0c(0x504)+_0x560a0c(0x53d)+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x560a0c(0x15b)+_0x560a0c(0x1a7)+'px\x200;'+_0x560a0c(0x425)+'-size'+_0x560a0c(0x433)+_0x560a0c(0x4f7)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x560a0c(0x3b3)+_0x560a0c(0x186)+'ex:\x201'+_0x560a0c(0x28c)+'or:\x20r'+_0x560a0c(0x2b7)+_0x560a0c(0x3dc)+_0x560a0c(0x5e3)+',.75)'+';\x20}\x0a\x20'+_0x560a0c(0xc7)+_0x560a0c(0x56c)+_0x560a0c(0x206)+_0x560a0c(0x1fb)+_0x560a0c(0x582)+_0x560a0c(0x1e8)+'font-'+_0x560a0c(0x4b2)+_0x560a0c(0x228)+_0x560a0c(0x511)+_0x560a0c(0x222)+_0x560a0c(0x3cb)+_0x560a0c(0x190)+'\x20.sk-'+'switc'+_0x560a0c(0x24b)+_0x560a0c(0x571)+'on:\x20r'+_0x560a0c(0x1ba)+'ve;\x20w'+_0x560a0c(0x2bb)+_0x560a0c(0x4a2)+';\x20hei'+_0x560a0c(0x633)+_0x560a0c(0x443)+_0x560a0c(0x1ce)+_0x560a0c(0x46c)+';\x20bor'+'der-r'+_0x560a0c(0xa3)+':\x2099p'+_0x560a0c(0x4fd)+'ckgro'+_0x560a0c(0x3d6)+_0x560a0c(0x5c6)+_0x560a0c(0x455)+_0x560a0c(0x521)+_0x560a0c(0x471)+_0x560a0c(0x502)+_0x560a0c(0x442)+'\x20poin'+_0x560a0c(0x526)+_0x560a0c(0x364)+_0x560a0c(0x330)+_0x560a0c(0x414)+_0x560a0c(0xc7)+'k-swi'+_0x560a0c(0x43c)+_0x560a0c(0x122)+'\x20{\x20co'+_0x560a0c(0x16b)+_0x560a0c(0xce)+_0x560a0c(0x4c8)+'tion:'+_0x560a0c(0x5f7)+'lute;'+'\x20top:'+_0x560a0c(0x647)+'\x20left'+':\x203px'+';\x20wid'+_0x560a0c(0x342)+_0x560a0c(0x413)+_0x560a0c(0x3f4)+_0x560a0c(0x616)+';\x20bor'+_0x560a0c(0x2aa)+_0x560a0c(0xa3)+_0x560a0c(0x293)+_0x560a0c(0x473)+_0x560a0c(0x336)+_0x560a0c(0x185)+_0x560a0c(0x2b7)+_0x560a0c(0x521)+_0x560a0c(0x2b4)+',.25)'+_0x560a0c(0x405)+_0x560a0c(0x21d)+_0x560a0c(0x474)+_0x560a0c(0x3df)+'2s,\x20b'+_0x560a0c(0x35d)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+_0x560a0c(0x251)+'switc'+'h[ari'+'a-che'+_0x560a0c(0x1ed)+_0x560a0c(0x2b8)+_0x560a0c(0x5a3)+'backg'+_0x560a0c(0x520)+':\x20rgb')+(_0x560a0c(0x178)+',107,'+'157,.'+'25);\x20'+'}\x0a\x20\x20\x20'+_0x560a0c(0x251)+_0x560a0c(0x463)+'h[ari'+_0x560a0c(0x8d)+_0x560a0c(0x1ed)+_0x560a0c(0x2b8)+_0x560a0c(0x213)+'fter\x20'+_0x560a0c(0x3f5)+'t:\x2015'+_0x560a0c(0x55a)+_0x560a0c(0x35d)+_0x560a0c(0x108)+'\x20#ff6'+_0x560a0c(0x113)+_0x560a0c(0x190)+_0x560a0c(0x251)+'field'+_0x560a0c(0x550)+'ckgro'+_0x560a0c(0x3d6)+'rgba('+_0x560a0c(0x455)+'55,25'+_0x560a0c(0x233)+'5);\x20b'+_0x560a0c(0x426)+':\x200;\x20'+'borde'+_0x560a0c(0x1b7)+'ius:\x20'+'6px;\x20'+_0x560a0c(0x99)+_0x560a0c(0x39e)+'eef2;'+'\x20padd'+'ing:\x20'+'6px\x209'+_0x560a0c(0x148)+_0x560a0c(0x146)+_0x560a0c(0x445)+'11.5p'+_0x560a0c(0x200)+_0x560a0c(0x3c6)+':\x20non'+_0x560a0c(0x37b)+_0x560a0c(0x2ad)+_0x560a0c(0x25a)+'inset'+_0x560a0c(0x318)+'0\x201px'+_0x560a0c(0x173)+'(255,'+'255,2'+_0x560a0c(0x34d)+_0x560a0c(0x1aa)+'\x0a\x20\x20\x20\x20'+_0x560a0c(0xc5)+_0x560a0c(0x2c6)+_0x560a0c(0x30d)+_0x560a0c(0x5b9)+_0x560a0c(0x35d)+_0x560a0c(0x108)+_0x560a0c(0x5a0)+_0x560a0c(0x38f)+_0x560a0c(0x190)+_0x560a0c(0x251)+_0x560a0c(0x3aa)+_0x560a0c(0x155)+'splay'+':\x20fle'+_0x560a0c(0x2e3)+_0x560a0c(0x211)+_0x560a0c(0x4f9)+'\x20cent'+_0x560a0c(0x1c9)+_0x560a0c(0x549)+_0x560a0c(0x62e)+_0x560a0c(0x2d2)+_0x560a0c(0x258)+_0x560a0c(0x21c)+_0x560a0c(0xb8)+'ebkit'+_0x560a0c(0x574)+'aranc'+_0x560a0c(0x4e7)+_0x560a0c(0x2ac)+'ppear'+_0x560a0c(0x240)+_0x560a0c(0x330)+';\x20wid'+_0x560a0c(0x2cd)+_0x560a0c(0x91)+'heigh'+_0x560a0c(0x5ca)+_0x560a0c(0x4fd)+'ckgro'+'und:\x20'+_0x560a0c(0x4ef)+'paren'+'t;\x20}\x0a'+_0x560a0c(0x41a)+_0x560a0c(0xac)+'ider:'+_0x560a0c(0x257)+_0x560a0c(0x37e)+_0x560a0c(0x21c)+_0x560a0c(0x1cf)+_0x560a0c(0x31b)+_0x560a0c(0x1b1)+_0x560a0c(0x408)+_0x560a0c(0x3f3)+_0x560a0c(0x5ad)+'\x20bord'+'er-ra'+_0x560a0c(0x207)+_0x560a0c(0x5ad)+_0x560a0c(0x253)+_0x560a0c(0x363)+'d:\x20li'+'near-'+_0x560a0c(0x1a1)+_0x560a0c(0x298)+_0x560a0c(0x480)+'d,\x20#f'+'f6b9d'+')\x200\x200'+_0x560a0c(0x1df)+_0x560a0c(0x1b3)+_0x560a0c(0x23d)+_0x560a0c(0x3b1)+_0x560a0c(0x43a)+'repea'+_0x560a0c(0x5d1)+'ba(25'+'5,255'+',255,'+_0x560a0c(0x3f7)+'\x20}\x0a\x20\x20'+_0x560a0c(0x61d)+_0x560a0c(0xa1)+_0x560a0c(0x4f3)+_0x560a0c(0x45e)+_0x560a0c(0x3b0)+_0x560a0c(0x625)+'humb\x20'+_0x560a0c(0x2d0)+_0x560a0c(0x614)+'appea'+'rance'+':\x20non'+_0x560a0c(0xb6)+_0x560a0c(0x2dd)+'6px;\x20'+_0x560a0c(0x3d0)+'t:\x206p'+'x;\x20ma'+_0x560a0c(0x5db)+_0x560a0c(0x416)+_0x560a0c(0x2a3)+'\x20bord'+_0x560a0c(0x15e)+_0x560a0c(0x207)+_0x560a0c(0x3e0)+'\x20back'+_0x560a0c(0x363)+_0x560a0c(0xdc)+'f6b9d'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-val'+_0x560a0c(0x1a5)+_0x560a0c(0x3c7)+_0x560a0c(0x4b3)+_0x560a0c(0x3e6)+_0x560a0c(0x446)+_0x560a0c(0x483)+'t:\x2060'+_0x560a0c(0x5f3)+_0x560a0c(0x307)+'th:\x202'+'8px;\x20'+'text-'+'align'+_0x560a0c(0x4c4)+_0x560a0c(0x3d5)+'olor:'+'\x20rgba'+'(246,'+'238,2'+_0x560a0c(0x3c5)+_0x560a0c(0x534)+_0x560a0c(0x41a)+'sk-co'+_0x560a0c(0x151))+('\x20widt'+_0x560a0c(0x2ae)+_0x560a0c(0x413)+'eight'+_0x560a0c(0x31a)+'x;\x20bo'+'rder:'+_0x560a0c(0x2df)+_0x560a0c(0x426)+_0x560a0c(0x3c1)+'us:\x206'+_0x560a0c(0x55a)+'ackgr'+_0x560a0c(0x108)+'\x20none'+_0x560a0c(0x3dd)+_0x560a0c(0x1d9)+_0x560a0c(0x4d7)+_0x560a0c(0x491)+':\x20poi'+'nter;'+'\x20}\x0a\x20\x20'+_0x560a0c(0x61d)+'-note'+_0x560a0c(0x1a5)+_0x560a0c(0x3c7)+_0x560a0c(0x4b3)+'1px;\x20'+_0x560a0c(0x99)+_0x560a0c(0x390)+_0x560a0c(0x2f7)+_0x560a0c(0x447)+'242,.'+_0x560a0c(0x234)+_0x560a0c(0x348)+_0x560a0c(0x59c)+_0x560a0c(0x289)+_0x560a0c(0x190)+_0x560a0c(0x251)+_0x560a0c(0x85)+_0x560a0c(0x4d0)+'\x20colo'+_0x560a0c(0x4bf)+'f7a93'+_0x560a0c(0x414)+'\x20\x20\x20.s'+_0x560a0c(0x33f)+_0x560a0c(0xc3)+_0x560a0c(0x2fd)+'elf:\x20'+_0x560a0c(0x5c9)+'start'+';\x20bor'+_0x560a0c(0xf3)+'0;\x20bo'+_0x560a0c(0xf6)+_0x560a0c(0x51a)+'s:\x208p'+_0x560a0c(0x2b5)+'dding'+':\x208px'+'\x2016px'+_0x560a0c(0x473)+_0x560a0c(0x336)+_0x560a0c(0x482)+_0x560a0c(0x480)+'d;\x20co'+_0x560a0c(0x500)+'#fff;'+'\x20font'+'-size'+_0x560a0c(0x433)+_0x560a0c(0x4f7)+_0x560a0c(0x446)+'weigh'+_0x560a0c(0x265)+_0x560a0c(0x57f)+_0x560a0c(0x442)+_0x560a0c(0x114)+_0x560a0c(0x526)+_0x560a0c(0x190)+_0x560a0c(0x251)+_0x560a0c(0x4c2)+'over\x20'+_0x560a0c(0x379)+'ter:\x20'+'brigh'+'tness'+'(1.1)'+';\x20}\x0a\x20'+_0x560a0c(0x86));window['addEv'+_0x560a0c(0x4e6)+_0x560a0c(0x2b1)+'r'](_0x560a0c(0x530)+'wn',_0x21969f=>{var _0x2aa067=_0x560a0c;_0x21969f['code']==='Inser'+'t'&&(_0x21969f[_0x2aa067(0x3b6)+'ntDef'+_0x2aa067(0x4f0)](),_0x292e55['iKZpG'](_0x3809b8));},!![]);var _0x2f15b6=document['creat'+'eElem'+_0x560a0c(0x129)](_0x560a0c(0x63f));_0x2f15b6[_0x560a0c(0xe3)][_0x560a0c(0x3af)+'xt']=_0x560a0c(0x46e)+'ion:f'+'ixed;'+'top:1'+_0x560a0c(0x481)+'ight:'+_0x560a0c(0x208)+_0x560a0c(0x4cc)+_0x560a0c(0x2bc)+'47483'+_0x560a0c(0x5d6)+_0x560a0c(0x491)+_0x560a0c(0x566)+_0x560a0c(0x310)+_0x560a0c(0x2bb)+_0x560a0c(0x32a)+'heigh'+'t:26p'+'x;opa'+_0x560a0c(0x222)+_0x560a0c(0x57e)+'ransi'+_0x560a0c(0x5e2)+_0x560a0c(0x25e)+_0x560a0c(0x420)+_0x560a0c(0x518)+'inter'+'-even'+_0x560a0c(0x609)+'to;fi'+_0x560a0c(0x2c8)+_0x560a0c(0x417)+_0x560a0c(0x1dc)+_0x560a0c(0x198)+'\x204px\x20'+_0x560a0c(0x5c6)+_0x560a0c(0x20c)+_0x560a0c(0x1c4)+_0x560a0c(0x639)+'))',_0x2f15b6[_0x560a0c(0x16a)+'HTML']='<svg\x20'+_0x560a0c(0x27d)+_0x560a0c(0x536)+_0x560a0c(0x49c)+'\x2024\x22>'+_0x560a0c(0x5cd)+'\x20d=\x22M'+_0x560a0c(0x48c)+'c-1.5'+'-2.5-'+'4-4.5'+'-4-7.'+_0x560a0c(0x470)+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x560a0c(0x53e)+_0x560a0c(0x492)+_0x560a0c(0xd2)+'-2.5\x20'+_0x560a0c(0x3ad)+_0x560a0c(0xf2)+_0x560a0c(0x17d)+_0x560a0c(0x477)+'\x22\x20str'+_0x560a0c(0x1d6)+_0x560a0c(0x104)+_0x560a0c(0x33b)+_0x560a0c(0xaf)+_0x560a0c(0x53c)+'h=\x222\x22'+_0x560a0c(0x2a1)+'ke-li'+_0x560a0c(0x632)+_0x560a0c(0x121)+_0x560a0c(0xb0)+'troke'+_0x560a0c(0x354)+_0x560a0c(0x472)+'\x22roun'+_0x560a0c(0x2c4)+_0x560a0c(0x410)+'e\x20cx='+_0x560a0c(0x112)+_0x560a0c(0x20a)+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+_0x560a0c(0x1f2)+_0x560a0c(0x292)+'/></s'+_0x560a0c(0x33a),_0x2f15b6[_0x560a0c(0x89)]=_0x560a0c(0x588)+_0x560a0c(0x17b)+'r',_0x2f15b6['onmou'+'seent'+'er']=()=>_0x2f15b6[_0x560a0c(0xe3)]['opaci'+'ty']='1',_0x2f15b6[_0x560a0c(0x339)+_0x560a0c(0x429)+'ve']=()=>_0x2f15b6[_0x560a0c(0xe3)][_0x560a0c(0x25e)+'ty']=_0x560a0c(0x256),_0x2f15b6['oncli'+'ck']=_0x59533f=>{var _0x18b3f3=_0x560a0c;_0x59533f['stopP'+'ropag'+_0x18b3f3(0x3d9)](),_0x3809b8();},document['body'][_0x560a0c(0x179)+'dChil'+'d'](_0x2f15b6),_0x346694(),_0x292e55[_0x560a0c(0x59d)](requestAnimationFrame,_0x536c60),console['log']('[saku'+_0x560a0c(0x4b6)+_0x560a0c(0x4b1)+_0x560a0c(0x5b2)+_0x560a0c(0x26b)+'\x20UWMK'+':',_0x4c7631[_0x560a0c(0x517)]);});})()));function _0x567d(){var _0x5cca67=['Dgv4Dem','uJOG','z2DSzwq','EcbYz2i','zxqGmca','CI51As4','wvvYBKG','vxbUtuO','zxvXAMi','yMX1CG','zZOGmNa','BLnoB1i','AuXArxm','zgrPBMC','icmYmJe','Cg9Uj3m','B2LUDgu','iL0GEYa','yxj0lG','ms4XlJa','zKvVrge','mtSGyMe','y2vZlG','AxrLiee','C3bSyxK','CM9Rzxm','rgLZywi','idjWEdS','BgLUzvC','BtOGnNa','EYbIywm','sgvPz2G','zw51ihi','re9nq28','sMzlrNu','v2LKDgG','EtOGzMW','ywX0Ac4','4Ocuig5Via','BIb7igi','Bw4TDg8','ywXSig8','zhv0zwe','CLrnEhu','BhvYkdi','zMLUza','yujcuNm','DhmGCgW','BgLUzwm','Bg9NBY0','u2vSzwm','BhzsDee','CMDIysG','phn2zYa','DgvYigm','zMXLEc0','DdOGoha','ide0ChG','Bw9fEha','phbHDgG','C2STBwi','mty3mLjAB2XZtq','A1vhC1m','DcWGCMC','lMrSBa','rMzrr2y','C2v0x3q','CIbNyw0','nJq2o2m','tNbhre8','D1jfsxu','FdD8mNW','CM9Wlwy','CMDPBI0','B3qGBwe','z0Xtvha','y3jLzw4','ldiXlc4','igXPBwK','uufVzLi','DgLVBJO','ocWYndi','BxbVswK','AeTfuMO','q2jXqNC','mdi1ktS','CgvHDcG','q2vtDLm','B2rL','C2STBM8','C2v0vhi','BMu7ihm','zgfTywC','Ag9VA1a','ywHmCe4','lsbHihm','zw1Xv2W','mdSGBwK','rgfTywC','igvMzMu','tMfTzq','igfIC28','suTqCeK','oIbJDxi','lc4WnIK','B3bPwfu','tMjREwy','DhLWzq','v1jYre8','B3rZlG','zxrhyw0','yxjPys0','BgfZDeu','Dg9Y','EYbKAxm','DMLZAwi','lxrPDgW','mNWXnhW','lc4WncK','Dhm6yxu','igrPC3a','CM9WywC','BgW+','q29TyMe','B2reAwu','zxjYB3i','lJuGms4','ihjLy28','AgvSza','ywXSihq','yMTPDc0','BgfJzs0','oIa4ChG','u3bLzwq','CMqTAgu','zMrrt3y','AwrLCG','u2nHBgu','ExDyBvK','icaUC2S','CxrLu0O','yxjKlxq','Dg9W','CIdIGjqG','CMfhtg8','BwLKzgW','BM93','zgvYlxq','lxnLCMK','kYbtCge','C2zVCM0','tgLZDa','Fdb8m3W','u0fgrsa','mcWUntu','CMLZAYa','ChG7ih0','Bgf5ig8','Dg87ih0','ywLSzwq','BMvJyxa','z2H0oIa','B29RCYa','uMf0zq','DNCGlsa','BwLUkdq','DtmY','nYWWlJC','qwrIBg8','s2v5vW','B2H6z3u','Ahq6idi','DKjMEMK','zgL2','C2STy3q','ANvTCfa','uwfty0W','zw0TDwK','Awr0Aa','C2u6Ag8','sgDcr0W','idnWEdS','C2f0Dxi','EKDrwe8','zhrOoJe','y2f0','BM90zs4','icaG','EgvZige','oYbHBgK','DgL0Bgu','qMLeseC','Be1VDgK','BhmGDgG','ys1JAgu','B250lxC','C3rLCa','igjVEc0','mhb4oYa','icbIywm','yxGOmJu','zc10Axq','CKLstha','vgHLC2u','quvwsNm','CgXPy2e','y29SB3i','DcbZDge','Ew94BfK','sxvMreO','wuf0AMK','nhWZFdy','nNb4ida','wxHHqLe','lxnSAwq','lcbJywW','ywrPDxm','mgy1oYa','t29guwi','BNqGAxq','B25LigK','CuPPtwe','qM90Dg8','BgLNBI0','CM5hBgC','C2STC2W','lK92zxi','y2HLy2S','DhjVA2u','BMqIihm','ChvZAa','icaGzgK','ihDLyxa','BgrYzw4','ltqTnY4','ztSGD2K','teP6wfG','ihSGlxC','wMvYB2u','ufLhzum','zg9JDw0','AgfPCG','B3DJwK4','wu9Squu','vxDjt0u','zwCGzMe','uLznueK','AhPeDfO','ihSGywW','C2f2zq','lNnRlwy','phnTywW','icaGlNm','BNqGAge','mxb4ihi','CMvMAxG','AxHLzdS','DMvTzw4','CgfNzsa','oIaIiJS','sg9VAYa','qsblt1u','uxHzywK','nwmWidm','z2LMEq','y2jxA08','DgP6v04','Fdn8mxW','uNvUDgK','sgXhC2O','AtmY','AuvrzgW','q29SB3i','zdOGi2y','B3vUDgu','u2L6zq','ndGZnJq','u1nNuMC','kc4YmIW','wfHwsfi','C3r5Bgu','vLjMy1C','mNb4ihu','B2LPzMG','CMvHzhK','BM9szwm','B3vUzgu','t3vVyuW','zw4GDg8','C2HPzNq','zcWGyw4','sxnhCM8','Dhj1zq','CMLUz3m','v3HwEhq','lJv6iIa','zgvYoIa','C2STC3C','mNW0Fdu','CMrLCI0','rvjHz1C','AwvKigm','vMPOrgm','DxjIEfC','AwXS','BM9tChi','wgPozgG','BwuG','CYaNzNu','vxPZB0y','v2vItw8','DwX6Dg8','AKTguge','i2zMnMi','CZOGCMu','y2fWtw8','zcbNCMu','B3vUzdO','zwLksxC','C3n0sNm','nxWY','CML0zxm','mNb4ksa','vgfRzxm','yuTVDxi','zvn0EwW','DgL2zsa','iJeYiIa','yJLKoYa','ihbVAw4','l1jnqIa','AxmGAg8','ldeWnYW','zMLSBcW','EYbIB3G','BI1SB2C','r2XPAfa','ndi1nJb2Axbjre0','zvbSDwC','lcbZyw4','yMHVCa','zxzswuq','psjYB3u','ywz0zxi','psjTBI0','igvSC2u','DhjHBxa','iezquW','BI1JB2W','x19tquS','zw50','BhmGysa','s2HRBeC','yufQthO','BwLU','mxW0Fdy','ihWGC2G','EwnqCg0','B2nsv1y','DgHPCYa','ieDLDfy','sgrru2y','EtOGz3i','ys11Aq','Dc1ZAxO','ihbSywm','ihnOB3q','nsWUmdu','igH1CNq','u0fgrq','oJa7EI0','CNfTAeO','rfjMufO','CvnSyuu','BNq6igm','DxmGywm','z3PIAeu','BI1TywK','CMLNAhq','B250lxm','CgPxvxy','ChG7igy','zwfK','BwvKicG','yLHnvK8','ywqGD2G','yxK6igy','BNnWyxi','CNjVCG','iKLUDgu','Bg9YihS','mtf8mtC','ugn0','C2DhsgG','ihSGzgK','rwHSqMW','D2vYuuK','Bw4Ty28','vw5PDhK','zgvSzxq','CgfKzgK','mtjWEca','A291CNm','zxiTCMe','CM9UzYa','qMnLqKO','B2X1Bw4','yKz1te4','A2rYB3a','DhLqy3q','CwHiAhK','s2v5ra','C2STAgK','BM9Uzq','khjLBg8','Aw5Uzxi','BNrLBNq','tMTft0W','zM9UDa','zw50zxi','x19ZywS','rLbtigm','rxfsze8','CM9IuLG','ihjNyMe','y2vUDgu','mciGCJ0','zguSihq','CZPUB24','ysGYntu','yxbWzw4','ihWGBw8','ysblB3u','DhrPBMC','zMLSBd0','nJi5nZa3nxLOtMXnBW','ihjLBg8','z29KrgK','Aw9FmZa','ocK7ih0','EsbKzwy','CYbnB3y','BMq6ihi','ihSGzMW','A2v5C3q','BhKGkhi','vvDnsW','qLrVsNq','mJqYlc4','igXLyxy','ELjHBNq','tg9JywW','zsbJEd0','FqOGica','AxrPywW','ywrK','z1PIEMS','zsGXnta','4Ocuig92zq','y29TCgW','DuLwzKy','DYGWida','sKHQzve','ywWGBwu','DMLHifm','y3vYC28','BK9ZBe4','ihSGCge','tNLNChm','ihrOAxm','z3jHzgK','mhW4','ls1W','BM1vExm','ihSGzM8','w3nHA3u','BMC6idq','ohb4ksK','C2STy2e','nsK7ih0','Bw4TDgK','rNjHBwu','mZe5mJqZohD1uhj6Aa','DMfSDwu','C2STDMe','zsWGDhi','DhjHy2S','BM8Gy2G','CIGTlxa','CxvLCNK','A3nty2e','BMC6ida','CI1Yywq','nIaXoci','BwvZC2e','zwXHDgK','CNrPzgu','r0HZCu8','igDHCdO','A2vizwe','tvDpC1K','Cg9W','Eca2ChG','qNLjza','oYbYAwC','mdCSmtu','u2nNwfe','AwrHDgu','CYbpDMu','AezSDfy','zxi7igC','vfvsDfO','B2XVCJO','idfWEca','sxDet04','igjVCMq','lxj1BM4','B2LS','sNvTCfq','ihWGrvi','oIbKCM8','CYbHBgW','B290zxi','B2TLpsi','zxvOu2y','sxD3A1O','zgLUzZO','B3uU','ig9U','C2HHzg8','C2STBge','ig5VigG','ic8GDMe','EvbIAg4','sLbJrLG','DxjLihq','CMfPC2u','Bgv4oYa','CMvUDem','lYbhCMe','ignHBgm','B2nRoYa','lc40nsK','t1ndzfO','B2XVCJS','wLfItxO','y2TLzd0','BhrOige','zxzLBNq','B3i6ihi','y3qGB24','psiJzMy','igrLzMe','ug9ZAxq','DhK6ic4','yMvNAw4','BKzHwxi','Dg9Wrgu','y2HdB2W','zvbSyxK','AxnWBge','rMzLwhy','idK5osa','zxH0','AKfHBMO','EdSGB3u','y2HtAxO','t2vJD1q','C3bHBG','t3LTuvu','Cg9PBNq','Dcb7igq','zgL1CZO','mtjWEdS','u3rHDgu','y3K9iJe','Aw96v2K','mJu1lde','uK1c','ndSGBwe','Bg9Hzc4','sLj4zxa','AwDUlwK','zNbRvha','iL06oMe','q05QCMW','Fdr8nxW','uMzmBuy','oIbMBgu','zs5bCha','mhGYnta','BdOGBM8','zuv4Ca','BgLKzxi','BNnPDgK','wwn3B1C','rwfJAca','FdL8nxW','BNrLCJS','y2L0EtO','DgvkDeC','v0ftrca','zwjRAxq','ifvUAxq','DdOXmda','ideWChG','Ew9IuLC','zw50rwW','DgG6idu','iNjVDw4','yMfJA2q','CNr1Cca','Bgu7igy','q2XVC2u','u2fMzxq','ignVBg8','nsWUmdm','nsK7iha','B24Oks4','A291CI0','BhrO','y3jVC3m','zMuGBw8','D2fPDgK','CMvWBge','AwX5oIa','lca1mcu','lNnRlwm','oIb0CMe','yw5JztO','Bxm6igm','zMLSBfm','BY1ZDMC','DgHLihC','zgLZCgW','Aw9U','mZm1ntaYoeDxDgHyuq','DvbqrKK','AxvZoIa','id0GzMW','Acb7iha','CM9Szq','C3bSAxq','DwX0','AwXSihK','DMvYBge','ic5ZAY0','ihbHzgq','igjHy2S','C3rYB24','zcb7igi','mc41','oI13zwi','lNnRlxm','yxrSEsa','zg93oIa','uK1WveS','mJn8m3W','vhnqsuq','B3bHy2K','ywrKrxy','BMnL','rgLL','BMX5kq','DgvZDa','AgfZ','DdOGnZa','zg93BG','mJu1lc4','D2HLCMu','idiWmg0','AwrLihS','zwfKEs4','tgvMDca','ywnPDhK','Dw1UoYa','yw5Jzs4','u05LB2K','tgDcwhG','yxb0Dxi','zwn0Aw8','Ec1OzwK','BKHouuK','BxKGC2u','ifjLy28','swyGCMu','zgDkD1e','mcWWlJu','uejrEge','mhWXFdm','DMLLD0i','B3nL','nIa2Bde','DgvTlxu','CgXHEtO','Dgv4Dee','Bw4TAca','C2fMzu0','C2v0','AgvZ','v01ligK','ifvjiIW','EcaWoYa','rKnnCK8','BwrLC2m','oYbJB2W','ywn0A0S','Fde5Fdi','C2STBwq','yxjNzxq','teHTrhi','nMi5zci','oIa1mcu','y2vdAgK','u0flvvi','zMLSBfq','CMLKoYa','zw50kcm','zdSGyMe','DwzNq1q','BsbSzwy','DhjPyNu','CI1ZzwW','igzPBgW','ig1PBM0','DNPlyxG','ihn0CM8','CI52mq','ltjWEdS','yM90Dg8','tM8GuMu','qvvNAK0','ideYChG','wenqDLK','AY1Jyxi','zgvYlxi','oIa2nta','BMu7ige','Ec1ZAge','AdOGmZq','BgLJyxq','CMvHzey','C3rLBMu','igHVB2S','yM9KEq','nsWYntu','EdSGCge','nJaWia','z2jHkdi','iNrYDwu','BgLUzw4','oIaZmNa','Awr0AdO','zxG6mJe','BsbYAwC','lcbPBNm','Aw5KzxG','Bgv4oIa','yw5ZzM8','txLHquy','C2HVB3q','zciVpJW','kdeWmhy','AwvSzca','rMT0AxK','BhrLCJO','AguGDxm','zwLUC3q','zvzHBhu','s3zptLu','DgG6idK','ueXzENO','D0nVBg8','EYaTD2u','idrWEca','cIaGica','CY1Zzxi','zwfWB24','Aw1Llca','BMXJEeq','mtu3lc4','tMzjueO','B29Rihi','r3jHDMK','DMnkzMu','zwv6zsa','zhrOoIa','v3nwBva','ida7igi','lwHVCa','wuXjBxO','q2zWueK','EdSGywW','yxa6ihi','EdSGz2e','C3rYAw4','Dw5RBM8','s3Plvge','zuvSzw0','CMvU','zxrL','zcbJAg8','DgvJDgK','C2STCMe','lxnJCM8','Bw92zvq','zYb7igm','vgLJAW','B24Gzxy','C2XPy2u','zsbBrvG','CIb2ywW','ysGYndy','Bw4TBg8','lM1Ulxa','Aw46ida','Fde1Fdy','s2LSBgu','AwDUlxm','BMDL','wwTnvNK','Ag9ZDg4','D2LKDgG','igrHBwe','zxjZy3i','CMvSB2e','D0jSDxi','yMfYlxq','BI13Awq','AM1nu2O','nhb4oYa','ltiUns0','ywqGDg8','BhvLCY4','B3b0Aw8','vg1qreK','zw50CW','DgvYo3C','Bg93oIa','z2v0rwW','Ahzqz1O','EYbMB24','BMv2zxi','CwPgrge','lwrPCMu','idaGmca','Bwf0y2G','oIaYmNa','ywjSzs0','B3rOAw4','ihWGz2e','ChGGDwK','qNv6Bgy','EYbWB3m','AgvHzgu','BMf2','EMjVDNC','mNb4ide','C1bju1i','yxrLvge','AwXLzdO','sNvTCca','BLb2q2S','mJzWEdS','EMPkBe8','igv4Axq','C3rYB2S','zwn0oIa','rK5IqKy','ig5VBMu','oIbPBMG','yxjVsgi','AM9Xzwi','BM9UztS','igjHBM4','A2DYB3u','igfUzca','EYbJB2W','B25TB3u','DMC+','owqIihm','oIa0ChG','Ag9VA04','BwvsDw4','AY1IDg4','mhb4lca','Bwf4','DgG6idG','yxjJ','q3jVC3m','B2X1Dgu','CJOGCg8','sKXuELa','ywrKAw4','BJOGy28','wwveAKO','BgvZiem','icaGkIa','ntuSlJa','BMvS','zYbJyw4','ywiUywm','B2r5','CMfWAwq','zxiGC2W','lwXPBMu','rLHoDui','tM8Gu3a','idGWChG','oMHVC3q','B25SEsW','vNfqEvm','BNnSyxq','y2TNCM8','ywnRz3i','AxmGyNu','mwzYksK','qMXVy2S','A2vZig8','B2LSicG','z3jVDw4','zMXLEdO','DMLZDwe','lwLVxYO','ywn0Axy','B250zw4','mJj8mhW','yxKGB24','BNf5AwK','B0HgEKW','y29Kzq','igq9iK0','lxbHCMu','B3nLihm','idHWEdS','A3nqB3m','C2vYDMu','rMLLBgq','ve9JEg8','q1btihi','B1jLy28','CxDIA0O','EYbMAwW','zsb3zwe','ztSGyM8','DML0Eq','Dgv4Dei','A2L0lxm','C2PqyKm','i2zMyJm','B3zLCMW','uIb2ms4','Aw4GC2e','uMfWAwq','zxi6igi','uMvMAwW','Aw5WDxq','wMrtCfy','CMXHEsa','zJmY','yMfJA2C','ide7ig0','BeT4uNu','Aw50zxi','nde5oYa','oIbYz2i','Dc1Iywm','DLPVqMi','C3rVCfa','sKn4vhu','BNrLEhq','vg90ywW','B3bLCNq','lwzPBhq','zxPnzhO','oYbIB3i','ys5RB3u','nZaWia','mteWmdjYwuTZrwe','oIaJzJy','C21HBgW','A1vxreW','idaGnha','lMP1Bxa','C2v0ida','yxrJAgu','y2fUDMe','zwXK','idrWEdS','y29UDgu','s2zTrKm','CMfUz2u','ztOGmtm','vNjyCLG','ns00idC','zer2yM4','y3nZvgu','Dc1ZBgK','ksaXmda','lIbvC2u','BgfIzwW','C2STy28','y05iAvG','ChjLDMu','oYbIB3G','oIa2mda','BMCGzM8','ruHHvMC','Dc1Myw0','BwjVzhK','oIbHyNm','AwvZCLO','zsb2ywW','ywXPz24','lxjHzgK','D0Dnwu4','mNW0Fdy','ohb4oYa','ndiSlJG','DgXPBMu','BNqTC2K','oIaWide','z2v0qxq','CMfUC3a','ic40oYa','nsKSida','uMvJDa','pc9ZBwe','q05qy2i','AgvPz2G','y3PmuKG','zxPPzxi','CIGYmNa','DdOGmJG','Ahq7igm','Dw5KoIa','zIXZExm','nunqvu9PwG','yxrPB24','AcaTidq','q0fovKe','ndySmJm','oYbWywq','z2uUiei','zwz0ic4','iduWjtS','wNrMzxq','DwrzAfm','B3bLBG','icaUBw4','BMq6ihq','mxb4oYa','yw1L','DMrMDee','CdOGmta','y3jLyxq','z2fTzuW','mZHkBg92BgC','r1DusM8','mcuUifm','BKzoB2m','Bg9Hzca','C2v0sxq','Bg9Hzgu','AwDODdO','zwLNAhq','EYbSzwy','AfnOywq','lJa4ktS','tK5Hv1K','ieLZr3i','C2v0uhi','zuHUrfu','mhWYFdy','CYbZChi','vvDnsYa','zw5HyMW','lwjHBNi','y29TyMe','zM9YBxm','BgLUzvq','BhL4EeK','oYb0CMe','Bw91C2u','BNn0ywW','ihSGAgu','C2fRDxi','wuXMEhm','DgG6ida','zwf0CYa','y2SP','qNvUBNK','oYbVDMu','y2LYy2W','AfzXuLm','AsXZyw4','ChG7igG','oYb9cIa','zxvOELa','Dg9WoIa','zhjVCc0','Bgf0zwq','CwLcwxq','icaGic4','DKjtyvm','Bfbgzhy','DgHYB3C','mcbOB28','B25JBgK','DhKGmc4','BsbJzw4','zw15igm','DhvnDw4','zNvSBhm','igzVBNq','B3jKzxi','z3jPzc0','mcWWlJC','C2vSzwe','ihLVDxi','igf1Dg8','DejYC1G','t1nOB28','ywqGEYa','lxrVCca','jsK7ic0','ywrIBg8','y3jVBgW','oIaXms4','CYbLyxm','BNrLCI0','j3qGC3q','oYbMBgu','C3zNiJ4','odiPoYa','jsbUBY0','y2n1CMe','DgnOoJO','zw1LBNq','t3vUAKe','y2fWDhu','ltiUnsa','zxmGB24','CNnVCJO','mtrWEdS','txvWBfu','AxPLoIa','zM9UDc0','ldiZocW','Bw4TDge','DMG7EI0','CKreAue','B3jZige','mJSGC3q','rNnvDge','zwqGyw0','nYWWlJm','zhz2BgO','vg95v1C','B2vZig4','igzSzxG','lc4WocK','mJu1ldi','t0zgigi','C21Muu4','tg5ACxy','y3rPB24','C2HVD24','Bg9HzgK','lNnRlw0','DMr6yxy','D2vIA2K','Awy7ih0','tNvXwLq','iefmtca','u0DKqMi','C3DPDgm','FdeXFde','zfvRzwq','z29KicG','igzVCIa','nJaWide','rKPuAKe','ie1VDMu','nYWWlJG','zxi6ida','Cc1ZAge','Cg9ZAxq','AejWuvq','nsaWlti','nsWUmdC','AM9PBJ0','oYbIywm','B246igW','A2uTBgK','Ad0ImIi','iM5VBMu','C3bLzwq','z29K','ie9olG','z24TAxq','qvP6AgW','y2XHC3m','zMyP','oJiXndC','zMy2yJK','mNb4o3i','BMq6icm','D2vPz2G','ywLYlG','igLMig0','mdb2DZS','igfSAwC','CfHdrfK','CZOGyxu','zgvZ','zsaOt0G','mtiGmJe','mZuSmJq','icaGica','zvzwDfK','ENH6qwS','DxjZB3i','idqGnc4','mdSGFqO','sgLKzxm','ChG7ihC','s3vvtwO','ieaG','zNbZ','BtOGmJq','zw50CZO','Dg9Nz2W','idaGmJq','u3rHDhu','Fdv8mNW','v0fttsa','CMqTDgK','Ag9VA0C','idi2ChG','DKzIzMW','lMXHC3q','BhvTBJS','ih0kica','rLbtig8','BMn0Aw8','BgLNBG','yNv0Dg8','AujYAey','ldi1nsW','B3D2C0e','vLnlu1u','rxHW','EdSGAgu','DxjDig0','C2L6ztO','EMu6ide','rw5NAw4','ENbvzuK','CMeTA28','igj1AwW','r29Kie0','yw5LBca','AwnRihm','ihn5C3q','lM1Ulxq','zsb7igy','B2fKzwq','CJOGi2y','yM9Yzgu','D2fYBG','yNrUoMG','odbWEcW','oIbYAwC','y2XLyxi','sLneA2u','Aw5Zzxq','ihbVC2K','q1fhwe4','rvHqxq','FdD8nxW','EI1PBMq','u01vzxq','lwL0zw0','Bg9Y','zxjYihS','DfHVzKS','idmYChG','vvjbx0S','AefYv3i','BIbZAwC','r29yyum','ida7igm','C2STyNq','tw92zw0','zg93kda','C2vSzwm','uMvZzxq','nhWWFdC','A3mGyxi','BNnLDca','tKCGlsa','DeHUv3i','z1jSAe8','iIbZDhi','vM5zqvO','DgvY','zw50tgK','ztOGBM8','m2LhwNHTrq','BguGAwy','BgvUz3q','z2v0','tuLtu0K','Ag9Szsa','Dw5Kzwq','DhjHBNm','yxvSDa','AwX0zxi','tg9Hzgu','zxi6oI0','u3HgzKm','B24U','Eevku2y','nxb4oYa','DhLSzq','DgvTCZO','A3ndChm','seX3z0u','nxmGy3u','EdSGyMe','v2nRBMG','oYbMB24','Bg9YoIa','wfzMCfy','ktSGy3u','zgTPDa','AxrLBxm','BLbSyxq','BgWGBwu','qxbWBhK','u2v0r2e','B3nWywm','sw5ZDge','igvUDgK','D2L0Ag8','zsXTB24','vNPovuO','Ag9VA3m','Aw5Mqw0','oYbVCge','lc4WnsK','DMfS','svrsA1q','oYbQDxm','Bw92zw0','DxDTAW','mNm7Cg8','zxjZ','CMfKAxu','CM9ZC2G','uMvJB2K','yxbWBgK','zenOAwW','CgfYzw4','CM91BMq','ntuSmJu','BI1JBg8','ienquW','A2v5Dxa','DxjDifu','DgvYoYa','tgvNAw8','FdH8mJe','B3n0zMK','DxjDigG','CgfJAxq','nNWXFdm','sw5PDgK','Eef2u0i','A1feDw4','A2v5zg8','yLrmt1G','Fdf8m3W','DgLKveO','ktSGFqO','ktSGBwe','B3G9iJa','ihrOzsa','z2LyC2u','zw1ZoIa','EuvUz2K','icnMzMy','lxDPzhq','oIbJzw4','nxm0idi','u2TPChm','icaGlM0','yxa6ide','yMvS','mZaYmdeXmLfWugHlBG','DMvYihS','BYb0Agu','CMuGkfm','wLvUAhi','mNb4oYa','yxa6idG','odaSmtK','Bfb5B3e','te1c','DMCGEYa','y2fSBa','v0veB1K','ihSGyMe','mtn8mti','Bw4TC3u','Ag9VA0m','D0rQthO','ie92zxi','Bg5jt2y','Axr5oIa','shH0sxm','B25PBNa','ChG7igi','lZ48l3m','EuPyBve','u2HHCNa','tu9ersa','nJm5mJKYnuzXB1n6zq','CYb3B24','AxnPyMW','AwvSza','z3LIywm','veLsuLi','C2v0qxq','oNbVAw4','vu9mrfm','AwWGC3a','mtSGBwK','wKflyu8','zMLSBa','AY1OAw4','ig9YigS','ic5TBI0','Dw5PDhK','EvjrDLq','B3nPDgK','AM9fqM4','lxnOywq','lwfWCgu','B3Lyrhe','zxiGEYa','igHLAwC','vMfSDwu','CdOGmti','ugf0Aa','igfWCgW','qwz3r1K','yw5Uywi','mc41o3q','mdSGy3u','CKHXq2y','zxiTzxy','EtOGyMW','CMvHza','BwLZyW','EvbMtvG','CgTjCeW','AxrJAa','u2fRDxi','CZOGy2u','CMvZDg8','uKPcDNu','BYbWAwC','zMLSzw4','Aw4Sihq','ignVB2W','Axb0kq','z3jHDMK'];_0x567d=function(){return _0x5cca67;};return _0x567d();}
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
