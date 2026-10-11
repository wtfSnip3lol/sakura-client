// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      2.10.2
// @description  Sakura Client — Clutcher.io full client, AstraStrike clean overlay, 2v2.io ESP, Overtide/KourStrike UWMK menu, Cookie Clicker Sakura visual recode
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @match        https://2v2.io/*
// @match        https://www.2v2.io/*
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
function _0xe814(_0x4d5c41,_0x31f20f){_0x4d5c41=_0x4d5c41-(-0x3c4*-0x7+-0x502+0x11*-0x134);var _0x33ac6d=_0x5be6();var _0x33a37b=_0x33ac6d[_0x4d5c41];if(_0xe814['MZMgRh']===undefined){var _0x566c98=function(_0x34af03){var _0x1e89c9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xc7428c='',_0x36fd2c='';for(var _0x341bf2=-0x21cf+-0x2435+0x1*0x4604,_0x2dec5c,_0x596133,_0x3fa316=0x1af6+-0x1*-0x2005+-0x3afb;_0x596133=_0x34af03['charAt'](_0x3fa316++);~_0x596133&&(_0x2dec5c=_0x341bf2%(0x163*-0x1c+0x16d0+0x1008)?_0x2dec5c*(0x1deb+-0x2562+0x7b7)+_0x596133:_0x596133,_0x341bf2++%(0x1*-0x1ec7+0x3ad*0x8+0x47*0x5))?_0xc7428c+=String['fromCharCode'](0x1*0x575+0x38b*0x6+-0x19b8&_0x2dec5c>>(-(-0x1f*-0x10d+-0x1*0x1891+-0x800)*_0x341bf2&0x1a1b+-0x21d7+-0x2*-0x3e1)):0x6*0x475+0x2663+-0x1*0x4121){_0x596133=_0x1e89c9['indexOf'](_0x596133);}for(var _0x288753=-0x2043*-0x1+-0x18e1*-0x1+0x2*-0x1c92,_0x5d70e7=_0xc7428c['length'];_0x288753<_0x5d70e7;_0x288753++){_0x36fd2c+='%'+('00'+_0xc7428c['charCodeAt'](_0x288753)['toString'](0x1ce5*0x1+0x124c*0x1+-0x2f21))['slice'](-(0x1*0x3d6+-0x4*-0x755+-0x84a*0x4));}return decodeURIComponent(_0x36fd2c);};_0xe814['EcVHjL']=_0x566c98,_0xe814['syBseX']={},_0xe814['MZMgRh']=!![];}var _0x2ab0be=_0x33ac6d[-0x111f+-0x1*0x6d+0x2*0x8c6],_0x4f5ecc=_0x4d5c41+_0x2ab0be,_0x366680=_0xe814['syBseX'][_0x4f5ecc];return!_0x366680?(_0x33a37b=_0xe814['EcVHjL'](_0x33a37b),_0xe814['syBseX'][_0x4f5ecc]=_0x33a37b):_0x33a37b=_0x366680,_0x33a37b;}(function(_0x514b23,_0x3cacdf){var _0x2bbea2=_0xe814,_0x4f56c4=_0x514b23();while(!![]){try{var _0x45578e=parseInt(_0x2bbea2(0x4d5))/(-0x63*-0x6+-0xb*0x12e+0xaa9)+-parseInt(_0x2bbea2(0x5b8))/(-0x23d4+-0xe3*0x2+-0x12ce*-0x2)*(-parseInt(_0x2bbea2(0x522))/(-0xa65*-0x1+-0x1e28*0x1+0x13c6))+parseInt(_0x2bbea2(0x409))/(0x23ce+-0x23d5+0xb*0x1)+-parseInt(_0x2bbea2(0x5ab))/(-0x187e+0x2125*-0x1+0x1ec*0x1e)+parseInt(_0x2bbea2(0x3b5))/(0x1937+0x2199+0x5*-0xbc2)*(parseInt(_0x2bbea2(0x379))/(-0x1*-0x2001+-0x816+-0x17e4))+-parseInt(_0x2bbea2(0x5fe))/(0x1c7*-0xc+-0x6*-0x503+-0x8b6)+-parseInt(_0x2bbea2(0x532))/(0xb50*-0x3+0x6*-0x362+0x3645);if(_0x45578e===_0x3cacdf)break;else _0x4f56c4['push'](_0x4f56c4['shift']());}catch(_0xcedc63){_0x4f56c4['push'](_0x4f56c4['shift']());}}}(_0x5be6,-0x1*-0x71ce9+0x2*-0x76e1f+-0xae4a*-0x17),((()=>{'use strict';var _0x410a96=_0xe814,_0x16a3fd={'FCLQd':function(_0x2ec30b){return _0x2ec30b();},'srHCk':'IrOMB','udtbW':function(_0x5dda47,_0x33ff5e){return _0x5dda47>_0x33ff5e;},'Ypily':_0x410a96(0x22f),'uIlvN':function(_0x8dc92c,_0x106fda){return _0x8dc92c===_0x106fda;},'gwFGz':_0x410a96(0x435)+_0x410a96(0x61e),'gsuop':'4|7|8'+_0x410a96(0x140)+_0x410a96(0x337)+_0x410a96(0x6bb)+'|2','VkomO':function(_0x1d2326,_0x5cbd08){return _0x1d2326(_0x5cbd08);},'AnCNo':function(_0x5d35c5,_0x53fc28){return _0x5d35c5(_0x53fc28);},'QKNrl':function(_0x3ff74d,_0x2adea7){return _0x3ff74d/_0x2adea7;},'NPvXT':function(_0x36416c,_0x2a92b7){return _0x36416c*_0x2a92b7;},'ftUAA':function(_0x558b9f,_0x1c6a2c){return _0x558b9f-_0x1c6a2c;},'RWVgt':'ghbFQ','zAoMV':'DynhP','Xsfpt':function(_0x15a2cc,_0x2f490e,_0x246b63,_0x37cbfc){return _0x15a2cc(_0x2f490e,_0x246b63,_0x37cbfc);},'BUumY':function(_0x3e0d0b,_0x14ef42){return _0x3e0d0b!=_0x14ef42;},'TIQqe':function(_0xdc8825,_0x4a7315,_0x117a54,_0x4dff37,_0x25a2a7){return _0xdc8825(_0x4a7315,_0x117a54,_0x4dff37,_0x25a2a7);},'yKxva':_0x410a96(0x296),'RiqGI':function(_0x34e978,_0x16a6dc){return _0x34e978!==_0x16a6dc;},'tZxGu':'HLZxQ','zferP':'1|4|2'+'|0|3','zukyN':'[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x410a96(0x4da)+_0x410a96(0x4f1),'GEMXs':'Inser'+'t','zuBSt':_0x410a96(0x647)+'ers','dthxp':_0x410a96(0x688)+'S','AXuuJ':_0x410a96(0x33e)+'ete','dhloM':function(_0x1d0fac,_0x2e37bf){return _0x1d0fac*_0x2e37bf;},'GDyyJ':function(_0x12b5f4,_0x51ed1b){return _0x12b5f4/_0x51ed1b;},'IzUnw':function(_0x332518,_0x212078){return _0x332518(_0x212078);},'bGqgA':function(_0x4c6013,_0x85e7a2){return _0x4c6013&&_0x85e7a2;},'SrWBl':_0x410a96(0x421),'HrvUO':function(_0x5067a1,_0x34c923){return _0x5067a1===_0x34c923;},'VMAyC':_0x410a96(0x200),'CcUGl':_0x410a96(0x1cc),'lVTTQ':function(_0x4ca7d7,_0x40b7ee,_0x2a3aad,_0x1f69d2,_0x536444){return _0x4ca7d7(_0x40b7ee,_0x2a3aad,_0x1f69d2,_0x536444);},'GHrld':function(_0x13218c,_0x4eb036,_0x49def6,_0x2b9d25,_0x5ef7e0){return _0x13218c(_0x4eb036,_0x49def6,_0x2b9d25,_0x5ef7e0);},'yMhPY':function(_0x258c01,_0x5e1945){return _0x258c01<_0x5e1945;},'sjiCe':function(_0x447838,_0x565270,_0x4f6cad){return _0x447838(_0x565270,_0x4f6cad);},'KWrXv':_0x410a96(0x55f),'jZvAk':'i32','QlYiM':function(_0x4c2f13,_0x79a555,_0xcb38d8,_0x2277d8,_0x5a668e){return _0x4c2f13(_0x79a555,_0xcb38d8,_0x2277d8,_0x5a668e);},'Mzqcf':function(_0x5d34d4,_0x49b8e2){return _0x5d34d4!==_0x49b8e2;},'NKFJv':'EoaoD','AWRYK':function(_0x52ce95,_0x5b071a,_0xbb1e41,_0xe18343,_0x274851){return _0x52ce95(_0x5b071a,_0xbb1e41,_0xe18343,_0x274851);},'Hpofg':function(_0x233347,_0xc3c50a){return _0x233347+_0xc3c50a;},'LLzNV':_0x410a96(0x33d),'IuJjW':function(_0x452816,_0x327fa8){return _0x452816!==_0x327fa8;},'GGMKt':_0x410a96(0x19c),'VTYEd':_0x410a96(0x6b1)+'wn','liKLx':'keyup','WnXhs':'blur','zuiol':'mANoo','kPVId':function(_0xe56f83,_0xe09af1){return _0xe56f83===_0xe09af1;},'qeHxs':'inter'+_0x410a96(0x21c)+'e','BDrlZ':function(_0x42cfcf,_0x30b22a){return _0x42cfcf===_0x30b22a;},'UZiqg':_0x410a96(0x211)+'ntent'+_0x410a96(0x614)+'d','SLbRk':_0x410a96(0x240)+'wn','IGeWt':function(_0x693061,_0xd78f77){return _0x693061+_0xd78f77;},'ttrIz':'kour-'+'io_30'+_0x410a96(0x324)+_0x410a96(0x28f)+'nt','ErXTL':_0x410a96(0x3b1)+_0x410a96(0x69c)+_0x410a96(0x153)+_0x410a96(0x292)+'t','ImMxS':'fulls'+_0x410a96(0x5d4)+'-banr'+'s','LYBru':function(_0x2f16b9,_0x5378d7){return _0x2f16b9===_0x5378d7;},'PXAeu':_0x410a96(0x54b),'Uttie':function(_0x28428c,_0x14b662){return _0x28428c===_0x14b662;},'oeOzr':'VfKbH','Fctzp':'none','fKNPh':function(_0x134aad,_0x54a1fc){return _0x134aad/_0x54a1fc;},'BwaDJ':function(_0x41901c,_0x5549c1){return _0x41901c*_0x5549c1;},'MFths':function(_0x484f8f,_0x2cc906){return _0x484f8f+_0x2cc906;},'usiQr':function(_0x1a846f,_0xf2fe38){return _0x1a846f*_0xf2fe38;},'FEnIU':'4|1|9'+_0x410a96(0x340)+'2|10|'+_0x410a96(0x48c)+'|5','FmYqr':function(_0x46dc42){return _0x46dc42();},'WQWHg':_0x410a96(0x34d)+'n','DPwhX':_0x410a96(0x63f)+'itch','CbyNu':'role','oHhKb':_0x410a96(0x35c)+'h','kcOGn':function(_0x1fd841,_0x44a8f9){return _0x1fd841(_0x44a8f9);},'avtxM':_0x410a96(0x134)+'|2|1|'+'4','poMUm':'5|0|1'+_0x410a96(0x340)+'6|2|4','xahln':_0x410a96(0x164)+'l','unBRe':_0x410a96(0x24a)+_0x410a96(0x36b),'OXlUw':'div','aUlVr':'small','JdVcO':'sk-hi'+'nt','zUibo':function(_0x424b25,_0x5bfc70){return _0x424b25!==_0x5bfc70;},'eCmbs':'\x20on','VZTBQ':_0x410a96(0x6a3)+_0x410a96(0x56d)+_0x410a96(0x1b5),'Qijnm':_0x410a96(0x199)+'g','DRBmR':'yxgZg','jMEia':'1|5|3'+_0x410a96(0x587)+'4|0|6','pcvzh':'sk-mb'+'ody','sEVGQ':function(_0x421904,_0x26159a){return _0x421904+_0x26159a;},'siAda':'\x20|\x20ga'+_0x410a96(0x5ff),'bPgeR':'loadi'+'ng','eDXyM':_0x410a96(0x1a2),'BBqSN':_0x410a96(0x482)+'s','GUIQB':'240\x20F'+_0x410a96(0x558)+_0x410a96(0x1b7),'DhreZ':'calls'+_0x410a96(0x44c)+'yEngi'+_0x410a96(0x44b)+'plica'+_0x410a96(0x3bc)+'set_t'+'arget'+_0x410a96(0x52c)+'Rate','DLZEp':_0x410a96(0x336),'xsMyA':_0x410a96(0xf2)+_0x410a96(0x664)+'\x20','NbSjD':function(_0x58b587,_0x396f79){return _0x58b587===_0x396f79;},'DgswA':'cqMfg','EYcwq':_0x410a96(0x124),'PGkoz':'shown','iwGZu':function(_0x1bbb0c,_0xfcced9){return _0x1bbb0c<_0xfcced9;},'tnUqs':function(_0x2dfb63,_0x188281){return _0x2dfb63+_0x188281;},'AJsrO':function(_0x87db69,_0x12bd4d){return _0x87db69+_0x12bd4d;},'gFvHu':'mn-pa'+_0x410a96(0x5f0),'SnDAF':'mn-si'+'de','OYYPi':_0x410a96(0x1ea)+'viewB'+_0x410a96(0x67a)+_0x410a96(0x3f7)+'\x2024\x22\x20'+'class'+'=\x22mn-'+'logo-'+_0x410a96(0x2f5)+_0x410a96(0x5e7)+_0x410a96(0x4bc)+'12\x2021'+'c-1.5'+'-2.5-'+'4-4.5'+'-4-7.'+'5\x200-2'+'.5\x201.'+_0x410a96(0x29a)+_0x410a96(0x63a)+_0x410a96(0x341)+'\x204\x204.'+_0x410a96(0x270)+'-2.5\x20'+_0x410a96(0x6a0)+_0x410a96(0x3f1)+_0x410a96(0x222)+_0x410a96(0x5e1)+'\x22\x20str'+_0x410a96(0x678)+'#ff6b'+'9d\x22\x20s'+_0x410a96(0x210)+_0x410a96(0x252)+'h=\x222\x22'+_0x410a96(0x458)+_0x410a96(0x3dc)+_0x410a96(0x62c)+'=\x22rou'+_0x410a96(0x487)+'troke'+_0x410a96(0x58c)+'join='+'\x22roun'+'d\x22/><'+_0x410a96(0x624)+_0x410a96(0x6aa)+'\x2212\x22\x20'+_0x410a96(0x361)+_0x410a96(0xe9)+_0x410a96(0x1eb)+_0x410a96(0x32e)+_0x410a96(0x24e)+'6b9d\x22'+_0x410a96(0x640)+_0x410a96(0x316),'dNumM':_0x410a96(0x6b4)+_0x410a96(0x65d)+'r','NIAkY':'mn-cl'+_0x410a96(0x4ea),'ulNWg':_0x410a96(0x630)+'ls','pOtTi':function(_0x44886d,_0xe0d4fe){return _0x44886d===_0xe0d4fe;},'ULkgl':_0x410a96(0x4e5)+'b','akoWY':function(_0x4d9c0d,_0x3a8ef7){return _0x4d9c0d+_0x3a8ef7;},'Ksgxs':_0x410a96(0x453)+'t','AAzJl':function(_0x2cbcf3){return _0x2cbcf3();},'CzAAd':function(_0x17df2c){return _0x17df2c();},'iziwA':_0x410a96(0x4fe),'nITgy':'rgba('+'255,1'+_0x410a96(0x45b)+'7,0.3'+'5)','leCYr':_0x410a96(0x653)+_0x410a96(0x2ab)+'-seri'+_0x410a96(0x5dd)+_0x410a96(0x40c)+_0x410a96(0x18f)+_0x410a96(0x33a)+'if','ZqQcJ':'600\x20','akfii':function(_0xfe04c6,_0x1b6a7d){return _0xfe04c6/_0x1b6a7d;},'cOQcB':function(_0x33eceb,_0xcece99){return _0x33eceb+_0xcece99;},'RAoGC':_0x410a96(0x1da),'IdOdT':_0x410a96(0x33d)+'3','jSlXO':_0x410a96(0x2bf)+'ng\x20fo'+_0x410a96(0x695)+'e…','WhmUI':'true','eZTrj':function(_0x459002,_0x5c5e4b){return _0x459002===_0x5c5e4b;},'IxQLy':'GyQdm','Rvruh':_0x410a96(0x20e),'NssXW':_0x410a96(0x4ae),'XVBOg':_0x410a96(0x212)+'e','bFnLW':'IbMWE','KewFX':'noRec'+_0x410a96(0x131),'BICnz':'0|2|5'+_0x410a96(0x325)+'4','dEXiC':function(_0x2022bd,_0x36311b,_0xa2087c,_0x2ad5d7,_0x1bee1f){return _0x2022bd(_0x36311b,_0xa2087c,_0x2ad5d7,_0x1bee1f);},'lTMiu':'QRRSc','BRAUp':'God\x20M'+'ode','PpbMg':'No\x20Re'+'coil','fTJCG':function(_0x9a023d,_0xaf1251,_0x59f137,_0x4c5df7,_0x55e293,_0x71300d){return _0x9a023d(_0xaf1251,_0x59f137,_0x4c5df7,_0x55e293,_0x71300d);},'IweRu':_0x410a96(0x6a2)+_0x410a96(0x679)+'P]','QTPAw':function(_0x48f1d8,_0x3c7494,_0x3874b3,_0x34a3db){return _0x48f1d8(_0x3c7494,_0x3874b3,_0x34a3db);},'GBdfE':_0x410a96(0x551)+'s\x20Mov'+'ement'+'.jump'+'Force'+'\x20and\x20'+'both\x20'+'gravi'+_0x410a96(0x393)+_0x410a96(0x1cf),'oQnST':_0x410a96(0x321)+_0x410a96(0x541)+'ement'+_0x410a96(0x4c4)+_0x410a96(0x262)+_0x410a96(0x46c)+_0x410a96(0x446)+'\x20jump'+_0x410a96(0x396)+_0x410a96(0x40f)+_0x410a96(0x47b)+_0x410a96(0x5b6)+_0x410a96(0x5fc),'PjFTC':_0x410a96(0x6a6),'xCZJG':'Adblo'+'ck','dKCPE':'Safe\x20'+_0x410a96(0x141)+_0x410a96(0x299)+_0x410a96(0x2be)+'nly)','dqZLU':_0x410a96(0x11c)+_0x410a96(0x1a5)+'nstal'+_0x410a96(0x3e2)+_0x410a96(0x3d9)+'tramp'+'oline'+_0x410a96(0x2c2)+_0x410a96(0x47f)+_0x410a96(0x37d)+_0x410a96(0x58f)+_0x410a96(0x1c4)+_0x410a96(0x2ce)+_0x410a96(0x463)+_0x410a96(0x69e)+_0x410a96(0x132)+_0x410a96(0x4c6)+_0x410a96(0x20f)+'ure\x20t'+_0x410a96(0x644)+_0x410a96(0x29c)+'ot\x20ma'+_0x410a96(0x4aa)+_0x410a96(0x500)+_0x410a96(0x489)+_0x410a96(0x633)+_0x410a96(0x605)+_0x410a96(0x57d)+_0x410a96(0x547)+_0x410a96(0x150)+_0x410a96(0x119)+_0x410a96(0x4ce)+_0x410a96(0x636)+'\x27\x20the'+'\x20mome'+'nt\x20it'+'\x20is\x20c'+_0x410a96(0x3d5)+'.\x20Tur'+'n\x20the'+_0x410a96(0x27f)+'one\x20a'+'t\x20a\x20t'+_0x410a96(0x4fb)+'reloa'+_0x410a96(0x578)+'d\x20see'+'\x20whic'+_0x410a96(0x281)+_0x410a96(0x5f8)+_0x410a96(0x138)+_0x410a96(0x665)+_0x410a96(0x1a8)+'n.','kOqiH':_0x410a96(0x2d0)+'Kille'+'r','XFhSS':_0x410a96(0x57e)+'s','KPFYQ':'posit'+'ion:f'+_0x410a96(0x538)+'inset'+':0;wi'+_0x410a96(0x697)+_0x410a96(0x162)+'heigh'+_0x410a96(0x397)+_0x410a96(0x520)+_0x410a96(0x16f)+_0x410a96(0x3f0)+_0x410a96(0x1b4)+'6;poi'+'nter-'+'event'+_0x410a96(0x269)+'e','DNYsG':'posit'+'ion:f'+_0x410a96(0x538)+'inset'+_0x410a96(0x319)+_0x410a96(0x16f)+':2147'+'48364'+'7;poi'+_0x410a96(0xeb)+'event'+'s:non'+'e;','WfIKd':_0x410a96(0x264),'gTFgG':function(_0x64ce50,_0x1eff91){return _0x64ce50!==_0x1eff91;},'wqYhy':'hnNLV','oshqs':_0x410a96(0x5aa)+_0x410a96(0x4a0)+_0x410a96(0x32d)+'v1','ORkGs':_0x410a96(0x5d8)+'t','XToYO':_0x410a96(0x1d0),'lXTqw':_0x410a96(0x2e0),'CzrFU':'Safet'+'y','Ihsgx':'posit'+_0x410a96(0x42d)+'ixed;'+'top:1'+_0x410a96(0x6a4)+_0x410a96(0x465)+'12px;'+_0x410a96(0x374)+_0x410a96(0x3ef)+_0x410a96(0x10b)+_0x410a96(0x5e3)+'ursor'+':poin'+_0x410a96(0x518)+_0x410a96(0x625)+'26px;'+_0x410a96(0x4bd)+_0x410a96(0x3ae)+'x;opa'+'city:'+_0x410a96(0x3d1)+'ransi'+_0x410a96(0x4df)+_0x410a96(0x648)+'ty\x200.'+'2s;po'+_0x410a96(0x28e)+'-even'+_0x410a96(0x2ac)+_0x410a96(0x4d1)+'lter:'+_0x410a96(0x4b5)+_0x410a96(0x38c)+_0x410a96(0x128)+_0x410a96(0x39d)+'rgba('+'255,1'+_0x410a96(0x45b)+_0x410a96(0x676)+'))','Mndaz':'#ff6b'+'9d','JAuHa':_0x410a96(0x68d)+'c6','XPxjq':function(_0x43145a,_0x17105f){return _0x43145a===_0x17105f;},'dWvRb':'rpivn','jlkri':'Sakur'+_0x410a96(0x646),'xVoYN':_0x410a96(0xee),'aPoTz':_0x410a96(0x4d8)+'bly-C'+'Sharp'+_0x410a96(0xfe),'Bggmf':_0x410a96(0x5e0),'HoZdk':'OHeal'+'th','XuUGD':_0x410a96(0x43f)+_0x410a96(0x412)+_0x410a96(0xe7)+_0x410a96(0x4ed),'JIHCo':_0x410a96(0x413)+'Die','hGqAF':function(_0x30caf,_0x5dfab9,_0x556193,_0x40193c,_0x10d125,_0x365497,_0x5e8a7a,_0x2d9fc5){return _0x30caf(_0x5dfab9,_0x556193,_0x40193c,_0x10d125,_0x365497,_0x5e8a7a,_0x2d9fc5);},'cvvAu':'capSh'+_0x410a96(0x2df),'IFnmI':function(_0x26bbd5,_0x444a38,_0x9abe50){return _0x26bbd5(_0x444a38,_0x9abe50);},'QOpGd':function(_0x43af60,_0x25a851){return _0x43af60(_0x25a851);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x410a96(0x101)](location[_0x410a96(0x595)+_0x410a96(0x21a)]||''))return;if(window[_0x410a96(0x39f)+_0x410a96(0x2e7)+'OUR__'])return;window['__SAK'+'URA_K'+_0x410a96(0x451)]=!![];var _0x5213a9=_0x16a3fd[_0x410a96(0x193)],_0x396281=_0x16a3fd[_0x410a96(0x1cb)],_0x38669c={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x410a96(0x506)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x36bdc1={..._0x38669c};try{if(_0x16a3fd[_0x410a96(0xfb)](_0x410a96(0x30d),'xsXbN'))Object['assig'+'n'](_0x36bdc1,JSON[_0x410a96(0x3c2)](localStorage['getIt'+'em'](_0x410a96(0x5aa)+'a.kou'+'r.v1')||'{}'));else try{_0x274aa8[_0x410a96(0x1d8)]['appen'+_0x410a96(0x3bb)+'d'](_0x419536);}catch(_0x530898){}}catch(_0x5df622){}function _0x2a9a2c(){var _0x3ecdf2=_0x410a96;try{_0x16a3fd[_0x3ecdf2(0x1ee)]===_0x16a3fd[_0x3ecdf2(0x1ee)]?localStorage['setIt'+'em'](_0x3ecdf2(0x5aa)+_0x3ecdf2(0x4a0)+_0x3ecdf2(0x1a1),JSON[_0x3ecdf2(0x247)+_0x3ecdf2(0x4d7)](_0x36bdc1)):(_0x180169[_0x3ecdf2(0x512)]=_0x1c643e,_0x16a3fd['FCLQd'](_0x798417));}catch(_0xce12e7){}}var _0x3a864a={'uwmk':!!window['Unity'+_0x410a96(0x355)+_0x410a96(0x4c2)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x36bdc1[_0x410a96(0x136)+_0x410a96(0x20a)],'lastError':''};try{if(_0x16a3fd[_0x410a96(0x477)](_0x410a96(0x201),_0x16a3fd[_0x410a96(0x300)])){if(!_0x4bb4dd||_0x3af505[_0x410a96(0x462)+_0x410a96(0x561)](_0x5d738e)||_0x16a3fd['udtbW'](_0x2d42cc['lengt'+'h'],0x905*0x4+-0xd03+-0x16d1))return;_0x2d0688['push'](_0x37ecb8);}else window[_0x410a96(0x267)+'entLi'+_0x410a96(0x3f2)+'r'](_0x410a96(0x4ae),_0xecdd7=>{var _0x1d330a=_0x410a96;try{if('rWskF'!==_0x16a3fd[_0x1d330a(0x6bc)])_0x3fb98c['stopP'+'ropag'+_0x1d330a(0x114)](),_0x4cb0fb();else{var _0x21c488=_0xecdd7&&(_0xecdd7['messa'+'ge']||_0xecdd7[_0x1d330a(0x4ae)]&&_0xecdd7['error'][_0x1d330a(0x694)+'ge'])||'unkno'+'wn';if(_0xecdd7&&_0xecdd7[_0x1d330a(0x38a)+_0x1d330a(0x21a)])_0x21c488+=_0x1d330a(0x2e6)+String(_0xecdd7[_0x1d330a(0x38a)+'ame'])['split']('/')[_0x1d330a(0x315)]()+':'+(_0xecdd7[_0x1d330a(0x475)+'o']||'?');_0x3a864a[_0x1d330a(0x478)+_0x1d330a(0x12a)]=String(_0x21c488)[_0x1d330a(0x417)](-0x13a3*-0x1+0x1bf0+-0x13*0x281,0x1*0x1da0+-0x635+-0x16cb);}}catch(_0x2be0aa){}});}catch(_0x27ac06){}var _0xd97012=null,_0x1cae99=null,_0x55a211={},_0x2982c4=[],_0x5058e9=[],_0x254305=new Map();function _0x2661fd(_0x19ac81,_0x7f8afe){var _0x1d7b1d=_0x410a96;if('TiRSg'===_0x1d7b1d(0x284)){if(!_0x7f8afe||_0x19ac81[_0x1d7b1d(0x462)+'des'](_0x7f8afe)||_0x19ac81[_0x1d7b1d(0x485)+'h']>0x2455+-0x23bb+-0x5a)return;_0x19ac81[_0x1d7b1d(0x177)](_0x7f8afe);}else{_0x1229bc[_0x1d7b1d(0x177)](_0x5516cb[_0x1d7b1d(0x1a3)]());if(_0xa89ca3[_0x1d7b1d(0x485)+'h']>-0x131b+-0x12c2+0x2605)_0x58525d['shift']();}}function _0x3c2894(_0x1586a4,_0x3d7329,_0x41c2e0,_0x478ef4){var _0x236b10=_0x410a96,_0x2461f1=-0x1be2+0x1*-0xbfb+0x27dd;try{_0x2461f1=_0x3d7329&&_0x3d7329[_0x236b10(0x33f)]?_0x3d7329['val']():0x1*-0xd1b+0x3*-0x3af+0x8*0x305;}catch(_0x4a33b7){}if(!_0x2461f1)return;_0x2661fd(_0x1586a4,_0x2461f1),_0x41c2e0[_0x478ef4]=_0x1586a4['lengt'+'h'];if(_0x16a3fd['uIlvN'](_0x478ef4,_0x16a3fd['gwFGz'])&&_0x1586a4[_0x236b10(0x485)+'h']){var _0x1ba318=_0x55a211['capMo'+'ve'];if(_0x1ba318)try{_0x1ba318[_0x236b10(0x204)+'ed']=![];}catch(_0x553676){}}}function _0x506ef8(_0x320691,_0x5a884f,_0x2be5b5){var _0x37052f=_0x410a96,_0xed5e22=_0x254305['get'](_0x320691);!_0xed5e22&&(_0xed5e22=new Map(),_0x254305['set'](_0x320691,_0xed5e22));if(!_0xed5e22[_0x37052f(0x161)](_0x5a884f))try{var _0xcced9d=new _0xd97012(_0x320691)[_0x37052f(0x2ad)+_0x37052f(0x601)](_0x5a884f,_0x2be5b5);_0xed5e22[_0x37052f(0x2a7)](_0x5a884f,_0xcced9d!==undefined?_0xcced9d[_0x37052f(0x33f)]():null);}catch(_0x125fa1){_0xed5e22[_0x37052f(0x2a7)](_0x5a884f,null);}return _0xed5e22['get'](_0x5a884f);}function _0x44d226(_0x3c6a03,_0x6be3ff,_0x54963e,_0x3f17d3){var _0x3fdd7f=_0x410a96;try{if(_0x16a3fd[_0x3fdd7f(0x147)]===_0x16a3fd[_0x3fdd7f(0x147)])new _0xd97012(_0x3c6a03)[_0x3fdd7f(0x13a)+_0x3fdd7f(0x54f)](_0x6be3ff,_0x54963e,_0x3f17d3);else{var _0x4df06f=_0x16a3fd['gsuop'][_0x3fdd7f(0x19f)]('|'),_0x356ee6=-0x3e6+-0x23ad+0x2793;while(!![]){switch(_0x4df06f[_0x356ee6++]){case'0':var _0x5a3aa5={'left':0x0,'top':0x0,'right':_0x48cb3f['w'],'bottom':_0x8e01f7['h'],'width':_0x18f228['w'],'height':_0x4a3d7f['h']};continue;case'1':_0x34206a[_0x3fdd7f(0x3a0)+'Rect'](0x841+0xb2+-0x1d*0x4f,-0x1e64+0x22b2+-0x1*0x44e,_0x3b1867['w'],_0x1da4de['h']);continue;case'2':_0x53177e(_0x5a3aa5);continue;case'3':_0xf62dd5();continue;case'4':_0x16a3fd[_0x3fdd7f(0x62d)](_0x55d5f3,_0x56f5a4);continue;case'5':_0x517d1e();continue;case'6':if(_0x1b92db['keyst'+'rokes'])_0x5f0d19(_0x5a3aa5);continue;case'7':_0x22d64e++;continue;case'8':var _0x3c6a6a=_0x5899f5['now']();continue;case'9':if(_0x42d82f[_0x3fdd7f(0x1fc)+_0x3fdd7f(0x63b)])_0x16a3fd['AnCNo'](_0x550433,_0x5a3aa5);continue;case'10':_0x3c6a6a-_0x5c38be>=0xc7*0x11+-0x1ab6+0xf73&&(_0x35016e=_0x41f964[_0x3fdd7f(0x30a)](_0x16a3fd[_0x3fdd7f(0x2c1)](_0x16a3fd['NPvXT'](_0x5d8691,0x16*-0x137+-0x71e+0x10*0x25c),_0x16a3fd['ftUAA'](_0x3c6a6a,_0x1f0895))),_0x5a8110=0x728*0x5+-0x4*0x56+-0x2270,_0x53c47a=_0x3c6a6a);continue;}break;}}}catch(_0x1d7aee){}}function _0x1a9a46(_0xa9e19e,_0x59e136){var _0x15929b=_0x410a96;try{var _0xa21ea0=new _0xd97012(_0xa9e19e)[_0x15929b(0x2ad)+_0x15929b(0x601)](_0x59e136,_0x15929b(0x5a8));return _0xa21ea0?_0xa21ea0['val']():0x1f4c+0x117+-0x2063;}catch(_0x19696d){return 0x1*0x667+0x1722+-0x1d89;}}function _0xb0761f(_0xae19cd,_0x4e5b05,_0x39e0d7,_0x1b9b17){var _0x2c7ce9=_0x410a96;if(_0x16a3fd['zAoMV']===_0x2c7ce9(0x68a))_0x3f5ca3['chSiz'+'e']=_0x22114e,_0x16a3fd[_0x2c7ce9(0x280)](_0x364cda);else{var _0x5db19c=_0x16a3fd[_0x2c7ce9(0x18a)](_0x506ef8,_0xae19cd,_0x4e5b05,_0x39e0d7);if(_0x16a3fd[_0x2c7ce9(0x1f4)](_0x5db19c,null))_0x16a3fd['TIQqe'](_0x44d226,_0xae19cd,_0x4e5b05,_0x39e0d7,_0x5db19c*_0x1b9b17);}}function _0x27b06d(_0x3b38f3,_0x10e8e3,_0x16ab06,_0x1a7c0a,_0xd4c12d,_0xa132c6,_0x434fda){var _0x4c9326=_0x410a96;try{if(_0x16a3fd['yKxva']!==_0x4c9326(0x296))_0x584f89[_0x4c9326(0x46b)+_0x4c9326(0x400)]=_0x16e0b5,_0x2a0a70();else{var _0x3f7236=(_0x4c9326(0x378)+_0x4c9326(0x568))[_0x4c9326(0x19f)]('|'),_0x222cdc=-0x1*0x3d1+-0x11de+0x15af;while(!![]){switch(_0x3f7236[_0x222cdc++]){case'0':_0x3a864a['hooks'+'Total']++;continue;case'1':var _0x531372=_0x1cae99[_0x4c9326(0x1e4)+'refix']({'typeName':_0x10e8e3,'methodName':_0x16ab06,'params':_0x1a7c0a,'returnType':_0xd4c12d},_0xa132c6);continue;case'2':return _0x531372;case'3':_0x55a211[_0x3b38f3]=_0x531372;continue;case'4':_0x531372[_0x4c9326(0x204)+'ed']=_0x16a3fd['RiqGI'](_0x434fda,![]);continue;}break;}}}catch(_0x1a439b){return console[_0x4c9326(0x2c7)](_0x4c9326(0xed)+_0x4c9326(0x38d)+_0x4c9326(0x52f)+'ook\x20r'+'eg\x20fa'+_0x4c9326(0x4f1),_0x3b38f3,_0x1a439b&&_0x1a439b[_0x4c9326(0x694)+'ge']),null;}}function _0x4a4bf7(_0x5b11b6,_0x452c84,_0x5c4e62,_0x213ca0,_0x4d7bf3,_0x309c0d,_0xab0fa7){var _0x3fb94f=_0x410a96;if('xpEsO'===_0x16a3fd[_0x3fb94f(0x37a)])_0x1a31ce[_0x3fb94f(0x3a0)]();else try{var _0x6b116e=_0x16a3fd[_0x3fb94f(0x674)][_0x3fb94f(0x19f)]('|'),_0x26050b=-0x174e+0x1*0x22af+-0xb61*0x1;while(!![]){switch(_0x6b116e[_0x26050b++]){case'0':_0x3a864a['hooks'+_0x3fb94f(0x133)]++;continue;case'1':var _0x2f77fb=_0x1cae99[_0x3fb94f(0x1e4)+_0x3fb94f(0x2d2)+'x']({'typeName':_0x452c84,'methodName':_0x5c4e62,'params':_0x213ca0,'returnType':_0x4d7bf3},_0x309c0d);continue;case'2':_0x55a211[_0x5b11b6]=_0x2f77fb;continue;case'3':return _0x2f77fb;case'4':_0x2f77fb[_0x3fb94f(0x204)+'ed']=_0xab0fa7!==![];continue;}break;}}catch(_0x1fa63a){return console[_0x3fb94f(0x2c7)](_0x16a3fd[_0x3fb94f(0x5e8)],_0x5b11b6,_0x1fa63a&&_0x1fa63a['messa'+'ge']),null;}}var _0x419a26=()=>![];try{if(_0x16a3fd[_0x410a96(0x3e5)](_0x410a96(0x1f5),_0x410a96(0x4d4)))_0x3faf53[_0x410a96(0x102)]===_0x16a3fd[_0x410a96(0x1e6)]&&(_0x1ad215[_0x410a96(0x677)+_0x410a96(0x662)+'ault'](),_0x2e543d());else{if(window[_0x410a96(0x338)+'WebMo'+_0x410a96(0x4c2)]&&!_0x36bdc1['safeM'+'ode']){_0xd97012=window['Unity'+_0x410a96(0x355)+'dkit']['Value'+'Wrapp'+'er'],_0x1cae99=window['Unity'+_0x410a96(0x355)+_0x410a96(0x4c2)]['Runti'+'me'][_0x410a96(0x13d)+'ePlug'+'in']({'name':_0x16a3fd[_0x410a96(0x165)],'version':_0x16a3fd[_0x410a96(0x4e7)],'referencedAssemblies':[_0x16a3fd[_0x410a96(0x3aa)]]});if(_0x36bdc1[_0x410a96(0x35d)+'od'])_0x27b06d(_0x16a3fd[_0x410a96(0xf9)],_0x16a3fd['HoZdk'],_0x16a3fd['XuUGD'],[_0x410a96(0x566),'i32'],undefined,_0x419a26,!!_0x36bdc1[_0x410a96(0x5e0)]);if(_0x36bdc1[_0x410a96(0x35d)+'odDie'])_0x27b06d(_0x16a3fd['XVBOg'],_0x16a3fd[_0x410a96(0x536)],_0x16a3fd[_0x410a96(0x3c4)],[_0x16a3fd[_0x410a96(0x130)],_0x410a96(0x566),_0x410a96(0x566),_0x410a96(0x566),_0x16a3fd[_0x410a96(0x130)]],undefined,_0x419a26,!!_0x36bdc1[_0x410a96(0x5e0)]);if(_0x36bdc1[_0x410a96(0x16a)+_0x410a96(0x4db)+'il'])_0x16a3fd['hGqAF'](_0x27b06d,_0x16a3fd[_0x410a96(0x3f9)],'Legio'+'nPlat'+'forms'+_0x410a96(0x2cf)+_0x410a96(0x17b)+_0x410a96(0x3ff)+_0x410a96(0x389)+'on',_0x410a96(0x18e),[_0x410a96(0x566)],undefined,_0x419a26,!!_0x36bdc1[_0x410a96(0x2c4)+_0x410a96(0x131)]);if(_0x36bdc1[_0x410a96(0xf6)+_0x410a96(0x564)+'e'])_0x4a4bf7(_0x16a3fd[_0x410a96(0x31a)],'OShoo'+_0x410a96(0x2f0),_0x410a96(0x37f)+'meRun'+_0x410a96(0x5ac),['i32',_0x410a96(0x566)],undefined,(_0x25dda8,_0x5c5b61)=>{_0x3c2894(_0x5058e9,_0x5c5b61,_0x3a864a,_0x16a3fd['zuBSt']);},!![]);if(_0x36bdc1[_0x410a96(0xf6)+_0x410a96(0x564)+'e'])_0x16a3fd['hGqAF'](_0x4a4bf7,'capMo'+'ve',_0x410a96(0x474)+'nPlat'+_0x410a96(0x24f)+_0x410a96(0x2cf)+_0x410a96(0x17b)+'Movem'+'ent',_0x410a96(0x2e1)+'unded',[_0x410a96(0x566)],_0x16a3fd[_0x410a96(0x130)],(_0x132388,_0x335f7b)=>{var _0x279506=_0x410a96;_0x3c2894(_0x2982c4,_0x335f7b,_0x3a864a,_0x279506(0x435)+'ents');},!![]);}}}catch(_0x1e49b0){console['warn'](_0x410a96(0xed)+_0x410a96(0x38d)+_0x410a96(0x329)+'WMK\x20i'+'nit\x20f'+_0x410a96(0x466)+':',_0x1e49b0&&_0x1e49b0[_0x410a96(0x694)+'ge']);}function _0x5e963e(_0x24ed89,_0x2bf881){var _0x478710=_0x55a211[_0x24ed89];if(_0x478710)try{_0x478710['enabl'+'ed']=!!_0x2bf881;}catch(_0xb39c76){}}_0x16a3fd['IFnmI'](setInterval,()=>{var _0x475cd9=_0x410a96,_0x22fec0={'jAwTL':function(_0x1e0e80,_0x5dbd9f,_0x209ca1,_0xfb188d){return _0x1e0e80(_0x5dbd9f,_0x209ca1,_0xfb188d);},'Kmqqd':function(_0x2baba4,_0x5d4d52,_0x4a6a23,_0x2ab9a5,_0x5ca040){return _0x2baba4(_0x5d4d52,_0x4a6a23,_0x2ab9a5,_0x5ca040);},'EjyKx':function(_0x471d55,_0x31ad3a){var _0x5ba737=_0xe814;return _0x16a3fd[_0x5ba737(0x39a)](_0x471d55,_0x31ad3a);}};if('GTrhP'!=='OBDdL'){if(!_0xd97012||!window[_0x475cd9(0x5fd)+_0x475cd9(0x298)+_0x475cd9(0x2ca)])return;var _0x5413ab=(_0x16a3fd[_0x475cd9(0x2f1)](Number,_0x36bdc1['speed'+_0x475cd9(0x225)])||-0x2*0x8db+0x74a+-0x1*-0xad0)/(0x9*0x179+0x10bf+-0x1d9c),_0xb94ddd=_0x16a3fd[_0x475cd9(0xec)](Number(_0x36bdc1[_0x475cd9(0x5ad)+'ct'])||0x1685*-0x1+0x1*0x30d+-0x52*-0x3e,-0x466+-0x28d*0xa+0x1e4c),_0x3e7b03=_0x16a3fd[_0x475cd9(0x2c1)](_0x16a3fd[_0x475cd9(0x11e)](Number,_0x36bdc1[_0x475cd9(0x64e)+_0x475cd9(0x25f)])||0x273*-0x1+-0x1*-0x10c4+0x2c9*-0x5,0x4*-0x7c9+-0x1*-0x129a+0x14b*0xa),_0x3e3748=Math[_0x475cd9(0x4cd)](0x1f73+-0x1*0x236+-0xe9e*0x2,Number(_0x36bdc1[_0x475cd9(0x6a1)+_0x475cd9(0x5eb)+'e'])||-0x1343+-0xb*0x26b+0x91*0x52),_0x5c9a96=_0x5413ab!==0x10d*0x4+-0x1*0x1850+0x13*0x10f||_0xb94ddd!==0x3*0xaf1+-0x13*0x62+0x147*-0x14||_0x3e7b03!==-0x1efe*-0x1+0x2*-0x163+-0x1c37||_0x36bdc1['bhop'],_0x392e2a=_0x36bdc1['noSpr'+_0x475cd9(0x400)]||_0x36bdc1['damag'+_0x475cd9(0x30c)]||_0x36bdc1['infAm'+'moExp']||_0x36bdc1['rapid'+'Exp'];if(_0x16a3fd[_0x475cd9(0x6be)](!_0x5c9a96,!_0x392e2a))return;try{for(var _0x103df1=0x2b*0x5f+0x2033+-0x3028;_0x103df1<_0x2982c4['lengt'+'h'];_0x103df1++){if(_0x475cd9(0x5d2)!==_0x16a3fd[_0x475cd9(0x3ca)]){var _0x1da529=_0x2982c4[_0x103df1];if(!_0x1da529)continue;if(_0x5413ab!==-0x313*0x7+-0x16b6+-0x2c3c*-0x1){if(_0x16a3fd['HrvUO'](_0x475cd9(0x121),_0x16a3fd['VMAyC'])){var _0x1e52d3=_0x592dac[_0x475cd9(0x1e4)+_0x475cd9(0x2d2)+'x']({'typeName':_0x3365a1,'methodName':_0x3aa5c9,'params':_0xd723d6,'returnType':_0x19c7ca},_0x59fb6f);return _0x1e52d3['enabl'+'ed']=_0x20e076!==![],_0x1c7327[_0x2bac31]=_0x1e52d3,_0x1b7344[_0x475cd9(0x15e)+'Total']++,_0x1e52d3;}else{var _0x4385f3=(_0x475cd9(0x46e)+'|4|1|'+'2')['split']('|'),_0x59aad5=0xff2+-0x1be6+0xbf4;while(!![]){switch(_0x4385f3[_0x59aad5++]){case'0':_0xb0761f(_0x1da529,0xad*-0xa+0xd47+-0x655,_0x16a3fd['CcUGl'],_0x5413ab);continue;case'1':_0x16a3fd['TIQqe'](_0xb0761f,_0x1da529,0x117*0x1b+0x10b0*0x1+-0x2e01,_0x16a3fd[_0x475cd9(0x41e)],_0x5413ab);continue;case'2':_0xb0761f(_0x1da529,0x372+-0x84d+0x4b*0x11,_0x16a3fd[_0x475cd9(0x41e)],_0x5413ab);continue;case'3':_0xb0761f(_0x1da529,0x1a4b+-0x10d6*-0x1+-0x2af5,_0x475cd9(0x1cc),_0x5413ab);continue;case'4':_0xb0761f(_0x1da529,-0x2*0xacf+-0x1de4+0x33b6,_0x16a3fd['CcUGl'],_0x5413ab);continue;case'5':_0x16a3fd[_0x475cd9(0x295)](_0xb0761f,_0x1da529,-0x21a3+-0x1*-0x2521+-0x7a*0x7,_0x16a3fd[_0x475cd9(0x41e)],_0x5413ab);continue;}break;}}}if(_0xb94ddd!==0x17*-0x10c+-0x1edf+0xdbd*0x4)_0xb0761f(_0x1da529,-0x101f+-0x1d5*0xb+0x2496,'f32',_0xb94ddd);_0x16a3fd['RiqGI'](_0x3e7b03,-0x1345*0x1+-0x3*0x763+-0x1*-0x296f)&&(_0x16a3fd['lVTTQ'](_0xb0761f,_0x1da529,0x1006+0xbd2+0x2*-0xdc8,_0x16a3fd['CcUGl'],_0x3e7b03),_0xb0761f(_0x1da529,-0x1b8d+-0x9*0x2f5+0x3676,_0x16a3fd[_0x475cd9(0x41e)],_0x3e7b03));if(_0x36bdc1[_0x475cd9(0x459)])_0x16a3fd[_0x475cd9(0x69b)](_0x44d226,_0x1da529,0x1*-0x2582+-0x69*0x29+0x36ef,_0x475cd9(0x1cc),-(-0xf*-0x1b+0x182*-0xb+0x12e8));}else{var _0x9404fb=_0x5a0668[_0x475cd9(0x2f9)+_0x475cd9(0x5d4)+_0x475cd9(0x286)+'nt'],_0xdf5e51=_0x9404fb&&_0x9404fb[_0x475cd9(0x44e)+'me']!==_0x16a3fd['dthxp']?_0x9404fb:_0x26a57d[_0x475cd9(0x1d8)]||_0x12518a['docum'+_0x475cd9(0x318)+_0x475cd9(0x592)];if(_0x16a3fd[_0x475cd9(0xfb)](_0x594e8e['paren'+'tNode'],_0xdf5e51))_0xdf5e51['appen'+_0x475cd9(0x3bb)+'d'](_0x51111e);}}}catch(_0x33264b){}try{for(var _0x554ba9=0x5*-0x14d+0x11e5+-0xb64*0x1;_0x16a3fd['yMhPY'](_0x554ba9,_0x5058e9['lengt'+'h']);_0x554ba9++){var _0x9914=_0x16a3fd['sjiCe'](_0x1a9a46,_0x5058e9[_0x554ba9],0x1071+0x2576+0x35af*-0x1);if(!_0x9914)continue;if(_0x36bdc1[_0x475cd9(0x6a1)+_0x475cd9(0x30c)]){if(_0x16a3fd['KWrXv']==='TXATi'){if(_0x10b10c[_0x475cd9(0x1d8)]&&(_0x4217f5['ready'+_0x475cd9(0x5cd)]==='inter'+_0x475cd9(0x21c)+'e'||_0x1173e2[_0x475cd9(0x350)+'State']===_0x16a3fd[_0x475cd9(0x542)]))_0x180162();else _0x5682bf[_0x475cd9(0x267)+_0x475cd9(0x2af)+_0x475cd9(0x3f2)+'r']('DOMCo'+_0x475cd9(0x253)+'Loade'+'d',_0x22708a,{'once':!![]});}else _0x44d226(_0x9914,-0x15e*0x4+0x1*0x6d9+-0x1*0x115,_0x475cd9(0x566),_0x3e3748),_0x44d226(_0x9914,0x1413+-0x1*0x4f1+-0xece,_0x16a3fd[_0x475cd9(0x130)],_0x3e3748);}_0x36bdc1[_0x475cd9(0x46b)+_0x475cd9(0x400)]&&(_0x44d226(_0x9914,0xa26+-0xc3b+-0x1*-0x29d,_0x475cd9(0x1cc),-0xe38+-0x7*-0x239+-0x1*0x157),_0x44d226(_0x9914,-0x1*0x1477+-0x23eb+-0x2*-0x1c65,'f32',0xa4b+0x286*0x1+0x290*-0x5));if(_0x36bdc1[_0x475cd9(0x1aa)+_0x475cd9(0x2b2)])_0x16a3fd[_0x475cd9(0x657)](_0x44d226,_0x9914,0x1bbd+0x7b*0x11+-0x238c,_0x475cd9(0x566),-0x3ed+0x17e4+-0x1010);_0x36bdc1[_0x475cd9(0x4b1)+_0x475cd9(0x5df)]&&(_0x16a3fd['Mzqcf'](_0x16a3fd[_0x475cd9(0x3e3)],_0x475cd9(0x59a))?(_0x16a3fd['AWRYK'](_0xb0761f,_0x9914,-0x5ed+-0x12b3+0x192c,'f32',-0x29*0x97+-0x2*0x1f7+0x1c1d+0.1),_0x16a3fd[_0x475cd9(0x26b)](_0x44d226,_0x9914,-0x1d0+0x53*-0x33+0x12b9*0x1,_0x16a3fd[_0x475cd9(0x41e)],-0x3fb*-0x7+0x19*-0x33+0x1*-0x16e2+0.1)):_0x395bc5[_0x475cd9(0x5c3)+'em']('sakur'+_0x475cd9(0x4a0)+_0x475cd9(0x32d)+'v1',_0x2e21a5['strin'+'gify'](_0x495935)));}}catch(_0xd3e050){}}else{var _0x23e463=_0x22fec0[_0x475cd9(0x37e)](_0x442590,_0x6d7fd4,_0x5612d7,_0x414f97);if(_0x23e463!=null)_0x22fec0[_0x475cd9(0x62a)](_0x3fe073,_0x20bb1f,_0x1cdc95,_0x32076a,_0x22fec0['EjyKx'](_0x23e463,_0x261141));}},0x543*-0x1+-0x15dd+0x1be8),setInterval(()=>{var _0x4ae324=_0x410a96;_0x3a864a['gameL'+_0x4ae324(0x179)]=!!window['unity'+'Insta'+'nce'];try{var _0x419110=0xc3*0x2f+0x22a9+-0x137*0x3a;for(var _0x29ff0b in _0x55a211){if(_0x55a211[_0x29ff0b]&&_0x55a211[_0x29ff0b]['appli'+'ed'])_0x419110++;}_0x3a864a[_0x4ae324(0x15e)+'Ok']=_0x419110;}catch(_0x2c6a0c){}},-0x1b*0x97+-0x1*-0x1945+0x3a*-0x18);var _0x370d70=new Set(),_0x8460b={0x1:[],0x3:[]},_0x160c51=![];function _0x282519(_0x35977a){var _0x467322=_0x410a96;_0x16a3fd[_0x467322(0x3d6)]('SZTvK',_0x467322(0x5ce))?_0x370d70['add'](_0x35977a['code']):(_0x5bc7e5['ksCps']=_0x4c7ee7,_0x46f0fb());}function _0x219df0(_0x16daff){var _0x1dfac8=_0x410a96;_0x370d70[_0x1dfac8(0x5c0)+'e'](_0x16daff[_0x1dfac8(0x102)]);}function _0x3ab117(_0x833e69){var _0x120258=_0x410a96,_0x5a1a96={'ewoRp':_0x120258(0x5aa)+_0x120258(0x4a0)+'r.ui.'+'v1'};if(_0x833e69['__sak'+_0x120258(0x659)])return;_0x370d70[_0x120258(0x3e6)](_0x120258(0x33d)+(_0x833e69[_0x120258(0x34d)+'n']+(0xb68+-0xc+-0xb5b)));var _0x4aa814=_0x8460b[_0x16a3fd[_0x120258(0x34f)](_0x833e69['butto'+'n'],0x1689+0x3c0+-0x1a48)];if(_0x4aa814){if(_0x16a3fd['RiqGI']('bxinN',_0x120258(0x67c))){_0x4aa814['push'](performance['now']());if(_0x4aa814['lengt'+'h']>-0x4a9+0x6*0x3e6+-0x1293)_0x4aa814[_0x120258(0x159)]();}else try{_0x2f7222['setIt'+'em'](_0x5a1a96[_0x120258(0x27c)],_0x14a789[_0x120258(0x247)+_0x120258(0x4d7)](_0x8523c2));}catch(_0x392ae7){}}}function _0x35a3ad(_0x2d9d55){var _0x16f057=_0x410a96;if(!_0x2d9d55[_0x16f057(0x52e)+_0x16f057(0x659)])_0x370d70['delet'+'e'](_0x16a3fd[_0x16f057(0x388)]+_0x16a3fd['Hpofg'](_0x2d9d55[_0x16f057(0x34d)+'n'],-0x19*0xc7+-0xd4+0x1444));}function _0x47194c(){_0x370d70['clear']();}function _0x507108(){var _0xe951bd=_0x410a96;if(_0x16a3fd[_0xe951bd(0x372)](_0x16a3fd['GGMKt'],_0xe951bd(0x277))){if(_0x160c51)return;_0x160c51=!![],window[_0xe951bd(0x267)+_0xe951bd(0x2af)+_0xe951bd(0x3f2)+'r'](_0x16a3fd['VTYEd'],_0x282519,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x16a3fd[_0xe951bd(0x23d)],_0x219df0,!![]),window[_0xe951bd(0x267)+'entLi'+_0xe951bd(0x3f2)+'r'](_0xe951bd(0x33d)+_0xe951bd(0x49d),_0x3ab117,!![]),window[_0xe951bd(0x267)+'entLi'+_0xe951bd(0x3f2)+'r'](_0xe951bd(0x33d)+'up',_0x35a3ad,!![]),window[_0xe951bd(0x267)+_0xe951bd(0x2af)+_0xe951bd(0x3f2)+'r'](_0x16a3fd[_0xe951bd(0x259)],_0x47194c);}else _0x3556ec['set'](_0x291ecf,null);}function _0x1485ac(_0x57ddab){var _0xdd2dd9=_0x410a96;if(_0xdd2dd9(0x1f9)!==_0x16a3fd[_0xdd2dd9(0x3e8)])_0x411e05[_0xdd2dd9(0x2c7)]('[saku'+_0xdd2dd9(0x38d)+_0xdd2dd9(0x329)+'WMK\x20i'+_0xdd2dd9(0x4a6)+_0xdd2dd9(0x466)+':',_0x1fb416&&_0xf25915['messa'+'ge']);else{var _0x4f8780=_0x8460b[_0x57ddab]||[],_0x21777d=performance[_0xdd2dd9(0x1a3)]();while(_0x4f8780['lengt'+'h']&&_0x16a3fd['udtbW'](_0x21777d-_0x4f8780[0x1*0x222+-0x16*-0x66+-0xae6],-0x12d6*-0x1+0x1*-0x218b+0x5*0x3b9))_0x4f8780['shift']();return _0x4f8780['lengt'+'h'];}}function _0x23fd10(_0x3193e9){var _0x5ba17b=_0x410a96;if(document['body']&&(_0x16a3fd['kPVId'](document[_0x5ba17b(0x350)+'State'],_0x16a3fd[_0x5ba17b(0x21e)])||_0x16a3fd['BDrlZ'](document[_0x5ba17b(0x350)+'State'],_0x5ba17b(0x33e)+_0x5ba17b(0x40a))))_0x16a3fd[_0x5ba17b(0x280)](_0x3193e9);else document['addEv'+_0x5ba17b(0x2af)+_0x5ba17b(0x3f2)+'r'](_0x16a3fd[_0x5ba17b(0x43c)],_0x3193e9,{'once':!![]});}_0x16a3fd[_0x410a96(0x31c)](_0x23fd10,()=>{var _0xab5aee=_0x410a96,_0x3da971={'UxaxC':function(_0x51c4e2,_0x21ebd){return _0x51c4e2!==_0x21ebd;},'MfNgT':function(_0x39b1fb){var _0x14101c=_0xe814;return _0x16a3fd[_0x14101c(0x3b7)](_0x39b1fb);},'oufmv':_0x16a3fd[_0xab5aee(0x5f4)],'MJBiz':function(_0x195d8f,_0x5720b4){return _0x195d8f===_0x5720b4;},'DlvEM':function(_0x3412a2,_0xa687f2){var _0x587576=_0xab5aee;return _0x16a3fd[_0x587576(0x368)](_0x3412a2,_0xa687f2);},'oEKyx':function(_0x125c35,_0x121967){return _0x125c35*_0x121967;},'epAUt':_0x16a3fd['nITgy'],'RRKMy':_0xab5aee(0x476)+'e','AyAdQ':function(_0x5ccaee,_0x12f24){return _0x5ccaee+_0x12f24;},'vkRlK':_0x16a3fd['leCYr'],'EUGVH':function(_0xcdcbd0,_0x4c382b){return _0xcdcbd0/_0x4c382b;},'eYRzg':function(_0x91a79b,_0x4f7dbb){return _0x91a79b-_0x4f7dbb;},'kxnIE':function(_0x2ce5c7,_0x3dc120){return _0x2ce5c7+_0x3dc120;},'sKWqm':function(_0x2d55da,_0x297d77){return _0x2d55da/_0x297d77;},'CbWGO':_0x16a3fd['ZqQcJ'],'cBUra':function(_0x525f30,_0x3b2740){return _0x525f30+_0x3b2740;},'hkFHQ':function(_0x285d7c,_0x21c5d1){return _0x285d7c+_0x21c5d1;},'HgveE':function(_0x24f1a2,_0x3c1719){var _0x4e1503=_0xab5aee;return _0x16a3fd[_0x4e1503(0x5a6)](_0x24f1a2,_0x3c1719);},'lCOGv':function(_0x3cf8ea,_0x3d16dd){return _0x3cf8ea*_0x3d16dd;},'XcShC':function(_0x33f434,_0x2de918){return _0x33f434-_0x2de918;},'IEyAf':function(_0x27620e,_0x223fad){var _0x310f54=_0xab5aee;return _0x16a3fd[_0x310f54(0x353)](_0x27620e,_0x223fad);},'JgAfZ':function(_0x3fce67,_0x47a638,_0x2efc09,_0x54cf5b,_0x2bea24,_0x7b1056,_0x568d80){return _0x3fce67(_0x47a638,_0x2efc09,_0x54cf5b,_0x2bea24,_0x7b1056,_0x568d80);},'ZRNYZ':_0xab5aee(0x4a7),'cedlt':function(_0x1f69ab,_0x5a3395,_0x53e08b,_0x242ea2,_0x43af51,_0x3db14e,_0x20f3e0){return _0x1f69ab(_0x5a3395,_0x53e08b,_0x242ea2,_0x43af51,_0x3db14e,_0x20f3e0);},'YhZNU':function(_0x1e5b56,_0x542c37){var _0x25426a=_0xab5aee;return _0x16a3fd[_0x25426a(0x69f)](_0x1e5b56,_0x542c37);},'OAjzI':function(_0xdd3ae7,_0x138f89,_0x3fd233,_0x1b8dd8,_0x4c36de,_0x1b1567,_0xec91b4){return _0xdd3ae7(_0x138f89,_0x3fd233,_0x1b8dd8,_0x4c36de,_0x1b1567,_0xec91b4);},'ukcGv':_0x16a3fd['RAoGC'],'vtCBp':function(_0x497e15,_0x1cb9e5){var _0x44c6e5=_0xab5aee;return _0x16a3fd[_0x44c6e5(0x683)](_0x497e15,_0x1cb9e5);},'hCrfu':function(_0x4fcaa2,_0x5be6e0){return _0x4fcaa2+_0x5be6e0;},'RBdxY':function(_0x968190,_0x54bbfe){return _0x968190+_0x54bbfe;},'yzVQy':_0xab5aee(0x53c),'uBskY':function(_0x1da3c6,_0x14c666){return _0x16a3fd['akoWY'](_0x1da3c6,_0x14c666);},'fhDnR':_0x16a3fd['IdOdT'],'UqYDN':_0xab5aee(0x180),'OOcdH':function(_0xbcfef9,_0x4c611c,_0x91c9fa){return _0xbcfef9(_0x4c611c,_0x91c9fa);},'WjbGd':_0x16a3fd['jSlXO'],'IkqyI':function(_0xb5fee5){return _0xb5fee5();},'rgBwE':_0xab5aee(0x526),'LxFAd':_0xab5aee(0x251),'twFRg':_0xab5aee(0x303),'ntsxA':_0xab5aee(0x185),'dOehD':_0x16a3fd['WhmUI'],'QEgde':function(_0x46a020,_0x3122c6){var _0x113935=_0xab5aee;return _0x16a3fd[_0x113935(0x495)](_0x46a020,_0x3122c6);},'OpEoB':_0x16a3fd['IxQLy'],'RIheD':function(_0x10d209,_0x47a313){return _0x10d209-_0x47a313;},'tvKmW':_0xab5aee(0x66a)+'nge','sxCwg':_0xab5aee(0x158),'cojFW':_0x16a3fd[_0xab5aee(0x67d)],'kXygC':_0xab5aee(0x2c5)+'l','maANl':_0xab5aee(0x24d)+_0xab5aee(0x120)+'2','BgSfM':_0xab5aee(0x506)+'9d','IwECj':'sk-co'+'lor','EjchK':function(_0x1d983b,_0x4f702e){return _0x1d983b>_0x4f702e;},'XoSet':_0xab5aee(0x1c2),'dORku':function(_0x13674c,_0x488c9c){return _0x13674c===_0x488c9c;},'LasVW':'div','GpfJH':function(_0x43abe6,_0x1e347d){return _0x43abe6+_0x1e347d;},'ucVXd':_0x16a3fd[_0xab5aee(0x4a4)],'ypZmw':function(_0x3e2855){return _0x3e2855();},'aKEGy':_0x16a3fd[_0xab5aee(0x486)],'MfeJe':function(_0x54d9b2,_0x482be8){return _0x54d9b2===_0x482be8;},'XKPPu':_0x16a3fd['bFnLW'],'ZIVvW':function(_0x3183a1){var _0x92ac55=_0xab5aee;return _0x16a3fd[_0x92ac55(0x196)](_0x3183a1);},'qgtzS':function(_0x322dc7,_0x5637f2){return _0x322dc7===_0x5637f2;},'FvriO':_0xab5aee(0x4b3),'rCDBc':function(_0x103e9b){return _0x103e9b();},'GXUOM':_0x16a3fd['KewFX'],'vGwkN':_0x16a3fd['BICnz'],'zdmnH':function(_0x424c9c,_0x5e7042,_0x38d066,_0x1bdaca,_0x39d841){var _0xcd7a99=_0xab5aee;return _0x16a3fd[_0xcd7a99(0x112)](_0x424c9c,_0x5e7042,_0x38d066,_0x1bdaca,_0x39d841);},'KOlVU':_0x16a3fd['lTMiu'],'Lbydq':function(_0x1ceab5,_0x90f4a5){var _0x4128d6=_0xab5aee;return _0x16a3fd[_0x4128d6(0x11e)](_0x1ceab5,_0x90f4a5);},'VMIQj':function(_0x4c9b73,_0x4d6d14){return _0x4c9b73!==_0x4d6d14;},'UGFEk':function(_0x222dbf){var _0x45a841=_0xab5aee;return _0x16a3fd[_0x45a841(0x3b7)](_0x222dbf);},'BREzQ':_0x16a3fd['BRAUp'],'Zkmmh':_0x16a3fd[_0xab5aee(0x230)],'TATPl':function(_0x505081,_0x1dc5c6,_0x1378f5,_0xb46c7b,_0x450050,_0x40cf5b){var _0x29cb44=_0xab5aee;return _0x16a3fd[_0x29cb44(0x35e)](_0x505081,_0x1dc5c6,_0x1378f5,_0xb46c7b,_0x450050,_0x40cf5b);},'GQnpd':_0xab5aee(0x123)+_0xab5aee(0x18c)+_0xab5aee(0x22a)+']','rrpth':'Scale'+_0xab5aee(0x375)+_0xab5aee(0x25b)+_0xab5aee(0x5e2)+'n.fir'+'eRate'+'\x20to\x201'+'0%.\x20S'+_0xab5aee(0x37b)+_0xab5aee(0x49c)+_0xab5aee(0x618)+_0xab5aee(0x309)+'\x20shot'+'s.','ejtLe':_0x16a3fd['IweRu'],'rujhH':function(_0x2a8d26,_0x3b73a3,_0x186e95,_0x1ea95e){var _0x373130=_0xab5aee;return _0x16a3fd[_0x373130(0x4e2)](_0x2a8d26,_0x3b73a3,_0x186e95,_0x1ea95e);},'QKyjJ':'Infin'+_0xab5aee(0x3b2)+_0xab5aee(0x57c)+_0xab5aee(0x5a3),'SKQNv':_0xab5aee(0x3a7)+_0xab5aee(0x550)+_0xab5aee(0x49e)+_0xab5aee(0x4bb)+'\x20cach'+_0xab5aee(0x4b8)+_0xab5aee(0x370)+'\x20999\x20'+_0xab5aee(0x346)+'\x20200m'+'s.','yVtuO':_0xab5aee(0x557)+'loads'+'\x20stil'+_0xab5aee(0x4c0)+_0xab5aee(0x431)+_0xab5aee(0x61a)+_0xab5aee(0x332)+_0xab5aee(0x5c8)+_0xab5aee(0x32f)+_0xab5aee(0x4f2)+'where'+'.','Vcqti':function(_0x5becbe,_0x3dd578){return _0x5becbe===_0x3dd578;},'AXFaO':'move','qaWTH':'Speed','NIHcd':_0x16a3fd['GBdfE'],'gWOFt':function(_0x26dfd2,_0x1031f2){return _0x26dfd2!==_0x1031f2;},'TukNr':_0xab5aee(0x254)+_0xab5aee(0x523)+'oaty','HtFYF':'Bunny'+_0xab5aee(0x1d3),'FrbFL':_0x16a3fd[_0xab5aee(0x2da)],'HYkul':function(_0x5a3fa1,_0x1cf514){return _0x5a3fa1===_0x1cf514;},'WrtuT':function(_0x59e08c,_0x245df5){return _0x59e08c!==_0x245df5;},'eXQoH':_0xab5aee(0x64c),'rHhlL':_0xab5aee(0x371),'gZHJr':_0xab5aee(0x43d)+'m\x20lef'+'t','OAREl':'Left\x20'+_0xab5aee(0x476)+'e','QDInN':'Size','uxBqH':function(_0x3fa2c8,_0x24edf7,_0x26008a,_0x57a1d9){return _0x3fa2c8(_0x24edf7,_0x26008a,_0x57a1d9);},'mmXvt':function(_0x4c0a30,_0x373f2a,_0x41b926,_0x475066,_0x1a9aef,_0x3254e6){return _0x4c0a30(_0x373f2a,_0x41b926,_0x475066,_0x1a9aef,_0x3254e6);},'PzWjl':_0xab5aee(0x519)+_0xab5aee(0x63b),'hFhVB':_0xab5aee(0x39e)+'m\x20cen'+_0xab5aee(0x4ba)+'rossh'+'air.','UjwaF':function(_0x4c5cfb,_0x1e6d06,_0x51cae7,_0x44cbfd){return _0x4c5cfb(_0x1e6d06,_0x51cae7,_0x44cbfd);},'LKbvr':_0x16a3fd['PjFTC'],'TbSwI':_0xab5aee(0x5f3)+_0xab5aee(0x5e4),'oFCPr':function(_0x4fb81f,_0x27b6d3,_0x4f22e7){return _0x4fb81f(_0x27b6d3,_0x4f22e7);},'XRVPK':_0x16a3fd[_0xab5aee(0x243)],'afbcQ':_0xab5aee(0x36d)+'\x20effe'+_0xab5aee(0x5e5)+_0xab5aee(0x48b)+_0xab5aee(0x285)+'en\x20to'+'ggled'+'.','wmGPY':_0x16a3fd['dKCPE'],'qJKft':_0xab5aee(0x44d)+'\x20UWMK'+_0xab5aee(0x68c)+_0xab5aee(0x2a9)+'—\x20no\x20'+'WASM\x20'+_0xab5aee(0x15e)+_0xab5aee(0x5da)+_0xab5aee(0x51d)+_0xab5aee(0x50c)+_0xab5aee(0x40e)+_0xab5aee(0x311)+_0xab5aee(0x5ec)+_0xab5aee(0x2bc),'jDWRi':_0x16a3fd[_0xab5aee(0x263)],'iEJKU':_0xab5aee(0x212)+_0xab5aee(0x698)+_0xab5aee(0x3da)+_0xab5aee(0x3c1)+_0xab5aee(0x53e),'RHdfq':'noRec'+_0xab5aee(0x258)+_0xab5aee(0x3ff)+'lMoti'+_0xab5aee(0x4f9)+_0xab5aee(0x569),'vDYFI':_0x16a3fd['kOqiH'],'wZYUc':'Dange'+'r','FIVrm':'These'+_0xab5aee(0x546)+'e\x20ser'+_0xab5aee(0x2b0)+'isibl'+'e\x20tra'+'ces.','IttWs':function(_0x4ee4a6,_0x57b6ca){return _0x4ee4a6(_0x57b6ca);},'xFQUX':_0xab5aee(0x20c)+_0xab5aee(0x638)+'5','uObza':function(_0x28cae6,_0x2c1268){var _0x423d0a=_0xab5aee;return _0x16a3fd[_0x423d0a(0x399)](_0x28cae6,_0x2c1268);}};_0x36bdc1[_0xab5aee(0x160)+'ck']&&setInterval(()=>{var _0x3b2add=_0xab5aee,_0x564940={'OUdHX':_0x16a3fd['SLbRk'],'ILwSm':function(_0x4e6d45,_0x4527a3){return _0x4e6d45+_0x4527a3;},'sdlmo':function(_0x1af10b,_0x1b8505){var _0x1b15de=_0xe814;return _0x16a3fd[_0x1b15de(0x312)](_0x1af10b,_0x1b8505);},'LvMxq':function(_0x418c7e,_0x1a733b){var _0x1448b0=_0xe814;return _0x16a3fd[_0x1448b0(0x2f1)](_0x418c7e,_0x1a733b);}};try{for(var _0x508733 of[_0x16a3fd['ttrIz'],_0x16a3fd[_0x3b2add(0x398)],_0x3b2add(0x3b1)+'io_30'+_0x3b2add(0x146)+'-pare'+'nt',_0x16a3fd[_0x3b2add(0x668)]]){if('NBRet'===_0x3b2add(0x2f3))_0xc56207(_0x5c3152,0xe4+-0xfc9+-0xf31*-0x1,_0x3b2add(0x566),_0x242e62),_0x23807d(_0x59de69,-0xa08+0xb75+-0x1*0x119,_0x3b2add(0x566),_0x56309e);else{var _0x3ab3c9=document[_0x3b2add(0x15d)+_0x3b2add(0x592)+'ById'](_0x508733);if(_0x3ab3c9&&_0x16a3fd['LYBru'](_0x508733,_0x16a3fd['ImMxS'])){if(_0x3b2add(0x479)!==_0x16a3fd[_0x3b2add(0x544)]){var _0xb5a7ed=_0x3ab3c9[_0x3b2add(0x2e3)+_0x3b2add(0x1ab)];for(var _0x51f180=-0x113b*-0x1+-0xe4d+-0x7d*0x6;_0x16a3fd['yMhPY'](_0x51f180,_0xb5a7ed[_0x3b2add(0x485)+'h']);_0x51f180++){if(_0x16a3fd[_0x3b2add(0x399)](_0x16a3fd[_0x3b2add(0x276)],'VfKbH')){if(_0xb5a7ed[_0x51f180]['id']&&_0xb5a7ed[_0x51f180]['id'][_0x3b2add(0x16f)+'Of'](_0x3b2add(0x3b1)+_0x3b2add(0x367))===0x9f8+-0x1*-0x5d2+-0x1*0xfca)_0xb5a7ed[_0x51f180][_0x3b2add(0x603)][_0x3b2add(0x15c)+'ay']=_0x3b2add(0x526);}else _0x3774d9[_0x3b2add(0x35d)+_0x3b2add(0x408)]=_0x24115d,_0x3f9acc();}}else try{var _0x36e6a6=_0x52f4e3&&(_0x4604e8[_0x3b2add(0x694)+'ge']||_0x33e0f4['error']&&_0x5978a1[_0x3b2add(0x4ae)]['messa'+'ge'])||_0x564940[_0x3b2add(0x260)];if(_0x34d22a&&_0x59a68b[_0x3b2add(0x38a)+'ame'])_0x36e6a6+=_0x564940['ILwSm'](_0x564940[_0x3b2add(0x231)](_0x3b2add(0x2e6),_0x564940['LvMxq'](_0x1d0bb0,_0x345f25[_0x3b2add(0x38a)+'ame'])[_0x3b2add(0x19f)]('/')[_0x3b2add(0x315)]())+':',_0x537c67['linen'+'o']||'?');_0x48eba2['lastE'+'rror']=_0x33a1cc(_0x36e6a6)['slice'](-0x76*-0x52+0x1d*0xa1+-0x2f3*0x13,0x25*-0x3e+0x19d4+-0x103e);}catch(_0x176584){}}else{if(_0x3ab3c9)_0x3ab3c9[_0x3b2add(0x603)][_0x3b2add(0x15c)+'ay']=_0x16a3fd[_0x3b2add(0x1ff)];}}}}catch(_0x55a534){}},0x19*0x18e+-0x6*0x62e+0x606);var _0x342fc5=document[_0xab5aee(0x13d)+'eElem'+_0xab5aee(0x320)](_0x16a3fd['XFhSS']);_0x342fc5[_0xab5aee(0x603)][_0xab5aee(0x609)+'xt']=_0x16a3fd[_0xab5aee(0x5fa)];var _0x5b7ade=_0x342fc5[_0xab5aee(0x516)+_0xab5aee(0x48f)]('2d');function _0x1f787c(){var _0x693e25=_0xab5aee;try{var _0xff0a91=document['fulls'+_0x693e25(0x5d4)+_0x693e25(0x286)+'nt'],_0x311e9d=_0xff0a91&&_0x3da971[_0x693e25(0x345)](_0xff0a91[_0x693e25(0x44e)+'me'],'CANVA'+'S')?_0xff0a91:document['body']||document[_0x693e25(0x2c3)+'entEl'+_0x693e25(0x592)];if(_0x342fc5['paren'+'tNode']!==_0x311e9d)_0x311e9d[_0x693e25(0x2cb)+_0x693e25(0x3bb)+'d'](_0x342fc5);}catch(_0x1b0502){try{document['body'][_0x693e25(0x2cb)+_0x693e25(0x3bb)+'d'](_0x342fc5);}catch(_0x2c771f){}}}var _0x476cec={'w':0x0,'h':0x0,'dpr':0x0};function _0x14abaa(){var _0x1f6c0c=_0xab5aee;if('IDqXR'===_0x3da971['oufmv']){var _0x58592e=window['devic'+_0x1f6c0c(0x403)+_0x1f6c0c(0x1b1)+'o']||-0x8db+-0x1d5a+0x2636,_0x4e35fd=window['inner'+_0x1f6c0c(0x3a5)],_0x527b54=window[_0x1f6c0c(0x407)+'Heigh'+'t'];if(_0x3da971[_0x1f6c0c(0x189)](_0x4e35fd,_0x476cec['w'])&&_0x527b54===_0x476cec['h']&&_0x3da971[_0x1f6c0c(0x189)](_0x58592e,_0x476cec[_0x1f6c0c(0x242)]))return;_0x476cec['w']=_0x4e35fd,_0x476cec['h']=_0x527b54,_0x476cec['dpr']=_0x58592e,_0x342fc5[_0x1f6c0c(0x645)]=Math[_0x1f6c0c(0x30a)](_0x4e35fd*_0x58592e),_0x342fc5[_0x1f6c0c(0x4bd)+'t']=Math['round'](_0x3da971['DlvEM'](_0x527b54,_0x58592e)),_0x5b7ade['setTr'+_0x1f6c0c(0x2bb)+'rm'](_0x58592e,-0x16d*0x11+0x1*0x18f5+0x1*-0xb8,0xcfc+0x1*0x201+-0xefd,_0x58592e,-0x925+-0x50f+0x38d*0x4,0x23*0x104+-0x34b*-0x4+-0x30b8);}else _0x35408e['preve'+'ntDef'+_0x1f6c0c(0x206)](),_0x3da971['MfNgT'](_0x5e75a7);}var _0x488e07=-0x1*-0x2278+-0x3*-0xb97+-0x453d,_0x10dd54=performance['now'](),_0x537120=0x1b69+0x3e*-0x6d+-0x103;function _0x276ac9(_0x2ae0f6){var _0x4ec007=_0xab5aee,_0x3bff62=_0x3da971['HgveE'](Number,_0x36bdc1[_0x4ec007(0x5ef)+'le'])||0xf05+0x1*-0x1247+-0x5*-0xa7,_0x542df9=_0x3da971['lCOGv'](-0x1a7f+-0xcdc*-0x2+0xe9*0x1,_0x3bff62),_0x7c7d58=(0x62d+-0x5b7+-0x6*0x13)*_0x3bff62,_0x1f7ecc=_0x542df9*(0xbfa+0x5*-0x725+-0x1*-0x17c2)+_0x3da971[_0x4ec007(0x2bd)](_0x7c7d58,0x1c5*0x3+0xf0+0x1*-0x63d),_0x20918b=_0x3da971[_0x4ec007(0x2d4)](_0x542df9*(-0x42c+-0x180d+-0x2*-0xe1e),_0x3da971['oEKyx'](_0x7c7d58,0x2cb*0x5+0x19dc+0x27d1*-0x1)),_0x478909=_0x36bdc1['ksPos'],_0x3b3533=_0x3da971[_0x4ec007(0x189)](_0x478909,'br')?_0x3da971[_0x4ec007(0x334)](_0x2ae0f6['right'],0x13*-0xe9+-0x2d*-0x6b+0x4*-0x5d)-_0x1f7ecc:_0x2ae0f6[_0x4ec007(0x65a)]+(0x75*0x46+-0xee7*-0x1+0x1*-0x2ed5),_0x272d18=_0x3da971['MJBiz'](_0x478909,'ml')?_0x2ae0f6[_0x4ec007(0x180)]+_0x3da971[_0x4ec007(0x669)](_0x2ae0f6[_0x4ec007(0x4bd)+'t'],-0x83f*0x1+-0x940+0x1181*0x1)-_0x3da971['IEyAf'](_0x20918b,-0x1*-0x9ad+0x6a2+-0x104d):_0x2ae0f6[_0x4ec007(0x3f3)+'m']-_0x20918b-(_0x478909==='bl'?0x4*0x454+0x1dba+-0x6*0x7c7:0x153*-0x7+0x15c1*0x1+0x1*-0xbe6),_0x3e28fb=(_0x251120,_0x5c8d75,_0x56815d,_0x5737c0,_0xa09116,_0x1efcb6,_0x4acab0)=>{var _0x14acd8=_0x4ec007,_0x52153a=_0x370d70['has'](_0x5c8d75);_0x5b7ade[_0x14acd8(0x448)](),_0x5b7ade[_0x14acd8(0x491)+'Path']();if(_0x5b7ade[_0x14acd8(0x30a)+'Rect'])_0x5b7ade[_0x14acd8(0x30a)+_0x14acd8(0x6b8)](_0x56815d,_0x5737c0,_0xa09116,_0x1efcb6,_0x3da971['oEKyx'](-0x25*0x35+0x1e08+-0x1658,_0x3bff62));else _0x5b7ade[_0x14acd8(0x163)](_0x56815d,_0x5737c0,_0xa09116,_0x1efcb6);_0x5b7ade[_0x14acd8(0x28b)+'tyle']=_0x52153a?_0x14acd8(0x5b5)+_0x14acd8(0x3ac)+'07,15'+_0x14acd8(0x5e9)+'5)':_0x14acd8(0x5b5)+_0x14acd8(0x33b)+'16,0.'+'7)',_0x5b7ade[_0x14acd8(0x661)](),_0x5b7ade[_0x14acd8(0x57b)+'idth']=-0x1*-0x261d+-0xe88+-0x1794,_0x5b7ade['strok'+'eStyl'+'e']=_0x52153a?_0x396281:_0x3da971[_0x14acd8(0x581)],_0x5b7ade['strok'+'e'](),_0x52153a&&(_0x5b7ade[_0x14acd8(0x38c)+_0x14acd8(0x1d2)+'r']=_0x5213a9,_0x5b7ade['shado'+_0x14acd8(0x35b)]=-0x1bea+0x1f56+-0x35e*0x1,_0x5b7ade[_0x14acd8(0x661)](),_0x5b7ade[_0x14acd8(0x38c)+'wBlur']=-0x39b*0xa+0x180d+0x7*0x1b7),_0x5b7ade[_0x14acd8(0x28b)+_0x14acd8(0x5fb)]=_0x52153a?_0x14acd8(0x45a):'rgba('+_0x14acd8(0x5ba)+_0x14acd8(0x60c)+_0x14acd8(0x621)+')',_0x5b7ade[_0x14acd8(0x1fd)+'lign']=_0x14acd8(0x671)+'r',_0x5b7ade[_0x14acd8(0x4d3)+_0x14acd8(0x2d5)+'ne']=_0x3da971[_0x14acd8(0x168)],_0x5b7ade[_0x14acd8(0x322)]=_0x3da971[_0x14acd8(0x2d4)]('700\x20',Math[_0x14acd8(0x30a)](_0x3da971[_0x14acd8(0x2bd)](0x26d+-0x8d3+0x672,_0x3bff62)))+_0x3da971[_0x14acd8(0x572)],_0x5b7ade[_0x14acd8(0x529)+'ext'](_0x251120,_0x56815d+_0x3da971['EUGVH'](_0xa09116,-0x1719+-0x25d6*0x1+0x1*0x3cf1),_0x3da971[_0x14acd8(0x47e)](_0x3da971[_0x14acd8(0x402)](_0x5737c0,_0x3da971[_0x14acd8(0x669)](_0x1efcb6,-0x38b*0x5+-0x948+0x1b01)),_0x4acab0?(-0x462+0x8*0x67+0x12f)*_0x3bff62:0xe80+0x1*-0x81d+-0x3*0x221)),_0x4acab0&&(_0x5b7ade[_0x14acd8(0x322)]=_0x3da971[_0x14acd8(0x672)]+Math[_0x14acd8(0x30a)](_0x3da971[_0x14acd8(0x35f)](-0x5c*0x2b+0x1bc2+-0xc45,_0x3bff62))+(_0x14acd8(0x653)+'-sans'+'-seri'+'f,sys'+_0x14acd8(0x40c)+'i,san'+_0x14acd8(0x33a)+'if'),_0x5b7ade['fillS'+'tyle']=_0x52153a?'#fff':'rgba('+_0x14acd8(0x5ba)+_0x14acd8(0x60c)+_0x14acd8(0x4d2)+'5)',_0x5b7ade['fillT'+_0x14acd8(0x464)](_0x4acab0,_0x3da971[_0x14acd8(0x43b)](_0x56815d,_0xa09116/(-0x3*-0x563+0xc86+0x1*-0x1cad)),_0x3da971[_0x14acd8(0x182)](_0x5737c0+_0x1efcb6/(-0x1f1b+0x76*0x2e+-0x2b*-0x3b),(0x4*-0x1b1+0xc3*0x5+0x2fd)*_0x3bff62))),_0x5b7ade[_0x14acd8(0x4dc)+'re']();};_0x3da971['JgAfZ'](_0x3e28fb,'W',_0x3da971['ZRNYZ'],_0x3da971[_0x4ec007(0x43b)](_0x3b3533+_0x542df9,_0x7c7d58),_0x272d18,_0x542df9,_0x542df9),_0x3da971['cedlt'](_0x3e28fb,'A',_0x4ec007(0x691),_0x3b3533,_0x272d18+_0x542df9+_0x7c7d58,_0x542df9,_0x542df9),_0x3e28fb('S',_0x4ec007(0x56e),_0x3b3533+_0x542df9+_0x7c7d58,_0x3da971[_0x4ec007(0x593)](_0x272d18+_0x542df9,_0x7c7d58),_0x542df9,_0x542df9),_0x3da971[_0x4ec007(0x2ea)](_0x3e28fb,'D',_0x3da971[_0x4ec007(0x19e)],_0x3b3533+_0x3da971[_0x4ec007(0x55b)](_0x542df9,_0x7c7d58)*(0x1*0x58f+-0x143+-0x44a),_0x3da971[_0x4ec007(0x34b)](_0x3da971['RBdxY'](_0x272d18,_0x542df9),_0x7c7d58),_0x542df9,_0x542df9);var _0x5ea481=_0x3da971[_0x4ec007(0x47e)](_0x1f7ecc,_0x7c7d58)/(-0x1337*-0x2+0xd10+0x4*-0xcdf),_0x2f909f=_0x3da971[_0x4ec007(0x43b)](_0x272d18,(_0x542df9+_0x7c7d58)*(-0x532*0x4+-0x2*-0x11fb+-0xf2c));_0x3e28fb(_0x3da971['yzVQy'],_0x4ec007(0x33d)+'1',_0x3b3533,_0x2f909f,_0x5ea481,_0x542df9,_0x36bdc1[_0x4ec007(0x1ce)]?_0x3da971['uBskY'](_0x1485ac(-0x151*-0x2+0x260f*-0x1+-0x236e*-0x1),_0x4ec007(0x65b)):''),_0x3e28fb('RMB',_0x3da971[_0x4ec007(0x619)],_0x3b3533+_0x5ea481+_0x7c7d58,_0x2f909f,_0x5ea481,_0x542df9,_0x36bdc1['ksCps']?_0x3da971['kxnIE'](_0x1485ac(0x933*0x2+0x23c9+-0xd8b*0x4),'\x20CPS'):''),_0x3e28fb('',_0x4ec007(0x667),_0x3b3533,_0x2f909f+_0x542df9+_0x7c7d58,_0x1f7ecc,_0x542df9*(-0xbaa*0x1+-0x1868+0xf3*0x26+0.45));}function _0x2f5a03(_0x120ff5){var _0x3cfcb1=_0xab5aee,_0x78a2b3=('2|23|'+'19|9|'+_0x3cfcb1(0x14b)+'|4|6|'+'17|0|'+_0x3cfcb1(0x3df)+_0x3cfcb1(0x261)+'8|1|1'+_0x3cfcb1(0x44a)+_0x3cfcb1(0x4b7)+'|21|1'+'2|14|'+'3')[_0x3cfcb1(0x19f)]('|'),_0x52cf98=0xf*0x57+0x1b84*0x1+0x1*-0x209d;while(!![]){switch(_0x78a2b3[_0x52cf98++]){case'0':var _0x200ec6=(0x18a6+0xef0+-0x2790)*_0x423a9d,_0x45a8a7=(-0x15c5+-0x13*-0x147+-0x278)*_0x423a9d;continue;case'1':_0x5b7ade[_0x3cfcb1(0x383)+'o'](_0x1246fb,_0x16a3fd[_0x3cfcb1(0x248)](_0x16a3fd[_0x3cfcb1(0x248)](_0x821298,_0x200ec6),_0x45a8a7));continue;case'2':var _0x1246fb=_0x16a3fd['fKNPh'](_0x120ff5[_0x3cfcb1(0x645)],-0x5*0x502+0x1f2c+-0x620),_0x821298=_0x16a3fd['QKNrl'](_0x120ff5['heigh'+'t'],-0x1*0xa8b+0x2a4*-0x8+0x1fad);continue;case'3':_0x5b7ade[_0x3cfcb1(0x4dc)+'re']();continue;case'4':_0x5b7ade['lineW'+_0x3cfcb1(0x56b)]=Math[_0x3cfcb1(0x4cd)](0x2*-0xc81+0xeff+0xa04*0x1+0.5,_0x16a3fd[_0x3cfcb1(0x368)](0x1210+-0x9*0x34b+0x251*0x5,_0x423a9d));continue;case'5':_0x5b7ade['begin'+_0x3cfcb1(0x4fc)]();continue;case'6':_0x5b7ade[_0x3cfcb1(0x38c)+'wColo'+'r']=_0x2157bc;continue;case'7':_0x5b7ade[_0x3cfcb1(0x383)+'o'](_0x16a3fd[_0x3cfcb1(0x597)](_0x1246fb,_0x200ec6),_0x821298);continue;case'8':_0x5b7ade[_0x3cfcb1(0x383)+'o'](_0x1246fb-_0x200ec6-_0x45a8a7,_0x821298);continue;case'9':_0x5b7ade['save']();continue;case'10':_0x5b7ade[_0x3cfcb1(0x26d)+'e']();continue;case'11':_0x5b7ade['strok'+'eStyl'+'e']=_0x2157bc;continue;case'12':_0x5b7ade['arc'](_0x1246fb,_0x821298,_0x16a3fd[_0x3cfcb1(0x514)](-0x1*-0x182+0x11bf+-0x1340+0.6000000000000001,_0x423a9d),0x1c1c+0xa70+-0x1*0x268c,Math['PI']*(-0x2238+-0xca6+-0x64*-0x78));continue;case'13':_0x5b7ade['lineT'+'o'](_0x16a3fd['ftUAA'](_0x1246fb,_0x200ec6),_0x821298);continue;case'14':_0x5b7ade['fill']();continue;case'15':_0x5b7ade['lineT'+'o'](_0x1246fb,_0x16a3fd['MFths'](_0x821298+_0x200ec6,_0x45a8a7));continue;case'16':_0x5b7ade['lineT'+'o'](_0x1246fb,_0x821298-_0x200ec6);continue;case'17':_0x5b7ade[_0x3cfcb1(0x38c)+_0x3cfcb1(0x35b)]=0x2464+0x14e+-0x25ac;continue;case'18':_0x5b7ade[_0x3cfcb1(0x216)+'o'](_0x1246fb+_0x200ec6+_0x45a8a7,_0x821298);continue;case'19':var _0x2157bc=/^#[0-9a-f]{6}$/i[_0x3cfcb1(0x101)](_0x36bdc1['chCol'+'or'])?_0x36bdc1['chCol'+'or']:_0x3cfcb1(0x506)+'9d';continue;case'20':_0x5b7ade['fillS'+_0x3cfcb1(0x5fb)]=_0x2157bc;continue;case'21':_0x5b7ade['begin'+_0x3cfcb1(0x4fc)]();continue;case'22':_0x5b7ade[_0x3cfcb1(0x383)+'o'](_0x1246fb,_0x821298+_0x200ec6);continue;case'23':var _0x423a9d=Number(_0x36bdc1[_0x3cfcb1(0x106)+'e'])||0x93d+-0x17ec+0xeb0;continue;}break;}}function _0x5e2d09(_0x206530){var _0x560b4c=_0xab5aee;if(_0x560b4c(0x3cb)!==_0x560b4c(0x4fa)){_0x5b7ade[_0x560b4c(0x448)](),_0x5b7ade['font']=_0x560b4c(0x460)+_0x560b4c(0x521)+_0x560b4c(0x4d0)+_0x560b4c(0x21d)+_0x560b4c(0x2a4)+'ospac'+'e',_0x5b7ade[_0x560b4c(0x1fd)+_0x560b4c(0x2f2)]='left',_0x5b7ade['textB'+_0x560b4c(0x2d5)+'ne']=_0x3da971['UqYDN'];var _0x373dfb=-0xa67+-0x135a+0x1ded*0x1,_0x54c7dd=-0x2c*0xa3+-0x11c1+0x2dd1,_0x516e30=(_0xceec49,_0x728f9d)=>{var _0x44720c=_0x560b4c;_0x5b7ade[_0x44720c(0x28b)+_0x44720c(0x5fb)]=_0x728f9d||_0x44720c(0x5b5)+'255,2'+_0x44720c(0x60c)+_0x44720c(0x3f5)+'5)',_0x5b7ade['fillT'+'ext'](_0xceec49,_0x54c7dd,_0x373dfb),_0x373dfb+=0x1164+0x1b3c+-0xf8*0x2e;};_0x3da971['OOcdH'](_0x516e30,_0x560b4c(0x236)+'A\x20KOU'+_0x560b4c(0x11f)+'1','#ff6b'+'9d');if(_0x36bdc1[_0x560b4c(0x66f)])_0x3da971['HgveE'](_0x516e30,_0x537120+_0x560b4c(0x104));if(!_0x3a864a['gameL'+'oaded'])_0x3da971[_0x560b4c(0x45f)](_0x516e30,_0x3da971[_0x560b4c(0x41b)],'rgba('+_0x560b4c(0x3ac)+_0x560b4c(0x4c3)+'0,0.6'+')');_0x5b7ade['resto'+'re']();}else _0x356c4b=_0x5154f4[_0x560b4c(0x30a)](_0x3da971[_0x560b4c(0x2bd)](_0xc5a156,-0x10d4+0x2*-0xaf3+0x2aa2)/_0x3da971['eYRzg'](_0x237f0c,_0x912bd1)),_0x401431=0x114d*-0x1+-0x1aa*-0xf+0x7a9*-0x1,_0x2a8c35=_0x1a080b;}function _0x2919ff(){var _0x3df602=_0xab5aee,_0x35ca0c=_0x16a3fd['FEnIU']['split']('|'),_0x38e5a6=0x113f+-0x1*-0x1db9+0x8*-0x5df;while(!![]){switch(_0x35ca0c[_0x38e5a6++]){case'0':if(_0x36bdc1[_0x3df602(0x330)+_0x3df602(0x69d)])_0x276ac9(_0x1588f8);continue;case'1':_0x488e07++;continue;case'2':_0x1f787c();continue;case'3':_0x4d25b1-_0x10dd54>=0x1294*0x1+-0x109f+-0x1&&(_0x537120=Math['round'](_0x16a3fd[_0x3df602(0x2c1)](_0x488e07*(0x1299+0x777+0x2c5*-0x8),_0x16a3fd[_0x3df602(0x248)](_0x4d25b1,_0x10dd54))),_0x488e07=-0x1*0x1721+0x4a*-0x17+0x1dc7,_0x10dd54=_0x4d25b1);continue;case'4':requestAnimationFrame(_0x2919ff);continue;case'5':_0x5e2d09(_0x1588f8);continue;case'6':var _0x1588f8={'left':0x0,'top':0x0,'right':_0x476cec['w'],'bottom':_0x476cec['h'],'width':_0x476cec['w'],'height':_0x476cec['h']};continue;case'7':_0x16a3fd['FmYqr'](_0x14abaa);continue;case'8':if(_0x36bdc1['cross'+_0x3df602(0x63b)])_0x2f5a03(_0x1588f8);continue;case'9':var _0x4d25b1=performance['now']();continue;case'10':_0x5b7ade[_0x3df602(0x3a0)+'Rect'](-0x135e*-0x1+0x1*0x2649+-0x39a7,0x1a03+0x13d2+0x1*-0x2dd5,_0x476cec['w'],_0x476cec['h']);continue;}break;}}var _0x201b2b=document[_0xab5aee(0x13d)+_0xab5aee(0x4a1)+'ent'](_0xab5aee(0x1d4));_0x201b2b['id']=_0xab5aee(0x5aa)+'a-ui',_0x201b2b['style'][_0xab5aee(0x609)+'xt']=_0x16a3fd[_0xab5aee(0x2e4)];var _0x52c931=_0x201b2b[_0xab5aee(0x61f)+_0xab5aee(0x2a2)+'ow']({'mode':_0x16a3fd[_0xab5aee(0x415)]});(document[_0xab5aee(0x1d8)]||document[_0xab5aee(0x2c3)+'entEl'+_0xab5aee(0x592)])[_0xab5aee(0x2cb)+_0xab5aee(0x3bb)+'d'](_0x201b2b);var _0x4b7e61=![],_0x173aac={};try{_0x16a3fd[_0xab5aee(0x257)](_0x16a3fd[_0xab5aee(0x5d7)],_0x16a3fd[_0xab5aee(0x5d7)])?(_0x53002f[_0xab5aee(0xe6)+'ropag'+_0xab5aee(0x114)](),_0x3da971[_0xab5aee(0x579)](_0x126f2d)):_0x173aac=JSON['parse'](localStorage[_0xab5aee(0x642)+'em'](_0x16a3fd[_0xab5aee(0x387)])||'{}');}catch(_0x2a4e02){}function _0x2d05d3(){var _0x541297=_0xab5aee;if(_0x3da971[_0x541297(0x2c9)]===_0x3da971['LxFAd'])try{localStorage[_0x541297(0x5c3)+'em'](_0x541297(0x5aa)+_0x541297(0x4a0)+_0x541297(0x32d)+'v1',JSON[_0x541297(0x247)+_0x541297(0x4d7)](_0x173aac));}catch(_0x69737f){}else{var _0xc9033a=_0x55f04d['getEl'+_0x541297(0x592)+'ById'](_0x1792ce);if(_0xc9033a&&_0x3da971['MJBiz'](_0x19f8e7,_0x541297(0x2f9)+'creen'+'-banr'+'s')){var _0x23f2e1=_0xc9033a[_0x541297(0x2e3)+'ren'];for(var _0x16ff7e=-0x1f9+-0x2521*0x1+0x7*0x596;_0x16ff7e<_0x23f2e1['lengt'+'h'];_0x16ff7e++){if(_0x23f2e1[_0x16ff7e]['id']&&_0x23f2e1[_0x16ff7e]['id']['index'+'Of'](_0x541297(0x3b1)+_0x541297(0x367))===0x1db0+-0x1e50+0xa0)_0x23f2e1[_0x16ff7e][_0x541297(0x603)][_0x541297(0x15c)+'ay']=_0x3da971['rgBwE'];}}else{if(_0xc9033a)_0xc9033a[_0x541297(0x603)]['displ'+'ay']=_0x3da971[_0x541297(0x5be)];}}}function _0x1701b5(_0xc0f6f6,_0x5d6fd0){var _0x59febc=_0xab5aee,_0x55154f=document[_0x59febc(0x13d)+'eElem'+_0x59febc(0x320)](_0x16a3fd['WQWHg']);return _0x55154f['type']=_0x59febc(0x34d)+'n',_0x55154f[_0x59febc(0x4e9)+'Name']=_0x16a3fd[_0x59febc(0x25e)],_0x55154f[_0x59febc(0x283)+_0x59febc(0x1e8)+'te'](_0x16a3fd['CbyNu'],_0x16a3fd['oHhKb']),_0x55154f['setAt'+_0x59febc(0x1e8)+'te']('aria-'+'check'+'ed',_0x16a3fd[_0x59febc(0x5a6)](String,!!_0xc0f6f6)),_0x55154f[_0x59febc(0x1bf)+'ck']=_0x6100f5=>{var _0x8889f8=_0x59febc;if(_0x3da971['twFRg']!==_0x3da971[_0x8889f8(0x68f)]){_0x6100f5[_0x8889f8(0xe6)+'ropag'+'ation']();var _0x88ec3c=_0x55154f[_0x8889f8(0x241)+_0x8889f8(0x1e8)+'te'](_0x8889f8(0x105)+_0x8889f8(0x1a7)+'ed')!==_0x3da971['dOehD'];_0x55154f[_0x8889f8(0x283)+_0x8889f8(0x1e8)+'te']('aria-'+'check'+'ed',String(_0x88ec3c)),_0x5d6fd0(_0x88ec3c);}else _0x17f2b0={..._0x183a5c},_0x393698(),_0x263843['reloa'+'d']();},_0x55154f;}function _0x4a12e1(_0x2cf48e,_0x59ed27,_0x3365bc,_0x5041d6,_0x205768){var _0x16ca49=_0xab5aee,_0x22f8e1=document[_0x16ca49(0x13d)+_0x16ca49(0x4a1)+_0x16ca49(0x320)](_0x16ca49(0x1d4));_0x22f8e1[_0x16ca49(0x4e9)+'Name']=_0x3da971[_0x16ca49(0x3b4)];var _0x847089=document['creat'+_0x16ca49(0x4a1)+_0x16ca49(0x320)](_0x3da971['sxCwg']);_0x847089['type']=_0x16ca49(0x422),_0x847089['class'+_0x16ca49(0x517)]='sk-sl'+_0x16ca49(0x16b),_0x847089['min']=_0x59ed27,_0x847089[_0x16ca49(0x4cd)]=_0x3365bc,_0x847089[_0x16ca49(0x3f6)]=_0x5041d6,_0x847089['value']=_0x2cf48e;var _0x56a097=document[_0x16ca49(0x13d)+'eElem'+_0x16ca49(0x320)](_0x3da971['cojFW']);_0x56a097['class'+_0x16ca49(0x517)]=_0x3da971[_0x16ca49(0x3a1)],_0x56a097[_0x16ca49(0x42b)+_0x16ca49(0x301)+'t']=String(_0x2cf48e);var _0x88eeb3=()=>{var _0x43f726=_0x16ca49,_0xc41b2={'YofDZ':_0x43f726(0x472),'sGejH':function(_0x3c54a6,_0x6a7514){return _0x3c54a6*_0x6a7514;},'alAJK':'rgba('+'255,2'+_0x43f726(0x60c)+_0x43f726(0x4d2)+'5)','SybaV':function(_0x55bab9,_0x48a04c){return _0x3da971['vtCBp'](_0x55bab9,_0x48a04c);},'CIEja':function(_0x5b9f46,_0x2e033b){return _0x5b9f46+_0x2e033b;}};_0x3da971['QEgde'](_0x43f726(0x137),_0x3da971['OpEoB'])?(_0x56a097['textC'+_0x43f726(0x301)+'t']=String(_0x847089['value']),_0x22f8e1[_0x43f726(0x603)]['setPr'+_0x43f726(0x4e6)+'y']('--p',_0x3da971['oEKyx'](_0x3da971[_0x43f726(0x553)](_0x847089['value'],_0x59ed27)/(_0x3365bc-_0x59ed27),0x9c8+-0x1ff8+0x1694)+'%')):(_0x2a11a5[_0x43f726(0x322)]=_0xc41b2[_0x43f726(0x3c6)]+_0x2a4c55[_0x43f726(0x30a)](_0xc41b2['sGejH'](-0xcd0+-0x362*0x8+0x27e9,_0x35f974))+(_0x43f726(0x653)+_0x43f726(0x2ab)+'-seri'+'f,sys'+_0x43f726(0x40c)+_0x43f726(0x18f)+_0x43f726(0x33a)+'if'),_0x3f9df3[_0x43f726(0x28b)+_0x43f726(0x5fb)]=_0x303bec?_0x43f726(0x45a):_0xc41b2['alAJK'],_0x1d815f['fillT'+'ext'](_0x48e1bb,_0xc41b2['SybaV'](_0x32fff5,_0x4a1512/(0x1*-0x25fa+0x142f+0x11cd)),_0xc41b2['CIEja'](_0xc41b2[_0x43f726(0x1ef)](_0x38600e,_0x1b45aa/(0xed0+-0xcd1+-0x1fd)),(0xc0+0x1*-0x4ac+-0x2e*-0x16)*_0x36364b)));};return _0x847089['oninp'+'ut']=()=>{var _0x4e6b13=_0x16ca49;_0x3da971[_0x4e6b13(0x579)](_0x88eeb3),_0x205768(Number(_0x847089['value']));},_0x88eeb3(),_0x22f8e1[_0x16ca49(0x2cb)+'d'](_0x847089,_0x56a097),_0x22f8e1;}function _0x3a62c7(_0xb202fe,_0x184966){var _0x174ac0=_0xab5aee,_0xbff3d2=_0x3da971[_0x174ac0(0x178)][_0x174ac0(0x19f)]('|'),_0x17c106=-0x82f+-0x63*-0x11+-0x19c*-0x1;while(!![]){switch(_0xbff3d2[_0x17c106++]){case'0':_0x177332['value']=/^#[0-9a-f]{6}$/i[_0x174ac0(0x101)](_0xb202fe)?_0xb202fe:_0x3da971['BgSfM'];continue;case'1':_0x177332['oninp'+'ut']=()=>_0x184966(_0x177332['value']);continue;case'2':return _0x177332;case'3':var _0x177332=document['creat'+_0x174ac0(0x4a1)+_0x174ac0(0x320)]('input');continue;case'4':_0x177332[_0x174ac0(0x4e9)+_0x174ac0(0x517)]=_0x3da971['IwECj'];continue;case'5':_0x177332[_0x174ac0(0x19a)]=_0x174ac0(0x6b6);continue;}break;}}function _0x35dc83(_0x56e895,_0xf53d6e,_0x4e6c13){var _0x5539df=_0xab5aee,_0x304b4b={'MrVMV':function(_0x2a9f26,_0x3ee051){return _0x2a9f26+_0x3ee051;},'EnAVB':_0x3da971['CbWGO'],'Ynkhd':function(_0x2c80de,_0x222ad2){return _0x3da971['DlvEM'](_0x2c80de,_0x222ad2);},'XjQaZ':function(_0x33cb58,_0xd6e081){return _0x33cb58-_0xd6e081;},'OLGkW':function(_0x2d3352,_0x17fa84){return _0x2d3352/_0x17fa84;}};if(_0x3da971[_0x5539df(0x29b)]!=='rMmGj'){var _0x247fb0=document[_0x5539df(0x13d)+'eElem'+_0x5539df(0x320)](_0x5539df(0x6b0)+'t');_0x247fb0[_0x5539df(0x4e9)+_0x5539df(0x517)]=_0x5539df(0x56a)+_0x5539df(0x19b);for(var [_0x88d13e,_0x19d9e9]of _0xf53d6e){if(_0x3da971['dORku']('GerFI',_0x5539df(0x149))){var _0x4c38cb=_0x2f6637[_0x598903]||[],_0x61387=_0x17b117['now']();while(_0x4c38cb['lengt'+'h']&&_0x3da971[_0x5539df(0x17d)](_0x61387-_0x4c38cb[0x312*0x9+-0x24b3+0x911],-0x10eb+-0x8bf+0x2f5*0xa))_0x4c38cb['shift']();return _0x4c38cb['lengt'+'h'];}else{var _0xa55222=document[_0x5539df(0x13d)+_0x5539df(0x4a1)+_0x5539df(0x320)](_0x5539df(0x4c1)+'n');_0xa55222[_0x5539df(0x439)]=_0x88d13e,_0xa55222['textC'+'onten'+'t']=_0x19d9e9,_0x247fb0['appen'+'dChil'+'d'](_0xa55222);}}return _0x247fb0[_0x5539df(0x439)]=_0x56e895,_0x247fb0[_0x5539df(0x2fa)+'nge']=()=>_0x4e6c13(_0x247fb0[_0x5539df(0x439)]),_0x247fb0;}else{var _0x537f6a=(_0x5539df(0x46f)+'0|6|2'+'|16|1'+_0x5539df(0x3a8)+'|14|7'+_0x5539df(0x1de)+_0x5539df(0x2b9)+'5|1|4')['split']('|'),_0x2ef0b3=0x1*-0x112+0x1193+-0x1081;while(!![]){switch(_0x537f6a[_0x2ef0b3++]){case'0':_0x170454[_0x5539df(0x491)+_0x5539df(0x4fc)]();continue;case'1':_0x212c2b&&(_0x36ac54[_0x5539df(0x322)]=_0x304b4b[_0x5539df(0x591)](_0x304b4b[_0x5539df(0x4ca)],_0x5af33f['round'](_0x304b4b[_0x5539df(0x278)](-0x1c87+0x1a6d+0x223,_0x1100a8)))+('px\x20ui'+_0x5539df(0x2ab)+'-seri'+_0x5539df(0x5dd)+'tem-u'+_0x5539df(0x18f)+'s-ser'+'if'),_0x5501fc['fillS'+_0x5539df(0x5fb)]=_0x248b60?_0x5539df(0x45a):_0x5539df(0x5b5)+'255,2'+_0x5539df(0x60c)+'0,0.5'+'5)',_0x3a63c7[_0x5539df(0x529)+'ext'](_0x4fc424,_0x59c448+_0x58534b/(-0x10c9+-0x4f+-0xc7*-0x16),_0x9519d6+_0x4a5a12/(-0x2441*0x1+-0x6b7+-0x1*-0x2afa)+(-0x2709*-0x1+-0x795*-0x1+-0x1*0x2e96)*_0x45624e));continue;case'2':_0x3faf16[_0x5539df(0x28b)+'tyle']=_0x248b60?_0x5539df(0x5b5)+_0x5539df(0x3ac)+_0x5539df(0x45b)+'7,0.8'+'5)':_0x5539df(0x5b5)+'22,8,'+_0x5539df(0x696)+'7)';continue;case'3':_0xb3c177[_0x5539df(0x26d)+_0x5539df(0x505)+'e']=_0x248b60?_0x3e21f9:_0x5539df(0x5b5)+'255,1'+'07,15'+_0x5539df(0x681)+'5)';continue;case'4':_0x55dfdd[_0x5539df(0x4dc)+'re']();continue;case'5':_0x539135[_0x5539df(0x1fd)+_0x5539df(0x2f2)]='cente'+'r';continue;case'6':if(_0x422a00[_0x5539df(0x30a)+'Rect'])_0x26dfc4[_0x5539df(0x30a)+_0x5539df(0x6b8)](_0x3d9f20,_0x11d29c,_0x5d3f7c,_0x43d14f,(0x21d5*0x1+0x1e4b+-0x4019)*_0x3cff21);else _0x4ce1ef[_0x5539df(0x163)](_0x308110,_0x5c0f3b,_0x306c19,_0x3a52aa);continue;case'7':_0x28989e[_0x5539df(0x28b)+_0x5539df(0x5fb)]=_0x248b60?_0x5539df(0x45a):'rgba('+_0x5539df(0x5ba)+_0x5539df(0x60c)+'0,0.8'+')';continue;case'8':var _0x248b60=_0x148275[_0x5539df(0x161)](_0xae2601);continue;case'9':_0x34d187[_0x5539df(0x26d)+'e']();continue;case'10':_0x5cce06[_0x5539df(0x448)]();continue;case'11':_0x507721[_0x5539df(0x57b)+'idth']=0x15fa+0x157b+-0x2b74;continue;case'12':_0x1548b7['font']=_0x5539df(0x556)+_0x1b86cc[_0x5539df(0x30a)]((-0x3c+-0x1ea4+0xf76*0x2)*_0x2e0e9d)+('px\x20ui'+'-sans'+_0x5539df(0x1b3)+'f,sys'+'tem-u'+'i,san'+_0x5539df(0x33a)+'if');continue;case'13':_0x522d73['textB'+'aseli'+'ne']=_0x5539df(0x476)+'e';continue;case'14':_0x248b60&&(_0x14ff84[_0x5539df(0x38c)+_0x5539df(0x1d2)+'r']=_0x4d8a8b,_0x160f0b['shado'+'wBlur']=0x144c*0x1+0x2699+0x139d*-0x3,_0xa26ce7[_0x5539df(0x661)](),_0x2e9d2b[_0x5539df(0x38c)+'wBlur']=-0x2*-0xb83+0x6b*-0x47+0x6a7);continue;case'15':_0x37ab39[_0x5539df(0x529)+_0x5539df(0x464)](_0x35584f,_0x125399+_0x3de42c/(-0x11f1+0x1f60+-0xd6d),_0x304b4b['XjQaZ'](_0x2c05d9+_0x304b4b['OLGkW'](_0x189849,-0x1*0x15b9+0x6b1*0x5+-0x4f*0x26),_0x393f56?(0x1d68+-0x7fd+-0x722*0x3)*_0x2d7304:-0xe14+-0xcbb*-0x1+0x159));continue;case'16':_0x3d838d['fill']();continue;}break;}}}function _0x283401(_0x575f4d,_0x28774a){var _0x7bb091=_0xab5aee,_0x34758b={'TXIjA':function(_0x44e592){return _0x44e592();}};if(_0x7bb091(0x46d)!=='GMMCP'){var _0x2af34b=_0x16a3fd['avtxM'][_0x7bb091(0x19f)]('|'),_0x1eae93=-0x2687+-0x9*-0x2cf+0xd40;while(!![]){switch(_0x2af34b[_0x1eae93++]){case'0':var _0xf3c242=document['creat'+_0x7bb091(0x4a1)+_0x7bb091(0x320)]('butto'+'n');continue;case'1':_0xf3c242['oncli'+'ck']=_0x447e2a=>{var _0x9afd41=_0x7bb091;_0x447e2a['stopP'+_0x9afd41(0x4c7)+'ation'](),_0x34758b['TXIjA'](_0x28774a);};continue;case'2':_0xf3c242[_0x7bb091(0x42b)+_0x7bb091(0x301)+'t']=_0x575f4d;continue;case'3':_0xf3c242[_0x7bb091(0x4e9)+_0x7bb091(0x517)]=_0x7bb091(0x3b3)+'n';continue;case'4':return _0xf3c242;case'5':_0xf3c242[_0x7bb091(0x19a)]='butto'+'n';continue;}break;}}else _0x2deddd['ksSca'+'le']=_0x4bceed,_0x1efdd5();}function _0x489162(_0x8bdae1,_0x54a7c3,_0x3a88a7){var _0x3397fa=_0xab5aee;if(_0x3397fa(0x49a)===_0x3397fa(0x49a)){var _0x44ecad=_0x16a3fd[_0x3397fa(0x34c)][_0x3397fa(0x19f)]('|'),_0x4d08ca=-0x27*0x47+0x1169+0x2*-0x34c;while(!![]){switch(_0x44ecad[_0x4d08ca++]){case'0':_0x1125ff[_0x3397fa(0x4e9)+'Name']=_0x16a3fd[_0x3397fa(0x3fd)];continue;case'1':var _0x5b651d=document[_0x3397fa(0x13d)+_0x3397fa(0x4a1)+_0x3397fa(0x320)](_0x3397fa(0x20e));continue;case'2':_0x1125ff['appen'+'d'](_0x5b651d,_0x3a88a7);continue;case'3':_0x5b651d[_0x3397fa(0x4e9)+'Name']=_0x16a3fd['unBRe'];continue;case'4':return _0x1125ff;case'5':var _0x1125ff=document[_0x3397fa(0x13d)+'eElem'+'ent'](_0x16a3fd[_0x3397fa(0x351)]);continue;case'6':if(_0x54a7c3){var _0x2917b3=document['creat'+'eElem'+'ent'](_0x16a3fd[_0x3397fa(0x23f)]);_0x2917b3['class'+'Name']=_0x16a3fd[_0x3397fa(0x56c)],_0x2917b3[_0x3397fa(0x42b)+_0x3397fa(0x301)+'t']=_0x54a7c3,_0x5b651d[_0x3397fa(0x2cb)+'dChil'+'d'](_0x2917b3);}continue;case'7':_0x5b651d[_0x3397fa(0x42b)+_0x3397fa(0x301)+'t']=_0x8bdae1;continue;}break;}}else{_0x4aeda7[_0x3397fa(0x4e1)+_0x3397fa(0x179)]=!!_0x5250fe['unity'+'Insta'+'nce'];try{var _0x1eec7e=0x292+-0x23c6+0x2134;for(var _0x219c60 in _0x2948f5){if(_0x27d319[_0x219c60]&&_0x39498e[_0x219c60][_0x3397fa(0x4cb)+'ed'])_0x1eec7e++;}_0x5ca32e[_0x3397fa(0x15e)+'Ok']=_0x1eec7e;}catch(_0x255994){}}}function _0x3d95b9(_0x37e865,_0x2a6ee6){var _0x2f5331=_0xab5aee,_0x4918c0=document['creat'+_0x2f5331(0x4a1)+'ent'](_0x3da971[_0x2f5331(0xef)]);return _0x4918c0[_0x2f5331(0x4e9)+'Name']=_0x3da971[_0x2f5331(0x182)]('sk-no'+'te',_0x2a6ee6?_0x2f5331(0x213):''),_0x4918c0[_0x2f5331(0x42b)+_0x2f5331(0x301)+'t']=_0x37e865,_0x4918c0;}function _0x2837b3(_0x5306ce,_0x126b98,_0x250fde,_0x326f7a,_0x1d4258){var _0x49d008=_0xab5aee,_0x37aba4={'nndzZ':function(_0xd9e8c4,_0xe75f47){var _0xba05ea=_0xe814;return _0x16a3fd[_0xba05ea(0x5a0)](_0xd9e8c4,_0xe75f47);}},_0xd767fe=document['creat'+_0x49d008(0x4a1)+_0x49d008(0x320)](_0x16a3fd[_0x49d008(0x351)]);_0xd767fe['class'+_0x49d008(0x517)]=_0x16a3fd['MFths'](_0x49d008(0x6a3)+'rd',_0x250fde?_0x16a3fd[_0x49d008(0x54d)]:'');var _0x25bf58=document['creat'+_0x49d008(0x4a1)+_0x49d008(0x320)](_0x49d008(0x1d4));_0x25bf58['class'+'Name']=_0x49d008(0x6a3)+_0x49d008(0x1ac)+'ad';var _0x344a35=document[_0x49d008(0x13d)+_0x49d008(0x4a1)+'ent'](_0x49d008(0x1d4));_0x344a35['class'+'Name']=_0x16a3fd[_0x49d008(0x607)];var _0x1dd4aa=document['creat'+'eElem'+_0x49d008(0x320)](_0x16a3fd['Qijnm']);_0x1dd4aa[_0x49d008(0x42b)+'onten'+'t']=_0x5306ce,_0x344a35[_0x49d008(0x2cb)+'dChil'+'d'](_0x1dd4aa);if(_0x326f7a){var _0x685175=_0x1701b5(_0x250fde,_0x567091=>{var _0xac5096=_0x49d008,_0x35f668={'WXohh':function(_0x5e85fa,_0x28792d,_0x1e30c8,_0x26bcae,_0x139bbb){return _0x5e85fa(_0x28792d,_0x1e30c8,_0x26bcae,_0x139bbb);},'IIHrf':_0xac5096(0x647)+'ers'};_0x37aba4[_0xac5096(0x5cf)](_0xac5096(0x4f4),_0xac5096(0x385))?(_0xd767fe['class'+_0xac5096(0x61d)][_0xac5096(0x6ac)+'e']('on',_0x567091),_0x326f7a(_0x567091)):_0x35f668[_0xac5096(0x26f)](_0x331ed8,_0x4fbe03,_0x203db6,_0x4d4578,_0x35f668[_0xac5096(0x6a9)]);});_0x25bf58[_0x49d008(0x2cb)+'d'](_0x344a35,_0x685175);}else{if('mCoxg'!==_0x16a3fd[_0x49d008(0x5a1)])_0x25bf58[_0x49d008(0x2cb)+_0x49d008(0x3bb)+'d'](_0x344a35);else{var _0x4a1b23={'fVXHu':function(_0x26ef3d,_0x4b2132){return _0x26ef3d+_0x4b2132;},'mrqpe':function(_0x4fc5ee,_0x3ed7e9){var _0x5c52c=_0x49d008;return _0x3da971[_0x5c52c(0x63c)](_0x4fc5ee,_0x3ed7e9);}};_0x3658d9['addEv'+_0x49d008(0x2af)+_0x49d008(0x3f2)+'r'](_0x3da971[_0x49d008(0x144)],_0x42c812=>{var _0x1312ec=_0x49d008;try{var _0x297f45=_0x42c812&&(_0x42c812['messa'+'ge']||_0x42c812['error']&&_0x42c812[_0x1312ec(0x4ae)]['messa'+'ge'])||'unkno'+'wn';if(_0x42c812&&_0x42c812[_0x1312ec(0x38a)+'ame'])_0x297f45+=_0x4a1b23['fVXHu'](_0x4a1b23['fVXHu'](_0x4a1b23[_0x1312ec(0x4be)](_0x1312ec(0x2e6),_0x577270(_0x42c812[_0x1312ec(0x38a)+_0x1312ec(0x21a)])[_0x1312ec(0x19f)]('/')['pop']()),':'),_0x42c812['linen'+'o']||'?');_0x11b3db[_0x1312ec(0x478)+_0x1312ec(0x12a)]=_0x4e43f9(_0x297f45)[_0x1312ec(0x417)](0x5*0x328+0xc60+-0x44*0x6a,0x1f1d+0x1*0x9e5+-0x2862);}catch(_0x2c2b4e){}});}}_0xd767fe[_0x49d008(0x2cb)+_0x49d008(0x3bb)+'d'](_0x25bf58);if(_0x1d4258&&_0x1d4258['lengt'+'h']){var _0x491012=_0x16a3fd['jMEia']['split']('|'),_0x4534af=0x10e8+-0x12ee+0x206;while(!![]){switch(_0x491012[_0x4534af++]){case'0':for(var _0x38616b of _0x1d4258)_0x59819d[_0x49d008(0x2cb)+_0x49d008(0x3bb)+'d'](_0x38616b);continue;case'1':var _0x59819d=document['creat'+'eElem'+'ent'](_0x49d008(0x1d4));continue;case'2':_0x540ea2['class'+_0x49d008(0x517)]=_0x49d008(0x6b2)+'esc';continue;case'3':var _0x540ea2=document[_0x49d008(0x13d)+'eElem'+'ent']('div');continue;case'4':_0x59819d[_0x49d008(0x2cb)+'dChil'+'d'](_0x540ea2);continue;case'5':_0x59819d[_0x49d008(0x4e9)+_0x49d008(0x517)]=_0x16a3fd[_0x49d008(0x545)];continue;case'6':_0xd767fe[_0x49d008(0x2cb)+'dChil'+'d'](_0x59819d);continue;case'7':_0x540ea2[_0x49d008(0x42b)+_0x49d008(0x301)+'t']=_0x126b98;continue;}break;}}return _0xd767fe;}var _0x486817=[{'id':_0xab5aee(0x453)+'t','label':_0x16a3fd[_0xab5aee(0x58e)]},{'id':'move','label':_0x16a3fd['XToYO']},{'id':_0xab5aee(0x3a6)+'l','label':_0xab5aee(0x649)+'l'},{'id':_0xab5aee(0x1d5),'label':_0xab5aee(0x5f7)},{'id':_0x16a3fd[_0xab5aee(0x508)],'label':_0x16a3fd['CzrFU']}];function _0x30f5d7(){var _0x236bdf=_0xab5aee,_0x412659=_0x3a864a[_0x236bdf(0x136)+_0x236bdf(0x20a)]?'SAFE\x20'+_0x236bdf(0x1f6)+'—\x20ove'+_0x236bdf(0x184)+'only,'+_0x236bdf(0x36f)+'ooks\x20'+_0x236bdf(0x411)+_0x236bdf(0x1b6)+'\x20exit'+')':_0x3a864a[_0x236bdf(0x3dd)]?_0x16a3fd['MFths'](_0x16a3fd[_0x236bdf(0x683)](_0x236bdf(0xf2)+'bound'+'\x20'+(_0x3a864a[_0x236bdf(0x15e)+_0x236bdf(0x133)]?_0x16a3fd[_0x236bdf(0x683)](_0x3a864a[_0x236bdf(0x15e)+'Ok']+'/'+_0x3a864a[_0x236bdf(0x15e)+_0x236bdf(0x133)],'\x20hook'+'s'):_0x236bdf(0x5d9)+'ks\x20ar'+_0x236bdf(0x639)+_0x236bdf(0x335)+'ff)')+_0x16a3fd[_0x236bdf(0x62b)],_0x3a864a['gameL'+_0x236bdf(0x179)]?_0x236bdf(0x4ac)+'d':_0x16a3fd[_0x236bdf(0x4d9)])+(_0x236bdf(0x1a6)+'ooter'+'\x20')+(_0x3a864a['shoot'+'ers']?_0x16a3fd['eDXyM']:'none')+('\x20|\x20mo'+_0x236bdf(0x602)+'t\x20'),_0x3a864a[_0x236bdf(0x435)+_0x236bdf(0x61e)]?_0x236bdf(0x1a2):'none'):_0x236bdf(0xf2)+'MISSI'+_0x236bdf(0x5f9)+'overl'+'ay\x20on'+_0x236bdf(0x69a)+'einst'+_0x236bdf(0x2fb)+_0x236bdf(0x68e)+'erscr'+'ipt)';if(_0x3a864a['lastE'+'rror'])_0x412659+=_0x16a3fd[_0x236bdf(0x34f)](_0x236bdf(0x4ad)+'R:\x20',_0x3a864a['lastE'+_0x236bdf(0x12a)]);return _0x2837b3(_0x16a3fd[_0x236bdf(0x2b1)],_0x412659,_0x3a864a['uwmk'],null,[_0x489162(_0x16a3fd[_0x236bdf(0x4a8)],_0x16a3fd['DhreZ'],_0x283401(_0x16a3fd[_0x236bdf(0x65e)],()=>{var _0x3b40ca=_0x236bdf;try{if(_0x1cae99)_0x1cae99[_0x3b40ca(0x342)]('Unity'+'Engin'+'e.App'+'licat'+'ion',_0x3b40ca(0x244)+'arget'+'Frame'+'Rate',[-0xfec+0x29e+0xe3e]);}catch(_0x31f44a){}}))]);}function _0x2ab77d(_0x4ec671){var _0x2da5c0=_0xab5aee,_0x1da08a={'nklzT':function(_0x22fed5,_0x13c108,_0x5705ab){return _0x22fed5(_0x13c108,_0x5705ab);},'FxChZ':_0x3da971['GXUOM'],'Arylj':_0x3da971[_0x2da5c0(0x36a)],'Zpylz':function(_0x307738,_0x492d58,_0x7c7bb6,_0x2c8bbd,_0x2fca46){var _0x1030f0=_0x2da5c0;return _0x3da971[_0x1030f0(0x3eb)](_0x307738,_0x492d58,_0x7c7bb6,_0x2c8bbd,_0x2fca46);},'UDDww':function(_0x258a8a,_0x45e8d4,_0x9bc607,_0x1cfad3,_0x36385f){return _0x258a8a(_0x45e8d4,_0x9bc607,_0x1cfad3,_0x36385f);},'DoLYb':_0x2da5c0(0x1cc),'ZOurF':function(_0x373eef,_0x404461,_0x231042,_0x4c187b,_0x2774fa){return _0x3da971['zdmnH'](_0x373eef,_0x404461,_0x231042,_0x4c187b,_0x2774fa);},'XVGTK':function(_0x3a2f15){return _0x3a2f15();},'AYAXI':function(_0x3317c5){return _0x3317c5();},'hPCyH':_0x3da971[_0x2da5c0(0x5d3)],'JjfVe':'borqN','jdyPY':function(_0x7a954,_0x39beea){return _0x3da971['Lbydq'](_0x7a954,_0x39beea);},'sJfOT':function(_0xc3d101){return _0xc3d101();},'fPusd':_0x2da5c0(0x14a),'zXHTq':function(_0x5eeb8f){return _0x5eeb8f();},'rAwly':function(_0x3e5690){return _0x3da971['IkqyI'](_0x3e5690);},'lJjZp':'aria-'+_0x2da5c0(0x1a7)+'ed'};if(_0x3da971['VMIQj'](_0x2da5c0(0x17f),_0x2da5c0(0x2dc))){if(_0x4ec671===_0x2da5c0(0x453)+'t')return[_0x3da971[_0x2da5c0(0x377)](_0x30f5d7),_0x2837b3(_0x3da971['BREzQ'],_0x2da5c0(0x2d3)+_0x2da5c0(0x534)+_0x2da5c0(0x46a)+'Initi'+_0x2da5c0(0x412)+'keHea'+_0x2da5c0(0x563)+_0x2da5c0(0x1af)+_0x2da5c0(0x3da)+'.Loca'+_0x2da5c0(0x3c7)+'\x20so\x20n'+_0x2da5c0(0x600)+'g\x20can'+'\x20hurt'+_0x2da5c0(0x323)+_0x2da5c0(0x50a)+'ou.',_0x36bdc1[_0x2da5c0(0x5e0)],_0x18c33d=>{var _0x1577d7=_0x2da5c0;_0x36bdc1['god']=_0x18c33d,_0x3da971[_0x1577d7(0x5d1)](_0x2a9a2c),_0x5e963e('god',_0x18c33d),_0x5e963e(_0x3da971['aKEGy'],_0x18c33d);},[]),_0x2837b3(_0x3da971[_0x2da5c0(0x156)],'Skips'+'\x20Reco'+_0x2da5c0(0x604)+_0x2da5c0(0x40d)+'ick\x20s'+'o\x20the'+_0x2da5c0(0x26a)+'il\x20sp'+_0x2da5c0(0x2ae)+'\x20neve'+'r\x20adv'+_0x2da5c0(0x2a1),_0x36bdc1[_0x2da5c0(0x2c4)+'oil'],_0x293d50=>{var _0x44b4c0=_0x2da5c0;_0x36bdc1[_0x44b4c0(0x2c4)+_0x44b4c0(0x131)]=_0x293d50,_0x2a9a2c(),_0x1da08a[_0x44b4c0(0x12d)](_0x5e963e,_0x1da08a[_0x44b4c0(0x654)],_0x293d50);},[]),_0x3da971[_0x2da5c0(0x1f0)](_0x2837b3,_0x2da5c0(0x637)+_0x2da5c0(0x4f3),_0x2da5c0(0x321)+_0x2da5c0(0x122)+_0x2da5c0(0x599)+'nd\x20ma'+_0x2da5c0(0x22c)+_0x2da5c0(0x2c0)+_0x2da5c0(0x675)+'\x20your'+_0x2da5c0(0x2dd)+_0x2da5c0(0x306)+'ery\x202'+'00ms.',_0x36bdc1[_0x2da5c0(0x46b)+_0x2da5c0(0x400)],_0x5467ef=>{_0x36bdc1['noSpr'+'ead']=_0x5467ef,_0x2a9a2c();},[]),_0x2837b3(_0x3da971['GQnpd'],_0x3da971['rrpth'],_0x36bdc1[_0x2da5c0(0x4b1)+_0x2da5c0(0x5df)],_0x20d311=>{var _0x589008=_0x2da5c0;_0x36bdc1['rapid'+_0x589008(0x5df)]=_0x20d311,_0x2a9a2c();},[]),_0x3da971[_0x2da5c0(0x1f0)](_0x2837b3,_0x3da971['ejtLe'],_0x2da5c0(0x41d)+_0x2da5c0(0x275)+_0x2da5c0(0x3ea)+_0x2da5c0(0x5b0)+_0x2da5c0(0x4c5)+_0x2da5c0(0x52d)+_0x2da5c0(0x10f)+_0x2da5c0(0x1cd)+'le\x20if'+'\x20the\x20'+_0x2da5c0(0x2c6)+_0x2da5c0(0x51f)+_0x2da5c0(0x3d0)+'s.',_0x36bdc1['damag'+'eExp'],_0x21b051=>{var _0x57d204=_0x2da5c0;if(_0x57d204(0x227)===_0x57d204(0x5d5))return-0x96*-0x1b+-0x168c+0xf6*0x7;else _0x36bdc1['damag'+_0x57d204(0x30c)]=_0x21b051,_0x2a9a2c();},[_0x3da971[_0x2da5c0(0xf5)](_0x489162,_0x2da5c0(0x6a2)+_0x2da5c0(0x183)+'ue',null,_0x4a12e1(_0x36bdc1[_0x2da5c0(0x6a1)+_0x2da5c0(0x5eb)+'e'],0x24f4+0x1f0d*0x1+-0x7f*0x89,-0x1a69*0x1+0xf31+-0x464*-0x3,-0x4d+-0x871+0x8c3,_0x16663d=>{var _0x31b8c7=_0x2da5c0,_0x1b5cb8={'XHuFE':function(_0x233407){return _0x233407();}};_0x3da971[_0x31b8c7(0x499)](_0x3da971[_0x31b8c7(0x586)],'IbMWE')?(_0x36bdc1['damag'+'eValu'+'e']=_0x16663d,_0x3da971[_0x31b8c7(0x289)](_0x2a9a2c)):(_0x1df26a['safeM'+_0x31b8c7(0x20a)]=_0x3da8fe,_0x1b5cb8[_0x31b8c7(0x386)](_0x15c3d3),_0xa1b722['reloa'+'d']());}))]),_0x2837b3(_0x3da971[_0x2da5c0(0x4de)],_0x3da971[_0x2da5c0(0x3d3)],_0x36bdc1['infAm'+_0x2da5c0(0x2b2)],_0x278de1=>{var _0x3f0a04=_0x2da5c0;if(_0x3f0a04(0x1d9)!==_0x3f0a04(0x1d9)){var _0x59fef5=_0x1da08a['Arylj'][_0x3f0a04(0x19f)]('|'),_0x5525ba=0xa89*-0x3+-0xf14*0x2+0xa3*0x61;while(!![]){switch(_0x59fef5[_0x5525ba++]){case'0':_0x1da08a[_0x3f0a04(0x172)](_0x52f160,_0x12c1a0,0x16f1+-0xd4b+0x97e*-0x1,'f32',_0x330edd);continue;case'1':_0x3d4dc0(_0x2afb23,0x3d*0xa3+0x454*-0x2+-0x133*0x19,_0x3f0a04(0x1cc),_0x4565be);continue;case'2':_0x1da08a[_0x3f0a04(0x10c)](_0x258e3c,_0x23ab03,0x1c63+-0x2*0x1072+0x4ad,'f32',_0x5e6099);continue;case'3':_0x1da08a[_0x3f0a04(0x172)](_0x392010,_0x3f289f,-0x1c52+0x1*0x16a+-0x1*-0x1b04,_0x1da08a[_0x3f0a04(0x584)],_0x1ed428);continue;case'4':_0x496ee2(_0x495151,-0x1*0x263b+-0x239*-0x1+0x2422,_0x1da08a['DoLYb'],_0x6d5d01);continue;case'5':_0x1da08a[_0x3f0a04(0x67e)](_0x19e6de,_0x1eb659,0x2*0xbe9+0x29*0x2+0x4*-0x5fd,'f32',_0x390b0f);continue;}break;}}else _0x36bdc1[_0x3f0a04(0x1aa)+_0x3f0a04(0x2b2)]=_0x278de1,_0x1da08a[_0x3f0a04(0x191)](_0x2a9a2c);},[_0x3d95b9(_0x3da971[_0x2da5c0(0x394)])])];if(_0x3da971['Vcqti'](_0x4ec671,_0x3da971[_0x2da5c0(0x511)]))return[_0x2837b3(_0x3da971[_0x2da5c0(0x2f4)],_0x2da5c0(0x551)+'s\x20all'+_0x2da5c0(0x115)+_0x2da5c0(0x3fb)+_0x2da5c0(0x268)+'speed'+'\x20limi'+'ts\x20pl'+_0x2da5c0(0x32a)+_0x2da5c0(0x66b)+_0x2da5c0(0x114)+'.',_0x3da971[_0x2da5c0(0x345)](_0x36bdc1['speed'+'Pct'],0x16*0x70+0x25a4+0x3*-0xfa0),null,[_0x3da971[_0x2da5c0(0xf5)](_0x489162,_0x2da5c0(0x1a9)+'\x20%','100\x20='+'\x20defa'+'ult',_0x4a12e1(_0x36bdc1[_0x2da5c0(0x4a5)+'Pct'],0xdd7+0x21eb+-0x2f90,-0x1*-0x24a7+0x29*0xb+-0x253e,-0x42a+-0x1*-0xeed+-0x1*0xabe,_0x449cf4=>{var _0x1cfa35=_0x2da5c0;_0x36bdc1['speed'+_0x1cfa35(0x225)]=_0x449cf4,_0x2a9a2c();}))]),_0x2837b3(_0x2da5c0(0x22e)+_0x2da5c0(0x4cc)+'vity',_0x3da971['NIHcd'],_0x3da971[_0x2da5c0(0x345)](_0x36bdc1['jumpP'+'ct'],0x11*-0x79+-0x243*-0x7+-0x768)||_0x3da971[_0x2da5c0(0x27d)](_0x36bdc1[_0x2da5c0(0x64e)+_0x2da5c0(0x25f)],-0x87e+-0x21f5+0x2ad7),null,[_0x489162('Jump\x20'+'%',null,_0x3da971[_0x2da5c0(0x1f0)](_0x4a12e1,_0x36bdc1['jumpP'+'ct'],-0x89*0x36+0x5*0x6fb+0x1*-0x5cf,0x1e52+-0x635+-0x16f1,0x19c0+-0xc47+-0xd74,_0x3f027a=>{var _0x36c127=_0x2da5c0,_0xc9a68a={'nOGbx':'selec'+'t'};if(_0x36c127(0x1ad)==='bbPKR'){var _0x3cbf83=(_0x36c127(0x238)+_0x36c127(0x120)+'3')['split']('|'),_0xb8f198=-0x9b4+-0x11ce*0x1+0x1*0x1b82;while(!![]){switch(_0x3cbf83[_0xb8f198++]){case'0':_0x9cb5a6['value']=_0x561247;continue;case'1':_0x9cb5a6[_0x36c127(0x2fa)+_0x36c127(0x67f)]=()=>_0x41d0dd(_0x9cb5a6[_0x36c127(0x439)]);continue;case'2':_0x9cb5a6['class'+'Name']=_0x36c127(0x56a)+_0x36c127(0x19b);continue;case'3':return _0x9cb5a6;case'4':for(var [_0x1a7293,_0x385e41]of _0xee78cc){var _0x24cc0b=_0x1f760f[_0x36c127(0x13d)+_0x36c127(0x4a1)+_0x36c127(0x320)](_0x36c127(0x4c1)+'n');_0x24cc0b[_0x36c127(0x439)]=_0x1a7293,_0x24cc0b[_0x36c127(0x42b)+_0x36c127(0x301)+'t']=_0x385e41,_0x9cb5a6[_0x36c127(0x2cb)+_0x36c127(0x3bb)+'d'](_0x24cc0b);}continue;case'5':var _0x9cb5a6=_0x391cad[_0x36c127(0x13d)+_0x36c127(0x4a1)+_0x36c127(0x320)](_0xc9a68a[_0x36c127(0x635)]);continue;}break;}}else _0x36bdc1['jumpP'+'ct']=_0x3f027a,_0x1da08a[_0x36c127(0x590)](_0x2a9a2c);})),_0x489162('Gravi'+_0x2da5c0(0x50b),_0x3da971['TukNr'],_0x4a12e1(_0x36bdc1['gravi'+'tyPct'],0x9cb+-0x2*0x8a8+0x78f,0xe6e+-0x1*-0x1875+-0x261b,-0x835+-0x1db3+-0x25ed*-0x1,_0x84c909=>{var _0x18faaa=_0x2da5c0;_0x36bdc1[_0x18faaa(0x64e)+'tyPct']=_0x84c909,_0x2a9a2c();}))]),_0x2837b3(_0x3da971['HtFYF'],_0x3da971['FrbFL'],_0x36bdc1[_0x2da5c0(0x459)],_0x3acee3=>{var _0x24dd38=_0x2da5c0;_0x36bdc1[_0x24dd38(0x459)]=_0x3acee3,_0x2a9a2c();},[])];if(_0x3da971['HYkul'](_0x4ec671,_0x2da5c0(0x3a6)+'l')){if(_0x3da971['WrtuT'](_0x3da971['eXQoH'],_0x3da971['rHhlL']))return[_0x2837b3(_0x2da5c0(0x21f)+_0x2da5c0(0x69d),_0x2da5c0(0x3b8)+_0x2da5c0(0x680)+_0x2da5c0(0x3a4)+_0x2da5c0(0x3c0)+_0x2da5c0(0x166)+_0x2da5c0(0x1c1)+'.',_0x36bdc1[_0x2da5c0(0x330)+'rokes'],_0x15ea89=>{var _0x6dc3ab=_0x2da5c0;_0x36bdc1[_0x6dc3ab(0x330)+_0x6dc3ab(0x69d)]=_0x15ea89,_0x2a9a2c();},[_0x489162(_0x2da5c0(0x32c)+_0x2da5c0(0x100),null,_0x35dc83(_0x36bdc1[_0x2da5c0(0x512)],[['bl',_0x3da971[_0x2da5c0(0x2d6)]],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x3da971['OAREl']]],_0xdb2c58=>{var _0x3ac4c3=_0x2da5c0;if(_0x1da08a[_0x3ac4c3(0x61b)]===_0x3ac4c3(0x418))_0x36bdc1[_0x3ac4c3(0x512)]=_0xdb2c58,_0x1da08a[_0x3ac4c3(0x590)](_0x2a9a2c);else{var _0x12637a=_0x325131[_0x3ac4c3(0x43e)+'ve'];if(_0x12637a)try{_0x12637a['enabl'+'ed']=![];}catch(_0x11cb5a){}}})),_0x489162(_0x3da971['QDInN'],null,_0x4a12e1(_0x36bdc1['ksSca'+'le'],-0x804+-0x5a5+0xda9+0.6,-0x1ed*-0x7+-0x1576+-0x1c*-0x49+0.6000000000000001,-0x169*-0xf+-0x184f+0x194*0x2+0.05,_0x3a8623=>{var _0x10be5a=_0x2da5c0;if(_0x1da08a[_0x10be5a(0x426)]===_0x10be5a(0x1e9)){if(_0x2e043d)_0x286009['call']('Unity'+'Engin'+_0x10be5a(0x2fc)+_0x10be5a(0x450)+_0x10be5a(0x100),'set_t'+'arget'+_0x10be5a(0x52c)+_0x10be5a(0x5e6),[-0xf4b+-0x1*0x1687+-0xf2*-0x29]);}else _0x36bdc1[_0x10be5a(0x5ef)+'le']=_0x3a8623,_0x1da08a[_0x10be5a(0x590)](_0x2a9a2c);})),_0x3da971[_0x2da5c0(0x39b)](_0x489162,_0x2da5c0(0x2d8)+'eadou'+'t',null,_0x1701b5(_0x36bdc1[_0x2da5c0(0x1ce)],_0x428c2f=>{var _0x4211e5=_0x2da5c0;if(_0x3da971[_0x4211e5(0x10e)]('YHcNS',_0x3da971['FvriO'])){var _0x58d752=(_0x4211e5(0x20c)+_0x4211e5(0x652)+'5')['split']('|'),_0x331640=-0x13*-0x13e+-0x2273+0xad9;while(!![]){switch(_0x58d752[_0x331640++]){case'0':_0x15c733[_0x4211e5(0x42b)+_0x4211e5(0x301)+'t']=_0xa08b7c;continue;case'1':var _0x15c733=_0x122993['creat'+'eElem'+_0x4211e5(0x320)]('style');continue;case'2':_0x32cf2d=_0x158833();continue;case'3':_0x3bdf7c[_0x4211e5(0x2cb)+_0x4211e5(0x3bb)+'d'](_0x2ad1db);continue;case'4':_0x325c3e[_0x4211e5(0x2cb)+_0x4211e5(0x3bb)+'d'](_0x15c733);continue;case'5':_0x1da08a['jdyPY'](_0x5a6779,()=>_0x1ca22c[_0x4211e5(0x4e9)+_0x4211e5(0x61d)][_0x4211e5(0x3e6)](_0x4211e5(0x142)));continue;}break;}}else _0x36bdc1['ksCps']=_0x428c2f,_0x2a9a2c();}))]),_0x3da971[_0x2da5c0(0x359)](_0x2837b3,_0x3da971[_0x2da5c0(0x658)],_0x3da971[_0x2da5c0(0x606)],_0x36bdc1[_0x2da5c0(0x1fc)+_0x2da5c0(0x63b)],_0x171144=>{var _0x1f3a92=_0x2da5c0;_0x36bdc1[_0x1f3a92(0x1fc)+'hair']=_0x171144,_0x2a9a2c();},[_0x489162(_0x3da971[_0x2da5c0(0x490)],null,_0x4a12e1(_0x36bdc1['chSiz'+'e'],0x968+-0xf41+-0x3*-0x1f3+0.5,0x19*-0x8b+-0x1*0xd73+0x6c2*0x4+0.5,-0x1f49*0x1+-0x2*-0x14c+0x1cb1+0.1,_0x29f792=>{_0x36bdc1['chSiz'+'e']=_0x29f792,_0x2a9a2c();})),_0x3da971[_0x2da5c0(0x347)](_0x489162,_0x3da971[_0x2da5c0(0x392)],null,_0x3a62c7(_0x36bdc1[_0x2da5c0(0x5f6)+'or'],_0x46272f=>{var _0x11f98e=_0x2da5c0;_0x3da971[_0x11f98e(0x345)](_0x11f98e(0x1d6),_0x11f98e(0x1d6))?(_0x111ad5[_0x11f98e(0x4a5)+_0x11f98e(0x225)]=_0x520917,_0x1da08a[_0x11f98e(0x191)](_0x55179c)):(_0x36bdc1['chCol'+'or']=_0x46272f,_0x2a9a2c());}))]),_0x2837b3(_0x3da971[_0x2da5c0(0x434)],_0x2da5c0(0x41a)+'verla'+'y.',_0x36bdc1[_0x2da5c0(0x66f)],null,[_0x489162('FPS\x20c'+_0x2da5c0(0x686)+'r',null,_0x3da971[_0x2da5c0(0x23b)](_0x1701b5,_0x36bdc1['fps'],_0x367059=>{var _0x50789d=_0x2da5c0;_0x36bdc1[_0x50789d(0x66f)]=_0x367059,_0x3da971[_0x50789d(0x5d1)](_0x2a9a2c);})),_0x3da971[_0x2da5c0(0x52a)](_0x3d95b9,'No\x20en'+_0x2da5c0(0x50f)+'ounte'+_0x2da5c0(0x1f8)+_0x2da5c0(0x5d6)+_0x2da5c0(0x6af)+'as\x20no'+'\x20GetV'+_0x2da5c0(0x1f1)+_0x2da5c0(0x50d)+'ers\x20t'+_0x2da5c0(0x666)+'gybac'+_0x2da5c0(0x401))])];else _0x43a365['hookN'+_0x2da5c0(0x4db)+'il']=_0x58ffcc,_0x1da08a['XVGTK'](_0x502c25);}if(_0x3da971[_0x2da5c0(0x125)](_0x4ec671,_0x2da5c0(0x1d5)))return[_0x2837b3(_0x3da971[_0x2da5c0(0x4f8)],_0x2da5c0(0x42e)+_0x2da5c0(0x363)+'-io_*'+'\x20bann'+_0x2da5c0(0x449)+'ots.',_0x36bdc1[_0x2da5c0(0x160)+'ck'],_0x1e5363=>{var _0xeea7bd=_0x2da5c0;_0x36bdc1[_0xeea7bd(0x160)+'ck']=_0x1e5363,_0x2a9a2c();},[_0x3d95b9(_0x3da971['afbcQ'])])];return[_0x2837b3(_0x3da971[_0x2da5c0(0x539)],_0x3da971['qJKft'],_0x36bdc1['safeM'+'ode'],_0x2e0fbc=>{var _0x422f6d=_0x2da5c0;_0x36bdc1[_0x422f6d(0x136)+'ode']=_0x2e0fbc,_0x1da08a['sJfOT'](_0x2a9a2c),location['reloa'+'d']();},[_0x3d95b9('Appli'+_0x2da5c0(0x2d1)+_0x2da5c0(0x48b)+_0x2da5c0(0x249)+_0x2da5c0(0x6b7)+_0x2da5c0(0x43a)+'load\x20'+_0x2da5c0(0x1f7)+_0x2da5c0(0x5a7)+'de,\x20t'+'he\x20fr'+_0x2da5c0(0x433)+_0x2da5c0(0x548)+'ok-re'+_0x2da5c0(0x195)+_0x2da5c0(0x64a)+'ll\x20me'+_0x2da5c0(0x62e)+'hooks'+_0x2da5c0(0x5a2)+_0x2da5c0(0x2ba)+_0x2da5c0(0x481))]),_0x2837b3('Hook\x20'+'risk\x20'+_0x2da5c0(0x35c)+_0x2da5c0(0x687),_0x3da971[_0x2da5c0(0x3c3)],_0x36bdc1[_0x2da5c0(0x35d)+'od']||_0x36bdc1[_0x2da5c0(0x35d)+_0x2da5c0(0x408)]||_0x36bdc1[_0x2da5c0(0x16a)+_0x2da5c0(0x4db)+'il']||_0x36bdc1['hookC'+_0x2da5c0(0x564)+'e'],_0xbebbd8=>{var _0xc61a42=_0x2da5c0;_0x1da08a[_0xc61a42(0x1c9)]===_0x1da08a[_0xc61a42(0x1c9)]?(_0x36bdc1[_0xc61a42(0x35d)+'od']=_0xbebbd8,_0x36bdc1[_0xc61a42(0x35d)+_0xc61a42(0x408)]=_0xbebbd8,_0x36bdc1[_0xc61a42(0x16a)+'oReco'+'il']=_0xbebbd8,_0x36bdc1[_0xc61a42(0xf6)+'aptur'+'e']=_0xbebbd8,_0x2a9a2c(),location[_0xc61a42(0x366)+'d']()):_0x34480b(!_0x2b6087);},[_0x3d95b9('Appli'+_0x2da5c0(0x2d1)+'\x20relo'+_0x2da5c0(0xea)),_0x3da971[_0x2da5c0(0xf5)](_0x489162,'god\x20('+_0x2da5c0(0x447)+_0x2da5c0(0x643)+_0x2da5c0(0x405)+_0x2da5c0(0x444)+_0x2da5c0(0x423)+'h)',null,_0x1701b5(_0x36bdc1[_0x2da5c0(0x35d)+'od'],_0x53bbda=>{_0x36bdc1['hookG'+'od']=_0x53bbda,_0x3da971['rCDBc'](_0x2a9a2c);})),_0x3da971['UjwaF'](_0x489162,_0x3da971['iEJKU'],null,_0x1701b5(_0x36bdc1[_0x2da5c0(0x35d)+_0x2da5c0(0x408)],_0xb5f524=>{var _0x2fd8a6=_0x2da5c0;_0x36bdc1[_0x2fd8a6(0x35d)+_0x2fd8a6(0x408)]=_0xb5f524,_0x2a9a2c();})),_0x489162(_0x3da971[_0x2da5c0(0x38b)],null,_0x1701b5(_0x36bdc1[_0x2da5c0(0x16a)+_0x2da5c0(0x4db)+'il'],_0x11aba7=>{var _0x1854b2=_0x2da5c0;_0x36bdc1[_0x1854b2(0x16a)+'oReco'+'il']=_0x11aba7,_0x1da08a['zXHTq'](_0x2a9a2c);})),_0x489162(_0x2da5c0(0x382)+_0x2da5c0(0x66e)+_0x2da5c0(0x68b)+'eRunn'+_0x2da5c0(0x549)+'\x20IsGr'+_0x2da5c0(0x1c7)+'d)','no\x20ch'+_0x2da5c0(0x5c4)+_0x2da5c0(0x49b)+'witho'+_0x2da5c0(0x49f)+'is',_0x3da971[_0x2da5c0(0x45f)](_0x1701b5,_0x36bdc1['hookC'+_0x2da5c0(0x564)+'e'],_0x54d1cd=>{var _0x3edcc4=_0x2da5c0;_0x36bdc1[_0x3edcc4(0xf6)+_0x3edcc4(0x564)+'e']=_0x54d1cd,_0x1da08a['rAwly'](_0x2a9a2c);}))]),_0x2837b3(_0x3da971[_0x2da5c0(0x13c)],_0x2da5c0(0x279)+'les\x20C'+_0x2da5c0(0x35a)+_0x2da5c0(0x38e)+_0x2da5c0(0x59c)+'ors\x20a'+'t\x20sta'+_0x2da5c0(0x60a)+_0x2da5c0(0x3a9)+'topDe'+'tecti'+'on().'+_0x2da5c0(0x2ee)+_0x2da5c0(0x307),_0x36bdc1['actkK'+'ill'],_0x283115=>{var _0x2dc688=_0x2da5c0;_0x2dc688(0x4dd)!=='BJDkp'?(_0x36bdc1[_0x2dc688(0x66d)+_0x2dc688(0x2f8)]=_0x283115,_0x2a9a2c()):_0x2c0f19[_0x2dc688(0x204)+'ed']=![];},[_0x3d95b9(_0x2da5c0(0x233)+'amage'+_0x2da5c0(0x291)+'d\x20gre'+_0x2da5c0(0x3c5)+_0x2da5c0(0x226)+_0x2da5c0(0x31b)+_0x2da5c0(0x4b0)+'even\x20'+_0x2da5c0(0x2b6)+'this\x20'+_0x2da5c0(0x1f2),!![])]),_0x2837b3(_0x3da971['wZYUc'],_0x3da971[_0x2da5c0(0x59d)],!![],null,[_0x489162(_0x2da5c0(0x29f)+_0x2da5c0(0x67b)+_0x2da5c0(0x567)+'s',null,_0x283401(_0x2da5c0(0x6ad),()=>{var _0x56c13e=_0x2da5c0;_0x36bdc1={..._0x38669c},_0x2a9a2c(),location[_0x56c13e(0x366)+'d']();}))])];}else{_0x539482['stopP'+_0x2da5c0(0x4c7)+_0x2da5c0(0x114)]();var _0x537603=_0x528cef['getAt'+_0x2da5c0(0x1e8)+'te']('aria-'+'check'+'ed')!==_0x2da5c0(0x380);_0x44ad9f[_0x2da5c0(0x283)+_0x2da5c0(0x1e8)+'te'](_0x1da08a[_0x2da5c0(0x1d1)],_0xbb68fc(_0x537603)),_0x1da08a['jdyPY'](_0x2e4604,_0x537603);}}var _0x5cf4b2=null;function _0x5ca007(_0x3ff27d){var _0x2f62c9=_0xab5aee,_0x1012b4={'shBKA':function(_0x3f51ec,_0x4896d6){return _0x3f51ec+_0x4896d6;},'LARvb':_0x16a3fd[_0x2f62c9(0x362)],'jZSXh':function(_0x1e11fd,_0x464661){return _0x1e11fd+_0x464661;},'ywNTO':_0x2f62c9(0x373)+'s','HmIJQ':'loadi'+'ng','RlFaV':_0x16a3fd['eDXyM']};if(_0x16a3fd[_0x2f62c9(0x5bf)](_0x16a3fd['DgswA'],_0x16a3fd[_0x2f62c9(0x15b)]))_0x2bc1cc['textC'+_0x2f62c9(0x301)+'t']=_0x154cfd['safeM'+_0x2f62c9(0x20a)]?_0x2f62c9(0x524)+_0x2f62c9(0x1f6)+_0x2f62c9(0x52b)+'rlay\x20'+_0x2f62c9(0x585)+'\x20no\x20h'+_0x2f62c9(0x310)+'(relo'+_0x2f62c9(0x1b6)+'\x20exit'+')':_0x384225['uwmk']?_0x1012b4[_0x2f62c9(0x1dd)](_0x1012b4['shBKA'](_0x1012b4['LARvb']+(_0x544225[_0x2f62c9(0x15e)+_0x2f62c9(0x133)]?_0x1012b4['jZSXh'](_0x464733[_0x2f62c9(0x15e)+'Ok'],'/')+_0x401c94['hooks'+_0x2f62c9(0x133)]+_0x1012b4[_0x2f62c9(0x356)]:'0\x20hoo'+_0x2f62c9(0x54c)+_0x2f62c9(0x639)+'all\x20o'+_0x2f62c9(0x1bc)),_0x2f62c9(0x51c)+'me\x20')+(_0x2efa38['gameL'+'oaded']?'loade'+'d':_0x1012b4[_0x2f62c9(0x317)])+(_0x2f62c9(0x1a6)+_0x2f62c9(0x2df)+'\x20'),_0xd8d392[_0x2f62c9(0x647)+_0x2f62c9(0x5e4)]?_0x1012b4[_0x2f62c9(0x2f6)]:'none')+(_0x2f62c9(0x42c)+_0x2f62c9(0x602)+'t\x20')+(_0x5872c3['movem'+'ents']?'held':'none')+(_0x5a80f0[_0x2f62c9(0x478)+_0x2f62c9(0x12a)]?'\x20|\x20ER'+'R:\x20'+_0x10f947[_0x2f62c9(0x478)+_0x2f62c9(0x12a)]:''):'UWMK\x20'+_0x2f62c9(0x631)+'NG\x20-\x20'+'overl'+_0x2f62c9(0x3c8)+_0x2f62c9(0x69a)+_0x2f62c9(0x187)+'all\x20t'+'he\x20us'+_0x2f62c9(0x381)+_0x2f62c9(0x27b);else{_0x4b7e61=_0x3ff27d;if(!_0x5cf4b2){var _0x24e22f=(_0x2f62c9(0x1ae)+'|5|0|'+'2')[_0x2f62c9(0x19f)]('|'),_0x519953=0x645+-0x1*0xe82+0x83d;while(!![]){switch(_0x24e22f[_0x519953++]){case'0':_0x52c931[_0x2f62c9(0x2cb)+_0x2f62c9(0x3bb)+'d'](_0x5cf4b2);continue;case'1':_0x1216c[_0x2f62c9(0x42b)+'onten'+'t']=_0x15ea2b;continue;case'2':_0x16a3fd[_0x2f62c9(0x5a6)](requestAnimationFrame,()=>_0x5cf4b2[_0x2f62c9(0x4e9)+'List']['add'](_0x2f62c9(0x142)));continue;case'3':var _0x1216c=document[_0x2f62c9(0x13d)+'eElem'+_0x2f62c9(0x320)]('style');continue;case'4':_0x52c931['appen'+_0x2f62c9(0x3bb)+'d'](_0x1216c);continue;case'5':_0x5cf4b2=_0x16a3fd[_0x2f62c9(0x196)](_0x249a2b);continue;}break;}}_0x5cf4b2['class'+_0x2f62c9(0x61d)]['toggl'+'e'](_0x16a3fd[_0x2f62c9(0x4f0)],_0x3ff27d);}}function _0x44f60b(){var _0x4bcf06=_0xab5aee;_0x3da971[_0x4bcf06(0x52a)](_0x5ca007,!_0x4b7e61);}function _0x249a2b(){var _0x2a2fdc=_0xab5aee,_0x1765a3={'shcLm':function(_0xa5839,_0x2de990){var _0x5e3f43=_0xe814;return _0x16a3fd[_0x5e3f43(0x501)](_0xa5839,_0x2de990);},'AhCSD':function(_0x474170,_0x44dff3){return _0x474170===_0x44dff3;},'PapRS':function(_0x3d91ca,_0x39cf10){var _0x7797a5=_0xe814;return _0x16a3fd[_0x7797a5(0x154)](_0x3d91ca,_0x39cf10);},'NMHwf':function(_0xc013e4,_0x623e2d){var _0x481b3b=_0xe814;return _0x16a3fd[_0x481b3b(0x53d)](_0xc013e4,_0x623e2d);},'YOczx':function(_0xf4e4e1,_0x1a4d7b){return _0xf4e4e1+_0x1a4d7b;},'qptvs':function(_0x3a1f8a,_0x4d88bb){var _0x4b6015=_0xe814;return _0x16a3fd[_0x4b6015(0x597)](_0x3a1f8a,_0x4d88bb);},'LAmuI':'none','HKYoG':_0x2a2fdc(0x4ad)+_0x2a2fdc(0x562),'xAuHg':_0x2a2fdc(0xf2)+'MISSI'+'NG\x20-\x20'+_0x2a2fdc(0x4fd)+_0x2a2fdc(0x3c8)+'ly\x20(r'+_0x2a2fdc(0x187)+'all\x20t'+_0x2a2fdc(0x68e)+_0x2a2fdc(0x381)+_0x2a2fdc(0x27b)},_0x11ac20=document[_0x2a2fdc(0x13d)+'eElem'+_0x2a2fdc(0x320)](_0x16a3fd[_0x2a2fdc(0x351)]);_0x11ac20[_0x2a2fdc(0x4e9)+_0x2a2fdc(0x517)]=_0x16a3fd[_0x2a2fdc(0x3ed)];var _0x37bc88=document['creat'+'eElem'+_0x2a2fdc(0x320)]('nav');_0x37bc88[_0x2a2fdc(0x4e9)+_0x2a2fdc(0x517)]=_0x16a3fd[_0x2a2fdc(0x2fe)];var _0x4d52cf=document['creat'+_0x2a2fdc(0x4a1)+_0x2a2fdc(0x320)](_0x16a3fd[_0x2a2fdc(0x351)]);_0x4d52cf[_0x2a2fdc(0x4e9)+_0x2a2fdc(0x517)]='mn-lo'+'go',_0x4d52cf[_0x2a2fdc(0x407)+_0x2a2fdc(0x1e2)]=_0x16a3fd[_0x2a2fdc(0x181)],_0x37bc88['appen'+_0x2a2fdc(0x3bb)+'d'](_0x4d52cf);var _0x1282eb=document[_0x2a2fdc(0x13d)+_0x2a2fdc(0x4a1)+'ent'](_0x2a2fdc(0x1d4));_0x1282eb['class'+_0x2a2fdc(0x517)]=_0x2a2fdc(0x62f)+'in';var _0x3778a4=document[_0x2a2fdc(0x13d)+_0x2a2fdc(0x4a1)+'ent']('heade'+'r');_0x3778a4['class'+_0x2a2fdc(0x517)]='mn-to'+'p';var _0x374442=document[_0x2a2fdc(0x13d)+_0x2a2fdc(0x4a1)+_0x2a2fdc(0x320)](_0x16a3fd[_0x2a2fdc(0x351)]);_0x374442[_0x2a2fdc(0x4e9)+'Name']='mn-ti'+'tles';var _0x2bb31d=document['creat'+_0x2a2fdc(0x4a1)+_0x2a2fdc(0x320)]('h2');_0x2bb31d['class'+'Name']=_0x2a2fdc(0x580),_0x2bb31d['textC'+_0x2a2fdc(0x301)+'t']=_0x16a3fd[_0x2a2fdc(0x2ec)];var _0x1a927b=document[_0x2a2fdc(0x13d)+'eElem'+_0x2a2fdc(0x320)](_0x2a2fdc(0x452));_0x1a927b['class'+'Name']=_0x2a2fdc(0x256)+'b',_0x1a927b['textC'+'onten'+'t']=_0x2a2fdc(0x198)+'trike'+_0x2a2fdc(0x354)+_0x2a2fdc(0x169),_0x374442[_0x2a2fdc(0x2cb)+'d'](_0x2bb31d,_0x1a927b);var _0x17fcd1=document[_0x2a2fdc(0x13d)+_0x2a2fdc(0x4a1)+_0x2a2fdc(0x320)](_0x16a3fd['WQWHg']);_0x17fcd1['type']=_0x2a2fdc(0x34d)+'n',_0x17fcd1[_0x2a2fdc(0x4e9)+_0x2a2fdc(0x517)]=_0x16a3fd['NIAkY'],_0x17fcd1['title']=_0x2a2fdc(0x25c),_0x17fcd1[_0x2a2fdc(0x407)+_0x2a2fdc(0x1e2)]='<svg\x20'+_0x2a2fdc(0x2cc)+_0x2a2fdc(0x67a)+_0x2a2fdc(0x3f7)+_0x2a2fdc(0x3b9)+'<path'+_0x2a2fdc(0x4bc)+_0x2a2fdc(0x589)+_0x2a2fdc(0x663)+_0x2a2fdc(0x2ed)+_0x2a2fdc(0x331)+_0x2a2fdc(0x640)+_0x2a2fdc(0x316),_0x17fcd1['oncli'+'ck']=()=>_0x5ca007(![]),_0x3778a4['appen'+'d'](_0x374442,_0x17fcd1);var _0x57b1e1=document[_0x2a2fdc(0x13d)+_0x2a2fdc(0x4a1)+'ent'](_0x2a2fdc(0x1d4));_0x57b1e1[_0x2a2fdc(0x4e9)+_0x2a2fdc(0x517)]=_0x16a3fd['ulNWg'],_0x1282eb[_0x2a2fdc(0x2cb)+'d'](_0x3778a4,_0x57b1e1),_0x11ac20['appen'+'d'](_0x37bc88,_0x1282eb);var _0x513c65=new Map();for(var _0x13f358 of _0x486817){if(_0x16a3fd['pOtTi'](_0x2a2fdc(0x1b9),_0x2a2fdc(0x5b4)))_0x496fa4(),_0x3da971['IttWs'](_0x4ed1d1,_0x70f7a6(_0xa57539['value']));else{var _0x22abb6=document[_0x2a2fdc(0x13d)+'eElem'+'ent'](_0x2a2fdc(0x34d)+'n');_0x22abb6[_0x2a2fdc(0x19a)]='butto'+'n',_0x22abb6['class'+'Name']=_0x16a3fd[_0x2a2fdc(0x18d)],_0x22abb6['title']=_0x13f358[_0x2a2fdc(0x419)],_0x22abb6[_0x2a2fdc(0x407)+_0x2a2fdc(0x1e2)]=_0x16a3fd[_0x2a2fdc(0x6bd)]('<smal'+'l>'+_0x13f358['label'],'</sma'+'ll>'),_0x22abb6[_0x2a2fdc(0x1bf)+'ck']=(_0x3abd99=>()=>_0x2a30f2(_0x3abd99))(_0x13f358['id']),_0x513c65[_0x2a2fdc(0x2a7)](_0x13f358['id'],_0x22abb6),_0x37bc88['appen'+_0x2a2fdc(0x3bb)+'d'](_0x22abb6);}}function _0x2a30f2(_0x3ae529){var _0x5c2dad=_0x2a2fdc,_0x1f56f8=_0x3da971['xFQUX'][_0x5c2dad(0x19f)]('|'),_0xfcf575=0xb61+-0xf55+0x3f4;while(!![]){switch(_0x1f56f8[_0xfcf575++]){case'0':_0x2d05d3();continue;case'1':_0x173aac['cat']=_0x3ae529;continue;case'2':for(var [_0x3311df,_0x5a02bb]of _0x513c65)_0x5a02bb['class'+'List'][_0x5c2dad(0x6ac)+'e']('activ'+'e',_0x3da971[_0x5c2dad(0xf7)](_0x3311df,_0x3ae529));continue;case'3':_0x2bb31d[_0x5c2dad(0x42b)+_0x5c2dad(0x301)+'t']=_0x5c2dad(0x6b4)+_0x5c2dad(0x65d)+_0x5c2dad(0x30f)+_0x262d0[_0x5c2dad(0x419)];continue;case'4':var _0x262d0=_0x486817['find'](_0x1d6d77=>_0x1d6d77['id']===_0x3ae529)||_0x486817[-0x1790+0x162d+0x163];continue;case'5':_0x57b1e1['repla'+_0x5c2dad(0x326)+'ldren'](..._0x3da971[_0x5c2dad(0x52a)](_0x2ab77d,_0x3ae529));continue;}break;}}return _0x2a30f2(_0x173aac[_0x2a2fdc(0x2a3)]||_0x16a3fd['Ksgxs']),_0x16a3fd['sjiCe'](setInterval,()=>{var _0xf1d55c=_0x2a2fdc;if(!_0x4b7e61)return;var _0x43c126=_0x57b1e1[_0xf1d55c(0x2e3)+_0xf1d55c(0x1ab)];for(var _0x140170=-0x14e1+0xbc7+-0x5*-0x1d2;_0x1765a3[_0xf1d55c(0x197)](_0x140170,_0x43c126[_0xf1d55c(0x485)+'h']);_0x140170++){var _0x56e381=_0x43c126[_0x140170][_0xf1d55c(0x5c2)+'Selec'+_0xf1d55c(0x41c)](_0xf1d55c(0x543)+'desc');_0x56e381&&(_0x1765a3['AhCSD'](_0x56e381['textC'+_0xf1d55c(0x301)+'t'][_0xf1d55c(0x16f)+'Of']('UWMK'),0xe*-0xb1+-0x19f1*0x1+0x239f)||_0x56e381[_0xf1d55c(0x42b)+'onten'+'t'][_0xf1d55c(0x16f)+'Of']('SAFE')===-0x1*0xbc9+-0x2365+0x29f*0x12)&&(_0x56e381['textC'+_0xf1d55c(0x301)+'t']=_0x3a864a[_0xf1d55c(0x136)+'ode']?'SAFE\x20'+_0xf1d55c(0x1f6)+_0xf1d55c(0x52b)+'rlay\x20'+_0xf1d55c(0x585)+_0xf1d55c(0x36f)+_0xf1d55c(0x310)+'(relo'+_0xf1d55c(0x1b6)+'\x20exit'+')':_0x3a864a['uwmk']?_0x1765a3['PapRS'](_0x1765a3[_0xf1d55c(0xfd)](_0x1765a3['NMHwf'](_0x1765a3[_0xf1d55c(0x4b2)](_0x1765a3['NMHwf']('UWMK\x20'+'bound'+'\x20'+(_0x3a864a[_0xf1d55c(0x15e)+_0xf1d55c(0x133)]?_0x1765a3[_0xf1d55c(0x537)](_0x1765a3[_0xf1d55c(0xfd)](_0x3a864a['hooks'+'Ok']+'/',_0x3a864a[_0xf1d55c(0x15e)+_0xf1d55c(0x133)]),'\x20hook'+'s'):_0xf1d55c(0x5d9)+_0xf1d55c(0x54c)+_0xf1d55c(0x639)+'all\x20o'+'ff)'),'\x20|\x20ga'+_0xf1d55c(0x5ff)),_0x3a864a[_0xf1d55c(0x4e1)+_0xf1d55c(0x179)]?_0xf1d55c(0x4ac)+'d':_0xf1d55c(0x471)+'ng')+('\x20|\x20sh'+'ooter'+'\x20'),_0x3a864a[_0xf1d55c(0x647)+_0xf1d55c(0x5e4)]?_0xf1d55c(0x1a2):_0x1765a3['LAmuI']),_0xf1d55c(0x42c)+'vemen'+'t\x20')+(_0x3a864a['movem'+'ents']?_0xf1d55c(0x1a2):_0xf1d55c(0x526)),_0x3a864a[_0xf1d55c(0x478)+'rror']?_0x1765a3['HKYoG']+_0x3a864a[_0xf1d55c(0x478)+'rror']:''):_0x1765a3[_0xf1d55c(0x5ea)]);}},-0x222e+0x1a6*-0x5+0x2e54),_0x11ac20;}var _0x15ea2b='\x0a\x20\x20\x20\x20'+_0xab5aee(0x108)+_0xab5aee(0x2de)+_0xab5aee(0x5c7)+'itial'+_0xab5aee(0x3b6)+_0xab5aee(0x1c6)+_0xab5aee(0x628)+_0xab5aee(0x425)+_0xab5aee(0x3c9)+'order'+'-box;'+_0xab5aee(0x4e8)+'in:\x200'+_0xab5aee(0x5c1)+_0xab5aee(0x1be)+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+'Segoe'+'\x20UI\x22,'+'\x20syst'+'em-ui'+_0xab5aee(0x2b3)+'s-ser'+_0xab5aee(0x3f4)+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel\x20'+_0xab5aee(0x5c5)+_0xab5aee(0x16d)+':\x20abs'+_0xab5aee(0x59f)+_0xab5aee(0x3b0)+_0xab5aee(0x613)+_0xab5aee(0x6b5)+'botto'+'m:\x2024'+_0xab5aee(0x232)+_0xab5aee(0x625)+_0xab5aee(0x530)+_0xab5aee(0x617)+_0xab5aee(0x111)+'c(100'+'vw\x20-\x20'+_0xab5aee(0x574)+_0xab5aee(0x344)+'x-hei'+_0xab5aee(0x40b)+_0xab5aee(0x2fd)+_0xab5aee(0x575)+'\x20calc'+_0xab5aee(0x493)+_0xab5aee(0x2eb)+'8px))'+_0xab5aee(0x4c8)+'\x20\x20\x20di'+_0xab5aee(0x272)+':\x20fle'+'x;\x20ga'+_0xab5aee(0xf8)+_0xab5aee(0xf0)+_0xab5aee(0x59e)+_0xab5aee(0x22b)+_0xab5aee(0x294)+'order'+_0xab5aee(0x571)+_0xab5aee(0x2e5)+_0xab5aee(0x634)+_0xab5aee(0x45e)+_0xab5aee(0x1b0)+'ents:'+_0xab5aee(0x360)+_0xab5aee(0x4c8)+_0xab5aee(0x699)+_0xab5aee(0x554)+_0xab5aee(0x533)+'rgba('+'24,17'+',21,.'+'82);\x20'+_0xab5aee(0x582)+_0xab5aee(0x384)+'ilter'+':\x20blu'+_0xab5aee(0x6b3)+'x)\x20sa'+_0xab5aee(0x21b)+_0xab5aee(0x10d)+_0xab5aee(0x626)+_0xab5aee(0x28d)+'t-bac'+_0xab5aee(0x4eb)+_0xab5aee(0x503)+_0xab5aee(0x3cd)+'lur(2'+_0xab5aee(0x42a)+_0xab5aee(0x608)+_0xab5aee(0x45d)+'50%);'+'\x0a\x20\x20\x20\x20'+_0xab5aee(0x208)+_0xab5aee(0x4ab)+_0xab5aee(0x60d)+_0xab5aee(0x343)+_0xab5aee(0x445)+'gba(2'+'55,25'+_0xab5aee(0x155)+_0xab5aee(0x616)+_0xab5aee(0x145)+'et\x200\x20'+'1px\x200'+'\x20rgba'+_0xab5aee(0x467)+'255,2'+'55,.0'+_0xab5aee(0x293)+_0xab5aee(0x36e)+'\x2080px'+_0xab5aee(0x424)+'(0,0,'+_0xab5aee(0x29d)+_0xab5aee(0x3ce)+_0xab5aee(0x437)+_0xab5aee(0x689)+_0xab5aee(0x461)+'\x20tran'+_0xab5aee(0x692)+_0xab5aee(0x126)+'nslat'+'eY(18'+_0xab5aee(0x224)+_0xab5aee(0x45e)+'er-ev'+'ents:'+_0xab5aee(0x51a)+_0xab5aee(0x4a9)+'nsiti'+_0xab5aee(0x395)+_0xab5aee(0x689)+_0xab5aee(0x2c8)+'s\x20eas'+'e,\x20tr'+'ansfo'+'rm\x20.4'+_0xab5aee(0x357)+_0xab5aee(0x693)+_0xab5aee(0x57f)+'(.22,'+_0xab5aee(0x27a)+_0xab5aee(0x304)+_0xab5aee(0x1e1)+_0xab5aee(0x531)+'r:\x20#f'+_0xab5aee(0x3fa)+_0xab5aee(0x5c1)+_0xab5aee(0xf3)+'e:\x2013'+'px;\x20}'+_0xab5aee(0x3ab)+_0xab5aee(0x127)+'anel.'+_0xab5aee(0x142)+_0xab5aee(0x5a5)+_0xab5aee(0x19d)+_0xab5aee(0x194)+_0xab5aee(0x234)+_0xab5aee(0x3ec)+_0xab5aee(0x51a)+_0xab5aee(0x12e)+'nter-'+_0xab5aee(0x5b2)+_0xab5aee(0x4b6)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0xab5aee(0x148)+_0xab5aee(0x287)+_0xab5aee(0x1bd)+_0xab5aee(0x484)+_0xab5aee(0x358)+_0xab5aee(0x492)+_0xab5aee(0x559)+'ction'+_0xab5aee(0x651)+'umn;\x20'+_0xab5aee(0x1c3)+'-item'+'s:\x20ce'+'nter;'+'\x20gap:'+'\x204px;'+'\x20widt'+_0xab5aee(0x65f)+_0xab5aee(0x4af)+'lex:\x20'+_0xab5aee(0x3cf)+'\x20padd'+'ing:\x20'+_0xab5aee(0x430)+(_0xab5aee(0x1b2)+_0xab5aee(0x2e8)+'radiu'+_0xab5aee(0x274)+_0xab5aee(0x5b3)+_0xab5aee(0x1e1)+'backg'+_0xab5aee(0x30a)+':\x20rgb'+_0xab5aee(0x192)+',255,'+'255,.'+'025);'+_0xab5aee(0x3fc)+'shado'+_0xab5aee(0x684)+_0xab5aee(0x4ff)+_0xab5aee(0x343)+_0xab5aee(0x445)+'gba(2'+'55,25'+'5,255'+_0xab5aee(0x25a)+_0xab5aee(0x3b6)+'\x20\x20\x20.m'+_0xab5aee(0x5c6)+_0xab5aee(0x42f)+_0xab5aee(0x573)+_0xab5aee(0x4a2)+_0xab5aee(0x6ba)+'lace-'+'items'+_0xab5aee(0x4e0)+'ter;\x20'+_0xab5aee(0x645)+':\x2032p'+_0xab5aee(0x47c)+_0xab5aee(0x465)+_0xab5aee(0x4ef)+_0xab5aee(0x3b6)+'\x20\x20\x20.m'+_0xab5aee(0x5c6)+_0xab5aee(0x273)+_0xab5aee(0x37c)+'dth:\x20'+'25px;'+_0xab5aee(0x23c)+_0xab5aee(0x613)+_0xab5aee(0x4e3)+_0xab5aee(0x1a0)+_0xab5aee(0x58b)+_0xab5aee(0x673)+_0xab5aee(0x4d6)+_0xab5aee(0x1ba)+_0xab5aee(0x218)+'p-sha'+_0xab5aee(0x470)+'\x200\x204p'+_0xab5aee(0x103)+'a(255'+_0xab5aee(0x18b)+_0xab5aee(0x3be)+_0xab5aee(0x440)+'}\x0a\x20\x20\x20'+_0xab5aee(0x623)+'tab\x20{'+'\x20disp'+'lay:\x20'+'flex;'+_0xab5aee(0x2f7)+'n-ite'+_0xab5aee(0x34e)+_0xab5aee(0x152)+_0xab5aee(0x15a)+_0xab5aee(0x246)+_0xab5aee(0x497)+_0xab5aee(0x502)+_0xab5aee(0x152)+_0xab5aee(0x1fa)+_0xab5aee(0x525)+_0xab5aee(0x634)+'heigh'+_0xab5aee(0x438)+_0xab5aee(0x294)+'order'+':\x200;\x20'+_0xab5aee(0x576)+'r-rad'+_0xab5aee(0x456)+'10px;'+_0xab5aee(0x3ab)+_0xab5aee(0x3de)+_0xab5aee(0xf4)+_0xab5aee(0x594)+_0xab5aee(0x528)+_0xab5aee(0x4a3)+';\x20col'+_0xab5aee(0x32b)+_0xab5aee(0x265)+_0xab5aee(0x2b4)+'8,242'+',.4);'+'\x20curs'+_0xab5aee(0x1ca)+_0xab5aee(0x513)+_0xab5aee(0x5db)+_0xab5aee(0x4ee)+_0xab5aee(0x2d9)+_0xab5aee(0x53f)+'font-'+'weigh'+'t:\x2070'+_0xab5aee(0x51b)+_0xab5aee(0xfc)+'mn-ta'+_0xab5aee(0x369)+_0xab5aee(0x250)+'color'+_0xab5aee(0x420)+'a(246'+_0xab5aee(0x2e2)+'242,.'+_0xab5aee(0x3db)+_0xab5aee(0x3ab)+'.mn-t'+_0xab5aee(0x622)+'tive\x20'+'{\x20col'+_0xab5aee(0x4c9)+_0xab5aee(0x2e9)+'d;\x20ba'+_0xab5aee(0x554)+_0xab5aee(0x533)+_0xab5aee(0x5b5)+'255,1'+'07,15'+_0xab5aee(0x3bd)+_0xab5aee(0x3b6)+'\x20\x20\x20.m'+_0xab5aee(0x290)+_0xab5aee(0x110)+'lex:\x20'+_0xab5aee(0x116)+'n-wid'+'th:\x200'+';\x20dis'+_0xab5aee(0x555)+_0xab5aee(0x492)+';\x20fle'+'x-dir'+'ectio'+_0xab5aee(0x188)+'lumn;'+_0xab5aee(0x22d)+'\x20\x20.mn'+'-top\x20'+'{\x20dis'+'play:'+'\x20flex'+';\x20ali'+_0xab5aee(0x55c)+_0xab5aee(0x219)+'cente'+_0xab5aee(0x5af)+_0xab5aee(0x314)+'px;\x20p'+_0xab5aee(0x59e)+_0xab5aee(0x507)+_0xab5aee(0x1ec)+_0xab5aee(0x1e3)+_0xab5aee(0x4b9)+_0xab5aee(0x38f)+'ect:\x20'+_0xab5aee(0x3cf)+_0xab5aee(0x22d)+_0xab5aee(0x34a)+_0xab5aee(0x171)+'es\x20{\x20'+'flex:'+'\x201;\x20m'+_0xab5aee(0x4cf)+_0xab5aee(0x45c)+_0xab5aee(0x51b)+_0xab5aee(0xfc)+_0xab5aee(0x26c)+_0xab5aee(0x13b)+'t-siz'+_0xab5aee(0x410)+'px;\x20f'+'ont-w'+'eight'+_0xab5aee(0x3e4)+_0xab5aee(0x3b6)+'\x20\x20\x20.m'+_0xab5aee(0x4ec)+_0xab5aee(0x365)+_0xab5aee(0x4ee)+'ze:\x201'+_0xab5aee(0x48a)+'opaci')+(_0xab5aee(0x5a9)+'4;\x20}\x0a'+_0xab5aee(0xfc)+_0xab5aee(0x364)+'ose\x20{'+_0xab5aee(0x1bd)+'lay:\x20'+_0xab5aee(0x1c5)+'\x20plac'+_0xab5aee(0x5f2)+_0xab5aee(0x34e)+'enter'+_0xab5aee(0x1fa)+'th:\x202'+'8px;\x20'+_0xab5aee(0x4bd)+_0xab5aee(0x632)+_0xab5aee(0x294)+'order'+_0xab5aee(0x203)+'borde'+_0xab5aee(0x282)+'ius:\x20'+_0xab5aee(0x3bf)+_0xab5aee(0x20d)+_0xab5aee(0x30a)+_0xab5aee(0x126)+_0xab5aee(0x31e)+_0xab5aee(0x5bc)+_0xab5aee(0x6b6)+_0xab5aee(0x2b7)+_0xab5aee(0x47d)+_0xab5aee(0x469)+'ity:\x20'+'.45;\x20'+'curso'+_0xab5aee(0x2a8)+_0xab5aee(0x28e)+_0xab5aee(0x3b6)+'\x20\x20\x20.m'+'n-clo'+_0xab5aee(0x552)+_0xab5aee(0x207)+_0xab5aee(0x469)+_0xab5aee(0x577)+_0xab5aee(0x14f)+'ckgro'+_0xab5aee(0x533)+'rgba('+_0xab5aee(0x5ba)+'55,25'+_0xab5aee(0x129)+_0xab5aee(0x1e7)+_0xab5aee(0xfc)+'mn-cl'+_0xab5aee(0x48d)+_0xab5aee(0x228)+_0xab5aee(0x645)+':\x2014p'+_0xab5aee(0x47c)+_0xab5aee(0x465)+_0xab5aee(0x496)+_0xab5aee(0x3d8)+'l:\x20no'+'ne;\x20s'+_0xab5aee(0x210)+_0xab5aee(0x53b)+_0xab5aee(0x2a0)+'olor;'+_0xab5aee(0x458)+_0xab5aee(0x17e)+'dth:\x20'+'2;\x20st'+_0xab5aee(0x266)+'linec'+_0xab5aee(0xff)+'ound;'+'\x20}\x0a\x20\x20'+_0xab5aee(0x34a)+_0xab5aee(0x60e)+_0xab5aee(0x55a)+_0xab5aee(0x2aa)+';\x20min'+_0xab5aee(0x10a)+_0xab5aee(0x1a4)+';\x20ove'+_0xab5aee(0x27e)+'-y:\x20a'+'uto;\x20'+'displ'+_0xab5aee(0x14c)+_0xab5aee(0x3d4)+'grid-'+_0xab5aee(0x245)+_0xab5aee(0x215)+_0xab5aee(0x2a5)+'s:\x20re'+'peat('+_0xab5aee(0x173)+'fill,'+_0xab5aee(0x4b4)+_0xab5aee(0x5b7)+_0xab5aee(0x5f1)+_0xab5aee(0x205)+';\x20ali'+_0xab5aee(0x55c)+_0xab5aee(0x219)+'start'+';\x20ali'+_0xab5aee(0x64d)+_0xab5aee(0x253)+_0xab5aee(0x4bf)+_0xab5aee(0x6ae)+_0xab5aee(0x3ad)+_0xab5aee(0x53f)+_0xab5aee(0x65c)+'ng:\x200'+_0xab5aee(0x39d)+_0xab5aee(0x53a)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+'s::-w'+_0xab5aee(0x6a5)+_0xab5aee(0x4f5)+_0xab5aee(0x17a)+_0xab5aee(0x37c)+'dth:\x20'+'8px;\x20'+_0xab5aee(0x429)+_0xab5aee(0x623)+'cols:'+':-web'+'kit-s'+_0xab5aee(0x55e)+_0xab5aee(0x349)+'humb\x20'+_0xab5aee(0x113)+_0xab5aee(0xf4)+_0xab5aee(0x202)+'gba(2'+_0xab5aee(0x560)+_0xab5aee(0x155)+_0xab5aee(0x302)+_0xab5aee(0x339)+'der-r'+_0xab5aee(0x4e4)+':\x204px'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0xab5aee(0x333)+'d\x20{\x20b'+_0xab5aee(0x5a4)+_0xab5aee(0x571)+'us:\x201'+_0xab5aee(0x634)+_0xab5aee(0x20d)+_0xab5aee(0x30a)+_0xab5aee(0x420)+'a(255'+_0xab5aee(0x6a7)+_0xab5aee(0x143)+_0xab5aee(0x190)+_0xab5aee(0x3fc)+_0xab5aee(0x38c)+_0xab5aee(0x684)+_0xab5aee(0x4ff)+_0xab5aee(0x343)+_0xab5aee(0x445)+_0xab5aee(0x265)+'55,25'+_0xab5aee(0x155)+_0xab5aee(0x25a)+_0xab5aee(0x3b6)+_0xab5aee(0x5ca)+'k-car'+_0xab5aee(0x5ee)+'{\x20bac'+_0xab5aee(0xf4)+_0xab5aee(0x202)+_0xab5aee(0x265)+'55,25'+'5,255'+',.04)'+_0xab5aee(0x480)+_0xab5aee(0x4ab)+'ow:\x20i'+'nset\x20'+_0xab5aee(0x5ed)+_0xab5aee(0x176)+_0xab5aee(0x5b5)+'255,1'+_0xab5aee(0x45b)+_0xab5aee(0x612)+_0xab5aee(0x1e7)+_0xab5aee(0xfc)+_0xab5aee(0x6a3)+_0xab5aee(0x1ac)+_0xab5aee(0x157)+_0xab5aee(0x15c))+(_0xab5aee(0x5ae)+_0xab5aee(0x59b)+_0xab5aee(0x1c3)+'-item'+'s:\x20ce'+_0xab5aee(0x443)+_0xab5aee(0x641)+_0xab5aee(0x615)+_0xab5aee(0x5c9)+_0xab5aee(0x3d2)+_0xab5aee(0x2ef)+'12px;'+'\x20}\x0a\x20\x20'+_0xab5aee(0x455)+'-card'+_0xab5aee(0x171)+'e\x20{\x20f'+'lex:\x20'+_0xab5aee(0x116)+_0xab5aee(0x5bb)+_0xab5aee(0x3ee)+';\x20}\x0a\x20'+_0xab5aee(0x5ca)+'k-car'+_0xab5aee(0x237)+_0xab5aee(0x305)+_0xab5aee(0x64f)+'{\x20fon'+'t-siz'+'e:\x2013'+_0xab5aee(0x4af)+'ont-w'+'eight'+_0xab5aee(0x13e)+_0xab5aee(0x16c)+_0xab5aee(0x32b)+_0xab5aee(0x265)+_0xab5aee(0x2b4)+'8,242'+',.45)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0xab5aee(0x333)+'d.on\x20'+_0xab5aee(0x151)+_0xab5aee(0x39c)+_0xab5aee(0x1d7)+'stron'+'g\x20{\x20c'+_0xab5aee(0x1c8)+'\x20#fff'+_0xab5aee(0x441)+_0xab5aee(0x429)+_0xab5aee(0x3f8)+_0xab5aee(0x24b)+'\x20{\x20pa'+'dding'+':\x200\x201'+'2px\x201'+_0xab5aee(0x53f)+_0xab5aee(0x429)+_0xab5aee(0x3f8)+'mdesc'+_0xab5aee(0x365)+'nt-si'+_0xab5aee(0x2d9)+'1px;\x20'+'opaci'+_0xab5aee(0x5a9)+_0xab5aee(0x6ab)+'rgin-'+_0xab5aee(0x3f3)+_0xab5aee(0x15f)+'x;\x20}\x0a'+_0xab5aee(0xfc)+_0xab5aee(0x164)+'l\x20{\x20d'+_0xab5aee(0x573)+_0xab5aee(0x509)+'ex;\x20a'+_0xab5aee(0x655)+_0xab5aee(0x352)+':\x20cen'+'ter;\x20'+_0xab5aee(0x64b)+'8px;\x20'+'paddi'+_0xab5aee(0x135)+'px\x200;'+'\x20font'+'-size'+_0xab5aee(0x5cc)+_0xab5aee(0x4e3)+'}\x0a\x20\x20\x20'+_0xab5aee(0x3f8)+_0xab5aee(0x419)+'\x20{\x20fl'+_0xab5aee(0x2aa)+';\x20col'+'or:\x20r'+_0xab5aee(0x265)+_0xab5aee(0x2b4)+_0xab5aee(0x414)+_0xab5aee(0x17c)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0xab5aee(0x3af)+_0xab5aee(0x2cd)+_0xab5aee(0x573)+'y:\x20bl'+'ock;\x20'+_0xab5aee(0x404)+'size:'+'\x2010px'+';\x20opa'+'city:'+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0xab5aee(0x3f8)+_0xab5aee(0x35c)+_0xab5aee(0x51e)+_0xab5aee(0x5cb)+'on:\x20r'+'elati'+_0xab5aee(0x3e0)+'idth:'+'\x2026px'+_0xab5aee(0x504)+_0xab5aee(0x40b)+'14px;'+'\x20bord'+_0xab5aee(0x685)+';\x20bor'+_0xab5aee(0x3fe)+_0xab5aee(0x4e4)+':\x2099p'+_0xab5aee(0x29e)+_0xab5aee(0x554)+'und:\x20'+'rgba('+'255,2'+'55,25'+_0xab5aee(0x436)+_0xab5aee(0x288)+'rsor:'+_0xab5aee(0x11b)+_0xab5aee(0x3a3)+'flex:'+'\x20none'+_0xab5aee(0x3b6)+_0xab5aee(0x5ca)+'k-swi'+'tch::'+'after'+_0xab5aee(0x1c0)+'ntent'+_0xab5aee(0x1fb)+_0xab5aee(0x627)+_0xab5aee(0x4df)+_0xab5aee(0x58a)+'lute;'+_0xab5aee(0x3e9)+_0xab5aee(0x30b)+'\x20left'+_0xab5aee(0x229)+';\x20wid'+_0xab5aee(0x5b9)+_0xab5aee(0x327)+'eight'+':\x208px'+';\x20bor'+'der-r'+_0xab5aee(0x4e4)+_0xab5aee(0x5bd)+';\x20bac'+_0xab5aee(0xf4)+'nd:\x20r'+_0xab5aee(0x265)+_0xab5aee(0x560)+'5,255'+_0xab5aee(0xf1)+';\x20tra'+_0xab5aee(0x12f)+'on:\x20l'+_0xab5aee(0x1df)+_0xab5aee(0x47a)+'ackgr'+'ound\x20'+_0xab5aee(0x660)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0xab5aee(0x35c)+_0xab5aee(0x313)+_0xab5aee(0x1b8)+'cked='+_0xab5aee(0x23e)+_0xab5aee(0x1ed)+_0xab5aee(0x20d)+'round'+_0xab5aee(0x420))+('a(255'+',107,'+'157,.'+'25);\x20'+'}\x0a\x20\x20\x20'+_0xab5aee(0x3f8)+_0xab5aee(0x35c)+_0xab5aee(0x313)+'a-che'+_0xab5aee(0x510)+_0xab5aee(0x23e)+'\x22]::a'+_0xab5aee(0x60b)+'{\x20lef'+'t:\x2015'+'px;\x20b'+'ackgr'+'ound:'+_0xab5aee(0x58d)+'b9d;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0xab5aee(0x442)+_0xab5aee(0x3ba)+'ckgro'+_0xab5aee(0x533)+'rgba('+_0xab5aee(0x5ba)+_0xab5aee(0x560)+_0xab5aee(0x656)+_0xab5aee(0x30e)+_0xab5aee(0x5a4)+_0xab5aee(0x203)+'borde'+_0xab5aee(0x282)+_0xab5aee(0x456)+'6px;\x20'+'color'+':\x20#f6'+_0xab5aee(0x629)+_0xab5aee(0x5c9)+'ing:\x20'+_0xab5aee(0x494)+_0xab5aee(0x4af)+'ont-s'+'ize:\x20'+_0xab5aee(0x390)+_0xab5aee(0x66c)+_0xab5aee(0x596)+':\x20non'+_0xab5aee(0x297)+_0xab5aee(0x118)+'dow:\x20'+_0xab5aee(0x3a2)+'\x200\x200\x20'+_0xab5aee(0x6a8)+_0xab5aee(0x424)+_0xab5aee(0x467)+'255,2'+_0xab5aee(0x1f3)+'5);\x20}'+_0xab5aee(0x3ab)+'.sk-f'+'ield\x20'+'optio'+'n\x20{\x20b'+_0xab5aee(0x20b)+_0xab5aee(0x16e)+_0xab5aee(0x428)+_0xab5aee(0x565)+'}\x0a\x20\x20\x20'+_0xab5aee(0x3f8)+_0xab5aee(0x422)+_0xab5aee(0x432)+_0xab5aee(0x272)+':\x20fle'+_0xab5aee(0x1e0)+'ign-i'+_0xab5aee(0x6b9)+_0xab5aee(0x498)+'er;\x20g'+_0xab5aee(0x611)+_0xab5aee(0x468)+_0xab5aee(0x3ab)+'.sk-s'+'lider'+_0xab5aee(0x540)+'ebkit'+_0xab5aee(0x13f)+_0xab5aee(0x31d)+'e:\x20no'+'ne;\x20a'+_0xab5aee(0x175)+'ance:'+_0xab5aee(0x51a)+_0xab5aee(0x1fa)+'th:\x209'+_0xab5aee(0x53f)+'heigh'+_0xab5aee(0x473)+_0xab5aee(0x29e)+'ckgro'+_0xab5aee(0x533)+_0xab5aee(0x234)+_0xab5aee(0x292)+_0xab5aee(0x570)+_0xab5aee(0xfc)+'sk-sl'+'ider:'+_0xab5aee(0x2b5)+'kit-s'+_0xab5aee(0x690)+'-runn'+_0xab5aee(0x2ff)+'track'+'\x20{\x20he'+'ight:'+_0xab5aee(0x515)+'\x20bord'+_0xab5aee(0x56f)+'dius:'+_0xab5aee(0x515)+'\x20back'+_0xab5aee(0x328)+_0xab5aee(0x209)+_0xab5aee(0x221)+_0xab5aee(0x406)+_0xab5aee(0x54e)+_0xab5aee(0x2e9)+_0xab5aee(0x63d)+'f6b9d'+_0xab5aee(0x5f5)+'\x20/\x20va'+_0xab5aee(0x488)+_0xab5aee(0x26e)+_0xab5aee(0x44f)+'%\x20no-'+_0xab5aee(0x36c)+'t,\x20rg'+'ba(25'+_0xab5aee(0x155)+_0xab5aee(0x6a7)+_0xab5aee(0x1bb)+_0xab5aee(0x22d)+_0xab5aee(0x455)+'-slid'+_0xab5aee(0x391)+_0xab5aee(0x28d)+'t-sli'+_0xab5aee(0x223)+'humb\x20'+'{\x20-we'+_0xab5aee(0x239)+_0xab5aee(0x117)+_0xab5aee(0x170)+_0xab5aee(0x3e1)+_0xab5aee(0x620)+'dth:\x20'+_0xab5aee(0x28a)+_0xab5aee(0x4bd)+'t:\x206p'+'x;\x20ma'+_0xab5aee(0x427)+_0xab5aee(0x535)+_0xab5aee(0x220)+_0xab5aee(0x271)+_0xab5aee(0x56f)+_0xab5aee(0x1db)+_0xab5aee(0x174)+'\x20back'+'groun'+_0xab5aee(0x33c)+'f6b9d'+_0xab5aee(0x3b6)+'\x20\x20\x20.s'+'k-val'+_0xab5aee(0x365)+'nt-si'+_0xab5aee(0x2d9)+'1px;\x20'+_0xab5aee(0x404)+_0xab5aee(0x23a)+_0xab5aee(0x3d7)+_0xab5aee(0x11d)+_0xab5aee(0x5bb)+'th:\x202'+_0xab5aee(0x3bf)+_0xab5aee(0x2b8)+_0xab5aee(0x1c3)+':\x20rig'+_0xab5aee(0x109)+'olor:'+'\x20rgba'+'(246,'+_0xab5aee(0x1dc)+_0xab5aee(0x1fe)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0xab5aee(0x55d)+_0xab5aee(0x454))+(_0xab5aee(0x2a6)+_0xab5aee(0x167)+_0xab5aee(0x327)+_0xab5aee(0x610)+_0xab5aee(0x376)+'x;\x20bo'+'rder:'+_0xab5aee(0x14d)+_0xab5aee(0x5a4)+_0xab5aee(0x571)+_0xab5aee(0x60f)+'px;\x20b'+_0xab5aee(0x20b)+_0xab5aee(0x16e)+_0xab5aee(0x51a)+';\x20pad'+_0xab5aee(0x4f6)+_0xab5aee(0xe8)+_0xab5aee(0x255)+_0xab5aee(0x2d7)+_0xab5aee(0x443)+_0xab5aee(0x22d)+_0xab5aee(0x455)+'-note'+_0xab5aee(0x365)+_0xab5aee(0x4ee)+'ze:\x201'+_0xab5aee(0x48a)+_0xab5aee(0x6b6)+_0xab5aee(0x420)+_0xab5aee(0x4f7)+_0xab5aee(0x2e2)+_0xab5aee(0x235)+_0xab5aee(0x61c)+_0xab5aee(0x59e)+'g:\x202p'+_0xab5aee(0x650)+_0xab5aee(0x429)+_0xab5aee(0x3f8)+_0xab5aee(0x11a)+'err\x20{'+'\x20colo'+_0xab5aee(0x3cc)+'f7a93'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+'\x20{\x20al'+'ign-s'+'elf:\x20'+'flex-'+_0xab5aee(0x588)+';\x20bor'+_0xab5aee(0x3e7)+_0xab5aee(0x1b2)+_0xab5aee(0x2e8)+_0xab5aee(0x28c)+'s:\x208p'+_0xab5aee(0x139)+'dding'+_0xab5aee(0x57a)+_0xab5aee(0x670)+_0xab5aee(0x2db)+_0xab5aee(0xf4)+_0xab5aee(0x25d)+_0xab5aee(0x2e9)+_0xab5aee(0x186)+_0xab5aee(0x63e)+'#fff;'+'\x20font'+_0xab5aee(0x5dc)+_0xab5aee(0x5cc)+_0xab5aee(0x4e3)+_0xab5aee(0x404)+'weigh'+'t:\x2070'+'0;\x20cu'+_0xab5aee(0x1e5)+_0xab5aee(0x11b)+_0xab5aee(0x3a3)+_0xab5aee(0x429)+_0xab5aee(0x3f8)+_0xab5aee(0x50e)+'over\x20'+_0xab5aee(0x348)+_0xab5aee(0x682)+'brigh'+'tness'+_0xab5aee(0xfa)+';\x20}\x0a\x20'+_0xab5aee(0x308));window[_0xab5aee(0x267)+'entLi'+'stene'+'r'](_0x16a3fd[_0xab5aee(0x217)],_0x53e431=>{var _0x5e89ba=_0xab5aee;_0x53e431[_0x5e89ba(0x102)]===_0x5e89ba(0x24c)+'t'&&(_0x53e431[_0x5e89ba(0x677)+_0x5e89ba(0x662)+'ault'](),_0x16a3fd[_0x5e89ba(0x48e)](_0x44f60b));},!![]);var _0x449558=document[_0xab5aee(0x13d)+_0xab5aee(0x4a1)+_0xab5aee(0x320)](_0xab5aee(0x1d4));_0x449558[_0xab5aee(0x603)][_0xab5aee(0x609)+'xt']=_0x16a3fd['Ihsgx'],_0x449558[_0xab5aee(0x407)+'HTML']=_0xab5aee(0x1ea)+'viewB'+'ox=\x220'+'\x200\x2024'+_0xab5aee(0x3b9)+_0xab5aee(0x5e7)+'\x20d=\x22M'+_0xab5aee(0x41f)+_0xab5aee(0x598)+'-2.5-'+'4-4.5'+_0xab5aee(0x214)+_0xab5aee(0x31f)+_0xab5aee(0x107)+_0xab5aee(0x29a)+_0xab5aee(0x63a)+_0xab5aee(0x341)+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0xab5aee(0x6a0)+'.5z\x22\x20'+'fill='+_0xab5aee(0x5e1)+_0xab5aee(0x54a)+_0xab5aee(0x678)+_0xab5aee(0x506)+_0xab5aee(0x5de)+_0xab5aee(0x210)+_0xab5aee(0x252)+_0xab5aee(0x5b1)+_0xab5aee(0x458)+_0xab5aee(0x3dc)+_0xab5aee(0x62c)+_0xab5aee(0x457)+_0xab5aee(0x487)+_0xab5aee(0x210)+_0xab5aee(0x58c)+'join='+'\x22roun'+'d\x22/><'+_0xab5aee(0x624)+_0xab5aee(0x6aa)+'\x2212\x22\x20'+'cy=\x221'+_0xab5aee(0xe9)+'\x221.5\x22'+'\x20fill'+_0xab5aee(0x24e)+'6b9d\x22'+_0xab5aee(0x640)+_0xab5aee(0x316),_0x449558[_0xab5aee(0x527)]=_0xab5aee(0x6b4)+_0xab5aee(0x65d)+'r',_0x449558['onmou'+_0xab5aee(0x5d0)+'er']=()=>_0x449558[_0xab5aee(0x603)][_0xab5aee(0x648)+'ty']='1',_0x449558[_0xab5aee(0x583)+'selea'+'ve']=()=>_0x449558['style']['opaci'+'ty']=_0xab5aee(0x483),_0x449558[_0xab5aee(0x1bf)+'ck']=_0xf9f81=>{var _0x5a84d7=_0xab5aee;_0xf9f81[_0x5a84d7(0xe6)+'ropag'+'ation'](),_0x44f60b();},document[_0xab5aee(0x1d8)][_0xab5aee(0x2cb)+'dChil'+'d'](_0x449558),_0x507108(),requestAnimationFrame(_0x2919ff),console[_0xab5aee(0x12c)](_0xab5aee(0xed)+_0xab5aee(0x38d)+_0xab5aee(0x12b)+_0xab5aee(0x14e)+'eady.'+_0xab5aee(0x416)+':',_0x3a864a['uwmk']);});})()));function _0x5be6(){var _0x5479e8=['iM5VBMu','v2vHCg8','nJq2o2m','zxjZ','y3qGB24','uMf0zq','phbHDgG','ENvREu4','nYWWlJG','Eef1sgC','zvzHBhu','j3qGC3q','mcaWida','zc5VBIa','A3nty2e','BMvS','mhb4lca','zs1PDgu','q291BNq','AxPPD0e','ksaWida','y2HdB2W','twLZyW','ihLVDxi','tKCG4Ocuia','s1bgwve','DhLSzq','AwvZlG','Dw5PDhK','nJe1mdGWDKDVDwzS','BwuG','B3rOAw4','AwvSza','DMvTzw4','C3r5Bgu','AwXnB3q','DgHYB3C','AezOvKi','vLPuqLe','C2f0Dxi','y3nZvgu','CNr1Cca','zNrLCIa','mZuSmJq','B3C6ida','lwnVBhm','Dxm6idy','zwLNAhq','yxa6idG','nYWUmJG','Ahq6idi','tg9Hzgu','idHWEdS','lc4WnIK','nJiWChG','C3rPBgW','zMHeBLi','AguGzgu','AfbdEuG','nsK7iha','tgLZDa','zw50CW','yxr0ywm','ztSGD2K','mcWWlJG','ywiUywm','ic5TBI0','y2LYy2W','Awr0AdO','jsK7ic0','ihbVC2K','EYbIB3G','zwvMmJS','s21XCwq','C2Lbzge','BMvJyxa','vMTVBu8','ihrOzsa','Bw4TBwe','Bw4Ty28','tuLtu0K','DdOGmJG','DgHVzca','mNb4oYa','BK9hyNG','Bwf0y2G','tM8Gu3a','Fdn8mNW','BwvKicG','idqTnc4','AgfPCG','r3bMsKG','zcWGi2y','Bg9YoIa','C2STC3C','lZ48l3m','igDHCdO','z2v0sxq','DgGUsw4','Agf0igq','D2LKDgG','yuTVDxi','C2HVB3q','B3bHy2K','vMLZDwe','iokaLcb0zq','z2fWoIa','yxbhC2K','z24Ty28','z3jHDMK','CM9UzYa','EcaWoYa','oIbJB2W','Fdj8m3W','ChGGDwK','rNHdAfO','BgLNBI0','nsWUmdm','uwXzAu0','uhPxAMW','DxjH','BgvMDa','ienquW','CgfKzgK','ysblB3u','reXArxa','AdOGnJi','lJjZoYa','zMLSBa','BNrezwy','mIaXmK0','yM91BMq','zcbJAg8','BYbWAwC','u3bHy2u','sw1nEfm','C0TxCw0','C2STCMe','y2vSzxi','EdSGB3u','ywn0A0S','CMuGkfm','zNbZ','ide2ChG','y2vUDgu','q2jxr08','DMLZAwi','EMzLCLa','y3KGB24','nYWWlJC','ChjLDMu','B2TLpsi','zsbBrvG','B3G9iJa','BxKGC2u','y0jHqLy','uNzYDwG','wK91CKy','BMDL','kYbmtui','nYWWlJm','DgvYoIa','C0vwr1e','DZOGAw4','zxi6ida','B3vUDgu','AgvZ','q0fovKe','CgfJAxq','C0DwBwi','zxrhyw0','igvUDgK','i2zMyJm','AguGDxm','BNrZEee','BgLKzxi','s2v5qq','C2zVCM0','yMLJlwi','BwvZC2e','CIbNyw0','mtySmc4','zhrOoJe','zsaOt0G','icaGyMe','BhKGkhi','r0HYBgq','Aw9FnZi','CM9Rzxm','EsbKzwy','y09ry0i','ns00idC','zgfTywC','rgfTywC','C2STy2e','mNb4o3i','zwjRAxq','q29SB3i','ldi1nsW','mcaXChG','suLiCMy','zsbJEd0','ndSGBwe','Dg9Nz2W','uMvZzxq','CNq7igC','AwXKigG','C2vSzwm','A2v5zg8','C2STBwq','CIGYmNa','u2fRDxi','nhb4oYa','y29SB3i','zIbTyxq','uMvJDa','DgvTCZO','Awq7iha','mhW5Fdy','wxbPBhK','ywTVv1K','yKDXz0e','C3rVCfa','A2vizwe','ida7igm','mciGCJ0','ywqU','BNrLCI0','r0r5EuO','w3nHA3u','ms4XlJa','tgfZvLC','ChG7iha','lc4YnsK','vvDnsYa','Dc1ZAxO','A2DYB3u','CNvQAeG','Ag9VA0m','Du9IEMe','CdOGmta','qMDNBwy','kdeUmsK','uMLXr0K','icaGic4','tK1iD2y','lMrSBa','yxa6ihi','Aw9U','DgvZDa','y29Kzq','EcbYz2i','iezquW','yxjPys0','y2HtAxO','lJuGms4','oMHVC3q','Ahq7igm','lwHLAwC','ndC0odm','vureD3C','zsGXnta','CwD0ELm','z2uUiei','BIb7igy','lcbJywW','zevyAum','EYbIywm','yxrPB24','igzVDxi','mtSGBwK','yxbWzwe','Ec1ZAge','BMf0Dxi','BM90zs4','ihbVAw4','rwfJAca','mdSGBwK','sxPvBNC','uIb2ms4','Fdb8mxW','EgLAzLu','CYbZChi','uMfWAwq','tePnD0y','sfLRDwW','oIb0CMe','lM1Ulxa','DYGWida','nsWUmdu','CNjVCG','DxjDig0','Bg9N','BMTSELq','oYbWB2K','BNnPDgK','ALP2qwS','B2LS','yxvSDca','vg90ywW','mhW1Fdm','BMC6idq','C2fMzu0','r3Lrzg0','igj1AwW','EdSGCge','D3jPDgu','EYbMB24','DKrzrKK','y3jLyxq','oIa2mda','lwfWCgu','FdeWFdm','tw9Kzsa','C2HVD24','mJu1lc4','Dwnwwgq','lcbPBNm','mhG2mda','uLDwz3q','lM1Ulxm','r0vpBMy','r0TMBM8','mtf8mJa','yxK6igC','ida7igi','zw51ihi','mtSGyMe','BIbZAwC','lNnRlwm','zw50zxi','ohG5mc0','Dg5vCxm','nsWYntu','wMTTBwG','ywqGEYa','Aw5WDxq','C2HPzNq','oYbQDxm','rvLJD3e','zgLZCgW','z2v0rwW','Ag9VA3m','BtOGnNa','ywrIBg8','AgfZ','mdb2DZS','CMvJDa','C2STy3q','AMXRCMK','y2uGB3y','AdOGmZq','uLjltxK','zw51','Ag9VA04','AwrLCG','oYbJB2W','AxrPB24','B3vUzdO','Aw5KzxG','CMfUy2u','lxrPDgW','wNb5BhO','yxv0BY0','iduWjtS','ChbLyxi','idfWEca','ChvZAa','BwfbtMW','B2fKzwq','BgXIyxi','DgLKzs4','lc43nsK','rwPJAeS','A2uTD2K','DMXxvMS','Dg9W','t1LzugK','AgTgsfe','zsb2ywW','CMXHEsa','wNvoD08','zdSGy28','zwLUC3q','BJOGy28','tuPcAxO','whnMChq','ldeWnYW','iezPCMu','vuXRz2W','vgLJAW','AsXZyw4','mdi1ktS','wfzhveS','ysGYntu','tw5KyxO','oIaXoYa','Bgf0zwq','rM1zCxi','C2HJtg0','A291CNm','C3rYB24','DhLWzq','zwXK','uLfquNi','ywnPDhK','DwTJr3y','C3bSAxq','B3zLCMy','CI52mq','AgvSza','BM93','Ahq6ida','B25LigK','ihWGC2G','y2HLy2S','A2vZig8','u3bLzwq','Aw5Mqw0','CMvU','CMqTAgu','qvLhy2m','m3WXFdq','BMqGt0G','zxiTzxy','BfjHDgK','mdSGyM8','lxnLCMK','ndGZnJq','DgXL','ywqGDg8','Bg9JAW','ys1JAgu','r1DVtNy','AwX0zxi','lJa4ktS','zMyP','igrPC3a','Dc1Myw0','B25JBgK','ihSGy28','zxjSyxK','sgvrD20','ywXPz24','Bg9Hzc4','z3jPzdS','icaGkIa','B3vUzgu','B2XVCJO','zLb1C2q','B3i6iha','sKf1sge','zJmY','yw5Uywi','A3ndChm','BhvLCY4','tw92zq','BePQwNa','D0nVBg8','lwHVCa','zgL2','BwLZyW','qM5Luhy','AxrSzsa','yM9KEq','BgvZDwG','s2v5ra','zgL1CZO','mJm4ldi','C2Hcs0e','Fdv8mtm','zwz0ic4','EdSGywW','icaGica','sfrnta','ideYChG','Ag9VA1a','CNnVCJO','r0vnwhm','ktSGFqO','DhjPyNu','zerhAMK','phn2zYa','iJeUnsi','Eca2ChG','iL0GEYa','C3jiq2S','q0LfAMe','vefuugW','AxnPyMW','B24U','ntuSlJa','qLv1BvK','yNb4zeO','tu9ersa','Aw4GC2e','CJOGDgG','BufoB28','oYb3Awq','oIaIiJS','y3jVC3m','Dgv4Dee','ndiSlJG','rMn0ENa','tNDkA3u','Avb0tvK','BMq6ihi','oIaWoYa','zw5HyMW','mwzYksK','yxvSDa','DMvYihS','icbIB3G','zdOGBgK','B2rL','ywnRz3i','mxWWFdq','yMfJA2C','C3bHBG','AwDUyxq','DhjVA2u','re9nq28','z29KrgK','igvYCG','ltqTnY4','yxrLlwm','BgLUzvq','vLrzrwq','oIbKCM8','zw1ZoIa','yw1L','DhvYyxq','ywn0Axy','B3nWywm','CwviEhm','s2v5C3q','ltjWEdS','BMvHCI0','zMLSBd0','zgvYlxq','ChGPoYa','ugn0','CMfPC2u','whfoA2u','DMCGEYa','oIaZChG','ifTfwfa','zZOGmta','EgvZige','ih0kica','sNvTCca','CLDZA0y','uhbItwC','C2rSBw8','ChG7ihC','r29Kl2q','DhjHBNm','mJqYlc4','u0flvvi','zc10Axq','nxWYFdq','yMTPDc0','D2vPz2G','B0zduhi','igHLAwC','BgLlthG','iNrYDwu','yvvSvNi','Dw5RBM8','z2v0qxq','zhbY','EenAsKC','C2v0x3q','DgvTCgW','DgLMEs0','C3rYAw4','zNrvque','ywqUieK','C2STBge','BwjVzhK','sw5Zzxi','m3W1Fdq','psiJzMy','zM9YBxm','zxiGEYa','veHnt3i','lxDPzhq','BNrLBNq','Bg93zxi','DxjZB3i','Bw4TC3u','z1rgz0C','B2LSicG','v25yAhm','lc4WnsK','CNrPzgu','q2XVC2u','BMq6icm','rfb3AfG','DhLqy3q','t1vKsfG','m3W3Fde','sNvTCfq','zhfAtfu','B3bLBG','z2jHkdi','CM9Rzs0','ywrKrxy','BwvUDca','CZPUB24','ihjLy28','veLrCwu','Bw4TAca','C3rYB2S','lca1mcu','v1HVAgG','nwmWidm','igjVCMq','C3bSyxK','BY1ZDMC','CZOGmty','CML0zxm','B2vpENi','sNvWtge','ww5RAgq','rgLZywi','msWUmZy','Axb0kq','zxDVuNa','z1DprNq','CMzSB3C','BsbVBIa','rKnmuwq','AcbVBMu','CI1Yywq','C2v0qxq','vgLsu2C','ywqGD2G','rwXLBwu','AwrLihS','ktSGy3u','wKLwDLC','nNb4oYa','zMLSBfm','CMfKAxu','D2vIA2K','Aw50zxi','lxbHCMu','BI1TywK','l3jHCgK','CgfYzw4','nsKSida','ChG7igi','Bfzuvfe','CerQueC','ztSGyM8','sw5ZDge','kg92zxi','oc00lJu','wg9tzxq','B2vZig4','mcWUntu','EdSGyMe','v2LWzsa','CMvUDem','yw5Jzs4','AfnOywq','y2f0','zsXTB24','B2X1Bw4','ihDPzhq','C2v0','CJOGCg8','CMvSEsa','zxG6ide','lxnHBNm','Dhm6yxu','CMvHzey','CMLUz3m','zw50tgK','DMvYlxy','qKjXu04','Bw9fEha','lcbZyw4','ndySmJm','oI13zwi','D2L0Aca','oIbPBMG','Dgv4Dc0','FdeYFde','AwvKigm','yw5ZzM8','yxj0lG','B0vlExG','Bgf5ig8','D2fPDgK','y2n1CMe','uuToCMW','igzVCIa','zg9JDw0','BM9szwm','C2STDMe','C2vYDMu','D2fYBG','EsaUmZu','thHgqwq','BMnL','yxbWzw4','DMLLD0i','Dcb7igq','iefmtca','lK92zxi','qunuAYa','zxmGB24','B3n0zMK','qMXVy2S','qxLbzfe','yxnLBgK','z1PisNi','oIbWB2K','q1btihi','EMu6ide','B1fUu1q','oYbIywm','BLDns1G','ihDLyxa','ihSGywW','B290zxi','C2fMzq','sxnhCM8','ldiZocW','y2HPBgq','re5zC0C','Dxm6idi','ieaG','vvjbx0S','CMrLCI0','zMy2yJK','t0fQEKK','AcaTidq','ze51Bu0','mtGGnIa','ieTLzxa','mtfWEca','DgvY','qw5dtM8','BgLNBG','D2vsrNm','CwfxveG','C3zNiJ4','uMXgyvy','igfSAwC','AwXS','zNvSBhm','B25JAge','ywXSihq','zs5bCha','BwLUkdq','u25equy','ywjSzs0','zfD2uMi','B250zw4','lc4WocK','zgn4vva','ldePoWO','BguGC3q','B24Gzxy','ie9olG','icaG','igDHDgu','CM91BMq','idnWEdS','zuv4Ca','vxLoz1K','nsK7igi','CIdIGjqG','B29RCYa','CYb3B24','suDLv3q','AfTHCMK','CdOGmti','Cg9W','DMC+','sg1jsLe','zw50rwW','oJa7EI0','y3z2qxu','igjHBIa','uu9Wr2q','yxjHBMm','BNnWyxi','nsaWlti','zw50','wMvYB2u','zM9UDa','ig9YigS','mhGYnta','Fdf8m3W','y2vdAgK','ChG7igG','z3jVDw4','DxjDifu','DxmGywm','B3i6ihi','ug9ZAxq','CI51As4','igzPBgW','ChbLBNm','A2v5C3q','nIaXoci','y3jLBwu','AY1Jyxi','wgntAem','ywXSig8','qxbWBhK','Fdv8mxW','vw5PDhK','oYbIB3i','CY1Zzxi','mJiSocW','zdOGi2y','Bw91C2u','y29TCgW','DMfS','Fdn8n3W','nxm0idi','y2fSBa','idaGmca','ktSGBwe','vxHHEem','zxzLCNK','vwP3yuy','EYbMAwW','yMfYlxq','icaUBw4','AenYzNu','Cg9nvw0','yNv0Dg8','Bxm6igm','shbVzMC','CMvHzhK','t1HSvxC','AxrLBxm','ywTMAwK','lMLVig0','v2vItw8','ExDove8','nxmGy3u','zMXLEdS','Bw1yDNq','B2rLu3q','D0jSDxi','C3DPDgm','Ag9VA0C','zLrkq0C','rgX2ru0','igf1Dg8','y3K9iJe','EhnnEue','igTVDxi','Bw4Ty2W','ihSGzM8','CMvSB2e','Aw9F','qNDHreO','yJPOB3y','DKD3A04','yMvS','CMvWzwe','vgfRzxm','idmWChG','ig5VigG','Bw8GDg8','z3zzAhC','sxvkALC','igHVB2S','EI1PBMq','CYbpDMu','oIaYmNa','vuDgrwS','mxW0Fdm','ntKYnJLWwMH6q08','DfP4r3u','zxj2zxi','ihSGD2K','Ag9Szsa','AKf3veW','u2v0r2e','Dhj1zq','zxjZy3i','y2fWDhu','Bw92zvq','CM9Wlwy','weLuq0e','weH1rKu','B3nOCxm','teX6tLy','Be1VDgK','zMLSzw4','uKHKzNe','C2HHzg8','CMeTA28','ywDLigq','CI1ZzwW','mteUnxa','zxi6oI0','teTIDNi','DhKGDMe','Evz0Du8','B246ig8','ignVB2W','DdOXmda','rxjyveW','vxr0Awu','zgHSB00','DxHcCuG','yxjKlxq','idrWEca','q3vZDg8','x19tquS','y2XLyxi','A1H5z0m','Aw5Zzxq','DgvYoYa','l1jnqIa','v2LKDgG','DMLZDwe','uMvMAwW','mxWZFdK','DMLHifm','yvbVvhO','cIaGica','mJu1lde','yxa6ide','DdOYnNa','AY1OAw4','oYbYAwC','A291CI0','AxrLiee','C2STyNq','DhzlBvC','mtyYrgT1quDd','oYb9cIa','q3Pbqwq','v0ftrca','idi0iJ4','ihSGyMe','zenOAwW','DgLVBI4','nYWUmsK','mtu3lc4','ohb4oYa','kYbtCge','lKXVy2e','CgfYC2u','AKrxuMK','sKLiq28','yxrSEsa','ww9MrfO','BerPzsW','yxKGB24','BMC6igi','u3jxqMW','y3j1DMe','CJOGi2y','zxi6igi','ktSkica','BM9UztS','AwrHDgu','mc41o3q','Aw5NoIa','u0TrtNy','CMLKoYa','ywXSzwq','txPXy2y','DdOGnJa','oYbMAwW','v0fttsa','zwfSDgG','ocK7ih0','A2uTBgK','DxDTAW','icbIywm','nxW4Fde','DMu7ihC','oIbUB24','BhmGysa','tKTgsNy','oIa2nta','qKrYBfO','ywrK','zgvYoIa','ENvPB2W','ihrVCdO','ie92zxi','EMrTBKG','zM9YBtO','z0z2shu','DgG6ida','zxG6mJe','oJiXndC','lJv6iIa','C3rLBMu','yM90Dg8','Awy7ih0','mcWWlJC','C3rLCa','idaGmJq','ic5ZAY0','s2v3rLG','nMvLzJi','ie1VDMu','igjVEc0','EgfOBg4','zgvYlxi','uMvJB2K','zwfK','AYbVBI4','A3HUsuu','zvbPEgu','zM9UDc0','AxrPyxq','z3jHzgK','Aw5Uzxi','B2reAwu','mJu5mdKWog5VvKPJzG','zxrL','z2H0oIa','DgvTlxu','Aw9UlLq','yxrJAgu','zg93BIa','ztOGmtC','khjLBg8','yxrLvge','tg9JywW','ocWYndi','v2zjs2q','ifvxtuS','C2XPy2u','uvjsu2m','BgfIzwW','rLbtig8','v2PIr2q','Dg9Y','t3zLCNC','q2nvr2W','mtiGmJe','oIbYz2i','v1nUt2q','CMfUz2u','sgvHBhq','ihjNyMe','lxnPEMK','sMPMvMu','CMDPBI0','icmYmJe','FqOGica','mNb4ksa','Dgv4Dem','ihWGBw8','Aw9UoMy','sgLKzxm','BYb7igq','mtjWEca','Aw4Sihq','ihSGzgK','zwv6zsa','vgjtD0K','Bw92zw0','nsWUmdC','icaGig8','DdOGmZq','DMfSDwu','y2HLCYa','y0jvCMe','vvPPCwC','qM90Dg8','y2fWtw8','sw5PDgK','ocKPoYa','mgy1oYa','zMLLBgq','BNrLCJS','zvrHA2u','mxb4ihi','BYb0Agu','t0HLywW','C2f2zq','zxiGC2W','nNWYmNW','BMuUqxa','ifvUAxq','u2TPChm','DgfNtMe','ksaXmda','BgLJyxq','t1vsx18','C21HBgW','y29TyMe','Bg9YihS','icaUC2S','AxvZoIa','psjYB3u','ihn0CM8','yMHVCa','i2zMzG','mdCSmtu','zhrOoIa','yxrLkde','Cg9PBNq','t09JzeG','nJaWide','EtOGmdS','Aw5JBhu','t0zgigi','zxH0','AwDODdO','ywLSzwq','kdi1nsW','ChG7ih0','ig9Wywm','ywX0Ac4','BM9tChi','Aw1Lihm','CwXxAvC','nxWZFda','ohWXmhW','zg93kda','Bg9HzgK','nJaWia','DdOGoha','tgvNAw8','BgLUzw4','BwLKzgW','wfb4ANe','BgfZDeu','AgvAAeC','mNmSigi','BMv2zxi','EdSGAgu','zxjPDdS','zvLsEMC','DgHLihC','oYbIB3G','B3vUDc4','u3rHDhu','mc41','Bgf5oIa','BgvUz3q','wfzct2C','BMqIihm','CIGTlxa','ywWGBwu','mxb4oYa','ihjLBg8','nNW4Fda','B3nLihm','quf6sMW','BNrLEhq','uurjBK4','yMvNAw4','igzSzxG','kdeWmhy','nNb4idK','zvPuCMO','ide0ChG','y29UDgu','ignLBNq','twzLsMu','C3vvv2y','D29YAYa','ig1HEsa','zg93BG','zsb3zwe','DxqGDgG','ys5RB3u','zuvSzw0','EtOGz3i','yxjLBNq','tNnZwfC','C3bLzwq','BML0igy','s2v5vW','r1vjuui','oYb0CMe','DgnOihq','lxnOywq','Bg9Hzgu','ihWGrvi','zxjYB3i','ChG7igy','CMLZAYa','CMfWAwq','wu9JENG','zfDxCge','ig1PBM0','zhjVCc0','CZOGyxu','mtv8mta','zwqGyw0','oYb1C2u','DgvYigm','Cg9Uj3m','igq9iK0','AgvPz2G','BxjXCgu','oIbZDge','BcbKCMe','B3b0Aw8','zgTPDa','odaSmtK','lMXHC3q','zwfWB24','lsbHihm','CM9WywC','oWOGica','B3i6icm','rw5bvKi','yxbWBgK','lYbhCMe','Bwf4','zsbTAxm','Aw4TD2K','As1TB24','Dg87zMK','mcWWlJu','Dgv4Dei','vgDtz2O','mtaXnJi5mxvht0HiqG','Bgu7igy','z2LMEq','qxnZzw0','yLbNzvi','zwCGzMe','B1jLy28','CMvZDg8','tuLICwe','uuT5AKO','DgLVBJO','oIbJzw4','z2fTzuW','uvrqqxC','nxb4oYa','ywrPDxm','Bw4TDge','B3bLCNq','EfzVwu4','ig1HCMC','y2XHC3m','B3nL','A2rYB3a','BI1ZDwi','BhrO','BNqTC2K','idmYChG','ueDRB3O','AwXLzdO','igvSC2u','CMvHza','AK1ZCha','lxnJCM8','zgLUzZO','ysGYndy','wfjwueS','B24UvgK','yuLkvuS','Aw1Llca','ugf0Aa','B3zLCMW','surXwfi','C2v0ida','AguGCMu','AxDhwNu','BNq6igm','lwzPBhq','oYbOzwK','zvn0EwW','i2zMnMi','zZOGnNa','BfHuCxC','EtOGzMW','AwXSihK','DhKGjq','igLMig0','zvbSyxK','yNrUoMG','zw15igm','y2TLzd0','qvHgyu8','A3nqB3m','B2LUDgu','DxnPuxi','idjWEdS','z2v0q28','tMfTzq','DgvYo3C','q3jVC3m','ig5VBMu','mdSGFqO','ihWGz2e','ihrOAxm','Acb7iha','CIb2ywW','DMG7EI0','mNb4ihu','mZq3otDQtK9JwuK','id0GzMW','u0fgrsa','DgG6idu','BM9Uzq','DgL0Bgu','CMfUC3a','zMLSBfq','sgD2zuu','lsbVDMu','rNjHBwu','igrHBwe','x19ZywS','DxjDigG','ig1PBIG','ignVBg8','mtaYnti0odvsu1DTCxq','Dw5KoIa','CYbpsgu','Dg9WoIa','sg9AzgS','Cxb0DNm','AxHLzdS','D21hufK','nNb4ida','oIbJDxi','te1c','quPZCK8','BerPzsK','mhb4oYa','ihSGlxC','CYbnB3y','qvH1DuO','lNnRlw0','ufHbzxu','Cgn2EMG','igXLyxy','BMn0Aw8','AxmGAg8','Aw5NicS','iIbZDhi','qu9nAMG','A3mGyxi','zunTyNm','zw50kcm','rMLLBgq','BhmGDgG','u2nHBgu','C2u6Ag8','uKLOzuq','y2TNCM8','CgXHEtO','nZaWia','swyGCMu','ufmGDw4','lwrPCMu','ihSGzMW','DNrdqNa','z24TAxq','C2STy28','y3jVBgW','BwHfv3a','ntuSmJu','zgvZ','uJOG','BhrOige','yxb0Dxi','nde5oYa','AtmY','DhrPBMC','Fdb8mG','y2SP','C2STzMK','Awr0Aa','sMrwy08','CMqTDgK','s2v5uW','zxiTCMe','DdSGFqO','lxjHzgK','DMTsBeS','AxnWBge','ndHWEcK','odbWEcW','yM9Yzgu','Axr5oIa','zcWGyw4','swTXEuK','oIa4ChG','BgLUzvC','Bw1VifS','CYaNzNu','y2fUDMe','zxPPzxi','Bw4TAa','zxbbvxq','yMfJA2q','B25TB3u','rg9mwwi','B25SEsW','weTquhu','Fdj8n3W','C3rHCNq','nIa2Bde','igfIC28','Bg93oIa','lwXPBMu','icnMzJy','t1jRr3m','CgfNzsa','qvLbweK','txjwtvy','zw1LBNq','wwHAtLu','BMq6ihq','Ag9ZDg4','DgXPBMu','tuz0Ahm','yY0XlJu','zwfKige','s2rsDNO','Bgv4oYa','zxrLy3q','rKLwCM0','ywrKAw4','B2X1Dgu','ELvPyM8','rfjcBvi','lwfWCgW','rvHqxq','B3jKzxi','ihSGB3a','A2npr24','zMuGBw8','DtmY','DhK6ic4','C2fRDxi','mteZodq1mgX3s0vptG','BMLUzW','ANvTCfa','yxK6igy','CJSGz2e','DgLKzvC','Ad0ImIi','zxzLBNq','ChG7cIa','t2vkBxi','CMDIysG','igfWCgW','yxGOmJu','mtjqBfjRBvm','DgG6idG','mJu1ldi','BI13Awq','zw50oYa','oIa1mcu','CMDcD0u','tMjtAKq','zgvSzxq','oYbMB24','CxvLCNK','C2v0sxq','zwf0CYa','EYbWB3m','BI1SB2C','BdOGAw4','BNqGAge','ihbHzgq','icaGlNm','B3nPDgK','oIaXms4','u3rHDgu','vgHiuNK','BM5KELO','C2vLBNq','ExbABxC','sufUCeS','s09SvLu','y3jLzw4','vxnJtKm','AxmGyNu','D3fzAhK','q29TyMe','mcbOB28','lIbvC2u','CJSGzM8','lxnPEMu','zIXZExm','owqIihm','rxHW','z29K'];_0x5be6=function(){return _0x5479e8;};return _0x5be6();}
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
  var IS_2V2 = /(^|\.)2v2\.io$/.test(HOST);
  var IS_COOKIE = /(^|\.)orteil\.dashnet\.org$/.test(HOST) && /\/cookieclicker/i.test(location.pathname || "");
  if (!IS_CLUTCHER && !IS_ASTRA && !IS_2V2 && !IS_COOKIE) return;

  var BASE = "https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/";
  var FILE = IS_CLUTCHER ? "sakura.clutcher.js"
            : IS_ASTRA ? "sakura.astra.js"
            : IS_2V2 ? "sakura.2v2.js"
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
