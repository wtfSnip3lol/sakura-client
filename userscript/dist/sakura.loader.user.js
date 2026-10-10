// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.9.2
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
(function(_0x2981c8,_0xe56acc){var _0x94dd0e=_0x21de,_0x4f5d64=_0x2981c8();while(!![]){try{var _0x310265=parseInt(_0x94dd0e(0x5da))/(-0x11ac+0x53*-0x3f+0x130d*0x2)+parseInt(_0x94dd0e(0x48b))/(-0xc2f*-0x3+-0xd07+-0x4*0x5e1)+-parseInt(_0x94dd0e(0x4e7))/(-0x56b*0x1+0x1*0x1e6d+-0x9*0x2c7)+-parseInt(_0x94dd0e(0x5a0))/(0x1306+-0x32*0x51+-0x330)+-parseInt(_0x94dd0e(0x417))/(0x515*-0x1+0x1fba+-0x1aa0)+parseInt(_0x94dd0e(0x5c1))/(-0x91*0x36+0x877+0x1625)+parseInt(_0x94dd0e(0x2d7))/(-0x1897+-0x4e*0x7f+0x3f50)*(-parseInt(_0x94dd0e(0x5f6))/(0x8e*0x8+0xd97+0x1*-0x11ff));if(_0x310265===_0xe56acc)break;else _0x4f5d64['push'](_0x4f5d64['shift']());}catch(_0x706ed3){_0x4f5d64['push'](_0x4f5d64['shift']());}}}(_0x2e0e,0x7e92c+-0x63846+0x1d*0x24eb),((()=>{'use strict';var _0x3d77f7=_0x21de,_0x1c74bc={'ybZso':function(_0x57ea46,_0x5301af,_0x132548,_0x1d7236,_0x584a04){return _0x57ea46(_0x5301af,_0x132548,_0x1d7236,_0x584a04);},'qFJya':function(_0x3c2d5e,_0x5a9e2f){return _0x3c2d5e===_0x5a9e2f;},'VFsrw':_0x3d77f7(0x55b)+_0x3d77f7(0x4f3),'Xfjhc':function(_0x42f6b0,_0x100e4f){return _0x42f6b0===_0x100e4f;},'mTgzp':_0x3d77f7(0x462)+_0x3d77f7(0x4c9)+_0x3d77f7(0x59e)+'rlay\x20'+_0x3d77f7(0x345)+_0x3d77f7(0x311)+_0x3d77f7(0x12c)+_0x3d77f7(0x20f)+'ad\x20to'+_0x3d77f7(0x3a7)+')','bVZkc':function(_0xef9b0c,_0x5e219a){return _0xef9b0c+_0x5e219a;},'vmKcP':function(_0x4859bc,_0x142613){return _0x4859bc+_0x142613;},'CWaIX':_0x3d77f7(0x57a)+'bound'+'\x20','aNGMA':function(_0x196069,_0x41ff85){return _0x196069+_0x41ff85;},'otZkg':_0x3d77f7(0x2a3)+'s','tIpLv':'\x20|\x20ga'+_0x3d77f7(0x518),'qBXAl':_0x3d77f7(0x45b)+_0x3d77f7(0x602)+'\x20','agOYN':'none','IGQpV':_0x3d77f7(0x516)+_0x3d77f7(0x646),'teEau':_0x3d77f7(0x57a)+'MISSI'+_0x3d77f7(0x585)+'overl'+_0x3d77f7(0x54f)+_0x3d77f7(0x565)+'einst'+'all\x20t'+_0x3d77f7(0x15e)+_0x3d77f7(0x1c3)+_0x3d77f7(0x25d),'TKhoL':function(_0x837b5a,_0x2e0b40,_0x286efa,_0x2a6164,_0x34c966){return _0x837b5a(_0x2e0b40,_0x286efa,_0x2a6164,_0x34c966);},'xnSSL':_0x3d77f7(0x235),'JGQwT':function(_0xd734a4,_0x9d6682){return _0xd734a4+_0x9d6682;},'cAjQq':_0x3d77f7(0x43a),'yWYKW':'fTsEs','MHqgM':_0x3d77f7(0x272),'YUPdU':function(_0x4abff2){return _0x4abff2();},'LaviP':function(_0x5361c4,_0x287407){return _0x5361c4===_0x287407;},'vXQgE':'lbCUH','adZoP':_0x3d77f7(0x523),'GxfZs':function(_0x5f413e,_0x4213e3){return _0x5f413e!==_0x4213e3;},'SXCXp':function(_0x583d0f,_0x31d641){return _0x583d0f!==_0x31d641;},'jLVgN':function(_0x1a74b6,_0x34faa3){return _0x1a74b6!==_0x34faa3;},'yZncD':_0x3d77f7(0x5be),'bPLqf':'VYJIv','efhqP':function(_0xb9137b,_0x2de5b7){return _0xb9137b*_0x2de5b7;},'ymWdC':function(_0x13676d,_0x52352e){return _0x13676d+_0x52352e;},'zBUfp':function(_0x49bc80,_0x40c0ee){return _0x49bc80+_0x40c0ee;},'RvTZn':'0\x20hoo'+'ks\x20ar'+'med\x20('+_0x3d77f7(0x113)+_0x3d77f7(0x225),'QBbzV':_0x3d77f7(0x5a9)+'ng','pwcoB':'held','AYOfJ':_0x3d77f7(0x57a)+'MISSI'+_0x3d77f7(0x2c5)+'overl'+'ay\x20on'+_0x3d77f7(0x565)+'einst'+_0x3d77f7(0x429)+'he\x20us'+_0x3d77f7(0x1c3)+'ipt)','JVuIx':'Statu'+'s','qWMFM':function(_0xab6357,_0x128bd2,_0x48e40d,_0x2a659f){return _0xab6357(_0x128bd2,_0x48e40d,_0x2a659f);},'xViBw':_0x3d77f7(0x592)+_0x3d77f7(0xd6)+_0x3d77f7(0x260),'RKBCf':function(_0x1feeb7,_0x25629b,_0x5e6040){return _0x1feeb7(_0x25629b,_0x5e6040);},'vWnkK':_0x3d77f7(0x297),'vkrAI':function(_0x30a929,_0x22e4fa){return _0x30a929===_0x22e4fa;},'LvBNt':_0x3d77f7(0x3d3),'vErtW':_0x3d77f7(0x4d8)+'|4|0','ODRbg':_0x3d77f7(0x2a0),'pFXkD':_0x3d77f7(0x50e)+_0x3d77f7(0x2cc)+_0x3d77f7(0x41b)+'ook\x20r'+_0x3d77f7(0x191)+_0x3d77f7(0x573),'CJRGS':_0x3d77f7(0x222)+_0x3d77f7(0x46b),'GwsgW':function(_0x2ffdda){return _0x2ffdda();},'ouevb':function(_0x2bb598,_0x474b9e){return _0x2bb598<_0x474b9e;},'RImTB':function(_0x5024ef,_0x3eb333){return _0x5024ef===_0x3eb333;},'zxVPC':_0x3d77f7(0x3fc)+'io_','KUCXY':'KsCqv','MPUrZ':'div','qRqUs':'small','UEomj':_0x3d77f7(0x5d1)+'nt','TAWYu':'sk-ct'+'l','VTYQI':_0x3d77f7(0xf5),'TZbhm':function(_0x17f0c5,_0x52e652){return _0x17f0c5(_0x52e652);},'UqMdB':function(_0x4a78ef,_0x355cf3){return _0x4a78ef/_0x355cf3;},'cngYV':function(_0x436692,_0x383d9b){return _0x436692(_0x383d9b);},'vFcIQ':function(_0x327b0a,_0x505ca3){return _0x327b0a!==_0x505ca3;},'gFkIc':function(_0x492dae,_0x208777){return _0x492dae&&_0x208777;},'bfxtw':function(_0x45642e,_0x441bdc){return _0x45642e<_0x441bdc;},'QsBdO':_0x3d77f7(0x1de),'hlmdD':'BrlGw','WfAac':function(_0x11cfb2,_0x145be6){return _0x11cfb2!==_0x145be6;},'gRwpI':'jxdmm','bRhlo':function(_0x46cd6b,_0x5864e8){return _0x46cd6b===_0x5864e8;},'DotMG':_0x3d77f7(0x3ef),'MNlox':function(_0x22c8e9,_0x13d459,_0x573afc,_0x64cacf,_0x179f63){return _0x22c8e9(_0x13d459,_0x573afc,_0x64cacf,_0x179f63);},'bpDkc':function(_0x217414,_0xafb66,_0xcb91d8,_0x1cd4fe,_0x332893){return _0x217414(_0xafb66,_0xcb91d8,_0x1cd4fe,_0x332893);},'FIXOV':_0x3d77f7(0x40e),'tnBvd':'AbPJa','VqpVA':_0x3d77f7(0x1ed),'JAZsw':function(_0x1ad02c,_0x119944){return _0x1ad02c===_0x119944;},'dFzLx':_0x3d77f7(0x11d),'mGrdr':_0x3d77f7(0x603),'qiGbf':function(_0x5c51ab,_0x467be4){return _0x5c51ab>_0x467be4;},'YePQC':function(_0x14d94d,_0x488bbb){return _0x14d94d-_0x488bbb;},'NKtmb':_0x3d77f7(0x5ea),'WRnQY':_0x3d77f7(0x5e0)+_0x3d77f7(0x65d),'ZdeoR':'blur','tgZwA':_0x3d77f7(0x3fc)+'io_30'+'0x250'+_0x3d77f7(0x399)+'nt','hDeTu':function(_0x2e68fe,_0x4b42f8){return _0x2e68fe===_0x4b42f8;},'YIgZO':_0x3d77f7(0x49d)+_0x3d77f7(0x24b)+_0x3d77f7(0x245)+'s','gLbhQ':function(_0x186c3a,_0xd14458){return _0x186c3a===_0xd14458;},'ZFigi':'TUuvl','aXrKE':function(_0x1ffd7d,_0x87769){return _0x1ffd7d===_0x87769;},'BrgVM':function(_0x16288e,_0x380b9c){return _0x16288e*_0x380b9c;},'EFjhB':function(_0x2b36f8,_0x40e4a8){return _0x2b36f8*_0x40e4a8;},'UMylb':function(_0x12389c,_0xb37d5b){return _0x12389c===_0xb37d5b;},'yXJAn':_0x3d77f7(0x1d4),'vpgzk':function(_0x7c11,_0x5a2cd5){return _0x7c11+_0x5a2cd5;},'nDNiq':_0x3d77f7(0x579),'VKBWD':function(_0x2bb5fa,_0x49a9ab){return _0x2bb5fa+_0x49a9ab;},'foAva':function(_0x28d905,_0x1771b9){return _0x28d905+_0x1771b9;},'sHYhf':function(_0x1ea212,_0x469761,_0x49da81,_0x5f08dd,_0x394778,_0x58555a,_0xfe6f1){return _0x1ea212(_0x469761,_0x49da81,_0x5f08dd,_0x394778,_0x58555a,_0xfe6f1);},'zgOll':function(_0x1a4052,_0x23fdde){return _0x1a4052/_0x23fdde;},'JWOoa':function(_0x23920b,_0x105ef4){return _0x23920b*_0x105ef4;},'fQPpl':'LMB','MLmxc':function(_0x412992,_0xce7524){return _0x412992+_0xce7524;},'pEDaz':_0x3d77f7(0x2ef),'gfANI':'RMB','kIJeb':function(_0xcbe8d3,_0x1af824){return _0xcbe8d3+_0x1af824;},'ojgGA':'Space','QFgSN':function(_0x42a0a8,_0x57690f){return _0x42a0a8*_0x57690f;},'RCjKz':function(_0x5cb0fc,_0x1ac094){return _0x5cb0fc-_0x1ac094;},'FwbJD':function(_0x21c1bc,_0x320b9c){return _0x21c1bc-_0x320b9c;},'pEgvh':function(_0x4588d9,_0x425265){return _0x4588d9+_0x425265;},'NJBwq':function(_0xe7e312,_0x17948d){return _0xe7e312-_0x17948d;},'BXOpW':function(_0x5647ea,_0x37c98a){return _0x5647ea+_0x37c98a;},'OJMGH':function(_0x5550b3,_0x27eb3c){return _0x5550b3*_0x27eb3c;},'EiXiX':'600\x201'+_0x3d77f7(0x63e)+'i-mon'+_0x3d77f7(0x12d)+'e,mon'+'ospac'+'e','vTiHK':'left','QJIwt':_0x3d77f7(0x4a2),'ngFsE':_0x3d77f7(0x365),'ejzKn':_0x3d77f7(0x1eb),'AfpFz':'mkiZV','aenFY':function(_0x4a89a8,_0x3c68ed){return _0x4a89a8===_0x3c68ed;},'WxpxW':_0x3d77f7(0x2cd),'FefIq':function(_0x1adec3){return _0x1adec3();},'rOSzR':'style','Cbbjr':function(_0x10bd2f){return _0x10bd2f();},'RaJHC':function(_0x2ef521,_0x3bad0b){return _0x2ef521===_0x3bad0b;},'XZpWB':_0x3d77f7(0x620),'SZsQi':'3|1|4'+_0x3d77f7(0x43c)+'5','SmYVY':'#ff6b'+'9d','puAro':_0x3d77f7(0x55f),'JqhYs':'biUif','hbRHG':_0x3d77f7(0x462)+_0x3d77f7(0x4c9)+'—\x20ove'+_0x3d77f7(0x268)+_0x3d77f7(0x345)+'\x20no\x20h'+_0x3d77f7(0x12c)+'(relo'+_0x3d77f7(0x58e)+_0x3d77f7(0x3a7)+')','zrqTd':function(_0x40a3cd,_0x371f05){return _0x40a3cd+_0x371f05;},'kQCDs':_0x3d77f7(0x46d)+'d','OPKOw':'\x20|\x20mo'+_0x3d77f7(0x4cb)+'t\x20','iQuai':function(_0x395dcb,_0x1c3ba6,_0x474531,_0x29b4a4,_0x955428,_0x195d22){return _0x395dcb(_0x1c3ba6,_0x474531,_0x29b4a4,_0x955428,_0x195d22);},'YtiXT':_0x3d77f7(0x19b)+_0x3d77f7(0xdc)+_0x3d77f7(0x163)+'ne.Ap'+_0x3d77f7(0x596)+_0x3d77f7(0x264)+_0x3d77f7(0x40d)+_0x3d77f7(0x2e0)+'Frame'+'Rate','JMSAW':function(_0xb3bfec,_0x3789cd,_0x297cb6){return _0xb3bfec(_0x3789cd,_0x297cb6);},'oHcId':_0x3d77f7(0x3c5),'CsfXV':function(_0x446856,_0x55d407){return _0x446856+_0x55d407;},'dDqqe':_0x3d77f7(0xee)+'nel','XSsVI':_0x3d77f7(0x591),'KPDKy':_0x3d77f7(0x41f)+'go','ISVjb':_0x3d77f7(0x419)+_0x3d77f7(0x1e3)+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0x3d77f7(0x5f1)+'\x20d=\x22M'+_0x3d77f7(0x57d)+_0x3d77f7(0x40f)+_0x3d77f7(0x286)+'6\x2018\x22'+'/></s'+_0x3d77f7(0x1ca),'SqIxM':'mn-co'+'ls','bBWZP':_0x3d77f7(0x5ee)+'n','cISQL':function(_0x9bb84a,_0x2293d5){return _0x9bb84a+_0x2293d5;},'CDjjF':'Inser'+'t','hFaIZ':_0x3d77f7(0x483),'pYImk':_0x3d77f7(0x1bf),'IoclC':function(_0x39f599,_0x502f36,_0x292f29,_0x9c7cbf,_0x25ddf9){return _0x39f599(_0x502f36,_0x292f29,_0x9c7cbf,_0x25ddf9);},'yrXBA':function(_0x27ccb9,_0x54eb8b){return _0x27ccb9/_0x54eb8b;},'XTPPS':_0x3d77f7(0x2d9),'QsldJ':function(_0xef9af0,_0x2f9d79){return _0xef9af0>=_0x2f9d79;},'iJYHG':function(_0x516507,_0x5d5b22){return _0x516507(_0x5d5b22);},'gClzM':'selec'+'t','LGYly':'kseRR','RbAfS':_0x3d77f7(0x4e9),'xQXis':function(_0x4cf0ac){return _0x4cf0ac();},'YHjvg':function(_0x5a4b14,_0x1219fe){return _0x5a4b14!==_0x1219fe;},'WajDp':_0x3d77f7(0xbe),'VhIZV':_0x3d77f7(0x35c),'Oombn':_0x3d77f7(0x4e3)+'ode','zfIhk':'Skips'+_0x3d77f7(0x460)+_0x3d77f7(0x5d6)+'ion.T'+'ick\x20s'+'o\x20the'+'\x20reco'+_0x3d77f7(0x164)+_0x3d77f7(0x2ad)+_0x3d77f7(0x612)+_0x3d77f7(0x1b1)+_0x3d77f7(0x1ef),'kHqyp':_0x3d77f7(0x4f5)+'read','wFvje':_0x3d77f7(0x55d)+'\x20Fire'+_0x3d77f7(0x4af)+']','nhUPr':_0x3d77f7(0x427),'aYqMU':'Scale'+_0x3d77f7(0x633)+'ement'+'.jump'+'Force'+_0x3d77f7(0x577)+_0x3d77f7(0x1ac)+'gravi'+'ty\x20va'+'lues.','qGzal':_0x3d77f7(0x105)+_0x3d77f7(0x4ec),'NzERr':'Zeroe'+'s\x20Mov'+'ement'+'.last'+_0x3d77f7(0x4eb)+_0x3d77f7(0x5f8)+'o\x20the'+'\x20jump'+_0x3d77f7(0x493)+'down\x20'+_0x3d77f7(0x498)+'\x20appl'+'ies.','uPHbA':_0x3d77f7(0x205),'UYMbi':_0x3d77f7(0x2f9),'wPhNa':'Adblo'+'ck','GnUZI':_0x3d77f7(0x2b3)+'\x20effe'+'ct\x20on'+_0x3d77f7(0x3a9)+'ad\x20wh'+_0x3d77f7(0x3d9)+'ggled'+'.','aArtv':_0x3d77f7(0x1fc)+_0x3d77f7(0x331)+_0x3d77f7(0x3a9)+'ad.','Yzssg':function(_0x376f98,_0x542a51,_0x4404f0){return _0x376f98(_0x542a51,_0x4404f0);},'qeVWr':'no\x20ch'+_0x3d77f7(0x554)+_0x3d77f7(0x587)+_0x3d77f7(0x2f8)+_0x3d77f7(0x3d0)+'is','BOTSC':function(_0xfa9dd5,_0x1166df,_0x564339,_0x30c831,_0x43e9fc,_0x52cbbb){return _0xfa9dd5(_0x1166df,_0x564339,_0x30c831,_0x43e9fc,_0x52cbbb);},'YmWIz':_0x3d77f7(0x4f4)+'r','FVQXN':'NQyNQ','yKxrV':function(_0x43d12c,_0x205958){return _0x43d12c+_0x205958;},'rwlHf':function(_0xd0cbad,_0x10a87){return _0xd0cbad+_0x10a87;},'hMshf':_0x3d77f7(0x219),'IdBQO':_0x3d77f7(0x3ae)+'s','yyVYi':_0x3d77f7(0x13a),'UyWau':'Visua'+'l','iqVOl':'safe','lrOQb':_0x3d77f7(0x11a)+'y','ViOkX':_0x3d77f7(0x1a1)+'wn','SRHAE':'[saku'+'ra-ko'+_0x3d77f7(0x3f9)+_0x3d77f7(0x18e)+_0x3d77f7(0x5f9)+_0x3d77f7(0x171)+':','ttQMK':function(_0x14aa9a,_0x144b7e){return _0x14aa9a!==_0x144b7e;},'vYdFD':'fmzyh','dcMyy':_0x3d77f7(0x334),'hCOjC':_0x3d77f7(0x2f7),'BbxLv':function(_0x5ea5ea,_0x47c725,_0x59a59c,_0x3b4a46,_0x3f3092,_0x34dcc8,_0x417da3,_0xd5aab8){return _0x5ea5ea(_0x47c725,_0x59a59c,_0x3b4a46,_0x3f3092,_0x34dcc8,_0x417da3,_0xd5aab8);},'aQDgO':_0x3d77f7(0x3c4)+_0x3d77f7(0x4e4)+_0x3d77f7(0x4a6)+_0x3d77f7(0x3dd)+'tide.'+_0x3d77f7(0x106)+_0x3d77f7(0x14b)+'on','ocbNC':function(_0x2a3d83,_0xed02e8,_0xcac9f6,_0x2dafef,_0x27e61d,_0x1fa90d,_0x1d8b6d,_0x14788c){return _0x2a3d83(_0xed02e8,_0xcac9f6,_0x2dafef,_0x27e61d,_0x1fa90d,_0x1d8b6d,_0x14788c);},'BUhKL':_0x3d77f7(0x466)+_0x3d77f7(0x118)+'ning'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x3d77f7(0x4dc)+'ame']||''))return;if(window[_0x3d77f7(0x652)+_0x3d77f7(0x5ec)+'OUR__'])return;window['__SAK'+'URA_K'+_0x3d77f7(0x330)]=!![];var _0x9faf96=_0x1c74bc[_0x3d77f7(0x56d)],_0x4894e7=_0x3d77f7(0x2a7)+'c6',_0x4271b4={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x4fb280={..._0x4271b4};try{Object['assig'+'n'](_0x4fb280,JSON[_0x3d77f7(0x122)](localStorage[_0x3d77f7(0x33a)+'em']('sakur'+_0x3d77f7(0x149)+_0x3d77f7(0x4ad))||'{}'));}catch(_0x6712e0){}function _0x8d12f3(){var _0x1a8867=_0x3d77f7;if(_0x1c74bc[_0x1a8867(0x45a)](_0x1a8867(0x4bd),_0x1a8867(0x4bd)))try{localStorage[_0x1a8867(0x206)+'em'](_0x1a8867(0x497)+'a.kou'+_0x1a8867(0x4ad),JSON[_0x1a8867(0x4fb)+_0x1a8867(0x2dc)](_0x4fb280));}catch(_0x3fd566){}else _0x1c74bc['ybZso'](_0x54811d,_0x37cb14,-0x300+0x1f87+-0x1bff,_0x1a8867(0x1de),0x1353+-0x30b*-0xa+-0x2f*0x10f),_0x3fa563(_0x595e6f,0x665+0x1*0x1691+-0x11*0x1ae,'f32',-0x7d3*-0x2+0x8f9*-0x1+-0x6ac);}var _0x3b426e={'uwmk':!!window[_0x3d77f7(0x4f7)+_0x3d77f7(0x1f7)+_0x3d77f7(0x32e)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4fb280[_0x3d77f7(0x1d9)+'ode'],'lastError':''};try{if(_0x1c74bc[_0x3d77f7(0x1cd)](_0x3d77f7(0x3e5),_0x1c74bc[_0x3d77f7(0x5c7)])){if(!_0x3238d3)return;var _0x34b11f=_0xf7d84e[_0x3d77f7(0xf0)+'ren'];for(var _0x1cfead=0x9d*-0x13+0x1093+-0x4ec;_0x1cfead<_0x34b11f['lengt'+'h'];_0x1cfead++){var _0x69fc5=_0x34b11f[_0x1cfead][_0x3d77f7(0x36c)+'Selec'+'tor'](_0x1c74bc['VFsrw']);_0x69fc5&&(_0x1c74bc[_0x3d77f7(0x5fa)](_0x69fc5[_0x3d77f7(0x1c8)+_0x3d77f7(0x323)+'t'][_0x3d77f7(0x1a0)+'Of']('UWMK'),0x1*-0x169a+-0x93c*0x4+0x3b8a)||_0x69fc5[_0x3d77f7(0x1c8)+_0x3d77f7(0x323)+'t'][_0x3d77f7(0x1a0)+'Of'](_0x3d77f7(0x30f))===-0x1*0x1d9f+-0x1*-0x18ce+0x4d1)&&(_0x69fc5['textC'+_0x3d77f7(0x323)+'t']=_0x5d701a[_0x3d77f7(0x1d9)+'ode']?_0x1c74bc['mTgzp']:_0x27d450[_0x3d77f7(0x3e7)]?_0x1c74bc[_0x3d77f7(0x451)](_0x1c74bc[_0x3d77f7(0x451)](_0x1c74bc[_0x3d77f7(0x175)](_0x1c74bc[_0x3d77f7(0x451)](_0x1c74bc['CWaIX'],_0x1597d2[_0x3d77f7(0x4ef)+'Total']?_0x1c74bc[_0x3d77f7(0x451)](_0x1c74bc[_0x3d77f7(0x4f2)](_0x411d3a['hooks'+'Ok'],'/')+_0x1ba05b[_0x3d77f7(0x4ef)+_0x3d77f7(0x2d8)],_0x1c74bc['otZkg']):'0\x20hoo'+'ks\x20ar'+_0x3d77f7(0x2ee)+_0x3d77f7(0x113)+'ff)'),_0x1c74bc['tIpLv'])+(_0x332fa0[_0x3d77f7(0x194)+'oaded']?'loade'+'d':_0x3d77f7(0x5a9)+'ng')+_0x1c74bc['qBXAl']+(_0x264d8f[_0x3d77f7(0x27d)+_0x3d77f7(0x5e5)]?_0x3d77f7(0x4e0):_0x1c74bc[_0x3d77f7(0x339)])+('\x20|\x20mo'+'vemen'+'t\x20'),_0x5dc17c[_0x3d77f7(0x222)+_0x3d77f7(0x46b)]?_0x3d77f7(0x4e0):'none'),_0x27ef59['lastE'+_0x3d77f7(0x2bd)]?_0x1c74bc[_0x3d77f7(0x23c)]+_0x478fd0['lastE'+_0x3d77f7(0x2bd)]:''):_0x1c74bc[_0x3d77f7(0x32d)]);}}else window[_0x3d77f7(0x1c9)+_0x3d77f7(0x18f)+_0x3d77f7(0x20b)+'r'](_0x1c74bc[_0x3d77f7(0x413)],_0x131f83=>{var _0x32efa2=_0x3d77f7,_0x1875b9={'hiXxQ':_0x32efa2(0x1de),'pAVoD':function(_0x990174,_0x85c5b6,_0x128ffd,_0xeeaa8c,_0x345e54){return _0x1c74bc['TKhoL'](_0x990174,_0x85c5b6,_0x128ffd,_0xeeaa8c,_0x345e54);}};if('JqDXv'===_0x1c74bc[_0x32efa2(0x2c4)])try{var _0x2b4415=_0x131f83&&(_0x131f83['messa'+'ge']||_0x131f83[_0x32efa2(0x334)]&&_0x131f83['error'][_0x32efa2(0x3d7)+'ge'])||'unkno'+'wn';if(_0x131f83&&_0x131f83['filen'+'ame'])_0x2b4415+=_0x1c74bc['JGQwT'](_0x1c74bc['cAjQq'],String(_0x131f83['filen'+'ame'])[_0x32efa2(0x290)]('/')[_0x32efa2(0x347)]())+':'+(_0x131f83['linen'+'o']||'?');_0x3b426e['lastE'+'rror']=String(_0x2b4415)['slice'](0x1*0x8e1+-0x265*-0x9+-0x13*0x19a,0x82*-0x2+-0x1*-0x8c+0x118);}catch(_0x4c0722){}else _0x2c3c3c(_0x563f5e,0x1ff9+0x6b8+-0x2669,_0x1875b9[_0x32efa2(0x132)],_0x4fbc33),_0x1875b9['pAVoD'](_0x2d3cb3,_0x5aed80,0x1d7d+0x104e+-0x2d7f,_0x32efa2(0x1de),_0x190f5e);});}catch(_0x5e478c){}var _0x1932eb=null,_0x259e62=null,_0x1f5ad1={},_0x2e429f=[],_0x4a10a8=[],_0x501278=new Map();function _0x59a5be(_0x4a4474,_0x1f827e){var _0x171dae=_0x3d77f7;if(!_0x1f827e||_0x4a4474['inclu'+'des'](_0x1f827e)||_0x4a4474['lengt'+'h']>0x461+0x11*-0x100+0xcdf)return;_0x4a4474[_0x171dae(0x534)](_0x1f827e);}function _0x9790f0(_0x102c18,_0x51a3ac,_0x8de2f3,_0x29bd72){var _0x5f0fe8=_0x3d77f7,_0x17871c=-0x1f03+-0x3*-0x6f3+-0x2*-0x515;try{_0x17871c=_0x51a3ac&&_0x51a3ac['val']?_0x51a3ac['val']():0xa2*0x1+-0x14b9+0x1417;}catch(_0x2747e9){}if(!_0x17871c)return;_0x59a5be(_0x102c18,_0x17871c),_0x8de2f3[_0x29bd72]=_0x102c18[_0x5f0fe8(0x506)+'h'];if(_0x29bd72===_0x5f0fe8(0x222)+_0x5f0fe8(0x46b)&&_0x102c18[_0x5f0fe8(0x506)+'h']){var _0x5881cb=_0x1f5ad1['capMo'+'ve'];if(_0x5881cb){if(_0x1c74bc['yWYKW']!==_0x1c74bc[_0x5f0fe8(0x4d4)])try{_0x5881cb['enabl'+'ed']=![];}catch(_0x473f62){}else _0x2c4426[_0x5f0fe8(0xec)+'ed']=![];}}}function _0x361c78(_0x1291ad,_0x534e8e,_0xb79d3c){var _0x5be890=_0x3d77f7,_0x22ba81={'sqBsM':function(_0x5c0eff,_0x4cac70){return _0x5c0eff>=_0x4cac70;},'FvLtG':function(_0x243700){return _0x243700();},'adbGZ':_0x5be890(0x4c6)+'b','oCtlM':_0x5be890(0x370)+'l>'};if(_0x1c74bc[_0x5be890(0x2ca)](_0x1c74bc[_0x5be890(0xd3)],'FXNCL'))new _0x5a9508(_0x81e356)['write'+_0x5be890(0x452)](_0x2fbded,_0x54eaeb,_0x4fb4f9);else{var _0x55e5b6=_0x501278[_0x5be890(0x622)](_0x1291ad);if(!_0x55e5b6){if('RaAwo'!==_0x1c74bc[_0x5be890(0x2fb)])_0x55e5b6=new Map(),_0x501278[_0x5be890(0x538)](_0x1291ad,_0x55e5b6);else{_0xe73ca(_0xf333a7),_0xd65866++;var _0x2c4ec3=_0x56bb58['now']();_0x22ba81[_0x5be890(0x4db)](_0x2c4ec3-_0x21bc37,-0x745*-0x3+-0x124b+-0x190)&&(_0x2e2f43=_0x28b489['round'](_0x15820c*(0x164f+-0x2f9*-0x4+-0x8d*0x37)/(_0x2c4ec3-_0x37b59a)),_0x9ed54e=0xffb+-0x1514+0x519,_0x438779=_0x2c4ec3);_0x134d42(),_0x22ba81[_0x5be890(0x236)](_0x534230),_0x6eded8['clear'+'Rect'](-0x1b1e+0x1b8a+-0x6c,0x8d5+0xe54+-0x1729,_0x210789['w'],_0x93c0b1['h']);var _0x1cd75e={'left':0x0,'top':0x0,'right':_0x3ede7a['w'],'bottom':_0x1e9e3c['h'],'width':_0x2d7792['w'],'height':_0x41423e['h']};if(_0x33b2b8[_0x5be890(0x490)+_0x5be890(0x575)])_0x303caf(_0x1cd75e);if(_0x173cca[_0x5be890(0x3e8)+_0x5be890(0x3c1)])_0x1f6d59(_0x1cd75e);_0x320211(_0x1cd75e);}}if(!_0x55e5b6['has'](_0x534e8e)){if(_0x1c74bc[_0x5be890(0x5df)]('ZCEea',_0x5be890(0x251))){var _0x42fd2b=_0x4dfe7e['creat'+'eElem'+'ent'](_0x5be890(0x5ee)+'n');_0x42fd2b[_0x5be890(0x5f5)]=_0x5be890(0x5ee)+'n',_0x42fd2b[_0x5be890(0x56a)+'Name']=_0x22ba81['adbGZ'],_0x42fd2b[_0x5be890(0x59f)]=_0x573be8['label'],_0x42fd2b[_0x5be890(0x4a9)+_0x5be890(0x3bb)]=_0x22ba81[_0x5be890(0x302)]+_0x3b3a33['label']+('</sma'+_0x5be890(0x296)),_0x42fd2b['oncli'+'ck']=(_0x3e4493=>()=>_0x59f0e0(_0x3e4493))(_0x5e8f99['id']),_0x22ab46['set'](_0x33b234['id'],_0x42fd2b),_0x49a64c[_0x5be890(0x34e)+_0x5be890(0x52d)+'d'](_0x42fd2b);}else try{var _0x31c604=new _0x1932eb(_0x1291ad)[_0x5be890(0x256)+_0x5be890(0x52f)](_0x534e8e,_0xb79d3c);_0x55e5b6[_0x5be890(0x538)](_0x534e8e,_0x1c74bc[_0x5be890(0x3fd)](_0x31c604,undefined)?_0x31c604[_0x5be890(0xf1)]():null);}catch(_0xc8c3fc){_0x5be890(0x340)!=='kcrIs'?_0x55e5b6[_0x5be890(0x538)](_0x534e8e,null):(_0x1cb2ba['safeM'+_0x5be890(0x3c3)]=_0x4df1b4,_0x1c74bc['YUPdU'](_0x505033),_0x40f1d5[_0x5be890(0x43b)+'d']());}}return _0x55e5b6[_0x5be890(0x622)](_0x534e8e);}}function _0x35fd73(_0x2adfe2,_0x3dbbbc,_0x5ed5cc,_0x38154a){var _0x2b5bc1=_0x3d77f7;if(_0x1c74bc['jLVgN'](_0x1c74bc[_0x2b5bc1(0x31a)],_0x1c74bc[_0x2b5bc1(0x415)]))try{new _0x1932eb(_0x2adfe2)[_0x2b5bc1(0x5d2)+_0x2b5bc1(0x452)](_0x3dbbbc,_0x5ed5cc,_0x38154a);}catch(_0x4e9af0){}else _0x2d516f(_0x4f687e,-0xd9*0x12+-0x1*-0x20b5+-0x10e7,'f32',-0x559*-0x6+-0x1955*-0x1+-0x396b*0x1+0.1),_0x3c640d(_0x50a815,0x1209+-0x1449+0x2a0,'f32',0x1b11+-0x7ed*0x4+0x4a3+0.1);}function _0x4e1bfe(_0xe67011,_0x2cd27a){var _0x3053b4=_0x3d77f7;if(_0x1c74bc['Xfjhc'](_0x3053b4(0x11c),_0x3053b4(0x326)))try{_0x2df2ea[_0x3053b4(0x241)][_0x3053b4(0x34e)+'dChil'+'d'](_0x23d233);}catch(_0xc1793){}else try{var _0x142aea=new _0x1932eb(_0xe67011)[_0x3053b4(0x256)+_0x3053b4(0x52f)](_0x2cd27a,_0x3053b4(0x19d));return _0x142aea?_0x142aea['val']():-0x10c2+-0x1d*0x27+0x152d;}catch(_0x18ef4a){return 0xb*0x35+0xaa*0x1+-0x2f1;}}function _0x3f433c(_0xade631,_0x17d30b,_0x2e1a35,_0x4a7d4c){var _0x447dde=_0x3d77f7,_0x359d74=_0x361c78(_0xade631,_0x17d30b,_0x2e1a35);if(_0x359d74!=null)_0x35fd73(_0xade631,_0x17d30b,_0x2e1a35,_0x1c74bc[_0x447dde(0x610)](_0x359d74,_0x4a7d4c));}function _0xafd3f7(_0x361666,_0x36e187,_0x43c0a2,_0x36d4f5,_0x4054d5,_0x93d2f6,_0x5ab758){var _0x3943cb=_0x3d77f7;if(_0x1c74bc[_0x3943cb(0x5f7)](_0x3943cb(0x2c7),'YYwBr')){var _0x21a3ea=_0x517317[_0x3943cb(0x1d9)+_0x3943cb(0x3c3)]?'SAFE\x20'+_0x3943cb(0x4c9)+_0x3943cb(0x53b)+_0x3943cb(0x268)+'only,'+_0x3943cb(0x311)+_0x3943cb(0x12c)+'(relo'+'ad\x20to'+'\x20exit'+')':_0x2772bf['uwmk']?_0x1c74bc['ymWdC'](_0x1c74bc[_0x3943cb(0x158)](_0x1c74bc[_0x3943cb(0x158)](_0x1c74bc[_0x3943cb(0x2f5)]+(_0x57b9e7['hooks'+'Total']?_0x1c74bc['aNGMA'](_0x1c74bc[_0x3943cb(0x175)](_0x1c74bc[_0x3943cb(0x287)](_0x269148[_0x3943cb(0x4ef)+'Ok'],'/'),_0x2b2ec7['hooks'+_0x3943cb(0x2d8)]),_0x1c74bc['otZkg']):_0x1c74bc[_0x3943cb(0x62c)])+('\x20|\x20ga'+'me\x20')+(_0x59679b['gameL'+_0x3943cb(0x396)]?'loade'+'d':_0x1c74bc[_0x3943cb(0x220)])+('\x20|\x20sh'+_0x3943cb(0x602)+'\x20'),_0x5ca862['shoot'+'ers']?_0x3943cb(0x4e0):_0x3943cb(0x425)),_0x3943cb(0x29f)+_0x3943cb(0x4cb)+'t\x20'),_0x1783d8[_0x3943cb(0x222)+_0x3943cb(0x46b)]?_0x1c74bc['pwcoB']:_0x1c74bc['agOYN']):_0x1c74bc['AYOfJ'];if(_0xcf8d9d['lastE'+_0x3943cb(0x2bd)])_0x21a3ea+='\x20|\x20ER'+'R:\x20'+_0x1cbb90[_0x3943cb(0x5bb)+'rror'];return _0x3097ca(_0x1c74bc[_0x3943cb(0x5fc)],_0x21a3ea,_0x2dffd7[_0x3943cb(0x3e7)],null,[_0x1c74bc['qWMFM'](_0x5013f1,_0x1c74bc[_0x3943cb(0x407)],'calls'+_0x3943cb(0xdc)+_0x3943cb(0x163)+'ne.Ap'+_0x3943cb(0x596)+'tion.'+_0x3943cb(0x40d)+'arget'+_0x3943cb(0x4b6)+_0x3943cb(0x25b),_0x1c74bc['RKBCf'](_0x173a21,_0x1c74bc['vWnkK'],()=>{var _0x43c5ab=_0x3943cb;try{if(_0x48f9cc)_0x5de36e['call']('Unity'+_0x43c5ab(0x288)+_0x43c5ab(0x522)+_0x43c5ab(0xc1)+_0x43c5ab(0x3f0),'set_t'+_0x43c5ab(0x2e0)+_0x43c5ab(0x4b6)+_0x43c5ab(0x25b),[-0x221c+-0x1*0xe71+-0x107f*-0x3]);}catch(_0x44b978){}}))]);}else try{var _0x432186=('2|0|1'+'|3|4')['split']('|'),_0x7d213b=0x103b*-0x1+0xf1*0x1b+-0x2a*0x38;while(!![]){switch(_0x432186[_0x7d213b++]){case'0':_0x3ca763[_0x3943cb(0xec)+'ed']=_0x1c74bc['jLVgN'](_0x5ab758,![]);continue;case'1':_0x1f5ad1[_0x361666]=_0x3ca763;continue;case'2':var _0x3ca763=_0x259e62['hookP'+'refix']({'typeName':_0x36e187,'methodName':_0x43c0a2,'params':_0x36d4f5,'returnType':_0x4054d5},_0x93d2f6);continue;case'3':_0x3b426e[_0x3943cb(0x4ef)+_0x3943cb(0x2d8)]++;continue;case'4':return _0x3ca763;}break;}}catch(_0x545d51){if(_0x1c74bc[_0x3943cb(0x5f7)](_0x3943cb(0x3d3),_0x1c74bc['LvBNt']))return console[_0x3943cb(0x410)](_0x3943cb(0x50e)+'ra-ko'+'ur]\x20h'+_0x3943cb(0x2d5)+_0x3943cb(0x191)+'iled:',_0x361666,_0x545d51&&_0x545d51['messa'+'ge']),null;else _0x466683['cross'+_0x3943cb(0x575)]=_0x58caea,_0x1c74bc[_0x3943cb(0x597)](_0x49dac6);}}function _0x2bf786(_0x5d6999,_0xa073f5,_0x28fe64,_0x394db6,_0x4ff69e,_0x1ae404,_0x25a829){var _0x11ea80=_0x3d77f7;try{var _0x2cc69c=_0x1c74bc['vErtW'][_0x11ea80(0x290)]('|'),_0x14ed43=0x397*0x1+0x1744+-0x1adb;while(!![]){switch(_0x2cc69c[_0x14ed43++]){case'0':return _0x23a15a;case'1':var _0x23a15a=_0x259e62['hookP'+'ostfi'+'x']({'typeName':_0xa073f5,'methodName':_0x28fe64,'params':_0x394db6,'returnType':_0x4ff69e},_0x1ae404);continue;case'2':_0x23a15a[_0x11ea80(0xec)+'ed']=_0x25a829!==![];continue;case'3':_0x1f5ad1[_0x5d6999]=_0x23a15a;continue;case'4':_0x3b426e['hooks'+_0x11ea80(0x2d8)]++;continue;}break;}}catch(_0x104902){if(_0x1c74bc['ODRbg']===_0x1c74bc[_0x11ea80(0x586)])return console['warn'](_0x1c74bc[_0x11ea80(0x3cf)],_0x5d6999,_0x104902&&_0x104902[_0x11ea80(0x3d7)+'ge']),null;else _0x3c09ec[_0x11ea80(0x54e)+_0x11ea80(0x48e)]=_0x354dee,_0x2c48b0();}}var _0x361072=()=>![];try{if(_0x1c74bc['jLVgN'](_0x1c74bc[_0x3d77f7(0x605)],_0x3d77f7(0x2b2))){if(window['Unity'+'WebMo'+'dkit']&&!_0x4fb280['safeM'+_0x3d77f7(0x3c3)]){_0x1932eb=window[_0x3d77f7(0x4f7)+_0x3d77f7(0x1f7)+_0x3d77f7(0x32e)]['Value'+_0x3d77f7(0x3f8)+'er'],_0x259e62=window['Unity'+_0x3d77f7(0x1f7)+'dkit'][_0x3d77f7(0x508)+'me'][_0x3d77f7(0xdb)+'ePlug'+'in']({'name':_0x3d77f7(0x306)+_0x3d77f7(0x28c),'version':'1.1.0','referencedAssemblies':[_0x3d77f7(0x332)+'bly-C'+_0x3d77f7(0x42e)+_0x3d77f7(0x553)]});if(_0x4fb280['hookG'+'od'])_0xafd3f7('god','OHeal'+'th',_0x3d77f7(0xc6)+_0x3d77f7(0x4e6)+_0x3d77f7(0x1c5)+'lth',[_0x3d77f7(0x3ef),'i32'],undefined,_0x361072,!!_0x4fb280['god']);if(_0x4fb280[_0x3d77f7(0x1f6)+_0x3d77f7(0x25c)])_0xafd3f7('godDi'+'e',_0x3d77f7(0x528)+'th','Local'+_0x3d77f7(0x366),[_0x3d77f7(0x3ef),_0x3d77f7(0x3ef),'i32',_0x3d77f7(0x3ef),'i32'],undefined,_0x361072,!!_0x4fb280[_0x3d77f7(0x160)]);if(_0x4fb280[_0x3d77f7(0x406)+_0x3d77f7(0x184)+'il'])_0x1c74bc['BbxLv'](_0xafd3f7,'noRec'+'oil',_0x1c74bc[_0x3d77f7(0x1ad)],_0x3d77f7(0x289),[_0x1c74bc[_0x3d77f7(0x5a3)]],undefined,_0x361072,!!_0x4fb280[_0x3d77f7(0x61f)+_0x3d77f7(0x595)]);if(_0x4fb280[_0x3d77f7(0x17f)+_0x3d77f7(0x108)+'e'])_0x1c74bc[_0x3d77f7(0x166)](_0x2bf786,'capSh'+_0x3d77f7(0x602),_0x3d77f7(0x34d)+'ter',_0x1c74bc[_0x3d77f7(0x3e4)],[_0x1c74bc['DotMG'],_0x3d77f7(0x3ef)],undefined,(_0x4fcf26,_0x56d708)=>{var _0x5da42c=_0x3d77f7;_0x9790f0(_0x4a10a8,_0x56d708,_0x3b426e,_0x5da42c(0x27d)+_0x5da42c(0x5e5));},!![]);if(_0x4fb280['hookC'+_0x3d77f7(0x108)+'e'])_0x2bf786('capMo'+'ve',_0x3d77f7(0x3c4)+_0x3d77f7(0x4e4)+_0x3d77f7(0x4a6)+'.Over'+_0x3d77f7(0x1e5)+_0x3d77f7(0x1b4)+'ent',_0x3d77f7(0x30b)+_0x3d77f7(0x22f),[_0x3d77f7(0x3ef)],_0x1c74bc['DotMG'],(_0x253ccd,_0x38fe32)=>{_0x9790f0(_0x2e429f,_0x38fe32,_0x3b426e,_0x1c74bc['CJRGS']);},!![]);}}else _0x42d9b7[_0x3d77f7(0x390)+'ropag'+_0x3d77f7(0x5af)](),_0x1c74bc['GwsgW'](_0x10dd99);}catch(_0x120ece){console['warn']('[saku'+_0x3d77f7(0x2cc)+_0x3d77f7(0x3d1)+_0x3d77f7(0x51c)+'nit\x20f'+_0x3d77f7(0x3ce)+':',_0x120ece&&_0x120ece[_0x3d77f7(0x3d7)+'ge']);}function _0x3922da(_0x1cb97e,_0x504a40){var _0x1d3890=_0x3d77f7;if(_0x1d3890(0x151)!==_0x1c74bc[_0x1d3890(0x491)]){var _0x1ee458=_0x1f5ad1[_0x1cb97e];if(_0x1ee458)try{_0x1ee458[_0x1d3890(0xec)+'ed']=!!_0x504a40;}catch(_0x3fe370){}}else{var _0x285799=_0x1bbebf[_0x1d3890(0xf0)+_0x1d3890(0x3d8)];for(var _0xb91c8f=0x7b5*0x2+-0x455*-0x8+-0x3212;_0x1c74bc[_0x1d3890(0x656)](_0xb91c8f,_0x285799[_0x1d3890(0x506)+'h']);_0xb91c8f++){if(_0x285799[_0xb91c8f]['id']&&_0x1c74bc['RImTB'](_0x285799[_0xb91c8f]['id']['index'+'Of'](_0x1c74bc['zxVPC']),0xea+-0x1646*0x1+0x155c))_0x285799[_0xb91c8f][_0x1d3890(0x33c)]['displ'+'ay']=_0x1d3890(0x425);}}}setInterval(()=>{var _0x4442c6=_0x3d77f7;if(!_0x1932eb||!window[_0x4442c6(0x29a)+'Insta'+'nce'])return;var _0x53add0=(Number(_0x4fb280['speed'+_0x4442c6(0x48e)])||0x1*0x24e8+0xac9+-0x2f4d)/(-0x12b5*-0x1+-0x1*-0xe1d+-0x206e),_0x41d3a2=(_0x1c74bc[_0x4442c6(0x4fc)](Number,_0x4fb280[_0x4442c6(0x22e)+'ct'])||0x5da*-0x2+-0x3d*0x47+0x1d03)/(0x1d35*0x1+0x153*-0x1d+-0x6*-0x199),_0x4c2fb0=_0x1c74bc['UqMdB'](_0x1c74bc[_0x4442c6(0x5dc)](Number,_0x4fb280[_0x4442c6(0x2e9)+_0x4442c6(0x384)])||0x1*0x1609+0x1*0x2347+0x2*-0x1c76,0x72a+-0x4*-0x1f7+-0xea2),_0x4b433a=Math[_0x4442c6(0x50c)](0x285*0x7+0x189a*0x1+0xd4*-0x33,Number(_0x4fb280[_0x4442c6(0x1ce)+'eValu'+'e'])||-0x2c*-0x95+-0x20b9+0x7b3),_0x165bdc=_0x1c74bc['vFcIQ'](_0x53add0,0x95f+-0x91a+-0x44)||_0x41d3a2!==-0x1706*0x1+0x23e5+-0xcde||_0x4c2fb0!==-0x1bbf+-0x17ae+0x336e||_0x4fb280[_0x4442c6(0x35e)],_0x16129d=_0x4fb280[_0x4442c6(0x3eb)+'ead']||_0x4fb280['damag'+_0x4442c6(0x32f)]||_0x4fb280[_0x4442c6(0x32b)+_0x4442c6(0x600)]||_0x4fb280['rapid'+'Exp'];if(_0x1c74bc['gFkIc'](!_0x165bdc,!_0x16129d))return;try{for(var _0x3f107a=0x1*0x1115+0xef6+-0x200b;_0x1c74bc[_0x4442c6(0x609)](_0x3f107a,_0x2e429f[_0x4442c6(0x506)+'h']);_0x3f107a++){var _0x2bf421=_0x2e429f[_0x3f107a];if(!_0x2bf421)continue;_0x53add0!==0x1*-0x24bb+0x1*0x25+-0x227*-0x11&&(_0x1c74bc[_0x4442c6(0x4bc)](_0x3f433c,_0x2bf421,-0xdb*-0xf+-0x1ef5+0x1248,_0x1c74bc['QsBdO'],_0x53add0),_0x3f433c(_0x2bf421,0xa6*-0x1f+-0x28e*0x1+0x16d4,_0x4442c6(0x1de),_0x53add0),_0x3f433c(_0x2bf421,-0x4e9+0x440+0xd9,_0x4442c6(0x1de),_0x53add0),_0x3f433c(_0x2bf421,-0x183+0x4*-0x510+-0x1*-0x15f7,_0x4442c6(0x1de),_0x53add0),_0x3f433c(_0x2bf421,-0x169c+-0x1*0x16b5+0x2d6d,_0x1c74bc[_0x4442c6(0x2b6)],_0x53add0),_0x3f433c(_0x2bf421,0x1bf2+0x1c5b+-0x382d,_0x1c74bc['QsBdO'],_0x53add0));if(_0x1c74bc['jLVgN'](_0x41d3a2,-0x3a3+0x640+0x2*-0x14e))_0x3f433c(_0x2bf421,-0x4c1*0x7+0xf2*-0x15+0x3571,_0x1c74bc['QsBdO'],_0x41d3a2);if(_0x4c2fb0!==0xcf7+0x211f+-0x2e15*0x1){if(_0x4442c6(0x13e)===_0x1c74bc['hlmdD'])_0x3f433c(_0x2bf421,-0xe46+0x1e85*0x1+-0x43*0x3d,_0x1c74bc['QsBdO'],_0x4c2fb0),_0x3f433c(_0x2bf421,0x3b3*-0x3+0x57b+0x5ea,_0x1c74bc['QsBdO'],_0x4c2fb0);else return 0x1*0x4ea+0xe0+-0x26*0x27;}if(_0x4fb280['bhop'])_0x1c74bc[_0x4442c6(0x4bc)](_0x35fd73,_0x2bf421,0x166+0x1bf7+-0x1cc1,'f32',-(0xb*0x191+0x1*-0x11c3+-0x1*-0x46f));}}catch(_0x213422){}try{if(_0x1c74bc[_0x4442c6(0x23d)](_0x4442c6(0x28d),_0x1c74bc['gRwpI']))for(var _0x4c7dc5=-0x1c49*-0x1+-0x1*0x10eb+-0xb5e;_0x4c7dc5<_0x4a10a8['lengt'+'h'];_0x4c7dc5++){if(_0x1c74bc['bRhlo'](_0x4442c6(0x38d),_0x4442c6(0x38d))){var _0x37cb17=_0x4e1bfe(_0x4a10a8[_0x4c7dc5],-0xa16*0x1+0x3*-0xdf+0xceb*0x1);if(!_0x37cb17)continue;_0x4fb280[_0x4442c6(0x1ce)+_0x4442c6(0x32f)]&&(_0x35fd73(_0x37cb17,-0x2e*0x9a+0x1*-0x55e+0x2156*0x1,_0x1c74bc['DotMG'],_0x4b433a),_0x35fd73(_0x37cb17,0x3a8*0x9+0x7*0x58b+-0x17cb*0x3,_0x4442c6(0x3ef),_0x4b433a));_0x4fb280[_0x4442c6(0x3eb)+_0x4442c6(0x543)]&&(_0x35fd73(_0x37cb17,0x6*-0x11b+0x1ab3+-0x1389,_0x1c74bc['QsBdO'],-0xf*-0x30+-0xcf*0x1+-0x201),_0x35fd73(_0x37cb17,0x1*0xbbd+0x5*-0x347+0x50e,_0x1c74bc['QsBdO'],-0xcfb*-0x1+-0x1*0x1472+0x778));if(_0x4fb280[_0x4442c6(0x32b)+'moExp'])_0x1c74bc['ybZso'](_0x35fd73,_0x37cb17,0x3*-0xa8d+-0x1aa+0x21ad,_0x4442c6(0x3ef),-0xcc5+-0x146b+-0x3*-0xc5d);_0x4fb280[_0x4442c6(0x232)+_0x4442c6(0x2db)]&&(_0x1c74bc[_0x4442c6(0x342)](_0x3f433c,_0x37cb17,0x38*-0x1d+-0x7*0xac+-0x35*-0x38,_0x4442c6(0x1de),-0x1*-0x24c0+-0x16*0xc+-0x23b8+0.1),_0x1c74bc[_0x4442c6(0x4ee)](_0x35fd73,_0x37cb17,-0x1412+-0xc1*-0x11+-0x7*-0x117,_0x4442c6(0x1de),-0x1b7*-0xf+0x687*0x3+-0x2d4e+0.1));}else _0x27090b[_0x4442c6(0x14d)+'or']=_0x399863,_0x2b44f0();}else{var _0x46f962=('0|6|7'+_0x4442c6(0x250)+_0x4442c6(0x438))['split']('|'),_0x384362=-0x238*-0x1+-0x1c1*0x2+0x37*0x6;while(!![]){switch(_0x46f962[_0x384362++]){case'0':var _0x363b7a=_0x26f75c['creat'+'eElem'+_0x4442c6(0xe6)](_0x1c74bc['MPUrZ']);continue;case'1':_0x54efb8[_0x4442c6(0x56a)+_0x4442c6(0x540)]=_0x4442c6(0x3b4)+'bel';continue;case'2':return _0x363b7a;case'3':if(_0x47a2e6){var _0x20b42d=_0x11fdca[_0x4442c6(0xdb)+_0x4442c6(0x4e5)+_0x4442c6(0xe6)](_0x1c74bc[_0x4442c6(0x461)]);_0x20b42d['class'+_0x4442c6(0x540)]=_0x1c74bc['UEomj'],_0x20b42d[_0x4442c6(0x1c8)+'onten'+'t']=_0xf32043,_0x54efb8[_0x4442c6(0x34e)+_0x4442c6(0x52d)+'d'](_0x20b42d);}continue;case'4':_0x54efb8['textC'+_0x4442c6(0x323)+'t']=_0xb5c341;continue;case'5':_0x363b7a[_0x4442c6(0x34e)+'d'](_0x54efb8,_0x7c22bc);continue;case'6':_0x363b7a['class'+_0x4442c6(0x540)]=_0x1c74bc[_0x4442c6(0x62b)];continue;case'7':var _0x54efb8=_0xf4c20b['creat'+'eElem'+_0x4442c6(0xe6)](_0x1c74bc[_0x4442c6(0x62a)]);continue;}break;}}}catch(_0x332aa4){}},-0x96e+-0x4*-0x55+0x8e2),setInterval(()=>{var _0x10b3d4=_0x3d77f7;_0x3b426e[_0x10b3d4(0x194)+'oaded']=!!window[_0x10b3d4(0x29a)+_0x10b3d4(0x3bc)+_0x10b3d4(0x49c)];try{if('yYhIm'!==_0x1c74bc[_0x10b3d4(0x4d7)]){var _0x5360ea=-0x1*0x25ab+0x25*0x92+0x1091;for(var _0x4f80c4 in _0x1f5ad1){if(_0x1f5ad1[_0x4f80c4]&&_0x1f5ad1[_0x4f80c4][_0x10b3d4(0x645)+'ed'])_0x5360ea++;}_0x3b426e[_0x10b3d4(0x4ef)+'Ok']=_0x5360ea;}else _0x2b1b94['adblo'+'ck']=_0x488e84,_0x4b9918();}catch(_0x838469){}},-0x936*0x2+-0x283+-0x18d7*-0x1);var _0x455444=new Set(),_0x57143c={0x1:[],0x3:[]},_0x5c8cc2=![];function _0x12d151(_0x356355){var _0x234bc0=_0x3d77f7;if(_0x1c74bc['tnBvd']!==_0x1c74bc['VqpVA'])_0x455444[_0x234bc0(0x3b6)](_0x356355['code']);else{var _0x110d6f=_0xbcf1ec[_0x234bc0(0x4ca)+_0x234bc0(0x529)+'x']({'typeName':_0x349ab7,'methodName':_0x328cbd,'params':_0x277d3a,'returnType':_0x5f11c4},_0x39ff93);return _0x110d6f[_0x234bc0(0xec)+'ed']=_0x59744b!==![],_0x128438[_0x45ab70]=_0x110d6f,_0x55a4a2[_0x234bc0(0x4ef)+'Total']++,_0x110d6f;}}function _0x1d02f9(_0xac4b1b){var _0x32c6f8=_0x3d77f7;_0x455444[_0x32c6f8(0x473)+'e'](_0xac4b1b[_0x32c6f8(0x630)]);}function _0x4ae655(_0x3b063c){var _0x3e64db=_0x3d77f7,_0x39d421={'Sfatx':function(_0x3cc68b){var _0x41937b=_0x21de;return _0x1c74bc[_0x41937b(0x167)](_0x3cc68b);}};if(_0x3b063c['__sak'+_0x3e64db(0x532)])return;_0x455444['add'](_0x3e64db(0x5e0)+_0x1c74bc['ymWdC'](_0x3b063c[_0x3e64db(0x5ee)+'n'],-0x128d+-0x6a9+0x1937*0x1));var _0x26d894=_0x57143c[_0x3b063c['butto'+'n']+(0x205e+0x7e4+-0x2841)];if(_0x26d894){if(_0x1c74bc['JAZsw'](_0x1c74bc['dFzLx'],_0x1c74bc['mGrdr']))_0x554c8b[_0x3e64db(0x1f6)+'odDie']=_0x2ba88f,_0x39d421['Sfatx'](_0x56c764);else{_0x26d894['push'](performance['now']());if(_0x1c74bc[_0x3e64db(0x4d0)](_0x26d894[_0x3e64db(0x506)+'h'],0x4c+0x3e1*-0x3+0xb7f))_0x26d894[_0x3e64db(0x102)]();}}}function _0x8c5a43(_0x2381f2){var _0x420498=_0x3d77f7;if(!_0x2381f2[_0x420498(0x504)+'ura'])_0x455444[_0x420498(0x473)+'e'](_0x420498(0x5e0)+(_0x2381f2[_0x420498(0x5ee)+'n']+(-0x152*0x2+0x45*0x23+-0x6ca)));}function _0x4a7586(){var _0x51bf1b=_0x3d77f7;if(_0x51bf1b(0x570)!==_0x51bf1b(0x275))_0x455444['clear']();else{var _0xf4b3c5=_0x685a2a[_0x20fe5d]||[],_0x3d4a6d=_0x1af266[_0x51bf1b(0x476)]();while(_0xf4b3c5[_0x51bf1b(0x506)+'h']&&_0x1c74bc['YePQC'](_0x3d4a6d,_0xf4b3c5[-0x257*0x9+-0x95b+-0x22*-0xe5])>-0x1*0x7a3+0x38b*-0x7+0x2458)_0xf4b3c5[_0x51bf1b(0x102)]();return _0xf4b3c5[_0x51bf1b(0x506)+'h'];}}function _0x6395fd(){var _0x2f649f=_0x3d77f7;if(_0x5c8cc2)return;_0x5c8cc2=!![],window['addEv'+'entLi'+_0x2f649f(0x20b)+'r']('keydo'+'wn',_0x12d151,!![]),window['addEv'+_0x2f649f(0x18f)+_0x2f649f(0x20b)+'r'](_0x1c74bc[_0x2f649f(0x512)],_0x1d02f9,!![]),window[_0x2f649f(0x1c9)+_0x2f649f(0x18f)+'stene'+'r'](_0x1c74bc['WRnQY'],_0x4ae655,!![]),window[_0x2f649f(0x1c9)+'entLi'+'stene'+'r']('mouse'+'up',_0x8c5a43,!![]),window['addEv'+'entLi'+_0x2f649f(0x20b)+'r'](_0x1c74bc[_0x2f649f(0x5b4)],_0x4a7586);}function _0x32469a(_0x11a22e){var _0x1d5a53=_0x3d77f7,_0x5a2372=_0x57143c[_0x11a22e]||[],_0x523012=performance[_0x1d5a53(0x476)]();while(_0x5a2372[_0x1d5a53(0x506)+'h']&&_0x523012-_0x5a2372[-0x19fc+-0x490+0x1e8c]>-0x983+-0x2070+0x1*0x2ddb)_0x5a2372['shift']();return _0x5a2372[_0x1d5a53(0x506)+'h'];}function _0x17bfb6(_0x3982c1){var _0x51f58e=_0x3d77f7;if(document[_0x51f58e(0x241)]&&(document['ready'+_0x51f58e(0x634)]==='inter'+_0x51f58e(0x3d4)+'e'||_0x1c74bc[_0x51f58e(0x2ca)](document[_0x51f58e(0x155)+_0x51f58e(0x634)],_0x51f58e(0x3cd)+'ete')))_0x3982c1();else document[_0x51f58e(0x1c9)+_0x51f58e(0x18f)+'stene'+'r']('DOMCo'+'ntent'+_0x51f58e(0x2af)+'d',_0x3982c1,{'once':!![]});}_0x1c74bc[_0x3d77f7(0x655)](_0x17bfb6,()=>{var _0x4231d6=_0x3d77f7,_0x1f9052={'qBCql':function(_0x307256,_0x3b0b2a,_0x22941b){return _0x307256(_0x3b0b2a,_0x22941b);},'jZGOi':_0x4231d6(0x252)+'S','uDfvO':function(_0x442be9,_0x220510){var _0x4d03bd=_0x4231d6;return _0x1c74bc[_0x4d03bd(0x193)](_0x442be9,_0x220510);},'NAlwE':_0x4231d6(0xfd),'sZRke':function(_0xa534c,_0x3b8348,_0x18cf3b,_0x412d03,_0xb4664){return _0xa534c(_0x3b8348,_0x18cf3b,_0x412d03,_0xb4664);},'wlARq':function(_0xbbb13d,_0x240072,_0x2befdd,_0x409c6e,_0x11bbcf){var _0x2509d4=_0x4231d6;return _0x1c74bc[_0x2509d4(0x62e)](_0xbbb13d,_0x240072,_0x2befdd,_0x409c6e,_0x11bbcf);},'BIwMO':function(_0x248a02,_0x378fea,_0x8ba8c,_0x12e47e,_0x1e363c){return _0x248a02(_0x378fea,_0x8ba8c,_0x12e47e,_0x1e363c);},'yEIvk':function(_0x313926,_0x184eb9,_0x5d9109,_0x88ebe8,_0x2c5bb0){return _0x313926(_0x184eb9,_0x5d9109,_0x88ebe8,_0x2c5bb0);},'Lkjgt':_0x4231d6(0x1de),'FvebU':_0x4231d6(0x37a)+'255,1'+_0x4231d6(0x22d)+'7,0.8'+'5)','HNChD':_0x4231d6(0x213),'iKHjt':_0x4231d6(0x4fe)+'e','iIvcC':function(_0xe408a8,_0x585679){return _0xe408a8+_0x585679;},'gBUMJ':_0x4231d6(0x536),'HHAeL':function(_0x3dd908,_0x5d9c33){var _0xbb0ff0=_0x4231d6;return _0x1c74bc[_0xbb0ff0(0x4a0)](_0x3dd908,_0x5d9c33);},'WrGxf':_0x4231d6(0x2cf)+'-sans'+'-seri'+_0x4231d6(0x26d)+_0x4231d6(0x3ac)+'i,san'+'s-ser'+'if','MIkBn':function(_0x3bc3a8,_0x12d3fd){return _0x3bc3a8/_0x12d3fd;},'jPtoZ':function(_0x2e395c,_0x15e31a){var _0x58ddac=_0x4231d6;return _0x1c74bc[_0x58ddac(0x632)](_0x2e395c,_0x15e31a);},'TNXfW':function(_0x8daceb,_0x1f1c3b){var _0xcb8cd3=_0x4231d6;return _0x1c74bc[_0xcb8cd3(0x3cb)](_0x8daceb,_0x1f1c3b);},'Biecb':_0x1c74bc[_0x4231d6(0x285)],'FIJKL':function(_0x104866,_0x1e448c){return _0x104866||_0x1e448c;},'NTeLk':function(_0x48f912,_0x5e72f6){return _0x1c74bc['QsldJ'](_0x48f912,_0x5e72f6);},'wDcFL':function(_0x508886,_0x5116c5){return _0x508886-_0x5116c5;},'YMLdz':function(_0x5ae775,_0x2dfe0c){var _0x28ada7=_0x4231d6;return _0x1c74bc[_0x28ada7(0x655)](_0x5ae775,_0x2dfe0c);},'BYiuc':function(_0x1b9078,_0x525bf4){return _0x1b9078===_0x525bf4;},'vzhAx':_0x1c74bc[_0x4231d6(0x339)],'luZiK':_0x4231d6(0x497)+_0x4231d6(0x149)+_0x4231d6(0x4ad),'oIefo':_0x4231d6(0x267),'ABfpv':'butto'+'n','mrDrR':_0x4231d6(0x55a)+_0x4231d6(0x333),'LHPUC':'role','KeVoR':'aria-'+'check'+'ed','oEbnh':_0x1c74bc['gClzM'],'OvkPp':_0x1c74bc['LGYly'],'gAUVh':'sk-bt'+'n','grMNy':function(_0x23d91b,_0x381c9f){return _0x23d91b+_0x381c9f;},'EOlqc':_0x1c74bc[_0x4231d6(0x574)],'lgyHb':_0x4231d6(0x19e),'WMUrL':_0x4231d6(0x411)+_0x4231d6(0x1f8)+'ad','mbUKu':'UGnCl','IVHiR':_0x4231d6(0xe4)+'ody','eWywn':function(_0x10574d,_0xccd490,_0x1941a2){return _0x10574d(_0xccd490,_0x1941a2);},'DeXLZ':'noRec'+_0x4231d6(0x595),'QGmhe':function(_0x4e9018){var _0x3cf0b5=_0x4231d6;return _0x1c74bc[_0x3cf0b5(0x4d6)](_0x4e9018);},'OPxFg':function(_0x3f5188,_0x5d889d){var _0x28c7e3=_0x4231d6;return _0x1c74bc[_0x28c7e3(0x578)](_0x3f5188,_0x5d889d);},'MFcZf':_0x1c74bc[_0x4231d6(0x3a0)],'CsKJS':'eltUE','CWoiM':function(_0x3a5507){return _0x3a5507();},'lnbbG':_0x1c74bc[_0x4231d6(0x1cc)],'cLofi':'oZXBc','cODZM':function(_0x26b971,_0x442580){return _0x26b971+_0x442580;},'JhmnR':_0x4231d6(0x27d)+_0x4231d6(0x5e5),'ksJjj':function(_0x2f96bb,_0x5ef324){return _0x2f96bb===_0x5ef324;},'vMtZo':_0x4231d6(0x2e3)+'t','CTbUc':function(_0x49cf74,_0x444dff,_0x3ec06b,_0x2f049f,_0x402a3a,_0x15c544){return _0x49cf74(_0x444dff,_0x3ec06b,_0x2f049f,_0x402a3a,_0x15c544);},'kIscT':_0x1c74bc['Oombn'],'bKOsj':_0x1c74bc['zfIhk'],'mzqZv':function(_0x38c9da,_0x22c9d6,_0x4a7709,_0xab2a03,_0x31103f,_0x52af79){return _0x38c9da(_0x22c9d6,_0x4a7709,_0xab2a03,_0x31103f,_0x52af79);},'wQvXq':_0x1c74bc['kHqyp'],'OJavZ':'Zeroe'+'s\x20spr'+'ead\x20a'+_0x4231d6(0x1f3)+'xes\x20a'+_0x4231d6(0x3e0)+_0x4231d6(0x217)+'\x20your'+'\x20weap'+'on\x20ev'+_0x4231d6(0x465)+'00ms.','aHsLX':_0x1c74bc['wFvje'],'ytnwz':_0x4231d6(0x2e8)+_0x4231d6(0x2ae)+'rtide'+_0x4231d6(0x4bb)+_0x4231d6(0x41a)+'eRate'+_0x4231d6(0x2f1)+_0x4231d6(0x2fd)+'erver'+'\x20may\x20'+_0x4231d6(0x63b)+_0x4231d6(0x3c8)+_0x4231d6(0x2c8)+'s.','zHUmS':function(_0x21e135,_0x27550c,_0x48b294,_0xd1f92c,_0x5ac0b8,_0x35fed4){return _0x21e135(_0x27550c,_0x48b294,_0xd1f92c,_0x5ac0b8,_0x35fed4);},'xaezy':_0x4231d6(0x2e6)+_0x4231d6(0x2d2)+'ue','EQOlw':_0x4231d6(0x29d)+_0x4231d6(0x3e6)+_0x4231d6(0x43d)+_0x4231d6(0x18b),'tfXHd':_0x1c74bc[_0x4231d6(0x3ba)],'EiBfW':function(_0x39f959,_0x25962b,_0x2a5949,_0xe4a391){return _0x39f959(_0x25962b,_0x2a5949,_0xe4a391);},'MhVhW':_0x4231d6(0x2a5)+_0x4231d6(0x590)+_0x4231d6(0x254),'DxObZ':_0x1c74bc[_0x4231d6(0x2ba)],'VIiAc':function(_0x37f1b3,_0x3f4b47){return _0x37f1b3!==_0x3f4b47;},'XzBiY':function(_0x40e542,_0x438c47,_0x22b7b9,_0x54043){return _0x40e542(_0x438c47,_0x22b7b9,_0x54043);},'GoiHK':_0x4231d6(0x4bf)+'ty\x20%','QTWRD':_0x1c74bc['qGzal'],'CuaDe':_0x1c74bc[_0x4231d6(0x2f2)],'HUgNw':_0x1c74bc[_0x4231d6(0xe9)],'FBEyK':function(_0x2fe0b4,_0x5f0997,_0x28aa63,_0x2a8889,_0x37d95f,_0x2cacb0){return _0x2fe0b4(_0x5f0997,_0x28aa63,_0x2a8889,_0x37d95f,_0x2cacb0);},'PFYVd':function(_0x4b769d,_0x2a7bb0,_0xa04fce,_0xb574ad){var _0x32a96e=_0x4231d6;return _0x1c74bc[_0x32a96e(0x196)](_0x4b769d,_0x2a7bb0,_0xa04fce,_0xb574ad);},'FHRio':_0x4231d6(0x3b8)+_0x4231d6(0x31f)+'ht','gVqyj':_0x1c74bc[_0x4231d6(0xda)],'lDuZx':function(_0x40efef,_0x2cd447,_0x52df41,_0x153161,_0x196f6b,_0x35ed25){return _0x1c74bc['iQuai'](_0x40efef,_0x2cd447,_0x52df41,_0x153161,_0x196f6b,_0x35ed25);},'emLsV':_0x4231d6(0x233)+'ers','XXUvR':function(_0x1bbf18,_0x4d5691){return _0x1bbf18===_0x4d5691;},'vOVoM':_0x1c74bc[_0x4231d6(0x659)],'drGgn':'Hides'+_0x4231d6(0x381)+'-io_*'+'\x20bann'+_0x4231d6(0x5ca)+_0x4231d6(0x397),'rlITb':_0x1c74bc[_0x4231d6(0x65f)],'pRVkF':function(_0x4954b,_0x90c676,_0x2cff70,_0x4bbbbc,_0x2c22e1,_0x5bc16b){return _0x1c74bc['iQuai'](_0x4954b,_0x90c676,_0x2cff70,_0x4bbbbc,_0x2c22e1,_0x5bc16b);},'pgMhU':'Safe\x20'+_0x4231d6(0x35b)+'(over'+_0x4231d6(0xc7)+_0x4231d6(0x3a1),'GMUAL':_0x4231d6(0x1c1)+_0x4231d6(0xf4)+_0x4231d6(0x1fd)+_0x4231d6(0x647)+_0x4231d6(0x38e)+'tramp'+_0x4231d6(0x502)+'\x20for\x20'+'the\x20w'+'hole\x20'+_0x4231d6(0x13c)+_0x4231d6(0x44a)+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+'ault\x20'+_0x4231d6(0x65e)+_0x4231d6(0x2ec)+_0x4231d6(0x615)+'hat\x20d'+_0x4231d6(0x295)+'ot\x20ma'+'tch\x20t'+'he\x20re'+_0x4231d6(0x552)+_0x4231d6(0x5d0)+'throw'+'s\x20\x27fu'+_0x4231d6(0x5e8)+_0x4231d6(0x4c1)+_0x4231d6(0x128)+_0x4231d6(0x4c4)+_0x4231d6(0x3f7)+'\x27\x20the'+_0x4231d6(0x32c)+_0x4231d6(0x59d)+_0x4231d6(0x57c)+_0x4231d6(0x3f3)+_0x4231d6(0x2c3)+_0x4231d6(0x234)+_0x4231d6(0x643)+_0x4231d6(0x55e)+'t\x20a\x20t'+'ime,\x20'+_0x4231d6(0x43b)+'d,\x20an'+_0x4231d6(0x38f)+_0x4231d6(0x549)+_0x4231d6(0x1a3)+_0x4231d6(0x142)+'\x20buil'+_0x4231d6(0x309)+'kes\x20o'+'n.','MVFfn':_0x1c74bc['aArtv'],'pcSqr':function(_0x1c4e77,_0x56aaf1,_0x21fbd4){var _0x604ad=_0x4231d6;return _0x1c74bc[_0x604ad(0x556)](_0x1c4e77,_0x56aaf1,_0x21fbd4);},'nSdMP':_0x1c74bc['qeVWr'],'fXQzx':function(_0x4c843b,_0x43feb6,_0x41b2f3){return _0x4c843b(_0x43feb6,_0x41b2f3);},'DdCfU':'ACTk\x20'+_0x4231d6(0x501)+'r','JgRDp':_0x4231d6(0x1dc)+_0x4231d6(0x560)+'odeSt'+'age\x20d'+_0x4231d6(0x31e)+'ors\x20a'+'t\x20sta'+_0x4231d6(0x387)+_0x4231d6(0x266)+_0x4231d6(0x61d)+_0x4231d6(0xcd)+_0x4231d6(0x2ff)+_0x4231d6(0x4dd)+_0x4231d6(0x563),'ZSaWq':function(_0x3bab9d,_0x1b9f5c,_0x3d561e,_0x23e3c0,_0x237cbe,_0x59a78e){var _0x36beb2=_0x4231d6;return _0x1c74bc[_0x36beb2(0x312)](_0x3bab9d,_0x1b9f5c,_0x3d561e,_0x23e3c0,_0x237cbe,_0x59a78e);},'ZYuaQ':_0x1c74bc[_0x4231d6(0x240)],'vJDuL':function(_0x16a3e5,_0x42ebb4,_0x40c9b3,_0x36cefb){return _0x16a3e5(_0x42ebb4,_0x40c9b3,_0x36cefb);},'qxoRd':_0x4231d6(0x409),'WjDMk':_0x1c74bc[_0x4231d6(0x33e)],'qYzaC':function(_0x5ce167,_0x1249fe){return _0x5ce167<_0x1249fe;},'NWFWe':function(_0x5289be,_0x2d2156){var _0x53671e=_0x4231d6;return _0x1c74bc[_0x53671e(0xd7)](_0x5289be,_0x2d2156);},'pWTio':'SAFE','zQTup':function(_0x7b4b6,_0x3f67b){var _0x3faf3e=_0x4231d6;return _0x1c74bc[_0x3faf3e(0x3f6)](_0x7b4b6,_0x3f67b);},'aHawo':function(_0x29297d,_0x3f78a7){var _0x144e42=_0x4231d6;return _0x1c74bc[_0x144e42(0x13d)](_0x29297d,_0x3f78a7);},'YMmKb':'\x20hook'+'s','pxSEl':'loade'+'d','uNJYA':_0x1c74bc['QBbzV'],'pvcyr':'\x20|\x20sh'+'ooter'+'\x20','JkcdK':'held','qMeHj':_0x1c74bc['teEau']};if(_0x4fb280[_0x4231d6(0x4c5)+'ck']){if(_0x1c74bc[_0x4231d6(0x39a)]!==_0x1c74bc['hMshf']){var _0x22af87=_0x1f9052['qBCql'](_0x7a1321,_0x15895e,_0x4f9d6f=>{var _0x2c1882=_0x4231d6;_0x2087a3[_0x2c1882(0x56a)+_0x2c1882(0x5ef)]['toggl'+'e']('on',_0x4f9d6f),_0x170f1b(_0x4f9d6f);});_0x2abffb['appen'+'d'](_0x5cdeba,_0x22af87);}else setInterval(()=>{var _0x4e2271=_0x4231d6;try{for(var _0x3eeeb4 of[_0x1c74bc['tgZwA'],'kour-'+_0x4e2271(0x443)+_0x4e2271(0x5bc)+'paren'+'t','kour-'+'io_30'+'0x600'+'-pare'+'nt','fulls'+_0x4e2271(0x24b)+_0x4e2271(0x245)+'s']){var _0x267cf7=document[_0x4e2271(0x186)+'ement'+_0x4e2271(0x477)](_0x3eeeb4);if(_0x267cf7&&_0x1c74bc['hDeTu'](_0x3eeeb4,_0x1c74bc['YIgZO'])){var _0x1ee20e=_0x267cf7['child'+_0x4e2271(0x3d8)];for(var _0x38a683=-0x145c+-0x1d4a*-0x1+-0x8ee;_0x1c74bc[_0x4e2271(0x609)](_0x38a683,_0x1ee20e['lengt'+'h']);_0x38a683++){if(_0x1ee20e[_0x38a683]['id']&&_0x1c74bc['gLbhQ'](_0x1ee20e[_0x38a683]['id'][_0x4e2271(0x1a0)+'Of'](_0x1c74bc[_0x4e2271(0x5e1)]),-0x1686+0x1*-0x1566+0x2bec))_0x1ee20e[_0x38a683][_0x4e2271(0x33c)]['displ'+'ay']=_0x1c74bc[_0x4e2271(0x339)];}}else{if(_0x267cf7)_0x267cf7[_0x4e2271(0x33c)][_0x4e2271(0x580)+'ay']=_0x1c74bc['agOYN'];}}}catch(_0x5ad78d){}},-0x6ef+-0x2071+0x2f30);}var _0x4533c0=document[_0x4231d6(0xdb)+'eElem'+'ent'](_0x1c74bc[_0x4231d6(0x42c)]);_0x4533c0[_0x4231d6(0x33c)]['cssTe'+'xt']=_0x4231d6(0x2a8)+'ion:f'+_0x4231d6(0x223)+'inset'+_0x4231d6(0x63a)+_0x4231d6(0x377)+'00vw;'+_0x4231d6(0x26e)+_0x4231d6(0x10a)+'vh;z-'+'index'+_0x4231d6(0x65b)+_0x4231d6(0x395)+_0x4231d6(0xc5)+_0x4231d6(0x418)+'event'+_0x4231d6(0x300)+'e';var _0x32d60c=_0x4533c0[_0x4231d6(0x36f)+_0x4231d6(0x156)]('2d');function _0x260cff(){var _0x5815a1=_0x4231d6;try{var _0x4b30e3=document[_0x5815a1(0x49d)+_0x5815a1(0x24b)+'Eleme'+'nt'],_0x5c6a0b=_0x4b30e3&&_0x4b30e3[_0x5815a1(0x614)+'me']!==_0x1f9052['jZGOi']?_0x4b30e3:document['body']||document[_0x5815a1(0x2b8)+_0x5815a1(0x1d6)+_0x5815a1(0x10f)];if(_0x4533c0['paren'+'tNode']!==_0x5c6a0b)_0x5c6a0b[_0x5815a1(0x34e)+_0x5815a1(0x52d)+'d'](_0x4533c0);}catch(_0x505790){if(_0x1f9052[_0x5815a1(0x515)]('RxwKo',_0x1f9052['NAlwE']))_0x34ed41[_0x5815a1(0x473)+'e'](_0x1ced96['code']);else try{document[_0x5815a1(0x241)][_0x5815a1(0x34e)+_0x5815a1(0x52d)+'d'](_0x4533c0);}catch(_0x4c4db2){}}}var _0x3fdff2={'w':0x0,'h':0x0,'dpr':0x0};function _0x1f5fe7(){var _0xbe9b14=_0x4231d6;if(_0x1c74bc[_0xbe9b14(0x1e2)]!==_0xbe9b14(0x126)){var _0x46c6d1=window[_0xbe9b14(0x228)+'ePixe'+_0xbe9b14(0x627)+'o']||-0x1*-0x221d+0x1a4b+-0x3c67,_0x565b20=window[_0xbe9b14(0x4a9)+_0xbe9b14(0x371)],_0x4637a0=window['inner'+'Heigh'+'t'];if(_0x1c74bc['aXrKE'](_0x565b20,_0x3fdff2['w'])&&_0x4637a0===_0x3fdff2['h']&&_0x46c6d1===_0x3fdff2['dpr'])return;_0x3fdff2['w']=_0x565b20,_0x3fdff2['h']=_0x4637a0,_0x3fdff2['dpr']=_0x46c6d1,_0x4533c0['width']=Math[_0xbe9b14(0x278)](_0x1c74bc['BrgVM'](_0x565b20,_0x46c6d1)),_0x4533c0[_0xbe9b14(0x26e)+'t']=Math['round'](_0x4637a0*_0x46c6d1),_0x32d60c[_0xbe9b14(0x47a)+_0xbe9b14(0x4c0)+'rm'](_0x46c6d1,0x3*-0x7cd+0x2417+-0xcb0,-0x61*-0x2+0x241*0x7+-0x3*0x583,_0x46c6d1,0x1835+-0x4ca+0x136b*-0x1,-0x12ec+0x21dd+-0xef1);}else _0x1f9052[_0xbe9b14(0x2d6)](_0x4c96f7,_0xb76d0b,0x11c9+-0xcf+-0x10d2,'f32',_0x359124),_0x1f9052[_0xbe9b14(0x325)](_0x4c69e9,_0x5d60b6,-0x23ac+-0x26cd+0x4aa5,'f32',_0x5140e1),_0x530a62(_0x3d1bb5,-0x1*0x1f51+0x618+-0x515*-0x5,_0xbe9b14(0x1de),_0x4d9fa4),_0x1f9052[_0xbe9b14(0x5b8)](_0x17b1c2,_0x421dd2,-0x3b7*0x7+0x2f1*0x3+0x1162,_0xbe9b14(0x1de),_0x4c3802),_0x1f9052[_0xbe9b14(0x10d)](_0x20c2ad,_0xa18864,-0x1*-0x14e3+0x5*-0x335+-0x4be*0x1,_0x1f9052['Lkjgt'],_0x39e53e),_0x1f9052[_0xbe9b14(0x5b8)](_0x1d2fcc,_0x20915e,-0x1278+0x1*-0x17c1+-0x125*-0x25,_0x1f9052[_0xbe9b14(0x58a)],_0x2806c0);}var _0x150d96=-0x3bf*0x7+-0x699*0x1+0x20d2,_0x473130=performance['now'](),_0x39c2db=0x5*-0x23+-0x24e+0x2fd;function _0x2f7d48(_0x167ea1){var _0x2bd4fd=_0x4231d6,_0x2794d5=_0x1c74bc[_0x2bd4fd(0x5dc)](Number,_0x4fb280['ksSca'+'le'])||-0x143f+0x2*-0x897+0x256e,_0x4d2719=(0xc8f+0x16e2*-0x1+0x1*0xa75)*_0x2794d5,_0x1f7137=_0x1c74bc[_0x2bd4fd(0x313)](0x5d*-0x29+-0x8*-0x403+-0x112f,_0x2794d5),_0x598125=_0x4d2719*(0x30*-0x9d+0x6b9*0x3+-0xc*-0xc6)+_0x1f7137*(0xebd+0xa3c+0x7*-0x391),_0x1003c9=_0x4d2719*(0x1*0x65b+-0x2*-0x106+0xc*-0xb3)+_0x1f7137*(-0xf*0x22d+0xbe3*0x1+0x2*0xa61),_0x14f79b=_0x4fb280[_0x2bd4fd(0x495)],_0x279e52=_0x14f79b==='br'?_0x167ea1['right']-(-0x1629+-0x2615+-0xba*-0x53)-_0x598125:_0x1c74bc[_0x2bd4fd(0x507)](_0x167ea1[_0x2bd4fd(0x5ba)],0x2*0x2f6+-0x11e3+-0xc07*-0x1),_0x3e5e19=_0x14f79b==='ml'?_0x167ea1['top']+_0x167ea1['heigh'+'t']/(0x1d*-0xcc+0xc07+0xa7*0x11)-_0x1c74bc[_0x2bd4fd(0x433)](_0x1003c9,-0x25af+-0x259*0x2+0xe21*0x3):_0x1c74bc['YePQC'](_0x167ea1['botto'+'m']-_0x1003c9,_0x1c74bc['UMylb'](_0x14f79b,'bl')?-0xd0c+0xdc4+-0x58:0x525+0x1492+-0x7*0x397),_0x147ee4=(_0x100ba0,_0x5ec247,_0x3e8acd,_0x2158b5,_0x162c92,_0x1edacd,_0x246767)=>{var _0x85697a=_0x2bd4fd,_0x289fe5=_0x455444[_0x85697a(0x5ed)](_0x5ec247);_0x32d60c[_0x85697a(0x571)](),_0x32d60c['begin'+_0x85697a(0x484)]();if(_0x32d60c['round'+'Rect'])_0x32d60c[_0x85697a(0x278)+_0x85697a(0x2ea)](_0x3e8acd,_0x2158b5,_0x162c92,_0x1edacd,(0x2220+0x1*0x2356+-0x456f)*_0x2794d5);else _0x32d60c['rect'](_0x3e8acd,_0x2158b5,_0x162c92,_0x1edacd);_0x32d60c[_0x85697a(0x1f0)+'tyle']=_0x289fe5?_0x1f9052[_0x85697a(0x192)]:'rgba('+'22,8,'+_0x85697a(0x24f)+'7)',_0x32d60c[_0x85697a(0x103)](),_0x32d60c['lineW'+_0x85697a(0x2c0)]=0x51*-0x79+-0x10e0+0x372a,_0x32d60c[_0x85697a(0x527)+'eStyl'+'e']=_0x289fe5?_0x4894e7:'rgba('+'255,1'+'07,15'+_0x85697a(0x53a)+'5)',_0x32d60c['strok'+'e'](),_0x289fe5&&(_0x32d60c[_0x85697a(0x14e)+_0x85697a(0x44e)+'r']=_0x9faf96,_0x32d60c[_0x85697a(0x14e)+_0x85697a(0x472)]=0x1*-0xc69+0x1d7+0xaa0*0x1,_0x32d60c['fill'](),_0x32d60c[_0x85697a(0x14e)+'wBlur']=-0x59b+-0x1*-0x12dd+0xd42*-0x1),_0x32d60c[_0x85697a(0x1f0)+_0x85697a(0x338)]=_0x289fe5?_0x1f9052['HNChD']:'rgba('+_0x85697a(0x44d)+_0x85697a(0x15c)+_0x85697a(0x5c0)+')',_0x32d60c[_0x85697a(0x4e1)+'lign']=_0x85697a(0x5cb)+'r',_0x32d60c['textB'+'aseli'+'ne']=_0x1f9052[_0x85697a(0x45f)],_0x32d60c[_0x85697a(0x17b)]=_0x1f9052[_0x85697a(0x4b2)](_0x1f9052['gBUMJ']+Math[_0x85697a(0x278)](_0x1f9052[_0x85697a(0x492)](0x1*0xe3+-0x1*0x7fa+0x1d*0x3f,_0x2794d5)),_0x1f9052[_0x85697a(0xf6)]),_0x32d60c[_0x85697a(0x4ba)+'ext'](_0x100ba0,_0x3e8acd+_0x162c92/(-0x5*0x5d4+0x9b2+-0x1374*-0x1),_0x2158b5+_0x1f9052[_0x85697a(0x47b)](_0x1edacd,-0x1*0x2252+-0x100+0x2354)-(_0x246767?_0x1f9052[_0x85697a(0x35d)](0x4b7*0x3+0xeb7+-0x1cd7,_0x2794d5):-0xb17+0x1*0x24e7+-0x19d0)),_0x246767&&(_0x32d60c[_0x85697a(0x17b)]='600\x20'+Math['round'](_0x1f9052['HHAeL'](0x187*0x5+-0x240d*-0x1+-0x2e9*0xf,_0x2794d5))+('px\x20ui'+'-sans'+_0x85697a(0x26a)+'f,sys'+_0x85697a(0x3ac)+'i,san'+'s-ser'+'if'),_0x32d60c[_0x85697a(0x1f0)+_0x85697a(0x338)]=_0x289fe5?'#fff':_0x85697a(0x37a)+'255,2'+_0x85697a(0x15c)+_0x85697a(0x255)+'5)',_0x32d60c['fillT'+'ext'](_0x246767,_0x3e8acd+_0x162c92/(-0x2f7*-0x3+-0x8bb*0x1+-0x28),_0x2158b5+_0x1f9052[_0x85697a(0x14f)](_0x1edacd,0x5c2+-0x1158+0xb98)+_0x1f9052['jPtoZ'](-0x156d+0x12f*0x11+-0x26*-0x9,_0x2794d5))),_0x32d60c['resto'+'re']();};_0x147ee4('W',_0x1c74bc[_0x2bd4fd(0x557)],_0x1c74bc[_0x2bd4fd(0x212)](_0x279e52,_0x4d2719)+_0x1f7137,_0x3e5e19,_0x4d2719,_0x4d2719),_0x147ee4('A',_0x2bd4fd(0x1e1),_0x279e52,_0x3e5e19+_0x4d2719+_0x1f7137,_0x4d2719,_0x4d2719),_0x147ee4('S',_0x1c74bc[_0x2bd4fd(0x188)],_0x1c74bc['VKBWD'](_0x279e52,_0x4d2719)+_0x1f7137,_0x1c74bc[_0x2bd4fd(0x283)](_0x3e5e19+_0x4d2719,_0x1f7137),_0x4d2719,_0x4d2719),_0x1c74bc[_0x2bd4fd(0x2d3)](_0x147ee4,'D',_0x2bd4fd(0x5ad),_0x279e52+(_0x4d2719+_0x1f7137)*(0x2078+-0x10*-0x8+-0x20f6),_0x1c74bc['JGQwT'](_0x3e5e19+_0x4d2719,_0x1f7137),_0x4d2719,_0x4d2719);var _0x33e4e7=_0x1c74bc['zgOll'](_0x598125-_0x1f7137,0x44*-0x80+-0x3*0x6be+0x363c),_0x379d61=_0x3e5e19+_0x1c74bc[_0x2bd4fd(0x61c)](_0x4d2719+_0x1f7137,0x5*0x59b+0x7ff+-0x2404);_0x147ee4(_0x1c74bc['fQPpl'],_0x2bd4fd(0x5e0)+'1',_0x279e52,_0x379d61,_0x33e4e7,_0x4d2719,_0x4fb280[_0x2bd4fd(0x109)]?_0x1c74bc[_0x2bd4fd(0x510)](_0x32469a(-0x1ad6+0x1a3+0x1934),_0x1c74bc[_0x2bd4fd(0x650)]):''),_0x147ee4(_0x1c74bc[_0x2bd4fd(0x5fd)],_0x2bd4fd(0x5e0)+'3',_0x1c74bc[_0x2bd4fd(0x158)](_0x279e52+_0x33e4e7,_0x1f7137),_0x379d61,_0x33e4e7,_0x4d2719,_0x4fb280[_0x2bd4fd(0x109)]?_0x1c74bc['kIJeb'](_0x32469a(0x17b*0x16+0x71*0x45+0x4*-0xfc1),_0x1c74bc['pEDaz']):''),_0x147ee4('',_0x1c74bc['ojgGA'],_0x279e52,_0x379d61+_0x4d2719+_0x1f7137,_0x598125,_0x1c74bc[_0x2bd4fd(0x313)](_0x4d2719,0x24f9+-0x1da9+-0x750+0.45));}function _0x16be96(_0x25da5f){var _0x5b41f9=_0x4231d6,_0x265ef9=_0x1c74bc['UqMdB'](_0x25da5f[_0x5b41f9(0xdd)],0x2*-0x408+-0x7de*-0x3+0x238*-0x7),_0x5e525e=_0x1c74bc[_0x5b41f9(0x433)](_0x25da5f[_0x5b41f9(0x26e)+'t'],-0x12bb+-0x1a2b+-0xb3a*-0x4),_0x51dd77=Number(_0x4fb280[_0x5b41f9(0x31b)+'e'])||0x35f*-0x6+-0x1*0x137b+-0x22*-0x12b,_0x155c45=/^#[0-9a-f]{6}$/i['test'](_0x4fb280['chCol'+'or'])?_0x4fb280[_0x5b41f9(0x14d)+'or']:_0x5b41f9(0x562)+'9d';_0x32d60c[_0x5b41f9(0x571)](),_0x32d60c['strok'+_0x5b41f9(0x1c6)+'e']=_0x155c45,_0x32d60c[_0x5b41f9(0x1f0)+'tyle']=_0x155c45,_0x32d60c[_0x5b41f9(0x177)+_0x5b41f9(0x2c0)]=Math[_0x5b41f9(0x50c)](0x2c3*-0x8+-0x1333+0x294c+0.5,_0x1c74bc[_0x5b41f9(0x4a0)](0xf55+0x19*-0x23+-0xbe8,_0x51dd77)),_0x32d60c[_0x5b41f9(0x14e)+_0x5b41f9(0x44e)+'r']=_0x155c45,_0x32d60c[_0x5b41f9(0x14e)+'wBlur']=0x5*-0x2b3+-0x95c*0x3+0x2999;var _0x54252c=_0x1c74bc[_0x5b41f9(0x313)](-0x3bf+0x426*-0x5+-0xfb*-0x19,_0x51dd77),_0x3bbe43=(0x9e4+0x80+-0xa5c)*_0x51dd77;_0x32d60c['begin'+_0x5b41f9(0x484)](),_0x32d60c[_0x5b41f9(0x657)+'o'](_0x1c74bc['RCjKz'](_0x1c74bc[_0x5b41f9(0x131)](_0x265ef9,_0x54252c),_0x3bbe43),_0x5e525e),_0x32d60c[_0x5b41f9(0x3ad)+'o'](_0x265ef9-_0x54252c,_0x5e525e),_0x32d60c['moveT'+'o'](_0x265ef9+_0x54252c,_0x5e525e),_0x32d60c[_0x5b41f9(0x3ad)+'o'](_0x1c74bc[_0x5b41f9(0x3b5)](_0x265ef9,_0x54252c)+_0x3bbe43,_0x5e525e),_0x32d60c['moveT'+'o'](_0x265ef9,_0x1c74bc['NJBwq'](_0x5e525e-_0x54252c,_0x3bbe43)),_0x32d60c['lineT'+'o'](_0x265ef9,_0x5e525e-_0x54252c),_0x32d60c[_0x5b41f9(0x657)+'o'](_0x265ef9,_0x5e525e+_0x54252c),_0x32d60c[_0x5b41f9(0x3ad)+'o'](_0x265ef9,_0x1c74bc['BXOpW'](_0x5e525e+_0x54252c,_0x3bbe43)),_0x32d60c['strok'+'e'](),_0x32d60c['begin'+_0x5b41f9(0x484)](),_0x32d60c[_0x5b41f9(0x170)](_0x265ef9,_0x5e525e,(-0x22fb+0x1*0x911+0x5*0x52f+0.6000000000000001)*_0x51dd77,0x14+0x5b+-0x25*0x3,_0x1c74bc[_0x5b41f9(0x632)](Math['PI'],-0x179*-0x1+-0x2*0xee3+-0x1*-0x1c4f)),_0x32d60c['fill'](),_0x32d60c['resto'+'re']();}function _0x3d4333(_0x35acc6){var _0x1e36f4=_0x4231d6;_0x32d60c[_0x1e36f4(0x571)](),_0x32d60c[_0x1e36f4(0x17b)]=_0x1c74bc[_0x1e36f4(0x216)],_0x32d60c[_0x1e36f4(0x4e1)+'lign']=_0x1c74bc[_0x1e36f4(0x2fa)],_0x32d60c[_0x1e36f4(0x59c)+'aseli'+'ne']=_0x1c74bc['QJIwt'];var _0x18d95f=0x2127*-0x1+0x146c+0xce7*0x1,_0x141015=0x3b3*0x9+-0x1808+-0x937,_0x5390da=(_0x5025de,_0x2bf8c2)=>{var _0x47086c=_0x1e36f4;if(_0x1f9052[_0x47086c(0x318)]==='MvWWi'){var _0x5611ff={'XwGzj':function(_0x377883){return _0x377883();}},_0x2d2bbb=_0x521478['creat'+_0x47086c(0x4e5)+_0x47086c(0xe6)](_0x47086c(0x5ee)+'n');return _0x2d2bbb['type']=_0x47086c(0x5ee)+'n',_0x2d2bbb['class'+'Name']=_0x47086c(0x582)+'n',_0x2d2bbb[_0x47086c(0x1c8)+'onten'+'t']=_0x56b62c,_0x2d2bbb[_0x47086c(0x3c2)+'ck']=_0x3e1e7f=>{var _0xaadc59=_0x47086c;_0x3e1e7f['stopP'+_0xaadc59(0x5ab)+'ation'](),_0x5611ff[_0xaadc59(0x5f3)](_0x599893);},_0x2d2bbb;}else _0x32d60c['fillS'+_0x47086c(0x338)]=_0x1f9052['FIJKL'](_0x2bf8c2,'rgba('+'255,2'+_0x47086c(0x15c)+'0,0.7'+'5)'),_0x32d60c[_0x47086c(0x4ba)+_0x47086c(0x2c2)](_0x5025de,_0x141015,_0x18d95f),_0x18d95f+=-0x2*-0x1337+0x256+-0x28b4;};_0x5390da('SAKUR'+_0x1e36f4(0x24c)+_0x1e36f4(0x470)+'1','#ff6b'+'9d');if(_0x4fb280['fps'])_0x1c74bc[_0x1e36f4(0x5dc)](_0x5390da,_0x39c2db+_0x1c74bc['ngFsE']);if(!_0x3b426e[_0x1e36f4(0x194)+'oaded'])_0x5390da(_0x1e36f4(0x649)+_0x1e36f4(0x52c)+'r\x20gam'+'e…',_0x1e36f4(0x37a)+'255,1'+_0x1e36f4(0x1e8)+'0,0.6'+')');_0x32d60c[_0x1e36f4(0x537)+'re']();}function _0x4e6288(){var _0x1c0ba5=_0x4231d6;requestAnimationFrame(_0x4e6288),_0x150d96++;var _0x39c17f=performance['now']();_0x1f9052['NTeLk'](_0x1f9052[_0x1c0ba5(0xc8)](_0x39c17f,_0x473130),-0x2*-0x698+0x1145+0x1*-0x1c81)&&(_0x39c2db=Math[_0x1c0ba5(0x278)](_0x150d96*(-0x25e0+-0x1*-0xb4e+0x1e7a)/(_0x39c17f-_0x473130)),_0x150d96=-0x70c+0x1ba6*-0x1+0x22b2,_0x473130=_0x39c17f);_0x1f5fe7(),_0x260cff(),_0x32d60c['clear'+'Rect'](-0x5b*0x49+-0x226+0x1c19,-0x109+-0x14e3+-0x17*-0xf4,_0x3fdff2['w'],_0x3fdff2['h']);var _0x1abd13={'left':0x0,'top':0x0,'right':_0x3fdff2['w'],'bottom':_0x3fdff2['h'],'width':_0x3fdff2['w'],'height':_0x3fdff2['h']};if(_0x4fb280[_0x1c0ba5(0x490)+_0x1c0ba5(0x575)])_0x16be96(_0x1abd13);if(_0x4fb280['keyst'+'rokes'])_0x1f9052[_0x1c0ba5(0x1d1)](_0x2f7d48,_0x1abd13);_0x1f9052[_0x1c0ba5(0x1d1)](_0x3d4333,_0x1abd13);}var _0x5a674b=document[_0x4231d6(0xdb)+'eElem'+_0x4231d6(0xe6)](_0x1c74bc[_0x4231d6(0x2a6)]);_0x5a674b['id']=_0x4231d6(0x497)+_0x4231d6(0x503),_0x5a674b[_0x4231d6(0x33c)]['cssTe'+'xt']='posit'+_0x4231d6(0x4aa)+_0x4231d6(0x223)+'inset'+_0x4231d6(0x12e)+_0x4231d6(0x1a0)+':2147'+_0x4231d6(0x395)+'7;poi'+_0x4231d6(0x418)+_0x4231d6(0x423)+_0x4231d6(0x300)+'e;';var _0x4badb6=_0x5a674b[_0x4231d6(0x293)+'hShad'+'ow']({'mode':'open'});(document[_0x4231d6(0x241)]||document[_0x4231d6(0x2b8)+'entEl'+_0x4231d6(0x10f)])[_0x4231d6(0x34e)+'dChil'+'d'](_0x5a674b);var _0x49942a=![],_0x576818={};try{_0x576818=JSON['parse'](localStorage['getIt'+'em'](_0x4231d6(0x497)+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x287436){}function _0x5b63b2(){var _0x1b8425=_0x4231d6;if(_0x1c74bc['ejzKn']===_0x1c74bc[_0x1b8425(0x364)])_0x303466[_0x1b8425(0x2b9)+_0x1b8425(0x37c)]=_0x4e7801,_0xdf6737();else try{if(_0x1c74bc[_0x1b8425(0x30c)](_0x1b8425(0x2cd),_0x1c74bc['WxpxW']))localStorage['setIt'+'em']('sakur'+_0x1b8425(0x149)+_0x1b8425(0x23a)+'v1',JSON['strin'+_0x1b8425(0x2dc)](_0x576818));else{if(_0x1a3ae0[_0xde2307]['id']&&_0x1f9052['BYiuc'](_0x50e6f4[_0x186440]['id'][_0x1b8425(0x1a0)+'Of']('kour-'+_0x1b8425(0x584)),-0x199b+0x1ed*0x8+0xa33))_0x27d6b8[_0x491cfb][_0x1b8425(0x33c)][_0x1b8425(0x580)+'ay']=_0x1f9052['vzhAx'];}}catch(_0x6ed405){}}function _0x4a5a0d(_0x57a3bb,_0x4fe975){var _0x73fed9=_0x4231d6,_0x3a014f={'HMfSz':'aria-'+_0x73fed9(0x594)+'ed','lKbxU':'true','xqxYY':function(_0x86899a,_0xdd75db){return _0x86899a(_0xdd75db);},'DNkTc':_0x1f9052['luZiK']};if(_0x1f9052['oIefo']!==_0x73fed9(0x353)){var _0x5620ee=document['creat'+_0x73fed9(0x4e5)+'ent'](_0x1f9052[_0x73fed9(0xd8)]);return _0x5620ee['type']='butto'+'n',_0x5620ee[_0x73fed9(0x56a)+_0x73fed9(0x540)]=_0x1f9052['mrDrR'],_0x5620ee[_0x73fed9(0x161)+_0x73fed9(0x152)+'te'](_0x1f9052['LHPUC'],_0x73fed9(0x60a)+'h'),_0x5620ee[_0x73fed9(0x161)+_0x73fed9(0x152)+'te'](_0x1f9052[_0x73fed9(0x450)],String(!!_0x57a3bb)),_0x5620ee['oncli'+'ck']=_0x189f81=>{var _0xf2da9=_0x73fed9;_0x189f81['stopP'+'ropag'+_0xf2da9(0x5af)]();var _0x241cd6=_0x5620ee['getAt'+'tribu'+'te'](_0x3a014f[_0xf2da9(0x159)])!==_0x3a014f[_0xf2da9(0x35a)];_0x5620ee['setAt'+_0xf2da9(0x152)+'te']('aria-'+_0xf2da9(0x594)+'ed',String(_0x241cd6)),_0x3a014f[_0xf2da9(0x147)](_0x4fe975,_0x241cd6);},_0x5620ee;}else try{_0x3651e3[_0x73fed9(0x206)+'em'](_0x3a014f[_0x73fed9(0x444)],_0x17da3e['strin'+_0x73fed9(0x2dc)](_0x8af914));}catch(_0x3af256){}}function _0x62f0ad(_0xbe061e,_0x11029b,_0x51bea9,_0x308a9a,_0x1df0c8){var _0xa058f1=_0x4231d6,_0x72db48={'IDlpl':function(_0x518e3d){return _0x518e3d();},'VCiKq':function(_0x2867cb,_0x1aa8b1){return _0x2867cb(_0x1aa8b1);}},_0xf2c066=document[_0xa058f1(0xdb)+'eElem'+_0xa058f1(0xe6)](_0x1c74bc[_0xa058f1(0x2a6)]);_0xf2c066['class'+'Name']=_0xa058f1(0x439)+'nge';var _0x1f5125=document[_0xa058f1(0xdb)+_0xa058f1(0x4e5)+_0xa058f1(0xe6)](_0xa058f1(0x2e1));_0x1f5125[_0xa058f1(0x5f5)]=_0xa058f1(0x3b3),_0x1f5125['class'+'Name']=_0xa058f1(0x172)+'ider',_0x1f5125[_0xa058f1(0x1a5)]=_0x11029b,_0x1f5125['max']=_0x51bea9,_0x1f5125['step']=_0x308a9a,_0x1f5125[_0xa058f1(0x547)]=_0xbe061e;var _0x536535=document['creat'+_0xa058f1(0x4e5)+'ent'](_0xa058f1(0xf5));_0x536535['class'+'Name']=_0xa058f1(0x31d)+'l',_0x536535[_0xa058f1(0x1c8)+_0xa058f1(0x323)+'t']=String(_0xbe061e);var _0x2745ff=()=>{var _0x217b59=_0xa058f1;_0x536535[_0x217b59(0x1c8)+_0x217b59(0x323)+'t']=String(_0x1f5125['value']),_0xf2c066['style'][_0x217b59(0x274)+'opert'+'y'](_0x217b59(0xcf),_0x1f9052[_0x217b59(0x492)](_0x1f9052['wDcFL'](_0x1f5125[_0x217b59(0x547)],_0x11029b)/_0x1f9052['wDcFL'](_0x51bea9,_0x11029b),-0x10a2*0x1+0x73e+0x9c8*0x1)+'%');};return _0x1f5125['oninp'+'ut']=()=>{var _0x137883=_0xa058f1;_0x72db48['IDlpl'](_0x2745ff),_0x72db48[_0x137883(0x641)](_0x1df0c8,_0x72db48[_0x137883(0x641)](Number,_0x1f5125['value']));},_0x1c74bc['FefIq'](_0x2745ff),_0xf2c066['appen'+'d'](_0x1f5125,_0x536535),_0xf2c066;}function _0x247c49(_0x150c4f,_0x38efe9){var _0x369637=_0x4231d6,_0x20d76e={'wQhNp':_0x1c74bc[_0x369637(0x2bc)],'RgsoS':function(_0x15a61c){var _0x1e3b61=_0x369637;return _0x1c74bc[_0x1e3b61(0x237)](_0x15a61c);}};if(_0x1c74bc[_0x369637(0x4b1)](_0x1c74bc['XZpWB'],'hKpiA')){var _0x4fbb0c=_0x1c74bc[_0x369637(0x61a)][_0x369637(0x290)]('|'),_0x12ca98=0x7f*-0xf+-0x1594+0x1d05;while(!![]){switch(_0x4fbb0c[_0x12ca98++]){case'0':_0x57cacb['value']=/^#[0-9a-f]{6}$/i['test'](_0x150c4f)?_0x150c4f:_0x1c74bc[_0x369637(0x56d)];continue;case'1':_0x57cacb[_0x369637(0x5f5)]=_0x369637(0x568);continue;case'2':_0x57cacb['oninp'+'ut']=()=>_0x38efe9(_0x57cacb[_0x369637(0x547)]);continue;case'3':var _0x57cacb=document['creat'+_0x369637(0x4e5)+'ent']('input');continue;case'4':_0x57cacb[_0x369637(0x56a)+_0x369637(0x540)]='sk-co'+_0x369637(0x1c4);continue;case'5':return _0x57cacb;}break;}}else{var _0x3459d5=_0x1f5556[_0x369637(0xdb)+_0x369637(0x4e5)+'ent'](_0x20d76e['wQhNp']);_0x3459d5['textC'+_0x369637(0x323)+'t']=_0x32387b,_0x586204[_0x369637(0x34e)+'dChil'+'d'](_0x3459d5),_0x58e1b7=_0x20d76e[_0x369637(0x432)](_0x32ae2f),_0x362c62[_0x369637(0x34e)+'dChil'+'d'](_0x167678),_0x450591(()=>_0x44cdec['class'+_0x369637(0x5ef)][_0x369637(0x3b6)](_0x369637(0x409)));}}function _0x1247b2(_0x40559f,_0x428a54,_0x269631){var _0x4d1fd6=_0x4231d6;if(_0x4d1fd6(0x51e)!=='VaTCY')_0x58cc45[_0x4d1fd6(0x206)+'em']('sakur'+_0x4d1fd6(0x149)+'r.ui.'+'v1',_0x51dd43[_0x4d1fd6(0x4fb)+_0x4d1fd6(0x2dc)](_0x18540c));else{var _0x4d21a=document['creat'+_0x4d1fd6(0x4e5)+_0x4d1fd6(0xe6)](_0x1f9052['oEbnh']);_0x4d21a['class'+'Name']='sk-fi'+'eld';for(var [_0x2c16ce,_0x180cf8]of _0x428a54){var _0x413763=document[_0x4d1fd6(0xdb)+_0x4d1fd6(0x4e5)+_0x4d1fd6(0xe6)]('optio'+'n');_0x413763[_0x4d1fd6(0x547)]=_0x2c16ce,_0x413763[_0x4d1fd6(0x1c8)+'onten'+'t']=_0x180cf8,_0x4d21a[_0x4d1fd6(0x34e)+_0x4d1fd6(0x52d)+'d'](_0x413763);}return _0x4d21a[_0x4d1fd6(0x547)]=_0x40559f,_0x4d21a[_0x4d1fd6(0x27a)+'nge']=()=>_0x269631(_0x4d21a['value']),_0x4d21a;}}function _0x420543(_0x1760d3,_0x39263d){var _0x2e1dd8=_0x4231d6,_0xf8ed48={'ljwIu':function(_0x5d65c7,_0x37d366){return _0x5d65c7===_0x37d366;},'TtOvN':_0x2e1dd8(0x2e4)+'t'};if(_0x2e1dd8(0x12b)===_0x1f9052['OvkPp'])_0xf8ed48[_0x2e1dd8(0x307)](_0x11e806[_0x2e1dd8(0x630)],_0xf8ed48[_0x2e1dd8(0x17c)])&&(_0x1e1ddd[_0x2e1dd8(0x4ac)+_0x2e1dd8(0x5a6)+'ault'](),_0x1633d4());else{var _0x13c87b=document['creat'+'eElem'+'ent'](_0x2e1dd8(0x5ee)+'n');return _0x13c87b[_0x2e1dd8(0x5f5)]='butto'+'n',_0x13c87b['class'+'Name']=_0x1f9052['gAUVh'],_0x13c87b[_0x2e1dd8(0x1c8)+_0x2e1dd8(0x323)+'t']=_0x1760d3,_0x13c87b['oncli'+'ck']=_0x4f3218=>{var _0xd84b0=_0x2e1dd8;_0x4f3218['stopP'+_0xd84b0(0x5ab)+_0xd84b0(0x5af)](),_0x39263d();},_0x13c87b;}}function _0x560bc4(_0x11e5a0,_0x57fc54,_0x55eabc){var _0x51e206=_0x4231d6,_0x2d8842=document['creat'+'eElem'+_0x51e206(0xe6)](_0x1c74bc['MPUrZ']);_0x2d8842[_0x51e206(0x56a)+_0x51e206(0x540)]='sk-ct'+'l';var _0x242fa3=document[_0x51e206(0xdb)+_0x51e206(0x4e5)+_0x51e206(0xe6)](_0x1c74bc[_0x51e206(0x62a)]);_0x242fa3[_0x51e206(0x56a)+_0x51e206(0x540)]=_0x51e206(0x3b4)+'bel',_0x242fa3['textC'+_0x51e206(0x323)+'t']=_0x11e5a0;if(_0x57fc54){if(_0x51e206(0x138)===_0x51e206(0x138)){var _0x264e5a=document[_0x51e206(0xdb)+_0x51e206(0x4e5)+'ent']('small');_0x264e5a[_0x51e206(0x56a)+'Name']=_0x1c74bc[_0x51e206(0x469)],_0x264e5a[_0x51e206(0x1c8)+_0x51e206(0x323)+'t']=_0x57fc54,_0x242fa3['appen'+'dChil'+'d'](_0x264e5a);}else{var _0x469f00=_0x3833da['creat'+_0x51e206(0x4e5)+_0x51e206(0xe6)](_0x51e206(0x19e));_0x469f00['class'+'Name']='sk-mb'+_0x51e206(0x1c2);var _0x41a0d1=_0x35ab84[_0x51e206(0xdb)+_0x51e206(0x4e5)+_0x51e206(0xe6)](_0x51e206(0x19e));_0x41a0d1[_0x51e206(0x56a)+'Name']='sk-md'+'esc',_0x41a0d1[_0x51e206(0x1c8)+'onten'+'t']=_0x2d409e,_0x469f00[_0x51e206(0x34e)+'dChil'+'d'](_0x41a0d1);for(var _0x3693d3 of _0x3a4e0b)_0x469f00[_0x51e206(0x34e)+'dChil'+'d'](_0x3693d3);_0x59e362[_0x51e206(0x34e)+'dChil'+'d'](_0x469f00);}}return _0x2d8842[_0x51e206(0x34e)+'d'](_0x242fa3,_0x55eabc),_0x2d8842;}function _0x1c09e3(_0x51cc4c,_0x1c8b30){var _0x2e937f=_0x4231d6,_0x13e0c9=document[_0x2e937f(0xdb)+'eElem'+_0x2e937f(0xe6)](_0x1c74bc[_0x2e937f(0x2a6)]);return _0x13e0c9[_0x2e937f(0x56a)+_0x2e937f(0x540)]=_0x1c74bc['vmKcP'](_0x2e937f(0x1b7)+'te',_0x1c8b30?_0x1c74bc['puAro']:''),_0x13e0c9['textC'+'onten'+'t']=_0x51cc4c,_0x13e0c9;}function _0x27d40d(_0x3dae46,_0x1013ee,_0x29b956,_0x4398d8,_0x974924){var _0x11e984=_0x4231d6,_0x134e85={'nYHcC':function(_0x32c4bd,_0x5827bc){return _0x32c4bd!==_0x5827bc;}},_0x1ca686=document[_0x11e984(0xdb)+'eElem'+_0x11e984(0xe6)](_0x11e984(0x19e));_0x1ca686[_0x11e984(0x56a)+_0x11e984(0x540)]=_0x1f9052[_0x11e984(0x114)](_0x11e984(0x411)+'rd',_0x29b956?_0x1f9052['EOlqc']:'');var _0x21549c=document['creat'+'eElem'+_0x11e984(0xe6)](_0x1f9052[_0x11e984(0x471)]);_0x21549c['class'+_0x11e984(0x540)]=_0x1f9052['WMUrL'];var _0x593745=document['creat'+'eElem'+_0x11e984(0xe6)](_0x1f9052['lgyHb']);_0x593745[_0x11e984(0x56a)+'Name']=_0x11e984(0x411)+'rd-ti'+_0x11e984(0x154);var _0x121000=document[_0x11e984(0xdb)+_0x11e984(0x4e5)+_0x11e984(0xe6)](_0x11e984(0x3b1)+'g');_0x121000[_0x11e984(0x1c8)+_0x11e984(0x323)+'t']=_0x3dae46,_0x593745[_0x11e984(0x34e)+'dChil'+'d'](_0x121000);if(_0x4398d8){if(_0x1f9052['mbUKu']!==_0x11e984(0x140)){var _0x405de8=_0x3e5c97[_0x11e984(0x4ca)+_0x11e984(0x26f)]({'typeName':_0x3e7ec3,'methodName':_0x3cc2ad,'params':_0x17ddfd,'returnType':_0x39f267},_0x3149a8);return _0x405de8['enabl'+'ed']=_0x134e85[_0x11e984(0x3c6)](_0x589e5a,![]),_0x5bcfd3[_0x49fa6c]=_0x405de8,_0x4761be[_0x11e984(0x4ef)+'Total']++,_0x405de8;}else{var _0x1a549e=_0x1f9052[_0x11e984(0x48f)](_0x4a5a0d,_0x29b956,_0x30b75e=>{var _0x5a5454=_0x11e984;_0x1ca686[_0x5a5454(0x56a)+'List'][_0x5a5454(0x49a)+'e']('on',_0x30b75e),_0x4398d8(_0x30b75e);});_0x21549c[_0x11e984(0x34e)+'d'](_0x593745,_0x1a549e);}}else _0x21549c['appen'+'dChil'+'d'](_0x593745);_0x1ca686[_0x11e984(0x34e)+_0x11e984(0x52d)+'d'](_0x21549c);if(_0x974924&&_0x974924[_0x11e984(0x506)+'h']){var _0x4a6f90=document['creat'+'eElem'+_0x11e984(0xe6)](_0x11e984(0x19e));_0x4a6f90[_0x11e984(0x56a)+'Name']=_0x1f9052['IVHiR'];var _0x2e1997=document[_0x11e984(0xdb)+_0x11e984(0x4e5)+'ent'](_0x1f9052[_0x11e984(0x471)]);_0x2e1997['class'+_0x11e984(0x540)]=_0x11e984(0xd4)+_0x11e984(0x53e),_0x2e1997[_0x11e984(0x1c8)+'onten'+'t']=_0x1013ee,_0x4a6f90['appen'+_0x11e984(0x52d)+'d'](_0x2e1997);for(var _0x3f1813 of _0x974924)_0x4a6f90['appen'+_0x11e984(0x52d)+'d'](_0x3f1813);_0x1ca686['appen'+'dChil'+'d'](_0x4a6f90);}return _0x1ca686;}var _0x28c45d=[{'id':'comba'+'t','label':_0x4231d6(0x64c)+'t'},{'id':_0x1c74bc['yyVYi'],'label':_0x4231d6(0x202)},{'id':'visua'+'l','label':_0x1c74bc['UyWau']},{'id':'misc','label':_0x4231d6(0x64e)},{'id':_0x1c74bc[_0x4231d6(0x408)],'label':_0x1c74bc['lrOQb']}];function _0x136e78(){var _0x4c0d81=_0x4231d6,_0x55abb5={'dUABZ':_0x1c74bc[_0x4c0d81(0x475)]},_0x1824aa=_0x3b426e[_0x4c0d81(0x1d9)+_0x4c0d81(0x3c3)]?_0x1c74bc['hbRHG']:_0x3b426e['uwmk']?_0x1c74bc[_0x4c0d81(0x283)](_0x1c74bc['zrqTd'](_0x1c74bc[_0x4c0d81(0x2f5)]+(_0x3b426e[_0x4c0d81(0x4ef)+'Total']?_0x1c74bc[_0x4c0d81(0x507)](_0x3b426e[_0x4c0d81(0x4ef)+'Ok'],'/')+_0x3b426e['hooks'+_0x4c0d81(0x2d8)]+(_0x4c0d81(0x2a3)+'s'):_0x4c0d81(0x176)+_0x4c0d81(0x631)+'med\x20('+_0x4c0d81(0x113)+_0x4c0d81(0x225))+_0x1c74bc[_0x4c0d81(0x541)]+(_0x3b426e['gameL'+_0x4c0d81(0x396)]?_0x1c74bc[_0x4c0d81(0x576)]:_0x1c74bc['QBbzV'])+_0x1c74bc['qBXAl'],_0x3b426e[_0x4c0d81(0x27d)+_0x4c0d81(0x5e5)]?_0x4c0d81(0x4e0):_0x4c0d81(0x425)),_0x1c74bc[_0x4c0d81(0x150)])+(_0x3b426e['movem'+'ents']?_0x1c74bc[_0x4c0d81(0x2bb)]:_0x4c0d81(0x425)):_0x1c74bc['AYOfJ'];if(_0x3b426e['lastE'+_0x4c0d81(0x2bd)])_0x1824aa+=_0x4c0d81(0x516)+_0x4c0d81(0x646)+_0x3b426e['lastE'+'rror'];return _0x1c74bc[_0x4c0d81(0x29c)](_0x27d40d,_0x4c0d81(0x36b)+'s',_0x1824aa,_0x3b426e[_0x4c0d81(0x3e7)],null,[_0x1c74bc[_0x4c0d81(0x196)](_0x560bc4,_0x4c0d81(0x592)+'PS\x20un'+'lock',_0x1c74bc[_0x4c0d81(0x511)],_0x1c74bc['JMSAW'](_0x420543,_0x1c74bc['vWnkK'],()=>{var _0x116472=_0x4c0d81,_0x3a7dfc={'JMKpu':function(_0x12717f,_0x2988e5){return _0x12717f>_0x2988e5;}};if(_0x55abb5[_0x116472(0x48c)]!==_0x116472(0x64a))try{if(_0x259e62)_0x259e62[_0x116472(0x402)](_0x116472(0x4f7)+_0x116472(0x288)+_0x116472(0x522)+_0x116472(0xc1)+_0x116472(0x3f0),_0x116472(0x40d)+'arget'+_0x116472(0x4b6)+'Rate',[0x1bc1+-0x12ee*0x1+-0x2a1*0x3]);}catch(_0x5c0327){}else{if(!_0x231ef9||_0x3dfe55[_0x116472(0x38b)+_0x116472(0x1fa)](_0x484810)||_0x3a7dfc['JMKpu'](_0x21b77e[_0x116472(0x506)+'h'],-0x13fa+-0x207*0x11+0x36b1))return;_0x5f27ca[_0x116472(0x534)](_0x5b898f);}}))]);}function _0x2c5571(_0x6fac8b){var _0x181c5b=_0x4231d6,_0x2be344={'btfcv':function(_0x3d1089,_0x234c1a){return _0x3d1089+_0x234c1a;},'HIwgl':_0x181c5b(0x28b),'pIYeq':function(_0x276740,_0xebc805){var _0x5e8204=_0x181c5b;return _0x1f9052[_0x5e8204(0x492)](_0x276740,_0xebc805);},'qCWAm':_0x1f9052['WrGxf'],'WkgrR':_0x181c5b(0x37a)+'255,2'+'35,24'+_0x181c5b(0x255)+'5)','tEadT':_0x181c5b(0x426),'PGOIy':function(_0x51ae3b,_0x192ed8,_0x30322f){return _0x51ae3b(_0x192ed8,_0x30322f);},'ghDtk':function(_0x108659){return _0x108659();},'qhpZU':'[saku'+'ra-ko'+_0x181c5b(0x3d1)+_0x181c5b(0x51c)+_0x181c5b(0x25a)+_0x181c5b(0x3ce)+':','DzIyT':function(_0x47c1b2,_0x11904a){return _0x47c1b2+_0x11904a;},'xoTJK':function(_0x34cf59,_0x559349){return _0x34cf59+_0x559349;},'iXjCh':function(_0x52f764,_0x7e103f){var _0x1105e2=_0x181c5b;return _0x1f9052[_0x1105e2(0x41d)](_0x52f764,_0x7e103f);},'cLsCp':'loade'+'d','mmQPW':'\x20|\x20mo'+'vemen'+'t\x20','ArLTY':function(_0x2d42a0){return _0x1f9052['CWoiM'](_0x2d42a0);},'IngkR':function(_0x4d6b77,_0x56ad0a){return _0x4d6b77===_0x56ad0a;},'effSS':function(_0x2fcf66,_0x5759d6,_0x41eb45,_0x262083,_0x59dd49){return _0x2fcf66(_0x5759d6,_0x41eb45,_0x262083,_0x59dd49);},'OenfB':_0x1f9052[_0x181c5b(0x385)],'jbfXh':function(_0x1468d7){return _0x1468d7();},'EWnsA':_0x181c5b(0x372)+'wn','pOZBg':function(_0xce0f08,_0x1d350f){var _0x3fe8bd=_0x181c5b;return _0x1f9052[_0x3fe8bd(0x41d)](_0xce0f08,_0x1d350f);},'eJszH':function(_0x5d1b2b,_0x3ecc52){var _0x6f38d3=_0x181c5b;return _0x1f9052[_0x6f38d3(0x515)](_0x5d1b2b,_0x3ecc52);}};if(_0x1f9052[_0x181c5b(0x181)](_0x6fac8b,_0x1f9052[_0x181c5b(0x341)]))return[_0x1f9052[_0x181c5b(0x4ed)](_0x136e78),_0x1f9052['CTbUc'](_0x27d40d,_0x1f9052[_0x181c5b(0x5ce)],_0x181c5b(0x601)+_0x181c5b(0x270)+_0x181c5b(0x44b)+_0x181c5b(0xc6)+_0x181c5b(0x4e6)+'keHea'+'lth\x20a'+_0x181c5b(0x640)+'ealth'+'.Loca'+'lDie,'+_0x181c5b(0x301)+_0x181c5b(0x133)+'g\x20can'+'\x20hurt'+'\x20or\x20k'+_0x181c5b(0xfb)+_0x181c5b(0x2a9),_0x4fb280[_0x181c5b(0x160)],_0xd53f3e=>{var _0x2ae986=_0x181c5b;'mLpRs'!==_0x2be344['tEadT']?(_0x44d1af['font']=_0x2be344[_0x2ae986(0x15a)](_0x2be344[_0x2ae986(0x15a)](_0x2be344['HIwgl'],_0x44934d['round'](_0x2be344[_0x2ae986(0x486)](-0x44c+0x1*0x1e31+-0x19dc,_0x346ee3))),_0x2be344[_0x2ae986(0x43f)]),_0x5c7a72['fillS'+'tyle']=_0x491ec2?'#fff':_0x2be344[_0x2ae986(0x388)],_0x467a51[_0x2ae986(0x4ba)+_0x2ae986(0x2c2)](_0x433892,_0x494af3+_0x3a346f/(0x1e2*0x8+0x20c6+0xbf5*-0x4),_0x2be344[_0x2ae986(0x15a)](_0x2830e1+_0x4bd1f5/(-0x1df*-0x8+-0x1289*-0x1+-0x217f),(-0xa3*-0x13+-0x229+-0x4f4*0x2)*_0x275ed4))):(_0x4fb280['god']=_0xd53f3e,_0x8d12f3(),_0x3922da(_0x2ae986(0x160),_0xd53f3e),_0x2be344[_0x2ae986(0x1aa)](_0x3922da,'godDi'+'e',_0xd53f3e));},[]),_0x27d40d('No\x20Re'+'coil',_0x1f9052[_0x181c5b(0x58b)],_0x4fb280[_0x181c5b(0x61f)+'oil'],_0x38436f=>{var _0x47f1f0=_0x181c5b;_0x4fb280['noRec'+_0x47f1f0(0x595)]=_0x38436f,_0x8d12f3(),_0x1f9052[_0x47f1f0(0x24d)](_0x3922da,_0x1f9052[_0x47f1f0(0x50d)],_0x38436f);},[]),_0x1f9052['mzqZv'](_0x27d40d,_0x1f9052['wQvXq'],_0x1f9052[_0x181c5b(0x3b9)],_0x4fb280['noSpr'+'ead'],_0x58d86a=>{var _0x593a03=_0x181c5b;_0x4fb280[_0x593a03(0x3eb)+_0x593a03(0x543)]=_0x58d86a,_0x2be344['ghDtk'](_0x8d12f3);},[]),_0x27d40d(_0x1f9052[_0x181c5b(0x625)],_0x1f9052[_0x181c5b(0x215)],_0x4fb280[_0x181c5b(0x232)+'Exp'],_0x306eea=>{var _0x10b9c3=_0x181c5b;_0x4fb280[_0x10b9c3(0x232)+'Exp']=_0x306eea,_0x8d12f3();},[]),_0x1f9052['zHUmS'](_0x27d40d,_0x181c5b(0x2e6)+'e\x20[EX'+'P]',_0x181c5b(0x559)+_0x181c5b(0x40b)+'\x20Over'+_0x181c5b(0x21d)+_0x181c5b(0x480)+'\x20dama'+'ge.\x20B'+'annab'+_0x181c5b(0x53c)+_0x181c5b(0xfa)+'serve'+'r\x20val'+'idate'+'s.',_0x4fb280[_0x181c5b(0x1ce)+'eExp'],_0x45689f=>{var _0xbbac52=_0x181c5b;_0x4fb280[_0xbbac52(0x1ce)+'eExp']=_0x45689f,_0x1f9052[_0xbbac52(0xe1)](_0x8d12f3);},[_0x560bc4(_0x1f9052['xaezy'],null,_0x62f0ad(_0x4fb280[_0x181c5b(0x1ce)+_0x181c5b(0x661)+'e'],-0x1ed0+0x25bd+-0x1*0x6e3,0x1*0xc3b+0xaa6+-0x14ed,-0x13*0x83+-0x24b0+0x6a2*0x7,_0x4c3e48=>{var _0x559afa=_0x181c5b;_0x1f9052['uDfvO'](_0x559afa(0x16e),_0x559afa(0x16b))?_0x10ba69[_0x559afa(0x34e)+_0x559afa(0x52d)+'d'](_0x2279e0):(_0x4fb280[_0x559afa(0x1ce)+'eValu'+'e']=_0x4c3e48,_0x8d12f3());}))]),_0x27d40d(_0x1f9052['EQOlw'],_0x181c5b(0x4f0)+'ls\x20th'+'e\x20wea'+_0x181c5b(0xfc)+_0x181c5b(0x25e)+'ed\x20am'+_0x181c5b(0x5a4)+'\x20999\x20'+_0x181c5b(0x5c8)+'\x20200m'+'s.',_0x4fb280[_0x181c5b(0x32b)+'moExp'],_0x37baaa=>{var _0x5915a0=_0x181c5b;_0x5915a0(0x505)!==_0x5915a0(0x505)?_0x5a8a6d[_0x5915a0(0x410)](_0x2be344[_0x5915a0(0x62f)],_0xcc9d7d&&_0x14ff6c['messa'+'ge']):(_0x4fb280['infAm'+'moExp']=_0x37baaa,_0x1f9052[_0x5915a0(0xe1)](_0x8d12f3));},[_0x1c09e3(_0x181c5b(0x265)+'loads'+_0x181c5b(0x25f)+'l\x20dra'+'in,\x20t'+'he\x20de'+'creme'+_0x181c5b(0x1f5)+_0x181c5b(0x4a3)+_0x181c5b(0x348)+_0x181c5b(0x2d4)+'.')])];if(_0x6fac8b===_0x181c5b(0x13a))return[_0x1f9052[_0x181c5b(0x46f)](_0x27d40d,_0x1f9052[_0x181c5b(0x618)],_0x181c5b(0x2e8)+'s\x20all'+_0x181c5b(0x257)+_0x181c5b(0x2be)+_0x181c5b(0x320)+_0x181c5b(0x54e)+_0x181c5b(0x5e2)+'ts\x20pl'+_0x181c5b(0x2cb)+_0x181c5b(0x4a8)+'ation'+'.',_0x4fb280[_0x181c5b(0x54e)+_0x181c5b(0x48e)]!==0x1*0x20d8+-0xb71+-0x1503,null,[_0x1f9052[_0x181c5b(0x1b6)](_0x560bc4,'Speed'+'\x20%',_0x181c5b(0x230)+'\x20defa'+'ult',_0x62f0ad(_0x4fb280[_0x181c5b(0x54e)+_0x181c5b(0x48e)],0x12be+0x2*-0xd8d+-0x1e*-0x49,0x125a+0x2*0x9e1+-0x49e*0x8,-0x1894+-0xed5+0x276e,_0x11f95e=>{var _0x119feb=_0x181c5b;_0x4fb280[_0x119feb(0x54e)+'Pct']=_0x11f95e,_0x8d12f3();}))]),_0x27d40d(_0x1f9052['MhVhW'],_0x1f9052[_0x181c5b(0x3d6)],_0x1f9052['VIiAc'](_0x4fb280[_0x181c5b(0x22e)+'ct'],-0x10*-0x105+-0x181b+-0x82f*-0x1)||_0x4fb280['gravi'+'tyPct']!==-0x1*-0x1d53+-0xc14+-0x10db*0x1,null,[_0x1f9052['XzBiY'](_0x560bc4,'Jump\x20'+'%',null,_0x62f0ad(_0x4fb280['jumpP'+'ct'],-0xc47+0x26c6+-0x1a4d*0x1,0xf6b*-0x2+-0x78+0x1*0x207a,0x1f39+0x239d+-0x5*0xd5d,_0xab94f7=>{_0x4fb280['jumpP'+'ct']=_0xab94f7,_0x8d12f3();})),_0x560bc4(_0x1f9052[_0x181c5b(0x5bd)],_0x181c5b(0x517)+'\x20=\x20fl'+_0x181c5b(0x112),_0x62f0ad(_0x4fb280[_0x181c5b(0x2e9)+_0x181c5b(0x384)],-0x1*0x2534+0x1a07+0x105*0xb,-0x131d*0x2+-0xeb9+0x35bb,0x12c5*0x1+0x1547*-0x1+0x1*0x287,_0xce067f=>{var _0x2c9607=_0x181c5b;_0x4fb280[_0x2c9607(0x2e9)+'tyPct']=_0xce067f,_0x8d12f3();}))]),_0x1f9052[_0x181c5b(0x544)](_0x27d40d,_0x1f9052[_0x181c5b(0x496)],_0x1f9052[_0x181c5b(0x642)],_0x4fb280['bhop'],_0x5af66f=>{var _0x16a3b2=_0x181c5b;_0x1f9052['OPxFg'](_0x1f9052[_0x16a3b2(0x239)],'UtPVT')?_0x54d455[_0x16a3b2(0x1c8)+_0x16a3b2(0x323)+'t']=_0x59dfbc[_0x16a3b2(0x1d9)+'ode']?'SAFE\x20'+'MODE\x20'+_0x16a3b2(0x59e)+_0x16a3b2(0x268)+_0x16a3b2(0x345)+_0x16a3b2(0x311)+'ooks\x20'+_0x16a3b2(0x20f)+'ad\x20to'+'\x20exit'+')':_0x5d8787['uwmk']?_0x2be344[_0x16a3b2(0x15a)](_0x2be344[_0x16a3b2(0x15a)](_0x2be344[_0x16a3b2(0x458)](_0x2be344[_0x16a3b2(0x458)](_0x2be344['xoTJK'](_0x16a3b2(0x57a)+'bound'+'\x20',_0x2fab64[_0x16a3b2(0x4ef)+_0x16a3b2(0x2d8)]?_0x2be344[_0x16a3b2(0x15a)](_0x2be344[_0x16a3b2(0x2e2)](_0x2be344['xoTJK'](_0x1104f4[_0x16a3b2(0x4ef)+'Ok'],'/'),_0x4570cf[_0x16a3b2(0x4ef)+_0x16a3b2(0x2d8)]),'\x20hook'+'s'):'0\x20hoo'+_0x16a3b2(0x631)+_0x16a3b2(0x2ee)+'all\x20o'+_0x16a3b2(0x225))+(_0x16a3b2(0x5cd)+_0x16a3b2(0x518)),_0x335470[_0x16a3b2(0x194)+'oaded']?_0x2be344[_0x16a3b2(0x598)]:'loadi'+'ng')+(_0x16a3b2(0x45b)+'ooter'+'\x20')+(_0x241c69['shoot'+_0x16a3b2(0x5e5)]?'held':_0x16a3b2(0x425)),_0x2be344[_0x16a3b2(0x5a2)]),_0x9e8165[_0x16a3b2(0x222)+_0x16a3b2(0x46b)]?_0x16a3b2(0x4e0):_0x16a3b2(0x425)),_0x54582e[_0x16a3b2(0x5bb)+'rror']?_0x2be344[_0x16a3b2(0x2e2)](_0x16a3b2(0x516)+'R:\x20',_0x494197['lastE'+_0x16a3b2(0x2bd)]):''):'UWMK\x20'+_0x16a3b2(0xe8)+'NG\x20-\x20'+'overl'+'ay\x20on'+'ly\x20(r'+_0x16a3b2(0x456)+_0x16a3b2(0x429)+_0x16a3b2(0x15e)+_0x16a3b2(0x1c3)+'ipt)':(_0x4fb280['bhop']=_0x5af66f,_0x8d12f3());},[])];if(_0x6fac8b==='visua'+'l'){if(_0x1f9052['HUgNw']!==_0x1f9052[_0x181c5b(0x11e)])_0x2b5b16['noSpr'+_0x181c5b(0x543)]=_0x535e16,_0x51bb63();else return[_0x1f9052[_0x181c5b(0x304)](_0x27d40d,'Keyst'+_0x181c5b(0x3c1),_0x181c5b(0x487)+'+\x20LMB'+_0x181c5b(0x56c)+_0x181c5b(0x608)+'ce\x20ov'+_0x181c5b(0x4b3)+'.',_0x4fb280['keyst'+'rokes'],_0x453855=>{var _0x36cb39=_0x181c5b;_0x4fb280[_0x36cb39(0x3e8)+'rokes']=_0x453855,_0x8d12f3();},[_0x560bc4(_0x181c5b(0x3a8)+_0x181c5b(0x3f0),null,_0x1f9052[_0x181c5b(0x375)](_0x1247b2,_0x4fb280[_0x181c5b(0x495)],[['bl',_0x181c5b(0x3b8)+'m\x20lef'+'t'],['br',_0x1f9052['FHRio']],['ml',_0x181c5b(0x189)+_0x181c5b(0x4fe)+'e']],_0x3932e0=>{var _0x159fd9=_0x181c5b;_0x4fb280[_0x159fd9(0x495)]=_0x3932e0,_0x8d12f3();})),_0x1f9052['XzBiY'](_0x560bc4,_0x181c5b(0x2f9),null,_0x62f0ad(_0x4fb280[_0x181c5b(0x4d2)+'le'],-0x3*-0x57d+0x7*-0x3fe+0xb7b*0x1+0.6,-0x169b+-0x205a+0xafe*0x5+0.6000000000000001,0x179e+-0x21e8+0x1b7*0x6+0.05,_0x57d985=>{var _0x2b42c8=_0x181c5b;_0x2be344[_0x2b42c8(0x4c7)](_0x2b42c8(0x27c),_0x2b42c8(0x27c))?(_0x4fb280[_0x2b42c8(0x4d2)+'le']=_0x57d985,_0x2be344[_0x2b42c8(0x60d)](_0x8d12f3)):(_0x483cc3[_0x2b42c8(0x35e)]=_0x4de8da,_0x2be344[_0x2b42c8(0x60d)](_0x2fb484));})),_0x560bc4('CPS\x20r'+'eadou'+'t',null,_0x1f9052[_0x181c5b(0x24d)](_0x4a5a0d,_0x4fb280['ksCps'],_0x2c4816=>{var _0x4cf865=_0x181c5b;'eltUE'===_0x1f9052[_0x4cf865(0x1a9)]?(_0x4fb280['ksCps']=_0x2c4816,_0x1f9052['CWoiM'](_0x8d12f3)):_0x2be344['effSS'](_0xb230f8,_0xcf4fe4,_0x3cef09,_0x2e33c7,_0x2be344['OenfB']);}))]),_0x27d40d(_0x181c5b(0x319)+_0x181c5b(0x575),_0x181c5b(0x355)+_0x181c5b(0x1af)+_0x181c5b(0x658)+_0x181c5b(0x2f3)+_0x181c5b(0x218),_0x4fb280[_0x181c5b(0x490)+'hair'],_0x199a75=>{var _0xf17bef=_0x181c5b;_0x4fb280[_0xf17bef(0x490)+_0xf17bef(0x575)]=_0x199a75,_0x8d12f3();},[_0x560bc4(_0x1f9052[_0x181c5b(0xc3)],null,_0x1f9052[_0x181c5b(0x144)](_0x62f0ad,_0x4fb280['chSiz'+'e'],-0x17b7+-0x2db+0x1a92*0x1+0.5,-0x1*0x107b+0x3a4+0xcd9+0.5,0x26a7+0x1*0x1373+-0x1*0x3a1a+0.1,_0x58c8ba=>{var _0x5c8485=_0x181c5b;_0x4fb280[_0x5c8485(0x31b)+'e']=_0x58c8ba,_0x2be344[_0x5c8485(0x441)](_0x8d12f3);})),_0x560bc4('Color',null,_0x247c49(_0x4fb280[_0x181c5b(0x14d)+'or'],_0x2a1bee=>{_0x4fb280['chCol'+'or']=_0x2a1bee,_0x2be344['jbfXh'](_0x8d12f3);}))]),_0x27d40d(_0x1f9052['emLsV'],'FPS\x20o'+'verla'+'y.',_0x4fb280['fps'],null,[_0x1f9052['XzBiY'](_0x560bc4,_0x181c5b(0x414)+_0x181c5b(0x4e2)+'r',null,_0x4a5a0d(_0x4fb280[_0x181c5b(0x127)],_0x18b5d7=>{var _0x3f2b26=_0x181c5b;if(_0x1f9052['BYiuc']('daCiM',_0x1f9052['lnbbG']))try{_0xbf7c45['enabl'+'ed']=!!_0x4fbcf8;}catch(_0x1e355e){}else _0x4fb280[_0x3f2b26(0x127)]=_0x18b5d7,_0x8d12f3();})),_0x1c09e3('No\x20en'+'emy\x20c'+_0x181c5b(0x4e2)+_0x181c5b(0x2b7)+_0x181c5b(0x481)+'ild\x20h'+_0x181c5b(0x53f)+'\x20GetV'+_0x181c5b(0x10b)+_0x181c5b(0x5c3)+_0x181c5b(0x49e)+_0x181c5b(0x1e6)+_0x181c5b(0x33d)+'k\x20on.')])];}if(_0x1f9052['XXUvR'](_0x6fac8b,_0x181c5b(0x179)))return[_0x27d40d(_0x1f9052['vOVoM'],_0x1f9052[_0x181c5b(0x246)],_0x4fb280[_0x181c5b(0x4c5)+'ck'],_0x10f7c0=>{var _0x3a89aa=_0x181c5b;_0x4fb280[_0x3a89aa(0x4c5)+'ck']=_0x10f7c0,_0x2be344['ArLTY'](_0x8d12f3);},[_0x1c09e3(_0x1f9052[_0x181c5b(0x64b)])])];return[_0x1f9052[_0x181c5b(0x561)](_0x27d40d,_0x1f9052['pgMhU'],'Skips'+'\x20UWMK'+'\x20enti'+_0x181c5b(0x2d0)+_0x181c5b(0x459)+_0x181c5b(0x38e)+_0x181c5b(0x4ef)+'.\x20Use'+'\x20this'+'\x20if\x20m'+'atche'+_0x181c5b(0x209)+'\x27t\x20st'+_0x181c5b(0x18d),_0x4fb280[_0x181c5b(0x1d9)+'ode'],_0x3548fe=>{var _0x356ebe=_0x181c5b;_0x4fb280['safeM'+_0x356ebe(0x3c3)]=_0x3548fe,_0x8d12f3(),location['reloa'+'d']();},[_0x1c09e3(_0x181c5b(0x1fc)+_0x181c5b(0x331)+_0x181c5b(0x3a9)+'ad.\x20I'+_0x181c5b(0x31c)+_0x181c5b(0x1a6)+_0x181c5b(0xcb)+_0x181c5b(0x519)+_0x181c5b(0x1d0)+_0x181c5b(0x10e)+_0x181c5b(0x36d)+_0x181c5b(0x524)+'is\x20ho'+'ok-re'+_0x181c5b(0x3c0)+'\x20—\x20te'+_0x181c5b(0x5c4)+_0x181c5b(0xfa)+_0x181c5b(0x4ef)+'-appl'+_0x181c5b(0xef)+'ount.')]),_0x27d40d('Hook\x20'+'risk\x20'+'switc'+_0x181c5b(0x1b0),_0x1f9052['GMUAL'],_0x4fb280[_0x181c5b(0x1f6)+'od']||_0x4fb280['hookG'+_0x181c5b(0x25c)]||_0x4fb280[_0x181c5b(0x406)+_0x181c5b(0x184)+'il']||_0x4fb280['hookC'+_0x181c5b(0x108)+'e'],_0x892c42=>{var _0x5e55d7=_0x181c5b,_0x43e5f4={'kVher':_0x2be344[_0x5e55d7(0x27f)],'xObLa':function(_0xafcd6d,_0x48de6d){return _0x2be344['pOZBg'](_0xafcd6d,_0x48de6d);}};if(_0x2be344[_0x5e55d7(0x566)](_0x5e55d7(0x424),_0x5e55d7(0x4f1))){var _0x5e070e=_0x1837af&&(_0x3b231f[_0x5e55d7(0x3d7)+'ge']||_0x523c3a['error']&&_0x3fa233['error'][_0x5e55d7(0x3d7)+'ge'])||_0x43e5f4[_0x5e55d7(0xcc)];if(_0xe75382&&_0x4428fb[_0x5e55d7(0x263)+'ame'])_0x5e070e+=_0x43e5f4[_0x5e55d7(0x1f4)](_0x5e55d7(0x43a)+_0x2cf44(_0x534b98[_0x5e55d7(0x263)+_0x5e55d7(0x569)])['split']('/')['pop'](),':')+(_0x3df76a[_0x5e55d7(0x15d)+'o']||'?');_0x5121fd[_0x5e55d7(0x5bb)+_0x5e55d7(0x2bd)]=_0x271946(_0x5e070e)['slice'](-0x1*-0x2+-0xad2+0xad0,0x1*-0xd37+0x2*0x88d+0x1*-0x343);}else _0x4fb280['hookG'+'od']=_0x892c42,_0x4fb280[_0x5e55d7(0x1f6)+'odDie']=_0x892c42,_0x4fb280['hookN'+'oReco'+'il']=_0x892c42,_0x4fb280['hookC'+_0x5e55d7(0x108)+'e']=_0x892c42,_0x8d12f3(),location[_0x5e55d7(0x43b)+'d']();},[_0x1c09e3(_0x1f9052[_0x181c5b(0x52e)]),_0x560bc4(_0x181c5b(0x5d8)+_0x181c5b(0x528)+_0x181c5b(0x1a7)+'itiat'+'eTake'+_0x181c5b(0x436)+'h)',null,_0x1f9052[_0x181c5b(0x24d)](_0x4a5a0d,_0x4fb280[_0x181c5b(0x1f6)+'od'],_0x26a9f2=>{var _0x2a0e27=_0x181c5b,_0x22fd2b={'HbSDX':_0x2a0e27(0x306)+'a\x20Kou'+'r\x20—\x20','aVbIk':function(_0x29c442,_0x167a6e){return _0x29c442(_0x167a6e);}};if(_0x2a0e27(0xf3)===_0x1f9052['cLofi']){var _0x381840=('1|3|5'+'|0|4|'+'2')[_0x2a0e27(0x290)]('|'),_0x5de05a=-0x1*-0x608+-0x120d+0xc05;while(!![]){switch(_0x381840[_0x5de05a++]){case'0':_0x39b42a['textC'+'onten'+'t']=_0x22fd2b['HbSDX']+_0x33e9cc[_0x2a0e27(0x5e3)];continue;case'1':_0x163504['cat']=_0x57b969;continue;case'2':_0x82ad8d['repla'+_0x2a0e27(0x572)+'ldren'](..._0x22fd2b['aVbIk'](_0x3b72fd,_0xa8a1d3));continue;case'3':_0x10b13b();continue;case'4':for(var [_0x468a53,_0x37c415]of _0x4c9aa7)_0x37c415[_0x2a0e27(0x56a)+'List']['toggl'+'e'](_0x2a0e27(0x3d4)+'e',_0x468a53===_0x5e0f94);continue;case'5':var _0x33e9cc=_0x2454c1['find'](_0x2a610e=>_0x2a610e['id']===_0x3b9397)||_0x26f45d[0x7a*-0x15+0x2*-0xac+0xb5a];continue;}break;}}else _0x4fb280[_0x2a0e27(0x1f6)+'od']=_0x26a9f2,_0x8d12f3();})),_0x560bc4('godDi'+_0x181c5b(0x499)+_0x181c5b(0x5f2)+'.Loca'+'lDie)',null,_0x1f9052[_0x181c5b(0x400)](_0x4a5a0d,_0x4fb280[_0x181c5b(0x1f6)+'odDie'],_0x3ec61a=>{var _0x45a8a4=_0x181c5b;_0x4fb280[_0x45a8a4(0x1f6)+_0x45a8a4(0x25c)]=_0x3ec61a,_0x8d12f3();})),_0x1f9052['EiBfW'](_0x560bc4,_0x181c5b(0x61f)+'oil\x20('+'Recoi'+'lMoti'+_0x181c5b(0x328)+'ck)',null,_0x4a5a0d(_0x4fb280['hookN'+'oReco'+'il'],_0x4b5fcc=>{var _0x95387=_0x181c5b;_0x4fb280[_0x95387(0x406)+_0x95387(0x184)+'il']=_0x4b5fcc,_0x8d12f3();})),_0x1f9052[_0x181c5b(0x375)](_0x560bc4,'captu'+_0x181c5b(0x1d2)+_0x181c5b(0x41e)+_0x181c5b(0x107)+'ing\x20+'+'\x20IsGr'+_0x181c5b(0x398)+'d)',_0x1f9052[_0x181c5b(0x488)],_0x1f9052[_0x181c5b(0x362)](_0x4a5a0d,_0x4fb280['hookC'+_0x181c5b(0x108)+'e'],_0x3b8f5d=>{var _0x4181eb=_0x181c5b;_0x4fb280[_0x4181eb(0x17f)+'aptur'+'e']=_0x3b8f5d,_0x8d12f3();}))]),_0x1f9052['CTbUc'](_0x27d40d,_0x1f9052[_0x181c5b(0x47f)],_0x1f9052[_0x181c5b(0x39b)],_0x4fb280['actkK'+_0x181c5b(0x37c)],_0x181808=>{_0x4fb280['actkK'+'ill']=_0x181808,_0x8d12f3();},[_0x1c09e3(_0x181c5b(0x28e)+'amage'+'/rapi'+'d\x20gre'+_0x181c5b(0x153)+_0x181c5b(0x343)+_0x181c5b(0x242)+_0x181c5b(0x3da)+'even\x20'+_0x181c5b(0xde)+_0x181c5b(0xbf)+_0x181c5b(0x4f6),!![])]),_0x1f9052[_0x181c5b(0x12a)](_0x27d40d,_0x1f9052['ZYuaQ'],_0x181c5b(0x382)+_0x181c5b(0x351)+_0x181c5b(0x30e)+'ver-v'+'isibl'+'e\x20tra'+'ces.',!![],null,[_0x1f9052['vJDuL'](_0x560bc4,'Wipe\x20'+_0x181c5b(0x2ab)+'tting'+'s',null,_0x420543(_0x181c5b(0xf8),()=>{var _0xc8895f=_0x181c5b;_0x4fb280={..._0x4271b4},_0x8d12f3(),location[_0xc8895f(0x43b)+'d']();}))])];}var _0x2b8030=null;function _0x108518(_0x18dae8){var _0x5169f4=_0x4231d6;if(_0x5169f4(0x1be)==='yDkdO'){_0x49942a=_0x18dae8;if(!_0x2b8030){var _0x5596cf=('5|2|1'+_0x5169f4(0x3f1)+'3')['split']('|'),_0x53fac1=-0x8e*0x13+0x259b+-0x1b11;while(!![]){switch(_0x5596cf[_0x53fac1++]){case'0':_0x4badb6['appen'+'dChil'+'d'](_0x2b8030);continue;case'1':_0x4badb6[_0x5169f4(0x34e)+_0x5169f4(0x52d)+'d'](_0x1b619b);continue;case'2':_0x1b619b['textC'+_0x5169f4(0x323)+'t']=_0x1b1310;continue;case'3':_0x1f9052[_0x5169f4(0x1d1)](requestAnimationFrame,()=>_0x2b8030['class'+_0x5169f4(0x5ef)]['add'](_0x5169f4(0x409)));continue;case'4':_0x2b8030=_0x270e0e();continue;case'5':var _0x1b619b=document['creat'+'eElem'+_0x5169f4(0xe6)](_0x5169f4(0x33c));continue;}break;}}_0x2b8030[_0x5169f4(0x56a)+'List']['toggl'+'e'](_0x1f9052[_0x5169f4(0x3d2)],_0x18dae8);}else{_0xd2c9f8[_0x5169f4(0x194)+_0x5169f4(0x396)]=!!_0xbdb33d['unity'+_0x5169f4(0x3bc)+'nce'];try{var _0x344f54=-0x6e3+-0x139a+0x1a7d;for(var _0x1ba489 in _0x1c7299){if(_0x19b3a3[_0x1ba489]&&_0x269947[_0x1ba489][_0x5169f4(0x645)+'ed'])_0x344f54++;}_0x377da8['hooks'+'Ok']=_0x344f54;}catch(_0x2bdd2f){}}}function _0x5c6b34(){var _0x576288=_0x4231d6,_0x55c622={'UjBXV':_0x576288(0x5ea)};if(_0x1f9052['WjDMk']!==_0x1f9052[_0x576288(0x178)]){if(_0x3b6099)return;_0x1eb23d=!![],_0x30efd9[_0x576288(0x1c9)+'entLi'+_0x576288(0x20b)+'r']('keydo'+'wn',_0x34a3d0,!![]),_0x35aac3['addEv'+'entLi'+'stene'+'r'](_0x55c622[_0x576288(0x29e)],_0x142e52,!![]),_0x32fbd2[_0x576288(0x1c9)+_0x576288(0x18f)+_0x576288(0x20b)+'r']('mouse'+'down',_0xafc34d,!![]),_0x2d7358[_0x576288(0x1c9)+_0x576288(0x18f)+'stene'+'r']('mouse'+'up',_0x2e79f6,!![]),_0x34ced3['addEv'+'entLi'+_0x576288(0x20b)+'r'](_0x576288(0x463),_0x474e34);}else _0x1f9052[_0x576288(0x1d1)](_0x108518,!_0x49942a);}function _0x270e0e(){var _0x287c25=_0x4231d6,_0x27795e={'qjSTM':_0x1c74bc['oHcId'],'IdYiD':_0x287c25(0x51b)+'|2|0|'+'4','gwkki':'activ'+'e','JhyRE':function(_0x427914,_0x552ec6){return _0x427914===_0x552ec6;},'GtHuc':function(_0x39051f,_0x4ba789){return _0x1c74bc['CsfXV'](_0x39051f,_0x4ba789);},'XWaqw':function(_0x581aeb){return _0x581aeb();}},_0x2bf350=document[_0x287c25(0xdb)+'eElem'+'ent'](_0x1c74bc['MPUrZ']);_0x2bf350['class'+_0x287c25(0x540)]=_0x1c74bc[_0x287c25(0x3bf)];var _0x221aeb=document[_0x287c25(0xdb)+_0x287c25(0x4e5)+_0x287c25(0xe6)](_0x1c74bc['XSsVI']);_0x221aeb['class'+_0x287c25(0x540)]=_0x287c25(0x47d)+'de';var _0x3b9864=document['creat'+'eElem'+'ent'](_0x287c25(0x19e));_0x3b9864[_0x287c25(0x56a)+'Name']=_0x1c74bc[_0x287c25(0x525)],_0x3b9864['inner'+_0x287c25(0x3bb)]='<svg\x20'+_0x287c25(0x1e3)+_0x287c25(0x125)+_0x287c25(0x5ae)+'\x2024\x22\x20'+_0x287c25(0x56a)+_0x287c25(0x298)+_0x287c25(0x2ed)+_0x287c25(0x16d)+_0x287c25(0x5f1)+'\x20d=\x22M'+'12\x2021'+_0x287c25(0x354)+_0x287c25(0x39f)+_0x287c25(0x500)+_0x287c25(0x12f)+_0x287c25(0x392)+_0x287c25(0x258)+'8-4.5'+'\x204-4.'+_0x287c25(0x48d)+_0x287c25(0x3e3)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x287c25(0x19c)+_0x287c25(0x299)+'\x22none'+'\x22\x20str'+_0x287c25(0x36a)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x287c25(0x624)+_0x287c25(0x5c6)+_0x287c25(0x120)+'ke-li'+'necap'+'=\x22rou'+_0x287c25(0x346)+'troke'+'-line'+_0x287c25(0x322)+_0x287c25(0x284)+_0x287c25(0x4d3)+_0x287c25(0x165)+'e\x20cx='+'\x2212\x22\x20'+_0x287c25(0x119)+'0\x22\x20r='+'\x221.5\x22'+_0x287c25(0x5f0)+'=\x22#ff'+_0x287c25(0x44f)+_0x287c25(0x27e)+'vg>',_0x221aeb['appen'+'dChil'+'d'](_0x3b9864);var _0x3984a8=document['creat'+_0x287c25(0x4e5)+'ent'](_0x1c74bc[_0x287c25(0x2a6)]);_0x3984a8[_0x287c25(0x56a)+'Name']='mn-ma'+'in';var _0x3c8d99=document['creat'+_0x287c25(0x4e5)+_0x287c25(0xe6)](_0x287c25(0x329)+'r');_0x3c8d99['class'+'Name']=_0x287c25(0x616)+'p';var _0x17b5c1=document['creat'+_0x287c25(0x4e5)+_0x287c25(0xe6)](_0x1c74bc[_0x287c25(0x2a6)]);_0x17b5c1['class'+'Name']='mn-ti'+'tles';var _0x7e2245=document[_0x287c25(0xdb)+_0x287c25(0x4e5)+_0x287c25(0xe6)]('h2');_0x7e2245[_0x287c25(0x56a)+'Name']=_0x287c25(0x197),_0x7e2245[_0x287c25(0x1c8)+_0x287c25(0x323)+'t']=_0x287c25(0x306)+_0x287c25(0x5a7)+'r';var _0x2e499d=document['creat'+_0x287c25(0x4e5)+'ent'](_0x1c74bc['qRqUs']);_0x2e499d[_0x287c25(0x56a)+_0x287c25(0x540)]='mn-su'+'b',_0x2e499d['textC'+_0x287c25(0x323)+'t']=_0x287c25(0x199)+'trike'+'.io\x20m'+_0x287c25(0x2c6),_0x17b5c1[_0x287c25(0x34e)+'d'](_0x7e2245,_0x2e499d);var _0xcf28cc=document[_0x287c25(0xdb)+_0x287c25(0x4e5)+_0x287c25(0xe6)](_0x287c25(0x5ee)+'n');_0xcf28cc[_0x287c25(0x5f5)]=_0x287c25(0x5ee)+'n',_0xcf28cc['class'+'Name']=_0x287c25(0x2c9)+'ose',_0xcf28cc[_0x287c25(0x59f)]='Close',_0xcf28cc['inner'+'HTML']=_0x1c74bc['ISVjb'],_0xcf28cc[_0x287c25(0x3c2)+'ck']=()=>_0x108518(![]),_0x3c8d99['appen'+'d'](_0x17b5c1,_0xcf28cc);var _0x45e0b0=document['creat'+'eElem'+_0x287c25(0xe6)](_0x287c25(0x19e));_0x45e0b0['class'+_0x287c25(0x540)]=_0x1c74bc['SqIxM'],_0x3984a8['appen'+'d'](_0x3c8d99,_0x45e0b0),_0x2bf350[_0x287c25(0x34e)+'d'](_0x221aeb,_0x3984a8);var _0x5c1d01=new Map();for(var _0x1fbe51 of _0x28c45d){var _0x27a71a=(_0x287c25(0x44c)+'|7|5|'+_0x287c25(0xf7))['split']('|'),_0x1469fd=-0x1*0x8c3+0x1*0x2566+-0x1*0x1ca3;while(!![]){switch(_0x27a71a[_0x1469fd++]){case'0':_0x11c87b['oncli'+'ck']=(_0x1e4211=>()=>_0x35d3a4(_0x1e4211))(_0x1fbe51['id']);continue;case'1':_0x221aeb[_0x287c25(0x34e)+_0x287c25(0x52d)+'d'](_0x11c87b);continue;case'2':_0x5c1d01['set'](_0x1fbe51['id'],_0x11c87b);continue;case'3':_0x11c87b[_0x287c25(0x5f5)]=_0x287c25(0x5ee)+'n';continue;case'4':var _0x11c87b=document[_0x287c25(0xdb)+_0x287c25(0x4e5)+_0x287c25(0xe6)](_0x1c74bc[_0x287c25(0x277)]);continue;case'5':_0x11c87b['inner'+'HTML']=_0x1c74bc[_0x287c25(0x139)](_0x287c25(0x370)+'l>',_0x1fbe51[_0x287c25(0x5e3)])+(_0x287c25(0x55c)+_0x287c25(0x296));continue;case'6':_0x11c87b[_0x287c25(0x56a)+_0x287c25(0x540)]=_0x287c25(0x4c6)+'b';continue;case'7':_0x11c87b[_0x287c25(0x59f)]=_0x1fbe51[_0x287c25(0x5e3)];continue;}break;}}function _0x35d3a4(_0x511ca9){var _0x34ae02=_0x287c25;if(_0x34ae02(0x455)!==_0x27795e[_0x34ae02(0x51d)]){var _0x30dba6=_0x27795e['IdYiD']['split']('|'),_0x20e621=0x15e8+0x1b25+-0x310d;while(!![]){switch(_0x30dba6[_0x20e621++]){case'0':for(var [_0x470c3e,_0x500822]of _0x5c1d01)_0x500822['class'+'List'][_0x34ae02(0x49a)+'e'](_0x27795e['gwkki'],_0x27795e['JhyRE'](_0x470c3e,_0x511ca9));continue;case'1':_0x576818['cat']=_0x511ca9;continue;case'2':_0x7e2245['textC'+_0x34ae02(0x323)+'t']=_0x27795e[_0x34ae02(0x61e)]('Sakur'+'a\x20Kou'+_0x34ae02(0x238),_0x2431d9[_0x34ae02(0x5e3)]);continue;case'3':_0x27795e['XWaqw'](_0x5b63b2);continue;case'4':_0x45e0b0[_0x34ae02(0x1db)+_0x34ae02(0x572)+_0x34ae02(0x24e)](..._0x2c5571(_0x511ca9));continue;case'5':var _0x2431d9=_0x28c45d[_0x34ae02(0x146)](_0x147a4a=>_0x147a4a['id']===_0x511ca9)||_0x28c45d[-0x14a7+0x1*0x1a91+0x2*-0x2f5];continue;}break;}}else _0x5efb4f={..._0x329253},_0x318f69(),_0x51fbc9[_0x34ae02(0x43b)+'d']();}return _0x35d3a4(_0x576818[_0x287c25(0x635)]||_0x287c25(0x2e3)+'t'),_0x1c74bc[_0x287c25(0x52b)](setInterval,()=>{var _0x9531b3=_0x287c25;if(!_0x49942a)return;var _0x4f067a=_0x45e0b0[_0x9531b3(0xf0)+'ren'];for(var _0x49d3bb=0x2609+0x1f2d+0x3*-0x1712;_0x1f9052['qYzaC'](_0x49d3bb,_0x4f067a[_0x9531b3(0x506)+'h']);_0x49d3bb++){var _0x313aa2=_0x4f067a[_0x49d3bb][_0x9531b3(0x36c)+'Selec'+_0x9531b3(0x271)](_0x9531b3(0x55b)+'desc');_0x313aa2&&(_0x1f9052[_0x9531b3(0x1f9)](_0x313aa2[_0x9531b3(0x1c8)+'onten'+'t'][_0x9531b3(0x1a0)+'Of']('UWMK'),0x146a+0x284+-0x16ee)||_0x313aa2[_0x9531b3(0x1c8)+'onten'+'t']['index'+'Of'](_0x1f9052[_0x9531b3(0x349)])===0x1*0x171+-0x9e*0x3b+0x22f9)&&(_0x313aa2['textC'+_0x9531b3(0x323)+'t']=_0x3b426e[_0x9531b3(0x1d9)+'ode']?_0x9531b3(0x462)+_0x9531b3(0x4c9)+_0x9531b3(0x59e)+'rlay\x20'+_0x9531b3(0x345)+'\x20no\x20h'+_0x9531b3(0x12c)+'(relo'+_0x9531b3(0x58e)+_0x9531b3(0x3a7)+')':_0x3b426e['uwmk']?_0x1f9052['zQTup'](_0x9531b3(0x57a)+_0x9531b3(0x542)+'\x20'+(_0x3b426e['hooks'+_0x9531b3(0x2d8)]?_0x1f9052[_0x9531b3(0x20a)](_0x3b426e['hooks'+'Ok'],'/')+_0x3b426e['hooks'+'Total']+_0x1f9052['YMmKb']:_0x9531b3(0x176)+'ks\x20ar'+'med\x20('+'all\x20o'+'ff)')+('\x20|\x20ga'+'me\x20'),_0x3b426e[_0x9531b3(0x194)+_0x9531b3(0x396)]?_0x1f9052[_0x9531b3(0x1b9)]:_0x1f9052[_0x9531b3(0x4f8)])+_0x1f9052['pvcyr']+(_0x3b426e[_0x9531b3(0x27d)+_0x9531b3(0x5e5)]?'held':'none')+('\x20|\x20mo'+_0x9531b3(0x4cb)+'t\x20')+(_0x3b426e[_0x9531b3(0x222)+_0x9531b3(0x46b)]?_0x1f9052['JkcdK']:_0x9531b3(0x425))+(_0x3b426e[_0x9531b3(0x5bb)+_0x9531b3(0x2bd)]?_0x9531b3(0x516)+_0x9531b3(0x646)+_0x3b426e[_0x9531b3(0x5bb)+_0x9531b3(0x2bd)]:''):_0x1f9052['qMeHj']);}},0x7*-0x530+0x3dd+0x245b),_0x2bf350;}var _0x1b1310='\x0a\x20\x20\x20\x20'+':host'+_0x4231d6(0x65c)+'l:\x20in'+_0x4231d6(0x391)+';\x20}\x0a\x20'+_0x4231d6(0x4b7)+_0x4231d6(0x305)+'-sizi'+_0x4231d6(0x2f4)+'order'+'-box;'+_0x4231d6(0x195)+'in:\x200'+_0x4231d6(0x56e)+'t-fam'+_0x4231d6(0x482)+_0x4231d6(0x437)+_0x4231d6(0x5dd)+'Segoe'+'\x20UI\x22,'+_0x4231d6(0x50a)+'em-ui'+',\x20san'+_0x4231d6(0x4ea)+_0x4231d6(0x269)+_0x4231d6(0x4cf)+_0x4231d6(0x5e4)+'anel\x20'+'{\x20pos'+_0x4231d6(0x520)+_0x4231d6(0x449)+_0x4231d6(0x1bb)+';\x20rig'+'ht:\x202'+'4px;\x20'+_0x4231d6(0x14c)+'m:\x2024'+'px;\x20w'+'idth:'+_0x4231d6(0x5b1)+_0x4231d6(0x37e)+_0x4231d6(0x15f)+_0x4231d6(0x5d7)+_0x4231d6(0x3aa)+_0x4231d6(0x37f)+_0x4231d6(0xe5)+'x-hei'+_0x4231d6(0x2d1)+_0x4231d6(0x231)+_0x4231d6(0x1df)+'\x20calc'+_0x4231d6(0x5d3)+_0x4231d6(0x1e7)+'8px))'+';\x0a\x20\x20\x20'+_0x4231d6(0xeb)+_0x4231d6(0x3f5)+_0x4231d6(0x435)+_0x4231d6(0x58c)+_0x4231d6(0x5ac)+_0x4231d6(0x3b2)+'addin'+'g:\x2010'+'px;\x20b'+_0x4231d6(0xd1)+_0x4231d6(0x644)+'us:\x202'+_0x4231d6(0x1fb)+'point'+_0x4231d6(0x51f)+_0x4231d6(0x389)+_0x4231d6(0x200)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+'ckgro'+_0x4231d6(0x17d)+'rgba('+'24,17'+_0x4231d6(0x599)+'82);\x20'+_0x4231d6(0x54a)+'rop-f'+'ilter'+':\x20blu'+_0x4231d6(0x42a)+'x)\x20sa'+_0x4231d6(0x37b)+_0x4231d6(0x317)+'%);\x20-'+'webki'+'t-bac'+'kdrop'+_0x4231d6(0x1ba)+'er:\x20b'+'lur(2'+_0x4231d6(0x315)+_0x4231d6(0x660)+_0x4231d6(0x3d5)+_0x4231d6(0x588)+'\x0a\x20\x20\x20\x20'+'\x20\x20box'+_0x4231d6(0x28a)+_0x4231d6(0x3ca)+_0x4231d6(0x30a)+_0x4231d6(0x4ae)+'gba(2'+_0x4231d6(0x308)+'5,255'+_0x4231d6(0x467)+_0x4231d6(0x10c)+_0x4231d6(0x45d)+_0x4231d6(0x292)+_0x4231d6(0x3e1)+'(255,'+_0x4231d6(0x44d)+'55,.0'+_0x4231d6(0x116)+_0x4231d6(0x42f)+_0x4231d6(0x4da)+'\x20rgba'+_0x4231d6(0x5a8)+_0x4231d6(0x203)+');\x0a\x20\x20'+'\x20\x20\x20\x20o'+_0x4231d6(0x4b4)+_0x4231d6(0xfe)+'\x20tran'+'sform'+':\x20tra'+_0x4231d6(0x19f)+_0x4231d6(0xd2)+'px);\x20'+_0x4231d6(0x2fe)+_0x4231d6(0x51f)+_0x4231d6(0x389)+'\x20none'+_0x4231d6(0x5b5)+'nsiti'+'on:\x20o'+'pacit'+_0x4231d6(0x1cb)+_0x4231d6(0x468)+_0x4231d6(0x431)+_0x4231d6(0x4c0)+_0x4231d6(0x5c2)+_0x4231d6(0x168)+'bic-b'+_0x4231d6(0x4ff)+_0x4231d6(0x4a1)+_0x4231d6(0x34f)+',1);\x0a'+_0x4231d6(0x49b)+_0x4231d6(0x638)+'r:\x20#f'+_0x4231d6(0x23b)+_0x4231d6(0x56e)+_0x4231d6(0x4a5)+_0x4231d6(0x162)+_0x4231d6(0x474)+_0x4231d6(0x4cf)+_0x4231d6(0x5e4)+'anel.'+_0x4231d6(0x409)+_0x4231d6(0x39e)+_0x4231d6(0x3de)+':\x201;\x20'+_0x4231d6(0x327)+_0x4231d6(0x546)+_0x4231d6(0x5db)+';\x20poi'+_0x4231d6(0x418)+_0x4231d6(0x423)+'s:\x20au'+_0x4231d6(0x46a)+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x4231d6(0x38c)+_0x4231d6(0x11b)+_0x4231d6(0x442)+_0x4231d6(0x5b3)+'\x20flex'+'-dire'+_0x4231d6(0x4d9)+':\x20col'+_0x4231d6(0x294)+_0x4231d6(0x358)+'-item'+_0x4231d6(0x368)+_0x4231d6(0xe0)+_0x4231d6(0x11f)+'\x204px;'+_0x4231d6(0xf2)+_0x4231d6(0x589)+'px;\x20f'+_0x4231d6(0x1ae)+_0x4231d6(0x422)+_0x4231d6(0x19a)+_0x4231d6(0x3dc)+'12px\x20'+(_0x4231d6(0x157)+_0x4231d6(0x16c)+_0x4231d6(0x555)+'s:\x2016'+'px;\x0a\x20'+_0x4231d6(0x49b)+_0x4231d6(0x1cf)+'round'+':\x20rgb'+_0x4231d6(0x412)+_0x4231d6(0x1e0)+'255,.'+'025);'+_0x4231d6(0x1e4)+_0x4231d6(0x14e)+_0x4231d6(0x208)+_0x4231d6(0x567)+_0x4231d6(0x30a)+'1px\x20r'+'gba(2'+'55,25'+_0x4231d6(0x2eb)+_0x4231d6(0x5a5)+_0x4231d6(0xca)+'\x20\x20\x20.m'+_0x4231d6(0x244)+_0x4231d6(0x41c)+'ispla'+'y:\x20gr'+_0x4231d6(0xf9)+_0x4231d6(0x2aa)+'items'+_0x4231d6(0x621)+_0x4231d6(0x16a)+'width'+_0x4231d6(0xce)+'x;\x20he'+_0x4231d6(0x446)+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x4231d6(0x244)+_0x4231d6(0x20e)+_0x4231d6(0x2b4)+'dth:\x20'+_0x4231d6(0x39d)+_0x4231d6(0x5e9)+'ht:\x202'+_0x4231d6(0x59b)+_0x4231d6(0x539)+_0x4231d6(0x53d)+_0x4231d6(0x619)+'le;\x20f'+_0x4231d6(0x45c)+':\x20dro'+_0x4231d6(0x2b1)+'dow(0'+_0x4231d6(0x174)+'x\x20rgb'+'a(255'+_0x4231d6(0x56f)+_0x4231d6(0x60e)+_0x4231d6(0x3f4)+_0x4231d6(0x3a4)+_0x4231d6(0x2ac)+'tab\x20{'+_0x4231d6(0x11b)+'lay:\x20'+_0x4231d6(0x5b3)+_0x4231d6(0x3fe)+_0x4231d6(0x5d9)+_0x4231d6(0xc2)+_0x4231d6(0x356)+_0x4231d6(0x226)+_0x4231d6(0x3c9)+'conte'+_0x4231d6(0x376)+'enter'+';\x20wid'+_0x4231d6(0x604)+_0x4231d6(0x1fb)+_0x4231d6(0x26e)+'t:\x2034'+'px;\x20b'+'order'+_0x4231d6(0x5d4)+_0x4231d6(0x3ee)+'r-rad'+_0x4231d6(0x52a)+'10px;'+_0x4231d6(0x4cf)+_0x4231d6(0x37d)+_0x4231d6(0x134)+'nd:\x20t'+_0x4231d6(0x117)+'arent'+';\x20col'+_0x4231d6(0x4a4)+'gba(2'+'46,23'+_0x4231d6(0x335)+',.4);'+_0x4231d6(0x214)+'or:\x20p'+_0x4231d6(0x46e)+'r;\x20fo'+_0x4231d6(0x1c7)+_0x4231d6(0x4e8)+'0px;\x20'+_0x4231d6(0x5b6)+_0x4231d6(0x445)+_0x4231d6(0x36e)+_0x4231d6(0x626)+'\x20\x20\x20\x20.'+_0x4231d6(0x4c6)+'b:hov'+_0x4231d6(0x29b)+_0x4231d6(0x568)+_0x4231d6(0xd9)+'a(246'+_0x4231d6(0x273)+'242,.'+_0x4231d6(0x337)+_0x4231d6(0x4cf)+'.mn-t'+_0x4231d6(0x324)+_0x4231d6(0x606)+'{\x20col'+_0x4231d6(0x34b)+'ff6b9'+_0x4231d6(0x1dd)+_0x4231d6(0x2fc)+_0x4231d6(0x17d)+_0x4231d6(0x37a)+'255,1'+'07,15'+_0x4231d6(0x5bf)+_0x4231d6(0xca)+_0x4231d6(0x101)+'n-mai'+_0x4231d6(0x581)+_0x4231d6(0x1ae)+'1;\x20mi'+_0x4231d6(0x447)+'th:\x200'+_0x4231d6(0x3fb)+'play:'+'\x20flex'+_0x4231d6(0x3ff)+_0x4231d6(0x550)+'ectio'+'n:\x20co'+_0x4231d6(0x5c9)+'\x20}\x0a\x20\x20'+_0x4231d6(0x2bf)+_0x4231d6(0x2df)+_0x4231d6(0x5b0)+'play:'+_0x4231d6(0x280)+_0x4231d6(0x63d)+_0x4231d6(0x32a)+_0x4231d6(0x51a)+_0x4231d6(0x5cb)+_0x4231d6(0xc4)+_0x4231d6(0x15b)+_0x4231d6(0x3b2)+'addin'+'g:\x206p'+_0x4231d6(0x62d)+_0x4231d6(0x47c)+';\x20use'+'r-sel'+'ect:\x20'+'none;'+_0x4231d6(0x430)+'\x20\x20.mn'+_0x4231d6(0x3a6)+_0x4231d6(0x1ab)+_0x4231d6(0x374)+'\x201;\x20m'+_0x4231d6(0x3c7)+'dth:\x20'+_0x4231d6(0x626)+_0x4231d6(0x1a8)+'mn-h\x20'+'{\x20fon'+_0x4231d6(0x4a5)+_0x4231d6(0x3b0)+_0x4231d6(0x17a)+'ont-w'+_0x4231d6(0x4d5)+_0x4231d6(0x180)+';\x20}\x0a\x20'+_0x4231d6(0x101)+_0x4231d6(0x4ab)+_0x4231d6(0x3df)+_0x4231d6(0x1c7)+_0x4231d6(0x4e8)+'1px;\x20'+_0x4231d6(0x361))+(_0x4231d6(0x45e)+'4;\x20}\x0a'+_0x4231d6(0x1a8)+_0x4231d6(0x2c9)+_0x4231d6(0x4c3)+'\x20disp'+'lay:\x20'+_0x4231d6(0x40a)+_0x4231d6(0x169)+'e-ite'+_0x4231d6(0xc2)+_0x4231d6(0x356)+';\x20wid'+_0x4231d6(0x321)+'8px;\x20'+'heigh'+_0x4231d6(0x129)+'px;\x20b'+_0x4231d6(0xd1)+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+'8px;\x20'+'backg'+_0x4231d6(0x278)+_0x4231d6(0x60c)+'nspar'+'ent;\x20'+'color'+':\x20inh'+_0x4231d6(0x59a)+_0x4231d6(0x5aa)+_0x4231d6(0x16f)+'.45;\x20'+'curso'+_0x4231d6(0x124)+_0x4231d6(0x4de)+_0x4231d6(0xca)+_0x4231d6(0x101)+_0x4231d6(0x1a4)+_0x4231d6(0x5eb)+'ver\x20{'+_0x4231d6(0x5aa)+_0x4231d6(0x16f)+'1;\x20ba'+'ckgro'+'und:\x20'+'rgba('+_0x4231d6(0x44d)+_0x4231d6(0x308)+'5,.05'+_0x4231d6(0x43e)+_0x4231d6(0x1a8)+'mn-cl'+_0x4231d6(0x494)+'vg\x20{\x20'+_0x4231d6(0xdd)+_0x4231d6(0x653)+_0x4231d6(0xff)+_0x4231d6(0x446)+_0x4231d6(0x49f)+_0x4231d6(0x23f)+_0x4231d6(0x276)+_0x4231d6(0x380)+_0x4231d6(0x63f)+_0x4231d6(0x2dd)+_0x4231d6(0x2f0)+_0x4231d6(0x1f2)+_0x4231d6(0x120)+_0x4231d6(0x5d5)+_0x4231d6(0x2e7)+_0x4231d6(0x3cc)+_0x4231d6(0x224)+_0x4231d6(0x478)+_0x4231d6(0x4cc)+_0x4231d6(0x182)+_0x4231d6(0x430)+'\x20\x20.mn'+_0x4231d6(0x4df)+_0x4231d6(0x20c)+'ex:\x201'+_0x4231d6(0x531)+_0x4231d6(0x404)+_0x4231d6(0x648)+_0x4231d6(0x253)+'rflow'+_0x4231d6(0x316)+_0x4231d6(0x100)+_0x4231d6(0x580)+'ay:\x20g'+_0x4231d6(0x336)+'grid-'+_0x4231d6(0x379)+_0x4231d6(0x187)+'olumn'+_0x4231d6(0x464)+'peat('+_0x4231d6(0x5a1)+'fill,'+_0x4231d6(0x54d)+_0x4231d6(0x28f)+_0x4231d6(0x42d)+'1fr))'+';\x20ali'+_0x4231d6(0x32a)+_0x4231d6(0x51a)+'start'+_0x4231d6(0x63d)+'gn-co'+_0x4231d6(0x22a)+_0x4231d6(0x204)+_0x4231d6(0x2b0)+_0x4231d6(0x24a)+_0x4231d6(0x141)+'paddi'+'ng:\x200'+_0x4231d6(0x1b2)+_0x4231d6(0xed)+_0x4231d6(0xca)+'\x20\x20\x20.m'+_0x4231d6(0x185)+_0x4231d6(0x1e9)+_0x4231d6(0x145)+'-scro'+'llbar'+'\x20{\x20wi'+_0x4231d6(0x2e7)+'8px;\x20'+_0x4231d6(0x3a4)+'\x20.mn-'+_0x4231d6(0x21a)+':-web'+_0x4231d6(0x111)+'croll'+_0x4231d6(0x136)+'humb\x20'+'{\x20bac'+_0x4231d6(0x134)+_0x4231d6(0x281)+'gba(2'+'55,25'+_0x4231d6(0x2eb)+_0x4231d6(0x261)+';\x20bor'+_0x4231d6(0x440)+'adius'+':\x204px'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x4231d6(0x143)+_0x4231d6(0xd1)+_0x4231d6(0x644)+_0x4231d6(0x50f)+'2px;\x20'+_0x4231d6(0x1cf)+'round'+':\x20rgb'+'a(255'+',255,'+_0x4231d6(0x148)+_0x4231d6(0x434)+_0x4231d6(0x1e4)+_0x4231d6(0x14e)+'w:\x20in'+_0x4231d6(0x567)+'\x200\x200\x20'+'1px\x20r'+_0x4231d6(0x1d8)+'55,25'+'5,255'+_0x4231d6(0x5a5)+_0x4231d6(0xca)+_0x4231d6(0x352)+_0x4231d6(0x229)+'d.on\x20'+_0x4231d6(0x551)+_0x4231d6(0x134)+_0x4231d6(0x281)+'gba(2'+_0x4231d6(0x308)+'5,255'+_0x4231d6(0x593)+';\x20box'+_0x4231d6(0x28a)+'ow:\x20i'+'nset\x20'+_0x4231d6(0x383)+_0x4231d6(0x373)+_0x4231d6(0x37a)+'255,1'+_0x4231d6(0x22d)+_0x4231d6(0x135)+_0x4231d6(0x43e)+'\x20\x20\x20\x20.'+_0x4231d6(0x411)+_0x4231d6(0x1f8)+_0x4231d6(0x2da)+_0x4231d6(0x580))+(_0x4231d6(0x18a)+'lex;\x20'+'align'+_0x4231d6(0x1a2)+_0x4231d6(0x368)+_0x4231d6(0xe0)+'\x20gap:'+_0x4231d6(0x26c)+'\x20padd'+_0x4231d6(0x3dc)+_0x4231d6(0x2a2)+_0x4231d6(0x4fa)+_0x4231d6(0x430)+'\x20\x20.sk'+_0x4231d6(0x636)+_0x4231d6(0x3a6)+_0x4231d6(0x5cf)+'lex:\x20'+_0x4231d6(0x3be)+_0x4231d6(0x447)+_0x4231d6(0x198)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+'d-tit'+_0x4231d6(0x64d)+'rong\x20'+_0x4231d6(0x405)+_0x4231d6(0x4a5)+'e:\x2013'+_0x4231d6(0x17a)+_0x4231d6(0x248)+'eight'+':\x20600'+';\x20col'+'or:\x20r'+_0x4231d6(0x1d8)+_0x4231d6(0x243)+'8,242'+_0x4231d6(0x394)+_0x4231d6(0xca)+'\x20\x20\x20.s'+_0x4231d6(0x229)+_0x4231d6(0x104)+_0x4231d6(0xe2)+_0x4231d6(0x190)+_0x4231d6(0x61b)+_0x4231d6(0x3b1)+_0x4231d6(0x2c1)+_0x4231d6(0x34a)+_0x4231d6(0x58f)+'0f5;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'mbody'+_0x4231d6(0x121)+'dding'+':\x200\x201'+_0x4231d6(0x227)+'0px;\x20'+_0x4231d6(0x3a4)+_0x4231d6(0x3af)+_0x4231d6(0x613)+_0x4231d6(0x3df)+_0x4231d6(0x1c7)+_0x4231d6(0x4e8)+'1px;\x20'+'opaci'+_0x4231d6(0x45e)+_0x4231d6(0x3db)+'rgin-'+'botto'+'m:\x206p'+_0x4231d6(0x57b)+_0x4231d6(0x1a8)+'sk-ct'+_0x4231d6(0x369)+_0x4231d6(0x1ec)+'y:\x20fl'+_0x4231d6(0x359)+_0x4231d6(0x509)+_0x4231d6(0x5b2)+_0x4231d6(0x621)+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x4231d6(0x3b7)+_0x4231d6(0x21b)+'px\x200;'+'\x20font'+_0x4231d6(0x47e)+_0x4231d6(0x18c)+_0x4231d6(0x59b)+'}\x0a\x20\x20\x20'+_0x4231d6(0x3af)+_0x4231d6(0x5e3)+'\x20{\x20fl'+'ex:\x201'+';\x20col'+_0x4231d6(0x4a4)+_0x4231d6(0x1d8)+'46,23'+'8,242'+_0x4231d6(0x2b5)+';\x20}\x0a\x20'+_0x4231d6(0x352)+_0x4231d6(0x3ea)+_0x4231d6(0x1ff)+_0x4231d6(0x1ec)+'y:\x20bl'+_0x4231d6(0x526)+_0x4231d6(0x5b6)+'size:'+_0x4231d6(0x5cc)+_0x4231d6(0x56b)+_0x4231d6(0x57e)+_0x4231d6(0xd5)+_0x4231d6(0x3a4)+'\x20.sk-'+_0x4231d6(0x60a)+_0x4231d6(0x393)+'ositi'+'on:\x20r'+_0x4231d6(0x479)+'ve;\x20w'+_0x4231d6(0x453)+'\x2026px'+';\x20hei'+'ght:\x20'+'14px;'+'\x20bord'+_0x4231d6(0x173)+_0x4231d6(0x17e)+'der-r'+_0x4231d6(0x5fe)+':\x2099p'+'x;\x20ba'+_0x4231d6(0x2fc)+'und:\x20'+_0x4231d6(0x37a)+'255,2'+'55,25'+_0x4231d6(0x48a)+');\x20cu'+_0x4231d6(0x3e2)+'\x20poin'+'ter;\x20'+'flex:'+_0x4231d6(0x5db)+_0x4231d6(0xca)+'\x20\x20\x20.s'+'k-swi'+'tch::'+_0x4231d6(0x535)+_0x4231d6(0x5de)+'ntent'+_0x4231d6(0x485)+_0x4231d6(0x221)+_0x4231d6(0x27b)+_0x4231d6(0x4d1)+_0x4231d6(0x26b)+'\x20top:'+_0x4231d6(0x3bd)+_0x4231d6(0x42b)+':\x203px'+';\x20wid'+_0x4231d6(0x3a3)+'px;\x20h'+'eight'+_0x4231d6(0xdf)+_0x4231d6(0x17e)+'der-r'+_0x4231d6(0x5fe)+_0x4231d6(0x201)+_0x4231d6(0x367)+_0x4231d6(0x134)+_0x4231d6(0x281)+'gba(2'+'55,25'+_0x4231d6(0x2eb)+_0x4231d6(0x54b)+_0x4231d6(0x5b5)+'nsiti'+'on:\x20l'+'eft\x20.'+_0x4231d6(0x4b0)+_0x4231d6(0x33f)+_0x4231d6(0x420)+'.2s;\x20'+'}\x0a\x20\x20\x20'+_0x4231d6(0x3af)+_0x4231d6(0x60a)+'h[ari'+_0x4231d6(0xc0)+_0x4231d6(0x403)+_0x4231d6(0x22c)+'\x22]\x20{\x20'+_0x4231d6(0x1cf)+_0x4231d6(0x278)+':\x20rgb')+(_0x4231d6(0x412)+_0x4231d6(0x56f)+_0x4231d6(0x60e)+'25);\x20'+_0x4231d6(0x3a4)+'\x20.sk-'+_0x4231d6(0x60a)+'h[ari'+_0x4231d6(0xc0)+'cked='+'\x22true'+_0x4231d6(0x637)+_0x4231d6(0x30d)+_0x4231d6(0x1ee)+'t:\x2015'+'px;\x20b'+'ackgr'+_0x4231d6(0x4f9)+'\x20#ff6'+_0x4231d6(0x291)+'}\x0a\x20\x20\x20'+_0x4231d6(0x3af)+'field'+'\x20{\x20ba'+_0x4231d6(0x2fc)+_0x4231d6(0x17d)+_0x4231d6(0x37a)+'255,2'+_0x4231d6(0x308)+_0x4231d6(0x64f)+_0x4231d6(0x350)+'order'+_0x4231d6(0x5d4)+_0x4231d6(0x3ee)+_0x4231d6(0x20d)+_0x4231d6(0x52a)+'6px;\x20'+_0x4231d6(0x568)+':\x20#f6'+'eef2;'+_0x4231d6(0x19a)+_0x4231d6(0x3dc)+_0x4231d6(0x344)+_0x4231d6(0x17a)+_0x4231d6(0x357)+_0x4231d6(0x259)+_0x4231d6(0x183)+'x;\x20ou'+'tline'+_0x4231d6(0x4c2)+'e;\x20bo'+'x-sha'+'dow:\x20'+_0x4231d6(0x130)+_0x4231d6(0x30a)+_0x4231d6(0x54c)+_0x4231d6(0x3e1)+'(255,'+'255,2'+_0x4231d6(0x564)+'5);\x20}'+_0x4231d6(0x4cf)+'.sk-f'+_0x4231d6(0x40c)+'optio'+_0x4231d6(0x2f6)+'ackgr'+'ound:'+_0x4231d6(0xd0)+_0x4231d6(0x3ec)+'}\x0a\x20\x20\x20'+_0x4231d6(0x3af)+'range'+_0x4231d6(0x35f)+_0x4231d6(0x3f5)+':\x20fle'+'x;\x20al'+'ign-i'+'tems:'+'\x20cent'+'er;\x20g'+_0x4231d6(0xe3)+_0x4231d6(0x474)+_0x4231d6(0x4cf)+_0x4231d6(0x617)+_0x4231d6(0x2e5)+'\x20{\x20-w'+'ebkit'+_0x4231d6(0x3a5)+'aranc'+_0x4231d6(0x1da)+_0x4231d6(0x5fb)+_0x4231d6(0x60b)+_0x4231d6(0x5e6)+'\x20none'+_0x4231d6(0x5f4)+_0x4231d6(0x207)+_0x4231d6(0x141)+'heigh'+_0x4231d6(0x13b)+'x;\x20ba'+_0x4231d6(0x2fc)+'und:\x20'+_0x4231d6(0x327)+_0x4231d6(0x378)+_0x4231d6(0x654)+'\x20\x20\x20\x20.'+_0x4231d6(0x172)+_0x4231d6(0x513)+_0x4231d6(0x123)+_0x4231d6(0x111)+'lider'+_0x4231d6(0x262)+'able-'+_0x4231d6(0x428)+'\x20{\x20he'+'ight:'+_0x4231d6(0x1bc)+'\x20bord'+_0x4231d6(0x314)+_0x4231d6(0x282)+_0x4231d6(0x1bc)+_0x4231d6(0x210)+_0x4231d6(0x303)+_0x4231d6(0x1ea)+_0x4231d6(0x4b5)+_0x4231d6(0x137)+'ent(#'+'ff6b9'+'d,\x20#f'+_0x4231d6(0x1b5)+')\x200\x200'+_0x4231d6(0x4fd)+_0x4231d6(0x4c8)+_0x4231d6(0x33b)+')\x20100'+_0x4231d6(0x110)+_0x4231d6(0x4cd)+_0x4231d6(0x5ff)+_0x4231d6(0x5c5)+_0x4231d6(0x2eb)+',255,'+_0x4231d6(0x39c)+_0x4231d6(0x430)+_0x4231d6(0x533)+_0x4231d6(0x1d5)+'er::-'+'webki'+'t-sli'+_0x4231d6(0x628)+_0x4231d6(0x611)+_0x4231d6(0x545)+_0x4231d6(0x3a2)+_0x4231d6(0x14a)+'rance'+_0x4231d6(0x4c2)+_0x4231d6(0x1c0)+'dth:\x20'+'6px;\x20'+_0x4231d6(0x26e)+'t:\x206p'+'x;\x20ma'+'rgin-'+_0x4231d6(0x416)+_0x4231d6(0x2a1)+_0x4231d6(0x279)+'er-ra'+'dius:'+'\x2050%;'+'\x20back'+_0x4231d6(0x303)+_0x4231d6(0x1f1)+_0x4231d6(0x1b5)+_0x4231d6(0xca)+'\x20\x20\x20.s'+'k-val'+_0x4231d6(0x3df)+_0x4231d6(0x1c7)+'ze:\x201'+_0x4231d6(0x247)+_0x4231d6(0x5b6)+'weigh'+'t:\x2060'+'0;\x20mi'+'n-wid'+'th:\x202'+'8px;\x20'+_0x4231d6(0x5b7)+_0x4231d6(0x358)+_0x4231d6(0x386)+'ht;\x20c'+'olor:'+'\x20rgba'+'(246,'+_0x4231d6(0x34c)+_0x4231d6(0x21f)+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-co'+_0x4231d6(0x2de))+('\x20widt'+_0x4231d6(0x50b)+_0x4231d6(0x363)+'eight'+':\x2022p'+'x;\x20bo'+'rder:'+_0x4231d6(0x530)+_0x4231d6(0xd1)+'-radi'+'us:\x206'+_0x4231d6(0xe7)+_0x4231d6(0x33f)+'ound:'+_0x4231d6(0x5db)+';\x20pad'+_0x4231d6(0x583)+_0x4231d6(0x1d3)+'ursor'+_0x4231d6(0x211)+'nter;'+'\x20}\x0a\x20\x20'+_0x4231d6(0x533)+'-note'+_0x4231d6(0x3df)+'nt-si'+_0x4231d6(0x4e8)+'1px;\x20'+'color'+_0x4231d6(0xd9)+'a(246'+',238,'+_0x4231d6(0x521)+_0x4231d6(0x23e)+_0x4231d6(0x651)+'g:\x202p'+_0x4231d6(0x1bd)+_0x4231d6(0x3a4)+_0x4231d6(0x3af)+'note.'+_0x4231d6(0x57f)+'\x20colo'+_0x4231d6(0x2a4)+'f7a93'+_0x4231d6(0xca)+_0x4231d6(0x352)+_0x4231d6(0x5b9)+'\x20{\x20al'+'ign-s'+_0x4231d6(0x60f)+'flex-'+_0x4231d6(0x3ed)+';\x20bor'+_0x4231d6(0x558)+'0;\x20bo'+_0x4231d6(0x16c)+'radiu'+'s:\x208p'+'x;\x20pa'+_0x4231d6(0x1d7)+_0x4231d6(0xdf)+_0x4231d6(0x401)+';\x20bac'+_0x4231d6(0x134)+'nd:\x20#'+_0x4231d6(0x457)+_0x4231d6(0x249)+'lor:\x20'+'#fff;'+'\x20font'+_0x4231d6(0x47e)+':\x2011.'+'5px;\x20'+'font-'+'weigh'+_0x4231d6(0x36e)+'0;\x20cu'+_0x4231d6(0x3e2)+_0x4231d6(0x1b8)+_0x4231d6(0x16a)+_0x4231d6(0x3a4)+_0x4231d6(0x3af)+_0x4231d6(0x360)+'over\x20'+_0x4231d6(0x4be)+_0x4231d6(0x607)+_0x4231d6(0x421)+_0x4231d6(0x58d)+_0x4231d6(0x46c)+';\x20}\x0a\x20'+_0x4231d6(0x1b3));window[_0x4231d6(0x1c9)+'entLi'+_0x4231d6(0x20b)+'r'](_0x1c74bc['ViOkX'],_0x186d00=>{var _0x1ed053=_0x4231d6;_0x186d00[_0x1ed053(0x630)]===_0x1c74bc[_0x1ed053(0x4ce)]&&(_0x186d00[_0x1ed053(0x4ac)+_0x1ed053(0x5a6)+_0x1ed053(0x629)](),_0x5c6b34());},!![]);var _0x5ceb63=document[_0x4231d6(0xdb)+_0x4231d6(0x4e5)+'ent'](_0x1c74bc['MPUrZ']);_0x5ceb63[_0x4231d6(0x33c)][_0x4231d6(0x4b9)+'xt']='posit'+'ion:f'+'ixed;'+_0x4231d6(0x639)+_0x4231d6(0x1fe)+'ight:'+_0x4231d6(0x4fa)+_0x4231d6(0xea)+_0x4231d6(0x21c)+_0x4231d6(0x63c)+'646;c'+'ursor'+_0x4231d6(0x514)+_0x4231d6(0x5e7)+'idth:'+'26px;'+'heigh'+_0x4231d6(0x3fa)+'x;opa'+_0x4231d6(0x57e)+_0x4231d6(0xc9)+'ransi'+_0x4231d6(0x27b)+_0x4231d6(0x361)+'ty\x200.'+'2s;po'+'inter'+'-even'+_0x4231d6(0x489)+_0x4231d6(0x3e9)+_0x4231d6(0x310)+_0x4231d6(0x448)+'shado'+'w(0\x200'+_0x4231d6(0x1b2)+_0x4231d6(0x37a)+_0x4231d6(0x623)+'07,15'+_0x4231d6(0x4b8)+'))',_0x5ceb63['inner'+'HTML']='<svg\x20'+_0x4231d6(0x1e3)+_0x4231d6(0x125)+_0x4231d6(0x5ae)+_0x4231d6(0x3ab)+_0x4231d6(0x5f1)+'\x20d=\x22M'+_0x4231d6(0x115)+_0x4231d6(0x354)+_0x4231d6(0x39f)+_0x4231d6(0x500)+'-4-7.'+'5\x200-2'+_0x4231d6(0x258)+_0x4231d6(0x65a)+'\x204-4.'+_0x4231d6(0x48d)+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x4231d6(0x13f)+'.5z\x22\x20'+'fill='+'\x22none'+'\x22\x20str'+_0x4231d6(0x36a)+_0x4231d6(0x562)+'9d\x22\x20s'+_0x4231d6(0x63f)+'-widt'+'h=\x222\x22'+_0x4231d6(0x120)+_0x4231d6(0x548)+'necap'+_0x4231d6(0x2ce)+_0x4231d6(0x346)+_0x4231d6(0x63f)+'-line'+'join='+'\x22roun'+_0x4231d6(0x4d3)+_0x4231d6(0x165)+_0x4231d6(0x3f2)+_0x4231d6(0x22b)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+'6b9d\x22'+'/></s'+_0x4231d6(0x1ca),_0x5ceb63['title']='Sakur'+_0x4231d6(0x5a7)+'r',_0x5ceb63['onmou'+'seent'+'er']=()=>_0x5ceb63[_0x4231d6(0x33c)]['opaci'+'ty']='1',_0x5ceb63['onmou'+'selea'+'ve']=()=>_0x5ceb63['style']['opaci'+'ty']=_0x4231d6(0x38a),_0x5ceb63[_0x4231d6(0x3c2)+'ck']=_0x40325f=>{var _0x81b008=_0x4231d6,_0x2b7045={'ygHyI':_0x81b008(0x497)+_0x81b008(0x149)+'r.v1'};_0x1c74bc['hFaIZ']!==_0x1c74bc['pYImk']?(_0x40325f[_0x81b008(0x390)+_0x81b008(0x5ab)+'ation'](),_0x5c6b34()):_0x53afd4[_0x81b008(0x4a7)+'n'](_0x314e38,_0x5cb3d3[_0x81b008(0x122)](_0x53cfaf[_0x81b008(0x33a)+'em'](_0x2b7045[_0x81b008(0x454)])||'{}'));},document[_0x4231d6(0x241)]['appen'+'dChil'+'d'](_0x5ceb63),_0x6395fd(),_0x1c74bc['TZbhm'](requestAnimationFrame,_0x4e6288),console[_0x4231d6(0x21e)](_0x1c74bc['SRHAE'],_0x3b426e['uwmk']);});})()));function _0x21de(_0x21dd69,_0x5ea6c4){_0x21dd69=_0x21dd69-(0x528+0x360+-0x7ca);var _0x14dd81=_0x2e0e();var _0x3d78e4=_0x14dd81[_0x21dd69];if(_0x21de['eJJHsS']===undefined){var _0x355bd4=function(_0x523c3a){var _0x3fa233='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xe75382='',_0x4428fb='';for(var _0x2cf44=0x1df2+-0x1130+0x2*-0x661,_0x534b98,_0x3df76a,_0x5121fd=0x17e*0x2+0x2212*0x1+0x99*-0x3e;_0x3df76a=_0x523c3a['charAt'](_0x5121fd++);~_0x3df76a&&(_0x534b98=_0x2cf44%(0x5d9*-0x5+-0xae7+-0x28*-0x101)?_0x534b98*(-0x1ff5+-0x8d4+0x1*0x2909)+_0x3df76a:_0x3df76a,_0x2cf44++%(0x1d5d*-0x1+0x9*-0x3d3+0x3fcc))?_0xe75382+=String['fromCharCode'](0x246e+-0xda*0xf+0x16a9*-0x1&_0x534b98>>(-(0x582+0x3fb*0x5+-0x3a1*0x7)*_0x2cf44&0x11b*-0x23+0x179*0x11+-0x6d7*-0x2)):-0x31*-0x3c+0x2524+-0x4*0xc28){_0x3df76a=_0x3fa233['indexOf'](_0x3df76a);}for(var _0x271946=0x257b+0x243c+-0x49b7,_0x5c610b=_0xe75382['length'];_0x271946<_0x5c610b;_0x271946++){_0x4428fb+='%'+('00'+_0xe75382['charCodeAt'](_0x271946)['toString'](-0x15f2+0x1903+-0x301*0x1))['slice'](-(-0x1e7+0x2fe*0x5+-0x1*0xd0d));}return decodeURIComponent(_0x4428fb);};_0x21de['grvyEg']=_0x355bd4,_0x21de['hAXeZk']={},_0x21de['eJJHsS']=!![];}var _0x947555=_0x14dd81[0x1664+-0x197d+0x319],_0x1837af=_0x21dd69+_0x947555,_0x3b231f=_0x21de['hAXeZk'][_0x1837af];return!_0x3b231f?(_0x3d78e4=_0x21de['grvyEg'](_0x3d78e4),_0x21de['hAXeZk'][_0x1837af]=_0x3d78e4):_0x3d78e4=_0x3b231f,_0x3d78e4;}function _0x2e0e(){var _0x4b1eb6=['AY1IDg4','BgvMDa','BgfZDeu','ohG5mc0','r29PseS','zfzMr2e','nYWUmsK','mcWWlJG','mteYnZu1nNj2sLnmDG','CM0GlJq','zvbSyxK','BgWGBwu','yMeOmJu','Ad0ImIi','DLLKrKq','zxzLCNK','BhvTBJS','zxiGC2W','y2vUDgu','ideWChG','ihWGz2e','A0LZy1q','zsb7igy','DgHVzca','C2STAgK','D3jPDgu','kdeWmhy','oIaWoYa','A2uTD2K','AwXnB3q','yYGXmda','z29KicG','BI1PDgu','nJy3nZGYy2jHvhj0','ig5VBMu','y25Nwvy','CIiSici','ihSGy28','r3HMwNm','Bw91C2u','ENHwuem','igXPBwK','BgfIzwW','lM1Ulxa','zxjZ','yw5JztO','DgvYo3C','BMn0Aw8','igHLAwC','A2v5Dxa','C2u6Ag8','vvjbx0S','AgfZ','yNv0Dg8','tgLZDa','igzPBgW','phbHDgG','zwfSDgG','whDhEMO','oYb3Awq','DhLWzq','mtuWmZe2mer1B2Hyrq','DMTYquK','Aw1Lihm','zwfKEs4','wgzQAgm','BMu7ige','sLz1sxG','z2zbtKK','ywrPDxm','DcWGCMC','Bw9fEha','qMXVy2S','B290zxi','DNDtBvq','DgG6idu','AenpAKm','DgL2zsa','DgvYoIa','kYbtCge','yMz4DhC','C3DPDgm','ChbLyxi','oIb0CMe','qxjmvfK','mtu3lc4','zwXMoIa','zwzOCva','AhvTyIa','ig5LDMu','BwrLC2m','DgfNtMe','DxjLihq','Bw4TDg8','lNnRlxm','Dgzysgq','DMLZAwi','u1PZuwK','AxrSzsa','sLDpB2e','Dg9Wrgu','r3riDwm','BM9szwm','AeTWAue','oIbJzw4','z2v0','mJu1lde','lxDPzhq','yuHZtfG','mdSGFqO','BfjHDgK','zgvYlxq','yxvSDa','vLrzuuK','vefxwxu','uNzuwM4','Eca2ChG','sw9JBem','CwHWwLu','y29Kzq','A3mGyxi','t0Pnr0G','CYbnB3y','u3rHDgu','y2f0','lwnHCMq','iL06oMe','ignVBg8','Dg9WoJe','oJa7D2K','C3rPBgW','ndC0odm','oYbHBgK','mNb4ihu','DhjVA2u','BMqGt0G','vKnPs3e','q3vHrgu','BsbVBIa','lxjHzgK','yxbWBgK','uJOG','BhmGysa','Ahq6ida','D2fPDgK','t1rsq1K','CMXjvgi','q29TyMe','BguGC3q','twLZyW','nsWUmdm','CeveyxO','ywrKAw4','x19tquS','oIaXnha','DdSGFqO','AuPzseC','B3vLDMi','Bw92zvq','DgvYigm','D1bOtMe','oc00lJu','oJiXndC','ihSGywW','zg93BG','lsbHihm','r25vwKK','C2f0Dxi','zvzHBhu','vxrqvLq','DgHPCYa','ys1JAgu','BgLJyxq','Bxm6igm','z1zXEwO','CJSGz2e','nJTWB2K','sw5PDgK','Bgf5ig8','D0rJrKW','mc41o3q','oYb9cIa','Bg9Hzca','A1zOzxi','DgvJDgK','oIaZmNa','ls1W','icmYmJe','B3jKzxi','zvKOmtG','DLHrz0u','C2STBwq','ic40oYa','ufmGDw4','vu15Bgi','qujMChy','oIbYz2i','vvLnyMK','y3jLyxq','ifvUAxq','D2LKDgG','D2L0Aca','oIa4ChG','BNrLCJS','uuDTAgu','lNnRlwm','yxa6idG','C2STBwi','ktSGBwe','zw50','ChG7igi','tuLtu0K','DvbiyKe','EI1PBMq','icaGzgK','zw5HyMW','nNb4ida','Bw4TCge','AwvKigm','y2HPBgq','DMfS','ihDPzhq','wgrSufq','B25LigK','C3bHBG','v3jhEgy','mhWYFde','uMvZzxq','Awq7iha','ihrOzsa','AwXSihK','Cg9Uj3m','u0Xgzva','EtOGmdS','EdSGAgu','DxrVoYa','icaGlM0','C2HPzNq','zMLSBa','zc5VBIa','qNvUBNK','uMvJB2K','zvj1BM4','yxb0Dxi','A3ndChm','DdOXmda','AxnPyMW','lcbPBNm','EuvjDMS','zguSihq','zw1LBNq','jsbUBY0','A2L0lxm','B2f0Eq','ywXSig8','z3jntNK','mtiGmJe','nsKSida','CMfUC3a','BwvsDw4','y3K9iJe','u2fMzxq','igrPC3a','zgDHqMq','y2XsCui','sfvNtNC','igDHCdO','ihn0CM8','ihSGCge','CgfYC2u','oI13zwi','CJOGCg8','B3G9iJa','CvDHy2m','zNbZ','BMf0Dxi','DdOGmJG','wLnHv3e','BunZAK4','B29RCYa','B3nWywm','oJa7EI0','ltqTnY4','Aw5Zzxq','rNDIsKq','AgLyEfe','B3rOAw4','A2DYB3u','nYWUmJG','yMfYlxq','z3jHzgK','D3b1A3O','y0LtuuW','Bw92zq','DdOGoha','CgfNzsa','CNDSsgy','qNjSr3C','ns00idC','vuDUq2W','mhb4oYa','ihLVDxi','zcb7igi','Ber1wNG','zwjRAxq','zMLUza','Ehf4wvK','mJu1lc4','ys5RB3u','yxbWzwe','Be1VDgK','yM90Dg8','y2HdB2W','C2HHzg8','ve5yzLC','t1blt3C','wK5YDg0','DhjPyNu','yxrSEsa','DgXL','CMvHzhK','BNrLEhq','mdSGyM8','Ew1xzem','se1Mu3O','yNrMy3y','CdOGmti','mZuSmJq','BgLUzw4','AguGDxm','lcbJywW','z29K','C2v0qxq','ztOGmtm','EuvUz2K','AwWGC3a','y2LYy2W','B2nItKm','r3DZz1C','nxmGy3u','ihbSywm','DgvYoYa','tgX6qKu','CMrLCI0','C3zNiJ4','sezAsu8','Axr5oIa','yxjJ','ifvxtuS','C2STC2W','zxi6ida','idaGnha','DM1ly1a','mcbOB28','BgLUzvC','v2PetwS','BwLZyW','ChG7igy','zM9UDa','vhrpDK4','Dw5KoIa','oYbIB3i','Ag9VA0m','oIa2nta','A3nkAMO','B3vUzdS','mteUnxa','B1jLy28','BI1JB2W','z2v0rwW','yxrLlwm','BKroAxe','tgvMDca','yxK6igy','rvHqxq','oIaXms4','yxj0lG','zw51ihi','zw50tgK','yxjKlxq','zwCGzMe','rNzLyLu','AerLvhu','z2fTzuW','ig1HCMC','CvDnrK0','Bw4TAa','DgG6ida','A291CNm','ihbHzgq','y2fSBhm','lJv6iIa','DtmY','zgL2','BNnSyxq','Aw5KzxG','A2v5zg8','lwL0zw0','AcbVBMu','BI1JBg8','BwLU','y2HLCYa','DgGUsw4','icaGic4','q3nlsLm','ueDpsxK','zxmGEYa','yM90Aca','yvfez08','Bgv4oIa','BsbJzw4','AgvZ','CIbHzhy','idrWEca','icaG','tw92zw0','zJzIowq','rwLczLC','C2STBM8','ihbVAw4','ChHtrwW','lwzPBhq','B2X1Dgu','idjWEdS','EcaWoYa','EurRze8','BxfKDNq','ztSGD2K','rwfJAca','B2r5','zxjZy3i','Bg9Y','A2vizwe','zvn0EwW','BNqTC2K','Dgv4Dem','ywrKrxy','DMC+','EsaUmZu','vMHjwLy','DhrrtuS','zgfTywC','yMfJA2C','zMuGBw8','wu1mzhO','CMuGkfm','ida7igm','s2v5vW','lxnSAwq','zw50rwW','zgrPBMC','z2jHkdi','C2fMzu0','ztOGBM8','CMvWBge','rgLZywi','zdSGyMe','zJmY','odbWEcW','ldi1nsW','s2v5qq','wKzPz2K','DMLLD0i','igjVEc0','DgLKzs4','BYbWAwC','AcaTidq','odaSmtK','CZO6lxC','zdOGBgK','s1vKvfi','AxnWBge','tvjovNK','EYbSzwy','yw5Jzs4','zMLSBfm','zdOGi2y','B2XVCJS','BMqGBwe','Ee9Itge','BNqGAge','Ag9VA0C','v2vItw8','CMqTAgu','tLDgv2u','zgvZ','mNb4oYa','qxbWBgK','BNn0ywW','mNb4o3i','Dcb7igq','igf1Dg8','oIa1mcu','tw92zq','mcWUntu','oIbZDge','ufDRv28','C2v0sxq','DgG6idK','DZOGAw4','CYb3B24','yuHHD28','C3rLBMu','ihSGzMW','CI1Yywq','BY1ZDMC','khjLBg8','igjHy2S','oIbWB2K','DNbNEMS','i2zMzG','ign1CNm','ExrUD3O','rwLyAvG','y3KGB24','ywLYlG','r2zOweW','y29SCZO','BMC6idq','zxG6mJe','DgLKzvC','Bg9N','ndiSlJG','uujIELy','ihbVC2K','Bw92zw0','AxHLzdS','CM9Rzs0','zMyP','oYbQDxm','mNb4ide','zgv2Awm','AY1Jyxi','BNrLBNq','iJeYiIa','iNrYDwu','mdCSmtu','ANvTCfa','Dw5Kzwq','mtaWid0','BwLUkdq','CMfWAwq','q291BNq','BIb0Agu','sNfewhy','rNzmDeC','q2jIANi','CIdIGjqG','tuzJwMy','CI51As4','nMvLzJi','suDrCfy','v2zbywm','nsK7iha','oYbMAwW','ww1xsxO','yM9KEq','igjHBIa','ndySmJm','BI1SB2C','lwjHBNi','zhjhz24','mxb4oYa','B250lxC','zdSGy28','yxa6ide','y3jLzw4','qsblt1u','zvD5D24','BgrYzw4','mtySmc4','Fdf8nhW','wKnfzwe','q0fovKe','oYbVDMu','DML0Eq','mcWWlJu','CMvHzey','igzVDxi','lJuGms4','AxPLoIa','BML0igy','uMf0zq','B2reAwu','Axb0kq','ignHy2G','ihn0AwW','Bg9JAW','lc4WocK','lxj1BM4','zMLSzw4','DgLVBI4','swyGCMu','DMLHifm','q1reA0K','CMXHEsa','Awy7ih0','lxnLCMK','Bhv0ztS','idHWEdS','zIXZExm','AgvPz2G','CMvMAxG','CYbpsgu','Dg9Y','CLHqq0i','ldiZocW','C2v0uhi','y2nTCeu','BdOGBM8','yKjxwLa','CM91BMq','igjVCMq','B25JAge','DgLVBJO','yu16uwm','C2HVB3q','lZ48l3m','rvDUC0e','igzSzxG','BMq6ihi','zgL1CZO','zM9bDMe','iNjVDw4','wfrqufm','mtGGnIa','EKjvzNa','rw5NAw4','vgLJAW','lxnOywq','nJaWia','yuTVDxi','C1rAz0y','r29Kl2q','yxGOmJu','C3bSAxq','yJLKoYa','mxb4ida','yxr0ywm','Dw1UoYa','B2vZig4','BgW+','qxbWBhK','psjTBI0','zMLSBd0','Dw5PDhK','zxiGEYa','Avf1ywK','sw5MAw4','vwPcwfy','ihWGBw8','ChLvz1G','ltjWEdS','mtfWEca','igHVB2S','CJOGi2y','sNvTCca','tvbvCLO','i2zMyJm','Cg9ZAxq','B3uU','BgfJzs0','BxKGC2u','ic5TBI0','CMLUz3m','CYbpDMu','tg9Hzgu','CNq7igC','Cc1ZAge','tMzqEMi','vgfRzxm','ihSGD2K','lc43nsK','uxncze8','CJOGDgG','zg9JDw0','ywn0A0S','yvLXtvu','ChDJB0i','CK9tELi','CNjVCG','ie1VDMu','icaUBw4','Awr0Aa','zYb7igm','zxH0','lIbuDxi','Eg5tu0W','tKCG4Ocuia','zw51','rezIuMi','ihnOB3q','Bw4Ty2W','tgf2Ava','DxmGywm','CMeTA28','qw5zrLm','psjYB3u','ChGGDwK','CMvSEsa','z2H0oIa','zsb2ywW','C0HzAgy','D2HLCMu','B29Rihi','C1PsA2u','mZv1AxjhD0e','vg90ywW','rwfht2e','ywqGEYa','rxHW','z2LMEq','oIbJDxi','Bg9YihS','lxrVCca','yxjNzxq','Aw5WDxq','AvHQq2G','y29TyMe','sw5Zzxi','BgLKzxi','rgfTywC','zhrOoIa','u2nHBgu','z3jHDMK','uMvJDa','nsWYntu','AwDUyxq','Bg9NBY0','BwvKicG','ienquW','CMvUDem','ihrVide','tNPfuNi','CM9ZC2G','BMC6igi','q1DHsvG','BIb7igi','ueLRrKe','D2L0Ag8','u2L6zq','DLrPseS','ywrAB1a','y2TNCM8','mcuUifm','Cg9PBNq','B24Oks4','CZPUB24','ihnVig4','B0n0Be0','z3jVDw4','rKjfEuS','EYbIB3G','u2fRDxi','BgP3sxu','ntuSmJu','zcbJAg8','idaGmca','sxnhCM8','ywvUrLK','zNrLCIa','zsbZzxi','u0fgrq','BhrLCJO','ig5VigG','qK9uu0m','ruzQAei','zxiTCMe','mNb4ksa','lxK6ige','zsGXnta','qMLLy2i','q3jVC3m','EvPUy0q','y2HtAxO','zIbTyxq','C2STDMe','zxrLy3q','BsbYAwC','BwvUDca','DgG6idi','AM9PBJ0','B250zw4','ywiUywm','D2XbuNe','q0DIBwu','DhjHBNm','B24UvgK','AgvHzgu','z24TAxq','Aw5Mqw0','ig1VBwu','Dgvfyxu','zgTPDa','zuv4Ca','t1vsx18','zxmGB24','qxnZzw0','AxrJAa','zxjYB3i','ocWYndi','CMLKoYa','ocK7ih0','DhLSzq','ywDpwu4','z2v0sxq','lca1mcu','C3r5Bgu','z3LIywm','rLzrwe4','ywnRz3i','BeXxsMC','DK10wM8','tu5SB3G','CMfPC2u','nNb4idK','B25SEsW','BMqIihm','Cg9W','igvSC2u','CfDuAw8','B2XVCJO','B3i6icm','mJm4ldi','t1nOB28','yxbWzw4','msWUmZy','nsK7igi','igXLyxy','icaGlNm','DNrpq3u','yY0XlJu','q3vZDg8','zw50zxi','B250lxm','ywXPz24','zxG7ige','BeTIEfu','tw9Kzsa','r1rdBMm','ALb0B1O','yMHVCa','ihSGzgK','yNrUoMG','B3bHy2K','zLHrENG','ChG7igG','qwzWrNO','iezquW','rgLL','oYbIywm','CZOGy2u','Bcb7igq','B2TLpsi','u3rHDhu','CxvLCNK','AguGzNi','DdOGnZa','z2v0q28','phnTywW','v2LKDgG','Dw5RBM8','idfWEca','zMXLEdO','uezzvMq','BNq6igm','zhrOoJe','CgfYzw4','DgvTCgW','CMDIysG','DhvYyxq','AwXS','icbIywm','nJiWChG','ndHWEcK','BMu7ihm','igTVDxi','vgHLC2u','mcaWida','DhLqy3q','sMHTBLi','oIbYAwC','CNr1Cca','v2TNCLi','zw50CZO','mc41','Aw5JBhu','AwrLihS','Bfn5swO','v0fttsa','zcbZzwu','C3rVCfa','AxrPywW','nsaWlti','Acb7iha','lc40nsK','ndGZnJq','B2fKzwq','B3rZlG','B3vUzgu','lxbHCMu','Ae1ZAgy','sMDsrha','lJa4ktS','mJvWEdS','ihSGB3a','ltiUns0','v2fQrha','BMX5kq','yMTPDc0','DgG6idG','FqOGica','lwfWCgu','lxrPDgW','igv4Axq','ug9ZAxq','ihjLBg8','DNCGlsa','idi0iJ4','DgvTlxu','BgLUzvq','y2fUDMe','ic5ZAY0','ztOGmtC','C3rYB24','ChG7iha','CMfUz2u','C2STBge','CevNDMG','ywrK','CgfKzgK','qM90Dg8','t0PHDLO','BMHvuhi','sfrnta','sw5ZDge','idnWEdS','mtSGBwK','zerXCwu','Bgf0zwq','CM9Rzxm','B25JBgK','B2rL','tgvNAw8','vwT4D08','BLLiy0m','Aw4TD2K','igDHDgu','DgLMEs0','B3C6ida','ExjyqKe','mJSGC3q','y29TCgW','ywLSzwq','CezyA0q','DxqGDgG','DxjDifu','CxHVuMq','AfbeDfe','ywn0Axy','yxrLkde','rhHpyLO','BwvZC2e','CMvU','zw4GDg8','CMLZAYa','ndSGBwe','Aw5NoIa','lK92zxi','ywnPDhK','ihSGzM8','y2n1CMe','ihjNyMe','CNnVCJO','idqGnc4','qLvOs0W','zM16EwG','AxrLiee','DxDTAW','A2v5C3q','Dg87zMK','AY1OAw4','BM9tChi','nde5oYa','C3rHCNq','yM9Yzgu','AtmY','Aw9U','Fdr8mhW','zsbJEd0','ywXSzwq','ocKPoYa','C3bSyxK','EuT4CLy','Bwf0y2G','v3jHCha','DxjDig0','DdOYnNa','oYbKAxm','A291CI0','u1Hdwha','igfSAwC','oYbMBgu','CgntCxi','ide2ChG','y2fSBa','y2TLzd0','lwHLAwC','EYbMB24','Ag9VA04','EfzPqNC','Axfwt2W','C2HVD24','z3jPzdS','CML0zxm','AwvSzca','C2v0x3q','DhHfA28','mIaXmK0','D2fYBG','C2STy2e','ysGYntu','zgnnExK','rLbtigm','yLbmCwy','Dg9WoIa','mZqWnteWAuD3rxbR','BNrLCI0','phn2zYa','BI5MAxi','DxjDigG','BYb7igq','y09ewK0','zxrhyw0','Bw4TBg8','B3vUzca','yNjPz2G','BM9UztS','zxzLBNq','y3DxC1O','BM9Uzq','BuXWuNm','u3bLzwq','DhjHy2S','ywXSihq','CIGYmNa','igXLzNq','swrcuu8','mhb4lca','u2HHCNa','idmWChG','ih0kica','zsWGDhi','uMDZB1m','vxfnzei','mdi1ktS','oIbMBgu','sgvHBhq','iKLUDgu','m3W1Fdi','C2STCMe','ieaG','CMvSB2e','Fdb8mNW','Bw1VifS','ktSGFqO','Cunxqw0','zgvYlxi','z2HeDgS','Bgf5oIa','Aw9FnZi','re5Rvgm','D2vPz2G','AwDODdO','BI13Awq','zhjVCc0','oIbHyNm','Bg9Hzc4','ywX0Ac4','nhWZFdy','mJu1ldi','D0nVBg8','nMi5zci','s2vwB1i','yLzAA2m','rMLLBgq','Awr0AdO','EwDiEuK','Bxzhz0W','zwLUC3q','zMy2yJK','rhPjEvq','4Ocuig5Via','CuzkEwe','ihWGC2G','AwX0zxi','zxqGmca','DhK6ic4','AuTiANq','ifjLy28','CvjXvxm','u0fgrsa','yMX1CG','CZOGCMu','zxj5idi','u2v0r2e','lc4WnIK','CYbLyxm','vuvVBwO','Dg87ih0','zw50CW','kdeUmsK','Bg9Hzgu','B2LUDgu','BxPXwNy','uIb2ms4','BgD5sgi','D0jSDxi','zgvSzxq','ChG7ih0','sNfOwxm','BM93','qNLjza','BgLUzwm','zwXHDgK','C2v0vhi','tuLRqM4','ideYChG','Bw4TC2K','lxnPEMu','rgrdzLu','zwfWB24','AxmGyNu','AwX5oIa','vNPWtMC','ugf0Aa','oIaIiJS','CeLzzxe','v0ftrca','BLnKtva','Dhm6yxu','nsWUmdC','mtiZntK2oeXLvK1hBq','zfvbqLO','nxm0idi','ugn0','CujdCwW','y3jVC3m','s1vdwfK','seHbzuW','ignVB2W','B3nLihm','A3nqB3m','uvrxuKq','C2fRDxi','BMv2zxi','zsaOt0G','Dg9Nz2W','icaGica','BMnL','zNvSBhm','zxjZihq','ide0ChG','uuzNu04','kc4YmIW','Dg9W','ChbLBNm','B3i6ihi','Dc1ZAxO','zM9YBxm','yxnZAwC','y2vSzxi','Aw5Uzxi','Aw9UoMy','BI1ZDwi','ChjLDMu','CI52mq','mxb4ihi','ifTfwfa','mNmSigi','uMfksem','AuL2y0m','zxjSyxK','CgfJAxq','BMvHCI0','rNjHBwu','icaGkIa','nYWWlJC','y3nZvgu','zMLSBfq','v2vHCg8','veTOB0W','wMThAfG','EYbMAwW','r3jHDMK','yw5ZzM8','BIbZAwC','oIbUB24','B3nLihS','zsbTAxm','ywrIBg8','Bw4TDge','sw5NA1i','CIGTlxa','tu9ersa','Ag9VA1a','DMvTzw4','yxa6ihi','CMvWzwe','q0rQAKy','cIaGica','CwLhyMy','igfIC28','A3nty2e','zciVpJW','tuHXz00','zwLNAhq','EffyAxm','rKLyt1y','mxWYFdm','y3rPB24','idGWChG','C3fcC00','Ag9ZDg4','ieTLzxa','Aw50zxi','lwnVBhm','AgvSza','Dgv4Dee','B3vUDgu','r29Kie0','BLbSyxq','zuvSzw0','yxrLvge','ntC5nJL5sxfjDgO','EMu6ide','ig9U','CY1Zzxi','sNvTCfq','lwHVCa','q1DVAu0','yNbeA2m','Ag9VA3m','uMvMAwW','BeLbt0C','yu5htue','zgvZyW','rgfUz2u','tM8Gu3a','B24U','vw5PDhK','Du5kwue','B3vUzdO','mtjWEdS','C3rYAw4','vfPIAg0','ic8GDMe','BwLKzgW','zxPPzxi','nc00lJu','s2LSBgu','B2XPBMu','ys11Aq','x19ZywS','DvjlyLK','BgvUz3q','sKDrD1q','uNvUDgK','BgLNBI0','ihn5C3q','AdOGmZq','Bwf4','rgvytfO','w3nHA3u','Dxm6ide','tuXTEgm','wxrPwfq','tKT0Bwi','AwrLCJO','oNbVAw4','DurMDK8','ihWGrvi','Bg93zxi','BwuG','Aw4GC2e','zw1ZoIa','mxWZFdu','v01ligK','CwPtve0','vMfuq1K','zxiTzxy','AxrPB24','mJqYlc4','zs5bCha','rfDtthq','zwv6zsa','s1bes3K','B2nRoYa','C3rYB2S','t0HLywW','B3n0zMK','AxvZoIa','sK1tqvC','BMCGzM8','zenOAwW','tvzgzM4','AwvSza','ida7igi','oYbTAw4','DxjH','icaUC2S','ChvZAa','ywz0zxi','nZaWia','CMvZDg8','C2v0','B3zLCMy','nYWWlJm','4Ocuig92zq','BguGAwy','Bg93oIa','zxnJ','yxmGBM8','tMfTzq','DeLWthy','yM91BMq','zwfK','q1rIvwm','EYaTD2u','zM9YBtO','DMfSDwu','A2uTBgK','ihDOAwm','yMfJA2q','lc4YnsK','mcaXChG','ig1PBM0','C3bLzwq','yxKGB24','Ec1KAxi','EYbIywm','ywWGBwu','lMrSBa','zwf0CYa','CMfKAxu','wxPZC2C','EvHkqw4','zgvYoIa','t3zLCNC','C2STC3C','lNnRlw0','pc9ZBwe','uMfWAwq','B25Lige','igvYCG','BgvZiem','CfjwA0y','i2zMnMi','ie9olG','ntuSlJa','BhKGkhi','zuPZEKG','C2v0ida','y29SB3i','yw1L','y2XHC3m','oYbVCge','l1jnqIa','u21zvLK','oYbMB24','ldeWnYW','EgfIr0y','C2f2zq','y2vdAgK','AwXLzdO','uMjbzLm','AgfPCG','A1fdrhm','igfUzca','wuHQDMC','s2v5uW','vvDnsYa','EdSGFqO','igLZigm','nIa2Bde','y2L0EtO','zxjYihS','zgLZCgW','BIb7igy','C2STyNq','zgLUzZO','Aw9F','tKCGlsa','t0rsyMC','D29YAYa','ntaLktS','AdOGnJi','tgTQz3q','yKTpC2O','EdSGz2e','Dg5LC3m','ywqGDg8','icnMzMy','lYbhCMe','BMf2','mJqWiey','lc4WncK','y2HLy2S','B2LS','CgXPy2e','wvvqzfu','y0XZq3a','ldiXlc4','zxjPDdS','nxb4oYa','Dgv4Dei','BNqGAxq','lsbVDMu','DgL0Bgu','mJq3nty0CgnjD1bj','yxv0BY0','Bw1rufC','rg90tuC','Bw8GDg8','lc4WnsK','BNrezwy','ysblB3u','kdaSmcW','Bg9HzgK','ig9Wywm','CM9WywC','CdOGmta','s2v5ra','idaGmJq','yxrPB24','EYbKAxm','ig1PBIG','AxrLBxm','zMXLEdS','wMrLB1i','oYb0CMe','zM9UDc0','Dgv4Dc0','qKL3tu8'];_0x2e0e=function(){return _0x4b1eb6;};return _0x2e0e();}
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
