// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.2
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
function _0x136b(){var _0x3a17a7=['tg9Hzgu','zKv5rfO','FqOGica','CgXPy2e','icaGlNm','zw50tgK','y2vUDgu','Bw1VifS','zMLSzw4','zvzHBhu','ntaLktS','C3bSAxq','uvvhuwq','BwvKicG','CMvWzwe','BMvJyxa','BM9szwm','yxrLlwm','B2r5','ELndAvm','phn2zYa','Aw50zxi','BfnWs2q','Dcb7igq','mxb4ihi','tuLtu0K','oIa4ChG','BsbJzw4','BxKGC2u','t3LlvuC','rfrQrhq','ywLSzwq','AvrlDu8','Dfzbyum','idaGmJq','BefJvhK','igjHBM4','CJSGzM8','ChG7igi','v3jHCha','DgLKzs4','yw5LBca','igzVBNq','BgLUzwm','DMu7ihC','igvSC2u','BMuUqxa','B2nRoYa','mc41','vhHUtxq','ywXSig8','CIdIGjqG','zgTPDa','ntuSmJu','v0Hdq1K','BwLZyW','oIbJDxi','zxzLBIa','lca1mcu','zMLSBa','Dc1ZBgK','q1nhwNy','kc4YmIW','CMfUz2u','Bw4TDgK','yM91BMq','CM1Puvy','ig5VigG','zw50CZO','Awq7iha','psjTBI0','mcWWlJG','wvjzD1u','CM9ZC2G','AwDUlwK','CgXHEtO','ohW2Fdm','mciGCJ0','nxmGy3u','C3DPDgm','lc43nsK','B2LSicG','BNnSyxq','jYb0Agu','nsKSida','igXLzNq','C3rLBMu','Fdj8mtm','ohb4oYa','oIaWoYa','ihbHzgq','yxnou0i','CM91BMq','y0j2Dvi','Acb7iha','y2HtAxO','ieDLDfy','wvrMu1K','C2STBM8','ieTLzxa','tNLmD3e','mtaWid0','ihSGB3a','lxDPzhq','ufjyDfy','CMrLCJO','y2TLzd0','ys5RB3u','owqIihm','rfLWBey','BgLUzvq','zcWGi2y','BI1JBg8','BffWDwO','ign1CNm','oYbQDxm','mtSGBwK','BwLU','lxjHzgK','CYbHBgW','BgrYzw4','CMvU','zM1Tu0W','qujcAg8','yw5Jzs4','AgjsALq','AxrPywW','Dg9WoIa','igrPC3a','C2zVCM0','C3bHBG','ldePoWO','y3jVBgW','ihWGrvi','yxjLBNq','zw50CW','DxjDigG','zxiTCMe','EdSGAgu','ANvTCfa','DgvZDa','C2v0x3q','A2DYB3u','Fdv8mxW','Bg9Hzgu','ih0kica','zgLZCgW','BgLUzvC','wKj4DxK','ugHHuhq','z2LMEq','mcWWlJu','y2HPBgq','rM9Yy2u','l1jnqIa','mtySmc4','CMfUC2K','oIaZChG','CYbZChi','BNnPDgK','BM9UztS','u01Wq2e','zxjYihS','oYbMAwW','Be1VDgK','mNb4ide','oIbYAwC','C2HVB3q','oIaZmNa','BhmGDgG','CdOGmta','mcWUntu','vMLZDwe','igjVCMq','Ae1JvgG','C3rVCfa','sw5PDgK','zxmGB24','BgXIyxi','ig9U','B3i6ihi','B25PBNa','ns00idC','oIbJzw4','EKLhBwu','y3jVC3m','ihSGzMW','A2vizwe','Aw9UoMy','vxjpBgO','sgvHBhq','C3rYAw4','ugTOBKq','ignVB2W','nsaWlti','y29SCZO','z3jHDMK','Bw4TCge','zdSGyMe','mtiGmJe','ChvZAa','DdOGmJG','nxWXFdm','Dgv4Dc0','zJzIowq','D2vIA2K','Cujywwe','vw5PDhK','uMvZzxq','Dg9Wrgu','ihnOB3q','CY1Zzxi','zxrLy3q','nxm0idi','BMCGzM8','Aw4Sihq','Aw1Llca','rKTwtKK','AuHJtgW','lKXVy2e','odaSmtK','nJq2o2m','sKDzC3i','BwnrC04','ywXSzwq','mZiZnduXnM5uAfLbza','B3nPDgK','Bw4Ty2W','kdaSmcW','idjWEdS','C01Ls0G','ig1PBIG','sfrnta','ruXwDw4','iJeYiIa','icaG','A1H1rNG','z3jPzdS','rw1ltvy','EvPdEvu','ys11Aq','rw5NAw4','Aw5Mqw0','rgnOrhe','C2f0Dxi','nMi5zci','q3vZDg8','s0HOy2O','nsK7igi','mtu3lc4','lxnLCMK','ztOGmtm','zvnVreC','AgfPCG','BMH4DxG','idrWEca','mhb4lca','q29TyMe','Dg9WoJe','BMqIihm','Bw92zvq','sLzRAMK','zvKOmtG','C2vYDMu','DxjH','ywWGBwu','BerPzsK','CgfYC2u','EMTRreO','C2fRDxi','Euvjuwm','BML0igy','DhLWzq','B3b0Aw8','D2jlt2q','B3qGBwe','oIbIBhu','yMHVCa','nJaWide','oYb0CMe','zgvYlxq','DhjHBNm','BcbKCMe','B3rZlG','AMTfA2K','ifjLy28','oIbMBgu','DxPeAeS','zxzLCNK','tKryAu0','yJPOB3y','DMC+','DKzbr0q','ihn0AwW','B3nWywm','Fdb8mG','EKrTwhm','y29SB3i','yuTNwfG','CMXHEsa','Dc1Myw0','zw51ihi','yNjPz2G','BMC6igi','D3vcu0S','AwrLCG','tNDTqvK','q1LOqNa','igrHBwe','oYbJB2W','EdSGyMe','ENbuDvC','m3WXFdq','y2f0','AM9PBJ0','mJiSocW','icaGica','zMLSBfm','zsXTB24','yw5ZzM8','zciVpJW','Bw4Ty28','D29YAYa','v2vItw8','BNq6igm','DcbZDge','zg93oIa','j3qGC3q','EwT5thK','AxmGyNu','u2vSzwm','kYbtCge','ltiUns0','y3K9iJe','lw5VDgu','vxzNzK0','EcbYz2i','EuHyBNa','EcaWoYa','CM9Rzs0','lxrPDgW','C2STC3C','zIXZExm','Bxm6igm','zwv6zsa','mJSGC3q','lwfWCgW','BwLKzgW','EtOGyMW','ysGYndy','sw5ZDge','nNb4oYa','ywXSihq','ieaG','i2zMyJm','ieLZr3i','yxjJ','Cxjlrwq','s0zgre4','q3jVC3m','mJu4mJaYrxLYD1fM','C2fMzu0','vMvbrg4','Aw9U','u3flwe8','DdOGnZa','mtfWEca','EdSGB3u','zw5HyMW','Ahq6idi','ndjLANP0BNq','oIbUB24','qMXVy2S','CMzgvhq','CNjVCG','Ag9ZDg4','icmYmJe','D2vPz2G','oIbZDge','Bgv4oYa','yxa6ide','uMDfEvG','Dg9Y','y2HTu1i','nwmWidm','C2f2zq','yxjPys0','mcWWlJC','C2DqDeC','B3vUDc4','D2LKDgG','wxDOAMK','AsXZyw4','ihbSywm','BMHxs1m','zwXMoIa','sgfJyM0','ENfVthi','ndSGBwe','Cw9rtM0','ignVBg8','Aw9UlLq','Fdb8nhW','ChjLDMu','B2vZig4','lMLVig0','B25LigK','mcWWlJy','yLj4CNi','oIaIiJS','Cvn1EKS','ExrLDeW','C2HHzg8','y2SP','zZOGnNa','tNfPCvm','BdOGAw4','yw5LBc4','AguGDxm','u0fgrq','DgfNtMe','ywrKrxy','zxrhyw0','mxb4oYa','ig9Wywm','Dg9Nz2W','nNW0Fdm','ze1ptNu','zMyP','iNjVDw4','BNqGAge','D3jPDgu','v01ligK','ihWGC2G','DgG6idK','Bgf0zwq','Aw5NoIa','sgvPz2G','tLjZBeW','mJu1lde','C0f0B2O','C2v0ida','rwXLBwu','vvjbx0S','zgL2','B3jKzxi','lxnPEMK','Cujdzva','zxjSyxK','lIbuDxi','zNrLCIa','Aw9F','BwvZC2e','FdD8nxW','z2uUiei','idqGnc4','zhfNvg0','t1LWv1e','yxbWBgK','seruEgK','Ag9LuNq','zuvSzw0','qNLjza','y2LTqNi','kYbmtui','AxvZoIa','mdi1ktS','tM8GuMu','Awr0Aa','iefmtca','oIa5oxa','CIGYmNa','zxi7igC','ldeWnYW','oIbHyNm','ChbLyxi','mxb4ida','vfvWD2q','zJmY','zwfSDgG','CeT0Dhi','lc4WncK','iM5VBMu','ywnRz3i','vwnlswG','DMrgzgO','lxj1BM4','lwzPBhq','sw5MAw4','CMvJDa','mdCSmtu','yufqrLe','zZOGmNa','rxjADKG','mZG1mZu5odr1v25Lvve','DdOYnNa','ANHlCgC','ihLVDxi','Bw4TAa','C2XPy2u','ihrOzsa','yNv0Dg8','ExHvt1K','DgvTlxu','oYbWB2K','lwjVEdS','weTJDwe','zM9YBxm','ida7igm','zgvSzxq','y2L0EtO','rvHqxq','ihbVC2K','oYbVCge','BNrLBNq','BgLUzw4','C2STyNq','B3bLCNq','EsbKzwy','DhjVA2u','AwHTswy','mJqYlc4','sNjrBKW','BM9Uzq','jsbUBY0','zc5VBIa','yxj0lG','DgrTtgu','B3vUzdO','C2v0qxq','vvDnsYa','qxbWBgK','BI1SB2C','qMPOwgy','C3bLzwq','DgLVBJO','C2rjze0','De5rAeq','AwX0zxi','mtGGnIa','ywrIBg8','DvP3s28','mdbTCY4','Aw5JBhu','t1vsx18','Aw9FmZa','ifvxtuS','BMqGBwe','nsK7iha','yYGXmda','iNrYDwu','DKfzteC','Bg9YoIa','B3rOAw4','Fdn8n3W','CMqTDgK','yMeOmJu','u0Dtwvm','rLbtigm','lM1Ulxa','B3nLihm','vM9oCha','DgG6ida','yMTPDc0','igjHBIa','ztOGBM8','ysblB3u','nsWUmdu','i2zMnMi','ndHWEcK','ltqTnY4','yMLJlwi','C2HPzNq','A05ArNm','oJa7EI0','zw50','z2jHkdi','nc00lJu','Dgv4Dei','mJu1ldi','igH1CNq','zwfK','sNvTCca','zgfTywC','vhPRqLm','r3jHDMK','lZ48l3m','zhrOoJe','CI52mq','BhvTBJS','igzPBgW','igrLzMe','tKLRBgK','DZOGAw4','yxa6ihi','icaGkIa','ChG7igG','lxnHBNm','CYb3B24','msWUmZy','AtmY','igvMzMu','wwnKs0e','ihDPzhq','uvbIreG','mcaWida','AgvZ','BeDKCvO','vvrgugi','zwqGyw0','BMu7ige','ywrPDxm','zxjYB3i','i2zMzJS','rgfTywC','Axb0kq','B3uU','C3rYB24','AvDKCuW','tgPguKq','t25tzNO','vgzRB0C','4Ocuig92zq','DgL2zsa','EhzWtu4','CvbtyNy','ihSGD2K','u3bHy2u','B2TLpsi','y3nZvgu','AwvSzca','oIbYz2i','y3rPB24','Aw9FnZi','A291CI0','Be5Kt0K','BKPOz1m','igXPBwK','zvn0EwW','quLbB3e','u2nHBgu','B2fKzwq','wKDMAKy','oNbVAw4','ALj0t1i','zsGXnta','y2zfuLG','qwrIBg8','C2v0sxq','yMfJA2C','zenOAwW','mcbOB28','DgL0Bgu','phbHDgG','vMnmAKC','vg90ywW','AfnOywq','iezquW','DgvYigm','zxjZy3i','Dgv4Dem','yJLKoYa','yMXeyuy','CIbHzhy','uMvJDa','igzVCIa','ig5LDMu','CZO6lxC','ignHBgm','u3bLzwq','AxHLzdS','AwHhu1O','z29KicG','ywjSzs0','sNvyqNK','BMqGt0G','BgvZiem','igHVB2S','z0rdv0G','CZOGy2u','z3jNA0O','AwnRihm','iIbZDhi','DgG6idG','ide7ig0','DhjHy2S','BNrLCJS','oYb1C2u','DgvTCgW','Cg9Uj3m','B3bHy2K','ignHy2G','nxWXFdK','mtjWEdS','z3jVDw4','iL06oMe','BhmGysa','qunuAYa','lJv6iIa','y2TNCM8','ltiUnsa','uvrzs0y','vKLZs2y','B3nL','B3C6ida','igq9iK0','icbIB3G','BgW+','BwuG','ugn0','z0D1v2m','C2STC2W','ELjrqNC','rhvMrvC','idrWEdS','C3rYB2S','BhrOige','CgfYzw4','A3nqB3m','ChG7cIa','y3jLyxq','idK5osa','zvbSDwC','zvrHDxm','zxzLBNq','oYb3Awq','yxzuyNK','C3zNiJ4','zgLUzZO','AxbrB2m','vwjkCKi','zxG6mJe','r2zNDwK','z2v0','iezPCMu','igvUDgK','ywLYlG','ihbVAw4','zxjPDdS','Ag9VA1a','lwXPBMu','CuPOzfe','BgWGBwu','y1zjAMW','uLnsvg0','Bgf5oIa','B3n0zMK','C2STy3q','Bg9Y','q2XVC2u','ndySmJm','yM9KEq','ihn5C3q','igjVEc0','reH2vvC','qvrQsxy','oYbHBgK','rLbtig8','yxb0Dxi','s2rusfG','AwWGC3a','sNvTCfq','nMvLzJi','y29TyMe','s2HXEfu','idaGmca','vKn2Eue','zNzTvLq','jsK7ic0','nYWWlJG','ihjNyMe','quDKwgm','t3vYzKu','mJqZotmYmu1LyKDcwG','ufvQENO','ida7igi','C2HVD24','D0nVBg8','DMvYihS','ic5TBI0','Dw1UoYa','B25SEsW','zg93BIa','uJOG','zMLSBfq','ihjLy28','DgnOihq','zMXLEdO','C2STy28','AwvZlG','oIa0ChG','CIbNyw0','CIb2ywW','DK1nqvm','yMvNAw4','BxbWBKy','ihSGywW','zxG6ide','yxbWzw4','B3zLCMW','CM9Rzxm','lNnRlw0','ig1VBwu','qNLuy2y','CMfUC3a','z3jPzc0','mhG2mda','BYb7igq','zdSGy28','Dgv4Dee','Ad0ImIi','BhrLCJO','CI1Yywq','zhrOoIa','Ag9Szsa','s2v5vW','ihrOAxm','yuTVDxi','yMX1CG','CI1ZzwW','y2XHC3m','nJiWChG','w3nHA3u','nIa2Bde','zuv4Ca','u3rHDgu','AK1ZsMC','ic8GDMe','AwXS','Ag9VA04','BwvsDw4','rKf5u0i','ie92zxi','ywn0A0S','AwXKigG','u2TPChm','ihSGy28','lxnOywq','oYbWywq','z2fTzuW','CMDPBI0','AgvZsMi','DKjXwui','mgy1oYa','sgLKzxm','ndGZnJq','CMLKoYa','B2XVCJS','A2rYB3a','CM9WywC','BMDL','zgflsxm','z3jHzgK','vNLWwM0','D0f6que','EdSGz2e','lJq1oYa','Ahq7igm','ywqGEYa','DhKGmc4','y2fSBa','zcWGyw4','yw1Hz2u','Bw4TDge','Aff1r1C','Aw4GC2e','C2v0uhi','DgvQr0i','AxPLoIa','zxjZ','idHWEdS','D2L0Aca','ywiUywm','zw50oYa','zsb7igy','zxH0','y2LYy2W','ie9olG','ihjLBg8','zw4GDg8','CYbpsgu','nYWUmJG','Aw5NicS','x19ZywS','AwrHDgu','C3r5Bgu','DML0Eq','y29PBa','mhW2Fdq','oWOGica','B25JAge','qunSy0e','CNnVCJO','zwf0CYa','CM9Szq','C21HBgW','wgPvu2K','CJOGCg8','igzVDxi','uxfhANK','oYb9cIa','uLzXwMS','q291BNq','Dw5RBM8','zxi6oI0','y0LVvMC','tw9Kzsa','uKP2yKO','mZuSmJq','ic5ZAY0','mhb4oYa','DMLHifm','BgLNBG','Fdb8m3W','z29K','CI51As4','tw1Jug0','y2fWtw8','u2HHCNa','t3zLCNC','AhnnEK8','weX3qwO','nZuYmZbMEMfrBKS','CML0zxm','B1nsq08','CMvHzhK','AwvSza','t3LdB1O','EsaUmZu','zwLNAhq','y3qGB24','lwjHBNi','zwXHDgK','B290zxi','DMLLD0i','wfjwChO','y2vSzxi','nNW3Fdi','zM9UDc0','AfTHCMK','ntuSlJa','CM0GlJq','oc00lJu','tgLZDa','oYbTAw4','zwfKige','D0jSDxi','rfPlB2e','nsWYntu','DvbzreK','A3nty2e','r09lqLm','zw50rwW','yxGOmJu','ywnPDhK','oIaXms4','zsWGDhi','BLfisxC','BguGC3q','ltjWEdS','mJuPoYa','AdOGnJi','lcbZyw4','nZaWia','ChG7ih0','idnWEdS','ywXPz24','EKPcwLm','Bw91C2u','ihSGCge','zMLSBd0','zNvSBhm','DuDbCfa','uK1c','CdOGmti','zwfKB3u','mIaXmK0','zxmGEYa','ndiSlJG','CxvLCNK','Bhv0ztS','yM90Dg8','BM9tChi','Bw4TAca','z2H0oIa','oYbIywm','s2v5C3q','yMfJA2q','Bwf3teO','AY1Jyxi','vNL5rhi','B250zw4','CgfJAxq','CJOGDgG','oIaXoYa','nhWWFdu','v0fttsa','rxHW','vLzZD3C','DMfSDwu','z2v0rwW','vKXxzeW','yxrLvge','Bg9Hzc4','ohWYFdu','BsbVBIa','ihrYyw4','Bwf0y2G','oYbKAxm','zMXLEdS','BI1JB2W','ueP0rfa','BguGAwy','ztOGmtC','BMnL','nIaXoci','DgvYoIa','BMq6ihi','ysGYntu','y2XLyxi','rNjHBwu','zgvYlxi','lNnRlwy','zMLUza','kdeUmsK','BI1PDgu','zxG7ige','yxjNzxq','CMvZDg8','z2DSzwq','q0vuAK4','wMDZBfu','B1jLy28','y2n1CMe','ywDLigq','icaGic4','ANj1wvK','oIaJzJy','Aw5KzxG','y2vZlG','BgvUz3q','CJSGz2e','m3WYFdq','igvYCG','lwLVxYO','u2fRDxi','y0HNt2C','khjLBg8','yMf1Dwi','lc4WocK','C3bSyxK','DvntuhO','sK13wfy','u0fgrsa','ldiZocW','v2LKDgG','y2HLy2S','DhjPyNu','ywn0Axy','ksaWida','zvj1BM4','AxnPyMW','ywrKAw4','oI13zwi','EYbSzwy','ufz1EuS','CMDIysG','iJeUnsi','Agrtu2O','EYaTD2u','uIb2ms4','vMfSDwu','AgvHzgu','zwfKEs4','u3rHDhu','CMvHza','kdi0nIW','BNqGAxq','lYbhCMe','Ec1KAxi','ywrK','EYbKAxm','DgLVBI4','yxr0ywm','y3KGB24','z24TAxq','Bwf4','Avv0DhO','ldi1nsW','Cg9PBNq','veH5u2m','tgvNAw8','CMqTAgu','zxiGC2W','A2v5C3q','AgvPz2G','zsbZzxi','kdeWmhy','DMvYlxy','odbWEcW','ywX0Ac4','Dw5KoIa','igv4Axq','BMq6ihq','zw50kcm','icaUC2S','BwrLC2m','zxiGEYa','lIbvC2u','oJiXndC','4Ocuig5Via','ywqGDg8','y2HkDKK','CYbLyxm','qKrtAei','sfzpv0e','DgHLihC','zhbY','ChG7igy','ugf0Aa','zfznqNK','mNb4ihu','Fdf8ma','z2v0sxq','ntKYmJeYmhnhDKvorq','vgHLC2u','Dw5Kzwq','DxDTAW','DgvYo3C','ktSGFqO','AgfZ','B25JBgK','C2L6ztO','y29Kzq','Axr5oIa','zeLUDgu','mdSGyM8','DcbHihq','BNnLDca','BMn0Aw8','Ec1OzwK','nsWUmdm','quLnt0m','B29RCYa','DxmGywm','idiWmg0','zgvZ','v2LWzsa','lJuGms4','BgfIzwW','DwjWAe0','Bcb7igq','zs5bCha','DdOXmda','BIb7igy','nNb4ida','qwLhtfi','iL0GEYa','icaGlM0','icaUBw4','lsbHihm','Bgv4oIa','CM1VAuq','ic40oYa','BLbSyxq','lc40nsK','phnTywW','ywqUieK','r0PnvM8','DgvYoYa','mJm4ldi','u2vNB2u','B3zLCIa','BNqTC2K','Ag9VA3m','lwfWCgu','zIbTyxq','zsaOt0G','z2v0q28','yMvS','q29SB3i','yxrLkde','Cg9UuNm','BM90zs4','rNLgqM0','yM9Yzgu','tKjpu1y','qsblt1u','AK9uCK4','AgvSza','yxnLBgK','Cc1ZAge','igXLyxy','Bg93oIa','CZOGoha','DgLKzvC','A3POEMG','zw50zxi','BJOGy28','wNrqEva','mtSGyMe','x19tquS','AY1ZD2K','ChG7ihC','DtmY','CZPUB24','B3jZige','yxnZAwC','zgL1CZO','AenUruu','D2HLCMu','Bw9fEha','B24UvgK','AwDUyxq','BgfJzs0','wwLOv20','Ag9VA0m','wMvYB2u','ztSGD2K','wxDOBLi','Ag9VA0C','uMfWAwq','BwLUkdq','zdOGBgK','A3ndChm','DhK6ic4','DhKGjq','uMnmueK','yvrOBhm','igTVDxi','BgvMDa','DgnJD0y','CgfKzgK','CMfWAwq','zsb0CMe','ihn0CM8','ihSGlxC','v2Psuw0','CNr1Cca','lcbPBNm','i2zMzG','zvbSyxK','CMuGkfm','wLfHy2O','vefczLG','icaGig8','DhjHBxa','tMfTzq','Ec1ZAge','C2vSzwm','shDXBKq','AwvKigm','z29KrgK','oIb0CMe','C2STCMe','ienquW','Aw1Lihm','AvPOA1C','twLZyW','B2reAwu','B2rL','BgfZDeu','C2STy2e','yufZBfe','C2vSzwe','AxnWBge','yMfYlxq','DhrPBMC','Bw92zw0','Aw5Zzxq','zNbZ','cIaGica','nxb4oYa','BhLTyue','igLMig0','BgLJyxq','s2v5qq','Aw5Uzxi','ocWYndi','EYbMB24','zsbJEd0','zMy2yJK','idi0iJ4','DervvxO','BsbSzwy','lMP1Bxa','tujxqKC','t0XjD0O','wLzlDuy','ideWChG','lxbHCMu','ExjHBM4','Bgu7igy','BMLUzW','mJvWEdS','vwLVEwq','zwLUC3q','lc4YnsK','DhLqy3q','zxiTzxy','AwXnB3q','uLnbsgy','idqTnc4','zwz0ic4','C2v0vhi','BgLKzxi','zwCGzMe','y1jfs3G','EcKGC2e','mdSGBwK','Cg9W','A2L0lxm','y3jLzw4','AwDODdO','A2vYweO','tgvMDca','EYbIywm','yw1L','igfUzca','BNrLCI0','zgPztvO','y2fWu2G','tu9ersa','D2fYBG','B1rgD2e','A3ryAw4','EdSGBwe','y21ovfq','DxqGDgG','q1jSu2W','ihSGzM8','AxrLBxm','r05LwNK','DMLZDwe','Ce5lDg0','C2v0','idmWChG','y3jLBwu','BYb0Agu','Dc1ZAxO','ChG7iha','C2STzMK','oIaXnha','sMHYqMq','y2HdB2W','B250lxC','oYbIB3i','oYbVDMu','mJqWiey','t1nOB28','BdOGBM8','DgnOoJO','AwX5oIa','sw5Zzxi','nsWUmdC','ig5VBMu','B2rLu3q','zg9JDw0','EYbIB3G','lMXHC3q','DgG6idi','ohG5mc0','A0n5uxm','ktSGy3u','DhLSzq','yxK6igy','DgHVzca','Bg9N','nZiWmZyYneLlB0X5rG','neTeELrtyq','ignLBNq','u2L6zq','mNb4oYa','DMfS','ifvjiIW','tM8Gzw4','yKLcDLO','ChGGDwK','ywqU','B2LUDgu','B3bLBG','tw92zw0','A3Hktve','AY1IDg4','DgG6idu','y29TCgW','BI13Awq','BM93','zwn0oIa','ufmGDw4','t0HLywW','EdSGywW','yvfOCLa','As1TB24','re9nq28','Awr0AdO','Bhzfww4','DhmGCgW','B2LS','mJzWEdS','EMu6ide','v0jpwKq','zgD0q1a','AguGzgu','uNnRrfO','ide0ChG','ywD6t2W','mJu1lc4','zg93BG','CMeTA28','Dg9W','lNnRlxm','DgfIihS','ksaXmda','A2v5Dxa','wNnxAKi','psiJzMy','CIGTlxa','C2STAgK','uMf0zq','CMvSB2e','B3G9iJa','yY0XlJu','kg92zxi','CNq7igC','qMDUsNe','yxrPB24','oYbOzwK','zM9UDa','Dw5PDhK','AxrSzsa','zw1LBNq','igDHCdO','igzSzxG'];_0x136b=function(){return _0x3a17a7;};return _0x136b();}function _0x5d71(_0x23c26e,_0x4b3573){_0x23c26e=_0x23c26e-(0x23fb+-0x1*-0x1591+0x12dd*-0x3);var _0x3e32ab=_0x136b();var _0x139d1b=_0x3e32ab[_0x23c26e];if(_0x5d71['uxYaIl']===undefined){var _0xc4911c=function(_0x3c08ba){var _0xab45b5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4da866='',_0x1c523d='';for(var _0x801089=0x1*-0x117+-0x2393+-0xf7*-0x26,_0x481187,_0x58d7f7,_0x1f46c1=-0x12*-0x1fd+0x742+-0x2b0c;_0x58d7f7=_0x3c08ba['charAt'](_0x1f46c1++);~_0x58d7f7&&(_0x481187=_0x801089%(-0x17+-0x66e+0x689*0x1)?_0x481187*(0x154d+-0x1*-0x12f+-0x2*0xb1e)+_0x58d7f7:_0x58d7f7,_0x801089++%(0x788+-0x1f2f+-0x1*-0x17ab))?_0x4da866+=String['fromCharCode'](0x2f0+-0xe8b+0xc9a&_0x481187>>(-(-0x1162+0x7*0x481+-0xe23)*_0x801089&0x530+0x1c27*0x1+0xb1b*-0x3)):0x1405*0x1+-0x19fd+-0xbf*-0x8){_0x58d7f7=_0xab45b5['indexOf'](_0x58d7f7);}for(var _0x51e0bd=0x106f*0x1+0x1d2f+0x16cf*-0x2,_0x160c4f=_0x4da866['length'];_0x51e0bd<_0x160c4f;_0x51e0bd++){_0x1c523d+='%'+('00'+_0x4da866['charCodeAt'](_0x51e0bd)['toString'](0xaef+0x13b5+-0x7a5*0x4))['slice'](-(-0x325+-0x114b+0x1472));}return decodeURIComponent(_0x1c523d);};_0x5d71['pAjbXd']=_0xc4911c,_0x5d71['KgUNVx']={},_0x5d71['uxYaIl']=!![];}var _0x156b63=_0x3e32ab[-0x24ee*-0x1+-0x32*0x9b+-0x1*0x6a8],_0xdb513e=_0x23c26e+_0x156b63,_0x1efa2f=_0x5d71['KgUNVx'][_0xdb513e];return!_0x1efa2f?(_0x139d1b=_0x5d71['pAjbXd'](_0x139d1b),_0x5d71['KgUNVx'][_0xdb513e]=_0x139d1b):_0x139d1b=_0x1efa2f,_0x139d1b;}(function(_0x23e551,_0x5cfc3c){var _0x214f33=_0x5d71,_0xa36506=_0x23e551();while(!![]){try{var _0x4fda86=parseInt(_0x214f33(0x32b))/(-0x48*-0x49+-0x12d2+-0x1b5)*(-parseInt(_0x214f33(0x4ea))/(-0x1398+0x1*-0x56f+0x1909*0x1))+-parseInt(_0x214f33(0x296))/(-0x19f7+-0xcd6+-0x1*-0x26d0)+-parseInt(_0x214f33(0x60c))/(-0x4*-0x13d+0x41e*-0x3+0x76a)+-parseInt(_0x214f33(0x3f5))/(-0xd*-0x24a+-0x320*-0x9+-0x39dd*0x1)+parseInt(_0x214f33(0x103))/(0x2*0x1201+-0xfe*0x16+-0xe28)*(parseInt(_0x214f33(0xf9))/(0x3*0x3a9+-0x6c*-0x5+0xd1*-0x10))+-parseInt(_0x214f33(0x4e9))/(0x1*-0x57a+0xcbe+0x39e*-0x2)+parseInt(_0x214f33(0x17f))/(-0x224b+0x1*0x201b+0x239);if(_0x4fda86===_0x5cfc3c)break;else _0xa36506['push'](_0xa36506['shift']());}catch(_0x1f427d){_0xa36506['push'](_0xa36506['shift']());}}}(_0x136b,0x1f*-0x7883+-0x52f9b+0x1e3311),((()=>{'use strict';var _0x16b484=_0x5d71,_0x4d0f9d={'RskDZ':'u32','WBOZD':function(_0x338e32,_0xfa3de1){return _0x338e32>_0xfa3de1;},'iyujs':_0x16b484(0x617),'JMwXV':_0x16b484(0x68c),'MmcPm':function(_0xdb8319,_0x31805c){return _0xdb8319+_0x31805c;},'mOIGC':_0x16b484(0x20b)+'io_','ZgslU':'none','cBvuR':_0x16b484(0x65d),'OYpWQ':function(_0x557941,_0x32122b,_0x538c49){return _0x557941(_0x32122b,_0x538c49);},'blDaF':_0x16b484(0x485)+_0x16b484(0x5b2),'ytetL':function(_0x169868,_0x215834){return _0x169868===_0x215834;},'VLWdL':function(_0x372af0,_0x43efce){return _0x372af0<_0x43efce;},'CYhBp':_0x16b484(0x129),'OnSfz':_0x16b484(0x218)+'ck','eSoDG':_0x16b484(0x1c9)+'9d','ZBRml':_0x16b484(0x19b),'DZKoa':'oHrAL','gDCWH':function(_0x152e7a,_0x52be84){return _0x152e7a!==_0x52be84;},'nsKVx':function(_0x411574,_0x3839e9,_0x1bcaa4,_0xfdc092,_0x27a6f3){return _0x411574(_0x3839e9,_0x1bcaa4,_0xfdc092,_0x27a6f3);},'wbKOd':function(_0x3c3d2f,_0x2301a7){return _0x3c3d2f!==_0x2301a7;},'pNKtm':_0x16b484(0x2c7)+_0x16b484(0x512)+_0x16b484(0x5b3)+'ook\x20r'+_0x16b484(0x4ab)+'iled:','QGIZB':_0x16b484(0x3a3)+_0x16b484(0x3f3),'uuYru':function(_0x11732f,_0x4ed2c0,_0x12fd52,_0x589923,_0x287b92){return _0x11732f(_0x4ed2c0,_0x12fd52,_0x589923,_0x287b92);},'Qinod':'shoot'+'ers','OurfE':function(_0x24b30f,_0x5ac450){return _0x24b30f(_0x5ac450);},'ejarC':function(_0x3a4fc9,_0x1d8a72){return _0x3a4fc9(_0x1d8a72);},'RcLPI':'FAySB','iWdqL':function(_0xbdeb7e,_0x598fca){return _0xbdeb7e<_0x598fca;},'iUttz':_0x16b484(0x16f),'hesJb':function(_0x2638f,_0x2c95b5,_0x4ef35c,_0x2e9f2a,_0x209978){return _0x2638f(_0x2c95b5,_0x4ef35c,_0x2e9f2a,_0x209978);},'xPuJK':function(_0x398a9b,_0x49fce7,_0x424409,_0x47e862,_0x59aaee){return _0x398a9b(_0x49fce7,_0x424409,_0x47e862,_0x59aaee);},'eTaus':_0x16b484(0x1e9),'KHhcj':function(_0x3f0012,_0x3e7013){return _0x3f0012+_0x3e7013;},'yIeuK':'600\x20','XtiDs':_0x16b484(0x4f2)+_0x16b484(0x1e6)+_0x16b484(0x625)+_0x16b484(0x681)+_0x16b484(0x188)+'i,san'+_0x16b484(0x5fe)+'if','jkEki':_0x16b484(0x469),'daKIs':function(_0x381cd8,_0x201681){return _0x381cd8/_0x201681;},'aThls':function(_0x23cf7f,_0x1433e1){return _0x23cf7f+_0x1433e1;},'HVOWA':_0x16b484(0x5b8)+'arget'+_0x16b484(0x38d)+'Rate','RSAHf':'oSYaB','XLwAj':_0x16b484(0x24f),'XjUSi':_0x16b484(0x359),'XnTFt':_0x16b484(0x147),'yrann':function(_0x2ea063,_0xc78b40){return _0x2ea063>_0xc78b40;},'lNdOI':_0x16b484(0x2c3),'aPYGP':_0x16b484(0x359)+'up','NBOSV':_0x16b484(0x517),'zRQBw':function(_0x4bb15e,_0x1fd580){return _0x4bb15e-_0x1fd580;},'UTFPb':function(_0x50183e,_0x5abd38){return _0x50183e*_0x5abd38;},'ELVun':_0x16b484(0x294),'BQUud':_0x16b484(0x641)+_0x16b484(0x3f2)+'i-mon'+_0x16b484(0x651)+_0x16b484(0x669)+_0x16b484(0x651)+'e','mcQsN':'top','TzkBS':function(_0x50dd25,_0xe0dbc,_0x946e88){return _0x50dd25(_0xe0dbc,_0x946e88);},'GOKBS':_0x16b484(0x222),'iKFSN':'waiti'+_0x16b484(0x601)+_0x16b484(0x2a8)+'e…','wAzAA':_0x16b484(0x37d)+_0x16b484(0x1bb)+_0x16b484(0x309)+'|10|9'+'|1','ihmIf':_0x16b484(0x638)+_0x16b484(0x596)+'r.ui.'+'v1','dFaQx':_0x16b484(0x57a)+'h','nJhgS':_0x16b484(0x186)+'n','MfEON':_0x16b484(0x113)+_0x16b484(0x3b1)+'ed','cALeK':_0x16b484(0x33a)+_0x16b484(0x123)+_0x16b484(0x5f5),'cmNTT':_0x16b484(0x310),'FyFBm':_0x16b484(0x51b)+'nt','hxPbv':_0x16b484(0x27c)+'l','cREKx':_0x16b484(0x58d)+'te','iTKuO':function(_0x42d055,_0x2eec0c){return _0x42d055+_0x2eec0c;},'KdTHX':function(_0xda55c5,_0xe1a27d){return _0xda55c5+_0xe1a27d;},'CETjN':_0x16b484(0x21c)+'ks\x20ar'+_0x16b484(0x538)+_0x16b484(0x55d)+_0x16b484(0x13d),'wNEsD':'\x20|\x20mo'+'vemen'+'t\x20','DYplF':_0x16b484(0x3c3)+'s','aAPFQ':function(_0x2ca68b,_0x4b4b89,_0x444dc2,_0x2a1308){return _0x2ca68b(_0x4b4b89,_0x444dc2,_0x2a1308);},'aQhrP':_0x16b484(0x4d5)+_0x16b484(0x4fe)+'lock','Lswgf':'Apply','aKgXX':function(_0x2d0a93,_0x4b0efc,_0x4feb85){return _0x2d0a93(_0x4b0efc,_0x4feb85);},'WjRQm':'SqKXO','Ywhji':'12|3|'+'4|10|'+'14|8|'+'11|16'+_0x16b484(0x582)+_0x16b484(0x156)+'0|6|1'+_0x16b484(0x245),'YTfSY':function(_0x1923b2,_0x365df7){return _0x1923b2*_0x365df7;},'jZQGU':_0x16b484(0x3bb)+_0x16b484(0x1d4)+'35,24'+_0x16b484(0x572)+')','JGXZR':function(_0x536c9a){return _0x536c9a();},'MBWBG':function(_0x421c24,_0x466f48){return _0x421c24===_0x466f48;},'XaPOI':function(_0x27c0a1,_0x4ad8d4,_0xd933,_0x5346db,_0x60a1cc,_0x379912){return _0x27c0a1(_0x4ad8d4,_0xd933,_0x5346db,_0x60a1cc,_0x379912);},'kerXJ':'God\x20M'+'ode','THySc':function(_0x2453ca,_0x5b273f,_0x565f7b,_0x42ffa3,_0x40b1d4,_0xcdc62b){return _0x2453ca(_0x5b273f,_0x565f7b,_0x42ffa3,_0x40b1d4,_0xcdc62b);},'rRYPl':_0x16b484(0x328)+_0x16b484(0x32c)+_0x16b484(0x2d1)+_0x16b484(0x43c)+'eapon'+_0x16b484(0x65f)+_0x16b484(0x157)+'annab'+_0x16b484(0x385)+_0x16b484(0x185)+_0x16b484(0x632)+_0x16b484(0x2a9)+_0x16b484(0x305)+'s.','ByTcf':function(_0x279e12,_0x1c3645,_0x445db6,_0x4597ba,_0x107f07,_0x32a109){return _0x279e12(_0x1c3645,_0x445db6,_0x4597ba,_0x107f07,_0x32a109);},'LcPii':function(_0xc52cfe,_0xef6d7d,_0x2dd6f7,_0x49ba3b,_0x573c6b,_0x1ca575){return _0xc52cfe(_0xef6d7d,_0x2dd6f7,_0x49ba3b,_0x573c6b,_0x1ca575);},'tILdj':'Refil'+_0x16b484(0x5d4)+'e\x20wea'+_0x16b484(0x242)+_0x16b484(0x244)+_0x16b484(0x1f2)+'mo\x20to'+_0x16b484(0x262)+_0x16b484(0x64b)+_0x16b484(0x40a)+'s.','ktXin':'If\x20re'+'loads'+_0x16b484(0x650)+_0x16b484(0x645)+_0x16b484(0x602)+_0x16b484(0x50c)+_0x16b484(0x4ca)+_0x16b484(0x13f)+'ppens'+_0x16b484(0x558)+_0x16b484(0x44b)+'.','sAtoj':'move','NIkli':'Scale'+'s\x20Mov'+_0x16b484(0x528)+_0x16b484(0x496)+_0x16b484(0x5c4)+_0x16b484(0x4b7)+'both\x20'+_0x16b484(0x5ef)+'ty\x20va'+'lues.','QrvlU':function(_0x14f67e,_0x58e31b){return _0x14f67e!==_0x58e31b;},'KFFDN':_0x16b484(0x1da)+_0x16b484(0x45b),'VTjnu':function(_0x5206c6,_0x5674d8,_0x4e5a2b,_0x3221c3,_0x30d039,_0x18ecd8){return _0x5206c6(_0x5674d8,_0x4e5a2b,_0x3221c3,_0x30d039,_0x18ecd8);},'DchDq':_0x16b484(0x36b)+_0x16b484(0x2b1),'lvEYn':'Botto'+'m\x20rig'+'ht','jGOsz':_0x16b484(0x4b4)+_0x16b484(0x686)+'e','UrOlj':function(_0x255503,_0x32e3e0,_0x54c68c,_0x39eee4){return _0x255503(_0x32e3e0,_0x54c68c,_0x39eee4);},'rMEsK':_0x16b484(0x4ec),'cIoVg':function(_0x502613,_0x2210b0,_0x448c2a,_0x49a122,_0x289c25,_0xcdd645){return _0x502613(_0x2210b0,_0x448c2a,_0x49a122,_0x289c25,_0xcdd645);},'TxnMt':function(_0x4c29e0,_0x12eeab,_0x43117f,_0x3244fe,_0x32bf9b,_0x56f06d){return _0x4c29e0(_0x12eeab,_0x43117f,_0x3244fe,_0x32bf9b,_0x56f06d);},'WfhSC':function(_0x1434cf,_0x4421c5,_0x80a5c0,_0x5b166d,_0x2fc663,_0x4d23de){return _0x1434cf(_0x4421c5,_0x80a5c0,_0x5b166d,_0x2fc663,_0x4d23de);},'XgVwi':_0x16b484(0x286)+'verla'+'y.','fmmSL':function(_0x2cfccf,_0x4bfc10,_0xba805a,_0x5131d9){return _0x2cfccf(_0x4bfc10,_0xba805a,_0x5131d9);},'VyyDr':_0x16b484(0x1bf)+'ounte'+'r','mJDqC':function(_0x2b3c9a,_0x3462bf){return _0x2b3c9a===_0x3462bf;},'hoeRt':'Hides'+_0x16b484(0x45e)+'-io_*'+_0x16b484(0x54f)+_0x16b484(0x3d6)+_0x16b484(0x646),'olipL':'Takes'+_0x16b484(0x1ea)+_0x16b484(0x333)+_0x16b484(0x2ff)+'ad\x20wh'+'en\x20to'+_0x16b484(0x396)+'.','LjFRD':_0x16b484(0x1a4)+_0x16b484(0x5dc)+_0x16b484(0x2ff)+_0x16b484(0x4f3),'IbYca':function(_0x5dbf5f,_0x4fc82b,_0xb6c173,_0x200098){return _0x5dbf5f(_0x4fc82b,_0xb6c173,_0x200098);},'UcKIh':_0x16b484(0x231)+'OHeal'+'th.In'+'itiat'+'eTake'+_0x16b484(0x5e9)+'h)','MToGO':_0x16b484(0x475)+_0x16b484(0x42a)+_0x16b484(0x170)+_0x16b484(0x606)+_0x16b484(0x635),'eyEBx':function(_0x5127a6,_0x5719e9,_0x4d71c4,_0x2b0119){return _0x5127a6(_0x5719e9,_0x4d71c4,_0x2b0119);},'SGSYS':_0x16b484(0x53b)+_0x16b484(0x57c)+'Recoi'+_0x16b484(0x5cf)+_0x16b484(0x44d)+_0x16b484(0x12e),'QPbDH':'captu'+_0x16b484(0x46b)+_0x16b484(0x137)+_0x16b484(0x3b5)+_0x16b484(0x303)+_0x16b484(0x68e)+'ounde'+'d)','zqoLr':'God/d'+_0x16b484(0x2ef)+'/rapi'+'d\x20gre'+'atly\x20'+'raise'+_0x16b484(0x1c5)+'risk\x20'+_0x16b484(0x564)+_0x16b484(0x2f8)+'this\x20'+'on.','CSGZv':_0x16b484(0x3f6)+_0x16b484(0x439)+_0x16b484(0x3d9)+_0x16b484(0x3db)+_0x16b484(0x3b6)+_0x16b484(0x463)+_0x16b484(0x3a0),'rgTWB':_0x16b484(0x5fb),'oTFwa':_0x16b484(0x14d),'iZhkW':_0x16b484(0x5f0)+'nel','lQpuj':'nav','fZDcV':'mn-si'+'de','Hacbm':'mn-lo'+'go','jOTrN':'<svg\x20'+_0x16b484(0x337)+'ox=\x220'+'\x200\x2024'+'\x2024\x22\x20'+_0x16b484(0x2c5)+_0x16b484(0x571)+'logo-'+_0x16b484(0x268)+_0x16b484(0x21e)+'\x20d=\x22M'+_0x16b484(0x5f2)+_0x16b484(0x51f)+_0x16b484(0x677)+_0x16b484(0x1d2)+'-4-7.'+'5\x200-2'+'.5\x201.'+_0x16b484(0x33f)+_0x16b484(0x4a7)+_0x16b484(0x600)+'\x204\x204.'+_0x16b484(0x111)+_0x16b484(0x24d)+_0x16b484(0x5e1)+'.5z\x22\x20'+_0x16b484(0x35b)+'\x22none'+_0x16b484(0x23b)+_0x16b484(0x205)+_0x16b484(0x1c9)+_0x16b484(0x597)+'troke'+_0x16b484(0x592)+'h=\x222\x22'+'\x20stro'+'ke-li'+_0x16b484(0x53a)+'=\x22rou'+_0x16b484(0x62e)+'troke'+_0x16b484(0x275)+'join='+_0x16b484(0x13e)+_0x16b484(0x66b)+_0x16b484(0x2fd)+_0x16b484(0x491)+'\x2212\x22\x20'+_0x16b484(0x678)+_0x16b484(0x578)+_0x16b484(0x3bc)+_0x16b484(0x1df)+'=\x22#ff'+'6b9d\x22'+'/></s'+'vg>','Uioyd':'mn-ma'+'in','tVAaC':_0x16b484(0x183),'YcdKA':'kours'+'trike'+_0x16b484(0x126)+'enu','MEVdy':'mn-cl'+_0x16b484(0x250),'MgMed':_0x16b484(0x27e),'wKurA':_0x16b484(0x53f)+'viewB'+_0x16b484(0x51e)+_0x16b484(0x54d)+_0x16b484(0x493)+'<path'+_0x16b484(0x252)+_0x16b484(0x2c8)+_0x16b484(0x361)+_0x16b484(0x1ac)+_0x16b484(0x388)+_0x16b484(0x1db)+'vg>','kJNhC':function(_0x47f0d4,_0x4f76f2){return _0x47f0d4+_0x4f76f2;},'PJtDP':_0x16b484(0x41f)+'l>','zDmXs':_0x16b484(0x4da)+'t','sMeKH':function(_0x195240){return _0x195240();},'tatfy':'fulls'+_0x16b484(0x4b1)+_0x16b484(0x334)+'s','xMLbX':function(_0x1c382d,_0x58f702){return _0x1c382d<_0x58f702;},'BgnJq':'oGzFI','Seuli':'CANVA'+'S','FKVNI':function(_0x3f729a,_0x415a80){return _0x3f729a===_0x415a80;},'iHcLl':_0x16b484(0x531)+'r','eSRtI':function(_0x21caae,_0x38347b){return _0x21caae*_0x38347b;},'sgPtG':_0x16b484(0x3bb)+_0x16b484(0x1d4)+_0x16b484(0x31d)+_0x16b484(0x5c2)+'5)','icDLY':function(_0x4a9385,_0x1690be){return _0x4a9385*_0x1690be;},'zkkDJ':function(_0x47ac4b,_0x15c39d){return _0x47ac4b*_0x15c39d;},'GQKAa':function(_0x12bc50,_0x2b19fa){return _0x12bc50+_0x2b19fa;},'dSyuq':function(_0x52dc49,_0x4c6115){return _0x52dc49*_0x4c6115;},'zSCiS':'KeyS','ErZvH':'LMB','hrrIo':'mouse'+'1','yNUvA':function(_0x11431f,_0x52e4cc,_0x5bdae2,_0x2a4edc,_0x4a910f,_0x51391e,_0x2207e7){return _0x11431f(_0x52e4cc,_0x5bdae2,_0x2a4edc,_0x4a910f,_0x51391e,_0x2207e7);},'vKDDA':_0x16b484(0x472)+'t','ubphM':_0x16b484(0x195)+'n','ihGSZ':function(_0x5b6f16,_0x1cbf15){return _0x5b6f16===_0x1cbf15;},'mppnF':function(_0x529e96,_0x2cf7ea){return _0x529e96-_0x2cf7ea;},'bauub':function(_0x3230a7,_0x2acf05){return _0x3230a7-_0x2acf05;},'NcdLt':function(_0x2f69fb){return _0x2f69fb();},'uipHA':function(_0x187322){return _0x187322();},'OyKUG':_0x16b484(0x18b),'tHRhw':function(_0x3eceb3,_0x3a5792,_0x3b53d0){return _0x3eceb3(_0x3a5792,_0x3b53d0);},'KhqxU':'canva'+'s','HDTxi':'posit'+'ion:f'+_0x16b484(0x22f)+_0x16b484(0x486)+':0;wi'+_0x16b484(0x1dc)+'00vw;'+_0x16b484(0x3d8)+_0x16b484(0x412)+'vh;z-'+_0x16b484(0x39f)+_0x16b484(0x3e6)+_0x16b484(0x2de)+'6;poi'+_0x16b484(0x4b8)+_0x16b484(0x265)+_0x16b484(0x446)+'e','NsDVx':'sakur'+_0x16b484(0x61b),'tNQhD':'comba'+'t','bJlOE':_0x16b484(0x62c)+'t','JGYsr':'visua'+'l','RgEyX':_0x16b484(0x5d7)+'l','sdIdM':'misc','jxKpg':_0x16b484(0x53f)+_0x16b484(0x337)+_0x16b484(0x51e)+_0x16b484(0x54d)+_0x16b484(0x493)+_0x16b484(0x21e)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+_0x16b484(0x677)+_0x16b484(0x1d2)+_0x16b484(0x1cb)+_0x16b484(0x5ed)+_0x16b484(0x40d)+_0x16b484(0x33f)+_0x16b484(0x4a7)+'5s4\x202'+_0x16b484(0x158)+'5c0\x203'+'-2.5\x20'+_0x16b484(0x5e1)+_0x16b484(0x24b)+_0x16b484(0x35b)+_0x16b484(0x173)+_0x16b484(0x23b)+'oke=\x22'+_0x16b484(0x1c9)+_0x16b484(0x597)+_0x16b484(0x198)+'-widt'+_0x16b484(0x2bb)+_0x16b484(0x464)+'ke-li'+_0x16b484(0x53a)+'=\x22rou'+_0x16b484(0x62e)+'troke'+_0x16b484(0x275)+_0x16b484(0x665)+'\x22roun'+_0x16b484(0x66b)+_0x16b484(0x2fd)+'e\x20cx='+_0x16b484(0x615)+_0x16b484(0x678)+_0x16b484(0x578)+_0x16b484(0x3bc)+_0x16b484(0x1df)+_0x16b484(0x519)+_0x16b484(0x620)+'/></s'+_0x16b484(0x64e),'ipxyf':_0x16b484(0x3a6)+'a\x20Kou'+'r','rmoiD':_0x16b484(0x4d0),'AClcA':_0x16b484(0x1f5),'koqUM':'Sakur'+_0x16b484(0x2c2),'IrBmD':function(_0x560641,_0x236f7b,_0x34a725,_0x5d5177,_0x3d34d1,_0x3f4087,_0x156e0a,_0xc01a0a){return _0x560641(_0x236f7b,_0x34a725,_0x5d5177,_0x3d34d1,_0x3f4087,_0x156e0a,_0xc01a0a);},'SMpCa':_0x16b484(0x326)+'ve','kpSHR':_0x16b484(0x53b)+'oil','ABBho':_0x16b484(0x3d4)+'nPlat'+'forms'+'.Over'+_0x16b484(0x553)+'Recoi'+'lMoti'+'on','EYmoB':_0x16b484(0x4ba)+'ooter','CRlSl':'SetGa'+_0x16b484(0x2cf)+_0x16b484(0x49e),'lGdqZ':'god'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x16b484(0x108)+_0x16b484(0x4b6)]||''))return;if(window[_0x16b484(0x442)+'URA_K'+_0x16b484(0x1b1)])return;window[_0x16b484(0x442)+_0x16b484(0x14c)+_0x16b484(0x1b1)]=!![];var _0x7c0f74=_0x4d0f9d['eSoDG'],_0x385a54=_0x16b484(0x68d)+'c6',_0x347e96={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x4d9d62={..._0x347e96};try{Object['assig'+'n'](_0x4d9d62,JSON[_0x16b484(0x636)](localStorage[_0x16b484(0x3f4)+'em'](_0x16b484(0x638)+_0x16b484(0x596)+'r.v1')||'{}'));}catch(_0x30f96f){}function _0x38c311(){var _0x4fe0e9=_0x16b484;try{localStorage[_0x4fe0e9(0x219)+'em'](_0x4fe0e9(0x638)+_0x4fe0e9(0x596)+_0x4fe0e9(0x1dd),JSON[_0x4fe0e9(0x5ea)+'gify'](_0x4d9d62));}catch(_0x329ac5){}}var _0x1e1995={'uwmk':!!window['Unity'+_0x16b484(0x66e)+_0x16b484(0x55f)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4d9d62['safeM'+'ode'],'lastError':''};try{if(_0x4d0f9d[_0x16b484(0x41b)]===_0x16b484(0x2f4)){var _0x86ad92=new _0x3ed78e(_0xface0e)['readF'+_0x16b484(0x32f)](_0x3f0f6c,_0x4d0f9d[_0x16b484(0x50d)]);return _0x86ad92?_0x86ad92[_0x16b484(0x4ee)]():-0x2457+-0xde3+0x323a;}else window['addEv'+_0x16b484(0x530)+_0x16b484(0x581)+'r'](_0x4d0f9d[_0x16b484(0x30c)],_0x3c6f33=>{var _0x24b7e1=_0x16b484;try{if('TVUzP'===_0x4d0f9d['iyujs']){_0x572a4a[_0x24b7e1(0x5f3)](_0x5a2c86[_0x24b7e1(0x4fc)]());if(_0x4d0f9d[_0x24b7e1(0x50a)](_0x14a343['lengt'+'h'],-0x1b37*0x1+-0x670+-0x3*-0xb45))_0xe39408['shift']();}else{var _0x1d104b=_0x3c6f33&&(_0x3c6f33['messa'+'ge']||_0x3c6f33[_0x24b7e1(0x1f5)]&&_0x3c6f33[_0x24b7e1(0x1f5)]['messa'+'ge'])||'unkno'+'wn';if(_0x3c6f33&&_0x3c6f33[_0x24b7e1(0x533)+_0x24b7e1(0x4b6)])_0x1d104b+=_0x4d0f9d[_0x24b7e1(0x3ad)]+String(_0x3c6f33[_0x24b7e1(0x533)+_0x24b7e1(0x4b6)])[_0x24b7e1(0x536)]('/')['pop']()+':'+(_0x3c6f33['linen'+'o']||'?');_0x1e1995[_0x24b7e1(0x47e)+'rror']=String(_0x1d104b)[_0x24b7e1(0x184)](0xf53*-0x2+-0x9ea+0x2890,0x1a60*0x1+0x209f+-0x3a5f);}}catch(_0xaf8e7c){}});}catch(_0x3a2818){}var _0x5c161b=null,_0x4f6c2a=null,_0x255c42={},_0x47fb90=[],_0x474d15=[],_0x18e478=new Map();function _0x232118(_0x52f051,_0x2dd551){var _0x1c9ba2=_0x16b484;if(_0x1c9ba2(0x454)!==_0x1c9ba2(0x21f)){if(!_0x2dd551||_0x52f051[_0x1c9ba2(0x1b0)+_0x1c9ba2(0x40b)](_0x2dd551)||_0x52f051[_0x1c9ba2(0x3a1)+'h']>-0x23de+0x840+-0x1*-0x1bde)return;_0x52f051['push'](_0x2dd551);}else{if(!_0x5a83d6[_0x1c9ba2(0x304)+_0x1c9ba2(0x633)])_0x10c560['delet'+'e'](_0x4d0f9d[_0x1c9ba2(0x325)](_0x1c9ba2(0x359),_0x51e04d['butto'+'n']+(-0x365+-0x2336+0x269c)));}}function _0x384fd2(_0x390c0a,_0x318c4d,_0x46a902,_0x57edc2){var _0x235235=_0x16b484,_0x498f2b={'jNrJt':function(_0x29b8bf,_0x250f4b){return _0x29b8bf+_0x250f4b;}};if('NwmAY'===_0x4d0f9d[_0x235235(0x588)]){var _0x2bcb42=-0x1c75+-0x1*-0x4ac+0x17c9;try{_0x2bcb42=_0x318c4d&&_0x318c4d['val']?_0x318c4d[_0x235235(0x4ee)]():-0x1ff3+-0x1d46+0x3d39;}catch(_0x41ecb5){}if(!_0x2bcb42)return;_0x4d0f9d[_0x235235(0x15a)](_0x232118,_0x390c0a,_0x2bcb42),_0x46a902[_0x57edc2]=_0x390c0a['lengt'+'h'];if(_0x57edc2===_0x4d0f9d[_0x235235(0x227)]&&_0x390c0a[_0x235235(0x3a1)+'h']){var _0x1be52e=_0x255c42[_0x235235(0x326)+'ve'];if(_0x1be52e){if(_0x4d0f9d[_0x235235(0x12c)](_0x235235(0x11b),_0x235235(0x11b)))try{_0x1be52e[_0x235235(0x101)+'ed']=![];}catch(_0x52146a){}else{if(_0x3e3c59[_0x16c29c]['id']&&_0x22ab27[_0x170635]['id']['index'+'Of'](_0x4d0f9d['mOIGC'])===-0xcd*-0x9+0xf83+-0x4*0x5ae)_0x4f4855[_0x538fc6]['style']['displ'+'ay']=_0x4d0f9d[_0x235235(0x398)];}}}}else _0x4df662['textC'+_0x235235(0x370)+'t']=_0x3fb7ee(_0x10cbb2[_0x235235(0x378)]),_0x1cee26['style'][_0x235235(0x2f3)+_0x235235(0x196)+'y']('--p',_0x498f2b['jNrJt']((_0x3bc8cb['value']-_0x1e37be)/(_0x4c45a6-_0x1bfda7)*(-0x1*0x1e9+-0x1*-0xc19+-0x9cc),'%'));}function _0x4f19a9(_0x3ed836,_0xba3ce7,_0x20aa62){var _0x53d7eb=_0x16b484,_0x4aa891=_0x18e478['get'](_0x3ed836);if(!_0x4aa891){if(_0x53d7eb(0x13c)!==_0x4d0f9d[_0x53d7eb(0x65e)])_0x4aa891=new Map(),_0x18e478[_0x53d7eb(0x4c8)](_0x3ed836,_0x4aa891);else{var _0x32da94=_0x58016b[_0x53d7eb(0x5c3)+'ren'];for(var _0x5d137a=-0x1*-0xa59+0xbd0+-0x1*0x1629;_0x4d0f9d[_0x53d7eb(0x37a)](_0x5d137a,_0x32da94['lengt'+'h']);_0x5d137a++){if(_0x32da94[_0x5d137a]['id']&&_0x32da94[_0x5d137a]['id'][_0x53d7eb(0x39f)+'Of'](_0x4d0f9d['mOIGC'])===-0xa99+0x1d3*0x1+0x8c6)_0x32da94[_0x5d137a]['style'][_0x53d7eb(0x5bd)+'ay']=_0x4d0f9d['ZgslU'];}}}if(!_0x4aa891[_0x53d7eb(0x3fb)](_0xba3ce7))try{var _0x537498=new _0x5c161b(_0x3ed836)['readF'+'ield'](_0xba3ce7,_0x20aa62);_0x4aa891['set'](_0xba3ce7,_0x537498!==undefined?_0x537498['val']():null);}catch(_0x455d24){_0x4aa891['set'](_0xba3ce7,null);}return _0x4aa891[_0x53d7eb(0x26e)](_0xba3ce7);}function _0x117afa(_0x291640,_0x20a355,_0x396595,_0xa65d04){var _0x39f5f6=_0x16b484,_0x250636={'omWra':'left','cHgOg':_0x4d0f9d[_0x39f5f6(0x627)]};if('JrQnL'===_0x4d0f9d['ZBRml'])try{if(_0x39f5f6(0x673)===_0x4d0f9d[_0x39f5f6(0x344)]){var _0x576084={'qPSbv':function(_0xd51ef5){return _0xd51ef5();}};return[_0x505df8(_0x4d0f9d[_0x39f5f6(0x1fd)],_0x39f5f6(0x2dd)+_0x39f5f6(0x45e)+_0x39f5f6(0x3a5)+'\x20bann'+'er\x20sl'+_0x39f5f6(0x646),_0x15be13[_0x39f5f6(0x1ad)+'ck'],_0x22423d=>{var _0x2ddcbc=_0x39f5f6;_0xe4d25c[_0x2ddcbc(0x1ad)+'ck']=_0x22423d,_0x576084[_0x2ddcbc(0x202)](_0x40a0bb);},[_0x55edbc('Takes'+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+_0x39f5f6(0x300)+_0x39f5f6(0x396)+'.')])];}else new _0x5c161b(_0x291640)[_0x39f5f6(0x140)+'Field'](_0x20a355,_0x396595,_0xa65d04);}catch(_0x245997){}else{var _0xcf7faa=('4|10|'+'0|7|2'+_0x39f5f6(0x5ba)+_0x39f5f6(0x577)+'|9')[_0x39f5f6(0x536)]('|'),_0x3cf209=0x13ed+0x12b6+-0x26a3;while(!![]){switch(_0xcf7faa[_0x3cf209++]){case'0':_0x2ca713[_0x39f5f6(0x525)]=_0x39f5f6(0x641)+'2px\x20u'+_0x39f5f6(0x502)+'ospac'+_0x39f5f6(0x669)+_0x39f5f6(0x651)+'e';continue;case'1':var _0x3648f0=(_0x47e771,_0x1718d3)=>{_0x3acd90['fillS'+'tyle']=_0x1718d3||_0x1e3c78['TRJsY'],_0x5eeb32['fillT'+'ext'](_0x47e771,_0x4cfc54,_0x26c150),_0x26c150+=0x189a*0x1+0x22bb+-0x3b45;};continue;case'2':_0x21ebb8['textB'+'aseli'+'ne']='top';continue;case'3':if(!_0x2e7326[_0x39f5f6(0x2d8)+'oaded'])_0x3648f0('waiti'+_0x39f5f6(0x601)+'r\x20gam'+'e…',_0x39f5f6(0x3bb)+_0x39f5f6(0x148)+'80,19'+_0x39f5f6(0x128)+')');continue;case'4':var _0x1e3c78={'TRJsY':_0x39f5f6(0x3bb)+_0x39f5f6(0x1d4)+'35,24'+_0x39f5f6(0x114)+'5)'};continue;case'5':var _0x26c150=-0xdfd*0x2+-0x2*-0x115a+-0x68e*0x1,_0x4cfc54=0x7fd+0x362*0x5+-0x18db;continue;case'6':if(_0x8cc263[_0x39f5f6(0x487)])_0x3648f0(_0xfcdb3f+'\x20FPS');continue;case'7':_0x17c116[_0x39f5f6(0x2ba)+'lign']=_0x250636['omWra'];continue;case'8':_0x3648f0('SAKUR'+'A\x20KOU'+_0x39f5f6(0x3bf)+'1',_0x250636[_0x39f5f6(0x3a7)]);continue;case'9':_0x5205d8[_0x39f5f6(0x395)+'re']();continue;case'10':_0x3ff42e[_0x39f5f6(0x112)]();continue;}break;}}}function _0x1cc88b(_0x20287c,_0x3cee04){var _0xa4fa70=_0x16b484,_0x30eb9f={'OyOvE':_0xa4fa70(0x310)};try{if(_0x4d0f9d[_0xa4fa70(0x237)]('WieKp','WieKp')){var _0x208a7c=_0x369d82['creat'+_0xa4fa70(0x15e)+_0xa4fa70(0x1d0)](_0x30eb9f['OyOvE']);_0x208a7c[_0xa4fa70(0x2c5)+_0xa4fa70(0x470)]=_0xa4fa70(0x51b)+'nt',_0x208a7c['textC'+_0xa4fa70(0x370)+'t']=_0x38e01a,_0x2037e4[_0xa4fa70(0x2af)+'dChil'+'d'](_0x208a7c);}else{var _0x3aec4a=new _0x5c161b(_0x20287c)['readF'+_0xa4fa70(0x32f)](_0x3cee04,_0x4d0f9d['RskDZ']);return _0x3aec4a?_0x3aec4a['val']():0x2*0xcec+-0x1*-0x1504+-0x2*0x176e;}}catch(_0x3ff602){return-0x8ab*0x1+0x17cd+0x12a*-0xd;}}function _0x1949a9(_0xf9b3e4,_0x4d3361,_0x51a706,_0x63d6a8){var _0x355569=_0x4f19a9(_0xf9b3e4,_0x4d3361,_0x51a706);if(_0x355569!=null)_0x4d0f9d['nsKVx'](_0x117afa,_0xf9b3e4,_0x4d3361,_0x51a706,_0x355569*_0x63d6a8);}function _0x4b351d(_0x397e10,_0x370000,_0x2cf618,_0x15a5fd,_0x491936,_0x3440e2,_0xe6f5a9){var _0x43cd01=_0x16b484;if(_0x43cd01(0x110)!==_0x43cd01(0x110))_0x309088['god']=_0x8d2816,_0x5b0db8(),_0x35e1f1('god',_0x4370de),_0x53834a(_0x43cd01(0x475)+'e',_0xea9e91);else try{if(_0x4d0f9d[_0x43cd01(0x12c)](_0x43cd01(0x329),'RVlnv'))_0x2dbdf1[_0x43cd01(0x4bc)]('[saku'+'ra-ko'+'ur]\x20U'+'WMK\x20i'+'nit\x20f'+_0x43cd01(0x54a)+':',_0x381514&&_0x256cd8[_0x43cd01(0x155)+'ge']);else{var _0x23e6b5=(_0x43cd01(0x663)+_0x43cd01(0x652))['split']('|'),_0x9a0ee2=-0x20e7*0x1+0x5da+0x1b0d;while(!![]){switch(_0x23e6b5[_0x9a0ee2++]){case'0':_0x1e1995[_0x43cd01(0x427)+_0x43cd01(0x220)]++;continue;case'1':_0x344753['enabl'+'ed']=_0x4d0f9d['wbKOd'](_0xe6f5a9,![]);continue;case'2':return _0x344753;case'3':var _0x344753=_0x4f6c2a[_0x43cd01(0x274)+'refix']({'typeName':_0x370000,'methodName':_0x2cf618,'params':_0x15a5fd,'returnType':_0x491936},_0x3440e2);continue;case'4':_0x255c42[_0x397e10]=_0x344753;continue;}break;}}}catch(_0x10f5f6){return console['warn'](_0x4d0f9d['pNKtm'],_0x397e10,_0x10f5f6&&_0x10f5f6['messa'+'ge']),null;}}function _0x5ee5e2(_0x4af12d,_0x1d9e29,_0xdceb26,_0x4f290d,_0x2585c7,_0x272bcb,_0x5171af){var _0xfe645a=_0x16b484,_0x48d1c6={'pKDgR':function(_0x49f658){return _0x49f658();}};try{var _0x5932d3=_0x4d0f9d['QGIZB'][_0xfe645a(0x536)]('|'),_0x263b4e=-0xfa9+0x1df9+0x728*-0x2;while(!![]){switch(_0x5932d3[_0x263b4e++]){case'0':return _0x162395;case'1':_0x1e1995['hooks'+_0xfe645a(0x220)]++;continue;case'2':_0x162395[_0xfe645a(0x101)+'ed']=_0x5171af!==![];continue;case'3':var _0x162395=_0x4f6c2a['hookP'+_0xfe645a(0x27b)+'x']({'typeName':_0x1d9e29,'methodName':_0xdceb26,'params':_0x4f290d,'returnType':_0x2585c7},_0x272bcb);continue;case'4':_0x255c42[_0x4af12d]=_0x162395;continue;}break;}}catch(_0x2843ab){if('fEyDZ'!==_0xfe645a(0x52c))_0x398990['ksPos']=_0x5e7061,_0x48d1c6['pKDgR'](_0x2734c5);else return console[_0xfe645a(0x4bc)](_0x4d0f9d[_0xfe645a(0x4c7)],_0x4af12d,_0x2843ab&&_0x2843ab[_0xfe645a(0x155)+'ge']),null;}}var _0x3f00a5=()=>![];try{if(window[_0x16b484(0x5fa)+'WebMo'+'dkit']&&!_0x4d9d62[_0x16b484(0xfa)+'ode']){var _0x33595b=(_0x16b484(0x374)+'|6|2|'+'3|1')[_0x16b484(0x536)]('|'),_0xee5aa4=-0x1eae+0x551*0x7+-0x1*0x689;while(!![]){switch(_0x33595b[_0xee5aa4++]){case'0':_0x4f6c2a=window[_0x16b484(0x5fa)+_0x16b484(0x66e)+'dkit']['Runti'+'me'][_0x16b484(0x261)+_0x16b484(0x263)+'in']({'name':_0x4d0f9d['koqUM'],'version':'1.1.0','referencedAssemblies':['Assem'+'bly-C'+_0x16b484(0x327)+'.dll']});continue;case'1':if(_0x4d9d62['hookC'+_0x16b484(0x287)+'e'])_0x4d0f9d['IrBmD'](_0x5ee5e2,_0x4d0f9d[_0x16b484(0x5cc)],_0x16b484(0x3d4)+_0x16b484(0x41d)+_0x16b484(0x18c)+'.Over'+_0x16b484(0x553)+_0x16b484(0x4f6)+'ent','IsGro'+_0x16b484(0x3f7),[_0x4d0f9d[_0x16b484(0x264)]],_0x4d0f9d['eTaus'],(_0x2fa236,_0x4de919)=>{var _0x341e18=_0x16b484;_0x384fd2(_0x47fb90,_0x4de919,_0x1e1995,_0x341e18(0x485)+'ents');},!![]);continue;case'2':if(_0x4d9d62[_0x16b484(0x2ce)+_0x16b484(0x399)+'il'])_0x4b351d(_0x4d0f9d['kpSHR'],_0x4d0f9d[_0x16b484(0x5a6)],'Tick',['i32'],undefined,_0x3f00a5,!!_0x4d9d62['noRec'+'oil']);continue;case'3':if(_0x4d9d62[_0x16b484(0x451)+_0x16b484(0x287)+'e'])_0x5ee5e2(_0x4d0f9d['EYmoB'],_0x16b484(0x4d6)+'ter',_0x4d0f9d[_0x16b484(0x4c2)],[_0x4d0f9d[_0x16b484(0x264)],_0x4d0f9d[_0x16b484(0x264)]],undefined,(_0x67206e,_0x463407)=>{_0x4d0f9d['uuYru'](_0x384fd2,_0x474d15,_0x463407,_0x1e1995,_0x4d0f9d['Qinod']);},!![]);continue;case'4':_0x5c161b=window['Unity'+'WebMo'+'dkit'][_0x16b484(0x3c0)+_0x16b484(0x552)+'er'];continue;case'5':if(_0x4d9d62[_0x16b484(0x455)+'od'])_0x4b351d(_0x4d0f9d[_0x16b484(0x1f0)],_0x16b484(0x4ff)+'th',_0x16b484(0x5db)+'ateTa'+_0x16b484(0x5e6)+'lth',[_0x16b484(0x1e9),_0x4d0f9d[_0x16b484(0x264)]],undefined,_0x3f00a5,!!_0x4d9d62[_0x16b484(0x323)]);continue;case'6':if(_0x4d9d62['hookG'+_0x16b484(0x47c)])_0x4b351d(_0x16b484(0x475)+'e',_0x16b484(0x4ff)+'th','Local'+'Die',[_0x16b484(0x1e9),_0x4d0f9d['eTaus'],_0x16b484(0x1e9),_0x4d0f9d[_0x16b484(0x264)],_0x4d0f9d['eTaus']],undefined,_0x3f00a5,!!_0x4d9d62['god']);continue;}break;}}}catch(_0x3b3100){console[_0x16b484(0x4bc)]('[saku'+_0x16b484(0x512)+'ur]\x20U'+_0x16b484(0x141)+_0x16b484(0x63a)+'ailed'+':',_0x3b3100&&_0x3b3100['messa'+'ge']);}function _0x5f4fb7(_0x4e3986,_0x97faa8){var _0x831b94=_0x16b484,_0x54b3ea=_0x255c42[_0x4e3986];if(_0x54b3ea)try{_0x54b3ea[_0x831b94(0x101)+'ed']=!!_0x97faa8;}catch(_0x27975e){}}_0x4d0f9d[_0x16b484(0x1d9)](setInterval,()=>{var _0x167f30=_0x16b484;if(!_0x5c161b||!window['unity'+_0x167f30(0x689)+'nce'])return;var _0x7d96e7=(Number(_0x4d9d62[_0x167f30(0x1a7)+_0x167f30(0x256)])||0x20e8+-0x1906+0x2*-0x3bf)/(0x9da+-0x1bfe+0x1288),_0xed8f41=(Number(_0x4d9d62['jumpP'+'ct'])||-0x12f3+-0x5*0x2ab+0x20ae)/(0x1e26+0x1*0x1126+-0x13*0x278),_0x32824e=(_0x4d0f9d[_0x167f30(0x295)](Number,_0x4d9d62['gravi'+_0x167f30(0x4a3)])||-0x745*-0x5+0x1b9d+-0x3f92)/(0x7b8+0x2229*0x1+-0x2b*0xf7),_0x324af3=Math['max'](-0x597+0x2*0x2e+0x53c,_0x4d0f9d['ejarC'](Number,_0x4d9d62['damag'+_0x167f30(0x534)+'e'])||-0x1fc0+-0x18af+0x3905),_0x5c2e21=_0x7d96e7!==-0x2*-0x1143+0xa*-0x3b7+0x1*0x2a1||_0xed8f41!==-0x2076+0x2634+-0x5bd||_0x32824e!==-0xaa4+0x1910+-0xe6b||_0x4d9d62['bhop'],_0x255e37=_0x4d9d62['noSpr'+_0x167f30(0x1d6)]||_0x4d9d62[_0x167f30(0x1d8)+'eExp']||_0x4d9d62['infAm'+_0x167f30(0x44c)]||_0x4d9d62['rapid'+'Exp'];if(!_0x5c2e21&&!_0x255e37)return;try{if(_0x4d0f9d[_0x167f30(0x45c)]!==_0x167f30(0x2d0))return _0x2d3ca7[_0x167f30(0x4bc)]('[saku'+'ra-ko'+_0x167f30(0x5b3)+'ook\x20r'+'eg\x20fa'+'iled:',_0x1ee48b,_0x4fcf1f&&_0x4211b7[_0x167f30(0x155)+'ge']),null;else for(var _0x4d08e2=0xd36+-0x925+-0x411;_0x4d0f9d[_0x167f30(0x1fb)](_0x4d08e2,_0x47fb90['lengt'+'h']);_0x4d08e2++){var _0xb65759=_0x47fb90[_0x4d08e2];if(!_0xb65759)continue;_0x4d0f9d[_0x167f30(0x63d)](_0x7d96e7,0x151d+0x1622+0x6*-0x735)&&(_0x1949a9(_0xb65759,-0x176*-0x2+0x1eb0+0x2*-0x10ba,'f32',_0x7d96e7),_0x1949a9(_0xb65759,0x2663+-0x6c8+-0x1f6f,_0x4d0f9d[_0x167f30(0x3d0)],_0x7d96e7),_0x1949a9(_0xb65759,0x100f*0x1+0x3b*0x8+-0x11b7*0x1,_0x4d0f9d['iUttz'],_0x7d96e7),_0x4d0f9d[_0x167f30(0x2da)](_0x1949a9,_0xb65759,0x11e*0x14+0x190e+-0x2*0x1799,_0x4d0f9d['iUttz'],_0x7d96e7),_0x1949a9(_0xb65759,-0x447*-0x3+-0x17b*0x7+-0x25c*0x1,_0x167f30(0x16f),_0x7d96e7),_0x1949a9(_0xb65759,0x7b4+-0x1378+0xbe4,_0x167f30(0x16f),_0x7d96e7));if(_0xed8f41!==-0x1dc1+-0x2*0xc52+0xd3*0x42)_0x1949a9(_0xb65759,-0xabc+0x6*0x20b+-0x136,_0x4d0f9d[_0x167f30(0x3d0)],_0xed8f41);_0x4d0f9d[_0x167f30(0x237)](_0x32824e,-0x14a6+0x107*0x7+0xd76)&&(_0x1949a9(_0xb65759,0x1215*0x2+-0x197*0xc+0x6*-0x2cd,_0x167f30(0x16f),_0x32824e),_0x1949a9(_0xb65759,0x1*-0x10e2+-0x1c35+-0x1*-0x2d63,'f32',_0x32824e));if(_0x4d9d62['bhop'])_0x4d0f9d['nsKVx'](_0x117afa,_0xb65759,0x9a+0x2598+-0x2*0x12cb,'f32',-(0x10eb+-0xe*-0x54+-0x7*0x284));}}catch(_0xee2882){}try{for(var _0x2d3388=-0x1*-0x125b+0x6*0x4d3+-0x2f4d;_0x2d3388<_0x474d15[_0x167f30(0x3a1)+'h'];_0x2d3388++){var _0x4a17e9=_0x4d0f9d['OYpWQ'](_0x1cc88b,_0x474d15[_0x2d3388],-0x19cd+0x2520+-0xb1b);if(!_0x4a17e9)continue;_0x4d9d62['damag'+_0x167f30(0x2c9)]&&(_0x4d0f9d['xPuJK'](_0x117afa,_0x4a17e9,-0x1*-0x192a+0x7*0xb7+0x3*-0x9f5,_0x4d0f9d[_0x167f30(0x264)],_0x324af3),_0x117afa(_0x4a17e9,0x175*0x18+-0x4b0+-0x1df4,_0x4d0f9d[_0x167f30(0x264)],_0x324af3));_0x4d9d62[_0x167f30(0x367)+'ead']&&(_0x167f30(0x629)===_0x167f30(0x629)?(_0x117afa(_0x4a17e9,0x59e+0xe6d+-0x1383,_0x167f30(0x16f),-0x1514+-0x1994+-0x1754*-0x2),_0x117afa(_0x4a17e9,-0x28d*0x2+0x67a+-0xf8,_0x167f30(0x16f),0x77d+0x26cb*-0x1+-0x479*-0x7)):_0xed4d96[_0x167f30(0x38c)]());if(_0x4d9d62['infAm'+_0x167f30(0x44c)])_0x117afa(_0x4a17e9,0x10e8+0x1*0x10c7+-0x2153,_0x4d0f9d['eTaus'],-0x9e+0xa28+-0x25*0x27);_0x4d9d62['rapid'+'Exp']&&(_0x1949a9(_0x4a17e9,0x17ef*-0x1+0x1*-0xa7f+0x22fa,_0x4d0f9d['iUttz'],0x63a*-0x6+-0x15eb+0x3b47+0.1),_0x117afa(_0x4a17e9,0x1*0x1c37+0x1795+-0x336c,'f32',0xdde*0x1+0x6b+-0xe49+0.1));}}catch(_0x4d9cf2){}},-0x1b1+-0x475*0x7+0x21ac),setInterval(()=>{var _0x5f3b2c=_0x16b484;_0x1e1995['gameL'+_0x5f3b2c(0x212)]=!!window[_0x5f3b2c(0x526)+_0x5f3b2c(0x689)+_0x5f3b2c(0x387)];try{if(_0x4d0f9d['gDCWH']('qIgzY','PbKEl')){var _0x129adc=0xda*0x10+-0xa*-0x291+-0x274a;for(var _0x4490b7 in _0x255c42){if('SBIAP'==='SBIAP'){if(_0x255c42[_0x4490b7]&&_0x255c42[_0x4490b7][_0x5f3b2c(0x15b)+'ed'])_0x129adc++;}else _0x5211cf=_0x45c8ac&&_0x290d86[_0x5f3b2c(0x4ee)]?_0x526459[_0x5f3b2c(0x4ee)]():0x1*0x10eb+-0x264f+0x1564;}_0x1e1995[_0x5f3b2c(0x427)+'Ok']=_0x129adc;}else _0x26e405['font']=_0x4d0f9d[_0x5f3b2c(0x622)](_0x4d0f9d['yIeuK']+_0x4f286b[_0x5f3b2c(0x587)]((0x111+0x1f*-0x37+0x1*0x5a1)*_0x12daeb),_0x4d0f9d['XtiDs']),_0xa3c620['fillS'+_0x5f3b2c(0x4e5)]=_0xa6fc84?_0x4d0f9d[_0x5f3b2c(0x647)]:'rgba('+_0x5f3b2c(0x1d4)+_0x5f3b2c(0x31d)+'0,0.5'+'5)',_0x3c76d1[_0x5f3b2c(0x2a1)+_0x5f3b2c(0x2fc)](_0x472c7f,_0x400aa6+_0x4d0f9d[_0x5f3b2c(0x2e4)](_0x50f243,-0x5*-0x22d+0x95+-0xb74),_0x4d0f9d['aThls'](_0x4d0f9d[_0x5f3b2c(0x325)](_0x9232c3,_0x2a2b3b/(0xb*0x229+-0x47*-0x57+0x552*-0x9)),(-0x24bc+-0x1ab*0x12+0x67*0xa6)*_0x450fb1));}catch(_0x11a32d){}},0x21a2+-0x341+-0x1a79);var _0x344ff3=new Set(),_0x25238b={0x1:[],0x3:[]},_0x5761d5=![];function _0x128618(_0x1e2ea0){var _0x1ec9c6=_0x16b484,_0x4aa253={'ptwNH':_0x1ec9c6(0x5fa)+_0x1ec9c6(0x61c)+'e.App'+_0x1ec9c6(0x48c)+_0x1ec9c6(0xfc),'lSpKd':_0x4d0f9d[_0x1ec9c6(0x3ec)]};if('QtvWr'!==_0x4d0f9d[_0x1ec9c6(0x4a6)])_0x344ff3[_0x1ec9c6(0x3c9)](_0x1e2ea0[_0x1ec9c6(0x3fe)]);else{if(_0x423de9)_0x5d2a40[_0x1ec9c6(0x2ed)](_0x4aa253['ptwNH'],_0x4aa253[_0x1ec9c6(0x541)],[-0x1a*-0x25+-0xa65+0x7*0x115]);}}function _0x5cab0a(_0x3d0ccc){var _0x560df1=_0x16b484,_0x2613d7={'AyCJR':function(_0x5419ef){return _0x5419ef();}};_0x560df1(0x24f)!==_0x4d0f9d[_0x560df1(0x32a)]?(_0x5096a4[_0x560df1(0x5da)+'ropag'+_0x560df1(0x523)](),_0x2613d7['AyCJR'](_0x39aa85)):_0x344ff3[_0x560df1(0x18e)+'e'](_0x3d0ccc[_0x560df1(0x3fe)]);}function _0x1302c5(_0x514a8d){var _0x2595ab=_0x16b484;if(_0x514a8d[_0x2595ab(0x304)+'ura'])return;_0x344ff3[_0x2595ab(0x3c9)](_0x4d0f9d[_0x2595ab(0x311)]+_0x4d0f9d[_0x2595ab(0x45d)](_0x514a8d['butto'+'n'],0xe7a+0x21c0+-0x3039));var _0x2b0c08=_0x25238b[_0x514a8d[_0x2595ab(0x186)+'n']+(0x828*-0x3+-0x186c+-0x1*-0x30e5)];if(_0x2b0c08){if(_0x4d0f9d[_0x2595ab(0x63d)](_0x2595ab(0xf6),_0x4d0f9d['XnTFt'])){_0x2b0c08['push'](performance[_0x2595ab(0x4fc)]());if(_0x4d0f9d[_0x2595ab(0x49c)](_0x2b0c08['lengt'+'h'],0x1*0x771+0x3*0x3e1+-0x4*0x4bb))_0x2b0c08[_0x2595ab(0x1cd)]();}else _0x4d0f9d['nsKVx'](_0x1092f5,_0xbd48b7,0x1a25+-0x205*0x7+-0x9e*0x13,_0x2595ab(0x16f),_0x2eaad2),_0x5b06a6(_0x3b1558,0xe73+0x13df+-0x2*0x1103,_0x2595ab(0x16f),_0x2e28f4);}}function _0x56ba04(_0x110cbd){var _0x2389ce=_0x16b484;if(!_0x110cbd[_0x2389ce(0x304)+_0x2389ce(0x633)])_0x344ff3[_0x2389ce(0x18e)+'e'](_0x2389ce(0x359)+(_0x110cbd['butto'+'n']+(0x9*-0x173+0x1*-0x2619+0x1*0x3325)));}function _0x30304b(){var _0x1982a5=_0x16b484;_0x344ff3[_0x1982a5(0x38c)]();}function _0x3860fd(){var _0x563fe8=_0x16b484,_0x187db4=(_0x563fe8(0x13b)+'|5|1|'+'2|0')[_0x563fe8(0x536)]('|'),_0x31917e=-0xf2+-0x1691+0x1783;while(!![]){switch(_0x187db4[_0x31917e++]){case'0':window['addEv'+'entLi'+_0x563fe8(0x581)+'r'](_0x4d0f9d[_0x563fe8(0x20c)],_0x30304b);continue;case'1':window['addEv'+'entLi'+_0x563fe8(0x581)+'r']('mouse'+_0x563fe8(0x511),_0x1302c5,!![]);continue;case'2':window[_0x563fe8(0x136)+'entLi'+_0x563fe8(0x581)+'r'](_0x4d0f9d['aPYGP'],_0x56ba04,!![]);continue;case'3':window[_0x563fe8(0x136)+_0x563fe8(0x530)+'stene'+'r']('keydo'+'wn',_0x128618,!![]);continue;case'4':_0x5761d5=!![];continue;case'5':window[_0x563fe8(0x136)+_0x563fe8(0x530)+_0x563fe8(0x581)+'r'](_0x4d0f9d[_0x563fe8(0x433)],_0x5cab0a,!![]);continue;case'6':if(_0x5761d5)return;continue;}break;}}function _0x33d295(_0x6a79f2){var _0x55b536=_0x16b484,_0x28fd54=_0x25238b[_0x6a79f2]||[],_0xd3ad9f=performance[_0x55b536(0x4fc)]();while(_0x28fd54['lengt'+'h']&&_0xd3ad9f-_0x28fd54[0x2441*-0x1+0x417*0x1+-0x1*-0x202a]>0x20ef*0x1+-0x1d68+0x1*0x61)_0x28fd54[_0x55b536(0x1cd)]();return _0x28fd54[_0x55b536(0x3a1)+'h'];}function _0x36392d(_0x25b9b9){var _0x256231=_0x16b484;if(document[_0x256231(0x280)]&&(document['ready'+_0x256231(0x2ca)]===_0x256231(0x540)+_0x256231(0x3b3)+'e'||document[_0x256231(0x32e)+_0x256231(0x2ca)]===_0x256231(0x4fa)+'ete'))_0x25b9b9();else document['addEv'+_0x256231(0x530)+_0x256231(0x581)+'r'](_0x256231(0x503)+_0x256231(0x193)+_0x256231(0x52b)+'d',_0x25b9b9,{'once':!![]});}_0x4d0f9d[_0x16b484(0x295)](_0x36392d,()=>{var _0x5b4dfa=_0x16b484,_0x39b185={'cfERX':function(_0x54fac4,_0x4d6268){return _0x54fac4!==_0x4d6268;},'tDUUz':_0x5b4dfa(0x279),'RQcnY':'kour-'+_0x5b4dfa(0x20a)+_0x5b4dfa(0x4e2)+'paren'+'t','dInte':'kour-'+'io_30'+_0x5b4dfa(0x2b7)+_0x5b4dfa(0x49b)+'nt','NqiqS':_0x4d0f9d['tatfy'],'BAMDg':function(_0x4b5674,_0xbefb8){return _0x4b5674===_0xbefb8;},'AIMOC':function(_0x1eb9b8,_0x4f8490){return _0x4d0f9d['xMLbX'](_0x1eb9b8,_0x4f8490);},'vBqYB':function(_0x2cc21c){return _0x2cc21c();},'jMsJg':function(_0x305add,_0x7c9dc8,_0x22f6a9,_0xec2a1a,_0x15ff3c){return _0x305add(_0x7c9dc8,_0x22f6a9,_0xec2a1a,_0x15ff3c);},'vFAGD':_0x4d0f9d[_0x5b4dfa(0x522)],'mawLJ':_0x4d0f9d['Seuli'],'wuBSK':'zcDHD','agzOl':function(_0x2eb4e9,_0xe27a9b){var _0x41ffd3=_0x5b4dfa;return _0x4d0f9d[_0x41ffd3(0x604)](_0x2eb4e9,_0xe27a9b);},'ATjIv':function(_0x14d137,_0x41289f){return _0x14d137===_0x41289f;},'oSRCO':function(_0x1df67c,_0x32fb99){var _0x73f1b6=_0x5b4dfa;return _0x4d0f9d[_0x73f1b6(0x1f1)](_0x1df67c,_0x32fb99);},'nQHIw':function(_0x5defd5,_0x3f2fbe){return _0x5defd5*_0x3f2fbe;},'ZVKuF':_0x5b4dfa(0x3bb)+_0x5b4dfa(0x148)+_0x5b4dfa(0x17b)+_0x5b4dfa(0x292)+'5)','Gfgui':_0x4d0f9d[_0x5b4dfa(0x605)],'PVuyK':_0x5b4dfa(0x686)+'e','hMcTh':function(_0xbd4e99,_0xb53b8b){return _0xbd4e99+_0xb53b8b;},'NDXiM':function(_0x3939e3,_0x282cf6){return _0x4d0f9d['YTfSY'](_0x3939e3,_0x282cf6);},'avTby':function(_0x1ca731,_0x512bfb){return _0x1ca731/_0x512bfb;},'OLIwJ':function(_0x394b8c,_0x101943){return _0x4d0f9d['eSRtI'](_0x394b8c,_0x101943);},'yWDvr':_0x4d0f9d[_0x5b4dfa(0x115)],'jruYY':function(_0x16cfd1,_0x28c9ac){var _0x3a5605=_0x5b4dfa;return _0x4d0f9d[_0x3a5605(0x325)](_0x16cfd1,_0x28c9ac);},'uReUV':_0x5b4dfa(0x16f),'yEIQc':function(_0x4eebc2,_0x4378b3){return _0x4eebc2*_0x4378b3;},'zpojc':function(_0x384fe7,_0x1d1c99){return _0x4d0f9d['icDLY'](_0x384fe7,_0x1d1c99);},'tdmLe':function(_0x403730,_0x1d8a75){var _0x2933b4=_0x5b4dfa;return _0x4d0f9d[_0x2933b4(0x637)](_0x403730,_0x1d8a75);},'yZCyU':function(_0xde2ce3,_0xefbbe5){return _0x4d0f9d['GQKAa'](_0xde2ce3,_0xefbbe5);},'uzDhK':function(_0x196096,_0x44160f){return _0x4d0f9d['dSyuq'](_0x196096,_0x44160f);},'dIgvS':function(_0x20175b,_0x3800c2){return _0x20175b*_0x3800c2;},'PUjzz':function(_0x2afa15,_0x5ec1d6){return _0x2afa15-_0x5ec1d6;},'WHCCY':function(_0x474306,_0x9877fc){return _0x474306-_0x9877fc;},'YRYwU':function(_0x275f15,_0x801e49,_0x2d27b8,_0x590944,_0x125cab,_0x227b9e,_0x2fb6e3){return _0x275f15(_0x801e49,_0x2d27b8,_0x590944,_0x125cab,_0x227b9e,_0x2fb6e3);},'gGuWc':_0x5b4dfa(0x2c0),'vdFdj':function(_0x4aa4a8,_0x4b550e){return _0x4aa4a8+_0x4b550e;},'VCvyA':_0x5b4dfa(0x48d),'lymaA':_0x4d0f9d[_0x5b4dfa(0x53e)],'dqgTm':function(_0x378eb3,_0x11894e){return _0x378eb3+_0x11894e;},'hdSSj':'KeyD','djYMZ':_0x4d0f9d[_0x5b4dfa(0x17e)],'BjhXf':_0x4d0f9d['hrrIo'],'hoTPy':_0x5b4dfa(0x35e),'PkhnD':_0x5b4dfa(0x478),'hwYwd':function(_0x16d5e4,_0x361b41,_0x4c171d,_0x82e863,_0x42ec4a,_0x4ea51b,_0x4ac53c){return _0x4d0f9d['yNUvA'](_0x16d5e4,_0x361b41,_0x4c171d,_0x82e863,_0x42ec4a,_0x4ea51b,_0x4ac53c);},'OxlOR':_0x5b4dfa(0x204),'FWNji':function(_0x49b3e2,_0x391a60,_0xe50aeb,_0x3172be){return _0x49b3e2(_0x391a60,_0xe50aeb,_0x3172be);},'EGiyb':_0x5b4dfa(0x113)+'check'+'ed','PRXtV':function(_0x566a25,_0x577174){return _0x566a25(_0x577174);},'EmKMV':'--p','asNSB':function(_0x5aaa48,_0x5a6f5e){return _0x5aaa48-_0x5a6f5e;},'cVIjl':function(_0x64d0ac,_0x38acc5){return _0x64d0ac===_0x38acc5;},'ponRs':function(_0x47b7ad,_0x4f1e00){return _0x47b7ad(_0x4f1e00);},'RVqZk':_0x5b4dfa(0x5ad),'cimBr':'sk-va'+'l','chJvI':_0x4d0f9d['vKDDA'],'hNdmV':_0x4d0f9d[_0x5b4dfa(0x40f)],'TUpwd':function(_0x2968e6,_0x26ab74){var _0x2192e2=_0x5b4dfa;return _0x4d0f9d[_0x2192e2(0x230)](_0x2968e6,_0x26ab74);},'ZQacj':function(_0x3fe1e1,_0x4d4755){return _0x3fe1e1(_0x4d4755);},'rfFTt':function(_0xdbb52,_0x48bd70){var _0x3a55f1=_0x5b4dfa;return _0x4d0f9d[_0x3a55f1(0x54b)](_0xdbb52,_0x48bd70);},'GJMVo':'div','DTjDt':'sk-ca'+_0x5b4dfa(0x3d5)+'ad','EtdqV':function(_0x5c1200,_0x3b5090,_0x3293df){return _0x5c1200(_0x3b5090,_0x3293df);},'hQuGW':'sk-md'+'esc','zIGme':function(_0x422051,_0x535996){var _0x49295c=_0x5b4dfa;return _0x4d0f9d[_0x49295c(0x295)](_0x422051,_0x535996);},'aAslQ':function(_0x3cada5,_0x13fc77){return _0x3cada5*_0x13fc77;},'VypZm':function(_0x3dbef1,_0x3a6ddf){var _0x17b524=_0x5b4dfa;return _0x4d0f9d[_0x17b524(0x2ac)](_0x3dbef1,_0x3a6ddf);},'QTYKF':function(_0x2df29b,_0x46e542){var _0x8cd1a7=_0x5b4dfa;return _0x4d0f9d[_0x8cd1a7(0x3a9)](_0x2df29b,_0x46e542);},'ZGfjF':function(_0x545d62,_0x31c042){return _0x4d0f9d['MmcPm'](_0x545d62,_0x31c042);},'jGlbW':function(_0x5ce5a7,_0x170952){return _0x5ce5a7*_0x170952;},'XRVpz':function(_0x14bda8){return _0x14bda8();},'qSuzK':function(_0x4a7760,_0x508b89,_0x400651){return _0x4a7760(_0x508b89,_0x400651);},'vEwVm':_0x5b4dfa(0x53b)+_0x5b4dfa(0x507),'GNeZy':_0x5b4dfa(0x67a),'fvmVT':function(_0x2d48f7){return _0x2d48f7();},'yXKUE':function(_0x2c9ae0){return _0x4d0f9d['NcdLt'](_0x2c9ae0);},'SHYUE':function(_0xcb5161,_0x4b44cf){return _0xcb5161===_0x4b44cf;},'yxUOY':'XVgza','tccwF':function(_0x13e719){var _0x5de2bc=_0x5b4dfa;return _0x4d0f9d[_0x5de2bc(0x611)](_0x13e719);},'YoYum':function(_0x2f0a9d){return _0x4d0f9d['uipHA'](_0x2f0a9d);},'xvpMN':'IxoIk','NyLwq':_0x4d0f9d[_0x5b4dfa(0x548)],'yHXnp':function(_0x457420){return _0x457420();}};_0x4d9d62[_0x5b4dfa(0x1ad)+'ck']&&_0x4d0f9d['tHRhw'](setInterval,()=>{var _0x114ac2=_0x5b4dfa;try{if(_0x39b185[_0x114ac2(0x217)](_0x39b185[_0x114ac2(0x494)],_0x114ac2(0x279)))try{var _0x1c2c1e=new _0x2a6a6c(_0x2bb203)['readF'+_0x114ac2(0x32f)](_0x4cb608,_0x114ac2(0x445));return _0x1c2c1e?_0x1c2c1e['val']():0x1*0xa0f+-0x501*0x3+0x1*0x4f4;}catch(_0x3b81d5){return-0x2a8*0x1+0x34*0x16+-0x1d0;}else for(var _0x57a69c of['kour-'+_0x114ac2(0x1b2)+'0x250'+'-pare'+'nt',_0x39b185['RQcnY'],_0x39b185[_0x114ac2(0x400)],_0x39b185[_0x114ac2(0x130)]]){if(_0x114ac2(0x276)===_0x114ac2(0x358))_0x28b6f6[_0x114ac2(0x18e)+'e'](_0x17ed61[_0x114ac2(0x3fe)]);else{var _0x79b5ae=document[_0x114ac2(0x379)+_0x114ac2(0x528)+_0x114ac2(0x15f)](_0x57a69c);if(_0x79b5ae&&_0x39b185['BAMDg'](_0x57a69c,_0x39b185[_0x114ac2(0x130)])){var _0x3d6967=_0x79b5ae[_0x114ac2(0x5c3)+'ren'];for(var _0x2fd00a=-0x19e+-0x482*0x1+-0x20*-0x31;_0x39b185[_0x114ac2(0x407)](_0x2fd00a,_0x3d6967['lengt'+'h']);_0x2fd00a++){if(_0x3d6967[_0x2fd00a]['id']&&_0x3d6967[_0x2fd00a]['id']['index'+'Of']('kour-'+_0x114ac2(0x154))===-0xf13+-0xa7f+0x3*0x886)_0x3d6967[_0x2fd00a]['style'][_0x114ac2(0x5bd)+'ay']=_0x114ac2(0x19c);}}else{if(_0x79b5ae)_0x79b5ae[_0x114ac2(0x306)][_0x114ac2(0x5bd)+'ay']=_0x114ac2(0x19c);}}}}catch(_0xc54c99){}},-0x32c+-0x9d9+0x14d5);var _0x33a755=document[_0x5b4dfa(0x261)+'eElem'+'ent'](_0x4d0f9d[_0x5b4dfa(0x28d)]);_0x33a755[_0x5b4dfa(0x306)]['cssTe'+'xt']=_0x4d0f9d[_0x5b4dfa(0x15c)];var _0x5f36e6=_0x33a755[_0x5b4dfa(0x42b)+'ntext']('2d');function _0x398011(){var _0x157dea=_0x5b4dfa,_0x2c2ac3={'qBXYa':function(_0x3c5d3b,_0x549575,_0xf64d35,_0x31cf94,_0x3236e0){return _0x39b185['jMsJg'](_0x3c5d3b,_0x549575,_0xf64d35,_0x31cf94,_0x3236e0);},'IPlFD':function(_0x515533,_0x573bd7,_0x456805,_0x2e76ea,_0x485604){var _0xb4b763=_0x5d71;return _0x39b185[_0xb4b763(0x2cb)](_0x515533,_0x573bd7,_0x456805,_0x2e76ea,_0x485604);}};if(_0x39b185[_0x157dea(0x64f)]!==_0x39b185['vFAGD'])_0x4732c4[_0x157dea(0x5da)+_0x157dea(0x2e2)+_0x157dea(0x523)](),_0x39b185[_0x157dea(0x2db)](_0x25e93b);else try{var _0x2db5de=document[_0x157dea(0x35c)+'creen'+_0x157dea(0x14b)+'nt'],_0x2b2311=_0x2db5de&&_0x2db5de[_0x157dea(0x135)+'me']!==_0x39b185[_0x157dea(0x36d)]?_0x2db5de:document[_0x157dea(0x280)]||document['docum'+_0x157dea(0x349)+_0x157dea(0x528)];if(_0x33a755[_0x157dea(0x25e)+'tNode']!==_0x2b2311)_0x2b2311[_0x157dea(0x2af)+'dChil'+'d'](_0x33a755);}catch(_0x26aa41){try{'zcDHD'!==_0x39b185[_0x157dea(0x65b)]?(_0x2c2ac3[_0x157dea(0x5f9)](_0x44e2c5,_0x2d8e8e,0x4b*0x4d+-0x5*-0x349+-0x26b0,'i32',_0x2b22fc),_0x2c2ac3['IPlFD'](_0x410991,_0x2672c5,0xba0+0x699+0x1fd*-0x9,_0x157dea(0x1e9),_0x40bb38)):document['body']['appen'+'dChil'+'d'](_0x33a755);}catch(_0x420f7b){}}}var _0x2f6553={'w':0x0,'h':0x0,'dpr':0x0};function _0x188f1a(){var _0x1e587a=_0x5b4dfa,_0x360f47=window['devic'+'ePixe'+'lRati'+'o']||-0x10c4+0x40*-0x7f+0x3085*0x1,_0x3afa82=window[_0x1e587a(0x48e)+_0x1e587a(0x3b0)],_0x238a5a=window['inner'+_0x1e587a(0x146)+'t'];if(_0x39b185[_0x1e587a(0x50f)](_0x3afa82,_0x2f6553['w'])&&_0x238a5a===_0x2f6553['h']&&_0x39b185['ATjIv'](_0x360f47,_0x2f6553[_0x1e587a(0x3ee)]))return;_0x2f6553['w']=_0x3afa82,_0x2f6553['h']=_0x238a5a,_0x2f6553['dpr']=_0x360f47,_0x33a755[_0x1e587a(0x117)]=Math['round'](_0x39b185[_0x1e587a(0x32d)](_0x3afa82,_0x360f47)),_0x33a755['heigh'+'t']=Math['round'](_0x238a5a*_0x360f47),_0x5f36e6[_0x1e587a(0x4a9)+'ansfo'+'rm'](_0x360f47,0x4e*0x7f+-0x1147+-0x156b,-0x6b+0x2284+-0x2219,_0x360f47,0x1539+-0x140e+-0x12b,0xa5e+0x61*0x26+-0x18c4);}var _0x558a1a=0x1d78+-0x79*-0x28+0x183*-0x20,_0x4d0c49=performance[_0x5b4dfa(0x4fc)](),_0x1d3648=0x1e3*0x7+0x1950+-0x13*0x207;function _0x44174f(_0x2b13d6){var _0xf86546=_0x5b4dfa,_0x5c3392={'grgkJ':_0x39b185['uReUV'],'QUGQd':function(_0x3bd5d9,_0x6c8db0,_0x25aa28,_0x56f2b7,_0xb0a2a4){return _0x3bd5d9(_0x6c8db0,_0x25aa28,_0x56f2b7,_0xb0a2a4);}},_0x310d56=Number(_0x4d9d62['ksSca'+'le'])||0x102*-0x1b+0xdd5+0xd62,_0x66b8a8=_0x39b185['yEIQc'](-0xa*0x224+-0x1093+0xb*0x377,_0x310d56),_0x25ebf5=_0x39b185[_0xf86546(0x639)](0x1*-0x1cbe+-0xd7*-0x20+-0x1e2*-0x1,_0x310d56),_0x18a20f=_0x39b185['zpojc'](_0x66b8a8,0x2687+0x1*-0x1d1b+0xdb*-0xb)+_0x39b185[_0xf86546(0x1a0)](_0x25ebf5,0x1010+-0x1c1b+0xc0d),_0x3ea43e=_0x39b185['yZCyU'](_0x39b185[_0xf86546(0x64a)](_0x66b8a8,-0xb9*-0x36+-0x6b*-0x47+0x896*-0x8),_0x39b185['dIgvS'](_0x25ebf5,0xe2*0x11+-0x1aa9+-0x5*-0x255)),_0x26f228=_0x4d9d62[_0xf86546(0x25f)],_0x2c0c63=_0x26f228==='br'?_0x39b185['PUjzz'](_0x39b185[_0xf86546(0x297)](_0x2b13d6['right'],-0x57*0x3+-0x2*0x761+-0x5*-0x32b),_0x18a20f):_0x39b185[_0xf86546(0x39d)](_0x2b13d6[_0xf86546(0x45f)],0x10*0x112+0x12d6+-0x23e6),_0x550b1b=_0x26f228==='ml'?_0x2b13d6[_0xf86546(0x513)]+_0x39b185['avTby'](_0x2b13d6['heigh'+'t'],0x1*0xf0b+-0x2517+0xb07*0x2)-_0x39b185[_0xf86546(0x267)](_0x3ea43e,0x115c+-0x2601+-0x11*-0x137):_0x39b185[_0xf86546(0x561)](_0x39b185['WHCCY'](_0x2b13d6[_0xf86546(0x366)+'m'],_0x3ea43e),_0x39b185[_0xf86546(0x284)](_0x26f228,'bl')?-0x218f+0x31*0x11+0x9a*0x33:-0x13a7+-0x6d*-0x3e+-0x629),_0x20a1d0=(_0x186311,_0x5d2de4,_0x31b9bb,_0x35151b,_0x30fe1a,_0x323da5,_0x1751e5)=>{var _0x2dd269=_0xf86546;if(_0x2dd269(0x26b)===_0x2dd269(0x5a8))_0x3256bd(_0xa04f51,0x105a+0x138c+-0x23be,_0x5c3392[_0x2dd269(0x239)],_0x1cdf5c),_0x2ea803(_0x3cf5f8,-0x1*0x1975+0x1a2e+0x2f*-0x3,_0x2dd269(0x16f),_0x794bc3),_0x5c3392[_0x2dd269(0x537)](_0x5b99d5,_0x486254,0x4*0x6d9+-0x10*0x179+0x4*-0xe9,_0x2dd269(0x16f),_0x526284),_0x5ccabe(_0x18aa40,-0x3*-0x4f5+0x17a1+0x2*-0x1326,_0x5c3392['grgkJ'],_0x530c81),_0x3715af(_0x41c278,-0x57f*-0x7+0x19cf*0x1+0xc*-0x559,_0x5c3392['grgkJ'],_0x2e27c7),_0x484c03(_0x359257,-0xda6+0x2*-0xfd4+0x2d6e,_0x5c3392['grgkJ'],_0x1e84fa);else{var _0x561c7a=_0x344ff3[_0x2dd269(0x3fb)](_0x5d2de4);_0x5f36e6[_0x2dd269(0x112)](),_0x5f36e6[_0x2dd269(0x2ab)+_0x2dd269(0x3f0)]();if(_0x5f36e6[_0x2dd269(0x587)+_0x2dd269(0x229)])_0x5f36e6['round'+'Rect'](_0x31b9bb,_0x35151b,_0x30fe1a,_0x323da5,_0x39b185[_0x2dd269(0x34e)](-0x47*-0x7f+0x59*-0xd+-0x1ead,_0x310d56));else _0x5f36e6['rect'](_0x31b9bb,_0x35151b,_0x30fe1a,_0x323da5);_0x5f36e6[_0x2dd269(0x668)+'tyle']=_0x561c7a?_0x39b185[_0x2dd269(0x499)]:_0x2dd269(0x3bb)+_0x2dd269(0x666)+_0x2dd269(0x5c6)+'7)',_0x5f36e6['fill'](),_0x5f36e6['lineW'+_0x2dd269(0x165)]=0x21bd+0x138f+-0x354b,_0x5f36e6['strok'+'eStyl'+'e']=_0x561c7a?_0x385a54:'rgba('+'255,1'+_0x2dd269(0x17b)+'7,0.3'+'5)',_0x5f36e6['strok'+'e'](),_0x561c7a&&(_0x5f36e6[_0x2dd269(0x12d)+_0x2dd269(0x29a)+'r']=_0x7c0f74,_0x5f36e6[_0x2dd269(0x12d)+_0x2dd269(0x343)]=-0x212*-0xd+0xa8d*-0x1+-0x343*0x5,_0x5f36e6[_0x2dd269(0x566)](),_0x5f36e6['shado'+_0x2dd269(0x343)]=0x50*0x4c+-0x25af+-0x3*-0x4a5),_0x5f36e6['fillS'+_0x2dd269(0x4e5)]=_0x561c7a?'#fff':'rgba('+_0x2dd269(0x1d4)+_0x2dd269(0x31d)+'0,0.8'+')',_0x5f36e6[_0x2dd269(0x2ba)+_0x2dd269(0x321)]=_0x39b185[_0x2dd269(0x26d)],_0x5f36e6[_0x2dd269(0x1d3)+'aseli'+'ne']=_0x39b185[_0x2dd269(0x3ba)],_0x5f36e6['font']=_0x39b185[_0x2dd269(0x5d9)](_0x2dd269(0x354),Math['round'](_0x39b185[_0x2dd269(0x64c)](-0x124f*-0x1+0x151*0x10+-0x2753,_0x310d56)))+(_0x2dd269(0x4f2)+_0x2dd269(0x1e6)+'-seri'+'f,sys'+_0x2dd269(0x188)+_0x2dd269(0x119)+'s-ser'+'if'),_0x5f36e6[_0x2dd269(0x2a1)+_0x2dd269(0x2fc)](_0x186311,_0x31b9bb+_0x39b185['avTby'](_0x30fe1a,0xda8+0x4*0x46a+0xfa7*-0x2),_0x39b185[_0x2dd269(0x5d9)](_0x35151b,_0x323da5/(-0xe5a+0x56*-0x20+0x4*0x647))-(_0x1751e5?_0x39b185[_0x2dd269(0x498)](0x1487+-0x2*-0xd30+-0x2ee2,_0x310d56):-0x16b0+-0x1ef7+0xcd*0x43)),_0x1751e5&&(_0x5f36e6[_0x2dd269(0x525)]='600\x20'+Math[_0x2dd269(0x587)]((0x23c8+-0x1*-0x13ff+-0x37be)*_0x310d56)+('px\x20ui'+_0x2dd269(0x1e6)+'-seri'+_0x2dd269(0x681)+'tem-u'+'i,san'+'s-ser'+'if'),_0x5f36e6['fillS'+_0x2dd269(0x4e5)]=_0x561c7a?'#fff':_0x39b185['yWDvr'],_0x5f36e6['fillT'+'ext'](_0x1751e5,_0x39b185[_0x2dd269(0x39d)](_0x31b9bb,_0x30fe1a/(0x17f6+0x1e5c+-0x3650)),_0x35151b+_0x323da5/(0x8d9+-0xa8b*0x1+0x1b4)+_0x39b185[_0x2dd269(0x498)](-0x86b+0x12d7+0x10a*-0xa,_0x310d56))),_0x5f36e6[_0x2dd269(0x395)+'re']();}};_0x39b185[_0xf86546(0x573)](_0x20a1d0,'W',_0x39b185[_0xf86546(0x257)],_0x39b185[_0xf86546(0x176)](_0x39b185[_0xf86546(0x61a)](_0x2c0c63,_0x66b8a8),_0x25ebf5),_0x550b1b,_0x66b8a8,_0x66b8a8),_0x20a1d0('A',_0x39b185[_0xf86546(0x28f)],_0x2c0c63,_0x550b1b+_0x66b8a8+_0x25ebf5,_0x66b8a8,_0x66b8a8),_0x20a1d0('S',_0x39b185[_0xf86546(0x48a)],_0x39b185[_0xf86546(0x39d)](_0x39b185[_0xf86546(0x176)](_0x2c0c63,_0x66b8a8),_0x25ebf5),_0x39b185[_0xf86546(0x159)](_0x550b1b+_0x66b8a8,_0x25ebf5),_0x66b8a8,_0x66b8a8),_0x39b185[_0xf86546(0x573)](_0x20a1d0,'D',_0x39b185[_0xf86546(0x3bd)],_0x2c0c63+(_0x66b8a8+_0x25ebf5)*(0x1e8b*0x1+-0x41*0x4f+-0xa7a),_0x39b185[_0xf86546(0x5d9)](_0x550b1b,_0x66b8a8)+_0x25ebf5,_0x66b8a8,_0x66b8a8);var _0x52565d=_0x39b185['PUjzz'](_0x18a20f,_0x25ebf5)/(-0x5e*-0x6+-0x16d4+0x2*0xa51),_0x256d7c=_0x39b185[_0xf86546(0x5d9)](_0x550b1b,(_0x66b8a8+_0x25ebf5)*(-0x3e*-0xb+-0x18*-0xe5+0x1*-0x1820));_0x20a1d0(_0x39b185[_0xf86546(0x4b9)],_0x39b185[_0xf86546(0x1a6)],_0x2c0c63,_0x256d7c,_0x52565d,_0x66b8a8,_0x4d9d62['ksCps']?_0x39b185[_0xf86546(0x5d9)](_0x33d295(0x6cb*-0x3+0x1c8d*-0x1+-0x1*-0x30ef),'\x20CPS'):''),_0x20a1d0(_0x39b185['hoTPy'],_0xf86546(0x359)+'3',_0x2c0c63+_0x52565d+_0x25ebf5,_0x256d7c,_0x52565d,_0x66b8a8,_0x4d9d62[_0xf86546(0x459)]?_0x33d295(0x9*0x3ae+-0x49*-0xb+-0x1*0x243e)+_0x39b185[_0xf86546(0x5eb)]:''),_0x39b185['hwYwd'](_0x20a1d0,'',_0x39b185['OxlOR'],_0x2c0c63,_0x256d7c+_0x66b8a8+_0x25ebf5,_0x18a20f,_0x66b8a8*(0x1*-0x743+0x1*-0x8e7+0x815*0x2+0.45));}function _0x2b2296(_0x3f8a5b){var _0x1ad24d=_0x5b4dfa,_0x4ec0b8=_0x3f8a5b['width']/(0x19b8+0x54b*0x3+-0x2997),_0xd2780a=_0x3f8a5b[_0x1ad24d(0x3d8)+'t']/(-0x1689+-0x109*0x14+0x2b3f),_0x593f76=Number(_0x4d9d62[_0x1ad24d(0x58a)+'e'])||0x93*-0x6+-0x1817+0x1b8a,_0x5bcbe0=/^#[0-9a-f]{6}$/i['test'](_0x4d9d62['chCol'+'or'])?_0x4d9d62[_0x1ad24d(0x4d1)+'or']:_0x4d0f9d[_0x1ad24d(0x627)];_0x5f36e6['save'](),_0x5f36e6[_0x1ad24d(0x25c)+'eStyl'+'e']=_0x5bcbe0,_0x5f36e6['fillS'+_0x1ad24d(0x4e5)]=_0x5bcbe0,_0x5f36e6[_0x1ad24d(0x5be)+_0x1ad24d(0x165)]=Math[_0x1ad24d(0x3cf)](0x886+-0x1*-0x24e3+-0x2d68+0.5,(0x264b+0x1c8c+0x3*-0x1647)*_0x593f76),_0x5f36e6[_0x1ad24d(0x12d)+_0x1ad24d(0x29a)+'r']=_0x5bcbe0,_0x5f36e6[_0x1ad24d(0x12d)+_0x1ad24d(0x343)]=-0x539+0xc3c+-0x1*0x6fd;var _0x7dcf0f=(-0x1571+0x3*0x8a1+0x236*-0x2)*_0x593f76,_0x47f505=(0x149f*-0x1+0x1*0x1c07+-0x760)*_0x593f76;_0x5f36e6[_0x1ad24d(0x2ab)+_0x1ad24d(0x3f0)](),_0x5f36e6['moveT'+'o'](_0x4ec0b8-_0x7dcf0f-_0x47f505,_0xd2780a),_0x5f36e6[_0x1ad24d(0x599)+'o'](_0x4ec0b8-_0x7dcf0f,_0xd2780a),_0x5f36e6[_0x1ad24d(0x62f)+'o'](_0x4ec0b8+_0x7dcf0f,_0xd2780a),_0x5f36e6['lineT'+'o'](_0x4d0f9d['aThls'](_0x4ec0b8,_0x7dcf0f)+_0x47f505,_0xd2780a),_0x5f36e6[_0x1ad24d(0x62f)+'o'](_0x4ec0b8,_0x4d0f9d[_0x1ad24d(0x259)](_0xd2780a-_0x7dcf0f,_0x47f505)),_0x5f36e6[_0x1ad24d(0x599)+'o'](_0x4ec0b8,_0xd2780a-_0x7dcf0f),_0x5f36e6[_0x1ad24d(0x62f)+'o'](_0x4ec0b8,_0x4d0f9d['KHhcj'](_0xd2780a,_0x7dcf0f)),_0x5f36e6[_0x1ad24d(0x599)+'o'](_0x4ec0b8,_0x4d0f9d['aThls'](_0xd2780a,_0x7dcf0f)+_0x47f505),_0x5f36e6['strok'+'e'](),_0x5f36e6['begin'+_0x1ad24d(0x3f0)](),_0x5f36e6[_0x1ad24d(0xf5)](_0x4ec0b8,_0xd2780a,_0x4d0f9d[_0x1ad24d(0x1f1)](0x1f48+0x9a9*0x3+-0x3c42+0.6000000000000001,_0x593f76),0x259d+0x1766+0x3d03*-0x1,_0x4d0f9d['UTFPb'](Math['PI'],-0xe*-0x131+0x104e+-0x20fa)),_0x5f36e6[_0x1ad24d(0x566)](),_0x5f36e6['resto'+'re']();}function _0x53e48a(_0x3e50f2){var _0x221808=_0x5b4dfa,_0x52aee4={'YihWm':_0x4d0f9d[_0x221808(0x614)],'bIBvZ':function(_0x1204fc,_0x3b859c){return _0x1204fc||_0x3b859c;},'soQNt':_0x221808(0x3bb)+'255,2'+'35,24'+_0x221808(0x114)+'5)'};_0x5f36e6[_0x221808(0x112)](),_0x5f36e6['font']=_0x4d0f9d['BQUud'],_0x5f36e6['textA'+'lign']=_0x221808(0x45f),_0x5f36e6[_0x221808(0x1d3)+_0x221808(0x437)+'ne']=_0x4d0f9d[_0x221808(0x60a)];var _0xeac1ac=0x1d*0x74+0x4*-0x3e6+0x54*0x8,_0x5d6c03=-0xd1b+0x1*0x1df+-0x2d2*-0x4,_0x43af7a=(_0x2d3d1a,_0x59ac38)=>{var _0x25b688=_0x221808;_0x25b688(0x518)===_0x52aee4[_0x25b688(0x450)]?_0x5bb111(_0x24cc55,_0xf6c88,_0x3b5dad,_0x25b688(0x5d2)+'ers'):(_0x5f36e6['fillS'+_0x25b688(0x4e5)]=_0x52aee4[_0x25b688(0x4f1)](_0x59ac38,_0x52aee4['soQNt']),_0x5f36e6[_0x25b688(0x2a1)+'ext'](_0x2d3d1a,_0x5d6c03,_0xeac1ac),_0xeac1ac+=-0x8*-0x143+-0x2*-0x407+-0x1*0x1216);};_0x4d0f9d['TzkBS'](_0x43af7a,'SAKUR'+_0x221808(0x434)+'R\x20v1.'+'1',_0x4d0f9d['eSoDG']);if(_0x4d9d62['fps'])_0x4d0f9d['OurfE'](_0x43af7a,_0x1d3648+_0x4d0f9d[_0x221808(0x348)]);if(!_0x1e1995[_0x221808(0x2d8)+'oaded'])_0x43af7a(_0x4d0f9d['iKFSN'],_0x221808(0x3bb)+'255,1'+_0x221808(0x607)+_0x221808(0x128)+')');_0x5f36e6['resto'+'re']();}function _0x1b1a79(){var _0x5216a9=_0x5b4dfa;if('wrKIr'!=='Vogsr'){var _0x3a2046=_0x4d0f9d[_0x5216a9(0x2e7)][_0x5216a9(0x536)]('|'),_0x40a85d=0xf7b+-0x619+0x962*-0x1;while(!![]){switch(_0x3a2046[_0x40a85d++]){case'0':_0x398011();continue;case'1':_0x53e48a(_0x409a5c);continue;case'2':_0x558a1a++;continue;case'3':_0x311e23-_0x4d0c49>=0x15b1+0x19*-0x140+0x1*0xb83&&(_0x1d3648=Math['round'](_0x558a1a*(-0xb42+0x66b+0x8bf)/(_0x311e23-_0x4d0c49)),_0x558a1a=-0x1*-0x943+-0xa3d*-0x1+0x80*-0x27,_0x4d0c49=_0x311e23);continue;case'4':var _0x409a5c={'left':0x0,'top':0x0,'right':_0x2f6553['w'],'bottom':_0x2f6553['h'],'width':_0x2f6553['w'],'height':_0x2f6553['h']};continue;case'5':var _0x311e23=performance[_0x5216a9(0x4fc)]();continue;case'6':_0x5f36e6[_0x5216a9(0x38c)+'Rect'](-0x8*0x178+-0x21d+0xddd,0x17*0x113+0x123c+-0x2af1,_0x2f6553['w'],_0x2f6553['h']);continue;case'7':_0x188f1a();continue;case'8':requestAnimationFrame(_0x1b1a79);continue;case'9':if(_0x4d9d62[_0x5216a9(0x3d7)+_0x5216a9(0x2b1)])_0x44174f(_0x409a5c);continue;case'10':if(_0x4d9d62[_0x5216a9(0x5e4)+'hair'])_0x2b2296(_0x409a5c);continue;}break;}}else{var _0xf69d4=_0x39b185['FWNji'](_0x306c9b,_0x4295e7,_0x3a4bba,_0xbddd1);if(_0xf69d4!=null)_0x39b185[_0x5216a9(0x2cb)](_0x4bbb1,_0xe84cc9,_0x25f3c0,_0x1074c0,_0x39b185[_0x5216a9(0x34e)](_0xf69d4,_0x1867f7));}}var _0x21ba58=document[_0x5b4dfa(0x261)+'eElem'+'ent'](_0x4d0f9d['oTFwa']);_0x21ba58['id']=_0x4d0f9d['NsDVx'],_0x21ba58['style'][_0x5b4dfa(0x206)+'xt']='posit'+_0x5b4dfa(0x5e7)+_0x5b4dfa(0x22f)+_0x5b4dfa(0x486)+_0x5b4dfa(0x1cf)+_0x5b4dfa(0x39f)+':2147'+'48364'+'7;poi'+_0x5b4dfa(0x4b8)+'event'+'s:non'+'e;';var _0x59dfb7=_0x21ba58[_0x5b4dfa(0x3cc)+_0x5b4dfa(0x221)+'ow']({'mode':_0x5b4dfa(0x4f5)});(document[_0x5b4dfa(0x280)]||document[_0x5b4dfa(0x4de)+_0x5b4dfa(0x349)+'ement'])[_0x5b4dfa(0x2af)+_0x5b4dfa(0x21b)+'d'](_0x21ba58);var _0x265d9e=![],_0x4a1e92={};try{_0x4a1e92=JSON[_0x5b4dfa(0x636)](localStorage[_0x5b4dfa(0x3f4)+'em']('sakur'+_0x5b4dfa(0x596)+_0x5b4dfa(0x324)+'v1')||'{}');}catch(_0x44f0c9){}function _0xa8da5d(){var _0x4e7a07=_0x5b4dfa;try{localStorage['setIt'+'em'](_0x4d0f9d[_0x4e7a07(0x199)],JSON[_0x4e7a07(0x5ea)+_0x4e7a07(0x5c1)](_0x4a1e92));}catch(_0x314892){}}function _0x11a6f3(_0x5862d0,_0x10d594){var _0xcff55c=_0x5b4dfa,_0x428493=('1|5|2'+_0xcff55c(0x322)+'4|6')[_0xcff55c(0x536)]('|'),_0x38f285=-0x8bd+-0x2*-0xe87+0x1451*-0x1;while(!![]){switch(_0x428493[_0x38f285++]){case'0':_0x43a023[_0xcff55c(0x1a2)+'tribu'+'te'](_0xcff55c(0x30f),_0x4d0f9d['dFaQx']);continue;case'1':var _0x43a023=document[_0xcff55c(0x261)+_0xcff55c(0x15e)+_0xcff55c(0x1d0)](_0x4d0f9d['nJhgS']);continue;case'2':_0x43a023[_0xcff55c(0x2c5)+'Name']=_0xcff55c(0x680)+'itch';continue;case'3':_0x43a023[_0xcff55c(0x1a2)+_0xcff55c(0x3b2)+'te'](_0x4d0f9d['MfEON'],String(!!_0x5862d0));continue;case'4':_0x43a023[_0xcff55c(0x3fc)+'ck']=_0x4b15f7=>{var _0x21a41b=_0xcff55c;_0x4b15f7[_0x21a41b(0x5da)+'ropag'+_0x21a41b(0x523)]();var _0x5ad8ef=_0x43a023['getAt'+_0x21a41b(0x3b2)+'te'](_0x39b185['EGiyb'])!=='true';_0x43a023['setAt'+_0x21a41b(0x3b2)+'te'](_0x21a41b(0x113)+_0x21a41b(0x3b1)+'ed',_0x39b185[_0x21a41b(0x593)](String,_0x5ad8ef)),_0x10d594(_0x5ad8ef);};continue;case'5':_0x43a023[_0xcff55c(0x63b)]=_0xcff55c(0x186)+'n';continue;case'6':return _0x43a023;}break;}}function _0x1f6252(_0x232626,_0x3995c5,_0x40bd93,_0x1a768c,_0x1a34ae){var _0x3c23ee=_0x5b4dfa,_0x41ce9f=document[_0x3c23ee(0x261)+_0x3c23ee(0x15e)+_0x3c23ee(0x1d0)](_0x3c23ee(0x14d));_0x41ce9f[_0x3c23ee(0x2c5)+'Name']=_0x3c23ee(0x477)+_0x3c23ee(0x2e3);var _0x1d770e=document['creat'+'eElem'+'ent']('input');_0x1d770e[_0x3c23ee(0x63b)]=_0x3c23ee(0x56a),_0x1d770e['class'+'Name']='sk-sl'+_0x3c23ee(0x65c),_0x1d770e[_0x3c23ee(0x5a0)]=_0x3995c5,_0x1d770e[_0x3c23ee(0x3cf)]=_0x40bd93,_0x1d770e['step']=_0x1a768c,_0x1d770e['value']=_0x232626;var _0x4fe449=document[_0x3c23ee(0x261)+_0x3c23ee(0x15e)+'ent'](_0x39b185[_0x3c23ee(0x316)]);_0x4fe449['class'+_0x3c23ee(0x470)]=_0x39b185[_0x3c23ee(0x160)],_0x4fe449['textC'+_0x3c23ee(0x370)+'t']=String(_0x232626);var _0x6de93a=()=>{var _0x42a795=_0x3c23ee;_0x42a795(0x4e3)===_0x42a795(0x4e3)?(_0x4fe449[_0x42a795(0x225)+_0x42a795(0x370)+'t']=String(_0x1d770e[_0x42a795(0x378)]),_0x41ce9f['style']['setPr'+_0x42a795(0x196)+'y'](_0x39b185[_0x42a795(0x619)],_0x39b185[_0x42a795(0x39d)](_0x39b185[_0x42a795(0x639)](_0x39b185[_0x42a795(0x586)](_0x1d770e['value'],_0x3995c5)/(_0x40bd93-_0x3995c5),-0x1970+0x131*-0x1d+0x3c61),'%'))):(_0x7c0b8e['infAm'+'moExp']=_0x2c40a1,_0x139831());};return _0x1d770e[_0x3c23ee(0x5e0)+'ut']=()=>{var _0x462891=_0x3c23ee;if(_0x39b185[_0x462891(0x278)]('ZtPyP',_0x462891(0x440)))_0x6de93a(),_0x39b185[_0x462891(0x42f)](_0x1a34ae,Number(_0x1d770e[_0x462891(0x378)]));else try{if(_0x1b3f14)_0x35ccc3['call'](_0x462891(0x5fa)+_0x462891(0x61c)+'e.App'+_0x462891(0x48c)+_0x462891(0xfc),'set_t'+_0x462891(0x394)+'Frame'+_0x462891(0x51c),[0x6f7*-0x4+-0x2*-0xad3+0x726]);}catch(_0x34668b){}},_0x6de93a(),_0x41ce9f[_0x3c23ee(0x2af)+'d'](_0x1d770e,_0x4fe449),_0x41ce9f;}function _0x23d1c0(_0x5db7aa,_0x57878b){var _0x4f05d2=_0x5b4dfa,_0x598db6={'ZBxuy':'sakur'+'a.kou'+_0x4f05d2(0x1dd)};if(_0x4f05d2(0x377)!=='PHnfv'){var _0x212ef2=document[_0x4f05d2(0x261)+_0x4f05d2(0x15e)+'ent']('input');return _0x212ef2[_0x4f05d2(0x63b)]='color',_0x212ef2[_0x4f05d2(0x2c5)+_0x4f05d2(0x470)]=_0x4f05d2(0x2a5)+_0x4f05d2(0x27d),_0x212ef2[_0x4f05d2(0x378)]=/^#[0-9a-f]{6}$/i[_0x4f05d2(0x5b7)](_0x5db7aa)?_0x5db7aa:_0x4f05d2(0x1c9)+'9d',_0x212ef2[_0x4f05d2(0x5e0)+'ut']=()=>_0x57878b(_0x212ef2['value']),_0x212ef2;}else _0x5b5f29[_0x4f05d2(0x448)+'n'](_0x388c3d,_0x40d51a[_0x4f05d2(0x636)](_0x199c26[_0x4f05d2(0x3f4)+'em'](_0x598db6[_0x4f05d2(0x5bf)])||'{}'));}function _0x1fb295(_0x638c72,_0x56e426,_0x32a95b){var _0xf2222b=_0x5b4dfa,_0x1aa371=('2|1|3'+'|4|5|'+'0')['split']('|'),_0x1e375a=-0x540+-0x24fb+-0x13*-0x239;while(!![]){switch(_0x1aa371[_0x1e375a++]){case'0':return _0x415605;case'1':_0x415605[_0xf2222b(0x2c5)+'Name']=_0xf2222b(0x4ce)+'eld';continue;case'2':var _0x415605=document[_0xf2222b(0x261)+'eElem'+_0xf2222b(0x1d0)](_0x39b185[_0xf2222b(0x3e9)]);continue;case'3':for(var [_0x438ee0,_0x5c9c6a]of _0x56e426){var _0x95fdde=document['creat'+_0xf2222b(0x15e)+_0xf2222b(0x1d0)](_0xf2222b(0x63c)+'n');_0x95fdde[_0xf2222b(0x378)]=_0x438ee0,_0x95fdde[_0xf2222b(0x225)+_0xf2222b(0x370)+'t']=_0x5c9c6a,_0x415605['appen'+'dChil'+'d'](_0x95fdde);}continue;case'4':_0x415605[_0xf2222b(0x378)]=_0x638c72;continue;case'5':_0x415605[_0xf2222b(0x30b)+'nge']=()=>_0x32a95b(_0x415605[_0xf2222b(0x378)]);continue;}break;}}function _0xfb3cd7(_0x23567f,_0x781104){var _0xfe0d31=_0x5b4dfa,_0x4e7070=document['creat'+_0xfe0d31(0x15e)+_0xfe0d31(0x1d0)](_0xfe0d31(0x186)+'n');return _0x4e7070['type']=_0xfe0d31(0x186)+'n',_0x4e7070[_0xfe0d31(0x2c5)+_0xfe0d31(0x470)]=_0x39b185['hNdmV'],_0x4e7070['textC'+'onten'+'t']=_0x23567f,_0x4e7070['oncli'+'ck']=_0x1af407=>{var _0x323ab8=_0xfe0d31;_0x1af407[_0x323ab8(0x5da)+_0x323ab8(0x2e2)+_0x323ab8(0x523)](),_0x781104();},_0x4e7070;}function _0x432884(_0x800b78,_0x34e888,_0x173c0b){var _0x27a4af=_0x5b4dfa,_0x249860=_0x4d0f9d['cALeK'][_0x27a4af(0x536)]('|'),_0x15447a=0x24e1+0x82+-0x2563;while(!![]){switch(_0x249860[_0x15447a++]){case'0':_0x2f7425[_0x27a4af(0x2c5)+_0x27a4af(0x470)]='sk-la'+_0x27a4af(0x42c);continue;case'1':_0x4a63f1[_0x27a4af(0x2af)+'d'](_0x2f7425,_0x173c0b);continue;case'2':var _0x2f7425=document['creat'+'eElem'+_0x27a4af(0x1d0)](_0x27a4af(0x5ad));continue;case'3':return _0x4a63f1;case'4':_0x2f7425[_0x27a4af(0x225)+_0x27a4af(0x370)+'t']=_0x800b78;continue;case'5':if(_0x34e888){var _0x5ccf33=document['creat'+_0x27a4af(0x15e)+_0x27a4af(0x1d0)](_0x4d0f9d['cmNTT']);_0x5ccf33[_0x27a4af(0x2c5)+_0x27a4af(0x470)]=_0x4d0f9d[_0x27a4af(0x431)],_0x5ccf33['textC'+'onten'+'t']=_0x34e888,_0x2f7425['appen'+'dChil'+'d'](_0x5ccf33);}continue;case'6':var _0x4a63f1=document['creat'+_0x27a4af(0x15e)+'ent']('div');continue;case'7':_0x4a63f1[_0x27a4af(0x2c5)+'Name']=_0x4d0f9d['hxPbv'];continue;}break;}}function _0x1624bd(_0x626b73,_0x12b552){var _0x434411=_0x5b4dfa,_0x2e6162=document['creat'+'eElem'+_0x434411(0x1d0)](_0x434411(0x14d));return _0x2e6162[_0x434411(0x2c5)+'Name']=_0x4d0f9d[_0x434411(0x4ac)]+(_0x12b552?_0x434411(0x3a4):''),_0x2e6162['textC'+'onten'+'t']=_0x626b73,_0x2e6162;}function _0x5be53a(_0x47a6d7,_0x44f401,_0x21a347,_0x1d0760,_0x1036d2){var _0x4a5ecb=_0x5b4dfa,_0xc90c41=document[_0x4a5ecb(0x261)+_0x4a5ecb(0x15e)+_0x4a5ecb(0x1d0)]('div');_0xc90c41['class'+_0x4a5ecb(0x470)]=_0x39b185[_0x4a5ecb(0x106)](_0x4a5ecb(0x47f)+'rd',_0x21a347?_0x4a5ecb(0x5de):'');var _0x86bbbf=document[_0x4a5ecb(0x261)+_0x4a5ecb(0x15e)+_0x4a5ecb(0x1d0)](_0x39b185[_0x4a5ecb(0x421)]);_0x86bbbf['class'+'Name']=_0x39b185[_0x4a5ecb(0x549)];var _0x17bd67=document['creat'+'eElem'+'ent']('div');_0x17bd67['class'+'Name']='sk-ca'+_0x4a5ecb(0x1bc)+'tle';var _0x146716=document[_0x4a5ecb(0x261)+_0x4a5ecb(0x15e)+'ent']('stron'+'g');_0x146716['textC'+'onten'+'t']=_0x47a6d7,_0x17bd67['appen'+_0x4a5ecb(0x21b)+'d'](_0x146716);if(_0x1d0760){var _0x20f2e7=_0x39b185['EtdqV'](_0x11a6f3,_0x21a347,_0x1f99c2=>{var _0x3a3e2e=_0x4a5ecb;_0x39b185[_0x3a3e2e(0x16e)]('uRpNh','uRpNh')?(_0xc90c41['class'+_0x3a3e2e(0x340)]['toggl'+'e']('on',_0x1f99c2),_0x39b185[_0x3a3e2e(0x46c)](_0x1d0760,_0x1f99c2)):(_0x2cfee0['fillS'+_0x3a3e2e(0x4e5)]=_0x33ec93||_0x3a3e2e(0x3bb)+_0x3a3e2e(0x1d4)+_0x3a3e2e(0x31d)+_0x3a3e2e(0x114)+'5)',_0x1a2428['fillT'+_0x3a3e2e(0x2fc)](_0x55d770,_0x320a03,_0x47874a),_0x134e6d+=0x214a+-0x12fb+-0xe3f);});_0x86bbbf[_0x4a5ecb(0x2af)+'d'](_0x17bd67,_0x20f2e7);}else _0x86bbbf[_0x4a5ecb(0x2af)+_0x4a5ecb(0x21b)+'d'](_0x17bd67);_0xc90c41[_0x4a5ecb(0x2af)+_0x4a5ecb(0x21b)+'d'](_0x86bbbf);if(_0x1036d2&&_0x1036d2[_0x4a5ecb(0x3a1)+'h']){var _0x550454=document[_0x4a5ecb(0x261)+_0x4a5ecb(0x15e)+_0x4a5ecb(0x1d0)](_0x39b185[_0x4a5ecb(0x421)]);_0x550454[_0x4a5ecb(0x2c5)+_0x4a5ecb(0x470)]='sk-mb'+_0x4a5ecb(0x53d);var _0xeac2fc=document['creat'+_0x4a5ecb(0x15e)+_0x4a5ecb(0x1d0)](_0x39b185['GJMVo']);_0xeac2fc['class'+_0x4a5ecb(0x470)]=_0x39b185[_0x4a5ecb(0x2f1)],_0xeac2fc['textC'+_0x4a5ecb(0x370)+'t']=_0x44f401,_0x550454[_0x4a5ecb(0x2af)+_0x4a5ecb(0x21b)+'d'](_0xeac2fc);for(var _0xec8207 of _0x1036d2)_0x550454['appen'+'dChil'+'d'](_0xec8207);_0xc90c41[_0x4a5ecb(0x2af)+'dChil'+'d'](_0x550454);}return _0xc90c41;}var _0x43fd03=[{'id':_0x4d0f9d[_0x5b4dfa(0x1aa)],'label':_0x4d0f9d['bJlOE']},{'id':_0x4d0f9d[_0x5b4dfa(0x149)],'label':'Move'},{'id':_0x4d0f9d[_0x5b4dfa(0x609)],'label':_0x4d0f9d[_0x5b4dfa(0x10e)]},{'id':_0x4d0f9d[_0x5b4dfa(0x1a9)],'label':_0x5b4dfa(0x47b)},{'id':'safe','label':'Safet'+'y'}];function _0x1ad890(){var _0x279402=_0x5b4dfa,_0x3ebcde={'UvNJT':_0x279402(0x318)+'wn','zpTuW':function(_0x5b4ea5,_0x73dff3){return _0x5b4ea5!==_0x73dff3;},'UFwfL':_0x4d0f9d[_0x279402(0x3ec)]};if(_0x279402(0x43d)===_0x279402(0x43d)){var _0x500514=_0x1e1995[_0x279402(0xfa)+_0x279402(0x47d)]?_0x279402(0x3ae)+_0x279402(0x4bb)+_0x279402(0x1ff)+_0x279402(0x656)+_0x279402(0x29e)+_0x279402(0x56e)+_0x279402(0x408)+_0x279402(0x3a8)+'ad\x20to'+_0x279402(0x3df)+')':_0x1e1995[_0x279402(0x3f8)]?_0x4d0f9d[_0x279402(0x45d)](_0x4d0f9d[_0x279402(0x45d)](_0x4d0f9d['iTKuO'](_0x279402(0x1a3)+'bound'+'\x20'+(_0x1e1995['hooks'+'Total']?_0x4d0f9d['iTKuO'](_0x4d0f9d[_0x279402(0x288)](_0x1e1995[_0x279402(0x427)+'Ok'],'/')+_0x1e1995[_0x279402(0x427)+'Total'],'\x20hook'+'s'):_0x4d0f9d[_0x279402(0x397)])+('\x20|\x20ga'+_0x279402(0x255)),_0x1e1995['gameL'+'oaded']?_0x279402(0x5bb)+'d':'loadi'+'ng')+(_0x279402(0x142)+_0x279402(0x336)+'\x20'),_0x1e1995['shoot'+_0x279402(0x2f6)]?'held':_0x4d0f9d[_0x279402(0x398)])+_0x4d0f9d['wNEsD'],_0x1e1995[_0x279402(0x485)+_0x279402(0x5b2)]?_0x279402(0x436):'none'):'UWMK\x20'+'MISSI'+'NG\x20—\x20'+_0x279402(0x2b0)+'ay\x20on'+'ly\x20(r'+_0x279402(0x4a1)+_0x279402(0x68b)+'he\x20us'+_0x279402(0x224)+'ipt)';if(_0x1e1995['lastE'+_0x279402(0x107)])_0x500514+=_0x279402(0x5b0)+_0x279402(0x2a0)+_0x1e1995['lastE'+_0x279402(0x107)];return _0x5be53a(_0x4d0f9d[_0x279402(0x598)],_0x500514,_0x1e1995['uwmk'],null,[_0x4d0f9d[_0x279402(0x17c)](_0x432884,_0x4d0f9d[_0x279402(0x501)],'calls'+'\x20Unit'+'yEngi'+_0x279402(0x559)+_0x279402(0x52e)+_0x279402(0x3cb)+'set_t'+_0x279402(0x394)+_0x279402(0x38d)+_0x279402(0x51c),_0xfb3cd7(_0x4d0f9d['Lswgf'],()=>{var _0x1808e6=_0x279402,_0x5a9d74={'dVMBy':_0x3ebcde['UvNJT'],'riMQw':function(_0x3b2e34,_0x284081){return _0x3b2e34+_0x284081;}};if(_0x3ebcde[_0x1808e6(0x662)](_0x1808e6(0x215),_0x1808e6(0x215)))_0x321847[_0x1808e6(0x462)+_0x1808e6(0x376)]=_0x5275fd,_0x483442();else try{if('SBqPK'===_0x1808e6(0x415)){var _0x4c7186=_0x1efa2f&&(_0x3c08ba[_0x1808e6(0x155)+'ge']||_0xab45b5['error']&&_0x4da866['error'][_0x1808e6(0x155)+'ge'])||_0x5a9d74[_0x1808e6(0x3f1)];if(_0x1c523d&&_0x801089[_0x1808e6(0x533)+_0x1808e6(0x4b6)])_0x4c7186+=_0x5a9d74['riMQw']('\x20@\x20',_0x481187(_0x58d7f7[_0x1808e6(0x533)+_0x1808e6(0x4b6)])['split']('/')[_0x1808e6(0x4af)]())+':'+(_0x1f46c1[_0x1808e6(0x194)+'o']||'?');_0x51e0bd['lastE'+_0x1808e6(0x107)]=_0x160c4f(_0x4c7186)[_0x1808e6(0x184)](-0x3ab*0x6+0xec*0x12+0x2*0x2b5,-0xd*-0xcd+0x2304+0x2ccd*-0x1);}else{if(_0x4f6c2a)_0x4f6c2a[_0x1808e6(0x2ed)]('Unity'+_0x1808e6(0x61c)+_0x1808e6(0x411)+'licat'+'ion',_0x3ebcde['UFwfL'],[0x29*0x8d+0x3*-0x243+-0xedc]);}}catch(_0x22a079){}}))]);}else{var _0x27c081=_0x39b185[_0x279402(0x267)](_0x2956d9['width'],-0x259c+-0x21d2+0x4770),_0x13d23d=_0x1ef6c4['heigh'+'t']/(-0x2*-0x11c0+-0x124e*-0x2+-0x481a),_0x3beefd=_0x39b185[_0x279402(0x5e3)](_0x819639,_0x2cee87[_0x279402(0x58a)+'e'])||0xeb3+-0x160f+0x75d*0x1,_0x189a40=/^#[0-9a-f]{6}$/i['test'](_0x3db1b4['chCol'+'or'])?_0xbb735b['chCol'+'or']:_0x279402(0x1c9)+'9d';_0x36fa26['save'](),_0x269b37['strok'+_0x279402(0x20f)+'e']=_0x189a40,_0x506430[_0x279402(0x668)+'tyle']=_0x189a40,_0xeb2514[_0x279402(0x5be)+'idth']=_0x18dfea['max'](-0x23b1*-0x1+-0x80c*-0x1+-0x2bbc+0.5,(-0x20a+0x1379*0x2+-0x24e6)*_0x3beefd),_0x5bf4b2[_0x279402(0x12d)+_0x279402(0x29a)+'r']=_0x189a40,_0x126073['shado'+_0x279402(0x343)]=-0x35b*-0x8+-0x6b*-0x19+0x553*-0x7;var _0xfe64a5=(-0x1590+-0x23b*-0x1+-0x1*-0x135b)*_0x3beefd,_0x8310cc=_0x39b185[_0x279402(0x480)](0x5a3+-0x4*-0x989+-0x1*0x2bbf,_0x3beefd);_0x327376[_0x279402(0x2ab)+'Path'](),_0x3ffbd7['moveT'+'o'](_0x39b185['asNSB'](_0x39b185[_0x279402(0x2e6)](_0x27c081,_0xfe64a5),_0x8310cc),_0x13d23d),_0x571e06['lineT'+'o'](_0x27c081-_0xfe64a5,_0x13d23d),_0x426b97[_0x279402(0x62f)+'o'](_0x27c081+_0xfe64a5,_0x13d23d),_0x1a9659['lineT'+'o'](_0x39b185[_0x279402(0x176)](_0x27c081+_0xfe64a5,_0x8310cc),_0x13d23d),_0x29c770[_0x279402(0x62f)+'o'](_0x27c081,_0x39b185[_0x279402(0x24e)](_0x13d23d,_0xfe64a5)-_0x8310cc),_0x28cbe1[_0x279402(0x599)+'o'](_0x27c081,_0x13d23d-_0xfe64a5),_0x40da53['moveT'+'o'](_0x27c081,_0x13d23d+_0xfe64a5),_0x4f6acf[_0x279402(0x599)+'o'](_0x27c081,_0x39b185[_0x279402(0x213)](_0x13d23d,_0xfe64a5)+_0x8310cc),_0x45b025[_0x279402(0x25c)+'e'](),_0xfbfe24['begin'+_0x279402(0x3f0)](),_0x630e76['arc'](_0x27c081,_0x13d23d,_0x39b185[_0x279402(0x639)](0x515+0x38+-0x54c+0.6000000000000001,_0x3beefd),0x434+-0x1*-0x207d+0x12f*-0x1f,_0x39b185['jGlbW'](_0x4e8609['PI'],-0x2435+0x919+-0x3*-0x90a)),_0x3f2cf6['fill'](),_0x4ff8ea['resto'+'re']();}}function _0x2f25d2(_0xd8929e){var _0x181d55=_0x5b4dfa,_0x3c68df={'uGApP':function(_0x1fc11b){return _0x1fc11b();},'kNZFs':function(_0x31a466,_0x3401e6,_0x4c6d68){var _0x26f942=_0x5d71;return _0x4d0f9d[_0x26f942(0x655)](_0x31a466,_0x3401e6,_0x4c6d68);},'JuXBy':_0x181d55(0x475)+'e','RJvbJ':_0x181d55(0x3ac),'qoQNm':_0x4d0f9d[_0x181d55(0x466)],'HwqnD':function(_0x3e07b3){return _0x3e07b3();},'JVkji':_0x4d0f9d[_0x181d55(0x118)],'uZwKo':function(_0x1a5e88,_0x4aa423){var _0x29e404=_0x181d55;return _0x4d0f9d[_0x29e404(0x1f1)](_0x1a5e88,_0x4aa423);},'lAcTy':'#fff','jAELv':'rgba('+_0x181d55(0x1d4)+_0x181d55(0x31d)+_0x181d55(0x5c2)+'5)','DufEW':function(_0xa5c328,_0x5562a9){return _0xa5c328/_0x5562a9;},'BDShB':function(_0x280ead,_0x1a7a6f){var _0x1e8e2c=_0x181d55;return _0x4d0f9d[_0x1e8e2c(0x58c)](_0x280ead,_0x1a7a6f);},'OyCoZ':function(_0x5e4a42,_0x3fd3c7){var _0x2e2a4a=_0x181d55;return _0x4d0f9d[_0x2e2a4a(0x622)](_0x5e4a42,_0x3fd3c7);},'MHWJz':_0x181d55(0x354),'hPXJK':_0x4d0f9d['jZQGU'],'QqGjy':function(_0x12deb5,_0xea8921){var _0x12f786=_0x181d55;return _0x4d0f9d[_0x12f786(0x1f1)](_0x12deb5,_0xea8921);},'tDDhU':'rgba('+'22,8,'+'16,0.'+'7)','rmiQV':function(_0x27d2dc,_0x4e9ff4){return _0x27d2dc/_0x4e9ff4;},'mjXrO':function(_0x313a97,_0x3d5dae){return _0x313a97-_0x3d5dae;},'hCnEE':function(_0x2d5e3b){return _0x4d0f9d['JGXZR'](_0x2d5e3b);},'dgtCP':function(_0x176d34){return _0x176d34();}};if(_0x4d0f9d[_0x181d55(0x497)](_0xd8929e,'comba'+'t')){if(_0x181d55(0x4f7)==='EzDHL')_0xa17528={..._0x5ec143},_0x3c68df['uGApP'](_0x3c3079),_0x32665d[_0x181d55(0x51d)+'d']();else return[_0x1ad890(),_0x4d0f9d['XaPOI'](_0x5be53a,_0x4d0f9d[_0x181d55(0x4b3)],_0x181d55(0x105)+_0x181d55(0x301)+_0x181d55(0x3dd)+'Initi'+_0x181d55(0x37b)+_0x181d55(0x5e6)+_0x181d55(0x25d)+_0x181d55(0x234)+_0x181d55(0x170)+_0x181d55(0x606)+'lDie,'+'\x20so\x20n'+_0x181d55(0x1ba)+'g\x20can'+_0x181d55(0x1d5)+'\x20or\x20k'+'ill\x20y'+_0x181d55(0x1f9),_0x4d9d62[_0x181d55(0x323)],_0x3e6560=>{var _0x2b28e7=_0x181d55;_0x4d9d62['god']=_0x3e6560,_0x38c311(),_0x5f4fb7(_0x2b28e7(0x323),_0x3e6560),_0x3c68df[_0x2b28e7(0x1ce)](_0x5f4fb7,_0x3c68df[_0x2b28e7(0x233)],_0x3e6560);},[]),_0x5be53a(_0x181d55(0x164)+_0x181d55(0x308),_0x181d55(0x2d4)+_0x181d55(0x648)+_0x181d55(0x4a5)+_0x181d55(0x122)+_0x181d55(0x23a)+'o\x20the'+_0x181d55(0x2a2)+_0x181d55(0x289)+'rings'+_0x181d55(0x22b)+_0x181d55(0x228)+_0x181d55(0x5a7),_0x4d9d62[_0x181d55(0x53b)+'oil'],_0x3a11fc=>{var _0x15b49c=_0x181d55;_0x4d9d62['noRec'+'oil']=_0x3a11fc,_0x39b185[_0x15b49c(0x338)](_0x38c311),_0x39b185[_0x15b49c(0x12b)](_0x5f4fb7,_0x39b185['vEwVm'],_0x3a11fc);},[]),_0x5be53a('No\x20Sp'+_0x181d55(0x3c4),_0x181d55(0x452)+_0x181d55(0x5c9)+_0x181d55(0x342)+_0x181d55(0x1b4)+'xes\x20a'+_0x181d55(0x39a)+_0x181d55(0x3cd)+'\x20your'+'\x20weap'+'on\x20ev'+'ery\x202'+_0x181d55(0x1af),_0x4d9d62[_0x181d55(0x367)+_0x181d55(0x1d6)],_0x1e58c5=>{var _0x186a04=_0x181d55;_0x4d9d62[_0x186a04(0x367)+_0x186a04(0x1d6)]=_0x1e58c5,_0x38c311();},[]),_0x4d0f9d['XaPOI'](_0x5be53a,_0x181d55(0x456)+_0x181d55(0x26f)+'\x20[EXP'+']','Scale'+'s\x20Ove'+'rtide'+'Weapo'+'n.fir'+'eRate'+'\x20to\x201'+'0%.\x20S'+'erver'+'\x20may\x20'+'still'+'\x20gate'+_0x181d55(0x5fd)+'s.',_0x4d9d62[_0x181d55(0x462)+_0x181d55(0x376)],_0x4c6d2c=>{var _0x155ccb=_0x181d55;_0x39b185['cfERX'](_0x155ccb(0x67a),_0x39b185[_0x155ccb(0x4c5)])?(_0x5bfb04[_0x155ccb(0x58a)+'e']=_0x2489c7,_0x1749a0()):(_0x4d9d62[_0x155ccb(0x462)+_0x155ccb(0x376)]=_0x4c6d2c,_0x38c311());},[]),_0x4d0f9d[_0x181d55(0x3d3)](_0x5be53a,'Damag'+'e\x20[EX'+'P]',_0x4d0f9d['rRYPl'],_0x4d9d62[_0x181d55(0x1d8)+'eExp'],_0x21abd8=>{var _0x5050e8=_0x181d55;_0x4d9d62['damag'+'eExp']=_0x21abd8,_0x39b185[_0x5050e8(0x290)](_0x38c311);},[_0x432884(_0x181d55(0x1f7)+'e\x20val'+'ue',null,_0x4d0f9d[_0x181d55(0x2b4)](_0x1f6252,_0x4d9d62[_0x181d55(0x1d8)+_0x181d55(0x534)+'e'],0xbc*0x8+-0x1*0xef2+0x1*0x91c,0x1303*-0x1+-0x1*-0x21d+0x12da,0x1a24+-0x1f51+0xa*0x85,_0xcfac1e=>{var _0x4931d5=_0x181d55;_0x4d9d62[_0x4931d5(0x1d8)+_0x4931d5(0x534)+'e']=_0xcfac1e,_0x38c311();}))]),_0x4d0f9d['LcPii'](_0x5be53a,_0x181d55(0x179)+'ite\x20A'+_0x181d55(0x532)+_0x181d55(0x190),_0x4d0f9d['tILdj'],_0x4d9d62[_0x181d55(0x61d)+_0x181d55(0x44c)],_0x43794f=>{var _0x50ddd8=_0x181d55;_0x4d9d62[_0x50ddd8(0x61d)+'moExp']=_0x43794f,_0x38c311();},[_0x1624bd(_0x4d0f9d[_0x181d55(0x4be)])])];}if(_0xd8929e===_0x4d0f9d[_0x181d55(0x149)])return[_0x4d0f9d['ByTcf'](_0x5be53a,_0x181d55(0x22e),_0x181d55(0x211)+_0x181d55(0x5a2)+_0x181d55(0x313)+'\x20Move'+'ment\x20'+_0x181d55(0x1a7)+_0x181d55(0x20e)+_0x181d55(0x506)+_0x181d55(0x409)+_0x181d55(0x339)+'ation'+'.',_0x4d0f9d['gDCWH'](_0x4d9d62[_0x181d55(0x1a7)+'Pct'],0xf1a*0x1+0x978+-0x182e),null,[_0x4d0f9d['aAPFQ'](_0x432884,_0x181d55(0x22e)+'\x20%',_0x181d55(0x590)+_0x181d55(0x1e0)+'ult',_0x1f6252(_0x4d9d62['speed'+_0x181d55(0x256)],-0x5*-0x133+0x13e7+-0x19b4,-0x21bf+-0x1f8b+0x4276,0xd99+0xe7a+-0x1c0e,_0x3ff3e7=>{var _0xf92895=_0x181d55;_0x4d9d62[_0xf92895(0x1a7)+'Pct']=_0x3ff3e7,_0x38c311();}))]),_0x5be53a(_0x181d55(0x1d7)+_0x181d55(0x3c7)+_0x181d55(0x307),_0x4d0f9d[_0x181d55(0x1e1)],_0x4d0f9d['QrvlU'](_0x4d9d62['jumpP'+'ct'],0xdaf+0xc*-0x1cf+-0x869*-0x1)||_0x4d9d62['gravi'+_0x181d55(0x4a3)]!==-0x1b3b+-0x1f9*0x11+0x3d28,null,[_0x4d0f9d[_0x181d55(0x17c)](_0x432884,_0x181d55(0x1d7)+'%',null,_0x1f6252(_0x4d9d62[_0x181d55(0x5b6)+'ct'],0x1*-0xed1+-0x26b*-0x5+-0xbb*-0x4,0xc4+-0x2*0x12c3+0x25ee,0x4*-0x888+-0xf39+-0x2*-0x18af,_0x3b06eb=>{var _0x930122=_0x181d55;_0x3c68df[_0x930122(0x31c)]===_0x3c68df[_0x930122(0x31c)]?(_0x4d9d62['jumpP'+'ct']=_0x3b06eb,_0x38c311()):(_0x4de8fb['safeM'+_0x930122(0x47d)]=_0x51a3b1,_0x3d3a18(),_0xca56d4['reloa'+'d']());})),_0x4d0f9d[_0x181d55(0x17c)](_0x432884,_0x4d0f9d[_0x181d55(0xf7)],'lower'+'\x20=\x20fl'+'oaty',_0x1f6252(_0x4d9d62['gravi'+'tyPct'],0x6d5+-0xc47+0x57c,-0x21bf*-0x1+0xe4a+-0x1*0x2f41,0x858+0xfd3+-0x1826,_0x40e612=>{var _0x347606=_0x181d55;_0x4d9d62[_0x347606(0x5ef)+_0x347606(0x4a3)]=_0x40e612,_0x3c68df[_0x347606(0x35d)](_0x38c311);}))]),_0x5be53a('Bunny'+'-hop','Zeroe'+'s\x20Mov'+_0x181d55(0x528)+_0x181d55(0x4e0)+_0x181d55(0x28a)+_0x181d55(0x479)+_0x181d55(0x4cb)+'\x20jump'+_0x181d55(0x5ec)+_0x181d55(0x29f)+'never'+'\x20appl'+_0x181d55(0x2a6),_0x4d9d62[_0x181d55(0x640)],_0x4c13d1=>{_0x4d9d62['bhop']=_0x4c13d1,_0x38c311();},[])];if(_0xd8929e===_0x181d55(0x4c6)+'l')return[_0x4d0f9d['VTjnu'](_0x5be53a,_0x4d0f9d[_0x181d55(0x61e)],'WASD\x20'+_0x181d55(0x161)+_0x181d55(0x5c5)+_0x181d55(0x676)+'ce\x20ov'+_0x181d55(0x151)+'.',_0x4d9d62[_0x181d55(0x3d7)+_0x181d55(0x2b1)],_0x131a6c=>{var _0x4a9f22=_0x181d55;_0x4d9d62['keyst'+_0x4a9f22(0x2b1)]=_0x131a6c,_0x38c311();},[_0x432884('Posit'+_0x181d55(0xfc),null,_0x4d0f9d[_0x181d55(0x17c)](_0x1fb295,_0x4d9d62[_0x181d55(0x25f)],[['bl','Botto'+_0x181d55(0x495)+'t'],['br',_0x4d0f9d[_0x181d55(0x505)]],['ml',_0x4d0f9d['jGOsz']]],_0x9dc23=>{var _0x507448=_0x181d55;_0x4d9d62[_0x507448(0x25f)]=_0x9dc23,_0x39b185['yXKUE'](_0x38c311);})),_0x4d0f9d[_0x181d55(0x5e8)](_0x432884,_0x4d0f9d['rMEsK'],null,_0x1f6252(_0x4d9d62[_0x181d55(0x347)+'le'],-0x1*-0x2232+0xd*-0x2ff+-0x1*-0x4c1+0.6,0x2*0x4cb+-0x3*0x29b+-0x1c4+0.6000000000000001,-0x114+0x24f1+-0x23dd+0.05,_0x88ada3=>{var _0x3627c6=_0x181d55;_0x3627c6(0x1c2)!=='VoNpp'?_0x1018db=_0x394978['parse'](_0x28396a['getIt'+'em'](_0x3627c6(0x638)+'a.kou'+'r.ui.'+'v1')||'{}'):(_0x4d9d62[_0x3627c6(0x347)+'le']=_0x88ada3,_0x38c311());})),_0x432884('CPS\x20r'+_0x181d55(0x360)+'t',null,_0x11a6f3(_0x4d9d62[_0x181d55(0x459)],_0x2a4b6c=>{_0x4d9d62['ksCps']=_0x2a4b6c,_0x38c311();}))]),_0x4d0f9d[_0x181d55(0x31a)](_0x5be53a,_0x181d55(0xf8)+_0x181d55(0x628),_0x181d55(0x621)+_0x181d55(0x546)+_0x181d55(0x223)+_0x181d55(0x574)+_0x181d55(0x271),_0x4d9d62['cross'+'hair'],_0x52a353=>{var _0x52b010=_0x181d55;_0x4d9d62['cross'+_0x52b010(0x628)]=_0x52a353,_0x38c311();},[_0x432884('Size',null,_0x4d0f9d[_0x181d55(0x55c)](_0x1f6252,_0x4d9d62[_0x181d55(0x58a)+'e'],-0x121c+-0xb14*0x2+0x2844+0.5,-0x2*0xbc1+-0x60f*-0x1+-0x29*-0x6d+0.5,-0x74*-0x1f+0xa7*-0x3a+0x17ca+0.1,_0x5deb21=>{var _0x4c76d3=_0x181d55;if(_0x39b185['SHYUE'](_0x4c76d3(0x171),_0x39b185[_0x4c76d3(0x187)])){if(!_0x187275||_0x3d9793[_0x4c76d3(0x1b0)+_0x4c76d3(0x40b)](_0x12d225)||_0xc6b34b['lengt'+'h']>-0x1a7d+0x21dc+-0x1*0x71f)return;_0x568032[_0x4c76d3(0x5f3)](_0x2c0a1b);}else _0x4d9d62[_0x4c76d3(0x58a)+'e']=_0x5deb21,_0x39b185[_0x4c76d3(0x460)](_0x38c311);})),_0x4d0f9d[_0x181d55(0x5e8)](_0x432884,_0x181d55(0x42d),null,_0x4d0f9d['TzkBS'](_0x23d1c0,_0x4d9d62[_0x181d55(0x4d1)+'or'],_0x50c24f=>{var _0x425bc1=_0x181d55;_0x4d9d62['chCol'+'or']=_0x50c24f,_0x3c68df[_0x425bc1(0x35d)](_0x38c311);}))]),_0x4d0f9d['WfhSC'](_0x5be53a,_0x181d55(0x317)+_0x181d55(0x2f6),_0x4d0f9d['XgVwi'],_0x4d9d62['fps'],null,[_0x4d0f9d[_0x181d55(0x5a5)](_0x432884,_0x4d0f9d[_0x181d55(0x36f)],null,_0x11a6f3(_0x4d9d62[_0x181d55(0x487)],_0x29690f=>{var _0x2c4dcf=_0x181d55;_0x4d9d62[_0x2c4dcf(0x487)]=_0x29690f,_0x38c311();})),_0x1624bd(_0x181d55(0x4f0)+'emy\x20c'+'ounte'+_0x181d55(0x372)+_0x181d55(0x674)+_0x181d55(0x2d3)+'as\x20no'+_0x181d55(0x58b)+'isibl'+_0x181d55(0x46a)+'ers\x20t'+'o\x20pig'+'gybac'+'k\x20on.')])];if(_0x4d0f9d['mJDqC'](_0xd8929e,_0x181d55(0x562)))return[_0x5be53a(_0x181d55(0x218)+'ck',_0x4d0f9d[_0x181d55(0x15d)],_0x4d9d62[_0x181d55(0x1ad)+'ck'],_0x45a6dd=>{var _0x5b39c1=_0x181d55;_0x4d9d62[_0x5b39c1(0x1ad)+'ck']=_0x45a6dd,_0x38c311();},[_0x4d0f9d[_0x181d55(0x295)](_0x1624bd,_0x4d0f9d['olipL'])])];return[_0x5be53a('Safe\x20'+_0x181d55(0x31b)+_0x181d55(0x520)+'lay\x20o'+'nly)',_0x181d55(0x2d4)+'\x20UWMK'+_0x181d55(0x270)+'rely\x20'+_0x181d55(0x3e7)+_0x181d55(0x375)+'hooks'+_0x181d55(0x3e5)+_0x181d55(0x2c1)+_0x181d55(0x48b)+'atche'+_0x181d55(0x1e7)+_0x181d55(0x672)+_0x181d55(0x19f),_0x4d9d62[_0x181d55(0xfa)+_0x181d55(0x47d)],_0x487f39=>{var _0x56e2da=_0x181d55;_0x4d9d62['safeM'+_0x56e2da(0x47d)]=_0x487f39,_0x39b185['YoYum'](_0x38c311),location['reloa'+'d']();},[_0x1624bd(_0x181d55(0x1a4)+'es\x20on'+'\x20relo'+_0x181d55(0x420)+_0x181d55(0x429)+'ches\x20'+'load\x20'+_0x181d55(0x2f2)+'fe\x20mo'+'de,\x20t'+'he\x20fr'+_0x181d55(0x683)+'is\x20ho'+'ok-re'+_0x181d55(0x144)+'\x20—\x20te'+_0x181d55(0x277)+_0x181d55(0x185)+'hooks'+_0x181d55(0x685)+_0x181d55(0x474)+_0x181d55(0x116))]),_0x5be53a('Hook\x20'+'risk\x20'+'switc'+_0x181d55(0x1ef),'Each\x20'+_0x181d55(0x127)+'nstal'+_0x181d55(0x249)+_0x181d55(0x375)+_0x181d55(0x46f)+'oline'+_0x181d55(0x22a)+_0x181d55(0x3ed)+_0x181d55(0x2bf)+'page\x20'+_0x181d55(0x37c)+_0x181d55(0x166)+'OFF\x20b'+_0x181d55(0x197)+'ault\x20'+_0x181d55(0x419)+_0x181d55(0x44e)+'ure\x20t'+'hat\x20d'+_0x181d55(0x125)+_0x181d55(0x63e)+_0x181d55(0x2a3)+'he\x20re'+_0x181d55(0x634)+_0x181d55(0x4e7)+'throw'+'s\x20\x27fu'+_0x181d55(0x404)+'n\x20sig'+'natur'+'e\x20mis'+_0x181d55(0x380)+_0x181d55(0x57e)+_0x181d55(0x2b3)+_0x181d55(0x3c6)+'\x20is\x20c'+_0x181d55(0x60b)+_0x181d55(0x152)+'n\x20the'+_0x181d55(0x37e)+'one\x20a'+_0x181d55(0x402)+_0x181d55(0x603)+_0x181d55(0x51d)+_0x181d55(0x2ee)+'d\x20see'+'\x20whic'+'h\x20one'+_0x181d55(0x182)+'\x20buil'+'d\x20cho'+'kes\x20o'+'n.',_0x4d9d62[_0x181d55(0x455)+'od']||_0x4d9d62['hookG'+_0x181d55(0x47c)]||_0x4d9d62[_0x181d55(0x2ce)+'oReco'+'il']||_0x4d9d62['hookC'+'aptur'+'e'],_0x15abcc=>{var _0x40fd96=_0x181d55;if(_0x3c68df[_0x40fd96(0x120)]===_0x40fd96(0xfd))_0x4d9d62['hookG'+'od']=_0x15abcc,_0x4d9d62['hookG'+_0x40fd96(0x47c)]=_0x15abcc,_0x4d9d62['hookN'+'oReco'+'il']=_0x15abcc,_0x4d9d62['hookC'+_0x40fd96(0x287)+'e']=_0x15abcc,_0x3c68df[_0x40fd96(0x473)](_0x38c311),location['reloa'+'d']();else try{var _0x48c6c7=_0x4e8542['hookP'+_0x40fd96(0x27b)+'x']({'typeName':_0x2bd900,'methodName':_0x295edf,'params':_0x2a0f0b,'returnType':_0x361dc7},_0x3fc38c);return _0x48c6c7['enabl'+'ed']=_0x6c25a5!==![],_0x3e2954[_0x1f9c00]=_0x48c6c7,_0x21005e[_0x40fd96(0x427)+'Total']++,_0x48c6c7;}catch(_0x3b6014){return _0x2942d4[_0x40fd96(0x4bc)](_0x40fd96(0x2c7)+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x40fd96(0x4ab)+'iled:',_0x4085b4,_0x3b6014&&_0x3b6014[_0x40fd96(0x155)+'ge']),null;}},[_0x1624bd(_0x4d0f9d[_0x181d55(0x1fc)]),_0x4d0f9d['IbYca'](_0x432884,_0x4d0f9d[_0x181d55(0x175)],null,_0x11a6f3(_0x4d9d62[_0x181d55(0x455)+'od'],_0x3699be=>{var _0x50d738=_0x181d55;_0x4d9d62[_0x50d738(0x455)+'od']=_0x3699be,_0x38c311();})),_0x432884(_0x4d0f9d['MToGO'],null,_0x4d0f9d[_0x181d55(0x655)](_0x11a6f3,_0x4d9d62['hookG'+_0x181d55(0x47c)],_0x171467=>{var _0x48b43f=_0x181d55;_0x4d9d62[_0x48b43f(0x455)+_0x48b43f(0x47c)]=_0x171467,_0x38c311();})),_0x4d0f9d['eyEBx'](_0x432884,_0x4d0f9d[_0x181d55(0x1be)],null,_0x4d0f9d['TzkBS'](_0x11a6f3,_0x4d9d62['hookN'+_0x181d55(0x399)+'il'],_0x35fbb4=>{var _0x49c90a=_0x181d55;if('eUXSm'!==_0x39b185[_0x49c90a(0x201)])_0x4d9d62['hookN'+_0x49c90a(0x399)+'il']=_0x35fbb4,_0x38c311();else{var _0x9e02fb=_0x3c68df[_0x49c90a(0x630)]['split']('|'),_0xa0f38=-0x3*0x79+0x5*0x43+0x1c;while(!![]){switch(_0x9e02fb[_0xa0f38++]){case'0':_0x595e4c[_0x49c90a(0x1d3)+_0x49c90a(0x437)+'ne']=_0x49c90a(0x686)+'e';continue;case'1':_0x5b2b54&&(_0x48532f[_0x49c90a(0x525)]='600\x20'+_0x5e42d9[_0x49c90a(0x587)](_0x3c68df[_0x49c90a(0x1ae)](-0x1b4c+-0x188f+0x2e2*0x12,_0x4057fd))+(_0x49c90a(0x4f2)+_0x49c90a(0x1e6)+_0x49c90a(0x625)+_0x49c90a(0x681)+_0x49c90a(0x188)+_0x49c90a(0x119)+'s-ser'+'if'),_0x34e4c8[_0x49c90a(0x668)+_0x49c90a(0x4e5)]=_0x18d261?_0x3c68df[_0x49c90a(0x54e)]:_0x3c68df['jAELv'],_0x71c9dd[_0x49c90a(0x2a1)+'ext'](_0x4a9347,_0x2bc889+_0x568692/(-0x1303+0x1b92+-0x88d),_0xe657fd+_0x3c68df[_0x49c90a(0x25a)](_0x1a8fb0,-0x21e*0x5+-0x6b*-0x57+0x9*-0x2dd)+_0x3c68df[_0x49c90a(0x3eb)](-0x255b*-0x1+-0x21f2+-0x361,_0x48bda3)));continue;case'2':_0x4666b4['strok'+'e']();continue;case'3':_0x22fd2f['save']();continue;case'4':_0x27f491['begin'+'Path']();continue;case'5':_0x34dbf1[_0x49c90a(0x2ba)+'lign']=_0x49c90a(0x531)+'r';continue;case'6':_0x4749e4[_0x49c90a(0x525)]=_0x3c68df[_0x49c90a(0x330)](_0x3c68df['MHWJz']+_0x4a11f8['round']((-0x15de+0x26d9+-0x10ef)*_0x3e5053),_0x49c90a(0x4f2)+_0x49c90a(0x1e6)+'-seri'+_0x49c90a(0x681)+_0x49c90a(0x188)+'i,san'+_0x49c90a(0x5fe)+'if');continue;case'7':_0x3b4832[_0x49c90a(0x668)+_0x49c90a(0x4e5)]=_0x18d261?'#fff':_0x3c68df['hPXJK'];continue;case'8':_0x3eaecb['fill']();continue;case'9':_0x97041a[_0x49c90a(0x395)+'re']();continue;case'10':if(_0x19a5a4['round'+'Rect'])_0x1f8de4['round'+_0x49c90a(0x229)](_0x25ac9c,_0x92efa2,_0x69b165,_0x52e1be,_0x3c68df[_0x49c90a(0x314)](-0x26c7+0x20*0x10c+-0x2*-0x2a7,_0x234926));else _0x283fa7[_0x49c90a(0x17a)](_0x4d45a9,_0x46fda6,_0x4e47fd,_0x3062d1);continue;case'11':_0x59ae27[_0x49c90a(0x5be)+'idth']=-0x1d*-0x50+0x612+-0xf21;continue;case'12':var _0x18d261=_0xa887f1[_0x49c90a(0x3fb)](_0x15550d);continue;case'13':_0x18d261&&(_0x26ca1c[_0x49c90a(0x12d)+'wColo'+'r']=_0x3d3507,_0x585025['shado'+_0x49c90a(0x343)]=0xca*-0x1+-0x1*0x95f+0xa37*0x1,_0x47f008['fill'](),_0x46bfa6[_0x49c90a(0x12d)+_0x49c90a(0x343)]=-0xdd*-0x1d+0xee5+-0x27ee);continue;case'14':_0x5cfd05[_0x49c90a(0x668)+_0x49c90a(0x4e5)]=_0x18d261?'rgba('+_0x49c90a(0x148)+_0x49c90a(0x17b)+_0x49c90a(0x292)+'5)':_0x3c68df['tDDhU'];continue;case'15':_0x707403['fillT'+'ext'](_0x4678a2,_0x102c0a+_0x3c68df[_0x49c90a(0x56d)](_0x31811e,0x19d5+-0x4a7*-0x2+0x187*-0x17),_0x3c68df['mjXrO'](_0x3df951+_0x3c68df['rmiQV'](_0x4c119d,-0x8f3+-0x1*0x144e+0x1d43),_0x545512?(-0x1*-0x44f+-0x3*-0x3b5+-0x5*0x315)*_0xdef2e0:0x1916+-0x2*-0xd30+-0x3376));continue;case'16':_0x59f3ea['strok'+_0x49c90a(0x20f)+'e']=_0x18d261?_0x1effd7:'rgba('+_0x49c90a(0x148)+_0x49c90a(0x17b)+'7,0.3'+'5)';continue;}break;}}})),_0x432884(_0x4d0f9d[_0x181d55(0x1ed)],'no\x20ch'+_0x181d55(0x30e)+_0x181d55(0x66d)+'witho'+_0x181d55(0x4c1)+'is',_0x11a6f3(_0x4d9d62[_0x181d55(0x451)+_0x181d55(0x287)+'e'],_0x4d1293=>{var _0x567303=_0x181d55;_0x4d9d62['hookC'+'aptur'+'e']=_0x4d1293,_0x3c68df[_0x567303(0x44a)](_0x38c311);}))]),_0x5be53a(_0x181d55(0x24a)+'Kille'+'r','Disab'+_0x181d55(0x235)+_0x181d55(0x4dd)+_0x181d55(0x39b)+_0x181d55(0x5ff)+_0x181d55(0x447)+_0x181d55(0x670)+_0x181d55(0x467)+_0x181d55(0x320)+_0x181d55(0x5fc)+'tecti'+'on().'+_0x181d55(0x58e)+_0x181d55(0x2fe),_0x4d9d62[_0x181d55(0x2d2)+'ill'],_0x43c997=>{var _0x1a909f=_0x181d55;_0x4d9d62[_0x1a909f(0x2d2)+_0x1a909f(0x2cd)]=_0x43c997,_0x3c68df[_0x1a909f(0x50b)](_0x38c311);},[_0x1624bd(_0x4d0f9d[_0x181d55(0x11e)],!![])]),_0x5be53a('Dange'+'r',_0x4d0f9d[_0x181d55(0x568)],!![],null,[_0x432884(_0x181d55(0x40c)+_0x181d55(0x547)+_0x181d55(0x484)+'s',null,_0xfb3cd7(_0x4d0f9d['rgTWB'],()=>{var _0x3c0c46=_0x181d55;_0x4d9d62={..._0x347e96},_0x38c311(),location[_0x3c0c46(0x51d)+'d']();}))])];}var _0x30b0d4=null;function _0x54fda8(_0x4e2814){var _0x44ee25=_0x5b4dfa,_0xdec9de={'ipQoc':function(_0x150f4e,_0x558261){return _0x39b185['tdmLe'](_0x150f4e,_0x558261);}};if(_0x39b185[_0x44ee25(0x58f)]!=='XKcua')_0x4fd49c['jumpP'+'ct']=_0xb5adc9,_0x39b185[_0x44ee25(0x290)](_0x38ffd7);else{_0x265d9e=_0x4e2814;if(!_0x30b0d4){if(_0x44ee25(0x46d)===_0x44ee25(0x46d)){var _0x5a3d95=document[_0x44ee25(0x261)+_0x44ee25(0x15e)+'ent'](_0x44ee25(0x306));_0x5a3d95[_0x44ee25(0x225)+_0x44ee25(0x370)+'t']=_0x4a6c28,_0x59dfb7['appen'+_0x44ee25(0x21b)+'d'](_0x5a3d95),_0x30b0d4=_0xc55f20(),_0x59dfb7[_0x44ee25(0x2af)+_0x44ee25(0x21b)+'d'](_0x30b0d4),requestAnimationFrame(()=>_0x30b0d4[_0x44ee25(0x2c5)+_0x44ee25(0x340)][_0x44ee25(0x3c9)]('shown'));}else _0x39d0dd=_0x1e5260['round'](_0xdec9de[_0x44ee25(0x26a)](_0x33c653,-0x9*-0x406+0x1e28+-0x1f3b*0x2)/(_0xd0fbb-_0x2d4ec5)),_0x268406=0x3*-0x7b+0x229*-0x7+0x1090,_0x28a062=_0x42f572;}_0x30b0d4[_0x44ee25(0x2c5)+'List'][_0x44ee25(0x13a)+'e'](_0x44ee25(0x299),_0x4e2814);}}function _0x2e18ca(){_0x54fda8(!_0x265d9e);}function _0xc55f20(){var _0x2adac2=_0x5b4dfa,_0x17e053={'uPYDI':function(_0x29ea49,_0x1bfa82){return _0x29ea49+_0x1bfa82;},'qBCeP':_0x4d0f9d['JMwXV'],'vMMAS':'RLEDz','VeADn':_0x2adac2(0x2b2)+'desc','DHvUW':function(_0x42fdde,_0x54a227){return _0x42fdde===_0x54a227;},'BygUD':'UWMK','NjolO':_0x2adac2(0x134),'TfkoG':function(_0x4d17c8,_0x47d858){return _0x4d17c8+_0x47d858;},'AIAoq':'UWMK\x20'+_0x2adac2(0x56c)+'\x20','oParp':function(_0xbb9260,_0x3735b3){var _0x2ad679=_0x2adac2;return _0x4d0f9d[_0x2ad679(0x288)](_0xbb9260,_0x3735b3);},'oXvoB':function(_0x1e02ad,_0xe6a227){return _0x1e02ad+_0xe6a227;},'tIlrA':_0x2adac2(0x436),'fdSGo':_0x4d0f9d['wNEsD'],'vAYLG':_0x2adac2(0x19c),'YRqgp':'UWMK\x20'+_0x2adac2(0x544)+'NG\x20-\x20'+_0x2adac2(0x2b0)+'ay\x20on'+'ly\x20(r'+_0x2adac2(0x4a1)+_0x2adac2(0x68b)+_0x2adac2(0x133)+'erscr'+_0x2adac2(0x1f8)},_0x48c332=document[_0x2adac2(0x261)+_0x2adac2(0x15e)+'ent'](_0x4d0f9d['oTFwa']);_0x48c332[_0x2adac2(0x2c5)+'Name']=_0x4d0f9d[_0x2adac2(0x47a)];var _0x325c25=document['creat'+_0x2adac2(0x15e)+'ent'](_0x4d0f9d[_0x2adac2(0x59c)]);_0x325c25['class'+_0x2adac2(0x470)]=_0x4d0f9d['fZDcV'];var _0x52ff54=document[_0x2adac2(0x261)+_0x2adac2(0x15e)+'ent'](_0x2adac2(0x14d));_0x52ff54[_0x2adac2(0x2c5)+'Name']=_0x4d0f9d[_0x2adac2(0x11d)],_0x52ff54['inner'+_0x2adac2(0x613)]=_0x4d0f9d[_0x2adac2(0x435)],_0x325c25[_0x2adac2(0x2af)+_0x2adac2(0x21b)+'d'](_0x52ff54);var _0x2a0e3b=document[_0x2adac2(0x261)+'eElem'+_0x2adac2(0x1d0)](_0x2adac2(0x14d));_0x2a0e3b[_0x2adac2(0x2c5)+'Name']=_0x4d0f9d[_0x2adac2(0x4a0)];var _0x5313d3=document[_0x2adac2(0x261)+'eElem'+_0x2adac2(0x1d0)](_0x2adac2(0x3c1)+'r');_0x5313d3[_0x2adac2(0x2c5)+_0x2adac2(0x470)]='mn-to'+'p';var _0x2530df=document[_0x2adac2(0x261)+'eElem'+_0x2adac2(0x1d0)]('div');_0x2530df[_0x2adac2(0x2c5)+_0x2adac2(0x470)]=_0x2adac2(0x56b)+'tles';var _0x446c6e=document['creat'+_0x2adac2(0x15e)+'ent']('h2');_0x446c6e['class'+'Name']=_0x4d0f9d[_0x2adac2(0x54c)],_0x446c6e[_0x2adac2(0x225)+_0x2adac2(0x370)+'t']='Sakur'+_0x2adac2(0x1c7)+'r';var _0x58db72=document[_0x2adac2(0x261)+_0x2adac2(0x15e)+_0x2adac2(0x1d0)](_0x4d0f9d[_0x2adac2(0x4c0)]);_0x58db72['class'+'Name']='mn-su'+'b',_0x58db72[_0x2adac2(0x225)+_0x2adac2(0x370)+'t']=_0x4d0f9d[_0x2adac2(0x1eb)],_0x2530df[_0x2adac2(0x2af)+'d'](_0x446c6e,_0x58db72);var _0x2d02ed=document[_0x2adac2(0x261)+'eElem'+'ent']('butto'+'n');_0x2d02ed[_0x2adac2(0x63b)]='butto'+'n',_0x2d02ed[_0x2adac2(0x2c5)+_0x2adac2(0x470)]=_0x4d0f9d['MEVdy'],_0x2d02ed[_0x2adac2(0x21d)]=_0x4d0f9d['MgMed'],_0x2d02ed[_0x2adac2(0x48e)+_0x2adac2(0x613)]=_0x4d0f9d['wKurA'],_0x2d02ed[_0x2adac2(0x3fc)+'ck']=()=>_0x54fda8(![]),_0x5313d3['appen'+'d'](_0x2530df,_0x2d02ed);var _0x350e57=document[_0x2adac2(0x261)+'eElem'+'ent'](_0x4d0f9d[_0x2adac2(0x4bd)]);_0x350e57['class'+'Name']=_0x2adac2(0x66c)+'ls',_0x2a0e3b['appen'+'d'](_0x5313d3,_0x350e57),_0x48c332[_0x2adac2(0x2af)+'d'](_0x325c25,_0x2a0e3b);var _0x4f4a86=new Map();for(var _0x4fe58e of _0x43fd03){var _0x2a8265=document['creat'+_0x2adac2(0x15e)+'ent'](_0x4d0f9d[_0x2adac2(0x20d)]);_0x2a8265[_0x2adac2(0x63b)]=_0x2adac2(0x186)+'n',_0x2a8265['class'+_0x2adac2(0x470)]='mn-ta'+'b',_0x2a8265[_0x2adac2(0x21d)]=_0x4fe58e[_0x2adac2(0x40e)],_0x2a8265[_0x2adac2(0x48e)+_0x2adac2(0x613)]=_0x4d0f9d['kJNhC'](_0x4d0f9d[_0x2adac2(0x384)]+_0x4fe58e[_0x2adac2(0x40e)],'</sma'+_0x2adac2(0x254)),_0x2a8265[_0x2adac2(0x3fc)+'ck']=(_0x59bb94=>()=>_0x4d2511(_0x59bb94))(_0x4fe58e['id']),_0x4f4a86[_0x2adac2(0x4c8)](_0x4fe58e['id'],_0x2a8265),_0x325c25[_0x2adac2(0x2af)+'dChil'+'d'](_0x2a8265);}function _0x4d2511(_0xc1fcc5){var _0x375d09=_0x2adac2;_0x4a1e92[_0x375d09(0x664)]=_0xc1fcc5,_0x39b185[_0x375d09(0x67c)](_0xa8da5d);var _0x387fde=_0x43fd03[_0x375d09(0x390)](_0x491d86=>_0x491d86['id']===_0xc1fcc5)||_0x43fd03[0xbc6+0x1d7+-0xd9d];_0x446c6e['textC'+'onten'+'t']=_0x39b185['rfFTt']('Sakur'+'a\x20Kou'+_0x375d09(0x55e),_0x387fde['label']);for(var [_0x32a243,_0x1d2f7a]of _0x4f4a86)_0x1d2f7a[_0x375d09(0x2c5)+_0x375d09(0x340)]['toggl'+'e']('activ'+'e',_0x32a243===_0xc1fcc5);_0x350e57['repla'+'ceChi'+_0x375d09(0x5a3)](..._0x2f25d2(_0xc1fcc5));}return _0x4d2511(_0x4a1e92['cat']||_0x2adac2(0x28c)+'t'),setInterval(()=>{var _0x29dd7a=_0x2adac2,_0x34317b={'yhZpI':function(_0x1a2959,_0xf4b40b){return _0x1a2959+_0xf4b40b;},'KJIZN':function(_0xa7acd2,_0x445c96){return _0x17e053['uPYDI'](_0xa7acd2,_0x445c96);},'PhaPt':_0x17e053[_0x29dd7a(0x150)]};if(_0x17e053[_0x29dd7a(0x2aa)]==='OjUjW')try{var _0x38122f=_0x294abe&&(_0x291801['messa'+'ge']||_0x5d8d6e[_0x29dd7a(0x1f5)]&&_0xb40038[_0x29dd7a(0x1f5)][_0x29dd7a(0x155)+'ge'])||'unkno'+'wn';if(_0x2bd934&&_0x1a957a['filen'+_0x29dd7a(0x4b6)])_0x38122f+=_0x34317b['yhZpI'](_0x34317b['KJIZN'](_0x34317b[_0x29dd7a(0x5c0)],_0x547a72(_0x1303b7['filen'+_0x29dd7a(0x4b6)])['split']('/')[_0x29dd7a(0x4af)]()),':')+(_0x1beff3['linen'+'o']||'?');_0x5cc34a[_0x29dd7a(0x47e)+_0x29dd7a(0x107)]=_0xabcde2(_0x38122f)[_0x29dd7a(0x184)](-0x1ff5+-0x2001*0x1+0x3ff6,-0x17a1+-0x3ab*0x2+0x1f97);}catch(_0x2d34c4){}else{if(!_0x265d9e)return;var _0x46ad1a=_0x350e57[_0x29dd7a(0x5c3)+_0x29dd7a(0x5a4)];for(var _0xab7c27=0x184f+0x34a*-0x2+-0x11bb;_0xab7c27<_0x46ad1a['lengt'+'h'];_0xab7c27++){var _0x1548e2=_0x46ad1a[_0xab7c27][_0x29dd7a(0x364)+_0x29dd7a(0x675)+_0x29dd7a(0x10f)](_0x17e053[_0x29dd7a(0xfb)]);_0x1548e2&&(_0x17e053[_0x29dd7a(0x283)](_0x1548e2[_0x29dd7a(0x225)+'onten'+'t']['index'+'Of'](_0x17e053['BygUD']),0x1e5f+0x18f2+-0x3751)||_0x1548e2[_0x29dd7a(0x225)+'onten'+'t']['index'+'Of'](_0x17e053['NjolO'])===-0xbf*-0x11+-0xe5c+0xb*0x27)&&(_0x1548e2[_0x29dd7a(0x225)+_0x29dd7a(0x370)+'t']=_0x1e1995['safeM'+'ode']?_0x29dd7a(0x3ae)+_0x29dd7a(0x4bb)+'-\x20ove'+_0x29dd7a(0x656)+'only,'+_0x29dd7a(0x56e)+_0x29dd7a(0x408)+'(relo'+_0x29dd7a(0x3e8)+_0x29dd7a(0x3df)+')':_0x1e1995[_0x29dd7a(0x3f8)]?_0x17e053[_0x29dd7a(0x346)](_0x17e053[_0x29dd7a(0x1fe)](_0x17e053[_0x29dd7a(0x210)]+(_0x1e1995[_0x29dd7a(0x427)+_0x29dd7a(0x220)]?_0x17e053['oParp'](_0x17e053['oXvoB'](_0x1e1995[_0x29dd7a(0x427)+'Ok']+'/',_0x1e1995[_0x29dd7a(0x427)+_0x29dd7a(0x220)]),_0x29dd7a(0x236)+'s'):_0x29dd7a(0x21c)+'ks\x20ar'+_0x29dd7a(0x538)+'all\x20o'+_0x29dd7a(0x13d))+('\x20|\x20ga'+'me\x20')+(_0x1e1995[_0x29dd7a(0x2d8)+'oaded']?_0x29dd7a(0x5bb)+'d':'loadi'+'ng')+(_0x29dd7a(0x142)+'ooter'+'\x20'),_0x1e1995[_0x29dd7a(0x5d2)+_0x29dd7a(0x2f6)]?_0x17e053['tIlrA']:_0x29dd7a(0x19c))+_0x17e053['fdSGo']+(_0x1e1995['movem'+'ents']?_0x29dd7a(0x436):_0x17e053[_0x29dd7a(0x1b8)]),_0x1e1995[_0x29dd7a(0x47e)+'rror']?_0x29dd7a(0x5b0)+'R:\x20'+_0x1e1995['lastE'+'rror']:''):_0x17e053['YRqgp']);}}},-0x24fc+0x20ab+0x839),_0x48c332;}var _0x4a6c28=_0x5b4dfa(0x488)+':host'+'\x20{\x20al'+_0x5b4dfa(0x131)+_0x5b4dfa(0x5a9)+_0x5b4dfa(0x315)+_0x5b4dfa(0x1e4)+_0x5b4dfa(0x4df)+_0x5b4dfa(0x14f)+_0x5b4dfa(0x65a)+_0x5b4dfa(0x14e)+_0x5b4dfa(0x18a)+'\x20marg'+'in:\x200'+';\x20fon'+_0x5b4dfa(0x657)+_0x5b4dfa(0x4d9)+'\x22Inte'+'r\x22,\x20\x22'+_0x5b4dfa(0x424)+_0x5b4dfa(0x4ef)+_0x5b4dfa(0x281)+'em-ui'+_0x5b4dfa(0x353)+_0x5b4dfa(0x5fe)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+_0x5b4dfa(0x1c0)+_0x5b4dfa(0x554)+'{\x20pos'+'ition'+_0x5b4dfa(0x16b)+'olute'+';\x20rig'+_0x5b4dfa(0x102)+'4px;\x20'+'botto'+'m:\x2024'+_0x5b4dfa(0x444)+'idth:'+_0x5b4dfa(0x612)+_0x5b4dfa(0x2c6)+',\x20cal'+_0x5b4dfa(0x1b6)+'vw\x20-\x20'+_0x5b4dfa(0x1ca)+');\x20ma'+_0x5b4dfa(0x405)+'ght:\x20'+_0x5b4dfa(0x457)+_0x5b4dfa(0x3dc)+_0x5b4dfa(0x22d)+_0x5b4dfa(0x3da)+'h\x20-\x204'+'8px))'+_0x5b4dfa(0x30a)+'\x20\x20\x20di'+_0x5b4dfa(0x3ab)+':\x20fle'+_0x5b4dfa(0x2e8)+_0x5b4dfa(0x5d5)+'px;\x20p'+_0x5b4dfa(0x3b7)+'g:\x2010'+'px;\x20b'+'order'+_0x5b4dfa(0x5a1)+'us:\x202'+_0x5b4dfa(0x4ed)+_0x5b4dfa(0x3d2)+_0x5b4dfa(0x4a4)+_0x5b4dfa(0x56f)+'\x20auto'+_0x5b4dfa(0x30a)+'\x20\x20\x20ba'+'ckgro'+_0x5b4dfa(0x3de)+_0x5b4dfa(0x3bb)+'24,17'+',21,.'+'82);\x20'+_0x5b4dfa(0x36c)+'rop-f'+'ilter'+_0x5b4dfa(0x63f)+_0x5b4dfa(0x168)+_0x5b4dfa(0x4ad)+'turat'+_0x5b4dfa(0x216)+_0x5b4dfa(0x291)+'webki'+'t-bac'+_0x5b4dfa(0x2e1)+_0x5b4dfa(0x178)+'er:\x20b'+'lur(2'+'2px)\x20'+_0x5b4dfa(0x61f)+_0x5b4dfa(0x42e)+_0x5b4dfa(0x535)+'\x0a\x20\x20\x20\x20'+_0x5b4dfa(0x253)+'-shad'+_0x5b4dfa(0x251)+_0x5b4dfa(0x28e)+'1px\x20r'+_0x5b4dfa(0x1d1)+'55,25'+'5,255'+',.06)'+_0x5b4dfa(0x468)+'et\x200\x20'+_0x5b4dfa(0x16d)+'\x20rgba'+'(255,'+_0x5b4dfa(0x1d4)+_0x5b4dfa(0x33d)+_0x5b4dfa(0x57f)+_0x5b4dfa(0x4c9)+'\x2080px'+_0x5b4dfa(0x293)+_0x5b4dfa(0x60f)+_0x5b4dfa(0x5d6)+');\x0a\x20\x20'+_0x5b4dfa(0x46e)+_0x5b4dfa(0x371)+'y:\x200;'+_0x5b4dfa(0x37f)+_0x5b4dfa(0x5ac)+_0x5b4dfa(0x476)+_0x5b4dfa(0x57d)+_0x5b4dfa(0x631)+'px);\x20'+'point'+'er-ev'+'ents:'+_0x5b4dfa(0x4dc)+_0x5b4dfa(0x642)+_0x5b4dfa(0x5ca)+'on:\x20o'+_0x5b4dfa(0x371)+_0x5b4dfa(0x331)+_0x5b4dfa(0x3ea)+_0x5b4dfa(0x34d)+_0x5b4dfa(0x66a)+_0x5b4dfa(0x33e)+_0x5b4dfa(0x579)+_0x5b4dfa(0x1cc)+'ezier'+_0x5b4dfa(0x569)+_0x5b4dfa(0x1e8)+_0x5b4dfa(0x5ae)+'\x20\x20\x20\x20\x20'+'\x20colo'+'r:\x20#f'+_0x5b4dfa(0x28b)+';\x20fon'+_0x5b4dfa(0x4cc)+_0x5b4dfa(0x626)+'px;\x20}'+_0x5b4dfa(0x488)+_0x5b4dfa(0x1c0)+_0x5b4dfa(0x132)+_0x5b4dfa(0x299)+_0x5b4dfa(0x591)+_0x5b4dfa(0x34b)+_0x5b4dfa(0x373)+_0x5b4dfa(0x644)+'form:'+'\x20none'+_0x5b4dfa(0x189)+_0x5b4dfa(0x4b8)+'event'+'s:\x20au'+'to;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-s'+'ide\x20{'+_0x5b4dfa(0x5ab)+'lay:\x20'+_0x5b4dfa(0x382)+_0x5b4dfa(0x52a)+'-dire'+_0x5b4dfa(0x209)+':\x20col'+_0x5b4dfa(0x29d)+'align'+'-item'+_0x5b4dfa(0x238)+_0x5b4dfa(0x23f)+_0x5b4dfa(0x529)+_0x5b4dfa(0x25b)+_0x5b4dfa(0x1ec)+_0x5b4dfa(0x352)+_0x5b4dfa(0x3ef)+_0x5b4dfa(0x41a)+_0x5b4dfa(0x5cb)+'\x20padd'+'ing:\x20'+'12px\x20'+(_0x5b4dfa(0x401)+'rder-'+'radiu'+'s:\x2016'+_0x5b4dfa(0x260)+_0x5b4dfa(0x667)+_0x5b4dfa(0x21a)+_0x5b4dfa(0x587)+_0x5b4dfa(0x208)+'a(255'+',255,'+_0x5b4dfa(0x510)+_0x5b4dfa(0x163)+_0x5b4dfa(0x282)+_0x5b4dfa(0x12d)+_0x5b4dfa(0x1e2)+'set\x200'+'\x200\x200\x20'+_0x5b4dfa(0x543)+'gba(2'+_0x5b4dfa(0x560)+_0x5b4dfa(0x345)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x5b4dfa(0x1a5)+_0x5b4dfa(0x2b8)+'ispla'+'y:\x20gr'+_0x5b4dfa(0x570)+_0x5b4dfa(0x44f)+_0x5b4dfa(0x4c4)+':\x20cen'+'ter;\x20'+'width'+_0x5b4dfa(0x5d3)+_0x5b4dfa(0x5b5)+_0x5b4dfa(0x4b2)+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x5b4dfa(0x1a5)+'o-svg'+_0x5b4dfa(0x203)+_0x5b4dfa(0x2be)+_0x5b4dfa(0x49f)+'\x20heig'+_0x5b4dfa(0x102)+_0x5b4dfa(0x489)+'overf'+_0x5b4dfa(0x43a)+'visib'+_0x5b4dfa(0x49d)+_0x5b4dfa(0x1ab)+':\x20dro'+_0x5b4dfa(0x438)+'dow(0'+'\x200\x204p'+_0x5b4dfa(0x67b)+'a(255'+_0x5b4dfa(0x16a)+_0x5b4dfa(0x624)+'8));\x20'+_0x5b4dfa(0x52d)+_0x5b4dfa(0x29c)+_0x5b4dfa(0x515)+_0x5b4dfa(0x5ab)+'lay:\x20'+_0x5b4dfa(0x382)+'\x20alig'+_0x5b4dfa(0x392)+_0x5b4dfa(0x682)+_0x5b4dfa(0x43e)+_0x5b4dfa(0x59e)+'tify-'+'conte'+_0x5b4dfa(0x66f)+_0x5b4dfa(0x43e)+';\x20wid'+_0x5b4dfa(0x4f9)+_0x5b4dfa(0x4ed)+_0x5b4dfa(0x3d8)+'t:\x2034'+_0x5b4dfa(0x551)+_0x5b4dfa(0x14e)+_0x5b4dfa(0x584)+'borde'+'r-rad'+_0x5b4dfa(0x162)+'10px;'+_0x5b4dfa(0x488)+'\x20\x20bac'+'kgrou'+_0x5b4dfa(0x3e0)+_0x5b4dfa(0x2b5)+_0x5b4dfa(0x5b1)+';\x20col'+_0x5b4dfa(0x5df)+_0x5b4dfa(0x1d1)+'46,23'+'8,242'+',.4);'+_0x5b4dfa(0x59d)+'or:\x20p'+_0x5b4dfa(0x4f4)+_0x5b4dfa(0x550)+_0x5b4dfa(0x426)+_0x5b4dfa(0x509)+_0x5b4dfa(0x31f)+_0x5b4dfa(0x33b)+_0x5b4dfa(0x10a)+_0x5b4dfa(0xfe)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x5b4dfa(0x2f0)+_0x5b4dfa(0x64d)+_0x5b4dfa(0x3e4)+_0x5b4dfa(0x654)+_0x5b4dfa(0x208)+_0x5b4dfa(0x688)+_0x5b4dfa(0x3af)+_0x5b4dfa(0x19a)+'8);\x20}'+_0x5b4dfa(0x488)+'.mn-t'+_0x5b4dfa(0x2f9)+_0x5b4dfa(0x200)+'{\x20col'+'or:\x20#'+_0x5b4dfa(0x492)+_0x5b4dfa(0x5f1)+'ckgro'+_0x5b4dfa(0x3de)+_0x5b4dfa(0x3bb)+_0x5b4dfa(0x148)+_0x5b4dfa(0x17b)+'7,.1)'+';\x20}\x0a\x20'+_0x5b4dfa(0x417)+'n-mai'+_0x5b4dfa(0x413)+'lex:\x20'+_0x5b4dfa(0x59f)+'n-wid'+_0x5b4dfa(0x1c3)+_0x5b4dfa(0x381)+_0x5b4dfa(0x576)+_0x5b4dfa(0x52a)+';\x20fle'+_0x5b4dfa(0x3c8)+'ectio'+_0x5b4dfa(0x43f)+_0x5b4dfa(0x1de)+'\x20}\x0a\x20\x20'+_0x5b4dfa(0x418)+'-top\x20'+_0x5b4dfa(0x3ca)+_0x5b4dfa(0x576)+_0x5b4dfa(0x52a)+';\x20ali'+'gn-it'+'ems:\x20'+'cente'+_0x5b4dfa(0x3a2)+_0x5b4dfa(0x35f)+_0x5b4dfa(0x4cd)+'addin'+_0x5b4dfa(0x12f)+'x\x206px'+'\x2012px'+_0x5b4dfa(0x240)+_0x5b4dfa(0x2c4)+_0x5b4dfa(0x4fd)+_0x5b4dfa(0x5cb)+_0x5b4dfa(0x5bc)+'\x20\x20.mn'+_0x5b4dfa(0x67f)+_0x5b4dfa(0x362)+'flex:'+_0x5b4dfa(0x23d)+'in-wi'+_0x5b4dfa(0x2be)+'0;\x20}\x0a'+_0x5b4dfa(0x39c)+_0x5b4dfa(0x368)+_0x5b4dfa(0x490)+'t-siz'+_0x5b4dfa(0x386)+_0x5b4dfa(0x3ef)+'ont-w'+_0x5b4dfa(0x332)+':\x20650'+_0x5b4dfa(0x315)+'\x20\x20\x20.m'+'n-sub'+_0x5b4dfa(0x4c3)+'nt-si'+_0x5b4dfa(0x509)+'1px;\x20'+_0x5b4dfa(0x243))+('ty:\x20.'+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x5b4dfa(0x60e)+'ose\x20{'+'\x20disp'+_0x5b4dfa(0x27a)+_0x5b4dfa(0x618)+_0x5b4dfa(0x11a)+'e-ite'+_0x5b4dfa(0x682)+'enter'+_0x5b4dfa(0x266)+'th:\x202'+'8px;\x20'+'heigh'+_0x5b4dfa(0x5f4)+_0x5b4dfa(0x551)+_0x5b4dfa(0x14e)+_0x5b4dfa(0x584)+_0x5b4dfa(0x432)+_0x5b4dfa(0x2bd)+_0x5b4dfa(0x162)+'8px;\x20'+'backg'+_0x5b4dfa(0x587)+_0x5b4dfa(0x476)+'nspar'+_0x5b4dfa(0x2fa)+_0x5b4dfa(0x654)+':\x20inh'+_0x5b4dfa(0x273)+_0x5b4dfa(0x139)+_0x5b4dfa(0x3ff)+_0x5b4dfa(0x2e9)+'curso'+_0x5b4dfa(0x312)+_0x5b4dfa(0x540)+_0x5b4dfa(0x315)+_0x5b4dfa(0x417)+_0x5b4dfa(0x59b)+'se:ho'+_0x5b4dfa(0x29b)+'\x20opac'+'ity:\x20'+_0x5b4dfa(0x441)+'ckgro'+_0x5b4dfa(0x3de)+'rgba('+'255,2'+_0x5b4dfa(0x560)+_0x5b4dfa(0x1c8)+');\x20}\x0a'+_0x5b4dfa(0x39c)+'mn-cl'+_0x5b4dfa(0x1c1)+'vg\x20{\x20'+_0x5b4dfa(0x117)+_0x5b4dfa(0x4cf)+'x;\x20he'+_0x5b4dfa(0x4b2)+_0x5b4dfa(0x50e)+_0x5b4dfa(0x5ce)+_0x5b4dfa(0x4d7)+'ne;\x20s'+_0x5b4dfa(0x198)+_0x5b4dfa(0x563)+'rentC'+_0x5b4dfa(0x2e0)+_0x5b4dfa(0x464)+'ke-wi'+'dth:\x20'+_0x5b4dfa(0x684)+_0x5b4dfa(0x67e)+_0x5b4dfa(0x556)+_0x5b4dfa(0x1e3)+'ound;'+_0x5b4dfa(0x5bc)+'\x20\x20.mn'+'-cols'+_0x5b4dfa(0x5e5)+_0x5b4dfa(0x2ae)+_0x5b4dfa(0x341)+'-heig'+'ht:\x200'+_0x5b4dfa(0x4d4)+'rflow'+'-y:\x20a'+'uto;\x20'+'displ'+'ay:\x20g'+_0x5b4dfa(0x2df)+_0x5b4dfa(0x2b6)+_0x5b4dfa(0x241)+_0x5b4dfa(0x53c)+'olumn'+'s:\x20re'+'peat('+'auto-'+'fill,'+'\x20minm'+_0x5b4dfa(0x34a)+_0x5b4dfa(0x62b)+'1fr))'+_0x5b4dfa(0x285)+_0x5b4dfa(0x3ce)+'ems:\x20'+'start'+_0x5b4dfa(0x285)+'gn-co'+'ntent'+_0x5b4dfa(0x10b)+_0x5b4dfa(0x521)+_0x5b4dfa(0x10d)+'0px;\x20'+'paddi'+'ng:\x200'+_0x5b4dfa(0x62a)+_0x5b4dfa(0x414)+_0x5b4dfa(0x315)+_0x5b4dfa(0x417)+_0x5b4dfa(0x383)+_0x5b4dfa(0x22c)+'ebkit'+'-scro'+_0x5b4dfa(0x5dd)+_0x5b4dfa(0x203)+'dth:\x20'+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x5b4dfa(0x29c)+_0x5b4dfa(0x5ee)+_0x5b4dfa(0x3b8)+'kit-s'+_0x5b4dfa(0x5af)+_0x5b4dfa(0x483)+'humb\x20'+'{\x20bac'+_0x5b4dfa(0x5b9)+_0x5b4dfa(0x38a)+'gba(2'+'55,25'+_0x5b4dfa(0x345)+_0x5b4dfa(0x3aa)+_0x5b4dfa(0x4d3)+_0x5b4dfa(0x38e)+_0x5b4dfa(0x1f4)+_0x5b4dfa(0x2a7)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d\x20{\x20b'+_0x5b4dfa(0x14e)+'-radi'+'us:\x201'+_0x5b4dfa(0x4ed)+'backg'+_0x5b4dfa(0x587)+_0x5b4dfa(0x208)+_0x5b4dfa(0x38b)+',255,'+'255,.'+_0x5b4dfa(0x163)+_0x5b4dfa(0x282)+_0x5b4dfa(0x12d)+_0x5b4dfa(0x1e2)+_0x5b4dfa(0x14a)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x5b4dfa(0x560)+_0x5b4dfa(0x345)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x5b4dfa(0x4b5)+_0x5b4dfa(0x5b9)+'nd:\x20r'+_0x5b4dfa(0x1d1)+'55,25'+_0x5b4dfa(0x345)+_0x5b4dfa(0x172)+';\x20box'+_0x5b4dfa(0x2d6)+'ow:\x20i'+_0x5b4dfa(0x403)+_0x5b4dfa(0x1ee)+'\x201px\x20'+_0x5b4dfa(0x3bb)+_0x5b4dfa(0x148)+_0x5b4dfa(0x17b)+_0x5b4dfa(0x302)+_0x5b4dfa(0x3fa)+'\x20\x20\x20\x20.'+_0x5b4dfa(0x47f)+_0x5b4dfa(0x3d5)+_0x5b4dfa(0x2eb)+'displ')+(_0x5b4dfa(0x4e6)+_0x5b4dfa(0x10c)+_0x5b4dfa(0x357)+'-item'+_0x5b4dfa(0x238)+_0x5b4dfa(0x23f)+'\x20gap:'+_0x5b4dfa(0x2f7)+_0x5b4dfa(0x585)+_0x5b4dfa(0x145)+_0x5b4dfa(0xff)+'12px;'+'\x20}\x0a\x20\x20'+_0x5b4dfa(0x3e2)+'-card'+_0x5b4dfa(0x67f)+_0x5b4dfa(0x2fb)+'lex:\x20'+_0x5b4dfa(0x59f)+'n-wid'+_0x5b4dfa(0x1c3)+_0x5b4dfa(0x315)+_0x5b4dfa(0x52f)+'k-car'+'d-tit'+_0x5b4dfa(0x34f)+'rong\x20'+'{\x20fon'+'t-siz'+'e:\x2013'+_0x5b4dfa(0x3ef)+_0x5b4dfa(0x4d2)+_0x5b4dfa(0x332)+':\x20600'+_0x5b4dfa(0x660)+'or:\x20r'+_0x5b4dfa(0x1d1)+_0x5b4dfa(0x27f)+_0x5b4dfa(0x48f)+_0x5b4dfa(0x41e)+';\x20}\x0a\x20'+_0x5b4dfa(0x52f)+_0x5b4dfa(0x36e)+_0x5b4dfa(0x19e)+'.sk-c'+'ard-t'+_0x5b4dfa(0x527)+_0x5b4dfa(0x1fa)+'g\x20{\x20c'+'olor:'+'\x20#fff'+_0x5b4dfa(0x2dc)+_0x5b4dfa(0x52d)+'\x20.sk-'+'mbody'+_0x5b4dfa(0x35a)+'dding'+':\x200\x201'+_0x5b4dfa(0x5d0)+_0x5b4dfa(0x31f)+_0x5b4dfa(0x52d)+_0x5b4dfa(0x31e)+_0x5b4dfa(0x3e3)+_0x5b4dfa(0x4c3)+'nt-si'+_0x5b4dfa(0x509)+_0x5b4dfa(0x138)+'opaci'+_0x5b4dfa(0x45a)+_0x5b4dfa(0x11f)+_0x5b4dfa(0x2d9)+_0x5b4dfa(0x366)+'m:\x206p'+'x;\x20}\x0a'+_0x5b4dfa(0x39c)+_0x5b4dfa(0x27c)+_0x5b4dfa(0x410)+_0x5b4dfa(0x482)+'y:\x20fl'+_0x5b4dfa(0x393)+'lign-'+_0x5b4dfa(0x4c4)+_0x5b4dfa(0x5e2)+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x5b4dfa(0x461)+'ng:\x204'+'px\x200;'+_0x5b4dfa(0x555)+'-size'+':\x2011.'+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x5b4dfa(0x31e)+_0x5b4dfa(0x40e)+_0x5b4dfa(0x5e5)+'ex:\x201'+_0x5b4dfa(0x660)+_0x5b4dfa(0x5df)+'gba(2'+'46,23'+_0x5b4dfa(0x48f)+_0x5b4dfa(0x57b)+';\x20}\x0a\x20'+_0x5b4dfa(0x52f)+'k-hin'+_0x5b4dfa(0x542)+_0x5b4dfa(0x482)+_0x5b4dfa(0x687)+_0x5b4dfa(0x55a)+_0x5b4dfa(0x33b)+_0x5b4dfa(0x3fd)+_0x5b4dfa(0x49a)+_0x5b4dfa(0x192)+'city:'+_0x5b4dfa(0x41c)+_0x5b4dfa(0x52d)+_0x5b4dfa(0x31e)+'switc'+_0x5b4dfa(0x589)+_0x5b4dfa(0x60d)+'on:\x20r'+_0x5b4dfa(0x335)+_0x5b4dfa(0x557)+_0x5b4dfa(0x504)+'\x2026px'+_0x5b4dfa(0x524)+_0x5b4dfa(0x369)+'14px;'+_0x5b4dfa(0x5d8)+'er:\x200'+_0x5b4dfa(0x4d3)+'der-r'+_0x5b4dfa(0x1f4)+_0x5b4dfa(0x167)+'x;\x20ba'+_0x5b4dfa(0x24c)+_0x5b4dfa(0x3de)+'rgba('+_0x5b4dfa(0x1d4)+_0x5b4dfa(0x560)+_0x5b4dfa(0x4db)+_0x5b4dfa(0x4e4)+_0x5b4dfa(0x30d)+_0x5b4dfa(0x272)+_0x5b4dfa(0x422)+_0x5b4dfa(0x2a4)+_0x5b4dfa(0x4dc)+_0x5b4dfa(0x315)+_0x5b4dfa(0x52f)+_0x5b4dfa(0x443)+_0x5b4dfa(0x4d8)+'after'+_0x5b4dfa(0x2d5)+_0x5b4dfa(0x193)+_0x5b4dfa(0x12a)+_0x5b4dfa(0x191)+_0x5b4dfa(0x1a8)+'\x20abso'+_0x5b4dfa(0x365)+'\x20top:'+_0x5b4dfa(0x356)+_0x5b4dfa(0x580)+_0x5b4dfa(0x5c8)+_0x5b4dfa(0x266)+_0x5b4dfa(0x23c)+'px;\x20h'+_0x5b4dfa(0x332)+_0x5b4dfa(0x545)+';\x20bor'+_0x5b4dfa(0x38e)+_0x5b4dfa(0x1f4)+':\x2050%'+_0x5b4dfa(0x36a)+_0x5b4dfa(0x5b9)+_0x5b4dfa(0x38a)+_0x5b4dfa(0x1d1)+'55,25'+'5,255'+_0x5b4dfa(0x4a2)+_0x5b4dfa(0x642)+'nsiti'+'on:\x20l'+_0x5b4dfa(0x4a8)+'2s,\x20b'+_0x5b4dfa(0x174)+'ound\x20'+'.2s;\x20'+_0x5b4dfa(0x52d)+'\x20.sk-'+_0x5b4dfa(0x57a)+_0x5b4dfa(0x33c)+'a-che'+_0x5b4dfa(0x595)+_0x5b4dfa(0x1b7)+_0x5b4dfa(0x416)+_0x5b4dfa(0x21a)+_0x5b4dfa(0x587)+_0x5b4dfa(0x208))+(_0x5b4dfa(0x38b)+_0x5b4dfa(0x16a)+_0x5b4dfa(0x624)+_0x5b4dfa(0x351)+'}\x0a\x20\x20\x20'+_0x5b4dfa(0x31e)+'switc'+_0x5b4dfa(0x33c)+'a-che'+_0x5b4dfa(0x595)+_0x5b4dfa(0x1b7)+_0x5b4dfa(0x248)+_0x5b4dfa(0x153)+_0x5b4dfa(0x3b9)+'t:\x2015'+_0x5b4dfa(0x551)+_0x5b4dfa(0x174)+_0x5b4dfa(0x1a1)+'\x20#ff6'+_0x5b4dfa(0x226)+_0x5b4dfa(0x52d)+_0x5b4dfa(0x31e)+'field'+'\x20{\x20ba'+_0x5b4dfa(0x24c)+'und:\x20'+_0x5b4dfa(0x3bb)+_0x5b4dfa(0x1d4)+_0x5b4dfa(0x560)+_0x5b4dfa(0x406)+_0x5b4dfa(0x623)+_0x5b4dfa(0x14e)+_0x5b4dfa(0x584)+_0x5b4dfa(0x432)+_0x5b4dfa(0x2bd)+_0x5b4dfa(0x162)+_0x5b4dfa(0x68a)+_0x5b4dfa(0x654)+_0x5b4dfa(0x39e)+'eef2;'+'\x20padd'+'ing:\x20'+'6px\x209'+'px;\x20f'+'ont-s'+_0x5b4dfa(0x2f5)+'11.5p'+_0x5b4dfa(0x100)+'tline'+_0x5b4dfa(0x104)+'e;\x20bo'+_0x5b4dfa(0x471)+_0x5b4dfa(0x671)+'inset'+'\x200\x200\x20'+'0\x201px'+_0x5b4dfa(0x293)+'(255,'+_0x5b4dfa(0x1d4)+_0x5b4dfa(0x33d)+'5);\x20}'+_0x5b4dfa(0x488)+_0x5b4dfa(0x38f)+_0x5b4dfa(0x207)+_0x5b4dfa(0x63c)+'n\x20{\x20b'+_0x5b4dfa(0x174)+_0x5b4dfa(0x1a1)+_0x5b4dfa(0x109)+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x5b4dfa(0x56a)+'\x20{\x20di'+'splay'+_0x5b4dfa(0x649)+_0x5b4dfa(0x500)+_0x5b4dfa(0x575)+'tems:'+_0x5b4dfa(0x4eb)+_0x5b4dfa(0x169)+'ap:\x208'+_0x5b4dfa(0x355)+_0x5b4dfa(0x488)+_0x5b4dfa(0x514)+_0x5b4dfa(0x4aa)+_0x5b4dfa(0x465)+'ebkit'+_0x5b4dfa(0x428)+'aranc'+_0x5b4dfa(0x1c6)+_0x5b4dfa(0x1f3)+_0x5b4dfa(0x16c)+'ance:'+_0x5b4dfa(0x4dc)+_0x5b4dfa(0x266)+_0x5b4dfa(0x143)+_0x5b4dfa(0x31f)+'heigh'+'t:\x208p'+_0x5b4dfa(0x661)+_0x5b4dfa(0x24c)+'und:\x20'+_0x5b4dfa(0x644)+_0x5b4dfa(0x25e)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x5b4dfa(0x258)+'ider:'+':-web'+_0x5b4dfa(0x4b0)+_0x5b4dfa(0x4aa)+_0x5b4dfa(0x177)+_0x5b4dfa(0x232)+_0x5b4dfa(0x23e)+'\x20{\x20he'+_0x5b4dfa(0x4b2)+_0x5b4dfa(0x610)+'\x20bord'+_0x5b4dfa(0x5b4)+'dius:'+'\x202px;'+'\x20back'+_0x5b4dfa(0x247)+_0x5b4dfa(0x458)+'near-'+_0x5b4dfa(0x2e5)+_0x5b4dfa(0x3e1)+_0x5b4dfa(0x492)+_0x5b4dfa(0x59a)+_0x5b4dfa(0x5f7)+_0x5b4dfa(0x3b4)+_0x5b4dfa(0x2cc)+_0x5b4dfa(0x51a)+_0x5b4dfa(0x565)+_0x5b4dfa(0x516)+_0x5b4dfa(0x19d)+_0x5b4dfa(0x539)+'t,\x20rg'+_0x5b4dfa(0x1bd)+_0x5b4dfa(0x345)+_0x5b4dfa(0x3d1)+'.08);'+'\x20}\x0a\x20\x20'+_0x5b4dfa(0x3e2)+'-slid'+_0x5b4dfa(0x319)+_0x5b4dfa(0x5f8)+_0x5b4dfa(0x567)+_0x5b4dfa(0x643)+'humb\x20'+_0x5b4dfa(0x3be)+_0x5b4dfa(0x1c4)+'appea'+'rance'+_0x5b4dfa(0x104)+_0x5b4dfa(0x453)+_0x5b4dfa(0x2be)+'6px;\x20'+'heigh'+'t:\x206p'+_0x5b4dfa(0x4bf)+_0x5b4dfa(0x2d9)+_0x5b4dfa(0x5aa)+_0x5b4dfa(0x350)+_0x5b4dfa(0x5d8)+_0x5b4dfa(0x5b4)+_0x5b4dfa(0x449)+'\x2050%;'+'\x20back'+_0x5b4dfa(0x247)+'d:\x20#f'+_0x5b4dfa(0x5f7)+_0x5b4dfa(0x315)+'\x20\x20\x20.s'+'k-val'+_0x5b4dfa(0x4c3)+_0x5b4dfa(0x426)+_0x5b4dfa(0x509)+_0x5b4dfa(0x138)+'font-'+'weigh'+'t:\x2060'+_0x5b4dfa(0x4ae)+_0x5b4dfa(0x4fb)+_0x5b4dfa(0x4e1)+_0x5b4dfa(0x583)+_0x5b4dfa(0x5f6)+'align'+_0x5b4dfa(0x5d1)+_0x5b4dfa(0x2ea)+'olor:'+'\x20rgba'+_0x5b4dfa(0x3c5)+_0x5b4dfa(0x423)+_0x5b4dfa(0x363)+_0x5b4dfa(0x3fa)+'\x20\x20\x20\x20.'+_0x5b4dfa(0x2a5)+'lor\x20{')+('\x20widt'+'h:\x2034'+_0x5b4dfa(0x1e5)+_0x5b4dfa(0x332)+':\x2022p'+'x;\x20bo'+_0x5b4dfa(0x594)+_0x5b4dfa(0x298)+_0x5b4dfa(0x14e)+'-radi'+'us:\x206'+_0x5b4dfa(0x551)+_0x5b4dfa(0x174)+'ound:'+'\x20none'+_0x5b4dfa(0x2d7)+_0x5b4dfa(0x269)+_0x5b4dfa(0x18d)+'ursor'+':\x20poi'+_0x5b4dfa(0x23f)+_0x5b4dfa(0x5bc)+'\x20\x20.sk'+_0x5b4dfa(0x679)+_0x5b4dfa(0x4c3)+_0x5b4dfa(0x426)+'ze:\x201'+'1px;\x20'+'color'+':\x20rgb'+_0x5b4dfa(0x688)+_0x5b4dfa(0x3af)+_0x5b4dfa(0x19a)+_0x5b4dfa(0x1b5)+'addin'+_0x5b4dfa(0x17d)+_0x5b4dfa(0x67d)+_0x5b4dfa(0x52d)+'\x20.sk-'+_0x5b4dfa(0x430)+_0x5b4dfa(0x5cd)+_0x5b4dfa(0x121)+'r:\x20#f'+'f7a93'+_0x5b4dfa(0x315)+_0x5b4dfa(0x52f)+_0x5b4dfa(0x4f8)+_0x5b4dfa(0x2ad)+'ign-s'+_0x5b4dfa(0x11c)+'flex-'+'start'+';\x20bor'+'der:\x20'+'0;\x20bo'+'rder-'+'radiu'+_0x5b4dfa(0x43b)+'x;\x20pa'+'dding'+_0x5b4dfa(0x545)+'\x2016px'+_0x5b4dfa(0x36a)+_0x5b4dfa(0x5b9)+'nd:\x20#'+_0x5b4dfa(0x492)+_0x5b4dfa(0x2b9)+_0x5b4dfa(0x1b9)+_0x5b4dfa(0x1f6)+'\x20font'+'-size'+_0x5b4dfa(0x34c)+'5px;\x20'+'font-'+_0x5b4dfa(0x10a)+_0x5b4dfa(0xfe)+'0;\x20cu'+'rsor:'+'\x20poin'+'ter;\x20'+'}\x0a\x20\x20\x20'+_0x5b4dfa(0x31e)+'btn:h'+_0x5b4dfa(0x425)+'{\x20fil'+_0x5b4dfa(0x389)+_0x5b4dfa(0x659)+'tness'+_0x5b4dfa(0x391)+_0x5b4dfa(0x315)+_0x5b4dfa(0x616));window['addEv'+_0x5b4dfa(0x530)+_0x5b4dfa(0x581)+'r']('keydo'+'wn',_0x45398c=>{var _0x5341ff=_0x5b4dfa;_0x45398c[_0x5341ff(0x3fe)]===_0x4d0f9d[_0x5341ff(0x653)]&&(_0x45398c[_0x5341ff(0x124)+'ntDef'+'ault'](),_0x4d0f9d[_0x5341ff(0x611)](_0x2e18ca));},!![]);var _0x1dd6cd=document['creat'+'eElem'+_0x5b4dfa(0x1d0)](_0x4d0f9d['oTFwa']);_0x1dd6cd['style']['cssTe'+'xt']='posit'+_0x5b4dfa(0x5e7)+'ixed;'+_0x5b4dfa(0x62d)+'2px;r'+'ight:'+_0x5b4dfa(0x246)+'z-ind'+_0x5b4dfa(0x26c)+'47483'+_0x5b4dfa(0x608)+'ursor'+_0x5b4dfa(0x214)+_0x5b4dfa(0x3f9)+_0x5b4dfa(0x504)+_0x5b4dfa(0x508)+'heigh'+_0x5b4dfa(0x180)+'x;opa'+_0x5b4dfa(0x18f)+'0.5;t'+_0x5b4dfa(0x5c7)+_0x5b4dfa(0x1a8)+_0x5b4dfa(0x243)+_0x5b4dfa(0x2ec)+'2s;po'+_0x5b4dfa(0x540)+'-even'+'ts:au'+'to;fi'+_0x5b4dfa(0x2bc)+'drop-'+_0x5b4dfa(0x12d)+'w(0\x200'+'\x204px\x20'+_0x5b4dfa(0x3bb)+_0x5b4dfa(0x148)+'07,15'+'7,0.7'+'))',_0x1dd6cd['inner'+_0x5b4dfa(0x613)]=_0x4d0f9d[_0x5b4dfa(0x181)],_0x1dd6cd[_0x5b4dfa(0x21d)]=_0x4d0f9d['ipxyf'],_0x1dd6cd['onmou'+'seent'+'er']=()=>_0x1dd6cd[_0x5b4dfa(0x306)]['opaci'+'ty']='1',_0x1dd6cd['onmou'+_0x5b4dfa(0x481)+'ve']=()=>_0x1dd6cd['style'][_0x5b4dfa(0x243)+'ty']=_0x5b4dfa(0x55b),_0x1dd6cd['oncli'+'ck']=_0x2fe269=>{var _0x4a732d=_0x5b4dfa;_0x2fe269[_0x4a732d(0x5da)+'ropag'+_0x4a732d(0x523)](),_0x39b185[_0x4a732d(0x338)](_0x2e18ca);},document[_0x5b4dfa(0x280)]['appen'+_0x5b4dfa(0x21b)+'d'](_0x1dd6cd),_0x3860fd(),requestAnimationFrame(_0x1b1a79),console[_0x5b4dfa(0x4e8)]('[saku'+_0x5b4dfa(0x512)+'ur]\x20m'+_0x5b4dfa(0x658)+_0x5b4dfa(0x3c2)+_0x5b4dfa(0x1b3)+':',_0x1e1995[_0x5b4dfa(0x3f8)]);});})()));
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
