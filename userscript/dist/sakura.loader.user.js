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
(function(_0x4c10a7,_0x5cd518){var _0x3084aa=_0x3683,_0x2736e9=_0x4c10a7();while(!![]){try{var _0x30659a=parseInt(_0x3084aa(0x38d))/(-0x1d67+-0xf14+0x2c7c)*(-parseInt(_0x3084aa(0x701))/(-0x1*0x40f+0x2b7+0x15a))+-parseInt(_0x3084aa(0x689))/(0x1d1a+0x2b*-0x11+-0x1a3c)*(parseInt(_0x3084aa(0x3f8))/(-0x1*-0x36b+0x31*-0x55+0xcde))+parseInt(_0x3084aa(0x6dc))/(-0xef*-0x23+0x1b78+-0x3c20)*(parseInt(_0x3084aa(0x235))/(-0x2e*-0x35+0xa7*-0x31+0x1677))+-parseInt(_0x3084aa(0x6aa))/(0xab3*-0x1+-0x2b*0xdc+0x17d7*0x2)*(-parseInt(_0x3084aa(0x438))/(-0x119*0xd+0x25c6+0x7d3*-0x3))+parseInt(_0x3084aa(0x201))/(-0x37*-0xa3+0x2*-0xc10+-0xadc)*(parseInt(_0x3084aa(0x42f))/(-0xc4c*-0x3+0xb1*-0x24+-0x5fb*0x2))+parseInt(_0x3084aa(0x423))/(-0x56f+-0x8*-0x19e+-0x776*0x1)+-parseInt(_0x3084aa(0x540))/(0x1593+0x2*-0xda+-0x5*0x3f7);if(_0x30659a===_0x5cd518)break;else _0x2736e9['push'](_0x2736e9['shift']());}catch(_0x249821){_0x2736e9['push'](_0x2736e9['shift']());}}}(_0x333a,-0x356*-0x1fd+-0xd03d6+0x8*0x1d2eb),((()=>{'use strict';var _0x1c6043=_0x3683,_0x25cc89={'cSmsB':function(_0x4ad486,_0x59a1ae,_0x1da3cc){return _0x4ad486(_0x59a1ae,_0x1da3cc);},'DxwkX':function(_0x4ec5f7,_0x244011){return _0x4ec5f7(_0x244011);},'vcBeE':function(_0x2c798b,_0xb3457d){return _0x2c798b+_0xb3457d;},'BDjxp':_0x1c6043(0x2a4)+'wn','OMmCh':function(_0x4b56f6,_0x3b62cf){return _0x4b56f6+_0x3b62cf;},'rUzLj':function(_0x1a2699,_0x824daf){return _0x1a2699(_0x824daf);},'CBNvg':function(_0x4d80f4,_0x1ef226){return _0x4d80f4===_0x1ef226;},'HfNwj':_0x1c6043(0x3a1),'humWS':'eXEAa','bTEPV':function(_0x16f77d,_0x25bf50){return _0x16f77d!==_0x25bf50;},'kDxJO':'aYhwd','Ppevz':_0x1c6043(0x3ca),'mFgwQ':function(_0x2230c2,_0x15e9f3,_0xd1c4fb,_0x4ae854,_0x3d0188){return _0x2230c2(_0x15e9f3,_0xd1c4fb,_0x4ae854,_0x3d0188);},'pYMnS':function(_0x16d2fc,_0x137365){return _0x16d2fc*_0x137365;},'fYxrs':_0x1c6043(0x5ba)+'9d','zspNf':function(_0x275598){return _0x275598();},'ryTZl':function(_0x26bef0,_0x3d8049){return _0x26bef0!==_0x3d8049;},'tvnpE':function(_0x3eca5f,_0xc4db86){return _0x3eca5f!==_0xc4db86;},'MbZgT':_0x1c6043(0x2bf)+'a.kou'+_0x1c6043(0x479)+'v1','PiwjZ':'ufXhO','PCFAo':function(_0x3bd678,_0x120b2d,_0x144ba1,_0x2ceaa2,_0x4064a0){return _0x3bd678(_0x120b2d,_0x144ba1,_0x2ceaa2,_0x4064a0);},'YQkQM':function(_0x566466,_0x5c1b71,_0x5e0ea1){return _0x566466(_0x5c1b71,_0x5e0ea1);},'PGjFG':_0x1c6043(0x71a),'UuceM':_0x1c6043(0x1dd),'FuvVY':function(_0x1ddbf0,_0xd47f5b){return _0x1ddbf0/_0xd47f5b;},'aiTTF':function(_0x5174e3,_0x58b152){return _0x5174e3(_0x58b152);},'AwFQB':function(_0x4fa4fe,_0xbeb9bd){return _0x4fa4fe!==_0xbeb9bd;},'DygFr':function(_0x3b697b,_0x50787f){return _0x3b697b&&_0x50787f;},'fTMHJ':_0x1c6043(0x6be),'lDMXp':function(_0x320965,_0x575771){return _0x320965<_0x575771;},'vbWwJ':_0x1c6043(0x208),'qwVnN':function(_0x372833,_0x2c3103,_0x5109d8,_0xa88e2c,_0x1718ee){return _0x372833(_0x2c3103,_0x5109d8,_0xa88e2c,_0x1718ee);},'FLNCF':_0x1c6043(0x1ef),'DVMjD':function(_0x26d342,_0x21517b,_0x2e7a3b){return _0x26d342(_0x21517b,_0x2e7a3b);},'jMqVn':'GiaSk','wjPkl':function(_0x5add13,_0x29f200,_0x2f59c8,_0x286e4b,_0x14ac96){return _0x5add13(_0x29f200,_0x2f59c8,_0x286e4b,_0x14ac96);},'foDVy':function(_0x332b48,_0x59cba3){return _0x332b48!==_0x59cba3;},'VMoZq':function(_0x19d9a4,_0x4a317f,_0x4dad4c,_0x496515,_0x642c5e){return _0x19d9a4(_0x4a317f,_0x4dad4c,_0x496515,_0x642c5e);},'dfWrT':_0x1c6043(0x5e7),'iSqpj':function(_0x349d6c,_0x556835,_0x12e466,_0x40393c,_0x1f8694){return _0x349d6c(_0x556835,_0x12e466,_0x40393c,_0x1f8694);},'wvsCj':'eOish','SBJqy':'mouse','azNlx':function(_0x56ed73,_0x422f87){return _0x56ed73+_0x422f87;},'HfDHk':function(_0x5d4464,_0x4f3a88){return _0x5d4464>_0x4f3a88;},'GocOP':_0x1c6043(0x40f)+'wn','VHcZT':function(_0x524760,_0x381a42){return _0x524760===_0x381a42;},'bzebN':'inter'+'activ'+'e','hgzBU':function(_0x5632bc){return _0x5632bc();},'NPRnZ':_0x1c6043(0x55d),'lAcJm':'kour-'+'io_30'+_0x1c6043(0x311)+_0x1c6043(0x205)+'nt','agmQT':'TiHAl','gMfGb':_0x1c6043(0x632),'Nmvex':function(_0x3d6eb3,_0x427466){return _0x3d6eb3<_0x427466;},'GpMEu':_0x1c6043(0x417)+_0x1c6043(0x6b5),'GyHYD':'none','qfGvG':_0x1c6043(0x254),'awYSY':function(_0x3f1000,_0x59ea02){return _0x3f1000*_0x59ea02;},'DKRrB':function(_0x17beb4,_0x1b5a2d){return _0x17beb4+_0x1b5a2d;},'gHRyt':function(_0x5499ca,_0x5e04ff){return _0x5499ca+_0x5e04ff;},'hkIJn':function(_0x2040b3,_0x353c86){return _0x2040b3-_0x353c86;},'zUfrp':function(_0x475664,_0x30f962){return _0x475664/_0x30f962;},'BaILv':function(_0x2ca861,_0x264736){return _0x2ca861-_0x264736;},'HcLlp':function(_0x4f09a4,_0xf2d44b){return _0x4f09a4-_0xf2d44b;},'atXbY':_0x1c6043(0x4c7),'zchAJ':function(_0x25e1a7,_0x232f55){return _0x25e1a7+_0x232f55;},'hxNqp':'KeyA','QiTqU':function(_0x133e8f,_0x5c4d10){return _0x133e8f+_0x5c4d10;},'INDCZ':_0x1c6043(0x317),'aCJmU':function(_0x49eb1d,_0x135ed0){return _0x49eb1d+_0x135ed0;},'gUije':function(_0x47e596,_0x4731a1){return _0x47e596+_0x4731a1;},'oQYqu':function(_0x51e397,_0x2906ad,_0x3e0688,_0x4bbc5c,_0x385127,_0x5eb933,_0x521522){return _0x51e397(_0x2906ad,_0x3e0688,_0x4bbc5c,_0x385127,_0x5eb933,_0x521522);},'vNvub':function(_0x5f2f4a,_0x5887fd){return _0x5f2f4a*_0x5887fd;},'BLlQc':function(_0x3fb6a6,_0x19973a){return _0x3fb6a6+_0x19973a;},'sNuzq':function(_0x2b97e1,_0x217bdb,_0x535dd1,_0x1cfc83,_0x8c2b12,_0x3c1644,_0x5d9550,_0xf6e0f7){return _0x2b97e1(_0x217bdb,_0x535dd1,_0x1cfc83,_0x8c2b12,_0x3c1644,_0x5d9550,_0xf6e0f7);},'IsdIW':'\x20CPS','JDppe':function(_0x3a2c33,_0x3f0ad0){return _0x3a2c33(_0x3f0ad0);},'dZbsu':_0x1c6043(0x588),'WSMXx':function(_0x121847,_0x4bd577){return _0x121847+_0x4bd577;},'aCiVb':function(_0x340421,_0x4f8947){return _0x340421*_0x4f8947;},'tgKey':_0x1c6043(0x6bb),'qcgPY':_0x1c6043(0x6f3)+_0x1c6043(0x672)+'r\x20gam'+'e…','tKRVj':_0x1c6043(0x65f)+'te','lQhDA':_0x1c6043(0x2ab),'qZYZN':function(_0x682e72,_0x1f70dd){return _0x682e72!==_0x1f70dd;},'wnSzE':_0x1c6043(0x2f9),'dYpIS':function(_0x379acd){return _0x379acd();},'nJqUu':function(_0x53a519){return _0x53a519();},'oTJxq':function(_0x51a957,_0x1a936e){return _0x51a957(_0x1a936e);},'ElHRB':_0x1c6043(0x534),'uSsvB':'input','mDizT':'sk-fi'+'eld','xdovj':_0x1c6043(0x457)+'n','kSAJm':_0x1c6043(0x5fc)+'vemen'+'t\x20','YYFuM':function(_0x193a6a,_0x14237f){return _0x193a6a!==_0x14237f;},'XLtpI':'butto'+'n','GEpzj':'sk-bt'+'n','bCEHc':'sk-ct'+'l','pVtWr':'sk-la'+'bel','pfmLw':'small','pZEoz':'sk-hi'+'nt','cratu':_0x1c6043(0x379),'wxtNI':function(_0x116f3a){return _0x116f3a();},'mLjyG':'shown','rsWPg':function(_0x1c02ca,_0x41f0f6){return _0x1c02ca/_0x41f0f6;},'YAFRA':'600\x20','VqUyq':'px\x20ui'+_0x1c6043(0x440)+_0x1c6043(0x302)+'f,sys'+_0x1c6043(0x5a3)+'i,san'+'s-ser'+'if','YlZlh':function(_0x26f6ac,_0x4fc440){return _0x26f6ac!==_0x4fc440;},'bnaxM':_0x1c6043(0x61b)+'itch','gKKys':_0x1c6043(0x18d)+'l','cDMyP':'--p','mBtSi':function(_0x103d2d,_0x4cf04b){return _0x103d2d/_0x4cf04b;},'Ykrtw':_0x1c6043(0x566)+'rd','qSrcn':_0x1c6043(0x28d),'xuVkW':function(_0x58303f,_0x3f2a26,_0x254794){return _0x58303f(_0x3f2a26,_0x254794);},'UfSIN':'0\x20hoo'+_0x1c6043(0x673)+'med\x20('+_0x1c6043(0x388)+_0x1c6043(0x360),'canPH':_0x1c6043(0x5fd)+_0x1c6043(0x5f4)+'\x20','vKPYd':_0x1c6043(0x425)+'PS\x20un'+_0x1c6043(0x2f4),'JFJEu':'error','SAUvp':'Sakur'+_0x1c6043(0x6a3)+_0x1c6043(0x2dc),'MjdbC':'Block'+_0x1c6043(0x182)+_0x1c6043(0x543)+_0x1c6043(0x25d)+'ateTa'+_0x1c6043(0x1cf)+_0x1c6043(0x64f)+'nd\x20OH'+'ealth'+_0x1c6043(0x2c7)+_0x1c6043(0x52e)+_0x1c6043(0x454)+_0x1c6043(0x567)+'g\x20can'+_0x1c6043(0x281)+'\x20or\x20k'+'ill\x20y'+_0x1c6043(0x3dc),'Jmwiw':'No\x20Re'+_0x1c6043(0x5a0),'CCosX':function(_0x49fb14,_0x354a3d,_0x795f3e,_0x51ba07){return _0x49fb14(_0x354a3d,_0x795f3e,_0x51ba07);},'uAzFq':_0x1c6043(0x47b),'TlBHI':'Speed'+'\x20%','SzSUU':function(_0x21e042,_0x1794cd,_0x4c69c4,_0x29299e,_0x4a02fd,_0x556387){return _0x21e042(_0x1794cd,_0x4c69c4,_0x29299e,_0x4a02fd,_0x556387);},'BqZwG':_0x1c6043(0x48d)+'s\x20Mov'+_0x1c6043(0x605)+_0x1c6043(0x4f5)+'JumpT'+'ime\x20s'+'o\x20the'+_0x1c6043(0x61a)+'\x20cool'+_0x1c6043(0x238)+'never'+_0x1c6043(0x414)+'ies.','wKIrH':_0x1c6043(0x49f),'ZQlFa':function(_0x22fa14,_0x56275b,_0x311f29,_0x4785a0){return _0x22fa14(_0x56275b,_0x311f29,_0x4785a0);},'gVhgc':function(_0x29be3a,_0x1da2a3,_0x32e4d0){return _0x29be3a(_0x1da2a3,_0x32e4d0);},'yyxQr':_0x1c6043(0x595),'owMNL':'Each\x20'+'one\x20i'+_0x1c6043(0x22e)+'ls\x20a\x20'+_0x1c6043(0x352)+'tramp'+'oline'+_0x1c6043(0x29b)+_0x1c6043(0x2ac)+'hole\x20'+'page\x20'+_0x1c6043(0x5b7)+_0x1c6043(0x1fc)+'OFF\x20b'+_0x1c6043(0x45d)+'ault\x20'+'-\x20a\x20s'+'ignat'+'ure\x20t'+_0x1c6043(0x523)+'oes\x20n'+'ot\x20ma'+_0x1c6043(0x1d3)+'he\x20re'+_0x1c6043(0x502)+_0x1c6043(0x358)+'throw'+_0x1c6043(0x3b9)+'nctio'+'n\x20sig'+'natur'+'e\x20mis'+_0x1c6043(0x3d4)+'\x27\x20the'+_0x1c6043(0x60f)+_0x1c6043(0x4ef)+'\x20is\x20c'+_0x1c6043(0x465)+'.\x20Tur'+_0x1c6043(0x70e)+_0x1c6043(0x189)+_0x1c6043(0x6b3)+_0x1c6043(0x1a9)+_0x1c6043(0x45f)+_0x1c6043(0x507)+'d,\x20an'+_0x1c6043(0x617)+_0x1c6043(0x58a)+_0x1c6043(0x642)+'\x20your'+_0x1c6043(0x3e7)+'d\x20cho'+_0x1c6043(0x34a)+'n.','yXzPW':_0x1c6043(0x19b)+_0x1c6043(0x66e)+'th.In'+_0x1c6043(0x346)+_0x1c6043(0x541)+'Healt'+'h)','NEhwz':function(_0xabb037,_0x2cd8bd,_0x4a9de4){return _0xabb037(_0x2cd8bd,_0x4a9de4);},'KTvXq':_0x1c6043(0x5df)+_0x1c6043(0x2ef)+_0x1c6043(0x2d9)+'eRunn'+'ing\x20+'+'\x20IsGr'+'ounde'+'d)','YtzjZ':'no\x20ch'+_0x1c6043(0x1dc)+_0x1c6043(0x339)+_0x1c6043(0x6c5)+'ut\x20th'+'is','YCxTN':'activ'+'e','ISWVR':'UWMK\x20'+'bound'+'\x20','ROyDM':_0x1c6043(0x19d)+'s','sfsTG':'\x20|\x20ga'+'me\x20','EBkoa':_0x1c6043(0x4e5)+'d','XhkKl':_0x1c6043(0x678)+'de','GAgkW':'Sakur'+_0x1c6043(0x6a3)+'r','zGyHW':_0x1c6043(0x4cd)+'ls','MNxEE':_0x1c6043(0x4bf)+'ll>','mQgAW':'Statu'+'s','uuoyE':'Inser'+'t','iacvz':'posit'+_0x1c6043(0x643)+_0x1c6043(0x31e)+_0x1c6043(0x21b)+_0x1c6043(0x477)+_0x1c6043(0x198)+_0x1c6043(0x1c9)+'heigh'+_0x1c6043(0x633)+'vh;z-'+_0x1c6043(0x1d4)+_0x1c6043(0x267)+_0x1c6043(0x4df)+_0x1c6043(0x6d7)+_0x1c6043(0x6ce)+_0x1c6043(0x631)+'s:non'+'e','HdfiH':'Move','mvGDd':_0x1c6043(0x4f6)+'c6','OAZeN':function(_0x576c49,_0x1c58e8){return _0x576c49!==_0x1c58e8;},'PMmWx':_0x1c6043(0x3b0),'pYWXF':_0x1c6043(0x6b8),'ukeOq':'Sakur'+_0x1c6043(0x365),'JowHf':'Assem'+_0x1c6043(0x215)+_0x1c6043(0x212)+'.dll','xqrcM':function(_0x4b7d7c,_0x315602,_0x2b21df,_0x4886c9,_0x214fe2,_0x4daf50,_0xd33fa9,_0x3e6177){return _0x4b7d7c(_0x315602,_0x2b21df,_0x4886c9,_0x214fe2,_0x4daf50,_0xd33fa9,_0x3e6177);},'sMtKf':'Initi'+_0x1c6043(0x563)+_0x1c6043(0x1cf)+_0x1c6043(0x234),'RAYPu':'godDi'+'e','foqvU':_0x1c6043(0x5be)+_0x1c6043(0x6ab),'HQIVm':_0x1c6043(0x483)+'nPlat'+'forms'+'.Over'+_0x1c6043(0x3ee)+_0x1c6043(0x277)+_0x1c6043(0x28b)+'on','JxsnN':_0x1c6043(0x483)+_0x1c6043(0x715)+'forms'+_0x1c6043(0x57a)+'tide.'+'Movem'+'ent','CkoAP':_0x1c6043(0x475)+_0x1c6043(0x577),'FcEOO':function(_0x1c12e1,_0x31a6ed){return _0x1c12e1(_0x31a6ed);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x1c6043(0x3d6)+_0x1c6043(0x3cd)]||''))return;if(window[_0x1c6043(0x44c)+'URA_K'+'OUR__'])return;window[_0x1c6043(0x44c)+'URA_K'+_0x1c6043(0x681)]=!![];var _0xcd3984=_0x25cc89[_0x1c6043(0x40b)],_0x463996=_0x25cc89['mvGDd'],_0x2202ef={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x1c6043(0x5ba)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x42c7ad={..._0x2202ef};try{if(_0x25cc89['OAZeN'](_0x25cc89['PMmWx'],_0x1c6043(0x3b0))){_0x59303e['save'](),_0x1e4f37['font']=_0x1c6043(0x6af)+'2px\x20u'+_0x1c6043(0x391)+_0x1c6043(0x191)+_0x1c6043(0x70c)+_0x1c6043(0x191)+'e',_0x5a6dad[_0x1c6043(0x2e2)+_0x1c6043(0x400)]='left',_0x3204da['textB'+_0x1c6043(0x6ff)+'ne']=_0x1c6043(0x6bb);var _0x26f173=-0x214e+0x1*0x1af1+0x689,_0x4c3b99=-0x11*0xfd+0xd*0x263+-0xa5*0x16,_0x3dbfc8=(_0x278074,_0x30a879)=>{var _0x132c06=_0x1c6043;_0x184417[_0x132c06(0x5c9)+_0x132c06(0x424)]=_0x30a879||_0x132c06(0x1d7)+_0x132c06(0x3bc)+_0x132c06(0x1b2)+'0,0.7'+'5)',_0x505f4e[_0x132c06(0x1c1)+_0x132c06(0x331)](_0x278074,_0x4c3b99,_0x26f173),_0x26f173+=0xc5b*0x3+0xd*-0xa3+-0x1cba;};_0x25cc89[_0x1c6043(0x4d9)](_0x3dbfc8,_0x1c6043(0x384)+_0x1c6043(0x5f3)+'R\x20v1.'+'1','#ff6b'+'9d');if(_0x3bf246['fps'])_0x25cc89['DxwkX'](_0x3dbfc8,_0x25cc89['vcBeE'](_0xef7ca6,'\x20FPS'));if(!_0x220aa8[_0x1c6043(0x3fa)+_0x1c6043(0x2f8)])_0x25cc89['cSmsB'](_0x3dbfc8,_0x1c6043(0x6f3)+'ng\x20fo'+'r\x20gam'+'e…',_0x1c6043(0x1d7)+'255,1'+_0x1c6043(0x298)+'0,0.6'+')');_0x487787['resto'+'re']();}else Object[_0x1c6043(0x33f)+'n'](_0x42c7ad,JSON[_0x1c6043(0x32e)](localStorage[_0x1c6043(0x354)+'em']('sakur'+_0x1c6043(0x64d)+'r.v1')||'{}'));}catch(_0x31274b){}function _0x139ff7(){var _0x3b7500=_0x1c6043;if(_0x3b7500(0x608)===_0x3b7500(0x646))new _0x5356e9(_0x91da1a)[_0x3b7500(0x556)+_0x3b7500(0x1ce)](_0x4f36e8,_0x45fb8b,_0x435965);else try{localStorage[_0x3b7500(0x4c0)+'em'](_0x3b7500(0x2bf)+_0x3b7500(0x64d)+_0x3b7500(0x3fb),JSON[_0x3b7500(0x6b7)+_0x3b7500(0x3d5)](_0x42c7ad));}catch(_0x3e6a05){}}var _0x15d093={'uwmk':!!window[_0x1c6043(0x2cf)+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x42c7ad[_0x1c6043(0x636)+_0x1c6043(0x476)],'lastError':''};try{_0x25cc89['YlZlh'](_0x25cc89[_0x1c6043(0x37a)],_0x1c6043(0x6b8))?_0x25cc89['DxwkX'](_0x4e2994,!_0x5cec4f):window['addEv'+'entLi'+'stene'+'r'](_0x1c6043(0x6e6),_0x4d05cf=>{var _0x29da3a=_0x1c6043;try{if(_0x29da3a(0x4ce)!==_0x29da3a(0x3ae)){var _0x44bebd=_0x4d05cf&&(_0x4d05cf['messa'+'ge']||_0x4d05cf[_0x29da3a(0x6e6)]&&_0x4d05cf[_0x29da3a(0x6e6)][_0x29da3a(0x3b1)+'ge'])||_0x25cc89[_0x29da3a(0x67f)];if(_0x4d05cf&&_0x4d05cf[_0x29da3a(0x404)+_0x29da3a(0x3cd)])_0x44bebd+=_0x25cc89[_0x29da3a(0x2f1)](_0x25cc89['OMmCh']('\x20@\x20',_0x25cc89[_0x29da3a(0x561)](String,_0x4d05cf['filen'+_0x29da3a(0x3cd)])['split']('/')['pop']()),':')+(_0x4d05cf[_0x29da3a(0x6ac)+'o']||'?');_0x15d093['lastE'+'rror']=String(_0x44bebd)['slice'](0x1794+0x1*0x6c3+-0x1e57,-0xb35*-0x3+0x1*-0x76e+-0xb*0x253);}else try{_0x1597a7[_0x29da3a(0x584)+'ed']=!!_0x656650;}catch(_0x1a05a5){}}catch(_0x4adb25){}});}catch(_0x118d0a){}var _0x225d07=null,_0x586449=null,_0x1ff9f3={},_0x2c5b58=[],_0x4b6181=[],_0x3ded07=new Map();function _0x287ce7(_0x471d10,_0x5ef279){var _0x225514=_0x1c6043;if(!_0x5ef279||_0x471d10[_0x225514(0x651)+_0x225514(0x2e0)](_0x5ef279)||_0x471d10['lengt'+'h']>0x1*-0xf0+-0x2113*-0x1+0x3*-0xaa1)return;_0x471d10['push'](_0x5ef279);}function _0x59b87b(_0x5e4076,_0x43b180,_0x5078ef,_0xd27325){var _0x12ec65=_0x1c6043,_0x481271={'ktSiV':_0x12ec65(0x641)+'ra-ko'+'ur]\x20h'+_0x12ec65(0x304)+_0x12ec65(0x38b)+'iled:'},_0x295a0a=-0x116c*0x2+0x1*-0xdbe+0x3096;try{_0x295a0a=_0x43b180&&_0x43b180['val']?_0x43b180[_0x12ec65(0x322)]():-0x778+0x3*0xc57+0x1bd*-0x11;}catch(_0x1cb104){}if(!_0x295a0a)return;_0x287ce7(_0x5e4076,_0x295a0a),_0x5078ef[_0xd27325]=_0x5e4076['lengt'+'h'];if(_0x25cc89['CBNvg'](_0xd27325,'movem'+_0x12ec65(0x2e7))&&_0x5e4076['lengt'+'h']){var _0x458d06=_0x1ff9f3[_0x12ec65(0x347)+'ve'];if(_0x458d06){if('pZktv'===_0x25cc89['HfNwj'])try{_0x458d06['enabl'+'ed']=![];}catch(_0x516d46){}else try{var _0x30932a=_0x53d01a[_0x12ec65(0x3a0)+'refix']({'typeName':_0x34c016,'methodName':_0x49ca16,'params':_0x1f32a8,'returnType':_0x3e6d36},_0x4ea929);return _0x30932a['enabl'+'ed']=_0x8a72e9!==![],_0x8b89f2[_0x38ff72]=_0x30932a,_0x4a4211['hooks'+'Total']++,_0x30932a;}catch(_0x462a2f){return _0x510dd9[_0x12ec65(0x544)](_0x481271[_0x12ec65(0x644)],_0x46a45f,_0x462a2f&&_0x462a2f['messa'+'ge']),null;}}}}function _0x54586d(_0x1e81df,_0x5bc58c,_0x374b55){var _0x3d27ac=_0x1c6043,_0x40b352=_0x3ded07[_0x3d27ac(0x3b4)](_0x1e81df);!_0x40b352&&(_0x25cc89[_0x3d27ac(0x25a)]!==_0x25cc89['humWS']?(_0x3c42e9[_0x3d27ac(0x616)+_0x3d27ac(0x710)]=_0x14cb15,_0x114bf1()):(_0x40b352=new Map(),_0x3ded07['set'](_0x1e81df,_0x40b352)));if(!_0x40b352[_0x3d27ac(0x6cb)](_0x5bc58c))try{var _0x1dd552=new _0x225d07(_0x1e81df)[_0x3d27ac(0x2fa)+'ield'](_0x5bc58c,_0x374b55);_0x40b352[_0x3d27ac(0x26c)](_0x5bc58c,_0x1dd552!==undefined?_0x1dd552[_0x3d27ac(0x322)]():null);}catch(_0xc59dfc){_0x40b352['set'](_0x5bc58c,null);}return _0x40b352['get'](_0x5bc58c);}function _0x184ed9(_0x47aeb1,_0x386d47,_0x4c0e8a,_0x36faf9){var _0x58efe3=_0x1c6043;if(_0x25cc89['bTEPV'](_0x58efe3(0x291),_0x25cc89['kDxJO']))try{new _0x225d07(_0x47aeb1)['write'+_0x58efe3(0x1ce)](_0x386d47,_0x4c0e8a,_0x36faf9);}catch(_0x4dfd28){}else{_0x2ad214[_0x58efe3(0x3fa)+'oaded']=!!_0x4d1766['unity'+_0x58efe3(0x518)+_0x58efe3(0x20e)];try{var _0x51983c=0xa8d+-0x154e+0xac1*0x1;for(var _0x396a00 in _0xe74656){if(_0x2d4a2c[_0x396a00]&&_0x149ed7[_0x396a00][_0x58efe3(0x1aa)+'ed'])_0x51983c++;}_0x42caa8[_0x58efe3(0x24f)+'Ok']=_0x51983c;}catch(_0x14ac2e){}}}function _0x57652f(_0x5466df,_0x113bed){var _0x2630db=_0x1c6043;try{var _0x366873=new _0x225d07(_0x5466df)[_0x2630db(0x2fa)+'ield'](_0x113bed,_0x2630db(0x426));return _0x366873?_0x366873['val']():-0x905+-0x18*0x112+0x6f1*0x5;}catch(_0x35be17){if(_0x25cc89[_0x2630db(0x3d0)]!==_0x25cc89[_0x2630db(0x3d0)])_0x2a6ab3[_0x2630db(0x1eb)+'tyPct']=_0x15c0d9,_0x3a6ee3();else return 0x2*-0x76b+-0x8f4+0x17ca;}}function _0x327211(_0x4a2533,_0x571962,_0x29063d,_0x4ddc8c){var _0x1bd57a=_0x54586d(_0x4a2533,_0x571962,_0x29063d);if(_0x1bd57a!=null)_0x25cc89['mFgwQ'](_0x184ed9,_0x4a2533,_0x571962,_0x29063d,_0x25cc89['pYMnS'](_0x1bd57a,_0x4ddc8c));}function _0x6761e2(_0x1a934b,_0x5a16ff,_0x53dc1b,_0x49eb42,_0x4e1427,_0x1fb768,_0x53f799){var _0x3eaa9d=_0x1c6043;try{if(_0x3eaa9d(0x2fe)===_0x3eaa9d(0x190)){var _0x4adc58=_0x43c6dc[_0x3eaa9d(0x415)+'eElem'+'ent'](_0x3eaa9d(0x6a8));return _0x4adc58[_0x3eaa9d(0x396)]=_0x3eaa9d(0x619),_0x4adc58['class'+_0x3eaa9d(0x220)]='sk-co'+_0x3eaa9d(0x395),_0x4adc58['value']=/^#[0-9a-f]{6}$/i[_0x3eaa9d(0x2bb)](_0xeb5e6)?_0x5ab210:_0x25cc89['fYxrs'],_0x4adc58['oninp'+'ut']=()=>_0x30a9dd(_0x4adc58['value']),_0x4adc58;}else{var _0x318cf3=_0x586449[_0x3eaa9d(0x3a0)+'refix']({'typeName':_0x5a16ff,'methodName':_0x53dc1b,'params':_0x49eb42,'returnType':_0x4e1427},_0x1fb768);return _0x318cf3[_0x3eaa9d(0x584)+'ed']=_0x53f799!==![],_0x1ff9f3[_0x1a934b]=_0x318cf3,_0x15d093[_0x3eaa9d(0x24f)+'Total']++,_0x318cf3;}}catch(_0x1fa490){if(_0x25cc89['ryTZl'](_0x3eaa9d(0x209),_0x3eaa9d(0x1af)))return console[_0x3eaa9d(0x544)]('[saku'+_0x3eaa9d(0x661)+_0x3eaa9d(0x25c)+'ook\x20r'+'eg\x20fa'+_0x3eaa9d(0x48a),_0x1a934b,_0x1fa490&&_0x1fa490['messa'+'ge']),null;else _0x428b83[_0x3eaa9d(0x71d)+_0x3eaa9d(0x468)+'e']=_0x1b62c6,_0x25cc89[_0x3eaa9d(0x227)](_0xfd7679);}}function _0x2b4c53(_0x5be62b,_0x1598b1,_0x294a7a,_0x1f213d,_0x57a444,_0x1f35cf,_0x10cd1f){var _0x12a960=_0x1c6043;try{var _0xad1b35=_0x586449[_0x12a960(0x3a0)+'ostfi'+'x']({'typeName':_0x1598b1,'methodName':_0x294a7a,'params':_0x1f213d,'returnType':_0x57a444},_0x1f35cf);return _0xad1b35[_0x12a960(0x584)+'ed']=_0x25cc89[_0x12a960(0x1d8)](_0x10cd1f,![]),_0x1ff9f3[_0x5be62b]=_0xad1b35,_0x15d093[_0x12a960(0x24f)+_0x12a960(0x591)]++,_0xad1b35;}catch(_0x1df1e5){return console[_0x12a960(0x544)](_0x12a960(0x641)+'ra-ko'+_0x12a960(0x25c)+'ook\x20r'+_0x12a960(0x38b)+'iled:',_0x5be62b,_0x1df1e5&&_0x1df1e5['messa'+'ge']),null;}}var _0x4f79fb=()=>![];try{if(window['Unity'+_0x1c6043(0x2af)+_0x1c6043(0x467)]&&!_0x42c7ad['safeM'+'ode']){_0x225d07=window['Unity'+'WebMo'+_0x1c6043(0x467)][_0x1c6043(0x42a)+'Wrapp'+'er'],_0x586449=window[_0x1c6043(0x2cf)+'WebMo'+'dkit'][_0x1c6043(0x56f)+'me'][_0x1c6043(0x415)+_0x1c6043(0x23b)+'in']({'name':_0x25cc89['ukeOq'],'version':_0x1c6043(0x581),'referencedAssemblies':[_0x25cc89[_0x1c6043(0x39b)]]});if(_0x42c7ad['hookG'+'od'])_0x25cc89[_0x1c6043(0x6c4)](_0x6761e2,_0x1c6043(0x1b8),_0x1c6043(0x66e)+'th',_0x25cc89['sMtKf'],['i32',_0x25cc89[_0x1c6043(0x49b)]],undefined,_0x4f79fb,!!_0x42c7ad['god']);if(_0x42c7ad[_0x1c6043(0x4fc)+'odDie'])_0x6761e2(_0x25cc89[_0x1c6043(0x4b6)],'OHeal'+'th',_0x1c6043(0x575)+'Die',[_0x25cc89[_0x1c6043(0x49b)],_0x25cc89['dfWrT'],_0x25cc89[_0x1c6043(0x49b)],_0x25cc89['dfWrT'],_0x1c6043(0x5e7)],undefined,_0x4f79fb,!!_0x42c7ad[_0x1c6043(0x1b8)]);if(_0x42c7ad['hookN'+_0x1c6043(0x54d)+'il'])_0x6761e2(_0x25cc89['foqvU'],_0x25cc89[_0x1c6043(0x385)],'Tick',[_0x25cc89['dfWrT']],undefined,_0x4f79fb,!!_0x42c7ad[_0x1c6043(0x5be)+_0x1c6043(0x6ab)]);if(_0x42c7ad['hookC'+_0x1c6043(0x2b7)+'e'])_0x2b4c53('capSh'+'ooter','OShoo'+_0x1c6043(0x6df),_0x1c6043(0x71e)+_0x1c6043(0x464)+_0x1c6043(0x65e),[_0x1c6043(0x5e7),_0x25cc89[_0x1c6043(0x49b)]],undefined,(_0x28ecbb,_0x46db7b)=>{_0x59b87b(_0x4b6181,_0x46db7b,_0x15d093,'shoot'+'ers');},!![]);if(_0x42c7ad['hookC'+_0x1c6043(0x2b7)+'e'])_0x2b4c53(_0x1c6043(0x347)+'ve',_0x25cc89[_0x1c6043(0x46d)],_0x25cc89['CkoAP'],[_0x25cc89[_0x1c6043(0x49b)]],'i32',(_0x28e933,_0x5d7ebb)=>{var _0x72d907=_0x1c6043,_0x50f56e={'mZKdQ':_0x25cc89['MbZgT']};_0x25cc89[_0x72d907(0x524)](_0x25cc89[_0x72d907(0x5dc)],'kmswf')?_0x25cc89[_0x72d907(0x4ff)](_0x59b87b,_0x2c5b58,_0x5d7ebb,_0x15d093,_0x72d907(0x332)+'ents'):_0x174b2c=_0x26783b['parse'](_0x4ce113['getIt'+'em'](_0x50f56e[_0x72d907(0x6c3)])||'{}');},!![]);}}catch(_0x5ccab5){console['warn'](_0x1c6043(0x641)+_0x1c6043(0x661)+_0x1c6043(0x37f)+'WMK\x20i'+_0x1c6043(0x59b)+'ailed'+':',_0x5ccab5&&_0x5ccab5[_0x1c6043(0x3b1)+'ge']);}function _0x279972(_0x3c4312,_0x2ee29e){var _0x5bb10f=_0x1c6043,_0x4919be=_0x1ff9f3[_0x3c4312];if(_0x4919be)try{_0x4919be[_0x5bb10f(0x584)+'ed']=!!_0x2ee29e;}catch(_0x33a11b){}}setInterval(()=>{var _0xd51a5c=_0x1c6043;if(!_0x225d07||!window[_0xd51a5c(0x5da)+_0xd51a5c(0x518)+_0xd51a5c(0x20e)])return;var _0x2dba05=_0x25cc89[_0xd51a5c(0x437)](Number(_0x42c7ad['speed'+'Pct'])||0x1c30+0x69b*0x1+-0x2267,-0x268a*-0x1+0x1366+-0xfe*0x3a),_0x577c39=(Number(_0x42c7ad['jumpP'+'ct'])||-0x232b+0x1a*-0x7c+0x3027)/(-0x4c*-0x26+0xa22+-0x1506),_0x8c153c=(_0x25cc89['aiTTF'](Number,_0x42c7ad['gravi'+'tyPct'])||0x243a+0x151d+0xef*-0x3d)/(-0x72*-0x39+0x33*-0x28+-0x1106),_0x8e7c26=Math['max'](0x1243+0xe23+-0x2065,Number(_0x42c7ad[_0xd51a5c(0x71d)+_0xd51a5c(0x468)+'e'])||0x1176+0xe6*0x29+-0x16*0x271),_0x13997e=_0x25cc89['AwFQB'](_0x2dba05,-0x69c+0x1*-0x137+0x4*0x1f5)||_0x577c39!==0x179+-0x1094+0x3c7*0x4||_0x25cc89[_0xd51a5c(0x1d8)](_0x8c153c,0xe*-0x1e9+-0x6*-0x414+0x247*0x1)||_0x42c7ad['bhop'],_0xe3d1a6=_0x42c7ad['noSpr'+_0xd51a5c(0x499)]||_0x42c7ad[_0xd51a5c(0x71d)+'eExp']||_0x42c7ad[_0xd51a5c(0x616)+_0xd51a5c(0x710)]||_0x42c7ad['rapid'+_0xd51a5c(0x6de)];if(_0x25cc89['DygFr'](!_0x13997e,!_0xe3d1a6))return;try{if(_0xd51a5c(0x6be)===_0x25cc89['fTMHJ'])for(var _0x301371=-0x1f5*-0xe+-0x88f*-0x1+-0x23f5;_0x25cc89[_0xd51a5c(0x410)](_0x301371,_0x2c5b58['lengt'+'h']);_0x301371++){var _0x250780=_0x2c5b58[_0x301371];if(!_0x250780)continue;if(_0x2dba05!==0x1e65+0x4*0x587+0xf0*-0x38){var _0x23840f=(_0xd51a5c(0x44d)+_0xd51a5c(0x450)+'5')['split']('|'),_0x3f015f=0x1*0x83+-0x2197+0x2114;while(!![]){switch(_0x23840f[_0x3f015f++]){case'0':_0x327211(_0x250780,-0x2*-0x652+-0x306*0x6+-0x2d4*-0x2,'f32',_0x2dba05);continue;case'1':_0x327211(_0x250780,-0x845+-0x1*-0x319+0x55c*0x1,'f32',_0x2dba05);continue;case'2':_0x25cc89[_0xd51a5c(0x4aa)](_0x327211,_0x250780,-0x1*0x1570+0x71*-0x2e+0x29da,'f32',_0x2dba05);continue;case'3':_0x327211(_0x250780,-0x1bbb+-0xda*0x9+-0x1*-0x2391,_0x25cc89[_0xd51a5c(0x22f)],_0x2dba05);continue;case'4':_0x327211(_0x250780,0xbf4+-0x1*-0x1321+-0x1ee1,_0x25cc89[_0xd51a5c(0x22f)],_0x2dba05);continue;case'5':_0x25cc89['qwVnN'](_0x327211,_0x250780,-0xa7a+0x1758+-0x65f*0x2,_0x25cc89[_0xd51a5c(0x22f)],_0x2dba05);continue;}break;}}if(_0x577c39!==0x1*0x875+-0x1*-0x9d7+-0x124b)_0x327211(_0x250780,0x475+-0x1f8e+0x1b69,_0xd51a5c(0x208),_0x577c39);_0x8c153c!==-0x185f+-0x1482+0x2ce2&&('VIRkL'===_0x25cc89['FLNCF']?(_0x327211(_0x250780,0x2*-0xffb+-0x6*-0x38d+0x46*0x28,_0xd51a5c(0x208),_0x8c153c),_0x25cc89[_0xd51a5c(0x65d)](_0x327211,_0x250780,-0x257*0x5+0xadf*-0x1+0x16de,_0xd51a5c(0x208),_0x8c153c)):(_0xb56d2d[_0xd51a5c(0x1b8)]=_0x5f1f9a,_0x25cc89['zspNf'](_0x3f8845),_0x25cc89[_0xd51a5c(0x705)](_0x44326e,_0xd51a5c(0x1b8),_0x383064),_0x587222(_0xd51a5c(0x3f5)+'e',_0xcca6a5)));if(_0x42c7ad[_0xd51a5c(0x444)])_0x184ed9(_0x250780,-0x2a5*-0x5+0x256f*-0x1+0x12*0x161,'f32',-(-0xee3*0x1+0x7d9+0xaf1));}else _0xa1cdc3[_0xd51a5c(0x638)+'or']=_0x24e2a6,_0x500aa6();}catch(_0x504f04){}try{for(var _0x429b0f=-0xe09+0x22d4+0x14cb*-0x1;_0x429b0f<_0x4b6181['lengt'+'h'];_0x429b0f++){var _0x112ed4=_0x25cc89[_0xd51a5c(0x378)](_0x57652f,_0x4b6181[_0x429b0f],0x2375+-0x1a9f+-0x89e);if(!_0x112ed4)continue;if(_0x42c7ad['damag'+'eExp']){if(_0x25cc89['jMqVn']!=='GiaSk'){if(_0x432895)return;_0x367544=!![],_0x11158e[_0xd51a5c(0x56c)+_0xd51a5c(0x263)+_0xd51a5c(0x478)+'r'](_0xd51a5c(0x40f)+'wn',_0x74d612,!![]),_0x134aeb['addEv'+'entLi'+'stene'+'r'](_0x25cc89[_0xd51a5c(0x650)],_0x349b4b,!![]),_0x2f1f8f['addEv'+_0xd51a5c(0x263)+_0xd51a5c(0x478)+'r'](_0xd51a5c(0x56b)+'down',_0x1f66ca,!![]),_0xfc09d[_0xd51a5c(0x56c)+'entLi'+_0xd51a5c(0x478)+'r'](_0xd51a5c(0x56b)+'up',_0x57178e,!![]),_0x1287f2[_0xd51a5c(0x56c)+'entLi'+_0xd51a5c(0x478)+'r'](_0x25cc89[_0xd51a5c(0x1f2)],_0x119ff);}else _0x25cc89[_0xd51a5c(0x4b7)](_0x184ed9,_0x112ed4,-0x255c+0xa*0x365+0x3b6,_0xd51a5c(0x5e7),_0x8e7c26),_0x184ed9(_0x112ed4,0xd3*0x22+0x137d+0x1*-0x2f2f,'i32',_0x8e7c26);}_0x42c7ad['noSpr'+'ead']&&(_0x25cc89['foDVy']('PjwcM',_0xd51a5c(0x582))?(_0x184ed9(_0x112ed4,0x1cb*-0x7+-0x1*0x213a+0x2e4f*0x1,_0x25cc89['vbWwJ'],-0x2281+-0x20e8+0x4369*0x1),_0x25cc89['VMoZq'](_0x184ed9,_0x112ed4,-0x1*0x18dd+-0x1a91+0x33d6,'f32',-0x1053+0x11*0x179+-0x8b5)):(_0x20fad3['noSpr'+'ead']=_0x1bddb7,_0x2c1278()));if(_0x42c7ad[_0xd51a5c(0x616)+_0xd51a5c(0x710)])_0x184ed9(_0x112ed4,0x1*-0xdfd+0x2ae+0xbab,_0x25cc89['dfWrT'],0x15*-0x45+0xa2f+-0x9f*0x1);_0x42c7ad[_0xd51a5c(0x6fb)+_0xd51a5c(0x6de)]&&(_0x327211(_0x112ed4,0x26e3+-0x1abd+-0x37*0x36,_0x25cc89[_0xd51a5c(0x22f)],0x7*-0x3d6+-0x7*0x69+0x1db9+0.1),_0x25cc89['iSqpj'](_0x184ed9,_0x112ed4,0x24e0+-0x955*-0x3+-0x5dd*0xb,'f32',-0x22d0+-0x2*0x1314+-0x14*-0x3a6+0.1));}}catch(_0x5ba459){}},-0xa3*-0x10+-0x1735+0xdcd),setInterval(()=>{var _0x289836=_0x1c6043;if(_0x25cc89['wvsCj']!==_0x289836(0x501))_0x4e9ba4[_0x289836(0x55b)+_0x289836(0x359)+'ault'](),_0x1a0a59();else{_0x15d093[_0x289836(0x3fa)+_0x289836(0x2f8)]=!!window[_0x289836(0x5da)+_0x289836(0x518)+_0x289836(0x20e)];try{var _0x48c067=-0x1bce+-0x18a7*0x1+-0x1*-0x3475;for(var _0x1bdf4d in _0x1ff9f3){if(_0x1ff9f3[_0x1bdf4d]&&_0x1ff9f3[_0x1bdf4d][_0x289836(0x1aa)+'ed'])_0x48c067++;}_0x15d093['hooks'+'Ok']=_0x48c067;}catch(_0x512c3c){}}},0x1*0xd2d+0x476*-0x1+0x1*-0x4cf);var _0x39e3a8=new Set(),_0x4c459c={0x1:[],0x3:[]},_0x1332f7=![];function _0x4e069e(_0x26550d){_0x39e3a8['add'](_0x26550d['code']);}function _0x46e059(_0xe5a8d8){_0x39e3a8['delet'+'e'](_0xe5a8d8['code']);}function _0x242dc9(_0x3b4635){var _0x54667e=_0x1c6043;if(_0x3b4635['__sak'+_0x54667e(0x66c)])return;_0x39e3a8[_0x54667e(0x553)](_0x25cc89[_0x54667e(0x390)]+(_0x3b4635['butto'+'n']+(-0x24d3+-0x11e0+0x123c*0x3)));var _0x33f8f6=_0x4c459c[_0x25cc89['azNlx'](_0x3b4635['butto'+'n'],0x213f+0xcc3+-0x2e01)];if(_0x33f8f6){_0x33f8f6['push'](performance[_0x54667e(0x22b)]());if(_0x25cc89['HfDHk'](_0x33f8f6[_0x54667e(0x6a7)+'h'],0x137c+-0x8ab+-0xaa9))_0x33f8f6['shift']();}}function _0x17fba2(_0x310dd8){var _0x2a9ef5=_0x1c6043;if(!_0x310dd8['__sak'+'ura'])_0x39e3a8[_0x2a9ef5(0x71f)+'e'](_0x25cc89[_0x2a9ef5(0x243)](_0x2a9ef5(0x56b),_0x25cc89[_0x2a9ef5(0x2f1)](_0x310dd8['butto'+'n'],0x2*-0xaff+-0x14c9+0x2ac8)));}function _0x2a5adf(){var _0x337ef0=_0x1c6043;_0x39e3a8[_0x337ef0(0x363)]();}function _0x41679d(){var _0x241d25=_0x1c6043;if(_0x1332f7)return;_0x1332f7=!![],window['addEv'+_0x241d25(0x263)+_0x241d25(0x478)+'r'](_0x25cc89[_0x241d25(0x671)],_0x4e069e,!![]),window[_0x241d25(0x56c)+_0x241d25(0x263)+_0x241d25(0x478)+'r'](_0x25cc89['PGjFG'],_0x46e059,!![]),window['addEv'+_0x241d25(0x263)+'stene'+'r'](_0x241d25(0x56b)+_0x241d25(0x31a),_0x242dc9,!![]),window[_0x241d25(0x56c)+'entLi'+'stene'+'r'](_0x241d25(0x56b)+'up',_0x17fba2,!![]),window[_0x241d25(0x56c)+'entLi'+'stene'+'r'](_0x25cc89['UuceM'],_0x2a5adf);}function _0x198f5f(_0x35adf4){var _0x21f714=_0x1c6043,_0x473ff2=_0x4c459c[_0x35adf4]||[],_0x35e338=performance['now']();while(_0x473ff2[_0x21f714(0x6a7)+'h']&&_0x35e338-_0x473ff2[-0x25d3+0x931+0x1ca2]>-0x9*0x56+-0xde3+0x1*0x14d1)_0x473ff2[_0x21f714(0x4f9)]();return _0x473ff2[_0x21f714(0x6a7)+'h'];}function _0x212b2b(_0x3abd2c){var _0x1552c6=_0x1c6043;if(document['body']&&(_0x25cc89['VHcZT'](document['ready'+_0x1552c6(0x525)],_0x25cc89['bzebN'])||document['ready'+_0x1552c6(0x525)]===_0x1552c6(0x69f)+_0x1552c6(0x57b)))_0x25cc89['hgzBU'](_0x3abd2c);else document[_0x1552c6(0x56c)+'entLi'+_0x1552c6(0x478)+'r']('DOMCo'+'ntent'+_0x1552c6(0x407)+'d',_0x3abd2c,{'once':!![]});}_0x25cc89['FcEOO'](_0x212b2b,()=>{var _0x24cff5=_0x1c6043,_0x1cc46e={'PvLKK':'optio'+'n','OwhCS':_0x24cff5(0x4e7)+'|1|6|'+_0x24cff5(0x5ec),'bdedU':_0x24cff5(0x598),'SAkeN':function(_0x43ea63,_0x2e8706){var _0x335413=_0x24cff5;return _0x25cc89[_0x335413(0x2cd)](_0x43ea63,_0x2e8706);},'nxGWn':function(_0x5b4499,_0x46a3e2){return _0x5b4499*_0x46a3e2;},'FmQEG':_0x24cff5(0x1d7)+'255,2'+_0x24cff5(0x1b2)+_0x24cff5(0x572)+')','JoqQU':'cente'+'r','keNVu':_0x24cff5(0x5c8)+'e','oTBCt':'700\x20','lsCpg':function(_0xefc461,_0x452e14){return _0xefc461*_0x452e14;},'IUdLR':function(_0x3121aa,_0x59c575){return _0x3121aa+_0x59c575;},'VqSco':function(_0x505a76,_0x225021){var _0x1ac2f0=_0x24cff5;return _0x25cc89[_0x1ac2f0(0x614)](_0x505a76,_0x225021);},'QWUau':function(_0x520d62,_0x1e5dd7){return _0x520d62-_0x1e5dd7;},'LSumn':function(_0x57eb23,_0x4456fc){return _0x57eb23+_0x4456fc;},'MkPwy':_0x25cc89[_0x24cff5(0x35a)],'AMzZt':_0x25cc89[_0x24cff5(0x4e1)],'kEDxV':function(_0x3c6b8a,_0x53f339){return _0x3c6b8a-_0x53f339;},'WgrQM':function(_0x957cce,_0x539a1e){return _0x957cce-_0x539a1e;},'bBXjc':function(_0x5baa89,_0x5f3c23){return _0x5baa89-_0x5f3c23;},'GCTOL':function(_0x1cca90,_0x4940f8){return _0x25cc89['HcLlp'](_0x1cca90,_0x4940f8);},'JSuJY':function(_0x4f53ad,_0xffee13){return _0x4f53ad*_0xffee13;},'hmPqR':function(_0x4ef612,_0x3eff61){return _0x4ef612*_0x3eff61;},'yDUOI':_0x24cff5(0x5ba)+'9d','GBmWJ':function(_0x28ceb9,_0xaeaf1f){var _0x5e0840=_0x24cff5;return _0x25cc89[_0x5e0840(0x3b5)](_0x28ceb9,_0xaeaf1f);},'LBIMt':_0x24cff5(0x517)+'n','jmJzV':_0x25cc89['bnaxM'],'nLbSr':_0x24cff5(0x333)+'h','XmUWW':function(_0x3eefb4,_0x368438){return _0x3eefb4(_0x368438);},'gAiJX':function(_0x21b210,_0x5c87ec){return _0x25cc89['BaILv'](_0x21b210,_0x5c87ec);},'XCzXC':_0x25cc89[_0x24cff5(0x1a1)],'JlvFN':'range','MKEhl':'sk-sl'+'ider','BYUnC':_0x25cc89['gKKys'],'AHyjo':function(_0xbc62be){var _0x412775=_0x24cff5;return _0x25cc89[_0x412775(0x227)](_0xbc62be);},'WCOcn':_0x25cc89['cDMyP'],'YnCjJ':function(_0x217939,_0x273cd4){return _0x25cc89['mBtSi'](_0x217939,_0x273cd4);},'jJobR':function(_0x44e9bc){return _0x44e9bc();},'uwFhv':_0x25cc89['Ykrtw'],'xqAIN':_0x25cc89[_0x24cff5(0x6fd)],'AEZrf':_0x24cff5(0x566)+_0x24cff5(0x694)+'ad','klnic':_0x24cff5(0x566)+_0x24cff5(0x2e1)+_0x24cff5(0x37d),'XNInw':function(_0x572212,_0x2b7ace,_0x387e17){var _0x2fbf2a=_0x24cff5;return _0x25cc89[_0x2fbf2a(0x1ad)](_0x572212,_0x2b7ace,_0x387e17);},'efYrQ':'YAIbi','MVPKS':_0x24cff5(0x315)+'|1|0|'+_0x24cff5(0x231),'CGWlV':_0x24cff5(0x283)+_0x24cff5(0x583)+_0x24cff5(0x1ee)+_0x24cff5(0x63a),'aTMYg':function(_0x378cb9,_0x862675){return _0x25cc89['BLlQc'](_0x378cb9,_0x862675);},'gdTeb':function(_0x17a5e9,_0x5c6465){return _0x17a5e9+_0x5c6465;},'Kgdjn':function(_0x1b6ce1,_0xfad30b){var _0x16b352=_0x24cff5;return _0x25cc89[_0x16b352(0x242)](_0x1b6ce1,_0xfad30b);},'ZCtDE':function(_0x3247c3,_0x1cc1b8){return _0x3247c3+_0x1cc1b8;},'kbcRF':_0x25cc89[_0x24cff5(0x1ea)],'ZrjDK':_0x25cc89['canPH'],'xKafI':'held','esWWF':_0x25cc89['vKPYd'],'hXpOa':'calls'+_0x24cff5(0x375)+_0x24cff5(0x448)+_0x24cff5(0x564)+'plica'+'tion.'+_0x24cff5(0x283)+_0x24cff5(0x583)+'Frame'+'Rate','qJByY':function(_0x3c950e,_0x12b74d,_0x416e8f){return _0x3c950e(_0x12b74d,_0x416e8f);},'CIheB':'Apply','SKWOJ':_0x25cc89['mLjyG'],'DCRMQ':_0x25cc89[_0x24cff5(0x439)],'yPvnv':function(_0x3c802d){return _0x3c802d();},'FXOMq':'qsBCI','qqsNy':_0x25cc89[_0x24cff5(0x535)],'vrQkn':_0x24cff5(0x1b8),'AyZjf':function(_0x473d88){return _0x473d88();},'iIUyz':function(_0x17932a,_0x254002){return _0x17932a(_0x254002);},'vzsNK':'God\x20M'+'ode','JoZmE':_0x25cc89[_0x24cff5(0x496)],'eHdqS':_0x25cc89['Jmwiw'],'KCSMs':_0x24cff5(0x48d)+'s\x20spr'+_0x24cff5(0x530)+'nd\x20ma'+_0x24cff5(0x513)+'ccura'+_0x24cff5(0x71c)+_0x24cff5(0x2f2)+'\x20weap'+_0x24cff5(0x305)+_0x24cff5(0x40a)+_0x24cff5(0x618),'ijWye':_0x24cff5(0x28a)+'\x20Fire'+_0x24cff5(0x213)+']','zDxiS':function(_0x272327,_0xca80c1,_0x42e757,_0x4409b9){var _0x5758c3=_0x24cff5;return _0x25cc89[_0x5758c3(0x660)](_0x272327,_0xca80c1,_0x42e757,_0x4409b9);},'CGUOa':_0x24cff5(0x264)+'e\x20val'+'ue','nzYXy':_0x24cff5(0x5b9)+_0x24cff5(0x4a0)+_0x24cff5(0x31c)+_0x24cff5(0x35e)+_0x24cff5(0x249)+'he\x20de'+_0x24cff5(0x51a)+'nt\x20ha'+_0x24cff5(0x721)+_0x24cff5(0x4b9)+'where'+'.','LeKBV':_0x24cff5(0x214),'IYNnr':function(_0x2dfa4a,_0x4c8bd7){var _0x5c14a0=_0x24cff5;return _0x25cc89[_0x5c14a0(0x248)](_0x2dfa4a,_0x4c8bd7);},'Algmr':_0x25cc89['uAzFq'],'TMsEz':_0x24cff5(0x2f0),'fZebG':_0x24cff5(0x38a)+'s\x20all'+_0x24cff5(0x383)+_0x24cff5(0x340)+'ment\x20'+'speed'+_0x24cff5(0x3eb)+_0x24cff5(0x6b9)+'us\x20ac'+_0x24cff5(0x6d2)+_0x24cff5(0x226)+'.','GtYvC':function(_0x3e9069,_0x371daa,_0x1294f2,_0x1af1d5){return _0x3e9069(_0x371daa,_0x1294f2,_0x1af1d5);},'YmmkF':_0x25cc89['TlBHI'],'sdShI':function(_0x2317f7,_0x2c87e2,_0xfc7948,_0x2e9dc5,_0x478f61,_0x50a85c){return _0x2317f7(_0x2c87e2,_0xfc7948,_0x2e9dc5,_0x478f61,_0x50a85c);},'oqvjl':_0x24cff5(0x674)+'%','kxwuF':function(_0x22f354,_0x14d8f9,_0x4f0622,_0x17f5ca,_0x1e44e5,_0x5a8a14){var _0x407618=_0x24cff5;return _0x25cc89[_0x407618(0x5c2)](_0x22f354,_0x14d8f9,_0x4f0622,_0x17f5ca,_0x1e44e5,_0x5a8a14);},'Megaz':_0x24cff5(0x276)+_0x24cff5(0x206),'eTHZq':'lower'+'\x20=\x20fl'+_0x24cff5(0x5e3),'znKdV':_0x25cc89[_0x24cff5(0x239)],'uZwBQ':function(_0x1b1280,_0x288589){return _0x1b1280===_0x288589;},'WrXIL':_0x24cff5(0x6a6)+'l','oWnii':_0x25cc89[_0x24cff5(0x194)],'KafCu':'Keyst'+_0x24cff5(0x462),'bVitq':function(_0xd5cda1,_0x2d3a40,_0x1bf1d6,_0x1514be){return _0x25cc89['CCosX'](_0xd5cda1,_0x2d3a40,_0x1bf1d6,_0x1514be);},'tfPUp':function(_0x399b5e,_0x1f74eb,_0x463c14,_0x2df201){return _0x399b5e(_0x1f74eb,_0x463c14,_0x2df201);},'FDgLM':_0x24cff5(0x187)+_0x24cff5(0x662)+'ht','SgMCR':function(_0x578f01,_0xc72b69,_0x8e9e4a,_0xdb8b88){return _0x25cc89['ZQlFa'](_0x578f01,_0xc72b69,_0x8e9e4a,_0xdb8b88);},'irziZ':function(_0x446a1d,_0x583318,_0x997201){return _0x25cc89['gVhgc'](_0x446a1d,_0x583318,_0x997201);},'sHHSM':_0x24cff5(0x5c3)+'hair','rcCLT':_0x25cc89['yyxQr'],'xpHxb':_0x24cff5(0x273)+'ounte'+'r','KTldB':function(_0x1cbe23,_0x353e40){return _0x1cbe23(_0x353e40);},'VpQct':function(_0x390526,_0x1cbae0){return _0x390526===_0x1cbae0;},'paZcg':_0x24cff5(0x246)+_0x24cff5(0x5af)+'(over'+_0x24cff5(0x327)+'nly)','zwDgk':function(_0x2c4bcc,_0x521384){return _0x2c4bcc(_0x521384);},'lYLQQ':_0x25cc89[_0x24cff5(0x55a)],'YsRjb':_0x24cff5(0x505)+_0x24cff5(0x571)+'\x20relo'+'ad.','xmVkz':function(_0x476274,_0x1e4cd5,_0x3d77ac,_0x2ac8fb){return _0x476274(_0x1e4cd5,_0x3d77ac,_0x2ac8fb);},'mcekV':_0x25cc89['yXzPW'],'XlBJn':function(_0x55a63a,_0x37c8e6,_0x3b5ee7){var _0x554102=_0x24cff5;return _0x25cc89[_0x554102(0x4d0)](_0x55a63a,_0x37c8e6,_0x3b5ee7);},'QNxRh':_0x25cc89[_0x24cff5(0x6e8)],'YXbYe':_0x25cc89[_0x24cff5(0x285)],'tLNTg':_0x24cff5(0x5ae)+_0x24cff5(0x4f8)+'r','toait':'God/d'+'amage'+'/rapi'+'d\x20gre'+'atly\x20'+_0x24cff5(0x533)+'\x20ban\x20'+_0x24cff5(0x393)+_0x24cff5(0x6d9)+_0x24cff5(0x45e)+_0x24cff5(0x5fa)+_0x24cff5(0x210),'FuAMS':'Reset','HCSHx':_0x25cc89[_0x24cff5(0x6e3)],'MFluw':function(_0x11c5e2,_0x55fc78){return _0x11c5e2<_0x55fc78;},'huQrE':_0x24cff5(0x56d),'qIGnS':_0x24cff5(0x4f4)+_0x24cff5(0x552)+'-\x20ove'+_0x24cff5(0x6ba)+_0x24cff5(0x3be)+'\x20no\x20h'+'ooks\x20'+'(relo'+_0x24cff5(0x5e2)+'\x20exit'+')','ivwXq':function(_0x204909,_0x4812e5){return _0x204909+_0x4812e5;},'mEiLE':function(_0x21fe13,_0x274a91){return _0x21fe13+_0x274a91;},'gmASt':function(_0x23d1b6,_0x472ed5){return _0x23d1b6+_0x472ed5;},'XDgaG':_0x25cc89[_0x24cff5(0x66d)],'KmcNx':_0x25cc89['ROyDM'],'tbsUM':_0x25cc89[_0x24cff5(0x586)],'Dhfvm':_0x25cc89['EBkoa'],'dRfcd':_0x25cc89['kSAJm'],'kKpNJ':_0x25cc89['GyHYD'],'Bangr':function(_0x1a2f96,_0x21281b){var _0x43a266=_0x24cff5;return _0x25cc89[_0x43a266(0x1a3)](_0x1a2f96,_0x21281b);},'tXlyP':_0x24cff5(0x5ca)+'R:\x20','TlEAW':_0x24cff5(0x33a)+'MISSI'+_0x24cff5(0x2c6)+'overl'+'ay\x20on'+_0x24cff5(0x707)+'einst'+_0x24cff5(0x5a2)+'he\x20us'+'erscr'+_0x24cff5(0x37e),'iRWwL':_0x25cc89['XhkKl'],'YyYxP':_0x24cff5(0x35f)+_0x24cff5(0x2b5)+_0x24cff5(0x401)+'\x200\x2024'+_0x24cff5(0x5d4)+_0x24cff5(0x321)+_0x24cff5(0x192)+_0x24cff5(0x521)+_0x24cff5(0x635)+_0x24cff5(0x40c)+_0x24cff5(0x704)+'12\x2021'+_0x24cff5(0x1a8)+_0x24cff5(0x69d)+'4-4.5'+'-4-7.'+_0x24cff5(0x560)+_0x24cff5(0x703)+'8-4.5'+_0x24cff5(0x5f7)+_0x24cff5(0x59a)+'\x204\x204.'+_0x24cff5(0x4c3)+'-2.5\x20'+'5-4\x207'+_0x24cff5(0x23a)+_0x24cff5(0x4fa)+_0x24cff5(0x1a5)+_0x24cff5(0x30b)+_0x24cff5(0x559)+_0x24cff5(0x5ba)+_0x24cff5(0x66b)+_0x24cff5(0x5d8)+'-widt'+'h=\x222\x22'+_0x24cff5(0x2ea)+_0x24cff5(0x5e4)+'necap'+'=\x22rou'+'nd\x22\x20s'+'troke'+_0x24cff5(0x1c7)+'join='+'\x22roun'+_0x24cff5(0x69a)+_0x24cff5(0x714)+_0x24cff5(0x2da)+_0x24cff5(0x32d)+'cy=\x221'+'0\x22\x20r='+_0x24cff5(0x623)+_0x24cff5(0x290)+_0x24cff5(0x2dd)+'6b9d\x22'+'/></s'+_0x24cff5(0x4c1),'IWNOF':_0x25cc89['GAgkW'],'lPlhm':_0x25cc89[_0x24cff5(0x26a)],'XCrRB':'Close','TwIVi':_0x24cff5(0x35f)+'viewB'+_0x24cff5(0x401)+_0x24cff5(0x451)+_0x24cff5(0x1c6)+_0x24cff5(0x40c)+'\x20d=\x22M'+'6\x206l1'+'2\x2012M'+'18\x206\x20'+_0x24cff5(0x677)+'/></s'+'vg>','LShXx':_0x25cc89[_0x24cff5(0x19e)],'Jsipb':function(_0x3b81df,_0x55d687){return _0x3b81df+_0x55d687;},'FZXOZ':_0x25cc89['MNxEE'],'ExoMo':function(_0x253909,_0x444431){return _0x253909(_0x444431);},'wKLav':'Unity'+'Engin'+_0x24cff5(0x4b8)+'licat'+'ion','NdRkQ':function(_0x374be0,_0x4f5da3,_0x2e02a5,_0x79ba7d,_0x174f49,_0x2a637d){return _0x374be0(_0x4f5da3,_0x2e02a5,_0x79ba7d,_0x174f49,_0x2a637d);},'CPQXV':_0x25cc89[_0x24cff5(0x348)],'AJsja':function(_0x32688b,_0x5afeef){return _0x32688b===_0x5afeef;},'tZEyk':_0x24cff5(0x51f),'BGMWz':_0x25cc89[_0x24cff5(0x4fd)],'ovJuk':function(_0xe24800){return _0xe24800();},'RGbPU':function(_0xc7e215){return _0x25cc89['wxtNI'](_0xc7e215);}};_0x42c7ad['adblo'+'ck']&&setInterval(()=>{var _0x10e35c=_0x24cff5;if(_0x25cc89[_0x10e35c(0x38e)](_0x10e35c(0x1da),_0x25cc89['NPRnZ'])){var _0x36b375=_0x5d74b1['creat'+_0x10e35c(0x294)+_0x10e35c(0x1e8)](_0x1cc46e[_0x10e35c(0x70f)]);_0x36b375['value']=_0x16908f,_0x36b375['textC'+_0x10e35c(0x3db)+'t']=_0x4cf76a,_0xcc64c2[_0x10e35c(0x2c5)+_0x10e35c(0x36c)+'d'](_0x36b375);}else try{for(var _0x4d5301 of[_0x25cc89[_0x10e35c(0x27b)],'kour-'+_0x10e35c(0x319)+'8x90-'+_0x10e35c(0x18b)+'t',_0x10e35c(0x417)+_0x10e35c(0x664)+'0x600'+_0x10e35c(0x205)+'nt',_0x10e35c(0x1be)+_0x10e35c(0x343)+'-banr'+'s']){if(_0x10e35c(0x562)===_0x10e35c(0x562)){var _0x3774ea=document[_0x10e35c(0x259)+_0x10e35c(0x605)+'ById'](_0x4d5301);if(_0x3774ea&&_0x25cc89[_0x10e35c(0x38e)](_0x4d5301,'fulls'+_0x10e35c(0x343)+_0x10e35c(0x3c8)+'s')){if(_0x25cc89[_0x10e35c(0x1e6)]!==_0x25cc89['gMfGb']){var _0xfa7c76=_0x3774ea['child'+'ren'];for(var _0x56c224=-0x1f7*-0x1+-0x182d+0x1636;_0x25cc89['Nmvex'](_0x56c224,_0xfa7c76[_0x10e35c(0x6a7)+'h']);_0x56c224++){if(_0xfa7c76[_0x56c224]['id']&&_0x25cc89['CBNvg'](_0xfa7c76[_0x56c224]['id'][_0x10e35c(0x1d4)+'Of'](_0x25cc89['GpMEu']),0x1a03+0x1a19+0xa*-0x536))_0xfa7c76[_0x56c224][_0x10e35c(0x47a)][_0x10e35c(0x22d)+'ay']=_0x25cc89['GyHYD'];}}else _0x40e3e5=new _0x2e235f(),_0x4e6db8[_0x10e35c(0x26c)](_0x15305b,_0x353d51);}else{if(_0x3774ea)_0x3774ea[_0x10e35c(0x47a)]['displ'+'ay']=_0x25cc89[_0x10e35c(0x1ba)];}}else _0xa2841c=_0x1b0d27&&_0x2ea000['val']?_0x161f3a[_0x10e35c(0x322)]():-0x2f*-0x22+0x3f7+-0xa35;}}catch(_0x450a35){}},-0x1*0x9d4+0x26a9+-0x1505);var _0xd02d63=document[_0x24cff5(0x415)+_0x24cff5(0x294)+_0x24cff5(0x1e8)]('canva'+'s');_0xd02d63[_0x24cff5(0x47a)][_0x24cff5(0x68b)+'xt']=_0x25cc89[_0x24cff5(0x634)];var _0x4c3138=_0xd02d63['getCo'+'ntext']('2d');function _0x112674(){var _0x5f742=_0x24cff5;try{if(_0x5f742(0x6ed)===_0x5f742(0x1d2)){var _0x3b3bd8=_0x1cc46e['OwhCS']['split']('|'),_0x4a2477=0x587+-0x4*-0x3b+0x673*-0x1;while(!![]){switch(_0x3b3bd8[_0x4a2477++]){case'0':_0x407696[_0x5f742(0x2c5)+'dChil'+'d'](_0x572a2d);continue;case'1':_0x572a2d[_0x5f742(0x321)+'Name']='sk-md'+'esc';continue;case'2':_0x407696[_0x5f742(0x321)+_0x5f742(0x220)]='sk-mb'+_0x5f742(0x1d9);continue;case'3':var _0x572a2d=_0x8ffaae[_0x5f742(0x415)+'eElem'+'ent']('div');continue;case'4':var _0x407696=_0x3a4b1b[_0x5f742(0x415)+'eElem'+_0x5f742(0x1e8)](_0x5f742(0x379));continue;case'5':_0x32d444['appen'+_0x5f742(0x36c)+'d'](_0x407696);continue;case'6':_0x572a2d[_0x5f742(0x63b)+'onten'+'t']=_0x3a1d6d;continue;case'7':for(var _0x3bb46f of _0x5c6e8a)_0x407696[_0x5f742(0x2c5)+_0x5f742(0x36c)+'d'](_0x3bb46f);continue;}break;}}else{var _0x2a4365=document[_0x5f742(0x1be)+_0x5f742(0x343)+_0x5f742(0x49e)+'nt'],_0x1ae296=_0x2a4365&&_0x2a4365['tagNa'+'me']!==_0x5f742(0x41b)+'S'?_0x2a4365:document['body']||document['docum'+_0x5f742(0x280)+_0x5f742(0x605)];if(_0xd02d63['paren'+'tNode']!==_0x1ae296)_0x1ae296['appen'+_0x5f742(0x36c)+'d'](_0xd02d63);}}catch(_0x5f5a7f){try{_0x5f742(0x3de)!==_0x25cc89[_0x5f742(0x639)]?document['body'][_0x5f742(0x2c5)+_0x5f742(0x36c)+'d'](_0xd02d63):_0x564900['enabl'+'ed']=![];}catch(_0x145353){}}}var _0x48b8ee={'w':0x0,'h':0x0,'dpr':0x0};function _0x2c6208(){var _0x58a479=_0x24cff5;if(_0x1cc46e['bdedU']==='zLfeI'){var _0x343a4a=window[_0x58a479(0x654)+_0x58a479(0x700)+'lRati'+'o']||-0x193e+-0x2683+-0x1*-0x3fc2,_0x17cc8b=window[_0x58a479(0x4cc)+'Width'],_0x30b8c1=window[_0x58a479(0x4cc)+_0x58a479(0x5e9)+'t'];if(_0x1cc46e[_0x58a479(0x21e)](_0x17cc8b,_0x48b8ee['w'])&&_0x30b8c1===_0x48b8ee['h']&&_0x343a4a===_0x48b8ee['dpr'])return;_0x48b8ee['w']=_0x17cc8b,_0x48b8ee['h']=_0x30b8c1,_0x48b8ee[_0x58a479(0x59e)]=_0x343a4a,_0xd02d63['width']=Math['round'](_0x17cc8b*_0x343a4a),_0xd02d63[_0x58a479(0x51b)+'t']=Math[_0x58a479(0x578)](_0x30b8c1*_0x343a4a),_0x4c3138[_0x58a479(0x46e)+'ansfo'+'rm'](_0x343a4a,-0x11f*0x13+0x898+0x1*0xcb5,-0x15b1*0x1+-0x1*-0x2140+-0xb8f,_0x343a4a,0x1b70+0x3bf*-0x7+-0x1*0x137,-0x16d3+-0x99c+-0x13*-0x1b5);}else _0x4218a5[_0x58a479(0x36e)+_0x58a479(0x2ca)+_0x58a479(0x226)](),_0x3f3e31();}var _0x412b80=-0x19*0x131+0x1*0x9d1+0x3*0x6a8,_0x7f0b87=performance[_0x24cff5(0x22b)](),_0x4e28c3=0x702+-0x1*0x1e2c+0x172a;function _0x3df6a8(_0xb9a30e){var _0x3a0aa7=_0x24cff5,_0x1854b6={'tYNER':_0x3a0aa7(0x417)+'io_'},_0x2ca80f=Number(_0x42c7ad[_0x3a0aa7(0x663)+'le'])||0x1c1a+0x1*-0x1115+0x1d6*-0x6,_0x4a67a8=(0x1*0x1a4f+0x1*0x1154+-0x2b81)*_0x2ca80f,_0x3eed5f=_0x25cc89[_0x3a0aa7(0x62c)](-0x5a6*-0x2+-0x384+-0x7c4,_0x2ca80f),_0x3dca77=_0x25cc89['DKRrB'](_0x25cc89[_0x3a0aa7(0x4c6)](_0x4a67a8,-0xca6+-0x240c+0x30b5),_0x3eed5f*(0xdf*0x1f+0x1efd+-0x39fc)),_0x26e79e=_0x25cc89['gHRyt'](_0x4a67a8*(-0x194d+-0x25a5+0x47*0xe3),_0x3eed5f*(0x1*0x2195+0x1*-0x2635+-0x1*-0x4a2)),_0x5091e2=_0x42c7ad[_0x3a0aa7(0x216)],_0x126a3f=_0x5091e2==='br'?_0xb9a30e['right']-(0x1327*0x1+0x1ebc+-0x31d3)-_0x3dca77:_0xb9a30e['left']+(0x1*0x23a1+-0x5*0x5d+0x18*-0x168),_0x3c3241=_0x5091e2==='ml'?_0x25cc89[_0x3a0aa7(0x337)](_0xb9a30e['top']+_0x25cc89['zUfrp'](_0xb9a30e[_0x3a0aa7(0x51b)+'t'],0x11de+0xb52+-0x1d2e),_0x26e79e/(0x939*0x3+0x9e3*-0x1+-0x11c6)):_0x25cc89[_0x3a0aa7(0x1e2)](_0x25cc89['HcLlp'](_0xb9a30e['botto'+'m'],_0x26e79e),_0x25cc89[_0x3a0aa7(0x2cd)](_0x5091e2,'bl')?0x25*0xda+0x1bf4+-0x3b16:-0x11a+-0x1da6+0x1f56),_0xe65adb=(_0xe22440,_0x4fc10e,_0x41d508,_0x1e8c43,_0x223172,_0x4e23a8,_0xbca1fb)=>{var _0x1f9175=_0x3a0aa7,_0x275dd8=_0x39e3a8[_0x1f9175(0x6cb)](_0x4fc10e);_0x4c3138['save'](),_0x4c3138[_0x1f9175(0x609)+'Path']();if(_0x4c3138[_0x1f9175(0x578)+_0x1f9175(0x6e4)])_0x4c3138[_0x1f9175(0x578)+'Rect'](_0x41d508,_0x1e8c43,_0x223172,_0x4e23a8,_0x1cc46e['nxGWn'](-0x15ae+0x2*0x3bb+0xe3f,_0x2ca80f));else _0x4c3138[_0x1f9175(0x573)](_0x41d508,_0x1e8c43,_0x223172,_0x4e23a8);_0x4c3138[_0x1f9175(0x5c9)+'tyle']=_0x275dd8?_0x1f9175(0x1d7)+_0x1f9175(0x592)+'07,15'+'7,0.8'+'5)':'rgba('+_0x1f9175(0x4e3)+'16,0.'+'7)',_0x4c3138['fill'](),_0x4c3138[_0x1f9175(0x245)+'idth']=0xc*0x1c5+0x741+-0x2*0xe3e,_0x4c3138[_0x1f9175(0x250)+'eStyl'+'e']=_0x275dd8?_0x463996:_0x1f9175(0x1d7)+_0x1f9175(0x592)+_0x1f9175(0x29f)+_0x1f9175(0x196)+'5)',_0x4c3138[_0x1f9175(0x250)+'e']();if(_0x275dd8){if(_0x1f9175(0x43d)!==_0x1f9175(0x471))_0x4c3138[_0x1f9175(0x4b3)+'wColo'+'r']=_0xcd3984,_0x4c3138['shado'+_0x1f9175(0x18c)]=0xa*-0x19d+-0x24f8+-0x3528*-0x1,_0x4c3138['fill'](),_0x4c3138[_0x1f9175(0x4b3)+_0x1f9175(0x18c)]=-0x2576*0x1+-0x26c3*-0x1+-0x14d;else{if(_0x5cac90[_0x275092]['id']&&_0x3a7d63[_0x2570ee]['id'][_0x1f9175(0x1d4)+'Of'](_0x1854b6['tYNER'])===0x12d*0x1d+-0x1*-0x2627+-0x8*0x908)_0x55e5c8[_0x7579bb][_0x1f9175(0x47a)]['displ'+'ay']='none';}}_0x4c3138['fillS'+_0x1f9175(0x424)]=_0x275dd8?_0x1f9175(0x2c1):_0x1cc46e[_0x1f9175(0x40e)],_0x4c3138['textA'+'lign']=_0x1cc46e[_0x1f9175(0x529)],_0x4c3138[_0x1f9175(0x39c)+_0x1f9175(0x6ff)+'ne']=_0x1cc46e[_0x1f9175(0x184)],_0x4c3138['font']=_0x1cc46e[_0x1f9175(0x237)]+Math['round'](_0x1cc46e[_0x1f9175(0x1e7)](0x16d9+0x59*-0x2b+-0x7da,_0x2ca80f))+(_0x1f9175(0x3ad)+_0x1f9175(0x440)+_0x1f9175(0x302)+_0x1f9175(0x6da)+_0x1f9175(0x5a3)+'i,san'+_0x1f9175(0x550)+'if'),_0x4c3138['fillT'+_0x1f9175(0x331)](_0xe22440,_0x1cc46e[_0x1f9175(0x32b)](_0x41d508,_0x1cc46e[_0x1f9175(0x1b0)](_0x223172,-0x11bc*0x1+-0x1*-0x19b1+-0x197*0x5)),_0x1cc46e[_0x1f9175(0x350)](_0x1cc46e[_0x1f9175(0x3c6)](_0x1e8c43,_0x4e23a8/(-0x16de+-0x1*0x245+-0x1925*-0x1)),_0xbca1fb?(0x16b0+-0x1*-0x2519+-0x3bc4)*_0x2ca80f:0x1*-0x1039+0x11bd+0x2*-0xc2)),_0xbca1fb&&(_0x4c3138[_0x1f9175(0x3e9)]=_0x1cc46e[_0x1f9175(0x3c6)](_0x1cc46e[_0x1f9175(0x514)],Math[_0x1f9175(0x578)]((0x5*0x3b9+-0x21a9*0x1+0x8f*0x1b)*_0x2ca80f))+_0x1cc46e[_0x1f9175(0x443)],_0x4c3138['fillS'+_0x1f9175(0x424)]=_0x275dd8?_0x1f9175(0x2c1):'rgba('+_0x1f9175(0x3bc)+'35,24'+'0,0.5'+'5)',_0x4c3138['fillT'+'ext'](_0xbca1fb,_0x1cc46e[_0x1f9175(0x3c6)](_0x41d508,_0x1cc46e[_0x1f9175(0x1b0)](_0x223172,0x12*0x67+-0x1fc7+0x3d*0x67)),_0x1cc46e['IUdLR'](_0x1e8c43,_0x4e23a8/(0x257b+0x1185+-0x36fe))+_0x1cc46e['lsCpg'](0x5ef*0x1+0x1520+0x197*-0x11,_0x2ca80f))),_0x4c3138[_0x1f9175(0x1f7)+'re']();};_0xe65adb('W',_0x25cc89[_0x3a0aa7(0x26e)],_0x25cc89['zchAJ'](_0x126a3f,_0x4a67a8)+_0x3eed5f,_0x3c3241,_0x4a67a8,_0x4a67a8),_0xe65adb('A',_0x25cc89[_0x3a0aa7(0x3c0)],_0x126a3f,_0x25cc89['QiTqU'](_0x3c3241,_0x4a67a8)+_0x3eed5f,_0x4a67a8,_0x4a67a8),_0xe65adb('S',_0x25cc89['INDCZ'],_0x25cc89[_0x3a0aa7(0x667)](_0x25cc89[_0x3a0aa7(0x19f)](_0x126a3f,_0x4a67a8),_0x3eed5f),_0x25cc89[_0x3a0aa7(0x2c9)](_0x3c3241,_0x4a67a8)+_0x3eed5f,_0x4a67a8,_0x4a67a8),_0x25cc89['oQYqu'](_0xe65adb,'D','KeyD',_0x126a3f+_0x25cc89[_0x3a0aa7(0x6e5)](_0x4a67a8+_0x3eed5f,-0xaa3+-0x1*-0x3d+-0x534*-0x2),_0x25cc89[_0x3a0aa7(0x19f)](_0x25cc89['BLlQc'](_0x3c3241,_0x4a67a8),_0x3eed5f),_0x4a67a8,_0x4a67a8);var _0x3dd33f=(_0x3dca77-_0x3eed5f)/(0xaf4+0x1*-0x31d+-0x7d5),_0x2c3396=_0x3c3241+_0x25cc89['vNvub'](_0x4a67a8+_0x3eed5f,0xc8d+0x753+-0x13de);_0x25cc89[_0x3a0aa7(0x41c)](_0xe65adb,'LMB',_0x3a0aa7(0x56b)+'1',_0x126a3f,_0x2c3396,_0x3dd33f,_0x4a67a8,_0x42c7ad[_0x3a0aa7(0x287)]?_0x25cc89['aiTTF'](_0x198f5f,-0x1219+0x2f*-0x34+0x1ba6)+_0x25cc89['IsdIW']:''),_0xe65adb(_0x3a0aa7(0x495),_0x3a0aa7(0x56b)+'3',_0x126a3f+_0x3dd33f+_0x3eed5f,_0x2c3396,_0x3dd33f,_0x4a67a8,_0x42c7ad[_0x3a0aa7(0x287)]?_0x25cc89['JDppe'](_0x198f5f,-0xaad+-0x1*0xffc+0x1aac)+_0x3a0aa7(0x6e7):''),_0xe65adb('',_0x25cc89[_0x3a0aa7(0x261)],_0x126a3f,_0x25cc89['WSMXx'](_0x2c3396,_0x4a67a8)+_0x3eed5f,_0x3dca77,_0x25cc89[_0x3a0aa7(0x596)](_0x4a67a8,0x1935+-0x21ed+0x8b8+0.45));}function _0x2aa644(_0x37ceb1){var _0x27df83=_0x24cff5,_0x54d43e=(_0x27df83(0x5f0)+_0x27df83(0x207)+_0x27df83(0x1c4)+_0x27df83(0x65c)+_0x27df83(0x538)+'1|8|0'+_0x27df83(0x629)+_0x27df83(0x29e)+'3|13|'+_0x27df83(0x195)+_0x27df83(0x44a)+_0x27df83(0x656)+'9')['split']('|'),_0x1051a9=0xb5*0xa+-0x2071+0x3*0x875;while(!![]){switch(_0x54d43e[_0x1051a9++]){case'0':_0x4c3138[_0x27df83(0x609)+_0x27df83(0x1bc)]();continue;case'1':_0x4c3138['begin'+'Path']();continue;case'2':_0x4c3138['lineT'+'o'](_0x1cc46e['kEDxV'](_0x445465,_0x3e001e),_0x473048);continue;case'3':_0x4c3138[_0x27df83(0x6ae)+'o'](_0x445465,_0x1cc46e[_0x27df83(0x2fb)](_0x1cc46e[_0x27df83(0x62b)](_0x473048,_0x3e001e),_0x307a6d));continue;case'4':_0x4c3138[_0x27df83(0x6ae)+'o'](_0x1cc46e['IUdLR'](_0x445465,_0x3e001e),_0x473048);continue;case'5':_0x4c3138[_0x27df83(0x250)+'e']();continue;case'6':_0x4c3138['moveT'+'o'](_0x445465,_0x473048+_0x3e001e);continue;case'7':_0x4c3138[_0x27df83(0x6ae)+'o'](_0x1cc46e[_0x27df83(0x318)](_0x445465,_0x3e001e)-_0x307a6d,_0x473048);continue;case'8':var _0x3e001e=_0x1cc46e[_0x27df83(0x2d0)](0xc01+0x189b+-0x2496,_0x4589c9),_0x307a6d=_0x1cc46e[_0x27df83(0x223)](-0xd*0x293+-0x2504+-0x669*-0xb,_0x4589c9);continue;case'9':_0x4c3138[_0x27df83(0x1f7)+'re']();continue;case'10':_0x4c3138['lineW'+_0x27df83(0x399)]=Math['max'](0x6b9*-0x2+-0xd*-0x4+-0xd3f*-0x1+0.5,(0x195b+0x1*-0x59d+-0x13bc)*_0x4589c9);continue;case'11':_0x4c3138[_0x27df83(0x4b3)+_0x27df83(0x18c)]=0xe*0xdf+0x1*-0x156f+0x943;continue;case'12':var _0x252f88=/^#[0-9a-f]{6}$/i[_0x27df83(0x2bb)](_0x42c7ad[_0x27df83(0x638)+'or'])?_0x42c7ad['chCol'+'or']:_0x1cc46e[_0x27df83(0x2b1)];continue;case'13':_0x4c3138[_0x27df83(0x5fe)+'o'](_0x445465,_0x473048-_0x3e001e);continue;case'14':_0x4c3138['lineT'+'o'](_0x445465+_0x3e001e+_0x307a6d,_0x473048);continue;case'15':_0x4c3138[_0x27df83(0x4b1)]();continue;case'16':_0x4c3138[_0x27df83(0x5c9)+'tyle']=_0x252f88;continue;case'17':_0x4c3138['arc'](_0x445465,_0x473048,(0x40*-0x54+-0x2295+0xb1e*0x5+0.6000000000000001)*_0x4589c9,-0x5*-0x314+0x149*0x18+0x1*-0x2e3c,Math['PI']*(-0xe1a+-0x29*-0x9+0x439*0x3));continue;case'18':_0x4c3138[_0x27df83(0x4b3)+_0x27df83(0x1f0)+'r']=_0x252f88;continue;case'19':_0x4c3138[_0x27df83(0x5fe)+'o'](_0x445465,_0x1cc46e[_0x27df83(0x32b)](_0x473048,_0x3e001e)+_0x307a6d);continue;case'20':_0x4c3138[_0x27df83(0x52d)]();continue;case'21':var _0x445465=_0x37ceb1['width']/(-0x21d*-0xd+0x1ea9+-0x3a20),_0x473048=_0x1cc46e[_0x27df83(0x1b0)](_0x37ceb1[_0x27df83(0x51b)+'t'],0x1747*-0x1+-0x9bc+0x6b*0x4f);continue;case'22':_0x4c3138[_0x27df83(0x250)+'eStyl'+'e']=_0x252f88;continue;case'23':var _0x4589c9=Number(_0x42c7ad[_0x27df83(0x679)+'e'])||0x170*0x7+-0x210d*0x1+0x16fe;continue;}break;}}function _0x304a1d(_0x5104ec){var _0x100571=_0x24cff5,_0x566584={'lXVhD':'DTVTr'};_0x4c3138[_0x100571(0x52d)](),_0x4c3138['font']='600\x201'+'2px\x20u'+_0x100571(0x391)+_0x100571(0x191)+_0x100571(0x70c)+_0x100571(0x191)+'e',_0x4c3138['textA'+_0x100571(0x400)]=_0x100571(0x611),_0x4c3138[_0x100571(0x39c)+_0x100571(0x6ff)+'ne']=_0x25cc89[_0x100571(0x4fb)];var _0x4ffa21=-0x2b*-0x3d+-0x9db+0x1c*-0x2,_0x1af358=0xd*-0x1c8+-0x12d0+0x2a04,_0x377c17=(_0x38699f,_0x146b4d)=>{var _0x410199=_0x100571;if(_0x566584[_0x410199(0x5ce)]==='WCvaq'){if(_0x485444[_0x4fb445]&&_0x34444b[_0x432db7][_0x410199(0x1aa)+'ed'])_0x4c99db++;}else _0x4c3138['fillS'+_0x410199(0x424)]=_0x146b4d||_0x410199(0x1d7)+'255,2'+_0x410199(0x1b2)+_0x410199(0x59f)+'5)',_0x4c3138['fillT'+'ext'](_0x38699f,_0x1af358,_0x4ffa21),_0x4ffa21+=-0xb7c*-0x1+0xa3*0xd+-0x29*0x7b;};_0x25cc89['DVMjD'](_0x377c17,'SAKUR'+_0x100571(0x5f3)+'R\x20v1.'+'1',_0x25cc89[_0x100571(0x40b)]);if(_0x42c7ad[_0x100571(0x1f3)])_0x377c17(_0x4e28c3+'\x20FPS');if(!_0x15d093[_0x100571(0x3fa)+_0x100571(0x2f8)])_0x377c17(_0x25cc89[_0x100571(0x653)],_0x100571(0x1d7)+_0x100571(0x592)+_0x100571(0x298)+_0x100571(0x64c)+')');_0x4c3138[_0x100571(0x1f7)+'re']();}function _0x3c28a5(){var _0x38b050=_0x24cff5,_0x2c9f49={'dKxgj':function(_0x2dbd3c,_0x1a1d65){var _0x5d6af5=_0x3683;return _0x25cc89[_0x5d6af5(0x243)](_0x2dbd3c,_0x1a1d65);},'ClxUa':_0x25cc89[_0x38b050(0x68e)],'iiBNQ':_0x25cc89[_0x38b050(0x3a9)]};requestAnimationFrame(_0x3c28a5),_0x412b80++;var _0x1c7d17=performance[_0x38b050(0x22b)]();if(_0x1c7d17-_0x7f0b87>=-0x4db+-0x181e+0x111*0x1d){if(_0x25cc89['qZYZN'](_0x38b050(0x2f9),_0x25cc89['wnSzE'])){var _0x5d4675=_0x3b9dbb['creat'+_0x38b050(0x294)+_0x38b050(0x1e8)](_0x38b050(0x379));return _0x5d4675['class'+'Name']=_0x2c9f49['dKxgj'](_0x2c9f49['ClxUa'],_0x285157?_0x2c9f49['iiBNQ']:''),_0x5d4675['textC'+'onten'+'t']=_0x324f3b,_0x5d4675;}else _0x4e28c3=Math[_0x38b050(0x578)](_0x25cc89[_0x38b050(0x4c6)](_0x412b80,0x2483+0x1889+-0xd4*0x45)/(_0x1c7d17-_0x7f0b87)),_0x412b80=-0x134*0x4+0x2*-0x10f7+-0x6*-0x675,_0x7f0b87=_0x1c7d17;}_0x25cc89[_0x38b050(0x706)](_0x2c6208),_0x25cc89[_0x38b050(0x5ea)](_0x112674),_0x4c3138['clear'+_0x38b050(0x6e4)](-0x151*-0x8+-0x185f+0xdd7,-0x469+0x40f*-0x7+0x20d2,_0x48b8ee['w'],_0x48b8ee['h']);var _0x75a6aa={'left':0x0,'top':0x0,'right':_0x48b8ee['w'],'bottom':_0x48b8ee['h'],'width':_0x48b8ee['w'],'height':_0x48b8ee['h']};if(_0x42c7ad[_0x38b050(0x62a)+_0x38b050(0x25f)])_0x2aa644(_0x75a6aa);if(_0x42c7ad[_0x38b050(0x4b2)+'rokes'])_0x3df6a8(_0x75a6aa);_0x25cc89[_0x38b050(0x486)](_0x304a1d,_0x75a6aa);}var _0x1a5e72=document[_0x24cff5(0x415)+'eElem'+_0x24cff5(0x1e8)](_0x25cc89[_0x24cff5(0x1a1)]);_0x1a5e72['id']=_0x24cff5(0x2bf)+_0x24cff5(0x6d0),_0x1a5e72[_0x24cff5(0x47a)][_0x24cff5(0x68b)+'xt']=_0x24cff5(0x1cd)+_0x24cff5(0x643)+_0x24cff5(0x31e)+_0x24cff5(0x21b)+':0;z-'+_0x24cff5(0x1d4)+_0x24cff5(0x267)+_0x24cff5(0x4df)+_0x24cff5(0x4e2)+_0x24cff5(0x6ce)+_0x24cff5(0x631)+'s:non'+'e;';var _0x59ebb8=_0x1a5e72[_0x24cff5(0x269)+'hShad'+'ow']({'mode':'open'});(document[_0x24cff5(0x63c)]||document[_0x24cff5(0x60c)+_0x24cff5(0x280)+'ement'])[_0x24cff5(0x2c5)+_0x24cff5(0x36c)+'d'](_0x1a5e72);var _0x1cfdab=![],_0x756293={};try{_0x756293=JSON['parse'](localStorage[_0x24cff5(0x354)+'em'](_0x24cff5(0x2bf)+'a.kou'+'r.ui.'+'v1')||'{}');}catch(_0x2ae16d){}function _0x216a6e(){var _0x206faf=_0x24cff5,_0x5d27f3={'sEeDM':function(_0x2a3137,_0x23d098){return _0x2a3137!==_0x23d098;},'jAtrT':'aria-'+'check'+'ed','cnDFu':_0x25cc89[_0x206faf(0x500)],'WSngz':function(_0x552b47,_0x211212){return _0x552b47(_0x211212);}};if(_0x25cc89[_0x206faf(0x2cd)]('pNkVb',_0x206faf(0x2c3)))try{localStorage[_0x206faf(0x4c0)+'em'](_0x25cc89[_0x206faf(0x603)],JSON['strin'+'gify'](_0x756293));}catch(_0x36324d){}else{_0x1873ae[_0x206faf(0x36e)+_0x206faf(0x2ca)+'ation']();var _0x1dac45=_0x5d27f3[_0x206faf(0x54c)](_0x126bc8[_0x206faf(0x5aa)+_0x206faf(0x441)+'te'](_0x5d27f3[_0x206faf(0x6f1)]),_0x5d27f3[_0x206faf(0x5ac)]);_0x2026a8[_0x206faf(0x485)+_0x206faf(0x441)+'te'](_0x5d27f3['jAtrT'],_0x5d27f3[_0x206faf(0x353)](_0x267cc4,_0x1dac45)),_0x5aff86(_0x1dac45);}}function _0x52e7ae(_0x469419,_0x1ec844){var _0x3fc884=_0x24cff5,_0x54b0c5=document[_0x3fc884(0x415)+_0x3fc884(0x294)+'ent']('butto'+'n');return _0x54b0c5[_0x3fc884(0x396)]=_0x1cc46e[_0x3fc884(0x367)],_0x54b0c5['class'+_0x3fc884(0x220)]=_0x1cc46e['jmJzV'],_0x54b0c5[_0x3fc884(0x485)+_0x3fc884(0x441)+'te'](_0x3fc884(0x57c),_0x1cc46e[_0x3fc884(0x20a)]),_0x54b0c5[_0x3fc884(0x485)+'tribu'+'te']('aria-'+_0x3fc884(0x6f8)+'ed',_0x1cc46e['XmUWW'](String,!!_0x469419)),_0x54b0c5['oncli'+'ck']=_0x414fd2=>{var _0x5c15b2=_0x3fc884;if(_0x5c15b2(0x58b)===_0x5c15b2(0x58b)){_0x414fd2['stopP'+'ropag'+_0x5c15b2(0x226)]();var _0x400599=_0x1cc46e['GBmWJ'](_0x54b0c5['getAt'+'tribu'+'te'](_0x5c15b2(0x63f)+_0x5c15b2(0x6f8)+'ed'),_0x5c15b2(0x534));_0x54b0c5['setAt'+_0x5c15b2(0x441)+'te'](_0x5c15b2(0x63f)+'check'+'ed',String(_0x400599)),_0x1ec844(_0x400599);}else{var _0x5b8218=('1|0|4'+'|2|5|'+'3')[_0x5c15b2(0x1b6)]('|'),_0x2f1a8c=-0x1eaa+-0x8*-0x475+-0x4fe;while(!![]){switch(_0x5b8218[_0x2f1a8c++]){case'0':_0x4f4d12['hookG'+'odDie']=_0x1e357b;continue;case'1':_0x256343[_0x5c15b2(0x4fc)+'od']=_0x2e74f2;continue;case'2':_0x1f7f84[_0x5c15b2(0x244)+_0x5c15b2(0x2b7)+'e']=_0x1f8593;continue;case'3':_0x57a17d[_0x5c15b2(0x507)+'d']();continue;case'4':_0x37a2d1[_0x5c15b2(0x197)+'oReco'+'il']=_0x151629;continue;case'5':_0x520f47();continue;}break;}}},_0x54b0c5;}function _0x6e0a43(_0x19d870,_0x2e5c51,_0x8bc86d,_0x5a9224,_0x47b401){var _0x21d5b6=_0x24cff5,_0x4ee671={'Nxtoe':function(_0x1c24f6,_0x5adb2e){return _0x1cc46e['gAiJX'](_0x1c24f6,_0x5adb2e);}},_0x37d4fa=document[_0x21d5b6(0x415)+_0x21d5b6(0x294)+'ent'](_0x1cc46e['XCzXC']);_0x37d4fa['class'+_0x21d5b6(0x220)]='sk-ra'+_0x21d5b6(0x1e3);var _0x3301de=document['creat'+_0x21d5b6(0x294)+_0x21d5b6(0x1e8)](_0x21d5b6(0x6a8));_0x3301de[_0x21d5b6(0x396)]=_0x1cc46e[_0x21d5b6(0x3ef)],_0x3301de['class'+'Name']=_0x1cc46e[_0x21d5b6(0x3a6)],_0x3301de[_0x21d5b6(0x320)]=_0x2e5c51,_0x3301de['max']=_0x8bc86d,_0x3301de['step']=_0x5a9224,_0x3301de['value']=_0x19d870;var _0x27b23e=document[_0x21d5b6(0x415)+'eElem'+_0x21d5b6(0x1e8)](_0x21d5b6(0x3b6));_0x27b23e[_0x21d5b6(0x321)+'Name']=_0x1cc46e[_0x21d5b6(0x6f5)],_0x27b23e[_0x21d5b6(0x63b)+_0x21d5b6(0x3db)+'t']=String(_0x19d870);var _0x50c93a=()=>{var _0x1affb9=_0x21d5b6;_0x27b23e['textC'+_0x1affb9(0x3db)+'t']=String(_0x3301de['value']),_0x37d4fa['style'][_0x1affb9(0x3da)+_0x1affb9(0x325)+'y'](_0x1affb9(0x49d),_0x4ee671[_0x1affb9(0x181)](_0x3301de[_0x1affb9(0x682)],_0x2e5c51)/(_0x8bc86d-_0x2e5c51)*(0xb07*0x2+-0xc58*-0x1+-0x2202)+'%');};return _0x3301de[_0x21d5b6(0x5bd)+'ut']=()=>{var _0x54e17f=_0x21d5b6;_0x50c93a(),_0x47b401(Number(_0x3301de[_0x54e17f(0x682)]));},_0x1cc46e['AHyjo'](_0x50c93a),_0x37d4fa['appen'+'d'](_0x3301de,_0x27b23e),_0x37d4fa;}function _0x31e67f(_0x2d8a55,_0x34e8ae){var _0x31ab05=_0x24cff5,_0xc21828=(_0x31ab05(0x230)+_0x31ab05(0x434)+'4')[_0x31ab05(0x1b6)]('|'),_0x292dc0=-0x1ced+-0x26dc+0x43c9;while(!![]){switch(_0xc21828[_0x292dc0++]){case'0':_0x127c01[_0x31ab05(0x682)]=/^#[0-9a-f]{6}$/i[_0x31ab05(0x2bb)](_0x2d8a55)?_0x2d8a55:'#ff6b'+'9d';continue;case'1':var _0x127c01=document[_0x31ab05(0x415)+_0x31ab05(0x294)+_0x31ab05(0x1e8)](_0x25cc89['uSsvB']);continue;case'2':_0x127c01['type']=_0x31ab05(0x619);continue;case'3':_0x127c01['oninp'+'ut']=()=>_0x34e8ae(_0x127c01['value']);continue;case'4':return _0x127c01;case'5':_0x127c01[_0x31ab05(0x321)+_0x31ab05(0x220)]=_0x31ab05(0x308)+'lor';continue;}break;}}function _0x14edb2(_0x158f30,_0x3d2b7e,_0x3bb5da){var _0x59bef3=_0x24cff5,_0x4feda0=document[_0x59bef3(0x415)+_0x59bef3(0x294)+_0x59bef3(0x1e8)](_0x59bef3(0x2a1)+'t');_0x4feda0[_0x59bef3(0x321)+'Name']=_0x25cc89['mDizT'];for(var [_0x20f98a,_0x377ff7]of _0x3d2b7e){var _0x1232ab=document['creat'+_0x59bef3(0x294)+'ent'](_0x25cc89['xdovj']);_0x1232ab[_0x59bef3(0x682)]=_0x20f98a,_0x1232ab[_0x59bef3(0x63b)+'onten'+'t']=_0x377ff7,_0x4feda0['appen'+_0x59bef3(0x36c)+'d'](_0x1232ab);}return _0x4feda0['value']=_0x158f30,_0x4feda0['oncha'+'nge']=()=>_0x3bb5da(_0x4feda0['value']),_0x4feda0;}function _0x132713(_0x432eee,_0xb41561){var _0x4d8d6c=_0x24cff5,_0x5edbf4={'rhlvn':_0x4d8d6c(0x4f4)+_0x4d8d6c(0x552)+_0x4d8d6c(0x1ec)+_0x4d8d6c(0x6ba)+'only,'+_0x4d8d6c(0x6d1)+'ooks\x20'+'(relo'+'ad\x20to'+'\x20exit'+')','ucDUE':function(_0x38d95d,_0x5f0707){var _0x3205f4=_0x4d8d6c;return _0x25cc89[_0x3205f4(0x2c9)](_0x38d95d,_0x5f0707);},'EeppV':function(_0x1a1cde,_0x3b9b4f){return _0x1a1cde+_0x3b9b4f;},'ZoXiU':function(_0xc0052f,_0x166a96){var _0x1a0e43=_0x4d8d6c;return _0x25cc89[_0x1a0e43(0x667)](_0xc0052f,_0x166a96);},'YHpVI':_0x4d8d6c(0x5c4),'QtaYM':_0x25cc89[_0x4d8d6c(0x6fe)]};if(_0x25cc89['YYFuM'](_0x4d8d6c(0x2ec),_0x4d8d6c(0x2ec)))_0x5bb7f2['textC'+_0x4d8d6c(0x3db)+'t']=_0x2a8010(_0x5c4af7[_0x4d8d6c(0x682)]),_0x25219d[_0x4d8d6c(0x47a)][_0x4d8d6c(0x3da)+_0x4d8d6c(0x325)+'y'](_0x1cc46e[_0x4d8d6c(0x45a)],_0x1cc46e[_0x4d8d6c(0x1e7)](_0x1cc46e[_0x4d8d6c(0x431)](_0x5cf578[_0x4d8d6c(0x682)]-_0x62fd28,_0x1b32ae-_0x7217a2),0x175c+0x43f+-0x1b37*0x1)+'%');else{var _0xd7d323=document[_0x4d8d6c(0x415)+_0x4d8d6c(0x294)+_0x4d8d6c(0x1e8)]('butto'+'n');return _0xd7d323['type']=_0x25cc89['XLtpI'],_0xd7d323[_0x4d8d6c(0x321)+'Name']=_0x25cc89['GEpzj'],_0xd7d323[_0x4d8d6c(0x63b)+_0x4d8d6c(0x3db)+'t']=_0x432eee,_0xd7d323['oncli'+'ck']=_0x6b4f3c=>{var _0x5a0b18=_0x4d8d6c;'BJrXr'!=='gzVkz'?(_0x6b4f3c['stopP'+'ropag'+_0x5a0b18(0x226)](),_0xb41561()):_0x13daba[_0x5a0b18(0x63b)+'onten'+'t']=_0xc28cfe['safeM'+_0x5a0b18(0x476)]?_0x5edbf4[_0x5a0b18(0x466)]:_0x17fc97['uwmk']?_0x5edbf4[_0x5a0b18(0x2db)](_0x5a0b18(0x33a)+_0x5a0b18(0x46f)+'\x20'+(_0x87cbde['hooks'+_0x5a0b18(0x591)]?_0x5edbf4[_0x5a0b18(0x1cc)](_0x5edbf4['ZoXiU'](_0x2f44b3[_0x5a0b18(0x24f)+'Ok'],'/'),_0x3da000['hooks'+_0x5a0b18(0x591)])+(_0x5a0b18(0x19d)+'s'):_0x5a0b18(0x41f)+_0x5a0b18(0x673)+_0x5a0b18(0x458)+'all\x20o'+_0x5a0b18(0x360))+(_0x5a0b18(0x64b)+_0x5a0b18(0x5a8))+(_0x3fb8dd['gameL'+_0x5a0b18(0x2f8)]?_0x5a0b18(0x4e5)+'d':_0x5a0b18(0x24d)+'ng')+(_0x5a0b18(0x5fd)+_0x5a0b18(0x5f4)+'\x20'),_0x55016a['shoot'+_0x5a0b18(0x491)]?_0x5a0b18(0x4de):_0x5edbf4[_0x5a0b18(0x67a)])+_0x5edbf4[_0x5a0b18(0x21d)]+(_0x3b033d['movem'+'ents']?'held':_0x5a0b18(0x5c4))+(_0x2ba534[_0x5a0b18(0x549)+_0x5a0b18(0x3ba)]?'\x20|\x20ER'+'R:\x20'+_0x388b27[_0x5a0b18(0x549)+'rror']:''):'UWMK\x20'+_0x5a0b18(0x3cf)+_0x5a0b18(0x2c6)+_0x5a0b18(0x3c7)+_0x5a0b18(0x1bd)+'ly\x20(r'+'einst'+_0x5a0b18(0x5a2)+_0x5a0b18(0x3cb)+_0x5a0b18(0x69b)+_0x5a0b18(0x37e);},_0xd7d323;}}function _0x447e4e(_0x206238,_0x34ba04,_0x5e0804){var _0x498804=_0x24cff5,_0x1dacc5=document['creat'+_0x498804(0x294)+'ent'](_0x498804(0x379));_0x1dacc5['class'+'Name']=_0x25cc89[_0x498804(0x593)];var _0xc3d971=document['creat'+'eElem'+_0x498804(0x1e8)](_0x498804(0x3b6));_0xc3d971['class'+_0x498804(0x220)]=_0x25cc89[_0x498804(0x463)],_0xc3d971[_0x498804(0x63b)+_0x498804(0x3db)+'t']=_0x206238;if(_0x34ba04){var _0x2d3ae4=document[_0x498804(0x415)+_0x498804(0x294)+_0x498804(0x1e8)](_0x25cc89['pfmLw']);_0x2d3ae4['class'+_0x498804(0x220)]=_0x25cc89[_0x498804(0x309)],_0x2d3ae4[_0x498804(0x63b)+_0x498804(0x3db)+'t']=_0x34ba04,_0xc3d971[_0x498804(0x2c5)+_0x498804(0x36c)+'d'](_0x2d3ae4);}return _0x1dacc5[_0x498804(0x2c5)+'d'](_0xc3d971,_0x5e0804),_0x1dacc5;}function _0x1ab079(_0x5430c8,_0x145066){var _0x1703c1=_0x24cff5,_0x32cfb9=document[_0x1703c1(0x415)+_0x1703c1(0x294)+_0x1703c1(0x1e8)](_0x25cc89[_0x1703c1(0x1a1)]);return _0x32cfb9[_0x1703c1(0x321)+'Name']=_0x1703c1(0x65f)+'te'+(_0x145066?_0x25cc89[_0x1703c1(0x3a9)]:''),_0x32cfb9[_0x1703c1(0x63b)+'onten'+'t']=_0x5430c8,_0x32cfb9;}function _0x3a8f7c(_0x58d97d,_0xa5d9b2,_0x3cb7ef,_0x3a4efb,_0x3c1d50){var _0x133d26=_0x24cff5,_0x37cab9=document['creat'+_0x133d26(0x294)+_0x133d26(0x1e8)](_0x1cc46e[_0x133d26(0x392)]);_0x37cab9[_0x133d26(0x321)+_0x133d26(0x220)]=_0x1cc46e[_0x133d26(0x4e9)]+(_0x3cb7ef?_0x1cc46e[_0x133d26(0x233)]:'');var _0x25d677=document['creat'+_0x133d26(0x294)+'ent'](_0x1cc46e['XCzXC']);_0x25d677[_0x133d26(0x321)+'Name']=_0x1cc46e[_0x133d26(0x4ba)];var _0x474eee=document['creat'+'eElem'+_0x133d26(0x1e8)]('div');_0x474eee[_0x133d26(0x321)+_0x133d26(0x220)]=_0x1cc46e[_0x133d26(0x684)];var _0x452c5c=document['creat'+'eElem'+_0x133d26(0x1e8)](_0x133d26(0x44f)+'g');_0x452c5c[_0x133d26(0x63b)+_0x133d26(0x3db)+'t']=_0x58d97d,_0x474eee['appen'+'dChil'+'d'](_0x452c5c);if(_0x3a4efb){var _0x44f1f6=_0x1cc46e[_0x133d26(0x5b8)](_0x52e7ae,_0x3cb7ef,_0x1bd384=>{var _0x3ffbd4=_0x133d26;_0x37cab9[_0x3ffbd4(0x321)+_0x3ffbd4(0x51c)][_0x3ffbd4(0x6fc)+'e']('on',_0x1bd384),_0x3a4efb(_0x1bd384);});_0x25d677[_0x133d26(0x2c5)+'d'](_0x474eee,_0x44f1f6);}else _0x25d677[_0x133d26(0x2c5)+'dChil'+'d'](_0x474eee);_0x37cab9[_0x133d26(0x2c5)+_0x133d26(0x36c)+'d'](_0x25d677);if(_0x3c1d50&&_0x3c1d50[_0x133d26(0x6a7)+'h']){if(_0x1cc46e[_0x133d26(0x21e)](_0x133d26(0x297),_0x1cc46e[_0x133d26(0x6d5)])){var _0x83f62d=_0x1cc46e['MVPKS'][_0x133d26(0x1b6)]('|'),_0xe06c3b=0x1e68+-0x20e+0xbf*-0x26;while(!![]){switch(_0x83f62d[_0xe06c3b++]){case'0':_0x5c75e2['textC'+_0x133d26(0x3db)+'t']=_0xa5d9b2;continue;case'1':_0x5c75e2[_0x133d26(0x321)+'Name']='sk-md'+'esc';continue;case'2':var _0x5c75e2=document[_0x133d26(0x415)+'eElem'+_0x133d26(0x1e8)](_0x1cc46e['XCzXC']);continue;case'3':_0x37cab9[_0x133d26(0x2c5)+'dChil'+'d'](_0x2add76);continue;case'4':var _0x2add76=document[_0x133d26(0x415)+_0x133d26(0x294)+_0x133d26(0x1e8)](_0x133d26(0x379));continue;case'5':_0x2add76['class'+_0x133d26(0x220)]=_0x133d26(0x67d)+_0x133d26(0x1d9);continue;case'6':_0x2add76['appen'+'dChil'+'d'](_0x5c75e2);continue;case'7':for(var _0x1498db of _0x3c1d50)_0x2add76[_0x133d26(0x2c5)+_0x133d26(0x36c)+'d'](_0x1498db);continue;}break;}}else _0x52b870[_0x133d26(0x669)+_0x133d26(0x27d)]=_0x3ec0ee,_0x1cc46e['jJobR'](_0x2a0ba8);}return _0x37cab9;}var _0x3e8164=[{'id':'comba'+'t','label':_0x24cff5(0x4a1)+'t'},{'id':_0x24cff5(0x214),'label':_0x25cc89['HdfiH']},{'id':'visua'+'l','label':_0x24cff5(0x357)+'l'},{'id':_0x24cff5(0x520),'label':_0x24cff5(0x4da)},{'id':_0x24cff5(0x416),'label':'Safet'+'y'}];function _0x1a6703(){var _0x3b852a=_0x24cff5,_0x5e9c0d={'slvrl':function(_0x2f9674,_0x406d74){return _0x2f9674+_0x406d74;},'qoYLz':function(_0x34ff9f,_0x44f748){return _0x34ff9f/_0x44f748;},'XJNtX':function(_0xc69d58,_0x469438){return _0xc69d58!==_0x469438;},'VLSED':_0x3b852a(0x2cf)+_0x3b852a(0x621)+'e.App'+_0x3b852a(0x41d)+_0x3b852a(0x26b),'IHifm':_0x1cc46e[_0x3b852a(0x228)]},_0x3c3fdf=_0x15d093[_0x3b852a(0x636)+_0x3b852a(0x476)]?'SAFE\x20'+_0x3b852a(0x552)+_0x3b852a(0x2e5)+'rlay\x20'+'only,'+'\x20no\x20h'+_0x3b852a(0x3ff)+'(relo'+_0x3b852a(0x5e2)+'\x20exit'+')':_0x15d093['uwmk']?_0x1cc46e['aTMYg'](_0x1cc46e['gdTeb'](_0x1cc46e[_0x3b852a(0x480)]('UWMK\x20'+_0x3b852a(0x46f)+'\x20',_0x15d093[_0x3b852a(0x24f)+_0x3b852a(0x591)]?_0x1cc46e[_0x3b852a(0x275)](_0x15d093[_0x3b852a(0x24f)+'Ok']+'/',_0x15d093[_0x3b852a(0x24f)+'Total'])+(_0x3b852a(0x19d)+'s'):_0x1cc46e[_0x3b852a(0x28c)])+(_0x3b852a(0x64b)+_0x3b852a(0x5a8)),_0x15d093['gameL'+_0x3b852a(0x2f8)]?_0x3b852a(0x4e5)+'d':_0x3b852a(0x24d)+'ng')+_0x1cc46e[_0x3b852a(0x323)]+(_0x15d093[_0x3b852a(0x30f)+_0x3b852a(0x491)]?_0x1cc46e[_0x3b852a(0x4a8)]:'none'),_0x3b852a(0x5fc)+_0x3b852a(0x272)+'t\x20')+(_0x15d093['movem'+_0x3b852a(0x2e7)]?_0x1cc46e[_0x3b852a(0x4a8)]:_0x3b852a(0x5c4)):'UWMK\x20'+_0x3b852a(0x3cf)+_0x3b852a(0x558)+_0x3b852a(0x3c7)+'ay\x20on'+_0x3b852a(0x707)+'einst'+'all\x20t'+_0x3b852a(0x3cb)+_0x3b852a(0x69b)+'ipt)';if(_0x15d093['lastE'+'rror'])_0x3c3fdf+='\x20|\x20ER'+'R:\x20'+_0x15d093['lastE'+_0x3b852a(0x3ba)];return _0x3a8f7c(_0x3b852a(0x5eb)+'s',_0x3c3fdf,_0x15d093[_0x3b852a(0x3b7)],null,[_0x447e4e(_0x1cc46e[_0x3b852a(0x2c4)],_0x1cc46e['hXpOa'],_0x1cc46e[_0x3b852a(0x718)](_0x132713,_0x1cc46e[_0x3b852a(0x62f)],()=>{var _0x146703=_0x3b852a,_0x1e2a4a={'WDdNc':function(_0x440714,_0x4e4c29){var _0x3dd47b=_0x3683;return _0x5e9c0d[_0x3dd47b(0x345)](_0x440714,_0x4e4c29);},'jEZcP':'600\x20','ALkKt':function(_0x5abffa,_0x37c1aa){return _0x5e9c0d['qoYLz'](_0x5abffa,_0x37c1aa);},'gmaNV':function(_0x3531ca,_0x16102d){return _0x3531ca+_0x16102d;},'kippb':function(_0x264130,_0x20b003){return _0x264130/_0x20b003;},'wnAmo':function(_0x23e96c,_0x1cc230){return _0x23e96c*_0x1cc230;}};if(_0x5e9c0d[_0x146703(0x289)](_0x146703(0x2ce),_0x146703(0x50f)))try{if(_0x586449)_0x586449[_0x146703(0x258)](_0x5e9c0d[_0x146703(0x447)],_0x5e9c0d[_0x146703(0x4f0)],[0x1*-0xe89+-0x1*-0x13c8+-0x44f*0x1]);}catch(_0x1464f4){}else _0x61fcd6[_0x146703(0x3e9)]=_0x1e2a4a[_0x146703(0x5db)](_0x1e2a4a[_0x146703(0x334)],_0x2b1a4a['round']((0x2bf+0x299+-0x54f)*_0x1d49fb))+('px\x20ui'+'-sans'+'-seri'+_0x146703(0x6da)+'tem-u'+'i,san'+_0x146703(0x550)+'if'),_0x1cca6d['fillS'+_0x146703(0x424)]=_0x5dcde0?_0x146703(0x2c1):_0x146703(0x1d7)+'255,2'+_0x146703(0x1b2)+'0,0.5'+'5)',_0x215a45['fillT'+_0x146703(0x331)](_0x55fb82,_0x18ee5f+_0x1e2a4a['ALkKt'](_0x1a5b47,-0x20d0+-0x2b*-0x56+0x620*0x3),_0x1e2a4a['gmaNV'](_0x1cf774,_0x1e2a4a[_0x146703(0x610)](_0x228c02,0x4*-0x1c9+-0x24e6+0x2c0c))+_0x1e2a4a[_0x146703(0x3d9)](-0x7*0x24b+0x13d9+-0x3c4,_0x1a2173));}))]);}function _0x490679(_0x5b62c9){var _0x208aa9=_0x24cff5,_0x1a078e={'rYTkI':_0x1cc46e['qqsNy'],'qmRnI':function(_0x9b8c5,_0x578d86){return _0x9b8c5!==_0x578d86;},'KUBEL':'xPivg','Hmvwi':_0x1cc46e['vrQkn'],'UlBKO':function(_0x4699fb,_0x3d5060,_0x2fc43d){return _0x4699fb(_0x3d5060,_0x2fc43d);},'hwUek':function(_0x3620b8,_0x1c7dd0,_0x13600c){return _0x3620b8(_0x1c7dd0,_0x13600c);},'aEKLh':function(_0x5e4a50,_0xdd22b5){return _0x5e4a50!==_0xdd22b5;},'yCGpe':'mNAYy','RmAXo':function(_0x51e37a){var _0x45aafa=_0x3683;return _0x1cc46e[_0x45aafa(0x293)](_0x51e37a);},'xWIRb':function(_0x3a488a,_0x474986){var _0x5f2a0a=_0x3683;return _0x1cc46e[_0x5f2a0a(0x34c)](_0x3a488a,_0x474986);},'xpAIm':function(_0x54259f,_0x11bea7){return _0x1cc46e['iIUyz'](_0x54259f,_0x11bea7);},'Pryxr':function(_0x23f3da){return _0x23f3da();},'ztBtJ':function(_0x1ec6a6){return _0x1ec6a6();},'ELzim':function(_0x295e12){return _0x295e12();}};if(_0x5b62c9===_0x208aa9(0x620)+'t')return[_0x1a6703(),_0x3a8f7c(_0x1cc46e['vzsNK'],_0x1cc46e[_0x208aa9(0x6f6)],_0x42c7ad[_0x208aa9(0x1b8)],_0x2d9f47=>{var _0xe039b0=_0x208aa9;if(_0x1a078e[_0xe039b0(0x39e)]('xPivg',_0x1a078e[_0xe039b0(0x4ea)])){_0x2f18c1[_0xe039b0(0x24b)]=_0x152d00,_0x397c63();var _0x5c9007=_0x196f84['find'](_0x8e59dc=>_0x8e59dc['id']===_0x32c854)||_0x2be3a9[0x71*-0x2+-0x24d+0x32f];_0x441414[_0xe039b0(0x63b)+'onten'+'t']=_0x1a078e[_0xe039b0(0x5a9)]+_0x5c9007[_0xe039b0(0x5cc)];for(var [_0x31419a,_0x7b399d]of _0x2eabd2)_0x7b399d[_0xe039b0(0x321)+'List'][_0xe039b0(0x6fc)+'e'](_0xe039b0(0x470)+'e',_0x31419a===_0x3c1067);_0x1c8200[_0xe039b0(0x22c)+_0xe039b0(0x3e6)+'ldren'](..._0x34cc53(_0x5b5894));}else _0x42c7ad['god']=_0x2d9f47,_0x139ff7(),_0x279972(_0x1a078e[_0xe039b0(0x1c0)],_0x2d9f47),_0x1a078e['UlBKO'](_0x279972,'godDi'+'e',_0x2d9f47);},[]),_0x3a8f7c(_0x1cc46e['eHdqS'],_0x208aa9(0x2df)+'\x20Reco'+'ilMot'+_0x208aa9(0x3f0)+_0x208aa9(0x3ce)+_0x208aa9(0x2e4)+_0x208aa9(0x32c)+_0x208aa9(0x6cd)+_0x208aa9(0x53d)+'\x20neve'+_0x208aa9(0x27a)+_0x208aa9(0x2fd),_0x42c7ad['noRec'+_0x208aa9(0x6ab)],_0xf066a8=>{var _0x4fbc35=_0x208aa9;_0x42c7ad[_0x4fbc35(0x5be)+'oil']=_0xf066a8,_0x139ff7(),_0x1a078e[_0x4fbc35(0x4ee)](_0x279972,'noRec'+'oil',_0xf066a8);},[]),_0x3a8f7c('No\x20Sp'+_0x208aa9(0x314),_0x1cc46e[_0x208aa9(0x5d2)],_0x42c7ad['noSpr'+'ead'],_0x3c3fb8=>{var _0x10cbae=_0x208aa9;_0x42c7ad[_0x10cbae(0x4ac)+'ead']=_0x3c3fb8,_0x139ff7();},[]),_0x3a8f7c(_0x1cc46e[_0x208aa9(0x428)],'Scale'+'s\x20Ove'+'rtide'+_0x208aa9(0x47d)+'n.fir'+_0x208aa9(0x429)+'\x20to\x201'+_0x208aa9(0x4f7)+'erver'+_0x208aa9(0x29d)+'still'+_0x208aa9(0x1f4)+_0x208aa9(0x61d)+'s.',_0x42c7ad['rapid'+_0x208aa9(0x6de)],_0x5c159b=>{var _0x1d7727=_0x208aa9;_0x42c7ad[_0x1d7727(0x6fb)+'Exp']=_0x5c159b,_0x139ff7();},[]),_0x3a8f7c(_0x208aa9(0x264)+'e\x20[EX'+'P]',_0x208aa9(0x474)+_0x208aa9(0x6e9)+_0x208aa9(0x1e1)+_0x208aa9(0x48e)+'eapon'+'\x20dama'+_0x208aa9(0x53b)+_0x208aa9(0x53c)+'le\x20if'+_0x208aa9(0x202)+_0x208aa9(0x266)+_0x208aa9(0x6cf)+_0x208aa9(0x698)+'s.',_0x42c7ad[_0x208aa9(0x71d)+_0x208aa9(0x27e)],_0x56b099=>{var _0x13410d=_0x208aa9;_0x42c7ad[_0x13410d(0x71d)+_0x13410d(0x27e)]=_0x56b099,_0x139ff7();},[_0x1cc46e[_0x208aa9(0x506)](_0x447e4e,_0x1cc46e['CGUOa'],null,_0x6e0a43(_0x42c7ad[_0x208aa9(0x71d)+_0x208aa9(0x468)+'e'],-0x1ad3+-0x209+-0x9*-0x336,0x50f*0x5+0x36e+0x1*-0x1ac5,0x719*-0x1+-0x1*-0x143f+-0xd21,_0x1d22e8=>{_0x42c7ad['damag'+'eValu'+'e']=_0x1d22e8,_0x139ff7();}))]),_0x3a8f7c('Infin'+'ite\x20A'+'mmo\x20['+_0x208aa9(0x42d),'Refil'+_0x208aa9(0x569)+'e\x20wea'+_0x208aa9(0x60b)+'\x20cach'+_0x208aa9(0x2fc)+_0x208aa9(0x61f)+'\x20999\x20'+_0x208aa9(0x286)+'\x20200m'+'s.',_0x42c7ad[_0x208aa9(0x616)+_0x208aa9(0x710)],_0x530815=>{var _0x350c50=_0x208aa9;_0x42c7ad[_0x350c50(0x616)+_0x350c50(0x710)]=_0x530815,_0x139ff7();},[_0x1cc46e[_0x208aa9(0x5cf)](_0x1ab079,_0x1cc46e[_0x208aa9(0x4d5)])])];if(_0x5b62c9===_0x1cc46e['LeKBV']){if(_0x1cc46e['IYNnr'](_0x1cc46e[_0x208aa9(0x512)],_0x1cc46e[_0x208aa9(0x2f5)]))return[_0x3a8f7c('Speed',_0x1cc46e[_0x208aa9(0x5b2)],_0x42c7ad['speed'+_0x208aa9(0x27d)]!==-0x2*-0x8e2+-0x1f62+-0xb*-0x146,null,[_0x1cc46e[_0x208aa9(0x5d6)](_0x447e4e,_0x1cc46e['YmmkF'],_0x208aa9(0x23f)+_0x208aa9(0x473)+_0x208aa9(0x5e1),_0x6e0a43(_0x42c7ad[_0x208aa9(0x669)+'Pct'],0xc2+0xf*0x88+-0x888,-0x10f2+0x1a62+-0x844,-0xf7a+0x9db+0x5a4,_0x4bed96=>{var _0x56ee3c=_0x208aa9,_0xb56c96={'VtIBI':_0x1cc46e['SKWOJ']};if(_0x56ee3c(0x37b)!==_0x56ee3c(0x419))_0x42c7ad[_0x56ee3c(0x669)+_0x56ee3c(0x27d)]=_0x4bed96,_0x139ff7();else{_0x2b9fbb=_0x407dcb;if(!_0x43bf7a){var _0x39faac=_0x539f7d[_0x56ee3c(0x415)+'eElem'+_0x56ee3c(0x1e8)]('style');_0x39faac['textC'+_0x56ee3c(0x3db)+'t']=_0x1a103a,_0x3ce19f[_0x56ee3c(0x2c5)+_0x56ee3c(0x36c)+'d'](_0x39faac),_0x5dfe83=_0x395213(),_0x5343c2[_0x56ee3c(0x2c5)+'dChil'+'d'](_0x363684),_0x33bbf7(()=>_0x41ba8f[_0x56ee3c(0x321)+_0x56ee3c(0x51c)]['add'](_0x56ee3c(0x6ca)));}_0x5898d8[_0x56ee3c(0x321)+_0x56ee3c(0x51c)]['toggl'+'e'](_0xb56c96[_0x56ee3c(0x34d)],_0x26f22e);}}))]),_0x1cc46e['sdShI'](_0x3a8f7c,_0x208aa9(0x674)+_0x208aa9(0x697)+'vity',_0x208aa9(0x38a)+'s\x20Mov'+_0x208aa9(0x605)+'.jump'+'Force'+_0x208aa9(0x260)+_0x208aa9(0x5ee)+'gravi'+_0x208aa9(0x255)+'lues.',_0x42c7ad[_0x208aa9(0x68d)+'ct']!==-0x2122+0xa*0x219+0x646*0x2||_0x42c7ad[_0x208aa9(0x1eb)+'tyPct']!==-0x1a*0x29+-0x39d+0x82b,null,[_0x447e4e(_0x1cc46e[_0x208aa9(0x18f)],null,_0x1cc46e['kxwuF'](_0x6e0a43,_0x42c7ad[_0x208aa9(0x68d)+'ct'],0xf28*0x1+-0x1cf3*-0x1+-0x3*0xea3,0x125e*0x1+0x234e+0x1a40*-0x2,-0x16ee+0x4*-0x3fe+-0x171*-0x1b,_0x424b29=>{var _0x45b658=_0x208aa9;_0x42c7ad[_0x45b658(0x68d)+'ct']=_0x424b29,_0x139ff7();})),_0x447e4e(_0x1cc46e[_0x208aa9(0x31b)],_0x1cc46e['eTHZq'],_0x6e0a43(_0x42c7ad[_0x208aa9(0x1eb)+_0x208aa9(0x20f)],-0x1873*0x1+0x20c7*0x1+-0x2*0x425,0x43c+-0x116*-0x1e+-0x481*0x8,-0x10e8+0xb*-0x31f+0x3342,_0x4d6289=>{var _0x2f4ca3=_0x208aa9;if(_0x1a078e[_0x2f4ca3(0x6f2)]('hnLvN',_0x1a078e[_0x2f4ca3(0x647)]))_0x42c7ad[_0x2f4ca3(0x1eb)+_0x2f4ca3(0x20f)]=_0x4d6289,_0x139ff7();else return _0x582bd7[_0x2f4ca3(0x544)]('[saku'+_0x2f4ca3(0x661)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x2f4ca3(0x48a),_0x7c1b8c,_0x3c6fd1&&_0x1e27a7['messa'+'ge']),null;}))]),_0x1cc46e['sdShI'](_0x3a8f7c,'Bunny'+_0x208aa9(0x19c),_0x1cc46e[_0x208aa9(0x5f2)],_0x42c7ad['bhop'],_0x4d2d54=>{var _0xe3cd07=_0x208aa9;_0x42c7ad['bhop']=_0x4d2d54,_0x1a078e[_0xe3cd07(0x24a)](_0x139ff7);},[])];else{var _0x3ca8a5=_0xdd7b79['hookP'+'ostfi'+'x']({'typeName':_0x43695a,'methodName':_0x1e4afd,'params':_0x227aad,'returnType':_0x1a5a65},_0x20c6ae);return _0x3ca8a5['enabl'+'ed']=_0x5187b0!==![],_0x4af7c5[_0x561d15]=_0x3ca8a5,_0x2b2bea['hooks'+_0x208aa9(0x591)]++,_0x3ca8a5;}}if(_0x1cc46e['uZwBQ'](_0x5b62c9,_0x1cc46e[_0x208aa9(0x2aa)])){if(_0x1cc46e['SAkeN'](_0x1cc46e[_0x208aa9(0x408)],'btBXg'))_0x5a4f5f['addEv'+_0x208aa9(0x263)+_0x208aa9(0x478)+'r'](_0x1cc46e[_0x208aa9(0x4dd)],_0x455530=>{var _0x2d98c9=_0x208aa9;try{var _0x29d3d2=_0x455530&&(_0x455530['messa'+'ge']||_0x455530[_0x2d98c9(0x6e6)]&&_0x455530['error'][_0x2d98c9(0x3b1)+'ge'])||_0x2d98c9(0x2a4)+'wn';if(_0x455530&&_0x455530[_0x2d98c9(0x404)+_0x2d98c9(0x3cd)])_0x29d3d2+=_0x1a078e[_0x2d98c9(0x6a0)](_0x2d98c9(0x2a6)+_0x3937fa(_0x455530['filen'+_0x2d98c9(0x3cd)])['split']('/')[_0x2d98c9(0x44b)](),':')+(_0x455530['linen'+'o']||'?');_0x548649['lastE'+_0x2d98c9(0x3ba)]=_0x1a078e[_0x2d98c9(0x65a)](_0x7aeaea,_0x29d3d2)[_0x2d98c9(0x4c9)](0x16e9+-0x1e41+0x758,0x34*-0x75+-0x1772+0x2fd6);}catch(_0x21855a){}});else return[_0x1cc46e['sdShI'](_0x3a8f7c,_0x1cc46e[_0x208aa9(0x60a)],_0x208aa9(0x30e)+_0x208aa9(0x1c2)+'/RMB\x20'+'+\x20Spa'+'ce\x20ov'+_0x208aa9(0x5f9)+'.',_0x42c7ad['keyst'+'rokes'],_0x2bddd3=>{var _0x14a6bc=_0x208aa9;if(_0x14a6bc(0x3e2)==='wyhYv')try{_0x11ef8d['enabl'+'ed']=![];}catch(_0xe7217d){}else _0x42c7ad['keyst'+_0x14a6bc(0x462)]=_0x2bddd3,_0x139ff7();},[_0x1cc46e[_0x208aa9(0x602)](_0x447e4e,_0x208aa9(0x482)+'ion',null,_0x1cc46e['tfPUp'](_0x14edb2,_0x42c7ad[_0x208aa9(0x216)],[['bl',_0x208aa9(0x187)+'m\x20lef'+'t'],['br',_0x1cc46e['FDgLM']],['ml',_0x208aa9(0x456)+_0x208aa9(0x5c8)+'e']],_0x467fc6=>{var _0x288969=_0x208aa9;_0x42c7ad[_0x288969(0x216)]=_0x467fc6,_0x139ff7();})),_0x447e4e('Size',null,_0x6e0a43(_0x42c7ad['ksSca'+'le'],0x333+0x1*0x20a2+-0x23d5+0.6,-0x1*0x17f5+-0x22ea+0x18*0x274+0.6000000000000001,-0x2406+-0x1e05+0x420b+0.05,_0x2a80dd=>{var _0x14f98a=_0x208aa9;_0x42c7ad[_0x14f98a(0x663)+'le']=_0x2a80dd,_0x1cc46e[_0x14f98a(0x2e9)](_0x139ff7);})),_0x1cc46e['SgMCR'](_0x447e4e,_0x208aa9(0x3c9)+'eadou'+'t',null,_0x1cc46e[_0x208aa9(0x2ba)](_0x52e7ae,_0x42c7ad['ksCps'],_0x2f8c62=>{var _0x353f38=_0x208aa9,_0x3fe958={'qhWJP':function(_0x2d32bb){return _0x2d32bb();}};_0x1cc46e['GBmWJ']('oYNQs','WcKKf')?(_0x42c7ad[_0x353f38(0x287)]=_0x2f8c62,_0x139ff7()):(_0x53969f[_0x353f38(0x244)+_0x353f38(0x2b7)+'e']=_0x52938a,_0x3fe958['qhWJP'](_0x2b73b2));}))]),_0x3a8f7c(_0x1cc46e[_0x208aa9(0x554)],'Custo'+'m\x20cen'+'ter\x20c'+_0x208aa9(0x4d8)+'air.',_0x42c7ad['cross'+_0x208aa9(0x25f)],_0x318043=>{var _0x450dbc=_0x208aa9;_0x42c7ad['cross'+_0x450dbc(0x25f)]=_0x318043,_0x139ff7();},[_0x447e4e(_0x1cc46e['rcCLT'],null,_0x6e0a43(_0x42c7ad['chSiz'+'e'],0x96a+-0x17fc+0xe92+0.5,-0xe51*-0x1+-0xebc+-0x6d*-0x1+0.5,-0x164a+-0xdf9+0x2443+0.1,_0x1d91ad=>{var _0xa8facf=_0x208aa9;_0x42c7ad[_0xa8facf(0x679)+'e']=_0x1d91ad,_0x139ff7();})),_0x447e4e(_0x208aa9(0x35d),null,_0x1cc46e[_0x208aa9(0x718)](_0x31e67f,_0x42c7ad['chCol'+'or'],_0x38723a=>{var _0x530648=_0x208aa9;_0x42c7ad[_0x530648(0x638)+'or']=_0x38723a,_0x139ff7();}))]),_0x3a8f7c(_0x208aa9(0x55e)+'ers','FPS\x20o'+_0x208aa9(0x3fd)+'y.',_0x42c7ad[_0x208aa9(0x1f3)],null,[_0x447e4e(_0x1cc46e['xpHxb'],null,_0x52e7ae(_0x42c7ad['fps'],_0x1cf64c=>{var _0x2b73e1=_0x208aa9;_0x42c7ad[_0x2b73e1(0x1f3)]=_0x1cf64c,_0x1a078e['Pryxr'](_0x139ff7);})),_0x1cc46e[_0x208aa9(0x43f)](_0x1ab079,_0x208aa9(0x329)+'emy\x20c'+'ounte'+_0x208aa9(0x6f4)+'is\x20bu'+_0x208aa9(0x6a1)+'as\x20no'+_0x208aa9(0x487)+'isibl'+'ePlay'+_0x208aa9(0x2f6)+_0x208aa9(0x6fa)+'gybac'+'k\x20on.')])];}if(_0x1cc46e['VpQct'](_0x5b62c9,_0x208aa9(0x520)))return[_0x3a8f7c(_0x208aa9(0x330)+'ck',_0x208aa9(0x36a)+'\x20kour'+_0x208aa9(0x2b8)+_0x208aa9(0x2b9)+_0x208aa9(0x26f)+_0x208aa9(0x3e5),_0x42c7ad['adblo'+'ck'],_0x5278b1=>{_0x42c7ad['adblo'+'ck']=_0x5278b1,_0x139ff7();},[_0x1ab079(_0x208aa9(0x36b)+'\x20effe'+'ct\x20on'+_0x208aa9(0x503)+'ad\x20wh'+'en\x20to'+'ggled'+'.')])];return[_0x3a8f7c(_0x1cc46e[_0x208aa9(0x69c)],_0x208aa9(0x2df)+_0x208aa9(0x6ad)+_0x208aa9(0x6a2)+_0x208aa9(0x497)+_0x208aa9(0x4ed)+'WASM\x20'+'hooks'+'.\x20Use'+'\x20this'+_0x208aa9(0x29a)+_0x208aa9(0x186)+'s\x20won'+_0x208aa9(0x48b)+_0x208aa9(0x328),_0x42c7ad[_0x208aa9(0x636)+'ode'],_0x3581a9=>{var _0x5ba5a1=_0x208aa9;_0x42c7ad[_0x5ba5a1(0x636)+_0x5ba5a1(0x476)]=_0x3581a9,_0x1a078e['ztBtJ'](_0x139ff7),location['reloa'+'d']();},[_0x1cc46e['zwDgk'](_0x1ab079,_0x208aa9(0x505)+_0x208aa9(0x571)+'\x20relo'+_0x208aa9(0x5c6)+'f\x20mat'+_0x208aa9(0x522)+'load\x20'+_0x208aa9(0x532)+'fe\x20mo'+_0x208aa9(0x256)+'he\x20fr'+'eeze\x20'+'is\x20ho'+'ok-re'+_0x208aa9(0x6e0)+'\x20—\x20te'+_0x208aa9(0x2e8)+_0x208aa9(0x202)+'hooks'+'-appl'+_0x208aa9(0x6e2)+'ount.')]),_0x3a8f7c('Hook\x20'+'risk\x20'+_0x208aa9(0x333)+_0x208aa9(0x435),_0x1cc46e[_0x208aa9(0x2cb)],_0x42c7ad['hookG'+'od']||_0x42c7ad[_0x208aa9(0x4fc)+'odDie']||_0x42c7ad[_0x208aa9(0x197)+'oReco'+'il']||_0x42c7ad['hookC'+_0x208aa9(0x2b7)+'e'],_0x43268c=>{var _0x35f198=_0x208aa9;if(_0x35f198(0x361)===_0x1cc46e['FXOMq']){var _0x361123=_0x1a078e['UlBKO'](_0x30f48d,_0x44a716,_0x21c553=>{var _0x3ad61d=_0x35f198;_0x358259[_0x3ad61d(0x321)+'List'][_0x3ad61d(0x6fc)+'e']('on',_0x21c553),_0x197111(_0x21c553);});_0x4c21db[_0x35f198(0x2c5)+'d'](_0x7c6617,_0x361123);}else _0x42c7ad['hookG'+'od']=_0x43268c,_0x42c7ad[_0x35f198(0x4fc)+'odDie']=_0x43268c,_0x42c7ad[_0x35f198(0x197)+_0x35f198(0x54d)+'il']=_0x43268c,_0x42c7ad[_0x35f198(0x244)+_0x35f198(0x2b7)+'e']=_0x43268c,_0x139ff7(),location['reloa'+'d']();},[_0x1cc46e['zwDgk'](_0x1ab079,_0x1cc46e[_0x208aa9(0x47f)]),_0x1cc46e[_0x208aa9(0x253)](_0x447e4e,_0x1cc46e['mcekV'],null,_0x1cc46e[_0x208aa9(0x5b8)](_0x52e7ae,_0x42c7ad['hookG'+'od'],_0x4e5690=>{var _0x25a95f=_0x208aa9;_0x42c7ad[_0x25a95f(0x4fc)+'od']=_0x4e5690,_0x1a078e[_0x25a95f(0x24a)](_0x139ff7);})),_0x447e4e(_0x208aa9(0x3f5)+'e\x20(OH'+'ealth'+_0x208aa9(0x2c7)+_0x208aa9(0x5b3),null,_0x52e7ae(_0x42c7ad[_0x208aa9(0x4fc)+_0x208aa9(0x606)],_0x338fdf=>{var _0x312518=_0x208aa9;_0x42c7ad[_0x312518(0x4fc)+_0x312518(0x606)]=_0x338fdf,_0x1a078e[_0x312518(0x236)](_0x139ff7);})),_0x447e4e('noRec'+_0x208aa9(0x203)+_0x208aa9(0x277)+_0x208aa9(0x28b)+'on.Ti'+'ck)',null,_0x1cc46e[_0x208aa9(0x4c8)](_0x52e7ae,_0x42c7ad[_0x208aa9(0x197)+_0x208aa9(0x54d)+'il'],_0x179c8d=>{var _0x4c2fe8=_0x208aa9;_0x42c7ad[_0x4c2fe8(0x197)+_0x4c2fe8(0x54d)+'il']=_0x179c8d,_0x139ff7();})),_0x1cc46e['GtYvC'](_0x447e4e,_0x1cc46e[_0x208aa9(0x50b)],_0x1cc46e['YXbYe'],_0x1cc46e[_0x208aa9(0x2ba)](_0x52e7ae,_0x42c7ad[_0x208aa9(0x244)+'aptur'+'e'],_0x4aae85=>{_0x42c7ad['hookC'+'aptur'+'e']=_0x4aae85,_0x139ff7();}))]),_0x3a8f7c(_0x1cc46e[_0x208aa9(0x299)],'Disab'+_0x208aa9(0x536)+'odeSt'+_0x208aa9(0x3fe)+'etect'+'ors\x20a'+_0x208aa9(0x624)+'rtup\x20'+_0x208aa9(0x3e4)+'topDe'+'tecti'+_0x208aa9(0x4ad)+_0x208aa9(0x62e)+_0x208aa9(0x50e),_0x42c7ad[_0x208aa9(0x326)+_0x208aa9(0x4eb)],_0x1f3d16=>{var _0x170d25=_0x208aa9;_0x42c7ad[_0x170d25(0x326)+_0x170d25(0x4eb)]=_0x1f3d16,_0x139ff7();},[_0x1ab079(_0x1cc46e[_0x208aa9(0x711)],!![])]),_0x1cc46e[_0x208aa9(0x687)](_0x3a8f7c,_0x208aa9(0x551)+'r','These'+'\x20leav'+'e\x20ser'+'ver-v'+_0x208aa9(0x5e6)+'e\x20tra'+_0x208aa9(0x42e),!![],null,[_0x447e4e(_0x208aa9(0x60e)+_0x208aa9(0x481)+'tting'+'s',null,_0x132713(_0x1cc46e[_0x208aa9(0x56e)],()=>{_0x42c7ad={..._0x2202ef},_0x139ff7(),location['reloa'+'d']();}))])];}var _0x340de4=null;function _0x105e0a(_0x28be9a){var _0x449b0d=_0x24cff5;_0x1cfdab=_0x28be9a;if(!_0x340de4){var _0x1e2bc8=document['creat'+'eElem'+'ent']('style');_0x1e2bc8[_0x449b0d(0x63b)+'onten'+'t']=_0x54031d,_0x59ebb8['appen'+'dChil'+'d'](_0x1e2bc8),_0x340de4=_0x25cc89[_0x449b0d(0x666)](_0x2c3afb),_0x59ebb8['appen'+_0x449b0d(0x36c)+'d'](_0x340de4),requestAnimationFrame(()=>_0x340de4['class'+_0x449b0d(0x51c)][_0x449b0d(0x553)](_0x449b0d(0x6ca)));}_0x340de4[_0x449b0d(0x321)+_0x449b0d(0x51c)][_0x449b0d(0x6fc)+'e'](_0x25cc89[_0x449b0d(0x4b5)],_0x28be9a);}function _0x1a6b8b(){_0x105e0a(!_0x1cfdab);}function _0x2c3afb(){var _0x5a5499=_0x24cff5,_0x21acc3={'fHPtY':function(_0x376dd4,_0x108925,_0x6fbcdc,_0x2055fe,_0x36abca){return _0x376dd4(_0x108925,_0x6fbcdc,_0x2055fe,_0x36abca);}},_0x589d87=document['creat'+_0x5a5499(0x294)+_0x5a5499(0x1e8)](_0x1cc46e[_0x5a5499(0x392)]);_0x589d87[_0x5a5499(0x321)+_0x5a5499(0x220)]=_0x5a5499(0x658)+'nel';var _0x5843f0=document['creat'+'eElem'+_0x5a5499(0x1e8)](_0x5a5499(0x31f));_0x5843f0['class'+'Name']=_0x1cc46e[_0x5a5499(0x199)];var _0x17ea46=document[_0x5a5499(0x415)+'eElem'+_0x5a5499(0x1e8)]('div');_0x17ea46[_0x5a5499(0x321)+'Name']=_0x5a5499(0x4ca)+'go',_0x17ea46[_0x5a5499(0x4cc)+_0x5a5499(0x48f)]=_0x1cc46e[_0x5a5499(0x2d3)],_0x5843f0['appen'+_0x5a5499(0x36c)+'d'](_0x17ea46);var _0x16fe51=document['creat'+_0x5a5499(0x294)+_0x5a5499(0x1e8)](_0x1cc46e[_0x5a5499(0x392)]);_0x16fe51[_0x5a5499(0x321)+_0x5a5499(0x220)]=_0x5a5499(0x3d3)+'in';var _0x4db19b=document['creat'+_0x5a5499(0x294)+_0x5a5499(0x1e8)](_0x5a5499(0x1ca)+'r');_0x4db19b['class'+_0x5a5499(0x220)]=_0x5a5499(0x579)+'p';var _0x136cd1=document['creat'+'eElem'+_0x5a5499(0x1e8)](_0x1cc46e[_0x5a5499(0x392)]);_0x136cd1['class'+_0x5a5499(0x220)]=_0x5a5499(0x4b0)+_0x5a5499(0x4a3);var _0x4bfeb4=document[_0x5a5499(0x415)+'eElem'+_0x5a5499(0x1e8)]('h2');_0x4bfeb4[_0x5a5499(0x321)+'Name']=_0x5a5499(0x627),_0x4bfeb4['textC'+'onten'+'t']=_0x1cc46e['IWNOF'];var _0x4b65f6=document[_0x5a5499(0x415)+_0x5a5499(0x294)+'ent'](_0x1cc46e['lPlhm']);_0x4b65f6[_0x5a5499(0x321)+'Name']='mn-su'+'b',_0x4b65f6['textC'+'onten'+'t']='kours'+'trike'+'.io\x20m'+_0x5a5499(0x19a),_0x136cd1['appen'+'d'](_0x4bfeb4,_0x4b65f6);var _0x39cb29=document['creat'+_0x5a5499(0x294)+_0x5a5499(0x1e8)](_0x5a5499(0x517)+'n');_0x39cb29[_0x5a5499(0x396)]=_0x1cc46e['LBIMt'],_0x39cb29['class'+_0x5a5499(0x220)]='mn-cl'+_0x5a5499(0x37c),_0x39cb29[_0x5a5499(0x39a)]=_0x1cc46e[_0x5a5499(0x717)],_0x39cb29[_0x5a5499(0x4cc)+'HTML']=_0x1cc46e[_0x5a5499(0x2bd)],_0x39cb29[_0x5a5499(0x188)+'ck']=()=>_0x105e0a(![]),_0x4db19b['appen'+'d'](_0x136cd1,_0x39cb29);var _0x4779d6=document['creat'+_0x5a5499(0x294)+_0x5a5499(0x1e8)]('div');_0x4779d6[_0x5a5499(0x321)+'Name']=_0x1cc46e['LShXx'],_0x16fe51[_0x5a5499(0x2c5)+'d'](_0x4db19b,_0x4779d6),_0x589d87['appen'+'d'](_0x5843f0,_0x16fe51);var _0xcaeeb4=new Map();for(var _0x168c20 of _0x3e8164){var _0x514b13=(_0x5a5499(0x1fa)+_0x5a5499(0x3d1)+_0x5a5499(0x2ed))['split']('|'),_0x5a4582=-0x1338+-0x1d89*-0x1+-0xa51;while(!![]){switch(_0x514b13[_0x5a4582++]){case'0':_0x416be7[_0x5a5499(0x321)+'Name']='mn-ta'+'b';continue;case'1':var _0x416be7=document['creat'+_0x5a5499(0x294)+'ent']('butto'+'n');continue;case'2':_0x416be7['title']=_0x168c20['label'];continue;case'3':_0x416be7[_0x5a5499(0x396)]=_0x5a5499(0x517)+'n';continue;case'4':_0x416be7['inner'+'HTML']=_0x1cc46e['Jsipb'](_0x5a5499(0x3c2)+'l>',_0x168c20[_0x5a5499(0x5cc)])+_0x1cc46e['FZXOZ'];continue;case'5':_0x5843f0[_0x5a5499(0x2c5)+_0x5a5499(0x36c)+'d'](_0x416be7);continue;case'6':_0xcaeeb4[_0x5a5499(0x26c)](_0x168c20['id'],_0x416be7);continue;case'7':_0x416be7[_0x5a5499(0x188)+'ck']=(_0x31109f=>()=>_0x40227e(_0x31109f))(_0x168c20['id']);continue;}break;}}function _0x40227e(_0x16344d){var _0x1003b0=_0x5a5499,_0x4ebcba=(_0x1003b0(0x3dd)+_0x1003b0(0x292)+'3')['split']('|'),_0x455f74=-0x1ffe+-0x3*0x17f+0x3*0xc29;while(!![]){switch(_0x4ebcba[_0x455f74++]){case'0':_0x216a6e();continue;case'1':var _0x54e30e=_0x3e8164[_0x1003b0(0x601)](_0x335bbf=>_0x335bbf['id']===_0x16344d)||_0x3e8164[0x8c*0x2c+-0x1e2+-0x162e];continue;case'2':for(var [_0x4a3b2c,_0x577117]of _0xcaeeb4)_0x577117['class'+_0x1003b0(0x51c)]['toggl'+'e'](_0x1cc46e['HCSHx'],_0x4a3b2c===_0x16344d);continue;case'3':_0x4779d6['repla'+_0x1003b0(0x3e6)+_0x1003b0(0x70b)](..._0x490679(_0x16344d));continue;case'4':_0x756293[_0x1003b0(0x24b)]=_0x16344d;continue;case'5':_0x4bfeb4[_0x1003b0(0x63b)+_0x1003b0(0x3db)+'t']=_0x1cc46e[_0x1003b0(0x372)]+_0x54e30e['label'];continue;}break;}}return _0x1cc46e['ExoMo'](_0x40227e,_0x756293['cat']||_0x5a5499(0x620)+'t'),setInterval(()=>{var _0x9079b8=_0x5a5499;if(_0x9079b8(0x3a3)!==_0x9079b8(0x3a3))_0x21acc3[_0x9079b8(0x2a9)](_0x4744eb,_0x41f9d5,0x211d+-0x1*-0x1dbf+-0x216*0x1e,'f32',_0x3b4928),_0x21acc3['fHPtY'](_0x25154c,_0x21197c,0x5e*-0x61+0x185f+0x5*0x24f,_0x9079b8(0x208),_0x5f56e6);else{if(!_0x1cfdab)return;var _0x4832d8=_0x4779d6[_0x9079b8(0x4d7)+'ren'];for(var _0x205428=-0xdb*-0x6+-0xf00+0x4ef*0x2;_0x1cc46e[_0x9079b8(0x6a9)](_0x205428,_0x4832d8[_0x9079b8(0x6a7)+'h']);_0x205428++){var _0x167028=_0x4832d8[_0x205428][_0x9079b8(0x3a4)+'Selec'+_0x9079b8(0x6bc)](_0x9079b8(0x2a5)+_0x9079b8(0x3c3));_0x167028&&(_0x167028['textC'+'onten'+'t'][_0x9079b8(0x1d4)+'Of'](_0x1cc46e[_0x9079b8(0x23d)])===-0x1*-0x24fb+0x35*0x2b+-0x2de2*0x1||_0x1cc46e[_0x9079b8(0x46b)](_0x167028[_0x9079b8(0x63b)+_0x9079b8(0x3db)+'t']['index'+'Of'](_0x9079b8(0x5f6)),-0x174f+-0x954*0x3+-0x1119*-0x3))&&(_0x167028['textC'+'onten'+'t']=_0x15d093[_0x9079b8(0x636)+_0x9079b8(0x476)]?_0x1cc46e[_0x9079b8(0x33c)]:_0x15d093['uwmk']?_0x1cc46e[_0x9079b8(0x68c)](_0x1cc46e[_0x9079b8(0x20b)](_0x1cc46e['gmASt'](_0x1cc46e[_0x9079b8(0x409)],_0x15d093[_0x9079b8(0x24f)+'Total']?_0x15d093[_0x9079b8(0x24f)+'Ok']+'/'+_0x15d093[_0x9079b8(0x24f)+_0x9079b8(0x591)]+_0x1cc46e['KmcNx']:_0x1cc46e[_0x9079b8(0x28c)])+_0x1cc46e[_0x9079b8(0x53f)]+(_0x15d093[_0x9079b8(0x3fa)+_0x9079b8(0x2f8)]?_0x1cc46e[_0x9079b8(0x6cc)]:_0x9079b8(0x24d)+'ng')+(_0x9079b8(0x5fd)+'ooter'+'\x20')+(_0x15d093[_0x9079b8(0x30f)+_0x9079b8(0x491)]?_0x9079b8(0x4de):'none'),_0x1cc46e['dRfcd'])+(_0x15d093['movem'+_0x9079b8(0x2e7)]?_0x9079b8(0x4de):_0x1cc46e[_0x9079b8(0x713)]),_0x15d093[_0x9079b8(0x549)+'rror']?_0x1cc46e['Bangr'](_0x1cc46e[_0x9079b8(0x1ed)],_0x15d093['lastE'+_0x9079b8(0x3ba)]):''):_0x1cc46e['TlEAW']);}}},0x1072+-0x4b9+0x45*-0x1d),_0x589d87;}var _0x54031d=_0x24cff5(0x1c8)+_0x24cff5(0x5c0)+'\x20{\x20al'+'l:\x20in'+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+'{\x20box'+'-sizi'+'ng:\x20b'+_0x24cff5(0x5d7)+'-box;'+_0x24cff5(0x2be)+_0x24cff5(0x652)+_0x24cff5(0x708)+'t-fam'+_0x24cff5(0x565)+'\x22Inte'+'r\x22,\x20\x22'+_0x24cff5(0x387)+_0x24cff5(0x5a7)+_0x24cff5(0x2f7)+_0x24cff5(0x221)+',\x20san'+_0x24cff5(0x550)+_0x24cff5(0x2ee)+_0x24cff5(0x1c8)+_0x24cff5(0x4a2)+_0x24cff5(0x204)+_0x24cff5(0x30c)+_0x24cff5(0x413)+_0x24cff5(0x511)+_0x24cff5(0x5cb)+';\x20rig'+'ht:\x202'+_0x24cff5(0x6d4)+'botto'+_0x24cff5(0x52a)+'px;\x20w'+'idth:'+'\x20min('+'620px'+_0x24cff5(0x6b2)+'c(100'+_0x24cff5(0x4bb)+_0x24cff5(0x4d2)+');\x20ma'+'x-hei'+_0x24cff5(0x23c)+_0x24cff5(0x20c)+_0x24cff5(0x351)+'\x20calc'+'(100v'+_0x24cff5(0x68a)+_0x24cff5(0x3af)+_0x24cff5(0x56a)+'\x20\x20\x20di'+'splay'+_0x24cff5(0x3df)+'x;\x20ga'+'p:\x2010'+'px;\x20p'+_0x24cff5(0x1de)+'g:\x2010'+_0x24cff5(0x2d8)+_0x24cff5(0x5d7)+'-radi'+_0x24cff5(0x461)+'2px;\x20'+_0x24cff5(0x68f)+_0x24cff5(0x28e)+_0x24cff5(0x59c)+_0x24cff5(0x510)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x24cff5(0x527)+'und:\x20'+_0x24cff5(0x1d7)+_0x24cff5(0x70a)+',21,.'+_0x24cff5(0x380)+_0x24cff5(0x2d1)+'rop-f'+'ilter'+_0x24cff5(0x22a)+_0x24cff5(0x65b)+'x)\x20sa'+_0x24cff5(0x1f5)+_0x24cff5(0x597)+_0x24cff5(0x670)+'webki'+'t-bac'+'kdrop'+_0x24cff5(0x2bc)+'er:\x20b'+_0x24cff5(0x1db)+_0x24cff5(0x5bf)+'satur'+_0x24cff5(0x432)+_0x24cff5(0x1a6)+_0x24cff5(0x1c8)+_0x24cff5(0x625)+_0x24cff5(0x716)+_0x24cff5(0x4be)+_0x24cff5(0x2e6)+_0x24cff5(0x2a7)+'gba(2'+'55,25'+_0x24cff5(0x5ef)+',.06)'+_0x24cff5(0x251)+_0x24cff5(0x574)+'1px\x200'+_0x24cff5(0x657)+_0x24cff5(0x6c8)+_0x24cff5(0x3bc)+_0x24cff5(0x306)+_0x24cff5(0x3ea)+_0x24cff5(0x1a7)+_0x24cff5(0x604)+_0x24cff5(0x657)+_0x24cff5(0x38f)+_0x24cff5(0x279)+_0x24cff5(0x3d8)+_0x24cff5(0x5fb)+'pacit'+'y:\x200;'+_0x24cff5(0x382)+'sform'+':\x20tra'+_0x24cff5(0x284)+'eY(18'+_0x24cff5(0x472)+_0x24cff5(0x68f)+'er-ev'+'ents:'+_0x24cff5(0x1f8)+';\x20tra'+'nsiti'+_0x24cff5(0x3ec)+_0x24cff5(0x5ab)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x24cff5(0x693)+'rm\x20.4'+_0x24cff5(0x1e4)+_0x24cff5(0x5e8)+'ezier'+_0x24cff5(0x62d)+'1,.36'+',1);\x0a'+_0x24cff5(0x51e)+_0x24cff5(0x55c)+'r:\x20#f'+'6eef2'+';\x20fon'+_0x24cff5(0x25e)+_0x24cff5(0x1d1)+_0x24cff5(0x484)+_0x24cff5(0x1c8)+'.mn-p'+_0x24cff5(0x498)+_0x24cff5(0x6ca)+'\x20{\x20op'+'acity'+_0x24cff5(0x25b)+_0x24cff5(0x508)+'form:'+_0x24cff5(0x1f8)+_0x24cff5(0x58d)+'nter-'+_0x24cff5(0x631)+'s:\x20au'+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x24cff5(0x54e)+'ide\x20{'+'\x20disp'+'lay:\x20'+'flex;'+_0x24cff5(0x433)+'-dire'+_0x24cff5(0x519)+':\x20col'+'umn;\x20'+'align'+'-item'+_0x24cff5(0x6ec)+'nter;'+'\x20gap:'+'\x204px;'+'\x20widt'+_0x24cff5(0x649)+'px;\x20f'+_0x24cff5(0x1b5)+_0x24cff5(0x1b9)+'\x20padd'+_0x24cff5(0x459)+_0x24cff5(0x3f7)+(_0x24cff5(0x211)+_0x24cff5(0x21a)+'radiu'+_0x24cff5(0x52f)+_0x24cff5(0x1b3)+_0x24cff5(0x51e)+_0x24cff5(0x336)+_0x24cff5(0x578)+_0x24cff5(0x6ea)+_0x24cff5(0x6b1)+',255,'+'255,.'+_0x24cff5(0x709)+_0x24cff5(0x69e)+_0x24cff5(0x4b3)+'w:\x20in'+'set\x200'+_0x24cff5(0x2e6)+_0x24cff5(0x2a7)+_0x24cff5(0x39d)+'55,25'+_0x24cff5(0x5ef)+',.05)'+_0x24cff5(0x6bf)+_0x24cff5(0x659)+_0x24cff5(0x2c2)+_0x24cff5(0x33e)+_0x24cff5(0x640)+'y:\x20gr'+'id;\x20p'+'lace-'+'items'+_0x24cff5(0x265)+'ter;\x20'+_0x24cff5(0x341)+_0x24cff5(0x34f)+_0x24cff5(0x270)+'ight:'+_0x24cff5(0x370)+_0x24cff5(0x6bf)+'\x20\x20\x20.m'+_0x24cff5(0x2c2)+_0x24cff5(0x2ae)+_0x24cff5(0x5d5)+'dth:\x20'+_0x24cff5(0x1ac)+_0x24cff5(0x310)+_0x24cff5(0x526)+_0x24cff5(0x4e6)+'overf'+'low:\x20'+'visib'+_0x24cff5(0x394)+'ilter'+_0x24cff5(0x696)+_0x24cff5(0x376)+_0x24cff5(0x2d5)+'\x200\x204p'+_0x24cff5(0x31d)+_0x24cff5(0x6b1)+',107,'+_0x24cff5(0x52c)+_0x24cff5(0x43c)+'}\x0a\x20\x20\x20'+'\x20.mn-'+_0x24cff5(0x4d3)+_0x24cff5(0x54f)+_0x24cff5(0x2d2)+_0x24cff5(0x67e)+_0x24cff5(0x680)+'n-ite'+_0x24cff5(0x4ae)+_0x24cff5(0x460)+_0x24cff5(0x3a5)+'tify-'+'conte'+_0x24cff5(0x21c)+_0x24cff5(0x460)+_0x24cff5(0x63e)+_0x24cff5(0x3e3)+'2px;\x20'+'heigh'+_0x24cff5(0x4d6)+_0x24cff5(0x2d8)+'order'+':\x200;\x20'+_0x24cff5(0x6ee)+_0x24cff5(0x3bb)+_0x24cff5(0x2a3)+_0x24cff5(0x1cb)+_0x24cff5(0x1c8)+_0x24cff5(0x44e)+'kgrou'+_0x24cff5(0x2a0)+_0x24cff5(0x5b4)+_0x24cff5(0x1fe)+';\x20col'+_0x24cff5(0x39f)+'gba(2'+'46,23'+_0x24cff5(0x185)+',.4);'+_0x24cff5(0x67b)+'or:\x20p'+_0x24cff5(0x36f)+_0x24cff5(0x389)+_0x24cff5(0x1d5)+_0x24cff5(0x21f)+'0px;\x20'+'font-'+'weigh'+'t:\x2070'+'0;\x20}\x0a'+_0x24cff5(0x5bb)+_0x24cff5(0x1a0)+_0x24cff5(0x42b)+_0x24cff5(0x49c)+_0x24cff5(0x619)+':\x20rgb'+'a(246'+_0x24cff5(0x2f3)+'242,.'+'8);\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-t'+_0x24cff5(0x41e)+'tive\x20'+'{\x20col'+_0x24cff5(0x722)+'ff6b9'+_0x24cff5(0x335)+_0x24cff5(0x527)+_0x24cff5(0x6d8)+_0x24cff5(0x1d7)+'255,1'+_0x24cff5(0x29f)+'7,.1)'+';\x20}\x0a\x20'+_0x24cff5(0x659)+_0x24cff5(0x406)+_0x24cff5(0x4fe)+_0x24cff5(0x1b5)+_0x24cff5(0x36d)+_0x24cff5(0x3e0)+'th:\x200'+_0x24cff5(0x5a1)+'play:'+'\x20flex'+';\x20fle'+_0x24cff5(0x1c5)+_0x24cff5(0x3fc)+_0x24cff5(0x324)+'lumn;'+_0x24cff5(0x252)+'\x20\x20.mn'+_0x24cff5(0x3cc)+'{\x20dis'+'play:'+'\x20flex'+';\x20ali'+_0x24cff5(0x225)+_0x24cff5(0x539)+_0x24cff5(0x50a)+'r;\x20ga'+'p:\x2012'+_0x24cff5(0x57d)+_0x24cff5(0x1de)+'g:\x206p'+'x\x206px'+_0x24cff5(0x30a)+_0x24cff5(0x3d7)+_0x24cff5(0x43a)+'ect:\x20'+'none;'+_0x24cff5(0x252)+_0x24cff5(0x40d)+'-titl'+'es\x20{\x20'+_0x24cff5(0x4d4)+_0x24cff5(0x35c)+'in-wi'+_0x24cff5(0x686)+'0;\x20}\x0a'+_0x24cff5(0x5bb)+_0x24cff5(0x548)+_0x24cff5(0x630)+'t-siz'+_0x24cff5(0x3a8)+_0x24cff5(0x3b8)+'ont-w'+'eight'+_0x24cff5(0x2b6)+';\x20}\x0a\x20'+_0x24cff5(0x659)+_0x24cff5(0x32f)+'\x20{\x20fo'+_0x24cff5(0x1d5)+_0x24cff5(0x21f)+_0x24cff5(0x219)+_0x24cff5(0x52b))+(_0x24cff5(0x3e8)+'4;\x20}\x0a'+_0x24cff5(0x5bb)+'mn-cl'+'ose\x20{'+'\x20disp'+'lay:\x20'+'grid;'+_0x24cff5(0x6bd)+'e-ite'+_0x24cff5(0x4ae)+'enter'+_0x24cff5(0x63e)+'th:\x202'+_0x24cff5(0x49a)+'heigh'+_0x24cff5(0x528)+_0x24cff5(0x2d8)+_0x24cff5(0x5d7)+_0x24cff5(0x3c1)+_0x24cff5(0x6ee)+'r-rad'+'ius:\x20'+_0x24cff5(0x49a)+_0x24cff5(0x336)+_0x24cff5(0x578)+_0x24cff5(0x1fd)+_0x24cff5(0x50c)+_0x24cff5(0x489)+'color'+':\x20inh'+'erit;'+_0x24cff5(0x599)+_0x24cff5(0x4db)+'.45;\x20'+_0x24cff5(0x5d0)+_0x24cff5(0x6c1)+'inter'+_0x24cff5(0x6bf)+'\x20\x20\x20.m'+'n-clo'+'se:ho'+_0x24cff5(0x612)+_0x24cff5(0x599)+_0x24cff5(0x4db)+'1;\x20ba'+_0x24cff5(0x527)+'und:\x20'+'rgba('+_0x24cff5(0x3bc)+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x24cff5(0x1b4)+_0x24cff5(0x43e)+_0x24cff5(0x2b2)+_0x24cff5(0x341)+_0x24cff5(0x4f3)+'x;\x20he'+_0x24cff5(0x61c)+_0x24cff5(0x4c4)+';\x20fil'+_0x24cff5(0x449)+_0x24cff5(0x51d)+'troke'+_0x24cff5(0x690)+'rentC'+'olor;'+_0x24cff5(0x2ea)+'ke-wi'+'dth:\x20'+'2;\x20st'+_0x24cff5(0x6b6)+_0x24cff5(0x430)+_0x24cff5(0x5a6)+'ound;'+_0x24cff5(0x252)+_0x24cff5(0x40d)+_0x24cff5(0x637)+'\x20{\x20fl'+_0x24cff5(0x2ff)+';\x20min'+_0x24cff5(0x4dc)+_0x24cff5(0x515)+_0x24cff5(0x307)+_0x24cff5(0x38c)+_0x24cff5(0x374)+'uto;\x20'+_0x24cff5(0x22d)+'ay:\x20g'+_0x24cff5(0x303)+'grid-'+'templ'+'ate-c'+'olumn'+'s:\x20re'+'peat('+_0x24cff5(0x5f8)+_0x24cff5(0x5ad)+'\x20minm'+'ax(25'+_0x24cff5(0x6dd)+'1fr))'+';\x20ali'+_0x24cff5(0x225)+'ems:\x20'+_0x24cff5(0x490)+';\x20ali'+_0x24cff5(0x1ae)+'ntent'+':\x20sta'+_0x24cff5(0x4a7)+_0x24cff5(0x27f)+'0px;\x20'+_0x24cff5(0x364)+'ng:\x200'+_0x24cff5(0x5f1)+_0x24cff5(0x355)+_0x24cff5(0x6bf)+_0x24cff5(0x659)+_0x24cff5(0x5e5)+'s::-w'+_0x24cff5(0x6d3)+'-scro'+'llbar'+'\x20{\x20wi'+_0x24cff5(0x686)+'8px;\x20'+_0x24cff5(0x6f9)+_0x24cff5(0x587)+'cols:'+_0x24cff5(0x685)+_0x24cff5(0x3f9)+'croll'+_0x24cff5(0x356)+_0x24cff5(0x712)+_0x24cff5(0x3ab)+_0x24cff5(0x362)+_0x24cff5(0x28f)+_0x24cff5(0x39d)+_0x24cff5(0x60d)+_0x24cff5(0x5ef)+',.08)'+_0x24cff5(0x6c2)+'der-r'+_0x24cff5(0x683)+_0x24cff5(0x436)+_0x24cff5(0x6bf)+_0x24cff5(0x4bd)+_0x24cff5(0x5e0)+'d\x20{\x20b'+_0x24cff5(0x5d7)+'-radi'+'us:\x201'+_0x24cff5(0x193)+_0x24cff5(0x336)+'round'+_0x24cff5(0x6ea)+'a(255'+',255,'+_0x24cff5(0x675)+_0x24cff5(0x709)+'\x20box-'+'shado'+_0x24cff5(0x516)+_0x24cff5(0x2a2)+_0x24cff5(0x2e6)+_0x24cff5(0x2a7)+_0x24cff5(0x39d)+_0x24cff5(0x60d)+_0x24cff5(0x5ef)+_0x24cff5(0x53a)+_0x24cff5(0x6bf)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'{\x20bac'+_0x24cff5(0x362)+'nd:\x20r'+_0x24cff5(0x39d)+_0x24cff5(0x60d)+_0x24cff5(0x5ef)+_0x24cff5(0x607)+';\x20box'+_0x24cff5(0x716)+'ow:\x20i'+'nset\x20'+'0\x200\x200'+_0x24cff5(0x6d6)+'rgba('+'255,1'+_0x24cff5(0x29f)+_0x24cff5(0x2ad)+_0x24cff5(0x537)+_0x24cff5(0x5bb)+_0x24cff5(0x566)+'rd-he'+_0x24cff5(0x368)+_0x24cff5(0x22d))+('ay:\x20f'+_0x24cff5(0x3c4)+_0x24cff5(0x418)+_0x24cff5(0x4c5)+'s:\x20ce'+_0x24cff5(0x504)+'\x20gap:'+_0x24cff5(0x47c)+'\x20padd'+_0x24cff5(0x459)+_0x24cff5(0x240)+_0x24cff5(0x2a8)+_0x24cff5(0x252)+_0x24cff5(0x20d)+_0x24cff5(0x6f7)+_0x24cff5(0x282)+_0x24cff5(0x665)+_0x24cff5(0x1b5)+_0x24cff5(0x36d)+_0x24cff5(0x3e0)+'th:\x200'+_0x24cff5(0x6bf)+'\x20\x20\x20.s'+_0x24cff5(0x5e0)+_0x24cff5(0x453)+_0x24cff5(0x455)+'rong\x20'+'{\x20fon'+_0x24cff5(0x25e)+_0x24cff5(0x1d1)+_0x24cff5(0x3b8)+_0x24cff5(0x688)+'eight'+_0x24cff5(0x2d6)+';\x20col'+_0x24cff5(0x39f)+_0x24cff5(0x39d)+'46,23'+'8,242'+_0x24cff5(0x4ab)+_0x24cff5(0x6bf)+_0x24cff5(0x4bd)+'k-car'+_0x24cff5(0x5de)+_0x24cff5(0x628)+_0x24cff5(0x300)+'itle\x20'+'stron'+'g\x20{\x20c'+_0x24cff5(0x3bf)+_0x24cff5(0x59d)+'0f5;\x20'+_0x24cff5(0x6f9)+_0x24cff5(0x702)+_0x24cff5(0x3f3)+'\x20{\x20pa'+_0x24cff5(0x405)+_0x24cff5(0x301)+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x24cff5(0x4a4)+_0x24cff5(0x232)+'nt-si'+_0x24cff5(0x21f)+_0x24cff5(0x219)+_0x24cff5(0x52b)+_0x24cff5(0x3e8)+_0x24cff5(0x5c1)+'rgin-'+_0x24cff5(0x3f6)+_0x24cff5(0x411)+_0x24cff5(0x1d0)+_0x24cff5(0x5bb)+_0x24cff5(0x1e9)+'l\x20{\x20d'+_0x24cff5(0x640)+'y:\x20fl'+_0x24cff5(0x278)+'lign-'+'items'+_0x24cff5(0x265)+_0x24cff5(0x6c0)+_0x24cff5(0x452)+_0x24cff5(0x49a)+_0x24cff5(0x364)+_0x24cff5(0x4af)+_0x24cff5(0x397)+_0x24cff5(0x26d)+'-size'+':\x2011.'+_0x24cff5(0x4e6)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'label'+_0x24cff5(0x4bc)+_0x24cff5(0x2ff)+_0x24cff5(0x4e0)+_0x24cff5(0x39f)+_0x24cff5(0x39d)+'46,23'+'8,242'+',.75)'+';\x20}\x0a\x20'+_0x24cff5(0x4bd)+_0x24cff5(0x6c7)+'t\x20{\x20d'+'ispla'+_0x24cff5(0x229)+_0x24cff5(0x2e3)+_0x24cff5(0x4d1)+_0x24cff5(0x30d)+'\x2010px'+_0x24cff5(0x1e5)+'city:'+'\x20.4;\x20'+_0x24cff5(0x6f9)+_0x24cff5(0x702)+'switc'+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x24cff5(0x442)+_0x24cff5(0x421)+_0x24cff5(0x5cd)+_0x24cff5(0x27c)+_0x24cff5(0x488)+_0x24cff5(0x23c)+_0x24cff5(0x600)+'\x20bord'+_0x24cff5(0x5b0)+_0x24cff5(0x6c2)+'der-r'+_0x24cff5(0x683)+_0x24cff5(0x720)+'x;\x20ba'+_0x24cff5(0x527)+_0x24cff5(0x6d8)+'rgba('+'255,2'+_0x24cff5(0x60d)+'5,.07'+_0x24cff5(0x373)+'rsor:'+_0x24cff5(0x3a7)+_0x24cff5(0x6c0)+'flex:'+'\x20none'+_0x24cff5(0x6bf)+_0x24cff5(0x4bd)+_0x24cff5(0x64e)+'tch::'+_0x24cff5(0x1a2)+'\x20{\x20co'+'ntent'+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0x24cff5(0x18e)+_0x24cff5(0x1bb)+'\x20top:'+'\x203px;'+_0x24cff5(0x398)+_0x24cff5(0x381)+_0x24cff5(0x63e)+_0x24cff5(0x3aa)+'px;\x20h'+_0x24cff5(0x3f1)+_0x24cff5(0x18a)+_0x24cff5(0x6c2)+_0x24cff5(0x427)+'adius'+_0x24cff5(0x43b)+_0x24cff5(0x5d3)+_0x24cff5(0x362)+_0x24cff5(0x28f)+'gba(2'+'55,25'+_0x24cff5(0x5ef)+',.25)'+';\x20tra'+_0x24cff5(0x295)+'on:\x20l'+_0x24cff5(0x445)+'2s,\x20b'+_0x24cff5(0x47e)+'ound\x20'+'.2s;\x20'+'}\x0a\x20\x20\x20'+_0x24cff5(0x702)+_0x24cff5(0x333)+_0x24cff5(0x6b4)+'a-che'+_0x24cff5(0x494)+_0x24cff5(0x4a5)+_0x24cff5(0x568)+_0x24cff5(0x336)+_0x24cff5(0x578)+_0x24cff5(0x6ea))+(_0x24cff5(0x6b1)+_0x24cff5(0x23e)+'157,.'+'25);\x20'+_0x24cff5(0x6f9)+_0x24cff5(0x702)+_0x24cff5(0x333)+_0x24cff5(0x6b4)+'a-che'+'cked='+_0x24cff5(0x4a5)+'\x22]::a'+_0x24cff5(0x48c)+_0x24cff5(0x422)+_0x24cff5(0x4cb)+'px;\x20b'+_0x24cff5(0x47e)+_0x24cff5(0x1d6)+_0x24cff5(0x1fb)+_0x24cff5(0x6eb)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x24cff5(0x6db)+_0x24cff5(0x4c2)+'ckgro'+'und:\x20'+_0x24cff5(0x1d7)+_0x24cff5(0x3bc)+_0x24cff5(0x60d)+_0x24cff5(0x5d1)+_0x24cff5(0x33b)+'order'+':\x200;\x20'+_0x24cff5(0x6ee)+'r-rad'+'ius:\x20'+_0x24cff5(0x41a)+_0x24cff5(0x619)+_0x24cff5(0x622)+_0x24cff5(0x288)+'\x20padd'+_0x24cff5(0x459)+'6px\x209'+'px;\x20f'+_0x24cff5(0x403)+_0x24cff5(0x64a)+_0x24cff5(0x5f5)+_0x24cff5(0x2d4)+'tline'+':\x20non'+_0x24cff5(0x342)+_0x24cff5(0x648)+_0x24cff5(0x4a9)+_0x24cff5(0x21b)+_0x24cff5(0x2e6)+'0\x201px'+'\x20rgba'+_0x24cff5(0x6c8)+_0x24cff5(0x3bc)+'55,.0'+_0x24cff5(0x1e0)+_0x24cff5(0x1c8)+_0x24cff5(0x218)+_0x24cff5(0x45c)+_0x24cff5(0x457)+_0x24cff5(0x531)+_0x24cff5(0x47e)+'ound:'+'\x20#221'+_0x24cff5(0x692)+_0x24cff5(0x6f9)+_0x24cff5(0x702)+_0x24cff5(0x313)+'\x20{\x20di'+_0x24cff5(0x5c7)+_0x24cff5(0x3df)+_0x24cff5(0x2c8)+_0x24cff5(0x589)+_0x24cff5(0x224)+_0x24cff5(0x63d)+_0x24cff5(0x2b3)+_0x24cff5(0x1c3)+_0x24cff5(0x484)+_0x24cff5(0x1c8)+_0x24cff5(0x576)+'lider'+_0x24cff5(0x655)+_0x24cff5(0x6d3)+'-appe'+'aranc'+_0x24cff5(0x349)+_0x24cff5(0x557)+'ppear'+'ance:'+'\x20none'+';\x20wid'+_0x24cff5(0x446)+_0x24cff5(0x1f1)+_0x24cff5(0x51b)+_0x24cff5(0x344)+_0x24cff5(0x6ef)+_0x24cff5(0x527)+_0x24cff5(0x6d8)+'trans'+_0x24cff5(0x18b)+_0x24cff5(0x6c9)+'\x20\x20\x20\x20.'+_0x24cff5(0x3b2)+_0x24cff5(0x3d2)+_0x24cff5(0x685)+'kit-s'+_0x24cff5(0x615)+'-runn'+_0x24cff5(0x5d9)+_0x24cff5(0x34b)+_0x24cff5(0x32a)+'ight:'+_0x24cff5(0x6c6)+_0x24cff5(0x50d)+'er-ra'+'dius:'+'\x202px;'+_0x24cff5(0x6a5)+_0x24cff5(0x4e4)+_0x24cff5(0x5ff)+'near-'+_0x24cff5(0x555)+_0x24cff5(0x1a4)+_0x24cff5(0x3b3)+'d,\x20#f'+_0x24cff5(0x33d)+')\x200\x200'+_0x24cff5(0x55f)+_0x24cff5(0x46a)+_0x24cff5(0x402)+')\x20100'+_0x24cff5(0x183)+_0x24cff5(0x412)+'t,\x20rg'+'ba(25'+_0x24cff5(0x5ef)+',255,'+'.08);'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x24cff5(0x676)+_0x24cff5(0x1ff)+_0x24cff5(0x57f)+_0x24cff5(0x262)+_0x24cff5(0x247)+'humb\x20'+_0x24cff5(0x2de)+_0x24cff5(0x5b1)+_0x24cff5(0x594)+_0x24cff5(0x1df)+':\x20non'+_0x24cff5(0x2d7)+'dth:\x20'+_0x24cff5(0x41a)+'heigh'+_0x24cff5(0x316)+_0x24cff5(0x6e1)+'rgin-'+_0x24cff5(0x570)+_0x24cff5(0x1b1)+_0x24cff5(0x50d)+_0x24cff5(0x71b)+'dius:'+'\x2050%;'+_0x24cff5(0x6a5)+'groun'+_0x24cff5(0x668)+'f6b9d'+';\x20}\x0a\x20'+_0x24cff5(0x4bd)+_0x24cff5(0x386)+'\x20{\x20fo'+_0x24cff5(0x1d5)+_0x24cff5(0x21f)+'1px;\x20'+_0x24cff5(0x4d1)+_0x24cff5(0x6b0)+'t:\x2060'+_0x24cff5(0x3bd)+'n-wid'+'th:\x202'+_0x24cff5(0x49a)+'text-'+'align'+_0x24cff5(0x719)+_0x24cff5(0x3f4)+'olor:'+_0x24cff5(0x657)+'(246,'+_0x24cff5(0x699)+_0x24cff5(0x493)+_0x24cff5(0x537)+'\x20\x20\x20\x20.'+'sk-co'+_0x24cff5(0x241))+(_0x24cff5(0x613)+_0x24cff5(0x5dd)+_0x24cff5(0x58e)+'eight'+_0x24cff5(0x4f1)+'x;\x20bo'+_0x24cff5(0x35b)+'\x200;\x20b'+_0x24cff5(0x5d7)+_0x24cff5(0x4ec)+_0x24cff5(0x3c5)+'px;\x20b'+_0x24cff5(0x47e)+'ound:'+_0x24cff5(0x1f8)+_0x24cff5(0x645)+_0x24cff5(0x2cc)+_0x24cff5(0x3a2)+'ursor'+_0x24cff5(0x4e8)+_0x24cff5(0x504)+_0x24cff5(0x252)+_0x24cff5(0x20d)+'-note'+_0x24cff5(0x232)+'nt-si'+_0x24cff5(0x21f)+_0x24cff5(0x219)+_0x24cff5(0x619)+':\x20rgb'+_0x24cff5(0x66a)+_0x24cff5(0x2f3)+_0x24cff5(0x6f0)+_0x24cff5(0x371)+_0x24cff5(0x1de)+_0x24cff5(0x590)+_0x24cff5(0x29c)+_0x24cff5(0x6f9)+'\x20.sk-'+'note.'+_0x24cff5(0x61e)+_0x24cff5(0x55c)+'r:\x20#f'+'f7a93'+_0x24cff5(0x6bf)+'\x20\x20\x20.s'+_0x24cff5(0x691)+_0x24cff5(0x2b4)+_0x24cff5(0x3e1)+_0x24cff5(0x24e)+'flex-'+_0x24cff5(0x490)+_0x24cff5(0x6c2)+_0x24cff5(0x5ed)+_0x24cff5(0x211)+'rder-'+_0x24cff5(0x5b5)+'s:\x208p'+_0x24cff5(0x274)+'dding'+_0x24cff5(0x18a)+_0x24cff5(0x2b0)+_0x24cff5(0x5d3)+_0x24cff5(0x362)+'nd:\x20#'+_0x24cff5(0x3b3)+_0x24cff5(0x3ac)+_0x24cff5(0x5c5)+'#fff;'+_0x24cff5(0x26d)+'-size'+_0x24cff5(0x67c)+'5px;\x20'+_0x24cff5(0x4d1)+_0x24cff5(0x6b0)+'t:\x2070'+_0x24cff5(0x3ed)+_0x24cff5(0x222)+'\x20poin'+_0x24cff5(0x6c0)+'}\x0a\x20\x20\x20'+_0x24cff5(0x702)+'btn:h'+_0x24cff5(0x58c)+_0x24cff5(0x5a5)+_0x24cff5(0x268)+_0x24cff5(0x70d)+_0x24cff5(0x366)+_0x24cff5(0x369)+_0x24cff5(0x6bf)+_0x24cff5(0x4f2));window[_0x24cff5(0x56c)+'entLi'+_0x24cff5(0x478)+'r'](_0x25cc89['GocOP'],_0x583c0a=>{var _0x182ca7=_0x24cff5,_0x2427a6={'ewSil':_0x1cc46e[_0x182ca7(0x547)],'gDtgn':_0x182ca7(0x283)+'arget'+'Frame'+'Rate','hpcGp':function(_0x5b954e,_0x2efb89){return _0x1cc46e['mEiLE'](_0x5b954e,_0x2efb89);},'xWTyw':function(_0x4b1332,_0x33c9d3){return _0x4b1332+_0x33c9d3;},'lRAaQ':'\x20hook'+'s','zVuSb':'\x20|\x20ga'+_0x182ca7(0x5a8),'DHRnF':_0x1cc46e[_0x182ca7(0x6cc)],'nZHQz':'held','QsprU':_0x182ca7(0x5c4),'QIVnG':_0x182ca7(0x5fc)+_0x182ca7(0x272)+'t\x20','fGEzO':function(_0x47fbb6,_0x14be86,_0x46916f,_0x6eaa39,_0x10137b,_0x37cfe6){var _0x5a3b3d=_0x182ca7;return _0x1cc46e[_0x5a3b3d(0x4cf)](_0x47fbb6,_0x14be86,_0x46916f,_0x6eaa39,_0x10137b,_0x37cfe6);},'gvHJm':_0x1cc46e[_0x182ca7(0x338)],'lHlTF':function(_0x31ec4d,_0x487052,_0x54dbca){return _0x1cc46e['XNInw'](_0x31ec4d,_0x487052,_0x54dbca);}};if(_0x1cc46e[_0x182ca7(0x45b)](_0x182ca7(0x51f),_0x1cc46e[_0x182ca7(0x1f9)]))_0x583c0a[_0x182ca7(0x1f6)]===_0x1cc46e['BGMWz']&&(_0x583c0a['preve'+'ntDef'+_0x182ca7(0x296)](),_0x1cc46e['ovJuk'](_0x1a6b8b));else{var _0x4e6a56=_0x5a12bc[_0x182ca7(0x636)+_0x182ca7(0x476)]?_0x182ca7(0x4f4)+_0x182ca7(0x552)+_0x182ca7(0x2e5)+_0x182ca7(0x6ba)+_0x182ca7(0x3be)+'\x20no\x20h'+_0x182ca7(0x3ff)+'(relo'+'ad\x20to'+'\x20exit'+')':_0x419d08[_0x182ca7(0x3b7)]?_0x2427a6[_0x182ca7(0x257)](_0x2427a6['hpcGp']('UWMK\x20'+_0x182ca7(0x46f)+'\x20'+(_0x4854db[_0x182ca7(0x24f)+'Total']?_0x2427a6[_0x182ca7(0x4b4)](_0x2427a6['xWTyw'](_0x2f5d05[_0x182ca7(0x24f)+'Ok'],'/')+_0x11899f['hooks'+'Total'],_0x2427a6['lRAaQ']):_0x182ca7(0x41f)+_0x182ca7(0x673)+'med\x20('+'all\x20o'+_0x182ca7(0x360))+_0x2427a6[_0x182ca7(0x53e)]+(_0x597628[_0x182ca7(0x3fa)+_0x182ca7(0x2f8)]?_0x2427a6[_0x182ca7(0x469)]:'loadi'+'ng'),_0x182ca7(0x5fd)+_0x182ca7(0x5f4)+'\x20')+(_0x4aaab7[_0x182ca7(0x30f)+_0x182ca7(0x491)]?_0x2427a6[_0x182ca7(0x4a6)]:_0x2427a6[_0x182ca7(0x58f)])+_0x2427a6['QIVnG'],_0x2f660d[_0x182ca7(0x332)+'ents']?'held':_0x182ca7(0x5c4)):'UWMK\x20'+'MISSI'+_0x182ca7(0x558)+'overl'+_0x182ca7(0x1bd)+'ly\x20(r'+'einst'+_0x182ca7(0x5a2)+_0x182ca7(0x3cb)+_0x182ca7(0x69b)+_0x182ca7(0x37e);if(_0x237254['lastE'+_0x182ca7(0x3ba)])_0x4e6a56+='\x20|\x20ER'+_0x182ca7(0x1bf)+_0x24f1d8['lastE'+_0x182ca7(0x3ba)];return _0x2427a6[_0x182ca7(0x1b7)](_0x2bcbe1,_0x2427a6[_0x182ca7(0x1ab)],_0x4e6a56,_0x34799a[_0x182ca7(0x3b7)],null,[_0x2f86e1(_0x182ca7(0x425)+'PS\x20un'+_0x182ca7(0x2f4),'calls'+'\x20Unit'+'yEngi'+'ne.Ap'+'plica'+_0x182ca7(0x54b)+_0x182ca7(0x283)+_0x182ca7(0x583)+'Frame'+_0x182ca7(0x63a),_0x2427a6['lHlTF'](_0x387575,'Apply',()=>{var _0x4870d4=_0x182ca7;try{if(_0x61958d)_0x220651['call'](_0x2427a6[_0x4870d4(0x42c)],_0x2427a6[_0x4870d4(0x66f)],[0x1918+0x165*-0xb+-0x8d1]);}catch(_0x48ac6f){}}))]);}},!![]);var _0x3afedd=document['creat'+_0x24cff5(0x294)+_0x24cff5(0x1e8)](_0x25cc89['cratu']);_0x3afedd[_0x24cff5(0x47a)]['cssTe'+'xt']=_0x24cff5(0x1cd)+_0x24cff5(0x643)+_0x24cff5(0x31e)+_0x24cff5(0x54a)+'2px;r'+_0x24cff5(0x61c)+'12px;'+'z-ind'+'ex:21'+_0x24cff5(0x271)+'646;c'+_0x24cff5(0x3f2)+_0x24cff5(0x492)+_0x24cff5(0x57e)+'idth:'+_0x24cff5(0x34e)+_0x24cff5(0x51b)+_0x24cff5(0x420)+_0x24cff5(0x695)+'city:'+_0x24cff5(0x5a4)+'ransi'+_0x24cff5(0x377)+'opaci'+_0x24cff5(0x5bc)+'2s;po'+'inter'+'-even'+'ts:au'+'to;fi'+_0x24cff5(0x2c0)+'drop-'+'shado'+_0x24cff5(0x542)+_0x24cff5(0x5f1)+_0x24cff5(0x1d7)+_0x24cff5(0x592)+'07,15'+'7,0.7'+'))',_0x3afedd[_0x24cff5(0x4cc)+'HTML']=_0x24cff5(0x35f)+_0x24cff5(0x2b5)+'ox=\x220'+_0x24cff5(0x451)+_0x24cff5(0x1c6)+'<path'+_0x24cff5(0x704)+'12\x2021'+'c-1.5'+'-2.5-'+'4-4.5'+_0x24cff5(0x580)+'5\x200-2'+'.5\x201.'+_0x24cff5(0x312)+'\x204-4.'+_0x24cff5(0x59a)+'\x204\x204.'+_0x24cff5(0x4c3)+'-2.5\x20'+_0x24cff5(0x24c)+'.5z\x22\x20'+_0x24cff5(0x4fa)+_0x24cff5(0x1a5)+_0x24cff5(0x30b)+_0x24cff5(0x559)+'#ff6b'+'9d\x22\x20s'+_0x24cff5(0x5d8)+_0x24cff5(0x6a4)+_0x24cff5(0x5b6)+'\x20stro'+'ke-li'+_0x24cff5(0x217)+_0x24cff5(0x546)+'nd\x22\x20s'+_0x24cff5(0x5d8)+_0x24cff5(0x1c7)+_0x24cff5(0x200)+'\x22roun'+_0x24cff5(0x69a)+'circl'+_0x24cff5(0x2da)+_0x24cff5(0x32d)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+_0x24cff5(0x2dd)+'6b9d\x22'+'/></s'+_0x24cff5(0x4c1),_0x3afedd['title']='Sakur'+_0x24cff5(0x6a3)+'r',_0x3afedd['onmou'+_0x24cff5(0x46c)+'er']=()=>_0x3afedd[_0x24cff5(0x47a)][_0x24cff5(0x52b)+'ty']='1',_0x3afedd['onmou'+'selea'+'ve']=()=>_0x3afedd['style']['opaci'+'ty']=_0x24cff5(0x509),_0x3afedd['oncli'+'ck']=_0x1b0812=>{var _0x260780=_0x24cff5;_0x1b0812[_0x260780(0x36e)+_0x260780(0x2ca)+'ation'](),_0x1cc46e[_0x260780(0x626)](_0x1a6b8b);},document['body'][_0x24cff5(0x2c5)+_0x24cff5(0x36c)+'d'](_0x3afedd),_0x41679d(),_0x25cc89['JDppe'](requestAnimationFrame,_0x3c28a5),console[_0x24cff5(0x585)]('[saku'+_0x24cff5(0x661)+'ur]\x20m'+_0x24cff5(0x545)+_0x24cff5(0x2eb)+'\x20UWMK'+':',_0x15d093[_0x24cff5(0x3b7)]);});})()));function _0x3683(_0x1e59b8,_0x1d0fac){_0x1e59b8=_0x1e59b8-(0x2*0xc9f+-0x183*0x17+0x161*0x8);var _0x4b4837=_0x333a();var _0x2d5647=_0x4b4837[_0x1e59b8];if(_0x3683['iyshbX']===undefined){var _0x72f5b7=function(_0x268d21){var _0x379d5e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c68cd='',_0xb96c6d='';for(var _0x49a0c0=-0x8e*0x3d+-0x22d4+-0x11*-0x40a,_0x4cc4f8,_0x33e2bf,_0x50bce5=0x175b+0x7ce+-0x1f29;_0x33e2bf=_0x268d21['charAt'](_0x50bce5++);~_0x33e2bf&&(_0x4cc4f8=_0x49a0c0%(-0xdd+0x21b9*0x1+-0x20d8)?_0x4cc4f8*(-0x190*0x19+0x1a70+0xce0)+_0x33e2bf:_0x33e2bf,_0x49a0c0++%(0xe0f+0x2372+-0x317d))?_0x3c68cd+=String['fromCharCode'](0x1a40+0x22ec+0x403*-0xf&_0x4cc4f8>>(-(0x10f7*-0x2+-0xbfd+-0xf4f*-0x3)*_0x49a0c0&0x1e59*-0x1+-0x25b1+-0x48*-0xf2)):-0x21aa+-0xb4d+0x2cf7){_0x33e2bf=_0x379d5e['indexOf'](_0x33e2bf);}for(var _0x4ef90e=-0x2ce+-0x97*-0x1+-0x51*-0x7,_0x14a830=_0x3c68cd['length'];_0x4ef90e<_0x14a830;_0x4ef90e++){_0xb96c6d+='%'+('00'+_0x3c68cd['charCodeAt'](_0x4ef90e)['toString'](0x9da+-0x11ec+-0x1*-0x822))['slice'](-(-0x1f*-0x11+-0x15a6+0x1399));}return decodeURIComponent(_0xb96c6d);};_0x3683['ITZKTO']=_0x72f5b7,_0x3683['DdqHoh']={},_0x3683['iyshbX']=!![];}var _0xc0fbac=_0x4b4837[0x22d2+-0x1*0x1cab+0x7*-0xe1],_0x25adff=_0x1e59b8+_0xc0fbac,_0x389c54=_0x3683['DdqHoh'][_0x25adff];return!_0x389c54?(_0x2d5647=_0x3683['ITZKTO'](_0x2d5647),_0x3683['DdqHoh'][_0x25adff]=_0x2d5647):_0x2d5647=_0x389c54,_0x2d5647;}function _0x333a(){var _0x51b7d9=['BgvZiem','ktSGFqO','Fde4Fde','zw1ZoIa','lc4WnsK','z2uUiei','yw5Uywi','CMLUz3m','ELz1u2i','DgjZvu0','mtu5odK3mdbgEvjozfi','zvrHA2u','DYGWida','ywX0Ac4','D2fYBG','zw51ihi','psjYB3u','D0Tmyxy','Bw4TAca','BgfZDeu','Dg9WoJe','DgLVBI4','C0vLre0','B1jLy28','lM1Ulxm','igrPC3a','CY1Zzxi','rgfUz2u','tu9ersa','ywrK','C0Hiu00','z3jHzgK','D3jPDgu','BMu7ige','tKCG4Ocuia','B2TLpsi','B3DntKW','ChjLDMu','ignVBg8','v3L4sha','q291BNq','ic8GDMe','nsaWlti','CLv6tgO','qurLsuq','yxrLvge','BMuUqxa','AwX5oIa','C2STy2e','B3rOAw4','iL0GEYa','BhmGDgG','oWOGica','Bw91C2u','ywrKrxy','vvDnsW','rNvbtvm','uNvUDgK','Dg9WoIa','zxmGB24','mcWWlJG','CMvJDa','zxqGmca','tg9JywW','lNnRlxm','Dw5Kzwq','CM91BMq','Bw4TDg8','lK92zxi','zxrL','CM9Szq','ChG7iha','DgvYo3C','D2vIA2K','ltqTnY4','ms4XlJa','sxnKwvu','yxjNzxq','zw5HyMW','Bg9N','C2zZveC','ic5TBI0','u3bHy2u','AwDUlwK','ihDOAwm','D1Djywi','B3zLCIa','oYbWB2K','ChG7igG','uxnWCLu','zZOGmNa','vg90ywW','mJu1lde','yKnfsgm','yxbWzwe','u2L6zq','yunPvMi','zsGXnta','EKXMzuK','ig9Wywm','nxm0idi','BML0igy','zw50CZO','icnMzMy','zhbY','mcWWlJC','y29PBa','oYbKAxm','ywXSihq','DgvTlxu','mc41o3q','EYbMAwW','yxa6ihi','ifvjiIW','BwuG','CLLuA0K','z2v0qxq','CgfJAxq','y25erNu','zMLSBcW','qunuAYa','tw9Kzsa','zxi6ida','yMTPDc0','zLPLyKC','BerPzsK','CMfUC3a','CMfKAxu','Ad0ImIi','Bg9Hzc4','we5jBNC','swyGCMu','i2zMnMi','icaGic4','DhKGmc4','B25PBNa','BM9szwm','mNb4ksa','oMHVC3q','ndSGBwe','u3Ptvvu','q3jVC3m','BM9Uzq','Bg9YoIa','ywqUieK','C3bSyxK','BwLKzgW','zMLSBfm','ihWGrvi','B2X1Dgu','BgfIzwW','Awr0AdO','BfHwAeq','AuLvExO','y3vYC28','nsWUmdm','s0nttxm','oYbIywm','idi0iIa','ihSGD2K','r3rzDKm','B3jKzxi','DhjVA2u','ywjSzs0','Dw5PDhK','v0rKtMm','ugL3ALO','AdOGmZq','zc5VBIa','y2fWDhu','AY1Jyxi','DwX0','ywqGDg8','B2f0Eq','A2uTBgK','BI1JB2W','AxnPyMW','AtmY','yMLJlwi','sgvPz2G','BKPXvxu','u3rHDhu','mhW3Fdu','zgvYoIa','yM90Aca','nsWYntu','mJf8mJm','idrWEca','EM5lzfy','qsblt1u','B290zxi','mteUnxa','u0fgrq','idqTnc4','yxv0BY0','zxjSyxK','DgHPCYa','icaGig8','ihWGBw8','ihWGC2G','BgLUzvq','zdOGBgK','mtrWEdS','zMLUza','yLzPDhe','twjAz1q','idGWChG','zw1LBNq','B2reAwu','lc4WncK','qLLJCvG','yMvNAw4','s2fMq3u','Cg9Uj3m','zg9JDw0','ntuSmJu','v2LWzsa','ig1VBwu','A2LWCgi','BgvMDa','DMvYihS','ihDPzhq','CNnxugC','BgLKzxi','Aw5Mqw0','zcbZzwu','mdbTCY4','y29SB3i','igP1Bxa','C2STC3C','AwDODdO','ihnOB3q','zxjYihS','Bw8GDg8','y29TyMe','rw5NAw4','oIaJzJy','iJeUnsi','DcbZDge','icbIB3G','uKDIufu','Bw4TAa','lNnRlwm','FdD8mNW','y3jVC3m','yKjyAMm','yxDzu1K','kc4YmIW','ieTLzxa','q0LOzui','EYbMB24','zxzLBNq','B2vOvxe','DdOXmda','AwfJDNO','C3zNiJ4','C2fMzu0','lwnVBhm','y2HdB2W','CwzhDKC','uMf0zq','Dgv4Dem','yM9KEq','ignLBNq','oYb3Awq','yxjPys0','AxnWBge','w3nHA3u','AcbVBMu','Aw9UoMy','A3rtAvy','oYbWywq','yLbxAKW','EunhCgu','Ec1ZAge','AdOGnJi','AxPLoIa','ihWGz2e','mcWWlJy','ys5RB3u','AY1ZD2K','BhrOige','ueDQrKC','Aw5JBhu','Aw46ida','CwnNufK','zgv2Awm','ihSGlxC','n3WXnxW','ihjNyMe','Bw4TCge','icaGlM0','Ehbbsw0','CIGYmNa','mtz8mta','CxDwBK4','BMLUzW','C2STBM8','q0nVC1G','CMeTA28','BsbYAwC','A3nty2e','Aw9FmZa','zsb7igy','D3H0tKK','yunkBvu','zdOGi2y','C3bLzwq','ysGYndy','owqIihm','DxjH','svnxvLi','t0HLywW','z0r0z24','jsK7ic0','r29Jt1a','BMCGzM8','A3mGyxi','sNvTCca','mJu1lc4','lxnSAwq','nIaXoci','Bw4TC2K','y2HtAxO','wuHWvKK','ign1CNm','oIaXms4','C2STBwi','zMXLEdS','qKrQEha','igfSAwC','t1vsx18','DMfSDwu','ywrPDxm','A2XUAwm','oI13zwi','zhrOoIa','C2rtAeK','B250lxC','ndmZmtKXyw1pzNzo','AcaTidq','y3nZvgu','Axz3whe','ANvTCfa','DeTsvMO','Cg9PBNq','oIbJDxi','AY1IDg4','nde5oYa','yw5ZzM8','CMqTAgu','EdTVCge','oIbKCM8','lYbhCMe','AwrHDgu','mJm4ldi','zciVpJW','zxjZy3i','CgfAy2C','ltiUns0','igjVEc0','y29TCgW','EfDjuMi','AwXKigG','igvUDgK','ysblB3u','lxDPzhq','igjHy2S','DMLZDwe','BgvUz3q','Aw5WDxq','tuzSDxC','mJe0ou92ufr5sq','B2LS','BgLUzw4','ifvxtuS','Bw92zvq','nJaWide','D2vPz2G','ysGYntu','lcbJywW','B25Lige','AfTHCMK','Aw9F','CM9Rzs0','C3rYAw4','vwT5AMO','DhmGCgW','CMXHEsa','Dg9W','Dg9Y','ihbSywm','wKDcwLK','oYb9cIa','DgvYoYa','CJOGCg8','oYbIB3i','BvPlzfe','EhfYy00','D2L0Ag8','idjWEdS','AY1OAw4','kdi1nsW','DdSGFqO','C2HVD24','AgfZ','rgHMDM0','AwWGC3a','BNrLCI0','CIb2ywW','ys11Aq','ig5VigG','y2vSzxi','zwjRAxq','nhb4oYa','zwzzCLe','idfWEca','nJTWB2K','Dw5KoIa','zxzLBIa','zIXZExm','zMLLBgq','ntu5mZu1vw1nwNjz','mhb4lca','rxHW','DgvY','Bgf0zwq','EdSGBwe','AwvKigm','wun4ve4','uMvJDa','DK52Dwi','zxjYB3i','ienquW','s1r2whe','CML0zxm','oIbYz2i','yJLKoYa','CZOGy2u','y3nwvgK','yM9Yzgu','EdSGyMe','mJqYlc4','AKf0CLq','yuvltgG','D2fPDgK','CJOGDgG','qLLvBKm','sM9ABuu','lwnHCMq','y2HLy2S','FqOGica','BYbWAwC','CMfWAwq','Dg9Nz2W','CvnYy24','A1nbsM0','yxnLBgK','zvbPEgu','mJyWmtroqLfovvu','ic5ZAY0','lJuGms4','igq9iK0','wvfRuu0','zfLWsvm','BhKGkhi','oYbMB24','mdi1ktS','mJqSmtC','BgrYzw4','zsXTB24','yNjPz2G','BIb0Agu','uhzms0S','Bw9fEha','Dg9HAxq','AhvTyIa','A0TWtKO','y2LYy2W','BLbSyxq','lxnOywq','wenYuKi','CuPcEvK','oIbYAwC','A2v5Dxa','zxiTCMe','y3KGB24','zgfTywC','u2v0r2e','zgvSzxq','oIa5oxa','ChbLBNm','B3i6icm','tNH0B2u','CYbpsgu','jsbUBY0','A2vovNu','ocWYndi','yxrJAgu','qM90Dg8','B25JBgK','BsbVBIa','oIa4ChG','CgfYzw4','D0jSDxi','C2STDMe','igfIC28','B3f2AMW','sNfnwgy','B3nWywm','psjTBI0','mNb4oYa','D0TjCKG','nNWXoxW','nYWWlJm','Ag9VA04','zhrOoJe','AvjxD0W','zw51','z29KicG','lwHVCa','igHVB2S','EKD5sfC','yxPoBhG','Bw4TDge','y3jHDhu','ywz0zxi','reTsCKi','zw50kcm','iM5VBMu','ntaLktS','idmWChG','yY0XlJu','DcbHihq','yxbWBgK','z3zisM0','mJvWEdS','EhvwA1C','z24Ty28','zfzdvfG','vNfty28','ltjWEdS','mZuSmJq','ChG7cIa','Bw4Ty2W','Bgv4oIa','C3bSAxq','zKDfEK8','z29K','BM9UztS','r3Liwuq','Bhv0ztS','ugf0Aa','yxKGB24','zNvSBhm','uJOG','sg12D2K','zMLSBfq','kYbmtui','yxa6idG','mhWYmNW','Ec1KAxi','idi0iJ4','lwXPBMu','cIaGica','mdb2DZS','AgvHzgu','mtbWEdS','rwvWCfy','Cg9ZAxq','rMLLBgq','A2vizwe','EdSGFqO','ztOGmtm','tfDPt0C','DgnOihq','Aw5KzxG','BNqTC2K','B3vUzdO','CMDIysG','DhzUCeu','B2r5','t2HiBLu','BhvYkdi','zwf0CYa','yMX1CG','ywrKAw4','CMfUy2u','nsK7ih0','ie92zxi','qMfjthy','BMDL','nxmGy3u','oYbVCge','ywDTuvq','BhndCgC','zw50','C2STy3q','vwztsu4','z3jHDMK','lsbVDMu','DfHSEva','rNjHBwu','vKLsA0W','D0nVBg8','mhb4oYa','vxvJzu0','zNbZ','igDHDgu','DhvYyxq','y29Kzq','CMvZDg8','ig5VBMu','DfPfEwS','mxWZFda','icnMzJy','iefmtca','oIb0CMe','yxjLBNq','zxi6oI0','AM9PBJ0','nJKZq0PkuLHc','ihrOzsa','B2LSicG','yw5LBca','lxbHCMu','DhKGjq','FdeYFdi','zJmY','re5QD0i','BKXIu3i','BuvPteu','BwLUkdq','icaUC2S','BMnL','DhLqy3q','B24U','mdSGyM8','u2HHCNa','ifTfwfa','Bw92zq','yMX5lum','A3nqB3m','BMvJyxa','lNnRlwy','mxb4oYa','CMrLCI0','Aw5Zzxq','BNq6igm','uxrHwu0','u0fRzu4','EMu6ide','tMfTzq','zw0TDwK','CNnVCJO','Ag1qCvi','DgvTCZO','z24TAxq','yxrPB24','ENnWtMy','q0DxBfy','EtOGyMW','oIbIBhu','BM93','CMvWBge','zgLZCgW','BNn0ywW','DMjxD0O','mxWYFdu','nNW3Fdm','ihSGzM8','Ehfbsu4','BhrO','mZz0s25VqK0','ruX6Aw0','B1rcq3q','zg93BIa','qNfAD0C','lJv6iIa','zvbSDwC','z2H0oIa','AhvrCKu','ldeWnYW','mtaWid0','mtfWEca','Bg9YihS','z0HsExq','t01Tq2G','Ag9VA0m','BgLUzvC','u2fMzsa','zgvYlxq','CvPzwK4','Aw4Sihq','uM1bwg8','y2f0','ns00idC','Bg9HzgK','zwXMoIa','Ag9VA3m','C3rYB2S','lcbPBNm','ih0kica','Eg1wA3O','q0jbqKq','DhKGDMe','zguSihq','AhbJr3a','y2fSBa','z2v0rwW','AhvTv1m','oIaXoYa','DxjDigG','sw5PDgK','Dc1ZAxO','AgfPCG','igfUzca','zfPIC3u','Dc1ZBgK','zw50tgK','rgfTywC','oIbJzw4','C2vYDMu','oJiXndC','DgvYoIa','yxr0ywm','CgzTthC','Aw9U','C2v0','igzVBNq','yxryyLK','zxiGC2W','EdSGAgu','ndC0odm','DMvTzw4','rLbtigm','EdSGCge','wKn0reu','r3jHDMK','uMvJB2K','zxG7ige','mcWUntu','CIbHzhy','BefJsM0','idi2ChG','ugn0','zuv4Ca','yxa6ide','zw50rwW','igH1CNq','lxrPDgW','C2v0x3q','BNnSyxq','wxr6ALO','zxzLCNK','A3ndChm','zwvMmJS','wePoDfG','uMfWAwq','Be1VDgK','A2jJuKy','ig9U','zxiTzxy','BMq6ihi','igzPBgW','zufIt00','Fdv8mNW','qxLAAMy','zuvSzw0','BNnPDgK','yxvSDa','wufjyMK','odaSmtK','DeXovgC','igLMig0','igzVCIa','EcaWoYa','ig1HEsa','nhWXnhW','mdCSmtu','BMq6ihq','C2vSzwm','C2v0ida','AxvZoIa','Dw5RBM8','lNnRlw0','ieaG','mxb4ihi','mtjWEdS','zKHqDfK','v3jysuW','igvYCG','DgHLihC','nYWUmJG','BY1ZDMC','v2vItw8','ide2ChG','Eurvt0K','DMCGEYa','zxi7igC','ihSGywW','DMLLD0i','oIa2nta','yxb0Dxi','lwLVxYO','igjHBM4','Axj6AvO','DgvZDa','lwzPBhq','vhDjvMK','ig1HCMC','C2fRDxi','BhrLCJO','i2zMzG','BI1SB2C','Ce5RvMi','zxnxv0y','yxbWzw4','tKCGlsa','lKXVy2e','EdSGywW','z1vPAMu','CM9WywC','BfLmuve','zgLUzZO','vKHJwLq','qwvqDu4','vw5PDhK','sLn1sLK','yMfJA2q','Bgf5oIa','wxLzEfa','EdSGB3u','zg93kda','oIa2mda','ztSGD2K','ChG7igi','zxrhyw0','zsbJEd0','Dwnevuu','CIdIGjqG','psiJzMy','EYaTD2u','u2TPChm','zgvZ','CMqTDgK','Dgv4Dee','B2nRoYa','BYb0Agu','4Ocuig92zq','idaGmca','zw50CW','BgWGBwu','Evb2BNy','ihn0CM8','zwfKEs4','rMfjsfO','n3W2Fdu','Awy7ih0','CMuGkfm','DNbMqLm','DMnczuu','ihLVDxi','ldiZocW','Bg9JAW','ve1ZrxO','zxjZihq','ihn5C3q','B2fKzwq','EwLkDMy','CMvHzey','v2DYuu0','zwqGyw0','yw5Jzs4','s3PZu2i','zxG6ide','yxjKlxq','oIaWide','lxnLCMK','CMLKoYa','B29Rihi','B24Gzxy','ntuSlJa','oYbVDMu','C2STy28','CfPfB3O','ideYChG','iIbZDhi','EYbWB3m','C2L6ztO','v0ftrca','C2HVB3q','igHLAwC','mhGYnta','oc00lJu','CMfUz2u','CMvHza','nhW1Fdi','DdOGnNa','s2v5uW','r0nut0W','Aw9FnZi','zg93BG','twvNyxO','ihn0AwW','EcbYz2i','AxHLzdS','BMf2','BwLU','y2XHC3m','DMfS','wNjQreS','BJOGy28','B3bLCNq','ywn0A0S','Bgf5ig8','yxj0lG','tM8Gzw4','ihSGAgu','svvKtfi','ihjLy28','iJeYiIa','CgfYC2u','BI1ZDwi','qwrIBg8','zxH0','Bw92zw0','C3DPDgm','AKvAy1a','zdSGyMe','yMfJA2C','AgTjsM4','q1brwfy','D29YAYa','vvDnsYa','nsK7igi','CuLhBLm','zJzIowq','BYb7igq','yxnZAwC','ie1VDMu','D2LKDgG','ztSGyM8','y3jLzw4','DdOGoha','C2X2CMW','AxrPyxq','y2fWtw8','BvfNqvC','ztOGBM8','A2vZig8','DhjHy2S','yvrnwwC','vNrjqKK','mJzWEdS','oIaZmNa','uvDvyxu','odbWEcW','v0fttsa','v1nUz3O','z2v0sxq','nNb4ida','yMfYlxq','vMLZDwe','DgHVzca','BNrezwy','wufguKe','CMrLCJO','ide7ig0','q29SB3i','BcbKCMe','phn2zYa','zMyP','zfPIy2y','A2DYB3u','y2XLyxi','CgfKzgK','yuTVDxi','Dg5LC3m','tejjtxq','ywqGEYa','kdeUmsK','sgLKzxm','vgfRzxm','zenOAwW','mtSGBwK','C3rVCfa','B2LUDgu','idmYChG','nsK7iha','CxfZtNK','ktSGy3u','lxK6ige','ifvUAxq','Cc1ZAge','DgLVBJO','rfznAKq','zgL2','CfLxwey','vwLLzgi','B3nL','DgXL','Axb0kq','DxjDifu','odiPoYa','oIaZChG','ihrYyw4','igzVDxi','u0flvvi','sffjvM0','AY12ywW','u2vNB2u','ywXSig8','CJSGzM8','u2nHBgu','zwCGzMe','CMzSB3C','odjjtLrUEhy','q0joDMC','kdaSmcW','u0jkCxK','As1TB24','wen6wem','CMLZAYa','Bgu7igy','Bg9Y','DhLWzq','ChGGmdS','igXLzNq','Awr0Aa','DgL0Bgu','sM93sgy','Dgv4Dei','z2jHkdi','Cw1sBKK','B3i6ihi','Ag9VA1a','CfPRDhy','ida7igm','AuX3t2W','CxvLCNK','oYbQDxm','tuTfAgW','ihbVAw4','ztOGmtC','BffOree','DgG6idG','EYbIywm','zdSGy28','ChGGDwK','ugroBLO','ohb4ksK','DwnbCwq','BwvZC2e','C2STC2W','zMy2yJK','z2v0','wwXABgG','C3bHBG','DxDTAW','ChG7igy','CYaNzNu','CNjVCG','CI1Yywq','mJu1ldi','mdSGBwK','B25SEsW','B2XVCJO','AhHoCxa','oIaWoYa','phnTywW','zgvZyW','Bgv4oYa','Dxm6idy','tfn1Bw4','B3zLCMW','lwjHBNi','q1btihi','BMnhsNG','AguGDxm','lxrVCca','yw1L','AwnRihm','tuLtu0K','uhbLDNO','Fdj8nhW','AwrLCJO','Bw4TBwe','Bwf0y2G','z2LMEq','Ag9ZDg4','oYb1C2u','ktSkica','D25bBw8','C2v0uhi','B250zw4','B3uU','nhWWFde','CKXyEwm','oIbMBgu','BI13Awq','AwDUlxm','vxH4B3O','DgG6idu','DMLHifm','B3rZlG','y2vdAgK','igj1AwW','DhK6ic4','zM9UDa','nsKSida','igXPBwK','B246ig8','mdSGy3u','DgLKzs4','sMX2rK4','Aw9UlLq','zwLNAhq','DxjZB3i','BwjVzhK','Ahq7igm','z29KrgK','yM90Dg8','mtjWEca','neLVDxbPrq','A2L0lxm','z2fTzuW','CI52mq','zwn0Aw8','DMvYBge','ywDLigq','B29RCYa','BgLNBG','B3G9iJa','lca1mcu','B250lxm','zMLSzw4','zgrPBMC','BI1TywK','tg9Hzgu','B1DUAwK','werNyuC','zxj5idi','zLL4CNm','phbHDgG','icaUBw4','rM1rruC','A2v5zg8','Bernwha','BtOGnNa','CMvWzwe','AxrPB24','igfWCgW','y3jLyxq','C2fMzq','A291CI0','ywXPz24','AgfJEhe','nNb4oYa','q0fovKe','C051ENe','BgLJyxq','ywiUywm','mcbOB28','DdOYnNa','DMu7ihC','EYbSzwy','nJeWmZu5mLrrBxD2DW','DhLSzq','mJqWiey','DtmY','zgvYlxi','AwPxEwu','zvjHDgu','vMfSDwu','yJPOB3y','zxDtAwW','rvHqxq','y2vZlG','mti0otCWwMTHvhHY','BgLUzwm','ww5dAKO','yxrLkde','igzSzxG','Fdb8m3W','AgvZ','oIa0ChG','rNv2vLK','mJmYnZjwDNjOqxa','sKzkrxu','CI1ZzwW','oIa1mcu','ocKPoYa','s3LVqMK','B3nLihm','s1rSzei','lxnHBNm','DhjPyNu','zwXHDgK','qu16wNq','yMHVCa','zwz0ic4','DgG6idK','vKXtruq','EuvUz2K','BdOGBM8','nxWXFde','Cg9W','x19tquS','mhWZFde','icbIywm','C3rYB24','Fdr8mNW','idaGmJq','z2fWoIa','zc10Axq','ihnVig4','BguGC3q','tgvMDca','B3b0Aw8','BwvKicG','Aw5NoIa','v0npy24','quPZAMe','AwvSzca','EsbKzwy','D2L0Aca','Aw1Llca','zw50zxi','Dxm6idi','CM9Rzxm','Cfz0v3i','BwvsDw4','ywXSzwq','CMHSDM4','zgTPDa','zvzHBhu','reHsBKy','CIGTlxa','DvP3qLe','C2vLBNq','sNHZBK4','C2v0vhi','yM91BMq','ywn0Axy','rgnZv3O','ChGPoYa','igrLzMe','t3zLCNC','sxnhCM8','B2rL','oJa7D2K','C3rLBMu','CI51As4','C3r5Bgu','uw5yEe4','idHWEdS','v2vHCg8','ywnRz3i','wxnsAMi','s2DKAM4','BxKGC2u','ug9ZAxq','tgvNAw8','ChG7ih0','C2v0qxq','B1rkEhe','ieDLDfy','oYbOzwK','zw50oYa','AwXLzdO','j3qGC3q','zNrLCIa','wMvYB2u','DgLKzvC','sfrnta','C3rHCNq','zxjZ','oNbVAw4','ndiSlJG','y2TLzd0','uK1c','twPKyKm','CMvSEsa','yw5LBc4','zwfK','ohb4oYa','zgzxCLq','zxiGEYa','ls1W','rwXLBwu','wLnszMi','Bg9Hzhm','q29TyMe','lM1Ulxa','DgXLCW','BwrLC2m','iNrYDwu','BLPiuxO','CNq7igC','EeTHzKK','zg93oIa','BuzND1e','lc40nsK','BM9tChi','B24Oks4','Bxm6igm','BMC6idq','Bw4TDgK','zMLSBa','A2v5C3q','C2HHzg8','EfDuExC','BuXQEuC','uKfzuhu','D2PqA2W','zs5bCha','igvSC2u','quvACMy','DNCGlsa','ihSGzMW','icaGlNm','B3C6ida','pc9ZBwe','C2v0sxq','DMC+','ihSGyMe','nwmWidm','ide0ChG','lwL0zw0','CfLnBLm','s2v5vW','wgXcsM4','C2XPy2u','Bw4TBg8','DdOGmtu','Aw5Uzxi','Bw4Ty28','sMz6thK','tMrsA1e','tKvOD3O','zM9UDc0','ndHWEcK','DgfIihS','zMXLEdO','BNPzwhK','DdOGmZq','y2HPBgq','CM9ZC2G','y1nTC0i','twLZyW','Axr5oIa','lwHLAwC','renstve','AgvSza','ndGZnJq','oYbJB2W','vNfvExe','nZTWB2K','mJiSocW','z3jVDw4','Bg9Hzgu','nxb4oYa','nhWYFdm','oIbWB2K','DxDgAhy','s1vcruW','AwXS','lxjHzgK','4Ocuig5Via','AhDvzwS','BNqGAxq','suHPzM0','oIaYmNa','icaG','oIaXnha','u0fgrsa','lMXHC3q','i2zMyJm','mcuUifm','s2LSBgu','C2HPzNq','zMLSBd0','DgDlzxK','Ag9VA0C','DxvVEuu','BIb7igy','uengqw8','rwXiuKi','zu9PC2G','ywWGBwu','ihjLBg8','BNrLCJS','qxbWBgK','EKr4Avm','CMvSB2e','DhjHBNm','mc41','y2vUDgu','uu54uMG','BNnWyxi','igjVCMq','ie9olG','EeDSDwe','igf1Dg8','oIbHyNm','qwXNBxi','EgvZige','twTqD3K','Ahq6ida','DZOGAw4','yNv0Dg8','sw5ZDge','y3rPB24','y3jLBwu','AgvPz2G','tgLZDa','BMu7ihm','icaGica','uKzPAe8','BwLZyW','Bg9NBY0','y2HLCYa','Agf0igq','yLrfufy','u3rHDgu','Ahq6idi','y2TNCM8','DdOGmJG','sM9Xuvu','BtOGmJq','B3bHy2K','mtu3lc4','C2f2zq','BerPzsW','CZOGmty','zwfKige','BIb7igi','Aw4GC2e','CMfPC2u','Dhj1zq','u0fvDNa'];_0x333a=function(){return _0x51b7d9;};return _0x333a();}
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
function _0x1070(_0x305d52,_0x10e1c0){_0x305d52=_0x305d52-(-0x8a5*0x3+-0x1ecc+0x391f);var _0x25002b=_0x548e();var _0x2c4c03=_0x25002b[_0x305d52];if(_0x1070['yTTEaR']===undefined){var _0x3f24d4=function(_0x3203c5){var _0x2c4ff8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x232487='',_0x87e2b8='';for(var _0x4dfd48=-0x1bac+-0x9a*0xe+-0x528*-0x7,_0x2710b1,_0x5a24f8,_0x36f262=-0x1167+-0x72f+0x1896;_0x5a24f8=_0x3203c5['charAt'](_0x36f262++);~_0x5a24f8&&(_0x2710b1=_0x4dfd48%(0x22c*0x8+-0x1*-0xe42+-0x1*0x1f9e)?_0x2710b1*(-0xb83*-0x3+-0x16e7*-0x1+-0x3930)+_0x5a24f8:_0x5a24f8,_0x4dfd48++%(-0x16*-0x133+-0x6*0x4c9+0x12c*0x2))?_0x232487+=String['fromCharCode'](0x94+0x317+0x26*-0x12&_0x2710b1>>(-(-0x135f*-0x1+0x1b*0x119+0x4*-0xc40)*_0x4dfd48&-0x2*-0x12db+0x2276+-0x4826)):0x2637+0x1*0x169e+-0x219*0x1d){_0x5a24f8=_0x2c4ff8['indexOf'](_0x5a24f8);}for(var _0x5d4aa5=-0x17c4+-0xf*-0x1c5+-0x2c7,_0x5a00d9=_0x232487['length'];_0x5d4aa5<_0x5a00d9;_0x5d4aa5++){_0x87e2b8+='%'+('00'+_0x232487['charCodeAt'](_0x5d4aa5)['toString'](-0x842*0x1+-0x1bc0+-0xc06*-0x3))['slice'](-(-0x9*0x377+-0x506+0x2437));}return decodeURIComponent(_0x87e2b8);};_0x1070['rimfgF']=_0x3f24d4,_0x1070['jiisnR']={},_0x1070['yTTEaR']=!![];}var _0x52c7ec=_0x25002b[0xbb9*0x2+-0x104d+-0x1*0x725],_0xc25ac1=_0x305d52+_0x52c7ec,_0x399e69=_0x1070['jiisnR'][_0xc25ac1];return!_0x399e69?(_0x2c4c03=_0x1070['rimfgF'](_0x2c4c03),_0x1070['jiisnR'][_0xc25ac1]=_0x2c4c03):_0x2c4c03=_0x399e69,_0x2c4c03;}function _0x548e(){var _0xbdef11=['ldeSlJm','zMn3CMu','ndiSlJy','rMHuz3q','ChGPktS','Bxm6igm','Dg9W','B3n0zMK','yxv0BW','ugf0Aa','t1H5DLK','rNDVzu4','y2fSBa','re9nig0','Aw5Lza','BMfNzxi','BNmTC2u','ntuSmJu','mdSGDhi','DgvZDa','iokaLca','zMXLEdS','igq9iK0','oYbTyxi','Buzgy1m','ofv2Dhb6Ba','zxjKB3C','CurKwfu','C2XPzgu','DgG6ida','qNLls0W','tKXlwfu','C2vSzwm','z2v0','Egvxyxi','zdSGz3i','Ec8XlJq','B250lxm','v2PpEhC','DgG9iJi','idfWEca','yMeOmJu','v3brCw8','AM9PBG','oYbWywq','tgLZDa','whjHzMu','ywnLoNa','AxnWBge','sxH2s08','yxvSDa','zxG7ige','BM9szwm','wKfvr3G','zw50zxi','B3ftAui','zMy2yJK','CeXrthe','C2fRDxi','AxrJAfS','C0DTy0O','C2XPy2u','FdD8mhW','v1vkzhu','rxbIBeW','uxbvsMe','s0Xez3u','ksWGmca','vuvVuNO','txrxtMq','zxH0','CKDrB0S','ndC0odm','zwfRoMi','CM9VBsa','CJOGmdS','uKjwr04','Bw4TCge','Ag5nq3O','zgL2','CMWOi3m','Dhj1zq','Cg9W','CMTnyw4','re9nq28','ru9yy2W','tMv0D28','AfzVB3K','v1fYzxq','zu9IAMu','Avf2r1m','zxi6igi','surZyMi','Ag9ZDg4','BgLUzvq','zdSGyM8','lMLViokaLa','CJOXChG','lcaWidm','C2v0ida','zwzLsg8','svrfCfq','tgLUzxm','ihSGB3a','icaUBw4','yuDmwMC','EvzAzKi','ChjLC2u','zdDLmZS','weHLrem','uuPJrgm','BwLU','zw5HyMW','igfIC28','ugn0','ugLLy2u','DgvTCZO','igzYyw0','DgfYz2u','y2fWtvm','ChGGmti','C3bHBG','CgP3EK4','mJSGC3q','tuS6ia','mNW0Fdm','yMv6Awu','B3vUzci','DxDvuMG','qMDVueS','Dw5KoIa','Cg9Z','z0nSAwu','lJuIigy','uxDRrw4','yMvNAw4','imk3ihvH','zcb7igi','C3rLCMu','BvbVCZ0','wvDoDeS','EI1PBMq','C2vSzwe','cIaGlM0','txLsB28','y29Z','sw5Zzxi','phn0B3a','psiXmci','o2HLAwC','y2XHC3m','AgvHzgu','CgfJzu8','zwHHBNO','ysGYntu','rxnMDKi','BMDZoIa','CM9VBq','zYdIGjqGAa','i2zMzta','CNjVCG','B2fYza','zg93oIa','EhLdtem','C3rHDgu','C2STy2e','sMPcC2m','vMfSDwu','zMjZEwS','iNnRlwC','zwnVAwW','mcaWidy','BgfZDeu','lJm1CYa','B25JBgK','jsK7ic0','C2HHzg8','B2TLlwW','zJzIowq','DNH3uKG','ienVBhK','lc4WnIK','z2DHy3C','lNyX','u3bLzwq','DxHmrKu','nNb4oYa','BtOGDhi','zwjRAxq','DhvYyxq','y2vS','mdCSmtu','zNnLDd0','lc4XmIK','DePys3G','CM9WywC','B2DVihS','Aw5NoIa','EuP1s0i','uMfWAwq','DhjHBNm','wej1z3u','icSGCge','oIbYz2i','u2fMzxq','BhjUt1e','nsWUmJu','CI1YDw4','zwfYyw4','vNztAuK','uwDtyvO','zhKGEYa','mIbJCMu','zhbY','DKjJEw8','igfPBtO','t0rQvMe','zvzftwu','sMDZtee','oYbNyxa','vxLTDMq','C2L6ztO','u29kqMO','uMjRENO','ys0YDJi','y3rPBMC','nsWUmdC','vKjsBvK','rxv1z0O','r1fYvxq','ywnPDhK','DdOYnNa','mtiGm3y','s1DIrve','DdOGm3a','zw50q28','CMuTD3i','reXrBhq','nxW0Fdy','zxi6','ltiUnsa','A2rYB3a','v3PWvwK','vffcvLm','D0P3B3G','D3jPDgu','yw5JztO','BfrfwwW','BgLUA2u','C2zVCM0','v3jHCha','ysGYndy','u2zzBMC','uMThu1q','lc43nsK','EcaWihi','BgvMDca','yM9VDa','mI41idi','rxLLigG','zMLSBfq','DhLqy3q','twTuzu4','iIb5mJ0','CMfWAwq','idHWEdS','mtjWEdS','qNv1yNy','u3rHDgu','DdOXmda','q0PvvNi','ls4Wmwu','B3n0Awm','EdSGCge','BNq+pc8','zxzLBNq','Aw5Z','rvbMuMe','lM1UlwW','mhGXna','otyYnZK4CLfYtxr3','zsba','AwXSpsi','Aw5Uzxi','CgXHEwu','zsGXnta','EdTMB24','zLvZEMS','igzVBNq','C1nuzfe','r3jHDMK','ihbSyxK','CgjzD24','BwLSEtO','lJa1ktS','Acb7igy','Dw5KAw4','ugXHEwu','DgL0Bgu','DdOGmNa','BNDgC0e','uMvJDa','nc00lJu','C2HVD24','zxiGywm','AgLKzgu','ic5TBI0','oYbWB3m','EtOGz3i','y1Liz0u','C3rLCa','vvDnsYa','ysbdBgK','sLnlBw8','AuvWA1e','DhvYzq','BNnPDgK','CMvZiokaLa','zwPVAw4','mJbWEcW','sfrnta','Bc5ZAg8','lxrPDgW','igjVEc0','sLjuB2q','ncK7igi','CMvHze8','A1PWtNm','oYb9cIa','BgWGBg8','wKPjB08','B2TLpsi','yMfJA2q','lJjZoYa','nsWYntu','zZO2ChG','EdTVCge','B3vysNa','igHLAwC','B246igi','mJuPoYa','C3rVCfa','swjSqwC','Dg87zMK','y2XLyxi','tez5DgW','Ag9VA04','AYb7igG','mJu1lde','mhb4lca','oYbOzwK','CMqTAgu','zcaOB3y','BI1PDgu','lZ48y2K','Dgv4Dee','C3DPDgm','C2HPzwW','oIaJzMy','cIaGoMG','B2XZ','igzVDJ0','wvPOz3e','oxWWFde','CcWGnta','wMH5AfG','vhjHBNm','imk3ihbS','Dgf0zq','zcaUmJu','DgvYoG','B3Ltru4','mtu3lc4','Ag92zxi','Bw9UB3m','igzSzxG','AKrdBvq','nta7igW','vhvID2q','BMvYiea','ntuSmta','CNDQB2y','D2LKDgG','AY1TyM8','cIaGica','EcbYz2i','Dgvzkde','sw5MAw4','CK5Ssve','uujvyvC','ktSGDhi','ntSGy3u','CNmGtwe','C2HPzNq','C2vSzG','AtmY','yxDUzxi','tg9N','BIb7igy','DMnTDNu','CNL2yuS','Aw5N','mJC4mdy2mhHLBgfVtW','oIbUB24','Aw5Ly2e','zhrOoIa','oIbIBhu','DgvYia','C2v0psi','u1Pbuxy','ihnVBgK','ic5ZAY0','zenOAwW','EdSGD2K','nwmWidm','BYbZDMC','yM9lu3e','zM9YBq','Ag9VA1m','q0ztyuK','BtOGBM8','icaGigi','pc9ZDMC','yKHUrKS','m2mTms4','B20GBge','zxiGqa','nIaXoci','yJLKoYa','AgfZ','zxjYAwq','y2XPy2S','zLjSrMW','weXnBKq','zwvMmJS','owqSicm','yxa7D28','AvbPv0q','oYbTAw4','m3WXFdi','z2vUDa','igLUAxq','uerrzxa','swDSv3G','oIaXnha','kdi0nIW','tMfTzq','iJeIihm','zxiGyxi','B3iGlJi','uujSCNC','nYWXntC','pJXSAw4','Bw96lxi','z216t2W','qxbkCwy','uujrqwy','B1jLy28','seTsDgW','ide1ChG','C29SDMu','B25VC3a','rMLYzq','BgLKzxi','qwLTtwe','ys11As0','zxrhCKO','quXUzMC','DxnLCLm','Ew91Dd8','oIbVCge','4Pwq4Pwq4Pwqifm','BwvZC2e','CxnSuKK','Ag9VAW','lwnSB3m','BePkv3a','qMrStK4','CMvHAY0','Ag9VDgu','yKPzDxi','r1j1ugm','mhb4ihi','idyWmdS','y2vUDgu','AwDODa','C2v0x0m','icGYDJi','vuv3qKG','BvLyr3K','psjYB3u','A2uTD2K','oYb0B3a','Ad0Ims4','CMDIysG','ktSGy3u','sNLYzgq','ihn0CM8','CYbZy2e','CZOGoha','oYbIB3i','ocKPigq','FqOGicO','igfWCgW','uhvMzNq','zuXVy2e','EuLUC3q','swDxrxm','B3fLC2u','oJrWEca','Ec1KAxi','4OcuihDYBW','igXHEw8','zgvYoIa','ENb2weG','vwXLEgK','D0jtvLy','zwDAvwW','ywrPzw4','B3aGB2y','zMXLEdO','sxLICge','q29WAwu','B2Lwuhu','tKv1sge','iInMzJy','zcKIihm','oYb0CMe','zgL1CZO','yw5Nzs0','s2LhBem','BNnMB3i','AxrJAdO','o21HCMC','BuzSv1y','mYWXmdy','BMC6ida','D2fYBG','tM8GyMW','Bgfcz04','zwqGChi','qxbWBhK','Cg9ZAxq','y2HPBgq','v1HXzgy','AwvSze8','mc41','oIbJB2W','zvbPEgu','ic13zwi','y3rvuKW','BguU','lc4WocK','yw5ZzM8','B24P','sg9VAZO','qxDHA2u','BgLUzvC','ChGGi2y','yMTPDc0','sLnfCxK','zvn0EwW','idaGmJq','u2nHBgu','idi4ChG','zgrmDgC','DhK6ida','lxvPlhm','BM8Gy2e','Dgf4tLy','Ag9VA0m','EdSGyM8','BMvSihS','tg9Hzgu','AwrLCG','AwrLCJO','z0XADLO','CgXHAw4','D2LUzg8','ldi1nsW','tNvUsLC','ntaLktS','Ce9oCuy','ihjLz2K','lJuGmsa','y2fTsgu','BMfIBgu','tKvtveu','DfjVB20','BNvTyMu','zMfPBgu','Eu9XAeW','mNb4oYa','y2PABLa','Bw4TDg8','mJu1lc4','Aw1HDgK','zcbYz2i','nduPoYa','BM9VAM0','oYbMAwW','C2STBge','DgvTlxu','oYbSzwy','Ede9iJq','B3zLBwu','ChjVDg8','ntuSlJa','qNjWtxm','AxrZpsi','nda3mZuWog9Kr0jWEa','qxfUzMm','DgLVBJO','tuf0vgW','sw5ZDge','zwTlD00','yuDgu2S','icaGyMe','C2v0','B3vUDgu','x2HVB2S','AfzMBLK','B3bHy2K','CZOGyxu','s0jmDKG','lc41kq','zMzZzxq','quPAEva','oYbWB2K','DMrmyNO','BgLNBG','Chv0','igzHAwW','ig9Wywm','y29TCgW','Bw4TAa','AgvfDMK','CMLNAhq','ldiZocW','q3fVseq','C2STC3C','AgfKB3C','zcdINjm','ztTVDMu','ihvUAxq','BgWGCMu','BNrrqNy','zxrL','wMHmDgC','Dg9Wlwm','swrHswW','zgvYAxy','nsiGC3q','CM9Szq','yw1Kuue','ihbHzgq','yxrPB24','4OcuigHVBW','zxjPzG','zg93kda','BKHvC3u','B2LS','ig5Vihi','s01uEe0','ihnOB28','ywXS','yxbWBgK','u2vSzwm','A0rYEhy','yxLLCNm','mZmYmZK5nwfSvKfnsq','zMHzuKO','DhjVA2u','y1r4wui','AMfkzhy','DhKGjq','ihi9iJe','oYbIywm','yxiOls0','lNnRlxm','ChG7ih0','C2uSihq','EYbKAxm','mciGC3q','igfSBdO','Dhm6yxu','CM06ihq','q1Dqywi','zw50u3q','Bw92zw0','AxHLzdS','wgz1Cg4','4Pwq4Pwq4Pwq','sNn6q20','BgvMDa','ENHWB1a','oIa5oxa','ntaLoYa','AY1Jyxi','EhvLz2W','Bw4TBwe','D0rXswe','ig1UlwK','oIaYChG','DwXzt2m','vgv4Da','icSWEde','y3rPB24','oYbJB2W','oYb0B3u','CY5Mpq','DgvYoYa','BMu7ihm','CI1IB3G','sxPqEMm','rMHbwKO','t0LWzNC','ihjVB20','Ate2','mZuSmJq','CMvHzey','sxbTr2G','i2zMyJm','Dg9gAxG','zxiTCMe','iIb5mt0','AxrPB24','CgfJzsW','u2v4C3G','Aw5MBW','Dxm6oha','rxvNCNy','mJu1ldi','jtSGyMe','Fdr8ma','yM94lxm','z2v0qxq','CMfUz2u','rfHYCw0','q2fTzxi','D0jsEuK','EdSGDgu','z3jVDw4','CZPUB24','mJm4ldi','t1bOCwi','idiYChG','ChjVAMu','ywDLCG','rvvsD2q','AwDODdO','yxjKlM8','vKTlExy','zgLUzZO','vMzIrge','AfnOywq','mtm2otmZohDVv3LbEa','z2H0oIa','icjjBNq','u2HHCNa','y2XVC2u','DgLpseK','yMfJA2C','Ag9VAYa','AhLWB3q','Bw5fAMm','Bg9ZztO','zg93BMW','qwTpBgC','BLDhEhu','v1ffAgq','y29SB3i','BgLUzwm','ztSGDhi','DMfS','BMDZigW','qwv0Ew4','yur2t0K','BMCGCM8','uLLNu0W','zxjZqa','igXVy2e','B1fSvgS','zgLZCgW','lw1HAw4','Aw50zxi','DenAtw0','Awr0AdO','idqTnc4','qK1jqvO','C2v0qxq','wvv1qKS','vM52zu0','qLL2rvu','zxG7z2e','ocWUosK','Acb7iha','B3zLCMy','ltiUns0','Dw5PDhK','su5jvca','zs1ZCge','igDHCdO','Bwfa','DuLjr0q','AMvvq0G','BhmGy28','yM90Dg8','ignHBsa','AM5WEuu','DwjhtKq','iJmIihG','B2fKlca','CNvLiL0','vvLQz2i','sMz2zeC','lJu1ktS','DMLZAwi','Dgv4Dge','B25LoYa','CxnuyMK','Cxjhs0q','BMDL','ndGZnJq','C2XfDxa','BgrYzw4','ChjLDMu','ihrYyw4','vKr2AMS','rKfjteu','t2Hpt0q','EwnACeu','mxWYFdq','cIaGlNm','v2LKDgG','BMq6igW','uMzfB3C','DxjZB3i','EhngB1q','ldiXlc4','BffmBNq','nIWUotu','mca9ige','yxb0Dxi','DKDiuNC','BIbtywS','ignOyxi','EdSGFqO','DtmY','CwXHyvy','iokaLcbtyq','mJ0ImJa','EfLOzwq','ide0ChG','zxjJyw4','BMqIlZ4','AwX0zxi','z1LvvxC','B2r5','lJq1iIa','ywrVDZO','zdOG','B2fKzwq','lJjZlca','idi0iJ4','y2HLy2S','ugTWDw4','y3jLyxq','yu56CKu','mcWUosK','m3WWFdq','yxnZtMe','yM9KEq','yw5ZBge','Cd0ICM8','ywDNAw4','CMvWBge','nZTWB2K','u2HVB3q','wuj0q2O','BLvZzsi','y3G9iJe','zw50lxm','AfHNzKC','yw1L','uwTiDwi','CMvHzhK','ignVBxa','wfPNB3O','yKjnq0C','BMX5','qM94zxm','z3bOzxG','ys4YDJi','CuXOzhy','BMPhwNC','BMvHCKC','zw50ihq','DcaWida','CMqTDgK','mtaWDMG','yMX5lum','CKfPEuW','BhrLCJO','q01iy0O','DhLSzq','B2jLig8','CgfYC2u','D3fLvwm','igjVCMq','zwq9iNq','zs1PDgu','q29SEvq','ChGGCMC','CM91BMq','DxbsveC','CMfKAwu','DhLWzq','DdSGy28','Aw5Mqw0','BMnL','BdOGBM8','BNrezwy','rhf3wLC','uhDLuKS','BevdBeK','zM9Yrwe','DfnWDMW','t25fBMe','EdSGywW','DMfSihS','mJi2ntGXnZvusevYywO','DMfSDwu','ChG7igi','nsb1As0','reTSC1m','CNjVCJO','rhHOu1y','zxG6mJe','ChvZAa','rMLLBgq','yxrLtwe','B2fKic4','C2z4CKG','Dxrcy3q','qwLTu28','ywLTtwe','nYWUmdy','DxjSkcm','y29PBca','C2STDMe','vuXywNu','BNqTzMe','ys51As4','zgfTywC','A2v5zg8','ihjPz2G','BMTLCG','zwqGDg8','ihDOzw4','m3WXFda','wKPpvwS','Dg1NyMW','v3vpshC','CKXPBMS','C3rVCc0','ntmWmdK2ofPpB09itW','r2zRAuS','v2HsAvC','tfHpB2S','qu1vzLa','B25TB3u','mcWWlda','DNjfyum','DMu7ihC','y2fWDhu','y29UC28','shfzuwK','D29YBgq','zMvnB2q','AvrQq3K','AhjLzG','zwn0Aw8','tw92zw0','y2fUDMe','u3v1rhC','B3vUzdO','Aw9UoMy','Dg9Nz2W','BMLJA24','rhvTCca','iLnLz28','Dxm6ide','quLTufm','AxrL','vw5PDhK','idaGmca','wMTwz0W','BxnT','zxjYB3i','BhvYkdi','q2fTpq','oJiXndC','C2STCMe','tejfsfa','lcbZExm','Axq7ig8','DfLot0e','zgvMCZ4','BZSGzgK','EgTKrwS','pJWVBgK','zLLbBw4','oIaYoha','qxvtt3O','BgLUzxm','uvzPr2W','oNbVAw4','u2fRDxi','rcb0BYa','EMTmDMC','CxbQDfa','Bg9Ypsi','y2HHCKm','uvzNwK0','thjTEhG','Aw5Zzxq','weLjywO','mNb4ksa','EgLlwgC','Bg9N','CMrLCI0','zMuGtw8','sgvPz2G','C2STzhi','Bhv0ztS','mNb4o3i','zwn0','ihjNyMe','Bwf4','y3nHC3i','v2vItw8','wfnVzLG','kdeWmhy','Cvbvrwy','C2v0uhi','Dw1UCZO','y3zHA3m','zMLSBd0','z2v0q2W','yuvpEhe','mxb4ihi','BM9tChi','yY0XlJu','igHVB2S','C3r5Bgu','BuLizKu','D1f5Bfq','Fdj8mxW','y2fSyYG','zxq9iJa','y29UDge','BxnNtNy','igvUywi','y2L0EtO','q2XLyxi','nZKSmtK','y2fWuM8','CIGUmJi','ihSGzMW','DYGWida','yw5ZCge','AxrLBxm','Bg9JywW','Aw5PDdO','oIaXoYa','C3bLzwq','rvPlEge','t0fLuLa','zw50igW','Cg9PBNq','r0Dlte4','zuv4Ca','DxqTC2G','mhGXmc8','ywrVDYa','yM9Yzgu','B3nL','zwfK','yw5ZAxq','ktSGFqO','y2u6ig4','DhKGmc4','Ahq6idy','v2DMv0u','lxnWywm','CMvNAxm','zvnTruu','uwThzhO','r2PXCfe','z2v0qM8','yxbWBhK','zeDUrKq','DcKGqa','psiJzMy','z2LUoIa','BI1SB2C','Dg9tDhi','z0nxrNG','z2LU','u0Twq3O','y3nZvgu','sfDPt2u','DxDTAW','oIbJzw4','Ee56D2K','ywrPDxm','AwvK','zMLSBfi','igrPC3a','zs10Ahu','zw50tgK','ywqPiIa','DgG6idm','B3aTy28','B3G9iJa','q0jpwxC','zMD3s0S','AMDjvNq','iJiXiIa','zhrOoJe','AxvZoIa','wuHcD2i','zMDyzMO','lwnHCMq','FqOGic4','iIbZDhi','lNnRlwm','DMLLD0i','uwjJCLe','B1ntEfG','imk3ihn0','Awr0Aa','ytj2mG','lxDPzhq','tLHIA2W','A2jIs0G','Evjjy00','Fdb8na','khnLDhq','B0Hgr2K','ChrVCfq','B3GTC2G','BwLUlwG','igLUC2u','oYbMB24','zenpAgq','C2v0vhi','igjHy2S','sM1Vt1K','zuvSzw0','CuDky0e','mcbPCYa','vg90ywW','tfP4sNu','z2fTzuW','yxjPys0','yxqSihi','s0DrD3u','ANfiqwq','iokaLcbJyq','CKHLAwC','mxWYFdm','DhjPyNu','Fdf8ma','zNPouKi','nYWUncK','kdaGmca','zM92t3y','mNyY','svnfy1a','zs13Awq','AxvZoJG','oIbKCM8','AwjLzfi','q255zKi','zhjVCc0','CMv2B2S','ih0kica','BNrLCG','C2fMzu0','CgfYzw4','rdOG','y25bq1O','mcuGBM8','y2XPzw4','C2LKzsa','nsaWidi','AujiwwS','zejlsgS','zM9YBsa','uMvJB2K','B3vUDca','AxH4vKO','CeTWq2O','y2TNCM8','mduPoYa','C2v0sxq','Befvz2u','lc45kq','Cu91Buy','zxiTDgG','tvfdD3e','phn2zYa','mJqYlc4','AgvPz2G','oIaYnha','B2Tdyxa','B2rL','Bgf5oIa','BIWGAw4','y2fWu3a','BwiGEYa','ig5VBMu','CLnWyxC','C10G','mtbWEdS','D0vUru8','ihbVC2K','ANvTCfa','ChrY','lwv2zw4','B2XVCJ0','EMncAfi','ihSGD2K','qKrcvLy','lJi1CYW','B3jKzxi','D2vIA2K','ldaSmcW','Dvz0uxa','DgvHBq','yxbWzw4','nxm0idi','Axr5oIa','B25PBNa','Bgv4oIa','BfDLBhK','C2STz3i','AfHrBuG','zxiGEYa','C2STy3q','DgHPq3y','y291BNq','mIiGy3K','nsWXmdC','ohb4ksK','q29SEu0','vuPpvMm','CM9VBua','t0DLtLm','Fdn8mxW','oIaWoYa','suvwuK0','ihnLCNy','zJu7ih0','Cu5pAfe','CLLjteC','EfHQquS','q2fSAwi','Ag9VA3m','ltqTnY4','z2jHkdi','DgfYDcK','q1viCgC','BNvSBcG','ohb4oYa','C3rYAw4','lc44ktS','C3bSAxq','zw50','vgngwge','q2fWDhu','y1rZwMm','CMvH','lJvnmti','oYbTyxG','C2STC2W','vhvSBfm','lc4WnsK','nIWUosK','Cufiu2y','C0XVz2C','EMu6ide','A1jvB3i','CKP4qwW','mdSGzM8','ys1JAgu','C2v0DgK','y29Kzq','EgnrD3K','Cu9rDfe','ywntrNC','ldeWnYW','ihSGzgK','EdSGyMe','CgfJAxq','ideWChG','C0roy1C','owqIlZ4','tKPzDM8','C2LU','o2nVBg8','yM94zxm','zgTPDa','BtSGFqO','Dgv4Dc8','CgXHEtO','C2nHBgu','AfTHCMK','zs5dyw0','ywrK','Aw5Lyxi','nsaWlti','zw50CMK','BM9Uzsi','tuLtu0K','BNrszwm','CIGYmNa','kdi1nsW','A3vXrMW','ms41ChG','mdyPlca','mtrgA3fVqwW','EdSGAgu','DgvYo3C','icaUC2S','u2XIyvq','wMLXreC','uKz3wwy','uwPNugW','yJnJnIi','zwLNAhq','yxj2sw4','ruXHsge','CKHmAg8','ihbHEwW','Eca2ChG','swzMqMW','zJmY','rgfcuLK','Aw5KzxG','tM9szwm','B3a6ic0','DhK6ide','BMfTzxm','zwmIlZ4','A2L0lwe','y29TChm','ig1ZBtO','B3jTic4','BMvSicS','lZb4qY8','ihzPzxC','twXYDgK','DgLJAW','CYaWEdG','zs1JB2W','BgDzuxK','icHgnIK','oc00lJu','BKPbtuq','Bg9NCW','CJOJzMy','AxrLige','iduWjtS','DxjYzw4','zM9UDc0','CIbOzwK','CLbABLG','zxjH','mhWZFdi','DZOGAw4','CMLMlhm','DdOGmJq','BNrLBNq','sK5jC28','yJLKiI8','ywjZ','DhvYsgy','mNyYlNy','idfMCJS','nJTWB2K','phbHDgG','CMjfBg0','B3bLCNq','zwfYr3i','CNLvAwS','r0f2wvK','rJyGzhu','Bw4Ty2W','z0nPyxi','CMfUC2K','y2XPCgi','x19tquS','CJO6lxC','Dgf0zt8','CMvMAxG','Aff0uNq','A0jbvwG','t1nusum','i2zMnMi','yxa9iNi','CM9YCW','Ag9VA1a','twH2qK4','rLLtuey','zxjSyxK','BgvUz3q','D09orKG','B3nLihm','C3rLBMu','BgLUzw4','igfSAwC','re9rv2q','ChG7igm','CwrjCM4','z2LMEq','CxvPCMu','Dw5Kzwy','BM93','DMG7EI0','lJuGms0','nYWWlJC','ChbLyxi','Dw5KiIa','4Pwq4Pwq4PwqieW','C0zbD0i','CwTUwKm','B3vUzca','vMLLDYa','rhvfCu4','ywn0Axy','yxrLwsG','vujWuNq','rfzksva','CM9SBgu','C3rYB2S','ihbVAw4','mtaSmte','zeTft1y','BMveyxm','ruDfD0O','idrWEca','BgvKpq','lM9Uic4','ls1W','zxnW','Bw4Ty28','suTrzvi','ufvsCLi','D2vHCg8','oYbHBgK','zMLSBfm','lM1Ulwm','oI1TB3O','DuvUAMq','yMXL','yMH2sgm','AgvHBhq','idaGmxa','CMPPywG','mtbyCu9TzMG','AwvSza','uNvUDgK','CMvTB3y','Dw1UoYa','sgvHBhq','rMPkwvu','y2fWtgK','CM9Rzs0','zMLSzw4','DYaTidq','Aw5WDxq','twfUywC','zsb7igq','mJqSmtC','qxnZzw0','zw1ZoIa','zcKGmca','BwvYysa','ztOG','rgvjA3i','CwzHr1i','Ahq6ig0','vJjFxW','AwPcEum','zxr0zxi','idj2mI4','ywrKrxy','rw5NAw4','vMLLDW','DY5VBMu','mIaXmK0','lcbUBYa','BgLNBI0','imk3ihnH','AKTkq3G','ic0+ia','Ec1ZAge','y3rYBa','DKHkDwW','zgvYlxi','zM9UDa','yNv0Dg8','DhjVBgW','zgDgrM4','oJOTD2u','veXysgW','B2XVCJS','yMjkC2m','CMnSzsa','ywnRz3i','EuXbzMW','CMfUC2W','BM9jvKi','CwfMChq','Ae9JzgO','DxrHshK','B250zw4','EwHOy1G','t3vMuMS','zxC6ia','uw1Lu28','z2v0x0m','quvNvuO','zvzHBhu','DcbPzd0','AgvHzca','DLnRAu0','tMfTzxm','zgrPBMC','Dgv4Dem','ideYChG','EML2Cw4','AwnRihq','B21tzxq','y2fWqwK','zxiTC2u','CcbVzMy','rgfTywC','BNrYB2W','B3jT','DYaUmNm','lxjHzgK','BcbJyxa','A2DYB3u','igXPBMS','oIaJzJy','wvrfsuq','wuTJsKy','AgfYq28','zcWGy3i','q1f1t2q'];_0x548e=function(){return _0xbdef11;};return _0x548e();}(function(_0x4248e1,_0x5111c2){var _0x17fac1=_0x1070,_0x5318e0=_0x4248e1();while(!![]){try{var _0x2fea4c=-parseInt(_0x17fac1(0x676))/(-0x8b3+0x220d+0x1959*-0x1)+parseInt(_0x17fac1(0xd4))/(-0x860+0xb7*0x2c+-0x2*0xb89)+-parseInt(_0x17fac1(0x236))/(0x2125*-0x1+-0x1424+0x354c)+-parseInt(_0x17fac1(0x577))/(0x1805+0x2b*0x7+-0x192e)*(-parseInt(_0x17fac1(0x1e0))/(-0x1b68+-0x1*0x8c3+0xc1*0x30))+parseInt(_0x17fac1(0x1a4))/(-0x1f22+0xc8a+0x129e)+-parseInt(_0x17fac1(0x477))/(-0xc6f+0x268d+-0x1a17*0x1)*(-parseInt(_0x17fac1(0x308))/(-0x1fde+0x23a2+0xef*-0x4))+parseInt(_0x17fac1(0x2e5))/(-0x177*0x1+-0x8f*-0x9+-0x3*0x12d)*(-parseInt(_0x17fac1(0x502))/(-0xd*-0x27b+0xcba+-0x1*0x2cef));if(_0x2fea4c===_0x5111c2)break;else _0x5318e0['push'](_0x5318e0['shift']());}catch(_0x29ad23){_0x5318e0['push'](_0x5318e0['shift']());}}}(_0x548e,0x1*-0x1776f3+-0x4c687*0x3+0x75*0x6cf9),((()=>{'use strict';var _0x599b38=_0x1070,_0x254194={'CnyfB':function(_0x31264d,_0x2d5049){return _0x31264d&&_0x2d5049;},'aDvOI':function(_0x40ef78,_0xa8be89){return _0x40ef78+_0xa8be89;},'CFSaI':function(_0x260369,_0x543e0e){return _0x260369>_0x543e0e;},'vrEaC':function(_0x9a362d,_0x4cde00){return _0x9a362d*_0x4cde00;},'FEUfJ':_0x599b38(0x28a),'fvOEz':_0x599b38(0x43f)+'g','CqoHD':_0x599b38(0x584),'kyhgd':_0x599b38(0x312)+_0x599b38(0x169),'dtUSY':function(_0x22b314,_0x352538){return _0x22b314!==_0x352538;},'QBlrw':'VrGrS','rHLho':function(_0x281bb8,_0x3b51e4,_0x54c496,_0x4fe3c7,_0x286849){return _0x281bb8(_0x3b51e4,_0x54c496,_0x4fe3c7,_0x286849);},'Pkpun':_0x599b38(0x487),'SZAQv':function(_0x26c24d,_0x2ecbc1){return _0x26c24d!==_0x2ecbc1;},'fYAmn':_0x599b38(0x12b),'GGKLN':function(_0x227b92,_0x593163,_0x465cfb){return _0x227b92(_0x593163,_0x465cfb);},'HIydg':function(_0x52c176,_0x16b7c8,_0x387632){return _0x52c176(_0x16b7c8,_0x387632);},'vgzdk':'Local'+_0x599b38(0x6b)+'rLink'+_0x599b38(0xec),'qslRI':function(_0x2e19c3,_0x10ce78){return _0x2e19c3(_0x10ce78);},'ByKKL':function(_0x150327,_0x1eb7d1){return _0x150327===_0x1eb7d1;},'Eugrv':_0x599b38(0x598)+_0x599b38(0x2bf)+_0x599b38(0x615),'hFjFZ':function(_0xbc26fe){return _0xbc26fe();},'KGQwu':function(_0xd73adc,_0x5e4b34){return _0xd73adc!==_0x5e4b34;},'cnACZ':'lntBs','PoWnk':_0x599b38(0x5db)+_0x599b38(0x3d8),'AEgUJ':'sk-dr'+_0x599b38(0x2ad)+'g','rjiah':_0x599b38(0x52c)+_0x599b38(0x406)+'put','XIIaj':function(_0x317eaa,_0x3f7ade){return _0x317eaa-_0x3f7ade;},'mFFcS':function(_0x1cf9b5,_0x442ccc){return _0x1cf9b5===_0x442ccc;},'hXQmH':_0x599b38(0x1af),'aGFSk':function(_0x27dfbb,_0x36c8d2){return _0x27dfbb===_0x36c8d2;},'pZBLW':_0x599b38(0x559),'MtWNd':function(_0x4e7cfa,_0x1cd5a2,_0x55fd72){return _0x4e7cfa(_0x1cd5a2,_0x55fd72);},'jKJCx':function(_0x3b5b44,_0x1be133){return _0x3b5b44+_0x1be133;},'IdaIl':function(_0x3a4994,_0x49483e){return _0x3a4994+_0x49483e;},'AImPS':_0x599b38(0x189)+'stere'+'d:\x20','msgNv':'\x20->\x20','LBEHP':'SlbaT','ehanz':function(_0x27c9b3,_0x17fbf6,_0x10c339){return _0x27c9b3(_0x17fbf6,_0x10c339);},'rbElm':'hook','hXgfG':function(_0x52c98f,_0x1aac0c,_0xa23fb6){return _0x52c98f(_0x1aac0c,_0xa23fb6);},'ZvvZy':_0x599b38(0x1ba)+_0x599b38(0x15e)+'obe\x20o'+_0x599b38(0x1b4)+_0x599b38(0x498)+'/0xC/'+_0x599b38(0x37e)+_0x599b38(0x675),'thiCv':function(_0x539db3,_0x180216){return _0x539db3+_0x180216;},'NEuHa':_0x599b38(0x369)+_0x599b38(0x4f0),'nwFsA':function(_0x36bfec,_0x5de0f1){return _0x36bfec+_0x5de0f1;},'OrkmS':_0x599b38(0x27f)+_0x599b38(0x33d)+'regis'+_0x599b38(0xd9),'iVCcI':function(_0x268f1f,_0x230849){return _0x268f1f(_0x230849);},'QBQAf':_0x599b38(0x267),'zcBhR':'captu'+'re','tiOHI':_0x599b38(0x373)+'\x20Coly'+'Trans'+'form\x20'+'@','utBct':function(_0x101337,_0x227426){return _0x101337(_0x227426);},'vBcyo':_0x599b38(0x112)+_0x599b38(0x56d)+'\x20@','VKKyv':'room\x20'+_0x599b38(0x3bf)+_0x599b38(0x102)+'g)\x20@','JmoOY':function(_0x21fd6,_0x440885){return _0x21fd6(_0x440885);},'Rbkzz':'oGsUP','zlnKc':'PURrR','qafpt':function(_0x49a379,_0x1e1c61,_0x48059a){return _0x49a379(_0x1e1c61,_0x48059a);},'RpuQR':_0x599b38(0x6b)+_0x599b38(0x40a)+_0x599b38(0xbd),'PweRK':function(_0x5e72d4){return _0x5e72d4();},'ZJIoO':function(_0x418a5b,_0x1cc0f5){return _0x418a5b!==_0x1cc0f5;},'EZKxa':function(_0x429020,_0xf783ea){return _0x429020+_0xf783ea;},'KMTxM':function(_0x3b37c0,_0x41b643,_0x1acfa7){return _0x3b37c0(_0x41b643,_0x1acfa7);},'kDrxv':function(_0x8c443,_0x4a3ee2){return _0x8c443!==_0x4a3ee2;},'WzgFw':'WpQqo','NLKXU':'CmPXs','YBtCj':_0x599b38(0x210),'vcmvu':'auto','tBcgb':function(_0x310e80,_0x21c047){return _0x310e80===_0x21c047;},'uxLFE':_0x599b38(0x595),'TLXHl':function(_0x578d7d,_0x276c74){return _0x578d7d!==_0x276c74;},'uPgSP':_0x599b38(0x59e),'qVviy':_0x599b38(0x4c3),'tYNOA':function(_0x4f7ad1,_0x137021){return _0x4f7ad1!==_0x137021;},'oqese':function(_0x547a73,_0x1f4f91,_0x48f1c8){return _0x547a73(_0x1f4f91,_0x48f1c8);},'GQDJV':function(_0x5beb41,_0x42ce53){return _0x5beb41||_0x42ce53;},'MQCwq':function(_0x2bc8a2,_0x57925f){return _0x2bc8a2*_0x57925f;},'mnEjc':function(_0x2d47c9,_0x4bfd3a){return _0x2d47c9<_0x4bfd3a;},'FYSPF':function(_0x3dd127,_0x66fd36){return _0x3dd127|_0x66fd36;},'VfbDa':function(_0x3ab04f,_0x5680a5){return _0x3ab04f+_0x5680a5;},'QwkEn':function(_0x534a57,_0x4c620a){return _0x534a57*_0x4c620a;},'WgfWE':'TUlYy','rNlIQ':function(_0x578860,_0x554fb4,_0x5902c9){return _0x578860(_0x554fb4,_0x5902c9);},'vxwRH':function(_0x270945,_0x35b475){return _0x270945>=_0x35b475;},'bwlch':function(_0x5cf3a2,_0x106d54){return _0x5cf3a2||_0x106d54;},'kuqFl':_0x599b38(0x593),'nJAMD':function(_0x211765,_0x2d0340,_0xc6730b){return _0x211765(_0x2d0340,_0xc6730b);},'EsfvB':function(_0x1f6b9f,_0x41a5cc){return _0x1f6b9f+_0x41a5cc;},'yJuKB':function(_0x12ea5d,_0x478e37){return _0x12ea5d!==_0x478e37;},'oOFXq':_0x599b38(0x481),'fgXfj':function(_0xc193dd){return _0xc193dd();},'ryUik':function(_0x7a76b,_0x54c40a,_0x26b5ad){return _0x7a76b(_0x54c40a,_0x26b5ad);},'BrpMs':function(_0x56ec32,_0x2f1ec4){return _0x56ec32(_0x2f1ec4);},'EGEwJ':function(_0x7157b7){return _0x7157b7();},'eVEMe':_0x599b38(0x602),'Aetyn':_0x599b38(0x42d),'WVyHM':_0x599b38(0x204)+_0x599b38(0x3cc)+'null\x20'+_0x599b38(0x141)+_0x599b38(0x24c)+_0x599b38(0xeb)+'yout?','pONqF':'SYbmW','dgFFn':function(_0x5bee4a,_0x68e5a7,_0x15ad5d){return _0x5bee4a(_0x68e5a7,_0x15ad5d);},'gYUUw':function(_0x2ab98a,_0x3b1411){return _0x2ab98a+_0x3b1411;},'oQlTk':_0x599b38(0x601),'IKQeR':function(_0x59197e,_0x5b8cb3){return _0x59197e!==_0x5b8cb3;},'slEup':_0x599b38(0x38d),'OufRk':function(_0x48b564,_0x17bd34){return _0x48b564+_0x17bd34;},'ijByC':'playe'+_0x599b38(0xca)+'pSche'+_0x599b38(0x265),'CBOYw':function(_0x35b76c,_0x41c3e1){return _0x35b76c+_0x41c3e1;},'PGiNa':function(_0xad6d30,_0x546de1){return _0xad6d30(_0x546de1);},'JNIso':'\x20coun'+'t=','cTsZc':function(_0x182271,_0x4959ec,_0xf0a5a5){return _0x182271(_0x4959ec,_0xf0a5a5);},'WNvCu':function(_0x3d81b8,_0x42ef06,_0x105f9e){return _0x3d81b8(_0x42ef06,_0x105f9e);},'uMUjd':function(_0x5c2ccd,_0x1a2180,_0x54bc3f){return _0x5c2ccd(_0x1a2180,_0x54bc3f);},'ZJLNu':function(_0x577570,_0x331da2,_0x12014c){return _0x577570(_0x331da2,_0x12014c);},'nDgne':function(_0x2d40ab,_0x16867e,_0x157823){return _0x2d40ab(_0x16867e,_0x157823);},'lJJWp':function(_0x2b7561,_0x340354,_0x271cb3){return _0x2b7561(_0x340354,_0x271cb3);},'jqHAd':_0x599b38(0x32d)+_0x599b38(0x278),'ryvaK':_0x599b38(0x50d),'LFytl':_0x599b38(0x5d7),'vGHRw':function(_0x4d8bcf,_0x1e645e){return _0x4d8bcf+_0x1e645e;},'ggacw':function(_0x405b50,_0x1e7568){return _0x405b50/_0x1e7568;},'TzCPQ':_0x599b38(0x191),'qPMFa':'ZRANv','Xfupn':function(_0x47a1c5,_0x4586c6,_0x36cb0f){return _0x47a1c5(_0x4586c6,_0x36cb0f);},'BMIAZ':function(_0x322eeb,_0x51f57a){return _0x322eeb&&_0x51f57a;},'ZhyhX':function(_0x5f202c,_0x4dc789){return _0x5f202c(_0x4dc789);},'wBRyI':function(_0x359c90,_0x579a3f){return _0x359c90<_0x579a3f;},'nJerv':'ddLtg','OAeRP':_0x599b38(0x490),'kZpNs':function(_0x5a20b8,_0x33c714){return _0x5a20b8+_0x33c714;},'WzpUi':function(_0x476f7d,_0x5a5621){return _0x476f7d+_0x5a5621;},'MkTeN':_0x599b38(0x373)+'\x20Coly'+_0x599b38(0x4e2)+'@','GQrUt':function(_0x43a30e,_0x139c1b){return _0x43a30e(_0x139c1b);},'xXjAK':function(_0x4a86e1,_0xc4ec86){return _0x4a86e1&&_0xc4ec86;},'MUKYt':function(_0x27868c,_0x2b8a0c,_0x1cb10c){return _0x27868c(_0x2b8a0c,_0x1cb10c);},'sDNcW':_0x599b38(0x42b)+'oveme'+'ntCon'+_0x599b38(0x52d)+'er','oiVPu':'ColyS'+_0x599b38(0x121)+'r','CJUVr':function(_0x395165,_0xb7bf69){return _0x395165(_0xb7bf69);},'wDevN':_0x599b38(0x25b),'dKEOV':_0x599b38(0x2df),'qsTbi':'qLhdv','aEOxq':function(_0x10a801){return _0x10a801();},'DOQWd':function(_0x671cf0,_0x1b1bed){return _0x671cf0===_0x1b1bed;},'dGnFD':function(_0x13b3d5,_0x55fd2e){return _0x13b3d5(_0x55fd2e);},'uVtQp':function(_0x3f4a4f,_0x595c4f){return _0x3f4a4f+_0x595c4f;},'UBpRt':function(_0x59b887,_0x1be95a){return _0x59b887===_0x1be95a;},'hgpJP':function(_0x38937c,_0x587384){return _0x38937c>_0x587384;},'laBgN':function(_0x2b3dd1,_0x459c07){return _0x2b3dd1-_0x459c07;},'iyJvw':function(_0x1ed646,_0x526c70){return _0x1ed646*_0x526c70;},'JNIYd':function(_0x5937b7,_0x281e59){return _0x5937b7*_0x281e59;},'GAvYY':function(_0x3260c8,_0x522171){return _0x3260c8>_0x522171;},'zpvXH':'MaZGy','ElZCe':function(_0x529de1,_0x2d2160){return _0x529de1!=_0x2d2160;},'mmqBm':function(_0x125873,_0x3015c5){return _0x125873(_0x3015c5);},'XVFFK':'UEwBH','iEpkQ':function(_0x3b4ab0,_0x4ed766,_0x34e399){return _0x3b4ab0(_0x4ed766,_0x34e399);},'gpDUs':'jNCYN','QgSaZ':'Unity'+'Engin'+_0x599b38(0x46a)+_0x599b38(0x4a6),'QgrYe':_0x599b38(0x18f)+'r','xiKXg':function(_0x39787a,_0x528ca0){return _0x39787a*_0x528ca0;},'EOeXW':function(_0x33d3d1,_0x90c777){return _0x33d3d1<=_0x90c777;},'wqeUc':function(_0x473f97,_0x622887){return _0x473f97+_0x622887;},'pfoTK':function(_0x1a1bd8,_0x2daadc){return _0x1a1bd8*_0x2daadc;},'qdIrn':function(_0x1c002d,_0x55ffac){return _0x1c002d/_0x55ffac;},'rJxAl':function(_0x3805c4,_0x473678){return _0x3805c4*_0x473678;},'DaBRY':function(_0x4464d3,_0x2fa0f4){return _0x4464d3*_0x2fa0f4;},'tmgbl':'PCOct','vHJul':function(_0x5ae9fc,_0x348a65,_0x3d645a){return _0x5ae9fc(_0x348a65,_0x3d645a);},'HiabH':function(_0x4feb56,_0x286ae0,_0x1be6bb){return _0x4feb56(_0x286ae0,_0x1be6bb);},'YUuBK':function(_0x33d592,_0x5f0061){return _0x33d592>=_0x5f0061;},'GYRRk':function(_0x311764){return _0x311764();},'mFlWV':'DAvyg','pjwzN':function(_0x5c17f5,_0x36be90){return _0x5c17f5/_0x36be90;},'SDTtK':function(_0x2575a8,_0x1b770e){return _0x2575a8!==_0x1b770e;},'nqAQM':function(_0x1bf4a2,_0x12d42a,_0x4dbe90,_0x3f9e07,_0x526d2b){return _0x1bf4a2(_0x12d42a,_0x4dbe90,_0x3f9e07,_0x526d2b);},'ZiqDG':function(_0x38cd57,_0x13cbd4,_0x30294b,_0x4c55e9,_0x5b50cb){return _0x38cd57(_0x13cbd4,_0x30294b,_0x4c55e9,_0x5b50cb);},'qOQtQ':function(_0x4baca3,_0x281cdd){return _0x4baca3!==_0x281cdd;},'SoJBj':function(_0x5b1a90,_0xf8275f){return _0x5b1a90===_0xf8275f;},'gLZvZ':function(_0x56fb86,_0x4c34af){return _0x56fb86%_0x4c34af;},'hOcdj':_0x599b38(0x653),'OpotZ':'movem'+'ent\x20m'+'ults\x20'+'appli'+_0x599b38(0x300)+'\x20','HiFVU':function(_0x12df6f,_0x1eebc7){return _0x12df6f(_0x1eebc7);},'yLAfl':_0x599b38(0x1b2),'ptopT':function(_0x2ded01,_0x5d8e25){return _0x2ded01+_0x5d8e25;},'NXZLF':function(_0x567e1d,_0x531e57){return _0x567e1d===_0x531e57;},'cjZnP':_0x599b38(0x62b),'IEVRM':function(_0x332b2b,_0x80c939,_0x1f5647,_0x4473c1,_0xef810f){return _0x332b2b(_0x80c939,_0x1f5647,_0x4473c1,_0xef810f);},'amdQA':'i32','xNzwi':_0x599b38(0x4af),'aQljT':_0x599b38(0x359),'OPhqb':function(_0x42ea78,_0x30f0f6,_0x489ca2){return _0x42ea78(_0x30f0f6,_0x489ca2);},'OhOOD':_0x599b38(0x139)+'ied=','ULXZu':_0x599b38(0x56b)+_0x599b38(0x1ad)+_0x599b38(0xa2)+_0x599b38(0x4cb)+_0x599b38(0x628)+_0x599b38(0x493)+'\x20butt'+_0x599b38(0x16c),'gCiar':_0x599b38(0x3ae),'Jyrdd':_0x599b38(0x4cd),'FeayO':'esp','VDvjk':function(_0x5dda22,_0x4646dc){return _0x5dda22+_0x4646dc;},'UEoRz':function(_0x5dd097,_0x1447d0){return _0x5dd097+_0x1447d0;},'IzPzc':_0x599b38(0x65)+'ers=','nWGxu':function(_0x20cc6b,_0x2b7ae0){return _0x20cc6b===_0x2b7ae0;},'BGXQZ':_0x599b38(0x130)+'79,14'+_0x599b38(0x159)+_0x599b38(0x3fb),'xcQwy':_0x599b38(0x130)+_0x599b38(0x9e)+_0x599b38(0x4eb)+_0x599b38(0x28b)+')','BgoPK':function(_0x557ac5,_0x75e200,_0x4f77d0,_0x572a71,_0x139964,_0x3c4467,_0x22a5a5){return _0x557ac5(_0x75e200,_0x4f77d0,_0x572a71,_0x139964,_0x3c4467,_0x22a5a5);},'PvsJF':function(_0x38f2b4,_0x4d903e){return _0x38f2b4-_0x4d903e;},'jfATT':function(_0x29b07a,_0x232232){return _0x29b07a*_0x232232;},'WhRiW':function(_0x38fd89,_0x362dc7){return _0x38fd89>_0x362dc7;},'iBHYk':function(_0x357984,_0x58f758){return _0x357984+_0x58f758;},'Mlrti':'rgba('+'0,0,0'+',.5)','xiwvH':function(_0x386237,_0x191db5){return _0x386237-_0x191db5;},'yhhcX':'3|1|2'+_0x599b38(0x59c)+_0x599b38(0x64c),'GnZQA':function(_0x466250,_0x47ee8e){return _0x466250===_0x47ee8e;},'tNUEY':'Copy\x20'+_0x599b38(0x49e),'qDdXU':_0x599b38(0x3d0)+_0x599b38(0x73)+'n','eotlz':_0x599b38(0x5af),'IESDM':_0x599b38(0x3d0)+_0x599b38(0x2a3)+'ed','xsFoT':'butto'+'n','DVJIP':'sk-sw'+'itch','ZkVgL':_0x599b38(0x1cf),'QmeSo':function(_0x51623c,_0x1b17b1){return _0x51623c*_0x1b17b1;},'fqgcs':_0x599b38(0x316),'lonPa':_0x599b38(0x449)+_0x599b38(0x180),'csasr':function(_0x435728,_0x188994){return _0x435728-_0x188994;},'NunJW':'div','WXqdf':function(_0x424700,_0x22e6d9){return _0x424700+_0x22e6d9;},'OBGBv':_0x599b38(0x603)+_0x599b38(0x2c5)+'tle','VBRmY':'bhvHc','oySEN':_0x599b38(0x271),'IxvKO':_0x599b38(0x4a3)+_0x599b38(0x63b)+'11px;'+'color'+':rgba'+_0x599b38(0xff)+_0x599b38(0x22a)+_0x599b38(0x560)+');whi'+'te-sp'+_0x599b38(0x58d)+_0x599b38(0x64a)+_0x599b38(0xf6)+'rd-br'+_0x599b38(0x5a7)+_0x599b38(0x120)+_0x599b38(0x1db),'ekKwM':function(_0x37668a){return _0x37668a();},'rTLGp':_0x599b38(0x3d6)+_0x599b38(0x3be),'LsiVi':function(_0x5da2ed,_0x47931a){return _0x5da2ed-_0x47931a;},'qlaaV':function(_0x3ac4fe,_0x136e57){return _0x3ac4fe-_0x136e57;},'gCWFx':function(_0x238b4f,_0x4bc5cf,_0x1097ba){return _0x238b4f(_0x4bc5cf,_0x1097ba);},'NioJG':_0x599b38(0x224),'dXEIz':_0x599b38(0x546),'GfkiK':function(_0xc2d06f,_0x19e88e,_0x1b1f76){return _0xc2d06f(_0x19e88e,_0x1b1f76);},'noojm':_0x599b38(0x550)+'e','wyCKI':function(_0x4dc66d,_0x2debf3,_0x956ec6,_0x1bc58d,_0x4850c1,_0xbfe15d){return _0x4dc66d(_0x2debf3,_0x956ec6,_0x1bc58d,_0x4850c1,_0xbfe15d);},'VvSiI':function(_0x1a79be,_0x1f0920,_0x831772,_0x2689e9,_0xe2739b){return _0x1a79be(_0x1f0920,_0x831772,_0x2689e9,_0xe2739b);},'riHvB':_0x599b38(0x437)+'ratio'+'n','eSmEE':'Playe'+_0x599b38(0x4a4)+'ght','kWYjs':function(_0x1b8dcb,_0x540f8b,_0x12d192,_0xaf8952,_0x5873ab,_0x555eee){return _0x1b8dcb(_0x540f8b,_0x12d192,_0xaf8952,_0x5873ab,_0x555eee);},'upRTG':'FOV\x20('+_0x599b38(0x28c)+'uto)','LXOok':function(_0x160069,_0x3df6ab,_0x4e652a){return _0x160069(_0x3df6ab,_0x4e652a);},'RxKRz':'Hook:'+_0x599b38(0x24f)+_0x599b38(0x555)+_0x599b38(0x7d),'uIIGD':_0x599b38(0x438)+'\x20','zivqn':'\x20msm\x20','lWely':function(_0x3906ae,_0x4dabc6){return _0x3906ae(_0x4dabc6);},'dWEaN':'nav','WQEhd':'mn-si'+'de','HWiOe':'mn-lo'+'go','QViGl':_0x599b38(0x1fe)+'in','IkrFx':_0x599b38(0x37a)+'erup','gphex':_0x599b38(0x4f4)+'ls','wnPJG':_0x599b38(0xfc),'HqYQi':_0x599b38(0x119)+'AKURA'+'\x202V2\x20'+'DIAGN'+_0x599b38(0x4c4)+'S\x20═══','kGBJW':function(_0x288b64,_0x552ac2){return _0x288b64+_0x552ac2;},'EQXKR':'frame'+':\x20','jDCmT':function(_0xf38a5,_0x22a9db){return _0xf38a5!==_0x22a9db;},'KvmlS':_0x599b38(0x5e6)+':\x20','fhYRJ':function(_0x559591,_0x4d61fc){return _0x559591+_0x4d61fc;},'IpmGh':'unity'+_0x599b38(0x1a8)+'nce:\x20','JszCm':_0x599b38(0x524)+_0x599b38(0x315)+_0x599b38(0x515),'OIpfw':function(_0x29d0bd,_0xe40aa){return _0x29d0bd+_0xe40aa;},'dxxSF':function(_0x5ba97e,_0x40ceeb){return _0x5ba97e+_0x40ceeb;},'EmBTB':function(_0x2500dc,_0x368df5){return _0x2500dc+_0x368df5;},'RkGST':function(_0x3fae08,_0x3a7679){return _0x3fae08+_0x3a7679;},'Aqnfc':function(_0x1dc366,_0x418612){return _0x1dc366+_0x418612;},'CUHpg':function(_0x22c16b,_0xaaff1e){return _0x22c16b+_0xaaff1e;},'DqwZW':function(_0x2e7b58,_0x2f5843){return _0x2e7b58+_0x2f5843;},'ODjVa':function(_0x1be6ca,_0x1ac7a7){return _0x1be6ca+_0x1ac7a7;},'obzzN':function(_0x333c04,_0x190c26){return _0x333c04+_0x190c26;},'Ulexi':function(_0x2b5592,_0x31e3af){return _0x2b5592+_0x31e3af;},'lAUge':_0x599b38(0x27d)+_0x599b38(0x657)+':','tJXKx':function(_0x16648a,_0x298f1a){return _0x16648a(_0x298f1a);},'GQctI':function(_0x5d6348,_0x20b658){return _0x5d6348(_0x20b658);},'ITEpT':_0x599b38(0x60a)+_0x599b38(0x2ea)+'\x20','QpUJa':function(_0x2e6301,_0x457223){return _0x2e6301+_0x457223;},'QjgPl':'\x20entr'+'ies)\x20'+_0x599b38(0x1f6),'qfaGR':function(_0x1aa5ab,_0x555abf){return _0x1aa5ab+_0x555abf;},'KiGlC':'2|5|0'+_0x599b38(0x42f)+'4','sGmcJ':function(_0x499661,_0x3fc6b0){return _0x499661+_0x3fc6b0;},'qAHSf':function(_0x54d967,_0x1c07d5){return _0x54d967+_0x1c07d5;},'MctUK':function(_0x5f4e4a,_0x40771e){return _0x5f4e4a!==_0x40771e;},'JjBsc':_0x599b38(0x286),'mjbWB':'.mn-c'+_0x599b38(0xaa),'rGQoK':_0x599b38(0x5f0)+'t','XSofX':_0x599b38(0x3bd),'HQqDM':function(_0x4b2457,_0x4ecd04){return _0x4b2457===_0x4ecd04;},'LZxJu':_0x599b38(0x5ac),'OXyvY':function(_0x4dc1bd){return _0x4dc1bd();},'atXic':function(_0x40fdfb,_0x494d1b){return _0x40fdfb===_0x494d1b;},'VGSUa':_0x599b38(0x1bc)+_0x599b38(0x1c9),'fRlFl':_0x599b38(0x65f),'XBugu':_0x599b38(0x4c5)+'9d','UZgQC':_0x599b38(0x214)+'c6','iPiWD':_0x599b38(0x21b),'CWPab':_0x599b38(0x15b),'HKRtl':_0x599b38(0x329),'bbJsc':function(_0x18ae9a,_0x574ffb){return _0x18ae9a!==_0x574ffb;},'ycZpE':'top','TullS':_0x599b38(0x43d)+'docum'+_0x599b38(0x2b4)+_0x599b38(0x43b),'fcwre':_0x599b38(0x4df),'WQret':function(_0x5567b6,_0x363d95){return _0x5567b6+_0x363d95;},'WLlZh':function(_0x263d0b,_0x52fdac){return _0x263d0b+_0x52fdac;},'qrGKD':_0x599b38(0x454)+_0x599b38(0x249)+_0x599b38(0x2a0)+'\x20—\x20ho'+_0x599b38(0x403)+'ture=','qpjtP':_0x599b38(0x360)+_0x599b38(0x66a)+'=','zrsxh':_0x599b38(0x360)+_0x599b38(0x48a)+'oil=','ApJqf':'\x20safe'+'Mode=','CMHcJ':_0x599b38(0x3d9),'IblAg':'JPWko','DKlsS':_0x599b38(0x5aa),'cqzPb':_0x599b38(0x33c)+_0x599b38(0x3b9),'WuOHw':_0x599b38(0x511)+_0x599b38(0x2c7)+_0x599b38(0x239)+'.dll','etGrJ':'Unity'+'Engin'+'e.Cor'+'eModu'+'le.dl'+'l','aGLZg':_0x599b38(0x39b),'kbbKH':function(_0x14e4eb,_0x5617b5,_0xa5266,_0x260197,_0x116a98,_0x3f2fd6,_0x3bc59a,_0x1dd407){return _0x14e4eb(_0x5617b5,_0xa5266,_0x260197,_0x116a98,_0x3f2fd6,_0x3bc59a,_0x1dd407);},'KWbEQ':_0x599b38(0x16e),'acSFw':'Movem'+'entSt'+_0x599b38(0x2ef)+_0x599b38(0x56d),'QbJJA':_0x599b38(0x2d2)+'ransf'+_0x599b38(0x552),'pbYwn':function(_0x1c9b5f,_0x213810,_0x5451d8,_0x3f1e4e,_0x3f29fa,_0x28d254,_0x1c7f0c,_0x3ae1ba){return _0x1c9b5f(_0x213810,_0x5451d8,_0x3f1e4e,_0x3f29fa,_0x28d254,_0x1c7f0c,_0x3ae1ba);},'kRUor':_0x599b38(0x36d)+_0x599b38(0x54c),'gsSlh':_0x599b38(0x128)+_0x599b38(0x4a2)+'tRoom','Uymvd':_0x599b38(0x5b4)+_0x599b38(0x5b1)+'ager','xqgLr':function(_0x777765,_0x23f668){return _0x777765+_0x23f668;},'bBMCG':_0x599b38(0x79),'ZhLtg':_0x599b38(0x5c9)+'nt','cKgbi':function(_0x219ff8,_0x3e229d,_0x42e27c){return _0x219ff8(_0x3e229d,_0x42e27c);},'DuEqN':_0x599b38(0x262)+_0x599b38(0x27f)+_0x599b38(0x3ea),'fUszk':_0x599b38(0x160)+_0x599b38(0x31d)+_0x599b38(0x1f4)+_0x599b38(0x344)+':0;z-'+_0x599b38(0x489)+_0x599b38(0x32c)+_0x599b38(0x279)+_0x599b38(0x2af)+'nter-'+'event'+_0x599b38(0x229)+'e;','IglWx':'open','JSKmo':_0x599b38(0x13d),'AuSOz':_0x599b38(0x2f1)};if(!/(^|\.)2v2\.io$/['test'](location[_0x599b38(0x5bb)+_0x599b38(0x2b6)]||''))return;if(window['__SAK'+'URA_2'+'V2__'])return;window[_0x599b38(0x4be)+'URA_2'+_0x599b38(0x519)]=!![];var _0x2664f9=_0x254194[_0x599b38(0x627)],_0x2991bb=_0x254194['UZgQC'],_0x55b59d={'logs':[],'t0':_0x254194[_0x599b38(0x624)](typeof performance,_0x599b38(0x4d7)+_0x599b38(0x56c))&&performance[_0x599b38(0x4d8)]?performance['now']():Date[_0x599b38(0x4d8)](),'add':function(_0x531396,_0x1b48e2){var _0x56668c=_0x599b38,_0xf1a2de={'oSSxX':function(_0x1daf70,_0x32f51c){return _0x254194['CnyfB'](_0x1daf70,_0x32f51c);},'Tubwd':_0x56668c(0x311)+'re'};try{if('iWgDL'!=='iWgDL')_0xf1a2de[_0x56668c(0x3b6)](!_0x21166a,_0x5bcaea)&&_0x24fbda[_0x56668c(0x248)]()&&(_0x44ca86=_0xefdbc8['val'](),_0x177cbc['aimMa'+_0x56668c(0x56d)]=!![],_0x14fac9(_0xf1a2de[_0x56668c(0xbc)],_0x56668c(0x112)+_0x56668c(0x56d)+'\x20@'+_0x33b49b(_0x10502a)));else{var _0x131a3f=((performance['now']()-_0x55b59d['t0'])/(-0x3*-0x14e+-0x2098+-0x2096*-0x1))['toFix'+'ed'](0x4bd*-0x1+-0x457+0x916);_0x55b59d[_0x56668c(0x49e)][_0x56668c(0x2ed)](_0x254194[_0x56668c(0x24b)]('['+_0x131a3f+_0x56668c(0x40b)+_0x531396,'\x20')+_0x1b48e2);if(_0x254194[_0x56668c(0xe5)](_0x55b59d['logs'][_0x56668c(0x4cc)+'h'],0x24fe+0x7*0x119+-0x2a55))_0x55b59d['logs']['shift']();}}catch(_0x3f4b37){}}};function _0x39dd8f(_0x2c0701,_0x30d310){var _0x16cdbe=_0x599b38;_0x55b59d[_0x16cdbe(0x46b)](_0x2c0701,_0x30d310);}function _0x340b98(_0x1f847a){var _0x1476c0=_0x599b38,_0x27666e={'upzDv':function(_0x5e94ca,_0x378e31){return _0x5e94ca-_0x378e31;},'SKVCz':function(_0x428016,_0x6bc070){return _0x428016*_0x6bc070;},'bRzCx':function(_0xc71939,_0xb49907){return _0xc71939+_0xb49907;},'egZUl':function(_0x3e20ed,_0x56543b){return _0x3e20ed+_0x56543b;},'IDsbb':function(_0xb7de35,_0x1b772b){return _0xb7de35+_0x1b772b;},'vQeiw':function(_0x444a6b,_0x158cae){return _0x444a6b+_0x158cae;},'wJwox':function(_0x5abbe4,_0x2f048e){return _0x5abbe4*_0x2f048e;},'iQvGS':function(_0x205882,_0x312bde){var _0x2b761f=_0x1070;return _0x254194[_0x2b761f(0x30f)](_0x205882,_0x312bde);},'FjJYU':function(_0x21b090,_0x56e3e7){return _0x21b090/_0x56e3e7;}};if(_0x1476c0(0x242)!==_0x254194['FEUfJ'])return'0x'+(_0x1f847a>>>-0x14b7+0x1396+0x121)[_0x1476c0(0x395)+_0x1476c0(0xd3)](-0x2705+0x1*-0x3e1+0x729*0x6);else{var _0x14a0f8=_0x27666e['upzDv'](_0x32353b,_0x14e68b['x']),_0x5f0067=_0x48a003-_0x4a290c['y'],_0x2f69cd=_0x277cd0-_0x2e5cd4['z'],_0x187090=_0x27666e['SKVCz'](_0x14a0f8,_0x23cf94['r']['x'])+_0x5f0067*_0x277316['r']['y']+_0x27666e[_0x1476c0(0x398)](_0x2f69cd,_0x56116d['r']['z']),_0x11af6f=_0x27666e['bRzCx'](_0x27666e[_0x1476c0(0x147)](_0x14a0f8*_0x300cc1['u']['x'],_0x5f0067*_0x53fa73['u']['y']),_0x2f69cd*_0x5e72b5['u']['z']),_0xd3ea0=_0x27666e[_0x1476c0(0x5ba)](_0x27666e['vQeiw'](_0x27666e['SKVCz'](_0x14a0f8,_0xddbe59['f']['x']),_0x5f0067*_0x8d3361['f']['y']),_0x27666e[_0x1476c0(0x652)](_0x2f69cd,_0x2de8a0['f']['z']));if(_0xd3ea0<=-0x1*0x6fc+0x1d6f+-0x1673*0x1+0.05)return null;var _0x3dfa2c=(-0x15d+0x21*0x101+-0x1fc3)/_0x128b95['tan'](_0x27666e[_0x1476c0(0x398)](_0x169ae6,_0x3a7e7e['PI'])/(-0x2*0x79f+-0x1998+0x298a)/(-0x2033*0x1+-0x1*0x2399+-0x6*-0xb4d)),_0x4d70bf=_0x2b8512['w']/_0x462e3c['h'],_0x117709=_0x27666e[_0x1476c0(0x5b8)](_0x187090,_0x3dfa2c)/(_0xd3ea0*_0x4d70bf),_0x4e4f81=_0x27666e[_0x1476c0(0x508)](_0x11af6f*_0x3dfa2c,_0xd3ea0);if(_0x117709<-(0x1*0xfbb+-0x1672+0x6b8+0.30000000000000004)||_0x117709>-0x119e+0x1df0+-0xc51*0x1+0.30000000000000004||_0x4e4f81<-(0x2*-0x1117+-0x11*0x1c+0x240b+0.30000000000000004)||_0x4e4f81>-0x1778+-0xbec+-0x2365*-0x1+0.30000000000000004)return null;return{'x':_0x27666e['vQeiw'](_0x117709*(0x2b*0x23+0x1228+-0x1809+0.5),0x1711+0x22e+-0x193f+0.5)*_0x4b7e65['w'],'y':(-0xc22+-0x8*-0x44f+0x1*-0x1655-(_0x4e4f81*(-0x6f7*0x2+0x745*0x3+-0x7e1+0.5)+(-0x2*-0x59+0x462+0x34*-0x19+0.5)))*_0x35110a['h'],'depth':_0xd3ea0};}}[_0x599b38(0x348),_0x254194[_0x599b38(0xf7)],_0x254194[_0x599b38(0x1f1)],_0x254194[_0x599b38(0x10c)]][_0x599b38(0x2e0)+'ch'](function(_0xc407c6){var _0x2423af=_0x599b38;if(_0x254194['dtUSY']('VrGrS',_0x254194[_0x2423af(0x104)])){var _0x14641c=_0x30cfc6(_0x427989,_0x12c872);if(_0x14641c)_0x4fdeba[_0x2423af(0x2ed)](_0x14641c);}else{var _0x53b1c7=console[_0xc407c6]||function(){};console[_0xc407c6]=function(){var _0x11da6f=_0x2423af,_0x3a2122={'TcFXa':function(_0x2540a9,_0x2a6bd9){return _0x2540a9===_0x2a6bd9;},'LtFmq':_0x254194['fvOEz'],'JHRqs':_0x254194[_0x11da6f(0x1c1)]};try{var _0x34e303=Array[_0x11da6f(0x1a0)+_0x11da6f(0x2d7)][_0x11da6f(0x59b)][_0x11da6f(0x56a)](arguments),_0x2adaad=_0x34e303['map'](function(_0x41dfb6){var _0x3e117c=_0x11da6f,_0x1f487f={'cYHgE':function(_0x37547b,_0x39a831){return _0x37547b(_0x39a831);},'cTxYB':_0x3e117c(0xcd)};if(_0x3a2122[_0x3e117c(0x443)](typeof _0x41dfb6,_0x3a2122['LtFmq']))return _0x41dfb6;if(_0x41dfb6&&_0x41dfb6['messa'+'ge'])return _0x41dfb6['messa'+'ge'];try{return _0x3e117c(0x415)===_0x3e117c(0x67f)?_0x1f487f[_0x3e117c(0x77)](_0xdd1b98,_0x537c28):String(_0x41dfb6);}catch(_0x226fc){if(_0x3e117c(0x65a)===_0x3a2122['JHRqs'])try{var _0x532b69=new _0x214417(_0x2343b9)['readF'+'ield'](_0x49dd9a,_0x1f487f[_0x3e117c(0x1e3)]);return _0x532b69?_0x532b69['val']():-0x81+0x1a01+0x30*-0x88;}catch(_0x27d3f1){return-0x1*0x188+0x88b+0x1*-0x703;}else return'?';}})[_0x11da6f(0x589)]('\x20');/UnityWebModkit|sakura|hook|Hook|signature|CompileError|RuntimeError/i[_0x11da6f(0x571)](_0x2adaad)&&_0x39dd8f(_0x254194['aDvOI'](_0x254194['kyhgd'],_0xc407c6),_0x2adaad['slice'](-0x665*0x3+-0x2371*-0x1+0x2*-0x821,0x653+0x829+-0xcec));}catch(_0x1293bb){}return _0x53b1c7[_0x11da6f(0x38f)](console,arguments);};}}),window[_0x599b38(0x51d)+_0x599b38(0x3a3)+'stene'+'r'](_0x599b38(0x329),function(_0x5e2546){var _0x56a5f9=_0x599b38;if(_0x254194[_0x56a5f9(0xdb)]('ALnfg',_0x56a5f9(0x115)))_0x4a3a88[_0x56a5f9(0x46b)](_0x430dbf,_0x5acaf3);else try{if(_0x254194[_0x56a5f9(0x336)]===_0x254194[_0x56a5f9(0x336)])_0x254194[_0x56a5f9(0x37b)](_0x39dd8f,_0x56a5f9(0x184)+'w.one'+'rror',_0x254194['aDvOI']((_0x5e2546['messa'+'ge']||'?')+'\x20@'+String(_0x5e2546[_0x56a5f9(0x50b)+'ame']||'')['split']('/')['pop']()+':',_0x5e2546['linen'+'o']||'?'));else{var _0x2f1ae5=_0x51aca0[_0x56a5f9(0x351)](0x25f3+0x1*0x103f+-0x3631,_0x291d1f(_0x2d882d['damag'+'eValu'+'e'])||-0x13*-0x41+-0x373+-0xca);_0x254194[_0x56a5f9(0x483)](_0x3dcee9,_0x2496b1,0x1e1+-0x2*0x1367+0x258d*0x1,_0x254194['Pkpun'],_0x2f1ae5);}}catch(_0x2ef09f){}},!![]),_0x39dd8f(_0x599b38(0x65f),_0x254194['kGBJW'](_0x254194['sGmcJ'](_0x254194[_0x599b38(0x1e1)]('paylo'+'ad\x20st'+'artin'+_0x599b38(0x5fc)+'ostna'+'me='+location['hostn'+'ame']+(_0x599b38(0x5d3)+'e='),_0x254194[_0x599b38(0x532)](window['top'],window[_0x599b38(0xcc)])?'NESTE'+'D':_0x254194[_0x599b38(0x281)])+('\x20body'+'=')+(document['body']?'ready':_0x254194[_0x599b38(0x44a)]),'\x20uwmk'+'='),!!window[_0x599b38(0x325)+_0x599b38(0x353)+_0x599b38(0x464)])+(_0x599b38(0x1c6)+_0x599b38(0x13c)+'ance=')+!!window[_0x599b38(0x261)+_0x599b38(0x1a8)+_0x599b38(0x2da)]);var _0x3e2169={'esp':![],'boxes':!![],'names':!![],'health':!![],'team':!![],'lines':![],'scale':0x1,'noRecoil':![],'noSpread':![],'rapidFire':![],'damageValue':0x96,'infAmmo':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'camHeight':1.6,'playerHeight':1.8,'fovOverride':0x0,'safeMode':![],'hookCapture':![],'hookState':![],'hookNoRecoil':![]},_0xcdb308={..._0x3e2169};try{_0x254194[_0x599b38(0x55f)]!==_0x254194[_0x599b38(0x55f)]?(_0xb920c=_0x4f64ee[_0x599b38(0x248)](),_0x2a036a[_0x599b38(0x656)+'r']=!![],_0x254194['HIydg'](_0x5482f1,_0x599b38(0x311)+'re',_0x254194['vgzdk']+_0x254194[_0x599b38(0x11b)](_0x481063,_0x13b7c7))):Object['assig'+'n'](_0xcdb308,JSON[_0x599b38(0x2cd)](localStorage['getIt'+'em'](_0x254194['Eugrv'])||'{}'));}catch(_0x489012){}function _0x852f4(){var _0x1a7d1b=_0x599b38,_0x3ea6f4={'ELaHa':_0x1a7d1b(0x42b)+_0x1a7d1b(0x19f)+'ntCon'+_0x1a7d1b(0x52d)+'er','efeHo':function(_0x34bf36,_0x440b2b,_0x4b56bf){return _0x34bf36(_0x440b2b,_0x4b56bf);},'YZqxY':function(_0x3806a3,_0xc5db68){return _0x3806a3+_0xc5db68;}};if(_0x254194[_0x1a7d1b(0x57c)](_0x1a7d1b(0x58c),_0x1a7d1b(0x58c)))try{localStorage[_0x1a7d1b(0x3f9)+'em'](_0x254194[_0x1a7d1b(0x21d)],JSON[_0x1a7d1b(0x43f)+_0x1a7d1b(0x4d5)](_0xcdb308));}catch(_0x509c8c){}else{_0x4a901c=_0x4b753d(_0x3e9787,_0x3ea6f4[_0x1a7d1b(0x482)]);if(_0x4a37d7)_0x3ea6f4[_0x1a7d1b(0x5c2)](_0x4e30e0,_0x1a7d1b(0x528),_0x3ea6f4['YZqxY'](_0x1a7d1b(0x373)+'\x20Coly'+_0x1a7d1b(0x319)+'entCo'+_0x1a7d1b(0x551)+'ler\x20@',_0x40f9aa(_0x22694a)));}}_0x39dd8f(_0x599b38(0x65f),_0x254194[_0x599b38(0x377)](_0x254194[_0x599b38(0x5b6)](_0x254194['VDvjk'](_0x254194['WLlZh'](_0x254194[_0x599b38(0x277)],_0xcdb308['hookC'+_0x599b38(0x28d)+'e']),_0x254194[_0x599b38(0x33f)])+_0xcdb308[_0x599b38(0xe4)+'tate'],_0x254194['zrsxh']),_0xcdb308[_0x599b38(0x9c)+_0x599b38(0x10b)+'il'])+_0x254194[_0x599b38(0x109)]+_0xcdb308[_0x599b38(0x3e8)+_0x599b38(0x404)]);var _0x4706dd={'uwmk':!!window[_0x599b38(0x325)+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'linker':![],'msm':![],'localView':![],'localTransform':![],'charCam':![],'aimManager':![],'room':![],'state':![],'spawner':![],'pieceMgr':![],'worldCamera':0x0,'players':0x0,'lastError':''},_0x46e75d=null,_0x417bfa=null,_0x162101={},_0x9bc08c=-0x2473+0x4cb+0xfd4*0x2,_0x559939=0x6c*0x44+-0xd0a+-0x2*0x7d3,_0x40ba04=-0x10d*-0xa+-0x580+-0x502,_0x2e38b7=-0x10*-0x49+-0x1f0c+0x1a7c,_0xc52743=0x1749+0xfde+-0x2727,_0x537a91=0x16a*-0xf+0xe8f*-0x2+0x3254,_0x38ea33=0x1d8*0xd+-0x2151*-0x1+0xb75*-0x5,_0x6b3c5=-0x1998+0x774+0x1224,_0x4ed78d=-0x2244+0x1292+0xfb2,_0x5455ec=0x21ab+0x2709+0xc1e*-0x6,_0x3b8a25=-0x18*-0xca+-0x2099+0xda9,_0x4567ca=-0xb07+0x308+-0x17*-0x59,_0x3b6ed4=[],_0x37f6a6=new Map();function _0x214a00(_0x4532cd,_0x352ac1,_0x30fe7d){var _0x45e888=_0x599b38,_0x564583={'sxcxB':function(_0x5c4e85){return _0x254194['hFjFZ'](_0x5c4e85);}};if(_0x254194[_0x45e888(0x3d2)](_0x254194[_0x45e888(0x3eb)],_0x254194[_0x45e888(0x3eb)])){var _0x87e3ff=_0x564583['sxcxB'](_0x4a67c0);_0x87e3ff&&(_0x5ca812=_0x87e3ff,_0x3b0562['state']=!![]);}else{var _0x14f8cd=_0x37f6a6['get'](_0x4532cd);!_0x14f8cd&&(_0x14f8cd=new Map(),_0x37f6a6['set'](_0x4532cd,_0x14f8cd));if(!_0x14f8cd[_0x45e888(0xef)](_0x352ac1))try{var _0x1a99f2=new _0x46e75d(_0x4532cd)[_0x45e888(0x212)+'ield'](_0x352ac1,_0x30fe7d);_0x14f8cd[_0x45e888(0x1ac)](_0x352ac1,_0x1a99f2!==undefined?_0x1a99f2[_0x45e888(0x248)]():null);}catch(_0x528616){_0x14f8cd['set'](_0x352ac1,null);}return _0x14f8cd[_0x45e888(0x57f)](_0x352ac1);}}function _0x4acf4e(_0x298293,_0x3afa32,_0x58d6c6,_0x76667e){var _0x5bad3e=_0x599b38;try{new _0x46e75d(_0x298293)['write'+_0x5bad3e(0x2ee)](_0x3afa32,_0x58d6c6,_0x76667e);}catch(_0x4d5d06){}}function _0x5e418f(_0x3fddbc,_0x1157cc,_0x3bfdc8,_0x46ef9f){var _0xbb802f=_0x599b38;if(_0x254194['mFFcS'](_0xbb802f(0x1af),_0x254194[_0xbb802f(0x423)])){var _0x38c50d=_0x214a00(_0x3fddbc,_0x1157cc,_0x3bfdc8);if(_0x38c50d!=null)_0x4acf4e(_0x3fddbc,_0x1157cc,_0x3bfdc8,_0x38c50d*_0x46ef9f);}else{var _0x193f8a=_0x254194['PoWnk'][_0xbb802f(0x441)]('|'),_0x4b98d0=-0x1dd3+0x1b5d+0x276;while(!![]){switch(_0x193f8a[_0x4b98d0++]){case'0':_0x539a7b[_0xbb802f(0x5f4)+_0xbb802f(0x58b)][_0xbb802f(0x46b)](_0x254194[_0xbb802f(0x541)]);continue;case'1':_0x9b4e6['setPo'+_0xbb802f(0x253)+'Captu'+'re'](_0x58f5d1[_0xbb802f(0x37a)+'erId']);continue;case'2':if(_0x31ad01[_0xbb802f(0x5d4)+'t'][_0xbb802f(0x23a)+'st'](_0x254194[_0xbb802f(0x501)]))return;continue;case'3':_0x50e0b4=[_0x254194[_0xbb802f(0x345)](_0x55ba90['clien'+'tX'],_0x413c67[_0xbb802f(0x1f8)]),_0x1a1e9f[_0xbb802f(0x3ed)+'tY']-_0x413c67[_0xbb802f(0x564)]];continue;case'4':var _0x413c67=_0xee2a31[_0xbb802f(0x38e)+'undin'+'gClie'+_0xbb802f(0x471)+'t']();continue;}break;}}}function _0x26777c(_0x1f2c39,_0x3d37fe,_0x4e6e13,_0x2014d8,_0x1572d2,_0x5c2a84,_0x353861){var _0x2a6df9=_0x599b38;try{if(_0x254194[_0x2a6df9(0x1aa)](_0x254194['pZBLW'],_0x2a6df9(0x559))){var _0x388dd6=_0x417bfa['hookP'+_0x2a6df9(0x4c1)]({'typeName':_0x3d37fe,'methodName':_0x4e6e13,'params':_0x2014d8,'returnType':_0x1572d2},_0x5c2a84);return _0x388dd6[_0x2a6df9(0x5ce)+'ed']=_0x353861!==![],_0x162101[_0x1f2c39]=_0x388dd6,_0x4706dd['hooks'+'Total']++,_0x254194['MtWNd'](_0x39dd8f,_0x2a6df9(0x11c),_0x254194[_0x2a6df9(0x24b)](_0x254194[_0x2a6df9(0x24b)](_0x254194[_0x2a6df9(0x525)](_0x254194[_0x2a6df9(0x1cc)](_0x1f2c39+_0x254194[_0x2a6df9(0x323)],_0x3d37fe)+'::'+_0x4e6e13+'(',_0x2014d8[_0x2a6df9(0x589)](',')),')')+(_0x1572d2?_0x254194[_0x2a6df9(0x368)]+_0x1572d2:'')+(_0x2a6df9(0x369)+_0x2a6df9(0x4f0)),_0x388dd6[_0x2a6df9(0x5ce)+'ed'])),_0x388dd6;}else{var _0x4f560a=_0x51c45a[_0x232581];if(_0x4f560a)try{_0x4f560a[_0x2a6df9(0x5ce)+'ed']=!!_0x2ce195;}catch(_0x5e1c56){}}}catch(_0x4184b1){if(_0x254194[_0x2a6df9(0x576)](_0x254194[_0x2a6df9(0x32e)],_0x2a6df9(0x47b)))return _0x4706dd['lastE'+_0x2a6df9(0x5fe)]=_0x2a6df9(0x23d)+_0x1f2c39+':\x20'+(_0x4184b1&&_0x4184b1[_0x2a6df9(0x11a)+'ge']||_0x4184b1),_0x254194['ehanz'](_0x39dd8f,_0x254194[_0x2a6df9(0x4b4)],_0x254194[_0x2a6df9(0x525)](_0x2a6df9(0x27f)+_0x2a6df9(0x33d)+_0x2a6df9(0x38a)+'ter\x20'+_0x1f2c39+':\x20',_0x4706dd['lastE'+'rror'])),null;else{if(typeof _0x1a9d5b===_0x2a6df9(0x43f)+'g')return _0x32790b;if(_0x2fbeea&&_0x3f43ea['messa'+'ge'])return _0xf65d92['messa'+'ge'];try{return _0x254194[_0x2a6df9(0x11b)](_0x18a56e,_0x55ebb4);}catch(_0x48cdb3){return'?';}}}}function _0x2e11fa(_0x2f2037,_0x4d1ae9,_0xb122ae,_0x7423b9,_0x1c012f,_0x2c3187,_0x1a4ad1){var _0x15c2b6=_0x599b38;if(_0x15c2b6(0x356)!=='qPUEf')return!_0x99e3ea&&(_0x3f6d43=!![],_0x254194[_0x15c2b6(0x2b5)](_0x293122,_0x15c2b6(0x602),_0x254194[_0x15c2b6(0x24b)](_0x254194[_0x15c2b6(0x24b)](_0x15c2b6(0x67a)+'rs\x20Ma'+'pSche'+_0x15c2b6(0x265),_0x345404(_0x485e25)),_0x254194['ZvvZy']))),-0xcb*-0x17+0x3*0x1d9+-0x17c8;else try{var _0x3edcc3=_0x417bfa[_0x15c2b6(0x4c8)+_0x15c2b6(0x565)+'x']({'typeName':_0x4d1ae9,'methodName':_0xb122ae,'params':_0x7423b9,'returnType':_0x1c012f},_0x2c3187);return _0x3edcc3['enabl'+'ed']=_0x1a4ad1!==![],_0x162101[_0x2f2037]=_0x3edcc3,_0x4706dd[_0x15c2b6(0x438)+_0x15c2b6(0x3cd)]++,_0x39dd8f(_0x15c2b6(0x11c),_0x254194[_0x15c2b6(0x1cc)](_0x254194[_0x15c2b6(0x426)](_0x254194['thiCv'](_0x254194['jKJCx'](_0x254194[_0x15c2b6(0x525)](_0x2f2037,'\x20regi'+_0x15c2b6(0x5e8)+'d:\x20')+_0x4d1ae9,'::')+_0xb122ae+'(',_0x7423b9[_0x15c2b6(0x589)](','))+')'+(_0x1c012f?'\x20->\x20'+_0x1c012f:''),_0x254194[_0x15c2b6(0x14e)]),_0x3edcc3['enabl'+'ed'])),_0x3edcc3;}catch(_0x5c2686){return _0x4706dd[_0x15c2b6(0x60a)+_0x15c2b6(0x5fe)]=_0x254194['nwFsA'](_0x15c2b6(0x23d),_0x2f2037)+':\x20'+(_0x5c2686&&_0x5c2686[_0x15c2b6(0x11a)+'ge']||_0x5c2686),_0x39dd8f(_0x254194['rbElm'],_0x254194['IdaIl'](_0x254194['OrkmS']+_0x2f2037+':\x20',_0x4706dd[_0x15c2b6(0x60a)+_0x15c2b6(0x5fe)])),null;}}var _0x12f1d7=()=>![];try{if('ouIxG'!==_0x254194[_0x599b38(0x2ca)]){if(window['Unity'+_0x599b38(0x353)+_0x599b38(0x464)]&&!_0xcdb308[_0x599b38(0x3e8)+'ode']){if(_0x254194[_0x599b38(0x98)]===_0x254194[_0x599b38(0x2e9)]){for(var _0x17c00d=0x1*-0x28d+0x1*0xca1+-0x5*0x204;_0x17c00d<_0x4efa7c['lengt'+'h'];_0x17c00d++)_0x483053[_0x599b38(0x56a)](_0x1125bb,_0x4684a4[_0x17c00d]);}else{_0x46e75d=window['Unity'+_0x599b38(0x353)+_0x599b38(0x464)][_0x599b38(0x605)+'Wrapp'+'er'],_0x254194[_0x599b38(0x5f7)](_0x39dd8f,_0x599b38(0x39b),_0x599b38(0x605)+_0x599b38(0x658)+_0x599b38(0x72)+_0x599b38(0x4d6)+_0x599b38(0x55c)+'eatin'+'g\x20plu'+_0x599b38(0x397)),_0x417bfa=window[_0x599b38(0x325)+'WebMo'+_0x599b38(0x464)][_0x599b38(0x504)+'me']['creat'+'ePlug'+'in']({'name':_0x254194['cqzPb'],'version':'1.0.0','referencedAssemblies':[_0x254194[_0x599b38(0x305)],_0x254194[_0x599b38(0x114)]]}),_0x254194['vHJul'](_0x39dd8f,_0x254194[_0x599b38(0x5c7)],'plugi'+_0x599b38(0x28f)+'ura2v'+_0x599b38(0x632)+'ated\x20'+_0x599b38(0x1d3)+'ks\x20wi'+_0x599b38(0x1c7)+_0x599b38(0x10e)+_0x599b38(0x301)+'\x20the\x20'+'WASM\x20'+'insta'+'ntiat'+'es');if(_0xcdb308['hookC'+'aptur'+'e'])_0x254194['kbbKH'](_0x2e11fa,_0x599b38(0x509)+_0x599b38(0x2ff),'Local'+_0x599b38(0x6b)+_0x599b38(0x306)+'er',_0x254194[_0x599b38(0x647)],[_0x254194[_0x599b38(0x1d0)]],undefined,(_0x5466af,_0x185e6f)=>{var _0x2524eb=_0x599b38,_0x1cd563={'ulYOc':function(_0x39bbcf,_0x56f250,_0x40fe08,_0x576aae,_0x463114){return _0x39bbcf(_0x56f250,_0x40fe08,_0x576aae,_0x463114);},'nHUsu':_0x254194['Pkpun']};'byXBG'!==_0x2524eb(0x5de)?!_0x9bc08c&&_0x185e6f&&_0x185e6f['val']()&&(_0x9bc08c=_0x185e6f['val'](),_0x4706dd['linke'+'r']=!![],_0x39dd8f('captu'+'re','Local'+'Playe'+_0x2524eb(0x306)+'er\x20@'+_0x254194['iVCcI'](_0x340b98,_0x9bc08c))):(_0x1cd563[_0x2524eb(0x202)](_0xb062d6,_0x260c84,-0x1482+-0x3*-0x19+-0x1*-0x14fb,_0x1cd563[_0x2524eb(0x1d6)],_0x43289d),_0x3cfab7(_0x32ee21,0x1dba+-0x840+-0x14ce,_0x1cd563[_0x2524eb(0x1d6)],_0x56be6a));},!![]);if(_0xcdb308[_0x599b38(0x17c)+_0x599b38(0x28d)+'e'])_0x254194[_0x599b38(0x3bc)](_0x2e11fa,_0x599b38(0x5d5)+'M',_0x254194[_0x599b38(0x458)],_0x254194[_0x599b38(0x647)],[_0x599b38(0xcd)],undefined,(_0x236ae6,_0x445a1a)=>{var _0x4a27b3=_0x599b38;if(_0x254194['QBQAf']===_0x254194[_0x4a27b3(0x10a)])!_0x559939&&_0x445a1a&&_0x445a1a['val']()&&(_0x559939=_0x445a1a['val'](),_0x4706dd[_0x4a27b3(0x328)]=!![],_0x39dd8f(_0x254194[_0x4a27b3(0x413)],_0x4a27b3(0x319)+_0x4a27b3(0x1f2)+_0x4a27b3(0x2ef)+_0x4a27b3(0x56d)+'\x20@'+_0x254194[_0x4a27b3(0x11b)](_0x340b98,_0x559939)));else{var _0x1e3d45=new _0x402ad6(_0x484356)[_0x4a27b3(0x212)+'ield'](_0x4267eb,'i16');return _0x1e3d45?_0x1e3d45['val']():0x122a+-0xeb1+0x1*-0x379;}},!![]);if(_0xcdb308[_0x599b38(0x17c)+'aptur'+'e'])_0x2e11fa('capTr'+_0x599b38(0x16b)+'rm',_0x254194['QbJJA'],'Updat'+'eLoca'+'lPlay'+'er',[_0x599b38(0xcd)],undefined,(_0x3a35d7,_0x5b1c5c)=>{var _0x325d0a=_0x599b38;_0x5b1c5c&&_0x5b1c5c['val']()&&(_0x2e38b7=_0x5b1c5c['val'](),_0x4706dd[_0x325d0a(0x373)+_0x325d0a(0xb0)+'form']=!![],_0x254194[_0x325d0a(0x5f7)](_0x39dd8f,_0x325d0a(0x311)+'re',_0x254194[_0x325d0a(0x23b)]+_0x254194['utBct'](_0x340b98,_0x2e38b7)));},!![]);if(_0xcdb308['hookC'+_0x599b38(0x28d)+'e'])_0x254194[_0x599b38(0x66)](_0x2e11fa,_0x599b38(0x54d)+'m',_0x599b38(0x112)+_0x599b38(0x56d),_0x599b38(0x2e2)+_0x599b38(0x4fd),[_0x599b38(0xcd)],undefined,(_0x2e99b8,_0x595698)=>{var _0x256e21=_0x599b38;if(!_0x537a91&&_0x595698&&_0x595698['val']()){if(_0x256e21(0x1e4)==='RXvPq')try{var _0x29376e=new _0x430c87(_0x12dbc0)[_0x256e21(0x212)+_0x256e21(0x503)](_0x4fac3c,_0x126278);_0x33e53b[_0x256e21(0x1ac)](_0x10c742,_0x254194['KGQwu'](_0x29376e,_0x45dfe4)?_0x29376e['val']():null);}catch(_0x1848d0){_0x1eb92e['set'](_0x4c6e88,null);}else _0x537a91=_0x595698['val'](),_0x4706dd[_0x256e21(0x2f4)+'nager']=!![],_0x39dd8f('captu'+'re',_0x254194[_0x256e21(0x634)]+_0x340b98(_0x537a91));}},!![]);if(_0xcdb308['hookS'+'tate'])_0x2e11fa(_0x254194[_0x599b38(0x450)],'Netwo'+'rkMan'+_0x599b38(0x22e),_0x254194['gsSlh'],[_0x599b38(0xcd),_0x254194['amdQA']],undefined,(_0x4dd05d,_0x204e4c,_0x1209e3)=>{var _0x4d2d31=_0x599b38;_0x1209e3&&_0x1209e3['val']()&&(_0x4ed78d=_0x1209e3['val'](),_0x4706dd[_0x4d2d31(0x5fb)]=!![],_0x254194['GGKLN'](_0x39dd8f,_0x4d2d31(0x311)+'re',_0x254194[_0x4d2d31(0x232)]+_0x254194['JmoOY'](_0x340b98,_0x4ed78d)));},!![]);if(_0xcdb308[_0x599b38(0xe4)+'tate'])_0x2e11fa('capRo'+'omGet',_0x254194[_0x599b38(0x63a)],_0x599b38(0x540)+_0x599b38(0x4a2)+_0x599b38(0x18e),[_0x254194['amdQA']],_0x254194[_0x599b38(0x1d0)],_0xfc110a=>{var _0x537965=_0x599b38;_0x254194[_0x537965(0x63d)]!==_0x254194[_0x537965(0x63d)]?(_0x508277[_0x537965(0x5e5)+_0x537965(0x567)](),_0x18fef2['moveT'+'o'](_0x53d837['w']/(0x1a53+-0x1*-0xa4d+-0x249e),_0x5130f9['h']),_0x87cf04[_0x537965(0x5bc)+'o'](_0x286083['x'],_0x3c263f),_0xe2e36d['strok'+'eStyl'+'e']=_0x4d8505,_0x29cf75['lineW'+_0x537965(0x3b8)]=-0x1ae3+0xb30+-0x29e*-0x6,_0x713145['setLi'+'neDas'+'h']([-0x5d0+-0x147d+0x1a52,-0x1f64+0x1968+-0x601*-0x1]),_0x1604e5[_0x537965(0x4e9)+'e'](),_0x44a82d['setLi'+_0x537965(0x4ed)+'h']([])):_0xfc110a&&_0xfc110a['val']()&&(_0x4ed78d=_0xfc110a[_0x537965(0x248)](),_0x4706dd[_0x537965(0x5fb)]=!![],_0x39dd8f(_0x254194[_0x537965(0x413)],_0x254194[_0x537965(0x426)](_0x537965(0x5a8)+'(gett'+'er\x20re'+_0x537965(0x391),_0x340b98(_0x4ed78d))));},!![]);if(_0xcdb308[_0x599b38(0xe4)+_0x599b38(0xb2)])_0x2e11fa('capPi'+'eceMg'+'r',_0x599b38(0x5d1)+'Manag'+'er',_0x599b38(0x2e2)+_0x599b38(0x4fd),['i32'],undefined,(_0x607908,_0x5379cf)=>{var _0x17c321=_0x599b38;_0x17c321(0x4f6)!==_0x254194['zlnKc']?(_0x42a70a=_0x24d688,_0x26b5b2[_0x17c321(0x602)]=!![]):_0x5379cf&&_0x5379cf[_0x17c321(0x248)]()&&(_0x6b3c5=_0x5379cf[_0x17c321(0x248)](),_0x4706dd['piece'+'Mgr']=!![],_0x39dd8f('captu'+'re','Piece'+_0x17c321(0x50e)+_0x17c321(0xec)+_0x340b98(_0x6b3c5)));},!![]);if(_0xcdb308[_0x599b38(0xe4)+'tate'])_0x2e11fa(_0x599b38(0x407)+_0x599b38(0xce),_0x599b38(0x6b)+'rSpaw'+'ner',_0x254194['KWbEQ'],[_0x254194[_0x599b38(0x1d0)]],undefined,(_0x28c592,_0x5ec7e7)=>{var _0x394e8b=_0x599b38;_0x5ec7e7&&_0x5ec7e7['val']()&&(_0x38ea33=_0x5ec7e7[_0x394e8b(0x248)](),_0x4706dd['spawn'+'er']=!![],_0x254194[_0x394e8b(0x538)](_0x39dd8f,'captu'+'re',_0x254194['RpuQR']+_0x340b98(_0x38ea33)));},!![]);if(_0xcdb308[_0x599b38(0x9c)+'oReco'+'il'])_0x254194['kbbKH'](_0x26777c,'noRec'+_0x599b38(0x1d7),'Gun',_0x599b38(0x15f)+_0x599b38(0x3f3)+'l',[_0x254194['amdQA']],undefined,_0x12f1d7,!!_0xcdb308['noRec'+_0x599b38(0x1d7)]);}}else _0x254194['ehanz'](_0x39dd8f,_0x599b38(0x39b),_0x254194['xqgLr'](_0x254194[_0x599b38(0x2bb)]+(window[_0x599b38(0x325)+'WebMo'+'dkit']?_0x254194[_0x599b38(0x1ca)]:_0x599b38(0x470)+'NG'),_0xcdb308[_0x599b38(0x3e8)+_0x599b38(0x404)]?_0x599b38(0x294)+_0x599b38(0x34a)+'de\x20on'+_0x599b38(0x522)+_0x599b38(0x438)+'\x20arme'+'d':''));}else{var _0x1d1960={'RYgSL':function(_0x1908f6,_0x195065){return _0x1908f6<_0x195065;}};try{var _0x22c17b=_0x36837c['log'];(function(_0xaab2fb){var _0x36f7d0=_0x599b38;for(var _0x5e07f6=-0x119b+0xb*-0x2bd+0x12a*0x29;_0x1d1960[_0x36f7d0(0x24d)](_0x5e07f6,_0xaab2fb[_0x36f7d0(0x4cc)+'h']);_0x5e07f6++)_0x22c17b[_0x36f7d0(0x56a)](_0xc8c2e6,_0xaab2fb[_0x5e07f6]);}(_0x254194[_0x599b38(0x2de)](_0xbcc926)[_0x599b38(0x441)]('\x0a')));}catch(_0x2eb285){}}}catch(_0xb3d47c){_0x4706dd[_0x599b38(0x60a)+'rror']=_0x599b38(0x79)+_0x599b38(0x374)+'\x20'+(_0xb3d47c&&_0xb3d47c['messa'+'ge']||_0xb3d47c),_0x254194['cKgbi'](_0x39dd8f,_0x599b38(0x39b),_0x254194[_0x599b38(0x4e3)]+_0x4706dd[_0x599b38(0x60a)+'rror']);}function _0x54d9ae(_0x5c5bca,_0x2c1c61){var _0x1a669f=_0x599b38,_0x3ecaad={'tSpvl':function(_0x52f59b,_0x3bbc8b){return _0x52f59b&&_0x3bbc8b;},'qGJcA':function(_0x395051,_0x332b93){return _0x395051+_0x332b93;}},_0x12dc05=_0x162101[_0x5c5bca];if(_0x12dc05){if(_0x254194[_0x1a669f(0x8c)](_0x1a669f(0x343),'Lrmxx'))_0x3ecaad[_0x1a669f(0x2e1)](!_0x28bc23,_0x12a584)&&_0x45ef75[_0x1a669f(0x248)]()&&(_0x5cb054=_0x1bdcb5['val'](),_0x4cb177[_0x1a669f(0x656)+'r']=!![],_0x4c8eb8(_0x1a669f(0x311)+'re',_0x3ecaad[_0x1a669f(0x3cb)]('Local'+'Playe'+'rLink'+_0x1a669f(0xec),_0x41d731(_0x2c0140))));else try{'hVooy'===_0x1a669f(0x5b5)?_0x12dc05[_0x1a669f(0x5ce)+'ed']=!!_0x2c1c61:(_0x5051eb['speed'+_0x1a669f(0x5d0)]=_0xfb7503,_0x18782f());}catch(_0x3137ce){}}}function _0x122d98(_0x3516b9,_0x377cb0){var _0xe0060e=_0x599b38;try{var _0x4c8341=new _0x46e75d(_0x3516b9)[_0xe0060e(0x212)+'ield'](_0x377cb0,_0xe0060e(0x292));return _0x4c8341?_0x4c8341['val']():0x1*-0x823+-0x1cd1*0x1+0x24f4;}catch(_0x104d02){return-0x1379+-0xb46+0x1ebf;}}function _0x46259f(_0x254817,_0xb71d29){var _0x24c87e=_0x599b38;if(_0x254194[_0x24c87e(0x1de)](_0x254194['WzgFw'],_0x24c87e(0x588)))_0x46e19e&&_0x377c48[_0x24c87e(0x248)]()&&(_0x16cc3d=_0x47bfcf[_0x24c87e(0x248)](),_0x2ca45f['spawn'+'er']=!![],_0x3c7533(_0x24c87e(0x311)+'re',_0x254194['EZKxa'](_0x254194['RpuQR'],_0x254194[_0x24c87e(0x11b)](_0x384a98,_0x37285c))));else try{if(_0x254194[_0x24c87e(0x57d)]==='CmPXs'){var _0x2de14c=new _0x46e75d(_0x254817)[_0x24c87e(0x212)+'ield'](_0xb71d29,_0x24c87e(0xcd));return _0x2de14c?_0x2de14c['val']():0xe63+-0x293*0x5+0xc2*-0x2;}else{var _0x376acc=_0x3503fc(_0x186244,0x2*-0x135a+0x1087+-0x1661*-0x1);if(_0x376acc>-0x2194+-0x39c*-0x6+0xbf6&&_0x376acc<-0xd*0x11+-0x1c9+-0x1*-0x359)return _0x376acc;_0x376acc=_0x254194[_0x24c87e(0x1d9)](_0x36248b,_0x25ba74,0x9c7+-0x4*0x5ff+0xe5d);if(_0x254194['CFSaI'](_0x376acc,-0x14c3+0xae*0x18+0x47d)&&_0x376acc<-0x863*0x2+-0xeed+0x16*0x179)return _0x376acc;}}catch(_0x511492){return 0x1*-0x761+0x65*0xe+0x1db;}}function _0xcf8868(_0x4b998d,_0x363d21){var _0x17940a=_0x599b38;try{var _0x2c73da=new _0x46e75d(_0x4b998d)[_0x17940a(0x212)+'ield'](_0x363d21,_0x254194[_0x17940a(0x2b1)]);return _0x2c73da?_0x2c73da[_0x17940a(0x248)]():0x143e+-0x1*-0x152+-0x1590;}catch(_0x316b9f){return 0x1db5+-0x1e1*0x1+-0x1bd4;}}function _0x284f46(_0x1f20aa,_0x2a2899){var _0x4c91ac=_0x599b38,_0x3039d8={'aNzrE':'get_f'+_0x4c91ac(0x163)+'fView','keLCC':_0x4c91ac(0xf9)+_0x4c91ac(0x220),'XsCNH':_0x254194['vcmvu'],'DxhSV':function(_0x1152f0,_0x5513bd){return _0x1152f0+_0x5513bd;},'NXbkl':function(_0x15d6ca,_0x2c8760){return _0x15d6ca-_0x2c8760;}};if(_0x254194['tBcgb'](_0x254194[_0x4c91ac(0x617)],_0x4c91ac(0x296))){var _0xfe46e5=_0x548b82['call']('Unity'+_0x4c91ac(0x51e)+'e.Cam'+'era',_0x3039d8[_0x4c91ac(0x2a6)],[_0x281be1['world'+_0x4c91ac(0x225)+'a']]);if(typeof _0xfe46e5===_0x4c91ac(0x18f)+'r'&&_0xfe46e5>0x1cbe+0x69*0x8+-0x1ffc*0x1&&_0xfe46e5<-0x824*-0x2+0x1875+-0x32*0xcd)return _0xfe46e5;}else try{var _0x269f5c=new _0x46e75d(_0x1f20aa)['readF'+'ield'](_0x2a2899,'u8');return _0x269f5c?_0x269f5c['val']():-0x1b29+0x246*0xc+-0x1f;}catch(_0x207132){if(_0x254194[_0x4c91ac(0x530)](_0x4c91ac(0x1a7),_0x254194['uPgSP']))return-0x195a+0xb9+-0x1e5*-0xd;else{var _0x5b7377=_0x3039d8['keLCC'][_0x4c91ac(0x441)]('|'),_0x39ea0c=0x89*-0x28+0x7*0x559+-0x1007;while(!![]){switch(_0x5b7377[_0x39ea0c++]){case'0':_0x118718['style']['botto'+'m']=_0x3039d8['XsCNH'];continue;case'1':_0x2153bf[_0x4c91ac(0x361)][_0x4c91ac(0x1f8)]=_0x3039d8[_0x4c91ac(0x2eb)](_0x5ba69f[_0x4c91ac(0x5cd)](_0x2e5f65[_0x4c91ac(0x351)](0x253c+0x199b+-0x3ed7,_0x4ea282['clien'+'tX']-_0x43d3e5[-0x1cac+-0x268c+0x4338]),_0x3039d8[_0x4c91ac(0x3bb)](_0x7a27b5[_0x4c91ac(0x679)+'Width'],0xa01+0x1c60+0x7*-0x55f)),'px');continue;case'2':_0x171614[_0x4c91ac(0x361)]['top']=_0xcf12ed[_0x4c91ac(0x5cd)](_0x17700d[_0x4c91ac(0x351)](-0x1a6d+0x1a0+0x7*0x38b,_0x3039d8[_0x4c91ac(0x3bb)](_0x3be8ab['clien'+'tY'],_0x3f5084[-0x1cb2+0x667+0x164c])),_0x5a13f3[_0x4c91ac(0x679)+'Heigh'+'t']-(-0x1d3d+0x1edd+-0x13c))+'px';continue;case'3':if(!_0x4e7888)return;continue;case'4':_0x5105fe[_0x4c91ac(0x361)]['right']='auto';continue;}break;}}}}function _0x205ea3(_0x2cec6d,_0x4e346d){var _0x4a8af6=_0x599b38,_0x26be85={'dCOhd':function(_0x27c11b,_0x1dfb14){return _0x27c11b(_0x1dfb14);}};try{if(_0x254194['qVviy']!==_0x4a8af6(0x4c3)){var _0xcce8a0=_0x416148['creat'+'eElem'+_0x4a8af6(0x442)](_0x4a8af6(0x361));_0xcce8a0['textC'+'onten'+'t']=_0x2e2f66,_0x5851e1['appen'+_0x4a8af6(0xde)+'d'](_0xcce8a0),_0x8594c4=_0x423a91(),_0x32da4c[_0x4a8af6(0x41c)+_0x4a8af6(0xde)+'d'](_0x2ec68c),_0x26be85[_0x4a8af6(0x3c6)](_0xda8ed3,()=>_0x31369b['class'+'List']['add'](_0x4a8af6(0x71)));}else{var _0xa5ad16=new _0x46e75d(_0x2cec6d)['readF'+_0x4a8af6(0x503)](_0x4e346d,'i8');return _0xa5ad16?_0xa5ad16[_0x4a8af6(0x248)]():0x47*0x35+0x25f6+-0x34a9;}}catch(_0x24a58c){return-0x1*0xa01+-0x11d3+0x1bd4;}}function _0x25f119(_0x273c49,_0x34c2e1){var _0x45f1ac=_0x599b38;try{var _0x2499aa=new _0x46e75d(_0x273c49)['readF'+_0x45f1ac(0x503)](_0x34c2e1,_0x45f1ac(0x487));return _0x2499aa?_0x2499aa[_0x45f1ac(0x248)]():-0x1*0x1981+-0x870+0x21f1;}catch(_0x489f09){return-0x2*-0x104d+-0x1*0x21d4+0x13a;}}function _0x500c70(_0x26db94,_0x69dd2f){var _0xf35ac8=_0x599b38;return _0x254194[_0xf35ac8(0x538)](_0x122d98,_0x26db94,_0x69dd2f);}function _0x1ebbdf(_0x4582e3,_0x11ae1d){var _0x4751cd=_0x599b38,_0x1c10e9={'FwoeN':function(_0x55066a,_0x55ebdc){var _0x5d4264=_0x1070;return _0x254194[_0x5d4264(0x1aa)](_0x55066a,_0x55ebdc);},'QkGdz':_0x4751cd(0x5b2)+_0x4751cd(0x4ab)+'Loade'+'d'};if(_0x254194[_0x4751cd(0x331)](_0x4751cd(0x2c8),'ahKUR'))return{'x':_0x25f119(_0x4582e3,_0x11ae1d),'y':_0x25f119(_0x4582e3,_0x11ae1d+(0x79*-0x2c+-0x26fd+0xf3*0x3f)),'z':_0x254194[_0x4751cd(0x13e)](_0x25f119,_0x4582e3,_0x254194[_0x4751cd(0x6e)](_0x11ae1d,0x1a*-0x141+-0x145e+0x3500))};else{if(_0x3f6be1['body']&&(_0x1c10e9[_0x4751cd(0x569)](_0x5dee98['ready'+_0x4751cd(0x66a)],'inter'+_0x4751cd(0x4e4)+'e')||_0x1c10e9['FwoeN'](_0x15e37f[_0x4751cd(0x2b8)+_0x4751cd(0x66a)],_0x4751cd(0x1bc)+'ete')))_0x3ace61();else _0xa78840['addEv'+_0x4751cd(0x3a3)+_0x4751cd(0x4cf)+'r'](_0x1c10e9[_0x4751cd(0x38c)],_0x12dc8a,{'once':!![]});}}function _0x3d8390(_0x2c1f0e,_0x46d545){var _0x175f69=_0x599b38;if(!_0x2c1f0e)return null;try{var _0x3f2096=_0x254194['MtWNd'](_0x46259f,_0x2c1f0e,-0x19*-0x89+0xb3*-0x2b+0x10b8);if(_0x3f2096<=-0x86*-0x25+-0x24d2+-0x2*-0x8ba||_0x254194[_0x175f69(0xe5)](_0x3f2096,_0x254194['GQDJV'](_0x46d545,0x11*-0x65+-0x1aac+0x21a1)))return null;var _0x5f51e0=window['Unity'+_0x175f69(0x353)+'dkit'][_0x175f69(0x504)+'me']['memor'+'y'](_0x2c1f0e+(0x5*0x2a7+-0x514+0x823*-0x1),_0x254194[_0x175f69(0x3fe)](_0x3f2096,0x2144+-0x2b*0x19+0x1d0f*-0x1)),_0x254e5a='';for(var _0xe5126c=0x21b4+-0x2*-0xe71+-0x3e96;_0x254194['mnEjc'](_0xe5126c,_0x3f2096);_0xe5126c++){var _0x325009=_0x254194[_0x175f69(0x4ca)](_0x5f51e0[_0x254194[_0x175f69(0x3fe)](_0xe5126c,-0xe57+0x8a5+0x92*0xa)],_0x5f51e0[_0x254194[_0x175f69(0x234)](_0x254194[_0x175f69(0x5e4)](_0xe5126c,0x450+-0x1*-0x188f+-0x9*0x335),-0x16ec+-0x1206+0x28f3)]<<0x7be*-0x3+-0x1533+0x257*0x13);if(_0x254194['ByKKL'](_0x325009,0xd*0xae+0x16*0x106+-0x1f5a))break;_0x254e5a+=String['fromC'+_0x175f69(0x55b)+'de'](_0x325009);}return _0x254e5a;}catch(_0x2111c6){return null;}}function _0x51f5b7(_0x507aa8){var _0x2d96d9=_0x599b38;return _0x507aa8?_0x254194[_0x2d96d9(0x5a3)](_0x122d98,_0x507aa8,-0x2*0x1c5+0x1*0x2447+0x1*-0x20b1):-0x42*-0x39+-0x20c*-0xe+-0x2b5a;}function _0x37f721(_0x5953a8,_0x26ab28){var _0x4205a4=_0x599b38,_0x8eacd0={'EPfRa':function(_0x2b7d7d){return _0x2b7d7d();}};if(_0x254194[_0x4205a4(0x388)]===_0x4205a4(0x1fd))_0x40b3db[_0x4205a4(0x4f3)]=_0x5c33da,_0x8eacd0[_0x4205a4(0x673)](_0x36df79);else return _0x5953a8?_0x122d98(_0x5953a8,0x22f9*-0x1+-0x117+0x2420+_0x26ab28*(0x1*0xb93+0x700+0x1*-0x128f)):-0x1109+0x47*0x7a+-0x10cd;}function _0x53da13(_0xeafcef,_0x18b955){var _0x4bb682=_0x599b38;if(!_0xeafcef)return null;for(var _0x142224=0x211f*0x1+-0x1*0x1f91+0xc7*-0x2;_0x142224<=0xe44+0x9*-0x21e+0x1*0x4ce;_0x142224+=0x188b+0x1cbb+-0x3542){var _0x212e40=_0x254194[_0x4bb682(0xc6)](_0x122d98,_0xeafcef,0x208a+0x11a2+0x4*-0xc88+_0x142224),_0x4ddf10=_0x46259f(_0xeafcef,-0x1*0x20af+0x1355+0xd6a+_0x142224);if(_0x212e40&&_0x254194[_0x4bb682(0x611)](_0x4ddf10,0x2*0x3b2+0x5*0x3fb+-0x1b4b)&&_0x4ddf10<=_0x254194['bwlch'](_0x18b955,-0x1275+0x1137+0xbf*0x2))return _0x254194[_0x4bb682(0x1aa)](_0x254194[_0x4bb682(0x474)],_0x4bb682(0x26b))?null:{'entries':_0x212e40,'count':_0x4ddf10,'shift':_0x142224};}return null;}function _0x361900(_0x4a30d0,_0x2fbc59){var _0xad6b8b=_0x599b38,_0x10c056=_0x254194['GGKLN'](_0x53da13,_0x4a30d0,_0x2fbc59);if(!_0x10c056)return[];var _0x57e03a=[];for(var _0x188796=-0x6*0x52f+-0x2*0xb2+0x207e;_0x188796<_0x10c056[_0xad6b8b(0x427)];_0x188796++){var _0x3f4fa0=_0x254194[_0xad6b8b(0x6e)](-0x1f5*-0xf+-0x4*-0x510+-0x318b,_0x188796*(0x2*0xbb+-0x1e67*-0x1+0x7*-0x48b));if(_0x46259f(_0x10c056[_0xad6b8b(0x46e)+'es'],_0x3f4fa0)<0xb14*-0x3+0xc91*0x1+0xb*0x1e1)continue;_0x57e03a[_0xad6b8b(0x2ed)](_0x254194['nJAMD'](_0x122d98,_0x10c056[_0xad6b8b(0x46e)+'es'],_0x254194[_0xad6b8b(0x426)](_0x3f4fa0,-0x1*0x4cd+0x2128+-0x1c4f*0x1)));}return _0x57e03a;}function _0x47fa4d(_0x49fa25){var _0x32136b=_0x599b38;if(_0x32136b(0xbf)!==_0x32136b(0xbf))_0x37e465();else try{return new _0x46e75d(_0x49fa25)[_0x32136b(0x35b)+_0x32136b(0x2a9)+'me']();}catch(_0x2246b1){return null;}}function _0x4dcd40(_0x49b03b,_0x322cc6){var _0x20736a=_0x599b38;if(_0x254194[_0x20736a(0x624)](_0x20736a(0x40d),_0x20736a(0x5c8))){var _0x52edcf=_0x500c70(_0x49b03b,-0x1721*-0x1+-0x1fb6+-0x8bd*-0x1),_0x5750dd=Math[_0x20736a(0x5cd)](_0x254194[_0x20736a(0x3c9)](_0x51f5b7,_0x52edcf),0x1928+-0x1a5*0x1+-0x1*0x1763);for(var _0x5b95e4=0x1*-0x16bf+-0x4cf+0x1b8e;_0x254194['mnEjc'](_0x5b95e4,_0x5750dd);_0x5b95e4++){if(_0x20736a(0x5cc)!==_0x254194['oOFXq']){var _0x1862c1=_0x37f721(_0x52edcf,_0x5b95e4);if(!_0x1862c1)continue;if(_0x254194['JmoOY'](_0x47fa4d,_0x1862c1)===_0x322cc6)return _0x1862c1;}else _0x23d3ae[_0x20736a(0xe4)+'tate']=_0x3b2e7a,_0x12a5ba();}return 0x2b*0x83+-0x5f*-0x32+-0x288f;}else _0x4890ab=_0x1d5aa8['val'](),_0x29fb95['msm']=!![],_0x254194[_0x20736a(0x5a3)](_0x3636b8,_0x20736a(0x311)+'re',_0x254194[_0x20736a(0x5f9)]('Movem'+_0x20736a(0x1f2)+'ateMa'+_0x20736a(0x56d)+'\x20@',_0x41abe6(_0x2cbe8f)));}function _0x458452(_0x32a78c,_0x48282f){if(!_0x32a78c)return null;for(var _0xbafc2a of[0x5f*0x5d+-0xae5+0x1*-0x1796,0x7a4+0x11f+-0x8b7,-0x12e*-0x6+-0x22*0x10d+-0x69*-0x46,-0x3*0x2a1+0x1ed7*0x1+-0xc*0x1e8]){var _0xfdcbb5=_0x53da13(_0x122d98(_0x32a78c,_0xbafc2a),_0x48282f);if(_0xfdcbb5)return _0xfdcbb5;}return null;}var _0x5929da=![];function _0x6f4d79(){var _0x5b9eae=_0x599b38,_0x3fb6b2={'wBSVV':function(_0x113d58,_0x31cb5d,_0x129e2a){return _0x113d58(_0x31cb5d,_0x129e2a);}};if(!_0x4ed78d)return-0x2037*0x1+-0x26*0x1+0x205d;var _0x41ae41=_0x500c70(_0x4ed78d,-0x1*0xda5+-0x2d2*-0x8+-0x8db);if(!_0x41ae41)return!_0x5929da&&(_0x5929da=!![],_0x39dd8f(_0x254194[_0x5b9eae(0x637)],_0x254194['VfbDa'](_0x254194[_0x5b9eae(0x24a)],_0x254194['utBct'](_0x340b98,_0x4ed78d))+_0x254194['WVyHM'])),-0x7*0x233+0x25b*-0x1+0x11c0;var _0x43faf1=_0x500c70(_0x41ae41,0x4*-0x7ef+0x1*-0x26b+0x2237);if(!_0x43faf1){if(_0x254194[_0x5b9eae(0x188)]!==_0x254194[_0x5b9eae(0x188)])_0x5e8b37[_0x1e076b]=!![],_0x3fb6b2[_0x5b9eae(0x146)](_0x236226,_0x5b9eae(0x311)+'re',_0x2ef6fd);else return!_0x5929da&&(_0x5929da=!![],_0x254194[_0x5b9eae(0x52e)](_0x39dd8f,_0x5b9eae(0x602),_0x254194[_0x5b9eae(0x29b)](_0x5b9eae(0x602)+'@'+_0x340b98(_0x41ae41),_0x5b9eae(0x204)+'0\x20(pl'+_0x5b9eae(0x1df)+')\x20is\x20'+'null\x20'+'—\x20not'+'\x20a\x20My'+'RoomS'+_0x5b9eae(0x4c0)))),0x6*0x27+-0x1c0a+0xe0*0x1f;}var _0x74dafc=_0x254194[_0x5b9eae(0x2b5)](_0x458452,_0x43faf1,0x265e+0x82a+0x1724*-0x2);if(!_0x74dafc)return _0x254194[_0x5b9eae(0x250)]==='xyCLC'?(!_0x5929da&&(_0x254194['IKQeR'](_0x254194[_0x5b9eae(0x27a)],'GjqpQ')?(_0x2753fc[_0x5b9eae(0x97)+_0x5b9eae(0x621)+_0x5b9eae(0x1d2)](),_0x254194[_0x5b9eae(0x3af)](_0x2db462)):(_0x5929da=!![],_0x39dd8f(_0x5b9eae(0x602),_0x254194[_0x5b9eae(0x53d)](_0x254194[_0x5b9eae(0x51a)]+_0x340b98(_0x43faf1),_0x5b9eae(0x1ba)+_0x5b9eae(0x15e)+_0x5b9eae(0x2cc)+_0x5b9eae(0x1b4)+'s\x200x8'+_0x5b9eae(0x494)+_0x5b9eae(0x37e)+_0x5b9eae(0x675))))),0x102f*-0x2+0x106*-0x1+-0x2*-0x10b2):_0x4d052b?_0x254194[_0x5b9eae(0x4b7)](_0x3e0fad,_0x3f55b2,-0x2545+0x22b+0x232a+_0x1a3bc3*(-0x202d+0x1852+0x7df)):-0x8d3+-0x190d+0x8*0x43c;if(!_0x5929da){if('Buubv'===_0x5b9eae(0x669))_0x5929da=!![],_0x39dd8f('state',_0x254194['CBOYw'](_0x254194['aDvOI'](_0x5b9eae(0x5ee)+'mStat'+_0x5b9eae(0x677)+_0x254194['PGiNa'](_0x340b98,_0x41ae41),'\x20play'+_0x5b9eae(0x24e))+_0x340b98(_0x43faf1)+(_0x5b9eae(0x142)+_0x5b9eae(0x37d)+'ift=')+_0x74dafc[_0x5b9eae(0xcb)],_0x254194[_0x5b9eae(0x4ac)])+_0x74dafc['count']);else{_0x254194[_0x5b9eae(0x1a2)](_0x555cff,_0x2b3406),_0x1f3d5b(),_0xecbdac['clear'+_0x5b9eae(0x6f)](0x2427+0x2c*-0x5e+-0x1*0x13ff,0x929+-0x1*-0x1e43+-0x1d*0x15c,_0x5712e0['w'],_0x16f144['h']);if(!_0x18f10e[_0x5b9eae(0x3e8)+'ode'])_0x254194[_0x5b9eae(0x4ee)](_0xcd6123);}}return _0x41ae41;}function _0x3ae0eb(){var _0x21045b=_0x599b38,_0x4db0cb=[];if(!_0x5455ec)return _0x4db0cb;var _0x1a384d=_0x254194[_0x21045b(0x445)](_0x500c70,_0x5455ec,0xa5c+-0xb61+0x115),_0x59a998=_0x500c70(_0x1a384d,-0x1*0x1799+0x1c80+-0x4d7),_0x5c5b83=_0x361900(_0x59a998,-0x1*-0xa1f+0xd03+-0x16e2);for(var _0x569972=0x1cfb+0x254b+-0x4246;_0x254194[_0x21045b(0x23f)](_0x569972,_0x5c5b83['lengt'+'h']);_0x569972++){var _0x25d571=_0x5c5b83[_0x569972];if(!_0x25d571)continue;var _0x1a43f6=_0x254194['WNvCu'](_0x500c70,_0x25d571,-0x10b0+-0x207f+0x17f*0x21);if(!_0x1a43f6)continue;var _0x27ea4f=_0x500c70(_0x1a43f6,0x3a*0x23+-0xba0+-0x1e1*-0x2);if(!_0x27ea4f)continue;_0x4db0cb[_0x21045b(0x2ed)]({'ptr':_0x25d571,'playerId':_0x3d8390(_0x500c70(_0x25d571,0x26a8*0x1+0x4ed+-0x2b85),-0x1*0xddb+0x1c5*-0x7+0x1*0x1a7e),'nickname':_0x254194['cTsZc'](_0x3d8390,_0x500c70(_0x25d571,0x61*0x7+-0x1e5c+0x1bc9),0x2*-0x923+0xd76+0x4f0),'health':_0xcf8868(_0x25d571,0x52*0x62+0x18*-0x15c+0x170),'shield':_0x254194['uMUjd'](_0x284f46,_0x25d571,-0x17a7+-0x138e+0x4d3*0x9),'team':_0x205ea3(_0x25d571,-0x1*0xce+0x1830+-0x171f),'aiming':_0x254194[_0x21045b(0x8c)](_0x284f46(_0x25d571,0x3*0x685+0xf*-0x247+-0xa*-0x17c),-0xdc8+0x163f+-0x877),'crouching':_0x284f46(_0x25d571,-0x115*-0x24+-0x1*0x1063+-0x1654)!==-0x2356+-0xcf3+0x3049,'pos':{'x':_0x254194['WNvCu'](_0x25f119,_0x27ea4f,-0x7*0x176+0x2021+-0x15d7),'y':_0x25f119(_0x27ea4f,0x2da+-0x2076+0x1db0),'z':_0x25f119(_0x27ea4f,0x3c0+0x1ad7+-0x1e7f*0x1)},'isAlive':_0x254194[_0x21045b(0x37b)](_0x284f46,_0x25d571,0x5e9+0x1*0x98f+-0xf14)!==0x16e8+-0x1*-0x1784+0xb9b*-0x4});}return _0x4db0cb;}function _0x338e5a(){var _0x4f620c=_0x599b38,_0x31d597=_0x254194['PweRK'](_0x3ae0eb);if(_0x31d597['lengt'+'h']||!_0x38ea33)return _0x31d597;var _0x230675=_0x361900(_0x254194['ZJLNu'](_0x500c70,_0x38ea33,0x5e4*-0x3+0x1ce5+-0xb29),0xf7+0x2*-0xa55+0x13f3);for(var _0x431a36=-0xbbd*0x1+-0x1526+0x20e3;_0x431a36<_0x230675[_0x4f620c(0x4cc)+'h'];_0x431a36++){var _0x5dd277=_0x230675[_0x431a36];if(!_0x5dd277)continue;var _0x17d089=_0x254194[_0x4f620c(0x5a3)](_0x500c70,_0x5dd277,0x1515+-0x3cf*0x7+0x5b8);if(!_0x17d089)continue;var _0x3c843c=_0x254194['rNlIQ'](_0x500c70,_0x17d089,0x507+-0x1db3+-0xac*-0x25);if(!_0x3c843c)continue;var _0x654b59=_0x500c70(_0x3c843c,0xffb*-0x2+-0x1351+0x3357);if(!_0x654b59)continue;_0x31d597['push']({'ptr':_0x17d089,'playerId':_0x3d8390(_0x500c70(_0x17d089,-0x738+0x1a97+0x1*-0x134f),-0x136a+-0x3d*-0x37+-0x17*-0x49),'nickname':_0x254194['nDgne'](_0x3d8390,_0x500c70(_0x17d089,0x1f*-0x116+0x2f*0x92+0x6f0*0x1),0x667+0x193*0x9+-0x1472),'health':_0xcf8868(_0x17d089,0xee+0x3*0x41d+-0x1*0xd11),'shield':_0x254194[_0x4f620c(0x5a3)](_0x284f46,_0x17d089,-0x1ef1*0x1+0x1a58+-0x1*-0x4cf),'team':_0x205ea3(_0x17d089,0x51*0x6d+0xb7f+0x925*-0x5),'aiming':_0x254194[_0x4f620c(0x11e)](_0x284f46,_0x17d089,-0x2481+0x151e+0x1*0xfa1)!==0x8*0xc1+0x1*-0x13c0+0xdb8,'crouching':_0x284f46(_0x17d089,0x672+-0x5*-0x608+-0x1d*0x141)!==0x17f1+0x903*0x2+-0x29f7,'pos':{'x':_0x25f119(_0x654b59,0x23*0xef+0x1e9*0x13+0x24c*-0x1e),'y':_0x25f119(_0x654b59,0x2685+-0x1198+-0x14d9),'z':_0x254194['oqese'](_0x25f119,_0x654b59,0xbe4+0x17*0x14b+0x31*-0xd9)},'isAlive':_0x284f46(_0x17d089,0x5c1+-0x1*0x2417+-0x1b5*-0x12)!==-0x1*-0x1c7b+0xd24+-0x299f});}return _0x31d597;}var _0x48e7f3={};function _0x5b8347(_0x4e86fe,_0x5bf805){var _0x29cdcb=_0x599b38,_0x4d3ff2={'vdLbz':function(_0x3972dc,_0x5825f1){return _0x3972dc(_0x5825f1);},'frPxm':_0x29cdcb(0x4f2),'mEZJD':function(_0x3e61d7,_0x3f3bfe){return _0x3e61d7+_0x3f3bfe;},'mTsDT':function(_0x5a8f5c,_0xe857a4){return _0x5a8f5c/_0xe857a4;},'lgYQy':function(_0x3d8d53,_0x34af2d){return _0x3d8d53-_0x34af2d;},'TemDM':function(_0x100dd9,_0xa2a2f1){return _0x100dd9+_0xa2a2f1;}};if(_0x254194['TzCPQ']!==_0x254194['qPMFa']){if(!_0x48e7f3[_0x4e86fe]){if(_0x254194[_0x29cdcb(0x4f5)](_0x29cdcb(0x545),_0x29cdcb(0x545))){var _0x4e078a=_0x4f12d9[_0x29cdcb(0x2a5)+_0x29cdcb(0x3ca)+_0x29cdcb(0x442)](_0x29cdcb(0x5ad));_0x4e078a['class'+'Name']=_0x254194[_0x29cdcb(0x3d3)];var _0x192e57=_0x423b71[_0x29cdcb(0x2a5)+'eElem'+_0x29cdcb(0x442)](_0x254194[_0x29cdcb(0xd2)]);_0x192e57[_0x29cdcb(0x2d7)]=_0x29cdcb(0x223),_0x192e57['class'+_0x29cdcb(0x100)]=_0x29cdcb(0x449)+'ider',_0x192e57[_0x29cdcb(0x5cd)]=_0x2f7fd7,_0x192e57['max']=_0x447d5a,_0x192e57['step']=_0x545fc0,_0x192e57[_0x29cdcb(0x2e6)]=_0x3f5401;var _0x1b69d4=_0x50046e['creat'+_0x29cdcb(0x3ca)+_0x29cdcb(0x442)](_0x254194[_0x29cdcb(0x9b)]);return _0x1b69d4[_0x29cdcb(0x5f4)+_0x29cdcb(0x100)]='sk-va'+'l',_0x1b69d4[_0x29cdcb(0x548)+_0x29cdcb(0x53b)+'t']=_0xca401b(_0x207b56)[_0x29cdcb(0x215)+'ed'](-0x1ddd+0x12df+0xb00)[_0x29cdcb(0x2ae)+'ce'](/\.?0+$/,''),_0x192e57[_0x29cdcb(0x41f)+'ut']=()=>{var _0xf559e7=_0x29cdcb;_0x1b69d4[_0xf559e7(0x548)+'onten'+'t']=_0x4d3ff2[_0xf559e7(0x1b7)](_0x31aebd,_0x192e57['value'])[_0xf559e7(0x215)+'ed'](-0x2f*0x15+-0x2a*0x6a+0x1541*0x1)[_0xf559e7(0x2ae)+'ce'](/\.?0+$/,''),_0x4e078a[_0xf559e7(0x361)]['setPr'+_0xf559e7(0x4b5)+'y'](_0x4d3ff2['frPxm'],_0x4d3ff2['mEZJD'](_0x4d3ff2['mTsDT'](_0x4d3ff2[_0xf559e7(0x49a)](_0x192e57[_0xf559e7(0x2e6)],_0x2b3fc),_0x5f5017-_0x563eef)*(-0x19e1+0x19a2+0xa3),'%')),_0x36ad34(_0x302e99(_0x192e57['value']));},_0x4e078a['style']['setPr'+_0x29cdcb(0x4b5)+'y'](_0x29cdcb(0x4f2),_0x254194[_0x29cdcb(0x28e)](_0x254194['vrEaC'](_0x254194[_0x29cdcb(0x614)](_0x2a5216-_0x46d8a5,_0x3a39b0-_0x51e289),-0x18bf*0x1+0x1b44+-0x221),'%')),_0x4e078a['appen'+'d'](_0x192e57,_0x1b69d4),_0x4e078a;}else _0x48e7f3[_0x4e86fe]=!![],_0x39dd8f(_0x29cdcb(0x311)+'re',_0x5bf805);}}else _0x4b1545=_0x41e5c3[_0x29cdcb(0x248)](),_0x11a2c0[_0x29cdcb(0x5fb)]=!![],_0x357ed0(_0x29cdcb(0x311)+'re',_0x4d3ff2['TemDM'](_0x29cdcb(0x5a8)+_0x29cdcb(0x3bf)+'er\x20ar'+'g)\x20@',_0x4d3ff2['vdLbz'](_0x50bfb5,_0x1b7a8e)));}function _0x28722c(){var _0x1ac033=_0x599b38,_0x22b359={'fDiCP':function(_0x5b9e0d,_0x529562){return _0x5b9e0d+_0x529562;},'uEnjd':'local'+_0x1ac033(0x612)+_0x1ac033(0xb0)+_0x1ac033(0x3f2)+'@'};if(_0x9bc08c&&!_0x559939)_0x559939=_0x500c70(_0x9bc08c,-0x1*0x17d0+0xafb*0x1+0xcf1*0x1);if(_0x254194[_0x1ac033(0x3e3)](_0x559939,!_0x40ba04))_0x40ba04=_0x254194['Xfupn'](_0x500c70,_0x559939,0x3*-0x94d+0xc91*0x3+-0x9bc);if(_0x254194['CnyfB'](_0x559939,!_0x2e38b7))_0x2e38b7=_0x500c70(_0x559939,0x1126*-0x2+0x14ec+0xd74);if(_0x254194[_0x1ac033(0x257)](_0x9bc08c,!_0xc52743))_0xc52743=_0x500c70(_0x9bc08c,0x58e*-0x4+-0xca9+0x230d);if(_0x9bc08c&&!_0x4706dd['world'+_0x1ac033(0x225)+'a'])_0x4706dd[_0x1ac033(0x314)+'Camer'+'a']=_0x500c70(_0x9bc08c,0x12*-0xbd+0x1454*0x1+-0x6e6);if(_0x40ba04&&!_0x3b6ed4[_0x1ac033(0x4cc)+'h']){var _0xdb1bf0=_0x254194[_0x1ac033(0x2b5)](_0x500c70,_0x40ba04,0x178a+-0x35*-0x17+-0x5a1*0x5),_0x5ac9e4=Math[_0x1ac033(0x5cd)](_0x254194[_0x1ac033(0xaf)](_0x51f5b7,_0xdb1bf0),0x1*0xeb+0x72b+-0x7f6);for(var _0x1a41ed=-0x1b*-0x81+-0x14d+-0xc4e;_0x254194[_0x1ac033(0x226)](_0x1a41ed,_0x5ac9e4);_0x1a41ed++){if(_0x1ac033(0x177)!==_0x254194['nJerv']){var _0x593f92=_0x2e7761['devic'+_0x1ac033(0x166)+'lRati'+'o']||0x2*0x95f+0x4*-0x980+0x1343,_0xef7d19=_0x1df88[_0x1ac033(0x679)+_0x1ac033(0x284)],_0xd30135=_0x2d50fe[_0x1ac033(0x679)+_0x1ac033(0x34b)+'t'];if(_0xef7d19===_0x3c9023['w']&&_0xd30135===_0x54661c['h']&&_0x593f92===_0x4d8d91[_0x1ac033(0x633)])return;_0x44f516['w']=_0xef7d19,_0x17d157['h']=_0xd30135,_0xb8f6f2['dpr']=_0x593f92,_0x5f4dab[_0x1ac033(0xc0)]=_0xb426f0[_0x1ac033(0x2d4)](_0xef7d19*_0x593f92),_0x3b0bb7['heigh'+'t']=_0x2cce45[_0x1ac033(0x2d4)](_0xd30135*_0x593f92),_0x517b8d[_0x1ac033(0x3c7)+'ansfo'+'rm'](_0x593f92,0x355*0xb+-0x11b2+0x12f5*-0x1,0x7a*-0x3a+0xaa6+0x3a*0x4b,_0x593f92,0x144b+0x1*-0xd9f+-0x6ac,0x1*-0xdb7+-0xbbf+-0x2*-0xcbb);}else{var _0x388f1e=_0x37f721(_0xdb1bf0,_0x1a41ed);if(_0x388f1e)_0x3b6ed4['push'](_0x388f1e);}}_0x5b8347(_0x254194[_0x1ac033(0x378)],_0x254194[_0x1ac033(0x89)](_0x254194[_0x1ac033(0x650)](_0x254194[_0x1ac033(0x664)]+_0x254194[_0x1ac033(0x643)](_0x340b98,_0x40ba04),_0x1ac033(0x572)),_0x3b6ed4[_0x1ac033(0x4cc)+'h'])+(_0x1ac033(0x2b9)+'onent'+_0x1ac033(0x134)+'nned'));}if(_0x254194[_0x1ac033(0x436)](_0x40ba04,!_0x3b8a25)){_0x3b8a25=_0x254194['MUKYt'](_0x4dcd40,_0x40ba04,_0x254194[_0x1ac033(0x45e)]);if(_0x3b8a25)_0x254194[_0x1ac033(0x49d)](_0x5b8347,'ctrl',_0x254194[_0x1ac033(0x3a8)](_0x1ac033(0x373)+_0x1ac033(0x612)+_0x1ac033(0x319)+_0x1ac033(0x649)+_0x1ac033(0x551)+'ler\x20@',_0x254194[_0x1ac033(0x2f2)](_0x340b98,_0x3b8a25)));}if(_0x40ba04&&!_0x4567ca){_0x4567ca=_0x4dcd40(_0x40ba04,_0x254194[_0x1ac033(0x14d)]);if(_0x4567ca)_0x5b8347('shoot'+'er',_0x1ac033(0x373)+_0x1ac033(0x612)+_0x1ac033(0x2b0)+'er\x20@'+_0x254194[_0x1ac033(0x66c)](_0x340b98,_0x4567ca));}if(_0x6b3c5&&!_0x4ed78d){if(_0x1ac033(0x31b)!==_0x254194['wDevN']){var _0xea475f=_0x500c70(_0x6b3c5,0xf8b+0xd08+-0x1c77);_0xea475f&&(_0x254194[_0x1ac033(0x624)]('jDoYW',_0x254194[_0x1ac033(0x4ec)])?(_0x4ed78d=_0xea475f,_0x4706dd[_0x1ac033(0x5fb)]=!![],_0x39dd8f('captu'+'re',_0x1ac033(0x5a8)+'(Piec'+'eMana'+'ger.s'+'ubscr'+_0x1ac033(0x3e2)+'oom)\x20'+'@'+_0x254194[_0x1ac033(0x643)](_0x340b98,_0x4ed78d))):new _0x5ac7c1(_0x57af32)[_0x1ac033(0x653)+_0x1ac033(0x2ee)](_0x4653c5,_0x9db266,_0x372964));}else return null;}if(_0x4ed78d&&!_0x5455ec){if(_0x254194[_0x1ac033(0x331)](_0x254194[_0x1ac033(0x276)],_0x1ac033(0x2c0)))_0x161ac8&&_0x1820f9['val']()&&(_0x457fc0=_0x2c687b['val'](),_0x4a015a[_0x1ac033(0x373)+'Trans'+_0x1ac033(0xe3)]=!![],_0x388487(_0x1ac033(0x311)+'re',_0x22b359['fDiCP'](_0x22b359[_0x1ac033(0x4fc)],_0x4a8ffd(_0x42a869))));else{var _0x18e4af=_0x254194[_0x1ac033(0x35c)](_0x6f4d79);_0x18e4af&&(_0x5455ec=_0x18e4af,_0x4706dd['state']=!![]);}}}function _0xa24961(){var _0x529935=_0x599b38;if(!_0x2e38b7)return null;var _0x4fc6e1=_0x1ebbdf(_0x2e38b7,0x1c55*0x1+0xbdb+-0x280c);if(!_0x4fc6e1||_0x4fc6e1['x']===0x2289+0x1e02+-0x4f7*0xd&&_0x4fc6e1['y']===-0x7*0x83+-0x8ad+0xc42&&_0x254194[_0x529935(0x4d2)](_0x4fc6e1['z'],0x5b4+0x2204+-0xf8*0x29))return null;return{'x':_0x4fc6e1['x'],'y':_0x4fc6e1['y']+(_0x254194[_0x529935(0x390)](Number,_0xcdb308[_0x529935(0x18b)+'ight'])||0x8*0xa+-0x2e9*-0x4+-0xbf3+0.6000000000000001),'z':_0x4fc6e1['z']};}function _0x3503e7(){var _0x427fea=_0x599b38;if(!_0xc52743)return null;var _0x297eb0=_0x25f119(_0xc52743,-0x225*0x1+0xad7+-0xdd*0xa),_0x28cfbd=_0x25f119(_0xc52743,0x7d*-0x17+0xfa2+-0x7*0x9d);if(_0x297eb0===0x2044+-0x52c*0x2+-0x15ec&&_0x254194[_0x427fea(0x4e6)](_0x28cfbd,-0xc60*-0x3+-0x1be+0x50e*-0x7))return null;var _0x411ddb=_0x297eb0*Math['PI']/(0x238c+0x2aa*0xe+-0x4824),_0x585953=_0x28cfbd*Math['PI']/(-0x1645+0x12a6+-0x171*-0x3),_0x4bc6db=_0x254194['MQCwq'](Math[_0x427fea(0x5ef)](_0x411ddb),Math[_0x427fea(0x5ef)](_0x585953)),_0x2c3da7=-Math[_0x427fea(0x461)](_0x411ddb),_0x28d0d9=Math['cos'](_0x411ddb)*Math[_0x427fea(0x461)](_0x585953),_0x47649d=Math[_0x427fea(0x23e)](_0x4bc6db,_0x2c3da7,_0x28d0d9);if(_0x47649d<-0x1*-0x1cd1+0x1cdb+-0xe6b*0x4+0.1||_0x254194['hgpJP'](_0x47649d,-0x1ab6+0x10f8+0x4e4*0x2))return null;var _0x2fd07f=-0xe1*-0xd+-0x11f4+0x687,_0x11b587=0x1dc1+-0x13eb*-0x1+-0x121*0x2c,_0x46d731=0xfed+-0x61*-0x3e+-0x276b*0x1,_0x43fed5=0x35d*0x5+-0x17e5*0x1+0x714,_0x8e1cc2=0xd*0x2e1+-0x6f*0xf+-0x2*0xf76,_0x5b5e31=0x1*-0x14ea+0x3*-0x139+0x1895;_0x2fd07f=-_0x28d0d9,_0x11b587=0x1b1a*0x1+0x1013+-0x2b2d,_0x46d731=_0x4bc6db,_0x43fed5=_0x254194[_0x427fea(0x345)](_0x11b587*_0x28d0d9,_0x254194['MQCwq'](_0x46d731,_0x2c3da7)),_0x43fed5=_0x254194['XIIaj'](_0x11b587*_0x28d0d9,_0x254194[_0x427fea(0x30f)](_0x46d731,_0x2c3da7)),_0x8e1cc2=_0x46d731*_0x4bc6db-_0x2fd07f*_0x28d0d9,_0x5b5e31=_0x254194[_0x427fea(0x15d)](_0x254194['iyJvw'](_0x2fd07f,_0x2c3da7),_0x254194['JNIYd'](_0x11b587,_0x4bc6db));var _0x154efc=Math['hypot'](_0x43fed5,_0x8e1cc2,_0x5b5e31);if(_0x254194['GAvYY'](_0x154efc,0x1d0d*0x1+-0x1*-0x1b29+-0x3836+0.001)){if(_0x254194[_0x427fea(0x144)]==='XNKkP'){var _0x38edeb=0x2c5*0x3+-0xaed+0x14f*0x2;for(var _0xbcf1dd in _0x296e90){if(_0x48ee61[_0xbcf1dd]&&_0x269103[_0xbcf1dd]['appli'+'ed'])_0x38edeb++;}_0x21d644['hooks'+'Ok']=_0x38edeb;if(_0x30bc95['hooks'+'Total']&&!_0x157714[_0x427fea(0x1ae)+'sLogg'+'ed']){_0x368910[_0x427fea(0x1ae)+'sLogg'+'ed']=!![];for(var _0xf95cf2 in _0x50d8f5){var _0x53e50e=_0x1c252e[_0xf95cf2];_0x1f7f02('hook',_0x254194['uVtQp'](_0xf95cf2+(_0x427fea(0x139)+'ied='),!!_0x53e50e[_0x427fea(0x1dc)+'ed'])+('\x20enab'+'led=')+!!_0x53e50e[_0x427fea(0x5ce)+'ed']);}}}else _0x43fed5/=_0x154efc,_0x8e1cc2/=_0x154efc,_0x5b5e31/=_0x154efc;}return{'r':{'x':_0x2fd07f,'y':_0x11b587,'z':_0x46d731},'u':{'x':_0x43fed5,'y':_0x8e1cc2,'z':_0x5b5e31},'f':{'x':_0x4bc6db,'y':_0x2c3da7,'z':_0x28d0d9}};}function _0x4bbd39(){var _0x46249f=_0x599b38,_0x5dae6e={'VnveM':function(_0x48d4b9,_0x4575d0){return _0x48d4b9+_0x4575d0;},'Sexsx':_0x254194[_0x46249f(0x24a)],'xkdEk':function(_0x163291,_0x352bfd){return _0x254194['ElZCe'](_0x163291,_0x352bfd);},'lYIYn':function(_0x4dd2d7){return _0x4dd2d7();}};if(Number(_0xcdb308[_0x46249f(0x3dc)+_0x46249f(0xf0)+'e'])>0x1*-0x347+0x137*0x5+-0xb3*0x4)return _0x254194['mmqBm'](Number,_0xcdb308['fovOv'+'errid'+'e']);if(_0x537a91){if(_0x46249f(0x12a)!==_0x254194['XVFFK'])_0x2798ae=!![],_0x32d995('state',_0x5dae6e[_0x46249f(0x25a)](_0x5dae6e[_0x46249f(0x21a)],_0x5de39d(_0x12c2cc))+(_0x46249f(0x204)+_0x46249f(0x3cc)+'null\x20'+'—\x20wro'+'ng\x20ro'+_0x46249f(0xeb)+_0x46249f(0x117)));else{var _0x4bccce=_0x25f119(_0x537a91,-0x135*0x1f+0xab+0xa*0x3b2);if(_0x254194['hgpJP'](_0x4bccce,-0xba5+0x1d00+-0x1151)&&_0x4bccce<0xa*0xad+0x21d7+-0x1*0x27e6)return _0x4bccce;_0x4bccce=_0x254194[_0x46249f(0x7c)](_0x25f119,_0x537a91,-0x19ff+-0x4*0x94e+0x3f5f);if(_0x4bccce>0x2*0x293+0x2280+-0x279c&&_0x4bccce<0xa91+-0x18a+0x4*-0x215)return _0x4bccce;}}if(_0x417bfa&&_0x4706dd[_0x46249f(0x314)+_0x46249f(0x225)+'a']){if(_0x46249f(0x59d)!==_0x254194['gpDUs'])try{if(_0x254194[_0x46249f(0x8c)]('JcbRC','JcbRC')){var _0x469419=_0x2b4cbd(_0x48e750,_0x1fd201,_0x1dba01);if(_0x5dae6e[_0x46249f(0x334)](_0x469419,null))_0x1e31fd(_0x2c0ad8,_0x2b7e0d,_0x149bb6,_0x469419*_0xa47e8e);}else{var _0x54f01b=_0x417bfa[_0x46249f(0x56a)](_0x254194[_0x46249f(0x630)],'get_f'+'ieldO'+'fView',[_0x4706dd['world'+'Camer'+'a']]);if(typeof _0x54f01b===_0x254194['QgrYe']&&_0x254194['CFSaI'](_0x54f01b,-0x11*0x178+0x4*-0x94d+0x3e36*0x1)&&_0x54f01b<0xe45*0x1+0x1f94+-0x2d26)return _0x54f01b;}}catch(_0x281999){}else _0x5486a2[_0x46249f(0x2d9)+'mo']=_0x228aa4,_0x5dae6e['lYIYn'](_0x293097);}return-0x1092+-0x1952+-0xa88*-0x4;}function _0x5616f2(_0x534478,_0xac5618,_0xc57f75,_0x3a73ac,_0x44c503,_0x4e0d62){var _0x1f9ea6=_0x599b38,_0x4cc9df=(_0x1f9ea6(0xad)+_0x1f9ea6(0x4a7)+'|6|4|'+'8|1|5'+'|7')[_0x1f9ea6(0x441)]('|'),_0x135bd2=0xa0b+-0x1fd*-0x2+-0xe05*0x1;while(!![]){switch(_0x4cc9df[_0x135bd2++]){case'0':var _0x4ee070=_0x254194['VfbDa'](_0x254194[_0x1f9ea6(0x426)](_0x254194['JNIYd'](_0x271186,_0x3a73ac['r']['x']),_0x19e4aa*_0x3a73ac['r']['y']),_0x418e02*_0x3a73ac['r']['z']);continue;case'1':var _0xed6e45=_0x254194[_0x1f9ea6(0x347)](_0x70ee94,_0x4489dd)/_0x4b8d68;continue;case'2':if(_0x254194['EOeXW'](_0x4b8d68,-0x1e7b+0x1*0x395+-0x16*-0x139+0.05))return null;continue;case'3':var _0x4b8d68=_0x254194[_0x1f9ea6(0x2ce)](_0x254194['xiKXg'](_0x271186,_0x3a73ac['f']['x']),_0x254194['pfoTK'](_0x19e4aa,_0x3a73ac['f']['y']))+_0x254194['pfoTK'](_0x418e02,_0x3a73ac['f']['z']);continue;case'4':var _0x421ce3=_0x254194['qdIrn'](_0x128a64['w'],_0x128a64['h']);continue;case'5':if(_0xb7baa<-(0x1*0x24ca+-0x1673+-0xe56+0.30000000000000004)||_0x254194[_0x1f9ea6(0x4b8)](_0xb7baa,-0x2*0xd24+0x10*-0x70+-0x2149*-0x1+0.30000000000000004)||_0xed6e45<-(-0x1*-0x1377+0x1912+-0x6*0x76c+0.30000000000000004)||_0xed6e45>-0xf*0x19e+0x1ead+-0x66a+0.30000000000000004)return null;continue;case'6':var _0x4489dd=(0x1*-0x24fb+0x1cb3+-0x15*-0x65)/Math['tan'](_0x254194[_0x1f9ea6(0x451)](_0x4e0d62,Math['PI'])/(-0x1a4*-0x5+-0x3*-0x3d3+-0x653*0x3)/(-0x150b+-0x1efd*0x1+0x340a));continue;case'7':return{'x':_0x254194[_0x1f9ea6(0x1cc)](_0xb7baa*(-0x1*-0x192c+0x26dd+0x4ed*-0xd+0.5),0x793*0x5+-0x1*-0x910+-0x2eef+0.5)*_0x128a64['w'],'y':_0x254194['laBgN'](0x1*0x369+-0x20d3*-0x1+-0x243b,_0x254194['uVtQp'](_0xed6e45*(-0x1*0x1271+-0xbf9+0x11*0x1ca+0.5),0x1b55+-0x34*-0x97+-0x3a01+0.5))*_0x128a64['h'],'depth':_0x4b8d68};case'8':var _0xb7baa=_0x4ee070*_0x4489dd/_0x254194[_0x1f9ea6(0x488)](_0x4b8d68,_0x421ce3);continue;case'9':var _0x271186=_0x534478-_0x44c503['x'],_0x19e4aa=_0xac5618-_0x44c503['y'],_0x418e02=_0xc57f75-_0x44c503['z'];continue;case'10':var _0x70ee94=_0x254194[_0x1f9ea6(0x2ce)](_0x271186*_0x3a73ac['u']['x']+_0x254194['DaBRY'](_0x19e4aa,_0x3a73ac['u']['y']),_0x418e02*_0x3a73ac['u']['z']);continue;}break;}}function _0x27ddba(){var _0x365eec=_0x599b38;if(_0x254194[_0x365eec(0x304)]==='sOmFX')_0x245141();else{var _0x47c78f=('4|6|3'+_0x365eec(0x364)+'5|0')[_0x365eec(0x441)]('|'),_0x238228=0x1b6c+-0xf79*-0x1+-0x2ae5;while(!![]){switch(_0x47c78f[_0x238228++]){case'0':return _0x254194[_0x365eec(0x529)](_0x37f721,_0x25ea52,_0x30813f);case'1':var _0x126d2b=_0x51f5b7(_0x25ea52);continue;case'2':if(!_0x25ea52)return-0x2b*0x2f+-0x9e3+-0x8*-0x239;continue;case'3':var _0x25ea52=_0x254194['HiabH'](_0x500c70,_0x4567ca,0x421+0xe97+-0x1280);continue;case'4':if(!_0x4567ca)return 0xd3a+0x269+-0xfa3;continue;case'5':if(_0x254194['wBRyI'](_0x30813f,-0x24c1+0x2*-0x4cc+-0x71*-0x69)||_0x254194[_0x365eec(0x259)](_0x30813f,_0x126d2b))return 0xc83+0x1e3*-0x9+0x478*0x1;continue;case'6':var _0x30813f=_0x46259f(_0x4567ca,-0x136+0x3e*-0xe+0x4da);continue;}break;}}}var _0x229f49=-0x549+-0xab1+0xffa;setInterval(()=>{var _0x1d6e91=_0x599b38,_0x2326be={'noIVB':function(_0x36799a){return _0x36799a();},'TMgBX':function(_0x2ecc01,_0x2a52f5){return _0x2ecc01>>>_0x2a52f5;}};if(!_0x46e75d||!window[_0x1d6e91(0x261)+_0x1d6e91(0x1a8)+_0x1d6e91(0x2da)])return;try{_0x28722c();}catch(_0x14b8f6){_0x254194[_0x1d6e91(0x158)]!=='YGDIt'?_0x39dd8f(_0x1d6e91(0x497),_0x1d6e91(0x1cd)+_0x1d6e91(0x13b)+'l\x20thr'+'ew:\x20'+(_0x14b8f6&&_0x14b8f6[_0x1d6e91(0x11a)+'ge'])):(_0xa21621[_0x1d6e91(0x339)]=_0x18b951,_0x2326be[_0x1d6e91(0x537)](_0x3e022c));}var _0x15be9b=(Number(_0xcdb308['speed'+'Pct'])||0xa*-0xdb+0x2031+-0x173f*0x1)/(0x1bb1*-0x1+-0x41*0x47+-0xe3*-0x34),_0x51c63c=_0x254194[_0x1d6e91(0x5d8)](Number(_0xcdb308[_0x1d6e91(0x40f)+'ct'])||0x1*0x23c7+0xaec+0x1*-0x2e4f,0x2565+-0x2485*-0x1+0x1*-0x4986),_0x33695c=(Number(_0xcdb308['gravi'+_0x1d6e91(0x663)])||0x18da+0xd17+-0x1*0x258d)/(0xb89*-0x1+-0x630+-0x1*-0x121d);try{if(_0x3b8a25&&(_0x254194[_0x1d6e91(0x1de)](_0x15be9b,0x1*0x1e59+-0x18ad*0x1+-0x5ab)||_0x254194['SDTtK'](_0x51c63c,0xd*-0x1cf+0x35*-0xad+0x13c7*0x3)||_0x33695c!==-0x2*-0x76b+0x157e+-0x11*0x223)){_0x15be9b!==-0x13*0xd+-0x1a49+0x1b41&&(_0x5e418f(_0x3b8a25,0x1*0x2327+-0x1925+-0x96a,_0x1d6e91(0x487),_0x15be9b),_0x5e418f(_0x3b8a25,0x2533*-0x1+-0x1215+0x37ec,'f32',_0x15be9b),_0x254194['rHLho'](_0x5e418f,_0x3b8a25,0xfdf*0x1+0x1686+-0x1*0x25bd,_0x254194['Pkpun'],_0x15be9b));_0x51c63c!==0xfe5+0x1*-0x14b7+0x41*0x13&&(_0x254194['nqAQM'](_0x5e418f,_0x3b8a25,0x6f*-0x1f+-0x16*-0x65+0x1*0x577,'f32',_0x51c63c),_0x254194[_0x1d6e91(0x47c)](_0x5e418f,_0x3b8a25,-0x2d*0xb9+-0x148d*0x1+-0x2d*-0x132,'f32',_0x51c63c));_0x254194[_0x1d6e91(0x457)](_0x33695c,0x3cc+0x16b*-0x1b+0x227e)&&(_0x254194[_0x1d6e91(0x47c)](_0x5e418f,_0x3b8a25,0xdf8+-0x161*-0x19+0x989*-0x5,'f32',_0x33695c),_0x5e418f(_0x3b8a25,0x208d+-0x59e+0x2eb*-0x9,_0x254194[_0x1d6e91(0x2a4)],_0x33695c));if(_0x254194[_0x1d6e91(0x63c)](_0x254194[_0x1d6e91(0x182)](_0x229f49,-0x7*0x36f+0x1664+0x1aa),0x229e+0x82e+-0x1f2*0x16))_0x39dd8f(_0x254194[_0x1d6e91(0x539)],_0x254194['OpotZ']+_0x254194['HiFVU'](_0x340b98,_0x3b8a25));}}catch(_0x28cf3a){if(_0x1d6e91(0x1b2)===_0x254194[_0x1d6e91(0x535)])_0x39dd8f(_0x1d6e91(0x653),_0x254194[_0x1d6e91(0x3c1)](_0x1d6e91(0x1f3)+_0x1d6e91(0x2c3)+_0x1d6e91(0x54b)+'hrew:'+'\x20',_0x28cf3a&&_0x28cf3a[_0x1d6e91(0x11a)+'ge']));else return'0x'+_0x2326be['TMgBX'](_0x5db778,0xaba+-0x67c+-0x43e)[_0x1d6e91(0x395)+_0x1d6e91(0xd3)](0x6*0x4ba+-0x1a73+0x1d9*-0x1);}try{var _0x2ae473=_0x27ddba();if(_0x2ae473){if(_0x254194['NXZLF'](_0x1d6e91(0x62b),_0x254194[_0x1d6e91(0x193)])){_0xcdb308[_0x1d6e91(0x35e)+'ead']&&(_0x254194['nqAQM'](_0x4acf4e,_0x2ae473,0x14e8+-0x173a+0xa*0x4d,_0x1d6e91(0x487),0x14*-0x110+0x9a8+0xb98),_0x4acf4e(_0x2ae473,-0x1593+0x1ecb*-0x1+0x1a91*0x2,_0x254194[_0x1d6e91(0x2a4)],-0x6*0x467+0x1*0x1715+-0x1*-0x355),_0x4acf4e(_0x2ae473,0x2210+-0x1cd*-0x1+-0x2315,_0x1d6e91(0x487),0x116e*-0x1+0x1*-0x155c+0x7c2*0x5),_0x254194[_0x1d6e91(0x431)](_0x4acf4e,_0x2ae473,-0x56a+-0x4a3*-0x8+-0xf77*0x2,_0x254194[_0x1d6e91(0x2a4)],-0x269a+0x1*-0x1da7+0x4441));if(_0xcdb308['damag'+_0x1d6e91(0x37c)]||_0x254194[_0x1d6e91(0x3d2)](_0xcdb308[_0x1d6e91(0x2fc)+_0x1d6e91(0x542)+'e'],0x2384+0x1c38+-0x112*0x3b)){var _0x5af726=Math[_0x1d6e91(0x351)](-0x1*0x1f83+0x3be*-0x1+-0x2*-0x11a1,Number(_0xcdb308[_0x1d6e91(0x2fc)+_0x1d6e91(0x542)+'e'])||-0x13ee+-0xead+0x2331);_0x4acf4e(_0x2ae473,0x7b2+-0x25ed+0x1edb,_0x1d6e91(0x487),_0x5af726);}_0xcdb308['infAm'+'mo']&&_0x254194[_0x1d6e91(0x431)](_0x4acf4e,_0x2ae473,-0x1aab*0x1+0x3a+0x1b4d,_0x254194['amdQA'],-0x1*0xed7+-0xb54+0x1e12),_0xcdb308[_0x1d6e91(0x666)+_0x1d6e91(0x110)]&&(_0x5e418f(_0x2ae473,0x1642+0x6b8*-0x4+0x52e,_0x1d6e91(0x487),0x1b9e+-0x40b+-0x1793*0x1+0.1),_0x4acf4e(_0x2ae473,-0x262c+-0x1*-0x143b+0x127d,_0x1d6e91(0x487),-(-0x31*-0xc7+-0xc12+0x161e*-0x1)));}else try{var _0x3658b0=new _0x48ddfc(_0x1dec5e)[_0x1d6e91(0x212)+_0x1d6e91(0x503)](_0x5496bc,_0x1d6e91(0x487));return _0x3658b0?_0x3658b0[_0x1d6e91(0x248)]():-0x900+-0x1*0xe50+-0x8*-0x2ea;}catch(_0x3eef39){return-0xad*0x13+0x67e+0x659;}}}catch(_0x26b97d){_0x1d6e91(0x64b)===_0x1d6e91(0xac)?(_0x4510fb[_0x1d6e91(0x666)+_0x1d6e91(0x110)]=_0x5cd6dd,_0x254194['GYRRk'](_0x34a990)):_0x39dd8f(_0x254194[_0x1d6e91(0x539)],_0x1d6e91(0x4f7)+'n\x20tic'+'k\x20thr'+_0x1d6e91(0x53e)+(_0x26b97d&&_0x26b97d[_0x1d6e91(0x11a)+'ge']));}_0x229f49++;},-0x31e*0x7+-0x1*0x1e70+0x1*0x350a),setInterval(()=>{var _0x875a6e=_0x599b38;_0x4706dd[_0x875a6e(0x3cf)+_0x875a6e(0x2a0)]=!!window['unity'+_0x875a6e(0x1a8)+'nce'];try{var _0x3beaa1=0x2*0xdf+0x8af+-0xa6d;for(var _0x31aceb in _0x162101){if(_0x254194[_0x875a6e(0x39d)]!==_0x254194['aQljT']){if(_0x162101[_0x31aceb]&&_0x162101[_0x31aceb][_0x875a6e(0x1dc)+'ed'])_0x3beaa1++;}else{if(_0x27dfce[_0x3abbdb]&&_0x2bbab2[_0x576ce1][_0x875a6e(0x1dc)+'ed'])_0xc7ab09++;}}_0x4706dd[_0x875a6e(0x438)+'Ok']=_0x3beaa1;if(_0x4706dd[_0x875a6e(0x438)+'Total']&&!_0x4706dd[_0x875a6e(0x1ae)+_0x875a6e(0x44e)+'ed']){_0x4706dd[_0x875a6e(0x1ae)+'sLogg'+'ed']=!![];for(var _0xa09b53 in _0x162101){var _0x20664a=_0x162101[_0xa09b53];_0x254194[_0x875a6e(0x22b)](_0x39dd8f,_0x875a6e(0x11c),_0x254194[_0x875a6e(0x3a8)](_0x254194[_0x875a6e(0x6e)](_0xa09b53+_0x254194[_0x875a6e(0x280)],!!_0x20664a['appli'+'ed'])+(_0x875a6e(0x369)+_0x875a6e(0x4f0)),!!_0x20664a[_0x875a6e(0x5ce)+'ed']));}}}catch(_0x47d2e6){}_0x4706dd[_0x875a6e(0x67a)+'rs']=_0x5455ec?_0x338e5a()[_0x875a6e(0x4cc)+'h']:0x5*-0x1fd+0x4d*0xe+0x5bb;},-0xd9*-0x13+0x18fc+-0x252f);var _0x1abc97=![];function _0x2df8a5(){var _0x111944=_0x599b38,_0x262d2c={'TQBVS':function(_0xba1e,_0x5b85c0){return _0xba1e!==_0x5b85c0;},'ubGND':function(_0x2e4239,_0x30230a){return _0x2e4239+_0x30230a;},'IffBl':_0x111944(0x369)+_0x111944(0x4f0),'GzRpW':function(_0x46ae8b,_0x48cf95,_0x4389e3){return _0x46ae8b(_0x48cf95,_0x4389e3);},'rYILG':'prese'+'nt'};if(_0x254194[_0x111944(0x4bb)]===_0x254194[_0x111944(0x4bb)]){if(!_0xcdb308[_0x111944(0x4f3)]||!_0xcdb308[_0x111944(0x463)])return;var _0xb57959=_0x3503e7(),_0x1cf4bc=_0x254194[_0x111944(0x3af)](_0xa24961);if(!_0xb57959||!_0x1cf4bc){if(_0x254194[_0x111944(0x132)]!==_0x111944(0x4cd)){var _0x2d68ec=_0x22132e['hookP'+'refix']({'typeName':_0x47ace6,'methodName':_0x2a0f75,'params':_0x249f92,'returnType':_0x1a6732},_0x4d5ede);return _0x2d68ec['enabl'+'ed']=_0x262d2c[_0x111944(0x651)](_0x11bf35,![]),_0x4107f8[_0x551ca6]=_0x2d68ec,_0x24c0de[_0x111944(0x438)+_0x111944(0x3cd)]++,_0xeb4475(_0x111944(0x11c),_0x262d2c[_0x111944(0x26c)](_0x262d2c[_0x111944(0x26c)](_0x262d2c['ubGND'](_0x3a945f+(_0x111944(0x189)+_0x111944(0x5e8)+'d:\x20')+_0x579ca1+'::'+_0x42c57f,'('),_0x595181[_0x111944(0x589)](',')),')')+(_0x41ee6e?_0x262d2c['ubGND'](_0x111944(0x526),_0x400a81):'')+_0x262d2c[_0x111944(0x486)]+_0x2d68ec['enabl'+'ed']),_0x2d68ec;}else{!_0x1abc97&&(_0x1abc97=!![],_0x39dd8f('esp',_0x254194[_0x111944(0x3c1)](_0x254194[_0x111944(0x426)](_0x111944(0x17a)+_0x111944(0x514)+'yet\x20—'+'\x20char'+'Cam='+_0x340b98(_0xc52743),'\x20loca'+'lTran'+'sform'+'='),_0x340b98(_0x2e38b7))));return;}}var _0x5eb150=_0x4bbd39(),_0x466861=_0x338e5a(),_0x305e8c=_0x40ba04?_0x500c70(_0x40ba04,-0x2*0x48b+-0x2670+0x2faa):0x3*-0xaf8+0x7*-0x2c5+0x344b;!_0x1abc97&&(_0x1abc97=!![],_0x39dd8f(_0x254194['FeayO'],_0x254194[_0x111944(0x27e)](_0x254194[_0x111944(0x27e)](_0x254194[_0x111944(0x5a2)](_0x111944(0x22d)+_0x111944(0x63f)+_0x111944(0x3d4)+_0x111944(0x5e9),JSON[_0x111944(0x43f)+_0x111944(0x4d5)](_0x1cf4bc))+_0x111944(0xab),_0x5eb150[_0x111944(0x215)+'ed'](0x1*-0x139+0xc3f*-0x1+-0x1*-0xd79)),_0x254194[_0x111944(0x20c)])+_0x466861[_0x111944(0x4cc)+'h']+('\x20basi'+_0x111944(0x208))+JSON['strin'+_0x111944(0x4d5)](_0xb57959['f'])));for(var _0x130063=-0x1923+-0x25c1+0x3ee4;_0x130063<_0x466861['lengt'+'h'];_0x130063++){var _0x381d58=_0x466861[_0x130063];if(!_0x381d58[_0x111944(0x5e1)])continue;if(_0x305e8c&&_0x254194[_0x111944(0x243)](_0x381d58[_0x111944(0x410)],_0x305e8c))continue;var _0x1daeed=_0x381d58[_0x111944(0x41b)]===-0x220f+-0x44f*0x1+-0x3*-0xcca?_0x254194['BGXQZ']:_0x254194[_0x111944(0x456)],_0x107f8c=Number(_0xcdb308[_0x111944(0x468)])||0x64e+-0xf23+0x8d6,_0x3556ab=_0x254194[_0x111944(0x5df)](_0x5616f2,_0x381d58['pos']['x'],_0x381d58['pos']['y'],_0x381d58[_0x111944(0x5e1)]['z'],_0xb57959,_0x1cf4bc,_0x5eb150),_0x50fae1=_0x5616f2(_0x381d58[_0x111944(0x5e1)]['x'],_0x254194[_0x111944(0x89)](_0x381d58['pos']['y'],Number(_0xcdb308['playe'+_0x111944(0x3d5)+'ht'])||-0x20ac+0x1828+0x885+0.8),_0x381d58[_0x111944(0x5e1)]['z'],_0xb57959,_0x1cf4bc,_0x5eb150);if(!_0x3556ab&&!_0x50fae1)continue;if(_0x3556ab&&_0x50fae1){var _0xe55d7b=Math[_0x111944(0x5cd)](_0x3556ab['y'],_0x50fae1['y']),_0x334602=Math[_0x111944(0x351)](0xd32+-0x1*-0xffd+-0x1d2b,Math[_0x111944(0x4ae)](_0x254194['PvsJF'](_0x3556ab['y'],_0x50fae1['y']))*_0x107f8c),_0x45d10b=Math['max'](-0xcd*0x2d+-0x826+-0x1*-0x2c35,_0x254194['jfATT'](_0x254194['pfoTK'](_0x334602,0x1*-0x2456+-0x40a*-0x8+0x406+0.45),_0x107f8c));if(_0xcdb308[_0x111944(0x41b)])_0xfedfb3[_0x111944(0x4e9)+'eStyl'+'e']=_0x1daeed;else _0xfedfb3[_0x111944(0x4e9)+_0x111944(0x173)+'e']=_0x111944(0x130)+'255,1'+_0x111944(0x36c)+_0x111944(0x25d);_0xfedfb3['lineW'+_0x111944(0x3b8)]=-0x1a1*-0x17+0x11*0x141+0x1d63*-0x2,_0xfedfb3[_0x111944(0x4e9)+'eRect'](_0x3556ab['x']-_0x45d10b/(0x1982*-0x1+-0x320+0x1ca4),_0xe55d7b,_0x45d10b,_0x334602);if(_0xcdb308[_0x111944(0x4ff)+'h']&&(_0x381d58[_0x111944(0x4ff)+'h']>-0x24d8+-0x38*0x1b+0x2ac0||_0x254194[_0x111944(0x30a)](_0x381d58[_0x111944(0xa7)+'d'],-0x938+-0xde+0x1*0xa16))){var _0x5f4169=Math['max'](0x7bd+-0xf74+0x7b7,Math[_0x111944(0x5cd)](-0x481*0x3+-0x2451+0x3238,_0x254194[_0x111944(0x3f0)](_0x381d58[_0x111944(0x4ff)+'h'],_0x381d58[_0x111944(0xa7)+'d']))),_0x256298=_0x45d10b*(_0x5f4169/(0x2*-0x33f+-0x12d9+-0x1*-0x19bb));_0xfedfb3[_0x111944(0x4f9)+_0x111944(0x2cb)]=_0x111944(0x130)+_0x111944(0x9e)+_0x111944(0x4eb)+_0x111944(0x44c),_0xfedfb3[_0x111944(0x3a0)+'ect'](_0x254194[_0x111944(0x345)](_0x3556ab['x'],_0x45d10b/(0x12fd*0x1+-0x2*0x157+-0x104d)),_0xe55d7b-(-0x194d*0x1+0x914+0x103f),_0x256298,0x150f+-0x4c5*0x2+-0x5f*0x1f),_0xfedfb3['strok'+'eStyl'+'e']=_0x254194[_0x111944(0x496)],_0xfedfb3[_0x111944(0x16f)+_0x111944(0x3b8)]=-0x1*0x23e3+-0x164d+0x3a31,_0xfedfb3['strok'+'eRect'](_0x3556ab['x']-_0x45d10b/(0x1058+0x249c+0x36*-0xfb),_0x254194['xiwvH'](_0xe55d7b,0xcbb*0x1+0xb3*-0x24+0xc77),_0x45d10b,-0x1f2b+-0x2635*0x1+0x4564);}_0xcdb308[_0x111944(0x48d)]&&_0x381d58['nickn'+'ame']&&(_0xfedfb3['fillS'+_0x111944(0x2cb)]=_0x111944(0x130)+_0x111944(0x21e)+_0x111944(0x211)+_0x111944(0x2a7),_0xfedfb3['font']='11px\x20'+'ui-sa'+_0x111944(0x56e)+'rif,s'+'ystem'+_0x111944(0x179)+'ans-s'+_0x111944(0x1d4),_0xfedfb3[_0x111944(0xa5)+_0x111944(0x1b8)]='cente'+'r',_0xfedfb3[_0x111944(0x662)+_0x111944(0x5a4)](_0x381d58['nickn'+_0x111944(0x2b6)],_0x3556ab['x'],_0xe55d7b-(-0x22fb+-0x12a5+0x35aa)));if(_0xcdb308['lines']){if(_0x111944(0x5a0)!=='KLDgu')_0x262d2c['GzRpW'](_0x2d3c85,'uwmk',_0x111944(0x79)+(_0x5d6d6e[_0x111944(0x325)+'WebMo'+_0x111944(0x464)]?_0x262d2c[_0x111944(0x435)]:_0x111944(0x470)+'NG')+(_0x5927b6[_0x111944(0x3e8)+_0x111944(0x404)]?_0x111944(0x294)+_0x111944(0x34a)+'de\x20on'+',\x20no\x20'+_0x111944(0x438)+'\x20arme'+'d':''));else{var _0x482289=_0x254194[_0x111944(0x53c)]['split']('|'),_0x5f7da0=-0x1b9f+-0x1e12+-0x133b*-0x3;while(!![]){switch(_0x482289[_0x5f7da0++]){case'0':_0xfedfb3['lineW'+_0x111944(0x3b8)]=0x7ae+-0x308*0x8+0x1093;continue;case'1':_0xfedfb3['moveT'+'o'](_0x254194[_0x111944(0x614)](_0x128a64['w'],0x2d9+-0xcf3+0xa1c),_0x128a64['h']);continue;case'2':_0xfedfb3[_0x111944(0x5bc)+'o'](_0x3556ab['x'],_0xe55d7b);continue;case'3':_0xfedfb3[_0x111944(0x5e5)+_0x111944(0x567)]();continue;case'4':_0xfedfb3[_0x111944(0x4e9)+'e']();continue;case'5':_0xfedfb3['setLi'+_0x111944(0x4ed)+'h']([-0x1b16+0x10c1*0x1+0xa5a,-0x64d*0x1+-0x1487*-0x1+-0xe35]);continue;case'6':_0xfedfb3['setLi'+_0x111944(0x4ed)+'h']([]);continue;case'7':_0xfedfb3[_0x111944(0x4e9)+_0x111944(0x173)+'e']=_0x1daeed;continue;}break;}}}}}}else{if(!_0x17bf78[_0x111944(0x2aa)][_0x111944(0x367)+'ins'](_0x1d9348))_0x54a0e4[_0x111944(0x2aa)]['appen'+_0x111944(0xde)+'d'](_0x35abc5);_0x43eee5['body']['appen'+_0x111944(0xde)+'d'](_0x1209d1),_0x5a6dc3['body']['appen'+_0x111944(0xde)+'d'](_0x377bbf),_0x254194['Xfupn'](_0x2cbb8a,_0x111944(0x65f),_0x254194[_0x111944(0x2f9)]);}}function _0x58a442(){var _0x4fbc6e=_0x599b38;requestAnimationFrame(_0x58a442),_0x254194['PweRK'](_0x48bf28),_0xfedfb3[_0x4fbc6e(0x9a)+_0x4fbc6e(0x6f)](-0x1*-0x7+0x246d*-0x1+0x2466*0x1,-0x1*0x435+-0x21d3+0x2608,_0x128a64['w'],_0x128a64['h']);if(!_0xcdb308[_0x4fbc6e(0x3e8)+_0x4fbc6e(0x404)])_0x254194[_0x4fbc6e(0x4ee)](_0x2df8a5);}var _0x50a2d=document[_0x599b38(0x2a5)+'eElem'+_0x599b38(0x442)](_0x599b38(0x31a)+'s');_0x50a2d[_0x599b38(0x361)]['cssTe'+'xt']='posit'+'ion:f'+_0x599b38(0x1f4)+'inset'+':0;wi'+_0x599b38(0x3ac)+'00vw;'+_0x599b38(0x401)+_0x599b38(0x66b)+_0x599b38(0x4d9)+'index'+_0x599b38(0x32c)+'48364'+_0x599b38(0x4b2)+'nter-'+_0x599b38(0x671)+_0x599b38(0x229)+'e';var _0xfedfb3=_0x50a2d['getCo'+'ntext']('2d'),_0x128a64={'w':0x0,'h':0x0,'dpr':0x0};function _0x48bf28(){var _0x483d07=_0x599b38,_0x2419a5=window['devic'+'ePixe'+'lRati'+'o']||-0x3f1+0x2*-0x8e4+-0x73e*-0x3,_0x4914e9=window[_0x483d07(0x679)+_0x483d07(0x284)],_0x1450ac=window['inner'+_0x483d07(0x34b)+'t'];if(_0x254194['GnZQA'](_0x4914e9,_0x128a64['w'])&&_0x1450ac===_0x128a64['h']&&_0x2419a5===_0x128a64[_0x483d07(0x633)])return;_0x128a64['w']=_0x4914e9,_0x128a64['h']=_0x1450ac,_0x128a64['dpr']=_0x2419a5,_0x50a2d[_0x483d07(0xc0)]=Math[_0x483d07(0x2d4)](_0x254194[_0x483d07(0x30f)](_0x4914e9,_0x2419a5)),_0x50a2d[_0x483d07(0x401)+'t']=Math[_0x483d07(0x2d4)](_0x1450ac*_0x2419a5),_0xfedfb3['setTr'+_0x483d07(0x16b)+'rm'](_0x2419a5,-0x25d+-0x1*-0x175+0x74*0x2,0x9*-0x28b+-0x1b9b+0x17*0x232,_0x2419a5,0xb8f+-0xa7e+-0x111,-0x1b5a+0x2646+0xe9*-0xc);}var _0x514d5b=document['creat'+_0x599b38(0x3ca)+'ent'](_0x599b38(0x5ad));_0x514d5b['id']='sakur'+_0x599b38(0x113)+_0x599b38(0x3dd),_0x514d5b[_0x599b38(0x361)][_0x599b38(0x399)+'xt']=_0x254194[_0x599b38(0x67d)];var _0x5b0dd5=_0x514d5b['attac'+_0x599b38(0x235)+'ow']({'mode':_0x254194[_0x599b38(0xfd)]}),_0x2772b5=![],_0xa088ca={};try{_0x254194[_0x599b38(0x7b)]!==_0x254194[_0x599b38(0x338)]?_0xa088ca=JSON['parse'](localStorage['getIt'+'em']('sakur'+_0x599b38(0x2fb)+_0x599b38(0x4b0)+'1')||'{}'):_0x333a2e[_0x599b38(0x548)+_0x599b38(0x53b)+'t']=_0x254194['tNUEY'];}catch(_0x56172a){}function _0x4d09b5(_0x2ee77f){var _0x7ef114=_0x599b38,_0x298de0=document['creat'+_0x7ef114(0x3ca)+_0x7ef114(0x442)](_0x254194['LFytl']);return _0x298de0['setAt'+'tribu'+'te'](_0x254194[_0x7ef114(0x579)],_0x254194['eotlz']),_0x298de0[_0x7ef114(0x679)+_0x7ef114(0x82)]='<svg\x20'+_0x7ef114(0x3b4)+_0x7ef114(0x3a7)+_0x7ef114(0x174)+_0x7ef114(0x2a2)+_0x2ee77f+(_0x7ef114(0xe8)+'>'),_0x298de0;}function _0x116cf6(_0x203983,_0x519133){var _0x246bca=_0x599b38;if('YsWdo'!==_0x246bca(0x30c)){var _0x5ab646=document['creat'+_0x246bca(0x3ca)+_0x246bca(0x442)](_0x254194['xsFoT']);return _0x5ab646['type']='butto'+'n',_0x5ab646[_0x246bca(0x5f4)+'Name']=_0x254194[_0x246bca(0x4e7)],_0x5ab646['setAt'+'tribu'+'te'](_0x254194[_0x246bca(0x327)],_0x246bca(0xa6)+'h'),_0x5ab646[_0x246bca(0x258)+_0x246bca(0x3d7)+'te'](_0x246bca(0x3d0)+'check'+'ed',String(!!_0x203983)),_0x5ab646['oncli'+'ck']=_0x3cb218=>{var _0x1ea46e=_0x246bca;_0x3cb218['stopP'+_0x1ea46e(0x621)+_0x1ea46e(0x1d2)]();var _0x1bc255=_0x5ab646[_0x1ea46e(0x222)+_0x1ea46e(0x3d7)+'te'](_0x254194['IESDM'])!==_0x1ea46e(0x5af);_0x5ab646['setAt'+_0x1ea46e(0x3d7)+'te']('aria-'+'check'+'ed',String(_0x1bc255)),_0x519133(_0x1bc255);},_0x5ab646;}else _0x33dff3['fillS'+_0x246bca(0x2cb)]=_0x246bca(0x130)+_0x246bca(0x21e)+_0x246bca(0x211)+_0x246bca(0x2a7),_0xb877cc[_0x246bca(0x52b)]='11px\x20'+'ui-sa'+_0x246bca(0x56e)+_0x246bca(0x4a9)+'ystem'+_0x246bca(0x179)+'ans-s'+'erif',_0xb6b23['textA'+'lign']=_0x246bca(0x126)+'r',_0x30b101['fillT'+'ext'](_0x2affa1[_0x246bca(0x31f)+_0x246bca(0x2b6)],_0x570189['x'],_0x14f9a5-(-0x1*0x1561+0x1d*0xa9+0x246));}function _0x5906a7(_0xd33b14,_0x2fe181,_0xe17468,_0x16314b,_0x349038){var _0xa5b446=_0x599b38,_0x9fe29f={'utaHy':function(_0xd27628,_0x19cd8b){var _0x16b676=_0x1070;return _0x254194[_0x16b676(0x53f)](_0xd27628,_0x19cd8b);},'GgZAX':function(_0x4ea387,_0x4c3372){var _0x498f39=_0x1070;return _0x254194[_0x498f39(0x4d4)](_0x4ea387,_0x4c3372);}};if(_0x254194['fqgcs']!==_0x254194['fqgcs']){var _0x121d63=_0x3700a6(_0x223955,_0x3c6a67=>{var _0x59cf15=_0x1070;_0x20c487[_0x59cf15(0x5f4)+_0x59cf15(0x58b)][_0x59cf15(0x31e)+'e']('on',_0x3c6a67),_0x3a9c4a(_0x3c6a67);});_0x2f44c8['appen'+'d'](_0x165b2b,_0x121d63);}else{var _0x514311=document[_0xa5b446(0x2a5)+_0xa5b446(0x3ca)+_0xa5b446(0x442)]('div');_0x514311[_0xa5b446(0x5f4)+'Name']='sk-ra'+_0xa5b446(0x278);var _0x6f5e74=document['creat'+_0xa5b446(0x3ca)+'ent']('input');_0x6f5e74[_0xa5b446(0x2d7)]=_0xa5b446(0x223),_0x6f5e74['class'+'Name']=_0x254194['lonPa'],_0x6f5e74[_0xa5b446(0x5cd)]=_0x2fe181,_0x6f5e74['max']=_0xe17468,_0x6f5e74[_0xa5b446(0x78)]=_0x16314b,_0x6f5e74[_0xa5b446(0x2e6)]=_0xd33b14;var _0x397d13=document['creat'+'eElem'+_0xa5b446(0x442)](_0x254194[_0xa5b446(0x9b)]);return _0x397d13['class'+_0xa5b446(0x100)]=_0xa5b446(0x2f8)+'l',_0x397d13[_0xa5b446(0x548)+_0xa5b446(0x53b)+'t']=Number(_0xd33b14)[_0xa5b446(0x215)+'ed'](-0x1*-0x8d2+0x124f+-0x35*0x83)['repla'+'ce'](/\.?0+$/,''),_0x6f5e74['oninp'+'ut']=()=>{var _0x48bb55=_0xa5b446;_0x397d13[_0x48bb55(0x548)+'onten'+'t']=Number(_0x6f5e74[_0x48bb55(0x2e6)])['toFix'+'ed'](-0xd*0x1e7+-0xeed*-0x2+-0x51d)[_0x48bb55(0x2ae)+'ce'](/\.?0+$/,''),_0x514311[_0x48bb55(0x361)][_0x48bb55(0x357)+'opert'+'y'](_0x48bb55(0x4f2),_0x9fe29f[_0x48bb55(0x53a)](_0x9fe29f['GgZAX'](_0x6f5e74['value']-_0x2fe181,_0xe17468-_0x2fe181),-0x3e2*-0x7+-0xa*0x5d+-0x1728)+'%'),_0x349038(Number(_0x6f5e74[_0x48bb55(0x2e6)]));},_0x514311['style']['setPr'+_0xa5b446(0x4b5)+'y']('--p',_0x254194['qdIrn'](_0xd33b14-_0x2fe181,_0x254194[_0xa5b446(0x352)](_0xe17468,_0x2fe181))*(-0x1*-0xf17+-0x3c5*0x1+-0xaee)+'%'),_0x514311['appen'+'d'](_0x6f5e74,_0x397d13),_0x514311;}}function _0x60e62f(_0x36b4b5,_0x3d5a32){var _0xc17a39=_0x599b38,_0x5e554d=document['creat'+_0xc17a39(0x3ca)+_0xc17a39(0x442)](_0x254194[_0xc17a39(0x186)]);_0x5e554d[_0xc17a39(0x5f4)+'Name']=_0xc17a39(0x425)+'l';var _0xa4ac6c=document['creat'+'eElem'+'ent']('span');return _0xa4ac6c['class'+'Name']=_0xc17a39(0x19b)+'bel',_0xa4ac6c[_0xc17a39(0x548)+_0xc17a39(0x53b)+'t']=_0x36b4b5,_0x5e554d[_0xc17a39(0x41c)+'d'](_0xa4ac6c,_0x3d5a32),_0x5e554d;}function _0x98f846(_0xaed27e,_0x359f42,_0x5a185e,_0x5a73dc){var _0xaae478=_0x599b38,_0x2a1acf=document[_0xaae478(0x2a5)+_0xaae478(0x3ca)+_0xaae478(0x442)]('div');_0x2a1acf['class'+_0xaae478(0x100)]=_0x254194[_0xaae478(0x162)](_0xaae478(0x603)+'rd',_0x359f42?'\x20on':'');var _0x1a2d9d=document['creat'+'eElem'+_0xaae478(0x442)](_0x254194[_0xaae478(0x186)]);_0x1a2d9d[_0xaae478(0x5f4)+_0xaae478(0x100)]=_0xaae478(0x603)+_0xaae478(0xa1)+'ad';var _0x550ce6=document[_0xaae478(0x2a5)+_0xaae478(0x3ca)+'ent']('div');_0x550ce6['class'+'Name']=_0x254194['OBGBv'];var _0x3a51bc=document[_0xaae478(0x2a5)+_0xaae478(0x3ca)+_0xaae478(0x442)]('stron'+'g');_0x3a51bc[_0xaae478(0x548)+_0xaae478(0x53b)+'t']=_0xaed27e,_0x550ce6['appen'+_0xaae478(0xde)+'d'](_0x3a51bc);if(_0x5a185e){if(_0x254194[_0xaae478(0x530)](_0xaae478(0x4fe),_0x254194[_0xaae478(0x641)]))_0x811377[_0xaae478(0x97)+_0xaae478(0x621)+_0xaae478(0x1d2)](),_0x2476d3();else{var _0x3b0053=_0x116cf6(_0x359f42,_0x1c7d78=>{var _0x4057da=_0xaae478;_0x2a1acf[_0x4057da(0x5f4)+'List'][_0x4057da(0x31e)+'e']('on',_0x1c7d78),_0x5a185e(_0x1c7d78);});_0x1a2d9d['appen'+'d'](_0x550ce6,_0x3b0053);}}else _0x1a2d9d[_0xaae478(0x41c)+'dChil'+'d'](_0x550ce6);_0x2a1acf['appen'+'dChil'+'d'](_0x1a2d9d);if(_0x5a73dc&&_0x5a73dc[_0xaae478(0x4cc)+'h']){if(_0x254194[_0xaae478(0xb5)]===_0x254194[_0xaae478(0xb5)]){var _0x141996=document['creat'+_0xaae478(0x3ca)+_0xaae478(0x442)](_0x254194[_0xaae478(0x186)]);_0x141996[_0xaae478(0x5f4)+_0xaae478(0x100)]='sk-mb'+_0xaae478(0x29c);for(var _0x3938da of _0x5a73dc)_0x141996['appen'+_0xaae478(0xde)+'d'](_0x3938da);_0x2a1acf['appen'+_0xaae478(0xde)+'d'](_0x141996);}else _0x426056['gravi'+_0xaae478(0x663)]=_0xc51b74,_0x2efb1d();}return _0x2a1acf;}function _0x343820(_0x2dd704){var _0x1adafb=_0x599b38,_0x11b0ca=(_0x1adafb(0x302)+'|2|4')['split']('|'),_0x2d06f6=-0x28*0xdd+0x1ce4+-0x5a4*-0x1;while(!![]){switch(_0x11b0ca[_0x2d06f6++]){case'0':_0x36ffd1[_0x1adafb(0x361)]['cssTe'+'xt']=_0x254194[_0x1adafb(0x58f)];continue;case'1':_0x36ffd1['class'+_0x1adafb(0x100)]='sk-ct'+'l';continue;case'2':_0x36ffd1['textC'+_0x1adafb(0x53b)+'t']=_0x2dd704;continue;case'3':var _0x36ffd1=document[_0x1adafb(0x2a5)+_0x1adafb(0x3ca)+_0x1adafb(0x442)](_0x1adafb(0x5ad));continue;case'4':return _0x36ffd1;}break;}}function _0x2e8bb0(_0x52cacb,_0x5cc692){var _0x552f59=_0x599b38,_0x3e0814=document['creat'+_0x552f59(0x3ca)+_0x552f59(0x442)](_0x254194['xsFoT']);return _0x3e0814['type']=_0x254194['xsFoT'],_0x3e0814['textC'+'onten'+'t']=_0x52cacb,_0x3e0814[_0x552f59(0x361)][_0x552f59(0x399)+'xt']=_0x552f59(0x380)+_0x552f59(0x5bf)+_0x552f59(0xdc)+_0x552f59(0x197)+_0x552f59(0x5f8)+',107,'+_0x552f59(0xb6)+'4);ba'+'ckgro'+'und:r'+_0x552f59(0x43a)+_0x552f59(0xbe)+'7,157'+_0x552f59(0x61f)+_0x552f59(0x462)+_0x552f59(0x49f)+_0x552f59(0x5ca)+_0x552f59(0x380)+'r-rad'+_0x552f59(0x3e0)+'px;pa'+_0x552f59(0x547)+_0x552f59(0x13f)+_0x552f59(0x40c)+'font-'+_0x552f59(0x63b)+'11px;'+'curso'+'r:poi'+_0x552f59(0x3e7),_0x3e0814[_0x552f59(0x60c)+'ck']=_0x5868ee=>{var _0x584657=_0x552f59;_0x5868ee['stopP'+'ropag'+'ation'](),_0x254194[_0x584657(0x1a9)](_0x5cc692);},_0x3e0814;}function _0x583f88(){var _0x544db4=_0x599b38,_0x2b8eab={'fRYjn':_0x544db4(0x282)+'|3|0','HGfUY':function(_0x3d15f7,_0xfb61df){var _0x9dda5c=_0x544db4;return _0x254194[_0x9dda5c(0x293)](_0x3d15f7,_0xfb61df);},'BdlNN':function(_0x33de46,_0x5f1985){return _0x254194['ByKKL'](_0x33de46,_0x5f1985);},'RFwYf':_0x544db4(0x1be),'dBKHk':function(_0x14be77){var _0x4e49f0=_0x544db4;return _0x254194[_0x4e49f0(0x1a9)](_0x14be77);},'PaUlU':function(_0x1a7b43){var _0x5d6cfe=_0x544db4;return _0x254194[_0x5d6cfe(0x3af)](_0x1a7b43);},'XHeDC':function(_0x372578,_0x22ce90,_0x2cac1a){var _0x355dc5=_0x544db4;return _0x254194[_0x355dc5(0x396)](_0x372578,_0x22ce90,_0x2cac1a);},'zxpoP':'cLURh','GpwAL':_0x254194['NioJG'],'AeEAI':_0x254194['FeayO'],'bJYur':function(_0x476986,_0x59c668){return _0x476986+_0x59c668;},'fdvjx':_0x544db4(0x1c8),'qknZC':'sakur'+_0x544db4(0x63e)+'-log.'+'txt','UJOVc':_0x544db4(0x5ad),'mIHfE':function(_0x29bd3d,_0xd4d3a8,_0x596a78){return _0x29bd3d(_0xd4d3a8,_0x596a78);},'KVuqt':'Copy\x20'+_0x544db4(0x49e),'Iybpa':_0x544db4(0x320)+'to\x20co'+'nsole'+_0x544db4(0x49b),'ouXJp':function(_0x9bfc9a,_0x5eaacb,_0x36bb28){return _0x9bfc9a(_0x5eaacb,_0x36bb28);},'Bkhik':_0x544db4(0x36b),'hqJWY':_0x254194['OrkmS'],'bsuEq':_0x544db4(0x2bd),'AimSo':_0x254194['dXEIz'],'VjBzd':function(_0x2434d3,_0x32dad3,_0x274d63){return _0x254194['WNvCu'](_0x2434d3,_0x32dad3,_0x274d63);},'zZkjN':_0x544db4(0x175),'LwlOV':'No\x20re'+_0x544db4(0x2f7)+'(hook'+')','FhTgt':function(_0x2bfa02,_0x3dc721,_0x498ef0){return _0x2bfa02(_0x3dc721,_0x498ef0);},'fbsyk':function(_0x22dad7,_0x1bf693,_0x55f89d){var _0x365542=_0x544db4;return _0x254194[_0x365542(0x309)](_0x22dad7,_0x1bf693,_0x55f89d);},'hQtRt':_0x254194[_0x544db4(0x199)],'DeIkr':function(_0x50b13e,_0x45da1f,_0x287f15,_0x5ded1d,_0x59baeb,_0x49fe7e){return _0x254194['wyCKI'](_0x50b13e,_0x45da1f,_0x287f15,_0x5ded1d,_0x59baeb,_0x49fe7e);},'drCfh':function(_0x1b1555,_0x672c6,_0x287edd){return _0x254194['KMTxM'](_0x1b1555,_0x672c6,_0x287edd);},'OGeNS':function(_0x114925,_0x5ff1b6,_0x1b3ce7){return _0x114925(_0x5ff1b6,_0x1b3ce7);},'FhAZJ':function(_0x537eab,_0x2f3991,_0x17d211,_0x296bdf,_0x31e188){var _0x519816=_0x544db4;return _0x254194[_0x519816(0x62f)](_0x537eab,_0x2f3991,_0x17d211,_0x296bdf,_0x31e188);},'QkHub':_0x544db4(0x319)+'ent','oHFGi':function(_0x391991,_0x373fe0,_0x27277b,_0x5907a3,_0x4f6e18,_0x54b01d){return _0x391991(_0x373fe0,_0x27277b,_0x5907a3,_0x4f6e18,_0x54b01d);},'boKSq':function(_0x3ba5f2,_0xa1df90,_0x50129a,_0x3a43f8,_0x25ffe3,_0x5155f4){return _0x3ba5f2(_0xa1df90,_0x50129a,_0x3a43f8,_0x25ffe3,_0x5155f4);},'jgIVt':_0x254194['riHvB'],'wQylT':_0x544db4(0x661)+_0x544db4(0x480),'QVgZM':function(_0x5d450a,_0x4fc96e,_0x56ba0a){return _0x5d450a(_0x4fc96e,_0x56ba0a);},'AJZyP':_0x254194[_0x544db4(0x38b)],'ZJOUk':function(_0x1e3dc5,_0x44d6e5,_0x59f416,_0x567c0a,_0x5f5537,_0xf452b3){return _0x254194['kWYjs'](_0x1e3dc5,_0x44d6e5,_0x59f416,_0x567c0a,_0x5f5537,_0xf452b3);},'GsTuE':_0x254194[_0x544db4(0x2d5)],'HDHCX':function(_0x23fbe3,_0x5e7937,_0x4540e6,_0x281e84,_0x293d8f,_0x4d0aaa){return _0x254194['kWYjs'](_0x23fbe3,_0x5e7937,_0x4540e6,_0x281e84,_0x293d8f,_0x4d0aaa);},'qNOhQ':function(_0x1278f9,_0x5e0aa8,_0x2e9312){var _0x51b7cc=_0x544db4;return _0x254194[_0x51b7cc(0x30b)](_0x1278f9,_0x5e0aa8,_0x2e9312);},'Cmezn':_0x254194['RxKRz'],'SbgGN':function(_0x5328a8,_0x51ff0b,_0x41d24b){return _0x5328a8(_0x51ff0b,_0x41d24b);},'EuugJ':_0x254194[_0x544db4(0x266)],'XZgoz':function(_0x4c0777,_0x201e4f){return _0x4c0777(_0x201e4f);},'tIFzX':function(_0x2bd1d0,_0x141001){var _0x26bca4=_0x544db4;return _0x254194[_0x26bca4(0x66c)](_0x2bd1d0,_0x141001);},'XLMnD':function(_0x18ad89,_0x33ea40){return _0x18ad89+_0x33ea40;},'fgwKK':_0x254194[_0x544db4(0x54a)],'wDqIa':function(_0x49b0f0,_0x2041e8){var _0x7cf4b0=_0x544db4;return _0x254194[_0x7cf4b0(0x421)](_0x49b0f0,_0x2041e8);},'pZetQ':_0x544db4(0xcf)},_0x4be5e3=document[_0x544db4(0x2a5)+'eElem'+_0x544db4(0x442)]('div');_0x4be5e3[_0x544db4(0x5f4)+'Name']=_0x544db4(0x5ab)+'nel';var _0x507ac2=document[_0x544db4(0x2a5)+_0x544db4(0x3ca)+_0x544db4(0x442)](_0x254194['dWEaN']);_0x507ac2[_0x544db4(0x5f4)+_0x544db4(0x100)]=_0x254194[_0x544db4(0x244)];var _0x23df96=document['creat'+_0x544db4(0x3ca)+_0x544db4(0x442)](_0x254194['NunJW']);_0x23df96['class'+_0x544db4(0x100)]=_0x254194[_0x544db4(0x39a)],_0x23df96[_0x544db4(0x679)+'HTML']='<svg\x20'+_0x544db4(0x3b4)+_0x544db4(0x3a7)+_0x544db4(0x174)+'\x2024\x22>'+'<defs'+_0x544db4(0x106)+_0x544db4(0x4b6)+'adien'+'t\x20id='+_0x544db4(0x607)+'rad\x22\x20'+_0x544db4(0x19e)+'\x22\x20y1='+'\x223\x22\x20x'+'2=\x2220'+_0x544db4(0x665)+_0x544db4(0x3ab)+'gradi'+'entUn'+_0x544db4(0x1a3)+_0x544db4(0x116)+_0x544db4(0x5f6)+_0x544db4(0x2b2)+'><sto'+_0x544db4(0x54f)+'set=\x22'+'0\x22\x20st'+'op-co'+'lor=\x22'+_0x544db4(0x5fd)+_0x544db4(0x48e)+_0x544db4(0x5f1)+'\x20offs'+_0x544db4(0x366)+'.45\x22\x20'+'stop-'+_0x544db4(0x245)+_0x544db4(0x392)+_0x544db4(0x47f)+'/><st'+_0x544db4(0x149)+_0x544db4(0x61e)+_0x544db4(0x101)+_0x544db4(0x1cb)+_0x544db4(0x412)+_0x544db4(0x14f)+'b9d\x22/'+_0x544db4(0x335)+'nearG'+_0x544db4(0x2d6)+_0x544db4(0x670)+'defs>'+_0x544db4(0x4b3)+'\x20d=\x22M'+'12\x2021'+'c-1.5'+'-2.5-'+_0x544db4(0x70)+_0x544db4(0x439)+_0x544db4(0x46d)+'.5\x201.'+_0x544db4(0x49c)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x544db4(0xe0)+_0x544db4(0x64e)+'5-4\x207'+'.5z\x22\x20'+_0x544db4(0x35a)+'\x22none'+_0x544db4(0x3b2)+_0x544db4(0x8d)+_0x544db4(0x2f6)+_0x544db4(0x422)+_0x544db4(0x3a4)+'strok'+'e-wid'+_0x544db4(0x585)+_0x544db4(0x3b2)+_0x544db4(0x60f)+_0x544db4(0xd6)+_0x544db4(0x2ac)+_0x544db4(0x4dd)+_0x544db4(0x4e9)+'e-lin'+_0x544db4(0x80)+_0x544db4(0x12c)+_0x544db4(0x299)+'<path'+_0x544db4(0x574)+'12\x203v'+'4M12\x20'+_0x544db4(0xea)+_0x544db4(0x46d)+'.5\x201-'+_0x544db4(0x660)+_0x544db4(0x447)+'\x203c1.'+_0x544db4(0x3ef)+'.5\x201\x20'+'2.5\x202'+_0x544db4(0x5e3)+_0x544db4(0x678)+_0x544db4(0x46f)+_0x544db4(0x133)+'ke=\x22u'+'rl(#s'+'k-gra'+'d)\x22\x20s'+_0x544db4(0x1e2)+_0x544db4(0x3ba)+_0x544db4(0x12f)+_0x544db4(0x1ce)+_0x544db4(0x50a)+_0x544db4(0x246)+_0x544db4(0x4c6)+_0x544db4(0x5dd)+'/><ci'+_0x544db4(0x533)+_0x544db4(0x2b3)+'2\x22\x20cy'+_0x544db4(0x5f2)+'\x20r=\x221'+'.5\x22\x20f'+_0x544db4(0x678)+_0x544db4(0x4c5)+_0x544db4(0x45f)+'</svg'+'>',_0x507ac2[_0x544db4(0x41c)+'dChil'+'d'](_0x23df96);var _0x21d8a9=document[_0x544db4(0x2a5)+_0x544db4(0x3ca)+_0x544db4(0x442)](_0x254194[_0x544db4(0x186)]);_0x21d8a9[_0x544db4(0x5f4)+_0x544db4(0x100)]=_0x254194[_0x544db4(0x33a)];var _0x1168a8=document[_0x544db4(0x2a5)+'eElem'+_0x544db4(0x442)](_0x544db4(0x5f5)+'r');_0x1168a8[_0x544db4(0x5f4)+_0x544db4(0x100)]='mn-to'+'p';var _0xa66813=document['creat'+_0x544db4(0x3ca)+_0x544db4(0x442)]('h2');_0xa66813[_0x544db4(0x5f4)+_0x544db4(0x100)]=_0x544db4(0x1bd),_0xa66813[_0x544db4(0x548)+'onten'+'t']='2v2.i'+'o';var _0xc406d=document[_0x544db4(0x2a5)+'eElem'+_0x544db4(0x442)](_0x254194[_0x544db4(0x288)]);_0xc406d[_0x544db4(0x2d7)]='butto'+'n',_0xc406d['class'+'Name']='mn-cl'+_0x544db4(0x381),_0xc406d[_0x544db4(0x679)+_0x544db4(0x82)]=_0x544db4(0x3ff)+_0x544db4(0x3b4)+_0x544db4(0x3a7)+_0x544db4(0x174)+_0x544db4(0x2a2)+'<path'+_0x544db4(0x574)+'6\x206l1'+_0x544db4(0x521)+'18\x206\x20'+_0x544db4(0xed)+'/></s'+'vg>',_0xc406d['oncli'+'ck']=()=>_0x2d132f(![]),_0x1168a8[_0x544db4(0x41c)+'d'](_0xa66813,_0xc406d);var _0x3b7b1c=null;_0x1168a8[_0x544db4(0x51d)+_0x544db4(0x3a3)+'stene'+'r'](_0x544db4(0x37a)+_0x544db4(0x578)+'n',_0x36a439=>{var _0x270bc3=_0x544db4,_0x518d03=_0x2b8eab['fRYjn'][_0x270bc3(0x441)]('|'),_0x149662=-0x23ae*0x1+0x2484+0x2*-0x6b;while(!![]){switch(_0x518d03[_0x149662++]){case'0':_0x4be5e3[_0x270bc3(0x5f4)+_0x270bc3(0x58b)][_0x270bc3(0x46b)](_0x270bc3(0x34c)+_0x270bc3(0x2ad)+'g');continue;case'1':if(_0x36a439[_0x270bc3(0x5d4)+'t']['close'+'st'](_0x270bc3(0x52c)+_0x270bc3(0x406)+_0x270bc3(0x1b9)))return;continue;case'2':var _0x4191e4=_0x4be5e3['getBo'+_0x270bc3(0x6a)+_0x270bc3(0x5e2)+_0x270bc3(0x471)+'t']();continue;case'3':_0x1168a8['setPo'+'inter'+_0x270bc3(0x444)+'re'](_0x36a439[_0x270bc3(0x37a)+'erId']);continue;case'4':_0x3b7b1c=[_0x2b8eab['HGfUY'](_0x36a439['clien'+'tX'],_0x4191e4[_0x270bc3(0x1f8)]),_0x36a439[_0x270bc3(0x3ed)+'tY']-_0x4191e4['top']];continue;}break;}}),_0x1168a8[_0x544db4(0x51d)+_0x544db4(0x3a3)+'stene'+'r']('point'+'ermov'+'e',_0x2e0489=>{var _0x4de9c3=_0x544db4,_0x3e3731=_0x254194['rTLGp']['split']('|'),_0x543388=0x2*-0x683+-0x1173*-0x1+0x46d*-0x1;while(!![]){switch(_0x3e3731[_0x543388++]){case'0':_0x4be5e3[_0x4de9c3(0x361)][_0x4de9c3(0x1bf)]='auto';continue;case'1':if(!_0x3b7b1c)return;continue;case'2':_0x4be5e3[_0x4de9c3(0x361)][_0x4de9c3(0x1f8)]=Math['min'](Math['max'](0x13*-0xc5+-0x18be+0x275d,_0x2e0489['clien'+'tX']-_0x3b7b1c[0x472+-0x1b70+0x16fe*0x1]),window[_0x4de9c3(0x679)+'Width']-(0xe8a*0x1+0x1533+-0x22f5))+'px';continue;case'3':_0x4be5e3['style']['top']=Math[_0x4de9c3(0x5cd)](Math[_0x4de9c3(0x351)](0x2ef*0x3+0x1b17+-0x4*0x8f9,_0x2e0489['clien'+'tY']-_0x3b7b1c[0x14f3+0x16cf+-0x1e7*0x17]),_0x254194['LsiVi'](window[_0x4de9c3(0x679)+'Heigh'+'t'],-0x1f56+-0x5*0x57a+0x3b1c))+'px';continue;case'4':_0x4be5e3['style'][_0x4de9c3(0x269)+'m']=_0x254194[_0x4de9c3(0xd1)];continue;}break;}});var _0x472414=()=>{var _0x4a2d98=_0x544db4;if(!_0x3b7b1c)return;_0x3b7b1c=null,_0x4be5e3[_0x4a2d98(0x5f4)+_0x4a2d98(0x58b)][_0x4a2d98(0x505)+'e'](_0x4a2d98(0x34c)+'aggin'+'g');var _0x431b58=_0x4be5e3[_0x4a2d98(0x38e)+_0x4a2d98(0x6a)+_0x4a2d98(0x5e2)+_0x4a2d98(0x471)+'t']();_0xa088ca['x']=_0x431b58[_0x4a2d98(0x1f8)],_0xa088ca['y']=_0x431b58[_0x4a2d98(0x564)],_0x308546();};_0x1168a8[_0x544db4(0x51d)+'entLi'+'stene'+'r'](_0x254194['IkrFx'],_0x472414),_0x1168a8['addEv'+_0x544db4(0x3a3)+'stene'+'r']('point'+_0x544db4(0x298)+_0x544db4(0x61c),_0x472414);var _0x70334c=document['creat'+_0x544db4(0x3ca)+_0x544db4(0x442)]('div');_0x70334c[_0x544db4(0x5f4)+'Name']=_0x254194[_0x544db4(0x2be)],_0x21d8a9['appen'+'d'](_0x1168a8,_0x70334c),_0x4be5e3[_0x544db4(0x41c)+'d'](_0x507ac2,_0x21d8a9);function _0x59919a(){var _0x20b1ac=_0x544db4,_0x609c2f={'YKcJF':function(_0x39fcb1,_0x523c2f){return _0x39fcb1+_0x523c2f;},'qkmeY':function(_0x10d0ea,_0x559043){return _0x10d0ea(_0x559043);},'QRjQf':function(_0x2e16b6,_0x1add34){return _0x2e16b6!==_0x1add34;},'JgsLA':function(_0x1088f7){return _0x1088f7();},'JRTod':function(_0x9232f6){return _0x9232f6();},'LSIIJ':_0x20b1ac(0x11c),'ThgWQ':function(_0x23f0e5,_0x2f0126){return _0x2b8eab['bJYur'](_0x23f0e5,_0x2f0126);},'ISEcP':_0x2b8eab['hqJWY'],'UYjgb':function(_0x4a5a9a,_0x34b205){return _0x4a5a9a===_0x34b205;},'ixxVJ':_0x20b1ac(0x597)};return[_0x98f846('ESP\x20—'+_0x20b1ac(0x432)+'er\x20sc'+'hema',_0xcdb308[_0x20b1ac(0x4f3)],_0x37923c=>{_0xcdb308['esp']=_0x37923c,_0x852f4();},[_0x60e62f(_0x2b8eab['bsuEq'],_0x116cf6(_0xcdb308[_0x20b1ac(0x463)],_0x38ead6=>{_0xcdb308['boxes']=_0x38ead6,_0x852f4();})),_0x2b8eab['ouXJp'](_0x60e62f,_0x2b8eab[_0x20b1ac(0x2f3)],_0x116cf6(_0xcdb308['names'],_0x24d5e7=>{_0xcdb308['names']=_0x24d5e7,_0x852f4();})),_0x2b8eab['VjBzd'](_0x60e62f,_0x20b1ac(0x507)+'h',_0x116cf6(_0xcdb308[_0x20b1ac(0x4ff)+'h'],_0x1542ec=>{var _0x345889=_0x20b1ac;_0x2b8eab[_0x345889(0x11f)]('JBrIi',_0x2b8eab[_0x345889(0x47d)])?(_0x506f6d['damag'+_0x345889(0x542)+'e']=_0x38759e,_0xd89e44()):(_0xcdb308[_0x345889(0x4ff)+'h']=_0x1542ec,_0x852f4());})),_0x2b8eab[_0x20b1ac(0x362)](_0x60e62f,'Team\x20'+_0x20b1ac(0x245)+'s',_0x116cf6(_0xcdb308[_0x20b1ac(0x41b)],_0x518f0b=>{_0xcdb308['team']=_0x518f0b,_0x852f4();})),_0x60e62f(_0x20b1ac(0x5c4),_0x116cf6(_0xcdb308[_0x20b1ac(0x339)],_0x4926a1=>{var _0x37c51a=_0x20b1ac;_0xcdb308[_0x37c51a(0x339)]=_0x4926a1,_0x852f4();})),_0x2b8eab[_0x20b1ac(0x362)](_0x60e62f,_0x2b8eab['zZkjN'],_0x5906a7(_0xcdb308['scale'],0x155e+0x21d2+0x8*-0x6e6+0.5,-0x87a+0x2476+0x2*-0xdfd,0x3*0x695+0xd*0x15a+0x2551*-0x1+0.05,_0x5d9da0=>{var _0x11731f=_0x20b1ac;_0xcdb308[_0x11731f(0x468)]=_0x5d9da0,_0x2b8eab[_0x11731f(0x3f1)](_0x852f4);}))]),_0x98f846('Comba'+'t',![],null,[_0x2b8eab[_0x20b1ac(0x362)](_0x60e62f,_0x2b8eab['LwlOV'],_0x2b8eab[_0x20b1ac(0x561)](_0x116cf6,_0xcdb308[_0x20b1ac(0x592)+'oil'],_0x22f48c=>{var _0x4e599e=_0x20b1ac;_0xcdb308['noRec'+'oil']=_0x22f48c,_0x2b8eab[_0x4e599e(0x3f1)](_0x852f4);})),_0x60e62f(_0x20b1ac(0x15c)+'oom',_0x116cf6(_0xcdb308[_0x20b1ac(0x35e)+'ead'],_0x442b5b=>{var _0x391d5d=_0x20b1ac;_0xcdb308['noSpr'+_0x391d5d(0x382)]=_0x442b5b,_0x852f4();})),_0x2b8eab[_0x20b1ac(0x362)](_0x60e62f,_0x20b1ac(0x625)+'\x20fire',_0x2b8eab[_0x20b1ac(0x606)](_0x116cf6,_0xcdb308['rapid'+_0x20b1ac(0x110)],_0x244634=>{var _0x19b269=_0x20b1ac;_0xcdb308[_0x19b269(0x666)+'Fire']=_0x244634,_0x852f4();})),_0x60e62f(_0x2b8eab[_0x20b1ac(0x4c2)],_0x2b8eab[_0x20b1ac(0x516)](_0x5906a7,_0xcdb308[_0x20b1ac(0x2fc)+_0x20b1ac(0x542)+'e'],0x1854+-0x225a+0xa07,-0x6b*0x25+-0x1934+0x2a9f,0x1*0xd8+0x1*0x1a18+-0x23*0xc5,_0xb9b354=>{var _0x5ce15c=_0x20b1ac;_0xcdb308[_0x5ce15c(0x2fc)+'eValu'+'e']=_0xb9b354,_0x852f4();})),_0x2b8eab['drCfh'](_0x60e62f,_0x20b1ac(0xc5)+_0x20b1ac(0x4a0)+'mmo',_0x2b8eab['OGeNS'](_0x116cf6,_0xcdb308[_0x20b1ac(0x2d9)+'mo'],_0x147bf7=>{var _0x56f9ee=_0x20b1ac;if(_0x609c2f['QRjQf'](_0x56f9ee(0x5b3),_0x56f9ee(0x22f)))_0xcdb308[_0x56f9ee(0x2d9)+'mo']=_0x147bf7,_0x852f4();else{if(!_0x5d73b5)return null;var _0xb27940=_0x55484a(_0xb55ded,-0x1e5*-0xb+0x1*0x977+0xd*-0x252);if(!_0xb27940||_0xb27940['x']===0x1fd6+-0x14d7+0x1*-0xaff&&_0xb27940['y']===-0xe*0x262+-0x5e4+0x2740&&_0xb27940['z']===-0x1327*-0x1+0x497+-0xbdf*0x2)return null;return{'x':_0xb27940['x'],'y':_0x609c2f[_0x56f9ee(0x55a)](_0xb27940['y'],_0x609c2f['qkmeY'](_0x1f57ec,_0x220232['camHe'+'ight'])||0x1*-0x1607+0x193d+0x335*-0x1+0.6000000000000001),'z':_0xb27940['z']};}}))]),_0x2b8eab[_0x20b1ac(0x20d)](_0x98f846,_0x2b8eab[_0x20b1ac(0x2b7)],![],null,[_0x60e62f(_0x20b1ac(0x616)+'\x20%',_0x2b8eab[_0x20b1ac(0x3c0)](_0x5906a7,_0xcdb308[_0x20b1ac(0x376)+_0x20b1ac(0x5d0)],-0x3b3*-0x5+0x73c+0x3*-0x883,-0x21d7+-0x1e86+0x147*0x33,-0x2*0xa7e+-0x1550+0x2a4d,_0x1d6ed8=>{_0xcdb308['speed'+'Pct']=_0x1d6ed8,_0x852f4();})),_0x60e62f('Jump\x20'+'%',_0x2b8eab[_0x20b1ac(0xe2)](_0x5906a7,_0xcdb308[_0x20b1ac(0x40f)+'ct'],0xea5+-0x878+0x1*-0x5fb,-0xc*0xb2+-0x37*-0x77+-0x57b*0x3,0x478+0x9c3+0xe3a*-0x1,_0x3d0edd=>{var _0x34b534=_0x20b1ac;_0xcdb308[_0x34b534(0x40f)+'ct']=_0x3d0edd,_0x852f4();})),_0x60e62f(_0x20b1ac(0x64)+_0x20b1ac(0x1e5),_0x5906a7(_0xcdb308['gravi'+'tyPct'],0x822+0x68*-0x5b+0x1ce0,-0x1d2*-0x13+-0x1cbd+-0x511,0xf40+0x22f9*-0x1+0x13ba,_0x35e183=>{var _0x3c2abf=_0x20b1ac;_0xcdb308['gravi'+_0x3c2abf(0x663)]=_0x35e183,_0x852f4();}))]),_0x98f846(_0x2b8eab[_0x20b1ac(0x3aa)],![],null,[_0x60e62f(_0x2b8eab[_0x20b1ac(0x363)],_0x5906a7(_0xcdb308[_0x20b1ac(0x18b)+_0x20b1ac(0x127)],0x66+-0x1c2a+0x1*0x1bc4+0.8,-0xc*0x1be+0x1056+0x494+0.6000000000000001,0x1b96+-0x2*-0x712+-0x2fb*0xe+0.02,_0x3de55e=>{var _0xf643c3=_0x20b1ac;_0xcdb308[_0xf643c3(0x18b)+_0xf643c3(0x127)]=_0x3de55e,_0x609c2f[_0xf643c3(0x638)](_0x852f4);})),_0x2b8eab[_0x20b1ac(0x342)](_0x60e62f,_0x2b8eab[_0x20b1ac(0x1b5)],_0x2b8eab[_0x20b1ac(0x303)](_0x5906a7,_0xcdb308['playe'+'rHeig'+'ht'],0x1310*0x1+-0x7*0x45b+0xb6e+0.19999999999999996,0x3*0x20e+-0x4ff*-0x7+-0x2921+0.3999999999999999,-0xce6+-0x427*0x9+-0x2f5*-0x11+0.02,_0x21a181=>{var _0x35cd16=_0x20b1ac;_0xcdb308[_0x35cd16(0x67a)+_0x35cd16(0x3d5)+'ht']=_0x21a181,_0x2b8eab['PaUlU'](_0x852f4);})),_0x60e62f(_0x2b8eab['GsTuE'],_0x2b8eab['HDHCX'](_0x5906a7,_0xcdb308['fovOv'+_0x20b1ac(0xf0)+'e'],0x124+-0x2f*-0x43+-0xd71,0x2*-0x3c7+-0x486*0x7+-0x7f*-0x50,0x170c+0x6*0x2ef+-0x28a5*0x1,_0x6c2ed5=>{var _0x5e78dc=_0x20b1ac;_0xcdb308[_0x5e78dc(0x3dc)+_0x5e78dc(0xf0)+'e']=_0x6c2ed5,_0x609c2f[_0x5e78dc(0x86)](_0x852f4);}))]),_0x2b8eab['FhAZJ'](_0x98f846,_0x20b1ac(0x62a)+'y',_0xcdb308[_0x20b1ac(0x3e8)+_0x20b1ac(0x404)],_0x5be450=>{var _0x74996d=_0x20b1ac;_0xcdb308[_0x74996d(0x3e8)+_0x74996d(0x404)]=_0x5be450,_0x2b8eab[_0x74996d(0x3f1)](_0x852f4);if(_0x5be450){for(var _0x443894 in _0x162101)_0x2b8eab['XHeDC'](_0x54d9ae,_0x443894,![]);}},[_0x2b8eab[_0x20b1ac(0x434)](_0x60e62f,_0x2b8eab['Cmezn'],_0x116cf6(_0xcdb308[_0x20b1ac(0x17c)+_0x20b1ac(0x28d)+'e'],_0x308559=>{var _0x5cf968=_0x20b1ac;_0xcdb308['hookC'+_0x5cf968(0x28d)+'e']=_0x308559,_0x852f4();})),_0x2b8eab[_0x20b1ac(0x342)](_0x60e62f,'Hook:'+'\x20room'+'/stat'+'e',_0x2b8eab['SbgGN'](_0x116cf6,_0xcdb308[_0x20b1ac(0xe4)+_0x20b1ac(0xb2)],_0x1b691e=>{var _0x379861=_0x20b1ac;if(_0x2b8eab[_0x379861(0x1f9)]===_0x2b8eab['GpwAL'])return _0x16151f['lastE'+_0x379861(0x5fe)]=_0x609c2f[_0x379861(0x55a)](_0x609c2f['YKcJF'](_0x379861(0x23d),_0x48d472)+':\x20',_0x44eb10&&_0x2ca385[_0x379861(0x11a)+'ge']||_0x5e8678),_0x135f4d(_0x609c2f['LSIIJ'],_0x609c2f['ThgWQ'](_0x609c2f['ThgWQ'](_0x609c2f[_0x379861(0x3de)],_0x1ee8fe)+':\x20',_0x224844[_0x379861(0x60a)+'rror'])),null;else _0xcdb308[_0x379861(0xe4)+_0x379861(0xb2)]=_0x1b691e,_0x852f4();})),_0x2b8eab[_0x20b1ac(0x42e)](_0x60e62f,_0x20b1ac(0x16d)+_0x20b1ac(0x1d8)+_0x20b1ac(0x608),_0x116cf6(_0xcdb308['hookN'+_0x20b1ac(0x10b)+'il'],_0x6d6923=>{_0xcdb308['hookN'+'oReco'+'il']=_0x6d6923,_0x852f4();})),_0x343820(_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0x642)],_0x4706dd['hooks'+'Ok']),'/'),_0x4706dd[_0x20b1ac(0x438)+_0x20b1ac(0x3cd)])+(_0x20b1ac(0x139)+_0x20b1ac(0x39f))),_0x2b8eab[_0x20b1ac(0x2ba)](_0x343820,_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0x122)](_0x20b1ac(0x67a)+'rs\x20',_0x4706dd[_0x20b1ac(0x67a)+'rs']),_0x20b1ac(0x3b7)+'ate\x20')+(_0x4706dd[_0x20b1ac(0x602)]?'ok':'—')),_0x2b8eab['tIFzX'](_0x343820,_0x2b8eab['bJYur'](_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0x122)](_0x2b8eab[_0x20b1ac(0xf3)](_0x20b1ac(0x656)+'r\x20',_0x4706dd[_0x20b1ac(0x656)+'r']?'✓':'—')+_0x2b8eab[_0x20b1ac(0x3a9)],_0x4706dd['msm']?'✓':'—')+(_0x20b1ac(0x495)+'\x20')+(_0x4706dd[_0x20b1ac(0x373)+_0x20b1ac(0x51f)]?'✓':'—'),_0x20b1ac(0x26a)),_0x4706dd[_0x20b1ac(0x341)+'am']?'✓':'—')),_0x4706dd['lastE'+_0x20b1ac(0x5fe)]?_0x343820(_0x2b8eab[_0x20b1ac(0x1ff)](String,_0x4706dd[_0x20b1ac(0x60a)+_0x20b1ac(0x5fe)])[_0x20b1ac(0x59b)](-0x1*0x3d2+-0x267c+0xf*0x2d2,-0x142d+-0x2b*-0x71+0x6*0x47)):_0x343820('no\x20er'+_0x20b1ac(0x4c7))]),_0x98f846(_0x2b8eab['pZetQ'],![],null,[(function(){var _0x539cad=_0x20b1ac,_0x251ff0={'qOumF':'Vhbez','sSbdw':_0x2b8eab['AeEAI'],'NrokI':function(_0x3209aa,_0x17f8eb){return _0x2b8eab['bJYur'](_0x3209aa,_0x17f8eb);},'zkLvg':_0x539cad(0x17a)+_0x539cad(0x514)+'yet\x20—'+'\x20char'+_0x539cad(0x32b),'QBUaW':function(_0xe6917,_0x159852){return _0xe6917*_0x159852;},'NJYvo':function(_0x41a683,_0x175f00){return _0x2b8eab['HGfUY'](_0x41a683,_0x175f00);},'YWNtK':function(_0x5c4934,_0x2de726){return _0x5c4934-_0x2de726;},'pKpCj':'rgba('+_0x539cad(0x30e)+_0x539cad(0x1b3),'njGZw':function(_0x50fca8,_0x5a2eb3){return _0x50fca8/_0x5a2eb3;},'AEZvi':_0x2b8eab['fdvjx'],'EsQem':_0x2b8eab[_0x539cad(0x4e0)]},_0x68171a=document[_0x539cad(0x2a5)+_0x539cad(0x3ca)+_0x539cad(0x442)](_0x2b8eab[_0x539cad(0x42c)]),_0x261c20=document[_0x539cad(0x2a5)+'eElem'+_0x539cad(0x442)](_0x539cad(0x274)+_0x539cad(0x446));_0x261c20[_0x539cad(0x88)+_0x539cad(0x2bc)]=!![],_0x261c20[_0x539cad(0x361)][_0x539cad(0x399)+'xt']=_0x539cad(0xc0)+':100%'+_0x539cad(0x5f3)+'ht:17'+'0px;b'+_0x539cad(0x534)+_0x539cad(0x31c)+'rgba('+_0x539cad(0x30e)+',.45)'+_0x539cad(0x462)+'r:#ff'+_0x539cad(0x5ca)+_0x539cad(0x380)+_0x539cad(0x5bf)+_0x539cad(0xdc)+_0x539cad(0x197)+'a(255'+_0x539cad(0x459)+'157,.'+'25);b'+_0x539cad(0x417)+_0x539cad(0x554)+_0x539cad(0x21c)+_0x539cad(0x67c)+'t:10p'+_0x539cad(0x582)+_0x539cad(0x2e8)+_0x539cad(0xb8)+_0x539cad(0x219)+'Conso'+'las,m'+_0x539cad(0x10f)+'ace;p'+'addin'+_0x539cad(0x91)+';whit'+_0x539cad(0x263)+'ce:pr'+_0x539cad(0x1c5)+'rflow'+':auto',_0x261c20[_0x539cad(0x2e6)]=_0x4d2774();var _0x15afbd=document[_0x539cad(0x2a5)+_0x539cad(0x3ca)+'ent']('div');_0x15afbd[_0x539cad(0x361)]['cssTe'+'xt']=_0x539cad(0x251)+'ay:fl'+_0x539cad(0x25c)+'p:6px'+_0x539cad(0x157)+'in-to'+'p:6px';var _0x348d18=_0x2b8eab[_0x539cad(0x362)](_0x2e8bb0,_0x2b8eab['KVuqt'],function(){var _0x49420c=_0x539cad,_0x23fede={'xiPjn':function(_0x254559,_0x3e9fbe){return _0x254559+_0x3e9fbe;},'EJGmn':function(_0x373ce4,_0x2dc0c0){return _0x373ce4+_0x2dc0c0;},'zkkib':_0x49420c(0x369)+_0x49420c(0x4f0)};if(_0x609c2f[_0x49420c(0x270)](_0x49420c(0x108),'gmzOl')){var _0x21e18f=_0x4d2774();if(navigator['clipb'+_0x49420c(0x5ff)]&&navigator[_0x49420c(0x4bd)+_0x49420c(0x5ff)][_0x49420c(0x653)+'Text']){if(_0x609c2f['ixxVJ']===_0x609c2f[_0x49420c(0x3f5)])navigator[_0x49420c(0x4bd)+'oard'][_0x49420c(0x653)+_0x49420c(0x203)](_0x21e18f)['then'](function(){var _0x4de7bf=_0x49420c,_0x28f48d={'xVWrG':function(_0x351960,_0x417a51){return _0x351960+_0x417a51;},'WEnZk':function(_0x2238df,_0x599203){return _0x2238df+_0x599203;}};if(_0x251ff0[_0x4de7bf(0x3fc)]===_0x4de7bf(0x4c9))try{_0x24e5aa('windo'+_0x4de7bf(0x520)+'rror',_0x28f48d['xVWrG'](_0x28f48d['WEnZk'](_0x305d52['messa'+'ge']||'?','\x20@')+_0x10e1c0(_0x25002b['filen'+_0x4de7bf(0x2b6)]||'')['split']('/')[_0x4de7bf(0x5b0)]()+':',_0x2c4c03[_0x4de7bf(0x4d0)+'o']||'?'));}catch(_0x2551d8){}else _0x348d18['textC'+'onten'+'t']='Copie'+_0x4de7bf(0x1c4),setTimeout(function(){var _0xf6c33a=_0x4de7bf;_0x348d18[_0xf6c33a(0x548)+'onten'+'t']='Copy\x20'+_0xf6c33a(0x49e);},0x1aaa+0x867*-0x1+0xc67*-0x1);});else{!_0x282bb8&&(_0x233b37=!![],_0x1eb9e6(_0x251ff0['sSbdw'],_0x251ff0['NrokI'](_0x251ff0[_0x49420c(0x33e)],_0xb66cfc(_0xfa94f9))+(_0x49420c(0x24f)+'lTran'+_0x49420c(0x657)+'=')+_0x1863b1(_0x321f29)));return;}}else _0x261c20[_0x49420c(0x57e)+'t'](),document['execC'+'omman'+'d']('copy'),_0x348d18[_0x49420c(0x548)+_0x49420c(0x53b)+'t']=_0x49420c(0x14c)+_0x49420c(0x1c4),setTimeout(function(){var _0x3146c5=_0x49420c;_0x348d18[_0x3146c5(0x548)+'onten'+'t']='Copy\x20'+'logs';},-0x237*-0xe+0x3*0xcb5+-0x3f45);}else{var _0x3aef87=('5|1|3'+'|4|0|'+'2')['split']('|'),_0x1857be=0x2222+0x2635+-0x4857;while(!![]){switch(_0x3aef87[_0x1857be++]){case'0':_0x681061(_0x49420c(0x11c),_0x23fede['xiPjn'](_0x23fede['xiPjn'](_0x5f46cd+('\x20regi'+'stere'+_0x49420c(0x29f)),_0x382b98)+'::'+_0x20f2cb+'('+_0x5a523b[_0x49420c(0x589)](',')+')'+(_0x37923f?_0x23fede['EJGmn']('\x20->\x20',_0x42e191):''),_0x23fede['zkkib'])+_0x2ec5b9['enabl'+'ed']);continue;case'1':_0x2ec5b9[_0x49420c(0x5ce)+'ed']=_0x5d7c61!==![];continue;case'2':return _0x2ec5b9;case'3':_0x44393[_0x31c3f0]=_0x2ec5b9;continue;case'4':_0x5af921[_0x49420c(0x438)+_0x49420c(0x3cd)]++;continue;case'5':var _0x2ec5b9=_0x200399[_0x49420c(0x4c8)+_0x49420c(0x565)+'x']({'typeName':_0x5d7e44,'methodName':_0x4c689e,'params':_0x1bd6dd,'returnType':_0x59e8a7},_0xa821b);continue;}break;}}}),_0x443934=_0x2b8eab[_0x539cad(0x5cb)](_0x2e8bb0,'Downl'+_0x539cad(0x2f0)+'txt',function(){var _0x4463a3=_0x539cad;if(_0x251ff0['AEZvi']!==_0x4463a3(0x655)){var _0x23c113=new Blob([_0x4d2774()],{'type':_0x4463a3(0x466)+_0x4463a3(0x183)}),_0x3217fd=document[_0x4463a3(0x2a5)+'eElem'+'ent']('a');_0x3217fd['href']=URL[_0x4463a3(0x2a5)+_0x4463a3(0x5b7)+_0x4463a3(0x168)](_0x23c113),_0x3217fd[_0x4463a3(0x241)+'oad']=_0x251ff0['EsQem'],_0x3217fd[_0x4463a3(0xf1)](),setTimeout(function(){var _0x248941=_0x4463a3;URL[_0x248941(0x3e5)+_0x248941(0x5b7)+'ctURL'](_0x3217fd[_0x248941(0x317)]);},0x8*0x41f+-0x8b6+0x1*-0x145a);}else{var _0x2376cb=_0x20d4f6[_0x4463a3(0x351)](-0x12d3+-0x16*-0x63+-0xa51*-0x1,_0x3051d4['min'](-0x1*0xe35+-0x438*0x6+0x27e9,_0x288ced['healt'+'h']+_0x1c1223['shiel'+'d'])),_0x4609f9=_0x251ff0[_0x4463a3(0xc7)](_0x217a8e,_0x2376cb/(0x1*0x1c1b+0x819+-0x23d*0x10));_0x586223[_0x4463a3(0x4f9)+_0x4463a3(0x2cb)]='rgba('+_0x4463a3(0x9e)+'10,11'+_0x4463a3(0x44c),_0x55756c['fillR'+_0x4463a3(0x34f)](_0x251ff0[_0x4463a3(0x460)](_0x2328a7['x'],_0x23baa5/(-0xaa+-0x2*0x281+0x1*0x5ae)),_0x251ff0[_0x4463a3(0x5ea)](_0x50b70f,-0x1*-0x22cf+-0x1*0x9ed+0x4a*-0x56),_0x4609f9,-0x2198+0x79*-0x22+0x31ae),_0x2fb74f[_0x4463a3(0x4e9)+'eStyl'+'e']=_0x251ff0[_0x4463a3(0x3f6)],_0x578163[_0x4463a3(0x16f)+'idth']=-0x16e5+-0xfc8+0x26ae,_0x49385['strok'+'eRect'](_0x51509b['x']-_0x251ff0[_0x4463a3(0x2c1)](_0x2b7f0d,-0xa64+-0x617+-0x1d5*-0x9),_0x4cfb7d-(0x1*0x9fd+-0x5*0x537+0x101c),_0x18bc4c,-0x1*0x1d1d+-0xd96+-0x9*-0x4bf);}}),_0x4946bc=_0x2e8bb0(_0x2b8eab[_0x539cad(0x14b)],function(){_0x467a41();}),_0x4ed553=_0x2b8eab[_0x539cad(0x93)](_0x2e8bb0,_0x2b8eab['Bkhik'],function(){var _0x250ff8=_0x539cad;_0x55b59d[_0x250ff8(0x49e)]['lengt'+'h']=0x12fc+-0xba0+0x3ae*-0x2,_0x261c20[_0x250ff8(0x2e6)]=_0x4d2774();});return _0x15afbd[_0x539cad(0x41c)+'d'](_0x348d18,_0x443934,_0x4946bc,_0x4ed553),_0x68171a[_0x539cad(0x41c)+'d'](_0x261c20,_0x15afbd),_0x68171a;}()),_0x343820(_0x20b1ac(0x4b9)+'mps\x20t'+'he\x20fu'+_0x20b1ac(0x8b)+'g\x20to\x20'+'the\x20D'+'evToo'+_0x20b1ac(0x268)+'nsole')])];}return _0x70334c['repla'+'ceChi'+_0x544db4(0x27b)](..._0x254194['EGEwJ'](_0x59919a)),Number['isFin'+'ite'](_0xa088ca['x'])&&(_0x254194['wnPJG']===_0x544db4(0x172)?(_0x2d25b4['logs']['lengt'+'h']=0x1*-0x153a+-0xe5b+0x2395*0x1,_0xf5d912[_0x544db4(0x2e6)]=_0x254194[_0x544db4(0x4ee)](_0x1dc870)):(_0x4be5e3['style'][_0x544db4(0x1f8)]=_0xa088ca['x']+'px',_0x4be5e3['style'][_0x544db4(0x564)]=_0x254194[_0x544db4(0x41a)](_0xa088ca['y'],'px'),_0x4be5e3['style'][_0x544db4(0x1bf)]=_0x544db4(0x566),_0x4be5e3['style'][_0x544db4(0x269)+'m']=_0x544db4(0x566))),_0x4be5e3;}function _0x4d2774(){var _0x4ff589=_0x599b38,_0x157173=[_0x254194[_0x4ff589(0x313)],_0x254194['kGBJW']('host:'+'\x20'+location['hostn'+'ame'],location['pathn'+'ame']),_0x254194['EZKxa'](_0x254194['EQXKR']+(_0x254194[_0x4ff589(0xba)](window['top'],window[_0x4ff589(0xcc)])?_0x4ff589(0x18d)+'D':'top')+_0x254194['KvmlS'],(navigator['userA'+_0x4ff589(0xfa)]||'')[_0x4ff589(0x59b)](0x1acb+0x1a64+0x799*-0x7,0x98b+0x1*-0x1223+0xa*0xe8)),_0x254194[_0x4ff589(0x29b)](_0x254194[_0x4ff589(0x1e1)](_0x254194[_0x4ff589(0x213)]+!!window['unity'+_0x4ff589(0x1a8)+_0x4ff589(0x2da)],'\x20·\x20UW'+_0x4ff589(0x5da))+!!window[_0x4ff589(0x325)+_0x4ff589(0x353)+_0x4ff589(0x464)],_0x254194[_0x4ff589(0x1f7)])+_0xcdb308[_0x4ff589(0x3e8)+'ode'],_0x254194[_0x4ff589(0x20e)](_0x254194['aDvOI'](_0x254194['dxxSF'](_0x254194['EmBTB'](_0x254194[_0x4ff589(0x65b)]('hooks'+':\x20',_0x4706dd[_0x4ff589(0x438)+'Ok'])+'/',_0x4706dd[_0x4ff589(0x438)+_0x4ff589(0x3cd)])+(_0x4ff589(0x139)+'ied'),_0x4ff589(0x3b7)+'ate:\x20')+(_0x4706dd[_0x4ff589(0x602)]?'ok':'—'),_0x4ff589(0xb1)+_0x4ff589(0x1df)+':\x20'),_0x4706dd['playe'+'rs']),_0x254194[_0x4ff589(0x1a5)](_0x254194[_0x4ff589(0x43c)](_0x254194[_0x4ff589(0x650)](_0x254194['DqwZW'](_0x254194['EsfvB'](_0x254194[_0x4ff589(0x636)](_0x254194[_0x4ff589(0x234)](_0x254194['obzzN'](_0x254194[_0x4ff589(0x145)]('captu'+_0x4ff589(0x7f)+_0x4ff589(0x557)+_0x4ff589(0x64d),_0x340b98(_0x9bc08c))+_0x4ff589(0x491),_0x340b98(_0x559939))+('\x20view'+':')+_0x254194[_0x4ff589(0x3c9)](_0x340b98,_0x40ba04)+_0x254194[_0x4ff589(0x3fa)]+_0x340b98(_0x2e38b7),_0x4ff589(0x290)+'Cam:'),_0x340b98(_0xc52743))+_0x4ff589(0x635),_0x340b98(_0x537a91))+(_0x4ff589(0x20f)+':'),_0x340b98(_0x4ed78d)),'\x20stat'+'e:')+_0x254194[_0x4ff589(0x620)](_0x340b98,_0x5455ec),'\x20cont'+_0x4ff589(0x4e8)+'r:'),_0x254194['GQctI'](_0x340b98,_0x3b8a25))+(_0x4ff589(0x1da)+_0x4ff589(0xb4))+_0x340b98(_0x4567ca),'setti'+_0x4ff589(0x5fa)+JSON[_0x4ff589(0x43f)+_0x4ff589(0x4d5)](_0xcdb308),_0x4706dd['lastE'+_0x4ff589(0x5fe)]?_0x254194[_0x4ff589(0x5c3)]+_0x4706dd['lastE'+_0x4ff589(0x5fe)]:'',_0x254194[_0x4ff589(0x5a2)](_0x254194[_0x4ff589(0x59f)](_0x4ff589(0x4de)+'OG\x20(',_0x55b59d[_0x4ff589(0x49e)]['lengt'+'h']),_0x254194[_0x4ff589(0x47e)]),'']['join']('\x0a');return _0x254194[_0x4ff589(0x517)](_0x157173,_0x55b59d[_0x4ff589(0x49e)]['join']('\x0a'));}function _0x467a41(){var _0x49a30d=_0x599b38;try{if('ccGSa'==='ccGSa'){var _0x225dac=console['log'];(function(_0x11f6db){var _0x2d28c3=_0x1070;for(var _0x4a8d16=-0x29d+0x1ec8+-0x1c2b;_0x4a8d16<_0x11f6db[_0x2d28c3(0x4cc)+'h'];_0x4a8d16++)_0x225dac['call'](console,_0x11f6db[_0x4a8d16]);}(_0x4d2774()[_0x49a30d(0x441)]('\x0a')));}else try{var _0x889e66=_0x254194[_0x49a30d(0x154)][_0x49a30d(0x441)]('|'),_0xd8638b=0x1a*0xb7+-0x2f2*-0x3+-0x4e*0x5a;while(!![]){switch(_0x889e66[_0xd8638b++]){case'0':_0x2ed8cc[_0x2a0c04]=_0x2d509f;continue;case'1':_0x3776cf(_0x49a30d(0x11c),_0x254194[_0x49a30d(0x59a)](_0x254194[_0x49a30d(0x44d)](_0x254194[_0x49a30d(0x27e)](_0x254194[_0x49a30d(0x2dd)](_0x254194[_0x49a30d(0x3f0)](_0x38b02b,_0x254194[_0x49a30d(0x323)])+_0x11fedb,'::')+_0x4d98e5+'(',_0x13bc3f['join'](','))+')',_0xad2f49?_0x254194[_0x49a30d(0x368)]+_0x2c7288:''),_0x49a30d(0x369)+'led=')+_0x2d509f['enabl'+'ed']);continue;case'2':var _0x2d509f=_0x49d90['hookP'+_0x49a30d(0x4c1)]({'typeName':_0xfa4609,'methodName':_0x55c6c4,'params':_0x38a0c9,'returnType':_0x166657},_0x42aeff);continue;case'3':_0x42481c['hooks'+'Total']++;continue;case'4':return _0x2d509f;case'5':_0x2d509f[_0x49a30d(0x5ce)+'ed']=_0x254194['MctUK'](_0x54fc0c,![]);continue;}break;}}catch(_0x76c0fc){return _0x13474d[_0x49a30d(0x60a)+_0x49a30d(0x5fe)]=_0x49a30d(0x23d)+_0x300a7b+':\x20'+(_0x76c0fc&&_0x76c0fc['messa'+'ge']||_0x76c0fc),_0x254194[_0x49a30d(0x1f5)](_0x10cb96,'hook','FAILE'+'D\x20to\x20'+_0x49a30d(0x38a)+'ter\x20'+_0x5d34a5+':\x20'+_0x10e12c[_0x49a30d(0x60a)+_0x49a30d(0x5fe)]),null;}}catch(_0x442198){}}function _0x308546(){var _0x40ffee=_0x599b38;try{if(_0x40ffee(0x254)===_0x40ffee(0x55d)){_0x517abd[_0x40ffee(0x3e8)+_0x40ffee(0x404)]=_0x52209b,_0x254194[_0x40ffee(0x1a9)](_0x6868d1);if(_0x3dffd2){for(var _0x407adb in _0x420303)_0x613de8(_0x407adb,![]);}}else localStorage[_0x40ffee(0x3f9)+'em']('sakur'+_0x40ffee(0x2fb)+'2v2.v'+'1',JSON['strin'+_0x40ffee(0x4d5)](_0xa088ca));}catch(_0x363e2e){}}var _0x226876=null;function _0x2d132f(_0x53d0b2){var _0x7075c4=_0x599b38;_0x2772b5=_0x53d0b2;if(!_0x226876){var _0x5cd91c=(_0x7075c4(0x2a8)+_0x7075c4(0x364)+'5')['split']('|'),_0x175dbf=0x2129+0x2615*-0x1+0x4ec;while(!![]){switch(_0x5cd91c[_0x175dbf++]){case'0':_0x57e086[_0x7075c4(0x548)+'onten'+'t']=_0x220b3d;continue;case'1':_0x5b0dd5['appen'+'dChil'+'d'](_0x226876);continue;case'2':_0x226876=_0x583f88();continue;case'3':var _0x57e086=document[_0x7075c4(0x2a5)+_0x7075c4(0x3ca)+_0x7075c4(0x442)]('style');continue;case'4':_0x5b0dd5['appen'+'dChil'+'d'](_0x57e086);continue;case'5':_0x254194[_0x7075c4(0x1a2)](requestAnimationFrame,()=>_0x226876[_0x7075c4(0x5f4)+'List']['add']('shown'));continue;}break;}}_0x226876[_0x7075c4(0x5f4)+_0x7075c4(0x58b)][_0x7075c4(0x31e)+'e']('shown',_0x53d0b2);if(_0x53d0b2)_0x254194[_0x7075c4(0x3af)](_0x3e6b1b);}function _0x173162(){_0x2d132f(!_0x2772b5);}function _0x3e6b1b(){var _0x4c47fd=_0x599b38;if(!_0x226876)return;var _0x1e075d=_0x226876['query'+'Selec'+'tor'](_0x4c47fd(0x4fa)+_0x4c47fd(0xaa));if(_0x1e075d){if(_0x4c47fd(0x123)!==_0x254194[_0x4c47fd(0x604)]){var _0x5763c4=_0x583f88(),_0x552338=_0x5763c4['query'+_0x4c47fd(0x1dd)+'tor'](_0x254194['mjbWB'])[_0x4c47fd(0x161)+'ren'];_0x1e075d[_0x4c47fd(0x2ae)+'ceChi'+_0x4c47fd(0x27b)](..._0x552338),Number['isFin'+_0x4c47fd(0x324)](_0xa088ca['x'])&&(_0x226876['style']['left']=_0xa088ca['x']+'px',_0x226876[_0x4c47fd(0x361)][_0x4c47fd(0x564)]=_0x254194['CBOYw'](_0xa088ca['y'],'px'));}else _0x1325e9[_0x4c47fd(0x35e)+'ead']=_0x39d81d,_0x576a51();}}window['addEv'+'entLi'+_0x599b38(0x4cf)+'r'](_0x599b38(0x2fd)+'wn',_0x205ae2=>{var _0x3b086e=_0x599b38,_0x289f29={'Pufft':function(_0x34802e,_0x45e8d2,_0x22acad){return _0x34802e(_0x45e8d2,_0x22acad);},'bHnFK':_0x254194[_0x3b086e(0x4b4)],'rPZnX':function(_0x2f6509,_0x2d6c23){var _0x738e28=_0x3b086e;return _0x254194[_0x738e28(0x234)](_0x2f6509,_0x2d6c23);},'QbcrQ':function(_0x1e9ee0,_0x2fcd24){return _0x1e9ee0+_0x2fcd24;},'taxNV':_0x254194['OhOOD'],'jebrE':_0x254194[_0x3b086e(0x14e)]};_0x205ae2[_0x3b086e(0x455)]===_0x254194[_0x3b086e(0x5a5)]&&(_0x254194[_0x3b086e(0x354)]===_0x3b086e(0x580)?_0x27ee8c[_0x3b086e(0x4bd)+_0x3b086e(0x5ff)]['write'+_0x3b086e(0x203)](_0x53a8a1)['then'](function(){var _0x25c1de=_0x3b086e;_0x495b3b['textC'+_0x25c1de(0x53b)+'t']='Copie'+_0x25c1de(0x1c4),_0x1cd584(function(){var _0x4cb5bf=_0x25c1de;_0x30ed4b['textC'+'onten'+'t']='Copy\x20'+_0x4cb5bf(0x49e);},0x228b+-0xe9*-0x1f+-0x38e6);}):(_0x205ae2[_0x3b086e(0x27c)+_0x3b086e(0x2dc)+_0x3b086e(0x590)](),_0x173162()));if(_0x254194['HQqDM'](_0x205ae2[_0x3b086e(0x455)],'F6')){if(_0x254194[_0x3b086e(0x3ce)]===_0x3b086e(0x5ac))_0x205ae2[_0x3b086e(0x27c)+_0x3b086e(0x2dc)+'ault'](),_0x254194[_0x3b086e(0x568)](_0x467a41);else{var _0x5bbd67=_0xbe96ed[_0x26db82];_0x289f29[_0x3b086e(0x13a)](_0xeeaf17,_0x289f29[_0x3b086e(0xe9)],_0x289f29[_0x3b086e(0x4a5)](_0x289f29[_0x3b086e(0x3b5)](_0x324433+_0x289f29[_0x3b086e(0x17b)],!!_0x5bbd67['appli'+'ed'])+_0x289f29['jebrE'],!!_0x5bbd67['enabl'+'ed']));}}},!![]);var _0x4ee97d=document[_0x599b38(0x2a5)+'eElem'+_0x599b38(0x442)](_0x599b38(0x5ad));_0x4ee97d['style'][_0x599b38(0x399)+'xt']='posit'+_0x599b38(0x31d)+'ixed;'+'top:1'+_0x599b38(0x34e)+_0x599b38(0x230)+_0x599b38(0x668)+_0x599b38(0x5eb)+_0x599b38(0x2ec)+_0x599b38(0x5a6)+'646;c'+_0x599b38(0x287)+_0x599b38(0x33b)+_0x599b38(0x479)+_0x599b38(0x255)+'26px;'+'heigh'+_0x599b38(0x645)+_0x599b38(0x92)+_0x599b38(0x36a)+'0.5;t'+_0x599b38(0x4bc)+_0x599b38(0x1a6)+'opaci'+_0x599b38(0x386)+'2s;po'+_0x599b38(0x253)+_0x599b38(0x411)+_0x599b38(0x1ef)+_0x599b38(0x99)+_0x599b38(0x2c9)+_0x599b38(0x3e4)+_0x599b38(0x60e)+_0x599b38(0x370)+_0x599b38(0x4ef)+'rgba('+_0x599b38(0x9e)+_0x599b38(0x61d)+_0x599b38(0x4db)+'))',_0x4ee97d[_0x599b38(0x679)+_0x599b38(0x82)]='<svg\x20'+'viewB'+_0x599b38(0x3a7)+'\x200\x2024'+'\x2024\x22>'+'<defs'+_0x599b38(0x106)+'earGr'+_0x599b38(0x148)+_0x599b38(0x543)+_0x599b38(0x607)+'rad\x22\x20'+_0x599b38(0x19e)+_0x599b38(0x217)+_0x599b38(0x26d)+_0x599b38(0x295)+_0x599b38(0x665)+_0x599b38(0x3ab)+'gradi'+'entUn'+_0x599b38(0x1a3)+_0x599b38(0x116)+_0x599b38(0x5f6)+'nUse\x22'+'><sto'+_0x599b38(0x54f)+_0x599b38(0xda)+_0x599b38(0x1ed)+_0x599b38(0x3a6)+_0x599b38(0x340)+'#ffe0'+'ec\x22/>'+_0x599b38(0x5f1)+'\x20offs'+_0x599b38(0x366)+_0x599b38(0x29d)+_0x599b38(0x307)+_0x599b38(0x245)+'=\x22#ff'+_0x599b38(0x47f)+'/><st'+'op\x20of'+_0x599b38(0x61e)+_0x599b38(0x101)+_0x599b38(0x1cb)+_0x599b38(0x412)+_0x599b38(0x14f)+_0x599b38(0x4ad)+_0x599b38(0x335)+_0x599b38(0x2c2)+_0x599b38(0x2d6)+_0x599b38(0x670)+_0x599b38(0x332)+_0x599b38(0x4b3)+'\x20d=\x22M'+'12\x2021'+_0x599b38(0x35f)+_0x599b38(0x260)+_0x599b38(0x70)+_0x599b38(0x439)+_0x599b38(0x46d)+'.5\x201.'+_0x599b38(0x49c)+_0x599b38(0x256)+_0x599b38(0x41d)+'\x204\x204.'+_0x599b38(0xe0)+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+_0x599b38(0x35a)+'\x22none'+_0x599b38(0x3b2)+_0x599b38(0x8d)+_0x599b38(0x2f6)+'sk-gr'+'ad)\x22\x20'+_0x599b38(0x4e9)+_0x599b38(0x3df)+_0x599b38(0x585)+_0x599b38(0x3b2)+'oke-l'+_0x599b38(0xd6)+'p=\x22ro'+'und\x22\x20'+_0x599b38(0x4e9)+'e-lin'+'ejoin'+_0x599b38(0x12c)+_0x599b38(0x299)+_0x599b38(0x4b3)+_0x599b38(0x574)+_0x599b38(0x646)+'4M12\x20'+'3c-1.'+'5\x200-2'+_0x599b38(0x4da)+'2.5\x202'+'.5M12'+'\x203c1.'+'5\x200\x202'+_0x599b38(0x18a)+_0x599b38(0x660)+_0x599b38(0x5e3)+'ill=\x22'+_0x599b38(0x46f)+'\x20stro'+'ke=\x22u'+_0x599b38(0x5ae)+'k-gra'+_0x599b38(0x150)+'troke'+'-widt'+_0x599b38(0x12f)+_0x599b38(0x1ce)+_0x599b38(0x50a)+'linec'+_0x599b38(0x4c6)+_0x599b38(0x5dd)+_0x599b38(0xa4)+_0x599b38(0x533)+'cx=\x221'+_0x599b38(0x428)+'=\x2210\x22'+_0x599b38(0x1e6)+_0x599b38(0x5e3)+_0x599b38(0x678)+_0x599b38(0x4c5)+'9d\x22/>'+_0x599b38(0xe8)+'>',_0x4ee97d[_0x599b38(0x6c)]='Sakur'+_0x599b38(0x7a)+'ent\x20-'+_0x599b38(0x51c)+'io',_0x4ee97d[_0x599b38(0x30d)+'seent'+'er']=()=>_0x4ee97d['style'][_0x599b38(0x1b0)+'ty']='1',_0x4ee97d['onmou'+_0x599b38(0x5ec)+'ve']=()=>_0x4ee97d[_0x599b38(0x361)]['opaci'+'ty']=_0x599b38(0x164),_0x4ee97d[_0x599b38(0x60c)+'ck']=_0x2c2a93=>{var _0x566745=_0x599b38;_0x2c2a93['stopP'+_0x566745(0x621)+'ation'](),_0x173162();};var _0x220b3d=_0x599b38(0xa9)+'ost\x20{'+_0x599b38(0x1ee)+_0x599b38(0xfb)+'ial;\x20'+_0x599b38(0x138)+'\x20{\x20bo'+'x-siz'+_0x599b38(0x623)+_0x599b38(0x380)+_0x599b38(0x20b)+';\x20mar'+_0x599b38(0x393)+_0x599b38(0x452)+_0x599b38(0x2fa)+_0x599b38(0x67)+_0x599b38(0x238)+'er\x22,\x20'+_0x599b38(0x321)+'e\x20UI\x22'+_0x599b38(0x32f)+_0x599b38(0x19c)+'i,\x20sa'+'ns-se'+'rif;\x20'+_0x599b38(0x3b1)+'mn-pa'+_0x599b38(0x17e)+_0x599b38(0x40e)+'tion:'+_0x599b38(0x5cf)+_0x599b38(0x34d)+_0x599b38(0x2fe)+_0x599b38(0x4aa)+_0x599b38(0x2e7)+'ottom'+_0x599b38(0x402)+_0x599b38(0xdf)+_0x599b38(0xd7)+'min(3'+_0x599b38(0x81)+'\x20calc'+_0x599b38(0x355)+_0x599b38(0x50c)+_0x599b38(0x42a)+_0x599b38(0x448)+'-heig'+_0x599b38(0x518)+'in(48'+_0x599b38(0x9f)+_0x599b38(0x365)+_0x599b38(0x2c6)+'\x20-\x2048'+_0x599b38(0x562)+_0x599b38(0xc2)+'displ'+'ay:\x20f'+'lex;\x20'+'gap:\x20'+'10px;'+'\x20padd'+'ing:\x20'+'10px;'+_0x599b38(0x2cf)+_0x599b38(0x216)+_0x599b38(0x152)+_0x599b38(0x22c)+_0x599b38(0x1b6)+'nter-'+'event'+_0x599b38(0x1b1)+'to;\x0a\x20'+_0x599b38(0x1ab)+_0x599b38(0x3f7)+_0x599b38(0x5e0)+'rgba('+_0x599b38(0x510)+_0x599b38(0x289)+'78);\x20'+_0x599b38(0x8e)+'rop-f'+_0x599b38(0x29a)+_0x599b38(0xd8)+_0x599b38(0x472)+'x)\x20sa'+_0x599b38(0x61b)+_0x599b38(0x67b)+_0x599b38(0x60d)+_0x599b38(0x418)+'t-bac'+_0x599b38(0x64f)+'-filt'+_0x599b38(0x5b9)+_0x599b38(0x32a)+_0x599b38(0x346)+'satur'+'ate(1'+_0x599b38(0x187)+_0x599b38(0xc2)+_0x599b38(0x221)+_0x599b38(0x1c3)+':\x200\x200'+_0x599b38(0x500)+'x\x20rgb'+_0x599b38(0x5f8)+',255,'+_0x599b38(0x195)+_0x599b38(0x476)+'inset'+_0x599b38(0x500)+_0x599b38(0x65d)+'gba(2'+_0x599b38(0x56f)+_0x599b38(0x90)+_0x599b38(0x44b)+_0x599b38(0x5c0)+'0px\x208'+'0px\x20r'+'gba(0'+_0x599b38(0x419)+_0x599b38(0x272)+_0x599b38(0xc2)+'opaci'+_0x599b38(0x178)+';\x20tra'+'nsfor'+_0x599b38(0x619)+_0x599b38(0x2ab)+_0x599b38(0xc4)+'8px);'+'\x20poin'+'ter-e'+'vents'+_0x599b38(0xd5)+_0x599b38(0x247)+_0x599b38(0x383)+'ion:\x20'+_0x599b38(0x1b0)+'ty\x20.3'+'5s\x20ea'+_0x599b38(0x1eb)+'ransf'+_0x599b38(0x492)+'45s\x20c'+'ubic-'+_0x599b38(0x5dc)+_0x599b38(0x36e)+_0x599b38(0x55e)+'6,1);'+_0x599b38(0xc2)+_0x599b38(0x245)+_0x599b38(0x558)+_0x599b38(0xf4)+_0x599b38(0x67e)+'-size'+':\x2013p'+_0x599b38(0x291)+'\x20\x20.mn'+'-pane'+_0x599b38(0x83)+'wn\x20{\x20'+_0x599b38(0x1b0)+_0x599b38(0x48c)+';\x20tra'+_0x599b38(0x155)+_0x599b38(0xe6)+'ne;\x20p'+'ointe'+'r-eve'+'nts:\x20'+'auto;'+_0x599b38(0x3e6)+'.mn-p'+'anel.'+'sk-dr'+_0x599b38(0x2ad)+'g\x20{\x20t'+'ransi'+_0x599b38(0x1a6)+_0x599b38(0x409)+';\x20}\x0a\x20'+_0x599b38(0x74)+_0x599b38(0x3ee)+_0x599b38(0x1ec)+_0x599b38(0x467)+_0x599b38(0xb9)+';\x20fle'+_0x599b38(0x140)+_0x599b38(0x318)+'n:\x20co'+'lumn;'+_0x599b38(0x4d1)+_0x599b38(0xa3)+'ms:\x20c'+_0x599b38(0x594)+_0x599b38(0x639)+':\x204px'+';\x20wid'+'th:\x206'+_0x599b38(0x192)+(_0x599b38(0x14a)+'\x20none'+';\x20pad'+_0x599b38(0x233)+'\x2012px'+'\x200;\x20b'+_0x599b38(0x417)+_0x599b38(0x554)+_0x599b38(0x322)+'6px;\x0a'+_0x599b38(0xe7)+_0x599b38(0x534)+'ound:'+_0x599b38(0x350)+_0x599b38(0x473)+'255,2'+_0x599b38(0x1a1)+_0x599b38(0x96)+'box-s'+_0x599b38(0x1c3)+':\x20ins'+'et\x200\x20'+'0\x200\x201'+_0x599b38(0x2d3)+_0x599b38(0x587)+'5,255'+',255,'+_0x599b38(0x68)+_0x599b38(0x3e6)+_0x599b38(0x674)+_0x599b38(0x622)+_0x599b38(0x3a1)+'lay:\x20'+'grid;'+'\x20plac'+_0x599b38(0x2d1)+_0x599b38(0x563)+_0x599b38(0x594)+';\x20wid'+_0x599b38(0x3a5)+_0x599b38(0x192)+'heigh'+'t:\x2032'+_0x599b38(0x1ea)+_0x599b38(0x5ed)+_0x599b38(0x394)+_0x599b38(0xe1)+_0x599b38(0x414)+'dth:\x20'+'25px;'+_0x599b38(0x94)+'ht:\x202'+'5px;\x20'+_0x599b38(0x25f)+'low:\x20'+_0x599b38(0x273)+'le;\x20f'+_0x599b38(0x29a)+_0x599b38(0x3e1)+'p-sha'+_0x599b38(0x1d5)+'\x200\x204p'+_0x599b38(0xc3)+'a(255'+_0x599b38(0x459)+_0x599b38(0xb6)+_0x599b38(0x137)+'rop-s'+'hadow'+_0x599b38(0x3db)+'10px\x20'+_0x599b38(0x130)+'255,1'+'07,15'+_0x599b38(0x3da)+_0x599b38(0x384)+'\x20\x20.mn'+_0x599b38(0x252)+_0x599b38(0x36f)+'ex:\x201'+_0x599b38(0xf8)+_0x599b38(0x3ba)+'h:\x200;'+_0x599b38(0x3a1)+'lay:\x20'+_0x599b38(0x573)+'\x20flex'+'-dire'+_0x599b38(0x205)+_0x599b38(0x165)+_0x599b38(0x506)+_0x599b38(0x3b1)+_0x599b38(0x194)+'p\x20{\x20d'+_0x599b38(0x58e)+'y:\x20fl'+_0x599b38(0x591)+_0x599b38(0x523)+_0x599b38(0x372)+_0x599b38(0x39c)+'ter;\x20'+'gap:\x20'+'12px;'+_0x599b38(0x1d1)+_0x599b38(0x623)+'6px\x206'+_0x599b38(0x5d6)+_0x599b38(0x4d3)+_0x599b38(0x287)+':\x20gra'+'b;\x20us'+_0x599b38(0x54e)+'lect:'+_0x599b38(0x409)+_0x599b38(0x207)+'ch-ac'+_0x599b38(0x1a6)+'\x20none'+_0x599b38(0x8a)+_0x599b38(0x74)+_0x599b38(0x69)+_0x599b38(0x583)+'ize:\x20'+'17px;'+_0x599b38(0x67e)+'-weig'+_0x599b38(0x387)+_0x599b38(0xbb)+_0x599b38(0x51b)+_0x599b38(0x389)+'ing:\x20'+_0x599b38(0x66d)+_0x599b38(0x465)+_0x599b38(0x5c6)+_0x599b38(0x11d)+_0x599b38(0x50f)+_0x599b38(0x58e)+_0x599b38(0x76)+'id;\x20p'+'lace-'+_0x599b38(0x372)+_0x599b38(0x39c)+'ter;\x20'+'width'+_0x599b38(0x337)+'x;\x20he'+'ight:'+_0x599b38(0x176)+_0x599b38(0x136)+_0x599b38(0x143)+'0;\x20bo'+'rder-'+'radiu'+_0x599b38(0x135)+_0x599b38(0x45b)+'ckgro'+'und:\x20'+_0x599b38(0x626)+_0x599b38(0x3e9)+_0x599b38(0x2d8)+'lor:\x20'+'inher'+_0x599b38(0x330)+_0x599b38(0x45c)+'y:\x20.4'+_0x599b38(0xc9)+'rsor:'+_0x599b38(0x4ea)+_0x599b38(0x209)+_0x599b38(0x626)+_0x599b38(0x218)+_0x599b38(0x118)+'city\x20'+_0x599b38(0x2a1)+_0x599b38(0x23c)+'round'+'\x20.2s;'+_0x599b38(0x3e6)+'.mn-c'+_0x599b38(0x240)+_0x599b38(0xb7)+_0x599b38(0x5c5)+_0x599b38(0x644)+':\x201;\x20'+'backg'+_0x599b38(0x2d4)+':\x20rgb'+_0x599b38(0x5f8)+_0x599b38(0x185)+_0x599b38(0x195)+_0x599b38(0x3f8)+_0x599b38(0x3b1)+_0x599b38(0x4ba)+_0x599b38(0x4ce)+'vg\x20{\x20'+'width'+_0x599b38(0xfe)+_0x599b38(0x478)+_0x599b38(0x230)+_0x599b38(0x297))+(_0x599b38(0x19a)+_0x599b38(0x2db)+_0x599b38(0x20a)+'troke'+':\x20cur'+'rentC'+_0x599b38(0x531)+_0x599b38(0x133)+_0x599b38(0x12d)+_0x599b38(0xd7)+_0x599b38(0x5d9)+_0x599b38(0x50a)+_0x599b38(0x246)+'ap:\x20r'+'ound;'+_0x599b38(0x3e6)+'.mn-c'+'ols\x20{'+'\x20flex'+_0x599b38(0x375)+_0x599b38(0x3c3)+_0x599b38(0x480)+_0x599b38(0x430)+'overf'+'low-y'+':\x20aut'+_0x599b38(0x333)+'splay'+':\x20gri'+_0x599b38(0x581)+'id-te'+'mplat'+_0x599b38(0x499)+_0x599b38(0x358)+_0x599b38(0x4b1)+_0x599b38(0x264)+_0x599b38(0x45d)+_0x599b38(0x58a)+'ding:'+'\x200\x204p'+_0x599b38(0x485)+'\x200;\x20}'+_0x599b38(0x283)+_0x599b38(0x1fc)+_0x599b38(0x5e7)+'order'+_0x599b38(0x554)+_0x599b38(0x322)+_0x599b38(0x192)+_0x599b38(0x23c)+_0x599b38(0x2d4)+_0x599b38(0x629)+'a(255'+',255,'+'255,.'+'025);'+_0x599b38(0x85)+_0x599b38(0x60e)+_0x599b38(0x4a8)+_0x599b38(0x5c1)+_0x599b38(0x326)+_0x599b38(0x35d)+'gba(2'+'55,25'+_0x599b38(0x90)+',.05)'+_0x599b38(0x151)+_0x599b38(0x7e)+_0x599b38(0x95)+_0x599b38(0x3c2)+_0x599b38(0x37f)+_0x599b38(0x416)+'\x20back'+'groun'+_0x599b38(0xb3)+'s;\x20an'+_0x599b38(0x196)+'on:\x20m'+'n-in\x20'+_0x599b38(0x60b)+'ease\x20'+'both;'+_0x599b38(0x3e6)+_0x599b38(0x3b3)+_0x599b38(0x231)+'n\x20{\x20b'+_0x599b38(0x534)+'ound:'+'\x20rgba'+_0x599b38(0x473)+'255,2'+'55,.0'+_0x599b38(0x87)+_0x599b38(0x3c2)+_0x599b38(0x29e)+_0x599b38(0x3c4)+_0x599b38(0x2c4)+_0x599b38(0x500)+_0x599b38(0xc3)+_0x599b38(0x5f8)+',107,'+'157,.'+'28),\x20'+'0\x200\x200'+_0x599b38(0x586)+_0x599b38(0x130)+'255,1'+_0x599b38(0x61d)+_0x599b38(0x2f5)+_0x599b38(0x5a1)+'8px\x203'+_0x599b38(0x124)+'gba(2'+_0x599b38(0xbe)+_0x599b38(0x105)+_0x599b38(0x613)+_0x599b38(0x8a)+_0x599b38(0xdd)+'card-'+_0x599b38(0x544)+'{\x20dis'+'play:'+'\x20flex'+_0x599b38(0x4f8)+'gn-it'+_0x599b38(0x512)+'cente'+'r;\x20ga'+'p:\x208p'+_0x599b38(0x66f)+'dding'+':\x2011p'+'x\x2012p'+'x;\x20}\x0a'+_0x599b38(0x47a)+'-card'+_0x599b38(0x84)+'e\x20{\x20f'+_0x599b38(0x420)+'1;\x20mi'+'n-wid'+_0x599b38(0x57b)+';\x20}\x0a\x20'+_0x599b38(0xdd)+'card-'+'title'+_0x599b38(0x133)+'ng\x20{\x20'+_0x599b38(0x4a3)+_0x599b38(0x63b)+'\x2013px'+_0x599b38(0x3c5)+'t-wei'+_0x599b38(0x237)+'600;\x20'+'color'+_0x599b38(0x629)+_0x599b38(0x659)+_0x599b38(0x1c0)+_0x599b38(0x400)+_0x599b38(0x198)+_0x599b38(0x626)+_0x599b38(0x218)+_0x599b38(0x165)+_0x599b38(0x103)+'s;\x20}\x0a'+_0x599b38(0x47a)+_0x599b38(0x3b0)+_0x599b38(0x4f1)+'sk-ca'+_0x599b38(0x2c5)+'tle\x20s'+'trong'+'\x20{\x20co'+'lor:\x20'+'#fff0'+_0x599b38(0x433)+_0x599b38(0x283)+_0x599b38(0xc1)+_0x599b38(0x631)+'paddi'+_0x599b38(0x15a)+_0x599b38(0x549)+'\x2010px'+';\x20}\x0a\x20'+_0x599b38(0xdd)+'ctl\x20{'+_0x599b38(0x3a1)+_0x599b38(0x405)+'flex;'+'\x20alig'+'n-ite'+'ms:\x20c'+'enter'+_0x599b38(0x639)+':\x208px'+_0x599b38(0x58a)+'ding:'+_0x599b38(0x4ef)+'0;\x20fo')+('nt-si'+_0x599b38(0x44f)+_0x599b38(0x475)+';\x20}\x0a\x20'+_0x599b38(0xdd)+'label'+_0x599b38(0x36f)+'ex:\x201'+_0x599b38(0x206)+'or:\x20r'+_0x599b38(0x43a)+'46,23'+'8,242'+_0x599b38(0x65c)+';\x20}\x0a\x20'+_0x599b38(0xdd)+_0x599b38(0xa6)+_0x599b38(0x25e)+'ositi'+'on:\x20r'+'elati'+_0x599b38(0x310)+'idth:'+'\x2026px'+';\x20hei'+_0x599b38(0x237)+'14px;'+'\x20bord'+'er:\x200'+';\x20bor'+'der-r'+_0x599b38(0x39e)+_0x599b38(0x1fa)+'x;\x20ba'+'ckgro'+'und:\x20'+'rgba('+'255,2'+_0x599b38(0x56f)+_0x599b38(0x640)+_0x599b38(0x131)+'rsor:'+_0x599b38(0x4ea)+'ter;\x20'+'flex:'+_0x599b38(0x409)+_0x599b38(0x151)+_0x599b38(0x7e)+'on:\x20b'+_0x599b38(0x534)+_0x599b38(0x4e1)+_0x599b38(0x8f)+_0x599b38(0x3b1)+'sk-sw'+_0x599b38(0x156)+':afte'+'r\x20{\x20c'+'onten'+'t:\x20\x22\x22'+_0x599b38(0x75)+_0x599b38(0x218)+':\x20abs'+'olute'+_0x599b38(0x12e)+':\x203px'+_0x599b38(0x19d)+_0x599b38(0x648)+_0x599b38(0xdf)+'dth:\x20'+_0x599b38(0x43e)+'heigh'+'t:\x208p'+_0x599b38(0x17d)+_0x599b38(0x349)+'radiu'+'s:\x2050'+_0x599b38(0x21f)+'ckgro'+_0x599b38(0x5e0)+_0x599b38(0x130)+_0x599b38(0x21e)+_0x599b38(0x56f)+_0x599b38(0x62c)+_0x599b38(0xc8)+_0x599b38(0x383)+'ion:\x20'+_0x599b38(0x65e)+'.2s,\x20'+_0x599b38(0x23c)+'round'+'\x20.2s,'+_0x599b38(0x85)+_0x599b38(0x60e)+_0x599b38(0x553)+_0x599b38(0x8a)+_0x599b38(0xdd)+_0x599b38(0xa6)+_0x599b38(0x469)+_0x599b38(0x453)+'cked='+'\x22true'+'\x22]\x20{\x20'+_0x599b38(0x23c)+_0x599b38(0x2d4)+_0x599b38(0x629)+'a(255'+_0x599b38(0x459)+_0x599b38(0xb6)+_0x599b38(0x96)+'}\x0a\x20\x20.'+_0x599b38(0x1c2)+_0x599b38(0x599)+_0x599b38(0x3d0)+_0x599b38(0x2a3)+_0x599b38(0x2d0)+_0x599b38(0x26f)+'::aft'+_0x599b38(0x424)+'left:'+_0x599b38(0x10d)+_0x599b38(0x1e7)+_0x599b38(0x556)+'nd:\x20#'+'ff6b9'+_0x599b38(0x5bd)+_0x599b38(0x527)+_0x599b38(0x600)+_0x599b38(0x609)+_0x599b38(0x170)+_0x599b38(0x610)+_0x599b38(0x8a)+'\x20.sk-'+'range'+_0x599b38(0x45a)+'splay'+':\x20fle'+_0x599b38(0x2e3)+'ign-i'+_0x599b38(0x5d2)+'\x20cent'+'er;\x20g'+'ap:\x208'+'px;\x20}'+_0x599b38(0x283)+'k-sli'+'der\x20{'+_0x599b38(0x167)+'kit-a'+_0x599b38(0x4dc)+_0x599b38(0x654)+_0x599b38(0x409)+';\x20app'+_0x599b38(0x62e)+_0x599b38(0x385)+_0x599b38(0x275)+_0x599b38(0xc0)+':\x2090p'+_0x599b38(0x478)+_0x599b38(0x230)+_0x599b38(0x667)+'\x20back'+_0x599b38(0x228)+'d:\x20tr'+_0x599b38(0x371)+'rent;'+_0x599b38(0x3e6)+_0x599b38(0x1e9)+_0x599b38(0x111)+_0x599b38(0x52f)+_0x599b38(0x171)+_0x599b38(0x57a)+_0x599b38(0x62d)+_0x599b38(0x18c)+'-trac'+_0x599b38(0x9d)+'eight'+_0x599b38(0x201)+_0x599b38(0x136)+_0x599b38(0x52a)+'adius'+_0x599b38(0x201)+_0x599b38(0x1e7)+_0x599b38(0x556)+_0x599b38(0x285)+_0x599b38(0x46c)+'-grad'+'ient('+'#ff6b'+_0x599b38(0xf5)+_0x599b38(0x596)+_0x599b38(0x513)+'0\x20/\x20v'+_0x599b38(0x1e8)+_0x599b38(0xae)+'%)\x2010'+_0x599b38(0x3ec)+'-repe'+_0x599b38(0x3d1)+'gba(2'+'55,25')+(_0x599b38(0x90)+_0x599b38(0x16a)+_0x599b38(0x8a)+_0x599b38(0xdd)+_0x599b38(0x57a)+_0x599b38(0x4bf)+_0x599b38(0x61a)+'-slid'+_0x599b38(0x3fd)+'umb\x20{'+_0x599b38(0x167)+_0x599b38(0x48f)+_0x599b38(0x4dc)+'ance:'+_0x599b38(0x409)+';\x20wid'+'th:\x206'+'px;\x20h'+'eight'+':\x206px'+_0x599b38(0x575)+'gin-t'+_0x599b38(0x48b)+_0x599b38(0x192)+_0x599b38(0x380)+'r-rad'+_0x599b38(0x3ad)+_0x599b38(0x1fb)+_0x599b38(0x23c)+_0x599b38(0x2d4)+_0x599b38(0xa8)+'6b9d;'+_0x599b38(0x85)+_0x599b38(0x60e)+'w:\x200\x20'+'0\x200\x202'+_0x599b38(0x2d3)+_0x599b38(0x587)+_0x599b38(0x429)+',157,'+'.4);\x20'+'}\x0a\x20\x20.'+'sk-sl'+_0x599b38(0x181)+_0x599b38(0x4fb)+'-rang'+'e-tra'+'ck\x20{\x20'+'heigh'+_0x599b38(0x6d)+'x;\x20ba'+'ckgro'+_0x599b38(0x5e0)+_0x599b38(0x130)+_0x599b38(0x21e)+'55,25'+'5,.08'+');\x20}\x0a'+'\x20\x20.sk'+'-slid'+'er::-'+_0x599b38(0x107)+_0x599b38(0x153)+'progr'+'ess\x20{'+'\x20heig'+'ht:\x202'+'px;\x20b'+_0x599b38(0x534)+_0x599b38(0x31c)+'\x20#ff6'+_0x599b38(0xee)+_0x599b38(0x3b1)+_0x599b38(0x449)+_0x599b38(0x181)+':-moz'+'-rang'+_0x599b38(0x3a2)+_0x599b38(0x408)+'width'+':\x206px'+_0x599b38(0xa0)+_0x599b38(0x237)+_0x599b38(0x618)+_0x599b38(0x380)+_0x599b38(0x5a9)+'\x20bord'+_0x599b38(0x216)+_0x599b38(0x152)+_0x599b38(0x4a1)+_0x599b38(0x3c8)+_0x599b38(0x228)+'d:\x20#f'+_0x599b38(0x610)+';\x20}\x0a\x20'+_0x599b38(0xdd)+_0x599b38(0x2e4)+_0x599b38(0x67e)+'-size'+':\x2011p'+'x;\x20fo'+'nt-we'+'ight:'+_0x599b38(0x125)+'\x20min-'+_0x599b38(0xc0)+':\x2028p'+_0x599b38(0x227)+'xt-al'+'ign:\x20'+_0x599b38(0x1bf)+_0x599b38(0x206)+'or:\x20r'+_0x599b38(0x43a)+'46,23'+'8,242'+_0x599b38(0x440)+'\x20}\x0a\x20\x20'+'@keyf'+'rames'+_0x599b38(0x200)+_0x599b38(0xd0)+'rom\x20{'+_0x599b38(0x1bb)+_0x599b38(0x41e)+_0x599b38(0x570)+_0x599b38(0x16b)+_0x599b38(0x1f0)+_0x599b38(0x536)+_0x599b38(0x4e5)+'6px);'+'\x20}\x20}\x0a'+'\x20\x20');function _0x5736ad(_0x3a1d4d){var _0x19086b=_0x599b38;if(document[_0x19086b(0x2aa)]&&(document['ready'+_0x19086b(0x66a)]==='inter'+_0x19086b(0x4e4)+'e'||_0x254194['atXic'](document[_0x19086b(0x2b8)+'State'],_0x254194['VGSUa'])))_0x3a1d4d();else document['addEv'+'entLi'+'stene'+'r'](_0x19086b(0x5b2)+_0x19086b(0x4ab)+_0x19086b(0x17f)+'d',_0x3a1d4d,{'once':!![]});}_0x5736ad(function(){var _0x2e8e2a=_0x599b38;try{if(!document['body'][_0x2e8e2a(0x367)+_0x2e8e2a(0x672)](_0x50a2d))document[_0x2e8e2a(0x2aa)][_0x2e8e2a(0x41c)+_0x2e8e2a(0xde)+'d'](_0x50a2d);document['body'][_0x2e8e2a(0x41c)+'dChil'+'d'](_0x514d5b),document['body'][_0x2e8e2a(0x41c)+'dChil'+'d'](_0x4ee97d),_0x39dd8f(_0x2e8e2a(0x65f),'DOM\x20m'+'ounte'+'d\x20(ov'+_0x2e8e2a(0x4cb)+'\x20+\x20pa'+_0x2e8e2a(0x493)+'\x20butt'+_0x2e8e2a(0x16c));}catch(_0x2e57c6){_0x39dd8f(_0x254194[_0x2e8e2a(0xf2)],'DOM\x20m'+_0x2e8e2a(0x3f4)+_0x2e8e2a(0x190)+'d:\x20'+(_0x2e57c6&&_0x2e57c6[_0x2e8e2a(0x11a)+'ge']));}}),console[_0x599b38(0x348)](_0x599b38(0x33c)+'a\x20Cli'+_0x599b38(0x379)+_0x599b38(0x2a0)+_0x599b38(0x129)+_0x599b38(0x5be)+'\x20UWMK'+_0x599b38(0x484)+_0x599b38(0x26e)+'diagn'+_0x599b38(0x66e)+'s\x20on)'),requestAnimationFrame(_0x58a442);})()));
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
