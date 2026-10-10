// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.9.1
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
function _0x156c(_0x23f33b,_0x723c4c){_0x23f33b=_0x23f33b-(0x77a+0x1026+-0x160d);var _0x2a8311=_0xa550();var _0x234ca2=_0x2a8311[_0x23f33b];if(_0x156c['aOvzOi']===undefined){var _0x54a994=function(_0x485234){var _0xdfbaf8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2160b1='',_0x14f385='';for(var _0x292f96=-0x2606+-0x148d*-0x1+0x3f*0x47,_0x59e619,_0x3ad665,_0x2da1c8=0x1e*0xba+0x3*-0x812+0x26a;_0x3ad665=_0x485234['charAt'](_0x2da1c8++);~_0x3ad665&&(_0x59e619=_0x292f96%(0x86*-0x2+-0x15cd+0x16dd)?_0x59e619*(-0x302+0x538+0xfb*-0x2)+_0x3ad665:_0x3ad665,_0x292f96++%(0x3d*-0x50+-0x281*-0x8+-0xf4))?_0x2160b1+=String['fromCharCode'](-0x2d*0x74+-0x5*-0x5f1+-0x852&_0x59e619>>(-(0xc05*0x3+0x1fab*0x1+-0x43b8)*_0x292f96&0x2692+-0xa9b*-0x3+0x465d*-0x1)):-0x572+-0x18a3+-0x3*-0xa07){_0x3ad665=_0xdfbaf8['indexOf'](_0x3ad665);}for(var _0x2882f5=0x33c+0x16*-0x121+0x159a,_0x41283=_0x2160b1['length'];_0x2882f5<_0x41283;_0x2882f5++){_0x14f385+='%'+('00'+_0x2160b1['charCodeAt'](_0x2882f5)['toString'](0xb1*0x25+-0x268*0x7+-0x1*0x8ad))['slice'](-(0x3a*0x3f+0xd5*-0x13+0x4f*0x5));}return decodeURIComponent(_0x14f385);};_0x156c['EDKSnm']=_0x54a994,_0x156c['yWbFTF']={},_0x156c['aOvzOi']=!![];}var _0x33f071=_0x2a8311[0xca5+-0x21b9*0x1+0x1514],_0x7a0eef=_0x23f33b+_0x33f071,_0x5884b1=_0x156c['yWbFTF'][_0x7a0eef];return!_0x5884b1?(_0x234ca2=_0x156c['EDKSnm'](_0x234ca2),_0x156c['yWbFTF'][_0x7a0eef]=_0x234ca2):_0x234ca2=_0x5884b1,_0x234ca2;}(function(_0x353689,_0x4cced4){var _0x345e7a=_0x156c,_0x2777c2=_0x353689();while(!![]){try{var _0x13f13e=-parseInt(_0x345e7a(0x5d7))/(-0x1684*-0x1+-0xe1f+-0x864)*(-parseInt(_0x345e7a(0x408))/(0x1874*-0x1+0x1*0x1a0f+-0x199))+-parseInt(_0x345e7a(0x1bd))/(-0xc93*0x1+-0xe3a*0x1+0x270*0xb)+-parseInt(_0x345e7a(0x575))/(-0x10f*0x1f+0x5ad*0x4+-0x1*-0xa21)+-parseInt(_0x345e7a(0x407))/(-0x3a3*0x7+0xc4b+0xd2f)+-parseInt(_0x345e7a(0x625))/(0x288+-0x9d9*0x1+0x757)*(-parseInt(_0x345e7a(0x6f3))/(0x9*0x3a1+-0x1*0x143f+0x97*-0x15))+parseInt(_0x345e7a(0x4e2))/(0x5*-0x24d+-0x349*0x2+0x121b)+parseInt(_0x345e7a(0x712))/(-0x2442+-0x12c5+0xdc4*0x4);if(_0x13f13e===_0x4cced4)break;else _0x2777c2['push'](_0x2777c2['shift']());}catch(_0xcacb5a){_0x2777c2['push'](_0x2777c2['shift']());}}}(_0xa550,-0x3*-0x44e67+-0xbb2b6+0x701f5*0x1),((()=>{'use strict';var _0x3cc277=_0x156c,_0x342afd={'UldFV':function(_0x188654){return _0x188654();},'qxuEF':_0x3cc277(0x1cc)+'n','HSdnj':function(_0x455109){return _0x455109();},'fSxQW':_0x3cc277(0x33c)+'n','ZUBxV':_0x3cc277(0x335),'rBWNy':_0x3cc277(0x31c),'hRgLz':_0x3cc277(0x605)+'wn','xWxij':function(_0x131ed7,_0x8b67ba){return _0x131ed7+_0x8b67ba;},'UxtOR':function(_0x51eaca,_0x3d3fe3){return _0x51eaca(_0x3d3fe3);},'IePkR':'fzJTX','GaFNh':function(_0x272a63,_0x488eeb){return _0x272a63===_0x488eeb;},'yyvao':_0x3cc277(0x3fa),'Tipee':_0x3cc277(0x40e)+_0x3cc277(0x4c6)+_0x3cc277(0x1eb)+'paren'+'t','oHQWu':function(_0x5bb885,_0x3c2cf4){return _0x5bb885<_0x3c2cf4;},'YEJjN':'kour-'+_0x3cc277(0x450),'zhgEN':'none','jMYKd':_0x3cc277(0x535),'TDNkX':_0x3cc277(0x70c)+'-sans'+'-seri'+'f,sys'+_0x3cc277(0x4e8)+'i,san'+_0x3cc277(0x352)+'if','XONaq':'KeyD','rUAGt':_0x3cc277(0x422)+'1','YVVzG':function(_0x2b41b4,_0x5de80d){return _0x2b41b4+_0x5de80d;},'pIiEQ':function(_0x537f6b,_0x46ba80){return _0x537f6b-_0x46ba80;},'sPzCL':function(_0x1c96f7,_0x3a7499){return _0x1c96f7*_0x3a7499;},'JjLBV':_0x3cc277(0x51a),'JJKAI':_0x3cc277(0x292),'ajhFb':'WMoFV','TYFoF':_0x3cc277(0x34c),'VMwhz':function(_0x18ead3,_0x52bbde){return _0x18ead3!==_0x52bbde;},'Zyktz':_0x3cc277(0x471)+'ra-ko'+'ur]\x20h'+_0x3cc277(0x756)+_0x3cc277(0x2c0)+'iled:','yBFHp':'Unity'+_0x3cc277(0x2b0)+'e.App'+_0x3cc277(0x2c4)+'ion','rbPRb':_0x3cc277(0x47b)+_0x3cc277(0x650)+_0x3cc277(0x3bb)+_0x3cc277(0x581),'QHENe':_0x3cc277(0x1ea),'skXwE':'sk-mb'+_0x3cc277(0x631),'eaWsn':_0x3cc277(0x506)+_0x3cc277(0x4a3),'Bhzha':_0x3cc277(0x29b),'kLhao':function(_0x295aaa,_0xc5207b){return _0x295aaa+_0xc5207b;},'JwILl':function(_0x5818d2,_0x231a1c){return _0x5818d2+_0x231a1c;},'lBPgF':'\x20|\x20ER'+'R:\x20','dSYcT':function(_0x36f3c6,_0x5e1366){return _0x36f3c6&&_0x5e1366;},'iWMkX':function(_0x550d7e,_0x362f85){return _0x550d7e!==_0x362f85;},'KPgOI':_0x3cc277(0x505),'TCncu':_0x3cc277(0x3e5)+'|1|0|'+'5','uYRXz':function(_0x148ab2,_0x22b121,_0x37e6c2,_0x556990,_0x3d10a9){return _0x148ab2(_0x22b121,_0x37e6c2,_0x556990,_0x3d10a9);},'rLUPx':function(_0x47c2dd,_0x3d2334){return _0x47c2dd!==_0x3d2334;},'TpGlY':function(_0x544a3a,_0x179a04,_0x3a53dd,_0x27e875,_0x333ac0){return _0x544a3a(_0x179a04,_0x3a53dd,_0x27e875,_0x333ac0);},'FcVVg':function(_0x334e5b,_0x49dd24,_0x5341a7,_0x249e66,_0x348cc4){return _0x334e5b(_0x49dd24,_0x5341a7,_0x249e66,_0x348cc4);},'UZcvX':function(_0x5511ec,_0xde114a,_0x4b2b27){return _0x5511ec(_0xde114a,_0x4b2b27);},'QzdtO':_0x3cc277(0x4c2),'XDCfS':function(_0x413a3d,_0xcc94a8,_0x58ef53,_0x3aaf1f,_0xa892cf){return _0x413a3d(_0xcc94a8,_0x58ef53,_0x3aaf1f,_0xa892cf);},'PWyWO':function(_0x242364,_0x2824d6,_0x214e44,_0x12a078,_0x16d83f){return _0x242364(_0x2824d6,_0x214e44,_0x12a078,_0x16d83f);},'yysup':function(_0xfb7b6,_0x1c4adf){return _0xfb7b6!==_0x1c4adf;},'PzsLa':'XdGXm','HScwm':_0x3cc277(0x422),'fJKGo':'keyup','OhGga':_0x3cc277(0x551)+'wn','DnWPK':'mouse'+'up','QCgxX':function(_0x546ab6,_0x3c63c4){return _0x546ab6-_0x3c63c4;},'nHmBK':function(_0x685cdd){return _0x685cdd();},'Ldtwc':_0x3cc277(0x43b),'JUFGi':_0x3cc277(0x48a),'xZACI':'SAKUR'+'A\x20KOU'+'R\x20v1.'+'1','jvDZj':'\x20FPS','KSBAy':'waiti'+_0x3cc277(0x483)+_0x3cc277(0x4f1)+'e…','KkNtd':'LqQrM','zBquH':_0x3cc277(0x58e)+_0x3cc277(0x522),'kHKdy':_0x3cc277(0x6e5),'vKdBB':'span','XBPaO':_0x3cc277(0x6dd),'WZXtI':'sk-la'+'bel','AOCro':function(_0x4d6ca2,_0x1461a4){return _0x4d6ca2===_0x1461a4;},'DbPrZ':_0x3cc277(0x343),'sOFQE':function(_0x34479b,_0x167304){return _0x34479b+_0x167304;},'YQFkS':_0x3cc277(0x29a)+_0x3cc277(0x567)+'\x20','wPVzy':function(_0x2f71f5,_0x16dcef){return _0x2f71f5+_0x16dcef;},'enhwH':_0x3cc277(0x511)+'s','apkuK':_0x3cc277(0x2b7)+_0x3cc277(0x31f),'GcOTU':_0x3cc277(0x4d0)+'d','TwSlr':'held','WctiS':function(_0x5bcea1,_0x301931,_0x12fe99,_0x2067c6,_0x27c129,_0x2922cd){return _0x5bcea1(_0x301931,_0x12fe99,_0x2067c6,_0x27c129,_0x2922cd);},'cGTUK':'240\x20F'+_0x3cc277(0x6d4)+'lock','vliaR':_0x3cc277(0x534)+_0x3cc277(0x28b),'ltYaW':_0x3cc277(0x1e8),'KhhLC':function(_0x3d4bc8){return _0x3d4bc8();},'ngZwJ':_0x3cc277(0x2ec),'zAtTZ':function(_0x33d240){return _0x33d240();},'MjZdg':function(_0x5038df,_0x473298){return _0x5038df>_0x473298;},'lFUdQ':_0x3cc277(0x641)+'t','RwncY':_0x3cc277(0x444)+_0x3cc277(0x4a9),'hSPiS':function(_0x3d3fd7,_0x1f34e9,_0x5e5402,_0xe9f587,_0x375ccc,_0x53464d){return _0x3d3fd7(_0x1f34e9,_0x5e5402,_0xe9f587,_0x375ccc,_0x53464d);},'ThQRy':'Rapid'+'\x20Fire'+_0x3cc277(0x461)+']','GTAOq':_0x3cc277(0x5ba)+'e\x20[EX'+'P]','UbISp':_0x3cc277(0x5ba)+'e\x20val'+'ue','gcRLJ':function(_0x56f41c,_0x4ddfdb){return _0x56f41c(_0x4ddfdb);},'pgLkD':'If\x20re'+_0x3cc277(0x66a)+_0x3cc277(0x693)+_0x3cc277(0x5c8)+'in,\x20t'+_0x3cc277(0x1f0)+'creme'+'nt\x20ha'+'ppens'+_0x3cc277(0x4b3)+'where'+'.','msayo':function(_0x110f2a,_0x469c67){return _0x110f2a===_0x469c67;},'ZYsQm':function(_0x2547ec,_0x4ae915,_0x30851e,_0x223e94,_0x231aa9,_0x45bd6d){return _0x2547ec(_0x4ae915,_0x30851e,_0x223e94,_0x231aa9,_0x45bd6d);},'zSyTJ':'Speed','erILz':_0x3cc277(0x594)+'\x20%','rPwVE':_0x3cc277(0x36d)+_0x3cc277(0x5e1)+_0x3cc277(0x1b3)+_0x3cc277(0x36b)+_0x3cc277(0x4da)+_0x3cc277(0x76b)+_0x3cc277(0x224)+_0x3cc277(0x526)+'ty\x20va'+'lues.','QzToC':_0x3cc277(0x3f5)+'\x20=\x20fl'+_0x3cc277(0x463),'Stnrw':function(_0x5452d5,_0x3a32d6,_0x1ee896,_0x5558f2,_0x5c3385,_0x1dcc7a){return _0x5452d5(_0x3a32d6,_0x1ee896,_0x5558f2,_0x5c3385,_0x1dcc7a);},'AThcJ':_0x3cc277(0x484)+_0x3cc277(0x5e1)+_0x3cc277(0x1b3)+_0x3cc277(0x647)+'JumpT'+_0x3cc277(0x6a7)+'o\x20the'+'\x20jump'+'\x20cool'+_0x3cc277(0x6f1)+_0x3cc277(0x4aa)+'\x20appl'+_0x3cc277(0x4a1),'FsefP':'oXOcj','KuZvY':function(_0x62de70,_0xfe16f2,_0x3917c0,_0x4dfedc){return _0x62de70(_0xfe16f2,_0x3917c0,_0x4dfedc);},'RIWaB':_0x3cc277(0x5a7)+'m\x20rig'+'ht','FKqMa':_0x3cc277(0x300),'GddXg':function(_0x4d6832,_0x8f91bb,_0x1824af,_0x1af112,_0x4915b4,_0x848253){return _0x4d6832(_0x8f91bb,_0x1824af,_0x1af112,_0x4915b4,_0x848253);},'WdGNQ':_0x3cc277(0x359)+'eadou'+'t','QXNSA':function(_0x1eaa90,_0x11acb2,_0x1fce36){return _0x1eaa90(_0x11acb2,_0x1fce36);},'FdCyf':_0x3cc277(0x1a8)+_0x3cc277(0x1fe)+_0x3cc277(0x569)+_0x3cc277(0x3d3)+'air.','hzQwc':function(_0x50427e,_0x47ce1d,_0xb20c67,_0x37dbb9,_0x4fcab6,_0x53a750){return _0x50427e(_0x47ce1d,_0xb20c67,_0x37dbb9,_0x4fcab6,_0x53a750);},'prDWj':function(_0x23dca9,_0x3795a6,_0x3293ee){return _0x23dca9(_0x3795a6,_0x3293ee);},'gywHT':_0x3cc277(0x389)+_0x3cc277(0x679),'asSsg':_0x3cc277(0x318)+_0x3cc277(0x531)+'ounte'+'r:\x20th'+'is\x20bu'+_0x3cc277(0x705)+_0x3cc277(0x44c)+'\x20GetV'+'isibl'+_0x3cc277(0x24c)+_0x3cc277(0x609)+'o\x20pig'+'gybac'+_0x3cc277(0x1e1),'egLYj':_0x3cc277(0x2e2)+_0x3cc277(0x41a)+'\x20relo'+'ad.\x20I'+'f\x20mat'+_0x3cc277(0x1b4)+_0x3cc277(0x1be)+'in\x20sa'+'fe\x20mo'+_0x3cc277(0x355)+_0x3cc277(0x520)+'eeze\x20'+'is\x20ho'+'ok-re'+'lated'+'\x20—\x20te'+'ll\x20me'+_0x3cc277(0x416)+'hooks'+_0x3cc277(0x75c)+'ied\x20c'+'ount.','ZxWtm':_0x3cc277(0x380)+'e\x20(OH'+'ealth'+_0x3cc277(0x5e3)+_0x3cc277(0x68b),'GsDcs':function(_0x1b7521,_0x497fa6,_0x1addde){return _0x1b7521(_0x497fa6,_0x1addde);},'FQybO':'noRec'+_0x3cc277(0x716)+'Recoi'+'lMoti'+'on.Ti'+_0x3cc277(0x4bf),'SrUBF':function(_0x111311,_0x1e30cb,_0x461eb7){return _0x111311(_0x1e30cb,_0x461eb7);},'bHpOe':_0x3cc277(0x499)+'re\x20(S'+_0x3cc277(0x3c1)+'eRunn'+_0x3cc277(0x363)+'\x20IsGr'+'ounde'+'d)','ciWdx':_0x3cc277(0x2fc)+'eats\x20'+_0x3cc277(0x399)+_0x3cc277(0x40a)+'ut\x20th'+'is','ZGOmj':'ACTk\x20'+_0x3cc277(0x3c6)+'r','ulSKr':'Disab'+_0x3cc277(0x3ec)+_0x3cc277(0x347)+_0x3cc277(0x226)+'etect'+_0x3cc277(0x6a3)+_0x3cc277(0x38e)+'rtup\x20'+_0x3cc277(0x71c)+_0x3cc277(0x202)+_0x3cc277(0x2e3)+'on().'+_0x3cc277(0x76d)+_0x3cc277(0x667),'xEWvB':_0x3cc277(0x1cf)+_0x3cc277(0x275)+_0x3cc277(0x63f)+'d\x20gre'+_0x3cc277(0x706)+_0x3cc277(0x41b)+'\x20ban\x20'+_0x3cc277(0x2a7)+_0x3cc277(0x406)+'with\x20'+_0x3cc277(0x4a8)+_0x3cc277(0x258),'ALazR':'Dange'+'r','Jfvjr':function(_0x2838b1,_0x1a66b4,_0x1857f1){return _0x2838b1(_0x1a66b4,_0x1857f1);},'BRrAj':_0x3cc277(0x44d)+'t','UpBaw':_0x3cc277(0x6d1)+_0x3cc277(0x5c3)+'-banr'+'s','ftWbF':_0x3cc277(0x1c8)+'S','mGtNq':_0x3cc277(0x1b9),'aoZTW':function(_0x267c22,_0x26bb3d,_0x5bbaa6,_0x4fe987,_0x5d91eb,_0x216c81,_0x4bf6f8){return _0x267c22(_0x26bb3d,_0x5bbaa6,_0x4fe987,_0x5d91eb,_0x216c81,_0x4bf6f8);},'zDGgo':function(_0x2f0239,_0x34bb15){return _0x2f0239/_0x34bb15;},'AMReN':function(_0x19610d,_0x4080ca){return _0x19610d*_0x4080ca;},'rNZvD':function(_0x591afc,_0x51259a){return _0x591afc(_0x51259a);},'gheQO':function(_0x1f21e6,_0x43bd41){return _0x1f21e6/_0x43bd41;},'NdByh':'true','fAurt':_0x3cc277(0x27e),'Zfolz':_0x3cc277(0x43d)+_0x3cc277(0x37c)+'|14|2'+'|15|1'+_0x3cc277(0x2cc)+_0x3cc277(0x205)+'|10|1'+'2|5|1'+_0x3cc277(0x737),'biOmE':'sk-ra'+'nge','kZWkM':function(_0x2e12b8,_0x5cb241){return _0x2e12b8+_0x5cb241;},'qAXeu':_0x3cc277(0x338),'Yuaho':function(_0x218fd6,_0x6c80cf){return _0x218fd6===_0x6c80cf;},'lkuEQ':_0x3cc277(0x278),'TZxDT':_0x3cc277(0x2de),'hjPnz':_0x3cc277(0x324)+_0x3cc277(0x5e9)+_0x3cc277(0x20c),'vdSuZ':function(_0x2dd1f9,_0x386b48){return _0x2dd1f9===_0x386b48;},'fsnXN':'SAFE\x20'+_0x3cc277(0x749)+'-\x20ove'+_0x3cc277(0x37e)+_0x3cc277(0x5db)+_0x3cc277(0x251)+_0x3cc277(0x512)+_0x3cc277(0x672)+_0x3cc277(0x52d)+'\x20exit'+')','pGsnR':'nav','GzTHJ':_0x3cc277(0x43e)+'p','dErzd':_0x3cc277(0x324)+_0x3cc277(0x5e9)+'r','YEwUC':_0x3cc277(0x6b3)+_0x3cc277(0x3de)+'ox=\x220'+_0x3cc277(0x63d)+_0x3cc277(0x470)+_0x3cc277(0x698)+'\x20d=\x22M'+_0x3cc277(0x3a7)+'2\x2012M'+'18\x206\x20'+_0x3cc277(0x62f)+_0x3cc277(0x37d)+_0x3cc277(0x4b0),'xkxYx':'</sma'+_0x3cc277(0x2d5),'wnVCi':_0x3cc277(0x36c)+_0x3cc277(0x3b7)+_0x3cc277(0x67c)+_0x3cc277(0x21c)+':0;z-'+_0x3cc277(0x52a)+_0x3cc277(0x519)+_0x3cc277(0x431)+_0x3cc277(0x548)+_0x3cc277(0x296)+_0x3cc277(0x6c5)+'s:non'+'e;','bmXfD':_0x3cc277(0x386)+'t','nCdSz':'Move','lBIwg':'visua'+'l','mFoDa':_0x3cc277(0x701),'vsEuK':_0x3cc277(0x376),'fiuzx':_0x3cc277(0x6d8)+'y','iHQlo':'[saku'+_0x3cc277(0x4ba)+'ur]\x20m'+'enu\x20r'+_0x3cc277(0x1ad)+'\x20UWMK'+':','KFJBD':'error','bIugG':function(_0xd11aab,_0x470d4e){return _0xd11aab===_0x470d4e;},'xQnhE':'OqnJz','mhDKd':_0x3cc277(0x4c0),'VzrVm':_0x3cc277(0x76c)+'bly-C'+_0x3cc277(0x557)+'.dll','VqUyf':function(_0x5edaee,_0x56dbf1,_0x3e3ebb,_0x38b1f6,_0x329301,_0xd82eb7,_0x5d6e78,_0x3704eb){return _0x5edaee(_0x56dbf1,_0x3e3ebb,_0x38b1f6,_0x329301,_0xd82eb7,_0x5d6e78,_0x3704eb);},'FWavV':'god','Dntef':_0x3cc277(0x55c)+'th','xEZeg':_0x3cc277(0x405)+_0x3cc277(0x42f),'oEMWy':_0x3cc277(0x6eb)+_0x3cc277(0x360),'SZRsl':_0x3cc277(0x3b4)+_0x3cc277(0x740)+_0x3cc277(0x462),'rXqMc':_0x3cc277(0x4eb)+_0x3cc277(0x761),'puTAn':_0x3cc277(0x750),'ngWit':'[saku'+_0x3cc277(0x4ba)+_0x3cc277(0x2df)+_0x3cc277(0x4d9)+'nit\x20f'+_0x3cc277(0x45b)+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x3cc277(0x3f4)+_0x3cc277(0x582)]||''))return;if(window['__SAK'+'URA_K'+_0x3cc277(0x2c7)])return;window[_0x3cc277(0x456)+_0x3cc277(0x52e)+'OUR__']=!![];var _0x39c9ec=_0x3cc277(0x2b4)+'9d',_0x2108a9='#ffb3'+'c6',_0x470246={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x3cc277(0x2b4)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x3d48bb={..._0x470246};try{Object[_0x3cc277(0x452)+'n'](_0x3d48bb,JSON[_0x3cc277(0x75d)](localStorage[_0x3cc277(0x703)+'em'](_0x3cc277(0x66c)+'a.kou'+'r.v1')||'{}'));}catch(_0x550352){}function _0x488b74(){var _0x4217f9=_0x3cc277;if(_0x4217f9(0x651)===_0x342afd[_0x4217f9(0x568)])_0x3a7519[_0x4217f9(0x599)+'od']=_0x4c82f8,_0x100c71[_0x4217f9(0x599)+'odDie']=_0x5c038c,_0x28f7c9['hookN'+_0x4217f9(0x3bc)+'il']=_0x2f9fe8,_0x3ebbc5['hookC'+'aptur'+'e']=_0x1024e9,_0x342afd[_0x4217f9(0x41f)](_0x5d7a7b),_0x578778['reloa'+'d']();else try{if(_0x342afd[_0x4217f9(0x6b4)]!==_0x342afd['rBWNy']){var _0x5bbf9b=(_0x4217f9(0x4bd)+'|2|0|'+'3|1')[_0x4217f9(0x1ff)]('|'),_0x15eeb1=0x10da+0x35f+-0x1f*0xa7;while(!![]){switch(_0x5bbf9b[_0x15eeb1++]){case'0':_0x1a9d3d[_0x4217f9(0x64d)+_0x4217f9(0x279)+'t']=_0x12fbba;continue;case'1':return _0x1a9d3d;case'2':_0x1a9d3d[_0x4217f9(0x3b5)+_0x4217f9(0x736)]=_0x342afd[_0x4217f9(0x4dd)];continue;case'3':_0x1a9d3d[_0x4217f9(0x425)+'ck']=_0x8944ed=>{var _0x27c918=_0x4217f9;_0x8944ed[_0x27c918(0x466)+'ropag'+_0x27c918(0x68c)](),_0x283bbb['fRXIk'](_0xe41898);};continue;case'4':var _0x283bbb={'fRXIk':function(_0x250896){return _0x342afd['HSdnj'](_0x250896);}};continue;case'5':var _0x1a9d3d=_0x2e85a3[_0x4217f9(0x366)+'eElem'+'ent'](_0x342afd[_0x4217f9(0x498)]);continue;case'6':_0x1a9d3d[_0x4217f9(0x735)]=_0x342afd[_0x4217f9(0x498)];continue;}break;}}else localStorage[_0x4217f9(0x319)+'em'](_0x4217f9(0x66c)+_0x4217f9(0x676)+'r.v1',JSON['strin'+'gify'](_0x3d48bb));}catch(_0x96c421){}}var _0x3c53b1={'uwmk':!!window['Unity'+_0x3cc277(0x2ef)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x3d48bb[_0x3cc277(0x310)+_0x3cc277(0x3ba)],'lastError':''};try{window[_0x3cc277(0x6b5)+_0x3cc277(0x3a5)+_0x3cc277(0x368)+'r'](_0x342afd[_0x3cc277(0x42b)],_0x29083b=>{var _0x17492f=_0x3cc277;try{var _0x20806a=_0x29083b&&(_0x29083b[_0x17492f(0x26f)+'ge']||_0x29083b['error']&&_0x29083b[_0x17492f(0x6da)][_0x17492f(0x26f)+'ge'])||_0x342afd[_0x17492f(0x201)];if(_0x29083b&&_0x29083b[_0x17492f(0x35d)+'ame'])_0x20806a+=_0x342afd['xWxij']('\x20@\x20'+_0x342afd['UxtOR'](String,_0x29083b['filen'+'ame'])['split']('/')[_0x17492f(0x529)](),':')+(_0x29083b[_0x17492f(0x358)+'o']||'?');_0x3c53b1[_0x17492f(0x1e2)+_0x17492f(0x37a)]=_0x342afd['UxtOR'](String,_0x20806a)['slice'](-0x33c+-0x194d*-0x1+-0x1611,-0x1153+0x247+0x11*0xec);}catch(_0x2adb65){}});}catch(_0x368324){}var _0xb0ee0=null,_0x46b1c3=null,_0x2b290a={},_0x5c5a95=[],_0x44646e=[],_0xaef72=new Map();function _0x346a3b(_0xc9040e,_0x2aac4d){var _0x4a73bd=_0x3cc277;if(_0x4a73bd(0x432)!=='QqTnI'){if(!_0x2aac4d||_0xc9040e['inclu'+'des'](_0x2aac4d)||_0xc9040e['lengt'+'h']>-0x259*0x4+-0x2c*0xba+-0x4*-0xa67)return;_0xc9040e[_0x4a73bd(0x671)](_0x2aac4d);}else _0xd3f2d1=new _0x27f991(),_0x2786f3[_0x4a73bd(0x1ed)](_0x32bc28,_0x3995ee);}function _0x5ed244(_0x2e9bd7,_0x4396cb,_0x413bfb,_0x858e75){var _0x4ae0f3=_0x3cc277,_0xae609c={'rCqPt':function(_0x2e8bcc){return _0x2e8bcc();}};if(_0x342afd[_0x4ae0f3(0x3fc)]!==_0x4ae0f3(0x532))_0x4dde8f[_0x4ae0f3(0x599)+_0x4ae0f3(0x515)]=_0x3ed8cc,_0xae609c['rCqPt'](_0x45de01);else{var _0x35f337=-0x1*-0xa82+0x1790+0x7*-0x4de;try{if(_0x342afd[_0x4ae0f3(0x723)](_0x4ae0f3(0x3fa),_0x342afd[_0x4ae0f3(0x396)]))_0x35f337=_0x4396cb&&_0x4396cb[_0x4ae0f3(0x370)]?_0x4396cb[_0x4ae0f3(0x370)]():-0x256*-0x8+0x3fc+-0x16ac*0x1;else try{_0x3c6592[_0x4ae0f3(0x6e1)][_0x4ae0f3(0x24b)+_0x4ae0f3(0x443)+'d'](_0x4e751e);}catch(_0x3fa3e4){}}catch(_0x2c0d51){}if(!_0x35f337)return;_0x346a3b(_0x2e9bd7,_0x35f337),_0x413bfb[_0x858e75]=_0x2e9bd7['lengt'+'h'];if(_0x858e75===_0x4ae0f3(0x442)+'ents'&&_0x2e9bd7['lengt'+'h']){var _0x4b3cfd=_0x2b290a['capMo'+'ve'];if(_0x4b3cfd)try{_0x4b3cfd[_0x4ae0f3(0x260)+'ed']=![];}catch(_0x17bfb0){}}}}function _0x4395ea(_0x1c9fee,_0x5e7816,_0x28d76e){var _0x11bab9=_0x3cc277,_0x3151fb=_0xaef72['get'](_0x1c9fee);!_0x3151fb&&(_0x3151fb=new Map(),_0xaef72[_0x11bab9(0x1ed)](_0x1c9fee,_0x3151fb));if(!_0x3151fb[_0x11bab9(0x1f2)](_0x5e7816))try{if('DcISJ'!==_0x11bab9(0x27b))for(var _0x4572ba of[_0x11bab9(0x40e)+_0x11bab9(0x327)+'0x250'+'-pare'+'nt',_0x342afd['Tipee'],'kour-'+'io_30'+'0x600'+'-pare'+'nt',_0x11bab9(0x6d1)+'creen'+_0x11bab9(0x4d1)+'s']){var _0x541a44=_0x1ac093[_0x11bab9(0x664)+_0x11bab9(0x1b3)+_0x11bab9(0x643)](_0x4572ba);if(_0x541a44&&_0x4572ba===_0x11bab9(0x6d1)+_0x11bab9(0x5c3)+'-banr'+'s'){var _0x332bfd=_0x541a44['child'+'ren'];for(var _0x471952=0x1777+0x5*0x279+-0x23d4;_0x342afd[_0x11bab9(0x35a)](_0x471952,_0x332bfd[_0x11bab9(0x1f6)+'h']);_0x471952++){if(_0x332bfd[_0x471952]['id']&&_0x332bfd[_0x471952]['id'][_0x11bab9(0x52a)+'Of'](_0x342afd['YEJjN'])===-0x371*0x9+0x12e8+0xc11)_0x332bfd[_0x471952][_0x11bab9(0x3bd)]['displ'+'ay']=_0x342afd[_0x11bab9(0x6e9)];}}else{if(_0x541a44)_0x541a44[_0x11bab9(0x3bd)][_0x11bab9(0x6c2)+'ay']=_0x342afd['zhgEN'];}}else{var _0x151e20=new _0xb0ee0(_0x1c9fee)[_0x11bab9(0x2ad)+'ield'](_0x5e7816,_0x28d76e);_0x3151fb[_0x11bab9(0x1ed)](_0x5e7816,_0x151e20!==undefined?_0x151e20['val']():null);}}catch(_0x2375d0){_0x3151fb[_0x11bab9(0x1ed)](_0x5e7816,null);}return _0x3151fb[_0x11bab9(0x328)](_0x5e7816);}function _0x32fc44(_0x8263c3,_0x1dbf96,_0x4ec44d,_0x165b1f){var _0x1c8fa8=_0x3cc277;try{new _0xb0ee0(_0x8263c3)[_0x1c8fa8(0x5fe)+'Field'](_0x1dbf96,_0x4ec44d,_0x165b1f);}catch(_0x1fdf28){}}function _0x5265bc(_0x1fe713,_0x3964ca){var _0x38eca6=_0x3cc277;try{var _0x40e4fe=new _0xb0ee0(_0x1fe713)[_0x38eca6(0x2ad)+'ield'](_0x3964ca,_0x342afd['jMYKd']);return _0x40e4fe?_0x40e4fe[_0x38eca6(0x370)]():-0xe64+0x67c+0xb8*0xb;}catch(_0x4e242b){return-0x4ed+-0x2*0x796+0x1419;}}function _0x7cd220(_0xbe42c2,_0x55ef51,_0x69a98a,_0x17a7e4){var _0x28fc5e=_0x4395ea(_0xbe42c2,_0x55ef51,_0x69a98a);if(_0x28fc5e!=null)_0x32fc44(_0xbe42c2,_0x55ef51,_0x69a98a,_0x28fc5e*_0x17a7e4);}function _0x33c56d(_0x5b8979,_0x2f8afe,_0x181927,_0x57a68e,_0xda1861,_0x13f3c2,_0x2123b9){var _0x2c707b=_0x3cc277,_0x12949d={'zQWEn':_0x2c707b(0x306)+_0x2c707b(0x6b9)+'07,15'+_0x2c707b(0x29f)+'5)','RoGaK':_0x2c707b(0x306)+_0x2c707b(0x417)+_0x2c707b(0x478)+_0x2c707b(0x46b)+')','kvSaU':function(_0x3dad81,_0x65eef3){var _0x851be9=_0x2c707b;return _0x342afd[_0x851be9(0x657)](_0x3dad81,_0x65eef3);},'BxIGC':function(_0x1e157c,_0xc97537){return _0x1e157c*_0xc97537;},'tKJOY':_0x342afd[_0x2c707b(0x364)],'lWSVV':function(_0x5aa562,_0xfcdd13){return _0x5aa562/_0xfcdd13;},'xBZWk':function(_0x4972d4,_0x24ed61){var _0x5edac8=_0x2c707b;return _0x342afd[_0x5edac8(0x657)](_0x4972d4,_0x24ed61);},'kdyGr':function(_0x52ebdd,_0x1463fe){return _0x52ebdd+_0x1463fe;},'HpFvj':function(_0x2d9319,_0x5df1a8){return _0x2d9319-_0x5df1a8;},'OZdmo':_0x342afd['XONaq'],'PYcRG':function(_0x338264,_0x35d2ca,_0x2f216a,_0x3e16e6,_0x40898e,_0x3ad0fe,_0x3c19ac){return _0x338264(_0x35d2ca,_0x2f216a,_0x3e16e6,_0x40898e,_0x3ad0fe,_0x3c19ac);},'LncAD':_0x2c707b(0x4ae),'UNmkW':_0x342afd['rUAGt'],'NHLsI':function(_0x233330,_0x2ecd49){var _0x1f0bf2=_0x2c707b;return _0x342afd[_0x1f0bf2(0x673)](_0x233330,_0x2ecd49);},'Wiakc':function(_0x7285a1,_0x44f93f){return _0x7285a1(_0x44f93f);},'iFiiq':'\x20CPS','ztwPL':function(_0x5cbf65,_0x3cb1db){var _0x1b3f5b=_0x2c707b;return _0x342afd[_0x1b3f5b(0x284)](_0x5cbf65,_0x3cb1db);},'vMdtZ':function(_0x4f1d0e,_0x285f2c){return _0x4f1d0e-_0x285f2c;},'IGMXu':function(_0x19daf1,_0x225f79){return _0x19daf1===_0x225f79;},'cjjSW':function(_0x61306e,_0xdb48a2){var _0xa506d=_0x2c707b;return _0x342afd[_0xa506d(0x5b3)](_0x61306e,_0xdb48a2);},'rGaNE':function(_0x37b31d,_0x1af6c5){return _0x37b31d*_0x1af6c5;},'PfZzL':_0x342afd['JjLBV'],'TWJNS':function(_0xe457d0,_0x4a8e04){return _0xe457d0+_0x4a8e04;},'AQUsU':_0x2c707b(0x345),'gnotV':function(_0xb0028,_0x40ca1f){return _0xb0028+_0x40ca1f;},'yPlvg':function(_0x517f46,_0x12461b){return _0x517f46*_0x12461b;},'CSLqO':function(_0x50427f,_0x13b314){return _0x50427f*_0x13b314;},'sAFvh':function(_0x3a740f,_0x24a2e7){return _0x3a740f-_0x24a2e7;},'uJpfY':function(_0x3d91f2,_0x519ffe){return _0x3d91f2*_0x519ffe;},'RzMoB':_0x342afd['JJKAI'],'jkJTr':function(_0x37bed2,_0x31b96d,_0xa030b9,_0x5039b2,_0x3e32aa,_0x4d6604,_0x3ef9f5){return _0x37bed2(_0x31b96d,_0xa030b9,_0x5039b2,_0x3e32aa,_0x4d6604,_0x3ef9f5);}};if(_0x342afd['ajhFb']===_0x2c707b(0x620)){var _0x490b81=(_0x2c707b(0x652)+_0x2c707b(0x2c8)+'|5|11'+_0x2c707b(0x669)+'1|10|'+_0x2c707b(0x2cc)+'2')['split']('|'),_0x4bc7bf=-0x9*-0x3fd+-0xd41+-0x16a4;while(!![]){switch(_0x490b81[_0x4bc7bf++]){case'0':var _0x2c69ff=_0x2b3317==='br'?_0x12949d[_0x2c707b(0x563)](_0x59a59c[_0x2c707b(0x420)],-0x39*-0x9+0x18b0+-0x191*0x11)-_0x3681c5:_0x20545c[_0x2c707b(0x48a)]+(0x12b1+-0x226f+0xfce);continue;case'1':_0x519e1c('D',_0x12949d['OZdmo'],_0x2c69ff+_0x12949d[_0x2c707b(0x31d)](_0x236807+_0x41cd50,0x325+-0x2e4*0x1+-0x15*0x3),_0x2f5131+_0x236807+_0x41cd50,_0x236807,_0x236807);continue;case'2':_0x12949d['PYcRG'](_0x519e1c,'A','KeyA',_0x2c69ff,_0x12949d['kdyGr'](_0x2f5131,_0x236807)+_0x41cd50,_0x236807,_0x236807);continue;case'3':_0x519e1c(_0x12949d[_0x2c707b(0x457)],_0x12949d['UNmkW'],_0x2c69ff,_0xf1945e,_0x493394,_0x236807,_0x3f579e['ksCps']?_0x12949d['NHLsI'](_0x12949d['Wiakc'](_0x585419,0x2201+-0x126f+-0xf91),_0x12949d[_0x2c707b(0x2e7)]):'');continue;case'4':var _0x2f5131=_0x2b3317==='ml'?_0x12949d['HpFvj'](_0x4040d5[_0x2c707b(0x61a)]+_0x1781dd[_0x2c707b(0x441)+'t']/(0x1*0x196f+-0x71d*0x3+-0x416),_0x18c6b4/(-0xd*-0x151+-0x1*-0x265d+-0x3778)):_0x12949d[_0x2c707b(0x74a)](_0x12949d[_0x2c707b(0x33e)](_0x22cafd[_0x2c707b(0x6a1)+'m'],_0x18c6b4),_0x12949d[_0x2c707b(0x72b)](_0x2b3317,'bl')?0xc81*0x3+0x20c8+0x7*-0x9fd:-0x329*-0x7+-0x1707+0x17e);continue;case'5':var _0x519e1c=(_0x4a0d4a,_0x3da71b,_0x41ae6a,_0x4231a8,_0x504f18,_0x5560ea,_0x44f870)=>{var _0x4c97bb=_0x2c707b,_0x2dad16=_0x4e103b[_0x4c97bb(0x1f2)](_0x3da71b);_0x5218d5[_0x4c97bb(0x49d)](),_0x26e1fd['begin'+_0x4c97bb(0x464)]();if(_0x23fc4c['round'+'Rect'])_0x4a542f['round'+_0x4c97bb(0x602)](_0x41ae6a,_0x4231a8,_0x504f18,_0x5560ea,(-0x3e*0x3a+0x9*-0x391+0x2e2c)*_0x72fce);else _0x25edbf[_0x4c97bb(0x390)](_0x41ae6a,_0x4231a8,_0x504f18,_0x5560ea);_0x1b4840[_0x4c97bb(0x47c)+_0x4c97bb(0x34a)]=_0x2dad16?_0x12949d[_0x4c97bb(0x225)]:_0x4c97bb(0x306)+_0x4c97bb(0x435)+_0x4c97bb(0x330)+'7)',_0x2d64dd['fill'](),_0x55d1ac[_0x4c97bb(0x689)+'idth']=-0x2*-0x1294+0x1079+-0x35a0,_0x53beab[_0x4c97bb(0x642)+'eStyl'+'e']=_0x2dad16?_0x1ba8f4:_0x4c97bb(0x306)+_0x4c97bb(0x6b9)+_0x4c97bb(0x6cf)+_0x4c97bb(0x23c)+'5)',_0x2107e3['strok'+'e'](),_0x2dad16&&(_0x4bde9f[_0x4c97bb(0x37b)+_0x4c97bb(0x501)+'r']=_0x2348dd,_0x5347c1[_0x4c97bb(0x37b)+_0x4c97bb(0x298)]=0x21fc+0x1d*-0x1d+-0x1ea5,_0x431681[_0x4c97bb(0x6d2)](),_0x3ad6eb[_0x4c97bb(0x37b)+'wBlur']=0x1d45+-0x1a73+-0x13*0x26),_0x563d5b['fillS'+'tyle']=_0x2dad16?'#fff':_0x12949d['RoGaK'],_0x33d6c7['textA'+_0x4c97bb(0x6bd)]='cente'+'r',_0x4eae3c[_0x4c97bb(0x22f)+'aseli'+'ne']=_0x4c97bb(0x6c9)+'e',_0x36e859[_0x4c97bb(0x696)]=_0x12949d[_0x4c97bb(0x61d)](_0x4c97bb(0x653),_0x3b73c6['round'](_0x12949d['BxIGC'](0x1*-0x1979+-0x6f6+0x5*0x67f,_0x72fce)))+_0x12949d[_0x4c97bb(0x711)],_0x279021['fillT'+'ext'](_0x4a0d4a,_0x41ae6a+_0x504f18/(-0x1acd*0x1+-0x1*-0x581+-0x6*-0x38d),_0x4231a8+_0x12949d[_0x4c97bb(0x3c5)](_0x5560ea,0x1120*0x1+0x13*0x2b+-0x144f)-(_0x44f870?(-0x14fc+-0x1a3*0xf+0x2d8e)*_0x72fce:-0x1ab0*-0x1+0x91+0x1b41*-0x1)),_0x44f870&&(_0x492d24['font']=_0x12949d[_0x4c97bb(0x4ea)]('600\x20'+_0x3b7101[_0x4c97bb(0x6bf)]((0x1e65+0x2*0x7c9+-0x2dee)*_0x72fce),_0x4c97bb(0x70c)+'-sans'+'-seri'+_0x4c97bb(0x742)+'tem-u'+'i,san'+_0x4c97bb(0x352)+'if'),_0x129c7a[_0x4c97bb(0x47c)+_0x4c97bb(0x34a)]=_0x2dad16?_0x4c97bb(0x490):'rgba('+_0x4c97bb(0x417)+_0x4c97bb(0x478)+_0x4c97bb(0x51f)+'5)',_0x33e711[_0x4c97bb(0x71a)+_0x4c97bb(0x48b)](_0x44f870,_0x12949d[_0x4c97bb(0x619)](_0x41ae6a,_0x504f18/(0x1*-0x22f+-0x2f*0x23+0x1*0x89e)),_0x4231a8+_0x5560ea/(0x9cf+-0x5*0x517+0xfa6)+(0x9*-0x29d+0x1*0xa5e+0x5*0x2a3)*_0x72fce)),_0x1449af[_0x4c97bb(0x265)+'re']();};continue;case'6':var _0x72fce=_0x5ec7b8(_0x2c0058[_0x2c707b(0x54d)+'le'])||-0xc7*0x13+-0x23e3+0xb*0x49b,_0x236807=_0x12949d['cjjSW'](0x1bf4+0xea+0x6*-0x4ca,_0x72fce),_0x41cd50=_0x12949d[_0x2c707b(0x44b)](0x10d*0x9+-0x7*0x47b+0x7a*0x2e,_0x72fce);continue;case'7':_0x519e1c('S',_0x12949d['PfZzL'],_0x12949d['TWJNS'](_0x2c69ff,_0x236807)+_0x41cd50,_0x12949d['xBZWk'](_0x2f5131,_0x236807)+_0x41cd50,_0x236807,_0x236807);continue;case'8':_0x519e1c(_0x12949d[_0x2c707b(0x6a6)],_0x2c707b(0x422)+'3',_0x12949d[_0x2c707b(0x30d)](_0x2c69ff,_0x493394)+_0x41cd50,_0xf1945e,_0x493394,_0x236807,_0x266889[_0x2c707b(0x400)]?_0x124927(0x1*-0x217+-0xad*-0x1f+-0x5*0x3c5)+_0x12949d[_0x2c707b(0x2e7)]:'');continue;case'9':var _0x3681c5=_0x12949d[_0x2c707b(0x24f)](_0x236807,0x3*-0x2dd+0x1f5b+0x48d*-0x5)+_0x41cd50*(0x212e+0x22cc+-0x43f8),_0x18c6b4=_0x12949d[_0x2c707b(0x61d)](_0x236807*(0x19b5*0x1+0xd54+-0x36*0xb9),_0x12949d[_0x2c707b(0x685)](_0x41cd50,0x4d8+0x1*-0x26+-0x4b0));continue;case'10':var _0x493394=_0x12949d['lWSVV'](_0x12949d['sAFvh'](_0x3681c5,_0x41cd50),0x186c+-0xdc2*-0x1+0x262c*-0x1),_0xf1945e=_0x12949d['NHLsI'](_0x2f5131,_0x12949d['uJpfY'](_0x236807+_0x41cd50,0x1d0e+0x2d7*-0x1+-0x1a35));continue;case'11':_0x519e1c('W',_0x12949d[_0x2c707b(0x5e0)],_0x2c69ff+_0x236807+_0x41cd50,_0x2f5131,_0x236807,_0x236807);continue;case'12':_0x12949d[_0x2c707b(0x1d5)](_0x519e1c,'','Space',_0x2c69ff,_0x12949d[_0x2c707b(0x413)](_0xf1945e,_0x236807)+_0x41cd50,_0x3681c5,_0x236807*(0x1d3c+-0x223a+-0x9*-0x8e+0.45));continue;case'13':var _0x2b3317=_0x1e8fcd['ksPos'];continue;}break;}}else try{if(_0x2c707b(0x314)!==_0x342afd['TYFoF']){var _0x16ba9c=(_0x2c707b(0x1d8)+'|4|0')['split']('|'),_0x19f4d4=0x26b*-0x7+0x1*-0x14a8+0x1*0x2595;while(!![]){switch(_0x16ba9c[_0x19f4d4++]){case'0':return _0x46ebab;case'1':var _0x46ebab=_0x46b1c3['hookP'+_0x2c707b(0x75e)]({'typeName':_0x2f8afe,'methodName':_0x181927,'params':_0x57a68e,'returnType':_0xda1861},_0x13f3c2);continue;case'2':_0x2b290a[_0x5b8979]=_0x46ebab;continue;case'3':_0x46ebab['enabl'+'ed']=_0x342afd[_0x2c707b(0x530)](_0x2123b9,![]);continue;case'4':_0x3c53b1[_0x2c707b(0x4f5)+_0x2c707b(0x4d2)]++;continue;}break;}}else new _0x251be2(_0x24c24a)['write'+_0x2c707b(0x46e)](_0x1d68af,_0x3c8b74,_0x4177ec);}catch(_0x3e1b23){return console[_0x2c707b(0x2cb)]('[saku'+_0x2c707b(0x4ba)+_0x2c707b(0x3e1)+_0x2c707b(0x756)+_0x2c707b(0x2c0)+'iled:',_0x5b8979,_0x3e1b23&&_0x3e1b23[_0x2c707b(0x26f)+'ge']),null;}}function _0x3132b7(_0x566cb2,_0xdd2c65,_0x39ec28,_0x554d55,_0x18ad15,_0x1532b9,_0x3056d2){var _0x4b4f60=_0x3cc277;if('AFkpj'!==_0x4b4f60(0x2d8))_0x985a4b[_0x4b4f60(0x729)+'ct']=_0x957c6e,_0x509eef();else try{var _0x1e195e=_0x46b1c3[_0x4b4f60(0x475)+_0x4b4f60(0x5ec)+'x']({'typeName':_0xdd2c65,'methodName':_0x39ec28,'params':_0x554d55,'returnType':_0x18ad15},_0x1532b9);return _0x1e195e['enabl'+'ed']=_0x3056d2!==![],_0x2b290a[_0x566cb2]=_0x1e195e,_0x3c53b1['hooks'+'Total']++,_0x1e195e;}catch(_0x17403e){return console[_0x4b4f60(0x2cb)](_0x342afd[_0x4b4f60(0x5fd)],_0x566cb2,_0x17403e&&_0x17403e['messa'+'ge']),null;}}var _0x3c6385=()=>![];try{if(_0x342afd[_0x3cc277(0x465)](_0x342afd[_0x3cc277(0x34b)],_0x342afd['mhDKd']))_0x22219d['preve'+_0x3cc277(0x269)+'ault'](),_0x342afd[_0x3cc277(0x41f)](_0x1c4c92);else{if(window['Unity'+_0x3cc277(0x2ef)+_0x3cc277(0x342)]&&!_0x3d48bb[_0x3cc277(0x310)+_0x3cc277(0x3ba)]){_0xb0ee0=window['Unity'+'WebMo'+'dkit']['Value'+_0x3cc277(0x56c)+'er'],_0x46b1c3=window['Unity'+_0x3cc277(0x2ef)+_0x3cc277(0x342)][_0x3cc277(0x53c)+'me']['creat'+_0x3cc277(0x250)+'in']({'name':_0x3cc277(0x324)+_0x3cc277(0x1d9),'version':_0x3cc277(0x19d),'referencedAssemblies':[_0x342afd['VzrVm']]});if(_0x3d48bb['hookG'+'od'])_0x342afd[_0x3cc277(0x713)](_0x33c56d,_0x342afd[_0x3cc277(0x2b5)],_0x342afd['Dntef'],_0x3cc277(0x200)+'ateTa'+'keHea'+_0x3cc277(0x600),['i32','i32'],undefined,_0x3c6385,!!_0x3d48bb[_0x3cc277(0x481)]);if(_0x3d48bb['hookG'+_0x3cc277(0x515)])_0x33c56d('godDi'+'e','OHeal'+'th','Local'+_0x3cc277(0x4bc),['i32',_0x3cc277(0x4c2),'i32',_0x342afd[_0x3cc277(0x555)],_0x342afd['QzdtO']],undefined,_0x3c6385,!!_0x3d48bb['god']);if(_0x3d48bb['hookN'+'oReco'+'il'])_0x33c56d(_0x3cc277(0x455)+_0x3cc277(0x5f0),_0x3cc277(0x69a)+_0x3cc277(0x1fa)+_0x3cc277(0x6e3)+_0x3cc277(0x5d1)+_0x3cc277(0x1aa)+'Recoi'+_0x3cc277(0x762)+'on',_0x3cc277(0x72c),[_0x3cc277(0x4c2)],undefined,_0x3c6385,!!_0x3d48bb['noRec'+_0x3cc277(0x5f0)]);if(_0x3d48bb[_0x3cc277(0x763)+'aptur'+'e'])_0x3132b7(_0x342afd['xEZeg'],_0x342afd[_0x3cc277(0x4e9)],_0x342afd[_0x3cc277(0x288)],[_0x3cc277(0x4c2),_0x342afd['QzdtO']],undefined,(_0x3415f8,_0x1d9b1b)=>{var _0x4b387c=_0x3cc277;_0x5ed244(_0x44646e,_0x1d9b1b,_0x3c53b1,_0x4b387c(0x5d3)+'ers');},!![]);if(_0x3d48bb[_0x3cc277(0x763)+'aptur'+'e'])_0x3132b7(_0x3cc277(0x4e3)+'ve','Legio'+_0x3cc277(0x1fa)+_0x3cc277(0x6e3)+_0x3cc277(0x5d1)+'tide.'+_0x3cc277(0x73b)+_0x3cc277(0x39a),_0x342afd[_0x3cc277(0x52c)],[_0x3cc277(0x4c2)],_0x342afd[_0x3cc277(0x555)],(_0x498029,_0x115632)=>{var _0x3a8a75=_0x3cc277;_0x5ed244(_0x5c5a95,_0x115632,_0x3c53b1,'movem'+_0x3a8a75(0x6b1));},!![]);}}}catch(_0x24c6b2){if(_0x342afd[_0x3cc277(0x213)]!==_0x3cc277(0x750))try{if(_0x4ff812)_0x73c1ad[_0x3cc277(0x67e)](_0x342afd[_0x3cc277(0x4b4)],_0x342afd[_0x3cc277(0x3f9)],[0x551*-0x7+-0x1b75+0x143*0x34]);}catch(_0x11c62a){}else console['warn'](_0x342afd[_0x3cc277(0x32e)],_0x24c6b2&&_0x24c6b2[_0x3cc277(0x26f)+'ge']);}function _0x355bc7(_0x426e40,_0x4397b3){var _0x1a72fd=_0x3cc277,_0x33bfc8=_0x2b290a[_0x426e40];if(_0x33bfc8)try{_0x33bfc8[_0x1a72fd(0x260)+'ed']=!!_0x4397b3;}catch(_0x41569d){}}setInterval(()=>{var _0x2529c1=_0x3cc277,_0x39f89a={'GbMbZ':_0x2529c1(0x2ff)+_0x2529c1(0x2b0)+_0x2529c1(0x6de)+_0x2529c1(0x2c4)+'ion','YIYQy':function(_0x4919e3,_0x250284){return _0x342afd['kLhao'](_0x4919e3,_0x250284);},'eoVLA':function(_0x5a3b8f,_0x56230e){return _0x5a3b8f+_0x56230e;},'mesGC':function(_0x200b47,_0x40e30f){var _0x2ea71a=_0x2529c1;return _0x342afd[_0x2ea71a(0x673)](_0x200b47,_0x40e30f);},'QvjUw':function(_0x259229,_0x3bd07d){return _0x259229+_0x3bd07d;},'jhghz':'held','uznvi':_0x2529c1(0x708),'kCLig':'UWMK\x20'+'MISSI'+_0x2529c1(0x626)+_0x2529c1(0x5d0)+_0x2529c1(0x209)+_0x2529c1(0x6fe)+'einst'+_0x2529c1(0x75a)+'he\x20us'+'erscr'+_0x2529c1(0x412),'MOeos':function(_0x3183c5,_0xa4d10b){return _0x342afd['JwILl'](_0x3183c5,_0xa4d10b);},'aOqzJ':_0x342afd[_0x2529c1(0x51d)],'CbOnO':function(_0x4d5c41,_0x269a51,_0x2ed9ea,_0x11c99d){return _0x4d5c41(_0x269a51,_0x2ed9ea,_0x11c99d);},'VkdBk':_0x2529c1(0x5c5)+_0x2529c1(0x6d4)+_0x2529c1(0x3cd),'ynUSb':_0x2529c1(0x1c5)+_0x2529c1(0x194)+_0x2529c1(0x1a1)+_0x2529c1(0x479)+'plica'+'tion.'+_0x2529c1(0x47b)+_0x2529c1(0x650)+'Frame'+'Rate','vulut':function(_0x533974,_0x24fbea,_0x643dd5){return _0x533974(_0x24fbea,_0x643dd5);}};if(!_0xb0ee0||!window[_0x2529c1(0x1dc)+'Insta'+_0x2529c1(0x2da)])return;var _0x3023ca=(Number(_0x3d48bb[_0x2529c1(0x25e)+'Pct'])||-0x4+-0x6*0x109+0x9a*0xb)/(0xf83+-0x659+-0x8c6),_0x2e822e=(Number(_0x3d48bb[_0x2529c1(0x729)+'ct'])||0x1*-0x5e4+0x178e+-0x21*0x86)/(-0x525+0x345+0x244),_0x1a4993=(Number(_0x3d48bb[_0x2529c1(0x526)+'tyPct'])||0x1*0x18ef+-0xd88+-0xb03)/(-0x757*-0x3+0x3*-0x2f2+-0x5*0x28f),_0x282684=Math[_0x2529c1(0x42c)](0x24a+-0x1a*-0x86+-0xfe5,Number(_0x3d48bb['damag'+'eValu'+'e'])||-0xbcd*0x1+0x5e7+-0x53*-0x14),_0x4ce799=_0x342afd[_0x2529c1(0x530)](_0x3023ca,-0x4f7+-0x2666+0x2b5e)||_0x2e822e!==-0x2046+-0x5*0x265+0x2c40||_0x1a4993!==-0x19c2*0x1+0x10c5+0x47f*0x2||_0x3d48bb['bhop'],_0x58d265=_0x3d48bb['noSpr'+'ead']||_0x3d48bb['damag'+_0x2529c1(0x3ff)]||_0x3d48bb['infAm'+'moExp']||_0x3d48bb[_0x2529c1(0x5f2)+_0x2529c1(0x248)];if(_0x342afd['dSYcT'](!_0x4ce799,!_0x58d265))return;try{for(var _0x1c4036=-0x9e9+-0x1*-0x23d+0x7ac;_0x1c4036<_0x5c5a95['lengt'+'h'];_0x1c4036++){if(_0x342afd['iWMkX'](_0x342afd[_0x2529c1(0x6c3)],_0x2529c1(0x505))){var _0x16dfeb=_0x1c74e8[_0x2529c1(0x366)+_0x2529c1(0x3cc)+'ent'](_0x342afd['QHENe']);_0x16dfeb[_0x2529c1(0x3b5)+_0x2529c1(0x736)]=_0x342afd['skXwE'];var _0x33f4c8=_0x3121da[_0x2529c1(0x366)+'eElem'+_0x2529c1(0x39a)](_0x2529c1(0x1ea));_0x33f4c8['class'+_0x2529c1(0x736)]=_0x342afd[_0x2529c1(0x680)],_0x33f4c8[_0x2529c1(0x64d)+_0x2529c1(0x279)+'t']=_0x4ca97a,_0x16dfeb['appen'+'dChil'+'d'](_0x33f4c8);for(var _0x17a612 of _0xff24b8)_0x16dfeb['appen'+_0x2529c1(0x443)+'d'](_0x17a612);_0x2ab611['appen'+'dChil'+'d'](_0x16dfeb);}else{var _0x5e4a46=_0x5c5a95[_0x1c4036];if(!_0x5e4a46)continue;if(_0x3023ca!==-0x1*0x1711+-0x191*0x11+-0x3*-0x1091){var _0x4f49e6=_0x342afd[_0x2529c1(0x262)][_0x2529c1(0x1ff)]('|'),_0x3aad1e=-0x98*0x21+-0x5f*0x45+-0x2d33*-0x1;while(!![]){switch(_0x4f49e6[_0x3aad1e++]){case'0':_0x7cd220(_0x5e4a46,0x2394+0x369*0xb+-0x48fb,_0x2529c1(0x29b),_0x3023ca);continue;case'1':_0x7cd220(_0x5e4a46,0x1d63+-0x1f*-0xed+0x2*-0x1cf1,_0x2529c1(0x29b),_0x3023ca);continue;case'2':_0x7cd220(_0x5e4a46,0xc5c*-0x2+-0x52b+0x195*0x13,_0x2529c1(0x29b),_0x3023ca);continue;case'3':_0x7cd220(_0x5e4a46,-0x11bf+0x4*-0x8c4+0x34ff,_0x2529c1(0x29b),_0x3023ca);continue;case'4':_0x7cd220(_0x5e4a46,0xc*0x151+0x2e4*-0x8+-0x4*-0x1df,'f32',_0x3023ca);continue;case'5':_0x342afd['uYRXz'](_0x7cd220,_0x5e4a46,0x224+-0xaf3*0x1+0x8ef,_0x2529c1(0x29b),_0x3023ca);continue;}break;}}if(_0x342afd['rLUPx'](_0x2e822e,0x1*0x224e+-0x1*0x2410+-0x1c3*-0x1))_0x7cd220(_0x5e4a46,0xf37+0x3*-0x647+0x3ee,_0x2529c1(0x29b),_0x2e822e);_0x1a4993!==0x21bf+0x1a14+-0x3bd2&&(_0x2529c1(0x25b)==='FBNgY'?(_0x31d3c8(_0x48f896,-0x3*0xb62+-0x17*0xec+0x13e*0x2d,_0x342afd[_0x2529c1(0x423)],0x8ed+-0x220e+0x1*0x1921+0.1),_0x54803d(_0x15325d,0x2ef+0x4b7+-0x3a3*0x2,_0x342afd[_0x2529c1(0x423)],0xb7*0x2d+0xf1a+-0x2f45+0.1)):(_0x342afd[_0x2529c1(0x6e7)](_0x7cd220,_0x5e4a46,-0x12a0+-0x1*0x153e+-0x23b*-0x12,_0x342afd[_0x2529c1(0x423)],_0x1a4993),_0x342afd['FcVVg'](_0x7cd220,_0x5e4a46,-0x5*-0x44f+0x20ed+0x362c*-0x1,_0x342afd[_0x2529c1(0x423)],_0x1a4993)));if(_0x3d48bb['bhop'])_0x32fc44(_0x5e4a46,0x81c+-0xacc+0x34c*0x1,_0x342afd['Bhzha'],-(-0xe41*-0x1+-0x1daf+0x1355));}}}catch(_0x35e478){}try{if(_0x2529c1(0x339)===_0x2529c1(0x2cf)){var _0x2d67ba=_0x20f979['safeM'+_0x2529c1(0x3ba)]?_0x2529c1(0x5d2)+'MODE\x20'+'—\x20ove'+'rlay\x20'+_0x2529c1(0x5db)+_0x2529c1(0x251)+_0x2529c1(0x512)+'(relo'+'ad\x20to'+_0x2529c1(0x4c9)+')':_0x4904a7[_0x2529c1(0x74f)]?_0x39f89a['YIYQy'](_0x39f89a['eoVLA']('UWMK\x20'+'bound'+'\x20',_0x397d5a['hooks'+'Total']?_0x39f89a[_0x2529c1(0x433)](_0x39f89a['QvjUw'](_0x39f89a['mesGC'](_0x3b652b['hooks'+'Ok'],'/'),_0x58705e[_0x2529c1(0x4f5)+_0x2529c1(0x4d2)]),_0x2529c1(0x511)+'s'):_0x2529c1(0x496)+'ks\x20ar'+'med\x20('+_0x2529c1(0x2ee)+_0x2529c1(0x4ac))+(_0x2529c1(0x2b7)+_0x2529c1(0x31f))+(_0x224072[_0x2529c1(0x564)+_0x2529c1(0x67a)]?_0x2529c1(0x4d0)+'d':_0x2529c1(0x4ef)+'ng')+('\x20|\x20sh'+_0x2529c1(0x42f)+'\x20')+(_0x51ff35['shoot'+_0x2529c1(0x679)]?_0x39f89a[_0x2529c1(0x5ed)]:_0x2529c1(0x708))+(_0x2529c1(0x753)+_0x2529c1(0x6b7)+'t\x20'),_0x25f571[_0x2529c1(0x442)+'ents']?_0x39f89a[_0x2529c1(0x5ed)]:_0x39f89a['uznvi']):_0x39f89a[_0x2529c1(0x313)];if(_0x5bf3e0[_0x2529c1(0x1e2)+'rror'])_0x2d67ba+=_0x39f89a[_0x2529c1(0x286)](_0x39f89a['aOqzJ'],_0x4efc7c['lastE'+'rror']);return _0x55b63c('Statu'+'s',_0x2d67ba,_0x585257['uwmk'],null,[_0x39f89a['CbOnO'](_0x250f0a,_0x39f89a['VkdBk'],_0x39f89a[_0x2529c1(0x5cc)],_0x39f89a[_0x2529c1(0x454)](_0x5be4fa,_0x2529c1(0x5df),()=>{var _0x3837f8=_0x2529c1;try{if(_0x4c116f)_0x11394c[_0x3837f8(0x67e)](_0x39f89a['GbMbZ'],_0x3837f8(0x47b)+'arget'+'Frame'+_0x3837f8(0x581),[0x1a71+-0x155b+0x1*-0x426]);}catch(_0x478f1d){}}))]);}else for(var _0x5d6233=-0x1*-0x94f+-0x215+-0x172*0x5;_0x5d6233<_0x44646e['lengt'+'h'];_0x5d6233++){var _0x3aad79=_0x342afd[_0x2529c1(0x6a2)](_0x5265bc,_0x44646e[_0x5d6233],-0x267a+0x49+-0x1*-0x2669);if(!_0x3aad79)continue;_0x3d48bb[_0x2529c1(0x263)+_0x2529c1(0x3ff)]&&(_0x32fc44(_0x3aad79,0x65*-0x3b+0x26d8+0x1*-0xf45,_0x342afd['QzdtO'],_0x282684),_0x342afd['XDCfS'](_0x32fc44,_0x3aad79,0x1bf0+0xd9d+0x2939*-0x1,_0x342afd['QzdtO'],_0x282684));_0x3d48bb['noSpr'+'ead']&&(_0x32fc44(_0x3aad79,-0x1a68+0x5f4+0x14fc*0x1,_0x2529c1(0x29b),-0x1bdc+0x5c6+-0x202*-0xb),_0x342afd[_0x2529c1(0x32f)](_0x32fc44,_0x3aad79,0x1efe+0x4bc*-0x3+-0x2bb*0x6,_0x2529c1(0x29b),0x26f0+0x185e+-0x3f4d));if(_0x3d48bb['infAm'+'moExp'])_0x32fc44(_0x3aad79,-0xd*-0x3e+0x1b9*-0x5+0x7*0xd5,_0x2529c1(0x4c2),-0x13df+0x1f74+0x3d7*-0x2);_0x3d48bb['rapid'+_0x2529c1(0x248)]&&(_0x7cd220(_0x3aad79,-0x2433*-0x1+-0x1074+-0x1333,_0x2529c1(0x29b),0x7*0x32a+-0x262b+0x1005+0.1),_0x32fc44(_0x3aad79,0x3f9+-0x1dbe+0x1a25,_0x342afd[_0x2529c1(0x423)],-0xa0a+-0x3*0x1f7+0xfef+0.1));}}catch(_0x51d244){}},-0x1c09+0x5d6+0x16fb),setInterval(()=>{var _0x1d135a=_0x3cc277;_0x3c53b1[_0x1d135a(0x564)+_0x1d135a(0x67a)]=!!window[_0x1d135a(0x1dc)+_0x1d135a(0x3d6)+'nce'];try{var _0x40fa3b=0xb65*-0x3+-0x626+0x19*0x19d;for(var _0xbcf643 in _0x2b290a){if(_0x2b290a[_0xbcf643]&&_0x2b290a[_0xbcf643][_0x1d135a(0x2be)+'ed'])_0x40fa3b++;}_0x3c53b1['hooks'+'Ok']=_0x40fa3b;}catch(_0x5d2998){}},-0x1b2a+0x1ace+0x444);var _0x17d965=new Set(),_0x4609e7={0x1:[],0x3:[]},_0x368da9=![];function _0x489e27(_0x27fe9b){var _0x4a605d=_0x3cc277;_0x17d965[_0x4a605d(0x362)](_0x27fe9b['code']);}function _0x36d814(_0x3af7d9){var _0x9d6645=_0x3cc277;_0x17d965[_0x9d6645(0x587)+'e'](_0x3af7d9[_0x9d6645(0x438)]);}function _0x1e9927(_0x181f9f){var _0x129e2a=_0x3cc277;if(_0x181f9f['__sak'+_0x129e2a(0x577)])return;_0x17d965['add'](_0x342afd['xWxij']('mouse',_0x181f9f[_0x129e2a(0x33c)+'n']+(0xa*-0x25d+0x117c+-0x15*-0x4b)));var _0x189350=_0x4609e7[_0x181f9f[_0x129e2a(0x33c)+'n']+(-0x768*0x3+-0x7b*0xe+0x1*0x1cf3)];if(_0x189350){if(_0x342afd['yysup'](_0x129e2a(0x4ce),_0x342afd['PzsLa']))_0x291eee['ksPos']=_0x49f08e,_0x398a8f();else{_0x189350['push'](performance[_0x129e2a(0x704)]());if(_0x189350['lengt'+'h']>0xc9e+-0xa*-0x4+0x55*-0x26)_0x189350[_0x129e2a(0x486)]();}}}function _0xffcf88(_0x25f8f9){var _0x957543=_0x3cc277;if(!_0x25f8f9[_0x957543(0x604)+'ura'])_0x17d965['delet'+'e'](_0x342afd[_0x957543(0x657)](_0x342afd[_0x957543(0x27d)],_0x342afd[_0x957543(0x2b1)](_0x25f8f9[_0x957543(0x33c)+'n'],-0x25a7+0x1*0x228c+0x31c)));}function _0x26d047(){var _0x67e181=_0x3cc277;_0x17d965[_0x67e181(0x379)]();}function _0x235b2c(){var _0x5c260f=_0x3cc277,_0x1c0282=(_0x5c260f(0x35b)+_0x5c260f(0x54c)+_0x5c260f(0x434))[_0x5c260f(0x1ff)]('|'),_0x423b83=0x76*0x8+-0x1021+0x5*0x27d;while(!![]){switch(_0x1c0282[_0x423b83++]){case'0':_0x368da9=!![];continue;case'1':window[_0x5c260f(0x6b5)+_0x5c260f(0x3a5)+'stene'+'r'](_0x342afd['fJKGo'],_0x36d814,!![]);continue;case'2':window[_0x5c260f(0x6b5)+_0x5c260f(0x3a5)+_0x5c260f(0x368)+'r'](_0x342afd['OhGga'],_0x489e27,!![]);continue;case'3':if(_0x368da9)return;continue;case'4':window['addEv'+_0x5c260f(0x3a5)+_0x5c260f(0x368)+'r'](_0x342afd[_0x5c260f(0x1df)],_0xffcf88,!![]);continue;case'5':window['addEv'+_0x5c260f(0x3a5)+'stene'+'r']('mouse'+_0x5c260f(0x22d),_0x1e9927,!![]);continue;case'6':window['addEv'+_0x5c260f(0x3a5)+'stene'+'r'](_0x5c260f(0x294),_0x26d047);continue;}break;}}function _0x3dc009(_0x4e3410){var _0x42f027=_0x3cc277,_0x1879b5=_0x4609e7[_0x4e3410]||[],_0x39b718=performance[_0x42f027(0x704)]();while(_0x1879b5[_0x42f027(0x1f6)+'h']&&_0x342afd['QCgxX'](_0x39b718,_0x1879b5[0xae5*0x3+0x38e+-0x243d])>-0x25c1+0x213f+0x167*0x6)_0x1879b5[_0x42f027(0x486)]();return _0x1879b5[_0x42f027(0x1f6)+'h'];}function _0x40e3f9(_0x62887a){var _0x3a4b44=_0x3cc277;if(document[_0x3a4b44(0x6e1)]&&(document[_0x3a4b44(0x4cf)+_0x3a4b44(0x4ab)]===_0x3a4b44(0x321)+'activ'+'e'||document['ready'+_0x3a4b44(0x4ab)]===_0x3a4b44(0x616)+'ete'))_0x342afd[_0x3a4b44(0x6d9)](_0x62887a);else document[_0x3a4b44(0x6b5)+_0x3a4b44(0x3a5)+_0x3a4b44(0x368)+'r'](_0x3a4b44(0x2ae)+_0x3a4b44(0x5a3)+'Loade'+'d',_0x62887a,{'once':!![]});}_0x40e3f9(()=>{var _0x4f8f9f=_0x3cc277,_0x3d8a6f={'KCGQa':function(_0x5a4e61){return _0x5a4e61();},'YeeJH':_0x342afd[_0x4f8f9f(0x4b5)],'lDXsL':function(_0x58085c,_0x396ea7){return _0x58085c===_0x396ea7;},'tgvRy':function(_0x1fe5f7,_0x2bb6de){return _0x1fe5f7<_0x2bb6de;},'zEzyo':function(_0xe36ef4,_0x33a0eb){return _0xe36ef4===_0x33a0eb;},'uBIjA':_0x342afd[_0x4f8f9f(0x289)],'YySqT':_0x342afd[_0x4f8f9f(0x6e9)],'kblCO':function(_0x3eb224,_0x40cfeb){return _0x3eb224!==_0x40cfeb;},'OuWoX':_0x342afd[_0x4f8f9f(0x5bc)],'bTLsW':function(_0x2a21c2,_0x3c9db1){return _0x342afd['rLUPx'](_0x2a21c2,_0x3c9db1);},'ohkpY':_0x4f8f9f(0x6dd),'GDjkg':_0x342afd['mGtNq'],'QkIvT':function(_0x8611d2,_0x3252b7){return _0x8611d2===_0x3252b7;},'sZxZj':function(_0x451b2e,_0x37449e){return _0x342afd['AOCro'](_0x451b2e,_0x37449e);},'vLjkg':function(_0x11c816,_0x47f37a,_0x47bb28,_0x54b3e5,_0x3c2e28,_0x450edf){return _0x11c816(_0x47f37a,_0x47bb28,_0x54b3e5,_0x3c2e28,_0x450edf);},'pMunF':function(_0x48d268,_0x253f29){var _0x18c9ed=_0x4f8f9f;return _0x342afd[_0x18c9ed(0x1e4)](_0x48d268,_0x253f29);},'YOgIU':_0x4f8f9f(0x306)+'22,8,'+_0x4f8f9f(0x330)+'7)','Ucnch':function(_0x1799f1,_0x19269f){return _0x1799f1*_0x19269f;},'ZAacN':_0x4f8f9f(0x490),'rbXoA':function(_0x2f01a5,_0x4f3101){var _0xa45e41=_0x4f8f9f;return _0x342afd[_0xa45e41(0x673)](_0x2f01a5,_0x4f3101);},'bRauP':function(_0x9f6f45,_0x4862d3){return _0x9f6f45!==_0x4862d3;},'QKFBB':'kQgfE','PkOLu':function(_0x24ca1e,_0x1da5c0){return _0x24ca1e*_0x1da5c0;},'BZaMy':function(_0x5ea315,_0x572b72){return _0x5ea315-_0x572b72;},'rPtrt':function(_0x408319,_0x18a341){return _0x408319-_0x18a341;},'NXHLc':function(_0x2900d0,_0x4855e1){var _0x452a32=_0x4f8f9f;return _0x342afd[_0x452a32(0x662)](_0x2900d0,_0x4855e1);},'AgUPC':function(_0x431583,_0x24593b,_0x1907a8,_0x27428f,_0x1b9c83,_0x156d76,_0x3dcd25){var _0x529ff1=_0x4f8f9f;return _0x342afd[_0x529ff1(0x2b9)](_0x431583,_0x24593b,_0x1907a8,_0x27428f,_0x1b9c83,_0x156d76,_0x3dcd25);},'jJRqa':function(_0x26f0bd,_0x5d0570,_0xa6aacb,_0x247d6d,_0x54c75f,_0x36f5d4,_0x41d0b3){return _0x26f0bd(_0x5d0570,_0xa6aacb,_0x247d6d,_0x54c75f,_0x36f5d4,_0x41d0b3);},'lbcjK':function(_0x5b7554,_0x52d58a){return _0x5b7554/_0x52d58a;},'uZbSG':function(_0x3c8aba,_0x4ce55e){return _0x3c8aba-_0x4ce55e;},'mYVSG':function(_0x23f2ee,_0x1ffcfd,_0xe9ca3,_0x234a61,_0x4bd246,_0x16654f,_0x51a964,_0x4423bd){return _0x23f2ee(_0x1ffcfd,_0xe9ca3,_0x234a61,_0x4bd246,_0x16654f,_0x51a964,_0x4423bd);},'IHfjt':'mouse'+'1','VHYLg':function(_0x2d67b6,_0x4b454a){return _0x2d67b6+_0x4b454a;},'xGeaK':'mouse'+'3','LVRFp':function(_0x5bc832,_0x39919c){return _0x5bc832(_0x39919c);},'eNtIz':function(_0x4fe75e,_0x43472a,_0x30ef20,_0x2aa0f3,_0x22d747,_0x35bbd7,_0x12f8ac){return _0x4fe75e(_0x43472a,_0x30ef20,_0x2aa0f3,_0x22d747,_0x35bbd7,_0x12f8ac);},'LGuQi':function(_0x38e322,_0x1c30ec){return _0x38e322*_0x1c30ec;},'WKVer':function(_0x27782c,_0x5bfb80){return _0x342afd['xWxij'](_0x27782c,_0x5bfb80);},'tCkZG':function(_0x5e1453,_0x4ebab5){return _0x5e1453+_0x4ebab5;},'fMsNQ':function(_0x5516f4,_0x5ea76a){var _0x5c2652=_0x4f8f9f;return _0x342afd[_0x5c2652(0x2e0)](_0x5516f4,_0x5ea76a);},'aawvG':_0x4f8f9f(0x2b4)+'9d','CoCQv':function(_0x54e471,_0x5deb4e){var _0x2770b4=_0x4f8f9f;return _0x342afd[_0x2770b4(0x39b)](_0x54e471,_0x5deb4e);},'cEdEs':function(_0x24d2d5,_0x5d45d6){return _0x342afd['AMReN'](_0x24d2d5,_0x5d45d6);},'bXBSx':function(_0x93da1d,_0x303a0f){return _0x342afd['QCgxX'](_0x93da1d,_0x303a0f);},'odjQY':function(_0x2041c5,_0xd8af77){var _0x2f71fc=_0x4f8f9f;return _0x342afd[_0x2f71fc(0x2dc)](_0x2041c5,_0xd8af77);},'ZoLUC':function(_0x3117fa,_0x49856f){var _0x764a1=_0x4f8f9f;return _0x342afd[_0x764a1(0x21f)](_0x3117fa,_0x49856f);},'ucUWn':'ySWTg','EJlDG':_0x4f8f9f(0x741),'xvkEy':function(_0x40326d,_0x2931f4){return _0x40326d!==_0x2931f4;},'hJZuc':_0x342afd[_0x4f8f9f(0x2e8)],'sOcth':'aria-'+_0x4f8f9f(0x33d)+'ed','xGnep':function(_0x29e842,_0x51f126){return _0x29e842(_0x51f126);},'dzmah':_0x4f8f9f(0x683),'MiBub':function(_0x491efb,_0x29f56f){return _0x491efb(_0x29f56f);},'Egwzq':_0x4f8f9f(0x316),'tuXaC':_0x4f8f9f(0x1d6)+_0x4f8f9f(0x195),'XohfH':_0x342afd[_0x4f8f9f(0x30a)],'CLREK':_0x4f8f9f(0x266)+'h','oudjO':_0x342afd[_0x4f8f9f(0x56e)],'AmETA':_0x342afd[_0x4f8f9f(0x20e)],'zxQgp':_0x4f8f9f(0x67d),'aqDEs':'input','yHPrJ':function(_0x597f05,_0x1bf164){return _0x597f05(_0x1bf164);},'AfsCG':_0x4f8f9f(0x534)+_0x4f8f9f(0x28b),'tnuAp':function(_0x20a0cb,_0x480fdf,_0x329d4c){return _0x20a0cb(_0x480fdf,_0x329d4c);},'xBCgL':function(_0x3805e7,_0x20797b,_0x5bd7cc){return _0x342afd['prDWj'](_0x3805e7,_0x20797b,_0x5bd7cc);},'oGAVw':function(_0x3b3134,_0x382afd){return _0x3b3134*_0x382afd;},'tJMNe':'noRec'+_0x4f8f9f(0x5f0),'vctwY':_0x4f8f9f(0x1ea),'XGfIk':function(_0x2e8e3d,_0x3d058f){var _0x2f62fa=_0x4f8f9f;return _0x342afd[_0x2f62fa(0x6a9)](_0x2e8e3d,_0x3d058f);},'OMtkP':'\x20on','dJlQR':function(_0x1dc1d5,_0x48a8fe,_0x50c2a9){return _0x1dc1d5(_0x48a8fe,_0x50c2a9);},'DJdck':_0x342afd[_0x4f8f9f(0x731)],'WVtvj':function(_0x1a1777,_0x46b9a0){var _0x1cc1a8=_0x4f8f9f;return _0x342afd[_0x1cc1a8(0x25a)](_0x1a1777,_0x46b9a0);},'bHhHF':function(_0xa37d85){return _0xa37d85();},'qWzpR':_0x342afd['lkuEQ'],'RVYBP':_0x4f8f9f(0x254),'SUvKW':_0x4f8f9f(0x60a),'tiHZX':_0x342afd['TZxDT'],'IlprN':function(_0x33d0bc){return _0x33d0bc();},'OuYkx':function(_0x4c07b3,_0xeb2839){return _0x4c07b3(_0xeb2839);},'DErxT':_0x342afd[_0x4f8f9f(0x754)],'pfhEz':_0x4f8f9f(0x4a2)+_0x4f8f9f(0x610)+'3','zgmPu':function(_0x43ae84,_0x5c2bf9){var _0x5a760=_0x4f8f9f;return _0x342afd[_0x5a760(0x583)](_0x43ae84,_0x5c2bf9);},'rZZdV':_0x4f8f9f(0x47f),'nGQra':_0x4f8f9f(0x68f),'FBFzw':_0x342afd['fsnXN'],'ubzaJ':function(_0x1f737e,_0x44aa43){var _0x496d22=_0x4f8f9f;return _0x342afd[_0x496d22(0x688)](_0x1f737e,_0x44aa43);},'XjxTb':'\x20|\x20ga'+_0x4f8f9f(0x31f),'xTTFd':_0x4f8f9f(0x4d0)+'d','TGGGO':_0x4f8f9f(0x4ef)+'ng','ADKnL':_0x342afd['TwSlr'],'wERSX':'\x20|\x20ER'+_0x4f8f9f(0x539),'SpmSp':_0x342afd[_0x4f8f9f(0x4e7)],'fCpzh':_0x4f8f9f(0x356)+'go','jpgZi':_0x342afd['GzTHJ'],'oBpRg':_0x4f8f9f(0x230)+'tles','AypJS':_0x342afd[_0x4f8f9f(0x1c3)],'VJTeP':'butto'+'n','dvERu':'mn-cl'+_0x4f8f9f(0x477),'DenDi':_0x342afd[_0x4f8f9f(0x757)],'HyHlX':_0x4f8f9f(0x58f)+'ls','OfiLw':_0x4f8f9f(0x6ca)+'b','zytbA':_0x342afd[_0x4f8f9f(0x623)],'goiMn':_0x4f8f9f(0x641)+'t','rQwZp':function(_0x1ed4f3,_0x442c32,_0x27695d){var _0x12418a=_0x4f8f9f;return _0x342afd[_0x12418a(0x6a2)](_0x1ed4f3,_0x442c32,_0x27695d);},'aGRjS':function(_0x58c87d,_0x2aa8cf){return _0x58c87d!==_0x2aa8cf;},'fTFMN':_0x4f8f9f(0x2a0)};_0x3d48bb['adblo'+'ck']&&setInterval(()=>{var _0x1982cc=_0x4f8f9f;if(_0x1982cc(0x2f7)!==_0x1982cc(0x2f7))_0x287de0['noSpr'+'ead']=_0x342ca2,_0x3d8a6f[_0x1982cc(0x65c)](_0x1ed11e);else try{for(var _0x2b4e74 of[_0x1982cc(0x40e)+_0x1982cc(0x327)+'0x250'+'-pare'+'nt','kour-'+'io_72'+'8x90-'+'paren'+'t','kour-'+'io_30'+'0x600'+_0x1982cc(0x25d)+'nt',_0x3d8a6f['YeeJH']]){var _0x3db9a7=document['getEl'+'ement'+'ById'](_0x2b4e74);if(_0x3db9a7&&_0x3d8a6f[_0x1982cc(0x196)](_0x2b4e74,'fulls'+'creen'+'-banr'+'s')){var _0x570cf0=_0x3db9a7[_0x1982cc(0x738)+_0x1982cc(0x64a)];for(var _0x65d701=-0x1*-0x18ed+-0x2002*-0x1+-0x38ef;_0x3d8a6f['tgvRy'](_0x65d701,_0x570cf0[_0x1982cc(0x1f6)+'h']);_0x65d701++){if(_0x3d8a6f[_0x1982cc(0x43a)](_0x1982cc(0x1c2),_0x1982cc(0x1c2))){if(_0x570cf0[_0x65d701]['id']&&_0x570cf0[_0x65d701]['id'][_0x1982cc(0x52a)+'Of'](_0x3d8a6f[_0x1982cc(0x64f)])===-0x1a14+-0x1*0x15a6+0x2fba)_0x570cf0[_0x65d701][_0x1982cc(0x3bd)][_0x1982cc(0x6c2)+'ay']='none';}else{var _0x459a7d=('2|0|1'+_0x1982cc(0x2a8))['split']('|'),_0x18dbc=0x57b+0x1*-0x1a8d+0xa89*0x2;while(!![]){switch(_0x459a7d[_0x18dbc++]){case'0':_0x5d6eda[_0x1982cc(0x260)+'ed']=_0x5a994f!==![];continue;case'1':_0x54dce3[_0x4d47b3]=_0x5d6eda;continue;case'2':var _0x5d6eda=_0x15d432[_0x1982cc(0x475)+_0x1982cc(0x5ec)+'x']({'typeName':_0x556611,'methodName':_0x4906ba,'params':_0xa25c9,'returnType':_0x5e8fea},_0x3e95a8);continue;case'3':_0x111300[_0x1982cc(0x4f5)+'Total']++;continue;case'4':return _0x5d6eda;}break;}}}}else{if(_0x3db9a7)_0x3db9a7[_0x1982cc(0x3bd)][_0x1982cc(0x6c2)+'ay']=_0x3d8a6f[_0x1982cc(0x6e2)];}}}catch(_0x2e1ca1){}},0x20be+-0x20b*0xb+-0x275);var _0x3cb2e1=document[_0x4f8f9f(0x366)+_0x4f8f9f(0x3cc)+_0x4f8f9f(0x39a)]('canva'+'s');_0x3cb2e1['style']['cssTe'+'xt']=_0x4f8f9f(0x36c)+_0x4f8f9f(0x3b7)+_0x4f8f9f(0x67c)+_0x4f8f9f(0x21c)+_0x4f8f9f(0x6ef)+'dth:1'+_0x4f8f9f(0x22c)+_0x4f8f9f(0x441)+_0x4f8f9f(0x50e)+'vh;z-'+'index'+_0x4f8f9f(0x519)+_0x4f8f9f(0x431)+'6;poi'+_0x4f8f9f(0x296)+'event'+'s:non'+'e';var _0x3666be=_0x3cb2e1['getCo'+_0x4f8f9f(0x1c0)]('2d');function _0x4c2478(){var _0x42421a=_0x4f8f9f,_0x47c71c={'HVaTP':function(_0x36d667){return _0x36d667();}};try{var _0x3efa80=document[_0x42421a(0x6d1)+_0x42421a(0x5c3)+_0x42421a(0x47d)+'nt'],_0x402cd5=_0x3efa80&&_0x3d8a6f[_0x42421a(0x2bc)](_0x3efa80['tagNa'+'me'],_0x3d8a6f[_0x42421a(0x242)])?_0x3efa80:document['body']||document[_0x42421a(0x4fa)+'entEl'+'ement'];if(_0x3cb2e1[_0x42421a(0x2d6)+'tNode']!==_0x402cd5)_0x402cd5[_0x42421a(0x24b)+_0x42421a(0x443)+'d'](_0x3cb2e1);}catch(_0x3c264a){try{_0x3d8a6f[_0x42421a(0x6f2)]('zKcoU',_0x42421a(0x20b))?document['body'][_0x42421a(0x24b)+_0x42421a(0x443)+'d'](_0x3cb2e1):(_0x3801ab['hookN'+'oReco'+'il']=_0x24ebea,_0x47c71c[_0x42421a(0x487)](_0x4afdba));}catch(_0x59e855){}}}var _0x5c1847={'w':0x0,'h':0x0,'dpr':0x0};function _0x452bee(){var _0x543efa=_0x4f8f9f;if(_0x3d8a6f['kblCO'](_0x3d8a6f['GDjkg'],_0x543efa(0x1b9))){var _0x5c2abc=_0x4deae9[_0x543efa(0x366)+'eElem'+'ent'](_0x3d8a6f[_0x543efa(0x3ae)]);_0x5c2abc['class'+_0x543efa(0x736)]=_0x543efa(0x392)+'nt',_0x5c2abc['textC'+_0x543efa(0x279)+'t']=_0x4f0ba,_0x585e2b[_0x543efa(0x24b)+_0x543efa(0x443)+'d'](_0x5c2abc);}else{var _0x41fc23=('1|6|0'+'|2|5|'+'8|7|3'+'|4')[_0x543efa(0x1ff)]('|'),_0x3685c4=-0x1*-0x526+-0xb0*-0x1f+-0x1a76;while(!![]){switch(_0x41fc23[_0x3685c4++]){case'0':if(_0x3d8a6f[_0x543efa(0x6e0)](_0x506cbf,_0x5c1847['w'])&&_0x3750f7===_0x5c1847['h']&&_0x3d8a6f['sZxZj'](_0x483054,_0x5c1847['dpr']))return;continue;case'1':var _0x483054=window['devic'+'ePixe'+_0x543efa(0x4a5)+'o']||0x86e+-0x2092+-0x1*-0x1825;continue;case'2':_0x5c1847['w']=_0x506cbf;continue;case'3':_0x3cb2e1['heigh'+'t']=Math[_0x543efa(0x6bf)](_0x3750f7*_0x483054);continue;case'4':_0x3666be[_0x543efa(0x579)+'ansfo'+'rm'](_0x483054,0x1cd1+0x1f52+0x3c23*-0x1,0x5a+0x5d+-0xb7,_0x483054,-0x1*0x905+0x7*-0x344+0x1fe1,0xf7*-0x27+-0x79e+0x2d3f);continue;case'5':_0x5c1847['h']=_0x3750f7;continue;case'6':var _0x506cbf=window[_0x543efa(0x507)+'Width'],_0x3750f7=window[_0x543efa(0x507)+_0x543efa(0x64e)+'t'];continue;case'7':_0x3cb2e1[_0x543efa(0x60e)]=Math['round'](_0x506cbf*_0x483054);continue;case'8':_0x5c1847['dpr']=_0x483054;continue;}break;}}}var _0x589591=-0x146b+-0x9f*0x1a+-0x197*-0x17,_0x18a18b=performance['now'](),_0x445f91=-0x26b*-0x4+0x20ed*-0x1+0x1*0x1741;function _0x4e9116(_0x3fc92e){var _0x778c2=_0x4f8f9f,_0x46090a={'ohvaR':function(_0x57d25a,_0x55bc62){return _0x57d25a*_0x55bc62;},'sCRfv':_0x3d8a6f[_0x778c2(0x395)],'gvxBn':_0x778c2(0x306)+_0x778c2(0x417)+_0x778c2(0x478)+_0x778c2(0x46b)+')','YqGbO':_0x778c2(0x546)+'r','PxniG':function(_0x3a6bc3,_0x103954){return _0x3a6bc3+_0x103954;},'AGrxo':function(_0x4977f9,_0x212048){return _0x3d8a6f['Ucnch'](_0x4977f9,_0x212048);},'grvDj':function(_0x1b2c93,_0x4b4109){return _0x1b2c93-_0x4b4109;},'hlQbd':_0x3d8a6f['ZAacN'],'KzsYH':function(_0x1328db,_0x5b0ebf){return _0x1328db/_0x5b0ebf;},'oisYh':function(_0x42f1f3,_0x3a66c3){var _0xeb6cf9=_0x778c2;return _0x3d8a6f[_0xeb6cf9(0x3e0)](_0x42f1f3,_0x3a66c3);},'HpWgK':function(_0x246bae,_0x55fad4){return _0x246bae/_0x55fad4;},'atWZs':function(_0x1f723d){return _0x3d8a6f['KCGQa'](_0x1f723d);}};if(_0x3d8a6f[_0x778c2(0x1fc)](_0x3d8a6f['QKFBB'],_0x778c2(0x44e))){var _0x3905c1=Number(_0x3d48bb[_0x778c2(0x54d)+'le'])||0x1c97+-0x7*0x471+0x281,_0x29cfbe=(-0x164e+-0xeca+-0x5*-0x772)*_0x3905c1,_0x11cb4e=_0x3d8a6f['PkOLu'](-0x1*0x216b+-0x1*0x17b+0x22ea,_0x3905c1),_0x2f371b=_0x29cfbe*(-0x1*0x10f5+-0x5c0+0x16b8)+_0x3d8a6f['Ucnch'](_0x11cb4e,0x886*-0x2+-0x1d30+0x6*0x7b5),_0x2bf123=_0x3d8a6f[_0x778c2(0x3e0)](_0x29cfbe*(0x1e*-0xd4+0x647*0x1+0x1294),_0x11cb4e*(-0xd3a+-0x1*-0x2113+-0x13d7)),_0x16f116=_0x3d48bb['ksPos'],_0x15fb3c=_0x16f116==='br'?_0x3d8a6f[_0x778c2(0x460)](_0x3fc92e[_0x778c2(0x420)],0x23d1+-0x19cd+-0x62*0x1a)-_0x2f371b:_0x3fc92e['left']+(-0x1963*-0x1+0x18dd*0x1+-0x3230),_0x4e0ece=_0x16f116==='ml'?_0x3fc92e[_0x778c2(0x61a)]+_0x3fc92e['heigh'+'t']/(-0x1e14+-0x6ce+0x24e4)-_0x2bf123/(-0x1846+-0xd1*-0x24+0x6d*-0xc):_0x3d8a6f[_0x778c2(0x5d6)](_0x3fc92e['botto'+'m']-_0x2bf123,_0x3d8a6f[_0x778c2(0x4c5)](_0x16f116,'bl')?0xace+0x65*-0x1+-0xa09:-0x1402+-0x8*0x323+0x2db0),_0x141c73=(_0x4679a0,_0x2e36fa,_0x2fbef7,_0x489159,_0x330746,_0x59f392,_0x4ed843)=>{var _0x5e3087=_0x778c2,_0x5d9a46=_0x17d965['has'](_0x2e36fa);_0x3666be[_0x5e3087(0x49d)](),_0x3666be['begin'+'Path']();if(_0x3666be[_0x5e3087(0x6bf)+_0x5e3087(0x602)])_0x3666be['round'+'Rect'](_0x2fbef7,_0x489159,_0x330746,_0x59f392,_0x46090a[_0x5e3087(0x273)](-0x87d*-0x4+0x5*0x3b3+-0x346c,_0x3905c1));else _0x3666be['rect'](_0x2fbef7,_0x489159,_0x330746,_0x59f392);_0x3666be[_0x5e3087(0x47c)+_0x5e3087(0x34a)]=_0x5d9a46?_0x5e3087(0x306)+_0x5e3087(0x6b9)+_0x5e3087(0x6cf)+_0x5e3087(0x29f)+'5)':_0x46090a[_0x5e3087(0x500)],_0x3666be['fill'](),_0x3666be[_0x5e3087(0x689)+_0x5e3087(0x2ab)]=-0x2199*-0x1+0x178b+0x3923*-0x1,_0x3666be['strok'+_0x5e3087(0x26c)+'e']=_0x5d9a46?_0x2108a9:_0x5e3087(0x306)+_0x5e3087(0x6b9)+'07,15'+_0x5e3087(0x23c)+'5)',_0x3666be['strok'+'e'](),_0x5d9a46&&(_0x3666be[_0x5e3087(0x37b)+_0x5e3087(0x501)+'r']=_0x39c9ec,_0x3666be[_0x5e3087(0x37b)+'wBlur']=0x121a*0x2+0x5d6+-0x29fc,_0x3666be['fill'](),_0x3666be[_0x5e3087(0x37b)+'wBlur']=0x238d+0x580*-0x4+-0xd8d),_0x3666be['fillS'+_0x5e3087(0x34a)]=_0x5d9a46?_0x5e3087(0x490):_0x46090a['gvxBn'],_0x3666be[_0x5e3087(0x57a)+'lign']=_0x46090a[_0x5e3087(0x2f9)],_0x3666be[_0x5e3087(0x22f)+_0x5e3087(0x378)+'ne']=_0x5e3087(0x6c9)+'e',_0x3666be['font']=_0x46090a['PxniG'](_0x5e3087(0x653),Math['round'](_0x46090a[_0x5e3087(0x1fb)](0x1673+0x2440+-0x3aa7,_0x3905c1)))+(_0x5e3087(0x70c)+_0x5e3087(0x70b)+'-seri'+_0x5e3087(0x742)+'tem-u'+_0x5e3087(0x2aa)+_0x5e3087(0x352)+'if'),_0x3666be[_0x5e3087(0x71a)+'ext'](_0x4679a0,_0x2fbef7+_0x330746/(0x9b1*-0x3+-0x1*-0x6b9+0x165c),_0x46090a['grvDj'](_0x489159+_0x59f392/(-0x434*0x5+0x469+-0x1*-0x109d),_0x4ed843?(0x153c+0x1678+0xd3*-0x35)*_0x3905c1:-0x1476+0x204f*-0x1+0x34c5)),_0x4ed843&&(_0x3666be['font']=_0x46090a['PxniG'](_0x46090a['PxniG'](_0x5e3087(0x48c),Math[_0x5e3087(0x6bf)]((0x1442+-0x23*-0xb3+-0x2cb2)*_0x3905c1)),'px\x20ui'+'-sans'+_0x5e3087(0x552)+_0x5e3087(0x742)+_0x5e3087(0x4e8)+'i,san'+'s-ser'+'if'),_0x3666be['fillS'+_0x5e3087(0x34a)]=_0x5d9a46?_0x46090a[_0x5e3087(0x20f)]:_0x5e3087(0x306)+'255,2'+_0x5e3087(0x478)+_0x5e3087(0x51f)+'5)',_0x3666be['fillT'+_0x5e3087(0x48b)](_0x4ed843,_0x2fbef7+_0x46090a[_0x5e3087(0x21b)](_0x330746,0x16fa+0x1*-0x1465+-0x293),_0x46090a['oisYh'](_0x46090a[_0x5e3087(0x542)](_0x489159,_0x46090a[_0x5e3087(0x215)](_0x59f392,-0xc7*-0x1d+0xaf6+-0x217f)),(-0xcab+-0x1c07+0x145d*0x2)*_0x3905c1))),_0x3666be[_0x5e3087(0x265)+'re']();};_0x3d8a6f[_0x778c2(0x6f8)](_0x141c73,'W',_0x778c2(0x292),_0x3d8a6f['rbXoA'](_0x15fb3c+_0x29cfbe,_0x11cb4e),_0x4e0ece,_0x29cfbe,_0x29cfbe),_0x3d8a6f[_0x778c2(0x44a)](_0x141c73,'A',_0x778c2(0x43c),_0x15fb3c,_0x3d8a6f[_0x778c2(0x3e0)](_0x4e0ece+_0x29cfbe,_0x11cb4e),_0x29cfbe,_0x29cfbe),_0x141c73('S','KeyS',_0x15fb3c+_0x29cfbe+_0x11cb4e,_0x4e0ece+_0x29cfbe+_0x11cb4e,_0x29cfbe,_0x29cfbe),_0x141c73('D','KeyD',_0x15fb3c+(_0x29cfbe+_0x11cb4e)*(-0x1b59+-0xc*-0x2f1+-0x7f1),_0x4e0ece+_0x29cfbe+_0x11cb4e,_0x29cfbe,_0x29cfbe);var _0x5782eb=_0x3d8a6f[_0x778c2(0x57c)](_0x3d8a6f[_0x778c2(0x341)](_0x2f371b,_0x11cb4e),0xde5+-0x1f*0x95+0x1c*0x26),_0x42956a=_0x4e0ece+_0x3d8a6f[_0x778c2(0x51c)](_0x29cfbe+_0x11cb4e,-0x1b65*-0x1+-0xb*0x23+-0x19e2*0x1);_0x3d8a6f['mYVSG'](_0x141c73,_0x778c2(0x4ae),_0x3d8a6f[_0x778c2(0x585)],_0x15fb3c,_0x42956a,_0x5782eb,_0x29cfbe,_0x3d48bb[_0x778c2(0x400)]?_0x3d8a6f[_0x778c2(0x576)](_0x3d8a6f[_0x778c2(0x3bf)](_0x3dc009,-0x737*0x3+0x7ab*0x1+0xdfb),_0x778c2(0x40b)):''),_0x141c73('RMB',_0x3d8a6f['xGeaK'],_0x3d8a6f[_0x778c2(0x3e0)](_0x15fb3c,_0x5782eb)+_0x11cb4e,_0x42956a,_0x5782eb,_0x29cfbe,_0x3d48bb['ksCps']?_0x3d8a6f['LVRFp'](_0x3dc009,0x88c+0x2252+-0x2adb)+'\x20CPS':''),_0x3d8a6f[_0x778c2(0x634)](_0x141c73,'',_0x778c2(0x73e),_0x15fb3c,_0x42956a+_0x29cfbe+_0x11cb4e,_0x2f371b,_0x3d8a6f[_0x778c2(0x5af)](_0x29cfbe,0x236e+0x5b*-0x31+0x1203*-0x1+0.45));}else return[_0x3d8a6f['vLjkg'](_0x4e25aa,_0x778c2(0x47e)+'ck',_0x778c2(0x221)+_0x778c2(0x5b0)+_0x778c2(0x633)+_0x778c2(0x244)+_0x778c2(0x259)+'ots.',_0x14480f[_0x778c2(0x720)+'ck'],_0x9658dc=>{var _0x68c23b=_0x778c2;_0x399b67['adblo'+'ck']=_0x9658dc,_0x46090a[_0x68c23b(0x6b2)](_0x332a74);},[_0x3d8a6f[_0x778c2(0x3bf)](_0x40fef2,_0x778c2(0x580)+_0x778c2(0x53d)+_0x778c2(0x3ad)+'\x20relo'+_0x778c2(0x5f4)+_0x778c2(0x32d)+'ggled'+'.')])];}function _0xfb006b(_0x5ba1bc){var _0x35b40e=_0x4f8f9f,_0x5d9114=(_0x35b40e(0x5f8)+'13|16'+_0x35b40e(0x4b9)+_0x35b40e(0x732)+'|21|1'+_0x35b40e(0x331)+'9|20|'+'3|1|1'+'2|7|2'+_0x35b40e(0x5dd)+_0x35b40e(0x40d)+_0x35b40e(0x6be)+'5')[_0x35b40e(0x1ff)]('|'),_0x2d694c=-0x1404+0x1*-0x2627+-0x1*-0x3a2b;while(!![]){switch(_0x5d9114[_0x2d694c++]){case'0':_0x3666be[_0x35b40e(0x37b)+_0x35b40e(0x501)+'r']=_0x335a2d;continue;case'1':_0x3666be['lineT'+'o'](_0x496bdf+_0x330b52+_0x1c5ead,_0x489a0a);continue;case'2':_0x3666be['moveT'+'o'](_0x496bdf,_0x3d8a6f['WKVer'](_0x489a0a,_0x330b52));continue;case'3':_0x3666be[_0x35b40e(0x5de)+'o'](_0x3d8a6f[_0x35b40e(0x3e0)](_0x496bdf,_0x330b52),_0x489a0a);continue;case'4':_0x3666be[_0x35b40e(0x4ca)+_0x35b40e(0x464)]();continue;case'5':_0x3666be['begin'+_0x35b40e(0x464)]();continue;case'6':_0x3666be[_0x35b40e(0x695)+'o'](_0x496bdf,_0x3d8a6f[_0x35b40e(0x6fa)](_0x3d8a6f['VHYLg'](_0x489a0a,_0x330b52),_0x1c5ead));continue;case'7':_0x3666be['lineT'+'o'](_0x496bdf,_0x489a0a-_0x330b52);continue;case'8':_0x3666be[_0x35b40e(0x47c)+_0x35b40e(0x34a)]=_0x335a2d;continue;case'9':var _0x496bdf=_0x3d8a6f[_0x35b40e(0x518)](_0x5ba1bc['width'],-0x114c+0x1*-0x1912+-0x6*-0x710),_0x489a0a=_0x3d8a6f[_0x35b40e(0x518)](_0x5ba1bc[_0x35b40e(0x441)+'t'],-0x1*0x10f+-0x17*0x162+-0x1*-0x20df);continue;case'10':_0x3666be['strok'+'e']();continue;case'11':_0x3666be[_0x35b40e(0x589)](_0x496bdf,_0x489a0a,(-0x40*0xa+0x13*-0xee+0x142b+0.6000000000000001)*_0x2e15da,-0x4*-0x69b+0xf7f+0x7*-0x5fd,Math['PI']*(-0x25*-0xfd+0xab7+-0x2f46));continue;case'12':_0x3666be['moveT'+'o'](_0x496bdf,_0x489a0a-_0x330b52-_0x1c5ead);continue;case'13':var _0x335a2d=/^#[0-9a-f]{6}$/i[_0x35b40e(0x5c1)](_0x3d48bb['chCol'+'or'])?_0x3d48bb['chCol'+'or']:_0x3d8a6f[_0x35b40e(0x649)];continue;case'14':_0x3666be[_0x35b40e(0x689)+_0x35b40e(0x2ab)]=Math[_0x35b40e(0x42c)](-0x14c9+-0x1abd*-0x1+-0x1*0x5f3+0.5,(-0x197c+0x196d+0x1*0x11)*_0x2e15da);continue;case'15':_0x3666be[_0x35b40e(0x265)+'re']();continue;case'16':_0x3666be['save']();continue;case'17':var _0x330b52=_0x3d8a6f[_0x35b40e(0x646)](0x2*0x4fd+0x18be+-0x22b2*0x1,_0x2e15da),_0x1c5ead=_0x3d8a6f[_0x35b40e(0x391)](-0x1e8+-0x1aac*-0x1+0x4*-0x62f,_0x2e15da);continue;case'18':_0x3666be['strok'+_0x35b40e(0x26c)+'e']=_0x335a2d;continue;case'19':_0x3666be[_0x35b40e(0x5de)+'o'](_0x496bdf-_0x330b52-_0x1c5ead,_0x489a0a);continue;case'20':_0x3666be[_0x35b40e(0x695)+'o'](_0x3d8a6f['bXBSx'](_0x496bdf,_0x330b52),_0x489a0a);continue;case'21':_0x3666be[_0x35b40e(0x37b)+_0x35b40e(0x298)]=-0xb*-0x224+0x10f*-0x9+0xdff*-0x1;continue;case'22':_0x3666be['fill']();continue;case'23':var _0x2e15da=_0x3d8a6f['odjQY'](Number,_0x3d48bb[_0x35b40e(0x674)+'e'])||-0x14b*-0x10+-0x155a+0xab*0x1;continue;}break;}}function _0x586dde(_0x2681c2){var _0x905fc8=_0x4f8f9f,_0xa7f634={'zYhiG':function(_0x24df45,_0xcb156){return _0x24df45||_0xcb156;},'dwjlN':_0x905fc8(0x306)+'255,2'+'35,24'+_0x905fc8(0x5ab)+'5)'};if(_0x342afd[_0x905fc8(0x538)]===_0x905fc8(0x1bc)){var _0x5eef6a=_0x1ddd30[_0x905fc8(0x366)+'eElem'+'ent'](_0x905fc8(0x198)+'n');_0x5eef6a['value']=_0x4b242d,_0x5eef6a[_0x905fc8(0x64d)+_0x905fc8(0x279)+'t']=_0x2a27dd,_0x24885f['appen'+_0x905fc8(0x443)+'d'](_0x5eef6a);}else{_0x3666be['save'](),_0x3666be['font']=_0x905fc8(0x632)+'2px\x20u'+_0x905fc8(0x760)+'ospac'+_0x905fc8(0x5d8)+_0x905fc8(0x4bb)+'e',_0x3666be['textA'+'lign']=_0x342afd[_0x905fc8(0x4e0)],_0x3666be['textB'+'aseli'+'ne']=_0x905fc8(0x61a);var _0x474c62=0x1d34+0x8e1*-0x3+-0x265,_0xfead94=0x185*-0x18+0xeb9+0x7*0x31d,_0x441754=(_0x1c0b73,_0x1f803e)=>{var _0x214c82=_0x905fc8;_0x3666be[_0x214c82(0x47c)+_0x214c82(0x34a)]=_0xa7f634[_0x214c82(0x4c4)](_0x1f803e,_0xa7f634['dwjlN']),_0x3666be['fillT'+'ext'](_0x1c0b73,_0xfead94,_0x474c62),_0x474c62+=0x1163+0x1*-0x6b+0x1*-0x10e8;};_0x441754(_0x342afd[_0x905fc8(0x4f8)],'#ff6b'+'9d');if(_0x3d48bb['fps'])_0x441754(_0x342afd[_0x905fc8(0x657)](_0x445f91,_0x342afd[_0x905fc8(0x6df)]));if(!_0x3c53b1[_0x905fc8(0x564)+'oaded'])_0x441754(_0x342afd[_0x905fc8(0x1a4)],_0x905fc8(0x306)+_0x905fc8(0x6b9)+_0x905fc8(0x377)+'0,0.6'+')');_0x3666be[_0x905fc8(0x265)+'re']();}}function _0x35c4ac(){var _0x594c10=_0x4f8f9f;requestAnimationFrame(_0x35c4ac),_0x589591++;var _0x42a1f2=performance[_0x594c10(0x704)]();_0x42a1f2-_0x18a18b>=-0x2128+0x1*-0x134+0x2450&&(_0x445f91=Math[_0x594c10(0x6bf)](_0x3d8a6f[_0x594c10(0x755)](_0x589591*(0xdac+-0x1*-0xa83+-0x1447),_0x42a1f2-_0x18a18b)),_0x589591=0x9e4+0x4*0x943+-0x4*0xbbc,_0x18a18b=_0x42a1f2);_0x3d8a6f[_0x594c10(0x65c)](_0x452bee),_0x3d8a6f['KCGQa'](_0x4c2478),_0x3666be[_0x594c10(0x379)+_0x594c10(0x602)](0x1*-0x12a9+-0x60b+0x18b4,0x2*0x12ae+-0x11fe+-0x135e,_0x5c1847['w'],_0x5c1847['h']);var _0x4ac0ea={'left':0x0,'top':0x0,'right':_0x5c1847['w'],'bottom':_0x5c1847['h'],'width':_0x5c1847['w'],'height':_0x5c1847['h']};if(_0x3d48bb[_0x594c10(0x5bb)+_0x594c10(0x53a)])_0xfb006b(_0x4ac0ea);if(_0x3d48bb[_0x594c10(0x3aa)+_0x594c10(0x326)])_0x4e9116(_0x4ac0ea);_0x586dde(_0x4ac0ea);}var _0x3cec25=document[_0x4f8f9f(0x366)+'eElem'+'ent'](_0x4f8f9f(0x1ea));_0x3cec25['id']='sakur'+'a-ui',_0x3cec25[_0x4f8f9f(0x3bd)][_0x4f8f9f(0x717)+'xt']=_0x342afd['wnVCi'];var _0x18687a=_0x3cec25[_0x4f8f9f(0x63e)+_0x4f8f9f(0x2b6)+'ow']({'mode':'open'});(document['body']||document[_0x4f8f9f(0x4fa)+_0x4f8f9f(0x513)+_0x4f8f9f(0x1b3)])[_0x4f8f9f(0x24b)+'dChil'+'d'](_0x3cec25);var _0x169984=![],_0x1f1587={};try{_0x1f1587=JSON['parse'](localStorage['getIt'+'em'](_0x4f8f9f(0x66c)+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x22dc44){}function _0x1c3cbd(){var _0x1a4744=_0x4f8f9f;if(_0x3d8a6f['ucUWn']===_0x3d8a6f['EJlDG'])_0x405d64[_0x1a4744(0x310)+'ode']=_0x3408ac,_0x3d8a6f[_0x1a4744(0x65c)](_0x15458d),_0x14789e['reloa'+'d']();else try{localStorage[_0x1a4744(0x319)+'em'](_0x1a4744(0x66c)+_0x1a4744(0x676)+_0x1a4744(0x437)+'v1',JSON[_0x1a4744(0x46f)+_0x1a4744(0x439)](_0x1f1587));}catch(_0x14d526){}}function _0x55bcf2(_0x3b70b3,_0x37eac4){var _0x1e50b1=_0x4f8f9f;if(_0x3d8a6f[_0x1e50b1(0x43a)](_0x1e50b1(0x228),_0x3d8a6f[_0x1e50b1(0x4fc)]))try{var _0x3ad58f=new _0x4dc2ab(_0x228f47)[_0x1e50b1(0x2ad)+_0x1e50b1(0x5eb)](_0x26d480,_0x5329e7);_0x522ac1['set'](_0x5bee58,_0x3d8a6f[_0x1e50b1(0x6dc)](_0x3ad58f,_0x431683)?_0x3ad58f['val']():null);}catch(_0x44b2e5){_0x4a0e54['set'](_0x1de653,null);}else{var _0xfa91c7=document['creat'+'eElem'+_0x1e50b1(0x39a)]('butto'+'n');return _0xfa91c7[_0x1e50b1(0x735)]=_0x1e50b1(0x33c)+'n',_0xfa91c7[_0x1e50b1(0x3b5)+_0x1e50b1(0x736)]=_0x3d8a6f['tuXaC'],_0xfa91c7[_0x1e50b1(0x714)+_0x1e50b1(0x734)+'te'](_0x3d8a6f[_0x1e50b1(0x3df)],_0x3d8a6f[_0x1e50b1(0x766)]),_0xfa91c7[_0x1e50b1(0x714)+_0x1e50b1(0x734)+'te'](_0x1e50b1(0x6b8)+_0x1e50b1(0x33d)+'ed',String(!!_0x3b70b3)),_0xfa91c7['oncli'+'ck']=_0x3afb80=>{var _0x4e7e56=_0x1e50b1,_0x5656e7={'XAdLt':_0x3d8a6f[_0x4e7e56(0x4d7)],'zUCgJ':_0x3d8a6f['sOcth'],'GEViV':function(_0x297087,_0x63905){return _0x297087(_0x63905);},'ZhFKp':'role','BxkTa':function(_0x1ac68d,_0x31c933){return _0x3d8a6f['xGnep'](_0x1ac68d,_0x31c933);},'lziiq':_0x4e7e56(0x1d6)+_0x4e7e56(0x195)};if(_0x4e7e56(0x683)!==_0x3d8a6f['dzmah']){var _0x23377d=('1|2|4'+_0x4e7e56(0x241)+_0x4e7e56(0x5b5))['split']('|'),_0x18841b=-0x2be+0xabd+-0x7ff;while(!![]){switch(_0x23377d[_0x18841b++]){case'0':_0x2f0162[_0x4e7e56(0x714)+_0x4e7e56(0x734)+'te'](_0x5656e7[_0x4e7e56(0x2bd)],'switc'+'h');continue;case'1':var _0x2f0162=_0x250e4d[_0x4e7e56(0x366)+_0x4e7e56(0x3cc)+_0x4e7e56(0x39a)]('butto'+'n');continue;case'2':_0x2f0162[_0x4e7e56(0x735)]='butto'+'n';continue;case'3':_0x2f0162['setAt'+_0x4e7e56(0x734)+'te'](_0x5656e7[_0x4e7e56(0x3cf)],_0x5656e7['BxkTa'](_0x4fdee0,!!_0x239ec1));continue;case'4':_0x2f0162[_0x4e7e56(0x3b5)+_0x4e7e56(0x736)]=_0x5656e7['lziiq'];continue;case'5':_0x2f0162[_0x4e7e56(0x425)+'ck']=_0x3f9f90=>{var _0x10faa5=_0x4e7e56;_0x3f9f90[_0x10faa5(0x466)+'ropag'+_0x10faa5(0x68c)]();var _0x381334=_0x2f0162['getAt'+'tribu'+'te'](_0x10faa5(0x6b8)+_0x10faa5(0x33d)+'ed')!==_0x5656e7['XAdLt'];_0x2f0162['setAt'+'tribu'+'te'](_0x5656e7['zUCgJ'],_0x5656e7['GEViV'](_0x15c8ae,_0x381334)),_0x2d25a1(_0x381334);};continue;case'6':return _0x2f0162;}break;}}else{_0x3afb80[_0x4e7e56(0x466)+_0x4e7e56(0x5a2)+_0x4e7e56(0x68c)]();var _0xb81b6c=_0xfa91c7[_0x4e7e56(0x23e)+_0x4e7e56(0x734)+'te'](_0x3d8a6f[_0x4e7e56(0x58a)])!==_0x3d8a6f[_0x4e7e56(0x4d7)];_0xfa91c7[_0x4e7e56(0x714)+_0x4e7e56(0x734)+'te']('aria-'+'check'+'ed',String(_0xb81b6c)),_0x3d8a6f[_0x4e7e56(0x59b)](_0x37eac4,_0xb81b6c);}},_0xfa91c7;}}function _0x19d73e(_0x10c97a,_0x439b09,_0x4800c3,_0x33b2b5,_0x1fa8dc){var _0x3e0d0e=_0x4f8f9f,_0x420db4=_0x3d8a6f[_0x3e0d0e(0x6c8)][_0x3e0d0e(0x1ff)]('|'),_0x862ca8=0x9a5+-0x21e+-0x29*0x2f;while(!![]){switch(_0x420db4[_0x862ca8++]){case'0':_0xe1de79[_0x3e0d0e(0x3b5)+_0x3e0d0e(0x736)]=_0x3d8a6f['AmETA'];continue;case'1':_0x3d6b3c['type']=_0x3d8a6f[_0x3e0d0e(0x2fa)];continue;case'2':_0x3d6b3c['min']=_0x439b09;continue;case'3':return _0xe1de79;case'4':var _0x3d6b3c=document[_0x3e0d0e(0x366)+_0x3e0d0e(0x3cc)+_0x3e0d0e(0x39a)](_0x3d8a6f['aqDEs']);continue;case'5':_0x3a698b();continue;case'6':_0x302bc2['class'+'Name']=_0x3e0d0e(0x6e6)+'l';continue;case'7':_0x302bc2['textC'+'onten'+'t']=String(_0x10c97a);continue;case'8':_0x3d6b3c[_0x3e0d0e(0x525)]=_0x10c97a;continue;case'9':var _0x6e42e9={'VdOrI':function(_0x1e7eef,_0x495335){var _0x29ece2=_0x3e0d0e;return _0x3d8a6f[_0x29ece2(0x391)](_0x1e7eef,_0x495335);},'VsYnf':function(_0x2437cc,_0x3af7f5){return _0x2437cc-_0x3af7f5;},'AHRRl':function(_0x24d897){return _0x24d897();},'pzAwz':function(_0x57f92c,_0x54f4e0){return _0x57f92c(_0x54f4e0);},'kVFgM':function(_0x273fe8,_0x30db03){var _0xca2de3=_0x3e0d0e;return _0x3d8a6f[_0xca2de3(0x517)](_0x273fe8,_0x30db03);}};continue;case'10':var _0x3a698b=()=>{var _0x35a49e=_0x3e0d0e;_0x302bc2['textC'+_0x35a49e(0x279)+'t']=String(_0x3d6b3c[_0x35a49e(0x525)]),_0xe1de79['style'][_0x35a49e(0x6ea)+_0x35a49e(0x311)+'y'](_0x35a49e(0x63a),_0x6e42e9[_0x35a49e(0x492)](_0x6e42e9['VsYnf'](_0x3d6b3c[_0x35a49e(0x525)],_0x439b09)/_0x6e42e9[_0x35a49e(0x2dd)](_0x4800c3,_0x439b09),-0xddb*-0x1+-0x1ee6+0x1*0x116f)+'%');};continue;case'11':_0xe1de79[_0x3e0d0e(0x24b)+'d'](_0x3d6b3c,_0x302bc2);continue;case'12':_0x3d6b3c[_0x3e0d0e(0x374)+'ut']=()=>{var _0x41cdff=_0x3e0d0e;_0x6e42e9['AHRRl'](_0x3a698b),_0x6e42e9[_0x41cdff(0x6d0)](_0x1fa8dc,_0x6e42e9[_0x41cdff(0x39f)](Number,_0x3d6b3c['value']));};continue;case'13':_0x3d6b3c['step']=_0x33b2b5;continue;case'14':_0x3d6b3c[_0x3e0d0e(0x3b5)+'Name']=_0x3d8a6f['AfsCG'];continue;case'15':_0x3d6b3c[_0x3e0d0e(0x42c)]=_0x4800c3;continue;case'16':var _0xe1de79=document[_0x3e0d0e(0x366)+'eElem'+_0x3e0d0e(0x39a)](_0x3e0d0e(0x1ea));continue;case'17':var _0x302bc2=document[_0x3e0d0e(0x366)+'eElem'+_0x3e0d0e(0x39a)]('span');continue;}break;}}function _0x40c2c6(_0x180933,_0x2deaba){var _0x4b8a4a=_0x4f8f9f,_0x104e3f=document['creat'+'eElem'+_0x4b8a4a(0x39a)](_0x4b8a4a(0x1c6));return _0x104e3f[_0x4b8a4a(0x735)]=_0x4b8a4a(0x344),_0x104e3f[_0x4b8a4a(0x3b5)+'Name']='sk-co'+_0x4b8a4a(0x19a),_0x104e3f[_0x4b8a4a(0x525)]=/^#[0-9a-f]{6}$/i['test'](_0x180933)?_0x180933:_0x4b8a4a(0x2b4)+'9d',_0x104e3f[_0x4b8a4a(0x374)+'ut']=()=>_0x2deaba(_0x104e3f['value']),_0x104e3f;}function _0x2fb748(_0x456a20,_0xf5bee0,_0x33d340){var _0x14dd27=_0x4f8f9f;if(_0x342afd['KkNtd']==='LqQrM'){var _0x4ddd7e=document[_0x14dd27(0x366)+_0x14dd27(0x3cc)+'ent'](_0x14dd27(0x1af)+'t');_0x4ddd7e[_0x14dd27(0x3b5)+_0x14dd27(0x736)]=_0x342afd['zBquH'];for(var [_0x4025e6,_0x3be83e]of _0xf5bee0){if(_0x342afd['kHKdy']===_0x14dd27(0x578))_0x299527['bhop']=_0x3b1958,_0x53efda();else{var _0x4b237a=document['creat'+_0x14dd27(0x3cc)+'ent']('optio'+'n');_0x4b237a[_0x14dd27(0x525)]=_0x4025e6,_0x4b237a[_0x14dd27(0x64d)+_0x14dd27(0x279)+'t']=_0x3be83e,_0x4ddd7e['appen'+'dChil'+'d'](_0x4b237a);}}return _0x4ddd7e[_0x14dd27(0x525)]=_0x456a20,_0x4ddd7e[_0x14dd27(0x746)+'nge']=()=>_0x33d340(_0x4ddd7e[_0x14dd27(0x525)]),_0x4ddd7e;}else _0xf3c36[_0x14dd27(0x481)]=_0x189955,_0x240792(),_0x3d8a6f[_0x14dd27(0x26d)](_0x2f6eb8,_0x14dd27(0x481),_0x3ab6ff),_0x3d8a6f[_0x14dd27(0x1e6)](_0x3d759b,_0x14dd27(0x380)+'e',_0x4a01c5);}function _0x468b75(_0x4a4f37,_0x5ede35){var _0x127aa7=_0x4f8f9f,_0x1e4435={'jXHFt':function(_0x36b9cf){return _0x36b9cf();}},_0x11340a=document[_0x127aa7(0x366)+_0x127aa7(0x3cc)+_0x127aa7(0x39a)](_0x342afd[_0x127aa7(0x498)]);return _0x11340a['type']=_0x342afd[_0x127aa7(0x498)],_0x11340a[_0x127aa7(0x3b5)+_0x127aa7(0x736)]=_0x127aa7(0x1cc)+'n',_0x11340a[_0x127aa7(0x64d)+'onten'+'t']=_0x4a4f37,_0x11340a['oncli'+'ck']=_0x30620d=>{var _0x4cedbc=_0x127aa7;_0x30620d[_0x4cedbc(0x466)+_0x4cedbc(0x5a2)+_0x4cedbc(0x68c)](),_0x1e4435[_0x4cedbc(0x75f)](_0x5ede35);},_0x11340a;}function _0x4b20a5(_0x159df3,_0x7a8390,_0x37f27f){var _0x1821de=_0x4f8f9f;if('bNxmz'===_0x1821de(0x5b4)){var _0x40f624=(_0x1821de(0x2e9)+_0x1821de(0x1e9)+_0x1821de(0x304))['split']('|'),_0x319672=-0x1*0x1069+-0x1f*0x4+0x10e5;while(!![]){switch(_0x40f624[_0x319672++]){case'0':_0x290884[_0x1821de(0x3b5)+_0x1821de(0x736)]=_0x1821de(0x55d)+'l';continue;case'1':_0x290884[_0x1821de(0x24b)+'d'](_0x3221c6,_0x37f27f);continue;case'2':var _0x3221c6=document[_0x1821de(0x366)+_0x1821de(0x3cc)+'ent'](_0x342afd[_0x1821de(0x53f)]);continue;case'3':return _0x290884;case'4':_0x3221c6[_0x1821de(0x64d)+_0x1821de(0x279)+'t']=_0x159df3;continue;case'5':if(_0x7a8390){var _0x20367e=document[_0x1821de(0x366)+'eElem'+_0x1821de(0x39a)](_0x342afd[_0x1821de(0x469)]);_0x20367e['class'+_0x1821de(0x736)]='sk-hi'+'nt',_0x20367e['textC'+_0x1821de(0x279)+'t']=_0x7a8390,_0x3221c6[_0x1821de(0x24b)+_0x1821de(0x443)+'d'](_0x20367e);}continue;case'6':_0x3221c6[_0x1821de(0x3b5)+'Name']=_0x342afd[_0x1821de(0x572)];continue;case'7':var _0x290884=document[_0x1821de(0x366)+'eElem'+_0x1821de(0x39a)](_0x1821de(0x1ea));continue;}break;}}else _0x124f90['body'][_0x1821de(0x24b)+_0x1821de(0x443)+'d'](_0x5d36e3);}function _0x1eff49(_0x5a6979,_0xe2bd42){var _0x23fbd6=_0x4f8f9f,_0x23c313=document[_0x23fbd6(0x366)+_0x23fbd6(0x3cc)+'ent'](_0x23fbd6(0x1ea));return _0x23c313[_0x23fbd6(0x3b5)+'Name']=_0x23fbd6(0x710)+'te'+(_0xe2bd42?_0x23fbd6(0x2c5):''),_0x23c313[_0x23fbd6(0x64d)+_0x23fbd6(0x279)+'t']=_0x5a6979,_0x23c313;}function _0x269f23(_0x28e9bb,_0x3ea2da,_0x25e957,_0x124c1e,_0x3e8f33){var _0x16a42b=_0x4f8f9f,_0x4d38be={'StfFr':function(_0x16c46e,_0x3c02d3){return _0x16c46e(_0x3c02d3);},'XOcXT':function(_0x1e3aaa,_0x4198d1){return _0x1e3aaa===_0x4198d1;}};if('oRBXp'!=='oRBXp')_0x455ed4(),_0x4d38be['StfFr'](_0x2cbc7b,_0x30b397(_0x44ec74['value']));else{var _0x5d3e4d=document[_0x16a42b(0x366)+'eElem'+'ent'](_0x3d8a6f[_0x16a42b(0x45d)]);_0x5d3e4d['class'+'Name']=_0x3d8a6f[_0x16a42b(0x34d)](_0x16a42b(0x65d)+'rd',_0x25e957?_0x3d8a6f[_0x16a42b(0x686)]:'');var _0x573ebe=document['creat'+'eElem'+_0x16a42b(0x39a)](_0x3d8a6f['vctwY']);_0x573ebe['class'+_0x16a42b(0x736)]='sk-ca'+_0x16a42b(0x66b)+'ad';var _0x2f1523=document[_0x16a42b(0x366)+'eElem'+'ent']('div');_0x2f1523['class'+'Name']='sk-ca'+_0x16a42b(0x55e)+_0x16a42b(0x69b);var _0x167dc3=document[_0x16a42b(0x366)+_0x16a42b(0x3cc)+'ent'](_0x16a42b(0x3ee)+'g');_0x167dc3['textC'+'onten'+'t']=_0x28e9bb,_0x2f1523[_0x16a42b(0x24b)+_0x16a42b(0x443)+'d'](_0x167dc3);if(_0x124c1e){if('mqBkz'!=='ZzhpY'){var _0xef2b2=_0x3d8a6f[_0x16a42b(0x419)](_0x55bcf2,_0x25e957,_0x3a0d17=>{var _0x28eb03=_0x16a42b;_0x4d38be[_0x28eb03(0x6f7)]('occfz',_0x28eb03(0x2c3))?_0x4da62d[_0x28eb03(0x2cb)](_0x28eb03(0x471)+_0x28eb03(0x4ba)+'ur]\x20U'+_0x28eb03(0x4d9)+_0x28eb03(0x1b7)+_0x28eb03(0x45b)+':',_0x189fde&&_0xd38293['messa'+'ge']):(_0x5d3e4d['class'+_0x28eb03(0x3dc)]['toggl'+'e']('on',_0x3a0d17),_0x124c1e(_0x3a0d17));});_0x573ebe['appen'+'d'](_0x2f1523,_0xef2b2);}else{var _0x45faca=_0x45fd27['devic'+_0x16a42b(0x402)+_0x16a42b(0x4a5)+'o']||-0x5*0x53+-0x916*-0x3+0x11*-0x182,_0x1f643f=_0x36dcdf['inner'+_0x16a42b(0x591)],_0x2426bc=_0x22e238[_0x16a42b(0x507)+_0x16a42b(0x64e)+'t'];if(_0x3d8a6f[_0x16a42b(0x43a)](_0x1f643f,_0x26a394['w'])&&_0x2426bc===_0x397661['h']&&_0x45faca===_0x1683c7[_0x16a42b(0x31e)])return;_0x3bdee6['w']=_0x1f643f,_0x4688e7['h']=_0x2426bc,_0x290fcf[_0x16a42b(0x31e)]=_0x45faca,_0x43d3b9[_0x16a42b(0x60e)]=_0x5ecbb0[_0x16a42b(0x6bf)](_0x1f643f*_0x45faca),_0x5b745d[_0x16a42b(0x441)+'t']=_0x171474[_0x16a42b(0x6bf)](_0x3d8a6f[_0x16a42b(0x495)](_0x2426bc,_0x45faca)),_0x438cb3[_0x16a42b(0x579)+_0x16a42b(0x21e)+'rm'](_0x45faca,-0x1795+-0x2*0x767+0x2663*0x1,-0x1*0x92f+-0x2002+0x2931,_0x45faca,-0x25de+-0x1350+0x392e,-0x121b*0x2+0x10b3+0x1383);}}else _0x3d8a6f[_0x16a42b(0x4c5)]('PTSyd','PTSyd')?_0x573ebe['appen'+_0x16a42b(0x443)+'d'](_0x2f1523):(_0x122b5b['noRec'+'oil']=_0x1c554b,_0x3d8a6f['KCGQa'](_0x5d35e5),_0x2ed8ec(_0x3d8a6f[_0x16a42b(0x217)],_0x52b3c4));_0x5d3e4d[_0x16a42b(0x24b)+'dChil'+'d'](_0x573ebe);if(_0x3e8f33&&_0x3e8f33[_0x16a42b(0x1f6)+'h']){var _0x1d2da7=document[_0x16a42b(0x366)+_0x16a42b(0x3cc)+_0x16a42b(0x39a)](_0x3d8a6f['vctwY']);_0x1d2da7[_0x16a42b(0x3b5)+'Name']=_0x16a42b(0x19b)+'ody';var _0xb5d586=document[_0x16a42b(0x366)+_0x16a42b(0x3cc)+_0x16a42b(0x39a)](_0x3d8a6f[_0x16a42b(0x45d)]);_0xb5d586[_0x16a42b(0x3b5)+_0x16a42b(0x736)]='sk-md'+_0x16a42b(0x4a3),_0xb5d586['textC'+_0x16a42b(0x279)+'t']=_0x3ea2da,_0x1d2da7[_0x16a42b(0x24b)+_0x16a42b(0x443)+'d'](_0xb5d586);for(var _0x71a77d of _0x3e8f33)_0x1d2da7[_0x16a42b(0x24b)+_0x16a42b(0x443)+'d'](_0x71a77d);_0x5d3e4d[_0x16a42b(0x24b)+_0x16a42b(0x443)+'d'](_0x1d2da7);}return _0x5d3e4d;}}var _0xa15a09=[{'id':_0x342afd[_0x4f8f9f(0x4ee)],'label':_0x342afd['bmXfD']},{'id':_0x4f8f9f(0x290),'label':_0x342afd[_0x4f8f9f(0x64b)]},{'id':_0x342afd['lBIwg'],'label':'Visua'+'l'},{'id':'misc','label':_0x342afd[_0x4f8f9f(0x280)]},{'id':_0x342afd[_0x4f8f9f(0x337)],'label':_0x342afd['fiuzx']}];function _0x54ee63(){var _0x58e87a=_0x4f8f9f,_0x49edb6={'oMNSh':function(_0x38d4cf,_0x1b8af3){var _0x265dd4=_0x156c;return _0x342afd[_0x265dd4(0x662)](_0x38d4cf,_0x1b8af3);},'DaCZg':_0x342afd['DbPrZ']},_0x34180f=_0x3c53b1[_0x58e87a(0x310)+_0x58e87a(0x3ba)]?_0x58e87a(0x5d2)+'MODE\x20'+'—\x20ove'+'rlay\x20'+_0x58e87a(0x5db)+_0x58e87a(0x251)+_0x58e87a(0x512)+_0x58e87a(0x672)+'ad\x20to'+'\x20exit'+')':_0x3c53b1['uwmk']?_0x342afd[_0x58e87a(0x53e)](_0x342afd[_0x58e87a(0x5ef)]+(_0x3c53b1[_0x58e87a(0x4f5)+_0x58e87a(0x4d2)]?_0x342afd[_0x58e87a(0x688)](_0x3c53b1['hooks'+'Ok']+'/'+_0x3c53b1['hooks'+_0x58e87a(0x4d2)],_0x342afd[_0x58e87a(0x1a2)]):'0\x20hoo'+_0x58e87a(0x4f4)+_0x58e87a(0x639)+_0x58e87a(0x2ee)+_0x58e87a(0x4ac))+_0x342afd[_0x58e87a(0x2cd)]+(_0x3c53b1['gameL'+_0x58e87a(0x67a)]?_0x342afd['GcOTU']:_0x58e87a(0x4ef)+'ng')+('\x20|\x20sh'+_0x58e87a(0x42f)+'\x20')+(_0x3c53b1['shoot'+_0x58e87a(0x679)]?_0x342afd[_0x58e87a(0x2ca)]:'none'),_0x58e87a(0x753)+_0x58e87a(0x6b7)+'t\x20')+(_0x3c53b1[_0x58e87a(0x442)+_0x58e87a(0x6b1)]?'held':_0x342afd[_0x58e87a(0x6e9)]):_0x58e87a(0x29a)+_0x58e87a(0x3e6)+'NG\x20—\x20'+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+_0x58e87a(0x574)+_0x58e87a(0x35f)+'ipt)';if(_0x3c53b1['lastE'+_0x58e87a(0x37a)])_0x34180f+=_0x342afd[_0x58e87a(0x2b1)](_0x342afd[_0x58e87a(0x51d)],_0x3c53b1[_0x58e87a(0x1e2)+'rror']);return _0x342afd['WctiS'](_0x269f23,_0x58e87a(0x336)+'s',_0x34180f,_0x3c53b1[_0x58e87a(0x74f)],null,[_0x4b20a5(_0x342afd[_0x58e87a(0x597)],_0x58e87a(0x1c5)+_0x58e87a(0x194)+_0x58e87a(0x1a1)+_0x58e87a(0x479)+_0x58e87a(0x3b6)+'tion.'+_0x58e87a(0x47b)+'arget'+_0x58e87a(0x3bb)+_0x58e87a(0x581),_0x468b75('Apply',()=>{var _0x5e06e6=_0x58e87a,_0x16e92e={'DGiXZ':function(_0x47f105,_0x19111d){return _0x47f105||_0x19111d;}};if(_0x49edb6[_0x5e06e6(0x668)](_0x5e06e6(0x49c),_0x5e06e6(0x49e))){var _0xce5e7e=_0x215a7f[_0x5e06e6(0x4e3)+'ve'];if(_0xce5e7e)try{_0xce5e7e[_0x5e06e6(0x260)+'ed']=![];}catch(_0x2d21fd){}}else try{if(_0x49edb6[_0x5e06e6(0x668)]('JshMU',_0x49edb6['DaCZg'])){if(_0x46b1c3)_0x46b1c3['call'](_0x5e06e6(0x2ff)+_0x5e06e6(0x2b0)+_0x5e06e6(0x6de)+_0x5e06e6(0x2c4)+_0x5e06e6(0x603),_0x5e06e6(0x47b)+_0x5e06e6(0x650)+_0x5e06e6(0x3bb)+'Rate',[0xd8e+-0xb34+-0x1*0x16a]);}else _0x3fb434[_0x5e06e6(0x47c)+_0x5e06e6(0x34a)]=_0x16e92e[_0x5e06e6(0x46a)](_0x29df80,_0x5e06e6(0x306)+_0x5e06e6(0x417)+_0x5e06e6(0x478)+'0,0.7'+'5)'),_0x3ac7ff[_0x5e06e6(0x71a)+_0x5e06e6(0x48b)](_0x7e527d,_0x2ae4b0,_0x5f053e),_0x25f4a9+=0x46a+0x1*0x98e+-0x28*0x59;}catch(_0x1ef4c9){}}))]);}function _0x13a5e8(_0x527ed9){var _0x4d3e58=_0x4f8f9f,_0x4d1324={'IoEFv':function(_0x31c95d,_0x33fb64){return _0x31c95d-_0x33fb64;},'bSdsj':'sk-ra'+'nge','lTQnU':_0x342afd['vliaR'],'rWdRZ':function(_0x4290d2,_0x181adc){return _0x4290d2(_0x181adc);},'FtgEd':function(_0x4956a4,_0xc77b7e){return _0x4956a4!==_0xc77b7e;},'iAfLN':_0x342afd[_0x4d3e58(0x1f9)],'blCGu':function(_0xb63c45){return _0x342afd['KhhLC'](_0xb63c45);},'XsYLP':function(_0x3f736e,_0x1e5f02){return _0x342afd['yysup'](_0x3f736e,_0x1e5f02);},'FSUBc':_0x4d3e58(0x49a),'dFyXP':_0x342afd['YEJjN'],'xtfHC':_0x342afd['ngZwJ'],'NNuZR':function(_0xd2751e){var _0x12460e=_0x4d3e58;return _0x342afd[_0x12460e(0x573)](_0xd2751e);},'fSFQo':function(_0xc9cd65,_0x56cbfc){return _0xc9cd65+_0x56cbfc;},'OHSKM':function(_0x1a4810,_0xd0f79e){var _0x1718fd=_0x4d3e58;return _0x342afd[_0x1718fd(0x37f)](_0x1a4810,_0xd0f79e);}};if(_0x4d3e58(0x615)===_0x4d3e58(0x1a6)){var _0x31763b={'ZWUaL':function(_0x3866ce,_0x52db97){return _0x3866ce/_0x52db97;},'yHkIL':function(_0x2b4600,_0xc0c33a){var _0x5b2df1=_0x4d3e58;return _0x4d1324[_0x5b2df1(0x45e)](_0x2b4600,_0xc0c33a);},'WYbka':function(_0x3fb096,_0x2b7293){return _0x3fb096(_0x2b7293);}},_0x40c15f=_0x36bb7a[_0x4d3e58(0x366)+'eElem'+_0x4d3e58(0x39a)]('div');_0x40c15f[_0x4d3e58(0x3b5)+_0x4d3e58(0x736)]=_0x4d1324[_0x4d3e58(0x4fd)];var _0x3b33ce=_0x12f16c[_0x4d3e58(0x366)+'eElem'+'ent']('input');_0x3b33ce['type']=_0x4d3e58(0x67d),_0x3b33ce['class'+'Name']=_0x4d1324['lTQnU'],_0x3b33ce['min']=_0xefa80e,_0x3b33ce['max']=_0xbf0d52,_0x3b33ce['step']=_0x1a882d,_0x3b33ce['value']=_0x4620a7;var _0x2039aa=_0x107920['creat'+_0x4d3e58(0x3cc)+'ent'](_0x4d3e58(0x681));_0x2039aa['class'+'Name']=_0x4d3e58(0x6e6)+'l',_0x2039aa[_0x4d3e58(0x64d)+'onten'+'t']=_0x4d1324['rWdRZ'](_0x550286,_0x458b2b);var _0x2120a7=()=>{var _0x2704aa=_0x4d3e58;_0x2039aa['textC'+_0x2704aa(0x279)+'t']=_0x1e928f(_0x3b33ce[_0x2704aa(0x525)]),_0x40c15f['style']['setPr'+'opert'+'y'](_0x2704aa(0x63a),_0x31763b['ZWUaL'](_0x31763b[_0x2704aa(0x29c)](_0x3b33ce['value'],_0x227189),_0x31763b[_0x2704aa(0x29c)](_0x517f72,_0x23858e))*(-0x4c7*0x4+0x2121*-0x1+0x1b*0x1f3)+'%');};return _0x3b33ce[_0x4d3e58(0x374)+'ut']=()=>{var _0x1008ff=_0x4d3e58;_0x2120a7(),_0x1d5bde(_0x31763b[_0x1008ff(0x42e)](_0x48d802,_0x3b33ce['value']));},_0x2120a7(),_0x40c15f[_0x4d3e58(0x24b)+'d'](_0x3b33ce,_0x2039aa),_0x40c15f;}else{if(_0x342afd[_0x4d3e58(0x662)](_0x527ed9,_0x342afd['lFUdQ']))return[_0x342afd['zAtTZ'](_0x54ee63),_0x269f23('God\x20M'+'ode',_0x4d3e58(0x4f3)+'s\x20OHe'+'alth.'+'Initi'+_0x4d3e58(0x22b)+'keHea'+_0x4d3e58(0x3e4)+_0x4d3e58(0x2c2)+'ealth'+'.Loca'+_0x4d3e58(0x694)+'\x20so\x20n'+_0x4d3e58(0x4e1)+_0x4d3e58(0x430)+_0x4d3e58(0x320)+_0x4d3e58(0x257)+_0x4d3e58(0x415)+_0x4d3e58(0x4c1),_0x3d48bb['god'],_0x3b5ee8=>{var _0x19a0ac=_0x4d3e58;_0x4d1324[_0x19a0ac(0x76a)](_0x4d1324[_0x19a0ac(0x29d)],_0x19a0ac(0x6c6))?(_0x3d48bb['god']=_0x3b5ee8,_0x4d1324['blCGu'](_0x488b74),_0x355bc7(_0x19a0ac(0x481),_0x3b5ee8),_0x355bc7('godDi'+'e',_0x3b5ee8)):_0x2f449d['enabl'+'ed']=![];},[]),_0x342afd[_0x4d3e58(0x234)](_0x269f23,_0x4d3e58(0x247)+_0x4d3e58(0x2af),'Skips'+_0x4d3e58(0x1b2)+_0x4d3e58(0x1bb)+'ion.T'+'ick\x20s'+_0x4d3e58(0x69f)+'\x20reco'+'il\x20sp'+'rings'+_0x4d3e58(0x4b6)+_0x4d3e58(0x2ea)+_0x4d3e58(0x556),_0x3d48bb[_0x4d3e58(0x455)+_0x4d3e58(0x5f0)],_0x44d572=>{var _0x2ce914=_0x4d3e58;_0x3d48bb[_0x2ce914(0x455)+'oil']=_0x44d572,_0x488b74(),_0x3d8a6f[_0x2ce914(0x1e6)](_0x355bc7,'noRec'+'oil',_0x44d572);},[]),_0x342afd['WctiS'](_0x269f23,_0x342afd['RwncY'],'Zeroe'+_0x4d3e58(0x59e)+'ead\x20a'+'nd\x20ma'+_0x4d3e58(0x70d)+_0x4d3e58(0x598)+'cy\x20on'+_0x4d3e58(0x282)+_0x4d3e58(0x5ce)+'on\x20ev'+_0x4d3e58(0x72e)+'00ms.',_0x3d48bb[_0x4d3e58(0x6cb)+_0x4d3e58(0x1b6)],_0x16b398=>{var _0x59aba5=_0x4d3e58;_0x3d48bb[_0x59aba5(0x6cb)+_0x59aba5(0x1b6)]=_0x16b398,_0x488b74();},[]),_0x342afd[_0x4d3e58(0x218)](_0x269f23,_0x342afd[_0x4d3e58(0x3e9)],'Scale'+'s\x20Ove'+_0x4d3e58(0x4d3)+'Weapo'+'n.fir'+_0x4d3e58(0x5b6)+'\x20to\x201'+'0%.\x20S'+'erver'+_0x4d3e58(0x2c9)+_0x4d3e58(0x55a)+'\x20gate'+_0x4d3e58(0x524)+'s.',_0x3d48bb[_0x4d3e58(0x5f2)+'Exp'],_0x5e1a92=>{var _0x47f4bc=_0x4d3e58,_0x13214a={'HQHQj':function(_0x3721f1){return _0x3721f1();}};_0x4d1324[_0x47f4bc(0x3f6)](_0x4d1324['FSUBc'],_0x47f4bc(0x49a))?(_0x2ada3a={..._0x476398},_0x13214a[_0x47f4bc(0x6d5)](_0x2714e9),_0x1e453a['reloa'+'d']()):(_0x3d48bb[_0x47f4bc(0x5f2)+'Exp']=_0x5e1a92,_0x4d1324[_0x47f4bc(0x22a)](_0x488b74));},[]),_0x269f23(_0x342afd[_0x4d3e58(0x654)],_0x4d3e58(0x31b)+'rites'+_0x4d3e58(0x3a0)+'tideW'+_0x4d3e58(0x45f)+_0x4d3e58(0x28e)+_0x4d3e58(0x764)+_0x4d3e58(0x6af)+_0x4d3e58(0x690)+'\x20the\x20'+'serve'+_0x4d3e58(0x3f2)+_0x4d3e58(0x2f8)+'s.',_0x3d48bb[_0x4d3e58(0x263)+'eExp'],_0x34b1dd=>{var _0x2d5795=_0x4d3e58;_0x3d48bb['damag'+_0x2d5795(0x3ff)]=_0x34b1dd,_0x488b74();},[_0x4b20a5(_0x342afd['UbISp'],null,_0x19d73e(_0x3d48bb[_0x4d3e58(0x263)+'eValu'+'e'],-0x1*0x141b+0x26c9+0x2*-0x952,0x2da*0x8+-0x403+-0xe3*0x13,0x1*-0x736+-0x186*0x7+0x11e5,_0x3cf5aa=>{var _0x31ddcd=_0x4d3e58;_0x3d48bb[_0x31ddcd(0x263)+'eValu'+'e']=_0x3cf5aa,_0x3d8a6f[_0x31ddcd(0x65c)](_0x488b74);}))]),_0x269f23('Infin'+_0x4d3e58(0x26a)+_0x4d3e58(0x566)+_0x4d3e58(0x305),_0x4d3e58(0x384)+'ls\x20th'+'e\x20wea'+'pon\x27s'+_0x4d3e58(0x3d9)+'ed\x20am'+'mo\x20to'+'\x20999\x20'+'every'+'\x20200m'+'s.',_0x3d48bb[_0x4d3e58(0x700)+_0x4d3e58(0x66d)],_0x203885=>{var _0x2a9869=_0x4d3e58;_0x3d48bb['infAm'+_0x2a9869(0x66d)]=_0x203885,_0x488b74();},[_0x342afd['gcRLJ'](_0x1eff49,_0x342afd['pgLkD'])])];if(_0x342afd[_0x4d3e58(0x3c2)](_0x527ed9,_0x4d3e58(0x290)))return[_0x342afd[_0x4d3e58(0x658)](_0x269f23,_0x342afd['zSyTJ'],_0x4d3e58(0x36d)+'s\x20all'+_0x4d3e58(0x3b9)+_0x4d3e58(0x4c7)+_0x4d3e58(0x4df)+'speed'+'\x20limi'+'ts\x20pl'+'us\x20ac'+_0x4d3e58(0x5c0)+'ation'+'.',_0x342afd['yysup'](_0x3d48bb[_0x4d3e58(0x25e)+'Pct'],0x475*0x2+0x3*0xcb5+-0x2ea5*0x1),null,[_0x4b20a5(_0x342afd[_0x4d3e58(0x397)],_0x4d3e58(0x19f)+_0x4d3e58(0x1f5)+_0x4d3e58(0x663),_0x19d73e(_0x3d48bb[_0x4d3e58(0x25e)+'Pct'],0x1e88+0xee6*-0x1+-0x13*0xd0,-0x19dd+0x206+0x1903,0x421*-0x1+-0x2561+0x1*0x2987,_0x25c437=>{var _0x8ee6b6=_0x4d3e58;_0x3d48bb['speed'+'Pct']=_0x25c437,_0x3d8a6f[_0x8ee6b6(0x65c)](_0x488b74);}))]),_0x269f23(_0x4d3e58(0x6a0)+_0x4d3e58(0x607)+'vity',_0x342afd['rPwVE'],_0x342afd[_0x4d3e58(0x530)](_0x3d48bb['jumpP'+'ct'],0x1c4b*-0x1+-0x14a6+0x3155)||_0x3d48bb[_0x4d3e58(0x526)+'tyPct']!==0x13c5+0x20f2*0x1+-0x3453,null,[_0x4b20a5(_0x4d3e58(0x6a0)+'%',null,_0x19d73e(_0x3d48bb[_0x4d3e58(0x729)+'ct'],0x1*0x18cb+-0x1a*-0x107+-0x47*0xb9,-0x1*-0x18ee+-0x2388+0x2*0x5e3,-0x1bc1+-0x1103+0x2cc9,_0x59b7b8=>{_0x3d48bb['jumpP'+'ct']=_0x59b7b8,_0x488b74();})),_0x4b20a5('Gravi'+_0x4d3e58(0x6f6),_0x342afd['QzToC'],_0x19d73e(_0x3d48bb[_0x4d3e58(0x526)+'tyPct'],-0x476*0x1+-0x2620+-0xb*-0x3e0,-0xb4*-0x3+0x116*0x9+0xe*-0xcb,-0x1f*0x7f+-0x6f1*-0x1+0x1*0x875,_0x543b62=>{var _0x3f3e81=_0x4d3e58;if(_0x3d8a6f['DJdck']==='qgFPS')_0x3d48bb['gravi'+_0x3f3e81(0x1f8)]=_0x543b62,_0x488b74();else{var _0x546c18=_0x54a994&&(_0x33f071[_0x3f3e81(0x26f)+'ge']||_0x7a0eef[_0x3f3e81(0x6da)]&&_0x5884b1[_0x3f3e81(0x6da)][_0x3f3e81(0x26f)+'ge'])||'unkno'+'wn';if(_0x485234&&_0xdfbaf8['filen'+'ame'])_0x546c18+=_0x3f3e81(0x44f)+_0x2160b1(_0x14f385[_0x3f3e81(0x35d)+_0x3f3e81(0x582)])[_0x3f3e81(0x1ff)]('/')[_0x3f3e81(0x529)]()+':'+(_0x292f96['linen'+'o']||'?');_0x59e619[_0x3f3e81(0x1e2)+'rror']=_0x3ad665(_0x546c18)[_0x3f3e81(0x6aa)](-0x4a*0x7f+0x13*0x133+-0x17*-0x9b,0x551*0x5+0xcf*-0x1+-0x1926);}}))]),_0x342afd[_0x4d3e58(0x40c)](_0x269f23,_0x4d3e58(0x1e7)+_0x4d3e58(0x3d4),_0x342afd[_0x4d3e58(0x1d0)],_0x3d48bb[_0x4d3e58(0x57e)],_0xc4ff0=>{var _0x2c59c8=_0x4d3e58,_0x436851={'FZcZa':_0x4d1324[_0x2c59c8(0x5e7)]};if('UiXvo'!==_0x4d1324['xtfHC']){if(_0x119d6d[_0x2733a0]['id']&&_0x5991a4[_0x126492]['id']['index'+'Of'](_0x436851['FZcZa'])===-0x1*-0x59f+-0x18a*0x19+0x20db)_0x2cf228[_0x4b4393]['style'][_0x2c59c8(0x6c2)+'ay']=_0x2c59c8(0x708);}else _0x3d48bb[_0x2c59c8(0x57e)]=_0xc4ff0,_0x488b74();},[])];if(_0x527ed9==='visua'+'l'){if(_0x342afd['FsefP']!==_0x4d3e58(0x74c))_0x504df1[_0x4d3e58(0x263)+'eValu'+'e']=_0x1d84db,_0x4d1324['blCGu'](_0xd9c663);else return[_0x342afd[_0x4d3e58(0x40c)](_0x269f23,_0x4d3e58(0x4c3)+'rokes','WASD\x20'+_0x4d3e58(0x3b1)+'/RMB\x20'+'+\x20Spa'+_0x4d3e58(0x52f)+'erlay'+'.',_0x3d48bb[_0x4d3e58(0x3aa)+'rokes'],_0x396ab9=>{var _0x46c75b=_0x4d3e58;_0x3d48bb[_0x46c75b(0x3aa)+'rokes']=_0x396ab9,_0x488b74();},[_0x342afd['KuZvY'](_0x4b20a5,_0x4d3e58(0x4af)+'ion',null,_0x2fb748(_0x3d48bb['ksPos'],[['bl',_0x4d3e58(0x5a7)+_0x4d3e58(0x2c1)+'t'],['br',_0x342afd['RIWaB']],['ml','Left\x20'+'middl'+'e']],_0x431c5e=>{var _0x3fa719=_0x4d3e58;_0x3d48bb['ksPos']=_0x431c5e,_0x3d8a6f[_0x3fa719(0x65c)](_0x488b74);})),_0x342afd[_0x4d3e58(0x561)](_0x4b20a5,_0x342afd[_0x4d3e58(0x5a8)],null,_0x342afd['GddXg'](_0x19d73e,_0x3d48bb[_0x4d3e58(0x54d)+'le'],0x1*0xdf+0x114*-0x1+-0x35*-0x1+0.6,0x2187*-0x1+0xade+0x16aa+0.6000000000000001,-0xc96+-0x379*-0x2+0x2d2*0x2+0.05,_0x3161b9=>{_0x3d48bb['ksSca'+'le']=_0x3161b9,_0x488b74();})),_0x4b20a5(_0x342afd[_0x4d3e58(0x22e)],null,_0x342afd[_0x4d3e58(0x255)](_0x55bcf2,_0x3d48bb[_0x4d3e58(0x400)],_0x4b89d7=>{_0x3d48bb['ksCps']=_0x4b89d7,_0x488b74();}))]),_0x342afd[_0x4d3e58(0x218)](_0x269f23,_0x4d3e58(0x3be)+_0x4d3e58(0x53a),_0x342afd[_0x4d3e58(0x3d8)],_0x3d48bb[_0x4d3e58(0x5bb)+_0x4d3e58(0x53a)],_0x44c83e=>{var _0x5bde8a=_0x4d3e58;_0x3d8a6f[_0x5bde8a(0x541)](_0x5bde8a(0x25f),_0x5bde8a(0x5d9))?_0x3aa62a[_0x5bde8a(0x379)]():(_0x3d48bb[_0x5bde8a(0x5bb)+'hair']=_0x44c83e,_0x3d8a6f[_0x5bde8a(0x65c)](_0x488b74));},[_0x4b20a5('Size',null,_0x342afd[_0x4d3e58(0x6db)](_0x19d73e,_0x3d48bb[_0x4d3e58(0x674)+'e'],-0x3*-0x47+0x7*0x34c+-0x17e9+0.5,0xcbf+0xdbb+-0x1a78+0.5,0x1c33+0x24*0x79+-0x2d37+0.1,_0x48d823=>{var _0x513797=_0x4d3e58;_0x3d48bb[_0x513797(0x674)+'e']=_0x48d823,_0x488b74();})),_0x4b20a5(_0x4d3e58(0x5c9),null,_0x342afd['prDWj'](_0x40c2c6,_0x3d48bb[_0x4d3e58(0x6fd)+'or'],_0x2292d0=>{var _0x5a4702=_0x4d3e58;_0x3d48bb['chCol'+'or']=_0x2292d0,_0x3d8a6f[_0x5a4702(0x65c)](_0x488b74);}))]),_0x269f23(_0x342afd[_0x4d3e58(0x325)],'FPS\x20o'+_0x4d3e58(0x2f0)+'y.',_0x3d48bb['fps'],null,[_0x4b20a5(_0x4d3e58(0x63c)+_0x4d3e58(0x1de)+'r',null,_0x342afd[_0x4d3e58(0x255)](_0x55bcf2,_0x3d48bb['fps'],_0x33bbd4=>{var _0x1b01e7=_0x4d3e58,_0x3c29f1={'OguJb':function(_0x5d8c51){var _0x5d6639=_0x156c;return _0x3d8a6f[_0x5d6639(0x2f3)](_0x5d8c51);}};_0x3d8a6f['zEzyo'](_0x3d8a6f['qWzpR'],'lNNVm')?(_0x2383b8[_0x1b01e7(0x5bb)+_0x1b01e7(0x53a)]=_0xba5b24,_0x3c29f1['OguJb'](_0x2b660d)):(_0x3d48bb[_0x1b01e7(0x60d)]=_0x33bbd4,_0x488b74());})),_0x1eff49(_0x342afd[_0x4d3e58(0x4f2)])])];}if(_0x527ed9==='misc')return[_0x269f23('Adblo'+'ck',_0x4d3e58(0x221)+'\x20kour'+'-io_*'+_0x4d3e58(0x244)+_0x4d3e58(0x259)+_0x4d3e58(0x748),_0x3d48bb[_0x4d3e58(0x720)+'ck'],_0xc62d52=>{var _0x3123ac=_0x4d3e58;_0x3d48bb['adblo'+'ck']=_0xc62d52,_0x3d8a6f[_0x3123ac(0x2f3)](_0x488b74);},[_0x1eff49('Takes'+'\x20effe'+'ct\x20on'+_0x4d3e58(0x3f3)+_0x4d3e58(0x5f4)+_0x4d3e58(0x32d)+'ggled'+'.')])];return[_0x269f23(_0x4d3e58(0x267)+_0x4d3e58(0x19c)+'(over'+_0x4d3e58(0x553)+_0x4d3e58(0x227),_0x4d3e58(0x5f5)+_0x4d3e58(0x6ac)+'\x20enti'+'rely\x20'+_0x4d3e58(0x277)+'WASM\x20'+_0x4d3e58(0x4f5)+'.\x20Use'+'\x20this'+'\x20if\x20m'+'atche'+'s\x20won'+'\x27t\x20st'+'art.',_0x3d48bb['safeM'+_0x4d3e58(0x3ba)],_0x3a8c80=>{var _0x40df13=_0x4d3e58;_0x3d48bb[_0x40df13(0x310)+'ode']=_0x3a8c80,_0x488b74(),location[_0x40df13(0x59d)+'d']();},[_0x1eff49(_0x342afd[_0x4d3e58(0x30f)])]),_0x269f23('Hook\x20'+_0x4d3e58(0x2a7)+'switc'+'hes',_0x4d3e58(0x69e)+'one\x20i'+'nstal'+_0x4d3e58(0x23a)+_0x4d3e58(0x6a5)+'tramp'+_0x4d3e58(0x299)+_0x4d3e58(0x459)+_0x4d3e58(0x638)+_0x4d3e58(0x3ed)+'page\x20'+'load.'+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+_0x4d3e58(0x601)+_0x4d3e58(0x503)+_0x4d3e58(0x297)+'ure\x20t'+'hat\x20d'+_0x4d3e58(0x707)+_0x4d3e58(0x2a3)+_0x4d3e58(0x20d)+'he\x20re'+_0x4d3e58(0x223)+_0x4d3e58(0x50d)+'throw'+'s\x20\x27fu'+_0x4d3e58(0x74b)+_0x4d3e58(0x375)+'natur'+_0x4d3e58(0x1e3)+'match'+'\x27\x20the'+_0x4d3e58(0x4ff)+_0x4d3e58(0x682)+'\x20is\x20c'+_0x4d3e58(0x5f9)+_0x4d3e58(0x2f5)+'n\x20the'+_0x4d3e58(0x272)+_0x4d3e58(0x1e0)+_0x4d3e58(0x502)+_0x4d3e58(0x473)+'reloa'+'d,\x20an'+_0x4d3e58(0x5fc)+_0x4d3e58(0x50f)+_0x4d3e58(0x26b)+_0x4d3e58(0x282)+'\x20buil'+'d\x20cho'+'kes\x20o'+'n.',_0x3d48bb[_0x4d3e58(0x599)+'od']||_0x3d48bb[_0x4d3e58(0x599)+_0x4d3e58(0x515)]||_0x3d48bb[_0x4d3e58(0x323)+_0x4d3e58(0x3bc)+'il']||_0x3d48bb[_0x4d3e58(0x763)+_0x4d3e58(0x404)+'e'],_0x661e92=>{var _0x227eef=_0x4d3e58,_0x219be8=('1|2|3'+'|0|5|'+'4')[_0x227eef(0x1ff)]('|'),_0x36d6fe=0xbed+0x1*0x1dbd+-0x29aa;while(!![]){switch(_0x219be8[_0x36d6fe++]){case'0':_0x3d48bb[_0x227eef(0x763)+_0x227eef(0x404)+'e']=_0x661e92;continue;case'1':_0x3d48bb['hookG'+'od']=_0x661e92;continue;case'2':_0x3d48bb['hookG'+'odDie']=_0x661e92;continue;case'3':_0x3d48bb[_0x227eef(0x323)+_0x227eef(0x3bc)+'il']=_0x661e92;continue;case'4':location['reloa'+'d']();continue;case'5':_0x488b74();continue;}break;}},[_0x1eff49(_0x4d3e58(0x2e2)+'es\x20on'+_0x4d3e58(0x3f3)+'ad.'),_0x4b20a5('god\x20('+_0x4d3e58(0x55c)+'th.In'+_0x4d3e58(0x550)+'eTake'+_0x4d3e58(0x485)+'h)',null,_0x55bcf2(_0x3d48bb[_0x4d3e58(0x599)+'od'],_0x5a4af4=>{var _0x2c5be7=_0x4d3e58;_0x3d48bb[_0x2c5be7(0x599)+'od']=_0x5a4af4,_0x488b74();})),_0x4b20a5(_0x342afd['ZxWtm'],null,_0x342afd[_0x4d3e58(0x759)](_0x55bcf2,_0x3d48bb[_0x4d3e58(0x599)+_0x4d3e58(0x515)],_0x2091d2=>{_0x3d8a6f['RVYBP']===_0x3d8a6f['RVYBP']?(_0x3d48bb['hookG'+'odDie']=_0x2091d2,_0x488b74()):_0x27b522(!_0x10da86);})),_0x4b20a5(_0x342afd['FQybO'],null,_0x342afd[_0x4d3e58(0x29e)](_0x55bcf2,_0x3d48bb[_0x4d3e58(0x323)+'oReco'+'il'],_0x4662ba=>{var _0x5763ff=_0x4d3e58;_0x3d48bb[_0x5763ff(0x323)+_0x5763ff(0x3bc)+'il']=_0x4662ba,_0x488b74();})),_0x342afd[_0x4d3e58(0x561)](_0x4b20a5,_0x342afd['bHpOe'],_0x342afd[_0x4d3e58(0x5e5)],_0x55bcf2(_0x3d48bb[_0x4d3e58(0x763)+'aptur'+'e'],_0x123cae=>{var _0x35b14b=_0x4d3e58;'pojrV'==='pojrV'?(_0x3d48bb[_0x35b14b(0x763)+_0x35b14b(0x404)+'e']=_0x123cae,_0x488b74()):(_0x726e6d[_0x35b14b(0x5f2)+'Exp']=_0x1d4c3f,_0x4d1324['NNuZR'](_0x5742f6));}))]),_0x269f23(_0x342afd[_0x4d3e58(0x3cb)],_0x342afd[_0x4d3e58(0x4e5)],_0x3d48bb[_0x4d3e58(0x5bf)+'ill'],_0x4bcd9f=>{_0x3d48bb['actkK'+'ill']=_0x4bcd9f,_0x488b74();},[_0x342afd['prDWj'](_0x1eff49,_0x342afd[_0x4d3e58(0x268)],!![])]),_0x269f23(_0x342afd['ALazR'],'These'+'\x20leav'+'e\x20ser'+'ver-v'+_0x4d3e58(0x236)+'e\x20tra'+_0x4d3e58(0x2e1),!![],null,[_0x4b20a5('Wipe\x20'+_0x4d3e58(0x2d4)+'tting'+'s',null,_0x342afd[_0x4d3e58(0x523)](_0x468b75,_0x4d3e58(0x4fb),()=>{var _0x3a0164=_0x4d3e58;if(_0x3d8a6f[_0x3a0164(0x6dc)](_0x3d8a6f['SUvKW'],'hTrvL')){if(_0x492c65[_0x3a0164(0x604)+_0x3a0164(0x577)])return;_0x5bd4c1[_0x3a0164(0x362)](_0x3a0164(0x422)+_0x4d1324['fSFQo'](_0xa927e4[_0x3a0164(0x33c)+'n'],0x2e5*-0x9+0xb*0x12e+0xd14));var _0x506ef4=_0x1c5bb0[_0x4d1324[_0x3a0164(0x303)](_0xe52341['butto'+'n'],-0x932+-0x3*0xa85+-0x4a*-0x8d)];if(_0x506ef4){_0x506ef4['push'](_0x126d5f['now']());if(_0x4d1324['OHSKM'](_0x506ef4[_0x3a0164(0x1f6)+'h'],-0x1f5e+-0xc31+0x1f*0x169))_0x506ef4[_0x3a0164(0x486)]();}}else _0x3d48bb={..._0x470246},_0x3d8a6f[_0x3a0164(0x2f3)](_0x488b74),location[_0x3a0164(0x59d)+'d']();}))])];}}var _0x52bc57=null;function _0xdcf9ae(_0x209a97){var _0x55b224=_0x4f8f9f;if('RtqFH'===_0x3d8a6f['tiHZX']){_0x169984=_0x209a97;if(!_0x52bc57){var _0x3ab641=document['creat'+_0x55b224(0x3cc)+'ent'](_0x55b224(0x3bd));_0x3ab641[_0x55b224(0x64d)+_0x55b224(0x279)+'t']=_0x366529,_0x18687a[_0x55b224(0x24b)+'dChil'+'d'](_0x3ab641),_0x52bc57=_0x3d8a6f[_0x55b224(0x549)](_0x23382e),_0x18687a[_0x55b224(0x24b)+'dChil'+'d'](_0x52bc57),_0x3d8a6f[_0x55b224(0x769)](requestAnimationFrame,()=>_0x52bc57[_0x55b224(0x3b5)+'List'][_0x55b224(0x362)](_0x55b224(0x5fb)));}_0x52bc57[_0x55b224(0x3b5)+_0x55b224(0x3dc)][_0x55b224(0x765)+'e']('shown',_0x209a97);}else _0x186bb9['setIt'+'em'](_0x55b224(0x66c)+_0x55b224(0x676)+'r.v1',_0x4822f5[_0x55b224(0x46f)+_0x55b224(0x439)](_0x34e21f));}function _0x48bf85(){var _0x5f4e17=_0x4f8f9f;_0x342afd[_0x5f4e17(0x361)](_0xdcf9ae,!_0x169984);}function _0x23382e(){var _0x48b684=_0x4f8f9f,_0x9770ce=document['creat'+_0x48b684(0x3cc)+'ent'](_0x3d8a6f['vctwY']);_0x9770ce['class'+_0x48b684(0x736)]='mn-pa'+_0x48b684(0x3ab);var _0x534511=document[_0x48b684(0x366)+'eElem'+'ent'](_0x3d8a6f[_0x48b684(0x65f)]);_0x534511[_0x48b684(0x3b5)+'Name']=_0x48b684(0x3c0)+'de';var _0x4dc253=document[_0x48b684(0x366)+_0x48b684(0x3cc)+'ent'](_0x48b684(0x1ea));_0x4dc253[_0x48b684(0x3b5)+_0x48b684(0x736)]=_0x3d8a6f['fCpzh'],_0x4dc253['inner'+_0x48b684(0x497)]=_0x48b684(0x6b3)+_0x48b684(0x3de)+'ox=\x220'+_0x48b684(0x63d)+'\x2024\x22\x20'+_0x48b684(0x3b5)+'=\x22mn-'+_0x48b684(0x212)+'svg\x22>'+_0x48b684(0x698)+_0x48b684(0x2b8)+'12\x2021'+_0x48b684(0x394)+_0x48b684(0x3e2)+_0x48b684(0x709)+'-4-7.'+_0x48b684(0x27a)+_0x48b684(0x544)+_0x48b684(0x48e)+'\x204-4.'+_0x48b684(0x1f1)+'\x204\x204.'+'5c0\x203'+_0x48b684(0x382)+'5-4\x207'+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+_0x48b684(0x3ef)+'#ff6b'+'9d\x22\x20s'+_0x48b684(0x1d3)+'-widt'+_0x48b684(0x618)+_0x48b684(0x293)+_0x48b684(0x2db)+_0x48b684(0x32c)+'=\x22rou'+'nd\x22\x20s'+_0x48b684(0x1d3)+'-line'+'join='+'\x22roun'+_0x48b684(0x39d)+'circl'+_0x48b684(0x28c)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+_0x48b684(0x4dc)+'\x20fill'+_0x48b684(0x1a0)+_0x48b684(0x76f)+'/></s'+'vg>',_0x534511[_0x48b684(0x24b)+'dChil'+'d'](_0x4dc253);var _0x376e68=document[_0x48b684(0x366)+_0x48b684(0x3cc)+'ent'](_0x3d8a6f[_0x48b684(0x45d)]);_0x376e68[_0x48b684(0x3b5)+'Name']='mn-ma'+'in';var _0x524f77=document[_0x48b684(0x366)+_0x48b684(0x3cc)+_0x48b684(0x39a)](_0x48b684(0x4fe)+'r');_0x524f77[_0x48b684(0x3b5)+_0x48b684(0x736)]=_0x3d8a6f[_0x48b684(0x1b5)];var _0x2e8284=document['creat'+'eElem'+'ent']('div');_0x2e8284[_0x48b684(0x3b5)+'Name']=_0x3d8a6f[_0x48b684(0x6f9)];var _0x598939=document['creat'+_0x48b684(0x3cc)+'ent']('h2');_0x598939[_0x48b684(0x3b5)+'Name']=_0x48b684(0x39c),_0x598939['textC'+'onten'+'t']=_0x3d8a6f[_0x48b684(0x199)];var _0x444dce=document[_0x48b684(0x366)+'eElem'+'ent'](_0x3d8a6f['ohkpY']);_0x444dce['class'+_0x48b684(0x736)]=_0x48b684(0x6f0)+'b',_0x444dce[_0x48b684(0x64d)+_0x48b684(0x279)+'t']=_0x48b684(0x5cb)+_0x48b684(0x726)+_0x48b684(0x20a)+_0x48b684(0x5cd),_0x2e8284['appen'+'d'](_0x598939,_0x444dce);var _0x5a4f7a=document[_0x48b684(0x366)+_0x48b684(0x3cc)+_0x48b684(0x39a)](_0x48b684(0x33c)+'n');_0x5a4f7a[_0x48b684(0x735)]=_0x3d8a6f[_0x48b684(0x381)],_0x5a4f7a['class'+_0x48b684(0x736)]=_0x3d8a6f['dvERu'],_0x5a4f7a[_0x48b684(0x26e)]=_0x48b684(0x6b0),_0x5a4f7a[_0x48b684(0x507)+'HTML']=_0x3d8a6f[_0x48b684(0x24a)],_0x5a4f7a['oncli'+'ck']=()=>_0xdcf9ae(![]),_0x524f77[_0x48b684(0x24b)+'d'](_0x2e8284,_0x5a4f7a);var _0x12e95d=document[_0x48b684(0x366)+_0x48b684(0x3cc)+_0x48b684(0x39a)]('div');_0x12e95d[_0x48b684(0x3b5)+'Name']=_0x3d8a6f[_0x48b684(0x608)],_0x376e68[_0x48b684(0x24b)+'d'](_0x524f77,_0x12e95d),_0x9770ce[_0x48b684(0x24b)+'d'](_0x534511,_0x376e68);var _0x34bca3=new Map();for(var _0x2d746d of _0xa15a09){var _0x233358=document['creat'+'eElem'+_0x48b684(0x39a)](_0x48b684(0x33c)+'n');_0x233358[_0x48b684(0x735)]=_0x3d8a6f[_0x48b684(0x381)],_0x233358[_0x48b684(0x3b5)+'Name']=_0x3d8a6f[_0x48b684(0x719)],_0x233358['title']=_0x2d746d['label'],_0x233358['inner'+_0x48b684(0x497)]=_0x48b684(0x211)+'l>'+_0x2d746d['label']+_0x3d8a6f['zytbA'],_0x233358[_0x48b684(0x425)+'ck']=(_0x3ed26a=>()=>_0x3e6d7a(_0x3ed26a))(_0x2d746d['id']),_0x34bca3[_0x48b684(0x1ed)](_0x2d746d['id'],_0x233358),_0x534511['appen'+_0x48b684(0x443)+'d'](_0x233358);}function _0x3e6d7a(_0x1ef216){var _0x29c9df=_0x48b684;_0x1f1587[_0x29c9df(0x665)]=_0x1ef216,_0x1c3cbd();var _0x4024f3=_0xa15a09['find'](_0x37f716=>_0x37f716['id']===_0x1ef216)||_0xa15a09[0x17e+0x6a*0x21+-0x14*0xc2];_0x598939[_0x29c9df(0x64d)+_0x29c9df(0x279)+'t']=_0x3d8a6f['DErxT']+_0x4024f3['label'];for(var [_0x5abd2c,_0x42ebbf]of _0x34bca3)_0x42ebbf[_0x29c9df(0x3b5)+_0x29c9df(0x3dc)][_0x29c9df(0x765)+'e']('activ'+'e',_0x5abd2c===_0x1ef216);_0x12e95d['repla'+'ceChi'+_0x29c9df(0x758)](..._0x13a5e8(_0x1ef216));}return _0x3e6d7a(_0x1f1587['cat']||_0x3d8a6f['goiMn']),_0x3d8a6f['rQwZp'](setInterval,()=>{var _0x2d9016=_0x48b684,_0x4076a0={'ogJgc':_0x3d8a6f[_0x2d9016(0x70f)],'xJUOh':_0x3d8a6f[_0x2d9016(0x649)]};if(!_0x169984)return;var _0x37bfaa=_0x12e95d['child'+'ren'];for(var _0x26c9ef=0x2*0x4b3+-0xa9+-0x8bd;_0x26c9ef<_0x37bfaa[_0x2d9016(0x1f6)+'h'];_0x26c9ef++){if(_0x2d9016(0x357)!==_0x2d9016(0x357)){var _0x57c881=_0x4076a0['ogJgc']['split']('|'),_0x4adb36=-0x16a*-0x1+0x2dc*0x6+0x1*-0x1292;while(!![]){switch(_0x57c881[_0x4adb36++]){case'0':_0x501047[_0x2d9016(0x735)]='color';continue;case'1':_0x501047[_0x2d9016(0x525)]=/^#[0-9a-f]{6}$/i[_0x2d9016(0x5c1)](_0x50dded)?_0x3c4280:_0x4076a0[_0x2d9016(0x3b8)];continue;case'2':var _0x501047=_0x39ca3d['creat'+'eElem'+_0x2d9016(0x39a)](_0x2d9016(0x1c6));continue;case'3':return _0x501047;case'4':_0x501047['oninp'+'ut']=()=>_0x2082a1(_0x501047['value']);continue;case'5':_0x501047['class'+_0x2d9016(0x736)]=_0x2d9016(0x59f)+_0x2d9016(0x19a);continue;}break;}}else{var _0x409a15=_0x37bfaa[_0x26c9ef][_0x2d9016(0x61c)+_0x2d9016(0x5a6)+'tor'](_0x2d9016(0x488)+_0x2d9016(0x4d4));_0x409a15&&(_0x3d8a6f[_0x2d9016(0x332)](_0x409a15[_0x2d9016(0x64d)+'onten'+'t']['index'+'Of'](_0x3d8a6f['rZZdV']),0x4a8*-0x3+-0xf08+0x3a0*0x8)||_0x409a15[_0x2d9016(0x64d)+'onten'+'t']['index'+'Of'](_0x3d8a6f['nGQra'])===0x14c9+-0x1f4f+0xa86*0x1)&&(_0x409a15['textC'+_0x2d9016(0x279)+'t']=_0x3c53b1[_0x2d9016(0x310)+_0x2d9016(0x3ba)]?_0x3d8a6f[_0x2d9016(0x2d2)]:_0x3c53b1[_0x2d9016(0x74f)]?_0x3d8a6f['rbXoA'](_0x3d8a6f[_0x2d9016(0x72d)](_0x3d8a6f[_0x2d9016(0x34d)](_0x2d9016(0x29a)+'bound'+'\x20'+(_0x3c53b1[_0x2d9016(0x4f5)+_0x2d9016(0x4d2)]?_0x3c53b1[_0x2d9016(0x4f5)+'Ok']+'/'+_0x3c53b1['hooks'+_0x2d9016(0x4d2)]+(_0x2d9016(0x511)+'s'):_0x2d9016(0x496)+_0x2d9016(0x4f4)+_0x2d9016(0x639)+_0x2d9016(0x2ee)+_0x2d9016(0x4ac))+_0x3d8a6f[_0x2d9016(0x1d1)],_0x3c53b1['gameL'+_0x2d9016(0x67a)]?_0x3d8a6f[_0x2d9016(0x67f)]:_0x3d8a6f['TGGGO'])+(_0x2d9016(0x1cd)+_0x2d9016(0x42f)+'\x20')+(_0x3c53b1[_0x2d9016(0x5d3)+_0x2d9016(0x679)]?_0x2d9016(0x5da):_0x2d9016(0x708))+(_0x2d9016(0x753)+'vemen'+'t\x20'),_0x3c53b1[_0x2d9016(0x442)+_0x2d9016(0x6b1)]?_0x3d8a6f['ADKnL']:'none'),_0x3c53b1[_0x2d9016(0x1e2)+'rror']?_0x3d8a6f[_0x2d9016(0x253)]+_0x3c53b1[_0x2d9016(0x1e2)+'rror']:''):_0x2d9016(0x29a)+_0x2d9016(0x3e6)+_0x2d9016(0x60b)+_0x2d9016(0x5d0)+_0x2d9016(0x209)+_0x2d9016(0x6fe)+_0x2d9016(0x30e)+_0x2d9016(0x75a)+_0x2d9016(0x574)+'erscr'+'ipt)');}}},0x1*-0x86+-0x5ca+0xda*0xc),_0x9770ce;}var _0x366529=_0x4f8f9f(0x751)+_0x4f8f9f(0x283)+'\x20{\x20al'+_0x4f8f9f(0x348)+_0x4f8f9f(0x65e)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x6ba)+_0x4f8f9f(0x5d5)+_0x4f8f9f(0x5a0)+_0x4f8f9f(0x68a)+'order'+_0x4f8f9f(0x5ad)+_0x4f8f9f(0x584)+'in:\x200'+_0x4f8f9f(0x2ba)+_0x4f8f9f(0x19e)+'ily:\x20'+_0x4f8f9f(0x3ca)+_0x4f8f9f(0x510)+_0x4f8f9f(0x2d0)+_0x4f8f9f(0x5cf)+_0x4f8f9f(0x1ec)+_0x4f8f9f(0x2ce)+_0x4f8f9f(0x34e)+_0x4f8f9f(0x352)+_0x4f8f9f(0x2b3)+_0x4f8f9f(0x751)+_0x4f8f9f(0x4a0)+_0x4f8f9f(0x3e8)+'{\x20pos'+_0x4f8f9f(0x232)+_0x4f8f9f(0x39e)+'olute'+';\x20rig'+_0x4f8f9f(0x1ba)+_0x4f8f9f(0x743)+_0x4f8f9f(0x6a1)+_0x4f8f9f(0x2a4)+_0x4f8f9f(0x644)+_0x4f8f9f(0x627)+'\x20min('+'620px'+_0x4f8f9f(0x678)+_0x4f8f9f(0x1ca)+_0x4f8f9f(0x5b8)+_0x4f8f9f(0x245)+_0x4f8f9f(0x340)+'x-hei'+_0x4f8f9f(0x595)+_0x4f8f9f(0x312)+_0x4f8f9f(0x3ea)+_0x4f8f9f(0x73f)+_0x4f8f9f(0x6fb)+_0x4f8f9f(0x6e8)+'8px))'+';\x0a\x20\x20\x20'+_0x4f8f9f(0x62b)+_0x4f8f9f(0x2d7)+':\x20fle'+_0x4f8f9f(0x222)+_0x4f8f9f(0x55b)+'px;\x20p'+'addin'+_0x4f8f9f(0x67b)+_0x4f8f9f(0x727)+'order'+_0x4f8f9f(0x630)+'us:\x202'+'2px;\x20'+'point'+_0x4f8f9f(0x51e)+_0x4f8f9f(0x216)+'\x20auto'+_0x4f8f9f(0x207)+'\x20\x20\x20ba'+_0x4f8f9f(0x28d)+_0x4f8f9f(0x3e7)+_0x4f8f9f(0x306)+_0x4f8f9f(0x614)+_0x4f8f9f(0x270)+'82);\x20'+_0x4f8f9f(0x3a6)+_0x4f8f9f(0x349)+_0x4f8f9f(0x72f)+_0x4f8f9f(0x516)+_0x4f8f9f(0x768)+'x)\x20sa'+'turat'+'e(150'+_0x4f8f9f(0x2fb)+_0x4f8f9f(0x3c8)+'t-bac'+_0x4f8f9f(0x692)+'-filt'+_0x4f8f9f(0x428)+_0x4f8f9f(0x5f3)+_0x4f8f9f(0x661)+'satur'+_0x4f8f9f(0x5fa)+_0x4f8f9f(0x2d9)+_0x4f8f9f(0x751)+'\x20\x20box'+_0x4f8f9f(0x74d)+_0x4f8f9f(0x3fd)+_0x4f8f9f(0x220)+'1px\x20r'+_0x4f8f9f(0x570)+_0x4f8f9f(0x4cc)+_0x4f8f9f(0x71b)+_0x4f8f9f(0x23d)+',\x20ins'+_0x4f8f9f(0x60f)+_0x4f8f9f(0x54e)+_0x4f8f9f(0x635)+'(255,'+'255,2'+_0x4f8f9f(0x65b)+_0x4f8f9f(0x6cd)+_0x4f8f9f(0x480)+_0x4f8f9f(0x770)+'\x20rgba'+_0x4f8f9f(0x76e)+_0x4f8f9f(0x291)+');\x0a\x20\x20'+_0x4f8f9f(0x3c3)+_0x4f8f9f(0x4de)+_0x4f8f9f(0x42d)+_0x4f8f9f(0x5e2)+'sform'+_0x4f8f9f(0x586)+_0x4f8f9f(0x57d)+_0x4f8f9f(0x32b)+_0x4f8f9f(0x1bf)+'point'+'er-ev'+'ents:'+'\x20none'+';\x20tra'+_0x4f8f9f(0x739)+_0x4f8f9f(0x527)+_0x4f8f9f(0x4de)+_0x4f8f9f(0x728)+_0x4f8f9f(0x3d0)+_0x4f8f9f(0x458)+'ansfo'+_0x4f8f9f(0x62e)+_0x4f8f9f(0x645)+_0x4f8f9f(0x504)+_0x4f8f9f(0x4b2)+_0x4f8f9f(0x1f7)+_0x4f8f9f(0x5ee)+',1);\x0a'+_0x4f8f9f(0x48f)+_0x4f8f9f(0x448)+_0x4f8f9f(0x4f7)+'6eef2'+';\x20fon'+'t-siz'+_0x4f8f9f(0x4d6)+_0x4f8f9f(0x28f)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel.'+_0x4f8f9f(0x5fb)+'\x20{\x20op'+_0x4f8f9f(0x5b1)+':\x201;\x20'+_0x4f8f9f(0x613)+_0x4f8f9f(0x62a)+'\x20none'+';\x20poi'+_0x4f8f9f(0x296)+_0x4f8f9f(0x6c5)+'s:\x20au'+_0x4f8f9f(0x476)+_0x4f8f9f(0x751)+'.mn-s'+'ide\x20{'+_0x4f8f9f(0x2d3)+'lay:\x20'+_0x4f8f9f(0x309)+_0x4f8f9f(0x75b)+'-dire'+_0x4f8f9f(0x2fd)+':\x20col'+'umn;\x20'+_0x4f8f9f(0x403)+_0x4f8f9f(0x3a4)+_0x4f8f9f(0x1d2)+_0x4f8f9f(0x4b8)+'\x20gap:'+_0x4f8f9f(0x445)+'\x20widt'+'h:\x2062'+_0x4f8f9f(0x46d)+'lex:\x20'+'none;'+'\x20padd'+'ing:\x20'+_0x4f8f9f(0x3ac)+('0;\x20bo'+'rder-'+_0x4f8f9f(0x398)+'s:\x2016'+'px;\x0a\x20'+_0x4f8f9f(0x48f)+_0x4f8f9f(0x6c0)+'round'+':\x20rgb'+_0x4f8f9f(0x73d)+_0x4f8f9f(0x36e)+_0x4f8f9f(0x40f)+_0x4f8f9f(0x71f)+'\x20box-'+'shado'+_0x4f8f9f(0x4cd)+_0x4f8f9f(0x233)+_0x4f8f9f(0x220)+_0x4f8f9f(0x3fb)+_0x4f8f9f(0x570)+_0x4f8f9f(0x4cc)+_0x4f8f9f(0x71b)+_0x4f8f9f(0x36f)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x388)+_0x4f8f9f(0x301)+_0x4f8f9f(0x240)+_0x4f8f9f(0x440)+'y:\x20gr'+_0x4f8f9f(0x3af)+_0x4f8f9f(0x38f)+'items'+_0x4f8f9f(0x4ed)+'ter;\x20'+'width'+':\x2032p'+'x;\x20he'+'ight:'+_0x4f8f9f(0x219)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x388)+_0x4f8f9f(0x301)+_0x4f8f9f(0x624)+'\x20{\x20wi'+_0x4f8f9f(0x4f0)+'25px;'+'\x20heig'+_0x4f8f9f(0x1ba)+_0x4f8f9f(0x747)+_0x4f8f9f(0x1f4)+'low:\x20'+'visib'+_0x4f8f9f(0x6ab)+_0x4f8f9f(0x72f)+':\x20dro'+_0x4f8f9f(0x596)+_0x4f8f9f(0x4f6)+_0x4f8f9f(0x34f)+'x\x20rgb'+'a(255'+_0x4f8f9f(0x65a)+_0x4f8f9f(0x5ac)+_0x4f8f9f(0x2c6)+_0x4f8f9f(0x6c1)+_0x4f8f9f(0x61b)+'tab\x20{'+'\x20disp'+_0x4f8f9f(0x3f0)+_0x4f8f9f(0x309)+_0x4f8f9f(0x6e4)+_0x4f8f9f(0x6f5)+_0x4f8f9f(0x5e4)+_0x4f8f9f(0x41e)+_0x4f8f9f(0x56d)+_0x4f8f9f(0x63b)+'conte'+'nt:\x20c'+'enter'+_0x4f8f9f(0x60c)+_0x4f8f9f(0x73a)+'2px;\x20'+_0x4f8f9f(0x441)+'t:\x2034'+_0x4f8f9f(0x727)+'order'+_0x4f8f9f(0x365)+_0x4f8f9f(0x468)+_0x4f8f9f(0x271)+_0x4f8f9f(0x4ec)+_0x4f8f9f(0x64c)+_0x4f8f9f(0x751)+_0x4f8f9f(0x229)+_0x4f8f9f(0x21a)+_0x4f8f9f(0x565)+_0x4f8f9f(0x1ef)+_0x4f8f9f(0x54a)+_0x4f8f9f(0x472)+'or:\x20r'+'gba(2'+'46,23'+'8,242'+_0x4f8f9f(0x33b)+'\x20curs'+_0x4f8f9f(0x721)+_0x4f8f9f(0x558)+_0x4f8f9f(0x409)+_0x4f8f9f(0x6c4)+_0x4f8f9f(0x4b7)+_0x4f8f9f(0x3d2)+'font-'+'weigh'+_0x4f8f9f(0x588)+_0x4f8f9f(0x6ec)+_0x4f8f9f(0x71d)+_0x4f8f9f(0x6ca)+_0x4f8f9f(0x592)+_0x4f8f9f(0x666)+_0x4f8f9f(0x344)+':\x20rgb'+'a(246'+',238,'+_0x4f8f9f(0x6d7)+_0x4f8f9f(0x621)+'\x0a\x20\x20\x20\x20'+_0x4f8f9f(0x302)+'ab.ac'+'tive\x20'+'{\x20col'+_0x4f8f9f(0x2eb)+'ff6b9'+'d;\x20ba'+_0x4f8f9f(0x28d)+_0x4f8f9f(0x3e7)+'rgba('+_0x4f8f9f(0x6b9)+'07,15'+'7,.1)'+';\x20}\x0a\x20'+_0x4f8f9f(0x388)+_0x4f8f9f(0x48d)+_0x4f8f9f(0x206)+'lex:\x20'+'1;\x20mi'+'n-wid'+'th:\x200'+';\x20dis'+'play:'+_0x4f8f9f(0x75b)+_0x4f8f9f(0x59a)+_0x4f8f9f(0x58c)+_0x4f8f9f(0x45a)+'n:\x20co'+_0x4f8f9f(0x231)+'\x20}\x0a\x20\x20'+_0x4f8f9f(0x702)+_0x4f8f9f(0x5b2)+_0x4f8f9f(0x2f1)+'play:'+'\x20flex'+_0x4f8f9f(0x5b7)+_0x4f8f9f(0x27f)+_0x4f8f9f(0x5aa)+'cente'+_0x4f8f9f(0x648)+'p:\x2012'+'px;\x20p'+'addin'+_0x4f8f9f(0x53b)+_0x4f8f9f(0x2bf)+'\x2012px'+';\x20use'+'r-sel'+'ect:\x20'+_0x4f8f9f(0x3b2)+'\x20}\x0a\x20\x20'+_0x4f8f9f(0x702)+_0x4f8f9f(0x2ac)+_0x4f8f9f(0x3fe)+_0x4f8f9f(0x52b)+_0x4f8f9f(0x3f7)+_0x4f8f9f(0x49f)+'dth:\x20'+_0x4f8f9f(0x6ec)+_0x4f8f9f(0x71d)+'mn-h\x20'+'{\x20fon'+_0x4f8f9f(0x33f)+'e:\x2017'+_0x4f8f9f(0x46d)+_0x4f8f9f(0x640)+'eight'+_0x4f8f9f(0x50b)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+_0x4f8f9f(0x57b)+_0x4f8f9f(0x6c4)+_0x4f8f9f(0x4b7)+_0x4f8f9f(0x6d3)+_0x4f8f9f(0x6f4))+('ty:\x20.'+_0x4f8f9f(0x367)+_0x4f8f9f(0x71d)+'mn-cl'+_0x4f8f9f(0x329)+'\x20disp'+_0x4f8f9f(0x3f0)+'grid;'+_0x4f8f9f(0x56f)+_0x4f8f9f(0x58b)+_0x4f8f9f(0x5e4)+'enter'+_0x4f8f9f(0x60c)+'th:\x202'+_0x4f8f9f(0x71e)+'heigh'+_0x4f8f9f(0x5c6)+'px;\x20b'+_0x4f8f9f(0x197)+_0x4f8f9f(0x365)+'borde'+'r-rad'+'ius:\x20'+_0x4f8f9f(0x71e)+'backg'+_0x4f8f9f(0x6bf)+_0x4f8f9f(0x586)+_0x4f8f9f(0x1d4)+'ent;\x20'+_0x4f8f9f(0x344)+_0x4f8f9f(0x424)+_0x4f8f9f(0x1ac)+'\x20opac'+'ity:\x20'+'.45;\x20'+'curso'+'r:\x20po'+_0x4f8f9f(0x321)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x388)+'n-clo'+'se:ho'+_0x4f8f9f(0x193)+_0x4f8f9f(0x2a9)+'ity:\x20'+_0x4f8f9f(0x35c)+'ckgro'+_0x4f8f9f(0x3e7)+'rgba('+_0x4f8f9f(0x417)+_0x4f8f9f(0x4cc)+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x4f8f9f(0x590)+_0x4f8f9f(0x724)+_0x4f8f9f(0x204)+_0x4f8f9f(0x60e)+':\x2014p'+_0x4f8f9f(0x308)+'ight:'+_0x4f8f9f(0x5be)+_0x4f8f9f(0x509)+'l:\x20no'+'ne;\x20s'+_0x4f8f9f(0x1d3)+':\x20cur'+_0x4f8f9f(0x670)+_0x4f8f9f(0x540)+_0x4f8f9f(0x293)+_0x4f8f9f(0x5a5)+_0x4f8f9f(0x4f0)+_0x4f8f9f(0x6bb)+'roke-'+_0x4f8f9f(0x5d4)+_0x4f8f9f(0x32a)+_0x4f8f9f(0x451)+_0x4f8f9f(0x744)+_0x4f8f9f(0x702)+'-cols'+'\x20{\x20fl'+_0x4f8f9f(0x655)+';\x20min'+_0x4f8f9f(0x369)+'ht:\x200'+';\x20ove'+_0x4f8f9f(0x295)+_0x4f8f9f(0x528)+'uto;\x20'+_0x4f8f9f(0x6c2)+_0x4f8f9f(0x514)+_0x4f8f9f(0x545)+_0x4f8f9f(0x5f7)+'templ'+_0x4f8f9f(0x1a5)+_0x4f8f9f(0x447)+_0x4f8f9f(0x767)+_0x4f8f9f(0x5f1)+'auto-'+_0x4f8f9f(0x3ce)+'\x20minm'+'ax(25'+_0x4f8f9f(0x4e4)+'1fr))'+';\x20ali'+_0x4f8f9f(0x27f)+'ems:\x20'+_0x4f8f9f(0x371)+';\x20ali'+'gn-co'+'ntent'+':\x20sta'+'rt;\x20g'+_0x4f8f9f(0x2bb)+_0x4f8f9f(0x3d2)+_0x4f8f9f(0x307)+_0x4f8f9f(0x421)+_0x4f8f9f(0x617)+'6px\x200'+_0x4f8f9f(0x41d)+'\x20\x20\x20.m'+_0x4f8f9f(0x72a)+'s::-w'+_0x4f8f9f(0x554)+'-scro'+_0x4f8f9f(0x5ca)+_0x4f8f9f(0x6d6)+'dth:\x20'+_0x4f8f9f(0x71e)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x4f8f9f(0x560)+':-web'+_0x4f8f9f(0x3f1)+'croll'+'bar-t'+'humb\x20'+_0x4f8f9f(0x36a)+'kgrou'+'nd:\x20r'+_0x4f8f9f(0x570)+'55,25'+_0x4f8f9f(0x71b)+',.08)'+_0x4f8f9f(0x4d8)+_0x4f8f9f(0x1ae)+_0x4f8f9f(0x38c)+':\x204px'+_0x4f8f9f(0x41d)+'\x20\x20\x20.s'+_0x4f8f9f(0x493)+_0x4f8f9f(0x3f8)+'order'+_0x4f8f9f(0x630)+'us:\x201'+_0x4f8f9f(0x1a7)+_0x4f8f9f(0x6c0)+_0x4f8f9f(0x6bf)+':\x20rgb'+_0x4f8f9f(0x73d)+_0x4f8f9f(0x36e)+_0x4f8f9f(0x40f)+'025);'+'\x20box-'+'shado'+_0x4f8f9f(0x4cd)+_0x4f8f9f(0x233)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x4f8f9f(0x4cc)+_0x4f8f9f(0x71b)+_0x4f8f9f(0x36f)+_0x4f8f9f(0x41d)+'\x20\x20\x20.s'+'k-car'+_0x4f8f9f(0x1c7)+'{\x20bac'+_0x4f8f9f(0x21a)+_0x4f8f9f(0x491)+_0x4f8f9f(0x570)+'55,25'+'5,255'+_0x4f8f9f(0x1ab)+';\x20box'+'-shad'+_0x4f8f9f(0x252)+'nset\x20'+_0x4f8f9f(0x6ad)+_0x4f8f9f(0x351)+_0x4f8f9f(0x306)+_0x4f8f9f(0x6b9)+_0x4f8f9f(0x6cf)+'7,.28'+');\x20}\x0a'+_0x4f8f9f(0x71d)+'sk-ca'+'rd-he'+_0x4f8f9f(0x5bd)+'displ')+('ay:\x20f'+_0x4f8f9f(0x5a9)+_0x4f8f9f(0x403)+_0x4f8f9f(0x3a4)+'s:\x20ce'+_0x4f8f9f(0x4b8)+_0x4f8f9f(0x684)+_0x4f8f9f(0x562)+_0x4f8f9f(0x418)+'ing:\x20'+_0x4f8f9f(0x2f4)+_0x4f8f9f(0x725)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x4f8f9f(0x730)+_0x4f8f9f(0x2ac)+'e\x20{\x20f'+_0x4f8f9f(0x1ee)+'1;\x20mi'+'n-wid'+_0x4f8f9f(0x4d5)+_0x4f8f9f(0x41d)+'\x20\x20\x20.s'+'k-car'+'d-tit'+_0x4f8f9f(0x256)+'rong\x20'+_0x4f8f9f(0x6a8)+'t-siz'+'e:\x2013'+_0x4f8f9f(0x46d)+_0x4f8f9f(0x640)+'eight'+':\x20600'+_0x4f8f9f(0x472)+_0x4f8f9f(0x385)+'gba(2'+'46,23'+_0x4f8f9f(0x414)+',.45)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x4f8f9f(0x493)+_0x4f8f9f(0x1c7)+'.sk-c'+_0x4f8f9f(0x214)+'itle\x20'+_0x4f8f9f(0x3ee)+'g\x20{\x20c'+'olor:'+_0x4f8f9f(0x1c1)+'0f5;\x20'+_0x4f8f9f(0x6c1)+_0x4f8f9f(0x508)+_0x4f8f9f(0x752)+_0x4f8f9f(0x6ed)+_0x4f8f9f(0x4a6)+':\x200\x201'+'2px\x201'+'0px;\x20'+_0x4f8f9f(0x6c1)+'\x20.sk-'+_0x4f8f9f(0x722)+_0x4f8f9f(0x57b)+'nt-si'+_0x4f8f9f(0x4b7)+_0x4f8f9f(0x6d3)+'opaci'+_0x4f8f9f(0x210)+_0x4f8f9f(0x426)+'rgin-'+_0x4f8f9f(0x6a1)+_0x4f8f9f(0x3e3)+'x;\x20}\x0a'+_0x4f8f9f(0x71d)+'sk-ct'+_0x4f8f9f(0x1fd)+'ispla'+'y:\x20fl'+_0x4f8f9f(0x69d)+'lign-'+'items'+':\x20cen'+_0x4f8f9f(0x718)+'gap:\x20'+'8px;\x20'+_0x4f8f9f(0x307)+'ng:\x204'+_0x4f8f9f(0x393)+'\x20font'+'-size'+_0x4f8f9f(0x6ae)+_0x4f8f9f(0x747)+_0x4f8f9f(0x6c1)+'\x20.sk-'+_0x4f8f9f(0x31a)+_0x4f8f9f(0x1da)+_0x4f8f9f(0x655)+_0x4f8f9f(0x472)+_0x4f8f9f(0x385)+_0x4f8f9f(0x570)+_0x4f8f9f(0x3a2)+_0x4f8f9f(0x414)+',.75)'+';\x20}\x0a\x20'+_0x4f8f9f(0x4cb)+'k-hin'+'t\x20{\x20d'+_0x4f8f9f(0x440)+_0x4f8f9f(0x235)+_0x4f8f9f(0x6c7)+_0x4f8f9f(0x28a)+'size:'+_0x4f8f9f(0x57f)+_0x4f8f9f(0x70a)+_0x4f8f9f(0x4a7)+_0x4f8f9f(0x537)+'}\x0a\x20\x20\x20'+_0x4f8f9f(0x508)+_0x4f8f9f(0x266)+_0x4f8f9f(0x3da)+_0x4f8f9f(0x3b3)+_0x4f8f9f(0x2a5)+_0x4f8f9f(0x6fc)+'ve;\x20w'+_0x4f8f9f(0x627)+_0x4f8f9f(0x622)+';\x20hei'+_0x4f8f9f(0x595)+_0x4f8f9f(0x276)+_0x4f8f9f(0x54f)+_0x4f8f9f(0x536)+';\x20bor'+_0x4f8f9f(0x1ae)+_0x4f8f9f(0x38c)+':\x2099p'+'x;\x20ba'+'ckgro'+'und:\x20'+'rgba('+_0x4f8f9f(0x417)+'55,25'+_0x4f8f9f(0x494)+');\x20cu'+_0x4f8f9f(0x6ee)+'\x20poin'+'ter;\x20'+_0x4f8f9f(0x52b)+_0x4f8f9f(0x3b0)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+_0x4f8f9f(0x745)+_0x4f8f9f(0x2e6)+'\x20{\x20co'+'ntent'+_0x4f8f9f(0x656)+'\x20posi'+_0x4f8f9f(0x2e5)+'\x20abso'+_0x4f8f9f(0x21d)+_0x4f8f9f(0x5e6)+_0x4f8f9f(0x489)+_0x4f8f9f(0x2a1)+':\x203px'+_0x4f8f9f(0x60c)+'th:\x208'+'px;\x20h'+_0x4f8f9f(0x68d)+_0x4f8f9f(0x449)+_0x4f8f9f(0x4d8)+_0x4f8f9f(0x1ae)+_0x4f8f9f(0x38c)+_0x4f8f9f(0x4f9)+_0x4f8f9f(0x287)+_0x4f8f9f(0x21a)+_0x4f8f9f(0x491)+'gba(2'+_0x4f8f9f(0x4cc)+_0x4f8f9f(0x71b)+',.25)'+_0x4f8f9f(0x521)+_0x4f8f9f(0x739)+'on:\x20l'+_0x4f8f9f(0x346)+'2s,\x20b'+'ackgr'+'ound\x20'+_0x4f8f9f(0x350)+_0x4f8f9f(0x6c1)+_0x4f8f9f(0x508)+'switc'+_0x4f8f9f(0x35e)+_0x4f8f9f(0x51b)+_0x4f8f9f(0x315)+_0x4f8f9f(0x50c)+_0x4f8f9f(0x239)+'backg'+'round'+':\x20rgb')+('a(255'+',107,'+_0x4f8f9f(0x5ac)+_0x4f8f9f(0x5b9)+_0x4f8f9f(0x6c1)+'\x20.sk-'+_0x4f8f9f(0x266)+_0x4f8f9f(0x35e)+_0x4f8f9f(0x51b)+'cked='+_0x4f8f9f(0x50c)+_0x4f8f9f(0x547)+_0x4f8f9f(0x467)+'{\x20lef'+'t:\x2015'+'px;\x20b'+_0x4f8f9f(0x333)+'ound:'+_0x4f8f9f(0x1dd)+'b9d;\x20'+_0x4f8f9f(0x6c1)+'\x20.sk-'+_0x4f8f9f(0x3eb)+_0x4f8f9f(0x66f)+_0x4f8f9f(0x28d)+_0x4f8f9f(0x3e7)+_0x4f8f9f(0x306)+'255,2'+'55,25'+_0x4f8f9f(0x24d)+_0x4f8f9f(0x1ce)+_0x4f8f9f(0x197)+_0x4f8f9f(0x365)+'borde'+_0x4f8f9f(0x271)+_0x4f8f9f(0x4ec)+_0x4f8f9f(0x55f)+_0x4f8f9f(0x344)+_0x4f8f9f(0x436)+'eef2;'+_0x4f8f9f(0x418)+_0x4f8f9f(0x628)+'6px\x209'+_0x4f8f9f(0x46d)+_0x4f8f9f(0x5a4)+_0x4f8f9f(0x5ff)+'11.5p'+_0x4f8f9f(0x3c9)+_0x4f8f9f(0x629)+_0x4f8f9f(0x5dc)+'e;\x20bo'+'x-sha'+_0x4f8f9f(0x474)+_0x4f8f9f(0x21c)+_0x4f8f9f(0x220)+'0\x201px'+_0x4f8f9f(0x635)+_0x4f8f9f(0x606)+_0x4f8f9f(0x417)+_0x4f8f9f(0x65b)+'5);\x20}'+_0x4f8f9f(0x751)+'.sk-f'+_0x4f8f9f(0x387)+'optio'+_0x4f8f9f(0x74e)+_0x4f8f9f(0x333)+_0x4f8f9f(0x23f)+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'range'+_0x4f8f9f(0x2f2)+_0x4f8f9f(0x2d7)+_0x4f8f9f(0x4e6)+'x;\x20al'+'ign-i'+_0x4f8f9f(0x4c8)+_0x4f8f9f(0x2f6)+_0x4f8f9f(0x49b)+_0x4f8f9f(0x1b8)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-s'+_0x4f8f9f(0x243)+_0x4f8f9f(0x612)+'ebkit'+'-appe'+_0x4f8f9f(0x59c)+'e:\x20no'+_0x4f8f9f(0x453)+_0x4f8f9f(0x2d1)+'ance:'+_0x4f8f9f(0x3b0)+_0x4f8f9f(0x60c)+_0x4f8f9f(0x6bc)+_0x4f8f9f(0x3d2)+'heigh'+_0x4f8f9f(0x3db)+_0x4f8f9f(0x27c)+_0x4f8f9f(0x28d)+_0x4f8f9f(0x3e7)+'trans'+'paren'+_0x4f8f9f(0x47a)+'\x20\x20\x20\x20.'+_0x4f8f9f(0x534)+'ider:'+_0x4f8f9f(0x5c2)+_0x4f8f9f(0x3f1)+_0x4f8f9f(0x243)+'-runn'+_0x4f8f9f(0x427)+'track'+_0x4f8f9f(0x281)+_0x4f8f9f(0x6a4)+'\x202px;'+'\x20bord'+'er-ra'+_0x4f8f9f(0x5ae)+_0x4f8f9f(0x4db)+_0x4f8f9f(0x5ea)+_0x4f8f9f(0x1c9)+_0x4f8f9f(0x1f3)+_0x4f8f9f(0x353)+_0x4f8f9f(0x715)+'ent(#'+'ff6b9'+'d,\x20#f'+'f6b9d'+')\x200\x200'+_0x4f8f9f(0x3c4)+_0x4f8f9f(0x383)+_0x4f8f9f(0x5c4)+_0x4f8f9f(0x261)+_0x4f8f9f(0x3dd)+'repea'+'t,\x20rg'+'ba(25'+_0x4f8f9f(0x71b)+_0x4f8f9f(0x36e)+_0x4f8f9f(0x4be)+'\x20}\x0a\x20\x20'+_0x4f8f9f(0x410)+_0x4f8f9f(0x73c)+_0x4f8f9f(0x33a)+_0x4f8f9f(0x3c8)+_0x4f8f9f(0x4ad)+_0x4f8f9f(0x771)+_0x4f8f9f(0x1cb)+_0x4f8f9f(0x372)+_0x4f8f9f(0x4a4)+_0x4f8f9f(0x660)+'rance'+_0x4f8f9f(0x5dc)+'e;\x20wi'+'dth:\x20'+'6px;\x20'+'heigh'+_0x4f8f9f(0x1c4)+_0x4f8f9f(0x274)+'rgin-'+_0x4f8f9f(0x1e5)+'-2px;'+_0x4f8f9f(0x54f)+_0x4f8f9f(0x69c)+_0x4f8f9f(0x5ae)+_0x4f8f9f(0x5c7)+_0x4f8f9f(0x5ea)+'groun'+_0x4f8f9f(0x2fe)+_0x4f8f9f(0x54b)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x4cb)+_0x4f8f9f(0x264)+_0x4f8f9f(0x57b)+_0x4f8f9f(0x6c4)+'ze:\x201'+'1px;\x20'+_0x4f8f9f(0x28a)+_0x4f8f9f(0x46c)+'t:\x2060'+'0;\x20mi'+_0x4f8f9f(0x687)+'th:\x202'+'8px;\x20'+_0x4f8f9f(0x68e)+_0x4f8f9f(0x403)+':\x20rig'+'ht;\x20c'+'olor:'+_0x4f8f9f(0x635)+_0x4f8f9f(0x373)+_0x4f8f9f(0x611)+'42,.8'+');\x20}\x0a'+_0x4f8f9f(0x71d)+'sk-co'+_0x4f8f9f(0x56b))+(_0x4f8f9f(0x593)+'h:\x2034'+_0x4f8f9f(0x38a)+_0x4f8f9f(0x68d)+_0x4f8f9f(0x334)+'x;\x20bo'+_0x4f8f9f(0x322)+_0x4f8f9f(0x237)+'order'+'-radi'+_0x4f8f9f(0x4b1)+_0x4f8f9f(0x727)+_0x4f8f9f(0x333)+_0x4f8f9f(0x23f)+_0x4f8f9f(0x3b0)+_0x4f8f9f(0x25c)+'ding:'+_0x4f8f9f(0x66e)+'ursor'+_0x4f8f9f(0x1b0)+_0x4f8f9f(0x4b8)+'\x20}\x0a\x20\x20'+_0x4f8f9f(0x410)+_0x4f8f9f(0x691)+_0x4f8f9f(0x57b)+_0x4f8f9f(0x6c4)+_0x4f8f9f(0x4b7)+'1px;\x20'+_0x4f8f9f(0x344)+_0x4f8f9f(0x1a3)+_0x4f8f9f(0x6ce)+_0x4f8f9f(0x317)+_0x4f8f9f(0x6d7)+'5);\x20p'+_0x4f8f9f(0x636)+_0x4f8f9f(0x56a)+'x\x200;\x20'+'}\x0a\x20\x20\x20'+_0x4f8f9f(0x508)+_0x4f8f9f(0x3d5)+_0x4f8f9f(0x677)+'\x20colo'+_0x4f8f9f(0x4f7)+_0x4f8f9f(0x446)+_0x4f8f9f(0x41d)+_0x4f8f9f(0x4cb)+'k-btn'+_0x4f8f9f(0x41c)+_0x4f8f9f(0x5e8)+_0x4f8f9f(0x543)+'flex-'+'start'+';\x20bor'+'der:\x20'+'0;\x20bo'+_0x4f8f9f(0x1db)+'radiu'+_0x4f8f9f(0x1a9)+'x;\x20pa'+'dding'+_0x4f8f9f(0x449)+_0x4f8f9f(0x3a8)+';\x20bac'+_0x4f8f9f(0x21a)+'nd:\x20#'+'ff6b9'+_0x4f8f9f(0x62c)+'lor:\x20'+_0x4f8f9f(0x482)+'\x20font'+_0x4f8f9f(0x208)+_0x4f8f9f(0x6ae)+_0x4f8f9f(0x747)+'font-'+'weigh'+_0x4f8f9f(0x588)+_0x4f8f9f(0x675)+_0x4f8f9f(0x6ee)+_0x4f8f9f(0x24e)+_0x4f8f9f(0x718)+'}\x0a\x20\x20\x20'+_0x4f8f9f(0x508)+_0x4f8f9f(0x23b)+'over\x20'+'{\x20fil'+_0x4f8f9f(0x559)+_0x4f8f9f(0x3d7)+_0x4f8f9f(0x249)+'(1.1)'+_0x4f8f9f(0x41d)+'\x20\x20\x20');window[_0x4f8f9f(0x6b5)+'entLi'+'stene'+'r'](_0x342afd[_0x4f8f9f(0x659)],_0x3d600f=>{var _0x41b985=_0x4f8f9f;'FlqoY'!==_0x41b985(0x571)?(_0x5921e6[_0x41b985(0x5bf)+_0x41b985(0x429)]=_0x279bbc,_0x1954ab()):_0x3d600f['code']===_0x342afd[_0x41b985(0x285)]&&(_0x3d600f[_0x41b985(0x6cc)+'ntDef'+_0x41b985(0x38d)](),_0x48bf85());},!![]);var _0x4b5af4=document[_0x4f8f9f(0x366)+_0x4f8f9f(0x3cc)+'ent'](_0x4f8f9f(0x1ea));_0x4b5af4['style'][_0x4f8f9f(0x717)+'xt']='posit'+'ion:f'+_0x4f8f9f(0x67c)+'top:1'+_0x4f8f9f(0x42a)+'ight:'+_0x4f8f9f(0x725)+'z-ind'+_0x4f8f9f(0x733)+_0x4f8f9f(0x61f)+_0x4f8f9f(0x1b1)+_0x4f8f9f(0x58d)+_0x4f8f9f(0x3a1)+_0x4f8f9f(0x3c7)+_0x4f8f9f(0x627)+_0x4f8f9f(0x699)+_0x4f8f9f(0x441)+_0x4f8f9f(0x61e)+'x;opa'+'city:'+_0x4f8f9f(0x238)+'ransi'+_0x4f8f9f(0x2e5)+_0x4f8f9f(0x6f4)+'ty\x200.'+'2s;po'+_0x4f8f9f(0x321)+_0x4f8f9f(0x3a3)+'ts:au'+'to;fi'+_0x4f8f9f(0x2ed)+_0x4f8f9f(0x2a6)+_0x4f8f9f(0x37b)+_0x4f8f9f(0x203)+'\x204px\x20'+_0x4f8f9f(0x306)+_0x4f8f9f(0x6b9)+'07,15'+_0x4f8f9f(0x1d7)+'))',_0x4b5af4[_0x4f8f9f(0x507)+'HTML']=_0x4f8f9f(0x6b3)+'viewB'+_0x4f8f9f(0x43f)+_0x4f8f9f(0x63d)+_0x4f8f9f(0x470)+'<path'+'\x20d=\x22M'+_0x4f8f9f(0x38b)+_0x4f8f9f(0x394)+'-2.5-'+_0x4f8f9f(0x709)+_0x4f8f9f(0x637)+'5\x200-2'+_0x4f8f9f(0x544)+'8-4.5'+_0x4f8f9f(0x30b)+_0x4f8f9f(0x1f1)+_0x4f8f9f(0x5f6)+_0x4f8f9f(0x3d1)+_0x4f8f9f(0x382)+_0x4f8f9f(0x697)+'.5z\x22\x20'+_0x4f8f9f(0x354)+'\x22none'+'\x22\x20str'+_0x4f8f9f(0x3ef)+_0x4f8f9f(0x2b4)+_0x4f8f9f(0x6ff)+'troke'+'-widt'+_0x4f8f9f(0x618)+'\x20stro'+'ke-li'+_0x4f8f9f(0x32c)+'=\x22rou'+_0x4f8f9f(0x2b2)+_0x4f8f9f(0x1d3)+_0x4f8f9f(0x2e4)+'join='+_0x4f8f9f(0x30c)+'d\x22/><'+_0x4f8f9f(0x2a2)+'e\x20cx='+_0x4f8f9f(0x401)+_0x4f8f9f(0x50a)+'0\x22\x20r='+_0x4f8f9f(0x4dc)+'\x20fill'+'=\x22#ff'+_0x4f8f9f(0x76f)+_0x4f8f9f(0x37d)+'vg>',_0x4b5af4['title']=_0x342afd[_0x4f8f9f(0x1c3)],_0x4b5af4[_0x4f8f9f(0x70e)+_0x4f8f9f(0x6b6)+'er']=()=>_0x4b5af4[_0x4f8f9f(0x3bd)]['opaci'+'ty']='1',_0x4b5af4['onmou'+_0x4f8f9f(0x411)+'ve']=()=>_0x4b5af4[_0x4f8f9f(0x3bd)][_0x4f8f9f(0x6f4)+'ty']=_0x4f8f9f(0x62d),_0x4b5af4['oncli'+'ck']=_0x247e57=>{var _0x5cadf7=_0x4f8f9f;if(_0x3d8a6f['aGRjS']('IZsXs',_0x3d8a6f[_0x5cadf7(0x533)]))_0x247e57[_0x5cadf7(0x466)+'ropag'+'ation'](),_0x48bf85();else try{_0xf8f19d['setIt'+'em']('sakur'+_0x5cadf7(0x676)+_0x5cadf7(0x3a9),_0x2c043b[_0x5cadf7(0x46f)+'gify'](_0x360f4a));}catch(_0x4a1fed){}},document[_0x4f8f9f(0x6e1)]['appen'+_0x4f8f9f(0x443)+'d'](_0x4b5af4),_0x342afd[_0x4f8f9f(0x246)](_0x235b2c),requestAnimationFrame(_0x35c4ac),console[_0x4f8f9f(0x5a1)](_0x342afd[_0x4f8f9f(0x45c)],_0x3c53b1['uwmk']);});})()));function _0xa550(){var _0x48f681=['CgvHDcG','CMfWAwq','BhvYkdi','ywqGD2G','u2TPChm','idqGnc4','z3jPzc0','oxWYm3W','ywXSzwq','yxrLkde','C2HVD24','zcbZzwu','wNLRDhO','D3jPDgu','AxPLoIa','BhrO','yxvSDca','uMvJDa','Aw9U','x19ZywS','Dw5RBM8','kdi1nsW','lYbhCMe','shLiBfG','zxjZihq','AfrYDKW','tKCGlsa','oYb3Awq','zNbZ','D2LKDgG','zxqGmca','Fdf8nhW','mJm4ldi','ihSGlxC','DhjHBNm','mJqSmtC','s1j0tNC','y29TCgW','idrWEca','Ad0ImIi','A2r5r3i','Dg9W','ic5TBI0','CxvLCNK','A3ztyvu','DdOYnNa','ndC0odm','rNPLuK4','ocK7ih0','idi2ChG','EgT4wxG','BY1ZDMC','ntrmqM5eELu','tKCG4Ocuia','Awr0AdO','Aw5NoIa','DgXPBMu','zM9YBtO','icaGzgK','zdSGy28','mc41','CM0GlJq','nIaXoci','lxjHzgK','B2r5','nJaWide','lwLVxYO','zu50sxO','ihjNyMe','ywrKAw4','ltqTnY4','DgHLihC','BwvKicG','ls1W','DgLMEs0','rLbtigm','idaGmJq','yxr0ywm','l3jHCgK','B250lxC','y29TyMe','C3rYB2S','qNLjza','ChG7ihC','nxmGy3u','q29duxy','lMXHC3q','CJSGz2e','ywf3DKC','CMvU','BKnKu3O','mtbWEdS','Dgv4Dem','sgvPz2G','DujjAKe','yxjNzxq','ugTXsK4','nNW5Fde','nZaWia','r1rbt3e','zxG6ide','oIaIiJS','EfD4AwO','wLLZuw0','t2Hhz2e','ldeWnYW','ntuSlJa','s0nhuwe','C2STy2e','AxrPywW','u3bTu3a','yxbWzwe','mNb4ksa','qu9dCM8','DwX0','z2v0rwW','y2f0','zxiGEYa','ie9olG','B01ou2G','Fdj8n3W','Bg9Hzhm','CMqTAgu','C2fRDxi','Bw9fEha','ida7igm','ihSGyMe','CMvUDem','ChvZAa','khjLBg8','wvzwEKC','y2HtAxO','mdSGy3u','ys5RB3u','zxjYihS','lcbJywW','zxjZ','B2fKzwq','zZOGmta','AxHLzdS','CMfUz2u','y2fSBa','EfrurMq','zwfxC24','C3bHBG','BNqGAxq','ELbPuLq','igDHCdO','q1nmCu8','t010A1a','BI13Awq','D1bwENK','BgLUzvC','BMC6igi','BerPzsK','yxrPB24','zwLNAhq','Dgv4Dc0','u0fgrq','BguGAwy','lw5VDgu','A2rYB3a','ihn0AwW','BerPzsW','BgLUzvq','zM9UDa','ns00idC','phbHDgG','mJzWEdS','tgvNAw8','DgXL','zxiTCMe','zxG7ige','rwfJAca','BYb0Agu','sNvTCca','yM90Dg8','vvPJDLG','B3jZige','AwDODdO','v0fttsa','qvfvC1u','Aw1Lihm','EYbMB24','A1PxA00','C2XPy2u','Bgu7igy','ifvxtuS','mcaWida','oIaXms4','yw5Uywi','q2XVC2u','zw50CW','yxrxwNm','phn2zYa','CKjxtNK','ywrKrxy','C2vLBNq','DMvTzw4','yxjPys0','mJu1lde','icaGkIa','mJSGC3q','DgG6idK','BgLNBG','FdiYFde','CM91BMq','yMfJA2C','FqOGica','zgLZCgW','s1bNt0K','BNqTC2K','zxzLBNq','AK52v1e','B2nRoYa','B3vKAK8','BwLKzgW','Bw4TDge','BM9tChi','ChjLDMu','nsKSida','ysGYndy','mdCSmtu','ChPbD3O','zNvSBhm','zMLSBa','mxb4oYa','ufmGDw4','sffiuwO','ihSGD2K','mJqYlc4','u2fMzxq','BKHTqKS','zxjYB3i','AhPrD2m','EhzRrxK','C21HBgW','zs5bCha','ANzewMO','uwTjDLq','yM9KEq','wxLtCvq','zM9YBxm','igfSAwC','y0z4vMK','C2STDMe','vhbhBfK','AcaTidq','EMHNru4','C2v0uhi','t1nOB28','mdSGFqO','ihSGCge','CNnVCJO','oJa7D2K','Bw4TC3u','zg93BIa','yLrmC1C','mtyXndy5ywnguNDz','B3bHy2K','BI1PDgu','DhKGjq','we9Jwfq','qwDvuem','B0jWuMC','DenRwKC','kdeWmhy','zwXHDgK','y2HdB2W','BhKGkhi','owqIihm','Aw5Mqw0','twLZyW','icaUBw4','z2v0sxq','BM93','AwXKigG','yxrSEsa','B2vZig4','BM9Uzq','nc00lJu','oYbVCge','lxnHBNm','ChGGDwK','EgvZige','B25TB3u','CgzOrxO','C2STBM8','DeTkt1K','ndK3ntKXmxPHEwzwAa','vNfvEwy','C2v0qxq','z3jHzgK','B2LSicG','y3nZvgu','DgvYoYa','t2zPthC','zMLSBfq','nsWYntu','DMLHifm','icaGic4','ohb4oYa','mdi1ktS','ywrIBg8','B3i6iha','BwrLC2m','r2fgtMG','B3nLihm','mtjWEdS','DhjPA2u','ChG7igi','EsaUmZu','ANvTCfa','BI1JB2W','suDnwhu','vgLJAW','Dwj6yuO','zxj5idi','AwX0zxi','lwnHCMq','Cufyzxu','Fde0Fda','zxG6mJe','DhjPyNu','DhLWzq','tMfTzq','mxWZ','y2HPBgq','BNnPDgK','DgG6idu','tw92zw0','lxnSAwq','ysGYntu','u3bHy2u','ignHBgm','BwvsDw4','tgj1zKW','zIXZExm','nhb4oYa','ih0kica','DgnOoJO','B25JAge','nxb4oYa','B3rZlG','tu9ersa','ENr3ueW','BMn0Aw8','B1Hpy2O','lxnOywq','BIb7igi','DxDTAW','zvPsCMS','cIaGica','BwjVzhK','ihWGBw8','AgPqBNO','wM9mvum','B29Rihi','wuv3vum','BgrYzw4','r3ney3m','ywXSihq','igzSzxG','lwfWCgW','CgfYC2u','CMvMAxG','ALHirNq','As1TB24','Dw5Kzwq','Be1VDgK','Ag9VA0m','z2uUiei','Dg9Nz2W','q0XsruS','CZOGCMu','CIGYmNa','t3vzA3G','rNrNrwq','igfUzca','qxnZzw0','ieTLzxa','kdaSmcW','nMi5zci','idGWChG','zgvYlxq','DMvYihS','ifvUAxq','AxrJAa','BeryC0W','B3jKzxi','B3b0Aw8','qxLWsLm','Bg9Y','C2STBwi','tw9Kzsa','ms4XlJa','Dc1Myw0','mtaWid0','psiJzMy','EuvUz2K','zw5OD0G','oIbYz2i','s1ncqxK','yxrLlwm','tvfnELa','mNb4oYa','q3vZDg8','CZOGoha','DgLKzs4','lc4WncK','zxjPDdS','zwfKEs4','zgvYlxi','C2vSzwm','oIbWB2K','nJq2o2m','ifjLy28','zw1LBNq','y2HLCYa','ANbNwMK','zwfK','BML0igy','yxa6idG','AhHurLO','Ahq6idi','AwXnB3q','CxjSwgm','mte4mJq1mentzM5uza','Bg9Hzca','ChGPoYa','BNrLEhq','icnMzMy','zhfquxm','zevYEMq','DdOGnNa','y2fSBhm','Aw5WDxq','zc5VBIa','q0fovKe','z3jVDw4','yYGXmda','AhvTyIa','C2STyNq','ihWGC2G','nsK7igi','r29Kl2q','qvrOy0O','wgP4vgi','CZOGy2u','DhjVA2u','BNnWyxi','AMTkvhi','C2STC3C','nYWWlJC','mxWZFdi','yuTVDxi','ihSGzMW','CMrLCI0','Dw5PDhK','icnMzJy','B3vUDgu','rg5xueS','B25Lige','AYbVBI4','BgfZDeu','zsbTAxm','z2nsteO','Dg9WoIa','Eejdz0W','qNvUBNK','Ae9vu3i','Fdz8nhW','zgL2','ohG5mc0','ihn5C3q','C2v0','Bgv4oIa','CMfUC3a','AguGzgu','nxm0idi','AgfZ','zdOGBgK','B3zLCMy','igrLzMe','BgvUz3q','kc4YmIW','DhLqy3q','BhrzyvC','BLbSyxq','quDYEg8','yLjHDva','Bcb7igq','BsbJzw4','C3bSAxq','sw5PDgK','AfjNthO','Dg9Wrgu','DYGWida','DMCGEYa','n3W2FdC','BIb7igy','oWOGica','lxnPEMu','yxKGB24','lMLVig0','Bgz5wuS','CIdIGjqG','DgnOihq','yMLpBuu','AgXryMq','DhK6ic4','phnTywW','Bg9NBY0','Chvuqw4','yxjKlxq','shbxz0S','zw50CZO','DePntMu','AfnqAvm','idmYChG','A2DYB3u','s3PZwuG','Aw5Zzxq','Bhv0ztS','yw5ZzM8','z2HLuu8','idaGmca','sgLKzxm','EdSGz2e','ywWGBwu','yM90Aca','ELfxrw4','ywDLigq','BMX5kq','v0TOENq','icbIywm','yMXdr3u','yxrLvge','mdb2DZS','zg93BG','v2rhtLe','Dgv4Dei','Bw4TDgK','BhvTBJS','AxrPB24','C2v0ida','v2n0Avm','EtOGyMW','AxnPyMW','ida7igi','mc41o3q','iL0GEYa','BhmGysa','yNrUoMG','nYWWlJm','lc4WnIK','z2v0qxq','B3vUzdO','BYb7igq','Fdb8m3W','t3vxB1G','BgLKzxi','igjHBM4','ndHWEcK','sfnKBMO','tM8GuMu','rxHW','Dg5LC3m','rgvUrgK','yxbWzw4','zvbSyxK','nsWUmdm','ihbVAw4','EvbSDMC','zvbSDwC','ig5VigG','B3C6igK','D0vsu1G','EuPJv3i','uvHou0e','BguGC3q','ig9YigS','B24U','zxiGC2W','wxvHAg8','uxzitfq','oYbWywq','lxbHCMu','C3bLzwq','uur6qM4','zw5HyMW','ksaXmda','venUy3u','zgfTywC','AY12ywW','CMvZDg8','C3DPDgm','u2fMzsa','EevxDKi','BNrezwy','AxrLiee','AcbVBMu','zvn0EwW','Dg51qxa','DgL0Bgu','BwvZC2e','ldiXlc4','CI1Yywq','BsbVBIa','B2H2yvi','EdSGBwe','yw1Hz2u','mtrWEdS','4Ocuig5Via','BxvMDMW','B250zw4','nsaWlti','rgnju0O','EdSGyMe','sfnJD20','CM9Szq','z24TAxq','BuzVrge','ihSGAgu','ihLVDxi','oMHVC3q','CeLPrve','qLjYqwO','tu9LB3m','oYbIywm','u1PsC2W','wuvkAK4','zM9UDc0','AwrLCG','zsbJEd0','y2TNCM8','igrHBwe','ChG7ih0','Bw92zq','mcWUntu','s2v5vW','ihn0CM8','yMX1CG','CMzSB3C','BNrLCI0','AwDUyxq','D0jSDxi','B2XPBMu','vvDnsYa','zJmY','EuHRsuW','AufMte4','u3jvqKy','nYWWlJG','wvP2qvK','igXLzNq','y2LYy2W','B3qGBwe','BtOGmJq','B246ihi','zhjVCc0','CMLZAYa','Fdn8na','ig9Wywm','AsXZyw4','Awr0Aa','lxrPDgW','CMvHzey','re9nq28','y29PBa','rw5NAw4','sNDjtgW','BMqIihm','Awy7ih0','i2zMnMi','rLDHDLy','AfnOywq','ihWGz2e','igq9iK0','yw9AvfC','oYbMB24','yxa6ide','A2jSq08','wMHgs3a','yxbWBgK','Eca2ChG','zwCGzMe','BsbSzwy','BMqGt0G','EMnrufC','BgLJyxq','igvYCG','ocKPoYa','t1vsx18','m3WWFdq','ig1HEsa','vhDtBhi','D2fYBG','m3W4Fde','yxbRDuS','zw0TDwK','uw1bBvK','u2vNB2u','ChbLyxi','rKjgENC','igrPC3a','BxKGC2u','BgW+','CgfYzw4','C3bSyxK','quzRCgO','ntaLktS','BMnL','A2uTBgK','CK5ADKq','vNnzBMy','uNrXrKG','DxjDifu','EKrhz28','y2vZlG','qxbWBgK','DgvJDgK','lwXPBMu','DgLVBJO','ywz0zxi','AuzPAxe','tMrcEwG','n3WWFdi','CIbHzhy','B3i6icm','vwLyDM8','BhrLCJO','ywXSig8','v2vItw8','DMvYBge','EYbKAxm','ihSGzgK','yKHOsey','mtfWEca','lIbuDxi','ignLBNq','rwjKs0y','AwrHDgu','wxfhyK8','ENHrz3a','jsK7ic0','BM8Gy2G','y3rPB24','zdOGi2y','vw5PDhK','u2L6zq','BI1SB2C','lM1Ulxq','zLnguw8','nxWXFdm','rvHqxq','CMDIysG','CgfKzgK','EdSGAgu','zMXLEdS','zKf1CNq','idqTnc4','iNjVDw4','z25VDfy','zwLUC3q','zwDmwwO','C2fMzu0','B3bLCNq','BwLUkdq','A0nmAwC','y0DVz1G','y2TLzd0','CvHHAhO','ldiZocW','tM8Gzw4','C2v0sxq','BgfIzwW','t3zLCNC','wfzjy2O','qNHjr0m','zhbY','BwuG','igH1CNq','Aw50zxi','CMrLCJO','Ag9VA04','u2fRDxi','z3L3sfq','CM9Rzxm','Aw9FmZa','z2v0','B3nLihS','yxa6ihi','zvKOmtG','BMvJyxa','zw4GDg8','BMDxAxq','ufD5v08','mtySmc4','n3W0Fde','EMDTuhu','ywnRz3i','oIaYmNa','ALnit1i','u3rHDhu','DNnfDuS','CwDgufm','wxLure0','zxi6oI0','lc40ktS','yNv0Dg8','y2HLy2S','DK1KDfO','Dc1ZAxO','ktSGBwe','DvPIu0C','zgTPDa','sNnOtvu','y29SB3i','uK1c','zwz0ic4','B2rLu3q','BdOGAw4','CM9Wlwy','DhLSzq','EffUAeu','CgHmAeS','weDMswS','lcbZyw4','idaGnha','lJjZoYa','idfWEca','CY1Zzxi','BMvHCI0','zMLSBd0','zguSihq','Bw4TBg8','zvr6weO','BgLUzw4','q1btihi','B0Hrv3u','m3WWFdi','mtSGyMe','zMLSzw4','AfTHCMK','zxjZy3i','DgvY','vxH0t1i','ywrK','Aw5NicS','veroA1G','oIaWoYa','y3jLyxq','ndSGFqO','C3rLBMu','lwHLAwC','EYbIywm','lMP1Bxa','Cg9ZAxq','u2nHBgu','ldi1nsW','lc4WnsK','DMfS','C3rHCNq','EYaTD2u','kdi0nIW','B25PBNa','BIbZAwC','C2fMzq','odaSmtK','yxnLBgK','y2XLyxi','CNjVCG','C2HHzg8','mhW0Fde','lZ48l3m','CMXHEsa','twPAzgC','z29KrgK','vKPuzva','ltiUnsa','CIGTlxa','uMvMAwW','B3i6ihi','q29TyMe','AwvSzca','icaGlM0','q291BNq','ChG7igG','mtiGmJe','ywrPDxm','yxvSDa','DcbZDge','BgfJzs0','CMvJDa','y0vKrxm','C2STAgK','ChGGmdS','yY0XlJu','wu9Nsvu','ExL2yw8','zxjjthO','CMfKAxu','D29YAYa','zw50','qu1szu4','Bw4TAa','zciVpJW','oIbHyNm','A1zgz00','ie92zxi','oNbVAw4','ndySmJm','lwv2zw4','lwL0zw0','zw50tgK','yMfJA2q','nIa2Bde','ide2ChG','CI52mq','A2v5C3q','BMvS','mtjWEca','y3qGB24','B2HRCfK','Awq7iha','ig5VBMu','kYbmtui','BM9UztS','B3nPDgK','u2v0r2e','y2XHC3m','CgXPy2e','Aw9UoMy','EePvt2G','igzVDxi','B2rL','rNjHBwu','B1jLy28','C3r5Bgu','q3jVC3m','Ce11BKy','Bw4TC2K','zxrhyw0','BxnHEw8','icaGig8','ic8GDMe','BfDtvLy','s2LSBgu','DgvYo3C','D2vIA2K','EdSGB3u','iKLUDgu','wKDpBwO','zuvSzw0','Bg9JAW','zMLSBcW','ELvdz0O','CYbLyxm','nwmWidm','mhb4oYa','CM9ZC2G','lwHVCa','BM90zs4','sw5ZDge','yNjPz2G','rMrdEwy','ignHy2G','Acb7iha','DdOGoha','tgLZDa','jsbUBY0','DMLLD0i','wg9OzKG','CMjyB0e','DxjDigG','ltiUns0','BtOGnNa','BhrOige','nhWYFdm','tuLtu0K','Dw5KoIa','yw5LBca','vgHruNK','odbWEcW','zMLLBgq','BgvZiem','Ag9Szsa','C3rYB24','B2TLpsi','Bgf5oIa','A2L0lxm','CIb2ywW','ihjLBg8','Ag9ZDg4','Bg93zxi','whnztfa','ide7ig0','zcb7igi','CMjquMi','CNretgS','mxb4ihi','swvqA1i','B3C6ida','zxmGEYa','zuv4Ca','A3ndChm','iJeYiIa','zvbPEgu','ywXPz24','yxb0Dxi','y2fWu2G','zxzLBIa','mtC3ntq5nwPmEgjkwa','mJzWDeTSy1K','CJSGzM8','D2L0Ag8','ienquW','u3rUCNC','Fdv8mte','A291CI0','mJu1lc4','icaUC2S','C2vSzwe','Axb0kq','tKHmC0K','ocWYndi','AwXSihK','ihrOzsa','mJu1ldi','ihbHzgq','zePSuvi','zxmGB24','CMfPC2u','ihSGywW','oYb9cIa','zw50zxi','vwXKrLy','CMLNAhq','BMC6ida','Bw91C2u','qMH6Age','oIbPBMG','B25JBgK','ndSGBwe','ywjSzs0','zxi6igi','AwXS','mNb4o3i','s0zkqKq','Bwf4','EtOGmdS','v1LIA2e','B290zxi','zYbJyw4','ndGZnJq','tLrsvhy','BwvZr0m','nhW2','mJiSocW','oIaJzJy','CI51As4','y29Kzq','z2LMEq','EKv6Ew8','wgHOyui','s2v5qq','oxWXnNW','Bw4TDg8','B3G9iJa','AxnWBge','AgvPz2G','Bw92zw0','zenOAwW','tM8Gu3a','idrWEdS','zJDHotm','B2X1Bw4','ignVBg8','oIa4ChG','AKPsCwe','CKDHtKu','yxmGBM8','sw5Zzxi','A2PMthK','ieaG','Aw9F','B3vUzdS','yxnZAwC','BMu7ige','DNvSDxq','BM9szwm','x19tquS','tg5Jquq','zsWGDhi','igzVCIa','zwn0Aw8','ywLSzwq','AuHrBg8','DMn0D1K','sw9frNy','zwfWB24','qLPHtxK','ifTfwfa','BMLUzW','B2f0Eq','ugf0Aa','yKL1z0C','C3rVCfa','zNrLCIa','yM9Yzgu','wejqyu8','reDPwfO','mcWWlJG','D2vPz2G','ChG7igy','rMLLBgq','C3rYAw4','idi0iJ4','w3nHA3u','oYbJB2W','Aw1Llca','zg93oIa','Ag9VA1a','Dg87ih0','B3nL','mZuSmJq','BMuUqxa','DdSGFqO','C2v0x3q','zMLSBfm','rwXLBwu','qwrIBg8','vvDnsW','idmWChG','z29K','i2zMzJS','BMCGzM8','wMvYB2u','sgvHBhq','C2HPzNq','sfzHvfa','lNnRlw0','idnWEdS','BgvMDa','zxH0','nJaWia','BI1TywK','oc00lJu','icaGica','i2zMzG','BMq6ihi','vMrpCKK','AY1Jyxi','nsWUmdC','B0DbvNC','mcbOB28','sfrnta','zLn4uvC','y2fWDhu','DeT1u2S','zxi7igC','tK1Ruee','C2f2zq','A2zqs3m','Aw4TD2K','lM1Ulxa','AwvZlG','mNWWFdu','zxnJ','yMTPDc0','BfjHDgK','zgrPBMC','y2L0EtO','DgHPCYa','CMvHza','BMv2zxi','u3rHDgu','zMyP','Dc1ZBgK','te1c','ug9ZAxq','DMC+','Dxm6idy','zxPPzxi','igvSC2u','Eujgsha','vxbcyxC','ig5LDMu','EMu6ide','BNrLCJS','Fde4FdG','CMeTA28','B3nWywm','rgLL','nhW1Fdy','lJa4ktS','y2SP','Ew52u00','B3uU','AtmY','s2v5C3q','ELLOAuC','tLHitgm','Aw9FnZi','ie1VDMu','DgvTCZO','igv4Axq','yMvNAw4','icaGlNm','ntuSmJu','DZOGAw4','wgrhwg0','CMvHzhK','Bg9Hzgu','lwjHBNi','vg90ywW','CNrPzgu','zgvZyW','DgG6ida','ztOGmtm','AePADwm','oYbIB3i','v01ligK','rM9Yy2u','idjWEdS','iJeUnsi','CxH1ruy','CgfJAxq','BwvUDca','sLvgr2K','B3rOAw4','nZu3mZKXmKTtsgrbrG','y2fWtw8','mhb4lca','DwXts3i','oIbMBgu','CeDZBLi','DgvTlxu','B0vnv3K','EejAv2S','sxnhCM8','AxvZoIa','oIbJzw4','Bezvzfe','Bg9HzgK','zhrOoIa','CIbNyw0','yxntC2C','qMXVy2S','A3mGyxi','Ag9VA3m','zg93kda','CJOGi2y','EfPbq0K','oIa1mcu','zg9JDw0','uMvZzxq','rwD3ENe','yLnKC2O','AgvHzgu','ig1VBwu','C0nszNy','D0nVBg8','DcbHihq','lsbHihm','yMLJlwi','B01Hwe8','C2STBwq','Aw5Uzxi','ic5ZAY0','oYbMAwW','y3K9iJe','oIa2nta','iNrYDwu','DgHVzca','DdOXmda','ihDOAwm','CIiSici','igHVB2S','B29RCYa','zw50rwW','yxK6igC','B2reAwu','oIbIBhu','EuHqCKO','zK1ZtLe','oJiXndC','s2v5uW','ys1JAgu','ugTpthu','Bejqz0y','zxiTzxy','mcWWlJu','AguGzNi','oYb0CMe','zwXK','sMz2ANi','ihnOB3q','DMfSDwu','z3jHDMK','B246ig8','lxK6ige','Cg9W','Aw5KzxG','zMXLEdO','CLHXtwm','ywqGDg8','vvjbx0S','y2uGB3y','vK13AhO','zw15igm','zNPkvfG','zLrgtu4','C2STC2W','DtmY','zxi6ida','ic40oYa','tgr0D2m','uJOG','AgfPCG','zZOGnNa','uNvUDgK','igvMzMu','C09guuu','DKTKqKi','B2XVCJS','v1z0DMO','B2LZwwG','zwXMoIa','lJuGms4','CMLKoYa','y2vUDgu','iL06oMe','nZTWB2K','swXWCK4','yxjLBNq','zJzIowq','Fdf8nxW','A3nty2e','mxb4ida','igjVCMq','AxrPyxq','A2v5zg8','lxnLCMK','Bgf5ig8','zwjRAxq','uxPKDe8','yw5Jzs4','u2HHCNa','B2LUDgu','DgvYoIa','C3rPBgW','CdOGmta','t0HLywW','C2STy3q','CMqTDgK','nNb4oYa','y29SCZO','s3vADLK','idHWEdS','shbgDMO','z2fTzuW','BMq6ihq','Bw1VifS','yM91BMq','wLvcEfy','DgvYigm','zZOGmNa','Bg9YihS','v3jHCha','oYbQDxm','wMzVBhO','ihbSywm','z2jHkdi','rMXXB1K','v1PyDeK','EKf0vfO','AguGDxm','mJq5odG3mNnkue1ztq','vKHztgC','DxjH','BejZuNu','C2v0vhi','Dgv4Dee','ihSGzM8','BgjJAKS','BNnSyxq','yMHVCa','ideWChG','vgfRzxm','uMf0zq','yw1L','DMrtDvO','ig1HCMC','suHMANq','oIb0CMe','zgvSzxq','DdOGnZa','yxjJ','C09JDgG','zs1PDgu','Ec1KAxi','DxjZB3i','C2STzMK','Bw4Ty28','Bw4Ty2W','v2LKDgG','yJPOB3y','ihDPzhq','u3bLzwq','z2H0oIa','Cc1ZAge','y0DuvuS','y2n1CMe','Ag9VA0C','oYbMBgu','twLcDwi','yxjHBMm','CMvSB2e','CYbZChi','C2STy28','lxnPEMK','Bg9N','CM9WywC','BNrLBNq','B250lxm','A2uTD2K','u2vSzwm','qM90Dg8','rKTXtwe','Bgv4oYa','zw1ZoIa','mcWWlJC','mtu3lc4','lwjVEdS','zgL1CZO','teD1uwK','igTVDxi','ywnPDhK','lxrVCca','C1b6q0W','yK54BxO','nxW2','zvjHDgu','oYbHBgK','DNCGlsa','mJuPoYa','rgfTywC','y3jVC3m','zNrxyKy','ywqGEYa','ide0ChG','ywn0A0S','y2vSzxi','DgvZDa','oI13zwi','y3jLzw4','lca1mcu','mJqWiey','DdOGmJG','iduWjtS','BcbKCMe','q29SB3i','BgXIyxi','A291CNm','Ew5vu2i','zw51','ihDLyxa','ifvjiIW','B3zLCMW','lK92zxi','u0fgrsa','C2HVB3q','BgLUzwm','EYbIB3G','CLb0CNq','mtu4ndztzgzzsvK','zsXTB24','rgHnAMu','AgvSza','B25SEsW','oIbUB24','Fdz8mta','Bw92zvq','qxbWBhK','uNPnB0i','CYbnB3y','ihrYyw4','lKXVy2e','Bxm6igm','y2LxzhG','ihrVCdO','zez5wfa','AwDUlxm','ysblB3u','igjHy2S','AwvSza','B3n0zMK','AMHNAhO','msWUmZy','wvfgA1m','B2LS'];_0xa550=function(){return _0x48f681;};return _0xa550();}
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
