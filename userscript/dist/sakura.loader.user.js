// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.9.5
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
function _0x2e0f(){var _0x4de0ef=['DdOGmJG','lK92zxi','nde5oYa','BfbJEei','zw51','yJLKoYa','Bw92zvq','BgfIzwW','Dg87ih0','suTiDwm','ide0ChG','iJeYiIa','Fdv8mNW','BNn0ywW','idi2ChG','zgLZCgW','C3bHBG','ywqU','uK1c','suLWB3u','DhjPyNu','DgvYo3C','nxb4oYa','idmWChG','BI1SB2C','AxrLiee','AfTHCMK','rfLqu3y','zenOAwW','AxvZoIa','zNPqEgO','ztSGD2K','Dg5LC3m','zMXLEdS','zgvlEwu','AfHnww8','mJqYlc4','Bw4Ty28','DgHLihC','Bg9HzgK','DMCGEYa','nsWUmdm','CJSGz2e','Ad0ImIi','oIbYz2i','vhfTtNi','Aw5NoIa','z2fWoIa','nYWWlJG','B3i6ihi','nMvLzJi','z2fTzuW','AsXZyw4','zxG6mJe','Aw5JBhu','qNvUBNK','BhKGkhi','icaUC2S','BwjRuNu','B3nLihS','AwXUDMu','rMLLBgq','C1HmuwC','iL06oMe','mJu1lc4','ns00idC','zguSihq','zw50zxi','Cg9PBNq','BNrLEhq','BguGC3q','vvDnsYa','seLlq1O','DhjHBNm','BNrLCI0','ANvTCfa','zxjYB3i','rM9Yy2u','t1vsx18','CMfPC2u','ic8GDMe','CNjVCG','BMLUzW','kYbmtui','BMv2zxi','C2v0ida','jsK7ic0','kc4YmIW','ocWYndi','iM5VBMu','CfD3ve8','yMfYlxq','yxa6ihi','DhLqy3q','CMLMvxC','EdSGz2e','z3jHzgK','C2STy28','CI51As4','BxjzBLO','Dxm6ide','Dg9Y','B3i6iha','Awy7ih0','A3mGyxi','Bgf5oIa','rxHW','vwT5ue0','Ahq6idi','BwLU','q1zoAgS','tvbrExi','veDPwK0','qxbWBgK','q1btihi','yuTVDxi','y2HLy2S','CM9Rzs0','oYbMBgu','mJK1odiWAfb5B1HU','y2TNCM8','B211uu8','lwXPBMu','zxrLy3q','l3jHCgK','y2SP','BMDwuKS','yMHVCa','zMXes1q','oYbVDMu','ufLjqLG','ruTkuNK','z24TAxq','CYbHBgW','lc4WocK','ig9Wywm','CZOGoha','A3nty2e','lNnRlw0','BM9tChi','yw5ZzM8','ltqTnY4','Bw4TDge','BwjVzhK','zwXMoIa','D2L0Ag8','AwX5oIa','CIdIGjqG','Bw4Ty2W','mxb4oYa','B3rOAw4','CM0GlJq','A2v5Dxa','CJSGzM8','sNvTCca','idaGmca','CI1Yywq','Bw92zw0','ChGPoYa','CMHmC1O','DMu7ihC','ztOGBM8','yxjPys0','nxW0Fdy','BNnSyxq','BNq6igm','DtmY','AwWGC3a','CYbLyxm','pc9ZBwe','AgvZ','EdSGB3u','zwLMzLa','zYbJyw4','yxnZAwC','EgLhwLa','BwDXwum','q29SB3i','De5Vzgu','ELHbz2i','C2f2zq','ihrOzsa','CMvUDem','AguGzNi','yxbWzwe','A2DYB3u','DgL2zsa','mdCSmtu','ywjyDKm','mdb2DZS','CM91BMq','ChG7igi','ywrK','q29TyMe','DgG6idu','vg90ywW','zJzIowq','lwL0zw0','D29YAYa','Bw4TC3u','B25SEsW','rxvXwNC','swyGCMu','idi0iIa','CgvHDcG','CMDIysG','lwjVEdS','Be1VDgK','C3DPDgm','zsbZzxi','y2fUDMe','mtu3lc4','nhb4oYa','CZO6lxC','mcWWlJy','B3nPDgK','lIbvC2u','oIa0ChG','iezquW','yMPoC2W','AxnPyMW','icaGzgK','y2fWtw8','ihjLBg8','zwfSDgG','EYbJB2W','yw1Hz2u','ys5RB3u','z3jPzdS','idjWEdS','zw50rwW','wxHpq28','y29SB3i','C2v0qxq','zxmGEYa','CMvJDa','igDHDgu','A2vZig8','mNb4ihu','ldeWnYW','BM9szwm','idnWEdS','C2STyNq','ysGYntu','uMvJDa','ignHBgm','Bg9YihS','zxnJ','C2fMzq','v2vItw8','jsbUBY0','ideWChG','u0ncrfy','lJv6iIa','BwvKicG','ide7ig0','oJiXndC','BsbSzwy','u2fMzsa','CZPUB24','zxzLBNq','EYbIywm','v0XVrLi','s0XZAva','BgjUCMq','CMvU','EgjwzKC','CgfYC2u','y2fSBa','A2vizwe','ifjLy28','igLZigm','lc4YnsK','DgLVBJO','wMvYB2u','CMvSEsa','D2nnEeO','EdSGywW','vNzvC3m','AdOGnJi','BMq6ihq','CdOGmta','BgLUzwm','iokaLcb0zq','Aw4GC2e','B2X1Dgu','B25JAge','DxjZB3i','Cfv1ELK','igjHy2S','zw15igm','sxnhCM8','zdSGyMe','w3nHA3u','y2uGB3y','u3bHy2u','lNnRlxm','AvvYtu4','ywrIBg8','CgfYzw4','y29TyMe','oIbJDxi','qwvtzLC','uMf0zq','u3rHDhu','igjVEc0','BM93','nNW3Fde','C3rYAw4','mJvWEdS','y3nZvgu','lsbHihm','C3rLBMu','zeD2u2K','ExLLq0y','oIbHyNm','igv4Axq','CgXPy2e','BNrLBNq','vgfRzxm','ihnOB3q','zw51ihi','r0nZrgu','CgfKzgK','ignHy2G','oIaZmNa','ksaXmda','BMu7ihm','tfj4uLm','yM90Dg8','ENjly2q','y29UDgu','BMjsvMS','lJjZoYa','m3W2Fde','CMqTAgu','DhvYyxq','wKjYthe','zxPPzxi','B2f0Eq','AwrLCJO','4Ocuig92zq','Aw5KzxG','AwnRihm','zhjVCc0','igfIC28','Bxm6igm','wfrWruq','B3b0Aw8','iKLUDgu','BwrLC2m','oYbVCge','z3bdEeO','Bw4TC2K','lJuGms4','DhjVA2u','q05uvgm','oYbIywm','DgvKCgy','uxbwuxK','CMDPBI0','BerPzsK','BgLUzvq','qvPnrvC','qsblt1u','zM9UDa','nYWWlJC','mcWWlJG','igvMzMu','BMC6idq','mIaXmK0','wMPwr0e','psjYB3u','Bgf0zwq','CwnTELm','CvftyLi','ENLRwxO','zIbTyxq','yKTXvfi','BMnL','lxnJCM8','wNzvBNC','tffbyMC','zwv6zsa','AguGCMu','lwnHCMq','A291CNm','zJDHotm','igzPBgW','B3i6icm','yNv0Dg8','AguGDxm','mhW5Fdi','EdSGFqO','BwjWvgW','icaGica','B3C6igK','zNvSBhm','Cc1ZAge','ida7igi','mNb4ide','vuDzshO','Dhm6yxu','CM9Szq','oIa2nta','rfjVCxC','CMzSB3C','y2TLzd0','sgvPz2G','oIaXms4','AfnOywq','v1r4uNC','AwvSza','BMu7ige','AgrLwvi','BgvMDa','BwLZyW','AcbVBMu','BgfJzs0','yxrLvge','tgvNAw8','uhPqqNe','we5Nyum','CeX5AxK','C2L6ztO','BMq6icm','oYbMB24','Ae5ytLi','wgzyqNq','odaSmtK','r3jHDMK','zsXTB24','D3jPDgu','rgXNtKu','z24Ty28','uxngtuq','DxjDigG','BwvsDw4','C2zVCM0','su1tDxK','BcbKCMe','vNr3seO','ihrOAxm','reHqvKK','nJTWB2K','nYWWlJm','mdSGBwK','lsbVDMu','odiPoYa','rgfUz2u','A0fvv1a','phnTywW','As1TB24','B1zevuW','igvUDgK','tvHgsgG','ys11Aq','lw5VDgu','nxWXnxW','D2zgA1i','igHVB2S','C2STy2e','ywqGD2G','ihLVDxi','A1rgELu','CZOGmty','ihSGzM8','lNnRlwy','oIaYmNa','BNnWyxi','lwLVxYO','zvbPEgu','vefUvKu','z2nfAhq','yxj0lG','t0zgigi','C2STAgK','lc40ktS','lwfWCgW','DgXPBMu','vgHLC2u','q2XVC2u','z2H0oIa','nsWYntu','zuvSzw0','Bw9fEha','igrPC3a','vfvRt1K','Bg93oIa','B2XPBMu','EMu6ide','B3nL','CM9ZC2G','ignVB2W','ENnOr0y','twrjDw4','y2vZlG','zvj6vKC','zwfWB24','CMXHEsa','DMLHifm','ywXPz24','u0LMv24','wg1KD2K','tK1ZyKG','AxPLoIa','ugf0Aa','ENjTvxe','CgfJAxq','vwPnB2K','Fdf8mtq','A2v5zg8','vNLpvgi','DcWGCMC','u2nHBgu','nsWUmdu','igXLzNq','ic5ZAY0','z2v0q28','AxmGAg8','DZOGAw4','DgvYigm','uNLqsKK','sw5Zzxi','s2v5C3q','BNrezwy','AgfZ','AwX0zxi','DhK6ic4','DgXL','oYbKAxm','mJuPoYa','igrLzMe','D0nVBg8','ywrKrxy','uLHzs00','Bw91C2u','B3zLCIa','ihn5C3q','ohG5mc0','uMv6wfa','s3zYvw0','nc00lJu','ve9LrwW','s2v5vW','idrWEdS','ohb4oYa','C2v0vhi','Denwq1G','Dgv4Dei','BKXUwwW','yMX5lum','AxrJAa','C2HVD24','zM9YBtO','DhjHy2S','CML0zxm','u2vSzwm','lxnPEMu','zZOGnNa','BI5MAxi','lxrPDgW','tuLtu0K','Bw92zq','odbWEcW','icaGlNm','Ag9VA0C','zMLSBfq','EuXuzee','Bgv4oIa','u2P3q3a','vLjnwxK','AhvTyIa','Acb7iha','ig5VigG','x19tquS','yNrUoMG','lwzPBhq','yKrdrfy','zgvYlxi','igrHBwe','s2LSBgu','yxrSEsa','C2STDMe','B250zw4','qK9ty2S','oWOGica','Bwf0y2G','lYbhCMe','zuDbEvi','ywrKAw4','zMXLEdO','wuXcwxK','zIXZExm','B3vUDgu','ChGGmdS','DMfS','ieDLDfy','ihWGC2G','ChjLDMu','mtqYmZyWog5Qvuv1Eq','B3bLCNq','ywrPDxm','zw50tgK','lc4WncK','C2STC3C','Dw9LwMK','mdSGyM8','phbHDgG','mNWZFdu','yxb0Dxi','D2fPDgK','AY1OAw4','rLbtig8','zvKOmtG','z2v0qxq','igjVCMq','lxnLCMK','C3bSAxq','idqTnc4','yxKGB24','zgvYoIa','r05ruKu','zsaOt0G','Awr0AdO','BKLyr3e','Dg87zMK','ktSGFqO','zxLHtg0','ndySmJm','CIGYmNa','ExjPAwu','vw5PDhK','BgTOvLK','oIaJzJy','yxr0ywm','seH6zKe','Bgf5ig8','nxWWFdm','u0fgrsa','tgLZDa','Cg9ZAxq','zMLSzw4','t3PcBu8','B2rL','Dgv4Dc0','BMP2thO','Ec1OzwK','DMfSDwu','B3nWywm','nwmWidm','igLMig0','C2fRDxi','ChG7igy','lwnVBhm','Aw5NicS','ihnVig4','B3bHy2K','A3HJqu0','Bxbts1K','uez4EMy','C3HqyLO','zhrOoIa','4Ocuig5Via','yxK6igy','ktSGy3u','Dhjmzhm','zMXLEc0','ihbHzgq','zNbZ','D0rbuxm','EgvZige','yMvNAw4','iJeUnsi','yxjJ','wvzqCuW','zxDAwxG','iIbZDhi','C2jLzgm','Axb0kq','t1nOB28','u2vNB2u','CMfKAxu','B0DXsgO','mJrptxPXB1G','q09pC2C','B3G9iJa','EYbMAwW','CMLKoYa','BLjZBLa','Bw4TBwe','EuvUz2K','sg5wvMC','sgLKzxm','lc4WnIK','lxj1BM4','igTVDxi','AxHLzdS','zfrpENu','ocK7ih0','DgvTlxu','uJOG','sgvJvuy','ic40oYa','ihSGyMe','mxb4ihi','AwXKigG','FqOGica','s2v5uW','zwXHDgK','y29TCgW','Fdn8n3W','EMz0sKO','zuv4Ca','tg9TzLi','BMuUqxa','Dw5RBM8','B3PJEfC','zsbJEd0','tgz5vw4','yxjKlxq','C3r5Bgu','ihWGrvi','CYbZChi','u2TPChm','z3r1uxm','ywnPDhK','lMP1Bxa','oIbZDge','Awq7iha','oYbIB3i','ChbLBNm','Bg9Hzgu','zgTPDa','i2zMnMi','CM9WywC','Dg9WoIa','nti1ody1BwzxsgrJ','Bw4TDg8','mwzYksK','B2fKzwq','C2ndDhO','C2XPy2u','A2rYq2m','CJOGDgG','zgrPBMC','DhLWzq','x19ZywS','B2STCMu','z1zmBhm','zMy2yJK','A2rYB3a','z29KrgK','uezKsKu','zwjRAxq','AwvZlG','z3jHDMK','ign1CNm','EMzQBM8','ih0kica','A2uTD2K','B290zxi','BNnPDgK','Dxbotey','AwXS','y3vYC28','BgLNBG','B3uU','Ag9VA0m','AwfbuKe','qLvYDKu','uMvMAwW','ywXSig8','mhb4lca','EhnsBwO','DgG6idK','z2jHkdi','EwPbENu','DgL0Bgu','nNWWFdq','B24Oks4','CZOGyxu','lIbuDxi','ig9U','CIb2ywW','C2vSzwe','DdSGFqO','qwTPy1u','q3fzy3K','CI52mq','BhrOige','tKnruMK','nxm0idi','nIaXoci','kg92zxi','zgv2Awm','BIbZAwC','zw50CW','oIa4ChG','AKD3swq','zs5bCha','CIbHzhy','uNnoyKq','nJaWide','icaGyMe','mhG2mda','idaGmJq','DMvTzw4','B3nLihm','C3bLzwq','DMC+','lc4WnsK','BhrLCJO','z2DKBNm','FdiZFdi','ChG7ih0','s2v5qq','DMvYlxy','CMvSB2e','zc5VBIa','zsbBrvG','CMuGkfm','DgvZDa','BguGAwy','v2LWzsa','zgvZ','zdOGBgK','lNnRlwm','lxDPzhq','oYbTAw4','u2fMzxq','oMHVC3q','Aw9UlLq','zM9UDc0','yM9Yzgu','psiJzMy','Aw5WDxq','C3rYB2S','DhKGmc4','Dgv4Dee','igXPBwK','DYGWida','BgTPwMm','y2HdB2W','rvrdzvy','zfL3Bxi','EYbMB24','ifvUAxq','Dg9Nz2W','mcaWida','zLLhvNy','vhzZDwO','tu9ersa','igvSC2u','igP1Bxa','s1LuDwy','BhrO','zM1Syxy','tLfRAem','ywLSzwq','C2HVB3q','y2LYy2W','B3vUzdO','igjHBIa','Aw4TD2K','yMTPDc0','CMfUz2u','oIb0CMe','C2HPzNq','mJqWiey','wvzirM0','AKzbCKe','Awr0Aa','BgfZDeu','ls1W','mtySmc4','EtOGz3i','mtSGBwK','u2fRDxi','nZTWB2K','nMi5zci','Aw4Sihq','ywXSihq','ys1JAgu','mdi1ktS','oYbHBgK','mxWWFdi','AhDwBw8','C2v0sxq','u0flvvi','idqGnc4','BMC6igi','r3nTywS','CKDruKu','ugn0','y0TTy3e','kdaSmcW','z2v0rwW','zhbY','mte2nJrmzePmteW','CZOGy2u','vuDMtw8','yMfJA2q','B3qGBwe','zxjZy3i','BsbVBIa','y3jVC3m','ldi1nsW','BMvHCI0','AgvSza','D1bovKW','BMC6ida','uMvJB2K','iezPCMu','BNqGAge','zMLSBfm','idK5osa','y2f0','u2v0r2e','C3rVCfa','C2vYDMu','icaGkIa','q1HYCg0','CYbnB3y','mZuSmJq','BgrYzw4','mJu1ldi','D3vXrhi','rKf6q1K','rwfJAca','DfrTs0K','BIb7igy','DhLSzq','yM9KEq','EdSGBwe','twDOwvG','C2HHzg8','zgfTywC','DMD1Ehi','wgjtyKi','ywjHtfO','oIaZChG','D0jSDxi','zfDQBMW','Axr5oIa','qLfXy3q','Cg9Uj3m','BwvZC2e','ihrYyw4','lc40nsK','BLbSyxq','DfzTv08','ihSGD2K','ywWGBwu','yMeOmJu','nsK7igi','zMLSBa','t25ODui','B2reAwu','rhrtCKG','EfvRt1O','B2rLu3q','ztOGmtC','oIbMBgu','Dc1Iywm','mtiGmJe','DgvYoYa','DgvTCZO','lMrSBa','AwDODdO','lxnSAwq','nYWUmsK','kdeWmhy','B3bLBG','CMeTA28','AwzTwwm','D2fYBG','ig5LDMu','CdOGmti','y29Kzq','i2zMzG','vMLZDwe','uuvkEfK','oYb3Awq','BeLiwxO','icaGic4','igzVCIa','B2XVCJS','uIb2ms4','z29K','AdOGmZq','z3LIywm','ldiZocW','zwz0ic4','thrlwxK','ywn0Axy','Aw50zxi','CKvKA2K','zdOGi2y','u0fgrq','idrWEca','B29RCYa','vvzUs2C','CePryKi','BNrLCJS','ELLLvfK','mNWXmhW','yw1L','CMvWBge','Aw9UoMy','nNb4oYa','qMXVy2S','svb2ru4','CIiSici','zg93kda','ig1HEsa','oIaXnha','AxnWBge','BgLKzxi','r2XWrxy','y2vSzxi','y2vUDgu','Fdz8n3W','Dw5KoIa','CMfWAwq','ihWGz2e','ieLZr3i','Dcb7igq','sgvHBhq','vKvqqxy','EKL6BKm','z2LMEq','zw1ZoIa','ntuSlJa','DNCGlsa','r0D2uwe','txfOqMW','yMLJlwi','owqIihm','BwrUALm','Ag9VA3m','ieaG','Dg9WoJe','Dxm6idy','DhKGjq','A2TzA0W','yM90Aca','DgG6idi','C3j6uuO','zxiGC2W','ifvjiIW','Eg9hrva','Aw5Uzxi','Aw9KyuO','t0LiAuu','C2STzMK','mNb4o3i','khjLBg8','y2HtAxO','D2vPz2G','nZaWia','lwv2zw4','mhWZFdq','DMvYihS','ohWZFdC','AMHdvLm','y2HPBgq','C2v0uhi','mJyXnJzpquXYzMG','ysblB3u','nty0mZbWru52DMC','rffgre4','Bg9Hzca','ywqGDg8','zvbSDwC','Dw5Kzwq','mJm4ldi','ztSGyM8','zxiGEYa','sw5ZDge','u2L6zq','Ae5LqKC','Aw5Mqw0','BNqTC2K','CIbNyw0','yxrPB24','zwn0Aw8','zgL1CZO','BgvZiem','zvn0EwW','yxjLBNq','qLr5zNG','sw5PDgK','CI1ZzwW','kdi1nsW','zciVpJW','C3rLCa','vxLiDhq','tM8Gu3a','BhmGysa','rgLZywi','Bu91sw0','CMLZAYa','oYb9cIa','s01QD1i','msWUmZy','ztOGmtm','B24U','zgX2BLa','DLzxDfe','zwfK','DxjLihq','zxi7igC','Ag9VA04','B250lxC','mJqSmtC','zwLUC3q','ig1PBIG','vfDyzMO','sNvTCfq','wKvPCei','y2XHC3m','v01fr0G','B3zLCMW','uMfWAwq','ihSGlxC','tMvHu1y','ChvZAa','A3vrwfC','Dc1ZAxO','tencyvu','DxDTAW','zxjSyxK','DMLLD0i','D2LKDgG','ihn0CM8','zw5HyMW','B1jLy28','AwL6BLK','BsbYAwC','Aw5Zzxq','Agf0igq','BLrVt0K','u3bLzwq','C2STC2W','v0fttsa','lMLVig0','yLLywfC','oIbJzw4','BgXIyxi','AwrLihS','ldiXlc4','yw5LBc4','B3rZlG','ChG7cIa','tvfuqNK','zMLSBd0','DgnOoJO','kdeUmsK','nJq2o2m','mJiSocW','z2DSzwq','lxnPEMK','zvzHBhu','Dgv4Dem','idGWChG','CMrLCI0','B29Rihi','ltiUns0','CgXHEtO','B2TLpsi','rgPpA3C','B3vUzca','mdSGy3u','ihjNyMe','mJu1lde','lcbPBNm','CYbpsgu','rLbtigm','ihWGBw8','A3ndChm','icaGlM0','mJaXnKfcvLnRqG','BgLNBI0','BM9Uzq','Cg9W','A3nqB3m','DgfIihS','lM1Ulxq','C2STBwq','yxnLBgK','zxi6oI0','AwXxtxu','uKfuvge','qNr5twq','iefmtca','CMvHzey','uwLwv0u','BNnLDca','q3vZDg8','mcbOB28','Dwnny0O','Fdf8mNW','DgvY','ig5VBMu','Bw4TCge','C2f0Dxi','zMLSBcW','mxWW','nYWUmJG','i2zMyJm','y3rPB24','A2uTBgK','EYbKAxm','EdSGyMe','ChG7iha','BhmGDgG','BdOGAw4','mcuUifm','CMvHzhK','EcbYz2i','BYb7igq','B2LS','mhWXFdq','id0GzMW','oI13zwi','vvjbD2W','lZ48l3m','zxj2zxi','Dxn4C3q','BerPzsW','ig9YigS','wxzrreu','A291CI0','B3vUzdS','vvDnsW','t0HLywW','DxjH','igq9iK0','EYaTD2u','igj1AwW','ihSGywW','CMvZDg8','qvjtEuO','zdSGy28','EeDcufq','ExnxCfy','zwLNAhq','BgWGBwu','A2v5C3q','Bg9N','CeLzrMe','zMyP','zvjHDgu','yJPOB3y','qKXdB3O','DxmGywm','CMznEee','we1ouhG','BM8Gy2G','B2LUDgu','lKXVy2e','zxH0','Aw9F','sfrnta','D2fvtwW','Bw4TAca','oIbUB24','ltiUnsa','BMvJyxa','ihbVAw4','zM9YBxm','lwHLAwC','wvruzNq','B25JBgK','zNbpz20','rgfTywC','CJOGi2y','idmYChG','t3Ltt28','AgvPz2G','BMqIihm','nIa2Bde','AgfPCG','CKXTzum','DgfNtMe','nNWWFdm','B3jKzxi','r21ps0K','FdiYFdC','txLArKW','igjHBM4','yxbWzw4','zw50','BgLUzvC','zMuGBw8','oJa7D2K','D2L0Aca','oYbWB2K','z2v0','AxmGyNu','nsK7ih0','DdOXmda','icaG','mJSGC3q','DgHYB3C','Ag9ZDg4','DdOGoha','oIaWoYa','mtaWid0','vvjbx0S','uwjQvLO','zwTvqxy','ywX1EM8','zg9JDw0','B25TB3u','Ag9VA1a','DxjDig0','ywLZyMW','ide2ChG','zxzLBIa','y3jLzw4','idaGnha','DwP5ExO','yw5Jzs4','zw1LBNq','AxrPB24','CLDJrvy','lwrPCMu','zwXK','yYGXmda','Fdj8mq','y3jLyxq','zJmY','mcWWlJC','wK5HrwS','oIbIBhu','igXLyxy','oYbJB2W','ksaWida','CM9Rzxm','nsaWlti','y2L0EtO','B25PBNa','BI13Awq','B24Gzxy','ywnRz3i','zcbZzwu','C3bSyxK','B250lxm','BgvUz3q','BwuG','ifvxtuS','B3zLCMy','yxrLlwm','Bg93zxi','oYbMAwW','phn2zYa','j3qGC3q','yMfJA2C','icbIB3G','r29Kie0','Bg9Y','oYbIB3G','nsWUmdC','u2HHCNa','DdOGnJa','BMftthm','qLjSBfK','idi0iJ4','Eca2ChG','zwfKige','BgLJyxq','i2zMzJS','Bhv0ztS','EtOGmdS','C3zNiJ4','lJa4ktS','BMf0Dxi','yurHCwO','DNvHBgq','Dg9W','zgL2','oYbQDxm','mtSGyMe','ufL1y1O','yw5JztO','rLfnzNu','qw11rMG','AtmY','icnMzMy','Bwf4','DMLZDwe','zhrOoJe','C2fMzu0','yMX1CG','cIaGica','ww9qwgK','icnMzJy','CYb3B24','D2vIA2K','BMqGBwe','BdOGBM8','B25LigK','yxmGBM8','ndGZmMjQCgPOvq','C2v0','EuzOrw0','twjLEfy','mxW0Fde','icaUBw4','CKTrDwK','ieTLzxa','Aw9FmZa','AxPRvgG','DcbHihq','ie1VDMu','ihSGy28','ihSGCge','wxLcyMK','rwXLBwu','ntuSmJu','Auznuxq','CLHRwKO','AxrLBxm','y2n1CMe','BMq6ihi','BwLKzgW','ve9UCgS','yw5Uywi','Aw9vr0i','C2f6wuK','AwXSihK','mNb4oYa','B2r5','B2vZig4','Dc1Myw0','ywn0A0S','qNLjza','oc00lJu','ug9ZAxq','BgLUzw4','swPdu0G','zgvSzxq','ohb4ksK','yM91BMq','AY1Jyxi','lxjHzgK','BMDL','nJaWia','nxmGy3u','tMfTzq','BMf4ANy','AwrHDgu','ihn0AwW','ChG7igG','v2jQDhm','DgG6ida','BML0igy','CMrLCJO','z2v0sxq','AwDUyxq','Aw9U','C3rHCNq','A0vbzuC','oYb0CMe','igHLAwC','DgXLCW','q291BNq','B2rmA0W','ihSGzMW','BYbWAwC','zxzLCNK','lwfWCgu','igzSzxG','mdSGFqO'];_0x2e0f=function(){return _0x4de0ef;};return _0x2e0f();}function _0x5cbc(_0x115adc,_0x57e617){_0x115adc=_0x115adc-(0x18b6+-0x343*0xa+-0x233*-0x4);var _0x177978=_0x2e0f();var _0x5536a5=_0x177978[_0x115adc];if(_0x5cbc['CQuoWh']===undefined){var _0x1ca446=function(_0x5262c5){var _0x3d7469='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2c4c0c='',_0x5cf89d='';for(var _0x1a2a10=0x1313+0x1f6f*0x1+-0x3282,_0x4999da,_0x5c3092,_0x3ebc7b=-0x5*-0x251+0xb83+-0x8*0x2e3;_0x5c3092=_0x5262c5['charAt'](_0x3ebc7b++);~_0x5c3092&&(_0x4999da=_0x1a2a10%(-0x71f*-0x1+-0x9b6*0x1+0x29b)?_0x4999da*(-0xdd0+-0x1d0b+0x2b1b)+_0x5c3092:_0x5c3092,_0x1a2a10++%(0x1ffe+-0x199a+0xcc*-0x8))?_0x2c4c0c+=String['fromCharCode'](-0x2488+-0xb1+0x2638&_0x4999da>>(-(-0x1*0x269e+-0x1f*-0x110+0xd*0x70)*_0x1a2a10&-0x88d*-0x2+0xaf+0x11c3*-0x1)):0xc33+-0x2*-0x110a+-0x2e47){_0x5c3092=_0x3d7469['indexOf'](_0x5c3092);}for(var _0xa341e1=-0xe66*-0x1+-0x12c1+0xdf*0x5,_0x410936=_0x2c4c0c['length'];_0xa341e1<_0x410936;_0xa341e1++){_0x5cf89d+='%'+('00'+_0x2c4c0c['charCodeAt'](_0xa341e1)['toString'](0x9*0x3f5+0x1bd7*0x1+0x1*-0x3f64))['slice'](-(0x7f4*0x4+0xc04*0x1+-0x2bd2));}return decodeURIComponent(_0x5cf89d);};_0x5cbc['KKdECs']=_0x1ca446,_0x5cbc['WWTLfj']={},_0x5cbc['CQuoWh']=!![];}var _0xfa40fc=_0x177978[-0x1*0x1187+0x1c2f+0x7c*-0x16],_0x54ef4e=_0x115adc+_0xfa40fc,_0x542dbe=_0x5cbc['WWTLfj'][_0x54ef4e];return!_0x542dbe?(_0x5536a5=_0x5cbc['KKdECs'](_0x5536a5),_0x5cbc['WWTLfj'][_0x54ef4e]=_0x5536a5):_0x5536a5=_0x542dbe,_0x5536a5;}(function(_0x2341be,_0x1dbaf6){var _0x4a6e16=_0x5cbc,_0x142e45=_0x2341be();while(!![]){try{var _0x5107b0=-parseInt(_0x4a6e16(0x49b))/(0xa7c+0x1133+0x49d*-0x6)+-parseInt(_0x4a6e16(0x31b))/(0x73*0x3a+0x1*-0x1399+-0x673)*(-parseInt(_0x4a6e16(0x3f2))/(-0x609+-0x13*-0xd6+-0x9d6))+parseInt(_0x4a6e16(0xe6))/(0x432*0x1+-0x662*0x5+0x64*0x47)+parseInt(_0x4a6e16(0x350))/(0x2535+0x11*0x6d+-0x2c6d)+-parseInt(_0x4a6e16(0x2c7))/(-0x2115+0x2*0x88f+0xffd*0x1)+-parseInt(_0x4a6e16(0x50d))/(0xd*-0x24+-0x1*0x15c1+0x2*0xbce)*(-parseInt(_0x4a6e16(0x5ec))/(-0xb1a*-0x3+0x810+-0x3c2*0xb))+parseInt(_0x4a6e16(0x49d))/(0x2c0+0x1d*0x11+-0x129*0x4);if(_0x5107b0===_0x1dbaf6)break;else _0x142e45['push'](_0x142e45['shift']());}catch(_0x273e88){_0x142e45['push'](_0x142e45['shift']());}}}(_0x2e0f,-0x3*0x15fe5+-0x2a67b+0x8f316),((()=>{'use strict';var _0x482499=_0x5cbc,_0x1bbdac={'RXYKM':'Takes'+_0x482499(0x1df)+'ct\x20on'+_0x482499(0x14e)+_0x482499(0x23d)+'en\x20to'+_0x482499(0x4f8)+'.','lbnrd':function(_0x51a02f,_0x52e141){return _0x51a02f!==_0x52e141;},'zrKcd':'scCtz','QpVQy':function(_0x2b5798,_0x1dd6d9){return _0x2b5798+_0x1dd6d9;},'CqYcy':_0x482499(0x480),'SjwCp':function(_0x4c226d,_0x4b9031){return _0x4c226d>_0x4b9031;},'WCOOP':function(_0x5771be,_0x5b3864){return _0x5771be+_0x5b3864;},'lkiZc':function(_0x3108dd,_0x5dca73){return _0x3108dd+_0x5dca73;},'yyeCF':_0x482499(0x67a)+_0x482499(0x614)+'\x20','bYXXW':function(_0x330e15,_0x2e5bb0){return _0x330e15+_0x2e5bb0;},'lIhlQ':_0x482499(0x23b)+'s','Tvsuj':_0x482499(0x34b)+'d','YyBbi':'loadi'+'ng','aDaqj':_0x482499(0x2c5)+_0x482499(0x368)+'\x20','mbpTl':_0x482499(0x3fc),'uRnFf':_0x482499(0x50f),'wesdO':_0x482499(0x10c)+'ents','LQAbg':'nbRVk','TqmNr':_0x482499(0x48e)+_0x482499(0x5a0),'Xmdwi':function(_0x38e0b9,_0x13829b){return _0x38e0b9===_0x13829b;},'kuQXW':function(_0x352134){return _0x352134();},'gUXLN':function(_0xcac753,_0x44c778,_0x1c6e46){return _0xcac753(_0x44c778,_0x1c6e46);},'CNTTc':_0x482499(0x38e),'yjAzu':function(_0x15e93d,_0x1bb0ed){return _0x15e93d+_0x1bb0ed;},'wcMxJ':'mouse','deKye':_0x482499(0x115),'yLTdA':function(_0x5551c0,_0x30a43f){return _0x5551c0!==_0x30a43f;},'TOeEl':'tGOuz','HIKCZ':function(_0x338ac4,_0x58d0d8,_0x5804f5,_0x2ffd35){return _0x338ac4(_0x58d0d8,_0x5804f5,_0x2ffd35);},'rEdki':_0x482499(0x194)+'ra-ko'+_0x482499(0x223)+_0x482499(0x4fe)+'eg\x20fa'+'iled:','dTOzu':function(_0x380ec6,_0x3f03ab){return _0x380ec6!=_0x3f03ab;},'ZvUnw':function(_0x307a03,_0x1d3433,_0x2bcdbf,_0x2fa523,_0x50f917){return _0x307a03(_0x1d3433,_0x2bcdbf,_0x2fa523,_0x50f917);},'xUkOZ':function(_0x34f17f,_0x21c055){return _0x34f17f===_0x21c055;},'BTyfx':_0x482499(0x5a4),'agWEg':function(_0x15554f,_0x27b52e,_0xabf099,_0x5a3e99,_0x3c1d77){return _0x15554f(_0x27b52e,_0xabf099,_0x5a3e99,_0x3c1d77);},'VRMYy':function(_0x5b41f7,_0x33568c,_0x1df1d7,_0x33dbb2,_0x3f1e3a){return _0x5b41f7(_0x33568c,_0x1df1d7,_0x33dbb2,_0x3f1e3a);},'sXLQg':function(_0x4926b4,_0x4cf0ec,_0x40fecb,_0x21aa53,_0x2eb6b3){return _0x4926b4(_0x4cf0ec,_0x40fecb,_0x21aa53,_0x2eb6b3);},'tTmKI':function(_0x224cd6,_0x5c8299){return _0x224cd6!==_0x5c8299;},'QEJxY':_0x482499(0x375),'gcEht':_0x482499(0x590),'tedpf':_0x482499(0x1fc)+_0x482499(0x598)+'-banr'+'s','BQqct':function(_0x103a5d,_0x45cba3){return _0x103a5d<_0x45cba3;},'LRxRS':'kour-'+_0x482499(0x55e),'lDipU':function(_0x2a0a0f){return _0x2a0a0f();},'zYeTY':function(_0x3b2e62,_0x51369a){return _0x3b2e62(_0x51369a);},'TAnVE':function(_0x20c378,_0x4d2f22){return _0x20c378!==_0x4d2f22;},'ioUGB':function(_0x3725b0,_0x4c2786){return _0x3725b0!==_0x4c2786;},'yFhEm':function(_0x3f717a,_0x29999a){return _0x3f717a===_0x29999a;},'RATTa':_0x482499(0x371),'sxPbZ':function(_0x23b5dd,_0x22bd89){return _0x23b5dd!==_0x22bd89;},'rXkZJ':'i32','ubaBi':function(_0x3ba2d6,_0x15f789){return _0x3ba2d6+_0x15f789;},'IwWuM':function(_0x58f9e9,_0x10bafe){return _0x58f9e9+_0x10bafe;},'TjzZF':_0x482499(0x33b)+'wn','kJNhb':function(_0xa4587e,_0x2b3c61){return _0xa4587e(_0x2b3c61);},'XTpED':function(_0x230fa4,_0x1bd47d){return _0x230fa4!==_0x1bd47d;},'teqcf':_0x482499(0x514)+_0x482499(0x166),'Gsmak':'VRnsM','xGBPT':_0x482499(0x2d0)+'|6|4|'+_0x482499(0x527),'LomfR':_0x482499(0x5e2),'JbbOe':'mouse'+'up','kdrCc':_0x482499(0x453)+_0x482499(0x452)+'e','nIXGq':'DOMCo'+_0x482499(0x1ad)+'Loade'+'d','ARSyJ':_0x482499(0x47a),'IIpou':'CANVA'+'S','UVnKg':_0x482499(0x194)+_0x482499(0x43d)+'ur]\x20U'+'WMK\x20i'+_0x482499(0x621)+_0x482499(0x3ca)+':','TUkOY':_0x482499(0x1e2),'eyaLm':function(_0x3aa379,_0x3fc0de){return _0x3aa379-_0x3fc0de;},'rGQRE':'UEEdg','jUGwq':function(_0x151773,_0x2d722a){return _0x151773/_0x2d722a;},'gIprp':function(_0x5631a9,_0x346929){return _0x5631a9(_0x346929);},'GNQRE':function(_0x29389c,_0x122dda){return _0x29389c!==_0x122dda;},'NpYAx':'gtuQs','fzPxj':_0x482499(0x5d5),'wfPZF':'sk-ra'+_0x482499(0x617),'gHnsD':_0x482499(0x2b6)+'l','VEPAv':function(_0x47f825,_0x2381d9){return _0x47f825(_0x2381d9);},'ZLtEI':_0x482499(0x175),'xbVfG':_0x482499(0x157),'iFMQt':_0x482499(0x34d)+'9d','UjMoi':'selec'+'t','AkicU':'JHUYZ','trLds':_0x482499(0x1cb)+'n','FFXQo':'pLyiy','LfyUn':'CGgzJ','iiznY':function(_0x3af6dd,_0x5cf463){return _0x3af6dd+_0x5cf463;},'odLkL':'nav','IjCSH':_0x482499(0x1d0)+'de','izkTh':'mn-lo'+'go','COOsg':_0x482499(0x5bc)+_0x482499(0x4dc)+_0x482499(0x31d)+_0x482499(0x395)+_0x482499(0x13a)+_0x482499(0x4d0)+'=\x22mn-'+'logo-'+_0x482499(0x5cf)+_0x482499(0x2cf)+_0x482499(0x545)+_0x482499(0x434)+'c-1.5'+_0x482499(0x4ff)+'4-4.5'+_0x482499(0xfc)+_0x482499(0x5ac)+'.5\x201.'+_0x482499(0x60e)+_0x482499(0x2da)+'5s4\x202'+_0x482499(0x3e9)+_0x482499(0x2f9)+_0x482499(0x563)+'5-4\x207'+_0x482499(0x16c)+_0x482499(0x4f3)+_0x482499(0x68c)+_0x482499(0x314)+_0x482499(0x501)+_0x482499(0x34d)+_0x482499(0x47d)+_0x482499(0x1d2)+_0x482499(0x3ab)+_0x482499(0x65e)+'\x20stro'+_0x482499(0x52b)+_0x482499(0x564)+_0x482499(0x1e3)+_0x482499(0x570)+_0x482499(0x1d2)+_0x482499(0xe9)+'join='+'\x22roun'+'d\x22/><'+_0x482499(0x3cc)+_0x482499(0x33d)+_0x482499(0x63e)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+_0x482499(0x3b2)+_0x482499(0x3df)+_0x482499(0x53a)+'vg>','iUrMN':'heade'+'r','gUcoQ':'mn-ti'+_0x482499(0x62a),'XKssw':_0x482499(0x3dd)+'a\x20Kou'+'r','qmxZX':_0x482499(0x103)+_0x482499(0x25a),'SCBDV':_0x482499(0x250),'EuqZw':_0x482499(0x658)+'ls','FQMfu':_0x482499(0x1f5)+'n','NQkhC':function(_0xa39d2d,_0x3c400f){return _0xa39d2d+_0x3c400f;},'RezXP':_0x482499(0x118)+'ll>','rfMxA':_0x482499(0x19b)+'t','ZlfIj':_0x482499(0x21b),'sbedc':_0x482499(0x540)+_0x482499(0x5f4)+_0x482499(0x394)+'-pare'+'nt','Ocmak':'1|2|4'+'|0|5|'+'3','NMsbH':function(_0x38e848,_0x27af8a){return _0x38e848*_0x27af8a;},'oVDUL':'#fff','BLCoz':_0x482499(0x46c)+'r','GZjpe':_0x482499(0x602)+'e','JUirg':'px\x20ui'+'-sans'+_0x482499(0x2d8)+_0x482499(0x2c0)+_0x482499(0x32b)+_0x482499(0x667)+'s-ser'+'if','LLVbK':function(_0x52dd6a,_0x226d6a){return _0x52dd6a!==_0x226d6a;},'ArsQe':'vlEYR','mOuIm':function(_0x3f8ee2,_0x3f2ab6){return _0x3f8ee2+_0x3f2ab6;},'LtKYy':function(_0x45c569,_0x35e708){return _0x45c569-_0x35e708;},'PYIBX':function(_0x39acb9,_0x2af2bf){return _0x39acb9+_0x2af2bf;},'ZWaDe':function(_0x176d23,_0x52f4ca,_0x1880c4,_0x29087e,_0x7cb800,_0x57c57e,_0x3a491a,_0x3478d8){return _0x176d23(_0x52f4ca,_0x1880c4,_0x29087e,_0x7cb800,_0x57c57e,_0x3a491a,_0x3478d8);},'NHqXC':'LMB','hNXNR':function(_0x41c86c,_0xb780c4,_0x32dcf5,_0x21e9f1,_0x2e6ee2,_0x457337,_0x1d99cf){return _0x41c86c(_0xb780c4,_0x32dcf5,_0x21e9f1,_0x2e6ee2,_0x457337,_0x1d99cf);},'fuYfR':_0x482499(0x196),'gVLls':function(_0x8fa847,_0x32329d){return _0x8fa847||_0x32329d;},'KrRfF':function(_0x2fd6b3,_0x24f670){return _0x2fd6b3+_0x24f670;},'NxldP':_0x482499(0x4cf),'YLBYy':'rgba('+_0x482499(0x506)+_0x482499(0x21c)+'0,0.6'+')','DlgNE':_0x482499(0x111)+'check'+'ed','ilWMu':_0x482499(0x3d9),'kxcAM':function(_0x1c62d0,_0x20d16a){return _0x1c62d0+_0x20d16a;},'MXFHh':'stron'+'g','XpsMD':'calls'+_0x482499(0x3be)+_0x482499(0x322)+_0x482499(0x33a)+_0x482499(0x1ac)+'tion.'+'set_t'+'arget'+'Frame'+_0x482499(0x19e),'naxjv':_0x482499(0x35f)+'e','IVNKH':'GtTMj','TWXfj':function(_0x4b7ce2){return _0x4b7ce2();},'HecUF':_0x482499(0x200),'pJQbB':'No\x20Re'+'coil','hWELZ':_0x482499(0x4b9)+'read','UyHtt':_0x482499(0x181)+_0x482499(0x342)+_0x482499(0x5ca)+_0x482499(0x5e8)+_0x482499(0x30e)+_0x482499(0x600)+'cy\x20on'+'\x20your'+'\x20weap'+_0x482499(0x5b0)+'ery\x202'+'00ms.','ICqsd':function(_0x8fa863,_0x1e0799,_0xb84c6e,_0x1cb4fa,_0x238c81,_0x26e424){return _0x8fa863(_0x1e0799,_0xb84c6e,_0x1cb4fa,_0x238c81,_0x26e424);},'fmlav':_0x482499(0x271)+_0x482499(0xf4)+'\x20four'+_0x482499(0x5f7)+'ment\x20'+_0x482499(0x398)+_0x482499(0x3b7)+'ts\x20pl'+_0x482499(0x557)+_0x482499(0x46b)+_0x482499(0x4ac)+'.','CZimn':'Jump\x20'+_0x482499(0x2bb)+'vity','iaARA':'Zeroe'+_0x482499(0x40a)+'ement'+'.last'+_0x482499(0x4ce)+'ime\x20s'+'o\x20the'+_0x482499(0x3c5)+_0x482499(0x25c)+'down\x20'+_0x482499(0x687)+'\x20appl'+_0x482499(0x362),'eTrBx':_0x482499(0x27b)+_0x482499(0x5ab),'wfFkR':'Adblo'+'ck','OJlUh':'captu'+_0x482499(0x3a4)+'etGam'+'eRunn'+_0x482499(0x2fe)+_0x482499(0x471)+'ounde'+'d)','iAmOl':_0x482499(0x55a)+'eats\x20'+_0x482499(0x135)+_0x482499(0x100)+'ut\x20th'+'is','bsjJF':_0x482499(0x3a7)+'my\x20se'+'tting'+'s','ITjJV':function(_0x4c4219,_0x16db62){return _0x4c4219+_0x16db62;},'qQSbR':function(_0x5ead72,_0x563012){return _0x5ead72+_0x563012;},'gOEhe':function(_0x58ce8b,_0x294b66){return _0x58ce8b+_0x294b66;},'YvQDE':function(_0x244457,_0x52707e){return _0x244457+_0x52707e;},'Knrbs':function(_0x4d732f,_0x2ec001,_0x58e3d5){return _0x4d732f(_0x2ec001,_0x58e3d5);},'TOnpk':'posit'+'ion:f'+'ixed;'+_0x482499(0x4e3)+_0x482499(0x57f)+_0x482499(0x5e0)+_0x482499(0x12c)+_0x482499(0x56f)+_0x482499(0x585)+'vh;z-'+_0x482499(0x1c5)+_0x482499(0x16f)+'48364'+_0x482499(0x22b)+'nter-'+'event'+'s:non'+'e','MyZFL':_0x482499(0x43c),'dWjnl':_0x482499(0x130)+'t','JBmOS':_0x482499(0x444)+'l','oRnYv':_0x482499(0x167),'SIfWn':_0x482499(0x3ad)+'y','qJGGw':_0x482499(0x26e)+'wn','XZgWG':'<svg\x20'+'viewB'+'ox=\x220'+_0x482499(0x395)+_0x482499(0x5c8)+'<path'+'\x20d=\x22M'+_0x482499(0x434)+'c-1.5'+_0x482499(0x4ff)+_0x482499(0x28d)+'-4-7.'+_0x482499(0x5ac)+_0x482499(0x1d1)+'8-4.5'+'\x204-4.'+_0x482499(0x387)+_0x482499(0x3e9)+_0x482499(0x2f9)+'-2.5\x20'+_0x482499(0x674)+'.5z\x22\x20'+_0x482499(0x4f3)+'\x22none'+_0x482499(0x314)+_0x482499(0x501)+'#ff6b'+_0x482499(0x47d)+_0x482499(0x1d2)+_0x482499(0x3ab)+'h=\x222\x22'+_0x482499(0x4de)+'ke-li'+_0x482499(0x564)+_0x482499(0x1e3)+'nd\x22\x20s'+'troke'+_0x482499(0xe9)+'join='+'\x22roun'+_0x482499(0x4b6)+_0x482499(0x3cc)+'e\x20cx='+_0x482499(0x63e)+'cy=\x221'+'0\x22\x20r='+_0x482499(0x310)+_0x482499(0x1f3)+'=\x22#ff'+'6b9d\x22'+_0x482499(0x53a)+'vg>','FMfGh':function(_0x27ab9b){return _0x27ab9b();},'anOVn':_0x482499(0x2fb)+_0x482499(0x152)+'r.v1','MPQyr':'mKlru','LdXFm':'Assem'+_0x482499(0x296)+_0x482499(0x5c4)+_0x482499(0x437),'JQMvv':_0x482499(0x15f)+_0x482499(0x535),'zftJJ':_0x482499(0x14d)+'ve','EKJRy':_0x482499(0x192)+_0x482499(0x4a2),'kAUWP':_0x482499(0x4b3)+_0x482499(0x212)+_0x482499(0x17c)+_0x482499(0x3c7),'IPvEN':_0x482499(0x317)+_0x482499(0x522),'pIYFa':function(_0x132de6,_0x365917,_0x34f490){return _0x132de6(_0x365917,_0x34f490);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x482499(0x3a5)](location[_0x482499(0x589)+_0x482499(0x45e)]||''))return;if(window['__SAK'+'URA_K'+_0x482499(0x681)])return;window[_0x482499(0x2ae)+_0x482499(0x58d)+'OUR__']=!![];var _0x503cb2=_0x1bbdac[_0x482499(0x5fd)],_0x293d9c=_0x482499(0x529)+'c6',_0x41a9b5={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x532c70={..._0x41a9b5};try{Object[_0x482499(0x11d)+'n'](_0x532c70,JSON['parse'](localStorage[_0x482499(0x623)+'em'](_0x1bbdac['anOVn'])||'{}'));}catch(_0x1f5a41){}function _0x28a7cd(){var _0x50c149=_0x482499,_0x1d5567={'vzBVb':function(_0x2b90b6,_0x59ad77,_0xe26613,_0x526a78,_0x2c7ba9,_0x52ecac){return _0x2b90b6(_0x59ad77,_0xe26613,_0x526a78,_0x2c7ba9,_0x52ecac);},'UkyPM':function(_0x25ea24,_0x12c073){return _0x25ea24(_0x12c073);},'vuald':_0x1bbdac[_0x50c149(0x286)]};if(_0x1bbdac[_0x50c149(0x177)](_0x1bbdac[_0x50c149(0x1b9)],_0x50c149(0x354))){if(!_0x570f79||_0x3606fe[_0x50c149(0x669)+_0x50c149(0x3a8)](_0x38bc9d)||_0x53419e['lengt'+'h']>-0x768*0x4+0x6b*-0xa+0x1*0x220e)return;_0x1498e1['push'](_0x49414b);}else try{if(_0x50c149(0x222)!==_0x50c149(0x222))return[_0x1d5567['vzBVb'](_0x18e1ce,'Adblo'+'ck',_0x50c149(0x324)+'\x20kour'+_0x50c149(0x245)+_0x50c149(0x57a)+_0x50c149(0x488)+_0x50c149(0x4f0),_0x4092ca[_0x50c149(0x199)+'ck'],_0x156264=>{var _0x4cae69=_0x50c149;_0x19121b[_0x4cae69(0x199)+'ck']=_0x156264,_0x9f20a2();},[_0x1d5567[_0x50c149(0x69e)](_0x123782,_0x1d5567[_0x50c149(0x5d3)])])];else localStorage[_0x50c149(0x3e7)+'em']('sakur'+_0x50c149(0x152)+'r.v1',JSON[_0x50c149(0x1a3)+'gify'](_0x532c70));}catch(_0xb9c052){}}var _0x535b13={'uwmk':!!window[_0x482499(0x2e7)+_0x482499(0x168)+_0x482499(0x34c)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x532c70[_0x482499(0x5e1)+'ode'],'lastError':''};try{window[_0x482499(0x285)+_0x482499(0x2ca)+_0x482499(0x1a7)+'r'](_0x482499(0x67f),_0x15dbfe=>{var _0x4e8266=_0x482499;try{var _0x11e7ae=_0x15dbfe&&(_0x15dbfe[_0x4e8266(0x422)+'ge']||_0x15dbfe['error']&&_0x15dbfe['error'][_0x4e8266(0x422)+'ge'])||_0x4e8266(0x33b)+'wn';if(_0x15dbfe&&_0x15dbfe['filen'+'ame'])_0x11e7ae+=_0x1bbdac[_0x4e8266(0x1d6)](_0x1bbdac[_0x4e8266(0x383)]+String(_0x15dbfe[_0x4e8266(0x2f1)+_0x4e8266(0x45e)])[_0x4e8266(0x2d9)]('/')[_0x4e8266(0x510)]()+':',_0x15dbfe[_0x4e8266(0x610)+'o']||'?');_0x535b13['lastE'+_0x4e8266(0x684)]=String(_0x11e7ae)['slice'](0x3*0x51e+0x1a30+-0x298a,-0x1c1*-0x11+0x7*-0x3a9+-0x392);}catch(_0x51fedc){}});}catch(_0x20c0af){}var _0x24ceb1=null,_0x1ed7d4=null,_0x8f5743={},_0x298043=[],_0x3fa029=[],_0xc54181=new Map();function _0x3656d1(_0x1b88e1,_0x33beb7){var _0x4dffc0=_0x482499;if(_0x4dffc0(0x47e)!==_0x4dffc0(0x519)){if(!_0x33beb7||_0x1b88e1['inclu'+_0x4dffc0(0x3a8)](_0x33beb7)||_0x1bbdac[_0x4dffc0(0x2a9)](_0x1b88e1[_0x4dffc0(0x5b5)+'h'],0x1*0xe2f+0x4c*-0x42+0x15*0x45))return;_0x1b88e1['push'](_0x33beb7);}else _0x511517['enabl'+'ed']=![];}function _0x48185e(_0x512062,_0xa8197,_0x250388,_0x6d50ff){var _0x319be4=_0x482499,_0x43421b=0x1f2d+-0x7ab*-0x2+0xf3*-0x31;try{_0x43421b=_0xa8197&&_0xa8197[_0x319be4(0x2c3)]?_0xa8197[_0x319be4(0x2c3)]():-0x1*0x251+-0xb*-0x1e+-0x1*-0x107;}catch(_0x5a3605){}if(!_0x43421b)return;_0x3656d1(_0x512062,_0x43421b),_0x250388[_0x6d50ff]=_0x512062[_0x319be4(0x5b5)+'h'];if(_0x6d50ff===_0x1bbdac['wesdO']&&_0x512062[_0x319be4(0x5b5)+'h']){if(_0x319be4(0x1bb)!==_0x1bbdac[_0x319be4(0x1ed)])_0x164adf[_0x319be4(0x4fb)+'onten'+'t']=_0x1c6996[_0x319be4(0x5e1)+_0x319be4(0x2f3)]?_0x319be4(0x2ee)+_0x319be4(0x3c3)+_0x319be4(0x22e)+_0x319be4(0x262)+_0x319be4(0x137)+_0x319be4(0x2ad)+'ooks\x20'+_0x319be4(0x490)+_0x319be4(0x4a0)+_0x319be4(0x1ab)+')':_0x995e45[_0x319be4(0x4da)]?_0x1bbdac[_0x319be4(0x1d6)](_0x1bbdac['WCOOP'](_0x1bbdac[_0x319be4(0x3b9)](_0x1bbdac['yyeCF']+(_0x52f6c0['hooks'+'Total']?_0x1bbdac[_0x319be4(0x4ea)](_0x11bd53[_0x319be4(0x47f)+'Ok']+'/'+_0x4becd0['hooks'+'Total'],_0x1bbdac['lIhlQ']):_0x319be4(0x51f)+_0x319be4(0x69b)+'med\x20('+_0x319be4(0x373)+'ff)')+('\x20|\x20ga'+_0x319be4(0x5b6)),_0x23f54a[_0x319be4(0x666)+_0x319be4(0x353)]?_0x1bbdac[_0x319be4(0x3c2)]:_0x1bbdac[_0x319be4(0x5fa)]),_0x1bbdac[_0x319be4(0x5d2)])+(_0x1e6acc[_0x319be4(0x3cb)+'ers']?_0x319be4(0x3fc):'none')+(_0x319be4(0x50a)+_0x319be4(0x396)+'t\x20'),_0x1378fa[_0x319be4(0x10c)+'ents']?_0x1bbdac[_0x319be4(0x1f9)]:_0x1bbdac['uRnFf'])+(_0x3a1b8b[_0x319be4(0x3d8)+_0x319be4(0x684)]?'\x20|\x20ER'+'R:\x20'+_0x2b12e2[_0x319be4(0x3d8)+'rror']:''):'UWMK\x20'+_0x319be4(0x2a1)+'NG\x20-\x20'+_0x319be4(0x4d2)+_0x319be4(0x2db)+_0x319be4(0x66b)+_0x319be4(0x4cb)+_0x319be4(0x3e1)+_0x319be4(0x1f6)+'erscr'+_0x319be4(0x316);else{var _0x5ebac0=_0x8f5743[_0x319be4(0x14d)+'ve'];if(_0x5ebac0)try{_0x5ebac0['enabl'+'ed']=![];}catch(_0x1b297a){}}}}function _0x159a77(_0x5e3c9e,_0x125cc8,_0x490d23){var _0x35300a=_0x482499,_0x4b9435=_0xc54181[_0x35300a(0x582)](_0x5e3c9e);if(!_0x4b9435){if(_0x1bbdac[_0x35300a(0x266)](_0x35300a(0x386),_0x35300a(0x386)))_0x4b9435=new Map(),_0xc54181['set'](_0x5e3c9e,_0x4b9435);else{var _0x4aed1d=_0x22f136[_0x35300a(0x5a3)+_0x35300a(0x253)+_0x35300a(0x57c)]('selec'+'t');_0x4aed1d[_0x35300a(0x4d0)+_0x35300a(0x61a)]=_0x1bbdac[_0x35300a(0x660)];for(var [_0x1561aa,_0x4edf51]of _0x53c901){var _0x8c338b=_0xbd45e9['creat'+_0x35300a(0x253)+_0x35300a(0x57c)](_0x35300a(0x1cb)+'n');_0x8c338b[_0x35300a(0x2f7)]=_0x1561aa,_0x8c338b['textC'+'onten'+'t']=_0x4edf51,_0x4aed1d['appen'+'dChil'+'d'](_0x8c338b);}return _0x4aed1d['value']=_0xaac8e,_0x4aed1d[_0x35300a(0x18d)+_0x35300a(0x617)]=()=>_0x46d559(_0x4aed1d[_0x35300a(0x2f7)]),_0x4aed1d;}}if(!_0x4b9435[_0x35300a(0x27d)](_0x125cc8))try{var _0x398a23=new _0x24ceb1(_0x5e3c9e)['readF'+_0x35300a(0x20b)](_0x125cc8,_0x490d23);_0x4b9435[_0x35300a(0x5ed)](_0x125cc8,_0x398a23!==undefined?_0x398a23['val']():null);}catch(_0x47b502){'lPcxB'!==_0x35300a(0x636)?(_0x3f6e8f[_0x35300a(0x418)+'eValu'+'e']=_0x5718b0,_0x25a11f()):_0x4b9435['set'](_0x125cc8,null);}return _0x4b9435[_0x35300a(0x582)](_0x125cc8);}function _0x145685(_0x37037a,_0x442606,_0x1711a2,_0x27c8c6){var _0x24d1cc=_0x482499,_0x1a664b={'PhBxc':function(_0x222bb6){var _0x546070=_0x5cbc;return _0x1bbdac[_0x546070(0x4d7)](_0x222bb6);},'flCyi':function(_0x1500cb,_0x1f6fcf,_0x566562){return _0x1bbdac['gUXLN'](_0x1500cb,_0x1f6fcf,_0x566562);}};if(_0x1bbdac[_0x24d1cc(0x1d3)]==='AGRCk')_0x4f6319[_0x24d1cc(0x44c)]=_0x566125,_0x1a664b['PhBxc'](_0x15abbf),_0x4c5e8b(_0x24d1cc(0x44c),_0x1ca9b8),_0x1a664b['flCyi'](_0x3ff89b,'godDi'+'e',_0x3d66a8);else try{new _0x24ceb1(_0x37037a)[_0x24d1cc(0x21f)+_0x24d1cc(0x670)](_0x442606,_0x1711a2,_0x27c8c6);}catch(_0x440c8f){}}function _0x1f88e0(_0x4638ca,_0xa21c26){var _0x12c289=_0x482499,_0x1a8e23={'yZleB':function(_0x3e84c3,_0x2fda69){var _0x54cf92=_0x5cbc;return _0x1bbdac[_0x54cf92(0x378)](_0x3e84c3,_0x2fda69);},'tCVCX':_0x1bbdac[_0x12c289(0x183)]};try{var _0x5519c3=new _0x24ceb1(_0x4638ca)[_0x12c289(0x51b)+_0x12c289(0x20b)](_0xa21c26,_0x1bbdac[_0x12c289(0x655)]);return _0x5519c3?_0x5519c3['val']():-0x98e+-0xc04+-0xac9*-0x2;}catch(_0x5b6442){if(_0x1bbdac['lbnrd']('mbQRn','mbQRn')){if(_0x47aa0d['__sak'+_0x12c289(0x544)])return;_0x3be278['add'](_0x1a8e23['yZleB'](_0x1a8e23[_0x12c289(0x293)],_0x922c02['butto'+'n']+(0x2b2+-0x2c7*0x3+0x5a4)));var _0x569e85=_0x3cdbc6[_0x1a8e23['yZleB'](_0x599842['butto'+'n'],0x1f*-0x24+-0x22de+-0x391*-0xb)];if(_0x569e85){_0x569e85[_0x12c289(0x4d6)](_0x3be5ba[_0x12c289(0x1a1)]());if(_0x569e85[_0x12c289(0x5b5)+'h']>-0xdd3*-0x1+-0x20*-0xf4+-0xeb9*0x3)_0x569e85['shift']();}}else return-0x108b+-0x1*0x21c9+-0xc95*-0x4;}}function _0x1cd29f(_0xfde845,_0x2bb6c4,_0x3f7e9e,_0xe447d){var _0x121094=_0x482499;if(_0x1bbdac[_0x121094(0x2a7)](_0x1bbdac[_0x121094(0x28e)],_0x121094(0x260))){var _0x525629=_0x1bbdac[_0x121094(0x67b)](_0x159a77,_0xfde845,_0x2bb6c4,_0x3f7e9e);if(_0x525629!=null)_0x145685(_0xfde845,_0x2bb6c4,_0x3f7e9e,_0x525629*_0xe447d);}else _0x40c271[_0x121094(0x612)+'e'](_0x2ebc26['code']);}function _0x5a3b17(_0x30c90c,_0xad7a40,_0x36ee5c,_0xc52d96,_0x439999,_0x13eaea,_0x559d62){var _0x3ee463=_0x482499;try{var _0x1c1f2e=_0x1ed7d4[_0x3ee463(0x593)+'refix']({'typeName':_0xad7a40,'methodName':_0x36ee5c,'params':_0xc52d96,'returnType':_0x439999},_0x13eaea);return _0x1c1f2e[_0x3ee463(0x4df)+'ed']=_0x559d62!==![],_0x8f5743[_0x30c90c]=_0x1c1f2e,_0x535b13['hooks'+_0x3ee463(0x132)]++,_0x1c1f2e;}catch(_0xda3ed5){return console['warn'](_0x1bbdac[_0x3ee463(0x454)],_0x30c90c,_0xda3ed5&&_0xda3ed5['messa'+'ge']),null;}}function _0x3e1954(_0x2739b2,_0x38db06,_0x4ad0d7,_0x40f921,_0x222261,_0x4a1ae7,_0x49fe0f){var _0x22bf0c=_0x482499,_0x3039f9={'vbMFo':function(_0x32bf06,_0x2b375f,_0x4af134,_0x3f1c84){var _0x47d39f=_0x5cbc;return _0x1bbdac[_0x47d39f(0x67b)](_0x32bf06,_0x2b375f,_0x4af134,_0x3f1c84);},'RKkHc':function(_0x4d03a8,_0x49ab81){var _0x428223=_0x5cbc;return _0x1bbdac[_0x428223(0x329)](_0x4d03a8,_0x49ab81);},'VtwHJ':function(_0x5e548f,_0xe4ccd3,_0x469275,_0x1166b0,_0x56a800){var _0x30f4ea=_0x5cbc;return _0x1bbdac[_0x30f4ea(0x1ec)](_0x5e548f,_0xe4ccd3,_0x469275,_0x1166b0,_0x56a800);},'OzBmO':function(_0x188387,_0x503294){return _0x188387*_0x503294;}};if('gcXkN'!==_0x22bf0c(0x25d))try{var _0x23a56e=(_0x22bf0c(0x495)+_0x22bf0c(0x5a2))[_0x22bf0c(0x2d9)]('|'),_0x1d4e09=-0x15cf+-0xad0+0x209f;while(!![]){switch(_0x23a56e[_0x1d4e09++]){case'0':var _0x31a253=_0x1ed7d4['hookP'+'ostfi'+'x']({'typeName':_0x38db06,'methodName':_0x4ad0d7,'params':_0x40f921,'returnType':_0x222261},_0x4a1ae7);continue;case'1':return _0x31a253;case'2':_0x535b13['hooks'+'Total']++;continue;case'3':_0x31a253['enabl'+'ed']=_0x49fe0f!==![];continue;case'4':_0x8f5743[_0x2739b2]=_0x31a253;continue;}break;}}catch(_0x3ff419){if(_0x1bbdac[_0x22bf0c(0x42f)]('srzQJ',_0x22bf0c(0x487)))return console[_0x22bf0c(0x43f)](_0x1bbdac['rEdki'],_0x2739b2,_0x3ff419&&_0x3ff419['messa'+'ge']),null;else{var _0x19e026=_0x3039f9['vbMFo'](_0x16a5c0,_0x219a48,_0x341c6d,_0xefb839);if(_0x3039f9['RKkHc'](_0x19e026,null))_0x3039f9[_0x22bf0c(0x228)](_0x21acd3,_0x394b99,_0x279de8,_0x335982,_0x3039f9[_0x22bf0c(0x2f2)](_0x19e026,_0x32ae8e));}}else _0x5ad545[_0x22bf0c(0x511)]=_0x3f3e02,_0x49836d();}var _0x567313=()=>![];try{if(_0x1bbdac['xUkOZ'](_0x1bbdac[_0x482499(0x6a2)],_0x482499(0x176)))_0x29a545(_0xbd5cbb,-0xae+-0x131f+0x13f5,_0x1bbdac[_0x482499(0x4b2)],_0x3e8bfa),_0x5e62b3(_0x5bb128,0x476+0x1dd+0xf*-0x69,_0x1bbdac[_0x482499(0x4b2)],_0x17690b),_0x486367(_0x4d7208,-0x1e30+0x3*0x95+0x1ca1,_0x482499(0x5a4),_0x217f28),_0x1bbdac['agWEg'](_0x2bdc13,_0x2e5c46,0x5ee+0x24e4+-0x2a9e,'f32',_0x5a7874),_0x1bbdac['VRMYy'](_0x2cc305,_0x326665,-0x2*0xd62+0x699*-0x1+0x2179,_0x1bbdac[_0x482499(0x4b2)],_0x262768),_0x1bbdac[_0x482499(0x1ec)](_0x2d6bd3,_0x5a90c5,-0xb68+-0x1*-0x33b+0x84d,_0x482499(0x5a4),_0x297a28);else{if(window[_0x482499(0x2e7)+_0x482499(0x168)+_0x482499(0x34c)]&&!_0x532c70['safeM'+'ode']){var _0x13433f=(_0x482499(0x37a)+_0x482499(0x521)+'5|3')['split']('|'),_0x596b39=0x510*-0x7+-0x21ed+-0x9*-0x7b5;while(!![]){switch(_0x13433f[_0x596b39++]){case'0':_0x1ed7d4=window['Unity'+_0x482499(0x168)+_0x482499(0x34c)]['Runti'+'me']['creat'+_0x482499(0x4a1)+'in']({'name':'Sakur'+_0x482499(0x6a6),'version':'1.1.0','referencedAssemblies':[_0x1bbdac['LdXFm']]});continue;case'1':if(_0x532c70['hookG'+_0x482499(0x42d)])_0x5a3b17(_0x1bbdac['naxjv'],_0x482499(0x543)+'th','Local'+'Die',[_0x482499(0x5dc),_0x1bbdac['rXkZJ'],'i32',_0x1bbdac['rXkZJ'],_0x1bbdac['rXkZJ']],undefined,_0x567313,!!_0x532c70['god']);continue;case'2':if(_0x532c70[_0x482499(0x4c8)+'oReco'+'il'])_0x5a3b17(_0x1bbdac['JQMvv'],_0x482499(0x213)+_0x482499(0x425)+_0x482499(0x566)+_0x482499(0x634)+'tide.'+_0x482499(0x3ff)+_0x482499(0x13e)+'on','Tick',[_0x1bbdac[_0x482499(0x5fe)]],undefined,_0x567313,!!_0x532c70['noRec'+_0x482499(0x535)]);continue;case'3':if(_0x532c70['hookC'+_0x482499(0x2d1)+'e'])_0x3e1954(_0x1bbdac[_0x482499(0x337)],_0x482499(0x213)+_0x482499(0x425)+_0x482499(0x566)+'.Over'+'tide.'+'Movem'+_0x482499(0x57c),_0x1bbdac[_0x482499(0xf2)],[_0x1bbdac[_0x482499(0x5fe)]],_0x1bbdac[_0x482499(0x5fe)],(_0x2c73c4,_0x2128c5)=>{_0x1bbdac['VRMYy'](_0x48185e,_0x298043,_0x2128c5,_0x535b13,_0x1bbdac['wesdO']);},!![]);continue;case'4':if(_0x532c70['hookG'+'od'])_0x5a3b17(_0x482499(0x44c),_0x482499(0x543)+'th',_0x1bbdac[_0x482499(0x231)],[_0x1bbdac[_0x482499(0x5fe)],_0x482499(0x5dc)],undefined,_0x567313,!!_0x532c70[_0x482499(0x44c)]);continue;case'5':if(_0x532c70[_0x482499(0x36f)+_0x482499(0x2d1)+'e'])_0x1bbdac['ZWaDe'](_0x3e1954,'capSh'+'ooter',_0x1bbdac[_0x482499(0x463)],_0x482499(0x405)+_0x482499(0x224)+_0x482499(0x685),[_0x1bbdac['rXkZJ'],_0x1bbdac['rXkZJ']],undefined,(_0xda2c30,_0x722350)=>{var _0x1d9517=_0x482499;_0x1bbdac[_0x1d9517(0x671)](_0x48185e,_0x3fa029,_0x722350,_0x535b13,'shoot'+'ers');},!![]);continue;case'6':_0x24ceb1=window[_0x482499(0x2e7)+_0x482499(0x168)+_0x482499(0x34c)]['Value'+'Wrapp'+'er'];continue;}break;}}}}catch(_0x5e0095){console['warn'](_0x1bbdac[_0x482499(0x459)],_0x5e0095&&_0x5e0095[_0x482499(0x422)+'ge']);}function _0x7185a9(_0xa75248,_0x4eca0c){var _0x2955bc=_0x482499;if(_0x1bbdac['xUkOZ'](_0x1bbdac[_0x2955bc(0x445)],_0x1bbdac[_0x2955bc(0x248)]))try{var _0x4f2040=_0x10f10b['hookP'+'refix']({'typeName':_0x337745,'methodName':_0x5c250f,'params':_0x49ada1,'returnType':_0x419002},_0x49ecb9);return _0x4f2040[_0x2955bc(0x4df)+'ed']=_0x1bbdac[_0x2955bc(0x411)](_0xcbf3ff,![]),_0x2802ab[_0x45beff]=_0x4f2040,_0x50e5ac['hooks'+_0x2955bc(0x132)]++,_0x4f2040;}catch(_0x38165b){return _0x81c648['warn'](_0x1bbdac[_0x2955bc(0x454)],_0x208e9c,_0x38165b&&_0x38165b[_0x2955bc(0x422)+'ge']),null;}else{var _0x554373=_0x8f5743[_0xa75248];if(_0x554373)try{_0x554373[_0x2955bc(0x4df)+'ed']=!!_0x4eca0c;}catch(_0x508611){}}}_0x1bbdac[_0x482499(0x552)](setInterval,()=>{var _0xb15f53=_0x482499,_0x12414c={'njvLz':function(_0x188da4){return _0x1bbdac['lDipU'](_0x188da4);}};if(!_0x24ceb1||!window['unity'+_0xb15f53(0x4a6)+_0xb15f53(0x1ea)])return;var _0x52f0b5=(_0x1bbdac[_0xb15f53(0x45c)](Number,_0x532c70['speed'+_0xb15f53(0x3ed)])||0x23af+0x2*-0x33d+0x99b*-0x3)/(-0xa12+0x91f*-0x2+0x1cb4),_0x19157c=(Number(_0x532c70[_0xb15f53(0x67e)+'ct'])||-0xc95*0x2+0xc59+-0x15*-0xa1)/(0xa*-0xdc+0x2b*0x43+-0x245),_0x12cf5a=(Number(_0x532c70['gravi'+_0xb15f53(0x690)])||0x2435*0x1+0x85f+-0x2c30)/(0x25a2+-0x3*0xc75+0xb*0x3),_0x4f1bea=Math[_0xb15f53(0x5de)](-0x25*-0xef+0x2609+-0x4893,Number(_0x532c70['damag'+_0xb15f53(0x4fa)+'e'])||-0x67f*-0x5+0x1aa2+-0x3a87*0x1),_0x38395b=_0x52f0b5!==0x652*-0x5+0x8b1+0x16ea||_0x1bbdac[_0xb15f53(0x247)](_0x19157c,-0x1*-0x1df7+-0x10f*-0xb+-0x1*0x299b)||_0x1bbdac[_0xb15f53(0x605)](_0x12cf5a,0x8e*-0xb+0x2*-0x409+0xe2d)||_0x532c70[_0xb15f53(0xee)],_0x593c70=_0x532c70[_0xb15f53(0xfa)+_0xb15f53(0x4c5)]||_0x532c70['damag'+_0xb15f53(0x338)]||_0x532c70[_0xb15f53(0x4a9)+_0xb15f53(0x254)]||_0x532c70[_0xb15f53(0x46f)+_0xb15f53(0x69d)];if(!_0x38395b&&!_0x593c70)return;try{for(var _0x44ba1c=-0x2564+0xbe9+0x197b;_0x44ba1c<_0x298043[_0xb15f53(0x5b5)+'h'];_0x44ba1c++){if(_0xb15f53(0x5d8)!=='PHnYK'){var _0xfbee54=_0x298043[_0x44ba1c];if(!_0xfbee54)continue;_0x52f0b5!==-0x3a3*-0x8+-0x3ab*0x7+-0x36a&&(_0x1bbdac[_0xb15f53(0x2aa)](_0x1cd29f,_0xfbee54,0x33b*0xb+0x2256+-0x173d*0x3,'f32',_0x52f0b5),_0x1cd29f(_0xfbee54,-0x2*0x4e1+0x1cc*-0xe+0x2316*0x1,_0x1bbdac['BTyfx'],_0x52f0b5),_0x1cd29f(_0xfbee54,0xa22+-0x12eb+0x8f9,_0xb15f53(0x5a4),_0x52f0b5),_0x1bbdac['ZvUnw'](_0x1cd29f,_0xfbee54,0xfff+0x8*0x296+-0x247b,_0x1bbdac[_0xb15f53(0x4b2)],_0x52f0b5),_0x1cd29f(_0xfbee54,-0x12cc+-0x7d8+-0x6b0*-0x4,'f32',_0x52f0b5),_0x1bbdac[_0xb15f53(0x2aa)](_0x1cd29f,_0xfbee54,-0x17fc+-0x24a*-0x4+0xef4,_0x1bbdac[_0xb15f53(0x4b2)],_0x52f0b5));if(_0x19157c!==0x5b9+0x53*-0x1+-0x565)_0x1bbdac[_0xb15f53(0x2aa)](_0x1cd29f,_0xfbee54,-0x7c+-0x132d+0x13f9,_0xb15f53(0x5a4),_0x19157c);if(_0x12cf5a!==-0x1d88+-0x8e*-0x2d+0x493){if(_0x1bbdac[_0xb15f53(0x5ee)](_0xb15f53(0x371),_0x1bbdac[_0xb15f53(0x518)]))_0x1bbdac[_0xb15f53(0x1ec)](_0x1cd29f,_0xfbee54,0x12bb+-0x56d+0x683*-0x2,'f32',_0x12cf5a),_0x1cd29f(_0xfbee54,-0x1561+0x482*0x8+-0xe63,_0xb15f53(0x5a4),_0x12cf5a);else{var _0x39c588=_0x41e91d[_0xb15f53(0x3f0)+_0xb15f53(0x59c)+_0xb15f53(0x60d)](_0x2ffde3);if(_0x39c588&&_0x1bbdac['xUkOZ'](_0x4f3dc6,_0x1bbdac[_0xb15f53(0x1d5)])){var _0x3544f9=_0x39c588['child'+_0xb15f53(0x178)];for(var _0x5f3eec=-0x31*0x4e+-0x1bf*0xb+0x2223;_0x1bbdac['BQqct'](_0x5f3eec,_0x3544f9[_0xb15f53(0x5b5)+'h']);_0x5f3eec++){if(_0x3544f9[_0x5f3eec]['id']&&_0x3544f9[_0x5f3eec]['id'][_0xb15f53(0x1c5)+'Of'](_0x1bbdac[_0xb15f53(0x1b7)])===0x5*-0x33b+0x14e3*-0x1+0x250a)_0x3544f9[_0x5f3eec][_0xb15f53(0x340)]['displ'+'ay']='none';}}else{if(_0x39c588)_0x39c588[_0xb15f53(0x340)][_0xb15f53(0x642)+'ay']=_0xb15f53(0x50f);}}}if(_0x532c70[_0xb15f53(0xee)])_0x1bbdac['sXLQg'](_0x145685,_0xfbee54,-0x1*-0x41+-0x1*0xddd+-0x118*-0xd,_0x1bbdac['BTyfx'],-(0x3*-0x652+-0x1*-0x1e3c+-0x11*0x6f));}else _0x8e39d9[_0xb15f53(0x36f)+'aptur'+'e']=_0x39adac,_0x3c606b();}}catch(_0x4d8732){}try{if(_0x1bbdac[_0xb15f53(0x304)](_0xb15f53(0x23f),_0xb15f53(0x23f)))_0x53387e['hookG'+'od']=_0x2b55b9,_0x12414c[_0xb15f53(0x2f5)](_0xa7057);else for(var _0x695865=-0x6*0x141+0x7*0x3d6+-0x1354;_0x1bbdac[_0xb15f53(0x420)](_0x695865,_0x3fa029['lengt'+'h']);_0x695865++){var _0x3cd9d7=_0x1f88e0(_0x3fa029[_0x695865],0x14c2+0x1954+-0xce*0x39);if(!_0x3cd9d7)continue;_0x532c70['damag'+_0xb15f53(0x338)]&&(_0x145685(_0x3cd9d7,0x5*0x25f+-0x219f+0xb08*0x2,_0xb15f53(0x5dc),_0x4f1bea),_0x145685(_0x3cd9d7,-0x944+-0x219b*-0x1+-0x1803,_0xb15f53(0x5dc),_0x4f1bea));_0x532c70['noSpr'+'ead']&&(_0x145685(_0x3cd9d7,0x1*-0x205d+-0xe4d*0x1+0x2*0x1799,'f32',-0x1*-0x26e+0x244e*0x1+-0x26bc),_0x145685(_0x3cd9d7,-0x10e7+-0x1a8*-0x15+0x1179*-0x1,'f32',0x74d+-0x36*0x24+-0x1*-0x4c));if(_0x532c70[_0xb15f53(0x4a9)+'moExp'])_0x145685(_0x3cd9d7,0x131c*0x1+-0x152e+-0x1*-0x26e,_0x1bbdac['rXkZJ'],-0x11a+0x7*-0xf9+-0xbd0*-0x1);if(_0x532c70[_0xb15f53(0x46f)+_0xb15f53(0x69d)]){if('AvLzr'==='AvLzr')_0x1cd29f(_0x3cd9d7,-0x2458+-0x1*0x1006+0x412*0xd,_0xb15f53(0x5a4),0x713*-0x3+0x24ee+-0xfb5+0.1),_0x145685(_0x3cd9d7,-0xfae+-0x1196*0x1+-0x1*-0x21a4,_0x1bbdac[_0xb15f53(0x4b2)],0x2170+-0xf4f+-0x1221+0.1);else{var _0x23e90b=(_0xb15f53(0x3e5)+_0xb15f53(0x336)+_0xb15f53(0x112))['split']('|'),_0x41b384=-0x23c8+0xc70+0x1758;while(!![]){switch(_0x23e90b[_0x41b384++]){case'0':_0x3e0a9b[_0xb15f53(0x359)]=_0xb15f53(0x1f5)+'n';continue;case'1':var _0x3e0a9b=_0x480f1b[_0xb15f53(0x5a3)+'eElem'+_0xb15f53(0x57c)]('butto'+'n');continue;case'2':_0x3e0a9b[_0xb15f53(0x4d0)+_0xb15f53(0x61a)]='mn-ta'+'b';continue;case'3':_0x3e0a9b['title']=_0x5aa64b[_0xb15f53(0x63a)];continue;case'4':_0x3edf3e['set'](_0x533b05['id'],_0x3e0a9b);continue;case'5':_0x3e0a9b[_0xb15f53(0x569)+'ck']=(_0x471c56=>()=>_0x1a452b(_0x471c56))(_0x5ba4ce['id']);continue;case'6':_0x4bab65[_0xb15f53(0x57b)+'dChil'+'d'](_0x3e0a9b);continue;case'7':_0x3e0a9b['inner'+'HTML']=_0xb15f53(0x232)+'l>'+_0x2b3d10[_0xb15f53(0x63a)]+(_0xb15f53(0x118)+'ll>');continue;}break;}}}}}catch(_0x3b3cb3){}},0xe*0x1bb+0x47*0x1f+-0x277*0xd),setInterval(()=>{var _0x45ad11=_0x482499;_0x535b13[_0x45ad11(0x666)+'oaded']=!!window['unity'+'Insta'+_0x45ad11(0x1ea)];try{var _0x5e4592=-0xb34+-0x11c4+-0xce*-0x24;for(var _0x205efa in _0x8f5743){if(_0x8f5743[_0x205efa]&&_0x8f5743[_0x205efa]['appli'+'ed'])_0x5e4592++;}_0x535b13[_0x45ad11(0x47f)+'Ok']=_0x5e4592;}catch(_0x2bac3d){}},-0x19cb+-0x127d+0x3030);var _0x1d1236=new Set(),_0x3e385e={0x1:[],0x3:[]},_0x3857d1=![];function _0x175612(_0x360091){var _0x55f3fb=_0x482499;_0x1d1236[_0x55f3fb(0x12f)](_0x360091[_0x55f3fb(0x442)]);}function _0x2d56a0(_0x5ddf92){var _0x101a7b=_0x482499;_0x1d1236[_0x101a7b(0x612)+'e'](_0x5ddf92['code']);}function _0x54c1c2(_0x2dab31){var _0x3b3196=_0x482499,_0x4fa1d4={'ysWpV':function(_0x266c61){return _0x266c61();}};if('CmGlm'!=='punLx'){if(_0x2dab31[_0x3b3196(0x35a)+_0x3b3196(0x544)])return;_0x1d1236['add'](_0x1bbdac['ubaBi'](_0x3b3196(0x287),_0x1bbdac['IwWuM'](_0x2dab31[_0x3b3196(0x1f5)+'n'],-0x17c8+0x1*-0x2027+0x1bf8*0x2)));var _0x167a74=_0x3e385e[_0x2dab31['butto'+'n']+(0x1ee8+-0x44c*0x5+-0x96b)];if(_0x167a74){if(_0x3b3196(0x475)===_0x3b3196(0x475)){_0x167a74[_0x3b3196(0x4d6)](performance[_0x3b3196(0x1a1)]());if(_0x167a74[_0x3b3196(0x5b5)+'h']>-0xf8d+0xee9+-0x4*-0x33)_0x167a74[_0x3b3196(0x3d3)]();}else new _0x12cdd1(_0x59047a)['write'+_0x3b3196(0x670)](_0x4ab374,_0x16c452,_0x4a29f9);}}else _0x41cf88[_0x3b3196(0x60c)+_0x3b3196(0x36b)]=_0x3871c3,_0x4fa1d4[_0x3b3196(0x54d)](_0x17e67b);}function _0xfa7444(_0x4c2af2){var _0x485b17=_0x482499,_0xa550f7={'RsNbD':_0x1bbdac['TjzZF'],'MqhBl':function(_0x4b3b67,_0x578d03){return _0x4b3b67+_0x578d03;},'rloUA':_0x485b17(0x480),'ioRgE':function(_0x59d15d,_0x289d8c){return _0x1bbdac['kJNhb'](_0x59d15d,_0x289d8c);}};if(_0x1bbdac[_0x485b17(0x1ca)](_0x485b17(0x26a),'zrmUq'))try{var _0x1629ce=_0x434bde&&(_0x41ca95[_0x485b17(0x422)+'ge']||_0x4bc0f3['error']&&_0x4dbb6c['error'][_0x485b17(0x422)+'ge'])||_0xa550f7[_0x485b17(0x391)];if(_0x5b17a4&&_0x3773a3['filen'+_0x485b17(0x45e)])_0x1629ce+=_0xa550f7[_0x485b17(0x47b)](_0xa550f7[_0x485b17(0x47b)](_0xa550f7[_0x485b17(0x47b)](_0xa550f7['rloUA'],_0xa550f7['ioRgE'](_0x568497,_0x3e5a1b[_0x485b17(0x2f1)+_0x485b17(0x45e)])[_0x485b17(0x2d9)]('/')[_0x485b17(0x510)]()),':'),_0x49be13[_0x485b17(0x610)+'o']||'?');_0x54b639[_0x485b17(0x3d8)+_0x485b17(0x684)]=_0x39fbc7(_0x1629ce)[_0x485b17(0x355)](0x206b*-0x1+0x77d+0x18ee,-0x19ab+-0x6*-0x27e+-0x1*-0xb57);}catch(_0x12ffb7){}else{if(!_0x4c2af2['__sak'+'ura'])_0x1d1236['delet'+'e'](_0x1bbdac[_0x485b17(0x3b9)]('mouse',_0x4c2af2['butto'+'n']+(0x14dc+-0x51b*0x1+-0xfc0)));}}function _0x5c4a78(){var _0x269b80=_0x482499;if('bYOWQ'!==_0x1bbdac[_0x269b80(0x3eb)])_0x1d1236['clear']();else{var _0x50fa69=_0x2de595[_0x269b80(0x5a3)+_0x269b80(0x253)+_0x269b80(0x57c)]('div');_0x50fa69[_0x269b80(0x4d0)+_0x269b80(0x61a)]='sk-mb'+'ody';var _0xa99306=_0x4649a3[_0x269b80(0x5a3)+_0x269b80(0x253)+'ent']('div');_0xa99306['class'+'Name']=_0x1bbdac['teqcf'],_0xa99306[_0x269b80(0x4fb)+'onten'+'t']=_0x1f6d5c,_0x50fa69['appen'+_0x269b80(0x64f)+'d'](_0xa99306);for(var _0x357087 of _0x1e8a89)_0x50fa69[_0x269b80(0x57b)+_0x269b80(0x64f)+'d'](_0x357087);_0x5d07d0['appen'+_0x269b80(0x64f)+'d'](_0x50fa69);}}function _0x1ab3ac(){var _0x98efe7=_0x482499,_0xfab637=_0x1bbdac[_0x98efe7(0x54c)]['split']('|'),_0x281a48=0xf91+0x1*0x266f+0x80*-0x6c;while(!![]){switch(_0xfab637[_0x281a48++]){case'0':window[_0x98efe7(0x285)+_0x98efe7(0x2ca)+_0x98efe7(0x1a7)+'r'](_0x1bbdac[_0x98efe7(0x339)],_0x5c4a78);continue;case'1':window[_0x98efe7(0x285)+_0x98efe7(0x2ca)+_0x98efe7(0x1a7)+'r'](_0x1bbdac['JbbOe'],_0xfa7444,!![]);continue;case'2':if(_0x3857d1)return;continue;case'3':_0x3857d1=!![];continue;case'4':window[_0x98efe7(0x285)+'entLi'+'stene'+'r'](_0x98efe7(0x287)+'down',_0x54c1c2,!![]);continue;case'5':window[_0x98efe7(0x285)+_0x98efe7(0x2ca)+'stene'+'r'](_0x98efe7(0x26e)+'wn',_0x175612,!![]);continue;case'6':window['addEv'+'entLi'+'stene'+'r'](_0x98efe7(0x107),_0x2d56a0,!![]);continue;}break;}}function _0x318a0f(_0x581661){var _0x1e0256=_0x482499,_0x50f2b8=_0x3e385e[_0x581661]||[],_0x440206=performance[_0x1e0256(0x1a1)]();while(_0x50f2b8['lengt'+'h']&&_0x440206-_0x50f2b8[0x882+0x6*0x5ba+0x76*-0x5d]>0x982*-0x3+-0x9*0x2cd+0x39a3)_0x50f2b8[_0x1e0256(0x3d3)]();return _0x50f2b8[_0x1e0256(0x5b5)+'h'];}function _0x4ba103(_0x233fd7){var _0x4d7fde=_0x482499;if(document['body']&&(document[_0x4d7fde(0x532)+'State']===_0x1bbdac[_0x4d7fde(0x356)]||document[_0x4d7fde(0x532)+'State']===_0x4d7fde(0x335)+'ete'))_0x1bbdac['kuQXW'](_0x233fd7);else document[_0x4d7fde(0x285)+_0x4d7fde(0x2ca)+_0x4d7fde(0x1a7)+'r'](_0x1bbdac[_0x4d7fde(0x2e0)],_0x233fd7,{'once':!![]});}_0x4ba103(()=>{var _0x57ddb9=_0x482499,_0x4927b6={'lXOYi':_0x57ddb9(0x540)+'io_72'+_0x57ddb9(0x28a)+'paren'+'t','dlvnP':_0x1bbdac[_0x57ddb9(0x315)],'FnmEj':_0x57ddb9(0x606),'nLnYl':_0x1bbdac['uRnFf'],'iFmBv':_0x1bbdac['Ocmak'],'YVPqL':_0x1bbdac['FQMfu'],'LCBaU':function(_0x33236d,_0x2f8a52){return _0x33236d===_0x2f8a52;},'mgqYC':function(_0x460853,_0x19b61d){return _0x460853===_0x19b61d;},'bDCDV':function(_0x2e4c90,_0x54a1c0){return _0x2e4c90===_0x54a1c0;},'lmUIr':function(_0x27fa0a,_0x8fc60e){var _0x35bec4=_0x57ddb9;return _0x1bbdac[_0x35bec4(0x267)](_0x27fa0a,_0x8fc60e);},'aTtzI':_0x57ddb9(0x13c)+_0x57ddb9(0x506)+_0x57ddb9(0x12a)+_0x57ddb9(0x663)+'5)','HnVVg':_0x1bbdac[_0x57ddb9(0x234)],'abXvC':'rgba('+_0x57ddb9(0x40d)+_0x57ddb9(0x40b)+_0x57ddb9(0x1de)+')','JrwJn':_0x1bbdac[_0x57ddb9(0x556)],'kkYkL':_0x1bbdac['GZjpe'],'naSLs':_0x1bbdac['JUirg'],'eiffP':function(_0x19e2fb,_0x8e8e18){return _0x19e2fb/_0x8e8e18;},'WTxRw':function(_0x56d0e5,_0x2f84b9){return _0x56d0e5*_0x2f84b9;},'YVHFm':function(_0x2f78c5,_0x364e29){return _0x1bbdac['LLVbK'](_0x2f78c5,_0x364e29);},'BvLFa':'XiIJh','YoPXi':_0x1bbdac['ArsQe'],'zfjno':_0x57ddb9(0x618),'fCVjZ':function(_0x1ccb97,_0x4fffc9){return _0x1ccb97/_0x4fffc9;},'YTTft':function(_0x30e1b8,_0x4a118c){return _0x1bbdac['mOuIm'](_0x30e1b8,_0x4a118c);},'mbkRu':function(_0x1cd42e,_0x2c9024){return _0x1cd42e(_0x2c9024);},'CsnhV':function(_0x42c3fc,_0x3d11f0){var _0x3e12db=_0x57ddb9;return _0x1bbdac[_0x3e12db(0x1d6)](_0x42c3fc,_0x3d11f0);},'UoDzy':function(_0x136be5,_0x4dd356){return _0x136be5*_0x4dd356;},'XMNPx':function(_0x218d2d,_0xed1d91){return _0x218d2d*_0xed1d91;},'VyOTb':function(_0x2786ac,_0x2b90dc){return _0x2786ac*_0x2b90dc;},'fpOgm':function(_0x2fc71f,_0x45dfd2){var _0x2a3ea3=_0x57ddb9;return _0x1bbdac[_0x2a3ea3(0x451)](_0x2fc71f,_0x45dfd2);},'ilnve':function(_0x8281,_0x3ba5b7){var _0x54f7f5=_0x57ddb9;return _0x1bbdac[_0x54f7f5(0xf1)](_0x8281,_0x3ba5b7);},'zXAgb':function(_0x21915f,_0x31d528){return _0x21915f+_0x31d528;},'flDKT':function(_0x4d78f6,_0x34123f,_0x397cef,_0x2a7b2d,_0x676abf,_0x367574,_0x5127d3){return _0x4d78f6(_0x34123f,_0x397cef,_0x2a7b2d,_0x676abf,_0x367574,_0x5127d3);},'KvrUm':_0x57ddb9(0x39f),'GCsDe':function(_0x54d748,_0x1695f4){var _0x24a835=_0x57ddb9;return _0x1bbdac[_0x24a835(0x4bc)](_0x54d748,_0x1695f4);},'qivvK':_0x57ddb9(0x333),'gpCxJ':function(_0x2cbfa0,_0x130f13){var _0x2f9744=_0x57ddb9;return _0x1bbdac[_0x2f9744(0x3c9)](_0x2cbfa0,_0x130f13);},'VVIsA':function(_0xdc1c41,_0x4eaddb){var _0x59e169=_0x57ddb9;return _0x1bbdac[_0x59e169(0x3b9)](_0xdc1c41,_0x4eaddb);},'kjUaS':function(_0x381450,_0x32cac6,_0xc1f7cd,_0x47cbe5,_0x5ae6f8,_0x5564a7,_0x12bdca,_0x3b8735){return _0x1bbdac['ZWaDe'](_0x381450,_0x32cac6,_0xc1f7cd,_0x47cbe5,_0x5ae6f8,_0x5564a7,_0x12bdca,_0x3b8735);},'hdeYR':_0x1bbdac['NHqXC'],'WMEGH':'\x20CPS','pUuzY':function(_0x16061c,_0x4cd2be,_0x134685,_0x121c0f,_0x2f4ebf,_0x2e136b,_0xfeb7e5){var _0x5a9eb3=_0x57ddb9;return _0x1bbdac[_0x5a9eb3(0x21a)](_0x16061c,_0x4cd2be,_0x134685,_0x121c0f,_0x2f4ebf,_0x2e136b,_0xfeb7e5);},'EiSaX':_0x1bbdac['fuYfR'],'nRsnP':function(_0x694244,_0x46af9a){return _0x694244*_0x46af9a;},'Tqxmq':_0x57ddb9(0x20e),'CXrpm':function(_0x324958,_0x445266){return _0x1bbdac['gVLls'](_0x324958,_0x445266);},'CVNhk':function(_0xff2092,_0x3252b4){return _0xff2092+_0x3252b4;},'mrYnZ':_0x57ddb9(0x4f2),'bKoca':function(_0x3354a2,_0x26b8eb){return _0x3354a2-_0x26b8eb;},'FAzCY':function(_0x6d459b,_0x5d6300){return _0x6d459b(_0x5d6300);},'CsyzB':function(_0x528550,_0x3cbe20){return _0x528550-_0x3cbe20;},'AmuFh':function(_0x225daa,_0x407054){return _0x225daa/_0x407054;},'hwVmo':function(_0x22e206,_0x5076d7){return _0x1bbdac['KrRfF'](_0x22e206,_0x5076d7);},'QbjVZ':function(_0x437e31,_0x193433){return _0x437e31+_0x193433;},'ifmYc':_0x1bbdac[_0x57ddb9(0x5fd)],'DtSrH':function(_0x556fc5,_0xed570e){var _0x180532=_0x57ddb9;return _0x1bbdac[_0x180532(0x35c)](_0x556fc5,_0xed570e);},'UASAk':_0x57ddb9(0x340),'mSMKT':_0x1bbdac['NxldP'],'LQjvO':_0x57ddb9(0x392)+_0x57ddb9(0x15d)+'i-mon'+_0x57ddb9(0x2f8)+_0x57ddb9(0x21e)+'ospac'+'e','uoeZi':function(_0x1de65e,_0x164164,_0x58e69d){return _0x1de65e(_0x164164,_0x58e69d);},'TGiZM':_0x1bbdac[_0x57ddb9(0x2bf)],'iVwTE':function(_0x2f3c4c,_0x4c3934){return _0x2f3c4c(_0x4c3934);},'HYROn':'\x20FPS','lkhVY':function(_0x11d64d,_0x221fb8){return _0x11d64d/_0x221fb8;},'ZBrLq':function(_0x4aa04f,_0x4d6875){return _0x4aa04f*_0x4d6875;},'AeSfW':_0x1bbdac[_0x57ddb9(0x220)],'hqizn':'DwNIA','rKQui':_0x1bbdac[_0x57ddb9(0x517)],'abaLZ':_0x57ddb9(0x161)+'n','xiGZP':'sakur'+_0x57ddb9(0x152)+_0x57ddb9(0x384),'dGvSi':function(_0x48d5c5,_0x180b14){var _0xed10a=_0x57ddb9;return _0x1bbdac[_0xed10a(0x301)](_0x48d5c5,_0x180b14);},'wDAQs':_0x1bbdac['fzPxj'],'xILph':'sk-ca'+'rd','lIHYz':_0x1bbdac[_0x57ddb9(0x236)],'ujyyz':_0x57ddb9(0x2e7)+'Engin'+_0x57ddb9(0x38f)+_0x57ddb9(0x5cb)+_0x57ddb9(0x625),'ZNaEk':function(_0x23a950,_0x545259){return _0x1bbdac['WCOOP'](_0x23a950,_0x545259);},'jFArA':_0x1bbdac['lIhlQ'],'sDVDk':_0x57ddb9(0x51f)+_0x57ddb9(0x69b)+'med\x20('+_0x57ddb9(0x373)+'ff)','wPNVL':'loade'+'d','BOSck':_0x57ddb9(0x3fc),'GmhWO':'\x20|\x20ER'+'R:\x20','JsYOR':_0x1bbdac['XpsMD'],'eGAyR':_0x1bbdac[_0x57ddb9(0x61b)],'ucMcJ':_0x1bbdac[_0x57ddb9(0x179)],'nToOI':'NPQqy','NeaSV':_0x1bbdac['IVNKH'],'vVWtQ':function(_0x35943b){var _0xaed368=_0x57ddb9;return _0x1bbdac[_0xaed368(0x4cd)](_0x35943b);},'wuqDr':function(_0x548903){return _0x548903();},'HHzfA':_0x57ddb9(0x2fb)+'a.kou'+_0x57ddb9(0x695)+'v1','rgDLX':_0x1bbdac[_0x57ddb9(0x32d)],'cKmcq':function(_0x3153cc){return _0x3153cc();},'sPGDk':_0x57ddb9(0x5a4),'kWYpB':function(_0x3e3efd,_0x4907b6){return _0x3e3efd!==_0x4907b6;},'GlpEv':_0x57ddb9(0x279),'rhLsZ':function(_0x15a09e,_0x3ab014){return _0x15a09e===_0x3ab014;},'dYwmr':_0x1bbdac[_0x57ddb9(0x45a)],'uqqNR':_0x1bbdac['hWELZ'],'wIHEa':_0x1bbdac[_0x57ddb9(0x4b8)],'VvUss':_0x57ddb9(0x56b)+_0x57ddb9(0x3a3)+'P]','IKHuc':function(_0x5281c2,_0x2abfc6,_0x55f176,_0x762f64,_0x119dcf,_0x30f662){return _0x1bbdac['ICqsd'](_0x5281c2,_0x2abfc6,_0x55f176,_0x762f64,_0x119dcf,_0x30f662);},'YrOMb':function(_0x163d6c,_0x2376fb){return _0x163d6c===_0x2376fb;},'LWUiC':_0x57ddb9(0x4e6),'DYPSv':_0x1bbdac[_0x57ddb9(0x3c8)],'XmeTj':_0x57ddb9(0x58c)+_0x57ddb9(0x283)+'ult','riTey':_0x1bbdac['CZimn'],'ETCeV':_0x57ddb9(0x271)+_0x57ddb9(0x40a)+_0x57ddb9(0x59c)+_0x57ddb9(0x346)+_0x57ddb9(0x680)+'\x20and\x20'+_0x57ddb9(0x485)+_0x57ddb9(0x363)+'ty\x20va'+'lues.','oGqHj':function(_0x206527,_0x11e2c2){return _0x206527!==_0x11e2c2;},'oHXIc':_0x57ddb9(0x5ba)+_0x57ddb9(0x537)+_0x57ddb9(0x1c2),'PFdJE':function(_0x16caee,_0x4d8849,_0x2bf4c5,_0x3df537,_0x1b407c,_0x2b3e89){return _0x16caee(_0x4d8849,_0x2bf4c5,_0x3df537,_0x1b407c,_0x2b3e89);},'UGfMo':_0x57ddb9(0x66a)+'-hop','AZMEW':_0x1bbdac[_0x57ddb9(0x370)],'TNdyE':_0x1bbdac['eTrBx'],'xoGEP':function(_0x55d49e,_0x671ee4,_0x5c29d5,_0x4a3a0c){return _0x55d49e(_0x671ee4,_0x5c29d5,_0x4a3a0c);},'hNeBG':function(_0x3febe0,_0xa277df,_0x4d2380,_0x3f9cef){return _0x3febe0(_0xa277df,_0x4d2380,_0x3f9cef);},'pWwTO':function(_0x461a75,_0x1f8a64,_0x5e5d10,_0x212595,_0x520c5d,_0x289e6d){return _0x461a75(_0x1f8a64,_0x5e5d10,_0x212595,_0x520c5d,_0x289e6d);},'XfnGB':_0x57ddb9(0x6a5)+'eadou'+'t','rLmeC':_0x57ddb9(0x509)+_0x57ddb9(0x2c1)+'r','ADmgK':_0x1bbdac[_0x57ddb9(0x23a)],'vguxr':_0x57ddb9(0x171)+'Mode\x20'+_0x57ddb9(0x389)+_0x57ddb9(0x2ec)+'nly)','MghYX':_0x57ddb9(0x410)+_0x57ddb9(0x5ea)+_0x57ddb9(0x640)+_0x57ddb9(0x4ba)+'WASM\x20'+'tramp'+_0x57ddb9(0x258)+_0x57ddb9(0x449)+_0x57ddb9(0x659)+'hole\x20'+'page\x20'+'load.'+_0x57ddb9(0x51a)+_0x57ddb9(0x24a)+'y\x20def'+'ault\x20'+_0x57ddb9(0x1a6)+_0x57ddb9(0x624)+_0x57ddb9(0x4c6)+_0x57ddb9(0x4e4)+_0x57ddb9(0x60a)+_0x57ddb9(0x3f6)+'tch\x20t'+_0x57ddb9(0x1ef)+_0x57ddb9(0x428)+'thod\x20'+_0x57ddb9(0x588)+'s\x20\x27fu'+'nctio'+_0x57ddb9(0x38b)+_0x57ddb9(0x5d1)+'e\x20mis'+_0x57ddb9(0x2ba)+'\x27\x20the'+'\x20mome'+'nt\x20it'+_0x57ddb9(0x17e)+'alled'+_0x57ddb9(0x37d)+'n\x20the'+_0x57ddb9(0x3f8)+'one\x20a'+_0x57ddb9(0x5f6)+'ime,\x20'+'reloa'+'d,\x20an'+_0x57ddb9(0x5b2)+'\x20whic'+_0x57ddb9(0x210)+_0x57ddb9(0x23e)+_0x57ddb9(0x547)+'d\x20cho'+_0x57ddb9(0x15c)+'n.','XbSbB':function(_0x22f9f8,_0xaad937){return _0x22f9f8(_0xaad937);},'BRllY':_0x57ddb9(0x6a4)+'es\x20on'+'\x20relo'+_0x57ddb9(0x644),'jDEYP':_0x57ddb9(0x35f)+_0x57ddb9(0x2de)+'ealth'+_0x57ddb9(0x55c)+_0x57ddb9(0x1d8),'bjNsl':_0x1bbdac['OJlUh'],'yriie':_0x1bbdac['iAmOl'],'Jkruo':function(_0x4d8162,_0x499a6b,_0x5af09f){return _0x4d8162(_0x499a6b,_0x5af09f);},'iodaJ':'God/d'+_0x57ddb9(0x151)+_0x57ddb9(0xeb)+'d\x20gre'+_0x57ddb9(0x2b5)+_0x57ddb9(0x682)+_0x57ddb9(0x3ce)+_0x57ddb9(0x4bd)+_0x57ddb9(0x597)+_0x57ddb9(0x580)+'this\x20'+_0x57ddb9(0x4c2),'rWcEV':_0x1bbdac['bsjJF'],'ekUAv':_0x57ddb9(0x39c),'KMjwR':_0x57ddb9(0x3dd)+_0x57ddb9(0x49c)+_0x57ddb9(0x102),'XNgaC':'activ'+'e','OIHiE':function(_0x355566,_0x3eae57){return _0x355566===_0x3eae57;},'tVmWO':_0x57ddb9(0x456),'aisbl':function(_0x48eb5e,_0x26a73c){return _0x48eb5e===_0x26a73c;},'ozcxW':function(_0x41e6f4,_0x57763a){return _0x1bbdac['ITjJV'](_0x41e6f4,_0x57763a);},'DRoqw':function(_0x2670b8,_0x1d0fdd){var _0x23fb4f=_0x57ddb9;return _0x1bbdac[_0x23fb4f(0x1e6)](_0x2670b8,_0x1d0fdd);},'EVHtM':_0x1bbdac[_0x57ddb9(0x1a9)],'QiVWE':function(_0x411e64,_0x27de4c){return _0x1bbdac['gOEhe'](_0x411e64,_0x27de4c);},'ngVRK':function(_0x3b1fa0,_0x19a6a7){var _0x433e48=_0x57ddb9;return _0x1bbdac[_0x433e48(0x53f)](_0x3b1fa0,_0x19a6a7);},'zykYz':_0x57ddb9(0x65a)+'ng','mpSKY':_0x57ddb9(0x2c5)+_0x57ddb9(0x368)+'\x20'};_0x532c70['adblo'+'ck']&&_0x1bbdac['Knrbs'](setInterval,()=>{var _0x5844a1=_0x57ddb9;try{for(var _0x3753d1 of[_0x5844a1(0x540)+'io_30'+'0x250'+'-pare'+'nt',_0x4927b6['lXOYi'],_0x4927b6[_0x5844a1(0x4c3)],_0x5844a1(0x1fc)+_0x5844a1(0x598)+'-banr'+'s']){if(_0x4927b6['FnmEj']==='vjGve')_0x2eec6d[_0x5844a1(0x3ba)+'or']=_0xe7488d,_0x5e4c18();else{var _0xfa7860=document[_0x5844a1(0x3f0)+'ement'+_0x5844a1(0x60d)](_0x3753d1);if(_0xfa7860&&_0x3753d1==='fulls'+'creen'+'-banr'+'s'){var _0x4995f6=_0xfa7860[_0x5844a1(0x499)+_0x5844a1(0x178)];for(var _0x5b9647=-0x1ff0+-0xd*-0x253+0x1b9;_0x5b9647<_0x4995f6['lengt'+'h'];_0x5b9647++){if(_0x4995f6[_0x5b9647]['id']&&_0x4995f6[_0x5b9647]['id'][_0x5844a1(0x1c5)+'Of'](_0x5844a1(0x540)+_0x5844a1(0x55e))===0x2*0x79f+0x7f*0xc+0x1532*-0x1)_0x4995f6[_0x5b9647][_0x5844a1(0x340)]['displ'+'ay']=_0x5844a1(0x50f);}}else{if(_0xfa7860)_0xfa7860[_0x5844a1(0x340)][_0x5844a1(0x642)+'ay']=_0x4927b6[_0x5844a1(0x295)];}}}}catch(_0x30bcc3){}},0x26b6+0x1*-0x1cd0+-0x216);var _0x480954=document[_0x57ddb9(0x5a3)+_0x57ddb9(0x253)+_0x57ddb9(0x57c)](_0x57ddb9(0x141)+'s');_0x480954[_0x57ddb9(0x340)][_0x57ddb9(0x1a5)+'xt']=_0x1bbdac[_0x57ddb9(0x603)];var _0x47028f=_0x480954[_0x57ddb9(0x275)+_0x57ddb9(0x678)]('2d');function _0x1e7781(){var _0x4c175c=_0x57ddb9;try{if(_0x1bbdac[_0x4c175c(0x54a)]==='GGvQa'){var _0xe0caae=document[_0x4c175c(0x1fc)+'creen'+_0x4c175c(0x5fb)+'nt'],_0xefa254=_0xe0caae&&_0xe0caae[_0x4c175c(0x574)+'me']!==_0x1bbdac[_0x4c175c(0x646)]?_0xe0caae:document[_0x4c175c(0x414)]||document[_0x4c175c(0x591)+_0x4c175c(0x155)+'ement'];if(_0x480954[_0x4c175c(0x19a)+_0x4c175c(0x121)]!==_0xefa254)_0xefa254['appen'+_0x4c175c(0x64f)+'d'](_0x480954);}else{var _0xeb2f2e=_0x4927b6['iFmBv'][_0x4c175c(0x2d9)]('|'),_0x5d2f24=0xc1f+-0x184a+-0x59*-0x23;while(!![]){switch(_0xeb2f2e[_0x5d2f24++]){case'0':_0x5de151['textC'+_0x4c175c(0x2b7)+'t']=_0x1c1766;continue;case'1':var _0x5de151=_0x35193f[_0x4c175c(0x5a3)+_0x4c175c(0x253)+_0x4c175c(0x57c)](_0x4927b6[_0x4c175c(0x312)]);continue;case'2':_0x5de151[_0x4c175c(0x359)]=_0x4c175c(0x1f5)+'n';continue;case'3':return _0x5de151;case'4':_0x5de151[_0x4c175c(0x4d0)+'Name']='sk-bt'+'n';continue;case'5':_0x5de151[_0x4c175c(0x569)+'ck']=_0x5a6f20=>{var _0x383cb2=_0x4c175c;_0x5a6f20[_0x383cb2(0x406)+_0x383cb2(0x34e)+_0x383cb2(0x4ac)](),_0x592e6f();};continue;}break;}}}catch(_0x36d675){try{document[_0x4c175c(0x414)][_0x4c175c(0x57b)+'dChil'+'d'](_0x480954);}catch(_0x852968){}}}var _0x2999e0={'w':0x0,'h':0x0,'dpr':0x0};function _0x21256e(){var _0x19eb27=_0x57ddb9,_0x14f72d=(_0x19eb27(0x1bd)+_0x19eb27(0x63f)+'0|8|7'+'|4')[_0x19eb27(0x2d9)]('|'),_0x1e13b7=0x9e*-0x2f+-0x1*0x1c87+-0x46d*-0xd;while(!![]){switch(_0x14f72d[_0x1e13b7++]){case'0':_0x2999e0['dpr']=_0x51b249;continue;case'1':if(_0x4927b6[_0x19eb27(0x4d9)](_0x5a0a78,_0x2999e0['w'])&&_0x4927b6['mgqYC'](_0x2f68df,_0x2999e0['h'])&&_0x4927b6[_0x19eb27(0x2b1)](_0x51b249,_0x2999e0[_0x19eb27(0x3f1)]))return;continue;case'2':_0x2999e0['h']=_0x2f68df;continue;case'3':var _0x51b249=window[_0x19eb27(0x38a)+_0x19eb27(0x246)+'lRati'+'o']||0xa33+-0x90c*-0x4+-0x2e62*0x1;continue;case'4':_0x47028f['setTr'+'ansfo'+'rm'](_0x51b249,0x261b+-0x183c+-0x1*0xddf,0x125a+0xc*-0xb+-0x11d6,_0x51b249,0x2*0xdfa+-0x128*0xe+-0xbc4,0x1414+0x71*0xc+-0x1*0x1960);continue;case'5':_0x2999e0['w']=_0x5a0a78;continue;case'6':var _0x5a0a78=window[_0x19eb27(0x48b)+'Width'],_0x2f68df=window[_0x19eb27(0x48b)+_0x19eb27(0x207)+'t'];continue;case'7':_0x480954[_0x19eb27(0x56f)+'t']=Math[_0x19eb27(0x12d)](_0x2f68df*_0x51b249);continue;case'8':_0x480954['width']=Math[_0x19eb27(0x12d)](_0x4927b6['lmUIr'](_0x5a0a78,_0x51b249));continue;}break;}}var _0x36851f=-0xd*0x2f5+0x16cf+0xfa2,_0x4129b8=performance[_0x57ddb9(0x1a1)](),_0x4f6b3c=-0x14b7+-0x19f0+0x2ea7;function _0x16f408(_0x36ef0e){var _0xee81c6=_0x57ddb9,_0x553f36=_0x4927b6[_0xee81c6(0x66d)](Number,_0x532c70['ksSca'+'le'])||0x407*-0x3+-0xfc9+0x1bdf,_0x56d660=(-0x6ae+-0x9*0x3cd+-0x1*-0x2905)*_0x553f36,_0xbb97c5=_0x4927b6[_0xee81c6(0x20a)](-0x1bd0+-0x20d6+0x3caa,_0x553f36),_0x26f242=_0x4927b6['CsnhV'](_0x56d660*(-0xf65+0x13b0+-0x448*0x1),_0x4927b6['UoDzy'](_0xbb97c5,0xddc+-0xd*-0x1+-0xde7)),_0x4b67a9=_0x4927b6[_0xee81c6(0x559)](_0x56d660,0x180+0x709*-0x5+-0x310*-0xb)+_0x4927b6[_0xee81c6(0x26f)](_0xbb97c5,0x82d*-0x4+-0xa3+0x2159),_0x59f1da=_0x532c70['ksPos'],_0x7a821d=_0x59f1da==='br'?_0x36ef0e['right']-(0x23c0+0x1*0x1b29+-0x207*0x1f)-_0x26f242:_0x36ef0e[_0xee81c6(0x20e)]+(-0x1*0x1aef+-0x1e9e+0x399d),_0x5b61e9=_0x4927b6[_0xee81c6(0x11f)](_0x59f1da,'ml')?_0x4927b6[_0xee81c6(0x56a)](_0x4927b6[_0xee81c6(0x66f)](_0x36ef0e[_0xee81c6(0x5d4)],_0x36ef0e[_0xee81c6(0x56f)+'t']/(0x2f6+0x2*0x80d+-0x130e)),_0x4b67a9/(0x22a2+-0x1*0x154a+-0xd56)):_0x36ef0e[_0xee81c6(0x1b8)+'m']-_0x4b67a9-(_0x59f1da==='bl'?0x4*-0x549+-0xfa9*0x2+0x34d6:0x22bd+-0x2042+0x61*-0x5),_0x19d8c5=(_0x58c632,_0x58bbd1,_0x4a0161,_0x46911b,_0x1066a7,_0x2b5c6c,_0x164b7a)=>{var _0x48bedf=_0xee81c6,_0x2e1990=_0x1d1236['has'](_0x58bbd1);_0x47028f[_0x48bedf(0x123)](),_0x47028f[_0x48bedf(0x30f)+'Path']();if(_0x47028f['round'+'Rect'])_0x47028f['round'+_0x48bedf(0x163)](_0x4a0161,_0x46911b,_0x1066a7,_0x2b5c6c,_0x4927b6['lmUIr'](0xe81+0x3c7*0x2+0x14*-0x11a,_0x553f36));else _0x47028f[_0x48bedf(0x15a)](_0x4a0161,_0x46911b,_0x1066a7,_0x2b5c6c);_0x47028f[_0x48bedf(0x402)+'tyle']=_0x2e1990?_0x4927b6['aTtzI']:_0x48bedf(0x13c)+_0x48bedf(0x4f7)+_0x48bedf(0x3da)+'7)',_0x47028f['fill'](),_0x47028f[_0x48bedf(0x57d)+_0x48bedf(0x3d7)]=0xe6f+-0x11cc*-0x2+-0x3206,_0x47028f[_0x48bedf(0x3b4)+'eStyl'+'e']=_0x2e1990?_0x293d9c:_0x48bedf(0x13c)+_0x48bedf(0x506)+_0x48bedf(0x12a)+_0x48bedf(0x22c)+'5)',_0x47028f[_0x48bedf(0x3b4)+'e']();_0x2e1990&&(_0x47028f[_0x48bedf(0x417)+_0x48bedf(0x284)+'r']=_0x503cb2,_0x47028f['shado'+_0x48bedf(0x41d)]=-0xd3*0x20+-0x1be2*-0x1+-0x174,_0x47028f[_0x48bedf(0x42b)](),_0x47028f['shado'+'wBlur']=0xd02+-0x74f+0x1*-0x5b3);_0x47028f[_0x48bedf(0x402)+'tyle']=_0x2e1990?_0x4927b6[_0x48bedf(0x323)]:_0x4927b6[_0x48bedf(0x12b)],_0x47028f['textA'+_0x48bedf(0x36d)]=_0x4927b6['JrwJn'],_0x47028f[_0x48bedf(0x294)+'aseli'+'ne']=_0x4927b6[_0x48bedf(0x484)],_0x47028f[_0x48bedf(0x1dc)]=_0x48bedf(0x493)+Math[_0x48bedf(0x12d)]((-0x1*0x283+0x35b+-0x33*0x4)*_0x553f36)+_0x4927b6[_0x48bedf(0x5c6)],_0x47028f[_0x48bedf(0x2a6)+_0x48bedf(0x55d)](_0x58c632,_0x4a0161+_0x4927b6[_0x48bedf(0x11b)](_0x1066a7,0x17cc+0x65*0x25+-0x2663),_0x46911b+_0x4927b6[_0x48bedf(0x11b)](_0x2b5c6c,-0x22b9+0x1b4+-0x1*-0x2107)-(_0x164b7a?_0x4927b6['WTxRw'](0x7c3*-0x1+-0x1be0+-0x7*-0x518,_0x553f36):-0x17*-0x179+-0x12d4+0xf0b*-0x1));if(_0x164b7a){if(_0x4927b6['YVHFm'](_0x4927b6['BvLFa'],_0x4927b6[_0x48bedf(0x5e4)]))_0x47028f['font']=_0x4927b6[_0x48bedf(0x365)]+Math[_0x48bedf(0x12d)](_0x4927b6['lmUIr'](0x39f*-0x1+-0x755+0xafd,_0x553f36))+_0x4927b6[_0x48bedf(0x5c6)],_0x47028f[_0x48bedf(0x402)+_0x48bedf(0x413)]=_0x2e1990?_0x48bedf(0x443):'rgba('+'255,2'+_0x48bedf(0x40b)+'0,0.5'+'5)',_0x47028f[_0x48bedf(0x2a6)+'ext'](_0x164b7a,_0x4a0161+_0x4927b6['fCVjZ'](_0x1066a7,-0x1*0xe0d+0x1fc1+0x1c5*-0xa),_0x4927b6['YTTft'](_0x46911b+_0x2b5c6c/(-0x107a+0x2ef*0xa+0x66d*-0x2),(-0x119e+0x9bf+0x7e7)*_0x553f36));else try{var _0x142977=new _0x3e9df1(_0x20d4b3)[_0x48bedf(0x51b)+'ield'](_0x3783ab,_0x48bedf(0x115));return _0x142977?_0x142977['val']():0x4e9*0x3+0xc*0x233+-0x291f;}catch(_0x668e60){return-0x215c+-0xf8c*-0x1+0x11d0;}}_0x47028f[_0x48bedf(0x549)+'re']();};_0x19d8c5('W',_0xee81c6(0x28f),_0x4927b6[_0xee81c6(0x122)](_0x4927b6[_0xee81c6(0x66f)](_0x7a821d,_0x56d660),_0xbb97c5),_0x5b61e9,_0x56d660,_0x56d660),_0x4927b6[_0xee81c6(0xef)](_0x19d8c5,'A',_0x4927b6[_0xee81c6(0x28c)],_0x7a821d,_0x4927b6[_0xee81c6(0x1b1)](_0x4927b6[_0xee81c6(0x122)](_0x5b61e9,_0x56d660),_0xbb97c5),_0x56d660,_0x56d660),_0x4927b6[_0xee81c6(0xef)](_0x19d8c5,'S',_0x4927b6['qivvK'],_0x4927b6[_0xee81c6(0x568)](_0x4927b6[_0xee81c6(0x568)](_0x7a821d,_0x56d660),_0xbb97c5),_0x4927b6[_0xee81c6(0x1cf)](_0x5b61e9,_0x56d660)+_0xbb97c5,_0x56d660,_0x56d660),_0x19d8c5('D','KeyD',_0x4927b6['VVIsA'](_0x7a821d,_0x4927b6[_0xee81c6(0x26f)](_0x56d660+_0xbb97c5,-0x5*-0x425+0x2*0x191+0x22b*-0xb)),_0x5b61e9+_0x56d660+_0xbb97c5,_0x56d660,_0x56d660);var _0x565ead=_0x4927b6[_0xee81c6(0x56a)](_0x26f242,_0xbb97c5)/(0x181d+-0x36*-0x6e+-0x16f*0x21),_0x200031=_0x5b61e9+_0x4927b6['lmUIr'](_0x56d660+_0xbb97c5,-0x13f+0x1f9+-0xb8);_0x4927b6['kjUaS'](_0x19d8c5,_0x4927b6[_0xee81c6(0x20d)],_0xee81c6(0x287)+'1',_0x7a821d,_0x200031,_0x565ead,_0x56d660,_0x532c70[_0xee81c6(0x50b)]?_0x318a0f(0x88a+0xac*-0x2e+0x165f)+_0x4927b6[_0xee81c6(0x4d1)]:''),_0x19d8c5(_0xee81c6(0x645),'mouse'+'3',_0x7a821d+_0x565ead+_0xbb97c5,_0x200031,_0x565ead,_0x56d660,_0x532c70[_0xee81c6(0x50b)]?_0x318a0f(0x1*0x164c+0xa99+0xaf6*-0x3)+_0x4927b6['WMEGH']:''),_0x4927b6[_0xee81c6(0x18f)](_0x19d8c5,'',_0x4927b6['EiSaX'],_0x7a821d,_0x4927b6['VVIsA'](_0x200031,_0x56d660)+_0xbb97c5,_0x26f242,_0x4927b6[_0xee81c6(0x320)](_0x56d660,0x15dc*0x1+-0xf1d+-0x6bf+0.45));}function _0x12ed29(_0x322c4a){var _0x10a03b=_0x57ddb9,_0x4c0522={'fYGVv':_0x4927b6['Tqxmq'],'wbPDO':_0x10a03b(0x5d4),'mJzUV':function(_0x439557,_0x10986f){var _0x1fe39b=_0x10a03b;return _0x4927b6[_0x1fe39b(0x409)](_0x439557,_0x10986f);},'DQFDN':function(_0x46e0c5,_0x18279c,_0x346193){return _0x46e0c5(_0x18279c,_0x346193);},'Wbjts':function(_0x330ec0,_0x46dace){return _0x330ec0(_0x46dace);},'jhCVS':function(_0x5390e6,_0x536060){var _0x3847a9=_0x10a03b;return _0x4927b6[_0x3847a9(0x6a1)](_0x5390e6,_0x536060);}};if(_0x4927b6[_0x10a03b(0x696)]===_0x10a03b(0xe8)){var _0x1832e9=('5|8|1'+'0|2|3'+'|0|4|'+_0x10a03b(0x1a2)+'|9')['split']('|'),_0x3bc445=-0x1efd+0xac*0xc+0x16ed;while(!![]){switch(_0x1832e9[_0x3bc445++]){case'0':var _0x7064b4=-0xfbb*0x2+0x1ed5*-0x1+0x3e77,_0x3ad377=-0xd7b+0x224*-0x5+0x183b*0x1;continue;case'1':if(!_0xbbfc35['gameL'+'oaded'])_0xb855f8('waiti'+'ng\x20fo'+_0x10a03b(0x4ab)+'e…',_0x10a03b(0x13c)+'255,1'+'80,19'+_0x10a03b(0x145)+')');continue;case'2':_0x5464cd[_0x10a03b(0x3b6)+'lign']=_0x4c0522[_0x10a03b(0x3c1)];continue;case'3':_0x4fe010['textB'+_0x10a03b(0x515)+'ne']=_0x4c0522['wbPDO'];continue;case'4':var _0xb855f8=(_0x30907e,_0x21a2c)=>{var _0x2ca6c0=_0x10a03b;_0x2dce68[_0x2ca6c0(0x402)+_0x2ca6c0(0x413)]=_0x1a582d['CnAsT'](_0x21a2c,'rgba('+_0x2ca6c0(0x40d)+_0x2ca6c0(0x40b)+_0x2ca6c0(0x5a5)+'5)'),_0x2e2367[_0x2ca6c0(0x2a6)+'ext'](_0x30907e,_0x3ad377,_0x7064b4),_0x7064b4+=-0xbcf+0x5*0x13+0xb80;};continue;case'5':var _0x1a582d={'CnAsT':function(_0x456c59,_0x2e99b8){return _0x4c0522['mJzUV'](_0x456c59,_0x2e99b8);}};continue;case'6':_0x4c0522[_0x10a03b(0x49e)](_0xb855f8,_0x10a03b(0x3e8)+_0x10a03b(0x1db)+'R\x20v1.'+'1','#ff6b'+'9d');continue;case'7':if(_0x1c1fa8[_0x10a03b(0x30c)])_0x4c0522[_0x10a03b(0x61f)](_0xb855f8,_0x4c0522[_0x10a03b(0x498)](_0x199934,_0x10a03b(0x149)));continue;case'8':_0x5e1298[_0x10a03b(0x123)]();continue;case'9':_0x118a34['resto'+'re']();continue;case'10':_0x5de957[_0x10a03b(0x1dc)]=_0x10a03b(0x392)+'2px\x20u'+_0x10a03b(0x233)+_0x10a03b(0x2f8)+_0x10a03b(0x21e)+'ospac'+'e';continue;}break;}}else{var _0x10910d=('17|2|'+'19|4|'+'13|16'+'|11|1'+_0x10a03b(0x45d)+_0x10a03b(0x239)+_0x10a03b(0x575)+_0x10a03b(0x578)+'|8|9|'+'18|21'+_0x10a03b(0x26d)+_0x10a03b(0x39d)+'0')[_0x10a03b(0x2d9)]('|'),_0x33c149=-0x1*0x1591+-0x1148+0x3*0xcf3;while(!![]){switch(_0x10910d[_0x33c149++]){case'0':_0x47028f['lineT'+'o'](_0x4927b6['bKoca'](_0x2ace3c,_0x50c4a4),_0x414392);continue;case'1':_0x47028f['begin'+'Path']();continue;case'2':var _0x4a7e3b=_0x4927b6['FAzCY'](Number,_0x532c70['chSiz'+'e'])||0x2195+0x40*-0x1d+-0x2a2*0xa;continue;case'3':_0x47028f['moveT'+'o'](_0x2ace3c+_0x50c4a4,_0x414392);continue;case'4':_0x47028f['save']();continue;case'5':var _0x50c4a4=(0x6b7+0x1a*0x133+0x23*-0x115)*_0x4a7e3b,_0x326e0b=(-0x1208+0x6c8+-0x5a4*-0x2)*_0x4a7e3b;continue;case'6':_0x47028f[_0x10a03b(0x639)+'o'](_0x4927b6['CsyzB'](_0x2ace3c-_0x50c4a4,_0x326e0b),_0x414392);continue;case'7':_0x47028f[_0x10a03b(0x639)+'o'](_0x2ace3c,_0x4927b6['bKoca'](_0x414392-_0x50c4a4,_0x326e0b));continue;case'8':_0x47028f['lineT'+'o'](_0x2ace3c,_0x414392-_0x50c4a4);continue;case'9':_0x47028f['moveT'+'o'](_0x2ace3c,_0x414392+_0x50c4a4);continue;case'10':_0x47028f[_0x10a03b(0x417)+_0x10a03b(0x41d)]=0x1f34+0x4c9+-0x23f7;continue;case'11':_0x47028f[_0x10a03b(0x57d)+'idth']=Math['max'](-0x1eb6+0x24eb*-0x1+0x16*0x313+0.5,(0xb1*-0x22+0x1f60+0x3ee*-0x2)*_0x4a7e3b);continue;case'12':_0x47028f['shado'+'wColo'+'r']=_0x1fc26c;continue;case'13':_0x47028f[_0x10a03b(0x3b4)+_0x10a03b(0x4b0)+'e']=_0x1fc26c;continue;case'14':_0x47028f[_0x10a03b(0x311)](_0x2ace3c,_0x414392,_0x4927b6['nRsnP'](-0x1*-0x443+0x3*-0x9b8+-0x18e6*-0x1+0.6000000000000001,_0x4a7e3b),0xd*0x2dd+0x12*0x1f+-0x2767,_0x4927b6[_0x10a03b(0x26f)](Math['PI'],0x5f7*0x1+0x1aa3+-0x2098));continue;case'15':_0x47028f[_0x10a03b(0x30f)+'Path']();continue;case'16':_0x47028f[_0x10a03b(0x402)+'tyle']=_0x1fc26c;continue;case'17':var _0x2ace3c=_0x322c4a[_0x10a03b(0x4dd)]/(0x2*-0x4ac+-0x11a6+-0x120*-0x18),_0x414392=_0x4927b6['AmuFh'](_0x322c4a[_0x10a03b(0x56f)+'t'],0x1*-0x123a+0x76b+0xad1);continue;case'18':_0x47028f[_0x10a03b(0x1d9)+'o'](_0x2ace3c,_0x4927b6[_0x10a03b(0x3e6)](_0x4927b6[_0x10a03b(0x58e)](_0x414392,_0x50c4a4),_0x326e0b));continue;case'19':var _0x1fc26c=/^#[0-9a-f]{6}$/i[_0x10a03b(0x3a5)](_0x532c70[_0x10a03b(0x3ba)+'or'])?_0x532c70[_0x10a03b(0x3ba)+'or']:_0x4927b6[_0x10a03b(0x43e)];continue;case'20':_0x47028f[_0x10a03b(0x549)+'re']();continue;case'21':_0x47028f[_0x10a03b(0x3b4)+'e']();continue;case'22':_0x47028f['lineT'+'o'](_0x2ace3c+_0x50c4a4+_0x326e0b,_0x414392);continue;case'23':_0x47028f[_0x10a03b(0x42b)]();continue;}break;}}}function _0x47d385(_0x59b63f){var _0x37c8ea=_0x57ddb9;if(_0x4927b6['mSMKT']===_0x4927b6['mSMKT']){var _0x45bb6e=('1|0|2'+'|5|9|'+_0x37c8ea(0x497)+'|6|4')[_0x37c8ea(0x2d9)]('|'),_0x1863f4=0x14db*-0x1+-0x13*-0x1c6+-0xcd7;while(!![]){switch(_0x45bb6e[_0x1863f4++]){case'0':_0x47028f[_0x37c8ea(0x1dc)]=_0x4927b6['LQjvO'];continue;case'1':_0x47028f[_0x37c8ea(0x123)]();continue;case'2':_0x47028f['textA'+_0x37c8ea(0x36d)]='left';continue;case'3':_0x2a980d('SAKUR'+_0x37c8ea(0x1db)+_0x37c8ea(0x44b)+'1',_0x4927b6['ifmYc']);continue;case'4':_0x47028f['resto'+'re']();continue;case'5':_0x47028f['textB'+_0x37c8ea(0x515)+'ne']=_0x37c8ea(0x5d4);continue;case'6':if(!_0x535b13[_0x37c8ea(0x666)+'oaded'])_0x4927b6[_0x37c8ea(0x2cd)](_0x2a980d,_0x37c8ea(0x2d2)+'ng\x20fo'+'r\x20gam'+'e…',_0x4927b6[_0x37c8ea(0x6a3)]);continue;case'7':if(_0x532c70[_0x37c8ea(0x30c)])_0x4927b6['iVwTE'](_0x2a980d,_0x4f6b3c+_0x4927b6['HYROn']);continue;case'8':var _0x2a980d=(_0x459fd5,_0x4f44d5)=>{var _0x22dfb2=_0x37c8ea;_0x47028f[_0x22dfb2(0x402)+'tyle']=_0x4927b6[_0x22dfb2(0x42e)](_0x4f44d5,_0x22dfb2(0x13c)+_0x22dfb2(0x40d)+_0x22dfb2(0x40b)+'0,0.7'+'5)'),_0x47028f['fillT'+_0x22dfb2(0x55d)](_0x459fd5,_0x3d3f48,_0x3a29c6),_0x3a29c6+=0xb7*0x2b+0x9*0x1e4+-0x2fb1;};continue;case'9':var _0x3a29c6=-0xea0+0xfc2+-0xf6,_0x3d3f48=0x16cf+0x1363+0x33e*-0xd;continue;}break;}}else{_0x36f31f=_0x27cbb7;if(!_0x5570e8){var _0x2fd146=(_0x37c8ea(0x536)+'|3|5|'+'2')[_0x37c8ea(0x2d9)]('|'),_0x46932a=0x2144+0x2*0xb6a+0x167*-0x28;while(!![]){switch(_0x2fd146[_0x46932a++]){case'0':var _0x420d94=_0x2f736d['creat'+'eElem'+'ent'](_0x4927b6['UASAk']);continue;case'1':_0x420d94['textC'+'onten'+'t']=_0x221dad;continue;case'2':_0x381297(()=>_0xfb994b[_0x37c8ea(0x4d0)+'List']['add'](_0x37c8ea(0x298)));continue;case'3':_0x40cfef=_0x50a89c();continue;case'4':_0xa353cb['appen'+_0x37c8ea(0x64f)+'d'](_0x420d94);continue;case'5':_0x12cc6f['appen'+_0x37c8ea(0x64f)+'d'](_0x54e593);continue;}break;}}_0x1a30ba['class'+_0x37c8ea(0x2ef)]['toggl'+'e']('shown',_0x46163f);}}function _0x404003(){var _0x303dee=_0x57ddb9,_0x3f9b93={'VTSTc':_0x1bbdac[_0x303dee(0x459)]};if(_0x1bbdac[_0x303dee(0x256)]!==_0x303dee(0x1e2))_0x2967e5=_0x59bcad[_0x303dee(0x12d)](_0x4927b6[_0x303dee(0x2e8)](_0x4927b6[_0x303dee(0x1c0)](_0x42e51e,0x5b4*0x2+-0x1221+0x3*0x38b),_0x155906-_0x4231e5)),_0x19daa8=-0x8*-0x4a3+0x142+-0x265a*0x1,_0x4660f6=_0x13e66c;else{_0x1bbdac['kJNhb'](requestAnimationFrame,_0x404003),_0x36851f++;var _0x24f539=performance[_0x303dee(0x1a1)]();_0x1bbdac[_0x303dee(0x2e3)](_0x24f539,_0x4129b8)>=0x1c3b+-0x1*0x14ab+-0x2ce*0x2&&(_0x1bbdac[_0x303dee(0x177)](_0x1bbdac[_0x303dee(0x3ec)],_0x303dee(0x502))?(_0x4f6b3c=Math[_0x303dee(0x12d)](_0x1bbdac['jUGwq'](_0x36851f*(-0x5a8*0x4+0xef4+0xb94),_0x24f539-_0x4129b8)),_0x36851f=0x1460+-0x2*-0x33e+-0x1adc,_0x4129b8=_0x24f539):_0x53b5e2['warn'](_0x3f9b93['VTSTc'],_0x166ff5&&_0x335c31['messa'+'ge']));_0x1bbdac['kuQXW'](_0x21256e),_0x1e7781(),_0x47028f['clear'+_0x303dee(0x163)](0x62e+-0x4a4+-0x18a,0x1*0xc1+0xbc1+-0xc82,_0x2999e0['w'],_0x2999e0['h']);var _0x11594d={'left':0x0,'top':0x0,'right':_0x2999e0['w'],'bottom':_0x2999e0['h'],'width':_0x2999e0['w'],'height':_0x2999e0['h']};if(_0x532c70[_0x303dee(0x3f9)+'hair'])_0x12ed29(_0x11594d);if(_0x532c70['keyst'+'rokes'])_0x1bbdac[_0x303dee(0x45c)](_0x16f408,_0x11594d);_0x1bbdac['gIprp'](_0x47d385,_0x11594d);}}var _0x30b001=document[_0x57ddb9(0x5a3)+'eElem'+'ent']('div');_0x30b001['id']='sakur'+_0x57ddb9(0x237),_0x30b001['style'][_0x57ddb9(0x1a5)+'xt']=_0x57ddb9(0x2f0)+_0x57ddb9(0x460)+_0x57ddb9(0x328)+_0x57ddb9(0x4e3)+':0;z-'+_0x57ddb9(0x1c5)+_0x57ddb9(0x16f)+'48364'+_0x57ddb9(0x3de)+_0x57ddb9(0x67d)+_0x57ddb9(0x173)+_0x57ddb9(0x172)+'e;';var _0x597d54=_0x30b001[_0x57ddb9(0x2ea)+_0x57ddb9(0x209)+'ow']({'mode':_0x1bbdac[_0x57ddb9(0x579)]});(document['body']||document[_0x57ddb9(0x591)+_0x57ddb9(0x155)+'ement'])[_0x57ddb9(0x57b)+_0x57ddb9(0x64f)+'d'](_0x30b001);var _0x42525a=![],_0x433b07={};try{_0x433b07=JSON[_0x57ddb9(0x17a)](localStorage[_0x57ddb9(0x623)+'em'](_0x57ddb9(0x2fb)+_0x57ddb9(0x152)+_0x57ddb9(0x695)+'v1')||'{}');}catch(_0x3588f7){}function _0x5058d6(){var _0x527757=_0x57ddb9;if(_0x1bbdac[_0x527757(0x2dd)](_0x1bbdac['NpYAx'],_0x527757(0x344)))_0x3b1e07['hookG'+'od']=_0x4b69a8,_0x3a68df['hookG'+_0x527757(0x42d)]=_0x25d184,_0x2395f7['hookN'+'oReco'+'il']=_0x34d77b,_0x292108[_0x527757(0x36f)+'aptur'+'e']=_0x5c6bb1,_0x34cf9a(),_0x295d53['reloa'+'d']();else try{localStorage[_0x527757(0x3e7)+'em']('sakur'+_0x527757(0x152)+'r.ui.'+'v1',JSON['strin'+_0x527757(0x476)](_0x433b07));}catch(_0xa2dbe3){}}function _0x293f25(_0x177d19,_0x479297){var _0x5e9b45=_0x57ddb9,_0x5339a7={'MdIun':_0x5e9b45(0x5f0)+_0x5e9b45(0x1f7)+_0x5e9b45(0x46d)+_0x5e9b45(0x2ed)+'|8','NvRzz':function(_0x239343){return _0x239343();},'DmmFc':function(_0xc45c8a,_0x5a2a40){return _0xc45c8a-_0x5a2a40;},'usxst':function(_0x4ab7a2,_0x2bb313){return _0x4ab7a2/_0x2bb313;}};if(_0x4927b6['hqizn']===_0x4927b6['hqizn']){var _0x30fd98=document[_0x5e9b45(0x5a3)+'eElem'+_0x5e9b45(0x57c)](_0x5e9b45(0x1f5)+'n');return _0x30fd98['type']=_0x5e9b45(0x1f5)+'n',_0x30fd98[_0x5e9b45(0x4d0)+_0x5e9b45(0x61a)]=_0x5e9b45(0x2cc)+_0x5e9b45(0x297),_0x30fd98['setAt'+_0x5e9b45(0x647)+'te'](_0x5e9b45(0x202),_0x5e9b45(0x13f)+'h'),_0x30fd98[_0x5e9b45(0x158)+'tribu'+'te']('aria-'+_0x5e9b45(0x6a7)+'ed',_0x4927b6['mbkRu'](String,!!_0x177d19)),_0x30fd98['oncli'+'ck']=_0x10e85a=>{var _0x216caf=_0x5e9b45;_0x10e85a['stopP'+'ropag'+_0x216caf(0x4ac)]();var _0x49b92f=_0x30fd98[_0x216caf(0x2d6)+_0x216caf(0x647)+'te'](_0x4927b6[_0x216caf(0x19d)])!=='true';_0x30fd98[_0x216caf(0x158)+'tribu'+'te']('aria-'+'check'+'ed',String(_0x49b92f)),_0x479297(_0x49b92f);},_0x30fd98;}else{var _0x250521=_0x5339a7[_0x5e9b45(0x25e)]['split']('|'),_0x1a1505=-0x179d+0xbf2*0x2+0x47*-0x1;while(!![]){switch(_0x250521[_0x1a1505++]){case'0':if(_0x861a52['cross'+'hair'])_0x42cd39(_0x1c1bfa);continue;case'1':_0x4554af(_0x1aebd6);continue;case'2':_0x5339a7['NvRzz'](_0x15705d);continue;case'3':if(_0x3c175c[_0x5e9b45(0x550)+_0x5e9b45(0x5ab)])_0x410d95(_0x1c1bfa);continue;case'4':_0x4dbd03++;continue;case'5':var _0x1c1bfa={'left':0x0,'top':0x0,'right':_0x4c9e1b['w'],'bottom':_0x44f197['h'],'width':_0x57e95d['w'],'height':_0x4c7a8b['h']};continue;case'6':_0x534891();continue;case'7':_0x1bd09c['clear'+_0x5e9b45(0x163)](-0x6d7+-0x20a3+-0x3e*-0xa3,0x1764+0x1*-0x1c0+-0x15a4,_0x5152d9['w'],_0xc55f86['h']);continue;case'8':_0x3b81ab(_0x1c1bfa);continue;case'9':_0x5339a7['DmmFc'](_0x476ff8,_0x2f9ea7)>=0x9c0+-0x1*0xbb2+0x3e6&&(_0x288ca5=_0x2a9a5e[_0x5e9b45(0x12d)](_0x5339a7[_0x5e9b45(0x53c)](_0x3f9e50*(-0x13*-0x13a+0x1*-0x1ba2+-0x7c*-0x11),_0x476ff8-_0x2382d6)),_0x5ca7bf=-0x1fc2+-0x2267*0x1+0x4229*0x1,_0x1cf869=_0x476ff8);continue;case'10':var _0x476ff8=_0x101f14[_0x5e9b45(0x1a1)]();continue;}break;}}}function _0x54ab5e(_0x43beba,_0x2a0bde,_0x54b494,_0x27df8f,_0x2306d3){var _0x51f016=_0x57ddb9,_0x4ca6d7={'PzPBq':function(_0x5785fd,_0x58a605){return _0x5785fd(_0x58a605);},'bMcGB':function(_0x3df271,_0x7c76a4){return _0x1bbdac['kJNhb'](_0x3df271,_0x7c76a4);}},_0x20409a=document['creat'+_0x51f016(0x253)+'ent'](_0x1bbdac['fzPxj']);_0x20409a['class'+_0x51f016(0x61a)]=_0x1bbdac['wfPZF'];var _0x7ba6b8=document[_0x51f016(0x5a3)+_0x51f016(0x253)+_0x51f016(0x57c)]('input');_0x7ba6b8[_0x51f016(0x359)]=_0x51f016(0x3d1),_0x7ba6b8[_0x51f016(0x4d0)+_0x51f016(0x61a)]=_0x51f016(0x4e7)+'ider',_0x7ba6b8[_0x51f016(0x6a0)]=_0x2a0bde,_0x7ba6b8['max']=_0x54b494,_0x7ba6b8[_0x51f016(0x4b7)]=_0x27df8f,_0x7ba6b8[_0x51f016(0x2f7)]=_0x43beba;var _0x3684f7=document[_0x51f016(0x5a3)+_0x51f016(0x253)+_0x51f016(0x57c)]('span');_0x3684f7[_0x51f016(0x4d0)+'Name']=_0x1bbdac['gHnsD'],_0x3684f7[_0x51f016(0x4fb)+_0x51f016(0x2b7)+'t']=_0x1bbdac[_0x51f016(0x474)](String,_0x43beba);var _0x237aec=()=>{var _0x36f6f2=_0x51f016;_0x3684f7[_0x36f6f2(0x4fb)+_0x36f6f2(0x2b7)+'t']=String(_0x7ba6b8[_0x36f6f2(0x2f7)]),_0x20409a['style'][_0x36f6f2(0x49a)+_0x36f6f2(0x2c8)+'y'](_0x4927b6[_0x36f6f2(0x5f2)],_0x4927b6['CsyzB'](_0x7ba6b8[_0x36f6f2(0x2f7)],_0x2a0bde)/(_0x54b494-_0x2a0bde)*(0x17bd+0x6f*-0x29+-0x592)+'%');};return _0x7ba6b8[_0x51f016(0x5ae)+'ut']=()=>{var _0x5b3dd9=_0x51f016;_0x237aec(),_0x4ca6d7[_0x5b3dd9(0x214)](_0x2306d3,_0x4ca6d7['bMcGB'](Number,_0x7ba6b8['value']));},_0x237aec(),_0x20409a['appen'+'d'](_0x7ba6b8,_0x3684f7),_0x20409a;}function _0x5a54c3(_0x1224e9,_0x13c80d){var _0x477454=_0x57ddb9;if(_0x1bbdac['ZLtEI']===_0x477454(0x175)){var _0x2036a7=document[_0x477454(0x5a3)+_0x477454(0x253)+_0x477454(0x57c)](_0x477454(0x3b3));return _0x2036a7[_0x477454(0x359)]=_0x1bbdac['xbVfG'],_0x2036a7[_0x477454(0x4d0)+_0x477454(0x61a)]='sk-co'+_0x477454(0x5c1),_0x2036a7['value']=/^#[0-9a-f]{6}$/i['test'](_0x1224e9)?_0x1224e9:_0x1bbdac[_0x477454(0x5fd)],_0x2036a7[_0x477454(0x5ae)+'ut']=()=>_0x13c80d(_0x2036a7['value']),_0x2036a7;}else try{var _0x55f536=new _0x47a68d(_0x204967)[_0x477454(0x51b)+'ield'](_0x12bca6,_0x316a79);_0x5ace12[_0x477454(0x5ed)](_0x58333a,_0x55f536!==_0x3637c2?_0x55f536[_0x477454(0x2c3)]():null);}catch(_0x504972){_0x2724e5[_0x477454(0x5ed)](_0x4e281c,null);}}function _0x1381cc(_0x3abb95,_0x2569ff,_0xfc665a){var _0x130b64=_0x57ddb9,_0x45a7c6=document[_0x130b64(0x5a3)+_0x130b64(0x253)+_0x130b64(0x57c)](_0x1bbdac[_0x130b64(0x26c)]);_0x45a7c6['class'+_0x130b64(0x61a)]='sk-fi'+'eld';for(var [_0x2dca79,_0x44face]of _0x2569ff){if(_0x1bbdac[_0x130b64(0x177)](_0x1bbdac[_0x130b64(0x382)],_0x130b64(0x3c6))){var _0x5423c6=document[_0x130b64(0x5a3)+'eElem'+_0x130b64(0x57c)](_0x1bbdac[_0x130b64(0x309)]);_0x5423c6['value']=_0x2dca79,_0x5423c6['textC'+_0x130b64(0x2b7)+'t']=_0x44face,_0x45a7c6[_0x130b64(0x57b)+'dChil'+'d'](_0x5423c6);}else{var _0x12a3ca=_0x2b1a72['hookP'+'refix']({'typeName':_0x3b6f37,'methodName':_0x53ff33,'params':_0xd71494,'returnType':_0x4d0b9c},_0x3f99ef);return _0x12a3ca[_0x130b64(0x4df)+'ed']=_0x59fb1e!==![],_0x48e241[_0x18dad8]=_0x12a3ca,_0x11ea94[_0x130b64(0x47f)+_0x130b64(0x132)]++,_0x12a3ca;}}return _0x45a7c6['value']=_0x3abb95,_0x45a7c6[_0x130b64(0x18d)+_0x130b64(0x617)]=()=>_0xfc665a(_0x45a7c6['value']),_0x45a7c6;}function _0x2e61dc(_0x272d0d,_0x480339){var _0x6f055b=_0x57ddb9,_0xff79bc={'MbexV':function(_0x16a896){return _0x16a896();}},_0x5293ca=document['creat'+_0x6f055b(0x253)+'ent'](_0x4927b6['YVPqL']);return _0x5293ca['type']=_0x4927b6[_0x6f055b(0x312)],_0x5293ca[_0x6f055b(0x4d0)+_0x6f055b(0x61a)]=_0x4927b6[_0x6f055b(0x41b)],_0x5293ca[_0x6f055b(0x4fb)+'onten'+'t']=_0x272d0d,_0x5293ca['oncli'+'ck']=_0x6e522=>{var _0x3ad1cc=_0x6f055b;_0x6e522['stopP'+'ropag'+_0x3ad1cc(0x4ac)](),_0xff79bc[_0x3ad1cc(0x5ef)](_0x480339);},_0x5293ca;}function _0x121087(_0x37cb2b,_0x1411e9,_0x10278d){var _0x216ed5=_0x57ddb9,_0x432d28={'NUYeE':function(_0x5b3d0b,_0x342a6a){var _0x4b6b20=_0x5cbc;return _0x1bbdac[_0x4b6b20(0x42f)](_0x5b3d0b,_0x342a6a);}},_0x32fd2c=document['creat'+'eElem'+_0x216ed5(0x57c)](_0x1bbdac[_0x216ed5(0x651)]);_0x32fd2c['class'+_0x216ed5(0x61a)]='sk-ct'+'l';var _0x5d520c=document['creat'+_0x216ed5(0x253)+'ent'](_0x216ed5(0x643));_0x5d520c['class'+_0x216ed5(0x61a)]='sk-la'+'bel',_0x5d520c[_0x216ed5(0x4fb)+_0x216ed5(0x2b7)+'t']=_0x37cb2b;if(_0x1411e9){if(_0x1bbdac['FFXQo']!==_0x216ed5(0x216)){var _0x16809e=_0x416861['devic'+'ePixe'+'lRati'+'o']||0x16bd*0x1+0xbb6+0x2*-0x1139,_0x4a53d1=_0x4ddf7d['inner'+'Width'],_0x1f4f75=_0x35e7bd[_0x216ed5(0x48b)+_0x216ed5(0x207)+'t'];if(_0x4a53d1===_0x470087['w']&&_0x432d28['NUYeE'](_0x1f4f75,_0x31b847['h'])&&_0x16809e===_0x5e852c[_0x216ed5(0x3f1)])return;_0x35ac3e['w']=_0x4a53d1,_0x2531a6['h']=_0x1f4f75,_0x28883e[_0x216ed5(0x3f1)]=_0x16809e,_0x5ee061[_0x216ed5(0x4dd)]=_0x17a55f['round'](_0x4a53d1*_0x16809e),_0x3cf8ac['heigh'+'t']=_0x16d1e3[_0x216ed5(0x12d)](_0x1f4f75*_0x16809e),_0x401b17[_0x216ed5(0x292)+'ansfo'+'rm'](_0x16809e,0x4*-0x509+0x1*0x1647+-0x223,-0x689*-0x1+0x1b37*-0x1+0xa57*0x2,_0x16809e,0x2*0x37+0x1391+-0x13ff,-0xb51+-0x79d*-0x4+-0x1323);}else{var _0x5e25c2=document[_0x216ed5(0x5a3)+_0x216ed5(0x253)+'ent']('small');_0x5e25c2[_0x216ed5(0x4d0)+'Name']=_0x216ed5(0x24b)+'nt',_0x5e25c2[_0x216ed5(0x4fb)+'onten'+'t']=_0x1411e9,_0x5d520c['appen'+_0x216ed5(0x64f)+'d'](_0x5e25c2);}}return _0x32fd2c['appen'+'d'](_0x5d520c,_0x10278d),_0x32fd2c;}function _0x501756(_0x172c2f,_0x596763){var _0x27ab05=_0x57ddb9;if(_0x1bbdac[_0x27ab05(0x33e)]!==_0x27ab05(0x539)){var _0x146aa1=document[_0x27ab05(0x5a3)+_0x27ab05(0x253)+_0x27ab05(0x57c)](_0x1bbdac[_0x27ab05(0x651)]);return _0x146aa1[_0x27ab05(0x4d0)+_0x27ab05(0x61a)]=_0x1bbdac[_0x27ab05(0x4e1)]('sk-no'+'te',_0x596763?'\x20err':''),_0x146aa1['textC'+_0x27ab05(0x2b7)+'t']=_0x172c2f,_0x146aa1;}else _0x1edad6[_0x27ab05(0x3e7)+'em'](_0x4927b6[_0x27ab05(0x11e)],_0x56bbca[_0x27ab05(0x1a3)+'gify'](_0x107105));}function _0xc95841(_0x218b70,_0x1ce415,_0x2e6d38,_0x22f821,_0x1e1126){var _0x5ca3f1=_0x57ddb9,_0x55873b=document['creat'+_0x5ca3f1(0x253)+_0x5ca3f1(0x57c)](_0x4927b6[_0x5ca3f1(0x30d)]);_0x55873b['class'+_0x5ca3f1(0x61a)]=_0x4927b6['xILph']+(_0x2e6d38?_0x5ca3f1(0x37e):'');var _0x149f82=document[_0x5ca3f1(0x5a3)+_0x5ca3f1(0x253)+_0x5ca3f1(0x57c)]('div');_0x149f82[_0x5ca3f1(0x4d0)+'Name']='sk-ca'+_0x5ca3f1(0x1be)+'ad';var _0x430e22=document[_0x5ca3f1(0x5a3)+_0x5ca3f1(0x253)+_0x5ca3f1(0x57c)](_0x4927b6[_0x5ca3f1(0x30d)]);_0x430e22[_0x5ca3f1(0x4d0)+_0x5ca3f1(0x61a)]=_0x5ca3f1(0x23c)+'rd-ti'+_0x5ca3f1(0x280);var _0x135d24=document['creat'+_0x5ca3f1(0x253)+'ent'](_0x4927b6[_0x5ca3f1(0x447)]);_0x135d24['textC'+_0x5ca3f1(0x2b7)+'t']=_0x218b70,_0x430e22['appen'+'dChil'+'d'](_0x135d24);if(_0x22f821){var _0x2289e1=_0x4927b6['uoeZi'](_0x293f25,_0x2e6d38,_0x524e4d=>{var _0x175a22=_0x5ca3f1;_0x175a22(0x226)===_0x175a22(0x226)?(_0x55873b['class'+_0x175a22(0x2ef)]['toggl'+'e']('on',_0x524e4d),_0x22f821(_0x524e4d)):(_0x3d9c2d[_0x175a22(0x4a9)+_0x175a22(0x254)]=_0x51b642,_0x3a6859());});_0x149f82['appen'+'d'](_0x430e22,_0x2289e1);}else{if(_0x4927b6[_0x5ca3f1(0x2b1)]('msHlt','PQIIP')){var _0x3d148f=_0x4927b6[_0x5ca3f1(0x11b)](_0x26b291['width'],0x20f0+0x1b*0x5a+-0x2a6c),_0x449b13=_0x4927b6[_0x5ca3f1(0x5db)](_0x2f3e84[_0x5ca3f1(0x56f)+'t'],-0x1a2e+-0x1f5*-0x8+0x1*0xa88),_0x354653=_0x52ede1(_0x19f2d0['chSiz'+'e'])||0x14b9+-0x830+-0x2*0x644,_0x370ef6=/^#[0-9a-f]{6}$/i['test'](_0x289203['chCol'+'or'])?_0x4811fd[_0x5ca3f1(0x3ba)+'or']:_0x5ca3f1(0x34d)+'9d';_0x42142a[_0x5ca3f1(0x123)](),_0x460977['strok'+_0x5ca3f1(0x4b0)+'e']=_0x370ef6,_0x4cddd0[_0x5ca3f1(0x402)+_0x5ca3f1(0x413)]=_0x370ef6,_0x4a51d9[_0x5ca3f1(0x57d)+_0x5ca3f1(0x3d7)]=_0x50da44['max'](0xba8+-0x35*0xa7+-0x1*-0x16ec+0.5,(-0x6b0+0x2395+-0x1d*0xff)*_0x354653),_0x2524cb[_0x5ca3f1(0x417)+_0x5ca3f1(0x284)+'r']=_0x370ef6,_0xc340eb['shado'+'wBlur']=-0x14*0xe+-0xf*-0x30+-0x1f*0xe;var _0x2d9c2c=(0x1f4d+-0x26c2+0x77b)*_0x354653,_0x389c8c=(0x1c95+0x5f*0x5f+-0x3fce)*_0x354653;_0x2efb91['begin'+_0x5ca3f1(0x269)](),_0x5cfe2f[_0x5ca3f1(0x639)+'o'](_0x4927b6['CsyzB'](_0x3d148f,_0x2d9c2c)-_0x389c8c,_0x449b13),_0xaf9c8[_0x5ca3f1(0x1d9)+'o'](_0x3d148f-_0x2d9c2c,_0x449b13),_0x478372[_0x5ca3f1(0x639)+'o'](_0x4927b6['QbjVZ'](_0x3d148f,_0x2d9c2c),_0x449b13),_0xf16ca1[_0x5ca3f1(0x1d9)+'o'](_0x4927b6['dGvSi'](_0x3d148f,_0x2d9c2c)+_0x389c8c,_0x449b13),_0x93e871['moveT'+'o'](_0x3d148f,_0x449b13-_0x2d9c2c-_0x389c8c),_0x263680[_0x5ca3f1(0x1d9)+'o'](_0x3d148f,_0x4927b6['fpOgm'](_0x449b13,_0x2d9c2c)),_0x553eae[_0x5ca3f1(0x639)+'o'](_0x3d148f,_0x4927b6[_0x5ca3f1(0x122)](_0x449b13,_0x2d9c2c)),_0x54acba['lineT'+'o'](_0x3d148f,_0x449b13+_0x2d9c2c+_0x389c8c),_0x2ae7b0[_0x5ca3f1(0x3b4)+'e'](),_0x100a02['begin'+_0x5ca3f1(0x269)](),_0x266933[_0x5ca3f1(0x311)](_0x3d148f,_0x449b13,(-0xb*-0x1a+-0x5*-0x470+-0x174d+0.6000000000000001)*_0x354653,-0x27*0xc9+-0x1a*0x26+-0x227b*-0x1,_0x4861a['PI']*(0x145*0x19+0x1*-0xdf+-0x1edc)),_0x5038e2[_0x5ca3f1(0x42b)](),_0xb1d112['resto'+'re']();}else _0x149f82[_0x5ca3f1(0x57b)+_0x5ca3f1(0x64f)+'d'](_0x430e22);}_0x55873b['appen'+_0x5ca3f1(0x64f)+'d'](_0x149f82);if(_0x1e1126&&_0x1e1126[_0x5ca3f1(0x5b5)+'h']){var _0x408e5d=document[_0x5ca3f1(0x5a3)+_0x5ca3f1(0x253)+'ent'](_0x4927b6[_0x5ca3f1(0x30d)]);_0x408e5d['class'+_0x5ca3f1(0x61a)]='sk-mb'+_0x5ca3f1(0x609);var _0x5be936=document['creat'+_0x5ca3f1(0x253)+'ent'](_0x4927b6[_0x5ca3f1(0x30d)]);_0x5be936[_0x5ca3f1(0x4d0)+_0x5ca3f1(0x61a)]='sk-md'+_0x5ca3f1(0x166),_0x5be936[_0x5ca3f1(0x4fb)+_0x5ca3f1(0x2b7)+'t']=_0x1ce415,_0x408e5d['appen'+_0x5ca3f1(0x64f)+'d'](_0x5be936);for(var _0xf71fea of _0x1e1126)_0x408e5d['appen'+'dChil'+'d'](_0xf71fea);_0x55873b[_0x5ca3f1(0x57b)+_0x5ca3f1(0x64f)+'d'](_0x408e5d);}return _0x55873b;}var _0x2134f4=[{'id':_0x1bbdac[_0x57ddb9(0x558)],'label':_0x1bbdac[_0x57ddb9(0x41e)]},{'id':_0x57ddb9(0x2a2),'label':'Move'},{'id':'visua'+'l','label':_0x1bbdac['JBmOS']},{'id':_0x57ddb9(0x20f),'label':'Misc'},{'id':_0x1bbdac['oRnYv'],'label':_0x1bbdac[_0x57ddb9(0x265)]}];function _0x3fb1bf(){var _0x4bb9c6=_0x57ddb9,_0x3f647a=_0x535b13[_0x4bb9c6(0x5e1)+'ode']?'SAFE\x20'+_0x4bb9c6(0x3c3)+_0x4bb9c6(0x1c4)+'rlay\x20'+_0x4bb9c6(0x137)+_0x4bb9c6(0x2ad)+_0x4bb9c6(0x458)+_0x4bb9c6(0x490)+_0x4bb9c6(0x4a0)+_0x4bb9c6(0x1ab)+')':_0x535b13[_0x4bb9c6(0x4da)]?_0x4927b6[_0x4bb9c6(0x5a6)](_0x4927b6[_0x4bb9c6(0x5a6)]('UWMK\x20'+'bound'+'\x20',_0x535b13[_0x4bb9c6(0x47f)+_0x4bb9c6(0x132)]?_0x4927b6[_0x4bb9c6(0x1a8)](_0x535b13[_0x4bb9c6(0x47f)+'Ok']+'/',_0x535b13['hooks'+'Total'])+_0x4927b6[_0x4bb9c6(0x3d6)]:_0x4927b6['sDVDk'])+('\x20|\x20ga'+_0x4bb9c6(0x5b6))+(_0x535b13[_0x4bb9c6(0x666)+'oaded']?_0x4927b6['wPNVL']:_0x4bb9c6(0x65a)+'ng'),_0x4bb9c6(0x2c5)+_0x4bb9c6(0x368)+'\x20')+(_0x535b13[_0x4bb9c6(0x3cb)+'ers']?_0x4bb9c6(0x3fc):_0x4927b6[_0x4bb9c6(0x295)])+(_0x4bb9c6(0x50a)+_0x4bb9c6(0x396)+'t\x20')+(_0x535b13[_0x4bb9c6(0x10c)+_0x4bb9c6(0x38c)]?_0x4927b6[_0x4bb9c6(0x2b8)]:_0x4927b6['nLnYl']):_0x4bb9c6(0x67a)+_0x4bb9c6(0x2a1)+'NG\x20—\x20'+_0x4bb9c6(0x4d2)+'ay\x20on'+_0x4bb9c6(0x66b)+_0x4bb9c6(0x4cb)+_0x4bb9c6(0x3e1)+_0x4bb9c6(0x1f6)+'erscr'+'ipt)';if(_0x535b13[_0x4bb9c6(0x3d8)+_0x4bb9c6(0x684)])_0x3f647a+=_0x4927b6['GmhWO']+_0x535b13['lastE'+_0x4bb9c6(0x684)];return _0xc95841(_0x4bb9c6(0x19f)+'s',_0x3f647a,_0x535b13[_0x4bb9c6(0x4da)],null,[_0x121087(_0x4bb9c6(0x3d4)+'PS\x20un'+'lock',_0x4927b6['JsYOR'],_0x2e61dc('Apply',()=>{var _0x45739d=_0x4bb9c6;try{if(_0x1ed7d4)_0x1ed7d4[_0x45739d(0x17b)](_0x4927b6[_0x45739d(0x59a)],'set_t'+'arget'+'Frame'+'Rate',[-0x1*-0xbce+0x1*0x12b9+-0x19*0x12f]);}catch(_0x31b80c){}}))]);}function _0x395ae2(_0x4ab3fd){var _0x5678d9=_0x57ddb9,_0x30c635={'GmOKI':function(_0x299ef7){return _0x299ef7();},'gXCfS':_0x4927b6[_0x5678d9(0x11e)],'OnhuB':function(_0x138eef){var _0x562b59=_0x5678d9;return _0x4927b6[_0x562b59(0x40e)](_0x138eef);},'qcmzS':function(_0x271018){return _0x271018();},'DxUHt':_0x4927b6['sPGDk'],'YxOCo':function(_0x2b860f,_0x5486d5,_0x227b09,_0x319ac6,_0x349cdf){return _0x2b860f(_0x5486d5,_0x227b09,_0x319ac6,_0x349cdf);},'hXMYo':function(_0x1b8007,_0x36186f){return _0x4927b6['kWYpB'](_0x1b8007,_0x36186f);},'PFxzf':_0x4927b6[_0x5678d9(0x46a)]};if(_0x4927b6[_0x5678d9(0x10e)](_0x4ab3fd,_0x5678d9(0x19b)+'t'))return[_0x3fb1bf(),_0xc95841(_0x5678d9(0x5c0)+_0x5678d9(0x2f3),_0x5678d9(0x462)+_0x5678d9(0x508)+'alth.'+'Initi'+'ateTa'+_0x5678d9(0x17c)+_0x5678d9(0x385)+'nd\x20OH'+_0x5678d9(0x14f)+_0x5678d9(0x55c)+_0x5678d9(0x53d)+_0x5678d9(0x2ff)+_0x5678d9(0x105)+_0x5678d9(0x11c)+'\x20hurt'+_0x5678d9(0x53e)+_0x5678d9(0x607)+_0x5678d9(0x36e),_0x532c70['god'],_0x5779d2=>{var _0x33b702=_0x5678d9;_0x532c70['god']=_0x5779d2,_0x28a7cd(),_0x7185a9(_0x33b702(0x44c),_0x5779d2),_0x4927b6[_0x33b702(0x2cd)](_0x7185a9,_0x4927b6[_0x33b702(0x2bc)],_0x5779d2);},[]),_0xc95841(_0x4927b6[_0x5678d9(0x3bc)],_0x5678d9(0x343)+_0x5678d9(0x17d)+'ilMot'+_0x5678d9(0x3af)+_0x5678d9(0x1c6)+'o\x20the'+'\x20reco'+_0x5678d9(0x116)+'rings'+_0x5678d9(0x440)+_0x5678d9(0x390)+_0x5678d9(0x59b),_0x532c70[_0x5678d9(0x15f)+'oil'],_0x1b4693=>{var _0x319fd5=_0x5678d9;_0x532c70[_0x319fd5(0x15f)+'oil']=_0x1b4693,_0x28a7cd(),_0x7185a9('noRec'+_0x319fd5(0x535),_0x1b4693);},[]),_0xc95841(_0x4927b6['uqqNR'],_0x4927b6['wIHEa'],_0x532c70[_0x5678d9(0xfa)+'ead'],_0x2a7bf5=>{var _0x335e60=_0x5678d9;_0x532c70['noSpr'+_0x335e60(0x4c5)]=_0x2a7bf5,_0x28a7cd();},[]),_0xc95841(_0x5678d9(0x4d3)+_0x5678d9(0x400)+'\x20[EXP'+']',_0x5678d9(0x271)+'s\x20Ove'+'rtide'+'Weapo'+_0x5678d9(0x29f)+_0x5678d9(0x554)+'\x20to\x201'+_0x5678d9(0x531)+_0x5678d9(0x53b)+_0x5678d9(0x466)+'still'+_0x5678d9(0x15b)+_0x5678d9(0x1af)+'s.',_0x532c70[_0x5678d9(0x46f)+_0x5678d9(0x69d)],_0x5b9130=>{var _0x2d6385=_0x5678d9;_0x532c70[_0x2d6385(0x46f)+_0x2d6385(0x69d)]=_0x5b9130,_0x28a7cd();},[]),_0xc95841(_0x4927b6[_0x5678d9(0x185)],'Overw'+_0x5678d9(0x29b)+'\x20Over'+'tideW'+_0x5678d9(0x261)+_0x5678d9(0x2b3)+'ge.\x20B'+_0x5678d9(0x604)+_0x5678d9(0x3a6)+_0x5678d9(0x124)+_0x5678d9(0x407)+_0x5678d9(0x37f)+_0x5678d9(0x61c)+'s.',_0x532c70['damag'+'eExp'],_0x40e39e=>{var _0x462bb1=_0x5678d9,_0x394dda={'TuEXE':_0x4927b6[_0x462bb1(0x520)],'waUMl':_0x462bb1(0x694)+_0x462bb1(0x5c1),'bKqTR':_0x4927b6[_0x462bb1(0x43e)]};if(_0x4927b6[_0x462bb1(0x3d5)](_0x462bb1(0x691),'rifUw')){var _0x4900a3=_0x2e7e6d[_0x462bb1(0x5a3)+_0x462bb1(0x253)+_0x462bb1(0x57c)]('input');return _0x4900a3[_0x462bb1(0x359)]=_0x394dda['TuEXE'],_0x4900a3[_0x462bb1(0x4d0)+_0x462bb1(0x61a)]=_0x394dda[_0x462bb1(0x560)],_0x4900a3[_0x462bb1(0x2f7)]=/^#[0-9a-f]{6}$/i[_0x462bb1(0x3a5)](_0x52da6a)?_0x4d8ed6:_0x394dda[_0x462bb1(0x1e9)],_0x4900a3[_0x462bb1(0x5ae)+'ut']=()=>_0x7787ac(_0x4900a3['value']),_0x4900a3;}else _0x532c70[_0x462bb1(0x418)+_0x462bb1(0x338)]=_0x40e39e,_0x28a7cd();},[_0x121087(_0x5678d9(0x56b)+'e\x20val'+'ue',null,_0x54ab5e(_0x532c70['damag'+'eValu'+'e'],-0x1*0x2303+0xe3e+-0x2f9*-0x7,0x1*0xb92+0x1*0xd7d+-0x7*0x34d,-0xaaa+-0x1*0x411+0x1d8*0x8,_0xb580e5=>{var _0x26cc67=_0x5678d9;_0x532c70['damag'+_0x26cc67(0x4fa)+'e']=_0xb580e5,_0x28a7cd();}))]),_0x4927b6[_0x5678d9(0x63c)](_0xc95841,'Infin'+_0x5678d9(0x64c)+'mmo\x20['+'EXP]',_0x5678d9(0x372)+_0x5678d9(0x52f)+'e\x20wea'+_0x5678d9(0x421)+_0x5678d9(0x1b3)+'ed\x20am'+'mo\x20to'+_0x5678d9(0x403)+_0x5678d9(0x62f)+'\x20200m'+'s.',_0x532c70[_0x5678d9(0x4a9)+'moExp'],_0x1cb42d=>{var _0x1855ed=_0x5678d9;_0x532c70[_0x1855ed(0x4a9)+'moExp']=_0x1cb42d,_0x28a7cd();},[_0x501756(_0x5678d9(0x139)+'loads'+_0x5678d9(0x61d)+_0x5678d9(0x227)+_0x5678d9(0x3e0)+'he\x20de'+'creme'+_0x5678d9(0x401)+_0x5678d9(0x34a)+_0x5678d9(0x3c4)+'where'+'.')])];if(_0x4927b6['YrOMb'](_0x4ab3fd,_0x5678d9(0x2a2)))return[_0xc95841(_0x4927b6['LWUiC'],_0x4927b6[_0x5678d9(0x64e)],_0x532c70[_0x5678d9(0x398)+_0x5678d9(0x3ed)]!==-0x482+0x14c3*0x1+-0x1*0xfdd,null,[_0x121087('Speed'+'\x20%',_0x4927b6['XmeTj'],_0x4927b6['IKHuc'](_0x54ab5e,_0x532c70[_0x5678d9(0x398)+'Pct'],0x98c+-0x362+-0x5f8,-0xdd+0x2*-0xadf+0x17c7*0x1,0x1c81+-0x43*0x5+-0x1b2d,_0x237061=>{var _0x135509=_0x5678d9;if(_0x4927b6[_0x135509(0x2b1)]('yltrr','lzGQa')){var _0xf6601f=_0x243189[_0x135509(0x499)+'ren'];for(var _0x3a2efc=-0xabb+0x84e*0x3+0x1*-0xe2f;_0x3a2efc<_0xf6601f['lengt'+'h'];_0x3a2efc++){if(_0xf6601f[_0x3a2efc]['id']&&_0xf6601f[_0x3a2efc]['id'][_0x135509(0x1c5)+'Of']('kour-'+_0x135509(0x55e))===-0x45*0x62+-0x21fa+-0xa*-0x60a)_0xf6601f[_0x3a2efc][_0x135509(0x340)][_0x135509(0x642)+'ay']='none';}}else _0x532c70[_0x135509(0x398)+'Pct']=_0x237061,_0x28a7cd();}))]),_0x4927b6[_0x5678d9(0x63c)](_0xc95841,_0x4927b6['riTey'],_0x4927b6[_0x5678d9(0x3bb)],_0x4927b6[_0x5678d9(0x31a)](_0x532c70[_0x5678d9(0x67e)+'ct'],0x1c40+0x4*0x8cb+-0x3f08)||_0x532c70['gravi'+_0x5678d9(0x690)]!==0x1b59*0x1+-0x1a68+-0x8d,null,[_0x121087(_0x5678d9(0x109)+'%',null,_0x54ab5e(_0x532c70[_0x5678d9(0x67e)+'ct'],0x24bf+-0x51b*-0x3+-0x33de,-0x2*0x2ab+0x126d+0x71*-0x1b,0x18a6+-0x1b91+0x2f0,_0x4c130f=>{var _0x2065d0=_0x5678d9;_0x532c70[_0x2065d0(0x67e)+'ct']=_0x4c130f,_0x28a7cd();})),_0x121087(_0x5678d9(0x21d)+_0x5678d9(0x483),_0x4927b6['oHXIc'],_0x4927b6[_0x5678d9(0x360)](_0x54ab5e,_0x532c70['gravi'+_0x5678d9(0x690)],-0x1c06+0x1a01+0x11*0x1f,0xfe7+0x29f*0x1+-0x11be,0x24c3*-0x1+0x1cd8+0x7f0,_0x4db62b=>{var _0x5e44db=_0x5678d9;_0x532c70[_0x5e44db(0x363)+'tyPct']=_0x4db62b,_0x30c635['GmOKI'](_0x28a7cd);}))]),_0xc95841(_0x4927b6[_0x5678d9(0x3f4)],_0x4927b6[_0x5678d9(0x1da)],_0x532c70[_0x5678d9(0xee)],_0x37c168=>{_0x532c70['bhop']=_0x37c168,_0x28a7cd();},[])];if(_0x4ab3fd===_0x5678d9(0x5df)+'l')return[_0x4927b6[_0x5678d9(0x360)](_0xc95841,_0x4927b6['TNdyE'],'WASD\x20'+_0x5678d9(0x686)+'/RMB\x20'+'+\x20Spa'+_0x5678d9(0x195)+_0x5678d9(0x4db)+'.',_0x532c70[_0x5678d9(0x550)+'rokes'],_0x1ce6e3=>{_0x532c70['keyst'+'rokes']=_0x1ce6e3,_0x28a7cd();},[_0x4927b6[_0x5678d9(0x48a)](_0x121087,_0x5678d9(0x60f)+'ion',null,_0x4927b6[_0x5678d9(0x48a)](_0x1381cc,_0x532c70[_0x5678d9(0x511)],[['bl','Botto'+_0x5678d9(0x170)+'t'],['br','Botto'+_0x5678d9(0x4e2)+'ht'],['ml','Left\x20'+_0x5678d9(0x602)+'e']],_0x36979f=>{var _0x257e9b=_0x5678d9;_0x532c70[_0x257e9b(0x511)]=_0x36979f,_0x30c635[_0x257e9b(0x577)](_0x28a7cd);})),_0x4927b6[_0x5678d9(0x4a8)](_0x121087,'Size',null,_0x4927b6[_0x5678d9(0x68d)](_0x54ab5e,_0x532c70[_0x5678d9(0xf8)+'le'],-0x6b*0x3b+-0xa63*0x1+0x230c+0.6,0x2*0x6b0+0x1129+-0x1e88+0.6000000000000001,0xbe*-0x1a+-0x3ba+0x1706+0.05,_0x168ece=>{var _0x1ba96a=_0x5678d9;_0x4927b6[_0x1ba96a(0x4e5)]!==_0x4927b6[_0x1ba96a(0x4d5)]?(_0x532c70[_0x1ba96a(0xf8)+'le']=_0x168ece,_0x4927b6['vVWtQ'](_0x28a7cd)):_0x3dbc8e['assig'+'n'](_0x4d8707,_0x192a31['parse'](_0x2f0a2f['getIt'+'em'](_0x30c635['gXCfS'])||'{}'));})),_0x121087(_0x4927b6['XfnGB'],null,_0x293f25(_0x532c70[_0x5678d9(0x50b)],_0x5a7e0e=>{_0x532c70['ksCps']=_0x5a7e0e,_0x28a7cd();}))]),_0x4927b6[_0x5678d9(0x68d)](_0xc95841,'Cross'+_0x5678d9(0x572),_0x5678d9(0x51e)+'m\x20cen'+_0x5678d9(0x278)+_0x5678d9(0x25b)+'air.',_0x532c70[_0x5678d9(0x3f9)+_0x5678d9(0x572)],_0x4086aa=>{var _0x50535e=_0x5678d9;_0x532c70[_0x50535e(0x3f9)+_0x50535e(0x572)]=_0x4086aa,_0x30c635[_0x50535e(0x42c)](_0x28a7cd);},[_0x121087(_0x5678d9(0x4a7),null,_0x54ab5e(_0x532c70[_0x5678d9(0x491)+'e'],0x37c+0x1a8f+-0x1e0b+0.5,-0x17*-0x16e+0x157f+-0x365f*0x1+0.5,0x2*-0x88e+-0x15b5+-0x20b*-0x13+0.1,_0x314ac4=>{var _0x3080e5=_0x5678d9;_0x532c70['chSiz'+'e']=_0x314ac4,_0x4927b6[_0x3080e5(0x4c4)](_0x28a7cd);})),_0x121087(_0x5678d9(0x120),null,_0x5a54c3(_0x532c70[_0x5678d9(0x3ba)+'or'],_0x5168f9=>{var _0x11892c=_0x5678d9;_0x532c70[_0x11892c(0x3ba)+'or']=_0x5168f9,_0x30c635[_0x11892c(0x1e5)](_0x28a7cd);}))]),_0xc95841(_0x5678d9(0x62b)+'ers',_0x5678d9(0x2d4)+'verla'+'y.',_0x532c70[_0x5678d9(0x30c)],null,[_0x121087(_0x4927b6[_0x5678d9(0x573)],null,_0x293f25(_0x532c70[_0x5678d9(0x30c)],_0x484124=>{_0x532c70['fps']=_0x484124,_0x28a7cd();})),_0x501756('No\x20en'+_0x5678d9(0x191)+_0x5678d9(0x2c1)+_0x5678d9(0x357)+_0x5678d9(0x583)+_0x5678d9(0x331)+_0x5678d9(0x5eb)+_0x5678d9(0x2c4)+_0x5678d9(0x14b)+'ePlay'+'ers\x20t'+_0x5678d9(0x62e)+_0x5678d9(0x44e)+'k\x20on.')])];if(_0x4ab3fd===_0x5678d9(0x20f))return[_0xc95841(_0x4927b6['ADmgK'],_0x5678d9(0x324)+_0x5678d9(0x327)+_0x5678d9(0x245)+_0x5678d9(0x57a)+_0x5678d9(0x488)+'ots.',_0x532c70[_0x5678d9(0x199)+'ck'],_0x2b44ce=>{var _0x3b8aac=_0x5678d9;_0x532c70[_0x3b8aac(0x199)+'ck']=_0x2b44ce,_0x28a7cd();},[_0x4927b6[_0x5678d9(0x40f)](_0x501756,_0x5678d9(0x1ae)+_0x5678d9(0x1df)+'ct\x20on'+'\x20relo'+_0x5678d9(0x23d)+'en\x20to'+_0x5678d9(0x4f8)+'.')])];return[_0xc95841(_0x4927b6[_0x5678d9(0x419)],_0x5678d9(0x343)+'\x20UWMK'+_0x5678d9(0x235)+_0x5678d9(0x182)+_0x5678d9(0x306)+_0x5678d9(0x4e8)+_0x5678d9(0x47f)+_0x5678d9(0x147)+_0x5678d9(0x229)+_0x5678d9(0x2fa)+'atche'+_0x5678d9(0x5e6)+_0x5678d9(0x5bd)+_0x5678d9(0x249),_0x532c70[_0x5678d9(0x5e1)+'ode'],_0x38d0f8=>{var _0x409027=_0x5678d9;_0x532c70[_0x409027(0x5e1)+'ode']=_0x38d0f8,_0x4927b6[_0x409027(0x4c4)](_0x28a7cd),location['reloa'+'d']();},[_0x501756(_0x5678d9(0x6a4)+'es\x20on'+_0x5678d9(0x14e)+'ad.\x20I'+_0x5678d9(0x1e8)+'ches\x20'+_0x5678d9(0x49f)+_0x5678d9(0x18b)+_0x5678d9(0x57e)+_0x5678d9(0x675)+_0x5678d9(0x126)+_0x5678d9(0x1ee)+_0x5678d9(0x276)+_0x5678d9(0x35b)+_0x5678d9(0x1e4)+_0x5678d9(0x18a)+_0x5678d9(0x54f)+_0x5678d9(0x124)+'hooks'+_0x5678d9(0x24d)+'ied\x20c'+'ount.')]),_0xc95841('Hook\x20'+_0x5678d9(0x4bd)+_0x5678d9(0x13f)+_0x5678d9(0x119),_0x4927b6[_0x5678d9(0x416)],_0x532c70['hookG'+'od']||_0x532c70[_0x5678d9(0x2a5)+_0x5678d9(0x42d)]||_0x532c70[_0x5678d9(0x4c8)+'oReco'+'il']||_0x532c70[_0x5678d9(0x36f)+_0x5678d9(0x2d1)+'e'],_0x200e04=>{var _0x472934=_0x5678d9;_0x532c70[_0x472934(0x2a5)+'od']=_0x200e04,_0x532c70[_0x472934(0x2a5)+_0x472934(0x42d)]=_0x200e04,_0x532c70[_0x472934(0x4c8)+_0x472934(0x4e0)+'il']=_0x200e04,_0x532c70['hookC'+'aptur'+'e']=_0x200e04,_0x28a7cd(),location['reloa'+'d']();},[_0x4927b6[_0x5678d9(0x41a)](_0x501756,_0x4927b6[_0x5678d9(0x5c7)]),_0x4927b6[_0x5678d9(0x48a)](_0x121087,'god\x20('+_0x5678d9(0x543)+'th.In'+'itiat'+'eTake'+_0x5678d9(0x473)+'h)',null,_0x293f25(_0x532c70['hookG'+'od'],_0x108dd4=>{var _0x2ecae9=_0x5678d9;if('VBVyQ'!=='PBgPG')_0x532c70[_0x2ecae9(0x2a5)+'od']=_0x108dd4,_0x4927b6[_0x2ecae9(0x40e)](_0x28a7cd);else{var _0x3b3c8e=_0x1fd795[_0x2ecae9(0x5a3)+'eElem'+_0x2ecae9(0x57c)]('optio'+'n');_0x3b3c8e[_0x2ecae9(0x2f7)]=_0x543bc0,_0x3b3c8e['textC'+'onten'+'t']=_0x23d130,_0x251f45[_0x2ecae9(0x57b)+_0x2ecae9(0x64f)+'d'](_0x3b3c8e);}})),_0x121087(_0x4927b6['jDEYP'],null,_0x293f25(_0x532c70['hookG'+_0x5678d9(0x42d)],_0x20b269=>{var _0x36b33d=_0x5678d9;_0x30c635[_0x36b33d(0x656)](_0x30c635[_0x36b33d(0x303)],_0x36b33d(0x627))?(_0x532c70[_0x36b33d(0x2a5)+'odDie']=_0x20b269,_0x28a7cd()):(_0xca58b1(_0x232960,-0x266c*-0x1+0x1f5*0xb+0x35*-0x11f,_0x30c635['DxUHt'],-0x191c+0x1*-0x1c30+0x12*0x2f6),_0x30c635[_0x36b33d(0x156)](_0x983caf,_0x20265b,-0x18d9+0x1902+0x3*0x15,'f32',0x19f0+0x1324+-0x2d13));})),_0x121087(_0x5678d9(0x15f)+'oil\x20('+'Recoi'+_0x5678d9(0x13e)+'on.Ti'+_0x5678d9(0xec),null,_0x293f25(_0x532c70['hookN'+_0x5678d9(0x4e0)+'il'],_0xf1c0fa=>{var _0x1bdf25=_0x5678d9;_0x532c70[_0x1bdf25(0x4c8)+'oReco'+'il']=_0xf1c0fa,_0x28a7cd();})),_0x4927b6[_0x5678d9(0x48a)](_0x121087,_0x4927b6[_0x5678d9(0x14a)],_0x4927b6[_0x5678d9(0x2e6)],_0x4927b6['Jkruo'](_0x293f25,_0x532c70[_0x5678d9(0x36f)+_0x5678d9(0x2d1)+'e'],_0x1fcd93=>{var _0x3fd3f2=_0x5678d9;_0x532c70[_0x3fd3f2(0x36f)+'aptur'+'e']=_0x1fcd93,_0x28a7cd();}))]),_0xc95841('ACTk\x20'+_0x5678d9(0x2b4)+'r',_0x5678d9(0x4bb)+_0x5678d9(0x4af)+_0x5678d9(0x430)+'age\x20d'+_0x5678d9(0xea)+'ors\x20a'+'t\x20sta'+'rtup\x20'+_0x5678d9(0x263)+'topDe'+'tecti'+_0x5678d9(0x37b)+_0x5678d9(0x5f3)+'\x20ON.',_0x532c70[_0x5678d9(0x60c)+_0x5678d9(0x36b)],_0x2064ff=>{var _0x5ab772=_0x5678d9,_0x1c63f2={'OySOo':_0x4927b6[_0x5ab772(0x2eb)]};'lKMnh'!==_0x4927b6['rgDLX']?(_0x532c70['actkK'+_0x5ab772(0x36b)]=_0x2064ff,_0x4927b6[_0x5ab772(0x3ee)](_0x28a7cd)):_0x2dc7ab[_0x5ab772(0x3e7)+'em'](_0x1c63f2[_0x5ab772(0x56e)],_0x3b2497[_0x5ab772(0x1a3)+_0x5ab772(0x476)](_0x1ee955));},[_0x501756(_0x4927b6[_0x5678d9(0x48c)],!![])]),_0xc95841(_0x5678d9(0x230)+'r',_0x5678d9(0x24f)+_0x5678d9(0x5a8)+_0x5678d9(0x140)+_0x5678d9(0x3a0)+'isibl'+'e\x20tra'+_0x5678d9(0x25f),!![],null,[_0x121087(_0x4927b6[_0x5678d9(0x59e)],null,_0x2e61dc('Reset',()=>{var _0x4171dc=_0x5678d9,_0x1a51eb={'upNLF':function(_0x215471){return _0x215471();}};'ewZYx'!==_0x4171dc(0x313)?(_0x12256d[_0x4171dc(0xfa)+'ead']=_0x2b1571,_0x1a51eb[_0x4171dc(0x36a)](_0x5912fd)):(_0x532c70={..._0x41a9b5},_0x28a7cd(),location[_0x4171dc(0x3a1)+'d']());}))])];}var _0x42ef5c=null;function _0x26beae(_0x63d83e){var _0x495aca=_0x57ddb9;_0x42525a=_0x63d83e;if(!_0x42ef5c){var _0x163e31=document[_0x495aca(0x5a3)+'eElem'+'ent'](_0x495aca(0x340));_0x163e31[_0x495aca(0x4fb)+'onten'+'t']=_0xfcaad8,_0x597d54[_0x495aca(0x57b)+_0x495aca(0x64f)+'d'](_0x163e31),_0x42ef5c=_0x1ec4ad(),_0x597d54[_0x495aca(0x57b)+'dChil'+'d'](_0x42ef5c),requestAnimationFrame(()=>_0x42ef5c[_0x495aca(0x4d0)+_0x495aca(0x2ef)]['add'](_0x495aca(0x298)));}_0x42ef5c['class'+_0x495aca(0x2ef)][_0x495aca(0x3bf)+'e'](_0x495aca(0x298),_0x63d83e);}function _0x11708c(){var _0x4ff22a=_0x57ddb9,_0x16ce98={'IQIuu':function(_0x3512b9){return _0x3512b9();}};_0x4927b6[_0x4ff22a(0x58f)]==='ggdns'?_0x4927b6['mbkRu'](_0x26beae,!_0x42525a):(_0x593ed4[_0x4ff22a(0xee)]=_0x13134e,_0x16ce98['IQIuu'](_0x5677b1));}function _0x1ec4ad(){var _0x46c4c5=_0x57ddb9,_0x3fc805=document[_0x46c4c5(0x5a3)+'eElem'+_0x46c4c5(0x57c)]('div');_0x3fc805[_0x46c4c5(0x4d0)+'Name']=_0x46c4c5(0x524)+'nel';var _0xffc356=document[_0x46c4c5(0x5a3)+'eElem'+_0x46c4c5(0x57c)](_0x1bbdac[_0x46c4c5(0x62c)]);_0xffc356[_0x46c4c5(0x4d0)+_0x46c4c5(0x61a)]=_0x1bbdac[_0x46c4c5(0x611)];var _0x258aea=document['creat'+_0x46c4c5(0x253)+'ent'](_0x46c4c5(0x5d5));_0x258aea[_0x46c4c5(0x4d0)+_0x46c4c5(0x61a)]=_0x1bbdac[_0x46c4c5(0x5f5)],_0x258aea['inner'+'HTML']=_0x1bbdac[_0x46c4c5(0x31c)],_0xffc356[_0x46c4c5(0x57b)+_0x46c4c5(0x64f)+'d'](_0x258aea);var _0xb3130f=document['creat'+_0x46c4c5(0x253)+'ent']('div');_0xb3130f['class'+_0x46c4c5(0x61a)]=_0x46c4c5(0x321)+'in';var _0x1cedd0=document[_0x46c4c5(0x5a3)+'eElem'+_0x46c4c5(0x57c)](_0x1bbdac[_0x46c4c5(0x198)]);_0x1cedd0[_0x46c4c5(0x4d0)+_0x46c4c5(0x61a)]=_0x46c4c5(0x351)+'p';var _0x5e98d8=document['creat'+'eElem'+'ent'](_0x1bbdac[_0x46c4c5(0x651)]);_0x5e98d8['class'+'Name']=_0x1bbdac['gUcoQ'];var _0x38a4db=document['creat'+'eElem'+_0x46c4c5(0x57c)]('h2');_0x38a4db[_0x46c4c5(0x4d0)+'Name']='mn-h',_0x38a4db['textC'+'onten'+'t']=_0x1bbdac['XKssw'];var _0x2c657b=document[_0x46c4c5(0x5a3)+_0x46c4c5(0x253)+_0x46c4c5(0x57c)]('small');_0x2c657b['class'+_0x46c4c5(0x61a)]=_0x46c4c5(0x136)+'b',_0x2c657b['textC'+_0x46c4c5(0x2b7)+'t']=_0x46c4c5(0x1f1)+'trike'+_0x46c4c5(0x4e9)+_0x46c4c5(0x637),_0x5e98d8['appen'+'d'](_0x38a4db,_0x2c657b);var _0x1b0963=document[_0x46c4c5(0x5a3)+_0x46c4c5(0x253)+'ent'](_0x46c4c5(0x1f5)+'n');_0x1b0963['type']=_0x46c4c5(0x1f5)+'n',_0x1b0963['class'+_0x46c4c5(0x61a)]=_0x1bbdac['qmxZX'],_0x1b0963[_0x46c4c5(0x379)]=_0x1bbdac[_0x46c4c5(0x16b)],_0x1b0963[_0x46c4c5(0x48b)+'HTML']=_0x46c4c5(0x5bc)+_0x46c4c5(0x4dc)+'ox=\x220'+_0x46c4c5(0x395)+'\x2024\x22>'+_0x46c4c5(0x2cf)+_0x46c4c5(0x545)+_0x46c4c5(0x571)+_0x46c4c5(0x1e1)+'18\x206\x20'+_0x46c4c5(0x388)+_0x46c4c5(0x53a)+_0x46c4c5(0x399),_0x1b0963[_0x46c4c5(0x569)+'ck']=()=>_0x26beae(![]),_0x1cedd0[_0x46c4c5(0x57b)+'d'](_0x5e98d8,_0x1b0963);var _0x403c85=document['creat'+'eElem'+_0x46c4c5(0x57c)](_0x46c4c5(0x5d5));_0x403c85['class'+'Name']=_0x1bbdac[_0x46c4c5(0x138)],_0xb3130f[_0x46c4c5(0x57b)+'d'](_0x1cedd0,_0x403c85),_0x3fc805[_0x46c4c5(0x57b)+'d'](_0xffc356,_0xb3130f);var _0x5e648c=new Map();for(var _0x521579 of _0x2134f4){var _0x584d96=document['creat'+'eElem'+'ent'](_0x1bbdac[_0x46c4c5(0x5da)]);_0x584d96['type']=_0x1bbdac[_0x46c4c5(0x5da)],_0x584d96[_0x46c4c5(0x4d0)+'Name']='mn-ta'+'b',_0x584d96[_0x46c4c5(0x379)]=_0x521579['label'],_0x584d96[_0x46c4c5(0x48b)+_0x46c4c5(0x55f)]=_0x1bbdac[_0x46c4c5(0x3c9)](_0x46c4c5(0x232)+'l>'+_0x521579['label'],_0x1bbdac[_0x46c4c5(0x28b)]),_0x584d96['oncli'+'ck']=(_0x5cfddd=>()=>_0x15e024(_0x5cfddd))(_0x521579['id']),_0x5e648c[_0x46c4c5(0x5ed)](_0x521579['id'],_0x584d96),_0xffc356[_0x46c4c5(0x57b)+'dChil'+'d'](_0x584d96);}function _0x15e024(_0x21f094){var _0x2f3e06=_0x46c4c5;_0x433b07[_0x2f3e06(0x404)]=_0x21f094,_0x5058d6();var _0x2e7702=_0x2134f4['find'](_0x35e5c1=>_0x35e5c1['id']===_0x21f094)||_0x2134f4[0x1*0x1a75+-0x2*0x751+-0x1*0xbd3];_0x38a4db['textC'+_0x2f3e06(0x2b7)+'t']=_0x4927b6[_0x2f3e06(0x1b1)](_0x4927b6[_0x2f3e06(0x4bf)],_0x2e7702[_0x2f3e06(0x63a)]);for(var [_0x3c6277,_0x521a8d]of _0x5e648c)_0x521a8d[_0x2f3e06(0x4d0)+_0x2f3e06(0x2ef)][_0x2f3e06(0x3bf)+'e'](_0x4927b6[_0x2f3e06(0x215)],_0x3c6277===_0x21f094);_0x403c85[_0x2f3e06(0x45f)+'ceChi'+_0x2f3e06(0x40c)](..._0x4927b6[_0x2f3e06(0x40f)](_0x395ae2,_0x21f094));}return _0x15e024(_0x433b07['cat']||_0x1bbdac[_0x46c4c5(0x558)]),setInterval(()=>{var _0x9db7a0=_0x46c4c5;if(!_0x42525a)return;var _0x1bb229=_0x403c85[_0x9db7a0(0x499)+_0x9db7a0(0x178)];for(var _0x45f4d6=0x25b*0xd+-0x7*0x112+0x1721*-0x1;_0x45f4d6<_0x1bb229[_0x9db7a0(0x5b5)+'h'];_0x45f4d6++){var _0x79963f=_0x1bb229[_0x45f4d6]['query'+_0x9db7a0(0x29c)+_0x9db7a0(0x698)](_0x9db7a0(0xf9)+'desc');_0x79963f&&(_0x4927b6[_0x9db7a0(0x48d)](_0x79963f['textC'+'onten'+'t']['index'+'Of'](_0x9db7a0(0x542)),-0x15b0+-0xb04+0x20b4)||_0x79963f[_0x9db7a0(0x4fb)+_0x9db7a0(0x2b7)+'t']['index'+'Of'](_0x4927b6[_0x9db7a0(0x426)])===-0xc92+-0x14c*-0x2+0x9fa)&&(_0x4927b6[_0x9db7a0(0x595)](_0x9db7a0(0x22a),_0x9db7a0(0x22a))?_0x79963f['textC'+_0x9db7a0(0x2b7)+'t']=_0x535b13[_0x9db7a0(0x5e1)+_0x9db7a0(0x2f3)]?_0x9db7a0(0x2ee)+'MODE\x20'+'-\x20ove'+_0x9db7a0(0x262)+_0x9db7a0(0x137)+'\x20no\x20h'+_0x9db7a0(0x458)+_0x9db7a0(0x490)+'ad\x20to'+'\x20exit'+')':_0x535b13['uwmk']?_0x4927b6[_0x9db7a0(0x33c)](_0x4927b6[_0x9db7a0(0x204)](_0x4927b6['EVHtM'],_0x535b13[_0x9db7a0(0x47f)+_0x9db7a0(0x132)]?_0x4927b6[_0x9db7a0(0x51c)](_0x4927b6[_0x9db7a0(0xed)](_0x4927b6['ZNaEk'](_0x535b13[_0x9db7a0(0x47f)+'Ok'],'/'),_0x535b13['hooks'+_0x9db7a0(0x132)]),_0x9db7a0(0x23b)+'s'):'0\x20hoo'+'ks\x20ar'+_0x9db7a0(0x16d)+_0x9db7a0(0x373)+_0x9db7a0(0x553))+(_0x9db7a0(0x470)+'me\x20')+(_0x535b13['gameL'+_0x9db7a0(0x353)]?_0x4927b6[_0x9db7a0(0x3fd)]:_0x4927b6[_0x9db7a0(0x1e7)])+_0x4927b6[_0x9db7a0(0x302)],_0x535b13[_0x9db7a0(0x3cb)+'ers']?_0x4927b6['BOSck']:'none')+(_0x9db7a0(0x50a)+_0x9db7a0(0x396)+'t\x20')+(_0x535b13['movem'+'ents']?'held':'none')+(_0x535b13[_0x9db7a0(0x3d8)+_0x9db7a0(0x684)]?_0x4927b6[_0x9db7a0(0x1a8)](_0x9db7a0(0x341)+_0x9db7a0(0x32c),_0x535b13[_0x9db7a0(0x3d8)+_0x9db7a0(0x684)]):''):_0x9db7a0(0x67a)+_0x9db7a0(0x2a1)+'NG\x20-\x20'+_0x9db7a0(0x4d2)+'ay\x20on'+_0x9db7a0(0x66b)+'einst'+_0x9db7a0(0x3e1)+_0x9db7a0(0x1f6)+_0x9db7a0(0x3f7)+_0x9db7a0(0x316):(_0x435f54[_0x9db7a0(0x406)+'ropag'+_0x9db7a0(0x4ac)](),_0x4269ae()));}},0x266f+0xb3c+-0x927*0x5),_0x3fc805;}var _0xfcaad8='\x0a\x20\x20\x20\x20'+_0x57ddb9(0x3ae)+_0x57ddb9(0x548)+_0x57ddb9(0x530)+'itial'+_0x57ddb9(0x4be)+_0x57ddb9(0x408)+'{\x20box'+_0x57ddb9(0x4f9)+_0x57ddb9(0x3ea)+_0x57ddb9(0x576)+_0x57ddb9(0x13d)+'\x20marg'+'in:\x200'+_0x57ddb9(0x219)+_0x57ddb9(0x60b)+_0x57ddb9(0x101)+_0x57ddb9(0x1cc)+_0x57ddb9(0x464)+_0x57ddb9(0x318)+_0x57ddb9(0x489)+_0x57ddb9(0x289)+'em-ui'+',\x20san'+'s-ser'+_0x57ddb9(0x69a)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel\x20'+'{\x20pos'+_0x57ddb9(0x59d)+_0x57ddb9(0x1aa)+_0x57ddb9(0x18c)+';\x20rig'+_0x57ddb9(0x69f)+_0x57ddb9(0x143)+_0x57ddb9(0x1b8)+'m:\x2024'+'px;\x20w'+_0x57ddb9(0x2df)+_0x57ddb9(0x4cc)+'620px'+',\x20cal'+_0x57ddb9(0x5a1)+_0x57ddb9(0x479)+'48px)'+');\x20ma'+_0x57ddb9(0x2f6)+'ght:\x20'+'min(4'+_0x57ddb9(0x2a3)+_0x57ddb9(0x164)+_0x57ddb9(0x43b)+'h\x20-\x204'+_0x57ddb9(0x613)+_0x57ddb9(0x2b9)+_0x57ddb9(0x14c)+_0x57ddb9(0x5b3)+':\x20fle'+_0x57ddb9(0x692)+_0x57ddb9(0x188)+_0x57ddb9(0x52e)+'addin'+'g:\x2010'+_0x57ddb9(0x12e)+'order'+'-radi'+'us:\x202'+'2px;\x20'+_0x57ddb9(0x677)+'er-ev'+'ents:'+'\x20auto'+';\x0a\x20\x20\x20'+_0x57ddb9(0x393)+_0x57ddb9(0xe7)+_0x57ddb9(0x46e)+'rgba('+_0x57ddb9(0x4ca)+_0x57ddb9(0x4ee)+_0x57ddb9(0x22f)+_0x57ddb9(0x3f5)+'rop-f'+_0x57ddb9(0x27e)+_0x57ddb9(0x5a7)+_0x57ddb9(0x2e5)+'x)\x20sa'+_0x57ddb9(0x1bf)+'e(150'+_0x57ddb9(0x689)+_0x57ddb9(0x5e7)+_0x57ddb9(0x433)+_0x57ddb9(0x35e)+_0x57ddb9(0x2b0)+'er:\x20b'+'lur(2'+'2px)\x20'+_0x57ddb9(0x525)+'ate(1'+'50%);'+_0x57ddb9(0x5e3)+_0x57ddb9(0x5bf)+'-shad'+'ow:\x200'+_0x57ddb9(0x10a)+_0x57ddb9(0x330)+_0x57ddb9(0x377)+'55,25'+_0x57ddb9(0x252)+_0x57ddb9(0x325)+_0x57ddb9(0x507)+'et\x200\x20'+'1px\x200'+_0x57ddb9(0x505)+_0x57ddb9(0x4b5)+_0x57ddb9(0x40d)+_0x57ddb9(0x478)+'5),\x200'+_0x57ddb9(0x64a)+_0x57ddb9(0x4fc)+_0x57ddb9(0x505)+_0x57ddb9(0x3ef)+'0,.55'+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x57ddb9(0x26b)+_0x57ddb9(0x5ce)+_0x57ddb9(0x423)+_0x57ddb9(0x225)+_0x57ddb9(0x3d2)+_0x57ddb9(0x113)+_0x57ddb9(0x2d5)+_0x57ddb9(0x10d)+'point'+'er-ev'+'ents:'+_0x57ddb9(0x523)+';\x20tra'+_0x57ddb9(0x369)+'on:\x20o'+'pacit'+'y\x20.35'+_0x57ddb9(0x117)+'e,\x20tr'+_0x57ddb9(0xfb)+_0x57ddb9(0x106)+_0x57ddb9(0x619)+_0x57ddb9(0x47c)+_0x57ddb9(0x1c1)+_0x57ddb9(0x68a)+_0x57ddb9(0x4c0)+',1);\x0a'+_0x57ddb9(0x1fa)+'\x20colo'+_0x57ddb9(0x56c)+_0x57ddb9(0x665)+';\x20fon'+'t-siz'+_0x57ddb9(0x4c1)+_0x57ddb9(0x39e)+_0x57ddb9(0x5e3)+'.mn-p'+_0x57ddb9(0x4ef)+_0x57ddb9(0x298)+'\x20{\x20op'+_0x57ddb9(0x345)+':\x201;\x20'+_0x57ddb9(0x67c)+_0x57ddb9(0x299)+_0x57ddb9(0x523)+_0x57ddb9(0x581)+_0x57ddb9(0x67d)+_0x57ddb9(0x173)+_0x57ddb9(0x37c)+_0x57ddb9(0x63b)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x57ddb9(0x4ed)+_0x57ddb9(0x255)+'lay:\x20'+_0x57ddb9(0x654)+_0x57ddb9(0x631)+_0x57ddb9(0x59f)+_0x57ddb9(0x52a)+':\x20col'+'umn;\x20'+'align'+_0x57ddb9(0x134)+_0x57ddb9(0x3f3)+_0x57ddb9(0x45b)+'\x20gap:'+_0x57ddb9(0x290)+'\x20widt'+_0x57ddb9(0x186)+'px;\x20f'+'lex:\x20'+'none;'+_0x57ddb9(0x30b)+_0x57ddb9(0x661)+'12px\x20'+('0;\x20bo'+_0x57ddb9(0x4fd)+'radiu'+_0x57ddb9(0x240)+_0x57ddb9(0x4f1)+_0x57ddb9(0x1fa)+_0x57ddb9(0x5be)+_0x57ddb9(0x12d)+_0x57ddb9(0x65f)+_0x57ddb9(0x162)+',255,'+'255,.'+_0x57ddb9(0x3e3)+'\x20box-'+_0x57ddb9(0x417)+'w:\x20in'+_0x57ddb9(0x688)+_0x57ddb9(0x10a)+_0x57ddb9(0x330)+_0x57ddb9(0x377)+_0x57ddb9(0x5fc)+'5,255'+_0x57ddb9(0x39a)+_0x57ddb9(0x4be)+'\x20\x20\x20.m'+_0x57ddb9(0x64b)+_0x57ddb9(0x534)+'ispla'+_0x57ddb9(0x3db)+_0x57ddb9(0x348)+_0x57ddb9(0x211)+'items'+_0x57ddb9(0x4eb)+'ter;\x20'+'width'+_0x57ddb9(0x1b4)+'x;\x20he'+'ight:'+_0x57ddb9(0x56d)+_0x57ddb9(0x4be)+_0x57ddb9(0x50c)+'n-log'+'o-svg'+'\x20{\x20wi'+'dth:\x20'+_0x57ddb9(0x1a4)+_0x57ddb9(0x629)+'ht:\x202'+_0x57ddb9(0x649)+_0x57ddb9(0x5b8)+_0x57ddb9(0x257)+'visib'+'le;\x20f'+_0x57ddb9(0x27e)+':\x20dro'+_0x57ddb9(0x1fd)+_0x57ddb9(0x465)+_0x57ddb9(0x599)+_0x57ddb9(0x533)+_0x57ddb9(0x162)+_0x57ddb9(0x15e)+_0x57ddb9(0x142)+'8));\x20'+_0x57ddb9(0x332)+'\x20.mn-'+_0x57ddb9(0x512)+'\x20disp'+_0x57ddb9(0x69c)+_0x57ddb9(0x654)+'\x20alig'+'n-ite'+_0x57ddb9(0x1c9)+'enter'+_0x57ddb9(0x5d6)+'tify-'+_0x57ddb9(0x1ba)+_0x57ddb9(0x114)+_0x57ddb9(0x676)+';\x20wid'+_0x57ddb9(0x131)+_0x57ddb9(0x608)+_0x57ddb9(0x56f)+'t:\x2034'+'px;\x20b'+_0x57ddb9(0x576)+_0x57ddb9(0x58b)+_0x57ddb9(0x3b1)+_0x57ddb9(0x10b)+'ius:\x20'+'10px;'+_0x57ddb9(0x5e3)+'\x20\x20bac'+'kgrou'+_0x57ddb9(0x187)+'ransp'+_0x57ddb9(0x4b1)+';\x20col'+_0x57ddb9(0x664)+_0x57ddb9(0x377)+_0x57ddb9(0x2e4)+'8,242'+_0x57ddb9(0x24c)+_0x57ddb9(0x364)+_0x57ddb9(0x699)+_0x57ddb9(0x55b)+_0x57ddb9(0x108)+_0x57ddb9(0x4aa)+_0x57ddb9(0x259)+'0px;\x20'+_0x57ddb9(0x3b0)+_0x57ddb9(0x492)+'t:\x2070'+_0x57ddb9(0x632)+_0x57ddb9(0x448)+_0x57ddb9(0xfd)+_0x57ddb9(0x555)+_0x57ddb9(0x4a5)+_0x57ddb9(0x157)+_0x57ddb9(0x65f)+'a(246'+_0x57ddb9(0x44f)+_0x57ddb9(0x657)+_0x57ddb9(0x32a)+_0x57ddb9(0x5e3)+_0x57ddb9(0x513)+'ab.ac'+_0x57ddb9(0x129)+_0x57ddb9(0x150)+_0x57ddb9(0x1f4)+_0x57ddb9(0x35d)+_0x57ddb9(0x193)+_0x57ddb9(0xe7)+_0x57ddb9(0x46e)+'rgba('+_0x57ddb9(0x506)+'07,15'+_0x57ddb9(0x43a)+_0x57ddb9(0x4be)+_0x57ddb9(0x50c)+'n-mai'+_0x57ddb9(0x412)+'lex:\x20'+_0x57ddb9(0x3dc)+'n-wid'+_0x57ddb9(0x620)+_0x57ddb9(0x281)+_0x57ddb9(0x500)+_0x57ddb9(0x631)+_0x57ddb9(0xe5)+'x-dir'+_0x57ddb9(0x4ad)+'n:\x20co'+'lumn;'+_0x57ddb9(0x366)+'\x20\x20.mn'+'-top\x20'+_0x57ddb9(0x52c)+'play:'+'\x20flex'+';\x20ali'+_0x57ddb9(0xf3)+_0x57ddb9(0x477)+_0x57ddb9(0x46c)+_0x57ddb9(0x65d)+_0x57ddb9(0x441)+_0x57ddb9(0x52e)+_0x57ddb9(0x2bd)+_0x57ddb9(0x29e)+_0x57ddb9(0x5c9)+'\x2012px'+';\x20use'+_0x57ddb9(0x4b4)+'ect:\x20'+'none;'+_0x57ddb9(0x366)+_0x57ddb9(0x5f1)+'-titl'+_0x57ddb9(0x159)+_0x57ddb9(0x2be)+_0x57ddb9(0x16e)+_0x57ddb9(0x3cf)+_0x57ddb9(0x305)+_0x57ddb9(0x632)+_0x57ddb9(0x448)+_0x57ddb9(0x561)+_0x57ddb9(0x3bd)+_0x57ddb9(0x4d8)+_0x57ddb9(0x431)+_0x57ddb9(0x2fc)+_0x57ddb9(0x4c9)+_0x57ddb9(0x54e)+_0x57ddb9(0x203)+';\x20}\x0a\x20'+_0x57ddb9(0x50c)+'n-sub'+'\x20{\x20fo'+_0x57ddb9(0x4aa)+_0x57ddb9(0x259)+_0x57ddb9(0x104)+_0x57ddb9(0x300))+(_0x57ddb9(0x27f)+'4;\x20}\x0a'+_0x57ddb9(0x448)+_0x57ddb9(0x103)+_0x57ddb9(0x66e)+_0x57ddb9(0x255)+'lay:\x20'+_0x57ddb9(0x153)+'\x20plac'+'e-ite'+'ms:\x20c'+'enter'+';\x20wid'+'th:\x202'+'8px;\x20'+'heigh'+_0x57ddb9(0x633)+'px;\x20b'+'order'+_0x57ddb9(0x58b)+'borde'+'r-rad'+_0x57ddb9(0x650)+_0x57ddb9(0x291)+_0x57ddb9(0x5be)+_0x57ddb9(0x12d)+_0x57ddb9(0x3d2)+_0x57ddb9(0x244)+'ent;\x20'+_0x57ddb9(0x157)+':\x20inh'+'erit;'+_0x57ddb9(0xf6)+_0x57ddb9(0x41f)+'.45;\x20'+_0x57ddb9(0x36c)+'r:\x20po'+_0x57ddb9(0x453)+_0x57ddb9(0x4be)+_0x57ddb9(0x50c)+'n-clo'+'se:ho'+_0x57ddb9(0x496)+_0x57ddb9(0xf6)+_0x57ddb9(0x41f)+_0x57ddb9(0x5d7)+'ckgro'+'und:\x20'+_0x57ddb9(0x13c)+_0x57ddb9(0x40d)+_0x57ddb9(0x5fc)+_0x57ddb9(0x272)+_0x57ddb9(0x2e2)+'\x20\x20\x20\x20.'+_0x57ddb9(0x103)+_0x57ddb9(0x397)+_0x57ddb9(0x65b)+'width'+_0x57ddb9(0x467)+'x;\x20he'+_0x57ddb9(0x438)+_0x57ddb9(0x63d)+_0x57ddb9(0x5bb)+_0x57ddb9(0x5e9)+_0x57ddb9(0x1b6)+_0x57ddb9(0x1d2)+_0x57ddb9(0x19c)+_0x57ddb9(0x125)+_0x57ddb9(0x44a)+'\x20stro'+_0x57ddb9(0x367)+'dth:\x20'+_0x57ddb9(0x587)+_0x57ddb9(0xe4)+_0x57ddb9(0x189)+_0x57ddb9(0x68f)+_0x57ddb9(0x541)+'\x20}\x0a\x20\x20'+_0x57ddb9(0x5f1)+_0x57ddb9(0x2fd)+_0x57ddb9(0x62d)+'ex:\x201'+_0x57ddb9(0x3ac)+_0x57ddb9(0x567)+'ht:\x200'+_0x57ddb9(0xf0)+_0x57ddb9(0x205)+'-y:\x20a'+'uto;\x20'+_0x57ddb9(0x642)+'ay:\x20g'+_0x57ddb9(0x31f)+'grid-'+'templ'+_0x57ddb9(0x5b9)+'olumn'+'s:\x20re'+_0x57ddb9(0x13b)+'auto-'+_0x57ddb9(0x526)+'\x20minm'+'ax(25'+_0x57ddb9(0x374)+_0x57ddb9(0x352)+';\x20ali'+_0x57ddb9(0xf3)+_0x57ddb9(0x477)+_0x57ddb9(0x626)+_0x57ddb9(0x3e4)+_0x57ddb9(0x221)+'ntent'+_0x57ddb9(0x347)+'rt;\x20g'+'ap:\x201'+'0px;\x20'+_0x57ddb9(0x1b2)+_0x57ddb9(0x3fe)+_0x57ddb9(0x457)+'6px\x200'+_0x57ddb9(0x4be)+'\x20\x20\x20.m'+'n-col'+_0x57ddb9(0x144)+'ebkit'+_0x57ddb9(0x1eb)+_0x57ddb9(0x4ec)+_0x57ddb9(0x427)+'dth:\x20'+_0x57ddb9(0x291)+'}\x0a\x20\x20\x20'+'\x20.mn-'+'cols:'+_0x57ddb9(0x538)+'kit-s'+'croll'+_0x57ddb9(0x68e)+'humb\x20'+_0x57ddb9(0x174)+_0x57ddb9(0x128)+_0x57ddb9(0x601)+_0x57ddb9(0x377)+'55,25'+_0x57ddb9(0x252)+_0x57ddb9(0xf5)+_0x57ddb9(0x349)+_0x57ddb9(0x2b2)+_0x57ddb9(0x2c9)+_0x57ddb9(0x148)+_0x57ddb9(0x4be)+_0x57ddb9(0x2a4)+_0x57ddb9(0x615)+'d\x20{\x20b'+'order'+_0x57ddb9(0x616)+_0x57ddb9(0x697)+_0x57ddb9(0x608)+_0x57ddb9(0x5be)+_0x57ddb9(0x12d)+_0x57ddb9(0x65f)+_0x57ddb9(0x162)+_0x57ddb9(0x3fa)+_0x57ddb9(0x673)+_0x57ddb9(0x3e3)+_0x57ddb9(0x1a0)+_0x57ddb9(0x417)+_0x57ddb9(0x277)+'set\x200'+'\x200\x200\x20'+_0x57ddb9(0x330)+_0x57ddb9(0x377)+_0x57ddb9(0x5fc)+_0x57ddb9(0x252)+_0x57ddb9(0x39a)+';\x20}\x0a\x20'+_0x57ddb9(0x2a4)+_0x57ddb9(0x615)+_0x57ddb9(0x3a2)+'{\x20bac'+_0x57ddb9(0x128)+_0x57ddb9(0x601)+'gba(2'+_0x57ddb9(0x5fc)+'5,255'+_0x57ddb9(0x2cb)+_0x57ddb9(0x5c2)+'-shad'+_0x57ddb9(0x1fb)+_0x57ddb9(0x51d)+_0x57ddb9(0x3c0)+'\x201px\x20'+_0x57ddb9(0x13c)+_0x57ddb9(0x506)+_0x57ddb9(0x12a)+_0x57ddb9(0x528)+');\x20}\x0a'+_0x57ddb9(0x448)+'sk-ca'+_0x57ddb9(0x1be)+'ad\x20{\x20'+_0x57ddb9(0x642))+(_0x57ddb9(0x307)+'lex;\x20'+'align'+'-item'+'s:\x20ce'+_0x57ddb9(0x45b)+'\x20gap:'+'\x208px;'+_0x57ddb9(0x30b)+_0x57ddb9(0x661)+'11px\x20'+'12px;'+_0x57ddb9(0x366)+'\x20\x20.sk'+_0x57ddb9(0x1f0)+_0x57ddb9(0x2a0)+'e\x20{\x20f'+_0x57ddb9(0x2a8)+'1;\x20mi'+_0x57ddb9(0x5af)+_0x57ddb9(0x620)+_0x57ddb9(0x4be)+'\x20\x20\x20.s'+'k-car'+'d-tit'+_0x57ddb9(0x679)+'rong\x20'+'{\x20fon'+_0x57ddb9(0x4d8)+_0x57ddb9(0x4c1)+'px;\x20f'+_0x57ddb9(0x4c9)+'eight'+':\x20600'+_0x57ddb9(0x5a9)+'or:\x20r'+'gba(2'+'46,23'+_0x57ddb9(0x68b)+_0x57ddb9(0x424)+';\x20}\x0a\x20'+_0x57ddb9(0x2a4)+'k-car'+_0x57ddb9(0x3a2)+_0x57ddb9(0x3aa)+_0x57ddb9(0x33f)+'itle\x20'+'stron'+'g\x20{\x20c'+'olor:'+_0x57ddb9(0x5dd)+'0f5;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x57ddb9(0xfe)+_0x57ddb9(0x5f9)+_0x57ddb9(0x358)+':\x200\x201'+_0x57ddb9(0x1ff)+'0px;\x20'+_0x57ddb9(0x332)+'\x20.sk-'+_0x57ddb9(0x1cd)+'\x20{\x20fo'+_0x57ddb9(0x4aa)+'ze:\x201'+_0x57ddb9(0x104)+'opaci'+_0x57ddb9(0x27f)+'4;\x20ma'+_0x57ddb9(0x1d7)+_0x57ddb9(0x1b8)+'m:\x206p'+_0x57ddb9(0x1f8)+_0x57ddb9(0x448)+'sk-ct'+'l\x20{\x20d'+_0x57ddb9(0x468)+'y:\x20fl'+'ex;\x20a'+_0x57ddb9(0x50e)+_0x57ddb9(0x5ff)+':\x20cen'+_0x57ddb9(0x435)+_0x57ddb9(0x662)+_0x57ddb9(0x291)+_0x57ddb9(0x1b2)+_0x57ddb9(0x1e0)+_0x57ddb9(0x2c2)+'\x20font'+'-size'+':\x2011.'+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x57ddb9(0x274)+'label'+_0x57ddb9(0x62d)+'ex:\x201'+_0x57ddb9(0x5a9)+_0x57ddb9(0x664)+'gba(2'+_0x57ddb9(0x2e4)+_0x57ddb9(0x68b)+',.75)'+';\x20}\x0a\x20'+_0x57ddb9(0x2a4)+_0x57ddb9(0x2d3)+_0x57ddb9(0x472)+_0x57ddb9(0x468)+'y:\x20bl'+'ock;\x20'+'font-'+_0x57ddb9(0x217)+_0x57ddb9(0x16a)+_0x57ddb9(0x1ce)+'city:'+_0x57ddb9(0x32e)+_0x57ddb9(0x332)+_0x57ddb9(0x274)+_0x57ddb9(0x13f)+_0x57ddb9(0x2ac)+_0x57ddb9(0x146)+'on:\x20r'+_0x57ddb9(0x334)+_0x57ddb9(0x10f)+_0x57ddb9(0x2df)+_0x57ddb9(0x641)+';\x20hei'+_0x57ddb9(0x251)+'14px;'+_0x57ddb9(0x2d7)+'er:\x200'+_0x57ddb9(0x349)+'der-r'+_0x57ddb9(0x2c9)+':\x2099p'+_0x57ddb9(0x52d)+_0x57ddb9(0xe7)+_0x57ddb9(0x46e)+'rgba('+_0x57ddb9(0x40d)+'55,25'+_0x57ddb9(0x5c3)+_0x57ddb9(0x308)+'rsor:'+_0x57ddb9(0x565)+_0x57ddb9(0x435)+_0x57ddb9(0x2be)+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+_0x57ddb9(0x4f4)+'after'+_0x57ddb9(0x5f8)+_0x57ddb9(0x1ad)+':\x20\x22\x22;'+'\x20posi'+_0x57ddb9(0x180)+_0x57ddb9(0x1c8)+_0x57ddb9(0x5cd)+'\x20top:'+_0x57ddb9(0x160)+_0x57ddb9(0x273)+_0x57ddb9(0x41c)+_0x57ddb9(0x446)+'th:\x208'+'px;\x20h'+_0x57ddb9(0x54e)+_0x57ddb9(0x38d)+_0x57ddb9(0x349)+_0x57ddb9(0x2b2)+_0x57ddb9(0x2c9)+':\x2050%'+_0x57ddb9(0x1d4)+_0x57ddb9(0x128)+_0x57ddb9(0x601)+'gba(2'+'55,25'+'5,255'+_0x57ddb9(0x17f)+_0x57ddb9(0x628)+_0x57ddb9(0x369)+'on:\x20l'+_0x57ddb9(0x450)+'2s,\x20b'+_0x57ddb9(0x5b1)+_0x57ddb9(0x503)+_0x57ddb9(0x1bc)+'}\x0a\x20\x20\x20'+_0x57ddb9(0x274)+'switc'+_0x57ddb9(0x64d)+_0x57ddb9(0x3e2)+_0x57ddb9(0x206)+'\x22true'+'\x22]\x20{\x20'+_0x57ddb9(0x5be)+'round'+':\x20rgb')+('a(255'+_0x57ddb9(0x15e)+_0x57ddb9(0x142)+_0x57ddb9(0x282)+_0x57ddb9(0x332)+'\x20.sk-'+'switc'+'h[ari'+_0x57ddb9(0x3e2)+_0x57ddb9(0x206)+'\x22true'+_0x57ddb9(0x672)+'fter\x20'+'{\x20lef'+'t:\x2015'+'px;\x20b'+'ackgr'+'ound:'+_0x57ddb9(0x5e5)+_0x57ddb9(0x638)+_0x57ddb9(0x332)+'\x20.sk-'+'field'+_0x57ddb9(0x32f)+_0x57ddb9(0xe7)+_0x57ddb9(0x46e)+_0x57ddb9(0x13c)+_0x57ddb9(0x40d)+_0x57ddb9(0x5fc)+_0x57ddb9(0x65c)+_0x57ddb9(0x42a)+'order'+_0x57ddb9(0x58b)+_0x57ddb9(0x3b1)+_0x57ddb9(0x10b)+'ius:\x20'+'6px;\x20'+'color'+_0x57ddb9(0x2e9)+'eef2;'+_0x57ddb9(0x30b)+_0x57ddb9(0x661)+'6px\x209'+_0x57ddb9(0x2fc)+_0x57ddb9(0x5b4)+_0x57ddb9(0x268)+'11.5p'+_0x57ddb9(0x11a)+_0x57ddb9(0x24e)+_0x57ddb9(0x562)+_0x57ddb9(0x4a4)+'x-sha'+'dow:\x20'+'inset'+_0x57ddb9(0x10a)+'0\x201px'+'\x20rgba'+_0x57ddb9(0x4b5)+_0x57ddb9(0x40d)+'55,.0'+_0x57ddb9(0x584)+_0x57ddb9(0x5e3)+_0x57ddb9(0x242)+'ield\x20'+_0x57ddb9(0x1cb)+'n\x20{\x20b'+'ackgr'+_0x57ddb9(0x3cd)+'\x20#221'+_0x57ddb9(0x635)+'}\x0a\x20\x20\x20'+_0x57ddb9(0x274)+'range'+'\x20{\x20di'+'splay'+_0x57ddb9(0x432)+_0x57ddb9(0x184)+'ign-i'+_0x57ddb9(0x436)+'\x20cent'+_0x57ddb9(0x4c7)+'ap:\x208'+'px;\x20}'+_0x57ddb9(0x5e3)+_0x57ddb9(0x197)+_0x57ddb9(0x469)+_0x57ddb9(0x4d4)+_0x57ddb9(0x361)+_0x57ddb9(0x630)+'aranc'+_0x57ddb9(0x110)+_0x57ddb9(0x20c)+'ppear'+_0x57ddb9(0x5d9)+'\x20none'+';\x20wid'+_0x57ddb9(0x376)+'0px;\x20'+'heigh'+_0x57ddb9(0x58a)+_0x57ddb9(0x52d)+_0x57ddb9(0xe7)+'und:\x20'+_0x57ddb9(0x67c)+_0x57ddb9(0x19a)+_0x57ddb9(0x381)+_0x57ddb9(0x448)+'sk-sl'+_0x57ddb9(0x1c3)+':-web'+'kit-s'+'lider'+_0x57ddb9(0x326)+'able-'+_0x57ddb9(0x29a)+'\x20{\x20he'+'ight:'+_0x57ddb9(0x154)+_0x57ddb9(0x2d7)+'er-ra'+'dius:'+_0x57ddb9(0x154)+_0x57ddb9(0x190)+'groun'+_0x57ddb9(0x3a9)+_0x57ddb9(0x3fb)+_0x57ddb9(0x693)+'ent(#'+_0x57ddb9(0x35d)+'d,\x20#f'+_0x57ddb9(0x133)+_0x57ddb9(0x5aa)+_0x57ddb9(0x683)+'r(--p'+',\x2050%'+_0x57ddb9(0x1b5)+_0x57ddb9(0x169)+'repea'+_0x57ddb9(0x270)+_0x57ddb9(0x429)+_0x57ddb9(0x252)+_0x57ddb9(0x3fa)+_0x57ddb9(0x5d0)+_0x57ddb9(0x366)+_0x57ddb9(0x66c)+_0x57ddb9(0x439)+_0x57ddb9(0x516)+_0x57ddb9(0x5e7)+'t-sli'+'der-t'+_0x57ddb9(0x2ab)+_0x57ddb9(0x546)+_0x57ddb9(0x3d0)+_0x57ddb9(0x127)+'rance'+_0x57ddb9(0x562)+_0x57ddb9(0x652)+'dth:\x20'+_0x57ddb9(0x461)+_0x57ddb9(0x56f)+'t:\x206p'+_0x57ddb9(0x415)+_0x57ddb9(0x1d7)+_0x57ddb9(0x34f)+'-2px;'+'\x20bord'+'er-ra'+_0x57ddb9(0x4ae)+'\x2050%;'+_0x57ddb9(0x190)+'groun'+_0x57ddb9(0x455)+'f6b9d'+_0x57ddb9(0x4be)+'\x20\x20\x20.s'+'k-val'+'\x20{\x20fo'+_0x57ddb9(0x4aa)+_0x57ddb9(0x259)+_0x57ddb9(0x104)+_0x57ddb9(0x3b0)+_0x57ddb9(0x492)+_0x57ddb9(0x5c5)+_0x57ddb9(0x22d)+_0x57ddb9(0x5af)+_0x57ddb9(0x486)+_0x57ddb9(0x291)+_0x57ddb9(0x2f4)+_0x57ddb9(0x264)+':\x20rig'+'ht;\x20c'+'olor:'+_0x57ddb9(0x505)+'(246,'+_0x57ddb9(0x4a3)+'42,.8'+_0x57ddb9(0x2e2)+_0x57ddb9(0x448)+'sk-co'+_0x57ddb9(0x165))+('\x20widt'+_0x57ddb9(0x44d)+_0x57ddb9(0x61e)+'eight'+_0x57ddb9(0x243)+'x;\x20bo'+_0x57ddb9(0x622)+_0x57ddb9(0x1fe)+_0x57ddb9(0x576)+'-radi'+_0x57ddb9(0x482)+'px;\x20b'+_0x57ddb9(0x5b1)+'ound:'+_0x57ddb9(0x523)+';\x20pad'+'ding:'+'\x200;\x20c'+_0x57ddb9(0x18e)+':\x20poi'+_0x57ddb9(0x45b)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x57ddb9(0x238)+_0x57ddb9(0x241)+_0x57ddb9(0x4aa)+'ze:\x201'+'1px;\x20'+_0x57ddb9(0x157)+_0x57ddb9(0x65f)+'a(246'+_0x57ddb9(0x44f)+'242,.'+'5);\x20p'+'addin'+'g:\x202p'+'x\x200;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'note.'+'err\x20{'+'\x20colo'+_0x57ddb9(0x56c)+_0x57ddb9(0x1f2)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+_0x57ddb9(0x548)+'ign-s'+_0x57ddb9(0xff)+_0x57ddb9(0x30a)+_0x57ddb9(0x626)+';\x20bor'+_0x57ddb9(0x2dc)+_0x57ddb9(0x2ce)+'rder-'+_0x57ddb9(0x319)+_0x57ddb9(0xf7)+'x;\x20pa'+_0x57ddb9(0x358)+_0x57ddb9(0x38d)+_0x57ddb9(0x596)+_0x57ddb9(0x1d4)+_0x57ddb9(0x128)+_0x57ddb9(0x218)+'ff6b9'+_0x57ddb9(0x54b)+'lor:\x20'+_0x57ddb9(0x5cc)+'\x20font'+_0x57ddb9(0x29d)+_0x57ddb9(0x208)+_0x57ddb9(0x649)+_0x57ddb9(0x3b0)+'weigh'+'t:\x2070'+_0x57ddb9(0x504)+'rsor:'+_0x57ddb9(0x565)+'ter;\x20'+_0x57ddb9(0x332)+_0x57ddb9(0x274)+_0x57ddb9(0x2af)+_0x57ddb9(0x288)+_0x57ddb9(0x31e)+'ter:\x20'+'brigh'+_0x57ddb9(0x653)+_0x57ddb9(0x4f5)+_0x57ddb9(0x4be)+_0x57ddb9(0x586));window[_0x57ddb9(0x285)+_0x57ddb9(0x2ca)+_0x57ddb9(0x1a7)+'r'](_0x1bbdac['qJGGw'],_0x4f1d3e=>{var _0x28903b=_0x57ddb9;_0x4f1d3e['code']===_0x28903b(0x27a)+'t'&&(_0x4f1d3e[_0x28903b(0x2c6)+_0x28903b(0x27c)+'ault'](),_0x4927b6[_0x28903b(0x4c4)](_0x11708c));},!![]);var _0x5a3918=document['creat'+_0x57ddb9(0x253)+_0x57ddb9(0x57c)](_0x57ddb9(0x5d5));_0x5a3918[_0x57ddb9(0x340)][_0x57ddb9(0x1a5)+'xt']=_0x57ddb9(0x2f0)+'ion:f'+'ixed;'+_0x57ddb9(0x481)+_0x57ddb9(0x48f)+'ight:'+'12px;'+'z-ind'+_0x57ddb9(0x668)+'47483'+_0x57ddb9(0x4f6)+'ursor'+':poin'+_0x57ddb9(0x648)+_0x57ddb9(0x2df)+'26px;'+_0x57ddb9(0x56f)+'t:26p'+'x;opa'+_0x57ddb9(0x5ad)+'0.5;t'+'ransi'+_0x57ddb9(0x180)+'opaci'+_0x57ddb9(0x3b5)+'2s;po'+'inter'+_0x57ddb9(0x494)+_0x57ddb9(0x201)+_0x57ddb9(0x2e1)+_0x57ddb9(0x39b)+_0x57ddb9(0x1c7)+_0x57ddb9(0x417)+_0x57ddb9(0x3b8)+'\x204px\x20'+_0x57ddb9(0x13c)+_0x57ddb9(0x506)+'07,15'+_0x57ddb9(0x1dd)+'))',_0x5a3918[_0x57ddb9(0x48b)+'HTML']=_0x1bbdac['XZgWG'],_0x5a3918[_0x57ddb9(0x379)]='Sakur'+_0x57ddb9(0x49c)+'r',_0x5a3918[_0x57ddb9(0x592)+'seent'+'er']=()=>_0x5a3918['style']['opaci'+'ty']='1',_0x5a3918[_0x57ddb9(0x592)+_0x57ddb9(0x380)+'ve']=()=>_0x5a3918[_0x57ddb9(0x340)][_0x57ddb9(0x300)+'ty']='0.5',_0x5a3918[_0x57ddb9(0x569)+'ck']=_0x3adf1c=>{var _0x3ed6b1=_0x57ddb9;if(_0x3ed6b1(0x21b)!==_0x1bbdac['ZlfIj']){var _0x2d436d=_0x3adfe3['hookP'+'ostfi'+'x']({'typeName':_0x32a4f8,'methodName':_0x398991,'params':_0x19b4e2,'returnType':_0x3d289a},_0x2adda1);return _0x2d436d[_0x3ed6b1(0x4df)+'ed']=_0x250af2!==![],_0x513be0[_0x5d64b5]=_0x2d436d,_0x3a794d[_0x3ed6b1(0x47f)+_0x3ed6b1(0x132)]++,_0x2d436d;}else _0x3adf1c['stopP'+_0x3ed6b1(0x34e)+_0x3ed6b1(0x4ac)](),_0x11708c();},document['body'][_0x57ddb9(0x57b)+_0x57ddb9(0x64f)+'d'](_0x5a3918),_0x1bbdac['FMfGh'](_0x1ab3ac),requestAnimationFrame(_0x404003),console[_0x57ddb9(0x551)]('[saku'+'ra-ko'+_0x57ddb9(0x594)+_0x57ddb9(0x1b0)+'eady.'+_0x57ddb9(0x5b7)+':',_0x535b13[_0x57ddb9(0x4da)]);});})()));
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
