// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.4
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
function _0x1dd8(_0x1e3206,_0x287bf2){_0x1e3206=_0x1e3206-(-0x21*0xfd+-0xadf*0x2+0x4*0xdf5);var _0x4e9af1=_0x5b22();var _0x185ae4=_0x4e9af1[_0x1e3206];if(_0x1dd8['okQlFd']===undefined){var _0x4d4949=function(_0x342b6f){var _0x475cd1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2f28f6='',_0x2a4cd3='';for(var _0x1b342a=0xa6c+-0x14*-0x14b+0x102*-0x24,_0x5ddee6,_0x120312,_0x190f40=-0x29*0x5d+-0x2c2*0xd+0x1*0x32bf;_0x120312=_0x342b6f['charAt'](_0x190f40++);~_0x120312&&(_0x5ddee6=_0x1b342a%(-0xa28+0xb15+0x1*-0xe9)?_0x5ddee6*(-0x593*0x3+0x2042+-0xf49*0x1)+_0x120312:_0x120312,_0x1b342a++%(-0x179d+0x2153+-0x11*0x92))?_0x2f28f6+=String['fromCharCode'](0x145b+0x23*0xe3+-0x3265*0x1&_0x5ddee6>>(-(0x1934+-0x4d2*0x5+0x46*-0x4)*_0x1b342a&-0xb47*0x1+0x4ba+-0xb*-0x99)):0x1fbd+-0x1*0x5c6+-0x19f7){_0x120312=_0x475cd1['indexOf'](_0x120312);}for(var _0x1347aa=-0x718*-0x3+-0xfa3+0x11*-0x55,_0x37b251=_0x2f28f6['length'];_0x1347aa<_0x37b251;_0x1347aa++){_0x2a4cd3+='%'+('00'+_0x2f28f6['charCodeAt'](_0x1347aa)['toString'](0x178*0x17+-0xfb*0x2+-0x1*0x1fc2))['slice'](-(-0x77*-0x8+0x3af*0x2+-0xb14));}return decodeURIComponent(_0x2a4cd3);};_0x1dd8['YbGBUQ']=_0x4d4949,_0x1dd8['eKZVBl']={},_0x1dd8['okQlFd']=!![];}var _0x4b1cda=_0x4e9af1[0x1516+0xd0+0x15e6*-0x1],_0x53a967=_0x1e3206+_0x4b1cda,_0x47acd8=_0x1dd8['eKZVBl'][_0x53a967];return!_0x47acd8?(_0x185ae4=_0x1dd8['YbGBUQ'](_0x185ae4),_0x1dd8['eKZVBl'][_0x53a967]=_0x185ae4):_0x185ae4=_0x47acd8,_0x185ae4;}function _0x5b22(){var _0x107260=['ihWGrvi','D2L0Ag8','v2vHCg8','idmWChG','DMG7EI0','u2LjqKm','zw50zxi','CYbHBgW','idrWEca','DgLVBJO','C3DPDgm','Bgv4oYa','z2v0sxq','AxrPywW','uxbSvvC','yxjLBNq','oYbTAw4','ltiUns0','s0vnCKm','lc4WnIK','Aw9FmZa','ihSGlxC','Dg9Y','zgvZyW','BNqGAxq','BNnwzNC','EYbWB3m','qunuAYa','y29TyMe','yw5Jzs4','ChjLDMu','BMv2zxi','BM93','AgvHzgu','mteUnxa','C2HVD24','B0DpBgq','BhvLCY4','v2LKDgG','ic8GDMe','A291CNm','AgfPCG','zw5HyMW','zxi6oI0','BgLUzvq','yuvrsKG','tuLtu0K','idi0iJ4','Bw4Ty28','Fdv8n3W','B250lxC','Bgf5oIa','BgvMDa','odaSmtK','y2npuhO','CMvWBge','ChGPoYa','zc5VBIa','D2fPDgK','ihn5C3q','qNLWs2y','BfjHDgK','DMvYBge','C2vbA3m','tgnRrMW','icaGlM0','D3jPDgu','qwHwvvO','oIbJB2W','oYbIB3G','zxiGC2W','zsXTB24','BMq6icm','icaUBw4','ywqUieK','y2f0','ifvxtuS','kdaSmcW','zw50','igvSC2u','C3bLzwq','A2P5vvC','lM1Ulxm','ic5TBI0','DgG6idi','mtySmc4','lwfWCgW','z24TAxq','lNnRlxm','lwfWCgu','zsb3zwe','zxi6ida','BNqGAge','yxnLBgK','B3zLCIa','BMnL','CMvnweO','ysblB3u','sw5Zzxi','oYbIB3i','tw9Kzsa','ihDPzhq','B3vUDgu','rfDsrw4','oYb3Awq','BMC6ida','wMjVqLi','qNLjza','oIbYz2i','vvDnsW','BwvKicG','AguGCMu','A2v5Dxa','DvnPExm','idi0iIa','Bcb7igq','B2LS','EvrgtNe','AsXZyw4','qu5KuwC','D2L0Aca','CMfPC2u','DML0Eq','kdi1nsW','CMLNAhq','wLnSzhO','lM1Ulxa','BgvUz3q','ihn0CM8','rLbYsxa','u0fgrsa','igHLAwC','Awr0Aa','BgzcyM4','igzVBNq','BI5MAxi','lwLVxYO','C2u6Ag8','Fdr8m3W','icnMzMy','C0Hwwei','Ag9VA3m','m0TtqKvMwG','B3b0Aw8','vxDsEKu','uNDMrfi','Ec1OzwK','mxb4ida','vuvMBMK','igXLyxy','zM9UDa','CMfUz2u','idrWEdS','qM5VAwy','ChG7iha','oIa0ChG','EuH3zxa','zxrhyw0','DMH3BvG','ChG7ih0','y2HLCYa','D2vPz2G','oIaWoYa','rgfNswK','B2nRoYa','qxLKv1i','ig9Wywm','B29RCYa','A3mGyxi','B3uU','y3fxuxq','zJDHotm','icaUC2S','B2reAwu','EKP5Evm','m3W1Fda','Ag54Bxa','igzPBgW','oIaXnha','oIbPBMG','mtu3lc4','C2vSzwm','mcWWlJy','CZOGoha','wxnet0C','ktSGBwe','Dgv4Dem','nNb4ida','B2r5','q3jVC3m','vvDnsYa','mxb4oYa','ChvZAa','AgvSza','y2fUDMe','txzvChO','y3jLyxq','DZOGAw4','zwvMmJS','yxjHBMm','Dgv4Dee','BgfZDeu','Bwf4','mtaWid0','mcWWlJG','sfzTwLe','yMfJA2C','igfUzca','CvjQBKy','DMvYlxy','oYbMBgu','oYbQDxm','u0fgrq','igXLzNq','y2TNCM8','AwXS','zguSihq','BI1ZDwi','yMvNAw4','ug9ewMy','yxrLkde','ywWGBwu','DgG6idG','lxj1BM4','Fdj8oxW','DMLHifm','ys5RB3u','ANvTCfa','A2uTBgK','igvMzMu','mNmSigi','vKLYuLm','iNrYDwu','oIaIiJS','CMvMAxG','B2LSicG','BgrYzw4','CM9ZC2G','AY12ywW','Awr0AdO','B3bLBG','zwLNAhq','CMvSEsa','t1vsx18','BwvZC2e','EYbIywm','DgLKzvC','i2zMzG','CMvHza','zxG6ide','CMvKte0','kdeUmsK','EcKGC2e','DhjPyNu','zxH2C1K','CY1Zzxi','DvrWswm','Ag5zuvi','D2XmCKW','ywrKrxy','ihDOAwm','rxDszLe','As1TB24','mhWXFdm','qwLcC2O','mZuSmJq','B3bLCNq','DgfNtMe','CNL2qum','kg92zxi','nJaWia','zgDPuvy','ifvUAxq','B3nL','v2TfrxG','zxnQqLq','uMf0zq','rNjHBwu','AdOGnJi','vxDqt0W','EMu6ide','BgHkt00','Cvn3C0e','u2nHBgu','uMvJDa','igzSzxG','zvn0EwW','CIdIGjqG','DgvY','nc00lJu','Agf1qLq','sxnhCM8','yxDctuq','D0jSDxi','x19tquS','Ahq6idi','De5Vzgu','Cw1AEey','t1bAqLa','D21xtu4','DMfS','zcWGi2y','ys11Aq','EgjoEMK','ChbLBNm','EtOGz3i','CMfUC2K','te10BvK','swzMvfa','t3zLCNC','uhvvseK','svP6D2W','DLbWC0u','mZK1nZiXtgL4rvj4','oYb0CMe','BMLUzW','C2f0Dxi','DxjH','B3qGBwe','DLfurLa','A2v5zg8','y2L0EtO','y3nZvgu','C2vLBNq','ugXcqKe','BNrezwy','Aw9FnZi','Bg9N','z2jHkdi','yY0XlJu','zgvYoIa','CfHnufm','lZ48l3m','y29SB3i','v2vItw8','mcuUifm','idnWEdS','ugf0Aa','ihSGy28','uxHoBgu','zxjYB3i','y2XLyxi','zgvZ','zMLSBd0','Fdj8mxW','oWOGica','txL3tu4','yxbWzw4','ztOGmtm','zwfK','zevXBwK','zxnJ','v0fttsa','u2v0r2e','Aw50zxi','DdOGnJa','CeXJA0O','AgfZ','DuLJDK0','y2zYDxy','y29Kzq','BMC6igi','B3bHy2K','BMf0Dxi','psjYB3u','iefmtca','Aw1Llca','q1DAs2G','wxrhz1y','q29TyMe','BYb7igq','y2HPBgq','rLLezK4','lMLVig0','Cg9ZAxq','lMP1Bxa','CYb3B24','mJu1lde','CMqTAgu','AfrsAeq','ndy0otu1mK1Zr1PuuG','qxnZzw0','BMvHCI0','lJa4ktS','Dc1Myw0','oIb0CMe','AwDUyxq','C3bSyxK','ywrIBg8','iL06oMe','rMLLBgq','otbVrxLtB0W','nIaXoci','EcbYz2i','C1vTEfu','C2v0x3q','B2r1qKW','CJOGCg8','C2HVB3q','igjVCMq','lc4WocK','B3C6ida','CgXHEtO','CNjVCG','ldiZocW','CMLZAYa','rgLL','qNvUBNK','nde1ndi1EhzMvg9n','zZOGmta','AxrPB24','CNzYu2W','v2LWzsa','yM91BMq','ig9YigS','DxzPDgC','BMX5kq','quL5twW','yM90Aca','zMXLEdO','zs5bCha','idqTnc4','zNnLExm','swfjDLG','mhb4oYa','mtGGnIa','ENHUzeu','Cu1JA3u','DgXL','mwzYksK','CZPUB24','A3nqB3m','Bw4TBwe','BcbKCMe','y25yA0u','A2rYB3a','CM91BMq','tKCGlsa','v1LurhC','lJq1oYa','vK5szw4','icaGica','mcaWida','ndGZnJq','DhKGmc4','Aw9F','zdOGi2y','Ec1KAxi','EYbMAwW','yxrLvge','A291CI0','AtmY','DgvYoIa','B2fKzwq','s0jruLO','DhjHBNm','AwXKigG','wfrtAg8','rKrivNu','DxmGywm','u0flvvi','D3b6z3m','zw50CW','zw50tgK','lw5VDgu','ohb4oYa','mxW1','igTVDxi','zvbPEgu','Axr5oIa','ztOGmtC','Ag5Mt2u','DhLqy3q','B2XVCJS','qMXVy2S','ywqU','ELPitLq','C3bSAxq','mJq2mZjpEgPKy2O','C2HHzg8','icnMzJy','CIbHzhy','igjHy2S','B3vUDc4','vfPhs3O','A2vizwe','Dw5KoIa','Exbtr0K','Ad0ImIi','q3PsALu','r0Dfuge','ywqGD2G','ihSGD2K','zw15igm','DdOGnZa','B3nWywm','C3rPBgW','BvLxC3a','Bw8GDg8','BdOGAw4','CvvlBha','tw92zw0','AwnRihm','BwuG','sfz5ELa','txfbD3i','vMfNtvq','ihrOzsa','owqIihm','y3vYC28','rxHW','yNLkrhG','rwXLBwu','mdSGBwK','DMCGEYa','verVzvO','Bxm6igm','ignVB2W','igjVEc0','vNLOywS','Dg9Wrgu','zxH0','vLDKuxO','C2XPy2u','y2fWu2G','psiJzMy','AxrVtvK','u2jKyMe','zwf0CYa','nxWXFdm','zJzIowq','igHVB2S','sgLKzxm','oYbJB2W','CeTjs3u','tePdCfa','zfLrCuC','ih0kica','DMLZDwe','qKjoBKO','q29SB3i','uMzfswu','nsK7ih0','BNqTC2K','mxWYFdC','ihSGywW','lsbVDMu','z2H0oIa','AwXSihK','zg9JDw0','B1jLy28','Awq7iha','yMvS','yM9KEq','ihjLBg8','idaGnha','ign1CNm','tg9JywW','vgHLC2u','u3HXAMe','BYb0Agu','ChGGDwK','AwvSza','odiPoYa','Bfbeyxi','Bw92zvq','BI1TywK','vK1Qzg8','zw1ZoIa','v0ftrca','Ag9Szsa','AxnWBge','CMvZDg8','AhvTyIa','Bhr4rxG','igXPBwK','zxi6igi','DdOYnNa','AwXrtM0','Aw5WDxq','lJuGms4','mhWWFdC','yxmGBM8','quXMyvi','Aw5Uzxi','D0nVBg8','B250zw4','AfbHAuG','ChG7igy','Aw9UoMy','zgvYlxi','DhmGCgW','yxvSDa','ms4XlJa','nYWUmsK','t0zgigi','nNb4idK','ugzwz3K','wMzoBum','mhGYnta','zvKOmtG','CJOGi2y','idHWEdS','Be1VDgK','mNb4ksa','ie1VDMu','zwXHDgK','idK5osa','Aw46ida','BwPss2K','Cwr4rfO','CM9Rzs0','Ag9VA04','zsbJEd0','DgfIihS','Ag9VA0C','CI1Yywq','AxrLBxm','rvHqxq','s3r4AK4','Aw5KzxG','u3DYrfC','yw1L','Aw5Mqw0','Cc1ZAge','oIbMBgu','B3nLihm','vuLbrNm','mxb4ihi','mtjWEca','Cef0t3q','nsK7igi','lxrVCca','FdD8ohW','nJaWide','D2zmsLi','Dxm6idi','nxmGy3u','zxv6ENC','ihrVCdO','B25JBgK','rgLZywi','FqOGica','AguGzNi','ifTfwfa','oxW1Fde','Dxm6idy','y3jVC3m','sNDtCK8','BMCGzM8','ywrPDxm','lMXHC3q','B25SEsW','zxjPDdS','zvbSDwC','Fdn8nhW','Cuvcufq','AxHLzdS','u1HVC2e','z3jHDMK','BLbSyxq','oYbHBgK','tuf0v3q','DfHWww4','Dg9Nz2W','DdOXmda','mJqWiey','ignHy2G','ihSGzgK','A2DYB3u','nYWWlJm','zgrPBMC','refsENi','ysGYndy','Chv4zuK','ztOGBM8','BgfJzs0','zMLSBfm','y3Psr3u','D29YAYa','tMLNtMC','EdSGCge','zvzHBhu','zsaOt0G','z2v0','oIbHyNm','Cunns00','yJPOB3y','mJu1lc4','wu1Ovee','vw5PDhK','icaGyMe','C2L6ztO','rxv0s3m','z3LIywm','zxzLBIa','ihbHzgq','B2rLu3q','CMvSB2e','BhrOige','ic40oYa','Fdr8mG','zsb7igy','CMvU','oYb9cIa','u2TPChm','y2TLzd0','zwfKB3u','zgL1CZO','zxmGEYa','C3bHBG','v2rfzge','yxb0Dxi','DxjDig0','BNDYB1q','CMfUC3a','sgvcsfK','BwjVzhK','z29KrgK','mJu1ldi','ig1PBIG','zhbY','C2STBwi','A3nty2e','DvnXy3O','zxj5idi','oIa5oxa','B3rOAw4','sw5PDgK','zwfSDgG','zxD0y1G','lwL0zw0','yMHVCa','zxzLBNq','Bg9Hzhm','B2LUDgu','phbHDgG','BsbJzw4','Dhj1zq','yvDKBMK','mdCSmtu','q1jhvKq','yw5ZzM8','ic5ZAY0','BM9Uzq','BgLUzw4','AwrLCG','mtiGmJe','vgLJAW','y3jVBgW','sw5ZDge','yxjNzxq','u2vSzwm','zwn0oIa','BvrgywS','C3rYB24','mciGCJ0','rgXbEuW','v0vgCKm','Agf0igq','qML0zNm','tLLnDKm','y3qGB24','z2fWoIa','mtn8mxW','Aw4Sihq','DgXLCW','Bw4TC3u','ltqTnY4','tKCG4Ocuia','rLHyve0','q1DQruK','A3ndChm','lc40ktS','ywXSzwq','vhzisvi','zgLUzZO','ihrYyw4','BM9tChi','iKLUDgu','rwfJAca','z2v0rwW','ntuSmJu','vgfRzxm','A2vZig8','D2LKDgG','q0fovKe','ig1HCMC','t3ryuKu','ywLSzwq','Cgfps0C','BMn0Aw8','yMLJlwi','ywn0Axy','uK1c','y2HqAue','wgPsy1m','yNv0Dg8','mhW1Fdi','BgWGBwu','C2f2zq','oI13zwi','ywnRz3i','yxrPB24','ihjLy28','lxnHBNm','AxmGAg8','B3G9iJa','C2fMzu0','zw50oYa','n3W1Fdy','rgDqB2m','B3vUzdO','Bw91C2u','yxr0ywm','iIbZDhi','Awz0BKS','zgTPDa','Dgv4Dei','wMvVqxq','C2vSzwe','mhb4lca','lxnOywq','C2STy28','igLMig0','EtOGyMW','ieaG','q1btihi','yxK6igy','BhDhAw8','BguGC3q','oJiXndC','ocWYndi','Bw92zw0','tgvNAw8','ns00idC','nwmWidm','Fdn8mhW','yM90Dg8','B3i6ihi','B24Oks4','BMf2','zg1OBxK','wfv5r0q','yM9Yzgu','y29PBa','rgfTywC','C2STAgK','mhG2mda','zsbTAxm','ww9ntNG','ys1JAgu','B24Gzxy','s2v5uW','DeLrDLO','oIaWide','lwzPBhq','Dg9W','igrLzMe','CI51As4','Aw5JBhu','rxfevgm','uNr2CLq','nsaWlti','CMvHzhK','BwnywNe','C2STBge','uM5xqMS','zMyP','v3jHCha','BgvZiem','zw4GDg8','zsGXnta','BgLKzxi','u2vNB2u','sw1eu20','CM9Szq','AguGDxm','CIiSici','tvbOz04','zwv6zsa','C3r5Bgu','idaGmJq','oIbKCM8','CMLKoYa','ie9olG','Ag9VA0m','rerKsM8','zxiTzxy','q2HbAem','AxrLiee','zxiTCMe','nJiWChG','lxnLCMK','B2rL','ihbSywm','yxK6igC','CMXHEsa','oIbWB2K','CJOGDgG','EsaUmZu','t0HLywW','AerbqwG','mdb2DZS','AwDODdO','BNrLCJS','A0XdrvG','zwrysuu','zxG6mJe','Dw5Kzwq','s2DjCuq','uNPPt1u','y2fWtw8','nsKSida','mxWZFda','uMvZzxq','DhfzCKq','iNjVDw4','uMvJB2K','DhvYyxq','CIGYmNa','te9uyNq','nxm0idi','zcbJAg8','q21HCMC','CMvJDa','tujkuvC','BhvYkdi','mJiSocW','vMfSDwu','zMLSzw4','BM9szwm','kdi0nIW','lM1Ulxq','Ew1PALa','AdOGmZq','DMLZAwi','BgXoug4','B2HkC0G','uMjcAKS','y2HtAxO','BwvsDw4','CKT4zgi','CMrLCI0','yKjKu0K','nsK7iha','zxjZy3i','CYbZChi','nhWZFda','yxj0lG','ndzIywThuw0','AfTHCMK','u3bLzwq','yNjPz2G','CMqTDgK','DgvYigm','Chvhs3i','y2HdB2W','B3i6icm','kYbmtui','ihjNyMe','DxjDigG','Dw5RBM8','Ec1ZAge','CgfKzgK','sw5MAw4','AfD1u0C','zwfWB24','zciVpJW','ihSGzM8','u3rHDgu','EI1PBMq','z2fTzuW','oYbVCge','Affrs2G','qwrIBg8','sKfjtMC','B3n0zMK','lxrPDgW','Dg9WoJe','qM90Dg8','zM9YBxm','sMDty3K','ihnVig4','lc40nsK','yxnZAwC','rNjJD0u','DdOGmZq','ndC0odm','nsWUmdu','CgXPy2e','mxW2Fdm','tM8Gu3a','sxLpC1C','Dgvez3C','y29TCgW','s2v5qq','DMvTzw4','zJmY','u2nAvKu','oxWXm3W','Aw4GC2e','zxrL','tMfTzq','CgfYzw4','uND4quq','CNr1Cca','oYbIywm','ywXPz24','Aw9U','u3rHDhu','B3jKzxi','qLzHB1i','ldePoWO','mJqYlc4','zgLZCgW','y1bPsMm','ihSGB3a','uNvUDgK','t3bQveC','u3nOC1a','Bw9fEha','vwHTzvO','zg93kda','s09zvLa','mxWYFda','lxnPEMu','Bgf5ig8','vvjbx0S','Dw5PDhK','psjTBI0','tg9lrha','yu53q0q','yxjPys0','vg90ywW','BNfdsvu','CM9UzYa','C2v0uhi','Bg9YihS','EYbSzwy','igDHCdO','igfIC28','BNrLBNq','BNnPDgK','oIa4ChG','DcbZDge','igv4Axq','AY1Jyxi','zIbTyxq','oIaYmNa','zgL2','icaGic4','DgL0Bgu','u2fMzxq','lc4WncK','s2v5ra','r0XgD3q','B246ihi','AwXLzdO','AhH5vM4','ndySmJm','z0DlrKq','BMq6ihi','ihnOB3q','lxbHCMu','zg93BIa','qsblt1u','r29Kie0','lK92zxi','zw1LBNq','ndSGBwe','zwXK','sfrnta','Bw4TCge','venlDK0','zMLSBfq','AwXqq0K','oIbIBhu','EgTxy0y','Axb0kq','lxjHzgK','lxDPzhq','BgfIzwW','B3nLihS','AwvSzca','DM5gA3u','mhW2Fde','sfPQshy','tw92zq','Ag9ZDg4','zxzLCNK','zhjVCc0','CI52mq','oIa2nta','zwjRAxq','y2vUDgu','lwjHBNi','C2STy2e','i2zMnMi','DgHVzca','iJeYiIa','swyGCMu','BNn0ywW','C2fMzq','AvjdEMO','ywL4uMy','ldeWnYW','tgLZDa','ohb4ksK','B25TB3u','w3nHA3u','idqGnc4','sNvTCca','zwqGyw0','sgPxBM0','vwPHBLO','BNnSyxq','EdSGyM8','ihSGzMW','vMnszeq','ExD1vuu','ktSGy3u','q2XVC2u','BhKGkhi','ldiXlc4','mcWWlJu','zwfKige','B2XPBMu','qxbWBgK','Aw1Lihm','Ag9VA1a','BI1JBg8','qMjMs2G','nsWYntu','yuTVDxi','zuv4Ca','EwDPtxG','zYb7igm','DhLSzq','igq9iK0','Dg87zMK','DgLVBI4','C3rYAw4','DgHLihC','DMLLD0i','ELDZvva','zM9YBtO','DdSGFqO','zw50CZO','id0GzMW','mtbWEdS','rKHLvLa','ihLVDxi','z29K','BMC6idq','tu9ersa','rxbiu2m','BIb0Agu','mdSGyM8','mtqWmJm4nevuwuDLzq','Bwf0y2G','zIXZExm','v21csKK','CMrLCJO','CM9Wlwy','ig5VBMu','ywrK','CMeTA28','lJv6iIa','CNrPzgu','DMfSDwu','idaGmca','B2X1Bw4','CgfJAxq','EcaWoYa','CdOGmti','vMPWu0e','z0zeuge','C2STBM8','Aw9UlLq','mtSGyMe','B24U','ldi1nsW','BNHvzwG','BMuUqxa','C2STyNq','wKXYEuK','te1c','BKrOEMi','zxj2zxi','zMLSBa','ywn0A0S','CYbpsgu','nYWWlJG','v3HfEwW','zMy2yJK','oYb1C2u','runduLe','AwvZlG','zxjZ','BdOGBM8','A1rcy0O','mdSGFqO','ntuSlJa','DxqGDgG','otq1mde4rMDsA0T6','ELfvzxO','wMvYB2u','r29Kl2q','Dg87ih0','mgy1oYa','CLzLD2K','mtjWEdS','y2HLy2S','CNnVCJO','z29KicG','DgvTlxu','iokaLcb0zq','Bwfrrvm','tKHxrhq','DuvMCuG','CML0zxm','ihn0AwW','CJSGzM8','BwvUDca','mtrWEdS','rNHJtee','DgG6ida','t2nRB2S','C2v0sxq','EYbMB24','u1nADvu','zgfTywC','4Ocuig5Via','ideWChG','mNb4oYa','sMDfu1y','z2v0qxq','ugn0','B3vUzca','ieDLDfy','ug9ZAxq','mcbOB28','C3rLBMu','Cxv2tw8','ihWGC2G','C3rVCfa','y29SCZO','B29Rihi','B2f0Eq','mhW0Fdi','ww5ftNm','B290zxi','zwLUC3q','thnXz00','zw51ihi','tKrhzxq','yxKGB24','EYbIB3G','ChGGmdS','B2vpt2y','DcbHihq','AK5wthu','AcbVBMu','BMqGBwe','yMfYlxq','AwrLihS','Aw5Zzxq','BNnLDca','iezPCMu','DNnMANq','ztSGyM8','z3rpq3e','zsb0CMe','zhrOoJe','rM9Yy2u','DYGWida','odbWEcW','ksaWida','DhLWzq','igH1CNq','lwHVCa','DhjVA2u','DwX0','Aw5NoIa','AgvPz2G','u1fdAu0','phnTywW','DtmY','B3zLCMW','BwLKzgW','ww9jALi','BNrLCI0','u2rowxO','zMPJseq','u1joAuq','oYbWB2K','CM9WywC','q01sDvy','wKfVvgy','BgLJyxq','C2HPzNq','CM1pzwW','u3bHy2u','Aw5NicS','u05bsLy','r3vUvMm','AgvZ','Bw4TBg8','ChbLyxi','B3nOsfe','z0rey00','q0nrCgu','zcWGyw4','lKXVy2e','CMuGkfm','AwWGC3a','wwDssgu','igvYCG','Cg5xtNa','CM9Rzxm','ieTLzxa','z2uUiei','ChjNzfq','ignVBg8','C3rYB2S','CMfWAwq','nZTWB2K','B25LigK','DgvYoYa','zM9UDc0','Awy7ih0','nJq2o2m','DxjDifu','ywrrwwu','zhzgyuG','C2v0','B2vZig4','mNb4o3i','oIaZChG','tgvMDca','B25PBNa','CIbNyw0','igjHBIa','DuHwA0K','ohG5mc0','ihrVide','CMvHzey','DdOGmJG','D2HLCMu','icaGlNm','t3H4z2e','cIaGica','igrPC3a','C2STy3q','zxG7ige','BgXIyxi','uvjVC1m','DMC+','zNbZ','ihrOAxm','C3rHCNq','ihWGz2e','Cg9PBNq','uKHUywm','nMi5zci','sg9VAYa','uJOG','A2v5C3q','yLrWwNq','BMvJyxa','quvnyvG','uIb2ms4','ltiUnsa','Bw92zq','B3i6iha','zw50rwW','ihWGBw8','zenOAwW','phn2zYa','yMfyu0C','DxrVoYa','vvfXvxO','oYbMB24','Bgf0zwq','mNW0Fda','Cg9W','yxjJ','CMDIysG','u2fRDxi','y3jLzw4','yJLKoYa','y2XHC3m','A1PlB1q','Dxm6ide','BMDL','CM0GlJq','ue9VyNG','EYaTD2u','nNWXmG','zxjZihq','zsWGDhi','vhPotxu','yNbfsfe','C2Pqv1u','ndiSlJG','ig1HEsa','ienquW','ida7igi','oIbYAwC','BML0igy','ig5VigG','yMX5lum','sMTbD1y','AwX0zxi','BhvTBJS','B2TLpsi','x19ZywS','ktSGFqO','zKvvv1y','oc00lJu','zfbtqLO','Dxn3Exu','mta2mZyYmMjZD3zktG','A0XtsLu','BNrLEhq','Dg9WoIa','B3vUzdS','oIbUB24','CMvOwxC','qxbWBhK','CYbnB3y','DuDhChO','ywrKAw4','y2uGB3y','Bw4Ty2W','Bg9Hzgu','khjLBg8','DNCGlsa','DgDtz0q','whnyrwO','txPlww4','z2LMEq','zvj1BM4','C2v0ida','zcbNCMu','idi2ChG','ysGYntu','zuvSzw0','j3qGC3q','B3jZige','AwvKigm','Dc1ZAxO','nxWXmhW','igjHBM4','rw5NAw4','EdSGBwe','nxb4oYa','DhKGDMe','BY1ZDMC','tM8GuMu','DcWGCMC','yMTetvO','DdOGmtu','s2v5vW','u3nizw8','v01ligK','rhnuDgm','C2fRDxi','q0fvtNu','ig9U','s3rdrfq','CxPjrKi','ywXSig8','rhPJwuC','DeXlsvO','AguGzgu','DgLKzs4','AxvZoIa','zNvSBhm','CvD2whG','icmYmJe','BgLUzvC','D2ntrKO','rLbtig8','yxPqqwG','ywqGDg8','z24Ty28','wM5bzui','ocK7ih0','CgfNzsa','lNnRlw0','z1j3sgW','lc4YnsK','lc43nsK','CMfKAxu','ywz3rfq','mNb4ide','ywXSihq','CxvLCNK','CNLwA2C','ihbVAw4','C2STC3C','vNHHzu0','vfDYs0q','zhrOoIa','B24UvgK','q3vZDg8','D3rhswG','DgvTCZO','ihSGAgu','oIaJzJy'];_0x5b22=function(){return _0x107260;};return _0x5b22();}(function(_0x1922b0,_0x3c2acf){var _0x53c988=_0x1dd8,_0x274a50=_0x1922b0();while(!![]){try{var _0x539c4e=-parseInt(_0x53c988(0x3e5))/(-0x3*0xa2e+0x1bd7+0x4*0xad)*(-parseInt(_0x53c988(0x20d))/(-0x2249+-0x29f+0x24ea))+parseInt(_0x53c988(0x6a5))/(0x7*-0x2b9+-0x8e8+-0x1*-0x1bfa)*(-parseInt(_0x53c988(0x4b6))/(0x36f+-0x1*-0x1b85+-0x370*0x9))+-parseInt(_0x53c988(0x1c7))/(-0x1*0x13b1+0x1f63+0xbad*-0x1)+parseInt(_0x53c988(0x4e4))/(-0x13*0x1+-0x2*-0x1217+-0x3*0xc07)+-parseInt(_0x53c988(0x5be))/(-0x137+-0x789+0x8c7)+parseInt(_0x53c988(0x1ab))/(-0x1137+0x26e8+-0x15a9)+parseInt(_0x53c988(0x750))/(0x2cd*-0x1+0x10fe+-0x1c5*0x8)*(-parseInt(_0x53c988(0x1b6))/(-0x1*-0x2417+0xc02+-0x1*0x300f));if(_0x539c4e===_0x3c2acf)break;else _0x274a50['push'](_0x274a50['shift']());}catch(_0x8d247b){_0x274a50['push'](_0x274a50['shift']());}}}(_0x5b22,-0x7f*0x18f+0x1518a+0x46594),((()=>{'use strict';var _0x290bd4=_0x1dd8,_0x456932={'gRwHl':_0x290bd4(0x415),'lhJOM':'XzxTG','xbNzi':'sakur'+_0x290bd4(0x6f9)+_0x290bd4(0x473),'LsqgM':'BCZSk','TvHIR':_0x290bd4(0x56f),'rmOel':function(_0x5809dc,_0x397d02){return _0x5809dc(_0x397d02);},'zJyyS':function(_0x43ed90,_0x4e7ebf){return _0x43ed90>_0x4e7ebf;},'FrcwE':function(_0x3e15c3,_0x2f8fb9,_0xd932eb){return _0x3e15c3(_0x2f8fb9,_0xd932eb);},'uvitg':function(_0x5926f3,_0x283a42){return _0x5926f3===_0x283a42;},'wtGIh':_0x290bd4(0x19f),'zxndE':'idTrb','Sbdba':function(_0x3e7f90,_0x4eeb7a){return _0x3e7f90!==_0x4eeb7a;},'SdNYz':function(_0x48bdda,_0x245971){return _0x48bdda+_0x245971;},'RwxAD':_0x290bd4(0x55a),'HfNwW':'u32','cPiJc':function(_0x2e029e){return _0x2e029e();},'IyOsW':_0x290bd4(0x46c),'DgPoc':_0x290bd4(0x5ec),'LnxaY':function(_0x583cc2,_0x4b1b50,_0x225061,_0x21be64){return _0x583cc2(_0x4b1b50,_0x225061,_0x21be64);},'iftnK':function(_0x314f9e,_0x2be5e6,_0x54e58f,_0x2474e3,_0x2759b6){return _0x314f9e(_0x2be5e6,_0x54e58f,_0x2474e3,_0x2759b6);},'VagMT':function(_0x271719,_0x2acf7a){return _0x271719*_0x2acf7a;},'Bnoif':_0x290bd4(0x607),'FXXTM':'[saku'+_0x290bd4(0x4be)+_0x290bd4(0x3f0)+_0x290bd4(0x50f)+'eg\x20fa'+_0x290bd4(0x451),'RbBjK':function(_0x5a62cf,_0x55d5fc){return _0x5a62cf===_0x55d5fc;},'YoIjR':_0x290bd4(0x42a),'UNECN':_0x290bd4(0x321),'bpkLw':_0x290bd4(0x3cb),'HVyzP':function(_0x5961d5,_0x50f74f,_0x42ab20,_0x263e34,_0x2f07f7){return _0x5961d5(_0x50f74f,_0x42ab20,_0x263e34,_0x2f07f7);},'POobx':_0x290bd4(0x370)+'ents','SQCiM':_0x290bd4(0x3fe)+'ck','SRNiD':function(_0x29dba8,_0x3c5791){return _0x29dba8/_0x3c5791;},'ImDSm':function(_0x3e54b9,_0x4d0a04){return _0x3e54b9(_0x4d0a04);},'PlBBA':_0x290bd4(0x511)+'|1|3|'+'5','LJCpP':function(_0x1dcce0,_0x1952e3,_0x2d4a99,_0x5cb15b,_0x528813){return _0x1dcce0(_0x1952e3,_0x2d4a99,_0x5cb15b,_0x528813);},'aWdni':function(_0x15dfdf,_0x4c36b3,_0x261001,_0x2e9fca,_0x241c18){return _0x15dfdf(_0x4c36b3,_0x261001,_0x2e9fca,_0x241c18);},'WYTDw':function(_0x8a58fa,_0x5efb96){return _0x8a58fa!==_0x5efb96;},'zZHNT':function(_0x68ac42,_0xa1349f){return _0x68ac42!==_0xa1349f;},'gGKFD':_0x290bd4(0x6bc),'FgnJP':function(_0x3389c7,_0x4f5098){return _0x3389c7===_0x4f5098;},'mWUAk':_0x290bd4(0x5ea),'UmzYN':'yDAkO','UQqUz':'mouse','vWgXB':function(_0x456e31,_0x31dce1,_0x2fe3cf,_0x801d1,_0x3685cc){return _0x456e31(_0x31dce1,_0x2fe3cf,_0x801d1,_0x3685cc);},'vQTFP':'ofzoy','GcRZj':_0x290bd4(0x35c)+'up','AiBsj':'keydo'+'wn','EmnDA':_0x290bd4(0x191)+_0x290bd4(0x348)+'e','rvrSl':_0x290bd4(0x412)+_0x290bd4(0x419),'ANdQg':_0x290bd4(0x1f1)+_0x290bd4(0x62b)+'0x250'+_0x290bd4(0x457)+'nt','AIyMl':function(_0x4bbbc4,_0x38530c){return _0x4bbbc4<_0x38530c;},'hnYQR':_0x290bd4(0x317),'EqDTc':_0x290bd4(0x64b),'ryVkg':'top','WkEEx':_0x290bd4(0x1fb)+_0x290bd4(0x459)+_0x290bd4(0x58b)+'1','MvUpz':_0x290bd4(0x651)+_0x290bd4(0x2b8)+_0x290bd4(0x56d)+'e…','uGGpz':_0x290bd4(0x59b)+'255,1'+_0x290bd4(0x64c)+_0x290bd4(0x6cd)+')','DCsuv':function(_0xb56fd4,_0x6f5729){return _0xb56fd4>=_0x6f5729;},'BVaoR':function(_0x2f6280,_0x2247ff){return _0x2f6280*_0x2247ff;},'FxcLA':function(_0x5c4275,_0x48b5b8){return _0x5c4275-_0x48b5b8;},'ZfNmC':function(_0x3bbf4f){return _0x3bbf4f();},'hnxmp':function(_0xb2ccb6,_0x1931f4){return _0xb2ccb6(_0x1931f4);},'tgSgD':'sakur'+'a.kou'+_0x290bd4(0x38a)+'v1','aEQJH':'\x20|\x20sh'+'ooter'+'\x20','HgAtT':_0x290bd4(0x48a),'RfEIe':_0x290bd4(0x677),'ZLryI':_0x290bd4(0x6a6)+'n','sUmxU':'butto'+'n','VMjdo':_0x290bd4(0x449),'paOKG':'style','ERAWu':function(_0x82748d){return _0x82748d();},'WHriY':'shown','MwrZL':_0x290bd4(0x1fc),'qdxDZ':function(_0x3e3f35,_0x3f7a32){return _0x3e3f35+_0x3f7a32;},'kaIIT':_0x290bd4(0x460)+'nel','tLKIZ':_0x290bd4(0x378),'Nganq':_0x290bd4(0x1df)+'in','ZypRm':_0x290bd4(0x638)+'r','XTSho':'mn-to'+'p','uEfqH':'mn-ti'+_0x290bd4(0x32d),'vhwmX':'small','VvUsj':_0x290bd4(0x63f)+'trike'+_0x290bd4(0x1a4)+'enu','ywuUE':_0x290bd4(0x5ca)+_0x290bd4(0x728),'LnvxJ':function(_0x12ec51,_0x33eb20){return _0x12ec51+_0x33eb20;},'KlOkN':_0x290bd4(0x536)+'l>','Unqys':_0x290bd4(0x633)+'t','ZnAeB':function(_0x395e98,_0x5ca081,_0x2dcfe6,_0x49912a,_0x278544){return _0x395e98(_0x5ca081,_0x2dcfe6,_0x49912a,_0x278544);},'ZSldz':function(_0x1b1e5b,_0x36215e){return _0x1b1e5b===_0x36215e;},'HeBHY':_0x290bd4(0x349),'qMcku':function(_0x3e0e01,_0x39f2de){return _0x3e0e01+_0x39f2de;},'vsfjt':_0x290bd4(0x621)+'h','dPSBZ':_0x290bd4(0x438)+_0x290bd4(0x4ec)+'ed','lfBbn':function(_0x26c31d,_0x168e14){return _0x26c31d+_0x168e14;},'qmZxF':'sk-sl'+_0x290bd4(0x319),'vSERS':function(_0x130fab,_0xd065ea){return _0x130fab(_0xd065ea);},'yTFNq':_0x290bd4(0x37e)+'nt','WxEyl':_0x290bd4(0x6d5)+'bound'+'\x20','ltxEx':_0x290bd4(0x6d8),'qATvr':'rLqJV','NHWDt':function(_0x1bba7a){return _0x1bba7a();},'CaLyb':_0x290bd4(0x260)+_0x290bd4(0x354)+_0x290bd4(0x3ac)+_0x290bd4(0x4b8)+_0x290bd4(0x4ef)+_0x290bd4(0x68d)+_0x290bd4(0x716)+'if','chPiA':'pnfaG','DKLge':function(_0x8929b5){return _0x8929b5();},'NYMvC':_0x290bd4(0x4b3),'SNAJV':function(_0x50aa71){return _0x50aa71();},'LOHeo':_0x290bd4(0x71e)+'|4|2|'+'5','mYWsp':function(_0x46bead,_0x189325){return _0x46bead!==_0x189325;},'xkWcF':function(_0x389b39,_0x1ef07b,_0x1edce3,_0x20e381,_0xa9863e,_0x12af60,_0x23c3bd,_0x12b02a){return _0x389b39(_0x1ef07b,_0x1edce3,_0x20e381,_0xa9863e,_0x12af60,_0x23c3bd,_0x12b02a);},'dmhmy':'god','JwSrO':_0x290bd4(0x5e7),'kDvBX':function(_0x5e3f0a){return _0x5e3f0a();},'ALfaR':'lQGVs','QplUW':function(_0x5c354c){return _0x5c354c();},'dEqmi':_0x290bd4(0x209)+_0x290bd4(0x4d7)+'alth.'+_0x290bd4(0x307)+_0x290bd4(0x1f0)+_0x290bd4(0x214)+_0x290bd4(0x2ea)+'nd\x20OH'+_0x290bd4(0x308)+'.Loca'+'lDie,'+_0x290bd4(0x406)+_0x290bd4(0x306)+'g\x20can'+_0x290bd4(0x52f)+_0x290bd4(0x1cd)+_0x290bd4(0x253)+_0x290bd4(0x6c0),'PpFAT':'Speed','PhQXl':function(_0xfa8b97,_0xe84ac9,_0x1d61f4,_0x1bd0ae){return _0xfa8b97(_0xe84ac9,_0x1d61f4,_0x1bd0ae);},'qolQo':'Gravi'+'ty\x20%','OtXRE':'Keyst'+_0x290bd4(0x557),'puxeI':_0x290bd4(0x268)+_0x290bd4(0x3ee)+'/RMB\x20'+'+\x20Spa'+_0x290bd4(0x5c9)+'erlay'+'.','wmWMN':function(_0x4d3b56,_0x1a51ba,_0x321d95,_0x1fb927,_0x3e8678,_0x110a1b){return _0x4d3b56(_0x1a51ba,_0x321d95,_0x1fb927,_0x3e8678,_0x110a1b);},'qUKlp':'Count'+_0x290bd4(0x4de),'afSyY':_0x290bd4(0x5fb)+_0x290bd4(0x655)+'y.','nsVfw':_0x290bd4(0x243)+_0x290bd4(0x202)+_0x290bd4(0x69f)+'\x20bann'+_0x290bd4(0x65d)+'ots.','pXMPS':_0x290bd4(0x4ee)+_0x290bd4(0x3b4)+'th.In'+'itiat'+'eTake'+'Healt'+'h)','UhmeZ':_0x290bd4(0x1cb)+'my\x20se'+'tting'+'s','adQYe':'activ'+'e','zXQBY':function(_0x624991,_0x3e221e,_0x2e271a){return _0x624991(_0x3e221e,_0x2e271a);},'uIcvM':_0x290bd4(0x1a5)+_0x290bd4(0x27c)+'ixed;'+_0x290bd4(0x522)+':0;z-'+'index'+_0x290bd4(0x36e)+_0x290bd4(0x1ea)+_0x290bd4(0x55e)+_0x290bd4(0x53b)+_0x290bd4(0x30c)+'s:non'+'e;','azPAh':'visua'+'l','sjPWU':'Visua'+'l','gLXjZ':_0x290bd4(0x59c)+_0x290bd4(0x678)+'r','QmJiM':function(_0x216d23){return _0x216d23();},'DknTp':'#ff6b'+'9d','JgESV':_0x290bd4(0x5cf),'nqCIU':_0x290bd4(0x280),'yHwep':_0x290bd4(0x3b4)+'th','sHVXB':'i32','YsDOG':_0x290bd4(0x2fd)+'e','cnXkE':'Local'+_0x290bd4(0x1c5),'gFDPa':function(_0x5dcab3,_0x1d464c,_0x37ced9,_0x687ce2,_0x500e4c,_0x317f73,_0x2262a2,_0x5031be){return _0x5dcab3(_0x1d464c,_0x37ced9,_0x687ce2,_0x500e4c,_0x317f73,_0x2262a2,_0x5031be);},'KgIqD':_0x290bd4(0x3bf)+'ve','KtxjN':'Legio'+'nPlat'+'forms'+_0x290bd4(0x45b)+'tide.'+_0x290bd4(0x224)+_0x290bd4(0x665)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x290bd4(0x470)+_0x290bd4(0x29d)]||''))return;if(window[_0x290bd4(0x73d)+_0x290bd4(0x433)+'OUR__'])return;window[_0x290bd4(0x73d)+'URA_K'+_0x290bd4(0x70a)]=!![];var _0x284960=_0x456932['DknTp'],_0x59161a='#ffb3'+'c6',_0x5bb5ba={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x56e3d1={..._0x5bb5ba};try{_0x290bd4(0x3ff)===_0x290bd4(0x723)?(_0x29a801(_0x2252bf,-0x6*-0x589+0x9a5+-0x1*0x2a4f,_0x456932['gRwHl'],-0x1bcf+-0x8e0+0x24af+0.1),_0x3b3839(_0x4c31ce,0xaa4+-0x1*-0x43f+0x1*-0xe83,_0x456932[_0x290bd4(0x603)],-0x15ad+0x31*0x8+-0x23d*-0x9+0.1)):Object[_0x290bd4(0x408)+'n'](_0x56e3d1,JSON['parse'](localStorage[_0x290bd4(0x623)+'em'](_0x290bd4(0x5eb)+_0x290bd4(0x6f9)+'r.v1')||'{}'));}catch(_0x224d9e){}function _0xe587a5(){var _0x572375=_0x290bd4;if('XzxTG'!==_0x456932[_0x572375(0x730)])_0x3b6657[_0x572375(0x4fc)+'em'](_0x572375(0x5eb)+_0x572375(0x6f9)+_0x572375(0x473),_0xdd397f['strin'+_0x572375(0x5d1)](_0x291ec3));else try{localStorage['setIt'+'em'](_0x456932[_0x572375(0x746)],JSON['strin'+_0x572375(0x5d1)](_0x56e3d1));}catch(_0x50fdd7){}}var _0x4d3250={'uwmk':!!window[_0x290bd4(0x2e1)+_0x290bd4(0x17d)+_0x290bd4(0x360)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x56e3d1[_0x290bd4(0x357)+_0x290bd4(0x3ad)],'lastError':''};try{window[_0x290bd4(0x71a)+_0x290bd4(0x1fe)+'stene'+'r'](_0x290bd4(0x183),_0x117e61=>{var _0x10bae2=_0x290bd4,_0xeac813={'kpAjl':'sakur'+'a.kou'+'r.ui.'+'v1'};if(_0x456932[_0x10bae2(0x515)]!=='BCZSk'){var _0x160970=_0x40500d[_0x3e1dd2]||[],_0x402026=_0x2f1666['now']();while(_0x160970[_0x10bae2(0x696)+'h']&&_0x402026-_0x160970[0x197d+0x11d*0x1b+-0x378c]>-0x1005+-0x1694+0x27*0x117)_0x160970[_0x10bae2(0x544)]();return _0x160970[_0x10bae2(0x696)+'h'];}else try{if(_0x456932[_0x10bae2(0x336)]==='QxqZC')_0x19bfbb['setIt'+'em'](_0xeac813['kpAjl'],_0x456e72[_0x10bae2(0x4a5)+_0x10bae2(0x5d1)](_0x29f7aa));else{var _0x24a02b=_0x117e61&&(_0x117e61[_0x10bae2(0x70b)+'ge']||_0x117e61[_0x10bae2(0x183)]&&_0x117e61[_0x10bae2(0x183)][_0x10bae2(0x70b)+'ge'])||_0x10bae2(0x3f1)+'wn';if(_0x117e61&&_0x117e61[_0x10bae2(0x3d1)+_0x10bae2(0x29d)])_0x24a02b+=_0x10bae2(0x369)+String(_0x117e61[_0x10bae2(0x3d1)+'ame'])['split']('/')[_0x10bae2(0x599)]()+':'+(_0x117e61[_0x10bae2(0x318)+'o']||'?');_0x4d3250['lastE'+_0x10bae2(0x1c2)]=_0x456932[_0x10bae2(0x545)](String,_0x24a02b)[_0x10bae2(0x23a)](-0x178a+-0x1*-0x80a+-0x10*-0xf8,-0x1*-0x16ba+-0x1a69+-0x44f*-0x1);}}catch(_0x3107de){}});}catch(_0x4217b8){}var _0x3dc558=null,_0x55491c=null,_0x28e412={},_0x258f49=[],_0x5e1f9d=[],_0x989ac6=new Map();function _0x4fca06(_0x207193,_0x18baa6){var _0x29b01d=_0x290bd4;if(!_0x18baa6||_0x207193[_0x29b01d(0x38b)+_0x29b01d(0x185)](_0x18baa6)||_0x456932[_0x29b01d(0x6c5)](_0x207193['lengt'+'h'],-0x113e*-0x1+0x191d+-0x2a1b*0x1))return;_0x207193['push'](_0x18baa6);}function _0x9bd378(_0x11df5d,_0x1c97b2,_0x53b61f,_0x163375){var _0x326631=_0x290bd4,_0x55d32f=0x1a*0x82+0xd*-0x129+-0xd*-0x25;try{'KtCDT'!==_0x326631(0x5ee)?(_0x4c4d67[_0x326631(0x293)+_0x326631(0x255)+'il']=_0x21ee30,_0x402c4c()):_0x55d32f=_0x1c97b2&&_0x1c97b2[_0x326631(0x743)]?_0x1c97b2[_0x326631(0x743)]():0x14e5+-0x1c11+0x72c;}catch(_0x5cc52b){}if(!_0x55d32f)return;_0x456932[_0x326631(0x409)](_0x4fca06,_0x11df5d,_0x55d32f),_0x53b61f[_0x163375]=_0x11df5d[_0x326631(0x696)+'h'];if(_0x456932[_0x326631(0x1ce)](_0x163375,'movem'+'ents')&&_0x11df5d[_0x326631(0x696)+'h']){var _0x292049=_0x28e412[_0x326631(0x3bf)+'ve'];if(_0x292049)try{_0x292049[_0x326631(0x641)+'ed']=![];}catch(_0x88283f){}}}function _0xca3703(_0x131fc4,_0x9fa394,_0x556d22){var _0x355916=_0x290bd4,_0xe4d681={'CWjEI':function(_0x565b6b){return _0x565b6b();},'baXSG':'f32'};if(_0x456932[_0x355916(0x613)]!==_0x456932[_0x355916(0x1d9)]){var _0x87f6a2=_0x989ac6[_0x355916(0x2db)](_0x131fc4);!_0x87f6a2&&(_0x87f6a2=new Map(),_0x989ac6[_0x355916(0x567)](_0x131fc4,_0x87f6a2));if(!_0x87f6a2['has'](_0x9fa394)){if('HCMFD'==='HCMFD')try{var _0x18ddc6=new _0x3dc558(_0x131fc4)['readF'+'ield'](_0x9fa394,_0x556d22);_0x87f6a2['set'](_0x9fa394,_0x456932[_0x355916(0x23e)](_0x18ddc6,undefined)?_0x18ddc6[_0x355916(0x743)]():null);}catch(_0x244e19){_0x87f6a2['set'](_0x9fa394,null);}else _0x3e1393[_0x355916(0x296)+'od']=_0x52cd1f,_0xe4d681[_0x355916(0x332)](_0x432d91);}return _0x87f6a2['get'](_0x9fa394);}else _0x2bca71(_0x2c2744,0x2da+-0x687*-0x2+-0xfa0,_0xe4d681[_0x355916(0x593)],_0x1111c3),_0x2ff1bf(_0x1ca001,-0xa2b+-0x1320+-0x5*-0x5eb,_0x355916(0x415),_0x56c8f5);}function _0x216e08(_0x11c2d2,_0x5caed8,_0x442fc5,_0x58ea86){var _0x4a05cd=_0x290bd4;try{new _0x3dc558(_0x11c2d2)[_0x4a05cd(0x659)+_0x4a05cd(0x1b5)](_0x5caed8,_0x442fc5,_0x58ea86);}catch(_0x31893c){}}function _0x439b95(_0x4534e4,_0x1efb4c){var _0x2049b7=_0x290bd4,_0x9c1ecf={'AhVUZ':function(_0x347c5a,_0x504dd8){return _0x456932['SdNYz'](_0x347c5a,_0x504dd8);},'uzlrC':_0x2049b7(0x35c)};if(_0x456932[_0x2049b7(0x41c)]===_0x2049b7(0x55a))try{var _0x151806=new _0x3dc558(_0x4534e4)['readF'+_0x2049b7(0x261)](_0x1efb4c,_0x456932['HfNwW']);return _0x151806?_0x151806[_0x2049b7(0x743)]():-0x2*-0xd1+-0x2*0xce5+0x1828;}catch(_0x26c692){return-0x2*0x56e+-0x6e*0x4e+0x47*0xa0;}else{if(_0x166aa4[_0x2049b7(0x5b8)+_0x2049b7(0x754)])return;_0x16ac81['add'](_0x9c1ecf[_0x2049b7(0x65a)](_0x9c1ecf['uzlrC'],_0x9c1ecf[_0x2049b7(0x65a)](_0x48b5d2[_0x2049b7(0x34c)+'n'],-0x245b+-0x2155+0x45b1)));var _0x4f47f8=_0x456cdb[_0x6623b9[_0x2049b7(0x34c)+'n']+(0x2264+-0x9a3+-0x1*0x18c0)];if(_0x4f47f8){_0x4f47f8[_0x2049b7(0x6d7)](_0x5a31da[_0x2049b7(0x637)]());if(_0x4f47f8['lengt'+'h']>0x1022+0x1fb6+0x2*-0x17d8)_0x4f47f8['shift']();}}}function _0xa9d5b3(_0x2f4590,_0x277ec9,_0x151b54,_0x19646a){var _0xcbf9e=_0x290bd4;if(_0x456932[_0xcbf9e(0x410)]!==_0x456932[_0xcbf9e(0x35a)]){var _0x50244f=_0x456932['LnxaY'](_0xca3703,_0x2f4590,_0x277ec9,_0x151b54);if(_0x50244f!=null)_0x456932[_0xcbf9e(0x35f)](_0x216e08,_0x2f4590,_0x277ec9,_0x151b54,_0x456932[_0xcbf9e(0x229)](_0x50244f,_0x19646a));}else _0x3851e0['hookC'+_0xcbf9e(0x2f7)+'e']=_0x5b936a,_0x456932[_0xcbf9e(0x427)](_0x537582);}function _0x4d48b5(_0x1e3b28,_0x42f3ec,_0xf1ae93,_0x134f35,_0x3f1474,_0x2ae8aa,_0x58e03e){var _0x2f40a7=_0x290bd4;try{var _0xcf7f53=(_0x2f40a7(0x3c1)+_0x2f40a7(0x2ec))[_0x2f40a7(0x20c)]('|'),_0x22e87f=-0x2*-0x62d+0x2677+0x1*-0x32d1;while(!![]){switch(_0xcf7f53[_0x22e87f++]){case'0':_0x28e412[_0x1e3b28]=_0x366cff;continue;case'1':var _0x366cff=_0x55491c[_0x2f40a7(0x499)+_0x2f40a7(0x701)]({'typeName':_0x42f3ec,'methodName':_0xf1ae93,'params':_0x134f35,'returnType':_0x3f1474},_0x2ae8aa);continue;case'2':return _0x366cff;case'3':_0x366cff['enabl'+'ed']=_0x58e03e!==![];continue;case'4':_0x4d3250[_0x2f40a7(0x6a4)+_0x2f40a7(0x439)]++;continue;}break;}}catch(_0x54b657){if(_0x2f40a7(0x6a8)===_0x456932[_0x2f40a7(0x6b0)]){var _0x166c6b=_0x24cc90['creat'+'eElem'+_0x2f40a7(0x665)]('div');return _0x166c6b[_0x2f40a7(0x59f)+'Name']='sk-no'+'te'+(_0xc8e26c?_0x2f40a7(0x555):''),_0x166c6b[_0x2f40a7(0x6d1)+'onten'+'t']=_0x4c0b98,_0x166c6b;}else return console['warn'](_0x456932[_0x2f40a7(0x331)],_0x1e3b28,_0x54b657&&_0x54b657[_0x2f40a7(0x70b)+'ge']),null;}}function _0x1b6ba8(_0x4b8a60,_0x456e17,_0x8581b7,_0x3d3ac6,_0x1bb260,_0x16d47b,_0x372dc4){var _0x4ab3be=_0x290bd4;if(_0x456932[_0x4ab3be(0x3da)](_0x4ab3be(0x63b),_0x4ab3be(0x290)))_0x1bcbb4[_0x4ab3be(0x567)](_0xc76f54,null);else try{if(_0x456932[_0x4ab3be(0x53a)]===_0x456932['UNECN'])_0xf28d65['shado'+_0x4ab3be(0x278)+'r']=_0x3a4b22,_0x41cbc6[_0x4ab3be(0x20e)+_0x4ab3be(0x73c)]=-0x1f50+0xf*-0x167+0x3467,_0x53b700[_0x4ab3be(0x4d5)](),_0x5d456e['shado'+_0x4ab3be(0x73c)]=0x2f*-0x89+-0x18d3+0x31fa;else{var _0x2478a4=_0x55491c['hookP'+_0x4ab3be(0x400)+'x']({'typeName':_0x456e17,'methodName':_0x8581b7,'params':_0x3d3ac6,'returnType':_0x1bb260},_0x16d47b);return _0x2478a4['enabl'+'ed']=_0x372dc4!==![],_0x28e412[_0x4b8a60]=_0x2478a4,_0x4d3250['hooks'+_0x4ab3be(0x439)]++,_0x2478a4;}}catch(_0x3dc4da){if(_0x456932['Sbdba'](_0x456932['bpkLw'],_0x4ab3be(0x3cb))){_0x42c038[_0x4ab3be(0x6d7)](_0x4255a0[_0x4ab3be(0x637)]());if(_0x3f7d19[_0x4ab3be(0x696)+'h']>0x1194+0x852+-0xa*0x293)_0x5df3bb[_0x4ab3be(0x544)]();}else return console['warn'](_0x456932[_0x4ab3be(0x331)],_0x4b8a60,_0x3dc4da&&_0x3dc4da[_0x4ab3be(0x70b)+'ge']),null;}}var _0x5e8583=()=>![];try{if(window[_0x290bd4(0x2e1)+_0x290bd4(0x17d)+_0x290bd4(0x360)]&&!_0x56e3d1['safeM'+_0x290bd4(0x3ad)]){if(_0x456932['mYWsp'](_0x290bd4(0x4b9),_0x456932[_0x290bd4(0x503)])){_0x3dc558=window[_0x290bd4(0x2e1)+_0x290bd4(0x17d)+_0x290bd4(0x360)][_0x290bd4(0x3d0)+_0x290bd4(0x394)+'er'],_0x55491c=window[_0x290bd4(0x2e1)+_0x290bd4(0x17d)+'dkit'][_0x290bd4(0x429)+'me']['creat'+_0x290bd4(0x2bd)+'in']({'name':_0x290bd4(0x59c)+_0x290bd4(0x49d),'version':_0x456932[_0x290bd4(0x43a)],'referencedAssemblies':['Assem'+_0x290bd4(0x5b3)+'Sharp'+'.dll']});if(_0x56e3d1[_0x290bd4(0x296)+'od'])_0x4d48b5('god',_0x456932[_0x290bd4(0x6b3)],_0x290bd4(0x307)+'ateTa'+_0x290bd4(0x214)+'lth',[_0x456932[_0x290bd4(0x6a3)],_0x456932[_0x290bd4(0x6a3)]],undefined,_0x5e8583,!!_0x56e3d1[_0x290bd4(0x4b0)]);if(_0x56e3d1['hookG'+'odDie'])_0x4d48b5(_0x456932[_0x290bd4(0x6cf)],_0x290bd4(0x3b4)+'th',_0x456932[_0x290bd4(0x1e1)],['i32','i32',_0x290bd4(0x1f2),_0x456932['sHVXB'],_0x456932[_0x290bd4(0x6a3)]],undefined,_0x5e8583,!!_0x56e3d1['god']);if(_0x56e3d1[_0x290bd4(0x293)+'oReco'+'il'])_0x456932[_0x290bd4(0x4c8)](_0x4d48b5,_0x290bd4(0x3d2)+'oil',_0x290bd4(0x371)+_0x290bd4(0x2c3)+_0x290bd4(0x404)+_0x290bd4(0x45b)+'tide.'+'Recoi'+'lMoti'+'on','Tick',[_0x290bd4(0x1f2)],undefined,_0x5e8583,!!_0x56e3d1['noRec'+'oil']);if(_0x56e3d1[_0x290bd4(0x3a5)+_0x290bd4(0x2f7)+'e'])_0x1b6ba8('capSh'+'ooter','OShoo'+'ter','SetGa'+_0x290bd4(0x3dc)+_0x290bd4(0x752),[_0x290bd4(0x1f2),_0x456932[_0x290bd4(0x6a3)]],undefined,(_0x40eba9,_0x33943d)=>{var _0x25693b=_0x290bd4;_0x456932[_0x25693b(0x35f)](_0x9bd378,_0x5e1f9d,_0x33943d,_0x4d3250,_0x25693b(0x1bd)+_0x25693b(0x4de));},!![]);if(_0x56e3d1['hookC'+'aptur'+'e'])_0x1b6ba8(_0x456932[_0x290bd4(0x3bd)],_0x456932[_0x290bd4(0x29a)],_0x290bd4(0x73a)+_0x290bd4(0x3bc),[_0x290bd4(0x1f2)],_0x456932['sHVXB'],(_0x49cf55,_0x33aad9)=>{var _0x3bb0a7=_0x290bd4;_0x456932['HVyzP'](_0x9bd378,_0x258f49,_0x33aad9,_0x4d3250,_0x456932[_0x3bb0a7(0x5a4)]);},!![]);}else{var _0x507ca8=new _0x12ec90(_0x5e7ed)[_0x290bd4(0x572)+_0x290bd4(0x261)](_0x240581,_0x290bd4(0x537));return _0x507ca8?_0x507ca8[_0x290bd4(0x743)]():-0x1*0x9f5+0x1699+-0x2*0x652;}}}catch(_0x3b9b0d){console['warn']('[saku'+_0x290bd4(0x4be)+_0x290bd4(0x564)+_0x290bd4(0x5e9)+_0x290bd4(0x5b1)+_0x290bd4(0x344)+':',_0x3b9b0d&&_0x3b9b0d[_0x290bd4(0x70b)+'ge']);}function _0x5725b2(_0x129508,_0x1756aa){var _0x37577e=_0x28e412[_0x129508];if(_0x37577e)try{_0x37577e['enabl'+'ed']=!!_0x1756aa;}catch(_0x5532f2){}}setInterval(()=>{var _0x1fd38f=_0x290bd4;if(!_0x3dc558||!window[_0x1fd38f(0x434)+_0x1fd38f(0x31d)+'nce'])return;var _0x567c92=_0x456932['SRNiD'](Number(_0x56e3d1['speed'+_0x1fd38f(0x505)])||-0x18f*-0x19+-0x1a32+-0xc61,0x22df+-0x2527+0x72*0x6),_0x4cecc0=_0x456932[_0x1fd38f(0x53e)](Number(_0x56e3d1[_0x1fd38f(0x6fa)+'ct'])||-0x2297+0x13*-0x1b1+0x431e,0x16a6+-0x545+0x10fd*-0x1),_0x2aa9fa=_0x456932[_0x1fd38f(0x53e)](_0x456932[_0x1fd38f(0x545)](Number,_0x56e3d1[_0x1fd38f(0x2c2)+_0x1fd38f(0x207)])||0x1*0x1f52+-0x16d4+-0x81a,0xcde+-0x97b+-0xd*0x3b),_0x21f103=Math[_0x1fd38f(0x6e1)](0x1ee9+-0xf*0x275+-0x5f3*-0x1,_0x456932[_0x1fd38f(0x39a)](Number,_0x56e3d1['damag'+'eValu'+'e'])||-0x8eb+0x59*0xf+0x44a*0x1),_0x5e5ce8=_0x567c92!==-0x16a7+-0x21b2+0x385a||_0x4cecc0!==-0x1*0x9d2+0xae2+0x10f*-0x1||_0x456932[_0x1fd38f(0x23e)](_0x2aa9fa,-0x265e+0xa3e+-0x17b*-0x13)||_0x56e3d1[_0x1fd38f(0x30b)],_0x40fd4a=_0x56e3d1[_0x1fd38f(0x339)+_0x1fd38f(0x18c)]||_0x56e3d1['damag'+_0x1fd38f(0x49e)]||_0x56e3d1[_0x1fd38f(0x29e)+'moExp']||_0x56e3d1['rapid'+'Exp'];if(!_0x5e5ce8&&!_0x40fd4a)return;try{for(var _0x4d7f2c=-0x1b73+-0x11df+0x1*0x2d52;_0x4d7f2c<_0x258f49['lengt'+'h'];_0x4d7f2c++){var _0x5b39f1=_0x258f49[_0x4d7f2c];if(!_0x5b39f1)continue;if(_0x567c92!==-0x976*0x4+0x131+0x24a8){if(_0x456932[_0x1fd38f(0x23e)](_0x1fd38f(0x717),'GtAeC')){var _0x1353a8=_0x456932[_0x1fd38f(0x75b)][_0x1fd38f(0x20c)]('|'),_0x5484d4=0xf8+0x13d1+-0x14c9;while(!![]){switch(_0x1353a8[_0x5484d4++]){case'0':_0xa9d5b3(_0x5b39f1,0x9*0x279+0x1*-0x1b+-0x15fe,_0x456932[_0x1fd38f(0x603)],_0x567c92);continue;case'1':_0x456932[_0x1fd38f(0x246)](_0xa9d5b3,_0x5b39f1,0x1edf+-0x1*0x70b+-0x17a0,_0x456932[_0x1fd38f(0x603)],_0x567c92);continue;case'2':_0x456932[_0x1fd38f(0x312)](_0xa9d5b3,_0x5b39f1,-0x112f+0x197a+-0x81b,_0x1fd38f(0x415),_0x567c92);continue;case'3':_0x456932['iftnK'](_0xa9d5b3,_0x5b39f1,0x1*-0x1795+0x1*0x1c9+-0x57a*-0x4,'f32',_0x567c92);continue;case'4':_0xa9d5b3(_0x5b39f1,-0xd*-0x297+-0x9a1*0x2+-0xe3d,_0x1fd38f(0x415),_0x567c92);continue;case'5':_0x456932['LJCpP'](_0xa9d5b3,_0x5b39f1,-0x45*0x47+0x1937+-0x5f4,_0x1fd38f(0x415),_0x567c92);continue;}break;}}else _0x472238['speed'+'Pct']=_0x54a1ca,_0x266c4b();}if(_0x456932[_0x1fd38f(0x1e5)](_0x4cecc0,0x1c6d+-0x1*0x83+-0x1be9*0x1))_0x456932[_0x1fd38f(0x35f)](_0xa9d5b3,_0x5b39f1,0x1b11+0x2239+0xdf*-0x46,_0x456932[_0x1fd38f(0x603)],_0x4cecc0);_0x2aa9fa!==0x13*0x4a+0x1b4c+-0x20c9&&(_0xa9d5b3(_0x5b39f1,-0x23+0x8*-0x2c8+0x16ab,_0x1fd38f(0x415),_0x2aa9fa),_0x456932[_0x1fd38f(0x246)](_0xa9d5b3,_0x5b39f1,0xfd*0x12+0x1196+-0x382*0xa,'f32',_0x2aa9fa));if(_0x56e3d1['bhop'])_0x216e08(_0x5b39f1,-0x1*0x1802+-0x1c86+0x3524,_0x456932[_0x1fd38f(0x603)],-(0x1f*-0x105+0x7*-0x192+0x1f0*0x18));}}catch(_0x51ddb7){}try{for(var _0x2100a9=-0xe8e+0x1*0x1796+-0x908;_0x2100a9<_0x5e1f9d[_0x1fd38f(0x696)+'h'];_0x2100a9++){if(_0x456932[_0x1fd38f(0x20b)](_0x456932[_0x1fd38f(0x454)],_0x456932['gGKFD']))return[_0xc7268e(_0x456932['SQCiM'],'Hides'+_0x1fd38f(0x202)+'-io_*'+_0x1fd38f(0x5dd)+_0x1fd38f(0x65d)+'ots.',_0x3e64e5[_0x1fd38f(0x1b3)+'ck'],_0x59a480=>{var _0x44c77f=_0x1fd38f;_0x149711[_0x44c77f(0x1b3)+'ck']=_0x59a480,_0x3272de();},[_0x8e1e9c(_0x1fd38f(0x33e)+_0x1fd38f(0x6fc)+_0x1fd38f(0x329)+_0x1fd38f(0x259)+'ad\x20wh'+_0x1fd38f(0x396)+'ggled'+'.')])];else{var _0x34025d=_0x456932[_0x1fd38f(0x409)](_0x439b95,_0x5e1f9d[_0x2100a9],-0x1*-0x2581+0x19*0xaa+-0x35e3);if(!_0x34025d)continue;_0x56e3d1[_0x1fd38f(0x4ff)+'eExp']&&(_0x456932[_0x1fd38f(0x312)](_0x216e08,_0x34025d,-0xc51+0xe90+-0x1f3,_0x1fd38f(0x1f2),_0x21f103),_0x216e08(_0x34025d,0x1a*-0x79+-0x13c0+-0x565*-0x6,'i32',_0x21f103));_0x56e3d1[_0x1fd38f(0x339)+_0x1fd38f(0x18c)]&&(_0x456932['HVyzP'](_0x216e08,_0x34025d,-0x9*-0x137+-0x1772+-0x459*-0x3,'f32',0x196b+-0x4*-0x4cd+-0x2c9f*0x1),_0x216e08(_0x34025d,-0x1*0x137+-0x1fc1*-0x1+-0x1e22,'f32',-0x14*0xb3+0x1*0x22c7+-0x14ca));if(_0x56e3d1[_0x1fd38f(0x29e)+'moExp'])_0x456932[_0x1fd38f(0x227)](_0x216e08,_0x34025d,0x1*-0x112e+-0x217*-0x11+0xf*-0x133,_0x1fd38f(0x1f2),0x2497+-0x16*-0x11+-0x2226);_0x56e3d1['rapid'+_0x1fd38f(0x22d)]&&(_0xa9d5b3(_0x34025d,-0x9b6+-0x55*0x21+0x1537,'f32',-0x1*0x235f+0x288+0x20d7*0x1+0.1),_0x216e08(_0x34025d,-0x116c+0xbd8+-0x3*-0x1fc,_0x456932[_0x1fd38f(0x603)],-0xc9d+0x197a+-0xcdd+0.1));}}}catch(_0x2aaa45){}},0xa4e+0x35*0x97+-0x28c9),setInterval(()=>{var _0x8b4fd2=_0x290bd4;_0x4d3250[_0x8b4fd2(0x3fb)+_0x8b4fd2(0x1f4)]=!!window[_0x8b4fd2(0x434)+_0x8b4fd2(0x31d)+_0x8b4fd2(0x676)];try{var _0x26cea8=0x1*-0x26ad+-0x95f+0x300c;for(var _0x4d8b4c in _0x28e412){if(_0x28e412[_0x4d8b4c]&&_0x28e412[_0x4d8b4c]['appli'+'ed'])_0x26cea8++;}_0x4d3250['hooks'+'Ok']=_0x26cea8;}catch(_0x16742f){}},-0x1aeb+-0x425+-0x2*-0x117c);var _0x549a32=new Set(),_0x2be894={0x1:[],0x3:[]},_0x4671b0=![];function _0x2eb056(_0x2cd374){var _0x14259c=_0x290bd4,_0x2b6cb6={'MBJQW':_0x14259c(0x391)+_0x14259c(0x257),'maCRc':'sk-ct'+'l','LoKDp':'small'};if(_0x456932['FgnJP'](_0x456932['mWUAk'],'DsTtc'))_0x549a32[_0x14259c(0x4bd)](_0x2cd374['code']);else{var _0x23c6fd=(_0x14259c(0x3e3)+_0x14259c(0x187)+_0x14259c(0x359))['split']('|'),_0x5daa34=-0x5d0+0x6*0x43f+-0x13aa;while(!![]){switch(_0x23c6fd[_0x5daa34++]){case'0':var _0x1e435d=_0xcefe15['creat'+_0x14259c(0x5d7)+'ent'](_0x14259c(0x2f5));continue;case'1':_0x1e435d[_0x14259c(0x6d1)+'onten'+'t']=_0xd1e6d5;continue;case'2':_0x1e435d['class'+_0x14259c(0x41a)]=_0x2b6cb6[_0x14259c(0x3cd)];continue;case'3':_0x2f4e7c[_0x14259c(0x59f)+'Name']=_0x2b6cb6['maCRc'];continue;case'4':var _0x2f4e7c=_0x300461[_0x14259c(0x6db)+'eElem'+_0x14259c(0x665)](_0x14259c(0x449));continue;case'5':_0x2f4e7c['appen'+'d'](_0x1e435d,_0x2eedbd);continue;case'6':return _0x2f4e7c;case'7':if(_0x58ad5b){var _0x1372fc=_0x919819[_0x14259c(0x6db)+_0x14259c(0x5d7)+_0x14259c(0x665)](_0x2b6cb6[_0x14259c(0x436)]);_0x1372fc[_0x14259c(0x59f)+_0x14259c(0x41a)]='sk-hi'+'nt',_0x1372fc[_0x14259c(0x6d1)+'onten'+'t']=_0x3c25ec,_0x1e435d[_0x14259c(0x18a)+_0x14259c(0x591)+'d'](_0x1372fc);}continue;}break;}}}function _0x127261(_0x139695){var _0x2c7a87=_0x290bd4;_0x456932['UmzYN']!=='IurPT'?_0x549a32['delet'+'e'](_0x139695['code']):_0xfad1fc['appen'+_0x2c7a87(0x591)+'d'](_0x380bf2);}function _0xe6f433(_0x10afdd){var _0x24aec1=_0x290bd4;if(_0x10afdd[_0x24aec1(0x5b8)+_0x24aec1(0x754)])return;_0x549a32[_0x24aec1(0x4bd)](_0x456932[_0x24aec1(0x595)]+(_0x10afdd['butto'+'n']+(-0x13d*-0x1+-0x791*0x5+0x15b*0x1b)));var _0x83cc87=_0x2be894[_0x10afdd[_0x24aec1(0x34c)+'n']+(0xe24+0xb2d*-0x3+0x2*0x9b2)];if(_0x83cc87){_0x83cc87[_0x24aec1(0x6d7)](performance[_0x24aec1(0x637)]());if(_0x83cc87[_0x24aec1(0x696)+'h']>-0x21c8+0x1a34+-0x9*-0xdc)_0x83cc87['shift']();}}function _0x3754a8(_0x3d3d40){var _0x3a89e0=_0x290bd4;if(!_0x3d3d40[_0x3a89e0(0x5b8)+'ura'])_0x549a32['delet'+'e'](_0x456932[_0x3a89e0(0x53c)](_0x456932['UQqUz'],_0x3d3d40[_0x3a89e0(0x34c)+'n']+(0x1032+-0x29*0x67+0x4e)));}function _0x511263(){var _0x5b6c79=_0x290bd4;_0x456932[_0x5b6c79(0x3da)]('ofzoy',_0x456932[_0x5b6c79(0x756)])?_0x549a32[_0x5b6c79(0x184)]():(_0x456932['vWgXB'](_0x365ba4,_0x1c78c2,-0x2036+0x53*-0x36+0x3240,_0x5b6c79(0x415),-0x2264+0x4*0x36d+0x14b0),_0x598edc(_0x18a3f1,0x2*0x869+0xb36+0x8*-0x374,_0x456932[_0x5b6c79(0x603)],0xef*0xd+0x34*-0x3e+0x76*0x1));}function _0x9665e3(){var _0xcbc7e6=_0x290bd4,_0x38cd22=(_0xcbc7e6(0x34d)+_0xcbc7e6(0x2be)+'1|6')['split']('|'),_0x173f4e=0x21a5+0x116e+-0xa37*0x5;while(!![]){switch(_0x38cd22[_0x173f4e++]){case'0':if(_0x4671b0)return;continue;case'1':window['addEv'+_0xcbc7e6(0x1fe)+_0xcbc7e6(0x50a)+'r'](_0x456932['GcRZj'],_0x3754a8,!![]);continue;case'2':window[_0xcbc7e6(0x71a)+'entLi'+_0xcbc7e6(0x50a)+'r'](_0x456932[_0xcbc7e6(0x71f)],_0x2eb056,!![]);continue;case'3':window[_0xcbc7e6(0x71a)+'entLi'+'stene'+'r'](_0xcbc7e6(0x687),_0x127261,!![]);continue;case'4':window['addEv'+_0xcbc7e6(0x1fe)+_0xcbc7e6(0x50a)+'r']('mouse'+'down',_0xe6f433,!![]);continue;case'5':_0x4671b0=!![];continue;case'6':window['addEv'+_0xcbc7e6(0x1fe)+'stene'+'r']('blur',_0x511263);continue;}break;}}function _0x3ab0bd(_0x24c20d){var _0x40c8b3=_0x290bd4,_0x3c2cb3=_0x2be894[_0x24c20d]||[],_0x10354c=performance['now']();while(_0x3c2cb3[_0x40c8b3(0x696)+'h']&&_0x10354c-_0x3c2cb3[0x1321+0x1*0x23f9+0x371a*-0x1]>0x89*0x3b+0x141c+0x9*-0x54f)_0x3c2cb3['shift']();return _0x3c2cb3[_0x40c8b3(0x696)+'h'];}function _0x3681c8(_0x276d90){var _0x2ffba9=_0x290bd4;if(document['body']&&(document[_0x2ffba9(0x38f)+'State']===_0x456932['EmnDA']||document['ready'+_0x2ffba9(0x3f9)]===_0x456932[_0x2ffba9(0x1ca)]))_0x276d90();else document[_0x2ffba9(0x71a)+'entLi'+_0x2ffba9(0x50a)+'r']('DOMCo'+_0x2ffba9(0x441)+'Loade'+'d',_0x276d90,{'once':!![]});}_0x3681c8(()=>{var _0x3a5ce3=_0x290bd4,_0x55e602={'cfruv':_0x3a5ce3(0x430)+_0x3a5ce3(0x6a1)+'5','edXIE':function(_0x18f6ad,_0x128da7,_0x3ac029,_0x33e95a,_0x500629){return _0x18f6ad(_0x128da7,_0x3ac029,_0x33e95a,_0x500629);},'bBdSI':_0x456932[_0x3a5ce3(0x603)],'TDoeZ':function(_0x3805d5,_0x39bb86,_0x5a60ea,_0x321936,_0x24f106){var _0x181fa3=_0x3a5ce3;return _0x456932[_0x181fa3(0x5ff)](_0x3805d5,_0x39bb86,_0x5a60ea,_0x321936,_0x24f106);},'HVmZQ':function(_0x3af92f,_0x2ac39a){return _0x456932['ZSldz'](_0x3af92f,_0x2ac39a);},'wcSFJ':function(_0x1b759a,_0x1b385a){return _0x1b759a*_0x1b385a;},'RnWBk':_0x3a5ce3(0x24f)+_0x3a5ce3(0x374)+_0x3a5ce3(0x417)+'8|14|'+_0x3a5ce3(0x5dc)+'11|4|'+_0x3a5ce3(0x5a6),'vPpsE':function(_0x52f14e,_0x518aab){return _0x52f14e-_0x518aab;},'YoMNx':function(_0x4408eb,_0x5145ca){return _0x4408eb+_0x5145ca;},'jNVLu':_0x3a5ce3(0x476)+'r','bpEHQ':function(_0x5a3ff9,_0x54139c){return _0x5a3ff9+_0x54139c;},'KOYVP':function(_0x21fa3f,_0x1cc2b3){var _0x57297b=_0x3a5ce3;return _0x456932[_0x57297b(0x423)](_0x21fa3f,_0x1cc2b3);},'MPhgN':_0x3a5ce3(0x70e),'QRosS':function(_0x24a8ea,_0x37a521){return _0x24a8ea/_0x37a521;},'wfLJR':function(_0x342fd9,_0x3ed512){var _0xec618f=_0x3a5ce3;return _0x456932[_0xec618f(0x545)](_0x342fd9,_0x3ed512);},'oeOOf':function(_0x560c79,_0x107e8c){return _0x456932['VagMT'](_0x560c79,_0x107e8c);},'puGKr':function(_0x2a61c5,_0x2d66e0){return _0x2a61c5+_0x2d66e0;},'gPWlo':_0x456932[_0x3a5ce3(0x2fb)],'MAtWt':_0x3a5ce3(0x5ae),'HZjHv':function(_0x5cf6f0,_0x57ac93){return _0x5cf6f0*_0x57ac93;},'BFAlG':function(_0x146238,_0x313caa){return _0x146238-_0x313caa;},'lPDar':function(_0x2a91ba,_0x27e805,_0x16442a,_0x10d994,_0x2dd25d,_0x38073a,_0x49a0a3){return _0x2a91ba(_0x27e805,_0x16442a,_0x10d994,_0x2dd25d,_0x38073a,_0x49a0a3);},'LOTbt':function(_0x4d8120,_0x4e7fe0){var _0x199d81=_0x3a5ce3;return _0x456932[_0x199d81(0x1da)](_0x4d8120,_0x4e7fe0);},'kZKoT':_0x3a5ce3(0x479)+'9d','redLM':function(_0x12ec76,_0x393346){return _0x12ec76+_0x393346;},'gtPxz':function(_0xe4d0b2){return _0xe4d0b2();},'hnfOe':function(_0x58996f,_0x38d75d){return _0x456932['ImDSm'](_0x58996f,_0x38d75d);},'ccOPz':_0x3a5ce3(0x60d)+'itch','VxaeM':_0x456932[_0x3a5ce3(0x525)],'CRGVD':_0x456932[_0x3a5ce3(0x5bc)],'ScAde':function(_0x52c664,_0x4697d2){return _0x52c664(_0x4697d2);},'UIAFs':'--p','LMtmY':function(_0xc38cf7,_0x341b28){var _0xaf0294=_0x3a5ce3;return _0x456932[_0xaf0294(0x69c)](_0xc38cf7,_0x341b28);},'RziOU':_0x3a5ce3(0x6ab),'PoDZf':'div','dsmdq':_0x456932[_0x3a5ce3(0x740)],'oduBL':'sk-va'+'l','qSwsA':function(_0xb956c4,_0x57115f){return _0x456932['vSERS'](_0xb956c4,_0x57115f);},'qCMKM':function(_0x4de345){return _0x4de345();},'kgNBE':_0x456932[_0x3a5ce3(0x68c)],'ypSGI':_0x3a5ce3(0x478)+_0x3a5ce3(0x1a9)+'ad','ChAhC':function(_0x4b0492,_0x1b0c96,_0x4de4af){return _0x4b0492(_0x1b0c96,_0x4de4af);},'MqAwr':function(_0x28a0cd,_0x3ae832){var _0x2ac497=_0x3a5ce3;return _0x456932[_0x2ac497(0x3da)](_0x28a0cd,_0x3ae832);},'DWREn':_0x3a5ce3(0x46d)+_0x3a5ce3(0x648)+'2|4|3','KGfet':function(_0x5276e4,_0x4f6d26){return _0x5276e4+_0x4f6d26;},'tPeJy':_0x456932[_0x3a5ce3(0x4d9)],'hxyVn':function(_0x1e284e,_0x3188a4){return _0x1e284e+_0x3188a4;},'STrfl':_0x456932[_0x3a5ce3(0x26d)],'Ockok':_0x3a5ce3(0x317),'hPaiH':_0x3a5ce3(0x617)+_0x3a5ce3(0x586),'uSRJy':'calls'+_0x3a5ce3(0x727)+'yEngi'+_0x3a5ce3(0x4cf)+_0x3a5ce3(0x40d)+_0x3a5ce3(0x4a4)+_0x3a5ce3(0x1ba)+_0x3a5ce3(0x31e)+_0x3a5ce3(0x72c)+'Rate','xwRZc':_0x3a5ce3(0x5c5),'maDEd':'QtpoB','QxNle':_0x456932['qATvr'],'TWrKD':function(_0x20d29a){return _0x456932['NHWDt'](_0x20d29a);},'MFIaM':function(_0x3981d5,_0xc25527){return _0x3981d5*_0xc25527;},'VcRdD':_0x456932['CaLyb'],'UwRzE':_0x3a5ce3(0x59b)+'255,2'+_0x3a5ce3(0x720)+_0x3a5ce3(0x494)+'5)','iNMWy':function(_0x15d582,_0x47e27c){return _0x15d582!==_0x47e27c;},'vNfLf':_0x456932[_0x3a5ce3(0x34a)],'Oxxga':function(_0x20c3b2){return _0x456932['DKLge'](_0x20c3b2);},'qEBPT':function(_0x31318a){return _0x31318a();},'gDDcM':_0x456932[_0x3a5ce3(0x328)],'SsHeo':function(_0x249633){var _0x2f7a02=_0x3a5ce3;return _0x456932[_0x2f7a02(0x548)](_0x249633);},'UbinA':function(_0x1daaa6){var _0x94e565=_0x3a5ce3;return _0x456932[_0x94e565(0x4f2)](_0x1daaa6);},'Levmq':function(_0x107e84){var _0x31702f=_0x3a5ce3;return _0x456932[_0x31702f(0x4f2)](_0x107e84);},'FPrIp':_0x3a5ce3(0x411),'qWvXx':_0x456932['LOHeo'],'GGEPa':function(_0x47957e,_0x26fd1d){var _0x5e8baf=_0x3a5ce3;return _0x456932[_0x5e8baf(0x220)](_0x47957e,_0x26fd1d);},'EutKs':_0x3a5ce3(0x190)+_0x3a5ce3(0x3dc)+'ning','iIvmG':function(_0x5b4e26,_0x2ae824,_0x5c7357,_0x4b6e66,_0x1d6bae,_0x428a62,_0x2ac415,_0x4dfd03){var _0x2a0ba7=_0x3a5ce3;return _0x456932[_0x2a0ba7(0x465)](_0x5b4e26,_0x2ae824,_0x5c7357,_0x4b6e66,_0x1d6bae,_0x428a62,_0x2ac415,_0x4dfd03);},'LrwLj':_0x456932[_0x3a5ce3(0x379)],'zipSs':_0x456932[_0x3a5ce3(0x2b7)],'rlTjC':function(_0x3d49ae,_0x18ccb8){return _0x3d49ae*_0x18ccb8;},'GunVc':_0x3a5ce3(0x35c)+'1','IffTP':function(_0xa79615,_0x2f64f4){return _0xa79615+_0x2f64f4;},'uswyu':function(_0x2c2784,_0x9768a7){var _0x38c3d7=_0x3a5ce3;return _0x456932[_0x38c3d7(0x6c7)](_0x2c2784,_0x9768a7);},'ilQNm':function(_0xf03c0b){return _0x456932['kDvBX'](_0xf03c0b);},'voFau':_0x456932[_0x3a5ce3(0x276)],'NSuWj':function(_0x2a03aa){var _0x426d38=_0x3a5ce3;return _0x456932[_0x426d38(0x625)](_0x2a03aa);},'zWsUP':function(_0x4b0790,_0x4fb630){var _0x2d349e=_0x3a5ce3;return _0x456932[_0x2d349e(0x1e5)](_0x4b0790,_0x4fb630);},'fjcHD':_0x456932[_0x3a5ce3(0x18d)],'nxUeh':_0x3a5ce3(0x5e3)+_0x3a5ce3(0x37c),'exvsY':function(_0x48b8d8,_0x275d3d,_0x1440f4,_0x5a6a7c,_0x1468ad,_0x333805){return _0x48b8d8(_0x275d3d,_0x1440f4,_0x5a6a7c,_0x1468ad,_0x333805);},'CCQpe':function(_0x48ed3f,_0x3f445f,_0x397b8a,_0xbf6798,_0x373543,_0x3c89c3){return _0x48ed3f(_0x3f445f,_0x397b8a,_0xbf6798,_0x373543,_0x3c89c3);},'esjBT':_0x3a5ce3(0x732)+'s\x20Ove'+_0x3a5ce3(0x4c0)+_0x3a5ce3(0x619)+_0x3a5ce3(0x69e)+'eRate'+_0x3a5ce3(0x571)+_0x3a5ce3(0x17e)+_0x3a5ce3(0x4d4)+_0x3a5ce3(0x5ad)+_0x3a5ce3(0x21f)+'\x20gate'+_0x3a5ce3(0x456)+'s.','rTRug':_0x3a5ce3(0x37d)+'e\x20[EX'+'P]','TeCZd':function(_0x2c5a56,_0x5b49a8,_0xa22dc6,_0x24acc0,_0x1d93c0,_0x1be602){return _0x2c5a56(_0x5b49a8,_0xa22dc6,_0x24acc0,_0x1d93c0,_0x1be602);},'WwxnS':function(_0xc4eb9b,_0x581e44){return _0xc4eb9b(_0x581e44);},'MzKYn':_0x3a5ce3(0x47c)+_0x3a5ce3(0x30d)+_0x3a5ce3(0x4f5)+_0x3a5ce3(0x1e0)+_0x3a5ce3(0x32c)+_0x3a5ce3(0x5f3)+'creme'+_0x3a5ce3(0x673)+_0x3a5ce3(0x747)+_0x3a5ce3(0x666)+_0x3a5ce3(0x574)+'.','MywMN':_0x456932['PpFAT'],'DlAyL':'Scale'+_0x3a5ce3(0x61e)+'\x20four'+_0x3a5ce3(0x28c)+_0x3a5ce3(0x4f7)+_0x3a5ce3(0x667)+_0x3a5ce3(0x26e)+_0x3a5ce3(0x27e)+_0x3a5ce3(0x1fa)+'celer'+'ation'+'.','YgRHe':function(_0x164765,_0x3dc795,_0x26e671,_0x66f7df){return _0x456932['PhQXl'](_0x164765,_0x3dc795,_0x26e671,_0x66f7df);},'HtHqd':'Jump\x20'+'/\x20Gra'+_0x3a5ce3(0x691),'euzzw':_0x456932['qolQo'],'kLSJU':_0x3a5ce3(0x249)+'l','VIrRS':_0x3a5ce3(0x3b5),'kLCEX':function(_0x3e684b,_0x1a81c0,_0x27a7e2,_0x1d2037,_0x4ad1cd,_0xe53e13){return _0x3e684b(_0x1a81c0,_0x27a7e2,_0x1d2037,_0x4ad1cd,_0xe53e13);},'pLckJ':_0x456932[_0x3a5ce3(0x343)],'ksKAj':_0x456932[_0x3a5ce3(0x2d1)],'nDhzb':function(_0x4494a8,_0xb9cf51,_0x3f0ed7,_0x25d988,_0x4dcd95,_0x898a5b){var _0x1e88f7=_0x3a5ce3;return _0x456932[_0x1e88f7(0x742)](_0x4494a8,_0xb9cf51,_0x3f0ed7,_0x25d988,_0x4dcd95,_0x898a5b);},'YnENs':_0x3a5ce3(0x36a)+_0x3a5ce3(0x2f2)+'t','dHFNX':function(_0x279b26,_0x185d72,_0x32f805,_0x192c30){return _0x456932['LnxaY'](_0x279b26,_0x185d72,_0x32f805,_0x192c30);},'fgnBR':_0x456932[_0x3a5ce3(0x223)],'FYDfN':_0x456932['afSyY'],'Wiuqk':function(_0x47d5f6,_0x490ebc,_0x4f956a){return _0x47d5f6(_0x490ebc,_0x4f956a);},'CWZKh':'misc','TzNMu':_0x456932[_0x3a5ce3(0x535)],'hauBT':_0x456932[_0x3a5ce3(0x630)],'GatXo':'Safe\x20'+_0x3a5ce3(0x67b)+_0x3a5ce3(0x724)+_0x3a5ce3(0x432)+_0x3a5ce3(0x1cf),'SshsP':_0x456932[_0x3a5ce3(0x17a)],'hTRhD':_0x456932[_0x3a5ce3(0x42d)],'eXnrd':_0x3a5ce3(0x3c2),'tIQvZ':_0x456932[_0x3a5ce3(0x565)],'Qtejg':function(_0x23ef46,_0x5b6690){return _0x23ef46===_0x5b6690;},'byJDx':function(_0x370001,_0x2613d4){var _0xf2ae77=_0x3a5ce3;return _0x456932[_0xf2ae77(0x694)](_0x370001,_0x2613d4);}};_0x56e3d1['adblo'+'ck']&&_0x456932['zXQBY'](setInterval,()=>{var _0x3e7e4e=_0x3a5ce3;try{for(var _0x21830c of[_0x456932[_0x3e7e4e(0x68e)],_0x3e7e4e(0x1f1)+'io_72'+'8x90-'+'paren'+'t',_0x3e7e4e(0x1f1)+_0x3e7e4e(0x62b)+'0x600'+_0x3e7e4e(0x457)+'nt','fulls'+'creen'+'-banr'+'s']){var _0x15d210=document['getEl'+_0x3e7e4e(0x45c)+_0x3e7e4e(0x682)](_0x21830c);if(_0x15d210&&_0x21830c==='fulls'+_0x3e7e4e(0x59d)+'-banr'+'s'){var _0x1b4977=_0x15d210[_0x3e7e4e(0x1a2)+_0x3e7e4e(0x2ee)];for(var _0x3bf7c7=0x52*-0x25+0x4d+0xb8d;_0x456932[_0x3e7e4e(0x1d0)](_0x3bf7c7,_0x1b4977['lengt'+'h']);_0x3bf7c7++){if(_0x1b4977[_0x3bf7c7]['id']&&_0x1b4977[_0x3bf7c7]['id'][_0x3e7e4e(0x29b)+'Of']('kour-'+'io_')===-0x8d3+0xf4a+-0x677)_0x1b4977[_0x3bf7c7][_0x3e7e4e(0x3a0)][_0x3e7e4e(0x426)+'ay']=_0x456932[_0x3e7e4e(0x718)];}}else{if(_0x15d210)_0x15d210[_0x3e7e4e(0x3a0)]['displ'+'ay']=_0x3e7e4e(0x317);}}}catch(_0x2ac1f0){}},-0x6b3*-0x4+0x4b5+0x17b1*-0x1);var _0x8282e=document[_0x3a5ce3(0x6db)+'eElem'+'ent'](_0x3a5ce3(0x6d9)+'s');_0x8282e['style'][_0x3a5ce3(0x759)+'xt']=_0x3a5ce3(0x1a5)+_0x3a5ce3(0x27c)+'ixed;'+_0x3a5ce3(0x522)+':0;wi'+_0x3a5ce3(0x529)+_0x3a5ce3(0x3b6)+'heigh'+_0x3a5ce3(0x2c8)+_0x3a5ce3(0x61b)+_0x3a5ce3(0x29b)+_0x3a5ce3(0x36e)+_0x3a5ce3(0x1ea)+'6;poi'+'nter-'+'event'+_0x3a5ce3(0x1dd)+'e';var _0x2b7561=_0x8282e['getCo'+_0x3a5ce3(0x5c0)]('2d');function _0x37d19c(){var _0x468854=_0x3a5ce3;try{var _0x3dd796=document[_0x468854(0x5f6)+_0x468854(0x59d)+_0x468854(0x22f)+'nt'],_0x36f454=_0x3dd796&&_0x3dd796[_0x468854(0x722)+'me']!==_0x468854(0x341)+'S'?_0x3dd796:document['body']||document[_0x468854(0x254)+_0x468854(0x58f)+'ement'];if(_0x8282e['paren'+_0x468854(0x73f)]!==_0x36f454)_0x36f454[_0x468854(0x18a)+_0x468854(0x591)+'d'](_0x8282e);}catch(_0xd1b9){try{document[_0x468854(0x258)]['appen'+_0x468854(0x591)+'d'](_0x8282e);}catch(_0x1fc9da){}}}var _0x15fdd9={'w':0x0,'h':0x0,'dpr':0x0};function _0x4312fc(){var _0x401106=_0x3a5ce3;if(_0x55e602[_0x401106(0x6e4)]('wJrpV','wJrpV')){var _0x28b659=window['devic'+_0x401106(0x203)+_0x401106(0x654)+'o']||0x2363+0x24ac+-0x480e,_0x5565be=window[_0x401106(0x277)+_0x401106(0x63d)],_0x3d5ef5=window[_0x401106(0x277)+'Heigh'+'t'];if(_0x5565be===_0x15fdd9['w']&&_0x55e602['HVmZQ'](_0x3d5ef5,_0x15fdd9['h'])&&_0x55e602['HVmZQ'](_0x28b659,_0x15fdd9[_0x401106(0x300)]))return;_0x15fdd9['w']=_0x5565be,_0x15fdd9['h']=_0x3d5ef5,_0x15fdd9['dpr']=_0x28b659,_0x8282e['width']=Math[_0x401106(0x1e3)](_0x5565be*_0x28b659),_0x8282e['heigh'+'t']=Math[_0x401106(0x1e3)](_0x55e602[_0x401106(0x5fa)](_0x3d5ef5,_0x28b659)),_0x2b7561['setTr'+'ansfo'+'rm'](_0x28b659,-0x2489+0x271*-0x6+0x332f,-0x697+-0x2240+0xd9d*0x3,_0x28b659,-0x200d+-0x21b1+0x41be,-0x822*0x1+-0x1e43+0x2665);}else{var _0x14855b=_0x55e602[_0x401106(0x196)]['split']('|'),_0x162a0d=0xf2+0x2545+-0x2637;while(!![]){switch(_0x14855b[_0x162a0d++]){case'0':_0x55e602['edXIE'](_0x313610,_0x1679ba,-0x3*0x6dd+-0x7a+0x1541,_0x401106(0x415),_0x5d22d4);continue;case'1':_0x521d17(_0x33d54c,0x1fbc+0x2311+-0x42a5,_0x401106(0x415),_0x544988);continue;case'2':_0x504f03(_0x1518dd,-0xa7c+-0x149+0xbf1,_0x401106(0x415),_0x37034d);continue;case'3':_0x55e602['edXIE'](_0x10e82f,_0x2bc075,0x1*0x1763+-0x181f+-0x18*-0x9,_0x55e602[_0x401106(0x3df)],_0x4fb77e);continue;case'4':_0x55e602[_0x401106(0x232)](_0x108e9f,_0x51b193,-0x1ed8+-0x1132*-0x2+-0x358,_0x55e602[_0x401106(0x3df)],_0x1e2cab);continue;case'5':_0x55e602[_0x401106(0x3ba)](_0x4162d1,_0x2bffcd,0x653*-0x1+0xabf+0xb*-0x64,_0x401106(0x415),_0x1cd143);continue;}break;}}}var _0x4dbe67=0x2*-0x427+0x110b*0x1+-0x1*0x8bd,_0x344a5f=performance[_0x3a5ce3(0x637)](),_0x54325a=0x551*-0x4+-0x2544+-0x751*-0x8;function _0x2ec137(_0x161ee7){var _0x56bc83=_0x3a5ce3,_0x243d2f=_0x55e602[_0x56bc83(0x392)]['split']('|'),_0x1045ca=0xefb+-0x94c+-0x123*0x5;while(!![]){switch(_0x243d2f[_0x1045ca++]){case'0':var _0x3d9641=_0x585627==='br'?_0x55e602[_0x56bc83(0x74f)](_0x161ee7[_0x56bc83(0x693)]-(-0x1*0xa60+0x1*0xb04+-0x94),_0x4a7083):_0x55e602['YoMNx'](_0x161ee7[_0x56bc83(0x64b)],0x1*0x2303+-0x2a4+-0x204f);continue;case'1':var _0x70048f={'JkAwV':function(_0xa690f7,_0x286367){return _0xa690f7*_0x286367;},'UwPOL':_0x56bc83(0x59b)+_0x56bc83(0x2fe)+'35,24'+'0,0.8'+')','IaIvX':_0x55e602[_0x56bc83(0x51d)],'SwrDW':function(_0x340fb4,_0x5258ed){var _0x1d957b=_0x56bc83;return _0x55e602[_0x1d957b(0x5aa)](_0x340fb4,_0x5258ed);},'PyAtw':'700\x20','quvMo':function(_0x4bca1f,_0x387662){var _0x13029c=_0x56bc83;return _0x55e602[_0x13029c(0x74f)](_0x4bca1f,_0x387662);},'jqpRY':function(_0x1f619b,_0x214909){return _0x55e602['KOYVP'](_0x1f619b,_0x214909);},'qdjbt':_0x55e602[_0x56bc83(0x39e)],'mcXZq':function(_0x4205c7,_0x426093){var _0x52edcc=_0x56bc83;return _0x55e602[_0x52edcc(0x57c)](_0x4205c7,_0x426093);},'kTBcJ':function(_0x8ad5d3,_0x45ec58){return _0x8ad5d3+_0x45ec58;}};continue;case'2':var _0x3fb3b6=_0x55e602[_0x56bc83(0x2aa)](Number,_0x56e3d1['ksSca'+'le'])||-0x21*-0x1+-0x1414+-0x9fa*-0x2,_0x21e46b=_0x55e602[_0x56bc83(0x51b)](0x1cfc+-0x8e5+0x6a7*-0x3,_0x3fb3b6),_0x4d7d2f=(-0x25*-0x25+0x1a21*-0x1+-0xf2*-0x16)*_0x3fb3b6;continue;case'3':var _0x585627=_0x56e3d1['ksPos'];continue;case'4':_0x5de8ee(_0x56bc83(0x4d2),_0x56bc83(0x35c)+'1',_0x3d9641,_0x1f1404,_0x2900f9,_0x21e46b,_0x56e3d1['ksCps']?_0x55e602[_0x56bc83(0x381)](_0x3ab0bd(0xea9+0x17f*0x5+-0x1623),_0x56bc83(0x5ae)):'');continue;case'5':_0x5de8ee('S',_0x56bc83(0x384),_0x55e602[_0x56bc83(0x3eb)](_0x3d9641+_0x21e46b,_0x4d7d2f),_0x4b5f03+_0x21e46b+_0x4d7d2f,_0x21e46b,_0x21e46b);continue;case'6':_0x5de8ee(_0x55e602['gPWlo'],_0x56bc83(0x35c)+'3',_0x3d9641+_0x2900f9+_0x4d7d2f,_0x1f1404,_0x2900f9,_0x21e46b,_0x56e3d1['ksCps']?_0x3ab0bd(-0x2689+0x369+0x2323)+_0x55e602[_0x56bc83(0x2c5)]:'');continue;case'7':var _0x4a7083=_0x55e602[_0x56bc83(0x42f)](_0x21e46b,-0x93f+0xb5c*0x1+-0x21a)+_0x4d7d2f*(0x449+0x1c4a+-0x2091),_0x256276=_0x55e602[_0x56bc83(0x46e)](_0x21e46b,-0x9cc+-0xa5e*-0x2+-0xaed*0x1)+_0x4d7d2f*(0x2f1+0x5d1+-0x8c0);continue;case'8':_0x5de8ee('W','KeyW',_0x3d9641+_0x21e46b+_0x4d7d2f,_0x4b5f03,_0x21e46b,_0x21e46b);continue;case'9':var _0x4b5f03=_0x585627==='ml'?_0x161ee7[_0x56bc83(0x388)]+_0x161ee7['heigh'+'t']/(-0x124d+0x2506+-0x12b7)-_0x256276/(-0x1898+0xeae*0x1+0x9ec):_0x55e602['BFAlG'](_0x161ee7['botto'+'m']-_0x256276,_0x585627==='bl'?-0x3b*-0x2b+-0x12e+-0x85b:0x21*0x105+-0x1220+-0xeef*0x1);continue;case'10':_0x55e602[_0x56bc83(0x263)](_0x5de8ee,'D','KeyD',_0x55e602[_0x56bc83(0x3c8)](_0x3d9641,(_0x21e46b+_0x4d7d2f)*(0x1d29+0x21c4+0x3b*-0x111)),_0x55e602['puGKr'](_0x4b5f03+_0x21e46b,_0x4d7d2f),_0x21e46b,_0x21e46b);continue;case'11':var _0x2900f9=_0x55e602[_0x56bc83(0x57c)](_0x4a7083-_0x4d7d2f,0x2*0xf04+-0x76d+-0x1699),_0x1f1404=_0x55e602[_0x56bc83(0x381)](_0x4b5f03,_0x55e602['bpEHQ'](_0x21e46b,_0x4d7d2f)*(0x14fa+-0x1d01+0x809));continue;case'12':_0x5de8ee('','Space',_0x3d9641,_0x1f1404+_0x21e46b+_0x4d7d2f,_0x4a7083,_0x55e602['HZjHv'](_0x21e46b,-0x2452+-0xfe*0x23+0x470c+0.45));continue;case'13':var _0x5de8ee=(_0x1a7c57,_0x552488,_0x185a90,_0x4ac359,_0x2b1ba3,_0x16b02c,_0x52ba88)=>{var _0x5ed916=_0x56bc83,_0x17ee08=_0x549a32['has'](_0x552488);_0x2b7561[_0x5ed916(0x34f)](),_0x2b7561['begin'+_0x5ed916(0x180)]();if(_0x2b7561[_0x5ed916(0x1e3)+_0x5ed916(0x733)])_0x2b7561[_0x5ed916(0x1e3)+'Rect'](_0x185a90,_0x4ac359,_0x2b1ba3,_0x16b02c,_0x70048f[_0x5ed916(0x5b4)](0x21b5*-0x1+0x24b*-0x2+0x2652,_0x3fb3b6));else _0x2b7561[_0x5ed916(0x3cc)](_0x185a90,_0x4ac359,_0x2b1ba3,_0x16b02c);_0x2b7561['fillS'+'tyle']=_0x17ee08?_0x5ed916(0x59b)+_0x5ed916(0x1a8)+'07,15'+'7,0.8'+'5)':'rgba('+_0x5ed916(0x3cf)+'16,0.'+'7)',_0x2b7561[_0x5ed916(0x4d5)](),_0x2b7561['lineW'+_0x5ed916(0x69b)]=0x8*-0x460+-0x15*0x44+-0x2895*-0x1,_0x2b7561[_0x5ed916(0x55c)+'eStyl'+'e']=_0x17ee08?_0x59161a:_0x5ed916(0x59b)+_0x5ed916(0x1a8)+'07,15'+_0x5ed916(0x2cd)+'5)',_0x2b7561[_0x5ed916(0x55c)+'e'](),_0x17ee08&&(_0x2b7561[_0x5ed916(0x20e)+_0x5ed916(0x278)+'r']=_0x284960,_0x2b7561['shado'+_0x5ed916(0x73c)]=-0x281*0x8+-0x1213+-0x2629*-0x1,_0x2b7561[_0x5ed916(0x4d5)](),_0x2b7561[_0x5ed916(0x20e)+_0x5ed916(0x73c)]=0x1e7*0xa+-0x6*-0x4ee+-0x309a*0x1),_0x2b7561['fillS'+'tyle']=_0x17ee08?_0x5ed916(0x70e):_0x70048f[_0x5ed916(0x72e)],_0x2b7561['textA'+'lign']=_0x70048f[_0x5ed916(0x1d6)],_0x2b7561['textB'+_0x5ed916(0x674)+'ne']=_0x5ed916(0x539)+'e',_0x2b7561[_0x5ed916(0x6ad)]=_0x70048f['SwrDW'](_0x70048f[_0x5ed916(0x29c)](_0x70048f['PyAtw'],Math[_0x5ed916(0x1e3)]((-0x1c8d+-0xdb*0x21+-0x2*-0x1c6a)*_0x3fb3b6)),'px\x20ui'+_0x5ed916(0x354)+'-seri'+_0x5ed916(0x4b8)+_0x5ed916(0x4ef)+_0x5ed916(0x68d)+_0x5ed916(0x716)+'if'),_0x2b7561['fillT'+_0x5ed916(0x238)](_0x1a7c57,_0x185a90+_0x2b1ba3/(0x46c*0x6+0x2b*-0x51+0xceb*-0x1),_0x70048f[_0x5ed916(0x50b)](_0x70048f[_0x5ed916(0x29c)](_0x4ac359,_0x16b02c/(0x1ef8+0x7f*-0x48+0x4c2)),_0x52ba88?_0x70048f['jqpRY'](-0x1*0xa09+0x1*-0x1acf+-0x24dd*-0x1,_0x3fb3b6):0x26fd+0x1*0x1509+-0x3c06)),_0x52ba88&&(_0x2b7561[_0x5ed916(0x6ad)]=_0x70048f[_0x5ed916(0x29c)]('600\x20',Math[_0x5ed916(0x1e3)]((-0x17bb+0x2431+0xc6d*-0x1)*_0x3fb3b6))+('px\x20ui'+'-sans'+_0x5ed916(0x3ac)+_0x5ed916(0x4b8)+_0x5ed916(0x4ef)+'i,san'+_0x5ed916(0x716)+'if'),_0x2b7561['fillS'+_0x5ed916(0x4a1)]=_0x17ee08?_0x70048f['qdjbt']:_0x5ed916(0x59b)+_0x5ed916(0x2fe)+'35,24'+'0,0.5'+'5)',_0x2b7561[_0x5ed916(0x462)+_0x5ed916(0x238)](_0x52ba88,_0x185a90+_0x70048f[_0x5ed916(0x390)](_0x2b1ba3,-0x3*0xaa9+-0x1159+-0x4ef*-0xa),_0x70048f[_0x5ed916(0x4e0)](_0x4ac359,_0x16b02c/(-0x301*-0xb+-0x19a3*0x1+-0x766))+(0xb1+-0xeb*0x25+0x214e)*_0x3fb3b6)),_0x2b7561[_0x5ed916(0x26b)+'re']();};continue;case'14':_0x5de8ee('A','KeyA',_0x3d9641,_0x4b5f03+_0x21e46b+_0x4d7d2f,_0x21e46b,_0x21e46b);continue;}break;}}function _0x417a21(_0x3376ee){var _0x5b6d72=_0x3a5ce3,_0xb827a=_0x3376ee[_0x5b6d72(0x340)]/(0x105e*0x1+-0x1*-0x51+-0x10ad),_0x2cb470=_0x3376ee[_0x5b6d72(0x534)+'t']/(0x1a*0x6+-0x2395+0x3*0xba9),_0x84c413=_0x55e602[_0x5b6d72(0x2aa)](Number,_0x56e3d1['chSiz'+'e'])||-0x1646+0x1bb7+-0x570,_0x2cce09=/^#[0-9a-f]{6}$/i['test'](_0x56e3d1[_0x5b6d72(0x3ec)+'or'])?_0x56e3d1[_0x5b6d72(0x3ec)+'or']:_0x55e602['kZKoT'];_0x2b7561[_0x5b6d72(0x34f)](),_0x2b7561['strok'+_0x5b6d72(0x735)+'e']=_0x2cce09,_0x2b7561[_0x5b6d72(0x2d4)+_0x5b6d72(0x4a1)]=_0x2cce09,_0x2b7561['lineW'+_0x5b6d72(0x69b)]=Math[_0x5b6d72(0x6e1)](-0x1e5f+-0x1*0x180+-0x220*-0xf+0.5,_0x55e602[_0x5b6d72(0x5fa)](0xc*0xa6+-0x2177*0x1+0x19b1,_0x84c413)),_0x2b7561[_0x5b6d72(0x20e)+'wColo'+'r']=_0x2cce09,_0x2b7561[_0x5b6d72(0x20e)+'wBlur']=-0x2417*-0x1+-0x5*-0x529+-0x3dde;var _0x56731f=_0x55e602['HZjHv'](-0x14ea+-0xc7c+0x114*0x1f,_0x84c413),_0x43f4d9=(-0x2eb*0x6+0x219*-0x8+0x17*0x17e)*_0x84c413;_0x2b7561[_0x5b6d72(0x6f1)+_0x5b6d72(0x180)](),_0x2b7561['moveT'+'o'](_0xb827a-_0x56731f-_0x43f4d9,_0x2cb470),_0x2b7561['lineT'+'o'](_0xb827a-_0x56731f,_0x2cb470),_0x2b7561[_0x5b6d72(0x264)+'o'](_0x55e602['redLM'](_0xb827a,_0x56731f),_0x2cb470),_0x2b7561[_0x5b6d72(0x643)+'o'](_0x55e602[_0x5b6d72(0x711)](_0xb827a+_0x56731f,_0x43f4d9),_0x2cb470),_0x2b7561[_0x5b6d72(0x264)+'o'](_0xb827a,_0x2cb470-_0x56731f-_0x43f4d9),_0x2b7561[_0x5b6d72(0x643)+'o'](_0xb827a,_0x2cb470-_0x56731f),_0x2b7561['moveT'+'o'](_0xb827a,_0x55e602[_0x5b6d72(0x3eb)](_0x2cb470,_0x56731f)),_0x2b7561['lineT'+'o'](_0xb827a,_0x55e602[_0x5b6d72(0x381)](_0x2cb470+_0x56731f,_0x43f4d9)),_0x2b7561['strok'+'e'](),_0x2b7561[_0x5b6d72(0x6f1)+_0x5b6d72(0x180)](),_0x2b7561[_0x5b6d72(0x59a)](_0xb827a,_0x2cb470,(0x4*0x25+0x1*-0x264e+0x25bb+0.6000000000000001)*_0x84c413,-0x38f*0x8+0x17*0x161+-0x33f,Math['PI']*(-0x1c80+-0x1*-0x823+0x145f)),_0x2b7561[_0x5b6d72(0x4d5)](),_0x2b7561['resto'+'re']();}function _0xbdba9f(_0x7fbc){var _0x5b88f7=_0x3a5ce3,_0xcadebd={'SSZuU':'rgba('+'255,2'+'35,24'+'0,0.7'+'5)'};_0x2b7561[_0x5b88f7(0x34f)](),_0x2b7561['font']=_0x5b88f7(0x2a9)+'2px\x20u'+_0x5b88f7(0x71d)+_0x5b88f7(0x21e)+_0x5b88f7(0x65e)+_0x5b88f7(0x21e)+'e',_0x2b7561[_0x5b88f7(0x6df)+'lign']=_0x456932[_0x5b88f7(0x38c)],_0x2b7561[_0x5b88f7(0x361)+'aseli'+'ne']=_0x456932[_0x5b88f7(0x60b)];var _0x235da6=-0xcd1+-0xa5+-0x2ba*-0x5,_0x1ea20d=0x11fa*0x2+-0x1*0x1c45+0x55*-0x17,_0x5068a2=(_0x20f958,_0x4a6911)=>{var _0x409beb=_0x5b88f7;_0x2b7561[_0x409beb(0x2d4)+_0x409beb(0x4a1)]=_0x4a6911||_0xcadebd[_0x409beb(0x4fe)],_0x2b7561['fillT'+_0x409beb(0x238)](_0x20f958,_0x1ea20d,_0x235da6),_0x235da6+=0x10+-0x262f+0x262f;};_0x456932[_0x5b88f7(0x409)](_0x5068a2,_0x456932[_0x5b88f7(0x729)],'#ff6b'+'9d');if(_0x56e3d1['fps'])_0x5068a2(_0x54325a+'\x20FPS');if(!_0x4d3250['gameL'+_0x5b88f7(0x1f4)])_0x5068a2(_0x456932[_0x5b88f7(0x6da)],_0x456932[_0x5b88f7(0x5c7)]);_0x2b7561[_0x5b88f7(0x26b)+'re']();}function _0x5f5a40(){var _0x460a45=_0x3a5ce3,_0x4d60a5=('8|4|1'+_0x460a45(0x274)+_0x460a45(0x6f7)+'1|6|3'+'|5')[_0x460a45(0x20c)]('|'),_0x28f27f=0x1cb8+0x9f9+-0x26b1;while(!![]){switch(_0x4d60a5[_0x28f27f++]){case'0':_0x456932['DCsuv'](_0xb424d0-_0x344a5f,-0x3a*0x8+-0x888*0x1+0xc4c)&&(_0x54325a=Math[_0x460a45(0x1e3)](_0x456932[_0x460a45(0x53e)](_0x456932['BVaoR'](_0x4dbe67,-0x1711+-0x369+0x1e62*0x1),_0x456932[_0x460a45(0x4f9)](_0xb424d0,_0x344a5f))),_0x4dbe67=0xbcf+-0x3c1*0x1+0x1*-0x80e,_0x344a5f=_0xb424d0);continue;case'1':var _0x4d785b={'left':0x0,'top':0x0,'right':_0x15fdd9['w'],'bottom':_0x15fdd9['h'],'width':_0x15fdd9['w'],'height':_0x15fdd9['h']};continue;case'2':_0x456932[_0x460a45(0x285)](_0x37d19c);continue;case'3':if(_0x56e3d1[_0x460a45(0x587)+'rokes'])_0x456932[_0x460a45(0x545)](_0x2ec137,_0x4d785b);continue;case'4':_0x4dbe67++;continue;case'5':_0x456932[_0x460a45(0x6c7)](_0xbdba9f,_0x4d785b);continue;case'6':if(_0x56e3d1['cross'+_0x460a45(0x640)])_0x456932[_0x460a45(0x39a)](_0x417a21,_0x4d785b);continue;case'7':_0x4312fc();continue;case'8':_0x456932['ImDSm'](requestAnimationFrame,_0x5f5a40);continue;case'9':_0x2b7561['clear'+'Rect'](0x1a53+-0x1a26*0x1+-0x2d,0x513*-0x1+-0x1c69+0x4*0x85f,_0x15fdd9['w'],_0x15fdd9['h']);continue;case'10':var _0xb424d0=performance[_0x460a45(0x637)]();continue;}break;}}var _0x4b71ff=document[_0x3a5ce3(0x6db)+'eElem'+_0x3a5ce3(0x665)](_0x456932['VMjdo']);_0x4b71ff['id']=_0x3a5ce3(0x5eb)+_0x3a5ce3(0x745),_0x4b71ff[_0x3a5ce3(0x3a0)]['cssTe'+'xt']=_0x456932[_0x3a5ce3(0x195)];var _0x43d9d9=_0x4b71ff[_0x3a5ce3(0x35d)+'hShad'+'ow']({'mode':_0x3a5ce3(0x707)});(document['body']||document[_0x3a5ce3(0x254)+'entEl'+'ement'])[_0x3a5ce3(0x18a)+'dChil'+'d'](_0x4b71ff);var _0x1483b6=![],_0x4e8cfa={};try{_0x4e8cfa=JSON['parse'](localStorage[_0x3a5ce3(0x623)+'em'](_0x456932['tgSgD'])||'{}');}catch(_0x4ac38b){}function _0x2922a8(){var _0x5a13d5=_0x3a5ce3;try{localStorage['setIt'+'em'](_0x456932[_0x5a13d5(0x5ce)],JSON['strin'+_0x5a13d5(0x5d1)](_0x4e8cfa));}catch(_0x2239db){}}function _0x30fb81(_0x234b85,_0x82f729){var _0x15d7ce=_0x3a5ce3,_0x3efe1f={'NigNg':function(_0x254494,_0x4f4b01){return _0x254494!==_0x4f4b01;},'KEMrC':'aria-'+_0x15d7ce(0x4ec)+'ed','VjpSA':function(_0x336883,_0xd4f0d8){var _0x6f2e3b=_0x15d7ce;return _0x55e602[_0x6f2e3b(0x206)](_0x336883,_0xd4f0d8);},'DzcYG':function(_0x358e31,_0x53e6cf){return _0x358e31(_0x53e6cf);}};if(_0x15d7ce(0x47f)!==_0x15d7ce(0x73b)){var _0xcd2d95=document[_0x15d7ce(0x6db)+'eElem'+_0x15d7ce(0x665)](_0x15d7ce(0x34c)+'n');return _0xcd2d95['type']=_0x15d7ce(0x34c)+'n',_0xcd2d95['class'+'Name']=_0x55e602[_0x15d7ce(0x64d)],_0xcd2d95['setAt'+_0x15d7ce(0x714)+'te'](_0x15d7ce(0x39b),_0x55e602[_0x15d7ce(0x60e)]),_0xcd2d95['setAt'+_0x15d7ce(0x714)+'te'](_0x55e602[_0x15d7ce(0x314)],_0x55e602['ScAde'](String,!!_0x234b85)),_0xcd2d95[_0x15d7ce(0x2af)+'ck']=_0x203fdc=>{var _0x4e3a67=_0x15d7ce;_0x203fdc[_0x4e3a67(0x50d)+_0x4e3a67(0x540)+_0x4e3a67(0x352)]();var _0xb09fd4=_0x3efe1f[_0x4e3a67(0x2d7)](_0xcd2d95[_0x4e3a67(0x504)+_0x4e3a67(0x714)+'te']('aria-'+_0x4e3a67(0x4ec)+'ed'),_0x4e3a67(0x311));_0xcd2d95['setAt'+_0x4e3a67(0x714)+'te'](_0x3efe1f[_0x4e3a67(0x629)],_0x3efe1f[_0x4e3a67(0x4c7)](String,_0xb09fd4)),_0x3efe1f[_0x4e3a67(0x5f1)](_0x82f729,_0xb09fd4);},_0xcd2d95;}else _0x23965d[_0x15d7ce(0x2b6)+_0x15d7ce(0x640)]=_0x4c0e04,_0x55e602['gtPxz'](_0x28bafb);}function _0x45e2b9(_0x396c09,_0x158019,_0xd24f6f,_0x50cb17,_0x20d96a){var _0x2698d3=_0x3a5ce3,_0x491ec1={'FDHVu':function(_0x5a8b83,_0x847a6f){return _0x5a8b83!==_0x847a6f;},'aixRf':'mqJTO','ewtcX':_0x55e602[_0x2698d3(0x2a2)],'xaXLj':function(_0x3e88e8,_0x545333){var _0x3e46fc=_0x2698d3;return _0x55e602[_0x3e46fc(0x74a)](_0x3e88e8,_0x545333);},'hQQKh':function(_0x5c39ae,_0x42be1b){return _0x5c39ae/_0x42be1b;},'QfUvM':function(_0x5a7692){return _0x5a7692();},'rVewi':function(_0x37bd63,_0x5999a0){return _0x37bd63(_0x5999a0);}};if(_0x55e602[_0x2698d3(0x3be)]===_0x55e602[_0x2698d3(0x3be)]){var _0x24964b=document[_0x2698d3(0x6db)+_0x2698d3(0x5d7)+_0x2698d3(0x665)](_0x55e602['PoDZf']);_0x24964b['class'+_0x2698d3(0x41a)]='sk-ra'+_0x2698d3(0x5a2);var _0x1f52de=document[_0x2698d3(0x6db)+_0x2698d3(0x5d7)+_0x2698d3(0x665)]('input');_0x1f52de[_0x2698d3(0x52e)]=_0x2698d3(0x6ae),_0x1f52de['class'+'Name']=_0x55e602['dsmdq'],_0x1f52de['min']=_0x158019,_0x1f52de[_0x2698d3(0x6e1)]=_0xd24f6f,_0x1f52de['step']=_0x50cb17,_0x1f52de['value']=_0x396c09;var _0x3b9563=document['creat'+_0x2698d3(0x5d7)+'ent'](_0x2698d3(0x2f5));_0x3b9563[_0x2698d3(0x59f)+_0x2698d3(0x41a)]=_0x55e602[_0x2698d3(0x1bb)],_0x3b9563[_0x2698d3(0x6d1)+'onten'+'t']=_0x55e602[_0x2698d3(0x731)](String,_0x396c09);var _0xf1494e=()=>{var _0x106a88=_0x2698d3;_0x491ec1[_0x106a88(0x1f9)](_0x491ec1[_0x106a88(0x480)],_0x106a88(0x2cf))?(_0x3b9563['textC'+_0x106a88(0x279)+'t']=String(_0x1f52de['value']),_0x24964b[_0x106a88(0x3a0)][_0x106a88(0x43c)+'opert'+'y'](_0x491ec1[_0x106a88(0x309)],_0x491ec1['xaXLj'](_0x491ec1[_0x106a88(0x3fd)](_0x1f52de['value']-_0x158019,_0xd24f6f-_0x158019)*(-0x2bf+-0x1bfe+0x1f21*0x1),'%'))):(_0x214763['ksSca'+'le']=_0x3aff65,_0x3346b1());};return _0x1f52de[_0x2698d3(0x56c)+'ut']=()=>{var _0x5ce107=_0x2698d3;_0x491ec1['QfUvM'](_0xf1494e),_0x20d96a(_0x491ec1[_0x5ce107(0x4ea)](Number,_0x1f52de[_0x5ce107(0x4c1)]));},_0x55e602[_0x2698d3(0x2dd)](_0xf1494e),_0x24964b['appen'+'d'](_0x1f52de,_0x3b9563),_0x24964b;}else return-0x108a+0x1b8e+-0xb04;}function _0x38b751(_0xdb2202,_0x27e63d){var _0x637a8a=_0x3a5ce3,_0x241e19=(_0x637a8a(0x240)+'|4|2|'+'0')['split']('|'),_0x2a60e8=0x23cf+0x8ca+0x2c99*-0x1;while(!![]){switch(_0x241e19[_0x2a60e8++]){case'0':return _0x310d13;case'1':_0x310d13[_0x637a8a(0x52e)]=_0x637a8a(0x17c);continue;case'2':_0x310d13[_0x637a8a(0x56c)+'ut']=()=>_0x27e63d(_0x310d13[_0x637a8a(0x4c1)]);continue;case'3':_0x310d13[_0x637a8a(0x59f)+'Name']=_0x637a8a(0x366)+'lor';continue;case'4':_0x310d13[_0x637a8a(0x4c1)]=/^#[0-9a-f]{6}$/i['test'](_0xdb2202)?_0xdb2202:_0x55e602[_0x637a8a(0x5a0)];continue;case'5':var _0x310d13=document[_0x637a8a(0x6db)+'eElem'+_0x637a8a(0x665)](_0x637a8a(0x272));continue;}break;}}function _0x217051(_0x4bd1c3,_0x109ff4,_0x254b3e){var _0xd5dfee=_0x3a5ce3,_0x276aba={'aNwCD':function(_0x739859,_0x5d3749){return _0x739859===_0x5d3749;},'ScZVE':function(_0x90220e,_0x5e84ce){return _0x90220e+_0x5e84ce;},'bkDMZ':_0xd5dfee(0x242)+'s','BypKf':_0xd5dfee(0x509)+'ks\x20ar'+'med\x20('+_0xd5dfee(0x5f0)+_0xd5dfee(0x393),'gmJqL':'loadi'+'ng','CzRjU':_0x456932[_0xd5dfee(0x644)],'dYQqG':_0xd5dfee(0x6d8),'BBNnJ':_0xd5dfee(0x6d5)+_0xd5dfee(0x645)+_0xd5dfee(0x1e4)+_0xd5dfee(0x538)+'ay\x20on'+_0xd5dfee(0x492)+'einst'+_0xd5dfee(0x609)+'he\x20us'+_0xd5dfee(0x3e1)+'ipt)'};if(_0x456932['HgAtT']===_0x456932[_0xd5dfee(0x24c)])_0x3060a4[_0xd5dfee(0x2c2)+_0xd5dfee(0x207)]=_0x4ddc12,_0x342c8f();else{var _0x5dfb3b=document[_0xd5dfee(0x6db)+_0xd5dfee(0x5d7)+_0xd5dfee(0x665)](_0xd5dfee(0x6cc)+'t');_0x5dfb3b[_0xd5dfee(0x59f)+_0xd5dfee(0x41a)]='sk-fi'+_0xd5dfee(0x45e);for(var [_0x2df38b,_0x49cd34]of _0x109ff4){if(_0xd5dfee(0x54d)==='lmiew'){var _0x23743f=_0x4bc1f6[_0x5928f5][_0xd5dfee(0x60a)+_0xd5dfee(0x31f)+'tor'](_0xd5dfee(0x602)+'desc');_0x23743f&&(_0x276aba[_0xd5dfee(0x437)](_0x23743f['textC'+'onten'+'t'][_0xd5dfee(0x29b)+'Of'](_0xd5dfee(0x684)),-0xeb*0x25+0x1ab6*0x1+-0x26b*-0x3)||_0x23743f[_0xd5dfee(0x6d1)+_0xd5dfee(0x279)+'t'][_0xd5dfee(0x29b)+'Of'](_0xd5dfee(0x6eb))===-0x10b7+0xd*-0x13c+0x20c3)&&(_0x23743f['textC'+_0xd5dfee(0x279)+'t']=_0x52a753[_0xd5dfee(0x357)+_0xd5dfee(0x3ad)]?'SAFE\x20'+_0xd5dfee(0x4b2)+'-\x20ove'+'rlay\x20'+_0xd5dfee(0x2bb)+_0xd5dfee(0x5b2)+_0xd5dfee(0x6be)+_0xd5dfee(0x5cc)+'ad\x20to'+'\x20exit'+')':_0x374724['uwmk']?_0x276aba[_0xd5dfee(0x416)]('UWMK\x20'+'bound'+'\x20'+(_0x42b485[_0xd5dfee(0x6a4)+_0xd5dfee(0x439)]?_0x276aba['ScZVE'](_0x3d9e36['hooks'+'Ok']+'/',_0x16831e['hooks'+_0xd5dfee(0x439)])+_0x276aba[_0xd5dfee(0x5e5)]:_0x276aba[_0xd5dfee(0x653)])+('\x20|\x20ga'+_0xd5dfee(0x226)),_0x5f491f[_0xd5dfee(0x3fb)+_0xd5dfee(0x1f4)]?_0xd5dfee(0x5cb)+'d':_0x276aba['gmJqL'])+_0x276aba[_0xd5dfee(0x218)]+(_0x414acf[_0xd5dfee(0x1bd)+_0xd5dfee(0x4de)]?_0xd5dfee(0x6d8):_0xd5dfee(0x317))+(_0xd5dfee(0x590)+'vemen'+'t\x20')+(_0x435d3e['movem'+'ents']?_0x276aba[_0xd5dfee(0x247)]:_0xd5dfee(0x317))+(_0x162b22[_0xd5dfee(0x6e0)+'rror']?_0xd5dfee(0x617)+_0xd5dfee(0x586)+_0x2c21d5['lastE'+_0xd5dfee(0x1c2)]:''):_0x276aba[_0xd5dfee(0x24a)]);}else{var _0x113889=document[_0xd5dfee(0x6db)+_0xd5dfee(0x5d7)+_0xd5dfee(0x665)](_0x456932[_0xd5dfee(0x4d1)]);_0x113889[_0xd5dfee(0x4c1)]=_0x2df38b,_0x113889['textC'+'onten'+'t']=_0x49cd34,_0x5dfb3b[_0xd5dfee(0x18a)+'dChil'+'d'](_0x113889);}}return _0x5dfb3b[_0xd5dfee(0x4c1)]=_0x4bd1c3,_0x5dfb3b['oncha'+'nge']=()=>_0x254b3e(_0x5dfb3b[_0xd5dfee(0x4c1)]),_0x5dfb3b;}}function _0x2ec362(_0x8a5971,_0x528b0a){var _0x4d4e7d=_0x3a5ce3,_0x35283e={'VWdQz':function(_0x405a94){return _0x405a94();}},_0x208f02=document[_0x4d4e7d(0x6db)+_0x4d4e7d(0x5d7)+'ent'](_0x456932[_0x4d4e7d(0x1b9)]);return _0x208f02['type']='butto'+'n',_0x208f02['class'+'Name']=_0x4d4e7d(0x4d0)+'n',_0x208f02['textC'+_0x4d4e7d(0x279)+'t']=_0x8a5971,_0x208f02['oncli'+'ck']=_0x3fbe51=>{var _0x3ebea6=_0x4d4e7d;_0x3fbe51['stopP'+_0x3ebea6(0x540)+_0x3ebea6(0x352)](),_0x35283e[_0x3ebea6(0x239)](_0x528b0a);},_0x208f02;}function _0x477efb(_0xa97cd2,_0x365102,_0x5d18d5){var _0x35c4b5=_0x3a5ce3,_0x5aaf19=('6|2|4'+'|7|1|'+_0x35c4b5(0x6c6))[_0x35c4b5(0x20c)]('|'),_0x288344=0xb93*-0x1+-0x1*0x1e49+0x2*0x14ee;while(!![]){switch(_0x5aaf19[_0x288344++]){case'0':return _0x15d2a1;case'1':_0xadbd34['textC'+'onten'+'t']=_0xa97cd2;continue;case'2':_0x15d2a1['class'+'Name']='sk-ct'+'l';continue;case'3':if(_0x365102){var _0x257cd6=document[_0x35c4b5(0x6db)+_0x35c4b5(0x5d7)+_0x35c4b5(0x665)]('small');_0x257cd6['class'+'Name']=_0x55e602['kgNBE'],_0x257cd6[_0x35c4b5(0x6d1)+_0x35c4b5(0x279)+'t']=_0x365102,_0xadbd34[_0x35c4b5(0x18a)+'dChil'+'d'](_0x257cd6);}continue;case'4':var _0xadbd34=document[_0x35c4b5(0x6db)+_0x35c4b5(0x5d7)+'ent']('span');continue;case'5':_0x15d2a1['appen'+'d'](_0xadbd34,_0x5d18d5);continue;case'6':var _0x15d2a1=document[_0x35c4b5(0x6db)+'eElem'+_0x35c4b5(0x665)](_0x55e602[_0x35c4b5(0x6f2)]);continue;case'7':_0xadbd34[_0x35c4b5(0x59f)+_0x35c4b5(0x41a)]=_0x35c4b5(0x391)+_0x35c4b5(0x257);continue;}break;}}function _0x4849bb(_0x51a9ca,_0x50b3c2){var _0x1c2097=_0x3a5ce3,_0xd4b0d7=document[_0x1c2097(0x6db)+'eElem'+_0x1c2097(0x665)](_0x456932[_0x1c2097(0x266)]);return _0xd4b0d7['class'+_0x1c2097(0x41a)]=_0x1c2097(0x4c9)+'te'+(_0x50b3c2?_0x1c2097(0x555):''),_0xd4b0d7[_0x1c2097(0x6d1)+_0x1c2097(0x279)+'t']=_0x51a9ca,_0xd4b0d7;}function _0x15689f(_0x5c4662,_0x573c18,_0x1861f1,_0x2ec9b5,_0x4f0270){var _0x67405=_0x3a5ce3,_0x3e37d6={'tXpYn':function(_0x38bb25,_0x2b55f2){return _0x38bb25(_0x2b55f2);}},_0x1a14bb=document['creat'+'eElem'+_0x67405(0x665)](_0x55e602[_0x67405(0x6f2)]);_0x1a14bb[_0x67405(0x59f)+'Name']=_0x55e602['bpEHQ'](_0x67405(0x478)+'rd',_0x1861f1?_0x67405(0x5ed):'');var _0x4491e3=document[_0x67405(0x6db)+_0x67405(0x5d7)+'ent'](_0x55e602['PoDZf']);_0x4491e3[_0x67405(0x59f)+_0x67405(0x41a)]=_0x55e602[_0x67405(0x216)];var _0x30c5e1=document['creat'+'eElem'+'ent']('div');_0x30c5e1['class'+_0x67405(0x41a)]=_0x67405(0x478)+_0x67405(0x3e9)+_0x67405(0x1db);var _0xdfffd1=document[_0x67405(0x6db)+_0x67405(0x5d7)+_0x67405(0x665)](_0x67405(0x322)+'g');_0xdfffd1['textC'+_0x67405(0x279)+'t']=_0x5c4662,_0x30c5e1[_0x67405(0x18a)+_0x67405(0x591)+'d'](_0xdfffd1);if(_0x2ec9b5){var _0x1e1b7e=_0x55e602[_0x67405(0x3a8)](_0x30fb81,_0x1861f1,_0x1a438f=>{var _0x55b2a6=_0x67405;_0x1a14bb[_0x55b2a6(0x59f)+'List'][_0x55b2a6(0x2c7)+'e']('on',_0x1a438f),_0x3e37d6[_0x55b2a6(0x2c6)](_0x2ec9b5,_0x1a438f);});_0x4491e3[_0x67405(0x18a)+'d'](_0x30c5e1,_0x1e1b7e);}else _0x55e602['MqAwr'](_0x67405(0x58a),_0x67405(0x58a))?_0x4491e3['appen'+_0x67405(0x591)+'d'](_0x30c5e1):(_0x2a431c={..._0x43ff98},_0x3d4c17(),_0x5db13a['reloa'+'d']());_0x1a14bb['appen'+_0x67405(0x591)+'d'](_0x4491e3);if(_0x4f0270&&_0x4f0270['lengt'+'h']){var _0x5be2eb=_0x55e602[_0x67405(0x67e)][_0x67405(0x20c)]('|'),_0x3f313c=0x1f35+-0x1c15+-0x2*0x190;while(!![]){switch(_0x5be2eb[_0x3f313c++]){case'0':var _0x2acb88=document[_0x67405(0x6db)+'eElem'+_0x67405(0x665)]('div');continue;case'1':var _0x2212ed=document[_0x67405(0x6db)+_0x67405(0x5d7)+_0x67405(0x665)]('div');continue;case'2':_0x2acb88[_0x67405(0x18a)+_0x67405(0x591)+'d'](_0x2212ed);continue;case'3':_0x1a14bb['appen'+'dChil'+'d'](_0x2acb88);continue;case'4':for(var _0x411a42 of _0x4f0270)_0x2acb88[_0x67405(0x18a)+_0x67405(0x591)+'d'](_0x411a42);continue;case'5':_0x2212ed[_0x67405(0x59f)+'Name']='sk-md'+_0x67405(0x18e);continue;case'6':_0x2acb88['class'+'Name']=_0x67405(0x301)+_0x67405(0x6d3);continue;case'7':_0x2212ed[_0x67405(0x6d1)+_0x67405(0x279)+'t']=_0x573c18;continue;}break;}}return _0x1a14bb;}var _0x27de39=[{'id':_0x456932['Unqys'],'label':_0x3a5ce3(0x1a0)+'t'},{'id':_0x3a5ce3(0x58d),'label':_0x3a5ce3(0x46f)},{'id':_0x456932[_0x3a5ce3(0x5fc)],'label':_0x456932[_0x3a5ce3(0x5ab)]},{'id':'misc','label':'Misc'},{'id':_0x3a5ce3(0x47e),'label':_0x3a5ce3(0x44c)+'y'}];function _0x172c44(){var _0x425d37=_0x3a5ce3,_0x46cb29={'nwroT':_0x425d37(0x5ef)},_0x38ec1f=_0x4d3250[_0x425d37(0x357)+_0x425d37(0x3ad)]?_0x425d37(0x699)+_0x425d37(0x4b2)+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+'ooks\x20'+_0x425d37(0x5cc)+_0x425d37(0x5fd)+'\x20exit'+')':_0x4d3250['uwmk']?_0x55e602['KGfet'](_0x55e602[_0x425d37(0x74a)](_0x55e602['tPeJy'],_0x4d3250['hooks'+'Total']?_0x55e602[_0x425d37(0x452)](_0x4d3250['hooks'+'Ok'],'/')+_0x4d3250['hooks'+_0x425d37(0x439)]+(_0x425d37(0x242)+'s'):_0x425d37(0x509)+_0x425d37(0x6bf)+_0x425d37(0x685)+_0x425d37(0x5f0)+_0x425d37(0x393))+(_0x425d37(0x581)+_0x425d37(0x226))+(_0x4d3250['gameL'+'oaded']?_0x425d37(0x5cb)+'d':'loadi'+'ng'),_0x425d37(0x50c)+_0x425d37(0x513)+'\x20')+(_0x4d3250[_0x425d37(0x1bd)+'ers']?_0x425d37(0x6d8):'none')+(_0x425d37(0x590)+_0x425d37(0x414)+'t\x20')+(_0x4d3250[_0x425d37(0x370)+'ents']?_0x55e602['STrfl']:_0x55e602[_0x425d37(0x4fb)]):'UWMK\x20'+'MISSI'+_0x425d37(0x330)+'overl'+_0x425d37(0x518)+_0x425d37(0x492)+_0x425d37(0x514)+_0x425d37(0x609)+'he\x20us'+_0x425d37(0x3e1)+_0x425d37(0x466);if(_0x4d3250[_0x425d37(0x6e0)+_0x425d37(0x1c2)])_0x38ec1f+=_0x55e602[_0x425d37(0x27a)]+_0x4d3250[_0x425d37(0x6e0)+_0x425d37(0x1c2)];return _0x15689f(_0x425d37(0x421)+'s',_0x38ec1f,_0x4d3250['uwmk'],null,[_0x477efb(_0x425d37(0x2c9)+'PS\x20un'+'lock',_0x55e602['uSRJy'],_0x55e602['ChAhC'](_0x2ec362,_0x55e602['xwRZc'],()=>{var _0x342c51=_0x425d37,_0x422f58={'MsoxP':_0x342c51(0x2e1)+_0x342c51(0x5de)+_0x342c51(0x1d3)+_0x342c51(0x543)+_0x342c51(0x420),'ymijP':function(_0x26945f,_0x2a973c){return _0x26945f<_0x2a973c;},'wpNon':function(_0x3d806b,_0xbd4d8f){return _0x3d806b===_0xbd4d8f;}};if(_0x342c51(0x36c)===_0x46cb29[_0x342c51(0x2f9)])try{if(_0x1b7b89)_0x1707e8['call'](_0x422f58['MsoxP'],_0x342c51(0x1ba)+_0x342c51(0x31e)+'Frame'+_0x342c51(0x72b),[-0x1645*0x1+0x82+0x16b3]);}catch(_0x59be00){}else try{if(_0x342c51(0x49b)==='BbfKh'){if(_0x55491c)_0x55491c['call']('Unity'+'Engin'+_0x342c51(0x1d3)+_0x342c51(0x543)+_0x342c51(0x420),_0x342c51(0x1ba)+_0x342c51(0x31e)+'Frame'+_0x342c51(0x72b),[0xd16+0x1af2*0x1+-0x458*0x9]);}else{var _0x4963ff=_0x2317ec['child'+_0x342c51(0x2ee)];for(var _0x3d6c6c=-0x4*0x9b1+-0x89+0x274d;_0x422f58[_0x342c51(0x3d5)](_0x3d6c6c,_0x4963ff[_0x342c51(0x696)+'h']);_0x3d6c6c++){if(_0x4963ff[_0x3d6c6c]['id']&&_0x422f58['wpNon'](_0x4963ff[_0x3d6c6c]['id']['index'+'Of'](_0x342c51(0x1f1)+_0x342c51(0x1ec)),0x47*-0xa+0xd29*0x1+-0xa63))_0x4963ff[_0x3d6c6c][_0x342c51(0x3a0)][_0x342c51(0x426)+'ay']='none';}}}catch(_0x4e5e46){}}))]);}function _0x16af1b(_0x245782){var _0x56dbdd=_0x3a5ce3,_0x546f4d={'fseys':_0x56dbdd(0x598)+'|3|6|'+_0x56dbdd(0x201),'ONlXD':'OShoo'+_0x56dbdd(0x737),'ilPCI':_0x55e602[_0x56dbdd(0x2e4)],'RtvrT':function(_0x25a6c3,_0x502a9b,_0x342c9a,_0x58247a,_0x3775c3,_0x1dc52e,_0x562838,_0x2dfdd0){return _0x55e602['iIvmG'](_0x25a6c3,_0x502a9b,_0x342c9a,_0x58247a,_0x3775c3,_0x1dc52e,_0x562838,_0x2dfdd0);},'maQES':function(_0x4272e7,_0x3bf942){return _0x55e602['MqAwr'](_0x4272e7,_0x3bf942);},'gtOCq':_0x56dbdd(0x3f5),'IZzwl':function(_0x2f5920,_0x47bfa1,_0x2c44f1){return _0x2f5920(_0x47bfa1,_0x2c44f1);},'SXosa':_0x55e602['LrwLj'],'fEUWV':function(_0x3b8f54,_0x5e0e33,_0x34575e){return _0x3b8f54(_0x5e0e33,_0x34575e);},'YMhTA':function(_0x2e5fc7){return _0x55e602['Oxxga'](_0x2e5fc7);},'TcAVe':_0x56dbdd(0x2b4)+_0x56dbdd(0x40e)+_0x56dbdd(0x2a8)+'10|4|'+_0x56dbdd(0x32b)+'12|0|'+'2','KSKzA':'mouse'+'3','ZboBR':function(_0x42db54,_0x2b2bad){return _0x42db54+_0x2b2bad;},'ECCRQ':_0x56dbdd(0x5ae),'LckFl':function(_0xf06bf1,_0x1d8d4c){return _0xf06bf1/_0x1d8d4c;},'wlLrL':_0x56dbdd(0x546),'rKxdb':function(_0x4153d8,_0x584edb){return _0x4153d8-_0x584edb;},'NDGet':function(_0xd96168,_0x3bde00){return _0xd96168-_0x3bde00;},'seAks':function(_0x140a11,_0x211430){return _0x140a11+_0x211430;},'JgScy':function(_0x5c79f5,_0x379080){return _0x5c79f5*_0x379080;},'ywlTK':function(_0x33760a,_0x1832fc){return _0x33760a-_0x1832fc;},'BGGqu':_0x55e602['zipSs'],'TZGKz':function(_0x440161,_0x2a1f10){return _0x55e602['rlTjC'](_0x440161,_0x2a1f10);},'EwRfQ':_0x56dbdd(0x4d2),'bTpZt':_0x55e602[_0x56dbdd(0x549)],'ohJsH':function(_0x2ea0b0,_0x1150de){var _0x3da566=_0x56dbdd;return _0x55e602[_0x3da566(0x74b)](_0x2ea0b0,_0x1150de);},'snZWo':function(_0x42d149,_0x4d0a3a){var _0x2cdf93=_0x56dbdd;return _0x55e602[_0x2cdf93(0x5bd)](_0x42d149,_0x4d0a3a);},'okcWc':function(_0x58b44d){return _0x58b44d();},'KBQRZ':function(_0x2086c4){var _0x224404=_0x56dbdd;return _0x55e602[_0x224404(0x2bf)](_0x2086c4);},'ygiMx':function(_0x2955ab){return _0x2955ab();},'Bitfs':_0x56dbdd(0x679)+'t','hVBPx':function(_0x317b83){var _0x5640e5=_0x56dbdd;return _0x55e602[_0x5640e5(0x271)](_0x317b83);},'KRCRH':_0x55e602['voFau'],'PfVgy':'aOrBz','EWYcG':function(_0x47b2a6){return _0x55e602['NSuWj'](_0x47b2a6);},'yLBVM':function(_0x20a0bb,_0x4be9d0){return _0x20a0bb===_0x4be9d0;},'Sxqja':_0x56dbdd(0x303)};if(_0x55e602[_0x56dbdd(0x6e4)](_0x245782,_0x56dbdd(0x633)+'t')){if(_0x55e602[_0x56dbdd(0x4a8)](_0x56dbdd(0x583),_0x56dbdd(0x583)))_0x379e4d=_0x46fa8e['round'](_0x55e602['KOYVP'](_0x4f53c2,0x4*0x463+0x4f3+0x1297*-0x1)/_0x55e602['vPpsE'](_0x3eeb91,_0x5f5111)),_0x512ad9=0x1*-0x1849+0x3*0xb+0x4*0x60a,_0x53bd26=_0x3c10cd;else return[_0x172c44(),_0x15689f(_0x56dbdd(0x45a)+'ode',_0x55e602[_0x56dbdd(0x53d)],_0x56e3d1[_0x56dbdd(0x4b0)],_0x253db1=>{var _0x13eee2=_0x56dbdd,_0x64250e={'PWsNi':_0x546f4d[_0x13eee2(0x1d5)],'CMRuV':'i32','DDdJo':_0x546f4d['ONlXD'],'ViOsj':_0x546f4d[_0x13eee2(0x463)],'ZeoAt':'godDi'+'e','czRGu':_0x13eee2(0x25c)+'Die','pAtOt':_0x13eee2(0x59c)+_0x13eee2(0x49d),'GLFwt':_0x13eee2(0x1ac)+_0x13eee2(0x5b3)+'Sharp'+'.dll','kjyUW':_0x13eee2(0x3bf)+'ve','olUVj':function(_0xaca2a3,_0x1f0f3f,_0x48e16e,_0x16f5be,_0xa8132a,_0x737a86,_0x47fd46,_0x201b23){var _0x50ec1b=_0x13eee2;return _0x546f4d[_0x50ec1b(0x38d)](_0xaca2a3,_0x1f0f3f,_0x48e16e,_0x16f5be,_0xa8132a,_0x737a86,_0x47fd46,_0x201b23);},'VNRen':_0x13eee2(0x3d2)+_0x13eee2(0x68b)};if(_0x546f4d[_0x13eee2(0x4f1)](_0x546f4d[_0x13eee2(0x527)],'EkBRw')){if(_0x2cc2ff['Unity'+_0x13eee2(0x17d)+_0x13eee2(0x360)]&&!_0x1fb77b['safeM'+_0x13eee2(0x3ad)]){var _0x1fabe2=_0x64250e['PWsNi']['split']('|'),_0x2ffe86=-0x175f*0x1+-0x3fd*0x4+0x2753;while(!![]){switch(_0x1fabe2[_0x2ffe86++]){case'0':if(_0x316540[_0x13eee2(0x296)+'od'])_0x3b700f(_0x13eee2(0x4b0),_0x13eee2(0x3b4)+'th','Initi'+_0x13eee2(0x1f0)+_0x13eee2(0x214)+'lth',['i32',_0x64250e[_0x13eee2(0x541)]],_0x5c9f50,_0x59e9d6,!!_0x4fa995[_0x13eee2(0x4b0)]);continue;case'1':if(_0x5a40fb['hookC'+_0x13eee2(0x2f7)+'e'])_0x404cae(_0x13eee2(0x23b)+_0x13eee2(0x513),_0x64250e[_0x13eee2(0x3a6)],_0x64250e['ViOsj'],[_0x64250e['CMRuV'],_0x64250e[_0x13eee2(0x541)]],_0x2703f3,(_0x5da4e3,_0x12aaec)=>{var _0x11adf8=_0x13eee2;_0x55887d(_0x35ad0c,_0x12aaec,_0x25bc95,_0x11adf8(0x1bd)+'ers');},!![]);continue;case'2':_0x3a6307=_0x29fe43[_0x13eee2(0x2e1)+_0x13eee2(0x17d)+'dkit']['Value'+_0x13eee2(0x394)+'er'];continue;case'3':if(_0x464c5f['hookG'+'odDie'])_0x32e202(_0x64250e[_0x13eee2(0x362)],'OHeal'+'th',_0x64250e[_0x13eee2(0x2d5)],['i32','i32',_0x13eee2(0x1f2),_0x13eee2(0x1f2),_0x64250e['CMRuV']],_0x3d4949,_0x4e1d03,!!_0x2bc7db['god']);continue;case'4':_0x55cc77=_0x36f04a['Unity'+'WebMo'+_0x13eee2(0x360)]['Runti'+'me'][_0x13eee2(0x6db)+'ePlug'+'in']({'name':_0x64250e[_0x13eee2(0x2a5)],'version':_0x13eee2(0x280),'referencedAssemblies':[_0x64250e[_0x13eee2(0x44f)]]});continue;case'5':if(_0x424964[_0x13eee2(0x3a5)+'aptur'+'e'])_0x46b5f5(_0x64250e[_0x13eee2(0x668)],'Legio'+'nPlat'+_0x13eee2(0x404)+_0x13eee2(0x45b)+_0x13eee2(0x5f4)+_0x13eee2(0x224)+_0x13eee2(0x665),'IsGro'+_0x13eee2(0x3bc),['i32'],_0x64250e['CMRuV'],(_0x1b46d0,_0x9abec0)=>{var _0x1d76cc=_0x13eee2;_0x3c2671(_0x5996c4,_0x9abec0,_0x56fc95,'movem'+_0x1d76cc(0x1fd));},!![]);continue;case'6':if(_0x225a43[_0x13eee2(0x293)+_0x13eee2(0x255)+'il'])_0x64250e['olUVj'](_0xf0dd5f,_0x64250e[_0x13eee2(0x1e7)],_0x13eee2(0x371)+_0x13eee2(0x2c3)+'forms'+_0x13eee2(0x45b)+_0x13eee2(0x5f4)+_0x13eee2(0x3c5)+_0x13eee2(0x28a)+'on',_0x13eee2(0x31b),[_0x64250e['CMRuV']],_0x29bd54,_0xb78d35,!!_0xad8b9['noRec'+_0x13eee2(0x68b)]);continue;}break;}}}else _0x56e3d1[_0x13eee2(0x4b0)]=_0x253db1,_0xe587a5(),_0x546f4d[_0x13eee2(0x74e)](_0x5725b2,_0x546f4d[_0x13eee2(0x2c1)],_0x253db1),_0x546f4d[_0x13eee2(0x5ba)](_0x5725b2,_0x13eee2(0x2fd)+'e',_0x253db1);},[]),_0x15689f(_0x55e602[_0x56dbdd(0x4ce)],_0x56dbdd(0x2f0)+'\x20Reco'+'ilMot'+_0x56dbdd(0x4ca)+_0x56dbdd(0x225)+_0x56dbdd(0x25f)+_0x56dbdd(0x353)+_0x56dbdd(0x553)+'rings'+'\x20neve'+_0x56dbdd(0x210)+_0x56dbdd(0x634),_0x56e3d1[_0x56dbdd(0x3d2)+_0x56dbdd(0x68b)],_0x1fa3ee=>{var _0x1ff1d2=_0x56dbdd;_0x56e3d1['noRec'+'oil']=_0x1fa3ee,_0xe587a5(),_0x546f4d[_0x1ff1d2(0x74e)](_0x5725b2,_0x1ff1d2(0x3d2)+'oil',_0x1fa3ee);},[]),_0x55e602['exvsY'](_0x15689f,_0x56dbdd(0x40f)+_0x56dbdd(0x70f),_0x56dbdd(0x4e6)+_0x56dbdd(0x3e2)+_0x56dbdd(0x495)+_0x56dbdd(0x51f)+'xes\x20a'+'ccura'+'cy\x20on'+'\x20your'+'\x20weap'+_0x56dbdd(0x383)+_0x56dbdd(0x304)+'00ms.',_0x56e3d1[_0x56dbdd(0x339)+_0x56dbdd(0x18c)],_0x260eb6=>{var _0x50e04b=_0x56dbdd,_0xdeadc={'rehYw':_0x50e04b(0x1f1)+_0x50e04b(0x75d)+_0x50e04b(0x570)+'paren'+'t','dgiQV':_0x50e04b(0x5f6)+_0x50e04b(0x59d)+_0x50e04b(0x477)+'s','WEFrC':function(_0x34151b,_0x499972){return _0x34151b===_0x499972;},'jsbHN':function(_0x5de12b,_0x229037){return _0x5de12b<_0x229037;},'TCKvM':_0x50e04b(0x317)};if(_0x55e602['maDEd']!==_0x55e602[_0x50e04b(0x182)])_0x56e3d1[_0x50e04b(0x339)+_0x50e04b(0x18c)]=_0x260eb6,_0xe587a5();else for(var _0x4dd745 of[_0x50e04b(0x1f1)+_0x50e04b(0x62b)+_0x50e04b(0x286)+'-pare'+'nt',_0xdeadc[_0x50e04b(0x5c4)],_0x50e04b(0x1f1)+'io_30'+_0x50e04b(0x37f)+'-pare'+'nt',_0xdeadc['dgiQV']]){var _0xb3a14d=_0x518af0[_0x50e04b(0x33c)+_0x50e04b(0x45c)+_0x50e04b(0x682)](_0x4dd745);if(_0xb3a14d&&_0xdeadc[_0x50e04b(0x325)](_0x4dd745,_0xdeadc[_0x50e04b(0x726)])){var _0xeb328c=_0xb3a14d['child'+'ren'];for(var _0x5776b9=-0x2*0xac0+-0x93f+0x1ebf*0x1;_0xdeadc['jsbHN'](_0x5776b9,_0xeb328c[_0x50e04b(0x696)+'h']);_0x5776b9++){if(_0xeb328c[_0x5776b9]['id']&&_0xeb328c[_0x5776b9]['id'][_0x50e04b(0x29b)+'Of']('kour-'+_0x50e04b(0x1ec))===0x189*0xc+-0x26*0x24+-0x4*0x345)_0xeb328c[_0x5776b9][_0x50e04b(0x3a0)][_0x50e04b(0x426)+'ay']=_0xdeadc[_0x50e04b(0x461)];}}else{if(_0xb3a14d)_0xb3a14d['style']['displ'+'ay']=_0xdeadc['TCKvM'];}}},[]),_0x55e602[_0x56dbdd(0x54f)](_0x15689f,'Rapid'+_0x56dbdd(0x524)+_0x56dbdd(0x2b3)+']',_0x55e602[_0x56dbdd(0x72a)],_0x56e3d1[_0x56dbdd(0x55d)+'Exp'],_0x36b2a9=>{var _0x615f7e=_0x56dbdd;_0x56e3d1[_0x615f7e(0x55d)+_0x615f7e(0x22d)]=_0x36b2a9,_0x55e602['TWrKD'](_0xe587a5);},[]),_0x55e602[_0x56dbdd(0x715)](_0x15689f,_0x55e602['rTRug'],_0x56dbdd(0x74c)+_0x56dbdd(0x4f4)+'\x20Over'+_0x56dbdd(0x70d)+_0x56dbdd(0x3f6)+'\x20dama'+_0x56dbdd(0x559)+'annab'+'le\x20if'+_0x56dbdd(0x22a)+'serve'+'r\x20val'+'idate'+'s.',_0x56e3d1[_0x56dbdd(0x4ff)+_0x56dbdd(0x49e)],_0x604d3f=>{var _0x374631=_0x56dbdd;_0x56e3d1['damag'+'eExp']=_0x604d3f,_0x546f4d[_0x374631(0x2e0)](_0xe587a5);},[_0x477efb(_0x56dbdd(0x37d)+'e\x20val'+'ue',null,_0x55e602['TeCZd'](_0x45e2b9,_0x56e3d1[_0x56dbdd(0x4ff)+_0x56dbdd(0x2d9)+'e'],-0x6*-0x329+0x1e69+-0x1*0x3155,0xc71+-0x1b1+0x8cc*-0x1,0x2*0x1021+-0x2142*0x1+0x1*0x105,_0x14d143=>{var _0x3731ae=_0x56dbdd;_0x56e3d1[_0x3731ae(0x4ff)+_0x3731ae(0x2d9)+'e']=_0x14d143,_0xe587a5();}))]),_0x15689f(_0x56dbdd(0x3f4)+_0x56dbdd(0x3a9)+'mmo\x20['+_0x56dbdd(0x299),'Refil'+'ls\x20th'+_0x56dbdd(0x671)+'pon\x27s'+_0x56dbdd(0x2ca)+_0x56dbdd(0x488)+_0x56dbdd(0x221)+_0x56dbdd(0x28e)+_0x56dbdd(0x471)+'\x20200m'+'s.',_0x56e3d1[_0x56dbdd(0x29e)+_0x56dbdd(0x42c)],_0x37fe56=>{var _0x4cf2ab=_0x56dbdd,_0x1159e4={'FrqDF':function(_0x197528,_0x4ac883){return _0x55e602['MFIaM'](_0x197528,_0x4ac883);},'uSiys':_0x4cf2ab(0x59b)+_0x4cf2ab(0x3cf)+_0x4cf2ab(0x66c)+'7)','HjWnm':'rgba('+_0x4cf2ab(0x2fe)+_0x4cf2ab(0x720)+_0x4cf2ab(0x6e3)+')','WdEda':function(_0x5e2686,_0x538134){return _0x5e2686*_0x538134;},'fAMWG':function(_0x3b38b3,_0x115301){var _0x53f4ba=_0x4cf2ab;return _0x55e602[_0x53f4ba(0x74f)](_0x3b38b3,_0x115301);},'FHeVP':function(_0x278507,_0x2b418e){return _0x278507+_0x2b418e;},'dvFaH':function(_0x22a06b,_0x128953){return _0x22a06b/_0x128953;},'NDDQX':_0x55e602[_0x4cf2ab(0x48e)],'XUyGD':_0x55e602[_0x4cf2ab(0x6a7)],'XjRcS':function(_0x529949,_0x296fe1){return _0x529949+_0x296fe1;}};if(_0x55e602['iNMWy'](_0x4cf2ab(0x236),_0x55e602['vNfLf']))_0x56e3d1['infAm'+_0x4cf2ab(0x42c)]=_0x37fe56,_0x55e602['Oxxga'](_0xe587a5);else{var _0x2af8db=_0x546f4d['TcAVe']['split']('|'),_0x5ccb65=0x18df+0x3a9*-0x1+0x16a*-0xf;while(!![]){switch(_0x2af8db[_0x5ccb65++]){case'0':_0x2d92af(_0x4cf2ab(0x349),_0x546f4d['KSKzA'],_0x546f4d[_0x4cf2ab(0x681)](_0x299fe9,_0x214054)+_0x668f23,_0x3161b8,_0x214054,_0x5a0880,_0x13e396[_0x4cf2ab(0x333)]?_0x3c23d4(0x32f+0x32+-0x1af*0x2)+_0x546f4d[_0x4cf2ab(0x4dc)]:'');continue;case'1':var _0x214054=_0x546f4d[_0x4cf2ab(0x657)](_0x33ec15-_0x668f23,-0x1*-0x1d63+-0x268d+0x92c),_0x3161b8=_0x2984cc+(_0x5a0880+_0x668f23)*(0x2*0xbd+-0x123f+-0x5*-0x35b);continue;case'2':_0x2d92af('',_0x546f4d[_0x4cf2ab(0x719)],_0x299fe9,_0x546f4d[_0x4cf2ab(0x681)](_0x3161b8+_0x5a0880,_0x668f23),_0x33ec15,_0x5a0880*(0x1078+0x142f*0x1+0x355*-0xb+0.45));continue;case'3':var _0x2984cc=_0x46b7d9==='ml'?_0x546f4d[_0x4cf2ab(0x3dd)](_0x546f4d[_0x4cf2ab(0x681)](_0x3ce486[_0x4cf2ab(0x388)],_0x546f4d[_0x4cf2ab(0x657)](_0x15e734['heigh'+'t'],-0x156b+0x193c*0x1+-0x41*0xf)),_0x546f4d[_0x4cf2ab(0x657)](_0x200c78,-0x4*-0x9a9+0xcaf+-0x3351)):_0x546f4d['NDGet'](_0x546f4d[_0x4cf2ab(0x517)](_0x4cd950[_0x4cf2ab(0x375)+'m'],_0x200c78),_0x46b7d9==='bl'?0x1a45+-0x3*-0xba8+-0x3cdd:0x3af+-0x5*-0x34e+0x139f*-0x1);continue;case'4':_0x2d92af('S',_0x4cf2ab(0x384),_0x546f4d[_0x4cf2ab(0x656)](_0x299fe9+_0x5a0880,_0x668f23),_0x546f4d['ZboBR'](_0x2984cc,_0x5a0880)+_0x668f23,_0x5a0880,_0x5a0880);continue;case'5':var _0x33ec15=_0x5a0880*(0x5*-0x377+0x1*-0xd90+0x1ee6)+_0x546f4d[_0x4cf2ab(0x405)](_0x668f23,0x1f75*-0x1+-0x127d+0x31f4),_0x200c78=_0x546f4d[_0x4cf2ab(0x681)](_0x546f4d[_0x4cf2ab(0x405)](_0x5a0880,-0x1c61+-0x18b5+0x3519),_0x668f23*(-0x4c7*0x2+0x146f+-0xadf));continue;case'6':var _0x299fe9=_0x546f4d[_0x4cf2ab(0x4f1)](_0x46b7d9,'br')?_0x546f4d['ywlTK'](_0x546f4d['ywlTK'](_0x722efe[_0x4cf2ab(0x693)],0x21ea+-0x1*0x188c+0x1*-0x94e),_0x33ec15):_0x2c3e15[_0x4cf2ab(0x64b)]+(0x1771+-0x8c5*-0x2+-0x1*0x28eb);continue;case'7':var _0x2d92af=(_0x34d3a2,_0x5394fd,_0x358db9,_0x2e7ffc,_0x16bd9e,_0xe87176,_0x263576)=>{var _0x193d5d=_0x4cf2ab,_0x4df70c=_0x192c88[_0x193d5d(0x194)](_0x5394fd);_0x485004[_0x193d5d(0x34f)](),_0xacf5f3[_0x193d5d(0x6f1)+_0x193d5d(0x180)]();if(_0x57a0c4[_0x193d5d(0x1e3)+_0x193d5d(0x733)])_0x429936['round'+_0x193d5d(0x733)](_0x358db9,_0x2e7ffc,_0x16bd9e,_0xe87176,_0x1159e4['FrqDF'](-0x1938+0x1063+0x8dc,_0x359a99));else _0x42b946[_0x193d5d(0x3cc)](_0x358db9,_0x2e7ffc,_0x16bd9e,_0xe87176);_0x15372e[_0x193d5d(0x2d4)+'tyle']=_0x4df70c?'rgba('+'255,1'+_0x193d5d(0x313)+_0x193d5d(0x4d8)+'5)':_0x1159e4[_0x193d5d(0x688)],_0x4183c9[_0x193d5d(0x4d5)](),_0x12e255[_0x193d5d(0x5f9)+_0x193d5d(0x69b)]=-0x1745+0x190*0x10+-0x1ba,_0x5a24fc[_0x193d5d(0x55c)+_0x193d5d(0x735)+'e']=_0x4df70c?_0x2c03c7:'rgba('+_0x193d5d(0x1a8)+_0x193d5d(0x313)+_0x193d5d(0x2cd)+'5)',_0x4c9410[_0x193d5d(0x55c)+'e'](),_0x4df70c&&(_0x39b9a7['shado'+'wColo'+'r']=_0x1ed7bc,_0x37cd8a[_0x193d5d(0x20e)+_0x193d5d(0x73c)]=-0xf4*-0x13+0x24eb+-0x36f9,_0xb8a6b9[_0x193d5d(0x4d5)](),_0x43c8cf[_0x193d5d(0x20e)+_0x193d5d(0x73c)]=-0x1*-0x176e+-0xc6b+0xb03*-0x1),_0x32578d[_0x193d5d(0x2d4)+_0x193d5d(0x4a1)]=_0x4df70c?_0x193d5d(0x70e):_0x1159e4[_0x193d5d(0x489)],_0x5e3c45[_0x193d5d(0x6df)+'lign']='cente'+'r',_0x2779d5[_0x193d5d(0x361)+_0x193d5d(0x674)+'ne']=_0x193d5d(0x539)+'e',_0x24e775['font']='700\x20'+_0x5451ae[_0x193d5d(0x1e3)](_0x1159e4[_0x193d5d(0x2f6)](0x1592*0x1+-0xf*0x13+-0x1469,_0x359a99))+('px\x20ui'+'-sans'+'-seri'+_0x193d5d(0x4b8)+_0x193d5d(0x4ef)+_0x193d5d(0x68d)+_0x193d5d(0x716)+'if'),_0x2bbfcb['fillT'+_0x193d5d(0x238)](_0x34d3a2,_0x358db9+_0x16bd9e/(0x1160+0x10f7+-0x2255),_0x1159e4['fAMWG'](_0x1159e4['FHeVP'](_0x2e7ffc,_0x1159e4[_0x193d5d(0x566)](_0xe87176,-0xff4+0xd56+0x2a0)),_0x263576?_0x1159e4['WdEda'](0x1779+-0x12*0x127+-0x15b*0x2,_0x359a99):-0x6a9+-0x1659+-0x4f*-0x5e)),_0x263576&&(_0x55edad[_0x193d5d(0x6ad)]=_0x1159e4[_0x193d5d(0x4ae)](_0x193d5d(0x725),_0x574ce3[_0x193d5d(0x1e3)]((0xd84+0x13d6+-0x2151)*_0x359a99))+_0x1159e4['NDDQX'],_0x1aca0f[_0x193d5d(0x2d4)+'tyle']=_0x4df70c?_0x193d5d(0x70e):_0x1159e4[_0x193d5d(0x37a)],_0x3204ab[_0x193d5d(0x462)+_0x193d5d(0x238)](_0x263576,_0x358db9+_0x16bd9e/(-0x77*-0x1d+-0x4a*0x65+0xfb9),_0x1159e4[_0x193d5d(0x34b)](_0x2e7ffc,_0xe87176/(-0x226a+0x10a6*-0x1+0x3312))+_0x1159e4[_0x193d5d(0x2f6)](-0x2485+0x5*0x2b3+-0x1*-0x170e,_0x359a99))),_0x10984a['resto'+'re']();};continue;case'8':_0x2d92af('W',_0x546f4d['BGGqu'],_0x299fe9+_0x5a0880+_0x668f23,_0x2984cc,_0x5a0880,_0x5a0880);continue;case'9':var _0x359a99=_0x5c0d21(_0x25355f['ksSca'+'le'])||-0xb8b+-0x1*0x2605+0x3191,_0x5a0880=_0x546f4d[_0x4cf2ab(0x213)](0xa93+0x163b+-0x20ac,_0x359a99),_0x668f23=(-0xae7*0x3+-0x146a+0x3523)*_0x359a99;continue;case'10':_0x2d92af('A',_0x4cf2ab(0x413),_0x299fe9,_0x2984cc+_0x5a0880+_0x668f23,_0x5a0880,_0x5a0880);continue;case'11':var _0x46b7d9=_0x126bae['ksPos'];continue;case'12':_0x2d92af(_0x546f4d[_0x4cf2ab(0x71c)],_0x546f4d[_0x4cf2ab(0x588)],_0x299fe9,_0x3161b8,_0x214054,_0x5a0880,_0x4f2188[_0x4cf2ab(0x333)]?_0x546f4d['ohJsH'](_0x546f4d['snZWo'](_0x41438c,0x13db*0x1+0x556+-0x1f*0xd0),'\x20CPS'):'');continue;case'13':_0x2d92af('D',_0x4cf2ab(0x44e),_0x299fe9+_0x546f4d[_0x4cf2ab(0x656)](_0x5a0880,_0x668f23)*(0x1422+0x17*0x32+-0x189e),_0x546f4d[_0x4cf2ab(0x3d9)](_0x2984cc,_0x5a0880)+_0x668f23,_0x5a0880,_0x5a0880);continue;}break;}}},[_0x55e602['WwxnS'](_0x4849bb,_0x55e602[_0x56dbdd(0x5d0)])])];}if(_0x245782==='move')return[_0x15689f(_0x55e602[_0x56dbdd(0x189)],_0x55e602[_0x56dbdd(0x324)],_0x56e3d1['speed'+'Pct']!==-0x829+-0x1429+0x1cb6,null,[_0x55e602[_0x56dbdd(0x554)](_0x477efb,_0x56dbdd(0x3e7)+'\x20%',_0x56dbdd(0x6e2)+_0x56dbdd(0x389)+_0x56dbdd(0x532),_0x45e2b9(_0x56e3d1[_0x56dbdd(0x667)+_0x56dbdd(0x505)],0x1*0x2405+-0x2*0x4e4+-0x1a0b,-0x329*0x9+0x115a+0xc43,0x1b*0x29+0x21a5+-0x25f3,_0x4b6f77=>{var _0x366f32=_0x56dbdd;_0x56e3d1[_0x366f32(0x667)+'Pct']=_0x4b6f77,_0x55e602['qEBPT'](_0xe587a5);}))]),_0x15689f(_0x55e602['HtHqd'],_0x56dbdd(0x732)+_0x56dbdd(0x5c6)+_0x56dbdd(0x45c)+_0x56dbdd(0x1a6)+_0x56dbdd(0x52a)+_0x56dbdd(0x6e6)+_0x56dbdd(0x1d1)+'gravi'+_0x56dbdd(0x5e1)+_0x56dbdd(0x63c),_0x56e3d1[_0x56dbdd(0x6fa)+'ct']!==0x1*0x25e9+0x71e+-0x2ca3*0x1||_0x56e3d1[_0x56dbdd(0x2c2)+_0x56dbdd(0x207)]!==-0xc21+0x196a+-0xce5,null,[_0x477efb(_0x56dbdd(0x487)+'%',null,_0x45e2b9(_0x56e3d1['jumpP'+'ct'],0x23da+-0x10fe+-0x12aa*0x1,0xb9*-0x21+0x11cc+-0x1*-0x739,-0x1*0x9c3+-0x2a*0xc7+0x2a6e,_0x3dbefe=>{_0x56e3d1['jumpP'+'ct']=_0x3dbefe,_0xe587a5();})),_0x477efb(_0x55e602[_0x56dbdd(0x2ad)],'lower'+_0x56dbdd(0x4ac)+_0x56dbdd(0x510),_0x45e2b9(_0x56e3d1[_0x56dbdd(0x2c2)+_0x56dbdd(0x207)],-0x1b07+0xc8+0x1a49,0x5*-0x34+0x7e8*0x2+-0xe04,0x6b+0x5ac*-0x1+0x546,_0x20e6e7=>{var _0x14256e=_0x56dbdd;_0x56e3d1[_0x14256e(0x2c2)+'tyPct']=_0x20e6e7,_0x546f4d['okcWc'](_0xe587a5);}))]),_0x15689f(_0x56dbdd(0x1c6)+_0x56dbdd(0x530),'Zeroe'+_0x56dbdd(0x5c6)+'ement'+_0x56dbdd(0x2ba)+'JumpT'+_0x56dbdd(0x498)+_0x56dbdd(0x25f)+'\x20jump'+_0x56dbdd(0x234)+_0x56dbdd(0x458)+_0x56dbdd(0x636)+'\x20appl'+_0x56dbdd(0x4dd),_0x56e3d1['bhop'],_0x5077eb=>{var _0x583e07=_0x56dbdd;_0x56e3d1[_0x583e07(0x30b)]=_0x5077eb,_0x55e602['qEBPT'](_0xe587a5);},[])];if(_0x245782===_0x55e602[_0x56dbdd(0x5bf)]){if('ReHhM'===_0x55e602[_0x56dbdd(0x6fe)]){var _0x4d635d=new _0x59d486(_0x202882)['readF'+'ield'](_0x451e36,_0x1e6417);_0x319012[_0x56dbdd(0x567)](_0x3ac818,_0x4d635d!==_0x3298b3?_0x4d635d['val']():null);}else return[_0x55e602[_0x56dbdd(0x3b9)](_0x15689f,_0x55e602[_0x56dbdd(0x193)],_0x55e602['ksKAj'],_0x56e3d1[_0x56dbdd(0x587)+_0x56dbdd(0x557)],_0xd59a3d=>{var _0x537d85=_0x56dbdd;if(_0x55e602[_0x537d85(0x228)](_0x537d85(0x4b3),_0x55e602[_0x537d85(0x54e)]))_0x56e3d1[_0x537d85(0x587)+'rokes']=_0xd59a3d,_0x55e602[_0x537d85(0x5e8)](_0xe587a5);else{if(_0x50a4f5[_0x22fa03]&&_0x1df014[_0x1318ba]['appli'+'ed'])_0x33b054++;}},[_0x55e602[_0x56dbdd(0x554)](_0x477efb,_0x56dbdd(0x508)+_0x56dbdd(0x420),null,_0x217051(_0x56e3d1['ksPos'],[['bl',_0x56dbdd(0x403)+'m\x20lef'+'t'],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x56dbdd(0x56b)+'middl'+'e']],_0xc769a5=>{var _0x582d0a=_0x56dbdd;_0x56e3d1[_0x582d0a(0x1de)]=_0xc769a5,_0x546f4d[_0x582d0a(0x1f5)](_0xe587a5);})),_0x55e602['YgRHe'](_0x477efb,'Size',null,_0x55e602['nDhzb'](_0x45e2b9,_0x56e3d1[_0x56dbdd(0x302)+'le'],0x4c9+0x80c+0xcd5*-0x1+0.6,0x1e93+-0xbaa+-0x12e8+0.6000000000000001,-0x72*-0x19+0x1*-0x433+0x5*-0x163+0.05,_0x58d215=>{var _0x499eff=_0x56dbdd;_0x56e3d1['ksSca'+'le']=_0x58d215,_0x546f4d[_0x499eff(0x49f)](_0xe587a5);})),_0x55e602[_0x56dbdd(0x554)](_0x477efb,_0x55e602[_0x56dbdd(0x512)],null,_0x30fb81(_0x56e3d1['ksCps'],_0x5bd58c=>{var _0x2986d4=_0x56dbdd,_0x15b164={'llNPn':function(_0x2ff392,_0x3fe1b4){return _0x2ff392===_0x3fe1b4;},'DagIi':_0x546f4d[_0x2986d4(0x327)],'itoMY':function(_0x1ea6d5){return _0x546f4d['hVBPx'](_0x1ea6d5);}};_0x546f4d[_0x2986d4(0x4f1)](_0x546f4d['KRCRH'],'lQGVs')?(_0x56e3d1[_0x2986d4(0x333)]=_0x5bd58c,_0xe587a5()):_0x15b164[_0x2986d4(0x3d8)](_0x49c1f5[_0x2986d4(0x197)],_0x15b164[_0x2986d4(0x6ba)])&&(_0x5523ff['preve'+_0x2986d4(0x75c)+'ault'](),_0x15b164[_0x2986d4(0x23d)](_0x20b055));}))]),_0x55e602['kLCEX'](_0x15689f,_0x56dbdd(0x6d4)+'hair',_0x56dbdd(0x612)+_0x56dbdd(0x310)+_0x56dbdd(0x3ea)+_0x56dbdd(0x704)+'air.',_0x56e3d1['cross'+_0x56dbdd(0x640)],_0x37c5d3=>{var _0x17ce05=_0x56dbdd;_0x56e3d1[_0x17ce05(0x2b6)+_0x17ce05(0x640)]=_0x37c5d3,_0x55e602['UbinA'](_0xe587a5);},[_0x477efb('Size',null,_0x55e602['nDhzb'](_0x45e2b9,_0x56e3d1[_0x56dbdd(0x3db)+'e'],0xe26+0x35+0x1*-0xe5b+0.5,-0xdd+0x26e*0x10+-0x17*0x1a7+0.5,-0xb5*0x16+0x221+0xd6d+0.1,_0x528676=>{var _0x48bdf3=_0x56dbdd;_0x56e3d1[_0x48bdf3(0x3db)+'e']=_0x528676,_0x55e602['Levmq'](_0xe587a5);})),_0x55e602['dHFNX'](_0x477efb,_0x56dbdd(0x24b),null,_0x55e602[_0x56dbdd(0x3a8)](_0x38b751,_0x56e3d1[_0x56dbdd(0x3ec)+'or'],_0x44a486=>{var _0x2536e2=_0x56dbdd;if(_0x2536e2(0x411)===_0x55e602[_0x2536e2(0x698)])_0x56e3d1[_0x2536e2(0x3ec)+'or']=_0x44a486,_0x55e602[_0x2536e2(0x576)](_0xe587a5);else try{new _0x583d58(_0x2a62a4)[_0x2536e2(0x659)+'Field'](_0x5b678c,_0x597ea9,_0x4cd3af);}catch(_0x15d7ae){}}))]),_0x55e602['TeCZd'](_0x15689f,_0x55e602['fgnBR'],_0x55e602[_0x56dbdd(0x1a3)],_0x56e3d1['fps'],null,[_0x55e602['YgRHe'](_0x477efb,'FPS\x20c'+_0x56dbdd(0x67d)+'r',null,_0x55e602['Wiuqk'](_0x30fb81,_0x56e3d1['fps'],_0x5ce93a=>{var _0x3b2c7a=_0x56dbdd;_0x56e3d1[_0x3b2c7a(0x57e)]=_0x5ce93a,_0xe587a5();})),_0x55e602[_0x56dbdd(0x5bd)](_0x4849bb,'No\x20en'+_0x56dbdd(0x21c)+_0x56dbdd(0x67d)+_0x56dbdd(0x3b2)+'is\x20bu'+_0x56dbdd(0x1f7)+_0x56dbdd(0x275)+_0x56dbdd(0x507)+'isibl'+'ePlay'+_0x56dbdd(0x5a7)+'o\x20pig'+_0x56dbdd(0x2e5)+'k\x20on.')])];}if(_0x245782===_0x55e602[_0x56dbdd(0x19e)])return[_0x55e602[_0x56dbdd(0x4d3)](_0x15689f,_0x55e602[_0x56dbdd(0x5a9)],_0x55e602[_0x56dbdd(0x739)],_0x56e3d1['adblo'+'ck'],_0x433a6e=>{var _0x28a8ec=_0x56dbdd,_0x5d14cd={'jADcR':function(_0x284326,_0x593dde){return _0x284326===_0x593dde;}};if('aOrBz'===_0x546f4d[_0x28a8ec(0x284)])_0x56e3d1[_0x28a8ec(0x1b3)+'ck']=_0x433a6e,_0x546f4d['EWYcG'](_0xe587a5);else{if(_0x536530[_0x5c6308]['id']&&_0x5d14cd['jADcR'](_0x862a02[_0xb58893]['id']['index'+'Of'](_0x28a8ec(0x1f1)+_0x28a8ec(0x1ec)),-0x116*0x1+-0x249e+0x96d*0x4))_0x1e03a6[_0x2fc9a6][_0x28a8ec(0x3a0)]['displ'+'ay']=_0x28a8ec(0x317);}},[_0x55e602[_0x56dbdd(0x731)](_0x4849bb,_0x56dbdd(0x33e)+_0x56dbdd(0x6fc)+'ct\x20on'+'\x20relo'+_0x56dbdd(0x21a)+_0x56dbdd(0x396)+'ggled'+'.')])];return[_0x55e602[_0x56dbdd(0x715)](_0x15689f,_0x55e602['GatXo'],_0x56dbdd(0x2f0)+'\x20UWMK'+'\x20enti'+_0x56dbdd(0x709)+_0x56dbdd(0x500)+_0x56dbdd(0x18f)+'hooks'+'.\x20Use'+_0x56dbdd(0x57f)+_0x56dbdd(0x367)+'atche'+_0x56dbdd(0x1a7)+_0x56dbdd(0x5d8)+_0x56dbdd(0x3e4),_0x56e3d1[_0x56dbdd(0x357)+'ode'],_0x3e2d38=>{_0x56e3d1['safeM'+'ode']=_0x3e2d38,_0xe587a5(),location['reloa'+'d']();},[_0x55e602[_0x56dbdd(0x5bd)](_0x4849bb,'Appli'+'es\x20on'+'\x20relo'+_0x56dbdd(0x661)+_0x56dbdd(0x447)+_0x56dbdd(0x6b7)+'load\x20'+_0x56dbdd(0x418)+'fe\x20mo'+_0x56dbdd(0x6ef)+_0x56dbdd(0x2b2)+_0x56dbdd(0x39f)+_0x56dbdd(0x355)+'ok-re'+_0x56dbdd(0x597)+_0x56dbdd(0x4f0)+_0x56dbdd(0x34e)+_0x56dbdd(0x22a)+'hooks'+_0x56dbdd(0x66d)+_0x56dbdd(0x5da)+_0x56dbdd(0x212))]),_0x15689f(_0x56dbdd(0x585)+_0x56dbdd(0x1c4)+_0x56dbdd(0x621)+_0x56dbdd(0x54a),_0x56dbdd(0x33b)+_0x56dbdd(0x55f)+_0x56dbdd(0x47d)+'ls\x20a\x20'+_0x56dbdd(0x18f)+'tramp'+_0x56dbdd(0x496)+'\x20for\x20'+_0x56dbdd(0x4a6)+_0x56dbdd(0x269)+_0x56dbdd(0x601)+'load.'+_0x56dbdd(0x19c)+_0x56dbdd(0x282)+'y\x20def'+'ault\x20'+'-\x20a\x20s'+_0x56dbdd(0x1b1)+'ure\x20t'+_0x56dbdd(0x326)+_0x56dbdd(0x568)+_0x56dbdd(0x755)+'tch\x20t'+_0x56dbdd(0x686)+_0x56dbdd(0x6f4)+_0x56dbdd(0x47a)+'throw'+'s\x20\x27fu'+_0x56dbdd(0x346)+'n\x20sig'+_0x56dbdd(0x19a)+_0x56dbdd(0x380)+_0x56dbdd(0x4b7)+'\x27\x20the'+'\x20mome'+_0x56dbdd(0x62f)+'\x20is\x20c'+_0x56dbdd(0x335)+'.\x20Tur'+_0x56dbdd(0x4b4)+'m\x20on\x20'+'one\x20a'+_0x56dbdd(0x51c)+_0x56dbdd(0x19d)+'reloa'+_0x56dbdd(0x550)+'d\x20see'+_0x56dbdd(0x71b)+_0x56dbdd(0x51e)+_0x56dbdd(0x4af)+'\x20buil'+_0x56dbdd(0x3ca)+_0x56dbdd(0x33f)+'n.',_0x56e3d1[_0x56dbdd(0x296)+'od']||_0x56e3d1[_0x56dbdd(0x296)+'odDie']||_0x56e3d1[_0x56dbdd(0x293)+_0x56dbdd(0x255)+'il']||_0x56e3d1['hookC'+_0x56dbdd(0x2f7)+'e'],_0x55e198=>{var _0xf74049=_0x56dbdd,_0x371c89=_0x55e602[_0xf74049(0x5f7)]['split']('|'),_0x4fe565=-0x4*-0x6a7+-0xffd+-0xa9f*0x1;while(!![]){switch(_0x371c89[_0x4fe565++]){case'0':_0x56e3d1[_0xf74049(0x296)+'od']=_0x55e198;continue;case'1':_0x56e3d1[_0xf74049(0x296)+_0xf74049(0x6c4)]=_0x55e198;continue;case'2':_0x55e602[_0xf74049(0x60f)](_0xe587a5);continue;case'3':_0x56e3d1[_0xf74049(0x293)+_0xf74049(0x255)+'il']=_0x55e198;continue;case'4':_0x56e3d1[_0xf74049(0x3a5)+_0xf74049(0x2f7)+'e']=_0x55e198;continue;case'5':location[_0xf74049(0x2e9)+'d']();continue;}break;}},[_0x55e602['hnfOe'](_0x4849bb,_0x56dbdd(0x497)+'es\x20on'+'\x20relo'+_0x56dbdd(0x20a)),_0x477efb(_0x55e602[_0x56dbdd(0x42b)],null,_0x30fb81(_0x56e3d1['hookG'+'od'],_0x3cead8=>{var _0x473ca2=_0x56dbdd;_0x56e3d1[_0x473ca2(0x296)+'od']=_0x3cead8,_0xe587a5();})),_0x477efb(_0x56dbdd(0x2fd)+_0x56dbdd(0x2da)+'ealth'+_0x56dbdd(0x551)+'lDie)',null,_0x55e602['Wiuqk'](_0x30fb81,_0x56e3d1[_0x56dbdd(0x296)+_0x56dbdd(0x6c4)],_0x448f7d=>{var _0x12ef78=_0x56dbdd;_0x546f4d['yLBVM'](_0x546f4d[_0x12ef78(0x25e)],_0x12ef78(0x303))?(_0x56e3d1['hookG'+_0x12ef78(0x6c4)]=_0x448f7d,_0xe587a5()):_0x5742c3=_0x257aca&&_0x45a7b4[_0x12ef78(0x743)]?_0x5f4f8a[_0x12ef78(0x743)]():0x1fac+-0x1f2a+0xd*-0xa;})),_0x477efb('noRec'+_0x56dbdd(0x702)+_0x56dbdd(0x3c5)+'lMoti'+_0x56dbdd(0x611)+'ck)',null,_0x55e602['ChAhC'](_0x30fb81,_0x56e3d1['hookN'+_0x56dbdd(0x255)+'il'],_0x141f8a=>{var _0x5ad8b4=_0x56dbdd,_0x4574a1={'SiIBC':'--p','tqYrD':function(_0xa36d0c,_0x42bc5f){return _0xa36d0c/_0x42bc5f;}};_0x55e602[_0x5ad8b4(0x219)](_0x5ad8b4(0x556),'pnWNp')?(_0x9c5c94[_0x5ad8b4(0x6d1)+'onten'+'t']=_0x13389d(_0x17a6e2[_0x5ad8b4(0x4c1)]),_0x45ee9c[_0x5ad8b4(0x3a0)][_0x5ad8b4(0x43c)+_0x5ad8b4(0x721)+'y'](_0x4574a1[_0x5ad8b4(0x61c)],_0x4574a1[_0x5ad8b4(0x3c3)](_0x282eb9[_0x5ad8b4(0x4c1)]-_0x3df313,_0xcda47e-_0xa60d35)*(-0x1aa2+0x1*0xd22+0xde4)+'%')):(_0x56e3d1[_0x5ad8b4(0x293)+'oReco'+'il']=_0x141f8a,_0x55e602[_0x5ad8b4(0x60f)](_0xe587a5));})),_0x477efb('captu'+_0x56dbdd(0x552)+_0x56dbdd(0x6b4)+_0x56dbdd(0x5d2)+_0x56dbdd(0x547)+'\x20IsGr'+'ounde'+'d)','no\x20ch'+_0x56dbdd(0x23f)+_0x56dbdd(0x2d6)+_0x56dbdd(0x618)+_0x56dbdd(0x4e3)+'is',_0x30fb81(_0x56e3d1['hookC'+_0x56dbdd(0x2f7)+'e'],_0x21c595=>{var _0x287e3d=_0x56dbdd;_0x56e3d1['hookC'+_0x287e3d(0x2f7)+'e']=_0x21c595,_0x546f4d['YMhTA'](_0xe587a5);}))]),_0x55e602[_0x56dbdd(0x3b9)](_0x15689f,_0x56dbdd(0x632)+'Kille'+'r',_0x56dbdd(0x2b0)+_0x56dbdd(0x395)+_0x56dbdd(0x2e8)+'age\x20d'+'etect'+_0x56dbdd(0x5d9)+_0x56dbdd(0x444)+_0x56dbdd(0x41d)+_0x56dbdd(0x6f8)+_0x56dbdd(0x237)+'tecti'+_0x56dbdd(0x377)+_0x56dbdd(0x558)+_0x56dbdd(0x3a4),_0x56e3d1[_0x56dbdd(0x4d6)+'ill'],_0x248ec5=>{var _0x9a6b77=_0x56dbdd;_0x56e3d1[_0x9a6b77(0x4d6)+_0x9a6b77(0x6ee)]=_0x248ec5,_0xe587a5();},[_0x4849bb(_0x56dbdd(0x4e7)+'amage'+'/rapi'+_0x56dbdd(0x5d4)+'atly\x20'+_0x56dbdd(0x690)+_0x56dbdd(0x56e)+_0x56dbdd(0x1c4)+_0x56dbdd(0x2e6)+_0x56dbdd(0x68f)+'this\x20'+_0x56dbdd(0x4cc),!![])]),_0x15689f('Dange'+'r',_0x56dbdd(0x25d)+_0x56dbdd(0x6ac)+'e\x20ser'+_0x56dbdd(0x6e8)+'isibl'+_0x56dbdd(0x528)+'ces.',!![],null,[_0x477efb(_0x55e602[_0x56dbdd(0x1aa)],null,_0x2ec362(_0x55e602['eXnrd'],()=>{var _0x28521c=_0x56dbdd;_0x56e3d1={..._0x5bb5ba},_0xe587a5(),location[_0x28521c(0x2e9)+'d']();}))])];}var _0x2c0b94=null;function _0x1a40ad(_0x1df589){var _0x2aa953=_0x3a5ce3;_0x1483b6=_0x1df589;if(!_0x2c0b94){var _0x220e47=('2|1|0'+_0x2aa953(0x6a1)+'5')[_0x2aa953(0x20c)]('|'),_0x305cb5=-0x7*-0xc7+-0x1657*-0x1+-0x1bc8;while(!![]){switch(_0x220e47[_0x305cb5++]){case'0':_0x43d9d9['appen'+_0x2aa953(0x591)+'d'](_0x479e15);continue;case'1':_0x479e15[_0x2aa953(0x6d1)+'onten'+'t']=_0x3e3e65;continue;case'2':var _0x479e15=document[_0x2aa953(0x6db)+'eElem'+'ent'](_0x456932[_0x2aa953(0x345)]);continue;case'3':_0x43d9d9[_0x2aa953(0x18a)+_0x2aa953(0x591)+'d'](_0x2c0b94);continue;case'4':_0x2c0b94=_0x456932['ERAWu'](_0x4e6c7b);continue;case'5':requestAnimationFrame(()=>_0x2c0b94['class'+_0x2aa953(0x482)][_0x2aa953(0x4bd)](_0x2aa953(0x63a)));continue;}break;}}_0x2c0b94[_0x2aa953(0x59f)+'List'][_0x2aa953(0x2c7)+'e'](_0x456932['WHriY'],_0x1df589);}function _0x11da6f(){_0x1a40ad(!_0x1483b6);}function _0x4e6c7b(){var _0x185647=_0x3a5ce3,_0x4efdf5={'GNTGU':_0x185647(0x59b)+'255,2'+'35,24'+_0x185647(0x494)+'5)','RSKlh':function(_0xfb10df,_0x5b672f){return _0x456932['SRNiD'](_0xfb10df,_0x5b672f);},'cqWQt':_0x456932['MwrZL'],'qRjnF':_0x185647(0x6eb),'RqlyZ':function(_0x23d147,_0x2f64fc){return _0x456932['SdNYz'](_0x23d147,_0x2f64fc);},'mAFsf':function(_0x5f4872,_0x54d4ce){return _0x5f4872+_0x54d4ce;},'zQUez':function(_0x2a7bcc,_0x3dcab6){return _0x2a7bcc+_0x3dcab6;},'OPZBP':function(_0x8fe726,_0x4d1858){var _0xab49c=_0x185647;return _0x456932[_0xab49c(0x291)](_0x8fe726,_0x4d1858);},'gfSvH':'\x20|\x20ga'+'me\x20','pKIKu':'\x20|\x20sh'+_0x185647(0x513)+'\x20','PuUHI':'held','tNpZR':_0x185647(0x317)},_0x50a012=document[_0x185647(0x6db)+'eElem'+_0x185647(0x665)](_0x456932['VMjdo']);_0x50a012['class'+_0x185647(0x41a)]=_0x456932['kaIIT'];var _0x5a16dc=document['creat'+'eElem'+_0x185647(0x665)](_0x456932[_0x185647(0x5f2)]);_0x5a16dc[_0x185647(0x59f)+_0x185647(0x41a)]='mn-si'+'de';var _0x599d7e=document['creat'+_0x185647(0x5d7)+'ent'](_0x185647(0x449));_0x599d7e['class'+'Name']=_0x185647(0x54b)+'go',_0x599d7e['inner'+_0x185647(0x45f)]='<svg\x20'+_0x185647(0x4a7)+_0x185647(0x356)+'\x200\x2024'+_0x185647(0x689)+'class'+_0x185647(0x435)+'logo-'+'svg\x22>'+'<path'+_0x185647(0x4a2)+_0x185647(0x31a)+_0x185647(0x760)+_0x185647(0x628)+_0x185647(0x738)+_0x185647(0x32f)+_0x185647(0x38e)+'.5\x201.'+'8-4.5'+_0x185647(0x1d4)+_0x185647(0x3c9)+_0x185647(0x486)+_0x185647(0x373)+_0x185647(0x58c)+'5-4\x207'+_0x185647(0x4bf)+'fill='+'\x22none'+_0x185647(0x35e)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x185647(0x531)+'-widt'+_0x185647(0x217)+'\x20stro'+_0x185647(0x6fb)+'necap'+_0x185647(0x19b)+'nd\x22\x20s'+_0x185647(0x531)+'-line'+'join='+_0x185647(0x3c4)+'d\x22/><'+'circl'+'e\x20cx='+'\x2212\x22\x20'+'cy=\x221'+_0x185647(0x323)+'\x221.5\x22'+_0x185647(0x6c8)+_0x185647(0x23c)+'6b9d\x22'+_0x185647(0x17b)+_0x185647(0x57d),_0x5a16dc[_0x185647(0x18a)+'dChil'+'d'](_0x599d7e);var _0x24988e=document[_0x185647(0x6db)+'eElem'+_0x185647(0x665)](_0x185647(0x449));_0x24988e['class'+_0x185647(0x41a)]=_0x456932['Nganq'];var _0x3aec38=document['creat'+_0x185647(0x5d7)+_0x185647(0x665)](_0x456932['ZypRm']);_0x3aec38[_0x185647(0x59f)+_0x185647(0x41a)]=_0x456932[_0x185647(0x1f8)];var _0x2740b=document[_0x185647(0x6db)+_0x185647(0x5d7)+'ent'](_0x456932[_0x185647(0x266)]);_0x2740b[_0x185647(0x59f)+'Name']=_0x456932[_0x185647(0x4f3)];var _0x1ca63b=document[_0x185647(0x6db)+_0x185647(0x5d7)+_0x185647(0x665)]('h2');_0x1ca63b['class'+_0x185647(0x41a)]='mn-h',_0x1ca63b['textC'+'onten'+'t']=_0x185647(0x59c)+_0x185647(0x678)+'r';var _0x3f0dc5=document['creat'+_0x185647(0x5d7)+_0x185647(0x665)](_0x456932[_0x185647(0x6b5)]);_0x3f0dc5['class'+_0x185647(0x41a)]=_0x185647(0x32e)+'b',_0x3f0dc5['textC'+'onten'+'t']=_0x456932['VvUsj'],_0x2740b['appen'+'d'](_0x1ca63b,_0x3f0dc5);var _0x560326=document[_0x185647(0x6db)+'eElem'+_0x185647(0x665)](_0x456932[_0x185647(0x1b9)]);_0x560326[_0x185647(0x52e)]=_0x456932['sUmxU'],_0x560326['class'+_0x185647(0x41a)]=_0x456932[_0x185647(0x48f)],_0x560326[_0x185647(0x44b)]=_0x185647(0x491),_0x560326['inner'+_0x185647(0x45f)]=_0x185647(0x592)+'viewB'+_0x185647(0x356)+_0x185647(0x3a1)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+_0x185647(0x1d8)+_0x185647(0x1b7)+_0x185647(0x17b)+_0x185647(0x57d),_0x560326[_0x185647(0x2af)+'ck']=()=>_0x1a40ad(![]),_0x3aec38[_0x185647(0x18a)+'d'](_0x2740b,_0x560326);var _0x3a7742=document['creat'+'eElem'+_0x185647(0x665)](_0x185647(0x449));_0x3a7742[_0x185647(0x59f)+'Name']=_0x185647(0x647)+'ls',_0x24988e[_0x185647(0x18a)+'d'](_0x3aec38,_0x3a7742),_0x50a012['appen'+'d'](_0x5a16dc,_0x24988e);var _0x425a1a=new Map();for(var _0x57daf7 of _0x27de39){var _0x5774f7=document[_0x185647(0x6db)+_0x185647(0x5d7)+'ent'](_0x185647(0x34c)+'n');_0x5774f7['type']=_0x456932['sUmxU'],_0x5774f7[_0x185647(0x59f)+_0x185647(0x41a)]='mn-ta'+'b',_0x5774f7[_0x185647(0x44b)]=_0x57daf7[_0x185647(0x469)],_0x5774f7['inner'+'HTML']=_0x456932['LnvxJ'](_0x456932['KlOkN']+_0x57daf7['label'],'</sma'+'ll>'),_0x5774f7[_0x185647(0x2af)+'ck']=(_0x1089d0=>()=>_0x147af9(_0x1089d0))(_0x57daf7['id']),_0x425a1a['set'](_0x57daf7['id'],_0x5774f7),_0x5a16dc[_0x185647(0x18a)+_0x185647(0x591)+'d'](_0x5774f7);}function _0x147af9(_0x2f3725){var _0x33c85f=_0x185647;_0x4e8cfa[_0x33c85f(0x662)]=_0x2f3725,_0x2922a8();var _0xd7d541=_0x27de39['find'](_0x443844=>_0x443844['id']===_0x2f3725)||_0x27de39[-0x1f2f+0xeeb+0x15b*0xc];_0x1ca63b[_0x33c85f(0x6d1)+'onten'+'t']=_0x33c85f(0x59c)+_0x33c85f(0x678)+_0x33c85f(0x736)+_0xd7d541['label'];for(var [_0xdd3bb4,_0x378af7]of _0x425a1a)_0x378af7['class'+_0x33c85f(0x482)][_0x33c85f(0x2c7)+'e'](_0x55e602[_0x33c85f(0x385)],_0x55e602['Qtejg'](_0xdd3bb4,_0x2f3725));_0x3a7742[_0x33c85f(0x64e)+'ceChi'+_0x33c85f(0x703)](..._0x16af1b(_0x2f3725));}return _0x147af9(_0x4e8cfa[_0x185647(0x662)]||_0x456932['Unqys']),setInterval(()=>{var _0x156f32=_0x185647,_0x1aed36={'DBPEm':function(_0x3b63d0,_0x1e2656){return _0x3b63d0+_0x1e2656;},'JGOUh':_0x4efdf5['GNTGU'],'ZAoTf':function(_0x319664,_0x2d2f57){return _0x4efdf5['RSKlh'](_0x319664,_0x2d2f57);}};if(_0x4efdf5[_0x156f32(0x6c1)]!=='wpzgs')_0xadc823['font']=_0x1aed36['DBPEm'](_0x156f32(0x725)+_0x5dc7b9['round']((-0x1b7a+0x22a0+-0x71d)*_0x4b88ab),'px\x20ui'+_0x156f32(0x354)+_0x156f32(0x3ac)+_0x156f32(0x4b8)+'tem-u'+_0x156f32(0x68d)+_0x156f32(0x716)+'if'),_0x2f5954[_0x156f32(0x2d4)+_0x156f32(0x4a1)]=_0x563cef?_0x156f32(0x70e):_0x1aed36['JGOUh'],_0x5b7007['fillT'+_0x156f32(0x238)](_0x3c1ffe,_0xbe6a45+_0xc456da/(-0xd50+0x1623+-0x8d1),_0x3f5f9b+_0x1aed36[_0x156f32(0x542)](_0x4f98ad,-0x3b*0x74+-0x1792+0x8*0x64a)+(0x1*-0x26b7+-0x1d3e+0x43fd)*_0x183dda);else{if(!_0x1483b6)return;var _0x14f06a=_0x3a7742[_0x156f32(0x1a2)+_0x156f32(0x2ee)];for(var _0x26e5ca=-0x859+-0x8*-0xce+0x1e9;_0x26e5ca<_0x14f06a[_0x156f32(0x696)+'h'];_0x26e5ca++){var _0x1ab95b=_0x14f06a[_0x26e5ca][_0x156f32(0x60a)+'Selec'+_0x156f32(0x62d)](_0x156f32(0x602)+_0x156f32(0x62e));_0x1ab95b&&(_0x1ab95b[_0x156f32(0x6d1)+_0x156f32(0x279)+'t'][_0x156f32(0x29b)+'Of']('UWMK')===-0x17*0xd4+0x4f+0x12bd||_0x1ab95b[_0x156f32(0x6d1)+_0x156f32(0x279)+'t'][_0x156f32(0x29b)+'Of'](_0x4efdf5[_0x156f32(0x6e7)])===0x690*0x4+-0x98*0x1f+-0x7d8)&&(_0x1ab95b[_0x156f32(0x6d1)+'onten'+'t']=_0x4d3250[_0x156f32(0x357)+_0x156f32(0x3ad)]?_0x156f32(0x699)+'MODE\x20'+_0x156f32(0x251)+_0x156f32(0x3b0)+_0x156f32(0x2bb)+'\x20no\x20h'+_0x156f32(0x6be)+'(relo'+_0x156f32(0x5fd)+_0x156f32(0x445)+')':_0x4d3250['uwmk']?_0x4efdf5['RqlyZ'](_0x4efdf5['mAFsf'](_0x4efdf5[_0x156f32(0x4e5)]('UWMK\x20'+_0x156f32(0x1cc)+'\x20',_0x4d3250[_0x156f32(0x6a4)+'Total']?_0x4efdf5[_0x156f32(0x4e5)](_0x4efdf5[_0x156f32(0x741)](_0x4d3250[_0x156f32(0x6a4)+'Ok'],'/'),_0x4d3250['hooks'+'Total'])+('\x20hook'+'s'):_0x156f32(0x509)+_0x156f32(0x6bf)+'med\x20('+'all\x20o'+_0x156f32(0x393)),_0x4efdf5['gfSvH'])+(_0x4d3250[_0x156f32(0x3fb)+'oaded']?_0x156f32(0x5cb)+'d':'loadi'+'ng')+_0x4efdf5[_0x156f32(0x245)]+(_0x4d3250[_0x156f32(0x1bd)+_0x156f32(0x4de)]?_0x4efdf5[_0x156f32(0x74d)]:_0x4efdf5['tNpZR'])+('\x20|\x20mo'+'vemen'+'t\x20'),_0x4d3250[_0x156f32(0x370)+_0x156f32(0x1fd)]?_0x156f32(0x6d8):'none')+(_0x4d3250[_0x156f32(0x6e0)+_0x156f32(0x1c2)]?_0x156f32(0x617)+_0x156f32(0x586)+_0x4d3250[_0x156f32(0x6e0)+_0x156f32(0x1c2)]:''):_0x156f32(0x6d5)+'MISSI'+'NG\x20-\x20'+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x156f32(0x609)+_0x156f32(0x39c)+'erscr'+_0x156f32(0x466));}}},-0x22+0x94a+0xa8*-0x8),_0x50a012;}var _0x3e3e65='\x0a\x20\x20\x20\x20'+':host'+_0x3a5ce3(0x250)+_0x3a5ce3(0x222)+_0x3a5ce3(0x624)+_0x3a5ce3(0x2ef)+'\x20\x20\x20*\x20'+_0x3a5ce3(0x519)+'-sizi'+_0x3a5ce3(0x198)+_0x3a5ce3(0x422)+'-box;'+_0x3a5ce3(0x342)+_0x3a5ce3(0x28f)+_0x3a5ce3(0x596)+_0x3a5ce3(0x1af)+'ily:\x20'+_0x3a5ce3(0x33a)+_0x3a5ce3(0x39d)+_0x3a5ce3(0x399)+'\x20UI\x22,'+_0x3a5ce3(0x652)+'em-ui'+',\x20san'+_0x3a5ce3(0x716)+_0x3a5ce3(0x562)+_0x3a5ce3(0x577)+_0x3a5ce3(0x695)+'anel\x20'+_0x3a5ce3(0x631)+_0x3a5ce3(0x1c9)+_0x3a5ce3(0x2dc)+'olute'+';\x20rig'+_0x3a5ce3(0x73e)+'4px;\x20'+'botto'+'m:\x2024'+'px;\x20w'+_0x3a5ce3(0x706)+_0x3a5ce3(0x2ff)+_0x3a5ce3(0x3ab)+',\x20cal'+'c(100'+_0x3a5ce3(0x5cd)+'48px)'+_0x3a5ce3(0x6d0)+_0x3a5ce3(0x6a9)+'ght:\x20'+'min(4'+_0x3a5ce3(0x52c)+'\x20calc'+'(100v'+'h\x20-\x204'+_0x3a5ce3(0x483)+_0x3a5ce3(0x188)+'\x20\x20\x20di'+_0x3a5ce3(0x1b2)+_0x3a5ce3(0x2a0)+'x;\x20ga'+'p:\x2010'+'px;\x20p'+_0x3a5ce3(0x5c8)+_0x3a5ce3(0x1c8)+'px;\x20b'+_0x3a5ce3(0x422)+_0x3a5ce3(0x467)+_0x3a5ce3(0x2ab)+_0x3a5ce3(0x502)+_0x3a5ce3(0x582)+_0x3a5ce3(0x3a7)+_0x3a5ce3(0x4ab)+'\x20auto'+';\x0a\x20\x20\x20'+_0x3a5ce3(0x2e2)+'ckgro'+'und:\x20'+_0x3a5ce3(0x59b)+'24,17'+_0x3a5ce3(0x493)+_0x3a5ce3(0x262)+'backd'+_0x3a5ce3(0x4bb)+'ilter'+_0x3a5ce3(0x464)+_0x3a5ce3(0x3c7)+_0x3a5ce3(0x713)+_0x3a5ce3(0x3c6)+_0x3a5ce3(0x397)+'%);\x20-'+'webki'+'t-bac'+_0x3a5ce3(0x1e2)+_0x3a5ce3(0x387)+_0x3a5ce3(0x26f)+_0x3a5ce3(0x3ce)+_0x3a5ce3(0x28b)+_0x3a5ce3(0x753)+_0x3a5ce3(0x6f3)+'50%);'+_0x3a5ce3(0x577)+'\x20\x20box'+_0x3a5ce3(0x365)+_0x3a5ce3(0x1c0)+'\x200\x200\x20'+_0x3a5ce3(0x2a3)+_0x3a5ce3(0x75f)+_0x3a5ce3(0x33d)+_0x3a5ce3(0x49c)+_0x3a5ce3(0x62a)+',\x20ins'+'et\x200\x20'+_0x3a5ce3(0x6aa)+_0x3a5ce3(0x3ef)+_0x3a5ce3(0x692)+_0x3a5ce3(0x2fe)+'55,.0'+_0x3a5ce3(0x3c0)+_0x3a5ce3(0x61a)+'\x2080px'+_0x3a5ce3(0x3ef)+_0x3a5ce3(0x664)+'0,.55'+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x3a5ce3(0x4c4)+'y:\x200;'+_0x3a5ce3(0x338)+'sform'+':\x20tra'+_0x3a5ce3(0x48b)+_0x3a5ce3(0x287)+_0x3a5ce3(0x64f)+'point'+'er-ev'+'ents:'+_0x3a5ce3(0x4bc)+_0x3a5ce3(0x751)+_0x3a5ce3(0x442)+'on:\x20o'+_0x3a5ce3(0x4c4)+_0x3a5ce3(0x3b3)+'s\x20eas'+_0x3a5ce3(0x5a8)+_0x3a5ce3(0x315)+_0x3a5ce3(0x5a3)+_0x3a5ce3(0x2ac)+_0x3a5ce3(0x347)+'ezier'+'(.22,'+'1,.36'+_0x3a5ce3(0x424)+_0x3a5ce3(0x1e8)+_0x3a5ce3(0x55b)+_0x3a5ce3(0x288)+'6eef2'+_0x3a5ce3(0x596)+'t-siz'+'e:\x2013'+_0x3a5ce3(0x6b6)+_0x3a5ce3(0x577)+_0x3a5ce3(0x695)+'anel.'+_0x3a5ce3(0x63a)+_0x3a5ce3(0x428)+'acity'+':\x201;\x20'+'trans'+_0x3a5ce3(0x4a9)+_0x3a5ce3(0x4bc)+_0x3a5ce3(0x53f)+_0x3a5ce3(0x53b)+_0x3a5ce3(0x30c)+'s:\x20au'+_0x3a5ce3(0x4e8)+'\x0a\x20\x20\x20\x20'+_0x3a5ce3(0x669)+_0x3a5ce3(0x521)+_0x3a5ce3(0x578)+_0x3a5ce3(0x64a)+'flex;'+_0x3a5ce3(0x734)+'-dire'+'ction'+_0x3a5ce3(0x65b)+'umn;\x20'+_0x3a5ce3(0x41f)+'-item'+'s:\x20ce'+'nter;'+'\x20gap:'+_0x3a5ce3(0x6af)+_0x3a5ce3(0x67c)+_0x3a5ce3(0x72d)+_0x3a5ce3(0x27b)+'lex:\x20'+'none;'+_0x3a5ce3(0x2e7)+'ing:\x20'+_0x3a5ce3(0x2a4)+(_0x3a5ce3(0x4b5)+'rder-'+_0x3a5ce3(0x606)+'s:\x2016'+'px;\x0a\x20'+_0x3a5ce3(0x1e8)+_0x3a5ce3(0x6e5)+_0x3a5ce3(0x1e3)+_0x3a5ce3(0x683)+_0x3a5ce3(0x5d6)+_0x3a5ce3(0x4cd)+_0x3a5ce3(0x2df)+'025);'+_0x3a5ce3(0x235)+_0x3a5ce3(0x20e)+_0x3a5ce3(0x6dc)+_0x3a5ce3(0x5d3)+_0x3a5ce3(0x4c2)+'1px\x20r'+_0x3a5ce3(0x75f)+_0x3a5ce3(0x33d)+_0x3a5ce3(0x49c)+',.05)'+';\x20}\x0a\x20'+_0x3a5ce3(0x658)+'n-log'+_0x3a5ce3(0x1a1)+_0x3a5ce3(0x26a)+_0x3a5ce3(0x748)+_0x3a5ce3(0x256)+_0x3a5ce3(0x2d3)+'items'+':\x20cen'+_0x3a5ce3(0x560)+_0x3a5ce3(0x340)+':\x2032p'+'x;\x20he'+_0x3a5ce3(0x3b7)+'\x2032px'+_0x3a5ce3(0x2ef)+_0x3a5ce3(0x658)+'n-log'+_0x3a5ce3(0x5e2)+'\x20{\x20wi'+_0x3a5ce3(0x610)+'25px;'+_0x3a5ce3(0x69a)+'ht:\x202'+_0x3a5ce3(0x5e0)+'overf'+'low:\x20'+_0x3a5ce3(0x3d7)+'le;\x20f'+_0x3a5ce3(0x5b5)+_0x3a5ce3(0x3a2)+_0x3a5ce3(0x29f)+_0x3a5ce3(0x42e)+_0x3a5ce3(0x25a)+_0x3a5ce3(0x1b8)+'a(255'+_0x3a5ce3(0x481)+'157,.'+'8));\x20'+_0x3a5ce3(0x2b1)+'\x20.mn-'+_0x3a5ce3(0x295)+_0x3a5ce3(0x578)+'lay:\x20'+'flex;'+'\x20alig'+'n-ite'+_0x3a5ce3(0x233)+_0x3a5ce3(0x61d)+_0x3a5ce3(0x6ea)+'tify-'+'conte'+'nt:\x20c'+'enter'+';\x20wid'+'th:\x205'+'2px;\x20'+'heigh'+_0x3a5ce3(0x40a)+'px;\x20b'+_0x3a5ce3(0x422)+_0x3a5ce3(0x6b9)+_0x3a5ce3(0x37b)+_0x3a5ce3(0x297)+_0x3a5ce3(0x5f5)+_0x3a5ce3(0x4ad)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+'kgrou'+'nd:\x20t'+_0x3a5ce3(0x2fa)+_0x3a5ce3(0x626)+_0x3a5ce3(0x244)+_0x3a5ce3(0x376)+'gba(2'+_0x3a5ce3(0x453)+_0x3a5ce3(0x36f)+_0x3a5ce3(0x334)+_0x3a5ce3(0x25b)+_0x3a5ce3(0x58e)+_0x3a5ce3(0x30e)+_0x3a5ce3(0x4f6)+'nt-si'+_0x3a5ce3(0x72f)+_0x3a5ce3(0x1d7)+'font-'+'weigh'+_0x3a5ce3(0x21d)+'0;\x20}\x0a'+_0x3a5ce3(0x44a)+'mn-ta'+_0x3a5ce3(0x2de)+'er\x20{\x20'+'color'+':\x20rgb'+'a(246'+_0x3a5ce3(0x1c3)+'242,.'+_0x3a5ce3(0x600)+'\x0a\x20\x20\x20\x20'+_0x3a5ce3(0x3d4)+'ab.ac'+'tive\x20'+'{\x20col'+_0x3a5ce3(0x3ed)+_0x3a5ce3(0x4da)+'d;\x20ba'+_0x3a5ce3(0x6ed)+_0x3a5ce3(0x215)+_0x3a5ce3(0x59b)+'255,1'+_0x3a5ce3(0x313)+_0x3a5ce3(0x281)+';\x20}\x0a\x20'+_0x3a5ce3(0x658)+_0x3a5ce3(0x265)+'n\x20{\x20f'+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x3a5ce3(0x4fa)+';\x20dis'+_0x3a5ce3(0x1c1)+_0x3a5ce3(0x734)+_0x3a5ce3(0x6e9)+_0x3a5ce3(0x1ee)+'ectio'+'n:\x20co'+_0x3a5ce3(0x5b6)+_0x3a5ce3(0x248)+_0x3a5ce3(0x660)+_0x3a5ce3(0x2a7)+'{\x20dis'+_0x3a5ce3(0x1c1)+_0x3a5ce3(0x734)+';\x20ali'+_0x3a5ce3(0x66e)+_0x3a5ce3(0x267)+_0x3a5ce3(0x476)+'r;\x20ga'+_0x3a5ce3(0x4c6)+_0x3a5ce3(0x6b1)+_0x3a5ce3(0x5c8)+'g:\x206p'+'x\x206px'+'\x2012px'+_0x3a5ce3(0x4db)+'r-sel'+_0x3a5ce3(0x320)+'none;'+_0x3a5ce3(0x248)+_0x3a5ce3(0x660)+_0x3a5ce3(0x401)+_0x3a5ce3(0x2f4)+_0x3a5ce3(0x1d2)+'\x201;\x20m'+'in-wi'+'dth:\x20'+_0x3a5ce3(0x4e1)+_0x3a5ce3(0x44a)+'mn-h\x20'+_0x3a5ce3(0x4fd)+_0x3a5ce3(0x5db)+_0x3a5ce3(0x205)+'px;\x20f'+_0x3a5ce3(0x649)+_0x3a5ce3(0x708)+_0x3a5ce3(0x474)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x3a5ce3(0x6f0)+_0x3a5ce3(0x3f8)+_0x3a5ce3(0x24e)+_0x3a5ce3(0x72f)+_0x3a5ce3(0x6d6)+_0x3a5ce3(0x199))+('ty:\x20.'+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3a5ce3(0x5ca)+_0x3a5ce3(0x46a)+_0x3a5ce3(0x578)+'lay:\x20'+'grid;'+_0x3a5ce3(0x3ae)+'e-ite'+_0x3a5ce3(0x233)+'enter'+_0x3a5ce3(0x67f)+_0x3a5ce3(0x66b)+'8px;\x20'+_0x3a5ce3(0x534)+_0x3a5ce3(0x573)+'px;\x20b'+_0x3a5ce3(0x422)+_0x3a5ce3(0x6b9)+'borde'+'r-rad'+'ius:\x20'+_0x3a5ce3(0x200)+'backg'+'round'+_0x3a5ce3(0x1b0)+'nspar'+_0x3a5ce3(0x358)+'color'+_0x3a5ce3(0x6ca)+_0x3a5ce3(0x2bc)+'\x20opac'+'ity:\x20'+_0x3a5ce3(0x1e6)+_0x3a5ce3(0x22c)+_0x3a5ce3(0x1bc)+_0x3a5ce3(0x191)+_0x3a5ce3(0x2ef)+'\x20\x20\x20.m'+_0x3a5ce3(0x49a)+_0x3a5ce3(0x6a0)+'ver\x20{'+_0x3a5ce3(0x6bd)+_0x3a5ce3(0x204)+_0x3a5ce3(0x4cb)+'ckgro'+'und:\x20'+'rgba('+'255,2'+'55,25'+_0x3a5ce3(0x40c)+_0x3a5ce3(0x5b9)+_0x3a5ce3(0x44a)+_0x3a5ce3(0x5ca)+_0x3a5ce3(0x2a1)+_0x3a5ce3(0x231)+'width'+_0x3a5ce3(0x6c9)+'x;\x20he'+_0x3a5ce3(0x3b7)+'\x2014px'+';\x20fil'+_0x3a5ce3(0x4df)+'ne;\x20s'+_0x3a5ce3(0x531)+':\x20cur'+'rentC'+_0x3a5ce3(0x208)+'\x20stro'+'ke-wi'+'dth:\x20'+'2;\x20st'+_0x3a5ce3(0x292)+'linec'+'ap:\x20r'+_0x3a5ce3(0x5c2)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-cols'+'\x20{\x20fl'+_0x3a5ce3(0x710)+_0x3a5ce3(0x627)+'-heig'+'ht:\x200'+';\x20ove'+'rflow'+'-y:\x20a'+_0x3a5ce3(0x594)+'displ'+_0x3a5ce3(0x3af)+_0x3a5ce3(0x3a3)+'grid-'+'templ'+'ate-c'+_0x3a5ce3(0x4c3)+'s:\x20re'+'peat('+'auto-'+'fill,'+'\x20minm'+'ax(25'+_0x3a5ce3(0x364)+_0x3a5ce3(0x1dc)+_0x3a5ce3(0x2c4)+_0x3a5ce3(0x66e)+_0x3a5ce3(0x267)+_0x3a5ce3(0x580)+_0x3a5ce3(0x2c4)+_0x3a5ce3(0x5fe)+_0x3a5ce3(0x441)+':\x20sta'+'rt;\x20g'+'ap:\x201'+_0x3a5ce3(0x1d7)+'paddi'+_0x3a5ce3(0x680)+_0x3a5ce3(0x61f)+_0x3a5ce3(0x6d2)+';\x20}\x0a\x20'+_0x3a5ce3(0x658)+'n-col'+'s::-w'+'ebkit'+'-scro'+_0x3a5ce3(0x57b)+_0x3a5ce3(0x21b)+_0x3a5ce3(0x610)+_0x3a5ce3(0x200)+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x66a)+_0x3a5ce3(0x50e)+':-web'+'kit-s'+_0x3a5ce3(0x31c)+_0x3a5ce3(0x520)+'humb\x20'+'{\x20bac'+_0x3a5ce3(0x2cc)+'nd:\x20r'+_0x3a5ce3(0x75f)+_0x3a5ce3(0x33d)+_0x3a5ce3(0x49c)+_0x3a5ce3(0x1bf)+_0x3a5ce3(0x67a)+_0x3a5ce3(0x27d)+_0x3a5ce3(0x2b9)+_0x3a5ce3(0x6b2)+_0x3a5ce3(0x2ef)+_0x3a5ce3(0x575)+'k-car'+'d\x20{\x20b'+_0x3a5ce3(0x422)+_0x3a5ce3(0x467)+_0x3a5ce3(0x5a1)+'2px;\x20'+_0x3a5ce3(0x6e5)+_0x3a5ce3(0x1e3)+':\x20rgb'+_0x3a5ce3(0x5d6)+_0x3a5ce3(0x4cd)+'255,.'+'025);'+_0x3a5ce3(0x235)+'shado'+_0x3a5ce3(0x6dc)+_0x3a5ce3(0x5d3)+_0x3a5ce3(0x4c2)+'1px\x20r'+'gba(2'+'55,25'+_0x3a5ce3(0x49c)+',.05)'+_0x3a5ce3(0x2ef)+'\x20\x20\x20.s'+_0x3a5ce3(0x446)+_0x3a5ce3(0x650)+_0x3a5ce3(0x70c)+_0x3a5ce3(0x2cc)+'nd:\x20r'+'gba(2'+'55,25'+_0x3a5ce3(0x49c)+_0x3a5ce3(0x44d)+_0x3a5ce3(0x65c)+'-shad'+'ow:\x20i'+_0x3a5ce3(0x523)+_0x3a5ce3(0x1e9)+'\x201px\x20'+_0x3a5ce3(0x59b)+_0x3a5ce3(0x1a8)+_0x3a5ce3(0x313)+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+'rd-he'+'ad\x20{\x20'+_0x3a5ce3(0x426))+(_0x3a5ce3(0x36b)+_0x3a5ce3(0x622)+_0x3a5ce3(0x41f)+_0x3a5ce3(0x30a)+'s:\x20ce'+'nter;'+_0x3a5ce3(0x43f)+_0x3a5ce3(0x289)+_0x3a5ce3(0x2e7)+'ing:\x20'+'11px\x20'+'12px;'+'\x20}\x0a\x20\x20'+_0x3a5ce3(0x6c3)+'-card'+_0x3a5ce3(0x401)+_0x3a5ce3(0x2ed)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x3a5ce3(0x4fa)+_0x3a5ce3(0x2ef)+'\x20\x20\x20.s'+_0x3a5ce3(0x446)+'d-tit'+_0x3a5ce3(0x36d)+_0x3a5ce3(0x43b)+_0x3a5ce3(0x4fd)+'t-siz'+_0x3a5ce3(0x18b)+_0x3a5ce3(0x27b)+'ont-w'+_0x3a5ce3(0x708)+':\x20600'+_0x3a5ce3(0x244)+_0x3a5ce3(0x376)+_0x3a5ce3(0x75f)+_0x3a5ce3(0x453)+_0x3a5ce3(0x36f)+_0x3a5ce3(0x407)+_0x3a5ce3(0x2ef)+_0x3a5ce3(0x575)+_0x3a5ce3(0x446)+'d.on\x20'+'.sk-c'+'ard-t'+'itle\x20'+_0x3a5ce3(0x322)+_0x3a5ce3(0x4a0)+'olor:'+_0x3a5ce3(0x6a2)+_0x3a5ce3(0x4e9)+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+_0x3a5ce3(0x2fc)+'\x20{\x20pa'+'dding'+_0x3a5ce3(0x386)+_0x3a5ce3(0x608)+'0px;\x20'+_0x3a5ce3(0x2b1)+_0x3a5ce3(0x316)+'mdesc'+_0x3a5ce3(0x3f8)+_0x3a5ce3(0x24e)+'ze:\x201'+'1px;\x20'+_0x3a5ce3(0x199)+'ty:\x20.'+_0x3a5ce3(0x45d)+'rgin-'+'botto'+'m:\x206p'+'x;\x20}\x0a'+_0x3a5ce3(0x44a)+_0x3a5ce3(0x579)+_0x3a5ce3(0x68a)+'ispla'+'y:\x20fl'+_0x3a5ce3(0x57a)+'lign-'+_0x3a5ce3(0x298)+':\x20cen'+'ter;\x20'+_0x3a5ce3(0x32a)+_0x3a5ce3(0x200)+_0x3a5ce3(0x3f3)+_0x3a5ce3(0x4b1)+_0x3a5ce3(0x51a)+_0x3a5ce3(0x69d)+_0x3a5ce3(0x431)+':\x2011.'+_0x3a5ce3(0x5e0)+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+_0x3a5ce3(0x469)+_0x3a5ce3(0x48d)+_0x3a5ce3(0x710)+';\x20col'+_0x3a5ce3(0x376)+'gba(2'+_0x3a5ce3(0x453)+_0x3a5ce3(0x36f)+_0x3a5ce3(0x605)+';\x20}\x0a\x20'+_0x3a5ce3(0x575)+'k-hin'+'t\x20{\x20d'+_0x3a5ce3(0x26a)+_0x3a5ce3(0x368)+_0x3a5ce3(0x6bb)+_0x3a5ce3(0x561)+_0x3a5ce3(0x2e3)+_0x3a5ce3(0x501)+_0x3a5ce3(0x3fc)+_0x3a5ce3(0x758)+_0x3a5ce3(0x2eb)+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+'switc'+'h\x20{\x20p'+'ositi'+_0x3a5ce3(0x450)+_0x3a5ce3(0x28d)+'ve;\x20w'+'idth:'+_0x3a5ce3(0x5d5)+';\x20hei'+_0x3a5ce3(0x252)+_0x3a5ce3(0x4f8)+_0x3a5ce3(0x1be)+_0x3a5ce3(0x672)+_0x3a5ce3(0x67a)+'der-r'+_0x3a5ce3(0x2b9)+_0x3a5ce3(0x305)+'x;\x20ba'+'ckgro'+_0x3a5ce3(0x215)+_0x3a5ce3(0x59b)+_0x3a5ce3(0x2fe)+'55,25'+'5,.07'+_0x3a5ce3(0x490)+_0x3a5ce3(0x4ed)+_0x3a5ce3(0x60c)+_0x3a5ce3(0x560)+'flex:'+'\x20none'+_0x3a5ce3(0x2ef)+'\x20\x20\x20.s'+'k-swi'+'tch::'+'after'+_0x3a5ce3(0x181)+_0x3a5ce3(0x441)+_0x3a5ce3(0x700)+'\x20posi'+'tion:'+_0x3a5ce3(0x440)+'lute;'+_0x3a5ce3(0x2ae)+_0x3a5ce3(0x17f)+_0x3a5ce3(0x6ec)+_0x3a5ce3(0x56a)+';\x20wid'+_0x3a5ce3(0x6f5)+'px;\x20h'+'eight'+_0x3a5ce3(0x443)+_0x3a5ce3(0x67a)+_0x3a5ce3(0x27d)+_0x3a5ce3(0x2b9)+':\x2050%'+';\x20bac'+_0x3a5ce3(0x2cc)+_0x3a5ce3(0x455)+_0x3a5ce3(0x75f)+_0x3a5ce3(0x33d)+'5,255'+_0x3a5ce3(0x604)+_0x3a5ce3(0x751)+'nsiti'+'on:\x20l'+'eft\x20.'+_0x3a5ce3(0x6fd)+'ackgr'+_0x3a5ce3(0x506)+'.2s;\x20'+_0x3a5ce3(0x2b1)+'\x20.sk-'+_0x3a5ce3(0x621)+_0x3a5ce3(0x3e6)+_0x3a5ce3(0x382)+_0x3a5ce3(0x2f1)+_0x3a5ce3(0x6ff)+'\x22]\x20{\x20'+'backg'+'round'+_0x3a5ce3(0x683))+(_0x3a5ce3(0x5d6)+',107,'+_0x3a5ce3(0x6cb)+'25);\x20'+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+_0x3a5ce3(0x621)+'h[ari'+'a-che'+'cked='+'\x22true'+_0x3a5ce3(0x1b4)+'fter\x20'+_0x3a5ce3(0x43e)+_0x3a5ce3(0x5e6)+'px;\x20b'+_0x3a5ce3(0x351)+_0x3a5ce3(0x35b)+_0x3a5ce3(0x20f)+_0x3a5ce3(0x59e)+_0x3a5ce3(0x2b1)+_0x3a5ce3(0x316)+'field'+'\x20{\x20ba'+_0x3a5ce3(0x6ed)+'und:\x20'+'rgba('+'255,2'+_0x3a5ce3(0x33d)+'5,.03'+_0x3a5ce3(0x2a6)+_0x3a5ce3(0x422)+_0x3a5ce3(0x6b9)+'borde'+_0x3a5ce3(0x297)+_0x3a5ce3(0x5f5)+'6px;\x20'+'color'+_0x3a5ce3(0x616)+_0x3a5ce3(0x6dd)+_0x3a5ce3(0x2e7)+_0x3a5ce3(0x533)+_0x3a5ce3(0x283)+_0x3a5ce3(0x27b)+'ont-s'+'ize:\x20'+_0x3a5ce3(0x639)+'x;\x20ou'+'tline'+_0x3a5ce3(0x5c3)+_0x3a5ce3(0x526)+_0x3a5ce3(0x3f2)+'dow:\x20'+'inset'+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+_0x3a5ce3(0x2fe)+_0x3a5ce3(0x4e2)+_0x3a5ce3(0x24d)+'\x0a\x20\x20\x20\x20'+'.sk-f'+_0x3a5ce3(0x46b)+_0x3a5ce3(0x6a6)+'n\x20{\x20b'+_0x3a5ce3(0x351)+_0x3a5ce3(0x35b)+_0x3a5ce3(0x5f8)+'419;\x20'+_0x3a5ce3(0x2b1)+'\x20.sk-'+'range'+_0x3a5ce3(0x2cb)+_0x3a5ce3(0x1b2)+':\x20fle'+'x;\x20al'+'ign-i'+_0x3a5ce3(0x614)+'\x20cent'+'er;\x20g'+'ap:\x208'+'px;\x20}'+_0x3a5ce3(0x577)+_0x3a5ce3(0x66f)+'lider'+_0x3a5ce3(0x62c)+_0x3a5ce3(0x475)+_0x3a5ce3(0x670)+_0x3a5ce3(0x6de)+_0x3a5ce3(0x2d2)+'ne;\x20a'+_0x3a5ce3(0x54c)+'ance:'+'\x20none'+_0x3a5ce3(0x67f)+'th:\x209'+_0x3a5ce3(0x1d7)+_0x3a5ce3(0x534)+'t:\x208p'+'x;\x20ba'+'ckgro'+'und:\x20'+_0x3a5ce3(0x1f6)+_0x3a5ce3(0x41b)+_0x3a5ce3(0x4aa)+_0x3a5ce3(0x44a)+'sk-sl'+'ider:'+_0x3a5ce3(0x350)+'kit-s'+_0x3a5ce3(0x398)+_0x3a5ce3(0x6f6)+'able-'+'track'+_0x3a5ce3(0x615)+_0x3a5ce3(0x3b7)+'\x202px;'+_0x3a5ce3(0x1be)+'er-ra'+_0x3a5ce3(0x2f3)+'\x202px;'+'\x20back'+'groun'+'d:\x20li'+_0x3a5ce3(0x1ad)+'gradi'+'ent(#'+_0x3a5ce3(0x4da)+_0x3a5ce3(0x744)+_0x3a5ce3(0x241)+_0x3a5ce3(0x52d)+_0x3a5ce3(0x63e)+'r(--p'+',\x2050%'+')\x20100'+'%\x20no-'+'repea'+_0x3a5ce3(0x5e4)+'ba(25'+_0x3a5ce3(0x49c)+',255,'+_0x3a5ce3(0x1ae)+_0x3a5ce3(0x248)+_0x3a5ce3(0x6c3)+'-slid'+_0x3a5ce3(0x642)+'webki'+'t-sli'+'der-t'+_0x3a5ce3(0x26c)+_0x3a5ce3(0x5a5)+'bkit-'+'appea'+'rance'+':\x20non'+'e;\x20wi'+'dth:\x20'+'6px;\x20'+'heigh'+'t:\x206p'+_0x3a5ce3(0x5df)+'rgin-'+_0x3a5ce3(0x5c1)+'-2px;'+_0x3a5ce3(0x1be)+_0x3a5ce3(0x3aa)+_0x3a5ce3(0x2f3)+'\x2050%;'+_0x3a5ce3(0x211)+'groun'+_0x3a5ce3(0x1ed)+'f6b9d'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x3a5ce3(0x705)+_0x3a5ce3(0x3f8)+_0x3a5ce3(0x24e)+'ze:\x201'+'1px;\x20'+_0x3a5ce3(0x561)+'weigh'+_0x3a5ce3(0x192)+_0x3a5ce3(0x230)+'n-wid'+_0x3a5ce3(0x66b)+_0x3a5ce3(0x200)+'text-'+_0x3a5ce3(0x41f)+_0x3a5ce3(0x5b0)+'ht;\x20c'+'olor:'+_0x3a5ce3(0x3ef)+_0x3a5ce3(0x3d3)+'238,2'+_0x3a5ce3(0x5ac)+_0x3a5ce3(0x5b9)+_0x3a5ce3(0x44a)+_0x3a5ce3(0x366)+_0x3a5ce3(0x43d))+(_0x3a5ce3(0x67c)+_0x3a5ce3(0x3d6)+'px;\x20h'+'eight'+_0x3a5ce3(0x448)+_0x3a5ce3(0x48c)+_0x3a5ce3(0x4ba)+_0x3a5ce3(0x5af)+_0x3a5ce3(0x422)+'-radi'+_0x3a5ce3(0x2b5)+'px;\x20b'+'ackgr'+_0x3a5ce3(0x35b)+'\x20none'+';\x20pad'+_0x3a5ce3(0x337)+'\x200;\x20c'+'ursor'+_0x3a5ce3(0x3b1)+_0x3a5ce3(0x3b8)+'\x20}\x0a\x20\x20'+_0x3a5ce3(0x6c3)+_0x3a5ce3(0x1ff)+_0x3a5ce3(0x3f8)+'nt-si'+_0x3a5ce3(0x72f)+'1px;\x20'+'color'+':\x20rgb'+_0x3a5ce3(0x2d0)+',238,'+_0x3a5ce3(0x425)+_0x3a5ce3(0x3e0)+_0x3a5ce3(0x5c8)+'g:\x202p'+_0x3a5ce3(0x4c5)+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+'note.'+'err\x20{'+'\x20colo'+_0x3a5ce3(0x288)+_0x3a5ce3(0x6c2)+_0x3a5ce3(0x2ef)+_0x3a5ce3(0x575)+'k-btn'+'\x20{\x20al'+'ign-s'+'elf:\x20'+'flex-'+'start'+_0x3a5ce3(0x67a)+_0x3a5ce3(0x179)+'0;\x20bo'+_0x3a5ce3(0x3de)+'radiu'+_0x3a5ce3(0x6ce)+_0x3a5ce3(0x2d8)+_0x3a5ce3(0x2ce)+_0x3a5ce3(0x443)+'\x2016px'+_0x3a5ce3(0x41e)+'kgrou'+_0x3a5ce3(0x65f)+'ff6b9'+'d;\x20co'+'lor:\x20'+'#fff;'+_0x3a5ce3(0x69d)+_0x3a5ce3(0x431)+':\x2011.'+_0x3a5ce3(0x5e0)+'font-'+_0x3a5ce3(0x6b8)+_0x3a5ce3(0x21d)+'0;\x20cu'+_0x3a5ce3(0x4ed)+'\x20poin'+'ter;\x20'+'}\x0a\x20\x20\x20'+_0x3a5ce3(0x316)+'btn:h'+_0x3a5ce3(0x675)+_0x3a5ce3(0x1ef)+_0x3a5ce3(0x1f3)+_0x3a5ce3(0x3e8)+'tness'+_0x3a5ce3(0x712)+_0x3a5ce3(0x2ef)+'\x20\x20\x20');window['addEv'+'entLi'+'stene'+'r'](_0x3a5ce3(0x757)+'wn',_0x2bc01e=>{var _0x1137da=_0x3a5ce3;_0x55e602[_0x1137da(0x22e)](_0x2bc01e[_0x1137da(0x197)],'Inser'+'t')&&(_0x2bc01e[_0x1137da(0x635)+'ntDef'+_0x1137da(0x27f)](),_0x11da6f());},!![]);var _0x542839=document[_0x3a5ce3(0x6db)+_0x3a5ce3(0x5d7)+_0x3a5ce3(0x665)](_0x456932['VMjdo']);_0x542839['style']['cssTe'+'xt']=_0x3a5ce3(0x1a5)+_0x3a5ce3(0x27c)+_0x3a5ce3(0x2c0)+_0x3a5ce3(0x402)+_0x3a5ce3(0x569)+'ight:'+_0x3a5ce3(0x4eb)+_0x3a5ce3(0x3fa)+_0x3a5ce3(0x3bb)+_0x3a5ce3(0x40b)+_0x3a5ce3(0x563)+'ursor'+':poin'+'ter;w'+_0x3a5ce3(0x706)+'26px;'+'heigh'+_0x3a5ce3(0x270)+'x;opa'+_0x3a5ce3(0x758)+'0.5;t'+_0x3a5ce3(0x749)+_0x3a5ce3(0x620)+_0x3a5ce3(0x199)+_0x3a5ce3(0x1eb)+'2s;po'+_0x3a5ce3(0x191)+'-even'+'ts:au'+_0x3a5ce3(0x4a3)+'lter:'+_0x3a5ce3(0x472)+'shado'+_0x3a5ce3(0x52b)+_0x3a5ce3(0x61f)+_0x3a5ce3(0x59b)+_0x3a5ce3(0x1a8)+'07,15'+'7,0.7'+'))',_0x542839[_0x3a5ce3(0x277)+'HTML']=_0x3a5ce3(0x592)+'viewB'+_0x3a5ce3(0x356)+_0x3a5ce3(0x3a1)+_0x3a5ce3(0x646)+_0x3a5ce3(0x30f)+'\x20d=\x22M'+_0x3a5ce3(0x31a)+_0x3a5ce3(0x760)+_0x3a5ce3(0x628)+_0x3a5ce3(0x738)+_0x3a5ce3(0x32f)+_0x3a5ce3(0x38e)+_0x3a5ce3(0x273)+_0x3a5ce3(0x5bb)+_0x3a5ce3(0x1d4)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x3a5ce3(0x372)+_0x3a5ce3(0x4bf)+_0x3a5ce3(0x186)+'\x22none'+_0x3a5ce3(0x35e)+_0x3a5ce3(0x5b7)+'#ff6b'+_0x3a5ce3(0x22b)+_0x3a5ce3(0x531)+_0x3a5ce3(0x468)+'h=\x222\x22'+_0x3a5ce3(0x697)+_0x3a5ce3(0x6fb)+_0x3a5ce3(0x589)+_0x3a5ce3(0x19b)+'nd\x22\x20s'+'troke'+'-line'+'join='+'\x22roun'+_0x3a5ce3(0x3f7)+'circl'+_0x3a5ce3(0x294)+_0x3a5ce3(0x47b)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+_0x3a5ce3(0x6c8)+'=\x22#ff'+_0x3a5ce3(0x584)+_0x3a5ce3(0x17b)+_0x3a5ce3(0x57d),_0x542839['title']=_0x456932['gLXjZ'],_0x542839[_0x3a5ce3(0x484)+_0x3a5ce3(0x75a)+'er']=()=>_0x542839[_0x3a5ce3(0x3a0)][_0x3a5ce3(0x199)+'ty']='1',_0x542839['onmou'+_0x3a5ce3(0x363)+'ve']=()=>_0x542839[_0x3a5ce3(0x3a0)][_0x3a5ce3(0x199)+'ty']='0.5',_0x542839[_0x3a5ce3(0x2af)+'ck']=_0x27930d=>{var _0x4d165f=_0x3a5ce3;_0x27930d[_0x4d165f(0x50d)+'ropag'+_0x4d165f(0x352)](),_0x11da6f();},document['body'][_0x3a5ce3(0x18a)+_0x3a5ce3(0x591)+'d'](_0x542839),_0x456932['QmJiM'](_0x9665e3),_0x456932['ImDSm'](requestAnimationFrame,_0x5f5a40),console[_0x3a5ce3(0x75e)](_0x3a5ce3(0x485)+_0x3a5ce3(0x4be)+_0x3a5ce3(0x2f8)+_0x3a5ce3(0x516)+'eady.'+_0x3a5ce3(0x663)+':',_0x4d3250['uwmk']);});})()));
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
