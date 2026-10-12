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
function _0x19c3(_0x33521a,_0x2fa67a){_0x33521a=_0x33521a-(-0x46*0x80+0x14ba+0x1*0xed1);var _0x15d717=_0x33e5();var _0x359c1c=_0x15d717[_0x33521a];if(_0x19c3['WRDXXt']===undefined){var _0xafb62=function(_0x4c4393){var _0x57bc18='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2a4f1b='',_0x5a7ce5='';for(var _0x5a8b11=0x4f8+-0x13ec+0xae*0x16,_0x1e3522,_0x239e6d,_0x1c0020=0x17*-0x2+-0x1*-0x1aeb+-0x1abd;_0x239e6d=_0x4c4393['charAt'](_0x1c0020++);~_0x239e6d&&(_0x1e3522=_0x5a8b11%(-0x14d8+0x6ca*-0x4+0x3004)?_0x1e3522*(-0x81b*0x2+-0xc8b+0xe1*0x21)+_0x239e6d:_0x239e6d,_0x5a8b11++%(0x1*0x1435+-0x9e*0x9+-0xea3))?_0x2a4f1b+=String['fromCharCode'](0x51+0xcf+0x21*-0x1&_0x1e3522>>(-(0x374+-0x6*0x581+-0x2*-0xeca)*_0x5a8b11&-0x1*-0x1862+0xc0c+-0x2468)):-0x1853+0x1160+0x6f3){_0x239e6d=_0x57bc18['indexOf'](_0x239e6d);}for(var _0x5dad9a=-0x97*0x1f+0x11f*0x15+-0x542,_0x3e2d88=_0x2a4f1b['length'];_0x5dad9a<_0x3e2d88;_0x5dad9a++){_0x5a7ce5+='%'+('00'+_0x2a4f1b['charCodeAt'](_0x5dad9a)['toString'](0x141e+0xb1a+-0x8*0x3e5))['slice'](-(-0x21bb+-0x21c5+-0x2*-0x21c1));}return decodeURIComponent(_0x5a7ce5);};_0x19c3['HriYUZ']=_0xafb62,_0x19c3['Lkehqn']={},_0x19c3['WRDXXt']=!![];}var _0x416fb8=_0x15d717[-0x5*0x75c+-0x15e9+0x71*0x85],_0x23b0a6=_0x33521a+_0x416fb8,_0x3414cb=_0x19c3['Lkehqn'][_0x23b0a6];return!_0x3414cb?(_0x359c1c=_0x19c3['HriYUZ'](_0x359c1c),_0x19c3['Lkehqn'][_0x23b0a6]=_0x359c1c):_0x359c1c=_0x3414cb,_0x359c1c;}function _0x33e5(){var _0x440185=['nxb4oYa','phbHDgG','mJzWEdS','D3bpuNO','C2STC2W','DgvJDgK','tw92zq','DfjVEMO','lwrPCMu','y2n1CMe','AMrutvy','zcbZzwu','ywLSzwq','Bgv4oIa','Dc1ZBgK','u0Liv1y','yxPgDLG','BM9Uzq','u3jJz0y','idGWChG','BhvLCY4','zgL1CZO','C2fRDxi','DdOXmda','Cu9yzuq','CMvHzhK','CeHfu2S','B2reAwu','B25LigK','Dcb7igq','oYbIB3i','sw5Zzxi','B3rZlG','CMDPBI0','ndGZnJq','mJu1lde','uwrVr00','ihjNyMe','zw5HyMW','B2LUDgu','B3vUzca','jsK7ic0','u056yxK','ywrIBg8','y29SB3i','BIb7igi','u0fgrq','AxnWBge','BfDNEMW','BgLUzw4','oIbYAwC','yKDZCNC','Aw9UlLq','sw5MAw4','vgfRzxm','Aw5JBhu','nde5oYa','B01Kzxa','DhjPyNu','DMG7EI0','v2LWzsa','EYbSzwy','yJLKoYa','m3WXFdi','A2L0lxm','mtjWEdS','kg92zxi','AfHbDhq','B25SEsW','yw5JztO','ig5VigG','Cg9ZAxq','yxrPB24','ywnPDhK','Cfv1ug8','BMu7ige','Bw9sCg0','nZTWB2K','CM9UzYa','EdSGAgu','CgfYzw4','DxjDifu','u0fgrsa','CeTRuNy','A291CI0','r25dwNC','EMnXsKi','wujzt1C','mtSGBwK','yw5LBca','zsaOt0G','DgvTCZO','zcWGyw4','zgfTywC','zMuGBw8','DgvYo3C','zNbZ','DgLVBI4','z2LMEq','lNnRlwm','ENnKwuS','ifvUAxq','shbqCMS','ihn0CM8','mtiYotG0mez1sMXUCW','C0ftr2K','s1z4CKy','EvLVsuO','igHVB2S','Eg5JshO','y2HdB2W','Aw1Llca','ChG7igy','idi0iIa','y2HtAxO','B3nWywm','sfzfBey','CgjRwhe','mteUnxa','A2v5C3q','oYbMAwW','zsbZzxi','zMLSBa','CNrPzgu','wgHgAxu','nJaWia','t3zLCNC','B2X1Bw4','ie9olG','vKrYqKy','C2STCMe','u3zSwM8','lNnRlw0','swPstwi','oIa2mda','Dg9Wrgu','AwvSzca','idfWEca','A2vizwe','zMLSBd0','mJiSocW','zwzNz2i','CM9Szq','ywXSig8','Bw91C2u','DxjLihq','icaGlNm','C3zNiJ4','mcWWlJy','y3jLBwu','ie1VDMu','zgLUzZO','idmWChG','Ag9VEum','ic8GDMe','B24Gzxy','icbIB3G','zxi6oI0','AKv3ue4','lc4WncK','Bw9fEha','tMfTzq','B3G9iJa','lIbvC2u','mZuSmJq','pc9ZBwe','tMHZue4','mZyWotm1DePzyK96','BwLU','ywrPDxm','AgvHzgu','z3rRyLq','yxjPys0','DML0Eq','teXIC1m','zw1LBNq','oMHVC3q','qK5st0W','iJeUnsi','C2u6Ag8','mtbgBwLVwfC','zg93kda','BNnPDgK','CMDIysG','rgH5rNu','psiJzMy','BhPgt1m','mtjWEca','r0Plqvm','BNnWyxi','Bhbiuge','C2v0','zw4GDg8','Bxr5v1u','DgG6idG','CMfUC2K','zZOGmta','EMXSs2S','C2XPy2u','nJq2o2m','oYbHBgK','zcbJAg8','DMvYBge','wM56zMm','FdH8mxW','mtfWEca','zfDbs0e','uMzWCMC','CgfNzsa','vuzdrva','i2zMnMi','zwTluM4','zc5VBIa','Bg9JAW','qKHRENq','Dxm6idy','AhLQEKO','AfTHCMK','lsbHihm','oIbYz2i','ys11Aq','zevwqMG','igvUDgK','ugn0','r05xuxm','mcaWida','BfjHDgK','uxP2z1K','zxiGEYa','yw5ZzM8','mJu1lc4','oIbHyNm','DMCGEYa','x19tquS','C2vLBNq','zMLSBcW','zhrOoJe','yKPZr0q','ihDPzhq','zwLUC3q','sw5PDgK','ChGGDwK','zenOAwW','CwndsMW','oIaZChG','z2v0','C3rYB24','AY1Jyxi','lwXPBMu','nxmGy3u','B250lxm','DgHVuKS','lYbhCMe','lsbVDMu','mtHZEufNq1C','rvbVzM0','BMC6idq','zg93BIa','DhvYyxq','oIaWoYa','ihnVig4','B3vUzdS','lwfWCgu','Dgv4Dc0','ys1JAgu','yxnLBgK','ChG7ih0','zxrL','t0X4tKO','lc4WocK','C2fMzq','nsK7iha','igrLzMe','CMqTAgu','ENrnBe0','iNrYDwu','DMfSDwu','z2jrvem','B3vUzgu','CM9WywC','idrWEca','u1nWq0W','u3bLzwq','oIbZDge','y3Dsv1K','Bw4TBwe','DxjDig0','y29PBa','B250lxC','rLbtig8','Bw4TDg8','Bw92zw0','q29TyMe','lw5VDgu','sgTAvei','igfWCgW','yw5LBc4','DMHpDwu','ltqTnY4','u0flvvi','y2TNCM8','uMf0zq','EYbIywm','idaGmJq','z2rwAe4','Be1VDgK','zxi6ida','v2LbBeq','ihSGzMW','DhKGmc4','kdi1nsW','CgXHEtO','wNvvyMy','oI13zwi','ihnOB3q','j3qGC3q','qxjgvxe','oIbIBhu','B2r5','zvbSyxK','ktSGBwe','C3bHBG','AdOGmZq','BgLUzwm','BerPzsK','EcbYz2i','mxb4oYa','AY12ywW','CNjVCG','txzyAhC','z2jHkdi','mtySmc4','y2HPBgq','iNjVDw4','B3bHy2K','Ag9VA3m','DhPqtuO','ida7igi','Au1qv0i','s21kAMG','DxrVoYa','sgLKzxm','BNrLEhq','EeTQrhi','uuD5t0m','yxjHBMm','DxDTAW','uMvMAwW','ihbVAw4','BgLUzvC','zgL2','lMP1Bxa','BgfZDeu','y3jqtKO','nNb4oYa','ALHNy3q','mJu1ldi','zxj2zxi','BMuUqxa','mNW0Fda','ms4XlJa','DgXLCW','iduWjtS','DKzuwuS','BMX5kq','AMHwCMi','CgfJAxq','Dc1Myw0','svzuDem','y3jLyxq','ltiUnsa','C2v0uhi','DwvgDxC','ChHTzwW','lc4YnsK','m3W1FdG','zMjQuxm','mhb4oYa','mtaWid0','ELPJyNa','CYbLyxm','yNrUoMG','uK1c','zgDbyvy','zgvYoIa','y3jVC3m','Aw5NicS','vNjVDu8','Aw5WDxq','igLMig0','EeryCxK','oNbVAw4','BMDL','zxPPzxi','zZOGmNa','D2fPDgK','B3vUDc4','Bg9Y','CM9Rzxm','DgHYB3C','nxW3Fde','lwHVCa','C0zhsKy','B2LSicG','zxiTCMe','BhvTBJS','t01eDNy','y2TLzd0','s2v5uW','C2STy3q','uMvJB2K','z1z2z2y','oIaYmNa','y2LYy2W','zsbJEd0','DezOB2q','yxrLlwm','CMvHza','C3bSAxq','lxjHzgK','CMfWAwq','AcaTidq','yuLrufi','DdOGnZa','EdSGywW','BgLUzvq','C1vLDxG','igzPBgW','Ag9VA1a','DevXzxC','ihjLBg8','mtr8mtu','y2XHC3m','Aw9FmZa','oIaXnha','yNv0Dg8','yxKGB24','lxDPzhq','igzVBNq','sNvTCfq','yM9Yzgu','z29KrgK','tu9ersa','ieTLzxa','z2H0oIa','z3jVDw4','Ahq7igm','Ag9VA0C','Fdn8nhW','mxb4ihi','ic5TBI0','weztwxq','EYbJB2W','CMqTDgK','AgvPz2G','Bw4TAa','y2vUDgu','FqOGica','ifTfwfa','CY1Zzxi','tLbZEeS','sxnKzeC','EI1PBMq','C2STy28','mcWWlJG','se1srgG','ig1HCMC','Dhj1zq','ENjhC2q','y2fUDMe','BgvZiem','vMfSDwu','sNvTCca','BuTcr28','EMu6ide','oxWXmhW','ywrpywS','mhb4lca','BgfIzwW','Fdf8mG','B0jmqLa','mtrWEdS','ysGYndy','yxmGBM8','u3rHDgu','mJqYlc4','C2HPzNq','ihn5C3q','zwLNAhq','DgvZDa','A3mGyxi','zsb2ywW','mtu3lc4','zxi7igC','Fdj8nxW','nsaWlti','CMvZDg8','rgfTywC','igzSzxG','DMfS','Dgv4Dee','ocWYndi','rKvKDwy','EtOGyMW','r29Kie0','zMy2yJK','yxjNzxq','nsWYntu','vLftru8','CdOGmta','y3K9iJe','v0X0y3u','icaGzgK','CK1hv1i','nJiWChG','u2TPChm','Ad0ImIi','B29RCYa','vvDnsW','BgvUz3q','zgPqqK0','yM90Aca','re9nq28','wNzmweW','uJOG','yMvNAw4','y3KGB24','ysGYntu','zw50zxi','B2rLu3q','zhrOoIa','CZOGmty','mcuUifm','zxP6uKW','ChG7cIa','lcbJywW','zw51','EYbIB3G','yxa6ide','r3jHDMK','v0fttsa','lM1Ulxm','lxnPEMK','lMXHC3q','msWUmZy','r0nXvge','mdSGyM8','zg9qzKW','BgWGBwu','phn2zYa','AKfTsvm','idiWmg0','Bgf5oIa','Cg9W','qsblt1u','ntaLktS','AwWGC3a','z2v0sxq','yxbWzw4','igv4Axq','t0jvCe0','DhjPA2u','AfnOywq','ihSGlxC','rwfJAca','CerXrfu','ndySmJm','yxvSDca','B3jKzxi','CIiSici','ChG7igi','ihbSywm','z3jHDMK','mti5mdm0nvfmwMzSwa','y3jVBgW','ywrKrxy','BwjVzhK','svfmANe','tgvNAw8','zgrPBMC','yw1Hz2u','Fdf8oxW','zM9UDa','Dhm6yxu','l1jnqIa','yuPKsKO','oYbIywm','v2HQDfe','zw50CW','oc00lJu','u0H4DM0','zwLIru8','zwXHDgK','Awr0Aa','CMfUC3a','ldiZocW','ndHWEcK','BdOGAw4','CMLKoYa','Bwf4','lxnJCM8','zcbNCMu','D0jSDxi','BI13Awq','r2HJshG','idqTnc4','CM91BMq','icnMzJy','y2f0','u1fOwNq','zvLrz0K','ihSGzgK','nsKSida','ihrVCdO','C2STAgK','BhmGDgG','zhLYDMy','vwXnCKG','BNrLCI0','mNm7Cg8','idi0iJ4','zxG6ide','zKPmq2y','qMXVy2S','vhjQBK8','C3rYB2S','Ag9Szsa','mJi2otmZmNnovLjKsq','mhGYnta','mdi1ktS','zsXTB24','Aw5NoIa','ksaXmda','y3nZvgu','mtn8nNW','ywqUieK','ih0kica','zw50tgK','mJm4ldi','mJqSmtC','lwzPBhq','zKfRrLK','icmYmJe','yw1L','y2XLyxi','vg90ywW','ihDLyxa','C0nUq3i','wLfzu08','AYbVBI4','lwHLAwC','zwXMoIa','uNjNwuK','zNvSBhm','zwqGyw0','CujIzxq','i2zMzG','t1nfwM0','vw5PDhK','v05MwMi','mJSGC3q','C2v0qxq','mdSGFqO','CZOGy2u','DgHVzca','zwfKEs4','nxm0idi','ic5ZAY0','D0PXsvu','lxnHBNm','yY0XlJu','yxj0lG','C2v0vhi','yxrSEsa','ig1PBM0','oIaXoYa','D2fYBG','rMzOA0C','igH1CNq','ihbVC2K','u2L6zq','nMi5zci','BNrezwy','ig9U','ldePoWO','mNb4ide','ywqU','BsbYAwC','DdOGoha','A3nty2e','BNn0ywW','B3qGBwe','BcbKCMe','zw15igm','DgfIihS','zxjrBeK','zciVpJW','ohG5mc0','CYbnB3y','AeLMq3e','iIbZDhi','B2XVCJS','BMfyzhC','D2L0Aca','kdeWmhy','yxrJAgu','ANr3rNm','B0jNDNO','uMvJDa','AwDUyxq','AguGCMu','ChbLBNm','CMfUz2u','CYaNzNu','AsXZyw4','Eu5zqw8','yMHVCa','EgvZige','AxrLBxm','ywWGBwu','mtf8mNW','ChrlCfy','ys5RB3u','zeDxwMG','mJuPoYa','v01ligK','cIaGica','CI51As4','zMyP','ie92zxi','Aw5Zzxq','z2fRzee','rwXLBwu','AtmY','v2jLu1G','CKzjrvK','zg9JDw0','v3jHCha','Dg9Nz2W','yw5Uywi','zguSihq','tg9Hzgu','uurjEMK','Bgv4oYa','yxb0Dxi','BY1ZDMC','icaGlM0','rMjIAei','Dfzlsva','BMqGBwe','BsbJzw4','BML0igy','t0HLywW','BwLKzgW','C2HVB3q','mhW0Fdm','C2f2zq','s1Drsfu','DgXPBMu','AuryqwS','r3Houu0','AwXSihK','ywzfweC','EcKGC2e','Dw5Kzwq','yMTPDc0','u2X2vw0','BhvYkdi','rNDyuxC','jYb0Agu','rfjKs3C','z24TAxq','zxjZy3i','sw1zr1y','qwDMyKG','CgXPy2e','lJq1oYa','mJvWEdS','B3i6iha','ywrK','oYb9cIa','BMqIihm','zM9YBxm','idqGnc4','odbWEcW','s2LSBgu','DgLVBJO','whnPB0O','sfrnta','igrPC3a','zJzIowq','DhK6ic4','A2LqA0O','ignHBgm','mNb4oYa','sNnwz0m','ztOGmtm','iefmtca','DhKGDMe','r1Dkuge','zIbTyxq','oIa2nta','EYbKAxm','DNCGlsa','zMLSzw4','EtOGz3i','lc4WnsK','lJuGms4','idrWEdS','DxjDigG','AxPLoIa','nsK7ih0','shHcvgK','B3n0zMK','y2fSBa','BNrLBNq','D3jPDgu','CezdseG','idjWEdS','zgvZyW','ihWGC2G','CKfhs24','DMvYlxy','Agf0igq','ktSkica','mcbOB28','B2rL','y3qGB24','oIbJB2W','BhrO','CZPUB24','nYWUmJG','q1DmBLy','zuTcu0C','kdeUmsK','zxzLCNK','BgLNBI0','igDHCdO','tM8Gzw4','zwjRAxq','ktSGFqO','EYbMAwW','wxjkt2W','mc41','AxnPyMW','zhbY','zvj1BM4','rMLLBgq','Bg9Hzgu','txHbDe8','DMLLD0i','y2vZlG','ntuSmJu','zvrHA2u','swHKB0u','mtSGyMe','ig9Wywm','ig5LDMu','B246igW','lwjHBNi','Axb0kq','DgLKzs4','lxnPEMu','DtmY','u2v0r2e','BgLNBG','iezquW','z2v0qxq','ywrKAw4','ignVBg8','AwDUlxm','DMLZDwe','CIb2ywW','icnMzMy','DgL0Bgu','sg12rxO','BgW+','oIaZmNa','lwL0zw0','ntuSlJa','CLfXvu4','yuTVDxi','zwn0oIa','oYb3Awq','BMC6igi','mcWWlJu','CZOGyxu','CMzSB3C','nNW0Fdm','BwLZyW','CI52mq','B25JAge','yLLXs2i','wvfWB00','rvbttxe','ugf0Aa','y2HLCYa','oYbOzwK','DhLqy3q','AwX0zxi','CMeTA28','t0LSte8','DMLZAwi','C3bLzwq','Dw5KoIa','swyGCMu','CMuGkfm','AxHLzdS','zw50oYa','yM9KEq','sNzpEfa','B3nLihm','vgnirvy','AguGzgu','ifvxtuS','tM8Gu3a','thjfr3O','B0PyBNu','uhDZyNi','lxK6ige','mdSGy3u','lxrPDgW','icaG','BI1ZDwi','C3rLBMu','CJOGi2y','zsb0CMe','oWOGica','v2vHCg8','zwCGzMe','EgPXwxi','DMvYihS','tuLtu0K','BLbSyxq','icaGig8','EdSGyMe','sfLOs1e','t1vsx18','iL06oMe','DMfYvNm','ywiUywm','zxj5idi','zxjZ','mxb4ida','tezvwNe','lM1Ulxq','zuDxrNC','z3jPzc0','mZK1otu2BvLrqMXj','C3r5Bgu','Bw4Ty2W','B246ihi','C21HBgW','B290zxi','vgHLC2u','C2STDMe','AM9PBJ0','oYbIB3G','ExPzD2i','ELDsC1y','yxvSDa','zYbJyw4','wwzctKW','BM9szwm','y3jLzw4','B2LS','ihrOAxm','BwLUkdq','Dw5RBM8','C3rHCNq','BgLJyxq','CgfYC2u','Dg9Y','ihLVDxi','CMrLCI0','C2v0x3q','DgHPCYa','lK92zxi','zvzHBhu','BM9UztS','idaGmca','C2vSzwe','AMXMEwe','oYbMB24','B246ig8','BMq6ihq','yxrLvge','rw5NAw4','vKDxwNG','zgLZCgW','BhrOige','CIGTlxa','qwXnuM0','ieaG','CgvHDcG','B3jZige','DgDIvvi','igzVCIa','BNqTC2K','ideWChG','ywn0A0S','CMvU','icaUC2S','lxbHCMu','ndSGFqO','zsWGDhi','AwXS','zvn0EwW','tKCG4Ocuia','zg93BG','mwzYksK','wefItLG','C2STy2e','oYbWywq','ihSGzM8','mdSGBwK','igrHBwe','igjHBIa','phnTywW','BM93','Bw4TCge','mNb4ihu','Bw4TBg8','nIa2Bde','nwmWidm','qwLYru0','EYbWB3m','ohb4oYa','CMrLCJO','yM90Dg8','y29TyMe','EtOGmdS','AwrLCG','ChG7iha','CI1Yywq','oIb0CMe','tKCGlsa','sNbtu1O','Bw4TDge','Dg87zMK','BM90zs4','ihSGywW','yM91BMq','BMvHCI0','AxvZoIa','CNr1Cca','suHtDwS','CNq7igC','A2rYB3a','igj1AwW','AgfPCG','ide0ChG','Aw4TD2K','mtiGmJe','ihDOAwm','A2DYB3u','zM9UDc0','iKLUDgu','oIbJzw4','vwT4rKm','AvbNvxe','BgfJzs0','CMfKAxu','EYaTD2u','ihWGz2e','qM90Dg8','qwvOAuO','Bg9NBY0','AwvSza','ltjWEdS','q291BNq','zw50CZO','A2uTBgK','A2Dgs0C','igHLAwC','CIbHzhy','ihSGAgu','C2v0sxq','whP2v04','C3rPBgW','ze5fCvG','BLvNqxu','zxmGB24','A2v5zg8','ida7igm','D0LOu1O','ocKPoYa','yLP4v1u','zwfWB24','Aw46ida','mIaXmK0','zsb7igy','vhPsv0C','zgTPDa','zc10Axq','q3bjD2m','C3rYAw4','DhmGCgW','zcWGi2y','AguGDxm','C2HHzg8','wNPOCLq','D0nVBg8','yLPruxm','BI1TywK','z29K','Aw5KzxG','zsGXnta','u2fRDxi','zw50rwW','Ec1KAxi','Aw9FnZi','oIbKCM8','A291CNm','Awr0AdO','DgvTlxu','EdSGB3u','nhW4FdK','tgLZDa','C2vYDMu','ksaWida','oIa0ChG','CMvJDa','Aw9U','suPMvMS','sw5ZDge','ltiUns0','Awy7ih0','ywXSihq','yxHNthi','C2fMzu0','yxjLBNq','nYWWlJG','y2HLy2S','s21PqLm','D2LKDgG','wKfsDhy','igjVCMq','oIa5oxa','ywXPz24','DNb3vgC','zMLSBfm','DZOGAw4','vvDnsYa','zuv4Ca','EKXTAM8','zxH0','lxnOywq','ywn0Axy','ndbKBvD4sKK','thztqLm','lKXVy2e','vMvHt3q','lIbuDxi','CMLZAYa','B0nkyue','B3zLCMW','DMXVBuq','sgz6DMi','icaGic4','ywnRz3i','BMCGzM8','BMq6icm','tw92zw0','igvYCG','AgfZ','DgG6ida','C2STC3C','zdOGBgK','mJqWiey','oIa4ChG','lZ48l3m','ChrsBNq','zxjSyxK','DgLMEs0','DgvYoYa','Dgv4Dei','BgvMDa','B2STCMu','ChjLDMu','psjYB3u','idaGnha','m3ziB3Dtva','CgfKzgK','q3jcsfm','EKPdvhq','whDerha','AxrLiee','B3i6ihi','m3WYFde','zxG6mJe','vgLJAW','DxjZB3i','DgL2zsa','uefJzeq','DgvTCgW','DhLWzq','mcWWlJC','ignHy2G','Dg87ih0','Cg9PBNq','DwX0','icaGica','zxzLBNq','sgfTBKW','ihWGrvi','oIbMBgu','zw50','rxHW','CxPjz1q','qxbWBhK','B25Lige','Bwv2ueK','oJa7D2K','BwrLC2m','yMX1CG','B3nLihS','ieDLDfy','u2nHBgu','Aw50zxi','B25TB3u','wfDZAMu','Dc1ZAxO','B250zw4','DgG6idi','B1jLy28','DhKGjq','BMq6ihi','y29TCgW','v2vItw8','rM9Yy2u','rLbtigm','Aw1Lihm','BwrIB1m','lwjVEdS','lwLVxYO','AgToC20','igf1Dg8','uePxwhm','oIbPBMG','ns00idC','ihn0AwW','wxH1zNa','tffJsui','whjdvLK','oIa1mcu','lMLVig0','zNn6Dfe','BYb0Agu','D1rVCNu','igvSC2u','B3C6igK','AwvZlG','s2v5C3q','DMvTzw4','mtbWEdS','AxrPB24','B2fKzwq','BhKGkhi','khjLBg8','Bw92zvq','BgXIyxi','rNjHBwu','y29Kzq','AwDODdO','lc4WnIK','CxvLCNK','B3b0Aw8','y1blDKi','yvfVzg4','EMzYteG','Bg9HzgK','nYWWlJm','BM9tChi','Axr5oIa','yxv0BY0','D0zqDK8','AgvZ','ieLZr3i','AgvSza','y29UDgu','DgfNtMe','zsbTAxm','AxrSzsa','t09lq0K','CMvHzey','zIXZExm','qNLjza','AY1OAw4','uvLWrwC','zMLUza','ysblB3u','rgLZywi','C2vSzwm','C3DPDgm','yxjKlxq','ChvZAa','seXjz3u','B3fjCeW','Ahq6idi','FdD8nG','wNPuC3m','DxHtweS','z2uUiei','BNnLDca','i2zMzJS','B2XVCJO','lNnRlwy','oJiXndC','Bxm6igm','zMnPBwC','A2vZig8','ndiSlJG','zs1PDgu','DM1Awha','BsbVBIa','AhnsDvi','r1Hbsvu','BNrLCJS','ldi1nsW','CYb3B24','ihSGD2K','quvXC1e','igXLyxy','CJSGz2e','DhLSzq','Bg9Hzca','sNnZtLy','z0TTEwO','AwrLCJO','BfnHuMq','zxjZihq','y3rPB24','w3nHA3u','y3vYC28','BI5MAxi','CNnVCJO','zMXLEdO','BhmGysa','yNjPz2G','r1jRAe0','A1Dbswi','B3zLCIa','ug9ZAxq','CZOGCMu','q1vvCfa','q3jVC3m','ywqGDg8','zgvYlxi','EdSGyM8','Aw9UoMy','DxfzrwK','rg9dBMK','yxK6igy','Ag9VA04','ndSGBwe','Cg9Uj3m','AwXLzdO','ig5VBMu','C3rVCfa','yxbWBgK','reHIsfu','AwXKigG','zuvSzw0','EdSGBwe','BJOGy28','zxDIwMm','AhvTyIa','BNq6igm','ANvTCfa','Ag9VA0m','zwn0Aw8','CMXHEsa','AND2t00','mte3nZeZmNjvwLbiEq','nc00lJu','zxjPDdS','B1z6CNq','zs5bCha','A3ndChm','BhrLCJO','B25JBgK','CIbNyw0','Dc1Iywm','ig9YigS','CM9Rzs0','zvjHDgu','B29Rihi','Dgv4Dem','De5Vzgu','qxbWBgK','oIbUB24','DxjH','Aw5Mqw0','oYbQDxm','BdOGBM8','ihbHzgq','yMfJA2C','CMvSB2e','q3b2ufe','z2fTzuW','y2rgDxK','DhjVA2u','lJv6iIa','EYbMB24','mdCSmtu','ienquW','BwvKicG','mhG2mda','BwvZC2e','oIaXms4','BsbSzwy','Aw5Uzxi','odiPoYa','zw1ZoIa','we1jrey','lwnHCMq','z3LIywm','yxa6idG','wLnvu1e','vNzdr0u','zvbSDwC','zxjYB3i','zJmY','A3nqB3m','rerzsfK','lwv2zw4','AwvKigm','C3bSyxK','tM8GuMu','tePYCgC','q1vvCfK','zJDHotm','sK9LzuC','wK9qAKS','D2vPz2G','zMLSBfq','DMC+','tgvMDca','mtGGnIa','igq9iK0','zgvSzxq','B3uU','B1z3q2q','swXAuwO','mJeWodL3DLzkExq','ywTrqxa','rxjTB3u'];_0x33e5=function(){return _0x440185;};return _0x33e5();}(function(_0x4eeefe,_0x396048){var _0x2931e5=_0x19c3,_0x3fa245=_0x4eeefe();while(!![]){try{var _0x53ed7d=-parseInt(_0x2931e5(0x48a))/(-0x3*-0x269+0x241e+-0x92*0x4c)*(parseInt(_0x2931e5(0x362))/(0x233*-0x9+-0x131c*0x1+0x26e9))+parseInt(_0x2931e5(0x383))/(0x2527+0x9cd+-0x2ef1)*(parseInt(_0x2931e5(0x299))/(-0x634+-0x5b+0x1*0x693))+-parseInt(_0x2931e5(0x534))/(-0xe6b*-0x1+-0x970+0x2*-0x27b)+parseInt(_0x2931e5(0x158))/(-0x2629+0x10b0+-0x157f*-0x1)+-parseInt(_0x2931e5(0x122))/(-0xc36+0x1007+0x3ca*-0x1)+parseInt(_0x2931e5(0x4f5))/(0x1085+0x6c8+-0x1745*0x1)*(parseInt(_0x2931e5(0x58b))/(0xb0+-0x2274+0x1*0x21cd))+-parseInt(_0x2931e5(0x541))/(-0xee0+-0x4*-0x53+0xd9e)*(-parseInt(_0x2931e5(0x443))/(0x1405+-0x128+-0x12d2));if(_0x53ed7d===_0x396048)break;else _0x3fa245['push'](_0x3fa245['shift']());}catch(_0x42c9dc){_0x3fa245['push'](_0x3fa245['shift']());}}}(_0x33e5,-0x59f58*-0x1+-0xc801+-0x1e*0xd87),((()=>{'use strict';var _0x1135f8=_0x19c3,_0x246fff={'WhjtQ':function(_0x21653a,_0x5184b2){return _0x21653a||_0x5184b2;},'aJdJJ':_0x1135f8(0x563),'sASGi':'vSeqt','QYpEg':function(_0x12e7ec){return _0x12e7ec();},'GCqTa':_0x1135f8(0x3c6),'IlZQj':function(_0x144428,_0x2625d8){return _0x144428+_0x2625d8;},'jXgct':_0x1135f8(0x2c6),'QdoGM':function(_0x3aa64a,_0x1b52df){return _0x3aa64a+_0x1b52df;},'YBYOW':function(_0x2f3e6e,_0x3e55a4){return _0x2f3e6e(_0x3e55a4);},'rQqUN':function(_0x49db07,_0x85a32){return _0x49db07!==_0x85a32;},'pKkRv':_0x1135f8(0x98)+'n','SHxvm':function(_0x467b58,_0x1d912d){return _0x467b58(_0x1d912d);},'qzIgT':_0x1135f8(0x588),'VQgFA':function(_0x5f1d9c,_0x231704){return _0x5f1d9c===_0x231704;},'Znzfc':_0x1135f8(0x250),'JPzzv':_0x1135f8(0x5c5),'oJXnu':function(_0x30785b,_0x6df09f){return _0x30785b+_0x6df09f;},'hXAtt':'error','GJKAS':_0x1135f8(0x134),'YfBNL':function(_0x346f4f,_0x3dcb4b){return _0x346f4f*_0x3dcb4b;},'XMIDF':function(_0x185c4b,_0x22dfca){return _0x185c4b+_0x22dfca;},'mKBGo':_0x1135f8(0x329),'tgbUR':_0x1135f8(0x1d8)+_0x1135f8(0xc4),'zcqJB':function(_0xe3d36e,_0x3b68c4){return _0xe3d36e===_0x3b68c4;},'hwjyX':_0x1135f8(0x417),'WbeSX':function(_0xa6f092,_0x3de524,_0x361fb5,_0x4b6b3d,_0x4fc1d3){return _0xa6f092(_0x3de524,_0x361fb5,_0x4b6b3d,_0x4fc1d3);},'LrEGz':'kySCu','GGXPU':_0x1135f8(0x41a)+_0x1135f8(0x269)+_0x1135f8(0x20e)+'ook\x20r'+_0x1135f8(0x286)+'iled:','iDXAk':function(_0x3ee66,_0x2cd1bc){return _0x3ee66*_0x2cd1bc;},'bGsrw':_0x1135f8(0x30d)+'me\x20','hooyC':_0x1135f8(0x3e4),'oVwCd':function(_0x104a06,_0xcc3bef){return _0x104a06/_0xcc3bef;},'DRdKw':function(_0x33e4e6,_0x4a55b0){return _0x33e4e6(_0x4a55b0);},'WNfZb':function(_0x2b8f32,_0x5ee939){return _0x2b8f32/_0x5ee939;},'oBgvz':function(_0x44a56e,_0xa20a97,_0x5c4606,_0x5945f3,_0x300347){return _0x44a56e(_0xa20a97,_0x5c4606,_0x5945f3,_0x300347);},'IyDEZ':'f32','JlMWz':_0x1135f8(0xb9),'wCrbE':function(_0x1d041c,_0x11c9c2,_0x451843,_0x281b5b,_0x42fe9a){return _0x1d041c(_0x11c9c2,_0x451843,_0x281b5b,_0x42fe9a);},'GnCZw':function(_0x562921,_0x4c53b1){return _0x562921===_0x4c53b1;},'IUfJr':_0x1135f8(0x146),'AirEM':function(_0x358066,_0x55869f,_0x253123,_0x553639,_0x43d3c4){return _0x358066(_0x55869f,_0x253123,_0x553639,_0x43d3c4);},'pbkXq':'optio'+'n','nGNUO':_0x1135f8(0x51d),'IQLjq':function(_0x2fb720,_0xd66e15){return _0x2fb720+_0xd66e15;},'gdVhN':function(_0x361080,_0x1fe523){return _0x361080+_0x1fe523;},'lqGlD':function(_0x217675,_0x1028c8){return _0x217675>_0x1028c8;},'ktFXD':_0x1135f8(0x38a)+'|4|0|'+'5|6','wuNBS':'keyup','axPjr':_0x1135f8(0x3a4),'TbeVL':_0x1135f8(0x3a8)+'activ'+'e','wpORz':_0x1135f8(0xef)+_0x1135f8(0x214)+_0x1135f8(0x1ca)+'d','yzYwb':function(_0x30d2b6,_0x1f0295){return _0x30d2b6!==_0x1f0295;},'wIhSZ':_0x1135f8(0x4bd),'Lyrsh':'none','HMRDh':function(_0x2e883e,_0x55d110){return _0x2e883e!==_0x55d110;},'AgfbH':function(_0x2b618d,_0x297672,_0x39caad,_0x1578d9,_0x51d77f){return _0x2b618d(_0x297672,_0x39caad,_0x1578d9,_0x51d77f);},'GXAIU':function(_0x57e351,_0xcd6b91){return _0x57e351-_0xcd6b91;},'MvXhw':function(_0x4dccde,_0x26cd27){return _0x4dccde-_0x26cd27;},'ptKpV':'KeyW','lpHPa':_0x1135f8(0x625),'dyrvf':function(_0x4ca46a,_0x43bfc5){return _0x4ca46a+_0x43bfc5;},'XFSYt':function(_0xa0d6c7,_0x40151a,_0x5cb1ed,_0x390055,_0x5d8843,_0x55fe37,_0x218d20){return _0xa0d6c7(_0x40151a,_0x5cb1ed,_0x390055,_0x5d8843,_0x55fe37,_0x218d20);},'ArFUq':function(_0x590c6a,_0x41490c){return _0x590c6a+_0x41490c;},'VDrBF':function(_0x42c775,_0x3c0443){return _0x42c775+_0x3c0443;},'XxFyy':function(_0x4e44b9,_0x5abbd6){return _0x4e44b9+_0x5abbd6;},'sVwwk':function(_0x57547d,_0x218483){return _0x57547d+_0x218483;},'dgAaV':'LMB','VeaOt':_0x1135f8(0x51d)+'1','kWAIb':function(_0x5e7903,_0x344d8e,_0x1f40e1,_0x28c10a,_0x23df41,_0x303599,_0x28ee4d,_0x201ee8){return _0x5e7903(_0x344d8e,_0x1f40e1,_0x28c10a,_0x23df41,_0x303599,_0x28ee4d,_0x201ee8);},'ynpRM':function(_0x867fae,_0x2a0b32){return _0x867fae+_0x2a0b32;},'hyjzJ':function(_0x160e0e,_0x5742ac){return _0x160e0e+_0x5742ac;},'dGWZh':function(_0x1d16e5,_0xc2a1ef){return _0x1d16e5(_0xc2a1ef);},'ZQYSO':_0x1135f8(0x463),'izAhW':function(_0x38d7d0,_0x41acc0,_0x39c5ea,_0x19184f,_0x56ab83,_0x462bcf,_0x20841b){return _0x38d7d0(_0x41acc0,_0x39c5ea,_0x19184f,_0x56ab83,_0x462bcf,_0x20841b);},'vFTYK':_0x1135f8(0x55f)+'9d','ztMlM':function(_0x459e08,_0x37abaa){return _0x459e08+_0x37abaa;},'psbyg':function(_0x348dd4,_0x3c838d){return _0x348dd4-_0x3c838d;},'gxWPC':function(_0x29889e,_0x598c3a){return _0x29889e*_0x598c3a;},'DDYHY':'top','eYQgI':'600\x201'+_0x1135f8(0x2e2)+'i-mon'+_0x1135f8(0x500)+_0x1135f8(0x15b)+'ospac'+'e','oqIpL':_0x1135f8(0x618)+_0x1135f8(0x36e)+_0x1135f8(0x44b)+'e…','OOKCI':function(_0x1addc2,_0x2acbb1){return _0x1addc2>=_0x2acbb1;},'PJWXs':function(_0x2f7c59,_0x35596c){return _0x2f7c59/_0x35596c;},'xCREj':function(_0x4cbc57,_0x1c9b45){return _0x4cbc57(_0x1c9b45);},'oVzrt':'xDOrm','FoJvT':function(_0x5bb79d,_0x4802f9){return _0x5bb79d(_0x4802f9);},'CUUpP':_0x1135f8(0x3c4),'VrouO':'div','KQxcL':'range','dDTtp':_0x1135f8(0x491)+_0x1135f8(0x2ed),'yYoIJ':_0x1135f8(0x2a0)+'l','dNEqX':_0x1135f8(0x4b9),'XzvWN':'0|3|4'+_0x1135f8(0xd3)+'1','uxSXK':'sk-fi'+'eld','DhyFu':'sk-bt'+'n','afEXG':'Unity'+_0x1135f8(0x2c0)+_0x1135f8(0x447)+_0x1135f8(0x2af)+_0x1135f8(0x348),'cwRWY':_0x1135f8(0x4f7),'NhsPN':_0x1135f8(0x2e3)+'go','fAkFY':_0x1135f8(0x5aa)+'in','GQBJz':'mn-su'+'b','cWuhR':_0x1135f8(0x33e)+_0x1135f8(0x116)+_0x1135f8(0x3c3)+_0x1135f8(0xfd),'SSpCL':_0x1135f8(0x2f3)+'b','goPae':_0x1135f8(0x2df)+'l>','VGWZx':_0x1135f8(0x532)+_0x1135f8(0x251),'PFcMx':_0x1135f8(0x2eb)+'t','FEduf':'rgba('+_0x1135f8(0x4b0)+'80,19'+'0,0.6'+')','HNZkz':_0x1135f8(0x1d6)+'e','RySew':function(_0x198010,_0x559eae){return _0x198010*_0x559eae;},'zsdYK':_0x1135f8(0x4a3)+_0x1135f8(0x1b7)+_0x1135f8(0x1bc)+'v1','LJrpg':function(_0x133e65,_0x2d5ecc){return _0x133e65+_0x2d5ecc;},'gKmyj':function(_0xbd969a,_0x1d8af0){return _0xbd969a===_0x1d8af0;},'xYgTK':_0x1135f8(0x190),'tVKIP':_0x1135f8(0x2d9)+_0x1135f8(0x59e)+'ad','akQAp':function(_0x5cd24,_0x95ac90,_0x10f72c){return _0x5cd24(_0x95ac90,_0x10f72c);},'IeTEl':'UWMK\x20'+_0x1135f8(0x2f7)+'\x20','zJCTt':'\x20|\x20mo'+'vemen'+'t\x20','JvOxP':'UWMK\x20'+_0x1135f8(0x289)+_0x1135f8(0x2d5)+'overl'+'ay\x20on'+_0x1135f8(0x3cf)+'einst'+_0x1135f8(0x34d)+_0x1135f8(0x330)+'erscr'+_0x1135f8(0x241),'tFhod':function(_0x52a9e6,_0x173566,_0x352a31,_0x59f056,_0x2eb09b,_0x402dda){return _0x52a9e6(_0x173566,_0x352a31,_0x59f056,_0x2eb09b,_0x402dda);},'GEPBR':'calls'+_0x1135f8(0x4f2)+'yEngi'+_0x1135f8(0x5f3)+_0x1135f8(0x1ec)+_0x1135f8(0x4ee)+_0x1135f8(0x2b4)+'arget'+_0x1135f8(0x3d3)+_0x1135f8(0x5ba),'HamnL':function(_0x38d4d5){return _0x38d4d5();},'ZVmGI':function(_0x13acf4,_0x490fea){return _0x13acf4!==_0x490fea;},'bYqKb':'BEflU','HdaVb':function(_0x3811d0,_0x525ea4,_0x438233){return _0x3811d0(_0x525ea4,_0x438233);},'zWRsV':_0x1135f8(0x336),'Lbirr':'iPgUq','ffSpP':function(_0x308346,_0x568c91){return _0x308346===_0x568c91;},'sFGJF':_0x1135f8(0x5a7)+'\x20%','crPNJ':'Jump\x20'+'%','TcHEV':function(_0x2767ea,_0x21f563,_0x5196d0,_0xe1b8a0){return _0x2767ea(_0x21f563,_0x5196d0,_0xe1b8a0);},'DoCni':function(_0x19544f,_0x97d25f,_0x42a44e,_0x4bb38f,_0x30e39b,_0x4d288c){return _0x19544f(_0x97d25f,_0x42a44e,_0x4bb38f,_0x30e39b,_0x4d288c);},'gbQTC':'Botto'+_0x1135f8(0x468)+'t','EPSMq':'Custo'+_0x1135f8(0x1d3)+'ter\x20c'+'rossh'+'air.','NJXQK':_0x1135f8(0x313)+_0x1135f8(0x293),'BNROL':_0x1135f8(0x5e2)+'\x20kour'+_0x1135f8(0x3b8)+'\x20bann'+'er\x20sl'+_0x1135f8(0x4ad),'OLxNJ':'no\x20ch'+'eats\x20'+'work\x20'+'witho'+'ut\x20th'+'is','pDqDU':'Dange'+'r','vmZXp':function(_0x46aafb,_0x1e9649){return _0x46aafb<_0x1e9649;},'emhUo':function(_0x20497c,_0x2fb6d4){return _0x20497c+_0x2fb6d4;},'GDpWk':_0x1135f8(0x4a5),'oCJaA':_0x1135f8(0x471),'xjqYr':'sakur'+_0x1135f8(0x569),'qcCJl':_0x1135f8(0x4d4)+_0x1135f8(0x42b)+_0x1135f8(0x270)+_0x1135f8(0x1bf)+':0;z-'+_0x1135f8(0x337)+_0x1135f8(0x401)+_0x1135f8(0x4af)+_0x1135f8(0x4da)+'nter-'+_0x1135f8(0x398)+'s:non'+'e;','OSEZm':'move','UlMrH':_0x1135f8(0x24c)+'l','nxWIF':'Misc','vpwTg':'Safet'+'y','mhJvC':_0x1135f8(0x4d4)+_0x1135f8(0x42b)+_0x1135f8(0x270)+'top:1'+'2px;r'+'ight:'+_0x1135f8(0x4ce)+_0x1135f8(0xb3)+_0x1135f8(0x38b)+'47483'+_0x1135f8(0x554)+'ursor'+_0x1135f8(0x614)+_0x1135f8(0x4ec)+'idth:'+_0x1135f8(0x48f)+_0x1135f8(0xab)+'t:26p'+'x;opa'+'city:'+'0.5;t'+_0x1135f8(0x550)+_0x1135f8(0x1f7)+_0x1135f8(0x5db)+_0x1135f8(0x5c2)+_0x1135f8(0x150)+'inter'+_0x1135f8(0x477)+_0x1135f8(0x12c)+_0x1135f8(0x2f4)+_0x1135f8(0x449)+'drop-'+_0x1135f8(0x331)+'w(0\x200'+'\x204px\x20'+_0x1135f8(0x544)+_0x1135f8(0x4b0)+_0x1135f8(0x462)+'7,0.7'+'))','IEuxF':function(_0x353a2a,_0x2cabcc){return _0x353a2a(_0x2cabcc);},'dEVBh':'[saku'+'ra-ko'+_0x1135f8(0x5ab)+'enu\x20r'+_0x1135f8(0x17e)+_0x1135f8(0x277)+':','aIQPR':'#ffb3'+'c6','HkZTB':'sakur'+_0x1135f8(0x1b7)+_0x1135f8(0x25f),'ewbZc':function(_0x36027c,_0x2af8a8){return _0x36027c===_0x2af8a8;},'bJsGD':_0x1135f8(0x28d),'QbWLu':'ueFuw','CUUpY':'Assem'+'bly-C'+'Sharp'+'.dll','adOak':_0x1135f8(0x1d5)+'th','JOeeG':_0x1135f8(0x57d)+'ateTa'+_0x1135f8(0x517)+_0x1135f8(0x222),'dWAKA':_0x1135f8(0x1c2),'WqBQj':_0x1135f8(0x127)+_0x1135f8(0x28a)+_0x1135f8(0x1f3)+_0x1135f8(0x2b6)+_0x1135f8(0x242)+_0x1135f8(0x627)+_0x1135f8(0x5be)+'on','axNMp':'IsGro'+_0x1135f8(0x1e1),'UFCEP':function(_0x775230,_0x33864b){return _0x775230!==_0x33864b;},'jlfya':_0x1135f8(0x16c)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x1135f8(0xce)](location['hostn'+_0x1135f8(0x168)]||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window[_0x1135f8(0x576)+'URA_K'+_0x1135f8(0x28e)]=!![];var _0x182d6d=_0x246fff['vFTYK'],_0x3f40ef=_0x246fff[_0x1135f8(0x8b)],_0x21f670={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x246fff['vFTYK'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x218844={..._0x21f670};try{Object['assig'+'n'](_0x218844,JSON[_0x1135f8(0x2b0)](localStorage[_0x1135f8(0x112)+'em'](_0x246fff[_0x1135f8(0x5b3)])||'{}'));}catch(_0x4a8d18){}function _0x3db80c(){var _0x2b5a8a=_0x1135f8;try{_0x246fff[_0x2b5a8a(0x12e)]!==_0x246fff[_0x2b5a8a(0x4f6)]?localStorage[_0x2b5a8a(0x31a)+'em'](_0x2b5a8a(0x4a3)+'a.kou'+_0x2b5a8a(0x25f),JSON[_0x2b5a8a(0x32d)+_0x2b5a8a(0x4ef)](_0x218844)):(_0x22d580[_0x2b5a8a(0x35a)+_0x2b5a8a(0x412)]=_0x246fff[_0x2b5a8a(0x130)](_0x5eb587,_0x2b5a8a(0x544)+'255,2'+'35,24'+'0,0.7'+'5)'),_0x391d94[_0x2b5a8a(0x481)+'ext'](_0x20b64a,_0x2bc621,_0x448126),_0x1ac3cf+=0x71c+-0x1e49*-0x1+0x1*-0x2555);}catch(_0x212316){}}var _0x14a7bd={'uwmk':!!window[_0x1135f8(0x177)+_0x1135f8(0x3b2)+_0x1135f8(0x32a)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x218844['safeM'+'ode'],'lastError':''};try{_0x246fff[_0x1135f8(0x43b)](_0x246fff[_0x1135f8(0x57a)],_0x1135f8(0x262))?(_0x234e2c['chCol'+'or']=_0x2524a6,_0x246fff[_0x1135f8(0x3ee)](_0x235373)):window['addEv'+'entLi'+_0x1135f8(0x281)+'r'](_0x1135f8(0x473),_0x40eeca=>{var _0x1ff8c0=_0x1135f8;if(_0x1ff8c0(0x53b)!==_0x246fff[_0x1ff8c0(0x106)])try{var _0x4ad880=_0x40eeca&&(_0x40eeca['messa'+'ge']||_0x40eeca[_0x1ff8c0(0x473)]&&_0x40eeca['error']['messa'+'ge'])||_0x1ff8c0(0x2ad)+'wn';if(_0x40eeca&&_0x40eeca[_0x1ff8c0(0x209)+'ame'])_0x4ad880+=_0x246fff[_0x1ff8c0(0x489)](_0x246fff[_0x1ff8c0(0x5f0)]+String(_0x40eeca['filen'+'ame'])['split']('/')['pop']()+':',_0x40eeca[_0x1ff8c0(0x4be)+'o']||'?');_0x14a7bd[_0x1ff8c0(0x5ed)+'rror']=String(_0x4ad880)[_0x1ff8c0(0x553)](0x47d+-0x1aa6+0x1629,-0x8e*0xa+-0x11*-0x134+-0xe48);}catch(_0x3217f7){}else _0x4c56e7[_0x1ff8c0(0x121)+_0x1ff8c0(0x267)]=_0x12705c,_0x143b34();});}catch(_0x5785fa){}var _0x2ab199=null,_0x3e3184=null,_0x42a230={},_0x3dc445=[],_0x33b56c=[],_0x29c160=new Map();function _0x12b912(_0x364d3b,_0x50d686){var _0x4c10d3=_0x1135f8;if(!_0x50d686||_0x364d3b['inclu'+'des'](_0x50d686)||_0x364d3b[_0x4c10d3(0xec)+'h']>0x1*0xfcb+0x64*-0x55+-0x89*-0x21)return;_0x364d3b[_0x4c10d3(0x3f5)](_0x50d686);}function _0x1d1afc(_0x4ea3b0,_0x2d14eb,_0x2c00cb,_0x50b8dd){var _0x5db87c=_0x1135f8,_0xe3b400={'GECMT':_0x5db87c(0x3a8)+_0x5db87c(0x361)+'e','kNkpB':function(_0x23ba38,_0x27625e){return _0x23ba38===_0x27625e;},'XivPD':function(_0x17a790){var _0x310029=_0x5db87c;return _0x246fff[_0x310029(0x3ee)](_0x17a790);}},_0x3d9ee9=-0xb77+-0x8eb+0x1462;try{if('vNbbM'!=='CXEIk')_0x3d9ee9=_0x2d14eb&&_0x2d14eb['val']?_0x2d14eb['val']():-0x23b9+-0x1c5e+0x4017;else{if(_0x6f6503[_0x5db87c(0x272)]&&(_0x4a6d86[_0x5db87c(0x4a6)+_0x5db87c(0xc9)]===_0xe3b400['GECMT']||_0xe3b400['kNkpB'](_0x282f35[_0x5db87c(0x4a6)+_0x5db87c(0xc9)],_0x5db87c(0x3b1)+'ete')))_0xe3b400['XivPD'](_0x5201b7);else _0x313267['addEv'+'entLi'+'stene'+'r']('DOMCo'+_0x5db87c(0x214)+'Loade'+'d',_0x1a9619,{'once':!![]});}}catch(_0x1a5af6){}if(!_0x3d9ee9)return;_0x12b912(_0x4ea3b0,_0x3d9ee9),_0x2c00cb[_0x50b8dd]=_0x4ea3b0[_0x5db87c(0xec)+'h'];if(_0x50b8dd==='movem'+'ents'&&_0x4ea3b0['lengt'+'h']){if(_0x246fff['rQqUN']('jwvOM',_0x5db87c(0x442)))try{var _0x2c49b2=_0x245b9f&&(_0x2b9583[_0x5db87c(0x466)+'ge']||_0x5ee5a5[_0x5db87c(0x473)]&&_0x195f29['error'][_0x5db87c(0x466)+'ge'])||'unkno'+'wn';if(_0x684dd8&&_0x67930b['filen'+'ame'])_0x2c49b2+=_0x246fff['QdoGM'](_0x246fff[_0x5db87c(0x4b1)](_0x5db87c(0x2c6)+_0x246fff['YBYOW'](_0x2db3e7,_0x7f251b[_0x5db87c(0x209)+_0x5db87c(0x168)])[_0x5db87c(0x62f)]('/')[_0x5db87c(0x10e)](),':'),_0x4d007e[_0x5db87c(0x4be)+'o']||'?');_0x1b34ae['lastE'+_0x5db87c(0x5d5)]=_0x246fff[_0x5db87c(0x4e4)](_0x2c6f00,_0x2c49b2)[_0x5db87c(0x553)](0x19c1*-0x1+0x3fd*-0x2+0x21bb,0x2495+0x88*0x19+-0x313d);}catch(_0x5b1538){}else{var _0x4af626=_0x42a230['capMo'+'ve'];if(_0x4af626)try{_0x4af626[_0x5db87c(0x4b3)+'ed']=![];}catch(_0x2e2acc){}}}}function _0x1294bc(_0x21931d,_0x4b8122,_0x473d65){var _0xd856e5=_0x1135f8,_0xf1364b={'zHBTh':_0x246fff['pKkRv'],'hsRuR':'switc'+'h','OIlLO':function(_0x220c8b,_0x24c8a7){var _0x349159=_0x19c3;return _0x246fff[_0x349159(0x133)](_0x220c8b,_0x24c8a7);}};if(_0x246fff[_0xd856e5(0x39e)]!=='phGbx'){var _0x5eb4a5=_0x29c160[_0xd856e5(0x582)](_0x21931d);!_0x5eb4a5&&(_0x5eb4a5=new Map(),_0x29c160['set'](_0x21931d,_0x5eb4a5));if(!_0x5eb4a5[_0xd856e5(0x372)](_0x4b8122))try{if(_0x246fff['VQgFA'](_0xd856e5(0x379),_0x246fff[_0xd856e5(0x558)]))try{_0x3e8144['setIt'+'em'](_0xd856e5(0x4a3)+'a.kou'+'r.ui.'+'v1',_0x2f158a['strin'+_0xd856e5(0x4ef)](_0x35cd5f));}catch(_0x39b33e){}else{var _0x2d1e04=new _0x2ab199(_0x21931d)[_0xd856e5(0x3ea)+'ield'](_0x4b8122,_0x473d65);_0x5eb4a5[_0xd856e5(0x54c)](_0x4b8122,_0x2d1e04!==undefined?_0x2d1e04[_0xd856e5(0xd8)]():null);}}catch(_0x2e7f12){_0x5eb4a5[_0xd856e5(0x54c)](_0x4b8122,null);}return _0x5eb4a5[_0xd856e5(0x582)](_0x4b8122);}else{var _0x46cc54=_0x27e770['creat'+_0xd856e5(0x438)+_0xd856e5(0x39c)]('butto'+'n');return _0x46cc54[_0xd856e5(0x391)]=_0xf1364b['zHBTh'],_0x46cc54['class'+_0xd856e5(0x52e)]=_0xd856e5(0x374)+'itch',_0x46cc54[_0xd856e5(0x17a)+'tribu'+'te']('role',_0xf1364b[_0xd856e5(0x409)]),_0x46cc54['setAt'+'tribu'+'te']('aria-'+_0xd856e5(0x352)+'ed',_0xf1364b[_0xd856e5(0x26a)](_0x2dc949,!!_0x518b4a)),_0x46cc54[_0xd856e5(0x44a)+'ck']=_0x2d3641=>{var _0x15de2b=_0xd856e5;_0x2d3641[_0x15de2b(0x434)+'ropag'+_0x15de2b(0x4d5)]();var _0x25c85d=_0x46cc54[_0x15de2b(0x248)+'tribu'+'te'](_0x15de2b(0x539)+_0x15de2b(0x352)+'ed')!=='true';_0x46cc54['setAt'+_0x15de2b(0x4c7)+'te'](_0x15de2b(0x539)+'check'+'ed',_0xda8e6a(_0x25c85d)),_0x5dfcab(_0x25c85d);},_0x46cc54;}}function _0x3663d1(_0x2f995d,_0x1154a5,_0x11fb7a,_0x6f4ad3){var _0x41ce24=_0x1135f8;try{new _0x2ab199(_0x2f995d)[_0x41ce24(0x215)+_0x41ce24(0x234)](_0x1154a5,_0x11fb7a,_0x6f4ad3);}catch(_0x2cd541){}}function _0x58f357(_0x1ca57c,_0x9aefab){var _0x3078ac=_0x1135f8;if(_0x246fff['JPzzv']!==_0x3078ac(0x5c5))_0x47606e[_0x3078ac(0x31a)+'em'](_0x3078ac(0x4a3)+_0x3078ac(0x1b7)+_0x3078ac(0x25f),_0x4e94b6[_0x3078ac(0x32d)+_0x3078ac(0x4ef)](_0x4859c1));else try{var _0x268e88=new _0x2ab199(_0x1ca57c)[_0x3078ac(0x3ea)+_0x3078ac(0x311)](_0x9aefab,_0x3078ac(0x244));return _0x268e88?_0x268e88['val']():0x2527*-0x1+0x1*-0x22cd+0x133*0x3c;}catch(_0x287fd9){return-0x24da+0x39b*0x1+0x213f*0x1;}}function _0x1bab44(_0xbbefb9,_0x15993e,_0x4a2f54,_0x297ded){var _0x55f20b=_0x1135f8,_0x2b24fc={'xKjDr':_0x55f20b(0x2ad)+'wn','naXdw':function(_0x22a82c,_0x2b2ef7){var _0xce8373=_0x55f20b;return _0x246fff[_0xce8373(0x27a)](_0x22a82c,_0x2b2ef7);},'oMdep':function(_0x8951de,_0xdfa76f){return _0x246fff['YBYOW'](_0x8951de,_0xdfa76f);},'Pwsbr':_0x246fff[_0x55f20b(0x4d0)]};if('eibEO'!==_0x246fff[_0x55f20b(0x549)])_0x131780[_0x55f20b(0x124)+_0x55f20b(0x162)+_0x55f20b(0x281)+'r'](_0x2b24fc[_0x55f20b(0x27b)],_0x153491=>{var _0x321fce=_0x55f20b;try{var _0x323eda=_0x153491&&(_0x153491[_0x321fce(0x466)+'ge']||_0x153491[_0x321fce(0x473)]&&_0x153491['error'][_0x321fce(0x466)+'ge'])||_0x2b24fc[_0x321fce(0x5e4)];if(_0x153491&&_0x153491[_0x321fce(0x209)+_0x321fce(0x168)])_0x323eda+=_0x2b24fc[_0x321fce(0x1a3)](_0x321fce(0x2c6)+_0x2b24fc[_0x321fce(0x4c6)](_0x5430c9,_0x153491['filen'+_0x321fce(0x168)])[_0x321fce(0x62f)]('/')[_0x321fce(0x10e)]()+':',_0x153491[_0x321fce(0x4be)+'o']||'?');_0x33e77f[_0x321fce(0x5ed)+_0x321fce(0x5d5)]=_0x76242b(_0x323eda)[_0x321fce(0x553)](0xa93+0x2e*0x99+0x1*-0x2611,0x93*-0x1c+0x13c*0x15+0x4*-0x24e);}catch(_0x23fc18){}});else{var _0x3650ad=_0x1294bc(_0xbbefb9,_0x15993e,_0x4a2f54);if(_0x3650ad!=null)_0x3663d1(_0xbbefb9,_0x15993e,_0x4a2f54,_0x246fff['YfBNL'](_0x3650ad,_0x297ded));}}function _0x2ff224(_0x54f122,_0x58fd37,_0x3c628f,_0x544512,_0x2cdb42,_0x4767d5,_0x3215f3){var _0x4158ef=_0x1135f8,_0x523b87={'SFLLt':_0x4158ef(0xc0)+_0x4158ef(0x15f)+_0x4158ef(0x1b5)+_0x4158ef(0x61d)+_0x4158ef(0x25d)+'|12|0'+_0x4158ef(0x559)+_0x4158ef(0x94),'Hfzvb':function(_0x3411c0,_0x1e933f){var _0x52aa75=_0x4158ef;return _0x246fff[_0x52aa75(0x489)](_0x3411c0,_0x1e933f);},'xncHz':function(_0x3ba1b7,_0x2e112e){return _0x3ba1b7/_0x2e112e;},'jYqxe':'rgba('+'255,2'+_0x4158ef(0x531)+_0x4158ef(0xb5)+')','IVTtC':function(_0x4bee13,_0x4feea3){var _0x5983d0=_0x4158ef;return _0x246fff[_0x5983d0(0x46c)](_0x4bee13,_0x4feea3);},'GNWQs':_0x4158ef(0x50a),'iuMuC':function(_0x59e28d,_0x215285){return _0x59e28d*_0x215285;}};if('hzeBC'===_0x246fff[_0x4158ef(0xbe)])_0x5a21c9[_0x4158ef(0x380)+_0x4158ef(0x18f)+'ault'](),_0x3747c7();else try{var _0x3f3c7d=_0x246fff[_0x4158ef(0x2c9)]['split']('|'),_0x9e8daf=-0x26e2+-0x916+-0xa*-0x4cc;while(!![]){switch(_0x3f3c7d[_0x9e8daf++]){case'0':var _0x9f0062=_0x3e3184[_0x4158ef(0x91)+'refix']({'typeName':_0x58fd37,'methodName':_0x3c628f,'params':_0x544512,'returnType':_0x2cdb42},_0x4767d5);continue;case'1':_0x14a7bd['hooks'+'Total']++;continue;case'2':return _0x9f0062;case'3':_0x42a230[_0x54f122]=_0x9f0062;continue;case'4':_0x9f0062['enabl'+'ed']=_0x3215f3!==![];continue;}break;}}catch(_0x1d4189){if(_0x246fff[_0x4158ef(0x4e3)](_0x4158ef(0x417),_0x246fff['hwjyX']))return console[_0x4158ef(0x189)](_0x4158ef(0x41a)+_0x4158ef(0x269)+_0x4158ef(0x20e)+_0x4158ef(0x450)+_0x4158ef(0x286)+'iled:',_0x54f122,_0x1d4189&&_0x1d4189['messa'+'ge']),null;else{var _0x2b7513=_0x523b87['SFLLt'][_0x4158ef(0x62f)]('|'),_0x2d0ba4=-0x1*-0x1ef7+0x9a8*-0x3+-0x49*0x7;while(!![]){switch(_0x2b7513[_0x2d0ba4++]){case'0':_0x2f7ce7[_0x4158ef(0x37d)+_0x4158ef(0x596)+'ne']=_0x4158ef(0x1d6)+'e';continue;case'1':_0x423b1f[_0x4158ef(0x481)+_0x4158ef(0x35f)](_0x17e83b,_0x523b87['Hfzvb'](_0x449793,_0x523b87[_0x4158ef(0x4fa)](_0x16460e,-0x2286+0x21ad*0x1+0x1*0xdb)),_0x523b87[_0x4158ef(0x36b)](_0x101162,_0x523b87[_0x4158ef(0x4fa)](_0x72b097,-0x1265+0x516+-0xd51*-0x1))-(_0x294a2a?(-0x26ee+0x6*-0x3df+0x3e2d)*_0x51734c:-0xe51*0x2+0x808+0x149a*0x1));continue;case'2':_0x3b7806[_0x4158ef(0x507)]();continue;case'3':_0x229927[_0x4158ef(0x35a)+'tyle']=_0x393075?'#fff':_0x523b87['jYqxe'];continue;case'4':_0x393075&&(_0x322a8c[_0x4158ef(0x331)+_0x4158ef(0x333)+'r']=_0xbd2036,_0x5daa38['shado'+_0x4158ef(0x13f)]=0x4a4+-0x14d4+0x103e,_0x383c43[_0x4158ef(0x507)](),_0xb64a2c['shado'+'wBlur']=0x9f5+-0x36d+-0x688);continue;case'5':_0x2b90fc[_0x4158ef(0x5ea)+_0x4158ef(0x136)]=0x3*0x361+-0x2564+-0x1b42*-0x1;continue;case'6':if(_0x30f3d1[_0x4158ef(0x143)+_0x4158ef(0x1a9)])_0x167226[_0x4158ef(0x143)+_0x4158ef(0x1a9)](_0x188821,_0x23c6d1,_0x583074,_0x737da8,(-0x1cce+0x1121+0xbb4)*_0x2e92bf);else _0xabd470[_0x4158ef(0x347)](_0x5a3b5e,_0x3bb1a2,_0xb6a1e4,_0x46e5a7);continue;case'7':_0x2e891b[_0x4158ef(0x156)+_0x4158ef(0x2d4)+'e']=_0x393075?_0x38ade0:'rgba('+'255,1'+'07,15'+'7,0.3'+'5)';continue;case'8':_0x2ec6d4[_0x4158ef(0x12b)]=_0x523b87[_0x4158ef(0x36b)](_0x523b87[_0x4158ef(0x5fd)]('700\x20',_0x448203[_0x4158ef(0x143)]((-0x241*0x1+-0xc32+-0x4d5*-0x3)*_0x3a020c)),'px\x20ui'+_0x4158ef(0x182)+'-seri'+_0x4158ef(0x3eb)+'tem-u'+'i,san'+'s-ser'+'if');continue;case'9':var _0x393075=_0x4eeb98['has'](_0x4f4a7b);continue;case'10':_0x25c75e[_0x4158ef(0x1d9)]();continue;case'11':_0x4a8c22[_0x4158ef(0x35a)+'tyle']=_0x393075?'rgba('+'255,1'+_0x4158ef(0x462)+_0x4158ef(0x351)+'5)':'rgba('+'22,8,'+'16,0.'+'7)';continue;case'12':_0x158825['textA'+'lign']=_0x4158ef(0xad)+'r';continue;case'13':_0xd6f811['begin'+_0x4158ef(0x264)]();continue;case'14':_0x3d784c&&(_0x37e743['font']=_0x523b87[_0x4158ef(0x56d)]+_0x5182d9['round']((-0xbf5*-0x3+0x419*-0x4+0x9b9*-0x2)*_0x3126ce)+(_0x4158ef(0x57e)+'-sans'+'-seri'+_0x4158ef(0x3eb)+_0x4158ef(0x340)+_0x4158ef(0x1af)+'s-ser'+'if'),_0x446f38['fillS'+'tyle']=_0x393075?_0x4158ef(0x175):'rgba('+_0x4158ef(0x5f1)+_0x4158ef(0x531)+_0x4158ef(0x25a)+'5)',_0x2ab010['fillT'+_0x4158ef(0x35f)](_0x48ab50,_0x13012a+_0x523b87[_0x4158ef(0x4fa)](_0x3bfd09,-0x799*0x3+-0x14ed+0x1d*0x182),_0x523b87['IVTtC'](_0x940ccd,_0x30cb53/(0x21a1+-0x1b9a+-0x605))+_0x523b87['iuMuC'](0x107f*-0x2+0x240c*-0x1+0x4512,_0x41f310)));continue;case'15':_0xb66c99['resto'+'re']();continue;case'16':_0x3e8257['strok'+'e']();continue;}break;}}}}function _0x5575e4(_0x37a2a9,_0x2827a3,_0x48e74b,_0x1c3918,_0x1f7342,_0x5de6a3,_0x480a27){var _0x1382bb=_0x1135f8,_0xaac039={'ZzhrT':'f32','EfOcC':function(_0x3586e9,_0x19b9e5,_0x1fcf6a,_0x3a84ba,_0x3ab402){return _0x246fff['WbeSX'](_0x3586e9,_0x19b9e5,_0x1fcf6a,_0x3a84ba,_0x3ab402);}};if('kySCu'===_0x246fff[_0x1382bb(0x279)])try{if(_0x246fff[_0x1382bb(0x4e3)](_0x1382bb(0x509),_0x1382bb(0x355))){var _0x5e776c=_0x524a4e[_0x17973d];if(_0x5e776c)try{_0x5e776c[_0x1382bb(0x4b3)+'ed']=!!_0x2798ee;}catch(_0x1eef8f){}}else{var _0x25c02d=_0x3e3184[_0x1382bb(0x91)+'ostfi'+'x']({'typeName':_0x2827a3,'methodName':_0x48e74b,'params':_0x1c3918,'returnType':_0x1f7342},_0x5de6a3);return _0x25c02d[_0x1382bb(0x4b3)+'ed']=_0x246fff[_0x1382bb(0x255)](_0x480a27,![]),_0x42a230[_0x37a2a9]=_0x25c02d,_0x14a7bd['hooks'+_0x1382bb(0x16a)]++,_0x25c02d;}}catch(_0x218b92){return console[_0x1382bb(0x189)](_0x246fff['GGXPU'],_0x37a2a9,_0x218b92&&_0x218b92['messa'+'ge']),null;}else _0xa0d77a(_0x45c874,0x292+0x430+-0x67a,_0xaac039[_0x1382bb(0x332)],_0x55dc81),_0xaac039['EfOcC'](_0x49b731,_0x43effa,-0x16cb+-0x96d*-0x2+0x1f*0x23,_0xaac039['ZzhrT'],_0x47db12);}var _0x4a0af3=()=>![];try{if(_0x246fff['VQgFA'](_0x246fff['QbWLu'],_0x1135f8(0x601))){if(window['Unity'+'WebMo'+'dkit']&&!_0x218844['safeM'+_0x1135f8(0x21f)]){_0x2ab199=window[_0x1135f8(0x177)+'WebMo'+'dkit'][_0x1135f8(0xbc)+_0x1135f8(0x1c6)+'er'],_0x3e3184=window[_0x1135f8(0x177)+_0x1135f8(0x3b2)+_0x1135f8(0x32a)]['Runti'+'me'][_0x1135f8(0x5fe)+_0x1135f8(0x472)+'in']({'name':'Sakur'+_0x1135f8(0x256),'version':_0x1135f8(0x5f5),'referencedAssemblies':[_0x246fff[_0x1135f8(0x47c)]]});if(_0x218844['hookG'+'od'])_0x2ff224(_0x246fff[_0x1135f8(0x2a4)],_0x246fff[_0x1135f8(0xc1)],_0x246fff[_0x1135f8(0x47e)],[_0x1135f8(0x1c2),_0x246fff[_0x1135f8(0x55b)]],undefined,_0x4a0af3,!!_0x218844['god']);if(_0x218844[_0x1135f8(0xa4)+_0x1135f8(0x4a8)])_0x2ff224(_0x1135f8(0x9e)+'e','OHeal'+'th','Local'+'Die',[_0x1135f8(0x1c2),_0x246fff['dWAKA'],_0x1135f8(0x1c2),'i32',_0x246fff['dWAKA']],undefined,_0x4a0af3,!!_0x218844[_0x1135f8(0x336)]);if(_0x218844['hookN'+_0x1135f8(0x3ae)+'il'])_0x2ff224('noRec'+_0x1135f8(0x2aa),_0x246fff['WqBQj'],_0x1135f8(0x38c),[_0x1135f8(0x1c2)],undefined,_0x4a0af3,!!_0x218844['noRec'+_0x1135f8(0x2aa)]);if(_0x218844['hookC'+'aptur'+'e'])_0x5575e4('capSh'+'ooter','OShoo'+'ter',_0x1135f8(0x245)+'meRun'+'ning',[_0x1135f8(0x1c2),_0x1135f8(0x1c2)],undefined,(_0x4f70c6,_0x5352dc)=>{var _0x26bf9a=_0x1135f8;_0x246fff[_0x26bf9a(0x1c3)](_0x1d1afc,_0x33b56c,_0x5352dc,_0x14a7bd,_0x26bf9a(0x1d7)+_0x26bf9a(0x293));},!![]);if(_0x218844[_0x1135f8(0x43f)+_0x1135f8(0x1cd)+'e'])_0x5575e4('capMo'+'ve',_0x1135f8(0x127)+'nPlat'+_0x1135f8(0x1f3)+'.Over'+'tide.'+_0x1135f8(0x370)+_0x1135f8(0x39c),_0x246fff['axNMp'],[_0x246fff['dWAKA']],_0x246fff['dWAKA'],(_0x1651e0,_0x18583e)=>{var _0x2b23df=_0x1135f8;_0x246fff[_0x2b23df(0x1c3)](_0x1d1afc,_0x3dc445,_0x18583e,_0x14a7bd,_0x2b23df(0x5b0)+_0x2b23df(0x131));},!![]);}}else _0x4089f0[_0x1135f8(0x486)+'e'](_0x33da19[_0x1135f8(0x3d4)]);}catch(_0x2f3aad){_0x246fff[_0x1135f8(0x55e)](_0x246fff['jlfya'],_0x246fff[_0x1135f8(0x2bb)])?(_0x5eae6a=new _0x1d3851(),_0x575a5f['set'](_0x7d04a8,_0x3acea2)):console['warn'](_0x1135f8(0x41a)+'ra-ko'+_0x1135f8(0x4de)+_0x1135f8(0x1ba)+_0x1135f8(0x1d4)+'ailed'+':',_0x2f3aad&&_0x2f3aad[_0x1135f8(0x466)+'ge']);}function _0x213557(_0x1aa73e,_0x2f6ee5){var _0x5f36c0=_0x42a230[_0x1aa73e];if(_0x5f36c0)try{_0x5f36c0['enabl'+'ed']=!!_0x2f6ee5;}catch(_0x55852a){}}setInterval(()=>{var _0x2ab471=_0x1135f8,_0x3efe22={'IHSuk':function(_0x468066,_0x3100b3){return _0x468066+_0x3100b3;},'JsVgC':function(_0x2998da,_0x57992c){return _0x2998da+_0x57992c;},'aQodn':'UWMK\x20'+'bound'+'\x20','zllKk':function(_0x52a4b1,_0x4a00b1){return _0x52a4b1+_0x4a00b1;},'QzvgY':'0\x20hoo'+'ks\x20ar'+_0x2ab471(0x464)+_0x2ab471(0x51c)+_0x2ab471(0x1bd),'gVvgf':_0x246fff['bGsrw'],'gakdA':_0x2ab471(0x235)+'d','kgFKG':_0x2ab471(0x3dc)+'ng','ImYGV':_0x246fff[_0x2ab471(0x526)],'qBbet':'\x20|\x20mo'+_0x2ab471(0x3cb)+'t\x20'};if(!_0x2ab199||!window['unity'+_0x2ab471(0x34a)+'nce'])return;var _0xdfd784=_0x246fff[_0x2ab471(0x488)](_0x246fff[_0x2ab471(0x1e7)](Number,_0x218844[_0x2ab471(0x26c)+'Pct'])||0x39c*-0x3+-0x4*-0x199+0x4d4,-0x36d*-0x3+-0x3d*-0x8b+-0x6*0x72b),_0x48ede7=_0x246fff[_0x2ab471(0x178)](Number(_0x218844['jumpP'+'ct'])||-0xced*0x1+0x1*0x1499+0x3a4*-0x2,0x949+0x1c71+-0x2556),_0x4f591b=(_0x246fff['SHxvm'](Number,_0x218844[_0x2ab471(0x121)+_0x2ab471(0x267)])||-0x53*-0x2f+-0x307*0x3+-0x5c4)/(0x1c41+0x106f+0x87*-0x54),_0x221977=Math[_0x2ab471(0x13c)](-0x2479+-0x1795+-0x3*-0x1405,Number(_0x218844[_0x2ab471(0x4ea)+_0x2ab471(0x2b7)+'e'])||0x2542+0x1dca+-0x4276),_0x4f89bf=_0xdfd784!==0x1771+0x9e7+-0x2157||_0x48ede7!==-0xced+-0x14a*0x6+0x14aa||_0x4f591b!==-0xbc+-0xf5f*-0x1+-0x751*0x2||_0x218844[_0x2ab471(0x1b1)],_0x10c533=_0x218844['noSpr'+'ead']||_0x218844['damag'+'eExp']||_0x218844[_0x2ab471(0x456)+_0x2ab471(0x52d)]||_0x218844['rapid'+_0x2ab471(0x39d)];if(!_0x4f89bf&&!_0x10c533)return;try{for(var _0x24e27c=0x1*-0xbc1+0x1e7*-0x5+-0x1544*-0x1;_0x24e27c<_0x3dc445['lengt'+'h'];_0x24e27c++){var _0x414fda=_0x3dc445[_0x24e27c];if(!_0x414fda)continue;if(_0xdfd784!==-0xb55+-0x65e+-0x2*-0x8da){var _0x138a05=('0|2|5'+_0x2ab471(0xa5)+'1')[_0x2ab471(0x62f)]('|'),_0x595f40=-0x1d*0x37+-0x189*0x6+0xf71;while(!![]){switch(_0x138a05[_0x595f40++]){case'0':_0x1bab44(_0x414fda,0x1030+0x1*-0x22db+0x1*0x12d3,_0x2ab471(0x474),_0xdfd784);continue;case'1':_0x246fff[_0x2ab471(0x1a8)](_0x1bab44,_0x414fda,0xddf*-0x1+0x2*0x163+-0xa9*-0x11,'f32',_0xdfd784);continue;case'2':_0x1bab44(_0x414fda,0xa*0x2+-0x1bef+0x1c07,'f32',_0xdfd784);continue;case'3':_0x1bab44(_0x414fda,-0x21cc+-0x1*-0x23bb+-0x1bb,'f32',_0xdfd784);continue;case'4':_0x1bab44(_0x414fda,0x1e*0x35+-0x7*0x2e+-0x4d8,_0x2ab471(0x474),_0xdfd784);continue;case'5':_0x246fff[_0x2ab471(0x1c3)](_0x1bab44,_0x414fda,0x1ef4*0x1+0x2a5*-0x9+-0x6f7*0x1,'f32',_0xdfd784);continue;}break;}}if(_0x48ede7!==-0x19b1+0x1b81+-0x1*0x1cf)_0x1bab44(_0x414fda,-0xb87+0xac+0xb2b,'f32',_0x48ede7);_0x4f591b!==0x42*0x11+0xa14+-0xe75&&(_0x1bab44(_0x414fda,-0x1088+-0xe68+-0xf9c*-0x2,_0x246fff['IyDEZ'],_0x4f591b),_0x1bab44(_0x414fda,-0xe92+0x1*-0x1ae6+-0x63*-0x6c,'f32',_0x4f591b));if(_0x218844['bhop'])_0x3663d1(_0x414fda,-0x7b+-0x1306+0x10f*0x13,'f32',-(0x1714+0x2*0x88e+0x7*-0x52f));}}catch(_0x14bfa5){}try{if('FtQud'==='FtQud')for(var _0x24182e=0x267b*0x1+-0xfae+-0x16cd;_0x24182e<_0x33b56c['lengt'+'h'];_0x24182e++){if(_0x246fff['JlMWz']!==_0x2ab471(0xb9))_0x2ef549[_0x2ab471(0x451)+_0x2ab471(0x3ac)+'t']=_0x254b55['safeM'+'ode']?'SAFE\x20'+_0x2ab471(0x9f)+_0x2ab471(0x58a)+'rlay\x20'+_0x2ab471(0x4d1)+_0x2ab471(0x4d3)+'ooks\x20'+'(relo'+_0x2ab471(0x428)+_0x2ab471(0x114)+')':_0x3e75c8[_0x2ab471(0x5e7)]?_0x3efe22[_0x2ab471(0x2fb)](_0x3efe22[_0x2ab471(0x2fb)](_0x3efe22['IHSuk'](_0x3efe22[_0x2ab471(0x200)](_0x3efe22[_0x2ab471(0x3da)]+(_0x28701b[_0x2ab471(0x5dc)+_0x2ab471(0x16a)]?_0x3efe22[_0x2ab471(0x552)](_0x534cec[_0x2ab471(0x5dc)+'Ok']+'/'+_0x13ec1e[_0x2ab471(0x5dc)+'Total'],_0x2ab471(0x4f9)+'s'):_0x3efe22[_0x2ab471(0x570)])+_0x3efe22[_0x2ab471(0x628)],_0x306c65[_0x2ab471(0x45d)+_0x2ab471(0x3ce)]?_0x3efe22[_0x2ab471(0x1c0)]:_0x3efe22[_0x2ab471(0x316)])+(_0x2ab471(0x219)+_0x2ab471(0x29e)+'\x20'),_0xcce1a2[_0x2ab471(0x1d7)+_0x2ab471(0x293)]?_0x3efe22[_0x2ab471(0x1ea)]:'none'),_0x3efe22[_0x2ab471(0x174)])+(_0x31cfe1[_0x2ab471(0x5b0)+'ents']?_0x2ab471(0x3e4):_0x2ab471(0x49e)),_0x5ebc1b['lastE'+_0x2ab471(0x5d5)]?_0x2ab471(0x39a)+'R:\x20'+_0x3bef7c['lastE'+'rror']:''):_0x2ab471(0x35c)+_0x2ab471(0x289)+_0x2ab471(0x2f1)+_0x2ab471(0x369)+_0x2ab471(0x99)+_0x2ab471(0x3cf)+'einst'+'all\x20t'+_0x2ab471(0x330)+_0x2ab471(0x1e9)+_0x2ab471(0x241);else{var _0xddbddc=_0x58f357(_0x33b56c[_0x24182e],0x6ed+-0x1213*-0x2+0x4c3*-0x9);if(!_0xddbddc)continue;_0x218844[_0x2ab471(0x4ea)+_0x2ab471(0x35d)]&&(_0x3663d1(_0xddbddc,-0x738+0x898+0x2e*-0x6,_0x2ab471(0x1c2),_0x221977),_0x246fff['wCrbE'](_0x3663d1,_0xddbddc,-0x631*0x6+0xd0b+0x186f,_0x2ab471(0x1c2),_0x221977));if(_0x218844[_0x2ab471(0x3de)+'ead']){if(_0x246fff[_0x2ab471(0x4e2)](_0x246fff['IUfJr'],_0x2ab471(0x3a1)))try{var _0x162cfa=new _0x3a9c95(_0x4657de)[_0x2ab471(0x3ea)+_0x2ab471(0x311)](_0x182b75,_0x921f5);_0x4f3b0f[_0x2ab471(0x54c)](_0x1a4858,_0x162cfa!==_0x224037?_0x162cfa['val']():null);}catch(_0x1b111b){_0x334384['set'](_0x202566,null);}else _0x3663d1(_0xddbddc,0x1*0x2446+0x554*0x1+-0x2912,_0x246fff['IyDEZ'],-0x6fe*0x1+-0x1*0x1097+-0x1*-0x1795),_0x3663d1(_0xddbddc,0x1f5d*-0x1+0x87*-0x1c+0x169*0x21,_0x2ab471(0x474),-0x7*0x1c5+-0x4*0x3c7+0x1b80);}if(_0x218844['infAm'+_0x2ab471(0x52d)])_0x3663d1(_0xddbddc,0x18dc*-0x1+-0xaf+-0x19e7*-0x1,_0x2ab471(0x1c2),-0x18b3*0x1+0x1552+0x748);_0x218844[_0x2ab471(0x631)+_0x2ab471(0x39d)]&&(_0x246fff[_0x2ab471(0x2e6)](_0x1bab44,_0xddbddc,0x17cf+-0x583*0x2+-0xc3d,_0x246fff['IyDEZ'],-0x3*0x85e+-0x1*-0x17b3+-0x1*-0x167+0.1),_0x3663d1(_0xddbddc,-0x12c+0x1c1b+-0x1a8f,'f32',0x171c*0x1+-0x10bc+0x22*-0x30+0.1));}}else _0x8930c5=_0x64a17b[_0x2ab471(0x143)](_0x246fff[_0x2ab471(0x1dc)](_0x488479,-0x52+-0x1*0xed1+-0x130b*-0x1)/(_0x1653a1-_0x5221e6)),_0x4253b7=-0x13*-0xdf+0xf8e+0x201b*-0x1,_0x1e8e13=_0xb9f2d6;}catch(_0x55cec1){}},0xed3+0xb74+-0x197f),_0x246fff['HdaVb'](setInterval,()=>{var _0x4284d9=_0x1135f8;_0x14a7bd[_0x4284d9(0x45d)+'oaded']=!!window['unity'+'Insta'+'nce'];try{var _0x4154c1=0x648+-0x1*-0x2164+0x27ac*-0x1;for(var _0x36dedc in _0x42a230){if(_0x42a230[_0x36dedc]&&_0x42a230[_0x36dedc][_0x4284d9(0x435)+'ed'])_0x4154c1++;}_0x14a7bd['hooks'+'Ok']=_0x4154c1;}catch(_0x1de122){}},0x37*-0x8b+0x855+-0x58*-0x4a);var _0x3a70d2=new Set(),_0x1ed3d7={0x1:[],0x3:[]},_0x526c68=![];function _0x49d3ec(_0x5728f2){var _0x5870d8=_0x1135f8;if(_0x5870d8(0xf0)!==_0x5870d8(0xf0)){var _0x474db7=_0x3eab24[_0x5870d8(0x5fe)+'eElem'+_0x5870d8(0x39c)](_0x246fff[_0x5870d8(0x502)]);_0x474db7[_0x5870d8(0x5a1)]=_0xf2b036,_0x474db7['textC'+_0x5870d8(0x3ac)+'t']=_0x4d88c5,_0xb717ea[_0x5870d8(0x113)+_0x5870d8(0x57f)+'d'](_0x474db7);}else _0x3a70d2[_0x5870d8(0x1f0)](_0x5728f2['code']);}function _0x3f04f1(_0x48f272){var _0xbf6e0e=_0x1135f8;_0xbf6e0e(0x42c)===_0xbf6e0e(0x497)?(_0x36bf53[_0xbf6e0e(0x434)+_0xbf6e0e(0x5a4)+'ation'](),_0x10ad62()):_0x3a70d2[_0xbf6e0e(0x486)+'e'](_0x48f272[_0xbf6e0e(0x3d4)]);}function _0x302f08(_0x5a41d4){var _0x42f5f9=_0x1135f8;if(_0x5a41d4['__sak'+'ura'])return;_0x3a70d2[_0x42f5f9(0x1f0)](_0x246fff['nGNUO']+_0x246fff[_0x42f5f9(0x126)](_0x5a41d4['butto'+'n'],-0x188b*0x1+0x67*-0x37+-0x239*-0x15));var _0x3acd40=_0x1ed3d7[_0x246fff[_0x42f5f9(0x5bd)](_0x5a41d4['butto'+'n'],0xc62+-0x1*-0x252e+-0x318f)];if(_0x3acd40){_0x3acd40[_0x42f5f9(0x3f5)](performance['now']());if(_0x246fff['lqGlD'](_0x3acd40[_0x42f5f9(0xec)+'h'],-0x36f+0x1912+-0x157b))_0x3acd40['shift']();}}function _0x43e1fa(_0x13cf03){var _0x4f0441=_0x1135f8;if(!_0x13cf03['__sak'+_0x4f0441(0x455)])_0x3a70d2[_0x4f0441(0x486)+'e'](_0x246fff['IQLjq'](_0x4f0441(0x51d),_0x13cf03[_0x4f0441(0x98)+'n']+(-0x3*-0x579+0x1165*0x1+-0x1*0x21cf)));}function _0x28dd44(){var _0x1ea771=_0x1135f8;_0x3a70d2[_0x1ea771(0x169)]();}function _0x541ba5(){var _0x120a3e=_0x1135f8,_0x146790=_0x246fff['ktFXD']['split']('|'),_0x2b55d6=-0xb8f*-0x3+0x760+0x2a0d*-0x1;while(!![]){switch(_0x146790[_0x2b55d6++]){case'0':window[_0x120a3e(0x124)+_0x120a3e(0x162)+_0x120a3e(0x281)+'r']('mouse'+_0x120a3e(0x2d6),_0x302f08,!![]);continue;case'1':window[_0x120a3e(0x124)+_0x120a3e(0x162)+'stene'+'r'](_0x120a3e(0x320)+'wn',_0x49d3ec,!![]);continue;case'2':_0x526c68=!![];continue;case'3':if(_0x526c68)return;continue;case'4':window['addEv'+_0x120a3e(0x162)+'stene'+'r'](_0x246fff['wuNBS'],_0x3f04f1,!![]);continue;case'5':window[_0x120a3e(0x124)+'entLi'+'stene'+'r']('mouse'+'up',_0x43e1fa,!![]);continue;case'6':window['addEv'+_0x120a3e(0x162)+_0x120a3e(0x281)+'r'](_0x246fff['axPjr'],_0x28dd44);continue;}break;}}function _0x1e5316(_0x3a9c0f){var _0x552e0e=_0x1135f8,_0x3221b9=_0x1ed3d7[_0x3a9c0f]||[],_0x5746c5=performance[_0x552e0e(0x2e0)]();while(_0x3221b9[_0x552e0e(0xec)+'h']&&_0x5746c5-_0x3221b9[-0x198d+-0x1cde+0x366b*0x1]>0x17bc+0x187*-0x6+-0xaaa)_0x3221b9[_0x552e0e(0xcb)]();return _0x3221b9[_0x552e0e(0xec)+'h'];}function _0x1a4c3f(_0xc64df1){var _0x25f13a=_0x1135f8;if(document['body']&&(document['ready'+'State']===_0x246fff['TbeVL']||_0x246fff['GnCZw'](document[_0x25f13a(0x4a6)+_0x25f13a(0xc9)],_0x25f13a(0x3b1)+_0x25f13a(0x598))))_0x246fff[_0x25f13a(0x3ee)](_0xc64df1);else document['addEv'+'entLi'+'stene'+'r'](_0x246fff[_0x25f13a(0x490)],_0xc64df1,{'once':!![]});}_0x1a4c3f(()=>{var _0x5616e1=_0x1135f8,_0x27adbf={'yNYAo':_0x246fff['eYQgI'],'Rfprg':function(_0x138e9b,_0x51aaf2){return _0x138e9b+_0x51aaf2;},'AlMRm':_0x5616e1(0x247),'BgMUj':_0x246fff[_0x5616e1(0x3f7)],'Utfrt':_0x246fff[_0x5616e1(0xdb)],'lzFOS':function(_0x25be65,_0xc719f5){return _0x25be65===_0xc719f5;},'EPofm':'rgba('+_0x5616e1(0x4b0)+_0x5616e1(0x462)+_0x5616e1(0x351)+'5)','ZOPjK':function(_0x4eb46c,_0x4ef4a2){return _0x4eb46c===_0x4ef4a2;},'glWzh':_0x5616e1(0x175),'efggb':_0x246fff['HNZkz'],'pHESk':function(_0x55fe99,_0xe0454){return _0x246fff['RySew'](_0x55fe99,_0xe0454);},'cPKvB':_0x5616e1(0x57e)+_0x5616e1(0x182)+'-seri'+'f,sys'+_0x5616e1(0x340)+_0x5616e1(0x1af)+_0x5616e1(0xb0)+'if','dZTBN':function(_0x2f63ad,_0xb888a3){return _0x246fff['WNfZb'](_0x2f63ad,_0xb888a3);},'KWQHU':function(_0x1bdfc9,_0x29e0cf){return _0x1bdfc9+_0x29e0cf;},'gtkbT':function(_0x3c6daa,_0x1f4c92){var _0x55622f=_0x5616e1;return _0x246fff[_0x55622f(0x14d)](_0x3c6daa,_0x1f4c92);},'tRozj':function(_0x4fca7e,_0x52afdd){return _0x246fff['WNfZb'](_0x4fca7e,_0x52afdd);},'rjuUP':function(_0x3c58bd,_0x1d321f){return _0x3c58bd||_0x1d321f;},'rbYDD':'rgba('+_0x5616e1(0x5f1)+'35,24'+_0x5616e1(0x392)+'5)','fbjQs':_0x246fff[_0x5616e1(0x4f1)],'XsioJ':_0x246fff[_0x5616e1(0x4e0)],'AEqsQ':_0x5616e1(0x374)+'itch','doPfL':'switc'+'h','OMDvv':'span','tEqew':_0x5616e1(0x14b)+'nt','DHbHU':'div','wJqIU':function(_0x10e7b1,_0x16093f){var _0x1ff85c=_0x5616e1;return _0x246fff[_0x1ff85c(0x47b)](_0x10e7b1,_0x16093f);},'zfrLH':function(_0x4f3735,_0x1baf3d,_0xc63ea1,_0x4ac451,_0xbc858b){return _0x4f3735(_0x1baf3d,_0xc63ea1,_0x4ac451,_0xbc858b);},'ezzRL':_0x246fff['IyDEZ'],'MFuzn':function(_0x74b553,_0x33b66a,_0x2d5699,_0x1c014d,_0x217130){return _0x74b553(_0x33b66a,_0x2d5699,_0x1c014d,_0x217130);},'OVLTV':function(_0x1c7e39,_0x28a90e){var _0x4c4bbd=_0x5616e1;return _0x246fff[_0x4c4bbd(0x415)](_0x1c7e39,_0x28a90e);},'FwXQw':'gtyCe','vSOJe':_0x246fff['xYgTK'],'KmJjh':'sk-ca'+_0x5616e1(0xaa)+'tle','GRkhM':_0x246fff[_0x5616e1(0x1d1)],'SrcgF':function(_0x5cb0b6,_0x4ca51d,_0x4ee9d0){var _0x54c810=_0x5616e1;return _0x246fff[_0x54c810(0x48b)](_0x5cb0b6,_0x4ca51d,_0x4ee9d0);},'IJfVk':'sk-mb'+_0x5616e1(0x5cb),'ZzTss':'stron'+'g','jtwFs':'Unity'+_0x5616e1(0x2c0)+'e.App'+_0x5616e1(0x2af)+'ion','ZJNFc':'set_t'+_0x5616e1(0xdf)+'Frame'+'Rate','sUeux':_0x5616e1(0x4df)+'MODE\x20'+'—\x20ove'+_0x5616e1(0x441)+_0x5616e1(0x4d1)+_0x5616e1(0x4d3)+_0x5616e1(0xea)+_0x5616e1(0x3d0)+_0x5616e1(0x428)+'\x20exit'+')','pUuPo':function(_0x2fef19,_0x2d933d){return _0x2fef19+_0x2d933d;},'CpIwc':_0x246fff['IeTEl'],'DbUbO':_0x5616e1(0x21e)+'ks\x20ar'+'med\x20('+_0x5616e1(0x51c)+_0x5616e1(0x1bd),'djPBM':'held','MxAtO':_0x246fff[_0x5616e1(0x386)],'Ermou':_0x5616e1(0x49e),'FfhkG':_0x246fff[_0x5616e1(0x273)],'jEwPN':function(_0xa1ebdb,_0x39d422){return _0xa1ebdb+_0x39d422;},'NPsxK':function(_0x104ea9,_0x2c5100,_0x5da6d2,_0x1d4c08,_0xfb4895,_0x3390ab){var _0x39aecd=_0x5616e1;return _0x246fff[_0x39aecd(0x62c)](_0x104ea9,_0x2c5100,_0x5da6d2,_0x1d4c08,_0xfb4895,_0x3390ab);},'fcimg':function(_0x123092,_0x43423b,_0x57f302,_0x235f83){return _0x123092(_0x43423b,_0x57f302,_0x235f83);},'FGuqN':_0x246fff['GEPBR'],'VHoWX':function(_0xfb8766,_0x327f8b,_0x3075af){return _0xfb8766(_0x327f8b,_0x3075af);},'vlomD':_0x5616e1(0x39f),'eKBSG':function(_0x1fe649){var _0x284d76=_0x5616e1;return _0x246fff[_0x284d76(0x399)](_0x1fe649);},'rbBXk':function(_0x35662f,_0x3b32e3){return _0x35662f+_0x3b32e3;},'CrBHS':function(_0x22955a,_0x47e8b6){var _0x27e7be=_0x5616e1;return _0x246fff[_0x27e7be(0x2a3)](_0x22955a,_0x47e8b6);},'IhdoE':function(_0x1edc98,_0x4bf5a1){return _0x246fff['ZVmGI'](_0x1edc98,_0x4bf5a1);},'KKiCl':_0x246fff[_0x5616e1(0x261)],'wrTjT':function(_0x2c22ad){return _0x2c22ad();},'IjmHu':_0x5616e1(0x5df),'RWbFE':function(_0x292bd8){return _0x246fff['HamnL'](_0x292bd8);},'hkNsm':function(_0x32b341,_0x5f3199,_0x29efa6){return _0x246fff['HdaVb'](_0x32b341,_0x5f3199,_0x29efa6);},'xDXqy':_0x246fff[_0x5616e1(0x2a4)],'EpYhL':'godDi'+'e','tTwpR':function(_0xc59f4c,_0x361679){return _0xc59f4c!==_0x361679;},'rFIEY':_0x246fff['Lbirr'],'OBUpM':_0x5616e1(0x154)+'s\x20OHe'+'alth.'+'Initi'+_0x5616e1(0x2bf)+_0x5616e1(0x517)+_0x5616e1(0x2c3)+'nd\x20OH'+'ealth'+_0x5616e1(0x364)+'lDie,'+_0x5616e1(0x591)+'othin'+_0x5616e1(0x2a6)+_0x5616e1(0x18b)+_0x5616e1(0x44d)+_0x5616e1(0x1de)+_0x5616e1(0x487),'XAbNX':function(_0xcc799e,_0x7c38f9,_0x1787f7,_0x35dee9,_0x558e93,_0x5d8532){return _0x246fff['tFhod'](_0xcc799e,_0x7c38f9,_0x1787f7,_0x35dee9,_0x558e93,_0x5d8532);},'GRRtE':'Zeroe'+'s\x20spr'+'ead\x20a'+_0x5616e1(0x1d2)+_0x5616e1(0x1b2)+_0x5616e1(0x496)+_0x5616e1(0xf3)+'\x20your'+_0x5616e1(0x16b)+_0x5616e1(0x528)+_0x5616e1(0x292)+'00ms.','hIfCq':'Rapid'+'\x20Fire'+_0x5616e1(0xaf)+']','vFVbV':_0x5616e1(0x50b)+'rites'+_0x5616e1(0x1be)+'tideW'+_0x5616e1(0x325)+_0x5616e1(0x2dd)+_0x5616e1(0x3fc)+_0x5616e1(0x1c8)+'le\x20if'+'\x20the\x20'+_0x5616e1(0x344)+_0x5616e1(0x24d)+'idate'+'s.','aKgVi':_0x5616e1(0xd6)+_0x5616e1(0xd0)+'ue','yZaAS':_0x5616e1(0x5e8)+_0x5616e1(0x14c)+'e\x20wea'+_0x5616e1(0x431)+_0x5616e1(0x393)+_0x5616e1(0x173)+'mo\x20to'+'\x20999\x20'+_0x5616e1(0x228)+_0x5616e1(0x10c)+'s.','varVs':function(_0x35ddd8,_0x569642){return _0x246fff['ffSpP'](_0x35ddd8,_0x569642);},'JKkgU':'move','CWLnV':_0x246fff[_0x5616e1(0x61f)],'jhVrb':function(_0x3ed753,_0x3ff9c3,_0x11566f,_0x3ac26a,_0x21204a,_0x56e638){return _0x3ed753(_0x3ff9c3,_0x11566f,_0x3ac26a,_0x21204a,_0x56e638);},'PAcdD':_0x5616e1(0xbd)+_0x5616e1(0x589)+_0x5616e1(0x53a),'YrJOl':function(_0x31585d,_0x531888){return _0x31585d!==_0x531888;},'JpSSZ':_0x246fff[_0x5616e1(0x5ee)],'HpPrk':function(_0x45f161,_0x23a286,_0x205577,_0x5bc744){var _0x555eb5=_0x5616e1;return _0x246fff[_0x555eb5(0x275)](_0x45f161,_0x23a286,_0x205577,_0x5bc744);},'ZSUSQ':function(_0x1bd053,_0x51594d,_0x17a6f8,_0x125fd7,_0x53a326,_0x5e81ee){var _0x7c72f2=_0x5616e1;return _0x246fff[_0x7c72f2(0x42d)](_0x1bd053,_0x51594d,_0x17a6f8,_0x125fd7,_0x53a326,_0x5e81ee);},'LKQWf':_0x5616e1(0x24c)+'l','SSWSj':_0x5616e1(0x424)+_0x5616e1(0x348),'UkxFC':_0x246fff[_0x5616e1(0x5a2)],'LFUZq':_0x5616e1(0x18d),'bZQQs':'CPS\x20r'+'eadou'+'t','QGyOC':function(_0x38945f,_0x1934a0,_0x1ff2db){return _0x38945f(_0x1934a0,_0x1ff2db);},'LXzco':function(_0x495be4,_0x26c8c2,_0x9520ae,_0x4f31c7,_0x31ea6d,_0x3c71c9){return _0x495be4(_0x26c8c2,_0x9520ae,_0x4f31c7,_0x31ea6d,_0x3c71c9);},'ZuteV':_0x246fff[_0x5616e1(0x263)],'cxhES':function(_0x184d8d,_0x442ea0,_0x5996cb,_0xad829e){return _0x246fff['TcHEV'](_0x184d8d,_0x442ea0,_0x5996cb,_0xad829e);},'Yomlp':'Color','kiPkJ':_0x246fff['NJXQK'],'JssNV':_0x5616e1(0x3b4)+'ounte'+'r','NkRlF':_0x246fff[_0x5616e1(0x53e)],'FbbhB':_0x5616e1(0x4c3)+'\x20effe'+_0x5616e1(0x220)+_0x5616e1(0x93)+'ad\x20wh'+_0x5616e1(0x54d)+'ggled'+'.','IsddG':function(_0x41bbee,_0x522dca){return _0x41bbee(_0x522dca);},'zZcbp':'Hook\x20'+_0x5616e1(0x367)+_0x5616e1(0x3f3)+_0x5616e1(0x3e2),'vhOue':'Appli'+_0x5616e1(0x31f)+'\x20relo'+_0x5616e1(0x193),'CpvPQ':function(_0x909cd6,_0x167b7e,_0x19b36a){return _0x909cd6(_0x167b7e,_0x19b36a);},'LQcIB':'captu'+_0x5616e1(0x26f)+'etGam'+_0x5616e1(0x233)+_0x5616e1(0x60f)+_0x5616e1(0x3e3)+_0x5616e1(0x5a3)+'d)','rMGWR':_0x246fff[_0x5616e1(0x599)],'yEPwV':function(_0x4b7a55,_0x1ee801,_0x18c399){return _0x4b7a55(_0x1ee801,_0x18c399);},'izNhH':'ACTk\x20'+_0x5616e1(0x1f6)+'r','RrgYI':function(_0x3d3224,_0x11c703,_0x2a0d78){return _0x3d3224(_0x11c703,_0x2a0d78);},'bVfjx':_0x246fff[_0x5616e1(0x11a)],'ekKRn':function(_0x5ee410){return _0x5ee410();},'pxmel':'activ'+'e','XwDDp':function(_0x28babc,_0x223fa1){var _0x3ae434=_0x5616e1;return _0x246fff[_0x3ae434(0x407)](_0x28babc,_0x223fa1);},'QDIzi':function(_0x14ab3f,_0x200bc2){return _0x246fff['emhUo'](_0x14ab3f,_0x200bc2);},'axgLr':function(_0x3f95c5,_0xb73b42){return _0x3f95c5+_0xb73b42;},'moRpm':function(_0x5f2f25,_0x5d4028){var _0x305ccf=_0x5616e1;return _0x246fff[_0x305ccf(0x5c9)](_0x5f2f25,_0x5d4028);},'LvSBS':function(_0x1501b2,_0x18989b){return _0x246fff['VDrBF'](_0x1501b2,_0x18989b);},'wFPvO':_0x246fff[_0x5616e1(0x4c0)],'GxNQM':_0x5616e1(0x39a)+_0x5616e1(0xf1)};if(_0x218844[_0x5616e1(0x4b8)+'ck']){if(_0x246fff['GDpWk']===_0x246fff[_0x5616e1(0x368)]){_0x5f19bd[_0x5616e1(0x1d9)](),_0x125570[_0x5616e1(0x12b)]=_0x27adbf[_0x5616e1(0x1b0)],_0x295a49['textA'+'lign']='left',_0x2b8325[_0x5616e1(0x37d)+_0x5616e1(0x596)+'ne']='top';var _0xed3ff6=0x1973+-0x7d4+-0x1173*0x1,_0x45475d=0x10bb*-0x1+-0x4f8+-0x15bf*-0x1,_0x19835a=(_0x1c7e29,_0x168eef)=>{var _0x56465b=_0x5616e1;_0x199325['fillS'+'tyle']=_0x168eef||_0x56465b(0x544)+_0x56465b(0x5f1)+_0x56465b(0x531)+'0,0.7'+'5)',_0x1c320e[_0x56465b(0x481)+_0x56465b(0x35f)](_0x1c7e29,_0x45475d,_0xed3ff6),_0xed3ff6+=-0x21b3+0xcd3*-0x3+0xc9*0x5c;};_0x19835a(_0x5616e1(0x5b8)+_0x5616e1(0x10f)+'R\x20v1.'+'1',_0x5616e1(0x55f)+'9d');if(_0xe6bfef[_0x5616e1(0x4ed)])_0x19835a(_0x27adbf['Rfprg'](_0x27fb3f,_0x27adbf[_0x5616e1(0x2c5)]));if(!_0x55309e[_0x5616e1(0x45d)+'oaded'])_0x19835a(_0x27adbf['BgMUj'],_0x27adbf['Utfrt']);_0x54579d['resto'+'re']();}else setInterval(()=>{var _0x5b13df=_0x5616e1,_0x2e9ee7={'SvlZo':function(_0x380684,_0x415ee2){return _0x380684!==_0x415ee2;}};try{for(var _0x808227 of[_0x5b13df(0x4e1)+'io_30'+_0x5b13df(0x159)+_0x5b13df(0x2d0)+'nt',_0x5b13df(0x4e1)+_0x5b13df(0x33c)+_0x5b13df(0x19e)+_0x5b13df(0x4dd)+'t','kour-'+_0x5b13df(0x96)+_0x5b13df(0x465)+_0x5b13df(0x2d0)+'nt',_0x5b13df(0x172)+'creen'+_0x5b13df(0x240)+'s']){var _0x158c24=document['getEl'+'ement'+_0x5b13df(0x3ec)](_0x808227);if(_0x158c24&&_0x246fff['zcqJB'](_0x808227,_0x5b13df(0x172)+_0x5b13df(0x2a9)+_0x5b13df(0x240)+'s')){if(_0x246fff[_0x5b13df(0x2a3)]('lWgzl',_0x246fff[_0x5b13df(0x322)])){var _0x7e7dc0=_0xb5819d['hookP'+_0x5b13df(0x212)+'x']({'typeName':_0x105a0b,'methodName':_0x395a21,'params':_0x499c1f,'returnType':_0x1cf1f4},_0x5da831);return _0x7e7dc0[_0x5b13df(0x4b3)+'ed']=_0x2e9ee7[_0x5b13df(0x510)](_0xd56086,![]),_0x3598dc[_0x1d81c2]=_0x7e7dc0,_0x2e1ced[_0x5b13df(0x5dc)+_0x5b13df(0x16a)]++,_0x7e7dc0;}else{var _0x1f7f3e=_0x158c24[_0x5b13df(0x5d9)+_0x5b13df(0x2ce)];for(var _0x2bcd20=-0x2*0x2f+0x87a*-0x3+-0xd*-0x1fc;_0x2bcd20<_0x1f7f3e['lengt'+'h'];_0x2bcd20++){if(_0x1f7f3e[_0x2bcd20]['id']&&_0x1f7f3e[_0x2bcd20]['id'][_0x5b13df(0x337)+'Of']('kour-'+'io_')===-0x1fa0+0x2*-0x1251+0x4442*0x1)_0x1f7f3e[_0x2bcd20]['style'][_0x5b13df(0x2c2)+'ay']=_0x246fff['Lyrsh'];}}}else{if(_0x158c24)_0x158c24['style']['displ'+'ay']=_0x246fff['Lyrsh'];}}}catch(_0x339753){}},0x874+-0x1702+0x165e);}var _0x19aa89=document['creat'+'eElem'+'ent'](_0x5616e1(0xba)+'s');_0x19aa89[_0x5616e1(0x29a)]['cssTe'+'xt']='posit'+'ion:f'+_0x5616e1(0x270)+_0x5616e1(0x1bf)+_0x5616e1(0x3a2)+_0x5616e1(0x579)+'00vw;'+_0x5616e1(0xab)+_0x5616e1(0x4a4)+_0x5616e1(0x4c8)+_0x5616e1(0x337)+_0x5616e1(0x401)+'48364'+'6;poi'+_0x5616e1(0x14f)+_0x5616e1(0x398)+_0x5616e1(0x223)+'e';var _0x38eb0b=_0x19aa89['getCo'+_0x5616e1(0x5e3)]('2d');function _0x5ea278(){var _0x4ee116=_0x5616e1;try{var _0x3a8da2=document['fulls'+_0x4ee116(0x2a9)+_0x4ee116(0x1c1)+'nt'],_0x3e0ee6=_0x3a8da2&&_0x246fff[_0x4ee116(0xb6)](_0x3a8da2[_0x4ee116(0x3e6)+'me'],'CANVA'+'S')?_0x3a8da2:document[_0x4ee116(0x272)]||document[_0x4ee116(0x1c5)+_0x4ee116(0x33a)+_0x4ee116(0x53c)];if(_0x19aa89[_0x4ee116(0x4dd)+_0x4ee116(0x452)]!==_0x3e0ee6)_0x3e0ee6[_0x4ee116(0x113)+_0x4ee116(0x57f)+'d'](_0x19aa89);}catch(_0x36d783){try{document[_0x4ee116(0x272)][_0x4ee116(0x113)+_0x4ee116(0x57f)+'d'](_0x19aa89);}catch(_0x2e4486){}}}var _0x5121c7={'w':0x0,'h':0x0,'dpr':0x0};function _0x16c656(){var _0x31f19f=_0x5616e1,_0x42d490=window['devic'+'ePixe'+_0x31f19f(0x56f)+'o']||-0x2408+0x6c4+0x1d45,_0x53a325=window['inner'+'Width'],_0x17cd51=window[_0x31f19f(0x469)+'Heigh'+'t'];if(_0x53a325===_0x5121c7['w']&&_0x17cd51===_0x5121c7['h']&&_0x27adbf[_0x31f19f(0x547)](_0x42d490,_0x5121c7['dpr']))return;_0x5121c7['w']=_0x53a325,_0x5121c7['h']=_0x17cd51,_0x5121c7[_0x31f19f(0x232)]=_0x42d490,_0x19aa89[_0x31f19f(0x354)]=Math[_0x31f19f(0x143)](_0x53a325*_0x42d490),_0x19aa89[_0x31f19f(0xab)+'t']=Math['round'](_0x17cd51*_0x42d490),_0x38eb0b[_0x31f19f(0x185)+'ansfo'+'rm'](_0x42d490,-0xb8a+-0x7cd+0x1357,0x1398+0x300+-0x788*0x3,_0x42d490,0x12c6+0xbd+0x22b*-0x9,0x1dd4+-0x2147+0x373*0x1);}var _0x13ae11=-0x9d*-0x18+0x2211+-0x30c9,_0x296fe4=performance[_0x5616e1(0x2e0)](),_0x3655c9=0x12da+-0x267b+0x13a1;function _0x2c68a5(_0x244d37){var _0x199fdb=_0x5616e1,_0x38b8e8={'rAGKn':function(_0x388075,_0x2279bf,_0x1f0faa,_0x4fab61,_0x55581f){return _0x246fff['wCrbE'](_0x388075,_0x2279bf,_0x1f0faa,_0x4fab61,_0x55581f);},'GWJPa':'f32','bZxWU':function(_0x80e53b,_0x4f6fed,_0x2cdc6b,_0x344316,_0x1dd6a7){var _0x44cae8=_0x19c3;return _0x246fff[_0x44cae8(0x1eb)](_0x80e53b,_0x4f6fed,_0x2cdc6b,_0x344316,_0x1dd6a7);}},_0x576936=Number(_0x218844['ksSca'+'le'])||0xc*0x23b+-0x1cf3*-0x1+-0x37b6,_0x2cbe4f=_0x246fff[_0x199fdb(0x2a7)](0x7f*0x29+0x1*0x1039+0x1*-0x246e,_0x576936),_0x43eb02=(-0x15a9*-0x1+0xfe8+-0x258d)*_0x576936,_0x41cf64=_0x246fff[_0x199fdb(0x1dc)](_0x2cbe4f,-0x16b8+0x2*-0x48f+0x1*0x1fd9)+_0x43eb02*(0x12f2+-0x8b7+0x1*-0xa39),_0x1861d7=_0x2cbe4f*(0x37*0x94+-0x2f9*0xb+0xea)+_0x246fff[_0x199fdb(0x1dc)](_0x43eb02,0x1fa7+0x1*0x25b+-0x44*0x80),_0x50a896=_0x218844['ksPos'],_0x39e751=_0x50a896==='br'?_0x246fff[_0x199fdb(0x40a)](_0x244d37['right'],-0x24c3+0xb9c+-0x1*-0x1937)-_0x41cf64:_0x244d37[_0x199fdb(0x37e)]+(0x2035+0x13*0x7c+-0x91*0x49),_0x56cb5c=_0x50a896==='ml'?_0x246fff[_0x199fdb(0x5bd)](_0x244d37['top'],_0x244d37['heigh'+'t']/(-0x1ba4+-0x9*0x135+-0x1*-0x2683))-_0x246fff[_0x199fdb(0x488)](_0x1861d7,-0x66c*0x4+0x2466*0x1+-0x1*0xab4):_0x246fff[_0x199fdb(0x5d6)](_0x244d37[_0x199fdb(0x2ea)+'m']-_0x1861d7,_0x50a896==='bl'?-0x199*0x1+-0x5b2*0x3+0x77*0x29:-0x2380+-0x6eb*0x2+-0x4fe*-0xa),_0x250864=(_0x15971b,_0x307173,_0x40e533,_0x868a2f,_0x4721be,_0x1b4210,_0x40c2d2)=>{var _0x2075b8=_0x199fdb,_0x1bebf9=_0x3a70d2[_0x2075b8(0x372)](_0x307173);_0x38eb0b[_0x2075b8(0x1d9)](),_0x38eb0b[_0x2075b8(0xf2)+_0x2075b8(0x264)]();if(_0x38eb0b[_0x2075b8(0x143)+_0x2075b8(0x1a9)])_0x38eb0b[_0x2075b8(0x143)+_0x2075b8(0x1a9)](_0x40e533,_0x868a2f,_0x4721be,_0x1b4210,(-0x1fae+0x1da2*-0x1+-0x1*-0x3d57)*_0x576936);else _0x38eb0b[_0x2075b8(0x347)](_0x40e533,_0x868a2f,_0x4721be,_0x1b4210);_0x38eb0b[_0x2075b8(0x35a)+_0x2075b8(0x412)]=_0x1bebf9?_0x27adbf[_0x2075b8(0x58c)]:_0x2075b8(0x544)+_0x2075b8(0x519)+_0x2075b8(0x5d8)+'7)',_0x38eb0b[_0x2075b8(0x507)](),_0x38eb0b[_0x2075b8(0x5ea)+_0x2075b8(0x136)]=-0x25*-0x103+-0x1*0x9a1+-0x1bcd,_0x38eb0b['strok'+'eStyl'+'e']=_0x1bebf9?_0x3f40ef:'rgba('+_0x2075b8(0x4b0)+_0x2075b8(0x462)+_0x2075b8(0x3dd)+'5)',_0x38eb0b['strok'+'e'](),_0x1bebf9&&(_0x27adbf[_0x2075b8(0x47f)]('BGAxy',_0x2075b8(0x353))?(_0x38b8e8['rAGKn'](_0x2aa857,_0x511f7c,-0x15ab+-0x34+0x1607,_0x38b8e8[_0x2075b8(0x204)],_0x294ace),_0x219bfe(_0xdb7bfb,0x13*-0x53+0x1b52+0x1*-0x14fd,'f32',_0x39f54a),_0x38b8e8['bZxWU'](_0x53567d,_0x5690eb,0x39*0x11+-0x20e8+-0x9c5*-0x3,_0x38b8e8['GWJPa'],_0x86aa8e),_0x38b8e8[_0x2075b8(0x324)](_0xcbf21,_0x141258,0xb6*-0xd+-0x1f94+0x2906,_0x2075b8(0x474),_0x40e870),_0x38b8e8[_0x2075b8(0x21a)](_0x3815c9,_0x8854ac,0xc*-0x1aa+0x1d3*0xb+-0x1*-0x3,_0x38b8e8['GWJPa'],_0x34ccc4),_0x490e17(_0x16571a,0x4*0x85+-0x3e4*0xa+0x24f4,'f32',_0x268aad)):(_0x38eb0b[_0x2075b8(0x331)+_0x2075b8(0x333)+'r']=_0x182d6d,_0x38eb0b[_0x2075b8(0x331)+_0x2075b8(0x13f)]=0x1*0x3d2+-0x9b*-0x5+-0x6cb,_0x38eb0b['fill'](),_0x38eb0b[_0x2075b8(0x331)+'wBlur']=0x309*-0x8+-0x25*0x5e+0x4a*0x83)),_0x38eb0b[_0x2075b8(0x35a)+_0x2075b8(0x412)]=_0x1bebf9?_0x27adbf['glWzh']:'rgba('+_0x2075b8(0x5f1)+'35,24'+_0x2075b8(0xb5)+')',_0x38eb0b[_0x2075b8(0xd9)+_0x2075b8(0x246)]=_0x2075b8(0xad)+'r',_0x38eb0b['textB'+_0x2075b8(0x596)+'ne']=_0x27adbf[_0x2075b8(0x51a)],_0x38eb0b['font']=_0x27adbf[_0x2075b8(0x55c)]('700\x20'+Math[_0x2075b8(0x143)](_0x27adbf[_0x2075b8(0x4a7)](0x1*0x19fc+0x2*-0xd5b+0x2*0x63,_0x576936)),_0x27adbf['cPKvB']),_0x38eb0b[_0x2075b8(0x481)+'ext'](_0x15971b,_0x40e533+_0x4721be/(-0x2*0x425+0x254f+-0x1d03),_0x27adbf['Rfprg'](_0x868a2f,_0x27adbf['dZTBN'](_0x1b4210,-0x1*-0x1861+-0x223+-0x163c))-(_0x40c2d2?_0x27adbf[_0x2075b8(0x4a7)](0xa*0x1de+0x1a66+0x2d0d*-0x1,_0x576936):0x2504*0x1+0x2bd*0x7+-0x2f5*0x13)),_0x40c2d2&&(_0x38eb0b['font']=_0x27adbf['KWQHU'](_0x27adbf['gtkbT']('600\x20',Math['round']((-0x95+0x2*-0x9a9+-0x2c*-0x74)*_0x576936)),_0x27adbf[_0x2075b8(0x3d9)]),_0x38eb0b[_0x2075b8(0x35a)+_0x2075b8(0x412)]=_0x1bebf9?_0x2075b8(0x175):_0x2075b8(0x544)+_0x2075b8(0x5f1)+_0x2075b8(0x531)+'0,0.5'+'5)',_0x38eb0b[_0x2075b8(0x481)+_0x2075b8(0x35f)](_0x40c2d2,_0x27adbf[_0x2075b8(0x538)](_0x40e533,_0x4721be/(0x1*0x2149+0x1*0x2311+0x48*-0xf3)),_0x27adbf[_0x2075b8(0x1da)](_0x868a2f+_0x27adbf[_0x2075b8(0x494)](_0x1b4210,-0x450+0x3*0x623+-0x1*0xe17),_0x27adbf['pHESk'](-0x9*-0x40d+0x6*0x209+-0x30a3*0x1,_0x576936)))),_0x38eb0b[_0x2075b8(0xd5)+'re']();};_0x250864('W',_0x246fff[_0x199fdb(0x1b6)],_0x39e751+_0x2cbe4f+_0x43eb02,_0x56cb5c,_0x2cbe4f,_0x2cbe4f),_0x250864('A','KeyA',_0x39e751,_0x246fff[_0x199fdb(0x27a)](_0x56cb5c+_0x2cbe4f,_0x43eb02),_0x2cbe4f,_0x2cbe4f),_0x250864('S',_0x246fff[_0x199fdb(0x54b)],_0x246fff['dyrvf'](_0x39e751,_0x2cbe4f)+_0x43eb02,_0x56cb5c+_0x2cbe4f+_0x43eb02,_0x2cbe4f,_0x2cbe4f),_0x246fff[_0x199fdb(0xa8)](_0x250864,'D','KeyD',_0x246fff['ArFUq'](_0x39e751,_0x246fff[_0x199fdb(0x50e)](_0x2cbe4f,_0x43eb02)*(0xcf6+-0x1c4*-0x14+0x2*-0x1822)),_0x246fff['XxFyy'](_0x246fff[_0x199fdb(0x27a)](_0x56cb5c,_0x2cbe4f),_0x43eb02),_0x2cbe4f,_0x2cbe4f);var _0x4f70c3=_0x246fff[_0x199fdb(0x488)](_0x41cf64-_0x43eb02,-0x28f+0x2*-0xd1d+0x1ccb),_0xe99f9e=_0x246fff[_0x199fdb(0x126)](_0x56cb5c,_0x246fff['sVwwk'](_0x2cbe4f,_0x43eb02)*(-0x2481+0x14c0+0xfc3));_0x250864(_0x246fff[_0x199fdb(0x60c)],_0x246fff[_0x199fdb(0x365)],_0x39e751,_0xe99f9e,_0x4f70c3,_0x2cbe4f,_0x218844['ksCps']?_0x1e5316(0xbe6*0x2+0x1*-0x1c08+0x43d)+_0x199fdb(0x463):''),_0x246fff[_0x199fdb(0x422)](_0x250864,_0x199fdb(0x60b),_0x199fdb(0x51d)+'3',_0x246fff['ynpRM'](_0x39e751+_0x4f70c3,_0x43eb02),_0xe99f9e,_0x4f70c3,_0x2cbe4f,_0x218844[_0x199fdb(0x448)]?_0x246fff['hyjzJ'](_0x246fff[_0x199fdb(0x1b8)](_0x1e5316,-0x21ff+-0x1*-0x15d1+0xc31),_0x246fff[_0x199fdb(0x16d)]):''),_0x246fff['izAhW'](_0x250864,'','Space',_0x39e751,_0xe99f9e+_0x2cbe4f+_0x43eb02,_0x41cf64,_0x2cbe4f*(-0x262b+0x17d8+0xe53+0.45));}function _0x65d65c(_0x49a09a){var _0x55ad8e=_0x5616e1,_0x2f8c59=_0x246fff['oVwCd'](_0x49a09a[_0x55ad8e(0x354)],0x30+-0x13b3+0x1385),_0x5ec11e=_0x49a09a['heigh'+'t']/(0xd9*-0x1+0x1*-0x1674+0x174f),_0x1801f0=_0x246fff['SHxvm'](Number,_0x218844[_0x55ad8e(0x4ff)+'e'])||0xb9c+-0x1690+-0x21*-0x55,_0x274c59=/^#[0-9a-f]{6}$/i[_0x55ad8e(0xce)](_0x218844['chCol'+'or'])?_0x218844[_0x55ad8e(0x4fb)+'or']:_0x246fff['vFTYK'];_0x38eb0b[_0x55ad8e(0x1d9)](),_0x38eb0b['strok'+_0x55ad8e(0x2d4)+'e']=_0x274c59,_0x38eb0b[_0x55ad8e(0x35a)+'tyle']=_0x274c59,_0x38eb0b['lineW'+_0x55ad8e(0x136)]=Math[_0x55ad8e(0x13c)](0x2f5*-0x8+-0x1*-0x11ad+0x17f*0x4+0.5,(-0x14e9*-0x1+-0x509*0x2+-0x3b*0x2f)*_0x1801f0),_0x38eb0b['shado'+_0x55ad8e(0x333)+'r']=_0x274c59,_0x38eb0b['shado'+_0x55ad8e(0x13f)]=-0x316+-0xe87*0x1+-0x5e1*-0x3;var _0x520a16=(-0x3c8*-0x1+-0x20f1*0x1+-0x1*-0x1d2f)*_0x1801f0,_0x21731e=(-0x2b*0xa1+0xccd+0xe*0x105)*_0x1801f0;_0x38eb0b[_0x55ad8e(0xf2)+_0x55ad8e(0x264)](),_0x38eb0b[_0x55ad8e(0x3d1)+'o'](_0x246fff['MvXhw'](_0x2f8c59,_0x520a16)-_0x21731e,_0x5ec11e),_0x38eb0b[_0x55ad8e(0x8e)+'o'](_0x2f8c59-_0x520a16,_0x5ec11e),_0x38eb0b['moveT'+'o'](_0x246fff[_0x55ad8e(0x59f)](_0x2f8c59,_0x520a16),_0x5ec11e),_0x38eb0b[_0x55ad8e(0x8e)+'o'](_0x2f8c59+_0x520a16+_0x21731e,_0x5ec11e),_0x38eb0b[_0x55ad8e(0x3d1)+'o'](_0x2f8c59,_0x246fff[_0x55ad8e(0x5d6)](_0x5ec11e-_0x520a16,_0x21731e)),_0x38eb0b['lineT'+'o'](_0x2f8c59,_0x246fff['psbyg'](_0x5ec11e,_0x520a16)),_0x38eb0b[_0x55ad8e(0x3d1)+'o'](_0x2f8c59,_0x5ec11e+_0x520a16),_0x38eb0b['lineT'+'o'](_0x2f8c59,_0x246fff[_0x55ad8e(0x565)](_0x5ec11e+_0x520a16,_0x21731e)),_0x38eb0b[_0x55ad8e(0x156)+'e'](),_0x38eb0b[_0x55ad8e(0xf2)+_0x55ad8e(0x264)](),_0x38eb0b['arc'](_0x2f8c59,_0x5ec11e,_0x246fff['gxWPC'](0xea2+0xf39*0x1+-0x1dda*0x1+0.6000000000000001,_0x1801f0),0x1cc3+-0x1*-0x83+-0xea3*0x2,Math['PI']*(-0x66c*0x6+0x1*0xfc2+0xa2*0x24)),_0x38eb0b[_0x55ad8e(0x507)](),_0x38eb0b['resto'+'re']();}function _0x25c360(_0x487b5f){var _0x442779=_0x5616e1,_0x194c6e=(_0x442779(0x5f4)+_0x442779(0x12a)+_0x442779(0x604)+_0x442779(0x3f9))[_0x442779(0x62f)]('|'),_0x58af39=-0xec*0xf+0x168c+-0x8b8;while(!![]){switch(_0x194c6e[_0x58af39++]){case'0':_0x38eb0b['textA'+'lign']='left';continue;case'1':_0x38eb0b['textB'+_0x442779(0x596)+'ne']=_0x246fff[_0x442779(0x476)];continue;case'2':_0x38eb0b[_0x442779(0x1d9)]();continue;case'3':var _0x1e32b9=(_0x54743a,_0x8e3284)=>{var _0x3df99f=_0x442779;_0x38eb0b[_0x3df99f(0x35a)+_0x3df99f(0x412)]=_0x27adbf['rjuUP'](_0x8e3284,_0x27adbf['rbYDD']),_0x38eb0b[_0x3df99f(0x481)+_0x3df99f(0x35f)](_0x54743a,_0x54d95b,_0x26a304),_0x26a304+=-0x1bf9+0x1cc9+0x4*-0x30;};continue;case'4':_0x38eb0b['font']=_0x246fff[_0x442779(0x147)];continue;case'5':_0x1e32b9('SAKUR'+'A\x20KOU'+'R\x20v1.'+'1',_0x246fff[_0x442779(0x5f8)]);continue;case'6':_0x38eb0b[_0x442779(0xd5)+'re']();continue;case'7':if(!_0x14a7bd['gameL'+_0x442779(0x3ce)])_0x1e32b9(_0x246fff[_0x442779(0x3f7)],'rgba('+_0x442779(0x4b0)+'80,19'+_0x442779(0x521)+')');continue;case'8':if(_0x218844[_0x442779(0x4ed)])_0x1e32b9(_0x3655c9+_0x442779(0x247));continue;case'9':var _0x26a304=-0x1089+0x143e+0x5*-0xb5,_0x54d95b=0x869+0x7ed*-0x1+-0x70;continue;}break;}}function _0x40a949(){var _0x520dba=_0x5616e1;if(_0x520dba(0x30f)!=='AehiJ')_0x38acdb['fps']=_0x1cc65c,_0x262eec();else{requestAnimationFrame(_0x40a949),_0x13ae11++;var _0x5611e9=performance['now']();_0x246fff[_0x520dba(0x3e9)](_0x5611e9-_0x296fe4,0x31*0x1c+0x21e3+-0x254b)&&(_0x3655c9=Math[_0x520dba(0x143)](_0x246fff[_0x520dba(0x3bb)](_0x246fff[_0x520dba(0x2a7)](_0x13ae11,0x8a8+0x8e0*0x1+-0x20*0x6d),_0x5611e9-_0x296fe4)),_0x13ae11=0x1db1*-0x1+0x112+0x1*0x1c9f,_0x296fe4=_0x5611e9);_0x16c656(),_0x5ea278(),_0x38eb0b['clear'+_0x520dba(0x1a9)](0xcaa*-0x2+-0x85*-0x3+0x1*0x17c5,-0x1*-0x15+0x4*0x4cd+0x1349*-0x1,_0x5121c7['w'],_0x5121c7['h']);var _0x521b2f={'left':0x0,'top':0x0,'right':_0x5121c7['w'],'bottom':_0x5121c7['h'],'width':_0x5121c7['w'],'height':_0x5121c7['h']};if(_0x218844['cross'+_0x520dba(0x2ff)])_0x246fff[_0x520dba(0x1b8)](_0x65d65c,_0x521b2f);if(_0x218844[_0x520dba(0x504)+_0x520dba(0x61b)])_0x2c68a5(_0x521b2f);_0x246fff['xCREj'](_0x25c360,_0x521b2f);}}var _0x1b3991=document[_0x5616e1(0x5fe)+_0x5616e1(0x438)+_0x5616e1(0x39c)](_0x246fff[_0x5616e1(0x610)]);_0x1b3991['id']=_0x246fff[_0x5616e1(0x287)],_0x1b3991[_0x5616e1(0x29a)]['cssTe'+'xt']=_0x246fff[_0x5616e1(0x580)];var _0x3bda8d=_0x1b3991['attac'+_0x5616e1(0x117)+'ow']({'mode':'open'});(document['body']||document[_0x5616e1(0x1c5)+'entEl'+_0x5616e1(0x53c)])[_0x5616e1(0x113)+_0x5616e1(0x57f)+'d'](_0x1b3991);var _0x559525=![],_0x8bef3a={};try{_0x8bef3a=JSON['parse'](localStorage['getIt'+'em']('sakur'+_0x5616e1(0x1b7)+'r.ui.'+'v1')||'{}');}catch(_0x588283){}function _0xdfac28(){var _0x2b3ff0=_0x5616e1;try{localStorage[_0x2b3ff0(0x31a)+'em'](_0x27adbf[_0x2b3ff0(0x605)],JSON[_0x2b3ff0(0x32d)+_0x2b3ff0(0x4ef)](_0x8bef3a));}catch(_0x3e9e3e){}}function _0x5d63a3(_0x7d0f9a,_0x52718c){var _0x577e5d=_0x5616e1,_0x2da2d6={'AVuBf':'aria-'+_0x577e5d(0x352)+'ed'},_0x509302=document[_0x577e5d(0x5fe)+_0x577e5d(0x438)+_0x577e5d(0x39c)](_0x27adbf[_0x577e5d(0x1f8)]);return _0x509302[_0x577e5d(0x391)]='butto'+'n',_0x509302[_0x577e5d(0x95)+_0x577e5d(0x52e)]=_0x27adbf[_0x577e5d(0x40f)],_0x509302['setAt'+_0x577e5d(0x4c7)+'te'](_0x577e5d(0x51b),_0x27adbf[_0x577e5d(0x108)]),_0x509302[_0x577e5d(0x17a)+_0x577e5d(0x4c7)+'te'](_0x577e5d(0x539)+_0x577e5d(0x352)+'ed',String(!!_0x7d0f9a)),_0x509302['oncli'+'ck']=_0x325c62=>{var _0x1cdd14=_0x577e5d;_0x325c62[_0x1cdd14(0x434)+'ropag'+'ation']();var _0x15c2d6=_0x509302['getAt'+_0x1cdd14(0x4c7)+'te'](_0x2da2d6['AVuBf'])!==_0x1cdd14(0xb8);_0x509302['setAt'+_0x1cdd14(0x4c7)+'te'](_0x2da2d6['AVuBf'],String(_0x15c2d6)),_0x52718c(_0x15c2d6);},_0x509302;}function _0x511f01(_0x5b81ed,_0x4e9b46,_0x47e607,_0x424f77,_0xa5103e){var _0x590922=_0x5616e1,_0x1a9c71={'UMrwt':_0x246fff[_0x590922(0x446)],'mdboS':function(_0x52e59e,_0x2d2858){return _0x52e59e-_0x2d2858;},'tzPMJ':function(_0x4948d1,_0x27c55f){return _0x246fff['FoJvT'](_0x4948d1,_0x27c55f);}};if(_0x246fff[_0x590922(0x426)]!==_0x246fff[_0x590922(0x426)]){var _0x57d5a2=_0x1771ec[_0x590922(0x172)+_0x590922(0x2a9)+_0x590922(0x1c1)+'nt'],_0x115e93=_0x57d5a2&&_0x57d5a2[_0x590922(0x3e6)+'me']!=='CANVA'+'S'?_0x57d5a2:_0x223d47[_0x590922(0x272)]||_0x3c17d5[_0x590922(0x1c5)+_0x590922(0x33a)+'ement'];if(_0x13170c[_0x590922(0x4dd)+_0x590922(0x452)]!==_0x115e93)_0x115e93['appen'+'dChil'+'d'](_0x89da8d);}else{var _0x3a3edc=document[_0x590922(0x5fe)+'eElem'+'ent'](_0x246fff['VrouO']);_0x3a3edc['class'+'Name']=_0x590922(0x50f)+_0x590922(0x615);var _0x4c43cc=document['creat'+_0x590922(0x438)+_0x590922(0x39c)](_0x590922(0x611));_0x4c43cc[_0x590922(0x391)]=_0x246fff['KQxcL'],_0x4c43cc['class'+'Name']=_0x246fff['dDTtp'],_0x4c43cc[_0x590922(0x535)]=_0x4e9b46,_0x4c43cc['max']=_0x47e607,_0x4c43cc['step']=_0x424f77,_0x4c43cc['value']=_0x5b81ed;var _0x20a90b=document[_0x590922(0x5fe)+'eElem'+_0x590922(0x39c)](_0x590922(0x5ce));_0x20a90b[_0x590922(0x95)+'Name']=_0x246fff[_0x590922(0x4f8)],_0x20a90b['textC'+_0x590922(0x3ac)+'t']=_0x246fff[_0x590922(0x133)](String,_0x5b81ed);var _0x2edc2e=()=>{var _0x38c5f1=_0x590922,_0x44924b={'VQSEO':function(_0x44c4e2){return _0x44c4e2();}};_0x1a9c71['UMrwt']!==_0x38c5f1(0x1e3)?(_0x20a90b[_0x38c5f1(0x451)+_0x38c5f1(0x3ac)+'t']=String(_0x4c43cc[_0x38c5f1(0x5a1)]),_0x3a3edc['style'][_0x38c5f1(0x600)+'opert'+'y']('--p',_0x1a9c71[_0x38c5f1(0x3b6)](_0x4c43cc[_0x38c5f1(0x5a1)],_0x4e9b46)/(_0x47e607-_0x4e9b46)*(-0x7cd+-0x593+-0x2*-0x6e2)+'%')):(_0x5cc6c7['hookG'+'od']=_0x164963,_0x44924b[_0x38c5f1(0xe1)](_0x1c1bd4));};return _0x4c43cc['oninp'+'ut']=()=>{var _0x20eea1=_0x590922;_0x2edc2e(),_0x1a9c71[_0x20eea1(0x5dd)](_0xa5103e,Number(_0x4c43cc[_0x20eea1(0x5a1)]));},_0x2edc2e(),_0x3a3edc['appen'+'d'](_0x4c43cc,_0x20a90b),_0x3a3edc;}}function _0x1ee1f9(_0x26b1be,_0x4315de){var _0x22c1b5=_0x5616e1,_0x65dfcb=document[_0x22c1b5(0x5fe)+_0x22c1b5(0x438)+_0x22c1b5(0x39c)]('input');return _0x65dfcb[_0x22c1b5(0x391)]=_0x246fff[_0x22c1b5(0x31d)],_0x65dfcb['class'+_0x22c1b5(0x52e)]=_0x22c1b5(0xb4)+_0x22c1b5(0x61a),_0x65dfcb[_0x22c1b5(0x5a1)]=/^#[0-9a-f]{6}$/i['test'](_0x26b1be)?_0x26b1be:_0x22c1b5(0x55f)+'9d',_0x65dfcb['oninp'+'ut']=()=>_0x4315de(_0x65dfcb['value']),_0x65dfcb;}function _0x5cd280(_0x55385f,_0xd768da,_0x36c16e){var _0x4757b3=_0x5616e1,_0xf1948e=_0x246fff[_0x4757b3(0x31b)]['split']('|'),_0x5c30ed=-0x476*-0x8+0xa6b+-0x431*0xb;while(!![]){switch(_0xf1948e[_0x5c30ed++]){case'0':var _0x223f75=document['creat'+'eElem'+_0x4757b3(0x39c)](_0x4757b3(0x3f2)+'t');continue;case'1':return _0x223f75;case'2':_0x223f75[_0x4757b3(0x5a1)]=_0x55385f;continue;case'3':_0x223f75[_0x4757b3(0x95)+'Name']=_0x246fff[_0x4757b3(0x3fb)];continue;case'4':for(var [_0x34a13b,_0x22cc53]of _0xd768da){var _0x158eb8=document[_0x4757b3(0x5fe)+_0x4757b3(0x438)+'ent'](_0x4757b3(0x3d8)+'n');_0x158eb8['value']=_0x34a13b,_0x158eb8['textC'+'onten'+'t']=_0x22cc53,_0x223f75[_0x4757b3(0x113)+_0x4757b3(0x57f)+'d'](_0x158eb8);}continue;case'5':_0x223f75[_0x4757b3(0x260)+_0x4757b3(0x615)]=()=>_0x36c16e(_0x223f75[_0x4757b3(0x5a1)]);continue;}break;}}function _0x3887ff(_0x234931,_0x5cddc0){var _0x54e734=_0x5616e1,_0x27441c=document[_0x54e734(0x5fe)+_0x54e734(0x438)+'ent'](_0x246fff[_0x54e734(0x4e0)]);return _0x27441c['type']='butto'+'n',_0x27441c[_0x54e734(0x95)+_0x54e734(0x52e)]=_0x246fff[_0x54e734(0x545)],_0x27441c[_0x54e734(0x451)+'onten'+'t']=_0x234931,_0x27441c[_0x54e734(0x44a)+'ck']=_0x36e8ba=>{var _0x4b0e33=_0x54e734;_0x36e8ba[_0x4b0e33(0x434)+'ropag'+'ation'](),_0x5cddc0();},_0x27441c;}function _0xf2c0d1(_0x253404,_0x54b1f9,_0x4ed5ae){var _0x3ef9e7=_0x5616e1,_0x180e74=document[_0x3ef9e7(0x5fe)+_0x3ef9e7(0x438)+_0x3ef9e7(0x39c)](_0x3ef9e7(0x5eb));_0x180e74[_0x3ef9e7(0x95)+'Name']=_0x3ef9e7(0x626)+'l';var _0x22046f=document['creat'+_0x3ef9e7(0x438)+_0x3ef9e7(0x39c)](_0x27adbf[_0x3ef9e7(0x623)]);_0x22046f['class'+_0x3ef9e7(0x52e)]='sk-la'+'bel',_0x22046f['textC'+'onten'+'t']=_0x253404;if(_0x54b1f9){var _0xfdd5df=document['creat'+_0x3ef9e7(0x438)+'ent']('small');_0xfdd5df[_0x3ef9e7(0x95)+_0x3ef9e7(0x52e)]=_0x27adbf[_0x3ef9e7(0x92)],_0xfdd5df[_0x3ef9e7(0x451)+_0x3ef9e7(0x3ac)+'t']=_0x54b1f9,_0x22046f[_0x3ef9e7(0x113)+_0x3ef9e7(0x57f)+'d'](_0xfdd5df);}return _0x180e74['appen'+'d'](_0x22046f,_0x4ed5ae),_0x180e74;}function _0x55185d(_0x3eaf8a,_0x2078e5){var _0x200d7e=_0x5616e1,_0x5b3b70=document['creat'+'eElem'+'ent'](_0x27adbf[_0x200d7e(0x436)]);return _0x5b3b70[_0x200d7e(0x95)+'Name']=_0x27adbf[_0x200d7e(0x181)]('sk-no'+'te',_0x2078e5?_0x200d7e(0x371):''),_0x5b3b70['textC'+_0x200d7e(0x3ac)+'t']=_0x3eaf8a,_0x5b3b70;}function _0x1d4338(_0x1a7e46,_0x134e78,_0x24b793,_0x519b3b,_0x48dbf9){var _0x1f61ab=_0x5616e1,_0x21144c={'beird':function(_0x17ea31,_0x1896b6){return _0x17ea31(_0x1896b6);}};if(_0x27adbf['OVLTV'](_0x27adbf[_0x1f61ab(0x1e5)],_0x1f61ab(0x141)))_0x27adbf[_0x1f61ab(0x3db)](_0x5acaa8,_0x59b0d9,0x249a+0x1*0x1795+-0x3ba7,_0x27adbf[_0x1f61ab(0xfa)],-0x169b+0x53+0x1648),_0x27adbf['MFuzn'](_0x25f0cd,_0x43206c,0x1323+-0x1*0x121+-0x1*0x119a,_0x27adbf[_0x1f61ab(0xfa)],-0x26+0x3d9*0x9+-0x227a);else{var _0x5d71e2=('2|1|0'+'|7|6|'+'3|11|'+_0x1f61ab(0x342)+'|12|1'+'0|5')[_0x1f61ab(0x62f)]('|'),_0x4916d9=-0x16d2+-0x2459+0x3b2b;while(!![]){switch(_0x5d71e2[_0x4916d9++]){case'0':var _0x6018e7=document[_0x1f61ab(0x5fe)+_0x1f61ab(0x438)+'ent'](_0x1f61ab(0x5eb));continue;case'1':_0x38f072[_0x1f61ab(0x95)+_0x1f61ab(0x52e)]=_0x1f61ab(0x2d9)+'rd'+(_0x24b793?_0x27adbf['vSOJe']:'');continue;case'2':var _0x38f072=document['creat'+_0x1f61ab(0x438)+'ent']('div');continue;case'3':_0x4b14ee[_0x1f61ab(0x95)+_0x1f61ab(0x52e)]=_0x27adbf[_0x1f61ab(0x5e0)];continue;case'4':_0x22412b[_0x1f61ab(0x451)+'onten'+'t']=_0x1a7e46;continue;case'5':return _0x38f072;case'6':var _0x4b14ee=document['creat'+_0x1f61ab(0x438)+_0x1f61ab(0x39c)](_0x27adbf['DHbHU']);continue;case'7':_0x6018e7['class'+'Name']=_0x27adbf[_0x1f61ab(0x421)];continue;case'8':_0x4b14ee[_0x1f61ab(0x113)+'dChil'+'d'](_0x22412b);continue;case'9':if(_0x519b3b){var _0x398402=_0x27adbf[_0x1f61ab(0x49f)](_0x5d63a3,_0x24b793,_0xfc62b5=>{var _0x100951=_0x1f61ab;_0x38f072[_0x100951(0x95)+_0x100951(0x343)][_0x100951(0x1c7)+'e']('on',_0xfc62b5),_0x21144c['beird'](_0x519b3b,_0xfc62b5);});_0x6018e7[_0x1f61ab(0x113)+'d'](_0x4b14ee,_0x398402);}else _0x6018e7['appen'+_0x1f61ab(0x57f)+'d'](_0x4b14ee);continue;case'10':if(_0x48dbf9&&_0x48dbf9['lengt'+'h']){var _0x14ec9e=('1|6|0'+'|3|7|'+'2|5|4')['split']('|'),_0x2984f3=-0xed4+0x15b4+0x8*-0xdc;while(!![]){switch(_0x14ec9e[_0x2984f3++]){case'0':var _0x1543be=document[_0x1f61ab(0x5fe)+_0x1f61ab(0x438)+'ent']('div');continue;case'1':var _0x3102d9=document[_0x1f61ab(0x5fe)+'eElem'+_0x1f61ab(0x39c)](_0x1f61ab(0x5eb));continue;case'2':_0x3102d9[_0x1f61ab(0x113)+_0x1f61ab(0x57f)+'d'](_0x1543be);continue;case'3':_0x1543be['class'+_0x1f61ab(0x52e)]='sk-md'+'esc';continue;case'4':_0x38f072[_0x1f61ab(0x113)+_0x1f61ab(0x57f)+'d'](_0x3102d9);continue;case'5':for(var _0x4d15c8 of _0x48dbf9)_0x3102d9[_0x1f61ab(0x113)+'dChil'+'d'](_0x4d15c8);continue;case'6':_0x3102d9[_0x1f61ab(0x95)+_0x1f61ab(0x52e)]=_0x27adbf[_0x1f61ab(0x349)];continue;case'7':_0x1543be[_0x1f61ab(0x451)+_0x1f61ab(0x3ac)+'t']=_0x134e78;continue;}break;}}continue;case'11':var _0x22412b=document['creat'+'eElem'+'ent'](_0x27adbf[_0x1f61ab(0x3fa)]);continue;case'12':_0x38f072['appen'+'dChil'+'d'](_0x6018e7);continue;}break;}}}var _0x1d3a75=[{'id':_0x5616e1(0x2eb)+'t','label':_0x5616e1(0x5b1)+'t'},{'id':_0x246fff[_0x5616e1(0x176)],'label':_0x5616e1(0x493)},{'id':_0x246fff[_0x5616e1(0x14e)],'label':'Visua'+'l'},{'id':_0x5616e1(0x25e),'label':_0x246fff['nxWIF']},{'id':_0x5616e1(0x59b),'label':_0x246fff[_0x5616e1(0x359)]}];function _0xc0e65f(){var _0x5102e7=_0x5616e1,_0x2536cc=_0x14a7bd[_0x5102e7(0x34f)+_0x5102e7(0x21f)]?_0x27adbf[_0x5102e7(0x8f)]:_0x14a7bd[_0x5102e7(0x5e7)]?_0x27adbf[_0x5102e7(0x181)](_0x27adbf[_0x5102e7(0x4d7)](_0x27adbf[_0x5102e7(0x55c)](_0x27adbf['gtkbT'](_0x27adbf['wJqIU'](_0x27adbf[_0x5102e7(0x32c)],_0x14a7bd['hooks'+'Total']?_0x27adbf['gtkbT'](_0x14a7bd[_0x5102e7(0x5dc)+'Ok'],'/')+_0x14a7bd[_0x5102e7(0x5dc)+_0x5102e7(0x16a)]+(_0x5102e7(0x4f9)+'s'):_0x27adbf['DbUbO'])+(_0x5102e7(0x30d)+'me\x20'),_0x14a7bd[_0x5102e7(0x45d)+_0x5102e7(0x3ce)]?_0x5102e7(0x235)+'d':'loadi'+'ng')+(_0x5102e7(0x219)+'ooter'+'\x20'),_0x14a7bd[_0x5102e7(0x1d7)+'ers']?_0x27adbf[_0x5102e7(0xed)]:'none'),_0x27adbf[_0x5102e7(0x236)]),_0x14a7bd['movem'+'ents']?_0x27adbf[_0x5102e7(0xed)]:_0x27adbf[_0x5102e7(0x48c)]):_0x27adbf[_0x5102e7(0x18a)];if(_0x14a7bd[_0x5102e7(0x5ed)+'rror'])_0x2536cc+=_0x27adbf['jEwPN'](_0x5102e7(0x39a)+_0x5102e7(0xf1),_0x14a7bd['lastE'+'rror']);return _0x27adbf[_0x5102e7(0xb1)](_0x1d4338,'Statu'+'s',_0x2536cc,_0x14a7bd[_0x5102e7(0x5e7)],null,[_0x27adbf[_0x5102e7(0x403)](_0xf2c0d1,_0x5102e7(0x376)+'PS\x20un'+_0x5102e7(0x562),_0x27adbf['FGuqN'],_0x27adbf['VHoWX'](_0x3887ff,_0x27adbf[_0x5102e7(0x36a)],()=>{var _0x433d5e=_0x5102e7;try{if(_0x3e3184)_0x3e3184['call'](_0x27adbf[_0x433d5e(0x1a7)],_0x27adbf['ZJNFc'],[0x183f+-0x31b*-0x5+0x136b*-0x2]);}catch(_0x534768){}}))]);}function _0x6f1c4f(_0x198a90){var _0x10e723=_0x5616e1,_0x2c563a={'Yxufp':function(_0x5f02a0,_0x3a030e,_0x3c0846){var _0x402736=_0x19c3;return _0x27adbf[_0x402736(0x3b9)](_0x5f02a0,_0x3a030e,_0x3c0846);},'wBmUe':_0x27adbf[_0x10e723(0x613)],'fJLCf':_0x27adbf['EpYhL'],'oMQeo':function(_0xb43f96,_0x3d31ad,_0x2e9b88){return _0xb43f96(_0x3d31ad,_0x2e9b88);},'cdFuy':_0x10e723(0x2a8)+_0x10e723(0x2aa),'nUgAu':function(_0x430f80){return _0x430f80();},'rKXGW':function(_0x3108e2,_0x55a927){return _0x3108e2>_0x55a927;},'ITJxZ':function(_0x5c5aab){return _0x5c5aab();},'UEjSj':_0x10e723(0x4ac)+'t','TrjnO':function(_0x5bf5c8){return _0x5bf5c8();},'dzCCU':function(_0x3a11a6,_0x3ae005){return _0x3a11a6===_0x3ae005;},'lUjlw':function(_0x55e034,_0x379cd5){return _0x27adbf['tTwpR'](_0x55e034,_0x379cd5);},'FQHxN':'rLivu','HxBTi':'XELSl','GixUg':function(_0x17ca54){return _0x17ca54();},'WLtcu':function(_0x4c51db,_0x7e3ac0){return _0x4c51db!==_0x7e3ac0;},'oBLBP':_0x27adbf[_0x10e723(0x1c4)]};if(_0x198a90===_0x10e723(0x2eb)+'t'){if(_0x10e723(0x5c0)!==_0x10e723(0x5c0))_0x3b3a7d['cross'+_0x10e723(0x2ff)]=_0x4778c6,_0x2229c2();else return[_0xc0e65f(),_0x1d4338(_0x10e723(0xdd)+_0x10e723(0x21f),_0x27adbf[_0x10e723(0x115)],_0x218844[_0x10e723(0x336)],_0x424ec0=>{var _0x27d3bc=_0x10e723;_0x218844['god']=_0x424ec0,_0x3db80c(),_0x2c563a[_0x27d3bc(0x3bf)](_0x213557,_0x2c563a['wBmUe'],_0x424ec0),_0x213557(_0x2c563a[_0x27d3bc(0x153)],_0x424ec0);},[]),_0x27adbf[_0x10e723(0x2d8)](_0x1d4338,_0x10e723(0x47a)+_0x10e723(0x5ac),_0x10e723(0xe8)+'\x20Reco'+'ilMot'+_0x10e723(0x4c1)+'ick\x20s'+_0x10e723(0x3c5)+'\x20reco'+_0x10e723(0x111)+'rings'+_0x10e723(0x23e)+_0x10e723(0x318)+'ance.',_0x218844['noRec'+'oil'],_0x1838d0=>{var _0x266229=_0x10e723;if(_0x266229(0x10b)==='DIuPJ')return _0x24325f['warn'](_0x266229(0x41a)+'ra-ko'+'ur]\x20h'+_0x266229(0x450)+_0x266229(0x286)+_0x266229(0x432),_0x52c983,_0x1e45a1&&_0x371d4e['messa'+'ge']),null;else _0x218844['noRec'+_0x266229(0x2aa)]=_0x1838d0,_0x3db80c(),_0x2c563a['oMQeo'](_0x213557,_0x2c563a[_0x266229(0x45e)],_0x1838d0);},[]),_0x1d4338(_0x10e723(0x278)+_0x10e723(0x62e),_0x27adbf['GRRtE'],_0x218844[_0x10e723(0x3de)+'ead'],_0x26762d=>{var _0x11765c=_0x10e723;_0x218844[_0x11765c(0x3de)+'ead']=_0x26762d,_0x3db80c();},[]),_0x1d4338(_0x27adbf[_0x10e723(0x1a0)],'Scale'+'s\x20Ove'+_0x10e723(0x508)+_0x10e723(0x285)+_0x10e723(0x41c)+_0x10e723(0x44f)+'\x20to\x201'+_0x10e723(0xf9)+_0x10e723(0x5f2)+'\x20may\x20'+_0x10e723(0x31c)+'\x20gate'+_0x10e723(0x5c7)+'s.',_0x218844['rapid'+_0x10e723(0x39d)],_0x34847e=>{var _0x34a31e=_0x10e723;_0x218844['rapid'+_0x34a31e(0x39d)]=_0x34847e,_0x2c563a[_0x34a31e(0x31e)](_0x3db80c);},[]),_0x1d4338(_0x10e723(0xd6)+'e\x20[EX'+'P]',_0x27adbf['vFVbV'],_0x218844[_0x10e723(0x4ea)+_0x10e723(0x35d)],_0x1b4013=>{var _0x2ed587=_0x10e723;_0x218844['damag'+_0x2ed587(0x35d)]=_0x1b4013,_0x27adbf[_0x2ed587(0x226)](_0x3db80c);},[_0x27adbf['fcimg'](_0xf2c0d1,_0x27adbf['aKgVi'],null,_0x27adbf[_0x10e723(0x2d8)](_0x511f01,_0x218844[_0x10e723(0x4ea)+_0x10e723(0x2b7)+'e'],0x1d9c+0x15b*-0x1a+0x5ac,-0x3*0x3b9+-0x2*0x130a+-0x3333*-0x1,-0x1*-0xb5d+0x13a*0x1+-0xc92,_0x476f6a=>{_0x218844['damag'+'eValu'+'e']=_0x476f6a,_0x3db80c();}))]),_0x1d4338(_0x10e723(0x4c2)+_0x10e723(0x388)+'mmo\x20['+'EXP]',_0x27adbf['yZaAS'],_0x218844[_0x10e723(0x456)+'moExp'],_0x82fabc=>{var _0x25267f=_0x10e723;_0x218844['infAm'+'moExp']=_0x82fabc,_0x27adbf[_0x25267f(0x226)](_0x3db80c);},[_0x55185d(_0x10e723(0x26e)+'loads'+_0x10e723(0x3be)+_0x10e723(0x199)+'in,\x20t'+_0x10e723(0x276)+_0x10e723(0x522)+'nt\x20ha'+_0x10e723(0x1ac)+_0x10e723(0x3c7)+'where'+'.')])];}if(_0x27adbf[_0x10e723(0x290)](_0x198a90,_0x27adbf['JKkgU']))return[_0x1d4338(_0x10e723(0x5a7),'Scale'+'s\x20all'+'\x20four'+_0x10e723(0x523)+'ment\x20'+'speed'+'\x20limi'+_0x10e723(0x32e)+'us\x20ac'+'celer'+_0x10e723(0x4d5)+'.',_0x27adbf[_0x10e723(0x385)](_0x218844[_0x10e723(0x26c)+_0x10e723(0x56c)],0x2278+0x35+-0x83*0x43),null,[_0xf2c0d1(_0x27adbf[_0x10e723(0x225)],_0x10e723(0x607)+_0x10e723(0x59d)+_0x10e723(0x396),_0x511f01(_0x218844[_0x10e723(0x26c)+_0x10e723(0x56c)],0x1f86+-0x109b+-0xeb9,0xca*0x1+-0x1675*-0x1+-0x1613,-0x655*-0x4+-0x1117+0x41c*-0x2,_0x38fe13=>{var _0x508772=_0x10e723;_0x218844[_0x508772(0x26c)+_0x508772(0x56c)]=_0x38fe13,_0x3db80c();}))]),_0x27adbf['jhVrb'](_0x1d4338,_0x27adbf[_0x10e723(0x38f)],_0x10e723(0x3a7)+_0x10e723(0x19f)+_0x10e723(0x53c)+_0x10e723(0x5ec)+_0x10e723(0x3b3)+'\x20and\x20'+_0x10e723(0xee)+_0x10e723(0x121)+_0x10e723(0x203)+_0x10e723(0x4a1),_0x27adbf[_0x10e723(0x22f)](_0x218844[_0x10e723(0x43e)+'ct'],-0x2*-0x935+-0x230+0x2*-0x7eb)||_0x27adbf[_0x10e723(0x23b)](_0x218844['gravi'+'tyPct'],0x8f*0xd+-0x5*0x59f+0x153c),null,[_0xf2c0d1(_0x27adbf[_0x10e723(0x2f2)],null,_0x511f01(_0x218844[_0x10e723(0x43e)+'ct'],-0x2137+-0x1778+-0x1*-0x38e1,-0x1fe7*0x1+-0x5*-0x699+0x2*0xb,-0x1*-0xe64+-0x2af+-0xb0*0x11,_0x4cf004=>{var _0x3c1b21=_0x10e723;_0x218844[_0x3c1b21(0x43e)+'ct']=_0x4cf004,_0x2c563a[_0x3c1b21(0x31e)](_0x3db80c);})),_0x27adbf[_0x10e723(0x4f3)](_0xf2c0d1,_0x10e723(0x100)+_0x10e723(0x3af),'lower'+'\x20=\x20fl'+'oaty',_0x511f01(_0x218844[_0x10e723(0x121)+'tyPct'],-0x21f6+-0x2*-0x711+0x13de*0x1,-0x198e+-0x35b+0x1db1,0x1372+-0x683*0x1+-0xcea,_0x58ddd9=>{var _0x3d2c6b=_0x10e723,_0x9ba465={'zLmjo':function(_0x36e1bc,_0x1bad60){return _0x36e1bc===_0x1bad60;},'aRlMj':function(_0x7c0a16,_0x571094){return _0x27adbf['rbBXk'](_0x7c0a16,_0x571094);},'mtyWU':function(_0x4b9ee9,_0x56b672){return _0x4b9ee9+_0x56b672;},'eGWFw':_0x3d2c6b(0x30d)+'me\x20','rokiX':_0x3d2c6b(0x3dc)+'ng','erQlI':_0x27adbf[_0x3d2c6b(0xed)],'xuyAj':_0x27adbf[_0x3d2c6b(0x236)]};if('Ectfv'===_0x3d2c6b(0x3c1)){var _0x1935ab=_0x1bb5da[_0x3b874f][_0x3d2c6b(0x3d7)+'Selec'+_0x3d2c6b(0x2b1)](_0x3d2c6b(0x511)+_0x3d2c6b(0x218));_0x1935ab&&(_0x9ba465[_0x3d2c6b(0x35e)](_0x1935ab[_0x3d2c6b(0x451)+'onten'+'t']['index'+'Of'](_0x3d2c6b(0xeb)),-0x9c*0x20+0x107c+0x182*0x2)||_0x1935ab['textC'+_0x3d2c6b(0x3ac)+'t']['index'+'Of'](_0x3d2c6b(0x4bb))===-0x1eb+0x2369+-0x217e)&&(_0x1935ab['textC'+_0x3d2c6b(0x3ac)+'t']=_0x1778c6[_0x3d2c6b(0x34f)+'ode']?'SAFE\x20'+'MODE\x20'+'-\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+'ooks\x20'+_0x3d2c6b(0x3d0)+_0x3d2c6b(0x428)+_0x3d2c6b(0x114)+')':_0x3d089d['uwmk']?_0x9ba465['aRlMj'](_0x9ba465[_0x3d2c6b(0x54e)]('UWMK\x20'+_0x3d2c6b(0x2f7)+'\x20',_0x24a0a3[_0x3d2c6b(0x5dc)+'Total']?_0x10787a[_0x3d2c6b(0x5dc)+'Ok']+'/'+_0x2e25de[_0x3d2c6b(0x5dc)+_0x3d2c6b(0x16a)]+(_0x3d2c6b(0x4f9)+'s'):_0x3d2c6b(0x21e)+_0x3d2c6b(0xcf)+_0x3d2c6b(0x464)+'all\x20o'+_0x3d2c6b(0x1bd))+_0x9ba465[_0x3d2c6b(0x297)]+(_0x1ef2b6[_0x3d2c6b(0x45d)+_0x3d2c6b(0x3ce)]?_0x3d2c6b(0x235)+'d':_0x9ba465['rokiX'])+(_0x3d2c6b(0x219)+'ooter'+'\x20')+(_0x508d18[_0x3d2c6b(0x1d7)+'ers']?_0x9ba465[_0x3d2c6b(0x19c)]:_0x3d2c6b(0x49e)),_0x9ba465['xuyAj'])+(_0x5849c6[_0x3d2c6b(0x5b0)+'ents']?_0x3d2c6b(0x3e4):_0x3d2c6b(0x49e))+(_0x3c5c5e[_0x3d2c6b(0x5ed)+_0x3d2c6b(0x5d5)]?_0x3d2c6b(0x39a)+'R:\x20'+_0x33b79a['lastE'+_0x3d2c6b(0x5d5)]:''):_0x3d2c6b(0x35c)+_0x3d2c6b(0x289)+'NG\x20-\x20'+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x3d2c6b(0x1e9)+'ipt)');}else _0x218844[_0x3d2c6b(0x121)+_0x3d2c6b(0x267)]=_0x58ddd9,_0x3db80c();}))]),_0x27adbf['ZSUSQ'](_0x1d4338,'Bunny'+_0x10e723(0x61e),'Zeroe'+_0x10e723(0x19f)+_0x10e723(0x53c)+_0x10e723(0x104)+_0x10e723(0x9c)+_0x10e723(0x3b5)+_0x10e723(0x3c5)+'\x20jump'+'\x20cool'+_0x10e723(0x58e)+'never'+_0x10e723(0x5b4)+_0x10e723(0x3c9),_0x218844['bhop'],_0x230b4d=>{var _0x54108f=_0x10e723;_0x218844[_0x54108f(0x1b1)]=_0x230b4d,_0x2c563a[_0x54108f(0x31e)](_0x3db80c);},[])];if(_0x198a90===_0x27adbf['LKQWf'])return[_0x27adbf[_0x10e723(0x5fa)](_0x1d4338,_0x10e723(0x3ca)+'rokes','WASD\x20'+'+\x20LMB'+_0x10e723(0x12d)+'+\x20Spa'+'ce\x20ov'+_0x10e723(0x37a)+'.',_0x218844['keyst'+_0x10e723(0x61b)],_0x562db7=>{var _0x1015a3=_0x10e723;_0x27adbf[_0x1015a3(0x385)]('aPXKV',_0x1015a3(0x501))?(_0x218844[_0x1015a3(0x504)+_0x1015a3(0x61b)]=_0x562db7,_0x27adbf['eKBSG'](_0x3db80c)):_0x1aa90c[_0x1015a3(0x189)](_0x1015a3(0x41a)+'ra-ko'+'ur]\x20U'+_0x1015a3(0x1ba)+'nit\x20f'+_0x1015a3(0x499)+':',_0x1cd0dd&&_0x444853[_0x1015a3(0x466)+'ge']);},[_0xf2c0d1(_0x27adbf['SSWSj'],null,_0x5cd280(_0x218844[_0x10e723(0x475)],[['bl',_0x27adbf[_0x10e723(0x308)]],['br',_0x10e723(0x30e)+_0x10e723(0x194)+'ht'],['ml',_0x10e723(0x483)+'middl'+'e']],_0x48ae26=>{_0x218844['ksPos']=_0x48ae26,_0x2c563a['nUgAu'](_0x3db80c);})),_0xf2c0d1(_0x27adbf[_0x10e723(0x295)],null,_0x511f01(_0x218844[_0x10e723(0x196)+'le'],0xe*-0x13e+0x2*-0xb0f+-0x185*-0x1a+0.6,0x5*-0xc4+0xb80+-0x1*0x7ab+0.6000000000000001,-0x1d13+-0x1505+0x1ca*0x1c+0.05,_0x578904=>{var _0x55ab34=_0x10e723;if(_0x27adbf[_0x55ab34(0x23b)](_0x55ab34(0x49c),_0x27adbf['KKiCl']))_0x218844[_0x55ab34(0x196)+'le']=_0x578904,_0x27adbf['wrTjT'](_0x3db80c);else{if(_0x23a66d['__sak'+'ura'])return;_0x310651['add']('mouse'+(_0x3f0f94['butto'+'n']+(-0x12eb+-0xc8e+0x1f7a)));var _0x230523=_0x42e70b[_0x5e3af6['butto'+'n']+(-0xed1+-0x5*0x137+-0x3*-0x6f7)];if(_0x230523){_0x230523[_0x55ab34(0x3f5)](_0x5ba090['now']());if(_0x2c563a['rKXGW'](_0x230523[_0x55ab34(0xec)+'h'],-0x22f6+0x43*0x76+-0x2*-0x21e))_0x230523['shift']();}}})),_0xf2c0d1(_0x27adbf[_0x10e723(0x334)],null,_0x27adbf[_0x10e723(0x5e5)](_0x5d63a3,_0x218844['ksCps'],_0x1c74dc=>{var _0x52870d=_0x10e723;_0x218844[_0x52870d(0x448)]=_0x1c74dc,_0x3db80c();}))]),_0x27adbf['LXzco'](_0x1d4338,_0x10e723(0x427)+_0x10e723(0x2ff),_0x27adbf['ZuteV'],_0x218844[_0x10e723(0x60e)+_0x10e723(0x2ff)],_0x5c345c=>{var _0x53c628=_0x10e723;_0x218844[_0x53c628(0x60e)+'hair']=_0x5c345c,_0x2c563a['ITJxZ'](_0x3db80c);},[_0xf2c0d1(_0x10e723(0x18d),null,_0x27adbf[_0x10e723(0x5fa)](_0x511f01,_0x218844['chSiz'+'e'],0x1bbe+-0x182f+-0x38f+0.5,-0x520+0xcfe*0x1+-0x3ee*0x2+0.5,0x1*0x1f75+-0x463+-0x1b12+0.1,_0x2085c3=>{var _0x3d118a=_0x10e723;_0x218844[_0x3d118a(0x4ff)+'e']=_0x2085c3,_0x3db80c();})),_0x27adbf['cxhES'](_0xf2c0d1,_0x27adbf['Yomlp'],null,_0x27adbf[_0x10e723(0x3b9)](_0x1ee1f9,_0x218844['chCol'+'or'],_0xfff1ff=>{var _0x57e3e0=_0x10e723;_0x2c563a['dzCCU'](_0x57e3e0(0x3f6),_0x57e3e0(0x216))?_0xb57e7e['code']===_0x2c563a['UEjSj']&&(_0x5bbb2d['preve'+'ntDef'+_0x57e3e0(0x2a5)](),_0x2c563a['TrjnO'](_0x45c42c)):(_0x218844['chCol'+'or']=_0xfff1ff,_0x3db80c());}))]),_0x1d4338(_0x27adbf[_0x10e723(0x1fd)],_0x10e723(0x5ae)+_0x10e723(0x557)+'y.',_0x218844[_0x10e723(0x4ed)],null,[_0x27adbf[_0x10e723(0x403)](_0xf2c0d1,_0x27adbf[_0x10e723(0x414)],null,_0x5d63a3(_0x218844[_0x10e723(0x4ed)],_0x2c79b6=>{if(_0x27adbf['IjmHu']!=='ikZaE')_0x218844['fps']=_0x2c79b6,_0x27adbf['RWbFE'](_0x3db80c);else{var _0x5ac2f4=0x2*0x1259+0x1*-0xcf1+-0x17c1;for(var _0x56e467 in _0x4c7e81){if(_0x48218c[_0x56e467]&&_0x1cc380[_0x56e467]['appli'+'ed'])_0x5ac2f4++;}_0x508be4['hooks'+'Ok']=_0x5ac2f4;}})),_0x55185d(_0x10e723(0x22b)+_0x10e723(0x19a)+'ounte'+'r:\x20th'+'is\x20bu'+_0x10e723(0x437)+_0x10e723(0xc8)+_0x10e723(0x3a6)+'isibl'+_0x10e723(0x5cc)+_0x10e723(0x418)+'o\x20pig'+_0x10e723(0x46e)+_0x10e723(0x16e))])];if(_0x198a90===_0x10e723(0x25e))return[_0x1d4338('Adblo'+'ck',_0x27adbf['NkRlF'],_0x218844['adblo'+'ck'],_0x5736f9=>{var _0x418d2d=_0x10e723,_0x2a19f6={'IjRMb':function(_0x2a9acb){return _0x2a9acb();}};'SNzay'!==_0x418d2d(0x4b7)?(_0x284468[_0x418d2d(0xa4)+'od']=_0xcb1db1,_0x1f66f4[_0x418d2d(0xa4)+_0x418d2d(0x4a8)]=_0x561b6e,_0x59baa1[_0x418d2d(0x42f)+_0x418d2d(0x3ae)+'il']=_0x392edf,_0x33ea56[_0x418d2d(0x43f)+_0x418d2d(0x1cd)+'e']=_0x4104ea,_0x2a19f6[_0x418d2d(0x512)](_0x41cfe2),_0x441c93[_0x418d2d(0x45b)+'d']()):(_0x218844['adblo'+'ck']=_0x5736f9,_0x3db80c());},[_0x55185d(_0x27adbf[_0x10e723(0x1d0)])])];return[_0x1d4338('Safe\x20'+'Mode\x20'+_0x10e723(0x4cf)+'lay\x20o'+_0x10e723(0x5f9),_0x10e723(0xe8)+_0x10e723(0x277)+_0x10e723(0x56b)+'rely\x20'+'—\x20no\x20'+_0x10e723(0x101)+'hooks'+_0x10e723(0x530)+_0x10e723(0x2ab)+_0x10e723(0x612)+_0x10e723(0x1a6)+_0x10e723(0x40d)+_0x10e723(0x5c8)+_0x10e723(0x184),_0x218844[_0x10e723(0x34f)+_0x10e723(0x21f)],_0x4e2b87=>{var _0x4ee807=_0x10e723;_0x2c563a['lUjlw'](_0x2c563a['FQHxN'],_0x2c563a[_0x4ee807(0x211)])?(_0x218844['safeM'+_0x4ee807(0x21f)]=_0x4e2b87,_0x3db80c(),location[_0x4ee807(0x45b)+'d']()):_0x5a7fa9[_0x4ee807(0x272)][_0x4ee807(0x113)+'dChil'+'d'](_0x372a49);},[_0x27adbf[_0x10e723(0xb2)](_0x55185d,_0x10e723(0x453)+'es\x20on'+_0x10e723(0x93)+_0x10e723(0x160)+_0x10e723(0x205)+_0x10e723(0x265)+_0x10e723(0x413)+'in\x20sa'+_0x10e723(0x4eb)+_0x10e723(0x1c9)+'he\x20fr'+'eeze\x20'+'is\x20ho'+_0x10e723(0x37f)+'lated'+'\x20—\x20te'+_0x10e723(0x109)+'\x20the\x20'+'hooks'+'-appl'+_0x10e723(0x478)+_0x10e723(0x619))]),_0x1d4338(_0x27adbf[_0x10e723(0x608)],_0x10e723(0x119)+_0x10e723(0x4a9)+_0x10e723(0x197)+_0x10e723(0x41f)+_0x10e723(0x101)+'tramp'+'oline'+_0x10e723(0x2ca)+'the\x20w'+_0x10e723(0x157)+_0x10e723(0x55d)+'load.'+_0x10e723(0x202)+'OFF\x20b'+'y\x20def'+_0x10e723(0x11c)+_0x10e723(0x567)+_0x10e723(0x1aa)+_0x10e723(0x51e)+_0x10e723(0x21c)+'oes\x20n'+_0x10e723(0x198)+'tch\x20t'+_0x10e723(0x1ab)+_0x10e723(0x1b4)+_0x10e723(0x17d)+_0x10e723(0x61c)+_0x10e723(0x1ae)+'nctio'+'n\x20sig'+'natur'+_0x10e723(0x3e7)+'match'+_0x10e723(0x1e6)+'\x20mome'+'nt\x20it'+'\x20is\x20c'+'alled'+_0x10e723(0x366)+'n\x20the'+_0x10e723(0x408)+_0x10e723(0x3a0)+'t\x20a\x20t'+_0x10e723(0x4fc)+'reloa'+_0x10e723(0x4e9)+_0x10e723(0x498)+_0x10e723(0x303)+'h\x20one'+_0x10e723(0x2b2)+_0x10e723(0x2fe)+_0x10e723(0x556)+_0x10e723(0x404)+'n.',_0x218844['hookG'+'od']||_0x218844[_0x10e723(0xa4)+'odDie']||_0x218844[_0x10e723(0x42f)+_0x10e723(0x3ae)+'il']||_0x218844['hookC'+'aptur'+'e'],_0x2fad6f=>{var _0x1a8697=_0x10e723;_0x218844[_0x1a8697(0xa4)+'od']=_0x2fad6f,_0x218844['hookG'+'odDie']=_0x2fad6f,_0x218844[_0x1a8697(0x42f)+_0x1a8697(0x3ae)+'il']=_0x2fad6f,_0x218844[_0x1a8697(0x43f)+_0x1a8697(0x1cd)+'e']=_0x2fad6f,_0x2c563a[_0x1a8697(0x155)](_0x3db80c),location[_0x1a8697(0x45b)+'d']();},[_0x55185d(_0x27adbf[_0x10e723(0x5b6)]),_0xf2c0d1('god\x20('+'OHeal'+'th.In'+'itiat'+_0x10e723(0x23a)+'Healt'+'h)',null,_0x5d63a3(_0x218844[_0x10e723(0xa4)+'od'],_0x37f375=>{var _0x193a41=_0x10e723;_0x218844[_0x193a41(0xa4)+'od']=_0x37f375,_0x3db80c();})),_0xf2c0d1('godDi'+_0x10e723(0x4e7)+'ealth'+_0x10e723(0x364)+_0x10e723(0x5d1),null,_0x27adbf[_0x10e723(0x45c)](_0x5d63a3,_0x218844['hookG'+_0x10e723(0x4a8)],_0x2d9d58=>{_0x218844['hookG'+'odDie']=_0x2d9d58,_0x2c563a['GixUg'](_0x3db80c);})),_0x27adbf[_0x10e723(0x4f3)](_0xf2c0d1,'noRec'+_0x10e723(0x620)+_0x10e723(0x627)+_0x10e723(0x5be)+'on.Ti'+'ck)',null,_0x5d63a3(_0x218844[_0x10e723(0x42f)+_0x10e723(0x3ae)+'il'],_0x200b77=>{_0x218844['hookN'+'oReco'+'il']=_0x200b77,_0x3db80c();})),_0xf2c0d1(_0x27adbf[_0x10e723(0x3c0)],_0x27adbf[_0x10e723(0xe6)],_0x27adbf['yEPwV'](_0x5d63a3,_0x218844[_0x10e723(0x43f)+_0x10e723(0x1cd)+'e'],_0x2f5be3=>{var _0x4602fe=_0x10e723;_0x2c563a['lUjlw'](_0x4602fe(0x49d),'azFvX')?_0x41206e=_0x76ece6&&_0x572d7c['val']?_0x94c2fb['val']():-0x265c+0x2072+0x5ea:(_0x218844[_0x4602fe(0x43f)+'aptur'+'e']=_0x2f5be3,_0x3db80c());}))]),_0x27adbf[_0x10e723(0x470)](_0x1d4338,_0x27adbf['izNhH'],_0x10e723(0x3f1)+_0x10e723(0xbb)+_0x10e723(0xf6)+'age\x20d'+'etect'+_0x10e723(0x2c8)+'t\x20sta'+_0x10e723(0x2fa)+'via\x20S'+_0x10e723(0x514)+_0x10e723(0x492)+'on().'+_0x10e723(0xa0)+_0x10e723(0x50d),_0x218844[_0x10e723(0x2cd)+_0x10e723(0x2d3)],_0x20865e=>{var _0x485659=_0x10e723,_0x88c4d7={'XWsje':function(_0xfbbc50,_0x12e111){return _0xfbbc50>_0x12e111;}};if(_0x2c563a[_0x485659(0xe4)](_0x485659(0x309),_0x2c563a[_0x485659(0xc5)])){if(!_0x56ccac||_0x4ada91[_0x485659(0x4c4)+'des'](_0x4d4627)||_0x88c4d7[_0x485659(0x3aa)](_0x268f6d[_0x485659(0xec)+'h'],0x66a*0x1+0x8*0xe5+-0x5*0x2aa))return;_0xcaa5ea[_0x485659(0x3f5)](_0x16bca4);}else _0x218844[_0x485659(0x2cd)+'ill']=_0x20865e,_0x3db80c();},[_0x27adbf[_0x10e723(0x171)](_0x55185d,'God/d'+_0x10e723(0x129)+'/rapi'+_0x10e723(0x13e)+_0x10e723(0x186)+'raise'+_0x10e723(0x2de)+_0x10e723(0x367)+'even\x20'+_0x10e723(0x1a4)+_0x10e723(0x2b5)+'on.',!![])]),_0x1d4338(_0x27adbf['bVfjx'],_0x10e723(0x29f)+_0x10e723(0x410)+_0x10e723(0x506)+_0x10e723(0x21b)+_0x10e723(0x231)+_0x10e723(0x283)+_0x10e723(0x238),!![],null,[_0xf2c0d1(_0x10e723(0x4c9)+'my\x20se'+'tting'+'s',null,_0x3887ff('Reset',()=>{_0x218844={..._0x21f670},_0x3db80c(),location['reloa'+'d']();}))])];}var _0x5049ca=null;function _0x3ff5d8(_0x42b1fe){var _0x3be319=_0x5616e1,_0x194cc7={'cqcUu':_0x246fff[_0x3be319(0x1df)]};if(_0x246fff[_0x3be319(0x5a9)]===_0x3be319(0x4f7)){_0x559525=_0x42b1fe;if(!_0x5049ca){var _0x4b37e4=(_0x3be319(0x4cc)+'|0|5|'+'4')[_0x3be319(0x62f)]('|'),_0x3c0c6a=0xdd5+-0x1*-0x221f+0x3ff*-0xc;while(!![]){switch(_0x4b37e4[_0x3c0c6a++]){case'0':_0x5049ca=_0x11ed6e();continue;case'1':_0x448670['textC'+_0x3be319(0x3ac)+'t']=_0x5cd912;continue;case'2':_0x3bda8d[_0x3be319(0x113)+'dChil'+'d'](_0x448670);continue;case'3':var _0x448670=document[_0x3be319(0x5fe)+_0x3be319(0x438)+_0x3be319(0x39c)](_0x3be319(0x29a));continue;case'4':_0x246fff['FoJvT'](requestAnimationFrame,()=>_0x5049ca['class'+'List'][_0x3be319(0x1f0)]('shown'));continue;case'5':_0x3bda8d[_0x3be319(0x113)+_0x3be319(0x57f)+'d'](_0x5049ca);continue;}break;}}_0x5049ca[_0x3be319(0x95)+'List'][_0x3be319(0x1c7)+'e']('shown',_0x42b1fe);}else{if(_0x39f00a)_0x18a46e[_0x3be319(0x213)](_0x194cc7['cqcUu'],_0x3be319(0x2b4)+_0x3be319(0xdf)+_0x3be319(0x3d3)+'Rate',[0x17f7+-0x2*-0x2cc+-0x1c9f]);}}function _0x4ba236(){_0x3ff5d8(!_0x559525);}function _0x11ed6e(){var _0x467f78=_0x5616e1,_0x70c26e=document[_0x467f78(0x5fe)+'eElem'+_0x467f78(0x39c)](_0x246fff['VrouO']);_0x70c26e[_0x467f78(0x95)+_0x467f78(0x52e)]=_0x467f78(0x2e1)+'nel';var _0x1b4b93=document[_0x467f78(0x5fe)+_0x467f78(0x438)+_0x467f78(0x39c)]('nav');_0x1b4b93[_0x467f78(0x95)+_0x467f78(0x52e)]='mn-si'+'de';var _0x51afd9=document[_0x467f78(0x5fe)+_0x467f78(0x438)+_0x467f78(0x39c)](_0x467f78(0x5eb));_0x51afd9['class'+_0x467f78(0x52e)]=_0x246fff[_0x467f78(0x533)],_0x51afd9['inner'+_0x467f78(0x1f9)]=_0x467f78(0x10a)+_0x467f78(0x237)+_0x467f78(0x52f)+_0x467f78(0x5bc)+_0x467f78(0x4fe)+'class'+'=\x22mn-'+_0x467f78(0x310)+_0x467f78(0x520)+_0x467f78(0x48e)+_0x467f78(0x485)+'12\x2021'+_0x467f78(0x183)+_0x467f78(0x34b)+_0x467f78(0x444)+'-4-7.'+_0x467f78(0xd4)+_0x467f78(0x20c)+'8-4.5'+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x467f78(0x2e5)+_0x467f78(0x5ff)+'5-4\x207'+_0x467f78(0x460)+'fill='+'\x22none'+_0x467f78(0x1a1)+'oke=\x22'+_0x467f78(0x55f)+'9d\x22\x20s'+'troke'+'-widt'+_0x467f78(0xe9)+_0x467f78(0x4f4)+_0x467f78(0x315)+'necap'+_0x467f78(0x381)+_0x467f78(0x1f2)+_0x467f78(0x45f)+_0x467f78(0x585)+'join='+_0x467f78(0x5da)+_0x467f78(0x19d)+_0x467f78(0x62a)+_0x467f78(0x62b)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+_0x467f78(0x90)+_0x467f78(0x546)+_0x467f78(0x18e)+_0x467f78(0x378)+_0x467f78(0x482),_0x1b4b93['appen'+_0x467f78(0x57f)+'d'](_0x51afd9);var _0x2ca051=document[_0x467f78(0x5fe)+_0x467f78(0x438)+'ent'](_0x467f78(0x5eb));_0x2ca051[_0x467f78(0x95)+'Name']=_0x246fff[_0x467f78(0x166)];var _0x53c8fb=document['creat'+'eElem'+'ent'](_0x467f78(0x537)+'r');_0x53c8fb[_0x467f78(0x95)+_0x467f78(0x52e)]=_0x467f78(0x5af)+'p';var _0x11b23f=document[_0x467f78(0x5fe)+_0x467f78(0x438)+'ent'](_0x246fff[_0x467f78(0x610)]);_0x11b23f['class'+_0x467f78(0x52e)]='mn-ti'+_0x467f78(0x5f6);var _0x1813f0=document[_0x467f78(0x5fe)+_0x467f78(0x438)+_0x467f78(0x39c)]('h2');_0x1813f0[_0x467f78(0x95)+'Name']=_0x467f78(0xac),_0x1813f0[_0x467f78(0x451)+'onten'+'t']=_0x467f78(0x339)+_0x467f78(0x3f0)+'r';var _0x3eb123=document['creat'+_0x467f78(0x438)+_0x467f78(0x39c)](_0x467f78(0x29d));_0x3eb123['class'+'Name']=_0x246fff['GQBJz'],_0x3eb123[_0x467f78(0x451)+_0x467f78(0x3ac)+'t']=_0x246fff['cWuhR'],_0x11b23f['appen'+'d'](_0x1813f0,_0x3eb123);var _0x25ed9d=document[_0x467f78(0x5fe)+'eElem'+_0x467f78(0x39c)](_0x246fff['pKkRv']);_0x25ed9d['type']=_0x467f78(0x98)+'n',_0x25ed9d[_0x467f78(0x95)+_0x467f78(0x52e)]=_0x467f78(0x29b)+'ose',_0x25ed9d[_0x467f78(0x24f)]='Close',_0x25ed9d[_0x467f78(0x469)+'HTML']=_0x467f78(0x10a)+_0x467f78(0x237)+'ox=\x220'+_0x467f78(0x5bc)+'\x2024\x22>'+_0x467f78(0x48e)+_0x467f78(0x485)+_0x467f78(0x2e4)+_0x467f78(0x327)+_0x467f78(0x484)+'6\x2018\x22'+_0x467f78(0x378)+'vg>',_0x25ed9d[_0x467f78(0x44a)+'ck']=()=>_0x3ff5d8(![]),_0x53c8fb[_0x467f78(0x113)+'d'](_0x11b23f,_0x25ed9d);var _0x5c406f=document['creat'+'eElem'+_0x467f78(0x39c)](_0x467f78(0x5eb));_0x5c406f['class'+'Name']='mn-co'+'ls',_0x2ca051['appen'+'d'](_0x53c8fb,_0x5c406f),_0x70c26e['appen'+'d'](_0x1b4b93,_0x2ca051);var _0xa4a05c=new Map();for(var _0x4ac229 of _0x1d3a75){var _0x2325ab=document[_0x467f78(0x5fe)+'eElem'+'ent'](_0x246fff['pKkRv']);_0x2325ab[_0x467f78(0x391)]=_0x246fff['pKkRv'],_0x2325ab['class'+_0x467f78(0x52e)]=_0x246fff[_0x467f78(0x5a6)],_0x2325ab['title']=_0x4ac229[_0x467f78(0xc3)],_0x2325ab[_0x467f78(0x469)+'HTML']=_0x246fff['goPae']+_0x4ac229[_0x467f78(0xc3)]+_0x246fff[_0x467f78(0x2c1)],_0x2325ab['oncli'+'ck']=(_0x4bf2d4=>()=>_0x3b92ad(_0x4bf2d4))(_0x4ac229['id']),_0xa4a05c[_0x467f78(0x54c)](_0x4ac229['id'],_0x2325ab),_0x1b4b93[_0x467f78(0x113)+'dChil'+'d'](_0x2325ab);}function _0x3b92ad(_0x73be76){var _0x1b2439=_0x467f78;_0x8bef3a[_0x1b2439(0x145)]=_0x73be76,_0x27adbf[_0x1b2439(0x560)](_0xdfac28);var _0x1d368b=_0x1d3a75[_0x1b2439(0x3ef)](_0x46fb8d=>_0x46fb8d['id']===_0x73be76)||_0x1d3a75[-0x3ee*-0x2+-0xed1+0x6f5];_0x1813f0[_0x1b2439(0x451)+_0x1b2439(0x3ac)+'t']=_0x27adbf['Rfprg']('Sakur'+'a\x20Kou'+'r\x20—\x20',_0x1d368b[_0x1b2439(0xc3)]);for(var [_0x33e857,_0x3bdbde]of _0xa4a05c)_0x3bdbde['class'+_0x1b2439(0x343)][_0x1b2439(0x1c7)+'e'](_0x27adbf[_0x1b2439(0x602)],_0x33e857===_0x73be76);_0x5c406f['repla'+'ceChi'+'ldren'](..._0x27adbf[_0x1b2439(0xb2)](_0x6f1c4f,_0x73be76));}return _0x3b92ad(_0x8bef3a[_0x467f78(0x145)]||_0x246fff['PFcMx']),setInterval(()=>{var _0x2e7ea4=_0x467f78;if(!_0x559525)return;var _0x50aaf1=_0x5c406f[_0x2e7ea4(0x5d9)+'ren'];for(var _0x199813=0x12ac+0x231*-0xd+0x9d1;_0x27adbf[_0x2e7ea4(0x387)](_0x199813,_0x50aaf1[_0x2e7ea4(0xec)+'h']);_0x199813++){var _0x1ec0af=_0x50aaf1[_0x199813][_0x2e7ea4(0x3d7)+'Selec'+'tor']('.sk-m'+'desc');_0x1ec0af&&(_0x1ec0af[_0x2e7ea4(0x451)+_0x2e7ea4(0x3ac)+'t'][_0x2e7ea4(0x337)+'Of'](_0x2e7ea4(0xeb))===-0x5*-0x201+0x1*-0x1949+0xf44||_0x1ec0af['textC'+_0x2e7ea4(0x3ac)+'t']['index'+'Of'](_0x2e7ea4(0x4bb))===0x67d+-0x562+-0x11b)&&(_0x1ec0af[_0x2e7ea4(0x451)+'onten'+'t']=_0x14a7bd[_0x2e7ea4(0x34f)+'ode']?'SAFE\x20'+_0x2e7ea4(0x9f)+'-\x20ove'+'rlay\x20'+_0x2e7ea4(0x4d1)+_0x2e7ea4(0x4d3)+'ooks\x20'+'(relo'+_0x2e7ea4(0x428)+_0x2e7ea4(0x114)+')':_0x14a7bd[_0x2e7ea4(0x5e7)]?_0x27adbf[_0x2e7ea4(0x52b)](_0x27adbf[_0x2e7ea4(0x1cb)](_0x27adbf[_0x2e7ea4(0x34e)](_0x27adbf[_0x2e7ea4(0x4d9)](_0x27adbf[_0x2e7ea4(0x363)](_0x2e7ea4(0x35c)+_0x2e7ea4(0x2f7)+'\x20'+(_0x14a7bd[_0x2e7ea4(0x5dc)+_0x2e7ea4(0x16a)]?_0x27adbf[_0x2e7ea4(0x52b)](_0x14a7bd['hooks'+'Ok'],'/')+_0x14a7bd['hooks'+'Total']+(_0x2e7ea4(0x4f9)+'s'):_0x27adbf['DbUbO']),_0x27adbf[_0x2e7ea4(0x3e1)]),_0x14a7bd[_0x2e7ea4(0x45d)+_0x2e7ea4(0x3ce)]?'loade'+'d':'loadi'+'ng'),_0x2e7ea4(0x219)+'ooter'+'\x20')+(_0x14a7bd[_0x2e7ea4(0x1d7)+_0x2e7ea4(0x293)]?_0x27adbf[_0x2e7ea4(0xed)]:_0x27adbf['Ermou']),_0x27adbf[_0x2e7ea4(0x236)]),_0x14a7bd[_0x2e7ea4(0x5b0)+_0x2e7ea4(0x131)]?'held':_0x2e7ea4(0x49e))+(_0x14a7bd['lastE'+_0x2e7ea4(0x5d5)]?_0x27adbf[_0x2e7ea4(0x1dd)]+_0x14a7bd[_0x2e7ea4(0x5ed)+'rror']:''):_0x2e7ea4(0x35c)+_0x2e7ea4(0x289)+_0x2e7ea4(0x2f1)+'overl'+_0x2e7ea4(0x99)+_0x2e7ea4(0x3cf)+_0x2e7ea4(0x57c)+_0x2e7ea4(0x34d)+_0x2e7ea4(0x330)+'erscr'+_0x2e7ea4(0x241));}},0x66*-0x33+-0xd69*0x1+0xcd*0x2f),_0x70c26e;}var _0x5cd912='\x0a\x20\x20\x20\x20'+_0x5616e1(0x53d)+'\x20{\x20al'+_0x5616e1(0x13a)+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x5616e1(0xfe)+_0x5616e1(0x103)+_0x5616e1(0x259)+'order'+_0x5616e1(0x3b7)+_0x5616e1(0xb7)+_0x5616e1(0x326)+';\x20fon'+_0x5616e1(0x5fc)+'ily:\x20'+_0x5616e1(0x306)+_0x5616e1(0x11e)+'Segoe'+'\x20UI\x22,'+_0x5616e1(0xcc)+'em-ui'+',\x20san'+'s-ser'+_0x5616e1(0x34c)+_0x5616e1(0x1bb)+'.mn-p'+_0x5616e1(0x4e6)+_0x5616e1(0x2e7)+_0x5616e1(0x3cd)+_0x5616e1(0x574)+'olute'+';\x20rig'+_0x5616e1(0x3f8)+'4px;\x20'+'botto'+'m:\x2024'+'px;\x20w'+_0x5616e1(0x33f)+'\x20min('+_0x5616e1(0xe7)+_0x5616e1(0xfc)+'c(100'+_0x5616e1(0x208)+_0x5616e1(0x139)+_0x5616e1(0x5cd)+'x-hei'+_0x5616e1(0xa1)+_0x5616e1(0x2ac)+_0x5616e1(0x1f5)+_0x5616e1(0x1fe)+_0x5616e1(0x1a5)+_0x5616e1(0x632)+'8px))'+_0x5616e1(0x284)+_0x5616e1(0xe5)+'splay'+_0x5616e1(0x39b)+'x;\x20ga'+_0x5616e1(0xe2)+_0x5616e1(0x2ee)+_0x5616e1(0x249)+_0x5616e1(0x551)+_0x5616e1(0x11f)+_0x5616e1(0x11d)+_0x5616e1(0x630)+'us:\x202'+'2px;\x20'+_0x5616e1(0x395)+'er-ev'+_0x5616e1(0x314)+_0x5616e1(0x3ba)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x5616e1(0x5b9)+_0x5616e1(0x26d)+_0x5616e1(0x544)+_0x5616e1(0x164)+',21,.'+_0x5616e1(0x46a)+'backd'+'rop-f'+'ilter'+_0x5616e1(0x5ca)+'r(22p'+_0x5616e1(0x1e0)+_0x5616e1(0x58f)+_0x5616e1(0x338)+_0x5616e1(0x4b6)+'webki'+_0x5616e1(0x44c)+_0x5616e1(0x2fd)+_0x5616e1(0x165)+'er:\x20b'+_0x5616e1(0x1e4)+'2px)\x20'+'satur'+'ate(1'+_0x5616e1(0x110)+_0x5616e1(0x1bb)+_0x5616e1(0x529)+_0x5616e1(0x360)+'ow:\x200'+'\x200\x200\x20'+_0x5616e1(0xa6)+_0x5616e1(0x5d7)+_0x5616e1(0x239)+'5,255'+_0x5616e1(0x3d6)+',\x20ins'+'et\x200\x20'+_0x5616e1(0x294)+_0x5616e1(0x4b2)+_0x5616e1(0x5c3)+_0x5616e1(0x5f1)+_0x5616e1(0x254)+_0x5616e1(0x149)+_0x5616e1(0x525)+_0x5616e1(0x4a0)+'\x20rgba'+'(0,0,'+'0,.55'+_0x5616e1(0x21d)+_0x5616e1(0x28b)+'pacit'+_0x5616e1(0x2ec)+'\x20tran'+'sform'+':\x20tra'+'nslat'+'eY(18'+'px);\x20'+_0x5616e1(0x395)+'er-ev'+_0x5616e1(0x314)+_0x5616e1(0x433)+';\x20tra'+_0x5616e1(0x543)+_0x5616e1(0x2bd)+_0x5616e1(0x5fb)+'y\x20.35'+_0x5616e1(0x609)+_0x5616e1(0x2d2)+_0x5616e1(0x572)+'rm\x20.4'+_0x5616e1(0x586)+'bic-b'+_0x5616e1(0x616)+'(.22,'+_0x5616e1(0x105)+_0x5616e1(0x191)+_0x5616e1(0x397)+_0x5616e1(0x24a)+_0x5616e1(0x282)+'6eef2'+_0x5616e1(0x2bc)+'t-siz'+'e:\x2013'+_0x5616e1(0x597)+_0x5616e1(0x1bb)+'.mn-p'+_0x5616e1(0x5b5)+'shown'+'\x20{\x20op'+_0x5616e1(0x4d6)+_0x5616e1(0x188)+'trans'+'form:'+_0x5616e1(0x433)+';\x20poi'+_0x5616e1(0x14f)+_0x5616e1(0x398)+_0x5616e1(0x25b)+_0x5616e1(0x394)+'\x0a\x20\x20\x20\x20'+_0x5616e1(0x102)+'ide\x20{'+_0x5616e1(0x1fa)+_0x5616e1(0x10d)+'flex;'+'\x20flex'+_0x5616e1(0x495)+_0x5616e1(0x419)+_0x5616e1(0x221)+'umn;\x20'+'align'+_0x5616e1(0x253)+_0x5616e1(0x17c)+'nter;'+'\x20gap:'+_0x5616e1(0x20d)+'\x20widt'+'h:\x2062'+_0x5616e1(0x4fd)+_0x5616e1(0x49a)+_0x5616e1(0x2b8)+'\x20padd'+_0x5616e1(0x15c)+_0x5616e1(0x548)+(_0x5616e1(0x107)+_0x5616e1(0x2b3)+_0x5616e1(0x30b)+_0x5616e1(0xf8)+_0x5616e1(0xfb)+_0x5616e1(0x397)+_0x5616e1(0x45a)+_0x5616e1(0x143)+':\x20rgb'+_0x5616e1(0xf4)+_0x5616e1(0x40c)+'255,.'+'025);'+'\x20box-'+'shado'+'w:\x20in'+'set\x200'+_0x5616e1(0x2b9)+'1px\x20r'+'gba(2'+_0x5616e1(0x239)+_0x5616e1(0xe0)+_0x5616e1(0x20b)+_0x5616e1(0x1f1)+_0x5616e1(0x1cf)+'n-log'+'o\x20{\x20d'+_0x5616e1(0x4bc)+_0x5616e1(0x20a)+'id;\x20p'+_0x5616e1(0x30a)+_0x5616e1(0x1b3)+_0x5616e1(0x307)+_0x5616e1(0x37c)+_0x5616e1(0x354)+_0x5616e1(0x252)+'x;\x20he'+_0x5616e1(0x3d5)+'\x2032px'+_0x5616e1(0x1f1)+'\x20\x20\x20.m'+'n-log'+_0x5616e1(0x1ce)+'\x20{\x20wi'+_0x5616e1(0xf7)+_0x5616e1(0x1ee)+_0x5616e1(0x317)+'ht:\x202'+_0x5616e1(0x48d)+'overf'+'low:\x20'+_0x5616e1(0x26b)+'le;\x20f'+_0x5616e1(0x268)+_0x5616e1(0x33d)+'p-sha'+_0x5616e1(0x542)+_0x5616e1(0x382)+_0x5616e1(0x5d2)+'a(255'+',107,'+_0x5616e1(0xd1)+_0x5616e1(0x323)+_0x5616e1(0xae)+_0x5616e1(0xa7)+_0x5616e1(0x19b)+_0x5616e1(0x1fa)+'lay:\x20'+'flex;'+'\x20alig'+'n-ite'+'ms:\x20c'+_0x5616e1(0xf5)+_0x5616e1(0x457)+_0x5616e1(0x37b)+_0x5616e1(0x3e5)+_0x5616e1(0x43d)+'enter'+';\x20wid'+'th:\x205'+_0x5616e1(0x1ff)+'heigh'+'t:\x2034'+_0x5616e1(0x11f)+'order'+_0x5616e1(0x590)+_0x5616e1(0x9d)+'r-rad'+_0x5616e1(0x2f9)+_0x5616e1(0x3cc)+_0x5616e1(0x1bb)+'\x20\x20bac'+_0x5616e1(0x304)+_0x5616e1(0x2be)+_0x5616e1(0x137)+_0x5616e1(0x350)+';\x20col'+_0x5616e1(0x389)+_0x5616e1(0x5d7)+_0x5616e1(0x11b)+_0x5616e1(0xda)+',.4);'+'\x20curs'+_0x5616e1(0x1ef)+_0x5616e1(0x4b4)+'r;\x20fo'+_0x5616e1(0x2cb)+_0x5616e1(0xbf)+'0px;\x20'+'font-'+_0x5616e1(0x480)+_0x5616e1(0x8c)+'0;\x20}\x0a'+_0x5616e1(0x36c)+'mn-ta'+'b:hov'+_0x5616e1(0x571)+_0x5616e1(0x4b9)+':\x20rgb'+_0x5616e1(0xc7)+_0x5616e1(0x138)+_0x5616e1(0xca)+'8);\x20}'+_0x5616e1(0x1bb)+_0x5616e1(0x296)+_0x5616e1(0x291)+_0x5616e1(0x38e)+_0x5616e1(0xa9)+'or:\x20#'+'ff6b9'+'d;\x20ba'+_0x5616e1(0x5b9)+'und:\x20'+_0x5616e1(0x544)+_0x5616e1(0x4b0)+'07,15'+'7,.1)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x5616e1(0x335)+'n\x20{\x20f'+_0x5616e1(0x49a)+_0x5616e1(0x4e5)+'n-wid'+_0x5616e1(0x373)+';\x20dis'+'play:'+_0x5616e1(0xd7)+';\x20fle'+_0x5616e1(0x33b)+_0x5616e1(0x440)+_0x5616e1(0x43a)+_0x5616e1(0x622)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-top\x20'+_0x5616e1(0x207)+_0x5616e1(0x5c4)+_0x5616e1(0xd7)+_0x5616e1(0x555)+_0x5616e1(0x1e8)+_0x5616e1(0x46b)+_0x5616e1(0xad)+_0x5616e1(0x411)+'p:\x2012'+_0x5616e1(0x2ee)+'addin'+'g:\x206p'+'x\x206px'+'\x2012px'+';\x20use'+'r-sel'+_0x5616e1(0x257)+_0x5616e1(0x2b8)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x5616e1(0x27e)+'es\x20{\x20'+_0x5616e1(0x41e)+'\x201;\x20m'+_0x5616e1(0x301)+'dth:\x20'+_0x5616e1(0x17b)+'\x20\x20\x20\x20.'+'mn-h\x20'+_0x5616e1(0x461)+_0x5616e1(0x3ab)+'e:\x2017'+'px;\x20f'+_0x5616e1(0x5ad)+_0x5616e1(0xcd)+_0x5616e1(0x206)+_0x5616e1(0x1f1)+_0x5616e1(0x1cf)+_0x5616e1(0x280)+_0x5616e1(0x2db)+_0x5616e1(0x2cb)+'ze:\x201'+'1px;\x20'+'opaci')+('ty:\x20.'+_0x5616e1(0x2d1)+'\x20\x20\x20\x20.'+_0x5616e1(0x29b)+_0x5616e1(0x3a5)+_0x5616e1(0x1fa)+_0x5616e1(0x10d)+'grid;'+_0x5616e1(0x120)+_0x5616e1(0x406)+_0x5616e1(0x402)+_0x5616e1(0xf5)+_0x5616e1(0x258)+_0x5616e1(0x3ad)+_0x5616e1(0x2e8)+'heigh'+'t:\x2028'+'px;\x20b'+'order'+':\x200;\x20'+_0x5616e1(0x9d)+'r-rad'+_0x5616e1(0x2f9)+'8px;\x20'+_0x5616e1(0x45a)+_0x5616e1(0x143)+_0x5616e1(0x2f0)+_0x5616e1(0x54a)+_0x5616e1(0x271)+'color'+_0x5616e1(0x3bc)+_0x5616e1(0x445)+'\x20opac'+_0x5616e1(0x3df)+_0x5616e1(0x1ed)+_0x5616e1(0x41b)+'r:\x20po'+'inter'+';\x20}\x0a\x20'+_0x5616e1(0x1cf)+'n-clo'+_0x5616e1(0x540)+_0x5616e1(0x288)+_0x5616e1(0x23d)+_0x5616e1(0x3df)+_0x5616e1(0x23c)+'ckgro'+_0x5616e1(0x26d)+_0x5616e1(0x544)+_0x5616e1(0x5f1)+_0x5616e1(0x239)+'5,.05'+_0x5616e1(0x22d)+_0x5616e1(0x36c)+_0x5616e1(0x29b)+_0x5616e1(0x274)+_0x5616e1(0x575)+_0x5616e1(0x354)+_0x5616e1(0x97)+_0x5616e1(0x4dc)+_0x5616e1(0x3d5)+_0x5616e1(0x300)+_0x5616e1(0x505)+_0x5616e1(0x458)+'ne;\x20s'+_0x5616e1(0x45f)+':\x20cur'+'rentC'+_0x5616e1(0x1a2)+_0x5616e1(0x4f4)+'ke-wi'+_0x5616e1(0xf7)+_0x5616e1(0x179)+_0x5616e1(0x44e)+_0x5616e1(0x5d0)+'ap:\x20r'+_0x5616e1(0x592)+_0x5616e1(0x161)+'\x20\x20.mn'+'-cols'+_0x5616e1(0x5c1)+_0x5616e1(0x152)+';\x20min'+_0x5616e1(0x16f)+'ht:\x200'+';\x20ove'+_0x5616e1(0x25c)+_0x5616e1(0x27c)+_0x5616e1(0x5e1)+'displ'+'ay:\x20g'+_0x5616e1(0x13b)+_0x5616e1(0x298)+_0x5616e1(0x390)+_0x5616e1(0x62d)+_0x5616e1(0x50c)+_0x5616e1(0x425)+_0x5616e1(0x2c7)+_0x5616e1(0x3e0)+_0x5616e1(0x578)+_0x5616e1(0x187)+'ax(25'+_0x5616e1(0xc2)+_0x5616e1(0x2d7)+';\x20ali'+'gn-it'+'ems:\x20'+_0x5616e1(0x2ae)+';\x20ali'+'gn-co'+_0x5616e1(0x214)+_0x5616e1(0x5a8)+_0x5616e1(0x2fc)+_0x5616e1(0xff)+_0x5616e1(0x606)+_0x5616e1(0x384)+'ng:\x200'+_0x5616e1(0x5a5)+'6px\x200'+_0x5616e1(0x1f1)+'\x20\x20\x20.m'+'n-col'+'s::-w'+_0x5616e1(0x22c)+_0x5616e1(0x13d)+_0x5616e1(0x3d2)+_0x5616e1(0x40e)+'dth:\x20'+_0x5616e1(0x2e8)+_0x5616e1(0xae)+_0x5616e1(0xa7)+'cols:'+_0x5616e1(0x5c6)+_0x5616e1(0x4cd)+_0x5616e1(0x123)+'bar-t'+_0x5616e1(0x43c)+_0x5616e1(0x5bb)+'kgrou'+'nd:\x20r'+_0x5616e1(0x5d7)+'55,25'+_0x5616e1(0xe0)+_0x5616e1(0x59a)+_0x5616e1(0x4ab)+'der-r'+'adius'+_0x5616e1(0x346)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x5616e1(0x584)+'d\x20{\x20b'+'order'+_0x5616e1(0x630)+'us:\x201'+'2px;\x20'+'backg'+_0x5616e1(0x143)+_0x5616e1(0x568)+_0x5616e1(0xf4)+',255,'+_0x5616e1(0x573)+_0x5616e1(0x15a)+'\x20box-'+'shado'+_0x5616e1(0x35b)+'set\x200'+_0x5616e1(0x2b9)+_0x5616e1(0xa6)+_0x5616e1(0x5d7)+_0x5616e1(0x239)+_0x5616e1(0xe0)+',.05)'+_0x5616e1(0x1f1)+'\x20\x20\x20.s'+_0x5616e1(0x584)+'d.on\x20'+_0x5616e1(0x5bb)+_0x5616e1(0x304)+_0x5616e1(0x3b0)+'gba(2'+_0x5616e1(0x239)+_0x5616e1(0xe0)+_0x5616e1(0x52c)+_0x5616e1(0x2a2)+_0x5616e1(0x360)+_0x5616e1(0x3c8)+_0x5616e1(0x3fd)+_0x5616e1(0x56e)+_0x5616e1(0x516)+_0x5616e1(0x544)+_0x5616e1(0x4b0)+_0x5616e1(0x462)+_0x5616e1(0x224)+_0x5616e1(0x22d)+'\x20\x20\x20\x20.'+_0x5616e1(0x2d9)+_0x5616e1(0x59e)+'ad\x20{\x20'+_0x5616e1(0x2c2))+(_0x5616e1(0x42e)+_0x5616e1(0x1cc)+'align'+'-item'+_0x5616e1(0x17c)+'nter;'+_0x5616e1(0x22a)+'\x208px;'+_0x5616e1(0x459)+_0x5616e1(0x15c)+_0x5616e1(0x55a)+_0x5616e1(0x4ce)+_0x5616e1(0x161)+_0x5616e1(0x2cf)+_0x5616e1(0x46d)+_0x5616e1(0x27e)+_0x5616e1(0x328)+_0x5616e1(0x49a)+_0x5616e1(0x4e5)+_0x5616e1(0x140)+_0x5616e1(0x373)+';\x20}\x0a\x20'+_0x5616e1(0x51f)+_0x5616e1(0x584)+_0x5616e1(0x32b)+'le\x20st'+_0x5616e1(0x4db)+_0x5616e1(0x461)+_0x5616e1(0x3ab)+_0x5616e1(0x201)+_0x5616e1(0x4fd)+_0x5616e1(0x5ad)+'eight'+_0x5616e1(0x513)+';\x20col'+'or:\x20r'+_0x5616e1(0x5d7)+'46,23'+'8,242'+',.45)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x5616e1(0x561)+_0x5616e1(0x4f0)+_0x5616e1(0x3f4)+_0x5616e1(0x3e8)+_0x5616e1(0x583)+'g\x20{\x20c'+_0x5616e1(0x3ff)+_0x5616e1(0x24e)+'0f5;\x20'+_0x5616e1(0xae)+'\x20.sk-'+_0x5616e1(0x125)+'\x20{\x20pa'+'dding'+':\x200\x201'+_0x5616e1(0x192)+_0x5616e1(0x606)+_0x5616e1(0xae)+'\x20.sk-'+_0x5616e1(0x3a3)+_0x5616e1(0x2db)+'nt-si'+_0x5616e1(0xbf)+_0x5616e1(0x5d3)+_0x5616e1(0x5db)+_0x5616e1(0x1fc)+_0x5616e1(0x430)+_0x5616e1(0x4ae)+_0x5616e1(0x2ea)+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x5616e1(0x626)+'l\x20{\x20d'+'ispla'+'y:\x20fl'+'ex;\x20a'+_0x5616e1(0x229)+_0x5616e1(0x1b3)+':\x20cen'+_0x5616e1(0x37c)+'gap:\x20'+_0x5616e1(0x2e8)+'paddi'+_0x5616e1(0x58d)+'px\x200;'+'\x20font'+_0x5616e1(0x243)+_0x5616e1(0x467)+_0x5616e1(0x48d)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'label'+_0x5616e1(0x5c1)+_0x5616e1(0x152)+';\x20col'+_0x5616e1(0x389)+'gba(2'+_0x5616e1(0x11b)+_0x5616e1(0xda)+',.75)'+_0x5616e1(0x1f1)+'\x20\x20\x20.s'+_0x5616e1(0x3ed)+_0x5616e1(0x4aa)+_0x5616e1(0x4bc)+_0x5616e1(0xdc)+'ock;\x20'+'font-'+'size:'+_0x5616e1(0x2cc)+';\x20opa'+'city:'+'\x20.4;\x20'+_0x5616e1(0xae)+'\x20.sk-'+_0x5616e1(0x3f3)+'h\x20{\x20p'+'ositi'+_0x5616e1(0x29c)+_0x5616e1(0x135)+'ve;\x20w'+'idth:'+'\x2026px'+_0x5616e1(0x266)+_0x5616e1(0xa1)+_0x5616e1(0xc6)+'\x20bord'+_0x5616e1(0x5bf)+_0x5616e1(0x4ab)+_0x5616e1(0x429)+_0x5616e1(0x536)+_0x5616e1(0x357)+'x;\x20ba'+'ckgro'+_0x5616e1(0x26d)+_0x5616e1(0x544)+_0x5616e1(0x5f1)+_0x5616e1(0x239)+'5,.07'+');\x20cu'+_0x5616e1(0x41d)+_0x5616e1(0x5e9)+'ter;\x20'+_0x5616e1(0x41e)+'\x20none'+';\x20}\x0a\x20'+_0x5616e1(0x51f)+'k-swi'+'tch::'+'after'+'\x20{\x20co'+_0x5616e1(0x214)+':\x20\x22\x22;'+_0x5616e1(0x18c)+'tion:'+'\x20abso'+'lute;'+_0x5616e1(0x14a)+'\x203px;'+'\x20left'+_0x5616e1(0x581)+_0x5616e1(0x258)+_0x5616e1(0x54f)+'px;\x20h'+'eight'+_0x5616e1(0x377)+_0x5616e1(0x4ab)+_0x5616e1(0x429)+'adius'+_0x5616e1(0x3c2)+_0x5616e1(0x12f)+_0x5616e1(0x304)+_0x5616e1(0x3b0)+'gba(2'+'55,25'+_0x5616e1(0xe0)+_0x5616e1(0x603)+';\x20tra'+'nsiti'+_0x5616e1(0x23f)+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x5616e1(0x4b5)+'.2s;\x20'+_0x5616e1(0xae)+_0x5616e1(0x180)+_0x5616e1(0x3f3)+_0x5616e1(0x566)+_0x5616e1(0x595)+_0x5616e1(0x624)+_0x5616e1(0x5a0)+'\x22]\x20{\x20'+'backg'+_0x5616e1(0x143)+_0x5616e1(0x568))+(_0x5616e1(0xf4)+',107,'+_0x5616e1(0xd1)+_0x5616e1(0x1b9)+_0x5616e1(0xae)+'\x20.sk-'+_0x5616e1(0x3f3)+'h[ari'+_0x5616e1(0x595)+_0x5616e1(0x624)+'\x22true'+_0x5616e1(0x28f)+'fter\x20'+_0x5616e1(0x4ca)+'t:\x2015'+'px;\x20b'+_0x5616e1(0x36d)+'ound:'+_0x5616e1(0x144)+_0x5616e1(0x4cb)+_0x5616e1(0xae)+_0x5616e1(0x180)+'field'+'\x20{\x20ba'+_0x5616e1(0x5b9)+_0x5616e1(0x26d)+_0x5616e1(0x544)+_0x5616e1(0x5f1)+'55,25'+'5,.03'+'5);\x20b'+'order'+':\x200;\x20'+'borde'+_0x5616e1(0x2ef)+'ius:\x20'+_0x5616e1(0x5ef)+'color'+':\x20#f6'+'eef2;'+_0x5616e1(0x459)+'ing:\x20'+'6px\x209'+'px;\x20f'+_0x5616e1(0x587)+_0x5616e1(0x20f)+_0x5616e1(0x503)+_0x5616e1(0x341)+_0x5616e1(0x1db)+_0x5616e1(0x454)+'e;\x20bo'+'x-sha'+'dow:\x20'+_0x5616e1(0x1bf)+_0x5616e1(0x2b9)+'0\x201px'+_0x5616e1(0x4b2)+'(255,'+'255,2'+_0x5616e1(0x254)+_0x5616e1(0x210)+_0x5616e1(0x1bb)+_0x5616e1(0x400)+_0x5616e1(0x515)+_0x5616e1(0x3d8)+_0x5616e1(0x4ba)+_0x5616e1(0x36d)+'ound:'+_0x5616e1(0x167)+_0x5616e1(0x4c5)+'}\x0a\x20\x20\x20'+_0x5616e1(0x180)+_0x5616e1(0x1ad)+_0x5616e1(0x148)+_0x5616e1(0x479)+_0x5616e1(0x39b)+_0x5616e1(0x8d)+'ign-i'+_0x5616e1(0x4e8)+'\x20cent'+_0x5616e1(0xd2)+_0x5616e1(0x46f)+'px;\x20}'+_0x5616e1(0x1bb)+'.sk-s'+'lider'+_0x5616e1(0x118)+'ebkit'+_0x5616e1(0x593)+_0x5616e1(0x5e6)+'e:\x20no'+_0x5616e1(0x4d8)+'ppear'+_0x5616e1(0x4d2)+_0x5616e1(0x433)+';\x20wid'+'th:\x209'+'0px;\x20'+_0x5616e1(0xab)+_0x5616e1(0x195)+_0x5616e1(0x28c)+_0x5616e1(0x5b9)+_0x5616e1(0x26d)+'trans'+'paren'+'t;\x20}\x0a'+_0x5616e1(0x36c)+_0x5616e1(0x491)+_0x5616e1(0x416)+_0x5616e1(0x5c6)+_0x5616e1(0x4cd)+'lider'+'-runn'+'able-'+'track'+_0x5616e1(0x319)+_0x5616e1(0x3d5)+_0x5616e1(0x217)+_0x5616e1(0x356)+_0x5616e1(0x621)+'dius:'+'\x202px;'+'\x20back'+'groun'+_0x5616e1(0x375)+_0x5616e1(0x2f8)+'gradi'+'ent(#'+_0x5616e1(0xde)+_0x5616e1(0x32f)+_0x5616e1(0x1fb)+_0x5616e1(0x345)+_0x5616e1(0x527)+_0x5616e1(0x2c4)+',\x2050%'+_0x5616e1(0x15d)+'%\x20no-'+'repea'+'t,\x20rg'+'ba(25'+_0x5616e1(0xe0)+_0x5616e1(0x40c)+'.08);'+_0x5616e1(0x161)+'\x20\x20.sk'+'-slid'+_0x5616e1(0x52a)+'webki'+_0x5616e1(0x49b)+'der-t'+'humb\x20'+_0x5616e1(0x30c)+_0x5616e1(0x1e2)+'appea'+'rance'+':\x20non'+'e;\x20wi'+'dth:\x20'+'6px;\x20'+_0x5616e1(0xab)+'t:\x206p'+_0x5616e1(0x439)+_0x5616e1(0x4ae)+'top:\x20'+_0x5616e1(0x312)+'\x20bord'+_0x5616e1(0x621)+_0x5616e1(0x4a2)+_0x5616e1(0x5f7)+'\x20back'+_0x5616e1(0xa2)+'d:\x20#f'+'f6b9d'+_0x5616e1(0x1f1)+'\x20\x20\x20.s'+_0x5616e1(0x5d4)+_0x5616e1(0x2db)+_0x5616e1(0x2cb)+_0x5616e1(0xbf)+_0x5616e1(0x5d3)+_0x5616e1(0x305)+'weigh'+'t:\x2060'+_0x5616e1(0x2dc)+'n-wid'+'th:\x202'+_0x5616e1(0x2e8)+_0x5616e1(0x594)+_0x5616e1(0x358)+_0x5616e1(0x4bf)+_0x5616e1(0xa3)+'olor:'+'\x20rgba'+'(246,'+_0x5616e1(0x163)+_0x5616e1(0x405)+');\x20}\x0a'+_0x5616e1(0x36c)+'sk-co'+'lor\x20{')+(_0x5616e1(0x57b)+_0x5616e1(0x5cf)+'px;\x20h'+_0x5616e1(0xcd)+_0x5616e1(0x629)+_0x5616e1(0x42a)+_0x5616e1(0x2e9)+_0x5616e1(0x5de)+_0x5616e1(0x11d)+'-radi'+_0x5616e1(0x564)+_0x5616e1(0x11f)+_0x5616e1(0x36d)+'ound:'+'\x20none'+_0x5616e1(0x2da)+_0x5616e1(0x524)+_0x5616e1(0x321)+_0x5616e1(0x38d)+':\x20poi'+_0x5616e1(0x40b)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x5616e1(0x5b2)+'\x20{\x20fo'+_0x5616e1(0x2cb)+_0x5616e1(0xbf)+'1px;\x20'+'color'+_0x5616e1(0x568)+_0x5616e1(0xc7)+',238,'+_0x5616e1(0xca)+_0x5616e1(0x59c)+_0x5616e1(0x249)+_0x5616e1(0x617)+'x\x200;\x20'+_0x5616e1(0xae)+_0x5616e1(0x180)+_0x5616e1(0x2f5)+'err\x20{'+_0x5616e1(0x24a)+_0x5616e1(0x282)+_0x5616e1(0x47d)+';\x20}\x0a\x20'+_0x5616e1(0x51f)+'k-btn'+_0x5616e1(0x2f6)+_0x5616e1(0x24b)+_0x5616e1(0x170)+'flex-'+_0x5616e1(0x2ae)+';\x20bor'+_0x5616e1(0x60d)+'0;\x20bo'+'rder-'+_0x5616e1(0x30b)+'s:\x208p'+'x;\x20pa'+_0x5616e1(0x128)+_0x5616e1(0x377)+'\x2016px'+_0x5616e1(0x12f)+'kgrou'+_0x5616e1(0x36f)+_0x5616e1(0xde)+'d;\x20co'+'lor:\x20'+_0x5616e1(0x3fe)+_0x5616e1(0x9b)+'-size'+_0x5616e1(0x467)+_0x5616e1(0x48d)+_0x5616e1(0x305)+_0x5616e1(0x480)+_0x5616e1(0x8c)+_0x5616e1(0x27d)+'rsor:'+'\x20poin'+_0x5616e1(0x37c)+_0x5616e1(0xae)+_0x5616e1(0x180)+_0x5616e1(0x60a)+_0x5616e1(0x423)+_0x5616e1(0x22e)+'ter:\x20'+_0x5616e1(0x420)+'tness'+_0x5616e1(0x227)+_0x5616e1(0x1f1)+_0x5616e1(0x27f));window['addEv'+'entLi'+'stene'+'r'](_0x5616e1(0x320)+'wn',_0x1e7436=>{var _0x256b64=_0x5616e1;_0x1e7436[_0x256b64(0x3d4)]===_0x256b64(0x4ac)+'t'&&(_0x1e7436['preve'+_0x256b64(0x18f)+_0x256b64(0x2a5)](),_0x4ba236());},!![]);var _0x286cb4=document['creat'+_0x5616e1(0x438)+_0x5616e1(0x39c)](_0x5616e1(0x5eb));_0x286cb4['style'][_0x5616e1(0x15e)+'xt']=_0x246fff['mhJvC'],_0x286cb4[_0x5616e1(0x469)+'HTML']='<svg\x20'+_0x5616e1(0x237)+_0x5616e1(0x52f)+'\x200\x2024'+_0x5616e1(0x151)+'<path'+'\x20d=\x22M'+_0x5616e1(0x302)+_0x5616e1(0x183)+'-2.5-'+_0x5616e1(0x444)+_0x5616e1(0x5b7)+_0x5616e1(0xd4)+'.5\x201.'+_0x5616e1(0x132)+_0x5616e1(0x142)+_0x5616e1(0x17f)+_0x5616e1(0x1f4)+'5c0\x203'+_0x5616e1(0x5ff)+_0x5616e1(0x3bd)+_0x5616e1(0x460)+_0x5616e1(0x518)+'\x22none'+_0x5616e1(0x1a1)+'oke=\x22'+'#ff6b'+'9d\x22\x20s'+_0x5616e1(0x45f)+_0x5616e1(0x9a)+'h=\x222\x22'+_0x5616e1(0x4f4)+_0x5616e1(0x315)+'necap'+_0x5616e1(0x381)+_0x5616e1(0x1f2)+'troke'+_0x5616e1(0x585)+_0x5616e1(0x2a1)+_0x5616e1(0x5da)+'d\x22/><'+_0x5616e1(0x62a)+_0x5616e1(0x62b)+'\x2212\x22\x20'+_0x5616e1(0xe3)+'0\x22\x20r='+_0x5616e1(0x53f)+'\x20fill'+'=\x22#ff'+_0x5616e1(0x18e)+'/></s'+_0x5616e1(0x482),_0x286cb4[_0x5616e1(0x24f)]='Sakur'+_0x5616e1(0x3f0)+'r',_0x286cb4[_0x5616e1(0x3a9)+_0x5616e1(0x577)+'er']=()=>_0x286cb4[_0x5616e1(0x29a)][_0x5616e1(0x5db)+'ty']='1',_0x286cb4['onmou'+_0x5616e1(0x2ba)+'ve']=()=>_0x286cb4['style'][_0x5616e1(0x5db)+'ty']=_0x5616e1(0x230),_0x286cb4['oncli'+'ck']=_0x56530e=>{var _0x4091f5=_0x5616e1;_0x56530e[_0x4091f5(0x434)+_0x4091f5(0x5a4)+'ation'](),_0x246fff[_0x4091f5(0x3ee)](_0x4ba236);},document['body']['appen'+_0x5616e1(0x57f)+'d'](_0x286cb4),_0x541ba5(),_0x246fff['IEuxF'](requestAnimationFrame,_0x40a949),console['log'](_0x246fff[_0x5616e1(0x56a)],_0x14a7bd['uwmk']);});})()));
}

// ── 2v2.io: UWMK + payload, inlined ──────────────────────────
if (/(^|\.)2v2\.io$/.test(location.hostname || "")) {
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
function _0x4d32(_0x3cd9e3,_0x57e1e7){_0x3cd9e3=_0x3cd9e3-(0x67b+0x58f*-0x5+0x16ed);var _0x342ae5=_0x27cb();var _0x8fe1b=_0x342ae5[_0x3cd9e3];if(_0x4d32['dCTcDN']===undefined){var _0x23a982=function(_0x1dc3b2){var _0x115707='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1606aa='',_0x4392dd='';for(var _0x2435a4=0x22de*-0x1+0xf7+0x21e7*0x1,_0x4f45df,_0x6d626f,_0xd31eb9=-0x347*-0x1+0x1e3d*-0x1+0x1af6;_0x6d626f=_0x1dc3b2['charAt'](_0xd31eb9++);~_0x6d626f&&(_0x4f45df=_0x2435a4%(-0xa21*0x3+-0x1f92+0x3df9)?_0x4f45df*(-0x3*-0x2a5+0x1e3f+0x12f7*-0x2)+_0x6d626f:_0x6d626f,_0x2435a4++%(-0x11b*-0x3+0x15a1+0x18ee*-0x1))?_0x1606aa+=String['fromCharCode'](-0x708*0x2+0x11f1+-0x2e2&_0x4f45df>>(-(0x1dce+-0xb56*0x1+-0x11*0x116)*_0x2435a4&0x2145+0xf*-0x25+0x2*-0xf8a)):-0x11a9+-0x2*0x1297+0x1*0x36d7){_0x6d626f=_0x115707['indexOf'](_0x6d626f);}for(var _0x58ee74=-0x1*-0xf17+-0x79f+-0xef*0x8,_0x47ec1f=_0x1606aa['length'];_0x58ee74<_0x47ec1f;_0x58ee74++){_0x4392dd+='%'+('00'+_0x1606aa['charCodeAt'](_0x58ee74)['toString'](0x192+-0x43*-0x3e+-0x1*0x11bc))['slice'](-(0x24b7+0x9*-0xe1+0x4*-0x733));}return decodeURIComponent(_0x4392dd);};_0x4d32['IChDGW']=_0x23a982,_0x4d32['hhDwSw']={},_0x4d32['dCTcDN']=!![];}var _0x363401=_0x342ae5[-0x50a+-0x13*0x107+0x188f*0x1],_0x2f5dc3=_0x3cd9e3+_0x363401,_0x4ccacd=_0x4d32['hhDwSw'][_0x2f5dc3];return!_0x4ccacd?(_0x8fe1b=_0x4d32['IChDGW'](_0x8fe1b),_0x4d32['hhDwSw'][_0x2f5dc3]=_0x8fe1b):_0x8fe1b=_0x4ccacd,_0x8fe1b;}function _0x27cb(){var _0x52a676=['BM9szwm','Aw5Mqw0','BNvSBcG','A2L0lwe','AwvK','A2uTD2K','DhKGlJm','CMvZiokaLa','ksbPCYa','AxHLzdS','lJu1ktS','svDjEKe','DhvYzt0','whbsA28','nIWXktS','CgX1z2K','C2STy2e','BMrjALm','q1HyzKK','yLPIBfu','yxa9iNi','Aw5Uzxi','CMvHAY0','tMv0D28','s3PjqwW','BMveyxm','Dg8Gy28','mJSGC3q','Dc1Iywm','BwvTB3i','igjVEc0','ugXHEwu','DhLWzq','oYbMB24','mtaWDMG','zuXVy2e','u3rHDgu','D2fYBG','zMvnB2q','ocKPigq','Bwnouha','sML3wfa','ldeWnYW','ig5VBMu','yxrLwsG','ywrVDYa','B3zLBwu','DcbPzd0','DgDtv1q','twfUywC','B2fK','DcKGqa','zw50lxm','DMfSDwu','Evnfzva','rg1rAw4','zwfYr3i','imk3ihnH','oYb3Awq','B250zw4','BM93','Bg9N','CMfTzxm','CMfUz2u','Aw5Ly2e','AxvZoIa','BwvZC2e','oI1TB3O','yKfvt2W','iJmIihG','yxa6idG','uMfWAwq','y2fWtvm','oYbWB2K','mhGXmc8','DxHLwgm','Ag9VA0m','zwTbD3u','re9nig0','C2XPzgu','z2H0oIa','AMDny1e','yMv6Awu','z2jHkdi','EtOGz3i','igzHAwW','AgvHBhq','nJm5nZjSsur5uve','teHiC0y','zgvYoIa','zvbPEgu','pJXSAw4','B2fKic4','mJu1lde','z2v0q2W','sg9VAZO','vMr2v0W','rgj3wgW','zvbkCK0','q2fWDhu','AvHZz1C','B25VC3a','zhbY','t1nusum','igXVy2e','BwvYysa','B2rfAxK','zvbSDwC','Dw1IihS','mI41idi','D3zgBw8','Awr0AdO','CMvHzhK','BgD3A1C','zLDqCfu','y2fWDhu','uMjAEfi','CM9VBq','wMzlt3K','zw5HyMW','B29Tksa','CIGUmJi','zM9YBq','AxbPwKq','igzSzxG','ChbLyxi','nsWUmJu','BNrPyxq','zs5dB3i','lMLViokaLa','z2v0','EYbKAxm','DgjQvfi','BNrZoIa','Dgvzkde','CgPNr1e','uhvkExO','mty2otK4rMr1seHz','uwvhEfC','idfMCJS','CZSGFqO','DgLJAW','mJm2mJi2DKDUtKPR','ChjLDMu','lwv2zw4','lNyX','mdSGDhi','yMTPDc0','BgfZDeu','C2HPzNq','BMvSicS','BwLU','zxjTB3y','nYWXntC','zcbYz2i','C3bSAxq','tKzOy3C','CMfKiIa','zgLHz24','Bunswgm','oMfMDgu','ig1ZBtO','wgDrseW','Aw5NoIa','uLbowem','u2HHCNa','ELbfshK','wNnIwwG','ntSGy3u','CdOGoha','y0nsu2y','vKDqBMC','ig1ZBsa','DdOGoha','zwnLtwC','zYbWBhu','A2rYB3a','y29SB3i','DdOGm3a','nxm0idi','oYb9cIa','B20GBge','qKzHv1O','zsGXnta','EdSGD2K','vgvHBsa','u2fRDxi','CM9Rzs0','B2XVCJ0','4Ocuig5VDa','BNqTzMe','kdi1nsW','ms41ChG','CM9Szq','Ag9ZDdO','Fdz8nhW','DxrVkq','rgX3AuC','Ewv0iokaLa','zJzIowq','CwjywNy','B25LBNq','mZuSmJq','Dgv4Dem','CYaWEdG','mc41','idnJms4','zgvYAxy','lwnHCMq','m2X6tu5TvG','BM8Gzxi','oIbJzw4','wxjwAM8','y3rYBa','z2jHkda','C3rLCa','y2vUDgu','C3rLBMu','igjVCMq','Dg9WoJe','vgv4Da','C2nHBgu','i2zMzta','B1jLy28','B25JBgK','wMDQBvm','EMXnqva','mhGXna','ChG7igm','B3bLBG','AxrPB24','C2v0psi','Acb7iha','C2STC3C','sfPqCKC','CMvWBge','FqOGic4','BgfIzwW','C2LdrhC','vMDmvhO','oIa2ChG','yxK6igy','yLr6A1q','uwjmBxG','igzPCMu','mtfWEca','ANjnD2e','Bgf5oIa','ic5TBI0','BLvlAM8','ugf0Aa','AgfKB3C','mJi1mduZnef1AKf6DG','A1LZALG','mcaWide','r1vwtha','Dw5PDhK','uwXlzgq','t2vdsKS','mNyYlNy','CJO6lxC','zdSGz3i','z2vUDa','qNDIBfi','EhzmCvK','ysbdBgK','sw5Zzxi','nsaWidi','CfrhENK','Aw5Lyxi','BIb7igy','EdSGyM8','ig1PBI0','yM94zxm','y2fSyYG','BgTQCee','zNnLDd0','CKruzuy','B3bHy2K','yujbweC','BhrLCJO','iIbZDhi','oIaXmxa','qLflrwO','mYWXmdy','uwTPrhG','lJqPoYa','Dgv4Dee','q29WAwu','igrPC3a','lxjHBMC','tMfTzq','AwrLCG','psiXmci','Ag9VAW','DNLdBMG','vLf3AvG','oYbIywm','z2fWoIa','BwfQzu4','ChjqwfO','zwjRAxq','lw1HAw4','ywj5u00','zYb0BYa','tgLZDa','DgvHBq','C3rVCfa','yM9Yzgu','C0D6y2u','rfjmu1m','ze9hs2e','C2HPzwW','zMy2yJK','DhvkwMO','BNrLBNq','zgvYihS','BMvS','rLvWCgK','y1bXvvu','CwPrruW','zcb7igi','B2LSpq','y2XHC3m','sKXWseu','uevMBNO','ywnPDhK','C2STz3i','uwDpqNK','yxnZAwC','mJu1ldi','BgvMDdO','zcdINjm','B2TLpsi','CuXrq0W','BgvMDca','lZ48l3m','D2r5D0W','B01ZBKq','igXHEw8','C3r5Bgu','zu9IAMu','ndGZnJq','uxzLqvG','seDUqK4','DxjSkcm','pJXZDg8','y2XPy2S','lc4XmIK','BMfNzxi','uMnKy0K','yxv0BZS','AgvHzca','sMTuve8','zYKGqa','mJ0ImJa','re92EKq','rvnqiokaLa','B21Tyw4','ic13zwi','ifvxtuS','zMLSzw4','zdDLmZS','rcb0BYa','y2u6ig4','oIaXm3a','zMXLEdS','z0nSAwu','twn2Ae0','DuDsEw8','AwDODdO','DYaUmNm','BM8Gy2e','B3nPDgK','v2vItw8','idi0iJ4','DgvYia','iIb5mJ0','zMfPBgu','rdOG','oIbYz2i','zxiGyxi','z24TAxq','oIaYChG','nsaWlti','Bwf4','zMLSBfm','D3HTuhi','r0DLBui','rg93BMW','r0fwzhm','EK1TBgO','EuLHwfi','D09Vz2q','zMLSBd0','DgziqNC','sgvSze0','EMveuvG','oIbPBNm','CgLSAhu','DdOGmJq','nxmGzwe','zenJy1a','BMDZigW','oJrWEca','oIbJB2W','DtmY','CgfJAxq','Dc13zwK','ienVBhK','ihSGzgK','sxfYuvu','mdCSmtu','zguGB24','mcuGBM8','rw5NAw4','yKHiDK8','ANPcwwy','zsba','DhjHBNm','C2vSzwm','uMffCw8','zxjYAwq','ltiUnsa','AYb0Ahi','AwDODa','ihi9iJe','ywrVDZO','CMqTyNi','qNfduNa','Ag9VDgu','t3jeqxq','BNrszwm','zuPYsM0','sg1TCvG','zwqGDg8','sw9Rr2m','CM9VBsa','B3vUzdS','DdSGy28','y2HLy2S','y2fTsgu','q2fToG','ndaWvgjMDNDp','BMzAueC','DhvYzq','zxjYB3i','DgHLBG','DMfS','BMqIlZ4','zxi6oI0','B3nLihm','AY1ZBgK','iJeIihm','yw1L','DvjNze0','vhDXqui','u2fMzxq','zgvYlxi','CxPArMK','EKXZs1m','iNnRlwC','AxrZpsi','oIbHyNm','uNrMshu','yxjPys0','mtu3lc4','BfrYyw4','Dg9tDhi','Aw5MBW','ChjVDg8','zenOAwW','qNrlB24','CMvU','lwzPBhq','pc9ZDMC','D3bdwgC','y29PBca','igzVBNq','yKjqwva','BMCGCM8','m2mTms4','Bg9JywW','ywrWwgq','DgL0Bgu','Au93Ewy','uvjTBu8','icnMzJy','oYbTyxi','oJa7D2K','idi2ChG','BgWGBg8','qxfJwLO','vKLMyMm','EezlA0m','BMnLoIa','zNjHBwu','BtOGDhi','DYGWida','lc4WnsK','z3jHDMK','zgLZCgW','DgvZDa','CMLNAhq','icHgnIK','C2STBge','phn2zYa','r21Iy0W','DhLSzq','Dgv4Dc8','ndiSlJy','zs1JB2W','oYbWywq','ihbSywm','y2L0EtO','zs10Ahu','z3jVDw4','zw50','ENLbExe','tgrjr3K','yw5ZBge','mtfWEdS','Bw92zw0','vgzbvLu','BI1PDgu','DgLVBJO','BMq6igW','Dg9Nz2W','yxbWBgK','Bxm6igm','wNLSBg8','CMfUC2K','C2STC2W','rNLuvKq','DhKGmc4','yxjKlM8','uMzPsuC','pgrLzNm','ihvUAxq','ldiZocW','y2fWqwK','CMvHzey','ihjNyMe','BgrYzw4','ELr3wKW','q09dA3u','rxrurMm','B246ig0','BNr6tfy','BMTLCG','CgfYC2u','C10G','DKnzrxq','ltqTnY4','uMLsDvK','nJaWoYa','Dg9gAxG','zdOGi2y','DhK6ida','AgL6wxG','uKrzz1C','rfLos3y','C0rKtMC','zvzYDhC','qujAvK4','y2fWugK','ihbHEwW','q2XLyxi','yxbWzw4','imk3ihn0','zLblvLm','AwXSpsi','lxbHBMu','lJq1iIa','nxb4oYa','ihjLz2K','C3DPDgm','vwrLu1e','zxG7ige','Ag9VA1m','zM9YBsa','zw50tgK','mtbWEca','Bw96lxi','idaGmxa','C0XVz2C','igjVzhK','CMXdvLy','qMvNBwy','yKn1uwy','zwfRoMi','zcKIihm','CuvYqKW','lZ48C3q','AgPLwLK','EuHcvwO','wNjOv0O','Dw90u1e','t25fBMe','ywrPDxm','zdOG','DhjVBMC','Dg9W','yM94lxm','BgvUz3q','lJm1CYa','BhmGy28','zw50vw4','ChGGi2y','BNrLCG','idj2mI4','sfrnta','zwvMmJS','lJv6iIa','lwDYywq','Bg9Ypsi','AwfSoYa','uNDfwge','Cg9ZAxq','CLjbuhG','B3n0zMK','B29T','zg9JDw0','DxnLCKe','C3rHDgu','ywrPzw4','yxqSihi','BNnMB3i','idqTnc4','4OcuigHVBW','iInMzJy','mcaVihy','Dg9Y','EMu6ide','BgvYiea','B3i6ihi','EcKGC2e','igeGtxK','B2rL','vxbKyxq','BgLNBG','BgfZlg0','oIbIBhu','mtGGnIa','C05rCKG','nYWUncK','Ag9VAYa','u2HVB3q','DYaTidq','zxi6','oJPHzNq','zuvSzw0','CMfKAwu','CgXHEwu','ih0kica','Aw50zxi','CM9YCW','AgvPz2G','z2LMEq','txLsB28','r3jHDMK','ChGGCMC','CJPWB2K','odq1ndCWBMHPq3js','C2vSzwe','zgrPBMC','zxiGqa','EdSGAgu','y2fWtgK','ueXABeG','lxnWywm','qwL1seG','zwqGChi','ywLTtwe','CgTpEg4','y291BNq','rwfcy2u','sw1Mtuq','wMHKsxy','EdSGyMe','sNvTCca','icaUC2S','surIsva','ocWUosK','yMeOmJu','iNrYDwu','idyWmdS','DdOGmZi','oYb0B3a','DgfYDcK','ldaSmcW','oJiXndC','zxjJyw4','Cgf0Ag4','BgHrv3i','t21Uvfi','uLLiy08','mc41o3q','BuLyBuu','cIaGica','oIbVCge','ChvZAa','CM9Wlxm','sfDyvui','Aw9UoMy','oIaZChG','twDY','ignHBgm','ic4YCZS','D2LKDgG','BxzkwwW','tg9N','DxDTAW','zvn0EwW','4Pwq4Pwq4PwqieW','yJnJnIi','nxW2Fde','lxjHzgK','ChGGmti','B2LUDgu','ihrYyw4','iokaLcbtyq','C3rLCMu','DgvYlwu','tgDpyMC','uNvUDgK','EM14zLm','mdSGzM8','B2X1Dgu','zxzLBNq','C3rVCc0','y3rSsgW','mtaSmte','zdSGyM8','Ag9VA04','ig9MzNm','sgvhtuC','CIbOzwK','BNvTyMu','igDHCdO','z2zmww4','vKL1r3u','D3jPDgu','kgDLDhq','B3aGB2y','igvUywi','ihSGyM8','uxjPEfu','AfTHCMK','vhD5A0u','ChjVAMu','t0frs1G','nYWWlJC','veTXqNq','mcWWlda','AwvSze8','A3mGD2K','zM9UDa','Ag9ZDg4','wvvVtxq','EdSGDgu','vhjHBNm','C2L6ztO','C2XPy2u','AKnxvKW','vNnHr2C','BgLUzvC','ywnLo3a','mIbJCMu','B3iGlJi','Dw5KoNi','owqIlZ4','AwqTDgu','z2v0qM8','ig9Wywm','AYb7igG','AM9PBG','Ce5LAMq','zxjPzG','mtiGm3y','B3vUzci','yw5ZAxq','oYbNyxa','tfbny3u','rKrWqvy','mNWW','yxnZtMe','CMv2B2S','Bwvpz3K','Bwu9','DhH0','BMLJA24','wKvxwuu','kfbPzwm','C2v0DgK','y2XVC2u','vM9mEhm','qwLTtwe','whHqAKi','nZKSmtq','CMvMAxG','uhzZvxi','CNnVCJO','idrWEca','ExrXugi','Ag9VA1a','sNbuC3q','zs13Awq','txHLquq','C2v0ug8','BNmTC2u','DMvUDhm','EI1PBMq','y3vYC28','zhKGEYa','oIbKCM8','EeLxy1y','C2zVCM0','Dgf0zt8','igq9iK0','C2v0x0m','C2v0uhi','B2XZ','svLHEwu','CM91BMq','AgvHzgu','khnLDhq','BMnL','mcaWidy','mcbPCYa','CcbVzMy','sK9XBfa','sKjht2e','lJuGms4','u3bLzwq','CfnJAgu','vwjyr24','BMfTrha','ihnVBgK','CgXHEtO','CgfJzsW','icSWEde','zM92t3y','s3rvEe8','BMDL','DxnLCLm','m3W0Fdi','ihSGD2K','qxbWBhK','uxnoq3y','BLvZzsi','oIaXnha','yvjIqvG','zxrL','Dw5KoIa','DMLLD0i','lc45kq','BMfTzxm','y2vS','C2v0','t01eqKC','B3zLCMy','mJm4qKPsu3vZ','ExDiDKi','zgvMCZ4','C2fRDxi','y3G9iJe','lM1Ulwm','zxjjza','C29SDMu','igfIC28','DgvYoYa','tKLVEKy','B2r5','B2fYza','yMvNAw4','DKHhELO','BIbtywS','Bgv4oIa','lxDLAwC','AvnnzNi','igfPBtO','Bw4TBg8','ktSGFqO','lJuIigy','BLbVzMG','Aw5Zzxq','Bw4Ty28','zwLNAhq','zLzPzxC','EtOGlJq','DdOXmha','kdeWmhy','BfjHDgK','B2LS','oIaXoYa','zwf0Aw4','idi4ChG','v2LKDgG','AhjLDZO','CMqTAgu','igjHy2S','AhLWB3q','Eca2ChG','BI1SB2C','Avflzgm','zxzuB28','ANvTCfa','C2vLBNq','AwnRihq','B3GTC2G','CKHLAwC','i2zMnMi','Bcb0Ahi','y2fSBa','s3DAwfu','CMnLANG','lwnSB3m','Bg9NCW','CNLisfO','t1nWD3a','CMvNAxm','yxrLtwe','ihSGB3a','yMfJA2C','DhjPyNu','zxiGC2m','AsWGC2e','mca9ige','r2jABuW','swfoD0y','CdO2ChG','zw50ig0','Aw5N','CNjVCG','sw5ZDge','vw5PDhK','BgvMDa','zgTPDa','qNLjEuW','C2v0qxq','mNb4oYa','ihn0CM8','zMuGtw8','CJOXChG','ugf0txa','Exn0zw0','sgToywC','z2v0sxq','ig5Vihi','ChjLC2u','zM9UDc0','DxjYzw4','ChzXvve','q2fTzxi','C3bHBG','Bw4TDg8','mduPoYa','u2XQAhu','DhLqy3q','y2Doz3O','A3r5BuK','CMnSzsa','ide1ChG','DhvYyxq','pJWVBgK','ktSGDhi','yxa6ihi','vw1LAKC','z2v0q28','tuS6ia','tw9Kzt0','imk3ifvx','qxndtNu','B2XZihS','DgG6idy','AxnWBge','lNnRlwm','CgXvELa','A2v5zg8','C1H5Afi','lc4WnIK','z2vhrwq','B246igi','zgLUzZO','oYbIB3i','ywDNAw4','DgG6idm','igXPBMS','y29TCgW','Ewzrz2i','z29OuwK','u0vnu04','CKXPBMS','uvrcqw0','AvrQDMK','B21tzxq','v3zbAMS','uMvJB2K','A2u9iNu','DK1bve8','iJiXiIa','EuLUC3q','ywn0Axy','iM5VBMu','B24P','Dg87zMK','DgvYo3C','CIGYmNa','zxjH','z2LUlxq','Bg9YoIa','uM9VBvm','mNyY','wKfOs3C','B3jTic4','ihjPz2G','ChG7igi','o21HCMC','yxvSDa','ida7igi','BhPOuhm','CJOJzMy','BguU','zhfsB0W','lxDPzhq','zgL2','vMr4veG','Fdf8mhW','z2v0x2y','yxj0Aw4','qxDHA2u','nsWUmdG','ANL6Evi','AMHfwu8','AgLKzgu','zs1ZCge','v3DJAMS','D29YBgq','DdOGmNa','CxvLCNK','Awn4tNO','y29WEq','s05UAw8','lZb4qY8','zhrOoIa','B3vUzdO','Cg9W','oJeWmcu','BIb7igi','B25TB3u','u1DSCgK','ywrKrxy','BNq+pc8','mJe2AeHlANDs','o2nVBg8','Ae1pDfG','lJuGmsa','lZ48y2K','C3rYB2S','y3jLyxq','y3nZvgu','DunXEM0','DMG7EI0','lJjZlca','Bw4TC2K','C2HHzg8','ywrK','oIaJzMy','zgv2Awm','uNrXEvy','v3jHCha','nc00lJu','AMX4C3y','ywqGC3q','uvzlsNG','ne0XmIa','zvzHBhu','zxiTDgG','ncK7yMe','Acb7igy','yK1SB3q','yM9MEe4','mcaOCgW','v3rrveG','sKzTANq','z2LUoIa','zw50CMK','ntuSlJa','CMzNDMG','rhvTCca','Cgf5Bg8','uKjeExi','iokaLca','lwrPCMu','zJmY','ELvezK0','qxnlzvG','zs1SAw4','AxngAw4','wxPYqvu','ihv3BwS','ktSGy3u','zxzbrvu','DMrKsu8','EhfWqwu','AxrLBxm','zMLSBfi','Bw1V','DwKTC2e','BIb0Awm','C2STy3q','yw5ZCge','vLLzqve','AwvSza','zYb7ihq','DxqTC2G','lwHLAwC','lcbUBYa','yJLKoYa','Aw5Ozxi','zsbvssi','v0fttsa','vg90ywW','ChG7Cge','EcaWihi','AwrLCJO','z2LU','zxC6ia','Agfiv2u','BgLUA2u','y29Z','A0HHDM8','AtmY','y2fWuM8','C05XzMq','zxiTCMe','kgHVB2S','r3DZEg0','BMu7iha','Ahq6mtC','BtSGFqO','AxvZoJG','Afn0BgC','igjHC2K','rNPLshq','A25oq1y','lxnSAwq','mJbWEcW','rK9wicG','zxnZihS','DMu7ihC','CIb7igm','yxrPB24','CY5Mpq','z2HJyKy','CZPUB24','ntG1ntqXBuPmCKLK','CMvH','CMrLCI0','ys51As4','q29UC28','EcaXmNa','uxDnzeW','C2HVB3q','zxjZpq','Dxm6ide','vhvWv1K','z3jHzgK','BM5Lza','zxnW','tuLtu0K','CMfWAwq','mIiGy3K','Bgv4oYa','zhrWwLm','D2vHCg8','B21hzxq','oYbJB2W','B246ihi','mhW1Fdq','oYbOzwK','nsWYntu','mJrMqvHMwue','zJu7ih0','qwrjC0y','ihnOB28','BwfW','zw50zxi','lc43nsK','yuvSr2S','AxrL','ihrOzsa','B2fKzwq','zhvrCNu','mhb4lca','ywjZ','CZOGnta','ys11As0','mJzWEdS','oc00lJu','yu1oENq','ntuSmJu','BgLUzvq','BvbVCZ0','yMXL','yxDUzxi','zwPVAw4','BIWGAw4','we5Osg0','BguUzgW','DfLfrMy','lxrYywm','ldeSlJm','BM9tChi','tg9JywW','B2XVCJS','EdSGCge','oYb0B3u','Dfr1Ahy','igfWCgW','ChGPktS','DLP5sMK','DKfrr3O','tw92zw0','zwfK','yM1rze0','Dw5KiIa','mtiGmJe','C3bSyxK','cIaGoMG','DLvpC1O','oYb0CMe','AgjUzhi','Ag9VA3m','z2v0qxq','iduWjtS','uKj2zfe','DNjvDu4','BMvHCKC','Fdj8mxW','ihDOzw4','l3n0yxq','Fdv8nhW','mtrWEdS','DhPJA3m','mtaWotKZotb4u3b2D3m','CgfKzgK','BNrdB24','tMrsAwO','BYbZDMC','ignVDw4','BwLUkdm','oIbHDxq','DMLZAwi','wLjduwi','EcbYz2i','D2LUzg8','zwPKr0W','zLLWyK0','CKf4Bey','zwn0','ihbVAw4','DgvItMK','CuHvCKC','nwmWidm','Dgv4Dge','lJvnmti','zs10CMe','nZGPoYa','Cg9PBNq','BgLUzw4','mtjWEdS','uKXAAK4','EdTMB24','igj1Dhq','Ahq6ig0','phbHDgG','yMnUEfm','DKrsy2y','y2fYzc0','DgfYz2u','yxrLkde','y2TNCM8','AxrJAdO','CMLMoYa','ywqPiIa','uNj5rgi','sNfizLq','B25LoYa','yNv0Dg8','CMDIysG','lc40nsK','q2jrEMe','BNrLCI0','nIaXoci','BNrezwy','Chv0','tM8GyMW','y2XPzw4','ohb4oYa','zgfTywC','mJuPoYa','ChG7ih0','AwvKpq','zu1Vzhu','igHVB2S','ywDLCG','DMC+','tLLcDuK','igHLAwC','zhjVCc0','ihzPzxC','Awr0Aa','rKfjteu','y2fWvhi','zhrOoJe','Dhj1zq','u0riwg4','iIb5mt0','Bw1ptwO','mciGC3q','zs5dyw0','BI1PBIa','svDADuG','CMvHze8','zwmIlZ4','yM9KEq','B2fKlca','DY5VBMu','igfSAwC','tNDorK0','BMfIBgu','rwnQtNe','vLzysM0','DgXLihm','wMPjsvi','ignOyxi','C3rYAw4','oIaJzJy','q29WEsa','zxjKB3C','CI1Yywq','CNjVCJO','zNnuqwS','yw5LBc4','EgzLAxG','ndySmJm','reLvvuC','zwn0Aw8','icGYDJi','CMWOi3m','idHWEdS','DeLnshK','twDrzfy','mNb4o3i','q2fTpq','CI1IB3G','Ate2','ugn0','yxrLzca','ls1W','Aw5Z','Bw9UB3m','ys4YDJi','yNzHvxu','ugLLy2u','iL0GEYa','CMqTDgK','zZO2ChG','ic5ZAY0','igfYBwu','ic0+ia','idaGnha','uKDRDgG','CI1LDMu','ig1UlwK','CM9WywC','oIaYoha','BNvSBca','BxbZihq','nNb4ktS','BNnVBgu','oIaYnha','zwnVAwW','x2HVB2S','wevvqvm','B2DOyMG','oJOTD2u','ywnLoNa','icaUBw4','ruvrEwC','phn0B3a','C3bLzwq','AfnOywq','BgvKpq','y2vdAgK','CI1YDw4','Aw9UoIa','DhjVA2u','ltiUns0','zxiIlca','s0LmzvK','z2Tqr1K','yJLKiI8','yLvjCKi','ze9YCKe','B3G9iJa','C2STzhi','nhWZFdu','v3LsvwK','oYbHBgK','lxvPlhm','Aw1HDgK','AhjLzG','z2v0x0m','BgvJDdO','yxb0Dxi','BNqTC2K','BZSGzgK','lxnPEMu','zMXLEdO','AxrLige','CMfKAxu','ysGYntu','s0r3tvm','Dw5Kzwy','swfcuMm','C2uSihq','zKr4BLy','BgLUzxm','Dgf0zq','ntuSmta','CfDUyNu','DgXL','lJi1CYW','CMfUC2W','DhKGjq','D25oDw4','mcWUosK','y29Kzq','ywnRz3i','C2fWBeK','mJu1lc4','CunRrNO','u2vSzwm','zxG6ide','ldi1nsW','sg5ur28','twL1AKy','BgLUzwm','u013vNC','yxLLCNm','yM9VDa','iokaLcbOBW','jsK7ic0','CgLLy2u','DfjVB20','psjYB3u','y2fUDMe','CNmGtwe','sgvPz2G','su5jvca','zxq9iJa','ywXS','ideYChG','whzNtuu','Cg9Z','idaGmJq','CMLMlhm','rMLLBgq','ns00idC','BMvSihS','DLDjvLu','tKvtveu','q29SEvm','Bwfa','CND5whi','AwDUoIa','CvfHsg4','CZOGoha','ufzmELG','oNjNyMe','DLnzq1K','AY1TyM8','ihnLCNy','ideWChG','ExPfq0C','AY1NCMe','zwfZzsa','oIbNCMK','vMfSDwu','mtbWEdS','BxnT','BNnPDgK','psiJzMy','B3jKzxi','C2LU','C2fMzu0','A2P5EwK','lNnRlxm','AMnwyw8','zvjLy3q','A2PeBNK','Cd0ICM8','Dw5KAw4','C2v0tgK','mtSGBwK','C2HVD24','C2v0sxq','lJuGms0','CNjiDwm','uLzkuKO','nIWUosK','BMq6icm'];_0x27cb=function(){return _0x52a676;};return _0x27cb();}(function(_0x1bcdf5,_0x474663){var _0x5b7fab=_0x4d32,_0x48cb47=_0x1bcdf5();while(!![]){try{var _0x8dbdb5=parseInt(_0x5b7fab(0x6a0))/(0x1752+0xa*-0x2cb+0x49d)*(parseInt(_0x5b7fab(0x65d))/(-0x253*-0xc+0xb7*0x9+0x4e7*-0x7))+parseInt(_0x5b7fab(0x6cb))/(-0x213*-0xb+0x210a*0x1+-0x37d8)+parseInt(_0x5b7fab(0x483))/(0x1864+0x1ad6+-0x3336)*(-parseInt(_0x5b7fab(0x27b))/(-0x1*-0x1c0d+0x1202+-0x2e0a))+-parseInt(_0x5b7fab(0x658))/(-0xd6+0x16df+-0x1603)*(-parseInt(_0x5b7fab(0x342))/(0x5d4*0x1+-0xf5*0x11+-0x2*-0x53c))+parseInt(_0x5b7fab(0x19f))/(0x186a+0x5*-0x4a7+-0x11f)*(-parseInt(_0x5b7fab(0x626))/(0x184a+-0x57*-0x35+-0xa*0x43a))+parseInt(_0x5b7fab(0x4c2))/(0xb90+-0xd5c+0x1d6)+-parseInt(_0x5b7fab(0x469))/(-0x26db*-0x1+-0x2591+0x1d*-0xb)*(parseInt(_0x5b7fab(0x402))/(0x2*-0x416+-0x7f8+0x1030));if(_0x8dbdb5===_0x474663)break;else _0x48cb47['push'](_0x48cb47['shift']());}catch(_0x5b5c47){_0x48cb47['push'](_0x48cb47['shift']());}}}(_0x27cb,0x15b53*-0xe+0x153*0x731+0x14a697),((()=>{'use strict';var _0x59914c=_0x4d32,_0xb2655f={'BqCRp':function(_0x15c56a,_0x146a39){return _0x15c56a-_0x146a39;},'Begmf':function(_0x57e2d5,_0x27a10d){return _0x57e2d5+_0x27a10d;},'Zyllo':function(_0x2ae144,_0x5f3895){return _0x2ae144!==_0x5f3895;},'wnNun':function(_0x25cef2,_0x8d3bc1){return _0x25cef2>>>_0x8d3bc1;},'hMOtX':function(_0x4c492f,_0x30fedb){return _0x4c492f===_0x30fedb;},'wGKWO':_0x59914c(0x51e)+'g','zMmlj':function(_0xa56018,_0x1db069,_0x8df1f1){return _0xa56018(_0x1db069,_0x8df1f1);},'uotSQ':'pylpQ','OSpwp':function(_0x429444,_0x5509b4,_0x5ceb3a,_0x122432){return _0x429444(_0x5509b4,_0x5ceb3a,_0x122432);},'EdESm':function(_0x241c9a,_0x3140bb){return _0x241c9a!=_0x3140bb;},'KDwMS':'UWMK\x20'+'init:'+'\x20','IWZuH':function(_0x51d6ac,_0x3e55dd,_0x889e76,_0x30c8d8,_0x2adc43){return _0x51d6ac(_0x3e55dd,_0x889e76,_0x30c8d8,_0x2adc43);},'kjDny':function(_0x17e74c,_0x58d248){return _0x17e74c===_0x58d248;},'rcejx':_0x59914c(0x225),'DlwiG':function(_0x22c9cd,_0x134959){return _0x22c9cd+_0x134959;},'zlMAP':function(_0x5f4d40,_0x3720b3,_0x361a87){return _0x5f4d40(_0x3720b3,_0x361a87);},'mOubB':_0x59914c(0x506)+_0x59914c(0x73a)+'regis'+_0x59914c(0x747),'tfHBw':function(_0x4bc9bb,_0xe424ac){return _0x4bc9bb+_0xe424ac;},'DOvzD':function(_0x236458,_0x151932){return _0x236458+_0x151932;},'QsNCv':function(_0x47e117,_0xd128ea){return _0x47e117+_0xd128ea;},'XNhHm':function(_0x372316,_0x1f59d3){return _0x372316+_0x1f59d3;},'XXLKM':_0x59914c(0x223)+_0x59914c(0x2b6)+_0x59914c(0x23c),'vrUuN':function(_0x3a4143,_0x1fb7b8){return _0x3a4143+_0x1fb7b8;},'lgwkW':function(_0x5ec64c,_0x1b1e82,_0x55a083){return _0x5ec64c(_0x1b1e82,_0x55a083);},'EzBHC':function(_0x22a18c,_0xe60226){return _0x22a18c+_0xe60226;},'RbZxR':function(_0x1f6065,_0x480028){return _0x1f6065&&_0x480028;},'zPEHy':_0x59914c(0x4a3)+_0x59914c(0x5ee)+_0x59914c(0x3c5)+_0x59914c(0x27e),'siCDw':function(_0x5b635b,_0x3cc3c7){return _0x5b635b(_0x3cc3c7);},'icxNz':_0x59914c(0x642)+'re','nPofh':_0x59914c(0x4ac)+'entSt'+_0x59914c(0x37e)+_0x59914c(0x72c)+'\x20@','ImfMD':function(_0xa1bcff,_0x233597){return _0xa1bcff!==_0x233597;},'aJKjz':_0x59914c(0x205),'VgLTz':function(_0xa4546d,_0x21db49){return _0xa4546d+_0x21db49;},'PvsUr':'AimMa'+_0x59914c(0x72c)+'\x20@','alnjE':function(_0x56d5ae,_0x4deda3){return _0x56d5ae(_0x4deda3);},'qbXZv':function(_0x4602bd,_0x4b2a28,_0x5a9953){return _0x4602bd(_0x4b2a28,_0x5a9953);},'zpjGT':_0x59914c(0x784)+_0x59914c(0x31e)+_0x59914c(0x74c)+_0x59914c(0x731),'TwqAB':'room\x20'+_0x59914c(0x2cb)+'er\x20re'+_0x59914c(0x602),'VsaGg':function(_0xc0b144,_0x3df058){return _0xc0b144/_0x3df058;},'VGPng':function(_0x2c3583,_0x46ee85){return _0x2c3583-_0x46ee85;},'fHLgd':function(_0x8015e1,_0x583bf3){return _0x8015e1!==_0x583bf3;},'xtGUZ':_0x59914c(0x53a)+_0x59914c(0x600)+_0x59914c(0x27e),'UPZzP':function(_0x1c56c4,_0x526b1d){return _0x1c56c4+_0x526b1d;},'ndIjS':function(_0x43eb68,_0x324b53){return _0x43eb68(_0x324b53);},'namDp':function(_0x1d241f){return _0x1d241f();},'DIUUG':_0x59914c(0x456),'SEMSN':function(_0x1eed01,_0x4daf31){return _0x1eed01+_0x4daf31;},'bofxN':'f32','QVKJx':'jdair','BQKEj':_0x59914c(0x2ed),'HeldM':function(_0x2b2bf2,_0x38b702,_0x381b52){return _0x2b2bf2(_0x38b702,_0x381b52);},'McvhM':_0x59914c(0x6f5),'jhEYO':function(_0x59e239,_0x4be1e2){return _0x59e239+_0x4be1e2;},'ipiZD':function(_0x31cef5,_0x541d89){return _0x31cef5===_0x541d89;},'pvqUQ':function(_0x439ca1){return _0x439ca1();},'Wwcjk':_0x59914c(0x3ac),'sXyhR':_0x59914c(0x29a),'NwNFM':function(_0x257b4f,_0x4de0c8){return _0x257b4f+_0x4de0c8;},'zxVJT':function(_0x5f4caf,_0x583f82){return _0x5f4caf||_0x583f82;},'LpEHk':function(_0x289d81,_0x3137f5){return _0x289d81<<_0x3137f5;},'WohQq':_0x59914c(0x3f7),'EtTFc':function(_0x37bae6,_0x5f4839){return _0x37bae6*_0x5f4839;},'stMjg':function(_0x27c017,_0x57989e){return _0x27c017<=_0x57989e;},'XEUAS':function(_0x301a2b,_0x5c2888,_0xc37557){return _0x301a2b(_0x5c2888,_0xc37557);},'tYEFf':function(_0x11027a,_0x180257){return _0x11027a+_0x180257;},'lUXhH':function(_0x59b8ea,_0x24eec6){return _0x59b8ea>=_0x24eec6;},'lzhPs':function(_0x5a268f,_0x4a3ae5){return _0x5a268f<_0x4a3ae5;},'esqpl':function(_0x2aa1c1,_0x1f3025){return _0x2aa1c1!==_0x1f3025;},'saplI':function(_0x5d886c,_0x137e7c){return _0x5d886c(_0x137e7c);},'meOgy':function(_0x365aea,_0x466e46){return _0x365aea(_0x466e46);},'FYmMx':_0x59914c(0x37b),'ACUOh':_0x59914c(0x70e),'pWgsm':_0x59914c(0x29b),'vZyJi':function(_0x5be313,_0x2a70ea,_0xd10ce3){return _0x5be313(_0x2a70ea,_0xd10ce3);},'kHavo':'state','QbLmx':'room@','qErBL':_0x59914c(0x395),'hSjWQ':'cPNyq','RVJRJ':_0x59914c(0x32d)+_0x59914c(0x41f)+'ayers'+_0x59914c(0x5d7)+_0x59914c(0x547)+_0x59914c(0x68c)+_0x59914c(0x261)+_0x59914c(0x3d8)+'tate?','iSMfr':function(_0x3b5e12,_0x4edf77){return _0x3b5e12+_0x4edf77;},'akSII':_0x59914c(0x271)+_0x59914c(0x598)+_0x59914c(0x327)+_0x59914c(0x5a8),'gVSSK':function(_0x148599,_0x9fce0c){return _0x148599(_0x9fce0c);},'PEfnz':function(_0x2cc8b6,_0x1e7427){return _0x2cc8b6+_0x1e7427;},'dtpZS':_0x59914c(0x277)+'mStat'+_0x59914c(0x771),'PVLzX':function(_0x48e734,_0x4099fc){return _0x48e734(_0x4099fc);},'QveAX':'\x20play'+'ers@','qzZFi':_0x59914c(0x722)+_0x59914c(0x440)+'ift=','TfAVU':function(_0x5ecd51,_0x278248,_0x287bf7){return _0x5ecd51(_0x278248,_0x287bf7);},'ePMWU':function(_0x232393,_0x5dcec4,_0x57bc9d){return _0x232393(_0x5dcec4,_0x57bc9d);},'uajUB':function(_0xcf6bb8,_0x40d3f7,_0x46e306){return _0xcf6bb8(_0x40d3f7,_0x46e306);},'tuJZj':function(_0x29a523,_0x13d2f9){return _0x29a523<_0x13d2f9;},'xqpAe':function(_0x261ade,_0x19e50b){return _0x261ade===_0x19e50b;},'NSVVg':'WVvSn','eAytp':function(_0x16fe38,_0x1f35cc,_0x337b70){return _0x16fe38(_0x1f35cc,_0x337b70);},'pjgGQ':function(_0xdab998,_0x2787c0,_0x5d6e58){return _0xdab998(_0x2787c0,_0x5d6e58);},'RgzgM':function(_0x3ddb71,_0x155aa6,_0x338cf9){return _0x3ddb71(_0x155aa6,_0x338cf9);},'LHHsF':function(_0x36ff0c,_0x8bdb1a,_0x52a86a){return _0x36ff0c(_0x8bdb1a,_0x52a86a);},'adpXd':function(_0x2c2d62,_0x545048,_0x385253){return _0x2c2d62(_0x545048,_0x385253);},'MoJOz':function(_0x30f660,_0x5bfb0e){return _0x30f660!==_0x5bfb0e;},'ywHvB':function(_0x5eddfa,_0x786662,_0xaabfdf){return _0x5eddfa(_0x786662,_0xaabfdf);},'cNomG':function(_0x387399,_0x2f244c,_0xca052b){return _0x387399(_0x2f244c,_0xca052b);},'JkTTO':function(_0x3ac852,_0x2e4e92){return _0x3ac852(_0x2e4e92);},'CbQza':function(_0x296829,_0x12c274,_0x29bd4d){return _0x296829(_0x12c274,_0x29bd4d);},'AqcZZ':function(_0x3466b9,_0x9d0092){return _0x3466b9+_0x9d0092;},'ZjIIR':function(_0x11243a,_0x5ceb35,_0x5e7e37){return _0x11243a(_0x5ceb35,_0x5e7e37);},'oMsnD':function(_0x3e4590,_0x17e7c1,_0x2ee01c){return _0x3e4590(_0x17e7c1,_0x2ee01c);},'TptYr':_0x59914c(0x55f),'YzrAU':'bSlXo','ErEsY':'comps','hjeZY':function(_0x25a2fe,_0x44e9fa){return _0x25a2fe+_0x44e9fa;},'jCsdA':function(_0x333dc3,_0x2d860a){return _0x333dc3+_0x2d860a;},'FZvnV':'\x20comp'+_0x59914c(0x698)+'s\x20sca'+_0x59914c(0x475),'duQru':'ColyM'+_0x59914c(0x5fd)+_0x59914c(0x4c4)+'troll'+'er','OIZPC':_0x59914c(0x6a4),'awSmY':'local'+'\x20Coly'+'Movem'+'entCo'+'ntrol'+_0x59914c(0x25e),'zTwZL':function(_0x4b87f2,_0x155e89){return _0x4b87f2(_0x155e89);},'JLpHE':function(_0x1959e8,_0x4a4b3c){return _0x1959e8&&_0x4a4b3c;},'hizYx':'bcnxS','PLfdj':'room\x20'+_0x59914c(0x2fd)+'eMana'+'ger.s'+'ubscr'+'ibedR'+_0x59914c(0x647)+'@','lkjpA':function(_0x638807,_0x3e530f){return _0x638807===_0x3e530f;},'KzIAl':function(_0x1f3563,_0x4d3b3d){return _0x1f3563!==_0x4d3b3d;},'XxPjB':'GbgVU','WvAjk':function(_0x44ee25,_0x3b18d5,_0x84f2a4){return _0x44ee25(_0x3b18d5,_0x84f2a4);},'RcdcI':function(_0x5b25fd,_0x3a0ed9){return _0x5b25fd/_0x3a0ed9;},'WyRUi':function(_0x2c07cc,_0x373cf7){return _0x2c07cc*_0x373cf7;},'IaNwF':function(_0x507b85,_0x37520e){return _0x507b85>_0x37520e;},'aElGk':function(_0x3a8799,_0x349c02){return _0x3a8799-_0x349c02;},'QkiDx':function(_0x4a280f,_0x5a017b){return _0x4a280f*_0x5a017b;},'Nylch':function(_0x46ef08,_0x541550){return _0x46ef08*_0x541550;},'SDHXn':function(_0x48193,_0x120cec){return _0x48193-_0x120cec;},'fGEIh':function(_0x240b9d,_0x5d1ed8){return _0x240b9d*_0x5d1ed8;},'FRUyd':function(_0x2f5c84,_0x392b78){return _0x2f5c84<_0x392b78;},'GGemB':'RaEqo','KbUhI':'Unity'+'Engin'+_0x59914c(0x50e)+_0x59914c(0x3d5),'yHBUj':_0x59914c(0x2c6)+'r','vMATO':function(_0x4aad91,_0x47dbf1){return _0x4aad91-_0x47dbf1;},'nUKjo':function(_0x3e168e,_0x2a4591){return _0x3e168e*_0x2a4591;},'mvJYl':function(_0x150cec,_0x3b387b){return _0x150cec*_0x3b387b;},'eJrJm':function(_0x3267a1,_0x3dfb59){return _0x3267a1*_0x3dfb59;},'ssakw':function(_0x4e5b7b,_0x5df709){return _0x4e5b7b*_0x5df709;},'prPXZ':function(_0x42d13d,_0x5efc15){return _0x42d13d+_0x5efc15;},'vDRcf':function(_0x25654a,_0xfcf3b2){return _0x25654a*_0xfcf3b2;},'rfgvh':function(_0x334812,_0x24b055){return _0x334812<=_0x24b055;},'fYpbM':function(_0x13fd18,_0x3ab7cf){return _0x13fd18/_0x3ab7cf;},'WtQTH':function(_0x1004c6,_0x475c25){return _0x1004c6*_0x475c25;},'jeNzr':function(_0x2d7cc1,_0x2a003d){return _0x2d7cc1<_0x2a003d;},'CDflJ':function(_0x1dce19,_0x1c1558){return _0x1dce19<_0x1c1558;},'sGzce':function(_0x530c1c,_0x1bf7f0){return _0x530c1c>_0x1bf7f0;},'VNWMF':'4|1|3'+'|5|6|'+_0x59914c(0x2f5),'VVXJm':function(_0x252bea,_0x4c2488,_0x3e9beb){return _0x252bea(_0x4c2488,_0x3e9beb);},'cCRSf':function(_0xf13616,_0x279d8f){return _0xf13616&&_0x279d8f;},'ekAwu':function(_0x45efcf,_0x1870d7,_0x11fb95){return _0x45efcf(_0x1870d7,_0x11fb95);},'ghcbF':_0x59914c(0x2ac),'sNqfd':'UWMK\x20','HZPrG':_0x59914c(0x39a)+'nt','OMDBG':function(_0x1af90d,_0x38938a){return _0x1af90d(_0x38938a);},'nfZPG':function(_0x5d9df2,_0x59c516){return _0x5d9df2!==_0x59c516;},'yWesb':function(_0x1a6fe7,_0x4a3e67){return _0x1a6fe7===_0x4a3e67;},'qQaHn':function(_0x2c2a96,_0x572e21,_0x1878c4,_0x45b1dc,_0x1ac761){return _0x2c2a96(_0x572e21,_0x1878c4,_0x45b1dc,_0x1ac761);},'IqrQU':function(_0x68cac9,_0x4885ef){return _0x68cac9!==_0x4885ef;},'ejdGL':_0x59914c(0x1ee)+_0x59914c(0x388)+'ults\x20'+'appli'+_0x59914c(0x782)+'\x20','ePJrM':_0x59914c(0x2ca),'JqHfT':function(_0x40d597,_0x3c3fe2){return _0x40d597===_0x3c3fe2;},'JpTst':_0x59914c(0x473),'IokGc':_0x59914c(0x451),'JOqlP':function(_0x181286,_0x3e7eab,_0x4bd461,_0xe463f0,_0x164a1b){return _0x181286(_0x3e7eab,_0x4bd461,_0xe463f0,_0x164a1b);},'NIozF':_0x59914c(0x47c)+_0x59914c(0x43a)+_0x59914c(0x777)+_0x59914c(0x44c),'odEiy':function(_0x35f3f2,_0x3c96bb){return _0x35f3f2+_0x3c96bb;},'hkqqd':function(_0x1ba8c6,_0x53b89d){return _0x1ba8c6*_0x53b89d;},'jcVao':function(_0x5e683e){return _0x5e683e();},'rDTeF':function(_0x1d9f64,_0x58a202,_0x1cb37d){return _0x1d9f64(_0x58a202,_0x1cb37d);},'vrNPm':function(_0x4a1a93){return _0x4a1a93();},'PuJyz':function(_0x37252c){return _0x37252c();},'mJmhZ':function(_0x572ad5,_0x555b50,_0x286bfc){return _0x572ad5(_0x555b50,_0x286bfc);},'QlKdd':'esp','dOrrA':function(_0x18936d,_0xcc8631){return _0x18936d+_0xcc8631;},'RryDb':function(_0x45aa1b,_0x358356){return _0x45aa1b+_0x358356;},'vCYEt':function(_0x2b8876,_0x4397fd){return _0x2b8876+_0x4397fd;},'BAudK':_0x59914c(0x2d2)+'cting'+'\x20—\x20ca'+_0x59914c(0x498),'TwykE':function(_0x147b69,_0x38e37c){return _0x147b69===_0x38e37c;},'rNSiQ':'rgba('+_0x59914c(0x303)+_0x59914c(0x6eb)+_0x59914c(0x33c),'YDCmf':'rgba('+'255,1'+'10,11'+'6,.95'+')','cgNgz':function(_0x251e07,_0x23c74d){return _0x251e07(_0x23c74d);},'smfRc':function(_0x2d535c,_0x9bb0e7){return _0x2d535c&&_0x9bb0e7;},'ZRCQb':'dnXKj','zeDQX':'8|5|2'+_0x59914c(0x692)+'0|1|7'+'|3','LawKX':function(_0x4920bf,_0x4301bd){return _0x4920bf>_0x4301bd;},'plUzP':'3|4|6'+_0x59914c(0x4bc)+'5|0','dCccP':function(_0x56bb23,_0x2c3089){return _0x56bb23/_0x2c3089;},'NdRij':function(_0x5a881a,_0x40bff9){return _0x5a881a/_0x40bff9;},'jrMwa':function(_0x5b7f63,_0x2137a9){return _0x5b7f63-_0x2137a9;},'esBCU':_0x59914c(0x4ef)+_0x59914c(0x719)+_0x59914c(0x699)+_0x59914c(0x583),'KwZXU':function(_0x22f216){return _0x22f216();},'RYHcO':function(_0x1a3fac,_0x4aca42){return _0x1a3fac===_0x4aca42;},'PjXzE':function(_0x35c024,_0x4ccde8){return _0x35c024*_0x4ccde8;},'HnTGo':'aria-'+_0x59914c(0x3ef)+'n','HkNag':'true','ZhdIv':_0x59914c(0x1c6)+'\x20Coly'+_0x59914c(0x2dd)+_0x59914c(0x228)+'@','Yvvmn':function(_0x5508a0,_0x548264){return _0x5508a0!==_0x548264;},'RBvdQ':'SvwAo','LSxiZ':'aria-'+'check'+'ed','QTBAm':'role','ZsbYh':function(_0x2b258b,_0x15458d){return _0x2b258b(_0x15458d);},'NFhcw':function(_0x153044,_0x424be3){return _0x153044+_0x424be3;},'kjyyi':_0x59914c(0x535),'GcvVh':function(_0x4e4811,_0x540ee5){return _0x4e4811*_0x540ee5;},'vWIVU':'sk-ra'+_0x59914c(0x330),'bvaUu':_0x59914c(0x39f),'hbndr':function(_0x2f93c6,_0x2a4677){return _0x2f93c6*_0x2a4677;},'UbXGn':_0x59914c(0x43b)+'l','QRmmO':_0x59914c(0x345)+_0x59914c(0x46c)+_0x59914c(0x6d2)+'1','ypsSP':'\x20on','OrDAt':_0x59914c(0x3e6),'WBGHM':'sk-ca'+_0x59914c(0x368)+'ad','lPbUl':'sk-mb'+_0x59914c(0x34d),'EEQyg':function(_0x261986,_0x21f4b4){return _0x261986+_0x21f4b4;},'bHHvO':'get_f'+_0x59914c(0x2d7)+_0x59914c(0x35d),'mCxTs':function(_0x2f1a62,_0x246ea9,_0x205357){return _0x2f1a62(_0x246ea9,_0x205357);},'IWIzA':function(_0x1c83fb,_0x4acf20){return _0x1c83fb+_0x4acf20;},'QrixU':'\x20enab'+_0x59914c(0x557),'AdIsF':function(_0x4c9747,_0x114b20){return _0x4c9747>>>_0x114b20;},'sNQrH':_0x59914c(0x345)+'a-2v2'+'-log.'+_0x59914c(0x2fa),'rrHuc':_0x59914c(0x4ef)+_0x59914c(0x2d6)+',.5)','zaejG':function(_0x5ebdf0,_0x51edee,_0x39cf9f){return _0x5ebdf0(_0x51edee,_0x39cf9f);},'qDEbo':function(_0x362bd0,_0x4cfba9,_0x3a726e){return _0x362bd0(_0x4cfba9,_0x3a726e);},'RDYgW':'Healt'+'h','MxeAD':function(_0x965745,_0x5bfeaf,_0x559a55){return _0x965745(_0x5bfeaf,_0x559a55);},'QwMdL':'Lines','AEbps':'No\x20re'+_0x59914c(0x1c1)+_0x59914c(0x455)+')','Sljhu':function(_0x42f10d,_0x135be6,_0x534690){return _0x42f10d(_0x135be6,_0x534690);},'nBqHB':'Infin'+_0x59914c(0x572)+_0x59914c(0x438),'HGnBN':function(_0x558ce8,_0x51d25f,_0xc6dd3f,_0x16a264,_0x15f91e){return _0x558ce8(_0x51d25f,_0xc6dd3f,_0x16a264,_0x15f91e);},'wxmPr':_0x59914c(0x28c)+'%','RjBwM':_0x59914c(0x278)+_0x59914c(0x581),'tbjTR':'Calib'+'ratio'+'n','rwyXr':function(_0x37bb7f,_0x6f4a33,_0x2957d5){return _0x37bb7f(_0x6f4a33,_0x2957d5);},'VIuGu':function(_0x583796,_0xfa1af1,_0x9513eb,_0x331cab,_0xdb8fab,_0x133de1){return _0x583796(_0xfa1af1,_0x9513eb,_0x331cab,_0xdb8fab,_0x133de1);},'pilhu':_0x59914c(0x5ee)+_0x59914c(0x2c5)+'ght','rhxhP':function(_0x132b0b,_0x5e9d80,_0x174424){return _0x132b0b(_0x5e9d80,_0x174424);},'aeeBn':_0x59914c(0x1ad)+'y','RwEXa':function(_0x265ac5,_0x17693a,_0x58e7d6){return _0x265ac5(_0x17693a,_0x58e7d6);},'EcjNq':function(_0x365f5f,_0x49b479,_0x422c55){return _0x365f5f(_0x49b479,_0x422c55);},'xvLqY':_0x59914c(0x62e)+'\x20room'+_0x59914c(0x4be)+'e','ARJzj':function(_0x3314f3,_0x5e9c62){return _0x3314f3+_0x5e9c62;},'JBGOa':function(_0x447603,_0x9c5009){return _0x447603+_0x9c5009;},'djdmr':function(_0x1ccf94,_0x4684d6){return _0x1ccf94+_0x4684d6;},'pkOxn':_0x59914c(0x4a8)+_0x59914c(0x5d3),'AiuHH':function(_0x4c046e,_0x4ae603){return _0x4c046e+_0x4ae603;},'tIMHy':_0x59914c(0x21d)+'ate\x20','mCRXc':function(_0x21be58,_0x3f135e){return _0x21be58+_0x3f135e;},'vyCnh':function(_0x4613bb,_0x45deaa){return _0x4613bb+_0x45deaa;},'zmxfS':_0x59914c(0x67b),'KtUxO':'\x20cam\x20','PcnND':function(_0x1c21de,_0x4532fa){return _0x1c21de(_0x4532fa);},'zLsKS':_0x59914c(0x6a1)+_0x59914c(0x274),'DYNKv':'F6\x20du'+_0x59914c(0x548)+'he\x20fu'+_0x59914c(0x1cf)+_0x59914c(0x6ff)+'the\x20D'+_0x59914c(0x36e)+_0x59914c(0x242)+'nsole','XreHw':_0x59914c(0x470)+'er','RBDyr':'VWRRu','pWpQl':_0x59914c(0x520)+_0x59914c(0x37a),'MUEJj':'WgpNT','HmmqX':_0x59914c(0x564)+'aggin'+'g','HBwTl':'mn-pa'+_0x59914c(0x70c),'bAUOl':_0x59914c(0x40d)+'de','tebNi':_0x59914c(0x4ee)+'n','evAEU':'<svg\x20'+_0x59914c(0x33b)+_0x59914c(0x563)+_0x59914c(0x5a0)+'\x2024\x22>'+_0x59914c(0x4e1)+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+_0x59914c(0x267)+_0x59914c(0x4f3)+_0x59914c(0x71f)+_0x59914c(0x500),'NYBuI':_0x59914c(0x4da)+_0x59914c(0x667)+'e','jFYyq':function(_0x5dbc10,_0x2f17ee){return _0x5dbc10===_0x2f17ee;},'RfiIG':'auto','wvFmo':'═══\x20S'+'AKURA'+'\x202V2\x20'+'DIAGN'+_0x59914c(0x636)+'S\x20═══','adMFz':function(_0x159b99,_0x1846af){return _0x159b99+_0x1846af;},'oDqxX':_0x59914c(0x5a6)+'D','NOKSL':_0x59914c(0x23e),'npYoD':'\x20·\x20ua'+':\x20','jCWVL':function(_0x3c9598,_0x2e1d9f){return _0x3c9598+_0x2e1d9f;},'VzzdN':_0x59914c(0x3b0)+_0x59914c(0x3ae),'mIXmE':function(_0x1ecec4,_0x56b468){return _0x1ecec4+_0x56b468;},'ytqPb':function(_0x1491bd,_0x4864c5){return _0x1491bd+_0x4864c5;},'Bncsu':_0x59914c(0x21d)+'ate:\x20','Pkbbg':'\x20·\x20pl'+_0x59914c(0x590)+':\x20','BtKon':function(_0x90943a,_0x57faa3){return _0x90943a+_0x57faa3;},'qLQCL':function(_0x24a3b8,_0x4c0b21){return _0x24a3b8+_0x4c0b21;},'tgSWT':function(_0xbf40ec,_0x1b110e){return _0xbf40ec+_0x1b110e;},'hFHia':function(_0xde95eb,_0x1cb719){return _0xde95eb+_0x1cb719;},'DmQin':function(_0x579406,_0x15b8b3){return _0x579406(_0x15b8b3);},'ZgjmS':'\x20view'+':','IYaye':'\x20room'+':','LMhft':'\x20stat'+'e:','NBKUf':_0x59914c(0x486)+'ter:','IPHUB':function(_0x24f7ec,_0x990fc7){return _0x24f7ec+_0x990fc7;},'UQtzq':_0x59914c(0x2ae)+'OG\x20(','AsDni':function(_0x210a75){return _0x210a75();},'DDynl':_0x59914c(0x45e),'majeN':function(_0x5836bf,_0x362774){return _0x5836bf!==_0x362774;},'bTzkT':_0x59914c(0x61a),'Cofxy':function(_0x1723d6,_0x49caa7){return _0x1723d6!==_0x49caa7;},'ctlHl':_0x59914c(0x3ed),'fDxnV':function(_0x2c2dae,_0x499772,_0x5413fa){return _0x2c2dae(_0x499772,_0x5413fa);},'vhMJm':function(_0x2ce687,_0x40068a){return _0x2ce687(_0x40068a);},'oIpbk':'VQwiX','DRLSS':'style','wOogd':'tCZoy','eimKM':function(_0x4628e1,_0x1d2171){return _0x4628e1+_0x1d2171;},'hStlg':function(_0x4380ab,_0x4db494){return _0x4380ab===_0x4db494;},'KIYmp':function(_0x9a8087){return _0x9a8087();},'ZnJFN':function(_0x226029,_0x41d10d){return _0x226029===_0x41d10d;},'yfQgb':_0x59914c(0x6b8)+'itch','VZSRW':'JJaoC','qCkFz':function(_0x52f035,_0x42c051,_0x4e07e0){return _0x52f035(_0x42c051,_0x4e07e0);},'JGPme':_0x59914c(0x61d)+'ounte'+'d\x20(ov'+'erlay'+'\x20+\x20pa'+_0x59914c(0x665)+_0x59914c(0x4df)+_0x59914c(0x3d1),'PwKHR':_0x59914c(0x591),'oWKAn':'\x20fram'+'e=','uCqzm':_0x59914c(0x5d1)+_0x59914c(0x252)+_0x59914c(0x603)+_0x59914c(0x295),'xIWcV':_0x59914c(0x1fe)+_0x59914c(0x3ce)+'ance=','uRgdM':_0x59914c(0x345)+'a.2v2'+_0x59914c(0x660),'bZblU':function(_0x492b16,_0x3f9a63,_0x980b90){return _0x492b16(_0x3f9a63,_0x980b90);},'XvgME':function(_0x546e1c,_0x113ce8){return _0x546e1c!==_0x113ce8;},'wpCXg':'Assem'+'bly-C'+_0x59914c(0x674)+'.dll','dOGKa':function(_0x32ce51,_0x4d3342,_0x4ac1e5){return _0x32ce51(_0x4d3342,_0x4ac1e5);},'NkqhK':'Local'+'Playe'+_0x59914c(0x3c5)+'er','aMNzt':'Awake','tHkVJ':_0x59914c(0x4ac)+'entSt'+'ateMa'+_0x59914c(0x72c),'jtpkc':function(_0x463210,_0x10d28d,_0x4fc3c4,_0x1b58ef,_0x19c620,_0x349786,_0x39e783,_0x4426f5){return _0x463210(_0x10d28d,_0x4fc3c4,_0x1b58ef,_0x19c620,_0x349786,_0x39e783,_0x4426f5);},'uGRyo':'ColyT'+'ransf'+'orm','tzcks':function(_0x5bb00c,_0x41ce56,_0x307401,_0x526eea,_0x5d5673,_0x15ed41,_0x48fdec,_0xc57a73){return _0x5bb00c(_0x41ce56,_0x307401,_0x526eea,_0x5d5673,_0x15ed41,_0x48fdec,_0xc57a73);},'LdIGy':_0x59914c(0x452)+_0x59914c(0x3c8),'BAOlQ':_0x59914c(0x318)+'urren'+_0x59914c(0x595),'BwblR':'capRo'+_0x59914c(0x47d),'iTjvi':_0x59914c(0x219)+_0x59914c(0x67d)+'r','ySEeP':_0x59914c(0x5cf)+_0x59914c(0x362),'VdxTH':'Gun','FDpAV':function(_0x20d5b1,_0x3f7aa4){return _0x20d5b1+_0x3f7aa4;},'ktymI':_0x59914c(0x477)+'NG','beIUh':'\x20—\x20Sa'+_0x59914c(0x393)+_0x59914c(0x76c)+_0x59914c(0x442)+_0x59914c(0x4b6)+'\x20arme'+'d','sDdNg':function(_0x514202,_0x53c2dd,_0x2c0872){return _0x514202(_0x53c2dd,_0x2c0872);},'SWlpi':_0x59914c(0x24e)+_0x59914c(0x2a4)+_0x59914c(0x5d8)+_0x59914c(0x35a)+_0x59914c(0x1cd)+_0x59914c(0x508)+'00vw;'+'heigh'+'t:100'+_0x59914c(0x40b)+'index'+_0x59914c(0x297)+_0x59914c(0x725)+'6;poi'+'nter-'+_0x59914c(0x2bd)+_0x59914c(0x468)+'e','iQKdc':_0x59914c(0x6b4),'vNLFj':_0x59914c(0x3b7)+'wn','bUIrB':'posit'+'ion:f'+'ixed;'+_0x59914c(0x6aa)+_0x59914c(0x52f)+_0x59914c(0x741)+_0x59914c(0x4dc)+_0x59914c(0x310)+'ex:21'+'47483'+'646;c'+'ursor'+':poin'+_0x59914c(0x3d3)+_0x59914c(0x63e)+_0x59914c(0x493)+'heigh'+'t:26p'+'x;opa'+_0x59914c(0x1e6)+_0x59914c(0x29d)+'ransi'+_0x59914c(0x1f1)+_0x59914c(0x6e5)+_0x59914c(0x1fa)+'2s;po'+_0x59914c(0x273)+_0x59914c(0x65f)+'ts:au'+_0x59914c(0x3d2)+_0x59914c(0x6e7)+_0x59914c(0x503)+'shado'+_0x59914c(0x1d6)+_0x59914c(0x307)+_0x59914c(0x4ef)+_0x59914c(0x62c)+'07,15'+_0x59914c(0x2d4)+'))','ntzLV':_0x59914c(0x689)+_0x59914c(0x6d8)+'ent\x20-'+_0x59914c(0x246)+'io'};if(!/(^|\.)2v2\.io$/[_0x59914c(0x1da)](location['hostn'+_0x59914c(0x1aa)]||''))return;if(window['__SAK'+'URA_2'+'V2__'])return;window['__SAK'+'URA_2'+'V2__']=!![];var _0x253f86=_0x59914c(0x374)+'9d',_0x30212e='#ffb3'+'c6',_0x461fe5={'logs':[],'t0':typeof performance!==_0x59914c(0x576)+'ined'&&performance['now']?performance[_0x59914c(0x60b)]():Date['now'](),'add':function(_0xf5632d,_0x137da5){var _0x5abff0=_0x59914c;try{var _0x52af13=(_0xb2655f[_0x5abff0(0x77c)](performance[_0x5abff0(0x60b)](),_0x461fe5['t0'])/(0x872+0x2164+-0x25ee))[_0x5abff0(0x210)+'ed'](0x14ba+-0x247f+-0x1*-0xfc7);_0x461fe5['logs'][_0x5abff0(0x2a1)](_0xb2655f[_0x5abff0(0x230)](_0xb2655f['Begmf']('['+_0x52af13+_0x5abff0(0x20b),_0xf5632d)+'\x20',_0x137da5));if(_0x461fe5[_0x5abff0(0x37a)]['lengt'+'h']>-0x138b+-0x2*0x3dd+-0x7*-0x43b)_0x461fe5[_0x5abff0(0x37a)][_0x5abff0(0x664)]();}catch(_0x2c142f){}}};function _0x49cd11(_0x4fc467,_0x338c62){var _0xe69193=_0x59914c;_0xb2655f[_0xe69193(0x1f6)]('JaEBA',_0xe69193(0x630))?_0x461fe5[_0xe69193(0x40f)](_0x4fc467,_0x338c62):(_0x5d0746[_0xe69193(0x271)+_0xe69193(0x373)+'ht']=_0x29ee71,_0x5078da());}function _0x24c979(_0x19e87b){var _0x470200=_0x59914c;return'0x'+_0xb2655f[_0x470200(0x582)](_0x19e87b,-0x15da+0x168f+-0xb5)[_0x470200(0x1b8)+_0x470200(0x389)](-0x1a4f+-0x86a+0x22c9);}[_0x59914c(0x60c),_0x59914c(0x1b9),_0x59914c(0x5f4),'error']['forEa'+'ch'](function(_0x495937){var _0x2ddb15=console[_0x495937]||function(){};console[_0x495937]=function(){var _0x46d02e=_0x4d32,_0x154f7b={'RtfHu':function(_0x5222f3,_0x308a5b,_0x51f433){return _0x5222f3(_0x308a5b,_0x51f433);},'mcNPp':'DOM\x20m'+'ount\x20'+'faile'+'d:\x20','OeCJK':function(_0x302f05,_0x117a5e){return _0xb2655f['hMOtX'](_0x302f05,_0x117a5e);},'aOlTY':_0xb2655f['wGKWO'],'gfLYn':'WIPfG'};try{var _0x3ba5c5=Array[_0x46d02e(0x1ba)+'type']['slice'][_0x46d02e(0x376)](arguments),_0x5e9a24=_0x3ba5c5[_0x46d02e(0x487)](function(_0xf608e8){var _0x4ba8fb=_0x46d02e;if(_0x154f7b[_0x4ba8fb(0x6d1)](typeof _0xf608e8,_0x154f7b['aOlTY']))return _0xf608e8;if(_0xf608e8&&_0xf608e8[_0x4ba8fb(0x611)+'ge'])return _0xf608e8[_0x4ba8fb(0x611)+'ge'];try{if(_0x154f7b[_0x4ba8fb(0x6d1)](_0x154f7b[_0x4ba8fb(0x2c8)],_0x4ba8fb(0x2fc)))_0x154f7b[_0x4ba8fb(0x1b4)](_0x1d2b36,'boot',_0x154f7b[_0x4ba8fb(0x5f7)]+(_0x399f73&&_0x71f18['messa'+'ge']));else return String(_0xf608e8);}catch(_0x3ca497){return'?';}})['join']('\x20');/UnityWebModkit|sakura|hook|Hook|signature|CompileError|RuntimeError/i['test'](_0x5e9a24)&&_0xb2655f['zMmlj'](_0x49cd11,_0xb2655f[_0x46d02e(0x230)]('conso'+_0x46d02e(0x3e3),_0x495937),_0x5e9a24['slice'](-0x7c3+-0x1926+0x20e9*0x1,0x35*0xb3+-0x1*-0x64d+-0x1*0x29cc));}catch(_0x9b67d3){}return _0x2ddb15['apply'](console,arguments);};}),window[_0x59914c(0x400)+'entLi'+_0x59914c(0x6a8)+'r'](_0x59914c(0x1a2),function(_0x445c0f){var _0x23ad0d=_0x59914c;try{_0x49cd11(_0x23ad0d(0x4cd)+_0x23ad0d(0x515)+_0x23ad0d(0x38a),_0xb2655f[_0x23ad0d(0x230)]((_0x445c0f[_0x23ad0d(0x611)+'ge']||'?')+'\x20@',String(_0x445c0f[_0x23ad0d(0x738)+_0x23ad0d(0x1aa)]||'')['split']('/')['pop']())+':'+(_0x445c0f[_0x23ad0d(0x4db)+'o']||'?'));}catch(_0x53c843){}},!![]),_0x49cd11(_0xb2655f['PwKHR'],_0xb2655f['XNhHm'](_0x59914c(0x427)+_0x59914c(0x416)+_0x59914c(0x3ea)+'g\x20—\x20h'+'ostna'+_0x59914c(0x2f9)+location['hostn'+_0x59914c(0x1aa)]+_0xb2655f['oWKAn']+(window['top']!==window['self']?'NESTE'+'D':_0x59914c(0x23e))+(_0x59914c(0x22e)+'='),document[_0x59914c(0x513)]?'ready':_0xb2655f[_0x59914c(0x40a)])+(_0x59914c(0x431)+'=')+!!window[_0x59914c(0x38c)+_0x59914c(0x745)+_0x59914c(0x38e)]+_0xb2655f[_0x59914c(0x314)]+!!window[_0x59914c(0x6cf)+_0x59914c(0x38b)+'nce']);var _0xc6c61b={'esp':![],'boxes':!![],'names':!![],'health':!![],'team':!![],'lines':![],'scale':0x1,'noRecoil':![],'noSpread':![],'rapidFire':![],'damageValue':0x96,'infAmmo':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'camHeight':1.6,'playerHeight':1.8,'fovOverride':0x0,'safeMode':![],'hookCapture':![],'hookState':![],'hookNoRecoil':![]},_0x476cc9={..._0xc6c61b};try{Object[_0x59914c(0x718)+'n'](_0x476cc9,JSON[_0x59914c(0x20a)](localStorage['getIt'+'em'](_0xb2655f[_0x59914c(0x1ab)])||'{}'));}catch(_0x4333bd){}function _0x463da6(){var _0x5284db=_0x59914c;try{localStorage[_0x5284db(0x5c9)+'em'](_0x5284db(0x345)+_0x5284db(0x538)+_0x5284db(0x660),JSON[_0x5284db(0x51e)+_0x5284db(0x276)](_0x476cc9));}catch(_0x398b28){}}_0xb2655f[_0x59914c(0x5e2)](_0x49cd11,_0x59914c(0x591),_0x59914c(0x2fe)+_0x59914c(0x762)+_0x59914c(0x48d)+_0x59914c(0x592)+'okCap'+_0x59914c(0x5db)+_0x476cc9['hookC'+'aptur'+'e']+(_0x59914c(0x4fe)+_0x59914c(0x5f3)+'=')+_0x476cc9[_0x59914c(0x227)+_0x59914c(0x57b)]+('\x20hook'+'NoRec'+_0x59914c(0x711))+_0x476cc9[_0x59914c(0x2c2)+_0x59914c(0x6ae)+'il']+('\x20safe'+_0x59914c(0x3af))+_0x476cc9['safeM'+'ode']);var _0x43f45c={'uwmk':!!window['Unity'+_0x59914c(0x745)+_0x59914c(0x38e)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'linker':![],'msm':![],'localView':![],'localTransform':![],'charCam':![],'aimManager':![],'room':![],'state':![],'spawner':![],'pieceMgr':![],'worldCamera':0x0,'players':0x0,'lastError':''},_0xaefd49=null,_0x2b4af0=null,_0x1bbef4={},_0x145f10=0xa90+0xa9*0x1e+-0x1e5e,_0x276d64=-0x1f01+0x6+0x2d1*0xb,_0x1d842f=-0x1913+0x178*-0x2+0x1c03,_0xad8e09=0x1e11+-0x2407+0x5f6,_0x5e2a79=-0x41b*0x8+0xc59+0x147f,_0x6bb492=0xd*0x25f+-0x1*0xa99+-0x143a,_0x399204=-0x1269+-0x1*0x64d+-0xc5b*-0x2,_0xa9f5de=0x1270+0x1f6f*0x1+-0x2ef*0x11,_0x3ff1d0=0x2071+0x1*0x11ef+-0x20*0x193,_0x29b936=0x3*0x6a1+0x896+-0x1c79,_0x2420ea=0xa*-0x337+0x1a90+0x596,_0x3aeb74=-0x37*-0x89+0xc67*0x1+0x7e*-0x55,_0x27fd46=[],_0x158891=new Map();function _0x3ac022(_0x28d653,_0x52ee72,_0x997980){var _0xa4d708=_0x59914c,_0x2a65da=_0x158891[_0xa4d708(0x651)](_0x28d653);!_0x2a65da&&(_0x2a65da=new Map(),_0x158891[_0xa4d708(0x33f)](_0x28d653,_0x2a65da));if(!_0x2a65da['has'](_0x52ee72)){if(_0xb2655f['hMOtX'](_0xb2655f[_0xa4d708(0x239)],'BRiSA')){var _0x46f4fd=new _0x5b952b(_0x25b978)[_0xa4d708(0x201)+_0xa4d708(0x43e)](_0x51bdcd,_0xa4d708(0x765));return _0x46f4fd?_0x46f4fd['val']():0x2265+-0x10df+-0x2*0x8c3;}else try{var _0x2765ba=new _0xaefd49(_0x28d653)[_0xa4d708(0x201)+'ield'](_0x52ee72,_0x997980);_0x2a65da[_0xa4d708(0x33f)](_0x52ee72,_0x2765ba!==undefined?_0x2765ba[_0xa4d708(0x1a4)]():null);}catch(_0x779d0c){_0x2a65da[_0xa4d708(0x33f)](_0x52ee72,null);}}return _0x2a65da['get'](_0x52ee72);}function _0x426abd(_0x14007f,_0x5e3749,_0xad7ac,_0x33b192){var _0xa19e42=_0x59914c,_0x522b92={'TaYHc':function(_0x181435,_0x2d232f,_0x4cc4ca){var _0x167836=_0x4d32;return _0xb2655f[_0x167836(0x756)](_0x181435,_0x2d232f,_0x4cc4ca);},'GAAcu':'11px\x20'+_0xa19e42(0x439)+_0xa19e42(0x30e)+_0xa19e42(0x5a1)+'ystem'+_0xa19e42(0x568)+'ans-s'+_0xa19e42(0x2ee),'PbkCw':'cente'+'r'};if(_0xa19e42(0x288)!==_0xa19e42(0x288))return _0x522b92['TaYHc'](_0x502527,_0x9fadfa,_0x273173);else try{_0xb2655f[_0xa19e42(0x404)](_0xa19e42(0x58f),_0xa19e42(0x3e4))?(_0x4bf769['fillS'+'tyle']=_0xa19e42(0x4ef)+'255,2'+_0xa19e42(0x699)+'0,.9)',_0x1c9990[_0xa19e42(0x2d9)]=_0x522b92['GAAcu'],_0x401ce7['textA'+_0xa19e42(0x264)]=_0x522b92['PbkCw'],_0x16d2b7['fillT'+'ext'](_0xb8c2b6['nickn'+'ame'],_0x2fec66['x'],_0x32e1ea-(-0x2383*0x1+0x39e*-0x4+-0xd*-0x3d9))):new _0xaefd49(_0x14007f)[_0xa19e42(0x2ca)+'Field'](_0x5e3749,_0xad7ac,_0x33b192);}catch(_0x4b6a37){}}function _0x599f5e(_0x327620,_0x50edea,_0x322175,_0x1b2e6d){var _0x202cea=_0x59914c,_0x45e15d=_0xb2655f[_0x202cea(0x37c)](_0x3ac022,_0x327620,_0x50edea,_0x322175);if(_0xb2655f['EdESm'](_0x45e15d,null))_0x426abd(_0x327620,_0x50edea,_0x322175,_0x45e15d*_0x1b2e6d);}function _0x41f575(_0x2cf3b2,_0x5bc985,_0x27229d,_0x2a4638,_0x5629d8,_0x53c40a,_0x3a04dd){var _0x46a596=_0x59914c;if(_0xb2655f[_0x46a596(0x5c3)](_0x46a596(0x4d0),'hYFgS'))_0x13a915[_0x46a596(0x663)+'rror']=_0xb2655f[_0x46a596(0x575)]+(_0x3f7958&&_0x1c9bce['messa'+'ge']||_0xe6d1c6),_0x3a980b('uwmk','INIT\x20'+'FAILE'+'D:\x20'+_0x2a1240['lastE'+_0x46a596(0x38a)]);else try{var _0x457449=(_0x46a596(0x565)+_0x46a596(0x3e8)+'2')[_0x46a596(0x66a)]('|'),_0x4f5e3c=-0x1*-0xf09+-0xfd7+0xce*0x1;while(!![]){switch(_0x457449[_0x4f5e3c++]){case'0':_0x49cd11('hook',_0xb2655f[_0x46a596(0x230)](_0xb2655f['Begmf'](_0xb2655f[_0x46a596(0x230)](_0x2cf3b2+(_0x46a596(0x223)+_0x46a596(0x2b6)+_0x46a596(0x23c))+_0x5bc985,'::')+_0x27229d+'('+_0x2a4638[_0x46a596(0x2ec)](','),')'),_0x5629d8?_0x46a596(0x540)+_0x5629d8:'')+(_0x46a596(0x2cd)+_0x46a596(0x557))+_0x479a2e[_0x46a596(0x646)+'ed']);continue;case'1':_0x43f45c['hooks'+'Total']++;continue;case'2':return _0x479a2e;case'3':_0x479a2e[_0x46a596(0x646)+'ed']=_0x3a04dd!==![];continue;case'4':var _0x479a2e=_0x2b4af0[_0x46a596(0x309)+_0x46a596(0x304)]({'typeName':_0x5bc985,'methodName':_0x27229d,'params':_0x2a4638,'returnType':_0x5629d8},_0x53c40a);continue;case'5':_0x1bbef4[_0x2cf3b2]=_0x479a2e;continue;}break;}}catch(_0xf9ed93){if(_0xb2655f[_0x46a596(0x378)]==='UdeSQ')return _0x43f45c[_0x46a596(0x663)+_0x46a596(0x38a)]=_0xb2655f[_0x46a596(0x230)](_0xb2655f[_0x46a596(0x694)]('hook\x20',_0x2cf3b2)+':\x20',_0xf9ed93&&_0xf9ed93[_0x46a596(0x611)+'ge']||_0xf9ed93),_0xb2655f[_0x46a596(0x6b1)](_0x49cd11,_0x46a596(0x6f5),_0xb2655f['mOubB']+_0x2cf3b2+':\x20'+_0x43f45c[_0x46a596(0x663)+_0x46a596(0x38a)]),null;else _0x42bcd8(_0x371e2b,-0x63+-0x41*0x41+0x117c,_0x46a596(0x42b),_0x8d0946),_0x44f631(_0x43c375,0x1*-0x24d2+0x1*-0x1c2d+0x41a3,_0x46a596(0x42b),_0x388988),_0xb2655f[_0x46a596(0x510)](_0x43f1b4,_0x161c12,0x1a43+0x85*-0x1a+-0xc19,'f32',_0x2ede46);}}function _0x13b401(_0x2912f2,_0x441443,_0x3ddfc3,_0x5722ae,_0x5ebc29,_0x3d858d,_0x1d4670){var _0x5350dd=_0x59914c;try{var _0x429273=('5|0|2'+'|1|3|'+'4')['split']('|'),_0x495462=0x23e*0x8+0x1669+-0x2859;while(!![]){switch(_0x429273[_0x495462++]){case'0':_0x3d9692[_0x5350dd(0x646)+'ed']=_0xb2655f[_0x5350dd(0x1f6)](_0x1d4670,![]);continue;case'1':_0x43f45c['hooks'+_0x5350dd(0x447)]++;continue;case'2':_0x1bbef4[_0x2912f2]=_0x3d9692;continue;case'3':_0xb2655f[_0x5350dd(0x756)](_0x49cd11,_0x5350dd(0x6f5),_0xb2655f[_0x5350dd(0x75a)](_0xb2655f[_0x5350dd(0x733)](_0xb2655f[_0x5350dd(0x335)](_0xb2655f['DlwiG'](_0xb2655f[_0x5350dd(0x49d)](_0x2912f2,_0xb2655f['XXLKM'])+_0x441443,'::'),_0x3ddfc3)+'('+_0x5722ae['join'](','),')')+(_0x5ebc29?_0xb2655f[_0x5350dd(0x733)](_0x5350dd(0x540),_0x5ebc29):'')+(_0x5350dd(0x2cd)+'led='),_0x3d9692[_0x5350dd(0x646)+'ed']));continue;case'4':return _0x3d9692;case'5':var _0x3d9692=_0x2b4af0[_0x5350dd(0x309)+_0x5350dd(0x250)+'x']({'typeName':_0x441443,'methodName':_0x3ddfc3,'params':_0x5722ae,'returnType':_0x5ebc29},_0x3d858d);continue;}break;}}catch(_0x47e29f){return _0x43f45c[_0x5350dd(0x663)+_0x5350dd(0x38a)]=_0xb2655f[_0x5350dd(0x4ba)](_0x5350dd(0x26a)+_0x2912f2+':\x20',_0x47e29f&&_0x47e29f['messa'+'ge']||_0x47e29f),_0xb2655f[_0x5350dd(0x640)](_0x49cd11,_0x5350dd(0x6f5),_0xb2655f['EzBHC'](_0x5350dd(0x506)+'D\x20to\x20'+_0x5350dd(0x37d)+'ter\x20'+_0x2912f2,':\x20')+_0x43f45c[_0x5350dd(0x663)+'rror']),null;}}var _0xe30766=()=>![];try{if(_0xb2655f[_0x59914c(0x59e)](_0x59914c(0x2a3),'yeBNh')){if(window['Unity'+_0x59914c(0x745)+_0x59914c(0x38e)]&&!_0x476cc9[_0x59914c(0x5be)+_0x59914c(0x262)]){_0xaefd49=window[_0x59914c(0x38c)+'WebMo'+_0x59914c(0x38e)][_0x59914c(0x5b7)+_0x59914c(0x413)+'er'],_0x49cd11('uwmk',_0x59914c(0x5b7)+_0x59914c(0x413)+'er\x20ac'+'quire'+'d,\x20cr'+_0x59914c(0x364)+_0x59914c(0x67e)+_0x59914c(0x44b)),_0x2b4af0=window['Unity'+'WebMo'+'dkit'][_0x59914c(0x2b9)+'me'][_0x59914c(0x408)+_0x59914c(0x63a)+'in']({'name':_0x59914c(0x689)+'a2v2','version':'1.0.0','referencedAssemblies':[_0xb2655f[_0x59914c(0x1c0)],'Unity'+_0x59914c(0x76e)+_0x59914c(0x64f)+_0x59914c(0x4fd)+_0x59914c(0x49e)+'l']}),_0xb2655f[_0x59914c(0x706)](_0x49cd11,_0xb2655f[_0x59914c(0x467)],_0x59914c(0x5de)+_0x59914c(0x351)+'ura2v'+_0x59914c(0x2e4)+_0x59914c(0x534)+_0x59914c(0x259)+_0x59914c(0x2d8)+'ll\x20re'+_0x59914c(0x349)+_0x59914c(0x4bd)+_0x59914c(0x48c)+_0x59914c(0x446)+'insta'+_0x59914c(0x64e)+'es');if(_0x476cc9[_0x59914c(0x61b)+'aptur'+'e'])_0x13b401(_0x59914c(0x280)+_0x59914c(0x209),_0xb2655f['NkqhK'],_0xb2655f[_0x59914c(0x495)],[_0x59914c(0x451)],undefined,(_0x4498bf,_0x255618)=>{var _0x49b82b=_0x59914c;_0xb2655f[_0x49b82b(0x643)](!_0x145f10,_0x255618)&&_0x255618['val']()&&(_0x145f10=_0x255618['val'](),_0x43f45c[_0x49b82b(0x44e)+'r']=!![],_0xb2655f['lgwkW'](_0x49cd11,'captu'+'re',_0xb2655f[_0x49b82b(0x675)]+_0xb2655f['siCDw'](_0x24c979,_0x145f10)));},!![]);if(_0x476cc9['hookC'+_0x59914c(0x56d)+'e'])_0x13b401(_0x59914c(0x617)+'M',_0xb2655f['tHkVJ'],_0x59914c(0x3eb),[_0xb2655f['IokGc']],undefined,(_0x13a8b4,_0x280dda)=>{var _0x5d82f2=_0x59914c;!_0x276d64&&_0x280dda&&_0x280dda[_0x5d82f2(0x1a4)]()&&(_0x276d64=_0x280dda[_0x5d82f2(0x1a4)](),_0x43f45c[_0x5d82f2(0x5b9)]=!![],_0xb2655f[_0x5d82f2(0x6b1)](_0x49cd11,_0xb2655f[_0x5d82f2(0x3f5)],_0xb2655f[_0x5d82f2(0x359)]+_0x24c979(_0x276d64)));},!![]);if(_0x476cc9[_0x59914c(0x61b)+_0x59914c(0x56d)+'e'])_0xb2655f['jtpkc'](_0x13b401,_0x59914c(0x507)+'ansfo'+'rm',_0xb2655f[_0x59914c(0x740)],_0x59914c(0x263)+_0x59914c(0x5f2)+'lPlay'+'er',['i32'],undefined,(_0x324890,_0x14aa5c)=>{var _0x5cc2ad=_0x59914c;_0x14aa5c&&_0x14aa5c[_0x5cc2ad(0x1a4)]()&&(_0xad8e09=_0x14aa5c['val'](),_0x43f45c['local'+'Trans'+_0x5cc2ad(0x649)]=!![],_0x49cd11(_0xb2655f['icxNz'],'local'+'\x20Coly'+'Trans'+_0x5cc2ad(0x228)+'@'+_0x24c979(_0xad8e09)));},!![]);if(_0x476cc9[_0x59914c(0x61b)+_0x59914c(0x56d)+'e'])_0x13b401(_0x59914c(0x200)+'m',_0x59914c(0x301)+_0x59914c(0x72c),_0x59914c(0x23a)+_0x59914c(0x499),['i32'],undefined,(_0x55780f,_0x4735aa)=>{var _0x2ccf2c=_0x59914c;_0xb2655f[_0x2ccf2c(0x289)]('gsDEt',_0xb2655f['aJKjz'])?!_0x6bb492&&_0x4735aa&&_0x4735aa[_0x2ccf2c(0x1a4)]()&&(_0x6bb492=_0x4735aa[_0x2ccf2c(0x1a4)](),_0x43f45c[_0x2ccf2c(0x285)+'nager']=!![],_0x49cd11(_0xb2655f['icxNz'],_0xb2655f[_0x2ccf2c(0x6be)](_0xb2655f[_0x2ccf2c(0x305)],_0xb2655f['alnjE'](_0x24c979,_0x6bb492)))):(_0x522896=_0x10d6e1,_0x230922[_0x2ccf2c(0x254)]=!![]);},!![]);if(_0x476cc9[_0x59914c(0x227)+_0x59914c(0x57b)])_0xb2655f['tzcks'](_0x13b401,_0xb2655f[_0x59914c(0x1eb)],'Netwo'+'rkMan'+'ager',_0xb2655f['BAOlQ'],[_0x59914c(0x451),'i32'],undefined,(_0x15c8ae,_0x2783f5,_0x33dbf6)=>{var _0xf4387f=_0x59914c;_0x33dbf6&&_0x33dbf6['val']()&&(_0x3ff1d0=_0x33dbf6[_0xf4387f(0x1a4)](),_0x43f45c[_0xf4387f(0x644)]=!![],_0xb2655f[_0xf4387f(0x697)](_0x49cd11,_0xf4387f(0x642)+'re',_0xb2655f['zpjGT']+_0x24c979(_0x3ff1d0)));},!![]);if(_0x476cc9[_0x59914c(0x227)+'tate'])_0xb2655f['jtpkc'](_0x13b401,_0xb2655f[_0x59914c(0x6d6)],_0x59914c(0x5e6)+'rkMan'+_0x59914c(0x4ff),_0x59914c(0x56b)+_0x59914c(0x39c)+_0x59914c(0x595),['i32'],_0xb2655f['IokGc'],_0x4dd6e5=>{var _0x294704=_0x59914c;_0x4dd6e5&&_0x4dd6e5[_0x294704(0x1a4)]()&&(_0x3ff1d0=_0x4dd6e5[_0x294704(0x1a4)](),_0x43f45c[_0x294704(0x644)]=!![],_0x49cd11(_0xb2655f[_0x294704(0x3f5)],_0xb2655f['TwqAB']+_0x24c979(_0x3ff1d0)));},!![]);if(_0x476cc9[_0x59914c(0x227)+'tate'])_0xb2655f[_0x59914c(0x4c1)](_0x13b401,_0xb2655f[_0x59914c(0x3c7)],_0x59914c(0x53a)+'Manag'+'er','OnEna'+'ble',[_0xb2655f[_0x59914c(0x783)]],undefined,(_0x93e0c0,_0x111f1f)=>{var _0x5bbeea=_0x59914c;if(_0xb2655f['fHLgd']('vddIO',_0x5bbeea(0x434)))try{var _0x16436c=_0xb2655f['VsaGg'](_0xb2655f[_0x5bbeea(0x67a)](_0x2b60ec[_0x5bbeea(0x60b)](),_0x1b9cfd['t0']),0x3*0xae1+0x1c59+-0xd*0x464)[_0x5bbeea(0x210)+'ed'](-0x245*0xf+0x118b*0x1+0x1082);_0x395eee['logs']['push'](_0xb2655f[_0x5bbeea(0x230)](_0xb2655f[_0x5bbeea(0x230)]('['+_0x16436c+'s]\x20',_0x549a7c),'\x20')+_0x53e026);if(_0x18c0d5['logs'][_0x5bbeea(0x240)+'h']>0x856*0x1+-0x75e+-0x20*-0xb)_0x218119[_0x5bbeea(0x37a)]['shift']();}catch(_0x29cb84){}else _0x111f1f&&_0x111f1f['val']()&&(_0xa9f5de=_0x111f1f[_0x5bbeea(0x1a4)](),_0x43f45c['piece'+'Mgr']=!![],_0x49cd11(_0xb2655f['icxNz'],_0xb2655f['xtGUZ']+_0x24c979(_0xa9f5de)));},!![]);if(_0x476cc9[_0x59914c(0x227)+_0x59914c(0x57b)])_0xb2655f[_0x59914c(0x4c1)](_0x13b401,'capSp'+_0x59914c(0x49a),_0x59914c(0x5ee)+'rSpaw'+'ner','Awake',[_0xb2655f['IokGc']],undefined,(_0x32f509,_0x343630)=>{var _0x385313=_0x59914c;_0xb2655f[_0x385313(0x528)]!==_0xb2655f[_0x385313(0x528)]?(_0x36cc1b=_0x693a9f[_0x385313(0x1a4)](),_0x2ab1bf[_0x385313(0x594)+_0x385313(0x2a6)]=!![],_0x503db8(_0xb2655f[_0x385313(0x3f5)],_0xb2655f['UPZzP'](_0x385313(0x53a)+'Manag'+'er\x20@',_0xb2655f[_0x385313(0x5e0)](_0x4f5324,_0xd62e69)))):_0x343630&&_0x343630['val']()&&('VTXZf'==='VTXZf'?(_0x399204=_0x343630['val'](),_0x43f45c['spawn'+'er']=!![],_0x49cd11('captu'+'re',_0xb2655f['SEMSN'](_0x385313(0x5ee)+'rSpaw'+'ner\x20@',_0xb2655f[_0x385313(0x6bd)](_0x24c979,_0x399204)))):(_0xd61e90[_0x385313(0x555)+'Pct']=_0x4db9dc,_0xb2655f[_0x385313(0x329)](_0x5b6b57)));},!![]);if(_0x476cc9['hookN'+'oReco'+'il'])_0x41f575(_0xb2655f[_0x59914c(0x605)],_0xb2655f[_0x59914c(0x3e7)],_0x59914c(0x334)+_0x59914c(0x3ca)+'l',[_0xb2655f[_0x59914c(0x783)]],undefined,_0xe30766,!!_0x476cc9[_0x59914c(0x5cf)+'oil']);}else _0x49cd11(_0x59914c(0x2ac),_0xb2655f[_0x59914c(0x2f4)](_0xb2655f[_0x59914c(0x453)],window['Unity'+'WebMo'+_0x59914c(0x38e)]?'prese'+'nt':_0xb2655f[_0x59914c(0x3a5)])+(_0x476cc9[_0x59914c(0x5be)+_0x59914c(0x262)]?_0xb2655f['beIUh']:''));}else _0x297aa8['hookC'+_0x59914c(0x56d)+'e']=_0x479ad2,_0x324713();}catch(_0x5f28b8){'CSWwH'==='CSWwH'?(_0x43f45c['lastE'+'rror']=_0xb2655f[_0x59914c(0x575)]+(_0x5f28b8&&_0x5f28b8[_0x59914c(0x611)+'ge']||_0x5f28b8),_0xb2655f[_0x59914c(0x3a2)](_0x49cd11,_0x59914c(0x2ac),_0x59914c(0x59a)+'FAILE'+_0x59914c(0x74a)+_0x43f45c[_0x59914c(0x663)+'rror'])):(_0x3d90ac(_0x5148b6,0x1f7e+0x178f+0x1*-0x3659,'f32',_0x4dea25),_0xb2655f['IWZuH'](_0x469f2c,_0x54c3d1,0x617*0x1+0xb2*-0x31+-0x3*-0x991,_0xb2655f['bofxN'],_0x516284));}function _0x1aaf27(_0x3339e4,_0x3ffaf8){var _0x336d15=_0x59914c,_0x2fa844=_0x1bbef4[_0x3339e4];if(_0x2fa844){if(_0xb2655f['kjDny'](_0xb2655f[_0x336d15(0x417)],_0xb2655f['QVKJx']))try{_0x2fa844[_0x336d15(0x646)+'ed']=!!_0x3ffaf8;}catch(_0x3f7546){}else _0x24335a[_0x336d15(0x6e0)]=_0x1e443f,_0x247dfc();}}function _0x39ff58(_0x5715cc,_0x264681){var _0xe749cd=_0x59914c;if(_0xb2655f[_0xe749cd(0x289)](_0xb2655f[_0xe749cd(0x6ea)],'CGMMu'))try{var _0x5bd89f=new _0xaefd49(_0x5715cc)[_0xe749cd(0x201)+_0xe749cd(0x43e)](_0x264681,'u32');return _0x5bd89f?_0x5bd89f['val']():-0xb5*-0x8+0xa80+-0x1028;}catch(_0x3708b3){return-0x6e*0x2f+-0x1c4b*-0x1+-0x819;}else _0x187b3f[_0xe749cd(0x33f)](_0x467f69,null);}function _0x50b043(_0x32429d,_0x2b520d){var _0x2c2b15=_0x59914c;try{var _0x5d9e9d=new _0xaefd49(_0x32429d)[_0x2c2b15(0x201)+'ield'](_0x2b520d,_0x2c2b15(0x451));return _0x5d9e9d?_0x5d9e9d['val']():0x1bb4+0x17b*-0x1+0x1a39*-0x1;}catch(_0x39ed82){return 0x1bc2+0x446+0x2*-0x1004;}}function _0x182cff(_0x5efb11,_0x26a342){var _0x4e15b0=_0x59914c;try{var _0x26551e=new _0xaefd49(_0x5efb11)[_0x4e15b0(0x201)+'ield'](_0x26a342,_0x4e15b0(0x532));return _0x26551e?_0x26551e['val']():-0x7ff*0x1+-0x3d*0xa3+0x2ed6;}catch(_0x5f4374){return-0x21f*0x1+-0x20ae+0x3b*0x97;}}function _0x2adf0d(_0x234b19,_0x5ecc4e){var _0x218ba0=_0x59914c;try{var _0x350636=new _0xaefd49(_0x234b19)[_0x218ba0(0x201)+_0x218ba0(0x43e)](_0x5ecc4e,'u8');return _0x350636?_0x350636[_0x218ba0(0x1a4)]():-0xb*-0x7c+-0x186b+0x1317;}catch(_0x2da1f1){return 0x8f2+0xf73*-0x1+0x5*0x14d;}}function _0x588337(_0x5cace9,_0x577a69){var _0x5cbbb9=_0x59914c;try{var _0x27271e=new _0xaefd49(_0x5cace9)[_0x5cbbb9(0x201)+'ield'](_0x577a69,'i8');return _0x27271e?_0x27271e[_0x5cbbb9(0x1a4)]():-0x772+0x475+0x2fd;}catch(_0x30f4b1){if(_0xb2655f[_0x5cbbb9(0x64a)](_0x5cbbb9(0x641),_0x5cbbb9(0x641)))return-0x18*0x2+0x1919+-0x18e9;else{var _0x5c8479=_0x3cabb9[_0x3061be];_0xb2655f[_0x5cbbb9(0x75b)](_0x37b993,_0xb2655f[_0x5cbbb9(0x73f)],_0xb2655f['jhEYO'](_0xb2655f[_0x5cbbb9(0x694)](_0x250d65,_0x5cbbb9(0x4a8)+'ied=')+!!_0x5c8479[_0x5cbbb9(0x1f4)+'ed'],'\x20enab'+_0x5cbbb9(0x557))+!!_0x5c8479['enabl'+'ed']);}}}function _0x9f0332(_0x86ee1a,_0x49f5e4){var _0x5ad745=_0x59914c,_0x4f87e2={'ZfKOy':function(_0x8c2189){return _0xb2655f['pvqUQ'](_0x8c2189);}};try{if(_0xb2655f[_0x5ad745(0x3f1)]!=='UmejG')_0x56013a[_0x5ad745(0x57a)]=_0x46210e,_0x4f87e2[_0x5ad745(0x645)](_0x538a6b);else{var _0x417618=new _0xaefd49(_0x86ee1a)['readF'+_0x5ad745(0x43e)](_0x49f5e4,_0xb2655f['bofxN']);return _0x417618?_0x417618[_0x5ad745(0x1a4)]():-0x21b5*-0x1+0xd4*0x2+-0x235d;}}catch(_0x280e47){if(_0xb2655f[_0x5ad745(0x1f6)](_0x5ad745(0x1c9),_0x5ad745(0x2c4)))return-0x2671+0x1577+0x87d*0x2;else _0x42bcc1(_0x5ad745(0x65c),_0x5ad745(0x69e)+'eLoca'+_0x5ad745(0x375)+'ew:\x20'+(_0x352918&&_0xa88a2b['messa'+'ge']));}}function _0x1c1525(_0x4cb6bb,_0xc84b6e){var _0x12f408=_0x59914c;if(_0xb2655f[_0x12f408(0x404)](_0xb2655f[_0x12f408(0x3b8)],_0xb2655f[_0x12f408(0x3b8)]))return _0x39ff58(_0x4cb6bb,_0xc84b6e);else{var _0x1ea77a=new _0x293bdd(_0x509f1a)[_0x12f408(0x201)+'ield'](_0x26e20d,_0x12f408(0x532));return _0x1ea77a?_0x1ea77a[_0x12f408(0x1a4)]():0x1*-0x1f83+0xe75*-0x2+-0x1*-0x3c6d;}}function _0x234987(_0x2b88af,_0x1b2373){return{'x':_0xb2655f['zMmlj'](_0x9f0332,_0x2b88af,_0x1b2373),'y':_0x9f0332(_0x2b88af,_0xb2655f['NwNFM'](_0x1b2373,0x283*-0x1+-0x95a+-0xbe1*-0x1)),'z':_0x9f0332(_0x2b88af,_0x1b2373+(-0xb02*0x2+0x1*0x96e+-0x11*-0xbe))};}function _0xfd6d1(_0x28835f,_0x349373){var _0x399d38=_0x59914c;if(!_0x28835f)return null;try{var _0x2a7044=_0x50b043(_0x28835f,0x1*-0x11e8+-0x7d9+0x19c9);if(_0x2a7044<=0x2275+-0x186b+-0xa0a||_0x2a7044>_0xb2655f['zxVJT'](_0x349373,-0x1e23+-0x3*0x24f+-0x2550*-0x1))return null;var _0xcf40e1=window[_0x399d38(0x38c)+_0x399d38(0x745)+'dkit']['Runti'+'me'][_0x399d38(0x5ec)+'y'](_0xb2655f[_0x399d38(0x517)](_0x28835f,0x7a*0x4d+-0x8c8*0x1+-0x1bde),_0x2a7044*(0xeb4*-0x2+-0x161*-0xb+0xe3f)),_0x5c087c='';for(var _0x21f864=-0x115f+-0x1bb*0x13+0x3240;_0x21f864<_0x2a7044;_0x21f864++){var _0x4ef43e=_0xcf40e1[_0x21f864*(0x1c3c+0x9ad+-0x1*0x25e7)]|_0xb2655f['LpEHk'](_0xcf40e1[_0xb2655f['Begmf'](_0x21f864*(0x12d8*-0x1+-0x11ba*-0x1+-0x90*-0x2),0x97+-0x1954+0x18be)],0x13*-0x1b5+0x36c+0x1*0x1d0b);if(_0x4ef43e===0x1458+0x3e9+-0x1841)break;_0x5c087c+=String['fromC'+'harCo'+'de'](_0x4ef43e);}return _0x5c087c;}catch(_0x59678a){if(_0x399d38(0x52e)!==_0xb2655f['WohQq'])return null;else{var _0x467112=_0x181113(_0xde5ec6,_0x205705=>{var _0x30a8f7=_0x399d38;_0x3fa4d7['class'+_0x30a8f7(0x700)]['toggl'+'e']('on',_0x205705),_0x1396cc(_0x205705);});_0x427abb['appen'+'d'](_0x4c16c0,_0x467112);}}}function _0x1154fc(_0x1f9d30){var _0x26c777=_0x59914c;return _0x1f9d30?_0xb2655f[_0x26c777(0x6b1)](_0x39ff58,_0x1f9d30,0xd43+-0xdc+-0xc5b):-0x87d+-0xae+0x92b;}function _0x1cb3b2(_0x548226,_0x28f57c){return _0x548226?_0x39ff58(_0x548226,-0xc*0x225+0x5a4+0x408*0x5+_0xb2655f['EtTFc'](_0x28f57c,0x1*0xd64+-0x23ab+0x164b)):-0x1f1*0x11+-0x2538+0x4639*0x1;}function _0xbced54(_0x2bf63c,_0x333c2b){var _0x3b0231=_0x59914c;if(!_0x2bf63c)return null;for(var _0x1d1772=0x24b*-0x5+0x1c31+0x2*-0x85d;_0xb2655f['stMjg'](_0x1d1772,-0x1d5+0x1d04+-0x1*0x1b2b);_0x1d1772+=-0x9a1*0x4+0x155*-0x17+0x452b){if('AGZEG'==='fusxe'){var _0x1e147c=_0x146c1c(_0x5d1d7d,_0x3f5767);if(_0x1e147c)_0x5d3000['push'](_0x1e147c);}else{var _0x211f72=_0xb2655f[_0x3b0231(0x54e)](_0x39ff58,_0x2bf63c,_0xb2655f[_0x3b0231(0x49f)](-0x400+0x102e+0xc22*-0x1,_0x1d1772)),_0x10ada0=_0x50b043(_0x2bf63c,-0x1*0x1641+0x23c7+-0xd76+_0x1d1772);if(_0x211f72&&_0xb2655f['lUXhH'](_0x10ada0,0x1025+-0x283*-0xd+-0x9*0x56c)&&_0x10ada0<=(_0x333c2b||-0xd77+-0x603*-0x3+-0x452*0x1))return{'entries':_0x211f72,'count':_0x10ada0,'shift':_0x1d1772};}}return null;}function _0x301226(_0x21422b,_0xbe7354){var _0x37f5d1=_0x59914c,_0x76b4f1=_0xbced54(_0x21422b,_0xbe7354);if(!_0x76b4f1)return[];var _0x17d5b3=[];for(var _0x57aa58=0x1*-0xb19+0x9*0x24a+-0x3*0x32b;_0x57aa58<_0x76b4f1[_0x37f5d1(0x287)];_0x57aa58++){var _0x1b4800=0x4*-0x956+0xdbd+0x17ab+_0x57aa58*(0x1cf2+-0x24e*-0x1+-0x1f30);if(_0xb2655f[_0x37f5d1(0x3e1)](_0x50b043(_0x76b4f1[_0x37f5d1(0x423)+'es'],_0x1b4800),-0x1617+-0x27*-0xc1+-0x750))continue;_0x17d5b3[_0x37f5d1(0x2a1)](_0x39ff58(_0x76b4f1['entri'+'es'],_0x1b4800+(-0xfe7+-0x2*0x111b+-0x3229*-0x1)));}return _0x17d5b3;}function _0x393a2f(_0x108827){var _0x4b2f47=_0x59914c;try{return new _0xaefd49(_0x108827)[_0x4b2f47(0x62d)+'assNa'+'me']();}catch(_0x507105){return null;}}function _0x34c80e(_0x5d683d,_0x70b296){var _0x450637=_0x59914c;if(_0xb2655f['esqpl'](_0x450637(0x238),'UrqTa')){var _0x2207a2=_0xb2655f[_0x450637(0x697)](_0x1c1525,_0x5d683d,-0x3*0x575+-0x4af*0x3+-0x4c*-0x67),_0x2b1dc7=Math['min'](_0xb2655f[_0x450637(0x586)](_0x1154fc,_0x2207a2),-0x12b+-0x1f61+0x20ac);for(var _0x54c64d=0x1559+-0x1*0x10bf+-0x1f*0x26;_0x54c64d<_0x2b1dc7;_0x54c64d++){var _0x528447=_0x1cb3b2(_0x2207a2,_0x54c64d);if(!_0x528447)continue;if(_0xb2655f[_0x450637(0x2f8)](_0x393a2f,_0x528447)===_0x70b296)return _0x528447;}return 0x24*-0x5+-0x425+0x1*0x4d9;}else try{var _0x46918a=new _0x24bb6d(_0xf4eb44)['readF'+_0x450637(0x43e)](_0x2eec3f,'i16');return _0x46918a?_0x46918a[_0x450637(0x1a4)]():0x74*0xd+0x19*-0x71+-0x1b7*-0x3;}catch(_0x27a5e8){return 0x2198+0xe*0x247+-0x20bd*0x2;}}function _0x43b747(_0x10c568,_0x3b4fa7){var _0x5c61f8=_0x59914c,_0x4330b1={'jzBYf':function(_0x1a41db){return _0x1a41db();},'LPMcu':_0x5c61f8(0x703)+_0x5c61f8(0x394)+_0x5c61f8(0x32a)+_0x5c61f8(0x669)+'a(255'+_0x5c61f8(0x5f9)+_0x5c61f8(0x1b6)+_0x5c61f8(0x41b)+'ckgro'+'und:r'+'gba(2'+_0x5c61f8(0x57c)+_0x5c61f8(0x668)+_0x5c61f8(0x72b)+';colo'+_0x5c61f8(0x3e2)+_0x5c61f8(0x739)+_0x5c61f8(0x703)+_0x5c61f8(0x522)+_0x5c61f8(0x45a)+'px;pa'+_0x5c61f8(0x27d)+':4px\x20'+_0x5c61f8(0x5b8)+'font-'+_0x5c61f8(0x2de)+_0x5c61f8(0x1ed)+_0x5c61f8(0x311)+_0x5c61f8(0x27a)+'nter'};if(_0xb2655f[_0x5c61f8(0x1f6)](_0x5c61f8(0x37b),_0xb2655f['FYmMx'])){var _0x4a8be0=_0x4f095e['creat'+_0x5c61f8(0x26f)+_0x5c61f8(0x1e9)](_0x5c61f8(0x4ee)+'n');return _0x4a8be0['type']=_0x5c61f8(0x4ee)+'n',_0x4a8be0['textC'+'onten'+'t']=_0x324dcb,_0x4a8be0[_0x5c61f8(0x723)]['cssTe'+'xt']=_0x4330b1[_0x5c61f8(0x2f3)],_0x4a8be0[_0x5c61f8(0x6af)+'ck']=_0x35e093=>{var _0x6e57ca=_0x5c61f8;_0x35e093['stopP'+'ropag'+_0x6e57ca(0x465)](),_0x4330b1[_0x6e57ca(0x770)](_0x117638);},_0x4a8be0;}else{if(!_0x10c568)return null;for(var _0xf941d of[0x3c5*-0x2+0x2273*-0x1+-0x2a05*-0x1,-0xa5a+-0x1a3b+0x24a1,0x1b30+-0x7*0xb7+-0x161f,0x1*-0x19db+0x95b+0x1094]){if(_0xb2655f['ACUOh']!==_0xb2655f['pWgsm']){var _0x346a86=_0xb2655f[_0x5c61f8(0x697)](_0xbced54,_0x39ff58(_0x10c568,_0xf941d),_0x3b4fa7);if(_0x346a86)return _0x346a86;}else new _0x58e5a9(_0x282f20)[_0x5c61f8(0x2ca)+_0x5c61f8(0x5a2)](_0x105c1a,_0x353a27,_0x4b064f);}return null;}}var _0x268eb8=![];function _0x429887(){var _0x546c8d=_0x59914c;if(!_0x3ff1d0)return-0x956+0x1*-0x1906+0x225c;var _0x2b2e2e=_0xb2655f[_0x546c8d(0x4aa)](_0x1c1525,_0x3ff1d0,0x4b*0x18+0xed1+-0x15c9);if(!_0x2b2e2e)return!_0x268eb8&&(_0x268eb8=!![],_0x49cd11(_0xb2655f[_0x546c8d(0x450)],_0xb2655f[_0x546c8d(0x6c2)]+_0xb2655f['siCDw'](_0x24c979,_0x3ff1d0)+('\x20+0x1'+_0x546c8d(0x321)+'null\x20'+'—\x20wro'+_0x546c8d(0x1c4)+_0x546c8d(0x684)+'yout?'))),-0x25c9+0x408+0x21c1;var _0x4fe587=_0x1c1525(_0x2b2e2e,-0x380+-0x24a7+-0x1d*-0x163);if(!_0x4fe587){if(_0xb2655f[_0x546c8d(0x234)]===_0xb2655f['hSjWQ'])try{return new _0x3a78ab(_0x478a22)['getCl'+_0x546c8d(0x2f6)+'me']();}catch(_0x263662){return null;}else return!_0x268eb8&&(_0x268eb8=!![],_0x49cd11(_0xb2655f[_0x546c8d(0x450)],'state'+'@'+_0x24c979(_0x2b2e2e)+_0xb2655f[_0x546c8d(0x5cc)])),-0x1*0x20af+0x2c5*0x5+-0x12d6*-0x1;}var _0x4174be=_0xb2655f['qbXZv'](_0x43b747,_0x4fe587,0x2f2*-0xa+0x112+0x1ca2);if(!_0x4174be)return!_0x268eb8&&(_0x268eb8=!![],_0x49cd11(_0xb2655f[_0x546c8d(0x450)],_0xb2655f['iSMfr'](_0xb2655f['akSII']+_0xb2655f['gVSSK'](_0x24c979,_0x4fe587),_0x546c8d(0x624)+_0x546c8d(0x284)+'obe\x20o'+'ffset'+_0x546c8d(0x69b)+_0x546c8d(0x3f8)+_0x546c8d(0x619)+_0x546c8d(0x6b2)))),0x174c+0x2386+-0x3ad2;return!_0x268eb8&&(_0x268eb8=!![],_0xb2655f[_0x546c8d(0x756)](_0x49cd11,_0x546c8d(0x254),_0xb2655f[_0x546c8d(0x714)](_0xb2655f[_0x546c8d(0x3ee)](_0xb2655f[_0x546c8d(0x517)](_0xb2655f[_0x546c8d(0x47b)],_0xb2655f['PVLzX'](_0x24c979,_0x2b2e2e))+_0xb2655f[_0x546c8d(0x726)]+_0x24c979(_0x4fe587)+_0xb2655f[_0x546c8d(0x1af)],_0x4174be[_0x546c8d(0x664)]),_0x546c8d(0x4c7)+'t=')+_0x4174be[_0x546c8d(0x287)])),_0x2b2e2e;}function _0x5001b1(){var _0x1e43e3=_0x59914c,_0xcd1e65=[];if(!_0x29b936)return _0xcd1e65;var _0x25b698=_0x1c1525(_0x29b936,-0x2*0x4c7+0x2227+-0xb*0x23b),_0x238b80=_0x1c1525(_0x25b698,-0x13ea+-0x30d*-0x5+0x4b9),_0x395ad1=_0x301226(_0x238b80,-0x15*0x14b+-0x2b3*-0x2+0x1601);for(var _0x35a6f1=0x1710+0x108c+0xd34*-0x3;_0x35a6f1<_0x395ad1[_0x1e43e3(0x240)+'h'];_0x35a6f1++){var _0xffdd8a=_0x395ad1[_0x35a6f1];if(!_0xffdd8a)continue;var _0x427ce1=_0x1c1525(_0xffdd8a,-0x2219+0xd96+0x1*0x14b3);if(!_0x427ce1)continue;var _0x7a4999=_0x1c1525(_0x427ce1,0x2107+0x120+-0x2217);if(!_0x7a4999)continue;_0xcd1e65[_0x1e43e3(0x2a1)]({'ptr':_0xffdd8a,'playerId':_0xfd6d1(_0xb2655f[_0x1e43e3(0x1ef)](_0x1c1525,_0xffdd8a,-0x1*-0x92+-0x231d+0x3*0xb89),-0xd*-0x2ba+-0x8*-0x4f+-0x25aa),'nickname':_0xfd6d1(_0x1c1525(_0xffdd8a,0x139*-0x1f+-0x87*0x3c+0x3*0x1735),-0xf40+-0x1cc5+0x2c25),'health':_0x182cff(_0xffdd8a,-0x133*0x1f+-0x2a6*0xc+0x4529),'shield':_0xb2655f['XEUAS'](_0x2adf0d,_0xffdd8a,0xddf+-0xe*0xa6+-0x495),'team':_0x588337(_0xffdd8a,0x1457+0x13ba+-0x27ce),'aiming':_0x2adf0d(_0xffdd8a,-0x66*-0x14+0x24c3+-0x2c7d)!==0x138*-0x1+-0xba9+0xce1,'crouching':_0xb2655f[_0x1e43e3(0x640)](_0x2adf0d,_0xffdd8a,-0x1247+0x4*0x25d+0x910)!==-0x833*0x3+-0x1e46+0xb*0x4fd,'pos':{'x':_0x9f0332(_0x7a4999,-0x185*-0x19+-0x1774+-0xe79),'y':_0xb2655f['ePMWU'](_0x9f0332,_0x7a4999,-0x3*0x176+-0x16c8+0x1b3e),'z':_0xb2655f['uajUB'](_0x9f0332,_0x7a4999,-0xf*-0x5+0xfca+-0xffd)},'isAlive':_0x2adf0d(_0xffdd8a,0x14e2+0x1e3d*-0x1+0x1f3*0x5)!==-0x89e+-0x53*-0x4+0x752});}return _0xcd1e65;}function _0x1d091e(){var _0x596ad4=_0x59914c,_0x2cfffc=_0x5001b1();if(_0x2cfffc[_0x596ad4(0x240)+'h']||!_0x399204)return _0x2cfffc;var _0x2b93b3=_0x301226(_0x1c1525(_0x399204,-0x19d0*-0x1+0x2627+-0x3fe7),0xc69+-0x224b+0x1622);for(var _0x35001d=0x14cf+-0x2*-0x8ea+0x3*-0xce1;_0xb2655f[_0x596ad4(0x709)](_0x35001d,_0x2b93b3[_0x596ad4(0x240)+'h']);_0x35001d++){if(_0xb2655f[_0x596ad4(0x435)]('WVvSn',_0xb2655f['NSVVg'])){var _0x1e40f9=_0x2b93b3[_0x35001d];if(!_0x1e40f9)continue;var _0x1a9dfe=_0xb2655f['eAytp'](_0x1c1525,_0x1e40f9,-0x12d6+-0x1c*-0x83+0xe*0x55);if(!_0x1a9dfe)continue;var _0x37db07=_0x1c1525(_0x1a9dfe,0x1*-0xc86+-0xb7f*-0x1+0x1*0x137);if(!_0x37db07)continue;var _0x49a53f=_0xb2655f['pjgGQ'](_0x1c1525,_0x37db07,0x122f+0x18d2+0x1*-0x2af1);if(!_0x49a53f)continue;_0x2cfffc['push']({'ptr':_0x1a9dfe,'playerId':_0xb2655f['RgzgM'](_0xfd6d1,_0xb2655f[_0x596ad4(0x627)](_0x1c1525,_0x1a9dfe,-0x1*-0x91f+-0x5*0xf1+0x1*-0x45a),0x5*0x4b7+-0x25ba+0xe67),'nickname':_0xfd6d1(_0x1c1525(_0x1a9dfe,-0x22c3+-0x2567*-0x1+-0x290),0x1*-0x63d+-0x12e*-0x1+0x52f),'health':_0x182cff(_0x1a9dfe,-0x2*0xc28+-0x2cf*0x5+0x268f*0x1),'shield':_0xb2655f[_0x596ad4(0x1c7)](_0x2adf0d,_0x1a9dfe,-0x2bf+0x22b1*0x1+0xfde*-0x2),'team':_0x588337(_0x1a9dfe,-0x1*-0x43b+-0x2559+0x2161),'aiming':_0xb2655f['ImfMD'](_0xb2655f[_0x596ad4(0x640)](_0x2adf0d,_0x1a9dfe,-0x1a8b+-0xedf+0xac*0x3e),-0x123a*-0x1+-0x29c*-0x5+0x1*-0x1f46),'crouching':_0xb2655f['MoJOz'](_0xb2655f['pjgGQ'](_0x2adf0d,_0x1a9dfe,-0x1*0x1495+0x1e87+-0x9b5),-0x21*-0xb+-0x40f+0x2*0x152),'pos':{'x':_0x9f0332(_0x49a53f,-0xd81+0x2*0x23+0xd4b),'y':_0x9f0332(_0x49a53f,-0x2*0x584+0x1750+-0x4*0x30d),'z':_0xb2655f['ywHvB'](_0x9f0332,_0x49a53f,0x250*-0x8+0x735+0x37*0x35)},'isAlive':_0x2adf0d(_0x1a9dfe,-0x23a5+-0x25*-0x4d+0x18e8)!==-0x4d4*0x4+0x21e9+0x1*-0xe99});}else _0x3f4d8b=_0x99e808['val'](),_0x3512b[_0x596ad4(0x644)]=!![],_0xb2655f[_0x596ad4(0x697)](_0x3bfaa4,_0x596ad4(0x642)+'re',_0x596ad4(0x784)+'(gett'+'er\x20re'+_0x596ad4(0x602)+_0x12fe4c(_0xc6f923));}return _0x2cfffc;}var _0x3212b4={};function _0x1ec975(_0x6b6fcf,_0xcecc11){var _0x45f929=_0x59914c;!_0x3212b4[_0x6b6fcf]&&(_0x3212b4[_0x6b6fcf]=!![],_0xb2655f['cNomG'](_0x49cd11,_0x45f929(0x642)+'re',_0xcecc11));}function _0x517ac9(){var _0x375a01=_0x59914c,_0x568bd6={'VTKEx':function(_0x35c94d,_0xe7e4ca,_0x3e72c0){var _0x418c20=_0x4d32;return _0xb2655f[_0x418c20(0x4f1)](_0x35c94d,_0xe7e4ca,_0x3e72c0);},'yIaXR':function(_0x4792fb,_0x5a451c){var _0x3e48e7=_0x4d32;return _0xb2655f[_0x3e48e7(0x1d0)](_0x4792fb,_0x5a451c);},'bCuQf':function(_0x33ae23,_0x4cb034){return _0x33ae23(_0x4cb034);},'OeGks':'\x20loca'+'lTran'+_0x375a01(0x315)+'='};if(_0xb2655f[_0x375a01(0x643)](_0x145f10,!_0x276d64))_0x276d64=_0xb2655f[_0x375a01(0x51c)](_0x1c1525,_0x145f10,-0x1*0x52f+0x267a+-0x212f);if(_0x276d64&&!_0x1d842f)_0x1d842f=_0x1c1525(_0x276d64,0x1d*0x1f+-0x387+0x2*0xa);if(_0x276d64&&!_0xad8e09)_0xad8e09=_0xb2655f[_0x375a01(0x721)](_0x1c1525,_0x276d64,-0xa6c+-0x6*0x25+0x1*0xb5e);if(_0xb2655f[_0x375a01(0x643)](_0x145f10,!_0x5e2a79))_0x5e2a79=_0xb2655f['uajUB'](_0x1c1525,_0x145f10,-0x2*-0xbd9+0x22*0x11+-0x19c8);if(_0x145f10&&!_0x43f45c[_0x375a01(0x3f2)+_0x375a01(0x39e)+'a'])_0x43f45c[_0x375a01(0x3f2)+'Camer'+'a']=_0x1c1525(_0x145f10,0x1809+0x2f6*0x3+0x1*-0x20c7);if(_0x1d842f&&!_0x27fd46[_0x375a01(0x240)+'h']){if(_0x375a01(0x55f)!==_0xb2655f['TptYr']){!_0x220fd7&&(_0x522ff=!![],_0x568bd6['VTKEx'](_0xefa02b,_0x375a01(0x476),_0x568bd6[_0x375a01(0x757)](_0x568bd6['yIaXR'](_0x375a01(0x743)+'mera\x20'+_0x375a01(0x695)+_0x375a01(0x51d)+_0x375a01(0x530),_0x568bd6[_0x375a01(0x231)](_0x2be2f9,_0x2d1ffc))+_0x568bd6['OeGks'],_0x354f71(_0x4c23df))));return;}else{var _0x2dca04=_0x1c1525(_0x1d842f,-0x5*-0x6bf+-0x1912+-0x881),_0x3ef1d9=Math[_0x375a01(0x666)](_0x1154fc(_0x2dca04),0x1c1*-0xa+0x8e9*-0x1+0x1a93);for(var _0x42cfe8=-0xfcd+0x2041*0x1+-0x1074;_0x42cfe8<_0x3ef1d9;_0x42cfe8++){if(_0xb2655f[_0x375a01(0x430)]===_0xb2655f['YzrAU']){var _0x2eafb4=_0x1cb3b2(_0x2dca04,_0x42cfe8);if(_0x2eafb4)_0x27fd46['push'](_0x2eafb4);}else return-0xfbf*-0x2+0x11*-0x122+-0xc3c;}_0x1ec975(_0xb2655f['ErEsY'],_0xb2655f[_0x375a01(0x236)](_0xb2655f['jCsdA'](_0x375a01(0x1c6)+'\x20Coly'+'View\x20'+'@',_0x24c979(_0x1d842f)),_0x375a01(0x429))+_0x27fd46['lengt'+'h']+_0xb2655f['FZvnV']);}}if(_0x1d842f&&!_0x2420ea){_0x2420ea=_0xb2655f[_0x375a01(0x640)](_0x34c80e,_0x1d842f,_0xb2655f[_0x375a01(0x48e)]);if(_0x2420ea)_0x1ec975(_0xb2655f['OIZPC'],_0xb2655f['awSmY']+_0xb2655f[_0x375a01(0x204)](_0x24c979,_0x2420ea));}if(_0xb2655f['RbZxR'](_0x1d842f,!_0x3aeb74)){_0x3aeb74=_0x34c80e(_0x1d842f,_0x375a01(0x5a7)+_0x375a01(0x77d)+'r');if(_0x3aeb74)_0x1ec975(_0x375a01(0x470)+'er',_0xb2655f['hjeZY']('local'+'\x20Coly'+_0x375a01(0x26b)+_0x375a01(0x27e),_0x24c979(_0x3aeb74)));}if(_0xb2655f[_0x375a01(0x713)](_0xa9f5de,!_0x3ff1d0)){var _0x545678=_0x1c1525(_0xa9f5de,-0x2051+-0x6c8+0x2735);_0x545678&&(_0x375a01(0x4e2)!==_0xb2655f[_0x375a01(0x213)]?_0x14af03&&_0x32cfa5[_0x375a01(0x1a4)]()&&(_0x56cff2=_0x3290ec['val'](),_0x155f11[_0x375a01(0x644)]=!![],_0x15b01e(_0xb2655f[_0x375a01(0x3f5)],_0xb2655f['vrUuN'](_0xb2655f[_0x375a01(0x1ac)],_0xb2655f[_0x375a01(0x730)](_0x26392e,_0x544937)))):(_0x3ff1d0=_0x545678,_0x43f45c['room']=!![],_0xb2655f['HeldM'](_0x49cd11,_0x375a01(0x642)+'re',_0xb2655f['PLfdj']+_0x24c979(_0x3ff1d0))));}if(_0x3ff1d0&&!_0x29b936){var _0x32f3a3=_0xb2655f['namDp'](_0x429887);_0x32f3a3&&(_0x29b936=_0x32f3a3,_0x43f45c['state']=!![]);}}function _0x569a6c(){var _0x37986c=_0x59914c;if(!_0xad8e09)return null;var _0x494316=_0x234987(_0xad8e09,-0x1177*-0x1+0xabe+-0x1df*0xf);if(!_0x494316||_0xb2655f[_0x37986c(0x6e2)](_0x494316['x'],0x1115*0x1+-0x55b*-0x5+-0x2bdc)&&_0xb2655f['ipiZD'](_0x494316['y'],0x21b1+-0x1aa6+0x259*-0x3)&&_0xb2655f['xqpAe'](_0x494316['z'],0x2*-0x118d+-0xf0b+0x3225))return null;return{'x':_0x494316['x'],'y':_0xb2655f[_0x37986c(0x49d)](_0x494316['y'],Number(_0x476cc9['camHe'+_0x37986c(0x778)])||0xb23+0x121a+-0x1d3c*0x1+0.6000000000000001),'z':_0x494316['z']};}function _0x4783be(){var _0x58c108=_0x59914c,_0xd34201={'LJoyt':function(_0x36e19d){return _0x36e19d();}};if(_0xb2655f[_0x58c108(0x5e7)](_0x58c108(0x4a7),_0xb2655f[_0x58c108(0x302)])){if(!_0x5e2a79)return null;var _0x48dd54=_0xb2655f[_0x58c108(0x3c9)](_0x9f0332,_0x5e2a79,-0x104f*-0x2+0x2374*-0x1+-0x2e6*-0x1),_0x33801e=_0x9f0332(_0x5e2a79,0x1fd*-0xe+-0x1*-0x16f1+0x501);if(_0x48dd54===-0x1*0xe5f+-0x2a9*-0xc+-0x118d&&_0xb2655f['xqpAe'](_0x33801e,0x7b9*-0x2+-0x1009+0x1f7b))return null;var _0x1f4e70=_0xb2655f['RcdcI'](_0x48dd54*Math['PI'],0x1*0x2095+0xa9c+-0x49*0x95),_0x515520=_0xb2655f['WyRUi'](_0x33801e,Math['PI'])/(-0x1fd6+-0x1*-0x10d+0x1f7d),_0x16e612=Math[_0x58c108(0x44f)](_0x1f4e70)*Math['cos'](_0x515520),_0x4c32d8=-Math[_0x58c108(0x5bd)](_0x1f4e70),_0x4f0d03=_0xb2655f[_0x58c108(0x206)](Math['cos'](_0x1f4e70),Math['sin'](_0x515520)),_0xa501fc=Math['hypot'](_0x16e612,_0x4c32d8,_0x4f0d03);if(_0xa501fc<0x15f7+0x16f7*-0x1+0x8*0x20+0.1||_0xb2655f[_0x58c108(0x386)](_0xa501fc,-0x14b1+-0x1df*0x6+0x1ff5))return null;var _0xfb070c=-0x1*-0x218f+-0x1636+-0xb59,_0x565e28=0x1dbf+0x1b30+-0x38ef,_0x10ecc8=-0x19f*-0x9+-0x15f7+0x760,_0x264b2c=0x908+-0x4*-0x1ac+-0xfb8,_0x587fd9=-0x400+-0x11*-0x169+-0x13f9*0x1,_0x20202d=-0x35*-0x4f+-0x110b*-0x1+-0x2166;_0xfb070c=-_0x4f0d03,_0x565e28=-0x2*0x8e4+-0xf4*-0x24+0x2*-0x844,_0x10ecc8=_0x16e612,_0x264b2c=_0xb2655f['aElGk'](_0xb2655f[_0x58c108(0x6ec)](_0x565e28,_0x4f0d03),_0x10ecc8*_0x4c32d8),_0x264b2c=_0xb2655f['Nylch'](_0x565e28,_0x4f0d03)-_0x10ecc8*_0x4c32d8,_0x587fd9=_0xb2655f[_0x58c108(0x50a)](_0x10ecc8*_0x16e612,_0xfb070c*_0x4f0d03),_0x20202d=_0xb2655f[_0x58c108(0x566)](_0xfb070c,_0x4c32d8)-_0xb2655f['fGEIh'](_0x565e28,_0x16e612);var _0x118d11=Math[_0x58c108(0x36a)](_0x264b2c,_0x587fd9,_0x20202d);return _0x118d11>0x1*-0x180c+0x1015+0x7f7*0x1+0.001&&(_0x264b2c/=_0x118d11,_0x587fd9/=_0x118d11,_0x20202d/=_0x118d11),{'r':{'x':_0xfb070c,'y':_0x565e28,'z':_0x10ecc8},'u':{'x':_0x264b2c,'y':_0x587fd9,'z':_0x20202d},'f':{'x':_0x16e612,'y':_0x4c32d8,'z':_0x4f0d03}};}else _0x2e7122[_0x58c108(0x19d)+_0x58c108(0x778)]=_0x55ca83,_0xd34201['LJoyt'](_0x212b32);}function _0xab3b09(){var _0x2eb9bb=_0x59914c;if(_0xb2655f['IaNwF'](Number(_0x476cc9[_0x2eb9bb(0x32e)+_0x2eb9bb(0x775)+'e']),-0x1*0x4ff+-0x8bb+0xdba))return _0xb2655f[_0x2eb9bb(0x5ad)](Number,_0x476cc9[_0x2eb9bb(0x32e)+'errid'+'e']);if(_0x6bb492){var _0x429a9b=_0xb2655f[_0x2eb9bb(0x4aa)](_0x9f0332,_0x6bb492,0x1ba+-0x15ab+0x23d*0x9);if(_0xb2655f[_0x2eb9bb(0x386)](_0x429a9b,-0x14ba+0xf51*-0x2+0x3366)&&_0xb2655f['FRUyd'](_0x429a9b,0x17b*0x2+-0xe49+0xc06))return _0x429a9b;_0x429a9b=_0x9f0332(_0x6bb492,-0x4*0x2b3+-0x2*-0xd72+-0x3fc*0x4);if(_0x429a9b>-0xbcf+0x2d*0xc6+-0x16f5&&_0x429a9b<0x1561+0x1*-0x24f7+0x1049)return _0x429a9b;}if(_0x2b4af0&&_0x43f45c[_0x2eb9bb(0x3f2)+'Camer'+'a']){if(_0xb2655f[_0x2eb9bb(0x753)]!==_0x2eb9bb(0x774))_0x5365be[_0x2eb9bb(0x723)][_0x2eb9bb(0x38d)]=_0x505452['x']+'px',_0x2a6b28[_0x2eb9bb(0x723)][_0x2eb9bb(0x23e)]=_0xb2655f['PEfnz'](_0x538edd['y'],'px');else try{var _0x990525=_0x2b4af0['call'](_0xb2655f['KbUhI'],_0x2eb9bb(0x3e9)+_0x2eb9bb(0x2d7)+'fView',[_0x43f45c[_0x2eb9bb(0x3f2)+_0x2eb9bb(0x39e)+'a']]);if(typeof _0x990525===_0xb2655f[_0x2eb9bb(0x237)]&&_0x990525>-0x355+0x1466+0x5ad*-0x3&&_0xb2655f[_0x2eb9bb(0x709)](_0x990525,0x1314+-0x19f1+0x790))return _0x990525;}catch(_0x13b903){}}return-0x15c7+0x1818+-0xd*0x29;}function _0xcd18d2(_0x57c594,_0x30f0ac,_0x223fe6,_0x5732fa,_0x2f2401,_0x52c29f){var _0x5dc44e=_0x59914c,_0x5063a9=_0xb2655f['VGPng'](_0x57c594,_0x2f2401['x']),_0x3b9bc2=_0x30f0ac-_0x2f2401['y'],_0x53a310=_0xb2655f[_0x5dc44e(0x3cc)](_0x223fe6,_0x2f2401['z']),_0x16494e=_0xb2655f[_0x5dc44e(0x354)](_0xb2655f[_0x5dc44e(0x6c8)](_0x5063a9,_0x5732fa['r']['x']),_0x3b9bc2*_0x5732fa['r']['y'])+_0xb2655f[_0x5dc44e(0x2aa)](_0x53a310,_0x5732fa['r']['z']),_0x13f566=_0xb2655f[_0x5dc44e(0x733)](_0xb2655f[_0x5dc44e(0x780)](_0x5063a9,_0x5732fa['u']['x'])+_0xb2655f['ssakw'](_0x3b9bc2,_0x5732fa['u']['y']),_0x53a310*_0x5732fa['u']['z']),_0x2ab5c2=_0xb2655f[_0x5dc44e(0x6fb)](_0x5063a9*_0x5732fa['f']['x'],_0xb2655f[_0x5dc44e(0x4e3)](_0x3b9bc2,_0x5732fa['f']['y']))+_0xb2655f[_0x5dc44e(0x780)](_0x53a310,_0x5732fa['f']['z']);if(_0xb2655f[_0x5dc44e(0x425)](_0x2ab5c2,-0x1*-0x1fa5+-0x950+0x1*-0x1655+0.05))return null;var _0x13dfdd=_0xb2655f[_0x5dc44e(0x2e1)](-0xb6f*0x1+-0xd03*0x2+0xa*0x3bf,Math['tan'](_0xb2655f[_0x5dc44e(0x2e1)](_0xb2655f['fYpbM'](_0x52c29f*Math['PI'],-0x9f1*-0x1+-0x29c+-0x6a1),0xea3+0x913*-0x2+0x1*0x385))),_0x3e6184=_0x54b60d['w']/_0x54b60d['h'],_0xc07562=_0x16494e*_0x13dfdd/_0xb2655f['WtQTH'](_0x2ab5c2,_0x3e6184),_0x392bb4=_0xb2655f[_0x5dc44e(0x4cf)](_0xb2655f['eJrJm'](_0x13f566,_0x13dfdd),_0x2ab5c2);if(_0xb2655f['jeNzr'](_0xc07562,-(0x154+0x134b+-0x196*0xd+0.30000000000000004))||_0xc07562>0x1d0c+0x1*-0xad6+-0x1235+0.30000000000000004||_0xb2655f['CDflJ'](_0x392bb4,-(0x17be+0x11c2+0xdd5*-0x3+0.30000000000000004))||_0xb2655f['sGzce'](_0x392bb4,-0x16*-0x4+0x7f4*-0x4+-0x1f79*-0x1+0.30000000000000004))return null;return{'x':(_0xc07562*(0x2*0x333+-0x239f+0x1d39+0.5)+(0x1*-0xf43+0x15b*0x1c+-0x16b1+0.5))*_0x54b60d['w'],'y':_0xb2655f[_0x5dc44e(0x420)](-0xd2c+0x1cf*0x5+0x422-(_0x392bb4*(0x1*-0x15a0+-0x47*0x25+-0x1*-0x1fe3+0.5)+(0x8a6+0x249*0x1+-0xaef+0.5)),_0x54b60d['h']),'depth':_0x2ab5c2};}function _0x20e937(){var _0x543be9=_0x59914c,_0x36a37d=_0xb2655f['VNWMF']['split']('|'),_0x4cefa7=0x8d6+-0xb*0xa8+-0x19e;while(!![]){switch(_0x36a37d[_0x4cefa7++]){case'0':return _0x1cb3b2(_0x36b007,_0x4d1832);case'1':var _0x4d1832=_0x50b043(_0x3aeb74,-0x1*0xfc5+0x13d2+-0x3cd*0x1);continue;case'2':if(_0x4d1832<-0x1467+0x22e6+-0xe7f||_0x4d1832>=_0x1d05f7)return 0x4f*0x5+-0x7b*0x36+0x1*0x1867;continue;case'3':var _0x36b007=_0xb2655f[_0x543be9(0x51a)](_0x1c1525,_0x3aeb74,0x1cb8*0x1+-0xb34+0x171*-0xc);continue;case'4':if(!_0x3aeb74)return 0x1*0x2474+-0x96*0x27+-0xd9a;continue;case'5':if(!_0x36b007)return 0x3*0x4be+0x1*0xeeb+-0x1d25;continue;case'6':var _0x1d05f7=_0x1154fc(_0x36b007);continue;}break;}}var _0x324f63=0x1838+-0x1903+0xcb;_0xb2655f[_0x59914c(0x216)](setInterval,()=>{var _0x19a2e7=_0x59914c,_0x43e9b7={'maefk':_0x19a2e7(0x642)+'re','XpRko':'Local'+'Playe'+_0x19a2e7(0x3c5)+_0x19a2e7(0x27e),'vtwCt':function(_0x285775,_0x1b0dd3){var _0x58bed7=_0x19a2e7;return _0xb2655f[_0x58bed7(0x335)](_0x285775,_0x1b0dd3);},'FMCel':function(_0x56bbe9,_0x43f054){return _0x56bbe9+_0x43f054;},'monkN':function(_0x3bea90){return _0x3bea90();}};if(!_0xaefd49||!window['unity'+'Insta'+_0x19a2e7(0x31f)])return;try{_0x517ac9();}catch(_0xedf7ef){_0xb2655f['TfAVU'](_0x49cd11,'tick',_0x19a2e7(0x69e)+'eLoca'+'l\x20thr'+'ew:\x20'+(_0xedf7ef&&_0xedf7ef[_0x19a2e7(0x611)+'ge']));}var _0x2a2815=(Number(_0x476cc9[_0x19a2e7(0x555)+'Pct'])||0x2ec+-0x43*0x3b+0xce9)/(-0x3e*-0x6e+-0x14*-0x1cd+-0x2*0x1f22),_0x18302c=(_0xb2655f['ndIjS'](Number,_0x476cc9[_0x19a2e7(0x36f)+'ct'])||-0x8bf+0xfce*-0x1+0x1*0x18f1)/(-0x1*-0x1c76+0x1258+0x2*-0x1735),_0x5eb084=_0xb2655f[_0x19a2e7(0x72d)](_0xb2655f['OMDBG'](Number,_0x476cc9['gravi'+_0x19a2e7(0x3a3)])||0xc4a+-0x18*0x10f+0x6c1*0x2,0xaed*-0x3+-0x1*-0x16d3+0xa58);try{if(_0x2420ea&&(_0xb2655f[_0x19a2e7(0x1a0)](_0x2a2815,0x985*0x3+0x3*-0x4b+-0x1bad*0x1)||_0xb2655f['KzIAl'](_0x18302c,-0x13*0x1ec+0x3c0+0x20c5)||_0x5eb084!==-0xd*0x2+-0x1*-0x18e1+-0x18c6)){if(_0xb2655f['yWesb'](_0x19a2e7(0x54f),'YgyyP'))_0xb2655f[_0x19a2e7(0x679)](!_0x3b314b,_0x54a729)&&_0xb25f24[_0x19a2e7(0x1a4)]()&&(_0x3df4c8=_0x3173d5['val'](),_0x182bb4['aimMa'+'nager']=!![],_0xb2655f[_0x19a2e7(0x61c)](_0x5034a4,_0xb2655f[_0x19a2e7(0x3f5)],_0xb2655f[_0x19a2e7(0x335)](_0x19a2e7(0x301)+_0x19a2e7(0x72c)+'\x20@',_0x8a93da(_0x162fa2))));else{_0x2a2815!==0x91a+-0x1a2+0x777*-0x1&&(_0x599f5e(_0x2420ea,-0x21e3+-0x1*-0x2636+-0x3bb,_0x19a2e7(0x42b),_0x2a2815),_0xb2655f['qQaHn'](_0x599f5e,_0x2420ea,-0x53*0x31+0x1*-0x154b+-0x5e*-0x67,'f32',_0x2a2815),_0x599f5e(_0x2420ea,0x148f+-0xdae+-0x639,_0x19a2e7(0x42b),_0x2a2815));_0xb2655f[_0x19a2e7(0x76a)](_0x18302c,0x31*0x7b+0x2*-0xc88+-0x2*-0xc3)&&(_0x19a2e7(0x6fe)!==_0x19a2e7(0x412)?(_0xb2655f['qQaHn'](_0x599f5e,_0x2420ea,-0x22fd*-0x1+-0x22*0x108+0xc7*0x1,_0x19a2e7(0x42b),_0x18302c),_0x599f5e(_0x2420ea,0x3*-0xaab+0x1aa5*0x1+0x614,_0x19a2e7(0x42b),_0x18302c)):!_0x229d45&&_0x472291&&_0x2d3040[_0x19a2e7(0x1a4)]()&&(_0x562a28=_0x256214['val'](),_0x443d77['linke'+'r']=!![],_0x54f413(_0x43e9b7['maefk'],_0x43e9b7[_0x19a2e7(0x5dc)]+_0x455290(_0x455310))));_0x5eb084!==0xb1a+0x16e*0xd+-0x1daf&&(_0x599f5e(_0x2420ea,-0x1466+-0x71*-0x27+-0x1*-0x3f3,_0x19a2e7(0x42b),_0x5eb084),_0x599f5e(_0x2420ea,-0x1*0x3b7+-0x211f+0x2582,_0xb2655f[_0x19a2e7(0x41e)],_0x5eb084));if(_0x324f63%(0x1*0x23fb+-0x5c7*0x5+-0x713)===-0xfae+0x3af*-0x6+-0x34*-0xba)_0x49cd11('write',_0xb2655f[_0x19a2e7(0x4ce)]+_0x24c979(_0x2420ea));}}}catch(_0x22d25a){_0x49cd11(_0xb2655f[_0x19a2e7(0x631)],_0xb2655f[_0x19a2e7(0x236)](_0x19a2e7(0x1ee)+'ent\x20t'+_0x19a2e7(0x371)+_0x19a2e7(0x367)+'\x20',_0x22d25a&&_0x22d25a['messa'+'ge']));}try{if('GUVLp'!==_0x19a2e7(0x6ce))_0x43c492[_0x19a2e7(0x702)+'ropag'+_0x19a2e7(0x465)](),_0xb2655f['namDp'](_0x254071);else{var _0xe63d70=_0x20e937();if(_0xe63d70){if(_0x476cc9[_0x19a2e7(0x4a2)+_0x19a2e7(0x4ad)]){if(_0xb2655f[_0x19a2e7(0x4ec)]('dULMf',_0xb2655f[_0x19a2e7(0x30a)]))return!_0x3e91e0&&(_0x1a1e8e=!![],_0x3a48f3('state',_0x43e9b7['vtwCt'](_0x43e9b7['FMCel'](_0x19a2e7(0x254)+'@',_0x2d4035(_0x5cd118)),_0x19a2e7(0x32d)+_0x19a2e7(0x41f)+_0x19a2e7(0x590)+_0x19a2e7(0x5d7)+_0x19a2e7(0x547)+'—\x20not'+_0x19a2e7(0x261)+'RoomS'+_0x19a2e7(0x316)))),0x3*-0x397+-0x257c*0x1+0x3041;else _0xb2655f[_0x19a2e7(0x510)](_0x426abd,_0xe63d70,-0xdf3+0x1*0x95f+0x2a2*0x2,_0x19a2e7(0x42b),-0x2*-0x124+-0x2*0xb99+-0xa75*-0x2),_0x426abd(_0xe63d70,0x11*-0x137+-0x19*0x8+0x1633,_0x19a2e7(0x42b),-0x2*-0x512+0x4*-0x171+-0x460),_0xb2655f[_0x19a2e7(0x5ab)](_0x426abd,_0xe63d70,0xa*-0xa9+0x133*0x6+0x30,_0xb2655f[_0x19a2e7(0x41e)],-0x61*0x1+-0x277*-0x2+0x5*-0xe9),_0x426abd(_0xe63d70,-0x23*-0x13+-0x20ea+0x1f11,'f32',0x29*-0x13+0xf59*-0x1+0x1264);}if(_0x476cc9[_0x19a2e7(0x4f9)+'eExp']||_0x476cc9['damag'+'eValu'+'e']!==-0xcf5*0x2+0x4a*0x28+0x3bc*0x4){var _0x428d2b=Math[_0x19a2e7(0x750)](0x1d39+-0x17fd+-0x53b,Number(_0x476cc9['damag'+_0x19a2e7(0x419)+'e'])||0x45+-0xbc4*0x3+0x239d);_0xb2655f[_0x19a2e7(0x5ab)](_0x426abd,_0xe63d70,0x2591+-0x2*-0xb4d+-0x3b8b,_0x19a2e7(0x42b),_0x428d2b);}_0x476cc9[_0x19a2e7(0x5d0)+'mo']&&_0x426abd(_0xe63d70,0x19ee+-0xf48+-0x9ca,_0xb2655f[_0x19a2e7(0x783)],-0x83f+-0x42e*-0x4+0x492*-0x1),_0x476cc9[_0x19a2e7(0x478)+'Fire']&&('fsTAk'!==_0x19a2e7(0x524)?_0xb2655f[_0x19a2e7(0x75b)](_0x485516,_0xb2655f[_0x19a2e7(0x467)],_0xb2655f['sNqfd']+(_0x36d08e[_0x19a2e7(0x38c)+_0x19a2e7(0x745)+'dkit']?_0xb2655f[_0x19a2e7(0x6b9)]:_0x19a2e7(0x477)+'NG')+(_0x181e14[_0x19a2e7(0x5be)+'ode']?_0x19a2e7(0x2b5)+_0x19a2e7(0x393)+'de\x20on'+_0x19a2e7(0x442)+_0x19a2e7(0x4b6)+_0x19a2e7(0x53f)+'d':'')):(_0xb2655f[_0x19a2e7(0x323)](_0x599f5e,_0xe63d70,0x1*-0x1d13+-0x3*-0x7f7+0x5be,_0x19a2e7(0x42b),0x47*0x56+0xa65*-0x1+-0xd75*0x1+0.1),_0x426abd(_0xe63d70,0xb11*0x1+-0x1*-0xdd9+-0x185e*0x1,_0xb2655f[_0x19a2e7(0x41e)],-(-0x2e3*-0xa+-0x580+0xb*-0x1c5))));}}}catch(_0x2336d9){_0x19a2e7(0x685)==='BFaWZ'?_0x49cd11(_0x19a2e7(0x2ca),_0xb2655f[_0x19a2e7(0x34c)]+(_0x2336d9&&_0x2336d9['messa'+'ge'])):(_0x937397['esp']=_0x53aa91,_0x43e9b7['monkN'](_0x58f43a));}_0x324f63++;},0x155*0x7+0x167*0x8+-0x13c3),setInterval(()=>{var _0x42f1bc=_0x59914c;_0x43f45c['gameL'+'oaded']=!!window[_0x42f1bc(0x6cf)+_0x42f1bc(0x38b)+_0x42f1bc(0x31f)];try{var _0xd9ee15=-0x6*0x51f+-0x1b4e+0x3*0x1358;for(var _0x47d02f in _0x1bbef4){if(_0x1bbef4[_0x47d02f]&&_0x1bbef4[_0x47d02f][_0x42f1bc(0x1f4)+'ed'])_0xd9ee15++;}_0x43f45c['hooks'+'Ok']=_0xd9ee15;if(_0x43f45c['hooks'+'Total']&&!_0x43f45c[_0x42f1bc(0x54d)+_0x42f1bc(0x22d)+'ed']){_0x43f45c[_0x42f1bc(0x54d)+_0x42f1bc(0x22d)+'ed']=!![];for(var _0x3bb57c in _0x1bbef4){var _0x11b1af=_0x1bbef4[_0x3bb57c];_0x49cd11(_0xb2655f[_0x42f1bc(0x73f)],_0xb2655f['AqcZZ'](_0xb2655f[_0x42f1bc(0x639)](_0x3bb57c+('\x20appl'+_0x42f1bc(0x4fc)),!!_0x11b1af[_0x42f1bc(0x1f4)+'ed']),_0x42f1bc(0x2cd)+_0x42f1bc(0x557))+!!_0x11b1af['enabl'+'ed']);}}}catch(_0x1683cd){}_0x43f45c[_0x42f1bc(0x271)+'rs']=_0x29b936?_0x1d091e()[_0x42f1bc(0x240)+'h']:0x4*-0xf1+0xd69*-0x1+0x112d;},0x543+0x33b*-0x5+-0x766*-0x2);var _0x13ca5e=![];function _0x24175e(){var _0x3fcfbe=_0x59914c,_0x2911a0={'uMgBE':function(_0x1a47e8,_0x1dd49b,_0x4a4b2b){return _0xb2655f['XEUAS'](_0x1a47e8,_0x1dd49b,_0x4a4b2b);},'GajCU':function(_0x33e760,_0x866499){return _0x33e760===_0x866499;},'geGEd':function(_0x24ee77,_0x2fcd62){return _0x24ee77/_0x2fcd62;},'haHWe':function(_0x9b6a7f,_0x2577ef){var _0x245898=_0x4d32;return _0xb2655f[_0x245898(0x780)](_0x9b6a7f,_0x2577ef);},'jgMcQ':function(_0x3aab56,_0x2bca2d){return _0x3aab56*_0x2bca2d;},'PLZlH':function(_0x46e29c,_0x418134){return _0x46e29c*_0x418134;},'yzECG':function(_0x5d16a1,_0x5aa2ea){var _0xd9b7f3=_0x4d32;return _0xb2655f[_0xd9b7f3(0x77c)](_0x5d16a1,_0x5aa2ea);},'bBPYP':function(_0x58ab3b,_0x21a10b){return _0xb2655f['hkqqd'](_0x58ab3b,_0x21a10b);},'JpJXD':function(_0x5ab189,_0x1eb8ce){return _0x5ab189*_0x1eb8ce;}};if(!_0x476cc9[_0x3fcfbe(0x476)]||!_0x476cc9[_0x3fcfbe(0x6e0)])return;var _0x432a03=_0xb2655f[_0x3fcfbe(0x39d)](_0x4783be),_0x4acea2=_0xb2655f[_0x3fcfbe(0x5c1)](_0x569a6c);if(!_0x432a03||!_0x4acea2){!_0x13ca5e&&(_0x13ca5e=!![],_0xb2655f[_0x3fcfbe(0x6e4)](_0x49cd11,_0x3fcfbe(0x476),_0xb2655f[_0x3fcfbe(0x75a)]('no\x20ca'+_0x3fcfbe(0x638)+_0x3fcfbe(0x695)+'\x20char'+_0x3fcfbe(0x530)+_0x24c979(_0x5e2a79)+('\x20loca'+_0x3fcfbe(0x1b7)+'sform'+'='),_0x24c979(_0xad8e09))));return;}var _0x441c33=_0xb2655f['vrNPm'](_0xab3b09),_0x348250=_0xb2655f[_0x3fcfbe(0x657)](_0x1d091e),_0x5a74e1=_0x1d842f?_0xb2655f['mJmhZ'](_0x1c1525,_0x1d842f,0x213d+-0x1*0x4c7+-0x1c52):-0x1142+0x1*0x1b77+-0xa35;!_0x13ca5e&&(_0x13ca5e=!![],_0xb2655f[_0x3fcfbe(0x656)](_0x49cd11,_0xb2655f[_0x3fcfbe(0x6d0)],_0xb2655f[_0x3fcfbe(0x562)](_0xb2655f[_0x3fcfbe(0x4eb)](_0xb2655f['VgLTz'](_0xb2655f[_0x3fcfbe(0x20c)](_0xb2655f['BAudK']+JSON[_0x3fcfbe(0x51e)+_0x3fcfbe(0x276)](_0x4acea2),'\x20fov=')+_0x441c33['toFix'+'ed'](-0x2*0x12b5+0x2219+0x352),'\x20play'+_0x3fcfbe(0x471)),_0x348250[_0x3fcfbe(0x240)+'h'])+(_0x3fcfbe(0x45c)+_0x3fcfbe(0x466)),JSON[_0x3fcfbe(0x51e)+_0x3fcfbe(0x276)](_0x432a03['f']))));for(var _0x54462c=-0x2*0x732+-0x5fd+-0x25*-0x8d;_0x54462c<_0x348250[_0x3fcfbe(0x240)+'h'];_0x54462c++){var _0xa707aa=_0x348250[_0x54462c];if(!_0xa707aa[_0x3fcfbe(0x59f)])continue;if(_0x5a74e1&&_0xb2655f[_0x3fcfbe(0x2d1)](_0xa707aa['ptr'],_0x5a74e1))continue;var _0x207d54=_0xb2655f[_0x3fcfbe(0x4ec)](_0xa707aa['team'],-0x15ca+-0x1107+0x26d1)?_0xb2655f['rNSiQ']:_0xb2655f['YDCmf'],_0x2b8b88=_0xb2655f[_0x3fcfbe(0x2f8)](Number,_0x476cc9['scale'])||0x53+-0x10cf+0x107d,_0x3ad6e2=_0xcd18d2(_0xa707aa['pos']['x'],_0xa707aa['pos']['y'],_0xa707aa[_0x3fcfbe(0x59f)]['z'],_0x432a03,_0x4acea2,_0x441c33),_0x567db4=_0xcd18d2(_0xa707aa['pos']['x'],_0xa707aa['pos']['y']+(_0xb2655f[_0x3fcfbe(0x3a4)](Number,_0x476cc9['playe'+_0x3fcfbe(0x373)+'ht'])||-0x18*-0x195+-0x18a8+-0xd4f+0.8),_0xa707aa[_0x3fcfbe(0x59f)]['z'],_0x432a03,_0x4acea2,_0x441c33);if(_0xb2655f[_0x3fcfbe(0x713)](!_0x3ad6e2,!_0x567db4))continue;if(_0xb2655f['smfRc'](_0x3ad6e2,_0x567db4)){if(_0xb2655f['ZRCQb']===_0xb2655f[_0x3fcfbe(0x4cb)]){var _0x91923=_0xb2655f[_0x3fcfbe(0x75c)][_0x3fcfbe(0x66a)]('|'),_0x251046=0xcd0*0x1+-0x11*0x20b+0x1*0x15eb;while(!![]){switch(_0x91923[_0x251046++]){case'0':_0x5d7e95[_0x3fcfbe(0x407)+_0x3fcfbe(0x5c2)](_0x3ad6e2['x']-_0x1fb1dd/(-0x1409+0x111*-0x5+-0xcb0*-0x2),_0x4b5658,_0x1fb1dd,_0x1ca875);continue;case'1':if(_0x476cc9[_0x3fcfbe(0x625)+'h']&&(_0xb2655f[_0x3fcfbe(0x704)](_0xa707aa['healt'+'h'],0x13ce+0x1a73+0xf6b*-0x3)||_0xb2655f['LawKX'](_0xa707aa[_0x3fcfbe(0x707)+'d'],-0x923*-0x1+0x5*-0xea+-0x491*0x1))){var _0x433c59=_0xb2655f[_0x3fcfbe(0x3b6)]['split']('|'),_0x4fe766=-0x9e8+0x2*-0xbd8+-0x19*-0x158;while(!![]){switch(_0x433c59[_0x4fe766++]){case'0':_0x5d7e95['strok'+_0x3fcfbe(0x5c2)](_0x3ad6e2['x']-_0xb2655f[_0x3fcfbe(0x761)](_0x1fb1dd,-0x2254+-0x3*0xec+0x62f*0x6),_0x4b5658-(0x57*-0x5e+0x469*-0x4+-0x9ec*-0x5),_0x1fb1dd,0x7*0x4+-0x1*0x1e3d+0x1e25);continue;case'1':_0x5d7e95[_0x3fcfbe(0x407)+'eStyl'+'e']=_0x3fcfbe(0x4ef)+'0,0,0'+',.5)';continue;case'2':_0x5d7e95[_0x3fcfbe(0x437)+'ect'](_0x3ad6e2['x']-_0x1fb1dd/(0x187d*0x1+-0x1483+-0x3f8),_0x4b5658-(-0xdf2+-0x3*-0xb2b+-0x1389),_0x51cea5,0x22a*-0x10+0x91e+0x1986);continue;case'3':var _0x2c6988=Math[_0x3fcfbe(0x750)](-0x44*-0x82+0xf83+-0x22d*0x17,Math['min'](0x1526+-0x848+0x2*-0x63d,_0xa707aa[_0x3fcfbe(0x625)+'h']+_0xa707aa['shiel'+'d']));continue;case'4':var _0x51cea5=_0x1fb1dd*(_0x2c6988/(-0xc2a+0x5*-0x107+0x11b1));continue;case'5':_0x5d7e95['lineW'+'idth']=0x11*0x171+0x3*0x129+0x227*-0xd;continue;case'6':_0x5d7e95[_0x3fcfbe(0x751)+_0x3fcfbe(0x1e0)]=_0x3fcfbe(0x4ef)+_0x3fcfbe(0x62c)+_0x3fcfbe(0x2c0)+_0x3fcfbe(0x5cd);continue;}break;}}continue;case'2':var _0x1fb1dd=Math[_0x3fcfbe(0x750)](-0x76b*-0x3+0x3f9*0x6+-0x2e11*0x1,_0xb2655f['mvJYl'](_0x1ca875,-0x19cc+0x1057+-0x327*-0x3+0.45)*_0x2b8b88);continue;case'3':_0x476cc9[_0x3fcfbe(0x57a)]&&(_0x5d7e95[_0x3fcfbe(0x34f)+_0x3fcfbe(0x6c9)](),_0x5d7e95['moveT'+'o'](_0xb2655f[_0x3fcfbe(0x4c5)](_0x54b60d['w'],0x1355*0x2+-0x10e9+0x13*-0x125),_0x54b60d['h']),_0x5d7e95[_0x3fcfbe(0x497)+'o'](_0x3ad6e2['x'],_0x4b5658),_0x5d7e95['strok'+'eStyl'+'e']=_0x207d54,_0x5d7e95['lineW'+_0x3fcfbe(0x505)]=-0x239f+-0x200c+0x4*0x10eb,_0x5d7e95['setLi'+_0x3fcfbe(0x5e8)+'h']([0xc7c+0x7*0xaf+-0x1140,0x7ec+0x10e2+-0x18c9]),_0x5d7e95[_0x3fcfbe(0x407)+'e'](),_0x5d7e95[_0x3fcfbe(0x5c6)+_0x3fcfbe(0x5e8)+'h']([]));continue;case'4':_0x5d7e95['lineW'+_0x3fcfbe(0x505)]=0x1539*-0x1+0x95+0x14a6;continue;case'5':var _0x1ca875=Math[_0x3fcfbe(0x750)](-0x23ec+0x961+0xd*0x20b,Math[_0x3fcfbe(0x490)](_0xb2655f[_0x3fcfbe(0x6c5)](_0x3ad6e2['y'],_0x567db4['y']))*_0x2b8b88);continue;case'6':if(_0x476cc9[_0x3fcfbe(0x701)])_0x5d7e95[_0x3fcfbe(0x407)+_0x3fcfbe(0x2ad)+'e']=_0x207d54;else _0x5d7e95['strok'+_0x3fcfbe(0x2ad)+'e']='rgba('+_0x3fcfbe(0x62c)+'79,19'+_0x3fcfbe(0x28f);continue;case'7':_0x476cc9['names']&&_0xa707aa[_0x3fcfbe(0x2fb)+'ame']&&(_0x5d7e95[_0x3fcfbe(0x751)+_0x3fcfbe(0x1e0)]=_0xb2655f['esBCU'],_0x5d7e95[_0x3fcfbe(0x2d9)]=_0x3fcfbe(0x6c4)+_0x3fcfbe(0x439)+'ns-se'+'rif,s'+_0x3fcfbe(0x396)+'-ui,s'+'ans-s'+_0x3fcfbe(0x2ee),_0x5d7e95[_0x3fcfbe(0x6ee)+_0x3fcfbe(0x264)]=_0x3fcfbe(0x6a7)+'r',_0x5d7e95['fillT'+'ext'](_0xa707aa[_0x3fcfbe(0x2fb)+'ame'],_0x3ad6e2['x'],_0x4b5658-(-0x1c36+0xc68+0xfd8)));continue;case'8':var _0x4b5658=Math[_0x3fcfbe(0x666)](_0x3ad6e2['y'],_0x567db4['y']);continue;}break;}}else{if(!_0x5ad268)return null;var _0x399240=_0x5634a1(_0x486493,-0x673*-0x1+0x77f+-0xde2),_0x671365=_0x2911a0['uMgBE'](_0x5ba655,_0x57e5a2,-0x179f+0x2437+-0xc7c);if(_0x2911a0['GajCU'](_0x399240,0x673+-0x138*-0x19+-0x24eb)&&_0x671365===0x1*-0x1852+0x1f+0x1833)return null;var _0x12f231=_0x2911a0['geGEd'](_0x2911a0[_0x3fcfbe(0x44d)](_0x399240,_0x12feb9['PI']),0x1*0x1534+-0x107*0x2+-0x313*0x6),_0x3516b5=_0x2911a0[_0x3fcfbe(0x3ba)](_0x671365*_0x4f70e2['PI'],-0xf47*0x1+0x127f+0xa1*-0x4),_0x2d4811=_0x2911a0[_0x3fcfbe(0x620)](_0x1986a0[_0x3fcfbe(0x44f)](_0x12f231),_0x404a07[_0x3fcfbe(0x44f)](_0x3516b5)),_0x87b21f=-_0x5f34d8[_0x3fcfbe(0x5bd)](_0x12f231),_0x49777a=_0x2911a0[_0x3fcfbe(0x620)](_0x26cb9a[_0x3fcfbe(0x44f)](_0x12f231),_0x4d28f7['sin'](_0x3516b5)),_0x35ca6b=_0x5b2688[_0x3fcfbe(0x36a)](_0x2d4811,_0x87b21f,_0x49777a);if(_0x35ca6b<0xc0*-0x29+-0x549+0x2409+0.1||_0x35ca6b>-0x2*0x10c8+0x8b1*0x2+-0x3*-0x568)return null;var _0x1a4e38=0xecf+-0x8*0x226+0x261,_0x3fc9a3=-0xe81+-0xf*-0x103+0x4*-0x2b,_0x9a7592=-0xad9*0x3+-0xdfd*-0x2+-0x7*-0xa7,_0x3f34f3=-0x4cc+0x404*0x2+-0x33c,_0x183821=0x1*-0xddb+0x808+0x7*0xd5,_0x50986a=-0x241d*0x1+0x113*0x23+-0x14*0x13;_0x1a4e38=-_0x49777a,_0x3fc9a3=-0x1979*-0x1+0x1*-0x1105+-0x21d*0x4,_0x9a7592=_0x2d4811,_0x3f34f3=_0x2911a0[_0x3fcfbe(0x281)](_0x3fc9a3,_0x49777a)-_0x9a7592*_0x87b21f,_0x3f34f3=_0x3fc9a3*_0x49777a-_0x9a7592*_0x87b21f,_0x183821=_0x2911a0[_0x3fcfbe(0x5b3)](_0x2911a0[_0x3fcfbe(0x1c3)](_0x9a7592,_0x2d4811),_0x1a4e38*_0x49777a),_0x50986a=_0x2911a0['JpJXD'](_0x1a4e38,_0x87b21f)-_0x3fc9a3*_0x2d4811;var _0x5a19ee=_0x4799e5['hypot'](_0x3f34f3,_0x183821,_0x50986a);return _0x5a19ee>0x1e4e+-0x1e25*0x1+-0x29*0x1+0.001&&(_0x3f34f3/=_0x5a19ee,_0x183821/=_0x5a19ee,_0x50986a/=_0x5a19ee),{'r':{'x':_0x1a4e38,'y':_0x3fc9a3,'z':_0x9a7592},'u':{'x':_0x3f34f3,'y':_0x183821,'z':_0x50986a},'f':{'x':_0x2d4811,'y':_0x87b21f,'z':_0x49777a}};}}}}function _0x192759(){var _0x2d4bbc=_0x59914c;if(_0xb2655f[_0x2d4bbc(0x404)](_0x2d4bbc(0x3da),'ZAhKw')){requestAnimationFrame(_0x192759),_0xb2655f[_0x2d4bbc(0x377)](_0x4d8eab),_0x5d7e95['clear'+'Rect'](-0xb75+-0x193e+-0x1*-0x24b3,-0x23a+-0x219f+0x23d9,_0x54b60d['w'],_0x54b60d['h']);if(!_0x476cc9['safeM'+_0x2d4bbc(0x262)])_0x24175e();}else{var _0x24c53d={'qjQEL':function(_0x56d0f2,_0x2d2a8d,_0x4ae3ec){return _0x56d0f2(_0x2d2a8d,_0x4ae3ec);}};_0x508c90['clipb'+_0x2d4bbc(0x34e)]['write'+'Text'](_0x5a301a)[_0x2d4bbc(0x1a3)](function(){var _0xf1aebf=_0x2d4bbc,_0x6d2157={'JiwXP':'Copy\x20'+'logs'};_0x1997ef['textC'+_0xf1aebf(0x60a)+'t']=_0xf1aebf(0x6ef)+_0xf1aebf(0x71b),_0x24c53d[_0xf1aebf(0x70f)](_0x19ae4f,function(){var _0x3fb25d=_0xf1aebf;_0x549e4f[_0x3fb25d(0x69a)+'onten'+'t']=_0x6d2157[_0x3fb25d(0x5f8)];},0x650*0x2+-0xe0b*-0x2+-0x22da);});}}var _0x4416c8=document['creat'+_0x59914c(0x26f)+_0x59914c(0x1e9)](_0x59914c(0x597)+'s');_0x4416c8['style'][_0x59914c(0x409)+'xt']=_0xb2655f[_0x59914c(0x3ff)];var _0x5d7e95=_0x4416c8[_0x59914c(0x3ad)+'ntext']('2d'),_0x54b60d={'w':0x0,'h':0x0,'dpr':0x0};function _0x4d8eab(){var _0xf308d=_0x59914c,_0x2acc64=window[_0xf308d(0x411)+_0xf308d(0x629)+_0xf308d(0x361)+'o']||-0x170b+0x4c3+0x1249,_0x35bd73=window[_0xf308d(0x5e4)+'Width'],_0x204aa7=window['inner'+_0xf308d(0x599)+'t'];if(_0xb2655f[_0xf308d(0x2d1)](_0x35bd73,_0x54b60d['w'])&&_0xb2655f[_0xf308d(0x29c)](_0x204aa7,_0x54b60d['h'])&&_0x2acc64===_0x54b60d[_0xf308d(0x635)])return;_0x54b60d['w']=_0x35bd73,_0x54b60d['h']=_0x204aa7,_0x54b60d['dpr']=_0x2acc64,_0x4416c8[_0xf308d(0x2a9)]=Math[_0xf308d(0x31c)](_0xb2655f['PjXzE'](_0x35bd73,_0x2acc64)),_0x4416c8[_0xf308d(0x275)+'t']=Math['round'](_0xb2655f['eJrJm'](_0x204aa7,_0x2acc64)),_0x5d7e95['setTr'+'ansfo'+'rm'](_0x2acc64,0xa32+0x179f+-0x21d1,-0x1*-0x1331+-0xb*-0x2e3+-0x1979*0x2,_0x2acc64,-0x2*-0x57e+0xc0c+-0x1708,-0x970+-0x3f3+0xd63*0x1);}var _0x2fa7dc=document[_0x59914c(0x408)+_0x59914c(0x26f)+_0x59914c(0x1e9)](_0x59914c(0x3e6));_0x2fa7dc['id']='sakur'+_0x59914c(0x492)+_0x59914c(0x3d9),_0x2fa7dc['style']['cssTe'+'xt']=_0x59914c(0x24e)+_0x59914c(0x2a4)+_0x59914c(0x5d8)+'inset'+':0;z-'+'index'+_0x59914c(0x297)+'48364'+'7;poi'+_0x59914c(0x4f2)+'event'+_0x59914c(0x468)+'e;';var _0x24ffbe=_0x2fa7dc['attac'+_0x59914c(0x556)+'ow']({'mode':_0xb2655f[_0x59914c(0x36d)]}),_0x26cb08=![],_0x114a3e={};try{_0x114a3e=JSON['parse'](localStorage[_0x59914c(0x398)+'em'](_0xb2655f[_0x59914c(0x1ca)])||'{}');}catch(_0xbf9f7){}function _0x139159(_0x8c4b0){var _0x3af80f=_0x59914c,_0x4095f9=document[_0x3af80f(0x408)+'eElem'+'ent'](_0x3af80f(0x39f));return _0x4095f9[_0x3af80f(0x390)+_0x3af80f(0x381)+'te'](_0xb2655f[_0x3af80f(0x58c)],_0xb2655f[_0x3af80f(0x397)]),_0x4095f9[_0x3af80f(0x5e4)+_0x3af80f(0x247)]=_0x3af80f(0x1de)+_0x3af80f(0x33b)+_0x3af80f(0x563)+_0x3af80f(0x5a0)+_0x3af80f(0x746)+_0x8c4b0+(_0x3af80f(0x1bf)+'>'),_0x4095f9;}function _0x45a8c2(_0x36cd52,_0x31e1e0){var _0x2d40ef=_0x59914c,_0x5c5b5a=document[_0x2d40ef(0x408)+_0x2d40ef(0x26f)+_0x2d40ef(0x1e9)]('butto'+'n');return _0x5c5b5a[_0x2d40ef(0x5ef)]=_0x2d40ef(0x4ee)+'n',_0x5c5b5a[_0x2d40ef(0x712)+_0x2d40ef(0x6f2)]=_0x2d40ef(0x6b8)+'itch',_0x5c5b5a['setAt'+'tribu'+'te'](_0xb2655f[_0x2d40ef(0x3c6)],'switc'+'h'),_0x5c5b5a['setAt'+'tribu'+'te']('aria-'+'check'+'ed',_0xb2655f[_0x2d40ef(0x676)](String,!!_0x36cd52)),_0x5c5b5a['oncli'+'ck']=_0x470fe6=>{var _0x424f81=_0x2d40ef,_0x3cee0f={'Fbyvt':_0xb2655f[_0x424f81(0x28a)]};if(_0xb2655f['Yvvmn'](_0xb2655f[_0x424f81(0x4b9)],_0x424f81(0x5af))){_0x470fe6[_0x424f81(0x702)+'ropag'+'ation']();var _0x27e0bf=_0xb2655f[_0x424f81(0x1a0)](_0x5c5b5a[_0x424f81(0x4b7)+_0x424f81(0x381)+'te'](_0x424f81(0x1b5)+_0x424f81(0x787)+'ed'),_0xb2655f['HkNag']);_0x5c5b5a['setAt'+_0x424f81(0x381)+'te'](_0xb2655f['LSxiZ'],_0xb2655f['PVLzX'](String,_0x27e0bf)),_0x31e1e0(_0x27e0bf);}else _0x58ebc7&&_0x5fa616['val']()&&(_0x7f9bca=_0x3ec3ef[_0x424f81(0x1a4)](),_0xce06e3['local'+_0x424f81(0x2dd)+_0x424f81(0x649)]=!![],_0x4a48aa(_0x424f81(0x642)+'re',_0x3cee0f['Fbyvt']+_0x41876c(_0x506655)));},_0x5c5b5a;}function _0x5d946e(_0x35d128,_0x2ed2e3,_0x5a21af,_0x1271a8,_0x3e5692){var _0x2fbcfc=_0x59914c,_0x108ada=document[_0x2fbcfc(0x408)+'eElem'+_0x2fbcfc(0x1e9)]('div');_0x108ada['class'+_0x2fbcfc(0x6f2)]=_0xb2655f[_0x2fbcfc(0x5a5)];var _0x32a0c1=document['creat'+'eElem'+'ent']('input');_0x32a0c1[_0x2fbcfc(0x5ef)]='range',_0x32a0c1['class'+'Name']=_0x2fbcfc(0x1f8)+_0x2fbcfc(0x6f3),_0x32a0c1[_0x2fbcfc(0x666)]=_0x2ed2e3,_0x32a0c1[_0x2fbcfc(0x750)]=_0x5a21af,_0x32a0c1[_0x2fbcfc(0x6a6)]=_0x1271a8,_0x32a0c1[_0x2fbcfc(0x604)]=_0x35d128;var _0x5598f7=document[_0x2fbcfc(0x408)+'eElem'+_0x2fbcfc(0x1e9)](_0xb2655f['bvaUu']);return _0x5598f7[_0x2fbcfc(0x712)+_0x2fbcfc(0x6f2)]='sk-va'+'l',_0x5598f7[_0x2fbcfc(0x69a)+'onten'+'t']=Number(_0x35d128)['toFix'+'ed'](-0x1c31+-0x26f*0x5+-0x2*-0x142f)[_0x2fbcfc(0x6ba)+'ce'](/\.?0+$/,''),_0x32a0c1['oninp'+'ut']=()=>{var _0x23f96e=_0x2fbcfc,_0x21a7c1={'RiRuY':function(_0x2badbf,_0x29e935){var _0x3d5c2c=_0x4d32;return _0xb2655f[_0x3d5c2c(0x66b)](_0x2badbf,_0x29e935);}};if(_0xb2655f['hMOtX'](_0x23f96e(0x70d),_0x23f96e(0x70d)))_0x5598f7[_0x23f96e(0x69a)+'onten'+'t']=Number(_0x32a0c1[_0x23f96e(0x604)])[_0x23f96e(0x210)+'ed'](0x1e74+-0x24c5+0x653)[_0x23f96e(0x6ba)+'ce'](/\.?0+$/,''),_0x108ada[_0x23f96e(0x723)][_0x23f96e(0x319)+'opert'+'y'](_0xb2655f['kjyyi'],_0xb2655f['GcvVh'](_0xb2655f['jrMwa'](_0x32a0c1[_0x23f96e(0x604)],_0x2ed2e3)/(_0x5a21af-_0x2ed2e3),-0x108b+0x1fd5+0x773*-0x2)+'%'),_0x3e5692(Number(_0x32a0c1['value']));else{var _0x520fd7=_0x32bd04(),_0x33552b=_0x520fd7[_0x23f96e(0x3f4)+_0x23f96e(0x589)+'tor']('.mn-c'+'ols')['child'+'ren'];_0x358ea2[_0x23f96e(0x6ba)+_0x23f96e(0x558)+'ldren'](..._0x33552b),_0x4765b0['isFin'+_0x23f96e(0x48b)](_0x32eeff['x'])&&(_0x173bb4['style']['left']=_0x38768e['x']+'px',_0x1330af[_0x23f96e(0x723)][_0x23f96e(0x23e)]=_0x21a7c1[_0x23f96e(0x20e)](_0x6b51e1['y'],'px'));}},_0x108ada['style'][_0x2fbcfc(0x319)+'opert'+'y'](_0xb2655f[_0x2fbcfc(0x5bf)],_0xb2655f[_0x2fbcfc(0x4b5)](_0xb2655f[_0x2fbcfc(0x48a)](_0x35d128,_0x2ed2e3)/(_0x5a21af-_0x2ed2e3),0x6a6*-0x5+-0x244a+-0x5*-0xdfc)+'%'),_0x108ada[_0x2fbcfc(0x21c)+'d'](_0x32a0c1,_0x5598f7),_0x108ada;}function _0x3ca628(_0x50ad78,_0x30a411){var _0x377e4a=_0x59914c,_0x105f4f=document[_0x377e4a(0x408)+'eElem'+'ent']('div');_0x105f4f[_0x377e4a(0x712)+_0x377e4a(0x6f2)]=_0xb2655f[_0x377e4a(0x328)];var _0x2fb957=document['creat'+_0x377e4a(0x26f)+_0x377e4a(0x1e9)](_0xb2655f[_0x377e4a(0x539)]);return _0x2fb957['class'+_0x377e4a(0x6f2)]=_0x377e4a(0x1dd)+'bel',_0x2fb957['textC'+_0x377e4a(0x60a)+'t']=_0x50ad78,_0x105f4f[_0x377e4a(0x21c)+'d'](_0x2fb957,_0x30a411),_0x105f4f;}function _0x5df547(_0x4d1a19,_0xe4230c,_0x27131a,_0x3fa265){var _0x2597dd=_0x59914c,_0x1f9260={'mmOMj':_0xb2655f[_0x2597dd(0x1ca)]},_0x2cb6fa=document['creat'+_0x2597dd(0x26f)+_0x2597dd(0x1e9)]('div');_0x2cb6fa['class'+_0x2597dd(0x6f2)]=_0x2597dd(0x5df)+'rd'+(_0xe4230c?_0xb2655f['ypsSP']:'');var _0x4d1879=document['creat'+'eElem'+'ent'](_0xb2655f['OrDAt']);_0x4d1879['class'+_0x2597dd(0x6f2)]=_0xb2655f['WBGHM'];var _0x51d536=document[_0x2597dd(0x408)+_0x2597dd(0x26f)+'ent']('div');_0x51d536[_0x2597dd(0x712)+_0x2597dd(0x6f2)]=_0x2597dd(0x5df)+_0x2597dd(0x53c)+_0x2597dd(0x57e);var _0xeaddf5=document['creat'+_0x2597dd(0x26f)+'ent']('stron'+'g');_0xeaddf5['textC'+_0x2597dd(0x60a)+'t']=_0x4d1a19,_0x51d536[_0x2597dd(0x21c)+'dChil'+'d'](_0xeaddf5);if(_0x27131a){var _0x13f97b=_0xb2655f[_0x2597dd(0x51a)](_0x45a8c2,_0xe4230c,_0x566cb3=>{var _0x33ef60=_0x2597dd;_0x2cb6fa['class'+_0x33ef60(0x700)][_0x33ef60(0x1f3)+'e']('on',_0x566cb3),_0x27131a(_0x566cb3);});_0x4d1879[_0x2597dd(0x21c)+'d'](_0x51d536,_0x13f97b);}else _0x2597dd(0x385)==='mEYhB'?_0x2b06d1=_0x5475df['parse'](_0x1aa86e[_0x2597dd(0x398)+'em'](_0x1f9260[_0x2597dd(0x50c)])||'{}'):_0x4d1879['appen'+_0x2597dd(0x1bb)+'d'](_0x51d536);_0x2cb6fa[_0x2597dd(0x21c)+'dChil'+'d'](_0x4d1879);if(_0x3fa265&&_0x3fa265['lengt'+'h']){var _0x1ab486=document['creat'+_0x2597dd(0x26f)+_0x2597dd(0x1e9)](_0xb2655f['OrDAt']);_0x1ab486[_0x2597dd(0x712)+'Name']=_0xb2655f['lPbUl'];for(var _0x38d5e0 of _0x3fa265)_0x1ab486['appen'+'dChil'+'d'](_0x38d5e0);_0x2cb6fa[_0x2597dd(0x21c)+_0x2597dd(0x1bb)+'d'](_0x1ab486);}return _0x2cb6fa;}function _0x21fa63(_0x314911){var _0x1a1e45=_0x59914c,_0x5b91b8=document[_0x1a1e45(0x408)+_0x1a1e45(0x26f)+_0x1a1e45(0x1e9)](_0x1a1e45(0x3e6));return _0x5b91b8['class'+'Name']=_0x1a1e45(0x43b)+'l',_0x5b91b8[_0x1a1e45(0x723)][_0x1a1e45(0x409)+'xt']=_0x1a1e45(0x39b)+'size:'+_0x1a1e45(0x1ed)+_0x1a1e45(0x680)+_0x1a1e45(0x5ae)+'(246,'+'238,2'+_0x1a1e45(0x1e2)+');whi'+'te-sp'+_0x1a1e45(0x551)+'re-wr'+'ap;wo'+_0x1a1e45(0x77b)+_0x1a1e45(0x232)+_0x1a1e45(0x5e5)+_0x1a1e45(0x59c),_0x5b91b8[_0x1a1e45(0x69a)+_0x1a1e45(0x60a)+'t']=_0x314911,_0x5b91b8;}function _0x5b72df(_0x3d23e9,_0x25ffe6){var _0x51219c=_0x59914c,_0x195ed4=(_0x51219c(0x332)+'|0|1|'+'5')['split']('|'),_0x14f849=0x2bd*-0x1+-0x244c+0x2709*0x1;while(!![]){switch(_0x195ed4[_0x14f849++]){case'0':_0x2be6a9[_0x51219c(0x723)][_0x51219c(0x409)+'xt']=_0x51219c(0x703)+_0x51219c(0x394)+_0x51219c(0x32a)+_0x51219c(0x669)+'a(255'+',107,'+'157,.'+'4);ba'+_0x51219c(0x4e7)+_0x51219c(0x2e6)+'gba(2'+_0x51219c(0x57c)+'7,157'+',.12)'+';colo'+'r:#ff'+_0x51219c(0x739)+'borde'+_0x51219c(0x522)+_0x51219c(0x45a)+_0x51219c(0x448)+'dding'+_0x51219c(0x763)+_0x51219c(0x5b8)+'font-'+_0x51219c(0x2de)+'11px;'+_0x51219c(0x311)+_0x51219c(0x27a)+_0x51219c(0x245);continue;case'1':_0x2be6a9[_0x51219c(0x6af)+'ck']=_0x31312d=>{var _0x2c861d=_0x51219c;_0x31312d[_0x2c861d(0x702)+_0x2c861d(0x545)+_0x2c861d(0x465)](),_0x25ffe6();};continue;case'2':_0x2be6a9['textC'+_0x51219c(0x60a)+'t']=_0x3d23e9;continue;case'3':var _0x2be6a9=document['creat'+'eElem'+_0x51219c(0x1e9)](_0x51219c(0x4ee)+'n');continue;case'4':_0x2be6a9[_0x51219c(0x5ef)]='butto'+'n';continue;case'5':return _0x2be6a9;}break;}}function _0x3d6eb0(){var _0x1d6148=_0x59914c,_0x40a0d0={'eocEL':function(_0x14f442,_0x1d9709){return _0x14f442-_0x1d9709;},'kTzgM':function(_0x49a48f,_0x2f9e8b){return _0x49a48f-_0x2f9e8b;},'FyTVD':_0xb2655f['XreHw'],'IaBRc':_0xb2655f[_0x1d6148(0x428)],'AsCNu':function(_0x2d7efb,_0x459042){return _0x2d7efb!==_0x459042;},'TKqBt':_0xb2655f['pWpQl'],'bmQdM':_0x1d6148(0x6ef)+_0x1d6148(0x71b),'YUoMt':function(_0x454ab8,_0x1b44e3){return _0x454ab8===_0x1b44e3;},'sLkkf':_0xb2655f['MUEJj'],'vAQGz':_0x1d6148(0x3e6),'Rxxwy':_0x1d6148(0x4d6)+_0x1d6148(0x46a),'RLZjN':'width'+_0x1d6148(0x3fc)+';heig'+_0x1d6148(0x458)+'0px;b'+_0x1d6148(0x585)+'ound:'+'rgba('+_0x1d6148(0x2d6)+_0x1d6148(0x4f0)+_0x1d6148(0x403)+'r:#ff'+'d7e3;'+_0x1d6148(0x703)+'r:1px'+'\x20soli'+'d\x20rgb'+_0x1d6148(0x574)+',107,'+_0x1d6148(0x1b6)+'25);b'+_0x1d6148(0x5bc)+_0x1d6148(0x2b1)+'us:8p'+_0x1d6148(0x4de)+_0x1d6148(0x35f)+'x/1.4'+'5\x20ui-'+_0x1d6148(0x537)+_0x1d6148(0x32c)+_0x1d6148(0x46d)+_0x1d6148(0x265)+_0x1d6148(0x634)+_0x1d6148(0x2e3)+'addin'+_0x1d6148(0x53d)+';whit'+_0x1d6148(0x3f0)+'ce:pr'+'e;ove'+'rflow'+':auto','KILeY':_0x1d6148(0x754)+_0x1d6148(0x62b)+'txt','lfqOa':function(_0x231be5,_0x208a37,_0x11402a){return _0x231be5(_0x208a37,_0x11402a);},'iXsgW':_0xb2655f[_0x1d6148(0x781)]},_0x59d622=document[_0x1d6148(0x408)+_0x1d6148(0x26f)+_0x1d6148(0x1e9)](_0x1d6148(0x3e6));_0x59d622['class'+'Name']=_0xb2655f['HBwTl'];var _0x2e4cca=document[_0x1d6148(0x408)+'eElem'+'ent']('nav');_0x2e4cca[_0x1d6148(0x712)+'Name']=_0xb2655f[_0x1d6148(0x613)];var _0x21ef83=document[_0x1d6148(0x408)+'eElem'+'ent']('div');_0x21ef83[_0x1d6148(0x712)+'Name']=_0x1d6148(0x356)+'go',_0x21ef83[_0x1d6148(0x5e4)+_0x1d6148(0x247)]=_0x1d6148(0x1de)+_0x1d6148(0x33b)+_0x1d6148(0x563)+_0x1d6148(0x5a0)+'\x2024\x22>'+_0x1d6148(0x1fd)+'><lin'+_0x1d6148(0x607)+'adien'+'t\x20id='+_0x1d6148(0x1b1)+'rad\x22\x20'+'x1=\x224'+_0x1d6148(0x50b)+'\x223\x22\x20x'+_0x1d6148(0x732)+_0x1d6148(0x748)+_0x1d6148(0x3cd)+_0x1d6148(0x474)+_0x1d6148(0x243)+'its=\x22'+'userS'+'paceO'+'nUse\x22'+_0x1d6148(0x729)+'p\x20off'+_0x1d6148(0x6b6)+_0x1d6148(0x50d)+'op-co'+'lor=\x22'+_0x1d6148(0x6ad)+'ec\x22/>'+_0x1d6148(0x554)+'\x20offs'+_0x1d6148(0x59b)+_0x1d6148(0x221)+'stop-'+'color'+_0x1d6148(0x5bb)+_0x1d6148(0x2af)+'/><st'+'op\x20of'+_0x1d6148(0x6e3)+_0x1d6148(0x1a9)+'top-c'+_0x1d6148(0x68b)+_0x1d6148(0x25a)+'b9d\x22/'+'></li'+'nearG'+_0x1d6148(0x270)+'nt></'+_0x1d6148(0x344)+'<path'+_0x1d6148(0x317)+_0x1d6148(0x4b0)+'c-1.5'+_0x1d6148(0x55c)+_0x1d6148(0x414)+'-4-7.'+_0x1d6148(0x74f)+_0x1d6148(0x325)+_0x1d6148(0x494)+_0x1d6148(0x258)+'5s4\x202'+'\x204\x204.'+_0x1d6148(0x4d5)+_0x1d6148(0x776)+_0x1d6148(0x5a3)+_0x1d6148(0x249)+'fill='+'\x22none'+'\x22\x20str'+_0x1d6148(0x71c)+_0x1d6148(0x728)+_0x1d6148(0x716)+'ad)\x22\x20'+_0x1d6148(0x407)+_0x1d6148(0x30b)+'th=\x222'+'\x22\x20str'+'oke-l'+_0x1d6148(0x60f)+_0x1d6148(0x5c4)+'und\x22\x20'+'strok'+_0x1d6148(0x42e)+_0x1d6148(0x49b)+'=\x22rou'+_0x1d6148(0x1a5)+'<path'+'\x20d=\x22M'+_0x1d6148(0x2ef)+_0x1d6148(0x418)+_0x1d6148(0x1c5)+_0x1d6148(0x74f)+_0x1d6148(0x5ca)+_0x1d6148(0x63c)+_0x1d6148(0x4d7)+'\x203c1.'+_0x1d6148(0x6da)+_0x1d6148(0x405)+_0x1d6148(0x63c)+'.5\x22\x20f'+'ill=\x22'+'none\x22'+_0x1d6148(0x392)+_0x1d6148(0x3cb)+_0x1d6148(0x52b)+_0x1d6148(0x5b4)+_0x1d6148(0x233)+'troke'+_0x1d6148(0x3e5)+'h=\x221.'+'5\x22\x20st'+'roke-'+_0x1d6148(0x58e)+_0x1d6148(0x5e3)+_0x1d6148(0x2f0)+_0x1d6148(0x406)+_0x1d6148(0x3a6)+'cx=\x221'+_0x1d6148(0x479)+_0x1d6148(0x6f4)+_0x1d6148(0x779)+_0x1d6148(0x358)+_0x1d6148(0x21f)+'#ff6b'+'9d\x22/>'+'</svg'+'>',_0x2e4cca['appen'+'dChil'+'d'](_0x21ef83);var _0x408f9e=document[_0x1d6148(0x408)+_0x1d6148(0x26f)+'ent']('div');_0x408f9e['class'+'Name']='mn-ma'+'in';var _0x1f3b2a=document['creat'+_0x1d6148(0x26f)+'ent'](_0x1d6148(0x31d)+'r');_0x1f3b2a['class'+_0x1d6148(0x6f2)]=_0x1d6148(0x3a0)+'p';var _0x2cb77c=document['creat'+_0x1d6148(0x26f)+'ent']('h2');_0x2cb77c[_0x1d6148(0x712)+'Name']='mn-h',_0x2cb77c['textC'+_0x1d6148(0x60a)+'t']='2v2.i'+'o';var _0x31505f=document[_0x1d6148(0x408)+_0x1d6148(0x26f)+_0x1d6148(0x1e9)]('butto'+'n');_0x31505f['type']=_0xb2655f['tebNi'],_0x31505f[_0x1d6148(0x712)+_0x1d6148(0x6f2)]='mn-cl'+'ose',_0x31505f[_0x1d6148(0x5e4)+_0x1d6148(0x247)]=_0xb2655f[_0x1d6148(0x433)],_0x31505f['oncli'+'ck']=()=>_0x28b81f(![]),_0x1f3b2a[_0x1d6148(0x21c)+'d'](_0x2cb77c,_0x31505f);var _0x377589=null;_0x1f3b2a[_0x1d6148(0x400)+'entLi'+_0x1d6148(0x6a8)+'r'](_0x1d6148(0x4da)+_0x1d6148(0x521)+'n',_0x27a601=>{var _0x2317ee=_0x1d6148;if(_0x27a601[_0x2317ee(0x4e5)+'t'][_0x2317ee(0x2ff)+'st'](_0x2317ee(0x4ee)+_0x2317ee(0x49c)+_0x2317ee(0x4f5)))return;var _0x467cee=_0x59d622[_0x2317ee(0x2e9)+_0x2317ee(0x5c5)+_0x2317ee(0x73e)+_0x2317ee(0x77f)+'t']();_0x377589=[_0x40a0d0['eocEL'](_0x27a601[_0x2317ee(0x4f7)+'tX'],_0x467cee[_0x2317ee(0x38d)]),_0x40a0d0['kTzgM'](_0x27a601[_0x2317ee(0x4f7)+'tY'],_0x467cee['top'])],_0x1f3b2a['setPo'+_0x2317ee(0x273)+_0x2317ee(0x632)+'re'](_0x27a601['point'+_0x2317ee(0x348)]),_0x59d622[_0x2317ee(0x712)+_0x2317ee(0x700)][_0x2317ee(0x40f)](_0x2317ee(0x564)+_0x2317ee(0x3be)+'g');}),_0x1f3b2a[_0x1d6148(0x400)+_0x1d6148(0x229)+_0x1d6148(0x6a8)+'r'](_0xb2655f[_0x1d6148(0x501)],_0x234c9d=>{var _0xa70709=_0x1d6148;if(!_0x377589)return;_0x59d622[_0xa70709(0x723)]['left']=Math['min'](Math['max'](0x13d2+0x2192*0x1+0x1ab2*-0x2,_0xb2655f[_0xa70709(0x6c5)](_0x234c9d['clien'+'tX'],_0x377589[0x1*-0x1d6c+0x68d*0x1+-0x493*-0x5])),window['inner'+_0xa70709(0x366)]-(-0x14c2+0x2fd+0x128d))+'px',_0x59d622['style']['top']=_0xb2655f[_0xa70709(0x553)](Math[_0xa70709(0x666)](Math['max'](0x14d1+-0x1fa*0x2+-0x10dd,_0x234c9d['clien'+'tY']-_0x377589[-0xd96+0x29*0x9+-0x613*-0x2]),window[_0xa70709(0x5e4)+'Heigh'+'t']-(0x1a4c+-0x66c+-0x3a*0x56)),'px'),_0x59d622[_0xa70709(0x723)]['right']='auto',_0x59d622[_0xa70709(0x723)]['botto'+'m']='auto';});var _0x34f221=()=>{var _0x3a5692=_0x1d6148,_0x412f3b=(_0x3a5692(0x2b0)+'|0|4|'+'3|2')[_0x3a5692(0x66a)]('|'),_0x5ee3a8=0x5f4*0x2+0x269d+-0x3285;while(!![]){switch(_0x412f3b[_0x5ee3a8++]){case'0':var _0x4f1ade=_0x59d622['getBo'+_0x3a5692(0x5c5)+'gClie'+'ntRec'+'t']();continue;case'1':_0x59d622['class'+'List']['remov'+'e'](_0x3a5692(0x564)+_0x3a5692(0x3be)+'g');continue;case'2':_0x22101d();continue;case'3':_0x114a3e['y']=_0x4f1ade[_0x3a5692(0x23e)];continue;case'4':_0x114a3e['x']=_0x4f1ade[_0x3a5692(0x38d)];continue;case'5':if(!_0x377589)return;continue;case'6':_0x377589=null;continue;}break;}};_0x1f3b2a[_0x1d6148(0x400)+_0x1d6148(0x229)+_0x1d6148(0x6a8)+'r']('point'+'erup',_0x34f221),_0x1f3b2a['addEv'+'entLi'+'stene'+'r'](_0x1d6148(0x4da)+_0x1d6148(0x298)+_0x1d6148(0x33e),_0x34f221);var _0x483a27=document[_0x1d6148(0x408)+_0x1d6148(0x26f)+'ent'](_0xb2655f[_0x1d6148(0x77e)]);_0x483a27['class'+_0x1d6148(0x6f2)]=_0x1d6148(0x35b)+'ls',_0x408f9e['appen'+'d'](_0x1f3b2a,_0x483a27),_0x59d622['appen'+'d'](_0x2e4cca,_0x408f9e);function _0x30ca5c(){var _0x39c22e=_0x1d6148,_0xd06fa9={'VIfbc':_0xb2655f[_0x39c22e(0x76f)],'Eizot':function(_0x321075,_0x242dca){var _0x105207=_0x39c22e;return _0xb2655f[_0x105207(0x386)](_0x321075,_0x242dca);},'vHGzZ':function(_0x7d8863,_0x42ded1){return _0x7d8863<_0x42ded1;},'IDbIP':function(_0x4b68ff,_0x59b5d3){return _0x4b68ff===_0x59b5d3;},'GAVds':function(_0x5ab4f7){return _0x5ab4f7();},'GmbcL':function(_0x4f5acd,_0x3ba517,_0x43eaf5){return _0xb2655f['mCxTs'](_0x4f5acd,_0x3ba517,_0x43eaf5);},'rlCVV':function(_0x1295e8,_0x14077f){return _0x1295e8+_0x14077f;},'XgQHL':function(_0x4d5b90,_0x1ff187){var _0x4a540b=_0x39c22e;return _0xb2655f[_0x4a540b(0x5da)](_0x4d5b90,_0x1ff187);},'eVrtw':function(_0x57937b,_0x340893){return _0x57937b+_0x340893;},'yyUJa':_0xb2655f[_0x39c22e(0x2cf)],'XUDyg':function(_0x1386bb,_0x39c299){var _0x1673b4=_0x39c22e;return _0xb2655f[_0x1673b4(0x485)](_0x1386bb,_0x39c299);},'zyAyq':function(_0x2314b7,_0x32e874){return _0x2314b7===_0x32e874;},'fCeKO':_0xb2655f[_0x39c22e(0x268)],'XBvbt':function(_0x17cc4e,_0x5428e5){return _0x17cc4e/_0x5428e5;},'ByIyL':function(_0x1438d7,_0x1d1fe7){return _0x1438d7-_0x1d1fe7;},'fPKVS':_0xb2655f[_0x39c22e(0x5cb)],'jlxsv':function(_0x100016,_0x398da2){var _0x386f15=_0x39c22e;return _0xb2655f[_0x386f15(0x50a)](_0x100016,_0x398da2);}};return[_0xb2655f['IWZuH'](_0x5df547,_0x39c22e(0x734)+_0x39c22e(0x5b1)+_0x39c22e(0x382)+'hema',_0x476cc9['esp'],_0x35fd7c=>{var _0xdb31a6=_0x39c22e,_0xe5bd36={'eEUpt':_0xdb31a6(0x5a7)+_0xdb31a6(0x77d)+'r','CXXfI':_0x40a0d0[_0xdb31a6(0x1f9)],'mWVYf':'local'+_0xdb31a6(0x768)+'Shoot'+_0xdb31a6(0x27e)};if(_0xdb31a6(0x3c3)!=='AQRuM')_0x476cc9['esp']=_0x35fd7c,_0x463da6();else{_0x55bef3=_0x304ee1(_0x36c78d,_0xe5bd36['eEUpt']);if(_0x1f019e)_0x337800(_0xe5bd36[_0xdb31a6(0x5e1)],_0xe5bd36['mWVYf']+_0x178f75(_0x4aabb3));}},[_0xb2655f['zaejG'](_0x3ca628,'Boxes',_0x45a8c2(_0x476cc9[_0x39c22e(0x6e0)],_0x867e85=>{var _0x56af7f=_0x39c22e;if(_0xd06fa9[_0x56af7f(0x28e)](_0x56af7f(0x421),_0x56af7f(0x421)))_0x476cc9[_0x56af7f(0x6e0)]=_0x867e85,_0x463da6();else try{var _0x24297f=_0x1e49aa['call'](_0x56af7f(0x38c)+'Engin'+'e.Cam'+_0x56af7f(0x3d5),_0xd06fa9[_0x56af7f(0x1d1)],[_0x5ad7fc[_0x56af7f(0x3f2)+'Camer'+'a']]);if(typeof _0x24297f===_0x56af7f(0x2c6)+'r'&&_0xd06fa9['Eizot'](_0x24297f,0x4b*0x2e+-0x1f*-0x2a+-0x1286*0x1)&&_0xd06fa9[_0x56af7f(0x350)](_0x24297f,0x24d*0x9+0xb71*-0x3+0xe51))return _0x24297f;}catch(_0x2fbc72){}})),_0x3ca628('Names',_0xb2655f['qDEbo'](_0x45a8c2,_0x476cc9[_0x39c22e(0x33d)],_0x44522a=>{var _0x35182e=_0x39c22e;_0x476cc9[_0x35182e(0x33d)]=_0x44522a,_0xd06fa9[_0x35182e(0x755)](_0x463da6);})),_0x3ca628(_0xb2655f[_0x39c22e(0x214)],_0x45a8c2(_0x476cc9[_0x39c22e(0x625)+'h'],_0x914eab=>{var _0x5e280a=_0x39c22e;_0x476cc9[_0x5e280a(0x625)+'h']=_0x914eab,_0xd06fa9[_0x5e280a(0x755)](_0x463da6);})),_0x3ca628(_0x39c22e(0x688)+'color'+'s',_0x45a8c2(_0x476cc9['team'],_0x4dcfb0=>{var _0x3e9e04=_0x39c22e;_0x476cc9[_0x3e9e04(0x701)]=_0x4dcfb0,_0x463da6();})),_0xb2655f[_0x39c22e(0x30c)](_0x3ca628,_0xb2655f[_0x39c22e(0x46f)],_0xb2655f['zlMAP'](_0x45a8c2,_0x476cc9['lines'],_0x14d276=>{_0x476cc9['lines']=_0x14d276,_0x463da6();})),_0x3ca628('Scale',_0x5d946e(_0x476cc9[_0x39c22e(0x6ac)],-0xb3e+-0x1*-0x2604+0x2*-0xd63+0.5,0x1d*0xdf+0x1f20+-0x3861,0x159a*-0x1+0x157*0x15+-0x1*0x689+0.05,_0x2e676e=>{var _0xf5ef17=_0x39c22e;if('SZyLv'===_0x40a0d0[_0xf5ef17(0x577)]){var _0x4f286b=0x1*-0x18af+0x5ea+-0x12c5*-0x1;for(var _0x2f98b0 in _0x3414d6){if(_0x5b7cab[_0x2f98b0]&&_0x4cb5a8[_0x2f98b0][_0xf5ef17(0x1f4)+'ed'])_0x4f286b++;}_0x1d5869['hooks'+'Ok']=_0x4f286b;if(_0x3b6ddf['hooks'+_0xf5ef17(0x447)]&&!_0x285467['_hook'+_0xf5ef17(0x22d)+'ed']){_0x20f73f[_0xf5ef17(0x54d)+_0xf5ef17(0x22d)+'ed']=!![];for(var _0x1c81e1 in _0x30a6f9){var _0x232ea2=_0x33e7c2[_0x1c81e1];_0xd06fa9[_0xf5ef17(0x1df)](_0x1deb99,_0xf5ef17(0x6f5),_0xd06fa9[_0xf5ef17(0x22f)](_0xd06fa9[_0xf5ef17(0x671)](_0xd06fa9[_0xf5ef17(0x217)](_0x1c81e1+(_0xf5ef17(0x4a8)+'ied='),!!_0x232ea2[_0xf5ef17(0x1f4)+'ed']),_0xd06fa9['yyUJa']),!!_0x232ea2['enabl'+'ed']));}}}else _0x476cc9[_0xf5ef17(0x6ac)]=_0x2e676e,_0x463da6();}))]),_0x5df547('Comba'+'t',![],null,[_0xb2655f['MxeAD'](_0x3ca628,_0xb2655f['AEbps'],_0x45a8c2(_0x476cc9[_0x39c22e(0x5cf)+_0x39c22e(0x362)],_0x4b7d63=>{var _0x1ded46=_0x39c22e;_0x476cc9['noRec'+_0x1ded46(0x362)]=_0x4b7d63,_0x463da6();})),_0x3ca628(_0x39c22e(0x4f6)+_0x39c22e(0x251),_0x45a8c2(_0x476cc9['noSpr'+_0x39c22e(0x4ad)],_0xfe95eb=>{var _0x24598f=_0x39c22e;if(_0x24598f(0x717)!=='QgOBy')return'0x'+_0xd06fa9['XUDyg'](_0x19a0a6,-0x3*-0x393+-0x1*-0x3f7+-0xeb0)[_0x24598f(0x1b8)+_0x24598f(0x389)](-0x1f6*0x3+0xc*0x293+0x67*-0x3e);else _0x476cc9[_0x24598f(0x4a2)+'ead']=_0xfe95eb,_0x463da6();})),_0x3ca628(_0x39c22e(0x616)+_0x39c22e(0x6c3),_0x45a8c2(_0x476cc9[_0x39c22e(0x478)+'Fire'],_0x4c94c3=>{var _0x94dac5=_0x39c22e;_0x476cc9[_0x94dac5(0x478)+'Fire']=_0x4c94c3,_0x463da6();})),_0xb2655f[_0x39c22e(0x3a2)](_0x3ca628,'Damag'+'e',_0x5d946e(_0x476cc9['damag'+'eValu'+'e'],0x1*0x890+0x20b2+-0x2941,-0x23b8+-0x210f+0x46bb,0x7*-0x35e+0x1d0*-0xa+0x29b3,_0x1b8d22=>{var _0x1fb2f3=_0x39c22e;_0xd06fa9[_0x1fb2f3(0x1ea)](_0x1fb2f3(0x2b8),_0x1fb2f3(0x2b8))?(_0x476cc9['damag'+'eValu'+'e']=_0x1b8d22,_0x463da6()):_0x3f814b[_0x1fb2f3(0x21c)+'dChil'+'d'](_0x3121a6);})),_0x3ca628(_0xb2655f['nBqHB'],_0x45a8c2(_0x476cc9['infAm'+'mo'],_0x3a0017=>{var _0x3c1e09=_0x39c22e;_0x476cc9[_0x3c1e09(0x5d0)+'mo']=_0x3a0017,_0x463da6();}))]),_0xb2655f[_0x39c22e(0x727)](_0x5df547,_0x39c22e(0x4ac)+_0x39c22e(0x1e9),![],null,[_0xb2655f[_0x39c22e(0x656)](_0x3ca628,_0x39c22e(0x326)+'\x20%',_0x5d946e(_0x476cc9[_0x39c22e(0x555)+_0x39c22e(0x533)],0x26df+0x382*-0x5+-0x1523,-0x1*0xb11+-0x275*0x7+0x1d0c,0x3*0x151+0x509+-0x8fb,_0x38d3f0=>{var _0x113f0b=_0x39c22e;_0x476cc9[_0x113f0b(0x555)+_0x113f0b(0x533)]=_0x38d3f0,_0x463da6();})),_0x3ca628(_0xb2655f[_0x39c22e(0x752)],_0x5d946e(_0x476cc9[_0x39c22e(0x36f)+'ct'],0xe7*-0x21+0x1096+0xd63,0x1d*0x57+0x7*0x1d9+0x756*-0x3,0x4*0x3ab+0xb66+0x1*-0x1a11,_0x3c1053=>{var _0x178a06=_0x39c22e;_0x476cc9[_0x178a06(0x36f)+'ct']=_0x3c1053,_0x463da6();})),_0x3ca628(_0xb2655f['RjBwM'],_0x5d946e(_0x476cc9[_0x39c22e(0x1d8)+_0x39c22e(0x3a3)],-0x6c*-0x4d+-0xcd3+-0x1*0x139f,0x5*0x217+0x1*-0x1b47+0x119c,-0x1892+-0x118a+-0x2a1d*-0x1,_0x1f0cb7=>{var _0x50262f=_0x39c22e,_0x5403f5={'xFKkC':'captu'+'re'};'NvANI'!==_0x50262f(0x338)?(_0x476cc9['gravi'+_0x50262f(0x3a3)]=_0x1f0cb7,_0x463da6()):(_0x13d136=_0x38fcd4['val'](),_0x516d8b[_0x50262f(0x285)+_0x50262f(0x72c)]=!![],_0x4bd1af(_0x5403f5[_0x50262f(0x1d2)],_0x50262f(0x301)+_0x50262f(0x72c)+'\x20@'+_0x3639a3(_0x2b67f6)));}))]),_0xb2655f[_0x39c22e(0x5ab)](_0x5df547,_0xb2655f[_0x39c22e(0x653)],![],null,[_0xb2655f[_0x39c22e(0x5a9)](_0x3ca628,'Eye\x20h'+_0x39c22e(0x35c),_0xb2655f[_0x39c22e(0x2c9)](_0x5d946e,_0x476cc9['camHe'+_0x39c22e(0x778)],-0x1562+-0x887*-0x3+-0x433+0.8,-0x6bb*-0x5+-0x175*-0x19+-0x4612+0.6000000000000001,0xc3f+-0x36*0x96+0x1365+0.02,_0x25c93e=>{var _0x3b3581=_0x39c22e;_0x476cc9[_0x3b3581(0x19d)+_0x3b3581(0x778)]=_0x25c93e,_0x463da6();})),_0xb2655f[_0x39c22e(0x343)](_0x3ca628,_0xb2655f[_0x39c22e(0x75e)],_0xb2655f['VIuGu'](_0x5d946e,_0x476cc9['playe'+_0x39c22e(0x373)+'ht'],0xce2+-0x1030+0x4d*0xb+0.19999999999999996,-0x1af*-0x16+0x7*-0x51+-0x22d1*0x1+0.3999999999999999,-0x1743+-0x5*-0x6d0+-0xacd+0.02,_0x42eb24=>{var _0x4d84ca=_0x39c22e;if(_0x40a0d0[_0x4d84ca(0x3b1)](_0x4d84ca(0x4b3),'yxFBC'))_0x476cc9['playe'+_0x4d84ca(0x373)+'ht']=_0x42eb24,_0x463da6();else return null;})),_0xb2655f['rhxhP'](_0x3ca628,_0x39c22e(0x461)+_0x39c22e(0x384)+_0x39c22e(0x693),_0x5d946e(_0x476cc9['fovOv'+_0x39c22e(0x775)+'e'],0x332+-0x16*-0x7+-0x3cc,0x32b*0x9+-0x2345*-0x1+0x3f50*-0x1,0x47d+0x4*-0x6e9+-0x72*-0x34,_0x13bfd6=>{var _0x540ae4=_0x39c22e;_0x476cc9[_0x540ae4(0x32e)+'errid'+'e']=_0x13bfd6,_0x463da6();}))]),_0x5df547(_0xb2655f['aeeBn'],_0x476cc9[_0x39c22e(0x5be)+_0x39c22e(0x262)],_0x375f58=>{_0x476cc9['safeM'+'ode']=_0x375f58,_0x463da6();if(_0x375f58){for(var _0x57a042 in _0x1bbef4)_0x1aaf27(_0x57a042,![]);}},[_0xb2655f[_0x39c22e(0x24d)](_0x3ca628,'Hook:'+_0x39c22e(0x637)+'l\x20cap'+_0x39c22e(0x1a1),_0x45a8c2(_0x476cc9[_0x39c22e(0x61b)+'aptur'+'e'],_0x34bc63=>{var _0x35799e=_0x39c22e;_0x476cc9['hookC'+'aptur'+'e']=_0x34bc63,_0xd06fa9[_0x35799e(0x755)](_0x463da6);})),_0xb2655f[_0x39c22e(0x519)](_0x3ca628,_0xb2655f[_0x39c22e(0x6d7)],_0x45a8c2(_0x476cc9['hookS'+_0x39c22e(0x57b)],_0x3432ea=>{var _0x186330=_0x39c22e;_0x476cc9['hookS'+_0x186330(0x57b)]=_0x3432ea,_0x463da6();})),_0x3ca628(_0x39c22e(0x62e)+_0x39c22e(0x399)+_0x39c22e(0x54c),_0x45a8c2(_0x476cc9['hookN'+_0x39c22e(0x6ae)+'il'],_0x2bee06=>{var _0x24d832=_0x39c22e;_0x476cc9[_0x24d832(0x2c2)+'oReco'+'il']=_0x2bee06,_0x463da6();})),_0xb2655f['PVLzX'](_0x21fa63,_0xb2655f['ARJzj'](_0xb2655f[_0x39c22e(0x324)](_0xb2655f['djdmr'](_0xb2655f[_0x39c22e(0x562)](_0x39c22e(0x4b6)+'\x20',_0x43f45c[_0x39c22e(0x4b6)+'Ok']),'/'),_0x43f45c['hooks'+'Total']),_0xb2655f['pkOxn'])),_0xb2655f['gVSSK'](_0x21fa63,_0xb2655f[_0x39c22e(0x283)]('playe'+'rs\x20'+_0x43f45c['playe'+'rs']+_0xb2655f[_0x39c22e(0x52d)],_0x43f45c[_0x39c22e(0x254)]?'ok':'—')),_0x21fa63(_0xb2655f[_0x39c22e(0x20c)](_0xb2655f[_0x39c22e(0x66e)](_0xb2655f['vyCnh'](_0xb2655f[_0x39c22e(0x517)]('linke'+'r\x20',_0x43f45c[_0x39c22e(0x44e)+'r']?'✓':'—'),_0xb2655f[_0x39c22e(0x2ba)]),_0x43f45c['msm']?'✓':'—')+(_0x39c22e(0x504)+'\x20')+(_0x43f45c[_0x39c22e(0x1c6)+'View']?'✓':'—')+_0xb2655f[_0x39c22e(0x32f)],_0x43f45c['charC'+'am']?'✓':'—')),_0x43f45c['lastE'+_0x39c22e(0x38a)]?_0xb2655f['PcnND'](_0x21fa63,String(_0x43f45c[_0x39c22e(0x663)+_0x39c22e(0x38a)])[_0x39c22e(0x2df)](0x169d+0x5*0x763+-0x3b8c,-0x1027+0xdf*-0x1d+0x29e2)):_0x21fa63(_0xb2655f[_0x39c22e(0x1b0)])]),_0x5df547(_0x39c22e(0x2ab),![],null,[(function(){var _0x1d2f2f=_0x39c22e,_0xed5724={'HJdjQ':_0x40a0d0[_0x1d2f2f(0x2d5)],'ABZVN':function(_0x58fbaa,_0x19c9f7,_0x1312ea,_0x417dc2,_0x15294b){return _0x58fbaa(_0x19c9f7,_0x1312ea,_0x417dc2,_0x15294b);},'RGkth':_0x1d2f2f(0x300),'bMlot':_0x40a0d0[_0x1d2f2f(0x4ae)],'YrVjo':function(_0x44227c){return _0x44227c();},'rRAPx':function(_0x22b0e1,_0x72b69a){var _0xcb58d1=_0x1d2f2f;return _0x40a0d0[_0xcb58d1(0x2db)](_0x22b0e1,_0x72b69a);},'zUDfM':_0x1d2f2f(0x2d3)};if('axyqT'!==_0x40a0d0['sLkkf']){var _0x50bdd5=document[_0x1d2f2f(0x408)+'eElem'+'ent'](_0x40a0d0[_0x1d2f2f(0x4ab)]),_0xd44c27=document['creat'+'eElem'+_0x1d2f2f(0x1e9)](_0x40a0d0['Rxxwy']);_0xd44c27[_0x1d2f2f(0x511)+'nly']=!![],_0xd44c27[_0x1d2f2f(0x723)][_0x1d2f2f(0x409)+'xt']=_0x40a0d0[_0x1d2f2f(0x4dd)],_0xd44c27[_0x1d2f2f(0x604)]=_0x2eb300();var _0x5d6157=document['creat'+_0x1d2f2f(0x26f)+_0x1d2f2f(0x1e9)]('div');_0x5d6157[_0x1d2f2f(0x723)]['cssTe'+'xt']=_0x1d2f2f(0x1d9)+'ay:fl'+'ex;ga'+_0x1d2f2f(0x387)+_0x1d2f2f(0x3de)+'in-to'+_0x1d2f2f(0x387);var _0x537d07=_0x5b72df(_0x40a0d0['TKqBt'],function(){var _0x4d6497=_0x1d2f2f,_0x31cf39={'PMgkj':_0xed5724['HJdjQ'],'AsKeX':'f32','VdvWL':function(_0x115da4,_0x45083b,_0x3e2015,_0x2265bb,_0x386568){var _0x3ff1f4=_0x4d32;return _0xed5724[_0x3ff1f4(0x218)](_0x115da4,_0x45083b,_0x3e2015,_0x2265bb,_0x386568);},'pTGzy':_0xed5724[_0x4d6497(0x542)],'qHUrG':_0xed5724[_0x4d6497(0x41d)]},_0x31194c=_0xed5724[_0x4d6497(0x6a3)](_0x2eb300);navigator['clipb'+'oard']&&navigator['clipb'+_0x4d6497(0x34e)][_0x4d6497(0x2ca)+'Text']?navigator['clipb'+'oard']['write'+_0x4d6497(0x6ab)](_0x31194c)[_0x4d6497(0x1a3)](function(){var _0x4b280d=_0x4d6497,_0x8fd639={'aBAXG':_0x31cf39[_0x4b280d(0x42d)],'kYsjX':function(_0x146e29,_0x5185ec,_0x1a0fd2,_0x58deef,_0x2b508f){var _0x35669f=_0x4b280d;return _0x31cf39[_0x35669f(0x62f)](_0x146e29,_0x5185ec,_0x1a0fd2,_0x58deef,_0x2b508f);}};_0x4b280d(0x720)===_0x31cf39[_0x4b280d(0x6db)]?(_0x1bcf58(_0x36a173,-0x3e*0x3+-0x6a*0x4b+-0x823*-0x4,_0x8fd639[_0x4b280d(0x6e6)],_0x4913fb),_0x8fd639[_0x4b280d(0x6cc)](_0x269735,_0x5d79be,-0x5*-0x377+0x1*0x13a1+-0x2448,'f32',_0x292614)):(_0x537d07['textC'+_0x4b280d(0x60a)+'t']=_0x31cf39[_0x4b280d(0x4d4)],setTimeout(function(){var _0x36b197=_0x4b280d;_0x537d07[_0x36b197(0x69a)+_0x36b197(0x60a)+'t']=_0x31cf39['PMgkj'];},0x1220+-0x1cd9+0x1095));}):(_0xd44c27[_0x4d6497(0x773)+'t'](),document['execC'+_0x4d6497(0x735)+'d'](_0x4d6497(0x3f6)),_0x537d07['textC'+'onten'+'t']=_0xed5724[_0x4d6497(0x41d)],setTimeout(function(){var _0x189f13=_0x4d6497;_0x537d07['textC'+_0x189f13(0x60a)+'t']=_0x189f13(0x520)+'logs';},-0x13*-0x102+-0x2*-0x977+-0x2038));}),_0xf08b58=_0x5b72df(_0x40a0d0[_0x1d2f2f(0x55e)],function(){var _0x3bfcc8=_0x1d2f2f,_0x26e25f=new Blob([_0xd06fa9[_0x3bfcc8(0x755)](_0x2eb300)],{'type':_0x3bfcc8(0x1e1)+'plain'}),_0xf43579=document[_0x3bfcc8(0x408)+'eElem'+_0x3bfcc8(0x1e9)]('a');_0xf43579[_0x3bfcc8(0x56a)]=URL['creat'+'eObje'+'ctURL'](_0x26e25f),_0xf43579['downl'+_0x3bfcc8(0x601)]=_0xd06fa9['fCeKO'],_0xf43579[_0x3bfcc8(0x72a)](),setTimeout(function(){var _0x310237=_0x3bfcc8;URL[_0x310237(0x2f7)+_0x310237(0x724)+'ctURL'](_0xf43579[_0x310237(0x56a)]);},-0x2118+0x206+-0x22fa*-0x1);}),_0x9b6731=_0x40a0d0['lfqOa'](_0x5b72df,_0x1d2f2f(0x426)+_0x1d2f2f(0x5e9)+_0x1d2f2f(0x54a)+_0x1d2f2f(0x1dc),function(){var _0x176e38=_0x1d2f2f;if(_0xed5724[_0x176e38(0x24f)]('OAQKX',_0xed5724[_0x176e38(0x42c)]))_0xed5724[_0x176e38(0x6a3)](_0x1764aa);else try{var _0x7c282c=new _0x38d51b(_0x3950a2)[_0x176e38(0x201)+'ield'](_0xcd9446,'i8');return _0x7c282c?_0x7c282c[_0x176e38(0x1a4)]():0x1*-0x1fb7+-0x2142+0x40f9;}catch(_0x1eda11){return-0x186b*0x1+-0x8*-0x2bc+-0x7*-0x5d;}}),_0x22e5e3=_0x5b72df(_0x1d2f2f(0x21b),function(){var _0xa1714b=_0x1d2f2f;_0x461fe5[_0xa1714b(0x37a)][_0xa1714b(0x240)+'h']=0x1345+-0x1a9f+0x75a,_0xd44c27[_0xa1714b(0x604)]=_0x2eb300();});return _0x5d6157['appen'+'d'](_0x537d07,_0xf08b58,_0x9b6731,_0x22e5e3),_0x50bdd5[_0x1d2f2f(0x21c)+'d'](_0xd44c27,_0x5d6157),_0x50bdd5;}else{var _0x1369f2=('6|1|0'+_0x1d2f2f(0x4bf)+'2|3')[_0x1d2f2f(0x66a)]('|'),_0x557faf=-0x4*-0x6a3+0x92b*-0x1+-0x1*0x1161;while(!![]){switch(_0x1369f2[_0x557faf++]){case'0':_0x4fa594['fillS'+'tyle']=_0x1d2f2f(0x4ef)+_0x1d2f2f(0x62c)+'10,11'+_0x1d2f2f(0x5cd);continue;case'1':var _0x17fe97=_0x5d50a7*_0xd06fa9['XBvbt'](_0x3e1825,0x69e+0xe55+-0x148f);continue;case'2':_0x2d1cbc[_0x1d2f2f(0x2e2)+'idth']=0x35*0x72+0x2557*-0x1+0xdbe;continue;case'3':_0x2ae3e4[_0x1d2f2f(0x407)+'eRect'](_0x6b9600['x']-_0x8dcf5a/(-0x2c6+0xe2c+-0xb64),_0xd06fa9[_0x1d2f2f(0x38f)](_0x1aeb90,0x25bd+0x4e2*-0x5+-0xd4d),_0x84c03,-0xf*0x167+-0x1c21+-0xa*-0x4eb);continue;case'4':_0x3c0f81['strok'+_0x1d2f2f(0x2ad)+'e']=_0xd06fa9[_0x1d2f2f(0x21e)];continue;case'5':_0xfdd509[_0x1d2f2f(0x437)+_0x1d2f2f(0x4d1)](_0xd06fa9[_0x1d2f2f(0x415)](_0x3a1dd1['x'],_0x57d02f/(0xd*-0x2d7+-0x257d+0x4a6a)),_0xa8fa43-(-0xce6*-0x1+0x4bf+0xd*-0x15b),_0x17fe97,-0x1b76+-0x1332+-0x74*-0x67);continue;case'6':var _0x3e1825=_0x4f234a[_0x1d2f2f(0x750)](-0x1915*0x1+0x2274+0x1*-0x95f,_0x3e227d[_0x1d2f2f(0x666)](-0xfcd+0x26c9*0x1+-0x1698,_0xd67b20[_0x1d2f2f(0x625)+'h']+_0x32f118[_0x1d2f2f(0x707)+'d']));continue;}break;}}}()),_0x21fa63(_0xb2655f[_0x39c22e(0x215)])])];}_0x483a27[_0x1d6148(0x6ba)+_0x1d6148(0x558)+_0x1d6148(0x203)](..._0x30ca5c());if(Number[_0x1d6148(0x42f)+'ite'](_0x114a3e['x'])){if(_0xb2655f['jFYyq']('gtTQP',_0x1d6148(0x45d))){if(_0x3d688f[_0x1d6148(0x4e5)+'t'][_0x1d6148(0x2ff)+'st']('butto'+'n,\x20in'+_0x1d6148(0x4f5)))return;var _0x33b79b=_0x563b62[_0x1d6148(0x2e9)+'undin'+_0x1d6148(0x73e)+_0x1d6148(0x77f)+'t']();_0x588d69=[_0x59cb0a['clien'+'tX']-_0x33b79b[_0x1d6148(0x38d)],_0x596b9a['clien'+'tY']-_0x33b79b[_0x1d6148(0x23e)]],_0x13255b[_0x1d6148(0x30d)+_0x1d6148(0x273)+_0x1d6148(0x632)+'re'](_0x11c9cf['point'+_0x1d6148(0x348)]),_0x319602['class'+'List'][_0x1d6148(0x40f)](_0x40a0d0[_0x1d6148(0x633)]);}else _0x59d622['style'][_0x1d6148(0x38d)]=_0x114a3e['x']+'px',_0x59d622['style'][_0x1d6148(0x23e)]=_0x114a3e['y']+'px',_0x59d622[_0x1d6148(0x723)][_0x1d6148(0x1db)]=_0xb2655f[_0x1d6148(0x1fc)],_0x59d622[_0x1d6148(0x723)]['botto'+'m']=_0xb2655f[_0x1d6148(0x1fc)];}return _0x59d622;}function _0x2eb300(){var _0x4e44b9=_0x59914c,_0x416c52=[_0xb2655f[_0x4e44b9(0x63d)],_0xb2655f[_0x4e44b9(0x639)](_0x4e44b9(0x691)+'\x20',location[_0x4e44b9(0x2da)+'ame'])+location[_0x4e44b9(0x299)+'ame'],_0xb2655f['adMFz'](_0xb2655f['hjeZY'](_0x4e44b9(0x1d4)+':\x20'+(window[_0x4e44b9(0x23e)]!==window['self']?_0xb2655f['oDqxX']:_0xb2655f['NOKSL']),_0xb2655f['npYoD']),(navigator[_0x4e44b9(0x253)+_0x4e44b9(0x6d5)]||'')[_0x4e44b9(0x2df)](0x2316+-0x19c7*0x1+-0x94f,0x22b6+0xec2+-0xc4*0x40)),_0xb2655f[_0x4e44b9(0x3c4)](_0xb2655f['tfHBw'](_0xb2655f['SEMSN'](_0xb2655f[_0x4e44b9(0x2e0)](_0x4e44b9(0x6cf)+_0x4e44b9(0x38b)+_0x4e44b9(0x1d3),!!window['unity'+_0x4e44b9(0x38b)+_0x4e44b9(0x31f)]),_0xb2655f['VzzdN'])+!!window['Unity'+_0x4e44b9(0x745)+'dkit'],_0x4e44b9(0x608)+_0x4e44b9(0x5f5)+'e:\x20'),_0x476cc9[_0x4e44b9(0x5be)+_0x4e44b9(0x262)]),_0xb2655f[_0x4e44b9(0x236)](_0xb2655f[_0x4e44b9(0x29e)](_0xb2655f['VgLTz'](_0xb2655f[_0x4e44b9(0x308)](_0x4e44b9(0x4b6)+':\x20'+_0x43f45c[_0x4e44b9(0x4b6)+'Ok']+'/',_0x43f45c[_0x4e44b9(0x4b6)+'Total'])+_0xb2655f[_0x4e44b9(0x286)],_0xb2655f['Bncsu']),_0x43f45c['state']?'ok':'—'),_0xb2655f['Pkbbg'])+_0x43f45c[_0x4e44b9(0x271)+'rs'],_0xb2655f[_0x4e44b9(0x4ba)](_0xb2655f[_0x4e44b9(0x1bc)](_0xb2655f[_0x4e44b9(0x71d)](_0xb2655f[_0x4e44b9(0x75a)](_0xb2655f['tgSWT'](_0xb2655f[_0x4e44b9(0x6fb)](_0xb2655f[_0x4e44b9(0x49d)](_0xb2655f['hFHia'](_0xb2655f[_0x4e44b9(0x6f6)](_0x4e44b9(0x642)+_0x4e44b9(0x5d6)+_0x4e44b9(0x3c0)+_0x4e44b9(0x26d)+_0x24c979(_0x145f10),_0x4e44b9(0x670))+_0xb2655f[_0x4e44b9(0x606)](_0x24c979,_0x276d64),_0xb2655f[_0x4e44b9(0x6b0)]),_0x24c979(_0x1d842f)),_0x4e44b9(0x2b4)+_0x4e44b9(0x315)+':')+_0xb2655f[_0x4e44b9(0x586)](_0x24c979,_0xad8e09)+('\x20char'+_0x4e44b9(0x19e)),_0x24c979(_0x5e2a79)),_0x4e44b9(0x355))+_0x24c979(_0x6bb492)+_0xb2655f[_0x4e44b9(0x31b)]+_0x24c979(_0x3ff1d0)+_0xb2655f['LMhft'],_0xb2655f[_0x4e44b9(0x340)](_0x24c979,_0x29b936))+('\x20cont'+'rolle'+'r:'),_0xb2655f['zTwZL'](_0x24c979,_0x2420ea))+_0xb2655f['NBKUf'],_0x24c979(_0x3aeb74)),_0xb2655f['XNhHm']('setti'+'ngs:\x20',JSON[_0x4e44b9(0x51e)+'gify'](_0x476cc9)),_0x43f45c[_0x4e44b9(0x663)+_0x4e44b9(0x38a)]?_0xb2655f['IPHUB'](_0x4e44b9(0x663)+_0x4e44b9(0x523)+'\x20',_0x43f45c['lastE'+_0x4e44b9(0x38a)]):'',_0xb2655f[_0x4e44b9(0x5ff)](_0xb2655f['UQtzq']+_0x461fe5[_0x4e44b9(0x37a)]['lengt'+'h'],'\x20entr'+'ies)\x20'+'═══'),''][_0x4e44b9(0x2ec)]('\x0a');return _0x416c52+_0x461fe5['logs'][_0x4e44b9(0x2ec)]('\x0a');}function _0x1764aa(){var _0x393f75=_0x59914c;if('rMxyx'!==_0xb2655f['DDynl'])try{if(_0xb2655f[_0x393f75(0x6fa)](_0x393f75(0x61a),_0xb2655f[_0x393f75(0x6c1)]))_0x317b69['add'](_0x23187b,_0x584b52);else{var _0x21a675=console['log'];(function(_0x5a5cab){var _0xb70454=_0x393f75;for(var _0x4ee1a9=0x1f27+-0x6bf*0x2+-0x11a9*0x1;_0x4ee1a9<_0x5a5cab[_0xb70454(0x240)+'h'];_0x4ee1a9++)_0x21a675[_0xb70454(0x376)](console,_0x5a5cab[_0x4ee1a9]);}(_0x2eb300()[_0x393f75(0x66a)]('\x0a')));}}catch(_0x53832a){}else _0x41eb4d[_0x393f75(0x584)]===_0x393f75(0x6d9)+'t'&&(_0x5f5252['preve'+_0x393f75(0x4f4)+_0x393f75(0x3df)](),_0xb2655f['AsDni'](_0x39a8b9)),_0xb2655f['JqHfT'](_0x145a93['code'],'F6')&&(_0x4da789['preve'+_0x393f75(0x4f4)+'ault'](),_0x4b0a47());}function _0x22101d(){var _0x20e8a1=_0x59914c,_0x39971b={'xfeix':function(_0x2b2748,_0x3d0786){return _0x2b2748+_0x3d0786;}};try{if(_0xb2655f['Cofxy'](_0xb2655f[_0x20e8a1(0x2bf)],_0xb2655f[_0x20e8a1(0x2bf)]))try{_0x3633dd(_0x20e8a1(0x4cd)+'w.one'+_0x20e8a1(0x38a),_0x39971b['xfeix'](_0x39971b[_0x20e8a1(0x526)]((_0x5b1c8b[_0x20e8a1(0x611)+'ge']||'?')+'\x20@',_0x3cd9e3(_0x57e1e7['filen'+_0x20e8a1(0x1aa)]||'')['split']('/')[_0x20e8a1(0x3fb)]())+':',_0x342ae5['linen'+'o']||'?'));}catch(_0x13a37e){}else localStorage['setIt'+'em'](_0x20e8a1(0x345)+_0x20e8a1(0x46c)+_0x20e8a1(0x6d2)+'1',JSON[_0x20e8a1(0x51e)+'gify'](_0x114a3e));}catch(_0x32dfa4){}}var _0x1f498c=null;function _0x28b81f(_0xcc250b){var _0x387b2d=_0x59914c;_0x26cb08=_0xcc250b;if(!_0x1f498c){if(_0xb2655f[_0x387b2d(0x76a)](_0x387b2d(0x6f7),_0xb2655f['oIpbk'])){if(!_0x2aa56c)return null;var _0x58c364=_0xb2655f[_0x387b2d(0x579)](_0x1b1db7,_0x3697dc,-0x1b6f+0x1*-0x30e+0x1ea1);if(!_0x58c364||_0xb2655f[_0x387b2d(0x5c3)](_0x58c364['x'],-0x1c19*-0x1+-0x9c4+-0x1255)&&_0x58c364['y']===-0x35*-0xbb+0x26f1+-0x8e*0x8c&&_0xb2655f['hMOtX'](_0x58c364['z'],0x3*-0x1cd+0xd4*-0x11+0x137b))return null;return{'x':_0x58c364['x'],'y':_0xb2655f['ytqPb'](_0x58c364['y'],_0xb2655f['vhMJm'](_0x416e83,_0xe291ed[_0x387b2d(0x19d)+_0x387b2d(0x778)])||0x643+0x1*-0xde7+0x7a5+0.6000000000000001),'z':_0x58c364['z']};}else{var _0x33e2ac=(_0x387b2d(0x480)+_0x387b2d(0x4bc)+'3')['split']('|'),_0x26aa8f=0x18b3*0x1+0x2677*0x1+-0x3f2a;while(!![]){switch(_0x33e2ac[_0x26aa8f++]){case'0':var _0x5bed1a=document['creat'+'eElem'+_0x387b2d(0x1e9)](_0xb2655f[_0x387b2d(0x705)]);continue;case'1':_0x24ffbe['appen'+_0x387b2d(0x1bb)+'d'](_0x1f498c);continue;case'2':_0x1f498c=_0x3d6eb0();continue;case'3':requestAnimationFrame(()=>_0x1f498c[_0x387b2d(0x712)+_0x387b2d(0x700)][_0x387b2d(0x40f)](_0x387b2d(0x5c8)));continue;case'4':_0x24ffbe['appen'+'dChil'+'d'](_0x5bed1a);continue;case'5':_0x5bed1a['textC'+'onten'+'t']=_0x5ba2d0;continue;}break;}}}_0x1f498c[_0x387b2d(0x712)+'List']['toggl'+'e'](_0x387b2d(0x5c8),_0xcc250b);if(_0xcc250b)_0xb2655f['namDp'](_0x34d881);}function _0x3c6fe4(){_0x28b81f(!_0x26cb08);}function _0x34d881(){var _0xf6d8ee=_0x59914c;if(!_0x1f498c)return;var _0x1bad3c=_0x1f498c[_0xf6d8ee(0x3f4)+_0xf6d8ee(0x589)+_0xf6d8ee(0x25c)](_0xf6d8ee(0x347)+_0xf6d8ee(0x31a));if(_0x1bad3c){var _0x272fba=_0xb2655f[_0xf6d8ee(0x329)](_0x3d6eb0),_0x2beb0e=_0x272fba[_0xf6d8ee(0x3f4)+'Selec'+_0xf6d8ee(0x25c)](_0xf6d8ee(0x347)+_0xf6d8ee(0x31a))['child'+_0xf6d8ee(0x1bd)];_0x1bad3c[_0xf6d8ee(0x6ba)+_0xf6d8ee(0x558)+'ldren'](..._0x2beb0e);if(Number[_0xf6d8ee(0x42f)+_0xf6d8ee(0x48b)](_0x114a3e['x'])){if(_0xf6d8ee(0x57d)!==_0xb2655f[_0xf6d8ee(0x758)])_0x1f498c['style']['left']=_0x114a3e['x']+'px',_0x1f498c['style']['top']=_0xb2655f['eimKM'](_0x114a3e['y'],'px');else return null;}}}window['addEv'+'entLi'+'stene'+'r'](_0xb2655f['vNLFj'],_0xa3b1ee=>{var _0x13ad6a=_0x59914c;_0xb2655f[_0x13ad6a(0x45b)](_0xa3b1ee[_0x13ad6a(0x584)],'Inser'+'t')&&(_0xa3b1ee[_0x13ad6a(0x65e)+_0x13ad6a(0x4f4)+_0x13ad6a(0x3df)](),_0xb2655f['KIYmp'](_0x3c6fe4)),_0xa3b1ee['code']==='F6'&&(_0xa3b1ee[_0x13ad6a(0x65e)+_0x13ad6a(0x4f4)+_0x13ad6a(0x3df)](),_0xb2655f[_0x13ad6a(0x39d)](_0x1764aa));},!![]);var _0x2d0453=document['creat'+_0x59914c(0x26f)+'ent'](_0x59914c(0x3e6));_0x2d0453['style'][_0x59914c(0x409)+'xt']=_0xb2655f[_0x59914c(0x561)],_0x2d0453[_0x59914c(0x5e4)+_0x59914c(0x247)]=_0x59914c(0x1de)+'viewB'+_0x59914c(0x563)+'\x200\x2024'+_0x59914c(0x746)+'<defs'+_0x59914c(0x62a)+'earGr'+_0x59914c(0x255)+_0x59914c(0x5fe)+'\x22sk-g'+_0x59914c(0x66c)+'x1=\x224'+'\x22\x20y1='+_0x59914c(0x614)+_0x59914c(0x732)+_0x59914c(0x748)+_0x59914c(0x3cd)+_0x59914c(0x474)+_0x59914c(0x243)+_0x59914c(0x1b2)+_0x59914c(0x331)+'paceO'+_0x59914c(0x336)+'><sto'+_0x59914c(0x322)+'set=\x22'+_0x59914c(0x50d)+'op-co'+_0x59914c(0x24b)+'#ffe0'+_0x59914c(0x512)+_0x59914c(0x554)+_0x59914c(0x2c3)+_0x59914c(0x59b)+_0x59914c(0x221)+_0x59914c(0x2be)+_0x59914c(0x680)+'=\x22#ff'+'b3c6\x22'+_0x59914c(0x235)+_0x59914c(0x2cc)+'fset='+'\x221\x22\x20s'+'top-c'+_0x59914c(0x68b)+_0x59914c(0x25a)+_0x59914c(0x560)+_0x59914c(0x3a9)+_0x59914c(0x4bb)+'radie'+_0x59914c(0x401)+_0x59914c(0x344)+'<path'+'\x20d=\x22M'+_0x59914c(0x4b0)+'c-1.5'+_0x59914c(0x55c)+'4-4.5'+_0x59914c(0x20d)+_0x59914c(0x74f)+_0x59914c(0x325)+'8-4.5'+'\x204-4.'+_0x59914c(0x682)+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x59914c(0x5a3)+_0x59914c(0x249)+_0x59914c(0x759)+_0x59914c(0x3d0)+_0x59914c(0x6e8)+_0x59914c(0x71c)+_0x59914c(0x728)+_0x59914c(0x716)+_0x59914c(0x4ea)+'strok'+'e-wid'+'th=\x222'+_0x59914c(0x6e8)+'oke-l'+_0x59914c(0x60f)+_0x59914c(0x5c4)+_0x59914c(0x4af)+_0x59914c(0x407)+'e-lin'+_0x59914c(0x49b)+_0x59914c(0x596)+_0x59914c(0x1a5)+'<path'+'\x20d=\x22M'+'12\x203v'+_0x59914c(0x418)+_0x59914c(0x1c5)+'5\x200-2'+_0x59914c(0x5ca)+_0x59914c(0x63c)+_0x59914c(0x4d7)+_0x59914c(0x69d)+'5\x200\x202'+'.5\x201\x20'+_0x59914c(0x63c)+_0x59914c(0x358)+_0x59914c(0x21f)+'none\x22'+_0x59914c(0x392)+_0x59914c(0x3cb)+'rl(#s'+_0x59914c(0x5b4)+'d)\x22\x20s'+_0x59914c(0x55b)+_0x59914c(0x3e5)+'h=\x221.'+'5\x22\x20st'+_0x59914c(0x68a)+_0x59914c(0x58e)+_0x59914c(0x5e3)+_0x59914c(0x2f0)+'/><ci'+_0x59914c(0x3a6)+_0x59914c(0x346)+_0x59914c(0x479)+'=\x2210\x22'+_0x59914c(0x779)+'.5\x22\x20f'+_0x59914c(0x21f)+_0x59914c(0x374)+_0x59914c(0x2e7)+_0x59914c(0x1bf)+'>',_0x2d0453[_0x59914c(0x1c8)]=_0xb2655f[_0x59914c(0x208)],_0x2d0453['onmou'+_0x59914c(0x370)+'er']=()=>_0x2d0453[_0x59914c(0x723)]['opaci'+'ty']='1',_0x2d0453[_0x59914c(0x3fe)+_0x59914c(0x27c)+'ve']=()=>_0x2d0453[_0x59914c(0x723)][_0x59914c(0x6e5)+'ty']=_0x59914c(0x69c),_0x2d0453[_0x59914c(0x6af)+'ck']=_0x149b7e=>{var _0x3dcfc6=_0x59914c;_0x149b7e[_0x3dcfc6(0x702)+_0x3dcfc6(0x545)+'ation'](),_0x3c6fe4();};var _0x5ba2d0=_0x59914c(0x4b2)+'ost\x20{'+'\x20all:'+'\x20init'+_0x59914c(0x24c)+'}\x0a\x20\x20*'+_0x59914c(0x2ce)+'x-siz'+_0x59914c(0x672)+'borde'+_0x59914c(0x531)+_0x59914c(0x1cc)+_0x59914c(0x422)+'0;\x20fo'+_0x59914c(0x68d)+'mily:'+'\x20\x22Int'+_0x59914c(0x55d)+'\x22Sego'+_0x59914c(0x445)+',\x20sys'+'tem-u'+_0x59914c(0x383)+'ns-se'+_0x59914c(0x4e9)+_0x59914c(0x6bb)+'mn-pa'+_0x59914c(0x5a4)+'\x20posi'+_0x59914c(0x1f1)+_0x59914c(0x34a)+'lute;'+_0x59914c(0x3dc)+_0x59914c(0x75f)+_0x59914c(0x3dd)+'ottom'+_0x59914c(0x54b)+'x;\x20wi'+'dth:\x20'+_0x59914c(0x4c8)+_0x59914c(0x460)+_0x59914c(0x2a7)+_0x59914c(0x360)+_0x59914c(0x26c)+'8px))'+';\x20max'+_0x59914c(0x441)+_0x59914c(0x4e0)+'in(48'+_0x59914c(0x48f)+_0x59914c(0x6e1)+_0x59914c(0x5f1)+'\x20-\x2048'+_0x59914c(0x4a9)+'\x0a\x20\x20\x20\x20'+_0x59914c(0x1d9)+_0x59914c(0x6c0)+_0x59914c(0x47a)+'gap:\x20'+_0x59914c(0x5b8)+'\x20padd'+'ing:\x20'+'10px;'+_0x59914c(0x6a9)+'er-ra'+'dius:'+'\x2022px'+_0x59914c(0x618)+_0x59914c(0x4f2)+_0x59914c(0x2bd)+'s:\x20au'+'to;\x0a\x20'+'\x20\x20\x20ba'+_0x59914c(0x4e7)+'und:\x20'+_0x59914c(0x4ef)+'24,17'+',21,.'+_0x59914c(0x4d9)+'backd'+'rop-f'+'ilter'+_0x59914c(0x266)+_0x59914c(0x3d4)+_0x59914c(0x260)+_0x59914c(0x3a8)+_0x59914c(0x686)+_0x59914c(0x593)+'webki'+_0x59914c(0x5eb)+_0x59914c(0x67f)+_0x59914c(0x1be)+'er:\x20b'+'lur(2'+'2px)\x20'+'satur'+_0x59914c(0x4e6)+'50%);'+_0x59914c(0x29f)+_0x59914c(0x23f)+_0x59914c(0x6ca)+':\x200\x200'+'\x200\x201p'+'x\x20rgb'+_0x59914c(0x574)+_0x59914c(0x58b)+'255,.'+'06),\x20'+'inset'+_0x59914c(0x22c)+_0x59914c(0x449)+_0x59914c(0x622)+_0x59914c(0x496)+_0x59914c(0x482)+',.05)'+',\x200\x203'+'0px\x208'+'0px\x20r'+_0x59914c(0x6a5)+_0x59914c(0x296)+_0x59914c(0x5d9)+'\x0a\x20\x20\x20\x20'+_0x59914c(0x6e5)+_0x59914c(0x212)+';\x20tra'+_0x59914c(0x257)+_0x59914c(0x1d5)+_0x59914c(0x1ec)+_0x59914c(0x655)+'8px);'+_0x59914c(0x4d2)+_0x59914c(0x2b7)+_0x59914c(0x30f)+':\x20non'+'e;\x20tr'+'ansit'+_0x59914c(0x55a)+_0x59914c(0x6e5)+_0x59914c(0x5d5)+_0x59914c(0x760)+_0x59914c(0x578)+'ransf'+_0x59914c(0x3db)+'45s\x20c'+'ubic-'+_0x59914c(0x621)+_0x59914c(0x648)+_0x59914c(0x4a1)+_0x59914c(0x5dd)+'\x0a\x20\x20\x20\x20'+_0x59914c(0x680)+_0x59914c(0x51f)+_0x59914c(0x248)+_0x59914c(0x1c2)+'-size'+_0x59914c(0x73c)+'x;\x20}\x0a'+_0x59914c(0x552)+_0x59914c(0x220)+'l.sho'+'wn\x20{\x20'+_0x59914c(0x6e5)+'ty:\x201'+_0x59914c(0x4b4)+_0x59914c(0x257)+'m:\x20no'+_0x59914c(0x457)+_0x59914c(0x2b3)+_0x59914c(0x543)+_0x59914c(0x654)+_0x59914c(0x72e)+_0x59914c(0x272)+'.mn-p'+_0x59914c(0x525)+'sk-dr'+'aggin'+_0x59914c(0x43f)+_0x59914c(0x1f7)+_0x59914c(0x1f1)+_0x59914c(0x5fa)+';\x20}\x0a\x20'+_0x59914c(0x6c7)+'side\x20'+_0x59914c(0x652)+_0x59914c(0x32b)+_0x59914c(0x64b)+';\x20fle'+'x-dir'+_0x59914c(0x529)+'n:\x20co'+'lumn;'+'\x20alig'+'n-ite'+_0x59914c(0x1f5)+'enter'+';\x20gap'+':\x204px'+_0x59914c(0x609)+_0x59914c(0x3b3)+_0x59914c(0x391)+(_0x59914c(0x571)+_0x59914c(0x5fa)+_0x59914c(0x1e4)+'ding:'+'\x2012px'+_0x59914c(0x3e0)+_0x59914c(0x5bc)+_0x59914c(0x2b1)+_0x59914c(0x472)+'6px;\x0a'+'\x20\x20\x20\x20b'+_0x59914c(0x585)+'ound:'+'\x20rgba'+_0x59914c(0x68e)+_0x59914c(0x719)+_0x59914c(0x424)+_0x59914c(0x4fa)+_0x59914c(0x23f)+'hadow'+_0x59914c(0x75d)+'et\x200\x20'+_0x59914c(0x6cd)+_0x59914c(0x279)+'ba(25'+'5,255'+',255,'+'.05);'+_0x59914c(0x272)+'.mn-l'+'ogo\x20{'+'\x20disp'+_0x59914c(0x6c6)+'grid;'+_0x59914c(0x1e5)+'e-ite'+'ms:\x20c'+'enter'+_0x59914c(0x609)+_0x59914c(0x3bf)+_0x59914c(0x391)+'heigh'+_0x59914c(0x293)+_0x59914c(0x4fb)+'\x0a\x20\x20.m'+_0x59914c(0x36c)+_0x59914c(0x4c6)+_0x59914c(0x333)+_0x59914c(0x3f9)+'25px;'+_0x59914c(0x502)+'ht:\x202'+_0x59914c(0x222)+_0x59914c(0x341)+'low:\x20'+_0x59914c(0x4ca)+'le;\x20f'+'ilter'+_0x59914c(0x313)+'p-sha'+'dow(0'+_0x59914c(0x541)+_0x59914c(0x4cc)+_0x59914c(0x574)+',107,'+_0x59914c(0x1b6)+_0x59914c(0x5f6)+_0x59914c(0x2a2)+'hadow'+'(0\x200\x20'+_0x59914c(0x22a)+'rgba('+_0x59914c(0x62c)+'07,15'+_0x59914c(0x269)+_0x59914c(0x357)+'\x20\x20.mn'+_0x59914c(0x6fd)+'\x20{\x20fl'+_0x59914c(0x58a)+';\x20min'+_0x59914c(0x3e5)+'h:\x200;'+_0x59914c(0x6f0)+'lay:\x20'+_0x59914c(0x73d)+_0x59914c(0x64b)+_0x59914c(0x42a)+'ction'+_0x59914c(0x764)+'umn;\x20'+_0x59914c(0x6bb)+'mn-to'+'p\x20{\x20d'+_0x59914c(0x3b4)+'y:\x20fl'+_0x59914c(0x226)+'lign-'+'items'+_0x59914c(0x6a2)+'ter;\x20'+_0x59914c(0x6f9)+_0x59914c(0x4dc)+'\x20padd'+'ing:\x20'+'6px\x206'+_0x59914c(0x2b2)+_0x59914c(0x6b3)+'ursor'+':\x20gra'+'b;\x20us'+'er-se'+_0x59914c(0x56c)+'\x20none'+_0x59914c(0x4a6)+'ch-ac'+_0x59914c(0x1f1)+_0x59914c(0x5fa)+_0x59914c(0x683)+'\x20.mn-'+_0x59914c(0x41c)+'ont-s'+'ize:\x20'+'17px;'+_0x59914c(0x1c2)+_0x59914c(0x353)+'ht:\x206'+'50;\x20l'+'etter'+_0x59914c(0x282)+_0x59914c(0x672)+'-.01e'+_0x59914c(0x459)+'\x20\x20.mn'+_0x59914c(0x379)+'e\x20{\x20d'+'ispla'+_0x59914c(0x623)+'id;\x20p'+'lace-'+_0x59914c(0x436)+':\x20cen'+'ter;\x20'+_0x59914c(0x2a9)+_0x59914c(0x546)+_0x59914c(0x27f)+'ight:'+_0x59914c(0x365)+';\x20bor'+_0x59914c(0x628)+'0;\x20bo'+'rder-'+_0x59914c(0x573)+_0x59914c(0x5ac)+_0x59914c(0x28b)+_0x59914c(0x4e7)+'und:\x20'+_0x59914c(0x772)+'paren'+_0x59914c(0x786)+_0x59914c(0x3d7)+_0x59914c(0x444)+'it;\x20o'+_0x59914c(0x766)+_0x59914c(0x35e)+_0x59914c(0x677)+_0x59914c(0x306)+'\x20poin'+_0x59914c(0x34b)+_0x59914c(0x772)+_0x59914c(0x6b5)+_0x59914c(0x2a0)+'city\x20'+'.2s,\x20'+_0x59914c(0x380)+_0x59914c(0x31c)+_0x59914c(0x2a8)+_0x59914c(0x272)+_0x59914c(0x347)+'lose:'+'hover'+_0x59914c(0x37f)+_0x59914c(0x715)+_0x59914c(0x363)+_0x59914c(0x380)+_0x59914c(0x31c)+':\x20rgb'+_0x59914c(0x574)+',255,'+'255,.'+_0x59914c(0x3a1)+_0x59914c(0x6bb)+'mn-cl'+_0x59914c(0x1a7)+'vg\x20{\x20'+'width'+_0x59914c(0x337)+_0x59914c(0x27f)+'ight:'+'\x2014px')+(';\x20fil'+'l:\x20no'+'ne;\x20s'+'troke'+':\x20cur'+'rentC'+_0x59914c(0x4a4)+'\x20stro'+_0x59914c(0x5d4)+_0x59914c(0x3f9)+_0x59914c(0x5ea)+'roke-'+_0x59914c(0x58e)+_0x59914c(0x3ab)+_0x59914c(0x785)+_0x59914c(0x272)+_0x59914c(0x347)+_0x59914c(0x3b2)+_0x59914c(0x64b)+_0x59914c(0x363)+'min-h'+'eight'+':\x200;\x20'+'overf'+'low-y'+_0x59914c(0x4c9)+_0x59914c(0x56f)+'splay'+_0x59914c(0x5b6)+_0x59914c(0x6d4)+_0x59914c(0x2e8)+'mplat'+_0x59914c(0x1e3)+'umns:'+_0x59914c(0x65a)+_0x59914c(0x2c7)+_0x59914c(0x5b2)+_0x59914c(0x1e4)+_0x59914c(0x3bc)+'\x200\x204p'+_0x59914c(0x36b)+'\x200;\x20}'+'\x0a\x20\x20.s'+'k-car'+_0x59914c(0x710)+_0x59914c(0x5bc)+_0x59914c(0x2b1)+_0x59914c(0x472)+_0x59914c(0x391)+_0x59914c(0x380)+_0x59914c(0x31c)+':\x20rgb'+_0x59914c(0x574)+',255,'+_0x59914c(0x587)+'025);'+'\x20box-'+_0x59914c(0x40e)+'w:\x20in'+'set\x200'+'\x200\x200\x20'+'1px\x20r'+'gba(2'+_0x59914c(0x496)+'5,255'+_0x59914c(0x1d7)+_0x59914c(0x4b4)+'nsiti'+_0x59914c(0x3bb)+_0x59914c(0x372)+_0x59914c(0x5fc)+_0x59914c(0x57f)+'\x20back'+'groun'+'d\x20.25'+'s;\x20an'+_0x59914c(0x569)+_0x59914c(0x207)+_0x59914c(0x50f)+_0x59914c(0x241)+_0x59914c(0x5b5)+'both;'+'\x20}\x0a\x20\x20'+_0x59914c(0x3b5)+_0x59914c(0x1fb)+_0x59914c(0x3fd)+'ackgr'+_0x59914c(0x3fa)+_0x59914c(0x202)+'(255,'+_0x59914c(0x719)+_0x59914c(0x424)+'4);\x20b'+_0x59914c(0x372)+_0x59914c(0x77a)+'\x20inse'+'t\x200\x200'+_0x59914c(0x22c)+_0x59914c(0x4cc)+_0x59914c(0x574)+_0x59914c(0x5f9)+'157,.'+'28),\x20'+'0\x200\x200'+'\x201px\x20'+'rgba('+_0x59914c(0x62c)+_0x59914c(0x76b)+'7,.06'+'),\x200\x20'+'8px\x203'+'0px\x20r'+'gba(2'+'55,10'+_0x59914c(0x668)+_0x59914c(0x3b9)+_0x59914c(0x683)+'\x20.sk-'+'card-'+_0x59914c(0x72f)+_0x59914c(0x652)+_0x59914c(0x32b)+'\x20flex'+_0x59914c(0x567)+_0x59914c(0x74d)+'ems:\x20'+_0x59914c(0x6a7)+'r;\x20ga'+_0x59914c(0x678)+_0x59914c(0x4a5)+_0x59914c(0x27d)+_0x59914c(0x6e9)+_0x59914c(0x46e)+'x;\x20}\x0a'+_0x59914c(0x28d)+_0x59914c(0x69f)+'-titl'+'e\x20{\x20f'+_0x59914c(0x352)+_0x59914c(0x5c7)+'n-wid'+'th:\x200'+_0x59914c(0x683)+_0x59914c(0x53e)+_0x59914c(0x4e4)+_0x59914c(0x1c8)+_0x59914c(0x392)+'ng\x20{\x20'+'font-'+_0x59914c(0x2de)+'\x2013px'+_0x59914c(0x5f0)+_0x59914c(0x767)+'ght:\x20'+_0x59914c(0x20f)+_0x59914c(0x680)+':\x20rgb'+'a(246'+_0x59914c(0x1ff)+'242,.'+'45);\x20'+'trans'+_0x59914c(0x6b5)+_0x59914c(0x764)+_0x59914c(0x2e5)+_0x59914c(0x65b)+'\x20\x20.sk'+'-card'+'.on\x20.'+_0x59914c(0x5df)+_0x59914c(0x53c)+_0x59914c(0x51b)+_0x59914c(0x23d)+'\x20{\x20co'+'lor:\x20'+'#fff0'+_0x59914c(0x484)+'\x0a\x20\x20.s'+_0x59914c(0x5b0)+_0x59914c(0x312)+_0x59914c(0x4c3)+'ng:\x200'+_0x59914c(0x59d)+_0x59914c(0x5b2)+_0x59914c(0x683)+_0x59914c(0x53e)+'ctl\x20{'+_0x59914c(0x6f0)+'lay:\x20'+_0x59914c(0x73d)+_0x59914c(0x516)+_0x59914c(0x1f0)+_0x59914c(0x1f5)+_0x59914c(0x488)+_0x59914c(0x2f2)+':\x208px'+';\x20pad'+_0x59914c(0x3bc)+'\x204px\x20'+_0x59914c(0x2bb))+(_0x59914c(0x56e)+_0x59914c(0x25d)+_0x59914c(0x68f)+_0x59914c(0x683)+_0x59914c(0x53e)+_0x59914c(0x6bc)+'\x20{\x20fl'+_0x59914c(0x58a)+_0x59914c(0x47e)+_0x59914c(0x25f)+'gba(2'+_0x59914c(0x527)+'8,242'+_0x59914c(0x489)+_0x59914c(0x683)+_0x59914c(0x53e)+_0x59914c(0x224)+_0x59914c(0x6b7)+_0x59914c(0x744)+_0x59914c(0x47f)+'elati'+_0x59914c(0x463)+_0x59914c(0x63e)+_0x59914c(0x1ce)+_0x59914c(0x481)+_0x59914c(0x61f)+_0x59914c(0x4c0)+_0x59914c(0x6a9)+'er:\x200'+_0x59914c(0x3bd)+'der-r'+_0x59914c(0x23b)+':\x2099p'+_0x59914c(0x28b)+'ckgro'+'und:\x20'+_0x59914c(0x4ef)+_0x59914c(0x719)+'55,25'+'5,.07'+_0x59914c(0x432)+'rsor:'+_0x59914c(0x4d2)+_0x59914c(0x34b)+'flex:'+'\x20none'+_0x59914c(0x4b4)+_0x59914c(0x5ba)+_0x59914c(0x3bb)+'ackgr'+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20.'+_0x59914c(0x6b8)+_0x59914c(0x4e8)+_0x59914c(0x66f)+_0x59914c(0x464)+_0x59914c(0x60a)+'t:\x20\x22\x22'+';\x20pos'+'ition'+_0x59914c(0x1b3)+_0x59914c(0x2bc)+_0x59914c(0x294)+_0x59914c(0x2a5)+';\x20lef'+_0x59914c(0x681)+_0x59914c(0x687)+_0x59914c(0x3f9)+_0x59914c(0x4f8)+_0x59914c(0x275)+_0x59914c(0x67c)+_0x59914c(0x6de)+_0x59914c(0x46b)+'radiu'+_0x59914c(0x491)+'%;\x20ba'+_0x59914c(0x4e7)+_0x59914c(0x33a)+'rgba('+_0x59914c(0x719)+_0x59914c(0x496)+_0x59914c(0x64d)+_0x59914c(0x3aa)+_0x59914c(0x2f1)+'ion:\x20'+_0x59914c(0x71e)+_0x59914c(0x40c)+_0x59914c(0x380)+_0x59914c(0x31c)+'\x20.2s,'+_0x59914c(0x5ed)+_0x59914c(0x40e)+_0x59914c(0x742)+';\x20}\x0a\x20'+'\x20.sk-'+_0x59914c(0x224)+_0x59914c(0x2d0)+'a-che'+'cked='+_0x59914c(0x291)+_0x59914c(0x53b)+_0x59914c(0x380)+'round'+_0x59914c(0x74b)+_0x59914c(0x574)+',107,'+_0x59914c(0x1b6)+'25);\x20'+_0x59914c(0x6bb)+'sk-sw'+'itch['+_0x59914c(0x1b5)+_0x59914c(0x787)+'ed=\x22t'+'rue\x22]'+_0x59914c(0x26e)+'er\x20{\x20'+_0x59914c(0x71a)+_0x59914c(0x3a7)+';\x20bac'+'kgrou'+_0x59914c(0x5ce)+'ff6b9'+_0x59914c(0x2c1)+'x-sha'+'dow:\x20'+_0x59914c(0x320)+_0x59914c(0x244)+_0x59914c(0x696)+';\x20}\x0a\x20'+'\x20.sk-'+_0x59914c(0x60e)+_0x59914c(0x769)+_0x59914c(0x4b1)+':\x20fle'+'x;\x20al'+'ign-i'+'tems:'+'\x20cent'+'er;\x20g'+_0x59914c(0x615)+_0x59914c(0x4fb)+'\x0a\x20\x20.s'+_0x59914c(0x1a8)+_0x59914c(0x70b)+_0x59914c(0x736)+_0x59914c(0x5d2)+_0x59914c(0x64c)+'ance:'+_0x59914c(0x5fa)+';\x20app'+'earan'+_0x59914c(0x73b)+_0x59914c(0x4ed)+_0x59914c(0x2a9)+':\x2090p'+_0x59914c(0x27f)+'ight:'+_0x59914c(0x52c)+_0x59914c(0x369)+_0x59914c(0x1e8)+'d:\x20tr'+_0x59914c(0x43c)+'rent;'+'\x20}\x0a\x20\x20'+_0x59914c(0x5c0)+'lider'+_0x59914c(0x550)+_0x59914c(0x662)+'slide'+_0x59914c(0x559)+_0x59914c(0x518)+_0x59914c(0x4a0)+_0x59914c(0x2eb)+_0x59914c(0x35c)+_0x59914c(0x74e)+_0x59914c(0x3bd)+_0x59914c(0x1ae)+_0x59914c(0x23b)+_0x59914c(0x74e)+_0x59914c(0x6f8)+'kgrou'+_0x59914c(0x1f2)+_0x59914c(0x6dc)+_0x59914c(0x24a)+'ient('+_0x59914c(0x374)+'9d,\x20#'+_0x59914c(0x708)+'d)\x200\x20'+_0x59914c(0x25b)+'ar(--'+'p,\x2050'+'%)\x2010'+_0x59914c(0x76d)+'-repe'+_0x59914c(0x256)+_0x59914c(0x622)+'55,25')+('5,255'+',.08)'+_0x59914c(0x683)+'\x20.sk-'+_0x59914c(0x61e)+_0x59914c(0x6d3)+_0x59914c(0x6fc)+_0x59914c(0x45f)+_0x59914c(0x41a)+_0x59914c(0x63b)+'\x20-web'+_0x59914c(0x5d2)+_0x59914c(0x64c)+'ance:'+_0x59914c(0x5fa)+_0x59914c(0x609)+'th:\x206'+'px;\x20h'+'eight'+_0x59914c(0x6bf)+_0x59914c(0x1cc)+_0x59914c(0x3d6)+'op:\x20-'+_0x59914c(0x391)+_0x59914c(0x703)+_0x59914c(0x522)+_0x59914c(0x610)+'50%;\x20'+'backg'+_0x59914c(0x31c)+_0x59914c(0x410)+'6b9d;'+'\x20box-'+_0x59914c(0x40e)+'w:\x200\x20'+'0\x200\x202'+'px\x20rg'+_0x59914c(0x290)+'5,107'+',157,'+_0x59914c(0x6ed)+_0x59914c(0x6bb)+_0x59914c(0x1f8)+_0x59914c(0x44a)+_0x59914c(0x612)+'-rang'+_0x59914c(0x4d8)+'ck\x20{\x20'+'heigh'+_0x59914c(0x3f3)+_0x59914c(0x28b)+_0x59914c(0x4e7)+'und:\x20'+'rgba('+_0x59914c(0x719)+'55,25'+_0x59914c(0x3ec)+');\x20}\x0a'+_0x59914c(0x28d)+_0x59914c(0x45f)+_0x59914c(0x1a6)+_0x59914c(0x22b)+'ange-'+'progr'+_0x59914c(0x462)+'\x20heig'+'ht:\x202'+'px;\x20b'+_0x59914c(0x585)+_0x59914c(0x3fa)+_0x59914c(0x1cb)+_0x59914c(0x443)+'}\x0a\x20\x20.'+_0x59914c(0x1f8)+_0x59914c(0x44a)+':-moz'+_0x59914c(0x6f1)+_0x59914c(0x1e7)+'mb\x20{\x20'+'width'+_0x59914c(0x6bf)+';\x20hei'+'ght:\x20'+'6px;\x20'+_0x59914c(0x703)+'r:\x200;'+_0x59914c(0x6a9)+_0x59914c(0x454)+'dius:'+_0x59914c(0x4b8)+'\x20back'+_0x59914c(0x1e8)+_0x59914c(0x211)+_0x59914c(0x696)+_0x59914c(0x683)+'\x20.sk-'+'val\x20{'+_0x59914c(0x1c2)+_0x59914c(0x570)+_0x59914c(0x6e9)+'x;\x20fo'+'nt-we'+_0x59914c(0x741)+_0x59914c(0x292)+_0x59914c(0x6df)+_0x59914c(0x2a9)+':\x2028p'+_0x59914c(0x2dc)+'xt-al'+_0x59914c(0x5aa)+'right'+';\x20col'+_0x59914c(0x25f)+'gba(2'+_0x59914c(0x527)+'8,242'+',.8);'+_0x59914c(0x272)+'@keyf'+_0x59914c(0x60d)+_0x59914c(0x544)+_0x59914c(0x6dd)+'rom\x20{'+_0x59914c(0x2ea)+'ity:\x20'+_0x59914c(0x661)+'ansfo'+'rm:\x20t'+_0x59914c(0x580)+_0x59914c(0x5fb)+_0x59914c(0x549)+'\x20}\x20}\x0a'+'\x20\x20');function _0x6e3d3(_0x1c1e9e){var _0xc63d7c=_0x59914c;if(document[_0xc63d7c(0x513)]&&(_0xb2655f['ZnJFN'](document[_0xc63d7c(0x63f)+_0xc63d7c(0x5f3)],'inter'+_0xc63d7c(0x3cf)+'e')||document['ready'+_0xc63d7c(0x5f3)]===_0xc63d7c(0x3c1)+_0xc63d7c(0x339)))_0x1c1e9e();else document[_0xc63d7c(0x400)+'entLi'+_0xc63d7c(0x6a8)+'r']('DOMCo'+_0xc63d7c(0x70a)+'Loade'+'d',_0x1c1e9e,{'once':!![]});}_0x6e3d3(function(){var _0x5c1826=_0x59914c,_0x374b46={'gfnQg':_0xb2655f[_0x5c1826(0x4d3)],'UfHUM':_0xb2655f[_0x5c1826(0x3c2)],'RPNXC':_0x5c1826(0x690)};if('JJaoC'===_0xb2655f['VZSRW'])try{if(_0xb2655f['lkjpA'](_0x5c1826(0x58d),'MiujF')){if(!document[_0x5c1826(0x513)]['conta'+_0x5c1826(0x536)](_0x4416c8))document[_0x5c1826(0x513)][_0x5c1826(0x21c)+_0x5c1826(0x1bb)+'d'](_0x4416c8);document['body']['appen'+'dChil'+'d'](_0x2fa7dc),document[_0x5c1826(0x513)]['appen'+'dChil'+'d'](_0x2d0453),_0xb2655f[_0x5c1826(0x588)](_0x49cd11,_0x5c1826(0x591),_0xb2655f['JGPme']);}else{var _0x4884e4={'QeGxW':function(_0x5ac170,_0x1d43b1){return _0x5ac170!==_0x1d43b1;},'VYYAQ':function(_0x5c8bba,_0x2c9ff0){return _0x5c8bba(_0x2c9ff0);}},_0x543fc0=_0x2524b5['creat'+_0x5c1826(0x26f)+'ent']('butto'+'n');return _0x543fc0[_0x5c1826(0x5ef)]=_0x374b46['gfnQg'],_0x543fc0[_0x5c1826(0x712)+'Name']=_0x374b46['UfHUM'],_0x543fc0[_0x5c1826(0x390)+_0x5c1826(0x381)+'te'](_0x374b46[_0x5c1826(0x673)],'switc'+'h'),_0x543fc0['setAt'+_0x5c1826(0x381)+'te'](_0x5c1826(0x1b5)+'check'+'ed',_0x4cfaeb(!!_0x536bab)),_0x543fc0['oncli'+'ck']=_0x19c78b=>{var _0x34c7e0=_0x5c1826;_0x19c78b[_0x34c7e0(0x702)+_0x34c7e0(0x545)+_0x34c7e0(0x465)]();var _0x487e8a=_0x4884e4[_0x34c7e0(0x659)](_0x543fc0['getAt'+_0x34c7e0(0x381)+'te']('aria-'+_0x34c7e0(0x787)+'ed'),_0x34c7e0(0x509));_0x543fc0[_0x34c7e0(0x390)+_0x34c7e0(0x381)+'te'](_0x34c7e0(0x1b5)+'check'+'ed',_0x4884e4[_0x34c7e0(0x43d)](_0x35cbab,_0x487e8a)),_0x4884e4[_0x34c7e0(0x43d)](_0x2bc9c8,_0x487e8a);},_0x543fc0;}}catch(_0x2c315a){_0x49cd11('boot','DOM\x20m'+'ount\x20'+_0x5c1826(0x749)+'d:\x20'+(_0x2c315a&&_0x2c315a['messa'+'ge']));}else return{'entries':_0x278ab1,'count':_0x431a7d,'shift':_0x3a9cb4};}),console[_0x59914c(0x60c)](_0x59914c(0x689)+_0x59914c(0x6d8)+'ent\x20l'+'oaded'+_0x59914c(0x52a)+_0x59914c(0x650)+_0x59914c(0x737)+_0x59914c(0x21a)+_0x59914c(0x514)+_0x59914c(0x66d)+'ostic'+'s\x20on)'),requestAnimationFrame(_0x192759);})()));
}

/* Sakura Client — LOADER (the only file installed as a userscript).
 *
 * Runs at document-start and splits by site:
 *
 *   kourstrike.io / overtide.io / 2v2.io
 *     UWMK + the payload are inlined into THIS file above it, and
 *     guarded to their hostnames. They have to be inlined: UWMK
 *     patches fetch / WebAssembly.instantiate and must do it before
 *     Unity's boot scripts run, and a network fetch at
 *     document-start always loses that race.
 *
 *   everything else
 *     Detected by hostname here, then the matching payload is
 *     fetched from GitHub:
 *       clutcher.io     → sakura.clutcher.js (full client)
 *       astrastrike.fun → sakura.astra.js   (clean keystrokes overlay)
 *     Both append to document.body at top level, so they're deferred
 *     until the DOM is parsed.
 *
 * The https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/ placeholder is replaced at build time with
 * your GitHub raw URL (see package.json → sakura.rawBase, or
 * SAKURA_RAW_BASE env). Keep this file readable — only the payloads
 * are obfuscated.
 */

(() => {
  "use strict";

  var HOST = location.hostname || "";
  if (/(^|\.)(kourstrike\.io|overtide\.io|2v2\.io)$/.test(HOST)) return; // handled by the inlined blocks above

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
