// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.2.1
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
(function(_0x1cc3f7,_0x448c78){var _0x4eb2f8=_0xc50e,_0x205974=_0x1cc3f7();while(!![]){try{var _0x30fa7c=parseInt(_0x4eb2f8(0x33f))/(-0x15fa+0x1edb+-0x8e0)*(parseInt(_0x4eb2f8(0x34d))/(0xf66+-0xb5f*0x1+-0x405))+parseInt(_0x4eb2f8(0xd1))/(-0x4*-0x70a+0x13bd*0x1+0x9*-0x552)*(parseInt(_0x4eb2f8(0x34e))/(0x11e2+0x9ff+-0x1bdd))+parseInt(_0x4eb2f8(0x1ee))/(0x3*-0x8db+-0x929+0x23bf)+-parseInt(_0x4eb2f8(0x3c0))/(0x1*0x2153+0x4c9*0x7+-0x17c*0x2d)+-parseInt(_0x4eb2f8(0x110))/(-0x45b*0x1+-0xd*-0x36+0x1a4)+parseInt(_0x4eb2f8(0x581))/(0x19ee+-0x13ed+-0x5f9)+-parseInt(_0x4eb2f8(0x40f))/(0xf56+0x12a8+0x21f5*-0x1);if(_0x30fa7c===_0x448c78)break;else _0x205974['push'](_0x205974['shift']());}catch(_0x4c35b1){_0x205974['push'](_0x205974['shift']());}}}(_0x16f6,-0x3c31d*-0x1+0x14360*0x2+-0x248d6),((()=>{'use strict';var _0xc1539c=_0xc50e,_0x1eb54c={'libHm':'unkno'+'wn','Vbbti':function(_0x165304,_0xa7d783){return _0x165304+_0xa7d783;},'wAzBn':function(_0x517aa8,_0x5a7fbd){return _0x517aa8+_0x5a7fbd;},'opKNr':function(_0x4e537a,_0x128182){return _0x4e537a(_0x128182);},'OwSFW':function(_0x2e4b97,_0x7a819c){return _0x2e4b97>_0x7a819c;},'adHOo':'0|5|3'+'|2|4|'+'1','JpTGT':function(_0x2c0347,_0x281c41){return _0x2c0347===_0x281c41;},'ACydI':function(_0x1bf52f,_0x54efd6,_0x4832f1){return _0x1bf52f(_0x54efd6,_0x4832f1);},'tjXPd':function(_0x52e2ba,_0x22d5e2){return _0x52e2ba!==_0x22d5e2;},'IBJID':_0xc1539c(0x62c),'STExp':function(_0x743c66,_0x24e6d2){return _0x743c66!==_0x24e6d2;},'COqKM':_0xc1539c(0x17c),'zvzHG':function(_0x3ed94a,_0x32606a){return _0x3ed94a!==_0x32606a;},'FKVfR':_0xc1539c(0x388),'wVvoG':function(_0xf8237e,_0x2180ae,_0x4cdc7f,_0xf3dc0d){return _0xf8237e(_0x2180ae,_0x4cdc7f,_0xf3dc0d);},'upEEB':function(_0x51ed64,_0x61ac2){return _0x51ed64*_0x61ac2;},'VcOls':function(_0x1d54a3,_0x202d92){return _0x1d54a3/_0x202d92;},'bDIgz':function(_0x235ecc,_0x2ba25f){return _0x235ecc!==_0x2ba25f;},'INkNd':'[saku'+_0xc1539c(0x2a2)+'ur]\x20h'+_0xc1539c(0x1f0)+_0xc1539c(0x15b)+'iled:','ijEKY':'LHCfl','THzsm':_0xc1539c(0x550)+'a.kou'+_0xc1539c(0x2dc)+'v1','eYeTk':'melDV','GGnFS':function(_0x59960e,_0x14e477,_0x32be9f,_0x53f77c,_0x10422d){return _0x59960e(_0x14e477,_0x32be9f,_0x53f77c,_0x10422d);},'hiPPv':function(_0x2f1722,_0x19b872){return _0x2f1722!==_0x19b872;},'Jlval':_0xc1539c(0xa9)+'S','yKbCY':function(_0x280792,_0x18f3f0){return _0x280792+_0x18f3f0;},'sVRiX':function(_0x489f1b,_0x4cb3fb){return _0x489f1b+_0x4cb3fb;},'KFlGm':function(_0x184309,_0x18036a){return _0x184309(_0x18036a);},'xrXHk':function(_0x1bfd1e,_0x356bf0){return _0x1bfd1e!==_0x356bf0;},'aXHWy':function(_0x460f0b,_0x5d1ad3){return _0x460f0b&&_0x5d1ad3;},'fgPKh':function(_0x107abd,_0x4e2dae){return _0x107abd!==_0x4e2dae;},'twaIM':'WYaVz','IUHFe':_0xc1539c(0xa1),'YaudC':_0xc1539c(0x414),'qoiKQ':function(_0x41f763,_0x265e01,_0x4d2715,_0x188ecd,_0x46409a){return _0x41f763(_0x265e01,_0x4d2715,_0x188ecd,_0x46409a);},'VcupM':_0xc1539c(0x390),'LbTit':function(_0x59a3e0,_0xbef864,_0xc7e370,_0x2d1ddc,_0x492c20){return _0x59a3e0(_0xbef864,_0xc7e370,_0x2d1ddc,_0x492c20);},'sVROm':function(_0x155ead,_0x5126a1,_0x310ea8,_0x4fd41e,_0x192135){return _0x155ead(_0x5126a1,_0x310ea8,_0x4fd41e,_0x192135);},'RftQx':function(_0x1981c1,_0x5bfce5){return _0x1981c1!==_0x5bfce5;},'RqMYS':'i32','nXbKB':function(_0x48ab0b,_0x4264ec,_0x3ff365,_0x4c16b3,_0x3a1c95){return _0x48ab0b(_0x4264ec,_0x3ff365,_0x4c16b3,_0x3a1c95);},'jQYva':_0xc1539c(0x3c3),'WaITE':'loade'+'d','mFivk':'\x20|\x20sh'+_0xc1539c(0x88)+'\x20','HVXAP':'held','GuxLM':_0xc1539c(0x539),'HVHtj':_0xc1539c(0x378)+_0xc1539c(0x1db),'sJLey':_0xc1539c(0x11d),'mebdy':_0xc1539c(0x5f8)+'esc','JwgNE':_0xc1539c(0x30b),'WmCud':function(_0x3cc75b,_0x5b4039){return _0x3cc75b===_0x5b4039;},'oALgJ':function(_0x5abaee,_0x1ff07f){return _0x5abaee+_0x1ff07f;},'LGQzP':function(_0xcfa6c5,_0x6d6122){return _0xcfa6c5>_0x6d6122;},'xlNvy':_0xc1539c(0x48d),'zmcVf':function(_0x3b03e8,_0x1d813e){return _0x3b03e8+_0x1d813e;},'EgBaB':function(_0x342f0a,_0x11295c){return _0x342f0a===_0x11295c;},'iFLFt':_0xc1539c(0x417),'iuHsG':_0xc1539c(0x564)+_0xc1539c(0x1be)+_0xc1539c(0x3d9),'BiFxv':'mouse'+_0xc1539c(0x571),'pLkHA':_0xc1539c(0x3fe),'ozqAn':_0xc1539c(0x48d)+'up','UnVwk':'DlALf','hINeu':_0xc1539c(0x1e9),'XvCup':function(_0x39f114,_0x25383b){return _0x39f114-_0x25383b;},'piLGo':_0xc1539c(0x5be)+'activ'+'e','ayNsf':function(_0x300b86){return _0x300b86();},'ZXTTo':'CSmsW','bDKce':'godDi'+'e','xzWUi':_0xc1539c(0x2bd),'dnDEa':function(_0x5b9d73,_0x4abf5b){return _0x5b9d73*_0x4abf5b;},'XTWQS':function(_0x114b81,_0x2edef2){return _0x114b81===_0x2edef2;},'YPkIH':function(_0x815d24,_0x40f46b){return _0x815d24/_0x40f46b;},'YeVIp':function(_0x4c2a50,_0x4d5af1){return _0x4c2a50+_0x4d5af1;},'NRxwP':function(_0x98c9b1,_0x23331a,_0x5b7bf9,_0xb29237,_0x136670,_0x2c515c,_0x57b869){return _0x98c9b1(_0x23331a,_0x5b7bf9,_0xb29237,_0x136670,_0x2c515c,_0x57b869);},'rAHIQ':function(_0x58ff13,_0x4ec491){return _0x58ff13+_0x4ec491;},'KEvhs':function(_0x548d1b,_0x58f646,_0x15f557,_0x283b1c,_0x235171,_0x27f7ee,_0x48557f){return _0x548d1b(_0x58f646,_0x15f557,_0x283b1c,_0x235171,_0x27f7ee,_0x48557f);},'TzMdQ':function(_0x489ea7,_0x2e8d29){return _0x489ea7*_0x2e8d29;},'bBnee':function(_0x3c27a0,_0xade7c){return _0x3c27a0+_0xade7c;},'ESLKt':function(_0x1e4fd0,_0x4d5760){return _0x1e4fd0/_0x4d5760;},'abmVd':function(_0xa99d91,_0xb35b3f){return _0xa99d91-_0xb35b3f;},'tbRcO':function(_0x540fbd,_0x12697f){return _0x540fbd(_0x12697f);},'ZoDkH':function(_0x479737,_0x19a1ea){return _0x479737===_0x19a1ea;},'bNDEL':function(_0x4000ae,_0x563f2c){return _0x4000ae(_0x563f2c);},'WdxQY':function(_0x54d67e,_0x56300a){return _0x54d67e-_0x56300a;},'tEVwY':function(_0x40741b,_0x25e95b){return _0x40741b+_0x25e95b;},'MTdSX':function(_0x66f13b,_0x201e1){return _0x66f13b+_0x201e1;},'UVwHb':function(_0x3c5242,_0x336476){return _0x3c5242+_0x336476;},'epusv':_0xc1539c(0x124)+_0xc1539c(0x5ff)+_0xc1539c(0x10f)+_0xc1539c(0x4dc)+_0xc1539c(0x163)+_0xc1539c(0x4dc)+'e','bngqb':'left','rqSZw':'SAKUR'+'A\x20KOU'+_0xc1539c(0x623)+'1','GjRxJ':_0xc1539c(0x5ad),'TCGft':'waiti'+'ng\x20fo'+'r\x20gam'+'e…','tFrXX':_0xc1539c(0x2ed),'FiLQW':'#ff6b'+'9d','Rbays':'aria-'+_0xc1539c(0x568)+'ed','UkrFy':_0xc1539c(0x265)+'n','YlrzW':_0xc1539c(0x3e0)+_0xc1539c(0x5c8),'VebUu':_0xc1539c(0x3e6),'eNdUS':function(_0x463d2a,_0x16ddd2){return _0x463d2a(_0x16ddd2);},'RjCax':_0xc1539c(0xbb)+'|3|5|'+'1','mePBa':_0xc1539c(0x45c)+'t','qHXsz':'optio'+'n','rGPHC':_0xc1539c(0x199),'yOvUv':_0xc1539c(0x132),'XQzJx':'style','RtaLc':_0xc1539c(0x3a4),'kPmzE':'[saku'+_0xc1539c(0x2a2)+_0xc1539c(0x304)+'WMK\x20i'+'nit\x20f'+_0xc1539c(0x1e5)+':','vdgOR':'rgba('+'22,8,'+_0xc1539c(0x20c)+'7)','VTIhD':_0xc1539c(0x2e6)+'-sans'+_0xc1539c(0x521)+'f,sys'+_0xc1539c(0x483)+'i,san'+_0xc1539c(0x40b)+'if','NUAof':function(_0x1bd053,_0x5c693e){return _0x1bd053+_0x5c693e;},'peaqp':_0xc1539c(0x44b),'ZjZlf':_0xc1539c(0x236),'miqPS':function(_0x2ba7d3,_0x1c0c98){return _0x2ba7d3/_0x1c0c98;},'etREV':function(_0x854839,_0x37b5ae){return _0x854839(_0x37b5ae);},'fjnfr':function(_0x1173d9,_0x17b0df){return _0x1173d9===_0x17b0df;},'ouqQv':_0xc1539c(0x500),'jjBAz':function(_0x4a9aa3,_0xfd1b27){return _0x4a9aa3-_0xfd1b27;},'Iwuuz':_0xc1539c(0x4d8),'TDIep':'sk-ra'+'nge','ZQhxD':_0xc1539c(0x5e5),'Janmw':_0xc1539c(0x222)+'l','EbShv':function(_0x4e1a9e,_0x1a8cd9){return _0x4e1a9e(_0x1a8cd9);},'uXKoq':_0xc1539c(0x610)+_0xc1539c(0x20b)+'2|6|4','WvjYV':'0\x20hoo'+_0xc1539c(0x555)+_0xc1539c(0x503)+_0xc1539c(0x5c2)+_0xc1539c(0x3fc),'KIFNh':'loadi'+'ng','opzjW':'UWMK\x20'+_0xc1539c(0x2f1)+'NG\x20—\x20'+'overl'+_0xc1539c(0x44e)+_0xc1539c(0x173)+_0xc1539c(0x3c1)+'all\x20t'+_0xc1539c(0xce)+_0xc1539c(0xc8)+'ipt)','KrsLc':_0xc1539c(0x1cf)+'\x20Unit'+_0xc1539c(0x4c5)+_0xc1539c(0x358)+_0xc1539c(0xbc)+'tion.'+'set_t'+_0xc1539c(0x17e)+_0xc1539c(0x425)+_0xc1539c(0x450),'BSbbf':function(_0x58faa7){return _0x58faa7();},'ZBmje':function(_0x4db4ff){return _0x4db4ff();},'MpAiD':function(_0x3ac691,_0x29fe2d,_0xa4bd08,_0x403dc1,_0x26e1e2,_0x2db6d7){return _0x3ac691(_0x29fe2d,_0xa4bd08,_0x403dc1,_0x26e1e2,_0x2db6d7);},'fVhfF':_0xc1539c(0x1a2)+_0xc1539c(0x250),'eZegR':'Damag'+_0xc1539c(0x2d1)+'P]','xNYDH':'move','CXRZU':'Botto'+'m\x20lef'+'t','qdDGZ':function(_0x4b30d3,_0x26e96f,_0x48ce05,_0x38f2fd){return _0x4b30d3(_0x26e96f,_0x48ce05,_0x38f2fd);},'uJWIQ':_0xc1539c(0x140)+_0xc1539c(0x1e4)+'-io_*'+'\x20bann'+'er\x20sl'+_0xc1539c(0x3ca),'nrhjm':'Appli'+'es\x20on'+_0xc1539c(0x275)+'ad.\x20I'+'f\x20mat'+_0xc1539c(0x10e)+_0xc1539c(0xf2)+_0xc1539c(0x499)+'fe\x20mo'+'de,\x20t'+_0xc1539c(0x202)+_0xc1539c(0x1d5)+_0xc1539c(0xc9)+'ok-re'+_0xc1539c(0x591)+_0xc1539c(0x36a)+_0xc1539c(0x32c)+_0xc1539c(0x84)+_0xc1539c(0x5e4)+_0xc1539c(0x3b3)+_0xc1539c(0x426)+'ount.','RXzZM':function(_0x43718b,_0x1a3e88){return _0x43718b(_0x1a3e88);},'NvkNb':function(_0x45ad23,_0x486fe6,_0x4a3d4a){return _0x45ad23(_0x486fe6,_0x4a3d4a);},'cIzaE':_0xc1539c(0x9b)+_0xc1539c(0x49f)+_0xc1539c(0x2f4)+_0xc1539c(0x21a)+_0xc1539c(0x285)+'\x20no\x20h'+_0xc1539c(0x3ee)+_0xc1539c(0xed)+_0xc1539c(0x299)+_0xc1539c(0x494)+')','djSMW':'UWMK\x20'+_0xc1539c(0x2f1)+'NG\x20-\x20'+_0xc1539c(0x53e)+'ay\x20on'+_0xc1539c(0x173)+_0xc1539c(0x3c1)+'all\x20t'+_0xc1539c(0xce)+_0xc1539c(0xc8)+_0xc1539c(0x4fc),'lsaRI':_0xc1539c(0x439)+'p','mtJWw':_0xc1539c(0x189)+'a\x20Kou'+'r','zZRwp':'small','nymBs':_0xc1539c(0xff)+'t','cUYGH':function(_0x1348bf,_0x4d34b7,_0x369b2e){return _0x1348bf(_0x4d34b7,_0x369b2e);},'txBMy':function(_0x1c690a,_0x5c39c4){return _0x1c690a===_0x5c39c4;},'XICff':'posit'+'ion:f'+'ixed;'+'inset'+':0;z-'+_0xc1539c(0x5c0)+':2147'+_0xc1539c(0x5d9)+_0xc1539c(0xa8)+'nter-'+'event'+'s:non'+'e;','nlfGf':'qlkTU','NPYkn':_0xc1539c(0x1e2),'jHaBy':'Visua'+'l','EmcDH':_0xc1539c(0xa6)+_0xc1539c(0x247)+_0xc1539c(0x90)+'top:1'+_0xc1539c(0x160)+'ight:'+_0xc1539c(0xf1)+'z-ind'+_0xc1539c(0x4e3)+_0xc1539c(0x251)+'646;c'+'ursor'+_0xc1539c(0xfa)+'ter;w'+'idth:'+_0xc1539c(0x53b)+_0xc1539c(0x2b4)+'t:26p'+_0xc1539c(0x551)+_0xc1539c(0x472)+_0xc1539c(0x4f2)+_0xc1539c(0x5c5)+'tion:'+_0xc1539c(0x402)+'ty\x200.'+_0xc1539c(0x37c)+'inter'+'-even'+'ts:au'+_0xc1539c(0x16d)+_0xc1539c(0x482)+_0xc1539c(0x1d3)+_0xc1539c(0x545)+_0xc1539c(0x1b4)+_0xc1539c(0xe2)+_0xc1539c(0x364)+_0xc1539c(0x56b)+_0xc1539c(0x2a9)+_0xc1539c(0x517)+'))','XasdK':_0xc1539c(0x437)+_0xc1539c(0x1e6)+_0xc1539c(0x467)+'\x200\x2024'+_0xc1539c(0x5d3)+'<path'+_0xc1539c(0x308)+'12\x2021'+_0xc1539c(0x45a)+'-2.5-'+_0xc1539c(0x27f)+'-4-7.'+_0xc1539c(0x5f6)+_0xc1539c(0x3d2)+'8-4.5'+_0xc1539c(0xe7)+_0xc1539c(0x2aa)+_0xc1539c(0x605)+'5c0\x203'+_0xc1539c(0x137)+_0xc1539c(0x4b0)+'.5z\x22\x20'+'fill='+_0xc1539c(0x1d4)+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0xc1539c(0x2ba)+_0xc1539c(0x448)+'-widt'+_0xc1539c(0x61d)+'\x20stro'+_0xc1539c(0x5cd)+'necap'+_0xc1539c(0x52e)+'nd\x22\x20s'+_0xc1539c(0x448)+'-line'+'join='+_0xc1539c(0x3e7)+_0xc1539c(0x21b)+'circl'+'e\x20cx='+'\x2212\x22\x20'+_0xc1539c(0x2b8)+_0xc1539c(0x61b)+'\x221.5\x22'+'\x20fill'+_0xc1539c(0x5a4)+'6b9d\x22'+'/></s'+'vg>','WOZUv':function(_0x31bb7a,_0x2cb1a4){return _0x31bb7a(_0x2cb1a4);},'diAdV':_0xc1539c(0x42a)+_0xc1539c(0x2a2)+'ur]\x20m'+_0xc1539c(0x340)+_0xc1539c(0x578)+_0xc1539c(0x3bf)+':','lRSmH':_0xc1539c(0x270)+'c6','nSSrL':_0xc1539c(0x550)+_0xc1539c(0x4b6)+_0xc1539c(0x3d7),'hJSbR':_0xc1539c(0xa2),'mMiQJ':_0xc1539c(0x189)+'aKour','PxNgG':_0xc1539c(0x51e),'dFiEP':function(_0x578710,_0x167d76,_0x2607f3,_0x11ebc6,_0x1bec14,_0x5042f9,_0x3b90de,_0x1d68e0){return _0x578710(_0x167d76,_0x2607f3,_0x11ebc6,_0x1bec14,_0x5042f9,_0x3b90de,_0x1d68e0);},'ptWtc':function(_0x1dfc5c,_0x5a8b68,_0xeddba1,_0x3a98cf,_0x37febe,_0x138b8c,_0x1d150c,_0x8ecb10){return _0x1dfc5c(_0x5a8b68,_0xeddba1,_0x3a98cf,_0x37febe,_0x138b8c,_0x1d150c,_0x8ecb10);},'oikUr':function(_0x36423e,_0xa39160,_0x4f8bf2){return _0x36423e(_0xa39160,_0x4f8bf2);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0xc1539c(0x2da)+'ame']||''))return;if(window['__SAK'+_0xc1539c(0x2b1)+'OUR__'])return;window['__SAK'+_0xc1539c(0x2b1)+_0xc1539c(0x351)]=!![];var _0x2ad004=_0x1eb54c[_0xc1539c(0x29b)],_0x46e86a=_0x1eb54c[_0xc1539c(0x209)],_0x4aa291={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0xc1539c(0xcc)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x16fada={..._0x4aa291};try{Object[_0xc1539c(0x547)+'n'](_0x16fada,JSON['parse'](localStorage[_0xc1539c(0xdb)+'em'](_0x1eb54c['nSSrL'])||'{}'));}catch(_0x38a206){}function _0x34fadc(){var _0x232100=_0xc1539c;if('YtrYc'===_0x232100(0x115))_0x47fa33['bhop']=_0x483a48,_0x20c689();else try{localStorage[_0x232100(0x55e)+'em'](_0x232100(0x550)+'a.kou'+_0x232100(0x3d7),JSON[_0x232100(0x5b9)+'gify'](_0x16fada));}catch(_0x175258){}}var _0x5c7d0e={'uwmk':!!window['Unity'+_0xc1539c(0x4c7)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x16fada[_0xc1539c(0xba)+_0xc1539c(0x250)],'lastError':''};try{window[_0xc1539c(0x4e2)+_0xc1539c(0x75)+_0xc1539c(0xd6)+'r'](_0xc1539c(0x337),_0x5ec1ae=>{var _0x18be31=_0xc1539c;try{var _0x544205=_0x5ec1ae&&(_0x5ec1ae[_0x18be31(0x4d1)+'ge']||_0x5ec1ae['error']&&_0x5ec1ae[_0x18be31(0x337)]['messa'+'ge'])||_0x1eb54c[_0x18be31(0xef)];if(_0x5ec1ae&&_0x5ec1ae['filen'+_0x18be31(0x349)])_0x544205+=_0x1eb54c[_0x18be31(0x492)](_0x1eb54c[_0x18be31(0x23b)](_0x18be31(0x59c),String(_0x5ec1ae[_0x18be31(0x3ce)+_0x18be31(0x349)])['split']('/')['pop']()),':')+(_0x5ec1ae[_0x18be31(0x241)+'o']||'?');_0x5c7d0e[_0x18be31(0x47a)+_0x18be31(0x1c9)]=_0x1eb54c['opKNr'](String,_0x544205)[_0x18be31(0x4e9)](-0x24f8+-0x16eb+0x3be3,-0x1*0x2185+-0x1*0x739+0x295e);}catch(_0x202427){}});}catch(_0x370273){}var _0x40c356=null,_0x1742ec=null,_0x57c282={},_0x61f781=[],_0x3b42c9=[],_0x5396d5=new Map();function _0x433c90(_0x47caa4,_0x595dc9){var _0x13ea8f=_0xc1539c;if(!_0x595dc9||_0x47caa4[_0x13ea8f(0x46f)+_0x13ea8f(0x215)](_0x595dc9)||_0x1eb54c[_0x13ea8f(0x508)](_0x47caa4[_0x13ea8f(0x16f)+'h'],0xeae+-0x18e4+-0x1*-0xa76))return;_0x47caa4['push'](_0x595dc9);}function _0x5233de(_0x2ab71e,_0x38eb8d,_0x30034d,_0x4a58a6){var _0x39519b=_0xc1539c,_0x5ad6e8=_0x1eb54c['adHOo'][_0x39519b(0x50e)]('|'),_0xf78644=-0x22ad+-0x1b0e+0x3dbb*0x1;while(!![]){switch(_0x5ad6e8[_0xf78644++]){case'0':var _0x55051b=-0xc31+-0xbcf+0x1800;continue;case'1':if(_0x1eb54c[_0x39519b(0x589)](_0x4a58a6,'movem'+_0x39519b(0x11b))&&_0x2ab71e['lengt'+'h']){var _0x52a486=_0x57c282[_0x39519b(0x187)+'ve'];if(_0x52a486)try{_0x52a486['enabl'+'ed']=![];}catch(_0x20ef18){}}continue;case'2':_0x1eb54c[_0x39519b(0x2a8)](_0x433c90,_0x2ab71e,_0x55051b);continue;case'3':if(!_0x55051b)return;continue;case'4':_0x30034d[_0x4a58a6]=_0x2ab71e[_0x39519b(0x16f)+'h'];continue;case'5':try{_0x55051b=_0x38eb8d&&_0x38eb8d[_0x39519b(0x4be)]?_0x38eb8d['val']():0x1694+0x191a+-0x2fae*0x1;}catch(_0x4e64be){}continue;}break;}}function _0x48a06d(_0x3ad533,_0x366af4,_0x406fc8){var _0x23f875=_0xc1539c,_0x323021={'JcFCI':_0x23f875(0x592)+'wn','GgriA':function(_0x357be8,_0x33aafe){return _0x357be8+_0x33aafe;},'OFTEj':'\x20@\x20','GZpGg':function(_0x5289dc,_0x382105){return _0x1eb54c['opKNr'](_0x5289dc,_0x382105);}},_0x5693cb=_0x5396d5['get'](_0x3ad533);!_0x5693cb&&(_0x1eb54c['tjXPd'](_0x23f875(0x535),'ihxyW')?(_0x83afa9[_0x23f875(0x4cf)+'ill']=_0x1cdf55,_0x4d0ab2()):(_0x5693cb=new Map(),_0x5396d5['set'](_0x3ad533,_0x5693cb)));if(!_0x5693cb[_0x23f875(0x184)](_0x366af4)){if(_0x1eb54c['IBJID']!=='YVHUJ')try{var _0x37adb4=new _0x40c356(_0x3ad533)[_0x23f875(0x51a)+_0x23f875(0x35d)](_0x366af4,_0x406fc8);_0x5693cb['set'](_0x366af4,_0x1eb54c[_0x23f875(0x5cb)](_0x37adb4,undefined)?_0x37adb4['val']():null);}catch(_0x47066f){_0x5693cb['set'](_0x366af4,null);}else _0x20d5d5[_0x23f875(0x4e2)+'entLi'+_0x23f875(0xd6)+'r'](_0x23f875(0x337),_0xca1fec=>{var _0x29f71=_0x23f875;try{var _0x3e5ca1=_0xca1fec&&(_0xca1fec[_0x29f71(0x4d1)+'ge']||_0xca1fec['error']&&_0xca1fec[_0x29f71(0x337)]['messa'+'ge'])||_0x323021['JcFCI'];if(_0xca1fec&&_0xca1fec[_0x29f71(0x3ce)+'ame'])_0x3e5ca1+=_0x323021[_0x29f71(0x114)](_0x323021['OFTEj']+_0x323021['GZpGg'](_0x433683,_0xca1fec['filen'+_0x29f71(0x349)])['split']('/')[_0x29f71(0x57f)]()+':',_0xca1fec['linen'+'o']||'?');_0x285dd9[_0x29f71(0x47a)+_0x29f71(0x1c9)]=_0x5627dc(_0x3e5ca1)['slice'](-0x5db+-0x1*-0x6bc+0x2d*-0x5,-0x5*-0x685+0x1634+-0x362d);}catch(_0x3b39a1){}});}return _0x5693cb[_0x23f875(0x220)](_0x366af4);}function _0xfac0c(_0x15425c,_0x5e8662,_0x40b549,_0x1091eb){try{new _0x40c356(_0x15425c)['write'+'Field'](_0x5e8662,_0x40b549,_0x1091eb);}catch(_0x2f0b3e){}}function _0x3e0240(_0x299569,_0x3968dc){var _0x20340d=_0xc1539c;try{var _0x502499=new _0x40c356(_0x299569)['readF'+'ield'](_0x3968dc,_0x1eb54c['COqKM']);return _0x502499?_0x502499[_0x20340d(0x4be)]():-0x1ffc+0x1d4f+-0x5*-0x89;}catch(_0x908493){return-0x144a+0x1ea4+-0x19*0x6a;}}function _0x367b34(_0x2a306c,_0x194453,_0x807304,_0x409c7a){var _0x87d77b=_0xc1539c;if(_0x1eb54c[_0x87d77b(0x2d2)](_0x1eb54c[_0x87d77b(0x607)],_0x1eb54c[_0x87d77b(0x607)])){var _0xaf008b=_0x55f1ae[_0x16ff8d]||[],_0x2684af=_0x4f135c[_0x87d77b(0x2e0)]();while(_0xaf008b[_0x87d77b(0x16f)+'h']&&_0x2684af-_0xaf008b[-0x1*-0x427+-0x1dcd+0x19a6]>-0xa7*0x26+-0x12e3+0x2f95)_0xaf008b['shift']();return _0xaf008b[_0x87d77b(0x16f)+'h'];}else{var _0x40dc21=_0x1eb54c[_0x87d77b(0x3c8)](_0x48a06d,_0x2a306c,_0x194453,_0x807304);if(_0x40dc21!=null)_0xfac0c(_0x2a306c,_0x194453,_0x807304,_0x1eb54c['upEEB'](_0x40dc21,_0x409c7a));}}function _0x200b16(_0x2c4633,_0x291e95,_0xeba0a8,_0x16ff65,_0x52f390,_0x5a7fa5,_0x537779){var _0x337e2c=_0xc1539c;try{var _0x52315b=_0x1742ec[_0x337e2c(0x22a)+_0x337e2c(0x561)]({'typeName':_0x291e95,'methodName':_0xeba0a8,'params':_0x16ff65,'returnType':_0x52f390},_0x5a7fa5);return _0x52315b[_0x337e2c(0x429)+'ed']=_0x1eb54c[_0x337e2c(0x2d2)](_0x537779,![]),_0x57c282[_0x2c4633]=_0x52315b,_0x5c7d0e[_0x337e2c(0x5e4)+_0x337e2c(0x4d2)]++,_0x52315b;}catch(_0x5cbb37){if('sTQfO'===_0x337e2c(0x53d))_0x53a821(),_0x1b60b6(_0x5da093(_0x2280b9[_0x337e2c(0x134)]));else return console['warn']('[saku'+'ra-ko'+_0x337e2c(0x5c1)+_0x337e2c(0x1f0)+_0x337e2c(0x15b)+_0x337e2c(0x280),_0x2c4633,_0x5cbb37&&_0x5cbb37['messa'+'ge']),null;}}function _0x13a148(_0x54556a,_0x35a2e8,_0x160603,_0x544ea1,_0x44ee20,_0x31b73d,_0x317f54){var _0x1cb409=_0xc1539c,_0x2cf2c8={'kHCOl':function(_0x3b7ff3,_0x415909){var _0x2ebfde=_0xc50e;return _0x1eb54c[_0x2ebfde(0x4a3)](_0x3b7ff3,_0x415909);}};if(_0x1cb409(0x26b)!==_0x1cb409(0x26b))_0x2d3c20=_0xaa4f99[_0x1cb409(0x31f)](_0x2cf2c8['kHCOl'](_0x59d5b6*(0x225b*0x1+0xd1a+-0x2b8d),_0x5d612c-_0x43bb34)),_0x51cb02=0x2*0x11f+0x206*-0x13+0x2434,_0x4f6e4a=_0x415655;else try{if(_0x1cb409(0x33d)!==_0x1cb409(0x2b6)){var _0x3a8883=('1|3|0'+_0x1cb409(0x2b7))[_0x1cb409(0x50e)]('|'),_0x25d0e3=0x1687+-0x7f0+0x2eb*-0x5;while(!![]){switch(_0x3a8883[_0x25d0e3++]){case'0':_0x57c282[_0x54556a]=_0x3d4470;continue;case'1':var _0x3d4470=_0x1742ec[_0x1cb409(0x22a)+_0x1cb409(0xa0)+'x']({'typeName':_0x35a2e8,'methodName':_0x160603,'params':_0x544ea1,'returnType':_0x44ee20},_0x31b73d);continue;case'2':_0x5c7d0e[_0x1cb409(0x5e4)+_0x1cb409(0x4d2)]++;continue;case'3':_0x3d4470[_0x1cb409(0x429)+'ed']=_0x1eb54c[_0x1cb409(0x287)](_0x317f54,![]);continue;case'4':return _0x3d4470;}break;}}else _0x28c34e=_0x1aaa88&&_0x1e8717[_0x1cb409(0x4be)]?_0x4e6ba1[_0x1cb409(0x4be)]():-0x1d3*-0xd+0x53f*0x2+0x8b*-0x3f;}catch(_0x4a3bc1){return console['warn'](_0x1eb54c[_0x1cb409(0x99)],_0x54556a,_0x4a3bc1&&_0x4a3bc1[_0x1cb409(0x4d1)+'ge']),null;}}var _0x4f7bd9=()=>![];try{if(window[_0xc1539c(0x46e)+_0xc1539c(0x4c7)+_0xc1539c(0x1f1)]&&!_0x16fada['safeM'+'ode']){if(_0x1eb54c['hJSbR']===_0x1eb54c['hJSbR']){_0x40c356=window[_0xc1539c(0x46e)+_0xc1539c(0x4c7)+_0xc1539c(0x1f1)][_0xc1539c(0x502)+'Wrapp'+'er'],_0x1742ec=window['Unity'+'WebMo'+'dkit']['Runti'+'me'][_0xc1539c(0x486)+_0xc1539c(0x557)+'in']({'name':_0x1eb54c[_0xc1539c(0x14f)],'version':_0x1eb54c[_0xc1539c(0x60f)],'referencedAssemblies':[_0xc1539c(0x47e)+_0xc1539c(0x1a0)+'Sharp'+_0xc1539c(0x560)]});if(_0x16fada[_0xc1539c(0x1a4)+'od'])_0x200b16('god',_0xc1539c(0x111)+'th','Initi'+_0xc1539c(0x313)+_0xc1539c(0x19f)+_0xc1539c(0x46a),[_0xc1539c(0x4ca),_0xc1539c(0x4ca)],undefined,_0x4f7bd9,!!_0x16fada[_0xc1539c(0x5dc)]);if(_0x16fada['hookG'+_0xc1539c(0x5dd)])_0x1eb54c[_0xc1539c(0x1fb)](_0x200b16,_0xc1539c(0x3ff)+'e','OHeal'+'th',_0xc1539c(0xa5)+'Die',[_0xc1539c(0x4ca),'i32',_0x1eb54c['RqMYS'],'i32','i32'],undefined,_0x4f7bd9,!!_0x16fada[_0xc1539c(0x5dc)]);if(_0x16fada[_0xc1539c(0x4fe)+_0xc1539c(0x573)+'il'])_0x200b16(_0xc1539c(0x321)+_0xc1539c(0x1d7),_0xc1539c(0x522)+'nPlat'+'forms'+'.Over'+'tide.'+_0xc1539c(0x266)+'lMoti'+'on',_0xc1539c(0x32f),['i32'],undefined,_0x4f7bd9,!!_0x16fada[_0xc1539c(0x321)+_0xc1539c(0x1d7)]);if(_0x16fada[_0xc1539c(0x357)+_0xc1539c(0x136)+'e'])_0x13a148('capSh'+'ooter',_0xc1539c(0x149)+_0xc1539c(0x39b),_0xc1539c(0x488)+_0xc1539c(0x394)+_0xc1539c(0x194),['i32','i32'],undefined,(_0x33f706,_0x19e1fe)=>{var _0x3a19f7=_0xc1539c;_0x1eb54c[_0x3a19f7(0x589)](_0x1eb54c[_0x3a19f7(0x2f3)],_0x3a19f7(0x18e))?(_0x481f15[_0x3a19f7(0x3df)+_0x3a19f7(0x30d)+'ation'](),_0x50e893()):_0x5233de(_0x3b42c9,_0x19e1fe,_0x5c7d0e,_0x3a19f7(0x269)+_0x3a19f7(0x1e1));},!![]);if(_0x16fada[_0xc1539c(0x357)+_0xc1539c(0x136)+'e'])_0x1eb54c[_0xc1539c(0x2d3)](_0x13a148,_0xc1539c(0x187)+'ve','Legio'+_0xc1539c(0x1c4)+'forms'+_0xc1539c(0x37b)+_0xc1539c(0x3ab)+_0xc1539c(0x444)+_0xc1539c(0x37e),'IsGro'+_0xc1539c(0x8f),[_0xc1539c(0x4ca)],_0x1eb54c[_0xc1539c(0x171)],(_0x39c9bb,_0xd411cd)=>{var _0x44ef24=_0xc1539c;if(_0x1eb54c[_0x44ef24(0x589)]('KfCFN',_0x1eb54c[_0x44ef24(0x234)]))try{_0x2ec496[_0x44ef24(0x55e)+'em'](_0x1eb54c['THzsm'],_0xf09e5a[_0x44ef24(0x5b9)+_0x44ef24(0x496)](_0x518b1b));}catch(_0x9206c4){}else _0x1eb54c['GGnFS'](_0x5233de,_0x61f781,_0xd411cd,_0x5c7d0e,'movem'+'ents');},!![]);}else{var _0x4b7cd5=_0x29778b[_0xc1539c(0x3f3)+_0xc1539c(0x29d)+'Eleme'+'nt'],_0x202ce1=_0x4b7cd5&&_0x1eb54c['hiPPv'](_0x4b7cd5['tagNa'+'me'],_0x1eb54c['Jlval'])?_0x4b7cd5:_0x2e6915[_0xc1539c(0x170)]||_0x5639e5[_0xc1539c(0x474)+_0xc1539c(0x19a)+_0xc1539c(0xdd)];if(_0x34b955['paren'+_0xc1539c(0xcf)]!==_0x202ce1)_0x202ce1['appen'+_0xc1539c(0x590)+'d'](_0x194cea);}}}catch(_0xfb361e){console[_0xc1539c(0x384)](_0x1eb54c[_0xc1539c(0x3dd)],_0xfb361e&&_0xfb361e[_0xc1539c(0x4d1)+'ge']);}function _0x10fe2b(_0x3abb39,_0x2601fb){var _0x10bd3b=_0x57c282[_0x3abb39];if(_0x10bd3b)try{_0x10bd3b['enabl'+'ed']=!!_0x2601fb;}catch(_0xe3f687){}}_0x1eb54c[_0xc1539c(0x139)](setInterval,()=>{var _0x206759=_0xc1539c,_0x223587={'dNzFP':function(_0x33b43a){return _0x33b43a();}};if(!_0x40c356||!window['unity'+_0x206759(0x515)+_0x206759(0x524)])return;var _0x3d9fa6=_0x1eb54c[_0x206759(0x4a3)](_0x1eb54c['KFlGm'](Number,_0x16fada['speed'+_0x206759(0x5a0)])||-0xff8+-0xa13*-0x1+-0x1*-0x649,-0x2681+0x18e8+-0xdfd*-0x1),_0x186140=_0x1eb54c[_0x206759(0x4a3)](Number(_0x16fada[_0x206759(0x2d7)+'ct'])||0xb*-0x319+0x1318+0x313*0x5,0x2*0x80a+-0xc48+-0x368),_0x600bdb=(_0x1eb54c[_0x206759(0x4f1)](Number,_0x16fada['gravi'+'tyPct'])||-0x3a*0x38+-0x1*-0x13c3+-0x6af)/(-0x59*-0xa+-0x5*0x9b+-0x5*0x3),_0x1860ef=Math[_0x206759(0x1c5)](0xd33+0x74d*-0x4+-0x1002*-0x1,Number(_0x16fada[_0x206759(0x1af)+'eValu'+'e'])||0x2b*0xbe+0xb3*0x10+0xaa1*-0x4),_0x1393ab=_0x1eb54c[_0x206759(0xa3)](_0x3d9fa6,-0x1cd8+-0x78f*-0x1+-0xaa5*-0x2)||_0x1eb54c[_0x206759(0x5cb)](_0x186140,-0x1129+-0x20*-0x45+0x88a*0x1)||_0x1eb54c[_0x206759(0x287)](_0x600bdb,-0x263a+-0x108a+0x7d3*0x7)||_0x16fada['bhop'],_0x29a58c=_0x16fada[_0x206759(0x604)+'ead']||_0x16fada[_0x206759(0x1af)+_0x206759(0x398)]||_0x16fada[_0x206759(0x38f)+_0x206759(0x2fd)]||_0x16fada[_0x206759(0x31d)+_0x206759(0x367)];if(_0x1eb54c[_0x206759(0x3d0)](!_0x1393ab,!_0x29a58c))return;try{for(var _0x581880=-0x1e2a+-0x1e3a+0x3c64;_0x581880<_0x61f781['lengt'+'h'];_0x581880++){if(_0x1eb54c['fgPKh'](_0x1eb54c['twaIM'],_0x1eb54c['IUHFe'])){var _0x32129c=_0x61f781[_0x581880];if(!_0x32129c)continue;if(_0x3d9fa6!==0x181d+0x426+-0x1c42){if(_0x1eb54c['tjXPd'](_0x1eb54c[_0x206759(0x325)],_0x1eb54c['YaudC']))try{var _0x29f71a=_0x1c4775&&(_0x12d0f2[_0x206759(0x4d1)+'ge']||_0x59fb47[_0x206759(0x337)]&&_0x59ade8['error']['messa'+'ge'])||_0x1eb54c[_0x206759(0xef)];if(_0x33812f&&_0x255149[_0x206759(0x3ce)+_0x206759(0x349)])_0x29f71a+=_0x1eb54c['yKbCY'](_0x1eb54c['sVRiX']('\x20@\x20'+_0x1eb54c[_0x206759(0x4f1)](_0x2f726a,_0x43d97b['filen'+'ame'])['split']('/')['pop'](),':'),_0xfe5650['linen'+'o']||'?');_0x269518[_0x206759(0x47a)+_0x206759(0x1c9)]=_0x39a067(_0x29f71a)['slice'](-0x2079+0xa2f+-0x3*-0x76e,-0x2*0x8c2+0x1c67*0x1+-0xa43);}catch(_0x4abf0a){}else _0x367b34(_0x32129c,-0x2449+0x3*0x529+-0x1*-0x14f6,_0x206759(0x390),_0x3d9fa6),_0x367b34(_0x32129c,-0x1*0xec3+0x2411+0x2*-0xa91,'f32',_0x3d9fa6),_0x1eb54c[_0x206759(0x8c)](_0x367b34,_0x32129c,-0x672+0x139b+-0xcf9,_0x1eb54c[_0x206759(0x4cb)],_0x3d9fa6),_0x1eb54c['LbTit'](_0x367b34,_0x32129c,0x7*0x3d1+0xd65+0x9fa*-0x4,'f32',_0x3d9fa6),_0x1eb54c[_0x206759(0x5ac)](_0x367b34,_0x32129c,0x7cd+-0x1417+-0xc66*-0x1,_0x206759(0x390),_0x3d9fa6),_0x367b34(_0x32129c,-0x7f4*0x2+-0xa90+0x1a98,_0x1eb54c[_0x206759(0x4cb)],_0x3d9fa6);}if(_0x1eb54c[_0x206759(0x38e)](_0x186140,0xa4*-0x31+-0x65*0x26+0x19*0x1db))_0x367b34(_0x32129c,-0xeda*-0x2+0x4c3*-0x2+-0x13de,_0x1eb54c[_0x206759(0x4cb)],_0x186140);_0x600bdb!==-0x76b+-0x1d01+0x246d&&(_0x367b34(_0x32129c,-0x1f73+-0x1*-0x8d+-0x266*-0xd,_0x1eb54c[_0x206759(0x4cb)],_0x600bdb),_0x367b34(_0x32129c,-0x17d*-0x3+0x1f37+-0x2362,_0x206759(0x390),_0x600bdb));if(_0x16fada[_0x206759(0x2e2)])_0xfac0c(_0x32129c,-0x1*0x1cd1+0x862+0x150b,_0x206759(0x390),-(0x1863+-0x1078+0x101*-0x4));}else _0x3db962[_0x206759(0x1a4)+'od']=_0x3b7fe1,_0x16f42d[_0x206759(0x1a4)+'odDie']=_0x2614c6,_0x25553d['hookN'+_0x206759(0x573)+'il']=_0x3527f9,_0x320912['hookC'+'aptur'+'e']=_0xdcadca,_0x223587['dNzFP'](_0x16b7d5),_0x56842a['reloa'+'d']();}}catch(_0x433307){}try{for(var _0x160d43=-0xf*-0x177+0xf00+-0xf*0x277;_0x160d43<_0x3b42c9[_0x206759(0x16f)+'h'];_0x160d43++){var _0x474890=_0x3e0240(_0x3b42c9[_0x160d43],-0x3d*0x29+0xc44+-0x247);if(!_0x474890)continue;_0x16fada[_0x206759(0x1af)+'eExp']&&(_0xfac0c(_0x474890,0x8*0x1a1+-0x17e1*0x1+0xb25,_0x1eb54c[_0x206759(0x171)],_0x1860ef),_0x1eb54c['nXbKB'](_0xfac0c,_0x474890,0x1*-0x1e6a+-0x120*-0x3+0x71*0x3e,_0x1eb54c[_0x206759(0x171)],_0x1860ef));_0x16fada['noSpr'+_0x206759(0x58b)]&&(_0xfac0c(_0x474890,-0x15a2+-0x2*-0x5db+0xa74,'f32',-0xbf+0x995*0x3+-0x1c00),_0xfac0c(_0x474890,-0x6*0x2e+-0x20db+0x3b*0x95,_0x206759(0x390),0x130*0x8+-0x15e3+-0x34*-0x3d));if(_0x16fada[_0x206759(0x38f)+'moExp'])_0xfac0c(_0x474890,0x1*-0x6b6+0x1*-0x13d4+0x1ae6,_0x1eb54c['RqMYS'],-0x235a+-0x3*0x19c+0x2c15);_0x16fada[_0x206759(0x31d)+_0x206759(0x367)]&&(_0x367b34(_0x474890,0x2*-0xb92+0x3*-0x633+0x2a49,_0x206759(0x390),-0x2256+-0x791*-0x1+-0x26f*-0xb+0.1),_0xfac0c(_0x474890,-0x269f*-0x1+-0x575+-0x20ca,_0x206759(0x390),0x839*-0x3+0x3d3*-0x1+0x1c7e+0.1));}}catch(_0x126800){}},0x2a4+-0x1*0x13ee+0x1212),setInterval(()=>{var _0x18ad19=_0xc1539c,_0x4143f8={'qEsNQ':_0x1eb54c[_0x18ad19(0x47d)],'CcqyG':function(_0x3fd159,_0x623e87){return _0x3fd159+_0x623e87;},'NQYiG':function(_0x4feeb7,_0x40edfe){var _0x15fddd=_0x18ad19;return _0x1eb54c[_0x15fddd(0x599)](_0x4feeb7,_0x40edfe);},'eijGi':_0x18ad19(0x5a1)+_0x18ad19(0x5e2)+'\x20','JCzJM':'\x20|\x20ga'+_0x18ad19(0x159),'FeIMu':_0x1eb54c[_0x18ad19(0x229)],'IAULJ':'loadi'+'ng','rGUoV':_0x1eb54c[_0x18ad19(0xaa)],'agfhe':_0x1eb54c[_0x18ad19(0x3ba)],'BzsQf':_0x1eb54c[_0x18ad19(0x38a)],'YDUMo':_0x1eb54c[_0x18ad19(0x4ed)],'eZbnC':_0x18ad19(0x5a1)+_0x18ad19(0x2f1)+_0x18ad19(0x1cd)+'overl'+_0x18ad19(0x44e)+_0x18ad19(0x173)+_0x18ad19(0x3c1)+'all\x20t'+'he\x20us'+_0x18ad19(0xc8)+'ipt)'};_0x5c7d0e[_0x18ad19(0x2f9)+_0x18ad19(0x1bd)]=!!window['unity'+'Insta'+_0x18ad19(0x524)];try{if('zokmR'===_0x18ad19(0x5b8)){var _0x5a7584=0xaa5+0xdc3+-0x1*0x1868;for(var _0x5e6478 in _0x57c282){if('PUghF'===_0x1eb54c[_0x18ad19(0x122)]){var _0x3c52da=_0x36ef55[_0x18ad19(0x486)+'eElem'+'ent'](_0x4143f8[_0x18ad19(0x2bb)]);return _0x3c52da[_0x18ad19(0xb9)+'Name']='sk-no'+'te'+(_0xcaabdc?'\x20err':''),_0x3c52da['textC'+_0x18ad19(0x16b)+'t']=_0x5c39cc,_0x3c52da;}else{if(_0x57c282[_0x5e6478]&&_0x57c282[_0x5e6478][_0x18ad19(0x162)+'ed'])_0x5a7584++;}}_0x5c7d0e['hooks'+'Ok']=_0x5a7584;}else _0x35ca4e['textC'+_0x18ad19(0x16b)+'t']=_0x2bf021[_0x18ad19(0xba)+'ode']?'SAFE\x20'+_0x18ad19(0x49f)+_0x18ad19(0x2f4)+_0x18ad19(0x21a)+_0x18ad19(0x285)+_0x18ad19(0x119)+_0x18ad19(0x3ee)+_0x18ad19(0xed)+_0x18ad19(0x299)+_0x18ad19(0x494)+')':_0x382445['uwmk']?_0x4143f8['CcqyG'](_0x4143f8['CcqyG'](_0x4143f8[_0x18ad19(0x5b6)](_0x4143f8[_0x18ad19(0x353)](_0x4143f8['NQYiG'](_0x4143f8['CcqyG'](_0x4143f8[_0x18ad19(0x2c8)],_0x31eada['hooks'+_0x18ad19(0x4d2)]?_0x4143f8['CcqyG'](_0x2511f5[_0x18ad19(0x5e4)+'Ok']+'/'+_0x4e0472[_0x18ad19(0x5e4)+'Total'],'\x20hook'+'s'):_0x18ad19(0x5a8)+'ks\x20ar'+'med\x20('+_0x18ad19(0x5c2)+'ff)'),_0x4143f8['JCzJM']),_0x13efd8[_0x18ad19(0x2f9)+'oaded']?_0x4143f8[_0x18ad19(0x5af)]:_0x4143f8[_0x18ad19(0x1b6)]),_0x4143f8['rGUoV']),_0x564e78[_0x18ad19(0x269)+'ers']?_0x4143f8['agfhe']:_0x18ad19(0x539))+('\x20|\x20mo'+_0x18ad19(0x153)+'t\x20')+(_0x48cefd[_0x18ad19(0xa7)+'ents']?'held':_0x4143f8[_0x18ad19(0x2e7)]),_0xdab890[_0x18ad19(0x47a)+_0x18ad19(0x1c9)]?_0x4143f8[_0x18ad19(0x543)]+_0x379f40['lastE'+'rror']:''):_0x4143f8['eZbnC'];}catch(_0x4ae479){}},0x138c+-0x25c5*0x1+0xb*0x203);var _0x3f5e4e=new Set(),_0x468c55={0x1:[],0x3:[]},_0xcab805=![];function _0x1019be(_0x4bd8cd){var _0xb48cad=_0xc1539c;if(_0x1eb54c[_0xb48cad(0x1ec)]!==_0xb48cad(0x352))_0x3f5e4e['add'](_0x4bd8cd['code']);else{var _0x53f6f5=(_0xb48cad(0x326)+'|1|2|'+_0xb48cad(0x1d9))[_0xb48cad(0x50e)]('|'),_0x4a1ade=0x7da*0x3+-0x2*0xdd7+0x420;while(!![]){switch(_0x53f6f5[_0x4a1ade++]){case'0':var _0xf65882=_0x3a10b1['creat'+'eElem'+_0xb48cad(0x37e)]('div');continue;case'1':_0x33384f[_0xb48cad(0xb9)+'Name']=_0x1eb54c[_0xb48cad(0xae)];continue;case'2':_0x33384f[_0xb48cad(0x629)+_0xb48cad(0x16b)+'t']=_0x5af9eb;continue;case'3':var _0x33384f=_0x3817a1[_0xb48cad(0x486)+_0xb48cad(0x141)+_0xb48cad(0x37e)](_0x1eb54c[_0xb48cad(0x47d)]);continue;case'4':_0xf65882[_0xb48cad(0x4b3)+_0xb48cad(0x590)+'d'](_0x33384f);continue;case'5':_0x4c08f5['appen'+_0xb48cad(0x590)+'d'](_0xf65882);continue;case'6':_0xf65882['class'+_0xb48cad(0x255)]=_0xb48cad(0x4d7)+_0xb48cad(0x21c);continue;case'7':for(var _0x3be5d4 of _0x4fe80c)_0xf65882[_0xb48cad(0x4b3)+_0xb48cad(0x590)+'d'](_0x3be5d4);continue;}break;}}}function _0x1aebe5(_0x540eec){var _0x881ecd=_0xc1539c;_0x3f5e4e[_0x881ecd(0x5a9)+'e'](_0x540eec['code']);}function _0x2dc437(_0x54b117){var _0x111e79=_0xc1539c,_0x1caacb={'eHjVT':'f32','IAnUh':function(_0x40b5e3,_0x24f75b,_0x39c851,_0x1d47fd,_0x353190){return _0x40b5e3(_0x24f75b,_0x39c851,_0x1d47fd,_0x353190);}};if(_0x1eb54c['WmCud'](_0x111e79(0x347),'Tldup'))_0x4d510a(_0x36a562,0x1*-0x14c6+-0x921*0x4+0x6*0x993,'f32',_0x469da7),_0x532ede(_0xa84ce6,-0x1ee3+0x5*-0xf8+0x23e7,_0x1caacb[_0x111e79(0x3e4)],_0x70aec0),_0x559501(_0x548c46,-0x6*0x10c+0x4*0x6cb+0xa*-0x212,_0x111e79(0x390),_0x5a2d8e),_0x5bff5f(_0x404b90,-0x4*0x80b+0x1b09+0x557,_0x111e79(0x390),_0x3f9f5b),_0x1caacb[_0x111e79(0x320)](_0x267bc2,_0x1e5a32,0x65f*-0x5+0xd63+0x1294,'f32',_0x59f836),_0x329b2e(_0x11657f,0x14ad+-0x1816+0x389,_0x111e79(0x390),_0x479610);else{if(_0x54b117[_0x111e79(0x143)+'ura'])return;_0x3f5e4e[_0x111e79(0x511)](_0x1eb54c[_0x111e79(0x2b0)](_0x111e79(0x48d),_0x1eb54c[_0x111e79(0x43d)](_0x54b117[_0x111e79(0x265)+'n'],0x13*0x103+0x24d9*-0x1+0x11a1)));var _0x1307d6=_0x468c55[_0x54b117[_0x111e79(0x265)+'n']+(0xfb5+-0x2190+0x11dc)];if(_0x1307d6){_0x1307d6[_0x111e79(0x56a)](performance[_0x111e79(0x2e0)]());if(_0x1eb54c[_0x111e79(0x3b6)](_0x1307d6['lengt'+'h'],0x178a+0x73*-0x3d+0x405))_0x1307d6['shift']();}}}function _0x317b38(_0x5c644b){var _0x39481f=_0xc1539c;if('JZSdQ'!==_0x39481f(0x408)){if(!_0x5c644b['__sak'+_0x39481f(0x5d5)])_0x3f5e4e[_0x39481f(0x5a9)+'e'](_0x1eb54c['xlNvy']+(_0x5c644b[_0x39481f(0x265)+'n']+(-0x29*-0x8d+0x21aa+-0x1c1f*0x2)));}else _0x53447c=_0x17f5ef['parse'](_0x207561['getIt'+'em'](_0x39481f(0x550)+'a.kou'+'r.ui.'+'v1')||'{}');}function _0x10b64d(){_0x3f5e4e['clear']();}function _0x2d51b7(){var _0x31f8a3=_0xc1539c;if(_0x1eb54c['EgBaB'](_0x31f8a3(0x109),_0x1eb54c['iFLFt'])){if(!_0x6d61c[_0x31f8a3(0x143)+'ura'])_0x1cc6ea[_0x31f8a3(0x5a9)+'e'](_0x1eb54c[_0x31f8a3(0x4f7)](_0x1eb54c['xlNvy'],_0x297475['butto'+'n']+(-0x1*0x1cf7+-0x1cd4+0x39cc)));}else{var _0x561f6d=_0x1eb54c['iuHsG']['split']('|'),_0x59dfde=-0x22d6*-0x1+-0x7*0x429+-0x5b7;while(!![]){switch(_0x561f6d[_0x59dfde++]){case'0':if(_0xcab805)return;continue;case'1':window[_0x31f8a3(0x4e2)+_0x31f8a3(0x75)+'stene'+'r'](_0x1eb54c[_0x31f8a3(0x5d8)],_0x2dc437,!![]);continue;case'2':_0xcab805=!![];continue;case'3':window[_0x31f8a3(0x4e2)+'entLi'+_0x31f8a3(0xd6)+'r'](_0x1eb54c[_0x31f8a3(0x381)],_0x10b64d);continue;case'4':window[_0x31f8a3(0x4e2)+_0x31f8a3(0x75)+'stene'+'r'](_0x1eb54c['ozqAn'],_0x317b38,!![]);continue;case'5':window[_0x31f8a3(0x4e2)+_0x31f8a3(0x75)+_0x31f8a3(0xd6)+'r'](_0x31f8a3(0x387),_0x1aebe5,!![]);continue;case'6':window[_0x31f8a3(0x4e2)+'entLi'+_0x31f8a3(0xd6)+'r'](_0x31f8a3(0x38c)+'wn',_0x1019be,!![]);continue;}break;}}}function _0x51fe85(_0x2ae0b5){var _0x3d0c18=_0xc1539c;if(_0x1eb54c['UnVwk']===_0x1eb54c[_0x3d0c18(0x33e)])_0x4aac2c(!_0x43f8df);else{var _0x4def61=_0x468c55[_0x2ae0b5]||[],_0x40c5a8=performance[_0x3d0c18(0x2e0)]();while(_0x4def61[_0x3d0c18(0x16f)+'h']&&_0x1eb54c['XvCup'](_0x40c5a8,_0x4def61[0x1cd+-0x25c2+-0x1*-0x23f5])>-0x216a+-0x990+-0x22*-0x161)_0x4def61[_0x3d0c18(0x3b8)]();return _0x4def61['lengt'+'h'];}}function _0x1e1af4(_0x4d4278){var _0x189361=_0xc1539c;if(document['body']&&(document[_0x189361(0x366)+_0x189361(0x5e6)]===_0x1eb54c[_0x189361(0x328)]||document[_0x189361(0x366)+_0x189361(0x5e6)]==='compl'+'ete'))_0x1eb54c['ayNsf'](_0x4d4278);else document['addEv'+'entLi'+_0x189361(0xd6)+'r'](_0x189361(0xf0)+'ntent'+_0x189361(0x28f)+'d',_0x4d4278,{'once':!![]});}_0x1e1af4(()=>{var _0x2eae1f=_0xc1539c,_0x421c32={'jVKOP':_0x1eb54c['kPmzE'],'OKSSu':_0x2eae1f(0x262)+_0x2eae1f(0x17e)+_0x2eae1f(0x425)+'Rate','HCiEw':_0x1eb54c['vdgOR'],'oxUvK':'rgba('+'255,2'+'35,24'+'0,0.8'+')','KbYuN':_0x2eae1f(0x19d)+'r','ewAmo':_0x1eb54c['VTIhD'],'UDnuU':function(_0x3e3007,_0x27f73f){return _0x3e3007+_0x27f73f;},'vbYuC':function(_0x21ba03,_0xb02817){return _0x21ba03/_0xb02817;},'FQeXc':function(_0x2ee51a,_0x70aceb){var _0x4e15d3=_0x2eae1f;return _0x1eb54c[_0x4e15d3(0x2a7)](_0x2ee51a,_0x70aceb);},'VMwmP':function(_0x16a6c0,_0x21eeeb){var _0xf3c285=_0x2eae1f;return _0x1eb54c[_0xf3c285(0x9f)](_0x16a6c0,_0x21eeeb);},'BVnhA':_0x1eb54c[_0x2eae1f(0x4bb)],'Hgwla':_0x1eb54c['ZjZlf'],'YwWKT':function(_0x570111,_0x46ab52){var _0x5bcdca=_0x2eae1f;return _0x1eb54c[_0x5bcdca(0x77)](_0x570111,_0x46ab52);},'QHMuf':_0x2eae1f(0x2ae),'LHczK':function(_0x1e9d7b,_0x13efd2){var _0x195bf0=_0x2eae1f;return _0x1eb54c[_0x195bf0(0xd3)](_0x1e9d7b,_0x13efd2);},'qapcY':function(_0x192745,_0x1202b8){var _0x134638=_0x2eae1f;return _0x1eb54c[_0x134638(0x563)](_0x192745,_0x1202b8);},'jpEkx':function(_0x3f6519,_0x1209d9){var _0x55e06a=_0x2eae1f;return _0x1eb54c[_0x55e06a(0x4bc)](_0x3f6519,_0x1209d9);},'Ypnbt':function(_0x4a8498,_0x236f0e){return _0x4a8498>=_0x236f0e;},'ORDcD':function(_0x5786fc,_0x2d090f){return _0x5786fc-_0x2d090f;},'uAQcR':function(_0x3cd9bf,_0x22552d){var _0x290137=_0x2eae1f;return _0x1eb54c[_0x290137(0x249)](_0x3cd9bf,_0x22552d);},'UFfpc':_0x1eb54c['ouqQv'],'UcmvN':function(_0x566312,_0x10210e){return _0x566312*_0x10210e;},'JQjXe':function(_0xf1cc3b){var _0x46057b=_0x2eae1f;return _0x1eb54c[_0x46057b(0x612)](_0xf1cc3b);},'pcapI':function(_0x29380e){var _0x46cd0b=_0x2eae1f;return _0x1eb54c[_0x46cd0b(0x612)](_0x29380e);},'hRbUN':function(_0x1b223a,_0x3554e8){return _0x1b223a||_0x3554e8;},'bmKDc':_0x2eae1f(0x364)+_0x2eae1f(0x98)+'35,24'+_0x2eae1f(0x57e)+'5)','nxDzZ':function(_0x561f54,_0x387d41){return _0x1eb54c['jjBAz'](_0x561f54,_0x387d41);},'BdevC':_0x1eb54c[_0x2eae1f(0x34f)],'xTSzv':_0x1eb54c[_0x2eae1f(0x193)],'xIeaC':_0x1eb54c[_0x2eae1f(0x293)],'Kkoxx':_0x2eae1f(0x416),'bQdaW':_0x1eb54c[_0x2eae1f(0xf6)],'lgiNl':function(_0x7d0460,_0x1c861c){return _0x1eb54c['EbShv'](_0x7d0460,_0x1c861c);},'OtWlS':'#ff6b'+'9d','sZtxS':'5|3|0'+_0x2eae1f(0x14a)+'1','COQqA':'sk-bt'+'n','LIoxZ':_0x2eae1f(0x265)+'n','UpCPx':'jMiLu','Aortn':_0x2eae1f(0x49d),'nRPWZ':_0x2eae1f(0x3e0)+'itch','hdirb':_0x1eb54c['VebUu'],'LFJys':_0x2eae1f(0x23d)+'h','PHlkq':_0x1eb54c[_0x2eae1f(0x322)],'zIUds':_0x1eb54c[_0x2eae1f(0x47d)],'zYWHV':_0x2eae1f(0x11c)+'g','QuxOq':_0x1eb54c[_0x2eae1f(0x32e)],'BNuhs':_0x2eae1f(0x5f8)+'esc','zlbAx':'SAFE\x20'+_0x2eae1f(0x49f)+_0x2eae1f(0x1b5)+'rlay\x20'+_0x2eae1f(0x285)+'\x20no\x20h'+_0x2eae1f(0x3ee)+'(relo'+'ad\x20to'+'\x20exit'+')','xRfER':function(_0x554faf,_0x27f02d){return _0x554faf+_0x27f02d;},'SpUbT':_0x1eb54c[_0x2eae1f(0x225)],'mpqcL':_0x1eb54c['KIFNh'],'nyBPL':'\x20|\x20sh'+'ooter'+'\x20','zIWjO':'held','vkQOd':_0x2eae1f(0x539),'HftrR':_0x1eb54c[_0x2eae1f(0x274)],'qmCHj':'Statu'+'s','wdsyG':function(_0x410f02,_0x822f8f,_0x2603c4,_0x402cff){var _0x58d32a=_0x2eae1f;return _0x1eb54c[_0x58d32a(0x3c8)](_0x410f02,_0x822f8f,_0x2603c4,_0x402cff);},'dmjxx':'240\x20F'+'PS\x20un'+_0x2eae1f(0x30e),'RPyQl':_0x1eb54c[_0x2eae1f(0x42e)],'GjBrM':function(_0x465eee){return _0x465eee();},'gnovH':'CWkJf','tkirB':function(_0x1e8b94,_0x9b09b9){return _0x1e8b94===_0x9b09b9;},'dvtas':_0x2eae1f(0x2d0),'wTKDZ':function(_0x59de75){var _0x101196=_0x2eae1f;return _0x1eb54c[_0x101196(0x1bf)](_0x59de75);},'ZhmuB':_0x2eae1f(0x1e8),'Ffiad':'ZMEZQ','nksIS':function(_0x5a0988){return _0x1eb54c['ZBmje'](_0x5a0988);},'uNvBy':_0x2eae1f(0xe1),'CgOlo':function(_0x5dedd7,_0x4b9afd,_0x53ea70){return _0x5dedd7(_0x4b9afd,_0x53ea70);},'GoKXc':_0x2eae1f(0x12d),'RTLGJ':function(_0x10d89f,_0x3b62cc,_0x234517,_0x4213bb,_0x4e6ced,_0x52930e){var _0x1c24fc=_0x2eae1f;return _0x1eb54c[_0x1c24fc(0x1df)](_0x10d89f,_0x3b62cc,_0x234517,_0x4213bb,_0x4e6ced,_0x52930e);},'ZfVwU':_0x1eb54c['fVhfF'],'xeXBh':_0x2eae1f(0x2e9)+'s\x20spr'+_0x2eae1f(0x3cd)+_0x2eae1f(0x342)+_0x2eae1f(0x556)+_0x2eae1f(0x89)+_0x2eae1f(0x4ee)+'\x20your'+'\x20weap'+_0x2eae1f(0x504)+'ery\x202'+'00ms.','ifVLm':function(_0x37acf5,_0x174122,_0x327254,_0x4d227a,_0x179b2a,_0x3ebf48){return _0x37acf5(_0x174122,_0x327254,_0x4d227a,_0x179b2a,_0x3ebf48);},'dzJLc':_0x1eb54c[_0x2eae1f(0xca)],'LMgyv':function(_0x469927,_0x305e7f,_0x220475,_0xe0297a){return _0x469927(_0x305e7f,_0x220475,_0xe0297a);},'AWjEb':function(_0x1e0e97,_0x3994e7,_0x28b2fc,_0x352be4,_0x2446ad,_0x276cca){return _0x1e0e97(_0x3994e7,_0x28b2fc,_0x352be4,_0x2446ad,_0x276cca);},'MvWro':_0x1eb54c[_0x2eae1f(0x52d)],'jatXh':_0x2eae1f(0x316)+_0x2eae1f(0x176)+_0x2eae1f(0x230),'qxJCd':function(_0x4cde48,_0x37b88d,_0x5b97bd,_0xca117d,_0x2c9ba1,_0x16ba70){var _0x412ad5=_0x2eae1f;return _0x1eb54c[_0x412ad5(0x1df)](_0x4cde48,_0x37b88d,_0x5b97bd,_0xca117d,_0x2c9ba1,_0x16ba70);},'askpQ':_0x2eae1f(0x4b8)+'/\x20Gra'+'vity','XXbOA':'lower'+'\x20=\x20fl'+'oaty','AmBel':function(_0x18207e,_0x2428cd){var _0x18b5a4=_0x2eae1f;return _0x1eb54c[_0x18b5a4(0x589)](_0x18207e,_0x2428cd);},'tmUyl':function(_0x7ac862,_0x5bc1d4,_0x19441f,_0x69afbe,_0x5a38c6,_0xe55fc0){return _0x7ac862(_0x5bc1d4,_0x19441f,_0x69afbe,_0x5a38c6,_0xe55fc0);},'LLNQY':_0x1eb54c[_0x2eae1f(0x31a)],'SgRzq':function(_0x198376,_0x2e1608,_0x3f3296,_0x25ecf0){return _0x1eb54c['qdDGZ'](_0x198376,_0x2e1608,_0x3f3296,_0x25ecf0);},'heQve':'CPS\x20r'+_0x2eae1f(0x2ad)+'t','iZNwx':function(_0x2aa4fa,_0x286f1a,_0xb08a24){var _0x2b3abf=_0x2eae1f;return _0x1eb54c[_0x2b3abf(0x2a8)](_0x2aa4fa,_0x286f1a,_0xb08a24);},'FIxDi':function(_0x48a66e,_0x3f2453,_0x13422a,_0x5123bc){var _0x528725=_0x2eae1f;return _0x1eb54c[_0x528725(0x2e3)](_0x48a66e,_0x3f2453,_0x13422a,_0x5123bc);},'AftVX':_0x2eae1f(0x1ce),'ydKXO':function(_0x2aef4d,_0x39d24c,_0x314deb,_0xf13d34,_0x514ae8,_0x27b54b){return _0x2aef4d(_0x39d24c,_0x314deb,_0xf13d34,_0x514ae8,_0x27b54b);},'WGnnP':'Count'+_0x2eae1f(0x1e1),'xXXUR':function(_0x3197fe,_0x3839a4,_0x42abc5,_0x1f6953){return _0x3197fe(_0x3839a4,_0x42abc5,_0x1f6953);},'cPNic':_0x1eb54c[_0x2eae1f(0x40d)],'MhVky':_0x1eb54c[_0x2eae1f(0x5c9)],'djxGA':function(_0x38f372,_0x7bb61f){var _0x52ce17=_0x2eae1f;return _0x1eb54c[_0x52ce17(0x3d4)](_0x38f372,_0x7bb61f);},'dDsYz':_0x2eae1f(0x288)+'es\x20on'+'\x20relo'+_0x2eae1f(0x28d),'DJxbJ':_0x2eae1f(0x3ff)+_0x2eae1f(0x12a)+_0x2eae1f(0x611)+_0x2eae1f(0x370)+'lDie)','tHQrx':_0x2eae1f(0x321)+'oil\x20('+'Recoi'+_0x2eae1f(0xe3)+_0x2eae1f(0x464)+_0x2eae1f(0x2df),'MhPCb':function(_0x2c3a2a,_0x1869bf,_0x4342cb){return _0x2c3a2a(_0x1869bf,_0x4342cb);},'JVQDk':_0x2eae1f(0x186)+_0x2eae1f(0x371)+'work\x20'+_0x2eae1f(0x54f)+_0x2eae1f(0xf5)+'is','UKzCa':function(_0x369b49,_0x27afc3,_0xe19be7,_0x483aa0,_0x1ce212,_0x5183e1){return _0x369b49(_0x27afc3,_0xe19be7,_0x483aa0,_0x1ce212,_0x5183e1);},'tCvdC':'Disab'+'les\x20C'+'odeSt'+_0x2eae1f(0x238)+'etect'+_0x2eae1f(0x192)+'t\x20sta'+_0x2eae1f(0x5e0)+_0x2eae1f(0x33b)+'topDe'+'tecti'+_0x2eae1f(0x3bd)+'\x20Keep'+'\x20ON.','oMbSu':'God/d'+_0x2eae1f(0x59b)+_0x2eae1f(0x422)+'d\x20gre'+_0x2eae1f(0x318)+_0x2eae1f(0x62a)+'\x20ban\x20'+_0x2eae1f(0x4e1)+_0x2eae1f(0x3c5)+'with\x20'+_0x2eae1f(0x3be)+_0x2eae1f(0x55d),'soNHV':function(_0x12e74b,_0x5e4140,_0x8c70e2,_0x162c9a,_0x44a22f,_0x291931){return _0x12e74b(_0x5e4140,_0x8c70e2,_0x162c9a,_0x44a22f,_0x291931);},'igfKv':_0x2eae1f(0x3a9)+_0x2eae1f(0x461)+'e\x20ser'+'ver-v'+'isibl'+_0x2eae1f(0x203)+_0x2eae1f(0x5f4),'bzCDc':function(_0x11f232,_0x284b2f,_0xae012b){return _0x1eb54c['NvkNb'](_0x11f232,_0x284b2f,_0xae012b);},'IFBPP':function(_0x34757e,_0x58b253){return _0x34757e<_0x58b253;},'yypcj':'.sk-m'+_0x2eae1f(0x4c3),'QWrnQ':_0x2eae1f(0x14e),'KQaOE':_0x1eb54c['cIzaE'],'bhqgy':function(_0x2da002,_0x2a198b){var _0x13cdcd=_0x2eae1f;return _0x1eb54c[_0x13cdcd(0x174)](_0x2da002,_0x2a198b);},'wXTQa':function(_0x2a2e2b,_0x38f108){return _0x2a2e2b+_0x38f108;},'CNals':function(_0x318c19,_0x4efa8a){var _0x9bdb41=_0x2eae1f;return _0x1eb54c[_0x9bdb41(0x485)](_0x318c19,_0x4efa8a);},'UyCCz':'\x20|\x20ga'+_0x2eae1f(0x159),'zTyFb':_0x1eb54c[_0x2eae1f(0x4ed)],'fmefq':_0x1eb54c[_0x2eae1f(0x60a)],'BjvDd':'Sakur'+_0x2eae1f(0x407)+'r\x20—\x20','PcyZK':_0x2eae1f(0x15f)+'in','nIemY':_0x2eae1f(0x4bf)+'r','mcoBQ':_0x1eb54c['lsaRI'],'elyyu':'mn-h','BJgbt':_0x1eb54c[_0x2eae1f(0x481)],'PIlpk':_0x1eb54c[_0x2eae1f(0x418)],'grkgv':'mn-su'+'b','rKizz':_0x2eae1f(0x1a6)+'ls','cpFRE':'6|4|0'+'|7|3|'+'2|1|5','TvQVE':function(_0x416e7d,_0x3dac57){return _0x416e7d+_0x3dac57;},'MoXXu':_0x1eb54c[_0x2eae1f(0x5cc)],'yPxzy':function(_0x17b7d3,_0x2a3a75,_0x4661eb){return _0x1eb54c['cUYGH'](_0x17b7d3,_0x2a3a75,_0x4661eb);},'FEdFt':function(_0x5705c4,_0x3bc851){return _0x1eb54c['txBMy'](_0x5705c4,_0x3bc851);},'aWeoU':function(_0x556610){return _0x556610();}};_0x16fada[_0x2eae1f(0x3cc)+'ck']&&setInterval(()=>{var _0x1aa5b4=_0x2eae1f,_0x49d2bf={'Nupyh':_0x1aa5b4(0x3ff)+'e'};if(_0x1eb54c[_0x1aa5b4(0x2f5)]===_0x1eb54c[_0x1aa5b4(0x2f5)])try{for(var _0x37b01b of['kour-'+'io_30'+_0x1aa5b4(0x5ca)+'-pare'+'nt',_0x1aa5b4(0x1f5)+'io_72'+'8x90-'+'paren'+'t',_0x1aa5b4(0x1f5)+_0x1aa5b4(0x206)+'0x600'+'-pare'+'nt',_0x1aa5b4(0x3f3)+'creen'+_0x1aa5b4(0x4fa)+'s']){var _0x3f32aa=document[_0x1aa5b4(0x22c)+_0x1aa5b4(0xdd)+'ById'](_0x37b01b);if(_0x3f32aa&&_0x1eb54c['EgBaB'](_0x37b01b,_0x1aa5b4(0x3f3)+'creen'+'-banr'+'s')){var _0x503bf0=_0x3f32aa[_0x1aa5b4(0xda)+_0x1aa5b4(0x379)];for(var _0x567bee=-0x1773+0x90c+0x3*0x4cd;_0x567bee<_0x503bf0[_0x1aa5b4(0x16f)+'h'];_0x567bee++){if(_0x1aa5b4(0x401)===_0x1aa5b4(0x401)){if(_0x503bf0[_0x567bee]['id']&&_0x503bf0[_0x567bee]['id'][_0x1aa5b4(0x5c0)+'Of'](_0x1aa5b4(0x1f5)+_0x1aa5b4(0x46b))===-0x22*-0x73+-0xb6*0x1+0x3a4*-0x4)_0x503bf0[_0x567bee]['style'][_0x1aa5b4(0x361)+'ay']=_0x1eb54c['GuxLM'];}else _0x2451c5[_0x1aa5b4(0x5dc)]=_0x2b03ce,_0x340249(),_0x46fcb0('god',_0x3f5504),_0x2c965c(_0x49d2bf[_0x1aa5b4(0x38d)],_0x3a953b);}}else{if(_0x3f32aa)_0x3f32aa['style'][_0x1aa5b4(0x361)+'ay']=_0x1eb54c['GuxLM'];}}}catch(_0x46f049){}else _0x1b0c86[_0x1aa5b4(0x5a9)+'e'](_0x3731fb[_0x1aa5b4(0x3e9)]);},-0xdcd+-0x1feb+-0x1ac4*-0x2);var _0x54365a=document['creat'+_0x2eae1f(0x141)+_0x2eae1f(0x37e)](_0x2eae1f(0x45d)+'s');_0x54365a['style']['cssTe'+'xt']=_0x2eae1f(0xa6)+'ion:f'+_0x2eae1f(0x90)+'inset'+_0x2eae1f(0x79)+'dth:1'+'00vw;'+_0x2eae1f(0x2b4)+_0x2eae1f(0x41b)+'vh;z-'+'index'+_0x2eae1f(0x403)+'48364'+_0x2eae1f(0x469)+_0x2eae1f(0x144)+_0x2eae1f(0x52b)+'s:non'+'e';var _0x43ef08=_0x54365a[_0x2eae1f(0x389)+'ntext']('2d');function _0x16b2b9(){var _0x570f91=_0x2eae1f;try{if(_0x570f91(0x5aa)!=='Lpvnq'){var _0x4ce90e=document[_0x570f91(0x3f3)+_0x570f91(0x29d)+'Eleme'+'nt'],_0x103bfe=_0x4ce90e&&_0x4ce90e['tagNa'+'me']!=='CANVA'+'S'?_0x4ce90e:document[_0x570f91(0x170)]||document[_0x570f91(0x474)+_0x570f91(0x19a)+_0x570f91(0xdd)];if(_0x54365a['paren'+_0x570f91(0xcf)]!==_0x103bfe)_0x103bfe['appen'+'dChil'+'d'](_0x54365a);}else _0x269786[_0x570f91(0x384)](_0x421c32[_0x570f91(0x5f9)],_0xe76db1&&_0x50824d['messa'+'ge']);}catch(_0x1044a8){try{document[_0x570f91(0x170)]['appen'+_0x570f91(0x590)+'d'](_0x54365a);}catch(_0x580ca5){}}}var _0x5c392d={'w':0x0,'h':0x0,'dpr':0x0};function _0x303e19(){var _0x4368f0=_0x2eae1f,_0x5772d3=window[_0x4368f0(0x4ae)+'ePixe'+'lRati'+'o']||0x2651+-0x2f3*-0x5+-0x1*0x350f,_0x269fc6=window[_0x4368f0(0x19b)+'Width'],_0x1f2e83=window['inner'+'Heigh'+'t'];if(_0x269fc6===_0x5c392d['w']&&_0x1eb54c[_0x4368f0(0x589)](_0x1f2e83,_0x5c392d['h'])&&_0x5772d3===_0x5c392d[_0x4368f0(0x2b3)])return;_0x5c392d['w']=_0x269fc6,_0x5c392d['h']=_0x1f2e83,_0x5c392d[_0x4368f0(0x2b3)]=_0x5772d3,_0x54365a['width']=Math[_0x4368f0(0x31f)](_0x269fc6*_0x5772d3),_0x54365a['heigh'+'t']=Math['round'](_0x1eb54c['upEEB'](_0x1f2e83,_0x5772d3)),_0x43ef08[_0x4368f0(0x185)+'ansfo'+'rm'](_0x5772d3,-0x224*-0x4+-0x1*-0xd4f+-0x15df,-0x1740+0xd*0x68+0x11f8,_0x5772d3,0x1932+-0x1d46+0x74*0x9,0xce5*0x1+0x1f9+-0xede);}var _0x524033=-0x2076+0x11b0+0xec6,_0x4b116f=performance[_0x2eae1f(0x2e0)](),_0x342e04=-0x5*-0x416+-0x58b+-0xee3;function _0x408572(_0x491a56){var _0x29f04e=_0x2eae1f,_0x2cc6f0={'vRLJt':'god','AnJQk':_0x1eb54c[_0x29f04e(0x2f0)],'drGjD':_0x29f04e(0xa5)+_0x29f04e(0x35e),'kHGRf':_0x29f04e(0x4ca),'uEGuH':function(_0x41dd40,_0x1fe95f,_0x2ec172,_0x3a52ea,_0x1918b9,_0x478b5b,_0x241757,_0x2ba597){return _0x41dd40(_0x1fe95f,_0x2ec172,_0x3a52ea,_0x1918b9,_0x478b5b,_0x241757,_0x2ba597);},'uzlGR':_0x29f04e(0x19e)+'ooter','OAxiL':_0x29f04e(0x488)+'meRun'+'ning','fxaWg':function(_0x266d68,_0x16197e,_0x2c058c,_0x38c116,_0x595941,_0x1bfbff,_0x2c2288,_0xa65208){return _0x266d68(_0x16197e,_0x2c058c,_0x38c116,_0x595941,_0x1bfbff,_0x2c2288,_0xa65208);},'XhJZM':'IsGro'+_0x29f04e(0x8f)};if(_0x1eb54c[_0x29f04e(0x287)](_0x1eb54c['xzWUi'],_0x1eb54c['xzWUi']))try{if(_0x4164c4)_0xe3847b['call'](_0x29f04e(0x46e)+'Engin'+_0x29f04e(0x51c)+_0x29f04e(0x165)+_0x29f04e(0x3af),_0x421c32[_0x29f04e(0x544)],[-0x1abb+0x789+0x6*0x35b]);}catch(_0x59ee19){}else{var _0x5813c6=Number(_0x16fada['ksSca'+'le'])||-0x1*0x24e2+-0x8e7+0x2dca,_0xaa7d8a=(0x11d1*-0x1+0x1305+-0x112)*_0x5813c6,_0x14ce0d=(0x449*0x5+-0x1be*0x14+-0x1*-0xd6f)*_0x5813c6,_0x598198=_0xaa7d8a*(-0x12ca+0x5*0x14b+0xc56)+_0x1eb54c['dnDEa'](_0x14ce0d,-0x1*0x14f1+-0x395+0x1888),_0x351f9c=_0xaa7d8a*(0x1021*-0x2+-0x2249+-0x4c1*-0xe)+_0x1eb54c[_0x29f04e(0x77)](_0x14ce0d,-0xd8e+-0x358+0x10e8),_0x5d23ec=_0x16fada[_0x29f04e(0x1aa)],_0x491c3c=_0x1eb54c[_0x29f04e(0x83)](_0x5d23ec,'br')?_0x1eb54c[_0x29f04e(0x3a2)](_0x491a56['right'],0x7*0xb+-0x5*0x302+-0x1a5*-0x9)-_0x598198:_0x491a56[_0x29f04e(0x4a1)]+(0x13c0+0x5*-0x4ae+0x3b6),_0x13d537=_0x5d23ec==='ml'?_0x1eb54c[_0x29f04e(0x3a2)](_0x491a56[_0x29f04e(0x2ed)]+_0x1eb54c[_0x29f04e(0x4a3)](_0x491a56['heigh'+'t'],-0x117e*0x2+0x25de+-0x2e0),_0x1eb54c[_0x29f04e(0x35a)](_0x351f9c,-0x1*-0xa16+-0x4e+-0x9c6)):_0x1eb54c[_0x29f04e(0x3a2)](_0x491a56[_0x29f04e(0x324)+'m']-_0x351f9c,_0x5d23ec==='bl'?-0x236e*0x1+0x42*0x32+0x1*0x16ea:0x1415+-0x18a1+0x522),_0x53b4cf=(_0x21ab73,_0x1ee359,_0x3f2d05,_0x241283,_0x570ba8,_0x292c68,_0x2c0833)=>{var _0x4ff853=_0x29f04e,_0x5f056d=_0x3f5e4e['has'](_0x1ee359);_0x43ef08['save'](),_0x43ef08[_0x4ff853(0x2cf)+'Path']();if(_0x43ef08[_0x4ff853(0x31f)+_0x4ff853(0x5f3)])_0x43ef08[_0x4ff853(0x31f)+_0x4ff853(0x5f3)](_0x3f2d05,_0x241283,_0x570ba8,_0x292c68,(0x1b7f*0x1+0x1*-0x515+-0x1663*0x1)*_0x5813c6);else _0x43ef08[_0x4ff853(0x113)](_0x3f2d05,_0x241283,_0x570ba8,_0x292c68);_0x43ef08[_0x4ff853(0x50c)+_0x4ff853(0x17f)]=_0x5f056d?_0x4ff853(0x364)+_0x4ff853(0x56b)+_0x4ff853(0x2a9)+'7,0.8'+'5)':_0x421c32[_0x4ff853(0x86)],_0x43ef08[_0x4ff853(0xde)](),_0x43ef08[_0x4ff853(0x2b5)+'idth']=-0x121e+-0x121c*-0x2+-0x1219,_0x43ef08['strok'+'eStyl'+'e']=_0x5f056d?_0x46e86a:_0x4ff853(0x364)+_0x4ff853(0x56b)+_0x4ff853(0x2a9)+_0x4ff853(0x512)+'5)',_0x43ef08[_0x4ff853(0x4b5)+'e']();_0x5f056d&&(_0x43ef08['shado'+_0x4ff853(0x373)+'r']=_0x2ad004,_0x43ef08[_0x4ff853(0x545)+_0x4ff853(0x2ca)]=-0x246f+-0x3*0x676+0x1*0x37df,_0x43ef08[_0x4ff853(0xde)](),_0x43ef08['shado'+_0x4ff853(0x2ca)]=0x1604+0x148b+-0x2a8f);_0x43ef08[_0x4ff853(0x50c)+_0x4ff853(0x17f)]=_0x5f056d?_0x4ff853(0x2ae):_0x421c32[_0x4ff853(0x5b5)],_0x43ef08[_0x4ff853(0x131)+_0x4ff853(0x4d0)]=_0x421c32[_0x4ff853(0x95)],_0x43ef08[_0x4ff853(0x1b2)+_0x4ff853(0x18a)+'ne']=_0x4ff853(0x2c3)+'e',_0x43ef08['font']='700\x20'+Math['round']((0x1a2b+0x1eaf+-0x38ce)*_0x5813c6)+_0x421c32['ewAmo'],_0x43ef08[_0x4ff853(0xd5)+'ext'](_0x21ab73,_0x421c32['UDnuU'](_0x3f2d05,_0x421c32['vbYuC'](_0x570ba8,0x656+-0xe86+0x832)),_0x421c32[_0x4ff853(0x5d7)](_0x241283,_0x292c68/(-0x3fd+-0x25*-0xdf+-0x1c3c))-(_0x2c0833?(-0x1dfa+-0x216b+0x3f6a)*_0x5813c6:-0x23a5+0x51+-0x214*-0x11));if(_0x2c0833){if(_0x421c32[_0x4ff853(0xbd)](_0x4ff853(0x44b),_0x421c32[_0x4ff853(0x30a)])){if(_0x58a865['Unity'+'WebMo'+_0x4ff853(0x1f1)]&&!_0x7529e2['safeM'+_0x4ff853(0x250)]){_0x43aebd=_0x4a4576[_0x4ff853(0x46e)+_0x4ff853(0x4c7)+_0x4ff853(0x1f1)]['Value'+'Wrapp'+'er'],_0x213b6c=_0x2673e4[_0x4ff853(0x46e)+'WebMo'+_0x4ff853(0x1f1)][_0x4ff853(0x5d4)+'me']['creat'+_0x4ff853(0x557)+'in']({'name':_0x4ff853(0x189)+'aKour','version':_0x4ff853(0x51e),'referencedAssemblies':[_0x4ff853(0x47e)+'bly-C'+_0x4ff853(0x14c)+_0x4ff853(0x560)]});if(_0x4290ad['hookG'+'od'])_0x5b173b(_0x2cc6f0[_0x4ff853(0x4df)],'OHeal'+'th',_0x4ff853(0x58d)+_0x4ff853(0x313)+_0x4ff853(0x19f)+_0x4ff853(0x46a),['i32',_0x4ff853(0x4ca)],_0x18eb38,_0x3e3ec1,!!_0x2beea0['god']);if(_0x191db4[_0x4ff853(0x1a4)+'odDie'])_0x14fa7c(_0x2cc6f0['AnJQk'],'OHeal'+'th',_0x2cc6f0[_0x4ff853(0x30f)],[_0x4ff853(0x4ca),_0x4ff853(0x4ca),_0x2cc6f0[_0x4ff853(0x5e8)],'i32','i32'],_0x2a0b20,_0xe6f5cf,!!_0x490f1f[_0x4ff853(0x5dc)]);if(_0x4247db[_0x4ff853(0x4fe)+'oReco'+'il'])_0x1958c9('noRec'+_0x4ff853(0x1d7),'Legio'+_0x4ff853(0x1c4)+_0x4ff853(0x3d3)+_0x4ff853(0x37b)+_0x4ff853(0x3ab)+_0x4ff853(0x266)+'lMoti'+'on',_0x4ff853(0x32f),[_0x2cc6f0['kHGRf']],_0x9b9954,_0x296d0a,!!_0x4b64ae['noRec'+'oil']);if(_0x56478b['hookC'+_0x4ff853(0x136)+'e'])_0x2cc6f0['uEGuH'](_0x2c1450,_0x2cc6f0[_0x4ff853(0x4d5)],'OShoo'+_0x4ff853(0x39b),_0x2cc6f0[_0x4ff853(0x34a)],[_0x2cc6f0['kHGRf'],'i32'],_0x48e9ae,(_0x12dc66,_0x4ba370)=>{var _0x30d1e6=_0x4ff853;_0x4b10b1(_0x5868d1,_0x4ba370,_0x426edb,'shoot'+_0x30d1e6(0x1e1));},!![]);if(_0x3728bc['hookC'+_0x4ff853(0x136)+'e'])_0x2cc6f0[_0x4ff853(0x538)](_0xeda6ed,_0x4ff853(0x187)+'ve',_0x4ff853(0x522)+'nPlat'+_0x4ff853(0x3d3)+'.Over'+_0x4ff853(0x3ab)+_0x4ff853(0x444)+_0x4ff853(0x37e),_0x2cc6f0[_0x4ff853(0x118)],[_0x4ff853(0x4ca)],_0x4ff853(0x4ca),(_0x368968,_0x1d09eb)=>{var _0x446571=_0x4ff853;_0x29c453(_0x486963,_0x1d09eb,_0x3f52f5,_0x446571(0xa7)+'ents');},!![]);}}else _0x43ef08['font']=_0x421c32['Hgwla']+Math[_0x4ff853(0x31f)](_0x421c32['YwWKT'](-0x7d1+0x4bd*0x5+-0xfd7,_0x5813c6))+('px\x20ui'+'-sans'+'-seri'+_0x4ff853(0x5fc)+'tem-u'+'i,san'+_0x4ff853(0x40b)+'if'),_0x43ef08['fillS'+_0x4ff853(0x17f)]=_0x5f056d?_0x421c32[_0x4ff853(0x151)]:'rgba('+'255,2'+_0x4ff853(0x3db)+_0x4ff853(0x5ce)+'5)',_0x43ef08['fillT'+_0x4ff853(0x35b)](_0x2c0833,_0x3f2d05+_0x421c32['LHczK'](_0x570ba8,-0x1e9*0x13+-0xcfa+0x3147),_0x421c32['UDnuU'](_0x241283+_0x292c68/(-0x1af*-0xd+0x2542+-0x3b23),_0x421c32['qapcY'](-0x2263*0x1+0x588*-0x3+0x9*0x5ab,_0x5813c6)));}_0x43ef08[_0x4ff853(0x4a0)+'re']();};_0x53b4cf('W',_0x29f04e(0x1b0),_0x1eb54c['wAzBn'](_0x491c3c,_0xaa7d8a)+_0x14ce0d,_0x13d537,_0xaa7d8a,_0xaa7d8a),_0x53b4cf('A',_0x29f04e(0xb6),_0x491c3c,_0x1eb54c['YeVIp'](_0x13d537+_0xaa7d8a,_0x14ce0d),_0xaa7d8a,_0xaa7d8a),_0x1eb54c[_0x29f04e(0x4ba)](_0x53b4cf,'S','KeyS',_0x1eb54c[_0x29f04e(0x485)](_0x491c3c+_0xaa7d8a,_0x14ce0d),_0x1eb54c['rAHIQ'](_0x1eb54c[_0x29f04e(0x4f7)](_0x13d537,_0xaa7d8a),_0x14ce0d),_0xaa7d8a,_0xaa7d8a),_0x1eb54c['KEvhs'](_0x53b4cf,'D',_0x29f04e(0x335),_0x1eb54c['rAHIQ'](_0x491c3c,_0x1eb54c['TzMdQ'](_0xaa7d8a+_0x14ce0d,-0x1553+-0x43*-0x72+-0x881)),_0x1eb54c[_0x29f04e(0x8d)](_0x13d537,_0xaa7d8a)+_0x14ce0d,_0xaa7d8a,_0xaa7d8a);var _0x47d57d=_0x1eb54c[_0x29f04e(0x4c0)](_0x1eb54c[_0x29f04e(0x3a6)](_0x598198,_0x14ce0d),0xd30+-0x1a*-0x12e+-0x2bda),_0xdd4dd0=_0x13d537+_0x1eb54c['TzMdQ'](_0xaa7d8a+_0x14ce0d,-0x2583+0x20e4+0x4a1);_0x53b4cf(_0x29f04e(0x9c),_0x29f04e(0x48d)+'1',_0x491c3c,_0xdd4dd0,_0x47d57d,_0xaa7d8a,_0x16fada['ksCps']?_0x1eb54c[_0x29f04e(0x142)](_0x51fe85,-0x1ed6+0x20ab+-0x4*0x75)+'\x20CPS':''),_0x53b4cf(_0x29f04e(0x303),'mouse'+'3',_0x1eb54c[_0x29f04e(0x485)](_0x491c3c,_0x47d57d)+_0x14ce0d,_0xdd4dd0,_0x47d57d,_0xaa7d8a,_0x16fada[_0x29f04e(0x4b7)]?_0x1eb54c[_0x29f04e(0x4f1)](_0x51fe85,0xc66*-0x1+0x666+-0x1*-0x603)+_0x29f04e(0x190):''),_0x53b4cf('',_0x29f04e(0x1e3),_0x491c3c,_0xdd4dd0+_0xaa7d8a+_0x14ce0d,_0x598198,_0xaa7d8a*(0x1*-0x24cd+0x192+0x233b+0.45));}}function _0x57fdfb(_0x157c26){var _0x1f3124=_0x2eae1f;if(_0x1eb54c[_0x1f3124(0x74)](_0x1f3124(0x3b1),_0x1f3124(0x3b1))){var _0x4e573c=_0x157c26['width']/(-0x2*0x60c+-0x7*0x34e+0x8cf*0x4),_0x284048=_0x157c26['heigh'+'t']/(-0x1*0x1e06+-0x23d*-0x1+0x1*0x1bcb),_0x3fb359=_0x1eb54c[_0x1f3124(0x377)](Number,_0x16fada['chSiz'+'e'])||-0x1*0xec3+0x1*0x15c6+-0xd*0x8a,_0x313b04=/^#[0-9a-f]{6}$/i[_0x1f3124(0x438)](_0x16fada[_0x1f3124(0x38b)+'or'])?_0x16fada[_0x1f3124(0x38b)+'or']:'#ff6b'+'9d';_0x43ef08[_0x1f3124(0x12c)](),_0x43ef08[_0x1f3124(0x4b5)+_0x1f3124(0x5b7)+'e']=_0x313b04,_0x43ef08[_0x1f3124(0x50c)+'tyle']=_0x313b04,_0x43ef08[_0x1f3124(0x2b5)+_0x1f3124(0x44d)]=Math['max'](0x364+0x959*0x4+-0x1*0x28c7+0.5,(0x14d9+0xf15+-0x23ec)*_0x3fb359),_0x43ef08[_0x1f3124(0x545)+'wColo'+'r']=_0x313b04,_0x43ef08[_0x1f3124(0x545)+_0x1f3124(0x2ca)]=-0x2426+0x6b*-0x1+0x1*0x2497;var _0x2a9d02=(-0x2b0+0x19e1+-0x172b)*_0x3fb359,_0xc0559d=(-0xc7*-0x1c+0x9e*0x33+-0x2*0x1a9b)*_0x3fb359;_0x43ef08[_0x1f3124(0x2cf)+'Path'](),_0x43ef08['moveT'+'o'](_0x1eb54c['abmVd'](_0x4e573c,_0x2a9d02)-_0xc0559d,_0x284048),_0x43ef08[_0x1f3124(0x12f)+'o'](_0x1eb54c[_0x1f3124(0x627)](_0x4e573c,_0x2a9d02),_0x284048),_0x43ef08[_0x1f3124(0x28c)+'o'](_0x1eb54c[_0x1f3124(0x2fe)](_0x4e573c,_0x2a9d02),_0x284048),_0x43ef08[_0x1f3124(0x12f)+'o'](_0x1eb54c[_0x1f3124(0x492)](_0x1eb54c[_0x1f3124(0xec)](_0x4e573c,_0x2a9d02),_0xc0559d),_0x284048),_0x43ef08[_0x1f3124(0x28c)+'o'](_0x4e573c,_0x284048-_0x2a9d02-_0xc0559d),_0x43ef08[_0x1f3124(0x12f)+'o'](_0x4e573c,_0x284048-_0x2a9d02),_0x43ef08[_0x1f3124(0x28c)+'o'](_0x4e573c,_0x284048+_0x2a9d02),_0x43ef08[_0x1f3124(0x12f)+'o'](_0x4e573c,_0x1eb54c[_0x1f3124(0x10b)](_0x284048+_0x2a9d02,_0xc0559d)),_0x43ef08['strok'+'e'](),_0x43ef08[_0x1f3124(0x2cf)+_0x1f3124(0x419)](),_0x43ef08['arc'](_0x4e573c,_0x284048,_0x1eb54c[_0x1f3124(0x2ac)](0x1723+0x5e*0x48+-0x3192+0.6000000000000001,_0x3fb359),0x1*-0x2689+-0x7*0x4c6+-0x47f3*-0x1,Math['PI']*(0x3*-0x2d8+0x1b5*-0x4+0x119*0xe)),_0x43ef08[_0x1f3124(0xde)](),_0x43ef08['resto'+'re']();}else _0x4e5b45['class'+_0x1f3124(0x424)]['toggl'+'e']('on',_0x21fe4c),_0x18926e(_0x1f6cfc);}function _0x58ac06(_0x21cb31){var _0x776418=_0x2eae1f;_0x43ef08[_0x776418(0x12c)](),_0x43ef08[_0x776418(0x62f)]=_0x1eb54c['epusv'],_0x43ef08['textA'+'lign']=_0x1eb54c[_0x776418(0x3dc)],_0x43ef08[_0x776418(0x1b2)+_0x776418(0x18a)+'ne']=_0x776418(0x2ed);var _0x2c7b29=0x33+0xca*-0x22+0x1acd,_0x2ec5b9=-0x21a1+-0x47*0x59+0x3e4*0xf,_0x47c787=(_0xb3ceca,_0x5b9ba9)=>{var _0x20e7af=_0x776418;_0x43ef08['fillS'+'tyle']=_0x5b9ba9||_0x20e7af(0x364)+'255,2'+'35,24'+'0,0.7'+'5)',_0x43ef08[_0x20e7af(0xd5)+'ext'](_0xb3ceca,_0x2ec5b9,_0x2c7b29),_0x2c7b29+=-0x175d+0x23d5+-0xc68;};_0x47c787(_0x1eb54c[_0x776418(0x101)],_0x776418(0xcc)+'9d');if(_0x16fada['fps'])_0x47c787(_0x1eb54c[_0x776418(0x23b)](_0x342e04,_0x1eb54c[_0x776418(0x166)]));if(!_0x5c7d0e['gameL'+_0x776418(0x1bd)])_0x47c787(_0x1eb54c['TCGft'],'rgba('+_0x776418(0x56b)+_0x776418(0x43e)+'0,0.6'+')');_0x43ef08['resto'+'re']();}function _0x2a5d65(){var _0x534248=_0x2eae1f;_0x421c32[_0x534248(0x5d6)](requestAnimationFrame,_0x2a5d65),_0x524033++;var _0x555904=performance[_0x534248(0x2e0)]();_0x421c32['Ypnbt'](_0x421c32[_0x534248(0x18f)](_0x555904,_0x4b116f),0x1c89+-0x1*-0x247b+0x1*-0x3f10)&&(_0x421c32[_0x534248(0x9a)](_0x421c32['UFfpc'],_0x534248(0x505))?(_0x56ef4c['infAm'+_0x534248(0x2fd)]=_0x5b7dc7,_0x5a30e2()):(_0x342e04=Math[_0x534248(0x31f)](_0x421c32[_0x534248(0x146)](_0x524033,0x2cd*0x3+-0x127b+0xdfc)/_0x421c32[_0x534248(0x18f)](_0x555904,_0x4b116f)),_0x524033=0x17*-0xe3+0x5*-0xa1+-0x17*-0x106,_0x4b116f=_0x555904));_0x421c32[_0x534248(0x2ee)](_0x303e19),_0x421c32['pcapI'](_0x16b2b9),_0x43ef08[_0x534248(0x434)+'Rect'](-0x1*0x1a14+0x115+0x18ff,0x21cb+-0x1171+-0x105a,_0x5c392d['w'],_0x5c392d['h']);var _0x3a48b0={'left':0x0,'top':0x0,'right':_0x5c392d['w'],'bottom':_0x5c392d['h'],'width':_0x5c392d['w'],'height':_0x5c392d['h']};if(_0x16fada['cross'+_0x534248(0x3e8)])_0x57fdfb(_0x3a48b0);if(_0x16fada[_0x534248(0x97)+'rokes'])_0x408572(_0x3a48b0);_0x58ac06(_0x3a48b0);}var _0x5dda95=document['creat'+_0x2eae1f(0x141)+_0x2eae1f(0x37e)](_0x2eae1f(0x3c3));_0x5dda95['id']=_0x2eae1f(0x550)+_0x2eae1f(0x25c),_0x5dda95[_0x2eae1f(0x528)]['cssTe'+'xt']=_0x1eb54c[_0x2eae1f(0x432)];var _0xe1cdf5=_0x5dda95['attac'+_0x2eae1f(0x18c)+'ow']({'mode':'open'});(document[_0x2eae1f(0x170)]||document[_0x2eae1f(0x474)+'entEl'+_0x2eae1f(0xdd)])['appen'+'dChil'+'d'](_0x5dda95);var _0x2ce9a3=![],_0x14c891={};try{if(_0x2eae1f(0x3f0)===_0x1eb54c[_0x2eae1f(0x60e)])_0x14c891=JSON[_0x2eae1f(0x1dd)](localStorage[_0x2eae1f(0xdb)+'em'](_0x1eb54c[_0x2eae1f(0x3a1)])||'{}');else{_0x424e67[_0x2eae1f(0x12c)](),_0x209fa9[_0x2eae1f(0x62f)]=_0x2eae1f(0x124)+_0x2eae1f(0x5ff)+_0x2eae1f(0x10f)+'ospac'+'e,mon'+_0x2eae1f(0x4dc)+'e',_0x1cd2ed['textA'+'lign']=_0x1eb54c['bngqb'],_0x26948c['textB'+'aseli'+'ne']=_0x1eb54c[_0x2eae1f(0x237)];var _0x401a8c=-0xc*0x1f2+-0x101d+0x27a1,_0x57bbaf=-0x2370+-0x1ee5+0x4261,_0x574da2=(_0x470295,_0x5da53f)=>{var _0x5c81e9=_0x2eae1f;_0x2c1ec4['fillS'+_0x5c81e9(0x17f)]=_0x421c32['hRbUN'](_0x5da53f,_0x421c32[_0x5c81e9(0x5ba)]),_0x3e23ad[_0x5c81e9(0xd5)+'ext'](_0x470295,_0x57bbaf,_0x401a8c),_0x401a8c+=-0x836*0x1+0x55d+0x5*0x95;};_0x1eb54c['ACydI'](_0x574da2,_0x1eb54c[_0x2eae1f(0x101)],_0x1eb54c[_0x2eae1f(0x29b)]);if(_0x4cc9f4[_0x2eae1f(0x4f6)])_0x574da2(_0x1eb54c['oALgJ'](_0x2cad83,_0x1eb54c[_0x2eae1f(0x166)]));if(!_0x4dae13['gameL'+_0x2eae1f(0x1bd)])_0x574da2(_0x1eb54c[_0x2eae1f(0x50b)],'rgba('+'255,1'+_0x2eae1f(0x43e)+_0x2eae1f(0xad)+')');_0x2275e3[_0x2eae1f(0x4a0)+'re']();}}catch(_0x2a2714){}function _0x5477cb(){var _0x47e284=_0x2eae1f;try{localStorage['setIt'+'em'](_0x47e284(0x550)+_0x47e284(0x4b6)+_0x47e284(0x2dc)+'v1',JSON['strin'+'gify'](_0x14c891));}catch(_0x411fc){}}function _0x14c22e(_0x10454f,_0x1d3e06){var _0x2f5dde=_0x2eae1f,_0x5a7dae={'JChzR':_0x2f5dde(0x5fe),'QNXtc':function(_0x762ffc,_0x5b4a95){var _0x52e8ec=_0x2f5dde;return _0x1eb54c[_0x52e8ec(0x55b)](_0x762ffc,_0x5b4a95);},'vdMtP':_0x1eb54c[_0x2f5dde(0x322)],'cAbGl':'true'},_0x135a94=document['creat'+_0x2f5dde(0x141)+_0x2f5dde(0x37e)](_0x1eb54c[_0x2f5dde(0x59a)]);return _0x135a94[_0x2f5dde(0x42c)]='butto'+'n',_0x135a94['class'+'Name']=_0x1eb54c['YlrzW'],_0x135a94['setAt'+'tribu'+'te'](_0x1eb54c['VebUu'],_0x2f5dde(0x23d)+'h'),_0x135a94[_0x2f5dde(0x600)+_0x2f5dde(0x5f2)+'te']('aria-'+_0x2f5dde(0x568)+'ed',_0x1eb54c[_0x2f5dde(0x354)](String,!!_0x10454f)),_0x135a94[_0x2f5dde(0x510)+'ck']=_0x33e55c=>{var _0x85389=_0x2f5dde;if(_0x5a7dae[_0x85389(0x542)]!==_0x85389(0x106)){_0x33e55c[_0x85389(0x3df)+'ropag'+'ation']();var _0x287405=_0x5a7dae['QNXtc'](_0x135a94[_0x85389(0x36e)+_0x85389(0x5f2)+'te'](_0x5a7dae['vdMtP']),_0x5a7dae['cAbGl']);_0x135a94[_0x85389(0x600)+_0x85389(0x5f2)+'te'](_0x5a7dae['vdMtP'],String(_0x287405)),_0x1d3e06(_0x287405);}else _0x2572eb[_0x85389(0x429)+'ed']=!!_0x5efe5a;},_0x135a94;}function _0x5410cf(_0x652a6d,_0x4fc604,_0x4fc438,_0x430242,_0x88e45e){var _0x5dd951=_0x2eae1f,_0x1cc42c={'nAPdB':_0x5dd951(0x5bb),'CDHaw':function(_0x1c9315,_0x4f37eb){return _0x421c32['UDnuU'](_0x1c9315,_0x4f37eb);},'tbhSu':function(_0x3c2e4d,_0x20899a){return _0x421c32['UcmvN'](_0x3c2e4d,_0x20899a);},'qjnjV':function(_0x2a71a9,_0x3ecc95){return _0x421c32['nxDzZ'](_0x2a71a9,_0x3ecc95);},'OLDeW':_0x421c32['BdevC'],'sfRrh':_0x5dd951(0x452),'kjBud':function(_0x477023){return _0x477023();}},_0x5c6a0b=document['creat'+_0x5dd951(0x141)+'ent'](_0x5dd951(0x3c3));_0x5c6a0b[_0x5dd951(0xb9)+_0x5dd951(0x255)]=_0x421c32['xTSzv'];var _0x4e6dff=document['creat'+_0x5dd951(0x141)+'ent'](_0x421c32['xIeaC']);_0x4e6dff[_0x5dd951(0x42c)]=_0x5dd951(0x289),_0x4e6dff[_0x5dd951(0xb9)+_0x5dd951(0x255)]='sk-sl'+'ider',_0x4e6dff['min']=_0x4fc604,_0x4e6dff[_0x5dd951(0x1c5)]=_0x4fc438,_0x4e6dff[_0x5dd951(0x5a3)]=_0x430242,_0x4e6dff['value']=_0x652a6d;var _0x22a54a=document['creat'+_0x5dd951(0x141)+_0x5dd951(0x37e)](_0x421c32['Kkoxx']);_0x22a54a[_0x5dd951(0xb9)+'Name']=_0x421c32['bQdaW'],_0x22a54a[_0x5dd951(0x629)+'onten'+'t']=_0x421c32[_0x5dd951(0x60d)](String,_0x652a6d);var _0x460dab=()=>{var _0x7ca728=_0x5dd951;_0x22a54a[_0x7ca728(0x629)+_0x7ca728(0x16b)+'t']=String(_0x4e6dff[_0x7ca728(0x134)]),_0x5c6a0b['style'][_0x7ca728(0x10a)+_0x7ca728(0x33a)+'y'](_0x1cc42c[_0x7ca728(0x42f)],_0x1cc42c[_0x7ca728(0x625)](_0x1cc42c[_0x7ca728(0x343)](_0x1cc42c['qjnjV'](_0x4e6dff[_0x7ca728(0x134)],_0x4fc604)/_0x1cc42c['qjnjV'](_0x4fc438,_0x4fc604),-0x577*0x7+0xb77+0x1b2e),'%'));};return _0x4e6dff['oninp'+'ut']=()=>{var _0x4047e5=_0x5dd951;_0x1cc42c[_0x4047e5(0x498)]!==_0x1cc42c[_0x4047e5(0x4e6)]?(_0x1cc42c[_0x4047e5(0x1bb)](_0x460dab),_0x88e45e(Number(_0x4e6dff[_0x4047e5(0x134)]))):_0xff952e[_0x4047e5(0x511)](_0x2e672e['code']);},_0x460dab(),_0x5c6a0b[_0x5dd951(0x4b3)+'d'](_0x4e6dff,_0x22a54a),_0x5c6a0b;}function _0x21090e(_0x1cd6e3,_0x3de0da){var _0x11db7a=_0x2eae1f,_0x507e39=document[_0x11db7a(0x486)+'eElem'+'ent'](_0x11db7a(0x5e5));return _0x507e39[_0x11db7a(0x42c)]=_0x11db7a(0x397),_0x507e39[_0x11db7a(0xb9)+'Name']='sk-co'+_0x11db7a(0x580),_0x507e39[_0x11db7a(0x134)]=/^#[0-9a-f]{6}$/i['test'](_0x1cd6e3)?_0x1cd6e3:_0x421c32['OtWlS'],_0x507e39['oninp'+'ut']=()=>_0x3de0da(_0x507e39['value']),_0x507e39;}function _0x1270c3(_0x36fb95,_0x2fd34d,_0x124317){var _0x4e33d6=_0x2eae1f,_0x12a167=_0x1eb54c['RjCax'][_0x4e33d6(0x50e)]('|'),_0x6e8d98=-0x2*0x277+-0xd5a+0x1248;while(!![]){switch(_0x12a167[_0x6e8d98++]){case'0':var _0x24f366=document['creat'+'eElem'+'ent'](_0x1eb54c[_0x4e33d6(0x179)]);continue;case'1':return _0x24f366;case'2':for(var [_0x491a05,_0x2261b7]of _0x2fd34d){var _0xb6ff20=document[_0x4e33d6(0x486)+_0x4e33d6(0x141)+_0x4e33d6(0x37e)](_0x1eb54c[_0x4e33d6(0x48c)]);_0xb6ff20['value']=_0x491a05,_0xb6ff20[_0x4e33d6(0x629)+_0x4e33d6(0x16b)+'t']=_0x2261b7,_0x24f366[_0x4e33d6(0x4b3)+_0x4e33d6(0x590)+'d'](_0xb6ff20);}continue;case'3':_0x24f366[_0x4e33d6(0x134)]=_0x36fb95;continue;case'4':_0x24f366[_0x4e33d6(0xb9)+_0x4e33d6(0x255)]='sk-fi'+'eld';continue;case'5':_0x24f366['oncha'+_0x4e33d6(0x476)]=()=>_0x124317(_0x24f366[_0x4e33d6(0x134)]);continue;}break;}}function _0x2302ec(_0x467aac,_0x25e232){var _0x4412bb=_0x2eae1f,_0x61eec0=_0x421c32['sZtxS'][_0x4412bb(0x50e)]('|'),_0x36b091=-0x2*0x8f5+0x1*0x1c29+-0xa3f;while(!![]){switch(_0x61eec0[_0x36b091++]){case'0':_0x13e6cc['class'+'Name']=_0x421c32[_0x4412bb(0x240)];continue;case'1':return _0x13e6cc;case'2':_0x13e6cc['textC'+_0x4412bb(0x16b)+'t']=_0x467aac;continue;case'3':_0x13e6cc['type']=_0x421c32[_0x4412bb(0x4bd)];continue;case'4':_0x13e6cc[_0x4412bb(0x510)+'ck']=_0x5a71cc=>{var _0x4c6397=_0x4412bb;_0x5a71cc[_0x4c6397(0x3df)+'ropag'+_0x4c6397(0x49a)](),_0x421c32['pcapI'](_0x25e232);};continue;case'5':var _0x13e6cc=document[_0x4412bb(0x486)+_0x4412bb(0x141)+'ent']('butto'+'n');continue;}break;}}function _0xdb1865(_0x1d913c,_0x4908c0,_0x161f0a){var _0x4895d2=_0x2eae1f;if(_0x421c32[_0x4895d2(0x20a)]===_0x4895d2(0x374))_0x22a41a[_0x4895d2(0x55e)+'em']('sakur'+'a.kou'+'r.v1',_0x2ba8a7[_0x4895d2(0x5b9)+'gify'](_0x11690e));else{var _0x4e39a2=document[_0x4895d2(0x486)+'eElem'+_0x4895d2(0x37e)](_0x4895d2(0x3c3));_0x4e39a2[_0x4895d2(0xb9)+_0x4895d2(0x255)]='sk-ct'+'l';var _0x42e508=document['creat'+_0x4895d2(0x141)+_0x4895d2(0x37e)](_0x4895d2(0x416));_0x42e508[_0x4895d2(0xb9)+_0x4895d2(0x255)]=_0x4895d2(0x2cd)+_0x4895d2(0x59e),_0x42e508[_0x4895d2(0x629)+_0x4895d2(0x16b)+'t']=_0x1d913c;if(_0x4908c0){if('trVUy'===_0x421c32[_0x4895d2(0x30c)]){var _0x328720=document[_0x4895d2(0x486)+_0x4895d2(0x141)+_0x4895d2(0x37e)]('small');_0x328720['class'+'Name']='sk-hi'+'nt',_0x328720['textC'+_0x4895d2(0x16b)+'t']=_0x4908c0,_0x42e508[_0x4895d2(0x4b3)+_0x4895d2(0x590)+'d'](_0x328720);}else{var _0x58a488=new _0x505599(_0xf57b2b)[_0x4895d2(0x51a)+'ield'](_0x45ad49,_0x217187);_0x11795a['set'](_0x244f32,_0x58a488!==_0x1d6b4a?_0x58a488[_0x4895d2(0x4be)]():null);}}return _0x4e39a2[_0x4895d2(0x4b3)+'d'](_0x42e508,_0x161f0a),_0x4e39a2;}}function _0x303b59(_0x5719e2,_0x2fa0eb){var _0x4c4133=_0x2eae1f,_0x34d649=document[_0x4c4133(0x486)+_0x4c4133(0x141)+_0x4c4133(0x37e)]('div');return _0x34d649['class'+'Name']=_0x421c32[_0x4c4133(0x10d)](_0x4c4133(0x363)+'te',_0x2fa0eb?_0x4c4133(0x24f):''),_0x34d649[_0x4c4133(0x629)+_0x4c4133(0x16b)+'t']=_0x5719e2,_0x34d649;}function _0x1596b7(_0x9221a7,_0x5d24bd,_0x24e6a5,_0x45021d,_0x358431){var _0x2a001f=_0x2eae1f;if(_0x2a001f(0x3b0)===_0x2a001f(0x3ad)){var _0x50d54c={'DIVdz':_0x2a001f(0x11f)+'check'+'ed','Rpgzs':_0x2a001f(0x553),'BOwsz':function(_0x44ef2e,_0x1bae82){return _0x44ef2e(_0x1bae82);}},_0x4bf61c=_0x47e3bd['creat'+'eElem'+'ent'](_0x2a001f(0x265)+'n');return _0x4bf61c[_0x2a001f(0x42c)]='butto'+'n',_0x4bf61c[_0x2a001f(0xb9)+_0x2a001f(0x255)]=_0x421c32['nRPWZ'],_0x4bf61c[_0x2a001f(0x600)+'tribu'+'te'](_0x421c32[_0x2a001f(0x1fd)],_0x421c32[_0x2a001f(0x423)]),_0x4bf61c[_0x2a001f(0x600)+_0x2a001f(0x5f2)+'te'](_0x421c32[_0x2a001f(0x51f)],_0x1ab334(!!_0x323f03)),_0x4bf61c['oncli'+'ck']=_0xcfce1a=>{var _0xd09488=_0x2a001f;_0xcfce1a[_0xd09488(0x3df)+'ropag'+_0xd09488(0x49a)]();var _0x108dfa=_0x4bf61c[_0xd09488(0x36e)+'tribu'+'te'](_0x50d54c[_0xd09488(0x507)])!==_0x50d54c[_0xd09488(0x24d)];_0x4bf61c[_0xd09488(0x600)+'tribu'+'te']('aria-'+'check'+'ed',_0x50d54c['BOwsz'](_0x165a93,_0x108dfa)),_0x1337f2(_0x108dfa);},_0x4bf61c;}else{var _0x52aecb=document['creat'+_0x2a001f(0x141)+_0x2a001f(0x37e)](_0x2a001f(0x3c3));_0x52aecb[_0x2a001f(0xb9)+_0x2a001f(0x255)]='sk-ca'+'rd'+(_0x24e6a5?_0x2a001f(0x295):'');var _0x52a3cd=document[_0x2a001f(0x486)+'eElem'+'ent'](_0x2a001f(0x3c3));_0x52a3cd[_0x2a001f(0xb9)+_0x2a001f(0x255)]=_0x2a001f(0x5b0)+_0x2a001f(0x61a)+'ad';var _0x4435d3=document[_0x2a001f(0x486)+_0x2a001f(0x141)+'ent'](_0x421c32['zIUds']);_0x4435d3['class'+'Name']=_0x2a001f(0x5b0)+_0x2a001f(0x208)+_0x2a001f(0x548);var _0x1b4f1e=document[_0x2a001f(0x486)+'eElem'+_0x2a001f(0x37e)](_0x421c32['zYWHV']);_0x1b4f1e['textC'+_0x2a001f(0x16b)+'t']=_0x9221a7,_0x4435d3[_0x2a001f(0x4b3)+_0x2a001f(0x590)+'d'](_0x1b4f1e);if(_0x45021d){var _0x27870a=_0x14c22e(_0x24e6a5,_0x4adb2a=>{var _0x55ba75=_0x2a001f;_0x52aecb[_0x55ba75(0xb9)+_0x55ba75(0x424)]['toggl'+'e']('on',_0x4adb2a),_0x45021d(_0x4adb2a);});_0x52a3cd['appen'+'d'](_0x4435d3,_0x27870a);}else _0x52a3cd['appen'+'dChil'+'d'](_0x4435d3);_0x52aecb[_0x2a001f(0x4b3)+'dChil'+'d'](_0x52a3cd);if(_0x358431&&_0x358431[_0x2a001f(0x16f)+'h']){var _0x2e3952=_0x421c32[_0x2a001f(0x4c6)][_0x2a001f(0x50e)]('|'),_0x588b60=-0x2c*-0x84+-0x151c+-0x1*0x194;while(!![]){switch(_0x2e3952[_0x588b60++]){case'0':_0x1298ed[_0x2a001f(0xb9)+_0x2a001f(0x255)]='sk-mb'+'ody';continue;case'1':_0x54c091['textC'+_0x2a001f(0x16b)+'t']=_0x5d24bd;continue;case'2':_0x1298ed['appen'+'dChil'+'d'](_0x54c091);continue;case'3':_0x54c091[_0x2a001f(0xb9)+'Name']=_0x421c32[_0x2a001f(0x2ff)];continue;case'4':_0x52aecb[_0x2a001f(0x4b3)+_0x2a001f(0x590)+'d'](_0x1298ed);continue;case'5':var _0x54c091=document[_0x2a001f(0x486)+'eElem'+'ent']('div');continue;case'6':for(var _0x49f190 of _0x358431)_0x1298ed['appen'+_0x2a001f(0x590)+'d'](_0x49f190);continue;case'7':var _0x1298ed=document['creat'+'eElem'+'ent']('div');continue;}break;}}return _0x52aecb;}}var _0x390f8b=[{'id':'comba'+'t','label':_0x2eae1f(0x594)+'t'},{'id':_0x2eae1f(0x530),'label':_0x1eb54c[_0x2eae1f(0x42d)]},{'id':'visua'+'l','label':_0x1eb54c['jHaBy']},{'id':'misc','label':_0x2eae1f(0x40e)},{'id':'safe','label':'Safet'+'y'}];function _0x40b484(){var _0x23a127=_0x2eae1f,_0x696178={'TyfUL':_0x23a127(0x46e)+_0x23a127(0x3ac)+_0x23a127(0x51c)+'licat'+'ion'},_0x3874dc=_0x5c7d0e['safeM'+_0x23a127(0x250)]?_0x421c32[_0x23a127(0x3c4)]:_0x5c7d0e[_0x23a127(0x346)]?_0x421c32['FQeXc']('UWMK\x20'+_0x23a127(0x5e2)+'\x20'+(_0x5c7d0e['hooks'+'Total']?_0x421c32[_0x23a127(0x8a)](_0x5c7d0e[_0x23a127(0x5e4)+'Ok']+'/'+_0x5c7d0e['hooks'+_0x23a127(0x4d2)],'\x20hook'+'s'):_0x421c32[_0x23a127(0x13c)]),_0x23a127(0x276)+_0x23a127(0x159))+(_0x5c7d0e[_0x23a127(0x2f9)+_0x23a127(0x1bd)]?_0x23a127(0x484)+'d':_0x421c32[_0x23a127(0x527)])+_0x421c32[_0x23a127(0xc3)]+(_0x5c7d0e['shoot'+'ers']?_0x23a127(0x5d0):'none')+(_0x23a127(0x273)+'vemen'+'t\x20')+(_0x5c7d0e[_0x23a127(0xa7)+'ents']?_0x421c32['zIWjO']:_0x421c32['vkQOd']):_0x421c32[_0x23a127(0x4f3)];if(_0x5c7d0e['lastE'+_0x23a127(0x1c9)])_0x3874dc+=_0x23a127(0x378)+_0x23a127(0x1db)+_0x5c7d0e[_0x23a127(0x47a)+'rror'];return _0x1596b7(_0x421c32['qmCHj'],_0x3874dc,_0x5c7d0e['uwmk'],null,[_0x421c32[_0x23a127(0x104)](_0xdb1865,_0x421c32[_0x23a127(0x405)],_0x421c32[_0x23a127(0x307)],_0x2302ec('Apply',()=>{var _0x2eb4ea=_0x23a127;try{if(_0x1742ec)_0x1742ec[_0x2eb4ea(0x459)](_0x696178[_0x2eb4ea(0x3eb)],_0x2eb4ea(0x262)+'arget'+_0x2eb4ea(0x425)+_0x2eb4ea(0x450),[-0x15f2+-0x119*0x23+-0x3d4d*-0x1]);}catch(_0x5a21f8){}}))]);}function _0x5e0085(_0x407189){var _0x259c0f=_0x2eae1f,_0x27918a={'iNnMC':_0x259c0f(0x553),'DjCFm':_0x259c0f(0x11f)+_0x259c0f(0x568)+'ed','VHEIL':function(_0x597b1b,_0x4693e4){return _0x421c32['lgiNl'](_0x597b1b,_0x4693e4);},'wSNGJ':function(_0x2b60e3,_0x2dbb5b){return _0x2b60e3!==_0x2dbb5b;},'SfUWm':_0x421c32[_0x259c0f(0x3f4)],'yfADg':function(_0x38c4ee,_0x3d915c,_0x3c21af){return _0x421c32['CgOlo'](_0x38c4ee,_0x3d915c,_0x3c21af);},'nbkCt':function(_0x19b5b3,_0x1b1e1f){return _0x19b5b3===_0x1b1e1f;},'ZGNKQ':_0x259c0f(0x3cb),'lFvkH':'ilnhk','SrJgC':_0x259c0f(0x253)+'n','qThzY':function(_0x5044df){return _0x5044df();},'tczOY':function(_0x41300e){return _0x41300e();},'NIzLA':_0x259c0f(0x391),'KfJXh':function(_0x122757,_0x3b51a1){return _0x122757!==_0x3b51a1;},'sIchJ':function(_0x254f0c){return _0x254f0c();},'HnqAY':_0x259c0f(0x606),'XJIhP':_0x421c32['GoKXc'],'dZPWT':function(_0x136e82){return _0x136e82();},'aJsym':function(_0xbde370){return _0xbde370();}};if(_0x407189===_0x259c0f(0xff)+'t')return[_0x40b484(),_0x421c32['RTLGJ'](_0x1596b7,_0x421c32[_0x259c0f(0x3c2)],_0x259c0f(0x49b)+_0x259c0f(0x13d)+_0x259c0f(0x2ec)+'Initi'+_0x259c0f(0x313)+_0x259c0f(0x19f)+_0x259c0f(0x362)+_0x259c0f(0x3c7)+_0x259c0f(0x611)+'.Loca'+_0x259c0f(0x305)+_0x259c0f(0x26e)+'othin'+'g\x20can'+_0x259c0f(0xe4)+_0x259c0f(0x283)+_0x259c0f(0x585)+_0x259c0f(0x5f0),_0x16fada[_0x259c0f(0x5dc)],_0x1a5dfd=>{var _0x2170ab=_0x259c0f;if(_0x27918a['wSNGJ'](_0x2170ab(0x5b3),_0x27918a[_0x2170ab(0x616)]))_0x16fada[_0x2170ab(0x5dc)]=_0x1a5dfd,_0x34fadc(),_0x10fe2b('god',_0x1a5dfd),_0x27918a['yfADg'](_0x10fe2b,_0x2170ab(0x3ff)+'e',_0x1a5dfd);else{_0x12e5fa['stopP'+'ropag'+_0x2170ab(0x49a)]();var _0x25c21a=_0x5d4240[_0x2170ab(0x36e)+_0x2170ab(0x5f2)+'te']('aria-'+'check'+'ed')!==_0x27918a[_0x2170ab(0x59d)];_0x485e71['setAt'+'tribu'+'te'](_0x27918a[_0x2170ab(0x7d)],_0x30e498(_0x25c21a)),_0x27918a[_0x2170ab(0x58e)](_0x3d3704,_0x25c21a);}},[]),_0x1596b7(_0x259c0f(0x315)+'coil',_0x259c0f(0x117)+_0x259c0f(0x5ee)+'ilMot'+_0x259c0f(0x29f)+'ick\x20s'+'o\x20the'+_0x259c0f(0x310)+'il\x20sp'+'rings'+_0x259c0f(0x201)+'r\x20adv'+'ance.',_0x16fada[_0x259c0f(0x321)+_0x259c0f(0x1d7)],_0x444ee1=>{var _0x45df74=_0x259c0f;if(_0x27918a[_0x45df74(0x541)](_0x27918a[_0x45df74(0x245)],_0x27918a['lFvkH']))return _0x21ccd4['warn'](_0x45df74(0x42a)+_0x45df74(0x2a2)+_0x45df74(0x5c1)+_0x45df74(0x1f0)+_0x45df74(0x15b)+'iled:',_0x4f670a,_0x2149bb&&_0x5f208d['messa'+'ge']),null;else _0x16fada['noRec'+'oil']=_0x444ee1,_0x34fadc(),_0x10fe2b(_0x45df74(0x321)+'oil',_0x444ee1);},[]),_0x1596b7('No\x20Sp'+_0x259c0f(0x260),_0x421c32['xeXBh'],_0x16fada[_0x259c0f(0x604)+_0x259c0f(0x58b)],_0x453ca3=>{_0x16fada['noSpr'+'ead']=_0x453ca3,_0x34fadc();},[]),_0x1596b7('Rapid'+'\x20Fire'+_0x259c0f(0x11a)+']',_0x259c0f(0x4e7)+_0x259c0f(0x5fa)+'rtide'+_0x259c0f(0x157)+'n.fir'+_0x259c0f(0x205)+_0x259c0f(0x22d)+_0x259c0f(0x227)+'erver'+_0x259c0f(0x5fb)+'still'+_0x259c0f(0x380)+_0x259c0f(0x2bc)+'s.',_0x16fada[_0x259c0f(0x31d)+'Exp'],_0x4479e2=>{var _0x2d47fb=_0x259c0f;_0x16fada['rapid'+'Exp']=_0x4479e2,_0x421c32[_0x2d47fb(0x177)](_0x34fadc);},[]),_0x421c32[_0x259c0f(0x5a6)](_0x1596b7,_0x421c32['dzJLc'],_0x259c0f(0x267)+_0x259c0f(0x21f)+'\x20Over'+_0x259c0f(0x20f)+_0x259c0f(0x47b)+_0x259c0f(0x62b)+_0x259c0f(0x37f)+'annab'+_0x259c0f(0x27b)+'\x20the\x20'+'serve'+'r\x20val'+_0x259c0f(0x490)+'s.',_0x16fada[_0x259c0f(0x1af)+'eExp'],_0x3cf496=>{var _0xbd62e3=_0x259c0f;if(_0xbd62e3(0x431)==='gWfFe')_0x16fada[_0xbd62e3(0x1af)+_0xbd62e3(0x398)]=_0x3cf496,_0x421c32[_0xbd62e3(0x177)](_0x34fadc);else{var _0x4214c0=_0x4a3293['creat'+_0xbd62e3(0x141)+_0xbd62e3(0x37e)](_0x27918a['SrJgC']);_0x4214c0[_0xbd62e3(0x134)]=_0x4ed269,_0x4214c0['textC'+'onten'+'t']=_0x55892e,_0x19325a['appen'+'dChil'+'d'](_0x4214c0);}},[_0x421c32[_0x259c0f(0x181)](_0xdb1865,_0x259c0f(0x226)+'e\x20val'+'ue',null,_0x421c32[_0x259c0f(0x52a)](_0x5410cf,_0x16fada[_0x259c0f(0x1af)+'eValu'+'e'],0x1*0x1d84+-0x16f+-0x1*0x1c0b,0x69*-0x35+0x3ae*0x1+0x1403,-0x1b9a+-0x1*0x1b0b+-0x1b55*-0x2,_0x2aa0a6=>{var _0x22dbbd=_0x259c0f;_0x22dbbd(0x135)!==_0x421c32[_0x22dbbd(0x3a7)]?(_0x16fada['damag'+_0x22dbbd(0x147)+'e']=_0x2aa0a6,_0x421c32[_0x22dbbd(0x5c6)](_0x34fadc)):(_0x2567f2[_0x22dbbd(0xba)+'ode']=_0x5adf3e,_0x380a40(),_0x6d66f7[_0x22dbbd(0x5df)+'d']());}))]),_0x421c32['AWjEb'](_0x1596b7,_0x259c0f(0x5e1)+'ite\x20A'+_0x259c0f(0x534)+'EXP]',_0x259c0f(0x5fd)+_0x259c0f(0x595)+_0x259c0f(0x155)+'pon\x27s'+'\x20cach'+_0x259c0f(0x17d)+'mo\x20to'+_0x259c0f(0x96)+'every'+_0x259c0f(0x4d3)+'s.',_0x16fada[_0x259c0f(0x38f)+'moExp'],_0x580e83=>{var _0x4b60d9=_0x259c0f;_0x16fada['infAm'+_0x4b60d9(0x2fd)]=_0x580e83,_0x34fadc();},[_0x303b59('If\x20re'+_0x259c0f(0x41a)+'\x20stil'+_0x259c0f(0x27d)+'in,\x20t'+_0x259c0f(0x292)+_0x259c0f(0x91)+'nt\x20ha'+'ppens'+'\x20else'+_0x259c0f(0x3b9)+'.')])];if(_0x407189===_0x421c32['MvWro'])return[_0x1596b7('Speed','Scale'+'s\x20all'+'\x20four'+_0x259c0f(0x252)+_0x259c0f(0x133)+_0x259c0f(0x45b)+_0x259c0f(0x5e9)+'ts\x20pl'+_0x259c0f(0x246)+'celer'+'ation'+'.',_0x16fada[_0x259c0f(0x45b)+_0x259c0f(0x5a0)]!==-0x1c65+-0x12e*0x7+-0x57*-0x6d,null,[_0xdb1865('Speed'+'\x20%',_0x421c32[_0x259c0f(0x281)],_0x421c32[_0x259c0f(0x330)](_0x5410cf,_0x16fada[_0x259c0f(0x45b)+_0x259c0f(0x5a0)],-0x605+0x2e*0xb+-0x1f*-0x23,0x2412+-0xb2d+-0x17b9,0x26da+0x3*0x581+-0x8*0x6eb,_0x55db8d=>{var _0x38fc93=_0x259c0f;_0x16fada[_0x38fc93(0x45b)+_0x38fc93(0x5a0)]=_0x55db8d,_0x34fadc();}))]),_0x1596b7(_0x421c32['askpQ'],_0x259c0f(0x4e7)+_0x259c0f(0x55a)+'ement'+'.jump'+_0x259c0f(0x4e4)+_0x259c0f(0x25d)+_0x259c0f(0xf7)+'gravi'+_0x259c0f(0x3f2)+'lues.',_0x16fada['jumpP'+'ct']!==-0x21d6+-0x1650+0x2*0x1c45||_0x421c32[_0x259c0f(0xbd)](_0x16fada[_0x259c0f(0x1c7)+_0x259c0f(0x365)],0xacd+0x1c60+-0x1*0x26c9),null,[_0xdb1865('Jump\x20'+'%',null,_0x421c32['qxJCd'](_0x5410cf,_0x16fada['jumpP'+'ct'],0x142b+0x8d4+-0x1ccd,0x17*0x3+0x23dc*-0x1+0x24c3,-0x1*0xd64+0x10e5+-0x1*0x37c,_0x42a2b7=>{_0x16fada['jumpP'+'ct']=_0x42a2b7,_0x34fadc();})),_0xdb1865(_0x259c0f(0xcd)+_0x259c0f(0x3ed),_0x421c32[_0x259c0f(0x25e)],_0x5410cf(_0x16fada[_0x259c0f(0x1c7)+_0x259c0f(0x365)],-0x1b*-0xa0+0x1043+0x2119*-0x1,0xa28+0x16e7*-0x1+0xd87,-0x784+-0x1e09+0x2592,_0x627927=>{var _0x51adaa=_0x259c0f;_0x16fada[_0x51adaa(0x1c7)+_0x51adaa(0x365)]=_0x627927,_0x421c32['pcapI'](_0x34fadc);}))]),_0x421c32[_0x259c0f(0x5ec)](_0x1596b7,_0x259c0f(0x178)+_0x259c0f(0x2bf),'Zeroe'+'s\x20Mov'+'ement'+_0x259c0f(0x466)+_0x259c0f(0x622)+'ime\x20s'+_0x259c0f(0x470)+_0x259c0f(0x4a6)+'\x20cool'+_0x259c0f(0x1ef)+_0x259c0f(0x3e5)+_0x259c0f(0x3fb)+_0x259c0f(0x3cf),_0x16fada[_0x259c0f(0x2e2)],_0x279f30=>{var _0x9080ac=_0x259c0f;_0x421c32['tkirB'](_0x421c32['dvtas'],_0x9080ac(0x4c1))?new _0x5235c7(_0x2d74be)['write'+_0x9080ac(0x4f9)](_0x2ff8c7,_0x1cdd26,_0x3c71a7):(_0x16fada[_0x9080ac(0x2e2)]=_0x279f30,_0x34fadc());},[])];if(_0x421c32[_0x259c0f(0x58f)](_0x407189,_0x259c0f(0x15e)+'l')){if(_0x259c0f(0x518)!==_0x259c0f(0x518))_0x1c0a05['cross'+'hair']=_0x516eb6,_0x27918a[_0x259c0f(0x3ef)](_0x34f65e);else return[_0x421c32[_0x259c0f(0x76)](_0x1596b7,_0x259c0f(0xc7)+'rokes',_0x259c0f(0x3e3)+'+\x20LMB'+'/RMB\x20'+'+\x20Spa'+_0x259c0f(0x2e8)+_0x259c0f(0x317)+'.',_0x16fada['keyst'+'rokes'],_0x300486=>{var _0x54543f=_0x259c0f;_0x16fada['keyst'+'rokes']=_0x300486,_0x27918a[_0x54543f(0x39c)](_0x34fadc);},[_0xdb1865(_0x259c0f(0x1f3)+_0x259c0f(0x3af),null,_0x1270c3(_0x16fada[_0x259c0f(0x1aa)],[['bl',_0x421c32[_0x259c0f(0x2c7)]],['br',_0x259c0f(0x4db)+_0x259c0f(0x45f)+'ht'],['ml',_0x259c0f(0x29a)+_0x259c0f(0x2c3)+'e']],_0x5d7516=>{var _0x2be0e2=_0x259c0f;_0x16fada[_0x2be0e2(0x1aa)]=_0x5d7516,_0x34fadc();})),_0xdb1865(_0x259c0f(0x1ce),null,_0x421c32['tmUyl'](_0x5410cf,_0x16fada['ksSca'+'le'],0x9d0*0x1+0xab5+0x6d7*-0x3+0.6,-0x186d+0x4e5*-0x4+-0x83*-0x56+0.6000000000000001,-0x282+-0x1c1f+0x1*0x1ea1+0.05,_0x5078fb=>{var _0x34e65a=_0x259c0f;if(_0x27918a['NIzLA']===_0x34e65a(0x445)){_0x3a1b30['gameL'+_0x34e65a(0x1bd)]=!!_0x214cc1['unity'+_0x34e65a(0x515)+_0x34e65a(0x524)];try{var _0xc52fdf=0x1c84+0x2427+0x12d*-0x37;for(var _0x5f5370 in _0x18594e){if(_0x26c804[_0x5f5370]&&_0x58c5fb[_0x5f5370]['appli'+'ed'])_0xc52fdf++;}_0x178993[_0x34e65a(0x5e4)+'Ok']=_0xc52fdf;}catch(_0x2da6fd){}}else _0x16fada[_0x34e65a(0xfb)+'le']=_0x5078fb,_0x34fadc();})),_0x421c32[_0x259c0f(0x39e)](_0xdb1865,_0x421c32[_0x259c0f(0x2e5)],null,_0x421c32['iZNwx'](_0x14c22e,_0x16fada[_0x259c0f(0x4b7)],_0x4f1fd8=>{var _0x15c4cd=_0x259c0f;if(_0x27918a['KfJXh']('JVaJg',_0x15c4cd(0xb2)))_0x16fada[_0x15c4cd(0x4b7)]=_0x4f1fd8,_0x34fadc();else try{var _0x433c6b=new _0x3c2ebe(_0x5e28f2)[_0x15c4cd(0x51a)+_0x15c4cd(0x35d)](_0x255789,'u32');return _0x433c6b?_0x433c6b['val']():0x7c6+-0x257*0x1+-0x6b*0xd;}catch(_0x387116){return-0x1c81*0x1+-0xfa7+0x2c28;}}))]),_0x1596b7(_0x259c0f(0x375)+_0x259c0f(0x3e8),_0x259c0f(0x587)+'m\x20cen'+_0x259c0f(0x540)+_0x259c0f(0xc6)+_0x259c0f(0xb3),_0x16fada[_0x259c0f(0x621)+_0x259c0f(0x3e8)],_0x27df87=>{var _0x54d9af=_0x259c0f;_0x16fada[_0x54d9af(0x621)+'hair']=_0x27df87,_0x34fadc();},[_0x421c32[_0x259c0f(0x436)](_0xdb1865,_0x421c32[_0x259c0f(0x4a5)],null,_0x421c32[_0x259c0f(0x24b)](_0x5410cf,_0x16fada[_0x259c0f(0x579)+'e'],0x1*-0x69+-0x11f2+0x125b+0.5,0x1509+0xdf3*0x1+0x25*-0xf2+0.5,0x4d*-0x35+-0x1f1f+0x2f10+0.1,_0x403624=>{_0x16fada['chSiz'+'e']=_0x403624,_0x34fadc();})),_0xdb1865(_0x259c0f(0x25f),null,_0x21090e(_0x16fada['chCol'+'or'],_0x5de472=>{var _0x4b2c09=_0x259c0f;_0x16fada['chCol'+'or']=_0x5de472,_0x27918a[_0x4b2c09(0x617)](_0x34fadc);}))]),_0x1596b7(_0x421c32[_0x259c0f(0x3d1)],'FPS\x20o'+'verla'+'y.',_0x16fada[_0x259c0f(0x4f6)],null,[_0x421c32['xXXUR'](_0xdb1865,'FPS\x20c'+_0x259c0f(0x2c4)+'r',null,_0x14c22e(_0x16fada[_0x259c0f(0x4f6)],_0x1b39b9=>{var _0x445b1a=_0x259c0f;'aqbod'!==_0x445b1a(0x92)?(_0x16fada[_0x445b1a(0x4f6)]=_0x1b39b9,_0x421c32[_0x445b1a(0x3b5)](_0x34fadc)):(_0x30abef['hookC'+'aptur'+'e']=_0x217b20,_0x4c1eb7());})),_0x421c32['jpEkx'](_0x303b59,'No\x20en'+_0x259c0f(0x523)+_0x259c0f(0x2c4)+_0x259c0f(0x400)+_0x259c0f(0x17b)+'ild\x20h'+'as\x20no'+_0x259c0f(0x479)+_0x259c0f(0x562)+'ePlay'+_0x259c0f(0x572)+_0x259c0f(0x4f8)+_0x259c0f(0x372)+_0x259c0f(0x5b4))])];}if(_0x407189==='misc')return[_0x1596b7('Adblo'+'ck',_0x421c32['cPNic'],_0x16fada[_0x259c0f(0x3cc)+'ck'],_0x520bb2=>{_0x16fada['adblo'+'ck']=_0x520bb2,_0x34fadc();},[_0x303b59(_0x259c0f(0x34c)+_0x259c0f(0x1ea)+'ct\x20on'+'\x20relo'+_0x259c0f(0x3f9)+'en\x20to'+_0x259c0f(0x447)+'.')])];return[_0x1596b7('Safe\x20'+'Mode\x20'+_0x259c0f(0x4a4)+_0x259c0f(0x348)+'nly)','Skips'+'\x20UWMK'+_0x259c0f(0x164)+'rely\x20'+'—\x20no\x20'+_0x259c0f(0x126)+'hooks'+'.\x20Use'+'\x20this'+_0x259c0f(0x87)+'atche'+_0x259c0f(0x258)+_0x259c0f(0x36d)+_0x259c0f(0x53a),_0x16fada['safeM'+'ode'],_0x3b16c5=>{var _0x4f8aef=_0x259c0f;'QxHfx'!==_0x421c32[_0x4f8aef(0x268)]?(_0x231830[_0x4f8aef(0xfb)+'le']=_0x402409,_0x4ea74e()):(_0x16fada['safeM'+_0x4f8aef(0x250)]=_0x3b16c5,_0x421c32[_0x4f8aef(0x2ee)](_0x34fadc),location[_0x4f8aef(0x5df)+'d']());},[_0x303b59(_0x421c32[_0x259c0f(0x4b1)])]),_0x1596b7(_0x259c0f(0x603)+'risk\x20'+_0x259c0f(0x23d)+_0x259c0f(0x4ef),_0x259c0f(0x51b)+_0x259c0f(0x1d2)+_0x259c0f(0x61e)+'ls\x20a\x20'+'WASM\x20'+_0x259c0f(0x501)+_0x259c0f(0x327)+'\x20for\x20'+_0x259c0f(0x1b1)+_0x259c0f(0x593)+_0x259c0f(0x1a7)+_0x259c0f(0xf8)+'\x20ALL\x20'+_0x259c0f(0x94)+_0x259c0f(0xab)+'ault\x20'+'-\x20a\x20s'+_0x259c0f(0x175)+_0x259c0f(0x396)+'hat\x20d'+'oes\x20n'+_0x259c0f(0x5f7)+'tch\x20t'+'he\x20re'+_0x259c0f(0x4cd)+_0x259c0f(0x332)+_0x259c0f(0x31c)+_0x259c0f(0x4fd)+'nctio'+'n\x20sig'+_0x259c0f(0x228)+_0x259c0f(0x4ea)+_0x259c0f(0x442)+'\x27\x20the'+_0x259c0f(0x278)+'nt\x20it'+_0x259c0f(0x440)+'alled'+_0x259c0f(0x1b3)+_0x259c0f(0x453)+'m\x20on\x20'+_0x259c0f(0x5d2)+_0x259c0f(0x2ea)+_0x259c0f(0x344)+'reloa'+'d,\x20an'+_0x259c0f(0x4eb)+_0x259c0f(0x334)+_0x259c0f(0x2b9)+_0x259c0f(0x4c9)+_0x259c0f(0x5db)+_0x259c0f(0x1f4)+_0x259c0f(0x19c)+'n.',_0x16fada[_0x259c0f(0x1a4)+'od']||_0x16fada[_0x259c0f(0x1a4)+_0x259c0f(0x5dd)]||_0x16fada[_0x259c0f(0x4fe)+'oReco'+'il']||_0x16fada[_0x259c0f(0x357)+_0x259c0f(0x136)+'e'],_0x2d9659=>{var _0x156021=_0x259c0f,_0x2dd0a6={'zZCho':function(_0x24ada5,_0x3a32ee,_0x26f501,_0x16c833,_0x25d2fb){return _0x24ada5(_0x3a32ee,_0x26f501,_0x16c833,_0x25d2fb);}};if(_0x27918a['HnqAY']===_0x156021(0x25b))_0x312528(_0x59d469,-0x4*0x8f3+0x21cb+0x28d*0x1,_0x156021(0x390),0x6d6+0x176*-0x1+0x8*-0xac+0.1),_0x2dd0a6[_0x156021(0x291)](_0x285572,_0x488c8b,0x301+0x2*-0xef2+-0x1*-0x1b43,'f32',0x92*0x34+-0xbdf+-0x11c9+0.1);else{var _0x3af434=(_0x156021(0x16e)+_0x156021(0x468)+'2')[_0x156021(0x50e)]('|'),_0x237b99=-0x1b2*-0x10+0x2645+-0x1*0x4165;while(!![]){switch(_0x3af434[_0x237b99++]){case'0':_0x34fadc();continue;case'1':_0x16fada[_0x156021(0x4fe)+'oReco'+'il']=_0x2d9659;continue;case'2':location['reloa'+'d']();continue;case'3':_0x16fada[_0x156021(0x1a4)+'od']=_0x2d9659;continue;case'4':_0x16fada['hookG'+_0x156021(0x5dd)]=_0x2d9659;continue;case'5':_0x16fada[_0x156021(0x357)+_0x156021(0x136)+'e']=_0x2d9659;continue;}break;}}},[_0x421c32[_0x259c0f(0x1c3)](_0x303b59,_0x421c32['dDsYz']),_0x421c32[_0x259c0f(0x39e)](_0xdb1865,_0x259c0f(0x44c)+'OHeal'+'th.In'+_0x259c0f(0xd9)+_0x259c0f(0x478)+_0x259c0f(0x1d8)+'h)',null,_0x14c22e(_0x16fada[_0x259c0f(0x1a4)+'od'],_0x471b1c=>{var _0x76b4c1=_0x259c0f;_0x27918a['XJIhP']==='lOSss'?(_0x227895['keyst'+_0x76b4c1(0xd4)]=_0xa21b6c,_0x44a784()):(_0x16fada['hookG'+'od']=_0x471b1c,_0x34fadc());})),_0x421c32['FIxDi'](_0xdb1865,_0x421c32['DJxbJ'],null,_0x14c22e(_0x16fada[_0x259c0f(0x1a4)+'odDie'],_0x2e6426=>{var _0x2dc66b=_0x259c0f;_0x16fada[_0x2dc66b(0x1a4)+_0x2dc66b(0x5dd)]=_0x2e6426,_0x34fadc();})),_0xdb1865(_0x421c32['tHQrx'],null,_0x421c32['MhPCb'](_0x14c22e,_0x16fada[_0x259c0f(0x4fe)+_0x259c0f(0x573)+'il'],_0x1df4d7=>{var _0x521f8e=_0x259c0f;_0x16fada[_0x521f8e(0x4fe)+'oReco'+'il']=_0x1df4d7,_0x421c32[_0x521f8e(0x5c6)](_0x34fadc);})),_0xdb1865(_0x259c0f(0x121)+_0x259c0f(0x154)+_0x259c0f(0x212)+_0x259c0f(0x172)+'ing\x20+'+_0x259c0f(0x619)+_0x259c0f(0x624)+'d)',_0x421c32['JVQDk'],_0x14c22e(_0x16fada[_0x259c0f(0x357)+_0x259c0f(0x136)+'e'],_0x41f8f5=>{var _0x120fb2=_0x259c0f;_0x16fada['hookC'+_0x120fb2(0x136)+'e']=_0x41f8f5,_0x27918a['dZPWT'](_0x34fadc);}))]),_0x421c32[_0x259c0f(0x430)](_0x1596b7,'ACTk\x20'+_0x259c0f(0x4a2)+'r',_0x421c32[_0x259c0f(0x107)],_0x16fada[_0x259c0f(0x4cf)+_0x259c0f(0xbe)],_0x39b0b1=>{var _0x488685=_0x259c0f;_0x421c32[_0x488685(0x9a)](_0x421c32[_0x488685(0x1bc)],_0x488685(0x2c5))?(_0x5da337['jumpP'+'ct']=_0x52beef,_0x27918a['aJsym'](_0x29bca7)):(_0x16fada[_0x488685(0x4cf)+'ill']=_0x39b0b1,_0x421c32['nksIS'](_0x34fadc));},[_0x303b59(_0x421c32[_0x259c0f(0x8e)],!![])]),_0x421c32[_0x259c0f(0xcb)](_0x1596b7,'Dange'+'r',_0x421c32[_0x259c0f(0x10c)],!![],null,[_0xdb1865(_0x259c0f(0x3d5)+_0x259c0f(0x18d)+'tting'+'s',null,_0x421c32[_0x259c0f(0x395)](_0x2302ec,_0x259c0f(0x376),()=>{_0x16fada={..._0x4aa291},_0x34fadc(),location['reloa'+'d']();}))])];}var _0x5c6183=null;function _0x371057(_0x22c108){var _0x5c8017=_0x2eae1f,_0x2e2f91={'xkYEm':function(_0x5e861d,_0x1f4f14){return _0x5e861d>_0x1f4f14;}};if(_0x1eb54c['rGPHC']==='qEjFV')try{_0x9db71a[_0x5c8017(0x429)+'ed']=![];}catch(_0x3f04a7){}else{_0x2ce9a3=_0x22c108;if(!_0x5c6183){if(_0x1eb54c['yOvUv']===_0x1eb54c[_0x5c8017(0x169)]){var _0x6b63d7=document['creat'+_0x5c8017(0x141)+'ent'](_0x1eb54c[_0x5c8017(0x569)]);_0x6b63d7['textC'+_0x5c8017(0x16b)+'t']=_0x431957,_0xe1cdf5[_0x5c8017(0x4b3)+_0x5c8017(0x590)+'d'](_0x6b63d7),_0x5c6183=_0x1eb54c[_0x5c8017(0x612)](_0x2103b0),_0xe1cdf5[_0x5c8017(0x4b3)+'dChil'+'d'](_0x5c6183),requestAnimationFrame(()=>_0x5c6183['class'+'List'][_0x5c8017(0x511)](_0x5c8017(0x3a4)));}else{if(!_0x541bb5||_0x51c527[_0x5c8017(0x46f)+'des'](_0x55b235)||_0x2e2f91['xkYEm'](_0x24b52b[_0x5c8017(0x16f)+'h'],0x97a+-0x1d5a+0x1420))return;_0x46a4ce['push'](_0x490c2a);}}_0x5c6183['class'+'List'][_0x5c8017(0x355)+'e'](_0x1eb54c[_0x5c8017(0x339)],_0x22c108);}}function _0x2135cf(){var _0x17273d=_0x2eae1f;_0x1eb54c[_0x17273d(0x377)](_0x371057,!_0x2ce9a3);}function _0x2103b0(){var _0x429f6e=_0x2eae1f,_0xa1bb67={'uJltw':_0x421c32[_0x429f6e(0x42b)],'kLkPt':'activ'+'e','kPusF':function(_0x4a75e0,_0x4c39fb){return _0x421c32['jpEkx'](_0x4a75e0,_0x4c39fb);}},_0x519f7e=document[_0x429f6e(0x486)+_0x429f6e(0x141)+_0x429f6e(0x37e)]('div');_0x519f7e[_0x429f6e(0xb9)+'Name']=_0x429f6e(0x465)+_0x429f6e(0x204);var _0x2bb066=document[_0x429f6e(0x486)+'eElem'+_0x429f6e(0x37e)](_0x429f6e(0x56d));_0x2bb066[_0x429f6e(0xb9)+_0x429f6e(0x255)]=_0x429f6e(0xc5)+'de';var _0x1d5464=document[_0x429f6e(0x486)+_0x429f6e(0x141)+_0x429f6e(0x37e)]('div');_0x1d5464['class'+'Name']=_0x429f6e(0x411)+'go',_0x1d5464[_0x429f6e(0x19b)+'HTML']=_0x429f6e(0x437)+'viewB'+_0x429f6e(0x467)+_0x429f6e(0x413)+_0x429f6e(0x2fa)+_0x429f6e(0xb9)+_0x429f6e(0x196)+'logo-'+'svg\x22>'+_0x429f6e(0x36b)+_0x429f6e(0x308)+'12\x2021'+'c-1.5'+_0x429f6e(0x58c)+_0x429f6e(0x27f)+_0x429f6e(0x1c0)+_0x429f6e(0x5f6)+_0x429f6e(0x3d2)+_0x429f6e(0x62e)+_0x429f6e(0xe7)+_0x429f6e(0x2aa)+'\x204\x204.'+'5c0\x203'+_0x429f6e(0x137)+_0x429f6e(0x4b0)+_0x429f6e(0x5d1)+_0x429f6e(0x369)+'\x22none'+'\x22\x20str'+_0x429f6e(0x4e5)+_0x429f6e(0xcc)+_0x429f6e(0x2ba)+'troke'+'-widt'+_0x429f6e(0x61d)+'\x20stro'+'ke-li'+'necap'+_0x429f6e(0x52e)+'nd\x22\x20s'+'troke'+_0x429f6e(0x47c)+'join='+_0x429f6e(0x3e7)+_0x429f6e(0x21b)+_0x429f6e(0x2e4)+'e\x20cx='+_0x429f6e(0x3a3)+'cy=\x221'+_0x429f6e(0x61b)+_0x429f6e(0x493)+_0x429f6e(0x1fc)+_0x429f6e(0x5a4)+_0x429f6e(0x32a)+'/></s'+'vg>',_0x2bb066[_0x429f6e(0x4b3)+'dChil'+'d'](_0x1d5464);var _0x4c2660=document['creat'+_0x429f6e(0x141)+_0x429f6e(0x37e)](_0x429f6e(0x3c3));_0x4c2660[_0x429f6e(0xb9)+'Name']=_0x421c32[_0x429f6e(0x57b)];var _0x50784c=document[_0x429f6e(0x486)+_0x429f6e(0x141)+_0x429f6e(0x37e)](_0x421c32[_0x429f6e(0x421)]);_0x50784c['class'+_0x429f6e(0x255)]=_0x421c32[_0x429f6e(0x1a9)];var _0x3e9922=document[_0x429f6e(0x486)+'eElem'+_0x429f6e(0x37e)](_0x421c32[_0x429f6e(0xc0)]);_0x3e9922['class'+_0x429f6e(0x255)]=_0x429f6e(0x28e)+'tles';var _0x10a8a9=document[_0x429f6e(0x486)+_0x429f6e(0x141)+_0x429f6e(0x37e)]('h2');_0x10a8a9[_0x429f6e(0xb9)+_0x429f6e(0x255)]=_0x421c32[_0x429f6e(0x31e)],_0x10a8a9[_0x429f6e(0x629)+_0x429f6e(0x16b)+'t']=_0x421c32[_0x429f6e(0x404)];var _0x45cae3=document[_0x429f6e(0x486)+_0x429f6e(0x141)+'ent'](_0x421c32[_0x429f6e(0x218)]);_0x45cae3[_0x429f6e(0xb9)+'Name']=_0x421c32['grkgv'],_0x45cae3[_0x429f6e(0x629)+_0x429f6e(0x16b)+'t']='kours'+'trike'+'.io\x20m'+'enu',_0x3e9922[_0x429f6e(0x4b3)+'d'](_0x10a8a9,_0x45cae3);var _0x387933=document['creat'+'eElem'+'ent'](_0x421c32[_0x429f6e(0x4bd)]);_0x387933['type']=_0x421c32[_0x429f6e(0x4bd)],_0x387933['class'+_0x429f6e(0x255)]='mn-cl'+_0x429f6e(0x43f),_0x387933['title']='Close',_0x387933['inner'+_0x429f6e(0x462)]=_0x429f6e(0x437)+'viewB'+_0x429f6e(0x467)+'\x200\x2024'+_0x429f6e(0x5d3)+_0x429f6e(0x36b)+_0x429f6e(0x308)+_0x429f6e(0x5ab)+_0x429f6e(0x3a5)+'18\x206\x20'+_0x429f6e(0x232)+'/></s'+_0x429f6e(0x537),_0x387933[_0x429f6e(0x510)+'ck']=()=>_0x371057(![]),_0x50784c[_0x429f6e(0x4b3)+'d'](_0x3e9922,_0x387933);var _0x2e238c=document['creat'+'eElem'+_0x429f6e(0x37e)]('div');_0x2e238c[_0x429f6e(0xb9)+_0x429f6e(0x255)]=_0x421c32[_0x429f6e(0x412)],_0x4c2660['appen'+'d'](_0x50784c,_0x2e238c),_0x519f7e[_0x429f6e(0x4b3)+'d'](_0x2bb066,_0x4c2660);var _0x158a3e=new Map();for(var _0x440449 of _0x390f8b){var _0x473ef6=_0x421c32['cpFRE']['split']('|'),_0x57aa9a=-0x1f40+-0x1c77+0x3bb7;while(!![]){switch(_0x473ef6[_0x57aa9a++]){case'0':_0x557949['class'+'Name']=_0x429f6e(0x4aa)+'b';continue;case'1':_0x158a3e[_0x429f6e(0x608)](_0x440449['id'],_0x557949);continue;case'2':_0x557949[_0x429f6e(0x510)+'ck']=(_0x3f5b66=>()=>_0x56696e(_0x3f5b66))(_0x440449['id']);continue;case'3':_0x557949[_0x429f6e(0x19b)+_0x429f6e(0x462)]=_0x421c32[_0x429f6e(0x2db)](_0x429f6e(0x333)+'l>'+_0x440449['label'],_0x429f6e(0x1a5)+_0x429f6e(0x1de));continue;case'4':_0x557949[_0x429f6e(0x42c)]=_0x421c32['LIoxZ'];continue;case'5':_0x2bb066['appen'+_0x429f6e(0x590)+'d'](_0x557949);continue;case'6':var _0x557949=document[_0x429f6e(0x486)+'eElem'+_0x429f6e(0x37e)](_0x421c32[_0x429f6e(0x4bd)]);continue;case'7':_0x557949['title']=_0x440449[_0x429f6e(0x5b1)];continue;}break;}}function _0x56696e(_0x368c26){var _0x3a088f=_0x429f6e;_0x14c891[_0x3a088f(0x529)]=_0x368c26,_0x5477cb();var _0x1302ea=_0x390f8b['find'](_0x4608bf=>_0x4608bf['id']===_0x368c26)||_0x390f8b[-0x4*-0x5d+-0x9f0+0x21f*0x4];_0x10a8a9[_0x3a088f(0x629)+_0x3a088f(0x16b)+'t']=_0xa1bb67['uJltw']+_0x1302ea['label'];for(var [_0xc983df,_0x19624c]of _0x158a3e)_0x19624c[_0x3a088f(0xb9)+_0x3a088f(0x424)][_0x3a088f(0x355)+'e'](_0xa1bb67[_0x3a088f(0x406)],_0xc983df===_0x368c26);_0x2e238c['repla'+_0x3a088f(0x277)+'ldren'](..._0xa1bb67['kPusF'](_0x5e0085,_0x368c26));}return _0x56696e(_0x14c891['cat']||_0x421c32[_0x429f6e(0x214)]),_0x421c32[_0x429f6e(0x55c)](setInterval,()=>{var _0x5d57b4=_0x429f6e;if(!_0x2ce9a3)return;var _0x579bb1=_0x2e238c[_0x5d57b4(0xda)+_0x5d57b4(0x379)];for(var _0x29a4=0x20f+-0x1a5d*0x1+0x184e;_0x421c32[_0x5d57b4(0x40c)](_0x29a4,_0x579bb1[_0x5d57b4(0x16f)+'h']);_0x29a4++){var _0xc72787=_0x579bb1[_0x29a4][_0x5d57b4(0x5f1)+'Selec'+_0x5d57b4(0x3f6)](_0x421c32[_0x5d57b4(0x2f6)]);_0xc72787&&(_0xc72787[_0x5d57b4(0x629)+_0x5d57b4(0x16b)+'t']['index'+'Of'](_0x421c32[_0x5d57b4(0x2be)])===0x5c1+0x1*-0xd67+0x7a6||_0xc72787[_0x5d57b4(0x629)+'onten'+'t']['index'+'Of'](_0x5d57b4(0x514))===-0x181f+-0x2*-0xb66+0x3*0x71)&&(_0xc72787[_0x5d57b4(0x629)+'onten'+'t']=_0x5c7d0e[_0x5d57b4(0xba)+_0x5d57b4(0x250)]?_0x421c32[_0x5d57b4(0x3b4)]:_0x5c7d0e[_0x5d57b4(0x346)]?_0x421c32[_0x5d57b4(0x10d)](_0x421c32[_0x5d57b4(0x5b2)](_0x421c32['UDnuU'](_0x421c32[_0x5d57b4(0x8a)](_0x421c32[_0x5d57b4(0x60b)](_0x5d57b4(0x5a1)+_0x5d57b4(0x5e2)+'\x20'+(_0x5c7d0e[_0x5d57b4(0x5e4)+'Total']?_0x421c32[_0x5d57b4(0x52f)](_0x5c7d0e['hooks'+'Ok']+'/'+_0x5c7d0e['hooks'+_0x5d57b4(0x4d2)],'\x20hook'+'s'):_0x421c32[_0x5d57b4(0x13c)]),_0x421c32[_0x5d57b4(0xe6)])+(_0x5c7d0e[_0x5d57b4(0x2f9)+_0x5d57b4(0x1bd)]?'loade'+'d':_0x5d57b4(0x41d)+'ng'),_0x421c32[_0x5d57b4(0xc3)])+(_0x5c7d0e[_0x5d57b4(0x269)+'ers']?'held':_0x5d57b4(0x539)),'\x20|\x20mo'+_0x5d57b4(0x153)+'t\x20'),_0x5c7d0e[_0x5d57b4(0xa7)+_0x5d57b4(0x11b)]?_0x5d57b4(0x5d0):_0x421c32[_0x5d57b4(0x306)]),_0x5c7d0e[_0x5d57b4(0x47a)+'rror']?_0x421c32['zTyFb']+_0x5c7d0e['lastE'+'rror']:''):_0x421c32['fmefq']);}},0xb*-0x1d3+0x13*-0x175+0x33a8),_0x519f7e;}var _0x431957='\x0a\x20\x20\x20\x20'+_0x2eae1f(0x1ac)+_0x2eae1f(0x198)+'l:\x20in'+_0x2eae1f(0x446)+_0x2eae1f(0x565)+_0x2eae1f(0x48a)+'{\x20box'+'-sizi'+'ng:\x20b'+'order'+_0x2eae1f(0x60c)+'\x20marg'+'in:\x200'+';\x20fon'+'t-fam'+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+_0x2eae1f(0x598)+'\x20UI\x22,'+_0x2eae1f(0x1ae)+'em-ui'+',\x20san'+_0x2eae1f(0x40b)+_0x2eae1f(0x1c2)+'\x0a\x20\x20\x20\x20'+_0x2eae1f(0x7b)+_0x2eae1f(0x4c8)+'{\x20pos'+'ition'+':\x20abs'+_0x2eae1f(0x1b9)+';\x20rig'+_0x2eae1f(0x383)+'4px;\x20'+_0x2eae1f(0x324)+'m:\x2024'+'px;\x20w'+_0x2eae1f(0x533)+'\x20min('+'620px'+_0x2eae1f(0x409)+_0x2eae1f(0x26c)+_0x2eae1f(0x2c0)+_0x2eae1f(0x248)+');\x20ma'+_0x2eae1f(0x21e)+'ght:\x20'+_0x2eae1f(0xb7)+_0x2eae1f(0x54b)+_0x2eae1f(0xfd)+_0x2eae1f(0x284)+'h\x20-\x204'+_0x2eae1f(0x2f2)+_0x2eae1f(0x46d)+_0x2eae1f(0x1ed)+'splay'+_0x2eae1f(0x100)+'x;\x20ga'+_0x2eae1f(0x3f1)+'px;\x20p'+_0x2eae1f(0x359)+'g:\x2010'+_0x2eae1f(0x54c)+_0x2eae1f(0x473)+_0x2eae1f(0x2c2)+_0x2eae1f(0x53f)+_0x2eae1f(0x167)+'point'+'er-ev'+_0x2eae1f(0x3e1)+'\x20auto'+_0x2eae1f(0x46d)+_0x2eae1f(0x5ea)+'ckgro'+'und:\x20'+'rgba('+_0x2eae1f(0x23c)+_0x2eae1f(0x613)+'82);\x20'+'backd'+'rop-f'+'ilter'+_0x2eae1f(0x2e1)+'r(22p'+_0x2eae1f(0x3e2)+_0x2eae1f(0x43c)+'e(150'+'%);\x20-'+'webki'+_0x2eae1f(0x231)+'kdrop'+'-filt'+'er:\x20b'+_0x2eae1f(0x22e)+'2px)\x20'+'satur'+_0x2eae1f(0x32d)+_0x2eae1f(0x3da)+_0x2eae1f(0x191)+_0x2eae1f(0xe0)+'-shad'+_0x2eae1f(0xea)+_0x2eae1f(0x5a7)+_0x2eae1f(0x4d9)+'gba(2'+_0x2eae1f(0x1ad)+'5,255'+_0x2eae1f(0x5de)+',\x20ins'+'et\x200\x20'+_0x2eae1f(0x1da)+'\x20rgba'+_0x2eae1f(0x261)+'255,2'+_0x2eae1f(0x27a)+'5),\x200'+'\x2030px'+_0x2eae1f(0x449)+'\x20rgba'+_0x2eae1f(0x458)+'0,.55'+_0x2eae1f(0x13f)+_0x2eae1f(0x48f)+'pacit'+_0x2eae1f(0x211)+_0x2eae1f(0x506)+'sform'+_0x2eae1f(0x12e)+_0x2eae1f(0x399)+_0x2eae1f(0x54d)+_0x2eae1f(0x25a)+'point'+_0x2eae1f(0x4ce)+_0x2eae1f(0x3e1)+_0x2eae1f(0xf3)+_0x2eae1f(0x59f)+_0x2eae1f(0x150)+_0x2eae1f(0x210)+_0x2eae1f(0x1a8)+_0x2eae1f(0x3bc)+_0x2eae1f(0x4f0)+_0x2eae1f(0x43b)+_0x2eae1f(0x282)+_0x2eae1f(0x23f)+_0x2eae1f(0x574)+_0x2eae1f(0x618)+_0x2eae1f(0x1e7)+'(.22,'+_0x2eae1f(0x18b)+_0x2eae1f(0x300)+_0x2eae1f(0x1d6)+'\x20colo'+'r:\x20#f'+_0x2eae1f(0xf4)+';\x20fon'+_0x2eae1f(0x455)+_0x2eae1f(0x5cf)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x2eae1f(0x3fd)+_0x2eae1f(0x3a4)+_0x2eae1f(0x2ef)+'acity'+_0x2eae1f(0x463)+_0x2eae1f(0x2c1)+_0x2eae1f(0x491)+'\x20none'+';\x20poi'+'nter-'+_0x2eae1f(0x52b)+_0x2eae1f(0x127)+_0x2eae1f(0xb8)+'\x0a\x20\x20\x20\x20'+_0x2eae1f(0x480)+_0x2eae1f(0x279)+'\x20disp'+_0x2eae1f(0x420)+'flex;'+_0x2eae1f(0x39a)+_0x2eae1f(0x168)+'ction'+':\x20col'+_0x2eae1f(0x583)+'align'+_0x2eae1f(0x263)+'s:\x20ce'+'nter;'+'\x20gap:'+'\x204px;'+_0x2eae1f(0x566)+_0x2eae1f(0x360)+_0x2eae1f(0x55f)+_0x2eae1f(0x286)+_0x2eae1f(0x3b7)+_0x2eae1f(0xf9)+_0x2eae1f(0x5a5)+_0x2eae1f(0x43a)+(_0x2eae1f(0x50a)+_0x2eae1f(0x14d)+_0x2eae1f(0x314)+_0x2eae1f(0x558)+_0x2eae1f(0x13b)+_0x2eae1f(0x1d6)+'backg'+_0x2eae1f(0x31f)+_0x2eae1f(0x4f5)+_0x2eae1f(0x531)+_0x2eae1f(0x3bb)+'255,.'+'025);'+'\x20box-'+_0x2eae1f(0x545)+_0x2eae1f(0x49c)+'set\x200'+'\x200\x200\x20'+_0x2eae1f(0x4d9)+'gba(2'+'55,25'+'5,255'+_0x2eae1f(0x443)+';\x20}\x0a\x20'+_0x2eae1f(0x15a)+_0x2eae1f(0x2a3)+_0x2eae1f(0x272)+_0x2eae1f(0xbf)+'y:\x20gr'+'id;\x20p'+'lace-'+'items'+_0x2eae1f(0x5e7)+_0x2eae1f(0x72)+_0x2eae1f(0x392)+_0x2eae1f(0x4a9)+_0x2eae1f(0x26d)+_0x2eae1f(0x433)+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x2eae1f(0x385)+_0x2eae1f(0x2cc)+_0x2eae1f(0x3ae)+'25px;'+_0x2eae1f(0x3aa)+_0x2eae1f(0x383)+_0x2eae1f(0x23a)+'overf'+'low:\x20'+'visib'+_0x2eae1f(0x4b4)+_0x2eae1f(0x2fb)+':\x20dro'+'p-sha'+'dow(0'+'\x200\x204p'+_0x2eae1f(0x497)+'a(255'+_0x2eae1f(0x441)+'157,.'+_0x2eae1f(0x3fa)+'}\x0a\x20\x20\x20'+_0x2eae1f(0x3c9)+'tab\x20{'+_0x2eae1f(0x5ed)+_0x2eae1f(0x420)+_0x2eae1f(0x382)+_0x2eae1f(0x24a)+'n-ite'+_0x2eae1f(0x3b2)+_0x2eae1f(0x35c)+_0x2eae1f(0x37a)+_0x2eae1f(0x36c)+'conte'+'nt:\x20c'+'enter'+_0x2eae1f(0x61c)+_0x2eae1f(0x549)+_0x2eae1f(0x167)+'heigh'+_0x2eae1f(0x102)+_0x2eae1f(0x54c)+'order'+':\x200;\x20'+_0x2eae1f(0x105)+'r-rad'+_0x2eae1f(0x45e)+_0x2eae1f(0x8b)+_0x2eae1f(0x191)+_0x2eae1f(0x129)+'kgrou'+'nd:\x20t'+_0x2eae1f(0x4d6)+'arent'+';\x20col'+_0x2eae1f(0x57a)+'gba(2'+_0x2eae1f(0xfc)+_0x2eae1f(0xb4)+',.4);'+_0x2eae1f(0xb0)+'or:\x20p'+'ointe'+'r;\x20fo'+_0x2eae1f(0x1cb)+_0x2eae1f(0x9d)+_0x2eae1f(0x138)+_0x2eae1f(0x39f)+_0x2eae1f(0x15d)+'t:\x2070'+_0x2eae1f(0x16c)+_0x2eae1f(0x3a0)+'mn-ta'+_0x2eae1f(0x16a)+_0x2eae1f(0x1c8)+_0x2eae1f(0x397)+_0x2eae1f(0x4f5)+'a(246'+_0x2eae1f(0x13e)+_0x2eae1f(0x615)+_0x2eae1f(0x15c)+_0x2eae1f(0x191)+_0x2eae1f(0x188)+'ab.ac'+_0x2eae1f(0x123)+_0x2eae1f(0x575)+'or:\x20#'+_0x2eae1f(0x520)+_0x2eae1f(0x1fe)+_0x2eae1f(0x254)+'und:\x20'+_0x2eae1f(0x364)+_0x2eae1f(0x56b)+_0x2eae1f(0x2a9)+_0x2eae1f(0x582)+';\x20}\x0a\x20'+_0x2eae1f(0x15a)+_0x2eae1f(0x393)+'n\x20{\x20f'+_0x2eae1f(0x286)+_0x2eae1f(0x197)+_0x2eae1f(0x3ea)+_0x2eae1f(0x2dd)+_0x2eae1f(0x2a1)+'play:'+_0x2eae1f(0x39a)+_0x2eae1f(0x451)+'x-dir'+_0x2eae1f(0x73)+_0x2eae1f(0x4c2)+_0x2eae1f(0x1ca)+_0x2eae1f(0x570)+_0x2eae1f(0x1f6)+'-top\x20'+'{\x20dis'+_0x2eae1f(0x256)+_0x2eae1f(0x39a)+_0x2eae1f(0xa4)+_0x2eae1f(0xaf)+_0x2eae1f(0x427)+_0x2eae1f(0x19d)+'r;\x20ga'+_0x2eae1f(0x41f)+_0x2eae1f(0x200)+_0x2eae1f(0x359)+'g:\x206p'+_0x2eae1f(0x82)+_0x2eae1f(0xd0)+_0x2eae1f(0x264)+_0x2eae1f(0x519)+'ect:\x20'+_0x2eae1f(0x3b7)+'\x20}\x0a\x20\x20'+_0x2eae1f(0x1f6)+_0x2eae1f(0x2f7)+_0x2eae1f(0x3f5)+'flex:'+_0x2eae1f(0x259)+_0x2eae1f(0x1b8)+_0x2eae1f(0x3ae)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-h\x20'+_0x2eae1f(0x1eb)+'t-siz'+_0x2eae1f(0x58a)+_0x2eae1f(0x55f)+_0x2eae1f(0x1d0)+'eight'+_0x2eae1f(0x4af)+_0x2eae1f(0x565)+_0x2eae1f(0x15a)+'n-sub'+_0x2eae1f(0x112)+'nt-si'+_0x2eae1f(0x9d)+_0x2eae1f(0x23e)+_0x2eae1f(0x402))+('ty:\x20.'+'4;\x20}\x0a'+_0x2eae1f(0x3a0)+_0x2eae1f(0xee)+_0x2eae1f(0x54a)+_0x2eae1f(0x5ed)+'lay:\x20'+_0x2eae1f(0x56e)+_0x2eae1f(0x217)+'e-ite'+'ms:\x20c'+_0x2eae1f(0x35c)+_0x2eae1f(0x61c)+_0x2eae1f(0x338)+'8px;\x20'+_0x2eae1f(0x2b4)+'t:\x2028'+_0x2eae1f(0x54c)+'order'+_0x2eae1f(0x27c)+_0x2eae1f(0x105)+'r-rad'+_0x2eae1f(0x45e)+_0x2eae1f(0xb5)+'backg'+_0x2eae1f(0x31f)+_0x2eae1f(0x12e)+_0x2eae1f(0x37d)+'ent;\x20'+_0x2eae1f(0x397)+':\x20inh'+'erit;'+'\x20opac'+_0x2eae1f(0x5eb)+_0x2eae1f(0x471)+_0x2eae1f(0x17a)+_0x2eae1f(0x536)+_0x2eae1f(0x5be)+_0x2eae1f(0x565)+_0x2eae1f(0x15a)+_0x2eae1f(0x513)+'se:ho'+_0x2eae1f(0x4da)+'\x20opac'+'ity:\x20'+_0x2eae1f(0x525)+'ckgro'+_0x2eae1f(0x145)+_0x2eae1f(0x364)+_0x2eae1f(0x98)+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x2eae1f(0xee)+_0x2eae1f(0x301)+_0x2eae1f(0x5c7)+_0x2eae1f(0x392)+':\x2014p'+'x;\x20he'+_0x2eae1f(0x433)+'\x2014px'+';\x20fil'+_0x2eae1f(0x3c6)+_0x2eae1f(0x50d)+_0x2eae1f(0x448)+':\x20cur'+'rentC'+_0x2eae1f(0x161)+_0x2eae1f(0x7a)+'ke-wi'+_0x2eae1f(0x3ae)+_0x2eae1f(0x51d)+_0x2eae1f(0x4ec)+'linec'+'ap:\x20r'+'ound;'+_0x2eae1f(0x570)+_0x2eae1f(0x1f6)+_0x2eae1f(0x356)+_0x2eae1f(0x81)+_0x2eae1f(0x4f4)+_0x2eae1f(0x24e)+_0x2eae1f(0x1c6)+'ht:\x200'+';\x20ove'+_0x2eae1f(0x29e)+_0x2eae1f(0x2ab)+'uto;\x20'+_0x2eae1f(0x361)+'ay:\x20g'+'rid;\x20'+_0x2eae1f(0x156)+'templ'+_0x2eae1f(0x207)+_0x2eae1f(0x475)+_0x2eae1f(0x80)+_0x2eae1f(0x271)+_0x2eae1f(0x29c)+'fill,'+_0x2eae1f(0x5bd)+'ax(25'+_0x2eae1f(0x410)+_0x2eae1f(0x489)+_0x2eae1f(0xa4)+_0x2eae1f(0xaf)+'ems:\x20'+'start'+';\x20ali'+'gn-co'+'ntent'+_0x2eae1f(0x1e0)+_0x2eae1f(0x213)+_0x2eae1f(0x311)+_0x2eae1f(0x138)+'paddi'+_0x2eae1f(0x216)+_0x2eae1f(0xe2)+_0x2eae1f(0xac)+_0x2eae1f(0x565)+_0x2eae1f(0x15a)+_0x2eae1f(0x1dc)+'s::-w'+_0x2eae1f(0x32b)+'-scro'+'llbar'+_0x2eae1f(0x2cc)+'dth:\x20'+_0x2eae1f(0xb5)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x2eae1f(0x620)+_0x2eae1f(0x1ba)+_0x2eae1f(0x567)+'croll'+'bar-t'+_0x2eae1f(0x152)+_0x2eae1f(0x2d9)+_0x2eae1f(0x516)+'nd:\x20r'+'gba(2'+'55,25'+'5,255'+',.08)'+_0x2eae1f(0x35f)+'der-r'+'adius'+':\x204px'+_0x2eae1f(0x565)+_0x2eae1f(0x47f)+_0x2eae1f(0x1a1)+'d\x20{\x20b'+'order'+'-radi'+_0x2eae1f(0x53c)+'2px;\x20'+'backg'+'round'+_0x2eae1f(0x4f5)+_0x2eae1f(0x531)+',255,'+_0x2eae1f(0x596)+_0x2eae1f(0x62d)+'\x20box-'+'shado'+_0x2eae1f(0x49c)+_0x2eae1f(0x1c1)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x2eae1f(0x1ad)+_0x2eae1f(0x609)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x2eae1f(0x628)+'{\x20bac'+_0x2eae1f(0x516)+'nd:\x20r'+'gba(2'+_0x2eae1f(0x1ad)+'5,255'+_0x2eae1f(0x1a3)+_0x2eae1f(0xc2)+'-shad'+'ow:\x20i'+'nset\x20'+'0\x200\x200'+_0x2eae1f(0x4ac)+_0x2eae1f(0x364)+'255,1'+_0x2eae1f(0x2a9)+'7,.28'+_0x2eae1f(0x457)+_0x2eae1f(0x3a0)+_0x2eae1f(0x5b0)+'rd-he'+_0x2eae1f(0x559)+_0x2eae1f(0x361))+('ay:\x20f'+_0x2eae1f(0x1cc)+_0x2eae1f(0x296)+_0x2eae1f(0x263)+_0x2eae1f(0x48b)+_0x2eae1f(0x242)+_0x2eae1f(0x386)+_0x2eae1f(0x108)+_0x2eae1f(0xf9)+_0x2eae1f(0x5a5)+'11px\x20'+_0x2eae1f(0xf1)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x2eae1f(0x4dd)+_0x2eae1f(0x2f7)+_0x2eae1f(0x4e0)+_0x2eae1f(0x286)+_0x2eae1f(0x197)+_0x2eae1f(0x3ea)+'th:\x200'+';\x20}\x0a\x20'+_0x2eae1f(0x47f)+_0x2eae1f(0x1a1)+_0x2eae1f(0x239)+'le\x20st'+_0x2eae1f(0x2d8)+_0x2eae1f(0x1eb)+'t-siz'+'e:\x2013'+_0x2eae1f(0x55f)+_0x2eae1f(0x1d0)+'eight'+_0x2eae1f(0x4fb)+_0x2eae1f(0x577)+_0x2eae1f(0x57a)+_0x2eae1f(0x54e)+'46,23'+'8,242'+',.45)'+_0x2eae1f(0x565)+_0x2eae1f(0x47f)+_0x2eae1f(0x1a1)+_0x2eae1f(0x628)+'.sk-c'+'ard-t'+'itle\x20'+_0x2eae1f(0x11c)+_0x2eae1f(0x41c)+'olor:'+_0x2eae1f(0x2c6)+'0f5;\x20'+_0x2eae1f(0x50f)+'\x20.sk-'+'mbody'+'\x20{\x20pa'+_0x2eae1f(0x345)+_0x2eae1f(0x435)+_0x2eae1f(0x4de)+_0x2eae1f(0x138)+_0x2eae1f(0x50f)+_0x2eae1f(0x5da)+_0x2eae1f(0xc1)+'\x20{\x20fo'+'nt-si'+_0x2eae1f(0x9d)+_0x2eae1f(0x23e)+_0x2eae1f(0x402)+'ty:\x20.'+'4;\x20ma'+_0x2eae1f(0x130)+'botto'+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+_0x2eae1f(0x1f2)+_0x2eae1f(0xbf)+_0x2eae1f(0x28b)+_0x2eae1f(0x125)+_0x2eae1f(0x588)+_0x2eae1f(0x2af)+':\x20cen'+_0x2eae1f(0x72)+_0x2eae1f(0x454)+_0x2eae1f(0xb5)+'paddi'+_0x2eae1f(0x341)+'px\x200;'+'\x20font'+_0x2eae1f(0x2a6)+':\x2011.'+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x2eae1f(0x5da)+'label'+_0x2eae1f(0x81)+'ex:\x201'+';\x20col'+'or:\x20r'+_0x2eae1f(0x54e)+_0x2eae1f(0xfc)+_0x2eae1f(0xb4)+',.75)'+_0x2eae1f(0x565)+_0x2eae1f(0x47f)+'k-hin'+_0x2eae1f(0x57c)+_0x2eae1f(0xbf)+_0x2eae1f(0x350)+'ock;\x20'+_0x2eae1f(0x39f)+'size:'+'\x2010px'+';\x20opa'+'city:'+_0x2eae1f(0x78)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x2eae1f(0x2a5)+'ositi'+_0x2eae1f(0x116)+_0x2eae1f(0x20d)+_0x2eae1f(0x5f5)+_0x2eae1f(0x533)+_0x2eae1f(0xe8)+';\x20hei'+_0x2eae1f(0x297)+_0x2eae1f(0x49e)+'\x20bord'+'er:\x200'+_0x2eae1f(0x35f)+'der-r'+_0x2eae1f(0xfe)+_0x2eae1f(0x4c4)+_0x2eae1f(0x224)+_0x2eae1f(0x254)+'und:\x20'+'rgba('+_0x2eae1f(0x98)+_0x2eae1f(0x1ad)+_0x2eae1f(0x495)+_0x2eae1f(0x4b9)+_0x2eae1f(0xd8)+'\x20poin'+'ter;\x20'+_0x2eae1f(0x456)+'\x20none'+_0x2eae1f(0x565)+_0x2eae1f(0x47f)+_0x2eae1f(0x415)+_0x2eae1f(0x11e)+_0x2eae1f(0x120)+_0x2eae1f(0x1ff)+'ntent'+':\x20\x22\x22;'+'\x20posi'+_0x2eae1f(0x5a2)+'\x20abso'+_0x2eae1f(0x85)+'\x20top:'+_0x2eae1f(0x26f)+'\x20left'+':\x203px'+';\x20wid'+'th:\x208'+_0x2eae1f(0x2f8)+_0x2eae1f(0x298)+_0x2eae1f(0xdc)+_0x2eae1f(0x35f)+'der-r'+_0x2eae1f(0xfe)+_0x2eae1f(0x428)+_0x2eae1f(0x103)+_0x2eae1f(0x516)+_0x2eae1f(0x2fc)+'gba(2'+'55,25'+'5,255'+_0x2eae1f(0x219)+_0x2eae1f(0x59f)+_0x2eae1f(0x150)+'on:\x20l'+_0x2eae1f(0x1b7)+'2s,\x20b'+'ackgr'+_0x2eae1f(0x22b)+'.2s;\x20'+_0x2eae1f(0x50f)+_0x2eae1f(0x5da)+_0x2eae1f(0x23d)+'h[ari'+_0x2eae1f(0x26a)+_0x2eae1f(0x554)+'\x22true'+_0x2eae1f(0x1fa)+'backg'+_0x2eae1f(0x31f)+_0x2eae1f(0x4f5))+('a(255'+_0x2eae1f(0x441)+'157,.'+_0x2eae1f(0x1f7)+_0x2eae1f(0x50f)+'\x20.sk-'+'switc'+_0x2eae1f(0x27e)+_0x2eae1f(0x26a)+'cked='+_0x2eae1f(0x31b)+'\x22]::a'+'fter\x20'+_0x2eae1f(0x21d)+_0x2eae1f(0x36f)+'px;\x20b'+'ackgr'+_0x2eae1f(0x487)+'\x20#ff6'+_0x2eae1f(0x597)+'}\x0a\x20\x20\x20'+_0x2eae1f(0x5da)+_0x2eae1f(0xe5)+_0x2eae1f(0x39d)+_0x2eae1f(0x254)+_0x2eae1f(0x145)+'rgba('+_0x2eae1f(0x98)+_0x2eae1f(0x1ad)+_0x2eae1f(0x2ce)+'5);\x20b'+_0x2eae1f(0x473)+':\x200;\x20'+_0x2eae1f(0x105)+_0x2eae1f(0x5bc)+_0x2eae1f(0x45e)+'6px;\x20'+_0x2eae1f(0x397)+_0x2eae1f(0x221)+'eef2;'+'\x20padd'+'ing:\x20'+_0x2eae1f(0x244)+_0x2eae1f(0x55f)+'ont-s'+_0x2eae1f(0x5c4)+'11.5p'+_0x2eae1f(0x195)+'tline'+_0x2eae1f(0x546)+'e;\x20bo'+_0x2eae1f(0x61f)+_0x2eae1f(0x233)+_0x2eae1f(0x28a)+_0x2eae1f(0x5a7)+_0x2eae1f(0x309)+_0x2eae1f(0x2a0)+_0x2eae1f(0x261)+_0x2eae1f(0x98)+_0x2eae1f(0x27a)+_0x2eae1f(0x5e3)+_0x2eae1f(0x191)+'.sk-f'+_0x2eae1f(0x1ab)+_0x2eae1f(0x253)+'n\x20{\x20b'+_0x2eae1f(0x4e8)+'ound:'+_0x2eae1f(0x7e)+'419;\x20'+_0x2eae1f(0x50f)+_0x2eae1f(0x5da)+_0x2eae1f(0x289)+'\x20{\x20di'+_0x2eae1f(0x2d5)+_0x2eae1f(0x100)+_0x2eae1f(0x2cb)+'ign-i'+_0x2eae1f(0x235)+_0x2eae1f(0x13a)+_0x2eae1f(0x626)+_0x2eae1f(0x460)+'px;\x20}'+_0x2eae1f(0x191)+_0x2eae1f(0x93)+_0x2eae1f(0x20e)+_0x2eae1f(0x5ef)+_0x2eae1f(0x32b)+'-appe'+'aranc'+_0x2eae1f(0x368)+'ne;\x20a'+_0x2eae1f(0x56f)+'ance:'+_0x2eae1f(0xf3)+';\x20wid'+_0x2eae1f(0x148)+'0px;\x20'+_0x2eae1f(0x2b4)+_0x2eae1f(0x601)+_0x2eae1f(0x224)+'ckgro'+_0x2eae1f(0x145)+_0x2eae1f(0x2c1)+'paren'+'t;\x20}\x0a'+_0x2eae1f(0x3a0)+'sk-sl'+'ider:'+_0x2eae1f(0x1ba)+_0x2eae1f(0x567)+_0x2eae1f(0x20e)+_0x2eae1f(0x3ec)+'able-'+_0x2eae1f(0x302)+'\x20{\x20he'+_0x2eae1f(0x433)+'\x202px;'+_0x2eae1f(0x128)+_0x2eae1f(0x4a7)+_0x2eae1f(0x2a4)+_0x2eae1f(0x7c)+_0x2eae1f(0x2d4)+_0x2eae1f(0x336)+_0x2eae1f(0x180)+_0x2eae1f(0x614)+_0x2eae1f(0x584)+'ent(#'+_0x2eae1f(0x520)+_0x2eae1f(0x3f8)+_0x2eae1f(0x48e)+')\x200\x200'+_0x2eae1f(0x2c9)+_0x2eae1f(0x9e)+_0x2eae1f(0x182)+_0x2eae1f(0x4cc)+_0x2eae1f(0x4a8)+_0x2eae1f(0x3a8)+_0x2eae1f(0x294)+'ba(25'+_0x2eae1f(0x609)+_0x2eae1f(0x3bb)+'.08);'+_0x2eae1f(0x570)+_0x2eae1f(0x57d)+'-slid'+_0x2eae1f(0xd2)+_0x2eae1f(0x4b2)+'t-sli'+_0x2eae1f(0x33c)+_0x2eae1f(0x152)+_0x2eae1f(0x44a)+_0x2eae1f(0x2b2)+_0x2eae1f(0x532)+_0x2eae1f(0xc4)+_0x2eae1f(0x546)+_0x2eae1f(0x14b)+'dth:\x20'+_0x2eae1f(0x552)+'heigh'+'t:\x206p'+'x;\x20ma'+_0x2eae1f(0x130)+_0x2eae1f(0x4ff)+_0x2eae1f(0x12b)+_0x2eae1f(0x128)+_0x2eae1f(0x4a7)+_0x2eae1f(0x2a4)+_0x2eae1f(0x3d6)+'\x20back'+'groun'+'d:\x20#f'+'f6b9d'+_0x2eae1f(0x565)+_0x2eae1f(0x47f)+_0x2eae1f(0x319)+_0x2eae1f(0x112)+'nt-si'+_0x2eae1f(0x9d)+_0x2eae1f(0x23e)+_0x2eae1f(0x39f)+_0x2eae1f(0x15d)+'t:\x2060'+_0x2eae1f(0x5bf)+'n-wid'+_0x2eae1f(0x338)+'8px;\x20'+_0x2eae1f(0x323)+_0x2eae1f(0x296)+_0x2eae1f(0x2d6)+_0x2eae1f(0xb1)+'olor:'+'\x20rgba'+_0x2eae1f(0x526)+_0x2eae1f(0x477)+_0x2eae1f(0x52c)+_0x2eae1f(0x457)+_0x2eae1f(0x3a0)+_0x2eae1f(0x1d1)+'lor\x20{')+('\x20widt'+'h:\x2034'+_0x2eae1f(0x2f8)+_0x2eae1f(0x298)+':\x2022p'+'x;\x20bo'+_0x2eae1f(0x5ae)+_0x2eae1f(0x1f8)+'order'+'-radi'+'us:\x206'+_0x2eae1f(0x54c)+_0x2eae1f(0x4e8)+'ound:'+_0x2eae1f(0xf3)+';\x20pad'+_0x2eae1f(0x3de)+'\x200;\x20c'+_0x2eae1f(0x44f)+':\x20poi'+'nter;'+'\x20}\x0a\x20\x20'+_0x2eae1f(0x57d)+'-note'+_0x2eae1f(0x112)+'nt-si'+_0x2eae1f(0x9d)+_0x2eae1f(0x23e)+'color'+_0x2eae1f(0x4f5)+_0x2eae1f(0x22f)+',238,'+'242,.'+_0x2eae1f(0x312)+_0x2eae1f(0x359)+_0x2eae1f(0x56c)+'x\x200;\x20'+'}\x0a\x20\x20\x20'+_0x2eae1f(0x5da)+'note.'+_0x2eae1f(0x3d8)+_0x2eae1f(0x24c)+'r:\x20#f'+_0x2eae1f(0x1f9)+';\x20}\x0a\x20'+_0x2eae1f(0x47f)+_0x2eae1f(0xeb)+_0x2eae1f(0x198)+'ign-s'+_0x2eae1f(0x602)+'flex-'+_0x2eae1f(0x40a)+_0x2eae1f(0x35f)+_0x2eae1f(0x331)+'0;\x20bo'+'rder-'+_0x2eae1f(0x314)+_0x2eae1f(0x46c)+_0x2eae1f(0x509)+'dding'+':\x208px'+_0x2eae1f(0x329)+_0x2eae1f(0x103)+'kgrou'+_0x2eae1f(0x576)+'ff6b9'+_0x2eae1f(0x41e)+_0x2eae1f(0x2eb)+_0x2eae1f(0x4ad)+_0x2eae1f(0x257)+_0x2eae1f(0x2a6)+_0x2eae1f(0x34b)+_0x2eae1f(0x23a)+_0x2eae1f(0x39f)+'weigh'+_0x2eae1f(0x7f)+'0;\x20cu'+_0x2eae1f(0xd8)+_0x2eae1f(0x290)+_0x2eae1f(0x72)+'}\x0a\x20\x20\x20'+_0x2eae1f(0x5da)+_0x2eae1f(0x586)+_0x2eae1f(0x183)+'{\x20fil'+_0x2eae1f(0xd7)+'brigh'+_0x2eae1f(0x5c3)+'(1.1)'+';\x20}\x0a\x20'+_0x2eae1f(0x2de));window[_0x2eae1f(0x4e2)+_0x2eae1f(0x75)+_0x2eae1f(0xd6)+'r'](_0x2eae1f(0x38c)+'wn',_0x36fd2c=>{var _0x1cee23=_0x2eae1f;_0x421c32['FEdFt'](_0x36fd2c['code'],'Inser'+'t')&&(_0x36fd2c[_0x1cee23(0x4d4)+'ntDef'+'ault'](),_0x421c32['aWeoU'](_0x2135cf));},!![]);var _0x2e2fc1=document['creat'+'eElem'+_0x2eae1f(0x37e)](_0x2eae1f(0x3c3));_0x2e2fc1[_0x2eae1f(0x528)][_0x2eae1f(0xe9)+'xt']=_0x1eb54c['EmcDH'],_0x2e2fc1['inner'+_0x2eae1f(0x462)]=_0x1eb54c['XasdK'],_0x2e2fc1[_0x2eae1f(0x243)]='Sakur'+_0x2eae1f(0x407)+'r',_0x2e2fc1[_0x2eae1f(0xdf)+_0x2eae1f(0x3f7)+'er']=()=>_0x2e2fc1['style'][_0x2eae1f(0x402)+'ty']='1',_0x2e2fc1[_0x2eae1f(0xdf)+_0x2eae1f(0x158)+'ve']=()=>_0x2e2fc1[_0x2eae1f(0x528)]['opaci'+'ty']='0.5',_0x2e2fc1['oncli'+'ck']=_0x2eb6e5=>{var _0x411f4f=_0x2eae1f;_0x2eb6e5[_0x411f4f(0x3df)+_0x411f4f(0x30d)+_0x411f4f(0x49a)](),_0x2135cf();},document[_0x2eae1f(0x170)]['appen'+_0x2eae1f(0x590)+'d'](_0x2e2fc1),_0x2d51b7(),_0x1eb54c['WOZUv'](requestAnimationFrame,_0x2a5d65),console[_0x2eae1f(0x223)](_0x1eb54c[_0x2eae1f(0x4ab)],_0x5c7d0e[_0x2eae1f(0x346)]);});})()));function _0xc50e(_0x533f64,_0x2b8265){_0x533f64=_0x533f64-(0x1eac+0x1e5e+0xe*-0x454);var _0x39c91d=_0x16f6();var _0x33f7a6=_0x39c91d[_0x533f64];if(_0xc50e['kdbInt']===undefined){var _0x555cc3=function(_0x502e9f){var _0x397522='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1b5082='',_0xf06365='';for(var _0x28bea8=0x1*0x22fd+0x5fd+-0x28fa,_0x5e9586,_0x3b357c,_0x199197=-0x723+-0xffb+0x10d*0x16;_0x3b357c=_0x502e9f['charAt'](_0x199197++);~_0x3b357c&&(_0x5e9586=_0x28bea8%(0x1e6a+-0x1554+-0x1b*0x56)?_0x5e9586*(0x5e7+0x2e*-0x18+-0x157)+_0x3b357c:_0x3b357c,_0x28bea8++%(-0x1e75+-0xab1+0xb*0x3be))?_0x1b5082+=String['fromCharCode'](-0x2458+0x145a+0x10fd&_0x5e9586>>(-(0x3e5+-0xc71+0x88e)*_0x28bea8&-0x600+0x1f84+0x2*-0xcbf)):0x14c6+-0x1d14+-0x1*-0x84e){_0x3b357c=_0x397522['indexOf'](_0x3b357c);}for(var _0x80f47e=0x1145*-0x1+0x2*-0x871+0x2227,_0x4b51a9=_0x1b5082['length'];_0x80f47e<_0x4b51a9;_0x80f47e++){_0xf06365+='%'+('00'+_0x1b5082['charCodeAt'](_0x80f47e)['toString'](-0x9*0x28e+0x3b*0x1f+-0xfe9*-0x1))['slice'](-(-0xfe7+0x1*-0x17a8+0x2791));}return decodeURIComponent(_0xf06365);};_0xc50e['DSeyGq']=_0x555cc3,_0xc50e['lIJuIM']={},_0xc50e['kdbInt']=!![];}var _0x5bd68b=_0x39c91d[-0x24a5+0x1085+-0xa1*-0x20],_0x15d127=_0x533f64+_0x5bd68b,_0x443c9c=_0xc50e['lIJuIM'][_0x15d127];return!_0x443c9c?(_0x33f7a6=_0xc50e['DSeyGq'](_0x33f7a6),_0xc50e['lIJuIM'][_0x15d127]=_0x33f7a6):_0x33f7a6=_0x443c9c,_0x33f7a6;}function _0x16f6(){var _0x1ae3a6=['ywXSig8','Dg5LC3m','AxPLoIa','CMfUC2K','CgnHCeK','DMCGEYa','AxrJAa','BNjOAM0','mhGYnta','u1rfEha','BNLTqNm','A2uTBgK','mcWWlJu','ztOGmtm','AgvSza','lJv6iIa','B25Lige','idi0iJ4','uNvUDgK','DxjH','ANbfA3G','rLfLwgm','qMLgEhy','ndGZnJq','ic5ZAY0','igj1AwW','z29K','B2reAwu','lc4WnIK','CMvSB2e','CNr1Cca','sw5MAw4','yM91BMq','nsK7ih0','Ag9VA3m','Aw5WDxq','u3rHDgu','oIbJzw4','A0HhuMy','igXPBwK','icaGyMe','Axr5oIa','qvDQrwi','igrPC3a','ifjLy28','ihSGlxC','B3uU','CxvLCNK','DhjPyNu','uMvJDa','y2vZlG','DMu7ihC','nsaWlti','B3qGBwe','C2STBwq','ALzlt1a','CYbpDMu','ig1HEsa','zIXZExm','uMvMAwW','rePjCMC','mNb4ihu','C2v0qxq','DdOGoha','zwXMoIa','sg9VAYa','BM9tChi','idqGnc4','zufpuxe','rKTwzLi','C2v0','nsWYntu','zgPttvC','D1Huuwe','lwjVEdS','BgDPtMW','BMXMr2y','uhHoz0C','n3WWFdu','zwfSDgG','yxLoC2y','ldiXlc4','BMvHCI0','mJqYlc4','u2zvv20','C0LJAeO','yMLJlwi','ieLZr3i','CMqTAgu','mciGCJ0','oYb3Awq','Ad0ImIi','BNn0ywW','Ec1ZAge','y29SCZO','y3jVC3m','sNvTCfq','uIb2ms4','B3vUzgu','q0riyxC','zxi7igC','v2r4uvK','zc5VBIa','Dgv4Dem','CMfPC2u','igrHBwe','BMzMyMK','mdi1ktS','oc00lJu','zM9UDa','DgvYoYa','zwn0Aw8','wM9eA0G','zw50tgK','Dg1vEwW','zg5erwe','ic40oYa','oJa7D2K','ihn0CM8','lM1Ulxa','idjWEdS','rgPdrM0','icmYmJe','DdOGnZa','CZOGCMu','ihSGzMW','Eca2ChG','wfrxuvm','ihrOzsa','Bhv0ztS','senPrxC','igLMig0','B290zxi','y2n1CMe','EfjMrvi','mtbWEdS','Cw9Ps1e','yKjUzwu','B01Iu3u','Dw5Kzwq','AxHLzdS','y3jLBwu','qwnyAKe','lNnRlxm','t0zgigi','s2jzDu4','idK5osa','A2v5C3q','mJu1ldi','su5RtMq','Dufry1i','u0fgrsa','te1c','EMu6ide','CIGTlxa','DgPyugq','B3n0zMK','qvzRAxu','uwzjww4','EhjysgS','oYbHBgK','tg9JywW','Cg9ZAxq','Bw92zw0','nZTWB2K','q0fovKe','BuzPDMS','EsbKzwy','nNb4ida','mcWWlJy','BwvIzhK','z24TAxq','ign1CNm','Ahq7igm','Aw9Iyxm','ywLYlG','ocWYndi','ohb4oYa','s2v5qq','BwLUkdq','Dg87ih0','y2XHC3m','C2fMzu0','mhW0Fdi','CgXPy2e','vK13Bva','AwXS','AxnWBge','EKLvzhm','BwrLC2m','oYbIB3G','BNLcueW','CMfUy2u','Bw4TC2K','CM9ZC2G','s2v5C3q','zxjZy3i','AxmGAg8','zvPLz1i','C29osfy','i2zMnMi','r3jHDMK','AguGDxm','De5Vzgu','ideYChG','m1P6BNzrqq','zxi6oI0','BwLXufm','CM9Rzxm','zMLSBfq','C3rLBMu','DgvYoIa','CNnVCJO','AxrPyxq','y2HPBgq','z2v0sxq','oIa4ChG','zw1LBNq','zMLSBa','B25TB3u','icbIB3G','re9OAKC','idrWEca','Be1VDgK','igH1CNq','zMLLBgq','vxLdq3O','idqTnc4','idi2ChG','y3nZvgu','B3C6ida','AY1IDg4','tvrKu1G','khjLBg8','Bw4Ty2W','BgLIsg0','re9nq28','mtjWEdS','Bg9Hzca','ig5VBMu','nMvLzJi','DxqGDgG','sMfUBxC','yM90Aca','Bg9Hzc4','ihbHzgq','oNbVAw4','A3nty2e','ndySmJm','ignHBgm','ywrPDxm','y29TyMe','oIbMBgu','CNftwNC','DdOGmZq','oYbIywm','D2rZEuC','yM9Yzgu','rvnWwwG','Den2zem','idHWEdS','vhHKtNy','C2v0uhi','vvz3sgi','AwDMs3y','vurUDvu','y2HLCYa','As1TB24','mZqZodeYA05KAKHr','t0HLywW','ihSGzM8','CMvJDa','r2DYAue','qxz1B3i','B246ihi','u2TPChm','wgHkwK0','ig5VigG','ifTfwfa','zw50CW','C3rYB24','r0jnu2u','DgnOoJO','yxjPys0','ywz0zxi','y2fWDhu','C0PmzxK','DgL2zsa','nJaWide','zxG7ige','v0fttsa','CZOGyxu','igjVCMq','icbIywm','zsaOt0G','ltjWEdS','C2f2zq','z3zsDee','oIb0CMe','BgLUzvq','CMDPBI0','Dgv4Dee','tMrozNu','BwvUDca','DMfSDwu','wffRwge','yxb0Dxi','ltiUnsa','mhb4oYa','B2LRvxi','ignLBNq','ChG7cIa','u3bvyLq','CYbpsgu','ldiZocW','ktSkica','sgLKzxm','zuvSzw0','Dgjsy08','x19ZywS','BNrLCI0','Dw5KoIa','vwnTDK4','zvzHBhu','DgG6idK','t1nOB28','Fdj8nhW','ztSGD2K','u2HHCNa','CMrLCI0','vvDnsW','Bu1PuuO','BNnPDgK','uuHnDwy','AhvTyIa','DMvTzw4','CMuGkfm','zsb3zwe','z3jPzc0','v2vHCg8','C2vSzwe','BwuG','icaGlM0','zwCGzMe','ocK7ih0','D2vPz2G','DMLZDwe','Bw4TBwe','mNb4o3i','B2XVCJS','yxbWBgK','zsXTB24','igvUDgK','BgLJyxq','r2PsEeO','mNb4oYa','lwrPCMu','Eu92vxy','yJPOB3y','B250zw4','mdSGFqO','Dg87zMK','m3W0Fde','BgvUz3q','yM9KEq','uNfnwvm','zvj1BM4','BhKGkhi','CKfisve','AwDUyxq','igrLzMe','r2PcCK0','qNvUBNK','BwvqqMe','y3vYC28','AxmGyNu','DtmY','zwqGyw0','yxjNzxq','DhLSzq','zdOGBgK','te1NExy','lca1mcu','B3zLCIa','AgfZ','C2v0vhi','BM8Gy2G','y2fWtw8','lM1Ulxq','u2fRDxi','yxnLBgK','msWUmZy','AfnOywq','BxKGC2u','Ce5vEgS','t1jey0q','ienquW','cIaGica','B3jZige','verjzxa','BMLUzW','EdSGB3u','psjTBI0','mtSGBwK','ihSGywW','sxH4uLC','zw50rwW','Aw5Uzxi','A2vZig8','y2vUDgu','y2fWu2G','A2vizwe','yMX5lum','AY1Jyxi','r29Kie0','lc4WncK','Ag9VA0C','pc9ZBwe','Bw4Ty28','CgfNzsa','CgfJAxq','BwnVqLe','A3nqB3m','AwvSzca','oMHVC3q','ntuSmJu','ihn5C3q','zgfTywC','s2v5vW','DgHLihC','Dgv4Dei','lIbuDxi','DYGWida','4Ocuig92zq','sufvteO','zwz0ic4','Aw4TD2K','B2X1Dgu','oI13zwi','A2PcDwq','rMzPywq','B2fKzwq','Fdv8mxW','qLnIyMy','ltqTnY4','C2v0ida','Awy7ih0','zgP4r0e','BLbSyxq','Bwf4','lwHLAwC','z3jHDMK','zxiGEYa','CNjVCG','BhvTBJS','BNqTC2K','Bgv4oYa','tKCGlsa','u2L6zq','y2fSBhm','B250lxC','C2STy28','B25LigK','zhjVCc0','iM5VBMu','zwv6zsa','icaGica','B2LS','sgvHBhq','nhW3Fdu','mxb4ida','uJOG','BI1JB2W','CgfYC2u','BgW+','txbbAuq','oIbZDge','zxjZ','tw92zq','u3bHy2u','igTVDxi','ywLSzwq','DMLLD0i','zxPPzxi','uxHizNG','tNfMtLG','igvMzMu','EYbMB24','sNDNtKu','icaGzgK','mti4mJaXnwfWEMfXua','zg93BIa','B29Rihi','zgTPDa','Bcb7igq','ug9ZAxq','zcbJAg8','A291CI0','icaUBw4','mJuPoYa','ida7igi','zJDHotm','iL0GEYa','zezPrva','igzPBgW','AgrPCMi','zdSGyMe','ihSGy28','ChG7iha','ig5LDMu','AguGzNi','zsb0CMe','BMvS','zvjHDgu','Aw9FmZa','yxrLlwm','CMqTDgK','BfjtBuG','vxbduhG','Fdn8mxW','mtySmc4','zwXHDgK','BgLKzxi','DgLKzvC','B246ig8','EtOGmdS','zxrhyw0','CNq7igC','tw9ywhu','zgvZ','BMC6ida','ihbSywm','ueLSCgS','lc4YnsK','CMXHEsa','zciVpJW','B2r5','EYbSzwy','Ec1OzwK','CML0zxm','z2v0','oIaJzJy','C2STDMe','Bg9N','EdSGyMe','v3zQwvy','rgfTywC','mcuUifm','BMf0Dxi','v2fjveu','Ag9VA1a','B3vUzca','z2v0rwW','ihrVide','BhvYkdi','ysGYndy','DwX0','Dc1Iywm','nIaXoci','zg93oIa','zvLLvgS','DgvTCZO','nJaWia','DezYwfG','ywDLigq','zc10Axq','nxb4oYa','D0f6qM4','mJqSmtC','C3DPDgm','mxb4oYa','CM0GlJq','q09rCue','BgLUzw4','BNrLCJS','DgL0Bgu','nNb4idK','wKDos1e','DxmGywm','Aw9UoMy','ndHWEcK','zMPUzNi','igfSAwC','Ewrlwe8','ignVBg8','uNbNENm','oYbTAw4','igvYCG','B2rL','ndC0odm','ie1VDMu','B3b0Aw8','y2TNCM8','tMfTzq','CgXHEtO','igzVBNq','CYb3B24','ide7ig0','ChGPoYa','uwrttMW','ys11Aq','igfUzca','wfHIt0e','q29SB3i','CMvHza','kdi1nsW','C2v0x3q','lwL0zw0','oYb1C2u','yNv0Dg8','uMvJB2K','t3zLCNC','wMHTDui','C2HVB3q','ys1JAgu','BLLYtMe','yYGXmda','EdSGAgu','ihnVig4','idnWEdS','i2zMyJm','CgvHDcG','BYb7igq','ihWGBw8','B3b6ALC','ihjLBg8','ihWGz2e','y2vdAgK','ig1VBwu','AwrLihS','ntuSlJa','BguGAwy','oIaWoYa','BcbKCMe','AfTHCMK','nc00lJu','AwXLzdO','AMf0wgG','yw5ZzM8','ig9YigS','kdeWmhy','B25SEsW','Bgv4oIa','yKrjz3O','qxbWBgK','CMfUz2u','Aw5Zzxq','EtOGzMW','Bw92zvq','ywqU','Bw4TDgK','tg9Hzgu','ihbVAw4','ELPdAg8','AguGzgu','wLfOEeq','DcWGCMC','ig9U','ywXPz24','z2H0oIa','zwLNAhq','ywqGDg8','tgvMDca','rMLmuvC','yxv0BY0','y3jLzw4','CMzSB3C','Aw9UlLq','ihjNyMe','oYbKAxm','CMeTA28','BI1SB2C','zgL1CZO','Acb7iha','lxnPEMu','tLvbB2y','qun5zeK','mdCSmtu','nxm0idi','lxK6ige','Dxbfrui','zwfKB3u','i2zMzG','AxrLBxm','B0fmz0O','vvjbx0S','yMTPDc0','zhbY','AgvPz2G','BgLUzvC','wNfNA0u','Fdj8na','y3K9iJe','AcbVBMu','owqIihm','CuvZtLe','ihnOB3q','zezuqvq','uvDYBLe','lwHVCa','DNCGlsa','DhjHBNm','lxjHzgK','BwLKzgW','B3vUDgu','A3HoCwC','icnMzMy','teXouvK','zwLQr2K','ic8GDMe','D0jSDxi','EdSGywW','ihSGD2K','C2STBge','nsWUmdm','yMvNAw4','ChnTCfO','zsbBrvG','ENz6seC','ChrxDgm','igjHy2S','C3bSyxK','oIbYAwC','ANvTCfa','CM9UzYa','EYbIywm','Ag9ZDg4','vhzrvKu','CI51As4','DgG6ida','icaG','y2SP','BM93','oIbIBhu','yMHVCa','Cwrer1O','y2LYy2W','AgvrDMu','ChGGDwK','qNPZuwy','y2uGB3y','wMvYB2u','DcbHihq','Bg9YoIa','ywX0Ac4','Dg9W','sLfQwgu','ihSGB3a','yKrly2u','tuLtu0K','ohb4ksK','AwPfs1K','lsbVDMu','wLHuvg8','ExLWy2O','lxrPDgW','ChG7igG','z2fTzuW','idi0iIa','AwX0zxi','BMq6ihi','Bw9fEha','DevwD1K','qK51Ahm','ldePoWO','B3nLihm','DhjHy2S','uK1c','DxjDifu','BerPzsW','DMTrt2q','uLb5uwW','igq9iK0','mcaXChG','qLzUAee','zu1WsKK','qw9YDg4','CM9WywC','Bg9JAW','zhjhAKq','ihjLy28','yxa6ide','nsK7iha','yxrLvge','CMfKAxu','tM8GuMu','mtaWid0','zxjSyxK','yxrSEsa','AY12ywW','q1HswLu','iNrYDwu','DgHYB3C','CMfWAwq','zwX5Exu','CM91BMq','sufUvwG','BM9szwm','uMjHExm','Dgv4Dc0','yM90Dg8','wwf1zem','mhW2Fdm','B2XPBMu','CgLmr28','ide2ChG','nMi5zci','zwjRAxq','BgWGBwu','yxrLkde','DvHlB3e','vgLJAW','CxHkq2q','zgvYoIa','DgHVzca','phnTywW','ihDOAwm','s2v5ra','z3jVDw4','zxjYB3i','DgG6idi','uNrHtgm','B3bLCNq','DMLHifm','zgvYlxq','qM5vuLq','AeLozxu','mJC4BePPsKHM','zw51ihi','BMC6idq','BMqGBwe','DgjOu3u','Aw1Llca','zgrPBMC','DxDTAW','zKfoAxi','Bgf5ig8','yw1L','t0f4AuW','oIaXms4','vgfRzxm','mtmXoeDRtu9eDW','mtC3ndq1nNbbAhbvyG','sxD1DxO','EtOGyMW','t1vsx18','tef4EMS','tLfzAuC','zu5Kvvm','Dg9Nz2W','lwnVBhm','Ag9VA0m','BMuUqxa','ywrKAw4','wvbRsuG','zxH0','zw50zxi','AwvSza','rgLL','oYbIB3i','AdOGnJi','zgLZCgW','BhrOige','C2STBM8','CMDIysG','DhLqy3q','CMvHzhK','rxHW','ztOGBM8','zMLSBd0','iokaLcb0zq','phbHDgG','DgLMEs0','j3qGC3q','z2v0qxq','DdOGmtu','lKXVy2e','zwf0CYa','z3LIywm','D0nVBg8','rw5ou1e','q3jVC3m','uMvZzxq','yK5eruW','ihWGrvi','CMvU','oYbQDxm','lK92zxi','mNm7Cg8','BNnWyxi','zw50','z2uUiei','igDHDgu','CeXRsee','zMXLEdS','Ahq6idi','D2fYBG','BY1ZDMC','igDHCdO','A2v5Dxa','tvfWzeS','z2v0q28','r3v4te0','y2HdB2W','A2v5zg8','tNvWEwG','uMz0uxG','Aw5Mqw0','zJmY','B05zzuO','D2LKDgG','BI1TywK','BwvsDw4','yNPdrgm','DxjLihq','y29SB3i','zuv4Ca','BNnSyxq','igzSzxG','DgvY','Dgn6t1K','ihSGyMe','u2DsENe','zM9UDc0','icaGic4','veH6C20','whzdDxa','iJeYiIa','C2HVD24','mIaXmK0','ywjTvMq','z25VDKG','CMvWzwe','vgHLC2u','igHLAwC','DgLKzs4','rw5NAw4','vurjDMi','zhrOoIa','Aw9U','uKLls0y','swPkz20','Bxm6igm','lwfWCgW','s1fHt0u','D1rlrfO','teDrELa','BM9UztS','C2HPzNq','D2HLCMu','sfzyqva','ldi1nsW','EsaUmZu','B24Oks4','DgHPCYa','ifvxtuS','mJe4mJe3nLrlCMHgEG','zwLUC3q','wMzwD1u','zgL2','EMXIqxG','zxzLBIa','BdOGBM8','BMqGt0G','D1z2B0C','ic5TBI0','B3rZlG','sxvjyKu','ywrIBg8','zwfKige','zMLSzw4','AwvZlG','yvHiv3K','v0DUBLa','lJuGms4','zM9YBxm','uLH6wK0','v2LWzsa','iduWjtS','CI52mq','zxjYihS','nhWZ','ntaLktS','mZuSmJq','yM5NCwi','A1bTEKu','zgLUzZO','C3rVCfa','C2STC3C','zw50CZO','EcKGC2e','v0ftrca','zuHQvLq','BMv2zxi','CM9Szq','iNjVDw4','AgfPCG','y29Kzq','BI13Awq','vhLMvuW','lxj1BM4','DhKGjq','B29RCYa','CvrOELK','CwXRvfu','CdOGmta','DhKGDMe','zNvSBhm','Du52qNK','zxmGEYa','Dg9Y','C2vLBNq','zcWGi2y','ywqGD2G','ocKPoYa','igfWCgW','zMyP','yw5LBc4','yMX1CG','z29KrgK','CJOGDgG','tgn0zee','B3bHy2K','oJiXndC','qKPNyNq','zg1QEhG','A0XRuhq','ysblB3u','vKPWwMW','lcbJywW','C3rHCNq','CY1Zzxi','suzcufa','DuPxsve','twLZyW','mZiWotG4nKnMy0zfrW','mhb4lca','Bw4TBg8','CKTPENO','idaGmJq','EvPJqNq','AY1ZD2K','C3bHBG','q2HSuwW','ELPsD3a','ugf0Aa','Bg9Hzhm','DdOXmda','zYb7igm','Bg9HzgK','zdSGy28','CdOGmti','Bgf5oIa','BKLLBvK','l3jHCgK','tezkExm','tgLZDa','rNjHBwu','AwvKigm','zw1ZoIa','oIa1mcu','zw5HyMW','w3nHA3u','qMP2rgq','DhLWzq','tLbzA24','s3jZtgm','BKfqzei','vuT6q2e','z1DMrMu','weLdzMy','AwDODdO','y2XLyxi','oIaWide','rKL4rgK','phn2zYa','DgvZDa','Bw4TDg8','mtjWEca','zsWGDhi','DhvYyxq','EuTIq1K','odaSmtK','B3nL','igLZigm','ldeWnYW','Bwf0y2G','lc4WnsK','tw92zw0','zgj2zu0','AxrPywW','z2DSzwq','DhjVA2u','idGWChG','EYaTD2u','v0fiD1G','z29KicG','Awr0Aa','yxKGB24','DxjZB3i','uMf0zq','oYbMBgu','DhnlA0C','BIb0Agu','z2fWoIa','Dc1ZAxO','zMXLEdO','ktSGFqO','kdaSmcW','y2fSBa','yY0XlJu','C3bLzwq','C2vSzwm','y2fUDMe','AxvZoIa','BsbYAwC','yxa6idG','igXLyxy','sfrnta','oIaXoYa','B24UvgK','Bw4TCge','lMXHC3q','B3G9iJa','Fdv8mhW','nJTWB2K','BhrO','Aw9F','CZOGoha','oWOGica','vw5PDhK','Aw5JBhu','BYb0Agu','lJq1oYa','y2L0EtO','B3jKzxi','zg9JDw0','B2X1Bw4','BMDL','mJm4ldi','zvrHA2u','ieDLDfy','BgfZDeu','zwfWB24','lwXPBMu','ALfzDMe','qxnZzw0','icaGlNm','lM1Ulxm','Bxrkv3C','BhrLCJO','DgvTlxu','Bg9Hzgu','wwvwsxa','y3jLyxq','B3vUzdO','u2v0r2e','mwzYksK','icaGkIa','CZOGy2u','CuHyC3O','Bw91C2u','zJzIowq','icaGig8','AwrHDgu','zM9YBtO','vMjIDgK','iJeUnsi','igv4Axq','nsWUmdC','z2LMEq','EcbYz2i','t0XezvC','Aw4GC2e','yxrPB24','qMXVy2S','DZOGAw4','DhjwvxK','mtrWEdS','tu9ersa','CMvZDg8','BgvMDa','s2LSBgu','vMnpBhm','kg92zxi','qwz0vLG','igP1Bxa','zxiTCMe','jsbUBY0','oIaZmNa','Bw4TDge','zgLbzfy','idfWEca','i2zMzJS','zgv2Awm','oIa2nta','ns00idC','twHwA3K','D2vIA2K','yxbWzw4','Bgu7igy','C3rYB2S','ys5RB3u','A3ndChm','sNvTCca','ktSGy3u','tLj4D1a','CgvHCxa','zxrsrvy','teLVEfO','DMfS','AgvHzgu','rvnms3q','y3fzrfq','BJOGy28','zgvZyW','oIa5oxa','EuvUz2K','uxv4t3e','v2vItw8','yw5LBca','ihLVDxi','AtmY','vMn1Ce0','ksaXmda','ywWGBwu','zxiTzxy','ywn0A0S','BgLNBG','BwvZC2e','vg90ywW','idiWmg0','ChjLDMu','DxPSr1i','CMfUC3a','C2STBwi','DM9LtgG','mxb4ihi','DMvYihS','qM90Dg8','B3nWywm','lwnHCMq','mNb4ide','DLjmsNq','zsb7igy','CMLZAYa','ywrKrxy','zxG6mJe','rM9Yy2u','B2TLpsi','C2zsCMG','u2nHBgu','ywnRz3i','C2XPy2u','zsbTAxm','zcbZzwu','CM9Rzs0','sfziDgO','y3KGB24','AgvZ','CYbLyxm','B3bltNi','mc41o3q','sgz0CLi','zxG6ide','oIbYz2i','zNbZ','EM1JvMy','BYbWAwC','rMLLBgq','lwjHBNi','oIa2mda','Axb0kq','CYaNzNu','Ag9VA04','Dg9WoIa','EwzTvfe','DhjHBxa','vMfSDwu','BwvKicG','B24Gzxy','yMnsv0G','ihrYyw4','reLwzhO','t3DtrLC','EdSGCge','mdSGyM8','venhzNq','zMLSBfm','BMu7ihm','C3bSAxq','FqOGica','B25JBgK','ywrK','nYWWlJm','BI1JBg8','u0fgrq','sw5ZDge','A2DYB3u','nYWWlJC','wuLZzuu','CI1ZzwW','CMvHzey','rwfJAca','zs5bCha','mJSGC3q','ms4XlJa','ueHSA3e','zMy2yJK','lxnLCMK','tgvNAw8','zw15igm','BMnL','mtSGyMe','kdi0nIW','BxbXy0W','C3r5Bgu','y2f0','uLrmr0O','zxzLBNq','ndiSlJG','Ee5zreG','psjYB3u','q05HBhm','Bw92zq','ysGYntu','yxbWzwe','Awr0AdO','Bw1VifS','AwH4EvC','CJOGCg8','DMC+','zNHHv2C','BM9Uzq','yxj0lG','mJzWEdS','Dxm6ide','BLDMve0','B3zLCMW','Dxm6idi','DgvYigm','BMjRq3q','sKnOELi','wurvtw8','t0Ttu3u','C2HHzg8','oIbUB24','yxnZAwC','DgXL','DgG6idu','B3nLihS','odbWEcW','ChG7igi','zvKOmtG','z2jHkdi','D2L0Ag8','C2fRDxi','EdTVCge','nNb4oYa','Dhj1zq','y2TLzd0','A3mGyxi','EgvZige','zvbSDwC','CZOGmty','ywqGEYa','CYbnB3y','AgLquhy','Evb4ENK','B24U','C2v0sxq','ChG7igy','lMrSBa','CMvMAxG','AxnPyMW','vhPnzfe','mhWYFdy','oYb9cIa','ihDPzhq','A2L0lxm','y2HLy2S','wff6sNG','ChvZAa','mJu1lde','zZOGmNa','BMf2','z3jPzdS','ChbLyxi','ih0kica','zg93BG','zxjZihq','B1jLy28','nxmGy3u','EYbJB2W','BMq6icm','oYbJB2W','zwfKEs4','y2HtAxO','B3i6ihi','ugn5wKS','Dcb7igq','icaUC2S','mcWWlJC','Cg9W','Bg9Y','mte4otiZmLH3we1TAW','nYWUmsK','Dw1UoYa','z3jHzgK','AwXSihK','yNrUoMG','q3vZDg8','BgLNBI0','sNbur1q','ztOGmtC','zwfK','ltiUns0','sw5PDgK','vKHfsuW','qw1czwW','zenOAwW','Bgf0zwq','Dw5RBM8','Ag9Szsa','q29TyMe','BhmGDgG','mJu1lc4','yJLKoYa','u2vNB2u','C1zsAvG','vwTYrNK','yw1Hz2u','ieaG','Au5Utum','yMvS','oYb0CMe','ugn0','vvDnsYa','DgLVBJO','C3rLCa','psiJzMy','Aw5NoIa','Awzwtg0','idaGmca','mcbOB28','zgvSzxq','tNHfuue','nIa2Bde','C1zst20','iezquW','CMrLCJO','rMvjtxu','C2STy2e','BgfIzwW','yMHXz3K','uePYDfG','AYbVBI4','B3HvDKS','q2nXEuC','zvn0EwW','EM9RBvi','C3rYAw4','yM1lrgm','ls1W','CI1Yywq','ig1PBM0','Aw50zxi','mdSGBwK','Aw5KzxG','DxjDigG'];_0x16f6=function(){return _0x1ae3a6;};return _0x16f6();}
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
