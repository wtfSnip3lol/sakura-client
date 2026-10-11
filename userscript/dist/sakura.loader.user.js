// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.2.2
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
function _0x4ce1(){var _0x40c30e=['icaGic4','nJaWide','C3bLzwq','CLj3z3m','phbHDgG','vgnyC1K','z0v3rvu','zMLSBfm','vvDnsYa','z24Ty28','lwXPBMu','EuD5sfO','CMvHza','C2v0sxq','ihjNyMe','ntuSlJa','sNrcD0m','z2jHkdi','Axb0kq','zdSGy28','oYbVDMu','AwX0zxi','CZOGmty','ohWXnNW','AguGzNi','seX1qNq','qLb6AxG','lcbJywW','BwjVzhK','qxbWBhK','lIbvC2u','CM9ZC2G','AurTwNy','zwLUC3q','oJa7EI0','z2H0oIa','y3qGB24','B3i6iha','BwuG','C2v0x3q','mNm7Cg8','BKDWyMG','zwXK','A1bUy3e','DgG6idu','rxHW','yM90Dg8','Bg9NBY0','C2HVD24','AfnOywq','B3jZige','CJOGi2y','EI1PBMq','oIbJDxi','s2vcyNK','B2jlDKG','idi2ChG','u1vyC2y','ndHWEcK','uNvUDgK','AvLXzwq','Aw9UoMy','mtfWEca','CI51As4','ns00idC','v3vgB3K','EYbKAxm','EtOGz3i','C2v0qxq','yxnZAwC','CI1Yywq','q0LHu1e','A3nqB3m','q1bIt0G','lwHVCa','EwTTB00','Dw5PDhK','A1zYvNm','ysGYndy','Aw9U','ywqGD2G','mcWUntu','yuHgAvO','zxv6t20','zwfSDgG','lJv6iIa','igq9iK0','swHRswS','AgvZ','Bwf4','zMuGBw8','BhrPuKy','u3bHy2u','BMDL','DgLVBI4','rwXLBwu','Bw92zw0','B29RCYa','tfzMBvG','Bg9JAW','kYbmtui','CgfJAxq','uhzcrMy','z3jVDw4','sfvMEMu','DhLWzq','ifTfwfa','ihSGB3a','zxrLy3q','EcbYz2i','zw50oYa','CMvU','BffmCxm','CMLUz3m','CMvHzhK','z2D0ufq','Be1VDgK','tgvNAw8','CMfWAwq','z2v0rwW','Ag9VA04','BM9szwm','lwnVBhm','vw5PDhK','lMrSBa','nsWUmdm','DhKGjq','z2uUiei','nJiWChG','v0ftrca','DwvfugK','oIbJB2W','zxjYB3i','Dwj5yMq','vvDnsW','qxvby0i','AxrJAa','oIbPBMG','mdSGFqO','B1vxy2q','y2fSBa','r3PQqve','vgXYuMW','Bgu7igy','vKnHDuS','mJvWEdS','CxvLEMG','CZOGoha','sNvTCca','BwvUDca','BwLKzgW','ugn0','rLbtigm','lYbhCMe','mZbMq2LRChq','C2STBwi','s1jXD1a','i2zMzG','y3rPB24','q29TyMe','mciGCJ0','z3jHDMK','idqGnc4','Be1srve','wKjzshm','DZOGAw4','ldiZocW','sxrdDLe','z2v0sxq','mhWXFdq','Bg9Hzgu','w3nHA3u','CIbHzhy','BgfJzs0','BM9UztS','oYbMBgu','zMLUza','B3bHy2K','yw5Uywi','BhvYkdi','wefgvfe','ktSkica','icbIB3G','Aw5Uzxi','s2v5vW','C3bHBG','lxDPzhq','txbnqK4','BgLUzvq','C2fRDxi','CZOGy2u','z3jPzdS','lNnRlw0','zxiTCMe','ihrVide','ChvZAa','CMvJDa','ihLVDxi','ideYChG','y2PVCwO','igzVBNq','qNrcq3a','lMP1Bxa','t1PtteK','wNL3tvK','oIbJzw4','u2HHCNa','BMn0Aw8','qNDWv1m','B25JBgK','ANvTCfa','zwfKB3u','DgnOihq','rgLL','ihnVig4','lIbuDxi','B24Gzxy','idK5osa','yM9KEq','AwXnB3q','B290zxi','igvUDgK','vxH3ueq','AwDUlxm','EYbMB24','oIaXoYa','ieTLzxa','x19ZywS','ignHBgm','DhLSzq','CIGYmNa','wfPSBgK','CYbpsgu','CMvUDem','B3G9iJa','mdCSmtu','wKHgruK','BI13Awq','ignVBg8','Aw5WDxq','tg9JywW','tgLZDa','zxH0','lxnPEMK','ocKPoYa','Bg93oIa','AM9PBJ0','zw5HyMW','rNfTDNO','DgvTlxu','nsK7igi','mhWXFdi','C21HBgW','zvbSyxK','DNCGlsa','zMXLEdS','y2fWtw8','l3jHCgK','kdi1nsW','zgLZCgW','BfjHDgK','ihSGzM8','ihDLyxa','zxjSyxK','CKXsAwC','ltqTnY4','CMuGkfm','zfbbuLO','mxWZFdq','BwvsDw4','igzPBgW','AwvKigm','lwHLAwC','u0fgrsa','nJCXmdG5m3zuAwTVqq','tfjyueG','Ag9VA0m','idaGnha','ihWGz2e','zgL1CZO','Aw9F','C2fMzu0','yw1L','jYb0Agu','rgnKB2K','ifvUAxq','ANfmz2y','mJuPoYa','oI13zwi','BuvgCLO','lxK6ige','lwjVEdS','CgfKzgK','BMu7ige','yxK6igC','oIbUB24','y2uGB3y','lxj1BM4','zwfK','zc5VBIa','BvbMwgK','igLMig0','yMfJA2C','B2LUDgu','zxjPDdS','y2f0','mdSGBwK','BMX5kq','AguGCMu','BgLKzxi','D3jPDgu','EYbWB3m','mZuSmJq','ig1HCMC','Aw9FnZi','v01ligK','lMXHC3q','B2vZig4','y2HtAxO','zw50tgK','zw51ihi','ywiUywm','DgvZDa','zM9UDc0','A2v5Dxa','z29K','BYb0Agu','vfnmyuO','ocK7ih0','ie9olG','zuvSzw0','igH1CNq','AcaTidq','DMC+','oIbWB2K','sKHqCuC','B3vUzdO','Dgv4Dei','CNq7igC','C2STC2W','uK1c','ChG7igi','BNrLCI0','EtOGyMW','j3qGC3q','zg93oIa','B2LS','z29KicG','BMnL','C2zVCM0','ruz2q24','nde5oYa','teTswxe','lwL0zw0','s2rIA04','Egjhrhi','nsWUmdu','oIaWoYa','DdOGmZq','AwzRtLO','AM5wtxi','DhjHy2S','mtiGmJe','Cg9W','tKCGlsa','zdOGi2y','Aw5Zzxq','CJOGDgG','DMLLD0i','lc4WncK','ogD3t2vfvG','yw5ZzM8','BI1ZDwi','EMnKDxi','CMvSB2e','Ag9VA3m','Aw5Zsey','vg90ywW','zenOAwW','lxnJCM8','BwHLzNC','suDcs0e','uLrdDLG','y2TLzd0','DdOYnNa','v2zos2K','wMHYCMi','vg1Qzwy','oYbIywm','rNbZDNK','ls1W','oIa2mda','nYWUmsK','A1bdswm','rNjHBwu','zwn0oIa','BguGC3q','Bw92zvq','iokaLcb0zq','lc4WocK','BLbSyxq','zxjZ','BMC6idq','oYbWB2K','D2vIA2K','BdOGBM8','nJm2mdG4mKfJAhjQDa','Aw5NoIa','zJmY','Ehbkrxa','r2zxB2m','oYbVCge','uJOG','BMv2zxi','DgL0Bgu','lJjZoYa','sw5Zzxi','AwDUyxq','nsWYntu','y3K9iJe','oYbYAwC','BgvZiem','ohG5mc0','y2fWu2G','A2veAvC','z2fTzuW','zMLSBd0','s2LSBgu','EtOGmdS','CMzSB3C','ihSGD2K','CNLTv2e','vNfOAe0','CNzNy00','zsbJEd0','zw50CW','tM9kthy','vwzywei','AhvTyIa','mxb4ida','CgLlELi','DdOGmJG','qNvWuvC','A2uTBgK','AxrLiee','zxj2zxi','B2f0Eq','CZO6lxC','Dxm6ide','wfLxuwC','Aw50zxi','yxjPys0','BhrO','AY1Jyxi','ug1Srfu','sxP1v2S','sefLsNa','BMLUzW','AgvPz2G','AY1OAw4','C2STC3C','nYWWlJm','icaG','Dc1Myw0','zvKOmtG','yxj4r1m','BwLZyW','zgfTywC','CMeTA28','s3rRtKW','q29SB3i','A3nty2e','qLDIvhi','DxrVoYa','nxb4oYa','mtbWEdS','mtr8mtm','phn2zYa','igfSAwC','DhK6ic4','D2L0Ag8','BM9wrvO','nMvLzJi','DuPvqKq','zffxtKW','C2f0Dxi','idrWEca','icaGlNm','D2vVveq','zNDzwNy','u0HRB20','wgT5A3G','ihSGlxC','ifvxtuS','EcKGC2e','B2X1Dgu','Dhj1zq','zM9YBtO','Dg87ih0','Ec1OzwK','qunuAYa','Bw4TBg8','Aw4Sihq','AwXKigG','B25TB3u','u2rAyKq','yxa6idG','y29TyMe','Bgv4oIa','zvnAq2K','BgvMDa','iM5VBMu','nsKSida','B3nWywm','s1LQq2y','ChG7cIa','Ag1nB2q','yM9nAMq','AwXS','rfrHzMu','DgvYoYa','qxnZzw0','lwLVxYO','uIb2ms4','q3HkChG','C2STBwq','iJeUnsi','zxj5idi','vLvsyKG','t29NDMW','Ec1ZAge','ugTmAMK','zw50zxi','D2L0Aca','igjVCMq','s0Xut0e','CIGTlxa','tg9Hzgu','EYbIB3G','DgG6idG','m3W0FdC','CI1ZzwW','B25Lige','idiWmg0','zxPPzxi','zhbY','yxa6ide','AxrLBxm','C0PivNy','igHVB2S','Dw5Kzwq','BI1JB2W','nIaXoci','ywrK','FdH8nNW','ihn5C3q','pc9ZBwe','CIiSici','zxiGEYa','oxW0Fdi','Bw4TAa','CxzYu1y','Dgv4Dem','DxrNvuu','mxb4oYa','C2v0','ihn0CM8','vhDWBe4','zMXLEdO','CgfYC2u','zvj6vhu','D2fYBG','A2L0lxm','BNrLCJS','y2XLyxi','idaGmca','vwfKz2e','EdSGAgu','ohb4oYa','icaGlM0','zxqGmca','yxvSDa','DhjHBxa','BhvTBJS','BgvUz3q','zMLSBcW','i2zMnMi','lZ48l3m','DgHLihC','DMu7ihC','D2LKDgG','D29YAYa','D2fPDgK','q291BNq','yw5LBc4','zw1ZoIa','lwjHBNi','mtaWid0','CI52mq','ChjLDMu','EdSGBwe','nYWWlJC','lK92zxi','nYWWlJG','zwfKige','z3jHzgK','B246ihi','B0jdt0q','EhLqyxO','BMqGt0G','wuv6v2u','BNqTC2K','BLHPv2K','AKXXCwq','B24U','mJqYlc4','q2TYCxi','C3r5Bgu','D2rSzhu','C2vSzwe','Dw1UoYa','nJaWia','u2fRDxi','vKfduhy','Bw4Ty2W','yw5JztO','nNb4oYa','zvzHBhu','BwrLC2m','Awr0Aa','s3fpzfa','Bevvveu','CYaNzNu','y2LYy2W','ywXSig8','zIXZExm','oc00lJu','ide2ChG','CMXHEsa','C2u6Ag8','ihrOzsa','t1vsx18','Dw5RBM8','sw5PDgK','CxvLCNK','zgvZ','nxm0idi','yuzsD1K','kdaSmcW','ChG7igG','oIb0CMe','zxzLCNK','BgLUzvC','CM9WywC','yY0XlJu','ifjLy28','BgLJyxq','oYbKAxm','C2vYDMu','yJLKoYa','y3jLzw4','oNbVAw4','sxvqqwW','ysGYntu','C0vmB1m','DgG6ida','kdi0nIW','uMvZzxq','zxiGC2W','Bw92zq','sfD5yuq','zw1LBNq','DdOGoha','BNbuzvG','re9nq28','rM1dr3K','Bw4TDge','CMfPC2u','igLZigm','ugf0Aa','Aw1Llca','ywn0Axy','Dxnqwxa','rgX1ugC','ALbPzum','zMLSBa','DhLqy3q','Cg5wqxK','y29PBa','ruXmr3m','ltiUns0','tuLtu0K','yxjKlxq','AvPZuMG','vhnxCeK','DMfS','ys1JAgu','yxjNzxq','CMfUy2u','u0zxzwC','DxjDigG','zwjRAxq','oIaWide','D2HvAvy','y2n1CMe','tvbvuwO','yw5LBca','ywqUieK','oIbMBgu','BNnSyxq','zw50kcm','C3DPDgm','EMu6ide','lxnPEMu','C2XPy2u','AvngvLe','mJqSmtC','uMfdDgu','q2HiD0i','ysblB3u','ltjWEdS','ANPvruS','A2PkzwG','zxi7igC','DxDTAW','oYbJB2W','z2LMEq','ihSGzgK','u2nHBgu','CMDIysG','reDdr3i','vKL6t08','AhjSAKW','sKTVB08','ihWGrvi','yxnLBgK','u2vSzwm','z3jPzc0','C3rYAw4','Cg9PBNq','yuTVDxi','D0nVBg8','qwrIBg8','Cg9Uj3m','Bw4TC2K','AwzvwhK','ANzmzKO','B0PRu0i','igj1AwW','odaSmtK','C2STyNq','oMHVC3q','BI1SB2C','B3C6ida','DhjPyNu','ywXPz24','AwvSza','vgfRzxm','mhb4oYa','yMvS','mdbTCY4','DMvYBge','EgDjC2S','lwv2zw4','rK1jyNa','igzSzxG','nYWUmJG','ywPxBxa','v25rBfK','C2v0uhi','Dgv4Dc0','zwv6zsa','zgDpwK0','C3rLBMu','ufznsvq','BNrLBNq','C3rVCfa','tKCG4Ocuia','EhvUu1y','mNb4oYa','u2v0r2e','BgLNBG','zwXHDgK','B3vUzgu','q0LgBwi','ywLYlG','mcWWlJG','t0HLywW','oxWWFdu','mNb4ihu','BfHvsxG','BNrLEhq','B25PBNa','ys5RB3u','yxrLlwm','EhPWEKG','lc40ktS','rwLvAfy','AKDys2q','Ahq7igm','y2fSBhm','CMrLCJO','Dgv4Dee','CJOGCg8','Dg9W','ywqGDg8','AxnWBge','AgjbyM8','zguSihq','nMi5zci','ohb4ksK','BNrezwy','ihSGzMW','wMvYB2u','BgrYzw4','De1OEwG','uNDer0W','FqOGica','q3bvC2S','CML0zxm','y29YCuu','uLfNuuS','lc40nsK','igrPC3a','q3vZDg8','B2rLu3q','CNnrDw8','zJzIowq','txPPDhK','yxvSDca','tw9Kzsa','BMu7ihm','zcWGyw4','lc4WnsK','DgLKzvC','q3jVC3m','mJu1lc4','r0nqEfO','ihbHzgq','AwrHDgu','DgvTCZO','Bw4TDg8','yMHtEMm','mxWXmhW','tvHqr2y','A2rvtwS','B250zw4','BgPct3O','AujwqLm','B3bLCNq','tfvzr1u','C2vLBNq','icaUC2S','ktSGFqO','oIaXms4','BIb0Agu','sMPIr1m','ihbVC2K','yMHVCa','r29Kie0','y2HLy2S','BgfIzwW','oIaZChG','zwn0Aw8','BM1msM8','idfWEca','B3rOAw4','DgHVzca','rgfUz2u','sNrXvxC','mhG2mda','BgfZDeu','BNv5tKy','vu1qrKe','yMvQtMO','rMLLBgq','uuXHvNm','uu53uLq','ms4XlJa','BI1PDgu','DhjPA2u','Eca2ChG','uunJr2i','B25SEsW','yNrUoMG','Fdf8nhW','cIaGica','zvHiCe8','CZOGCMu','zg9JDw0','idrWEdS','Bw1VifS','ig5VigG','Aw4TD2K','mJG0sw93ANvL','DgHYB3C','AgvSza','BJOGy28','DMLHifm','u3rHDhu','CgfNzsa','q0zPC2S','zxG6ide','B3vUDc4','vfHOse8','ocWYndi','y2vSzxi','Aff5wK0','DgvYo3C','EM5uqw8','idaGmJq','mcbOB28','ig1PBM0','BhrLCJO','zw50','yYGXmda','ndGZnJq','lxnOywq','yMvNAw4','De5Vzgu','AdOGnJi','Dxblsg4','ig5VBMu','ksaXmda','igrHBwe','B3nLihS','uMHIC0y','ihSGy28','vvbLCuG','AgfPCG','CNvwsfm','rhbvy1O','CdOGmta','zxi6igi','ihbVAw4','icaGig8','lwrPCMu','DdSGFqO','oIa2nta','zw50rwW','qxbWBgK','ywnRz3i','Aw9FmZa','y2HdB2W','u2L6zq','ihSGyMe','ntuSmJu','ztOGmtC','vvjbx0S','Dw5KoIa','CMrLCI0','C2HHzg8','zgvSzxq','yxa6ihi','qNLjza','EhLlu2q','ihWGBw8','zxvnvLC','Dg9WoIa','ihDOAwm','nxWXmNW','yvL5tMe','idnWEdS','y2XHC3m','sMjVBgq','zsbZzxi','AwXLzdO','sgvPz2G','BhrOige','mJSGC3q','uMvJB2K','oIbYAwC','ChG7iha','yxbWBgK','t3PkqKq','yM90Aca','BMPMA2y','BhmGDgG','BIb7igi','zvbSDwC','q0LtrLm','BvfPs0K','DMvTzw4','ref6zei','AwrLCG','B3zLCMy','v2vItw8','mJu1ldi','yMLJlwi','mcuUifm','yM91BMq','DefnChm','q1fTwuG','teDJu2O','zMyP','ywrKAw4','lxjHzgK','oWOGica','B1jLy28','lw5VDgu','Bw91C2u','yMfYlxq','nsK7iha','BI5MAxi','rwfJAca','ohWZFdy','zwLNAhq','B3nPDgK','BMuUqxa','DhjVA2u','A2v5C3q','BM9Uzq','nZaWia','AgzhrMK','mhWZFde','Bw8GDg8','CYbpDMu','thrSs2q','zYb7igm','BsbJzw4','C3bSyxK','zg93BG','y2HPBgq','psjYB3u','uKHut0W','ig1HEsa','B1HlwKy','Dg5LC3m','Aw46ida','r3fjzKe','CvjMAfi','khjLBg8','t1nOB28','iezquW','y29SB3i','m3W0Fdu','DMfSDwu','BMq6ihi','tgvqDva','y2vZlG','vwXky0y','yNv0Dg8','Aw5KzxG','vLr6s1m','s1HftKO','DMLZDwe','zNbZ','zhrOoIa','B29Rihi','ignVB2W','A2v5zg8','yLnZAfe','DKX4yMy','DgG6idK','ienquW','s2v5uW','ywn0A0S','vMLZDwe','nwmWidm','uLvlrvq','AxnPyMW','vw9twwS','DgTMug0','z2vtBee','Bg93zxi','zvn0EwW','FdeXFdC','CM0GlJq','C3rYB2S','DgvJDgK','ywjSzs0','B3zLCIa','ueXkAKi','ihWGC2G','q296Exm','DML0Eq','zMy2yJK','zxmGEYa','AeDlsNy','zxG6mJe','DgL2zsa','DgXL','zvj1BM4','yxj0lG','CIbNyw0','CYbnB3y','u3zPwfy','ndu3nJy3mMrwu0TfuG','qM90Dg8','CMvjA0K','CMDPBI0','C1rkzMy','zuv4Ca','q3PgAKC','mhGYnta','C2STy28','wNH6t1y','mJiSocW','ztOGmtm','zgL2','v2LKDgG','AKnoBuu','wM9tCee','iNjVDw4','EePKu28','DgHPCYa','ys11Aq','B2LSicG','lsbVDMu','mJm4ldi','BNnLDca','yxbWzw4','uM92EM0','EYbSzwy','q3zvsNe','A2DYB3u','AfTHCMK','yxbWzwe','Ag9VA0C','oYbIB3i','CMfUC2K','yxrPB24','Bw4TDgK','BNq6igm','vuH1uwq','Ahq6idi','B3vUDgu','B2XVCJO','DtmY','ywrKrxy','C2STy3q','lwfWCgu','ldeWnYW','ihn0AwW','vgLJAW','DhKGDMe','vwr4wwO','DdOGnZa','CMPisMW','reTUDfO','CY1Zzxi','DMvYlxy','igXLyxy','z24TAxq','wMnQqxu','A3mGyxi','AguGDxm','igDHDgu','rgT1sxi','mZa5mJa5ngHts2X3Cq','C3rLCa','B2DcA1m','Fdb8nNW','uhvOtuG','CMvHzey','s2v5qq','oIbYz2i','CNjVCG','vMfSDwu','CMfUz2u','BMC6ida','z2DSzwq','sfrnta','tw92zw0','ktSGy3u','mtjWEca','oYbMB24','DgGUsw4','sgzxzKG','AffLq3i','BhvLCY4','oIbZDge','DhjHBNm','B250lxC','ig1PBIG','D2n3BMO','AtmY','zs5bCha','EdSGB3u','lNnRlxm','B3qGBwe','y2fUDMe','BI1TywK','yMX1CG','nc00lJu','Bw9fEha','zc10Axq','oIaYmNa','EtOGzMW','B3zLCMW','ztOGBM8','uMf0zq','lca1mcu','zwCGzMe','BhmGysa','DxjDig0','yM9Yzgu','zxrL','nsaWlti','yxKGB24','wMLfse0','txDnrhG','y3jVC3m','t0zgigi','ueLMtNa','DhvYyxq','iezPCMu','v1n6wLu','zZOGmNa','ig9Wywm','iJeYiIa','oIaZmNa','z2v0','ywXSzwq','y2HLCYa','AYbVBI4','mdSGy3u','AxvZoIa','CM9Szq','Dc1ZAxO','rgrUDMm','swnRzgm','mti2ntm5nfjyBNnpqq','q2LIuem','mIaXmK0','ic5ZAY0','v3rOzvC','zM9YBxm','rKn1vxq','ywDLigq','A2vizwe','igzVCIa','BKHRAhy','qNHbD0i','C2HVB3q','nZTWB2K','mtSGBwK','Bg9Hzc4','iefmtca','C3PesMS','A291CNm','CYbZChi','zxjZy3i','BM93','zgrPBMC','C2f2zq','iL0GEYa','CgXPy2e','z1fOq04','Bw4TAca','te1c','CMLNAhq','qMXVy2S','lxbHCMu','igvYCG','B2fKzwq','lcbPBNm','AgfZ','ldi1nsW','sxDIzeq','BNnPDgK','qurSDhe','mNb4ksa','CM91BMq','yxK6igy','lxnLCMK','iIbZDhi','Bw4TBwe','lsbHihm','CgfYzw4','Fdb8mNW','B246ig8','u2fMzsa','CMfKAxu','z2v0qxq','Aw4GC2e','mtySmc4','Agf0igq','Dxm6idi','y3nZvgu','D0jSDxi','yxjHBMm','zs1PDgu','ugHwywK','v0jbEeK','oIaJzJy','Fde0Fdy','sw5ZDge','owqIihm','ieDLDfy','DwT2tMC','r29Kl2q','DdOXmda','AxHLzdS','zsaOt0G','zgTPDa','Aw5Mqw0','vxLAAg4','y29Kzq','u2jmzeG','igP1Bxa','tMfTzq','zgjHsvu','vgj0AKu','CJSGz2e','nNW0FdC','Bxm6igm','vevNEwC','BwvKicG','icmYmJe','mtGGnIa','ChrKrwq','CMfUC3a','Awq7iha','zsb2ywW','Fdv8nhW','lcbZyw4','Bgf5oIa','EYaTD2u','igv4Axq','EdSGz2e','icaGica','zxrhyw0','tKfVrNm','lc4YnsK','nJa3q1bkAuXJ','EYbJB2W','vurUEKK','y2TNCM8','lwfWCgW','Ad0ImIi','BM90zs4','CM9Wlwy','B3jKzxi','oJiXndC','wM9isue','BfvlzNG','DwXqELe','t1f6CxG','oYbWywq','yxrLkde','ChbLBNm','s2v5ra','ic5TBI0','Cg9ZAxq','ALvyEwe','igfIC28','zxmGB24','ww5ltKG','BgW+','EM1hCLO','mdi1ktS','wLr1t2u','DMG7EI0','BMvJyxa','ihSGywW','BNPzC2W','BIb7igy','DgnOoJO','wxb6shy','DcbHihq','De9Pt3q','mJu1lde','B3b0Aw8','yMX5lum','sMvcB04','B2XPBMu','AdOGmZq','AwDODdO','DwHVzhO','uwn5Afy','oYbHBgK','A2XjyMu','ChGGDwK','igvSC2u','Bg9N','ywXSihq','zNrLCIa','CgXHEtO','zM9UDa','B2r5','ChG7igy','iKLUDgu','v3nLvM4','C2STy2e','ifvjiIW','ue5PC1K','igfUzca','mxb4ihi','mteUnxa','q1btihi','AwXSihK','wefMr2W','iL06oMe','mcWWlJu','ih0kica','u2vNB2u','rg1gCMW','C21JDg0','C2STBge','ideWChG','B2reAwu','B3vUzca','zMXLEc0','ieaG','z2rQAeG','v3jHCha','CdOGmti','Dg9Nz2W','CNnVrxi','BhKGkhi','zw51','sgvHBhq','rgfTywC','zxi6ida','BsbYAwC','m3WYFda','yxjLBNq','BwvZC2e','CYbLyxm','CMvZDg8','yxGOmJu','vvbZsee','ufmGDw4','rM9Yy2u','mNW1Fde','ntaLktS','z2fWoIa','uMvJDa','lxnHBNm','vfLhDwy','B3i6ihi','ihrVCdO','nsWUmdC','BtOGnNa','oIbIBhu','CLvvzhu','EYbIywm','ign1CNm','AY12ywW','u2TPChm','zg93BIa','A291CI0','mcaWida','mtSGyMe','suLYt2y','ywWGBwu','q3nYBvy','ltiUnsa','y29UDgu','4Ocuig92zq','AxPLoIa','nIa2Bde','EdSGyM8','BsbSzwy','yKvyshi','icaUBw4','lM1Ulxm','zw50CZO','zIbTyxq','igf1Dg8','lwzPBhq','t0XzzxG','igjHy2S','zcWGi2y','wM9lr0C','icaGzgK','s2D6zuq','Awr0AdO','oIa4ChG','r2HRr2u','C2STBM8','yxb0Dxi','EuvUz2K','DgvY','CM9Rzxm','ndySmJm','qujlywK','ig5LDMu','A3ndChm','ic40oYa','zxG7ige','AsXZyw4','EdSGyMe','C3n3A1O','B2rL','lxrPDgW','yxrLvge','ug9ZAxq','B25JAge','mty2mdqWAxbkrxDx','y2vUDgu','DdOGnNa','D2vPz2G','CYb3B24','igjVEc0','BM9tChi','DgG6idi','B3C6igK','ktSGBwe','sxnhCM8','C3bSAxq','y05gDKO','ywrPDxm','AwvZlG','BhDkr1O','BMCGzM8','BgWGBwu','zgv2Awm','AwnRihm','i2zMzJS','oYb0CMe','psjTBI0','psiJzMy','sxHJEey','igTVDxi','Ag9VA1a','DMvYihS','y3jLyxq','zMLSBfq','shb2thy','mNb4o3i','zNvSBhm','mtjWEdS','sLHTExa','DgLKzs4','z29KrgK','BMqIihm','oYb9cIa','uu1bvNm'];_0x4ce1=function(){return _0x40c30e;};return _0x4ce1();}function _0x5846(_0x18bedd,_0x2a3bb0){_0x18bedd=_0x18bedd-(0x90*-0x3+0x7*0x2ff+-0x125c);var _0x25a4d3=_0x4ce1();var _0x237dce=_0x25a4d3[_0x18bedd];if(_0x5846['BODHof']===undefined){var _0x4dcded=function(_0x146e4a){var _0x28f647='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x40553f='',_0x33f3a2='';for(var _0x20291d=0xacd+0x472+-0x515*0x3,_0x152368,_0x52bd92,_0x1d77ff=0x12*0x99+-0x6*0x1b1+-0x9c;_0x52bd92=_0x146e4a['charAt'](_0x1d77ff++);~_0x52bd92&&(_0x152368=_0x20291d%(0xa*0x296+-0xf0c*-0x2+-0x37f0)?_0x152368*(0x4e7*0x5+0x126e+-0x2ab1)+_0x52bd92:_0x52bd92,_0x20291d++%(-0x8ac+0x20b8+-0xc04*0x2))?_0x40553f+=String['fromCharCode'](0x1acc+-0x222b+0x11*0x7e&_0x152368>>(-(0x1*0x1f45+0x2231+-0x4174)*_0x20291d&0x216f+-0x1206+-0xf63)):-0xf81+-0x1d85+0x2d06){_0x52bd92=_0x28f647['indexOf'](_0x52bd92);}for(var _0x52fb0e=-0x1819+-0xb*0x7d+0x148*0x17,_0x1a81f0=_0x40553f['length'];_0x52fb0e<_0x1a81f0;_0x52fb0e++){_0x33f3a2+='%'+('00'+_0x40553f['charCodeAt'](_0x52fb0e)['toString'](-0xde+-0x6b*-0x2c+-0x1176))['slice'](-(0xff0+-0x106*-0x17+-0x2778));}return decodeURIComponent(_0x33f3a2);};_0x5846['CplHbM']=_0x4dcded,_0x5846['BegqUM']={},_0x5846['BODHof']=!![];}var _0x50a7d5=_0x25a4d3[-0x6*-0x633+0x195*-0x2+0x6*-0x5ac],_0x1c2ede=_0x18bedd+_0x50a7d5,_0x2d792f=_0x5846['BegqUM'][_0x1c2ede];return!_0x2d792f?(_0x237dce=_0x5846['CplHbM'](_0x237dce),_0x5846['BegqUM'][_0x1c2ede]=_0x237dce):_0x237dce=_0x2d792f,_0x237dce;}(function(_0x3ab457,_0x2de05b){var _0x583f0e=_0x5846,_0x495d12=_0x3ab457();while(!![]){try{var _0x4ccdf4=parseInt(_0x583f0e(0x596))/(-0x2de*0x1+0x1*0x141b+-0x1*0x113c)*(-parseInt(_0x583f0e(0x3e7))/(-0x7*0x158+-0xf50+0x6*0x41f))+-parseInt(_0x583f0e(0x52f))/(-0x2417+-0x613*-0x5+-0xa3*-0x9)*(parseInt(_0x583f0e(0x1db))/(0x1cf9+-0x32*-0xc1+-0x42a7))+-parseInt(_0x583f0e(0x63b))/(-0x70e+-0x10d3+-0x1b5*-0xe)+-parseInt(_0x583f0e(0x1ff))/(-0x574*-0x3+0xe*-0xa3+0x19*-0x4c)+parseInt(_0x583f0e(0x17b))/(0x1*0xa97+-0x342+-0x16*0x55)+parseInt(_0x583f0e(0x4a8))/(0xdb4+0x2609+0x1ab*-0x1f)+parseInt(_0x583f0e(0x4e6))/(-0x160*-0x1b+0xc25+-0x4*0xc4f)*(parseInt(_0x583f0e(0x103))/(-0x11c9+0xbf0+0x5e3));if(_0x4ccdf4===_0x2de05b)break;else _0x495d12['push'](_0x495d12['shift']());}catch(_0x31b990){_0x495d12['push'](_0x495d12['shift']());}}}(_0x4ce1,-0x93478+0x282e6+0xee872),((()=>{'use strict';var _0x2bac18=_0x5846,_0x15fca0={'QcyhV':function(_0x4a4350,_0x1c8b88){return _0x4a4350===_0x1c8b88;},'yGyHZ':'aIpzp','ifUXy':'sakur'+_0x2bac18(0x382)+'r.v1','oBCOD':'gWGfq','XCdOn':_0x2bac18(0x2eb)+'wn','IxcxF':function(_0x171b3d,_0x543f26){return _0x171b3d+_0x543f26;},'ZcjAu':function(_0x28706e,_0x49cab9){return _0x28706e(_0x49cab9);},'XAfGl':function(_0x139e53,_0x2eb1b4,_0x2d9bdc){return _0x139e53(_0x2eb1b4,_0x2d9bdc);},'RHTOL':_0x2bac18(0x6c3)+_0x2bac18(0x21c),'IqsLv':_0x2bac18(0x114)+_0x2bac18(0x23d)+'ur]\x20h'+_0x2bac18(0x481)+_0x2bac18(0x512)+'iled:','jvLfJ':function(_0x593695,_0x309ce2){return _0x593695+_0x309ce2;},'Mzity':_0x2bac18(0x54f),'TEgyg':function(_0x104f22,_0x13f9c3){return _0x104f22!==_0x13f9c3;},'Aostv':_0x2bac18(0x26b),'jsDkX':function(_0x724888,_0x56dca8){return _0x724888<_0x56dca8;},'megfa':'u32','myCBO':function(_0x332b9e,_0x5ae1aa){return _0x332b9e!=_0x5ae1aa;},'pfNts':function(_0x109b95,_0x15011e){return _0x109b95/_0x15011e;},'iSFVQ':function(_0x42393f,_0x54bd96){return _0x42393f+_0x54bd96;},'TYGuf':'600\x20','PhVai':function(_0x5c81fa,_0x42d32e){return _0x5c81fa*_0x42d32e;},'GqIfA':function(_0x427ea1,_0x5d314f){return _0x427ea1+_0x5d314f;},'tAMps':_0x2bac18(0x342)+_0x2bac18(0x444)+'35,24'+_0x2bac18(0x37b)+')','MwMDx':_0x2bac18(0x342)+_0x2bac18(0x5bb)+_0x2bac18(0x154)+'7,0.3'+'5)','cjoqj':_0x2bac18(0xff)+'e','LUYGU':function(_0xa1adca,_0x3c7693){return _0xa1adca+_0x3c7693;},'qEHaW':_0x2bac18(0x3a3),'IwbdD':_0x2bac18(0x53b)+'ers','dPARZ':function(_0xa71071,_0x57433e,_0x169332,_0x502954,_0x3c02df){return _0xa71071(_0x57433e,_0x169332,_0x502954,_0x3c02df);},'OYVRP':_0x2bac18(0x36d),'JtqUw':_0x2bac18(0x501),'upKHn':_0x2bac18(0x3d7),'ABKai':_0x2bac18(0x272)+_0x2bac18(0x5bd)+_0x2bac18(0x137)+'.dll','PVMIT':_0x2bac18(0x645)+_0x2bac18(0x28f),'JeBoN':'Initi'+'ateTa'+_0x2bac18(0x537)+_0x2bac18(0x22d),'aFRwY':function(_0x268c47,_0x4e94a5,_0x29d8e7,_0x33409c,_0x4315a9,_0x37fa4a,_0x5f54b8,_0x507ba8){return _0x268c47(_0x4e94a5,_0x29d8e7,_0x33409c,_0x4315a9,_0x37fa4a,_0x5f54b8,_0x507ba8);},'CpUsk':_0x2bac18(0x6d8)+'nPlat'+_0x2bac18(0x534)+'.Over'+_0x2bac18(0x65e)+_0x2bac18(0x433)+_0x2bac18(0x6d7)+'on','TSLaJ':function(_0x53e9f0){return _0x53e9f0();},'rLRig':_0x2bac18(0x6dc)+'oil','YnKNH':_0x2bac18(0x47a)+'n','OZSLI':function(_0x349c36,_0x46f0ba){return _0x349c36!==_0x46f0ba;},'KdbkN':'DCFnl','WmLEj':'XelsH','vLxbf':function(_0xbe67ab,_0x21f3a1){return _0xbe67ab!==_0x21f3a1;},'hbAbo':function(_0x22adcc,_0x1ed06e){return _0x22adcc!==_0x1ed06e;},'WtheW':function(_0x417ac5,_0x3aa437){return _0x417ac5===_0x3aa437;},'jGXKd':_0x2bac18(0x37f),'Ckrqr':function(_0x45c9af,_0x2a8e43,_0x24973f,_0x415524,_0x1b81c9){return _0x45c9af(_0x2a8e43,_0x24973f,_0x415524,_0x1b81c9);},'VwSgY':function(_0x479fe0,_0x7ebe70,_0x4a8102,_0x1089dd,_0xba7a84){return _0x479fe0(_0x7ebe70,_0x4a8102,_0x1089dd,_0xba7a84);},'nGpbh':function(_0x125daa,_0x4eb677,_0x4b4b8d,_0x21b106,_0x3c102f){return _0x125daa(_0x4eb677,_0x4b4b8d,_0x21b106,_0x3c102f);},'onrOT':'f32','Oogvl':function(_0x1d7f75,_0x553d5c,_0xca177d,_0x6e66f1,_0x2f7356){return _0x1d7f75(_0x553d5c,_0xca177d,_0x6e66f1,_0x2f7356);},'mQiKI':function(_0x398071,_0x4ed339,_0xfd4697,_0x259493,_0xaa2b86){return _0x398071(_0x4ed339,_0xfd4697,_0x259493,_0xaa2b86);},'xyPaz':'JxJcJ','xRnbS':function(_0x2b6139,_0x114097,_0x4bf8af,_0x5a1dd3,_0x2b0f06){return _0x2b6139(_0x114097,_0x4bf8af,_0x5a1dd3,_0x2b0f06);},'ifkNZ':function(_0x7c8d74,_0x57097b,_0xdbea44,_0x336076,_0x424fa4){return _0x7c8d74(_0x57097b,_0xdbea44,_0x336076,_0x424fa4);},'EdIep':_0x2bac18(0x57a),'QQlny':function(_0x171a41,_0x2cf0c4){return _0x171a41+_0x2cf0c4;},'nXiWi':function(_0x3266dd,_0x23c0c1){return _0x3266dd!==_0x23c0c1;},'zcdur':'DBmqt','qRfhR':function(_0x87d734,_0x51782b){return _0x87d734+_0x51782b;},'QMAVs':_0x2bac18(0x483)+'wn','OzJBD':_0x2bac18(0x1ad),'mhlMb':'mouse'+'up','CvUJq':_0x2bac18(0x508),'mhefw':function(_0x2ec0d6,_0x18d668){return _0x2ec0d6-_0x18d668;},'jUXya':_0x2bac18(0x48e),'TwplN':function(_0x248689,_0x3ab709){return _0x248689===_0x3ab709;},'LKkYM':'inter'+_0x2bac18(0x312)+'e','xgIsk':function(_0xd3a60b,_0x268237){return _0xd3a60b===_0x268237;},'CIaSQ':function(_0x1952e9,_0x4979ae){return _0x1952e9(_0x4979ae);},'mPfXi':_0x2bac18(0x4b4),'Detph':'sk-ra'+_0x2bac18(0x6c0),'noVEZ':_0x2bac18(0x158),'PkLji':_0x2bac18(0x4f0),'OQzqx':'sk-va'+'l','sDxSe':'#ff6b'+'9d','euMVW':_0x2bac18(0x4b0)+'lor','ZSbso':_0x2bac18(0x4d3)+'l','MWDLj':_0x2bac18(0x5e0)+_0x2bac18(0x360),'BPzix':'sk-hi'+'nt','OGprs':'sk-ca'+'rd','BWbTr':'sk-ca'+'rd-he'+'ad','insHF':_0x2bac18(0x5d1)+'rd-ti'+_0x2bac18(0x4a2),'ljBOz':_0x2bac18(0x2df),'fKeye':'zvACQ','ukvNg':_0x2bac18(0x28e)+'s','boMjd':'\x20|\x20ga'+_0x2bac18(0x689),'NAoFs':'mn-pa'+'nel','CibPC':_0x2bac18(0x246)+_0x2bac18(0x1d9)+'ox=\x220'+_0x2bac18(0x3f7)+'\x2024\x22\x20'+_0x2bac18(0x42c)+_0x2bac18(0x651)+_0x2bac18(0x692)+'svg\x22>'+'<path'+_0x2bac18(0x6b9)+_0x2bac18(0x1d3)+_0x2bac18(0x2f7)+_0x2bac18(0x31b)+_0x2bac18(0x509)+_0x2bac18(0x172)+_0x2bac18(0x517)+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x2bac18(0x2ef)+_0x2bac18(0x10b)+_0x2bac18(0x48b)+_0x2bac18(0x611)+_0x2bac18(0x6a3)+'.5z\x22\x20'+_0x2bac18(0x213)+_0x2bac18(0x268)+_0x2bac18(0x55b)+'oke=\x22'+'#ff6b'+_0x2bac18(0x571)+'troke'+_0x2bac18(0x123)+_0x2bac18(0x59b)+_0x2bac18(0x29f)+_0x2bac18(0x224)+'necap'+_0x2bac18(0x468)+'nd\x22\x20s'+'troke'+_0x2bac18(0x66d)+_0x2bac18(0x15f)+'\x22roun'+'d\x22/><'+_0x2bac18(0x2e2)+'e\x20cx='+_0x2bac18(0x523)+'cy=\x221'+_0x2bac18(0x109)+'\x221.5\x22'+'\x20fill'+_0x2bac18(0x652)+_0x2bac18(0x392)+_0x2bac18(0x2b4)+'vg>','RrNKb':_0x2bac18(0x55c)+'in','eSZCi':_0x2bac18(0x4cb)+'tles','rvgcM':_0x2bac18(0x165),'Fpsvy':'mn-su'+'b','BxAwB':_0x2bac18(0x541)+_0x2bac18(0x3d9)+'.io\x20m'+_0x2bac18(0x5ec),'yCPUS':_0x2bac18(0x2d9)+'ose','QCcGb':_0x2bac18(0x246)+_0x2bac18(0x1d9)+_0x2bac18(0x153)+'\x200\x2024'+'\x2024\x22>'+_0x2bac18(0x667)+'\x20d=\x22M'+_0x2bac18(0x615)+_0x2bac18(0x531)+_0x2bac18(0x587)+_0x2bac18(0x291)+_0x2bac18(0x2b4)+_0x2bac18(0x1b6),'wcwnj':function(_0xce2943,_0x53f0fe){return _0xce2943+_0x53f0fe;},'LePuP':function(_0x5a7d97,_0x12f809){return _0x5a7d97===_0x12f809;},'cNFvJ':function(_0x118906,_0x270f22){return _0x118906!==_0x270f22;},'UVzOJ':'QuSVA','KLTOA':function(_0x28886b){return _0x28886b();},'IzuWk':function(_0x3c9e4b){return _0x3c9e4b();},'hTTXn':_0x2bac18(0x668),'klIbe':_0x2bac18(0x342)+_0x2bac18(0x5bb)+'07,15'+_0x2bac18(0x2c4)+'5)','NoJLv':_0x2bac18(0x328),'boFnI':'#fff','sswkZ':function(_0x4a2c56,_0x30199f,_0x3978f4,_0x4e1b78,_0x404060,_0x332f17,_0x446d60){return _0x4a2c56(_0x30199f,_0x3978f4,_0x4e1b78,_0x404060,_0x332f17,_0x446d60);},'aBEoT':_0x2bac18(0x121),'Uadga':function(_0x54d0e1,_0x2f7bdf,_0x2b70c5,_0x45d675,_0x522ab3,_0x33a311,_0x179e36){return _0x54d0e1(_0x2f7bdf,_0x2b70c5,_0x45d675,_0x522ab3,_0x33a311,_0x179e36);},'sELoS':function(_0x28b7c8,_0x5f4d98){return _0x28b7c8*_0x5f4d98;},'UMPFA':_0x2bac18(0x54b),'UdxYj':_0x2bac18(0x487),'MXPGf':_0x2bac18(0x6bf),'QzDHS':_0x2bac18(0x285)+_0x2bac18(0x55f)+'1|8|9'+'|6|5','DKntZ':_0x2bac18(0x38d),'iAkVX':_0x2bac18(0x664)+_0x2bac18(0x37e)+'i-mon'+_0x2bac18(0x26a)+'e,mon'+'ospac'+'e','jPieC':_0x2bac18(0x259),'CRhfZ':function(_0xb577cc,_0x464c79){return _0xb577cc+_0x464c79;},'PLJjB':function(_0x3c7f5f,_0x84bbaa){return _0x3c7f5f+_0x84bbaa;},'zEhyQ':'Statu'+'s','FMIbp':function(_0x306e2d,_0x956d7d,_0x148dcc,_0x10d0e1){return _0x306e2d(_0x956d7d,_0x148dcc,_0x10d0e1);},'ZoKGG':_0x2bac18(0x6c9),'UxwPD':_0x2bac18(0x30d)+'b','nzYsl':function(_0x135c79){return _0x135c79();},'YpzHv':'style','SEcxl':function(_0x1ec131,_0x3bddab){return _0x1ec131===_0x3bddab;},'xbGDr':'SFWeg','eYMei':function(_0x254ed5,_0x81b644,_0x5dccaa,_0x163b21,_0x1d39f4,_0x414904){return _0x254ed5(_0x81b644,_0x5dccaa,_0x163b21,_0x1d39f4,_0x414904);},'dbaIU':_0x2bac18(0x609)+_0x2bac18(0x2f8)+_0x2bac18(0x144)+'ion.T'+_0x2bac18(0x64e)+_0x2bac18(0x1af)+'\x20reco'+'il\x20sp'+_0x2bac18(0x6d4)+_0x2bac18(0x62f)+_0x2bac18(0x115)+'ance.','ItCvQ':'If\x20re'+'loads'+_0x2bac18(0x4d6)+'l\x20dra'+_0x2bac18(0x25f)+'he\x20de'+'creme'+'nt\x20ha'+_0x2bac18(0x5a6)+_0x2bac18(0x5c7)+'where'+'.','PIfNp':_0x2bac18(0x341)+'s\x20Mov'+_0x2bac18(0x308)+_0x2bac18(0x133)+_0x2bac18(0x5f9)+_0x2bac18(0x5d4)+_0x2bac18(0x438)+'gravi'+_0x2bac18(0x4d8)+_0x2bac18(0x4fb),'GKORe':function(_0x72488d,_0x8a10e6,_0x3dd365,_0x10fa79){return _0x72488d(_0x8a10e6,_0x3dd365,_0x10fa79);},'hGKJv':_0x2bac18(0x101)+_0x2bac18(0x4cf)+'r','SYzaj':function(_0x568b97,_0x3e7378,_0x449105){return _0x568b97(_0x3e7378,_0x449105);},'Mbrpm':'no\x20ch'+'eats\x20'+_0x2bac18(0x2b8)+_0x2bac18(0x249)+'ut\x20th'+'is','MPUQj':'Wipe\x20'+'my\x20se'+'tting'+'s','ZTuOe':_0x2bac18(0x5a9)+'ion:f'+_0x2bac18(0x576)+'inset'+':0;wi'+'dth:1'+'00vw;'+_0x2bac18(0x233)+_0x2bac18(0x575)+_0x2bac18(0x5b2)+_0x2bac18(0x47b)+_0x2bac18(0x59f)+_0x2bac18(0x3fd)+'6;poi'+'nter-'+'event'+'s:non'+'e','ykmoM':_0x2bac18(0x126)+_0x2bac18(0x4bb),'YWhAa':_0x2bac18(0x5a9)+_0x2bac18(0x6a0)+'ixed;'+_0x2bac18(0x1d7)+_0x2bac18(0x685)+_0x2bac18(0x47b)+_0x2bac18(0x59f)+'48364'+_0x2bac18(0x53c)+_0x2bac18(0x1bf)+'event'+'s:non'+'e;','OLYex':_0x2bac18(0x306),'hrHha':_0x2bac18(0x47e)+'l','ogBkS':_0x2bac18(0x48a)+'l','aecyO':'misc','RUKET':'Safet'+'y','cGjTS':_0x2bac18(0x2d7)+_0x2bac18(0x338)+'r','RTCvX':_0x2bac18(0x60e),'ZiEHM':'god','AuAcB':_0x2bac18(0x65f)+'e','UDnzI':'OHeal'+'th','VCauK':_0x2bac18(0x159)+_0x2bac18(0x13e),'MxOeh':_0x2bac18(0x4d7),'HAeJp':_0x2bac18(0x471)+'ter','xunSV':'capMo'+'ve','WnQlY':_0x2bac18(0x114)+_0x2bac18(0x23d)+'ur]\x20U'+_0x2bac18(0x1a4)+'nit\x20f'+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x2bac18(0x1ab)](location['hostn'+_0x2bac18(0x183)]||''))return;if(window['__SAK'+_0x2bac18(0x41d)+_0x2bac18(0x2ea)])return;window['__SAK'+'URA_K'+'OUR__']=!![];var _0x2e0fe4='#ff6b'+'9d',_0x1358b2='#ffb3'+'c6',_0x388cf1={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x2bac18(0x2b3)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x47afe6={..._0x388cf1};try{Object['assig'+'n'](_0x47afe6,JSON[_0x2bac18(0x2a2)](localStorage[_0x2bac18(0x111)+'em'](_0x2bac18(0x126)+'a.kou'+_0x2bac18(0x2bf))||'{}'));}catch(_0x22a8a0){}function _0x11e412(){var _0x1d8463=_0x2bac18;try{_0x15fca0['QcyhV'](_0x15fca0[_0x1d8463(0x66e)],_0x1d8463(0x17c))?(_0xc4a1f8[_0x1d8463(0x23c)+_0x1d8463(0x4ad)]=_0xa4ab39,_0xa70644()):localStorage[_0x1d8463(0x670)+'em'](_0x15fca0[_0x1d8463(0x352)],JSON[_0x1d8463(0x34b)+_0x1d8463(0x33f)](_0x47afe6));}catch(_0x571cd0){}}var _0xa83068={'uwmk':!!window[_0x2bac18(0x6de)+'WebMo'+_0x2bac18(0x578)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x47afe6['safeM'+'ode'],'lastError':''};try{if(_0x15fca0[_0x2bac18(0x584)](_0x15fca0['RTCvX'],_0x15fca0[_0x2bac18(0x1e7)])){var _0x2f2010=new _0x3dd6b8(_0x17b24f)[_0x2bac18(0x4eb)+_0x2bac18(0x35d)](_0x436b00,_0x2bac18(0x4d1));return _0x2f2010?_0x2f2010['val']():0x14a+0x9ac+-0xaf6;}else window['addEv'+_0x2bac18(0x1a8)+_0x2bac18(0x36e)+'r']('error',_0x36ba9a=>{var _0x53152b=_0x2bac18;if(_0x15fca0[_0x53152b(0x2c8)]==='gWGfq')try{var _0x5e33ca=_0x36ba9a&&(_0x36ba9a[_0x53152b(0x5f3)+'ge']||_0x36ba9a[_0x53152b(0xed)]&&_0x36ba9a[_0x53152b(0xed)]['messa'+'ge'])||_0x15fca0['XCdOn'];if(_0x36ba9a&&_0x36ba9a['filen'+'ame'])_0x5e33ca+=_0x15fca0['IxcxF'](_0x53152b(0x5e5)+_0x15fca0[_0x53152b(0x4e1)](String,_0x36ba9a['filen'+_0x53152b(0x183)])[_0x53152b(0x646)]('/')[_0x53152b(0x1d4)]()+':',_0x36ba9a['linen'+'o']||'?');_0xa83068[_0x53152b(0x3d0)+'rror']=String(_0x5e33ca)[_0x53152b(0x333)](-0x1*0x1777+0x18d3+-0x15c,-0x1c32+-0xbf1+0x28c3*0x1);}catch(_0x447630){}else return _0x309c39['warn']('[saku'+'ra-ko'+_0x53152b(0x325)+'ook\x20r'+_0x53152b(0x512)+'iled:',_0x1dea8b,_0x3590a1&&_0x35fb69[_0x53152b(0x5f3)+'ge']),null;});}catch(_0xff3292){}var _0x1508a9=null,_0x467b9b=null,_0x260f0d={},_0x2a5971=[],_0x3b4304=[],_0x325005=new Map();function _0x1cfae1(_0x598fff,_0x474a20){var _0x3185ea=_0x2bac18;if(!_0x474a20||_0x598fff['inclu'+_0x3185ea(0x2ee)](_0x474a20)||_0x598fff['lengt'+'h']>0x1327+-0x3*0x98f+0x8b*0x12)return;_0x598fff['push'](_0x474a20);}function _0xd536fa(_0x1afc2e,_0x234541,_0x4d68bd,_0x1e2185){var _0xa0143c=_0x2bac18,_0x2d0562=-0x227d+0x2603+-0x29*0x16;try{_0x2d0562=_0x234541&&_0x234541[_0xa0143c(0x320)]?_0x234541[_0xa0143c(0x320)]():0x9f2+-0x2167+-0x5*-0x4b1;}catch(_0x5079bd){}if(!_0x2d0562)return;_0x15fca0['XAfGl'](_0x1cfae1,_0x1afc2e,_0x2d0562),_0x4d68bd[_0x1e2185]=_0x1afc2e[_0xa0143c(0x2b1)+'h'];if(_0x1e2185===_0x15fca0[_0xa0143c(0x469)]&&_0x1afc2e['lengt'+'h']){var _0x5e2b74=_0x260f0d['capMo'+'ve'];if(_0x5e2b74)try{_0x5e2b74[_0xa0143c(0x160)+'ed']=![];}catch(_0x4f0e6a){}}}function _0x357762(_0x8721c5,_0x11ba81,_0x3cf6f5){var _0x5880f9=_0x2bac18,_0x508956={'QNwRT':function(_0x385e45,_0x1d85f5){var _0x308ee8=_0x5846;return _0x15fca0[_0x308ee8(0x353)](_0x385e45,_0x1d85f5);},'Tmjef':_0x5880f9(0x628)+'te','NqZrh':_0x15fca0[_0x5880f9(0x3a5)]};if(_0x15fca0[_0x5880f9(0x584)](_0x5880f9(0x6b5),_0x5880f9(0x6b5)))try{var _0x4dcc16=_0x22c7e9[_0x5880f9(0x655)+'ostfi'+'x']({'typeName':_0x375ced,'methodName':_0xf935f1,'params':_0x4eb9b2,'returnType':_0x43336f},_0x38a62d);return _0x4dcc16['enabl'+'ed']=_0x217af0!==![],_0x5a969a[_0x1c8f43]=_0x4dcc16,_0x4454df[_0x5880f9(0x1e0)+_0x5880f9(0x1e2)]++,_0x4dcc16;}catch(_0x19e406){return _0x733e64['warn'](_0x15fca0['IqsLv'],_0x291496,_0x19e406&&_0x19e406['messa'+'ge']),null;}else{var _0x5641e9=_0x325005[_0x5880f9(0x525)](_0x8721c5);if(!_0x5641e9){if(_0x5880f9(0x6be)===_0x15fca0['Aostv']){var _0x562c90=_0x17e683[_0x5880f9(0x657)+'eElem'+_0x5880f9(0x3fb)]('div');return _0x562c90[_0x5880f9(0x42c)+_0x5880f9(0x57e)]=_0x508956[_0x5880f9(0x3d6)](_0x508956[_0x5880f9(0x1ec)],_0x33ab16?_0x508956['NqZrh']:''),_0x562c90[_0x5880f9(0x29b)+_0x5880f9(0x3b7)+'t']=_0x2e9d4f,_0x562c90;}else _0x5641e9=new Map(),_0x325005[_0x5880f9(0x29e)](_0x8721c5,_0x5641e9);}if(!_0x5641e9[_0x5880f9(0x552)](_0x11ba81))try{var _0x25440a=new _0x1508a9(_0x8721c5)['readF'+'ield'](_0x11ba81,_0x3cf6f5);_0x5641e9['set'](_0x11ba81,_0x25440a!==undefined?_0x25440a[_0x5880f9(0x320)]():null);}catch(_0xb55deb){_0x5641e9[_0x5880f9(0x29e)](_0x11ba81,null);}return _0x5641e9[_0x5880f9(0x525)](_0x11ba81);}}function _0x431a71(_0x237433,_0x410fbd,_0x411971,_0x413c02){var _0x3738a9=_0x2bac18;try{new _0x1508a9(_0x237433)[_0x3738a9(0x19f)+_0x3738a9(0x3d4)](_0x410fbd,_0x411971,_0x413c02);}catch(_0x54b95c){}}function _0x563b2e(_0x4da32a,_0x3885be){var _0x2f9b4d=_0x2bac18,_0x1763eb={'UtKJW':_0x2f9b4d(0x60b)+_0x2f9b4d(0x417)+_0x2f9b4d(0x4af)+_0x2f9b4d(0x54e)+'nt','SUXsf':_0x2f9b4d(0x60b)+_0x2f9b4d(0x1a3)+'8x90-'+'paren'+'t','nuyNF':'fulls'+_0x2f9b4d(0x2fd)+_0x2f9b4d(0x2bd)+'s','HLuBt':function(_0x4db63e,_0x566fbc){return _0x15fca0['jsDkX'](_0x4db63e,_0x566fbc);},'ptdEd':function(_0x133dc5,_0x1268e4){return _0x133dc5===_0x1268e4;}};try{var _0x115cfc=new _0x1508a9(_0x4da32a)['readF'+'ield'](_0x3885be,_0x15fca0['megfa']);return _0x115cfc?_0x115cfc[_0x2f9b4d(0x320)]():-0x7bd*-0x1+0x4b+0x8*-0x101;}catch(_0x33211d){if('DDXMA'!==_0x2f9b4d(0x343))return 0x14ed+-0x4*-0x4+-0x14fd;else for(var _0x5244b8 of[_0x1763eb['UtKJW'],_0x1763eb[_0x2f9b4d(0x69c)],_0x2f9b4d(0x60b)+_0x2f9b4d(0x417)+_0x2f9b4d(0x3cf)+_0x2f9b4d(0x54e)+'nt',_0x1763eb[_0x2f9b4d(0x3d1)]]){var _0x4234ac=_0x163cea[_0x2f9b4d(0x6da)+_0x2f9b4d(0x308)+_0x2f9b4d(0x423)](_0x5244b8);if(_0x4234ac&&_0x5244b8==='fulls'+_0x2f9b4d(0x2fd)+'-banr'+'s'){var _0x22cf63=_0x4234ac[_0x2f9b4d(0x467)+'ren'];for(var _0x23a065=0x19f8+0x1cab*-0x1+0x2b3*0x1;_0x1763eb[_0x2f9b4d(0x67c)](_0x23a065,_0x22cf63[_0x2f9b4d(0x2b1)+'h']);_0x23a065++){if(_0x22cf63[_0x23a065]['id']&&_0x1763eb[_0x2f9b4d(0x588)](_0x22cf63[_0x23a065]['id']['index'+'Of']('kour-'+_0x2f9b4d(0x181)),-0x1c7b+-0x1bb*0x4+0x9*0x3ef))_0x22cf63[_0x23a065]['style'][_0x2f9b4d(0x16c)+'ay']='none';}}else{if(_0x4234ac)_0x4234ac[_0x2f9b4d(0x2d2)]['displ'+'ay']='none';}}}}function _0x2f7add(_0x5dbdb4,_0x3e4a3d,_0x144e1e,_0x4194ae){var _0x1f1b57=_0x357762(_0x5dbdb4,_0x3e4a3d,_0x144e1e);if(_0x15fca0['myCBO'](_0x1f1b57,null))_0x431a71(_0x5dbdb4,_0x3e4a3d,_0x144e1e,_0x1f1b57*_0x4194ae);}function _0x57f0fa(_0x4ae489,_0x2ddd18,_0x315364,_0x2cae9a,_0x5bf2b7,_0x86238f,_0x43b4e2){var _0x5622b6=_0x2bac18;try{var _0x1158d2=_0x467b9b['hookP'+'refix']({'typeName':_0x2ddd18,'methodName':_0x315364,'params':_0x2cae9a,'returnType':_0x5bf2b7},_0x86238f);return _0x1158d2[_0x5622b6(0x160)+'ed']=_0x15fca0[_0x5622b6(0x584)](_0x43b4e2,![]),_0x260f0d[_0x4ae489]=_0x1158d2,_0xa83068['hooks'+_0x5622b6(0x1e2)]++,_0x1158d2;}catch(_0x3445fe){return console[_0x5622b6(0x2a4)](_0x15fca0['IqsLv'],_0x4ae489,_0x3445fe&&_0x3445fe[_0x5622b6(0x5f3)+'ge']),null;}}function _0x4d7afd(_0x234633,_0x56ea43,_0x48ec5e,_0x1a0ac0,_0xd76a51,_0x2abdd3,_0x424bdc){var _0x282c50=_0x2bac18;if(_0x15fca0[_0x282c50(0x584)](_0x15fca0['qEHaW'],_0x282c50(0x3a3))){var _0x3e2455=(_0x282c50(0x245)+'|2|11'+'|10|1'+_0x282c50(0x582)+_0x282c50(0x293)+_0x282c50(0x429)+'9|15|'+_0x282c50(0x45f))['split']('|'),_0x18092a=0x9+0x264b+0x16*-0x1be;while(!![]){switch(_0x3e2455[_0x18092a++]){case'0':_0x5888a9['fillT'+'ext'](_0x31c2cc,_0x139532+_0x15fca0['pfNts'](_0x15fb87,0x75e+-0x1a87+0x7*0x2bd),_0x15fca0[_0x282c50(0x334)](_0x1beb3d,_0x3150ad/(-0x13cb+0x2565+-0x233*0x8))-(_0x1009d4?(0x5ff+0x3*0x1a4+0x117*-0xa)*_0x150b29:-0x35*0x40+-0xc3b*-0x2+-0xcd*0xe));continue;case'1':_0x2d3133[_0x282c50(0x5f5)+'re']();continue;case'2':_0x364f21[_0x282c50(0x3ff)+'Path']();continue;case'3':_0xc48248&&(_0x49ef0f[_0x282c50(0x5cc)]=_0x15fca0[_0x282c50(0x334)](_0x15fca0[_0x282c50(0x5ff)],_0x22c79f[_0x282c50(0x558)](_0x15fca0[_0x282c50(0x56c)](0x94e+-0x2*0xd6a+0x118f,_0x48a393)))+('px\x20ui'+_0x282c50(0x5fe)+_0x282c50(0x55a)+_0x282c50(0x2e4)+'tem-u'+_0x282c50(0x633)+_0x282c50(0x4dd)+'if'),_0x486ed1['fillS'+'tyle']=_0xf81e4d?_0x282c50(0x106):_0x282c50(0x342)+'255,2'+_0x282c50(0x1a1)+_0x282c50(0x5db)+'5)',_0x1f6631[_0x282c50(0x658)+_0x282c50(0x15b)](_0x5214f4,_0x5e85d2+_0x574047/(-0x1*0x99f+-0x1cf2+0x18b*0x19),_0x15fca0[_0x282c50(0x46e)](_0x5b8adf+_0x3b9af9/(-0x72e*0x1+0x1b5b*0x1+0x6b9*-0x3),(-0x2135+0x8d9*0x4+-0x13*0x1d)*_0x4a70f4)));continue;case'4':_0x5bb9d5[_0x282c50(0x2f5)+_0x282c50(0x2de)]=0x11c4+-0x111d*0x2+0x1077;continue;case'5':_0x1ca444[_0x282c50(0x66a)+_0x282c50(0x14e)]=_0xf81e4d?'#fff':_0x15fca0[_0x282c50(0x448)];continue;case'6':_0xf81e4d&&(_0x4c90ed[_0x282c50(0x420)+_0x282c50(0x34e)+'r']=_0x3df603,_0x1855d7[_0x282c50(0x420)+'wBlur']=0xd*0x1c4+-0x1260+0x2*-0x243,_0x508084[_0x282c50(0x316)](),_0x4a53ab['shado'+'wBlur']=-0x150c+-0xa25+0x1f31);continue;case'7':_0x184d0f[_0x282c50(0x495)+_0x282c50(0x492)+'e']=_0xf81e4d?_0x146e3e:_0x15fca0[_0x282c50(0x51a)];continue;case'8':_0x5d0c0c['strok'+'e']();continue;case'9':_0x14bfdf[_0x282c50(0x1ba)+_0x282c50(0x348)+'ne']=_0x15fca0[_0x282c50(0x130)];continue;case'10':_0x3ebc21['fillS'+'tyle']=_0xf81e4d?_0x282c50(0x342)+_0x282c50(0x5bb)+'07,15'+_0x282c50(0x2c4)+'5)':_0x282c50(0x342)+'22,8,'+'16,0.'+'7)';continue;case'11':if(_0x57b2c1[_0x282c50(0x558)+'Rect'])_0x4f634b[_0x282c50(0x558)+'Rect'](_0xc3af8a,_0x30780e,_0x1aa5ac,_0x2ce63b,_0x15fca0['PhVai'](0x48*0x66+-0x155+-0x35*0x84,_0x306d59));else _0x2d6822['rect'](_0x5e456b,_0x40554d,_0x1bcf6c,_0x5ea226);continue;case'12':_0x377274['textA'+'lign']=_0x282c50(0x63c)+'r';continue;case'13':_0xa57cd4[_0x282c50(0x546)]();continue;case'14':var _0xf81e4d=_0x1751fa['has'](_0x5318ea);continue;case'15':_0x2d2bcd[_0x282c50(0x5cc)]=_0x15fca0[_0x282c50(0x3bb)](_0x282c50(0x45d)+_0x79843b[_0x282c50(0x558)](_0x15fca0['PhVai'](0x1*0x766+0xe5*0xf+0xd*-0x199,_0x3835dc)),_0x282c50(0x5c6)+_0x282c50(0x5fe)+_0x282c50(0x55a)+_0x282c50(0x2e4)+_0x282c50(0x162)+_0x282c50(0x633)+_0x282c50(0x4dd)+'if');continue;case'16':_0x5694bb['fill']();continue;}break;}}else try{var _0x3fac14=(_0x282c50(0x164)+'|4|3')[_0x282c50(0x646)]('|'),_0xbf1f3b=-0x2f*0xb5+0x1867+-0x235*-0x4;while(!![]){switch(_0x3fac14[_0xbf1f3b++]){case'0':var _0x361754=_0x467b9b[_0x282c50(0x655)+'ostfi'+'x']({'typeName':_0x56ea43,'methodName':_0x48ec5e,'params':_0x1a0ac0,'returnType':_0xd76a51},_0x2abdd3);continue;case'1':_0x361754['enabl'+'ed']=_0x424bdc!==![];continue;case'2':_0x260f0d[_0x234633]=_0x361754;continue;case'3':return _0x361754;case'4':_0xa83068['hooks'+_0x282c50(0x1e2)]++;continue;}break;}}catch(_0x3cbe85){return console[_0x282c50(0x2a4)](_0x282c50(0x114)+_0x282c50(0x23d)+_0x282c50(0x325)+_0x282c50(0x481)+'eg\x20fa'+_0x282c50(0x42f),_0x234633,_0x3cbe85&&_0x3cbe85[_0x282c50(0x5f3)+'ge']),null;}}var _0xda08e0=()=>![];try{if(window[_0x2bac18(0x6de)+'WebMo'+_0x2bac18(0x578)]&&!_0x47afe6[_0x2bac18(0x182)+_0x2bac18(0x636)]){_0x1508a9=window['Unity'+'WebMo'+_0x2bac18(0x578)]['Value'+_0x2bac18(0x5e7)+'er'],_0x467b9b=window[_0x2bac18(0x6de)+'WebMo'+'dkit'][_0x2bac18(0x69e)+'me']['creat'+'ePlug'+'in']({'name':_0x2bac18(0x2d7)+_0x2bac18(0x34d),'version':_0x2bac18(0x3d7),'referencedAssemblies':[_0x2bac18(0x272)+_0x2bac18(0x5bd)+_0x2bac18(0x137)+_0x2bac18(0x6df)]});if(_0x47afe6['hookG'+'od'])_0x15fca0['aFRwY'](_0x57f0fa,_0x15fca0[_0x2bac18(0x519)],_0x2bac18(0x37c)+'th',_0x15fca0[_0x2bac18(0x5be)],[_0x2bac18(0x501),_0x15fca0['JtqUw']],undefined,_0xda08e0,!!_0x47afe6[_0x2bac18(0x1ae)]);if(_0x47afe6['hookG'+'odDie'])_0x57f0fa(_0x15fca0[_0x2bac18(0xf0)],_0x15fca0[_0x2bac18(0x598)],_0x15fca0[_0x2bac18(0xf9)],[_0x15fca0[_0x2bac18(0x3ce)],_0x15fca0['JtqUw'],_0x15fca0['JtqUw'],_0x2bac18(0x501),_0x2bac18(0x501)],undefined,_0xda08e0,!!_0x47afe6['god']);if(_0x47afe6['hookN'+'oReco'+'il'])_0x57f0fa(_0x15fca0[_0x2bac18(0x171)],'Legio'+_0x2bac18(0x1f9)+_0x2bac18(0x534)+_0x2bac18(0x2c3)+_0x2bac18(0x65e)+'Recoi'+_0x2bac18(0x6d7)+'on',_0x15fca0['MxOeh'],[_0x2bac18(0x501)],undefined,_0xda08e0,!!_0x47afe6['noRec'+'oil']);if(_0x47afe6[_0x2bac18(0x17d)+_0x2bac18(0x629)+'e'])_0x4d7afd('capSh'+_0x2bac18(0x145),_0x15fca0[_0x2bac18(0x231)],_0x2bac18(0x375)+'meRun'+'ning',[_0x2bac18(0x501),'i32'],undefined,(_0x1d1351,_0x4cc11e)=>{var _0x138a28=_0x2bac18;_0xd536fa(_0x3b4304,_0x4cc11e,_0xa83068,_0x15fca0[_0x138a28(0x554)]);},!![]);if(_0x47afe6[_0x2bac18(0x17d)+'aptur'+'e'])_0x4d7afd(_0x15fca0[_0x2bac18(0x373)],_0x2bac18(0x6d8)+_0x2bac18(0x1f9)+'forms'+'.Over'+_0x2bac18(0x65e)+_0x2bac18(0x4f4)+'ent',_0x15fca0[_0x2bac18(0x36f)],[_0x2bac18(0x501)],_0x2bac18(0x501),(_0x4cd064,_0x53b41b)=>{var _0x5ce137=_0x2bac18;_0x15fca0['dPARZ'](_0xd536fa,_0x2a5971,_0x53b41b,_0xa83068,_0x15fca0[_0x5ce137(0x469)]);},!![]);}}catch(_0x14ceac){console['warn'](_0x15fca0[_0x2bac18(0x369)],_0x14ceac&&_0x14ceac['messa'+'ge']);}function _0x277932(_0x1653b4,_0x3fe558){var _0x342006=_0x2bac18;if('dgOZM'!==_0x15fca0['OYVRP'])_0x28b34c=_0x40165a['round'](_0x15fca0['pfNts'](_0x1155c2*(-0x2cc+0x2c0+0x3f4),_0x32786b-_0x7f949f)),_0x127e71=-0x4*-0x88f+0x7ab+0x29e7*-0x1,_0x14bdc2=_0x94b0a7;else{var _0x57c64d=_0x260f0d[_0x1653b4];if(_0x57c64d)try{_0x57c64d[_0x342006(0x160)+'ed']=!!_0x3fe558;}catch(_0x2900e1){}}}setInterval(()=>{var _0x8acab3=_0x2bac18,_0x3346fc={'OIFkL':_0x15fca0[_0x8acab3(0x554)],'ADltq':_0x15fca0[_0x8acab3(0x469)],'DpUcZ':function(_0x2428f9,_0x599116){var _0x27750d=_0x8acab3;return _0x15fca0[_0x27750d(0x584)](_0x2428f9,_0x599116);},'oMtvL':'aria-'+'check'+'ed','DluPg':function(_0x2c8e1f,_0x4cf57c){return _0x2c8e1f(_0x4cf57c);}};if(_0x15fca0['OZSLI'](_0x15fca0[_0x8acab3(0x1cb)],_0x15fca0['WmLEj'])){if(!_0x1508a9||!window[_0x8acab3(0x6af)+_0x8acab3(0x570)+_0x8acab3(0x1c5)])return;var _0x13b3b3=(Number(_0x47afe6[_0x8acab3(0x665)+_0x8acab3(0x100)])||-0x6ad+-0x329*0x2+0xd63*0x1)/(0x2c*-0x28+-0x1b7b+0x22bf),_0x234946=(Number(_0x47afe6['jumpP'+'ct'])||-0x14a6+-0x1075*0x2+-0x8fe*-0x6)/(0x1696+-0x176d+0x13b),_0x281600=(Number(_0x47afe6['gravi'+_0x8acab3(0x317)])||-0x2406+0x1*-0xf3a+-0xa54*-0x5)/(-0x881+-0x1*0x1fff+-0xa39*-0x4),_0x158737=Math[_0x8acab3(0x6bc)](-0x8*0x43f+0xc7*0x25+0x536,Number(_0x47afe6[_0x8acab3(0x23c)+'eValu'+'e'])||0xfb4+0x8d0+-0x17ee),_0x4e897a=_0x13b3b3!==-0xb4*-0x2c+0x1b73*-0x1+-0x37c||_0x15fca0[_0x8acab3(0x485)](_0x234946,-0x1282*0x1+0x1d*0x99+0x12e)||_0x15fca0[_0x8acab3(0x390)](_0x281600,0x6fd+-0xdca+0x6ce)||_0x47afe6['bhop'],_0x2b80fb=_0x47afe6[_0x8acab3(0x641)+'ead']||_0x47afe6['damag'+'eExp']||_0x47afe6[_0x8acab3(0x579)+_0x8acab3(0x50a)]||_0x47afe6[_0x8acab3(0x6d9)+_0x8acab3(0x690)];if(!_0x4e897a&&!_0x2b80fb)return;try{for(var _0x59f0c2=0x2204+-0x129d+-0xf67;_0x59f0c2<_0x2a5971[_0x8acab3(0x2b1)+'h'];_0x59f0c2++){var _0x586cbb=_0x2a5971[_0x59f0c2];if(!_0x586cbb)continue;if(_0x13b3b3!==-0x7b1+0x1*0x63b+-0x1*-0x177){if(_0x15fca0['WtheW'](_0x15fca0[_0x8acab3(0x387)],_0x8acab3(0x37f)))_0x15fca0[_0x8acab3(0x174)](_0x2f7add,_0x586cbb,-0xbf+-0x1533+-0x2*-0xb0d,'f32',_0x13b3b3),_0x15fca0[_0x8acab3(0x2d1)](_0x2f7add,_0x586cbb,-0x8be*0x2+0xc32+0x576,_0x8acab3(0x201),_0x13b3b3),_0x2f7add(_0x586cbb,-0xf*-0x2d+-0x55c+0x2e9,'f32',_0x13b3b3),_0x2f7add(_0x586cbb,-0x2568+0x207c+0x520,_0x8acab3(0x201),_0x13b3b3),_0x15fca0['VwSgY'](_0x2f7add,_0x586cbb,0x17*-0x61+0x1942+-0x106f*0x1,_0x8acab3(0x201),_0x13b3b3),_0x15fca0[_0x8acab3(0x68c)](_0x2f7add,_0x586cbb,0x17d1+-0xffb*0x2+0x1d*0x49,_0x8acab3(0x201),_0x13b3b3);else{if(_0x156c43[_0x8acab3(0x6de)+'WebMo'+_0x8acab3(0x578)]&&!_0x4f36c8['safeM'+'ode']){var _0xf391c4=('4|1|5'+_0x8acab3(0x4e9)+'2|3')['split']('|'),_0xb84a9a=-0xf10+0xf7f*0x2+-0xfee*0x1;while(!![]){switch(_0xf391c4[_0xb84a9a++]){case'0':if(_0x51439d['hookG'+_0x8acab3(0x5e2)])_0x2aedb1(_0x8acab3(0x65f)+'e',_0x8acab3(0x37c)+'th','Local'+_0x8acab3(0x13e),['i32',_0x8acab3(0x501),_0x15fca0['JtqUw'],'i32','i32'],_0x2a3bb4,_0x2d6a10,!!_0x35dc8b[_0x8acab3(0x1ae)]);continue;case'1':_0x1a2a61=_0xc64df9[_0x8acab3(0x6de)+'WebMo'+_0x8acab3(0x578)]['Runti'+'me'][_0x8acab3(0x657)+_0x8acab3(0x43c)+'in']({'name':'Sakur'+_0x8acab3(0x34d),'version':_0x15fca0[_0x8acab3(0x402)],'referencedAssemblies':[_0x15fca0[_0x8acab3(0x62e)]]});continue;case'2':if(_0x1adcea[_0x8acab3(0x17d)+'aptur'+'e'])_0xdebcb0('capSh'+'ooter',_0x8acab3(0x471)+_0x8acab3(0x62b),_0x8acab3(0x375)+_0x8acab3(0x176)+'ning',[_0x8acab3(0x501),'i32'],_0x241828,(_0x19d1a3,_0x34eaa5)=>{_0x49c374(_0x524beb,_0x34eaa5,_0x5cfdd5,_0x3346fc['OIFkL']);},!![]);continue;case'3':if(_0x2ff29d[_0x8acab3(0x17d)+'aptur'+'e'])_0x5a3651(_0x8acab3(0x169)+'ve',_0x8acab3(0x6d8)+_0x8acab3(0x1f9)+_0x8acab3(0x534)+_0x8acab3(0x2c3)+'tide.'+_0x8acab3(0x4f4)+_0x8acab3(0x3fb),_0x15fca0['PVMIT'],['i32'],'i32',(_0x4a329f,_0x1f2e97)=>{var _0x26b7ed=_0x8acab3;_0xfaead6(_0x37991f,_0x1f2e97,_0x228321,_0x3346fc[_0x26b7ed(0x556)]);},!![]);continue;case'4':_0x40a860=_0x58df12['Unity'+'WebMo'+_0x8acab3(0x578)][_0x8acab3(0x4ef)+_0x8acab3(0x5e7)+'er'];continue;case'5':if(_0x30b57f[_0x8acab3(0x4c7)+'od'])_0x5eb313(_0x8acab3(0x1ae),'OHeal'+'th',_0x15fca0['JeBoN'],[_0x8acab3(0x501),_0x15fca0[_0x8acab3(0x3ce)]],_0x305ee6,_0x48567e,!!_0x1f8ab6['god']);continue;case'6':if(_0x40eca0[_0x8acab3(0x6db)+_0x8acab3(0x44f)+'il'])_0x15fca0[_0x8acab3(0x2f0)](_0x455727,'noRec'+_0x8acab3(0x1c3),_0x15fca0[_0x8acab3(0x39b)],_0x8acab3(0x4d7),[_0x15fca0['JtqUw']],_0x3b2d4c,_0x402c35,!!_0x277ebb[_0x8acab3(0x6dc)+_0x8acab3(0x1c3)]);continue;}break;}}}}if(_0x15fca0[_0x8acab3(0x390)](_0x234946,-0x28+0x50e*0x6+-0x1e2b*0x1))_0x2f7add(_0x586cbb,-0x1f39+0xc8c+-0x1*-0x12fd,'f32',_0x234946);if(_0x281600!==-0x1245*0x1+-0x26bc+-0x3902*-0x1){if(_0x15fca0[_0x8acab3(0x533)](_0x8acab3(0x279),_0x8acab3(0x279)))_0x2f7add(_0x586cbb,-0x1b6e+0x3b*-0x8b+-0x23*-0x1b5,_0x15fca0['onrOT'],_0x281600),_0x15fca0[_0x8acab3(0x27a)](_0x2f7add,_0x586cbb,-0x3d0+-0x46f+0x1b*0x51,_0x15fca0['onrOT'],_0x281600);else{var _0x2bbb0c=_0x52f55d[_0x8acab3(0x657)+_0x8acab3(0x1b3)+'ent'](_0x8acab3(0x165));_0x2bbb0c[_0x8acab3(0x42c)+'Name']='sk-hi'+'nt',_0x2bbb0c['textC'+_0x8acab3(0x3b7)+'t']=_0x2f2562,_0x8cfb6f['appen'+_0x8acab3(0x1e3)+'d'](_0x2bbb0c);}}if(_0x47afe6[_0x8acab3(0x3c3)])_0x15fca0[_0x8acab3(0x43e)](_0x431a71,_0x586cbb,0x130a+0x1570+-0x36*0xbd,_0x15fca0['onrOT'],-(0x1895+-0x1*-0x26fb+0x6a1*-0x9));}}catch(_0x960948){}try{for(var _0x373916=-0xe3*0x1f+-0x83*0x4a+0x415b;_0x373916<_0x3b4304['lengt'+'h'];_0x373916++){var _0x32c500=_0x563b2e(_0x3b4304[_0x373916],-0x1*0x13ed+0x301*-0xb+0x3530);if(!_0x32c500)continue;_0x47afe6['damag'+'eExp']&&(_0x15fca0['hbAbo'](_0x15fca0[_0x8acab3(0x2c9)],'DlnbB')?(_0x431a71(_0x32c500,0x71d*0x1+-0x1d7a+0x1*0x16a9,'i32',_0x158737),_0x15fca0['xRnbS'](_0x431a71,_0x32c500,0x201*0x6+0x13ca+0x2*-0xfbe,_0x8acab3(0x501),_0x158737)):(_0x2ee62b[_0x8acab3(0x6dc)+_0x8acab3(0x1c3)]=_0x4e3b01,_0x15fca0[_0x8acab3(0x1b0)](_0x9c1010),_0x2e41b6(_0x15fca0[_0x8acab3(0x171)],_0x4e776b)));_0x47afe6['noSpr'+_0x8acab3(0x193)]&&(_0x431a71(_0x32c500,0x2*-0x118c+-0x14c1+-0x12cb*-0x3,_0x8acab3(0x201),0xac5*-0x2+0x2412+-0xe88),_0x15fca0[_0x8acab3(0x1d0)](_0x431a71,_0x32c500,-0xb3*-0x27+0x1f*0xd7+-0x3*0x11a2,'f32',-0x1642+-0x1a9c+0x30df));if(_0x47afe6[_0x8acab3(0x579)+_0x8acab3(0x50a)])_0x431a71(_0x32c500,-0x23c1+0x7f6+-0x1c27*-0x1,_0x15fca0[_0x8acab3(0x3ce)],0x1f8c+0x1*-0x24c9+-0x1e*-0x4e);_0x47afe6[_0x8acab3(0x6d9)+_0x8acab3(0x690)]&&(_0x2f7add(_0x32c500,-0x1580+0x2499+-0xe8d,'f32',0x8b*-0x9+0x77c+0x23*-0x13+0.1),_0x431a71(_0x32c500,0xee7+0x1c76*-0x1+0xdef,_0x8acab3(0x201),0xe9b+0x2158+-0x2ff3+0.1));}}catch(_0x5eaa77){}}else{var _0xf195e=_0x1dd76c[_0x8acab3(0x657)+'eElem'+_0x8acab3(0x3fb)](_0x8acab3(0x47a)+'n');return _0xf195e['type']=_0x15fca0[_0x8acab3(0x5ad)],_0xf195e['class'+'Name']='sk-sw'+'itch',_0xf195e[_0x8acab3(0x6a7)+_0x8acab3(0x35b)+'te'](_0x8acab3(0x52b),'switc'+'h'),_0xf195e['setAt'+_0x8acab3(0x35b)+'te'](_0x8acab3(0x22c)+_0x8acab3(0x3c5)+'ed',_0x47e789(!!_0x1bb3f4)),_0xf195e[_0x8acab3(0x13a)+'ck']=_0x2aa584=>{var _0x5b3fce=_0x8acab3;_0x2aa584[_0x5b3fce(0x371)+_0x5b3fce(0x2f6)+_0x5b3fce(0x4ca)]();var _0x5a1b26=_0x3346fc[_0x5b3fce(0x40c)](_0xf195e[_0x5b3fce(0x563)+'tribu'+'te'](_0x3346fc['oMtvL']),_0x5b3fce(0x259));_0xf195e[_0x5b3fce(0x6a7)+'tribu'+'te'](_0x3346fc['oMtvL'],_0x3346fc[_0x5b3fce(0x314)](_0xa9fac1,_0x5a1b26)),_0x2769b8(_0x5a1b26);},_0xf195e;}},-0x1*0x26f9+-0x1d3*0x11+0xa1c*0x7),setInterval(()=>{var _0x592a2a=_0x2bac18;_0xa83068[_0x592a2a(0x212)+'oaded']=!!window['unity'+_0x592a2a(0x570)+_0x592a2a(0x1c5)];try{var _0x2b8bcd=-0x1543*0x1+-0xdde+-0x1*-0x2321;for(var _0x1bdf2f in _0x260f0d){if(_0x260f0d[_0x1bdf2f]&&_0x260f0d[_0x1bdf2f]['appli'+'ed'])_0x2b8bcd++;}_0xa83068[_0x592a2a(0x1e0)+'Ok']=_0x2b8bcd;}catch(_0x13f316){}},-0x2e*0x24+0x26*0x6f+-0x61a);var _0x301137=new Set(),_0x562e2d={0x1:[],0x3:[]},_0x3ebe5a=![];function _0x385263(_0xd991ec){_0x301137['add'](_0xd991ec['code']);}function _0x1b2b81(_0x5d4953){_0x301137['delet'+'e'](_0x5d4953['code']);}function _0x1f8e38(_0x2877f0){var _0x4ccc49=_0x2bac18;if(_0x15fca0['EdIep']==='UyZhn'){if(_0x2877f0[_0x4ccc49(0x14c)+'ura'])return;_0x301137[_0x4ccc49(0x292)](_0x4ccc49(0x451)+_0x15fca0[_0x4ccc49(0x653)](_0x2877f0[_0x4ccc49(0x47a)+'n'],0x5*0x3ea+0x9*0x367+0x58*-0x92));var _0x10a1a8=_0x562e2d[_0x15fca0['QQlny'](_0x2877f0[_0x4ccc49(0x47a)+'n'],0x1*-0x250d+0x7*0x65+0x224b)];if(_0x10a1a8){if('ERpNq'==='MmaQY'){if(_0x3a364d[_0x4ccc49(0x143)]&&(_0xbde5b7['ready'+'State']===_0x4ccc49(0x22b)+_0x4ccc49(0x312)+'e'||_0x10cbe0['ready'+'State']==='compl'+_0x4ccc49(0x516)))_0x1b3e5d();else _0x437483[_0x4ccc49(0x4d2)+'entLi'+_0x4ccc49(0x36e)+'r'](_0x4ccc49(0x30b)+_0x4ccc49(0x370)+_0x4ccc49(0x282)+'d',_0x59ea5d,{'once':!![]});}else{_0x10a1a8[_0x4ccc49(0x12c)](performance[_0x4ccc49(0x544)]());if(_0x10a1a8['lengt'+'h']>0x1646+-0x3b7*-0x9+-0x378d)_0x10a1a8['shift']();}}}else _0x234d5b[_0x4ccc49(0x6a8)+'n'](_0x4a723b,_0x3f3897['parse'](_0x4058eb['getIt'+'em'](_0x4ccc49(0x126)+'a.kou'+'r.v1')||'{}'));}function _0x4dba99(_0x2cb932){var _0x4bda6f=_0x2bac18;if(_0x15fca0[_0x4bda6f(0x2cd)](_0x15fca0[_0x4bda6f(0x1de)],'HpuZG')){if(!_0x2cb932[_0x4bda6f(0x14c)+'ura'])_0x301137[_0x4bda6f(0x421)+'e']('mouse'+_0x15fca0[_0x4bda6f(0x46f)](_0x2cb932['butto'+'n'],-0x177a+0x201e+-0x21*0x43));}else _0x718806[_0x4bda6f(0x2c0)+_0x4bda6f(0x394)+_0x4bda6f(0x2ae)](),_0x330487();}function _0x1bf057(){_0x301137['clear']();}function _0xd953d4(){var _0x5162ee=_0x2bac18;if(_0x3ebe5a)return;_0x3ebe5a=!![],window[_0x5162ee(0x4d2)+_0x5162ee(0x1a8)+'stene'+'r'](_0x15fca0[_0x5162ee(0x662)],_0x385263,!![]),window['addEv'+_0x5162ee(0x1a8)+_0x5162ee(0x36e)+'r'](_0x15fca0[_0x5162ee(0x437)],_0x1b2b81,!![]),window[_0x5162ee(0x4d2)+'entLi'+_0x5162ee(0x36e)+'r'](_0x5162ee(0x451)+_0x5162ee(0x466),_0x1f8e38,!![]),window[_0x5162ee(0x4d2)+_0x5162ee(0x1a8)+_0x5162ee(0x36e)+'r'](_0x15fca0['mhlMb'],_0x4dba99,!![]),window[_0x5162ee(0x4d2)+'entLi'+'stene'+'r'](_0x15fca0[_0x5162ee(0x4c3)],_0x1bf057);}function _0x4322fd(_0x154b85){var _0x12e08c=_0x2bac18,_0x220054=_0x562e2d[_0x154b85]||[],_0x17e242=performance[_0x12e08c(0x544)]();while(_0x220054[_0x12e08c(0x2b1)+'h']&&_0x15fca0[_0x12e08c(0x1e5)](_0x17e242,_0x220054[-0x128*0x13+-0x1af*0x10+0x4e4*0xa])>-0x225d+-0xe1e+-0x1*-0x3463)_0x220054['shift']();return _0x220054[_0x12e08c(0x2b1)+'h'];}function _0x5c497c(_0x5dcb5f){var _0x3e44ec=_0x2bac18;if(_0x3e44ec(0x48e)===_0x15fca0[_0x3e44ec(0x5aa)]){if(document[_0x3e44ec(0x143)]&&(_0x15fca0[_0x3e44ec(0x2a0)](document[_0x3e44ec(0x6d5)+'State'],_0x15fca0['LKkYM'])||_0x15fca0[_0x3e44ec(0x2a0)](document['ready'+'State'],'compl'+_0x3e44ec(0x516))))_0x5dcb5f();else document['addEv'+'entLi'+_0x3e44ec(0x36e)+'r'](_0x3e44ec(0x30b)+'ntent'+'Loade'+'d',_0x5dcb5f,{'once':!![]});}else _0x4ee70d['hookG'+_0x3e44ec(0x5e2)]=_0xab7665,_0x40b955();}_0x5c497c(()=>{var _0x2a65cd=_0x2bac18,_0x37d8da={'ofayi':'kour-'+_0x2a65cd(0x417)+_0x2a65cd(0x4af)+_0x2a65cd(0x54e)+'nt','GhkGe':_0x2a65cd(0x60b)+'io_72'+_0x2a65cd(0x20f)+_0x2a65cd(0x55e)+'t','rUUdu':_0x2a65cd(0x65b)+_0x2a65cd(0x2fd)+_0x2a65cd(0x2bd)+'s','Dcdoi':function(_0x1f12b0,_0x1ccbe4){return _0x1f12b0===_0x1ccbe4;},'iVzrx':_0x15fca0[_0x2a65cd(0x554)],'jdAVn':_0x2a65cd(0x3f1),'IuPAl':_0x15fca0['hTTXn'],'gdjhH':function(_0x17e3ce,_0x1a4125){return _0x17e3ce!==_0x1a4125;},'bejNj':function(_0x2d1757,_0x2a6938){return _0x2d1757*_0x2a6938;},'dFjeh':'held','SHkom':'none','LGcSj':_0x2a65cd(0x425)+_0x2a65cd(0x43f)+'t\x20','ZxzOV':function(_0x14a240,_0x5b3f14,_0x375b2d,_0x3bb244){return _0x14a240(_0x5b3f14,_0x375b2d,_0x3bb244);},'NCWpP':'240\x20F'+_0x2a65cd(0x5f8)+_0x2a65cd(0x6c6),'frnND':_0x15fca0[_0x2a65cd(0x5c5)],'HndmB':_0x2a65cd(0x342)+_0x2a65cd(0x5bb)+'07,15'+'7,0.3'+'5)','lUKfx':_0x15fca0[_0x2a65cd(0x21d)],'kVrVs':_0x15fca0['boFnI'],'njfkf':'rgba('+_0x2a65cd(0x444)+_0x2a65cd(0x1a1)+_0x2a65cd(0x37b)+')','VACPv':_0x2a65cd(0x5c6)+_0x2a65cd(0x5fe)+'-seri'+'f,sys'+'tem-u'+'i,san'+'s-ser'+'if','uJUBD':function(_0x1aadc9,_0x49090b){return _0x1aadc9*_0x49090b;},'bQdxe':function(_0x328085,_0x3986ff,_0x4bbbc4,_0x29b570,_0x2712d9,_0xa8dc58,_0x2422f8){var _0xdf4751=_0x2a65cd;return _0x15fca0[_0xdf4751(0x635)](_0x328085,_0x3986ff,_0x4bbbc4,_0x29b570,_0x2712d9,_0xa8dc58,_0x2422f8);},'McxIs':_0x15fca0['aBEoT'],'CPbOH':function(_0x5e3937,_0x566581){return _0x5e3937+_0x566581;},'lDEVq':_0x2a65cd(0x488),'xyKSd':function(_0x4eeea8,_0x3e5657){return _0x4eeea8+_0x3e5657;},'RaCte':function(_0x2c8224,_0x2e0428,_0x502169,_0x3c8863,_0x519df8,_0x351ca5,_0x236a5c){var _0x5614c4=_0x2a65cd;return _0x15fca0[_0x5614c4(0x2a9)](_0x2c8224,_0x2e0428,_0x502169,_0x3c8863,_0x519df8,_0x351ca5,_0x236a5c);},'SbLdH':'KeyD','RwDGL':function(_0x230595,_0x488a70){var _0x14f279=_0x2a65cd;return _0x15fca0[_0x14f279(0x301)](_0x230595,_0x488a70);},'qjKsQ':_0x15fca0[_0x2a65cd(0x3d2)],'HfWfH':function(_0x3cd243,_0x1a3764){return _0x3cd243+_0x1a3764;},'TyKle':function(_0xa819ad,_0x479a65,_0x35ab2f,_0x12398e,_0x39d914,_0x4e2a7e,_0x4f715e,_0x50e7ba){return _0xa819ad(_0x479a65,_0x35ab2f,_0x12398e,_0x39d914,_0x4e2a7e,_0x4f715e,_0x50e7ba);},'eeEdy':'mouse'+'3','VqhhM':function(_0xfb05c9,_0x40b397){return _0x15fca0['jvLfJ'](_0xfb05c9,_0x40b397);},'qvrSV':_0x15fca0[_0x2a65cd(0x4d9)],'xzpzH':_0x15fca0[_0x2a65cd(0x3b5)],'WSzZU':_0x15fca0[_0x2a65cd(0x426)],'oXKZF':'#ff6b'+'9d','BwpWS':function(_0x82e488,_0x25f27e){return _0x82e488*_0x25f27e;},'WBAxI':function(_0x520fb1,_0x38d905){return _0x520fb1-_0x38d905;},'yhONe':function(_0x2bc1c9,_0x128a2b){return _0x2bc1c9-_0x128a2b;},'Ickdc':function(_0x5cf245,_0x35973d){return _0x5cf245+_0x35973d;},'liriC':_0x15fca0['QzDHS'],'bKgMV':_0x15fca0[_0x2a65cd(0x4dc)],'iDmZv':_0x15fca0['iAkVX'],'DUArq':_0x2a65cd(0x2b9)+_0x2a65cd(0x64b)+_0x2a65cd(0x4a5)+'e…','nXyJX':function(_0x10af44,_0x4b2094,_0x183c90){return _0x10af44(_0x4b2094,_0x183c90);},'eRzTu':function(_0x552084,_0x38a300){return _0x552084(_0x38a300);},'PuhMH':function(_0x488c65){return _0x488c65();},'zmGrZ':_0x15fca0[_0x2a65cd(0x315)],'TlrRl':'selec'+'t','sTJff':function(_0x5273e3){return _0x15fca0['IzuWk'](_0x5273e3);},'DVhNp':'tYWaG','EiUhV':'Unity'+'Engin'+'e.App'+_0x2a65cd(0x2f9)+_0x2a65cd(0x6b2),'YEzWe':function(_0x19a032,_0x473850){return _0x19a032+_0x473850;},'tkfPm':function(_0x8f9ddc,_0x43a289){return _0x8f9ddc+_0x43a289;},'TADqr':function(_0x11e679,_0x55e9ed){return _0x15fca0['CRhfZ'](_0x11e679,_0x55e9ed);},'PQdia':_0x2a65cd(0x28e)+'s','upBrW':_0x15fca0[_0x2a65cd(0x26e)],'hfGFi':'loadi'+'ng','nGvQq':function(_0x47ffff,_0x234aa1){var _0x3e10ce=_0x2a65cd;return _0x15fca0[_0x3e10ce(0x499)](_0x47ffff,_0x234aa1);},'gEwEU':function(_0x7a1e77,_0x10f55f,_0x1a07bd,_0x2bad26,_0xfb46a,_0x4d26af){return _0x7a1e77(_0x10f55f,_0x1a07bd,_0x2bad26,_0xfb46a,_0x4d26af);},'GbdSG':_0x15fca0['zEhyQ'],'weoTD':function(_0x5c5383,_0x4f0b73,_0x231181,_0xa96a3f){return _0x15fca0['FMIbp'](_0x5c5383,_0x4f0b73,_0x231181,_0xa96a3f);},'pskUf':_0x2a65cd(0x1ae),'Rovzm':function(_0x295822,_0x5f1f7b,_0x3e1af3){var _0x513b94=_0x2a65cd;return _0x15fca0[_0x513b94(0x5d9)](_0x295822,_0x5f1f7b,_0x3e1af3);},'gLASV':_0x2a65cd(0x4aa),'ajWmp':function(_0x2036ae,_0x3f55c9){return _0x2036ae===_0x3f55c9;},'CSdBi':_0x15fca0[_0x2a65cd(0x622)],'GfWoc':function(_0x36aa40){return _0x36aa40();},'bSshQ':_0x15fca0[_0x2a65cd(0x147)],'SKZjn':function(_0x2d3b58,_0x19042f){var _0x122f70=_0x2a65cd;return _0x15fca0[_0x122f70(0x5c3)](_0x2d3b58,_0x19042f);},'lMREQ':function(_0x6b662c){var _0x1a496d=_0x2a65cd;return _0x15fca0[_0x1a496d(0x5b5)](_0x6b662c);},'gQhCN':function(_0x130ca1){return _0x130ca1();},'quezh':_0x2a65cd(0x126)+_0x2a65cd(0x382)+'r.ui.'+'v1','xnzqI':function(_0x4f7a16,_0x3eb19c){return _0x4f7a16+_0x3eb19c;},'QLaVs':'div','imadE':_0x15fca0[_0x2a65cd(0x21a)],'CsrmV':'sk-hi'+'nt','xJdSo':_0x2a65cd(0x2d7)+'aKour','Ddnvc':_0x2a65cd(0x2ec)+_0x2a65cd(0x638)+'keHea'+'lth','StqKB':_0x2a65cd(0x6d8)+_0x2a65cd(0x1f9)+'forms'+'.Over'+_0x2a65cd(0x65e)+_0x2a65cd(0x4f4)+'ent','dzKEG':function(_0x568dcf,_0x105182){return _0x568dcf!==_0x105182;},'RtHuv':_0x15fca0[_0x2a65cd(0x5b8)],'ZywMY':function(_0x541ec2,_0x49a171){return _0x541ec2===_0x49a171;},'JXmyp':function(_0x3f1c7b,_0x2ebff3){return _0x15fca0['SEcxl'](_0x3f1c7b,_0x2ebff3);},'LKRYq':_0x15fca0[_0x2a65cd(0x1cc)],'jqLgf':_0x2a65cd(0x3c4)+_0x2a65cd(0x636),'GCPxZ':function(_0x588748,_0xd7e21c,_0x300b38,_0x5a11d9,_0x451f69,_0x400aba){return _0x15fca0['eYMei'](_0x588748,_0xd7e21c,_0x300b38,_0x5a11d9,_0x451f69,_0x400aba);},'DdEQv':_0x15fca0[_0x2a65cd(0x57f)],'Wxfyt':'No\x20Sp'+_0x2a65cd(0x66f),'zlOKM':'Zeroe'+_0x2a65cd(0x542)+_0x2a65cd(0x2c5)+'nd\x20ma'+'xes\x20a'+_0x2a65cd(0x329)+'cy\x20on'+'\x20your'+_0x2a65cd(0x16f)+_0x2a65cd(0x141)+_0x2a65cd(0x278)+_0x2a65cd(0x361),'jCNmE':_0x15fca0[_0x2a65cd(0x110)],'TsWpI':'move','piKzR':function(_0x345144,_0x4fcef0){var _0xb08e7a=_0x2a65cd;return _0x15fca0[_0xb08e7a(0x2cd)](_0x345144,_0x4fcef0);},'KRqwP':_0x15fca0[_0x2a65cd(0x51d)],'hQyZM':function(_0x23d007,_0x9ea13d,_0x32757f,_0x553a51,_0x43b263,_0x2f5eb3){return _0x23d007(_0x9ea13d,_0x32757f,_0x553a51,_0x43b263,_0x2f5eb3);},'utgUE':'Gravi'+_0x2a65cd(0x6e1),'CySvB':function(_0x4620d2,_0x33836e,_0x4863b1,_0x3cb46e){return _0x4620d2(_0x33836e,_0x4863b1,_0x3cb46e);},'OdVWY':function(_0x210b28,_0x12fb4e,_0x26870b,_0x4d8358,_0x3c3557,_0x142eb7){return _0x210b28(_0x12fb4e,_0x26870b,_0x4d8358,_0x3c3557,_0x142eb7);},'bhSzc':function(_0x5c982b,_0xeae4ed,_0x1bb256,_0x49fad9){return _0x15fca0['GKORe'](_0x5c982b,_0xeae4ed,_0x1bb256,_0x49fad9);},'ZeOun':_0x2a65cd(0x419),'XZlli':_0x15fca0[_0x2a65cd(0x49f)],'BtBCp':function(_0xdf54a1,_0x2e7db5,_0x279d3c,_0x2070c8,_0x3921f1,_0x1d18c1){return _0xdf54a1(_0x2e7db5,_0x279d3c,_0x2070c8,_0x3921f1,_0x1d18c1);},'IhkIk':_0x2a65cd(0x35e)+'\x20effe'+_0x2a65cd(0x687)+'\x20relo'+_0x2a65cd(0x6b3)+'en\x20to'+_0x2a65cd(0x4f2)+'.','JlCgx':_0x2a65cd(0x561)+_0x2a65cd(0x3a7)+'(over'+'lay\x20o'+_0x2a65cd(0x19c),'gYbpO':function(_0x107649,_0x49afb7){return _0x107649(_0x49afb7);},'PmlDU':_0x2a65cd(0x455)+'one\x20i'+'nstal'+_0x2a65cd(0x513)+'WASM\x20'+_0x2a65cd(0x2af)+_0x2a65cd(0x5bf)+_0x2a65cd(0x538)+_0x2a65cd(0x2b5)+'hole\x20'+_0x2a65cd(0x3ed)+_0x2a65cd(0x53e)+_0x2a65cd(0x53f)+_0x2a65cd(0x51c)+'y\x20def'+_0x2a65cd(0x3a6)+_0x2a65cd(0x55d)+_0x2a65cd(0x20a)+'ure\x20t'+_0x2a65cd(0x566)+_0x2a65cd(0x1a6)+_0x2a65cd(0x505)+_0x2a65cd(0x13d)+_0x2a65cd(0x19d)+_0x2a65cd(0x60f)+_0x2a65cd(0x3cc)+_0x2a65cd(0x3e8)+_0x2a65cd(0x2e1)+_0x2a65cd(0x138)+'n\x20sig'+'natur'+'e\x20mis'+'match'+_0x2a65cd(0x184)+'\x20mome'+'nt\x20it'+_0x2a65cd(0x30f)+_0x2a65cd(0x526)+_0x2a65cd(0x140)+_0x2a65cd(0x3c0)+'m\x20on\x20'+_0x2a65cd(0x287)+_0x2a65cd(0x5b9)+_0x2a65cd(0x311)+_0x2a65cd(0x1df)+_0x2a65cd(0x3a9)+'d\x20see'+_0x2a65cd(0x428)+'h\x20one'+_0x2a65cd(0x12e)+_0x2a65cd(0x355)+'d\x20cho'+'kes\x20o'+'n.','usPYp':_0x2a65cd(0x415)+_0x2a65cd(0x5ac)+'\x20relo'+'ad.','tOiOt':'godDi'+_0x2a65cd(0x577)+_0x2a65cd(0x6b7)+'.Loca'+'lDie)','KgzeD':function(_0x3ed343,_0x25e4f4,_0x4b00b1){return _0x15fca0['SYzaj'](_0x3ed343,_0x25e4f4,_0x4b00b1);},'FvcVo':'captu'+_0x2a65cd(0x173)+_0x2a65cd(0x593)+_0x2a65cd(0x4a3)+'ing\x20+'+'\x20IsGr'+_0x2a65cd(0x378)+'d)','bEXHr':_0x15fca0['Mbrpm'],'kPncq':function(_0x1fd3b8,_0x1b557a,_0x57034b,_0x36f880,_0x12d995,_0x1c1b57){return _0x1fd3b8(_0x1b557a,_0x57034b,_0x36f880,_0x12d995,_0x1c1b57);},'Jbold':'Disab'+_0x2a65cd(0x20e)+_0x2a65cd(0x3a2)+_0x2a65cd(0x536)+_0x2a65cd(0x6cf)+_0x2a65cd(0x695)+'t\x20sta'+'rtup\x20'+_0x2a65cd(0x3eb)+'topDe'+_0x2a65cd(0x496)+'on().'+_0x2a65cd(0x14b)+_0x2a65cd(0x1b2),'znTAo':_0x2a65cd(0x3cd)+'r','Tzosh':function(_0x2eacf7,_0x23a2db,_0x55a167,_0x1c6f94){var _0x4411ac=_0x2a65cd;return _0x15fca0[_0x4411ac(0x365)](_0x2eacf7,_0x23a2db,_0x55a167,_0x1c6f94);},'umNZG':_0x15fca0[_0x2a65cd(0x32a)],'tmdkC':'5|2|0'+_0x2a65cd(0x3de)+'3'};_0x47afe6['adblo'+'ck']&&setInterval(()=>{var _0x2bbc9c=_0x2a65cd;try{for(var _0x42f864 of[_0x37d8da['ofayi'],_0x37d8da[_0x2bbc9c(0x627)],_0x2bbc9c(0x60b)+_0x2bbc9c(0x417)+'0x600'+'-pare'+'nt',_0x37d8da[_0x2bbc9c(0x605)]]){var _0x298778=document[_0x2bbc9c(0x6da)+_0x2bbc9c(0x308)+_0x2bbc9c(0x423)](_0x42f864);if(_0x298778&&_0x42f864===_0x2bbc9c(0x65b)+_0x2bbc9c(0x2fd)+_0x2bbc9c(0x2bd)+'s'){var _0xfad34f=_0x298778[_0x2bbc9c(0x467)+_0x2bbc9c(0x6d2)];for(var _0x4dc050=-0x3eb+0x2351+0x1f66*-0x1;_0x4dc050<_0xfad34f[_0x2bbc9c(0x2b1)+'h'];_0x4dc050++){if(_0xfad34f[_0x4dc050]['id']&&_0x37d8da['Dcdoi'](_0xfad34f[_0x4dc050]['id'][_0x2bbc9c(0x47b)+'Of'](_0x2bbc9c(0x60b)+_0x2bbc9c(0x181)),-0x1*-0x9c7+0x40c+-0xdd3))_0xfad34f[_0x4dc050][_0x2bbc9c(0x2d2)][_0x2bbc9c(0x16c)+'ay']='none';}}else{if(_0x298778)_0x298778[_0x2bbc9c(0x2d2)][_0x2bbc9c(0x16c)+'ay']=_0x2bbc9c(0x45c);}}}catch(_0x33c6a6){}},0xc4d+0xef9*-0x1+0xa7c);var _0x564fb2=document['creat'+_0x2a65cd(0x1b3)+_0x2a65cd(0x3fb)](_0x2a65cd(0x506)+'s');_0x564fb2[_0x2a65cd(0x2d2)][_0x2a65cd(0x568)+'xt']=_0x15fca0[_0x2a65cd(0x5b1)];var _0x34dcda=_0x564fb2['getCo'+_0x2a65cd(0x380)]('2d');function _0x5a1238(){var _0x4e95d7=_0x2a65cd;if(_0x37d8da[_0x4e95d7(0x185)](_0x37d8da['jdAVn'],_0x37d8da[_0x4e95d7(0x2ff)]))_0x363c47(_0x2f4995,_0x387c72,_0x28caaa,_0x37d8da['iVzrx']);else try{if(_0x37d8da[_0x4e95d7(0x5e6)](_0x4e95d7(0x3b9),_0x4e95d7(0x69a))){var _0x586887=document[_0x4e95d7(0x65b)+'creen'+_0x4e95d7(0x6c2)+'nt'],_0x4685f2=_0x586887&&_0x586887['tagNa'+'me']!=='CANVA'+'S'?_0x586887:document[_0x4e95d7(0x143)]||document['docum'+_0x4e95d7(0x414)+'ement'];if(_0x564fb2['paren'+_0x4e95d7(0x400)]!==_0x4685f2)_0x4685f2['appen'+_0x4e95d7(0x1e3)+'d'](_0x564fb2);}else _0x5f1bf9['adblo'+'ck']=_0x2ed5c5,_0x5f4227();}catch(_0x2aea46){try{document[_0x4e95d7(0x143)][_0x4e95d7(0x4c0)+_0x4e95d7(0x1e3)+'d'](_0x564fb2);}catch(_0x32cf91){}}}var _0x2f201c={'w':0x0,'h':0x0,'dpr':0x0};function _0x28f566(){var _0x480c4b=_0x2a65cd,_0x14a549=window[_0x480c4b(0x64d)+'ePixe'+_0x480c4b(0x16d)+'o']||0x1f69+0x1af*-0x1+-0x1db9,_0x38f01d=window['inner'+_0x480c4b(0x4b5)],_0x3e99c5=window[_0x480c4b(0x120)+_0x480c4b(0x430)+'t'];if(_0x38f01d===_0x2f201c['w']&&_0x3e99c5===_0x2f201c['h']&&_0x15fca0[_0x480c4b(0x363)](_0x14a549,_0x2f201c['dpr']))return;_0x2f201c['w']=_0x38f01d,_0x2f201c['h']=_0x3e99c5,_0x2f201c[_0x480c4b(0x28a)]=_0x14a549,_0x564fb2[_0x480c4b(0x2b7)]=Math[_0x480c4b(0x558)](_0x15fca0['PhVai'](_0x38f01d,_0x14a549)),_0x564fb2[_0x480c4b(0x233)+'t']=Math[_0x480c4b(0x558)](_0x3e99c5*_0x14a549),_0x34dcda['setTr'+'ansfo'+'rm'](_0x14a549,0x2026+0x2175+0x1*-0x419b,0x1012+-0x1*0x1c25+0xc13,_0x14a549,-0x1efd*-0x1+-0x1*-0x169c+-0x3599,0xa64+0x1e58+-0x28bc);}var _0x1f998e=0x1cdb*0x1+-0x1df*-0x4+-0x2457,_0x1d6578=performance['now'](),_0x21c9f4=0x1469+-0xabb*0x1+-0x9ae;function _0x474759(_0x575ac0){var _0x122104=_0x2a65cd,_0xa821e7={'TbtjE':function(_0x539233,_0x32616c){return _0x37d8da['bejNj'](_0x539233,_0x32616c);},'ubybd':function(_0x55d464){return _0x55d464();},'rjHJl':'loadi'+'ng','EXFBn':_0x37d8da['dFjeh'],'FMKzY':_0x37d8da['SHkom'],'UldQo':_0x37d8da[_0x122104(0x44a)],'ulPzQ':function(_0x443236,_0x14dd0b,_0x34af05,_0x3f6bd3){var _0x2660a8=_0x122104;return _0x37d8da[_0x2660a8(0x4b1)](_0x443236,_0x14dd0b,_0x34af05,_0x3f6bd3);},'uhodz':_0x37d8da['NCWpP'],'aXRfo':function(_0x486372,_0x4467de){return _0x486372*_0x4467de;},'MpMBN':_0x37d8da['frnND'],'HpvLv':_0x37d8da['HndmB'],'CFisk':_0x37d8da[_0x122104(0x5a1)],'lwJGZ':_0x122104(0x155),'CISFS':_0x37d8da[_0x122104(0x6b0)],'qdbqF':_0x37d8da[_0x122104(0x439)],'hrljL':function(_0x16b4b0,_0x1e36a4){return _0x16b4b0+_0x1e36a4;},'KeBby':_0x37d8da[_0x122104(0x2d8)],'Fqmvz':function(_0x4bd945,_0x5792bd){return _0x4bd945+_0x5792bd;},'ZpGSq':_0x122104(0x254),'euzOm':function(_0x13b9a1,_0x57b7a1){return _0x13b9a1+_0x57b7a1;},'WuFoy':_0x122104(0x342)+'255,2'+'35,24'+'0,0.5'+'5)','vGpUF':function(_0x375297,_0x5c771b){return _0x375297/_0x5c771b;},'VTzKS':function(_0x16f391,_0x54ac5d){return _0x16f391+_0x54ac5d;},'rRwgs':function(_0x25b49d,_0x3a46d5){return _0x25b49d/_0x3a46d5;}},_0x10bab9=Number(_0x47afe6[_0x122104(0x240)+'le'])||0x6c4*-0x5+0x3*0x99d+0x4fe,_0x1b1180=(-0x494+-0xb87+0x103d)*_0x10bab9,_0x442bac=(-0x27*-0x8f+-0x1*-0x133d+-0x1d*0x16a)*_0x10bab9,_0x3dcf66=_0x37d8da[_0x122104(0x3d3)](_0x1b1180,-0x97*0x37+-0x1175*0x1+0x31e9)+_0x37d8da[_0x122104(0x24c)](_0x442bac,0x25db*-0x1+-0x17a0+0x3d7d),_0x8fcebc=_0x1b1180*(0xce9+0x1651+-0x3*0xbbd)+_0x442bac*(-0x1*0x1a99+0x2e*-0x68+0x2d4b),_0x5b1f98=_0x47afe6[_0x122104(0x6ab)],_0x1a63c1=_0x5b1f98==='br'?_0x575ac0[_0x122104(0x54c)]-(0x4be*0x6+0x1*-0x1357+-0x1*0x90d)-_0x3dcf66:_0x575ac0['left']+(-0x172*0x5+0x1*-0x2037+-0x3*-0xd2b),_0x2faedc=_0x5b1f98==='ml'?_0x575ac0[_0x122104(0x38d)]+_0x575ac0[_0x122104(0x233)+'t']/(-0x2*-0x43f+0xb*-0xce+-0x1*-0x5e)-_0x8fcebc/(-0xc3b*-0x2+0x13*-0xba+-0xaa6*0x1):_0x575ac0[_0x122104(0x691)+'m']-_0x8fcebc-(_0x5b1f98==='bl'?-0x23af+0x2e*-0x5c+0x3497*0x1:0x5*-0x23e+0x1c*-0xe1+0x2468),_0x2b69fb=(_0x15303b,_0x2c6dca,_0x27b4bc,_0x4c2930,_0x238b71,_0x4ba4f3,_0x391fd9)=>{var _0x3c20e5=_0x122104,_0x196b19={'kuKca':function(_0x2c66e8,_0x2e25dc){return _0x2c66e8+_0x2e25dc;},'pnVAy':function(_0x9ce4c7,_0x36579d){return _0x9ce4c7+_0x36579d;},'bIEgt':function(_0x2beb32,_0x133679){return _0x2beb32+_0x133679;},'vSnMj':function(_0x5ad22d,_0x14a547){return _0x5ad22d+_0x14a547;},'PNisY':'\x20hook'+'s','ZoHIA':_0x3c20e5(0x3f8)+_0x3c20e5(0x4e2)+_0x3c20e5(0x585)+_0x3c20e5(0x2e3)+_0x3c20e5(0x44b),'EFvCn':_0x3c20e5(0x17f)+_0x3c20e5(0x689),'jzUEK':_0xa821e7[_0x3c20e5(0x4db)],'HWyaD':_0xa821e7['EXFBn'],'CxJpx':_0xa821e7['FMKzY'],'CaRdh':_0xa821e7['UldQo'],'ZoSpA':function(_0x2e8db0,_0x13d8f8,_0x285baf,_0x4e992b){var _0x246753=_0x3c20e5;return _0xa821e7[_0x246753(0x5a2)](_0x2e8db0,_0x13d8f8,_0x285baf,_0x4e992b);},'sJHVv':_0xa821e7[_0x3c20e5(0x5c2)]},_0x3e36a2=_0x301137['has'](_0x2c6dca);_0x34dcda[_0x3c20e5(0x546)](),_0x34dcda[_0x3c20e5(0x3ff)+_0x3c20e5(0x310)]();if(_0x34dcda[_0x3c20e5(0x558)+_0x3c20e5(0x5fd)])_0x34dcda['round'+'Rect'](_0x27b4bc,_0x4c2930,_0x238b71,_0x4ba4f3,_0xa821e7['aXRfo'](0x1*0x12+-0x486*-0x7+-0x1fb5,_0x10bab9));else _0x34dcda[_0x3c20e5(0x12d)](_0x27b4bc,_0x4c2930,_0x238b71,_0x4ba4f3);_0x34dcda['fillS'+'tyle']=_0x3e36a2?_0xa821e7[_0x3c20e5(0x124)]:_0x3c20e5(0x342)+_0x3c20e5(0x4b2)+_0x3c20e5(0x565)+'7)',_0x34dcda[_0x3c20e5(0x316)](),_0x34dcda[_0x3c20e5(0x2f5)+_0x3c20e5(0x2de)]=-0x2*0x521+-0x246b*0x1+0x5*0x956,_0x34dcda['strok'+_0x3c20e5(0x492)+'e']=_0x3e36a2?_0x1358b2:_0xa821e7[_0x3c20e5(0x659)],_0x34dcda[_0x3c20e5(0x495)+'e']();if(_0x3e36a2){if(_0xa821e7[_0x3c20e5(0x3ee)]!==_0xa821e7[_0x3c20e5(0x64a)])_0x34dcda[_0x3c20e5(0x420)+'wColo'+'r']=_0x2e0fe4,_0x34dcda['shado'+_0x3c20e5(0x569)]=0x1*0x2069+0x1a*0x9c+-0x3033,_0x34dcda[_0x3c20e5(0x316)](),_0x34dcda['shado'+_0x3c20e5(0x569)]=-0x12*-0x6d+0xab7+-0x3ad*0x5;else{var _0x300499=_0x4fe0ad[_0x3c20e5(0x182)+_0x3c20e5(0x636)]?'SAFE\x20'+'MODE\x20'+_0x3c20e5(0x613)+'rlay\x20'+_0x3c20e5(0x3dc)+_0x3c20e5(0x3e5)+_0x3c20e5(0x6c4)+_0x3c20e5(0x470)+'ad\x20to'+_0x3c20e5(0x590)+')':_0xb542b6[_0x3c20e5(0x33d)]?_0x196b19['kuKca'](_0x196b19[_0x3c20e5(0x318)](_0x196b19['bIEgt'](_0x3c20e5(0x66b)+_0x3c20e5(0x447)+'\x20'+(_0x3009e3['hooks'+'Total']?_0x196b19['vSnMj'](_0x13c70f[_0x3c20e5(0x1e0)+'Ok']+'/',_0x39b9c8[_0x3c20e5(0x1e0)+'Total'])+_0x196b19[_0x3c20e5(0x5d3)]:_0x196b19[_0x3c20e5(0x5a0)]),_0x196b19[_0x3c20e5(0x1c7)])+(_0x412466[_0x3c20e5(0x212)+_0x3c20e5(0x550)]?_0x3c20e5(0x113)+'d':_0x196b19[_0x3c20e5(0x33a)])+(_0x3c20e5(0x49a)+_0x3c20e5(0x145)+'\x20')+(_0x4e5019[_0x3c20e5(0x53b)+_0x3c20e5(0x1fa)]?_0x196b19[_0x3c20e5(0x307)]:_0x196b19[_0x3c20e5(0x275)]),_0x196b19['CaRdh']),_0x5622d0['movem'+_0x3c20e5(0x21c)]?_0x196b19['HWyaD']:_0x3c20e5(0x45c)):'UWMK\x20'+'MISSI'+'NG\x20—\x20'+_0x3c20e5(0x50e)+_0x3c20e5(0x518)+'ly\x20(r'+_0x3c20e5(0x684)+_0x3c20e5(0x5c9)+'he\x20us'+_0x3c20e5(0x543)+_0x3c20e5(0x675);if(_0x3de4ca[_0x3c20e5(0x3d0)+'rror'])_0x300499+=_0x196b19['kuKca'](_0x3c20e5(0x347)+'R:\x20',_0x500e8a[_0x3c20e5(0x3d0)+'rror']);return _0x5d1df0(_0x3c20e5(0x3ec)+'s',_0x300499,_0x321f07['uwmk'],null,[_0x196b19[_0x3c20e5(0x4b7)](_0x24238b,_0x196b19[_0x3c20e5(0x28d)],'calls'+_0x3c20e5(0x186)+_0x3c20e5(0x62a)+_0x3c20e5(0x459)+_0x3c20e5(0x548)+_0x3c20e5(0x6c1)+_0x3c20e5(0x68a)+_0x3c20e5(0x322)+'Frame'+_0x3c20e5(0x510),_0x1dfec8(_0x3c20e5(0x680),()=>{var _0x24d49a=_0x3c20e5;try{if(_0xac5c63)_0x30dc31['call'](_0x24d49a(0x6de)+'Engin'+_0x24d49a(0x502)+_0x24d49a(0x2f9)+_0x24d49a(0x6b2),_0x24d49a(0x68a)+'arget'+_0x24d49a(0x1f3)+_0x24d49a(0x510),[-0x2616+-0x101a+0x3720]);}catch(_0x3cab32){}}))]);}}_0x34dcda[_0x3c20e5(0x66a)+_0x3c20e5(0x14e)]=_0x3e36a2?_0xa821e7[_0x3c20e5(0x43d)]:_0xa821e7['qdbqF'],_0x34dcda['textA'+_0x3c20e5(0x376)]=_0x3c20e5(0x63c)+'r',_0x34dcda[_0x3c20e5(0x1ba)+'aseli'+'ne']='middl'+'e',_0x34dcda[_0x3c20e5(0x5cc)]=_0xa821e7[_0x3c20e5(0x345)](_0x3c20e5(0x45d),Math[_0x3c20e5(0x558)]((-0x26*-0xf0+-0x24*0xa+0x1*-0x222c)*_0x10bab9))+_0xa821e7[_0x3c20e5(0x699)],_0x34dcda['fillT'+_0x3c20e5(0x15b)](_0x15303b,_0xa821e7['hrljL'](_0x27b4bc,_0x238b71/(0x1a94+0x2637*0x1+0x217*-0x1f)),_0xa821e7[_0x3c20e5(0x161)](_0x4c2930,_0x4ba4f3/(0x1360+-0xac8+-0x7*0x13a))-(_0x391fd9?_0xa821e7[_0x3c20e5(0x580)](0x109d+0x1ada+-0x2b72,_0x10bab9):-0x2*-0xf31+0x1639*0x1+-0x3*0x1189));if(_0x391fd9){if(_0x3c20e5(0x5df)!==_0xa821e7['ZpGSq'])_0x34dcda[_0x3c20e5(0x5cc)]=_0xa821e7[_0x3c20e5(0x6b6)]('600\x20',Math['round']((0x402+-0x18ec+0x1f*0xad)*_0x10bab9))+(_0x3c20e5(0x5c6)+_0x3c20e5(0x5fe)+_0x3c20e5(0x55a)+_0x3c20e5(0x2e4)+'tem-u'+'i,san'+'s-ser'+'if'),_0x34dcda[_0x3c20e5(0x66a)+'tyle']=_0x3e36a2?_0xa821e7['CISFS']:_0xa821e7[_0x3c20e5(0x6a4)],_0x34dcda['fillT'+'ext'](_0x391fd9,_0x27b4bc+_0xa821e7['vGpUF'](_0x238b71,0x346+0x1281*-0x1+-0x1*-0xf3d),_0xa821e7[_0x3c20e5(0x47c)](_0x4c2930,_0xa821e7[_0x3c20e5(0x666)](_0x4ba4f3,-0x1240+-0x2bd*-0x2+0x8*0x199))+(-0x4b+0x1bb8+-0x1b65*0x1)*_0x10bab9);else{var _0xef6bec=(_0x3c20e5(0x3b4)+_0x3c20e5(0x37d)+'|2|4|'+_0x3c20e5(0x456)+'|7')['split']('|'),_0x178a5e=0x1ab*-0x3+0x359*-0x7+-0xd*-0x230;while(!![]){switch(_0xef6bec[_0x178a5e++]){case'0':_0x3fb208-_0x4fdb39>=0x9f*-0x19+-0x899+0x1a14&&(_0x380240=_0x1287fb[_0x3c20e5(0x558)](_0xa821e7['TbtjE'](_0x4f3ee3,0x2054+-0x46*0x27+-0x8e1*0x2)/(_0x3fb208-_0x5c681e)),_0x328ea5=-0x206b+0x1b20+-0x54b*-0x1,_0x119c7f=_0x3fb208);continue;case'1':_0xf0c44b(_0x4683b6);continue;case'2':_0xa821e7[_0x3c20e5(0xee)](_0x5872d0);continue;case'3':if(_0x330a63[_0x3c20e5(0x51b)+_0x3c20e5(0x40a)])_0xb8362(_0x4642d5);continue;case'4':_0x57be5a[_0x3c20e5(0x2a7)+'Rect'](0x3*0x60a+-0x1728+0x50a,-0xf67*-0x1+0x5f3+-0x155a,_0x151355['w'],_0x2df180['h']);continue;case'5':_0x2841af();continue;case'6':if(_0x2d2292[_0x3c20e5(0x45b)+'rokes'])_0x264e0d(_0x4642d5);continue;case'7':_0x2b1e18(_0x4642d5);continue;case'8':var _0x4642d5={'left':0x0,'top':0x0,'right':_0x548102['w'],'bottom':_0x36441a['h'],'width':_0x151aeb['w'],'height':_0x36cfc5['h']};continue;case'9':var _0x3fb208=_0x4f29bf['now']();continue;case'10':_0x1fcae4++;continue;}break;}}}_0x34dcda[_0x3c20e5(0x5f5)+'re']();};_0x37d8da['bQdxe'](_0x2b69fb,'W',_0x37d8da['McxIs'],_0x37d8da[_0x122104(0x6ac)](_0x1a63c1,_0x1b1180)+_0x442bac,_0x2faedc,_0x1b1180,_0x1b1180),_0x2b69fb('A',_0x122104(0x4ec),_0x1a63c1,_0x2faedc+_0x1b1180+_0x442bac,_0x1b1180,_0x1b1180),_0x2b69fb('S',_0x37d8da['lDEVq'],_0x37d8da[_0x122104(0x6ac)](_0x1a63c1,_0x1b1180)+_0x442bac,_0x37d8da[_0x122104(0x424)](_0x37d8da[_0x122104(0x6ac)](_0x2faedc,_0x1b1180),_0x442bac),_0x1b1180,_0x1b1180),_0x37d8da[_0x122104(0x336)](_0x2b69fb,'D',_0x37d8da[_0x122104(0x57c)],_0x37d8da[_0x122104(0x424)](_0x1a63c1,_0x37d8da[_0x122104(0x399)](_0x1b1180+_0x442bac,0x1569+-0x25*0x51+0x92*-0x11)),_0x2faedc+_0x1b1180+_0x442bac,_0x1b1180,_0x1b1180);var _0x503048=(_0x3dcf66-_0x442bac)/(0x1*-0x20c+0xfac+-0x2*0x6cf),_0x23f5b4=_0x2faedc+_0x37d8da['CPbOH'](_0x1b1180,_0x442bac)*(0x2f*0x71+-0x1239+-0xe*0x2e);_0x2b69fb(_0x37d8da['qjKsQ'],_0x122104(0x451)+'1',_0x1a63c1,_0x23f5b4,_0x503048,_0x1b1180,_0x47afe6['ksCps']?_0x37d8da[_0x122104(0x4f9)](_0x4322fd(0x8f4+0x2225+-0x2b18),_0x122104(0x487)):''),_0x37d8da['TyKle'](_0x2b69fb,_0x122104(0x1bd),_0x37d8da['eeEdy'],_0x37d8da['VqhhM'](_0x1a63c1+_0x503048,_0x442bac),_0x23f5b4,_0x503048,_0x1b1180,_0x47afe6[_0x122104(0x630)]?_0x4322fd(-0x19f5+-0x1*-0x1744+0x2*0x15a)+_0x37d8da[_0x122104(0x29a)]:''),_0x2b69fb('',_0x37d8da[_0x122104(0x384)],_0x1a63c1,_0x37d8da['VqhhM'](_0x23f5b4,_0x1b1180)+_0x442bac,_0x3dcf66,_0x1b1180*(0x1e33*0x1+0x1*-0xbe0+-0x1253+0.45));}function _0x26ddbf(_0x60bf34){var _0x5eeb22=_0x2a65cd,_0x1f4f8e={'hQeCr':_0x5eeb22(0x175)+'|0|2|'+'5','ivHBo':_0x5eeb22(0x158),'kdUMk':_0x5eeb22(0x473),'oUWcd':_0x37d8da[_0x5eeb22(0x520)]};if(_0x37d8da[_0x5eeb22(0x185)](_0x5eeb22(0x337),_0x5eeb22(0x337))){var _0xc54fb7=_0x60bf34[_0x5eeb22(0x2b7)]/(-0x1*0x1051+0x5*0x6bb+-0x1154),_0x23cf65=_0x60bf34['heigh'+'t']/(0x2*-0x872+0x1df5+-0xd0f),_0x38786a=Number(_0x47afe6['chSiz'+'e'])||0x20*-0xc0+0x22d6+-0xad5,_0x1cc978=/^#[0-9a-f]{6}$/i[_0x5eeb22(0x1ab)](_0x47afe6[_0x5eeb22(0x418)+'or'])?_0x47afe6[_0x5eeb22(0x418)+'or']:_0x37d8da['oXKZF'];_0x34dcda[_0x5eeb22(0x546)](),_0x34dcda['strok'+_0x5eeb22(0x492)+'e']=_0x1cc978,_0x34dcda[_0x5eeb22(0x66a)+'tyle']=_0x1cc978,_0x34dcda[_0x5eeb22(0x2f5)+'idth']=Math['max'](-0xe20+-0x3fd*-0x3+0x22a+0.5,(-0x595*0x1+-0x932+-0x1*-0xec9)*_0x38786a),_0x34dcda['shado'+_0x5eeb22(0x34e)+'r']=_0x1cc978,_0x34dcda[_0x5eeb22(0x420)+_0x5eeb22(0x569)]=-0x25d1+0x157a+0x105d;var _0x50d095=(0x203+0x99e+0x1*-0xb9b)*_0x38786a,_0x54e201=_0x37d8da[_0x5eeb22(0x139)](-0xc73*-0x3+-0x12e*0x21+0x7*0x3b,_0x38786a);_0x34dcda['begin'+'Path'](),_0x34dcda[_0x5eeb22(0x1f6)+'o'](_0x37d8da[_0x5eeb22(0x56d)](_0xc54fb7,_0x50d095)-_0x54e201,_0x23cf65),_0x34dcda[_0x5eeb22(0x125)+'o'](_0x37d8da['yhONe'](_0xc54fb7,_0x50d095),_0x23cf65),_0x34dcda['moveT'+'o'](_0xc54fb7+_0x50d095,_0x23cf65),_0x34dcda['lineT'+'o'](_0xc54fb7+_0x50d095+_0x54e201,_0x23cf65),_0x34dcda['moveT'+'o'](_0xc54fb7,_0x23cf65-_0x50d095-_0x54e201),_0x34dcda[_0x5eeb22(0x125)+'o'](_0xc54fb7,_0x37d8da[_0x5eeb22(0x56d)](_0x23cf65,_0x50d095)),_0x34dcda['moveT'+'o'](_0xc54fb7,_0x23cf65+_0x50d095),_0x34dcda['lineT'+'o'](_0xc54fb7,_0x37d8da[_0x5eeb22(0x52e)](_0x37d8da[_0x5eeb22(0x219)](_0x23cf65,_0x50d095),_0x54e201)),_0x34dcda[_0x5eeb22(0x495)+'e'](),_0x34dcda['begin'+'Path'](),_0x34dcda['arc'](_0xc54fb7,_0x23cf65,(0x1*0x2431+0x9*-0xeb+-0x3*0x94f+0.6000000000000001)*_0x38786a,0x26cc*0x1+0x2d0+-0x299c,Math['PI']*(0x90e+-0x821+-0xeb)),_0x34dcda['fill'](),_0x34dcda[_0x5eeb22(0x5f5)+'re']();}else{var _0x10a56f=_0x1f4f8e[_0x5eeb22(0x4fa)]['split']('|'),_0xc66b93=-0x41*-0x4f+0x1338+0x2747*-0x1;while(!![]){switch(_0x10a56f[_0xc66b93++]){case'0':_0xbeb6e1[_0x5eeb22(0x475)]=/^#[0-9a-f]{6}$/i['test'](_0x155dce)?_0x26c40f:_0x5eeb22(0x2b3)+'9d';continue;case'1':var _0xbeb6e1=_0x4281cd[_0x5eeb22(0x657)+'eElem'+_0x5eeb22(0x3fb)](_0x1f4f8e['ivHBo']);continue;case'2':_0xbeb6e1[_0x5eeb22(0x381)+'ut']=()=>_0x5d9cb6(_0xbeb6e1['value']);continue;case'3':_0xbeb6e1[_0x5eeb22(0x6cc)]=_0x1f4f8e[_0x5eeb22(0x3b6)];continue;case'4':_0xbeb6e1['class'+_0x5eeb22(0x57e)]=_0x1f4f8e[_0x5eeb22(0xf4)];continue;case'5':return _0xbeb6e1;}break;}}}function _0x316001(_0x396069){var _0x22797f=_0x2a65cd,_0x2fb9dc={'lQLqs':function(_0x4c81f9,_0x67aa17){return _0x4c81f9||_0x67aa17;},'NSUtn':_0x22797f(0x342)+_0x22797f(0x444)+'35,24'+'0,0.7'+'5)'};if('OBuIA'===_0x22797f(0x211))_0x51e84b['hookG'+'od']=_0x2354b5,_0xfa7ac();else{var _0x187b99=_0x37d8da['liriC']['split']('|'),_0x2f27fe=-0x2*-0xc64+-0x1f28+-0x20*-0x33;while(!![]){switch(_0x187b99[_0x2f27fe++]){case'0':_0x34dcda['textB'+_0x22797f(0x348)+'ne']=_0x37d8da['bKgMV'];continue;case'1':var _0x194ad4=(_0x57d19a,_0x575d8e)=>{var _0xbf83e8=_0x22797f;_0x34dcda['fillS'+'tyle']=_0x2fb9dc[_0xbf83e8(0x6d3)](_0x575d8e,_0x2fb9dc['NSUtn']),_0x34dcda[_0xbf83e8(0x658)+'ext'](_0x57d19a,_0x430fcd,_0x288cc3),_0x288cc3+=-0x72*-0x41+0x5e5+-0x22c7;};continue;case'2':var _0x288cc3=-0x119*0x1f+-0x165f+0x3892,_0x430fcd=0x26c5+-0x425*0x7+-0x9b6;continue;case'3':_0x34dcda['save']();continue;case'4':_0x34dcda[_0x22797f(0x5cc)]=_0x37d8da[_0x22797f(0x683)];continue;case'5':_0x34dcda['resto'+'re']();continue;case'6':if(!_0xa83068['gameL'+'oaded'])_0x194ad4(_0x37d8da['DUArq'],_0x22797f(0x342)+_0x22797f(0x5bb)+_0x22797f(0x356)+'0,0.6'+')');continue;case'7':_0x34dcda[_0x22797f(0x38b)+_0x22797f(0x376)]='left';continue;case'8':_0x37d8da['nXyJX'](_0x194ad4,'SAKUR'+'A\x20KOU'+_0x22797f(0x274)+'1',_0x37d8da[_0x22797f(0x46b)]);continue;case'9':if(_0x47afe6[_0x22797f(0x47f)])_0x37d8da['eRzTu'](_0x194ad4,_0x21c9f4+_0x22797f(0x472));continue;}break;}}}function _0x425488(){var _0x2f9328=_0x2a65cd;requestAnimationFrame(_0x425488),_0x1f998e++;var _0x1c6eef=performance[_0x2f9328(0x544)]();_0x1c6eef-_0x1d6578>=0x79f*0x5+0x1*0x2364+-0xb*0x681&&(_0x21c9f4=Math[_0x2f9328(0x558)](_0x1f998e*(-0x1*-0x19f9+0x5*-0x1f9+-0xc34)/_0x15fca0[_0x2f9328(0x1e5)](_0x1c6eef,_0x1d6578)),_0x1f998e=0x245*-0xf+-0x1*0x17c9+-0x2*-0x1cea,_0x1d6578=_0x1c6eef);_0x15fca0['TSLaJ'](_0x28f566),_0x5a1238(),_0x34dcda['clear'+'Rect'](0x3a5+-0x1a*-0x1+0x89*-0x7,-0x256e+-0x2cf*-0x7+0x1*0x11c5,_0x2f201c['w'],_0x2f201c['h']);var _0x786098={'left':0x0,'top':0x0,'right':_0x2f201c['w'],'bottom':_0x2f201c['h'],'width':_0x2f201c['w'],'height':_0x2f201c['h']};if(_0x47afe6['cross'+_0x2f9328(0x40a)])_0x15fca0[_0x2f9328(0x4e1)](_0x26ddbf,_0x786098);if(_0x47afe6[_0x2f9328(0x45b)+_0x2f9328(0x62c)])_0x15fca0['ZcjAu'](_0x474759,_0x786098);_0x15fca0[_0x2f9328(0x6aa)](_0x316001,_0x786098);}var _0x101a7e=document[_0x2a65cd(0x657)+'eElem'+_0x2a65cd(0x3fb)](_0x2a65cd(0x4b4));_0x101a7e['id']=_0x15fca0[_0x2a65cd(0x6ae)],_0x101a7e['style']['cssTe'+'xt']=_0x15fca0['YWhAa'];var _0xaeff6c=_0x101a7e['attac'+_0x2a65cd(0x694)+'ow']({'mode':'open'});(document['body']||document[_0x2a65cd(0x3e2)+_0x2a65cd(0x414)+_0x2a65cd(0x308)])[_0x2a65cd(0x4c0)+_0x2a65cd(0x1e3)+'d'](_0x101a7e);var _0x171bcd=![],_0x3b575d={};try{'geSlA'===_0x2a65cd(0x490)?_0x3b575d=JSON['parse'](localStorage[_0x2a65cd(0x111)+'em'](_0x2a65cd(0x126)+'a.kou'+'r.ui.'+'v1')||'{}'):(_0x1afcd3['keyst'+_0x2a65cd(0x62c)]=_0x4373e1,_0x37d8da[_0x2a65cd(0x4ea)](_0x2e50fd));}catch(_0x453cd1){}function _0x4c358b(){var _0x2a70cc=_0x2a65cd;try{localStorage[_0x2a70cc(0x670)+'em']('sakur'+_0x2a70cc(0x382)+_0x2a70cc(0x6a2)+'v1',JSON[_0x2a70cc(0x34b)+'gify'](_0x3b575d));}catch(_0x39b9c3){}}function _0x577913(_0x1f442e,_0x729590){var _0x4053dc=_0x2a65cd,_0x1327a6=document['creat'+'eElem'+'ent'](_0x15fca0['YnKNH']);return _0x1327a6[_0x4053dc(0x6cc)]=_0x15fca0[_0x4053dc(0x5ad)],_0x1327a6['class'+'Name']=_0x4053dc(0x235)+_0x4053dc(0xf1),_0x1327a6['setAt'+_0x4053dc(0x35b)+'te']('role','switc'+'h'),_0x1327a6[_0x4053dc(0x6a7)+'tribu'+'te']('aria-'+_0x4053dc(0x3c5)+'ed',_0x15fca0['CIaSQ'](String,!!_0x1f442e)),_0x1327a6[_0x4053dc(0x13a)+'ck']=_0x3e8116=>{var _0xd1f11c=_0x4053dc;_0x3e8116[_0xd1f11c(0x371)+_0xd1f11c(0x2f6)+_0xd1f11c(0x4ca)]();var _0x178e47=_0x1327a6['getAt'+_0xd1f11c(0x35b)+'te'](_0xd1f11c(0x22c)+_0xd1f11c(0x3c5)+'ed')!==_0x37d8da[_0xd1f11c(0x5af)];_0x1327a6[_0xd1f11c(0x6a7)+_0xd1f11c(0x35b)+'te'](_0xd1f11c(0x22c)+_0xd1f11c(0x3c5)+'ed',_0x37d8da[_0xd1f11c(0x2a3)](String,_0x178e47)),_0x729590(_0x178e47);},_0x1327a6;}function _0x3c0b9a(_0x2a3e61,_0x5a5db7,_0x5ceae0,_0x4070d6,_0x2085d8){var _0x48acb7=_0x2a65cd,_0x1753c8={'HATVB':function(_0x4163ea){return _0x4163ea();}},_0x375578=document['creat'+_0x48acb7(0x1b3)+'ent'](_0x15fca0[_0x48acb7(0x195)]);_0x375578[_0x48acb7(0x42c)+_0x48acb7(0x57e)]=_0x15fca0['Detph'];var _0x1bd43e=document['creat'+_0x48acb7(0x1b3)+'ent'](_0x15fca0[_0x48acb7(0x24a)]);_0x1bd43e['type']=_0x15fca0[_0x48acb7(0x27c)],_0x1bd43e[_0x48acb7(0x42c)+_0x48acb7(0x57e)]=_0x48acb7(0x1bc)+_0x48acb7(0x441),_0x1bd43e['min']=_0x5a5db7,_0x1bd43e[_0x48acb7(0x6bc)]=_0x5ceae0,_0x1bd43e[_0x48acb7(0x4e7)]=_0x4070d6,_0x1bd43e['value']=_0x2a3e61;var _0x192e67=document['creat'+_0x48acb7(0x1b3)+'ent']('span');_0x192e67[_0x48acb7(0x42c)+_0x48acb7(0x57e)]=_0x15fca0[_0x48acb7(0x5a3)],_0x192e67['textC'+_0x48acb7(0x3b7)+'t']=String(_0x2a3e61);var _0xa6e369=()=>{var _0x3b4ced=_0x48acb7;_0x192e67['textC'+'onten'+'t']=String(_0x1bd43e[_0x3b4ced(0x475)]),_0x375578[_0x3b4ced(0x2d2)][_0x3b4ced(0x36a)+_0x3b4ced(0x3ba)+'y'](_0x3b4ced(0x1ef),_0x37d8da[_0x3b4ced(0x3d3)]((_0x1bd43e[_0x3b4ced(0x475)]-_0x5a5db7)/(_0x5ceae0-_0x5a5db7),0xca6+0x1*0x2285+-0x2ec7)+'%');};return _0x1bd43e[_0x48acb7(0x381)+'ut']=()=>{_0x1753c8['HATVB'](_0xa6e369),_0x2085d8(Number(_0x1bd43e['value']));},_0xa6e369(),_0x375578[_0x48acb7(0x4c0)+'d'](_0x1bd43e,_0x192e67),_0x375578;}function _0x1e7a94(_0xd69453,_0x571355){var _0x325011=_0x2a65cd,_0x54e784=(_0x325011(0x474)+'|1|2|'+'0')[_0x325011(0x646)]('|'),_0x195965=-0x15e3+-0x477+0x1a5a;while(!![]){switch(_0x54e784[_0x195965++]){case'0':return _0x1b8486;case'1':_0x1b8486[_0x325011(0x475)]=/^#[0-9a-f]{6}$/i[_0x325011(0x1ab)](_0xd69453)?_0xd69453:_0x15fca0['sDxSe'];continue;case'2':_0x1b8486[_0x325011(0x381)+'ut']=()=>_0x571355(_0x1b8486[_0x325011(0x475)]);continue;case'3':var _0x1b8486=document['creat'+_0x325011(0x1b3)+_0x325011(0x3fb)]('input');continue;case'4':_0x1b8486[_0x325011(0x6cc)]=_0x325011(0x473);continue;case'5':_0x1b8486['class'+_0x325011(0x57e)]=_0x15fca0[_0x325011(0x426)];continue;}break;}}function _0x190b44(_0x41c99d,_0x43a819,_0x21c0ab){var _0x2f2317=_0x2a65cd,_0x49983d=document[_0x2f2317(0x657)+_0x2f2317(0x1b3)+'ent'](_0x37d8da[_0x2f2317(0xf7)]);_0x49983d[_0x2f2317(0x42c)+'Name']='sk-fi'+_0x2f2317(0x68d);for(var [_0x1a1111,_0x16f3b5]of _0x43a819){var _0x3e660d=document['creat'+'eElem'+'ent'](_0x2f2317(0x5bc)+'n');_0x3e660d[_0x2f2317(0x475)]=_0x1a1111,_0x3e660d['textC'+'onten'+'t']=_0x16f3b5,_0x49983d[_0x2f2317(0x4c0)+'dChil'+'d'](_0x3e660d);}return _0x49983d['value']=_0x41c99d,_0x49983d[_0x2f2317(0x63a)+_0x2f2317(0x6c0)]=()=>_0x21c0ab(_0x49983d[_0x2f2317(0x475)]),_0x49983d;}function _0x1eb9ea(_0x6c9417,_0x4a6b15){var _0xf1c626=_0x2a65cd,_0x552b22={'nmLJo':function(_0x4dc0b4){var _0xb96322=_0x5846;return _0x37d8da[_0xb96322(0x4ac)](_0x4dc0b4);},'gbjOy':function(_0x45a347,_0x32cda5){return _0x45a347!==_0x32cda5;},'DkuIr':_0x37d8da['DVhNp']},_0x3bc645=document[_0xf1c626(0x657)+'eElem'+_0xf1c626(0x3fb)]('butto'+'n');return _0x3bc645['type']=_0xf1c626(0x47a)+'n',_0x3bc645[_0xf1c626(0x42c)+_0xf1c626(0x57e)]=_0xf1c626(0x357)+'n',_0x3bc645['textC'+_0xf1c626(0x3b7)+'t']=_0x6c9417,_0x3bc645[_0xf1c626(0x13a)+'ck']=_0x55f948=>{var _0x5a778a=_0xf1c626;_0x552b22['gbjOy']('tYWaG',_0x552b22[_0x5a778a(0x4e5)])?(_0x33a77b[_0x5a778a(0x6ab)]=_0x358f61,_0x552b22[_0x5a778a(0x3c9)](_0x35335b)):(_0x55f948[_0x5a778a(0x371)+_0x5a778a(0x2f6)+'ation'](),_0x552b22[_0x5a778a(0x3c9)](_0x4a6b15));},_0x3bc645;}function _0x44f384(_0x1287f3,_0x51754a,_0x2716fd){var _0x4f135e=_0x2a65cd,_0x2b3990=document[_0x4f135e(0x657)+'eElem'+_0x4f135e(0x3fb)](_0x15fca0[_0x4f135e(0x195)]);_0x2b3990['class'+'Name']=_0x15fca0['ZSbso'];var _0x52f641=document['creat'+_0x4f135e(0x1b3)+_0x4f135e(0x3fb)]('span');_0x52f641['class'+_0x4f135e(0x57e)]=_0x15fca0['MWDLj'],_0x52f641[_0x4f135e(0x29b)+'onten'+'t']=_0x1287f3;if(_0x51754a){var _0x47a35f=document[_0x4f135e(0x657)+_0x4f135e(0x1b3)+_0x4f135e(0x3fb)]('small');_0x47a35f['class'+'Name']=_0x15fca0[_0x4f135e(0x67d)],_0x47a35f['textC'+_0x4f135e(0x3b7)+'t']=_0x51754a,_0x52f641[_0x4f135e(0x4c0)+_0x4f135e(0x1e3)+'d'](_0x47a35f);}return _0x2b3990['appen'+'d'](_0x52f641,_0x2716fd),_0x2b3990;}function _0x5e61f2(_0x14b523,_0xaaac34){var _0x2e4e0c=_0x2a65cd,_0x46a530=document[_0x2e4e0c(0x657)+_0x2e4e0c(0x1b3)+'ent']('div');return _0x46a530['class'+_0x2e4e0c(0x57e)]='sk-no'+'te'+(_0xaaac34?_0x2e4e0c(0x54f):''),_0x46a530['textC'+'onten'+'t']=_0x14b523,_0x46a530;}function _0x585351(_0x3c4348,_0x28d1e5,_0x5b5cbe,_0x105855,_0x8ff789){var _0x15ae8a=_0x2a65cd,_0x927820={'fOAoo':_0x15fca0['ifUXy']},_0x5346be=document['creat'+'eElem'+_0x15ae8a(0x3fb)]('div');_0x5346be[_0x15ae8a(0x42c)+'Name']=_0x15fca0['OGprs']+(_0x5b5cbe?'\x20on':'');var _0x2e9cd0=document[_0x15ae8a(0x657)+_0x15ae8a(0x1b3)+_0x15ae8a(0x3fb)](_0x15ae8a(0x4b4));_0x2e9cd0[_0x15ae8a(0x42c)+'Name']=_0x15fca0[_0x15ae8a(0x241)];var _0x5b802e=document[_0x15ae8a(0x657)+'eElem'+_0x15ae8a(0x3fb)](_0x15fca0['mPfXi']);_0x5b802e[_0x15ae8a(0x42c)+'Name']=_0x15fca0[_0x15ae8a(0x1e1)];var _0x5e5b30=document[_0x15ae8a(0x657)+_0x15ae8a(0x1b3)+'ent']('stron'+'g');_0x5e5b30[_0x15ae8a(0x29b)+'onten'+'t']=_0x3c4348,_0x5b802e[_0x15ae8a(0x4c0)+_0x15ae8a(0x1e3)+'d'](_0x5e5b30);if(_0x105855){var _0x2a1bed=_0x15fca0[_0x15ae8a(0x5d9)](_0x577913,_0x5b5cbe,_0x1773e1=>{var _0x9b55b0=_0x15ae8a;_0x5346be[_0x9b55b0(0x42c)+'List'][_0x9b55b0(0x5e9)+'e']('on',_0x1773e1),_0x37d8da[_0x9b55b0(0x2a3)](_0x105855,_0x1773e1);});_0x2e9cd0[_0x15ae8a(0x4c0)+'d'](_0x5b802e,_0x2a1bed);}else{if('ufPDo'!==_0x15fca0[_0x15ae8a(0x3b8)])_0x2e9cd0['appen'+_0x15ae8a(0x1e3)+'d'](_0x5b802e);else try{_0x42f0e1[_0x15ae8a(0x670)+'em'](_0x927820['fOAoo'],_0x215eb8[_0x15ae8a(0x34b)+_0x15ae8a(0x33f)](_0x1fb7be));}catch(_0x4db9ea){}}_0x5346be['appen'+_0x15ae8a(0x1e3)+'d'](_0x2e9cd0);if(_0x8ff789&&_0x8ff789[_0x15ae8a(0x2b1)+'h']){var _0x421152=document['creat'+'eElem'+_0x15ae8a(0x3fb)](_0x15ae8a(0x4b4));_0x421152[_0x15ae8a(0x42c)+'Name']=_0x15ae8a(0x104)+_0x15ae8a(0x5cd);var _0x54650a=document[_0x15ae8a(0x657)+'eElem'+_0x15ae8a(0x3fb)]('div');_0x54650a['class'+_0x15ae8a(0x57e)]=_0x15ae8a(0x276)+'esc',_0x54650a['textC'+'onten'+'t']=_0x28d1e5,_0x421152[_0x15ae8a(0x4c0)+_0x15ae8a(0x1e3)+'d'](_0x54650a);for(var _0x2cd8e2 of _0x8ff789)_0x421152['appen'+_0x15ae8a(0x1e3)+'d'](_0x2cd8e2);_0x5346be['appen'+'dChil'+'d'](_0x421152);}return _0x5346be;}var _0x97483d=[{'id':'comba'+'t','label':_0x2a65cd(0x108)+'t'},{'id':_0x15fca0[_0x2a65cd(0x61f)],'label':'Move'},{'id':_0x15fca0['hrHha'],'label':_0x15fca0[_0x2a65cd(0x4e8)]},{'id':_0x15fca0['aecyO'],'label':'Misc'},{'id':'safe','label':_0x15fca0[_0x2a65cd(0x48c)]}];function _0x637a67(){var _0x1d6dab=_0x2a65cd,_0x532be0=_0xa83068['safeM'+_0x1d6dab(0x636)]?_0x1d6dab(0x17a)+'MODE\x20'+'—\x20ove'+'rlay\x20'+'only,'+_0x1d6dab(0x3e5)+_0x1d6dab(0x6c4)+'(relo'+_0x1d6dab(0x38e)+'\x20exit'+')':_0xa83068[_0x1d6dab(0x33d)]?_0x37d8da[_0x1d6dab(0x2cb)](_0x37d8da['tkfPm'](_0x1d6dab(0x66b)+_0x1d6dab(0x447)+'\x20'+(_0xa83068[_0x1d6dab(0x1e0)+'Total']?_0x37d8da['TADqr'](_0xa83068[_0x1d6dab(0x1e0)+'Ok'],'/')+_0xa83068[_0x1d6dab(0x1e0)+_0x1d6dab(0x1e2)]+_0x37d8da['PQdia']:'0\x20hoo'+_0x1d6dab(0x4e2)+'med\x20('+_0x1d6dab(0x2e3)+_0x1d6dab(0x44b))+_0x37d8da['upBrW']+(_0xa83068[_0x1d6dab(0x212)+_0x1d6dab(0x550)]?_0x1d6dab(0x113)+'d':_0x37d8da[_0x1d6dab(0x45e)]),'\x20|\x20sh'+'ooter'+'\x20')+(_0xa83068['shoot'+_0x1d6dab(0x1fa)]?_0x1d6dab(0x3e9):'none')+(_0x1d6dab(0x425)+'vemen'+'t\x20'),_0xa83068[_0x1d6dab(0x6c3)+'ents']?_0x1d6dab(0x3e9):_0x37d8da[_0x1d6dab(0x253)]):_0x1d6dab(0x66b)+_0x1d6dab(0x31c)+_0x1d6dab(0x372)+'overl'+'ay\x20on'+_0x1d6dab(0x5eb)+_0x1d6dab(0x684)+_0x1d6dab(0x5c9)+_0x1d6dab(0x4e3)+_0x1d6dab(0x543)+_0x1d6dab(0x675);if(_0xa83068[_0x1d6dab(0x3d0)+'rror'])_0x532be0+=_0x37d8da['nGvQq'](_0x1d6dab(0x347)+_0x1d6dab(0x205),_0xa83068[_0x1d6dab(0x3d0)+'rror']);return _0x37d8da[_0x1d6dab(0x669)](_0x585351,_0x37d8da['GbdSG'],_0x532be0,_0xa83068['uwmk'],null,[_0x37d8da[_0x1d6dab(0x251)](_0x44f384,'240\x20F'+_0x1d6dab(0x5f8)+_0x1d6dab(0x6c6),_0x1d6dab(0x389)+_0x1d6dab(0x186)+'yEngi'+'ne.Ap'+_0x1d6dab(0x548)+_0x1d6dab(0x6c1)+'set_t'+_0x1d6dab(0x322)+_0x1d6dab(0x1f3)+_0x1d6dab(0x510),_0x1eb9ea('Apply',()=>{var _0xe26c3a=_0x1d6dab;if('CQmYH'!==_0xe26c3a(0x449))_0x21d8c5[_0xe26c3a(0x670)+'em'](_0xe26c3a(0x126)+'a.kou'+_0xe26c3a(0x2bf),_0x2d5d38[_0xe26c3a(0x34b)+_0xe26c3a(0x33f)](_0x251b21));else try{if('YQSGa'==='vIlyW')_0x269645['clear']();else{if(_0x467b9b)_0x467b9b[_0xe26c3a(0xf5)](_0x37d8da[_0xe26c3a(0x386)],_0xe26c3a(0x68a)+_0xe26c3a(0x322)+_0xe26c3a(0x1f3)+'Rate',[-0x2287*-0x1+0x86+-0x7b*0x47]);}}catch(_0xe9ae21){}}))]);}function _0x343513(_0x1d94eb){var _0x5bdcbc=_0x2a65cd,_0x37c002={'SviXV':_0x37d8da[_0x5bdcbc(0xfb)],'joXxC':_0x5bdcbc(0x440),'DTafe':function(_0x499b68){var _0x50b827=_0x5bdcbc;return _0x37d8da[_0x50b827(0x10c)](_0x499b68);},'gJvEK':'rgba('+_0x5bdcbc(0x5bb)+'07,15'+_0x5bdcbc(0x2c4)+'5)','ruVHS':function(_0x11452d,_0x5a480a){return _0x37d8da['tkfPm'](_0x11452d,_0x5a480a);},'wdldu':_0x37d8da[_0x5bdcbc(0x2d8)],'SdZbD':_0x5bdcbc(0x2d6),'FCuUt':_0x37d8da['njfkf'],'kBvot':function(_0x4f4401,_0x126e8a){return _0x4f4401*_0x126e8a;},'UPeqH':function(_0x42f1b9,_0x11b5c7){var _0x4e66a8=_0x5bdcbc;return _0x37d8da[_0x4e66a8(0x2cb)](_0x42f1b9,_0x11b5c7);},'RNrev':function(_0xec11ce,_0x201fb7){return _0x37d8da['xnzqI'](_0xec11ce,_0x201fb7);},'rcEbx':_0x5bdcbc(0x488),'ZfbIH':'Space','LVfmX':function(_0x1191ba,_0x326319){var _0x2a822d=_0x5bdcbc;return _0x37d8da[_0x2a822d(0x5e6)](_0x1191ba,_0x326319);},'ImzzM':_0x5bdcbc(0x39e),'ggtPT':function(_0x32176c){var _0x12551a=_0x5bdcbc;return _0x37d8da[_0x12551a(0x4ac)](_0x32176c);},'oJkSB':_0x37d8da[_0x5bdcbc(0x3d5)],'DmFrl':_0x37d8da['imadE'],'CIFmb':_0x37d8da[_0x5bdcbc(0x610)],'jnVMr':_0x37d8da[_0x5bdcbc(0x4b9)],'uhFkd':_0x37d8da[_0x5bdcbc(0x52d)],'XYWQg':function(_0xd3d1ac,_0x3553b6,_0x1be209,_0x4431ee,_0x57f92f,_0xa4db93,_0x5c9b71,_0x1f5ab9){return _0xd3d1ac(_0x3553b6,_0x1be209,_0x4431ee,_0x57f92f,_0xa4db93,_0x5c9b71,_0x1f5ab9);},'aYyNa':_0x5bdcbc(0x65f)+'e','JKooO':_0x5bdcbc(0x37c)+'th','UPsHA':_0x5bdcbc(0x501),'Eyasi':_0x5bdcbc(0x6dc)+'oil','JHPqG':_0x5bdcbc(0x210)+_0x5bdcbc(0x145),'rVccM':function(_0x58846a,_0x1eef5f,_0x5f2ca1,_0x5401bc,_0x30e186,_0x297641,_0x583c5e,_0x220706){return _0x58846a(_0x1eef5f,_0x5f2ca1,_0x5401bc,_0x30e186,_0x297641,_0x583c5e,_0x220706);},'HUfze':_0x37d8da['StqKB'],'aLwQh':_0x5bdcbc(0x201),'jwOhI':function(_0x36dc25,_0x4b2695){return _0x37d8da['dzKEG'](_0x36dc25,_0x4b2695);},'ydnog':function(_0x243ce4,_0x157287){return _0x37d8da['eRzTu'](_0x243ce4,_0x157287);},'JjbGS':_0x37d8da['RtHuv']};if(_0x37d8da[_0x5bdcbc(0x135)](_0x5bdcbc(0x18a),'mEFrZ')){if(_0x1d94eb===_0x5bdcbc(0x264)+'t'){if(_0x37d8da[_0x5bdcbc(0x65d)](_0x37d8da[_0x5bdcbc(0x1c9)],_0x5bdcbc(0x324)))return[_0x37d8da[_0x5bdcbc(0x203)](_0x637a67),_0x585351(_0x37d8da[_0x5bdcbc(0x187)],_0x5bdcbc(0x54d)+_0x5bdcbc(0x151)+'alth.'+_0x5bdcbc(0x2ec)+'ateTa'+_0x5bdcbc(0x537)+_0x5bdcbc(0x431)+_0x5bdcbc(0x2ca)+_0x5bdcbc(0x6b7)+'.Loca'+'lDie,'+_0x5bdcbc(0x13f)+_0x5bdcbc(0x3cb)+'g\x20can'+_0x5bdcbc(0x1b4)+'\x20or\x20k'+_0x5bdcbc(0x5d8)+'ou.',_0x47afe6[_0x5bdcbc(0x1ae)],_0x3317ef=>{var _0x2463b5=_0x5bdcbc;_0x47afe6['god']=_0x3317ef,_0x11e412(),_0x277932(_0x37d8da['pskUf'],_0x3317ef),_0x37d8da[_0x2463b5(0x4c1)](_0x277932,'godDi'+'e',_0x3317ef);},[]),_0x37d8da[_0x5bdcbc(0x3ae)](_0x585351,'No\x20Re'+_0x5bdcbc(0x319),_0x37d8da['DdEQv'],_0x47afe6[_0x5bdcbc(0x6dc)+_0x5bdcbc(0x1c3)],_0x92c9e8=>{var _0x1d15fc=_0x5bdcbc;_0x47afe6[_0x1d15fc(0x6dc)+_0x1d15fc(0x1c3)]=_0x92c9e8,_0x11e412(),_0x277932(_0x1d15fc(0x6dc)+'oil',_0x92c9e8);},[]),_0x585351(_0x37d8da['Wxfyt'],_0x37d8da['zlOKM'],_0x47afe6['noSpr'+_0x5bdcbc(0x193)],_0x42331c=>{var _0x73ca21=_0x5bdcbc;_0x37c002['joXxC']===_0x73ca21(0x5ea)?_0x188cb7[_0x73ca21(0x670)+'em'](_0x37c002[_0x73ca21(0x4a7)],_0x48a334[_0x73ca21(0x34b)+_0x73ca21(0x33f)](_0x43eec5)):(_0x47afe6[_0x73ca21(0x641)+'ead']=_0x42331c,_0x11e412());},[]),_0x585351('Rapid'+_0x5bdcbc(0x51f)+_0x5bdcbc(0x6cd)+']',_0x5bdcbc(0x341)+_0x5bdcbc(0x461)+'rtide'+'Weapo'+_0x5bdcbc(0x454)+'eRate'+_0x5bdcbc(0x12b)+_0x5bdcbc(0x446)+_0x5bdcbc(0x226)+_0x5bdcbc(0x46a)+'still'+_0x5bdcbc(0x4e4)+'\x20shot'+'s.',_0x47afe6['rapid'+'Exp'],_0x4fdcac=>{var _0x26ea18=_0x5bdcbc;_0x47afe6[_0x26ea18(0x6d9)+_0x26ea18(0x690)]=_0x4fdcac,_0x37c002['DTafe'](_0x11e412);},[]),_0x585351(_0x5bdcbc(0x5ee)+'e\x20[EX'+'P]','Overw'+_0x5bdcbc(0x39c)+'\x20Over'+_0x5bdcbc(0x3ab)+'eapon'+_0x5bdcbc(0x405)+_0x5bdcbc(0x6e2)+_0x5bdcbc(0x11b)+'le\x20if'+_0x5bdcbc(0x2e9)+_0x5bdcbc(0x2fb)+'r\x20val'+_0x5bdcbc(0x3b0)+'s.',_0x47afe6['damag'+'eExp'],_0x3798d6=>{var _0x5eafeb=_0x5bdcbc,_0x2986e9={'FmCGy':function(_0x38d5b4,_0x270585){return _0x38d5b4-_0x270585;},'Zhrrb':_0x37c002['gJvEK'],'iNFYS':function(_0x1ac896,_0x4d08ac){return _0x37c002['ruVHS'](_0x1ac896,_0x4d08ac);},'GzjAQ':_0x37c002[_0x5eafeb(0x2d3)],'EcEgv':_0x37c002[_0x5eafeb(0x262)],'UIWlA':_0x5eafeb(0x106),'hmMod':'rgba('+'255,2'+_0x5eafeb(0x1a1)+_0x5eafeb(0x5db)+'5)','AUqYs':function(_0xf2db96,_0x4b1dde){var _0x3f3105=_0x5eafeb;return _0x37c002[_0x3f3105(0x40b)](_0xf2db96,_0x4b1dde);},'iZsRh':function(_0x471973,_0x4c347d){return _0x471973/_0x4c347d;},'IOdOa':function(_0x4f20f8,_0x9035a6){return _0x4f20f8/_0x9035a6;},'LtlKd':_0x37c002[_0x5eafeb(0x535)],'Kjjhb':function(_0x3757fa,_0x4a24d3){return _0x3757fa(_0x4a24d3);},'ZBYHs':function(_0x176c7c,_0x407545){return _0x176c7c*_0x407545;},'KXENJ':function(_0x1cca8e,_0x358a2b){return _0x37c002['kBvot'](_0x1cca8e,_0x358a2b);},'iYqed':function(_0x36422e,_0xc9f65c){return _0x36422e*_0xc9f65c;},'IGBKA':function(_0x4f3dd9,_0x1c6429){var _0x1a8511=_0x5eafeb;return _0x37c002[_0x1a8511(0x409)](_0x4f3dd9,_0x1c6429);},'LiEIQ':function(_0x5cba6c,_0x4a702b){return _0x5cba6c===_0x4a702b;},'FpfXH':function(_0x1c1ad3,_0x4716ff,_0x4b87c0,_0x52f207,_0x16c612,_0x3c0e0,_0x164f30){return _0x1c1ad3(_0x4716ff,_0x4b87c0,_0x52f207,_0x16c612,_0x3c0e0,_0x164f30);},'wDMlk':function(_0x1c2156,_0x317d03){return _0x37c002['RNrev'](_0x1c2156,_0x317d03);},'fXiHE':function(_0xb0b0c6,_0x5918e5){return _0xb0b0c6+_0x5918e5;},'szDJk':_0x37c002['rcEbx'],'nHkhv':function(_0x3133e1,_0x10ef6e){return _0x3133e1+_0x10ef6e;},'CzFjG':function(_0x38f175,_0x3059d5){return _0x38f175+_0x3059d5;},'KmJKk':function(_0x1a8740,_0x1aab15,_0x3196e3,_0x175a3b,_0x3c33e3,_0x1c5b6b,_0x340a96,_0x298a93){return _0x1a8740(_0x1aab15,_0x3196e3,_0x175a3b,_0x3c33e3,_0x1c5b6b,_0x340a96,_0x298a93);},'jLqqd':function(_0x491647,_0x3176f9){var _0x31782f=_0x5eafeb;return _0x37c002[_0x31782f(0x40b)](_0x491647,_0x3176f9);},'lEUTE':function(_0x4c1fbe,_0x3e3f86){return _0x4c1fbe(_0x3e3f86);},'UlJcF':_0x37c002['ZfbIH'],'VdqHH':function(_0x4880b7,_0x46c82c){return _0x4880b7+_0x46c82c;}};if(_0x37c002[_0x5eafeb(0x6c5)](_0x5eafeb(0x407),_0x37c002['ImzzM']))_0x47afe6['damag'+'eExp']=_0x3798d6,_0x37c002[_0x5eafeb(0x270)](_0x11e412);else{var _0x1bd358=_0x2986e9['Kjjhb'](_0x3069c5,_0x3285ee[_0x5eafeb(0x240)+'le'])||-0x2*0x629+0x191d*-0x1+0x8*0x4ae,_0x2d0923=_0x2986e9[_0x5eafeb(0x10d)](0x2117*-0x1+-0x14aa+-0x59*-0x9b,_0x1bd358),_0x53ff8c=_0x2986e9[_0x5eafeb(0x47d)](-0x2*0x2c4+-0x1*0x2430+-0x29bc*-0x1,_0x1bd358),_0x4904d0=_0x2986e9[_0x5eafeb(0x69f)](_0x2d0923,-0x1b52+-0x8f*0x11+0x935*0x4)+_0x2986e9['KXENJ'](_0x53ff8c,-0x2*0xeae+-0x18de+0x363c),_0x349a89=_0x2986e9['AUqYs'](_0x2986e9[_0x5eafeb(0x69f)](_0x2d0923,0xe65+0x2584+0x5b*-0x92),_0x53ff8c*(-0x1*-0x1f1b+-0x13c*0x1+-0x1ddd)),_0x84632f=_0xb5bb17[_0x5eafeb(0x6ab)],_0x2ee5a1=_0x84632f==='br'?_0x2d4a43['right']-(-0x26*-0x8b+0x2273+-0x3705)-_0x4904d0:_0x1088b1[_0x5eafeb(0x267)]+(-0x74c*0x2+0x1433+-0x21*0x2b),_0x499a61=_0x84632f==='ml'?_0x2986e9['FmCGy'](_0x2986e9[_0x5eafeb(0x1e6)](_0xf05c5f[_0x5eafeb(0x38d)],_0x13b35c['heigh'+'t']/(0x1984+-0x11e5+-0x79d)),_0x2986e9[_0x5eafeb(0x31e)](_0x349a89,0x14d6+-0x2*-0x1c9+-0x1866)):_0x2986e9[_0x5eafeb(0x30c)](_0xc5a66a[_0x5eafeb(0x691)+'m']-_0x349a89,_0x2986e9['LiEIQ'](_0x84632f,'bl')?0x142b+0xa*0x1+-0x13d5:-0x1fe3+-0x1f81+-0x1af*-0x26),_0x59b762=(_0x4bbb93,_0x48d311,_0x226137,_0x3377cc,_0x25b475,_0x418424,_0x472f6e)=>{var _0x241c1f=_0x5eafeb,_0x3610d4=('13|0|'+_0x241c1f(0x67a)+_0x241c1f(0x298)+'|10|1'+_0x241c1f(0x5fa)+'5|1|3'+_0x241c1f(0x493)+_0x241c1f(0x56f))['split']('|'),_0x36055f=0x480*0x1+0x6*0x14+-0x4f8;while(!![]){switch(_0x3610d4[_0x36055f++]){case'0':_0x59cd31['save']();continue;case'1':_0x5a5e0c[_0x241c1f(0x38b)+_0x241c1f(0x376)]='cente'+'r';continue;case'2':_0x314acc['lineW'+'idth']=-0x1f37+0x19ec+-0x1c4*-0x3;continue;case'3':_0x216f7f[_0x241c1f(0x1ba)+_0x241c1f(0x348)+'ne']=_0x241c1f(0xff)+'e';continue;case'4':_0x487c5e['fill']();continue;case'5':_0x591b47&&(_0xaed67d['shado'+_0x241c1f(0x34e)+'r']=_0x681e21,_0x3ddd00['shado'+_0x241c1f(0x569)]=0x4df+-0xbc6+0xd*0x89,_0x5ddbed['fill'](),_0x1be161[_0x241c1f(0x420)+_0x241c1f(0x569)]=-0x1a*-0x35+0x1cf4+-0x2256);continue;case'6':_0x43e97d[_0x241c1f(0x5f5)+'re']();continue;case'7':_0x18ec45[_0x241c1f(0x658)+_0x241c1f(0x15b)](_0x4bbb93,_0x226137+_0x25b475/(0x3*-0x14b+-0x1d*0x5b+0x17*0x9e),_0x2986e9['FmCGy'](_0x3377cc+_0x418424/(0x12e5*-0x2+-0xb07+0x30d3),_0x472f6e?(0x25e6+0x660+-0x2c41)*_0x1bd358:0x24d6+0xebf+-0x3395));continue;case'8':_0x45bb93[_0x241c1f(0x3ff)+_0x241c1f(0x310)]();continue;case'9':_0x29aa2c['fillS'+'tyle']=_0x591b47?_0x2986e9[_0x241c1f(0x1eb)]:_0x241c1f(0x342)+'22,8,'+_0x241c1f(0x565)+'7)';continue;case'10':_0xf8f200[_0x241c1f(0x495)+'eStyl'+'e']=_0x591b47?_0x4aea56:_0x241c1f(0x342)+_0x241c1f(0x5bb)+'07,15'+_0x241c1f(0x236)+'5)';continue;case'11':_0x12a737['font']=_0x2986e9['iNFYS'](_0x241c1f(0x45d),_0x408f83[_0x241c1f(0x558)]((0x59f*-0x5+-0x17d4+0x1*0x33fb)*_0x1bd358))+_0x2986e9[_0x241c1f(0xf6)];continue;case'12':_0x2a4d8d['strok'+'e']();continue;case'13':var _0x591b47=_0x57dfe5['has'](_0x48d311);continue;case'14':_0x472f6e&&(_0xd6823b[_0x241c1f(0x5cc)]=_0x2986e9['EcEgv']+_0x4428e1[_0x241c1f(0x558)]((0x3*-0x922+-0x1*0x6b6+0x1*0x2225)*_0x1bd358)+('px\x20ui'+_0x241c1f(0x5fe)+_0x241c1f(0x55a)+'f,sys'+_0x241c1f(0x162)+'i,san'+_0x241c1f(0x4dd)+'if'),_0x4021c8['fillS'+_0x241c1f(0x14e)]=_0x591b47?_0x2986e9['UIWlA']:_0x2986e9[_0x241c1f(0x26d)],_0x10654e['fillT'+'ext'](_0x472f6e,_0x2986e9['AUqYs'](_0x226137,_0x2986e9[_0x241c1f(0x31e)](_0x25b475,0xa2+-0xb5d+0x1*0xabd)),_0x3377cc+_0x2986e9['IOdOa'](_0x418424,-0xb*-0x386+-0xac1*-0x3+-0x4703)+(-0x2b*0x49+0x25cc+-0x1981)*_0x1bd358));continue;case'15':_0x3f997c['fillS'+_0x241c1f(0x14e)]=_0x591b47?_0x241c1f(0x106):_0x2986e9[_0x241c1f(0x462)];continue;case'16':if(_0x363582['round'+_0x241c1f(0x5fd)])_0x2b0abb[_0x241c1f(0x558)+'Rect'](_0x226137,_0x3377cc,_0x25b475,_0x418424,(-0x1d48+0x2677*-0x1+-0xa*-0x6c7)*_0x1bd358);else _0x8e847f[_0x241c1f(0x12d)](_0x226137,_0x3377cc,_0x25b475,_0x418424);continue;}break;}};_0x59b762('W',_0x5eafeb(0x121),_0x2986e9['IGBKA'](_0x2ee5a1,_0x2d0923)+_0x53ff8c,_0x499a61,_0x2d0923,_0x2d0923),_0x2986e9['FpfXH'](_0x59b762,'A',_0x5eafeb(0x4ec),_0x2ee5a1,_0x2986e9['wDMlk'](_0x2986e9['fXiHE'](_0x499a61,_0x2d0923),_0x53ff8c),_0x2d0923,_0x2d0923),_0x59b762('S',_0x2986e9[_0x5eafeb(0x540)],_0x2ee5a1+_0x2d0923+_0x53ff8c,_0x499a61+_0x2d0923+_0x53ff8c,_0x2d0923,_0x2d0923),_0x59b762('D',_0x5eafeb(0x5a7),_0x2986e9[_0x5eafeb(0x539)](_0x2ee5a1,_0x2986e9[_0x5eafeb(0x4ae)](_0x2d0923,_0x53ff8c)*(-0x25f5*0x1+0x2e*0x3+0x256d)),_0x499a61+_0x2d0923+_0x53ff8c,_0x2d0923,_0x2d0923);var _0x3d718d=(_0x4904d0-_0x53ff8c)/(0x2*0x415+0x262+-0xa8a),_0x5224ae=_0x499a61+_0x2986e9[_0x5eafeb(0x47d)](_0x2986e9['fXiHE'](_0x2d0923,_0x53ff8c),0x3*0xab5+-0x71f+-0x18fe);_0x59b762('LMB','mouse'+'1',_0x2ee5a1,_0x5224ae,_0x3d718d,_0x2d0923,_0xfb1c31['ksCps']?_0x2986e9[_0x5eafeb(0x4ae)](_0x2986e9['Kjjhb'](_0x522f67,0x1701+-0x1a9e+0x39e*0x1),_0x5eafeb(0x487)):''),_0x2986e9['KmJKk'](_0x59b762,_0x5eafeb(0x1bd),'mouse'+'3',_0x2986e9[_0x5eafeb(0x2ce)](_0x2ee5a1+_0x3d718d,_0x53ff8c),_0x5224ae,_0x3d718d,_0x2d0923,_0x3b21cd[_0x5eafeb(0x630)]?_0x2986e9[_0x5eafeb(0x2e0)](_0x558f97,-0x1239+0xc29+-0x613*-0x1)+_0x5eafeb(0x487):''),_0x59b762('',_0x2986e9[_0x5eafeb(0x479)],_0x2ee5a1,_0x2986e9['VdqHH'](_0x2986e9[_0x5eafeb(0x539)](_0x5224ae,_0x2d0923),_0x53ff8c),_0x4904d0,_0x2986e9['iYqed'](_0x2d0923,-0x266d+-0x1*0xe53+0x34c0+0.45));}},[_0x44f384(_0x5bdcbc(0x5ee)+_0x5bdcbc(0x58b)+'ue',null,_0x3c0b9a(_0x47afe6['damag'+_0x5bdcbc(0x2dc)+'e'],-0x2635*-0x1+0xb93*-0x1+-0x1a98,-0x3c9+0x3c5*-0x2+0xd47,0x213c+0x10af+-0x6*0x851,_0x168f42=>{var _0x328c77=_0x5bdcbc;_0x47afe6['damag'+_0x328c77(0x2dc)+'e']=_0x168f42,_0x37c002[_0x328c77(0x270)](_0x11e412);}))]),_0x585351('Infin'+_0x5bdcbc(0x225)+_0x5bdcbc(0x3e4)+'EXP]','Refil'+_0x5bdcbc(0x43a)+'e\x20wea'+_0x5bdcbc(0x350)+'\x20cach'+'ed\x20am'+_0x5bdcbc(0x460)+_0x5bdcbc(0x142)+_0x5bdcbc(0x2f4)+_0x5bdcbc(0x288)+'s.',_0x47afe6['infAm'+'moExp'],_0x4894a5=>{var _0x234440=_0x5bdcbc;_0x47afe6[_0x234440(0x579)+'moExp']=_0x4894a5,_0x11e412();},[_0x5e61f2(_0x37d8da[_0x5bdcbc(0x4b6)])])];else{if(_0xb43285[_0x3d5653]['id']&&_0x37d8da['Dcdoi'](_0x4d3a99[_0x9b9d04]['id']['index'+'Of'](_0x5bdcbc(0x60b)+_0x5bdcbc(0x181)),-0x1ae1*-0x1+-0xff5+-0x3*0x3a4))_0x6206e[_0x473bf4][_0x5bdcbc(0x2d2)][_0x5bdcbc(0x16c)+'ay']=_0x5bdcbc(0x45c);}}if(_0x37d8da['JXmyp'](_0x1d94eb,_0x37d8da[_0x5bdcbc(0x31f)]))return[_0x585351('Speed',_0x5bdcbc(0x341)+'s\x20all'+'\x20four'+'\x20Move'+_0x5bdcbc(0xfe)+'speed'+'\x20limi'+'ts\x20pl'+'us\x20ac'+_0x5bdcbc(0x3f3)+_0x5bdcbc(0x4ca)+'.',_0x37d8da[_0x5bdcbc(0x221)](_0x47afe6['speed'+'Pct'],-0x2622+-0x19f2+-0x101e*-0x4),null,[_0x37d8da['ZxzOV'](_0x44f384,'Speed'+'\x20%',_0x5bdcbc(0x2be)+'\x20defa'+'ult',_0x3c0b9a(_0x47afe6['speed'+'Pct'],-0x36*0x5+-0x26d9+0x1*0x2819,-0x268+0x762+-0x3ce,-0xdf*0x19+0x3b*-0x9f+0x3a71,_0x5b3616=>{_0x47afe6['speed'+'Pct']=_0x5b3616,_0x11e412();}))]),_0x37d8da[_0x5bdcbc(0x669)](_0x585351,'Jump\x20'+_0x5bdcbc(0x102)+_0x5bdcbc(0x49c),_0x37d8da[_0x5bdcbc(0x105)],_0x47afe6['jumpP'+'ct']!==0xa*-0xfb+-0x992*-0x4+-0x2cf*0xa||_0x47afe6['gravi'+'tyPct']!==-0x402+0xce*-0x29+0x2564,null,[_0x44f384(_0x5bdcbc(0xfd)+'%',null,_0x37d8da['hQyZM'](_0x3c0b9a,_0x47afe6['jumpP'+'ct'],0x99+0x6*0x4fc+-0x1e4f,-0x164*-0x11+0xb08+0x430*-0x8,0x56*0x55+-0xbaa*-0x2+-0x33dd,_0x380697=>{var _0x5ede7c=_0x5bdcbc;_0x47afe6[_0x5ede7c(0x13b)+'ct']=_0x380697,_0x37c002[_0x5ede7c(0x6d6)](_0x11e412);})),_0x44f384(_0x37d8da[_0x5bdcbc(0x29c)],_0x5bdcbc(0x491)+'\x20=\x20fl'+_0x5bdcbc(0x227),_0x3c0b9a(_0x47afe6[_0x5bdcbc(0x10a)+'tyPct'],0x13a2+0x9*0x205+-0x25c5,0x11af+-0x927+-0x20*0x3e,0x2141+-0x135d*-0x1+-0x3499,_0x474ffc=>{var _0x1404cd=_0x5bdcbc;_0x47afe6[_0x1404cd(0x10a)+'tyPct']=_0x474ffc,_0x11e412();}))]),_0x585351('Bunny'+_0x5bdcbc(0x6ad),_0x5bdcbc(0x396)+_0x5bdcbc(0x4a6)+_0x5bdcbc(0x308)+_0x5bdcbc(0x1a5)+'JumpT'+'ime\x20s'+'o\x20the'+_0x5bdcbc(0x57d)+_0x5bdcbc(0x482)+_0x5bdcbc(0x60a)+_0x5bdcbc(0x206)+'\x20appl'+_0x5bdcbc(0x649),_0x47afe6['bhop'],_0x4a11a7=>{var _0xe81a3b=_0x5bdcbc;_0x47afe6[_0xe81a3b(0x3c3)]=_0x4a11a7,_0x11e412();},[])];if(_0x1d94eb==='visua'+'l'){if('WfNKi'!==_0x5bdcbc(0x1ea)){var _0xcf2e56=_0x5b7659['hookP'+'ostfi'+'x']({'typeName':_0x583fa9,'methodName':_0x19ebae,'params':_0x361135,'returnType':_0xe57201},_0x508adf);return _0xcf2e56[_0x5bdcbc(0x160)+'ed']=_0x74393a!==![],_0x4ca35e[_0x3cade3]=_0xcf2e56,_0x4c04b6[_0x5bdcbc(0x1e0)+_0x5bdcbc(0x1e2)]++,_0xcf2e56;}else return[_0x37d8da[_0x5bdcbc(0x3f4)](_0x585351,'Keyst'+'rokes',_0x5bdcbc(0x6e4)+_0x5bdcbc(0x6c7)+'/RMB\x20'+'+\x20Spa'+_0x5bdcbc(0x191)+_0x5bdcbc(0x170)+'.',_0x47afe6[_0x5bdcbc(0x45b)+_0x5bdcbc(0x62c)],_0x2c73f0=>{var _0x46b879=_0x5bdcbc;_0x47afe6[_0x46b879(0x45b)+_0x46b879(0x62c)]=_0x2c73f0,_0x37c002[_0x46b879(0x270)](_0x11e412);},[_0x37d8da['CySvB'](_0x44f384,_0x5bdcbc(0x639)+'ion',null,_0x190b44(_0x47afe6['ksPos'],[['bl',_0x5bdcbc(0x4a9)+_0x5bdcbc(0x617)+'t'],['br',_0x5bdcbc(0x4a9)+_0x5bdcbc(0x5f0)+'ht'],['ml','Left\x20'+_0x5bdcbc(0xff)+'e']],_0x406431=>{var _0xa9b207=_0x5bdcbc;if(_0x37d8da['gLASV']!==_0x37d8da['gLASV']){var _0x1e6bf5=_0x8f41de[_0xa9b207(0x657)+_0xa9b207(0x1b3)+'ent'](_0x37c002[_0xa9b207(0x354)]);_0x1e6bf5['class'+_0xa9b207(0x57e)]='sk-ct'+'l';var _0xfb840c=_0x4fa2b1['creat'+'eElem'+_0xa9b207(0x3fb)](_0xa9b207(0x122));_0xfb840c[_0xa9b207(0x42c)+'Name']='sk-la'+_0xa9b207(0x360),_0xfb840c['textC'+'onten'+'t']=_0x585ef5;if(_0x1e8547){var _0x20249a=_0x6a689a['creat'+'eElem'+'ent'](_0x37c002[_0xa9b207(0x5de)]);_0x20249a[_0xa9b207(0x42c)+_0xa9b207(0x57e)]=_0x37c002[_0xa9b207(0x379)],_0x20249a[_0xa9b207(0x29b)+'onten'+'t']=_0x1ee8d4,_0xfb840c[_0xa9b207(0x4c0)+_0xa9b207(0x1e3)+'d'](_0x20249a);}return _0x1e6bf5[_0xa9b207(0x4c0)+'d'](_0xfb840c,_0x36c6c3),_0x1e6bf5;}else _0x47afe6['ksPos']=_0x406431,_0x11e412();})),_0x44f384(_0x5bdcbc(0x419),null,_0x37d8da['OdVWY'](_0x3c0b9a,_0x47afe6[_0x5bdcbc(0x240)+'le'],-0xa0b+0x163*0x13+-0x104e*0x1+0.6,-0x2516+0x184d*0x1+0xcca+0.6000000000000001,-0x54c+0x21+0x52b+0.05,_0x1e1233=>{var _0x5a9e45=_0x5bdcbc;_0x47afe6[_0x5a9e45(0x240)+'le']=_0x1e1233,_0x11e412();})),_0x44f384(_0x5bdcbc(0x5d7)+_0x5bdcbc(0x13c)+'t',null,_0x577913(_0x47afe6['ksCps'],_0xaff83e=>{_0x47afe6['ksCps']=_0xaff83e,_0x11e412();}))]),_0x585351(_0x5bdcbc(0x3ac)+'hair',_0x5bdcbc(0x3a1)+_0x5bdcbc(0x464)+'ter\x20c'+_0x5bdcbc(0x682)+_0x5bdcbc(0x37a),_0x47afe6['cross'+'hair'],_0x47c8b5=>{var _0x5ce8a5=_0x5bdcbc;if(_0x37d8da[_0x5ce8a5(0x368)](_0x37d8da['CSdBi'],_0x5ce8a5(0x252))){var _0x47c3b5={'PoaaV':_0x5ce8a5(0x6c3)+'ents'};_0x2f6cb4=_0x47a1df[_0x5ce8a5(0x6de)+_0x5ce8a5(0x443)+_0x5ce8a5(0x578)][_0x5ce8a5(0x4ef)+_0x5ce8a5(0x5e7)+'er'],_0x13ce0f=_0x318140['Unity'+'WebMo'+'dkit'][_0x5ce8a5(0x69e)+'me']['creat'+_0x5ce8a5(0x43c)+'in']({'name':_0x37c002[_0x5ce8a5(0x1d1)],'version':'1.1.0','referencedAssemblies':[_0x5ce8a5(0x272)+_0x5ce8a5(0x5bd)+_0x5ce8a5(0x137)+_0x5ce8a5(0x6df)]});if(_0x5e9752['hookG'+'od'])_0x5eadaa(_0x5ce8a5(0x1ae),_0x5ce8a5(0x37c)+'th',_0x37c002['uhFkd'],[_0x5ce8a5(0x501),_0x5ce8a5(0x501)],_0x16124a,_0x5f25c1,!!_0x370b42[_0x5ce8a5(0x1ae)]);if(_0x585d5e[_0x5ce8a5(0x4c7)+_0x5ce8a5(0x5e2)])_0x37c002[_0x5ce8a5(0x22a)](_0x4b4b98,_0x37c002[_0x5ce8a5(0x42a)],_0x37c002[_0x5ce8a5(0x346)],'Local'+_0x5ce8a5(0x13e),[_0x37c002[_0x5ce8a5(0x5f7)],_0x37c002[_0x5ce8a5(0x5f7)],_0x37c002[_0x5ce8a5(0x5f7)],_0x37c002['UPsHA'],_0x37c002['UPsHA']],_0x4495e8,_0x5f264d,!!_0x470b8e[_0x5ce8a5(0x1ae)]);if(_0xa867ec['hookN'+'oReco'+'il'])_0x2dda86(_0x37c002['Eyasi'],_0x5ce8a5(0x6d8)+_0x5ce8a5(0x1f9)+'forms'+'.Over'+'tide.'+_0x5ce8a5(0x433)+'lMoti'+'on',_0x5ce8a5(0x4d7),[_0x5ce8a5(0x501)],_0xa61e14,_0x1291c8,!!_0x3b09a0['noRec'+_0x5ce8a5(0x1c3)]);if(_0x473025['hookC'+_0x5ce8a5(0x629)+'e'])_0x5e0fb3(_0x37c002[_0x5ce8a5(0x1b8)],'OShoo'+'ter',_0x5ce8a5(0x375)+'meRun'+_0x5ce8a5(0x232),[_0x37c002[_0x5ce8a5(0x5f7)],_0x5ce8a5(0x501)],_0x3dd1a3,(_0x4966a3,_0x2b2b4a)=>{var _0x422ae4=_0x5ce8a5;_0xa8981c(_0x20f6b1,_0x2b2b4a,_0x9f6d9d,_0x422ae4(0x53b)+'ers');},!![]);if(_0x2b09d3['hookC'+_0x5ce8a5(0x629)+'e'])_0x37c002['rVccM'](_0x2fbe3e,'capMo'+'ve',_0x37c002[_0x5ce8a5(0x6cb)],_0x5ce8a5(0x645)+_0x5ce8a5(0x28f),['i32'],_0x37c002[_0x5ce8a5(0x5f7)],(_0x5f05b3,_0x20ca5b)=>{_0x378771(_0x37d612,_0x20ca5b,_0x62707a,_0x47c3b5['PoaaV']);},!![]);}else _0x47afe6[_0x5ce8a5(0x51b)+_0x5ce8a5(0x40a)]=_0x47c8b5,_0x37d8da[_0x5ce8a5(0x4ac)](_0x11e412);},[_0x37d8da[_0x5bdcbc(0x3b3)](_0x44f384,_0x37d8da['ZeOun'],null,_0x3c0b9a(_0x47afe6[_0x5bdcbc(0x1a7)+'e'],-0xef*0x26+-0x369+-0x26e3*-0x1+0.5,0x140d+-0x1dad*-0x1+0x2b*-0x128+0.5,-0x1*0x268f+-0x301*-0x1+0x238e+0.1,_0x428338=>{_0x47afe6['chSiz'+'e']=_0x428338,_0x11e412();})),_0x37d8da[_0x5bdcbc(0x3b3)](_0x44f384,_0x5bdcbc(0x23f),null,_0x1e7a94(_0x47afe6[_0x5bdcbc(0x418)+'or'],_0x3c14b8=>{var _0x1e45a3=_0x5bdcbc;_0x47afe6[_0x1e45a3(0x418)+'or']=_0x3c14b8,_0x37d8da[_0x1e45a3(0x203)](_0x11e412);}))]),_0x585351(_0x5bdcbc(0x2ba)+'ers','FPS\x20o'+_0x5bdcbc(0x362)+'y.',_0x47afe6['fps'],null,[_0x44f384(_0x37d8da[_0x5bdcbc(0x150)],null,_0x577913(_0x47afe6['fps'],_0xda1b29=>{var _0x3a6e39=_0x5bdcbc,_0x370dff={'eeLDo':'butto'+'n','VwzHQ':_0x37d8da[_0x3a6e39(0x484)],'tMhyh':function(_0x14ed8d,_0x260e90){var _0x228fa5=_0x3a6e39;return _0x37d8da[_0x228fa5(0x48f)](_0x14ed8d,_0x260e90);},'UfXXB':'<smal'+'l>','Cozys':'</sma'+'ll>'};if(_0x37d8da['SKZjn'](_0x3a6e39(0x11d),_0x3a6e39(0x11d)))_0x47afe6[_0x3a6e39(0x47f)]=_0xda1b29,_0x37d8da[_0x3a6e39(0x4ea)](_0x11e412);else{var _0x262f0f=_0x53ecb9['creat'+_0x3a6e39(0x1b3)+_0x3a6e39(0x3fb)](_0x370dff['eeLDo']);_0x262f0f['type']=_0x370dff['eeLDo'],_0x262f0f[_0x3a6e39(0x42c)+'Name']=_0x370dff['VwzHQ'],_0x262f0f[_0x3a6e39(0x207)]=_0x4be735[_0x3a6e39(0x3c6)],_0x262f0f['inner'+_0x3a6e39(0x4f3)]=_0x370dff[_0x3a6e39(0x398)](_0x370dff[_0x3a6e39(0x21e)],_0x372b84['label'])+_0x370dff[_0x3a6e39(0x49b)],_0x262f0f[_0x3a6e39(0x13a)+'ck']=(_0x2b3ca2=>()=>_0x2ab3a7(_0x2b3ca2))(_0x2e7ec5['id']),_0x1de98a['set'](_0x5d32f1['id'],_0x262f0f),_0x4b9b71[_0x3a6e39(0x4c0)+'dChil'+'d'](_0x262f0f);}})),_0x5e61f2('No\x20en'+'emy\x20c'+'ounte'+_0x5bdcbc(0x1d8)+'is\x20bu'+_0x5bdcbc(0x260)+'as\x20no'+_0x5bdcbc(0x572)+_0x5bdcbc(0x48d)+_0x5bdcbc(0x166)+'ers\x20t'+'o\x20pig'+'gybac'+_0x5bdcbc(0x528))])];}if(_0x1d94eb===_0x5bdcbc(0x23b))return[_0x37d8da[_0x5bdcbc(0x132)](_0x585351,_0x5bdcbc(0x34f)+'ck','Hides'+_0x5bdcbc(0x654)+_0x5bdcbc(0x273)+'\x20bann'+_0x5bdcbc(0x305)+'ots.',_0x47afe6['adblo'+'ck'],_0x3b683d=>{_0x47afe6['adblo'+'ck']=_0x3b683d,_0x37d8da['lMREQ'](_0x11e412);},[_0x5e61f2(_0x37d8da[_0x5bdcbc(0x6ba)])])];return[_0x37d8da['BtBCp'](_0x585351,_0x37d8da['JlCgx'],_0x5bdcbc(0x609)+_0x5bdcbc(0x256)+_0x5bdcbc(0x146)+'rely\x20'+'—\x20no\x20'+'WASM\x20'+'hooks'+_0x5bdcbc(0x681)+'\x20this'+_0x5bdcbc(0x196)+'atche'+_0x5bdcbc(0x63f)+_0x5bdcbc(0x1c1)+_0x5bdcbc(0x4a4),_0x47afe6['safeM'+'ode'],_0x25b244=>{var _0x48cbbc=_0x5bdcbc;_0x47afe6[_0x48cbbc(0x182)+_0x48cbbc(0x636)]=_0x25b244,_0x11e412(),location[_0x48cbbc(0x1df)+'d']();},[_0x37d8da['gYbpO'](_0x5e61f2,_0x5bdcbc(0x415)+'es\x20on'+'\x20relo'+_0x5bdcbc(0x32c)+_0x5bdcbc(0x61c)+_0x5bdcbc(0x527)+'load\x20'+_0x5bdcbc(0x564)+_0x5bdcbc(0x6bd)+_0x5bdcbc(0x391)+_0x5bdcbc(0x67b)+_0x5bdcbc(0x36c)+'is\x20ho'+'ok-re'+'lated'+_0x5bdcbc(0x1f7)+_0x5bdcbc(0x64c)+'\x20the\x20'+_0x5bdcbc(0x1e0)+_0x5bdcbc(0x59a)+_0x5bdcbc(0x178)+_0x5bdcbc(0x3f0))]),_0x585351('Hook\x20'+'risk\x20'+_0x5bdcbc(0x330)+_0x5bdcbc(0x6bb),_0x37d8da[_0x5bdcbc(0x22f)],_0x47afe6[_0x5bdcbc(0x4c7)+'od']||_0x47afe6['hookG'+_0x5bdcbc(0x5e2)]||_0x47afe6['hookN'+_0x5bdcbc(0x44f)+'il']||_0x47afe6['hookC'+_0x5bdcbc(0x629)+'e'],_0x5b93bd=>{var _0x2db8a8=_0x5bdcbc;if('gsvov'===_0x2db8a8(0x673))_0x25ecde[_0x2db8a8(0x420)+_0x2db8a8(0x34e)+'r']=_0x364284,_0x283e6e[_0x2db8a8(0x420)+_0x2db8a8(0x569)]=0x1a8d*-0x1+-0x113+0x1bae,_0x29d681[_0x2db8a8(0x316)](),_0x21b482[_0x2db8a8(0x420)+'wBlur']=-0x4*-0x60d+-0x1*0x1927+0x3*0x51;else{var _0x343bcb=(_0x2db8a8(0x112)+'|5|3|'+'2')['split']('|'),_0x5e4827=0x82e+0xb*0x83+-0xdcf;while(!![]){switch(_0x343bcb[_0x5e4827++]){case'0':_0x47afe6[_0x2db8a8(0x4c7)+'od']=_0x5b93bd;continue;case'1':_0x47afe6[_0x2db8a8(0x4c7)+_0x2db8a8(0x5e2)]=_0x5b93bd;continue;case'2':location[_0x2db8a8(0x1df)+'d']();continue;case'3':_0x11e412();continue;case'4':_0x47afe6['hookN'+'oReco'+'il']=_0x5b93bd;continue;case'5':_0x47afe6['hookC'+'aptur'+'e']=_0x5b93bd;continue;}break;}}},[_0x5e61f2(_0x37d8da[_0x5bdcbc(0x313)]),_0x44f384(_0x5bdcbc(0x1c4)+'OHeal'+_0x5bdcbc(0x4f8)+'itiat'+'eTake'+_0x5bdcbc(0x5ed)+'h)',null,_0x577913(_0x47afe6[_0x5bdcbc(0x4c7)+'od'],_0x18d229=>{var _0x4b97e1=_0x5bdcbc;_0x47afe6['hookG'+'od']=_0x18d229,_0x37d8da[_0x4b97e1(0x549)](_0x11e412);})),_0x37d8da[_0x5bdcbc(0x4b1)](_0x44f384,_0x37d8da[_0x5bdcbc(0x5ba)],null,_0x577913(_0x47afe6[_0x5bdcbc(0x4c7)+_0x5bdcbc(0x5e2)],_0x35c64f=>{var _0x538da0=_0x5bdcbc;_0x47afe6[_0x538da0(0x4c7)+_0x538da0(0x5e2)]=_0x35c64f,_0x11e412();})),_0x44f384('noRec'+_0x5bdcbc(0x4bc)+_0x5bdcbc(0x433)+'lMoti'+'on.Ti'+'ck)',null,_0x37d8da[_0x5bdcbc(0x624)](_0x577913,_0x47afe6['hookN'+_0x5bdcbc(0x44f)+'il'],_0x3af818=>{var _0xe0ea64=_0x5bdcbc;_0xe0ea64(0x202)==='DyPJC'?(_0x4529c2(_0xdb143d,-0xc6b+0x9e1*0x3+-0x10b0,_0xe0ea64(0x201),0x1771+0x16e4+0x1d*-0x199),_0x3e9050(_0x53695f,0x4a8*-0x8+0x11cf+0x13d9,_0x37c002['aLwQh'],-0xa51+0x17f8+-0xda6*0x1)):(_0x47afe6[_0xe0ea64(0x6db)+'oReco'+'il']=_0x3af818,_0x11e412());})),_0x44f384(_0x37d8da['FvcVo'],_0x37d8da[_0x5bdcbc(0x618)],_0x577913(_0x47afe6[_0x5bdcbc(0x17d)+_0x5bdcbc(0x629)+'e'],_0x3f0e19=>{var _0x486efe=_0x5bdcbc;_0x47afe6[_0x486efe(0x17d)+'aptur'+'e']=_0x3f0e19,_0x37c002['DTafe'](_0x11e412);}))]),_0x37d8da[_0x5bdcbc(0x68e)](_0x585351,_0x5bdcbc(0x25d)+_0x5bdcbc(0x214)+'r',_0x37d8da[_0x5bdcbc(0x42d)],_0x47afe6['actkK'+_0x5bdcbc(0x26f)],_0x25094b=>{var _0x1e9ef8=_0x5bdcbc,_0x2fdbc8={'ELLGs':_0x1e9ef8(0x483)+'wn','npTeX':_0x1e9ef8(0x1ad)};if(_0x37c002['jwOhI']('ctWkZ',_0x1e9ef8(0x223)))_0x47afe6[_0x1e9ef8(0x489)+_0x1e9ef8(0x26f)]=_0x25094b,_0x11e412();else{if(_0x4d2f2b)return;_0x3c6535=!![],_0x5dd243['addEv'+_0x1e9ef8(0x1a8)+_0x1e9ef8(0x36e)+'r'](_0x2fdbc8[_0x1e9ef8(0x31a)],_0x4f0fc8,!![]),_0x481092[_0x1e9ef8(0x4d2)+_0x1e9ef8(0x1a8)+_0x1e9ef8(0x36e)+'r'](_0x2fdbc8[_0x1e9ef8(0x30a)],_0x55c539,!![]),_0xced29['addEv'+_0x1e9ef8(0x1a8)+'stene'+'r'](_0x1e9ef8(0x451)+'down',_0xcbcd79,!![]),_0x4b0e31[_0x1e9ef8(0x4d2)+'entLi'+'stene'+'r'](_0x1e9ef8(0x451)+'up',_0x3a7516,!![]),_0x494105['addEv'+'entLi'+_0x1e9ef8(0x36e)+'r'](_0x1e9ef8(0x508),_0x4ff03c);}},[_0x5e61f2(_0x5bdcbc(0x574)+'amage'+_0x5bdcbc(0x16a)+'d\x20gre'+'atly\x20'+_0x5bdcbc(0x30e)+'\x20ban\x20'+'risk\x20'+'even\x20'+_0x5bdcbc(0x27e)+_0x5bdcbc(0x4ba)+_0x5bdcbc(0x2cf),!![])]),_0x585351(_0x37d8da[_0x5bdcbc(0x3f6)],'These'+_0x5bdcbc(0x4df)+_0x5bdcbc(0x42e)+_0x5bdcbc(0x4de)+'isibl'+'e\x20tra'+_0x5bdcbc(0x478),!![],null,[_0x37d8da['Tzosh'](_0x44f384,_0x37d8da['umNZG'],null,_0x1eb9ea(_0x5bdcbc(0x304),()=>{var _0x6fe83b=_0x5bdcbc;_0x47afe6={..._0x388cf1},_0x37c002['ggtPT'](_0x11e412),location[_0x6fe83b(0x1df)+'d']();}))])];}else{var _0x363a85=(_0x5bdcbc(0x5f1)+_0x5bdcbc(0x58c)+'1')[_0x5bdcbc(0x646)]('|'),_0x25bcd3=0x5d0+-0x1a16+0x1446;while(!![]){switch(_0x363a85[_0x25bcd3++]){case'0':_0x37f223['appen'+'dChil'+'d'](_0x303839);continue;case'1':_0x37c002['ydnog'](_0x3683fb,()=>_0x1f4ed7[_0x5bdcbc(0x42c)+_0x5bdcbc(0x15a)][_0x5bdcbc(0x292)]('shown'));continue;case'2':_0x303839['textC'+_0x5bdcbc(0x3b7)+'t']=_0x579d2c;continue;case'3':var _0x303839=_0x17ddc1[_0x5bdcbc(0x657)+_0x5bdcbc(0x1b3)+_0x5bdcbc(0x3fb)](_0x37c002[_0x5bdcbc(0x3c1)]);continue;case'4':_0x30d4b2['appen'+_0x5bdcbc(0x1e3)+'d'](_0x576630);continue;case'5':_0x19212d=_0x822238();continue;}break;}}}var _0x26aea0=null;function _0x4f453d(_0xd9b088){var _0x3e5b34=_0x2a65cd;_0x171bcd=_0xd9b088;if(!_0x26aea0){var _0x3168f6=_0x37d8da['tmdkC'][_0x3e5b34(0x646)]('|'),_0x4840e4=0x109f+-0x1*0xcf2+-0x1*0x3ad;while(!![]){switch(_0x3168f6[_0x4840e4++]){case'0':_0xaeff6c[_0x3e5b34(0x4c0)+_0x3e5b34(0x1e3)+'d'](_0x4a4733);continue;case'1':_0x26aea0=_0x3e8ff0();continue;case'2':_0x4a4733['textC'+_0x3e5b34(0x3b7)+'t']=_0x5b3e5b;continue;case'3':requestAnimationFrame(()=>_0x26aea0['class'+'List'][_0x3e5b34(0x292)]('shown'));continue;case'4':_0xaeff6c[_0x3e5b34(0x4c0)+'dChil'+'d'](_0x26aea0);continue;case'5':var _0x4a4733=document['creat'+'eElem'+'ent'](_0x3e5b34(0x2d2));continue;}break;}}_0x26aea0[_0x3e5b34(0x42c)+'List'][_0x3e5b34(0x5e9)+'e'](_0x3e5b34(0x693),_0xd9b088);}function _0x121aaf(){var _0x41d5f3=_0x2a65cd;_0x15fca0[_0x41d5f3(0x134)](_0x41d5f3(0x6e5),_0x15fca0['fKeye'])?_0x4f453d(!_0x171bcd):_0x46a509['appen'+_0x41d5f3(0x1e3)+'d'](_0x46da87);}function _0x3e8ff0(){var _0x3b7a31=_0x2a65cd,_0x214f44={'KtkNL':function(_0x5a2b57,_0x13e406){return _0x5a2b57+_0x13e406;},'kjJeh':function(_0x5d9a2b,_0x5bb1fe){return _0x5d9a2b===_0x5bb1fe;},'fxlIW':function(_0x4733d7,_0xacb090){return _0x4733d7(_0xacb090);},'WseVn':function(_0x2307a8,_0x339eef){var _0x157bc1=_0x5846;return _0x15fca0[_0x157bc1(0x485)](_0x2307a8,_0x339eef);},'rXLCG':_0x3b7a31(0x3e0),'ZZHFy':function(_0x515dec,_0x144c8b){return _0x515dec<_0x144c8b;},'TERnf':_0x3b7a31(0xef),'rymWa':function(_0x4a8c64,_0xa25b0b){var _0x2c7dff=_0x3b7a31;return _0x15fca0[_0x2c7dff(0x3bb)](_0x4a8c64,_0xa25b0b);},'dQWNL':function(_0x387117,_0x354485){return _0x387117+_0x354485;},'kPCIc':_0x15fca0[_0x3b7a31(0x573)],'corqE':_0x15fca0['boMjd'],'lHLnG':'loadi'+'ng','VIzOO':'none','UHuQd':_0x3b7a31(0x425)+_0x3b7a31(0x43f)+'t\x20'},_0x36e344=document['creat'+'eElem'+_0x3b7a31(0x3fb)]('div');_0x36e344['class'+_0x3b7a31(0x57e)]=_0x15fca0[_0x3b7a31(0x594)];var _0x46a7e2=document[_0x3b7a31(0x657)+'eElem'+'ent']('nav');_0x46a7e2['class'+'Name']=_0x3b7a31(0x351)+'de';var _0x29ee8b=document[_0x3b7a31(0x657)+'eElem'+'ent'](_0x15fca0[_0x3b7a31(0x195)]);_0x29ee8b['class'+_0x3b7a31(0x57e)]=_0x3b7a31(0x25e)+'go',_0x29ee8b[_0x3b7a31(0x120)+_0x3b7a31(0x4f3)]=_0x15fca0[_0x3b7a31(0x530)],_0x46a7e2[_0x3b7a31(0x4c0)+'dChil'+'d'](_0x29ee8b);var _0x124782=document[_0x3b7a31(0x657)+_0x3b7a31(0x1b3)+_0x3b7a31(0x3fb)]('div');_0x124782['class'+'Name']=_0x15fca0['RrNKb'];var _0x5738cf=document[_0x3b7a31(0x657)+_0x3b7a31(0x1b3)+'ent']('heade'+'r');_0x5738cf[_0x3b7a31(0x42c)+_0x3b7a31(0x57e)]=_0x3b7a31(0x3b2)+'p';var _0x31484c=document['creat'+_0x3b7a31(0x1b3)+'ent'](_0x15fca0[_0x3b7a31(0x195)]);_0x31484c['class'+'Name']=_0x15fca0[_0x3b7a31(0x266)];var _0x3038ce=document[_0x3b7a31(0x657)+_0x3b7a31(0x1b3)+'ent']('h2');_0x3038ce[_0x3b7a31(0x42c)+'Name']=_0x3b7a31(0x299),_0x3038ce[_0x3b7a31(0x29b)+'onten'+'t']=_0x3b7a31(0x2d7)+_0x3b7a31(0x338)+'r';var _0x41a45b=document[_0x3b7a31(0x657)+_0x3b7a31(0x1b3)+'ent'](_0x15fca0['rvgcM']);_0x41a45b[_0x3b7a31(0x42c)+_0x3b7a31(0x57e)]=_0x15fca0[_0x3b7a31(0x1ee)],_0x41a45b[_0x3b7a31(0x29b)+_0x3b7a31(0x3b7)+'t']=_0x15fca0[_0x3b7a31(0x53a)],_0x31484c[_0x3b7a31(0x4c0)+'d'](_0x3038ce,_0x41a45b);var _0x40a7e2=document['creat'+_0x3b7a31(0x1b3)+_0x3b7a31(0x3fb)](_0x3b7a31(0x47a)+'n');_0x40a7e2[_0x3b7a31(0x6cc)]=_0x3b7a31(0x47a)+'n',_0x40a7e2['class'+'Name']=_0x15fca0['yCPUS'],_0x40a7e2['title']='Close',_0x40a7e2[_0x3b7a31(0x120)+'HTML']=_0x15fca0[_0x3b7a31(0x3db)],_0x40a7e2[_0x3b7a31(0x13a)+'ck']=()=>_0x4f453d(![]),_0x5738cf[_0x3b7a31(0x4c0)+'d'](_0x31484c,_0x40a7e2);var _0x5eefe4=document['creat'+'eElem'+'ent'](_0x3b7a31(0x4b4));_0x5eefe4['class'+_0x3b7a31(0x57e)]='mn-co'+'ls',_0x124782[_0x3b7a31(0x4c0)+'d'](_0x5738cf,_0x5eefe4),_0x36e344['appen'+'d'](_0x46a7e2,_0x124782);var _0x46879c=new Map();for(var _0x22c40b of _0x97483d){var _0x1b5d2d=document[_0x3b7a31(0x657)+'eElem'+'ent'](_0x15fca0['YnKNH']);_0x1b5d2d['type']='butto'+'n',_0x1b5d2d[_0x3b7a31(0x42c)+'Name']=_0x3b7a31(0x30d)+'b',_0x1b5d2d[_0x3b7a31(0x207)]=_0x22c40b[_0x3b7a31(0x3c6)],_0x1b5d2d[_0x3b7a31(0x120)+'HTML']=_0x15fca0[_0x3b7a31(0x500)]('<smal'+'l>'+_0x22c40b['label'],_0x3b7a31(0x295)+_0x3b7a31(0x5ae)),_0x1b5d2d[_0x3b7a31(0x13a)+'ck']=(_0x4a8de9=>()=>_0x3edadb(_0x4a8de9))(_0x22c40b['id']),_0x46879c['set'](_0x22c40b['id'],_0x1b5d2d),_0x46a7e2[_0x3b7a31(0x4c0)+_0x3b7a31(0x1e3)+'d'](_0x1b5d2d);}function _0x3edadb(_0x13e4c0){var _0x726126=_0x3b7a31;_0x3b575d[_0x726126(0x19a)]=_0x13e4c0,_0x4c358b();var _0x5b9749=_0x97483d[_0x726126(0x119)](_0x39dd41=>_0x39dd41['id']===_0x13e4c0)||_0x97483d[0x813+0x1871+-0x2*0x1042];_0x3038ce[_0x726126(0x29b)+_0x726126(0x3b7)+'t']=_0x214f44[_0x726126(0x23e)](_0x726126(0x2d7)+'a\x20Kou'+'r\x20—\x20',_0x5b9749['label']);for(var [_0x1de57a,_0x1204c5]of _0x46879c)_0x1204c5['class'+_0x726126(0x15a)]['toggl'+'e']('activ'+'e',_0x214f44[_0x726126(0x33b)](_0x1de57a,_0x13e4c0));_0x5eefe4['repla'+'ceChi'+_0x726126(0x397)](..._0x214f44['fxlIW'](_0x343513,_0x13e4c0));}return _0x15fca0[_0x3b7a31(0x6aa)](_0x3edadb,_0x3b575d[_0x3b7a31(0x19a)]||_0x3b7a31(0x264)+'t'),setInterval(()=>{var _0x508f9b=_0x3b7a31;if(_0x214f44[_0x508f9b(0x5d0)]('eXHpO',_0x214f44['rXLCG'])){var _0x408688=0x47*0x49+0x966+0x1*-0x1da5;for(var _0x4d683c in _0x23bca5){if(_0xe33283[_0x4d683c]&&_0x3b99e5[_0x4d683c][_0x508f9b(0x436)+'ed'])_0x408688++;}_0x58a7a7['hooks'+'Ok']=_0x408688;}else{if(!_0x171bcd)return;var _0x181b18=_0x5eefe4['child'+'ren'];for(var _0x466bbb=-0x13ca+0x267*-0x1+0x1631;_0x214f44['ZZHFy'](_0x466bbb,_0x181b18['lengt'+'h']);_0x466bbb++){var _0x2fe466=_0x181b18[_0x466bbb][_0x508f9b(0x2ed)+_0x508f9b(0x349)+'tor'](_0x508f9b(0x129)+'desc');_0x2fe466&&(_0x2fe466['textC'+_0x508f9b(0x3b7)+'t']['index'+'Of'](_0x214f44['TERnf'])===0x13cb+-0x1*-0x1867+0x1619*-0x2||_0x2fe466['textC'+'onten'+'t']['index'+'Of']('SAFE')===0x8*-0x476+0x37d*0xb+-0x2af)&&(_0x2fe466['textC'+_0x508f9b(0x3b7)+'t']=_0xa83068[_0x508f9b(0x182)+_0x508f9b(0x636)]?_0x508f9b(0x17a)+'MODE\x20'+_0x508f9b(0x4bd)+_0x508f9b(0x2e7)+'only,'+_0x508f9b(0x3e5)+'ooks\x20'+_0x508f9b(0x470)+_0x508f9b(0x38e)+'\x20exit'+')':_0xa83068[_0x508f9b(0x33d)]?_0x214f44[_0x508f9b(0x218)](_0x214f44[_0x508f9b(0x24d)](_0x508f9b(0x66b)+_0x508f9b(0x447)+'\x20'+(_0xa83068[_0x508f9b(0x1e0)+_0x508f9b(0x1e2)]?_0x214f44['rymWa'](_0xa83068[_0x508f9b(0x1e0)+'Ok'],'/')+_0xa83068[_0x508f9b(0x1e0)+_0x508f9b(0x1e2)]+_0x214f44[_0x508f9b(0x1f2)]:_0x508f9b(0x3f8)+_0x508f9b(0x4e2)+'med\x20('+_0x508f9b(0x2e3)+_0x508f9b(0x44b)),_0x214f44[_0x508f9b(0x39d)])+(_0xa83068['gameL'+_0x508f9b(0x550)]?_0x508f9b(0x113)+'d':_0x214f44['lHLnG'])+(_0x508f9b(0x49a)+_0x508f9b(0x145)+'\x20')+(_0xa83068[_0x508f9b(0x53b)+_0x508f9b(0x1fa)]?'held':_0x214f44['VIzOO'])+_0x214f44[_0x508f9b(0x4cd)],_0xa83068[_0x508f9b(0x6c3)+_0x508f9b(0x21c)]?'held':_0x214f44[_0x508f9b(0x344)])+(_0xa83068['lastE'+_0x508f9b(0x4ee)]?_0x508f9b(0x347)+_0x508f9b(0x205)+_0xa83068[_0x508f9b(0x3d0)+'rror']:''):'UWMK\x20'+_0x508f9b(0x31c)+_0x508f9b(0x1d5)+_0x508f9b(0x50e)+_0x508f9b(0x518)+_0x508f9b(0x5eb)+_0x508f9b(0x684)+_0x508f9b(0x5c9)+_0x508f9b(0x4e3)+_0x508f9b(0x543)+'ipt)');}}},0x11ba+-0xd52+0x40*-0x2),_0x36e344;}var _0x5b3e5b=_0x2a65cd(0x3df)+_0x2a65cd(0x358)+_0x2a65cd(0x5b4)+'l:\x20in'+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x2a65cd(0x283)+_0x2a65cd(0x15c)+'ng:\x20b'+_0x2a65cd(0x59e)+_0x2a65cd(0x18c)+_0x2a65cd(0x1a2)+_0x2a65cd(0x46d)+_0x2a65cd(0x4f7)+_0x2a65cd(0x238)+'ily:\x20'+_0x2a65cd(0x5cf)+_0x2a65cd(0x296)+_0x2a65cd(0x5dd)+_0x2a65cd(0x5d2)+_0x2a65cd(0x294)+'em-ui'+_0x2a65cd(0x58d)+_0x2a65cd(0x4dd)+'if;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x2a65cd(0x32b)+_0x2a65cd(0x1a0)+'ition'+':\x20abs'+_0x2a65cd(0x258)+_0x2a65cd(0x20d)+_0x2a65cd(0x4ce)+'4px;\x20'+'botto'+'m:\x2024'+'px;\x20w'+_0x2a65cd(0x625)+_0x2a65cd(0x4ff)+_0x2a65cd(0x6e3)+_0x2a65cd(0x67e)+_0x2a65cd(0x3fc)+_0x2a65cd(0x167)+_0x2a65cd(0x69d)+_0x2a65cd(0x644)+_0x2a65cd(0x25c)+_0x2a65cd(0x686)+'min(4'+'80px,'+_0x2a65cd(0x14d)+'(100v'+_0x2a65cd(0x1b5)+_0x2a65cd(0x393)+_0x2a65cd(0x44e)+_0x2a65cd(0x623)+_0x2a65cd(0x465)+':\x20fle'+_0x2a65cd(0x591)+_0x2a65cd(0x40d)+_0x2a65cd(0x435)+'addin'+'g:\x2010'+'px;\x20b'+'order'+'-radi'+_0x2a65cd(0x567)+_0x2a65cd(0x374)+_0x2a65cd(0x34c)+'er-ev'+_0x2a65cd(0x61b)+_0x2a65cd(0x61d)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x2a65cd(0x599)+_0x2a65cd(0x41e)+'rgba('+_0x2a65cd(0x335)+',21,.'+'82);\x20'+'backd'+_0x2a65cd(0x59d)+_0x2a65cd(0x678)+_0x2a65cd(0x604)+_0x2a65cd(0x14f)+_0x2a65cd(0x257)+_0x2a65cd(0x51e)+'e(150'+'%);\x20-'+'webki'+'t-bac'+'kdrop'+_0x2a65cd(0x61e)+_0x2a65cd(0x40e)+_0x2a65cd(0x11c)+_0x2a65cd(0x557)+_0x2a65cd(0x24e)+_0x2a65cd(0x5a5)+_0x2a65cd(0x5fb)+'\x0a\x20\x20\x20\x20'+_0x2a65cd(0x11f)+'-shad'+_0x2a65cd(0x35a)+_0x2a65cd(0x2a8)+_0x2a65cd(0x5d5)+_0x2a65cd(0x674)+'55,25'+_0x2a65cd(0x20b)+',.06)'+_0x2a65cd(0x551)+_0x2a65cd(0x2ad)+_0x2a65cd(0x220)+_0x2a65cd(0x671)+_0x2a65cd(0x16b)+_0x2a65cd(0x444)+'55,.0'+_0x2a65cd(0x269)+'\x2030px'+'\x2080px'+_0x2a65cd(0x671)+_0x2a65cd(0x2f1)+_0x2a65cd(0x6b4)+_0x2a65cd(0x11e)+_0x2a65cd(0x410)+'pacit'+_0x2a65cd(0x215)+'\x20tran'+_0x2a65cd(0x1c6)+_0x2a65cd(0x2f3)+_0x2a65cd(0x32e)+_0x2a65cd(0x239)+'px);\x20'+_0x2a65cd(0x34c)+'er-ev'+_0x2a65cd(0x61b)+_0x2a65cd(0x403)+_0x2a65cd(0x650)+_0x2a65cd(0x555)+_0x2a65cd(0x560)+_0x2a65cd(0x6c8)+'y\x20.35'+_0x2a65cd(0x5f4)+'e,\x20tr'+_0x2a65cd(0x1dc)+_0x2a65cd(0x494)+'5s\x20cu'+_0x2a65cd(0x445)+_0x2a65cd(0x289)+'(.22,'+'1,.36'+',1);\x0a'+'\x20\x20\x20\x20\x20'+_0x2a65cd(0x157)+'r:\x20#f'+_0x2a65cd(0x24b)+_0x2a65cd(0x4f7)+_0x2a65cd(0x52c)+_0x2a65cd(0x4b3)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x2a65cd(0x2bb)+_0x2a65cd(0x693)+_0x2a65cd(0x6ce)+'acity'+_0x2a65cd(0x14a)+_0x2a65cd(0x4fd)+_0x2a65cd(0x25a)+_0x2a65cd(0x403)+_0x2a65cd(0x1fc)+_0x2a65cd(0x1bf)+'event'+'s:\x20au'+_0x2a65cd(0x25b)+_0x2a65cd(0x3df)+_0x2a65cd(0x61a)+'ide\x20{'+'\x20disp'+_0x2a65cd(0x58e)+_0x2a65cd(0x168)+'\x20flex'+_0x2a65cd(0x411)+_0x2a65cd(0x107)+_0x2a65cd(0x6e6)+_0x2a65cd(0x2d5)+'align'+'-item'+_0x2a65cd(0x127)+_0x2a65cd(0x2a6)+'\x20gap:'+_0x2a65cd(0x3e3)+'\x20widt'+_0x2a65cd(0x401)+'px;\x20f'+_0x2a65cd(0x265)+_0x2a65cd(0x117)+_0x2a65cd(0x3af)+_0x2a65cd(0x200)+_0x2a65cd(0x4f6)+('0;\x20bo'+'rder-'+_0x2a65cd(0x562)+_0x2a65cd(0x679)+_0x2a65cd(0x26c)+_0x2a65cd(0x592)+_0x2a65cd(0x197)+_0x2a65cd(0x558)+_0x2a65cd(0x4ed)+_0x2a65cd(0x300)+_0x2a65cd(0x553)+_0x2a65cd(0x3ad)+'025);'+_0x2a65cd(0x640)+_0x2a65cd(0x420)+_0x2a65cd(0x10e)+'set\x200'+_0x2a65cd(0x2a8)+'1px\x20r'+_0x2a65cd(0x674)+'55,25'+_0x2a65cd(0x20b)+_0x2a65cd(0x3aa)+_0x2a65cd(0x661)+'\x20\x20\x20.m'+_0x2a65cd(0x359)+'o\x20{\x20d'+'ispla'+_0x2a65cd(0x6a6)+_0x2a65cd(0x58a)+_0x2a65cd(0x116)+'items'+_0x2a65cd(0x136)+_0x2a65cd(0x271)+_0x2a65cd(0x2b7)+_0x2a65cd(0x524)+'x;\x20he'+_0x2a65cd(0x5c1)+'\x2032px'+';\x20}\x0a\x20'+_0x2a65cd(0x2ac)+_0x2a65cd(0x359)+'o-svg'+_0x2a65cd(0x217)+'dth:\x20'+_0x2a65cd(0xfa)+'\x20heig'+_0x2a65cd(0x4ce)+_0x2a65cd(0x243)+_0x2a65cd(0x442)+_0x2a65cd(0x15e)+'visib'+_0x2a65cd(0xf8)+'ilter'+':\x20dro'+'p-sha'+'dow(0'+_0x2a65cd(0x17e)+_0x2a65cd(0x6d0)+'a(255'+_0x2a65cd(0x4d5)+'157,.'+_0x2a65cd(0x15d)+_0x2a65cd(0x39a)+_0x2a65cd(0x5a8)+'tab\x20{'+_0x2a65cd(0x3a0)+'lay:\x20'+_0x2a65cd(0x168)+_0x2a65cd(0x247)+_0x2a65cd(0x3d8)+_0x2a65cd(0x583)+_0x2a65cd(0x27d)+';\x20jus'+'tify-'+_0x2a65cd(0x612)+_0x2a65cd(0x4cc)+'enter'+';\x20wid'+_0x2a65cd(0x68f)+_0x2a65cd(0x374)+'heigh'+_0x2a65cd(0x1cf)+_0x2a65cd(0x1be)+_0x2a65cd(0x59e)+_0x2a65cd(0x1ce)+_0x2a65cd(0x515)+'r-rad'+'ius:\x20'+_0x2a65cd(0x244)+_0x2a65cd(0x3df)+'\x20\x20bac'+'kgrou'+'nd:\x20t'+_0x2a65cd(0x589)+_0x2a65cd(0x5f2)+_0x2a65cd(0x33e)+_0x2a65cd(0x600)+_0x2a65cd(0x674)+_0x2a65cd(0x62d)+_0x2a65cd(0x3f2)+_0x2a65cd(0x385)+_0x2a65cd(0x607)+_0x2a65cd(0x688)+_0x2a65cd(0x198)+'r;\x20fo'+_0x2a65cd(0x2cc)+_0x2a65cd(0x331)+'0px;\x20'+_0x2a65cd(0x1ac)+_0x2a65cd(0x63e)+'t:\x2070'+_0x2a65cd(0xf3)+_0x2a65cd(0x663)+'mn-ta'+'b:hov'+_0x2a65cd(0x297)+'color'+_0x2a65cd(0x4ed)+_0x2a65cd(0x6b1)+_0x2a65cd(0x10f)+_0x2a65cd(0x2d0)+_0x2a65cd(0x1b1)+_0x2a65cd(0x3df)+'.mn-t'+_0x2a65cd(0x1aa)+_0x2a65cd(0x4a1)+_0x2a65cd(0x597)+'or:\x20#'+_0x2a65cd(0x49d)+'d;\x20ba'+_0x2a65cd(0x599)+'und:\x20'+_0x2a65cd(0x342)+_0x2a65cd(0x5bb)+_0x2a65cd(0x154)+_0x2a65cd(0x1f1)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x2a65cd(0x507)+_0x2a65cd(0x5b6)+_0x2a65cd(0x265)+_0x2a65cd(0x53d)+'n-wid'+_0x2a65cd(0x302)+_0x2a65cd(0x2fa)+_0x2a65cd(0x5cb)+_0x2a65cd(0x366)+_0x2a65cd(0x118)+'x-dir'+_0x2a65cd(0x3c8)+_0x2a65cd(0x3ea)+_0x2a65cd(0x2b0)+_0x2a65cd(0x5dc)+_0x2a65cd(0x619)+'-top\x20'+_0x2a65cd(0x6a5)+_0x2a65cd(0x5cb)+_0x2a65cd(0x366)+_0x2a65cd(0x5c4)+'gn-it'+_0x2a65cd(0x2bc)+'cente'+_0x2a65cd(0x581)+_0x2a65cd(0x5e8)+'px;\x20p'+_0x2a65cd(0x44c)+'g:\x206p'+_0x2a65cd(0x3da)+_0x2a65cd(0x12f)+';\x20use'+_0x2a65cd(0x286)+_0x2a65cd(0x1f4)+'none;'+_0x2a65cd(0x5dc)+_0x2a65cd(0x619)+_0x2a65cd(0x637)+_0x2a65cd(0x49e)+_0x2a65cd(0x2a1)+'\x201;\x20m'+_0x2a65cd(0x3e6)+_0x2a65cd(0x480)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x2a65cd(0x54a)+_0x2a65cd(0x149)+'t-siz'+_0x2a65cd(0x41c)+'px;\x20f'+_0x2a65cd(0x4fe)+_0x2a65cd(0x457)+_0x2a65cd(0x413)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x2a65cd(0x1dd)+_0x2a65cd(0x16e)+'nt-si'+_0x2a65cd(0x331)+_0x2a65cd(0x29d)+_0x2a65cd(0x11a))+(_0x2a65cd(0x248)+'4;\x20}\x0a'+_0x2a65cd(0x663)+_0x2a65cd(0x2d9)+_0x2a65cd(0x406)+_0x2a65cd(0x3a0)+_0x2a65cd(0x58e)+_0x2a65cd(0x128)+'\x20plac'+_0x2a65cd(0x56b)+_0x2a65cd(0x583)+'enter'+';\x20wid'+_0x2a65cd(0x642)+'8px;\x20'+'heigh'+_0x2a65cd(0x222)+_0x2a65cd(0x1be)+'order'+_0x2a65cd(0x1ce)+_0x2a65cd(0x515)+_0x2a65cd(0x6a9)+_0x2a65cd(0x52a)+'8px;\x20'+'backg'+'round'+_0x2a65cd(0x2f3)+'nspar'+_0x2a65cd(0x6d1)+_0x2a65cd(0x473)+_0x2a65cd(0xf2)+_0x2a65cd(0x199)+_0x2a65cd(0x522)+'ity:\x20'+'.45;\x20'+'curso'+_0x2a65cd(0x38c)+'inter'+';\x20}\x0a\x20'+_0x2a65cd(0x2ac)+'n-clo'+_0x2a65cd(0x2e8)+_0x2a65cd(0x656)+'\x20opac'+'ity:\x20'+_0x2a65cd(0x60d)+'ckgro'+'und:\x20'+_0x2a65cd(0x342)+'255,2'+_0x2a65cd(0x41b)+_0x2a65cd(0x1cd)+_0x2a65cd(0x3be)+_0x2a65cd(0x663)+'mn-cl'+'ose\x20s'+'vg\x20{\x20'+'width'+':\x2014p'+_0x2a65cd(0x2aa)+_0x2a65cd(0x5c1)+'\x2014px'+';\x20fil'+_0x2a65cd(0x1fe)+_0x2a65cd(0x3a8)+_0x2a65cd(0x45a)+_0x2a65cd(0x698)+_0x2a65cd(0x152)+'olor;'+'\x20stro'+'ke-wi'+_0x2a65cd(0x480)+_0x2a65cd(0x432)+'roke-'+'linec'+_0x2a65cd(0x422)+'ound;'+_0x2a65cd(0x5dc)+_0x2a65cd(0x619)+_0x2a65cd(0x6dd)+_0x2a65cd(0x395)+_0x2a65cd(0x3ef)+';\x20min'+_0x2a65cd(0x179)+'ht:\x200'+_0x2a65cd(0x677)+_0x2a65cd(0x216)+_0x2a65cd(0x18b)+_0x2a65cd(0x242)+_0x2a65cd(0x16c)+_0x2a65cd(0x18f)+'rid;\x20'+_0x2a65cd(0x34a)+'templ'+_0x2a65cd(0x383)+'olumn'+_0x2a65cd(0x3e1)+'peat('+'auto-'+_0x2a65cd(0x2b2)+_0x2a65cd(0x3f9)+_0x2a65cd(0x5f6)+'0px,\x20'+'1fr))'+';\x20ali'+_0x2a65cd(0x4e0)+'ems:\x20'+'start'+';\x20ali'+_0x2a65cd(0x66c)+_0x2a65cd(0x370)+_0x2a65cd(0x4fc)+_0x2a65cd(0x1bb)+_0x2a65cd(0x28b)+_0x2a65cd(0x35f)+'paddi'+_0x2a65cd(0x4f1)+_0x2a65cd(0x24f)+'6px\x200'+_0x2a65cd(0x661)+_0x2a65cd(0x2ac)+_0x2a65cd(0x290)+_0x2a65cd(0x228)+_0x2a65cd(0x326)+_0x2a65cd(0x1e4)+'llbar'+'\x20{\x20wi'+_0x2a65cd(0x480)+'8px;\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+'cols:'+_0x2a65cd(0x189)+_0x2a65cd(0x2a5)+'croll'+_0x2a65cd(0x452)+_0x2a65cd(0x21f)+'{\x20bac'+'kgrou'+'nd:\x20r'+_0x2a65cd(0x674)+_0x2a65cd(0x41b)+'5,255'+_0x2a65cd(0x1f8)+_0x2a65cd(0x4c8)+'der-r'+'adius'+':\x204px'+_0x2a65cd(0x661)+_0x2a65cd(0x250)+_0x2a65cd(0x22e)+'d\x20{\x20b'+'order'+'-radi'+_0x2a65cd(0x229)+_0x2a65cd(0x374)+'backg'+_0x2a65cd(0x558)+':\x20rgb'+_0x2a65cd(0x300)+',255,'+_0x2a65cd(0x3ad)+_0x2a65cd(0x5b0)+_0x2a65cd(0x640)+_0x2a65cd(0x420)+_0x2a65cd(0x10e)+'set\x200'+'\x200\x200\x20'+_0x2a65cd(0x5d5)+_0x2a65cd(0x674)+_0x2a65cd(0x41b)+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x2a65cd(0x250)+_0x2a65cd(0x22e)+_0x2a65cd(0x194)+_0x2a65cd(0x606)+'kgrou'+'nd:\x20r'+_0x2a65cd(0x674)+_0x2a65cd(0x41b)+'5,255'+_0x2a65cd(0x1da)+';\x20box'+_0x2a65cd(0x3fe)+_0x2a65cd(0x643)+_0x2a65cd(0x4bf)+_0x2a65cd(0x60c)+_0x2a65cd(0x3ca)+_0x2a65cd(0x342)+_0x2a65cd(0x5bb)+'07,15'+_0x2a65cd(0x367)+');\x20}\x0a'+_0x2a65cd(0x663)+_0x2a65cd(0x5d1)+'rd-he'+'ad\x20{\x20'+_0x2a65cd(0x16c))+(_0x2a65cd(0x559)+'lex;\x20'+'align'+_0x2a65cd(0x1ca)+_0x2a65cd(0x127)+_0x2a65cd(0x2a6)+'\x20gap:'+'\x208px;'+_0x2a65cd(0x3af)+_0x2a65cd(0x200)+_0x2a65cd(0x6a1)+_0x2a65cd(0x65c)+_0x2a65cd(0x5dc)+_0x2a65cd(0x3bd)+'-card'+_0x2a65cd(0x637)+'e\x20{\x20f'+_0x2a65cd(0x265)+_0x2a65cd(0x53d)+'n-wid'+'th:\x200'+_0x2a65cd(0x661)+'\x20\x20\x20.s'+'k-car'+_0x2a65cd(0x50b)+_0x2a65cd(0x1f5)+'rong\x20'+_0x2a65cd(0x149)+_0x2a65cd(0x52c)+_0x2a65cd(0x4b3)+'px;\x20f'+_0x2a65cd(0x4fe)+'eight'+_0x2a65cd(0x1f0)+_0x2a65cd(0x33e)+_0x2a65cd(0x600)+'gba(2'+'46,23'+'8,242'+_0x2a65cd(0x39f)+_0x2a65cd(0x661)+'\x20\x20\x20.s'+_0x2a65cd(0x22e)+'d.on\x20'+'.sk-c'+_0x2a65cd(0x31d)+'itle\x20'+'stron'+_0x2a65cd(0x463)+_0x2a65cd(0x4d0)+'\x20#fff'+'0f5;\x20'+_0x2a65cd(0x39a)+'\x20.sk-'+_0x2a65cd(0x67f)+'\x20{\x20pa'+'dding'+_0x2a65cd(0x327)+'2px\x201'+_0x2a65cd(0x35f)+_0x2a65cd(0x39a)+'\x20.sk-'+_0x2a65cd(0x2dd)+_0x2a65cd(0x16e)+_0x2a65cd(0x2cc)+_0x2a65cd(0x331)+_0x2a65cd(0x29d)+'opaci'+'ty:\x20.'+'4;\x20ma'+_0x2a65cd(0x4ab)+_0x2a65cd(0x691)+_0x2a65cd(0x603)+'x;\x20}\x0a'+_0x2a65cd(0x663)+'sk-ct'+'l\x20{\x20d'+_0x2a65cd(0x38f)+_0x2a65cd(0x50d)+_0x2a65cd(0x632)+'lign-'+_0x2a65cd(0x28c)+_0x2a65cd(0x136)+_0x2a65cd(0x271)+_0x2a65cd(0x5fc)+'8px;\x20'+_0x2a65cd(0x18d)+_0x2a65cd(0x1fb)+'px\x200;'+_0x2a65cd(0x131)+'-size'+_0x2a65cd(0x3bf)+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x2a65cd(0x532)+'label'+'\x20{\x20fl'+'ex:\x201'+_0x2a65cd(0x33e)+_0x2a65cd(0x600)+'gba(2'+'46,23'+'8,242'+',.75)'+';\x20}\x0a\x20'+_0x2a65cd(0x250)+_0x2a65cd(0x234)+'t\x20{\x20d'+_0x2a65cd(0x38f)+_0x2a65cd(0x1c0)+'ock;\x20'+_0x2a65cd(0x1ac)+'size:'+_0x2a65cd(0x5e1)+_0x2a65cd(0x204)+'city:'+_0x2a65cd(0x631)+_0x2a65cd(0x39a)+_0x2a65cd(0x532)+_0x2a65cd(0x330)+'h\x20{\x20p'+_0x2a65cd(0x458)+_0x2a65cd(0x2c7)+_0x2a65cd(0x377)+_0x2a65cd(0x2b6)+_0x2a65cd(0x625)+_0x2a65cd(0x69b)+';\x20hei'+'ght:\x20'+'14px;'+_0x2a65cd(0x27f)+_0x2a65cd(0x5ef)+';\x20bor'+'der-r'+_0x2a65cd(0x648)+':\x2099p'+_0x2a65cd(0x634)+'ckgro'+'und:\x20'+_0x2a65cd(0x342)+'255,2'+'55,25'+_0x2a65cd(0x602)+_0x2a65cd(0x4f5)+'rsor:'+_0x2a65cd(0x40f)+_0x2a65cd(0x271)+'flex:'+_0x2a65cd(0x403)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+_0x2a65cd(0x5b7)+'after'+_0x2a65cd(0x408)+_0x2a65cd(0x370)+':\x20\x22\x22;'+_0x2a65cd(0x3c2)+'tion:'+_0x2a65cd(0x5ab)+'lute;'+_0x2a65cd(0x601)+_0x2a65cd(0x42b)+'\x20left'+_0x2a65cd(0x3c7)+';\x20wid'+_0x2a65cd(0x284)+_0x2a65cd(0x2f2)+_0x2a65cd(0x457)+_0x2a65cd(0x626)+';\x20bor'+'der-r'+_0x2a65cd(0x648)+':\x2050%'+_0x2a65cd(0x1ed)+'kgrou'+_0x2a65cd(0x476)+_0x2a65cd(0x674)+_0x2a65cd(0x41b)+_0x2a65cd(0x20b)+_0x2a65cd(0x595)+_0x2a65cd(0x650)+_0x2a65cd(0x555)+'on:\x20l'+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x2a65cd(0x5e3)+_0x2a65cd(0x208)+'}\x0a\x20\x20\x20'+_0x2a65cd(0x532)+'switc'+_0x2a65cd(0x4c5)+_0x2a65cd(0x321)+_0x2a65cd(0x1e8)+'\x22true'+_0x2a65cd(0x547)+'backg'+'round'+_0x2a65cd(0x4ed))+(_0x2a65cd(0x300)+',107,'+'157,.'+_0x2a65cd(0x188)+_0x2a65cd(0x39a)+'\x20.sk-'+'switc'+_0x2a65cd(0x4c5)+'a-che'+_0x2a65cd(0x1e8)+'\x22true'+_0x2a65cd(0x5da)+_0x2a65cd(0x5ca)+_0x2a65cd(0x4c2)+'t:\x2015'+_0x2a65cd(0x1be)+'ackgr'+_0x2a65cd(0x1b9)+'\x20#ff6'+_0x2a65cd(0x2fc)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'field'+_0x2a65cd(0x41a)+'ckgro'+_0x2a65cd(0x41e)+_0x2a65cd(0x342)+_0x2a65cd(0x444)+'55,25'+_0x2a65cd(0x6e0)+_0x2a65cd(0x163)+_0x2a65cd(0x59e)+':\x200;\x20'+_0x2a65cd(0x515)+_0x2a65cd(0x6a9)+'ius:\x20'+_0x2a65cd(0x2db)+'color'+_0x2a65cd(0x56e)+'eef2;'+'\x20padd'+_0x2a65cd(0x200)+'6px\x209'+_0x2a65cd(0x5ce)+'ont-s'+_0x2a65cd(0x614)+_0x2a65cd(0x5d6)+_0x2a65cd(0x503)+'tline'+_0x2a65cd(0x190)+'e;\x20bo'+_0x2a65cd(0x27b)+_0x2a65cd(0x1c2)+'inset'+'\x200\x200\x20'+'0\x201px'+_0x2a65cd(0x671)+'(255,'+_0x2a65cd(0x444)+_0x2a65cd(0x672)+'5);\x20}'+_0x2a65cd(0x3df)+'.sk-f'+'ield\x20'+_0x2a65cd(0x5bc)+_0x2a65cd(0x43b)+_0x2a65cd(0x416)+_0x2a65cd(0x1b9)+_0x2a65cd(0x586)+_0x2a65cd(0x1c8)+_0x2a65cd(0x39a)+'\x20.sk-'+'range'+_0x2a65cd(0x340)+'splay'+_0x2a65cd(0x32d)+'x;\x20al'+'ign-i'+_0x2a65cd(0x3b1)+'\x20cent'+_0x2a65cd(0x33c)+_0x2a65cd(0x263)+'px;\x20}'+_0x2a65cd(0x3df)+_0x2a65cd(0x504)+_0x2a65cd(0x19e)+_0x2a65cd(0x255)+_0x2a65cd(0x326)+_0x2a65cd(0x4d4)+_0x2a65cd(0x56a)+_0x2a65cd(0x50f)+_0x2a65cd(0x18e)+'ppear'+_0x2a65cd(0x2da)+_0x2a65cd(0x403)+';\x20wid'+_0x2a65cd(0x486)+_0x2a65cd(0x35f)+_0x2a65cd(0x233)+_0x2a65cd(0x309)+'x;\x20ba'+'ckgro'+'und:\x20'+_0x2a65cd(0x4fd)+'paren'+_0x2a65cd(0x412)+_0x2a65cd(0x663)+'sk-sl'+'ider:'+_0x2a65cd(0x189)+_0x2a65cd(0x2a5)+_0x2a65cd(0x19e)+_0x2a65cd(0x192)+_0x2a65cd(0x497)+_0x2a65cd(0x1d2)+'\x20{\x20he'+_0x2a65cd(0x5c1)+'\x202px;'+'\x20bord'+_0x2a65cd(0x12a)+_0x2a65cd(0x180)+'\x202px;'+'\x20back'+_0x2a65cd(0x6ca)+'d:\x20li'+'near-'+_0x2a65cd(0x2c6)+_0x2a65cd(0x32f)+'ff6b9'+_0x2a65cd(0x621)+_0x2a65cd(0x3a4)+')\x200\x200'+'\x20/\x20va'+_0x2a65cd(0x281)+_0x2a65cd(0x511)+_0x2a65cd(0x404)+'%\x20no-'+'repea'+'t,\x20rg'+'ba(25'+'5,255'+',255,'+'.08);'+_0x2a65cd(0x5dc)+_0x2a65cd(0x3bd)+'-slid'+'er::-'+_0x2a65cd(0x1fd)+'t-sli'+'der-t'+_0x2a65cd(0x21f)+_0x2a65cd(0x58f)+'bkit-'+_0x2a65cd(0x4c6)+_0x2a65cd(0x323)+_0x2a65cd(0x190)+'e;\x20wi'+'dth:\x20'+_0x2a65cd(0x2db)+_0x2a65cd(0x233)+_0x2a65cd(0x63d)+_0x2a65cd(0x2c1)+_0x2a65cd(0x4ab)+_0x2a65cd(0x427)+_0x2a65cd(0x339)+_0x2a65cd(0x27f)+_0x2a65cd(0x12a)+'dius:'+'\x2050%;'+_0x2a65cd(0x620)+_0x2a65cd(0x6ca)+_0x2a65cd(0x1d6)+_0x2a65cd(0x3a4)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2a65cd(0x608)+_0x2a65cd(0x16e)+'nt-si'+'ze:\x201'+_0x2a65cd(0x29d)+_0x2a65cd(0x1ac)+_0x2a65cd(0x63e)+'t:\x2060'+_0x2a65cd(0x19b)+_0x2a65cd(0x156)+_0x2a65cd(0x642)+_0x2a65cd(0x2ab)+_0x2a65cd(0x36b)+_0x2a65cd(0x35c)+_0x2a65cd(0x434)+_0x2a65cd(0x388)+_0x2a65cd(0x4d0)+_0x2a65cd(0x671)+_0x2a65cd(0x303)+_0x2a65cd(0x4be)+'42,.8'+_0x2a65cd(0x3be)+_0x2a65cd(0x663)+_0x2a65cd(0x4b0)+'lor\x20{')+('\x20widt'+_0x2a65cd(0x5c0)+'px;\x20h'+_0x2a65cd(0x457)+_0x2a65cd(0x50c)+_0x2a65cd(0x616)+_0x2a65cd(0x38a)+'\x200;\x20b'+_0x2a65cd(0x59e)+_0x2a65cd(0x44d)+'us:\x206'+_0x2a65cd(0x1be)+_0x2a65cd(0x416)+_0x2a65cd(0x1b9)+_0x2a65cd(0x403)+_0x2a65cd(0x5a4)+'ding:'+'\x200;\x20c'+'ursor'+_0x2a65cd(0x1b7)+_0x2a65cd(0x2a6)+'\x20}\x0a\x20\x20'+_0x2a65cd(0x3bd)+_0x2a65cd(0x450)+'\x20{\x20fo'+_0x2a65cd(0x2cc)+'ze:\x201'+'1px;\x20'+_0x2a65cd(0x473)+_0x2a65cd(0x4ed)+_0x2a65cd(0x6b1)+',238,'+'242,.'+_0x2a65cd(0x453)+_0x2a65cd(0x44c)+_0x2a65cd(0x521)+'x\x200;\x20'+_0x2a65cd(0x39a)+_0x2a65cd(0x532)+_0x2a65cd(0x59c)+'err\x20{'+'\x20colo'+_0x2a65cd(0x696)+'f7a93'+_0x2a65cd(0x661)+_0x2a65cd(0x250)+'k-btn'+_0x2a65cd(0x5b4)+_0x2a65cd(0x148)+'elf:\x20'+_0x2a65cd(0x5e4)+'start'+_0x2a65cd(0x4c8)+'der:\x20'+'0;\x20bo'+_0x2a65cd(0x41f)+_0x2a65cd(0x562)+_0x2a65cd(0xfc)+'x;\x20pa'+_0x2a65cd(0x545)+_0x2a65cd(0x626)+_0x2a65cd(0x2e6)+_0x2a65cd(0x1ed)+_0x2a65cd(0x4c4)+'nd:\x20#'+_0x2a65cd(0x49d)+_0x2a65cd(0x676)+'lor:\x20'+_0x2a65cd(0x64f)+_0x2a65cd(0x131)+_0x2a65cd(0x332)+':\x2011.'+_0x2a65cd(0x243)+_0x2a65cd(0x1ac)+_0x2a65cd(0x63e)+_0x2a65cd(0x4da)+_0x2a65cd(0x529)+'rsor:'+_0x2a65cd(0x40f)+_0x2a65cd(0x271)+_0x2a65cd(0x39a)+'\x20.sk-'+_0x2a65cd(0x3dd)+_0x2a65cd(0x498)+'{\x20fil'+'ter:\x20'+'brigh'+_0x2a65cd(0x46c)+'(1.1)'+_0x2a65cd(0x661)+_0x2a65cd(0x237));window[_0x2a65cd(0x4d2)+_0x2a65cd(0x1a8)+'stene'+'r'](_0x15fca0['QMAVs'],_0x42afad=>{var _0x4ae9ab=_0x2a65cd;_0x15fca0[_0x4ae9ab(0x477)](_0x42afad[_0x4ae9ab(0x57b)],_0x4ae9ab(0x209)+'t')&&(_0x15fca0[_0x4ae9ab(0x647)](_0x4ae9ab(0x23a),_0x15fca0['UVzOJ'])?(_0x42afad[_0x4ae9ab(0x2c0)+'ntDef'+_0x4ae9ab(0x2ae)](),_0x15fca0[_0x4ae9ab(0x280)](_0x121aaf)):new _0x24ac08(_0x4ae1d7)['write'+_0x4ae9ab(0x3d4)](_0x6f8585,_0x32f766,_0x182283));},!![]);var _0x23fd11=document['creat'+_0x2a65cd(0x1b3)+_0x2a65cd(0x3fb)](_0x15fca0[_0x2a65cd(0x195)]);_0x23fd11['style']['cssTe'+'xt']=_0x2a65cd(0x5a9)+_0x2a65cd(0x6a0)+'ixed;'+'top:1'+_0x2a65cd(0x65a)+'ight:'+'12px;'+_0x2a65cd(0x697)+_0x2a65cd(0x4a0)+'47483'+'646;c'+'ursor'+_0x2a65cd(0x2fe)+_0x2a65cd(0x3f5)+_0x2a65cd(0x625)+'26px;'+'heigh'+_0x2a65cd(0x1e9)+'x;opa'+'city:'+'0.5;t'+_0x2a65cd(0x4c9)+'tion:'+_0x2a65cd(0x11a)+'ty\x200.'+_0x2a65cd(0x68b)+_0x2a65cd(0x22b)+_0x2a65cd(0x364)+'ts:au'+'to;fi'+_0x2a65cd(0x3fa)+'drop-'+_0x2a65cd(0x420)+'w(0\x200'+_0x2a65cd(0x24f)+'rgba('+_0x2a65cd(0x5bb)+'07,15'+_0x2a65cd(0x2c2)+'))',_0x23fd11['inner'+_0x2a65cd(0x4f3)]=_0x2a65cd(0x246)+_0x2a65cd(0x1d9)+_0x2a65cd(0x153)+'\x200\x2024'+'\x2024\x22>'+_0x2a65cd(0x667)+_0x2a65cd(0x6b9)+_0x2a65cd(0x1d3)+'c-1.5'+_0x2a65cd(0x31b)+_0x2a65cd(0x509)+'-4-7.'+_0x2a65cd(0x517)+'.5\x201.'+_0x2a65cd(0x2e5)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x2a65cd(0x48b)+'-2.5\x20'+_0x2a65cd(0x6a3)+_0x2a65cd(0x6b8)+_0x2a65cd(0x213)+_0x2a65cd(0x268)+_0x2a65cd(0x55b)+'oke=\x22'+'#ff6b'+_0x2a65cd(0x571)+_0x2a65cd(0x45a)+_0x2a65cd(0x123)+_0x2a65cd(0x59b)+'\x20stro'+_0x2a65cd(0x224)+_0x2a65cd(0x5b3)+_0x2a65cd(0x468)+_0x2a65cd(0x660)+_0x2a65cd(0x45a)+_0x2a65cd(0x66d)+'join='+_0x2a65cd(0x4b8)+'d\x22/><'+_0x2a65cd(0x2e2)+_0x2a65cd(0x21b)+'\x2212\x22\x20'+_0x2a65cd(0x20c)+'0\x22\x20r='+_0x2a65cd(0x277)+_0x2a65cd(0x177)+_0x2a65cd(0x652)+'6b9d\x22'+_0x2a65cd(0x2b4)+'vg>',_0x23fd11[_0x2a65cd(0x207)]=_0x15fca0['cGjTS'],_0x23fd11[_0x2a65cd(0x261)+_0x2a65cd(0x3bc)+'er']=()=>_0x23fd11[_0x2a65cd(0x2d2)]['opaci'+'ty']='1',_0x23fd11['onmou'+_0x2a65cd(0x2d4)+'ve']=()=>_0x23fd11[_0x2a65cd(0x2d2)][_0x2a65cd(0x11a)+'ty']='0.5',_0x23fd11['oncli'+'ck']=_0x25ff63=>{var _0x553e80=_0x2a65cd;_0x25ff63['stopP'+_0x553e80(0x2f6)+'ation'](),_0x15fca0[_0x553e80(0x230)](_0x121aaf);},document['body'][_0x2a65cd(0x4c0)+_0x2a65cd(0x1e3)+'d'](_0x23fd11),_0xd953d4(),requestAnimationFrame(_0x425488),console[_0x2a65cd(0x5c8)]('[saku'+'ra-ko'+_0x2a65cd(0x514)+_0x2a65cd(0x1a9)+'eady.'+'\x20UWMK'+':',_0xa83068[_0x2a65cd(0x33d)]);});})()));
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
