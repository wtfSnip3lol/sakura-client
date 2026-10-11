// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.10.1
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
function _0x2188(){var _0x4a6876=['Dg9WoJe','DdOGnNa','sgLNuMe','BgvZiem','y2vdAgK','zgvSzxq','DMvTzw4','ChG7ihC','AhLKEKy','ihSGzM8','ndHWEcK','mNWZFde','C3rLBMu','CM9Rzxm','BgLUzwm','yxa6idG','CI52mq','vMPyEfe','EtOGmdS','rwnAA2S','x19tquS','zM9XEg0','BNrezwy','DdOGoha','BM9tChi','AY1Jyxi','yxjLBNq','CML0zxm','quXvtM0','ltjWEdS','Bw92zw0','DhjHBNm','A2v5Dxa','C2XPy2u','zMLUza','zxiTzxy','oIaWide','C3bHBG','nJaWia','ys1JAgu','nsaWlti','psiJzMy','Bw4TC2K','AwvZlG','Aw50zxi','lJa4ktS','s2LSBgu','BNrLCJS','DgG6ida','vvn5t2K','tMTiDNa','ChG7igG','AvrJCK8','A1r0vhy','sNvTCca','mJu1ldi','kdi1nsW','ANvTCfa','B3G9iJa','AxnPyMW','iduWjtS','zw50rwW','y2f0','CxvLCNK','Bwf0y2G','t3DYy0i','BMqIihm','BgW+','mIaXmK0','tw9Xqui','oYb3Awq','rMfYzge','ig1VBwu','lxnHBNm','sgvPz2G','idnWEdS','DMPZBMW','FqOGica','CMeTA28','kYbmtui','t012r1y','ignVBg8','B24UvgK','BLL5zu0','ldiXlc4','B3zLCMW','CwrTD1e','C2STzMK','lMP1Bxa','zhrOoJe','BwLUkdq','ig5VBMu','mtiGmJe','oIa0ChG','vuzyrwO','z2jHkdi','lwzPBhq','FdiZFdi','z2v0qxq','BNHYDfO','C2HVD24','icaGlM0','lxnSAwq','lxnOywq','oxvev0LKra','igzSzxG','oJa7EI0','BMnL','EYbIB3G','ywrKrxy','zxDXzw4','AwWGC3a','mhb4lca','mNb4ksa','zxrL','DgLKzs4','DMvYBge','rKfKDwm','yMeOmJu','nxm0idi','y2XLyxi','AwnRihm','DMCGEYa','B25LigK','rvPss1y','icaUC2S','ihn5C3q','txf3y0W','C2STBwi','rMjrB1O','zfbJsgW','zYbJyw4','yxK6igy','t0HLywW','B2nRoYa','zguSihq','zxzLBNq','Aw5KzxG','ywqGD2G','iNjVDw4','B1fyuwO','EvvZzKq','nefSqwrZDW','Bgf0zwq','C2fMzu0','ihbVC2K','C2v0sxq','AgvHzgu','zhjZENu','BNqGAge','B2rLu3q','idmYChG','A2v5zg8','nsK7iha','BhjluMC','odiPoYa','ywn0Axy','CM9Rzs0','lwL0zw0','BgXIyxi','D2fPDgK','nZaWia','uxfRqxO','Eefouvy','AguGzNi','zgfTywC','CYbpsgu','uKzAqxm','r1jOugi','DgHYB3C','Dvj5qLa','BML0igy','tMPfzxa','svb0DMS','CgnNwxq','iezquW','mJSGC3q','rfvbALK','C0TpC0O','Bw4TAa','mdSGBwK','vM5XwuS','C2STC2W','D2vPz2G','CMvSB2e','B25TB3u','oYbOzwK','z2H0oIa','y3jVBgW','igjVEc0','lNnRlwm','ihWGrvi','mtb8mtG','zMLSBa','mcaWida','CNr1Cca','oIaJzJy','AguGzgu','idqTnc4','zgvYlxq','l3jHCgK','zxH0','zMLLBgq','u2v0r2e','icmYmJe','yKjMrhi','BMvJyxa','D0nVBg8','DhLqy3q','CYaNzNu','BwvKicG','idK5osa','Aw1Llca','BM8Gy2G','ifvxtuS','BwLZyW','q2zntg8','oIaYmNa','tg9JywW','CMLZAYa','BI5MAxi','yJLKoYa','zw50','Fdr8mtC','q0fovKe','y29TCgW','ywrKAw4','EdSGFqO','lsbVDMu','D2vIA2K','igfWCgW','rvjtEeu','C2STBM8','icnMzMy','iokaLcb0zq','oYbMAwW','uMfWAwq','AxmGyNu','mhb4oYa','ihWGBw8','BYbWAwC','v3jHCha','y3rKExi','DxmGywm','zMy2yJK','s2fcwNa','mdi1ktS','B25SEsW','nIaXoci','tKCG4Ocuia','DhvYyxq','iKLUDgu','iL0GEYa','EtOGzMW','B1jLy28','igjHBIa','B2rL','B2f0Eq','CgfNzsa','BgfZDeu','yxbWBgK','v1LtCge','t0HrCM8','As1TB24','vw5PDhK','CgfYzw4','Bw92zq','AwDUyxq','zxjZ','DhLWzq','ignHy2G','Ce1buwK','ywXSig8','DhjPA2u','mxb4ihi','EMnQBfO','zxmGB24','ExrJqwq','nwmWidm','DZOGAw4','rLzLwfq','C2fRDxi','ih0kica','twLZyW','mxWXnNW','igHVB2S','B29Rihi','r29LrLq','iJeYiIa','zxjYihS','ywXPz24','C3rVCfa','zxjZihq','wKnJzhu','vg9Wzve','DcbZDge','DMu7ihC','lMXHC3q','nxmGy3u','lM1Ulxa','zvjHDgu','Ad0ImIi','ysGYntu','owqIihm','ocK7ih0','s1LstfC','zcbJAg8','AgvPz2G','oYb0CMe','yw5LBca','igq9iK0','yxa6ihi','s0HtzxG','u3rHDhu','ChG7igi','B2reAwu','zvn0EwW','rgDsrhi','Dw5RBM8','tgLZDa','yxa6ide','ltqTnY4','lxnPEMu','y2fSBa','ihWGC2G','qwrIBg8','q291BNq','DhrPBMC','yNjPz2G','D29YAYa','z29KrgK','BNHgy1G','AfTHCMK','t0nUwNC','zgvZyW','y05rt3u','Ag9VA0C','tM8Gu3a','mc41','tufgtKK','lJuGms4','BNrLCI0','AKzqtKi','zxrhyw0','lMrSBa','BsbSzwy','shvSqwi','oIbYAwC','B1njAhq','zsXTB24','ohb4oYa','zw0TDwK','C2v0','z2LMEq','y2HjEfe','y2fWtw8','Dg5LC3m','B2r5','tw92zw0','vxfos2W','CwvPy3i','DdSGFqO','qwTXyKK','oxW4FdC','zeDwqwu','C2HVB3q','wfjtCwm','zgrzs2G','y3K9iJe','DdOYnNa','y2HLy2S','ntuSmJu','oIbJDxi','zxi6igi','nhb4oYa','ndSGBwe','y21Tzg4','oYbTAw4','AKPAC24','BgLKzxi','v2LKDgG','C3DPDgm','C2L6ztO','igDHDgu','B3L4uvG','ywn0A0S','nxb4oYa','C3bLzwq','Ag9VA1a','lNnRlxm','z0zMyMW','zuv4Ca','CNq7igC','DgL0Bgu','lJjZoYa','mJqWiey','CYbZChi','CMuGkfm','y3jLyxq','v0fKu2i','B246igW','oYbHBgK','s2v5C3q','B3b0Aw8','CM9WywC','ihSGAgu','mcWWlJu','vND4Evm','mJu1lde','DhPRuLK','DYGWida','EK9pBNK','yMX1CG','zxrLy3q','lwnVBhm','lIbvC2u','C3PKv2u','mty0ody3mK5VBeHwDW','s0PgvwG','tvPlv3i','CMvHzey','y1Hpzfy','yMfYlxq','whHyq3a','sgT3vu0','ihnOB3q','ig9U','nsWUmdu','Bg9YihS','ltiUns0','rvHqxq','oIbPBMG','zw50tgK','yM9Yzgu','C0Dru1K','shzTyLG','DgvTCgW','CM9Szq','ihbVAw4','idHWEdS','zMLSBfq','zsbJEd0','zwfWB24','rM9Yy2u','DhjPyNu','AwXKigG','z2PXz3G','BNnSyxq','Ag9VA3m','BIb0Agu','CMzSB3C','zZOGmNa','y2XHC3m','yMfJA2C','zvzHBhu','y3KGB24','Ag9VA04','DxjZB3i','ywqGDg8','CYbLyxm','rw1UCgS','wxjIwum','nxW1Fde','B3uU','idaGmca','zs1PDgu','u0fgrsa','CMDIysG','nsK7ih0','yKjLwva','ktSkica','zhrOoIa','tgvNAw8','CMvHzhK','BMLUzW','igrLzMe','sgLKzxm','z2v0','ign1CNm','C3rYB2S','mxb4oYa','lJv6iIa','DhKGmc4','Aw46ida','zw50kcm','Bg9Y','zMXLEdS','uMvZzxq','BLbrD1G','igjHBM4','Aw9FnZi','Aw5JBhu','icaG','ihSGD2K','EdSGyMe','CJOGi2y','CNnVCJO','mtGGnIa','Dg9W','y0fOq00','CI1Yywq','Dg9WoIa','Cxveu04','EMu6ide','yvnWBhq','lNnRlw0','z3jPzdS','Bw4Ty28','zg93oIa','4Ocuig92zq','Dgv4Dem','B3rZlG','ifvjiIW','t1DYse0','B3zLCIa','rvzqtgO','ktSGBwe','nNb4oYa','yxvSDa','EfjpDhC','EMfJyuK','sfrnta','zw1LBNq','igf1Dg8','z29KicG','AxrPB24','Cc1ZAge','t0H6rwy','werbB3m','lxnLCMK','zg93BG','igvMzMu','Bw4TAca','BvHcAhu','zcbNCMu','CMqTAgu','u3fhBuy','rurWCvy','v01ligK','ihDPzhq','AwXnB3q','sw5Zzxi','yw5Jzs4','DgXPBMu','C3rHCNq','s3HWyNK','yLrfrey','s2z5q2i','AwXLzdO','CZO6lxC','sw5PDgK','icaGig8','A2vZig8','zg9JDw0','oIa2mda','u2nHBgu','B250zw4','Fdb8mNW','zwqGyw0','BhvLCY4','vgTmr28','yujtwKK','BhrO','zvKOmtG','CIdIGjqG','BMqGBwe','zuvSzw0','icnMzJy','BMC6igi','AwDODdO','ldi1nsW','y2HPBgq','ugn0','zgLZCgW','tfrezgC','oIbYz2i','j3qGC3q','oIbHyNm','EeDIwgC','BNbTwNO','B24U','phbHDgG','CMfUC3a','ELjqEwu','BM9szwm','vg90ywW','zwfKEs4','mJf8mte','ChGGmdS','nsWUmdm','BMq6ihi','tKr6BgS','B2STCMu','CfrWCwG','tfzgDvO','lcbZyw4','B3bHy2K','odaSmtK','ihrYyw4','ugf0Aa','ihSGywW','nYWWlJG','kc4YmIW','D2L0Aca','C2v0x3q','ELzNvxa','lwHLAwC','ywz0zxi','DgHVzca','igLMig0','CMTxBKK','zhbY','mcbOB28','icaGyMe','ldeWnYW','iezPCMu','BMvHCI0','igzPBgW','msWUmZy','B3n0zMK','r25esue','zw5HyMW','Fdv8mNW','Aw5Mqw0','mJqYlc4','zKPNzha','tLnZqu0','zg93kda','tM8Gzw4','Dw5Kzwq','BNnPDgK','q3jVC3m','wNPgyxa','CgfKzgK','Ce96z3O','oYbWB2K','BNn0ywW','AwX5oIa','CM9ZC2G','AxvZoIa','vMfSDwu','yu9rre8','qu15Exe','lwLVxYO','DxvYrgq','BhKGkhi','oNbVAw4','igfUzca','rNjHBwu','ldiZocW','ys5RB3u','C3rYAw4','oxWYmhW','BdOGBM8','uMH2AKK','ChLAwui','AxrPywW','yu5uqxq','C2vSzwm','ihn0AwW','vuDguw4','Bcb7igq','vKjzvNq','rMjXuuC','ifjLy28','BwLKzgW','EdSGyM8','ELLet0O','yxrLvge','yxjJ','ywWGBwu','zwfKige','vvDnsW','mhGYnta','icaGic4','ChG7cIa','x19ZywS','EMD4ugm','EKHNt3e','Fdb8nNW','ihSGlxC','yxrPB24','Ec1OzwK','yxrLkde','oc00lJu','zxj5idi','DhjHy2S','s2v5ra','ideYChG','ChvZAa','yxr0ywm','id0GzMW','mJqSmtC','lM1Ulxm','mcWUntu','Bgf5oIa','zdOGBgK','DMLZAwi','EYbSzwy','CNrPzgu','mhWXFdC','igzVBNq','DM1OEMW','idjWEdS','CMvU','Cg9ZAxq','DxqGDgG','DMLLD0i','Awr0AdO','B2XVCJS','ihbSywm','C2vSzwe','uMTJsMq','yNv0Dg8','idrWEca','AsXZyw4','ywrPDxm','u3rHDgu','DgXL','Auv1sKq','tw92zq','odu3otvcwMjOEu0','B3C6ida','Aw9kA3u','CMzIuKO','q3vZDg8','lwrPCMu','BI13Awq','oIa4ChG','y2vUDgu','CMvHza','yM90Dg8','zMyP','BLLfrKe','icaUBw4','CMvMAxG','zZOGmta','BMX5kq','BgLUzvq','qM90Dg8','mdSGFqO','mwzYksK','wfrjv1m','nJTWB2K','otG0mtmYyKTbq0TI','mNm7Cg8','zxG6ide','BsbYAwC','z2fTzuW','EenZywy','y2fWDhu','D0jSDxi','uwzWz3O','EYbWB3m','igHLAwC','z2DSzwq','Bwf4','mJm4ldi','AwXSihK','CdOGmti','A2rYB3a','BhrOige','zwLNAhq','t0zgigi','Aw4TD2K','ie9olG','tvDSwwK','C2v0ida','wK5uD3C','Ahq6ida','EYbMB24','zw50CZO','zwvMmJS','Bg9Hzgu','BgvUz3q','zJmY','rvHcCgy','ztSGyM8','ywnRz3i','t1vsx18','mxWZFda','wgzNAwm','u0zUzwC','AMDwENG','zwn0oIa','z29K','z3jHzgK','y3jLzw4','ywrK','yKr2yMW','tg9Hzgu','wvrbqwK','ihrOAxm','vgLJAW','ExP3rLy','zxj2zxi','mcuUifm','uNngqxm','CY1Zzxi','suPxEhG','C3vNwfi','Bgv4oYa','oIa1mcu','DgnOoJO','DgG6idu','zNrLCIa','zwv6zsa','A291CI0','BNrLEhq','vNrkwey','DNDoDgm','wKPXDKi','ENboyxa','DgL2zsa','uMvJDa','Bgv4oIa','zxjYB3i','z2v0sxq','zwn0Aw8','u2fMzsa','psjYB3u','Du9yDLi','lxnJCM8','idi2ChG','lwXPBMu','oIbJzw4','oIaXms4','CMvUDem','CgXPy2e','lxK6ige','yxjPys0','kdeWmhy','ig1PBIG','yxrLlwm','tgvMDca','ihSGzgK','rMfhA20','zc5VBIa','vw9Ur1G','i2zMyJm','yw5Uywi','CM9UzYa','DLLpD0q','mtjWEca','lwfWCgu','ihWGz2e','oYbVDMu','A2uTD2K','oJiXndC','y2vZlG','lMLVig0','sg9VAYa','ienquW','DMC+','zgL2','tMfTzq','se9PtLy','zxjZy3i','zNbZ','pc9ZBwe','lxbHCMu','BwvUDca','A1jwrLG','mJzWEdS','ntuSlJa','igDHCdO','mciGCJ0','vKzOuxK','rgfTywC','tM11Awe','ChGGDwK','nYWWlJm','ihnVig4','CMrLCI0','CJOGCg8','ic40oYa','yxKGB24','ywjSzs0','ihSGy28','BgLNBG','Aw9F','ndySmJm','igrHBwe','lc4WnIK','BgfIzwW','Awq7iha','DgvYoYa','uIb2ms4','ldePoWO','zxi6ida','AxrLiee','BwfUywG','v1zMEfq','Awr0Aa','wuXntva','yxbWzw4','B3vUzdO','zJzIowq','iIbZDhi','ktSGFqO','B24Gzxy','BNrLBNq','Bw4TDg8','Fdr8mxW','igjVCMq','icaGkIa','lxDPzhq','q29TyMe','CM0GlJq','EKHwt0C','B3vUDc4','Axb0kq','zgvYoIa','u1LVrwq','zwf0CYa','t3ztwKK','CYb3B24','u2vNB2u','ywLYlG','ChjLDMu','qNLjza','ig9Wywm','Awy7ih0','B2fKzwq','q0DYAuG','uMnmve0','AxHLzdS','ndiSlJG','vKjlwxu','qu5MrKS','CZOGy2u','BhmGysa','uvrTCLq','CenjrMS','DMLHifm','B3i6iha','CMfWAwq','ihjLBg8','qsblt1u','uK1c','idaGmJq','zvbSCwm','Aw5Uzxi','CNjVCG','DgvY','yM91BMq','y1njvMG','DMLZDwe','DerpAg4','BM90zs4','ihSGzMW','nMi5zci','mgy1oYa','Aw9UoMy','ieTLzxa','v05uBxi','yxnLBgK','DMvYlxy','ChG7igy','uMvMAwW','vvDnsYa','kdi0nIW','CMqTDgK','ieDLDfy','CIGYmNa','AwrHDgu','u2TPChm','jYb0Agu','Aw5Zzxq','nJC0nZu0ze5rv1PP','Aw5NoIa','AwrLCG','ihbHzgq','BMC6idq','BLbRr1i','mJu5mtqWmfziuhfesW','y05oB0y','Axr5oIa','DdOGmJG','zw1ZoIa','CMLNAhq','ihjNyMe','idi0iJ4','y3qGB24','BMu7ige','yxjKlxq','Bw91C2u','zMLSBd0','n3WYFda','BwLU','ChbLyxi','Bw1VifS','BI1JBg8','z24Ty28','C3bSAxq','ihDLyxa','lKXVy2e','A2v5C3q','oIaWoYa','nJqXotfNruTHC0e','lxj1BM4','BY1ZDMC','Dc1Iywm','y2TLzd0','sKXLy1e','A3nty2e','AwvSza','B3nL','i2zMzG','BcbKCMe','A2DYB3u','AxDjrMS','zvj1BM4','CYbHBgW','yMTPDc0','Bxm6igm','yM90Aca','B290zxi','ENfXrxy','B25Lige','tM8GuMu','re9nq28','yxj0lG','lxrPDgW','zwXHDgK','ic5ZAY0','ksaXmda','BwuG','DxjDigG','lcbPBNm','DxjDig0','phnTywW','AxmGAg8','lwv2zw4','rxHW','BIb7igy','ihjLy28','mtfWEca','ufmGDw4','y2HLCYa','lc40ktS','oIbJB2W','y29PBa','kYbtCge','ndGZnJq','B3rOAw4','Bg9JAW','DMfS','zgrPBMC','Bw9fEha','B24Oks4','Ahq6idi','ieaG','zNvSBhm','yw1L','y2fUDMe','Bg9NBY0','tKCGlsa','EdTVCge','zuztD1y','Ew1tCvm','B3vUDgu','q1vzzM4','C2HPzNq','BxKGC2u','idqGnc4','zwCGzMe','lNnRlwy','lM1Ulxq','Dg87zMK','yMvNAw4','EYbIywm','CJOGDgG','AM9PBJ0','ywX0Ac4','svzPBxC','EYbMAwW','BLj6zMO','v0fttsa','sxnhCM8','AhvTyIa','AwDUlxm','zxnJ','A0Xgruq','Ag9VA0m','AwXS','CIbHzhy','zw50oYa','AxrJAa','CMXHEsa','mc41o3q','B3zLCMy','y2HdB2W','ignLBNq','DgvTlxu','oYbIB3G','igrPC3a','Bg9HzgK','CvfIr0G','DgLMEs0','zw50zxi','C3zNiJ4','igfIC28','CIb2ywW','reDerwS','muj1r2T0ta','lwHVCa','zMLSBfm','D1LUwuy','uK11Bvu','igvUDgK','oYbIB3i','mNWXoxW','tM5hAhG','zw50CW','AtmY','t2rOEwG','BwrLC2m','yMffEve','nIa2Bde','CJSGz2e','AxrLBxm','rxjus1O','ida7igm','s2fJqLe','yxrSEsa','BxrUwfC','AwrLihS','C2STBge','v3Hwuwi','vxzJAMO','DgGUsw4','A2uTBgK','B25PBNa','BhrLCJO','ig5VigG','Dw1UoYa','vKXyzxy','ChG7iha','EYbJB2W','Dw5PDhK','mhWYFdm','zMLSzw4','B25JBgK','B2XVCJO','lIbuDxi','zciVpJW','zMXLEc0','yu56veK','ihSGCge','nMvLzJi','iefmtca','zxjSyxK','z3jPzc0','DtmY','BfjHDgK','q29SB3i','Fdz8mNW','zwz0ic4','Ec1ZAge','zsWGDhi','Aw1Lihm','CgfYC2u','ns00idC','A3nqB3m','uJOG','ohb4ksK','y29Kzq','BMLhr1K','B2LSicG','ignVB2W','DdOGnZa','cIaGica','AefMEMy','oYbMB24','C2f2zq','wMvYB2u','mJiSocW','AwX0zxi','lc4YnsK','u0flvvi','CM91BMq','ELvArxi','zenOAwW','Dgv4Dee','mtbWEdS','zwfK','BwvZC2e','BM9UztS','CM9Wlwy','BgWGBwu','svHZy0G','tKTbDxC','yuTVDxi','AgPcsNu','BI1SB2C','lxrVCca','EcKGC2e','qxnZzw0','BNqGAxq','qMjOBMW','CZOGyxu','vuPTy08','BgvMDa','BM9Uzq','oYb1C2u','Aw4Sihq','AMPcAfG','C2HHzg8','AgvSza','z24TAxq','ywrIBg8','C2STyNq','DxnXAg4','Dhj1zq','sKffAva','uvLQsve','DMfSDwu','ChG7ih0','C21HBgW','DgvTCZO','BMDL','idiWmg0','zg93BIa','tgLVyMS','ide0ChG','BgnTruq','igzVDxi','zgTPDa','qvzwBM8','u0fgrq','BI1TywK','EfLlENO','mdCSmtu','EgLgqNi','q3fXt3e','zxiGEYa','CZPUB24','DgG6idG','ChbLBNm','qvvmDxy','CNnnueC','whD2wuC','zgvYlxi','lwjHBNi','oYbKAxm','icaGica','B3i6ihi','zgL1CZO','EgvZige','nNb4idK','mtrWEdS','zw5vDui','DhzireW','z3jHDMK','BI1PDgu','DhmGCgW','oIbWB2K','sLfpyvu','B3jZige','rLbtigm','DgLKzvC','Cfr1uuK','Ag9Szsa','zvrHA2u','nNW0Fde','yYGXmda','jsbUBY0','AguGDxm','wxnVyK0','AgfZ','y2n1CMe','zdOGi2y','EtOGyMW','BMCGzM8','yvDzAhG','Dg9Y','CMfKAxu','C2STy28','Ec1KAxi','CuHZC0O','sen0r24','iNrYDwu','qNHkquq','A291CNm','D2LKDgG','zsb2ywW','ys11Aq','BI1ZDwi','nsK7igi','lc4WnsK','vKDzqLy','ysblB3u','u2L6zq','A3mGyxi','DdOGnJa','lZ48l3m','icaGlNm','ALnwB2q','zw51ihi','lK92zxi','oYbQDxm','Dw5KoIa','CIbNyw0','zxiGC2W','DxDTAW','DhLSzq','zNbWvKi','AcaTidq','B3jKzxi','Dg9Nz2W','CuTlCeS','zM13vfm','igj1AwW','C2fMzq','zMXLEdO','oIbMBgu','yJPOB3y','zIbTyxq','y29TyMe','y29SB3i','A3ndChm','Bw4TDge','BM93','icbIB3G','BwjVzhK','zcb7igi','Dgv4Dei','AM1iEK4','BguGAwy','wNjezg0','DxjH','Bg9N','lxjHzgK','rgLZywi','B3vUzca','yM5sAxO','z2v0q28','AwvKigm','A2L0lxm','DgvYoIa','D2L0Ag8','zsbZzxi','igv4Axq','Bw4Ty2W','Eca2ChG','ANjeCeG','nJaWide','zunIBe8','zw4GDg8','y2LYy2W','wMfbzg8','qLDMv3q','Bw4TBwe','BgLJyxq','Bw92zvq','y2L0EtO','BerPzsW','yuHoDuG','zM9YBxm','Aw9UlLq','B2TLpsi','ms4XlJa','lcbJywW','wwzfsgS','ocKPoYa','yxvSDca','mJuPoYa','yMvS','oIaZmNa','w3nHA3u','zIXZExm','vK1bCwq','nNW0','mxb4ida','y25SBhm','ie1VDMu','y3jVC3m','C25cuvG','yM9KEq','t09uDhO','vNHmAvq','yxK6igC','CMvZDg8','CgXHEtO','tu9ersa','y2uGB3y','Dc1ZAxO','Dxm6idi','nti3mdC0mffqzwrOzG','mtaWid0','v25mA1a','BguGC3q','rgLL','AgfPCG','qNvUBNK','ihrVCdO','BNqTC2K','ocWYndi','BujvENm','u3bLzwq','y2vSzxi','D2fYBG','CMfUC2K','oYb9cIa','v2LWzsa','B29RCYa','y3fwExi','C0Xhrfi','C2v0qxq','s3jxq08','mtu3lc4','yxb0Dxi','DgG6idi','rgfUz2u','rMrwz1K','nsWYntu','sgvHBhq','C2STy3q','zxG6mJe','zxzLBIa','A0zUuw0','EdSGCge','z3LmvNi','oIaXoYa','nxW0','igXLyxy','t0nSuvC','CZOGCMu','zc10Axq','vM1uswi','qLvpzuO','mZuSmJq','CMfUz2u','zwXMoIa','CMXiD1i','Cg5PshK','yNDnB0i','C2STAgK','idfWEca','DhKGDMe','zsGXnta','vvjbx0S','B3nWywm','BvLqu2O','DgvZDa','mtySmc4','Aw5WDxq','BwvsDw4','DxrVoYa','i2zMzJS','CI51As4','DhjVA2u','Aw5NicS','nxWZFdq','ztOGmtC','C3r5Bgu','B2LS','CgfJAxq','EvDoEe0','DdOXmda','mNb4oYa','uMf0zq','tgjOANa','v2vItw8','BLbSyxq','zM9UDa','ideWChG','igjHy2S','y2HtAxO','ztOGmtm','EeXWDKC','zsbTAxm','oIa5oxa','Aw4GC2e','C1Luy0m','phn2zYa','BYb0Agu','tgngreW','oWOGica','C2v0uhi','yMHVCa','Aw9U'];_0x2188=function(){return _0x4a6876;};return _0x2188();}function _0x3607(_0x28fb,_0x42687){_0x28fb=_0x28fb-(-0x1037+-0x4*0x475+-0xbdf*-0x3);var _0x1f3001=_0x2188();var _0x4c2e1d=_0x1f3001[_0x28fb];if(_0x3607['LJzanO']===undefined){var _0x5b866c=function(_0x41471c){var _0x380785='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3f388a='',_0x3cffc8='';for(var _0x1639dc=-0x93f+-0x166a+0x5*0x655,_0x4ba32f,_0x260a6a,_0x1f8dfb=0x177e+0x194+-0x1912;_0x260a6a=_0x41471c['charAt'](_0x1f8dfb++);~_0x260a6a&&(_0x4ba32f=_0x1639dc%(-0x1*0x903+0x499*-0x5+0x2*0x1002)?_0x4ba32f*(0x209e+0x2017+-0x4075)+_0x260a6a:_0x260a6a,_0x1639dc++%(0x28b*0x3+-0x3*-0x4f3+-0xa*0x23f))?_0x3f388a+=String['fromCharCode'](0x226e+-0x3*-0xcf1+-0x4842*0x1&_0x4ba32f>>(-(-0x1e10+-0x4ae*-0x5+0x1*0x6ac)*_0x1639dc&0x1880+0x12b3+-0x2b2d)):-0x1760+0x1bc9+-0x469*0x1){_0x260a6a=_0x380785['indexOf'](_0x260a6a);}for(var _0x12edec=-0xd03+-0x1027+0x1d2a,_0x170129=_0x3f388a['length'];_0x12edec<_0x170129;_0x12edec++){_0x3cffc8+='%'+('00'+_0x3f388a['charCodeAt'](_0x12edec)['toString'](0x834+0x126e+0x1*-0x1a92))['slice'](-(0x2258+-0xd04+-0x1552));}return decodeURIComponent(_0x3cffc8);};_0x3607['Wxebfp']=_0x5b866c,_0x3607['ygbqmt']={},_0x3607['LJzanO']=!![];}var _0x2ec3d5=_0x1f3001[-0x804+0x918+0x1*-0x114],_0xbf88f5=_0x28fb+_0x2ec3d5,_0xda0a10=_0x3607['ygbqmt'][_0xbf88f5];return!_0xda0a10?(_0x4c2e1d=_0x3607['Wxebfp'](_0x4c2e1d),_0x3607['ygbqmt'][_0xbf88f5]=_0x4c2e1d):_0x4c2e1d=_0xda0a10,_0x4c2e1d;}(function(_0x38c709,_0x1b6717){var _0x599df1=_0x3607,_0x566646=_0x38c709();while(!![]){try{var _0x1d4a17=parseInt(_0x599df1(0x50f))/(-0xafe+0x7d2+0x1*0x32d)*(parseInt(_0x599df1(0x3a6))/(-0x8aa*-0x3+0x1958+-0x6*0x88e))+parseInt(_0x599df1(0x4a5))/(-0x5*-0x443+0x1*-0x65d+-0x1*0xeef)*(parseInt(_0x599df1(0x717))/(-0x2497+0x262b+-0x190))+-parseInt(_0x599df1(0x38f))/(-0x1ce7+0x888+0x1464)+-parseInt(_0x599df1(0x487))/(-0x191a+-0xca9+0x25c9)+-parseInt(_0x599df1(0x48d))/(0x709+0x103*-0x25+0x1e6d)+-parseInt(_0x599df1(0x25f))/(0x19e5+0x15ad*0x1+-0xa*0x4c1)+-parseInt(_0x599df1(0x6f1))/(-0x48c+0x14*0x3c+0x1b*-0x1)*(-parseInt(_0x599df1(0x62b))/(0x3*-0x220+-0x1*0x1f4c+0x25b6*0x1));if(_0x1d4a17===_0x1b6717)break;else _0x566646['push'](_0x566646['shift']());}catch(_0x4d83f6){_0x566646['push'](_0x566646['shift']());}}}(_0x2188,-0x5ca31+0x1ad46+0x3*0x312b2),((()=>{'use strict';var _0x483728=_0x3607,_0x10c15b={'ALUNm':_0x483728(0x1fc)+'wn','IVimw':function(_0x15a937,_0x14090a){return _0x15a937+_0x14090a;},'ERSxE':_0x483728(0x4da),'qQbGH':function(_0x23eadd,_0x21418f){return _0x23eadd(_0x21418f);},'YIAoN':function(_0xcb085d,_0x1ead81){return _0xcb085d>_0x1ead81;},'QTmrT':_0x483728(0x6d0),'SYoEd':function(_0x1ab022,_0x19c094,_0x30aefa){return _0x1ab022(_0x19c094,_0x30aefa);},'FbqQG':function(_0xf7ba50,_0x172ae6){return _0xf7ba50===_0x172ae6;},'uRzBj':_0x483728(0x6a7)+'ents','OOjne':function(_0x11524c,_0x46b016){return _0x11524c!==_0x46b016;},'VxLiT':function(_0xa2e851){return _0xa2e851();},'zCFxs':_0x483728(0x6ba),'NnGhx':function(_0x7d2b98,_0x2ebec6,_0x478c34,_0x1e4e38){return _0x7d2b98(_0x2ebec6,_0x478c34,_0x1e4e38);},'WYSpa':function(_0x3ee54d,_0x186c98){return _0x3ee54d!=_0x186c98;},'bDvbl':_0x483728(0x618)+_0x483728(0x6d7)+'ur]\x20h'+_0x483728(0x1dc)+_0x483728(0x4e8)+_0x483728(0x2e2),'AhrYT':_0x483728(0x45b),'JQOaU':function(_0xa0c338,_0x347863,_0x3ace18,_0x24fa6d,_0x17f4b4){return _0xa0c338(_0x347863,_0x3ace18,_0x24fa6d,_0x17f4b4);},'KacBQ':function(_0x4a1e7c,_0x5dc7ad){return _0x4a1e7c+_0x5dc7ad;},'VGYBV':function(_0x3c61c8,_0x89a653){return _0x3c61c8(_0x89a653);},'mYPSj':function(_0x2496b4,_0x2cfac1){return _0x2496b4(_0x2cfac1);},'rkWnI':_0x483728(0x251)+'n','VBYVt':function(_0x49ea26,_0xe74c6){return _0x49ea26/_0xe74c6;},'CrmLt':function(_0x26463b,_0x133194){return _0x26463b/_0x133194;},'FdVgY':function(_0x3eb033,_0x1df3d7){return _0x3eb033!==_0x1df3d7;},'coZwK':function(_0x2df77b,_0x1618b4){return _0x2df77b&&_0x1618b4;},'XDFbB':_0x483728(0x270),'cNNoF':function(_0x10eaf4,_0x618c2f,_0x496316,_0x112797,_0x439a8f){return _0x10eaf4(_0x618c2f,_0x496316,_0x112797,_0x439a8f);},'zHgOq':_0x483728(0x3c5),'MXkLw':function(_0x51d138,_0x4d5eb1,_0x259076,_0x285f64,_0x28cbf4){return _0x51d138(_0x4d5eb1,_0x259076,_0x285f64,_0x28cbf4);},'hjBJu':function(_0x47f987,_0xa5f15f){return _0x47f987!==_0xa5f15f;},'NDzlk':_0x483728(0x519),'jmcqK':_0x483728(0x3d5),'yzwFV':function(_0x3ada34,_0x245172,_0x361673,_0x27167b,_0x3bb744){return _0x3ada34(_0x245172,_0x361673,_0x27167b,_0x3bb744);},'sKOsJ':function(_0x1ec869,_0x577188,_0x959852,_0x509bab,_0x9f04b1){return _0x1ec869(_0x577188,_0x959852,_0x509bab,_0x9f04b1);},'wSolA':function(_0x4d5f31,_0x4f42f0){return _0x4d5f31+_0x4f42f0;},'VwxyS':function(_0x2f5959,_0x111e69){return _0x2f5959*_0x111e69;},'zgxPc':'px\x20ui'+'-sans'+_0x483728(0x2cf)+_0x483728(0x619)+_0x483728(0x504)+_0x483728(0x389)+_0x483728(0x3dc)+'if','ZPavW':_0x483728(0x4ae),'ePlqc':function(_0x16b543,_0xc1bca6){return _0x16b543/_0xc1bca6;},'YfEHk':function(_0x4c42a1,_0x5720ea){return _0x4c42a1===_0x5720ea;},'JLTNC':_0x483728(0x5d0),'fppVB':function(_0x5148eb,_0x2319a1){return _0x5148eb+_0x2319a1;},'CGriH':_0x483728(0x498),'zUZEr':_0x483728(0x6a9),'PuFGx':_0x483728(0x498)+_0x483728(0x2d0),'tQmsZ':function(_0x14cdb2,_0x1cd9b9){return _0x14cdb2-_0x1cd9b9;},'FbQoZ':_0x483728(0x520),'aSplt':_0x483728(0x265),'sLGDR':_0x483728(0x6b5)+_0x483728(0x725)+'e','ZrDdm':function(_0x53a982){return _0x53a982();},'oSIht':function(_0x426047,_0x4587b9){return _0x426047===_0x4587b9;},'Lbhjp':function(_0x46f327,_0x1c6414){return _0x46f327-_0x1c6414;},'IJWxx':function(_0x95e226,_0x22bcd5){return _0x95e226-_0x22bcd5;},'IXscH':function(_0x14b643,_0x38ecbe){return _0x14b643+_0x38ecbe;},'vVXgg':function(_0x4e5414,_0x39dafa){return _0x4e5414-_0x39dafa;},'OzmUo':function(_0x15d950,_0x1ef987){return _0x15d950+_0x1ef987;},'OCnZw':function(_0x4d6696,_0x408416){return _0x4d6696*_0x408416;},'VtJXF':function(_0x23f878,_0x2ff5a8){return _0x23f878+_0x2ff5a8;},'jjBhX':function(_0x549606,_0x316d07){return _0x549606>=_0x316d07;},'aOQDO':function(_0x1e82cf,_0x27038e){return _0x1e82cf-_0x27038e;},'ioJku':function(_0x5a80f2,_0x3dd70f){return _0x5a80f2===_0x3dd70f;},'AMyyq':'PTMGa','Uvcjj':_0x483728(0x3c6),'WxVQb':_0x483728(0x387)+'n','OwrcB':_0x483728(0x350)+'t','TZYpd':_0x483728(0x6e0)+'eld','zVgUp':_0x483728(0x6ae),'aHNuH':_0x483728(0x526)+_0x483728(0x616),'cNQOu':function(_0x563fae,_0x4eb3d0){return _0x563fae===_0x4eb3d0;},'QYjIQ':'small','RhvjI':function(_0x3c44ef,_0x12a371){return _0x3c44ef+_0x12a371;},'HigRa':function(_0x3ea87d,_0x1d2229){return _0x3ea87d!==_0x1d2229;},'zKDqN':function(_0x586f73,_0x52222c){return _0x586f73+_0x52222c;},'UGFQn':function(_0x15e21d,_0x367ac6){return _0x15e21d+_0x367ac6;},'cnlls':_0x483728(0x1db)+'s','ULsON':_0x483728(0x322)+_0x483728(0x5cc)+'med\x20('+_0x483728(0x1ce)+_0x483728(0x39a),'NSsAM':_0x483728(0x1ad)+_0x483728(0x68f)+'t\x20','SfLzv':'held','IPtvk':_0x483728(0x47e)+'MISSI'+_0x483728(0x1b7)+'overl'+_0x483728(0x42a)+_0x483728(0x343)+'einst'+'all\x20t'+_0x483728(0x5b2)+_0x483728(0x417)+_0x483728(0x44d),'qdmwQ':'calls'+'\x20Unit'+'yEngi'+'ne.Ap'+_0x483728(0x3fa)+'tion.'+'set_t'+'arget'+_0x483728(0x346)+_0x483728(0x674),'BxJAD':function(_0x1ce3c4,_0x25d430,_0x5f0d78){return _0x1ce3c4(_0x25d430,_0x5f0d78);},'iwIFk':'DrJaD','OvSZI':function(_0x511fc6,_0x278524){return _0x511fc6>_0x278524;},'tNeRZ':'BEzaa','IEfau':'comba'+'t','kpCMt':function(_0x150b8f,_0x218ae4,_0x4fbd57,_0x11077c,_0x29774c,_0x4baf09){return _0x150b8f(_0x218ae4,_0x4fbd57,_0x11077c,_0x29774c,_0x4baf09);},'jFPNB':'Block'+_0x483728(0x72f)+_0x483728(0x4f0)+_0x483728(0x2e4)+_0x483728(0x35a)+'keHea'+_0x483728(0x3b7)+'nd\x20OH'+'ealth'+_0x483728(0x4a2)+_0x483728(0x60b)+_0x483728(0x426)+_0x483728(0x4d3)+_0x483728(0x70c)+'\x20hurt'+'\x20or\x20k'+_0x483728(0x3b4)+_0x483728(0x28d),'Defmp':_0x483728(0x556)+_0x483728(0x24a)+_0x483728(0x35d)+_0x483728(0x2f3)+_0x483728(0x59f)+_0x483728(0x5b5)+_0x483728(0x285)+'\x20your'+_0x483728(0x4a1)+_0x483728(0x442)+_0x483728(0x36b)+'00ms.','GoeFT':_0x483728(0x2e9)+'s\x20Ove'+_0x483728(0x379)+'Weapo'+_0x483728(0x19a)+_0x483728(0x1ea)+'\x20to\x201'+_0x483728(0x3da)+_0x483728(0x3d9)+'\x20may\x20'+'still'+_0x483728(0x23d)+_0x483728(0x267)+'s.','OHzEf':function(_0x5caf2a,_0x1444de,_0x199d89,_0x14e0b7,_0x16753b,_0x36f122){return _0x5caf2a(_0x1444de,_0x199d89,_0x14e0b7,_0x16753b,_0x36f122);},'TzsUZ':'Overw'+_0x483728(0x6a4)+'\x20Over'+_0x483728(0x5ab)+_0x483728(0x278)+_0x483728(0x430)+'ge.\x20B'+_0x483728(0x406)+_0x483728(0x5ef)+'\x20the\x20'+'serve'+_0x483728(0x50d)+_0x483728(0x483)+'s.','DbrWG':_0x483728(0x47d)+'ls\x20th'+'e\x20wea'+'pon\x27s'+_0x483728(0x1cc)+_0x483728(0x2ec)+'mo\x20to'+_0x483728(0x75c)+'every'+_0x483728(0x584)+'s.','snBQX':function(_0x1dcc07,_0x5ad0a4){return _0x1dcc07===_0x5ad0a4;},'OOTtz':_0x483728(0x1c8),'ZzFap':'WlQYB','ygZjo':_0x483728(0x62c)+_0x483728(0x299)+'ult','YrbYC':function(_0x2cb65e,_0x36f2f4,_0x557837,_0x26e15d){return _0x2cb65e(_0x36f2f4,_0x557837,_0x26e15d);},'ZsMQT':'Jump\x20'+'%','RMumU':function(_0x43b8b3,_0x336cb2,_0xc37e43,_0x5304f,_0x42a0f0,_0x27adf9){return _0x43b8b3(_0x336cb2,_0xc37e43,_0x5304f,_0x42a0f0,_0x27adf9);},'cSIVh':'lower'+_0x483728(0x371)+_0x483728(0x1bf),'szdWe':_0x483728(0x631)+_0x483728(0x510),'kTtTv':'CPS\x20r'+'eadou'+'t','bnRiz':function(_0xc3220e,_0x58b8f4,_0x825ce2,_0x6c71a9,_0xbe989f,_0x3a3c2e){return _0xc3220e(_0x58b8f4,_0x825ce2,_0x6c71a9,_0xbe989f,_0x3a3c2e);},'xkmTY':'FPS\x20o'+_0x483728(0x6fd)+'y.','kRVFX':_0x483728(0x332)+'emy\x20c'+_0x483728(0x4e3)+_0x483728(0x4ee)+_0x483728(0x1ab)+_0x483728(0x27b)+'as\x20no'+_0x483728(0x481)+'isibl'+'ePlay'+_0x483728(0x1e2)+_0x483728(0x1ae)+'gybac'+'k\x20on.','Qfpgz':function(_0x4ba5a9,_0x2c71c6,_0x577d1f,_0x1c2b23,_0x40c1a1,_0x2bfd50){return _0x4ba5a9(_0x2c71c6,_0x577d1f,_0x1c2b23,_0x40c1a1,_0x2bfd50);},'fhrkn':function(_0xd8c781,_0x4067fb){return _0xd8c781(_0x4067fb);},'uPVER':'Skips'+_0x483728(0x194)+_0x483728(0x514)+'rely\x20'+'—\x20no\x20'+_0x483728(0x4f4)+'hooks'+_0x483728(0x25d)+_0x483728(0x3d6)+_0x483728(0x31f)+'atche'+_0x483728(0x452)+_0x483728(0x2fe)+_0x483728(0x4bc),'EvLEa':'Appli'+_0x483728(0x1d2)+'\x20relo'+'ad.\x20I'+_0x483728(0x5e4)+_0x483728(0x4cd)+'load\x20'+_0x483728(0x680)+'fe\x20mo'+_0x483728(0x710)+_0x483728(0x72d)+_0x483728(0x3e4)+_0x483728(0x4c6)+_0x483728(0x30e)+_0x483728(0x718)+_0x483728(0x1a8)+_0x483728(0x564)+'\x20the\x20'+_0x483728(0x27e)+'-appl'+_0x483728(0x5f8)+_0x483728(0x44c),'zcjlZ':'Appli'+_0x483728(0x1d2)+'\x20relo'+'ad.','CqqOq':_0x483728(0x2ca)+'OHeal'+_0x483728(0x529)+'itiat'+_0x483728(0x5ae)+_0x483728(0x647)+'h)','kFnQm':_0x483728(0x193)+_0x483728(0x450)+_0x483728(0x207)+_0x483728(0x5fb)+_0x483728(0x380)+'is','ZGoWR':function(_0x240839,_0x392625,_0x3362f4,_0x3c96a2,_0x12ef82,_0x515623){return _0x240839(_0x392625,_0x3362f4,_0x3c96a2,_0x12ef82,_0x515623);},'jrDpH':_0x483728(0x5f4)+_0x483728(0x68c)+_0x483728(0x71f)+'age\x20d'+_0x483728(0x25b)+_0x483728(0x5a9)+_0x483728(0x1e5)+_0x483728(0x74c)+_0x483728(0x464)+'topDe'+'tecti'+_0x483728(0x4d8)+_0x483728(0x478)+_0x483728(0x3bb),'cpHIx':'God/d'+'amage'+_0x483728(0x751)+_0x483728(0x2d4)+_0x483728(0x523)+'raise'+_0x483728(0x1bd)+'risk\x20'+_0x483728(0x64a)+_0x483728(0x319)+'this\x20'+_0x483728(0x302),'Kxpby':function(_0xca8a5f,_0xa18843,_0x3afb03,_0xb1f222,_0x47a71b,_0x4d2cd9){return _0xca8a5f(_0xa18843,_0x3afb03,_0xb1f222,_0x47a71b,_0x4d2cd9);},'cXOdV':function(_0x390a55,_0x30eb17,_0x34579e){return _0x390a55(_0x30eb17,_0x34579e);},'hVswA':function(_0x22aadb,_0x571964){return _0x22aadb===_0x571964;},'tvHDL':function(_0x22282b,_0x2b3c60){return _0x22282b===_0x2b3c60;},'dGVAe':_0x483728(0x1d3),'DNbTD':function(_0x148d6b,_0xf5a254){return _0x148d6b===_0xf5a254;},'gjqgx':_0x483728(0x507)+'ng','UFXEj':'\x20|\x20ER'+_0x483728(0x54b),'pcgYt':_0x483728(0x6b3)+'de','fmwTS':'mn-lo'+'go','vwNtc':_0x483728(0x414),'Odhyh':_0x483728(0x607)+'in','JDKuf':_0x483728(0x71c)+'r','SqGmF':'mn-su'+'b','ZBcJQ':_0x483728(0x5c2)+_0x483728(0x1cf)+_0x483728(0x410)+'enu','jpPKe':'mn-cl'+_0x483728(0x4ad),'gBXfd':'Close','ctdyr':_0x483728(0x682)+_0x483728(0x381)+'ox=\x220'+'\x200\x2024'+_0x483728(0x494)+'<path'+'\x20d=\x22M'+_0x483728(0x51d)+_0x483728(0x6cd)+_0x483728(0x2af)+_0x483728(0x1b6)+_0x483728(0x5ce)+'vg>','jgVzx':_0x483728(0x5af)+'|3|5|'+_0x483728(0x49a),'chIxQ':function(_0x4a606d,_0x4d4881){return _0x4a606d+_0x4d4881;},'cmmdn':function(_0x2d6fdc,_0x5b90bf){return _0x2d6fdc+_0x5b90bf;},'manah':function(_0x10bec2,_0x4f13be,_0x35b6b5){return _0x10bec2(_0x4f13be,_0x35b6b5);},'MxdGM':'pYakK','kaCfb':_0x483728(0x3e5)+'io_30'+'0x600'+_0x483728(0x41a)+'nt','BdvzJ':'fulls'+_0x483728(0x3d1)+'-banr'+'s','RpROG':_0x483728(0x1d7)+'a.kou'+'r.ui.'+'v1','LVFuZ':_0x483728(0x65a),'yFKLx':_0x483728(0x72a),'dbpGo':function(_0x17e463,_0x5b0c8e){return _0x17e463*_0x5b0c8e;},'eJcLW':function(_0x32cdb1,_0x30a73a){return _0x32cdb1-_0x30a73a;},'zPBKr':function(_0x3defa0,_0x1ef621){return _0x3defa0+_0x1ef621;},'vmhzl':function(_0x2266db,_0x1db784){return _0x2266db+_0x1db784;},'CfMLo':'mouse'+'1','AVVno':_0x483728(0x412),'EaNzU':_0x483728(0x601)+'2px\x20u'+_0x483728(0x1c5)+'ospac'+'e,mon'+_0x483728(0x661)+'e','tfAzP':'#ff6b'+'9d','NgKoB':_0x483728(0x738),'MWlYi':_0x483728(0x729)+'ng\x20fo'+'r\x20gam'+'e…','XRSqc':'color','npmZz':_0x483728(0x57a)+'n','QqkAz':function(_0x5ac3ee,_0x2a4c28){return _0x5ac3ee+_0x2a4c28;},'AkqbI':'sk-ca'+_0x483728(0x480)+_0x483728(0x38c),'cAhCM':_0x483728(0x524),'xCsaf':_0x483728(0x257),'KaBZp':_0x483728(0x3cf),'WnLkP':_0x483728(0x208)+'e','GnDIA':_0x483728(0x721)+'wn','aNzTI':_0x483728(0x2fc),'lrKRg':_0x483728(0x66e),'iTcrO':_0x483728(0x3fc)+_0x483728(0x230)+'ed','jASqD':'compl'+_0x483728(0x6fb),'pMAQi':_0x483728(0x5ee),'pCIFk':_0x483728(0x3a4),'MqwcL':function(_0x4fe69f,_0x2c862b,_0xe155dc){return _0x4fe69f(_0x2c862b,_0xe155dc);},'EDpqV':_0x483728(0x37f)+'ion:f'+'ixed;'+_0x483728(0x486)+':0;wi'+_0x483728(0x6e2)+'00vw;'+_0x483728(0x1f1)+_0x483728(0x672)+'vh;z-'+_0x483728(0x712)+_0x483728(0x40e)+_0x483728(0x4d2)+_0x483728(0x3a5)+_0x483728(0x213)+'event'+_0x483728(0x593)+'e','Qkffr':_0x483728(0x1d7)+_0x483728(0x5c5),'nRzfj':'open','MoqAB':_0x483728(0x449)+'t','bBfDr':_0x483728(0x38e),'FIWer':_0x483728(0x471)+'l','kEmxz':_0x483728(0x195),'usqhn':_0x483728(0x1d9),'ewqen':_0x483728(0x682)+'viewB'+_0x483728(0x6c3)+_0x483728(0x46a)+'\x2024\x22>'+_0x483728(0x303)+_0x483728(0x1f4)+_0x483728(0x6e5)+'c-1.5'+_0x483728(0x26b)+'4-4.5'+'-4-7.'+_0x483728(0x6b1)+'.5\x201.'+_0x483728(0x36a)+_0x483728(0x74f)+'5s4\x202'+_0x483728(0x4e7)+'5c0\x203'+'-2.5\x20'+_0x483728(0x549)+_0x483728(0x29f)+'fill='+'\x22none'+_0x483728(0x440)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x483728(0x66a)+_0x483728(0x448)+'h=\x222\x22'+'\x20stro'+_0x483728(0x52a)+_0x483728(0x757)+'=\x22rou'+_0x483728(0x6cb)+'troke'+_0x483728(0x3f6)+_0x483728(0x4ef)+_0x483728(0x714)+_0x483728(0x538)+_0x483728(0x604)+_0x483728(0x277)+_0x483728(0x1de)+'cy=\x221'+_0x483728(0x420)+'\x221.5\x22'+_0x483728(0x327)+'=\x22#ff'+_0x483728(0x475)+_0x483728(0x5ce)+'vg>','uRyBP':'Sakur'+'a\x20Kou'+'r','GRhPb':'Sakur'+_0x483728(0x567),'EcZkk':_0x483728(0x2e4)+'ateTa'+'keHea'+_0x483728(0x2f0),'bTEDF':function(_0x1e9d3e,_0x42c29f,_0x3580c8,_0x68b12d,_0x5b0fcb,_0x289c17,_0x514fb8,_0x5cbe3a){return _0x1e9d3e(_0x42c29f,_0x3580c8,_0x68b12d,_0x5b0fcb,_0x289c17,_0x514fb8,_0x5cbe3a);},'eCblO':_0x483728(0x70e)+'th','YLMMP':function(_0x46fdf6,_0x2e9ae6,_0x1d3ad5,_0x2e9a7b,_0x5d1daf,_0x5c783d,_0x432169,_0x172692){return _0x46fdf6(_0x2e9ae6,_0x1d3ad5,_0x2e9a7b,_0x5d1daf,_0x5c783d,_0x432169,_0x172692);},'ZCcdu':'noRec'+_0x483728(0x66f),'VFhQy':function(_0x4eb05b,_0x3443f3,_0x15dbea,_0x3fa0f0,_0x51cfb3,_0x518c71,_0x3ffbbb,_0x13adbe){return _0x4eb05b(_0x3443f3,_0x15dbea,_0x3fa0f0,_0x51cfb3,_0x518c71,_0x3ffbbb,_0x13adbe);},'TopeQ':'capSh'+'ooter','uXPNn':'VCnSA','sugXR':_0x483728(0x618)+_0x483728(0x6d7)+'ur]\x20U'+_0x483728(0x2d8)+_0x483728(0x734)+'ailed'+':','hydzF':function(_0x2ca9f2,_0x5891b1,_0x4fd01e){return _0x2ca9f2(_0x5891b1,_0x4fd01e);},'OttmD':function(_0x228569,_0x2b94fe){return _0x228569(_0x2b94fe);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x483728(0x663)](location['hostn'+'ame']||''))return;if(window[_0x483728(0x69d)+'URA_K'+'OUR__'])return;window['__SAK'+_0x483728(0x660)+_0x483728(0x3c9)]=!![];var _0x2c4ea5=_0x10c15b['tfAzP'],_0x3620fe=_0x483728(0x405)+'c6',_0x5cd271={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x9365b3={..._0x5cd271};try{Object['assig'+'n'](_0x9365b3,JSON[_0x483728(0x548)](localStorage[_0x483728(0x3ef)+'em'](_0x483728(0x1d7)+_0x483728(0x348)+_0x483728(0x699))||'{}'));}catch(_0x21c85c){}function _0xf87d5(){var _0x5132d0=_0x483728;try{localStorage[_0x5132d0(0x71b)+'em'](_0x5132d0(0x1d7)+_0x5132d0(0x348)+'r.v1',JSON['strin'+'gify'](_0x9365b3));}catch(_0x435606){}}var _0x1454a8={'uwmk':!!window['Unity'+_0x483728(0x676)+_0x483728(0x58a)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x9365b3[_0x483728(0x719)+_0x483728(0x1be)],'lastError':''};try{window['addEv'+'entLi'+_0x483728(0x695)+'r'](_0x483728(0x3ee),_0x4c3c0e=>{var _0x223955=_0x483728;try{var _0x555dd9=_0x4c3c0e&&(_0x4c3c0e[_0x223955(0x561)+'ge']||_0x4c3c0e['error']&&_0x4c3c0e[_0x223955(0x3ee)][_0x223955(0x561)+'ge'])||_0x10c15b[_0x223955(0x6a5)];if(_0x4c3c0e&&_0x4c3c0e[_0x223955(0x534)+_0x223955(0x4dc)])_0x555dd9+=_0x10c15b[_0x223955(0x4f1)](_0x10c15b[_0x223955(0x1a5)]+_0x10c15b['qQbGH'](String,_0x4c3c0e[_0x223955(0x534)+_0x223955(0x4dc)])['split']('/')['pop']()+':',_0x4c3c0e['linen'+'o']||'?');_0x1454a8[_0x223955(0x1c1)+_0x223955(0x46d)]=String(_0x555dd9)[_0x223955(0x6aa)](0x967*0x1+-0x15b6*0x1+-0x1*-0xc4f,0xbb7*0x1+0x258d*-0x1+-0x8d2*-0x3);}catch(_0x20c72b){}});}catch(_0x4a66f1){}var _0x22158f=null,_0x417699=null,_0x3cb49f={},_0x4d9ca9=[],_0x292e49=[],_0x1d061e=new Map();function _0x5a690e(_0x33056e,_0x34c3a0){var _0x89fb80=_0x483728;if(!_0x34c3a0||_0x33056e[_0x89fb80(0x2a9)+'des'](_0x34c3a0)||_0x10c15b['YIAoN'](_0x33056e[_0x89fb80(0x3c4)+'h'],0x5a0+-0x2375+-0x33*-0x97))return;_0x33056e['push'](_0x34c3a0);}function _0x3ee5e0(_0x43c3de,_0x4d9182,_0x5e792e,_0x441d5e){var _0x2bffa1=_0x483728,_0x11cb0d=0x1a1+0xea3+0x2b6*-0x6;try{_0x10c15b[_0x2bffa1(0x462)]!==_0x2bffa1(0x6d0)?(_0x479f26[_0x2bffa1(0x4a3)+'rokes']=_0x481ea8,_0x3faba1()):_0x11cb0d=_0x4d9182&&_0x4d9182['val']?_0x4d9182[_0x2bffa1(0x4d5)]():0x1850+0x1*-0x1f62+0x712;}catch(_0x410919){}if(!_0x11cb0d)return;_0x10c15b[_0x2bffa1(0x44f)](_0x5a690e,_0x43c3de,_0x11cb0d),_0x5e792e[_0x441d5e]=_0x43c3de[_0x2bffa1(0x3c4)+'h'];if(_0x10c15b[_0x2bffa1(0x355)](_0x441d5e,_0x10c15b['uRzBj'])&&_0x43c3de[_0x2bffa1(0x3c4)+'h']){var _0x4a8dbc=_0x3cb49f[_0x2bffa1(0x221)+'ve'];if(_0x4a8dbc)try{_0x4a8dbc[_0x2bffa1(0x32b)+'ed']=![];}catch(_0x464a18){}}}function _0x331ea2(_0x382217,_0x1b0ed5,_0x5811b1){var _0x122720=_0x483728,_0x280aec={'MkgSe':function(_0x5913f4,_0x4c8004){return _0x5913f4<_0x4c8004;},'NkHvp':'kour-'+_0x122720(0x42e)},_0x51d80c=_0x1d061e[_0x122720(0x29b)](_0x382217);!_0x51d80c&&(_0x51d80c=new Map(),_0x1d061e[_0x122720(0x21e)](_0x382217,_0x51d80c));if(!_0x51d80c[_0x122720(0x5b4)](_0x1b0ed5)){if('YUgsK'!=='YUgsK'){var _0x26e639=_0x107897['child'+'ren'];for(var _0x1ccd70=0x254*-0x2+-0xe0f+-0x63d*-0x3;_0x280aec['MkgSe'](_0x1ccd70,_0x26e639['lengt'+'h']);_0x1ccd70++){if(_0x26e639[_0x1ccd70]['id']&&_0x26e639[_0x1ccd70]['id'][_0x122720(0x712)+'Of'](_0x280aec[_0x122720(0x6bb)])===0x3*0x71d+-0x2*0x1ba+-0xf1*0x13)_0x26e639[_0x1ccd70]['style']['displ'+'ay']=_0x122720(0x572);}}else try{var _0x2b863b=new _0x22158f(_0x382217)['readF'+_0x122720(0x4ac)](_0x1b0ed5,_0x5811b1);_0x51d80c[_0x122720(0x21e)](_0x1b0ed5,_0x10c15b['OOjne'](_0x2b863b,undefined)?_0x2b863b['val']():null);}catch(_0x1e1d5e){_0x51d80c['set'](_0x1b0ed5,null);}}return _0x51d80c['get'](_0x1b0ed5);}function _0x20d2e0(_0x3d698b,_0x42cdb2,_0x36d899,_0x34b232){var _0x2a8832=_0x483728;try{if('OYQDC'===_0x2a8832(0x402)){var _0x35beda=('1|3|2'+'|5|4|'+'0')['split']('|'),_0x47fe8d=0x88c+0x1aae+0x1f5*-0x12;while(!![]){switch(_0x35beda[_0x47fe8d++]){case'0':_0x47621d(()=>_0x740fba[_0x2a8832(0x282)+_0x2a8832(0x1fd)]['add']('shown'));continue;case'1':var _0x59d41a=_0x343ba1['creat'+'eElem'+_0x2a8832(0x19c)](_0x2a8832(0x66e));continue;case'2':_0x5a0c6e[_0x2a8832(0x43d)+_0x2a8832(0x55d)+'d'](_0x59d41a);continue;case'3':_0x59d41a['textC'+'onten'+'t']=_0x50abd1;continue;case'4':_0x527c04[_0x2a8832(0x43d)+'dChil'+'d'](_0x19d8f8);continue;case'5':_0x2219b1=_0x10c15b[_0x2a8832(0x623)](_0x2b1b7a);continue;}break;}}else new _0x22158f(_0x3d698b)['write'+'Field'](_0x42cdb2,_0x36d899,_0x34b232);}catch(_0x22b383){}}function _0x13e136(_0x589ef6,_0x1f3c2a){var _0x1ce913=_0x483728;try{var _0x5ed7d4=new _0x22158f(_0x589ef6)[_0x1ce913(0x262)+'ield'](_0x1f3c2a,'u32');return _0x5ed7d4?_0x5ed7d4['val']():0x257*-0xb+0x17f7+0x1c6;}catch(_0x44baa0){return 0xc4c+-0x21d6+0x158a;}}function _0x542386(_0x27163d,_0x4c8e9c,_0x439e66,_0x4dff02){var _0x477f70=_0x483728,_0x364c6c={'uOXvR':_0x477f70(0x581)};if(_0x477f70(0x6ba)===_0x10c15b['zCFxs']){var _0xaf2bc3=_0x10c15b['NnGhx'](_0x331ea2,_0x27163d,_0x4c8e9c,_0x439e66);if(_0x10c15b[_0x477f70(0x1c3)](_0xaf2bc3,null))_0x20d2e0(_0x27163d,_0x4c8e9c,_0x439e66,_0xaf2bc3*_0x4dff02);}else{var _0xc12766=_0x25769e[_0x477f70(0x24c)+_0x477f70(0x2f4)+'ent'](_0x364c6c[_0x477f70(0x3f3)]);_0xc12766[_0x477f70(0x282)+'Name']=_0x477f70(0x65c)+'nt',_0xc12766[_0x477f70(0x2bc)+_0x477f70(0x2ea)+'t']=_0x365052,_0x176284[_0x477f70(0x43d)+'dChil'+'d'](_0xc12766);}}function _0x132b82(_0x3ac7f6,_0x1c65fb,_0x35c890,_0x18229f,_0x52b001,_0x1eadcc,_0x3cd50b){var _0x1cb533=_0x483728;try{var _0x5995fd=_0x417699['hookP'+_0x1cb533(0x39d)]({'typeName':_0x1c65fb,'methodName':_0x35c890,'params':_0x18229f,'returnType':_0x52b001},_0x1eadcc);return _0x5995fd['enabl'+'ed']=_0x3cd50b!==![],_0x3cb49f[_0x3ac7f6]=_0x5995fd,_0x1454a8['hooks'+_0x1cb533(0x307)]++,_0x5995fd;}catch(_0x16fcca){return console['warn'](_0x10c15b[_0x1cb533(0x3d3)],_0x3ac7f6,_0x16fcca&&_0x16fcca[_0x1cb533(0x561)+'ge']),null;}}function _0x2d0ec2(_0x59b185,_0x2e3567,_0x5f2d08,_0x14d759,_0x1b47ff,_0x647c89,_0x57c7d8){var _0x3d27c4=_0x483728;if(_0x10c15b['OOjne'](_0x3d27c4(0x45b),_0x10c15b['AhrYT']))_0x57df70=new _0x452d25(),_0x5021ed[_0x3d27c4(0x21e)](_0x3bd492,_0x24653e);else try{var _0x3ade18=_0x417699['hookP'+_0x3d27c4(0x329)+'x']({'typeName':_0x2e3567,'methodName':_0x5f2d08,'params':_0x14d759,'returnType':_0x1b47ff},_0x647c89);return _0x3ade18[_0x3d27c4(0x32b)+'ed']=_0x57c7d8!==![],_0x3cb49f[_0x59b185]=_0x3ade18,_0x1454a8['hooks'+_0x3d27c4(0x307)]++,_0x3ade18;}catch(_0x1089fb){return console['warn']('[saku'+'ra-ko'+_0x3d27c4(0x4c2)+'ook\x20r'+'eg\x20fa'+_0x3d27c4(0x2e2),_0x59b185,_0x1089fb&&_0x1089fb[_0x3d27c4(0x561)+'ge']),null;}}var _0x11ff89=()=>![];try{if(window['Unity'+_0x483728(0x676)+'dkit']&&!_0x9365b3['safeM'+_0x483728(0x1be)]){_0x22158f=window[_0x483728(0x1c6)+'WebMo'+_0x483728(0x58a)][_0x483728(0x33e)+_0x483728(0x1af)+'er'],_0x417699=window[_0x483728(0x1c6)+'WebMo'+_0x483728(0x58a)]['Runti'+'me'][_0x483728(0x24c)+'ePlug'+'in']({'name':_0x10c15b[_0x483728(0x731)],'version':_0x483728(0x610),'referencedAssemblies':[_0x483728(0x56c)+'bly-C'+'Sharp'+_0x483728(0x216)]});if(_0x9365b3['hookG'+'od'])_0x132b82(_0x10c15b[_0x483728(0x1b3)],'OHeal'+'th',_0x10c15b[_0x483728(0x69c)],[_0x483728(0x519),'i32'],undefined,_0x11ff89,!!_0x9365b3['god']);if(_0x9365b3[_0x483728(0x20e)+'odDie'])_0x10c15b['bTEDF'](_0x132b82,_0x483728(0x208)+'e',_0x10c15b[_0x483728(0x602)],_0x483728(0x198)+_0x483728(0x62f),[_0x483728(0x519),_0x483728(0x519),_0x10c15b[_0x483728(0x30d)],_0x10c15b[_0x483728(0x30d)],'i32'],undefined,_0x11ff89,!!_0x9365b3[_0x483728(0x3cf)]);if(_0x9365b3[_0x483728(0x286)+_0x483728(0x1bc)+'il'])_0x10c15b[_0x483728(0x43c)](_0x132b82,_0x10c15b[_0x483728(0x1e3)],'Legio'+_0x483728(0x677)+_0x483728(0x60d)+'.Over'+_0x483728(0x6fc)+'Recoi'+'lMoti'+'on',_0x483728(0x3d7),[_0x10c15b['NDzlk']],undefined,_0x11ff89,!!_0x9365b3['noRec'+_0x483728(0x66f)]);if(_0x9365b3[_0x483728(0x4fa)+_0x483728(0x642)+'e'])_0x10c15b[_0x483728(0x421)](_0x2d0ec2,_0x10c15b[_0x483728(0x1e4)],'OShoo'+_0x483728(0x46e),_0x483728(0x754)+_0x483728(0x666)+_0x483728(0x298),['i32',_0x483728(0x519)],undefined,(_0x5f15dc,_0x55aec3)=>{var _0x43dbeb=_0x483728;_0x10c15b['JQOaU'](_0x3ee5e0,_0x292e49,_0x55aec3,_0x1454a8,'shoot'+_0x43dbeb(0x1ca));},!![]);if(_0x9365b3['hookC'+'aptur'+'e'])_0x10c15b[_0x483728(0x2e0)](_0x2d0ec2,_0x483728(0x221)+'ve',_0x483728(0x296)+_0x483728(0x677)+_0x483728(0x60d)+_0x483728(0x5d2)+'tide.'+_0x483728(0x224)+_0x483728(0x19c),_0x483728(0x4f5)+_0x483728(0x333),[_0x10c15b['NDzlk']],_0x483728(0x519),(_0x2cce51,_0x4d06c3)=>{var _0x29a439=_0x483728;_0x10c15b[_0x29a439(0x5a8)](_0x3ee5e0,_0x4d9ca9,_0x4d06c3,_0x1454a8,_0x10c15b['uRzBj']);},!![]);}}catch(_0x52325d){if(_0x10c15b[_0x483728(0x645)](_0x483728(0x392),_0x10c15b['uXPNn']))console['warn'](_0x10c15b[_0x483728(0x3de)],_0x52325d&&_0x52325d['messa'+'ge']);else{var _0x4f5c61=_0x3cffc8&&(_0x1639dc['messa'+'ge']||_0x4ba32f[_0x483728(0x3ee)]&&_0x260a6a['error']['messa'+'ge'])||_0x10c15b[_0x483728(0x6a5)];if(_0x1f8dfb&&_0x12edec['filen'+_0x483728(0x4dc)])_0x4f5c61+=_0x10c15b[_0x483728(0x4f1)](_0x10c15b['KacBQ']('\x20@\x20'+_0x10c15b[_0x483728(0x5c9)](_0x170129,_0x412f80['filen'+'ame'])['split']('/')['pop'](),':'),_0x33e3a7['linen'+'o']||'?');_0x1ed6ba['lastE'+'rror']=_0x10c15b['mYPSj'](_0x218a31,_0x4f5c61)['slice'](-0x1817+0x206*-0x5+0x7*0x4e3,0x9e1+0x1268+-0x61*0x49);}}function _0x2cb9f6(_0x42fc70,_0x273dee){var _0x45ba0b=_0x3cb49f[_0x42fc70];if(_0x45ba0b)try{_0x45ba0b['enabl'+'ed']=!!_0x273dee;}catch(_0x1915ed){}}_0x10c15b[_0x483728(0x691)](setInterval,()=>{var _0x5cf0ea=_0x483728,_0x3df565={'iEuJD':function(_0x5304c2){return _0x10c15b['VxLiT'](_0x5304c2);}};if(!_0x22158f||!window[_0x5cf0ea(0x532)+'Insta'+'nce'])return;var _0x53fcf6=_0x10c15b['VBYVt'](Number(_0x9365b3[_0x5cf0ea(0x241)+_0x5cf0ea(0x2fa)])||0x146*0x8+0x2675+-0x3041,0x2*0xe3b+-0x4ae*0x1+0xbb2*-0x2),_0x45c92f=(_0x10c15b[_0x5cf0ea(0x5c9)](Number,_0x9365b3[_0x5cf0ea(0x6c2)+'ct'])||-0x6*-0x104+0x1*0xe5f+-0x3*0x6b1)/(0xcd*-0xa+0x2549*-0x1+-0x923*-0x5),_0x2c38c4=_0x10c15b['CrmLt'](Number(_0x9365b3['gravi'+'tyPct'])||0x1f9d*0x1+0x1f6b+-0x3ea4,-0xa*0x1b1+-0xcc6+0x1e14),_0x3983e2=Math['max'](0x3d*-0x6+-0x8f1*-0x1+-0x782,Number(_0x9365b3[_0x5cf0ea(0x72e)+_0x5cf0ea(0x284)+'e'])||0x1*-0x1567+-0x16cd+0x2cca),_0x27ca59=_0x53fcf6!==0x25b7*-0x1+-0x14fe+0x3ab6||_0x10c15b[_0x5cf0ea(0x645)](_0x45c92f,-0x23d9+-0x1531+0x390b)||_0x2c38c4!==0x23f3*0x1+0xe3c+-0x322e||_0x9365b3[_0x5cf0ea(0x687)],_0x24e866=_0x9365b3[_0x5cf0ea(0x6a1)+_0x5cf0ea(0x560)]||_0x9365b3[_0x5cf0ea(0x72e)+'eExp']||_0x9365b3[_0x5cf0ea(0x32d)+'moExp']||_0x9365b3['rapid'+_0x5cf0ea(0x4c8)];if(_0x10c15b['coZwK'](!_0x27ca59,!_0x24e866))return;try{for(var _0x2f4f19=-0x7da+-0xcb1+0x148b;_0x2f4f19<_0x4d9ca9[_0x5cf0ea(0x3c4)+'h'];_0x2f4f19++){var _0x430f69=_0x4d9ca9[_0x2f4f19];if(!_0x430f69)continue;if(_0x10c15b['FdVgY'](_0x53fcf6,0x822+0x4*0x12e+-0x8f*0x17)){if(_0x10c15b[_0x5cf0ea(0x355)]('sGQSY',_0x10c15b['XDFbB']))_0x10c15b[_0x5cf0ea(0x5a8)](_0x542386,_0x430f69,-0x24eb+-0xb7a+0x308d,_0x5cf0ea(0x3c5),_0x53fcf6),_0x10c15b[_0x5cf0ea(0x5a8)](_0x542386,_0x430f69,0x1b74+0x2*0x399+-0x227a,'f32',_0x53fcf6),_0x10c15b['JQOaU'](_0x542386,_0x430f69,0x1*0x1c61+0x38f+-0x40*0x7f,_0x5cf0ea(0x3c5),_0x53fcf6),_0x10c15b[_0x5cf0ea(0x48e)](_0x542386,_0x430f69,0xf81+0x1*0x577+-0xa62*0x2,_0x10c15b['zHgOq'],_0x53fcf6),_0x10c15b['JQOaU'](_0x542386,_0x430f69,-0x1f8a+0x1c20+0x386,_0x5cf0ea(0x3c5),_0x53fcf6),_0x10c15b['MXkLw'](_0x542386,_0x430f69,-0x2e0*0x5+-0x1880+-0x10*-0x270,_0x5cf0ea(0x3c5),_0x53fcf6);else{var _0x47d230=_0x45a97c[_0x5cf0ea(0x24c)+_0x5cf0ea(0x2f4)+_0x5cf0ea(0x19c)](_0x10c15b[_0x5cf0ea(0x320)]);_0x47d230[_0x5cf0ea(0x57f)]=_0x20229f,_0x47d230[_0x5cf0ea(0x2bc)+'onten'+'t']=_0x46e224,_0x14163f[_0x5cf0ea(0x43d)+_0x5cf0ea(0x55d)+'d'](_0x47d230);}}if(_0x45c92f!==-0x2274+-0x1*0xaa2+0x2d17)_0x542386(_0x430f69,-0x20c3+0x1*-0x560+0x243*0x11,_0x10c15b[_0x5cf0ea(0x364)],_0x45c92f);_0x10c15b[_0x5cf0ea(0x568)](_0x2c38c4,-0x6ad*0x3+0x66d*0x6+-0x1286)&&(_0x542386(_0x430f69,-0x8f*-0x45+-0x3*0x409+0x45c*-0x6,_0x10c15b[_0x5cf0ea(0x364)],_0x2c38c4),_0x542386(_0x430f69,-0x203f+-0x1821+0x38ac,'f32',_0x2c38c4));if(_0x9365b3['bhop'])_0x20d2e0(_0x430f69,-0x1e5c+0x828+0x16d0,_0x5cf0ea(0x3c5),-(-0x5*-0x5e3+0xbc6+-0x254e));}}catch(_0x56fbb5){}try{for(var _0x2b3dca=0x1ee4+0x1*-0xcb9+-0x122b;_0x2b3dca<_0x292e49[_0x5cf0ea(0x3c4)+'h'];_0x2b3dca++){var _0x1f4ba0=_0x13e136(_0x292e49[_0x2b3dca],0x164*0x17+-0x2*-0x137e+0x10*-0x46c);if(!_0x1f4ba0)continue;_0x9365b3['damag'+'eExp']&&(_0x20d2e0(_0x1f4ba0,0x137*0x6+-0x264c+-0x2*-0xfa7,_0x10c15b[_0x5cf0ea(0x30d)],_0x3983e2),_0x20d2e0(_0x1f4ba0,0x1a27+0x4f*0x45+0x25*-0x146,_0x10c15b['NDzlk'],_0x3983e2));if(_0x9365b3['noSpr'+_0x5cf0ea(0x560)]){if('YTAAi'===_0x10c15b['jmcqK'])_0x10c15b['yzwFV'](_0x20d2e0,_0x1f4ba0,0xe1b+0x3cd*-0x1+-0x9c6,_0x10c15b['zHgOq'],0x507+0xc*-0x2fe+0x1ee1),_0x10c15b[_0x5cf0ea(0x5a8)](_0x20d2e0,_0x1f4ba0,-0x1725+-0x28e*-0x2+0x1271,_0x5cf0ea(0x3c5),-0x267c+0x1e08+0x875);else return[_0x36ca8a(_0x5cf0ea(0x203)+'ck',_0x5cf0ea(0x29a)+'\x20kour'+_0x5cf0ea(0x341)+_0x5cf0ea(0x2a7)+_0x5cf0ea(0x5d6)+_0x5cf0ea(0x2bd),_0x2bf813[_0x5cf0ea(0x579)+'ck'],_0x26087d=>{var _0x2ed640=_0x5cf0ea;_0x57f4dc['adblo'+'ck']=_0x26087d,_0x3df565[_0x2ed640(0x38d)](_0x5b8ba8);},[_0x189ffd('Takes'+'\x20effe'+_0x5cf0ea(0x495)+_0x5cf0ea(0x467)+_0x5cf0ea(0x713)+_0x5cf0ea(0x603)+_0x5cf0ea(0x3b1)+'.')])];}if(_0x9365b3['infAm'+'moExp'])_0x20d2e0(_0x1f4ba0,-0x2*0xcfb+0x510+0x1542,'i32',0x797+0x767*0x1+-0x1*0xb17);_0x9365b3['rapid'+_0x5cf0ea(0x4c8)]&&(_0x10c15b[_0x5cf0ea(0x73b)](_0x542386,_0x1f4ba0,0x1*0xd87+-0xf8*-0x24+-0x2fdb*0x1,_0x5cf0ea(0x3c5),0x1a88*0x1+-0x3d1*0x3+0x9*-0x1ad+0.1),_0x10c15b[_0x5cf0ea(0x3d8)](_0x20d2e0,_0x1f4ba0,-0x1f*-0x93+-0x1035+-0x138,_0x10c15b['zHgOq'],0x8*0x51+-0x2*0x23b+-0x13*-0x1a+0.1));}}catch(_0x2ce959){}},-0x24b*0x1+0xe*0x1b5+-0x6f1*0x3),_0x10c15b[_0x483728(0x708)](setInterval,()=>{var _0x4081ad=_0x483728;_0x1454a8['gameL'+'oaded']=!!window['unity'+'Insta'+_0x4081ad(0x6f4)];try{var _0x1a5907=0x1dc4+0xb2b+0x5d9*-0x7;for(var _0x31d84d in _0x3cb49f){if(_0x3cb49f[_0x31d84d]&&_0x3cb49f[_0x31d84d][_0x4081ad(0x1c2)+'ed'])_0x1a5907++;}_0x1454a8['hooks'+'Ok']=_0x1a5907;}catch(_0x38c0a2){}},-0x1*-0xf43+0x26e4+0x2a5*-0x13);var _0x847292=new Set(),_0x5a3230={0x1:[],0x3:[]},_0x402696=![];function _0x3118ad(_0x427c0e){var _0x11b3b4=_0x483728;_0x847292[_0x11b3b4(0x3d2)](_0x427c0e[_0x11b3b4(0x54d)]);}function _0x364d4f(_0x2ad10e){var _0x357d71=_0x483728;_0x10c15b[_0x357d71(0x612)](_0x10c15b['JLTNC'],'jSVod')?_0x847292['delet'+'e'](_0x2ad10e['code']):(_0x1314c6['font']=_0x10c15b[_0x357d71(0x522)](_0x10c15b['wSolA'](_0x357d71(0x6af),_0x47c4d1[_0x357d71(0x55b)](_0x10c15b['VwxyS'](0x1d5a+-0x3*-0x1eb+-0x2312,_0x552a9c))),_0x10c15b[_0x357d71(0x363)]),_0x55280f['fillS'+'tyle']=_0x30ec07?_0x10c15b['ZPavW']:_0x357d71(0x291)+_0x357d71(0x6c0)+'35,24'+_0x357d71(0x254)+'5)',_0x5310a9['fillT'+_0x357d71(0x752)](_0x25e5fd,_0x271d57+_0x10c15b[_0x357d71(0x46b)](_0x24b6a1,0x1*-0x14e7+-0x730+0x1c19),_0x10c15b[_0x357d71(0x4f1)](_0x2d7784,_0x296a82/(0x2f6*-0x9+0x1*-0x362+-0xa*-0x301))+(-0x3f1+-0xc46*0x1+0x103f*0x1)*_0x112617));}function _0x4aeaec(_0x1a4e55){var _0x39cae9=_0x483728;if(_0x1a4e55['__sak'+_0x39cae9(0x5f1)])return;_0x847292[_0x39cae9(0x3d2)](_0x10c15b[_0x39cae9(0x5d9)](_0x10c15b[_0x39cae9(0x45a)],_0x1a4e55[_0x39cae9(0x387)+'n']+(-0x2408+0x1953+-0x2*-0x55b)));var _0x157b00=_0x5a3230[_0x1a4e55[_0x39cae9(0x387)+'n']+(-0x166a+0xfc9+0x6a2*0x1)];if(_0x157b00){_0x157b00[_0x39cae9(0x36f)](performance[_0x39cae9(0x5e9)]());if(_0x157b00[_0x39cae9(0x3c4)+'h']>0x1*-0x14af+-0x1*0xb6f+0x2046)_0x157b00[_0x39cae9(0x4e5)]();}}function _0x55a336(_0x2ed69e){var _0x29fa74=_0x483728;if(!_0x2ed69e[_0x29fa74(0x362)+'ura'])_0x847292[_0x29fa74(0x68e)+'e'](_0x10c15b['KacBQ'](_0x10c15b[_0x29fa74(0x45a)],_0x2ed69e[_0x29fa74(0x387)+'n']+(-0x3e*-0x1c+-0xb7b*-0x3+0x8*-0x527)));}function _0x51d336(){var _0x347b4d=_0x483728;_0x847292[_0x347b4d(0x701)]();}function _0x26ceba(){var _0x10366b=_0x483728,_0x3d2e42=('5|1|3'+_0x10366b(0x2eb)+_0x10366b(0x61b))[_0x10366b(0x4a0)]('|'),_0x1e1ffb=0x2117*0x1+0x11af+0x86*-0x61;while(!![]){switch(_0x3d2e42[_0x1e1ffb++]){case'0':window[_0x10366b(0x6f6)+'entLi'+_0x10366b(0x695)+'r'](_0x10c15b[_0x10366b(0x55c)],_0x364d4f,!![]);continue;case'1':_0x402696=!![];continue;case'2':window[_0x10366b(0x6f6)+_0x10366b(0x26e)+_0x10366b(0x695)+'r'](_0x10c15b['PuFGx'],_0x4aeaec,!![]);continue;case'3':window[_0x10366b(0x6f6)+_0x10366b(0x26e)+'stene'+'r'](_0x10366b(0x721)+'wn',_0x3118ad,!![]);continue;case'4':window['addEv'+'entLi'+_0x10366b(0x695)+'r'](_0x10366b(0x25a),_0x51d336);continue;case'5':if(_0x402696)return;continue;case'6':window['addEv'+'entLi'+_0x10366b(0x695)+'r']('mouse'+'up',_0x55a336,!![]);continue;}break;}}function _0x513ab3(_0x17e266){var _0x3b03f9=_0x483728,_0x2b8758=_0x5a3230[_0x17e266]||[],_0x48a63c=performance[_0x3b03f9(0x5e9)]();while(_0x2b8758['lengt'+'h']&&_0x10c15b['tQmsZ'](_0x48a63c,_0x2b8758[-0x1c43+-0xd0d+0x1*0x2950])>0x1970+-0x49*0x60+0x58*0x11)_0x2b8758[_0x3b03f9(0x4e5)]();return _0x2b8758[_0x3b03f9(0x3c4)+'h'];}function _0x23e95f(_0xf05f0e){var _0x4afb33=_0x483728,_0x21344b={'xYKzz':function(_0x6cdcaa,_0x3bab1d){return _0x6cdcaa+_0x3bab1d;},'AULuv':_0x4afb33(0x419)+_0x4afb33(0x6cc)};if(_0x10c15b[_0x4afb33(0x645)](_0x10c15b[_0x4afb33(0x70a)],_0x10c15b[_0x4afb33(0x2b6)])){if(document[_0x4afb33(0x621)]&&(document[_0x4afb33(0x297)+_0x4afb33(0x38b)]===_0x10c15b[_0x4afb33(0x63e)]||document[_0x4afb33(0x297)+'State']===_0x4afb33(0x19f)+'ete'))_0x10c15b[_0x4afb33(0x5f0)](_0xf05f0e);else document['addEv'+'entLi'+'stene'+'r'](_0x4afb33(0x4bb)+'ntent'+_0x4afb33(0x3d4)+'d',_0xf05f0e,{'once':!![]});}else{var _0x38722c=(_0x4afb33(0x37a)+_0x4afb33(0x543)+_0x4afb33(0x66c))['split']('|'),_0x518bf0=0x185a+-0x2368+0xb0e;while(!![]){switch(_0x38722c[_0x518bf0++]){case'0':var _0x2a74e6=_0x14cb38[_0x4afb33(0x24c)+_0x4afb33(0x2f4)+'ent'](_0x4afb33(0x387)+'n');continue;case'1':_0x2a74e6[_0x4afb33(0x1cb)]='butto'+'n';continue;case'2':_0x2a74e6[_0x4afb33(0x46c)+_0x4afb33(0x2c7)]=_0x21344b[_0x4afb33(0x58e)](_0x4afb33(0x4c5)+'l>',_0x5a25d4['label'])+_0x21344b[_0x4afb33(0x596)];continue;case'3':_0x17b7ab['set'](_0x1a06fd['id'],_0x2a74e6);continue;case'4':_0x32d736[_0x4afb33(0x43d)+_0x4afb33(0x55d)+'d'](_0x2a74e6);continue;case'5':_0x2a74e6[_0x4afb33(0x535)+'ck']=(_0x582927=>()=>_0x549cc3(_0x582927))(_0xe8053['id']);continue;case'6':_0x2a74e6[_0x4afb33(0x247)]=_0x30b5d5[_0x4afb33(0x432)];continue;case'7':_0x2a74e6[_0x4afb33(0x282)+'Name']=_0x4afb33(0x5e8)+'b';continue;}break;}}}_0x10c15b['OttmD'](_0x23e95f,()=>{var _0x7ebc6=_0x483728,_0x5a92c0={'vYOwD':_0x7ebc6(0x3e5)+_0x7ebc6(0x2a8)+'8x90-'+_0x7ebc6(0x1c7)+'t','IAMOI':_0x10c15b['kaCfb'],'TCCrm':_0x7ebc6(0x271),'mMyyW':function(_0x646a28,_0x2d0ca2){return _0x646a28===_0x2d0ca2;},'unPWy':_0x10c15b['BdvzJ'],'zpNap':_0x10c15b['RpROG'],'mzSAl':function(_0xfbdb37,_0x3a9bed){var _0x59ae03=_0x7ebc6;return _0x10c15b[_0x59ae03(0x645)](_0xfbdb37,_0x3a9bed);},'zacaI':_0x10c15b[_0x7ebc6(0x310)],'EZRKV':_0x10c15b['yFKLx'],'ucHrZ':_0x7ebc6(0x424)+_0x7ebc6(0x6d2)+_0x7ebc6(0x2cf)+_0x7ebc6(0x619)+'tem-u'+_0x7ebc6(0x389)+_0x7ebc6(0x3dc)+'if','xLpvG':function(_0x140218,_0x20c0cc){return _0x10c15b['VwxyS'](_0x140218,_0x20c0cc);},'Bbhnl':function(_0x5dd0fe,_0x1fec80){return _0x5dd0fe+_0x1fec80;},'EGCiW':function(_0x3195e5,_0x935d46){return _0x3195e5*_0x935d46;},'bBeYP':function(_0x1f3d22,_0x271da7){return _0x10c15b['dbpGo'](_0x1f3d22,_0x271da7);},'ykrSs':function(_0x2131bb,_0x14a879){return _0x2131bb-_0x14a879;},'nxrtZ':function(_0x2f5c2a,_0x44b994){return _0x10c15b['eJcLW'](_0x2f5c2a,_0x44b994);},'drszu':function(_0x4b42c1,_0x2a1a00){return _0x10c15b['zPBKr'](_0x4b42c1,_0x2a1a00);},'DgRDr':function(_0x89f14,_0x2de360){return _0x89f14-_0x2de360;},'Liobk':function(_0x55bc10,_0xc50e2b,_0x415f46,_0x156d05,_0x33e944,_0x3e252b,_0x17491c){return _0x55bc10(_0xc50e2b,_0x415f46,_0x156d05,_0x33e944,_0x3e252b,_0x17491c);},'ZJqvB':'KeyS','gLgYQ':function(_0x224d84,_0x1161af){var _0x4a5f50=_0x7ebc6;return _0x10c15b[_0x4a5f50(0x37c)](_0x224d84,_0x1161af);},'MAFNI':function(_0x47fcfd,_0x39d71f){return _0x47fcfd*_0x39d71f;},'OHQro':function(_0x59fe17,_0x26b7c2){return _0x59fe17+_0x26b7c2;},'xGbXg':function(_0x1fd90e,_0x26e806){var _0x7f40dd=_0x7ebc6;return _0x10c15b[_0x7f40dd(0x352)](_0x1fd90e,_0x26e806);},'xdVsT':_0x10c15b[_0x7ebc6(0x196)],'hAfzf':_0x10c15b[_0x7ebc6(0x58b)],'hcbmJ':_0x7ebc6(0x469),'fJgdp':function(_0x51d6d7,_0x4ab8a1){return _0x51d6d7(_0x4ab8a1);},'UFkYd':_0x10c15b['EaNzU'],'QsaWh':_0x7ebc6(0x571),'zRPye':function(_0x272f8e,_0x5ccc66,_0x168099){return _0x272f8e(_0x5ccc66,_0x168099);},'EVPLj':_0x10c15b['tfAzP'],'jBRWz':function(_0x5874ea,_0x7b0a38){return _0x5874ea+_0x7b0a38;},'Zejut':_0x10c15b['NgKoB'],'pOzgz':_0x10c15b[_0x7ebc6(0x3bc)],'bwMoB':_0x7ebc6(0x291)+'255,1'+_0x7ebc6(0x313)+'0,0.6'+')','vjsnl':function(_0xa7673e,_0x31e259){var _0x534154=_0x7ebc6;return _0x10c15b[_0x534154(0x508)](_0xa7673e,_0x31e259);},'pTuQI':function(_0x24e101,_0x440a11){return _0x24e101(_0x440a11);},'zOOny':function(_0x3fd164,_0x20bbb4){var _0x29ca38=_0x7ebc6;return _0x10c15b[_0x29ca38(0x352)](_0x3fd164,_0x20bbb4);},'SUTMe':function(_0x225ccd,_0x400aad){return _0x225ccd*_0x400aad;},'NjEep':'div','fXAHm':_0x7ebc6(0x657),'kYPuQ':_0x10c15b[_0x7ebc6(0x31b)],'VBKYu':_0x10c15b[_0x7ebc6(0x22c)],'MDGiA':_0x7ebc6(0x5bc)+_0x7ebc6(0x2a3),'SFneg':function(_0x21559e){return _0x21559e();},'KfyCb':_0x10c15b[_0x7ebc6(0x301)],'KrWCO':function(_0x144956,_0x2d519a){return _0x144956!==_0x2d519a;},'zAccO':function(_0x43e913,_0x839691){var _0x5871f2=_0x7ebc6;return _0x10c15b[_0x5871f2(0x72b)](_0x43e913,_0x839691);},'Ehrmf':'sk-ca'+'rd-he'+'ad','wYnYF':_0x10c15b[_0x7ebc6(0x228)],'BWfWt':'stron'+'g','enUuB':_0x10c15b[_0x7ebc6(0x2b1)],'vWYxM':_0x10c15b[_0x7ebc6(0x3ab)],'VjXxQ':_0x7ebc6(0x709)+_0x7ebc6(0x223),'mBUzs':_0x10c15b[_0x7ebc6(0x1b3)],'baEyQ':_0x10c15b[_0x7ebc6(0x62d)],'aiXoV':function(_0x2904d7){return _0x10c15b['ZrDdm'](_0x2904d7);},'RFZAs':function(_0x32eabd){var _0x29a6b0=_0x7ebc6;return _0x10c15b[_0x29a6b0(0x623)](_0x32eabd);},'OMvGV':'5|4|0'+'|3|2|'+'6|1','gZfHt':_0x10c15b[_0x7ebc6(0x32a)],'nYyeM':_0x10c15b[_0x7ebc6(0x55c)],'yUsfD':_0x7ebc6(0x498)+'up','aNTAt':function(_0x293372){return _0x293372();},'VLXev':'LSQIx','MZKWr':function(_0xcc190d){return _0xcc190d();},'JNvOy':function(_0x4941e1,_0x5bc82d,_0x38780f){return _0x4941e1(_0x5bc82d,_0x38780f);},'DhehP':_0x10c15b[_0x7ebc6(0x53a)],'qRGXK':'cLBLl','rlHwR':function(_0x3de2fe){return _0x3de2fe();},'OWrHM':_0x10c15b[_0x7ebc6(0x723)],'niGGY':function(_0x2774b1){return _0x2774b1();},'nPkGR':_0x7ebc6(0x6ed),'WNTmr':_0x10c15b[_0x7ebc6(0x6bd)],'ZnwLi':function(_0x620c9a,_0x5a34de){var _0x4b7a13=_0x7ebc6;return _0x10c15b[_0x4b7a13(0x5c9)](_0x620c9a,_0x5a34de);},'rsMPG':_0x10c15b['jASqD'],'sYTcC':function(_0x58fece,_0x4bd7ce){return _0x58fece===_0x4bd7ce;},'XwvYG':'kxeAR','SJlhw':_0x10c15b[_0x7ebc6(0x1cd)],'KHSex':function(_0x15fdfb){return _0x15fdfb();},'GRtWB':function(_0x4d4b35,_0x125726){return _0x4d4b35!=_0x125726;}};if(_0x9365b3['adblo'+'ck']){if(_0x10c15b[_0x7ebc6(0x463)]==='dsKJa')try{_0x398b15['enabl'+'ed']=!!_0x3c6f5b;}catch(_0x48979c){}else _0x10c15b[_0x7ebc6(0x708)](setInterval,()=>{var _0x1e9dac=_0x7ebc6;try{for(var _0x55592a of['kour-'+'io_30'+_0x1e9dac(0x35f)+_0x1e9dac(0x41a)+'nt',_0x5a92c0[_0x1e9dac(0x408)],_0x5a92c0['IAMOI'],'fulls'+'creen'+_0x1e9dac(0x59a)+'s']){if(_0x5a92c0['TCCrm']===_0x1e9dac(0x386)){_0x54c24b[_0x1e9dac(0x3aa)+'oaded']=!!_0x43bf9e[_0x1e9dac(0x532)+'Insta'+'nce'];try{var _0xdc0a60=0x1*-0x11a7+0x1575+-0x2*0x1e7;for(var _0x4f24ae in _0x13e42f){if(_0x57a7ec[_0x4f24ae]&&_0x52201b[_0x4f24ae][_0x1e9dac(0x1c2)+'ed'])_0xdc0a60++;}_0x3c2000['hooks'+'Ok']=_0xdc0a60;}catch(_0x6bdb85){}}else{var _0x43cfd7=document['getEl'+_0x1e9dac(0x2c8)+_0x1e9dac(0x456)](_0x55592a);if(_0x43cfd7&&_0x5a92c0['mMyyW'](_0x55592a,_0x5a92c0['unPWy'])){var _0x810681=_0x43cfd7[_0x1e9dac(0x2f9)+'ren'];for(var _0xcb8566=0x2246+0x64f+-0xd87*0x3;_0xcb8566<_0x810681['lengt'+'h'];_0xcb8566++){if(_0x810681[_0xcb8566]['id']&&_0x810681[_0xcb8566]['id'][_0x1e9dac(0x712)+'Of']('kour-'+_0x1e9dac(0x42e))===0x2*-0xc0b+-0x23*-0xe7+-0x13*0x65)_0x810681[_0xcb8566][_0x1e9dac(0x66e)]['displ'+'ay']='none';}}else{if(_0x43cfd7)_0x43cfd7[_0x1e9dac(0x66e)][_0x1e9dac(0x2fb)+'ay']='none';}}}}catch(_0x2a53a6){}},-0x13*0x101+-0x1e3b+0x391e);}var _0x885c47=document[_0x7ebc6(0x24c)+_0x7ebc6(0x2f4)+'ent'](_0x7ebc6(0x4dd)+'s');_0x885c47[_0x7ebc6(0x66e)]['cssTe'+'xt']=_0x10c15b[_0x7ebc6(0x2d7)];var _0x311f22=_0x885c47[_0x7ebc6(0x5f7)+_0x7ebc6(0x3e6)]('2d');function _0x1fa588(){var _0x79213e=_0x7ebc6;try{if(_0x5a92c0['mzSAl']('whZYZ',_0x79213e(0x218))){var _0x56ea31=document[_0x79213e(0x4db)+_0x79213e(0x3d1)+'Eleme'+'nt'],_0x393cca=_0x56ea31&&_0x56ea31['tagNa'+'me']!==_0x79213e(0x19e)+'S'?_0x56ea31:document[_0x79213e(0x621)]||document[_0x79213e(0x2e7)+_0x79213e(0x6c6)+_0x79213e(0x2c8)];if(_0x885c47['paren'+'tNode']!==_0x393cca)_0x393cca['appen'+_0x79213e(0x55d)+'d'](_0x885c47);}else _0x12c875['enabl'+'ed']=![];}catch(_0x556b06){try{if(_0x79213e(0x65a)===_0x5a92c0[_0x79213e(0x2c6)])document['body']['appen'+_0x79213e(0x55d)+'d'](_0x885c47);else try{_0x31798e[_0x79213e(0x71b)+'em'](_0x5a92c0[_0x79213e(0x3ea)],_0x14c4ad[_0x79213e(0x349)+'gify'](_0x16d76e));}catch(_0x14c004){}}catch(_0x49d081){}}}var _0x44eefa={'w':0x0,'h':0x0,'dpr':0x0};function _0x5cf92b(){var _0x451405=_0x7ebc6,_0x3dc643=window['devic'+'ePixe'+_0x451405(0x541)+'o']||0x29*-0x94+-0x61f+0x2*0xeea,_0x555cc9=window[_0x451405(0x46c)+_0x451405(0x23a)],_0x17d7f3=window['inner'+_0x451405(0x6d3)+'t'];if(_0x555cc9===_0x44eefa['w']&&_0x17d7f3===_0x44eefa['h']&&_0x10c15b[_0x451405(0x21a)](_0x3dc643,_0x44eefa[_0x451405(0x321)]))return;_0x44eefa['w']=_0x555cc9,_0x44eefa['h']=_0x17d7f3,_0x44eefa['dpr']=_0x3dc643,_0x885c47['width']=Math['round'](_0x555cc9*_0x3dc643),_0x885c47[_0x451405(0x1f1)+'t']=Math[_0x451405(0x55b)](_0x17d7f3*_0x3dc643),_0x311f22['setTr'+'ansfo'+'rm'](_0x3dc643,0x1e64+-0x125b+-0xc09,0x38*0x2a+0x1cb+-0xafb,_0x3dc643,-0xc5a+0x1d*0xf1+0x1*-0xef3,0x65*-0x6+0x1a62+-0x1804);}var _0x6ab07f=-0x1*-0x5b3+0xa3d*0x1+-0xff0,_0x148472=performance[_0x7ebc6(0x5e9)](),_0x34fbee=-0x488*-0x8+0x2*-0xcb7+-0x5*0x22a;function _0x406f32(_0x23c21f){var _0x362da0=_0x7ebc6,_0x908ab1={'zHVOG':_0x362da0(0x291)+_0x362da0(0x256)+'07,15'+_0x362da0(0x425)+'5)','mrZjm':_0x362da0(0x4ae),'UqNKl':_0x362da0(0x291)+_0x362da0(0x6c0)+_0x362da0(0x656)+'0,0.8'+')','KYRLW':function(_0x2f4999,_0x31bea5){return _0x2f4999+_0x31bea5;},'VmTIb':_0x5a92c0[_0x362da0(0x705)],'TunKD':_0x5a92c0['ucHrZ'],'VMAqd':function(_0x5ad12e,_0x1452a8){return _0x5ad12e/_0x1452a8;},'pTpqh':function(_0x5ed3bc,_0x5f18a5){return _0x5ed3bc+_0x5f18a5;},'nPQwX':function(_0x241ff9,_0x38d673){return _0x241ff9+_0x38d673;}},_0x31f2d2=Number(_0x9365b3[_0x362da0(0x4ab)+'le'])||-0x16ca+0xc*-0x244+0x31fb,_0x5703e2=_0x5a92c0['xLpvG'](0x22a7+0xb*0xae+-0x33b*0xd,_0x31f2d2),_0x5d01d8=_0x5a92c0[_0x362da0(0x67d)](-0x1817+0x468+0x13b3,_0x31f2d2),_0x42d634=_0x5a92c0[_0x362da0(0x56e)](_0x5703e2*(-0x1d23*-0x1+-0x1bf9*0x1+-0x127),_0x5d01d8*(0x6c4+0x1*-0x1119+0xa57)),_0x13a13d=_0x5a92c0[_0x362da0(0x56e)](_0x5a92c0['EGCiW'](_0x5703e2,-0xf3d+0x2384+-0x1444),_0x5a92c0[_0x362da0(0x293)](_0x5d01d8,-0x17*-0xb9+-0x10ae+0x11)),_0x465ec6=_0x9365b3['ksPos'],_0x11191d=_0x465ec6==='br'?_0x5a92c0['ykrSs'](_0x5a92c0['ykrSs'](_0x23c21f[_0x362da0(0x492)],-0x44*-0x43+0x7*-0xa7+-0xd2b),_0x42d634):_0x23c21f['left']+(-0x20d7+-0x279*0xa+0x39a1),_0x1af3df=_0x465ec6==='ml'?_0x5a92c0[_0x362da0(0x6ec)](_0x5a92c0[_0x362da0(0x71d)](_0x23c21f[_0x362da0(0x2b0)],_0x23c21f['heigh'+'t']/(-0x8e*-0x35+0x2704+0x16*-0x31c)),_0x13a13d/(0x137+-0x665*0x6+0x2529)):_0x5a92c0[_0x362da0(0x1fb)](_0x23c21f['botto'+'m'],_0x13a13d)-(_0x465ec6==='bl'?-0x9c8+0xe01*0x1+0x5*-0xc5:0x1733+0x24f9+0x3b96*-0x1),_0x28ca72=(_0x5537bd,_0x4c67b7,_0x2e4737,_0x281b97,_0x12419f,_0x394730,_0x55b72e)=>{var _0x36e2f6=_0x362da0;if('tFPJc'!=='EeuPJ'){var _0x20796a=_0x847292['has'](_0x4c67b7);_0x311f22['save'](),_0x311f22['begin'+_0x36e2f6(0x315)]();if(_0x311f22[_0x36e2f6(0x55b)+_0x36e2f6(0x3ec)])_0x311f22[_0x36e2f6(0x55b)+_0x36e2f6(0x3ec)](_0x2e4737,_0x281b97,_0x12419f,_0x394730,(-0x11*0x57+-0x1588+-0xdab*-0x2)*_0x31f2d2);else _0x311f22['rect'](_0x2e4737,_0x281b97,_0x12419f,_0x394730);_0x311f22[_0x36e2f6(0x511)+_0x36e2f6(0x5d8)]=_0x20796a?_0x36e2f6(0x291)+_0x36e2f6(0x256)+_0x36e2f6(0x58f)+_0x36e2f6(0x317)+'5)':'rgba('+_0x36e2f6(0x557)+_0x36e2f6(0x664)+'7)',_0x311f22[_0x36e2f6(0x74a)](),_0x311f22['lineW'+'idth']=-0x3a*-0x68+0x975*-0x2+-0x4a5,_0x311f22[_0x36e2f6(0x29d)+_0x36e2f6(0x1fa)+'e']=_0x20796a?_0x3620fe:_0x908ab1[_0x36e2f6(0x44b)],_0x311f22[_0x36e2f6(0x29d)+'e'](),_0x20796a&&(_0x311f22['shado'+_0x36e2f6(0x758)+'r']=_0x2c4ea5,_0x311f22[_0x36e2f6(0x576)+'wBlur']=-0xcfe+-0xab*0x14+0x1a68,_0x311f22['fill'](),_0x311f22['shado'+_0x36e2f6(0x3ad)]=0x2*-0x437+-0x163d+0x1eab),_0x311f22[_0x36e2f6(0x511)+'tyle']=_0x20796a?_0x908ab1['mrZjm']:_0x908ab1[_0x36e2f6(0x225)],_0x311f22[_0x36e2f6(0x55e)+'lign']='cente'+'r',_0x311f22[_0x36e2f6(0x5ed)+'aseli'+'ne']=_0x36e2f6(0x357)+'e',_0x311f22[_0x36e2f6(0x678)]=_0x908ab1['KYRLW'](_0x908ab1[_0x36e2f6(0x654)],Math[_0x36e2f6(0x55b)]((0x4*0x940+-0xe30+0xb62*-0x2)*_0x31f2d2))+_0x908ab1['TunKD'],_0x311f22[_0x36e2f6(0x276)+_0x36e2f6(0x752)](_0x5537bd,_0x2e4737+_0x12419f/(0x1d4d*0x1+0x14*-0x185+0x119),_0x281b97+_0x908ab1['VMAqd'](_0x394730,0x14b*-0x2+-0x5c7*-0x6+-0x66a*0x5)-(_0x55b72e?(-0xeb8+-0x2387*-0x1+-0x14ca)*_0x31f2d2:-0x9be*0x4+-0x14c9+0x1*0x3bc1)),_0x55b72e&&(_0x311f22[_0x36e2f6(0x678)]=_0x908ab1[_0x36e2f6(0x1ef)]('600\x20',Math[_0x36e2f6(0x55b)]((-0x25b+-0xf43+0x11a7)*_0x31f2d2))+('px\x20ui'+_0x36e2f6(0x6d2)+'-seri'+_0x36e2f6(0x619)+'tem-u'+_0x36e2f6(0x389)+_0x36e2f6(0x3dc)+'if'),_0x311f22[_0x36e2f6(0x511)+'tyle']=_0x20796a?'#fff':'rgba('+'255,2'+_0x36e2f6(0x656)+_0x36e2f6(0x254)+'5)',_0x311f22['fillT'+'ext'](_0x55b72e,_0x908ab1[_0x36e2f6(0x30f)](_0x2e4737,_0x908ab1[_0x36e2f6(0x61a)](_0x12419f,0x9cc+0x5fc+-0xfc6)),_0x908ab1['pTpqh'](_0x908ab1[_0x36e2f6(0x2a6)](_0x281b97,_0x394730/(-0x1ee*0x4+-0x4f*-0x2f+-0x5*0x15b)),(0x14c6+0x658+-0xd8b*0x2)*_0x31f2d2))),_0x311f22[_0x36e2f6(0x625)+'re']();}else try{_0x466ba7[_0x36e2f6(0x621)]['appen'+'dChil'+'d'](_0x563589);}catch(_0x2f0097){}};_0x28ca72('W','KeyW',_0x5a92c0[_0x362da0(0x71d)](_0x11191d+_0x5703e2,_0x5d01d8),_0x1af3df,_0x5703e2,_0x5703e2),_0x28ca72('A','KeyA',_0x11191d,_0x1af3df+_0x5703e2+_0x5d01d8,_0x5703e2,_0x5703e2),_0x5a92c0[_0x362da0(0x586)](_0x28ca72,'S',_0x5a92c0[_0x362da0(0x3e9)],_0x5a92c0[_0x362da0(0x71d)](_0x11191d,_0x5703e2)+_0x5d01d8,_0x5a92c0['gLgYQ'](_0x1af3df+_0x5703e2,_0x5d01d8),_0x5703e2,_0x5703e2),_0x28ca72('D',_0x362da0(0x36d),_0x11191d+_0x5a92c0[_0x362da0(0x211)](_0x5a92c0[_0x362da0(0x1c4)](_0x5703e2,_0x5d01d8),-0x1*-0x14a1+0x1ca4+0x1*-0x3143),_0x5a92c0['Bbhnl'](_0x1af3df+_0x5703e2,_0x5d01d8),_0x5703e2,_0x5703e2);var _0x396a5e=(_0x42d634-_0x5d01d8)/(0xff3+-0x1ce2+-0x1*-0xcf1),_0x21b40b=_0x1af3df+_0x5a92c0[_0x362da0(0x300)](_0x5703e2,_0x5d01d8)*(-0x407*-0x2+-0x5*0x315+0x75d);_0x28ca72('LMB',_0x5a92c0['xdVsT'],_0x11191d,_0x21b40b,_0x396a5e,_0x5703e2,_0x9365b3[_0x362da0(0x5e7)]?_0x513ab3(-0x4a3+-0x1*-0xc95+-0x7f1*0x1)+_0x5a92c0[_0x362da0(0x553)]:''),_0x28ca72(_0x5a92c0['hcbmJ'],'mouse'+'3',_0x5a92c0[_0x362da0(0x1c4)](_0x11191d+_0x396a5e,_0x5d01d8),_0x21b40b,_0x396a5e,_0x5703e2,_0x9365b3['ksCps']?_0x5a92c0[_0x362da0(0x71d)](_0x5a92c0['fJgdp'](_0x513ab3,-0x201b*0x1+-0xd94*-0x1+-0x2*-0x945),_0x362da0(0x412)):''),_0x5a92c0['Liobk'](_0x28ca72,'','Space',_0x11191d,_0x21b40b+_0x5703e2+_0x5d01d8,_0x42d634,_0x5a92c0['MAFNI'](_0x5703e2,0x4*0x47c+0x25bf+-0xb23*0x5+0.45));}function _0x2f2a39(_0x360c34){var _0x52bdbf=_0x7ebc6,_0x541a68=(_0x52bdbf(0x516)+_0x52bdbf(0x34a)+_0x52bdbf(0x1da)+'12|13'+_0x52bdbf(0x19d)+_0x52bdbf(0x365)+_0x52bdbf(0x749)+'|7|8|'+_0x52bdbf(0x309)+_0x52bdbf(0x6ea)+_0x52bdbf(0x694)+_0x52bdbf(0x28c)+'4')['split']('|'),_0x3ad3c0=0x6e+-0x181b+0x17ad;while(!![]){switch(_0x541a68[_0x3ad3c0++]){case'0':_0x311f22[_0x52bdbf(0x4ec)+_0x52bdbf(0x315)]();continue;case'1':_0x311f22['strok'+_0x52bdbf(0x1fa)+'e']=_0x238f13;continue;case'2':var _0x1115f8=_0x360c34[_0x52bdbf(0x5c3)]/(-0x4ff+0x7dd+-0x2dc),_0x27e51e=_0x10c15b[_0x52bdbf(0x46b)](_0x360c34['heigh'+'t'],-0x102f+-0x1a0f*0x1+-0x2a40*-0x1);continue;case'3':_0x311f22['begin'+_0x52bdbf(0x315)]();continue;case'4':_0x311f22['shado'+_0x52bdbf(0x3ad)]=0x1f18*0x1+-0x1*-0xaff+-0x2a11;continue;case'5':_0x311f22['fill']();continue;case'6':_0x311f22[_0x52bdbf(0x609)+'o'](_0x10c15b[_0x52bdbf(0x675)](_0x10c15b[_0x52bdbf(0x3dd)](_0x1115f8,_0x4309ae),_0x550820),_0x27e51e);continue;case'7':_0x311f22[_0x52bdbf(0x3a0)+'o'](_0x10c15b[_0x52bdbf(0x565)](_0x1115f8+_0x4309ae,_0x550820),_0x27e51e);continue;case'8':_0x311f22[_0x52bdbf(0x609)+'o'](_0x1115f8,_0x27e51e-_0x4309ae-_0x550820);continue;case'9':var _0x238f13=/^#[0-9a-f]{6}$/i[_0x52bdbf(0x663)](_0x9365b3[_0x52bdbf(0x502)+'or'])?_0x9365b3['chCol'+'or']:'#ff6b'+'9d';continue;case'10':_0x311f22['lineT'+'o'](_0x10c15b['vVXgg'](_0x1115f8,_0x4309ae),_0x27e51e);continue;case'11':_0x311f22['moveT'+'o'](_0x1115f8,_0x10c15b['OzmUo'](_0x27e51e,_0x4309ae));continue;case'12':_0x311f22['lineW'+_0x52bdbf(0x43b)]=Math['max'](-0x44*-0x4c+-0x3*0x9d2+0x947+0.5,_0x10c15b['VwxyS'](-0x26f6+0x19f+-0x2559*-0x1,_0x42916f));continue;case'13':_0x311f22['shado'+_0x52bdbf(0x758)+'r']=_0x238f13;continue;case'14':_0x311f22['resto'+'re']();continue;case'15':_0x311f22[_0x52bdbf(0x35b)](_0x1115f8,_0x27e51e,_0x10c15b[_0x52bdbf(0x20b)](0x3*0xf+-0x67d+0x651+0.6000000000000001,_0x42916f),0x1*0x1ca9+0x19cc*-0x1+0x1*-0x2dd,Math['PI']*(-0x54f+0x1b1*0x1+0x3a0));continue;case'16':_0x311f22[_0x52bdbf(0x511)+_0x52bdbf(0x5d8)]=_0x238f13;continue;case'17':var _0x4309ae=_0x10c15b[_0x52bdbf(0x255)](0x242b+0xafc+0x1*-0x2f21,_0x42916f),_0x550820=_0x10c15b[_0x52bdbf(0x255)](-0x182+-0xe7e+0x1008,_0x42916f);continue;case'18':_0x311f22[_0x52bdbf(0x609)+'o'](_0x1115f8+_0x4309ae,_0x27e51e);continue;case'19':var _0x42916f=Number(_0x9365b3[_0x52bdbf(0x67b)+'e'])||-0x239*0x11+-0x3*0xa11+0x43fd;continue;case'20':_0x311f22[_0x52bdbf(0x555)]();continue;case'21':_0x311f22['lineT'+'o'](_0x1115f8,_0x27e51e-_0x4309ae);continue;case'22':_0x311f22[_0x52bdbf(0x29d)+'e']();continue;case'23':_0x311f22[_0x52bdbf(0x3a0)+'o'](_0x1115f8,_0x10c15b[_0x52bdbf(0x3e7)](_0x27e51e+_0x4309ae,_0x550820));continue;}break;}}function _0x5e28cc(_0x1455e3){var _0x2bf755=_0x7ebc6;_0x311f22['save'](),_0x311f22[_0x2bf755(0x678)]=_0x5a92c0['UFkYd'],_0x311f22['textA'+_0x2bf755(0x42d)]=_0x5a92c0['QsaWh'],_0x311f22[_0x2bf755(0x5ed)+_0x2bf755(0x47a)+'ne']=_0x2bf755(0x2b0);var _0x4705a9=-0x9*-0x3fb+0x257f*-0x1+0x1d8,_0x124f1f=0x1f94+0xccc+-0x2*0x162a,_0x215ac1=(_0x188aab,_0x24e528)=>{var _0x4f033b=_0x2bf755;_0x311f22[_0x4f033b(0x511)+_0x4f033b(0x5d8)]=_0x24e528||'rgba('+_0x4f033b(0x6c0)+_0x4f033b(0x656)+'0,0.7'+'5)',_0x311f22[_0x4f033b(0x276)+_0x4f033b(0x752)](_0x188aab,_0x124f1f,_0x4705a9),_0x4705a9+=0x5*-0xf3+0x1cb6+-0x17e7;};_0x5a92c0['zRPye'](_0x215ac1,_0x2bf755(0x55a)+_0x2bf755(0x468)+_0x2bf755(0x435)+'1',_0x5a92c0[_0x2bf755(0x2c1)]);if(_0x9365b3['fps'])_0x215ac1(_0x5a92c0['jBRWz'](_0x34fbee,_0x5a92c0['Zejut']));if(!_0x1454a8[_0x2bf755(0x3aa)+'oaded'])_0x215ac1(_0x5a92c0[_0x2bf755(0x338)],_0x5a92c0[_0x2bf755(0x65b)]);_0x311f22[_0x2bf755(0x625)+'re']();}function _0x5ddb56(){var _0x587a71=_0x7ebc6,_0x434943={'pyZYB':function(_0x1e103d,_0x4fd80a){var _0x5d081d=_0x3607;return _0x10c15b[_0x5d081d(0x575)](_0x1e103d,_0x4fd80a);},'AcBQR':function(_0x47196c,_0x1cc95c){return _0x47196c/_0x1cc95c;},'ymSqS':function(_0x2e33fb){return _0x2e33fb();}};if(_0x587a71(0x2b4)===_0x587a71(0x3be))_0x442bd0['appen'+_0x587a71(0x55d)+'d'](_0x821942);else{requestAnimationFrame(_0x5ddb56),_0x6ab07f++;var _0x41b0ca=performance['now']();if(_0x10c15b[_0x587a71(0x33f)](_0x41b0ca,_0x148472)>=0x2*-0xd61+-0xa43+0x38b*0xb){if(_0x10c15b[_0x587a71(0x391)](_0x10c15b[_0x587a71(0x340)],_0x587a71(0x404))){_0x344f22(_0x760710),_0x4cccdd++;var _0x2516db=_0x5d03e2['now']();_0x434943[_0x587a71(0x34d)](_0x2516db-_0x18373a,-0x108e+-0x2*-0xcf1+-0xec*0x8)&&(_0x50e0bb=_0x14fbb4[_0x587a71(0x55b)](_0x434943['AcBQR'](_0x5be793*(0x1c5f+0x1*0x7bf+-0x2036),_0x2516db-_0x4925ea)),_0x18f20e=-0x6e4+0x1*0x7f1+-0x10d,_0x580297=_0x2516db);_0x434943[_0x587a71(0x4e2)](_0x39a857),_0x4d67f4(),_0x49d3e7[_0x587a71(0x701)+'Rect'](0x97*0xd+0x1a39+0xc*-0x2d3,-0x3*0x5f7+0x1*0x1681+-0x49c,_0x166a89['w'],_0x42522e['h']);var _0x28c078={'left':0x0,'top':0x0,'right':_0x40781a['w'],'bottom':_0x19e533['h'],'width':_0x7de447['w'],'height':_0x45f506['h']};if(_0x158bdf[_0x587a71(0x61f)+_0x587a71(0x630)])_0x14eb7a(_0x28c078);if(_0x7c1c62[_0x587a71(0x4a3)+_0x587a71(0x696)])_0x898da8(_0x28c078);_0x45be42(_0x28c078);}else _0x34fbee=Math['round'](_0x10c15b[_0x587a71(0x354)](_0x10c15b[_0x587a71(0x255)](_0x6ab07f,0xbe2+0x19d1+0x29*-0xd3),_0x10c15b[_0x587a71(0x3dd)](_0x41b0ca,_0x148472))),_0x6ab07f=0x1efc+0x6a5+-0x25a1,_0x148472=_0x41b0ca;}_0x5cf92b(),_0x1fa588(),_0x311f22['clear'+_0x587a71(0x3ec)](-0x377+0x3b*0x91+0x12*-0x1aa,-0x2548+0xc06+0xca1*0x2,_0x44eefa['w'],_0x44eefa['h']);var _0x279e83={'left':0x0,'top':0x0,'right':_0x44eefa['w'],'bottom':_0x44eefa['h'],'width':_0x44eefa['w'],'height':_0x44eefa['h']};if(_0x9365b3['cross'+_0x587a71(0x630)])_0x2f2a39(_0x279e83);if(_0x9365b3['keyst'+_0x587a71(0x696)])_0x10c15b[_0x587a71(0x5c9)](_0x406f32,_0x279e83);_0x10c15b['qQbGH'](_0x5e28cc,_0x279e83);}}var _0xb2939c=document[_0x7ebc6(0x24c)+'eElem'+_0x7ebc6(0x19c)](_0x7ebc6(0x414));_0xb2939c['id']=_0x10c15b['Qkffr'],_0xb2939c[_0x7ebc6(0x66e)]['cssTe'+'xt']=_0x7ebc6(0x37f)+_0x7ebc6(0x477)+_0x7ebc6(0x45c)+'inset'+_0x7ebc6(0x6f3)+_0x7ebc6(0x712)+_0x7ebc6(0x40e)+'48364'+'7;poi'+_0x7ebc6(0x213)+_0x7ebc6(0x711)+_0x7ebc6(0x593)+'e;';var _0x2ea1b6=_0xb2939c[_0x7ebc6(0x370)+'hShad'+'ow']({'mode':_0x10c15b[_0x7ebc6(0x4f3)]});(document['body']||document[_0x7ebc6(0x2e7)+'entEl'+_0x7ebc6(0x2c8)])[_0x7ebc6(0x43d)+_0x7ebc6(0x55d)+'d'](_0xb2939c);var _0x4e9130=![],_0x155375={};try{_0x155375=JSON['parse'](localStorage[_0x7ebc6(0x3ef)+'em']('sakur'+'a.kou'+_0x7ebc6(0x669)+'v1')||'{}');}catch(_0x24f5f3){}function _0x579533(){var _0x108e9b=_0x7ebc6;if(_0x108e9b(0x3c6)!==_0x10c15b[_0x108e9b(0x528)])_0x390037[_0x108e9b(0x71b)+'em'](_0x108e9b(0x1d7)+_0x108e9b(0x348)+'r.v1',_0x41cfd6['strin'+_0x108e9b(0x21f)](_0x4b72d6));else try{localStorage[_0x108e9b(0x71b)+'em'](_0x108e9b(0x1d7)+'a.kou'+'r.ui.'+'v1',JSON[_0x108e9b(0x349)+_0x108e9b(0x21f)](_0x155375));}catch(_0x5c21b6){}}function _0x487329(_0x2d12f6,_0x139ee7){var _0x35c886=_0x7ebc6,_0x340dd4=document[_0x35c886(0x24c)+'eElem'+_0x35c886(0x19c)](_0x35c886(0x387)+'n');return _0x340dd4[_0x35c886(0x1cb)]=_0x10c15b['WxVQb'],_0x340dd4['class'+_0x35c886(0x415)]='sk-sw'+'itch',_0x340dd4[_0x35c886(0x63f)+_0x35c886(0x27a)+'te'](_0x35c886(0x273),'switc'+'h'),_0x340dd4[_0x35c886(0x63f)+_0x35c886(0x27a)+'te'](_0x35c886(0x3fc)+'check'+'ed',String(!!_0x2d12f6)),_0x340dd4[_0x35c886(0x535)+'ck']=_0x5a6157=>{var _0x36bdd5=_0x35c886;_0x5a6157[_0x36bdd5(0x1e1)+_0x36bdd5(0x252)+'ation']();var _0x4e4ead=_0x340dd4[_0x36bdd5(0x6eb)+'tribu'+'te'](_0x36bdd5(0x3fc)+_0x36bdd5(0x230)+'ed')!==_0x36bdd5(0x57c);_0x340dd4['setAt'+_0x36bdd5(0x27a)+'te'](_0x36bdd5(0x3fc)+'check'+'ed',_0x5a92c0[_0x36bdd5(0x6d5)](String,_0x4e4ead)),_0x5a92c0[_0x36bdd5(0x5ac)](_0x139ee7,_0x4e4ead);},_0x340dd4;}function _0x516b60(_0x29071f,_0x2307aa,_0x1b536b,_0x53521d,_0x2c0d3c){var _0x333d29=_0x7ebc6,_0x4e0b8e=document['creat'+'eElem'+_0x333d29(0x19c)](_0x5a92c0[_0x333d29(0x735)]);_0x4e0b8e[_0x333d29(0x282)+'Name']='sk-ra'+'nge';var _0x1843a4=document[_0x333d29(0x24c)+_0x333d29(0x2f4)+_0x333d29(0x19c)]('input');_0x1843a4[_0x333d29(0x1cb)]=_0x5a92c0['fXAHm'],_0x1843a4[_0x333d29(0x282)+_0x333d29(0x415)]=_0x333d29(0x73f)+_0x333d29(0x489),_0x1843a4[_0x333d29(0x49b)]=_0x2307aa,_0x1843a4[_0x333d29(0x3b2)]=_0x1b536b,_0x1843a4['step']=_0x53521d,_0x1843a4['value']=_0x29071f;var _0x8c10ed=document[_0x333d29(0x24c)+'eElem'+_0x333d29(0x19c)](_0x5a92c0['kYPuQ']);_0x8c10ed[_0x333d29(0x282)+'Name']='sk-va'+'l',_0x8c10ed[_0x333d29(0x2bc)+_0x333d29(0x2ea)+'t']=_0x5a92c0[_0x333d29(0x32f)](String,_0x29071f);var _0x19d96c=()=>{var _0x3b6ccc=_0x333d29;_0x8c10ed[_0x3b6ccc(0x2bc)+'onten'+'t']=String(_0x1843a4['value']),_0x4e0b8e['style'][_0x3b6ccc(0x686)+'opert'+'y']('--p',_0x5a92c0[_0x3b6ccc(0x259)](_0x5a92c0['SUTMe']((_0x1843a4[_0x3b6ccc(0x57f)]-_0x2307aa)/(_0x1b536b-_0x2307aa),0xb2d*-0x1+-0x4f*0x43+0x203e),'%'));};return _0x1843a4['oninp'+'ut']=()=>{_0x19d96c(),_0x2c0d3c(Number(_0x1843a4['value']));},_0x19d96c(),_0x4e0b8e[_0x333d29(0x43d)+'d'](_0x1843a4,_0x8c10ed),_0x4e0b8e;}function _0x2da850(_0x370094,_0x2771f0){var _0x420eac=_0x7ebc6,_0x5c86fd=document[_0x420eac(0x24c)+'eElem'+_0x420eac(0x19c)](_0x420eac(0x665));return _0x5c86fd[_0x420eac(0x1cb)]=_0x5a92c0[_0x420eac(0x45e)],_0x5c86fd[_0x420eac(0x282)+_0x420eac(0x415)]=_0x5a92c0['MDGiA'],_0x5c86fd[_0x420eac(0x57f)]=/^#[0-9a-f]{6}$/i[_0x420eac(0x663)](_0x370094)?_0x370094:_0x5a92c0['EVPLj'],_0x5c86fd[_0x420eac(0x52b)+'ut']=()=>_0x2771f0(_0x5c86fd[_0x420eac(0x57f)]),_0x5c86fd;}function _0x263a31(_0x2d95ee,_0x3134fb,_0x2aea0a){var _0x5ab209=_0x7ebc6,_0x3c373c=document['creat'+'eElem'+_0x5ab209(0x19c)](_0x10c15b[_0x5ab209(0x6ca)]);_0x3c373c['class'+'Name']=_0x10c15b['TZYpd'];for(var [_0x2aea33,_0x2d7eef]of _0x3134fb){if(_0x5ab209(0x39b)===_0x5ab209(0x39b)){var _0x4cf34c=document['creat'+'eElem'+_0x5ab209(0x19c)]('optio'+'n');_0x4cf34c[_0x5ab209(0x57f)]=_0x2aea33,_0x4cf34c[_0x5ab209(0x2bc)+'onten'+'t']=_0x2d7eef,_0x3c373c['appen'+_0x5ab209(0x55d)+'d'](_0x4cf34c);}else _0x1813f1[_0x5ab209(0x455)+_0x5ab209(0x69f)+_0x5ab209(0x2c4)](),_0x5a92c0[_0x5ab209(0x3cc)](_0x3f049d);}return _0x3c373c[_0x5ab209(0x57f)]=_0x2d95ee,_0x3c373c['oncha'+_0x5ab209(0x583)]=()=>_0x2aea0a(_0x3c373c['value']),_0x3c373c;}function _0x2f5fce(_0x190c2c,_0x392166){var _0x536886=_0x7ebc6,_0x2649cd=(_0x536886(0x3ca)+_0x536886(0x32c)+'4')[_0x536886(0x4a0)]('|'),_0x3f2ddd=0x1*-0x599+-0x1*0x1247+-0x10*-0x17e;while(!![]){switch(_0x2649cd[_0x3f2ddd++]){case'0':_0x36420f['class'+_0x536886(0x415)]=_0x5a92c0[_0x536886(0x2e1)];continue;case'1':var _0x36420f=document['creat'+_0x536886(0x2f4)+_0x536886(0x19c)]('butto'+'n');continue;case'2':_0x36420f['oncli'+'ck']=_0x452a96=>{var _0x5b876d=_0x536886;_0x452a96['stopP'+_0x5b876d(0x252)+'ation'](),_0x392166();};continue;case'3':_0x36420f['type']=_0x536886(0x387)+'n';continue;case'4':return _0x36420f;case'5':_0x36420f[_0x536886(0x2bc)+_0x536886(0x2ea)+'t']=_0x190c2c;continue;}break;}}function _0x423247(_0x341ed0,_0x1fe974,_0x354e0c){var _0x59ad4b=_0x7ebc6,_0x34be1b={'TkLGo':_0x59ad4b(0x540)},_0xa825b3=document[_0x59ad4b(0x24c)+'eElem'+_0x59ad4b(0x19c)]('div');_0xa825b3[_0x59ad4b(0x282)+_0x59ad4b(0x415)]=_0x59ad4b(0x648)+'l';var _0x3a3869=document['creat'+'eElem'+_0x59ad4b(0x19c)](_0x10c15b[_0x59ad4b(0x31b)]);_0x3a3869['class'+_0x59ad4b(0x415)]=_0x10c15b[_0x59ad4b(0x60c)],_0x3a3869[_0x59ad4b(0x2bc)+'onten'+'t']=_0x341ed0;if(_0x1fe974){if(_0x10c15b[_0x59ad4b(0x20d)](_0x59ad4b(0x588),_0x59ad4b(0x588))){var _0x12f8c6=document[_0x59ad4b(0x24c)+_0x59ad4b(0x2f4)+_0x59ad4b(0x19c)](_0x10c15b[_0x59ad4b(0x57e)]);_0x12f8c6['class'+_0x59ad4b(0x415)]=_0x59ad4b(0x65c)+'nt',_0x12f8c6[_0x59ad4b(0x2bc)+'onten'+'t']=_0x1fe974,_0x3a3869['appen'+'dChil'+'d'](_0x12f8c6);}else try{var _0x4a6079=new _0x3f1130(_0x5e8f24)[_0x59ad4b(0x262)+_0x59ad4b(0x4ac)](_0x415125,_0x34be1b[_0x59ad4b(0x2ee)]);return _0x4a6079?_0x4a6079['val']():-0x106f+0xf15+0x15a;}catch(_0x32a472){return 0x24a5+-0x12*0x7+0x2427*-0x1;}}return _0xa825b3['appen'+'d'](_0x3a3869,_0x354e0c),_0xa825b3;}function _0x25554d(_0x5a704e,_0x1a3b40){var _0x1b5e63=_0x7ebc6,_0x44aba7=document['creat'+'eElem'+_0x1b5e63(0x19c)](_0x1b5e63(0x414));return _0x44aba7['class'+'Name']=_0x10c15b[_0x1b5e63(0x34c)](_0x1b5e63(0x1a6)+'te',_0x1a3b40?'\x20err':''),_0x44aba7['textC'+_0x1b5e63(0x2ea)+'t']=_0x5a704e,_0x44aba7;}function _0x3c83d1(_0x4219b7,_0x1cdcba,_0x89d7d0,_0x4e64c2,_0x2b40cf){var _0xd839cf=_0x7ebc6,_0x2a4e77=document[_0xd839cf(0x24c)+_0xd839cf(0x2f4)+_0xd839cf(0x19c)](_0x5a92c0[_0xd839cf(0x735)]);_0x2a4e77['class'+_0xd839cf(0x415)]=_0x5a92c0['zAccO']('sk-ca'+'rd',_0x89d7d0?_0xd839cf(0x268):'');var _0x3b6750=document[_0xd839cf(0x24c)+'eElem'+'ent'](_0xd839cf(0x414));_0x3b6750[_0xd839cf(0x282)+_0xd839cf(0x415)]=_0x5a92c0['Ehrmf'];var _0x1bfbf7=document[_0xd839cf(0x24c)+'eElem'+'ent'](_0x5a92c0[_0xd839cf(0x735)]);_0x1bfbf7['class'+_0xd839cf(0x415)]=_0x5a92c0[_0xd839cf(0x512)];var _0x516e40=document['creat'+_0xd839cf(0x2f4)+_0xd839cf(0x19c)](_0x5a92c0[_0xd839cf(0x606)]);_0x516e40['textC'+'onten'+'t']=_0x4219b7,_0x1bfbf7['appen'+'dChil'+'d'](_0x516e40);if(_0x4e64c2){if(_0x5a92c0[_0xd839cf(0x640)](_0x5a92c0[_0xd839cf(0x5a2)],_0x5a92c0['vWYxM'])){var _0x34ec29=_0x5a92c0['zRPye'](_0x487329,_0x89d7d0,_0x2fa5f7=>{var _0x580ef4=_0xd839cf;_0x2a4e77[_0x580ef4(0x282)+_0x580ef4(0x1fd)][_0x580ef4(0x5dc)+'e']('on',_0x2fa5f7),_0x4e64c2(_0x2fa5f7);});_0x3b6750['appen'+'d'](_0x1bfbf7,_0x34ec29);}else _0x2c5487[_0xd839cf(0x1e1)+_0xd839cf(0x252)+'ation'](),_0x10eff3();}else{if(_0xd839cf(0x342)==='tgzhf'){var _0x406bd0=_0x5dfd8a[_0xd839cf(0x242)+'refix']({'typeName':_0x509afb,'methodName':_0x5038a9,'params':_0x591993,'returnType':_0x25fd77},_0x56dd10);return _0x406bd0[_0xd839cf(0x32b)+'ed']=_0x5a92c0['KrWCO'](_0xd5669,![]),_0x5a180a[_0x28d8f2]=_0x406bd0,_0x4452f7[_0xd839cf(0x27e)+_0xd839cf(0x307)]++,_0x406bd0;}else _0x3b6750[_0xd839cf(0x43d)+_0xd839cf(0x55d)+'d'](_0x1bfbf7);}_0x2a4e77[_0xd839cf(0x43d)+_0xd839cf(0x55d)+'d'](_0x3b6750);if(_0x2b40cf&&_0x2b40cf['lengt'+'h']){var _0x82cf15=document[_0xd839cf(0x24c)+'eElem'+'ent'](_0x5a92c0['NjEep']);_0x82cf15[_0xd839cf(0x282)+_0xd839cf(0x415)]=_0x5a92c0[_0xd839cf(0x69a)];var _0x2a9b0b=document['creat'+'eElem'+_0xd839cf(0x19c)]('div');_0x2a9b0b['class'+'Name']='sk-md'+_0xd839cf(0x4f8),_0x2a9b0b[_0xd839cf(0x2bc)+_0xd839cf(0x2ea)+'t']=_0x1cdcba,_0x82cf15[_0xd839cf(0x43d)+'dChil'+'d'](_0x2a9b0b);for(var _0x31d2da of _0x2b40cf)_0x82cf15['appen'+_0xd839cf(0x55d)+'d'](_0x31d2da);_0x2a4e77[_0xd839cf(0x43d)+'dChil'+'d'](_0x82cf15);}return _0x2a4e77;}var _0x15cb4f=[{'id':_0x7ebc6(0x5e5)+'t','label':_0x10c15b[_0x7ebc6(0x6ce)]},{'id':_0x7ebc6(0x1c8),'label':_0x10c15b[_0x7ebc6(0x756)]},{'id':_0x10c15b['FIWer'],'label':'Visua'+'l'},{'id':_0x10c15b['kEmxz'],'label':_0x10c15b[_0x7ebc6(0x57b)]},{'id':_0x7ebc6(0x5e0),'label':'Safet'+'y'}];function _0x4bb85b(){var _0x4a72ac=_0x7ebc6,_0xcd2053={'ySTVt':function(_0x507dd7,_0x372861){return _0x507dd7(_0x372861);},'ANfFK':function(_0x4433d9,_0x523c49){return _0x4433d9===_0x523c49;},'hpFjl':_0x4a72ac(0x1c6)+'Engin'+'e.App'+_0x4a72ac(0x608)+_0x4a72ac(0x688)};if(_0x10c15b[_0x4a72ac(0x68b)](_0x4a72ac(0x72c),'xANQV')){var _0x2ef751=('0|1|4'+'|2|3')['split']('|'),_0x3e599e=-0x1112+0x720+0x9f2;while(!![]){switch(_0x2ef751[_0x3e599e++]){case'0':var _0x3cd88a=_0x474a67['hookP'+_0x4a72ac(0x329)+'x']({'typeName':_0xd10415,'methodName':_0x5b7d21,'params':_0x16024b,'returnType':_0x96bb8d},_0x3a255c);continue;case'1':_0x3cd88a[_0x4a72ac(0x32b)+'ed']=_0x18d15d!==![];continue;case'2':_0x246d1e[_0x4a72ac(0x27e)+_0x4a72ac(0x307)]++;continue;case'3':return _0x3cd88a;case'4':_0x17ceb4[_0x4a945f]=_0x3cd88a;continue;}break;}}else{var _0x553060=_0x1454a8[_0x4a72ac(0x719)+_0x4a72ac(0x1be)]?'SAFE\x20'+_0x4a72ac(0x627)+_0x4a72ac(0x2bb)+_0x4a72ac(0x4ff)+_0x4a72ac(0x1b5)+_0x4a72ac(0x52d)+_0x4a72ac(0x63c)+'(relo'+_0x4a72ac(0x288)+_0x4a72ac(0x5fd)+')':_0x1454a8[_0x4a72ac(0x5d7)]?_0x10c15b[_0x4a72ac(0x3e7)](_0x10c15b[_0x4a72ac(0x5d9)](_0x4a72ac(0x47e)+_0x4a72ac(0x46f)+'\x20',_0x1454a8[_0x4a72ac(0x27e)+_0x4a72ac(0x307)]?_0x10c15b['zKDqN'](_0x10c15b[_0x4a72ac(0x352)](_0x1454a8[_0x4a72ac(0x27e)+'Ok'],'/')+_0x1454a8[_0x4a72ac(0x27e)+'Total'],_0x10c15b[_0x4a72ac(0x61d)]):_0x10c15b['ULsON']),'\x20|\x20ga'+'me\x20')+(_0x1454a8[_0x4a72ac(0x3aa)+_0x4a72ac(0x459)]?_0x4a72ac(0x3c3)+'d':_0x4a72ac(0x507)+'ng')+(_0x4a72ac(0x202)+'ooter'+'\x20')+(_0x1454a8[_0x4a72ac(0x22b)+_0x4a72ac(0x1ca)]?_0x4a72ac(0x577):_0x4a72ac(0x572))+_0x10c15b[_0x4a72ac(0x330)]+(_0x1454a8[_0x4a72ac(0x6a7)+_0x4a72ac(0x518)]?_0x10c15b['SfLzv']:'none'):_0x10c15b[_0x4a72ac(0x736)];if(_0x1454a8['lastE'+_0x4a72ac(0x46d)])_0x553060+=_0x4a72ac(0x748)+_0x4a72ac(0x54b)+_0x1454a8[_0x4a72ac(0x1c1)+_0x4a72ac(0x46d)];return _0x3c83d1(_0x4a72ac(0x1f7)+'s',_0x553060,_0x1454a8['uwmk'],null,[_0x423247(_0x4a72ac(0x249)+_0x4a72ac(0x4cc)+_0x4a72ac(0x4d4),_0x10c15b[_0x4a72ac(0x6df)],_0x10c15b[_0x4a72ac(0x5c1)](_0x2f5fce,'Apply',()=>{var _0xf1b050=_0x4a72ac,_0x406c34={'dOQlE':function(_0x241fcb,_0x5539aa){return _0x241fcb!==_0x5539aa;},'aWYhx':_0xf1b050(0x57c),'DGDEk':function(_0x1058cb,_0x3636e7){return _0xcd2053['ySTVt'](_0x1058cb,_0x3636e7);},'ebHfV':'[saku'+'ra-ko'+_0xf1b050(0x4c2)+_0xf1b050(0x1dc)+'eg\x20fa'+_0xf1b050(0x2e2)};if(_0xcd2053[_0xf1b050(0x45f)](_0xf1b050(0x226),_0xf1b050(0x359))){_0x106be9[_0xf1b050(0x1e1)+_0xf1b050(0x252)+'ation']();var _0xc9da4d=_0x406c34['dOQlE'](_0x17b02b['getAt'+'tribu'+'te']('aria-'+_0xf1b050(0x230)+'ed'),_0x406c34[_0xf1b050(0x5b9)]);_0x3627af[_0xf1b050(0x63f)+'tribu'+'te'](_0xf1b050(0x3fc)+'check'+'ed',_0x2d063f(_0xc9da4d)),_0x406c34[_0xf1b050(0x50e)](_0x1f0830,_0xc9da4d);}else try{if(_0xf1b050(0x6fe)===_0xf1b050(0x6fe)){if(_0x417699)_0x417699[_0xf1b050(0x201)](_0xcd2053['hpFjl'],_0xf1b050(0x31a)+'arget'+_0xf1b050(0x346)+_0xf1b050(0x674),[-0x1c1b+-0x3f0+0x20fb]);}else return _0xc6a570['warn'](_0x406c34['ebHfV'],_0x884c26,_0x37f9b8&&_0x4b1175['messa'+'ge']),null;}catch(_0xe416d2){}}))]);}}function _0x51a380(_0xec06c9){var _0x13e745=_0x7ebc6,_0x572b86={'nxFcX':function(_0x1af03b){return _0x10c15b['ZrDdm'](_0x1af03b);},'HOiNV':function(_0x5d282f,_0x10a3a7,_0x45b5ab){return _0x5d282f(_0x10a3a7,_0x45b5ab);},'aBSZI':_0x13e745(0x291)+'255,2'+'35,24'+'0,0.7'+'5)','TGQmt':'hnhdY','IJTXc':_0x10c15b[_0x13e745(0x4b1)],'XDAos':function(_0x51e863){return _0x51e863();},'BUOeJ':function(_0x11a917,_0x9de22e){var _0x438aaa=_0x13e745;return _0x10c15b[_0x438aaa(0x451)](_0x11a917,_0x9de22e);},'xiFBr':_0x13e745(0x238),'qKKpK':function(_0x5b7ca9){return _0x5b7ca9();},'Nmuia':_0x13e745(0x605),'DUAjY':function(_0x8e5149,_0x50056b){return _0x10c15b['FbqQG'](_0x8e5149,_0x50056b);},'Xfgic':_0x10c15b['tNeRZ'],'YvZjY':function(_0xfe1620,_0x54af2c){return _0xfe1620===_0x54af2c;},'foqxm':_0x13e745(0x2c5),'YsobM':function(_0x28a8d7){return _0x28a8d7();}};if(_0xec06c9===_0x10c15b['IEfau'])return[_0x10c15b[_0x13e745(0x623)](_0x4bb85b),_0x10c15b['kpCMt'](_0x3c83d1,'God\x20M'+_0x13e745(0x1be),_0x10c15b[_0x13e745(0x214)],_0x9365b3['god'],_0x24dd72=>{var _0x1c9bb8=_0x13e745;_0x9365b3[_0x1c9bb8(0x3cf)]=_0x24dd72,_0xf87d5(),_0x5a92c0[_0x1c9bb8(0x305)](_0x2cb9f6,_0x5a92c0[_0x1c9bb8(0x635)],_0x24dd72),_0x2cb9f6(_0x5a92c0[_0x1c9bb8(0x51c)],_0x24dd72);},[]),_0x3c83d1(_0x13e745(0x4ba)+_0x13e745(0x4d0),_0x13e745(0x484)+_0x13e745(0x356)+_0x13e745(0x2da)+_0x13e745(0x60e)+_0x13e745(0x702)+'o\x20the'+_0x13e745(0x4ca)+_0x13e745(0x6f8)+'rings'+'\x20neve'+_0x13e745(0x4fc)+_0x13e745(0x2dc),_0x9365b3['noRec'+_0x13e745(0x66f)],_0x31c820=>{var _0x433b35=_0x13e745;_0x9365b3[_0x433b35(0x306)+'oil']=_0x31c820,_0xf87d5(),_0x2cb9f6('noRec'+_0x433b35(0x66f),_0x31c820);},[]),_0x3c83d1(_0x13e745(0x20f)+_0x13e745(0x398),_0x10c15b['Defmp'],_0x9365b3[_0x13e745(0x6a1)+'ead'],_0x1b95f1=>{var _0x2d645c=_0x13e745;_0x9365b3['noSpr'+_0x2d645c(0x560)]=_0x1b95f1,_0xf87d5();},[]),_0x10c15b['kpCMt'](_0x3c83d1,_0x13e745(0x1aa)+_0x13e745(0x325)+'\x20[EXP'+']',_0x10c15b[_0x13e745(0x1dd)],_0x9365b3[_0x13e745(0x466)+_0x13e745(0x4c8)],_0x175a88=>{var _0x2ee54f=_0x13e745;_0x9365b3['rapid'+_0x2ee54f(0x4c8)]=_0x175a88,_0x572b86[_0x2ee54f(0x209)](_0xf87d5);},[]),_0x10c15b['OHzEf'](_0x3c83d1,'Damag'+'e\x20[EX'+'P]',_0x10c15b['TzsUZ'],_0x9365b3['damag'+_0x13e745(0x245)],_0x1af29c=>{var _0x4d8b82=_0x13e745;_0x9365b3['damag'+_0x4d8b82(0x245)]=_0x1af29c,_0xf87d5();},[_0x10c15b[_0x13e745(0x517)](_0x423247,_0x13e745(0x422)+_0x13e745(0x5c4)+'ue',null,_0x516b60(_0x9365b3[_0x13e745(0x72e)+_0x13e745(0x284)+'e'],-0x18a9+-0xfeb+0x289e,0xff0+0x18e3*-0x1+0x1*0xae7,0x17*0x18f+-0x1*0x8ae+-0x1b26,_0x7bf440=>{_0x9365b3['damag'+'eValu'+'e']=_0x7bf440,_0x5a92c0['aiXoV'](_0xf87d5);}))]),_0x3c83d1('Infin'+_0x13e745(0x438)+_0x13e745(0x49d)+_0x13e745(0x26c),_0x10c15b['DbrWG'],_0x9365b3['infAm'+'moExp'],_0x12fef7=>{var _0x5cc3be=_0x13e745;_0x9365b3[_0x5cc3be(0x32d)+_0x5cc3be(0x4d7)]=_0x12fef7,_0xf87d5();},[_0x10c15b['VGYBV'](_0x25554d,'If\x20re'+'loads'+_0x13e745(0x351)+_0x13e745(0x4af)+_0x13e745(0x574)+_0x13e745(0x74e)+'creme'+_0x13e745(0x71e)+_0x13e745(0x595)+'\x20else'+'where'+'.')])];if(_0x10c15b[_0x13e745(0x620)](_0xec06c9,_0x10c15b[_0x13e745(0x622)])){if(_0x10c15b[_0x13e745(0x336)]===_0x13e745(0x4b8)){var _0x33045b={'kLFED':function(_0x47f542,_0x545e97){return _0x47f542(_0x545e97);}},_0x3dc1e2=_0x572b86[_0x13e745(0x416)](_0x519793,_0x4d4197,_0x5887ab=>{var _0x36e963=_0x13e745;_0x15e569[_0x36e963(0x282)+_0x36e963(0x1fd)]['toggl'+'e']('on',_0x5887ab),_0x33045b[_0x36e963(0x4f9)](_0x1c8f7d,_0x5887ab);});_0x358c8a[_0x13e745(0x43d)+'d'](_0x3e7a37,_0x3dc1e2);}else return[_0x10c15b[_0x13e745(0x2cd)](_0x3c83d1,_0x13e745(0x636),_0x13e745(0x2e9)+_0x13e745(0x4b3)+_0x13e745(0x589)+_0x13e745(0x61e)+_0x13e745(0x41b)+_0x13e745(0x241)+'\x20limi'+_0x13e745(0x5a6)+_0x13e745(0x1b1)+_0x13e745(0x637)+'ation'+'.',_0x10c15b[_0x13e745(0x568)](_0x9365b3['speed'+_0x13e745(0x2fa)],-0x165f+-0x83*0x48+0x3b9b),null,[_0x10c15b[_0x13e745(0x517)](_0x423247,_0x13e745(0x636)+'\x20%',_0x10c15b['ygZjo'],_0x516b60(_0x9365b3[_0x13e745(0x241)+'Pct'],-0x119d*0x1+0x23*0x57+0x5ea,0x3fd*0x5+-0x1218+-0xad,0x1d2*-0x1+0x1*-0x19be+0x1b95,_0x32fa13=>{var _0x257c47=_0x13e745;_0x9365b3[_0x257c47(0x241)+_0x257c47(0x2fa)]=_0x32fa13,_0xf87d5();}))]),_0x3c83d1(_0x13e745(0x6bf)+'/\x20Gra'+'vity',_0x13e745(0x2e9)+'s\x20Mov'+'ement'+_0x13e745(0x6e1)+_0x13e745(0x279)+_0x13e745(0x345)+_0x13e745(0x4b6)+_0x13e745(0x5a4)+_0x13e745(0x65e)+_0x13e745(0x2ed),_0x10c15b['hjBJu'](_0x9365b3[_0x13e745(0x6c2)+'ct'],-0x1*0x81d+0x3*-0xa62+0x27a7)||_0x9365b3[_0x13e745(0x5a4)+'tyPct']!==0x1f8c+-0x326*0x5+-0xf6a,null,[_0x10c15b['YrbYC'](_0x423247,_0x10c15b['ZsMQT'],null,_0x10c15b[_0x13e745(0x513)](_0x516b60,_0x9365b3['jumpP'+'ct'],-0x8e9+0x2180+-0x1865,0x1e8+0xe27+-0xee3,0x97a+-0xb18*-0x2+-0x1fa5,_0x4fe124=>{var _0x5db978=_0x13e745;_0x9365b3[_0x5db978(0x6c2)+'ct']=_0x4fe124,_0xf87d5();})),_0x10c15b['YrbYC'](_0x423247,'Gravi'+'ty\x20%',_0x10c15b[_0x13e745(0x470)],_0x516b60(_0x9365b3[_0x13e745(0x5a4)+_0x13e745(0x759)],-0x1*0x11c9+0x1a40+-0x86d,0x249b+0x3*0x60f+0x12*-0x300,-0x104a+-0x1f06+0x2f55,_0x3158b6=>{var _0x8218d8=_0x13e745;_0x572b86['TGQmt']!==_0x572b86['IJTXc']?(_0x9365b3[_0x8218d8(0x5a4)+_0x8218d8(0x759)]=_0x3158b6,_0x572b86[_0x8218d8(0x2ce)](_0xf87d5)):(_0x515fc2[_0x8218d8(0x511)+'tyle']=_0x2d4449||_0x572b86[_0x8218d8(0x2ef)],_0x3dce3a[_0x8218d8(0x276)+'ext'](_0x8adf36,_0x39d6e5,_0x2131b0),_0x5e021a+=-0x18*-0xdf+-0x26b2+-0x8ed*-0x2);}))]),_0x10c15b['RMumU'](_0x3c83d1,_0x10c15b[_0x13e745(0x25e)],_0x13e745(0x556)+'s\x20Mov'+'ement'+_0x13e745(0x1e7)+'JumpT'+_0x13e745(0x547)+_0x13e745(0x683)+'\x20jump'+_0x13e745(0x550)+_0x13e745(0x585)+'never'+_0x13e745(0x1a4)+_0x13e745(0x6b4),_0x9365b3['bhop'],_0x2759b7=>{var _0x458d8b=_0x13e745;_0x9365b3[_0x458d8b(0x687)]=_0x2759b7,_0x5a92c0[_0x458d8b(0x730)](_0xf87d5);},[])];}if(_0xec06c9===_0x13e745(0x471)+'l'){if(_0x10c15b[_0x13e745(0x568)](_0x13e745(0x2d3),'mXBhu')){var _0x1bf9cd=_0x5a92c0[_0x13e745(0x6d9)][_0x13e745(0x4a0)]('|'),_0x129a10=0x1014+0x176b+-0x277f;while(!![]){switch(_0x1bf9cd[_0x129a10++]){case'0':_0x45036d[_0x13e745(0x6f6)+_0x13e745(0x26e)+'stene'+'r'](_0x5a92c0['gZfHt'],_0x7f45b1,!![]);continue;case'1':_0x2452ff[_0x13e745(0x6f6)+_0x13e745(0x26e)+_0x13e745(0x695)+'r']('blur',_0x32690a);continue;case'2':_0x44b024['addEv'+'entLi'+_0x13e745(0x695)+'r']('mouse'+_0x13e745(0x2d0),_0x27dc55,!![]);continue;case'3':_0x40a066['addEv'+'entLi'+_0x13e745(0x695)+'r'](_0x5a92c0[_0x13e745(0x6dc)],_0x76bda5,!![]);continue;case'4':_0x310e90=!![];continue;case'5':if(_0x19d10c)return;continue;case'6':_0xc891[_0x13e745(0x6f6)+_0x13e745(0x26e)+'stene'+'r'](_0x5a92c0[_0x13e745(0x716)],_0x24ab1f,!![]);continue;}break;}}else return[_0x10c15b['kpCMt'](_0x3c83d1,_0x13e745(0x250)+'rokes','WASD\x20'+_0x13e745(0x6d8)+'/RMB\x20'+_0x13e745(0x4d1)+_0x13e745(0x628)+_0x13e745(0x53e)+'.',_0x9365b3['keyst'+'rokes'],_0x2c1831=>{var _0x291f99=_0x13e745;_0x9365b3['keyst'+'rokes']=_0x2c1831,_0x572b86[_0x291f99(0x2ce)](_0xf87d5);},[_0x10c15b[_0x13e745(0x28b)](_0x423247,'Posit'+_0x13e745(0x688),null,_0x263a31(_0x9365b3[_0x13e745(0x54a)],[['bl',_0x13e745(0x3a1)+_0x13e745(0x217)+'t'],['br',_0x13e745(0x3a1)+_0x13e745(0x3a9)+'ht'],['ml',_0x13e745(0x400)+_0x13e745(0x357)+'e']],_0x2d1f4d=>{var _0x55ea41=_0x13e745;_0x9365b3[_0x55ea41(0x54a)]=_0x2d1f4d,_0x5a92c0[_0x55ea41(0x34f)](_0xf87d5);})),_0x423247('Size',null,_0x10c15b['RMumU'](_0x516b60,_0x9365b3[_0x13e745(0x4ab)+'le'],-0x2162+0x2447+-0x13*0x27+0.6,0x307*-0x5+-0x1f47+0x2e6b+0.6000000000000001,0x1d99+0x477*-0x6+-0x2cf+0.05,_0x1cbe55=>{var _0x2f85a6=_0x13e745;if('xMoOw'===_0x2f85a6(0x570)){if(_0x3bf110['__sak'+_0x2f85a6(0x5f1)])return;_0x13538c[_0x2f85a6(0x3d2)](_0x2f85a6(0x498)+(_0x37e43d[_0x2f85a6(0x387)+'n']+(0x2231+0x2066+0xb19*-0x6)));var _0xcee1d1=_0x173b4b[_0x4324a9[_0x2f85a6(0x387)+'n']+(0x204+-0xa77+0x874)];if(_0xcee1d1){_0xcee1d1['push'](_0x4837c3[_0x2f85a6(0x5e9)]());if(_0x572b86[_0x2f85a6(0x655)](_0xcee1d1[_0x2f85a6(0x3c4)+'h'],0x14b*0xb+-0x780+-0x1*0x691))_0xcee1d1['shift']();}}else _0x9365b3[_0x2f85a6(0x4ab)+'le']=_0x1cbe55,_0xf87d5();})),_0x10c15b['NnGhx'](_0x423247,_0x10c15b[_0x13e745(0x6be)],null,_0x487329(_0x9365b3[_0x13e745(0x5e7)],_0x283a09=>{var _0x2d93e0=_0x13e745;if(_0x572b86[_0x2d93e0(0x590)]===_0x2d93e0(0x715)){if(_0x54cb06[_0x59daeb]&&_0x1c8e41[_0x4ca247][_0x2d93e0(0x1c2)+'ed'])_0x1a48d6++;}else _0x9365b3[_0x2d93e0(0x5e7)]=_0x283a09,_0x572b86[_0x2d93e0(0x5dd)](_0xf87d5);}))]),_0x3c83d1(_0x13e745(0x335)+'hair',_0x13e745(0x393)+'m\x20cen'+'ter\x20c'+_0x13e745(0x33c)+_0x13e745(0x454),_0x9365b3[_0x13e745(0x61f)+_0x13e745(0x630)],_0x53dab1=>{var _0x3c898d=_0x13e745;if('PdCXO'!==_0x572b86[_0x3c898d(0x423)])_0x9365b3['cross'+_0x3c898d(0x630)]=_0x53dab1,_0xf87d5();else return _0x186ca0[_0x3c898d(0x638)]('[saku'+'ra-ko'+_0x3c898d(0x4c2)+'ook\x20r'+_0x3c898d(0x4e8)+_0x3c898d(0x2e2),_0x32e9e3,_0x485ac0&&_0x3e8eeb['messa'+'ge']),null;},[_0x423247(_0x13e745(0x5cb),null,_0x10c15b['OHzEf'](_0x516b60,_0x9365b3[_0x13e745(0x67b)+'e'],0x1c30+-0x87c*0x3+-0x2bc+0.5,0x8*-0x1e2+0x251*0xd+-0xf0b+0.5,-0x187*0xb+0x10c4+0x1*0x9+0.1,_0x178c08=>{_0x9365b3['chSiz'+'e']=_0x178c08,_0xf87d5();})),_0x423247(_0x13e745(0x542),null,_0x2da850(_0x9365b3[_0x13e745(0x502)+'or'],_0x595fd2=>{var _0x23d18b=_0x13e745;_0x572b86[_0x23d18b(0x73a)](_0x572b86[_0x23d18b(0x3cb)],_0x572b86[_0x23d18b(0x3cb)])?(_0x9365b3['chCol'+'or']=_0x595fd2,_0x572b86['qKKpK'](_0xf87d5)):_0x6a9909[_0x23d18b(0x3d2)](_0x33c7af[_0x23d18b(0x54d)]);}))]),_0x10c15b[_0x13e745(0x5f6)](_0x3c83d1,_0x13e745(0x204)+_0x13e745(0x1ca),_0x10c15b['xkmTY'],_0x9365b3[_0x13e745(0x418)],null,[_0x423247(_0x13e745(0x5aa)+'ounte'+'r',null,_0x10c15b[_0x13e745(0x5c1)](_0x487329,_0x9365b3['fps'],_0x5d23cc=>{var _0xf13f43=_0x13e745;_0x9365b3[_0xf13f43(0x418)]=_0x5d23cc,_0xf87d5();})),_0x25554d(_0x10c15b[_0x13e745(0x41c)])])];}if(_0x10c15b[_0x13e745(0x620)](_0xec06c9,'misc'))return[_0x10c15b[_0x13e745(0x3ae)](_0x3c83d1,'Adblo'+'ck',_0x13e745(0x29a)+'\x20kour'+_0x13e745(0x341)+_0x13e745(0x2a7)+'er\x20sl'+'ots.',_0x9365b3[_0x13e745(0x579)+'ck'],_0x55ff59=>{var _0x2904ac=_0x13e745;_0x572b86['YvZjY'](_0x2904ac(0x28a),_0x572b86[_0x2904ac(0x69e)])?(_0x38695c[_0x2904ac(0x687)]=_0xa3c723,_0x572b86[_0x2904ac(0x209)](_0x523128)):(_0x9365b3['adblo'+'ck']=_0x55ff59,_0x572b86[_0x2904ac(0x5b3)](_0xf87d5));},[_0x10c15b['fhrkn'](_0x25554d,'Takes'+_0x13e745(0x2d1)+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x13e745(0x603)+_0x13e745(0x3b1)+'.')])];return[_0x10c15b[_0x13e745(0x513)](_0x3c83d1,_0x13e745(0x3f1)+'Mode\x20'+'(over'+'lay\x20o'+_0x13e745(0x39f),_0x10c15b['uPVER'],_0x9365b3[_0x13e745(0x719)+_0x13e745(0x1be)],_0x5bea1f=>{var _0x4037dc=_0x13e745,_0x20b2db={'HkwUM':_0x4037dc(0x3c5),'VnqYK':function(_0x299fb4,_0x1802e9,_0x3e7426,_0x15208,_0x2deacb){return _0x299fb4(_0x1802e9,_0x3e7426,_0x15208,_0x2deacb);}};'BzfhR'!==_0x5a92c0[_0x4037dc(0x52f)]?(_0x9365b3[_0x4037dc(0x719)+_0x4037dc(0x1be)]=_0x5bea1f,_0x5a92c0['SFneg'](_0xf87d5),location[_0x4037dc(0x741)+'d']()):(_0x1ecfc3(_0x4a010c,0xd9f*0x1+-0x9*-0x174+-0x1a8b,_0x20b2db[_0x4037dc(0x266)],_0x470a27),_0x69839(_0x12e5cb,0x1ab7+-0xaf*0xb+-0x5*0x3ce,_0x20b2db[_0x4037dc(0x266)],_0x1719c5),_0x20b2db[_0x4037dc(0x73e)](_0x346690,_0x27aca4,-0x12*-0x172+-0x26fd+0xd29,_0x4037dc(0x3c5),_0x554179),_0x5e3f71(_0x49233c,0xb1d+-0x1ca6+0x1*0x11bd,_0x20b2db[_0x4037dc(0x266)],_0x31c230),_0x20b2db[_0x4037dc(0x73e)](_0x5f59e2,_0x89c45f,-0x1cb2+-0x35f*0xa+0x3e84,'f32',_0x3cf3d6),_0x2fad93(_0x5f0da9,0x21f2+-0x22*0x99+-0xd80,_0x4037dc(0x3c5),_0x305b94));},[_0x25554d(_0x10c15b['EvLEa'])]),_0x10c15b[_0x13e745(0x3ae)](_0x3c83d1,_0x13e745(0x411)+_0x13e745(0x199)+'switc'+'hes','Each\x20'+_0x13e745(0x704)+_0x13e745(0x33a)+_0x13e745(0x461)+_0x13e745(0x4f4)+'tramp'+'oline'+'\x20for\x20'+'the\x20w'+_0x13e745(0x5ad)+_0x13e745(0x1c0)+'load.'+_0x13e745(0x53d)+_0x13e745(0x3b9)+'y\x20def'+_0x13e745(0x614)+'-\x20a\x20s'+_0x13e745(0x1c9)+'ure\x20t'+'hat\x20d'+'oes\x20n'+'ot\x20ma'+'tch\x20t'+'he\x20re'+_0x13e745(0x35c)+_0x13e745(0x31e)+_0x13e745(0x732)+_0x13e745(0x75a)+'nctio'+'n\x20sig'+'natur'+_0x13e745(0x67e)+_0x13e745(0x6c9)+_0x13e745(0x485)+_0x13e745(0x6d1)+_0x13e745(0x56d)+'\x20is\x20c'+'alled'+_0x13e745(0x537)+_0x13e745(0x27f)+'m\x20on\x20'+_0x13e745(0x4b9)+'t\x20a\x20t'+_0x13e745(0x192)+_0x13e745(0x741)+'d,\x20an'+'d\x20see'+'\x20whic'+'h\x20one'+'\x20your'+_0x13e745(0x5df)+_0x13e745(0x1f0)+_0x13e745(0x2e6)+'n.',_0x9365b3[_0x13e745(0x20e)+'od']||_0x9365b3[_0x13e745(0x20e)+'odDie']||_0x9365b3[_0x13e745(0x286)+'oReco'+'il']||_0x9365b3[_0x13e745(0x4fa)+_0x13e745(0x642)+'e'],_0x139d88=>{var _0x1ae0cc=_0x13e745;_0x9365b3[_0x1ae0cc(0x20e)+'od']=_0x139d88,_0x9365b3[_0x1ae0cc(0x20e)+_0x1ae0cc(0x1f9)]=_0x139d88,_0x9365b3['hookN'+'oReco'+'il']=_0x139d88,_0x9365b3[_0x1ae0cc(0x4fa)+_0x1ae0cc(0x642)+'e']=_0x139d88,_0xf87d5(),location[_0x1ae0cc(0x741)+'d']();},[_0x25554d(_0x10c15b[_0x13e745(0x1d1)]),_0x423247(_0x10c15b[_0x13e745(0x591)],null,_0x487329(_0x9365b3[_0x13e745(0x20e)+'od'],_0x4a034b=>{var _0x41cc6d=_0x13e745;_0x9365b3['hookG'+'od']=_0x4a034b,_0x5a92c0[_0x41cc6d(0x34f)](_0xf87d5);})),_0x423247('godDi'+'e\x20(OH'+'ealth'+'.Loca'+'lDie)',null,_0x487329(_0x9365b3[_0x13e745(0x20e)+'odDie'],_0xb675e8=>{var _0x50d7c6=_0x13e745;_0x9365b3[_0x50d7c6(0x20e)+_0x50d7c6(0x1f9)]=_0xb675e8,_0x5a92c0[_0x50d7c6(0x261)](_0xf87d5);})),_0x423247(_0x13e745(0x306)+_0x13e745(0x54f)+'Recoi'+'lMoti'+_0x13e745(0x6db)+'ck)',null,_0x487329(_0x9365b3[_0x13e745(0x286)+'oReco'+'il'],_0x566493=>{_0x9365b3['hookN'+'oReco'+'il']=_0x566493,_0xf87d5();})),_0x423247(_0x13e745(0x3ac)+_0x13e745(0x24b)+_0x13e745(0x215)+_0x13e745(0x4b2)+_0x13e745(0x66b)+'\x20IsGr'+'ounde'+'d)',_0x10c15b[_0x13e745(0x64b)],_0x487329(_0x9365b3['hookC'+_0x13e745(0x642)+'e'],_0xd781a3=>{var _0x28da3b=_0x13e745;_0x9365b3[_0x28da3b(0x4fa)+'aptur'+'e']=_0xd781a3,_0xf87d5();}))]),_0x10c15b['ZGoWR'](_0x3c83d1,'ACTk\x20'+_0x13e745(0x6b7)+'r',_0x10c15b[_0x13e745(0x600)],_0x9365b3[_0x13e745(0x23f)+_0x13e745(0x4fb)],_0x5b728b=>{var _0x47e214=_0x13e745;_0x9365b3[_0x47e214(0x23f)+_0x47e214(0x4fb)]=_0x5b728b,_0xf87d5();},[_0x25554d(_0x10c15b['cpHIx'],!![])]),_0x10c15b[_0x13e745(0x2df)](_0x3c83d1,_0x13e745(0x644)+'r','These'+_0x13e745(0x650)+_0x13e745(0x5fc)+_0x13e745(0x47b)+_0x13e745(0x6c4)+'e\x20tra'+_0x13e745(0x40f),!![],null,[_0x10c15b['NnGhx'](_0x423247,_0x13e745(0x63b)+_0x13e745(0x4e6)+_0x13e745(0x205)+'s',null,_0x10c15b[_0x13e745(0x263)](_0x2f5fce,_0x13e745(0x2a5),()=>{var _0x187157=_0x13e745,_0x5cd9f6={'ZkFfL':function(_0x146323,_0x1ec9b1){return _0x146323||_0x1ec9b1;},'gyLVr':_0x187157(0x2b0),'cDbNk':_0x187157(0x729)+_0x187157(0x5b8)+_0x187157(0x5d5)+'e…','HCtGn':_0x5a92c0[_0x187157(0x65b)],'WVfxT':_0x187157(0x738),'kWhxs':function(_0x21e031,_0x10d74c,_0x4f11a9){return _0x5a92c0['JNvOy'](_0x21e031,_0x10d74c,_0x4f11a9);},'RsFAs':_0x5a92c0[_0x187157(0x2c1)]};if(_0x5a92c0['DhehP']!==_0x5a92c0['qRGXK'])_0x9365b3={..._0x5cd271},_0x5a92c0[_0x187157(0x659)](_0xf87d5),location['reloa'+'d']();else{var _0x2e0bab=(_0x187157(0x533)+_0x187157(0x445)+_0x187157(0x229)+'|5|6')[_0x187157(0x4a0)]('|'),_0x5f1124=0x1*-0x1d83+0x191*0xd+0x926;while(!![]){switch(_0x2e0bab[_0x5f1124++]){case'0':_0x2fceb5['save']();continue;case'1':var _0x42ffee=-0xbf0+0x13*-0x16f+0x2759,_0x35764e=0x121f+-0xe18+-0x3fb;continue;case'2':_0x1efd25['font']=_0x187157(0x601)+'2px\x20u'+_0x187157(0x1c5)+_0x187157(0x661)+_0x187157(0x21b)+_0x187157(0x661)+'e';continue;case'3':_0x29cb78['textA'+'lign']=_0x187157(0x571);continue;case'4':_0x40dbda[_0x187157(0x5ed)+'aseli'+'ne']=_0x5cd9f6[_0x187157(0x64d)];continue;case'5':if(!_0x5b590d[_0x187157(0x3aa)+'oaded'])_0x300d53(_0x5cd9f6['cDbNk'],_0x5cd9f6[_0x187157(0x5bf)]);continue;case'6':_0x1a6f7d['resto'+'re']();continue;case'7':if(_0x5f0b48['fps'])_0x300d53(_0x195f47+_0x5cd9f6[_0x187157(0x43a)]);continue;case'8':_0x5cd9f6['kWhxs'](_0x300d53,_0x187157(0x55a)+_0x187157(0x468)+_0x187157(0x435)+'1',_0x5cd9f6[_0x187157(0x3db)]);continue;case'9':var _0x300d53=(_0x17037b,_0x5c519a)=>{var _0x282f0e=_0x187157;_0xcf1e6['fillS'+'tyle']=_0x5cd9f6['ZkFfL'](_0x5c519a,_0x282f0e(0x291)+_0x282f0e(0x6c0)+_0x282f0e(0x656)+'0,0.7'+'5)'),_0x44e619['fillT'+'ext'](_0x17037b,_0x35764e,_0x42ffee),_0x42ffee+=-0x1*-0x1c4c+0x1*0x237d+-0x3fb9;};continue;}break;}}}))])];}var _0x2be306=null;function _0x4c6e08(_0x40b6b4){var _0x4bb447=_0x7ebc6;_0x4e9130=_0x40b6b4;if(!_0x2be306){var _0x1f9bf0=document['creat'+'eElem'+_0x4bb447(0x19c)](_0x5a92c0[_0x4bb447(0x2bf)]);_0x1f9bf0[_0x4bb447(0x2bc)+_0x4bb447(0x2ea)+'t']=_0x2a122c,_0x2ea1b6['appen'+_0x4bb447(0x55d)+'d'](_0x1f9bf0),_0x2be306=_0x5a92c0[_0x4bb447(0x54e)](_0x402388),_0x2ea1b6[_0x4bb447(0x43d)+'dChil'+'d'](_0x2be306),requestAnimationFrame(()=>_0x2be306[_0x4bb447(0x282)+'List']['add']('shown'));}_0x2be306[_0x4bb447(0x282)+_0x4bb447(0x1fd)][_0x4bb447(0x5dc)+'e'](_0x5a92c0[_0x4bb447(0x48c)],_0x40b6b4);}function _0x58a686(){var _0x188931=_0x7ebc6;_0x10c15b['hVswA'](_0x188931(0x5be),_0x188931(0x5be))?_0x10c15b[_0x188931(0x662)](_0x4c6e08,!_0x4e9130):(_0x1257e2['hookG'+_0x188931(0x1f9)]=_0x3ad9e8,_0x21d00b());}function _0x402388(){var _0xbd940f=_0x7ebc6,_0x17fc65={'oyxQX':function(_0x25d9cb,_0x4f7c10){var _0x4dfd42=_0x3607;return _0x10c15b[_0x4dfd42(0x5a3)](_0x25d9cb,_0x4f7c10);},'dPcHl':_0x10c15b[_0xbd940f(0x22a)],'WAdSb':function(_0x5118b6){return _0x5118b6();},'cqVyr':'Sakur'+_0xbd940f(0x5ca)+_0xbd940f(0x2f2),'yWNxM':function(_0x113f51,_0x1dc1c6){return _0x10c15b['DNbTD'](_0x113f51,_0x1dc1c6);},'gFfbl':_0xbd940f(0x35e),'kQvfk':_0xbd940f(0x58c),'NKAuw':function(_0x1aa9bd,_0x242605){return _0x1aa9bd+_0x242605;},'ddYKh':function(_0x3b58f3,_0x42fa1f){return _0x3b58f3+_0x42fa1f;},'LcFDL':_0xbd940f(0x47e)+'bound'+'\x20','sRBBM':_0x10c15b[_0xbd940f(0x61d)],'RwtkR':'0\x20hoo'+'ks\x20ar'+_0xbd940f(0x75b)+_0xbd940f(0x1ce)+_0xbd940f(0x39a),'JAEiP':_0x10c15b[_0xbd940f(0x27c)],'tDOhn':_0xbd940f(0x577),'OClQW':_0x10c15b[_0xbd940f(0x6e7)],'FVeXT':_0xbd940f(0x47e)+'MISSI'+_0xbd940f(0x4df)+_0xbd940f(0x6de)+'ay\x20on'+_0xbd940f(0x343)+'einst'+'all\x20t'+'he\x20us'+'erscr'+'ipt)'},_0x277afc=document['creat'+'eElem'+_0xbd940f(0x19c)](_0xbd940f(0x414));_0x277afc[_0xbd940f(0x282)+_0xbd940f(0x415)]='mn-pa'+'nel';var _0x51c54d=document['creat'+'eElem'+_0xbd940f(0x19c)]('nav');_0x51c54d[_0xbd940f(0x282)+'Name']=_0x10c15b[_0xbd940f(0x737)];var _0x3e1859=document[_0xbd940f(0x24c)+_0xbd940f(0x2f4)+_0xbd940f(0x19c)](_0xbd940f(0x414));_0x3e1859[_0xbd940f(0x282)+_0xbd940f(0x415)]=_0x10c15b[_0xbd940f(0x5de)],_0x3e1859[_0xbd940f(0x46c)+'HTML']=_0xbd940f(0x682)+_0xbd940f(0x381)+'ox=\x220'+_0xbd940f(0x46a)+'\x2024\x22\x20'+'class'+'=\x22mn-'+_0xbd940f(0x4de)+_0xbd940f(0x50b)+_0xbd940f(0x303)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+'-2.5-'+'4-4.5'+_0xbd940f(0x1ff)+'5\x200-2'+_0xbd940f(0x212)+_0xbd940f(0x36a)+'\x204-4.'+_0xbd940f(0x700)+_0xbd940f(0x4e7)+_0xbd940f(0x1d4)+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+_0xbd940f(0x499)+'\x22none'+'\x22\x20str'+_0xbd940f(0x60f)+'#ff6b'+_0xbd940f(0x1ed)+_0xbd940f(0x66a)+_0xbd940f(0x448)+_0xbd940f(0x1eb)+'\x20stro'+_0xbd940f(0x52a)+_0xbd940f(0x757)+_0xbd940f(0x3f2)+_0xbd940f(0x6cb)+_0xbd940f(0x66a)+'-line'+_0xbd940f(0x4ef)+'\x22roun'+_0xbd940f(0x538)+'circl'+_0xbd940f(0x277)+_0xbd940f(0x1de)+_0xbd940f(0x22e)+'0\x22\x20r='+'\x221.5\x22'+_0xbd940f(0x327)+_0xbd940f(0x6b2)+_0xbd940f(0x475)+_0xbd940f(0x5ce)+_0xbd940f(0x413),_0x51c54d[_0xbd940f(0x43d)+_0xbd940f(0x55d)+'d'](_0x3e1859);var _0x3a48c2=document['creat'+_0xbd940f(0x2f4)+_0xbd940f(0x19c)](_0x10c15b[_0xbd940f(0x3e8)]);_0x3a48c2[_0xbd940f(0x282)+_0xbd940f(0x415)]=_0x10c15b[_0xbd940f(0x51a)];var _0x1a9275=document[_0xbd940f(0x24c)+_0xbd940f(0x2f4)+_0xbd940f(0x19c)](_0x10c15b['JDKuf']);_0x1a9275['class'+'Name']=_0xbd940f(0x444)+'p';var _0x384177=document['creat'+'eElem'+_0xbd940f(0x19c)](_0x10c15b[_0xbd940f(0x3e8)]);_0x384177[_0xbd940f(0x282)+_0xbd940f(0x415)]='mn-ti'+'tles';var _0x3ef4b8=document[_0xbd940f(0x24c)+_0xbd940f(0x2f4)+'ent']('h2');_0x3ef4b8['class'+_0xbd940f(0x415)]=_0xbd940f(0x73c),_0x3ef4b8['textC'+_0xbd940f(0x2ea)+'t']='Sakur'+_0xbd940f(0x5ca)+'r';var _0x5982e0=document[_0xbd940f(0x24c)+'eElem'+'ent'](_0x10c15b[_0xbd940f(0x57e)]);_0x5982e0[_0xbd940f(0x282)+_0xbd940f(0x415)]=_0x10c15b[_0xbd940f(0x2d6)],_0x5982e0['textC'+_0xbd940f(0x2ea)+'t']=_0x10c15b['ZBcJQ'],_0x384177[_0xbd940f(0x43d)+'d'](_0x3ef4b8,_0x5982e0);var _0x4727d8=document[_0xbd940f(0x24c)+_0xbd940f(0x2f4)+_0xbd940f(0x19c)](_0xbd940f(0x387)+'n');_0x4727d8[_0xbd940f(0x1cb)]=_0xbd940f(0x387)+'n',_0x4727d8[_0xbd940f(0x282)+_0xbd940f(0x415)]=_0x10c15b['jpPKe'],_0x4727d8['title']=_0x10c15b['gBXfd'],_0x4727d8['inner'+_0xbd940f(0x2c7)]=_0x10c15b[_0xbd940f(0x1b0)],_0x4727d8['oncli'+'ck']=()=>_0x4c6e08(![]),_0x1a9275[_0xbd940f(0x43d)+'d'](_0x384177,_0x4727d8);var _0x114810=document['creat'+_0xbd940f(0x2f4)+'ent'](_0xbd940f(0x414));_0x114810[_0xbd940f(0x282)+'Name']=_0xbd940f(0x2b9)+'ls',_0x3a48c2['appen'+'d'](_0x1a9275,_0x114810),_0x277afc['appen'+'d'](_0x51c54d,_0x3a48c2);var _0x441bb1=new Map();for(var _0x25f1e0 of _0x15cb4f){var _0x22ccf1=_0x10c15b[_0xbd940f(0x3cd)][_0xbd940f(0x4a0)]('|'),_0x5571bd=0x1ca6+-0x1d1e+-0x78*-0x1;while(!![]){switch(_0x22ccf1[_0x5571bd++]){case'0':_0x51c54d[_0xbd940f(0x43d)+'dChil'+'d'](_0x269d30);continue;case'1':_0x269d30['class'+_0xbd940f(0x415)]='mn-ta'+'b';continue;case'2':_0x441bb1[_0xbd940f(0x21e)](_0x25f1e0['id'],_0x269d30);continue;case'3':_0x269d30[_0xbd940f(0x247)]=_0x25f1e0[_0xbd940f(0x432)];continue;case'4':_0x269d30[_0xbd940f(0x1cb)]=_0x10c15b[_0xbd940f(0x527)];continue;case'5':_0x269d30[_0xbd940f(0x46c)+_0xbd940f(0x2c7)]=_0x10c15b[_0xbd940f(0x220)](_0x10c15b[_0xbd940f(0x236)](_0xbd940f(0x4c5)+'l>',_0x25f1e0['label']),_0xbd940f(0x419)+'ll>');continue;case'6':var _0x269d30=document['creat'+_0xbd940f(0x2f4)+_0xbd940f(0x19c)]('butto'+'n');continue;case'7':_0x269d30[_0xbd940f(0x535)+'ck']=(_0x35aa75=>()=>_0x438c37(_0x35aa75))(_0x25f1e0['id']);continue;}break;}}function _0x438c37(_0x3df5ae){var _0x21b400=_0xbd940f;if(_0x17fc65[_0x21b400(0x23e)](_0x17fc65[_0x21b400(0x70b)],'oHgqU'))_0x1cb4da['safeM'+_0x21b400(0x1be)]=_0x1db091,_0x136515(),_0xc64f9f[_0x21b400(0x741)+'d']();else{_0x155375[_0x21b400(0x6c7)]=_0x3df5ae,_0x17fc65[_0x21b400(0x24d)](_0x579533);var _0x3e555b=_0x15cb4f[_0x21b400(0x6ab)](_0x2ee59a=>_0x2ee59a['id']===_0x3df5ae)||_0x15cb4f[-0xe3*0xe+-0x1fd*0x5+0x165b];_0x3ef4b8['textC'+'onten'+'t']=_0x17fc65[_0x21b400(0x63d)]+_0x3e555b[_0x21b400(0x432)];for(var [_0x305b04,_0x3f161e]of _0x441bb1)_0x3f161e['class'+_0x21b400(0x1fd)][_0x21b400(0x5dc)+'e']('activ'+'e',_0x17fc65['yWNxM'](_0x305b04,_0x3df5ae));_0x114810['repla'+_0x21b400(0x68d)+'ldren'](..._0x51a380(_0x3df5ae));}}return _0x438c37(_0x155375[_0xbd940f(0x6c7)]||_0xbd940f(0x5e5)+'t'),_0x10c15b[_0xbd940f(0x439)](setInterval,()=>{var _0x43e763=_0xbd940f;if(!_0x4e9130)return;var _0x31e82d=_0x114810['child'+_0x43e763(0x37e)];for(var _0x440fca=-0x64d*-0x1+-0x2001+0x19b4;_0x440fca<_0x31e82d['lengt'+'h'];_0x440fca++){var _0x4f9aea=_0x31e82d[_0x440fca][_0x43e763(0x6c8)+'Selec'+_0x43e763(0x5ba)](_0x43e763(0x2b7)+_0x43e763(0x20c));_0x4f9aea&&(_0x4f9aea['textC'+_0x43e763(0x2ea)+'t'][_0x43e763(0x712)+'Of'](_0x17fc65[_0x43e763(0x244)])===0x772+-0x26fd+0x5*0x64f||_0x17fc65[_0x43e763(0x671)](_0x4f9aea['textC'+_0x43e763(0x2ea)+'t'][_0x43e763(0x712)+'Of'](_0x17fc65['kQvfk']),-0x1eb0+-0x75d*0x1+0xcaf*0x3))&&(_0x4f9aea['textC'+'onten'+'t']=_0x1454a8[_0x43e763(0x719)+'ode']?_0x43e763(0x290)+'MODE\x20'+_0x43e763(0x1a2)+_0x43e763(0x4ff)+'only,'+_0x43e763(0x52d)+_0x43e763(0x63c)+'(relo'+_0x43e763(0x288)+_0x43e763(0x5fd)+')':_0x1454a8['uwmk']?_0x17fc65['NKAuw'](_0x17fc65[_0x43e763(0x566)](_0x17fc65[_0x43e763(0x566)](_0x17fc65[_0x43e763(0x22d)](_0x17fc65[_0x43e763(0x684)]+(_0x1454a8[_0x43e763(0x27e)+_0x43e763(0x307)]?_0x1454a8['hooks'+'Ok']+'/'+_0x1454a8[_0x43e763(0x27e)+'Total']+_0x17fc65['sRBBM']:_0x17fc65['RwtkR'])+(_0x43e763(0x40b)+_0x43e763(0x4c1)),_0x1454a8[_0x43e763(0x3aa)+_0x43e763(0x459)]?_0x43e763(0x3c3)+'d':_0x17fc65[_0x43e763(0x57d)]),_0x43e763(0x202)+_0x43e763(0x4b7)+'\x20')+(_0x1454a8['shoot'+'ers']?_0x17fc65['tDOhn']:_0x43e763(0x572))+(_0x43e763(0x1ad)+'vemen'+'t\x20'),_0x1454a8['movem'+_0x43e763(0x518)]?_0x17fc65[_0x43e763(0x472)]:'none'),_0x1454a8[_0x43e763(0x1c1)+'rror']?_0x17fc65[_0x43e763(0x651)]+_0x1454a8['lastE'+'rror']:''):_0x17fc65[_0x43e763(0x1d6)]);}},-0x1f85+-0x5d1*-0x5+0x658),_0x277afc;}var _0x2a122c='\x0a\x20\x20\x20\x20'+':host'+'\x20{\x20al'+'l:\x20in'+_0x7ebc6(0x34e)+';\x20}\x0a\x20'+_0x7ebc6(0x447)+_0x7ebc6(0x6f5)+'-sizi'+_0x7ebc6(0x2f6)+'order'+'-box;'+'\x20marg'+_0x7ebc6(0x2a1)+';\x20fon'+'t-fam'+_0x7ebc6(0x33b)+_0x7ebc6(0x1b9)+'r\x22,\x20\x22'+_0x7ebc6(0x453)+_0x7ebc6(0x2be)+_0x7ebc6(0x707)+_0x7ebc6(0x21d)+_0x7ebc6(0x311)+_0x7ebc6(0x3dc)+_0x7ebc6(0x458)+_0x7ebc6(0x552)+_0x7ebc6(0x1e9)+_0x7ebc6(0x1f3)+_0x7ebc6(0x3af)+_0x7ebc6(0x2cb)+_0x7ebc6(0x2ff)+'olute'+';\x20rig'+_0x7ebc6(0x4d9)+_0x7ebc6(0x234)+_0x7ebc6(0x399)+'m:\x2024'+_0x7ebc6(0x690)+'idth:'+_0x7ebc6(0x3fe)+'620px'+_0x7ebc6(0x611)+_0x7ebc6(0x5b0)+'vw\x20-\x20'+_0x7ebc6(0x693)+_0x7ebc6(0x2c2)+_0x7ebc6(0x368)+'ght:\x20'+_0x7ebc6(0x6e3)+'80px,'+'\x20calc'+_0x7ebc6(0x3fd)+_0x7ebc6(0x5da)+_0x7ebc6(0x54c)+_0x7ebc6(0x685)+'\x20\x20\x20di'+'splay'+':\x20fle'+'x;\x20ga'+'p:\x2010'+_0x7ebc6(0x530)+_0x7ebc6(0x1a0)+_0x7ebc6(0x39e)+_0x7ebc6(0x1f8)+_0x7ebc6(0x5db)+'-radi'+_0x7ebc6(0x62a)+'2px;\x20'+'point'+_0x7ebc6(0x6ac)+'ents:'+_0x7ebc6(0x2c9)+';\x0a\x20\x20\x20'+_0x7ebc6(0x323)+'ckgro'+'und:\x20'+'rgba('+_0x7ebc6(0x372)+_0x7ebc6(0x6dd)+_0x7ebc6(0x724)+'backd'+_0x7ebc6(0x563)+_0x7ebc6(0x558)+':\x20blu'+_0x7ebc6(0x482)+_0x7ebc6(0x56b)+_0x7ebc6(0x1b8)+_0x7ebc6(0x65f)+'%);\x20-'+_0x7ebc6(0x1a3)+_0x7ebc6(0x4a8)+_0x7ebc6(0x3b6)+_0x7ebc6(0x6e9)+_0x7ebc6(0x233)+'lur(2'+_0x7ebc6(0x6fa)+'satur'+_0x7ebc6(0x369)+'50%);'+_0x7ebc6(0x552)+_0x7ebc6(0x5ea)+_0x7ebc6(0x6f0)+_0x7ebc6(0x390)+_0x7ebc6(0x28e)+_0x7ebc6(0x1d0)+'gba(2'+_0x7ebc6(0x231)+'5,255'+_0x7ebc6(0x431)+_0x7ebc6(0x4c3)+'et\x200\x20'+_0x7ebc6(0x61c)+_0x7ebc6(0x493)+_0x7ebc6(0x6c1)+'255,2'+_0x7ebc6(0x41e)+'5),\x200'+'\x2030px'+'\x2080px'+'\x20rgba'+'(0,0,'+_0x7ebc6(0x374)+_0x7ebc6(0x294)+_0x7ebc6(0x2e5)+_0x7ebc6(0x670)+_0x7ebc6(0x69b)+_0x7ebc6(0x314)+'sform'+':\x20tra'+_0x7ebc6(0x27d)+_0x7ebc6(0x2f1)+'px);\x20'+'point'+_0x7ebc6(0x6ac)+_0x7ebc6(0x3c1)+'\x20none'+';\x20tra'+'nsiti'+'on:\x20o'+_0x7ebc6(0x670)+'y\x20.35'+_0x7ebc6(0x289)+_0x7ebc6(0x546)+'ansfo'+_0x7ebc6(0x44a)+_0x7ebc6(0x1e8)+'bic-b'+'ezier'+_0x7ebc6(0x318)+_0x7ebc6(0x328)+_0x7ebc6(0x436)+_0x7ebc6(0x59c)+_0x7ebc6(0x6da)+_0x7ebc6(0x2ad)+_0x7ebc6(0x53c)+_0x7ebc6(0x554)+_0x7ebc6(0x629)+_0x7ebc6(0x67c)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x7ebc6(0x1e9)+'anel.'+'shown'+'\x20{\x20op'+'acity'+_0x7ebc6(0x64e)+'trans'+'form:'+_0x7ebc6(0x6e4)+_0x7ebc6(0x339)+'nter-'+_0x7ebc6(0x711)+_0x7ebc6(0x56f)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x7ebc6(0x373)+_0x7ebc6(0x525)+'\x20disp'+'lay:\x20'+'flex;'+'\x20flex'+_0x7ebc6(0x394)+'ction'+_0x7ebc6(0x4cf)+_0x7ebc6(0x52e)+_0x7ebc6(0x1e0)+'-item'+_0x7ebc6(0x460)+_0x7ebc6(0x6b8)+_0x7ebc6(0x41f)+'\x204px;'+_0x7ebc6(0x2d9)+'h:\x2062'+_0x7ebc6(0x47c)+_0x7ebc6(0x3ed)+_0x7ebc6(0x562)+_0x7ebc6(0x48a)+_0x7ebc6(0x488)+_0x7ebc6(0x409)+('0;\x20bo'+'rder-'+_0x7ebc6(0x5bb)+'s:\x2016'+_0x7ebc6(0x361)+'\x20\x20\x20\x20\x20'+'backg'+'round'+_0x7ebc6(0x2fd)+_0x7ebc6(0x1ec)+_0x7ebc6(0x2f8)+'255,.'+_0x7ebc6(0x1b4)+_0x7ebc6(0x746)+_0x7ebc6(0x576)+'w:\x20in'+_0x7ebc6(0x3bd)+_0x7ebc6(0x28e)+_0x7ebc6(0x1d0)+'gba(2'+_0x7ebc6(0x231)+'5,255'+_0x7ebc6(0x5c8)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o\x20{\x20d'+'ispla'+'y:\x20gr'+_0x7ebc6(0x433)+'lace-'+'items'+':\x20cen'+_0x7ebc6(0x434)+_0x7ebc6(0x5c3)+_0x7ebc6(0x617)+'x;\x20he'+'ight:'+_0x7ebc6(0x720)+_0x7ebc6(0x63a)+'\x20\x20\x20.m'+_0x7ebc6(0x569)+_0x7ebc6(0x4a7)+_0x7ebc6(0x2ab)+'dth:\x20'+'25px;'+_0x7ebc6(0x3b0)+_0x7ebc6(0x4d9)+'5px;\x20'+_0x7ebc6(0x501)+'low:\x20'+_0x7ebc6(0x377)+'le;\x20f'+_0x7ebc6(0x558)+':\x20dro'+_0x7ebc6(0x2cc)+_0x7ebc6(0x331)+'\x200\x204p'+'x\x20rgb'+_0x7ebc6(0x1ec)+',107,'+'157,.'+_0x7ebc6(0x613)+_0x7ebc6(0x6d6)+'\x20.mn-'+'tab\x20{'+_0x7ebc6(0x506)+_0x7ebc6(0x375)+_0x7ebc6(0x2a4)+'\x20alig'+_0x7ebc6(0x5a5)+_0x7ebc6(0x4b5)+'enter'+_0x7ebc6(0x5d3)+_0x7ebc6(0x509)+'conte'+'nt:\x20c'+_0x7ebc6(0x50a)+';\x20wid'+_0x7ebc6(0x3e2)+'2px;\x20'+_0x7ebc6(0x1f1)+'t:\x2034'+'px;\x20b'+_0x7ebc6(0x5db)+_0x7ebc6(0x4a4)+_0x7ebc6(0x26f)+_0x7ebc6(0x2b2)+_0x7ebc6(0x33d)+_0x7ebc6(0x55f)+_0x7ebc6(0x552)+'\x20\x20bac'+'kgrou'+'nd:\x20t'+_0x7ebc6(0x304)+_0x7ebc6(0x6a3)+';\x20col'+_0x7ebc6(0x59d)+_0x7ebc6(0x6e8)+_0x7ebc6(0x42f)+_0x7ebc6(0x634)+_0x7ebc6(0x4ce)+_0x7ebc6(0x29c)+_0x7ebc6(0x465)+'ointe'+'r;\x20fo'+_0x7ebc6(0x633)+_0x7ebc6(0x2b5)+'0px;\x20'+'font-'+_0x7ebc6(0x740)+_0x7ebc6(0x551)+_0x7ebc6(0x3a2)+_0x7ebc6(0x360)+_0x7ebc6(0x5e8)+_0x7ebc6(0x5e3)+_0x7ebc6(0x592)+'color'+_0x7ebc6(0x2fd)+'a(246'+_0x7ebc6(0x347)+_0x7ebc6(0x32e)+_0x7ebc6(0x1ee)+_0x7ebc6(0x552)+_0x7ebc6(0x4ea)+'ab.ac'+_0x7ebc6(0x3eb)+_0x7ebc6(0x531)+'or:\x20#'+_0x7ebc6(0x1b2)+'d;\x20ba'+'ckgro'+_0x7ebc6(0x5d4)+_0x7ebc6(0x291)+_0x7ebc6(0x256)+'07,15'+'7,.1)'+';\x20}\x0a\x20'+_0x7ebc6(0x6ee)+_0x7ebc6(0x58d)+_0x7ebc6(0x4c9)+_0x7ebc6(0x3ed)+'1;\x20mi'+_0x7ebc6(0x395)+_0x7ebc6(0x6b9)+_0x7ebc6(0x59b)+_0x7ebc6(0x626)+'\x20flex'+';\x20fle'+_0x7ebc6(0x5bd)+_0x7ebc6(0x3f0)+'n:\x20co'+'lumn;'+_0x7ebc6(0x1d8)+_0x7ebc6(0x39c)+_0x7ebc6(0x56a)+'{\x20dis'+_0x7ebc6(0x626)+_0x7ebc6(0x6f2)+_0x7ebc6(0x24f)+'gn-it'+_0x7ebc6(0x491)+_0x7ebc6(0x397)+_0x7ebc6(0x51e)+_0x7ebc6(0x3b5)+'px;\x20p'+_0x7ebc6(0x1a0)+'g:\x206p'+_0x7ebc6(0x5ff)+_0x7ebc6(0x36e)+_0x7ebc6(0x573)+'r-sel'+_0x7ebc6(0x3ce)+_0x7ebc6(0x562)+_0x7ebc6(0x1d8)+'\x20\x20.mn'+_0x7ebc6(0x4bd)+'es\x20{\x20'+_0x7ebc6(0x5e1)+'\x201;\x20m'+_0x7ebc6(0x3ba)+_0x7ebc6(0x295)+_0x7ebc6(0x3a2)+_0x7ebc6(0x360)+_0x7ebc6(0x2d2)+'{\x20fon'+_0x7ebc6(0x629)+_0x7ebc6(0x66d)+_0x7ebc6(0x47c)+'ont-w'+'eight'+':\x20650'+_0x7ebc6(0x63a)+_0x7ebc6(0x6ee)+_0x7ebc6(0x5c6)+'\x20{\x20fo'+_0x7ebc6(0x633)+_0x7ebc6(0x2b5)+'1px;\x20'+_0x7ebc6(0x312))+('ty:\x20.'+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x7ebc6(0x5fe)+'ose\x20{'+_0x7ebc6(0x506)+'lay:\x20'+_0x7ebc6(0x2b8)+_0x7ebc6(0x384)+_0x7ebc6(0x28f)+_0x7ebc6(0x4b5)+'enter'+_0x7ebc6(0x6cf)+_0x7ebc6(0x643)+_0x7ebc6(0x21c)+'heigh'+_0x7ebc6(0x490)+'px;\x20b'+_0x7ebc6(0x5db)+_0x7ebc6(0x4a4)+'borde'+_0x7ebc6(0x2b2)+'ius:\x20'+_0x7ebc6(0x21c)+_0x7ebc6(0x283)+_0x7ebc6(0x55b)+':\x20tra'+'nspar'+_0x7ebc6(0x4fd)+'color'+_0x7ebc6(0x26d)+'erit;'+_0x7ebc6(0x457)+_0x7ebc6(0x48f)+'.45;\x20'+'curso'+_0x7ebc6(0x428)+_0x7ebc6(0x6b5)+_0x7ebc6(0x63a)+'\x20\x20\x20.m'+_0x7ebc6(0x49e)+'se:ho'+'ver\x20{'+_0x7ebc6(0x457)+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x7ebc6(0x5d4)+_0x7ebc6(0x291)+'255,2'+'55,25'+_0x7ebc6(0x269)+_0x7ebc6(0x441)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20s'+_0x7ebc6(0x703)+'width'+':\x2014p'+'x;\x20he'+'ight:'+_0x7ebc6(0x587)+_0x7ebc6(0x1a9)+_0x7ebc6(0x34b)+'ne;\x20s'+'troke'+_0x7ebc6(0x232)+_0x7ebc6(0x3f9)+_0x7ebc6(0x383)+'\x20stro'+_0x7ebc6(0x40d)+'dth:\x20'+_0x7ebc6(0x739)+_0x7ebc6(0x726)+_0x7ebc6(0x697)+_0x7ebc6(0x1f5)+'ound;'+_0x7ebc6(0x1d8)+_0x7ebc6(0x39c)+_0x7ebc6(0x25c)+_0x7ebc6(0x474)+_0x7ebc6(0x3a8)+_0x7ebc6(0x237)+_0x7ebc6(0x31c)+_0x7ebc6(0x3bf)+_0x7ebc6(0x40c)+_0x7ebc6(0x280)+_0x7ebc6(0x3fb)+_0x7ebc6(0x667)+_0x7ebc6(0x2fb)+_0x7ebc6(0x624)+'rid;\x20'+_0x7ebc6(0x53f)+_0x7ebc6(0x272)+_0x7ebc6(0x3ff)+'olumn'+_0x7ebc6(0x652)+'peat('+'auto-'+'fill,'+'\x20minm'+'ax(25'+_0x7ebc6(0x6f9)+_0x7ebc6(0x3a3)+';\x20ali'+_0x7ebc6(0x578)+'ems:\x20'+_0x7ebc6(0x2de)+_0x7ebc6(0x24f)+_0x7ebc6(0x49f)+_0x7ebc6(0x443)+':\x20sta'+_0x7ebc6(0x246)+_0x7ebc6(0x1fe)+_0x7ebc6(0x1ac)+_0x7ebc6(0x337)+'ng:\x200'+_0x7ebc6(0x388)+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+_0x7ebc6(0x2e3)+'ebkit'+_0x7ebc6(0x3f4)+_0x7ebc6(0x728)+'\x20{\x20wi'+_0x7ebc6(0x295)+'8px;\x20'+_0x7ebc6(0x6d6)+'\x20.mn-'+'cols:'+':-web'+_0x7ebc6(0x5f9)+_0x7ebc6(0x745)+_0x7ebc6(0x264)+'humb\x20'+_0x7ebc6(0x4ed)+_0x7ebc6(0x4b0)+_0x7ebc6(0x30c)+'gba(2'+'55,25'+_0x7ebc6(0x646)+',.08)'+_0x7ebc6(0x515)+'der-r'+'adius'+_0x7ebc6(0x6e6)+';\x20}\x0a\x20'+_0x7ebc6(0x5cf)+_0x7ebc6(0x6a2)+_0x7ebc6(0x5ec)+_0x7ebc6(0x5db)+_0x7ebc6(0x5f3)+'us:\x201'+_0x7ebc6(0x673)+'backg'+'round'+':\x20rgb'+'a(255'+_0x7ebc6(0x2f8)+'255,.'+'025);'+_0x7ebc6(0x746)+'shado'+_0x7ebc6(0x1d5)+_0x7ebc6(0x3bd)+'\x200\x200\x20'+'1px\x20r'+_0x7ebc6(0x6e8)+_0x7ebc6(0x231)+'5,255'+_0x7ebc6(0x5c8)+';\x20}\x0a\x20'+_0x7ebc6(0x5cf)+_0x7ebc6(0x6a2)+_0x7ebc6(0x403)+_0x7ebc6(0x4ed)+_0x7ebc6(0x4b0)+_0x7ebc6(0x30c)+_0x7ebc6(0x6e8)+'55,25'+_0x7ebc6(0x646)+',.04)'+_0x7ebc6(0x505)+'-shad'+'ow:\x20i'+'nset\x20'+_0x7ebc6(0x74b)+_0x7ebc6(0x65d)+_0x7ebc6(0x291)+_0x7ebc6(0x256)+_0x7ebc6(0x58f)+'7,.28'+_0x7ebc6(0x441)+_0x7ebc6(0x360)+'sk-ca'+_0x7ebc6(0x2d5)+'ad\x20{\x20'+_0x7ebc6(0x2fb))+(_0x7ebc6(0x70d)+_0x7ebc6(0x3df)+_0x7ebc6(0x1e0)+_0x7ebc6(0x727)+'s:\x20ce'+'nter;'+_0x7ebc6(0x41f)+_0x7ebc6(0x275)+_0x7ebc6(0x48a)+_0x7ebc6(0x488)+_0x7ebc6(0x4cb)+'12px;'+_0x7ebc6(0x1d8)+'\x20\x20.sk'+'-card'+_0x7ebc6(0x4bd)+'e\x20{\x20f'+'lex:\x20'+'1;\x20mi'+_0x7ebc6(0x395)+_0x7ebc6(0x6b9)+';\x20}\x0a\x20'+_0x7ebc6(0x5cf)+'k-car'+_0x7ebc6(0x653)+_0x7ebc6(0x62e)+_0x7ebc6(0x407)+_0x7ebc6(0x3c0)+_0x7ebc6(0x629)+_0x7ebc6(0x67c)+'px;\x20f'+'ont-w'+_0x7ebc6(0x3b8)+_0x7ebc6(0x2e8)+';\x20col'+_0x7ebc6(0x59d)+_0x7ebc6(0x6e8)+'46,23'+_0x7ebc6(0x634)+',.45)'+_0x7ebc6(0x63a)+_0x7ebc6(0x5cf)+_0x7ebc6(0x6a2)+'d.on\x20'+_0x7ebc6(0x747)+_0x7ebc6(0x497)+'itle\x20'+'stron'+'g\x20{\x20c'+_0x7ebc6(0x536)+_0x7ebc6(0x1a7)+_0x7ebc6(0x476)+'}\x0a\x20\x20\x20'+_0x7ebc6(0x4bf)+_0x7ebc6(0x5eb)+_0x7ebc6(0x53b)+_0x7ebc6(0x4d6)+_0x7ebc6(0x6ad)+'2px\x201'+'0px;\x20'+_0x7ebc6(0x6d6)+_0x7ebc6(0x4bf)+_0x7ebc6(0x51b)+_0x7ebc6(0x692)+_0x7ebc6(0x633)+_0x7ebc6(0x2b5)+'1px;\x20'+_0x7ebc6(0x312)+'ty:\x20.'+_0x7ebc6(0x235)+'rgin-'+_0x7ebc6(0x399)+'m:\x206p'+_0x7ebc6(0x1a1)+_0x7ebc6(0x360)+_0x7ebc6(0x648)+_0x7ebc6(0x353)+'ispla'+_0x7ebc6(0x1bb)+'ex;\x20a'+'lign-'+_0x7ebc6(0x51f)+_0x7ebc6(0x3f7)+_0x7ebc6(0x434)+'gap:\x20'+'8px;\x20'+'paddi'+_0x7ebc6(0x48b)+_0x7ebc6(0x30a)+_0x7ebc6(0x37b)+'-size'+_0x7ebc6(0x3f8)+'5px;\x20'+_0x7ebc6(0x6d6)+'\x20.sk-'+_0x7ebc6(0x432)+'\x20{\x20fl'+_0x7ebc6(0x3a8)+';\x20col'+_0x7ebc6(0x59d)+_0x7ebc6(0x6e8)+_0x7ebc6(0x42f)+_0x7ebc6(0x634)+',.75)'+_0x7ebc6(0x63a)+'\x20\x20\x20.s'+'k-hin'+'t\x20{\x20d'+'ispla'+_0x7ebc6(0x5b7)+_0x7ebc6(0x70f)+'font-'+_0x7ebc6(0x23c)+_0x7ebc6(0x679)+';\x20opa'+_0x7ebc6(0x60a)+_0x7ebc6(0x429)+_0x7ebc6(0x6d6)+_0x7ebc6(0x4bf)+'switc'+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x7ebc6(0x4be)+_0x7ebc6(0x1e6)+'idth:'+_0x7ebc6(0x3f5)+_0x7ebc6(0x743)+_0x7ebc6(0x744)+_0x7ebc6(0x5a1)+'\x20bord'+_0x7ebc6(0x437)+';\x20bor'+_0x7ebc6(0x599)+_0x7ebc6(0x38a)+_0x7ebc6(0x67f)+_0x7ebc6(0x2ac)+'ckgro'+'und:\x20'+_0x7ebc6(0x291)+'255,2'+_0x7ebc6(0x231)+'5,.07'+');\x20cu'+'rsor:'+'\x20poin'+_0x7ebc6(0x434)+_0x7ebc6(0x5e1)+'\x20none'+_0x7ebc6(0x63a)+'\x20\x20\x20.s'+'k-swi'+_0x7ebc6(0x3e1)+_0x7ebc6(0x31d)+_0x7ebc6(0x42c)+_0x7ebc6(0x443)+':\x20\x22\x22;'+_0x7ebc6(0x71a)+'tion:'+_0x7ebc6(0x50c)+'lute;'+_0x7ebc6(0x632)+_0x7ebc6(0x6d4)+'\x20left'+':\x203px'+';\x20wid'+_0x7ebc6(0x594)+_0x7ebc6(0x6bc)+_0x7ebc6(0x3b8)+_0x7ebc6(0x396)+_0x7ebc6(0x515)+'der-r'+_0x7ebc6(0x38a)+_0x7ebc6(0x3e0)+';\x20bac'+'kgrou'+'nd:\x20r'+'gba(2'+_0x7ebc6(0x231)+'5,255'+_0x7ebc6(0x559)+_0x7ebc6(0x1f2)+_0x7ebc6(0x334)+_0x7ebc6(0x24e)+_0x7ebc6(0x544)+'2s,\x20b'+'ackgr'+_0x7ebc6(0x5f5)+_0x7ebc6(0x248)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x7ebc6(0x23b)+'h[ari'+'a-che'+_0x7ebc6(0x4a9)+_0x7ebc6(0x5c0)+_0x7ebc6(0x1ba)+_0x7ebc6(0x283)+'round'+':\x20rgb')+(_0x7ebc6(0x1ec)+_0x7ebc6(0x324)+_0x7ebc6(0x641)+_0x7ebc6(0x615)+'}\x0a\x20\x20\x20'+_0x7ebc6(0x4bf)+'switc'+_0x7ebc6(0x20a)+_0x7ebc6(0x6b0)+_0x7ebc6(0x4a9)+_0x7ebc6(0x5c0)+'\x22]::a'+_0x7ebc6(0x3e3)+_0x7ebc6(0x378)+'t:\x2015'+'px;\x20b'+_0x7ebc6(0x3c8)+'ound:'+_0x7ebc6(0x2f5)+_0x7ebc6(0x19b)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x7ebc6(0x753)+'\x20{\x20ba'+'ckgro'+_0x7ebc6(0x5d4)+'rgba('+'255,2'+_0x7ebc6(0x231)+_0x7ebc6(0x30b)+_0x7ebc6(0x5c7)+_0x7ebc6(0x5db)+':\x200;\x20'+_0x7ebc6(0x26f)+_0x7ebc6(0x2b2)+'ius:\x20'+_0x7ebc6(0x2c3)+'color'+_0x7ebc6(0x74d)+_0x7ebc6(0x3c2)+_0x7ebc6(0x48a)+_0x7ebc6(0x488)+_0x7ebc6(0x5a0)+_0x7ebc6(0x47c)+'ont-s'+'ize:\x20'+'11.5p'+'x;\x20ou'+_0x7ebc6(0x2dd)+':\x20non'+_0x7ebc6(0x3c7)+_0x7ebc6(0x545)+_0x7ebc6(0x2ba)+'inset'+'\x200\x200\x20'+'0\x201px'+_0x7ebc6(0x493)+_0x7ebc6(0x6c1)+_0x7ebc6(0x6c0)+_0x7ebc6(0x41e)+_0x7ebc6(0x292)+'\x0a\x20\x20\x20\x20'+_0x7ebc6(0x4e9)+'ield\x20'+'optio'+'n\x20{\x20b'+_0x7ebc6(0x3c8)+_0x7ebc6(0x43e)+_0x7ebc6(0x755)+'419;\x20'+_0x7ebc6(0x6d6)+'\x20.sk-'+'range'+_0x7ebc6(0x401)+'splay'+_0x7ebc6(0x5e2)+'x;\x20al'+'ign-i'+_0x7ebc6(0x582)+_0x7ebc6(0x503)+'er;\x20g'+_0x7ebc6(0x698)+_0x7ebc6(0x580)+'\x0a\x20\x20\x20\x20'+_0x7ebc6(0x243)+'lider'+_0x7ebc6(0x366)+'ebkit'+_0x7ebc6(0x40a)+'aranc'+'e:\x20no'+_0x7ebc6(0x496)+_0x7ebc6(0x49c)+'ance:'+_0x7ebc6(0x6e4)+_0x7ebc6(0x6cf)+'th:\x209'+'0px;\x20'+_0x7ebc6(0x1f1)+_0x7ebc6(0x6a0)+_0x7ebc6(0x2ac)+'ckgro'+_0x7ebc6(0x5d4)+_0x7ebc6(0x6a8)+_0x7ebc6(0x1c7)+_0x7ebc6(0x227)+_0x7ebc6(0x360)+'sk-sl'+'ider:'+':-web'+_0x7ebc6(0x5f9)+_0x7ebc6(0x239)+_0x7ebc6(0x4a6)+_0x7ebc6(0x42b)+_0x7ebc6(0x36c)+_0x7ebc6(0x253)+_0x7ebc6(0x2f7)+'\x202px;'+_0x7ebc6(0x446)+'er-ra'+'dius:'+_0x7ebc6(0x37d)+_0x7ebc6(0x67a)+'groun'+_0x7ebc6(0x376)+_0x7ebc6(0x326)+_0x7ebc6(0x3d0)+_0x7ebc6(0x2a2)+_0x7ebc6(0x1b2)+'d,\x20#f'+'f6b9d'+')\x200\x200'+'\x20/\x20va'+'r(--p'+',\x2050%'+_0x7ebc6(0x4c0)+_0x7ebc6(0x5b1)+'repea'+'t,\x20rg'+_0x7ebc6(0x6ff)+'5,255'+_0x7ebc6(0x2f8)+_0x7ebc6(0x6b6)+_0x7ebc6(0x1d8)+'\x20\x20.sk'+_0x7ebc6(0x6ef)+'er::-'+_0x7ebc6(0x1a3)+'t-sli'+_0x7ebc6(0x750)+_0x7ebc6(0x4f6)+'{\x20-we'+_0x7ebc6(0x4b4)+'appea'+'rance'+':\x20non'+'e;\x20wi'+'dth:\x20'+_0x7ebc6(0x2c3)+_0x7ebc6(0x1f1)+_0x7ebc6(0x68a)+'x;\x20ma'+'rgin-'+_0x7ebc6(0x2b3)+_0x7ebc6(0x6a6)+'\x20bord'+'er-ra'+_0x7ebc6(0x59e)+_0x7ebc6(0x6c5)+'\x20back'+'groun'+_0x7ebc6(0x5b6)+_0x7ebc6(0x43f)+_0x7ebc6(0x63a)+'\x20\x20\x20.s'+'k-val'+'\x20{\x20fo'+'nt-si'+_0x7ebc6(0x2b5)+'1px;\x20'+'font-'+_0x7ebc6(0x740)+_0x7ebc6(0x5cd)+_0x7ebc6(0x73d)+'n-wid'+_0x7ebc6(0x643)+'8px;\x20'+'text-'+'align'+_0x7ebc6(0x219)+'ht;\x20c'+'olor:'+_0x7ebc6(0x493)+_0x7ebc6(0x47f)+_0x7ebc6(0x3b3)+_0x7ebc6(0x45d)+');\x20}\x0a'+_0x7ebc6(0x360)+'sk-co'+_0x7ebc6(0x26a))+(_0x7ebc6(0x2d9)+'h:\x2034'+_0x7ebc6(0x6bc)+_0x7ebc6(0x3b8)+_0x7ebc6(0x197)+_0x7ebc6(0x358)+'rder:'+'\x200;\x20b'+'order'+'-radi'+'us:\x206'+_0x7ebc6(0x1f8)+'ackgr'+_0x7ebc6(0x43e)+_0x7ebc6(0x6e4)+';\x20pad'+'ding:'+_0x7ebc6(0x521)+'ursor'+_0x7ebc6(0x5a7)+'nter;'+'\x20}\x0a\x20\x20'+_0x7ebc6(0x706)+'-note'+'\x20{\x20fo'+'nt-si'+'ze:\x201'+_0x7ebc6(0x29e)+_0x7ebc6(0x5e6)+':\x20rgb'+'a(246'+',238,'+_0x7ebc6(0x32e)+_0x7ebc6(0x722)+_0x7ebc6(0x1a0)+_0x7ebc6(0x281)+'x\x200;\x20'+_0x7ebc6(0x6d6)+_0x7ebc6(0x4bf)+_0x7ebc6(0x473)+_0x7ebc6(0x1df)+'\x20colo'+_0x7ebc6(0x2ad)+'f7a93'+_0x7ebc6(0x63a)+_0x7ebc6(0x5cf)+'k-btn'+_0x7ebc6(0x316)+_0x7ebc6(0x4f7)+_0x7ebc6(0x658)+_0x7ebc6(0x539)+_0x7ebc6(0x2de)+_0x7ebc6(0x515)+_0x7ebc6(0x44e)+'0;\x20bo'+_0x7ebc6(0x427)+_0x7ebc6(0x5bb)+'s:\x208p'+_0x7ebc6(0x64c)+_0x7ebc6(0x4d6)+_0x7ebc6(0x396)+'\x2016px'+';\x20bac'+'kgrou'+'nd:\x20#'+'ff6b9'+'d;\x20co'+'lor:\x20'+_0x7ebc6(0x668)+_0x7ebc6(0x37b)+_0x7ebc6(0x200)+_0x7ebc6(0x3f8)+_0x7ebc6(0x240)+'font-'+'weigh'+_0x7ebc6(0x551)+'0;\x20cu'+_0x7ebc6(0x2ae)+_0x7ebc6(0x274)+_0x7ebc6(0x434)+'}\x0a\x20\x20\x20'+_0x7ebc6(0x4bf)+'btn:h'+_0x7ebc6(0x2c0)+_0x7ebc6(0x4f2)+_0x7ebc6(0x5fa)+_0x7ebc6(0x206)+_0x7ebc6(0x222)+'(1.1)'+_0x7ebc6(0x63a)+_0x7ebc6(0x2aa));window[_0x7ebc6(0x6f6)+_0x7ebc6(0x26e)+_0x7ebc6(0x695)+'r'](_0x7ebc6(0x721)+'wn',_0x36c80b=>{var _0x879221=_0x7ebc6,_0x11e027={'JLecQ':_0x5a92c0[_0x879221(0x479)],'Mbjur':function(_0x177f01,_0x3cdcd3){return _0x5a92c0['ZnwLi'](_0x177f01,_0x3cdcd3);},'eFSwV':'2|3|0'+'|6|1|'+_0x879221(0x64f),'EAwSz':_0x879221(0x387)+'n','CsiES':'switc'+'h','CUYfn':_0x5a92c0[_0x879221(0x597)],'KJFUh':function(_0x338d67){return _0x338d67();}};if(_0x5a92c0[_0x879221(0x681)](_0x5a92c0[_0x879221(0x598)],'kxeAR')){if(_0x36c80b['code']===_0x879221(0x2db)+'t'){if(_0x5a92c0['KrWCO'](_0x5a92c0['SJlhw'],'wnrMt'))_0x36c80b[_0x879221(0x455)+_0x879221(0x69f)+_0x879221(0x2c4)](),_0x5a92c0[_0x879221(0x1f6)](_0x58a686);else{var _0x3f4a0e=_0x11e027[_0x879221(0x4e1)][_0x879221(0x4a0)]('|'),_0x1b685e=0xacd+-0x8a5+-0x228;while(!![]){switch(_0x3f4a0e[_0x1b685e++]){case'0':_0x4ec60f[_0x879221(0x282)+_0x879221(0x415)]='sk-sw'+_0x879221(0x4fe);continue;case'1':_0x4ec60f[_0x879221(0x63f)+'tribu'+'te'](_0x879221(0x3fc)+'check'+'ed',_0x4f5bc2(!!_0x1ff66e));continue;case'2':var _0x4ec60f=_0x3d8d72[_0x879221(0x24c)+_0x879221(0x2f4)+_0x879221(0x19c)](_0x11e027['EAwSz']);continue;case'3':_0x4ec60f['type']=_0x879221(0x387)+'n';continue;case'4':return _0x4ec60f;case'5':_0x4ec60f[_0x879221(0x535)+'ck']=_0x5d68d5=>{var _0x5e908b=_0x879221;_0x5d68d5['stopP'+_0x5e908b(0x252)+'ation']();var _0x332104=_0x4ec60f[_0x5e908b(0x6eb)+'tribu'+'te'](_0x11e027[_0x5e908b(0x4aa)])!==_0x5e908b(0x57c);_0x4ec60f['setAt'+'tribu'+'te'](_0x11e027['JLecQ'],_0x1e3ad8(_0x332104)),_0x11e027['Mbjur'](_0x141b3a,_0x332104);};continue;case'6':_0x4ec60f['setAt'+'tribu'+'te'](_0x879221(0x273),_0x11e027['CsiES']);continue;}break;}}}}else{if(_0x11d72b[_0x879221(0x621)]&&(_0x334ff1[_0x879221(0x297)+_0x879221(0x38b)]===_0x879221(0x6b5)+_0x879221(0x725)+'e'||_0x322f16['ready'+_0x879221(0x38b)]===_0x11e027[_0x879221(0x4e4)]))_0x11e027[_0x879221(0x260)](_0x79c29e);else _0xb8816a[_0x879221(0x6f6)+'entLi'+'stene'+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x3661e8,{'once':!![]});}},!![]);var _0x1e229b=document['creat'+'eElem'+'ent']('div');_0x1e229b['style']['cssTe'+'xt']=_0x7ebc6(0x37f)+_0x7ebc6(0x477)+'ixed;'+_0x7ebc6(0x689)+'2px;r'+'ight:'+'12px;'+'z-ind'+_0x7ebc6(0x649)+'47483'+'646;c'+_0x7ebc6(0x287)+_0x7ebc6(0x344)+'ter;w'+_0x7ebc6(0x382)+_0x7ebc6(0x41d)+'heigh'+_0x7ebc6(0x22f)+_0x7ebc6(0x4e0)+'city:'+_0x7ebc6(0x500)+_0x7ebc6(0x639)+'tion:'+'opaci'+_0x7ebc6(0x2a0)+_0x7ebc6(0x3a7)+_0x7ebc6(0x6b5)+_0x7ebc6(0x4c7)+'ts:au'+_0x7ebc6(0x4eb)+_0x7ebc6(0x52c)+'drop-'+_0x7ebc6(0x576)+_0x7ebc6(0x258)+'\x204px\x20'+_0x7ebc6(0x291)+_0x7ebc6(0x256)+_0x7ebc6(0x58f)+'7,0.7'+'))',_0x1e229b[_0x7ebc6(0x46c)+_0x7ebc6(0x2c7)]=_0x10c15b[_0x7ebc6(0x6f7)],_0x1e229b[_0x7ebc6(0x247)]=_0x10c15b[_0x7ebc6(0x733)],_0x1e229b[_0x7ebc6(0x742)+'seent'+'er']=()=>_0x1e229b[_0x7ebc6(0x66e)]['opaci'+'ty']='1',_0x1e229b['onmou'+_0x7ebc6(0x385)+'ve']=()=>_0x1e229b[_0x7ebc6(0x66e)]['opaci'+'ty']=_0x7ebc6(0x210),_0x1e229b['oncli'+'ck']=_0x52f9cf=>{var _0x4bf928=_0x7ebc6;if('ftrbp'!==_0x10c15b['MxdGM'])_0x52f9cf['stopP'+'ropag'+_0x4bf928(0x367)](),_0x58a686();else{var _0x1db29c=_0x2af29d(_0x3717c8,_0x1c44b9,_0x5ec47a);if(_0x5a92c0['GRtWB'](_0x1db29c,null))_0x11c216(_0x394f44,_0x559e34,_0x887b72,_0x1db29c*_0xf59fe4);}},document['body']['appen'+'dChil'+'d'](_0x1e229b),_0x26ceba(),requestAnimationFrame(_0x5ddb56),console[_0x7ebc6(0x5f2)](_0x7ebc6(0x618)+'ra-ko'+_0x7ebc6(0x4c4)+_0x7ebc6(0x5d1)+_0x7ebc6(0x308)+_0x7ebc6(0x194)+':',_0x1454a8[_0x7ebc6(0x5d7)]);});})()));
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
