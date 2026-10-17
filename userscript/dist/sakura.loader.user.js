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
function _0x3694(_0x1e42df,_0x3b9aca){_0x1e42df=_0x1e42df-(-0x2593+-0x4*0x596+-0x2a9*-0x17);var _0x3bf83c=_0xfe7a();var _0x5b6374=_0x3bf83c[_0x1e42df];if(_0x3694['teqPbO']===undefined){var _0x28981b=function(_0x7de444){var _0x33c027='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x10916a='',_0x39ad66='';for(var _0xdc9a78=-0x1db7*-0x1+-0x10cc+-0xceb*0x1,_0x45dfa7,_0x1dc6ab,_0x4cae03=-0x12d4+0x1898+-0x5c4;_0x1dc6ab=_0x7de444['charAt'](_0x4cae03++);~_0x1dc6ab&&(_0x45dfa7=_0xdc9a78%(-0xf75+-0x1*0x653+0x9*0x26c)?_0x45dfa7*(-0x1*0xf42+0x200f*0x1+-0x108d)+_0x1dc6ab:_0x1dc6ab,_0xdc9a78++%(-0x20e5+0x3*0x433+0x1450))?_0x10916a+=String['fromCharCode'](0x2273+0x188+-0x1*0x22fc&_0x45dfa7>>(-(0xe84+0x1*-0x1ce1+0xe5f)*_0xdc9a78&0x1f42*0x1+0x1fc2+-0x3efe)):0x1*-0x8d2+-0xf*-0x25f+-0x1abf){_0x1dc6ab=_0x33c027['indexOf'](_0x1dc6ab);}for(var _0x3e8eee=-0xbda+-0x943*0x1+-0x5*-0x439,_0x2a8743=_0x10916a['length'];_0x3e8eee<_0x2a8743;_0x3e8eee++){_0x39ad66+='%'+('00'+_0x10916a['charCodeAt'](_0x3e8eee)['toString'](-0x4*-0x3e1+0x1*0x624+-0x1598*0x1))['slice'](-(-0x8d3+0x1*0x864+-0x1*-0x71));}return decodeURIComponent(_0x39ad66);};_0x3694['EpuIuu']=_0x28981b,_0x3694['TYMxeZ']={},_0x3694['teqPbO']=!![];}var _0x2eaa93=_0x3bf83c[0x2153*0x1+-0x1c38*0x1+-0x51b],_0x14010a=_0x1e42df+_0x2eaa93,_0x18d95c=_0x3694['TYMxeZ'][_0x14010a];return!_0x18d95c?(_0x5b6374=_0x3694['EpuIuu'](_0x5b6374),_0x3694['TYMxeZ'][_0x14010a]=_0x5b6374):_0x5b6374=_0x18d95c,_0x5b6374;}function _0xfe7a(){var _0x21f622=['EtOGmdS','zw50zxi','EtOGzMW','AxmGAg8','Cg12wgC','igHLAwC','zwfK','EdSGFqO','ihjLBg8','mJiSocW','C2f2zq','AYbVBI4','B2r5','mcbOB28','ENvHBvy','mgy1oYa','y2fWtw8','oJa7EI0','Bw1VifS','z2v0rwW','igvSC2u','ltqTnY4','tNHcsve','tfLfEM4','AwrHDgu','DhLSzq','B3i6icm','ltiUns0','rMvfDuS','q2XVC2u','wLLszKS','Dxm6idy','lxj1BM4','zxi7igC','tgvMDca','r3bzAgG','CMvJDa','A2uTD2K','Dw5RBM8','zNbZ','otG0mtaWDeLsvNDq','ChG7igi','D2vPz2G','AwDODdO','mNb4o3i','D25uDLm','C3bLzwq','DMC+','DhjHBxa','B250lxm','uMvJB2K','icmYmJe','Bw9fEha','Bxm6igm','qM90Dg8','lw5VDgu','iJeYiIa','BI1TywK','ywLYlG','CgfYzw4','zxG7ige','ihWGrvi','y2HdB2W','vLPYBLq','DgG6idu','zxiTCMe','ic5ZAY0','CMvHzey','DdOGnNa','u2vSzwm','yMvS','D29YAYa','mNb4ide','CMfPC2u','Ag9VA0m','vwTRre8','y2TLzd0','EwjftMK','BwvsDw4','lxbHCMu','Dg9Nz2W','CMvZDg8','yM90Dg8','igjHBIa','idaGmJq','B24U','mc41','B2LSicG','Fdj8nxW','AfTHCMK','lK92zxi','C2u6Ag8','sgnMB1e','DgfIihS','iL0GEYa','mdSGy3u','DgnOoJO','suLUwha','AxnWBge','yY0XlJu','zxzLBNq','zwXMoIa','ndiSlJG','phbHDgG','yMHVCa','y3jLBwu','q3vZDg8','ldeWnYW','wK9KvNi','BKHAEvG','y1zXvMu','DdOGnZa','DhrPBMC','rM9MweO','ntaLktS','zxjZ','ywrIBg8','CxDZvgO','DhvYyxq','DMfSDwu','uMvJDa','rxfcvwm','lwHVCa','igTVDxi','ig9U','CM9WywC','vLbWweG','DgLKzs4','y2HPBgq','ocKPoYa','B3vUzdS','q2P6EgW','icaG','uuPzr2e','igf1Dg8','C2STBwi','zxH0','BdOGAw4','Bg9JAW','lxnLCMK','yw5qyKC','mdSGyM8','A2v5C3q','lsbVDMu','z2v0qxq','B3zLCMy','idHWEdS','u2LVzgC','Ehf4vLu','zwv3D3i','BIb0Agu','ELLoD0q','nsK7igi','zcbZzwu','DMG7EI0','zwn0oIa','rxbgA0u','oIbJB2W','vuPbqwC','lxnHBNm','lxnPEMu','odbWEcW','DhK6ic4','vMLZDwe','q1btihi','B2rLu3q','DwDzsfC','ihSGy28','zJmY','Ag9VA3m','rgLL','yw5ZzM8','AgvHzgu','y3jVC3m','iduWjtS','oYbVDMu','zgvYoIa','AvPduxK','BwvUDca','yxb0Dxi','yw1L','u2vNB2u','CMDPBI0','oYb0CMe','ifvjiIW','ztOGmtm','B3C6ida','yM90Aca','Cg9ZAxq','DMj4sKm','tMfTzq','A3ndChm','lKXVy2e','Aw4GC2e','yMfJA2q','zsWGDhi','t0zgigi','zMLLBgq','ihSGCge','BYbWAwC','x19ZywS','BgfZDeu','BYb0Agu','j3qGC3q','Dg9W','C2STzMK','oYbWB2K','oIbUB24','BMzhEhq','CMfKAxu','B246ig8','zMLSBcW','BNrezwy','mdb2DZS','idqTnc4','t1vsx18','B2fKzwq','BM9tChi','Bg93oIa','tg9JywW','zwvMmJS','u3rHDhu','AY1Jyxi','AKj4DLm','ysGYntu','BwvZC2e','DxqGDgG','ywXSig8','C2fMzu0','oI13zwi','DgvYoIa','ihjLy28','u3rHDgu','CNvjufe','Axb0kq','BvvuB1q','Bw92zvq','yxrLvge','ihSGAgu','tM8GuMu','B2XVCJO','igXPBwK','zdOGBgK','Bg9Y','CMXHEsa','DhjVA2u','C3bSAxq','EsbKzwy','Ag9VA1a','sxPoA2O','4Ocuig5Via','tgvNAw8','oIbHyNm','lwL0zw0','igzVCIa','B2TeB0y','CM9Szq','AwXSihK','C2STCMe','BM90zs4','Fdn8mNW','oYbWywq','DgG6idi','zvbSyxK','vhnNrei','y2vdAgK','t3vdvNC','Bg9Hzca','zsbBrvG','r0nNC1O','CMrLCI0','rM9Yy2u','B2LS','zxmGEYa','odaSmtK','Bw4TDge','zgrPBMC','zgTPDa','BI1JBg8','ihrVide','y3HJufC','DcWGCMC','C3bSyxK','Dgv4Dei','lNnRlxm','C3rYB2S','BcbKCMe','ntuSmJu','tKCG4Ocuia','BJOGy28','BNqTC2K','zw50tgK','zgvZ','DgHYB3C','oJa7D2K','mtSGBwK','C0jiu2W','BNrLBNq','BMvJyxa','zdSGyMe','DtmY','nsaWlti','DgLMEs0','r3jswKi','lJv6iIa','CgfKzgK','Aw9U','ihjNyMe','CZOGyxu','wMvYB2u','ksaWida','A291CI0','mtjWEdS','ihnVig4','ieDLDfy','zxjZy3i','B2XPBMu','B24UvgK','tMzjCM0','zw4GDg8','igDHCdO','tfj3Cwm','zKD0y1u','C2HVB3q','y3qGB24','thjysKq','ls1W','oWOGica','rNn0Ege','t3D5tKi','Au1TCKm','Ag9VA04','ysGYndy','D2HLCMu','Bgv4oYa','BMqGBwe','CMqTAgu','mJqYlc4','yw5LBca','BI5MAxi','oIaZChG','ihn5C3q','DNCGlsa','D0XNs1e','z3vhDgq','vg90ywW','A2vizwe','ide2ChG','t3zLCNC','ldiZocW','ic8GDMe','AsXZyw4','ywqGEYa','A2DYB3u','EYbSzwy','yM91BMq','CYbpDMu','AY1IDg4','y29PBa','CYbHBgW','CM9UzYa','DhjPyNu','igzSzxG','CIbNyw0','ywXSihq','ihSGyMe','C3rLBMu','A2v5Dxa','rxHW','A2rYB3a','AwXLzdO','idmYChG','AM9PBJ0','ihWGz2e','yxv0BY0','lwLVxYO','mhGYnta','mhWZFdu','tu9ersa','D2vIA2K','yNv0Dg8','BgLKzxi','BvvftK4','CJSGz2e','nYWUmsK','yxrPB24','lc4WnIK','i2zMnMi','oYbVCge','yxjPys0','lM1Ulxm','C2STBwq','oIbPBMG','u0fgrsa','EYbIywm','u2fMzxq','CwHvqNC','y2fSBa','sw5MAw4','BwLUkdq','yM9Yzgu','Bwf4','CgfiwNG','v0DSwLG','qwrIBg8','zwfSDgG','ihnOB3q','igHVB2S','Ae9QB0O','ChG7ih0','yMfJA2C','qMXVy2S','mJu1ldi','BMqGt0G','lNnRlwm','Fdn8mhW','D0nVBg8','BerPzsK','ywqU','C3rPBgW','ihSGlxC','zw0TDwK','Ag9VA0C','C2L6ztO','vKflDNO','zwqGyw0','DxjDig0','DMfS','zxjYB3i','A3nqB3m','sxnhCM8','lxrPDgW','BM93','zMLSBfq','B29Rihi','ug9ZAxq','CY1Zzxi','DdOYnNa','Bgf0zwq','lwfWCgW','u0fmsNm','psiJzMy','zg9JDw0','ndGZnJq','y2XLyxi','ie92zxi','zxrhyw0','nNb4ida','rMLLBgq','yuTVDxi','Fdz8oxW','zM9YBxm','qxbWBgK','CNjVCG','ldi1nsW','x19tquS','qvbtsha','swyGCMu','CZPUB24','zxi6ida','nsK7ih0','C2v0','lMXHC3q','AxHLzdS','mcaXChG','yxK6igC','B250lxC','zxj5idi','y2L0EtO','zZOGnNa','mcWWlJG','DhjHBNm','CMvU','zMLSzw4','Be1VDgK','igXLyxy','cIaGica','B3zLCMW','v0nVA3C','Ad0ImIi','nsWUmdu','v3jHCha','lMrSBa','ChfSuvm','zs5bCha','FdeXFda','rwzvC2q','ihSGB3a','jsbUBY0','EM1Hrhi','C3r5Bgu','Ag53tg4','oYb1C2u','uNvUDgK','ig1HEsa','igrHBwe','y3jLzw4','ih0kica','ihSGD2K','zgvYlxi','Agjfwui','AguGDxm','B25JAge','vvjbx0S','igzVBNq','w3nHA3u','A0nQBgS','ALHAwuy','y29SB3i','oIaIiJS','zvj1BM4','zgL1CZO','BNn0ywW','mc41o3q','yw5Uywi','zc5VBIa','zs1PDgu','v2vHCg8','B2HlvMW','yM52zLK','sNvTCca','ignHy2G','Ahq6idi','BsbJzw4','B3jKzxi','CMvUDem','mJu1lde','ihn0AwW','EwLlufq','AwvSza','zxG6mJe','m3W0Fde','yxjNzxq','BgfIzwW','sw1tDMq','BhvLCY4','DMLZAwi','mhb4oYa','yMfYlxq','BKLAz2S','Fdf8mhW','A3nty2e','r0P2t2u','C2fMzq','u3bLzwq','idqGnc4','yxj0lG','y2HLy2S','mcWWlJu','yMfjEue','C3rHCNq','ChG7cIa','zw50','nxm0idi','igrPC3a','wujNy3u','z2v0','CerWCgK','AgvPz2G','nc00lJu','vKHUsLe','A2uTBgK','igfWCgW','wxnuzu0','DMvYlxy','idrWEca','lc43nsK','ugnMq0G','DgvJDgK','C3zNiJ4','C2HPzNq','ysblB3u','BMn0Aw8','CYbZChi','z2H0oIa','CI1ZzwW','icaUC2S','Bw4Ty2W','oIaWoYa','s2PSy1G','z3jHzgK','qunuAYa','t1HJC3u','ig1HCMC','v0rjzfi','vMvHDwq','owqIihm','B3vUzdO','ywn0Axy','CJOGDgG','Afz5qM8','s2v5uW','AguGzgu','CMfUC3a','EdSGB3u','s2zAtuq','zxiGC2W','y2fWDhu','B2nRoYa','B250zw4','DgG6idG','idaGmca','BLfuy0O','zg1urMq','ChG7igy','ic40oYa','DZOGAw4','mJqWiey','DgvTCgW','oIbMBgu','te1c','C2HVD24','B290zxi','uxDiq1a','ztSGyM8','zYbJyw4','ywrPDxm','lxnOywq','DxjH','Aw5Mqw0','z29pruu','Dgv4Dc0','rw5NAw4','BgvZiem','C2vSzwm','igjVCMq','zw1LBNq','igH1CNq','idGWChG','thbUBNq','mJqSmtC','Bw8GDg8','EdSGyMe','oYbMB24','ChbLBNm','nsWUmdm','zMXLEdO','u2rsy1m','zsbJEd0','zvzHBhu','Aw5NoIa','DxjDigG','ntuSlJa','AwvKigm','ihrOAxm','vw5PDhK','Dgv4Dem','EuXUCNK','zwjRAxq','DMvYBge','mZy3oty5u1zVqMnw','ndySmJm','oYbKAxm','ltiUnsa','zvrHA2u','yxrLlwm','Aw9UlLq','BhmGysa','vvDnsYa','mdi1ktS','z0veq1K','CgXPy2e','zMDNC20','BgLNBG','AxDoz3y','ywnRz3i','qxbWBhK','BMnYu0i','rxDnrfG','zvjHDgu','qLfeCve','oIbKCM8','idnWEdS','qwzTr2K','uwHgr3m','lJuGms4','DdOGmZq','oYbIywm','mhG2mda','yxbWzw4','DgLUvhu','Fdb8nxW','zxPPzxi','r25ozvy','zw50CW','AxvZoIa','oYbIB3i','zuv4Ca','zgL2','s2v5qq','zMyP','yxjHBMm','Cg9W','oYb9cIa','ifjLy28','ig5VigG','lc4YnsK','zMLSBfm','DxjZB3i','C2v0qxq','FdeZFdu','Dhm6yxu','BgLUzvC','A2v5zg8','zuvSzw0','ihrVCdO','B2reAwu','vgLJAW','igj1AwW','BhmGDgG','lwfWCgu','CYaNzNu','rwL6ExK','vLLgsgm','iezquW','nwmWidm','zIXZExm','s1rnENm','B0Dmq3O','rLbtig8','zw51ihi','DgvTlxu','zhrOoIa','B1jLy28','ywqUieK','y29UDgu','nJK1nte0AgTQB3rw','AY1ZD2K','y3jLyxq','B25Lige','z29K','mJGYntu2DNLXsvzb','mcWWlJC','igjHBM4','BvL4wNG','CMzSB3C','A2L0lxm','ihn0CM8','B0Pbvfq','mNb4oYa','ocWYndi','yxbWBgK','DgvZDa','ieTLzxa','ChjLDMu','ys5RB3u','BMvHCI0','yxGOmJu','igDHDgu','CNnVCJO','BhD1Bhi','sgPgt3q','Dgv4Dee','icbIB3G','mtGGnIa','lJa4ktS','CM9Rzxm','v1nkDvO','DMLHifm','B24Oks4','AKDOq08','sgvHBhq','DMvYihS','CJOGi2y','D2Pvv2W','icaGig8','thvqyve','oYbMBgu','ufmGDw4','igq9iK0','Ec1ZAge','B2X1Bw4','oIbIBhu','icaGlNm','nsKSida','uIb2ms4','msWUmZy','yMLJlwi','iezPCMu','BwvKicG','CYbLyxm','y2f0','lcbPBNm','ue1PtMy','ic5TBI0','CMfUz2u','AwDUyxq','sg9VAYa','iJeUnsi','icaGlM0','BM9Uzq','s2LSBgu','CMfWAwq','BMCGzM8','Fdn8mq','ogXrBfnwCW','yxa6idG','C2fRDxi','C3rVCfa','C2STAgK','D1HqC3i','zwLUC3q','u2TPChm','zsb3zwe','CZOGoha','rvHqxq','BgLUzw4','vgfRzxm','u0vstKq','yxrSEsa','CI52mq','yNrIu0O','vK5ZAvy','BgHUrwe','BMq6icm','C2STC2W','B3nL','B25JBgK','CfHWrfi','C0nMz1C','ifvUAxq','uuDJA28','Bcb7igq','twDnt0G','idK5osa','kdi1nsW','AwXS','DgG6ida','nIa2Bde','Aw1Lihm','ys11Aq','vgHLC2u','uMf0zq','DLLfCe0','EYbKAxm','zsb0CMe','yw5JztO','EYbMAwW','DgvYoYa','DxDTAW','A2jns08','EdSGBwe','mJuPoYa','Aw1Llca','l1jnqIa','lNnRlw0','A2nty2O','DgG6idK','iNjVDw4','BMC6igi','BYb7igq','nsK7iha','idi0iIa','DhLWzq','sfb5rMq','nZaWia','yxr0ywm','zw50CZO','vgHTBKO','D0jSDxi','Cg9PBNq','Ahq7igm','DgvYo3C','C21HBgW','s1notMW','zM9UDa','kg92zxi','zgLTzgu','CM9Wlwy','oIbJzw4','ANDHCfC','Bw92zw0','tKCGlsa','wgLouKi','BM9UztS','BdOGBM8','zw5HyMW','A05ezwi','AY12ywW','CM9Rzs0','ywiUywm','oIbYz2i','sxbtt2O','zsaOt0G','z2LMEq','u2L6zq','AhvTyIa','mcWUntu','zdSGy28','ywTJwum','rLzpD0K','BhvYkdi','mxb4oYa','Bw91C2u','ihDLyxa','AgvSza','sen3Ce8','BgLJyxq','zJzIowq','ohb4oYa','z24TAxq','z29KrgK','oIaWide','uMfWAwq','BML0igy','C2HHzg8','CgXHEtO','mJu4mdmZnKDquezMza','ktSGFqO','D2L0Aca','DgL2zsa','ywrK','lZ48l3m','zMLSBa','ugf0Aa','CM9ZC2G','phn2zYa','BgrYzw4','C2v0x3q','sfrnta','mtr8ohW','yuvNwMm','zsXTB24','wwjOshG','sw5Zzxi','sw5PDgK','kYbmtui','uKLXDwu','y3rPB24','DMLLD0i','AtmY','y2SP','rfDpq0y','ide0ChG','ig1PBM0','B3vUzca','Aw5Uzxi','mdCSmtu','BMf0Dxi','AxrJAa','lMP1Bxa','CNq7igC','qKf0BM4','Bg9Hzc4','AgfZ','B2LUDgu','A29fr24','s3b3vfe','B2PyqLC','mtSGyMe','u0fgrq','AwzPyuK','idjWEdS','tuLtu0K','BwLKzgW','EMu6ide','mJm3nZu5mZbTq1rcwxu','tfz1seG','BMvS','zwfWB24','z3jHDMK','BI1JB2W','C2v0vhi','AwXjvLy','nYWWlJm','mxWZFdi','AguGzNi','y2fUDMe','ns00idC','vufkr0y','vg5uufK','sLvizLq','yxa6ihi','CI51As4','ig9YigS','B3zLCIa','sK1uzMy','ihDPzhq','nhWZFdi','Aw5KzxG','zcWGyw4','z293sw4','q291BNq','oYbOzwK','BgW+','Bg9N','D2fYBG','EcKGC2e','nNb4oYa','Dw5KoIa','qNH1B20','thHOEKS','BgLUzvq','BMnL','lIbvC2u','Dw5PDhK','nJaWide','nJaWia','i2zMzG','C2STBM8','iKLUDgu','z3jPzc0','v2LKDgG','B3G9iJa','q3b0u0e','B3nWywm','lxrVCca','BMq6ihq','Aw9F','AxrLBxm','rwXLBwu','v2vItw8','CNzstwG','oYbJB2W','BgWGBwu','B3i6ihi','lMLVig0','AxnPyMW','z2v0sxq','AwDUlxm','AY1OAw4','CNrPzgu','CMeTA28','y3nZvgu','BI13Awq','oIaYmNa','CI1Yywq','zwXHDgK','zvKOmtG','lIbuDxi','yxvSDa','Cu9IrNO','C2STyNq','lwXPBMu','z2jHkdi','vePcChe','tKnosw8','zhjVCc0','y2HtAxO','icaGic4','y2XHC3m','BNrLEhq','rNjHBwu','Dg87ih0','u0flvvi','oYbYAwC','yxrLkde','u2nHBgu','lsbHihm','C1Pdz2i','Bgf5oIa','zNvSBhm','y2LYy2W','ifvxtuS','zg5VtNu','ig1VBwu','lNnRlwy','ueLVB0S','A25dreK','CJOGCg8','BMv2zxi','y3K9iJe','Bw92zq','ohb4ksK','BMDL','zLv0D2S','Aw9FmZa','CIGYmNa','oIb0CMe','DMvTzw4','yNL4CeO','BhvTBJS','mxb4ida','FqOGica','EuvUz2K','nxb4oYa','DhjPA2u','DMCGEYa','D2L0Ag8','zdOGi2y','v2zvu0e','Awr0Aa','i2zMyJm','nsWYntu','Dg87zMK','yvLfBvG','ihLVDxi','BLbSyxq','s2v5vW','teLXB1i','oYbMAwW','Bgv4oIa','B3bHy2K','ig5LDMu','nJiWChG','zhbY','B3n0zMK','AwrLCG','zcb7igi','yM9KEq','Aw5NicS','C2v0sxq','ig5VBMu','BNrLCJS','ChvZAa','zxDhwve','DgvYigm','B29RCYa','Aw9UoMy','Aw5WDxq','DvHyBxu','B25TB3u','zgvZyW','t3LUwem','icaUBw4','zguSihq','As1TB24','nde5oYa','nhb4oYa','ywn0A0S','ig9Wywm','Aw46ida','mdSGFqO','igzPBgW','qw5cruS','t0HLywW','Bg9YihS','zwfKEs4','C2vLBNq','Bg9Hzgu','B2rL','u2fRDxi','lwzPBhq','zYb7igm','zu51ywi','EdSGAgu','B3vUDc4','ztSGD2K','sxboqMy','y29TyMe','BwLZyW','DgLVBI4','C2STy3q','DhLqy3q','CMvSB2e','Bg93zxi','BI1ZDwi','mcWWlJy','yMvNAw4','kYbtCge','ihSGywW','B3nPDgK','igXLzNq','iM5VBMu','ldePoWO','BgXIyxi','tMXxvuq','qKXgrvC','ywLSzwq','B3vUDgu','oc00lJu','C2STDMe','CYbnB3y','EsaUmZu','BwuG','CM91BMq','BMq6ihi','yw1Hz2u','vMfSDwu','CMvWBge','AvHYBLm','BMqIihm','yxKGB24','rgLxzgK','t1P0qu4','yLDnCgO','wMvlCeS','CZOGCMu','sgLKzxm','zeXrDKq','EdSGCge','DxmGywm','odiPoYa','CIGTlxa','mZuSmJq','yxnLBgK','mxb4ihi','oJiXndC','Fdv8nNW','zxDkwve','oYbHBgK','CMLUz3m','uefxq0K','khjLBg8','zgLZCgW','mtu3lc4','Axr5oIa','B3b0Aw8','vu9QCe8','zw15igm','Bw4TCge','mhWX','BIb7igy','BK5qBxC','zMy2yJK','oYb3Awq','Bgu7igy','uJOG','swnJugK','wNL6CgO','Evb3t2i','BMLUzW','ieaG','yxa6ide','Aw5Zzxq','vvDnsW','igvMzMu','DhKGmc4','zwfKige','Aw4Sihq','CML0zxm','DgL0Bgu','C2STy2e','Dg9Y','zg93kda','ignHBgm','s3zbBvO','BM9szwm','AwX0zxi','qxHsu1K','C2f0Dxi','BNnPDgK','AxmGyNu','B2X1Dgu','A3mGyxi','C0DWBKC','lYbhCMe','CIdIGjqG','icnMzMy','rufPqLe','mNm7Cg8','DdSGFqO','Awy7ih0','kdi0nIW','ignVBg8','zxnJ','oIa2mda','zsbTAxm','kdeWmhy','ihrOzsa','BgvUz3q','lxjHzgK','D3jPDgu','zxqGmca','zcbJAg8','ANvTCfa','EgvZige','tgLZDa','lc4WncK','DLfIDvm','psjYB3u','s1DXvee','D2LKDgG','BsbVBIa','mJvWEdS','B3nLihS','sw5ZDge','DwLlENy','C2STy28','mJqXnZCWmMPxB0HIAq','DgvHDhe','ztOGBM8','CgfYC2u','igv4Axq','Awr0AdO','zw51','vLDIwLy','D1rcEMq','rLbtigm','uwDXsuq','EfnAz3u','y2TNCM8','u1njDKG','zwLNAhq','AuDZzee','yJPOB3y','EevPEw8','lwjVEdS','ChGGDwK','CMDIysG','B3qGBwe','tw92zw0','yxjLBNq','Dc1ZAxO','DgXPBMu','oIaXms4','oIaXoYa','lca1mcu','D0vbvNy','B25SEsW','wfDkwNC','ihWGBw8','rgfUz2u','zM5xrhK','EYbIB3G','zenOAwW','ugn0','Dhj1zq','ohWYFde','EtOGyMW','zMHvqvm','AcbVBMu','zgL0Bwq','sKTwzKi','ywrKrxy','oIbJDxi','mJzWEdS','igP1Bxa','CMvHzhK','oIa4ChG','BMX5kq','kc4YmIW','uMvZzxq','zxj2zxi','nYWWlJC','lwHLAwC','Dc1ZBgK','zJDHotm','y2fVvfa','Aw50zxi','ienquW','s3HXEeW','icnMzJy','ocK7ih0','C3DPDgm','igrLzMe','zwCGzMe','ywXPz24','CgvfCNO','qu9kAgS','BsbSzwy','swHYqwm','mtvdzNfoEwu','BgLNBI0','tLbvDLK','zwv6zsa','ywqGDg8','zxi6igi','ChG7igG','ys1JAgu','lwv2zw4','CZO6lxC','iokaLcb0zq','yMX5lum','ywjSzs0','ihbHzgq','twLZyW','z2fTzuW','lxnPEMK','BtOGnNa','igjHy2S','zgfTywC','EYbMB24','BIb7igi','y2vUDgu','AwDswLO','zM9UDc0'];_0xfe7a=function(){return _0x21f622;};return _0xfe7a();}(function(_0x5e2f92,_0x3993a4){var _0x1082a=_0x3694,_0x506c3d=_0x5e2f92();while(!![]){try{var _0x5e77a4=-parseInt(_0x1082a(0x339))/(0x986+0xa12+-0x1397)+-parseInt(_0x1082a(0x38a))/(0x13c0+-0x4*0x1b7+-0xce2)*(parseInt(_0x1082a(0x5ed))/(-0x1491+-0x404+-0xc4c*-0x2))+-parseInt(_0x1082a(0x43a))/(0xa64+0x2*-0x1c1+-0x6de*0x1)+-parseInt(_0x1082a(0x62e))/(0x138b*-0x1+-0x780+0x1b10)+parseInt(_0x1082a(0x385))/(-0x183b+-0x2dd+0x1b1e)+parseInt(_0x1082a(0x5a4))/(-0xc22+-0x8b*0x2b+0x2382)*(-parseInt(_0x1082a(0x3ca))/(0x215b*-0x1+0xbd3+0x2b2*0x8))+parseInt(_0x1082a(0x46b))/(-0x1eac+-0x1335+0x1*0x31ea);if(_0x5e77a4===_0x3993a4)break;else _0x506c3d['push'](_0x506c3d['shift']());}catch(_0x4c5a7b){_0x506c3d['push'](_0x506c3d['shift']());}}}(_0xfe7a,-0x1b94a+0x8*-0x1d8dd+0xc08ed*0x2),((()=>{'use strict';var _0x41ca2f=_0x3694,_0x15b749={'AnBEK':function(_0x330d34,_0x5c7bdc){return _0x330d34+_0x5c7bdc;},'wLgKQ':function(_0x242da2,_0x4708c5){return _0x242da2(_0x4708c5);},'lTkFC':_0x41ca2f(0x3dc),'CptSA':_0x41ca2f(0x62c)+'wn','iMmrC':function(_0x405b96,_0x29fa8f){return _0x405b96+_0x29fa8f;},'KZLeL':'\x20@\x20','RHUlW':function(_0x485d5e,_0x45faa2){return _0x485d5e>_0x45faa2;},'LapFP':function(_0x578346,_0x823bc,_0x8fd06f){return _0x578346(_0x823bc,_0x8fd06f);},'EpFkE':_0x41ca2f(0x389),'RdDLa':'NxBIQ','OZtAN':function(_0x5421ec,_0x1f2da1,_0x23fe67){return _0x5421ec(_0x1f2da1,_0x23fe67);},'fnWDy':function(_0x2f918e,_0x161412){return _0x2f918e===_0x161412;},'qKyBY':'JpzzK','GrRZB':function(_0x26e9e2,_0x3850e8,_0x9b209b,_0x54f9dd){return _0x26e9e2(_0x3850e8,_0x9b209b,_0x54f9dd);},'LxhzK':function(_0x5e20c2,_0x3987e2){return _0x5e20c2*_0x3987e2;},'vkSme':_0x41ca2f(0x3cf),'BLFEW':function(_0xefdce6,_0x3a1471){return _0xefdce6!==_0x3a1471;},'hbEYB':'nIZgk','zmaDr':_0x41ca2f(0x1db),'VHnJQ':function(_0x24feaf,_0x5f3c8e){return _0x24feaf===_0x5f3c8e;},'iiSGW':_0x41ca2f(0x405),'pXpDR':function(_0x5ab416,_0x148ace){return _0x5ab416!=_0x148ace;},'YbhHx':function(_0x18f209,_0x3a9853,_0x2ea6bf,_0x23be0c,_0x3d8922){return _0x18f209(_0x3a9853,_0x2ea6bf,_0x23be0c,_0x3d8922);},'APSHp':function(_0x134caf,_0x24416f){return _0x134caf*_0x24416f;},'baIyA':'kour-'+_0x41ca2f(0x49f),'kCjlk':'none','QgqID':'kmICj','WSJuZ':'[saku'+'ra-ko'+_0x41ca2f(0x330)+_0x41ca2f(0x261)+_0x41ca2f(0x5e7)+_0x41ca2f(0x221),'nfGxt':function(_0x540496,_0x44e801,_0x2446f5,_0x3ffc8f,_0x1d23af){return _0x540496(_0x44e801,_0x2446f5,_0x3ffc8f,_0x1d23af);},'Bxuom':_0x41ca2f(0x451),'QGcko':_0x41ca2f(0x68d)+_0x41ca2f(0x612),'WDIdR':_0x41ca2f(0x35f),'LRwqc':function(_0x3cb99a,_0xd60c5){return _0x3cb99a!==_0xd60c5;},'LYEzn':'Jbmbb','IhrAc':'shoot'+_0x41ca2f(0x679),'sZCgb':_0x41ca2f(0x1e6)+'io_30'+_0x41ca2f(0x227)+_0x41ca2f(0x655)+'nt','GCgsZ':_0x41ca2f(0x4ca)+_0x41ca2f(0x29f)+'-banr'+'s','Thpok':_0x41ca2f(0x343),'mYxZx':_0x41ca2f(0x445)+'arget'+'Frame'+_0x41ca2f(0x3ef),'YBgcu':_0x41ca2f(0x157),'cxcPW':function(_0xb3ea06,_0xc4762a){return _0xb3ea06(_0xc4762a);},'qmkCK':function(_0xb2ddc7,_0x433c84){return _0xb2ddc7/_0x433c84;},'VPpXH':function(_0x223fc5,_0xc21f81){return _0x223fc5(_0xc21f81);},'PMiNf':function(_0x1849d0,_0x388354,_0xa99e33,_0x5e2981,_0x5b3f75){return _0x1849d0(_0x388354,_0xa99e33,_0x5e2981,_0x5b3f75);},'AOJhk':function(_0x5f0aaa,_0x25ac43,_0x6c4b42,_0x5e3e5c,_0x344a78){return _0x5f0aaa(_0x25ac43,_0x6c4b42,_0x5e3e5c,_0x344a78);},'NlWUD':function(_0x1151e2,_0x1a4285){return _0x1151e2===_0x1a4285;},'rxAnY':'fnTqj','KpwTQ':_0x41ca2f(0x37d),'UALAV':function(_0x43829f,_0xcf9e3d,_0x4505d3,_0x251165,_0x124db5){return _0x43829f(_0xcf9e3d,_0x4505d3,_0x251165,_0x124db5);},'vQbuS':function(_0x4f2eab,_0x59eb15,_0x2e261b,_0x4b7294,_0x3fa0e0){return _0x4f2eab(_0x59eb15,_0x2e261b,_0x4b7294,_0x3fa0e0);},'LuPaQ':'uvYkE','XzFoj':function(_0x31c354,_0x2827a4){return _0x31c354+_0x2827a4;},'NCzuC':function(_0x489d9c,_0x112c2a){return _0x489d9c>_0x112c2a;},'kcScj':_0x41ca2f(0x21e),'nQTcJ':_0x41ca2f(0x42c)+'down','mTIbI':function(_0x4fa213,_0x4fcbb6){return _0x4fa213(_0x4fcbb6);},'hHKJO':_0x41ca2f(0x31b),'GhgoS':_0x41ca2f(0x5e0)+'activ'+'e','OwyNB':function(_0x3cbcc2){return _0x3cbcc2();},'ruIPQ':function(_0x4dd37e,_0x5b2508){return _0x4dd37e*_0x5b2508;},'xSZgu':function(_0x4af775,_0xeedfae){return _0x4af775===_0xeedfae;},'zhVBm':function(_0x53ddfe,_0x156ff5){return _0x53ddfe-_0x156ff5;},'iwNgv':function(_0x13f7d8,_0x4d2f3c){return _0x13f7d8/_0x4d2f3c;},'dpuHe':function(_0x530561,_0xf42b6f){return _0x530561-_0xf42b6f;},'PIooK':_0x41ca2f(0x311),'ohKVl':function(_0x29a036,_0x2b6fc7){return _0x29a036+_0x2b6fc7;},'QpvXU':_0x41ca2f(0x2fe),'hVyBo':'RMB','tinTu':_0x41ca2f(0x5e1),'guGtd':function(_0x566e57,_0x332ad4){return _0x566e57-_0x332ad4;},'UJAAg':function(_0x1c1fb0,_0x5e17f8,_0x19c64d,_0x326e69,_0x2bd2fb,_0x5f2484,_0x31c8a4){return _0x1c1fb0(_0x5e17f8,_0x19c64d,_0x326e69,_0x2bd2fb,_0x5f2484,_0x31c8a4);},'FvhPa':function(_0x31de56,_0x53df93){return _0x31de56-_0x53df93;},'fUtwk':function(_0x5dcbf1,_0x4f7da8){return _0x5dcbf1(_0x4f7da8);},'iGsdA':function(_0x59a4e2,_0x231a5a){return _0x59a4e2-_0x231a5a;},'tihQF':_0x41ca2f(0x481)+_0x41ca2f(0x553)+_0x41ca2f(0x560),'XysLj':'sk-sw'+_0x41ca2f(0x45a),'TsgDB':_0x41ca2f(0x31f)+'t','iZCQy':_0x41ca2f(0x17c)+'eld','dnoNu':_0x41ca2f(0x46c),'HsMhk':_0x41ca2f(0x525)+'l','mUToT':_0x41ca2f(0x40e),'paHZx':function(_0x381e2b){return _0x381e2b();},'ncrSB':function(_0x528b14,_0x5d8e50){return _0x528b14(_0x5d8e50);},'eNuab':function(_0x1bcd88,_0x446432,_0x54c9a5,_0x4e6ecd,_0xfecea3,_0x285ad2){return _0x1bcd88(_0x446432,_0x54c9a5,_0x4e6ecd,_0xfecea3,_0x285ad2);},'gowIn':function(_0x4578c7,_0x3d6a24,_0x3583e4,_0x12abc6,_0xacde4,_0x5005cd){return _0x4578c7(_0x3d6a24,_0x3583e4,_0x12abc6,_0xacde4,_0x5005cd);},'zYNwD':function(_0x57aeb6,_0x561955,_0x52e8ff,_0x35547b,_0xc7de17,_0x338b46){return _0x57aeb6(_0x561955,_0x52e8ff,_0x35547b,_0xc7de17,_0x338b46);},'oJATT':_0x41ca2f(0x20b)+_0x41ca2f(0x573)+_0x41ca2f(0x26c)+'tideW'+_0x41ca2f(0x46e)+_0x41ca2f(0x29e)+'ge.\x20B'+_0x41ca2f(0x2b1)+'le\x20if'+_0x41ca2f(0x590)+'serve'+'r\x20val'+_0x41ca2f(0x61e)+'s.','koEGn':function(_0x3fe5e6,_0x172b4a,_0x498c9c,_0x42e18c){return _0x3fe5e6(_0x172b4a,_0x498c9c,_0x42e18c);},'hOjoJ':function(_0x2a8a7d,_0x109570,_0x5def69,_0x54dbf5,_0x5d1db3,_0x2f7d31){return _0x2a8a7d(_0x109570,_0x5def69,_0x54dbf5,_0x5d1db3,_0x2f7d31);},'wTBzd':'Scale'+_0x41ca2f(0x216)+'\x20four'+'\x20Move'+_0x41ca2f(0x161)+_0x41ca2f(0x634)+_0x41ca2f(0x1a0)+'ts\x20pl'+_0x41ca2f(0x54c)+'celer'+_0x41ca2f(0x230)+'.','aWofu':function(_0x48cf3d,_0x58da15,_0xf653a9,_0x1b56e0){return _0x48cf3d(_0x58da15,_0xf653a9,_0x1b56e0);},'KxqxL':function(_0xc2ecaa,_0x83ed1e){return _0xc2ecaa!==_0x83ed1e;},'PJpaT':'Gravi'+'ty\x20%','Cjzxl':'Bunny'+_0x41ca2f(0x680),'UkkDO':_0x41ca2f(0x1e4)+_0x41ca2f(0x539)+'ement'+_0x41ca2f(0x27d)+'JumpT'+_0x41ca2f(0x3ec)+_0x41ca2f(0x179)+_0x41ca2f(0x5d4)+'\x20cool'+'down\x20'+_0x41ca2f(0x4d3)+_0x41ca2f(0x2e1)+'ies.','PAWCI':'WASD\x20'+_0x41ca2f(0x44d)+_0x41ca2f(0x3fb)+_0x41ca2f(0x52c)+'ce\x20ov'+'erlay'+'.','TrHYf':'Botto'+'m\x20rig'+'ht','GpYhh':_0x41ca2f(0x628)+_0x41ca2f(0x469)+'e','caoTP':function(_0x213491,_0x2fd654,_0x47d18e,_0x940d2d,_0xed71ae,_0x53163c){return _0x213491(_0x2fd654,_0x47d18e,_0x940d2d,_0xed71ae,_0x53163c);},'JMTff':_0x41ca2f(0x670)+_0x41ca2f(0x2ba)+_0x41ca2f(0x501)+_0x41ca2f(0x442)+_0x41ca2f(0x640),'diiGB':_0x41ca2f(0x424),'ybENi':function(_0x336c74,_0xe2c4c8,_0x46e2c0,_0x1cc084,_0xa650ca,_0x2cc307){return _0x336c74(_0xe2c4c8,_0x46e2c0,_0x1cc084,_0xa650ca,_0x2cc307);},'hzyDw':_0x41ca2f(0x485)+_0x41ca2f(0x679),'NfIrm':_0x41ca2f(0x5ad)+_0x41ca2f(0x536)+'r','aYEmX':function(_0x5e3357,_0xfec4b9){return _0x5e3357===_0xfec4b9;},'LMrhI':_0x41ca2f(0x243)+'ck','hnwLn':_0x41ca2f(0x549)+_0x41ca2f(0x681)+_0x41ca2f(0x226)+_0x41ca2f(0x38c)+_0x41ca2f(0x303)+'ots.','KfZMD':_0x41ca2f(0x3d6)+_0x41ca2f(0x56f)+_0x41ca2f(0x1f3)+_0x41ca2f(0x60e)+'ad\x20wh'+_0x41ca2f(0x1ee)+'ggled'+'.','Iukqr':'Safe\x20'+'Mode\x20'+_0x41ca2f(0x411)+'lay\x20o'+_0x41ca2f(0x5d7),'kNDeb':'Skips'+'\x20UWMK'+'\x20enti'+'rely\x20'+_0x41ca2f(0x1a9)+'WASM\x20'+_0x41ca2f(0x158)+_0x41ca2f(0x491)+_0x41ca2f(0x333)+'\x20if\x20m'+'atche'+'s\x20won'+_0x41ca2f(0x17a)+_0x41ca2f(0x2d1),'ilIVV':'Appli'+'es\x20on'+'\x20relo'+_0x41ca2f(0x383)+'f\x20mat'+'ches\x20'+_0x41ca2f(0x1ba)+_0x41ca2f(0x170)+'fe\x20mo'+_0x41ca2f(0x50a)+_0x41ca2f(0x475)+_0x41ca2f(0x5f0)+_0x41ca2f(0x609)+'ok-re'+_0x41ca2f(0x265)+_0x41ca2f(0x5f7)+_0x41ca2f(0x4a5)+_0x41ca2f(0x590)+_0x41ca2f(0x158)+_0x41ca2f(0x266)+_0x41ca2f(0x332)+_0x41ca2f(0x51f),'wnTvS':'Each\x20'+'one\x20i'+_0x41ca2f(0x2af)+_0x41ca2f(0x340)+'WASM\x20'+_0x41ca2f(0x636)+_0x41ca2f(0x1eb)+_0x41ca2f(0x1ad)+'the\x20w'+'hole\x20'+'page\x20'+_0x41ca2f(0x45e)+'\x20ALL\x20'+_0x41ca2f(0x173)+_0x41ca2f(0x1a6)+'ault\x20'+_0x41ca2f(0x4c7)+_0x41ca2f(0x3c1)+'ure\x20t'+'hat\x20d'+'oes\x20n'+_0x41ca2f(0x5b9)+'tch\x20t'+'he\x20re'+'al\x20me'+'thod\x20'+_0x41ca2f(0x1d4)+_0x41ca2f(0x376)+_0x41ca2f(0x2eb)+'n\x20sig'+_0x41ca2f(0x459)+_0x41ca2f(0x58e)+'match'+'\x27\x20the'+_0x41ca2f(0x4ce)+'nt\x20it'+'\x20is\x20c'+'alled'+_0x41ca2f(0x4b4)+_0x41ca2f(0x145)+_0x41ca2f(0x59e)+_0x41ca2f(0x388)+'t\x20a\x20t'+_0x41ca2f(0x3fa)+_0x41ca2f(0x527)+_0x41ca2f(0x483)+_0x41ca2f(0x148)+'\x20whic'+_0x41ca2f(0x5ce)+'\x20your'+_0x41ca2f(0x373)+_0x41ca2f(0x595)+'kes\x20o'+'n.','BAtnn':'godDi'+_0x41ca2f(0x422)+_0x41ca2f(0x244)+_0x41ca2f(0x16f)+_0x41ca2f(0x250),'knCDI':function(_0x1ffeda,_0x3cd991,_0x3eefc7,_0x1c9177){return _0x1ffeda(_0x3cd991,_0x3eefc7,_0x1c9177);},'Fstxa':_0x41ca2f(0x304)+'re\x20(S'+_0x41ca2f(0x26d)+_0x41ca2f(0x2ad)+_0x41ca2f(0x4fb)+'\x20IsGr'+'ounde'+'d)','QJYGa':'no\x20ch'+'eats\x20'+_0x41ca2f(0x64d)+_0x41ca2f(0x4e5)+_0x41ca2f(0x191)+'is','EwMDX':function(_0x547a64,_0x1dbef9,_0x74abf5){return _0x547a64(_0x1dbef9,_0x74abf5);},'jBxvS':'Disab'+_0x41ca2f(0x31e)+_0x41ca2f(0x154)+'age\x20d'+'etect'+'ors\x20a'+'t\x20sta'+'rtup\x20'+_0x41ca2f(0x3a5)+'topDe'+_0x41ca2f(0x2e7)+_0x41ca2f(0x3a6)+_0x41ca2f(0x396)+'\x20ON.','vhGFV':'God/d'+_0x41ca2f(0x53e)+'/rapi'+'d\x20gre'+_0x41ca2f(0x3d8)+_0x41ca2f(0x64f)+_0x41ca2f(0x659)+'risk\x20'+'even\x20'+_0x41ca2f(0x43c)+'this\x20'+_0x41ca2f(0x65b),'GbDnD':_0x41ca2f(0x5d9),'jcHcx':function(_0x512222,_0x101226){return _0x512222!==_0x101226;},'sGpnG':'latIt','PYqAP':_0x41ca2f(0x299),'lcuRc':function(_0x384270,_0x39e6d4){return _0x384270(_0x39e6d4);},'OXcsu':'mn-to'+'p','hOMIE':'mn-h','jGhCO':_0x41ca2f(0x51a)+'a\x20Kou'+'r','DWOCF':_0x41ca2f(0x22b)+'n','jTONy':'6|4|3'+_0x41ca2f(0x2cb)+'5|7|2','SSIvH':'<smal'+'l>','VWbZV':_0x41ca2f(0x522)+'t','NPUvY':'QhFGs','sBHSl':_0x41ca2f(0x3fc)+_0x41ca2f(0x507),'IccPi':_0x41ca2f(0x465),'anPbG':function(_0x584333,_0x51a223){return _0x584333+_0x51a223;},'TnTPY':function(_0x74d039,_0x3fc630){return _0x74d039===_0x3fc630;},'vtNdt':_0x41ca2f(0x447)+'5|1|3'+'|15|7'+'|16|4'+_0x41ca2f(0x271)+'13|10'+_0x41ca2f(0x294)+'|2|12','oItwF':'600\x20','HjFOt':function(_0x4f0f44,_0x2a370e){return _0x4f0f44*_0x2a370e;},'nNPmw':function(_0x5acac4,_0x172c8c){return _0x5acac4/_0x172c8c;},'rFyFm':_0x41ca2f(0x5b8)+_0x41ca2f(0x2bd)+'07,15'+_0x41ca2f(0x473)+'5)','bccTr':function(_0x4c3c1d,_0x28238b){return _0x4c3c1d/_0x28238b;},'qwsTj':_0x41ca2f(0x493)+'2px\x20u'+_0x41ca2f(0x50b)+_0x41ca2f(0x49c)+_0x41ca2f(0x449)+'ospac'+'e','LrXJD':function(_0x3061e7,_0x16916a,_0x56af07){return _0x3061e7(_0x16916a,_0x56af07);},'IpSOj':'#ff6b'+'9d','QwHCP':_0x41ca2f(0x379),'jXZYF':_0x41ca2f(0x234)+_0x41ca2f(0x2d2)+'ed','SALJs':_0x41ca2f(0x1b1)+'nge','RMRpB':_0x41ca2f(0x496)+'te','uiKzv':'loade'+'d','oeFHc':'loadi'+'ng','Ivivj':_0x41ca2f(0x51a)+_0x41ca2f(0x2ea)+_0x41ca2f(0x584),'nHZyX':function(_0x3f96d8,_0x2e37a8){return _0x3f96d8+_0x2e37a8;},'aSWWq':_0x41ca2f(0x42e),'GJvOe':_0x41ca2f(0x476)+'s','XWJZw':'sakur'+_0x41ca2f(0x398)+_0x41ca2f(0x47c)+'v1','JUHfT':'Comba'+'t','NlUIU':'misc','xEiyo':_0x41ca2f(0x23a)+'y','VZrnT':_0x41ca2f(0x443)+'viewB'+_0x41ca2f(0x49a)+_0x41ca2f(0x65a)+'\x2024\x22>'+'<path'+_0x41ca2f(0x3b0)+'12\x2021'+_0x41ca2f(0x669)+'-2.5-'+_0x41ca2f(0x2de)+_0x41ca2f(0x61b)+'5\x200-2'+_0x41ca2f(0x352)+_0x41ca2f(0x537)+_0x41ca2f(0x185)+'5s4\x202'+_0x41ca2f(0x2d0)+_0x41ca2f(0x37a)+_0x41ca2f(0x33c)+_0x41ca2f(0x477)+_0x41ca2f(0x1df)+'fill='+_0x41ca2f(0x530)+'\x22\x20str'+'oke=\x22'+_0x41ca2f(0x232)+_0x41ca2f(0x2f9)+'troke'+'-widt'+_0x41ca2f(0x28e)+_0x41ca2f(0x390)+_0x41ca2f(0x2e0)+_0x41ca2f(0x1d9)+'=\x22rou'+_0x41ca2f(0x542)+_0x41ca2f(0x1a4)+_0x41ca2f(0x4b8)+_0x41ca2f(0x223)+_0x41ca2f(0x3ff)+'d\x22/><'+_0x41ca2f(0x4cb)+'e\x20cx='+_0x41ca2f(0x63e)+'cy=\x221'+'0\x22\x20r='+_0x41ca2f(0x3c3)+_0x41ca2f(0x512)+_0x41ca2f(0x268)+'6b9d\x22'+_0x41ca2f(0x43f)+'vg>','ZOdVr':'Vjwdm','FYygC':'sakur'+_0x41ca2f(0x398)+_0x41ca2f(0x3d9),'btbSJ':_0x41ca2f(0x25b),'DiWdi':'Assem'+_0x41ca2f(0x5f8)+'Sharp'+_0x41ca2f(0x291),'TJBpq':_0x41ca2f(0x18a)+_0x41ca2f(0x159),'KWqTA':'Legio'+'nPlat'+_0x41ca2f(0x272)+_0x41ca2f(0x660)+_0x41ca2f(0x685)+'Recoi'+'lMoti'+'on','yiKPT':'capSh'+_0x41ca2f(0x313),'RIque':'OShoo'+'ter','PEQDb':function(_0x28d3e9,_0x12bb3f,_0x4abb7b,_0x51a8a0,_0x5ceddc,_0x3723c2,_0x3e05ed,_0x1e2d1d){return _0x28d3e9(_0x12bb3f,_0x4abb7b,_0x51a8a0,_0x5ceddc,_0x3723c2,_0x3e05ed,_0x1e2d1d);},'tAYMt':_0x41ca2f(0x2a8)+'ra-ko'+'ur]\x20U'+'WMK\x20i'+_0x41ca2f(0x437)+_0x41ca2f(0x535)+':','WsMEx':function(_0x5f02af,_0x1de783){return _0x5f02af(_0x1de783);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x41ca2f(0x395)](location['hostn'+_0x41ca2f(0x163)]||''))return;if(window['__SAK'+_0x41ca2f(0x2a6)+_0x41ca2f(0x186)])return;window[_0x41ca2f(0x276)+_0x41ca2f(0x2a6)+'OUR__']=!![];var _0x14943a=_0x41ca2f(0x232)+'9d',_0x4cea7b=_0x41ca2f(0x4e9)+'c6',_0x3b71f3={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x15b749['IpSOj'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x1f9fab={..._0x3b71f3};try{_0x15b749[_0x41ca2f(0x672)]===_0x15b749[_0x41ca2f(0x672)]?Object['assig'+'n'](_0x1f9fab,JSON[_0x41ca2f(0x5a7)](localStorage[_0x41ca2f(0x4a9)+'em'](_0x15b749['FYygC'])||'{}')):new _0x3393a8(_0x167882)[_0x41ca2f(0x593)+'Field'](_0x4abf88,_0x5a784f,_0x511ce0);}catch(_0x1bb4ba){}function _0x3bf333(){var _0x5dac1c=_0x41ca2f;try{if(_0x15b749['lTkFC']!==_0x15b749['lTkFC'])try{var _0xd94c52=_0x3ed51a&&(_0x23bb98['messa'+'ge']||_0x564af8[_0x5dac1c(0x25b)]&&_0x325d65[_0x5dac1c(0x25b)]['messa'+'ge'])||_0x5dac1c(0x62c)+'wn';if(_0x36edb8&&_0x242763[_0x5dac1c(0x288)+_0x5dac1c(0x163)])_0xd94c52+=_0x15b749['AnBEK']('\x20@\x20',_0x15b749[_0x5dac1c(0x206)](_0x24eb76,_0x39ee3a[_0x5dac1c(0x288)+_0x5dac1c(0x163)])[_0x5dac1c(0x1a5)]('/')['pop']())+':'+(_0x2c82ec[_0x5dac1c(0x3d5)+'o']||'?');_0x5827e6[_0x5dac1c(0x178)+'rror']=_0x306c51(_0xd94c52)['slice'](-0x44f*-0x7+0x1c3*0x5+0x1d*-0x158,-0xee4+0x2382+0x355*-0x6);}catch(_0x14bf6d){}else localStorage[_0x5dac1c(0x4fc)+'em'](_0x5dac1c(0x3cc)+_0x5dac1c(0x398)+_0x5dac1c(0x3d9),JSON['strin'+_0x5dac1c(0x423)](_0x1f9fab));}catch(_0x68f66a){}}var _0x3c0c8b={'uwmk':!!window['Unity'+'WebMo'+_0x41ca2f(0x1c4)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x1f9fab[_0x41ca2f(0x193)+_0x41ca2f(0x519)],'lastError':''};try{window['addEv'+_0x41ca2f(0x1d2)+_0x41ca2f(0x21d)+'r'](_0x15b749[_0x41ca2f(0x3da)],_0x593c16=>{var _0x356506=_0x41ca2f;try{var _0x2a9720=_0x593c16&&(_0x593c16['messa'+'ge']||_0x593c16[_0x356506(0x25b)]&&_0x593c16[_0x356506(0x25b)]['messa'+'ge'])||_0x15b749[_0x356506(0x49b)];if(_0x593c16&&_0x593c16['filen'+_0x356506(0x163)])_0x2a9720+=_0x15b749[_0x356506(0x1f9)](_0x15b749['KZLeL']+String(_0x593c16['filen'+'ame'])['split']('/')[_0x356506(0x363)](),':')+(_0x593c16[_0x356506(0x3d5)+'o']||'?');_0x3c0c8b['lastE'+_0x356506(0x274)]=String(_0x2a9720)['slice'](-0x1625*-0x1+-0x2*0x82f+-0x1d*0x33,0x1*0x144f+-0x2397+0xfe8);}catch(_0x100671){}});}catch(_0x566dc7){}var _0x460680=null,_0xa2b348=null,_0xaebcd1={},_0x26a242=[],_0x343c33=[],_0x27e548=new Map();function _0x407cb8(_0x3e25bb,_0x47a1ac){var _0x2123b8=_0x41ca2f;if(_0x2123b8(0x429)==='oxqNo')try{new _0x2fc695(_0x451f1c)['write'+'Field'](_0x2eaace,_0x20788a,_0x3c3c36);}catch(_0x4d9be0){}else{if(!_0x47a1ac||_0x3e25bb['inclu'+_0x2123b8(0x1d3)](_0x47a1ac)||_0x3e25bb['lengt'+'h']>-0x101d+-0x2*-0x9d+-0x9b*-0x19)return;_0x3e25bb['push'](_0x47a1ac);}}function _0x4c1f36(_0x31fa51,_0xf3ff0d,_0x98e5ed,_0x5839cc){var _0x40975=_0x41ca2f;if('RcNVz'===_0x40975(0x5d0)){_0x4425cf[_0x40975(0x4ff)](_0x439292[_0x40975(0x25f)]());if(_0x15b749['RHUlW'](_0x4d812e['lengt'+'h'],0x4*0x801+-0x1*-0xf19+-0x2ef5))_0x12d76f['shift']();}else{var _0xca3b31=-0x47c+0x22bf*0x1+-0x1e43;try{if(_0x40975(0x61c)!==_0x15b749['RdDLa'])try{_0x51997a[_0x40975(0x4fa)]['appen'+_0x40975(0x5c8)+'d'](_0x100b14);}catch(_0x3f99cf){}else _0xca3b31=_0xf3ff0d&&_0xf3ff0d['val']?_0xf3ff0d[_0x40975(0x25a)]():0x1b9+0x15d7+-0x74*0x34;}catch(_0x5b8d13){}if(!_0xca3b31)return;_0x15b749[_0x40975(0x545)](_0x407cb8,_0x31fa51,_0xca3b31),_0x98e5ed[_0x5839cc]=_0x31fa51[_0x40975(0x591)+'h'];if(_0x15b749[_0x40975(0x5c6)](_0x5839cc,'movem'+_0x40975(0x35b))&&_0x31fa51['lengt'+'h']){if(_0x40975(0x350)===_0x40975(0x350)){var _0x2cff67=_0xaebcd1[_0x40975(0x616)+'ve'];if(_0x2cff67){if(_0x15b749[_0x40975(0x5c6)]('Npxhw',_0x15b749['qKyBY']))_0x1e8e78[_0x40975(0x389)]=_0x500b0d,_0x5e8e78(),_0x15b749['LapFP'](_0x32caa8,_0x15b749[_0x40975(0x14b)],_0x5e67b0),_0x2d8975(_0x40975(0x434)+'e',_0x59111a);else try{_0x2cff67[_0x40975(0x41b)+'ed']=![];}catch(_0x10bcda){}}}else _0x3fa743['enabl'+'ed']=![];}}}function _0x3690dc(_0x21213b,_0x1efb8e,_0x37df17){var _0x2649fc=_0x41ca2f,_0x45bf63=_0x27e548[_0x2649fc(0x2db)](_0x21213b);if(!_0x45bf63){if(_0x15b749['vkSme']!==_0x2649fc(0x3cf)){var _0x252bd2=_0x15b749[_0x2649fc(0x1de)](_0x3ff1ba,_0x80ca2b,_0x478659,_0x2880d6);if(_0x252bd2!=null)_0x358b78(_0x119f61,_0xc2cf4f,_0x5e45b2,_0x15b749[_0x2649fc(0x48e)](_0x252bd2,_0x46e804));}else _0x45bf63=new Map(),_0x27e548[_0x2649fc(0x27c)](_0x21213b,_0x45bf63);}if(!_0x45bf63[_0x2649fc(0x45f)](_0x1efb8e))try{var _0x4a2588=new _0x460680(_0x21213b)[_0x2649fc(0x649)+_0x2649fc(0x2c0)](_0x1efb8e,_0x37df17);_0x45bf63[_0x2649fc(0x27c)](_0x1efb8e,_0x15b749[_0x2649fc(0x534)](_0x4a2588,undefined)?_0x4a2588['val']():null);}catch(_0x4bccf9){_0x45bf63['set'](_0x1efb8e,null);}return _0x45bf63[_0x2649fc(0x2db)](_0x1efb8e);}function _0x5e12ee(_0x3d90cc,_0x523f6b,_0x548031,_0x18e7b6){var _0x193ff0=_0x41ca2f;try{new _0x460680(_0x3d90cc)[_0x193ff0(0x593)+_0x193ff0(0x26f)](_0x523f6b,_0x548031,_0x18e7b6);}catch(_0x482b3d){}}function _0x33c982(_0x5c7f46,_0xddfde3){var _0xf93426=_0x41ca2f;try{if(_0x15b749[_0xf93426(0x2a3)]===_0xf93426(0x2ca)){var _0x50f3e7=new _0x460680(_0x5c7f46)[_0xf93426(0x649)+_0xf93426(0x2c0)](_0xddfde3,_0x15b749[_0xf93426(0x298)]);return _0x50f3e7?_0x50f3e7[_0xf93426(0x25a)]():-0xc5e+-0xc1b+-0x1879*-0x1;}else{var _0x5a37bb=-0x1111+-0xd3+0xa*0x1ca;for(var _0x53e45c in _0x4c5be8){if(_0x176e74[_0x53e45c]&&_0x389022[_0x53e45c][_0xf93426(0x394)+'ed'])_0x5a37bb++;}_0x2004d4['hooks'+'Ok']=_0x5a37bb;}}catch(_0x3af4d9){return-0xa*-0x6a+-0x1511+0x7*0x26b;}}function _0x5a6855(_0x5d7214,_0x177e04,_0x34e63b,_0x489980){var _0xb909a9=_0x41ca2f;if(_0x15b749[_0xb909a9(0x2df)](_0x15b749['iiSGW'],'yWhzY'))_0x5928f5[_0xb909a9(0x62d)]=_0x5b251a,_0x52d0f2();else{var _0x1d7ffe=_0x3690dc(_0x5d7214,_0x177e04,_0x34e63b);if(_0x15b749[_0xb909a9(0x3e1)](_0x1d7ffe,null))_0x15b749['YbhHx'](_0x5e12ee,_0x5d7214,_0x177e04,_0x34e63b,_0x15b749['APSHp'](_0x1d7ffe,_0x489980));}}function _0x30f462(_0x5d9dfa,_0x4d01f5,_0x34ecf2,_0x3dc4d7,_0x105750,_0x400dc2,_0x51745e){var _0x2e9916=_0x41ca2f;try{var _0xea451b=('2|0|4'+'|3|1')[_0x2e9916(0x1a5)]('|'),_0x3b5cc7=-0x855+0xb32+-0x2dd;while(!![]){switch(_0xea451b[_0x3b5cc7++]){case'0':_0x4ea482[_0x2e9916(0x41b)+'ed']=_0x15b749[_0x2e9916(0x534)](_0x51745e,![]);continue;case'1':return _0x4ea482;case'2':var _0x4ea482=_0xa2b348[_0x2e9916(0x1a7)+'refix']({'typeName':_0x4d01f5,'methodName':_0x34ecf2,'params':_0x3dc4d7,'returnType':_0x105750},_0x400dc2);continue;case'3':_0x3c0c8b[_0x2e9916(0x158)+'Total']++;continue;case'4':_0xaebcd1[_0x5d9dfa]=_0x4ea482;continue;}break;}}catch(_0x3ce44d){if(_0x15b749[_0x2e9916(0x5ae)]!==_0x15b749[_0x2e9916(0x5ae)]){var _0x4f7e3e=_0x4dd470[_0x2e9916(0x686)+_0x2e9916(0x287)];for(var _0x2fce8c=-0x35+0xbdd*-0x2+0x17ef;_0x2fce8c<_0x4f7e3e['lengt'+'h'];_0x2fce8c++){if(_0x4f7e3e[_0x2fce8c]['id']&&_0x4f7e3e[_0x2fce8c]['id'][_0x2e9916(0x482)+'Of'](_0x15b749[_0x2e9916(0x2d4)])===-0x211a+-0x1a7d+-0x87*-0x71)_0x4f7e3e[_0x2fce8c][_0x2e9916(0x299)]['displ'+'ay']=_0x15b749[_0x2e9916(0x2a9)];}}else return console[_0x2e9916(0x489)](_0x15b749[_0x2e9916(0x3a4)],_0x5d9dfa,_0x3ce44d&&_0x3ce44d['messa'+'ge']),null;}}function _0x8a181b(_0x5b026d,_0x3e6fdd,_0x3fb06c,_0x2578f3,_0x5a146c,_0x432e22,_0x550ddc){var _0x349d6b=_0x41ca2f,_0x1e5320={'yIXUt':function(_0x14577d,_0x1b4685){return _0x14577d||_0x1b4685;},'bIzcO':_0x349d6b(0x5b8)+_0x349d6b(0x24b)+_0x349d6b(0x54f)+'0,0.7'+'5)'};if('chrIE'==='trHiz')_0x15b749[_0x349d6b(0x17f)](_0x485eb3,_0x518518,-0x1e0a+0x10c5+0xd91,_0x349d6b(0x451),_0x17804f),_0x67104c(_0x5934e1,-0x1fc9+-0x3*0x28d+-0x1*-0x27c4,_0x15b749[_0x349d6b(0x48d)],_0x12e0bb);else try{if('aEgZc'!==_0x349d6b(0x448)){var _0x1492a9=_0x31a6c8[_0x349d6b(0x387)+_0x349d6b(0x36f)+'ent']('div');_0x1492a9['class'+_0x349d6b(0x16d)]=_0x15b749[_0x349d6b(0x3e4)];var _0x4ad515=_0x1df363['creat'+_0x349d6b(0x36f)+'ent'](_0x15b749['WDIdR']);_0x4ad515[_0x349d6b(0x4bf)+_0x349d6b(0x16d)]=_0x349d6b(0x236)+_0x349d6b(0x58c),_0x4ad515[_0x349d6b(0x335)+'onten'+'t']=_0x6e64c,_0x1492a9[_0x349d6b(0x356)+_0x349d6b(0x5c8)+'d'](_0x4ad515);for(var _0x121fcc of _0x25dcf8)_0x1492a9['appen'+_0x349d6b(0x5c8)+'d'](_0x121fcc);_0x2b4502['appen'+_0x349d6b(0x5c8)+'d'](_0x1492a9);}else{var _0x13f3d3=_0xa2b348['hookP'+_0x349d6b(0x4f7)+'x']({'typeName':_0x3e6fdd,'methodName':_0x3fb06c,'params':_0x2578f3,'returnType':_0x5a146c},_0x432e22);return _0x13f3d3[_0x349d6b(0x41b)+'ed']=_0x15b749[_0x349d6b(0x1f0)](_0x550ddc,![]),_0xaebcd1[_0x5b026d]=_0x13f3d3,_0x3c0c8b[_0x349d6b(0x158)+_0x349d6b(0x208)]++,_0x13f3d3;}}catch(_0xdf7121){if(_0x15b749[_0x349d6b(0x5c6)](_0x15b749['LYEzn'],_0x15b749[_0x349d6b(0x61d)]))return console['warn'](_0x349d6b(0x2a8)+_0x349d6b(0x4ad)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+_0x349d6b(0x221),_0x5b026d,_0xdf7121&&_0xdf7121[_0x349d6b(0x190)+'ge']),null;else _0x598d7e[_0x349d6b(0x368)+'tyle']=_0x1e5320['yIXUt'](_0x2c2e8d,_0x1e5320['bIzcO']),_0x3016c4[_0x349d6b(0x260)+_0x349d6b(0x68e)](_0x16fc35,_0x448b57,_0x3a560e),_0xec6755+=0x1f3*-0x11+-0x1ebe+0x3ff1*0x1;}}var _0xafac22=()=>![];try{if(window['Unity'+'WebMo'+'dkit']&&!_0x1f9fab['safeM'+_0x41ca2f(0x519)]){_0x460680=window['Unity'+_0x41ca2f(0x4a2)+'dkit'][_0x41ca2f(0x53f)+_0x41ca2f(0x290)+'er'],_0xa2b348=window[_0x41ca2f(0x334)+'WebMo'+_0x41ca2f(0x1c4)][_0x41ca2f(0x29c)+'me']['creat'+'ePlug'+'in']({'name':_0x41ca2f(0x51a)+_0x41ca2f(0x270),'version':'1.1.0','referencedAssemblies':[_0x15b749[_0x41ca2f(0x544)]]});if(_0x1f9fab[_0x41ca2f(0x255)+'od'])_0x30f462(_0x41ca2f(0x389),_0x41ca2f(0x514)+'th',_0x41ca2f(0x44c)+_0x41ca2f(0x19c)+_0x41ca2f(0x209)+'lth',[_0x41ca2f(0x451),_0x41ca2f(0x451)],undefined,_0xafac22,!!_0x1f9fab[_0x41ca2f(0x389)]);if(_0x1f9fab[_0x41ca2f(0x255)+_0x41ca2f(0x371)])_0x30f462(_0x41ca2f(0x434)+'e',_0x41ca2f(0x514)+'th',_0x15b749[_0x41ca2f(0x4ba)],['i32','i32',_0x15b749[_0x41ca2f(0x48d)],'i32','i32'],undefined,_0xafac22,!!_0x1f9fab[_0x41ca2f(0x389)]);if(_0x1f9fab[_0x41ca2f(0x1fa)+_0x41ca2f(0x382)+'il'])_0x30f462('noRec'+_0x41ca2f(0x1bf),_0x15b749[_0x41ca2f(0x59c)],_0x41ca2f(0x372),[_0x15b749['Bxuom']],undefined,_0xafac22,!!_0x1f9fab[_0x41ca2f(0x57a)+_0x41ca2f(0x1bf)]);if(_0x1f9fab[_0x41ca2f(0x650)+_0x41ca2f(0x162)+'e'])_0x8a181b(_0x15b749[_0x41ca2f(0x2bf)],_0x15b749[_0x41ca2f(0x44e)],'SetGa'+_0x41ca2f(0x654)+_0x41ca2f(0x56a),[_0x41ca2f(0x451),_0x41ca2f(0x451)],undefined,(_0x34b56d,_0x3c367d)=>{var _0x10b7c7=_0x41ca2f;_0x4c1f36(_0x343c33,_0x3c367d,_0x3c0c8b,_0x15b749[_0x10b7c7(0x5ec)]);},!![]);if(_0x1f9fab['hookC'+_0x41ca2f(0x162)+'e'])_0x15b749['PEQDb'](_0x8a181b,_0x41ca2f(0x616)+'ve',_0x41ca2f(0x1aa)+_0x41ca2f(0x4ee)+_0x41ca2f(0x272)+_0x41ca2f(0x660)+_0x41ca2f(0x685)+_0x41ca2f(0x5ba)+'ent',_0x41ca2f(0x25d)+'unded',[_0x15b749['Bxuom']],_0x15b749['Bxuom'],(_0x40b57e,_0x1df9d4)=>{var _0xf894f1=_0x41ca2f;'GAPkn'!==_0xf894f1(0x54a)?_0x4c1f36(_0x26a242,_0x1df9d4,_0x3c0c8b,'movem'+'ents'):(_0x98937c[_0xf894f1(0x634)+'Pct']=_0x38fe5c,_0x507370());},!![]);}}catch(_0x57d3de){console[_0x41ca2f(0x489)](_0x15b749['tAYMt'],_0x57d3de&&_0x57d3de[_0x41ca2f(0x190)+'ge']);}function _0x38d562(_0x39a882,_0x590e6c){var _0x200b05=_0x41ca2f,_0x1da299={'ewJYQ':_0x15b749[_0x200b05(0x4c8)],'qhUBw':'kour-'+_0x200b05(0x4d9)+_0x200b05(0x355)+_0x200b05(0x655)+'nt','wEAVv':_0x15b749[_0x200b05(0x1bc)],'Uogjj':function(_0x3f2156,_0x238306){return _0x3f2156===_0x238306;},'iXrnS':_0x200b05(0x1e6)+_0x200b05(0x49f),'pqlQS':'none'};if(_0x15b749['Thpok']!==_0x200b05(0x3d7)){var _0x59066a=_0xaebcd1[_0x39a882];if(_0x59066a){if('eIQgx'!=='Ltddr')try{_0x59066a[_0x200b05(0x41b)+'ed']=!!_0x590e6c;}catch(_0x20998e){}else _0x4ed082['infAm'+'moExp']=_0x2df2f5,_0x4929fc();}}else for(var _0x5c81e8 of[_0x1da299[_0x200b05(0x554)],'kour-'+'io_72'+'8x90-'+_0x200b05(0x641)+'t',_0x1da299[_0x200b05(0x23b)],_0x1da299[_0x200b05(0x5c1)]]){var _0x2f78f3=_0x39ab75[_0x200b05(0x619)+'ement'+'ById'](_0x5c81e8);if(_0x2f78f3&&_0x5c81e8===_0x1da299[_0x200b05(0x5c1)]){var _0x1dab9c=_0x2f78f3[_0x200b05(0x686)+_0x200b05(0x287)];for(var _0x2b6d4a=0x37*-0x15+0x59*-0x2c+0x13cf;_0x2b6d4a<_0x1dab9c['lengt'+'h'];_0x2b6d4a++){if(_0x1dab9c[_0x2b6d4a]['id']&&_0x1da299['Uogjj'](_0x1dab9c[_0x2b6d4a]['id']['index'+'Of'](_0x1da299[_0x200b05(0x541)]),-0x1d3d+0x1d77+0x1*-0x3a))_0x1dab9c[_0x2b6d4a]['style'][_0x200b05(0x559)+'ay']=_0x1da299[_0x200b05(0x292)];}}else{if(_0x2f78f3)_0x2f78f3[_0x200b05(0x299)][_0x200b05(0x559)+'ay']='none';}}}setInterval(()=>{var _0x3cf641=_0x41ca2f,_0x4382ad={'UAJGF':_0x3cf641(0x504)};if(!_0x460680||!window[_0x3cf641(0x492)+'Insta'+_0x3cf641(0x490)])return;var _0xb27de9=(_0x15b749[_0x3cf641(0x1c7)](Number,_0x1f9fab[_0x3cf641(0x634)+'Pct'])||0x1708+-0x98b*-0x4+-0x116*0x38)/(0x12c1+-0x1a35+-0xfb*-0x8),_0x2e30bf=_0x15b749['qmkCK'](_0x15b749['VPpXH'](Number,_0x1f9fab['jumpP'+'ct'])||0xaab+0x11a4*0x1+-0x1beb,0x209*0x13+-0x846+-0x1e01),_0x1c58eb=_0x15b749['qmkCK'](_0x15b749[_0x3cf641(0x684)](Number,_0x1f9fab['gravi'+'tyPct'])||0x62b*0x3+-0x1e8c+0xc6f,0x175d+-0x7*-0x6f+0x1*-0x1a02),_0x5a3dcc=Math['max'](0x21d+0xae9+-0xd05,Number(_0x1f9fab[_0x3cf641(0x600)+_0x3cf641(0x32e)+'e'])||0x20d6+-0x1253+-0xded),_0x57b78b=_0xb27de9!==-0xd95*0x1+-0x25f0+0x3386*0x1||_0x2e30bf!==-0x246a*-0x1+-0x10*-0x1e6+0x42c9*-0x1||_0x1c58eb!==0x5da*-0x1+-0x8be+-0x25*-0x65||_0x1f9fab[_0x3cf641(0x66e)],_0x1ec8d7=_0x1f9fab[_0x3cf641(0x188)+_0x3cf641(0x60c)]||_0x1f9fab[_0x3cf641(0x600)+'eExp']||_0x1f9fab['infAm'+'moExp']||_0x1f9fab['rapid'+_0x3cf641(0x21f)];if(!_0x57b78b&&!_0x1ec8d7)return;try{for(var _0x1fb85c=0x1*0x2ef+-0x10*0x24+-0xaf;_0x1fb85c<_0x26a242[_0x3cf641(0x591)+'h'];_0x1fb85c++){var _0x4f0109=_0x26a242[_0x1fb85c];if(!_0x4f0109)continue;if(_0xb27de9!==-0x11a0+-0x1a05*0x1+-0x12e*-0x25){if(_0x3cf641(0x463)===_0x3cf641(0x463))_0x5a6855(_0x4f0109,-0x1611+0x44d*0x3+-0x4a9*-0x2,'f32',_0xb27de9),_0x5a6855(_0x4f0109,0x21a5+0x2178+-0x42f1,'f32',_0xb27de9),_0x15b749[_0x3cf641(0x44a)](_0x5a6855,_0x4f0109,0x1*0x2613+-0xeb2*-0x1+-0x3495,_0x15b749[_0x3cf641(0x2da)],_0xb27de9),_0x5a6855(_0x4f0109,-0x1*-0x104d+-0x16c+-0xead,_0x3cf641(0x157),_0xb27de9),_0x5a6855(_0x4f0109,-0x7*0x2f9+0x14b*-0x11+0x11*0x286,'f32',_0xb27de9),_0x5a6855(_0x4f0109,0x220f*0x1+0x1*-0xbcb+-0x1624,_0x15b749[_0x3cf641(0x2da)],_0xb27de9);else try{if(_0x231d79)_0xeb3c77[_0x3cf641(0x23c)]('Unity'+_0x3cf641(0x31d)+'e.App'+_0x3cf641(0x430)+'ion',_0x15b749[_0x3cf641(0x38d)],[-0x1b2d+-0x1a6d+0x2*0x1b45]);}catch(_0x3e306a){}}if(_0x2e30bf!==0x4b0+0xa7*-0x1d+0xe3c)_0x15b749[_0x3cf641(0x3be)](_0x5a6855,_0x4f0109,-0x5cb+-0x14b8+0x1ad3,_0x15b749[_0x3cf641(0x2da)],_0x2e30bf);_0x1c58eb!==-0xb*-0x2cf+0x3b*-0x65+-0x79d*0x1&&('sCfgW'===_0x3cf641(0x3e2)?(_0x15b749[_0x3cf641(0x5ea)](_0x5a6855,_0x4f0109,-0x1c*0x9d+0x3*-0xb3+-0x138d*-0x1,'f32',_0x1c58eb),_0x5a6855(_0x4f0109,0x1535*-0x1+0x26ba+0x1*-0x1139,'f32',_0x1c58eb)):(_0x15b749['nfGxt'](_0x461089,_0x37139e,-0x5*-0x493+-0xb*0x33b+0xcf2,'f32',_0x2a256b),_0x214d7a(_0x500fc7,-0x2*0xdd+-0x20be+0x8b1*0x4,_0x15b749[_0x3cf641(0x2da)],_0x1eaac8)));if(_0x1f9fab[_0x3cf641(0x66e)])_0x5e12ee(_0x4f0109,-0x909+0xcc3+-0x31e,_0x15b749[_0x3cf641(0x2da)],-(-0xdaa+0xb79+0x618));}}catch(_0x30eeda){}try{for(var _0x7c4a6d=0x4d*-0x67+0x272*-0xa+0x376f;_0x7c4a6d<_0x343c33[_0x3cf641(0x591)+'h'];_0x7c4a6d++){if(_0x15b749[_0x3cf641(0x533)](_0x15b749['rxAnY'],_0x15b749[_0x3cf641(0x462)])){var _0x1a8b7b=('1|3|4'+_0x3cf641(0x65e)+'0')[_0x3cf641(0x1a5)]('|'),_0x28f1ae=-0x13e+-0x1*0x2fd+0x43b;while(!![]){switch(_0x1a8b7b[_0x28f1ae++]){case'0':return _0x27c8f4;case'1':var _0x27c8f4=_0x5a592c['creat'+'eElem'+_0x3cf641(0x2d7)](_0x4382ad[_0x3cf641(0x478)]);continue;case'2':_0x27c8f4[_0x3cf641(0x67d)]=/^#[0-9a-f]{6}$/i[_0x3cf641(0x395)](_0x138d46)?_0x4590d6:_0x3cf641(0x232)+'9d';continue;case'3':_0x27c8f4['type']='color';continue;case'4':_0x27c8f4[_0x3cf641(0x4bf)+'Name']=_0x3cf641(0x5a3)+'lor';continue;case'5':_0x27c8f4['oninp'+'ut']=()=>_0x358a4d(_0x27c8f4[_0x3cf641(0x67d)]);continue;}break;}}else{var _0x44c87c=_0x15b749['OZtAN'](_0x33c982,_0x343c33[_0x7c4a6d],0xb67*0x2+0x13a*0x11+-0x4*0xadc);if(!_0x44c87c)continue;_0x1f9fab['damag'+'eExp']&&(_0x5e12ee(_0x44c87c,0x3*-0x6a5+-0x1c8a+0x30c5,_0x3cf641(0x451),_0x5a3dcc),_0x15b749['UALAV'](_0x5e12ee,_0x44c87c,0x1a1e*0x1+-0x109e+-0x24b*0x4,_0x15b749['Bxuom'],_0x5a3dcc));_0x1f9fab[_0x3cf641(0x188)+_0x3cf641(0x60c)]&&(_0x15b749[_0x3cf641(0x44a)](_0x5e12ee,_0x44c87c,-0xf54+0x159f+-0x5c3,_0x3cf641(0x157),0x219e+-0x1c7d+0x521*-0x1),_0x15b749[_0x3cf641(0x17f)](_0x5e12ee,_0x44c87c,-0x1d0*-0x15+-0x1c33+-0x975,_0x3cf641(0x157),-0x929+-0x2*0x7db+0x18e0*0x1));if(_0x1f9fab['infAm'+_0x3cf641(0x63a)])_0x15b749[_0x3cf641(0x59a)](_0x5e12ee,_0x44c87c,-0x41a*-0x6+-0x15d6+0x67*-0x6,'i32',-0x25f7+0x1*-0xc6d+0x1219*0x3);_0x1f9fab[_0x3cf641(0x3c7)+'Exp']&&(_0x5a6855(_0x44c87c,-0x33*-0xa7+0x26*0x35+-0x1*0x2897,_0x3cf641(0x157),-0x1*-0x35f+-0x1270+0xf11+0.1),_0x15b749['YbhHx'](_0x5e12ee,_0x44c87c,-0x19f7+0x215d+-0x1f*0x3a,_0x15b749[_0x3cf641(0x2da)],0x317+0x1a56*0x1+-0x117*0x1b+0.1));}}}catch(_0x4b1f85){}},-0x3*0xb3a+0x20*-0x4e+0x161b*0x2),setInterval(()=>{var _0x2e1f00=_0x41ca2f;if('DRIIu'==='yyJsB')_0x2c973c[_0x2e1f00(0x4fc)+'em']('sakur'+_0x2e1f00(0x398)+_0x2e1f00(0x47c)+'v1',_0x27f1d1['strin'+_0x2e1f00(0x423)](_0x269da4));else{_0x3c0c8b['gameL'+_0x2e1f00(0x187)]=!!window['unity'+_0x2e1f00(0x5a1)+'nce'];try{var _0x484d63=-0x1ee*0x2+-0x1db3*-0x1+-0x15*0x13b;for(var _0xaf229d in _0xaebcd1){if('ENCuu'===_0x15b749[_0x2e1f00(0x3ad)])return 0x11d2+-0x5d1+-0xc01;else{if(_0xaebcd1[_0xaf229d]&&_0xaebcd1[_0xaf229d][_0x2e1f00(0x394)+'ed'])_0x484d63++;}}_0x3c0c8b[_0x2e1f00(0x158)+'Ok']=_0x484d63;}catch(_0x44484b){}}},-0xa4c*0x1+0xefb+-0x1*0xc7);var _0x35002e=new Set(),_0x5700dd={0x1:[],0x3:[]},_0x3a79d1=![];function _0xe929d5(_0x5030bf){var _0x38c3ba=_0x41ca2f;_0x35002e[_0x38c3ba(0x43e)](_0x5030bf['code']);}function _0x314991(_0x23e23b){_0x35002e['delet'+'e'](_0x23e23b['code']);}function _0x35648f(_0x1b83f2){var _0x11c7e5=_0x41ca2f;if(_0x1b83f2['__sak'+_0x11c7e5(0x319)])return;_0x35002e[_0x11c7e5(0x43e)](_0x15b749['XzFoj'](_0x11c7e5(0x42c),_0x1b83f2[_0x11c7e5(0x22b)+'n']+(0x1*-0x260b+0x4*-0x32b+0x3*0x10e8)));var _0x43244a=_0x5700dd[_0x1b83f2['butto'+'n']+(-0xe5e+-0x15cf+-0x1217*-0x2)];if(_0x43244a){_0x43244a['push'](performance[_0x11c7e5(0x25f)]());if(_0x15b749['NCzuC'](_0x43244a[_0x11c7e5(0x591)+'h'],-0x6*-0x11f+-0x1916+-0x942*-0x2))_0x43244a['shift']();}}function _0x1fa769(_0x67c064){var _0x4cc83a=_0x41ca2f;if(!_0x67c064[_0x4cc83a(0x177)+_0x4cc83a(0x319)])_0x35002e['delet'+'e'](_0x4cc83a(0x42c)+_0x15b749[_0x4cc83a(0x1f9)](_0x67c064['butto'+'n'],0xa00+0x11c4+-0x1bc3));}function _0x1f8191(){var _0x1f2327=_0x41ca2f;_0x35002e[_0x1f2327(0x26b)]();}function _0x4c3907(){var _0x272685=_0x41ca2f,_0x1b7948=(_0x272685(0x2c2)+_0x272685(0x358)+'6|2')[_0x272685(0x1a5)]('|'),_0x2b3b28=-0xd3*-0x1f+0x1*-0x1749+0x3a*-0xa;while(!![]){switch(_0x1b7948[_0x2b3b28++]){case'0':window[_0x272685(0x5d1)+_0x272685(0x1d2)+'stene'+'r'](_0x15b749[_0x272685(0x3fd)],_0x314991,!![]);continue;case'1':window['addEv'+_0x272685(0x1d2)+_0x272685(0x21d)+'r']('keydo'+'wn',_0xe929d5,!![]);continue;case'2':window[_0x272685(0x5d1)+'entLi'+_0x272685(0x21d)+'r']('blur',_0x1f8191);continue;case'3':if(_0x3a79d1)return;continue;case'4':_0x3a79d1=!![];continue;case'5':window[_0x272685(0x5d1)+'entLi'+_0x272685(0x21d)+'r'](_0x15b749[_0x272685(0x309)],_0x35648f,!![]);continue;case'6':window['addEv'+_0x272685(0x1d2)+'stene'+'r'](_0x272685(0x42c)+'up',_0x1fa769,!![]);continue;}break;}}function _0x47d9e7(_0x45d2f5){var _0x3f2c0c=_0x41ca2f;if(_0x15b749['hHKJO']===_0x3f2c0c(0x378))_0x15b749['mTIbI'](_0x2376a7,!_0x266700);else{var _0x191339=_0x5700dd[_0x45d2f5]||[],_0x2858fc=performance[_0x3f2c0c(0x25f)]();while(_0x191339[_0x3f2c0c(0x591)+'h']&&_0x2858fc-_0x191339[0x26b4+-0x1c9e+-0xa16]>-0xb3b+-0x820+-0x1*-0x1743)_0x191339[_0x3f2c0c(0x2e9)]();return _0x191339['lengt'+'h'];}}function _0x29d617(_0x3aad20){var _0x1df387=_0x41ca2f;if(document[_0x1df387(0x4fa)]&&(document['ready'+_0x1df387(0x197)]===_0x15b749['GhgoS']||document[_0x1df387(0x5d5)+_0x1df387(0x197)]==='compl'+'ete'))_0x3aad20();else document['addEv'+_0x1df387(0x1d2)+_0x1df387(0x21d)+'r']('DOMCo'+'ntent'+'Loade'+'d',_0x3aad20,{'once':!![]});}_0x15b749['WsMEx'](_0x29d617,()=>{var _0x2482b5=_0x41ca2f,_0x44401a={'ewGYQ':_0x15b749[_0x2482b5(0x1d7)],'ZYRfK':_0x15b749[_0x2482b5(0x567)],'OqwPV':'SAFE\x20'+_0x2482b5(0x229)+_0x2482b5(0x695)+_0x2482b5(0x1a3)+_0x2482b5(0x5c2)+_0x2482b5(0x366)+_0x2482b5(0x502)+_0x2482b5(0x558)+_0x2482b5(0x5f1)+_0x2482b5(0x5a8)+')','pDppi':function(_0x3eb779,_0x3decc8){var _0xf48a33=_0x2482b5;return _0x15b749[_0xf48a33(0x692)](_0x3eb779,_0x3decc8);},'ndlGs':function(_0x374591,_0x27b8ac){return _0x374591+_0x27b8ac;},'TeNBF':function(_0x46fa36,_0x35a9c4){return _0x46fa36+_0x35a9c4;},'Veaud':'\x20|\x20sh'+_0x2482b5(0x313)+'\x20','xqxVU':_0x15b749['kCjlk'],'FeEuK':'\x20|\x20ER'+_0x2482b5(0x566),'YpudG':function(_0x2aba21,_0x2d2501){var _0x1990cc=_0x2482b5;return _0x15b749[_0x1990cc(0x479)](_0x2aba21,_0x2d2501);},'ditmd':'fulls'+_0x2482b5(0x29f)+'-banr'+'s','lwulr':function(_0x3da744,_0x46e351){var _0xf3c217=_0x2482b5;return _0x15b749[_0xf3c217(0x5e2)](_0x3da744,_0x46e351);},'lWUuQ':'SfEnW','VNsiV':_0x15b749['baIyA'],'EqBUc':function(_0x3e3270,_0x5aff){return _0x15b749['anPbG'](_0x3e3270,_0x5aff);},'bIMka':function(_0x21002b,_0x39a581){return _0x21002b*_0x39a581;},'jDcvB':function(_0xfab50c,_0x347564){return _0xfab50c*_0x347564;},'zuamV':_0x2482b5(0x157),'BUUGq':_0x2482b5(0x40f),'iojGz':'AEFWg','IpNBf':function(_0x500028){var _0x47332e=_0x2482b5;return _0x15b749[_0x47332e(0x241)](_0x500028);},'uXXmu':function(_0x4e8ab3,_0x4a2ed4){return _0x4e8ab3===_0x4a2ed4;},'JBeRU':function(_0x447ade,_0x443b71){var _0x4b2d02=_0x2482b5;return _0x15b749[_0x4b2d02(0x5af)](_0x447ade,_0x443b71);},'ZeKpK':function(_0x2da48e,_0x2bf9a8){return _0x2da48e*_0x2bf9a8;},'jpSAU':_0x15b749['vtNdt'],'wjUWl':function(_0x13c732,_0x4d53d7){return _0x13c732/_0x4d53d7;},'dxKaN':function(_0x20e787,_0x2eb3e1){var _0x5d342b=_0x2482b5;return _0x15b749[_0x5d342b(0x5b3)](_0x20e787,_0x2eb3e1);},'PcfCH':function(_0x1a14b5,_0x9a5719){return _0x1a14b5+_0x9a5719;},'gxrGG':_0x15b749['oItwF'],'ppQGr':function(_0x52c257,_0x4d5080){var _0xcea851=_0x2482b5;return _0x15b749[_0xcea851(0x39e)](_0x52c257,_0x4d5080);},'dPQGX':function(_0x40ddbd,_0x540d3c){return _0x40ddbd/_0x540d3c;},'jwapW':function(_0x4aa0b5,_0x3440f8){return _0x4aa0b5+_0x3440f8;},'PlBSh':function(_0xc3c589,_0x4a9aa2){var _0x157429=_0x2482b5;return _0x15b749[_0x157429(0x562)](_0xc3c589,_0x4a9aa2);},'byxpJ':'#fff','CmSYB':_0x2482b5(0x406),'dmTFd':_0x15b749['rFyFm'],'vbxJC':function(_0x4cddc0,_0x5af30c){return _0x15b749['bccTr'](_0x4cddc0,_0x5af30c);},'SdRcS':function(_0xe42755,_0x7c5c88){return _0xe42755-_0x7c5c88;},'EDBiH':_0x15b749[_0x2482b5(0x67b)],'Eizyy':'top','WCokw':function(_0x3cab1c,_0x22644a,_0x4b58f0){var _0x3b8036=_0x2482b5;return _0x15b749[_0x3b8036(0x1f4)](_0x3cab1c,_0x22644a,_0x4b58f0);},'kbMKO':_0x15b749[_0x2482b5(0x421)],'VTCKy':function(_0x4b0586,_0x32a31c){return _0x4b0586(_0x32a31c);},'ddnYR':_0x15b749[_0x2482b5(0x314)],'igRZZ':_0x2482b5(0x3cc)+_0x2482b5(0x398)+'r.ui.'+'v1','fGtcU':_0x15b749[_0x2482b5(0x2aa)],'QSdKI':function(_0xaaf809,_0x4a853a){return _0xaaf809(_0x4a853a);},'NqZIJ':_0x15b749[_0x2482b5(0x267)],'WfUSA':'span','ZPYUj':_0x2482b5(0x538)+'l','ThmnJ':function(_0x38428f){return _0x38428f();},'MyZXA':_0x2482b5(0x466),'Zyzpj':_0x2482b5(0x2ab),'iTCia':_0x15b749['RMRpB'],'XiNRB':_0x2482b5(0x575)+'rd-ti'+'tle','IZmDq':'stron'+'g','nUXUp':_0x2482b5(0x68d)+'ody','NCNIo':'Unity'+_0x2482b5(0x31d)+_0x2482b5(0x293)+_0x2482b5(0x430)+_0x2482b5(0x1e1),'YsTeM':'SAFE\x20'+'MODE\x20'+'—\x20ove'+_0x2482b5(0x1a3)+_0x2482b5(0x5c2)+'\x20no\x20h'+_0x2482b5(0x502)+'(relo'+'ad\x20to'+'\x20exit'+')','fggsm':function(_0x31dc3b,_0x55ab45){return _0x31dc3b+_0x55ab45;},'GnNeV':function(_0x444d1d,_0x360574){return _0x444d1d+_0x360574;},'wEKGZ':_0x2482b5(0x341)+'bound'+'\x20','dhlOI':function(_0x15f3ed,_0x47c62b){return _0x15b749['iMmrC'](_0x15f3ed,_0x47c62b);},'FofXJ':_0x15b749[_0x2482b5(0x5a2)],'LIqoR':_0x15b749['oeFHc'],'AxRSY':_0x2482b5(0x341)+_0x2482b5(0x468)+_0x2482b5(0x1cf)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x2482b5(0x21b)+_0x2482b5(0x2a4)+_0x2482b5(0x1ea)+_0x2482b5(0x199),'vYEpM':_0x2482b5(0x30e)+_0x2482b5(0x3af)+_0x2482b5(0x690),'jPpFc':_0x15b749[_0x2482b5(0x14b)],'dimde':_0x2482b5(0x699),'KvOJX':_0x2482b5(0x4b7)+'n','qObFz':function(_0xaced0d,_0x522714){return _0xaced0d===_0x522714;},'JjPgm':'sWQlv','IInXp':function(_0x119bad){return _0x119bad();},'pmvXg':'[saku'+_0x2482b5(0x4ad)+'ur]\x20h'+_0x2482b5(0x261)+_0x2482b5(0x5e7)+_0x2482b5(0x221),'yPwOb':_0x2482b5(0x2fb)+'e','XtPEI':function(_0x2089b5,_0x2439ef){var _0x56056f=_0x2482b5;return _0x15b749[_0x56056f(0x1c7)](_0x2089b5,_0x2439ef);},'okDoF':_0x15b749['Ivivj'],'EAiBQ':function(_0x31236b,_0x4bfa7a){return _0x31236b<_0x4bfa7a;},'EfUsd':function(_0xc6894e,_0x3ec117){var _0x16fb51=_0x2482b5;return _0x15b749[_0x16fb51(0x1f0)](_0xc6894e,_0x3ec117);},'UOjpO':_0x2482b5(0x2c5),'OynXC':function(_0x46da0a,_0x4358e0){return _0x46da0a+_0x4358e0;},'HCwpO':function(_0x3af319,_0x14a60b){var _0x18fbda=_0x2482b5;return _0x15b749[_0x18fbda(0x673)](_0x3af319,_0x14a60b);},'HcfoQ':function(_0x2674c0,_0x5a1781){return _0x2674c0+_0x5a1781;},'ybyrM':_0x2482b5(0x224)+_0x2482b5(0x53b),'yLnry':_0x15b749['aSWWq'],'OuCVw':_0x2482b5(0x5c4)+_0x2482b5(0x4dc)+'t\x20'};_0x1f9fab[_0x2482b5(0x67a)+'ck']&&(_0x2482b5(0x674)==='cVqVe'?setInterval(()=>{var _0x5a20a3=_0x2482b5;try{if(_0x44401a['YpudG'](_0x5a20a3(0x2f2),_0x5a20a3(0x1a8))){var _0x66045b=_0x33830c[_0xc17d54]['query'+_0x5a20a3(0x64b)+_0x5a20a3(0x576)](_0x44401a[_0x5a20a3(0x500)]);_0x66045b&&(_0x66045b[_0x5a20a3(0x335)+_0x5a20a3(0x306)+'t'][_0x5a20a3(0x482)+'Of']('UWMK')===0x1134+-0x1c49+0xb15*0x1||_0x66045b['textC'+_0x5a20a3(0x306)+'t'][_0x5a20a3(0x482)+'Of'](_0x44401a[_0x5a20a3(0x624)])===-0xff6+0x15*0x157+-0xc2d)&&(_0x66045b[_0x5a20a3(0x335)+_0x5a20a3(0x306)+'t']=_0x432da2[_0x5a20a3(0x193)+_0x5a20a3(0x519)]?_0x44401a['OqwPV']:_0x2a3353[_0x5a20a3(0x3f6)]?_0x44401a['pDppi'](_0x44401a[_0x5a20a3(0x2dc)](_0x44401a['ndlGs'](_0x44401a['ndlGs'](_0x44401a[_0x5a20a3(0x2dc)]('UWMK\x20'+_0x5a20a3(0x212)+'\x20',_0x34766e[_0x5a20a3(0x158)+'Total']?_0x44401a['TeNBF'](_0x16ca93[_0x5a20a3(0x158)+'Ok'],'/')+_0x278f0a[_0x5a20a3(0x158)+'Total']+(_0x5a20a3(0x246)+'s'):'0\x20hoo'+_0x5a20a3(0x581)+'med\x20('+_0x5a20a3(0x192)+_0x5a20a3(0x361)),_0x5a20a3(0x224)+_0x5a20a3(0x53b)),_0x37a056[_0x5a20a3(0x5fc)+_0x5a20a3(0x187)]?'loade'+'d':'loadi'+'ng')+_0x44401a['Veaud']+(_0x556e49['shoot'+_0x5a20a3(0x679)]?'held':_0x44401a[_0x5a20a3(0x69a)])+(_0x5a20a3(0x5c4)+_0x5a20a3(0x4dc)+'t\x20'),_0xb86697['movem'+_0x5a20a3(0x35b)]?_0x5a20a3(0x42e):_0x44401a[_0x5a20a3(0x69a)]),_0x53a629[_0x5a20a3(0x178)+_0x5a20a3(0x274)]?_0x44401a['pDppi'](_0x44401a[_0x5a20a3(0x622)],_0x4d5f85['lastE'+_0x5a20a3(0x274)]):''):_0x5a20a3(0x341)+_0x5a20a3(0x468)+_0x5a20a3(0x417)+_0x5a20a3(0x28c)+_0x5a20a3(0x543)+'ly\x20(r'+_0x5a20a3(0x3d0)+_0x5a20a3(0x21b)+_0x5a20a3(0x2a4)+'erscr'+_0x5a20a3(0x199));}else for(var _0xc14b09 of[_0x5a20a3(0x1e6)+_0x5a20a3(0x4d9)+'0x250'+'-pare'+'nt',_0x5a20a3(0x1e6)+'io_72'+'8x90-'+_0x5a20a3(0x641)+'t',_0x5a20a3(0x1e6)+'io_30'+_0x5a20a3(0x355)+'-pare'+'nt',_0x44401a[_0x5a20a3(0x5cf)]]){var _0x53b40d=document[_0x5a20a3(0x619)+'ement'+'ById'](_0xc14b09);if(_0x53b40d&&_0xc14b09===_0x5a20a3(0x4ca)+'creen'+'-banr'+'s'){if(_0x44401a[_0x5a20a3(0x39d)]('IYhuX',_0x44401a['lWUuQ'])){var _0x1569e0=_0x53b40d[_0x5a20a3(0x686)+'ren'];for(var _0x4c6c92=-0xb33+0x4f0+0x643;_0x4c6c92<_0x1569e0[_0x5a20a3(0x591)+'h'];_0x4c6c92++){if(_0x1569e0[_0x4c6c92]['id']&&_0x1569e0[_0x4c6c92]['id'][_0x5a20a3(0x482)+'Of'](_0x44401a[_0x5a20a3(0x3db)])===-0xd8d+0x1*0x1247+-0xa*0x79)_0x1569e0[_0x4c6c92][_0x5a20a3(0x299)]['displ'+'ay']=_0x5a20a3(0x3c5);}}else try{_0x3e55ee['enabl'+'ed']=!!_0x4b1d28;}catch(_0x46def7){}}else{if(_0x53b40d)_0x53b40d[_0x5a20a3(0x299)][_0x5a20a3(0x559)+'ay']=_0x5a20a3(0x3c5);}}}catch(_0x53d2fa){}},0x2403+0xa*-0x46+-0x1977):(_0x465890['keyst'+_0x2482b5(0x3a3)]=_0x47776e,_0x15b749[_0x2482b5(0x1f8)](_0x1b893a)));var _0x2aa6bb=document[_0x2482b5(0x387)+'eElem'+_0x2482b5(0x2d7)](_0x15b749[_0x2482b5(0x2cd)]);_0x2aa6bb['style'][_0x2482b5(0x4ae)+'xt']='posit'+_0x2482b5(0x503)+_0x2482b5(0x27e)+_0x2482b5(0x56d)+_0x2482b5(0x1d5)+'dth:1'+_0x2482b5(0x184)+'heigh'+'t:100'+_0x2482b5(0x149)+_0x2482b5(0x482)+':2147'+'48364'+'6;poi'+'nter-'+_0x2482b5(0x66a)+_0x2482b5(0x279)+'e';var _0x21ae49=_0x2aa6bb['getCo'+_0x2482b5(0x4c0)]('2d');function _0x188f31(){var _0x477595=_0x2482b5;try{if('KSNNl'!==_0x44401a['BUUGq'])_0x5526d8[_0x477595(0x410)]=_0x44401a[_0x477595(0x67f)](_0x477595(0x494)+_0x171260[_0x477595(0x53c)](_0x44401a['bIMka'](-0x169f+0x113e*0x1+0x56a,_0x366817)),_0x477595(0x5b7)+'-sans'+'-seri'+'f,sys'+_0x477595(0x380)+_0x477595(0x20e)+'s-ser'+'if'),_0x5ddd15[_0x477595(0x368)+'tyle']=_0x5938c2?_0x477595(0x495):_0x477595(0x5b8)+'255,2'+'35,24'+_0x477595(0x2d3)+'5)',_0x5cabde[_0x477595(0x260)+'ext'](_0x37847c,_0x14ca89+_0x25acbd/(-0xfd4+0x1e4+0x69*0x22),_0x44401a['TeNBF'](_0x44401a[_0x477595(0x67f)](_0x1f0b6e,_0xdce9c9/(-0x607*0x1+-0x205*-0x10+-0x1a47)),_0x44401a['jDcvB'](0x160+-0x20da+-0x25*-0xda,_0x14c45c)));else{var _0x275080=document[_0x477595(0x4ca)+_0x477595(0x29f)+_0x477595(0x4a1)+'nt'],_0x11bfe5=_0x275080&&_0x275080['tagNa'+'me']!=='CANVA'+'S'?_0x275080:document[_0x477595(0x4fa)]||document['docum'+'entEl'+_0x477595(0x321)];if(_0x2aa6bb[_0x477595(0x641)+'tNode']!==_0x11bfe5)_0x11bfe5[_0x477595(0x356)+_0x477595(0x5c8)+'d'](_0x2aa6bb);}}catch(_0xa7982f){if('kQbhW'!=='DwsyC')try{_0x44401a['iojGz']!==_0x44401a['iojGz']?(_0x4407b6(_0xcdc5a3,0x1a*-0x14b+-0x1f*-0x1d+-0x1ea7*-0x1,'f32',-0xa1c+-0x5e9+0x1*0x1005+0.1),_0xf913e0(_0x2d2f7b,0x1d*-0xcd+0x3*-0x2cf+0x2006*0x1,_0x44401a[_0x477595(0x614)],0x1df4+0x14e9+0x1d*-0x1c1+0.1)):document[_0x477595(0x4fa)][_0x477595(0x356)+_0x477595(0x5c8)+'d'](_0x2aa6bb);}catch(_0x58c3ec){}else _0x4f6d0c[_0x477595(0x4fa)]['appen'+_0x477595(0x5c8)+'d'](_0x300474);}}var _0x368d47={'w':0x0,'h':0x0,'dpr':0x0};function _0x420034(){var _0x33acbd=_0x2482b5;if(_0x44401a['YpudG']('LTaJp','LTaJp')){var _0x30b69a=window['devic'+'ePixe'+'lRati'+'o']||-0x155c+-0x15*0x49+0x2*0xdad,_0x4e041f=window[_0x33acbd(0x457)+_0x33acbd(0x499)],_0x475429=window[_0x33acbd(0x457)+'Heigh'+'t'];if(_0x44401a[_0x33acbd(0x505)](_0x4e041f,_0x368d47['w'])&&_0x44401a[_0x33acbd(0x505)](_0x475429,_0x368d47['h'])&&_0x44401a['JBeRU'](_0x30b69a,_0x368d47[_0x33acbd(0x4f6)]))return;_0x368d47['w']=_0x4e041f,_0x368d47['h']=_0x475429,_0x368d47['dpr']=_0x30b69a,_0x2aa6bb[_0x33acbd(0x59d)]=Math['round'](_0x44401a[_0x33acbd(0x547)](_0x4e041f,_0x30b69a)),_0x2aa6bb[_0x33acbd(0x2dd)+'t']=Math['round'](_0x475429*_0x30b69a),_0x21ae49[_0x33acbd(0x471)+'ansfo'+'rm'](_0x30b69a,0x2*-0x427+-0x295+0xae3,0x163*0x2+0x5e*-0x4c+0x1922,_0x30b69a,0x8a5+0x1ba8+0x1*-0x244d,-0x6ab*0x3+-0x1*-0x178d+-0xe3*0x4);}else _0x438452['chCol'+'or']=_0x610623,_0x44401a[_0x33acbd(0x521)](_0x56afc8);}var _0x5bb4c0=0x11b9*0x1+-0x21a5+0xfec,_0x25b435=performance[_0x2482b5(0x25f)](),_0x51a301=-0xb*-0x30d+-0x1091+0x4b*-0x3a;function _0x46fbed(_0x51b8d3){var _0x236c58=_0x2482b5,_0x400836=(_0x236c58(0x5cb)+_0x236c58(0x36b)+_0x236c58(0x24e)+'12|9|'+'4|11|'+'6|10|'+'7')[_0x236c58(0x1a5)]('|'),_0x218551=0x125d+-0x7*-0x61+0xa*-0x21a;while(!![]){switch(_0x400836[_0x218551++]){case'0':_0x19f386('W',_0x236c58(0x4ef),_0x284f25+_0x384d07+_0x59dc0c,_0x2089af,_0x384d07,_0x384d07);continue;case'1':var _0x15c9e1=_0x1f9fab['ksPos'];continue;case'2':var _0x51a10c=_0x384d07*(0xe5+0x12e*-0x11+0xc*0x199)+_0x15b749[_0x236c58(0x277)](_0x59dc0c,-0x1*-0x4c1+-0x3*-0xb33+0x1*-0x2658),_0x549d6=_0x15b749['XzFoj'](_0x15b749[_0x236c58(0x48e)](_0x384d07,-0x199f+0xb12+0xe9*0x10),_0x59dc0c*(0x167b+0x1983+-0x17fe*0x2));continue;case'3':var _0x19f386=(_0x7b8b19,_0x567506,_0x486596,_0x5875c7,_0x3db579,_0x3c043b,_0x3ce4a1)=>{var _0x3ac075=_0x236c58,_0x16ce7c=_0x44401a['jpSAU']['split']('|'),_0x58e1c9=0xc8*-0x15+0x9bf+0x6a9;while(!![]){switch(_0x16ce7c[_0x58e1c9++]){case'0':_0x21ae49['fillT'+_0x3ac075(0x68e)](_0x7b8b19,_0x44401a[_0x3ac075(0x67f)](_0x486596,_0x44401a[_0x3ac075(0x3ab)](_0x3db579,-0xac1*-0x2+-0x10d*0x1d+0x8f9)),_0x44401a['dxKaN'](_0x5875c7+_0x3c043b/(0x5*-0x28f+0x45a+0x873),_0x3ce4a1?_0x44401a['jDcvB'](-0x1*-0x237b+0xa92+-0x3d6*0xc,_0x3be863):-0x1*-0x26b3+0xe84+0x11bd*-0x3));continue;case'1':if(_0x21ae49[_0x3ac075(0x53c)+'Rect'])_0x21ae49['round'+'Rect'](_0x486596,_0x5875c7,_0x3db579,_0x3c043b,_0x44401a[_0x3ac075(0x547)](-0x18*-0x139+-0x3cb*0x3+-0x11f0,_0x3be863));else _0x21ae49[_0x3ac075(0x62a)](_0x486596,_0x5875c7,_0x3db579,_0x3c043b);continue;case'2':_0x3ce4a1&&(_0x21ae49['font']=_0x44401a[_0x3ac075(0x2e6)](_0x44401a['gxrGG']+Math[_0x3ac075(0x53c)](_0x44401a['ppQGr'](-0x133*-0x2+0x16c3+-0x1920,_0x3be863)),_0x3ac075(0x5b7)+_0x3ac075(0x14e)+_0x3ac075(0x691)+_0x3ac075(0x37b)+_0x3ac075(0x380)+_0x3ac075(0x20e)+'s-ser'+'if'),_0x21ae49['fillS'+_0x3ac075(0x61f)]=_0x316ae6?'#fff':'rgba('+'255,2'+'35,24'+_0x3ac075(0x2d3)+'5)',_0x21ae49[_0x3ac075(0x260)+'ext'](_0x3ce4a1,_0x486596+_0x44401a['dPQGX'](_0x3db579,0x3fb*0x8+0x1208+0x2*-0x18ef),_0x44401a[_0x3ac075(0x415)](_0x5875c7,_0x44401a['PlBSh'](_0x3c043b,0x2dd*-0x1+0x83*0x1d+0x4*-0x2fe))+(0xf30+0x916*0x4+-0x3380)*_0x3be863));continue;case'3':_0x21ae49[_0x3ac075(0x368)+'tyle']=_0x316ae6?_0x3ac075(0x5b8)+'255,1'+_0x3ac075(0x458)+'7,0.8'+'5)':'rgba('+_0x3ac075(0x60f)+'16,0.'+'7)';continue;case'4':_0x21ae49[_0x3ac075(0x1cc)+'e']();continue;case'5':_0x21ae49['begin'+'Path']();continue;case'6':_0x316ae6&&(_0x21ae49[_0x3ac075(0x438)+'wColo'+'r']=_0x14943a,_0x21ae49['shado'+'wBlur']=0x1f9f+-0x28e*-0xf+-0x45e3,_0x21ae49[_0x3ac075(0x440)](),_0x21ae49[_0x3ac075(0x438)+'wBlur']=0x18b*0x17+0x5*0x647+-0x42e0);continue;case'7':_0x21ae49['lineW'+_0x3ac075(0x4e8)]=-0x4a1*0x6+0x2082+-0x4bb;continue;case'8':_0x21ae49[_0x3ac075(0x610)]();continue;case'9':_0x21ae49[_0x3ac075(0x368)+_0x3ac075(0x61f)]=_0x316ae6?_0x44401a[_0x3ac075(0x4dd)]:'rgba('+_0x3ac075(0x24b)+_0x3ac075(0x54f)+_0x3ac075(0x285)+')';continue;case'10':_0x21ae49[_0x3ac075(0x1ca)+'aseli'+'ne']=_0x3ac075(0x469)+'e';continue;case'11':_0x21ae49[_0x3ac075(0x410)]=_0x44401a[_0x3ac075(0x415)](_0x44401a['CmSYB'],Math[_0x3ac075(0x53c)]((-0x1*-0x2164+0x3c8+0x24*-0x108)*_0x3be863))+(_0x3ac075(0x5b7)+'-sans'+_0x3ac075(0x691)+_0x3ac075(0x37b)+'tem-u'+'i,san'+_0x3ac075(0x263)+'if');continue;case'12':_0x21ae49[_0x3ac075(0x657)+'re']();continue;case'13':_0x21ae49[_0x3ac075(0x39f)+_0x3ac075(0x346)]=_0x3ac075(0x603)+'r';continue;case'14':var _0x316ae6=_0x35002e['has'](_0x567506);continue;case'15':_0x21ae49[_0x3ac075(0x440)]();continue;case'16':_0x21ae49[_0x3ac075(0x1cc)+'eStyl'+'e']=_0x316ae6?_0x4cea7b:_0x44401a[_0x3ac075(0x30a)];continue;}break;}};continue;case'4':_0x19f386('D','KeyD',_0x15b749[_0x236c58(0x513)](_0x284f25,_0x15b749[_0x236c58(0x198)](_0x384d07+_0x59dc0c,0x167+-0x150b*-0x1+0x2ce*-0x8)),_0x2089af+_0x384d07+_0x59dc0c,_0x384d07,_0x384d07);continue;case'5':var _0x2089af=_0x15b749['xSZgu'](_0x15c9e1,'ml')?_0x15b749['zhVBm'](_0x51b8d3[_0x236c58(0x17b)]+_0x51b8d3[_0x236c58(0x2dd)+'t']/(0xbc6+0x22ee+-0x2*0x1759),_0x15b749['iwNgv'](_0x549d6,0x2a*-0xbe+-0x26*0x1+0x1f54)):_0x15b749['dpuHe'](_0x51b8d3['botto'+'m'],_0x549d6)-(_0x15c9e1==='bl'?0x1151+-0x1*0x15a+0x133*-0xd:-0x1294*0x1+0x9a*-0x20+0x3*0xcce);continue;case'6':_0x19f386(_0x15b749[_0x236c58(0x4d0)],_0x236c58(0x42c)+'1',_0x284f25,_0x684f9d,_0x4c8a40,_0x384d07,_0x1f9fab[_0x236c58(0x16e)]?_0x47d9e7(-0x1*-0x54b+-0x211f+0x1bd5)+_0x236c58(0x5e1):'');continue;case'7':_0x19f386('','Space',_0x284f25,_0x15b749[_0x236c58(0x2b5)](_0x15b749['XzFoj'](_0x684f9d,_0x384d07),_0x59dc0c),_0x51a10c,_0x384d07*(0x1*0x1a71+0x6b6*0x3+-0x2e93+0.45));continue;case'8':var _0x3be863=Number(_0x1f9fab['ksSca'+'le'])||-0x235a+-0x1*-0x230f+0x4*0x13,_0x384d07=(0x19dd*0x1+0x7*-0x4da+0x83b)*_0x3be863,_0x59dc0c=(-0x78c+-0x102*-0x6+0x184)*_0x3be863;continue;case'9':_0x19f386('S',_0x15b749['QpvXU'],_0x284f25+_0x384d07+_0x59dc0c,_0x15b749[_0x236c58(0x513)](_0x15b749[_0x236c58(0x2b5)](_0x2089af,_0x384d07),_0x59dc0c),_0x384d07,_0x384d07);continue;case'10':_0x19f386(_0x15b749[_0x236c58(0x2fd)],_0x236c58(0x42c)+'3',_0x15b749[_0x236c58(0x1f9)](_0x284f25,_0x4c8a40)+_0x59dc0c,_0x684f9d,_0x4c8a40,_0x384d07,_0x1f9fab[_0x236c58(0x16e)]?_0x47d9e7(-0x1d2+-0x48b*-0x7+0x4*-0x77e)+_0x15b749[_0x236c58(0x357)]:'');continue;case'11':var _0x4c8a40=_0x15b749[_0x236c58(0x207)](_0x51a10c,_0x59dc0c)/(0x1d2f+0x1abc+0x12a3*-0x3),_0x684f9d=_0x2089af+_0x15b749[_0x236c58(0x48e)](_0x15b749[_0x236c58(0x2b5)](_0x384d07,_0x59dc0c),-0x6*0x101+0x771*0x2+-0x8da);continue;case'12':_0x15b749[_0x236c58(0x14d)](_0x19f386,'A',_0x236c58(0x360),_0x284f25,_0x2089af+_0x384d07+_0x59dc0c,_0x384d07,_0x384d07);continue;case'13':var _0x284f25=_0x15c9e1==='br'?_0x15b749['FvhPa'](_0x51b8d3['right']-(0x1661+-0xd68+-0x1*0x8e9),_0x51a10c):_0x51b8d3['left']+(-0x3*-0x147+-0x1508+0x1143);continue;}break;}}function _0x12a57f(_0x4beb37){var _0x22ae45=_0x2482b5,_0x397811=_0x4beb37['width']/(-0x109e+0x640*-0x3+0x2360),_0x1d6d6f=_0x44401a[_0x22ae45(0x16c)](_0x4beb37[_0x22ae45(0x2dd)+'t'],0x2626+0x1fff*-0x1+-0x625*0x1),_0x2f0ac4=Number(_0x1f9fab[_0x22ae45(0x4bd)+'e'])||0x137*-0xc+-0x1*-0x2287+0x6a6*-0x3,_0x596f2d=/^#[0-9a-f]{6}$/i[_0x22ae45(0x395)](_0x1f9fab['chCol'+'or'])?_0x1f9fab[_0x22ae45(0x644)+'or']:'#ff6b'+'9d';_0x21ae49[_0x22ae45(0x610)](),_0x21ae49[_0x22ae45(0x1cc)+'eStyl'+'e']=_0x596f2d,_0x21ae49[_0x22ae45(0x368)+_0x22ae45(0x61f)]=_0x596f2d,_0x21ae49[_0x22ae45(0x36d)+_0x22ae45(0x4e8)]=Math['max'](-0x1748+-0x13d0+-0x3b*-0xbb+0.5,(0x1f81*-0x1+0x20ac+-0xb*0x1b)*_0x2f0ac4),_0x21ae49[_0x22ae45(0x438)+_0x22ae45(0x24f)+'r']=_0x596f2d,_0x21ae49[_0x22ae45(0x438)+_0x22ae45(0x40a)]=0x1b3c+0xd7c+-0x1459*0x2;var _0x574462=(-0x1911+0x222e+-0x917)*_0x2f0ac4,_0x2a7830=(0x15ab+0xfd5+-0x2578)*_0x2f0ac4;_0x21ae49[_0x22ae45(0x52b)+'Path'](),_0x21ae49['moveT'+'o'](_0x44401a['dxKaN'](_0x44401a['dxKaN'](_0x397811,_0x574462),_0x2a7830),_0x1d6d6f),_0x21ae49[_0x22ae45(0x48f)+'o'](_0x44401a['SdRcS'](_0x397811,_0x574462),_0x1d6d6f),_0x21ae49[_0x22ae45(0x19b)+'o'](_0x44401a['EqBUc'](_0x397811,_0x574462),_0x1d6d6f),_0x21ae49['lineT'+'o'](_0x397811+_0x574462+_0x2a7830,_0x1d6d6f),_0x21ae49[_0x22ae45(0x19b)+'o'](_0x397811,_0x1d6d6f-_0x574462-_0x2a7830),_0x21ae49[_0x22ae45(0x48f)+'o'](_0x397811,_0x44401a[_0x22ae45(0x32c)](_0x1d6d6f,_0x574462)),_0x21ae49['moveT'+'o'](_0x397811,_0x44401a[_0x22ae45(0x67f)](_0x1d6d6f,_0x574462)),_0x21ae49['lineT'+'o'](_0x397811,_0x1d6d6f+_0x574462+_0x2a7830),_0x21ae49[_0x22ae45(0x1cc)+'e'](),_0x21ae49['begin'+_0x22ae45(0x441)](),_0x21ae49['arc'](_0x397811,_0x1d6d6f,(0x2a7+-0x1d64+0x1abe+0.6000000000000001)*_0x2f0ac4,-0x284+-0x2ff+0x583,Math['PI']*(-0x1105*0x1+0x3d1*-0xa+0x3731)),_0x21ae49[_0x22ae45(0x440)](),_0x21ae49[_0x22ae45(0x657)+'re']();}function _0x239b1f(_0x1398e1){var _0x2feb24=_0x2482b5;_0x21ae49[_0x2feb24(0x610)](),_0x21ae49['font']=_0x44401a['EDBiH'],_0x21ae49[_0x2feb24(0x39f)+_0x2feb24(0x346)]='left',_0x21ae49['textB'+_0x2feb24(0x550)+'ne']=_0x44401a[_0x2feb24(0x377)];var _0x23b7ad=0x1048+0x261a+-0x3636,_0x25a8cc=-0x385+0x1f44+-0x3f5*0x7,_0x3f72fe=(_0x343d55,_0x2e450c)=>{var _0x8f6ff1=_0x2feb24;_0x21ae49['fillS'+'tyle']=_0x2e450c||_0x8f6ff1(0x5b8)+'255,2'+_0x8f6ff1(0x54f)+_0x8f6ff1(0x38b)+'5)',_0x21ae49[_0x8f6ff1(0x260)+'ext'](_0x343d55,_0x25a8cc,_0x23b7ad),_0x23b7ad+=0x1727+0x3e2+-0x1af9;};_0x44401a[_0x2feb24(0x28d)](_0x3f72fe,_0x2feb24(0x4c3)+'A\x20KOU'+_0x2feb24(0x3b6)+'1',_0x44401a[_0x2feb24(0x3f7)]);if(_0x1f9fab['fps'])_0x44401a['VTCKy'](_0x3f72fe,_0x51a301+_0x44401a['ddnYR']);if(!_0x3c0c8b[_0x2feb24(0x5fc)+_0x2feb24(0x187)])_0x44401a['WCokw'](_0x3f72fe,'waiti'+_0x2feb24(0x3c8)+_0x2feb24(0x21a)+'e…',_0x2feb24(0x5b8)+'255,1'+_0x2feb24(0x1c1)+_0x2feb24(0x52a)+')');_0x21ae49[_0x2feb24(0x657)+'re']();}function _0x625651(){var _0x1f619d=_0x2482b5;_0x15b749[_0x1f619d(0x4d8)](requestAnimationFrame,_0x625651),_0x5bb4c0++;var _0xa67556=performance['now']();_0x15b749['iGsdA'](_0xa67556,_0x25b435)>=0x2329+0x2077*0x1+-0x41ac&&(_0x1f619d(0x155)!==_0x1f619d(0x242)?(_0x51a301=Math[_0x1f619d(0x53c)](_0x15b749[_0x1f619d(0x347)](_0x5bb4c0*(-0x169a+0x2660*0x1+-0xbde),_0xa67556-_0x25b435)),_0x5bb4c0=0x213b+-0x1*0x1135+-0x24a*0x7,_0x25b435=_0xa67556):(_0x138e77[_0x1f619d(0x397)+_0x1f619d(0x183)+_0x1f619d(0x4b5)](),_0x267b28()));_0x420034(),_0x188f31(),_0x21ae49[_0x1f619d(0x26b)+_0x1f619d(0x67e)](-0x3*0x4ef+0xe3d+0x90,-0x1*-0x6fb+-0xe2c+0x731,_0x368d47['w'],_0x368d47['h']);var _0x2c4659={'left':0x0,'top':0x0,'right':_0x368d47['w'],'bottom':_0x368d47['h'],'width':_0x368d47['w'],'height':_0x368d47['h']};if(_0x1f9fab[_0x1f619d(0x15c)+'hair'])_0x12a57f(_0x2c4659);if(_0x1f9fab[_0x1f619d(0x694)+_0x1f619d(0x3a3)])_0x46fbed(_0x2c4659);_0x239b1f(_0x2c4659);}var _0x4a6551=document[_0x2482b5(0x387)+'eElem'+'ent'](_0x15b749['WDIdR']);_0x4a6551['id']=_0x2482b5(0x3cc)+_0x2482b5(0x3ed),_0x4a6551['style']['cssTe'+'xt']=_0x2482b5(0x16b)+'ion:f'+'ixed;'+_0x2482b5(0x56d)+_0x2482b5(0x617)+_0x2482b5(0x482)+_0x2482b5(0x552)+_0x2482b5(0x26a)+'7;poi'+'nter-'+'event'+_0x2482b5(0x279)+'e;';var _0x4faa98=_0x4a6551[_0x2482b5(0x407)+'hShad'+'ow']({'mode':'open'});(document[_0x2482b5(0x4fa)]||document[_0x2482b5(0x269)+'entEl'+_0x2482b5(0x321)])['appen'+'dChil'+'d'](_0x4a6551);var _0x14a914=![],_0x3ad12c={};try{_0x3ad12c=JSON[_0x2482b5(0x5a7)](localStorage[_0x2482b5(0x4a9)+'em'](_0x15b749[_0x2482b5(0x5c3)])||'{}');}catch(_0x1c77bc){}function _0x548285(){var _0x150b1c=_0x2482b5;try{localStorage[_0x150b1c(0x4fc)+'em'](_0x44401a[_0x150b1c(0x604)],JSON['strin'+_0x150b1c(0x423)](_0x3ad12c));}catch(_0x8100c6){}}function _0x1890eb(_0xbaceda,_0xc2ba2c){var _0x222c47=_0x2482b5,_0x2719b8=_0x15b749['tihQF'][_0x222c47(0x1a5)]('|'),_0x19c36d=0x959*0x2+-0x3e6+-0xecc;while(!![]){switch(_0x2719b8[_0x19c36d++]){case'0':_0x44d3bf[_0x222c47(0x3e0)+'ck']=_0x321607=>{var _0x4919fa=_0x222c47;_0x321607['stopP'+_0x4919fa(0x683)+'ation']();var _0x4f7f5a=_0x44401a[_0x4919fa(0x39d)](_0x44d3bf[_0x4919fa(0x696)+_0x4919fa(0x218)+'te'](_0x44401a[_0x4919fa(0x1f1)]),_0x4919fa(0x5ca));_0x44d3bf[_0x4919fa(0x36a)+_0x4919fa(0x218)+'te'](_0x4919fa(0x234)+_0x4919fa(0x2d2)+'ed',_0x44401a['VTCKy'](String,_0x4f7f5a)),_0x44401a['QSdKI'](_0xc2ba2c,_0x4f7f5a);};continue;case'1':return _0x44d3bf;case'2':_0x44d3bf[_0x222c47(0x4bf)+'Name']=_0x15b749['XysLj'];continue;case'3':_0x44d3bf[_0x222c47(0x404)]=_0x222c47(0x22b)+'n';continue;case'4':var _0x44d3bf=document[_0x222c47(0x387)+_0x222c47(0x36f)+_0x222c47(0x2d7)]('butto'+'n');continue;case'5':_0x44d3bf[_0x222c47(0x36a)+'tribu'+'te'](_0x222c47(0x1af),'switc'+'h');continue;case'6':_0x44d3bf[_0x222c47(0x36a)+_0x222c47(0x218)+'te']('aria-'+'check'+'ed',String(!!_0xbaceda));continue;}break;}}function _0x26e304(_0x1c9489,_0x4b8d08,_0x2526c9,_0x3cd223,_0x5f0399){var _0xafdfff=_0x2482b5,_0x43ba6d={'UHUtT':'2|4|0'+_0xafdfff(0x3c9),'MgMOH':function(_0x27bffc,_0x30d64e){return _0x27bffc!==_0x30d64e;},'svUAp':function(_0x13a970,_0x33683f){return _0x13a970+_0x33683f;},'BQDqQ':function(_0x5c09f7,_0x1edbb2){return _0x5c09f7-_0x1edbb2;},'akcYC':function(_0x1bbaf2,_0x118793){return _0x1bbaf2(_0x118793);}},_0x2e3b51=document[_0xafdfff(0x387)+_0xafdfff(0x36f)+_0xafdfff(0x2d7)]('div');_0x2e3b51['class'+_0xafdfff(0x16d)]=_0x44401a['NqZIJ'];var _0x4ad959=document[_0xafdfff(0x387)+_0xafdfff(0x36f)+_0xafdfff(0x2d7)]('input');_0x4ad959['type']=_0xafdfff(0x3c0),_0x4ad959['class'+'Name']='sk-sl'+_0xafdfff(0x4f8),_0x4ad959['min']=_0x4b8d08,_0x4ad959[_0xafdfff(0x240)]=_0x2526c9,_0x4ad959['step']=_0x3cd223,_0x4ad959[_0xafdfff(0x67d)]=_0x1c9489;var _0x1f70db=document['creat'+_0xafdfff(0x36f)+'ent'](_0x44401a[_0xafdfff(0x4e7)]);_0x1f70db['class'+_0xafdfff(0x16d)]=_0x44401a['ZPYUj'],_0x1f70db['textC'+'onten'+'t']=String(_0x1c9489);var _0x119b9e=()=>{var _0x4cf614=_0xafdfff;if(_0x4cf614(0x5a5)===_0x4cf614(0x5a5))_0x1f70db['textC'+'onten'+'t']=String(_0x4ad959[_0x4cf614(0x67d)]),_0x2e3b51['style']['setPr'+'opert'+'y'](_0x4cf614(0x1f5),_0x43ba6d['svUAp'](_0x43ba6d[_0x4cf614(0x34d)](_0x4ad959['value'],_0x4b8d08)/(_0x2526c9-_0x4b8d08)*(-0x1085+0x8*-0x1f0+-0x2069*-0x1),'%'));else{var _0x4a04f2=_0x43ba6d['UHUtT']['split']('|'),_0x5d1f05=0x1*-0x26b7+0x76d*0x3+-0x41c*-0x4;while(!![]){switch(_0x4a04f2[_0x5d1f05++]){case'0':_0x2c9b8d[_0x4a2c6f]=_0x3cbdb5;continue;case'1':return _0x3cbdb5;case'2':var _0x3cbdb5=_0x36959e['hookP'+_0x4cf614(0x4f7)+'x']({'typeName':_0x27e378,'methodName':_0x5eeec5,'params':_0x5063b5,'returnType':_0x56e739},_0x3a368f);continue;case'3':_0x253173[_0x4cf614(0x158)+_0x4cf614(0x208)]++;continue;case'4':_0x3cbdb5[_0x4cf614(0x41b)+'ed']=_0x43ba6d[_0x4cf614(0x3e6)](_0x462c5e,![]);continue;}break;}}};return _0x4ad959['oninp'+'ut']=()=>{var _0x232f58=_0xafdfff;_0x119b9e(),_0x43ba6d[_0x232f58(0x428)](_0x5f0399,Number(_0x4ad959['value']));},_0x44401a[_0xafdfff(0x409)](_0x119b9e),_0x2e3b51[_0xafdfff(0x356)+'d'](_0x4ad959,_0x1f70db),_0x2e3b51;}function _0x4e544e(_0x4fbc09,_0x25113e){var _0x322ef0=_0x2482b5;if(_0x322ef0(0x2b6)!==_0x44401a['MyZXA']){var _0x3a65c5=document['creat'+'eElem'+'ent'](_0x322ef0(0x504));return _0x3a65c5[_0x322ef0(0x404)]=_0x44401a[_0x322ef0(0x568)],_0x3a65c5['class'+'Name']=_0x322ef0(0x5a3)+_0x322ef0(0x1a2),_0x3a65c5['value']=/^#[0-9a-f]{6}$/i[_0x322ef0(0x395)](_0x4fbc09)?_0x4fbc09:_0x322ef0(0x232)+'9d',_0x3a65c5['oninp'+'ut']=()=>_0x25113e(_0x3a65c5[_0x322ef0(0x67d)]),_0x3a65c5;}else _0x28c21d['hookG'+'odDie']=_0x957f9e,_0x5a49b7();}function _0x2d1377(_0x509755,_0x3fc94d,_0x2903c0){var _0x44d1b9=_0x2482b5,_0x18c437={'mUENN':function(_0x16b339,_0x994c32){return _0x16b339>_0x994c32;}},_0x21b366=document['creat'+'eElem'+'ent'](_0x15b749[_0x44d1b9(0x1b7)]);_0x21b366['class'+_0x44d1b9(0x16d)]=_0x15b749[_0x44d1b9(0x160)];for(var [_0x56feb6,_0x451ac0]of _0x3fc94d){if(_0x44d1b9(0x46c)!==_0x15b749[_0x44d1b9(0x4cd)]){if(!_0x507be2||_0x24842f['inclu'+_0x44d1b9(0x1d3)](_0xb3035d)||_0x18c437[_0x44d1b9(0x22d)](_0x232fc0['lengt'+'h'],0x1735+-0x10a2+-0x653))return;_0x226b9e['push'](_0x349b77);}else{var _0x17f702=document[_0x44d1b9(0x387)+_0x44d1b9(0x36f)+_0x44d1b9(0x2d7)](_0x44d1b9(0x55c)+'n');_0x17f702['value']=_0x56feb6,_0x17f702['textC'+_0x44d1b9(0x306)+'t']=_0x451ac0,_0x21b366['appen'+_0x44d1b9(0x5c8)+'d'](_0x17f702);}}return _0x21b366[_0x44d1b9(0x67d)]=_0x509755,_0x21b366[_0x44d1b9(0x2a5)+_0x44d1b9(0x4d7)]=()=>_0x2903c0(_0x21b366[_0x44d1b9(0x67d)]),_0x21b366;}function _0x5a3ce5(_0x256cd2,_0x4cc111){var _0x29e5e8=_0x2482b5,_0x3123c6={'gvgPx':function(_0x1f7d26){return _0x1f7d26();}};if(_0x29e5e8(0x37c)==='KTMzs'){var _0x5e56bd=document['creat'+'eElem'+'ent'](_0x29e5e8(0x22b)+'n');return _0x5e56bd['type']='butto'+'n',_0x5e56bd[_0x29e5e8(0x4bf)+_0x29e5e8(0x16d)]=_0x29e5e8(0x4b7)+'n',_0x5e56bd[_0x29e5e8(0x335)+_0x29e5e8(0x306)+'t']=_0x256cd2,_0x5e56bd['oncli'+'ck']=_0x53bc78=>{var _0xeec2bc=_0x29e5e8;_0x53bc78[_0xeec2bc(0x3cd)+_0xeec2bc(0x683)+'ation'](),_0x3123c6['gvgPx'](_0x4cc111);},_0x5e56bd;}else _0x295953['stopP'+_0x29e5e8(0x683)+'ation'](),_0x52dfb8();}function _0x1850d6(_0x41cf67,_0x327a36,_0x4fa424){var _0x284fd1=_0x2482b5,_0x5ed953=document[_0x284fd1(0x387)+_0x284fd1(0x36f)+'ent'](_0x15b749[_0x284fd1(0x2f7)]);_0x5ed953['class'+'Name']=_0x15b749['HsMhk'];var _0x2e1025=document['creat'+_0x284fd1(0x36f)+'ent']('span');_0x2e1025[_0x284fd1(0x4bf)+'Name']='sk-la'+_0x284fd1(0x64c),_0x2e1025['textC'+_0x284fd1(0x306)+'t']=_0x41cf67;if(_0x327a36){var _0x3604ff=document[_0x284fd1(0x387)+_0x284fd1(0x36f)+_0x284fd1(0x2d7)](_0x15b749['mUToT']);_0x3604ff[_0x284fd1(0x4bf)+_0x284fd1(0x16d)]=_0x284fd1(0x3ce)+'nt',_0x3604ff['textC'+'onten'+'t']=_0x327a36,_0x2e1025[_0x284fd1(0x356)+_0x284fd1(0x5c8)+'d'](_0x3604ff);}return _0x5ed953[_0x284fd1(0x356)+'d'](_0x2e1025,_0x4fa424),_0x5ed953;}function _0xe60e41(_0x3c82d2,_0x552a55){var _0x38d49f=_0x2482b5,_0x1b1757=document['creat'+_0x38d49f(0x36f)+_0x38d49f(0x2d7)]('div');return _0x1b1757[_0x38d49f(0x4bf)+_0x38d49f(0x16d)]=_0x44401a['iTCia']+(_0x552a55?'\x20err':''),_0x1b1757[_0x38d49f(0x335)+'onten'+'t']=_0x3c82d2,_0x1b1757;}function _0x5057bc(_0x1a699d,_0x254cda,_0x1acfa1,_0x8ad1b5,_0x50a183){var _0x2626e3=_0x2482b5,_0x56437d=document[_0x2626e3(0x387)+'eElem'+'ent'](_0x2626e3(0x35f));_0x56437d[_0x2626e3(0x4bf)+'Name']='sk-ca'+'rd'+(_0x1acfa1?_0x2626e3(0x682):'');var _0x6f3a92=document['creat'+_0x2626e3(0x36f)+_0x2626e3(0x2d7)](_0x2626e3(0x35f));_0x6f3a92[_0x2626e3(0x4bf)+_0x2626e3(0x16d)]=_0x2626e3(0x575)+'rd-he'+'ad';var _0x75090a=document[_0x2626e3(0x387)+'eElem'+_0x2626e3(0x2d7)](_0x2626e3(0x35f));_0x75090a['class'+'Name']=_0x44401a[_0x2626e3(0x418)];var _0x52ae9e=document[_0x2626e3(0x387)+_0x2626e3(0x36f)+'ent'](_0x44401a['IZmDq']);_0x52ae9e[_0x2626e3(0x335)+_0x2626e3(0x306)+'t']=_0x1a699d,_0x75090a[_0x2626e3(0x356)+_0x2626e3(0x5c8)+'d'](_0x52ae9e);if(_0x8ad1b5){var _0x301b0e=_0x1890eb(_0x1acfa1,_0x12c84c=>{var _0x78e222=_0x2626e3;_0x56437d['class'+_0x78e222(0x598)][_0x78e222(0x656)+'e']('on',_0x12c84c),_0x8ad1b5(_0x12c84c);});_0x6f3a92[_0x2626e3(0x356)+'d'](_0x75090a,_0x301b0e);}else _0x6f3a92[_0x2626e3(0x356)+'dChil'+'d'](_0x75090a);_0x56437d[_0x2626e3(0x356)+_0x2626e3(0x5c8)+'d'](_0x6f3a92);if(_0x50a183&&_0x50a183['lengt'+'h']){var _0x325c34=('5|7|4'+'|0|6|'+_0x2626e3(0x474))[_0x2626e3(0x1a5)]('|'),_0x15ca69=-0x1321+0x3f0*0x7+-0x86f;while(!![]){switch(_0x325c34[_0x15ca69++]){case'0':_0x25047b[_0x2626e3(0x4bf)+_0x2626e3(0x16d)]=_0x2626e3(0x236)+'esc';continue;case'1':_0x30c66a['appen'+_0x2626e3(0x5c8)+'d'](_0x25047b);continue;case'2':_0x56437d[_0x2626e3(0x356)+_0x2626e3(0x5c8)+'d'](_0x30c66a);continue;case'3':for(var _0x3e41fc of _0x50a183)_0x30c66a['appen'+'dChil'+'d'](_0x3e41fc);continue;case'4':var _0x25047b=document[_0x2626e3(0x387)+_0x2626e3(0x36f)+_0x2626e3(0x2d7)]('div');continue;case'5':var _0x30c66a=document[_0x2626e3(0x387)+_0x2626e3(0x36f)+_0x2626e3(0x2d7)](_0x2626e3(0x35f));continue;case'6':_0x25047b[_0x2626e3(0x335)+_0x2626e3(0x306)+'t']=_0x254cda;continue;case'7':_0x30c66a[_0x2626e3(0x4bf)+_0x2626e3(0x16d)]=_0x44401a['nUXUp'];continue;}break;}}return _0x56437d;}var _0x3ea4d3=[{'id':_0x2482b5(0x522)+'t','label':_0x15b749[_0x2482b5(0x47a)]},{'id':_0x2482b5(0x4d5),'label':'Move'},{'id':'visua'+'l','label':_0x2482b5(0x152)+'l'},{'id':_0x15b749['NlUIU'],'label':_0x2482b5(0x5fb)},{'id':_0x2482b5(0x2ce),'label':_0x15b749[_0x2482b5(0x5b5)]}];function _0x47aa83(){var _0x1c5aae=_0x2482b5,_0x426bb0=_0x3c0c8b[_0x1c5aae(0x193)+_0x1c5aae(0x519)]?_0x44401a[_0x1c5aae(0x2e2)]:_0x3c0c8b['uwmk']?_0x44401a[_0x1c5aae(0x2e6)](_0x44401a[_0x1c5aae(0x345)](_0x44401a[_0x1c5aae(0x35a)](_0x44401a['wEKGZ']+(_0x3c0c8b[_0x1c5aae(0x158)+_0x1c5aae(0x208)]?_0x44401a['dhlOI'](_0x3c0c8b[_0x1c5aae(0x158)+'Ok'],'/')+_0x3c0c8b['hooks'+_0x1c5aae(0x208)]+(_0x1c5aae(0x246)+'s'):_0x1c5aae(0x613)+_0x1c5aae(0x581)+'med\x20('+'all\x20o'+'ff)'),'\x20|\x20ga'+_0x1c5aae(0x53b)),_0x3c0c8b[_0x1c5aae(0x5fc)+'oaded']?_0x44401a[_0x1c5aae(0x677)]:_0x44401a[_0x1c5aae(0x4f0)])+_0x44401a[_0x1c5aae(0x2f8)]+(_0x3c0c8b[_0x1c5aae(0x1f2)+'ers']?'held':_0x44401a['xqxVU']),'\x20|\x20mo'+'vemen'+'t\x20')+(_0x3c0c8b[_0x1c5aae(0x416)+'ents']?'held':'none'):_0x44401a[_0x1c5aae(0x57c)];if(_0x3c0c8b['lastE'+_0x1c5aae(0x274)])_0x426bb0+=_0x1c5aae(0x643)+_0x1c5aae(0x566)+_0x3c0c8b[_0x1c5aae(0x178)+_0x1c5aae(0x274)];return _0x5057bc(_0x1c5aae(0x18c)+'s',_0x426bb0,_0x3c0c8b[_0x1c5aae(0x3f6)],null,[_0x1850d6(_0x44401a[_0x1c5aae(0x3f0)],'calls'+_0x1c5aae(0x3e3)+_0x1c5aae(0x4e1)+'ne.Ap'+_0x1c5aae(0x344)+_0x1c5aae(0x524)+'set_t'+_0x1c5aae(0x2c3)+_0x1c5aae(0x4c1)+_0x1c5aae(0x3ef),_0x5a3ce5(_0x1c5aae(0x349),()=>{var _0xa9b3a9=_0x1c5aae;try{if(_0xa2b348)_0xa2b348['call'](_0x44401a[_0xa9b3a9(0x4bb)],_0xa9b3a9(0x445)+_0xa9b3a9(0x2c3)+_0xa9b3a9(0x4c1)+'Rate',[-0xaf8+0x5*0xb3+-0x869*-0x1]);}catch(_0x242c02){}}))]);}function _0x50a11d(_0x3762f2){var _0x5a09ec=_0x2482b5,_0x149982={'nqjXS':function(_0xf7cdc6){return _0xf7cdc6();},'SJNTU':function(_0x18c6a1){var _0x4795d8=_0x3694;return _0x15b749[_0x4795d8(0x241)](_0x18c6a1);},'rvRMh':function(_0x36ffa7,_0x55e5af){var _0x4bd8b2=_0x3694;return _0x15b749[_0x4bd8b2(0x534)](_0x36ffa7,_0x55e5af);},'Lpnnt':function(_0x3aaf33,_0x19e2e3){var _0x26ac9b=_0x3694;return _0x15b749[_0x26ac9b(0x34a)](_0x3aaf33,_0x19e2e3);},'eewwr':'error','bWMpj':function(_0x3c4a45){return _0x3c4a45();},'BOzoY':function(_0x2d4d78){return _0x2d4d78();},'VAKvz':function(_0x11e26d){return _0x11e26d();}};if(_0x3762f2===_0x5a09ec(0x522)+'t')return[_0x47aa83(),_0x5057bc('God\x20M'+_0x5a09ec(0x519),_0x5a09ec(0x24a)+'s\x20OHe'+'alth.'+_0x5a09ec(0x44c)+_0x5a09ec(0x19c)+_0x5a09ec(0x209)+'lth\x20a'+_0x5a09ec(0x24c)+'ealth'+_0x5a09ec(0x16f)+'lDie,'+_0x5a09ec(0x1e8)+'othin'+_0x5a09ec(0x316)+_0x5a09ec(0x322)+_0x5a09ec(0x47d)+_0x5a09ec(0x1b0)+'ou.',_0x1f9fab[_0x5a09ec(0x389)],_0x3a0f77=>{var _0x344de8=_0x5a09ec;_0x1f9fab[_0x344de8(0x389)]=_0x3a0f77,_0x3bf333(),_0x38d562(_0x44401a['jPpFc'],_0x3a0f77),_0x38d562('godDi'+'e',_0x3a0f77);},[]),_0x5057bc(_0x5a09ec(0x19e)+_0x5a09ec(0x215),_0x5a09ec(0x3d1)+_0x5a09ec(0x365)+'ilMot'+_0x5a09ec(0x33f)+'ick\x20s'+'o\x20the'+_0x5a09ec(0x196)+'il\x20sp'+_0x5a09ec(0x556)+_0x5a09ec(0x4f4)+'r\x20adv'+'ance.',_0x1f9fab[_0x5a09ec(0x57a)+_0x5a09ec(0x1bf)],_0x327449=>{var _0x5809a9=_0x5a09ec;_0x1f9fab['noRec'+'oil']=_0x327449,_0x3bf333(),_0x38d562('noRec'+_0x5809a9(0x1bf),_0x327449);},[]),_0x15b749[_0x5a09ec(0x51d)](_0x5057bc,'No\x20Sp'+'read','Zeroe'+_0x5a09ec(0x2ec)+_0x5a09ec(0x571)+_0x5a09ec(0x1fe)+_0x5a09ec(0x597)+'ccura'+'cy\x20on'+_0x5a09ec(0x4ed)+_0x5a09ec(0x42d)+'on\x20ev'+_0x5a09ec(0x282)+'00ms.',_0x1f9fab['noSpr'+_0x5a09ec(0x60c)],_0x42efe6=>{var _0x311e19=_0x5a09ec;_0x1f9fab[_0x311e19(0x188)+'ead']=_0x42efe6,_0x3bf333();},[]),_0x15b749['gowIn'](_0x5057bc,_0x5a09ec(0x436)+_0x5a09ec(0x3b9)+'\x20[EXP'+']',_0x5a09ec(0x4c6)+_0x5a09ec(0x213)+_0x5a09ec(0x4ac)+_0x5a09ec(0x2b4)+_0x5a09ec(0x202)+_0x5a09ec(0x34c)+_0x5a09ec(0x1c6)+'0%.\x20S'+_0x5a09ec(0x5da)+_0x5a09ec(0x29d)+_0x5a09ec(0x252)+_0x5a09ec(0x39b)+_0x5a09ec(0x245)+'s.',_0x1f9fab[_0x5a09ec(0x3c7)+_0x5a09ec(0x21f)],_0x1fb511=>{var _0x52451d=_0x5a09ec;_0x1f9fab['rapid'+_0x52451d(0x21f)]=_0x1fb511,_0x3bf333();},[]),_0x15b749[_0x5a09ec(0x146)](_0x5057bc,'Damag'+_0x5a09ec(0x1bb)+'P]',_0x15b749[_0x5a09ec(0x391)],_0x1f9fab['damag'+'eExp'],_0x52590f=>{var _0x12c54d=_0x5a09ec;_0x1f9fab['damag'+_0x12c54d(0x35e)]=_0x52590f,_0x149982['nqjXS'](_0x3bf333);},[_0x15b749[_0x5a09ec(0x461)](_0x1850d6,'Damag'+'e\x20val'+'ue',null,_0x26e304(_0x1f9fab[_0x5a09ec(0x600)+_0x5a09ec(0x32e)+'e'],0x17a8+-0x1557+-0xb*0x35,-0x17*0x101+0x12a*-0x14+0x3053,-0x23f1+-0x1*-0xaa9+-0x17d*-0x11,_0x534779=>{var _0x4010cb=_0x5a09ec;_0x1f9fab['damag'+_0x4010cb(0x32e)+'e']=_0x534779,_0x3bf333();}))]),_0x15b749[_0x5a09ec(0x247)](_0x5057bc,_0x5a09ec(0x23d)+'ite\x20A'+_0x5a09ec(0x618)+_0x5a09ec(0x3d4),'Refil'+_0x5a09ec(0x374)+_0x5a09ec(0x3d2)+'pon\x27s'+_0x5a09ec(0x2b8)+_0x5a09ec(0x258)+_0x5a09ec(0x326)+_0x5a09ec(0x3e7)+'every'+'\x20200m'+'s.',_0x1f9fab['infAm'+_0x5a09ec(0x63a)],_0x230a56=>{var _0x4df7d0=_0x5a09ec;_0x1f9fab[_0x4df7d0(0x31a)+'moExp']=_0x230a56,_0x3bf333();},[_0x15b749[_0x5a09ec(0x4d8)](_0xe60e41,_0x5a09ec(0x278)+'loads'+_0x5a09ec(0x2be)+_0x5a09ec(0x1cd)+_0x5a09ec(0x572)+_0x5a09ec(0x2ff)+_0x5a09ec(0x66f)+'nt\x20ha'+_0x5a09ec(0x329)+_0x5a09ec(0x61a)+_0x5a09ec(0x1fc)+'.')])];if(_0x15b749[_0x5a09ec(0x533)](_0x3762f2,'move'))return[_0x5057bc('Speed',_0x15b749[_0x5a09ec(0x5ac)],_0x1f9fab[_0x5a09ec(0x634)+'Pct']!==0x856*-0x3+-0x5af*0x3+-0x1*-0x2a73,null,[_0x15b749['aWofu'](_0x1850d6,_0x5a09ec(0x2cf)+'\x20%','100\x20='+_0x5a09ec(0x5e6)+'ult',_0x26e304(_0x1f9fab['speed'+_0x5a09ec(0x5c9)],0x4*-0x6e+0xe5e+-0xc74,0xd33+0x1*-0x16c2+0x43*0x29,-0x235e+-0x18*-0x19d+-0x355,_0xe3f020=>{var _0x246868=_0x5a09ec;_0x1f9fab[_0x246868(0x634)+'Pct']=_0xe3f020,_0x3bf333();}))]),_0x5057bc('Jump\x20'+_0x5a09ec(0x583)+'vity',_0x5a09ec(0x4c6)+_0x5a09ec(0x539)+_0x5a09ec(0x321)+_0x5a09ec(0x45b)+_0x5a09ec(0x1be)+'\x20and\x20'+_0x5a09ec(0x16a)+_0x5a09ec(0x46f)+'ty\x20va'+_0x5a09ec(0x2c6),_0x15b749[_0x5a09ec(0x5e2)](_0x1f9fab[_0x5a09ec(0x596)+'ct'],0x127c+-0x6af*0x4+-0x229*-0x4)||_0x1f9fab['gravi'+'tyPct']!==0xa5e+0xa0c+-0x1406,null,[_0x1850d6(_0x5a09ec(0x2b7)+'%',null,_0x26e304(_0x1f9fab['jumpP'+'ct'],0x14cc+0x3*0x241+-0x579*0x5,0x242f+0x1c*0x157+0x80f*-0x9,-0x201d+0x1b7f+0x4a3*0x1,_0x429339=>{var _0x161f8a=_0x5a09ec;_0x1f9fab[_0x161f8a(0x596)+'ct']=_0x429339,_0x3bf333();})),_0x1850d6(_0x15b749['PJpaT'],_0x5a09ec(0x528)+'\x20=\x20fl'+'oaty',_0x15b749[_0x5a09ec(0x484)](_0x26e304,_0x1f9fab['gravi'+_0x5a09ec(0x526)],0x7f9+0x197c*-0x1+0x1*0x118d,0xd22+-0x548+-0x712,0x289*-0x9+-0x20a*0x11+0x140*0x2e,_0x3a450d=>{_0x1f9fab['gravi'+'tyPct']=_0x3a450d,_0x3bf333();}))]),_0x5057bc(_0x15b749[_0x5a09ec(0x689)],_0x15b749[_0x5a09ec(0x651)],_0x1f9fab[_0x5a09ec(0x66e)],_0xfff0ca=>{_0x1f9fab['bhop']=_0xfff0ca,_0x44401a['IpNBf'](_0x3bf333);},[])];if(_0x3762f2==='visua'+'l')return[_0x15b749[_0x5a09ec(0x484)](_0x5057bc,'Keyst'+'rokes',_0x15b749[_0x5a09ec(0x557)],_0x1f9fab['keyst'+_0x5a09ec(0x3a3)],_0x335c2c=>{var _0x4ae63a=_0x5a09ec;_0x1f9fab[_0x4ae63a(0x694)+'rokes']=_0x335c2c,_0x44401a['ThmnJ'](_0x3bf333);},[_0x1850d6(_0x5a09ec(0x262)+'ion',null,_0x2d1377(_0x1f9fab[_0x5a09ec(0x25c)],[['bl',_0x5a09ec(0x63c)+_0x5a09ec(0x5eb)+'t'],['br',_0x15b749['TrHYf']],['ml',_0x15b749[_0x5a09ec(0x629)]]],_0x43ce0d=>{_0x1f9fab['ksPos']=_0x43ce0d,_0x149982['SJNTU'](_0x3bf333);})),_0x1850d6(_0x5a09ec(0x424),null,_0x26e304(_0x1f9fab['ksSca'+'le'],-0x14e0+0x263b+-0x115b+0.6,0x5fb*0x3+0x13*0x169+-0x21*0x15b+0.6000000000000001,-0x2b*-0x19+0x2cf*-0x1+-0x4*0x59+0.05,_0x5c417b=>{var _0x4e4e39=_0x5a09ec;_0x1f9fab[_0x4e4e39(0x2cc)+'le']=_0x5c417b,_0x3bf333();})),_0x1850d6(_0x5a09ec(0x153)+'eadou'+'t',null,_0x1890eb(_0x1f9fab[_0x5a09ec(0x16e)],_0x20489c=>{var _0x3401e7=_0x5a09ec;if(_0x149982[_0x3401e7(0x4a3)](_0x3401e7(0x579),_0x3401e7(0x579))){var _0x2c19b0=_0x29aca0[_0x467e03];if(_0x2c19b0)try{_0x2c19b0[_0x3401e7(0x41b)+'ed']=!!_0x5705ef;}catch(_0x5e1406){}}else _0x1f9fab['ksCps']=_0x20489c,_0x3bf333();}))]),_0x15b749[_0x5a09ec(0x5df)](_0x5057bc,'Cross'+'hair',_0x15b749[_0x5a09ec(0x47f)],_0x1f9fab[_0x5a09ec(0x15c)+'hair'],_0x5b54c0=>{var _0x539388=_0x5a09ec;if(_0x44401a[_0x539388(0x412)]===_0x539388(0x699))_0x1f9fab['cross'+'hair']=_0x5b54c0,_0x3bf333();else{var _0x2c78c1={'peErz':function(_0x5f11ad,_0xbf8d71){var _0x337ab5=_0x539388;return _0x149982[_0x337ab5(0x324)](_0x5f11ad,_0xbf8d71);}};_0x3d6c92['addEv'+'entLi'+'stene'+'r'](_0x149982[_0x539388(0x144)],_0xd39336=>{var _0x1b711e=_0x539388;try{var _0x5de89e=_0xd39336&&(_0xd39336['messa'+'ge']||_0xd39336[_0x1b711e(0x25b)]&&_0xd39336['error'][_0x1b711e(0x190)+'ge'])||'unkno'+'wn';if(_0xd39336&&_0xd39336['filen'+'ame'])_0x5de89e+=_0x1b711e(0x56b)+_0x2c78c1[_0x1b711e(0x5e9)](_0x416812,_0xd39336['filen'+_0x1b711e(0x163)])['split']('/')[_0x1b711e(0x363)]()+':'+(_0xd39336['linen'+'o']||'?');_0xc714fd[_0x1b711e(0x178)+'rror']=_0x3bb13d(_0x5de89e)['slice'](0x54e+-0xf*0x1d2+-0x58*-0x40,0xa1*-0x2+-0x2a5+0x487);}catch(_0x41faef){}});}},[_0x1850d6(_0x15b749['diiGB'],null,_0x26e304(_0x1f9fab[_0x5a09ec(0x4bd)+'e'],0x156c+-0x2349*-0x1+-0x38b5*0x1+0.5,-0x9f1+0x1153*0x2+-0x18b3*0x1+0.5,0x116c*0x2+0x13*0x1cd+-0x450f+0.1,_0x1e1a48=>{var _0x58f73b=_0x5a09ec;_0x1f9fab[_0x58f73b(0x4bd)+'e']=_0x1e1a48,_0x149982[_0x58f73b(0x546)](_0x3bf333);})),_0x1850d6('Color',null,_0x4e544e(_0x1f9fab[_0x5a09ec(0x644)+'or'],_0x54e40f=>{var _0x40383c=_0x5a09ec;_0x1f9fab[_0x40383c(0x644)+'or']=_0x54e40f,_0x3bf333();}))]),_0x15b749[_0x5a09ec(0x653)](_0x5057bc,_0x15b749['hzyDw'],_0x5a09ec(0x37e)+_0x5a09ec(0x338)+'y.',_0x1f9fab['fps'],null,[_0x1850d6(_0x15b749[_0x5a09ec(0x1ed)],null,_0x1890eb(_0x1f9fab[_0x5a09ec(0x62d)],_0x3e098a=>{_0x1f9fab['fps']=_0x3e098a,_0x3bf333();})),_0xe60e41('No\x20en'+_0x5a09ec(0x55e)+'ounte'+_0x5a09ec(0x2fc)+_0x5a09ec(0x57f)+'ild\x20h'+'as\x20no'+_0x5a09ec(0x1e9)+_0x5a09ec(0x4a8)+_0x5a09ec(0x1b6)+'ers\x20t'+_0x5a09ec(0x176)+'gybac'+_0x5a09ec(0x611))])];if(_0x15b749[_0x5a09ec(0x4ec)](_0x3762f2,_0x5a09ec(0x523)))return[_0x5057bc(_0x15b749['LMrhI'],_0x15b749[_0x5a09ec(0x29a)],_0x1f9fab['adblo'+'ck'],_0x321671=>{_0x1f9fab['adblo'+'ck']=_0x321671,_0x149982['BOzoY'](_0x3bf333);},[_0x15b749[_0x5a09ec(0x1c7)](_0xe60e41,_0x15b749[_0x5a09ec(0x302)])])];return[_0x15b749[_0x5a09ec(0x5df)](_0x5057bc,_0x15b749['Iukqr'],_0x15b749[_0x5a09ec(0x41c)],_0x1f9fab[_0x5a09ec(0x193)+_0x5a09ec(0x519)],_0x58b400=>{_0x1f9fab['safeM'+'ode']=_0x58b400,_0x3bf333(),location['reloa'+'d']();},[_0xe60e41(_0x15b749[_0x5a09ec(0x472)])]),_0x5057bc(_0x5a09ec(0x3c2)+'risk\x20'+'switc'+'hes',_0x15b749[_0x5a09ec(0x633)],_0x1f9fab[_0x5a09ec(0x255)+'od']||_0x1f9fab[_0x5a09ec(0x255)+'odDie']||_0x1f9fab[_0x5a09ec(0x1fa)+_0x5a09ec(0x382)+'il']||_0x1f9fab[_0x5a09ec(0x650)+'aptur'+'e'],_0x415ccd=>{var _0x3c4da1=_0x5a09ec,_0x4c4b3e={'swQMf':_0x44401a['KvOJX']};if(_0x44401a[_0x3c4da1(0x4b6)]('sWQlv',_0x44401a['JjPgm'])){var _0x4266aa=('0|4|5'+_0x3c4da1(0x1b3)+'1')[_0x3c4da1(0x1a5)]('|'),_0x49e811=0x119f+-0x1bbf+0xa20;while(!![]){switch(_0x4266aa[_0x49e811++]){case'0':_0x1f9fab[_0x3c4da1(0x255)+'od']=_0x415ccd;continue;case'1':location[_0x3c4da1(0x527)+'d']();continue;case'2':_0x44401a[_0x3c4da1(0x521)](_0x3bf333);continue;case'3':_0x1f9fab[_0x3c4da1(0x650)+'aptur'+'e']=_0x415ccd;continue;case'4':_0x1f9fab['hookG'+_0x3c4da1(0x371)]=_0x415ccd;continue;case'5':_0x1f9fab[_0x3c4da1(0x1fa)+'oReco'+'il']=_0x415ccd;continue;}break;}}else{var _0x3d2847=(_0x3c4da1(0x228)+'|1|4|'+'2')['split']('|'),_0x14ea4e=-0x1*0xc8e+-0xb06+0x1794;while(!![]){switch(_0x3d2847[_0x14ea4e++]){case'0':var _0x5e7ee7=_0x3d430d['creat'+_0x3c4da1(0x36f)+_0x3c4da1(0x2d7)]('butto'+'n');continue;case'1':_0x5e7ee7[_0x3c4da1(0x335)+_0x3c4da1(0x306)+'t']=_0x287325;continue;case'2':return _0x5e7ee7;case'3':_0x5e7ee7[_0x3c4da1(0x404)]='butto'+'n';continue;case'4':_0x5e7ee7[_0x3c4da1(0x3e0)+'ck']=_0x39f34c=>{_0x39f34c['stopP'+'ropag'+'ation'](),_0x486d21();};continue;case'5':_0x5e7ee7[_0x3c4da1(0x4bf)+_0x3c4da1(0x16d)]=_0x4c4b3e['swQMf'];continue;}break;}}},[_0xe60e41(_0x5a09ec(0x273)+'es\x20on'+_0x5a09ec(0x60e)+_0x5a09ec(0x251)),_0x1850d6('god\x20('+_0x5a09ec(0x514)+'th.In'+'itiat'+_0x5a09ec(0x33d)+_0x5a09ec(0x3a8)+'h)',null,_0x1890eb(_0x1f9fab[_0x5a09ec(0x255)+'od'],_0x58e904=>{var _0x45723c=_0x5a09ec;_0x1f9fab[_0x45723c(0x255)+'od']=_0x58e904,_0x3bf333();})),_0x1850d6(_0x15b749[_0x5a09ec(0x45d)],null,_0x1890eb(_0x1f9fab[_0x5a09ec(0x255)+_0x5a09ec(0x371)],_0x5bba3d=>{var _0x15b42f=_0x5a09ec;_0x1f9fab[_0x15b42f(0x255)+_0x15b42f(0x371)]=_0x5bba3d,_0x44401a[_0x15b42f(0x409)](_0x3bf333);})),_0x15b749[_0x5a09ec(0x4d1)](_0x1850d6,_0x5a09ec(0x57a)+_0x5a09ec(0x65d)+_0x5a09ec(0x638)+_0x5a09ec(0x289)+_0x5a09ec(0x1ec)+_0x5a09ec(0x452),null,_0x15b749['LapFP'](_0x1890eb,_0x1f9fab[_0x5a09ec(0x1fa)+_0x5a09ec(0x382)+'il'],_0x4e1c8b=>{var _0x46eb32=_0x5a09ec;_0x1f9fab['hookN'+_0x46eb32(0x382)+'il']=_0x4e1c8b,_0x44401a[_0x46eb32(0x667)](_0x3bf333);})),_0x1850d6(_0x15b749[_0x5a09ec(0x1f7)],_0x15b749[_0x5a09ec(0x68b)],_0x15b749[_0x5a09ec(0x34b)](_0x1890eb,_0x1f9fab[_0x5a09ec(0x650)+'aptur'+'e'],_0x69f979=>{var _0x3832bd=_0x5a09ec;_0x1f9fab['hookC'+_0x3832bd(0x162)+'e']=_0x69f979,_0x149982[_0x3832bd(0x257)](_0x3bf333);}))]),_0x5057bc(_0x5a09ec(0x2f4)+_0x5a09ec(0x3c6)+'r',_0x15b749[_0x5a09ec(0x18e)],_0x1f9fab[_0x5a09ec(0x50e)+_0x5a09ec(0x3e9)],_0x2d752b=>{var _0x27e36a=_0x5a09ec;_0x1f9fab['actkK'+_0x27e36a(0x3e9)]=_0x2d752b,_0x44401a['IInXp'](_0x3bf333);},[_0xe60e41(_0x15b749['vhGFV'],!![])]),_0x5057bc(_0x5a09ec(0x5c5)+'r',_0x5a09ec(0x3ee)+_0x5a09ec(0x28a)+'e\x20ser'+_0x5a09ec(0x2e3)+'isibl'+_0x5a09ec(0x3f2)+'ces.',!![],null,[_0x1850d6('Wipe\x20'+'my\x20se'+_0x5a09ec(0x676)+'s',null,_0x5a3ce5(_0x15b749['GbDnD'],()=>{var _0x30d820=_0x5a09ec;_0x1f9fab={..._0x3b71f3},_0x3bf333(),location[_0x30d820(0x527)+'d']();}))])];}var _0x2e7232=null;function _0x28111b(_0x17d2db){var _0x3a6f26=_0x2482b5;_0x14a914=_0x17d2db;if(!_0x2e7232){if(_0x15b749['jcHcx']('izaxu',_0x15b749[_0x3a6f26(0x582)])){var _0x2b5fd1=document[_0x3a6f26(0x387)+_0x3a6f26(0x36f)+_0x3a6f26(0x2d7)](_0x15b749['PYqAP']);_0x2b5fd1[_0x3a6f26(0x335)+_0x3a6f26(0x306)+'t']=_0x2d4fed,_0x4faa98[_0x3a6f26(0x356)+_0x3a6f26(0x5c8)+'d'](_0x2b5fd1),_0x2e7232=_0x177896(),_0x4faa98[_0x3a6f26(0x356)+'dChil'+'d'](_0x2e7232),_0x15b749['lcuRc'](requestAnimationFrame,()=>_0x2e7232[_0x3a6f26(0x4bf)+'List'][_0x3a6f26(0x43e)]('shown'));}else return _0x493227['warn'](_0x44401a[_0x3a6f26(0x60a)],_0x57d338,_0x437ba0&&_0xf4268a['messa'+'ge']),null;}_0x2e7232[_0x3a6f26(0x4bf)+'List'][_0x3a6f26(0x656)+'e']('shown',_0x17d2db);}function _0x4d690a(){var _0x5db191=_0x2482b5;_0x15b749[_0x5db191(0x1c7)](_0x28111b,!_0x14a914);}function _0x177896(){var _0x54224c=_0x2482b5,_0x1f9cd6=document[_0x54224c(0x387)+'eElem'+_0x54224c(0x2d7)](_0x54224c(0x35f));_0x1f9cd6['class'+_0x54224c(0x16d)]=_0x54224c(0x55f)+_0x54224c(0x46d);var _0x2bf641=document[_0x54224c(0x387)+_0x54224c(0x36f)+_0x54224c(0x2d7)]('nav');_0x2bf641[_0x54224c(0x4bf)+'Name']='mn-si'+'de';var _0x5aaf70=document['creat'+'eElem'+_0x54224c(0x2d7)](_0x15b749['WDIdR']);_0x5aaf70[_0x54224c(0x4bf)+'Name']='mn-lo'+'go',_0x5aaf70[_0x54224c(0x457)+_0x54224c(0x446)]='<svg\x20'+_0x54224c(0x450)+_0x54224c(0x49a)+_0x54224c(0x65a)+_0x54224c(0x403)+_0x54224c(0x4bf)+'=\x22mn-'+'logo-'+_0x54224c(0x2e8)+'<path'+'\x20d=\x22M'+'12\x2021'+_0x54224c(0x669)+_0x54224c(0x621)+_0x54224c(0x2de)+_0x54224c(0x61b)+_0x54224c(0x1dc)+_0x54224c(0x352)+'8-4.5'+'\x204-4.'+_0x54224c(0x2d8)+_0x54224c(0x2d0)+_0x54224c(0x37a)+_0x54224c(0x33c)+'5-4\x207'+_0x54224c(0x1df)+'fill='+_0x54224c(0x530)+'\x22\x20str'+'oke=\x22'+_0x54224c(0x232)+_0x54224c(0x2f9)+_0x54224c(0x1a4)+'-widt'+_0x54224c(0x28e)+_0x54224c(0x390)+_0x54224c(0x2e0)+_0x54224c(0x1d9)+_0x54224c(0x59b)+'nd\x22\x20s'+_0x54224c(0x1a4)+_0x54224c(0x4b8)+'join='+_0x54224c(0x3ff)+'d\x22/><'+_0x54224c(0x4cb)+_0x54224c(0x32d)+'\x2212\x22\x20'+_0x54224c(0x4d4)+'0\x22\x20r='+_0x54224c(0x3c3)+'\x20fill'+_0x54224c(0x268)+'6b9d\x22'+_0x54224c(0x43f)+_0x54224c(0x635),_0x2bf641['appen'+'dChil'+'d'](_0x5aaf70);var _0x3567f4=document[_0x54224c(0x387)+_0x54224c(0x36f)+_0x54224c(0x2d7)](_0x15b749[_0x54224c(0x2f7)]);_0x3567f4['class'+_0x54224c(0x16d)]='mn-ma'+'in';var _0x123e82=document[_0x54224c(0x387)+'eElem'+_0x54224c(0x2d7)](_0x54224c(0x15b)+'r');_0x123e82['class'+_0x54224c(0x16d)]=_0x15b749[_0x54224c(0x2f5)];var _0x123545=document[_0x54224c(0x387)+'eElem'+'ent']('div');_0x123545['class'+_0x54224c(0x16d)]='mn-ti'+'tles';var _0x3e63f0=document['creat'+_0x54224c(0x36f)+_0x54224c(0x2d7)]('h2');_0x3e63f0[_0x54224c(0x4bf)+'Name']=_0x15b749['hOMIE'],_0x3e63f0[_0x54224c(0x335)+'onten'+'t']=_0x15b749[_0x54224c(0x3a7)];var _0x7803c9=document['creat'+_0x54224c(0x36f)+_0x54224c(0x2d7)](_0x15b749[_0x54224c(0x19a)]);_0x7803c9['class'+'Name']='mn-su'+'b',_0x7803c9[_0x54224c(0x335)+'onten'+'t']='kours'+_0x54224c(0x4e3)+_0x54224c(0x4a7)+_0x54224c(0x5aa),_0x123545['appen'+'d'](_0x3e63f0,_0x7803c9);var _0x1b09c9=document[_0x54224c(0x387)+'eElem'+_0x54224c(0x2d7)](_0x54224c(0x22b)+'n');_0x1b09c9['type']=_0x15b749[_0x54224c(0x453)],_0x1b09c9['class'+_0x54224c(0x16d)]=_0x54224c(0x2f0)+_0x54224c(0x3df),_0x1b09c9[_0x54224c(0x574)]=_0x54224c(0x623),_0x1b09c9['inner'+_0x54224c(0x446)]='<svg\x20'+'viewB'+'ox=\x220'+_0x54224c(0x65a)+'\x2024\x22>'+_0x54224c(0x66d)+_0x54224c(0x3b0)+_0x54224c(0x3eb)+'2\x2012M'+_0x54224c(0x3a1)+'6\x2018\x22'+_0x54224c(0x43f)+'vg>',_0x1b09c9[_0x54224c(0x3e0)+'ck']=()=>_0x28111b(![]),_0x123e82['appen'+'d'](_0x123545,_0x1b09c9);var _0x499f79=document[_0x54224c(0x387)+_0x54224c(0x36f)+'ent'](_0x15b749[_0x54224c(0x2f7)]);_0x499f79[_0x54224c(0x4bf)+_0x54224c(0x16d)]='mn-co'+'ls',_0x3567f4[_0x54224c(0x356)+'d'](_0x123e82,_0x499f79),_0x1f9cd6[_0x54224c(0x356)+'d'](_0x2bf641,_0x3567f4);var _0x2badb9=new Map();for(var _0x17099f of _0x3ea4d3){var _0x5b4533=_0x15b749['jTONy'][_0x54224c(0x1a5)]('|'),_0xf5d98f=-0x115b*0x1+0x70*0x5+0xf2b;while(!![]){switch(_0x5b4533[_0xf5d98f++]){case'0':_0x1a7294[_0x54224c(0x457)+'HTML']=_0x15b749['AnBEK'](_0x15b749[_0x54224c(0x5b1)],_0x17099f[_0x54224c(0x2c4)])+('</sma'+_0x54224c(0x487));continue;case'1':_0x1a7294['title']=_0x17099f[_0x54224c(0x2c4)];continue;case'2':_0x2bf641['appen'+'dChil'+'d'](_0x1a7294);continue;case'3':_0x1a7294[_0x54224c(0x4bf)+_0x54224c(0x16d)]=_0x54224c(0x1c2)+'b';continue;case'4':_0x1a7294['type']='butto'+'n';continue;case'5':_0x1a7294[_0x54224c(0x3e0)+'ck']=(_0x241a0f=>()=>_0x358dcb(_0x241a0f))(_0x17099f['id']);continue;case'6':var _0x1a7294=document[_0x54224c(0x387)+_0x54224c(0x36f)+_0x54224c(0x2d7)](_0x15b749[_0x54224c(0x453)]);continue;case'7':_0x2badb9[_0x54224c(0x27c)](_0x17099f['id'],_0x1a7294);continue;}break;}}function _0x358dcb(_0x134517){var _0x1348ba=_0x54224c,_0xf7ab1d=('5|3|0'+'|4|1|'+'2')[_0x1348ba(0x1a5)]('|'),_0x3ec207=0x970+-0x29*-0x9b+0x2243*-0x1;while(!![]){switch(_0xf7ab1d[_0x3ec207++]){case'0':var _0x3e7da5=_0x3ea4d3['find'](_0x30f17b=>_0x30f17b['id']===_0x134517)||_0x3ea4d3[0x3c*0x59+0x16e8+-0x2*0x15e2];continue;case'1':for(var [_0x3c01bb,_0x1dac52]of _0x2badb9)_0x1dac52[_0x1348ba(0x4bf)+'List']['toggl'+'e'](_0x44401a[_0x1348ba(0x569)],_0x3c01bb===_0x134517);continue;case'2':_0x499f79[_0x1348ba(0x540)+_0x1348ba(0x1b8)+_0x1348ba(0x444)](..._0x44401a['XtPEI'](_0x50a11d,_0x134517));continue;case'3':_0x548285();continue;case'4':_0x3e63f0[_0x1348ba(0x335)+'onten'+'t']=_0x44401a[_0x1348ba(0x1ae)]+_0x3e7da5['label'];continue;case'5':_0x3ad12c[_0x1348ba(0x3bc)]=_0x134517;continue;}break;}}return _0x15b749['mTIbI'](_0x358dcb,_0x3ad12c[_0x54224c(0x3bc)]||_0x15b749[_0x54224c(0x5ab)]),setInterval(()=>{var _0x1cc67b=_0x54224c;if(!_0x14a914)return;var _0x472112=_0x499f79[_0x1cc67b(0x686)+_0x1cc67b(0x287)];for(var _0x5d5c1a=-0x833*-0x4+0x1*-0x2133+0x67;_0x44401a[_0x1cc67b(0x586)](_0x5d5c1a,_0x472112[_0x1cc67b(0x591)+'h']);_0x5d5c1a++){var _0x3ef645=_0x472112[_0x5d5c1a]['query'+'Selec'+_0x1cc67b(0x576)](_0x1cc67b(0x3fc)+'desc');_0x3ef645&&(_0x3ef645[_0x1cc67b(0x335)+'onten'+'t']['index'+'Of'](_0x1cc67b(0x56e))===-0x2b*0xd+-0x3*0x839+-0x1*-0x1ada||_0x44401a[_0x1cc67b(0x505)](_0x3ef645[_0x1cc67b(0x335)+'onten'+'t'][_0x1cc67b(0x482)+'Of']('SAFE'),-0x8c8*-0x3+0x5ee+-0x22*0xf3))&&(_0x44401a[_0x1cc67b(0x295)](_0x44401a[_0x1cc67b(0x55d)],_0x1cc67b(0x5cd))?_0x3ef645[_0x1cc67b(0x335)+'onten'+'t']=_0x3c0c8b[_0x1cc67b(0x193)+_0x1cc67b(0x519)]?_0x1cc67b(0x238)+_0x1cc67b(0x229)+_0x1cc67b(0x695)+_0x1cc67b(0x1a3)+_0x1cc67b(0x5c2)+_0x1cc67b(0x366)+'ooks\x20'+_0x1cc67b(0x558)+_0x1cc67b(0x5f1)+_0x1cc67b(0x5a8)+')':_0x3c0c8b[_0x1cc67b(0x3f6)]?_0x44401a[_0x1cc67b(0x508)](_0x44401a[_0x1cc67b(0x42f)](_0x44401a[_0x1cc67b(0x662)]('UWMK\x20'+_0x1cc67b(0x212)+'\x20',_0x3c0c8b['hooks'+'Total']?_0x3c0c8b[_0x1cc67b(0x158)+'Ok']+'/'+_0x3c0c8b['hooks'+'Total']+(_0x1cc67b(0x246)+'s'):_0x1cc67b(0x613)+_0x1cc67b(0x581)+_0x1cc67b(0x3ba)+_0x1cc67b(0x192)+_0x1cc67b(0x361)),_0x44401a['ybyrM'])+(_0x3c0c8b['gameL'+_0x1cc67b(0x187)]?_0x1cc67b(0x518)+'d':'loadi'+'ng')+_0x44401a['Veaud']+(_0x3c0c8b['shoot'+'ers']?_0x44401a[_0x1cc67b(0x336)]:_0x1cc67b(0x3c5))+_0x44401a[_0x1cc67b(0x1b9)]+(_0x3c0c8b[_0x1cc67b(0x416)+_0x1cc67b(0x35b)]?_0x44401a['yLnry']:_0x1cc67b(0x3c5)),_0x3c0c8b[_0x1cc67b(0x178)+'rror']?_0x1cc67b(0x643)+'R:\x20'+_0x3c0c8b[_0x1cc67b(0x178)+_0x1cc67b(0x274)]:''):'UWMK\x20'+'MISSI'+_0x1cc67b(0x417)+_0x1cc67b(0x28c)+_0x1cc67b(0x543)+'ly\x20(r'+_0x1cc67b(0x3d0)+'all\x20t'+_0x1cc67b(0x2a4)+'erscr'+_0x1cc67b(0x199):(_0x190251[_0x1cc67b(0x193)+_0x1cc67b(0x519)]=_0x237e81,_0x18c590(),_0x589e0b[_0x1cc67b(0x527)+'d']()));}},-0x23b*0x1+0x1*0x205c+-0x1*0x1a39),_0x1f9cd6;}var _0x2d4fed='\x0a\x20\x20\x20\x20'+':host'+'\x20{\x20al'+_0x2482b5(0x68f)+'itial'+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x2482b5(0x5c7)+_0x2482b5(0x5fd)+_0x2482b5(0x400)+'order'+_0x2482b5(0x5b6)+_0x2482b5(0x2f6)+_0x2482b5(0x510)+_0x2482b5(0x328)+'t-fam'+'ily:\x20'+_0x2482b5(0x497)+'r\x22,\x20\x22'+_0x2482b5(0x164)+_0x2482b5(0x167)+_0x2482b5(0x204)+_0x2482b5(0x254)+',\x20san'+_0x2482b5(0x263)+_0x2482b5(0x589)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x2482b5(0x201)+'{\x20pos'+'ition'+_0x2482b5(0x1ab)+_0x2482b5(0x580)+_0x2482b5(0x4c4)+_0x2482b5(0x2b9)+_0x2482b5(0x50d)+_0x2482b5(0x658)+'m:\x2024'+'px;\x20w'+'idth:'+'\x20min('+_0x2482b5(0x4f5)+',\x20cal'+'c(100'+_0x2482b5(0x205)+'48px)'+');\x20ma'+'x-hei'+_0x2482b5(0x2ed)+_0x2482b5(0x23e)+_0x2482b5(0x150)+_0x2482b5(0x578)+_0x2482b5(0x58f)+'h\x20-\x204'+_0x2482b5(0x4d6)+_0x2482b5(0x1f6)+'\x20\x20\x20di'+_0x2482b5(0x1c9)+_0x2482b5(0x310)+'x;\x20ga'+'p:\x2010'+'px;\x20p'+'addin'+'g:\x2010'+_0x2482b5(0x62f)+'order'+'-radi'+'us:\x202'+_0x2482b5(0x392)+_0x2482b5(0x40b)+'er-ev'+_0x2482b5(0x408)+_0x2482b5(0x68c)+';\x0a\x20\x20\x20'+'\x20\x20\x20ba'+_0x2482b5(0x5b0)+_0x2482b5(0x48c)+_0x2482b5(0x5b8)+_0x2482b5(0x325)+',21,.'+_0x2482b5(0x54d)+_0x2482b5(0x171)+_0x2482b5(0x413)+_0x2482b5(0x57b)+_0x2482b5(0x3b3)+_0x2482b5(0x4da)+_0x2482b5(0x48a)+_0x2482b5(0x67c)+'e(150'+'%);\x20-'+_0x2482b5(0x22a)+'t-bac'+_0x2482b5(0x220)+_0x2482b5(0x51b)+_0x2482b5(0x5f2)+_0x2482b5(0x42a)+'2px)\x20'+_0x2482b5(0x57d)+_0x2482b5(0x4c5)+_0x2482b5(0x678)+'\x0a\x20\x20\x20\x20'+_0x2482b5(0x3a0)+_0x2482b5(0x318)+_0x2482b5(0x169)+_0x2482b5(0x308)+_0x2482b5(0x551)+_0x2482b5(0x4b9)+_0x2482b5(0x1ce)+_0x2482b5(0x4ea)+_0x2482b5(0x231)+_0x2482b5(0x3bd)+_0x2482b5(0x594)+_0x2482b5(0x4df)+_0x2482b5(0x1e2)+'(255,'+'255,2'+'55,.0'+_0x2482b5(0x3b5)+'\x2030px'+_0x2482b5(0x323)+'\x20rgba'+'(0,0,'+_0x2482b5(0x426)+');\x0a\x20\x20'+_0x2482b5(0x3ac)+'pacit'+_0x2482b5(0x606)+'\x20tran'+'sform'+_0x2482b5(0x4db)+'nslat'+_0x2482b5(0x4b3)+'px);\x20'+'point'+'er-ev'+'ents:'+'\x20none'+_0x2482b5(0x166)+_0x2482b5(0x57e)+_0x2482b5(0x181)+'pacit'+_0x2482b5(0x53a)+_0x2482b5(0x3bb)+_0x2482b5(0x172)+_0x2482b5(0x15a)+'rm\x20.4'+'5s\x20cu'+_0x2482b5(0x3b8)+_0x2482b5(0x359)+_0x2482b5(0x5d8)+_0x2482b5(0x3b7)+_0x2482b5(0x531)+'\x20\x20\x20\x20\x20'+_0x2482b5(0x58b)+_0x2482b5(0x3aa)+'6eef2'+_0x2482b5(0x328)+'t-siz'+'e:\x2013'+'px;\x20}'+_0x2482b5(0x28b)+'.mn-p'+'anel.'+_0x2482b5(0x312)+_0x2482b5(0x296)+'acity'+_0x2482b5(0x5bf)+'trans'+'form:'+_0x2482b5(0x4fd)+_0x2482b5(0x17d)+'nter-'+_0x2482b5(0x66a)+_0x2482b5(0x1e3)+_0x2482b5(0x4c2)+_0x2482b5(0x28b)+_0x2482b5(0x235)+'ide\x20{'+'\x20disp'+_0x2482b5(0x4c9)+'flex;'+'\x20flex'+'-dire'+_0x2482b5(0x44f)+_0x2482b5(0x14c)+'umn;\x20'+_0x2482b5(0x5e8)+'-item'+'s:\x20ce'+'nter;'+_0x2482b5(0x1ef)+'\x204px;'+'\x20widt'+'h:\x2062'+'px;\x20f'+_0x2482b5(0x4f2)+_0x2482b5(0x419)+_0x2482b5(0x5fa)+_0x2482b5(0x32f)+'12px\x20'+(_0x2482b5(0x693)+_0x2482b5(0x1bd)+_0x2482b5(0x180)+'s:\x2016'+_0x2482b5(0x2d6)+'\x20\x20\x20\x20\x20'+_0x2482b5(0x249)+'round'+_0x2482b5(0x420)+'a(255'+_0x2482b5(0x275)+'255,.'+_0x2482b5(0x342)+'\x20box-'+_0x2482b5(0x438)+'w:\x20in'+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x2482b5(0x4b9)+'55,25'+_0x2482b5(0x4ea)+',.05)'+';\x20}\x0a\x20'+_0x2482b5(0x3c4)+'n-log'+_0x2482b5(0x401)+_0x2482b5(0x668)+'y:\x20gr'+'id;\x20p'+'lace-'+'items'+_0x2482b5(0x414)+'ter;\x20'+'width'+':\x2032p'+_0x2482b5(0x51e)+'ight:'+_0x2482b5(0x222)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o-svg'+_0x2482b5(0x2a1)+_0x2482b5(0x381)+_0x2482b5(0x59f)+_0x2482b5(0x60b)+_0x2482b5(0x2b9)+'5px;\x20'+_0x2482b5(0x697)+_0x2482b5(0x189)+_0x2482b5(0x2c7)+_0x2482b5(0x565)+_0x2482b5(0x57b)+_0x2482b5(0x34e)+'p-sha'+_0x2482b5(0x577)+'\x200\x204p'+'x\x20rgb'+_0x2482b5(0x18f)+',107,'+'157,.'+_0x2482b5(0x687)+'}\x0a\x20\x20\x20'+_0x2482b5(0x3bf)+_0x2482b5(0x663)+_0x2482b5(0x2d9)+'lay:\x20'+'flex;'+'\x20alig'+'n-ite'+_0x2482b5(0x63b)+_0x2482b5(0x607)+';\x20jus'+_0x2482b5(0x1dd)+_0x2482b5(0x384)+'nt:\x20c'+_0x2482b5(0x607)+_0x2482b5(0x564)+_0x2482b5(0x646)+'2px;\x20'+'heigh'+_0x2482b5(0x353)+_0x2482b5(0x62f)+_0x2482b5(0x2bb)+':\x200;\x20'+_0x2482b5(0x23f)+'r-rad'+_0x2482b5(0x35c)+'10px;'+_0x2482b5(0x28b)+'\x20\x20bac'+'kgrou'+_0x2482b5(0x49e)+_0x2482b5(0x300)+_0x2482b5(0x5bb)+_0x2482b5(0x4a4)+'or:\x20r'+'gba(2'+'46,23'+_0x2482b5(0x393)+',.4);'+'\x20curs'+'or:\x20p'+_0x2482b5(0x460)+'r;\x20fo'+_0x2482b5(0x1d1)+_0x2482b5(0x46a)+_0x2482b5(0x2c8)+_0x2482b5(0x605)+_0x2482b5(0x630)+_0x2482b5(0x675)+_0x2482b5(0x511)+'\x20\x20\x20\x20.'+_0x2482b5(0x1c2)+_0x2482b5(0x5b4)+'er\x20{\x20'+'color'+_0x2482b5(0x420)+'a(246'+_0x2482b5(0x20c)+_0x2482b5(0x200)+_0x2482b5(0x5e4)+_0x2482b5(0x28b)+'.mn-t'+_0x2482b5(0x41f)+_0x2482b5(0x43d)+'{\x20col'+_0x2482b5(0x620)+'ff6b9'+_0x2482b5(0x1da)+'ckgro'+'und:\x20'+_0x2482b5(0x5b8)+'255,1'+_0x2482b5(0x458)+_0x2482b5(0x22f)+_0x2482b5(0x364)+'\x20\x20\x20.m'+_0x2482b5(0x63f)+_0x2482b5(0x561)+'lex:\x20'+_0x2482b5(0x1d6)+_0x2482b5(0x4af)+_0x2482b5(0x3ea)+_0x2482b5(0x33b)+'play:'+_0x2482b5(0x219)+_0x2482b5(0x3ae)+'x-dir'+'ectio'+_0x2482b5(0x1d0)+_0x2482b5(0x4de)+_0x2482b5(0x2a0)+'\x20\x20.mn'+_0x2482b5(0x49d)+_0x2482b5(0x3f1)+_0x2482b5(0x439)+_0x2482b5(0x219)+_0x2482b5(0x555)+_0x2482b5(0x433)+'ems:\x20'+_0x2482b5(0x603)+_0x2482b5(0x22e)+'p:\x2012'+'px;\x20p'+'addin'+_0x2482b5(0x284)+'x\x206px'+'\x2012px'+_0x2482b5(0x29b)+_0x2482b5(0x2ee)+_0x2482b5(0x14a)+'none;'+'\x20}\x0a\x20\x20'+_0x2482b5(0x509)+_0x2482b5(0x25e)+_0x2482b5(0x1c0)+_0x2482b5(0x32b)+'\x201;\x20m'+'in-wi'+'dth:\x20'+_0x2482b5(0x511)+_0x2482b5(0x4be)+'mn-h\x20'+_0x2482b5(0x601)+'t-siz'+'e:\x2017'+_0x2482b5(0x30b)+_0x2482b5(0x281)+'eight'+':\x20650'+_0x2482b5(0x364)+'\x20\x20\x20.m'+_0x2482b5(0x529)+'\x20{\x20fo'+_0x2482b5(0x1d1)+'ze:\x201'+_0x2482b5(0x42b)+'opaci')+(_0x2482b5(0x151)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x2482b5(0x5a0)+_0x2482b5(0x2d9)+_0x2482b5(0x4c9)+'grid;'+'\x20plac'+_0x2482b5(0x2b3)+'ms:\x20c'+_0x2482b5(0x607)+';\x20wid'+_0x2482b5(0x1b5)+_0x2482b5(0x432)+_0x2482b5(0x2dd)+'t:\x2028'+_0x2482b5(0x62f)+'order'+_0x2482b5(0x2f1)+_0x2482b5(0x23f)+_0x2482b5(0x4b1)+_0x2482b5(0x35c)+_0x2482b5(0x432)+_0x2482b5(0x249)+'round'+':\x20tra'+'nspar'+'ent;\x20'+_0x2482b5(0x2ab)+_0x2482b5(0x237)+'erit;'+'\x20opac'+'ity:\x20'+'.45;\x20'+'curso'+_0x2482b5(0x4d2)+_0x2482b5(0x5e0)+';\x20}\x0a\x20'+_0x2482b5(0x3c4)+_0x2482b5(0x1c5)+_0x2482b5(0x661)+_0x2482b5(0x3a9)+_0x2482b5(0x50f)+_0x2482b5(0x55b)+_0x2482b5(0x464)+'ckgro'+'und:\x20'+'rgba('+_0x2482b5(0x24b)+_0x2482b5(0x1ce)+_0x2482b5(0x28f)+_0x2482b5(0x43b)+_0x2482b5(0x4be)+_0x2482b5(0x2f0)+'ose\x20s'+_0x2482b5(0x4e4)+_0x2482b5(0x59d)+':\x2014p'+_0x2482b5(0x51e)+_0x2482b5(0x631)+_0x2482b5(0x454)+_0x2482b5(0x4f1)+_0x2482b5(0x41a)+'ne;\x20s'+'troke'+_0x2482b5(0x5d2)+_0x2482b5(0x2bc)+'olor;'+'\x20stro'+_0x2482b5(0x62b)+_0x2482b5(0x381)+'2;\x20st'+_0x2482b5(0x41e)+'linec'+_0x2482b5(0x47b)+_0x2482b5(0x688)+_0x2482b5(0x2a0)+_0x2482b5(0x509)+'-cols'+'\x20{\x20fl'+'ex:\x201'+';\x20min'+_0x2482b5(0x5dc)+'ht:\x200'+_0x2482b5(0x15e)+_0x2482b5(0x38e)+'-y:\x20a'+'uto;\x20'+_0x2482b5(0x559)+_0x2482b5(0x280)+'rid;\x20'+_0x2482b5(0x498)+_0x2482b5(0x30f)+_0x2482b5(0x33e)+_0x2482b5(0x3b2)+_0x2482b5(0x548)+'peat('+_0x2482b5(0x225)+_0x2482b5(0x182)+_0x2482b5(0x455)+_0x2482b5(0x39a)+'0px,\x20'+'1fr))'+_0x2482b5(0x555)+_0x2482b5(0x433)+'ems:\x20'+_0x2482b5(0x2d5)+_0x2482b5(0x555)+'gn-co'+'ntent'+':\x20sta'+_0x2482b5(0x45c)+_0x2482b5(0x56c)+'0px;\x20'+_0x2482b5(0x1e0)+'ng:\x200'+'\x204px\x20'+_0x2482b5(0x26e)+_0x2482b5(0x364)+_0x2482b5(0x3c4)+_0x2482b5(0x470)+_0x2482b5(0x5f6)+_0x2482b5(0x337)+'-scro'+_0x2482b5(0x532)+'\x20{\x20wi'+_0x2482b5(0x381)+_0x2482b5(0x432)+_0x2482b5(0x4e0)+_0x2482b5(0x3bf)+'cols:'+':-web'+_0x2482b5(0x38f)+'croll'+_0x2482b5(0x2c9)+_0x2482b5(0x425)+_0x2482b5(0x239)+'kgrou'+_0x2482b5(0x53d)+_0x2482b5(0x4b9)+_0x2482b5(0x1ce)+_0x2482b5(0x4ea)+',.08)'+_0x2482b5(0x35d)+_0x2482b5(0x2a2)+_0x2482b5(0x317)+':\x204px'+_0x2482b5(0x364)+'\x20\x20\x20.s'+_0x2482b5(0x18d)+_0x2482b5(0x4f9)+'order'+_0x2482b5(0x592)+'us:\x201'+'2px;\x20'+_0x2482b5(0x249)+'round'+_0x2482b5(0x420)+_0x2482b5(0x18f)+',255,'+'255,.'+'025);'+'\x20box-'+_0x2482b5(0x438)+_0x2482b5(0x30d)+'set\x200'+_0x2482b5(0x308)+_0x2482b5(0x551)+'gba(2'+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2482b5(0x18d)+_0x2482b5(0x2b2)+'{\x20bac'+_0x2482b5(0x210)+'nd:\x20r'+_0x2482b5(0x4b9)+_0x2482b5(0x1ce)+'5,255'+_0x2482b5(0x599)+';\x20box'+_0x2482b5(0x318)+'ow:\x20i'+'nset\x20'+'0\x200\x200'+'\x201px\x20'+_0x2482b5(0x5b8)+_0x2482b5(0x2bd)+_0x2482b5(0x458)+'7,.28'+');\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ca'+_0x2482b5(0x1ff)+_0x2482b5(0x20f)+_0x2482b5(0x559))+('ay:\x20f'+_0x2482b5(0x1fd)+_0x2482b5(0x5e8)+_0x2482b5(0x1ac)+'s:\x20ce'+_0x2482b5(0x4fe)+'\x20gap:'+_0x2482b5(0x698)+_0x2482b5(0x5fa)+_0x2482b5(0x32f)+'11px\x20'+_0x2482b5(0x1e7)+'\x20}\x0a\x20\x20'+_0x2482b5(0x2ef)+'-card'+'-titl'+'e\x20{\x20f'+_0x2482b5(0x4f2)+'1;\x20mi'+'n-wid'+'th:\x200'+_0x2482b5(0x364)+'\x20\x20\x20.s'+_0x2482b5(0x18d)+'d-tit'+'le\x20st'+_0x2482b5(0x217)+_0x2482b5(0x601)+_0x2482b5(0x5bc)+_0x2482b5(0x168)+'px;\x20f'+'ont-w'+'eight'+_0x2482b5(0x58d)+_0x2482b5(0x4a4)+'or:\x20r'+'gba(2'+_0x2482b5(0x33a)+'8,242'+',.45)'+_0x2482b5(0x364)+'\x20\x20\x20.s'+_0x2482b5(0x18d)+'d.on\x20'+_0x2482b5(0x24d)+'ard-t'+'itle\x20'+'stron'+_0x2482b5(0x51c)+'olor:'+_0x2482b5(0x585)+_0x2482b5(0x615)+_0x2482b5(0x4e0)+_0x2482b5(0x648)+'mbody'+_0x2482b5(0x175)+_0x2482b5(0x1c3)+_0x2482b5(0x435)+_0x2482b5(0x64e)+_0x2482b5(0x2c8)+_0x2482b5(0x4e0)+_0x2482b5(0x648)+'mdesc'+'\x20{\x20fo'+_0x2482b5(0x1d1)+_0x2482b5(0x46a)+'1px;\x20'+_0x2482b5(0x4f3)+'ty:\x20.'+'4;\x20ma'+_0x2482b5(0x165)+_0x2482b5(0x658)+_0x2482b5(0x5fe)+_0x2482b5(0x60d)+_0x2482b5(0x4be)+'sk-ct'+_0x2482b5(0x3e5)+_0x2482b5(0x668)+_0x2482b5(0x608)+_0x2482b5(0x642)+_0x2482b5(0x5ee)+_0x2482b5(0x4a0)+_0x2482b5(0x414)+_0x2482b5(0x3f5)+'gap:\x20'+_0x2482b5(0x432)+_0x2482b5(0x1e0)+'ng:\x204'+'px\x200;'+'\x20font'+_0x2482b5(0x14f)+_0x2482b5(0x5be)+'5px;\x20'+_0x2482b5(0x4e0)+_0x2482b5(0x648)+_0x2482b5(0x2c4)+'\x20{\x20fl'+'ex:\x201'+';\x20col'+_0x2482b5(0x4a6)+'gba(2'+_0x2482b5(0x33a)+'8,242'+_0x2482b5(0x2e5)+';\x20}\x0a\x20'+_0x2482b5(0x3b4)+_0x2482b5(0x4ab)+'t\x20{\x20d'+_0x2482b5(0x668)+_0x2482b5(0x5cc)+_0x2482b5(0x305)+_0x2482b5(0x605)+_0x2482b5(0x256)+'\x2010px'+_0x2482b5(0x233)+_0x2482b5(0x283)+_0x2482b5(0x30c)+'}\x0a\x20\x20\x20'+_0x2482b5(0x648)+_0x2482b5(0x5e5)+'h\x20{\x20p'+_0x2482b5(0x52e)+'on:\x20r'+_0x2482b5(0x4b2)+'ve;\x20w'+_0x2482b5(0x5a9)+'\x2026px'+_0x2482b5(0x486)+_0x2482b5(0x2ed)+'14px;'+'\x20bord'+_0x2482b5(0x27a)+';\x20bor'+_0x2482b5(0x2a2)+_0x2482b5(0x317)+':\x2099p'+_0x2482b5(0x327)+'ckgro'+_0x2482b5(0x48c)+_0x2482b5(0x5b8)+_0x2482b5(0x24b)+'55,25'+'5,.07'+');\x20cu'+_0x2482b5(0x39c)+'\x20poin'+'ter;\x20'+'flex:'+_0x2482b5(0x4fd)+_0x2482b5(0x364)+_0x2482b5(0x3b4)+_0x2482b5(0x386)+_0x2482b5(0x666)+'after'+_0x2482b5(0x156)+_0x2482b5(0x1d8)+_0x2482b5(0x2ac)+'\x20posi'+'tion:'+'\x20abso'+'lute;'+_0x2482b5(0x370)+_0x2482b5(0x34f)+_0x2482b5(0x52f)+_0x2482b5(0x203)+';\x20wid'+_0x2482b5(0x307)+_0x2482b5(0x5f3)+_0x2482b5(0x5b2)+_0x2482b5(0x5d6)+';\x20bor'+_0x2482b5(0x2a2)+_0x2482b5(0x317)+':\x2050%'+_0x2482b5(0x354)+'kgrou'+'nd:\x20r'+'gba(2'+_0x2482b5(0x1ce)+_0x2482b5(0x4ea)+_0x2482b5(0x367)+_0x2482b5(0x166)+'nsiti'+'on:\x20l'+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x2482b5(0x456)+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x2482b5(0x65f)+_0x2482b5(0x5f4)+_0x2482b5(0x652)+'\x22true'+_0x2482b5(0x664)+_0x2482b5(0x249)+'round'+_0x2482b5(0x420))+(_0x2482b5(0x18f)+_0x2482b5(0x671)+_0x2482b5(0x55a)+_0x2482b5(0x3f9)+_0x2482b5(0x4e0)+_0x2482b5(0x648)+_0x2482b5(0x5e5)+_0x2482b5(0x65f)+_0x2482b5(0x5f4)+'cked='+'\x22true'+'\x22]::a'+'fter\x20'+_0x2482b5(0x211)+'t:\x2015'+'px;\x20b'+_0x2482b5(0x348)+_0x2482b5(0x2fa)+_0x2482b5(0x5e3)+'b9d;\x20'+_0x2482b5(0x4e0)+_0x2482b5(0x648)+_0x2482b5(0x174)+_0x2482b5(0x21c)+_0x2482b5(0x5b0)+'und:\x20'+'rgba('+'255,2'+_0x2482b5(0x1ce)+_0x2482b5(0x32a)+_0x2482b5(0x147)+_0x2482b5(0x2bb)+':\x200;\x20'+_0x2482b5(0x23f)+_0x2482b5(0x4b1)+_0x2482b5(0x35c)+_0x2482b5(0x48b)+_0x2482b5(0x2ab)+':\x20#f6'+_0x2482b5(0x18b)+_0x2482b5(0x5fa)+_0x2482b5(0x32f)+'6px\x209'+'px;\x20f'+_0x2482b5(0x637)+'ize:\x20'+'11.5p'+_0x2482b5(0x301)+_0x2482b5(0x5bd)+':\x20non'+_0x2482b5(0x315)+_0x2482b5(0x3b1)+'dow:\x20'+_0x2482b5(0x56d)+_0x2482b5(0x308)+_0x2482b5(0x27f)+_0x2482b5(0x1e2)+_0x2482b5(0x3e8)+'255,2'+_0x2482b5(0x331)+_0x2482b5(0x27b)+_0x2482b5(0x28b)+_0x2482b5(0x4cf)+'ield\x20'+'optio'+_0x2482b5(0x602)+_0x2482b5(0x348)+_0x2482b5(0x2fa)+_0x2482b5(0x639)+_0x2482b5(0x50c)+'}\x0a\x20\x20\x20'+_0x2482b5(0x648)+_0x2482b5(0x3c0)+'\x20{\x20di'+_0x2482b5(0x1c9)+_0x2482b5(0x310)+'x;\x20al'+'ign-i'+'tems:'+'\x20cent'+_0x2482b5(0x627)+_0x2482b5(0x3cb)+_0x2482b5(0x248)+_0x2482b5(0x28b)+_0x2482b5(0x1cb)+_0x2482b5(0x22c)+_0x2482b5(0x253)+'ebkit'+_0x2482b5(0x375)+_0x2482b5(0x362)+_0x2482b5(0x5a6)+'ne;\x20a'+'ppear'+_0x2482b5(0x3f3)+'\x20none'+';\x20wid'+_0x2482b5(0x3fe)+'0px;\x20'+_0x2482b5(0x2dd)+'t:\x208p'+'x;\x20ba'+_0x2482b5(0x5b0)+_0x2482b5(0x48c)+_0x2482b5(0x286)+'paren'+_0x2482b5(0x588)+'\x20\x20\x20\x20.'+_0x2482b5(0x3de)+'ider:'+_0x2482b5(0x194)+_0x2482b5(0x38f)+_0x2482b5(0x22c)+_0x2482b5(0x626)+_0x2482b5(0x5f9)+'track'+_0x2482b5(0x19d)+_0x2482b5(0x631)+_0x2482b5(0x467)+_0x2482b5(0x320)+'er-ra'+'dius:'+'\x202px;'+_0x2482b5(0x5ff)+'groun'+_0x2482b5(0x1a1)+_0x2482b5(0x399)+_0x2482b5(0x2f3)+'ent(#'+'ff6b9'+'d,\x20#f'+'f6b9d'+_0x2482b5(0x1e5)+_0x2482b5(0x20d)+_0x2482b5(0x54e)+_0x2482b5(0x5c0)+')\x20100'+_0x2482b5(0x297)+'repea'+_0x2482b5(0x1c8)+'ba(25'+_0x2482b5(0x4ea)+',255,'+_0x2482b5(0x3a2)+'\x20}\x0a\x20\x20'+_0x2482b5(0x2ef)+'-slid'+'er::-'+'webki'+_0x2482b5(0x5dd)+'der-t'+_0x2482b5(0x425)+'{\x20-we'+'bkit-'+'appea'+'rance'+_0x2482b5(0x17e)+_0x2482b5(0x520)+_0x2482b5(0x381)+_0x2482b5(0x48b)+'heigh'+_0x2482b5(0x64a)+_0x2482b5(0x3f8)+_0x2482b5(0x165)+'top:\x20'+'-2px;'+_0x2482b5(0x320)+_0x2482b5(0x647)+_0x2482b5(0x2ae)+_0x2482b5(0x15d)+'\x20back'+'groun'+_0x2482b5(0x4e6)+_0x2482b5(0x431)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x2482b5(0x41d)+'\x20{\x20fo'+_0x2482b5(0x1d1)+_0x2482b5(0x46a)+'1px;\x20'+'font-'+'weigh'+'t:\x2060'+'0;\x20mi'+'n-wid'+_0x2482b5(0x1b5)+_0x2482b5(0x432)+_0x2482b5(0x31c)+_0x2482b5(0x5e8)+':\x20rig'+_0x2482b5(0x40c)+_0x2482b5(0x19f)+_0x2482b5(0x1e2)+_0x2482b5(0x58a)+'238,2'+_0x2482b5(0x66c)+_0x2482b5(0x43b)+_0x2482b5(0x4be)+'sk-co'+_0x2482b5(0x515))+(_0x2482b5(0x480)+'h:\x2034'+_0x2482b5(0x5f3)+_0x2482b5(0x5b2)+_0x2482b5(0x4b0)+'x;\x20bo'+'rder:'+'\x200;\x20b'+'order'+'-radi'+_0x2482b5(0x625)+_0x2482b5(0x62f)+_0x2482b5(0x348)+_0x2482b5(0x2fa)+'\x20none'+_0x2482b5(0x1b4)+'ding:'+'\x200;\x20c'+'ursor'+':\x20poi'+_0x2482b5(0x4fe)+_0x2482b5(0x2a0)+'\x20\x20.sk'+_0x2482b5(0x63d)+'\x20{\x20fo'+'nt-si'+'ze:\x201'+'1px;\x20'+_0x2482b5(0x2ab)+_0x2482b5(0x420)+_0x2482b5(0x1fb)+',238,'+'242,.'+_0x2482b5(0x402)+'addin'+'g:\x202p'+'x\x200;\x20'+_0x2482b5(0x4e0)+_0x2482b5(0x648)+_0x2482b5(0x1b2)+'err\x20{'+_0x2482b5(0x58b)+_0x2482b5(0x3aa)+_0x2482b5(0x5de)+_0x2482b5(0x364)+'\x20\x20\x20.s'+_0x2482b5(0x214)+_0x2482b5(0x52d)+_0x2482b5(0x4aa)+_0x2482b5(0x66b)+'flex-'+'start'+';\x20bor'+_0x2482b5(0x15f)+'0;\x20bo'+_0x2482b5(0x1bd)+_0x2482b5(0x180)+_0x2482b5(0x3d3)+_0x2482b5(0x54b)+_0x2482b5(0x1c3)+_0x2482b5(0x5d6)+_0x2482b5(0x20a)+';\x20bac'+_0x2482b5(0x210)+_0x2482b5(0x3dd)+_0x2482b5(0x563)+_0x2482b5(0x427)+'lor:\x20'+'#fff;'+_0x2482b5(0x2a7)+'-size'+_0x2482b5(0x5be)+_0x2482b5(0x4e2)+'font-'+_0x2482b5(0x630)+'t:\x2070'+_0x2482b5(0x665)+_0x2482b5(0x39c)+'\x20poin'+_0x2482b5(0x3f5)+_0x2482b5(0x4e0)+'\x20.sk-'+'btn:h'+_0x2482b5(0x47e)+_0x2482b5(0x3f4)+_0x2482b5(0x195)+'brigh'+'tness'+'(1.1)'+_0x2482b5(0x364)+_0x2482b5(0x68a));window['addEv'+_0x2482b5(0x1d2)+_0x2482b5(0x21d)+'r'](_0x2482b5(0x36e)+'wn',_0x4cd747=>{var _0x573088=_0x2482b5;_0x4cd747['code']===_0x573088(0x44b)+'t'&&(_0x4cd747['preve'+_0x573088(0x183)+_0x573088(0x4b5)](),_0x4d690a());},!![]);var _0x7bee36=document[_0x2482b5(0x387)+'eElem'+_0x2482b5(0x2d7)](_0x15b749[_0x2482b5(0x2f7)]);_0x7bee36[_0x2482b5(0x299)][_0x2482b5(0x4ae)+'xt']='posit'+'ion:f'+'ixed;'+'top:1'+_0x2482b5(0x632)+'ight:'+_0x2482b5(0x1e7)+'z-ind'+_0x2482b5(0x2c1)+'47483'+'646;c'+_0x2482b5(0x369)+':poin'+_0x2482b5(0x40d)+'idth:'+_0x2482b5(0x5d3)+_0x2482b5(0x2dd)+_0x2482b5(0x264)+'x;opa'+'city:'+_0x2482b5(0x2b0)+'ransi'+'tion:'+_0x2482b5(0x4f3)+_0x2482b5(0x570)+_0x2482b5(0x587)+_0x2482b5(0x5e0)+_0x2482b5(0x5f5)+_0x2482b5(0x36c)+_0x2482b5(0x4eb)+'lter:'+_0x2482b5(0x4bc)+_0x2482b5(0x438)+'w(0\x200'+_0x2482b5(0x2e4)+_0x2482b5(0x5b8)+_0x2482b5(0x2bd)+_0x2482b5(0x458)+_0x2482b5(0x5db)+'))',_0x7bee36[_0x2482b5(0x457)+_0x2482b5(0x446)]=_0x15b749[_0x2482b5(0x645)],_0x7bee36['title']='Sakur'+_0x2482b5(0x2ea)+'r',_0x7bee36[_0x2482b5(0x506)+_0x2482b5(0x517)+'er']=()=>_0x7bee36['style'][_0x2482b5(0x4f3)+'ty']='1',_0x7bee36['onmou'+'selea'+'ve']=()=>_0x7bee36[_0x2482b5(0x299)][_0x2482b5(0x4f3)+'ty']=_0x2482b5(0x65c),_0x7bee36['oncli'+'ck']=_0x43935e=>{var _0x28a0fb=_0x2482b5;if(_0x15b749[_0x28a0fb(0x5ef)]===_0x28a0fb(0x351))_0x43935e[_0x28a0fb(0x3cd)+_0x28a0fb(0x683)+_0x28a0fb(0x230)](),_0x4d690a();else{var _0x1f8f0d=new _0x50110a(_0x26ac05)[_0x28a0fb(0x649)+'ield'](_0xac45ea,_0x4bc108);_0x52488b[_0x28a0fb(0x27c)](_0x2a7d2b,_0x1f8f0d!==_0x48ad9c?_0x1f8f0d[_0x28a0fb(0x25a)]():null);}},document[_0x2482b5(0x4fa)][_0x2482b5(0x356)+'dChil'+'d'](_0x7bee36),_0x4c3907(),requestAnimationFrame(_0x625651),console[_0x2482b5(0x488)]('[saku'+'ra-ko'+_0x2482b5(0x259)+_0x2482b5(0x37f)+_0x2482b5(0x516)+_0x2482b5(0x4cc)+':',_0x3c0c8b['uwmk']);});})()));
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
function _0x1770(){var _0x8b3bd3=['AxrL','vvnMtLu','D0DLq3C','rgz1Bve','Aw5Lza','AMnTEuu','zxHLy0m','zxzuB28','zxjYB3i','zsbvssi','EMvMuhC','tgLUzxm','EI1PBMq','zgL2','uKLMyuy','zgfTywC','Aw5Ly2e','igHLAwC','ns00idC','oIbJzw4','qLjOt2e','BwLSEtO','BhvYkdi','ih0kica','y3rvuKW','ihjNyMe','iIb5mt0','oYbHBgK','z2v0x2y','DvrHDwK','C1rPvuC','idi2ChG','Bg9N','ohb4ktS','nYWUncK','Dg9W','nsaWlti','EdSGywW','Aw5N','u1bItMi','x2HVB2S','DMLZAwi','B2jLig8','mhb4lca','oIbPBNm','ywrVDZO','Bgvbu1O','B3bLBG','z3jVDw4','tgLZDa','y2T3ELu','tu1Xu00','yY0XlJu','rhDxzvK','zw50ic0','oJa7D2K','igjVCMq','oYb9cIa','EcaWihi','y0r6qNG','qxDHA2u','DwjPyY0','q0P0C3K','Dxm6ide','BcbJyxa','zwfYr3i','rfH3wvy','tMfTzq','nxb4oYa','yJLKiI8','DYaTidq','ysGYntu','lwnHCMq','iokaLca','tuD4tfi','CuzLyM8','CM9Szq','ywnPDhK','imk3ifvx','ihSGD2K','ywnLo3a','u1D6tMK','nxmGzwe','AejhANy','mIiGy3K','BM9tChi','oI1TB3O','AfnhAMC','AxrPB24','mtm4mZq5nKr6suHlzW','CMvHzhK','B3i6ihi','y21xwM8','C3bHBG','ANDhvMm','ugn0','icnMzJy','zdOGi2y','m3WXFdq','sKvjC2W','Aw9UoIa','C2fMzu0','vxbKyxq','AM9PBG','igeGtxK','ww12vhy','DhLqy3q','sfrnta','Cg9PBNq','CIGYmNa','DxnLCKe','A3PwCLm','zJu7ih0','mJ0ImJa','CMfUz2u','BxbSyxq','FdeXFda','DcbPzd0','zwXHDgK','refLuLC','yM94zxm','zgPeAMe','zvn0EwW','mtDWEdS','CuTKDhy','zgzRAKu','r0jbDxq','BI13Awq','i2zMnMi','zLzPzxC','D0vzr1C','nJuXmtC3mwjMDw9XDG','m3W0Fdy','B2rIvgS','Ag16vKy','BMfTzxm','yw5Jzt0','ig1UlwK','zxjJyw4','CM9Wlwy','tM9szwm','oYbHCha','DMLLD0i','ndvZigm','cIaGlNm','rMHfzu4','CIb7igm','v0jstu4','Ag9VA1m','zJmY','CLnWyxC','Aw5NoIa','CM9VBsa','CwruC08','EKvSELG','rMLLBgq','q2fWDhu','Ad0Ims4','B3vUzdO','AwXSpsi','ideYChG','CNjVCG','Chv0','zw5HyMW','ntuSmta','nJq2o2m','yxrPB24','uNvXBwS','vhjHBNm','zs1SAw4','y3rSihS','z2v0','B25LBNq','y291BNq','qMnmuK4','rxrUBLu','CKDxruW','swPhBgu','Avv5EKK','C3bHD24','C3rYB24','igjVEc0','v0j5vw4','zKvODMK','ywnLoNa','zhjVCc0','uhvivfO','BwiGEYa','AfnOywq','yM9KEq','DMfSDwu','D3jPDgu','Ec1ZAge','ihn0CM8','uMrTC1q','zxj1Ca','yw5ZzM8','BM9szwm','BM93','mdb2DZS','vMDJqvm','mtqZmdmYmZjHAfb5Afy','DgG6ida','DgvYo3C','CwHfruq','zvbSDwC','zxi6ida','CfnJAgu','mcWWlda','mJu1ldi','BvPLtM4','ChvZAa','CMvHze8','D29YBgq','tw92zw0','oYbJB2W','lc4XmIK','z2H0oIa','mNWZFda','EdSGFqO','zsb7igq','tMX4wLy','oMfMDgu','CMvZiokaLa','oIaXmxa','C2STC3C','EdSGyM8','r3fsyue','C3rLCMu','DfffA2C','yuvABxi','B2TLlwW','oYbNyxa','AY1ZBgK','zu1Vzhu','DgLJAW','mtjWEdS','qMvRCxG','AhLWB3q','idnJms4','B2rL','zgTPDa','tuLtu0K','CMLNAhq','vJjFxW','Aw4TDg8','BMu7iha','tfjjrKS','CMvWBge','BgfIzwW','qw1lAxi','BgLNBG','sgPtsuO','B24P','Bwfa','zxiGqa','ndC0odm','mtfWEdS','y2XPzw4','ywqPiIa','ktSGFqO','yNv0Dg8','q29WAwu','Dgv4Dem','tM8GCMu','nxWX','vfryvKi','BwfW','Cw1dtK8','C2HPzNq','Fdb8mtu','uMvJB2K','mtaWDMG','CM9WywC','z0XUqu0','yMeOmJu','DvHIsKe','BwvYysa','zYdIGjqGAa','m3W1','B2fKic4','CMzSB3C','DxDTAW','ugf0Aa','yxrLia','u0P6Awy','Bhv0ztS','B3GTC2G','igq9iK0','DLbfyNy','lc4WnsK','Eufxs1i','lNyX','iokaLcbJyq','BNvSBcG','zw50','Bg93lxK','z2LU','y2vUDgu','rgD4v2e','yxLLCNm','ltqTnY4','vgr1rg0','DYGWida','yMX5lum','CNmG','ls1W','t0jiq0u','Fde2Fde','zvDyDee','ihrOzsa','ywDLCG','vg9zA0K','zu1HBMe','wenMv04','oYb0CMe','z3vssNq','C2HHzg8','nIWUotu','pgrLzNm','C2XPy2u','AxPLoIa','lxjLCgu','B2fKlca','nZKSmtq','y2XPCgi','C2STBge','BxnktuW','Acb7igy','z2fWoIa','zwvMmJS','Dgv4Dge','BgvUz3q','BM9Uzsi','B2LUDgu','AgLKzgu','mtmXmdLOAerhuNK','mNyYlMK','lNnRlwm','CMfUC2K','DMjHAMS','ig5Vihi','DxjHmNy','phbHDgG','mcaWide','kdi1nsW','Ce55zuu','mtGGnIa','vvDnsYa','idjwmIa','lcbZExm','icHgnIK','zen2CgK','y2fWvhi','vvjIrMC','CJOXChG','mhW4Fdi','mIaXmK0','zxnZihS','zuTJqKK','uM9VBvm','s3bVCeS','ChjLDMu','rKfjteu','D1n3C08','yLzSv0K','vgjfwuG','DgvZDa','zMXLEdS','zs10CMe','zguGB24','D2LUzg8','sg9VAZO','ihbVAw4','iJmIihG','AwDODdO','z2v0q2W','zg93oIa','yxrLtwe','Eca2ChG','lc41kq','t2ruruq','tKvtveu','zwqGDg8','yMXL','DMu7ihC','DtmY','zuXVy2e','zxi7igC','zNLdr0K','t0r1veq','zM9YBq','BLPZsfy','s2HWBhq','DMC+','oIbNCMe','ihbSyxK','z3jHDMK','C2v0qxq','zuvSzw0','su5jvca','igfSBdO','yxa9iNi','zw50u3q','yxbWBgK','uNzLt2m','zhrOoIa','zsb7igy','C2STy3q','y29PBca','BdOGBM8','nxm0idi','lJuGms4','oNjNyMe','u2P5u3i','Ahq6idi','D2fYBG','uMHoy1i','q2fToG','ncK7yMe','Aw5Uzxi','u01IsLG','mdSGzM8','BLj5shG','CZPUB24','idqTnc4','ChG7Cge','ys4YDJi','ys0YDJi','z2vUDa','BgLUzvC','zsGXnta','CYaWEdG','ys51As4','EffiEfG','DfjVB20','DxnLCLm','vw5PDhK','Axq7ig8','Bgv4oIa','oIbKCM8','ztTVDMu','CffKuKi','zNbMDve','iNrYDwu','C2HVB3q','t2TICNq','mcaWidi','CMTnyw4','yxrLzca','zMLSBfi','EKXkC1C','uYdILzdILzdILza','BMvHCKC','Bgu7igy','sMLYwKC','ldaSmcW','rg5wyMq','wNjSB3m','Cg9ZAxq','yxvSDa','seD3r3q','Fdr8n3W','BMvS','lJuGmsa','BNrezwy','BgLUzwm','Dgf0zt8','ksbPCYa','ugXHEwu','s0rlrLK','zdSGz3i','zxiTCMe','DgfYz2u','A2rkyMe','AgfYq28','lxjHzgK','qvDtwKe','DZOGAw4','y2vdAgK','ignLBNq','Ahq6mtC','sNjJy3m','Ag9VAW','D2T4qKy','EdSGAgu','C2L6ztO','oIbJB2W','igHVB2S','C3rHDgu','BMvSihS','Axr5oIa','CM9VBq','sgzOz1y','oMf1Dg8','oIa4ChG','Ag9VA3m','BMLJA24','lJq1iIa','C3DPDgm','ALnHu2u','imk3ihvH','owqIlZ4','zgLUzZO','rcb0BYa','uNnUsvG','zw50zxi','EdSGD2K','Bw4TDg8','AwnRihq','B3vUDgu','rNzwsvC','zxC6ia','tffLDwe','t1nusum','sw5MAw4','CxzJwKm','vuf5vKO','C2STC2W','imk3ihnH','ncK7igi','mtf8mti','ufP5v3i','cIaGica','zM9UDc0','uMfWAwq','tMz3t2K','ChGGi2y','z2v0qxq','zxvkyLa','nxW0Fde','zwjRAxq','BKDjDuC','oIa2ChG','tw5ur3q','ihnVBgK','zg93BMW','q29WEsa','zw50ig0','BgvJDdO','B2XVCJ0','zgL1CZO','ChbLyxi','DdSGy28','CM9YCW','BNvSBca','CMLMlhm','BMLtEfi','B0zNyLG','CMnSzsa','yxLqshm','tu90Aw8','ms41ChG','i2zMyJm','cIaGoMG','nNb4oWO','zYb0BYa','AxHLzdS','EMu6ide','DgG6idy','CeLsufC','se1AEe0','yw5ZAxq','oIaYChG','EdSGzM8','DMCGEYa','BhmGy28','oIaYoha','BLHmDfe','Awz0pq','rg93BMW','r21Jr1e','nYWUmdy','A2L0lwe','uuLoDMG','ywjRA0m','Dw5KoIa','CMvHAY0','yLbbEuS','ignVBxa','rMLYzq','Bg9Ypsi','zhbY','oJiXndC','ihjPz2G','zMfPBgu','Fdf8n3W','iokaLcbtyq','AgvPz2G','CZSGyw4','AhLlt0e','tMfTzxm','yxa7D28','ktT3AgK','Bcb0Ahi','mJzWEdS','ic5ZAY0','zwn0','B25JBgK','y2fWu3a','B250lxm','ys1JAgu','oIa5mha','CMv2B2S','wLrgtuS','ic0GndG','ksWGmca','DgrxtxK','ywrPzw4','B246igi','mZi3nZi0v1rws2Tj','CI1YDw4','ihrYyw4','igjHy2S','nhW1Fdy','ig9Wywm','zMLSBfm','nIWUosK','ExbwzKq','z2jHkdi','ENnHzwi','ChGGCMC','B3nPDgK','ugfsz2O','Bw92zvq','C2LU','B3n0ihS','rgnkz04','uu1IEvm','y2fSyYG','weH2C0e','u1LSDui','BNrLCG','DMfS','Ag92zxi','Dgvzkde','BNvTyMu','Ec1ZAxO','ocWUosK','mcuGBM8','icaUBw4','idfWEca','uhnsEfm','DxjSkcm','C2v0tgK','zfHmChm','AwDUlwK','zeDvvfG','qMLusNy','z2fTzuW','zwnLtwC','oYbTAw4','Dg9Y','r3vU','zw50CMK','AwTrAuy','AwjLzfi','CM9SBgu','ywrKAw4','wgLptLG','r09zCwu','mtaSmte','oIaZChG','zcWGy3i','Aw5ZDge','B2LS','q3nKAuq','BMveyxm','yxb0Dxi','zcbYz2i','zwfZzsa','i2zMzta','r0HTyvK','quTvuKe','BgLNBI0','DwfYsw0','AYb0Ahi','igfWCgW','Be50ChC','nMi5zdS','C3rLBMu','yxrLoIa','ihSGzgK','C2LKzsa','zwf0Aw4','AxnWBge','igvUywi','nsWYntu','zxjYAwq','iIbZDhi','BwjoCLu','lZ48C3q','D24GEYa','BNrPyxq','B3bLCNq','DdOGm3a','DwX0CYa','zwnVAwW','mI41idi','igXHEw8','zuv4Ca','ENHTyMq','ideZChG','igj1Dhq','B2vfrvq','C3r5Bgu','Dg9Nz2W','zg9JDw0','mJuPoYa','CMf0Aw8','BgLUzxm','B250zw4','Fdn8nxW','lJjZlca','yMvNAw4','oIbYz2i','svjRDNC','AwvKpq','zxiGywm','u2vSzwm','mNyY','Dg9Wlwm','t25fBMe','zw1ZoIa','oIbMBgu','yxjPys0','y29Kzq','CMvH','seLruNG','EM9AwKi','y2fWugK','ugLLy2u','C2XPzgu','zKHmt1i','CKXPBMS','ruzbrKS','odvWvhnSrei','igXPBMS','A09vvMu','BNrLCI0','pJXZDg8','igrPC3a','B2fKzwq','ic0+ia','Bg9ZztO','qKTxCvy','B1jLy28','mdSGDhi','B3bHy2K','igfSAwC','zxzLBNq','Ewv0iokaLa','Bgf5oIa','BtOGBM8','imk3ihn0','zLzvCNq','Aw5Mqw0','wLPvyKi','z2DlyuK','kdi0nIW','mcaOCgW','oJPHzNq','C3bSAxq','DhjHBNm','ndu0nZe1mJbxBvP6ELi','DcKGqa','iJeIihm','AwrLCG','oYbMAwW','qKv4EMG','u2HVB3q','CZSGFqO','EuH3se4','Fdb8nNW','lxnPEMu','tMDIreG','zxjH','CI1Yywq','oIaWida','y29Z','igvUDhi','ihSGyM8','CMfKAxu','lcaWidm','AxvZoJG','B3vUzci','Aw1HDgK','qMr0wM8','DgvTlxu','AgfZ','C2v0vhi','ChG7igi','y29TCgW','oIaYnha','CeTKsKe','CMvMAxG','ohWYFde','DezcDLO','B3jKzxi','mxW3Fdu','B2fYza','zMy2yJK','ig5VBMu','mciGC3q','sKPbr3y','nJTWB2K','oYb3Awq','ywDNAw4','C0XVz2C','qxnZzw0','BvH2De4','oIaJzJy','yxLPs1O','CYbZy2e','zxr0zxi','DgvYoYa','EcKGC2e','v3rWBfq','z1zpuwK','u0fzrMu','C2STzhi','zu9IAMu','C2fRDxi','yMfJA2C','zxG6ide','vMPXEvy','mtbWEdS','uwr3Bfe','BMnL','ntaLktS','igzSzxG','ldeSlJm','zxnW','lwnSB3m','Exn0zw0','z251Bgm','C3n1uwC','Cg9Z','C3rYB2S','icaUC2S','EwD2BvC','vxzNBu0','Fdv8m3W','CJSGz2e','idi0iJ4','qxbWBhK','AxngAw4','AvjQvuq','A3mGD2K','mtqYDLj5CNrb','BYbZDMC','rvDLwNu','lJuIigy','EeriDwS','nc00lJu','CI1IB3G','C3rVCfa','B29Tksa','rK9wicG','zfHty3G','nZKSmtK','BM8Gy2e','z2jHkda','y2fWuM8','yxv0BW','nYWWlJC','BgjNCxO','mhb4ihi','re9nig0','CKHLAwC','zwPVAw4','yxbWBhK','yvjoChK','iNnRlwC','ihSGy28','CIGUmJi','Bgv4oYa','z2LUoIa','C2v0ug8','BgLUzvq','y2fSBa','CfnzDvm','uMzoB20','Aw5Z','mcbPCYa','DgHLieq','ndiSlJy','igzVBNq','AhjLDZO','ig1ZBsa','zgLZCgW','B3nLihm','rvnVBMS','lxrPDgW','AhjLzG','mcaVihy','Bw92zw0','oYbTyxi','CMfUC2y','DvzQrLm','AxrMBMm','uM56wKO','icGYDJi','Cc1ZAge','CK14DwG','4Pwq4Pwq4Pwqifm','y2TLzd0','r2nvBvu','lcbUBYa','nsb1As0','DhjVA2u','yxbWzw4','oYb0B3a','ihbHzgq','v3jHCha','v2LKDgG','CgfJzu8','z3jHzgK','lM1Ulxa','Dg9gAxG','BxnT','EdTMB24','y2XHC3m','DhLWzq','Dgf0zq','BMDL','CJOGmdS','rhfTqva','AgjZD04','wgnItgS','DxjZB3i','u2nHBgu','AgvHBhq','shfWyMi','zMvnB2q','C2STz3i','CMfTzxm','lZ48l3m','iInMzJy','ANvnyK4','oYbOzwK','ywqGC3q','A2v5zg8','DgfU','Aw5WDxq','z2v0q28','r3jHDMK','BgfZDeu','ihjLz2K','C2v0psi','Dg9tDhi','A2DYB3u','ig1ZBtO','wgruuKe','DgL0Bgu','nwmWidm','nhWYFdm','DNDTuw4','CNnVCJO','BwjzDhi','BNnPDgK','txvQt2S','C2STy2e','C3rYAw4','BxPcwMy','kdeWmhy','tg9JywW','vvLkA3m','txPjwMe','quDwBxm','y2u6ig4','iLnLz28','AdOGmdS','ida7igi','kfbPzwm','yxnZtMe','B2XZ','vMfSDwu','zdDLmZS','A09uuNG','Ag9ZDdO','BgWGCMu','A0XOzNa','C3bSyxK','CM9TihS','D2D4wNm','y3jLyxq','DdOGmJq','Dg87zMK','re9nq28','ihSGB3a','zwfK','DNnrv0u','CdO2ChG','zw50tgK','zZO2ChG','BNqTD2u','BLHivey','CMqTAgu','vxPbv00','EeHjAgu','mJu1lc4','BwLU','Ahq6ig0','yxa6idG','Ag9VAYa','zwjLAwy','zLbJwvC','wffIqNC','zhrtvuy','uKTtrwO','rw9Yuw8','lJm1CYa','BMCGEYa','AxjIEMO','EhqTywW','zvzHBhu','AY1TyM8','mJGPlca','zcdINjm','ih0GFqO','DdOGmNa','wwvREvi','Bwf4','seHYwKO','EhLNrw0','v2vItw8','mxWWFdi','B3nL','BwLUkdm','yM90Dg8','ohb4ksK','Aw9UoMy','weTzq1K','Bw4Ty28','CMfWAwq','zxjSyxK','wvfsu1K','ihSGzMW','BNqTzMe','Dhm6yxu','ysbdBgK','q0vruum','BfbSyxK','Ate2','ideWChG','zdOG','CgfJzsW','CZOGnta','AY1NCMe','B2XZihS','ELDUCgy','B3n0zMK','tgnVENu','swLMDui','Bg9JywW','zu5Pvgy','sgj0A04','mxWWFdq','BuPivKe','ywnRz3i','u3rHDgu','A3Hyy0y','t05csvO','ihjVB20','mcWUosK','y29WEq','qMXNAuK','z2vYlNm','y2vS','y2Xbwee','Dur6Agu','y29UDge','mc41','EuLUC3q','CgX1v20','ihbHEwW','CgLLy2u','B3n0Awm','ALDjCNO','qNforvC','CNmGtwe','DgfYDcK','mtiGmJe','Awq7iha','zxH0','CMqTDgK','CMLMoYa','Ag9VA1a','ntSGy3u','z3DhtvG','EdSGDgu','AtmY','DhjVBgW','zK1uEhq','ywrK','r0zrENy','lM1Ulwm','ldi1nsW','ig9U','lJi1CYW','ne0XmIa','ifvxtuS','B3aGB2y','Dc13zwK','y3nZvgu','ihi9iJe','ide0ChG','psiXmci','Ag9VA0m','DgG9iJi','r1jUDMS','nIWXktS','mNb4oYa','mtu3lc4','DdOYnNa','B0TMAuy','yM94lxm','ANDnBKq','DhH0','nJaWoYa','ignVBNq','lxnSAwq','DgvHBq','wLzXyui','vvjbxZi','zvbPEgu','ANLPzM0','CM9MvLu','yNfvAgu','rMrbvxG','Aw50zxi','nNb4idy','DwKTC2e','DuPzwLK','ChG7ih0','ExLnEeq','ltiUnsa','s0rtsNC','zw50q28','uvrUD1e','ywjZ','Dwv1Dwy','BwzwtfO','zw50vw4','lxbHBMu','AY1Jyxi','BI1SB2C','y2L0EtO','veLxBwu','lJjZoYa','Bg9NCW','BwLkuK8','mhWXFdK','y3rPBMC','CMqTyNi','q1v6ENK','ndySmJm','B21Tyw4','qNfkrvm','ohb4idm','yxjKlM8','ELH4uuu','C2vSzwm','Fdb8mq','DeDJrxa','r3rtALC','oYbWB3m','wxj2qwu','y29ZwMO','BMPgDxa','Bw4Ty2W','Bw96lxi','Ag9VDgu','BMzuuuu','Aw4OndG','B25PBNa','ywrKrxy','q2fTpq','vwPqAKi','CMfKiIa','zwn0Aw8','AxrLBxm','Aefjs1O','zgvYlxi','vwD1B0i','v0PHsvG','phn0B3a','zxiGCMu','lJvnmti','nhWXm3W','qwfnsxe','oYbWywq','wwTgshG','ignOyxi','uLvdENK','DhjPyNu','B2T3rui','CuHnBNe','B3vUDca','Dg87cIa','B2DVihS','ndGZnJq','quzOzeS','AgfKB3C','Aw5KzxG','r2PlAhu','oIbHyNm','Bw4TCge','DwDcv2C','BMDZigW','rxLLigG','EYbKAxm','idj2mI4','ig9MzNm','AwX0zxi','BfrYyw4','ChGPktS','z2v0sxq','ChLewwi','wgHZChG','qgTLEwy','EtOGlJq','BgrYzw4','lZ48y2K','BI1PDgu','C2vLBNq','y2HPBgq','lM1UlwW','t0LXuMG','CM91BMq','zwLNAhq','rhvTCca','iM5VBMu','oYbWB2K','Dg9WoJe','DgvYlwu','zunYvfu','BgvMDa','lJuGms0','q29SEvm','y3G9iJe','B3f2v28','C2v0','zsba','B2vsD1C','y29UC28','CMvNAxm','C2STDMe','AwDODa','Dw5KAw4','oJa7EI0','yw1L','BNqTC2K','DgvYia','Bg9YoIa','CMvTB3y','ANvTCfa','y29TChm','AxrZpsi','Dw5Kzwy','z2jjqvi','uuLiq0O','ENPqDgG','Acb7iha','Bw4TC2K','Dvvkzgi','zhLktwe','Ew91Dd8','B29T','tMvWB28','sLLOtNm','B3L4uxy','oIaWoYa','rxHvu1C','oYbMB24','BtOGDhi','zs13Awq','lxvPlhm','Bw4TBwe','zMLSBfq','Dgv4Dc8','CMDIysG','oYbSzwy','CMWOi3m','CwDOr2u','CMvHzey','C2v0uhi','lxjHBMC','zunmD2e','idaGmxa','nMPkwNvNyW','zNnLDd0','DdOXmda','yM9VDa','Be55vhK','zs10Ahu','yxiOls0','qNflCwm','CNjVCJO','yM90AdS','oJeWmcu','BNmTC2u','mNyYlNy','4Ocuig5VDa','DwjZy3i','DhLSzq','oJOTD2u','CgXHEwu','zxjZpq','AwvSza','yNDvs0S','o3DOAxq','o2HLAwC','y2XPy2S','sxbhzvu','nsiGC3q','FqOGic4','lxDPzhq','oYbIB3i','B3zLCMy','ocWYndi','q2fSAwi','vMLLDYa','icjjBNq','zM9Yrwe','quXHtfu','nNb4ktS','y29SB3i','Bwu9','idyWmdS','y2fWtvm','wu9jEMS','CgXHAw4','vwTfEfm','wKTdt2q','lJv6iIa','mdyPlca','Cd0ICM8','y2HLy2S','y2fYzc0','ic4YCYW','BI1PBIa','lJa1ktS','r0zLvhq','CMfKAwu','idHWEdS','zM9UDa','Dw5PDhK','BM5Lza','Bw4TAa','mhGXna','ienVBhK','m3W0Fdi','oJrWEca','BNfgAeO','BejRvgu','D2LKDgG','C2nHBgu','zfnhuLe','Fdf8mhW','B2r5','igjHC2K','C1f1yK0','DY5VBMu','igzYyw0','AuDmzey','z2v0qM8','ldiZocW','AwrLCJO','Dhj1zq','yMvS','rxzMEvi','zMXLEdO','vwj3vxq','B21RveC','Ag9VA04','B3G9iJa','ywn0Axy','t0rYDgu','z2LMEq','qwLTtwe','icSWEde','t2LjwfK','uNvUDgK','Ee9LCgu','mhb4o2i','y2XVC2u','iduWjtS','yMfJA2q','x19tquS','tfDyqKW','ktSGy3u','DgXLihm','psjYB3u','ida7ih0','D1vJyMe','mJm3ndGWmhjfswrTDW','sMnMweK','C2v0DgK','nYWXntC','DgLSBfm','Aenkz0K','m2mTms4','zM92t3y','zgvMCZ4','BMq6icm','C2v0sxq','BwvZC2e','C2zVCM0','C2HPzwW','C2f0Dxi','qM94zxm','y3rPB24','z2LUlxq','ldeWnYW','Cgvythq','vg90ywW','BLvZzsi','u2fRDxi','lc4WnIK','B2fK','oIa0ChG','y2TNCM8','mJvWEdS','mtfWEca','y2fWqwK','ic4YCZS','Bc5ZAg8','u3D1Bxu','D09ztNm','whLfBMK','ntaLoYa','AejdugC','A2u9iNu','teLHwfa','zgvYihS','rxrnuha','l3n0yxq','EtOGzMW','zgrPBMC','z1LhA08','igXVy2e','BNnMB3i','zLLLt0O','vLPwv0e','A1jotwW','r0DAwK0','y2fWDhu','mhb4idG','wgjXsKu','AhD1EhC','t0CGka','Evv0v28','CvfXBhq','idaGmJq','rw5NAw4','t05VzgO','Ccb7igq','tg9Hzgu','wxftsMC','ltiUns0','igDHCdO','C2HVD24','tNPNu28','mtSGBwK','y2fTsgu','CcbVzMy','wMTxv28','mYWXmdy','BMX5','igLUAxq','ntuSmJu','CxvLCNK','CMvUDem','4Pwq4Pwq4PwqieW','C3rLCa','BgvYiea','CM06ihq','CMvU','BgLUA2u','BNrdB24','tvrOAeO','mJu1lde','wwjqrxG','BM8Gzxi','CM9VBua','Ew90EgS','nsaWidi','v1Ddtg0','De9MDxq','sNvTCca','Ec1KAxi','zurut0K','BNq+pc8','BMnLoIa','mxW1','DgLVBJO','BfPgwLi','rNH1uK4','rdOG','yxa6ihi','rgfTywC','mNWZ','yMXkz28','BgfJzs0','oYbIywm','Dw5KoNi','Ede9iJq','EhrntgW','yw5Zlxm','yM9Yzgu','zenOAwW','ihnLCNy','ALbWwxu','Awr0Aa','Fdb8mNW','Ag9ZDg4','BgWGBg8','DgvTCZO','BIb7igi','EcbYz2i','DZOGmca','BgvKpq','Dg8Gy28','uxzOz2W','Aw5Zzxq','t0Hmvwi','Fdb8mG','zxq9iJa','z3jPzdS','B3aTy28','Aw5xEuW','zgvYAxy','vwXRqwW','phn2zYa','Dw1UCZO','FdeYFdG','z0nSAwu','oIaXoYa','BMfNzxi'];_0x1770=function(){return _0x8b3bd3;};return _0x1770();}function _0x3c10(_0x3b8489,_0x5b2550){_0x3b8489=_0x3b8489-(-0x16c9+0x1*0x37f+0x3*0x6a1);var _0x4a4641=_0x1770();var _0x2f750c=_0x4a4641[_0x3b8489];if(_0x3c10['diHjcb']===undefined){var _0x5c6077=function(_0x20385d){var _0x8fa683='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x53ca99='',_0x24025c='';for(var _0x26cc49=-0xf4f*-0x1+0x9b*-0x37+0x7*0x292,_0x189421,_0x58908d,_0x250fa7=0x243*-0x8+-0x5*0x1f+0x1*0x12b3;_0x58908d=_0x20385d['charAt'](_0x250fa7++);~_0x58908d&&(_0x189421=_0x26cc49%(-0xbea+-0xb*0x335+-0x2f35*-0x1)?_0x189421*(-0x1a46+0x7c9*-0x4+-0x79*-0x7a)+_0x58908d:_0x58908d,_0x26cc49++%(-0x48a+0xb2c*-0x3+-0x16*-0x1bb))?_0x53ca99+=String['fromCharCode'](-0xd0*0x18+-0x5f*-0x6+0x1*0x1245&_0x189421>>(-(-0x1205*-0x1+-0x4dd*-0x2+0x3*-0x93f)*_0x26cc49&0x1d66+0x434+0x10ca*-0x2)):-0x24b2+0x126f+0x1243){_0x58908d=_0x8fa683['indexOf'](_0x58908d);}for(var _0x47810e=0x5cc+0x9*-0x121+0x45d,_0x38ecce=_0x53ca99['length'];_0x47810e<_0x38ecce;_0x47810e++){_0x24025c+='%'+('00'+_0x53ca99['charCodeAt'](_0x47810e)['toString'](0xae9+-0xb*-0x139+-0x184c))['slice'](-(-0x26a5*-0x1+0xa3*-0x4+0x2417*-0x1));}return decodeURIComponent(_0x24025c);};_0x3c10['yFUmxI']=_0x5c6077,_0x3c10['yjbmPs']={},_0x3c10['diHjcb']=!![];}var _0x5913c3=_0x4a4641[-0x17a0+0x17b*-0x6+0x1*0x2082],_0x14dbef=_0x3b8489+_0x5913c3,_0x304596=_0x3c10['yjbmPs'][_0x14dbef];return!_0x304596?(_0x2f750c=_0x3c10['yFUmxI'](_0x2f750c),_0x3c10['yjbmPs'][_0x14dbef]=_0x2f750c):_0x2f750c=_0x304596,_0x2f750c;}(function(_0x55f5de,_0x4d9778){var _0x3c27ca=_0x3c10,_0x2f32fe=_0x55f5de();while(!![]){try{var _0x8dfa27=parseInt(_0x3c27ca(0x117))/(0x16ac+-0xfe1*0x1+-0x6ca)*(parseInt(_0x3c27ca(0x318))/(0xfa1+-0x1*0xa01+-0x2*0x2cf))+parseInt(_0x3c27ca(0x53c))/(0x18ea+-0xbbb+-0xd2c)+-parseInt(_0x3c27ca(0x229))/(-0xb*0x279+0x5b2+0x1585)*(-parseInt(_0x3c27ca(0x2a7))/(0x891+0x1c1b+-0x24a7))+parseInt(_0x3c27ca(0x4d2))/(-0x4b2+0x16*0x171+-0xd7f*0x2)*(parseInt(_0x3c27ca(0x64f))/(-0x1162+0x1d4a+0x1*-0xbe1))+-parseInt(_0x3c27ca(0x625))/(0x201d+0x2429*-0x1+-0x74*-0x9)+parseInt(_0x3c27ca(0x695))/(0x11f3+-0x309+-0xee1)+-parseInt(_0x3c27ca(0x2c3))/(0x469+-0x13a*-0x1+-0x599);if(_0x8dfa27===_0x4d9778)break;else _0x2f32fe['push'](_0x2f32fe['shift']());}catch(_0x125531){_0x2f32fe['push'](_0x2f32fe['shift']());}}}(_0x1770,0x48*0x4303+-0xcbb92+0x7d74c),((()=>{'use strict';var _0x3d27bd=_0x3c10,_0x1cde62={'bVlWI':function(_0x3c95be,_0x3b1b81){return _0x3c95be===_0x3b1b81;},'MEFkg':'LmOHc','GqRaA':function(_0x4e6086,_0x46bb7e){return _0x4e6086-_0x46bb7e;},'yotxk':function(_0x345f61,_0x23608c){return _0x345f61+_0x23608c;},'wEYGW':function(_0x340b5c,_0x4e55d3){return _0x340b5c>_0x4e55d3;},'xtMLl':_0x3d27bd(0x513),'BExzh':function(_0x670eda,_0x185660,_0x292110,_0x5b2cdc,_0x290d73){return _0x670eda(_0x185660,_0x292110,_0x5b2cdc,_0x290d73);},'oeRwW':function(_0x40f698,_0xe3d85e){return _0x40f698===_0xe3d85e;},'GHmaY':function(_0x1f60d4,_0x470d8d){return _0x1f60d4(_0x470d8d);},'sTiUG':'\x20fail'+'ed\x20pr'+_0x3d27bd(0x5f6)+'ffset'+_0x3d27bd(0x177)+'/0xC/'+'0x10/'+_0x3d27bd(0x50e),'IDaCg':'iZzrr','JEIsl':_0x3d27bd(0x3fa),'YOIzk':_0x3d27bd(0x13a)+_0x3d27bd(0x51b)+'rror','peXLt':function(_0x325527,_0x4de8c4){return _0x325527+_0x4de8c4;},'juMbN':function(_0x4c1f0a,_0xf8894){return _0x4c1f0a!==_0xf8894;},'TCsrI':'sYsPn','ONodj':function(_0x124c4d,_0x5f2644,_0x1eec8d,_0x175603,_0x477f58){return _0x124c4d(_0x5f2644,_0x1eec8d,_0x175603,_0x477f58);},'EorQo':function(_0x4e0397,_0x81186f){return _0x4e0397%_0x81186f;},'GtSjW':function(_0x3d5598,_0x30c107,_0xebd155){return _0x3d5598(_0x30c107,_0xebd155);},'Pjiop':_0x3d27bd(0x38b),'ayiKZ':_0x3d27bd(0xbe),'uUJdb':function(_0x84d6a2,_0x146bb1){return _0x84d6a2/_0x146bb1;},'LQeua':function(_0x4c4677,_0x81d436){return _0x4c4677-_0x81d436;},'nWVIp':function(_0x1e0eba,_0x1e7374){return _0x1e0eba>_0x1e7374;},'BqKqc':_0x3d27bd(0x61d),'Nepoo':function(_0x1395f3,_0x390726){return _0x1395f3===_0x390726;},'KDKFY':function(_0x5a71ec,_0x2ddf64){return _0x5a71ec*_0x2ddf64;},'ctidI':_0x3d27bd(0x4b4),'NMBBp':function(_0x43c39,_0x53aa04){return _0x43c39!=_0x53aa04;},'GmcGQ':function(_0x30cd4b,_0x407ca3,_0x297726,_0x236834,_0x3d2ff1){return _0x30cd4b(_0x407ca3,_0x297726,_0x236834,_0x3d2ff1);},'hmzVF':function(_0x4d702f){return _0x4d702f();},'yAWKR':'FkVPB','EtMPp':_0x3d27bd(0x37b)+_0x3d27bd(0xab)+_0x3d27bd(0x3dd),'FZgTj':'\x20enab'+'led=','leASZ':function(_0x8a9ed1,_0x29e33b){return _0x8a9ed1!==_0x29e33b;},'jPpYu':function(_0x80e2f9,_0x32b878,_0x5d4682){return _0x80e2f9(_0x32b878,_0x5d4682);},'SjySr':_0x3d27bd(0x132)+_0x3d27bd(0x1bf)+_0x3d27bd(0x4a6)+_0x3d27bd(0x4ad),'kRNMl':_0x3d27bd(0x18e),'VfBEZ':_0x3d27bd(0x1aa),'nXHTF':function(_0x567739,_0x50d16e){return _0x567739+_0x50d16e;},'GcUmU':function(_0x249611,_0x21a135){return _0x249611+_0x21a135;},'UguoB':function(_0x5a8632,_0x2c942d){return _0x5a8632+_0x2c942d;},'gVOQi':'\x20->\x20','QIHCJ':function(_0x4bbb98,_0x27b42b){return _0x4bbb98+_0x27b42b;},'PZyWr':function(_0x3ce970,_0x2d66af){return _0x3ce970+_0x2d66af;},'YmvTv':function(_0x4a3565,_0x4e4ad6){return _0x4a3565&&_0x4e4ad6;},'inWyL':function(_0x28bfcb,_0x4c73be){return _0x28bfcb+_0x4c73be;},'MWNwe':'Local'+_0x3d27bd(0x19c)+_0x3d27bd(0x2a5)+_0x3d27bd(0xc6),'SJzif':'niSxR','nGIuG':'TIvyq','WLTMt':function(_0x3b79af,_0x5d0aba,_0x358849){return _0x3b79af(_0x5d0aba,_0x358849);},'gnulc':_0x3d27bd(0x664)+'(sett'+'er\x20ar'+'g)\x20@','gwGMX':'captu'+'re','LBqjx':function(_0x113dbf,_0x4d536a){return _0x113dbf(_0x4d536a);},'URbFg':function(_0x38c3ff,_0x2622f6,_0x577e63){return _0x38c3ff(_0x2622f6,_0x577e63);},'nqFhJ':function(_0x4bf6f4,_0x57a3fa){return _0x4bf6f4(_0x57a3fa);},'wUcba':_0x3d27bd(0x1ba)+'h','gYGkO':function(_0x50b432,_0xfe5a30){return _0x50b432!==_0xfe5a30;},'cdtZK':'gcJbU','Swumu':_0x3d27bd(0x19c)+_0x3d27bd(0x662)+'ner\x20@','EXxdL':'4|0|6'+'|1|2|'+_0x3d27bd(0xde),'LWXBL':function(_0x46342,_0x4c7e82,_0x43dd59){return _0x46342(_0x4c7e82,_0x43dd59);},'SPbNb':'Eexpo','Qvhgl':_0x3d27bd(0x475),'dyJMa':'XiONX','USfNU':_0x3d27bd(0x38e),'Ueqtd':_0x3d27bd(0x46d)+'2|7|1'+_0x3d27bd(0x22d)+_0x3d27bd(0x5c8)+_0x3d27bd(0xfb)+_0x3d27bd(0x448)+_0x3d27bd(0x640)+'|3|15','fMTxt':function(_0x5eaab2,_0x33de10){return _0x5eaab2*_0x33de10;},'lbgqz':function(_0x17e061,_0xda4e8d){return _0x17e061/_0xda4e8d;},'FvVIW':_0x3d27bd(0x4a7)+'l','AGVms':'sk-ra'+'nge','yHwHN':_0x3d27bd(0x5d9),'KpopK':_0x3d27bd(0x63e),'OHLUb':_0x3d27bd(0x5ae)+'r:1px'+'\x20soli'+_0x3d27bd(0x264)+'a(255'+_0x3d27bd(0x54e)+'157,.'+_0x3d27bd(0x16a)+_0x3d27bd(0x556)+_0x3d27bd(0x5aa)+_0x3d27bd(0x232)+_0x3d27bd(0x670)+_0x3d27bd(0x53f)+_0x3d27bd(0x9f)+';colo'+'r:#ff'+_0x3d27bd(0x399)+_0x3d27bd(0x5ae)+'r-rad'+_0x3d27bd(0x2d7)+_0x3d27bd(0x171)+_0x3d27bd(0x567)+_0x3d27bd(0x511)+_0x3d27bd(0x301)+'font-'+_0x3d27bd(0x1ad)+_0x3d27bd(0xc8)+'curso'+'r:poi'+_0x3d27bd(0x23f),'XcbLk':_0x3d27bd(0x4be),'SAYFe':'aria-'+_0x3d27bd(0x116)+'n','BKWqV':_0x3d27bd(0x521),'BdtZo':'CmZAH','NlxZV':_0x3d27bd(0x686),'pDbPT':function(_0x1431a0,_0x57af63){return _0x1431a0+_0x57af63;},'HIQRx':function(_0x5e666f,_0x50b1d5,_0x33d6f9){return _0x5e666f(_0x50b1d5,_0x33d6f9);},'UwVJH':function(_0x2ddf60,_0x399e90){return _0x2ddf60+_0x399e90;},'eqYaM':function(_0x1d424,_0x54e05d){return _0x1d424!==_0x54e05d;},'omkTG':function(_0x4134a0,_0x4a3394){return _0x4134a0*_0x4a3394;},'fpfuQ':function(_0x5d04f2){return _0x5d04f2();},'LdJLl':'iOwEx','VJEmE':'GWQEh','ToYkI':function(_0x953474,_0x15ffbd){return _0x953474+_0x15ffbd;},'urioW':_0x3d27bd(0x459),'NfwOi':function(_0x4b85d7,_0x10d119,_0x12cfc4){return _0x4b85d7(_0x10d119,_0x12cfc4);},'jWIrz':function(_0x49bfd6,_0x285d78){return _0x49bfd6<=_0x285d78;},'cVxwZ':function(_0x270fd4,_0x5bb448){return _0x270fd4||_0x5bb448;},'movgG':function(_0x3355d1,_0x12588f){return _0x3355d1<_0x12588f;},'nAcWn':function(_0x2c60a6,_0x5cac15){return _0x2c60a6!==_0x5cac15;},'fZiFk':_0x3d27bd(0x16e),'ExUSW':function(_0xe5e60e,_0x4f21a2){return _0xe5e60e<_0x4f21a2;},'MujOk':function(_0x38c824,_0x5a3f59){return _0x38c824+_0x5a3f59;},'qwAaf':'DcJgN','Xhspx':'IifuB','oqvWo':function(_0x31718e,_0x33a5bb){return _0x31718e+_0x33a5bb;},'oeEET':'MyRoo'+'mStat'+_0x3d27bd(0x4a3),'Okbrt':function(_0x38779c,_0x3aac5,_0x49e0a0){return _0x38779c(_0x3aac5,_0x49e0a0);},'cDzBx':_0x3d27bd(0x52d)+_0x3d27bd(0x33b)+'null\x20'+'—\x20wro'+'ng\x20ro'+'om\x20la'+_0x3d27bd(0x4bb),'ihVgV':function(_0x23829b,_0x55c0a5){return _0x23829b(_0x55c0a5);},'RfNom':_0x3d27bd(0x52d)+_0x3d27bd(0x2bf)+_0x3d27bd(0xf3)+_0x3d27bd(0x19b)+_0x3d27bd(0x1e8)+_0x3d27bd(0x4df)+_0x3d27bd(0x634)+_0x3d27bd(0x12f)+_0x3d27bd(0x19a),'dGUTX':function(_0x5866cf,_0x49a0f9,_0x535466){return _0x5866cf(_0x49a0f9,_0x535466);},'NgbDH':function(_0x126835,_0x1114d8){return _0x126835+_0x1114d8;},'tOfut':function(_0x43a9d3,_0x44c092,_0x46d0a8){return _0x43a9d3(_0x44c092,_0x46d0a8);},'GOYqe':function(_0x4795e5,_0x338851,_0xc77448){return _0x4795e5(_0x338851,_0xc77448);},'uXbJA':function(_0x34de71,_0x4b52b9,_0x339869){return _0x34de71(_0x4b52b9,_0x339869);},'uMooR':function(_0x7e9470,_0x5e150c,_0xe456d){return _0x7e9470(_0x5e150c,_0xe456d);},'ZkWWo':function(_0x354bdd,_0xca1257,_0x25d2be){return _0x354bdd(_0xca1257,_0x25d2be);},'CEQQC':function(_0x13fab6,_0x4bfcd7,_0x2fe327){return _0x13fab6(_0x4bfcd7,_0x2fe327);},'Lcozu':function(_0x1dddaa,_0x339c7e,_0x4e497d){return _0x1dddaa(_0x339c7e,_0x4e497d);},'INFfl':function(_0x301dc1,_0x5e9806,_0x211bdd){return _0x301dc1(_0x5e9806,_0x211bdd);},'QMbyS':_0x3d27bd(0x32b)+_0x3d27bd(0x1c5)+'d\x20(ov'+_0x3d27bd(0x3d3)+'\x20+\x20pa'+'nel\x20+'+_0x3d27bd(0x286)+_0x3d27bd(0xc4),'iUyzI':'boot','eCLwa':_0x3d27bd(0x43e),'ugBWg':function(_0x2664de,_0x2adf78){return _0x2664de+_0x2adf78;},'jwMnD':function(_0x5b61ab,_0x13b319){return _0x5b61ab&&_0x13b319;},'zsaeb':function(_0x4b741c,_0x38d35f,_0x5120e0){return _0x4b741c(_0x38d35f,_0x5120e0);},'irbzj':function(_0x3ea067,_0x529bb7,_0x514cca){return _0x3ea067(_0x529bb7,_0x514cca);},'GGZZM':function(_0x107d62,_0x5155e8,_0x3617e6){return _0x107d62(_0x5155e8,_0x3617e6);},'LZFyV':'comps','YqSJg':function(_0x22782f,_0x1ce3e7){return _0x22782f+_0x1ce3e7;},'SWAKP':function(_0x22a736,_0x1008ca){return _0x22a736+_0x1008ca;},'WWCLm':function(_0x34f707,_0x86e530,_0x2358ec){return _0x34f707(_0x86e530,_0x2358ec);},'uarIm':_0x3d27bd(0x184)+'er','XxKjh':_0x3d27bd(0x601),'hAIKZ':_0x3d27bd(0x179),'UkExS':function(_0x2cf5ea,_0x5c9458){return _0x2cf5ea===_0x5c9458;},'guRJt':function(_0xa1218a,_0x26a420){return _0xa1218a+_0x26a420;},'HnOIa':_0x3d27bd(0x43b),'pIRPW':function(_0x4053f8,_0x278b75){return _0x4053f8*_0x278b75;},'VZVWA':function(_0x149218,_0x1a8ac1){return _0x149218*_0x1a8ac1;},'dtSUF':function(_0x48f83a,_0x4449d3){return _0x48f83a-_0x4449d3;},'ebeif':function(_0x4ba67d,_0x565923){return _0x4ba67d>_0x565923;},'rMxuh':function(_0x4d4f07,_0x4a8b40,_0x4f2bd4){return _0x4d4f07(_0x4a8b40,_0x4f2bd4);},'ypVfD':function(_0x2b8e8b,_0x3cd0ae){return _0x2b8e8b>_0x3cd0ae;},'UmCBd':_0x3d27bd(0x575),'DMGPm':_0x3d27bd(0x5e8)+'ieldO'+_0x3d27bd(0x64d),'KDSJw':function(_0x4003b6,_0x478c60){return _0x4003b6===_0x478c60;},'eseUk':_0x3d27bd(0x243)+'r','hbswN':_0x3d27bd(0x300),'pyDYb':function(_0x59ed87,_0x1e0738){return _0x59ed87*_0x1e0738;},'FhEeN':function(_0x55d55d,_0x43e96a){return _0x55d55d/_0x43e96a;},'SYluB':function(_0x125bc4,_0x3922cc){return _0x125bc4*_0x3922cc;},'oKfiF':function(_0x192157,_0xc832ef){return _0x192157*_0xc832ef;},'HMZxM':_0x3d27bd(0xb2),'qdTsO':function(_0x3e399f,_0x17bfc2){return _0x3e399f(_0x17bfc2);},'tCrlq':function(_0x411cee,_0x250e83){return _0x411cee(_0x250e83);},'GeCTQ':_0x3d27bd(0x560),'fPcYW':function(_0x37a4f3,_0x140735){return _0x37a4f3!==_0x140735;},'kxXcF':_0x3d27bd(0x5d6),'RsnIX':function(_0x34ec8a,_0x51abde,_0x512369,_0x1b8338,_0x9b18c9){return _0x34ec8a(_0x51abde,_0x512369,_0x1b8338,_0x9b18c9);},'MzIZa':_0x3d27bd(0x661),'uVjFS':function(_0xf62513,_0x387dfd){return _0xf62513===_0x387dfd;},'LBYSo':_0x3d27bd(0x3ff),'QINvh':function(_0x3e73c2,_0x20b064,_0x32fb33,_0x1ded1a,_0x1b2e09){return _0x3e73c2(_0x20b064,_0x32fb33,_0x1ded1a,_0x1b2e09);},'EFAFK':function(_0x464aad,_0x2f0c60){return _0x464aad%_0x2f0c60;},'bAmYk':'Napky','eWXtA':function(_0x162bd3,_0x16d049,_0x2f3409,_0x317f0a,_0x8e1360){return _0x162bd3(_0x16d049,_0x2f3409,_0x317f0a,_0x8e1360);},'HHDiY':function(_0x486e49,_0x3a39b6,_0x217d42,_0x2db6b4,_0x107d96){return _0x486e49(_0x3a39b6,_0x217d42,_0x2db6b4,_0x107d96);},'SVJQG':_0x3d27bd(0x447),'AmKir':_0x3d27bd(0x616),'hCCWL':_0x3d27bd(0x343),'tGcEp':function(_0x2e2459,_0x489447){return _0x2e2459+_0x489447;},'zzPth':function(_0x47e1dc){return _0x47e1dc();},'qmCNO':_0x3d27bd(0x2a0),'CsdiD':_0x3d27bd(0x307),'fxQYz':_0x3d27bd(0x569)+_0x3d27bd(0x487)+_0x3d27bd(0x548)+'=','uDzhe':function(_0x448282,_0x3835bb){return _0x448282(_0x3835bb);},'nXLtQ':function(_0x2971ca){return _0x2971ca();},'yyMxD':function(_0x412291,_0x57424e){return _0x412291+_0x57424e;},'hvyqG':'\x20fov=','bwUKK':'\x20play'+_0x3d27bd(0x4e4),'VieNg':function(_0x26dc81,_0x2d69c5){return _0x26dc81===_0x2d69c5;},'XqWgU':'rgba('+'255,1'+_0x3d27bd(0x25c)+_0x3d27bd(0x105)+')','VdpSk':function(_0x3ae6de,_0x376439){return _0x3ae6de(_0x376439);},'jseUR':function(_0x5f3111,_0xfd6385,_0x5ca388,_0x2f18c2,_0x1631eb,_0x457909,_0x2b3c45){return _0x5f3111(_0xfd6385,_0x5ca388,_0x2f18c2,_0x1631eb,_0x457909,_0x2b3c45);},'kLhfp':_0x3d27bd(0x4c9)+'255,1'+'79,19'+'8,.9)','RrYkS':function(_0x122cbe,_0x328749){return _0x122cbe>_0x328749;},'GjKhu':function(_0x1b13b2,_0x525ad8){return _0x1b13b2-_0x525ad8;},'RnzZJ':'rgba('+_0x3d27bd(0x69d)+'35,24'+_0x3d27bd(0x3f0),'jcmyE':_0x3d27bd(0x558)+_0x3d27bd(0x434)+'ns-se'+'rif,s'+_0x3d27bd(0x309)+_0x3d27bd(0x4c5)+'ans-s'+'erif','xDHuk':function(_0x288ec8){return _0x288ec8();},'UKCNc':function(_0x1f9ff5,_0x4a5dca){return _0x1f9ff5===_0x4a5dca;},'AnxuK':function(_0x4bde67,_0x37f53d){return _0x4bde67*_0x37f53d;},'UjPjB':'span','MOtio':'aria-'+'check'+'ed','uxeaa':function(_0x248f4f,_0x4d235c){return _0x248f4f(_0x4d235c);},'YekyR':function(_0x3c506e,_0x528eee){return _0x3c506e+_0x528eee;},'bsEhY':function(_0x4f8c4f,_0x3cdbad){return _0x4f8c4f+_0x3cdbad;},'AFhdK':function(_0x4ee5bc,_0x5abaea){return _0x4ee5bc!==_0x5abaea;},'oyxQv':function(_0x4b28e0,_0x33d0d7){return _0x4b28e0===_0x33d0d7;},'hCJgI':_0x3d27bd(0x432)+_0x3d27bd(0x529)+'e','Gjdun':'qPaPp','DgxWa':function(_0x1106db,_0x126378){return _0x1106db-_0x126378;},'tillS':function(_0x24278b,_0x311394){return _0x24278b-_0x311394;},'aNcZe':function(_0xb4c70,_0x446936){return _0xb4c70*_0x446936;},'cosZj':function(_0x265076,_0x5e41bc){return _0x265076-_0x5e41bc;},'lNyTy':function(_0x1fda57,_0xa348b1){return _0x1fda57/_0xa348b1;},'QOsmY':function(_0x530d9e,_0xd8d0d7){return _0x530d9e/_0xd8d0d7;},'iGLdF':_0x3d27bd(0x4c9)+'255,1'+_0x3d27bd(0x25c)+'6,.9)','JcfXI':function(_0x3a2cc5,_0x64fedf){return _0x3a2cc5/_0x64fedf;},'WtplT':function(_0x549974,_0x335786){return _0x549974/_0x335786;},'wsLGe':'cente'+'r','dMmBu':'fbQmi','icppe':function(_0x19fa10,_0x3a9d5d,_0x20658a){return _0x19fa10(_0x3a9d5d,_0x20658a);},'GRnvk':'local'+'\x20Coly'+_0x3d27bd(0x4f2)+'@','RtkNp':'sk-ca'+'rd','FaYrw':_0x3d27bd(0x412),'zWnpf':'sk-ca'+_0x3d27bd(0x405)+'tle','OVeuW':_0x3d27bd(0x1ed),'fsBFg':_0x3d27bd(0x4f5),'uIRcs':_0x3d27bd(0x62e)+_0x3d27bd(0x5bf),'zLJsW':function(_0x41208a,_0x411f6e,_0x1e960e,_0x232507,_0x35f3fe){return _0x41208a(_0x411f6e,_0x1e960e,_0x232507,_0x35f3fe);},'cKJeq':function(_0x33f930){return _0x33f930();},'fYeOJ':'butto'+'n','lyrtD':'sk-dr'+'aggin'+'g','rXLmS':function(_0x5661d5,_0x4f0059){return _0x5661d5-_0x4f0059;},'GFQzv':_0x3d27bd(0x3e6)+'\x20Coly'+'Shoot'+'er\x20@','XAaeT':_0x3d27bd(0x3d4),'ohPja':_0x3d27bd(0x497)+_0x3d27bd(0x5bb)+'nsole'+_0x3d27bd(0x126),'PCqOK':'ZqCYv','WCbiI':function(_0x19cc4b,_0x3d223c,_0x301d4c){return _0x19cc4b(_0x3d223c,_0x301d4c);},'eKcBI':function(_0x1d0c01,_0x369451,_0x31795f){return _0x1d0c01(_0x369451,_0x31795f);},'abkkC':_0x3d27bd(0x59a)+'%','yZmOX':_0x3d27bd(0x379)+'ty\x20%','ygvmW':'dtZtz','LQBQX':'mn-pa'+_0x3d27bd(0x196),'piFZc':'nav','sQLgf':'mn-lo'+'go','pKdJA':'mn-cl'+_0x3d27bd(0x3cb),'Pfgib':_0x3d27bd(0x638)+'erdow'+'n','tOWOi':_0x3d27bd(0x638)+'ermov'+'e','MMqSM':'auto','tQGws':function(_0x4c0a02,_0x5ac7a4){return _0x4c0a02+_0x5ac7a4;},'mJHVA':function(_0x1d0364,_0x2b953a){return _0x1d0364+_0x2b953a;},'KujYn':_0x3d27bd(0x61a)+'MK:\x20','COepv':function(_0x1ee7ca,_0x58aa09){return _0x1ee7ca+_0x58aa09;},'Gwvoi':_0x3d27bd(0x1b7)+':\x20','xygEm':_0x3d27bd(0x2b9)+_0x3d27bd(0x270),'SrpGt':function(_0x494aaa,_0x23d0dc){return _0x494aaa+_0x23d0dc;},'uZzMK':function(_0x2408b2,_0x33727a){return _0x2408b2+_0x33727a;},'xtjij':function(_0xc269bb,_0xbfae0e){return _0xc269bb+_0xbfae0e;},'RveOc':function(_0x5f53d8,_0x3faf20){return _0x5f53d8+_0x3faf20;},'dfkjE':function(_0x2f729d,_0x43ff6b){return _0x2f729d+_0x43ff6b;},'MRVmL':function(_0x247854,_0x321fa4){return _0x247854+_0x321fa4;},'ggKaI':function(_0x472ba5,_0x2d7b59){return _0x472ba5+_0x2d7b59;},'wOYNs':function(_0x4b1c46,_0x11c90b){return _0x4b1c46+_0x11c90b;},'SMbJX':function(_0x1d1bed,_0x22c965){return _0x1d1bed+_0x22c965;},'pNyeE':function(_0x595ba5,_0x187b0b){return _0x595ba5(_0x187b0b);},'UlkAl':_0x3d27bd(0x22b)+'sform'+':','ZZUbB':'\x20aim:','Zrlos':function(_0x3be23d,_0x40d2b7){return _0x3be23d(_0x40d2b7);},'hBGjv':_0x3d27bd(0x53e)+'ngs:\x20','FdAUx':function(_0x104a86,_0x558a71){return _0x104a86+_0x558a71;},'UAyVJ':function(_0x58f146,_0x2017d7){return _0x58f146+_0x2017d7;},'QdwlQ':function(_0x2c1fb8,_0x52319b){return _0x2c1fb8+_0x52319b;},'TuDlp':_0x3d27bd(0x2fd)+_0x3d27bd(0x178)+_0x3d27bd(0x4de)+'1','AaMIq':'style','wGeCw':function(_0x337600){return _0x337600();},'OBHCE':function(_0x1323c8,_0x353b5e){return _0x1323c8===_0x353b5e;},'iRjUD':function(_0x1590ca,_0x26d0ca){return _0x1590ca===_0x26d0ca;},'TSJjI':'Qheze','fzONy':_0x3d27bd(0x2df)+'ete','RgYyJ':function(_0x2559c8){return _0x2559c8();},'ADbZZ':_0x3d27bd(0x3a4)+'ntent'+'Loade'+'d','FtbhW':_0x3d27bd(0x167),'ldCxV':_0x3d27bd(0x5d4),'dXLps':function(_0x2fc420,_0x259d2c){return _0x2fc420+_0x259d2c;},'YrvAe':_0x3d27bd(0x51c)+'e=','WByUn':'top','EvfyR':'\x20unit'+_0x3d27bd(0x3f9)+_0x3d27bd(0x654),'GPsDL':'sakur'+'a.2v2'+'.v1','KnNKZ':function(_0x3a9783,_0x5eeb92){return _0x3a9783+_0x5eeb92;},'BtyPY':'\x20hook'+_0x3d27bd(0x658)+'oil=','AhhFH':_0x3d27bd(0x494),'mbYtr':'bhNFy','vSxbe':'DGgzD','lGRnk':_0x3d27bd(0xe1),'vsQWE':_0x3d27bd(0x398)+'Wrapp'+_0x3d27bd(0x295)+'quire'+_0x3d27bd(0x25e)+_0x3d27bd(0x273)+'g\x20plu'+_0x3d27bd(0xf0),'zElzX':_0x3d27bd(0x552)+'a2v2','YkFHx':_0x3d27bd(0x17c)+_0x3d27bd(0x577)+'e.Cor'+_0x3d27bd(0xb1)+'le.dl'+'l','wSwsO':_0x3d27bd(0x40b),'EtnnU':_0x3d27bd(0x608),'YbPEx':_0x3d27bd(0x632)+_0x3d27bd(0x14a)+_0x3d27bd(0x3da)+'er','ZVqaB':function(_0x3da8d0,_0x2d16d3,_0x445ee0,_0x3bfbfd,_0x49f15f,_0x37dca7,_0xd5482e,_0x1b4424){return _0x3da8d0(_0x2d16d3,_0x445ee0,_0x3bfbfd,_0x49f15f,_0x37dca7,_0xd5482e,_0x1b4424);},'qghGe':_0x3d27bd(0x559)+'m','MNNui':_0x3d27bd(0x52c)+'nager','GFeTt':'set_C'+'urren'+_0x3d27bd(0x17a),'rGWEL':function(_0x4ef857,_0x353358,_0x4a29c0,_0x135c69,_0x1da22c,_0x188408,_0x3d3c0d,_0x308223){return _0x4ef857(_0x353358,_0x4a29c0,_0x135c69,_0x1da22c,_0x188408,_0x3d3c0d,_0x308223);},'YdIRh':function(_0x7c7318,_0x308c4d,_0xb5b626,_0x70cf89,_0x14c9bf,_0x390200,_0x11097c,_0x43ae58){return _0x7c7318(_0x308c4d,_0xb5b626,_0x70cf89,_0x14c9bf,_0x390200,_0x11097c,_0x43ae58);},'UbwUt':_0x3d27bd(0x254),'kdJba':_0x3d27bd(0x314)+_0x3d27bd(0xd6)+'l','SGalF':function(_0x456735,_0x43e294,_0x216338){return _0x456735(_0x43e294,_0x216338);},'gejtw':'prese'+'nt','uTaui':_0x3d27bd(0xb9)+'NG','ONBIZ':_0x3d27bd(0x212)+'fe\x20Mo'+_0x3d27bd(0x139)+_0x3d27bd(0x353)+_0x3d27bd(0x1b7)+'\x20arme'+'d','CNRAp':'canva'+'s','Hqpbb':_0x3d27bd(0x2fd)+'a-ui-'+_0x3d27bd(0x297),'CJtsy':_0x3d27bd(0x5fb),'djDja':function(_0x2ec576,_0x47357c){return _0x2ec576(_0x47357c);}};if(!/(^|\.)2v2\.io$/[_0x3d27bd(0x136)](location['hostn'+_0x3d27bd(0x4ab)]||''))return;if(window[_0x3d27bd(0x535)+_0x3d27bd(0x42c)+_0x3d27bd(0xbb)])return;window['__SAK'+_0x3d27bd(0x42c)+'V2__']=!![];var _0x3afebf=_0x3d27bd(0x64c)+'9d',_0x217888=_0x3d27bd(0x1f0)+'c6',_0xb4d71e={'logs':[],'t0':typeof performance!==_0x3d27bd(0x4b3)+_0x3d27bd(0x5d0)&&performance['now']?performance[_0x3d27bd(0x692)]():Date[_0x3d27bd(0x692)](),'add':function(_0x604d08,_0x205b40){var _0x44d663=_0x3d27bd;try{if(_0x1cde62['bVlWI'](_0x1cde62['MEFkg'],'kMdrD')){var _0x5c6323=new _0x2a0e98(_0x242ec5)[_0x44d663(0x4cd)+_0x44d663(0x4e5)](_0x25da6e,_0x44d663(0x149));return _0x5c6323?_0x5c6323[_0x44d663(0x240)]():0x1e46+0x1bde+0x4*-0xe89;}else{var _0x102504=(_0x1cde62[_0x44d663(0xaa)](performance[_0x44d663(0x692)](),_0xb4d71e['t0'])/(-0x127b+0x2043+0x9e0*-0x1))[_0x44d663(0x35e)+'ed'](-0x81f+0x3a*-0x3d+0x751*0x3);_0xb4d71e[_0x44d663(0x446)][_0x44d663(0x9a)](_0x1cde62[_0x44d663(0x596)](_0x1cde62['yotxk']('[',_0x102504)+'s]\x20'+_0x604d08,'\x20')+_0x205b40);if(_0x1cde62[_0x44d663(0x64e)](_0xb4d71e['logs']['lengt'+'h'],-0x206f+0x1507+0xdc0))_0xb4d71e['logs'][_0x44d663(0xd4)]();}}catch(_0x286a4d){}}};function _0x3d933a(_0x49c42d,_0x3382e9){var _0x1d3f8e=_0x3d27bd;if(_0x1d3f8e(0x338)===_0x1cde62[_0x1d3f8e(0x5ac)])try{_0x4438eb[_0x1d3f8e(0x546)+'em']('sakur'+'a.ui.'+_0x1d3f8e(0x4de)+'1',_0x30e17f[_0x1d3f8e(0x38a)+'gify'](_0x599028));}catch(_0x2bd883){}else _0xb4d71e[_0x1d3f8e(0x40e)](_0x49c42d,_0x3382e9);}function _0x745628(_0x30b18d){var _0x589a56=_0x3d27bd;return _0x1cde62['yotxk']('0x',(_0x30b18d>>>0xa76+-0x4c2+-0x5b4)[_0x589a56(0x37d)+_0x589a56(0x5f2)](-0x211*0x11+-0x20fb+-0x442c*-0x1));}[_0x3d27bd(0x5ec),'info',_0x1cde62['FtbhW'],_0x3d27bd(0x5d4)][_0x3d27bd(0x4f4)+'ch'](function(_0x3da349){var _0x20527a=_0x3d27bd,_0x111e92={'tdWMy':_0x20527a(0x661),'CNlkw':function(_0x35ae03,_0x439890,_0x1d7a51,_0x25353e,_0x1b961e){var _0x260ced=_0x20527a;return _0x1cde62[_0x260ced(0x2c8)](_0x35ae03,_0x439890,_0x1d7a51,_0x25353e,_0x1b961e);},'ACgUy':function(_0x386f77,_0x1e6746){return _0x1cde62['oeRwW'](_0x386f77,_0x1e6746);},'EKcdn':function(_0x5441f6,_0x26d029){return _0x1cde62['yotxk'](_0x5441f6,_0x26d029);}},_0x585b1b=console[_0x3da349]||function(){};console[_0x3da349]=function(){var _0x2f7f18=_0x20527a,_0x1272bb={'LIaXP':function(_0xbf3f9f,_0x15ff07){return _0xbf3f9f(_0x15ff07);}};if(_0x111e92['ACgUy'](_0x2f7f18(0x366),'DqmAP')){try{var _0x46e732=Array['proto'+_0x2f7f18(0x362)][_0x2f7f18(0x107)][_0x2f7f18(0x337)](arguments),_0x4bb0d8=_0x46e732[_0x2f7f18(0xd2)](function(_0x3b34cb){var _0x307917=_0x2f7f18;if(typeof _0x3b34cb==='strin'+'g')return _0x3b34cb;if(_0x3b34cb&&_0x3b34cb[_0x307917(0x547)+'ge'])return _0x3b34cb[_0x307917(0x547)+'ge'];try{return _0x1272bb[_0x307917(0x562)](String,_0x3b34cb);}catch(_0x320045){return'?';}})[_0x2f7f18(0x633)]('\x20');/UnityWebModkit|sakura|hook|Hook|signature|CompileError|RuntimeError/i[_0x2f7f18(0x136)](_0x4bb0d8)&&_0x3d933a(_0x111e92['EKcdn'](_0x2f7f18(0x4a5)+'le.',_0x3da349),_0x4bb0d8['slice'](0x325*0x2+0x7*0x521+-0x2a31,0xe*0x97+0xb7a+-0x122c));}catch(_0x234fe8){}return _0x585b1b[_0x2f7f18(0x32e)](console,arguments);}else _0x2423b6(_0x21da63,0x1*0x5db+0x26d7*-0x1+0x310*0xb,_0x111e92[_0x2f7f18(0x226)],_0x12476b),_0x111e92['CNlkw'](_0x3760f4,_0xb401d6,-0x76*-0x2+0x24f7+-0x252b,_0x111e92['tdWMy'],_0x4972f7);};}),window[_0x3d27bd(0x460)+_0x3d27bd(0x3a9)+_0x3d27bd(0x26f)+'r'](_0x1cde62['ldCxV'],function(_0x47c0a1){var _0x3e0e55=_0x3d27bd;if(_0x1cde62['IDaCg']===_0x1cde62[_0x3e0e55(0x62f)])_0x156d7a=!![],_0x492788(_0x3e0e55(0x1b0),'playe'+'rs\x20Ma'+_0x3e0e55(0x69b)+'ma@'+_0x1cde62[_0x3e0e55(0x267)](_0x911be9,_0x3a4247)+_0x1cde62[_0x3e0e55(0x5ea)]);else try{_0x3d933a(_0x1cde62[_0x3e0e55(0x4fb)],_0x1cde62['yotxk'](_0x1cde62[_0x3e0e55(0x54f)](_0x47c0a1[_0x3e0e55(0x547)+'ge']||'?','\x20@'),_0x1cde62['GHmaY'](String,_0x47c0a1['filen'+_0x3e0e55(0x4ab)]||'')[_0x3e0e55(0x2c1)]('/')['pop']())+':'+(_0x47c0a1['linen'+'o']||'?'));}catch(_0x234f21){}},!![]),_0x3d933a(_0x3d27bd(0x4d5),_0x1cde62[_0x3d27bd(0x302)](_0x1cde62[_0x3d27bd(0x24c)](_0x1cde62['ggKaI']('paylo'+_0x3d27bd(0x374)+'artin'+_0x3d27bd(0xdd)+'ostna'+_0x3d27bd(0x4f8),location['hostn'+'ame'])+_0x1cde62[_0x3d27bd(0x457)]+(window[_0x3d27bd(0x5ef)]!==window['self']?_0x3d27bd(0x145)+'D':_0x1cde62[_0x3d27bd(0x682)])+('\x20body'+'='),document['body']?'ready':_0x3d27bd(0xed)+_0x3d27bd(0x28a)+'ent-s'+_0x3d27bd(0x401))+('\x20uwmk'+'='),!!window['Unity'+_0x3d27bd(0x3c9)+_0x3d27bd(0xb8)])+_0x1cde62[_0x3d27bd(0x523)]+!!window['unity'+'Insta'+_0x3d27bd(0x303)]);var _0x4a04ac={'esp':![],'boxes':!![],'names':!![],'health':!![],'team':!![],'lines':![],'scale':0x1,'noRecoil':![],'noSpread':![],'rapidFire':![],'damageValue':0x96,'infAmmo':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'camHeight':1.6,'playerHeight':1.8,'fovOverride':0x0,'safeMode':![],'hookCapture':![],'hookState':![],'hookNoRecoil':![]},_0x110395={..._0x4a04ac};try{Object['assig'+'n'](_0x110395,JSON['parse'](localStorage[_0x3d27bd(0x489)+'em'](_0x1cde62['GPsDL'])||'{}'));}catch(_0x5b0069){}function _0x36e9f5(){var _0x537a6f=_0x3d27bd;try{if(_0x1cde62['juMbN'](_0x1cde62['TCsrI'],'hcJpM'))localStorage['setIt'+'em'](_0x537a6f(0x2fd)+'a.2v2'+_0x537a6f(0xeb),JSON[_0x537a6f(0x38a)+'gify'](_0x110395));else try{var _0x19f2cf=new _0x2c17ed(_0x12e00b)['readF'+_0x537a6f(0x4e5)](_0x4663d3,'i8');return _0x19f2cf?_0x19f2cf['val']():-0x61*-0x3b+0x23bf*0x1+-0x3a1a;}catch(_0x1928d1){return 0x1*0x15af+0x6a*0x12+-0x1d23;}}catch(_0x2a84f9){}}_0x3d933a(_0x3d27bd(0x4d5),_0x1cde62['MujOk'](_0x1cde62['KnNKZ'](_0x1cde62[_0x3d27bd(0xff)](_0x3d27bd(0x53e)+_0x3d27bd(0x481)+_0x3d27bd(0x2ad)+'\x20—\x20ho'+'okCap'+'ture='+_0x110395[_0x3d27bd(0x41c)+_0x3d27bd(0x263)+'e'],_0x3d27bd(0x1af)+'State'+'='),_0x110395[_0x3d27bd(0x660)+_0x3d27bd(0x363)])+_0x1cde62['BtyPY']+_0x110395[_0x3d27bd(0x527)+'oReco'+'il']+('\x20safe'+'Mode='),_0x110395['safeM'+'ode']));var _0x461001={'uwmk':!!window['Unity'+_0x3d27bd(0x3c9)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'linker':![],'msm':![],'localView':![],'localTransform':![],'charCam':![],'aimManager':![],'room':![],'state':![],'spawner':![],'pieceMgr':![],'worldCamera':0x0,'players':0x0,'lastError':''},_0x3e1634=null,_0xe79d7d=null,_0x4430e1={},_0x46e327=-0x7d0*0x1+0x252a+0x1*-0x1d5a,_0xb40998=0x26f5+0x510+-0x3b*0xbf,_0xe7a3c5=-0xb75+0xe04+-0x5*0x83,_0x5dd997=-0x1e*0x97+-0x19b5*-0x1+-0x125*0x7,_0x5560b4=0xdce+-0x1d24*-0x1+-0x2af2,_0x2bffd7=-0xd69*-0x1+0xe0+-0xe49,_0x35240f=0xea7+0x41e*0x1+0x1f*-0x9b,_0x475533=-0x7b3+-0x2d*0xf+0xa56,_0x4fdec8=-0x25*-0x9d+0xd95+0x2446*-0x1,_0x33ae77=0x175d+-0xa4*-0x3+-0x1949,_0x5ec0ef=-0x1af9+-0x14b6+-0x27*-0x139,_0x109565=-0x1125+-0x1fd+-0x1f*-0x9e,_0xb09c6d=[],_0x1e7606=new Map();function _0xe80913(_0x37f564,_0x2e1b3b,_0x559cee){var _0x48f3f0=_0x3d27bd,_0x3809b1={'hSGjg':function(_0x58c7b3,_0x23ece0,_0x5a1d01,_0x3d574d,_0x16b1e0){var _0x1f7471=_0x3c10;return _0x1cde62[_0x1f7471(0x578)](_0x58c7b3,_0x23ece0,_0x5a1d01,_0x3d574d,_0x16b1e0);},'OiIXY':_0x48f3f0(0x661),'zxmbd':function(_0x1addf0,_0x407f75){var _0x316d7c=_0x48f3f0;return _0x1cde62[_0x316d7c(0x372)](_0x1addf0,_0x407f75);},'eCrTU':function(_0x1c8136,_0x35abe8){var _0xcb6286=_0x48f3f0;return _0x1cde62[_0xcb6286(0x3ba)](_0x1c8136,_0x35abe8);},'Tfiiz':function(_0x213cf6,_0x17dc86,_0x3f2d75){var _0x38c6ff=_0x48f3f0;return _0x1cde62[_0x38c6ff(0x455)](_0x213cf6,_0x17dc86,_0x3f2d75);}};if(_0x1cde62['Pjiop']!==_0x48f3f0(0x63b)){var _0x406221=_0x1e7606[_0x48f3f0(0x677)](_0x37f564);!_0x406221&&(_0x406221=new Map(),_0x1e7606[_0x48f3f0(0x4a2)](_0x37f564,_0x406221));if(!_0x406221[_0x48f3f0(0x2dc)](_0x2e1b3b)){if(_0x48f3f0(0x279)!==_0x48f3f0(0x215))try{if(_0x48f3f0(0x3e7)===_0x1cde62[_0x48f3f0(0x2f3)])_0x2c2c88[_0x48f3f0(0x660)+'tate']=_0x5d5339,_0x5de4c7();else{var _0xea1bf9=new _0x3e1634(_0x37f564)[_0x48f3f0(0x4cd)+'ield'](_0x2e1b3b,_0x559cee);_0x406221['set'](_0x2e1b3b,_0xea1bf9!==undefined?_0xea1bf9['val']():null);}}catch(_0x5681b2){_0x406221['set'](_0x2e1b3b,null);}else{_0x2da666!==-0xc9e+-0x20c*0x6+0x18e7&&(_0x3809b1['hSGjg'](_0x38e109,_0x3c3491,0x3*0xad9+-0x1*-0x21c1+-0x2*0x20da,_0x3809b1[_0x48f3f0(0x52e)],_0x5d7112),_0x3809b1[_0x48f3f0(0x623)](_0x463561,_0x2e565f,-0x4a7*0x7+0x1*-0x113d+0x3272,'f32',_0x1b3c40),_0x3809b1[_0x48f3f0(0x623)](_0x542b9c,_0x1fb7ef,-0x2*0x713+0x237a+-0xc4*0x1b,_0x3809b1[_0x48f3f0(0x52e)],_0x505dfc));_0x3809b1[_0x48f3f0(0x284)](_0x2ec4ae,0x17da+-0x11e5+-0xc*0x7f)&&(_0x22baae(_0x4c52d9,-0x13d0+-0xf2*-0xe+0x748,_0x48f3f0(0x661),_0x497cc4),_0x32ab27(_0x4e7e0d,-0x83*0x3e+-0x41*-0x71+0x3c1,_0x3809b1['OiIXY'],_0x3598d1));_0x5a04ff!==-0xd04+0x2695+-0x1990*0x1&&(_0xb3e742(_0x5456bc,0x7f*0x3d+0x7bc*-0x4+0x171,_0x3809b1[_0x48f3f0(0x52e)],_0x46f244),_0x3809b1[_0x48f3f0(0x623)](_0x4194a6,_0x4f274a,-0x2199+0x22b*0x1+0x201a,'f32',_0x3791ed));if(_0x3809b1[_0x48f3f0(0x49c)](_0x2102ea,0x1*-0xa8b+0x1*0x581+0x50f)===-0x5*0x269+-0x593*0x1+0x11a0)_0x3809b1['Tfiiz'](_0x3bee03,_0x48f3f0(0x68b),'movem'+_0x48f3f0(0x1e1)+_0x48f3f0(0x27f)+'appli'+'ed\x20to'+'\x20'+_0x1bec59(_0x45cff7));}}return _0x406221[_0x48f3f0(0x677)](_0x2e1b3b);}else return-0xe34+0x1635+-0x801;}function _0x3b800e(_0x366e8b,_0x3798ae,_0x2f7a11,_0x2e24ff){var _0x4bf66f=_0x3d27bd;if('Azrjz'===_0x1cde62[_0x4bf66f(0x4d9)])try{var _0x4b34de=_0x1cde62['uUJdb'](_0x1cde62['LQeua'](_0x4a209f[_0x4bf66f(0x692)](),_0x1ed106['t0']),0x69a+0x1*-0x1037+0xd85)[_0x4bf66f(0x35e)+'ed'](-0x66f+0x39a+-0x2d7*-0x1);_0x59a052['logs'][_0x4bf66f(0x9a)](_0x1cde62['peXLt']('['+_0x4b34de+'s]\x20'+_0x1ec6c8,'\x20')+_0x5615af);if(_0x1cde62['nWVIp'](_0x19d530[_0x4bf66f(0x446)][_0x4bf66f(0x113)+'h'],0x20b7+-0x2379+0x51a*0x1))_0xf9ee63[_0x4bf66f(0x446)][_0x4bf66f(0xd4)]();}catch(_0x55251c){}else try{if(_0x1cde62['Nepoo'](_0x4bf66f(0x67d),_0x4bf66f(0x3f2)))return'0x'+(_0x9a9722>>>-0x89*0x14+-0x27*0x59+0x1843*0x1)['toStr'+_0x4bf66f(0x5f2)](-0x1*0xcad+-0x31*-0xca+-0x19ed);else new _0x3e1634(_0x366e8b)[_0x4bf66f(0x68b)+_0x4bf66f(0x667)](_0x3798ae,_0x2f7a11,_0x2e24ff);}catch(_0x45e37e){}}function _0x89c5a8(_0x509847,_0x541801,_0x279540,_0x444e49){var _0x14c459=_0x3d27bd,_0x417e3b={'rofVU':function(_0x2f5dcb,_0x5f3b1e,_0x19ae99,_0x3f379e,_0x25d475){return _0x2f5dcb(_0x5f3b1e,_0x19ae99,_0x3f379e,_0x25d475);},'oYVqN':function(_0x1e11a6,_0x41b8d7){var _0x1f43df=_0x3c10;return _0x1cde62[_0x1f43df(0x19d)](_0x1e11a6,_0x41b8d7);}};if(_0x1cde62['ctidI']!==_0x14c459(0x1eb)){var _0x289649=_0xe80913(_0x509847,_0x541801,_0x279540);if(_0x1cde62['NMBBp'](_0x289649,null))_0x1cde62[_0x14c459(0x202)](_0x3b800e,_0x509847,_0x541801,_0x279540,_0x289649*_0x444e49);}else{var _0x437ac0=_0x38c438(_0x1a4e19,_0x4f9620,_0x378787);if(_0x437ac0!=null)_0x417e3b[_0x14c459(0x42f)](_0x598cc6,_0x3e55e3,_0x58ca7a,_0x4fff19,_0x417e3b['oYVqN'](_0x437ac0,_0x5d6e23));}}function _0x324a7b(_0x1c2b3c,_0x2ddf25,_0x5d6ebe,_0x57f0e9,_0x47a9ae,_0x371c0f,_0x58c3b6){var _0x3490a6=_0x3d27bd;if(_0x1cde62['yAWKR']!==_0x1cde62[_0x3490a6(0xea)])_0x16fef5[_0x3490a6(0x131)+_0x3490a6(0x198)+_0x3490a6(0x193)](),_0x1cde62['hmzVF'](_0x37676f);else try{var _0x17f579=(_0x3490a6(0x1d9)+_0x3490a6(0x5b3)+'3')[_0x3490a6(0x2c1)]('|'),_0x4b3f22=-0x1fb5+0x1*0x1e01+-0x2*-0xda;while(!![]){switch(_0x17f579[_0x4b3f22++]){case'0':_0x461001[_0x3490a6(0x1b7)+_0x3490a6(0x550)]++;continue;case'1':_0x4430e1[_0x1c2b3c]=_0x4df66a;continue;case'2':_0x3d933a(_0x3490a6(0x1aa),_0x1cde62['yotxk'](_0x1cde62[_0x3490a6(0x54f)](_0x1cde62['peXLt'](_0x1cde62[_0x3490a6(0x54f)](_0x1c2b3c,_0x1cde62['EtMPp'])+_0x2ddf25+'::'+_0x5d6ebe+'('+_0x57f0e9['join'](',')+')',_0x47a9ae?_0x3490a6(0x2ae)+_0x47a9ae:''),_0x1cde62['FZgTj']),_0x4df66a['enabl'+'ed']));continue;case'3':return _0x4df66a;case'4':_0x4df66a['enabl'+'ed']=_0x1cde62[_0x3490a6(0x5fa)](_0x58c3b6,![]);continue;case'5':var _0x4df66a=_0xe79d7d['hookP'+_0x3490a6(0x2e2)]({'typeName':_0x2ddf25,'methodName':_0x5d6ebe,'params':_0x57f0e9,'returnType':_0x47a9ae},_0x371c0f);continue;}break;}}catch(_0x4416ad){return _0x461001[_0x3490a6(0x37a)+'rror']='hook\x20'+_0x1c2b3c+':\x20'+(_0x4416ad&&_0x4416ad['messa'+'ge']||_0x4416ad),_0x1cde62[_0x3490a6(0x5b1)](_0x3d933a,'hook',_0x1cde62[_0x3490a6(0x165)]+_0x1c2b3c+':\x20'+_0x461001[_0x3490a6(0x37a)+_0x3490a6(0x66d)]),null;}}function _0x461611(_0x29416d,_0x556237,_0x3c498b,_0x5aff12,_0x398108,_0x5c61fd,_0xe97eb1){var _0x28b47c=_0x3d27bd;try{if(_0x28b47c(0x18e)===_0x1cde62[_0x28b47c(0x56d)]){var _0x475f06=_0xe79d7d[_0x28b47c(0x407)+'ostfi'+'x']({'typeName':_0x556237,'methodName':_0x3c498b,'params':_0x5aff12,'returnType':_0x398108},_0x5c61fd);return _0x475f06['enabl'+'ed']=_0xe97eb1!==![],_0x4430e1[_0x29416d]=_0x475f06,_0x461001['hooks'+_0x28b47c(0x550)]++,_0x1cde62['GtSjW'](_0x3d933a,_0x1cde62['VfBEZ'],_0x1cde62[_0x28b47c(0x596)](_0x1cde62[_0x28b47c(0x3ac)](_0x1cde62[_0x28b47c(0x54f)](_0x1cde62['GcUmU'](_0x1cde62[_0x28b47c(0x352)](_0x29416d,_0x28b47c(0x37b)+_0x28b47c(0xab)+_0x28b47c(0x3dd)),_0x556237)+'::',_0x3c498b)+'(',_0x5aff12[_0x28b47c(0x633)](',')),')')+(_0x398108?_0x1cde62[_0x28b47c(0x468)](_0x1cde62[_0x28b47c(0x2f9)],_0x398108):'')+_0x1cde62['FZgTj']+_0x475f06[_0x28b47c(0x66f)+'ed']),_0x475f06;}else _0x2d0059[_0x28b47c(0x356)+'dChil'+'d'](_0x2d556b);}catch(_0xbb1776){if('HzpRf'==='GfcYN')!_0x1b8f61&&_0x13eef7&&_0x576a4b[_0x28b47c(0x240)]()&&(_0x35e5ce=_0x57d3c4[_0x28b47c(0x240)](),_0x5345ea[_0x28b47c(0x35f)]=!![],_0x3427ca('captu'+'re','Movem'+_0x28b47c(0x15a)+_0x28b47c(0x141)+_0x28b47c(0x5cb)+'\x20@'+_0x478daa(_0x1449e9)));else return _0x461001[_0x28b47c(0x37a)+_0x28b47c(0x66d)]=_0x1cde62[_0x28b47c(0x4b5)](_0x1cde62[_0x28b47c(0x3ac)](_0x1cde62[_0x28b47c(0x3ac)](_0x28b47c(0x3b4),_0x29416d),':\x20'),_0xbb1776&&_0xbb1776[_0x28b47c(0x547)+'ge']||_0xbb1776),_0x3d933a(_0x28b47c(0x1aa),_0x1cde62['PZyWr']('FAILE'+_0x28b47c(0x1bf)+_0x28b47c(0x4a6)+_0x28b47c(0x4ad),_0x29416d)+':\x20'+_0x461001[_0x28b47c(0x37a)+'rror']),null;}}var _0x32b1e1=()=>![];try{if(_0x1cde62['AhhFH']!==_0x1cde62[_0x3d27bd(0x386)]){if(window[_0x3d27bd(0x17c)+_0x3d27bd(0x3c9)+'dkit']&&!_0x110395['safeM'+'ode']){if(_0x1cde62['vSxbe']==='DGgzD'){_0x3e1634=window['Unity'+'WebMo'+_0x3d27bd(0xb8)][_0x3d27bd(0x398)+_0x3d27bd(0x359)+'er'],_0x1cde62[_0x3d27bd(0x233)](_0x3d933a,_0x1cde62['lGRnk'],_0x1cde62[_0x3d27bd(0x3a7)]),_0xe79d7d=window[_0x3d27bd(0x17c)+'WebMo'+_0x3d27bd(0xb8)][_0x3d27bd(0x52f)+'me'][_0x3d27bd(0x3a1)+_0x3d27bd(0x699)+'in']({'name':_0x1cde62[_0x3d27bd(0x666)],'version':'1.0.0','referencedAssemblies':[_0x3d27bd(0x2f0)+_0x3d27bd(0xf7)+'Sharp'+'.dll',_0x1cde62[_0x3d27bd(0x470)]]}),_0x3d933a(_0x3d27bd(0xe1),'plugi'+'n\x20Sak'+_0x3d27bd(0x11d)+'2\x20cre'+_0x3d27bd(0x188)+'—\x20hoo'+_0x3d27bd(0x317)+_0x3d27bd(0x39c)+'solve'+'\x20when'+_0x3d27bd(0xfd)+'WASM\x20'+_0x3d27bd(0x25f)+_0x3d27bd(0x27c)+'es');if(_0x110395['hookC'+_0x3d27bd(0x263)+'e'])_0x461611('capLi'+'nker',_0x3d27bd(0x38d)+_0x3d27bd(0x19c)+'rLink'+'er',_0x3d27bd(0x608),[_0x1cde62['wSwsO']],undefined,(_0x4f69f5,_0x29589b)=>{var _0xf0f55d=_0x3d27bd;_0x1cde62[_0xf0f55d(0x635)](!_0x46e327,_0x29589b)&&_0x29589b[_0xf0f55d(0x240)]()&&(_0x46e327=_0x29589b['val'](),_0x461001[_0xf0f55d(0x58f)+'r']=!![],_0x1cde62[_0xf0f55d(0x5b1)](_0x3d933a,_0xf0f55d(0x56f)+'re',_0x1cde62[_0xf0f55d(0x5c3)](_0x1cde62['MWNwe'],_0x745628(_0x46e327))));},!![]);if(_0x110395['hookC'+'aptur'+'e'])_0x461611(_0x3d27bd(0x4fa)+'M','Movem'+_0x3d27bd(0x15a)+'ateMa'+'nager',_0x1cde62[_0x3d27bd(0x67b)],['i32'],undefined,(_0x52b502,_0x18dee3)=>{var _0x167f74=_0x3d27bd;if(_0x1cde62[_0x167f74(0x4a4)](_0x1cde62[_0x167f74(0xe4)],_0x167f74(0x1ea)))!_0xb40998&&_0x18dee3&&_0x18dee3[_0x167f74(0x240)]()&&(_0x1cde62[_0x167f74(0x134)](_0x1cde62[_0x167f74(0x1db)],'TIvyq')?(_0xb40998=_0x18dee3[_0x167f74(0x240)](),_0x461001['msm']=!![],_0x1cde62['WLTMt'](_0x3d933a,'captu'+'re',_0x1cde62[_0x167f74(0x596)]('Movem'+'entSt'+_0x167f74(0x141)+'nager'+'\x20@',_0x745628(_0xb40998)))):(_0x3b0e8d=_0x7638b6,_0x30f9de['state']=!![]));else try{var _0x2fa741=new _0x220baa(_0x484a9f)['readF'+_0x167f74(0x4e5)](_0x5e46ad,_0x167f74(0x661));return _0x2fa741?_0x2fa741[_0x167f74(0x240)]():-0x1*0x191b+0xb1d*-0x1+0x2438;}catch(_0x2d8a6c){return 0x1905+-0x25bf+0xb5*0x12;}},!![]);if(_0x110395['hookC'+'aptur'+'e'])_0x461611(_0x3d27bd(0x128)+_0x3d27bd(0x690)+'rm','ColyT'+_0x3d27bd(0x349)+'orm',_0x1cde62[_0x3d27bd(0x593)],[_0x3d27bd(0x40b)],undefined,(_0x3e7190,_0x1f6bbf)=>{var _0x4f1906=_0x3d27bd;_0x1f6bbf&&_0x1f6bbf[_0x4f1906(0x240)]()&&(_0x5dd997=_0x1f6bbf[_0x4f1906(0x240)](),_0x461001[_0x4f1906(0x3e6)+_0x4f1906(0x674)+_0x4f1906(0x14e)]=!![],_0x3d933a(_0x4f1906(0x56f)+'re',_0x1cde62[_0x4f1906(0x596)](_0x4f1906(0x3e6)+'\x20Coly'+_0x4f1906(0x674)+'form\x20'+'@',_0x1cde62['GHmaY'](_0x745628,_0x5dd997))));},!![]);if(_0x110395[_0x3d27bd(0x41c)+_0x3d27bd(0x263)+'e'])_0x1cde62[_0x3d27bd(0x42b)](_0x461611,_0x1cde62[_0x3d27bd(0x4cc)],_0x1cde62['MNNui'],_0x3d27bd(0x299)+_0x3d27bd(0x147),['i32'],undefined,(_0x535c97,_0x442bb5)=>{var _0xda32d0=_0x3d27bd;!_0x2bffd7&&_0x442bb5&&_0x442bb5[_0xda32d0(0x240)]()&&(_0x2bffd7=_0x442bb5[_0xda32d0(0x240)](),_0x461001['aimMa'+_0xda32d0(0x5cb)]=!![],_0x3d933a('captu'+'re',_0xda32d0(0x52c)+_0xda32d0(0x5cb)+'\x20@'+_0x745628(_0x2bffd7)));},!![]);if(_0x110395[_0x3d27bd(0x660)+_0x3d27bd(0x363)])_0x1cde62[_0x3d27bd(0x42b)](_0x461611,_0x3d27bd(0x326)+'omSet','Netwo'+_0x3d27bd(0x187)+'ager',_0x1cde62[_0x3d27bd(0x507)],[_0x1cde62[_0x3d27bd(0x133)],'i32'],undefined,(_0x531365,_0x2b1f70,_0x13c969)=>{var _0x5e29ee=_0x3d27bd;_0x13c969&&_0x13c969[_0x5e29ee(0x240)]()&&(_0x4fdec8=_0x13c969[_0x5e29ee(0x240)](),_0x461001[_0x5e29ee(0x1b3)]=!![],_0x3d933a('captu'+'re',_0x1cde62[_0x5e29ee(0x5c3)](_0x1cde62[_0x5e29ee(0x30a)],_0x745628(_0x4fdec8))));},!![]);if(_0x110395[_0x3d27bd(0x660)+_0x3d27bd(0x363)])_0x1cde62[_0x3d27bd(0x42b)](_0x461611,_0x3d27bd(0x326)+'omGet','Netwo'+_0x3d27bd(0x187)+_0x3d27bd(0xfe),'get_C'+'urren'+_0x3d27bd(0x17a),[_0x3d27bd(0x40b)],'i32',_0x4755a3=>{var _0x16e739=_0x3d27bd;_0x4755a3&&_0x4755a3['val']()&&(_0x4fdec8=_0x4755a3['val'](),_0x461001['room']=!![],_0x3d933a(_0x1cde62[_0x16e739(0x409)],_0x16e739(0x664)+'(gett'+_0x16e739(0x46b)+_0x16e739(0x2c4)+_0x1cde62['LBqjx'](_0x745628,_0x4fdec8)));},!![]);if(_0x110395['hookS'+_0x3d27bd(0x363)])_0x1cde62[_0x3d27bd(0x67c)](_0x461611,_0x3d27bd(0x2a1)+_0x3d27bd(0x251)+'r',_0x3d27bd(0x2a2)+'Manag'+'er',_0x3d27bd(0x299)+_0x3d27bd(0x147),[_0x3d27bd(0x40b)],undefined,(_0x5513d9,_0x2fc346)=>{var _0x58229f=_0x3d27bd;_0x2fc346&&_0x2fc346[_0x58229f(0x240)]()&&(_0x475533=_0x2fc346[_0x58229f(0x240)](),_0x461001[_0x58229f(0x3fc)+'Mgr']=!![],_0x1cde62[_0x58229f(0x129)](_0x3d933a,_0x1cde62[_0x58229f(0x409)],_0x1cde62[_0x58229f(0x596)](_0x58229f(0x2a2)+'Manag'+'er\x20@',_0x1cde62['nqFhJ'](_0x745628,_0x475533))));},!![]);if(_0x110395[_0x3d27bd(0x660)+_0x3d27bd(0x363)])_0x461611(_0x3d27bd(0x21e)+'awner',_0x3d27bd(0x19c)+'rSpaw'+'ner',_0x1cde62[_0x3d27bd(0x67b)],[_0x3d27bd(0x40b)],undefined,(_0x1fd845,_0x347f2c)=>{var _0x2a045d=_0x3d27bd,_0x51a859={'Bekqx':function(_0x32c925,_0x96287f){return _0x32c925!==_0x96287f;},'dXScx':'aria-'+_0x2a045d(0x502)+'ed','yUtWo':function(_0xf22b56,_0x3f96f0){return _0xf22b56(_0x3f96f0);},'jwGVc':_0x1cde62[_0x2a045d(0x53b)]};if(_0x1cde62[_0x2a045d(0x568)]('gcJbU',_0x1cde62['cdtZK'])){var _0x14f8dd=(_0x2a045d(0xa1)+'|6|4|'+_0x2a045d(0xd0))[_0x2a045d(0x2c1)]('|'),_0x3c1e42=-0x4a*0x3+0x1*-0x1f36+0x2014;while(!![]){switch(_0x14f8dd[_0x3c1e42++]){case'0':_0x154774[_0x2a045d(0x361)+_0x2a045d(0x60f)]=_0x2a045d(0xa8)+'itch';continue;case'1':return _0x154774;case'2':var _0x154774=_0x4f6f7d[_0x2a045d(0x3a1)+_0x2a045d(0x156)+'ent']('butto'+'n');continue;case'3':_0x154774['type']=_0x2a045d(0xcc)+'n';continue;case'4':_0x154774['setAt'+_0x2a045d(0x473)+'te'](_0x51a859[_0x2a045d(0x322)],_0x51a859[_0x2a045d(0x574)](_0x13d889,!!_0x5c8a0b));continue;case'5':_0x154774[_0x2a045d(0x21d)+'ck']=_0x219be1=>{var _0x147d51=_0x2a045d;_0x219be1[_0x147d51(0x31f)+'ropag'+_0x147d51(0x672)]();var _0x33b857=_0x51a859[_0x147d51(0xb4)](_0x154774[_0x147d51(0x1d7)+'tribu'+'te'](_0x147d51(0x29c)+'check'+'ed'),_0x147d51(0x521));_0x154774[_0x147d51(0x155)+_0x147d51(0x473)+'te']('aria-'+_0x147d51(0x502)+'ed',_0x286974(_0x33b857)),_0x5ec26f(_0x33b857);};continue;case'6':_0x154774['setAt'+'tribu'+'te']('role',_0x51a859[_0x2a045d(0x62a)]);continue;}break;}}else _0x347f2c&&_0x347f2c[_0x2a045d(0x240)]()&&(_0x35240f=_0x347f2c['val'](),_0x461001[_0x2a045d(0x67f)+'er']=!![],_0x3d933a(_0x1cde62[_0x2a045d(0x409)],_0x1cde62['Swumu']+_0x745628(_0x35240f)));},!![]);if(_0x110395['hookN'+_0x3d27bd(0x2b1)+'il'])_0x1cde62['YdIRh'](_0x324a7b,'noRec'+'oil',_0x1cde62[_0x3d27bd(0x525)],_0x1cde62[_0x3d27bd(0x1a1)],['i32'],undefined,_0x32b1e1,!!_0x110395[_0x3d27bd(0x691)+_0x3d27bd(0x260)]);}else _0x2cd9dc['healt'+'h']=_0x7f4c98,_0x1cde62['hmzVF'](_0x2d27a2);}else _0x1cde62['SGalF'](_0x3d933a,_0x3d27bd(0xe1),_0x3d27bd(0x123)+(window[_0x3d27bd(0x17c)+_0x3d27bd(0x3c9)+_0x3d27bd(0xb8)]?_0x1cde62['gejtw']:_0x1cde62[_0x3d27bd(0x5e9)])+(_0x110395[_0x3d27bd(0x631)+'ode']?_0x1cde62[_0x3d27bd(0x3ee)]:''));}else{var _0x2ca516=_0x1cde62['EXxdL'][_0x3d27bd(0x2c1)]('|'),_0x260776=0x1*-0xb9+-0x1e41*-0x1+-0x438*0x7;while(!![]){switch(_0x2ca516[_0x260776++]){case'0':var _0x521569=_0x4ada17*(_0x2412a9/(-0x94d*0x3+0x1b43*-0x1+0x378e));continue;case'1':_0x17ed3d[_0x3d27bd(0x189)+'ect'](_0x145917['x']-_0x1cde62[_0x3d27bd(0x4b9)](_0x23fd74,0x26a2+0xb02+-0x31a2*0x1),_0x2f0d20-(-0x101e*-0x2+-0x1*-0x95a+0x130*-0x23),_0x521569,0x2707*0x1+-0x2615+0xee*-0x1);continue;case'2':_0x35e84f[_0x3d27bd(0x30d)+_0x3d27bd(0x646)+'e']=_0x3d27bd(0x4c9)+_0x3d27bd(0x69c)+_0x3d27bd(0x143);continue;case'3':_0x2cfdf8[_0x3d27bd(0x175)+_0x3d27bd(0x5b2)]=-0x117c+0x238e+-0x19*0xb9;continue;case'4':var _0x2412a9=_0x1d1fc2[_0x3d27bd(0x3c6)](-0x1c7c+-0x1e35+0x3ab1,_0x2aac38[_0x3d27bd(0x3b1)](0x6d*0x23+0x1acc+-0x2d*0xeb,_0x1cde62['nXHTF'](_0xeb13ad['healt'+'h'],_0x5c0936['shiel'+'d'])));continue;case'5':_0x291b10[_0x3d27bd(0x30d)+'eRect'](_0x1cde62[_0x3d27bd(0x1c8)](_0x3da25c['x'],_0x5830ba/(0x344+-0x1*0x29+-0x319)),_0x48f268-(-0x185f+0x2456*-0x1+0x3cbb),_0x281dbe,0x49*-0x55+-0x32*0x1f+-0x1e4f*-0x1);continue;case'6':_0x3d709a['fillS'+'tyle']=_0x3d27bd(0x4c9)+_0x3d27bd(0x592)+_0x3d27bd(0x25c)+_0x3d27bd(0x230);continue;}break;}}}catch(_0x3572a6){_0x461001['lastE'+_0x3d27bd(0x66d)]=_0x3d27bd(0x123)+'init:'+'\x20'+(_0x3572a6&&_0x3572a6['messa'+'ge']||_0x3572a6),_0x1cde62[_0x3d27bd(0xdb)](_0x3d933a,_0x3d27bd(0xe1),_0x1cde62['tGcEp'](_0x3d27bd(0x157)+'FAILE'+_0x3d27bd(0x5a3),_0x461001[_0x3d27bd(0x37a)+'rror']));}function _0x58e8ce(_0x2565ad,_0x3ea87f){var _0x1a7072=_0x3d27bd;if(_0x1a7072(0x181)===_0x1cde62[_0x1a7072(0x5f3)])_0x1cde62['LWXBL'](_0x4e02c7,'boot','DOM\x20m'+'ount\x20'+'faile'+'d:\x20'+(_0x192d4e&&_0x56257d['messa'+'ge']));else{var _0x2f6a7e=_0x4430e1[_0x2565ad];if(_0x2f6a7e){if(_0x1cde62[_0x1a7072(0x5bc)]===_0x1cde62[_0x1a7072(0x5bc)])try{_0x2f6a7e[_0x1a7072(0x66f)+'ed']=!!_0x3ea87f;}catch(_0x146469){}else return-0xc+0x2604+-0x25f8;}}}function _0x2dc484(_0x1f238e,_0x519ae9){var _0x20c2f6=_0x3d27bd;try{var _0x9017de=new _0x3e1634(_0x1f238e)['readF'+_0x20c2f6(0x4e5)](_0x519ae9,_0x20c2f6(0x149));return _0x9017de?_0x9017de['val']():0x846+0x73*-0x53+0x1d03;}catch(_0x12679e){if(_0x1cde62[_0x20c2f6(0x4ba)]!==_0x20c2f6(0x25a)){if(_0x3d09ad[_0x336cf1]&&_0x414113[_0x32cb41][_0x20c2f6(0x15b)+'ed'])_0x34a258++;}else return 0x427+0x14*0x2a+-0x76f;}}function _0x32b876(_0x1bf558,_0x42fd81){var _0x5ec85b=_0x3d27bd;try{var _0x346b71=new _0x3e1634(_0x1bf558)[_0x5ec85b(0x4cd)+_0x5ec85b(0x4e5)](_0x42fd81,'i32');return _0x346b71?_0x346b71[_0x5ec85b(0x240)]():0x6f+-0x179d+0x172e;}catch(_0x2eff49){if(_0x1cde62[_0x5ec85b(0x5cd)]===_0x1cde62[_0x5ec85b(0x5cd)])return 0x1c68+0xa*0x5f+0x100f*-0x2;else _0x19ad30[_0x5ec85b(0x5db)+_0x5ec85b(0x3bf)+'e']=_0x5e6914,_0x3f993b();}}function _0x415155(_0x3732a2,_0x5ba999){var _0x5d515c=_0x3d27bd;if(_0x5d515c(0x24f)!=='GInwu')try{if(_0x1cde62[_0x5d515c(0x368)]!=='zWEgl'){var _0x36e3b4=new _0x3e1634(_0x3732a2)[_0x5d515c(0x4cd)+_0x5d515c(0x4e5)](_0x5ba999,_0x5d515c(0x3db));return _0x36e3b4?_0x36e3b4[_0x5d515c(0x240)]():-0x2*-0x2b7+0x5b7*-0x1+-0x1*-0x49;}else{var _0x4468ab=_0x1cde62['Ueqtd'][_0x5d515c(0x2c1)]('|'),_0x47ea30=0x1e79+-0x17a7+0x12*-0x61;while(!![]){switch(_0x4468ab[_0x47ea30++]){case'0':_0x3be986[_0x5d515c(0x288)][_0x5d515c(0x4ce)+'opert'+'y'](_0x5d515c(0xf9),_0x1cde62[_0x5d515c(0x4b5)](_0x1cde62[_0x5d515c(0x40d)](_0x1cde62['lbgqz'](_0x1cde62['LQeua'](_0x321b89,_0x1d5b14),_0x2f33f1-_0x4d8f37),-0x69*-0x16+-0x2398+0x1af6),'%'));continue;case'1':_0x2d608f['class'+_0x5d515c(0x60f)]=_0x1cde62[_0x5d515c(0x1c6)];continue;case'2':_0x3be986['class'+_0x5d515c(0x60f)]=_0x1cde62[_0x5d515c(0x390)];continue;case'3':_0x3be986['appen'+'d'](_0x557650,_0x2d608f);continue;case'4':var _0x289823={'mhxWL':function(_0x3fdd25,_0xf5d5a2){var _0x1745e0=_0x5d515c;return _0x1cde62[_0x1745e0(0x512)](_0x3fdd25,_0xf5d5a2);}};continue;case'5':_0x557650[_0x5d515c(0x361)+_0x5d515c(0x60f)]='sk-sl'+'ider';continue;case'6':_0x557650[_0x5d515c(0x3b1)]=_0x49687c;continue;case'7':var _0x557650=_0x1825ef['creat'+'eElem'+'ent']('input');continue;case'8':_0x557650['step']=_0x2853c0;continue;case'9':_0x2d608f[_0x5d515c(0xce)+'onten'+'t']=_0xa1487d(_0x1f381d)['toFix'+'ed'](0xb07+-0x3*0xb44+0x31*0x77)['repla'+'ce'](/\.?0+$/,'');continue;case'10':var _0x2d608f=_0x162a64[_0x5d515c(0x3a1)+_0x5d515c(0x156)+_0x5d515c(0xee)](_0x5d515c(0x629));continue;case'11':_0x557650[_0x5d515c(0x45f)+'ut']=()=>{var _0x59180a=_0x5d515c;_0x2d608f[_0x59180a(0xce)+'onten'+'t']=_0x289823['mhxWL'](_0x60f98e,_0x557650[_0x59180a(0x68a)])[_0x59180a(0x35e)+'ed'](0xbdd+0x1*-0x571+-0x66a)[_0x59180a(0xbf)+'ce'](/\.?0+$/,''),_0x3be986[_0x59180a(0x288)][_0x59180a(0x4ce)+'opert'+'y']('--p',(_0x557650['value']-_0x1ee9e6)/(_0x4910f6-_0x55d39a)*(0x1c8a+0x2548+-0x416e*0x1)+'%'),_0x4d4b06(_0xe5e335(_0x557650['value']));};continue;case'12':_0x557650[_0x5d515c(0x3c6)]=_0xdc3ed9;continue;case'13':var _0x3be986=_0x5330ce['creat'+'eElem'+'ent'](_0x1cde62[_0x5d515c(0x2cb)]);continue;case'14':_0x557650['type']=_0x1cde62[_0x5d515c(0x130)];continue;case'15':return _0x3be986;case'16':_0x557650['value']=_0x43b9a9;continue;}break;}}}catch(_0x5b18b9){return 0x1a88+-0x21d*0x7+0x259*-0x5;}else{var _0xc9460a=(_0x5d515c(0x3ca)+_0x5d515c(0x28f)+'4')[_0x5d515c(0x2c1)]('|'),_0x126490=-0x1*0x151+-0x95e+0xaaf;while(!![]){switch(_0xc9460a[_0x126490++]){case'0':_0x2d6f28['type']=_0x5d515c(0xcc)+'n';continue;case'1':var _0x2d6f28=_0x140810[_0x5d515c(0x3a1)+_0x5d515c(0x156)+_0x5d515c(0xee)](_0x5d515c(0xcc)+'n');continue;case'2':_0x2d6f28['textC'+_0x5d515c(0x28e)+'t']=_0x56108a;continue;case'3':_0x2d6f28['style'][_0x5d515c(0x418)+'xt']=_0x1cde62['OHLUb'];continue;case'4':return _0x2d6f28;case'5':_0x2d6f28['oncli'+'ck']=_0x1da033=>{var _0x31981d=_0x5d515c;_0x1da033[_0x31981d(0x31f)+_0x31981d(0xd8)+_0x31981d(0x672)](),_0x5d4c4f();};continue;}break;}}}function _0x31e874(_0x3d8638,_0x5899b6){var _0x2968db=_0x3d27bd;if(_0x1cde62['juMbN']('qFebo',_0x2968db(0x617))){var _0x2258df=_0x11a1dc[_0x2968db(0x3a1)+_0x2968db(0x156)+_0x2968db(0xee)](_0x2968db(0x629));return _0x2258df['setAt'+'tribu'+'te'](_0x1cde62[_0x2968db(0x2fa)],_0x1cde62[_0x2968db(0x2b0)]),_0x2258df[_0x2968db(0x16b)+_0x2968db(0x637)]='<svg\x20'+'viewB'+_0x2968db(0x528)+'\x200\x2024'+_0x2968db(0x313)+_0x37c8b5+('</svg'+'>'),_0x2258df;}else try{var _0x3ff713=new _0x3e1634(_0x3d8638)['readF'+_0x2968db(0x4e5)](_0x5899b6,'u8');return _0x3ff713?_0x3ff713[_0x2968db(0x240)]():0x5*-0xf5+-0x7*0x587+0x2b7a;}catch(_0x14fa95){if(_0x1cde62[_0x2968db(0x4bd)](_0x1cde62[_0x2968db(0x2da)],_0x1cde62['BdtZo']))return 0x1*-0x7a7+0x1eb7+-0x1710;else _0x5396a7[_0x2968db(0x66f)+'ed']=!!_0x411136;}}function _0x5d09a6(_0x215def,_0xfc8511){try{var _0x3e8812=new _0x3e1634(_0x215def)['readF'+'ield'](_0xfc8511,'i8');return _0x3e8812?_0x3e8812['val']():0x13d4+-0x25bb+0x11e7;}catch(_0x3ca087){return 0x30*0x7a+-0x5*0x1ca+0x2*-0x6f7;}}function _0x554e84(_0x4331ef,_0x14dfac){var _0xaa7c8c=_0x3d27bd;if(_0x1cde62['NlxZV']===_0x1cde62[_0xaa7c8c(0xa4)])try{var _0x421b2e=new _0x3e1634(_0x4331ef)['readF'+_0xaa7c8c(0x4e5)](_0x14dfac,'f32');return _0x421b2e?_0x421b2e['val']():0x1930+-0x55a+0x9eb*-0x2;}catch(_0xba0b35){return 0x1e2*0x13+0x1*0x2498+0x1*-0x485e;}else _0x250fa7['assig'+'n'](_0x47810e,_0x38ecce['parse'](_0x162a94[_0xaa7c8c(0x489)+'em']('sakur'+_0xaa7c8c(0x172)+'.v1')||'{}'));}function _0x14532b(_0xc54935,_0x39f793){return _0x2dc484(_0xc54935,_0x39f793);}function _0x4aa00b(_0x61d5b3,_0x22e20b){var _0x9dfff4=_0x3d27bd;return{'x':_0x554e84(_0x61d5b3,_0x22e20b),'y':_0x554e84(_0x61d5b3,_0x1cde62['pDbPT'](_0x22e20b,0x5*0x205+-0xe74+-0x1*-0x45f)),'z':_0x1cde62[_0x9dfff4(0x29f)](_0x554e84,_0x61d5b3,_0x1cde62['UwVJH'](_0x22e20b,0x2*0x2cc+0x1*0x83e+-0x3*0x49a))};}function _0x1cf910(_0x56c569,_0x322f48){var _0x46d1d3=_0x3d27bd;if(_0x1cde62['eqYaM'](_0x46d1d3(0x3af),_0x46d1d3(0x472))){if(!_0x56c569)return null;try{var _0x30a3da=_0x32b876(_0x56c569,0x7*0x321+-0x4*0x6be+-0x1d*-0x2d);if(_0x30a3da<=0x3*0x19c+-0xe8f*-0x2+0x6ca*-0x5||_0x30a3da>(_0x322f48||0x21a6*-0x1+0x1caf+0x537))return null;var _0x42fdb2=window[_0x46d1d3(0x17c)+_0x46d1d3(0x3c9)+'dkit'][_0x46d1d3(0x52f)+'me']['memor'+'y'](_0x56c569+(0x26b4+-0x29*-0x86+-0xbe*0x51),_0x30a3da*(0x81*0x3b+0x21c7*0x1+-0x8*0x7f0)),_0xeffd5d='';for(var _0x5cc27b=0x2221+-0x19*0x17d+0x314;_0x5cc27b<_0x30a3da;_0x5cc27b++){var _0x116eba=_0x42fdb2[_0x1cde62[_0x46d1d3(0x526)](_0x5cc27b,0xcb*0x1f+-0x1548*-0x1+0x15*-0x22f)]|_0x42fdb2[_0x5cc27b*(0x6ca+-0x851+0x189)+(0x269*-0x7+-0x10ad+-0x218d*-0x1)]<<0x1660+0x53*0x10+-0x371*0x8;if(_0x116eba===0x75f+-0x2*-0x127+-0x1*0x9ad)break;_0xeffd5d+=String['fromC'+_0x46d1d3(0x1a2)+'de'](_0x116eba);}return _0xeffd5d;}catch(_0x450028){return null;}}else{for(var _0x3f6265 in _0x4b97a3)_0x5e4f57(_0x3f6265,![]);}}function _0x105139(_0x2b1846){var _0x29a1a5=_0x3d27bd,_0x465169={'mZeNn':function(_0x44a7df){var _0x2062d3=_0x3c10;return _0x1cde62[_0x2062d3(0x182)](_0x44a7df);}};if(_0x1cde62['LdJLl']===_0x1cde62['VJEmE']){var _0x282414=_0x465169[_0x29a1a5(0x99)](_0x2dcb9b);_0x282414&&(_0x5af53d=_0x282414,_0x3c2d8b['state']=!![]);}else return _0x2b1846?_0x2dc484(_0x2b1846,-0x6f*-0xf+0x18fc+-0x3*0xa7b):-0x11c*0x1d+-0x2*-0x1205+-0x37*0x12;}function _0x1eca7c(_0x427d4d,_0x49bfc3){return _0x427d4d?_0x2dc484(_0x427d4d,0x1990+-0x193+0x4c9*-0x5+_0x49bfc3*(0x900+-0xa6*0xa+-0x280)):0x720+0x183+-0x1*0x8a3;}function _0x1e1616(_0x5eb9df,_0x1795cf){var _0x5a335b=_0x3d27bd,_0x179e08={'BleEY':_0x5a335b(0x1aa),'zXxQE':function(_0x519e57,_0x1df831){return _0x519e57+_0x1df831;},'IUrKl':function(_0xbd8cf7,_0x2651ce){return _0x1cde62['ToYkI'](_0xbd8cf7,_0x2651ce);},'bPAyK':function(_0x3f2667,_0x4c1b9a){return _0x1cde62['ToYkI'](_0x3f2667,_0x4c1b9a);},'dVhCU':_0x1cde62[_0x5a335b(0x564)],'RhNcR':'\x20enab'+_0x5a335b(0x5ba)};if(!_0x5eb9df)return null;for(var _0x40e4f1=0x1*0x4b6+0x1a50+-0x1f06;_0x40e4f1<=-0x253f+-0xeab+-0x121*-0x2e;_0x40e4f1+=-0xba2*0x1+-0x1c64+-0xcd*-0x32){if(_0x1cde62['Nepoo'](_0x5a335b(0x459),_0x1cde62['urioW'])){var _0x5487b1=_0x1cde62[_0x5a335b(0x1d5)](_0x2dc484,_0x5eb9df,0x44f*0x1+0x1433+-0x1876+_0x40e4f1),_0x3449df=_0x1cde62[_0x5a335b(0x29f)](_0x32b876,_0x5eb9df,-0x1*0x684+0x1d4b+-0x16b7*0x1+_0x40e4f1);if(_0x5487b1&&_0x3449df>=-0xdfb*-0x2+0x18d9+-0x34cf&&_0x1cde62[_0x5a335b(0x3fe)](_0x3449df,_0x1cde62['cVxwZ'](_0x1795cf,0x16*0xf5+0x31c*0x2+-0x1b06)))return{'entries':_0x5487b1,'count':_0x3449df,'shift':_0x40e4f1};}else{var _0xfecb34=_0x897246['hookP'+_0x5a335b(0x3e3)+'x']({'typeName':_0x2cd9e3,'methodName':_0x2465d0,'params':_0x467f8b,'returnType':_0x141765},_0x56b4c3);return _0xfecb34[_0x5a335b(0x66f)+'ed']=_0x17e5f4!==![],_0x2bdab0[_0x2148c7]=_0xfecb34,_0x32bd13['hooks'+_0x5a335b(0x550)]++,_0x55fc37(_0x179e08['BleEY'],_0x179e08['zXxQE'](_0x179e08[_0x5a335b(0x451)](_0x179e08['IUrKl'](_0x179e08[_0x5a335b(0x209)](_0x239ffb+_0x179e08['dVhCU']+_0x4edafb+'::',_0x4d33a2)+'(',_0x47e81f[_0x5a335b(0x633)](','))+')',_0x4224bf?'\x20->\x20'+_0x248c54:'')+_0x179e08[_0x5a335b(0x168)],_0xfecb34[_0x5a335b(0x66f)+'ed'])),_0xfecb34;}}return null;}function _0x4151b1(_0x4a5725,_0x1c7a15){var _0x52132c=_0x3d27bd;if('odbTk'!==_0x52132c(0x651))_0x39b7ab=_0x303262,_0x17c531[_0x52132c(0x1b3)]=!![],_0x1cde62['WLTMt'](_0x1a708f,_0x52132c(0x56f)+'re',_0x52132c(0x664)+'(Piec'+'eMana'+_0x52132c(0x3f3)+_0x52132c(0x4e0)+_0x52132c(0x257)+_0x52132c(0x320)+'@'+_0x1cde62['nqFhJ'](_0x23ab1e,_0x36bdf6));else{var _0x5df725=_0x1e1616(_0x4a5725,_0x1c7a15);if(!_0x5df725)return[];var _0x79b4e=[];for(var _0x18d32c=-0xef*0x1c+0x1a03+0x3*0xb;_0x1cde62['movgG'](_0x18d32c,_0x5df725['count']);_0x18d32c++){if(_0x1cde62['nAcWn'](_0x1cde62['fZiFk'],_0x52132c(0x16e)))_0x1f62a8[_0x52132c(0x527)+_0x52132c(0x2b1)+'il']=_0x13aa14,_0x51e148();else{var _0x277d3d=-0x1*-0x48e+-0x958+0x4da+_0x18d32c*(0x1*0x1b91+0x1eca+-0x3a4b);if(_0x1cde62[_0x52132c(0x4c1)](_0x32b876(_0x5df725[_0x52132c(0x255)+'es'],_0x277d3d),-0x7*-0x577+-0x2648+0x7))continue;_0x79b4e['push'](_0x2dc484(_0x5df725['entri'+'es'],_0x1cde62[_0x52132c(0x388)](_0x277d3d,0x26c2+0x1*-0x2e7+0x59*-0x67)));}}return _0x79b4e;}}function _0x49e861(_0x293a9b){var _0x6406e6=_0x3d27bd;try{return new _0x3e1634(_0x293a9b)['getCl'+_0x6406e6(0x396)+'me']();}catch(_0x9b9cb1){return null;}}function _0x190463(_0x5bb169,_0x39f171){var _0x346a79=_0x3d27bd,_0x7ffc16=_0x14532b(_0x5bb169,0x1b59*0x1+-0x1639+-0x4f8),_0x2bff02=Math[_0x346a79(0x3b1)](_0x1cde62[_0x346a79(0x267)](_0x105139,_0x7ffc16),-0xa10+-0x2613+0x3043);for(var _0x30c1fb=-0x2082+-0x50f+0x3b*0xa3;_0x30c1fb<_0x2bff02;_0x30c1fb++){var _0x37f795=_0x1eca7c(_0x7ffc16,_0x30c1fb);if(!_0x37f795)continue;if(_0x49e861(_0x37f795)===_0x39f171)return _0x37f795;}return-0x2153+-0x1557+-0x2*-0x1b55;}function _0x143f37(_0xfead78,_0x3659e2){var _0x309696=_0x3d27bd;if(!_0xfead78)return null;for(var _0x2bf74b of[0xf8d*-0x2+0x1*-0x18a2+0x1*0x37c4,0x4ba*0x2+-0xa63*0x1+-0xfb*-0x1,0x1e2*-0xa+0x5*-0x757+-0x3797*-0x1,0x94b+0x13a+-0x63*0x1b]){if(_0x1cde62['qwAaf']!==_0x309696(0x23a))try{var _0x533a6e=new _0x40808d(_0x2b62af)['readF'+_0x309696(0x4e5)](_0x5466b2,'u8');return _0x533a6e?_0x533a6e[_0x309696(0x240)]():0x40*0x71+-0x38f*-0x7+-0x3529;}catch(_0x9fd857){return 0x3*0x577+0x1d6b+0xb74*-0x4;}else{var _0x3f0045=_0x1e1616(_0x1cde62['HIQRx'](_0x2dc484,_0xfead78,_0x2bf74b),_0x3659e2);if(_0x3f0045)return _0x3f0045;}}return null;}var _0x405b82=![];function _0x347881(){var _0x1bf392=_0x3d27bd;if(_0x1bf392(0x3e5)===_0x1cde62[_0x1bf392(0x48b)]){var _0x5da855=(_0x1bf392(0x2e6)+'|3|6|'+_0x1bf392(0x12b)+'|4')[_0x1bf392(0x2c1)]('|'),_0x2cf2d9=0x1*0x18d2+-0xf81+-0x951;while(!![]){switch(_0x5da855[_0x2cf2d9++]){case'0':var _0x541011=_0x143f37(_0x165c63,0x166c+-0x143a+0x3*-0xa6);continue;case'1':if(!_0x4fdec8)return 0xf3c+0x164c+-0x2588;continue;case'2':!_0x405b82&&(_0x405b82=!![],_0x1cde62['HIQRx'](_0x3d933a,_0x1bf392(0x1b0),_0x1cde62['GcUmU'](_0x1cde62[_0x1bf392(0x4a1)](_0x1cde62[_0x1bf392(0x287)]+_0x745628(_0x2424f3)+(_0x1bf392(0x153)+'ers@')+_0x745628(_0x165c63)+(_0x1bf392(0x282)+'ut-sh'+_0x1bf392(0x200))+_0x541011[_0x1bf392(0xd4)],'\x20coun'+'t='),_0x541011[_0x1bf392(0x679)])));continue;case'3':var _0x165c63=_0x1cde62[_0x1bf392(0x185)](_0x14532b,_0x2424f3,-0xe22+0x13d7+-0x1*0x5a5);continue;case'4':return _0x2424f3;case'5':if(!_0x2424f3)return!_0x405b82&&(_0x405b82=!![],_0x3d933a('state',_0x1cde62['peXLt'](_0x1bf392(0x595),_0x1cde62['GHmaY'](_0x745628,_0x4fdec8))+_0x1cde62[_0x1bf392(0x607)])),-0xb*-0x129+0x13e9+0x6*-0x572;continue;case'6':if(!_0x165c63)return!_0x405b82&&(_0x405b82=!![],_0x3d933a(_0x1bf392(0x1b0),'state'+'@'+_0x1cde62['ihVgV'](_0x745628,_0x2424f3)+_0x1cde62[_0x1bf392(0x339)])),0x6*-0xe4+0xa*-0x317+-0x243e*-0x1;continue;case'7':var _0x2424f3=_0x14532b(_0x4fdec8,0x1*-0xe25+-0x8d9+0x170e);continue;case'8':if(!_0x541011)return!_0x405b82&&(_0x405b82=!![],_0x1cde62[_0x1bf392(0x24e)](_0x3d933a,_0x1bf392(0x1b0),_0x1cde62[_0x1bf392(0x2ce)](_0x1cde62[_0x1bf392(0x352)](_0x1bf392(0x4e3)+_0x1bf392(0x400)+_0x1bf392(0x69b)+_0x1bf392(0xc5),_0x745628(_0x165c63)),_0x1cde62[_0x1bf392(0x5ea)]))),0x1*-0x1bd+0x3a8*-0x6+0x17ad;continue;}break;}}else try{var _0x207813=_0x14d2e2['log'];(function(_0x32f1bb){var _0x54152a=_0x1bf392;for(var _0x4d752=-0x73+-0x127c+0x12ef;_0x4d752<_0x32f1bb[_0x54152a(0x113)+'h'];_0x4d752++)_0x207813['call'](_0x30603c,_0x32f1bb[_0x4d752]);}(_0x5d4a96()[_0x1bf392(0x2c1)]('\x0a')));}catch(_0x27e18b){}}function _0x160cfa(){var _0xa79df7=_0x3d27bd,_0x1606e7=[];if(!_0x33ae77)return _0x1606e7;var _0x43f3ba=_0x14532b(_0x33ae77,0x96d*-0x1+-0x1c9*-0x13+-0x186e),_0x2eeaa4=_0x14532b(_0x43f3ba,0x9df+-0x3*0x651+0x924),_0x3136c0=_0x1cde62[_0xa79df7(0x599)](_0x4151b1,_0x2eeaa4,0x234f+0x6d*-0x4+0x215b*-0x1);for(var _0x412970=0x1f93+-0x1*-0xe88+-0x2e1b;_0x412970<_0x3136c0['lengt'+'h'];_0x412970++){if('IlXAn'===_0xa79df7(0x32f)){var _0x25c3af=new _0x215de1(_0x32c945)['readF'+_0xa79df7(0x4e5)](_0x107f86,_0x115f26);_0x5d9681['set'](_0x2d3704,_0x25c3af!==_0x8b4d52?_0x25c3af['val']():null);}else{var _0x32d8a7=_0x3136c0[_0x412970];if(!_0x32d8a7)continue;var _0x996c65=_0x14532b(_0x32d8a7,0x3*0x20e+0x17c+0x1*-0x776);if(!_0x996c65)continue;var _0x2eec08=_0x14532b(_0x996c65,-0x301*-0x1+-0x2037+-0x6*-0x4e1);if(!_0x2eec08)continue;_0x1606e7[_0xa79df7(0x9a)]({'ptr':_0x32d8a7,'playerId':_0x1cf910(_0x14532b(_0x32d8a7,0xd36+-0x140*0x6+-0x5a6),-0x326*-0x9+0x20e9+-0x3cff),'nickname':_0x1cf910(_0x1cde62['GOYqe'](_0x14532b,_0x32d8a7,-0x2*0x1251+-0x2*0xb71+0xee6*0x4),-0x2401*-0x1+0x9e0+0xdd*-0x35),'health':_0x1cde62['uXbJA'](_0x415155,_0x32d8a7,-0xafb+0xcdd+-0x1ae),'shield':_0x31e874(_0x32d8a7,0x1061*-0x1+-0x1c96+0x2d2d*0x1),'team':_0x5d09a6(_0x32d8a7,0xd1*-0x29+-0x2*-0xd15+0x792),'aiming':_0x31e874(_0x32d8a7,0x1*-0x14+-0x2d1+-0x49*-0xb)!==0x2673+0x20ac+-0x471f,'crouching':_0x31e874(_0x32d8a7,0x25*0xad+-0x1c0+-0x1704)!==-0xc7d*-0x1+-0x198+-0xae5,'pos':{'x':_0x554e84(_0x2eec08,0x5a3+-0x68*-0x8+-0x8d3),'y':_0x1cde62[_0xa79df7(0x455)](_0x554e84,_0x2eec08,0x21a4+0x482*0x1+-0x2612),'z':_0x1cde62['uMooR'](_0x554e84,_0x2eec08,0x11*-0x20a+-0x925+0x2be7)},'isAlive':_0x31e874(_0x32d8a7,-0x2*-0xef5+0x406*0x9+-0x41bc)!==-0x3*-0x1d9+-0x1533+0xfa8});}}return _0x1606e7;}function _0xe9b5c1(){var _0x4d89af=_0x3d27bd,_0x2dfc7c={'uJYZY':'Copy\x20'+_0x4d89af(0x446),'jyifm':_0x4d89af(0x3f1),'ZTFMK':function(_0x3e94b1,_0x42af29,_0x459717){return _0x3e94b1(_0x42af29,_0x459717);}},_0x50280b=_0x160cfa();if(_0x50280b[_0x4d89af(0x113)+'h']||!_0x35240f)return _0x50280b;var _0x281b70=_0x4151b1(_0x1cde62['ZkWWo'](_0x14532b,_0x35240f,0x45*0x54+0x233f+-0x39d3),-0x3cb*0x4+0x23b*0x1+0xd31);for(var _0x465099=0x9d5*-0x2+-0x703*0x1+-0x1aad*-0x1;_0x465099<_0x281b70[_0x4d89af(0x113)+'h'];_0x465099++){if('pZzkv'!==_0x4d89af(0x1a4)){var _0x4fadcb=_0x281b70[_0x465099];if(!_0x4fadcb)continue;var _0x39b2c3=_0x14532b(_0x4fadcb,0x118d+-0x1e*-0x140+-0x36e9);if(!_0x39b2c3)continue;var _0xe9893b=_0x1cde62[_0x4d89af(0x25b)](_0x14532b,_0x39b2c3,-0x1448+0x1454+0x24);if(!_0xe9893b)continue;var _0x523d7a=_0x14532b(_0xe9893b,0x45e+-0x5*0x11b+0x139);if(!_0x523d7a)continue;_0x50280b[_0x4d89af(0x9a)]({'ptr':_0x39b2c3,'playerId':_0x1cde62['CEQQC'](_0x1cf910,_0x14532b(_0x39b2c3,0x21a*-0x3+-0x141e+-0x3*-0x8d4),-0x3e6+0x6*0x17+0xc*0x4d),'nickname':_0x1cf910(_0x14532b(_0x39b2c3,0xb84+0x9*-0x3d3+0x16fb),-0x24e1+0x31*-0x3d+0x30ae),'health':_0x415155(_0x39b2c3,0x3*-0xc69+-0x47*-0x1a+-0x1*-0x1e39),'shield':_0x1cde62['Lcozu'](_0x31e874,_0x39b2c3,-0x1dbd+-0x69*-0x1d+0x120e),'team':_0x1cde62['INFfl'](_0x5d09a6,_0x39b2c3,0x1df9+-0x7*-0x137+-0x2637),'aiming':_0x31e874(_0x39b2c3,0x2a1+-0x8*-0x33b+0x969*-0x3)!==0x18f7*0x1+-0x54d*0x7+0xc24,'crouching':_0x1cde62[_0x4d89af(0x5fa)](_0x1cde62[_0x4d89af(0x583)](_0x31e874,_0x39b2c3,-0x2160+-0x96b+0x2b08),-0x77a*0x1+0x4*0x660+0x3*-0x602),'pos':{'x':_0x554e84(_0x523d7a,-0x29*-0xeb+0x20b5+-0x4648),'y':_0x1cde62['INFfl'](_0x554e84,_0x523d7a,-0x214d+-0x2ec+0x244d*0x1),'z':_0x554e84(_0x523d7a,-0x332*-0x9+0x17d*0x4+0x15*-0x1a6)},'isAlive':_0x31e874(_0x39b2c3,-0x1c3d+0x1*0x3df+0x2*0xc61)!==0x1a0c+-0x8*-0x269+-0x2d54});}else{var _0xc20f5b={'GXFgq':_0x2dfc7c[_0x4d89af(0x435)]};_0x3f1fd1[_0x4d89af(0x452)+'t'](),_0x49bd6a[_0x4d89af(0x5d2)+_0x4d89af(0x44d)+'d'](_0x2dfc7c[_0x4d89af(0x42e)]),_0x40eaab['textC'+_0x4d89af(0x28e)+'t']=_0x4d89af(0xcd)+'d\x20✓',_0x2dfc7c[_0x4d89af(0x223)](_0x557752,function(){var _0x1069b2=_0x4d89af;_0x574b9c['textC'+_0x1069b2(0x28e)+'t']=_0xc20f5b['GXFgq'];},0xdd1+0x4*-0x4de+0xb83);}}return _0x50280b;}var _0x220f38={};function _0x25989f(_0x1c5306,_0x1e08e5){var _0x2fe402=_0x3d27bd;if(_0x1cde62[_0x2fe402(0x4d0)]!==_0x2fe402(0xac))!_0x220f38[_0x1c5306]&&(_0x220f38[_0x1c5306]=!![],_0x3d933a(_0x1cde62[_0x2fe402(0x409)],_0x1e08e5));else try{if(!_0x5f0de0[_0x2fe402(0x689)]['conta'+'ins'](_0x506595))_0x551cca[_0x2fe402(0x689)][_0x2fe402(0x356)+_0x2fe402(0x5af)+'d'](_0x2c5ea5);_0x169ecc[_0x2fe402(0x689)]['appen'+_0x2fe402(0x5af)+'d'](_0x33d187),_0x3bf80e[_0x2fe402(0x689)][_0x2fe402(0x356)+_0x2fe402(0x5af)+'d'](_0x250a18),_0x1cde62[_0x2fe402(0x5b1)](_0x37bb91,'boot',_0x1cde62[_0x2fe402(0x23b)]);}catch(_0x59139d){_0x28558f(_0x1cde62[_0x2fe402(0x67e)],'DOM\x20m'+_0x2fe402(0x476)+_0x2fe402(0x210)+'d:\x20'+(_0x59139d&&_0x59139d[_0x2fe402(0x547)+'ge']));}}function _0x5a1e22(){var _0x25f760=_0x3d27bd;if(_0x46e327&&!_0xb40998)_0xb40998=_0x1cde62[_0x25f760(0xdb)](_0x14532b,_0x46e327,0xd42+-0x2199+-0x1473*-0x1);if(_0x1cde62[_0x25f760(0x425)](_0xb40998,!_0xe7a3c5))_0xe7a3c5=_0x1cde62[_0x25f760(0x3d9)](_0x14532b,_0xb40998,-0x4da+0x9*-0x5d+-0x1a3*-0x5);if(_0xb40998&&!_0x5dd997)_0x5dd997=_0x1cde62['zsaeb'](_0x14532b,_0xb40998,-0x16da+-0x1864+0x2f52);if(_0x46e327&&!_0x5560b4)_0x5560b4=_0x14532b(_0x46e327,0xd21*0x1+0x1*-0x172f+0xa3a);if(_0x46e327&&!_0x461001[_0x25f760(0x9c)+'Camer'+'a'])_0x461001[_0x25f760(0x9c)+'Camer'+'a']=_0x14532b(_0x46e327,-0x17dc+0xbc*-0x2e+-0x56*-0xac);if(_0xe7a3c5&&!_0xb09c6d[_0x25f760(0x113)+'h']){var _0x3e428a=_0x14532b(_0xe7a3c5,0x4df+-0x8c5*0x2+0xcd3),_0x578708=Math['min'](_0x105139(_0x3e428a),0x21cf+0x4bf+-0x1*0x266e);for(var _0x216547=0x1*0x3b9+-0x1894+0x1*0x14db;_0x216547<_0x578708;_0x216547++){if(_0x25f760(0x51a)!==_0x25f760(0x10e)){var _0x254222=_0x1cde62['irbzj'](_0x1eca7c,_0x3e428a,_0x216547);if(_0x254222)_0xb09c6d['push'](_0x254222);}else return _0x1cde62[_0x25f760(0x185)](_0xb3d79e,_0x5d8d12,_0x16776);}_0x1cde62[_0x25f760(0x56e)](_0x25989f,_0x1cde62['LZFyV'],_0x1cde62[_0x25f760(0x57b)](_0x1cde62['SWAKP']('local'+_0x25f760(0x50f)+_0x25f760(0x4f2)+'@'+_0x745628(_0xe7a3c5)+_0x25f760(0x615),_0xb09c6d['lengt'+'h']),_0x25f760(0x20a)+'onent'+_0x25f760(0x2f4)+_0x25f760(0x50c)));}if(_0xe7a3c5&&!_0x5ec0ef){_0x5ec0ef=_0x1cde62[_0x25f760(0x598)](_0x190463,_0xe7a3c5,'ColyM'+'oveme'+_0x25f760(0x590)+_0x25f760(0x40c)+'er');if(_0x5ec0ef)_0x25989f('ctrl',_0x1cde62['GcUmU'](_0x25f760(0x3e6)+_0x25f760(0x50f)+'Movem'+_0x25f760(0x43a)+'ntrol'+_0x25f760(0x58c),_0x745628(_0x5ec0ef)));}if(_0xe7a3c5&&!_0x109565){_0x109565=_0x190463(_0xe7a3c5,_0x25f760(0x49f)+_0x25f760(0x45c)+'r');if(_0x109565)_0x25989f(_0x1cde62[_0x25f760(0x26a)],_0x1cde62[_0x25f760(0x2ce)]('local'+'\x20Coly'+_0x25f760(0x2c9)+_0x25f760(0xc6),_0x745628(_0x109565)));}if(_0x475533&&!_0x4fdec8){var _0x5bfd72=_0x14532b(_0x475533,-0x269c+-0x2*-0x6d3+0x1912);if(_0x5bfd72){if(_0x1cde62['XxKjh']==='DwWeY')_0x4fdec8=_0x5bfd72,_0x461001[_0x25f760(0x1b3)]=!![],_0x3d933a(_0x25f760(0x56f)+'re',_0x1cde62[_0x25f760(0x57b)]('room\x20'+_0x25f760(0x395)+_0x25f760(0x100)+_0x25f760(0x3f3)+_0x25f760(0x4e0)+_0x25f760(0x257)+'oom)\x20'+'@',_0x745628(_0x4fdec8)));else return!_0x51ff32&&(_0x39b2d6=!![],_0x34c8b3(_0x25f760(0x1b0),_0x1cde62['ugBWg'](_0x1cde62[_0x25f760(0x3ac)]('state'+'@',_0xe5d001(_0x72684f)),'\x20+0x1'+'0\x20(pl'+'ayers'+_0x25f760(0x19b)+'null\x20'+_0x25f760(0x4df)+'\x20a\x20My'+_0x25f760(0x12f)+'tate?'))),-0x3*0x421+0xddb*-0x1+-0xd1f*-0x2;}}if(_0x1cde62[_0x25f760(0x635)](_0x4fdec8,!_0x33ae77)){var _0x35a666=_0x347881();_0x35a666&&(_0x33ae77=_0x35a666,_0x461001[_0x25f760(0x1b0)]=!![]);}}function _0x3e75ae(){var _0x50be0e=_0x3d27bd;if(_0x50be0e(0x5a7)===_0x1cde62[_0x50be0e(0x466)])try{return new _0x1db420(_0x3fa10d)[_0x50be0e(0x13f)+_0x50be0e(0x396)+'me']();}catch(_0x659915){return null;}else{if(!_0x5dd997)return null;var _0x256879=_0x1cde62[_0x50be0e(0x3e4)](_0x4aa00b,_0x5dd997,0x1c7c+0x3a1*0x7+-0x35bf);if(!_0x256879||_0x256879['x']===0x154*-0x9+-0xd16+-0x281*-0xa&&_0x256879['y']===0x3*-0x7b+-0x1d23*0x1+0x1e94&&_0x1cde62['UkExS'](_0x256879['z'],-0x7af+-0x37+-0x7e6*-0x1))return null;return{'x':_0x256879['x'],'y':_0x1cde62[_0x50be0e(0x103)](_0x256879['y'],_0x1cde62['ihVgV'](Number,_0x110395['camHe'+'ight'])||0x9*0x2cf+-0x161f+-0x327+0.6000000000000001),'z':_0x256879['z']};}}function _0x3f0e0e(){var _0x3d2df3=_0x3d27bd;if(_0x3d2df3(0x43b)===_0x1cde62['HnOIa']){if(!_0x5560b4)return null;var _0x429cb6=_0x554e84(_0x5560b4,0x10*-0x1d7+0x1925+0x45b),_0x5b32ce=_0x554e84(_0x5560b4,-0x1309+-0x10f8+0x241d);if(_0x1cde62['oeRwW'](_0x429cb6,0x1325+0xe9*0x1a+-0x2acf)&&_0x5b32ce===0x12cd*-0x1+0x3*0xa1d+0xd3*-0xe)return null;var _0x31168b=_0x1cde62['lbgqz'](_0x429cb6*Math['PI'],-0xdbd*0x2+-0xbdd*-0x3+0x769*-0x1),_0xa4f74e=_0x1cde62['uUJdb'](_0x1cde62[_0x3d2df3(0x1f7)](_0x5b32ce,Math['PI']),0x1ab9+-0x21d7+0x7d2),_0xb93bb0=_0x1cde62[_0x3d2df3(0x56c)](Math['cos'](_0x31168b),Math[_0x3d2df3(0x2d2)](_0xa4f74e)),_0x52ecba=-Math[_0x3d2df3(0x238)](_0x31168b),_0x441920=Math[_0x3d2df3(0x2d2)](_0x31168b)*Math[_0x3d2df3(0x238)](_0xa4f74e),_0x192730=Math[_0x3d2df3(0xb5)](_0xb93bb0,_0x52ecba,_0x441920);if(_0x192730<-0x146f+-0xb*0x79+0x19a2*0x1+0.1||_0x192730>0x17*-0xa7+0xcae+0x25d)return null;var _0x24d73f=-0x1fff*-0x1+-0xb*-0x244+-0x38eb*0x1,_0x494efa=0x12c9+-0x23fa+-0x9*-0x1e9,_0x19004a=0x21d*0x9+-0x1d*0x68+0x73d*-0x1,_0x5709c2=0x1129*-0x2+-0x5*0x562+0x3d3c,_0x2e0ca3=-0x1301+0x1a7d*0x1+0x1*-0x77c,_0x2a7b30=-0x5b*0x1d+-0x14c1+0x1f10;_0x24d73f=-_0x441920,_0x494efa=-0x446*0x1+0x43d+0x9,_0x19004a=_0xb93bb0,_0x5709c2=_0x1cde62[_0x3d2df3(0x1c8)](_0x494efa*_0x441920,_0x1cde62['KDKFY'](_0x19004a,_0x52ecba)),_0x5709c2=_0x1cde62['dtSUF'](_0x1cde62[_0x3d2df3(0x19d)](_0x494efa,_0x441920),_0x19004a*_0x52ecba),_0x2e0ca3=_0x19004a*_0xb93bb0-_0x24d73f*_0x441920,_0x2a7b30=_0x24d73f*_0x52ecba-_0x494efa*_0xb93bb0;var _0x1d43b3=Math[_0x3d2df3(0xb5)](_0x5709c2,_0x2e0ca3,_0x2a7b30);return _0x1d43b3>0x2585+-0x1164+-0x1421*0x1+0.001&&(_0x5709c2/=_0x1d43b3,_0x2e0ca3/=_0x1d43b3,_0x2a7b30/=_0x1d43b3),{'r':{'x':_0x24d73f,'y':_0x494efa,'z':_0x19004a},'u':{'x':_0x5709c2,'y':_0x2e0ca3,'z':_0x2a7b30},'f':{'x':_0xb93bb0,'y':_0x52ecba,'z':_0x441920}};}else _0x7bfeb0=_0x45b091['parse'](_0x4caeb0[_0x3d2df3(0x489)+'em']('sakur'+'a.ui.'+_0x3d2df3(0x4de)+'1')||'{}');}function _0x13c0fa(){var _0x47ed99=_0x3d27bd;if(_0x1cde62[_0x47ed99(0x3b5)](Number(_0x110395['fovOv'+'errid'+'e']),-0xb45+-0x1507+-0xac4*-0x3))return Number(_0x110395[_0x47ed99(0x543)+_0x47ed99(0x277)+'e']);if(_0x2bffd7){var _0x340cf1=_0x1cde62['GOYqe'](_0x554e84,_0x2bffd7,0x2068*0x1+-0x351+-0x1ce3);if(_0x340cf1>-0x1793+0x8c9+0xed4&&_0x340cf1<0x22fd+-0xeea+0x50*-0x3e)return _0x340cf1;_0x340cf1=_0x1cde62[_0x47ed99(0x34f)](_0x554e84,_0x2bffd7,0x1*0x2216+0x1*-0x22d+0x1*-0x1fc1);if(_0x1cde62[_0x47ed99(0x231)](_0x340cf1,-0x7ee+-0x1990+0x2188)&&_0x340cf1<-0x61*0x36+-0x10b+0x1634)return _0x340cf1;}if(_0xe79d7d&&_0x461001['world'+'Camer'+'a'])try{if('qQqlt'===_0x1cde62['UmCBd']){var _0x4d8ca5=_0xe79d7d['call'](_0x47ed99(0x17c)+'Engin'+'e.Cam'+_0x47ed99(0x2cf),_0x1cde62['DMGPm'],[_0x461001['world'+'Camer'+'a']]);if(_0x1cde62['KDSJw'](typeof _0x4d8ca5,_0x1cde62['eseUk'])&&_0x4d8ca5>-0x283+0x2*-0x9d1+0x162f&&_0x4d8ca5<0x65a+0xfd9+0x158*-0x10)return _0x4d8ca5;}else _0x54b766=new _0x5b4228(),_0x49193e['set'](_0x24cc1a,_0x114912);}catch(_0x318cb5){}return 0x1858+-0x128*-0x2+-0x1a6c;}function _0x1c90af(_0x28e3b8,_0x2734fb,_0x4d16b1,_0x51ce27,_0x564bd1,_0x735501){var _0x99ffde=_0x3d27bd;if(_0x1cde62['bVlWI']('VjqyV',_0x1cde62[_0x99ffde(0x367)])){var _0xcb9bf7=_0x28e3b8-_0x564bd1['x'],_0x2e127f=_0x2734fb-_0x564bd1['y'],_0x2a3dd6=_0x4d16b1-_0x564bd1['z'],_0x3d01fe=_0x1cde62['UwVJH'](_0x1cde62['fMTxt'](_0xcb9bf7,_0x51ce27['r']['x']),_0x2e127f*_0x51ce27['r']['y'])+_0x1cde62[_0x99ffde(0x48a)](_0x2a3dd6,_0x51ce27['r']['z']),_0x50cd93=_0x1cde62[_0x99ffde(0x480)](_0x1cde62['PZyWr'](_0x1cde62[_0x99ffde(0x526)](_0xcb9bf7,_0x51ce27['u']['x']),_0x2e127f*_0x51ce27['u']['y']),_0x2a3dd6*_0x51ce27['u']['z']),_0x2f750d=_0x1cde62['ToYkI'](_0x1cde62[_0x99ffde(0x48a)](_0xcb9bf7,_0x51ce27['f']['x'])+_0x2e127f*_0x51ce27['f']['y'],_0x1cde62['VZVWA'](_0x2a3dd6,_0x51ce27['f']['z']));if(_0x1cde62[_0x99ffde(0x3fe)](_0x2f750d,0x1*0xab2+-0x2373+0x18c1*0x1+0.05))return null;var _0x38d2d9=_0x1cde62[_0x99ffde(0x65d)](0xf33*0x1+-0x223a+-0x7*-0x2b8,Math[_0x99ffde(0x376)](_0x735501*Math['PI']/(0x10*0x215+0x1755+0x1*-0x37f1)/(0x1*0x99+0x15c4+-0x165b))),_0x433073=_0x2a7102['w']/_0x2a7102['h'],_0x354db2=_0x1cde62['FhEeN'](_0x3d01fe*_0x38d2d9,_0x2f750d*_0x433073),_0x13d9db=_0x50cd93*_0x38d2d9/_0x2f750d;if(_0x354db2<-(-0x21*-0x107+0x1519+0xd*-0x43b+0.30000000000000004)||_0x354db2>-0x5a2+0x46*-0x6+-0x747*-0x1+0.30000000000000004||_0x13d9db<-(0xab6+-0x6da+-0x3db+0.30000000000000004)||_0x13d9db>0x1245*0x1+-0x235c*0x1+0x2*0x88c+0.30000000000000004)return null;return{'x':(_0x1cde62[_0x99ffde(0x23e)](_0x354db2,-0x16c1+0x1870+-0x1af+0.5)+(0x59f*-0x2+-0xc8*-0x17+-0x6ba+0.5))*_0x2a7102['w'],'y':(0x3d5*-0x7+-0x1*-0x201+0x18d3-(_0x1cde62[_0x99ffde(0x423)](_0x13d9db,0x653*0x3+0x1e94*0x1+-0x9e9*0x5+0.5)+(-0x38*0x76+-0x26f*0xe+-0x2a*-0x16d+0.5)))*_0x2a7102['h'],'depth':_0x2f750d};}else{var _0x3eee7a=_0x7d1cd4[_0x99ffde(0x3a1)+_0x99ffde(0x156)+_0x99ffde(0xee)](_0x1cde62[_0x99ffde(0x2cb)]);_0x3eee7a[_0x99ffde(0x361)+_0x99ffde(0x60f)]='sk-mb'+_0x99ffde(0x518);for(var _0x35298c of _0x521740)_0x3eee7a[_0x99ffde(0x356)+'dChil'+'d'](_0x35298c);_0x38536e[_0x99ffde(0x356)+_0x99ffde(0x5af)+'d'](_0x3eee7a);}}function _0x4953d8(){var _0xf5758e=_0x3d27bd;if(_0xf5758e(0x4ea)!==_0xf5758e(0x4ea)){if(!_0x357613)return null;for(var _0x37ecfc of[0x1827+0x1d2*0x5+-0x2139,0xea8+0x42f+-0x11*0x11b,-0x186d+0x1*0x5b7+0x12c6,0x36*-0x92+-0x2ee*0xb+0x1f8d*0x2]){var _0x4a4b4f=_0x12dcfb(_0x35aac5(_0x3f3904,_0x37ecfc),_0x4358ec);if(_0x4a4b4f)return _0x4a4b4f;}return null;}else{if(!_0x109565)return-0x24cd+-0x1d2a+0x41f7;var _0xd12f61=_0x32b876(_0x109565,-0x238a+0x1b*0xc5+-0x3f*-0x3d),_0x14c6f6=_0x14532b(_0x109565,-0x1a65*-0x1+-0x71d+0x1e8*-0xa);if(!_0x14c6f6)return 0xf*0x251+-0xc61*-0x3+-0x47e2;var _0x5f0f92=_0x105139(_0x14c6f6);if(_0xd12f61<0xd*-0x1bd+-0x1790+0x2e29||_0xd12f61>=_0x5f0f92)return-0x1429+-0x1546+0x296f*0x1;return _0x1cde62[_0xf5758e(0x3d9)](_0x1eca7c,_0x14c6f6,_0xd12f61);}}var _0x1927b4=0x1d*-0x101+0xe0*-0x12+0x2cdd;_0x1cde62['icppe'](setInterval,()=>{var _0x53303c=_0x3d27bd,_0x2623af={'woNTj':function(_0x4e203f,_0x4ecc35){return _0x4e203f+_0x4ecc35;},'DfumQ':function(_0x14955c,_0x24f5ec){return _0x14955c+_0x24f5ec;},'CUzzy':function(_0x3adfc3,_0x1116aa){return _0x3adfc3+_0x1116aa;},'lNtpw':_0x53303c(0x569)+_0x53303c(0x487)+'sform'+'='};if(_0x1cde62[_0x53303c(0x4fd)](_0x53303c(0x3b7),'XQbBw')){if(!_0x3e1634||!window['unity'+'Insta'+_0x53303c(0x303)])return;try{_0x5a1e22();}catch(_0xfcd382){_0x3d933a(_0x1cde62[_0x53303c(0x1f8)],_0x1cde62['peXLt'](_0x53303c(0x5c4)+'eLoca'+_0x53303c(0x219)+'ew:\x20',_0xfcd382&&_0xfcd382[_0x53303c(0x547)+'ge']));}var _0x174382=(_0x1cde62[_0x53303c(0x665)](Number,_0x110395['speed'+'Pct'])||0x1aeb+0x9d*-0x2+-0x86f*0x3)/(0x8c*-0x16+-0x1cce+-0xdbe*-0x3),_0x2ecc74=(Number(_0x110395[_0x53303c(0x4b0)+'ct'])||-0xa28+0x1078+-0x5ec)/(-0x10a6*0x1+-0x1345*0x2+-0x1bca*-0x2),_0x472c18=(_0x1cde62['tCrlq'](Number,_0x110395[_0x53303c(0x154)+_0x53303c(0x636)])||-0x1bf8+-0x1601+-0x1*-0x325d)/(0x1*0xa59+0xb*-0x285+0x8e1*0x2);try{if(_0x1cde62['GeCTQ']!==_0x53303c(0x560))return _0x3f917a(_0xf35243);else{if(_0x5ec0ef&&(_0x174382!==0x1cfa+0x73f+0x1e8*-0x13||_0x2ecc74!==-0x1615+-0xe06+-0x1*-0x241c||_0x1cde62[_0x53303c(0x3b6)](_0x472c18,-0x231+0x2*0x1005+-0x1dd8))){if(_0x1cde62[_0x53303c(0x3ed)]!==_0x53303c(0x1d8)){_0x1cde62[_0x53303c(0x568)](_0x174382,-0x1*0x1beb+-0x1*-0xcb3+0x3*0x513)&&(_0x1cde62[_0x53303c(0x1c0)](_0x89c5a8,_0x5ec0ef,0x6*-0x355+0x2058+0x25a*-0x5,_0x1cde62[_0x53303c(0x38f)],_0x174382),_0x89c5a8(_0x5ec0ef,0x10b+0x1a07+-0x1a6e,_0x53303c(0x661),_0x174382),_0x1cde62['GmcGQ'](_0x89c5a8,_0x5ec0ef,0x245e+-0x112e+-0x1288,_0x1cde62[_0x53303c(0x38f)],_0x174382));_0x2ecc74!==-0x7b*-0x2e+0x11*0x1f1+-0x2*0x1b8d&&(_0x89c5a8(_0x5ec0ef,0x1*0x846+0xdea+0x7d*-0x2c,_0x1cde62[_0x53303c(0x38f)],_0x2ecc74),_0x1cde62[_0x53303c(0x578)](_0x89c5a8,_0x5ec0ef,-0x1*0x2c8+-0x1*-0x21ba+-0x1e3a,_0x1cde62['MzIZa'],_0x2ecc74));_0x472c18!==-0xb5*0x29+-0x1931+0x362f&&(_0x1cde62[_0x53303c(0x34a)](_0x1cde62['LBYSo'],_0x53303c(0x3ff))?(_0x1cde62['QINvh'](_0x89c5a8,_0x5ec0ef,-0x2*0x2f1+0x2*-0x1124+-0x2*-0x1477,_0x53303c(0x661),_0x472c18),_0x89c5a8(_0x5ec0ef,0x920+0xeb0+-0x1724,_0x1cde62[_0x53303c(0x38f)],_0x472c18)):_0x1cde62[_0x53303c(0x24e)](_0x3b6166,'conso'+'le.'+_0x217e0e,_0x588b71['slice'](0x801*-0x4+0x10fd*-0x1+0x41*0xc1,0x122f+-0x1*0x4ca+-0xbd5)));if(_0x1cde62[_0x53303c(0x2a6)](_0x1927b4,-0x16ca*0x1+-0x1*0x1aa+-0x37f*-0x7)===0x19eb+0x3*0xa24+-0x3857)_0x1cde62['dGUTX'](_0x3d933a,'write','movem'+_0x53303c(0x1e1)+'ults\x20'+_0x53303c(0x15b)+_0x53303c(0x146)+'\x20'+_0x745628(_0x5ec0ef));}else _0xb75575[_0x53303c(0x621)+'ead']=_0x35064e,_0x1cde62[_0x53303c(0x652)](_0x4e6b57);}}}catch(_0x30eb07){_0x3d933a('write',_0x53303c(0x347)+'ent\x20t'+_0x53303c(0x1c4)+_0x53303c(0x33f)+'\x20'+(_0x30eb07&&_0x30eb07['messa'+'ge']));}try{if(_0x1cde62[_0x53303c(0x439)](_0x1cde62['bAmYk'],'Napky')){var _0x162f34=_0x4953d8();if(_0x162f34){_0x110395['noSpr'+_0x53303c(0x3a6)]&&(_0x3b800e(_0x162f34,-0x6*0x455+-0x2*-0x557+-0x200*-0x8,_0x1cde62['MzIZa'],0x1949+-0x1d72*-0x1+-0x36bb),_0x3b800e(_0x162f34,0x2*-0x506+0xe05+-0x1*0x335,_0x53303c(0x661),-0x436+-0x1*0xc7+-0x4fd*-0x1),_0x1cde62[_0x53303c(0xfc)](_0x3b800e,_0x162f34,-0x1fb*-0xe+-0x4*0x85a+-0x33b*-0x2,_0x53303c(0x661),0xe84+-0x3d4+-0x8*0x156),_0x1cde62[_0x53303c(0x205)](_0x3b800e,_0x162f34,-0x2d*0x48+-0x14fe+0x77*0x4a,_0x1cde62['MzIZa'],0x2363*-0x1+0x9d0+0x1993));if(_0x110395[_0x53303c(0x5db)+_0x53303c(0x283)]||_0x110395['damag'+'eValu'+'e']!==0xe3c+0x7dd+-0x1*0x1583){var _0x10bca6=Math[_0x53303c(0x3c6)](0x1a74+0x1112+-0x2b85,Number(_0x110395['damag'+_0x53303c(0x3bf)+'e'])||0x39e*0xa+-0x1*-0x1a6c+-0x3e02);_0x1cde62['HHDiY'](_0x3b800e,_0x162f34,-0xa70+-0x419*-0x7+-0x119f,'f32',_0x10bca6);}_0x110395['infAm'+'mo']&&(_0x1cde62[_0x53303c(0x3b6)]('miJRO',_0x1cde62['SVJQG'])?_0x6b8018&&_0x3353a2['val']()&&(_0xedb249=_0x198b06['val'](),_0x176bd0[_0x53303c(0x67f)+'er']=!![],_0x5582f1('captu'+'re',_0x1cde62[_0x53303c(0x55c)]+_0x357d12(_0x4f1511))):_0x3b800e(_0x162f34,0x15af+-0x188e+0x3bb,'i32',0xfe3+0x1267+-0x3*0xa21)),_0x110395['rapid'+_0x53303c(0x20b)]&&(_0x1cde62[_0x53303c(0xc1)]==='MGxLR'?(_0x89c5a8(_0x162f34,0xd66+-0x1ce2+-0xd*-0x13c,_0x1cde62['MzIZa'],0x26a9*-0x1+-0x1045+0x2*0x1b77+0.1),_0x3b800e(_0x162f34,-0x7a0+-0x48*0x49+-0xb*-0x29c,_0x1cde62['MzIZa'],-(-0x378+0x44*-0xd+0xad3))):_0x31fede(!_0x53ea52));}}else return{'entries':_0x1202bf,'count':_0x59e217,'shift':_0x1e0d8e};}catch(_0x199085){_0x1cde62[_0x53303c(0x3bd)](_0x3d933a,_0x53303c(0x68b),'weapo'+'n\x20tic'+_0x53303c(0x26b)+_0x53303c(0x1c7)+(_0x199085&&_0x199085[_0x53303c(0x547)+'ge']));}_0x1927b4++;}else{!_0x4400b0&&(_0x58c546=!![],_0x39d2d5('esp',_0x2623af['woNTj'](_0x2623af[_0x53303c(0x5cf)](_0x2623af[_0x53303c(0x44b)](_0x53303c(0x324)+_0x53303c(0xdc)+_0x53303c(0x2b6)+'\x20char'+_0x53303c(0x461),_0x2c2a3d(_0x29bebe)),_0x2623af[_0x53303c(0x26d)]),_0x350632(_0x38a3f8))));return;}},0x178d+-0x22ec+0xc27),setInterval(()=>{var _0x48d84f=_0x3d27bd;_0x461001[_0x48d84f(0x250)+_0x48d84f(0x2ad)]=!!window[_0x48d84f(0x50b)+'Insta'+'nce'];try{if(_0x1cde62[_0x48d84f(0x34a)]('vmJKR',_0x1cde62['hCCWL']))_0x2a6b08[_0x48d84f(0x288)]['left']=_0x1cde62['ToYkI'](_0x5665e4['x'],'px'),_0xb8d590[_0x48d84f(0x288)][_0x48d84f(0x5ef)]=_0x1cde62[_0x48d84f(0x1d1)](_0x492269['y'],'px');else{var _0x415149=-0x18ba+-0x1*0x18cb+0x3185;for(var _0x439fcd in _0x4430e1){if(_0x4430e1[_0x439fcd]&&_0x4430e1[_0x439fcd][_0x48d84f(0x15b)+'ed'])_0x415149++;}_0x461001['hooks'+'Ok']=_0x415149;if(_0x461001['hooks'+_0x48d84f(0x550)]&&!_0x461001[_0x48d84f(0x5f4)+_0x48d84f(0x2ef)+'ed']){_0x461001[_0x48d84f(0x5f4)+'sLogg'+'ed']=!![];for(var _0x5654fc in _0x4430e1){var _0x31ab0a=_0x4430e1[_0x5654fc];_0x3d933a(_0x48d84f(0x1aa),_0x1cde62[_0x48d84f(0x454)](_0x5654fc,'\x20appl'+'ied=')+!!_0x31ab0a['appli'+'ed']+(_0x48d84f(0x275)+_0x48d84f(0x5ba))+!!_0x31ab0a[_0x48d84f(0x66f)+'ed']);}}}}catch(_0x10315f){}_0x461001['playe'+'rs']=_0x33ae77?_0x1cde62[_0x48d84f(0x4b6)](_0xe9b5c1)[_0x48d84f(0x113)+'h']:0x77d*0x4+0x12ba+-0x30ae;},0x1d5a+-0x7f*-0x35+-0x113f*0x3);var _0x31b663=![];function _0x4242fc(){var _0x3039e1=_0x3d27bd;if(_0x1cde62['juMbN'](_0x1cde62[_0x3039e1(0xd3)],_0x3039e1(0x3a0))){if(!_0x110395['esp']||!_0x110395['boxes'])return;var _0xf4bfa8=_0x3f0e0e(),_0x552b3b=_0x1cde62['zzPth'](_0x3e75ae);if(!_0xf4bfa8||!_0x552b3b){!_0x31b663&&(_0x31b663=!![],_0x3d933a(_0x1cde62['CsdiD'],_0x1cde62['ugBWg']('no\x20ca'+_0x3039e1(0xdc)+_0x3039e1(0x2b6)+_0x3039e1(0x471)+'Cam=',_0x745628(_0x5560b4))+_0x1cde62['fxQYz']+_0x1cde62[_0x3039e1(0x3f6)](_0x745628,_0x5dd997)));return;}var _0x5ebf82=_0x1cde62['nXLtQ'](_0x13c0fa),_0x55c08f=_0xe9b5c1(),_0x598ad0=_0xe7a3c5?_0x14532b(_0xe7a3c5,0x23bf*-0x1+0x132f+0x85a*0x2):-0x216b*-0x1+0x66a+-0x63*0x67;!_0x31b663&&(_0x31b663=!![],_0x3d933a(_0x1cde62[_0x3039e1(0x261)],_0x1cde62[_0x3039e1(0x1d1)](_0x1cde62[_0x3039e1(0x437)]('proje'+_0x3039e1(0x449)+_0x3039e1(0xec)+'mPos=',JSON[_0x3039e1(0x38a)+_0x3039e1(0x52b)](_0x552b3b))+_0x1cde62['hvyqG']+_0x5ebf82[_0x3039e1(0x35e)+'ed'](-0xe4f+0x79d*0x1+-0xf5*-0x7)+_0x1cde62[_0x3039e1(0x4e6)]+_0x55c08f[_0x3039e1(0x113)+'h']+(_0x3039e1(0x519)+'s.f='),JSON[_0x3039e1(0x38a)+_0x3039e1(0x52b)](_0xf4bfa8['f']))));for(var _0xb36e63=0x1487+0x2*0xa20+-0x28c7;_0xb36e63<_0x55c08f['lengt'+'h'];_0xb36e63++){var _0x1db9ad=_0x55c08f[_0xb36e63];if(!_0x1db9ad[_0x3039e1(0x30c)])continue;if(_0x598ad0&&_0x1db9ad['ptr']===_0x598ad0)continue;var _0x4f950d=_0x1cde62['VieNg'](_0x1db9ad['team'],0x1*0x2089+0x16b0+-0x3739)?_0x3039e1(0x4c9)+_0x3039e1(0x10b)+_0x3039e1(0x584)+',.9)':_0x1cde62['XqWgU'],_0x8006d7=_0x1cde62['VdpSk'](Number,_0x110395[_0x3039e1(0x515)])||-0x1b13+0x1d*0x9e+0x92e,_0x1b632b=_0x1c90af(_0x1db9ad['pos']['x'],_0x1db9ad[_0x3039e1(0x30c)]['y'],_0x1db9ad[_0x3039e1(0x30c)]['z'],_0xf4bfa8,_0x552b3b,_0x5ebf82),_0x1e3caa=_0x1cde62['jseUR'](_0x1c90af,_0x1db9ad['pos']['x'],_0x1db9ad[_0x3039e1(0x30c)]['y']+(Number(_0x110395[_0x3039e1(0x4e3)+_0x3039e1(0x32c)+'ht'])||-0x4*0x3ef+0x1e4a*-0x1+0x2e07+0.8),_0x1db9ad[_0x3039e1(0x30c)]['z'],_0xf4bfa8,_0x552b3b,_0x5ebf82);if(!_0x1b632b&&!_0x1e3caa)continue;if(_0x1cde62['YmvTv'](_0x1b632b,_0x1e3caa)){var _0x172520=('2|8|0'+_0x3039e1(0x211)+_0x3039e1(0x650)+'|5')[_0x3039e1(0x2c1)]('|'),_0x21ba3d=0xd*0xed+-0x193c+-0x1f*-0x6d;while(!![]){switch(_0x172520[_0x21ba3d++]){case'0':var _0x327fb7=Math[_0x3039e1(0x3c6)](-0x61*-0x1+0x1*-0x116c+0x1111,_0x1cde62['omkTG'](_0x428fa0*(0x17*-0xb0+0xcfb*0x1+0x2d5+0.45),_0x8006d7));continue;case'1':if(_0x110395[_0x3039e1(0x42a)])_0x43b92a['strok'+'eStyl'+'e']=_0x4f950d;else _0x43b92a[_0x3039e1(0x30d)+'eStyl'+'e']=_0x1cde62[_0x3039e1(0x39d)];continue;case'2':var _0xd464ad=Math[_0x3039e1(0x3b1)](_0x1b632b['y'],_0x1e3caa['y']);continue;case'3':_0x43b92a[_0x3039e1(0x30d)+'eRect'](_0x1b632b['x']-_0x327fb7/(-0x1db9+-0x2*-0x2ad+0x1861),_0xd464ad,_0x327fb7,_0x428fa0);continue;case'4':if(_0x110395[_0x3039e1(0x36b)+'h']&&(_0x1cde62['RrYkS'](_0x1db9ad[_0x3039e1(0x36b)+'h'],0x21a+-0x2396+0x85f*0x4)||_0x1db9ad['shiel'+'d']>0x3*-0x1f2+-0xabc+0xca*0x15)){var _0x5d9ef2=(_0x3039e1(0x383)+_0x3039e1(0x2cc)+_0x3039e1(0x59f))[_0x3039e1(0x2c1)]('|'),_0x249e20=0x1152+-0xd*0x229+-0x5f*-0x1d;while(!![]){switch(_0x5d9ef2[_0x249e20++]){case'0':_0x43b92a['fillR'+_0x3039e1(0x21c)](_0x1b632b['x']-_0x327fb7/(0x14f0+0x352+-0x2*0xc20),_0xd464ad-(0xaae+0x17cd+0x1*-0x2275),_0x3da0f1,0x1b16+0x13a5+-0x2eb7);continue;case'1':_0x43b92a['lineW'+'idth']=-0x1951*-0x1+-0x1ccd*-0x1+-0x361d;continue;case'2':var _0x3da0f1=_0x327fb7*_0x1cde62[_0x3039e1(0x65d)](_0x52fe9d,-0x157*0x19+0x14*-0xd4+0x3273);continue;case'3':_0x43b92a[_0x3039e1(0x22f)+_0x3039e1(0x4e1)]=_0x3039e1(0x4c9)+'255,1'+_0x3039e1(0x25c)+_0x3039e1(0x230);continue;case'4':var _0x52fe9d=Math[_0x3039e1(0x3c6)](0x459*-0x3+-0x2c+0x11*0xc7,Math[_0x3039e1(0x3b1)](0x21f8+0x382*-0x6+-0xc88*0x1,_0x1db9ad[_0x3039e1(0x36b)+'h']+_0x1db9ad['shiel'+'d']));continue;case'5':_0x43b92a[_0x3039e1(0x30d)+'eRect'](_0x1cde62[_0x3039e1(0x3b8)](_0x1b632b['x'],_0x1cde62[_0x3039e1(0x329)](_0x327fb7,-0x4*-0xa6+-0x7c9*0x4+-0xaa*-0x2b)),_0x1cde62[_0x3039e1(0x47d)](_0xd464ad,0x1*-0xeda+-0x1*0x7c7+0x16a7),_0x327fb7,-0x1d96+0x74f*-0x4+0x1*0x3ad6);continue;case'6':_0x43b92a['strok'+'eStyl'+'e']=_0x3039e1(0x4c9)+'0,0,0'+_0x3039e1(0x143);continue;}break;}}continue;case'5':_0x110395['lines']&&(_0x43b92a['begin'+_0x3039e1(0xe2)](),_0x43b92a[_0x3039e1(0x237)+'o'](_0x2a7102['w']/(-0x106*0xd+-0x5*-0xe1+0x8eb),_0x2a7102['h']),_0x43b92a[_0x3039e1(0x336)+'o'](_0x1b632b['x'],_0xd464ad),_0x43b92a[_0x3039e1(0x30d)+'eStyl'+'e']=_0x4f950d,_0x43b92a[_0x3039e1(0x175)+_0x3039e1(0x5b2)]=-0x1*-0x24c6+-0x2fa+0xd3*-0x29,_0x43b92a[_0x3039e1(0x24b)+_0x3039e1(0x262)+'h']([0xb3*-0x1c+0x1b4a+0xb3*-0xb,-0x1c99+0xd86+-0x2*-0x78c]),_0x43b92a[_0x3039e1(0x30d)+'e'](),_0x43b92a[_0x3039e1(0x24b)+_0x3039e1(0x262)+'h']([]));continue;case'6':_0x110395[_0x3039e1(0x653)]&&_0x1db9ad['nickn'+_0x3039e1(0x4ab)]&&(_0x43b92a[_0x3039e1(0x22f)+'tyle']=_0x1cde62[_0x3039e1(0x34c)],_0x43b92a['font']=_0x1cde62[_0x3039e1(0x5d1)],_0x43b92a['textA'+'lign']='cente'+'r',_0x43b92a['fillT'+_0x3039e1(0x404)](_0x1db9ad['nickn'+'ame'],_0x1b632b['x'],_0xd464ad-(-0xa9e+0x3*-0x671+0x1dfb)));continue;case'7':_0x43b92a[_0x3039e1(0x175)+_0x3039e1(0x5b2)]=-0x2605+-0x9a2+0x2fa9;continue;case'8':var _0x428fa0=Math['max'](-0x3*0x448+-0x1740+0x241c,Math[_0x3039e1(0x43c)](_0x1b632b['y']-_0x1e3caa['y'])*_0x8006d7);continue;}break;}}}}else new _0x46a190(_0x2b1bb4)['write'+'Field'](_0x461ab1,_0x5cd1dc,_0x45f6d7);}function _0x3d7689(){var _0x2b58de=_0x3d27bd;_0x1cde62['ihVgV'](requestAnimationFrame,_0x3d7689),_0x1cde62[_0x2b58de(0x31c)](_0x2a5c79),_0x43b92a['clear'+'Rect'](0x16dc+-0x158*-0x5+-0x1d94,0x2213*0x1+0x47e+0x2691*-0x1,_0x2a7102['w'],_0x2a7102['h']);if(!_0x110395['safeM'+'ode'])_0x1cde62['zzPth'](_0x4242fc);}var _0x1f9bfe=document[_0x3d27bd(0x3a1)+_0x3d27bd(0x156)+_0x3d27bd(0xee)](_0x1cde62['CNRAp']);_0x1f9bfe['style'][_0x3d27bd(0x418)+'xt']=_0x3d27bd(0x192)+_0x3d27bd(0x3cf)+_0x3d27bd(0x1f4)+_0x3d27bd(0x5bd)+_0x3d27bd(0x603)+'dth:1'+_0x3d27bd(0x693)+_0x3d27bd(0x213)+_0x3d27bd(0x4d4)+'vh;z-'+_0x3d27bd(0x47c)+_0x3d27bd(0x20e)+_0x3d27bd(0x479)+_0x3d27bd(0x2ec)+'nter-'+'event'+_0x3d27bd(0x16f)+'e';var _0x43b92a=_0x1f9bfe[_0x3d27bd(0x378)+'ntext']('2d'),_0x2a7102={'w':0x0,'h':0x0,'dpr':0x0};function _0x2a5c79(){var _0x86e5b8=_0x3d27bd,_0x1577c4=('3|5|4'+_0x86e5b8(0x517)+'2|8|7'+'|6')['split']('|'),_0x448b31=0x9af+-0x525*-0x6+0x1*-0x288d;while(!![]){switch(_0x1577c4[_0x448b31++]){case'0':_0x2a7102['h']=_0x23a66c;continue;case'1':_0x2a7102['w']=_0x3f0a9f;continue;case'2':_0x2a7102[_0x86e5b8(0x20d)]=_0x26f931;continue;case'3':var _0x26f931=window['devic'+_0x86e5b8(0x42d)+'lRati'+'o']||-0xd3*-0x13+-0x1c72+0xcca;continue;case'4':if(_0x1cde62['UKCNc'](_0x3f0a9f,_0x2a7102['w'])&&_0x23a66c===_0x2a7102['h']&&_0x26f931===_0x2a7102[_0x86e5b8(0x20d)])return;continue;case'5':var _0x3f0a9f=window[_0x86e5b8(0x16b)+_0x86e5b8(0x35a)],_0x23a66c=window['inner'+'Heigh'+'t'];continue;case'6':_0x43b92a[_0x86e5b8(0x2dd)+_0x86e5b8(0x690)+'rm'](_0x26f931,-0x207+0x21a0+-0x1f99,0xef3+0xd00+-0x1b*0x109,_0x26f931,-0x3d8+0x19d9*0x1+-0x83*0x2b,0x1*-0x177e+-0x1741*0x1+0x2ebf);continue;case'7':_0x1f9bfe[_0x86e5b8(0x213)+'t']=Math[_0x86e5b8(0x495)](_0x23a66c*_0x26f931);continue;case'8':_0x1f9bfe[_0x86e5b8(0x514)]=Math['round'](_0x1cde62['AnxuK'](_0x3f0a9f,_0x26f931));continue;}break;}}var _0x15c8d5=document['creat'+'eElem'+'ent'](_0x1cde62[_0x3d27bd(0x2cb)]);_0x15c8d5['id']=_0x1cde62[_0x3d27bd(0x36c)],_0x15c8d5[_0x3d27bd(0x288)]['cssTe'+'xt']='posit'+_0x3d27bd(0x3cf)+_0x3d27bd(0x1f4)+_0x3d27bd(0x5bd)+_0x3d27bd(0x4aa)+'index'+':2147'+_0x3d27bd(0x479)+'7;poi'+_0x3d27bd(0x2aa)+_0x3d27bd(0x2b5)+'s:non'+'e;';var _0x495ee6=_0x15c8d5['attac'+_0x3d27bd(0x688)+'ow']({'mode':_0x1cde62[_0x3d27bd(0x60a)]}),_0x35a2bc=![],_0x3dfe87={};try{_0x3dfe87=JSON['parse'](localStorage['getIt'+'em'](_0x1cde62['TuDlp'])||'{}');}catch(_0x2b4e2d){}function _0x4b6ea7(_0x289bf2){var _0x47c97d=_0x3d27bd,_0x1c87ab=document[_0x47c97d(0x3a1)+_0x47c97d(0x156)+'ent'](_0x1cde62[_0x47c97d(0x462)]);return _0x1c87ab['setAt'+_0x47c97d(0x473)+'te'](_0x1cde62['SAYFe'],'true'),_0x1c87ab['inner'+'HTML']=_0x47c97d(0x5c6)+_0x47c97d(0x65a)+_0x47c97d(0x528)+_0x47c97d(0x576)+_0x47c97d(0x313)+_0x289bf2+('</svg'+'>'),_0x1c87ab;}function _0x2b1860(_0x561c52,_0x2db79d){var _0x5b6782=_0x3d27bd,_0x32e08a={'TduDm':function(_0x364a92,_0x154727,_0x4d40ae){return _0x364a92(_0x154727,_0x4d40ae);},'yGUKz':function(_0x4e7c5e,_0x29717b){var _0x46fc60=_0x3c10;return _0x1cde62[_0x46fc60(0x3c5)](_0x4e7c5e,_0x29717b);},'tFBvZ':function(_0x25388f,_0x5b442e){return _0x1cde62['bsEhY'](_0x25388f,_0x5b442e);},'TIWme':_0x5b6782(0x26c)+_0x5b6782(0x294)};if(_0x1cde62[_0x5b6782(0x47a)]('ijmTx',_0x5b6782(0x31a))){var _0x5834b9=('2|0|3'+'|6|5|'+'1|4')[_0x5b6782(0x2c1)]('|'),_0x542eb2=-0x122*0xb+0x1f98+0x1322*-0x1;while(!![]){switch(_0x5834b9[_0x542eb2++]){case'0':_0x59d8e2[_0x5b6782(0x362)]='butto'+'n';continue;case'1':_0x59d8e2[_0x5b6782(0x21d)+'ck']=_0x2f4ebd=>{var _0x5d4dce=_0x5b6782;_0x2f4ebd[_0x5d4dce(0x31f)+_0x5d4dce(0xd8)+_0x5d4dce(0x672)]();var _0x5cbf89=_0x59d8e2['getAt'+_0x5d4dce(0x473)+'te'](_0x5d4dce(0x29c)+'check'+'ed')!==_0x5d4dce(0x521);_0x59d8e2[_0x5d4dce(0x155)+'tribu'+'te'](_0x1cde62[_0x5d4dce(0x1ee)],_0x1cde62['uxeaa'](String,_0x5cbf89)),_0x2db79d(_0x5cbf89);};continue;case'2':var _0x59d8e2=document[_0x5b6782(0x3a1)+'eElem'+'ent'](_0x5b6782(0xcc)+'n');continue;case'3':_0x59d8e2['class'+_0x5b6782(0x60f)]=_0x5b6782(0xa8)+'itch';continue;case'4':return _0x59d8e2;case'5':_0x59d8e2['setAt'+_0x5b6782(0x473)+'te'](_0x5b6782(0x29c)+_0x5b6782(0x502)+'ed',String(!!_0x561c52));continue;case'6':_0x59d8e2['setAt'+_0x5b6782(0x473)+'te'](_0x5b6782(0x618),_0x5b6782(0x1ba)+'h');continue;}break;}}else{var _0x510573=-0x1886+0x13*0x1f9+-0x1f*0x6b;for(var _0x153f15 in _0x3f4b9b){if(_0x25594c[_0x153f15]&&_0x33f09a[_0x153f15][_0x5b6782(0x15b)+'ed'])_0x510573++;}_0x309519['hooks'+'Ok']=_0x510573;if(_0x12f0d6[_0x5b6782(0x1b7)+_0x5b6782(0x550)]&&!_0x44d34e['_hook'+_0x5b6782(0x2ef)+'ed']){_0x28f57e['_hook'+'sLogg'+'ed']=!![];for(var _0x545109 in _0x4e9a9d){var _0x5ac756=_0x28303d[_0x545109];_0x32e08a[_0x5b6782(0xf5)](_0x49d96b,_0x5b6782(0x1aa),_0x32e08a['yGUKz'](_0x32e08a[_0x5b6782(0x2e4)](_0x545109+_0x32e08a[_0x5b6782(0x444)]+!!_0x5ac756[_0x5b6782(0x15b)+'ed'],_0x5b6782(0x275)+'led='),!!_0x5ac756[_0x5b6782(0x66f)+'ed']));}}}}function _0x1670af(_0x27454e,_0xa321f2,_0x2eba4d,_0x5aea2d,_0x47c656){var _0x2a9f6f=_0x3d27bd,_0x3037f6={'qbEky':function(_0x37d769,_0x40beed){return _0x37d769(_0x40beed);},'gcABE':function(_0x52637d,_0x550431){var _0x1860f1=_0x3c10;return _0x1cde62[_0x1860f1(0x4bf)](_0x52637d,_0x550431);},'nfTQE':_0x1cde62[_0x2a9f6f(0x541)],'rpJiE':'compl'+'ete','nUslc':function(_0x126ca1){return _0x1cde62['nXLtQ'](_0x126ca1);},'ncQUG':'DOMCo'+'ntent'+_0x2a9f6f(0x57a)+'d'};if('XIqZy'!==_0x1cde62['Gjdun']){var _0x3e8ad1=('10|14'+_0x2a9f6f(0xd5)+_0x2a9f6f(0x195)+_0x2a9f6f(0x1d0)+_0x2a9f6f(0x311)+_0x2a9f6f(0x2e3)+'|9|6|'+'13')['split']('|'),_0x138868=-0x1*0x6b1+-0x2a5+0x956;while(!![]){switch(_0x3e8ad1[_0x138868++]){case'0':var _0x55b57d=document['creat'+'eElem'+'ent'](_0x2a9f6f(0x377));continue;case'1':_0x55b57d['oninp'+'ut']=()=>{var _0x21a673=_0x2a9f6f;_0x2c2ed2['textC'+_0x21a673(0x28e)+'t']=_0x3037f6['qbEky'](Number,_0x55b57d[_0x21a673(0x68a)])[_0x21a673(0x35e)+'ed'](0x9ec+-0x168*0x10+0xc96)['repla'+'ce'](/\.?0+$/,''),_0x302c1a[_0x21a673(0x288)][_0x21a673(0x4ce)+_0x21a673(0x27d)+'y']('--p',(_0x55b57d[_0x21a673(0x68a)]-_0xa321f2)/(_0x2eba4d-_0xa321f2)*(-0x5c*-0x5a+-0x25*0xb3+-0x615)+'%'),_0x47c656(Number(_0x55b57d['value']));};continue;case'2':_0x2c2ed2[_0x2a9f6f(0xce)+'onten'+'t']=Number(_0x27454e)[_0x2a9f6f(0x35e)+'ed'](0x10*0x2e+-0x16b*0x12+-0x5aa*-0x4)[_0x2a9f6f(0xbf)+'ce'](/\.?0+$/,'');continue;case'3':var _0x2c2ed2=document['creat'+_0x2a9f6f(0x156)+'ent']('span');continue;case'4':_0x55b57d['class'+_0x2a9f6f(0x60f)]=_0x2a9f6f(0x1cd)+_0x2a9f6f(0x2c6);continue;case'5':_0x55b57d['value']=_0x27454e;continue;case'6':_0x302c1a[_0x2a9f6f(0x356)+'d'](_0x55b57d,_0x2c2ed2);continue;case'7':_0x55b57d[_0x2a9f6f(0x3b1)]=_0xa321f2;continue;case'8':_0x2c2ed2[_0x2a9f6f(0x361)+'Name']=_0x2a9f6f(0x4a7)+'l';continue;case'9':_0x302c1a['style'][_0x2a9f6f(0x4ce)+_0x2a9f6f(0x27d)+'y'](_0x2a9f6f(0xf9),_0x1cde62[_0x2a9f6f(0x468)](_0x1cde62['pIRPW'](_0x1cde62[_0x2a9f6f(0xf2)](_0x27454e,_0xa321f2)/_0x1cde62[_0x2a9f6f(0x540)](_0x2eba4d,_0xa321f2),0x226e*0x1+-0x3d3*-0x3+-0x2d83*0x1),'%'));continue;case'10':var _0x302c1a=document[_0x2a9f6f(0x3a1)+_0x2a9f6f(0x156)+_0x2a9f6f(0xee)]('div');continue;case'11':_0x55b57d[_0x2a9f6f(0x3c6)]=_0x2eba4d;continue;case'12':_0x55b57d[_0x2a9f6f(0x58b)]=_0x5aea2d;continue;case'13':return _0x302c1a;case'14':_0x302c1a['class'+_0x2a9f6f(0x60f)]='sk-ra'+_0x2a9f6f(0x364);continue;case'15':_0x55b57d['type']=_0x2a9f6f(0x63e);continue;}break;}}else{if(_0x3665dc[_0x2a9f6f(0x689)]&&(_0x3037f6['gcABE'](_0x10101c['ready'+'State'],_0x3037f6[_0x2a9f6f(0x45d)])||_0x4db296['ready'+'State']===_0x3037f6['rpJiE']))_0x3037f6['nUslc'](_0x8f632a);else _0x26a06c[_0x2a9f6f(0x460)+_0x2a9f6f(0x3a9)+'stene'+'r'](_0x3037f6['ncQUG'],_0x47079a,{'once':!![]});}}function _0x19c4c9(_0x41f364,_0x4d0ae3){var _0x3919fb=_0x3d27bd;if(_0x3919fb(0x5e0)!==_0x1cde62['dMmBu']){var _0x45eac4=(_0x3919fb(0x3e9)+'|6|5|'+_0x3919fb(0x5a6))[_0x3919fb(0x2c1)]('|'),_0x264ebe=-0x13bd+-0x1be3+0x2fa0;while(!![]){switch(_0x45eac4[_0x264ebe++]){case'0':_0x7fcd7e['class'+_0x3919fb(0x60f)]='sk-ct'+'l';continue;case'1':var _0x7fcd7e=document[_0x3919fb(0x3a1)+_0x3919fb(0x156)+'ent'](_0x3919fb(0x5d9));continue;case'2':_0x7fcd7e['appen'+'d'](_0x219f73,_0x4d0ae3);continue;case'3':return _0x7fcd7e;case'4':var _0x219f73=document['creat'+_0x3919fb(0x156)+_0x3919fb(0xee)](_0x1cde62[_0x3919fb(0x462)]);continue;case'5':_0x219f73[_0x3919fb(0xce)+'onten'+'t']=_0x41f364;continue;case'6':_0x219f73[_0x3919fb(0x361)+_0x3919fb(0x60f)]=_0x3919fb(0x10d)+_0x3919fb(0x522);continue;}break;}}else{var _0x47a738=_0x518632['min'](_0x257a05['y'],_0x194b4c['y']),_0x1f1a00=_0x55ebde[_0x3919fb(0x3c6)](0x17*-0x4+-0x1a0a+0x93*0x2e,_0x1cde62['oKfiF'](_0x287e11['abs'](_0x2680ab['y']-_0xd80dd8['y']),_0xf18309)),_0x43a9e7=_0x5a0629[_0x3919fb(0x3c6)](-0xa07+-0xe17+0x1824,_0x1cde62['aNcZe'](_0x1f1a00*(-0x26*0x7+0x22f0+0x2*-0x10f3+0.45),_0x5974d5));if(_0x3296fd[_0x3919fb(0x42a)])_0xc98db2[_0x3919fb(0x30d)+_0x3919fb(0x646)+'e']=_0x231617;else _0xd7f809['strok'+_0x3919fb(0x646)+'e']='rgba('+_0x3919fb(0x592)+_0x3919fb(0x323)+_0x3919fb(0x245);_0x2f1e83[_0x3919fb(0x175)+'idth']=-0x1d*-0x63+-0x216f+0x472*0x5,_0x5c3e30[_0x3919fb(0x30d)+'eRect'](_0x1cde62[_0x3919fb(0x458)](_0x54c9c9['x'],_0x1cde62[_0x3919fb(0x4d6)](_0x43a9e7,0xa80+-0xd2c*-0x1+0x2*-0xbd5)),_0x47a738,_0x43a9e7,_0x1f1a00);if(_0x12aa70['healt'+'h']&&(_0x3bbc83[_0x3919fb(0x36b)+'h']>0x430*-0x7+-0x7*-0x18b+0x7*0x2a5||_0x1cde62['ypVfD'](_0x173b16['shiel'+'d'],-0x1*-0xe9e+0x1be*-0x2+-0xb22))){var _0x55575f=_0x35a6ba[_0x3919fb(0x3c6)](0x7*0x2dd+0x22ab+-0x1*0x36b6,_0x4e2264[_0x3919fb(0x3b1)](0x143+-0x2b*0x8b+-0x89*-0x2a,_0x1cde62[_0x3919fb(0x2ce)](_0x595b32[_0x3919fb(0x36b)+'h'],_0x124446[_0x3919fb(0x549)+'d']))),_0x5ec51b=_0x43a9e7*_0x1cde62['QOsmY'](_0x55575f,-0x1*0x1bca+0x135a+0x1c4*0x5);_0x5ca8d3[_0x3919fb(0x22f)+_0x3919fb(0x4e1)]=_0x1cde62[_0x3919fb(0x51d)],_0x30bac4[_0x3919fb(0x189)+_0x3919fb(0x21c)](_0x45912f['x']-_0x1cde62[_0x3919fb(0x53d)](_0x43a9e7,-0x420*-0x4+-0x1db1+0xd33),_0x47a738-(-0xf74+0x2678+-0xda*0x1b),_0x5ec51b,0x20e5+-0x5fe+-0x1ae3),_0x44fce9[_0x3919fb(0x30d)+'eStyl'+'e']=_0x3919fb(0x4c9)+_0x3919fb(0x69c)+_0x3919fb(0x143),_0x16e292[_0x3919fb(0x175)+_0x3919fb(0x5b2)]=-0x5b*0x3b+0xa64+0x2*0x54b,_0x37e193[_0x3919fb(0x30d)+'eRect'](_0x4cffe4['x']-_0x1cde62[_0x3919fb(0x2f8)](_0x43a9e7,0x8*-0x10c+-0x6*0x470+0x2302),_0x1cde62['dtSUF'](_0x47a738,-0x5a5+0x1*0x1937+0x24*-0x8b),_0x43a9e7,0xeb7*0x1+0x1b26*0x1+-0x29d9);}_0x505b0f[_0x3919fb(0x653)]&&_0x5542b1[_0x3919fb(0x1b8)+_0x3919fb(0x4ab)]&&(_0x1f35e5[_0x3919fb(0x22f)+_0x3919fb(0x4e1)]=_0x1cde62[_0x3919fb(0x34c)],_0x230766[_0x3919fb(0x50a)]=_0x3919fb(0x558)+_0x3919fb(0x434)+_0x3919fb(0x4dd)+_0x3919fb(0x1e9)+_0x3919fb(0x309)+_0x3919fb(0x4c5)+_0x3919fb(0x5ad)+'erif',_0x1419ef['textA'+_0x3919fb(0xc2)]=_0x1cde62['wsLGe'],_0x285f73[_0x3919fb(0x4c7)+_0x3919fb(0x404)](_0x53e2d1[_0x3919fb(0x1b8)+'ame'],_0x179ddf['x'],_0x47a738-(0x2*-0xf17+0x1*0x25c9+-0x791))),_0xd0de7e[_0x3919fb(0x28d)]&&(_0x37341f[_0x3919fb(0x291)+_0x3919fb(0xe2)](),_0x3b8f70['moveT'+'o'](_0x416fb0['w']/(0x5cf+0xd6d+-0x133a),_0x5c1960['h']),_0x528cc5['lineT'+'o'](_0x323eb0['x'],_0x47a738),_0x13fc2e['strok'+'eStyl'+'e']=_0x3a73e9,_0x6f0a87['lineW'+_0x3919fb(0x5b2)]=0x232*0x1+0xb8f*-0x1+0x95e,_0xc945d0[_0x3919fb(0x24b)+'neDas'+'h']([0x161*-0x2+-0x1*0xa57+0xd1e,0x1ec7*-0x1+-0xd30+0x2bfc]),_0xb39f2b['strok'+'e'](),_0x2dcb38[_0x3919fb(0x24b)+_0x3919fb(0x262)+'h']([]));}}function _0x360352(_0x34cced,_0x325299,_0x1f8273,_0x1da2be){var _0x29a3cc=_0x3d27bd,_0x1135bb={'rQtAB':function(_0x4318e4,_0x3f0628,_0x4d5ee1){return _0x1cde62['icppe'](_0x4318e4,_0x3f0628,_0x4d5ee1);},'Jrccs':function(_0x5c5c46,_0xe9403){return _0x5c5c46(_0xe9403);},'tLbzL':_0x1cde62[_0x29a3cc(0x41e)],'XHvsA':function(_0x4b18dc,_0x3e0184){return _0x4b18dc!==_0x3e0184;}},_0x4d599a=document[_0x29a3cc(0x3a1)+_0x29a3cc(0x156)+_0x29a3cc(0xee)](_0x1cde62['yHwHN']);_0x4d599a[_0x29a3cc(0x361)+'Name']=_0x1cde62['RtkNp']+(_0x325299?_0x1cde62['FaYrw']:'');var _0x587449=document[_0x29a3cc(0x3a1)+'eElem'+'ent'](_0x29a3cc(0x5d9));_0x587449[_0x29a3cc(0x361)+'Name']=_0x29a3cc(0x389)+_0x29a3cc(0x3ad)+'ad';var _0x566995=document['creat'+_0x29a3cc(0x156)+'ent']('div');_0x566995[_0x29a3cc(0x361)+'Name']=_0x1cde62[_0x29a3cc(0x3e2)];var _0x358ca5=document['creat'+_0x29a3cc(0x156)+'ent'](_0x29a3cc(0x680)+'g');_0x358ca5['textC'+'onten'+'t']=_0x34cced,_0x566995['appen'+'dChil'+'d'](_0x358ca5);if(_0x1f8273){var _0x31f1f9=_0x1cde62[_0x29a3cc(0x3bd)](_0x2b1860,_0x325299,_0x3dd8a3=>{var _0x53acea=_0x29a3cc;if(_0x1135bb[_0x53acea(0x23d)](_0x53acea(0x14d),_0x53acea(0x3d0)))_0x4d599a[_0x53acea(0x361)+'List'][_0x53acea(0x289)+'e']('on',_0x3dd8a3),_0x1f8273(_0x3dd8a3);else{var _0x546940=_0x1135bb['rQtAB'](_0x2cb8bd,_0x5d9f49,-0x30*-0x25+0xa09+0x59b*-0x3),_0x11990d=_0x38e0c9['min'](_0x1135bb[_0x53acea(0x1a9)](_0x5d01ba,_0x546940),0x2410+0x9d9*-0x1+-0x1a17);for(var _0x20c14d=0x13*-0x47+-0x2605+0x2*0x15a5;_0x20c14d<_0x11990d;_0x20c14d++){var _0x24242d=_0x4bd768(_0x546940,_0x20c14d);if(_0x24242d)_0x34ed5d[_0x53acea(0x9a)](_0x24242d);}_0x496340(_0x53acea(0x4b1),_0x1135bb['tLbzL']+_0x1d7544(_0x4390a3)+_0x53acea(0x615)+_0x27b447[_0x53acea(0x113)+'h']+('\x20comp'+_0x53acea(0x678)+'s\x20sca'+'nned'));}});_0x587449['appen'+'d'](_0x566995,_0x31f1f9);}else _0x587449[_0x29a3cc(0x356)+_0x29a3cc(0x5af)+'d'](_0x566995);_0x4d599a[_0x29a3cc(0x356)+'dChil'+'d'](_0x587449);if(_0x1da2be&&_0x1da2be[_0x29a3cc(0x113)+'h']){if(_0x1cde62['AFhdK'](_0x1cde62['OVeuW'],_0x1cde62['fsBFg'])){var _0x58b852=document['creat'+_0x29a3cc(0x156)+'ent'](_0x1cde62[_0x29a3cc(0x2cb)]);_0x58b852['class'+'Name']='sk-mb'+_0x29a3cc(0x518);for(var _0x19abf7 of _0x1da2be)_0x58b852[_0x29a3cc(0x356)+_0x29a3cc(0x5af)+'d'](_0x19abf7);_0x4d599a[_0x29a3cc(0x356)+_0x29a3cc(0x5af)+'d'](_0x58b852);}else _0x557e6e[_0x29a3cc(0x543)+'errid'+'e']=_0x46f8ee,_0x1cde62[_0x29a3cc(0x1ff)](_0x2c0324);}return _0x4d599a;}function _0x528045(_0x49e351){var _0x5a5616=_0x3d27bd,_0x3734e8=_0x1cde62['uIRcs'][_0x5a5616(0x2c1)]('|'),_0x102ad8=-0x4*-0x2d4+0x1133+-0x1c83;while(!![]){switch(_0x3734e8[_0x102ad8++]){case'0':_0x482b45[_0x5a5616(0xce)+_0x5a5616(0x28e)+'t']=_0x49e351;continue;case'1':_0x482b45['class'+_0x5a5616(0x60f)]=_0x5a5616(0x15f)+'l';continue;case'2':return _0x482b45;case'3':var _0x482b45=document['creat'+_0x5a5616(0x156)+'ent'](_0x5a5616(0x5d9));continue;case'4':_0x482b45[_0x5a5616(0x288)][_0x5a5616(0x418)+'xt']=_0x5a5616(0x1d3)+_0x5a5616(0x1ad)+'11px;'+_0x5a5616(0x4f7)+_0x5a5616(0x164)+_0x5a5616(0x2be)+'238,2'+_0x5a5616(0x33d)+_0x5a5616(0x218)+'te-sp'+_0x5a5616(0x684)+'re-wr'+_0x5a5616(0x217)+_0x5a5616(0x44a)+'eak:b'+_0x5a5616(0x208)+'all';continue;}break;}}function _0x12125c(_0x13dec4,_0x43f324){var _0x126ac2=_0x3d27bd,_0x28141c=document[_0x126ac2(0x3a1)+'eElem'+'ent'](_0x1cde62['fYeOJ']);return _0x28141c['type']='butto'+'n',_0x28141c['textC'+_0x126ac2(0x28e)+'t']=_0x13dec4,_0x28141c[_0x126ac2(0x288)][_0x126ac2(0x418)+'xt']=_0x1cde62[_0x126ac2(0x5be)],_0x28141c['oncli'+'ck']=_0x36b578=>{var _0x25f7f1=_0x126ac2,_0x438885={'XyEni':_0x25f7f1(0x661),'DpWJu':function(_0x37f453,_0x40d059,_0x11eafd,_0x24f613,_0x189c39){return _0x37f453(_0x40d059,_0x11eafd,_0x24f613,_0x189c39);},'opmZo':function(_0x3bd660,_0x219b3d,_0x1ad8d6,_0x40ca08,_0x540aeb){var _0x281cf2=_0x25f7f1;return _0x1cde62[_0x281cf2(0x18a)](_0x3bd660,_0x219b3d,_0x1ad8d6,_0x40ca08,_0x540aeb);}};_0x1cde62[_0x25f7f1(0x372)]('jLIlZ',_0x25f7f1(0x67a))?(_0x36b578[_0x25f7f1(0x31f)+_0x25f7f1(0xd8)+_0x25f7f1(0x672)](),_0x1cde62['cKJeq'](_0x43f324)):(_0x19e5b9(_0x84922a,-0x2c*0x61+-0xc27+-0x1d6b*-0x1,_0x438885['XyEni'],_0x55b0d4),_0x438885['DpWJu'](_0x4e80dc,_0xd9007b,-0x37d+-0x3*0x52f+-0x1ca*-0xb,_0x438885[_0x25f7f1(0x55e)],_0x45f242),_0x438885['opmZo'](_0x2f88d9,_0x279a67,-0x11c0+-0xa*-0xdf+0x9b2,'f32',_0x995c9f));},_0x28141c;}function _0x19e4c7(){var _0x563803=_0x3d27bd,_0x5ed5e5={'qvcZC':function(_0x553ad0,_0x2b2d20){return _0x553ad0*_0x2b2d20;},'ckwzU':_0x563803(0x101),'JJAGv':function(_0x489fb5,_0x255bd9){return _0x1cde62['rXLmS'](_0x489fb5,_0x255bd9);},'dSGRQ':function(_0x1b3578,_0x57482f){return _0x1cde62['dtSUF'](_0x1b3578,_0x57482f);},'gLnAM':function(_0x10cd51){var _0x4de4a8=_0x563803;return _0x1cde62[_0x4de4a8(0x1ff)](_0x10cd51);},'MThhJ':function(_0xdfd9c6){return _0xdfd9c6();},'clAXA':function(_0x5d97a4,_0x4e9e1e){return _0x5d97a4!==_0x4e9e1e;},'ueuuf':function(_0x2087a0){return _0x2087a0();},'ikQiF':function(_0x14c98f,_0x43f00c){return _0x14c98f===_0x43f00c;},'WBRMN':_0x563803(0xd1),'WXXgT':_0x1cde62[_0x563803(0x26a)],'qRMaj':_0x1cde62[_0x563803(0x40f)],'DXwYV':function(_0x227ef1,_0x40ac81){return _0x227ef1(_0x40ac81);},'bqUhe':_0x1cde62['XAaeT'],'hLtlm':function(_0x26d11d){var _0x8da47d=_0x563803;return _0x1cde62[_0x8da47d(0x652)](_0x26d11d);},'DnVbd':'HbtkN','EtJtv':function(_0x1d1cf0,_0x2f5d76,_0x56d43e){return _0x1d1cf0(_0x2f5d76,_0x56d43e);},'IRkvw':_0x563803(0x1e0)+'logs','fVUrt':function(_0xe6dc7b,_0x523fae,_0x18bde5){return _0xe6dc7b(_0x523fae,_0x18bde5);},'fHLOR':_0x1cde62['ohPja'],'ZKCOd':function(_0x86f409,_0x20bd60,_0x3090d5){var _0x5e2538=_0x563803;return _0x1cde62[_0x5e2538(0x536)](_0x86f409,_0x20bd60,_0x3090d5);},'usvmA':_0x1cde62['PCqOK'],'mXvtN':_0x563803(0x236),'ssuQg':_0x563803(0x68e),'pVQJE':function(_0x96dafb,_0x13f937,_0x5058f5){return _0x1cde62['WCbiI'](_0x96dafb,_0x13f937,_0x5058f5);},'majiG':_0x563803(0x54b),'qhEED':function(_0x2d0378,_0x323d82,_0x12cb2c){var _0x27dc4a=_0x563803;return _0x1cde62[_0x27dc4a(0x12e)](_0x2d0378,_0x323d82,_0x12cb2c);},'ePpBV':'Healt'+'h','nZsHV':_0x563803(0x36a),'vwmQn':function(_0xe6bf4d,_0x43cccc,_0x3d76d0,_0x2d3fa4,_0x1f57ed,_0x39f389){return _0xe6bf4d(_0x43cccc,_0x3d76d0,_0x2d3fa4,_0x1f57ed,_0x39f389);},'WJaIX':function(_0x5baf9d,_0x18cc38,_0x1e25a7,_0x11892f,_0x4663c1){return _0x5baf9d(_0x18cc38,_0x1e25a7,_0x11892f,_0x4663c1);},'ZPCvk':function(_0xa1e7c0,_0x22862c,_0x5d3652){return _0xa1e7c0(_0x22862c,_0x5d3652);},'ODrte':function(_0x50dd39,_0x2ad563,_0x4c49cb){return _0x50dd39(_0x2ad563,_0x4c49cb);},'XbqJE':function(_0x483d85,_0x4f770d,_0x5d3070,_0x55d940,_0x5ce9eb,_0x540f99){return _0x483d85(_0x4f770d,_0x5d3070,_0x55d940,_0x5ce9eb,_0x540f99);},'HoBUr':'Speed'+'\x20%','eDTOI':function(_0x1f871a,_0x199133,_0x4a5469,_0x4f6ba6,_0xe19ae8,_0x2fa371){return _0x1f871a(_0x199133,_0x4a5469,_0x4f6ba6,_0xe19ae8,_0x2fa371);},'snfxL':function(_0x52502a,_0x5c7159,_0x54d1b3){var _0x55ba9b=_0x563803;return _0x1cde62[_0x55ba9b(0x3bd)](_0x52502a,_0x5c7159,_0x54d1b3);},'xOepe':_0x1cde62[_0x563803(0x206)],'kOUVe':function(_0x1c44e0,_0x4ba6eb,_0x2e978b){return _0x1c44e0(_0x4ba6eb,_0x2e978b);},'Xebti':_0x1cde62['yZmOX'],'NceVY':function(_0x1beac7,_0x41a8e5,_0x111e44,_0xbeef94,_0xf125eb){return _0x1beac7(_0x41a8e5,_0x111e44,_0xbeef94,_0xf125eb);},'OQIzZ':_0x563803(0x321)+'0\x20=\x20a'+'uto)','GBAut':'Safet'+'y','jHgYp':function(_0x5afab1,_0x1ae6e4,_0x27c169){return _0x5afab1(_0x1ae6e4,_0x27c169);},'HfhgV':function(_0x222945,_0x28e78a){var _0x27bcc3=_0x563803;return _0x1cde62[_0x27bcc3(0x665)](_0x222945,_0x28e78a);},'vPEbv':function(_0x481413,_0xcd08a){return _0x481413+_0xcd08a;},'BqJES':_0x563803(0x26c)+'ied','UzAWM':function(_0x139d2d,_0x1f1a41){return _0x139d2d+_0x1f1a41;},'qKdtv':function(_0x19a72e,_0x55282a){return _0x1cde62['yyMxD'](_0x19a72e,_0x55282a);},'PsRxS':_0x563803(0x340),'Udbgy':'\x20view'+'\x20','mbXGJ':'\x20cam\x20','fyCGI':function(_0x44b39d,_0x449d4e){return _0x44b39d(_0x449d4e);},'Khplt':function(_0x248978,_0x62e689){return _0x248978(_0x62e689);},'hwuxw':'F6\x20du'+'mps\x20t'+'he\x20fu'+_0x563803(0x5b5)+_0x563803(0x1f3)+_0x563803(0x33c)+_0x563803(0x5d3)+_0x563803(0x1fd)+'nsole'};if('dtZtz'!==_0x1cde62[_0x563803(0x30f)]){var _0x1652ed=new _0x4a77f0([_0x1cde62['fpfuQ'](_0x10e3bc)],{'type':'text/'+_0x563803(0x4fc)}),_0x224fd=_0x240df6[_0x563803(0x3a1)+_0x563803(0x156)+'ent']('a');_0x224fd[_0x563803(0x345)]=_0x3e2daf['creat'+_0x563803(0x2fc)+_0x563803(0x5e4)](_0x1652ed),_0x224fd['downl'+_0x563803(0x554)]='sakur'+_0x563803(0x173)+'-log.'+_0x563803(0x426),_0x224fd['click'](),_0x4f2f9e(function(){var _0x314040=_0x563803;_0x28f00f['revok'+_0x314040(0x2fc)+_0x314040(0x5e4)](_0x224fd[_0x314040(0x345)]);},-0x378+0x2f*-0xa7+0x2609);}else{var _0x34f3b8=document[_0x563803(0x3a1)+'eElem'+'ent'](_0x1cde62['yHwHN']);_0x34f3b8['class'+_0x563803(0x60f)]=_0x1cde62['LQBQX'];var _0x11cec0=document[_0x563803(0x3a1)+'eElem'+_0x563803(0xee)](_0x1cde62['piFZc']);_0x11cec0[_0x563803(0x361)+'Name']=_0x563803(0x4b8)+'de';var _0x1f1709=document['creat'+'eElem'+_0x563803(0xee)]('div');_0x1f1709[_0x563803(0x361)+'Name']=_0x1cde62['sQLgf'],_0x1f1709['inner'+_0x563803(0x637)]='<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0x563803(0x313)+_0x563803(0x106)+'><lin'+'earGr'+_0x563803(0x227)+_0x563803(0x641)+_0x563803(0x330)+'rad\x22\x20'+_0x563803(0x5ab)+_0x563803(0x5e6)+_0x563803(0x13d)+_0x563803(0x63d)+'\x22\x20y2='+'\x2221\x22\x20'+_0x563803(0x35c)+_0x563803(0x43f)+'its=\x22'+_0x563803(0x17b)+_0x563803(0x35b)+_0x563803(0x551)+_0x563803(0x2ab)+_0x563803(0x582)+_0x563803(0x37c)+_0x563803(0x2ea)+_0x563803(0x5c2)+_0x563803(0x20c)+_0x563803(0x266)+'ec\x22/>'+_0x563803(0x46a)+'\x20offs'+'et=\x220'+_0x563803(0x1b9)+'stop-'+'color'+'=\x22#ff'+'b3c6\x22'+_0x563803(0x27a)+_0x563803(0x416)+_0x563803(0x4d3)+_0x563803(0x2c5)+_0x563803(0x298)+'olor='+_0x563803(0x371)+'b9d\x22/'+'></li'+_0x563803(0x18c)+_0x563803(0x508)+_0x563803(0x59d)+_0x563803(0x544)+_0x563803(0x11e)+_0x563803(0xe7)+_0x563803(0x402)+_0x563803(0x600)+_0x563803(0x57c)+_0x563803(0x31d)+_0x563803(0xf4)+'5\x200-2'+'.5\x201.'+'8-4.5'+_0x563803(0x170)+_0x563803(0x162)+'\x204\x204.'+_0x563803(0x382)+_0x563803(0x438)+_0x563803(0x5de)+_0x563803(0x4ff)+'fill='+_0x563803(0x498)+'\x22\x20str'+'oke=\x22'+_0x563803(0x24a)+_0x563803(0x36e)+'ad)\x22\x20'+'strok'+'e-wid'+_0x563803(0x41d)+'\x22\x20str'+_0x563803(0xae)+_0x563803(0x5dc)+'p=\x22ro'+'und\x22\x20'+'strok'+_0x563803(0x675)+_0x563803(0x32d)+'=\x22rou'+'nd\x22/>'+'<path'+_0x563803(0xe7)+'12\x203v'+_0x563803(0x414)+_0x563803(0x542)+'5\x200-2'+'.5\x201-'+_0x563803(0x281)+_0x563803(0x46c)+_0x563803(0xb6)+_0x563803(0x597)+_0x563803(0x197)+_0x563803(0x281)+_0x563803(0x31b)+_0x563803(0x66b)+_0x563803(0x114)+_0x563803(0x68d)+_0x563803(0x561)+_0x563803(0x4cb)+_0x563803(0x3e0)+'d)\x22\x20s'+_0x563803(0x355)+'-widt'+_0x563803(0x669)+'5\x22\x20st'+'roke-'+_0x563803(0x199)+_0x563803(0x159)+_0x563803(0x2d8)+_0x563803(0x48f)+_0x563803(0x1ec)+'cx=\x221'+'2\x22\x20cy'+'=\x2210\x22'+'\x20r=\x221'+_0x563803(0x31b)+_0x563803(0x66b)+_0x563803(0x64c)+'9d\x22/>'+'</svg'+'>',_0x11cec0[_0x563803(0x356)+_0x563803(0x5af)+'d'](_0x1f1709);var _0x364bb5=document['creat'+_0x563803(0x156)+_0x563803(0xee)]('div');_0x364bb5['class'+_0x563803(0x60f)]=_0x563803(0x4c6)+'in';var _0x23c64c=document[_0x563803(0x3a1)+_0x563803(0x156)+_0x563803(0xee)]('heade'+'r');_0x23c64c[_0x563803(0x361)+'Name']=_0x563803(0x1c3)+'p';var _0x44225d=document[_0x563803(0x3a1)+'eElem'+_0x563803(0xee)]('h2');_0x44225d[_0x563803(0x361)+_0x563803(0x60f)]=_0x563803(0x50d),_0x44225d[_0x563803(0xce)+_0x563803(0x28e)+'t']=_0x563803(0x118)+'o';var _0x564600=document[_0x563803(0x3a1)+_0x563803(0x156)+_0x563803(0xee)](_0x1cde62[_0x563803(0x56b)]);_0x564600['type']=_0x563803(0xcc)+'n',_0x564600['class'+'Name']=_0x1cde62[_0x563803(0x2e1)],_0x564600[_0x563803(0x16b)+_0x563803(0x637)]='<svg\x20'+_0x563803(0x65a)+_0x563803(0x528)+'\x200\x2024'+'\x2024\x22>'+'<path'+'\x20d=\x22M'+'6\x206l1'+_0x563803(0x12c)+_0x563803(0x122)+'6\x2018\x22'+_0x563803(0x370)+_0x563803(0x151),_0x564600[_0x563803(0x21d)+'ck']=()=>_0x37b75c(![]),_0x23c64c[_0x563803(0x356)+'d'](_0x44225d,_0x564600);var _0x36b7b3=null;_0x23c64c[_0x563803(0x460)+_0x563803(0x3a9)+_0x563803(0x26f)+'r'](_0x1cde62['Pfgib'],_0x38e16b=>{var _0x4b8cce=_0x563803,_0x4b251f=(_0x4b8cce(0x510)+_0x4b8cce(0x453))['split']('|'),_0x2d7610=0x1*0xb72+-0x1d3e+0x11cc;while(!![]){switch(_0x4b251f[_0x2d7610++]){case'0':_0x23c64c[_0x4b8cce(0x335)+_0x4b8cce(0x432)+_0x4b8cce(0x668)+'re'](_0x38e16b[_0x4b8cce(0x638)+'erId']);continue;case'1':_0x34f3b8[_0x4b8cce(0x361)+'List'][_0x4b8cce(0x40e)]('sk-dr'+_0x4b8cce(0x2ee)+'g');continue;case'2':_0x36b7b3=[_0x38e16b[_0x4b8cce(0xc9)+'tX']-_0x3d296b['left'],_0x38e16b[_0x4b8cce(0xc9)+'tY']-_0x3d296b[_0x4b8cce(0x5ef)]];continue;case'3':if(_0x38e16b[_0x4b8cce(0x1a0)+'t'][_0x4b8cce(0x532)+'st']('butto'+'n,\x20in'+_0x4b8cce(0x66e)))return;continue;case'4':var _0x3d296b=_0x34f3b8['getBo'+_0x4b8cce(0x4a9)+'gClie'+'ntRec'+'t']();continue;}break;}}),_0x23c64c['addEv'+_0x563803(0x3a9)+'stene'+'r'](_0x1cde62['tOWOi'],_0x56fc01=>{var _0x2c02fa=_0x563803;if('ErJen'===_0x5ed5e5[_0x2c02fa(0x5fe)])return _0x19aa75?_0x4ab387(_0xebb160,-0x4a9+-0x24e*0x7+-0x119*-0x13+_0x5ed5e5[_0x2c02fa(0x1cb)](_0xac8b8,-0xe5*0x11+-0x3*-0xa55+-0xfc6)):0xc12+0xb*-0x2c5+0x1265*0x1;else{if(!_0x36b7b3)return;_0x34f3b8[_0x2c02fa(0x288)][_0x2c02fa(0x49d)]=Math[_0x2c02fa(0x3b1)](Math['max'](0x15b*0x1c+-0x568+-0x823*0x4,_0x5ed5e5[_0x2c02fa(0x2eb)](_0x56fc01[_0x2c02fa(0xc9)+'tX'],_0x36b7b3[0x1e2e*-0x1+0x3c4*-0x7+0x388a])),window[_0x2c02fa(0x16b)+_0x2c02fa(0x35a)]-(0x1*-0xefd+0xb5c+-0x1*-0x469))+'px',_0x34f3b8[_0x2c02fa(0x288)][_0x2c02fa(0x5ef)]=Math[_0x2c02fa(0x3b1)](Math[_0x2c02fa(0x3c6)](0xa19+0x237+-0x4*0x314,_0x56fc01['clien'+'tY']-_0x36b7b3[-0xad8+0x33e+0x79b]),_0x5ed5e5[_0x2c02fa(0x516)](window['inner'+'Heigh'+'t'],0x4*-0x62b+0x1*0x22d5+-0x9c5))+'px',_0x34f3b8['style'][_0x2c02fa(0xba)]='auto',_0x34f3b8['style'][_0x2c02fa(0x3cd)+'m']='auto';}});var _0x1ed915=()=>{var _0x495b2e=_0x563803;if(!_0x36b7b3)return;_0x36b7b3=null,_0x34f3b8[_0x495b2e(0x361)+'List'][_0x495b2e(0x4af)+'e'](_0x1cde62['lyrtD']);var _0x27e657=_0x34f3b8[_0x495b2e(0x51e)+_0x495b2e(0x4a9)+_0x495b2e(0x5c9)+'ntRec'+'t']();_0x3dfe87['x']=_0x27e657[_0x495b2e(0x49d)],_0x3dfe87['y']=_0x27e657[_0x495b2e(0x5ef)],_0x1cde62['nXLtQ'](_0x27daf1);};_0x23c64c[_0x563803(0x460)+_0x563803(0x3a9)+'stene'+'r'](_0x563803(0x638)+_0x563803(0x68f),_0x1ed915),_0x23c64c[_0x563803(0x460)+_0x563803(0x3a9)+_0x563803(0x26f)+'r']('point'+_0x563803(0x656)+_0x563803(0x3f4),_0x1ed915);var _0x1bb8cc=document['creat'+_0x563803(0x156)+'ent'](_0x563803(0x5d9));_0x1bb8cc[_0x563803(0x361)+_0x563803(0x60f)]=_0x563803(0x3d1)+'ls',_0x364bb5[_0x563803(0x356)+'d'](_0x23c64c,_0x1bb8cc),_0x34f3b8['appen'+'d'](_0x11cec0,_0x364bb5);function _0x51b397(){var _0x3c75a1=_0x563803,_0x3ec7f2={'UvgmM':function(_0x53e0a2,_0x4319e9,_0x23fa43){return _0x53e0a2(_0x4319e9,_0x23fa43);},'Mlbhx':function(_0x1d1f71,_0x311fc1){return _0x5ed5e5['clAXA'](_0x1d1f71,_0x311fc1);},'RKSEj':_0x5ed5e5['usvmA'],'kOTRx':function(_0x1f3768){var _0xa7c2f8=_0x3c10;return _0x5ed5e5[_0xa7c2f8(0x43d)](_0x1f3768);},'tyiow':'strin'+'g','OdTED':function(_0x423711,_0x53c73){return _0x423711(_0x53c73);},'fEhvi':function(_0x3744d9,_0x2f1b3e){var _0x5e3778=_0x3c10;return _0x5ed5e5[_0x5e3778(0x256)](_0x3744d9,_0x2f1b3e);},'VgcAS':_0x5ed5e5[_0x3c75a1(0x2f1)],'SRHpO':function(_0x5e161b){return _0x5e161b();},'Ruqmk':function(_0x5e757f,_0x2b2ef7){return _0x5e757f===_0x2b2ef7;},'HHrZJ':function(_0x276198){return _0x276198();},'MnTGt':function(_0x3f23cf){return _0x3f23cf();},'ZidxO':function(_0x24f02b){return _0x24f02b();},'KiRQr':function(_0x5e4ced,_0x4a1b08){return _0x5e4ced===_0x4a1b08;},'UKJfb':function(_0x4a9e21,_0x3db43f,_0x1cef6f){return _0x4a9e21(_0x3db43f,_0x1cef6f);},'rkwwm':'copy','HGwGt':_0x3c75a1(0xcd)+_0x3c75a1(0x3c2)};if(_0x3c75a1(0x68e)!==_0x5ed5e5[_0x3c75a1(0x30b)])_0x1497d0[_0x50a674]=!![],_0x3ec7f2[_0x3c75a1(0x310)](_0x2f2d57,_0x3c75a1(0x56f)+'re',_0x1c2c68);else return[_0x360352('ESP\x20—'+_0x3c75a1(0x5b0)+'er\x20sc'+'hema',_0x110395[_0x3c75a1(0x307)],_0x4abad0=>{_0x110395['esp']=_0x4abad0,_0x5ed5e5['gLnAM'](_0x36e9f5);},[_0x5ed5e5['pVQJE'](_0x19c4c9,_0x5ed5e5['majiG'],_0x2b1860(_0x110395['boxes'],_0x122b9f=>{var _0x5d494e=_0x3c75a1;_0x110395[_0x5d494e(0x644)]=_0x122b9f,_0x5ed5e5[_0x5d494e(0xd9)](_0x36e9f5);})),_0x5ed5e5[_0x3c75a1(0x698)](_0x19c4c9,_0x3c75a1(0x216),_0x2b1860(_0x110395['names'],_0x25fc14=>{var _0x42a817=_0x3c75a1;_0x110395['names']=_0x25fc14,_0x5ed5e5[_0x42a817(0x591)](_0x36e9f5);})),_0x19c4c9(_0x5ed5e5['ePpBV'],_0x2b1860(_0x110395[_0x3c75a1(0x36b)+'h'],_0x3a47dc=>{var _0x506ef4=_0x3c75a1;_0x110395['healt'+'h']=_0x3a47dc,_0x5ed5e5[_0x506ef4(0x591)](_0x36e9f5);})),_0x19c4c9('Team\x20'+_0x3c75a1(0x4f7)+'s',_0x5ed5e5[_0x3c75a1(0x4fe)](_0x2b1860,_0x110395[_0x3c75a1(0x42a)],_0x2b6f35=>{var _0x485cdf=_0x3c75a1;if('yCpoZ'===_0x3ec7f2[_0x485cdf(0x3b9)])try{var _0x5259a1=new _0x342315(_0x3b6cbb)['readF'+'ield'](_0x4ac549,_0x1b9e55);_0x43a3bf[_0x485cdf(0x4a2)](_0x324ea8,_0x3ec7f2['Mlbhx'](_0x5259a1,_0xbe9842)?_0x5259a1['val']():null);}catch(_0x33e771){_0x6bef6c['set'](_0x1ae06c,null);}else _0x110395[_0x485cdf(0x42a)]=_0x2b6f35,_0x3ec7f2['kOTRx'](_0x36e9f5);})),_0x19c4c9(_0x3c75a1(0x5d7),_0x2b1860(_0x110395[_0x3c75a1(0x28d)],_0x37feb1=>{var _0xc53968=_0x3c75a1;_0x110395[_0xc53968(0x28d)]=_0x37feb1,_0x5ed5e5['gLnAM'](_0x36e9f5);})),_0x19c4c9(_0x5ed5e5[_0x3c75a1(0x14f)],_0x5ed5e5['vwmQn'](_0x1670af,_0x110395[_0x3c75a1(0x515)],0x1b21+0x168d+-0x31ae+0.5,-0x136c*0x1+0x5*0x62f+0x1*-0xb7d,0xa0f+-0xbf4+0x1*0x1e5+0.05,_0x2b2b9e=>{var _0x49b6cd=_0x3c75a1;if(_0x5ed5e5[_0x49b6cd(0x3f5)]('aEZmr',_0x49b6cd(0xad))){if(typeof _0x24bdf4===_0x3ec7f2['tyiow'])return _0x3be1d7;if(_0x59db28&&_0x2e662f[_0x49b6cd(0x547)+'ge'])return _0x462f9c['messa'+'ge'];try{return _0x3ec7f2[_0x49b6cd(0x144)](_0xab19aa,_0x36c39f);}catch(_0x3b6dc2){return'?';}}else _0x110395[_0x49b6cd(0x515)]=_0x2b2b9e,_0x36e9f5();}))]),_0x5ed5e5[_0x3c75a1(0x469)](_0x360352,'Comba'+'t',![],null,[_0x5ed5e5[_0x3c75a1(0x4fe)](_0x19c4c9,_0x3c75a1(0xcf)+_0x3c75a1(0x160)+'(hook'+')',_0x2b1860(_0x110395['noRec'+_0x3c75a1(0x260)],_0x2ca4d6=>{var _0x17bd5f=_0x3c75a1;_0x110395[_0x17bd5f(0x691)+'oil']=_0x2ca4d6,_0x36e9f5();})),_0x19c4c9('No\x20bl'+_0x3c75a1(0x4bc),_0x2b1860(_0x110395[_0x3c75a1(0x621)+_0x3c75a1(0x3a6)],_0x307b14=>{var _0x449b93=_0x3c75a1;_0x110395['noSpr'+_0x449b93(0x3a6)]=_0x307b14,_0x5ed5e5[_0x449b93(0x43d)](_0x36e9f5);})),_0x5ed5e5['ZPCvk'](_0x19c4c9,_0x3c75a1(0x1d4)+'\x20fire',_0x5ed5e5[_0x3c75a1(0x52a)](_0x2b1860,_0x110395['rapid'+_0x3c75a1(0x20b)],_0x39fb2=>{var _0x43ab3b=_0x3c75a1;_0x110395[_0x43ab3b(0x3d2)+'Fire']=_0x39fb2,_0x36e9f5();})),_0x19c4c9(_0x3c75a1(0x5a5)+'e',_0x5ed5e5['XbqJE'](_0x1670af,_0x110395[_0x3c75a1(0x5db)+'eValu'+'e'],0x12a9+-0x270+0x207*-0x8,0x1*-0x2170+0x5e7*-0x1+-0x1*-0x294b,0xd0c+0x1280+0x1db*-0x11,_0x59c976=>{var _0x3b98c2=_0x3c75a1,_0x207f62={'nNBSr':function(_0x2dc78d,_0x2e35e6,_0x3732b3){return _0x2dc78d(_0x2e35e6,_0x3732b3);},'forHb':'tick'};_0x5ed5e5[_0x3b98c2(0x256)](_0x5ed5e5['WBRMN'],_0x5ed5e5[_0x3b98c2(0x65f)])?(_0x110395['damag'+'eValu'+'e']=_0x59c976,_0x36e9f5()):_0x207f62['nNBSr'](_0x48c275,_0x207f62['forHb'],'deriv'+_0x3b98c2(0x14a)+_0x3b98c2(0x219)+_0x3b98c2(0x1c7)+(_0x3bc6a0&&_0x5cb389[_0x3b98c2(0x547)+'ge']));})),_0x19c4c9(_0x3c75a1(0x1ca)+'ite\x20a'+'mmo',_0x5ed5e5['ODrte'](_0x2b1860,_0x110395[_0x3c75a1(0x2bb)+'mo'],_0x16a703=>{var _0x4f8f88=_0x3c75a1,_0x340645={'XdTRA':'hook','vIgdW':function(_0x6d0f6,_0x211f91){return _0x6d0f6+_0x211f91;},'chHpU':_0x4f8f88(0x275)+'led='};if(_0x3ec7f2[_0x4f8f88(0x683)](_0x4f8f88(0x236),_0x3ec7f2[_0x4f8f88(0x694)]))_0x110395['infAm'+'mo']=_0x16a703,_0x3ec7f2[_0x4f8f88(0x39a)](_0x36e9f5);else{_0x1aaff2[_0x4f8f88(0x5f4)+'sLogg'+'ed']=!![];for(var _0x20b027 in _0x3c819c){var _0x485268=_0x86c936[_0x20b027];_0x4d8b94(_0x340645[_0x4f8f88(0x380)],_0x340645['vIgdW'](_0x340645['vIgdW'](_0x20b027,_0x4f8f88(0x26c)+'ied='),!!_0x485268[_0x4f8f88(0x15b)+'ed'])+_0x340645['chHpU']+!!_0x485268[_0x4f8f88(0x66f)+'ed']);}}}))]),_0x360352(_0x3c75a1(0x9d)+'ent',![],null,[_0x19c4c9(_0x5ed5e5['HoBUr'],_0x5ed5e5[_0x3c75a1(0x59c)](_0x1670af,_0x110395['speed'+'Pct'],0xd42+0x1*-0xb9c+-0x174,-0xb*-0x15e+-0xce3*0x2+0xb84,0x255b+-0x14c3+-0x89*0x1f,_0x3c49c3=>{var _0x478991=_0x3c75a1;_0x110395['speed'+_0x478991(0x62b)]=_0x3c49c3,_0x3ec7f2['SRHpO'](_0x36e9f5);})),_0x5ed5e5['snfxL'](_0x19c4c9,_0x5ed5e5[_0x3c75a1(0x530)],_0x5ed5e5[_0x3c75a1(0x384)](_0x1670af,_0x110395['jumpP'+'ct'],-0xeac*0x2+-0x10*0x67+0x23fa,0xca3*-0x1+0x2*0x121f+-0x16d3,0x3*-0x5a5+0x18f5*0x1+-0x805,_0x480837=>{var _0x53f9dd=_0x3c75a1;_0x3ec7f2[_0x53f9dd(0x673)]('wkxBF',_0x53f9dd(0x1ab))?(_0x110395['jumpP'+'ct']=_0x480837,_0x3ec7f2[_0x53f9dd(0x3c7)](_0x36e9f5)):(_0x131c94[_0x53f9dd(0x644)]=_0xf768b2,_0xdc5a2());})),_0x5ed5e5[_0x3c75a1(0x2a9)](_0x19c4c9,_0x5ed5e5['Xebti'],_0x5ed5e5['eDTOI'](_0x1670af,_0x110395[_0x3c75a1(0x154)+_0x3c75a1(0x636)],-0x25fc+0x18d*-0x9+0x33fb,-0xcc3+-0x3fc+-0x1*-0x1187,-0x1*-0x1223+0x23f*-0xb+0x693,_0x1dce5d=>{var _0x1a5568=_0x3c75a1;_0x110395[_0x1a5568(0x154)+_0x1a5568(0x636)]=_0x1dce5d,_0x5ed5e5[_0x1a5568(0x43d)](_0x36e9f5);}))]),_0x5ed5e5['NceVY'](_0x360352,_0x3c75a1(0x4f1)+_0x3c75a1(0x28c)+'n',![],null,[_0x5ed5e5[_0x3c75a1(0x4fe)](_0x19c4c9,_0x3c75a1(0x482)+_0x3c75a1(0x496),_0x1670af(_0x110395['camHe'+_0x3c75a1(0x4a8)],0xd2b+0x1999*0x1+-0x1362*0x2+0.8,-0x2215+0x7a5*0x1+0x1a72*0x1+0.6000000000000001,-0x258+-0x1*0x1b2+-0x5e*-0xb+0.02,_0x1c0005=>{var _0x343365=_0x3c75a1,_0x5929ac={'SnoDG':function(_0x39a85c,_0x45bb19,_0x3b4267){return _0x39a85c(_0x45bb19,_0x3b4267);},'xkqcZ':'ColyS'+'hoote'+'r','dCvpi':_0x5ed5e5['WXXgT'],'RScfH':_0x5ed5e5['qRMaj'],'zRaxo':function(_0x4cb475,_0x631903){var _0x36b7b=_0x3c10;return _0x5ed5e5[_0x36b7b(0x60e)](_0x4cb475,_0x631903);}};if(_0x5ed5e5['ikQiF']('YQRSY',_0x5ed5e5[_0x343365(0x430)]))_0x110395[_0x343365(0x581)+_0x343365(0x4a8)]=_0x1c0005,_0x5ed5e5['hLtlm'](_0x36e9f5);else{_0x49674a=_0x5929ac['SnoDG'](_0x5e7367,_0xf6f479,_0x5929ac['xkqcZ']);if(_0x24bde7)_0x3087ec(_0x5929ac[_0x343365(0x127)],_0x5929ac['RScfH']+_0x5929ac['zRaxo'](_0xa801d9,_0x4e4e55));}})),_0x5ed5e5['ODrte'](_0x19c4c9,_0x3c75a1(0x19c)+'r\x20hei'+'ght',_0x5ed5e5[_0x3c75a1(0x571)](_0x1670af,_0x110395[_0x3c75a1(0x4e3)+'rHeig'+'ht'],-0x1880+0x8*-0x368+0x33c1+0.19999999999999996,0x2573*-0x1+0x44b*0x3+0x79*0x34+0.3999999999999999,-0x1b64+0x39f+0x17c5+0.02,_0x4cf4d5=>{var _0x1a8833=_0x3c75a1;_0x110395[_0x1a8833(0x4e3)+_0x1a8833(0x32c)+'ht']=_0x4cf4d5,_0x3ec7f2[_0x1a8833(0x1dd)](_0x36e9f5);})),_0x19c4c9(_0x5ed5e5['OQIzZ'],_0x1670af(_0x110395['fovOv'+_0x3c75a1(0x277)+'e'],-0x26f8+0xc9+0x262f,0x388*-0x6+-0x658+0x8*0x380,-0x185a+-0x2*-0x134f+-0xe43,_0x2fa580=>{var _0x15bbac=_0x3c75a1,_0x211731={'FxuRN':function(_0x2ffc09){return _0x5ed5e5['hLtlm'](_0x2ffc09);},'pwBOM':function(_0xea16fd,_0x32300f){return _0xea16fd+_0x32300f;}};if(_0x5ed5e5[_0x15bbac(0x190)]!==_0x15bbac(0x3e8)){var _0x19be18=_0x211731[_0x15bbac(0x5a2)](_0x5360d1),_0x370342=_0x19be18[_0x15bbac(0x588)+_0x15bbac(0x296)+'tor'](_0x15bbac(0x410)+_0x15bbac(0x397))['child'+_0x15bbac(0x58e)];_0x5c88fd['repla'+_0x15bbac(0x1a6)+_0x15bbac(0x48e)](..._0x370342),_0x15916e['isFin'+_0x15bbac(0x5cc)](_0xe0d17a['x'])&&(_0x4b4a16[_0x15bbac(0x288)][_0x15bbac(0x49d)]=_0x211731['pwBOM'](_0x56e47f['x'],'px'),_0x209125[_0x15bbac(0x288)][_0x15bbac(0x5ef)]=_0x1cacdb['y']+'px');}else _0x110395[_0x15bbac(0x543)+'errid'+'e']=_0x2fa580,_0x36e9f5();}))]),_0x5ed5e5['NceVY'](_0x360352,_0x5ed5e5[_0x3c75a1(0x64a)],_0x110395['safeM'+'ode'],_0x24dda7=>{var _0x54fde0=_0x3c75a1;_0x110395[_0x54fde0(0x631)+_0x54fde0(0xb7)]=_0x24dda7,_0x3ec7f2['ZidxO'](_0x36e9f5);if(_0x24dda7){for(var _0x18349e in _0x4430e1)_0x58e8ce(_0x18349e,![]);}},[_0x19c4c9(_0x3c75a1(0x13b)+_0x3c75a1(0x569)+_0x3c75a1(0x60c)+'ture',_0x5ed5e5[_0x3c75a1(0x52a)](_0x2b1860,_0x110395['hookC'+_0x3c75a1(0x263)+'e'],_0x2d4001=>{var _0x2ab21a=_0x3c75a1,_0x763cb0={'jSaSe':function(_0x52b32e,_0x1da037,_0x644b8){var _0x39685a=_0x3c10;return _0x3ec7f2[_0x39685a(0x310)](_0x52b32e,_0x1da037,_0x644b8);},'exrXS':_0x2ab21a(0x56f)+'re'};_0x3ec7f2['KiRQr']('TbEYH',_0x2ab21a(0x135))?(_0x110395['hookC'+_0x2ab21a(0x263)+'e']=_0x2d4001,_0x3ec7f2['MnTGt'](_0x36e9f5)):(_0x56054f=_0x48ecb4[_0x2ab21a(0x240)](),_0x6740de[_0x2ab21a(0x58f)+'r']=!![],_0x763cb0[_0x2ab21a(0x1bb)](_0x4eeb68,_0x763cb0['exrXS'],_0x2ab21a(0x38d)+_0x2ab21a(0x19c)+_0x2ab21a(0x2a5)+_0x2ab21a(0xc6)+_0x4a454d(_0x4b02d0)));})),_0x5ed5e5['jHgYp'](_0x19c4c9,'Hook:'+'\x20room'+_0x3c75a1(0x565)+'e',_0x5ed5e5[_0x3c75a1(0x2ba)](_0x2b1860,_0x110395[_0x3c75a1(0x660)+_0x3c75a1(0x363)],_0x2488d4=>{var _0x5caba5=_0x3c75a1;_0x110395[_0x5caba5(0x660)+'tate']=_0x2488d4,_0x36e9f5();})),_0x5ed5e5[_0x3c75a1(0x4fe)](_0x19c4c9,'Hook:'+_0x3c75a1(0x11c)+_0x3c75a1(0x280),_0x2b1860(_0x110395[_0x3c75a1(0x527)+'oReco'+'il'],_0xc53539=>{var _0x2134b3=_0x3c75a1;_0x110395[_0x2134b3(0x527)+_0x2134b3(0x2b1)+'il']=_0xc53539,_0x5ed5e5[_0x2134b3(0xd9)](_0x36e9f5);})),_0x5ed5e5[_0x3c75a1(0x1b4)](_0x528045,_0x5ed5e5[_0x3c75a1(0xe8)]('hooks'+'\x20'+_0x461001['hooks'+'Ok'],'/')+_0x461001[_0x3c75a1(0x1b7)+'Total']+_0x5ed5e5[_0x3c75a1(0x44e)]),_0x5ed5e5['HfhgV'](_0x528045,_0x5ed5e5[_0x3c75a1(0xe8)](_0x5ed5e5[_0x3c75a1(0x3ae)](_0x3c75a1(0x4e3)+_0x3c75a1(0xf8)+_0x461001['playe'+'rs'],'\x20·\x20st'+_0x3c75a1(0xe3)),_0x461001[_0x3c75a1(0x1b0)]?'ok':'—')),_0x528045(_0x5ed5e5[_0x3c75a1(0x648)]('linke'+'r\x20'+(_0x461001['linke'+'r']?'✓':'—')+_0x5ed5e5[_0x3c75a1(0x249)]+(_0x461001[_0x3c75a1(0x35f)]?'✓':'—')+_0x5ed5e5['Udbgy']+(_0x461001['local'+'View']?'✓':'—')+_0x5ed5e5['mbXGJ'],_0x461001['charC'+'am']?'✓':'—')),_0x461001['lastE'+_0x3c75a1(0x66d)]?_0x5ed5e5[_0x3c75a1(0x14c)](_0x528045,_0x5ed5e5[_0x3c75a1(0x60e)](String,_0x461001[_0x3c75a1(0x37a)+_0x3c75a1(0x66d)])[_0x3c75a1(0x107)](-0x7*-0x57b+-0x3d1*-0x2+0xf*-0x311,-0x1*-0x174a+0x1d73+-0x3445)):_0x5ed5e5[_0x3c75a1(0x150)](_0x528045,_0x3c75a1(0x594)+_0x3c75a1(0x1e7))]),_0x360352('Log',![],null,[(function(){var _0x155dba=_0x3c75a1,_0x573d45={'DKpvD':function(_0x122846){return _0x122846();},'RIfaF':_0x155dba(0x4c8)+'plain','cmWZo':'sakur'+_0x155dba(0x173)+'-log.'+'txt','GzbBv':function(_0xb04cfb){return _0xb04cfb();}},_0x48ea3d=document[_0x155dba(0x3a1)+_0x155dba(0x156)+_0x155dba(0xee)](_0x155dba(0x5d9)),_0x440552=document['creat'+'eElem'+_0x155dba(0xee)](_0x155dba(0x112)+_0x155dba(0x29e));_0x440552[_0x155dba(0x9b)+_0x155dba(0x585)]=!![],_0x440552[_0x155dba(0x288)]['cssTe'+'xt']='width'+_0x155dba(0x4dc)+_0x155dba(0x4e8)+_0x155dba(0x1a8)+_0x155dba(0x531)+'ackgr'+_0x155dba(0x66a)+'rgba('+'0,0,0'+',.45)'+';colo'+'r:#ff'+'d7e3;'+_0x155dba(0x5ae)+_0x155dba(0x12a)+_0x155dba(0x1de)+_0x155dba(0x264)+'a(255'+_0x155dba(0x54e)+'157,.'+'25);b'+_0x155dba(0x2e5)+'-radi'+'us:8p'+_0x155dba(0x360)+'t:10p'+'x/1.4'+_0x155dba(0x354)+'monos'+_0x155dba(0x3de)+'Conso'+'las,m'+'onosp'+_0x155dba(0x61c)+_0x155dba(0x259)+_0x155dba(0x3aa)+_0x155dba(0x4e7)+'e-spa'+'ce:pr'+_0x155dba(0x180)+_0x155dba(0xe0)+_0x155dba(0x1b5),_0x440552['value']=_0x326e77();var _0x42e366=document[_0x155dba(0x3a1)+_0x155dba(0x156)+_0x155dba(0xee)](_0x155dba(0x5d9));_0x42e366['style'][_0x155dba(0x418)+'xt']='displ'+'ay:fl'+'ex;ga'+'p:6px'+';marg'+_0x155dba(0xbc)+_0x155dba(0x3a8);var _0x3daba4=_0x5ed5e5['EtJtv'](_0x12125c,_0x5ed5e5[_0x155dba(0x293)],function(){var _0x11e75d=_0x155dba,_0x4b248d={'itfnc':function(_0x353dec,_0x1bc7f1,_0x5b382a){return _0x3ec7f2['UKJfb'](_0x353dec,_0x1bc7f1,_0x5b382a);}},_0x305c2e=_0x326e77();navigator[_0x11e75d(0x10c)+_0x11e75d(0x2e7)]&&navigator[_0x11e75d(0x10c)+_0x11e75d(0x2e7)]['write'+'Text']?navigator['clipb'+_0x11e75d(0x2e7)]['write'+'Text'](_0x305c2e)['then'](function(){var _0xa54096=_0x11e75d;_0x3daba4[_0xa54096(0xce)+'onten'+'t']=_0xa54096(0xcd)+'d\x20✓',_0x4b248d[_0xa54096(0x34b)](setTimeout,function(){var _0x3b5fb4=_0xa54096;_0x3daba4[_0x3b5fb4(0xce)+_0x3b5fb4(0x28e)+'t']='Copy\x20'+'logs';},-0x60a*-0x6+-0x1828*-0x1+-0x3688);}):_0x11e75d(0x643)===_0x11e75d(0x643)?(_0x440552[_0x11e75d(0x452)+'t'](),document['execC'+_0x11e75d(0x44d)+'d'](_0x3ec7f2['rkwwm']),_0x3daba4[_0x11e75d(0xce)+_0x11e75d(0x28e)+'t']=_0x3ec7f2[_0x11e75d(0x194)],setTimeout(function(){var _0x1de0cc=_0x11e75d;_0x3daba4[_0x1de0cc(0xce)+'onten'+'t']=_0x1de0cc(0x1e0)+'logs';},0x1387*-0x2+0x2ca+0x2a20*0x1)):(_0x2893d0['lines']=_0x3084ff,_0x517d70());}),_0x242c6d=_0x5ed5e5[_0x155dba(0x2ba)](_0x12125c,_0x155dba(0x201)+_0x155dba(0xdf)+_0x155dba(0x426),function(){var _0xe8ba27=_0x155dba,_0x34bfac=new Blob([_0x573d45['DKpvD'](_0x326e77)],{'type':_0x573d45[_0xe8ba27(0x5da)]}),_0x263dbf=document['creat'+_0xe8ba27(0x156)+_0xe8ba27(0xee)]('a');_0x263dbf[_0xe8ba27(0x345)]=URL[_0xe8ba27(0x3a1)+_0xe8ba27(0x2fc)+_0xe8ba27(0x5e4)](_0x34bfac),_0x263dbf[_0xe8ba27(0x1df)+'oad']=_0x573d45[_0xe8ba27(0x628)],_0x263dbf[_0xe8ba27(0x4e9)](),setTimeout(function(){var _0x355dc1=_0xe8ba27;URL[_0x355dc1(0x222)+'eObje'+_0x355dc1(0x5e4)](_0x263dbf[_0x355dc1(0x345)]);},-0x2538+-0xebc+-0x11e*-0x32);}),_0x251a35=_0x12125c(_0x5ed5e5[_0x155dba(0x2a4)],function(){_0x573d45['GzbBv'](_0x9f7d11);}),_0x51717d=_0x5ed5e5[_0x155dba(0x4fe)](_0x12125c,'Clear',function(){var _0x35a672=_0x155dba;_0xb4d71e[_0x35a672(0x446)]['lengt'+'h']=-0x2138+-0x8a*-0x6+0x1dfc,_0x440552['value']=_0x326e77();});return _0x42e366[_0x155dba(0x356)+'d'](_0x3daba4,_0x242c6d,_0x251a35,_0x51717d),_0x48ea3d['appen'+'d'](_0x440552,_0x42e366),_0x48ea3d;}()),_0x528045(_0x5ed5e5[_0x3c75a1(0x572)])])];}return _0x1bb8cc[_0x563803(0xbf)+'ceChi'+_0x563803(0x48e)](..._0x51b397()),Number[_0x563803(0x315)+_0x563803(0x5cc)](_0x3dfe87['x'])&&(_0x34f3b8[_0x563803(0x288)][_0x563803(0x49d)]=_0x3dfe87['x']+'px',_0x34f3b8['style']['top']=_0x3dfe87['y']+'px',_0x34f3b8[_0x563803(0x288)][_0x563803(0xba)]=_0x563803(0x327),_0x34f3b8[_0x563803(0x288)][_0x563803(0x3cd)+'m']=_0x1cde62[_0x563803(0x5ff)]),_0x34f3b8;}}function _0x326e77(){var _0xb2ce31=_0x3d27bd,_0x76b9bf=[_0xb2ce31(0x350)+_0xb2ce31(0x268)+_0xb2ce31(0x124)+'DIAGN'+_0xb2ce31(0x1c9)+_0xb2ce31(0x18b),_0xb2ce31(0x39b)+'\x20'+location[_0xb2ce31(0x5b4)+_0xb2ce31(0x4ab)]+location['pathn'+'ame'],_0x1cde62['UguoB']('frame'+':\x20'+(_0x1cde62['juMbN'](window['top'],window['self'])?_0xb2ce31(0x145)+'D':'top'),_0xb2ce31(0x1bc)+':\x20')+(navigator[_0xb2ce31(0x63a)+_0xb2ce31(0x174)]||'')[_0xb2ce31(0x107)](-0x26af*0x1+-0xce4+0x1131*0x3,-0xcb9*0x2+-0x843+0x222d),_0x1cde62['NgbDH'](_0x1cde62['tQGws'](_0x1cde62[_0xb2ce31(0x3ea)](_0xb2ce31(0x50b)+'Insta'+_0xb2ce31(0x59e)+!!window[_0xb2ce31(0x50b)+'Insta'+_0xb2ce31(0x303)],_0x1cde62['KujYn']),!!window[_0xb2ce31(0x17c)+_0xb2ce31(0x3c9)+_0xb2ce31(0xb8)])+(_0xb2ce31(0x1ce)+_0xb2ce31(0x36d)+'e:\x20'),_0x110395[_0xb2ce31(0x631)+_0xb2ce31(0xb7)]),_0x1cde62[_0xb2ce31(0x3ea)](_0x1cde62['COepv'](_0x1cde62['Gwvoi']+_0x461001['hooks'+'Ok']+'/',_0x461001[_0xb2ce31(0x1b7)+_0xb2ce31(0x550)]),'\x20appl'+'ied')+_0x1cde62[_0xb2ce31(0x3c8)]+(_0x461001[_0xb2ce31(0x1b0)]?'ok':'—')+('\x20·\x20pl'+_0xb2ce31(0xf3)+':\x20')+_0x461001['playe'+'rs'],_0x1cde62['ugBWg'](_0x1cde62['SrpGt'](_0x1cde62['uZzMK'](_0x1cde62['xtjij'](_0x1cde62[_0xb2ce31(0x15c)](_0x1cde62[_0xb2ce31(0x649)](_0x1cde62['MRVmL'](_0x1cde62[_0xb2ce31(0x2bd)](_0x1cde62[_0xb2ce31(0x55d)](_0x1cde62[_0xb2ce31(0x16c)](_0xb2ce31(0x56f)+_0xb2ce31(0xa6)+_0xb2ce31(0x2a8)+'er:',_0x745628(_0x46e327)),_0xb2ce31(0x37f))+_0x1cde62[_0xb2ce31(0x121)](_0x745628,_0xb40998)+('\x20view'+':'),_0x745628(_0xe7a3c5)),_0x1cde62[_0xb2ce31(0x5c5)]),_0x745628(_0x5dd997)),'\x20char'+_0xb2ce31(0x169)),_0x745628(_0x5560b4))+_0x1cde62[_0xb2ce31(0x2bc)]+_0x1cde62['qdTsO'](_0x745628,_0x2bffd7)+(_0xb2ce31(0x3ef)+':'),_0x1cde62['pNyeE'](_0x745628,_0x4fdec8))+('\x20stat'+'e:'),_0x745628(_0x33ae77))+(_0xb2ce31(0x428)+_0xb2ce31(0x258)+'r:'),_0x1cde62[_0xb2ce31(0x191)](_0x745628,_0x5ec0ef))+('\x20shoo'+'ter:')+_0x745628(_0x109565),_0x1cde62[_0xb2ce31(0x61f)]+JSON[_0xb2ce31(0x38a)+'gify'](_0x110395),_0x461001['lastE'+_0xb2ce31(0x66d)]?_0x1cde62[_0xb2ce31(0x649)](_0xb2ce31(0x37a)+_0xb2ce31(0x4da)+'\x20',_0x461001[_0xb2ce31(0x37a)+_0xb2ce31(0x66d)]):'',_0x1cde62[_0xb2ce31(0x431)](_0x1cde62[_0xb2ce31(0x1cc)](_0xb2ce31(0x58a)+_0xb2ce31(0x573),_0xb4d71e['logs'][_0xb2ce31(0x113)+'h']),_0xb2ce31(0x2d3)+'ies)\x20'+'═══'),'']['join']('\x0a');return _0x1cde62['QdwlQ'](_0x76b9bf,_0xb4d71e['logs']['join']('\x0a'));}function _0x9f7d11(){var _0x5269a9=_0x3d27bd,_0x342354={'UERdg':_0x5269a9(0x661),'szxVq':function(_0x4dfaea,_0x1866d1,_0x175398,_0x1bf7d4,_0x2feb02){return _0x4dfaea(_0x1866d1,_0x175398,_0x1bf7d4,_0x2feb02);},'lZFZR':_0x5269a9(0x57f)};try{var _0x57a6f3=console['log'];(function(_0xc41fc){var _0x24e9ad=_0x5269a9;if(_0x342354[_0x24e9ad(0x5a1)]==='NzgSo'){for(var _0x4b1716=0x1587+-0x4b5+-0x10d2*0x1;_0x4b1716<_0xc41fc['lengt'+'h'];_0x4b1716++)_0x57a6f3[_0x24e9ad(0x337)](console,_0xc41fc[_0x4b1716]);}else _0x51dab7(_0xcea63a,0x3*-0x25b+0x1505+-0xd64,_0x342354['UERdg'],-0x1305*-0x1+0x3ba+-0x16bf+0.1),_0x342354['szxVq'](_0x4069ac,_0x1ef71a,0xfab+-0x215e*0x1+0x123f,'f32',-(0x1*0x258b+-0x2096+-0x1*0x10e));}(_0x326e77()['split']('\x0a')));}catch(_0xa626f4){}}function _0x27daf1(){var _0x5d3536=_0x3d27bd;try{localStorage['setIt'+'em'](_0x1cde62['TuDlp'],JSON[_0x5d3536(0x38a)+'gify'](_0x3dfe87));}catch(_0x14c340){}}var _0x187e03=null;function _0x37b75c(_0x44e02e){var _0x51fbcd=_0x3d27bd;_0x35a2bc=_0x44e02e;if(!_0x187e03){var _0x175057=document[_0x51fbcd(0x3a1)+_0x51fbcd(0x156)+'ent'](_0x1cde62[_0x51fbcd(0x46e)]);_0x175057[_0x51fbcd(0xce)+_0x51fbcd(0x28e)+'t']=_0x2cf959,_0x495ee6['appen'+'dChil'+'d'](_0x175057),_0x187e03=_0x1cde62[_0x51fbcd(0x5ce)](_0x19e4c7),_0x495ee6['appen'+_0x51fbcd(0x5af)+'d'](_0x187e03),requestAnimationFrame(()=>_0x187e03[_0x51fbcd(0x361)+_0x51fbcd(0x5fd)]['add'](_0x51fbcd(0x57e)));}_0x187e03[_0x51fbcd(0x361)+_0x51fbcd(0x5fd)][_0x51fbcd(0x289)+'e'](_0x51fbcd(0x57e),_0x44e02e);if(_0x44e02e)_0x18c4c1();}function _0x1b23bd(){_0x37b75c(!_0x35a2bc);}function _0x18c4c1(){var _0xd518c0=_0x3d27bd;if(_0x1cde62[_0xd518c0(0xfa)](_0xd518c0(0xc3),_0xd518c0(0x474)))try{_0x5c0ce1[_0xd518c0(0x546)+'em'](_0xd518c0(0x2fd)+_0xd518c0(0x172)+'.v1',_0x4dfc7c['strin'+_0xd518c0(0x52b)](_0x47afcb));}catch(_0x1544bb){}else{if(!_0x187e03)return;var _0x4309b9=_0x187e03[_0xd518c0(0x588)+_0xd518c0(0x296)+'tor']('.mn-c'+_0xd518c0(0x397));if(_0x4309b9){var _0x5d5707=_0x1cde62[_0xd518c0(0x5ce)](_0x19e4c7),_0x2b8c36=_0x5d5707[_0xd518c0(0x588)+_0xd518c0(0x296)+_0xd518c0(0x253)](_0xd518c0(0x410)+_0xd518c0(0x397))[_0xd518c0(0x492)+_0xd518c0(0x58e)];_0x4309b9[_0xd518c0(0xbf)+_0xd518c0(0x1a6)+'ldren'](..._0x2b8c36),Number[_0xd518c0(0x315)+_0xd518c0(0x5cc)](_0x3dfe87['x'])&&(_0x187e03[_0xd518c0(0x288)][_0xd518c0(0x49d)]=_0x3dfe87['x']+'px',_0x187e03[_0xd518c0(0x288)][_0xd518c0(0x5ef)]=_0x3dfe87['y']+'px');}}}window[_0x3d27bd(0x460)+'entLi'+_0x3d27bd(0x26f)+'r'](_0x3d27bd(0x375)+'wn',_0x5c5044=>{var _0x62a939=_0x3d27bd;_0x62a939(0x11b)==='iypcj'?(_0x3d37e1['hookC'+_0x62a939(0x263)+'e']=_0x133e17,_0x1cde62[_0x62a939(0x4b6)](_0x5e3d0b)):(_0x5c5044[_0x62a939(0x29d)]==='Inser'+'t'&&(_0x5c5044[_0x62a939(0x131)+'ntDef'+'ault'](),_0x1b23bd()),_0x1cde62[_0x62a939(0x316)](_0x5c5044[_0x62a939(0x29d)],'F6')&&(_0x1cde62['TSJjI']!=='mBtcd'?(_0x5c5044['preve'+'ntDef'+_0x62a939(0x193)](),_0x1cde62['zzPth'](_0x9f7d11)):(_0x4e9e94['team']=_0x14a371,_0x2afe24())));},!![]);var _0x1f9c33=document['creat'+'eElem'+_0x3d27bd(0xee)](_0x3d27bd(0x5d9));_0x1f9c33[_0x3d27bd(0x288)]['cssTe'+'xt']=_0x3d27bd(0x192)+'ion:f'+_0x3d27bd(0x1f4)+_0x3d27bd(0x49a)+'2px;r'+_0x3d27bd(0x13e)+'12px;'+_0x3d27bd(0x5d8)+'ex:21'+_0x3d27bd(0xc7)+_0x3d27bd(0x671)+_0x3d27bd(0x369)+':poin'+_0x3d27bd(0x697)+'idth:'+_0x3d27bd(0x21a)+'heigh'+_0x3d27bd(0x422)+'x;opa'+_0x3d27bd(0x443)+'0.5;t'+_0x3d27bd(0x11a)+_0x3d27bd(0x5a0)+_0x3d27bd(0x2b3)+'ty\x200.'+'2s;po'+_0x3d27bd(0x432)+'-even'+_0x3d27bd(0x3d7)+_0x3d27bd(0x3a3)+'lter:'+_0x3d27bd(0x685)+'shado'+_0x3d27bd(0xf6)+'\x204px\x20'+_0x3d27bd(0x4c9)+_0x3d27bd(0x592)+'07,15'+_0x3d27bd(0x328)+'))',_0x1f9c33[_0x3d27bd(0x16b)+_0x3d27bd(0x637)]='<svg\x20'+'viewB'+'ox=\x220'+_0x3d27bd(0x576)+'\x2024\x22>'+'<defs'+'><lin'+_0x3d27bd(0x60d)+_0x3d27bd(0x227)+_0x3d27bd(0x641)+'\x22sk-g'+_0x3d27bd(0x463)+_0x3d27bd(0x5ab)+_0x3d27bd(0x5e6)+_0x3d27bd(0x13d)+_0x3d27bd(0x63d)+'\x22\x20y2='+'\x2221\x22\x20'+_0x3d27bd(0x35c)+'entUn'+_0x3d27bd(0x4b2)+_0x3d27bd(0x17b)+_0x3d27bd(0x35b)+'nUse\x22'+'><sto'+'p\x20off'+'set=\x22'+_0x3d27bd(0x2ea)+'op-co'+'lor=\x22'+'#ffe0'+'ec\x22/>'+'<stop'+_0x3d27bd(0x485)+_0x3d27bd(0x5c0)+_0x3d27bd(0x1b9)+'stop-'+'color'+'=\x22#ff'+'b3c6\x22'+_0x3d27bd(0x27a)+'op\x20of'+_0x3d27bd(0x4d3)+'\x221\x22\x20s'+'top-c'+_0x3d27bd(0x1e3)+_0x3d27bd(0x371)+_0x3d27bd(0x611)+'></li'+_0x3d27bd(0x18c)+'radie'+'nt></'+_0x3d27bd(0x544)+'<path'+'\x20d=\x22M'+_0x3d27bd(0x402)+_0x3d27bd(0x600)+_0x3d27bd(0x57c)+_0x3d27bd(0x31d)+_0x3d27bd(0xf4)+_0x3d27bd(0x5f0)+_0x3d27bd(0x163)+'8-4.5'+_0x3d27bd(0x170)+'5s4\x202'+'\x204\x204.'+_0x3d27bd(0x382)+_0x3d27bd(0x438)+'5-4\x207'+_0x3d27bd(0x4ff)+'fill='+'\x22none'+_0x3d27bd(0x278)+'oke=\x22'+'url(#'+_0x3d27bd(0x36e)+_0x3d27bd(0xca)+_0x3d27bd(0x30d)+_0x3d27bd(0x4c4)+_0x3d27bd(0x41d)+_0x3d27bd(0x278)+_0x3d27bd(0xae)+'ineca'+_0x3d27bd(0x501)+'und\x22\x20'+'strok'+_0x3d27bd(0x675)+'ejoin'+_0x3d27bd(0x539)+'nd\x22/>'+_0x3d27bd(0x11e)+_0x3d27bd(0xe7)+'12\x203v'+_0x3d27bd(0x414)+'3c-1.'+'5\x200-2'+_0x3d27bd(0x49e)+_0x3d27bd(0x281)+_0x3d27bd(0x46c)+_0x3d27bd(0xb6)+'5\x200\x202'+_0x3d27bd(0x197)+'2.5\x202'+_0x3d27bd(0x31b)+_0x3d27bd(0x66b)+'none\x22'+_0x3d27bd(0x68d)+_0x3d27bd(0x561)+_0x3d27bd(0x4cb)+'k-gra'+'d)\x22\x20s'+'troke'+_0x3d27bd(0x4ed)+_0x3d27bd(0x669)+_0x3d27bd(0x4eb)+'roke-'+_0x3d27bd(0x199)+_0x3d27bd(0x159)+_0x3d27bd(0x2d8)+'/><ci'+'rcle\x20'+_0x3d27bd(0x4a0)+_0x3d27bd(0x620)+_0x3d27bd(0x41b)+_0x3d27bd(0x419)+_0x3d27bd(0x31b)+_0x3d27bd(0x66b)+'#ff6b'+_0x3d27bd(0x1bd)+'</svg'+'>',_0x1f9c33['title']='Sakur'+'a\x20Cli'+_0x3d27bd(0x602)+_0x3d27bd(0x484)+'io',_0x1f9c33['onmou'+_0x3d27bd(0x491)+'er']=()=>_0x1f9c33['style'][_0x3d27bd(0x2b3)+'ty']='1',_0x1f9c33['onmou'+'selea'+'ve']=()=>_0x1f9c33['style'][_0x3d27bd(0x2b3)+'ty']=_0x3d27bd(0x3f8),_0x1f9c33[_0x3d27bd(0x21d)+'ck']=_0x15c2bb=>{var _0x450a20=_0x3d27bd;_0x15c2bb[_0x450a20(0x31f)+'ropag'+_0x450a20(0x672)](),_0x1b23bd();};var _0x2cf959=_0x3d27bd(0x1f1)+_0x3d27bd(0x239)+_0x3d27bd(0x158)+_0x3d27bd(0x586)+'ial;\x20'+'}\x0a\x20\x20*'+_0x3d27bd(0x2d4)+_0x3d27bd(0x244)+_0x3d27bd(0x663)+_0x3d27bd(0x5ae)+_0x3d27bd(0x31e)+_0x3d27bd(0x348)+_0x3d27bd(0x334)+_0x3d27bd(0x16d)+_0x3d27bd(0x3d6)+_0x3d27bd(0x5e1)+_0x3d27bd(0x4f3)+'er\x22,\x20'+_0x3d27bd(0x392)+_0x3d27bd(0x5d5)+_0x3d27bd(0x125)+_0x3d27bd(0x2db)+'i,\x20sa'+'ns-se'+_0x3d27bd(0x406)+_0x3d27bd(0x4ec)+_0x3d27bd(0x47f)+_0x3d27bd(0x1b1)+'\x20posi'+'tion:'+'\x20abso'+_0x3d27bd(0xe5)+_0x3d27bd(0x20f)+_0x3d27bd(0x3a2)+'px;\x20b'+'ottom'+_0x3d27bd(0x2e0)+'x;\x20wi'+'dth:\x20'+_0x3d27bd(0x3cc)+'20px,'+'\x20calc'+_0x3d27bd(0x38c)+_0x3d27bd(0x612)+_0x3d27bd(0x3ce)+';\x20max'+'-heig'+_0x3d27bd(0x3b2)+_0x3d27bd(0x45e)+_0x3d27bd(0x5f7)+_0x3d27bd(0x23c)+_0x3d27bd(0xd7)+_0x3d27bd(0x224)+_0x3d27bd(0x488)+_0x3d27bd(0x1d2)+_0x3d27bd(0x341)+'ay:\x20f'+_0x3d27bd(0x333)+_0x3d27bd(0x110)+_0x3d27bd(0x301)+'\x20padd'+_0x3d27bd(0x663)+'10px;'+_0x3d27bd(0x604)+_0x3d27bd(0x19f)+'dius:'+'\x2022px'+_0x3d27bd(0x499)+_0x3d27bd(0x2aa)+_0x3d27bd(0x2b5)+'s:\x20au'+_0x3d27bd(0x477)+'\x20\x20\x20ba'+'ckgro'+'und:\x20'+_0x3d27bd(0x4c9)+'24,17'+',21,.'+'78);\x20'+_0x3d27bd(0x534)+_0x3d27bd(0x657)+_0x3d27bd(0x486)+':\x20blu'+_0x3d27bd(0x639)+_0x3d27bd(0x2f7)+'turat'+_0x3d27bd(0x176)+'%);\x20-'+'webki'+'t-bac'+'kdrop'+'-filt'+'er:\x20b'+_0x3d27bd(0x5e2)+'2px)\x20'+_0x3d27bd(0x54a)+'ate(1'+_0x3d27bd(0x304)+'\x0a\x20\x20\x20\x20'+_0x3d27bd(0x424)+'hadow'+_0x3d27bd(0x2d1)+_0x3d27bd(0x4d1)+_0x3d27bd(0x5b8)+_0x3d27bd(0x613)+_0x3d27bd(0x411)+_0x3d27bd(0x3b0)+_0x3d27bd(0x500)+'inset'+_0x3d27bd(0x4d1)+_0x3d27bd(0x606)+_0x3d27bd(0x232)+'55,25'+'5,255'+_0x3d27bd(0xe9)+_0x3d27bd(0x2d6)+_0x3d27bd(0x570)+_0x3d27bd(0x32a)+_0x3d27bd(0x325)+_0x3d27bd(0x18f)+'.55);'+_0x3d27bd(0x1d2)+'opaci'+'ty:\x200'+';\x20tra'+'nsfor'+_0x3d27bd(0x4c3)+'ansla'+_0x3d27bd(0x242)+_0x3d27bd(0x5ed)+'\x20poin'+_0x3d27bd(0x49b)+'vents'+':\x20non'+'e;\x20tr'+_0x3d27bd(0x1f9)+'ion:\x20'+_0x3d27bd(0x2b3)+'ty\x20.3'+_0x3d27bd(0x61e)+'se,\x20t'+_0x3d27bd(0x349)+'orm\x20.'+_0x3d27bd(0x65b)+_0x3d27bd(0x609)+'bezie'+_0x3d27bd(0x332)+_0x3d27bd(0x306)+_0x3d27bd(0x41f)+_0x3d27bd(0x1d2)+'color'+_0x3d27bd(0x2f2)+_0x3d27bd(0x111)+'\x20font'+_0x3d27bd(0x2cd)+':\x2013p'+'x;\x20}\x0a'+_0x3d27bd(0x247)+_0x3d27bd(0x440)+_0x3d27bd(0x55b)+_0x3d27bd(0x27b)+_0x3d27bd(0x2b3)+'ty:\x201'+';\x20tra'+_0x3d27bd(0x56a)+_0x3d27bd(0x2b8)+_0x3d27bd(0xbd)+_0x3d27bd(0x115)+'r-eve'+'nts:\x20'+'auto;'+'\x20}\x0a\x20\x20'+_0x3d27bd(0x35d)+'anel.'+_0x3d27bd(0x2fb)+_0x3d27bd(0x2ee)+'g\x20{\x20t'+'ransi'+_0x3d27bd(0x5a0)+'\x20none'+_0x3d27bd(0x605)+'\x20.mn-'+_0x3d27bd(0x272)+'{\x20dis'+'play:'+'\x20flex'+';\x20fle'+_0x3d27bd(0x59b)+_0x3d27bd(0x464)+'n:\x20co'+'lumn;'+_0x3d27bd(0x2b4)+_0x3d27bd(0x490)+'ms:\x20c'+'enter'+';\x20gap'+_0x3d27bd(0x555)+';\x20wid'+'th:\x206'+'2px;\x20'+(_0x3d27bd(0x524)+'\x20none'+_0x3d27bd(0x46f)+_0x3d27bd(0x1be)+'\x2012px'+_0x3d27bd(0x394)+_0x3d27bd(0x2e5)+_0x3d27bd(0x1a3)+'us:\x201'+_0x3d27bd(0x1f2)+'\x20\x20\x20\x20b'+_0x3d27bd(0x3eb)+_0x3d27bd(0x66a)+_0x3d27bd(0x5e5)+'(255,'+_0x3d27bd(0x69d)+'55,.0'+_0x3d27bd(0x28b)+'box-s'+_0x3d27bd(0x47b)+_0x3d27bd(0x5f8)+'et\x200\x20'+_0x3d27bd(0x11f)+'px\x20rg'+_0x3d27bd(0xda)+_0x3d27bd(0x276)+_0x3d27bd(0x411)+_0x3d27bd(0x506)+'\x20}\x0a\x20\x20'+_0x3d27bd(0x493)+_0x3d27bd(0x478)+_0x3d27bd(0x2ac)+_0x3d27bd(0x2b7)+_0x3d27bd(0x5c1)+'\x20plac'+'e-ite'+'ms:\x20c'+_0x3d27bd(0x1c1)+_0x3d27bd(0x2ed)+'th:\x203'+_0x3d27bd(0x420)+_0x3d27bd(0x213)+'t:\x2032'+_0x3d27bd(0x436)+'\x0a\x20\x20.m'+_0x3d27bd(0x442)+_0x3d27bd(0x319)+_0x3d27bd(0x61b)+_0x3d27bd(0x15d)+_0x3d27bd(0x557)+'\x20heig'+_0x3d27bd(0x166)+_0x3d27bd(0x610)+_0x3d27bd(0x4ef)+'low:\x20'+_0x3d27bd(0x5f5)+_0x3d27bd(0x18d)+'ilter'+_0x3d27bd(0x17f)+_0x3d27bd(0x34e)+'dow(0'+'\x200\x204p'+_0x3d27bd(0x5b8)+_0x3d27bd(0x613)+_0x3d27bd(0x54e)+_0x3d27bd(0x421)+'8))\x20d'+'rop-s'+_0x3d27bd(0x47b)+'(0\x200\x20'+'10px\x20'+'rgba('+_0x3d27bd(0x592)+'07,15'+_0x3d27bd(0x5ee)+_0x3d27bd(0xcb)+_0x3d27bd(0x247)+'-main'+_0x3d27bd(0x3d5)+'ex:\x201'+_0x3d27bd(0x252)+_0x3d27bd(0x4ed)+_0x3d27bd(0x393)+_0x3d27bd(0x2ac)+_0x3d27bd(0x2b7)+_0x3d27bd(0x137)+'\x20flex'+'-dire'+_0x3d27bd(0x54c)+_0x3d27bd(0x1ae)+'umn;\x20'+_0x3d27bd(0x4ec)+'mn-to'+_0x3d27bd(0x579)+_0x3d27bd(0x274)+_0x3d27bd(0x566)+'ex;\x20a'+_0x3d27bd(0x269)+_0x3d27bd(0x465)+_0x3d27bd(0x5df)+'ter;\x20'+_0x3d27bd(0x110)+_0x3d27bd(0xb3)+_0x3d27bd(0x358)+'ing:\x20'+_0x3d27bd(0x433)+'px\x2012'+'px;\x20c'+_0x3d27bd(0x369)+_0x3d27bd(0x152)+'b;\x20us'+'er-se'+_0x3d27bd(0x1e2)+'\x20none'+';\x20tou'+'ch-ac'+'tion:'+_0x3d27bd(0x2e9)+_0x3d27bd(0x605)+'\x20.mn-'+_0x3d27bd(0x10f)+_0x3d27bd(0x21f)+_0x3d27bd(0x108)+_0x3d27bd(0x647)+_0x3d27bd(0x33e)+'-weig'+'ht:\x206'+'50;\x20l'+_0x3d27bd(0x2f5)+'-spac'+_0x3d27bd(0x663)+'-.01e'+'m;\x20}\x0a'+_0x3d27bd(0x247)+_0x3d27bd(0x308)+_0x3d27bd(0xa3)+_0x3d27bd(0x274)+'y:\x20gr'+_0x3d27bd(0x403)+_0x3d27bd(0x5a8)+'items'+_0x3d27bd(0x5df)+_0x3d27bd(0x2f6)+_0x3d27bd(0x514)+_0x3d27bd(0x1fe)+_0x3d27bd(0x1ac)+_0x3d27bd(0x13e)+'\x2028px'+';\x20bor'+'der:\x20'+'0;\x20bo'+'rder-'+_0x3d27bd(0x2d5)+'s:\x208p'+'x;\x20ba'+'ckgro'+_0x3d27bd(0x207)+'trans'+'paren'+_0x3d27bd(0x1e6)+_0x3d27bd(0x4ae)+'inher'+_0x3d27bd(0x17d)+'pacit'+_0x3d27bd(0x48d)+_0x3d27bd(0x408)+_0x3d27bd(0x385)+_0x3d27bd(0x13c)+'ter;\x20'+_0x3d27bd(0x2c2)+'ition'+':\x20opa'+'city\x20'+_0x3d27bd(0x290)+'backg'+'round'+_0x3d27bd(0x55a)+_0x3d27bd(0x5e3)+_0x3d27bd(0x410)+_0x3d27bd(0x2af)+_0x3d27bd(0x241)+_0x3d27bd(0x3a5)+_0x3d27bd(0x619)+':\x201;\x20'+_0x3d27bd(0x2fe)+_0x3d27bd(0x495)+':\x20rgb'+'a(255'+_0x3d27bd(0x411)+_0x3d27bd(0x3b0)+'05);\x20'+_0x3d27bd(0x4ec)+_0x3d27bd(0x45a)+_0x3d27bd(0x342)+_0x3d27bd(0x1fc)+'width'+':\x2014p'+'x;\x20he'+'ight:'+_0x3d27bd(0x41a))+(_0x3d27bd(0x2c7)+_0x3d27bd(0x161)+'ne;\x20s'+'troke'+':\x20cur'+_0x3d27bd(0x589)+'olor;'+_0x3d27bd(0x68d)+'ke-wi'+_0x3d27bd(0x15d)+'2;\x20st'+'roke-'+'linec'+_0x3d27bd(0x5a4)+'ound;'+_0x3d27bd(0x5e3)+_0x3d27bd(0x410)+_0x3d27bd(0x3e1)+_0x3d27bd(0x305)+_0x3d27bd(0x5ca)+'min-h'+'eight'+_0x3d27bd(0x4c0)+_0x3d27bd(0x4ef)+_0x3d27bd(0xef)+':\x20aut'+'o;\x20di'+'splay'+':\x20gri'+_0x3d27bd(0x19e)+'id-te'+_0x3d27bd(0x63f)+'e-col'+_0x3d27bd(0x5c7)+'\x201fr;'+_0x3d27bd(0x57d)+_0x3d27bd(0x3dc)+_0x3d27bd(0x46f)+_0x3d27bd(0x1be)+'\x200\x204p'+_0x3d27bd(0x142)+_0x3d27bd(0x53a)+'\x0a\x20\x20.s'+_0x3d27bd(0x441)+'d\x20{\x20b'+_0x3d27bd(0x2e5)+'-radi'+_0x3d27bd(0x60b)+_0x3d27bd(0x420)+_0x3d27bd(0x2fe)+'round'+_0x3d27bd(0x292)+'a(255'+',255,'+'255,.'+'025);'+_0x3d27bd(0x681)+_0x3d27bd(0x104)+_0x3d27bd(0x1a5)+'set\x200'+'\x200\x200\x20'+'1px\x20r'+_0x3d27bd(0x232)+'55,25'+_0x3d27bd(0x276)+',.05)'+';\x20tra'+_0x3d27bd(0x387)+'on:\x20b'+_0x3d27bd(0xe6)+'adow\x20'+_0x3d27bd(0x413)+'\x20back'+_0x3d27bd(0x5fc)+'d\x20.25'+_0x3d27bd(0x214)+_0x3d27bd(0x2d9)+'on:\x20m'+_0x3d27bd(0x505)+_0x3d27bd(0x3bb)+_0x3d27bd(0x265)+_0x3d27bd(0x4db)+_0x3d27bd(0x5e3)+_0x3d27bd(0x119)+_0x3d27bd(0x450)+_0x3d27bd(0x5b7)+_0x3d27bd(0x3eb)+_0x3d27bd(0x66a)+'\x20rgba'+_0x3d27bd(0x120)+_0x3d27bd(0x69d)+'55,.0'+_0x3d27bd(0x1cf)+'ox-sh'+_0x3d27bd(0x5f9)+'\x20inse'+'t\x200\x200'+_0x3d27bd(0x4d1)+_0x3d27bd(0x5b8)+_0x3d27bd(0x613)+_0x3d27bd(0x54e)+_0x3d27bd(0x421)+_0x3d27bd(0x3c1)+'0\x200\x200'+_0x3d27bd(0x248)+'rgba('+_0x3d27bd(0x592)+'07,15'+_0x3d27bd(0x203)+_0x3d27bd(0x225)+_0x3d27bd(0x44f)+_0x3d27bd(0x32a)+'gba(2'+'55,10'+_0x3d27bd(0x53f)+_0x3d27bd(0x553)+_0x3d27bd(0x605)+'\x20.sk-'+_0x3d27bd(0x503)+'head\x20'+_0x3d27bd(0x483)+'play:'+'\x20flex'+_0x3d27bd(0x5e7)+'gn-it'+_0x3d27bd(0x29a)+_0x3d27bd(0xf1)+_0x3d27bd(0x312)+'p:\x208p'+'x;\x20pa'+'dding'+_0x3d27bd(0xa7)+'x\x2012p'+_0x3d27bd(0xa2)+'\x20\x20.sk'+_0x3d27bd(0x614)+_0x3d27bd(0x344)+_0x3d27bd(0x15e)+_0x3d27bd(0x17e)+_0x3d27bd(0x580)+_0x3d27bd(0x64b)+_0x3d27bd(0x696)+_0x3d27bd(0x605)+'\x20.sk-'+_0x3d27bd(0x503)+_0x3d27bd(0x381)+_0x3d27bd(0x68d)+_0x3d27bd(0x3bc)+_0x3d27bd(0x1d3)+'size:'+_0x3d27bd(0x285)+_0x3d27bd(0x4c2)+_0x3d27bd(0x417)+_0x3d27bd(0xa0)+_0x3d27bd(0x427)+'color'+_0x3d27bd(0x292)+'a(246'+_0x3d27bd(0x51f)+'242,.'+'45);\x20'+_0x3d27bd(0x2c2)+'ition'+_0x3d27bd(0x1ae)+'or\x20.2'+_0x3d27bd(0x2ca)+'\x20\x20.sk'+'-card'+'.on\x20.'+_0x3d27bd(0x389)+_0x3d27bd(0x405)+_0x3d27bd(0x538)+'trong'+_0x3d27bd(0x331)+_0x3d27bd(0x4ae)+'#fff0'+_0x3d27bd(0x63c)+'\x0a\x20\x20.s'+_0x3d27bd(0x3c0)+'dy\x20{\x20'+'paddi'+'ng:\x200'+_0x3d27bd(0x66c)+'\x2010px'+_0x3d27bd(0x605)+'\x20.sk-'+_0x3d27bd(0x676)+_0x3d27bd(0x2ac)+'lay:\x20'+'flex;'+'\x20alig'+'n-ite'+'ms:\x20c'+_0x3d27bd(0x1c1)+_0x3d27bd(0xaf)+_0x3d27bd(0x1b6)+';\x20pad'+_0x3d27bd(0x1be)+'\x204px\x20'+_0x3d27bd(0x16d))+(_0x3d27bd(0x4ac)+_0x3d27bd(0x1f5)+_0x3d27bd(0x1ef)+';\x20}\x0a\x20'+'\x20.sk-'+_0x3d27bd(0xc0)+_0x3d27bd(0x3d5)+_0x3d27bd(0x2ff)+_0x3d27bd(0x9e)+_0x3d27bd(0x627)+'gba(2'+'46,23'+_0x3d27bd(0x4f0)+',.75)'+';\x20}\x0a\x20'+'\x20.sk-'+'switc'+_0x3d27bd(0x4b7)+_0x3d27bd(0x235)+'on:\x20r'+_0x3d27bd(0x642)+_0x3d27bd(0x148)+'idth:'+_0x3d27bd(0x5eb)+_0x3d27bd(0x373)+_0x3d27bd(0xa0)+'14px;'+'\x20bord'+_0x3d27bd(0x69a)+_0x3d27bd(0x4ee)+'der-r'+'adius'+':\x2099p'+'x;\x20ba'+_0x3d27bd(0x556)+_0x3d27bd(0x207)+'rgba('+'255,2'+'55,25'+'5,.07'+_0x3d27bd(0x537)+_0x3d27bd(0x385)+'\x20poin'+_0x3d27bd(0x2f6)+'flex:'+_0x3d27bd(0x2e9)+_0x3d27bd(0x102)+_0x3d27bd(0x387)+_0x3d27bd(0x228)+'ackgr'+'ound\x20'+_0x3d27bd(0x445)+_0x3d27bd(0x4ec)+_0x3d27bd(0xa8)+'itch:'+_0x3d27bd(0xa5)+_0x3d27bd(0x65e)+_0x3d27bd(0x28e)+'t:\x20\x22\x22'+_0x3d27bd(0x456)+_0x3d27bd(0x624)+_0x3d27bd(0x47e)+'olute'+_0x3d27bd(0x357)+_0x3d27bd(0x25d)+_0x3d27bd(0x4ca)+_0x3d27bd(0x27e)+_0x3d27bd(0x1c2)+'dth:\x20'+'8px;\x20'+_0x3d27bd(0x213)+'t:\x208p'+_0x3d27bd(0xa9)+'rder-'+_0x3d27bd(0x2d5)+_0x3d27bd(0x3df)+'%;\x20ba'+_0x3d27bd(0x556)+_0x3d27bd(0x207)+_0x3d27bd(0x4c9)+'255,2'+'55,25'+'5,.25'+');\x20tr'+'ansit'+_0x3d27bd(0x630)+'left\x20'+_0x3d27bd(0x290)+_0x3d27bd(0x2fe)+_0x3d27bd(0x495)+_0x3d27bd(0x504)+_0x3d27bd(0x681)+_0x3d27bd(0x104)+'w\x20.2s'+';\x20}\x0a\x20'+_0x3d27bd(0x21b)+_0x3d27bd(0x1ba)+'h[ari'+_0x3d27bd(0x220)+_0x3d27bd(0x351)+_0x3d27bd(0x183)+'\x22]\x20{\x20'+_0x3d27bd(0x2fe)+_0x3d27bd(0x495)+_0x3d27bd(0x292)+'a(255'+_0x3d27bd(0x54e)+'157,.'+'25);\x20'+_0x3d27bd(0x4ec)+'sk-sw'+'itch['+'aria-'+_0x3d27bd(0x502)+'ed=\x22t'+'rue\x22]'+_0x3d27bd(0x2c0)+'er\x20{\x20'+'left:'+'\x2015px'+_0x3d27bd(0x5a9)+_0x3d27bd(0x37e)+_0x3d27bd(0x545)+'ff6b9'+'d;\x20bo'+_0x3d27bd(0x68c)+_0x3d27bd(0x140)+'0\x200\x206'+_0x3d27bd(0x1d6)+'f6b9d'+_0x3d27bd(0x605)+_0x3d27bd(0x21b)+_0x3d27bd(0x63e)+_0x3d27bd(0x271)+_0x3d27bd(0x39e)+_0x3d27bd(0x29b)+_0x3d27bd(0x5f1)+_0x3d27bd(0x24d)+_0x3d27bd(0x5b6)+_0x3d27bd(0x1a7)+_0x3d27bd(0x14b)+_0x3d27bd(0x3b3)+_0x3d27bd(0x436)+_0x3d27bd(0x65c)+_0x3d27bd(0xb0)+_0x3d27bd(0x563)+'\x20-web'+_0x3d27bd(0x204)+_0x3d27bd(0x1e5)+'ance:'+_0x3d27bd(0x2e9)+_0x3d27bd(0x659)+'earan'+_0x3d27bd(0x391)+'one;\x20'+'width'+_0x3d27bd(0x221)+_0x3d27bd(0x1ac)+'ight:'+_0x3d27bd(0x509)+_0x3d27bd(0x22c)+'groun'+'d:\x20tr'+'anspa'+'rent;'+'\x20}\x0a\x20\x20'+'.sk-s'+'lider'+_0x3d27bd(0x4e2)+'bkit-'+_0x3d27bd(0x2a3)+_0x3d27bd(0x22a)+'nable'+'-trac'+'k\x20{\x20h'+_0x3d27bd(0x496)+_0x3d27bd(0x1fa)+_0x3d27bd(0x4ee)+_0x3d27bd(0x467)+'adius'+':\x202px'+';\x20bac'+_0x3d27bd(0x37e)+'nd:\x20l'+'inear'+'-grad'+'ient('+_0x3d27bd(0x64c)+'9d,\x20#'+_0x3d27bd(0x2e8)+'d)\x200\x20'+_0x3d27bd(0x346)+_0x3d27bd(0x4d8)+'p,\x2050'+'%)\x2010'+_0x3d27bd(0x246)+_0x3d27bd(0x109)+'at,\x20r'+_0x3d27bd(0x232)+_0x3d27bd(0x587))+(_0x3d27bd(0x276)+',.08)'+';\x20}\x0a\x20'+_0x3d27bd(0x21b)+_0x3d27bd(0x2a3)+'r::-w'+_0x3d27bd(0x1da)+_0x3d27bd(0x429)+'er-th'+'umb\x20{'+'\x20-web'+'kit-a'+'ppear'+'ance:'+_0x3d27bd(0x2e9)+';\x20wid'+_0x3d27bd(0x1f6)+'px;\x20h'+'eight'+_0x3d27bd(0x1dc)+_0x3d27bd(0x348)+_0x3d27bd(0x54d)+'op:\x20-'+'2px;\x20'+'borde'+_0x3d27bd(0x2d0)+'ius:\x20'+_0x3d27bd(0x55f)+_0x3d27bd(0x2fe)+_0x3d27bd(0x495)+':\x20#ff'+_0x3d27bd(0x26e)+_0x3d27bd(0x681)+_0x3d27bd(0x104)+_0x3d27bd(0x5b9)+_0x3d27bd(0x186)+_0x3d27bd(0x234)+_0x3d27bd(0xda)+'5,107'+',157,'+'.4);\x20'+'}\x0a\x20\x20.'+'sk-sl'+_0x3d27bd(0x520)+_0x3d27bd(0x622)+_0x3d27bd(0x4cf)+_0x3d27bd(0x138)+'ck\x20{\x20'+'heigh'+_0x3d27bd(0x3c4)+'x;\x20ba'+_0x3d27bd(0x556)+_0x3d27bd(0x207)+_0x3d27bd(0x4c9)+'255,2'+_0x3d27bd(0x587)+'5,.08'+');\x20}\x0a'+_0x3d27bd(0x30e)+_0x3d27bd(0x429)+'er::-'+_0x3d27bd(0x45b)+'ange-'+'progr'+_0x3d27bd(0x12d)+_0x3d27bd(0x5dd)+_0x3d27bd(0x166)+_0x3d27bd(0x2de)+'ackgr'+_0x3d27bd(0x66a)+_0x3d27bd(0x62c)+'b9d;\x20'+_0x3d27bd(0x4ec)+'sk-sl'+'ider:'+_0x3d27bd(0x622)+_0x3d27bd(0x4cf)+_0x3d27bd(0x4d7)+_0x3d27bd(0x687)+'width'+':\x206px'+_0x3d27bd(0x373)+_0x3d27bd(0xa0)+'6px;\x20'+_0x3d27bd(0x5ae)+_0x3d27bd(0x365)+_0x3d27bd(0x604)+'er-ra'+_0x3d27bd(0x1e4)+_0x3d27bd(0x533)+_0x3d27bd(0x22c)+'groun'+_0x3d27bd(0x62d)+'f6b9d'+_0x3d27bd(0x605)+'\x20.sk-'+'val\x20{'+'\x20font'+_0x3d27bd(0x2cd)+':\x2011p'+_0x3d27bd(0x1fb)+_0x3d27bd(0x3ab)+_0x3d27bd(0x13e)+_0x3d27bd(0x4f9)+'\x20min-'+'width'+':\x2028p'+_0x3d27bd(0x40a)+_0x3d27bd(0x3be)+'ign:\x20'+'right'+_0x3d27bd(0x9e)+_0x3d27bd(0x627)+'gba(2'+_0x3d27bd(0x44c)+'8,242'+',.8);'+'\x20}\x0a\x20\x20'+_0x3d27bd(0x48c)+_0x3d27bd(0x36f)+_0x3d27bd(0x655)+'n\x20{\x20f'+_0x3d27bd(0x39f)+_0x3d27bd(0x22e)+_0x3d27bd(0x1b2)+_0x3d27bd(0x2b2)+_0x3d27bd(0x690)+_0x3d27bd(0x58d)+'ransl'+'ateY('+_0x3d27bd(0x4f6)+_0x3d27bd(0x3c3)+'\x20\x20');function _0x2d16b1(_0x3161fb){var _0x29b129=_0x3d27bd;if(document['body']&&(_0x1cde62['KDSJw'](document['ready'+_0x29b129(0x3ec)],_0x1cde62['hCJgI'])||document[_0x29b129(0x626)+'State']===_0x1cde62['fzONy']))_0x1cde62['RgYyJ'](_0x3161fb);else document['addEv'+_0x29b129(0x3a9)+'stene'+'r'](_0x1cde62['ADbZZ'],_0x3161fb,{'once':!![]});}_0x2d16b1(function(){var _0x5a3e75=_0x3d27bd;try{if(!document[_0x5a3e75(0x689)][_0x5a3e75(0x3f7)+_0x5a3e75(0x33a)](_0x1f9bfe))document['body'][_0x5a3e75(0x356)+'dChil'+'d'](_0x1f9bfe);document[_0x5a3e75(0x689)][_0x5a3e75(0x356)+_0x5a3e75(0x5af)+'d'](_0x15c8d5),document[_0x5a3e75(0x689)]['appen'+_0x5a3e75(0x5af)+'d'](_0x1f9c33),_0x1cde62[_0x5a3e75(0x3e4)](_0x3d933a,_0x5a3e75(0x4d5),_0x1cde62['QMbyS']);}catch(_0x7eb267){_0x1cde62[_0x5a3e75(0x29f)](_0x3d933a,'boot','DOM\x20m'+_0x5a3e75(0x476)+_0x5a3e75(0x210)+_0x5a3e75(0x3dd)+(_0x7eb267&&_0x7eb267[_0x5a3e75(0x547)+'ge']));}}),console['log']('Sakur'+_0x3d27bd(0x3d8)+'ent\x20l'+_0x3d27bd(0x2ad)+_0x3d27bd(0x34d)+'.io\x20—'+_0x3d27bd(0x415)+_0x3d27bd(0x3fb)+_0x3d27bd(0x10a)+'diagn'+_0x3d27bd(0x3fd)+'s\x20on)'),_0x1cde62[_0x3d27bd(0x645)](requestAnimationFrame,_0x3d7689);})()));
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
 *       clutcher.io     → sakura.clutch.next.user.js (rewrite client)
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
  var FILE = IS_CLUTCHER ? "sakura.clutch.next.user.js"
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
