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
function _0x6d57(_0x3202d5,_0xf2412c){_0x3202d5=_0x3202d5-(-0x993+0x18fe+0x3*-0x4ff);var _0x422818=_0x11b5();var _0x3d9e9f=_0x422818[_0x3202d5];if(_0x6d57['IEPhux']===undefined){var _0x5b0a6d=function(_0x477c7e){var _0x4d774f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ff48d='',_0x181094='';for(var _0x575a98=0x1094+-0x1537+0x4a3,_0x58ca54,_0x18838f,_0x50c86e=0x77b+0x208c+0x1*-0x2807;_0x18838f=_0x477c7e['charAt'](_0x50c86e++);~_0x18838f&&(_0x58ca54=_0x575a98%(-0xb46+-0x186f+0x23b9)?_0x58ca54*(0x7*0x231+-0x217c+0x1265)+_0x18838f:_0x18838f,_0x575a98++%(-0x5b2+-0x1a2f+-0x47*-0x73))?_0x4ff48d+=String['fromCharCode'](0x729+0x83*0x13+0x53*-0x31&_0x58ca54>>(-(0x1032*-0x1+-0x486*-0x2+0x8*0xe5)*_0x575a98&-0x11e2+-0x1bb5+0x2d9d)):0x3*0x21a+0x22c3+-0x2911){_0x18838f=_0x4d774f['indexOf'](_0x18838f);}for(var _0x3a2131=0x4*0x4b2+-0x24e1+0x1219*0x1,_0x1496f6=_0x4ff48d['length'];_0x3a2131<_0x1496f6;_0x3a2131++){_0x181094+='%'+('00'+_0x4ff48d['charCodeAt'](_0x3a2131)['toString'](0x1dfd+0x2309*0x1+-0xcfe*0x5))['slice'](-(0xaf4+0x264e*0x1+-0x3140));}return decodeURIComponent(_0x181094);};_0x6d57['KuoZsn']=_0x5b0a6d,_0x6d57['Pgolgv']={},_0x6d57['IEPhux']=!![];}var _0x577880=_0x422818[0x84*0x34+-0x1*-0x2325+-0x14a7*0x3],_0x511704=_0x3202d5+_0x577880,_0x3f70b5=_0x6d57['Pgolgv'][_0x511704];return!_0x3f70b5?(_0x3d9e9f=_0x6d57['KuoZsn'](_0x3d9e9f),_0x6d57['Pgolgv'][_0x511704]=_0x3d9e9f):_0x3d9e9f=_0x3f70b5,_0x3d9e9f;}(function(_0x4568ed,_0x4cc095){var _0x90877c=_0x6d57,_0x2e0990=_0x4568ed();while(!![]){try{var _0x553bd1=parseInt(_0x90877c(0x199))/(0x680+-0x1bf*0x9+-0xa*-0xec)*(parseInt(_0x90877c(0x248))/(-0xc*-0xab+0xf07*0x2+0x15*-0x1d0))+parseInt(_0x90877c(0x29c))/(-0xc82+-0x86e*0x4+0x2e3d)*(parseInt(_0x90877c(0x202))/(0x1810+0x175e+-0x2f6a))+parseInt(_0x90877c(0xde))/(-0x24b0+-0x1927+-0x1*-0x3ddc)*(parseInt(_0x90877c(0x488))/(-0x1da5+0x24d5+-0x1*0x72a))+-parseInt(_0x90877c(0x5d5))/(0xb8f+-0x1b37*-0x1+-0x26bf)*(-parseInt(_0x90877c(0x4a0))/(-0xa71+-0xd*0x137+0x1a44))+-parseInt(_0x90877c(0xa9))/(-0x1*0x54a+-0x679*-0x5+-0xd85*0x2)+-parseInt(_0x90877c(0x2cf))/(-0x1*0x2f1+0x13b9+0x2*-0x85f)+-parseInt(_0x90877c(0x550))/(0x86b+-0x1*0x17d7+0xf77);if(_0x553bd1===_0x4cc095)break;else _0x2e0990['push'](_0x2e0990['shift']());}catch(_0x56a07b){_0x2e0990['push'](_0x2e0990['shift']());}}}(_0x11b5,-0xe1e23*0x1+0xb*0x1c063+0x8d*0x10e5),((()=>{'use strict';var _0xa36f26=_0x6d57,_0x4a12cf={'pfivn':function(_0x20f722,_0xd568bd){return _0x20f722+_0xd568bd;},'csaqA':function(_0x40c367,_0x3b165d){return _0x40c367(_0x3b165d);},'jImcQ':function(_0x31431b,_0x435e2d){return _0x31431b>_0x435e2d;},'ShITq':function(_0x4948f7,_0x553fd1,_0xc6faae){return _0x4948f7(_0x553fd1,_0xc6faae);},'pbVit':function(_0x5d04b8,_0x6a0b5f){return _0x5d04b8===_0x6a0b5f;},'FxqmC':'eAwnG','QLgcJ':'AepTM','UMqcr':function(_0x5ba823,_0x3a0482){return _0x5ba823!==_0x3a0482;},'bLdKn':function(_0x5df445,_0x253eb7){return _0x5df445!=_0x253eb7;},'PvwQo':function(_0x51c35c,_0x140fe3){return _0x51c35c*_0x140fe3;},'bIWSX':function(_0x5f2125,_0x527d4b){return _0x5f2125!==_0x527d4b;},'FStIR':_0xa36f26(0x1e4)+'ra-ko'+_0xa36f26(0x5a0)+_0xa36f26(0x45c)+_0xa36f26(0x2a3)+'iled:','eNHnt':function(_0x4662b3){return _0x4662b3();},'tIVwE':'UaTHy','feEst':_0xa36f26(0x553),'JbWbi':function(_0x25d72d,_0xa1793f,_0xbea5ab,_0x465b7e,_0x58ac72){return _0x25d72d(_0xa1793f,_0xbea5ab,_0x465b7e,_0x58ac72);},'tsLfp':function(_0x5ca0ed,_0x498bcc){return _0x5ca0ed(_0x498bcc);},'SrYyU':_0xa36f26(0x1ff),'RpzPy':function(_0x429f17,_0x3a3813){return _0x429f17/_0x3a3813;},'SwWfa':function(_0x2de473,_0x125c92){return _0x2de473(_0x125c92);},'YpQPA':function(_0x5c6fd5,_0x462bdf){return _0x5c6fd5(_0x462bdf);},'pYqWi':function(_0x5ceb90,_0x14c4bb){return _0x5ceb90!==_0x14c4bb;},'nNRxv':function(_0x1eaafc,_0x44baf1){return _0x1eaafc&&_0x44baf1;},'xBKUH':'hgyxD','kZMAC':'f32','DGkhx':function(_0x137b25,_0x345993,_0x3e6db5,_0x530f88,_0x183d53){return _0x137b25(_0x345993,_0x3e6db5,_0x530f88,_0x183d53);},'rrJbg':function(_0x282dee,_0x8163bf,_0xd6d295,_0x204ab9,_0x222107){return _0x282dee(_0x8163bf,_0xd6d295,_0x204ab9,_0x222107);},'OBWbh':_0xa36f26(0x474),'nIhTG':function(_0x45b079,_0x4ec1bf){return _0x45b079<_0x4ec1bf;},'ctBSe':_0xa36f26(0x434),'XgxTR':_0xa36f26(0x242)+'MODE\x20'+'-\x20ove'+_0xa36f26(0x4e3)+'only,'+_0xa36f26(0x35b)+_0xa36f26(0x19b)+'(relo'+_0xa36f26(0x59d)+_0xa36f26(0x44f)+')','fYEzi':function(_0x33bfe,_0x40fd77){return _0x33bfe+_0x40fd77;},'hqYZq':function(_0x3d8cc1,_0x2ab0c5){return _0x3d8cc1+_0x2ab0c5;},'oXYPc':'\x20hook'+'s','IJNRg':_0xa36f26(0x247)+_0xa36f26(0x56f),'htbGK':'\x20|\x20sh'+'ooter'+'\x20','YLTMp':'held','ClvGn':'none','JCdCv':function(_0x553ec9,_0x5bedbf){return _0x553ec9+_0x5bedbf;},'lgJrx':_0xa36f26(0xe6)+'R:\x20','LnGmK':function(_0x26bddd,_0x572bf8){return _0x26bddd!==_0x572bf8;},'UOtVH':'LAMtx','sFNXZ':function(_0x51bc1e,_0x2804dc){return _0x51bc1e+_0x2804dc;},'PsywM':function(_0x5245ee,_0x2b553b){return _0x5245ee!==_0x2b553b;},'sXDqa':_0xa36f26(0x15c)+'wn','ZmgyG':_0xa36f26(0x395)+'down','bBSjt':_0xa36f26(0x395)+'up','DDnaO':'blur','dwOVP':function(_0x1cf47d,_0x3a1f5a){return _0x1cf47d-_0x3a1f5a;},'Xiyym':_0xa36f26(0x54e),'CWptQ':function(_0x108d7c,_0x14e7de){return _0x108d7c===_0x14e7de;},'MGppQ':_0xa36f26(0xb8)+_0xa36f26(0x294),'onsXk':'3|1|2'+'|4|6|'+'0|7|5'+'|8','MBjog':'sk-co'+_0xa36f26(0x5b4),'Fvekr':'tqQbn','OiQWt':function(_0x2c1d82,_0x584438){return _0x2c1d82+_0x584438;},'uPzap':function(_0x256f47,_0xc54381){return _0x256f47*_0xc54381;},'rTZFM':function(_0x91318,_0x6bd744){return _0x91318-_0x6bd744;},'VLgZA':function(_0x1b9c89,_0x1d2d85){return _0x1b9c89+_0x1d2d85;},'HCxCV':function(_0x429368,_0x587514){return _0x429368+_0x587514;},'iNQXN':'KeyW','tMloQ':function(_0x1e9bf0,_0xb78d0c,_0x12268b,_0x4570ca,_0x358d1a,_0x5d3c54,_0x43b0f2){return _0x1e9bf0(_0xb78d0c,_0x12268b,_0x4570ca,_0x358d1a,_0x5d3c54,_0x43b0f2);},'OZLjS':function(_0x599c83,_0xc4a341){return _0x599c83+_0xc4a341;},'gXSXQ':_0xa36f26(0x375),'bNBXU':function(_0xe1a07b,_0x55a977){return _0xe1a07b*_0x55a977;},'yINJz':function(_0x41390b,_0x16d1fa){return _0x41390b+_0x16d1fa;},'AdXvQ':function(_0x4cab2b,_0x5ea6e6){return _0x4cab2b/_0x5ea6e6;},'yQJGp':function(_0xee0a1d,_0x4af6ee){return _0xee0a1d+_0x4af6ee;},'XKtJh':function(_0x501bb1,_0x50467a,_0x520649,_0x37c0da,_0x9eea2,_0x445aaa,_0x374703,_0x18c00e){return _0x501bb1(_0x50467a,_0x520649,_0x37c0da,_0x9eea2,_0x445aaa,_0x374703,_0x18c00e);},'lurDd':_0xa36f26(0x124),'sUfNR':function(_0x608d66,_0x5d242c,_0x502220,_0xc17eb1,_0x1daaec,_0x25ff00,_0x242319,_0x150395){return _0x608d66(_0x5d242c,_0x502220,_0xc17eb1,_0x1daaec,_0x25ff00,_0x242319,_0x150395);},'CBcuD':_0xa36f26(0x469),'iwTJI':function(_0x270b40,_0x53852a){return _0x270b40+_0x53852a;},'CMHFn':function(_0x13bc09,_0x49b90d){return _0x13bc09+_0x49b90d;},'jYCEv':function(_0x1e58ca,_0x488f25){return _0x1e58ca(_0x488f25);},'KohZE':_0xa36f26(0x609),'cQXkN':function(_0x58f061,_0x28048d){return _0x58f061/_0x28048d;},'GXFRS':'butto'+'n','lkgJd':_0xa36f26(0x372)+_0xa36f26(0x3d7),'dMypP':_0xa36f26(0x14e),'ssrvB':_0xa36f26(0x355)+'h','QooYO':'aria-'+'check'+'ed','BcQaL':_0xa36f26(0x1b5)+'|11|6'+'|9|16'+_0xa36f26(0xf6)+_0xa36f26(0x39d)+'10|0|'+_0xa36f26(0x256)+_0xa36f26(0x47e)+_0xa36f26(0x2f9),'SwCnc':function(_0x316c50,_0x5167a1){return _0x316c50(_0x5167a1);},'xLyld':function(_0x351ecb,_0x259183){return _0x351ecb+_0x259183;},'ZquRY':'div','XuZnY':_0xa36f26(0x31c),'OYlqO':_0xa36f26(0x377)+'l','IfTzT':function(_0x3aaa0b){return _0x3aaa0b();},'DXiGe':_0xa36f26(0x217),'VwtYK':'selec'+'t','eBHvf':_0xa36f26(0x4dc)+_0xa36f26(0x13a),'vdhty':function(_0x2a531c,_0x3ed31b){return _0x2a531c===_0x3ed31b;},'sScqf':_0xa36f26(0x137),'kIZiw':function(_0x5e3fe2,_0x476c91){return _0x5e3fe2+_0x476c91;},'xCapr':function(_0xfe0d5a,_0xa40635){return _0xfe0d5a+_0xa40635;},'LxdzV':'UWMK\x20'+_0xa36f26(0x333)+'\x20','GgDeA':function(_0x5e7556,_0x8138b1){return _0x5e7556+_0x8138b1;},'Lwkjs':function(_0x4ece78,_0x2b75b3){return _0x4ece78+_0x2b75b3;},'aeeQQ':_0xa36f26(0x453)+_0xa36f26(0x2ef)+'med\x20('+_0xa36f26(0x426)+'ff)','rGlQe':'240\x20F'+'PS\x20un'+'lock','QNWfj':'Apply','imrtb':_0xa36f26(0x2da),'mwxJh':'zyKTQ','dTfhE':_0xa36f26(0x8d),'EcAbP':'sk-ra'+_0xa36f26(0x519),'WeVSB':_0xa36f26(0x5be),'QoaYs':function(_0x211869,_0x51f1aa){return _0x211869!==_0x51f1aa;},'PpQxk':function(_0x541aa5,_0x18908b){return _0x541aa5>_0x18908b;},'nnzvY':_0xa36f26(0x29a),'vyKLr':_0xa36f26(0x87)+'t','bXENK':_0xa36f26(0xa7),'DiXJj':_0xa36f26(0x4ca),'MufJv':function(_0x8810b){return _0x8810b();},'GsejO':'Block'+_0xa36f26(0x128)+_0xa36f26(0xe7)+_0xa36f26(0x2ed)+'ateTa'+_0xa36f26(0x24c)+_0xa36f26(0x5ee)+'nd\x20OH'+'ealth'+_0xa36f26(0x6e)+_0xa36f26(0x5e7)+_0xa36f26(0x4b1)+_0xa36f26(0x2f6)+_0xa36f26(0x13d)+'\x20hurt'+_0xa36f26(0x32e)+_0xa36f26(0x586)+'ou.','bCghI':function(_0x59d5e9,_0x3c0321,_0x2c70d1,_0x33f52b,_0x3aa8b3,_0x5f54d5){return _0x59d5e9(_0x3c0321,_0x2c70d1,_0x33f52b,_0x3aa8b3,_0x5f54d5);},'OEPdW':'No\x20Re'+'coil','cxGTu':function(_0x282129,_0x332218,_0x3b4fb4,_0x58c9a8){return _0x282129(_0x332218,_0x3b4fb4,_0x58c9a8);},'hsdoy':'Damag'+_0xa36f26(0x476)+'ue','zLFVz':function(_0x5d5f96,_0xaf0ee1,_0x1441b9,_0x23efe2,_0x3c0074,_0x1a8868){return _0x5d5f96(_0xaf0ee1,_0x1441b9,_0x23efe2,_0x3c0074,_0x1a8868);},'OctAb':'Infin'+_0xa36f26(0x3d0)+'mmo\x20['+_0xa36f26(0x219),'cDbML':_0xa36f26(0x59b),'bWVht':_0xa36f26(0x552)+_0xa36f26(0x613)+'\x20four'+_0xa36f26(0x309)+'ment\x20'+_0xa36f26(0x5ab)+'\x20limi'+_0xa36f26(0x21b)+_0xa36f26(0x530)+'celer'+'ation'+'.','HLBxH':_0xa36f26(0x480)+'\x20%','QqMHl':function(_0x113f5c,_0x2c742e){return _0x113f5c!==_0x2c742e;},'dQXJi':'Jump\x20'+'%','GOOKZ':_0xa36f26(0x211)+'ty\x20%','nYEJh':'Bunny'+'-hop','hdPkx':function(_0x40dd4a,_0x3c405c){return _0x40dd4a===_0x3c405c;},'Bxdip':'Keyst'+'rokes','fOYso':'WASD\x20'+_0xa36f26(0x2ad)+'/RMB\x20'+'+\x20Spa'+'ce\x20ov'+_0xa36f26(0x1ae)+'.','oLvRm':function(_0x168f83,_0x2af05e,_0x538be5,_0x446618,_0x341b09,_0x12066e){return _0x168f83(_0x2af05e,_0x538be5,_0x446618,_0x341b09,_0x12066e);},'JOWiI':_0xa36f26(0x3c4)+'eadou'+'t','toYQC':_0xa36f26(0x4bf)+'m\x20cen'+'ter\x20c'+_0xa36f26(0x4d7)+'air.','cFlSu':'Size','zQeAG':function(_0x452719,_0x475707,_0x3f06e2){return _0x452719(_0x475707,_0x3f06e2);},'mVOjN':function(_0x289dfe,_0x357d11,_0x4dd3f5,_0x5325ee){return _0x289dfe(_0x357d11,_0x4dd3f5,_0x5325ee);},'aDLnc':function(_0x4828b1,_0x174726,_0x4cd2f4,_0xc9907f,_0x4b6bb5,_0x1dfaa4){return _0x4828b1(_0x174726,_0x4cd2f4,_0xc9907f,_0x4b6bb5,_0x1dfaa4);},'MaxAc':'Adblo'+'ck','lChYp':'Skips'+'\x20UWMK'+_0xa36f26(0x394)+_0xa36f26(0x152)+_0xa36f26(0x4ff)+_0xa36f26(0x41a)+_0xa36f26(0xd8)+_0xa36f26(0x154)+_0xa36f26(0x174)+_0xa36f26(0x507)+'atche'+_0xa36f26(0x3eb)+_0xa36f26(0x528)+_0xa36f26(0x105),'SKSmq':_0xa36f26(0x4f9)+_0xa36f26(0x89)+'\x20relo'+_0xa36f26(0x266)+_0xa36f26(0x320)+_0xa36f26(0x605)+_0xa36f26(0x446)+'in\x20sa'+'fe\x20mo'+'de,\x20t'+_0xa36f26(0x617)+_0xa36f26(0x52e)+_0xa36f26(0x383)+'ok-re'+_0xa36f26(0x324)+_0xa36f26(0x2b8)+'ll\x20me'+'\x20the\x20'+_0xa36f26(0xd8)+_0xa36f26(0x19e)+_0xa36f26(0x428)+'ount.','XqFqL':function(_0x1bccc2,_0x214bba,_0x35f980,_0x5bca34,_0x518651,_0x527033){return _0x1bccc2(_0x214bba,_0x35f980,_0x5bca34,_0x518651,_0x527033);},'dDZuw':_0xa36f26(0x3e0)+'one\x20i'+_0xa36f26(0x42b)+_0xa36f26(0x13f)+_0xa36f26(0x41a)+'tramp'+'oline'+_0xa36f26(0x48a)+'the\x20w'+'hole\x20'+_0xa36f26(0xb4)+_0xa36f26(0x350)+_0xa36f26(0x3aa)+_0xa36f26(0x3ff)+_0xa36f26(0x194)+_0xa36f26(0x4a3)+_0xa36f26(0x164)+_0xa36f26(0x185)+_0xa36f26(0x48b)+'hat\x20d'+'oes\x20n'+_0xa36f26(0x520)+_0xa36f26(0x100)+'he\x20re'+'al\x20me'+_0xa36f26(0x342)+_0xa36f26(0x274)+_0xa36f26(0x23e)+_0xa36f26(0x203)+_0xa36f26(0x3fe)+_0xa36f26(0x598)+'e\x20mis'+_0xa36f26(0x4d4)+'\x27\x20the'+_0xa36f26(0x155)+'nt\x20it'+_0xa36f26(0x4c0)+_0xa36f26(0x52c)+'.\x20Tur'+'n\x20the'+_0xa36f26(0x262)+_0xa36f26(0x354)+'t\x20a\x20t'+'ime,\x20'+'reloa'+'d,\x20an'+'d\x20see'+_0xa36f26(0x4ef)+'h\x20one'+_0xa36f26(0x279)+'\x20buil'+_0xa36f26(0xed)+'kes\x20o'+'n.','xetwj':_0xa36f26(0x4f9)+'es\x20on'+_0xa36f26(0x364)+_0xa36f26(0xf2),'dNIam':_0xa36f26(0x43f)+'e\x20(OH'+_0xa36f26(0x5c6)+'.Loca'+'lDie)','NxPrc':function(_0x255959,_0x4da59c,_0x260a34,_0x5cbea3){return _0x255959(_0x4da59c,_0x260a34,_0x5cbea3);},'JPTWd':_0xa36f26(0x535)+_0xa36f26(0x454)+_0xa36f26(0x2ec)+_0xa36f26(0x18c)+'atly\x20'+'raise'+_0xa36f26(0x201)+'risk\x20'+'even\x20'+'with\x20'+_0xa36f26(0x16b)+'on.','kAezI':_0xa36f26(0x4e1)+'r','uYLOp':_0xa36f26(0x25d),'jDkDw':'kour-'+_0xa36f26(0x353)+_0xa36f26(0x4df)+_0xa36f26(0x374)+'nt','TxPfY':_0xa36f26(0x110),'VwoMp':_0xa36f26(0xd7)+_0xa36f26(0x4c4)+'2','CVAzl':function(_0x877824,_0x1baaba){return _0x877824(_0x1baaba);},'wWwCi':function(_0x5518ce,_0x43d011){return _0x5518ce(_0x43d011);},'bDCLr':'Inser'+'t','lfKiM':'zoLjd','vEOhk':'XBLiw','qggpt':function(_0x54bfe1,_0x550f4b){return _0x54bfe1===_0x550f4b;},'zWpcb':function(_0x941964,_0x2075c5){return _0x941964+_0x2075c5;},'DKNsR':_0xa36f26(0x545)+_0xa36f26(0x5e8)+_0xa36f26(0x5ec)+'9|3|1'+_0xa36f26(0x295)+_0xa36f26(0x464)+'6|13|'+_0xa36f26(0x55d)+'|15|1'+_0xa36f26(0x46b)+_0xa36f26(0x495)+'1|12|'+'8','LytqU':function(_0x43bab1,_0x122e58){return _0x43bab1+_0x122e58;},'fdMib':function(_0x1e2d4c,_0x1dc9f6){return _0x1e2d4c*_0x1dc9f6;},'ewYeX':function(_0x13b00c,_0x424789){return _0x13b00c*_0x424789;},'oWHea':function(_0x1c1b85,_0x1f2075){return _0x1c1b85+_0x1f2075;},'SMnZj':function(_0x3a14b6){return _0x3a14b6();},'vpaso':_0xa36f26(0x5d7)+'ody','mNUJw':'Unity'+'Engin'+_0xa36f26(0x439)+'licat'+_0xa36f26(0x238),'BkvnZ':function(_0x1e27b1){return _0x1e27b1();},'tTwmg':_0xa36f26(0x4e7)+'|9|0|'+'7|4|3'+'|1|8','DdTGl':_0xa36f26(0x3cf),'fSWkY':_0xa36f26(0x60b),'lnFqf':'SAFE','OUcjX':_0xa36f26(0x49d)+_0xa36f26(0x1bc),'VxqcU':_0xa36f26(0x3a0)+'l>','Mqfsl':'canva'+'s','FkCOG':_0xa36f26(0x5b2)+_0xa36f26(0x3a1),'sYvGH':_0xa36f26(0x2c0)+_0xa36f26(0x2ba)+'ixed;'+'inset'+':0;z-'+'index'+':2147'+_0xa36f26(0x31b)+_0xa36f26(0x2f7)+_0xa36f26(0x37d)+'event'+_0xa36f26(0x5ce)+'e;','bSHja':_0xa36f26(0x26b),'PVDhj':'sakur'+_0xa36f26(0x619)+_0xa36f26(0x4e8)+'v1','UfxFh':_0xa36f26(0x5d4),'ZDNSz':_0xa36f26(0x1f5)+'l','umfSe':'Visua'+'l','WbEsq':'misc','lrlRH':'<svg\x20'+_0xa36f26(0x40b)+_0xa36f26(0x35e)+_0xa36f26(0x344)+_0xa36f26(0x23d)+_0xa36f26(0x140)+'\x20d=\x22M'+_0xa36f26(0x3a8)+'c-1.5'+_0xa36f26(0x3c1)+'4-4.5'+_0xa36f26(0x258)+_0xa36f26(0x340)+'.5\x201.'+_0xa36f26(0x45f)+_0xa36f26(0x265)+'5s4\x202'+_0xa36f26(0x5fb)+'5c0\x203'+_0xa36f26(0x212)+'5-4\x207'+_0xa36f26(0x5e3)+_0xa36f26(0x422)+_0xa36f26(0x115)+_0xa36f26(0x36c)+_0xa36f26(0x536)+'#ff6b'+'9d\x22\x20s'+_0xa36f26(0x532)+_0xa36f26(0x4dd)+'h=\x222\x22'+_0xa36f26(0x208)+'ke-li'+'necap'+'=\x22rou'+_0xa36f26(0x136)+'troke'+_0xa36f26(0x362)+_0xa36f26(0x2b1)+_0xa36f26(0x287)+_0xa36f26(0x250)+_0xa36f26(0x12d)+'e\x20cx='+_0xa36f26(0x3ba)+_0xa36f26(0x4d6)+_0xa36f26(0x1cd)+_0xa36f26(0x1bf)+'\x20fill'+_0xa36f26(0x32b)+'6b9d\x22'+'/></s'+_0xa36f26(0x56a),'tQiZN':_0xa36f26(0x109)+'a\x20Kou'+'r','kgUfP':'#ff6b'+'9d','WsEpT':'#ffb3'+'c6','RJgBl':_0xa36f26(0x16d)+'|1|6|'+_0xa36f26(0x38c),'RBuAS':_0xa36f26(0x2ed)+_0xa36f26(0x243)+'keHea'+_0xa36f26(0x3a4),'mzBGo':function(_0x35df2f,_0x2e2d3c,_0x4e7a8e,_0x57402a,_0xb2114c,_0x4d9b2e,_0x3a3bab,_0x168486){return _0x35df2f(_0x2e2d3c,_0x4e7a8e,_0x57402a,_0xb2114c,_0x4d9b2e,_0x3a3bab,_0x168486);},'XUXIP':_0xa36f26(0x43f)+'e','uTfgl':_0xa36f26(0x436),'ipXYT':'Assem'+_0xa36f26(0x561)+'Sharp'+_0xa36f26(0x425),'TKlcK':'IsGro'+_0xa36f26(0x99),'yNfxM':'capSh'+'ooter','qybXQ':_0xa36f26(0x267)+_0xa36f26(0x103)+_0xa36f26(0x4da),'xaKKc':function(_0x504df6,_0xd6bbd7,_0x2b90f5,_0x5824b6,_0x22f088,_0x54a9c8,_0xd5782d,_0x2062de){return _0x504df6(_0xd6bbd7,_0x2b90f5,_0x5824b6,_0x22f088,_0x54a9c8,_0xd5782d,_0x2062de);},'pvHyY':_0xa36f26(0x456)+_0xa36f26(0x57b),'PhkGw':_0xa36f26(0x1e4)+'ra-ko'+_0xa36f26(0x126)+_0xa36f26(0x40f)+_0xa36f26(0x457)+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0xa36f26(0x2d1)+_0xa36f26(0x171)]||''))return;if(window[_0xa36f26(0x119)+'URA_K'+_0xa36f26(0x5f4)])return;window[_0xa36f26(0x119)+_0xa36f26(0x42c)+_0xa36f26(0x5f4)]=!![];var _0x4d2de0=_0x4a12cf['kgUfP'],_0x95c47a=_0x4a12cf[_0xa36f26(0x584)],_0x16ef1f={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x4a12cf['kgUfP'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x4ed6c5={..._0x16ef1f};try{Object[_0xa36f26(0x574)+'n'](_0x4ed6c5,JSON['parse'](localStorage['getIt'+'em'](_0xa36f26(0x5b2)+'a.kou'+_0xa36f26(0x216))||'{}'));}catch(_0x2af404){}function _0x3b3747(){var _0x27178d=_0xa36f26;try{localStorage[_0x27178d(0x322)+'em']('sakur'+_0x27178d(0x619)+_0x27178d(0x216),JSON[_0x27178d(0x592)+'gify'](_0x4ed6c5));}catch(_0xf396d6){}}var _0x361647={'uwmk':!!window[_0xa36f26(0x35a)+'WebMo'+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4ed6c5[_0xa36f26(0x157)+'ode'],'lastError':''};try{window[_0xa36f26(0x3c2)+_0xa36f26(0x5ac)+'stene'+'r']('error',_0x1d7eda=>{var _0x3d4fc2=_0xa36f26;try{if(_0x3d4fc2(0x5dd)!=='yaiKO'){var _0x1015d8=_0x1d7eda&&(_0x1d7eda[_0x3d4fc2(0x4a8)+'ge']||_0x1d7eda['error']&&_0x1d7eda['error']['messa'+'ge'])||'unkno'+'wn';if(_0x1d7eda&&_0x1d7eda['filen'+'ame'])_0x1015d8+=_0x4a12cf[_0x3d4fc2(0x36f)](_0x4a12cf[_0x3d4fc2(0x36f)](_0x4a12cf['pfivn'](_0x3d4fc2(0x2da),String(_0x1d7eda[_0x3d4fc2(0x5a2)+'ame'])['split']('/')[_0x3d4fc2(0x506)]()),':'),_0x1d7eda[_0x3d4fc2(0x5de)+'o']||'?');_0x361647['lastE'+'rror']=_0x4a12cf['csaqA'](String,_0x1015d8)[_0x3d4fc2(0x170)](0x183*0x1+-0x1a51+0x18ce,-0x4*0x9f+-0x9f5+-0x1*-0xd11);}else _0x12c260['enabl'+'ed']=!!_0x379081;}catch(_0x35049a){}});}catch(_0x2569a3){}var _0x1bde47=null,_0x1dec04=null,_0x1a5517={},_0x358c7e=[],_0x378a06=[],_0x2fc3b1=new Map();function _0x41df72(_0x3b9448,_0x53f755){var _0x22d414=_0xa36f26;if(!_0x53f755||_0x3b9448[_0x22d414(0x244)+_0x22d414(0x12e)](_0x53f755)||_0x4a12cf[_0x22d414(0x4c7)](_0x3b9448['lengt'+'h'],0x14*0x161+-0x79b*0x3+-0x483))return;_0x3b9448[_0x22d414(0x15e)](_0x53f755);}function _0x3c18ed(_0x63880f,_0x51ccc2,_0x5f0010,_0x37d020){var _0x56ded5=_0xa36f26,_0x439466=0x1*0x3cc+-0x53*0x9+-0xe1;try{_0x439466=_0x51ccc2&&_0x51ccc2[_0x56ded5(0x2de)]?_0x51ccc2[_0x56ded5(0x2de)]():0xe95+0x856+-0x16eb;}catch(_0x5feb2c){}if(!_0x439466)return;_0x4a12cf[_0x56ded5(0x406)](_0x41df72,_0x63880f,_0x439466),_0x5f0010[_0x37d020]=_0x63880f[_0x56ded5(0x41c)+'h'];if(_0x4a12cf[_0x56ded5(0x529)](_0x37d020,'movem'+_0x56ded5(0x3bc))&&_0x63880f[_0x56ded5(0x41c)+'h']){var _0xbe71f4=_0x1a5517[_0x56ded5(0x28e)+'ve'];if(_0xbe71f4)try{_0xbe71f4[_0x56ded5(0x26c)+'ed']=![];}catch(_0x5c4769){}}}function _0x317a3d(_0x254b94,_0x4e1a55,_0x4a66c5){var _0x54b804=_0xa36f26;if('eAwnG'!==_0x4a12cf[_0x54b804(0x5f6)])_0x551236=new _0x3d7fa8(),_0x2e73c2['set'](_0x195f94,_0x47ce3c);else{var _0x408bd2=_0x2fc3b1['get'](_0x254b94);!_0x408bd2&&(_0x4a12cf['QLgcJ']===_0x54b804(0xfd)?(_0x408bd2=new Map(),_0x2fc3b1[_0x54b804(0x158)](_0x254b94,_0x408bd2)):(_0x49e1c8['fps']=_0x58d5c2,_0x280c99()));if(!_0x408bd2['has'](_0x4e1a55))try{var _0x3a9b6a=new _0x1bde47(_0x254b94)[_0x54b804(0x523)+_0x54b804(0x22a)](_0x4e1a55,_0x4a66c5);_0x408bd2[_0x54b804(0x158)](_0x4e1a55,_0x4a12cf['UMqcr'](_0x3a9b6a,undefined)?_0x3a9b6a[_0x54b804(0x2de)]():null);}catch(_0x33160e){_0x408bd2['set'](_0x4e1a55,null);}return _0x408bd2['get'](_0x4e1a55);}}function _0x3d96df(_0x1364cf,_0x594948,_0x515044,_0x45b7e1){var _0x531629=_0xa36f26;if(_0x531629(0xbb)===_0x531629(0xbb))try{new _0x1bde47(_0x1364cf)['write'+_0x531629(0x2ff)](_0x594948,_0x515044,_0x45b7e1);}catch(_0x4fc382){}else _0x518c18[_0x531629(0x1ee)+'eExp']=_0x2b7676,_0x324d54();}function _0x3156e4(_0x4e9c55,_0x3f923e){var _0x50d762=_0xa36f26;try{var _0x29cc20=new _0x1bde47(_0x4e9c55)[_0x50d762(0x523)+'ield'](_0x3f923e,_0x50d762(0x2eb));return _0x29cc20?_0x29cc20['val']():0x111f+-0x1*-0x204d+-0x316c;}catch(_0x9a6366){return-0xf74+0x1c9f*0x1+-0xd2b*0x1;}}function _0x48c3f4(_0xbd5a25,_0x3e434c,_0x422ff7,_0x51b2fd){var _0x166cb9=_0xa36f26,_0x147046=_0x317a3d(_0xbd5a25,_0x3e434c,_0x422ff7);if(_0x4a12cf[_0x166cb9(0x392)](_0x147046,null))_0x3d96df(_0xbd5a25,_0x3e434c,_0x422ff7,_0x4a12cf['PvwQo'](_0x147046,_0x51b2fd));}function _0x498b9a(_0x5da57f,_0x1f57d3,_0x24b0da,_0x21de0f,_0x37cdde,_0x548aca,_0x43fd7d){var _0x4bdcc6=_0xa36f26;try{var _0x2e9b04=_0x1dec04['hookP'+_0x4bdcc6(0x433)]({'typeName':_0x1f57d3,'methodName':_0x24b0da,'params':_0x21de0f,'returnType':_0x37cdde},_0x548aca);return _0x2e9b04[_0x4bdcc6(0x26c)+'ed']=_0x4a12cf[_0x4bdcc6(0x44d)](_0x43fd7d,![]),_0x1a5517[_0x5da57f]=_0x2e9b04,_0x361647['hooks'+'Total']++,_0x2e9b04;}catch(_0x496a21){return console['warn'](_0x4a12cf[_0x4bdcc6(0x3f7)],_0x5da57f,_0x496a21&&_0x496a21['messa'+'ge']),null;}}function _0x57ae4d(_0x27cfa4,_0x903ab9,_0x32a34d,_0x568115,_0x421168,_0x10c98e,_0x164359){var _0x1cbc84=_0xa36f26,_0xc7b74a={'XmLCB':function(_0x3ace76){var _0x5ce723=_0x6d57;return _0x4a12cf[_0x5ce723(0x2b2)](_0x3ace76);}};try{if(_0x1cbc84(0x1e6)===_0x4a12cf[_0x1cbc84(0xc4)])_0x42a77a['infAm'+'moExp']=_0x44ea9d,_0xc7b74a[_0x1cbc84(0x3c7)](_0x49004f);else{var _0x1b12e3=('1|0|2'+'|4|3')['split']('|'),_0x3508e0=-0x2685+-0xe15+0x349a;while(!![]){switch(_0x1b12e3[_0x3508e0++]){case'0':_0x5e5358['enabl'+'ed']=_0x164359!==![];continue;case'1':var _0x5e5358=_0x1dec04['hookP'+'ostfi'+'x']({'typeName':_0x903ab9,'methodName':_0x32a34d,'params':_0x568115,'returnType':_0x421168},_0x10c98e);continue;case'2':_0x1a5517[_0x27cfa4]=_0x5e5358;continue;case'3':return _0x5e5358;case'4':_0x361647[_0x1cbc84(0xd8)+_0x1cbc84(0x5da)]++;continue;}break;}}}catch(_0x534a54){if(_0x4a12cf[_0x1cbc84(0x529)](_0x1cbc84(0x4a7),_0x4a12cf['feEst']))_0x253345['enabl'+'ed']=![];else return console['warn'](_0x1cbc84(0x1e4)+_0x1cbc84(0x169)+'ur]\x20h'+'ook\x20r'+_0x1cbc84(0x2a3)+'iled:',_0x27cfa4,_0x534a54&&_0x534a54[_0x1cbc84(0x4a8)+'ge']),null;}}var _0x532d92=()=>![];try{if(window[_0xa36f26(0x35a)+_0xa36f26(0x222)+_0xa36f26(0x1fe)]&&!_0x4ed6c5['safeM'+_0xa36f26(0x3d8)]){var _0x25e693=_0x4a12cf[_0xa36f26(0x1a7)][_0xa36f26(0x28f)]('|'),_0x3bd549=-0x1*0x193c+-0x664+0x1fa0;while(!![]){switch(_0x25e693[_0x3bd549++]){case'0':if(_0x4ed6c5[_0xa36f26(0x349)+'od'])_0x498b9a(_0xa36f26(0x47d),_0xa36f26(0x277)+'th',_0x4a12cf['RBuAS'],[_0xa36f26(0x434),_0x4a12cf[_0xa36f26(0x135)]],undefined,_0x532d92,!!_0x4ed6c5[_0xa36f26(0x47d)]);continue;case'1':if(_0x4ed6c5[_0xa36f26(0x349)+'odDie'])_0x4a12cf[_0xa36f26(0xda)](_0x498b9a,_0x4a12cf[_0xa36f26(0x282)],_0xa36f26(0x277)+'th','Local'+'Die',['i32',_0xa36f26(0x434),'i32',_0xa36f26(0x434),_0xa36f26(0x434)],undefined,_0x532d92,!!_0x4ed6c5['god']);continue;case'2':_0x1dec04=window['Unity'+'WebMo'+_0xa36f26(0x1fe)][_0xa36f26(0x7c)+'me'][_0xa36f26(0x1b3)+_0xa36f26(0x39a)+'in']({'name':'Sakur'+'aKour','version':_0x4a12cf[_0xa36f26(0x517)],'referencedAssemblies':[_0x4a12cf['ipXYT']]});continue;case'3':if(_0x4ed6c5[_0xa36f26(0x145)+'aptur'+'e'])_0x57ae4d('capMo'+'ve',_0xa36f26(0x167)+_0xa36f26(0x449)+_0xa36f26(0x323)+'.Over'+_0xa36f26(0x3b9)+_0xa36f26(0x1dd)+_0xa36f26(0x3dd),_0x4a12cf['TKlcK'],[_0x4a12cf[_0xa36f26(0x135)]],'i32',(_0x1916fb,_0x3c0f10)=>{_0x3c18ed(_0x358c7e,_0x3c0f10,_0x361647,'movem'+'ents');},!![]);continue;case'4':_0x1bde47=window['Unity'+_0xa36f26(0x222)+'dkit'][_0xa36f26(0x3c0)+'Wrapp'+'er'];continue;case'5':if(_0x4ed6c5[_0xa36f26(0x145)+'aptur'+'e'])_0x4a12cf['mzBGo'](_0x57ae4d,_0x4a12cf[_0xa36f26(0x59f)],_0xa36f26(0x49e)+_0xa36f26(0x562),_0x4a12cf['qybXQ'],[_0xa36f26(0x434),_0x4a12cf['ctBSe']],undefined,(_0x2be146,_0x2f6860)=>{var _0x336d96=_0xa36f26;_0x4a12cf[_0x336d96(0x398)](_0x3c18ed,_0x378a06,_0x2f6860,_0x361647,'shoot'+_0x336d96(0x84));},!![]);continue;case'6':if(_0x4ed6c5[_0xa36f26(0x29e)+_0xa36f26(0x30e)+'il'])_0x4a12cf[_0xa36f26(0x146)](_0x498b9a,_0x4a12cf['pvHyY'],_0xa36f26(0x167)+_0xa36f26(0x449)+'forms'+_0xa36f26(0x304)+_0xa36f26(0x3b9)+_0xa36f26(0x2d8)+'lMoti'+'on','Tick',[_0x4a12cf[_0xa36f26(0x135)]],undefined,_0x532d92,!!_0x4ed6c5['noRec'+_0xa36f26(0x57b)]);continue;}break;}}}catch(_0x42893d){console['warn'](_0x4a12cf['PhkGw'],_0x42893d&&_0x42893d['messa'+'ge']);}function _0x21dc2a(_0x3c17b7,_0x5c675a){var _0x4bb8c0=_0xa36f26,_0x16310c=_0x1a5517[_0x3c17b7];if(_0x16310c)try{_0x16310c[_0x4bb8c0(0x26c)+'ed']=!!_0x5c675a;}catch(_0x17a82e){}}setInterval(()=>{var _0x202b40=_0xa36f26;if(_0x202b40(0x1ff)===_0x4a12cf[_0x202b40(0x450)]){if(!_0x1bde47||!window[_0x202b40(0x388)+_0x202b40(0x515)+'nce'])return;var _0x36b0c2=_0x4a12cf[_0x202b40(0x213)](_0x4a12cf[_0x202b40(0x30a)](Number,_0x4ed6c5[_0x202b40(0x5ab)+_0x202b40(0x53e)])||-0x175e+0x261f+-0xe5d,-0x21b*0x7+-0xfc4+0x1ee5),_0x41659e=(_0x4a12cf[_0x202b40(0x30a)](Number,_0x4ed6c5['jumpP'+'ct'])||-0x7fe+-0x49b+0x5f*0x23)/(0x16e*0x7+-0x59*-0x25+-0x167b),_0x11a76b=(_0x4a12cf[_0x202b40(0x59e)](Number,_0x4ed6c5[_0x202b40(0x576)+'tyPct'])||0x1*-0x194+-0x1df5*-0x1+0x5*-0x599)/(-0x15e0+-0x1393*-0x1+0x2b1),_0x5dfc4e=Math[_0x202b40(0x5a6)](-0x326+-0xfe3+0x130a,_0x4a12cf['YpQPA'](Number,_0x4ed6c5[_0x202b40(0x1ee)+_0x202b40(0x47b)+'e'])||-0x369*-0x6+0x1c94+0xe*-0x376),_0x49de0b=_0x4a12cf['pYqWi'](_0x36b0c2,-0xc69+-0x2429*-0x1+0x1*-0x17bf)||_0x4a12cf[_0x202b40(0x307)](_0x41659e,-0x10cf*0x1+-0x1a*-0x17d+-0x2*0xaf1)||_0x4a12cf['UMqcr'](_0x11a76b,0x5*0x5+-0x1*-0x2539+-0x1*0x2551)||_0x4ed6c5['bhop'],_0x16911f=_0x4ed6c5['noSpr'+_0x202b40(0x32c)]||_0x4ed6c5['damag'+'eExp']||_0x4ed6c5['infAm'+'moExp']||_0x4ed6c5[_0x202b40(0x2d3)+_0x202b40(0x251)];if(_0x4a12cf[_0x202b40(0x485)](!_0x49de0b,!_0x16911f))return;try{if(_0x202b40(0x226)!==_0x202b40(0x9e))for(var _0x5f2508=0x1c0d*-0x1+0xd03*-0x1+0x2910;_0x5f2508<_0x358c7e['lengt'+'h'];_0x5f2508++){if(_0x4a12cf[_0x202b40(0x220)]!=='RCDdG'){var _0x1c2b7e=_0x358c7e[_0x5f2508];if(!_0x1c2b7e)continue;_0x4a12cf['UMqcr'](_0x36b0c2,-0xd13*0x1+0x7f*0x30+0xabc*-0x1)&&(_0x48c3f4(_0x1c2b7e,0x2*-0x69d+0x5*-0x397+0x1f55,_0x4a12cf['kZMAC'],_0x36b0c2),_0x48c3f4(_0x1c2b7e,0x4*-0x6b+-0x50*-0xf+-0x2d8,_0x202b40(0x3d5),_0x36b0c2),_0x48c3f4(_0x1c2b7e,-0xdf*0xb+-0xe7b+0x1840,'f32',_0x36b0c2),_0x4a12cf[_0x202b40(0x398)](_0x48c3f4,_0x1c2b7e,0x9f*0x2b+0xfd5+-0x2a56,_0x4a12cf['kZMAC'],_0x36b0c2),_0x4a12cf[_0x202b40(0x398)](_0x48c3f4,_0x1c2b7e,0x752+0x1f97+-0x26cd,_0x202b40(0x3d5),_0x36b0c2),_0x4a12cf[_0x202b40(0xa2)](_0x48c3f4,_0x1c2b7e,0x1a96*-0x1+0x9*-0x33b+0x37c9,_0x202b40(0x3d5),_0x36b0c2));if(_0x41659e!==-0x3*-0x88b+0x1851+-0x31f1)_0x4a12cf[_0x202b40(0x310)](_0x48c3f4,_0x1c2b7e,0x1b7b+-0x181+-0x19aa,_0x202b40(0x3d5),_0x41659e);_0x11a76b!==-0x106b+-0x11*0x66+0x1732&&(_0x48c3f4(_0x1c2b7e,-0x1ad*-0x11+-0x2600+0x9cb,'f32',_0x11a76b),_0x4a12cf[_0x202b40(0xa2)](_0x48c3f4,_0x1c2b7e,0x8*0x455+-0x105+-0x2157,_0x4a12cf[_0x202b40(0x196)],_0x11a76b));if(_0x4ed6c5[_0x202b40(0x5c4)])_0x4a12cf[_0x202b40(0x398)](_0x3d96df,_0x1c2b7e,0x1*-0x17f5+0xd55+0xb3c,_0x202b40(0x3d5),-(0xb50+0xf90*-0x1+-0x827*-0x1));}else _0x314411[_0x202b40(0x331)+'ill']=_0x5c7048,_0x5cda4d();}else _0xa23e85[_0x202b40(0x2d3)+'Exp']=_0x1c259c,_0x3a512f();}catch(_0x2d9c3b){}try{if(_0x202b40(0x474)===_0x4a12cf[_0x202b40(0x12f)])for(var _0x2c2ecf=-0x1808+-0x134+0x193c;_0x4a12cf['nIhTG'](_0x2c2ecf,_0x378a06[_0x202b40(0x41c)+'h']);_0x2c2ecf++){var _0x3dddd7=_0x3156e4(_0x378a06[_0x2c2ecf],-0xe26+-0x121*0xf+0x1f4d);if(!_0x3dddd7)continue;_0x4ed6c5[_0x202b40(0x1ee)+'eExp']&&(_0x3d96df(_0x3dddd7,-0x1*-0x246+-0x1cf*-0xb+0x1fd*-0xb,_0x4a12cf['ctBSe'],_0x5dfc4e),_0x3d96df(_0x3dddd7,-0x975+0x1cea*0x1+-0x3b*0x53,_0x4a12cf['ctBSe'],_0x5dfc4e));_0x4ed6c5['noSpr'+'ead']&&(_0x4a12cf['rrJbg'](_0x3d96df,_0x3dddd7,-0x2351+-0x5c*-0x47+0xa55,'f32',-0xfe1*-0x1+0x2f9*-0x8+0x11*0x77),_0x3d96df(_0x3dddd7,-0x7*-0x54b+0x228c+-0x4731,'f32',0x9ed*0x2+-0xe99*0x1+-0x540));if(_0x4ed6c5[_0x202b40(0x2ea)+_0x202b40(0x165)])_0x3d96df(_0x3dddd7,0x125*0x2+0x2e*0x25+0x2*-0x44a,_0x202b40(0x434),-0x10c2+0x1*0x2353+0x2*-0x755);_0x4ed6c5[_0x202b40(0x2d3)+_0x202b40(0x251)]&&(_0x48c3f4(_0x3dddd7,-0x1bb8+0x12de+0x966,_0x4a12cf[_0x202b40(0x196)],-0x146*0x19+-0xc*-0x18a+0x2*0x6af+0.1),_0x3d96df(_0x3dddd7,-0x9e6+-0x238e+0x68c*0x7,_0x202b40(0x3d5),0x14e4+-0x1*0xf95+-0x54f+0.1));}else try{_0x4ea70c[_0x202b40(0x52f)][_0x202b40(0x2f2)+_0x202b40(0x16a)+'d'](_0x3604cd);}catch(_0x14163b){}}catch(_0x1bf785){}}else _0x250269(),_0x4a12cf[_0x202b40(0x5f7)](_0x4b83f9,_0x4a12cf[_0x202b40(0x59e)](_0x54d031,_0x12bf19['value']));},0x60f+0x729+-0xc70),setInterval(()=>{var _0x12089a=_0xa36f26,_0x4084f9={'WFzvz':_0x12089a(0xb0)+'n'};if(_0x4a12cf[_0x12089a(0x160)](_0x12089a(0x2c3),_0x4a12cf[_0x12089a(0x76)])){_0x361647[_0x12089a(0xa6)+_0x12089a(0x376)]=!!window[_0x12089a(0x388)+_0x12089a(0x515)+_0x12089a(0x2a8)];try{var _0x2dd096=0x1c2+0x2*0x472+-0x1*0xaa6;for(var _0x58cc99 in _0x1a5517){if(_0x4a12cf[_0x12089a(0x160)]('xcEyu','xcEyu')){var _0x2e7767=_0x4341b1['creat'+_0x12089a(0x335)+_0x12089a(0x3dd)]('butto'+'n');return _0x2e7767['type']='butto'+'n',_0x2e7767[_0x12089a(0x26d)+_0x12089a(0x133)]=_0x4084f9[_0x12089a(0x2db)],_0x2e7767[_0x12089a(0x3ee)+_0x12089a(0x4e5)+'t']=_0x58067f,_0x2e7767[_0x12089a(0x2e4)+'ck']=_0x139a56=>{var _0x276dd5=_0x12089a;_0x139a56[_0x276dd5(0x301)+_0x276dd5(0x113)+'ation'](),_0x1d7c96();},_0x2e7767;}else{if(_0x1a5517[_0x58cc99]&&_0x1a5517[_0x58cc99][_0x12089a(0x83)+'ed'])_0x2dd096++;}}_0x361647[_0x12089a(0xd8)+'Ok']=_0x2dd096;}catch(_0x29a877){}}else{var _0x11c0b4=_0x4fac77[_0x3eb7e4][_0x12089a(0x378)+_0x12089a(0x1cf)+_0x12089a(0xe3)](_0x12089a(0x3a9)+'desc');_0x11c0b4&&(_0x11c0b4[_0x12089a(0x3ee)+'onten'+'t']['index'+'Of'](_0x12089a(0x522))===0x99*-0x3f+0x1e18+0x78f||_0x11c0b4[_0x12089a(0x3ee)+'onten'+'t']['index'+'Of'](_0x12089a(0x4ae))===-0x20b5+0x1a31+0x684)&&(_0x11c0b4['textC'+'onten'+'t']=_0x17c339[_0x12089a(0x157)+_0x12089a(0x3d8)]?_0x4a12cf[_0x12089a(0x4b5)]:_0x309b91[_0x12089a(0x1d0)]?_0x4a12cf['fYEzi'](_0x4a12cf[_0x12089a(0x3e5)](_0x4a12cf['fYEzi']('UWMK\x20'+_0x12089a(0x333)+'\x20',_0x53ab43[_0x12089a(0xd8)+_0x12089a(0x5da)]?_0x4a12cf[_0x12089a(0x36f)](_0x4a12cf[_0x12089a(0x3d3)](_0x27bcb1['hooks'+'Ok'],'/')+_0x44a1b7[_0x12089a(0xd8)+'Total'],_0x4a12cf[_0x12089a(0xeb)]):_0x12089a(0x453)+'ks\x20ar'+_0x12089a(0x524)+'all\x20o'+'ff)')+_0x4a12cf[_0x12089a(0x607)],_0x8cfc76[_0x12089a(0xa6)+_0x12089a(0x376)]?_0x12089a(0x259)+'d':_0x12089a(0x54c)+'ng')+_0x4a12cf['htbGK']+(_0x181c01[_0x12089a(0x3c3)+_0x12089a(0x84)]?_0x4a12cf[_0x12089a(0x5a8)]:'none')+(_0x12089a(0x3bd)+_0x12089a(0x429)+'t\x20'),_0x3e05f3[_0x12089a(0x3de)+'ents']?_0x4a12cf[_0x12089a(0x5a8)]:_0x4a12cf['ClvGn'])+(_0x416779[_0x12089a(0x30d)+'rror']?_0x4a12cf[_0x12089a(0x462)](_0x4a12cf['lgJrx'],_0x43ed0b['lastE'+_0x12089a(0x193)]):''):'UWMK\x20'+'MISSI'+'NG\x20-\x20'+_0x12089a(0x297)+'ay\x20on'+'ly\x20(r'+'einst'+_0x12089a(0x21e)+_0x12089a(0x539)+_0x12089a(0xfe)+_0x12089a(0x590));}},-0x1*0x1a11+-0xfee+-0x2de7*-0x1);var _0x4e88eb=new Set(),_0x40e2d1={0x1:[],0x3:[]},_0x441a67=![];function _0x4c6976(_0x318610){var _0x14aefc=_0xa36f26;_0x4e88eb[_0x14aefc(0x23c)](_0x318610['code']);}function _0x27c2b2(_0xce8a5c){var _0x1d4038=_0xa36f26;_0x4e88eb['delet'+'e'](_0xce8a5c[_0x1d4038(0x2a4)]);}function _0x1d395b(_0x42d508){var _0x323798=_0xa36f26;if(_0x42d508[_0x323798(0x45e)+_0x323798(0x2a0)])return;_0x4e88eb['add'](_0x323798(0x395)+_0x4a12cf['sFNXZ'](_0x42d508['butto'+'n'],-0x2167+0x1bf1+0x577));var _0x25e5bc=_0x40e2d1[_0x42d508[_0x323798(0x3a3)+'n']+(-0xf92+0x10fb+0xb4*-0x2)];if(_0x25e5bc){_0x25e5bc['push'](performance['now']());if(_0x25e5bc[_0x323798(0x41c)+'h']>-0x162b+-0x482*0x8+0x1*0x3a63)_0x25e5bc[_0x323798(0x1b6)]();}}function _0x195ffa(_0x2e6f43){var _0x4221e7=_0xa36f26;if(!_0x2e6f43[_0x4221e7(0x45e)+_0x4221e7(0x2a0)])_0x4e88eb[_0x4221e7(0x3a6)+'e'](_0x4221e7(0x395)+(_0x2e6f43[_0x4221e7(0x3a3)+'n']+(-0x13*0x2b+-0x1*-0xe6f+0x19b*-0x7)));}function _0x4c88ba(){var _0x51e97f=_0xa36f26;_0x4e88eb[_0x51e97f(0x23b)]();}function _0x2dc19b(){var _0x4dccc0=_0xa36f26;if(_0x4dccc0(0x2ae)===_0x4dccc0(0x2ae)){if(_0x441a67)return;_0x441a67=!![],window['addEv'+_0x4dccc0(0x5ac)+'stene'+'r'](_0x4a12cf[_0x4dccc0(0xb3)],_0x4c6976,!![]),window[_0x4dccc0(0x3c2)+_0x4dccc0(0x5ac)+_0x4dccc0(0xb5)+'r'](_0x4dccc0(0x33e),_0x27c2b2,!![]),window['addEv'+'entLi'+_0x4dccc0(0xb5)+'r'](_0x4a12cf['ZmgyG'],_0x1d395b,!![]),window['addEv'+'entLi'+'stene'+'r'](_0x4a12cf[_0x4dccc0(0x1e7)],_0x195ffa,!![]),window['addEv'+_0x4dccc0(0x5ac)+_0x4dccc0(0xb5)+'r'](_0x4a12cf['DDnaO'],_0x4c88ba);}else try{var _0x4501c4=_0x1a53cf[_0x4dccc0(0x2e1)+'ostfi'+'x']({'typeName':_0x49c818,'methodName':_0x414197,'params':_0x17e12b,'returnType':_0x8a6abe},_0x23c8a8);return _0x4501c4[_0x4dccc0(0x26c)+'ed']=_0x4a12cf[_0x4dccc0(0x2fb)](_0xb58f7e,![]),_0x324e1f[_0x502c17]=_0x4501c4,_0x399a42['hooks'+'Total']++,_0x4501c4;}catch(_0x137b68){return _0x40aac2['warn']('[saku'+_0x4dccc0(0x169)+'ur]\x20h'+_0x4dccc0(0x45c)+_0x4dccc0(0x2a3)+_0x4dccc0(0x591),_0x4c749b,_0x137b68&&_0x137b68[_0x4dccc0(0x4a8)+'ge']),null;}}function _0x4e7b37(_0x3b3c83){var _0x26c70d=_0xa36f26,_0x491457=_0x40e2d1[_0x3b3c83]||[],_0x3702fc=performance[_0x26c70d(0x3c5)]();while(_0x491457[_0x26c70d(0x41c)+'h']&&_0x4a12cf[_0x26c70d(0x4c7)](_0x4a12cf[_0x26c70d(0x1b4)](_0x3702fc,_0x491457[0x13f3+-0x8e7+0x586*-0x2]),0xe1e+0x8bf*0x4+0x82*-0x59))_0x491457['shift']();return _0x491457[_0x26c70d(0x41c)+'h'];}function _0x3ffa9a(_0x85d788){var _0x2c3839=_0xa36f26;if(_0x4a12cf[_0x2c3839(0x4ec)]===_0x2c3839(0x54e)){if(document['body']&&(document[_0x2c3839(0x563)+_0x2c3839(0x2a7)]===_0x2c3839(0x3e7)+'activ'+'e'||_0x4a12cf['CWptQ'](document[_0x2c3839(0x563)+_0x2c3839(0x2a7)],_0x4a12cf[_0x2c3839(0x3e2)])))_0x85d788();else document[_0x2c3839(0x3c2)+_0x2c3839(0x5ac)+'stene'+'r']('DOMCo'+_0x2c3839(0x4e0)+'Loade'+'d',_0x85d788,{'once':!![]});}else _0x4b957c[_0x2c3839(0x2a4)]==='Inser'+'t'&&(_0x4ade38['preve'+'ntDef'+'ault'](),_0x4e05c6());}_0x3ffa9a(()=>{var _0x3f01e5=_0xa36f26,_0x164ff3={'rFLxw':'kour-'+_0x3f01e5(0x353)+'0x250'+_0x3f01e5(0x374)+'nt','PoTgw':_0x3f01e5(0x4a4)+_0x3f01e5(0x569)+_0x3f01e5(0x5bc)+_0x3f01e5(0x4f5)+'t','IuRUk':_0x4a12cf['jDkDw'],'hbtrd':'fulls'+_0x3f01e5(0x144)+_0x3f01e5(0xaa)+'s','bKyFN':function(_0x5e218a,_0x53245c){var _0x13e314=_0x3f01e5;return _0x4a12cf[_0x13e314(0x3b0)](_0x5e218a,_0x53245c);},'EobNe':'none','COpVp':function(_0x318be6,_0x525bb7){var _0x4523b2=_0x3f01e5;return _0x4a12cf[_0x4523b2(0x263)](_0x318be6,_0x525bb7);},'XAJkC':function(_0x3ad0f6,_0x180185){var _0x259e1b=_0x3f01e5;return _0x4a12cf[_0x259e1b(0x566)](_0x3ad0f6,_0x180185);},'pJkEX':_0x3f01e5(0x3fd)+'-sans'+'-seri'+'f,sys'+_0x3f01e5(0x4e2)+_0x3f01e5(0x28c)+_0x3f01e5(0x4a1)+'if','pppIr':_0x3f01e5(0x45d),'DdYmN':_0x4a12cf[_0x3f01e5(0x299)],'HjEXp':function(_0x3e5366,_0x2f4140){return _0x3e5366-_0x2f4140;},'dBpMp':function(_0x420871,_0x439fb1){var _0x326bda=_0x3f01e5;return _0x4a12cf[_0x326bda(0x3ae)](_0x420871,_0x439fb1);},'qxsxW':function(_0x335f29,_0x393504){return _0x335f29+_0x393504;},'yLCph':function(_0x5d17b6,_0x25274a){return _0x4a12cf['cQXkN'](_0x5d17b6,_0x25274a);},'CkazL':function(_0x676382,_0x5aa3fc){return _0x676382(_0x5aa3fc);},'hpqDp':function(_0x1cd24b,_0x3cffc8){var _0x4e4486=_0x3f01e5;return _0x4a12cf[_0x4e4486(0x121)](_0x1cd24b,_0x3cffc8);},'ApIHy':function(_0x3491ff,_0x2297e3){var _0x4f3cff=_0x3f01e5;return _0x4a12cf[_0x4f3cff(0x72)](_0x3491ff,_0x2297e3);},'JgvVs':function(_0x5baaaa,_0x35e1a2){var _0x255e1a=_0x3f01e5;return _0x4a12cf[_0x255e1a(0x57a)](_0x5baaaa,_0x35e1a2);},'uzUOH':function(_0x5b67d8,_0x1c2299){return _0x5b67d8-_0x1c2299;},'VgOBZ':function(_0x4ace8b,_0x243478){var _0x5ec1a2=_0x3f01e5;return _0x4a12cf[_0x5ec1a2(0x614)](_0x4ace8b,_0x243478);},'XQUCH':function(_0xc8840b,_0xc6b810){return _0xc8840b||_0xc6b810;},'UcuVt':'sakur'+_0x3f01e5(0x619)+'r.ui.'+'v1','VnKYt':function(_0x2ffbba,_0x56a3c4){return _0x4a12cf['CWptQ'](_0x2ffbba,_0x56a3c4);},'HrerV':function(_0x565573){var _0x3dc34e=_0x3f01e5;return _0x4a12cf[_0x3dc34e(0x438)](_0x565573);},'zknmf':_0x3f01e5(0x22d),'WXidI':function(_0x39c30a,_0x20ebc3){return _0x39c30a!==_0x20ebc3;},'gXDKZ':'span','tzVXF':'sk-hi'+'nt','KTYbf':_0x3f01e5(0x92),'wNhDL':function(_0x492f91,_0x5c734f){return _0x4a12cf['JCdCv'](_0x492f91,_0x5c734f);},'ildHG':'sk-no'+'te','aZGfJ':_0x3f01e5(0x484)+'rd','VFbpo':function(_0x1b3cdc,_0x5b13d4,_0x1e621e){return _0x1b3cdc(_0x5b13d4,_0x1e621e);},'Xzobt':'YDxKh','TLFOB':_0x3f01e5(0x567)+_0x3f01e5(0x4b4)+_0x3f01e5(0x5cc),'xutmy':_0x4a12cf[_0x3f01e5(0x5e0)],'BJPoj':_0x4a12cf['mNUJw'],'aPLGx':function(_0x158258){return _0x158258();},'AUnLw':'noRec'+'oil','lObJP':'iRQdG','lalSS':function(_0xe7928d){var _0x4720ac=_0x3f01e5;return _0x4a12cf[_0x4720ac(0x195)](_0xe7928d);},'lUhGL':_0x4a12cf[_0x3f01e5(0x2e5)],'jxsVa':_0x3f01e5(0x3ca)+'ng\x20fo'+'r\x20gam'+'e…','SnWLO':_0x3f01e5(0x3ac)+_0x3f01e5(0x4c9)+_0x3f01e5(0x10d)+_0x3f01e5(0x18b)+'e,mon'+_0x3f01e5(0x18b)+'e','JRDBH':function(_0x571c46,_0x2e8625){return _0x571c46(_0x2e8625);},'XZvZg':function(_0x4769f2,_0x26ea2a){return _0x4769f2+_0x26ea2a;},'zCIkv':_0x3f01e5(0x1be),'LefFr':_0x4a12cf[_0x3f01e5(0x190)],'TidKL':function(_0x5bb4b4,_0x32793f,_0x1923c0,_0x3ec61d,_0x5b9ad3){var _0x90b89d=_0x3f01e5;return _0x4a12cf[_0x90b89d(0x310)](_0x5bb4b4,_0x32793f,_0x1923c0,_0x3ec61d,_0x5b9ad3);},'rwHIv':function(_0x497e4b,_0x3769db){return _0x497e4b===_0x3769db;},'KsKDU':_0x4a12cf[_0x3f01e5(0x7e)],'GnEKX':_0x4a12cf[_0x3f01e5(0xd6)],'MDhyL':function(_0x1ba3b4,_0x5e1f29){return _0x1ba3b4<_0x5e1f29;},'CvVvp':function(_0x79c87c,_0x5e5974){return _0x79c87c===_0x5e5974;},'eSxow':_0x4a12cf[_0x3f01e5(0x134)],'RoTlQ':_0x3f01e5(0x317),'ZMhnR':_0x4a12cf['XgxTR'],'ldUKR':function(_0x4e2b1a,_0x448a08){return _0x4e2b1a+_0x448a08;},'VjtrA':function(_0x33fee3,_0xc6239d){var _0x184827=_0x3f01e5;return _0x4a12cf[_0x184827(0x566)](_0x33fee3,_0xc6239d);},'bwuVD':'\x20hook'+'s','RpyRK':_0x4a12cf['IJNRg'],'eSbhW':'loadi'+'ng','fLRxN':_0x3f01e5(0x329)+'go','iCZQs':_0x3f01e5(0x1ef)+'in','UUBqd':'Sakur'+_0x3f01e5(0x3bb)+'r','aLWip':'small','OXftV':'butto'+'n','huglJ':_0x4a12cf[_0x3f01e5(0x40c)],'HGFwC':_0x3f01e5(0xc2)+'|5|6|'+_0x3f01e5(0x326),'VdDUD':'mn-ta'+'b','pXZLW':_0x4a12cf['VxqcU'],'rftLB':_0x3f01e5(0x204)+'ll>'};_0x4ed6c5['adblo'+'ck']&&_0x4a12cf[_0x3f01e5(0x3d6)](setInterval,()=>{var _0x418115=_0x3f01e5;try{for(var _0x28d51f of[_0x164ff3[_0x418115(0x5c2)],_0x164ff3['PoTgw'],_0x164ff3['IuRUk'],'fulls'+'creen'+'-banr'+'s']){var _0x43dd22=document['getEl'+_0x418115(0x197)+_0x418115(0x13b)](_0x28d51f);if(_0x43dd22&&_0x28d51f===_0x164ff3[_0x418115(0x2c6)]){var _0x1c6708=_0x43dd22['child'+'ren'];for(var _0x5617da=0x2*-0xa6+-0x10d*-0xb+-0xa43;_0x5617da<_0x1c6708[_0x418115(0x41c)+'h'];_0x5617da++){if(_0x1c6708[_0x5617da]['id']&&_0x164ff3[_0x418115(0x3be)](_0x1c6708[_0x5617da]['id']['index'+'Of'](_0x418115(0x4a4)+_0x418115(0x38a)),-0x21c4*-0x1+0xaad+0x16f*-0x1f))_0x1c6708[_0x5617da][_0x418115(0x534)][_0x418115(0x48d)+'ay']=_0x164ff3[_0x418115(0x138)];}}else{if(_0x43dd22)_0x43dd22[_0x418115(0x534)][_0x418115(0x48d)+'ay']=_0x164ff3[_0x418115(0x138)];}}}catch(_0x3144dc){}},-0x1ea+-0x11*-0x238+-0x1bfe);var _0x5b691d=document[_0x3f01e5(0x1b3)+_0x3f01e5(0x335)+_0x3f01e5(0x3dd)](_0x4a12cf[_0x3f01e5(0x1ec)]);_0x5b691d['style'][_0x3f01e5(0x4a2)+'xt']=_0x3f01e5(0x2c0)+'ion:f'+_0x3f01e5(0x572)+_0x3f01e5(0x7a)+':0;wi'+_0x3f01e5(0x1de)+'00vw;'+_0x3f01e5(0x46f)+'t:100'+_0x3f01e5(0x435)+_0x3f01e5(0x5c5)+_0x3f01e5(0x27f)+'48364'+'6;poi'+'nter-'+_0x3f01e5(0x1b1)+_0x3f01e5(0x5ce)+'e';var _0x35767c=_0x5b691d['getCo'+_0x3f01e5(0xc9)]('2d');function _0x2e2ba5(){var _0x33647b=_0x3f01e5;try{var _0x313f15=document['fulls'+_0x33647b(0x144)+_0x33647b(0x5cd)+'nt'],_0x516b69=_0x313f15&&_0x164ff3[_0x33647b(0x9b)](_0x313f15[_0x33647b(0x43c)+'me'],'CANVA'+'S')?_0x313f15:document[_0x33647b(0x52f)]||document['docum'+_0x33647b(0x221)+_0x33647b(0x197)];if(_0x5b691d[_0x33647b(0x4f5)+_0x33647b(0x2d9)]!==_0x516b69)_0x516b69[_0x33647b(0x2f2)+_0x33647b(0x16a)+'d'](_0x5b691d);}catch(_0x28713b){try{document['body']['appen'+_0x33647b(0x16a)+'d'](_0x5b691d);}catch(_0x575977){}}}var _0x1153c2={'w':0x0,'h':0x0,'dpr':0x0};function _0x11d7df(){var _0x226d34=_0x3f01e5,_0x13d191=_0x4a12cf[_0x226d34(0x581)][_0x226d34(0x28f)]('|'),_0x35b92e=-0x27*0x46+0x1d0e+0x1264*-0x1;while(!![]){switch(_0x13d191[_0x35b92e++]){case'0':_0x1153c2[_0x226d34(0x510)]=_0x4191d9;continue;case'1':var _0x533edb=window[_0x226d34(0x5c3)+_0x226d34(0x502)],_0x359058=window['inner'+_0x226d34(0x153)+'t'];continue;case'2':if(_0x4a12cf[_0x226d34(0xca)](_0x533edb,_0x1153c2['w'])&&_0x359058===_0x1153c2['h']&&_0x4a12cf['pbVit'](_0x4191d9,_0x1153c2[_0x226d34(0x510)]))return;continue;case'3':var _0x4191d9=window[_0x226d34(0x48e)+'ePixe'+'lRati'+'o']||-0x1446+-0xe33+-0xb7e*-0x3;continue;case'4':_0x1153c2['w']=_0x533edb;continue;case'5':_0x5b691d[_0x226d34(0x46f)+'t']=Math[_0x226d34(0x125)](_0x359058*_0x4191d9);continue;case'6':_0x1153c2['h']=_0x359058;continue;case'7':_0x5b691d['width']=Math[_0x226d34(0x125)](_0x533edb*_0x4191d9);continue;case'8':_0x35767c[_0x226d34(0x49b)+'ansfo'+'rm'](_0x4191d9,0x6*-0x38c+0x2*0x12a4+0x100*-0x10,0x53e+-0x593*-0x1+0x47*-0x27,_0x4191d9,-0x201*0x13+-0x1e3*0x1+-0x3*-0xd52,0x2258+0xdcc+-0x3024);continue;}break;}}var _0x10f378=0x136a+-0x112*0x11+-0x34*0x6,_0x33153f=performance[_0x3f01e5(0x3c5)](),_0xfce906=-0x6*0x41b+-0x24cb*-0x1+0x11b*-0xb;function _0x249999(_0x6d8a9a){var _0x540667=_0x3f01e5,_0x4fe3f1={'SJGSJ':_0x540667(0x176)+'|5|3|'+'1','FRzjG':_0x4a12cf[_0x540667(0x5c1)],'aPuHB':'#ff6b'+'9d','xVCdu':_0x4a12cf[_0x540667(0x2b3)],'BkfOS':'gqDyn','yeDrb':'rgba('+_0x540667(0x10f)+_0x540667(0xea)+'0,0.8'+')','XIwSx':_0x540667(0x56e)+'r','MCrAx':function(_0xc35bde,_0x1a6601){var _0x24784f=_0x540667;return _0x4a12cf[_0x24784f(0x1c1)](_0xc35bde,_0x1a6601);},'UxKvX':function(_0x23c170,_0x4663d5){return _0x23c170+_0x4663d5;},'yscfg':function(_0x208652,_0x2e1f1a){return _0x208652+_0x2e1f1a;},'rRDHm':function(_0x137408,_0x20ba96){var _0x6188b=_0x540667;return _0x4a12cf[_0x6188b(0x36f)](_0x137408,_0x20ba96);}},_0x1fdf83=Number(_0x4ed6c5[_0x540667(0x183)+'le'])||-0x44+0xd*0x143+-0x46*0x3b,_0x284943=(-0x5f8*0x5+-0xa06+0xa*0x400)*_0x1fdf83,_0x574462=_0x4a12cf[_0x540667(0x4c3)](-0xee4+0x2*-0x4a3+0x182e,_0x1fdf83),_0x28ad1e=_0x4a12cf['uPzap'](_0x284943,-0x2117+0x1d8f*-0x1+0x3ea9)+_0x574462*(0x712+0x25*-0xbb+0x10d*0x13),_0x3811e4=_0x4a12cf[_0x540667(0x462)](_0x284943*(0x2*0xec+0xdf9+0x2*-0x7e7),_0x574462*(-0xc*0xd9+-0x1b*0x7f+0x1793)),_0x1307be=_0x4ed6c5[_0x540667(0x2e0)],_0x50c120=_0x1307be==='br'?_0x4a12cf['dwOVP'](_0x4a12cf['rTZFM'](_0x6d8a9a[_0x540667(0x59c)],0x125*0xa+0x3ef*0x3+0x172f*-0x1),_0x28ad1e):_0x4a12cf[_0x540667(0x4ea)](_0x6d8a9a[_0x540667(0x129)],0x1*-0x4dd+-0x3*-0x2dd+-0x86*0x7),_0x32c589=_0x1307be==='ml'?_0x4a12cf[_0x540667(0x4cc)](_0x6d8a9a[_0x540667(0x609)],_0x6d8a9a[_0x540667(0x46f)+'t']/(-0x2*-0x8b5+-0x6c+-0x87e*0x2))-_0x3811e4/(-0xe36+0x3*-0x84b+0x1*0x2719):_0x4a12cf['dwOVP'](_0x6d8a9a[_0x540667(0x1d4)+'m'],_0x3811e4)-(_0x4a12cf[_0x540667(0x529)](_0x1307be,'bl')?0x9df*0x2+-0x1*-0x115f+-0x1ef*0x13:0xee5+-0x18*-0xcd+-0x2187),_0x1b4a91=(_0x1d6991,_0x568a7d,_0x3331af,_0x3eb77a,_0x1bb499,_0x307a6d,_0x193c8c)=>{var _0x5e7d78=_0x540667,_0x533c81=_0x4e88eb['has'](_0x568a7d);_0x35767c['save'](),_0x35767c[_0x5e7d78(0x77)+'Path']();if(_0x35767c[_0x5e7d78(0x125)+_0x5e7d78(0x2b7)])_0x35767c['round'+_0x5e7d78(0x2b7)](_0x3331af,_0x3eb77a,_0x1bb499,_0x307a6d,(-0x5*-0x393+0x3*-0x6c4+-0x9d*-0x4)*_0x1fdf83);else _0x35767c[_0x5e7d78(0x95)](_0x3331af,_0x3eb77a,_0x1bb499,_0x307a6d);_0x35767c['fillS'+_0x5e7d78(0x296)]=_0x533c81?'rgba('+_0x5e7d78(0x487)+'07,15'+'7,0.8'+'5)':'rgba('+_0x5e7d78(0x465)+_0x5e7d78(0x34e)+'7)',_0x35767c['fill'](),_0x35767c[_0x5e7d78(0x5df)+'idth']=0xf24+-0x231*0x7+0x4*0xd,_0x35767c[_0x5e7d78(0x5a3)+_0x5e7d78(0x55e)+'e']=_0x533c81?_0x95c47a:'rgba('+_0x5e7d78(0x487)+'07,15'+_0x5e7d78(0x417)+'5)',_0x35767c[_0x5e7d78(0x5a3)+'e']();if(_0x533c81){if(_0x4fe3f1[_0x5e7d78(0x556)]!==_0x4fe3f1[_0x5e7d78(0x1ca)])_0x35767c['shado'+_0x5e7d78(0x4bb)+'r']=_0x4d2de0,_0x35767c[_0x5e7d78(0x36d)+_0x5e7d78(0x1a5)]=0x8e7*-0x3+-0x3*-0x6ae+-0x1*-0x6b9,_0x35767c[_0x5e7d78(0x132)](),_0x35767c[_0x5e7d78(0x36d)+_0x5e7d78(0x1a5)]=0x3e6*-0x1+0x99b+0x1e7*-0x3;else{var _0x40cf54=_0x4fe3f1[_0x5e7d78(0x3d1)][_0x5e7d78(0x28f)]('|'),_0x9256ac=-0x7ec+0xcf*0x2e+-0x1d46;while(!![]){switch(_0x40cf54[_0x9256ac++]){case'0':_0x5622fa['class'+'Name']=_0x4fe3f1['FRzjG'];continue;case'1':return _0x5622fa;case'2':var _0x5622fa=_0xd37441[_0x5e7d78(0x1b3)+_0x5e7d78(0x335)+_0x5e7d78(0x3dd)]('input');continue;case'3':_0x5622fa[_0x5e7d78(0x2c8)+'ut']=()=>_0x1d1d5a(_0x5622fa[_0x5e7d78(0x38b)]);continue;case'4':_0x5622fa['type']='color';continue;case'5':_0x5622fa['value']=/^#[0-9a-f]{6}$/i['test'](_0x3eb27d)?_0x57e9a9:_0x4fe3f1[_0x5e7d78(0x11d)];continue;}break;}}}_0x35767c['fillS'+'tyle']=_0x533c81?'#fff':_0x4fe3f1[_0x5e7d78(0x97)],_0x35767c[_0x5e7d78(0x20e)+_0x5e7d78(0x264)]=_0x4fe3f1['XIwSx'],_0x35767c[_0x5e7d78(0x578)+_0x5e7d78(0x3a7)+'ne']='middl'+'e',_0x35767c['font']=_0x4fe3f1['MCrAx']('700\x20'+Math[_0x5e7d78(0x125)]((0x731+-0x1a81+0x3b*0x54)*_0x1fdf83),_0x5e7d78(0x3fd)+'-sans'+'-seri'+_0x5e7d78(0x2f3)+_0x5e7d78(0x4e2)+_0x5e7d78(0x28c)+_0x5e7d78(0x4a1)+'if'),_0x35767c[_0x5e7d78(0x24a)+_0x5e7d78(0x473)](_0x1d6991,_0x4fe3f1[_0x5e7d78(0x1ba)](_0x3331af,_0x1bb499/(0x23e2+-0x1*-0x1e1b+-0x41fb)),_0x3eb77a+_0x307a6d/(0x248a+-0x1f*-0x8+-0x258*0x10)-(_0x193c8c?(-0x153*0x1b+0x205+0x1*0x21c1)*_0x1fdf83:0x2*-0x121d+-0x2680+0x4aba)),_0x193c8c&&(_0x35767c[_0x5e7d78(0x14c)]=_0x4fe3f1['yscfg'](_0x4fe3f1[_0x5e7d78(0x359)]('600\x20',Math[_0x5e7d78(0x125)]((0x3*0x1ed+0x1*0x22ee+-0x28ac)*_0x1fdf83)),'px\x20ui'+_0x5e7d78(0x1c3)+'-seri'+_0x5e7d78(0x2f3)+_0x5e7d78(0x4e2)+_0x5e7d78(0x28c)+'s-ser'+'if'),_0x35767c[_0x5e7d78(0x5db)+_0x5e7d78(0x296)]=_0x533c81?'#fff':'rgba('+_0x5e7d78(0x10f)+'35,24'+_0x5e7d78(0x139)+'5)',_0x35767c['fillT'+'ext'](_0x193c8c,_0x4fe3f1[_0x5e7d78(0x1a3)](_0x3331af,_0x1bb499/(0xd36+0x38d+0x10c1*-0x1)),_0x3eb77a+_0x307a6d/(0x247f*-0x1+-0x15fe+0x5*0xbb3)+(-0x16f*0xe+-0xbdb+0x1ff5)*_0x1fdf83)),_0x35767c[_0x5e7d78(0x31f)+'re']();};_0x1b4a91('W',_0x4a12cf[_0x540667(0xc7)],_0x50c120+_0x284943+_0x574462,_0x32c589,_0x284943,_0x284943),_0x4a12cf[_0x540667(0x19c)](_0x1b4a91,'A',_0x540667(0x4ac),_0x50c120,_0x32c589+_0x284943+_0x574462,_0x284943,_0x284943),_0x4a12cf['tMloQ'](_0x1b4a91,'S','KeyS',_0x4a12cf['OZLjS'](_0x50c120+_0x284943,_0x574462),_0x4a12cf['sFNXZ'](_0x32c589,_0x284943)+_0x574462,_0x284943,_0x284943),_0x1b4a91('D',_0x4a12cf['gXSXQ'],_0x50c120+_0x4a12cf['bNBXU'](_0x4a12cf[_0x540667(0x5a7)](_0x284943,_0x574462),-0x1d1+-0x1bef+0x1dc2),_0x4a12cf['yINJz'](_0x32c589+_0x284943,_0x574462),_0x284943,_0x284943);var _0x18ac47=_0x4a12cf['AdXvQ'](_0x28ad1e-_0x574462,-0x17db+-0x110b*0x1+-0x134*-0x22),_0x3b475e=_0x4a12cf['yQJGp'](_0x32c589,_0x4a12cf[_0x540667(0x21f)](_0x284943+_0x574462,-0x1*-0x751+0x98*-0x39+-0x1a89*-0x1));_0x4a12cf['XKtJh'](_0x1b4a91,_0x540667(0x82),_0x540667(0x395)+'1',_0x50c120,_0x3b475e,_0x18ac47,_0x284943,_0x4ed6c5['ksCps']?_0x4e7b37(-0x13*0x13a+-0x1e59+0x35a8)+_0x4a12cf['lurDd']:''),_0x4a12cf['sUfNR'](_0x1b4a91,_0x4a12cf['CBcuD'],_0x540667(0x395)+'3',_0x4a12cf['iwTJI'](_0x50c120+_0x18ac47,_0x574462),_0x3b475e,_0x18ac47,_0x284943,_0x4ed6c5['ksCps']?_0x4a12cf['CMHFn'](_0x4a12cf[_0x540667(0x43e)](_0x4e7b37,0x1e1*-0xd+-0x1*0x24b7+0xc3b*0x5),'\x20CPS'):''),_0x4a12cf[_0x540667(0x19c)](_0x1b4a91,'',_0x540667(0x49a),_0x50c120,_0x3b475e+_0x284943+_0x574462,_0x28ad1e,_0x284943*(-0x2683*0x1+0x3*0x27a+0x49*0x6d+0.45));}function _0x30d395(_0x2c3abe){var _0x2e1b03=_0x3f01e5,_0x4f12b3={'RJDMT':function(_0x24c348,_0x190bf0){var _0x101a11=_0x6d57;return _0x164ff3[_0x101a11(0x482)](_0x24c348,_0x190bf0);},'nacfW':function(_0x3a4a87,_0x2f2937){return _0x3a4a87*_0x2f2937;},'ZsEci':_0x164ff3['pJkEX'],'Cbxad':_0x2e1b03(0x14b)+'255,2'+'35,24'+_0x2e1b03(0x139)+'5)'};if(_0x164ff3['pppIr']!=='ovbTg')_0x1d26cd['font']=_0x4f12b3[_0x2e1b03(0x30f)]('600\x20'+_0x4f3627[_0x2e1b03(0x125)](_0x4f12b3['nacfW'](0xcab+-0x4*0xcf+-0x966,_0xb6c7f2)),_0x4f12b3[_0x2e1b03(0x4fc)]),_0x184f52[_0x2e1b03(0x5db)+'tyle']=_0xfc4e5b?'#fff':_0x4f12b3['Cbxad'],_0x58c1f1[_0x2e1b03(0x24a)+_0x2e1b03(0x473)](_0x152696,_0x4f12b3[_0x2e1b03(0x30f)](_0x5105ce,_0x1bf022/(0xbb9+-0x147c*-0x1+-0x2033*0x1)),_0x4f12b3['RJDMT'](_0x7e3fcd+_0x1a21f3/(0x2d*0x1+-0x35*-0x8+-0x1d3),(-0x12ad+-0x1f1a+0x137*0x29)*_0x361686));else{var _0x5b570d=_0x164ff3['DdYmN']['split']('|'),_0x52bd7d=-0xf9a*0x2+-0xf88+0x2ebc;while(!![]){switch(_0x5b570d[_0x52bd7d++]){case'0':_0x35767c['moveT'+'o'](_0x164ff3['HjEXp'](_0x5ea5ae,_0xbd9370)-_0x1efda9,_0x3e9166);continue;case'1':_0x35767c[_0x2e1b03(0x5a3)+_0x2e1b03(0x55e)+'e']=_0x5a5d89;continue;case'2':_0x35767c[_0x2e1b03(0x5db)+'tyle']=_0x5a5d89;continue;case'3':_0x35767c[_0x2e1b03(0x36d)+_0x2e1b03(0x4bb)+'r']=_0x5a5d89;continue;case'4':_0x35767c[_0x2e1b03(0x557)+'o'](_0x5ea5ae,_0x164ff3[_0x2e1b03(0x1d6)](_0x164ff3[_0x2e1b03(0x361)](_0x3e9166,_0xbd9370),_0x1efda9));continue;case'5':var _0x5ea5ae=_0x164ff3[_0x2e1b03(0xbe)](_0x2c3abe[_0x2e1b03(0x21d)],-0x1487+0x1*-0x20de+0x3567),_0x3e9166=_0x2c3abe['heigh'+'t']/(-0x1*0x19f9+-0x1c5e+0x1*0x3659);continue;case'6':var _0x1a90f0=_0x164ff3[_0x2e1b03(0x58b)](Number,_0x4ed6c5[_0x2e1b03(0x28b)+'e'])||0x1*-0x1045+0x1991+-0x94b;continue;case'7':_0x35767c[_0x2e1b03(0x5a3)+'e']();continue;case'8':_0x35767c['resto'+'re']();continue;case'9':_0x35767c[_0x2e1b03(0x77)+_0x2e1b03(0x601)]();continue;case'10':_0x35767c[_0x2e1b03(0xc1)+'o'](_0x5ea5ae,_0x164ff3['qxsxW'](_0x3e9166,_0xbd9370));continue;case'11':_0x35767c[_0x2e1b03(0x7b)](_0x5ea5ae,_0x3e9166,_0x164ff3[_0x2e1b03(0x5bf)](-0x2*0xdf+-0x7ce*-0x1+0x8d*-0xb+0.6000000000000001,_0x1a90f0),0x380+0x9af+-0xd2f,Math['PI']*(0x1b1+-0x1895+0x1*0x16e6));continue;case'12':_0x35767c['fill']();continue;case'13':_0x35767c[_0x2e1b03(0xc1)+'o'](_0x164ff3[_0x2e1b03(0x1d6)](_0x5ea5ae,_0xbd9370),_0x3e9166);continue;case'14':var _0x5a5d89=/^#[0-9a-f]{6}$/i['test'](_0x4ed6c5[_0x2e1b03(0x51e)+'or'])?_0x4ed6c5[_0x2e1b03(0x51e)+'or']:_0x2e1b03(0x477)+'9d';continue;case'15':_0x35767c[_0x2e1b03(0x557)+'o'](_0x5ea5ae,_0x3e9166-_0xbd9370);continue;case'16':_0x35767c[_0x2e1b03(0x557)+'o'](_0x5ea5ae-_0xbd9370,_0x3e9166);continue;case'17':var _0xbd9370=_0x164ff3['ApIHy'](0x1bc2+-0x25d+-0x195f,_0x1a90f0),_0x1efda9=_0x164ff3[_0x2e1b03(0x163)](-0xdc9+0x19*0x4f+-0x30d*-0x2,_0x1a90f0);continue;case'18':_0x35767c['shado'+'wBlur']=0x711+-0x23a+-0x4d1;continue;case'19':_0x35767c[_0x2e1b03(0x5df)+_0x2e1b03(0x51c)]=Math['max'](0x1*0x1c35+-0x10bf+-0xb75*0x1+0.5,_0x164ff3['hpqDp'](-0x9ff+-0x5f3*0x1+0xff4,_0x1a90f0));continue;case'20':_0x35767c[_0x2e1b03(0xc1)+'o'](_0x5ea5ae,_0x164ff3['uzUOH'](_0x3e9166,_0xbd9370)-_0x1efda9);continue;case'21':_0x35767c['begin'+'Path']();continue;case'22':_0x35767c['save']();continue;case'23':_0x35767c[_0x2e1b03(0x557)+'o'](_0x164ff3[_0x2e1b03(0x412)](_0x5ea5ae,_0xbd9370)+_0x1efda9,_0x3e9166);continue;}break;}}}function _0x3d2293(_0x488966){var _0x17183d=_0x3f01e5,_0x2d4c3b=(_0x17183d(0x31e)+'|7|9|'+_0x17183d(0x13e)+'|2|3')[_0x17183d(0x28f)]('|'),_0x5a144e=-0x1504+0x2092+0x66*-0x1d;while(!![]){switch(_0x2d4c3b[_0x5a144e++]){case'0':_0x4a12cf[_0x17183d(0x406)](_0xf9013a,_0x17183d(0x5b1)+_0x17183d(0xd2)+_0x17183d(0x3e8)+'1','#ff6b'+'9d');continue;case'1':_0x35767c[_0x17183d(0x14c)]='600\x201'+_0x17183d(0x4c9)+_0x17183d(0x10d)+_0x17183d(0x18b)+_0x17183d(0x131)+_0x17183d(0x18b)+'e';continue;case'2':if(!_0x361647[_0x17183d(0xa6)+'oaded'])_0xf9013a(_0x17183d(0x3ca)+_0x17183d(0x478)+_0x17183d(0x2cb)+'e…',_0x17183d(0x14b)+_0x17183d(0x487)+_0x17183d(0x228)+_0x17183d(0x459)+')');continue;case'3':_0x35767c['resto'+'re']();continue;case'4':_0x35767c[_0x17183d(0x1d9)]();continue;case'5':_0x35767c['textA'+_0x17183d(0x264)]=_0x17183d(0x129);continue;case'6':var _0xf9013a=(_0x57eb64,_0x407c22)=>{var _0x5b9fa0=_0x17183d;_0x35767c[_0x5b9fa0(0x5db)+_0x5b9fa0(0x296)]=_0x164ff3[_0x5b9fa0(0x55b)](_0x407c22,'rgba('+_0x5b9fa0(0x10f)+_0x5b9fa0(0xea)+_0x5b9fa0(0x420)+'5)'),_0x35767c['fillT'+_0x5b9fa0(0x473)](_0x57eb64,_0x1fe4ef,_0x4629c0),_0x4629c0+=-0xe*0x2a4+-0x1c1b*0x1+0x4123;};continue;case'7':_0x35767c[_0x17183d(0x578)+_0x17183d(0x3a7)+'ne']=_0x4a12cf[_0x17183d(0x190)];continue;case'8':if(_0x4ed6c5[_0x17183d(0x17a)])_0xf9013a(_0xfce906+'\x20FPS');continue;case'9':var _0x4629c0=0x8ea+0x168b+0x1f49*-0x1,_0x1fe4ef=-0x23*-0xf5+0x18c7*0x1+-0x2*0x1d1d;continue;}break;}}function _0x5ba9a6(){var _0xc78912=_0x3f01e5,_0x478947=('1|7|6'+'|10|2'+_0xc78912(0xf6)+'5|4|0'+'|9')['split']('|'),_0x39335c=0xf92*0x2+0x1dc4+-0x3ce8;while(!![]){switch(_0x478947[_0x39335c++]){case'0':if(_0x4ed6c5['keyst'+'rokes'])_0x249999(_0x13bb93);continue;case'1':requestAnimationFrame(_0x5ba9a6);continue;case'2':_0x11d7df();continue;case'3':_0x2e2ba5();continue;case'4':if(_0x4ed6c5['cross'+'hair'])_0x4a12cf['csaqA'](_0x30d395,_0x13bb93);continue;case'5':var _0x13bb93={'left':0x0,'top':0x0,'right':_0x1153c2['w'],'bottom':_0x1153c2['h'],'width':_0x1153c2['w'],'height':_0x1153c2['h']};continue;case'6':var _0x10855b=performance[_0xc78912(0x3c5)]();continue;case'7':_0x10f378++;continue;case'8':_0x35767c[_0xc78912(0x23b)+_0xc78912(0x2b7)](-0x1de3+-0x3*0x1bf+-0x232*-0x10,-0x12d6+-0xc5e*0x1+0x1f34,_0x1153c2['w'],_0x1153c2['h']);continue;case'9':_0x3d2293(_0x13bb93);continue;case'10':_0x4a12cf['rTZFM'](_0x10855b,_0x33153f)>=-0xfcc+-0xa23+0x3b*0x79&&(_0xfce906=Math[_0xc78912(0x125)](_0x4a12cf[_0xc78912(0x120)](_0x10f378*(0x2*0x126+0x7*-0x265+-0x125f*-0x1),_0x10855b-_0x33153f)),_0x10f378=-0x1d*-0xe5+0x25*0xac+-0x32cd,_0x33153f=_0x10855b);continue;}break;}}var _0x4eed7e=document[_0x3f01e5(0x1b3)+'eElem'+'ent'](_0x4a12cf['ZquRY']);_0x4eed7e['id']=_0x4a12cf['FkCOG'],_0x4eed7e[_0x3f01e5(0x534)][_0x3f01e5(0x4a2)+'xt']=_0x4a12cf['sYvGH'];var _0x297b3e=_0x4eed7e['attac'+_0x3f01e5(0x11c)+'ow']({'mode':_0x3f01e5(0x418)});(document['body']||document[_0x3f01e5(0x284)+'entEl'+_0x3f01e5(0x197)])[_0x3f01e5(0x2f2)+_0x3f01e5(0x16a)+'d'](_0x4eed7e);var _0x50c048=![],_0x12f03b={};try{_0x4a12cf[_0x3f01e5(0x307)](_0x4a12cf['bSHja'],'CAfQD')?(_0x58dd5d[_0x3f01e5(0x26d)+_0x3f01e5(0x198)][_0x3f01e5(0x2a2)+'e']('on',_0x76097c),_0x9096aa(_0x395095)):_0x12f03b=JSON[_0x3f01e5(0x42d)](localStorage[_0x3f01e5(0x308)+'em'](_0x4a12cf[_0x3f01e5(0x53f)])||'{}');}catch(_0x4c5a58){}function _0x189d23(){var _0x229a4d=_0x3f01e5;try{localStorage[_0x229a4d(0x322)+'em'](_0x164ff3[_0x229a4d(0x1ea)],JSON['strin'+'gify'](_0x12f03b));}catch(_0x1952b8){}}function _0x3f6eac(_0x1a9962,_0x21f6b6){var _0x443096=_0x3f01e5,_0x351b20=('7|0|3'+'|4|5|'+'6|1|2')[_0x443096(0x28f)]('|'),_0x5c43e2=0x71c+0x1bb6+-0x22d2*0x1;while(!![]){switch(_0x351b20[_0x5c43e2++]){case'0':var _0x9297cf=document[_0x443096(0x1b3)+'eElem'+'ent'](_0x443096(0x3a3)+'n');continue;case'1':_0x9297cf[_0x443096(0x2e4)+'ck']=_0x3ab38a=>{var _0x1a712b=_0x443096;_0x3ab38a[_0x1a712b(0x301)+'ropag'+_0x1a712b(0x50b)]();var _0x2bb6f9=_0x9297cf[_0x1a712b(0x5c8)+'tribu'+'te'](_0x1a712b(0x172)+'check'+'ed')!==_0x5316ee['KUatL'];_0x9297cf['setAt'+_0x1a712b(0x275)+'te']('aria-'+'check'+'ed',_0x5316ee[_0x1a712b(0xaf)](String,_0x2bb6f9)),_0x21f6b6(_0x2bb6f9);};continue;case'2':return _0x9297cf;case'3':_0x9297cf['type']=_0x4a12cf[_0x443096(0xa4)];continue;case'4':_0x9297cf[_0x443096(0x26d)+_0x443096(0x133)]=_0x4a12cf[_0x443096(0x32a)];continue;case'5':_0x9297cf[_0x443096(0x39f)+_0x443096(0x275)+'te'](_0x4a12cf[_0x443096(0x3cc)],_0x4a12cf['ssrvB']);continue;case'6':_0x9297cf[_0x443096(0x39f)+_0x443096(0x275)+'te'](_0x4a12cf['QooYO'],_0x4a12cf[_0x443096(0x59e)](String,!!_0x1a9962));continue;case'7':var _0x5316ee={'KUatL':'true','leJYL':function(_0x166a2b,_0xe68990){return _0x166a2b(_0xe68990);}};continue;}break;}}function _0x15df0e(_0x4e6d26,_0x237447,_0x4d7140,_0x473276,_0x2a9cec){var _0x5e5192=_0x3f01e5,_0x2e3247=_0x4a12cf[_0x5e5192(0x20c)][_0x5e5192(0x28f)]('|'),_0x217e61=-0xe5c+-0x2383+0x1*0x31df;while(!![]){switch(_0x2e3247[_0x217e61++]){case'0':_0x1d7a6c[_0x5e5192(0x3ee)+'onten'+'t']=String(_0x4e6d26);continue;case'1':var _0x3e8193={'UKMFI':function(_0x3de15d,_0x33cd2d){return _0x4a12cf['SwCnc'](_0x3de15d,_0x33cd2d);},'emaAV':function(_0x2dd556,_0x2a242f){var _0x165105=_0x5e5192;return _0x4a12cf[_0x165105(0x102)](_0x2dd556,_0x2a242f);},'RfyRQ':function(_0x4d1677,_0x25a69c){return _0x4d1677*_0x25a69c;},'zSfkK':function(_0x47b0d9,_0x2ddf09){return _0x47b0d9/_0x2ddf09;}};continue;case'2':var _0x39140e=document['creat'+'eElem'+'ent'](_0x4a12cf[_0x5e5192(0x5a5)]);continue;case'3':_0x42f881[_0x5e5192(0x5a6)]=_0x4d7140;continue;case'4':_0x42f881[_0x5e5192(0x38b)]=_0x4e6d26;continue;case'5':_0x39140e['appen'+'d'](_0x42f881,_0x1d7a6c);continue;case'6':_0x42f881[_0x5e5192(0x33c)]=_0x4a12cf[_0x5e5192(0x257)];continue;case'7':_0x39140e[_0x5e5192(0x26d)+_0x5e5192(0x133)]='sk-ra'+'nge';continue;case'8':_0x42f881['step']=_0x473276;continue;case'9':_0x42f881['class'+_0x5e5192(0x133)]=_0x5e5192(0x546)+_0x5e5192(0x4ee);continue;case'10':_0x1d7a6c[_0x5e5192(0x26d)+'Name']=_0x4a12cf[_0x5e5192(0xcc)];continue;case'11':var _0x42f881=document['creat'+_0x5e5192(0x335)+'ent'](_0x5e5192(0x518));continue;case'12':var _0x4ebbfb=()=>{var _0x8bc0f=_0x5e5192;_0x1d7a6c['textC'+'onten'+'t']=_0x3e8193[_0x8bc0f(0x5ca)](String,_0x42f881['value']),_0x39140e['style']['setPr'+'opert'+'y'](_0x8bc0f(0x2df),_0x3e8193['emaAV'](_0x3e8193['RfyRQ'](_0x3e8193[_0x8bc0f(0xf0)](_0x42f881['value']-_0x237447,_0x4d7140-_0x237447),-0x1*0x5a1+-0xe3*0x11+0x2d*0x78),'%'));};continue;case'13':_0x4a12cf[_0x5e5192(0x281)](_0x4ebbfb);continue;case'14':_0x42f881['oninp'+'ut']=()=>{var _0x37f328=_0x5e5192;_0x4ebbfb(),_0x2a9cec(Number(_0x42f881[_0x37f328(0x38b)]));};continue;case'15':return _0x39140e;case'16':_0x42f881[_0x5e5192(0x538)]=_0x237447;continue;case'17':var _0x1d7a6c=document['creat'+'eElem'+'ent'](_0x4a12cf[_0x5e5192(0x3c9)]);continue;}break;}}function _0x330f84(_0xb88f88,_0x9edce4){var _0x3dedc5=_0x3f01e5,_0x4e59c9=document['creat'+_0x3dedc5(0x335)+'ent'](_0x3dedc5(0x518));return _0x4e59c9[_0x3dedc5(0x33c)]=_0x3dedc5(0x237),_0x4e59c9['class'+'Name']='sk-co'+_0x3dedc5(0x5b4),_0x4e59c9['value']=/^#[0-9a-f]{6}$/i[_0x3dedc5(0x186)](_0xb88f88)?_0xb88f88:_0x3dedc5(0x477)+'9d',_0x4e59c9[_0x3dedc5(0x2c8)+'ut']=()=>_0x9edce4(_0x4e59c9['value']),_0x4e59c9;}function _0x3d9b10(_0x4d14a8,_0x439111,_0x258551){var _0x31b34f=_0x3f01e5,_0x1f0980=document[_0x31b34f(0x1b3)+_0x31b34f(0x335)+'ent'](_0x4a12cf[_0x31b34f(0x8c)]);_0x1f0980['class'+_0x31b34f(0x133)]=_0x4a12cf[_0x31b34f(0x606)];for(var [_0x4c60c9,_0x272c2c]of _0x439111){if(_0x4a12cf[_0x31b34f(0x269)](_0x31b34f(0x137),_0x4a12cf['sScqf'])){var _0xf1125d=document[_0x31b34f(0x1b3)+_0x31b34f(0x335)+'ent'](_0x31b34f(0x595)+'n');_0xf1125d[_0x31b34f(0x38b)]=_0x4c60c9,_0xf1125d['textC'+'onten'+'t']=_0x272c2c,_0x1f0980['appen'+'dChil'+'d'](_0xf1125d);}else{var _0x284ff2=_0x2badec[_0x31b34f(0x1b3)+_0x31b34f(0x335)+_0x31b34f(0x3dd)](_0x31b34f(0x92));_0x284ff2['class'+'Name']='sk-mb'+_0x31b34f(0x33d);var _0x246237=_0x245325['creat'+'eElem'+_0x31b34f(0x3dd)]('div');_0x246237['class'+_0x31b34f(0x133)]=_0x31b34f(0x368)+'esc',_0x246237[_0x31b34f(0x3ee)+_0x31b34f(0x4e5)+'t']=_0x290dab,_0x284ff2[_0x31b34f(0x2f2)+_0x31b34f(0x16a)+'d'](_0x246237);for(var _0x182771 of _0x3722a9)_0x284ff2[_0x31b34f(0x2f2)+'dChil'+'d'](_0x182771);_0x24e8ec[_0x31b34f(0x2f2)+'dChil'+'d'](_0x284ff2);}}return _0x1f0980[_0x31b34f(0x38b)]=_0x4d14a8,_0x1f0980[_0x31b34f(0x602)+'nge']=()=>_0x258551(_0x1f0980['value']),_0x1f0980;}function _0x5d38bf(_0x4e4003,_0x459535){var _0x2634a4=_0x3f01e5,_0x121520={'UUOpn':function(_0x9e5b2c,_0xd54117){return _0x9e5b2c>_0xd54117;},'HYnNS':'.sk-m'+'desc','LYrZG':function(_0x29ca8c,_0x2d9968){return _0x164ff3['VnKYt'](_0x29ca8c,_0x2d9968);},'WJtlq':function(_0x1cfd00,_0x112607){return _0x1cfd00+_0x112607;},'jyqbH':function(_0x2086a1,_0x3e148b){return _0x2086a1+_0x3e148b;},'SYcbW':function(_0x242f82,_0x276a0a){return _0x242f82+_0x276a0a;},'bcvMx':'UWMK\x20'+_0x2634a4(0x333)+'\x20','kcmDN':_0x164ff3['zknmf'],'DeQAW':_0x164ff3[_0x2634a4(0x138)],'ZyfrO':'\x20|\x20ER'+_0x2634a4(0x289)};if(_0x164ff3['WXidI'](_0x2634a4(0x252),'ivIcR')){if(!_0x256036||_0x2c1555['inclu'+'des'](_0x277781)||_0x121520[_0x2634a4(0x3d2)](_0x51600d[_0x2634a4(0x41c)+'h'],0x14de*-0x1+-0x1ab7*0x1+0x1*0x2fd5))return;_0x168fbe[_0x2634a4(0x15e)](_0x2ddc98);}else{var _0x1c1af2=document[_0x2634a4(0x1b3)+'eElem'+'ent'](_0x2634a4(0x3a3)+'n');return _0x1c1af2[_0x2634a4(0x33c)]='butto'+'n',_0x1c1af2[_0x2634a4(0x26d)+_0x2634a4(0x133)]='sk-bt'+'n',_0x1c1af2[_0x2634a4(0x3ee)+_0x2634a4(0x4e5)+'t']=_0x4e4003,_0x1c1af2['oncli'+'ck']=_0x4b25a0=>{var _0x1d5b7f=_0x2634a4;if(_0x164ff3['VnKYt']('hfjOi',_0x1d5b7f(0x1e8)))_0x4b25a0['stopP'+_0x1d5b7f(0x113)+_0x1d5b7f(0x50b)](),_0x164ff3[_0x1d5b7f(0x3e3)](_0x459535);else{if(!_0x1c1d00)return;var _0x3b57ab=_0x196e61['child'+_0x1d5b7f(0x399)];for(var _0x297889=-0x1*0x1343+0x262f+-0x12ec;_0x297889<_0x3b57ab[_0x1d5b7f(0x41c)+'h'];_0x297889++){var _0x399978=_0x3b57ab[_0x297889]['query'+_0x1d5b7f(0x1cf)+_0x1d5b7f(0xe3)](_0x121520[_0x1d5b7f(0x370)]);_0x399978&&(_0x399978[_0x1d5b7f(0x3ee)+'onten'+'t'][_0x1d5b7f(0x5c5)+'Of'](_0x1d5b7f(0x522))===-0x91b+-0xb*0x185+0x19d2||_0x121520['LYrZG'](_0x399978[_0x1d5b7f(0x3ee)+_0x1d5b7f(0x4e5)+'t'][_0x1d5b7f(0x5c5)+'Of']('SAFE'),-0x1844+-0xf4d*0x1+0x5a7*0x7))&&(_0x399978[_0x1d5b7f(0x3ee)+'onten'+'t']=_0x4bdb8c['safeM'+'ode']?_0x1d5b7f(0x242)+'MODE\x20'+_0x1d5b7f(0x2bf)+_0x1d5b7f(0x4e3)+_0x1d5b7f(0x53c)+'\x20no\x20h'+_0x1d5b7f(0x19b)+'(relo'+_0x1d5b7f(0x59d)+_0x1d5b7f(0x44f)+')':_0x49871f[_0x1d5b7f(0x1d0)]?_0x121520['WJtlq'](_0x121520['jyqbH'](_0x121520[_0x1d5b7f(0x313)](_0x121520[_0x1d5b7f(0x4a5)](_0x121520[_0x1d5b7f(0x579)]+(_0x45aeb6[_0x1d5b7f(0xd8)+_0x1d5b7f(0x5da)]?_0x121520[_0x1d5b7f(0xad)](_0x1d76ab[_0x1d5b7f(0xd8)+'Ok']+'/'+_0x42ea1a['hooks'+_0x1d5b7f(0x5da)],'\x20hook'+'s'):_0x1d5b7f(0x453)+'ks\x20ar'+_0x1d5b7f(0x524)+_0x1d5b7f(0x426)+_0x1d5b7f(0x4e4)),'\x20|\x20ga'+_0x1d5b7f(0x56f))+(_0x24af65['gameL'+_0x1d5b7f(0x376)]?'loade'+'d':_0x1d5b7f(0x54c)+'ng')+(_0x1d5b7f(0x5e9)+_0x1d5b7f(0x4f0)+'\x20'),_0x1f7c7d[_0x1d5b7f(0x3c3)+'ers']?_0x121520['kcmDN']:'none'),_0x1d5b7f(0x3bd)+_0x1d5b7f(0x429)+'t\x20')+(_0x4ef488[_0x1d5b7f(0x3de)+_0x1d5b7f(0x3bc)]?_0x121520['kcmDN']:_0x121520[_0x1d5b7f(0x31a)]),_0x23ddf9[_0x1d5b7f(0x30d)+_0x1d5b7f(0x193)]?_0x121520[_0x1d5b7f(0x4a5)](_0x121520[_0x1d5b7f(0xd0)],_0x5c904d[_0x1d5b7f(0x30d)+'rror']):''):_0x1d5b7f(0x4d2)+_0x1d5b7f(0x4b3)+'NG\x20-\x20'+_0x1d5b7f(0x297)+_0x1d5b7f(0x116)+'ly\x20(r'+_0x1d5b7f(0x2c4)+_0x1d5b7f(0x21e)+'he\x20us'+_0x1d5b7f(0xfe)+_0x1d5b7f(0x590));}}},_0x1c1af2;}}function _0x329d19(_0x90392a,_0xa5a9c6,_0x49fd33){var _0x265c5e=_0x3f01e5,_0x584c65=document[_0x265c5e(0x1b3)+_0x265c5e(0x335)+_0x265c5e(0x3dd)](_0x265c5e(0x92));_0x584c65['class'+_0x265c5e(0x133)]='sk-ct'+'l';var _0x4c6420=document[_0x265c5e(0x1b3)+_0x265c5e(0x335)+_0x265c5e(0x3dd)](_0x164ff3[_0x265c5e(0x511)]);_0x4c6420[_0x265c5e(0x26d)+_0x265c5e(0x133)]=_0x265c5e(0x396)+'bel',_0x4c6420[_0x265c5e(0x3ee)+_0x265c5e(0x4e5)+'t']=_0x90392a;if(_0xa5a9c6){var _0x1bed2b=document[_0x265c5e(0x1b3)+_0x265c5e(0x335)+_0x265c5e(0x3dd)]('small');_0x1bed2b['class'+_0x265c5e(0x133)]=_0x164ff3['tzVXF'],_0x1bed2b[_0x265c5e(0x3ee)+'onten'+'t']=_0xa5a9c6,_0x4c6420['appen'+_0x265c5e(0x16a)+'d'](_0x1bed2b);}return _0x584c65[_0x265c5e(0x2f2)+'d'](_0x4c6420,_0x49fd33),_0x584c65;}function _0x20f92e(_0x35594d,_0x2cd962){var _0x37da55=_0x3f01e5,_0x2e7557=document['creat'+'eElem'+_0x37da55(0x3dd)](_0x164ff3[_0x37da55(0xb9)]);return _0x2e7557[_0x37da55(0x26d)+_0x37da55(0x133)]=_0x164ff3[_0x37da55(0x205)](_0x164ff3['ildHG'],_0x2cd962?_0x37da55(0x8e):''),_0x2e7557[_0x37da55(0x3ee)+_0x37da55(0x4e5)+'t']=_0x35594d,_0x2e7557;}function _0x5f2485(_0x4d78cc,_0x50448f,_0x223bbc,_0x1bb195,_0x311470){var _0x41bb2e=_0x3f01e5,_0x20d6b9={'NCDTG':function(_0x5c3c0b,_0x17e073){return _0x5c3c0b(_0x17e073);}},_0x2f0f3d=document['creat'+'eElem'+_0x41bb2e(0x3dd)]('div');_0x2f0f3d['class'+'Name']=_0x164ff3[_0x41bb2e(0x3b7)]+(_0x223bbc?_0x41bb2e(0x3d4):'');var _0x580c67=document[_0x41bb2e(0x1b3)+'eElem'+_0x41bb2e(0x3dd)](_0x164ff3['KTYbf']);_0x580c67[_0x41bb2e(0x26d)+_0x41bb2e(0x133)]=_0x41bb2e(0x484)+_0x41bb2e(0x424)+'ad';var _0x58a821=document[_0x41bb2e(0x1b3)+_0x41bb2e(0x335)+'ent'](_0x164ff3['KTYbf']);_0x58a821['class'+_0x41bb2e(0x133)]=_0x41bb2e(0x484)+'rd-ti'+'tle';var _0x1be781=document['creat'+_0x41bb2e(0x335)+'ent'](_0x41bb2e(0x2fa)+'g');_0x1be781[_0x41bb2e(0x3ee)+_0x41bb2e(0x4e5)+'t']=_0x4d78cc,_0x58a821['appen'+'dChil'+'d'](_0x1be781);if(_0x1bb195){var _0x5b9f9f=_0x164ff3[_0x41bb2e(0x594)](_0x3f6eac,_0x223bbc,_0x39b906=>{var _0x1ddec1=_0x41bb2e;_0x2f0f3d['class'+_0x1ddec1(0x198)][_0x1ddec1(0x2a2)+'e']('on',_0x39b906),_0x20d6b9[_0x1ddec1(0x52a)](_0x1bb195,_0x39b906);});_0x580c67[_0x41bb2e(0x2f2)+'d'](_0x58a821,_0x5b9f9f);}else _0x580c67['appen'+'dChil'+'d'](_0x58a821);_0x2f0f3d[_0x41bb2e(0x2f2)+_0x41bb2e(0x16a)+'d'](_0x580c67);if(_0x311470&&_0x311470[_0x41bb2e(0x41c)+'h']){if(_0x164ff3['COpVp'](_0x164ff3[_0x41bb2e(0x352)],_0x41bb2e(0xa3))){var _0x5b8589=_0x164ff3[_0x41bb2e(0x44c)]['split']('|'),_0x352ee4=0x9*0x20d+0x739*0x3+-0x30*0xd6;while(!![]){switch(_0x5b8589[_0x352ee4++]){case'0':var _0x402ff0=document['creat'+'eElem'+_0x41bb2e(0x3dd)](_0x164ff3['KTYbf']);continue;case'1':_0x8f95ad[_0x41bb2e(0x26d)+_0x41bb2e(0x133)]='sk-md'+'esc';continue;case'2':for(var _0x18e69f of _0x311470)_0x402ff0[_0x41bb2e(0x2f2)+_0x41bb2e(0x16a)+'d'](_0x18e69f);continue;case'3':_0x8f95ad['textC'+_0x41bb2e(0x4e5)+'t']=_0x50448f;continue;case'4':_0x402ff0[_0x41bb2e(0x2f2)+_0x41bb2e(0x16a)+'d'](_0x8f95ad);continue;case'5':var _0x8f95ad=document[_0x41bb2e(0x1b3)+_0x41bb2e(0x335)+_0x41bb2e(0x3dd)](_0x41bb2e(0x92));continue;case'6':_0x402ff0[_0x41bb2e(0x26d)+_0x41bb2e(0x133)]=_0x164ff3[_0x41bb2e(0x117)];continue;case'7':_0x2f0f3d[_0x41bb2e(0x2f2)+_0x41bb2e(0x16a)+'d'](_0x402ff0);continue;}break;}}else _0xc8ee06[_0x41bb2e(0x11e)](_0x41bb2e(0x1e4)+'ra-ko'+_0x41bb2e(0x126)+_0x41bb2e(0x40f)+_0x41bb2e(0x457)+'ailed'+':',_0x2f3263&&_0x53a590[_0x41bb2e(0x4a8)+'ge']);}return _0x2f0f3d;}var _0x46e8ce=[{'id':_0x3f01e5(0x87)+'t','label':'Comba'+'t'},{'id':_0x4a12cf[_0x3f01e5(0x5c9)],'label':_0x4a12cf[_0x3f01e5(0x4d3)]},{'id':_0x4a12cf[_0x3f01e5(0x445)],'label':_0x4a12cf['umfSe']},{'id':_0x4a12cf[_0x3f01e5(0xd9)],'label':'Misc'},{'id':'safe','label':_0x3f01e5(0x540)+'y'}];function _0xf89802(){var _0x50e626=_0x3f01e5,_0x4bd3a2={'nTzIM':'kour-'+'io_'},_0x2809ee=_0x361647['safeM'+_0x50e626(0x3d8)]?'SAFE\x20'+'MODE\x20'+_0x50e626(0x379)+_0x50e626(0x4e3)+_0x50e626(0x53c)+'\x20no\x20h'+'ooks\x20'+'(relo'+_0x50e626(0x59d)+_0x50e626(0x44f)+')':_0x361647[_0x50e626(0x1d0)]?_0x4a12cf[_0x50e626(0x4ea)](_0x4a12cf[_0x50e626(0x462)](_0x4a12cf['kIZiw'](_0x4a12cf['pfivn'](_0x4a12cf['xCapr'](_0x4a12cf[_0x50e626(0x3f0)]+(_0x361647['hooks'+_0x50e626(0x5da)]?_0x4a12cf[_0x50e626(0x1dc)](_0x4a12cf['pfivn'](_0x4a12cf[_0x50e626(0x4fa)](_0x361647[_0x50e626(0xd8)+'Ok'],'/'),_0x361647[_0x50e626(0xd8)+'Total']),'\x20hook'+'s'):_0x4a12cf[_0x50e626(0x2dd)]),_0x4a12cf['IJNRg']),_0x361647[_0x50e626(0xa6)+_0x50e626(0x376)]?_0x50e626(0x259)+'d':'loadi'+'ng'),'\x20|\x20sh'+_0x50e626(0x4f0)+'\x20'),_0x361647['shoot'+_0x50e626(0x84)]?'held':_0x4a12cf[_0x50e626(0x86)]),'\x20|\x20mo'+_0x50e626(0x429)+'t\x20')+(_0x361647[_0x50e626(0x3de)+_0x50e626(0x3bc)]?'held':_0x4a12cf[_0x50e626(0x86)]):_0x50e626(0x4d2)+_0x50e626(0x4b3)+_0x50e626(0xfc)+_0x50e626(0x297)+'ay\x20on'+_0x50e626(0x16e)+_0x50e626(0x2c4)+'all\x20t'+_0x50e626(0x539)+_0x50e626(0xfe)+'ipt)';if(_0x361647['lastE'+_0x50e626(0x193)])_0x2809ee+=_0x4a12cf['JCdCv']('\x20|\x20ER'+_0x50e626(0x289),_0x361647[_0x50e626(0x30d)+'rror']);return _0x5f2485(_0x50e626(0x46c)+'s',_0x2809ee,_0x361647[_0x50e626(0x1d0)],null,[_0x329d19(_0x4a12cf['rGlQe'],'calls'+_0x50e626(0x54f)+_0x50e626(0x166)+_0x50e626(0x3ec)+_0x50e626(0xb7)+_0x50e626(0x178)+_0x50e626(0x2c5)+_0x50e626(0x491)+_0x50e626(0x3b4)+_0x50e626(0x458),_0x5d38bf(_0x4a12cf['QNWfj'],()=>{var _0x17947a=_0x50e626;try{if(_0x17947a(0x2e9)===_0x17947a(0x3f6)){if(_0x1019b1[_0x2ea14e]['id']&&_0x462eab[_0x29fe12]['id']['index'+'Of'](_0x4bd3a2['nTzIM'])===0x1ad+-0xf73+0x2*0x6e3)_0x4fea1b[_0x3be1d9][_0x17947a(0x534)][_0x17947a(0x48d)+'ay']='none';}else{if(_0x1dec04)_0x1dec04[_0x17947a(0x46e)](_0x164ff3[_0x17947a(0x503)],_0x17947a(0x2c5)+'arget'+_0x17947a(0x3b4)+'Rate',[0xce4+0x2*0xa6c+0x833*-0x4]);}}catch(_0x58c663){}}))]);}function _0x11bc35(_0x39d601){var _0x1dcaa9=_0x3f01e5,_0x489e13={'AETPr':function(_0x5768c4){return _0x5768c4();},'VfgaG':function(_0x32f9e0,_0x2a80a1,_0x27bba3){return _0x32f9e0(_0x2a80a1,_0x27bba3);},'AagWF':'godDi'+'e','MppEb':function(_0x28ba6a){var _0x34d1b5=_0x6d57;return _0x4a12cf[_0x34d1b5(0x2b2)](_0x28ba6a);},'SzmQQ':'unkno'+'wn','fxtQk':_0x4a12cf[_0x1dcaa9(0x472)],'syipA':function(_0x21e194,_0x2cc99b){return _0x21e194(_0x2cc99b);},'QqmTf':_0x1dcaa9(0xe0),'nMKSb':_0x4a12cf[_0x1dcaa9(0x56d)],'tfqxn':_0x1dcaa9(0x80),'hBMJq':_0x4a12cf[_0x1dcaa9(0x2c2)],'hNmlh':function(_0x302d1a){return _0x302d1a();},'hXHFY':function(_0x350993,_0x5ea287){return _0x350993===_0x5ea287;},'PalBE':_0x1dcaa9(0xd3),'HghgD':'div','fjQpy':_0x4a12cf['EcAbP'],'TAnLQ':_0x1dcaa9(0x377)+'l','KkqTd':function(_0x385e53){return _0x385e53();},'sFcmj':_0x1dcaa9(0x2df),'TbnxC':function(_0x2477bc,_0x11ced5){return _0x2477bc-_0x11ced5;},'QnQbu':function(_0x117427,_0x3bcebe){return _0x117427===_0x3bcebe;},'atAOu':_0x4a12cf[_0x1dcaa9(0x30b)],'HWmZZ':function(_0xd6d2b9,_0x1b3a26){return _0x4a12cf['QoaYs'](_0xd6d2b9,_0x1b3a26);},'OaFKW':function(_0x3c0ab0){var _0xfa2df4=_0x1dcaa9;return _0x4a12cf[_0xfa2df4(0x2b2)](_0x3c0ab0);},'dDzzR':function(_0x38e24b){return _0x38e24b();},'JsaRu':function(_0x4fbfc4){return _0x4fbfc4();},'KcPTo':function(_0x2dac74){return _0x2dac74();},'eKBzm':function(_0xb1a1cf,_0x501a85){return _0xb1a1cf+_0x501a85;},'NCJMZ':function(_0x4045ad,_0x3c502b){var _0xa7d4c5=_0x1dcaa9;return _0x4a12cf[_0xa7d4c5(0x1f3)](_0x4045ad,_0x3c502b);},'UodVQ':_0x4a12cf[_0x1dcaa9(0x7f)],'UMLpE':_0x1dcaa9(0x3d5),'UZPGO':function(_0x2a4c9e,_0x395ba2,_0x5baedc,_0x102124,_0x12f585){return _0x2a4c9e(_0x395ba2,_0x5baedc,_0x102124,_0x12f585);},'KfYiQ':function(_0x328c3d,_0x5c87a4){return _0x328c3d!==_0x5c87a4;}};if(_0x39d601===_0x4a12cf[_0x1dcaa9(0xf7)]){if(_0x4a12cf[_0x1dcaa9(0x10b)]===_0x4a12cf['DiXJj'])_0x52651a=_0x33dc16['parse'](_0x2e311f['getIt'+'em'](_0x164ff3[_0x1dcaa9(0x1ea)])||'{}');else return[_0x4a12cf['MufJv'](_0xf89802),_0x5f2485(_0x1dcaa9(0x26e)+_0x1dcaa9(0x3d8),_0x4a12cf[_0x1dcaa9(0xb6)],_0x4ed6c5[_0x1dcaa9(0x47d)],_0x57980c=>{var _0x50e5a2=_0x1dcaa9;_0x4ed6c5[_0x50e5a2(0x47d)]=_0x57980c,_0x489e13[_0x50e5a2(0x182)](_0x3b3747),_0x21dc2a(_0x50e5a2(0x47d),_0x57980c),_0x489e13['VfgaG'](_0x21dc2a,_0x489e13[_0x50e5a2(0x236)],_0x57980c);},[]),_0x4a12cf[_0x1dcaa9(0x215)](_0x5f2485,_0x4a12cf['OEPdW'],_0x1dcaa9(0x537)+'\x20Reco'+'ilMot'+_0x1dcaa9(0x306)+_0x1dcaa9(0x5fc)+_0x1dcaa9(0x34c)+_0x1dcaa9(0x57e)+_0x1dcaa9(0x1b7)+_0x1dcaa9(0x223)+'\x20neve'+'r\x20adv'+_0x1dcaa9(0x1da),_0x4ed6c5[_0x1dcaa9(0x456)+_0x1dcaa9(0x57b)],_0x52bd9d=>{var _0x55f18d=_0x1dcaa9;_0x4ed6c5['noRec'+_0x55f18d(0x57b)]=_0x52bd9d,_0x164ff3['aPLGx'](_0x3b3747),_0x21dc2a(_0x164ff3[_0x55f18d(0x175)],_0x52bd9d);},[]),_0x4a12cf['bCghI'](_0x5f2485,_0x1dcaa9(0x8f)+_0x1dcaa9(0x5ea),_0x1dcaa9(0x4f2)+'s\x20spr'+_0x1dcaa9(0x500)+_0x1dcaa9(0x184)+_0x1dcaa9(0x358)+_0x1dcaa9(0x4f8)+_0x1dcaa9(0x206)+'\x20your'+'\x20weap'+_0x1dcaa9(0xec)+_0x1dcaa9(0x147)+_0x1dcaa9(0x381),_0x4ed6c5[_0x1dcaa9(0x570)+_0x1dcaa9(0x32c)],_0xfd01b1=>{var _0x306975=_0x1dcaa9;_0x4ed6c5[_0x306975(0x570)+_0x306975(0x32c)]=_0xfd01b1,_0x489e13['MppEb'](_0x3b3747);},[]),_0x5f2485(_0x1dcaa9(0x14d)+'\x20Fire'+'\x20[EXP'+']',_0x1dcaa9(0x552)+'s\x20Ove'+_0x1dcaa9(0xe9)+_0x1dcaa9(0x1b8)+_0x1dcaa9(0x181)+_0x1dcaa9(0x60f)+'\x20to\x201'+'0%.\x20S'+_0x1dcaa9(0x3ef)+'\x20may\x20'+_0x1dcaa9(0x616)+'\x20gate'+'\x20shot'+'s.',_0x4ed6c5['rapid'+'Exp'],_0x1b9074=>{var _0x337e12=_0x1dcaa9;_0x4ed6c5[_0x337e12(0x2d3)+_0x337e12(0x251)]=_0x1b9074,_0x489e13[_0x337e12(0xba)](_0x3b3747);},[]),_0x5f2485(_0x1dcaa9(0x19d)+'e\x20[EX'+'P]','Overw'+_0x1dcaa9(0xbc)+'\x20Over'+_0x1dcaa9(0x455)+'eapon'+_0x1dcaa9(0x461)+_0x1dcaa9(0x391)+_0x1dcaa9(0x5fe)+_0x1dcaa9(0x59a)+'\x20the\x20'+'serve'+_0x1dcaa9(0x5b8)+'idate'+'s.',_0x4ed6c5['damag'+_0x1dcaa9(0x5d8)],_0x5a13e3=>{var _0x517414=_0x1dcaa9;_0x4ed6c5['damag'+_0x517414(0x5d8)]=_0x5a13e3,_0x3b3747();},[_0x4a12cf['cxGTu'](_0x329d19,_0x4a12cf['hsdoy'],null,_0x15df0e(_0x4ed6c5['damag'+_0x1dcaa9(0x47b)+'e'],0x1*-0x1303+0x79b*0x1+0xb72,-0xea8+-0xd3*0xe+0x1c26,0x1a0+0x18bf+0x2*-0xd2d,_0x3c3ff0=>{var _0x425484=_0x1dcaa9;_0x4ed6c5[_0x425484(0x1ee)+'eValu'+'e']=_0x3c3ff0,_0x3b3747();}))]),_0x4a12cf['zLFVz'](_0x5f2485,_0x4a12cf[_0x1dcaa9(0x55f)],'Refil'+_0x1dcaa9(0x430)+'e\x20wea'+_0x1dcaa9(0x385)+'\x20cach'+_0x1dcaa9(0x5aa)+_0x1dcaa9(0x463)+_0x1dcaa9(0x405)+'every'+_0x1dcaa9(0x4b0)+'s.',_0x4ed6c5['infAm'+_0x1dcaa9(0x165)],_0x9faa54=>{var _0x223ae2=_0x1dcaa9;if(_0x489e13[_0x223ae2(0x11a)]!==_0x489e13['nMKSb'])_0x4ed6c5[_0x223ae2(0x2ea)+'moExp']=_0x9faa54,_0x3b3747();else try{var _0x745ba8=_0xd0c80a&&(_0x3d0e7d[_0x223ae2(0x4a8)+'ge']||_0x5e7119[_0x223ae2(0x56b)]&&_0x29b276[_0x223ae2(0x56b)][_0x223ae2(0x4a8)+'ge'])||_0x489e13[_0x223ae2(0x1c5)];if(_0x5955a9&&_0x5d8ad2['filen'+'ame'])_0x745ba8+=_0x489e13['fxtQk']+_0x489e13[_0x223ae2(0x5b6)](_0xe7269c,_0x506a73[_0x223ae2(0x5a2)+_0x223ae2(0x171)])[_0x223ae2(0x28f)]('/')[_0x223ae2(0x506)]()+':'+(_0x5a95a1[_0x223ae2(0x5de)+'o']||'?');_0x36dec1['lastE'+_0x223ae2(0x193)]=_0x489e13[_0x223ae2(0x5b6)](_0x4ad311,_0x745ba8)[_0x223ae2(0x170)](-0x7*0x35b+0x1ce3+0x2*-0x2b3,-0x1c7d+-0x3*-0x1c9+-0xbe1*-0x2);}catch(_0x4dad85){}},[_0x20f92e(_0x1dcaa9(0x4c8)+'loads'+_0x1dcaa9(0xc3)+_0x1dcaa9(0x5f1)+'in,\x20t'+_0x1dcaa9(0x40d)+_0x1dcaa9(0x249)+_0x1dcaa9(0x460)+'ppens'+_0x1dcaa9(0x499)+'where'+'.')])];}if(_0x39d601===_0x4a12cf[_0x1dcaa9(0x5c9)])return[_0x5f2485('Speed',_0x4a12cf['bWVht'],_0x4a12cf['UMqcr'](_0x4ed6c5[_0x1dcaa9(0x5ab)+'Pct'],-0x157f+0xd58+0x88b),null,[_0x329d19(_0x4a12cf['HLBxH'],'100\x20='+'\x20defa'+'ult',_0x15df0e(_0x4ed6c5[_0x1dcaa9(0x5ab)+_0x1dcaa9(0x53e)],-0x51d+-0x903+-0x6*-0x263,0x1*-0xac1+-0x423+0x1010,0x15ca*-0x1+0x1c1d+-0x64e*0x1,_0xd1f1a0=>{var _0x4df51f=_0x1dcaa9,_0xbb2aba={'AqJAb':function(_0x5fb830,_0x24a58d){return _0x5fb830!==_0x24a58d;}};if(_0x489e13['tfqxn']!==_0x489e13['hBMJq'])_0x4ed6c5['speed'+_0x4df51f(0x53e)]=_0xd1f1a0,_0x489e13['hNmlh'](_0x3b3747);else{var _0x4a361c=_0x350cfb['fulls'+_0x4df51f(0x144)+_0x4df51f(0x5cd)+'nt'],_0x58f5ab=_0x4a361c&&_0x4a361c[_0x4df51f(0x43c)+'me']!==_0x4df51f(0x18a)+'S'?_0x4a361c:_0x1cd924[_0x4df51f(0x52f)]||_0x216706['docum'+_0x4df51f(0x221)+'ement'];if(_0xbb2aba['AqJAb'](_0x17bec9[_0x4df51f(0x4f5)+_0x4df51f(0x2d9)],_0x58f5ab))_0x58f5ab[_0x4df51f(0x2f2)+'dChil'+'d'](_0x3cb560);}}))]),_0x5f2485(_0x1dcaa9(0x603)+'/\x20Gra'+_0x1dcaa9(0x549),_0x1dcaa9(0x552)+'s\x20Mov'+_0x1dcaa9(0x197)+'.jump'+'Force'+_0x1dcaa9(0x25a)+'both\x20'+'gravi'+'ty\x20va'+_0x1dcaa9(0x612),_0x4ed6c5[_0x1dcaa9(0x45b)+'ct']!==-0x1e39+0x18af+0x6*0xfd||_0x4a12cf[_0x1dcaa9(0x3f9)](_0x4ed6c5[_0x1dcaa9(0x576)+_0x1dcaa9(0x37f)],-0x263f+0x2*-0x442+0x2f27),null,[_0x329d19(_0x4a12cf[_0x1dcaa9(0x47a)],null,_0x15df0e(_0x4ed6c5[_0x1dcaa9(0x45b)+'ct'],0xf40+0x1*0xd6a+-0x1c78,0xfe+-0xbba+0xbe8,-0xe24+-0xc1d+0x1a46,_0xafbf7b=>{var _0x4bcef8=_0x1dcaa9;_0x489e13[_0x4bcef8(0x118)](_0x489e13[_0x4bcef8(0x580)],_0x489e13[_0x4bcef8(0x580)])?(_0x4ed6c5['jumpP'+'ct']=_0xafbf7b,_0x3b3747()):(_0x14297f['speed'+_0x4bcef8(0x53e)]=_0x42f149,_0x97cda9());})),_0x329d19(_0x4a12cf[_0x1dcaa9(0x5cb)],_0x1dcaa9(0x588)+'\x20=\x20fl'+'oaty',_0x15df0e(_0x4ed6c5['gravi'+'tyPct'],0x15*0x1+-0x21ad+0x7b*0x46,0x2f9+-0x2429*-0x1+-0x265a,0x6*0x137+0x56*0x47+-0x1f1f,_0x5dd9c6=>{var _0x3b3dfc=_0x1dcaa9;_0x4ed6c5['gravi'+'tyPct']=_0x5dd9c6,_0x164ff3[_0x3b3dfc(0x5a1)](_0x3b3747);}))]),_0x4a12cf['bCghI'](_0x5f2485,_0x4a12cf['nYEJh'],_0x1dcaa9(0x4f2)+'s\x20Mov'+_0x1dcaa9(0x197)+'.last'+'JumpT'+_0x1dcaa9(0x475)+'o\x20the'+_0x1dcaa9(0x51a)+_0x1dcaa9(0x1e9)+'down\x20'+_0x1dcaa9(0x2c9)+_0x1dcaa9(0x58d)+'ies.',_0x4ed6c5[_0x1dcaa9(0x5c4)],_0x1085ae=>{var _0x2f0343=_0x1dcaa9;_0x4ed6c5[_0x2f0343(0x5c4)]=_0x1085ae,_0x3b3747();},[])];if(_0x4a12cf['hdPkx'](_0x39d601,'visua'+'l'))return[_0x4a12cf['zLFVz'](_0x5f2485,_0x4a12cf['Bxdip'],_0x4a12cf['fOYso'],_0x4ed6c5['keyst'+'rokes'],_0x180ee0=>{var _0x408b2b=_0x1dcaa9,_0x324e23={'blnBJ':_0x489e13['sFcmj'],'pOHSy':function(_0x44567d,_0xf63529){return _0x44567d*_0xf63529;},'laxYa':function(_0x316956,_0x55258b){return _0x489e13['TbnxC'](_0x316956,_0x55258b);}};if(_0x489e13[_0x408b2b(0x253)](_0x489e13[_0x408b2b(0x575)],_0x489e13[_0x408b2b(0x575)]))_0x4ed6c5['keyst'+'rokes']=_0x180ee0,_0x3b3747();else{var _0xbd624b=_0x208102[_0x408b2b(0x1b3)+_0x408b2b(0x335)+_0x408b2b(0x3dd)](_0x489e13['HghgD']);_0xbd624b[_0x408b2b(0x26d)+_0x408b2b(0x133)]=_0x489e13[_0x408b2b(0xe5)];var _0x22c4e0=_0x206a57[_0x408b2b(0x1b3)+'eElem'+'ent']('input');_0x22c4e0[_0x408b2b(0x33c)]='range',_0x22c4e0[_0x408b2b(0x26d)+'Name']='sk-sl'+_0x408b2b(0x4ee),_0x22c4e0[_0x408b2b(0x538)]=_0x558e23,_0x22c4e0[_0x408b2b(0x5a6)]=_0x4f3b80,_0x22c4e0['step']=_0x8b0df,_0x22c4e0[_0x408b2b(0x38b)]=_0x5d7cc1;var _0x21ef59=_0x3d2916[_0x408b2b(0x1b3)+'eElem'+_0x408b2b(0x3dd)]('span');_0x21ef59[_0x408b2b(0x26d)+'Name']=_0x489e13['TAnLQ'],_0x21ef59[_0x408b2b(0x3ee)+'onten'+'t']=_0x19cc94(_0x4d0499);var _0x3f2a93=()=>{var _0x38d873=_0x408b2b;_0x21ef59[_0x38d873(0x3ee)+_0x38d873(0x4e5)+'t']=_0x451b19(_0x22c4e0['value']),_0xbd624b['style']['setPr'+'opert'+'y'](_0x324e23['blnBJ'],_0x324e23[_0x38d873(0x29d)](_0x324e23[_0x38d873(0x504)](_0x22c4e0[_0x38d873(0x38b)],_0x58b923)/(_0x33921f-_0x30963e),-0x3*-0x179+0x140c+-0x1813)+'%');};return _0x22c4e0[_0x408b2b(0x2c8)+'ut']=()=>{var _0x38dc9b=_0x408b2b;_0x3f2a93(),_0x42c44b(_0x2b98ab(_0x22c4e0[_0x38dc9b(0x38b)]));},_0x489e13[_0x408b2b(0x1e3)](_0x3f2a93),_0xbd624b[_0x408b2b(0x2f2)+'d'](_0x22c4e0,_0x21ef59),_0xbd624b;}},[_0x329d19('Posit'+_0x1dcaa9(0x238),null,_0x3d9b10(_0x4ed6c5[_0x1dcaa9(0x2e0)],[['bl',_0x1dcaa9(0x401)+_0x1dcaa9(0x4db)+'t'],['br',_0x1dcaa9(0x401)+'m\x20rig'+'ht'],['ml',_0x1dcaa9(0x363)+_0x1dcaa9(0x12c)+'e']],_0x32fda0=>{_0x4ed6c5['ksPos']=_0x32fda0,_0x164ff3['HrerV'](_0x3b3747);})),_0x329d19(_0x1dcaa9(0xc5),null,_0x4a12cf[_0x1dcaa9(0x3e6)](_0x15df0e,_0x4ed6c5['ksSca'+'le'],0xddc+-0x1*-0x915+-0x16f1*0x1+0.6,0x26d4+-0xeff*0x1+-0x17d4+0.6000000000000001,-0x6a9+0x6f*0xd+0x106+0.05,_0x313cae=>{var _0x6f27ae=_0x1dcaa9;_0x489e13['HWmZZ'](_0x6f27ae(0x25e),_0x6f27ae(0x5ba))?(_0x4ed6c5[_0x6f27ae(0x183)+'le']=_0x313cae,_0x489e13[_0x6f27ae(0x71)](_0x3b3747)):(_0x5c2e05[_0x6f27ae(0x51e)+'or']=_0x35c177,_0x12a81f());})),_0x329d19(_0x4a12cf[_0x1dcaa9(0x554)],null,_0x3f6eac(_0x4ed6c5['ksCps'],_0x5aae38=>{var _0x240ccb=_0x1dcaa9;_0x4ed6c5[_0x240ccb(0x3fc)]=_0x5aae38,_0x3b3747();}))]),_0x5f2485('Cross'+_0x1dcaa9(0x431),_0x4a12cf[_0x1dcaa9(0xce)],_0x4ed6c5[_0x1dcaa9(0x3f2)+'hair'],_0x14e37e=>{var _0x402733=_0x1dcaa9;_0x4ed6c5[_0x402733(0x3f2)+'hair']=_0x14e37e,_0x3b3747();},[_0x4a12cf[_0x1dcaa9(0x161)](_0x329d19,_0x4a12cf['cFlSu'],null,_0x15df0e(_0x4ed6c5[_0x1dcaa9(0x28b)+'e'],-0x4d8+-0xd35+0x120d+0.5,0xe79+-0x1*-0x211+-0x1088+0.5,-0x2d6*0x9+0x1a32+-0xac+0.1,_0x3bfdc7=>{var _0x162dc7=_0x1dcaa9;_0x4ed6c5[_0x162dc7(0x28b)+'e']=_0x3bfdc7,_0x489e13['dDzzR'](_0x3b3747);})),_0x4a12cf[_0x1dcaa9(0x161)](_0x329d19,_0x1dcaa9(0x225),null,_0x4a12cf[_0x1dcaa9(0x3d6)](_0x330f84,_0x4ed6c5[_0x1dcaa9(0x51e)+'or'],_0x5aded7=>{_0x4ed6c5['chCol'+'or']=_0x5aded7,_0x489e13['JsaRu'](_0x3b3747);}))]),_0x4a12cf[_0x1dcaa9(0x577)](_0x5f2485,_0x1dcaa9(0x1db)+_0x1dcaa9(0x84),'FPS\x20o'+'verla'+'y.',_0x4ed6c5[_0x1dcaa9(0x17a)],null,[_0x4a12cf['mVOjN'](_0x329d19,'FPS\x20c'+_0x1dcaa9(0x1a9)+'r',null,_0x3f6eac(_0x4ed6c5['fps'],_0x341c4d=>{var _0x53b2f5=_0x1dcaa9;_0x4ed6c5[_0x53b2f5(0x17a)]=_0x341c4d,_0x3b3747();})),_0x20f92e('No\x20en'+_0x1dcaa9(0xcb)+'ounte'+_0x1dcaa9(0x468)+_0x1dcaa9(0x12b)+'ild\x20h'+_0x1dcaa9(0x96)+_0x1dcaa9(0x18f)+_0x1dcaa9(0x11b)+'ePlay'+_0x1dcaa9(0xb1)+'o\x20pig'+_0x1dcaa9(0x5e6)+'k\x20on.')])];if(_0x39d601===_0x1dcaa9(0x597))return[_0x4a12cf[_0x1dcaa9(0x559)](_0x5f2485,_0x4a12cf['MaxAc'],_0x1dcaa9(0x5ad)+'\x20kour'+_0x1dcaa9(0xc6)+_0x1dcaa9(0x240)+'er\x20sl'+'ots.',_0x4ed6c5[_0x1dcaa9(0x38e)+'ck'],_0x8b38f1=>{var _0x247eef=_0x1dcaa9;_0x4ed6c5[_0x247eef(0x38e)+'ck']=_0x8b38f1,_0x489e13['KcPTo'](_0x3b3747);},[_0x20f92e('Takes'+_0x1dcaa9(0x489)+_0x1dcaa9(0x5cf)+_0x1dcaa9(0x364)+'ad\x20wh'+_0x1dcaa9(0x3e9)+_0x1dcaa9(0x5dc)+'.')])];return[_0x5f2485(_0x1dcaa9(0x38d)+_0x1dcaa9(0x1d5)+'(over'+_0x1dcaa9(0x330)+_0x1dcaa9(0x15d),_0x4a12cf[_0x1dcaa9(0x448)],_0x4ed6c5[_0x1dcaa9(0x157)+_0x1dcaa9(0x3d8)],_0x1c06d1=>{var _0x49c085=_0x1dcaa9;_0x4ed6c5['safeM'+'ode']=_0x1c06d1,_0x3b3747(),location[_0x49c085(0x5d0)+'d']();},[_0x4a12cf['SwWfa'](_0x20f92e,_0x4a12cf[_0x1dcaa9(0x1fc)])]),_0x4a12cf['XqFqL'](_0x5f2485,'Hook\x20'+'risk\x20'+_0x1dcaa9(0x355)+_0x1dcaa9(0x4f6),_0x4a12cf['dDZuw'],_0x4ed6c5['hookG'+'od']||_0x4ed6c5[_0x1dcaa9(0x349)+'odDie']||_0x4ed6c5['hookN'+_0x1dcaa9(0x30e)+'il']||_0x4ed6c5['hookC'+_0x1dcaa9(0x1d2)+'e'],_0x506804=>{var _0x4348a2=_0x1dcaa9,_0x3279b8={'xAENA':_0x4348a2(0x395),'hWJPz':function(_0x4a470f,_0xc9b754){return _0x4a470f+_0xc9b754;},'anmUM':function(_0x4447e7,_0x1815d7){return _0x489e13['eKBzm'](_0x4447e7,_0x1815d7);},'azSAv':function(_0x2328f4,_0x5a95ef){var _0x3588f3=_0x4348a2;return _0x489e13[_0x3588f3(0x1ce)](_0x2328f4,_0x5a95ef);}};if(_0x4348a2(0x3f8)===_0x4348a2(0x3f8)){var _0x3fb005=(_0x4348a2(0x600)+_0x4348a2(0xdf)+'1')['split']('|'),_0xb8c76d=-0x2*0xafb+0x3*-0xbdb+0x3987;while(!![]){switch(_0x3fb005[_0xb8c76d++]){case'0':_0x4ed6c5[_0x4348a2(0x349)+_0x4348a2(0x37e)]=_0x506804;continue;case'1':location['reloa'+'d']();continue;case'2':_0x4ed6c5[_0x4348a2(0x29e)+_0x4348a2(0x30e)+'il']=_0x506804;continue;case'3':_0x4ed6c5['hookC'+_0x4348a2(0x1d2)+'e']=_0x506804;continue;case'4':_0x3b3747();continue;case'5':_0x4ed6c5['hookG'+'od']=_0x506804;continue;}break;}}else{if(_0x23d21e[_0x4348a2(0x45e)+'ura'])return;_0x2869eb[_0x4348a2(0x23c)](_0x3279b8['xAENA']+_0x3279b8['hWJPz'](_0x1e8859[_0x4348a2(0x3a3)+'n'],0x1*-0x1750+0x2f1*0x5+-0x227*-0x4));var _0x1d0041=_0x1d665a[_0x3279b8['anmUM'](_0x4b65c7[_0x4348a2(0x3a3)+'n'],0x526+-0xd47+0x822)];if(_0x1d0041){_0x1d0041['push'](_0x1396b5[_0x4348a2(0x3c5)]());if(_0x3279b8[_0x4348a2(0x101)](_0x1d0041[_0x4348a2(0x41c)+'h'],0x1d5f+0x577+-0x22ae*0x1))_0x1d0041['shift']();}}},[_0x20f92e(_0x4a12cf[_0x1dcaa9(0x2e7)]),_0x329d19(_0x1dcaa9(0xbd)+_0x1dcaa9(0x277)+'th.In'+_0x1dcaa9(0x568)+'eTake'+_0x1dcaa9(0x3cd)+'h)',null,_0x3f6eac(_0x4ed6c5[_0x1dcaa9(0x349)+'od'],_0x3d6d05=>{var _0x2bd293=_0x1dcaa9;_0x489e13[_0x2bd293(0x386)]==='iNpJY'?_0x30fb72=_0x4a09f6&&_0x1b945c['val']?_0x35dd17[_0x2bd293(0x2de)]():0x26bd*-0x1+-0x22eb+0x49a8:(_0x4ed6c5[_0x2bd293(0x349)+'od']=_0x3d6d05,_0x3b3747());})),_0x4a12cf[_0x1dcaa9(0x161)](_0x329d19,_0x4a12cf['dNIam'],null,_0x4a12cf[_0x1dcaa9(0x406)](_0x3f6eac,_0x4ed6c5[_0x1dcaa9(0x349)+_0x1dcaa9(0x37e)],_0x15a5e2=>{var _0x2786c1=_0x1dcaa9;_0x4ed6c5['hookG'+'odDie']=_0x15a5e2,_0x489e13[_0x2786c1(0xba)](_0x3b3747);})),_0x329d19('noRec'+_0x1dcaa9(0x1c0)+_0x1dcaa9(0x2d8)+_0x1dcaa9(0x15b)+_0x1dcaa9(0x48c)+_0x1dcaa9(0x1c7),null,_0x3f6eac(_0x4ed6c5[_0x1dcaa9(0x29e)+_0x1dcaa9(0x30e)+'il'],_0x24c393=>{var _0x4a76e8=_0x1dcaa9;_0x4a76e8(0x1ab)!==_0x164ff3[_0x4a76e8(0x27c)]?(_0x174a66[_0x4a76e8(0x57c)+'rokes']=_0x44d269,_0x5ddc57()):(_0x4ed6c5['hookN'+_0x4a76e8(0x30e)+'il']=_0x24c393,_0x164ff3['lalSS'](_0x3b3747));})),_0x4a12cf[_0x1dcaa9(0xa1)](_0x329d19,_0x1dcaa9(0x1f8)+'re\x20(S'+_0x1dcaa9(0x443)+_0x1dcaa9(0x334)+'ing\x20+'+'\x20IsGr'+_0x1dcaa9(0x514)+'d)',_0x1dcaa9(0x13c)+'eats\x20'+_0x1dcaa9(0x53b)+'witho'+'ut\x20th'+'is',_0x3f6eac(_0x4ed6c5[_0x1dcaa9(0x145)+_0x1dcaa9(0x1d2)+'e'],_0xfe07c0=>{var _0x5dd699=_0x1dcaa9;_0x4ed6c5[_0x5dd699(0x145)+'aptur'+'e']=_0xfe07c0,_0x164ff3[_0x5dd699(0x5c0)](_0x3b3747);}))]),_0x5f2485('ACTk\x20'+'Kille'+'r','Disab'+'les\x20C'+'odeSt'+_0x1dcaa9(0xd4)+_0x1dcaa9(0x403)+_0x1dcaa9(0x387)+'t\x20sta'+_0x1dcaa9(0x5fa)+_0x1dcaa9(0x58a)+_0x1dcaa9(0x127)+_0x1dcaa9(0x414)+'on().'+'\x20Keep'+_0x1dcaa9(0x148),_0x4ed6c5[_0x1dcaa9(0x331)+_0x1dcaa9(0x1f6)],_0x414d0d=>{var _0x4b40da=_0x1dcaa9;_0x489e13[_0x4b40da(0x9a)](_0x4b40da(0x3bf),_0x4b40da(0x20a))?(_0x4ed6c5[_0x4b40da(0x331)+_0x4b40da(0x1f6)]=_0x414d0d,_0x3b3747()):(_0x55d714(_0x3ce03b,0x1*0x1843+-0x50f+-0x130c,_0x489e13[_0x4b40da(0x303)],_0x116a2c),_0x565862(_0x20ccf2,-0x108a+0x5cc+-0x1*-0xaea,'f32',_0x47453b),_0x489e13['UZPGO'](_0x143abf,_0x4c5ae8,-0x26b1+0x7cb+0x1f16,_0x489e13[_0x4b40da(0x303)],_0x7a5260),_0x2ff201(_0x14935f,-0x10c5+0x1a38*-0x1+0x2b31,_0x489e13[_0x4b40da(0x303)],_0x518f79),_0x25684a(_0x4a6c85,-0x1*0xd9+-0x136*-0xc+-0xd93,_0x489e13[_0x4b40da(0x303)],_0x18ba39),_0x489e13[_0x4b40da(0x276)](_0x3d915f,_0x50a599,-0x13*-0x4c+-0x15ed+0x1069*0x1,_0x4b40da(0x3d5),_0xac9bf6));},[_0x20f92e(_0x4a12cf[_0x1dcaa9(0x21c)],!![])]),_0x5f2485(_0x4a12cf['kAezI'],_0x1dcaa9(0x3b3)+_0x1dcaa9(0x41d)+_0x1dcaa9(0xf5)+_0x1dcaa9(0x1e2)+'isibl'+_0x1dcaa9(0x57f)+'ces.',!![],null,[_0x329d19(_0x1dcaa9(0x3a2)+_0x1dcaa9(0x1af)+_0x1dcaa9(0x2d2)+'s',null,_0x4a12cf['zQeAG'](_0x5d38bf,_0x4a12cf[_0x1dcaa9(0x404)],()=>{var _0x11cf4e=_0x1dcaa9;_0x4ed6c5={..._0x16ef1f},_0x3b3747(),location[_0x11cf4e(0x5d0)+'d']();}))])];}var _0x53211f=null;function _0xfa0131(_0x19eba3){var _0x5b1614=_0x3f01e5,_0x3af764={'iBpSH':_0x4a12cf[_0x5b1614(0x23f)],'PIsTv':'kour-'+'io_','yISoz':_0x5b1614(0x497)};if('oWKlz'!==_0x5b1614(0x43d))for(var _0x2c4787 of['kour-'+_0x5b1614(0x353)+_0x5b1614(0x1f7)+_0x5b1614(0x374)+'nt',_0x5b1614(0x4a4)+_0x5b1614(0x569)+_0x5b1614(0x5bc)+'paren'+'t',_0x3af764[_0x5b1614(0x49c)],_0x5b1614(0x278)+_0x5b1614(0x144)+_0x5b1614(0xaa)+'s']){var _0x38c252=_0x324cb4[_0x5b1614(0x558)+'ement'+'ById'](_0x2c4787);if(_0x38c252&&_0x2c4787===_0x5b1614(0x278)+_0x5b1614(0x144)+_0x5b1614(0xaa)+'s'){var _0x4db44b=_0x38c252[_0x5b1614(0x4d8)+_0x5b1614(0x399)];for(var _0x616b9a=0x1dde+0x53*-0x40+-0x91e;_0x616b9a<_0x4db44b[_0x5b1614(0x41c)+'h'];_0x616b9a++){if(_0x4db44b[_0x616b9a]['id']&&_0x4db44b[_0x616b9a]['id']['index'+'Of'](_0x3af764[_0x5b1614(0x2d4)])===0x1*0x26ab+-0x239*-0x2+0xd*-0x351)_0x4db44b[_0x616b9a][_0x5b1614(0x534)][_0x5b1614(0x48d)+'ay']=_0x3af764[_0x5b1614(0x509)];}}else{if(_0x38c252)_0x38c252['style']['displ'+'ay']='none';}}else{_0x50c048=_0x19eba3;if(!_0x53211f){if(_0x5b1614(0x110)!==_0x4a12cf['TxPfY']){var _0x492f1b=_0x164ff3[_0x5b1614(0xcd)]['split']('|'),_0x59659c=0x7af+0x250a+-0x1*0x2cb9;while(!![]){switch(_0x492f1b[_0x59659c++]){case'0':var _0x164d85=-0x29*-0x17+0x1*0xc8f+-0xbb*0x16,_0x286848=-0xa*0x39a+0x19*-0x3+0x29*0xe3;continue;case'1':if(!_0x530910[_0x5b1614(0xa6)+_0x5b1614(0x376)])_0x36c908(_0x164ff3[_0x5b1614(0x2b6)],'rgba('+'255,1'+'80,19'+_0x5b1614(0x459)+')');continue;case'2':_0x46d645[_0x5b1614(0x14c)]=_0x164ff3[_0x5b1614(0x1d1)];continue;case'3':if(_0x262ffc[_0x5b1614(0x17a)])_0x164ff3[_0x5b1614(0xf1)](_0x36c908,_0x164ff3[_0x5b1614(0x2b0)](_0x588319,_0x164ff3[_0x5b1614(0x26a)]));continue;case'4':_0x36c908(_0x5b1614(0x5b1)+_0x5b1614(0xd2)+'R\x20v1.'+'1',_0x5b1614(0x477)+'9d');continue;case'5':_0x454b63['save']();continue;case'6':_0x309cd6[_0x5b1614(0x20e)+'lign']=_0x5b1614(0x129);continue;case'7':var _0x36c908=(_0xde2ff,_0x2a2d18)=>{var _0xc995d5=_0x5b1614;_0x31060f[_0xc995d5(0x5db)+_0xc995d5(0x296)]=_0x2a2d18||'rgba('+'255,2'+_0xc995d5(0xea)+_0xc995d5(0x420)+'5)',_0x302525[_0xc995d5(0x24a)+_0xc995d5(0x473)](_0xde2ff,_0x286848,_0x164d85),_0x164d85+=-0x16be+0x7*-0x502+0x39dc;};continue;case'8':_0x1b012b[_0x5b1614(0x31f)+'re']();continue;case'9':_0x3e9191['textB'+'aseli'+'ne']=_0x164ff3['LefFr'];continue;}break;}}else{var _0x32702f=_0x4a12cf[_0x5b1614(0x34b)][_0x5b1614(0x28f)]('|'),_0x27e052=-0x1c4+0x24fb*0x1+-0x1*0x2337;while(!![]){switch(_0x32702f[_0x27e052++]){case'0':_0x297b3e['appen'+'dChil'+'d'](_0x53211f);continue;case'1':_0x314dc2['textC'+'onten'+'t']=_0x4dc8cd;continue;case'2':_0x4a12cf['CVAzl'](requestAnimationFrame,()=>_0x53211f[_0x5b1614(0x26d)+_0x5b1614(0x198)][_0x5b1614(0x23c)](_0x5b1614(0x470)));continue;case'3':_0x53211f=_0x4a12cf[_0x5b1614(0x281)](_0x4be077);continue;case'4':_0x297b3e['appen'+_0x5b1614(0x16a)+'d'](_0x314dc2);continue;case'5':var _0x314dc2=document[_0x5b1614(0x1b3)+'eElem'+'ent'](_0x5b1614(0x534));continue;}break;}}}_0x53211f[_0x5b1614(0x26d)+_0x5b1614(0x198)][_0x5b1614(0x2a2)+'e'](_0x5b1614(0x470),_0x19eba3);}}function _0x5c9512(){var _0x1f1a65=_0x3f01e5;_0x4a12cf[_0x1f1a65(0x22f)](_0xfa0131,!_0x50c048);}function _0x4be077(){var _0x3bdd9c=_0x3f01e5,_0x5b9a1f={'Yqjqk':function(_0x4fd62a,_0xceafcd){var _0x328416=_0x6d57;return _0x164ff3[_0x328416(0x32f)](_0x4fd62a,_0xceafcd);},'UbYgm':function(_0x50c60e){var _0x166da0=_0x6d57;return _0x164ff3[_0x166da0(0x3e3)](_0x50c60e);},'rYCfv':function(_0x108ad2,_0x38fa0d){var _0x25b414=_0x6d57;return _0x164ff3[_0x25b414(0x58b)](_0x108ad2,_0x38fa0d);},'SvFBn':_0x164ff3[_0x3bdd9c(0x1ea)]},_0x14056a=document[_0x3bdd9c(0x1b3)+_0x3bdd9c(0x335)+'ent'](_0x3bdd9c(0x92));_0x14056a[_0x3bdd9c(0x26d)+_0x3bdd9c(0x133)]='mn-pa'+_0x3bdd9c(0x565);var _0x9d76c1=document[_0x3bdd9c(0x1b3)+_0x3bdd9c(0x335)+'ent']('nav');_0x9d76c1['class'+_0x3bdd9c(0x133)]='mn-si'+'de';var _0x325e8f=document['creat'+_0x3bdd9c(0x335)+'ent'](_0x164ff3['KTYbf']);_0x325e8f['class'+'Name']=_0x164ff3['fLRxN'],_0x325e8f[_0x3bdd9c(0x5c3)+'HTML']=_0x3bdd9c(0x39b)+'viewB'+_0x3bdd9c(0x35e)+_0x3bdd9c(0x344)+'\x2024\x22\x20'+_0x3bdd9c(0x26d)+'=\x22mn-'+_0x3bdd9c(0x4ba)+'svg\x22>'+_0x3bdd9c(0x140)+'\x20d=\x22M'+_0x3bdd9c(0x3a8)+'c-1.5'+_0x3bdd9c(0x3c1)+_0x3bdd9c(0x50e)+_0x3bdd9c(0x258)+'5\x200-2'+_0x3bdd9c(0x505)+'8-4.5'+_0x3bdd9c(0x265)+'5s4\x202'+'\x204\x204.'+_0x3bdd9c(0x268)+'-2.5\x20'+'5-4\x207'+_0x3bdd9c(0x5e3)+_0x3bdd9c(0x422)+_0x3bdd9c(0x115)+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0x3bdd9c(0x4eb)+_0x3bdd9c(0x532)+_0x3bdd9c(0x4dd)+_0x3bdd9c(0x37a)+'\x20stro'+_0x3bdd9c(0x2a9)+'necap'+'=\x22rou'+_0x3bdd9c(0x136)+_0x3bdd9c(0x532)+'-line'+'join='+'\x22roun'+_0x3bdd9c(0x250)+'circl'+_0x3bdd9c(0x85)+_0x3bdd9c(0x3ba)+'cy=\x221'+'0\x22\x20r='+_0x3bdd9c(0x1bf)+'\x20fill'+'=\x22#ff'+_0x3bdd9c(0x5f2)+_0x3bdd9c(0x2cd)+'vg>',_0x9d76c1[_0x3bdd9c(0x2f2)+'dChil'+'d'](_0x325e8f);var _0x625377=document['creat'+_0x3bdd9c(0x335)+'ent'](_0x164ff3['KTYbf']);_0x625377[_0x3bdd9c(0x26d)+_0x3bdd9c(0x133)]=_0x164ff3['iCZQs'];var _0x28e79c=document['creat'+_0x3bdd9c(0x335)+_0x3bdd9c(0x3dd)](_0x3bdd9c(0x2ca)+'r');_0x28e79c['class'+'Name']='mn-to'+'p';var _0x12be4f=document['creat'+'eElem'+'ent'](_0x3bdd9c(0x92));_0x12be4f[_0x3bdd9c(0x26d)+'Name']='mn-ti'+_0x3bdd9c(0x232);var _0xf04a65=document[_0x3bdd9c(0x1b3)+'eElem'+_0x3bdd9c(0x3dd)]('h2');_0xf04a65[_0x3bdd9c(0x26d)+_0x3bdd9c(0x133)]=_0x3bdd9c(0x239),_0xf04a65[_0x3bdd9c(0x3ee)+'onten'+'t']=_0x164ff3[_0x3bdd9c(0x382)];var _0x120c0e=document['creat'+'eElem'+_0x3bdd9c(0x3dd)](_0x164ff3['aLWip']);_0x120c0e[_0x3bdd9c(0x26d)+'Name']=_0x3bdd9c(0xdb)+'b',_0x120c0e[_0x3bdd9c(0x3ee)+_0x3bdd9c(0x4e5)+'t']=_0x3bdd9c(0x408)+_0x3bdd9c(0x512)+'.io\x20m'+_0x3bdd9c(0x4be),_0x12be4f['appen'+'d'](_0xf04a65,_0x120c0e);var _0x230174=document[_0x3bdd9c(0x1b3)+_0x3bdd9c(0x335)+_0x3bdd9c(0x3dd)](_0x164ff3[_0x3bdd9c(0x471)]);_0x230174['type']=_0x164ff3[_0x3bdd9c(0x471)],_0x230174['class'+_0x3bdd9c(0x133)]=_0x164ff3[_0x3bdd9c(0x2d5)],_0x230174['title']=_0x3bdd9c(0xdd),_0x230174[_0x3bdd9c(0x5c3)+'HTML']='<svg\x20'+_0x3bdd9c(0x40b)+'ox=\x220'+_0x3bdd9c(0x344)+_0x3bdd9c(0x23d)+'<path'+'\x20d=\x22M'+_0x3bdd9c(0x3c8)+_0x3bdd9c(0x2ab)+'18\x206\x20'+'6\x2018\x22'+_0x3bdd9c(0x2cd)+_0x3bdd9c(0x56a),_0x230174[_0x3bdd9c(0x2e4)+'ck']=()=>_0xfa0131(![]),_0x28e79c['appen'+'d'](_0x12be4f,_0x230174);var _0x2a925a=document[_0x3bdd9c(0x1b3)+_0x3bdd9c(0x335)+_0x3bdd9c(0x3dd)](_0x3bdd9c(0x92));_0x2a925a[_0x3bdd9c(0x26d)+_0x3bdd9c(0x133)]=_0x3bdd9c(0xbf)+'ls',_0x625377['appen'+'d'](_0x28e79c,_0x2a925a),_0x14056a[_0x3bdd9c(0x2f2)+'d'](_0x9d76c1,_0x625377);var _0x14a9ef=new Map();for(var _0x4f1e3a of _0x46e8ce){var _0x21766c=_0x164ff3[_0x3bdd9c(0x75)][_0x3bdd9c(0x28f)]('|'),_0x395535=-0x175*0x5+0xcc2+-0x579;while(!![]){switch(_0x21766c[_0x395535++]){case'0':_0xc50794[_0x3bdd9c(0x33c)]=_0x3bdd9c(0x3a3)+'n';continue;case'1':_0xc50794[_0x3bdd9c(0x26d)+'Name']=_0x164ff3[_0x3bdd9c(0x47f)];continue;case'2':_0x14a9ef[_0x3bdd9c(0x158)](_0x4f1e3a['id'],_0xc50794);continue;case'3':_0x9d76c1['appen'+'dChil'+'d'](_0xc50794);continue;case'4':var _0xc50794=document['creat'+_0x3bdd9c(0x335)+'ent']('butto'+'n');continue;case'5':_0xc50794[_0x3bdd9c(0x318)]=_0x4f1e3a[_0x3bdd9c(0xae)];continue;case'6':_0xc50794['inner'+_0x3bdd9c(0x3f3)]=_0x164ff3['pXZLW']+_0x4f1e3a['label']+_0x164ff3[_0x3bdd9c(0x17f)];continue;case'7':_0xc50794['oncli'+'ck']=(_0x1b3485=>()=>_0x355472(_0x1b3485))(_0x4f1e3a['id']);continue;}break;}}function _0x355472(_0x575043){var _0xccc7ac=_0x3bdd9c,_0x248a19=(_0xccc7ac(0xee)+'|1|2|'+'4')[_0xccc7ac(0x28f)]('|'),_0x2e0e1b=-0x1*-0x637+-0x119*-0x1+0x6*-0x138;while(!![]){switch(_0x248a19[_0x2e0e1b++]){case'0':var _0x4e7abb=_0x46e8ce[_0xccc7ac(0x542)](_0x374085=>_0x374085['id']===_0x575043)||_0x46e8ce[0x125*-0x11+-0x195a+-0x1*-0x2ccf];continue;case'1':_0xf04a65['textC'+'onten'+'t']='Sakur'+_0xccc7ac(0x3bb)+'r\x20—\x20'+_0x4e7abb['label'];continue;case'2':for(var [_0xdac900,_0x49083a]of _0x14a9ef)_0x49083a[_0xccc7ac(0x26d)+_0xccc7ac(0x198)][_0xccc7ac(0x2a2)+'e'](_0xccc7ac(0x508)+'e',_0x5b9a1f[_0xccc7ac(0x5e2)](_0xdac900,_0x575043));continue;case'3':_0x5b9a1f['UbYgm'](_0x189d23);continue;case'4':_0x2a925a['repla'+_0xccc7ac(0x288)+_0xccc7ac(0x360)](..._0x5b9a1f['rYCfv'](_0x11bc35,_0x575043));continue;case'5':_0x12f03b['cat']=_0x575043;continue;}break;}}return _0x355472(_0x12f03b[_0x3bdd9c(0xf9)]||'comba'+'t'),setInterval(()=>{var _0x234f31=_0x3bdd9c,_0x8df9cf={'WexMg':function(_0x135ae1,_0x36e7dd,_0x21485a,_0x404d15,_0x157c1d){return _0x164ff3['TidKL'](_0x135ae1,_0x36e7dd,_0x21485a,_0x404d15,_0x157c1d);}};if(_0x164ff3[_0x234f31(0x9c)](_0x164ff3['KsKDU'],_0x164ff3['GnEKX']))_0x4220c8[_0x234f31(0x322)+'em'](_0x5b9a1f['SvFBn'],_0x16771e[_0x234f31(0x592)+_0x234f31(0x285)](_0x496bec));else{if(!_0x50c048)return;var _0x341167=_0x2a925a[_0x234f31(0x4d8)+_0x234f31(0x399)];for(var _0x2d5f16=0x1ce5+0x5*0x2fe+-0x67*0x6d;_0x164ff3[_0x234f31(0x338)](_0x2d5f16,_0x341167[_0x234f31(0x41c)+'h']);_0x2d5f16++){if(_0x234f31(0x419)!==_0x234f31(0x419)){var _0x2f691a=('2|5|1'+'|4|3|'+'0')['split']('|'),_0x4a1387=-0x596+0x263e+-0x20a8;while(!![]){switch(_0x2f691a[_0x4a1387++]){case'0':_0x345bc7['reloa'+'d']();continue;case'1':_0x39744c['hookN'+_0x234f31(0x30e)+'il']=_0x4c47a9;continue;case'2':_0x5cc0cc['hookG'+'od']=_0x3b5700;continue;case'3':_0x4b3418();continue;case'4':_0x396ea9['hookC'+_0x234f31(0x1d2)+'e']=_0x50d1a1;continue;case'5':_0x2be92f[_0x234f31(0x349)+'odDie']=_0x1f57e9;continue;}break;}}else{var _0x491185=_0x341167[_0x2d5f16]['query'+_0x234f31(0x1cf)+'tor'](_0x234f31(0x3a9)+'desc');_0x491185&&(_0x164ff3['CvVvp'](_0x491185[_0x234f31(0x3ee)+_0x234f31(0x4e5)+'t']['index'+'Of'](_0x234f31(0x522)),-0x1d95*0x1+-0x1017*0x1+0x2dac)||_0x491185['textC'+_0x234f31(0x4e5)+'t']['index'+'Of'](_0x164ff3[_0x234f31(0x31d)])===-0x8b5+0x272*0x1+0x643)&&(_0x164ff3[_0x234f31(0x270)]===_0x234f31(0x317)?_0x491185['textC'+_0x234f31(0x4e5)+'t']=_0x361647[_0x234f31(0x157)+_0x234f31(0x3d8)]?_0x164ff3['ZMhnR']:_0x361647[_0x234f31(0x1d0)]?_0x164ff3[_0x234f31(0x205)](_0x164ff3[_0x234f31(0x513)](_0x164ff3[_0x234f31(0x22c)](_0x164ff3[_0x234f31(0x482)](_0x234f31(0x4d2)+_0x234f31(0x333)+'\x20'+(_0x361647[_0x234f31(0xd8)+'Total']?_0x361647[_0x234f31(0xd8)+'Ok']+'/'+_0x361647[_0x234f31(0xd8)+_0x234f31(0x5da)]+_0x164ff3[_0x234f31(0x54a)]:'0\x20hoo'+_0x234f31(0x2ef)+'med\x20('+'all\x20o'+_0x234f31(0x4e4)),_0x164ff3['RpyRK'])+(_0x361647[_0x234f31(0xa6)+_0x234f31(0x376)]?_0x234f31(0x259)+'d':_0x164ff3['eSbhW']),_0x234f31(0x5e9)+_0x234f31(0x4f0)+'\x20'),_0x361647['shoot'+'ers']?_0x234f31(0x22d):_0x164ff3['EobNe']),_0x234f31(0x3bd)+_0x234f31(0x429)+'t\x20')+(_0x361647['movem'+'ents']?_0x164ff3['zknmf']:'none')+(_0x361647['lastE'+_0x234f31(0x193)]?_0x234f31(0xe6)+_0x234f31(0x289)+_0x361647[_0x234f31(0x30d)+_0x234f31(0x193)]:''):'UWMK\x20'+'MISSI'+_0x234f31(0x5b5)+'overl'+'ay\x20on'+_0x234f31(0x16e)+_0x234f31(0x2c4)+'all\x20t'+_0x234f31(0x539)+_0x234f31(0xfe)+'ipt)':_0x8df9cf[_0x234f31(0x1df)](_0x56e9d4,_0x54d0b1,_0x1e72c6,_0x59f07a,_0x234f31(0x3c3)+_0x234f31(0x84)));}}}},-0x1946+-0x6d*-0xa+0x18ec),_0x14056a;}var _0x4dc8cd='\x0a\x20\x20\x20\x20'+_0x3f01e5(0x3b6)+'\x20{\x20al'+_0x3f01e5(0x29f)+'itial'+_0x3f01e5(0x3da)+'\x20\x20\x20*\x20'+'{\x20box'+_0x3f01e5(0x341)+_0x3f01e5(0x44e)+'order'+'-box;'+'\x20marg'+'in:\x200'+_0x3f01e5(0x17c)+'t-fam'+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+_0x3f01e5(0x442)+_0x3f01e5(0x22b)+'\x20syst'+_0x3f01e5(0x5e4)+_0x3f01e5(0x1f4)+'s-ser'+_0x3f01e5(0x4fe)+_0x3f01e5(0x9d)+_0x3f01e5(0x521)+_0x3f01e5(0x325)+'{\x20pos'+_0x3f01e5(0x42a)+_0x3f01e5(0x1f1)+'olute'+';\x20rig'+'ht:\x202'+'4px;\x20'+_0x3f01e5(0x1d4)+'m:\x2024'+_0x3f01e5(0x3e4)+_0x3f01e5(0x1a8)+'\x20min('+'620px'+',\x20cal'+_0x3f01e5(0x337)+'vw\x20-\x20'+_0x3f01e5(0x5b3)+');\x20ma'+_0x3f01e5(0x130)+'ght:\x20'+_0x3f01e5(0x227)+_0x3f01e5(0x280)+'\x20calc'+'(100v'+_0x3f01e5(0x88)+_0x3f01e5(0x5b9)+_0x3f01e5(0x47c)+'\x20\x20\x20di'+_0x3f01e5(0x328)+_0x3f01e5(0x4b8)+'x;\x20ga'+_0x3f01e5(0x50f)+'px;\x20p'+'addin'+'g:\x2010'+'px;\x20b'+_0x3f01e5(0x4fd)+'-radi'+_0x3f01e5(0x17b)+_0x3f01e5(0x12a)+_0x3f01e5(0x3ce)+_0x3f01e5(0x283)+_0x3f01e5(0x22e)+'\x20auto'+';\x0a\x20\x20\x20'+_0x3f01e5(0x3af)+_0x3f01e5(0x1fd)+_0x3f01e5(0x3b5)+'rgba('+_0x3f01e5(0x5f3)+_0x3f01e5(0x52d)+'82);\x20'+'backd'+_0x3f01e5(0x4f3)+_0x3f01e5(0x4cf)+':\x20blu'+_0x3f01e5(0x357)+'x)\x20sa'+_0x3f01e5(0x58f)+_0x3f01e5(0x112)+'%);\x20-'+_0x3f01e5(0xab)+'t-bac'+_0x3f01e5(0x241)+_0x3f01e5(0x1d7)+_0x3f01e5(0x234)+'lur(2'+_0x3f01e5(0x339)+_0x3f01e5(0x564)+_0x3f01e5(0x10c)+_0x3f01e5(0x14f)+_0x3f01e5(0x9d)+'\x20\x20box'+_0x3f01e5(0x1f2)+_0x3f01e5(0x573)+'\x200\x200\x20'+_0x3f01e5(0x2ac)+_0x3f01e5(0x107)+'55,25'+_0x3f01e5(0x466)+',.06)'+_0x3f01e5(0x42f)+_0x3f01e5(0x34a)+_0x3f01e5(0xa8)+'\x20rgba'+_0x3f01e5(0x60d)+_0x3f01e5(0x10f)+'55,.0'+_0x3f01e5(0x18d)+'\x2030px'+'\x2080px'+_0x3f01e5(0x35f)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x3f01e5(0x1b2)+_0x3f01e5(0x2ee)+_0x3f01e5(0x19a)+_0x3f01e5(0x33a)+'sform'+':\x20tra'+'nslat'+_0x3f01e5(0x180)+'px);\x20'+_0x3f01e5(0x3ce)+'er-ev'+'ents:'+'\x20none'+_0x3f01e5(0x3ad)+_0x3f01e5(0x35d)+_0x3f01e5(0x4ce)+_0x3f01e5(0x2ee)+_0x3f01e5(0x5fd)+_0x3f01e5(0x1eb)+_0x3f01e5(0x432)+'ansfo'+_0x3f01e5(0x261)+_0x3f01e5(0x5a9)+_0x3f01e5(0x5a4)+_0x3f01e5(0x254)+_0x3f01e5(0x30c)+_0x3f01e5(0x555)+',1);\x0a'+'\x20\x20\x20\x20\x20'+'\x20colo'+'r:\x20#f'+_0x3f01e5(0x315)+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-p'+'anel.'+_0x3f01e5(0x470)+_0x3f01e5(0x4d1)+_0x3f01e5(0x207)+':\x201;\x20'+'trans'+_0x3f01e5(0x526)+_0x3f01e5(0x5d3)+_0x3f01e5(0x3c6)+_0x3f01e5(0x37d)+_0x3f01e5(0x1b1)+_0x3f01e5(0x60e)+'to;\x20}'+_0x3f01e5(0x9d)+_0x3f01e5(0x3a5)+_0x3f01e5(0x2e6)+_0x3f01e5(0x316)+'lay:\x20'+'flex;'+_0x3f01e5(0x60a)+_0x3f01e5(0x2f8)+_0x3f01e5(0x1a6)+':\x20col'+'umn;\x20'+_0x3f01e5(0x50c)+_0x3f01e5(0x5af)+'s:\x20ce'+_0x3f01e5(0x179)+_0x3f01e5(0x2a5)+'\x204px;'+'\x20widt'+_0x3f01e5(0x413)+_0x3f01e5(0x393)+_0x3f01e5(0x79)+_0x3f01e5(0x3ea)+_0x3f01e5(0x2bd)+'ing:\x20'+'12px\x20'+(_0x3f01e5(0x260)+_0x3f01e5(0x1c8)+'radiu'+'s:\x2016'+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+'backg'+'round'+':\x20rgb'+_0x3f01e5(0x298)+',255,'+'255,.'+_0x3f01e5(0x356)+_0x3f01e5(0xef)+'shado'+_0x3f01e5(0x4c2)+_0x3f01e5(0xc8)+'\x200\x200\x20'+_0x3f01e5(0x2ac)+'gba(2'+_0x3f01e5(0x32d)+'5,255'+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x3f01e5(0x3ed)+_0x3f01e5(0x543)+_0x3f01e5(0x300)+'id;\x20p'+'lace-'+_0x3f01e5(0x94)+':\x20cen'+_0x3f01e5(0x173)+_0x3f01e5(0x21d)+_0x3f01e5(0x141)+_0x3f01e5(0x4f1)+_0x3f01e5(0x24b)+_0x3f01e5(0x5f5)+_0x3f01e5(0x3da)+'\x20\x20\x20.m'+_0x3f01e5(0x25f)+_0x3f01e5(0x26f)+_0x3f01e5(0x73)+_0x3f01e5(0x27e)+'25px;'+_0x3f01e5(0x4c5)+_0x3f01e5(0x78)+_0x3f01e5(0x46a)+_0x3f01e5(0x427)+_0x3f01e5(0xf8)+_0x3f01e5(0x2fc)+'le;\x20f'+'ilter'+_0x3f01e5(0x302)+'p-sha'+'dow(0'+_0x3f01e5(0x8b)+_0x3f01e5(0x321)+'a(255'+_0x3f01e5(0x39c)+'157,.'+_0x3f01e5(0x447)+_0x3f01e5(0x544)+_0x3f01e5(0x40a)+'tab\x20{'+_0x3f01e5(0x316)+_0x3f01e5(0x5e1)+_0x3f01e5(0x585)+_0x3f01e5(0xe2)+_0x3f01e5(0x18e)+_0x3f01e5(0x1bb)+'enter'+';\x20jus'+'tify-'+'conte'+_0x3f01e5(0x149)+'enter'+_0x3f01e5(0x551)+_0x3f01e5(0x440)+_0x3f01e5(0x12a)+_0x3f01e5(0x46f)+'t:\x2034'+_0x3f01e5(0xdc)+_0x3f01e5(0x4fd)+_0x3f01e5(0x4cd)+'borde'+_0x3f01e5(0x312)+'ius:\x20'+_0x3f01e5(0x611)+_0x3f01e5(0x9d)+_0x3f01e5(0x23a)+'kgrou'+'nd:\x20t'+_0x3f01e5(0x314)+_0x3f01e5(0x533)+_0x3f01e5(0x4fb)+'or:\x20r'+'gba(2'+_0x3f01e5(0x593)+_0x3f01e5(0x380)+_0x3f01e5(0x4c1)+_0x3f01e5(0x2d6)+_0x3f01e5(0x4a6)+_0x3f01e5(0x5b7)+_0x3f01e5(0x1c6)+'nt-si'+'ze:\x201'+_0x3f01e5(0x3b8)+_0x3f01e5(0x4bc)+_0x3f01e5(0x1b9)+_0x3f01e5(0x525)+_0x3f01e5(0x547)+'\x20\x20\x20\x20.'+_0x3f01e5(0x51f)+_0x3f01e5(0x346)+'er\x20{\x20'+_0x3f01e5(0x237)+':\x20rgb'+_0x3f01e5(0x384)+_0x3f01e5(0x150)+_0x3f01e5(0x2e2)+'8);\x20}'+'\x0a\x20\x20\x20\x20'+_0x3f01e5(0xfb)+'ab.ac'+'tive\x20'+'{\x20col'+'or:\x20#'+_0x3f01e5(0x36a)+_0x3f01e5(0x4ed)+_0x3f01e5(0x1fd)+_0x3f01e5(0x3b5)+'rgba('+_0x3f01e5(0x487)+_0x3f01e5(0x61a)+'7,.1)'+_0x3f01e5(0x3da)+_0x3f01e5(0x25b)+'n-mai'+'n\x20{\x20f'+_0x3f01e5(0x79)+_0x3f01e5(0x48f)+_0x3f01e5(0x168)+_0x3f01e5(0x191)+';\x20dis'+_0x3f01e5(0xfa)+_0x3f01e5(0x60a)+_0x3f01e5(0x2af)+_0x3f01e5(0x28d)+'ectio'+_0x3f01e5(0x45a)+_0x3f01e5(0x2c1)+_0x3f01e5(0x7d)+'\x20\x20.mn'+_0x3f01e5(0x479)+'{\x20dis'+'play:'+'\x20flex'+';\x20ali'+_0x3f01e5(0x571)+_0x3f01e5(0x200)+'cente'+_0x3f01e5(0x51d)+_0x3f01e5(0x33b)+'px;\x20p'+'addin'+_0x3f01e5(0x104)+_0x3f01e5(0x34d)+_0x3f01e5(0x493)+_0x3f01e5(0x4b7)+'r-sel'+_0x3f01e5(0x5d1)+'none;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x3f01e5(0x209)+'es\x20{\x20'+_0x3f01e5(0x1b0)+'\x201;\x20m'+_0x3f01e5(0x5ae)+_0x3f01e5(0x27e)+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3f01e5(0x1f9)+'{\x20fon'+_0x3f01e5(0x531)+_0x3f01e5(0x187)+_0x3f01e5(0x393)+'ont-w'+'eight'+_0x3f01e5(0x210)+_0x3f01e5(0x3da)+_0x3f01e5(0x25b)+_0x3f01e5(0x4f4)+_0x3f01e5(0x38f)+_0x3f01e5(0x610)+_0x3f01e5(0x4ad)+'1px;\x20'+'opaci')+(_0x3f01e5(0x1cb)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x3f01e5(0x49d)+_0x3f01e5(0x74)+_0x3f01e5(0x316)+_0x3f01e5(0x5e1)+_0x3f01e5(0x582)+'\x20plac'+_0x3f01e5(0x496)+_0x3f01e5(0x1bb)+_0x3f01e5(0x39e)+_0x3f01e5(0x551)+'th:\x202'+'8px;\x20'+_0x3f01e5(0x46f)+_0x3f01e5(0x2fd)+_0x3f01e5(0xdc)+_0x3f01e5(0x4fd)+_0x3f01e5(0x4cd)+_0x3f01e5(0x17d)+'r-rad'+_0x3f01e5(0x142)+_0x3f01e5(0x409)+'backg'+_0x3f01e5(0x125)+_0x3f01e5(0x60c)+'nspar'+_0x3f01e5(0x54b)+_0x3f01e5(0x237)+':\x20inh'+_0x3f01e5(0x305)+_0x3f01e5(0x5eb)+_0x3f01e5(0x327)+_0x3f01e5(0xb2)+_0x3f01e5(0x1ad)+_0x3f01e5(0x397)+_0x3f01e5(0x3e7)+';\x20}\x0a\x20'+_0x3f01e5(0x25b)+'n-clo'+_0x3f01e5(0x347)+_0x3f01e5(0x2b5)+_0x3f01e5(0x5eb)+'ity:\x20'+'1;\x20ba'+'ckgro'+'und:\x20'+_0x3f01e5(0x14b)+_0x3f01e5(0x10f)+_0x3f01e5(0x32d)+_0x3f01e5(0x49f)+_0x3f01e5(0x319)+_0x3f01e5(0x291)+'mn-cl'+_0x3f01e5(0x44b)+'vg\x20{\x20'+_0x3f01e5(0x21d)+':\x2014p'+_0x3f01e5(0x4f1)+_0x3f01e5(0x24b)+'\x2014px'+_0x3f01e5(0x40e)+'l:\x20no'+_0x3f01e5(0x27d)+'troke'+':\x20cur'+_0x3f01e5(0x15f)+'olor;'+_0x3f01e5(0x208)+_0x3f01e5(0x2dc)+_0x3f01e5(0x27e)+'2;\x20st'+_0x3f01e5(0x5f9)+_0x3f01e5(0x444)+'ap:\x20r'+_0x3f01e5(0x452)+'\x20}\x0a\x20\x20'+_0x3f01e5(0x28a)+'-cols'+'\x20{\x20fl'+_0x3f01e5(0x81)+';\x20min'+_0x3f01e5(0x5ed)+'ht:\x200'+_0x3f01e5(0xf4)+_0x3f01e5(0x4d9)+_0x3f01e5(0x5e5)+'uto;\x20'+'displ'+_0x3f01e5(0x11f)+'rid;\x20'+_0x3f01e5(0x421)+_0x3f01e5(0x54d)+'ate-c'+_0x3f01e5(0x230)+'s:\x20re'+'peat('+_0x3f01e5(0x365)+_0x3f01e5(0x17e)+_0x3f01e5(0x389)+_0x3f01e5(0x516)+_0x3f01e5(0x4bd)+_0x3f01e5(0x188)+';\x20ali'+_0x3f01e5(0x571)+_0x3f01e5(0x200)+_0x3f01e5(0x111)+_0x3f01e5(0x618)+'gn-co'+_0x3f01e5(0x4e0)+_0x3f01e5(0x156)+_0x3f01e5(0x43b)+_0x3f01e5(0x106)+_0x3f01e5(0x3b8)+'paddi'+'ng:\x200'+'\x204px\x20'+_0x3f01e5(0x5d6)+_0x3f01e5(0x3da)+_0x3f01e5(0x25b)+_0x3f01e5(0x587)+_0x3f01e5(0x51b)+_0x3f01e5(0x235)+'-scro'+'llbar'+'\x20{\x20wi'+'dth:\x20'+_0x3f01e5(0x409)+'}\x0a\x20\x20\x20'+_0x3f01e5(0x40a)+_0x3f01e5(0xc0)+_0x3f01e5(0x44a)+'kit-s'+'croll'+_0x3f01e5(0x57d)+_0x3f01e5(0x369)+_0x3f01e5(0x548)+_0x3f01e5(0x4a9)+_0x3f01e5(0x527)+_0x3f01e5(0x107)+_0x3f01e5(0x32d)+'5,255'+',.08)'+_0x3f01e5(0x451)+'der-r'+_0x3f01e5(0x42e)+':\x204px'+';\x20}\x0a\x20'+_0x3f01e5(0x20b)+_0x3f01e5(0x3ab)+'d\x20{\x20b'+_0x3f01e5(0x4fd)+'-radi'+_0x3f01e5(0xd1)+_0x3f01e5(0x12a)+_0x3f01e5(0x34f)+'round'+':\x20rgb'+'a(255'+',255,'+_0x3f01e5(0x189)+'025);'+_0x3f01e5(0xef)+'shado'+_0x3f01e5(0x4c2)+'set\x200'+_0x3f01e5(0x50a)+'1px\x20r'+_0x3f01e5(0x107)+'55,25'+_0x3f01e5(0x466)+_0x3f01e5(0x604)+_0x3f01e5(0x3da)+'\x20\x20\x20.s'+'k-car'+_0x3f01e5(0x231)+'{\x20bac'+'kgrou'+_0x3f01e5(0x527)+'gba(2'+'55,25'+'5,255'+',.04)'+_0x3f01e5(0x1a0)+_0x3f01e5(0x1f2)+'ow:\x20i'+'nset\x20'+_0x3f01e5(0x2a6)+'\x201px\x20'+'rgba('+_0x3f01e5(0x487)+_0x3f01e5(0x61a)+_0x3f01e5(0x560)+_0x3f01e5(0x319)+'\x20\x20\x20\x20.'+_0x3f01e5(0x484)+'rd-he'+'ad\x20{\x20'+'displ')+(_0x3f01e5(0x20d)+'lex;\x20'+'align'+'-item'+'s:\x20ce'+_0x3f01e5(0x179)+_0x3f01e5(0x2a5)+_0x3f01e5(0x1fb)+'\x20padd'+_0x3f01e5(0x3b1)+'11px\x20'+_0x3f01e5(0x2b4)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x3f01e5(0x114)+_0x3f01e5(0x209)+'e\x20{\x20f'+_0x3f01e5(0x79)+_0x3f01e5(0x48f)+_0x3f01e5(0x168)+_0x3f01e5(0x191)+_0x3f01e5(0x3da)+_0x3f01e5(0x20b)+'k-car'+_0x3f01e5(0x2ce)+'le\x20st'+_0x3f01e5(0x1f0)+'{\x20fon'+_0x3f01e5(0x531)+'e:\x2013'+'px;\x20f'+'ont-w'+_0x3f01e5(0x91)+_0x3f01e5(0x2bc)+';\x20col'+'or:\x20r'+_0x3f01e5(0x107)+'46,23'+_0x3f01e5(0x380)+',.45)'+_0x3f01e5(0x3da)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+'.sk-c'+_0x3f01e5(0x1e0)+_0x3f01e5(0x123)+_0x3f01e5(0x2fa)+_0x3f01e5(0x24d)+'olor:'+'\x20#fff'+_0x3f01e5(0x1cc)+'}\x0a\x20\x20\x20'+_0x3f01e5(0x52b)+'mbody'+_0x3f01e5(0x411)+_0x3f01e5(0x2f1)+_0x3f01e5(0x481)+_0x3f01e5(0x159)+_0x3f01e5(0x3b8)+_0x3f01e5(0x544)+_0x3f01e5(0x52b)+_0x3f01e5(0x272)+_0x3f01e5(0x38f)+_0x3f01e5(0x610)+_0x3f01e5(0x4ad)+'1px;\x20'+'opaci'+_0x3f01e5(0x1cb)+'4;\x20ma'+'rgin-'+'botto'+_0x3f01e5(0x483)+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+'l\x20{\x20d'+'ispla'+'y:\x20fl'+'ex;\x20a'+'lign-'+_0x3f01e5(0x94)+':\x20cen'+'ter;\x20'+'gap:\x20'+_0x3f01e5(0x409)+_0x3f01e5(0x348)+'ng:\x204'+_0x3f01e5(0x1fa)+_0x3f01e5(0x599)+_0x3f01e5(0x43a)+':\x2011.'+_0x3f01e5(0x46a)+'}\x0a\x20\x20\x20'+_0x3f01e5(0x52b)+_0x3f01e5(0xae)+_0x3f01e5(0x596)+_0x3f01e5(0x81)+';\x20col'+'or:\x20r'+_0x3f01e5(0x107)+_0x3f01e5(0x593)+_0x3f01e5(0x380)+',.75)'+_0x3f01e5(0x3da)+_0x3f01e5(0x20b)+_0x3f01e5(0x2be)+'t\x20{\x20d'+'ispla'+_0x3f01e5(0x494)+_0x3f01e5(0x36b)+_0x3f01e5(0x4bc)+_0x3f01e5(0x53d)+_0x3f01e5(0xff)+_0x3f01e5(0x2b9)+'city:'+_0x3f01e5(0x33f)+_0x3f01e5(0x544)+_0x3f01e5(0x52b)+'switc'+_0x3f01e5(0x3f4)+'ositi'+_0x3f01e5(0x50d)+_0x3f01e5(0x3f1)+_0x3f01e5(0x311)+'idth:'+_0x3f01e5(0x1e5)+';\x20hei'+_0x3f01e5(0x192)+'14px;'+_0x3f01e5(0x5f8)+_0x3f01e5(0x4e9)+_0x3f01e5(0x451)+'der-r'+'adius'+_0x3f01e5(0x5d2)+_0x3f01e5(0x615)+'ckgro'+'und:\x20'+'rgba('+_0x3f01e5(0x10f)+'55,25'+'5,.07'+_0x3f01e5(0x224)+'rsor:'+_0x3f01e5(0x2fe)+'ter;\x20'+'flex:'+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x3f01e5(0x56c)+_0x3f01e5(0x271)+_0x3f01e5(0xf3)+'\x20{\x20co'+_0x3f01e5(0x4e0)+':\x20\x22\x22;'+_0x3f01e5(0x583)+_0x3f01e5(0x20f)+'\x20abso'+_0x3f01e5(0xe1)+'\x20top:'+'\x203px;'+'\x20left'+_0x3f01e5(0xe8)+';\x20wid'+_0x3f01e5(0x423)+_0x3f01e5(0x4d0)+_0x3f01e5(0x91)+':\x208px'+';\x20bor'+'der-r'+_0x3f01e5(0x42e)+':\x2050%'+';\x20bac'+'kgrou'+_0x3f01e5(0x527)+'gba(2'+_0x3f01e5(0x32d)+'5,255'+_0x3f01e5(0x14a)+_0x3f01e5(0x3ad)+_0x3f01e5(0x35d)+_0x3f01e5(0x416)+_0x3f01e5(0x19f)+'2s,\x20b'+_0x3f01e5(0x4b9)+_0x3f01e5(0xac)+'.2s;\x20'+_0x3f01e5(0x544)+_0x3f01e5(0x52b)+_0x3f01e5(0x355)+_0x3f01e5(0x10e)+_0x3f01e5(0x4de)+_0x3f01e5(0x5d9)+_0x3f01e5(0x589)+_0x3f01e5(0x10a)+_0x3f01e5(0x34f)+_0x3f01e5(0x125)+':\x20rgb')+('a(255'+',107,'+_0x3f01e5(0x415)+'25);\x20'+'}\x0a\x20\x20\x20'+_0x3f01e5(0x52b)+_0x3f01e5(0x355)+'h[ari'+_0x3f01e5(0x4de)+'cked='+_0x3f01e5(0x589)+'\x22]::a'+'fter\x20'+_0x3f01e5(0x441)+_0x3f01e5(0x2aa)+_0x3f01e5(0xdc)+_0x3f01e5(0x4b9)+'ound:'+_0x3f01e5(0x4aa)+_0x3f01e5(0x3b2)+_0x3f01e5(0x544)+_0x3f01e5(0x52b)+_0x3f01e5(0x293)+_0x3f01e5(0xcf)+'ckgro'+'und:\x20'+'rgba('+_0x3f01e5(0x10f)+_0x3f01e5(0x32d)+_0x3f01e5(0x162)+'5);\x20b'+_0x3f01e5(0x4fd)+':\x200;\x20'+_0x3f01e5(0x17d)+_0x3f01e5(0x312)+'ius:\x20'+'6px;\x20'+_0x3f01e5(0x237)+_0x3f01e5(0x58c)+_0x3f01e5(0x218)+'\x20padd'+'ing:\x20'+_0x3f01e5(0x2d7)+_0x3f01e5(0x393)+'ont-s'+_0x3f01e5(0x286)+_0x3f01e5(0x2bb)+_0x3f01e5(0x407)+'tline'+_0x3f01e5(0x490)+'e;\x20bo'+_0x3f01e5(0x58e)+'dow:\x20'+'inset'+_0x3f01e5(0x50a)+'0\x201px'+'\x20rgba'+_0x3f01e5(0x60d)+'255,2'+'55,.0'+'5);\x20}'+_0x3f01e5(0x9d)+'.sk-f'+'ield\x20'+_0x3f01e5(0x595)+'n\x20{\x20b'+_0x3f01e5(0x4b9)+'ound:'+_0x3f01e5(0x402)+_0x3f01e5(0x501)+'}\x0a\x20\x20\x20'+_0x3f01e5(0x52b)+_0x3f01e5(0x31c)+'\x20{\x20di'+'splay'+_0x3f01e5(0x4b8)+_0x3f01e5(0x4d5)+_0x3f01e5(0x367)+_0x3f01e5(0x255)+'\x20cent'+'er;\x20g'+_0x3f01e5(0x214)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x3f01e5(0x2c7)+_0x3f01e5(0x27b)+_0x3f01e5(0x2e3)+'ebkit'+_0x3f01e5(0x90)+_0x3f01e5(0x53a)+'e:\x20no'+'ne;\x20a'+_0x3f01e5(0x37c)+_0x3f01e5(0x498)+'\x20none'+_0x3f01e5(0x551)+_0x3f01e5(0x143)+_0x3f01e5(0x3b8)+_0x3f01e5(0x46f)+_0x3f01e5(0x1c4)+_0x3f01e5(0x615)+_0x3f01e5(0x1fd)+_0x3f01e5(0x3b5)+_0x3f01e5(0x24f)+_0x3f01e5(0x4f5)+'t;\x20}\x0a'+_0x3f01e5(0x291)+'sk-sl'+'ider:'+':-web'+'kit-s'+_0x3f01e5(0x27b)+_0x3f01e5(0x16f)+_0x3f01e5(0x177)+_0x3f01e5(0x41b)+_0x3f01e5(0x1ac)+_0x3f01e5(0x24b)+'\x202px;'+_0x3f01e5(0x5f8)+_0x3f01e5(0x1ed)+'dius:'+_0x3f01e5(0x336)+'\x20back'+_0x3f01e5(0x35c)+'d:\x20li'+_0x3f01e5(0x5b0)+'gradi'+_0x3f01e5(0x1a2)+_0x3f01e5(0x36a)+_0x3f01e5(0x41e)+'f6b9d'+')\x200\x200'+'\x20/\x20va'+_0x3f01e5(0x24e)+_0x3f01e5(0x41f)+')\x20100'+'%\x20no-'+_0x3f01e5(0x16c)+_0x3f01e5(0x5f0)+'ba(25'+'5,255'+',255,'+_0x3f01e5(0x36e)+_0x3f01e5(0x7d)+_0x3f01e5(0x390)+_0x3f01e5(0x2d0)+'er::-'+_0x3f01e5(0xab)+_0x3f01e5(0x345)+_0x3f01e5(0x1bd)+_0x3f01e5(0x369)+_0x3f01e5(0x4af)+'bkit-'+'appea'+'rance'+_0x3f01e5(0x490)+_0x3f01e5(0x3db)+_0x3f01e5(0x27e)+_0x3f01e5(0x98)+_0x3f01e5(0x46f)+_0x3f01e5(0x343)+'x;\x20ma'+_0x3f01e5(0x4c6)+_0x3f01e5(0x3df)+_0x3f01e5(0x332)+_0x3f01e5(0x5f8)+'er-ra'+'dius:'+_0x3f01e5(0x15a)+'\x20back'+_0x3f01e5(0x35c)+'d:\x20#f'+'f6b9d'+';\x20}\x0a\x20'+_0x3f01e5(0x20b)+_0x3f01e5(0x55c)+_0x3f01e5(0x38f)+'nt-si'+_0x3f01e5(0x4ad)+_0x3f01e5(0x437)+_0x3f01e5(0x4bc)+_0x3f01e5(0x1b9)+_0x3f01e5(0x366)+_0x3f01e5(0x3e1)+_0x3f01e5(0x168)+'th:\x202'+'8px;\x20'+_0x3f01e5(0x1e1)+'align'+_0x3f01e5(0x5c7)+'ht;\x20c'+'olor:'+_0x3f01e5(0x35f)+_0x3f01e5(0x46d)+_0x3f01e5(0xa5)+_0x3f01e5(0x373)+_0x3f01e5(0x319)+_0x3f01e5(0x291)+_0x3f01e5(0x4b2)+'lor\x20{')+(_0x3f01e5(0x2f0)+_0x3f01e5(0x233)+'px;\x20h'+_0x3f01e5(0x91)+':\x2022p'+_0x3f01e5(0x29b)+_0x3f01e5(0x4cb)+_0x3f01e5(0x492)+_0x3f01e5(0x4fd)+_0x3f01e5(0x4ab)+_0x3f01e5(0x3fa)+'px;\x20b'+'ackgr'+_0x3f01e5(0x2a1)+_0x3f01e5(0x5d3)+';\x20pad'+'ding:'+'\x200;\x20c'+'ursor'+_0x3f01e5(0x371)+_0x3f01e5(0x179)+_0x3f01e5(0x7d)+'\x20\x20.sk'+_0x3f01e5(0x3f5)+_0x3f01e5(0x38f)+_0x3f01e5(0x610)+_0x3f01e5(0x4ad)+_0x3f01e5(0x437)+_0x3f01e5(0x237)+_0x3f01e5(0x1d3)+_0x3f01e5(0x384)+_0x3f01e5(0x150)+_0x3f01e5(0x2e2)+_0x3f01e5(0x122)+_0x3f01e5(0x245)+'g:\x202p'+_0x3f01e5(0x486)+'}\x0a\x20\x20\x20'+_0x3f01e5(0x52b)+'note.'+_0x3f01e5(0x1d8)+_0x3f01e5(0x108)+'r:\x20#f'+'f7a93'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+'\x20{\x20al'+'ign-s'+'elf:\x20'+'flex-'+'start'+';\x20bor'+_0x3f01e5(0x467)+_0x3f01e5(0x260)+'rder-'+'radiu'+_0x3f01e5(0x3cb)+_0x3f01e5(0x25c)+'dding'+':\x208px'+_0x3f01e5(0x1c9)+';\x20bac'+_0x3f01e5(0x4a9)+_0x3f01e5(0x292)+'ff6b9'+_0x3f01e5(0x2f4)+_0x3f01e5(0xd5)+_0x3f01e5(0x2e8)+'\x20font'+_0x3f01e5(0x43a)+_0x3f01e5(0x9f)+_0x3f01e5(0x46a)+'font-'+_0x3f01e5(0x1b9)+'t:\x2070'+_0x3f01e5(0x1a1)+_0x3f01e5(0x55a)+_0x3f01e5(0x2fe)+_0x3f01e5(0x173)+_0x3f01e5(0x544)+'\x20.sk-'+_0x3f01e5(0x400)+'over\x20'+_0x3f01e5(0x4b6)+_0x3f01e5(0x541)+_0x3f01e5(0x6f)+_0x3f01e5(0x246)+_0x3f01e5(0x410)+';\x20}\x0a\x20'+_0x3f01e5(0x8a));window[_0x3f01e5(0x3c2)+'entLi'+_0x3f01e5(0xb5)+'r'](_0x4a12cf['sXDqa'],_0x2ae5bf=>{var _0x333c79=_0x3f01e5;if(_0x2ae5bf['code']===_0x4a12cf[_0x333c79(0x21a)]){if(_0x333c79(0x2f5)!==_0x4a12cf[_0x333c79(0x5ff)])try{var _0x599b16=new _0x3d2324(_0x285c43)['readF'+'ield'](_0x4d6aa2,_0x333c79(0x2eb));return _0x599b16?_0x599b16[_0x333c79(0x2de)]():-0x1d3*-0x5+0x2569+-0x2e88;}catch(_0x2c6905){return-0xd09+0xc0b*0x3+-0x1718;}else _0x2ae5bf[_0x333c79(0x4e6)+_0x333c79(0x351)+'ault'](),_0x5c9512();}},!![]);var _0x22d730=document[_0x3f01e5(0x1b3)+'eElem'+'ent'](_0x4a12cf[_0x3f01e5(0x5a5)]);_0x22d730[_0x3f01e5(0x534)][_0x3f01e5(0x4a2)+'xt']='posit'+_0x3f01e5(0x2ba)+'ixed;'+'top:1'+_0x3f01e5(0x5ef)+'ight:'+'12px;'+'z-ind'+'ex:21'+_0x3f01e5(0x5bd)+'646;c'+'ursor'+_0x3f01e5(0x608)+_0x3f01e5(0x27a)+_0x3f01e5(0x1a8)+'26px;'+_0x3f01e5(0x46f)+'t:26p'+_0x3f01e5(0x1c2)+_0x3f01e5(0xa0)+_0x3f01e5(0x70)+_0x3f01e5(0x2cc)+_0x3f01e5(0x20f)+_0x3f01e5(0x3d9)+'ty\x200.'+_0x3f01e5(0x4f7)+_0x3f01e5(0x3e7)+_0x3f01e5(0x5bb)+'ts:au'+'to;fi'+_0x3f01e5(0x3dc)+'drop-'+_0x3f01e5(0x36d)+'w(0\x200'+'\x204px\x20'+_0x3f01e5(0x14b)+'255,1'+'07,15'+_0x3f01e5(0x229)+'))',_0x22d730[_0x3f01e5(0x5c3)+'HTML']=_0x4a12cf[_0x3f01e5(0x37b)],_0x22d730[_0x3f01e5(0x318)]=_0x4a12cf['tQiZN'],_0x22d730['onmou'+'seent'+'er']=()=>_0x22d730[_0x3f01e5(0x534)]['opaci'+'ty']='1',_0x22d730['onmou'+_0x3f01e5(0x93)+'ve']=()=>_0x22d730[_0x3f01e5(0x534)]['opaci'+'ty']=_0x3f01e5(0x273),_0x22d730[_0x3f01e5(0x2e4)+'ck']=_0x5ed1c0=>{var _0x3c8369=_0x3f01e5;_0x4a12cf[_0x3c8369(0xe4)]!==_0x4a12cf['vEOhk']?(_0x328c34['hookN'+_0x3c8369(0x30e)+'il']=_0x3b0bb1,_0xc85235()):(_0x5ed1c0[_0x3c8369(0x301)+_0x3c8369(0x113)+_0x3c8369(0x50b)](),_0x5c9512());},document['body']['appen'+'dChil'+'d'](_0x22d730),_0x2dc19b(),requestAnimationFrame(_0x5ba9a6),console[_0x3f01e5(0x3fb)](_0x3f01e5(0x1e4)+'ra-ko'+_0x3f01e5(0x1a4)+_0x3f01e5(0x290)+_0x3f01e5(0x1aa)+_0x3f01e5(0x151)+':',_0x361647['uwmk']);});})()));function _0x11b5(){var _0xf61e6f=['oxWWFde','mJiSocW','nsWYntu','zgvYoIa','CJOGDgG','uK1c','nxb4oYa','mhW0FdC','u3rHDhu','kdi0nIW','y2fSBa','AgvPz2G','C2HVD24','t1HMDfy','Aw1YDgi','zxH0','zgjbC3C','Aw1Lihm','zsb2ywW','i2zMnMi','BMCGzM8','lxrVCca','zffysMK','zvzHBhu','oWOGica','z29K','FdeZFdu','vMrevuq','u3bLzwq','oIaWide','wefkA0m','BtOGnNa','C2STy2e','BK5sEhy','EcaWoYa','mJu1lde','mJCZmgjqr0jNwq','igvMzMu','igzVCIa','DxjLihq','B24UvgK','zgLZCgW','zgv2Awm','mtSGBwK','oIbUB24','yxjNzxq','ida7igi','ideYChG','EtOGyMW','FdiXFde','zs1PDgu','BM9Uzq','yw5JztO','igvSC2u','u3bHy2u','C2v0vhi','AujWu0G','Bw4Ty2W','t1nOB28','nsWUmdu','mteXndyXodrhrgj1qKi','CY1Zzxi','y3nZvgu','yxvSDca','A291CI0','u1LJyLC','B3i6iha','EerkvgO','BwvZC2e','A2DYB3u','icnMzJy','lxjHzgK','s2v5qq','EMu6ide','u0fgrq','EYaTD2u','idiWmg0','ihnVig4','C2STy28','tuLtu0K','Fdf8m3W','wgD4vfi','EYbMAwW','oYb1C2u','oIbMBgu','ywnRz3i','Bg9NBY0','D0nVBg8','zM9UDc0','mhb4lca','zw51','q3vZDg8','igLZigm','lc40ktS','DZOGAw4','uhz3uw8','Fdn8mhW','igHLAwC','CMDPBI0','AKLTy1e','swyGCMu','mNb4ihu','CMHWtNi','CMrLCJO','sen4q1y','oIaWoYa','B246ig8','AwX0zxi','ChG7igG','ihSGB3a','vvDnsYa','vwz4rMG','Bwf0y2G','EdSGywW','y3K9iJe','CM9ZC2G','y2HPBgq','CMzSB3C','BMLUzW','BsbSzwy','C2STzMK','lxDPzhq','ys1JAgu','mhG2mda','BNrLBNq','rgfUz2u','DgvTlxu','CMXHEsa','zMyP','B250zw4','ChjLDMu','nxWYFdy','CI51As4','zxi6ida','vKXNwKe','owqIihm','wgL5Ew0','zdSGyMe','AwrLCG','ihDOAwm','B290zxi','EdSGAgu','wMvYB2u','CM9Wlwy','BI1ZDwi','CgfYzw4','AgvZ','mNm7Cg8','y2n1CMe','qxbWBgK','thDRANm','oYbJB2W','wNnfy2K','B3jKzxi','Awy7ih0','4Ocuig5Via','zwfKige','nde5oYa','v2LKDgG','qKPqB2O','Bgf4wwe','lJuGms4','Cg9W','igLMig0','ywn0Axy','EuLtB3O','idaGmca','yxrPB24','ywXPz24','B246ihi','nc00lJu','CdOGmta','zhbY','z1Hes1O','DhjPA2u','Bgrvs1i','B3vUzgu','sw5ZDge','yxGOmJu','DvrMz2W','Aw5WDxq','BMDL','igP1Bxa','CZO6lxC','Awr0Aa','CJSGz2e','y2HdB2W','Bw4TDge','B3qGBwe','lM1Ulxa','vvDnsW','CMvHzey','BwvKicG','DdOGnZa','zM9YBtO','BMq6ihi','j3qGC3q','CgjwAxq','tKneveC','ic5ZAY0','ywXSzwq','ldiXlc4','zwv6zsa','yM9KEq','DxmGywm','Dc1ZAxO','DhjVA2u','yxjLBNq','C3r5Bgu','r29Kl2q','B2TLpsi','u2TPChm','BwLU','AguGDxm','yxjHBMm','D29YAYa','B25SEsW','C2L6ztO','ugn0','ufzeAgO','u2fMzxq','DgvYoIa','zMLUza','AxnWBge','FqOGica','nxW2Fde','C2STC2W','mdSGFqO','EYbIywm','DML0Eq','yND1vKq','zw50oYa','Bg9HzgK','DgvTCgW','qM9vDfy','ifvUAxq','mJCYnJq0nZLxCwfzDeq','oYb3Awq','u2nHBgu','EgTizLq','sK9xAuK','msWUmZy','Efzdzhu','BgLUzvq','z2v0rwW','yurmBMm','CNnVCJO','wffvq0G','AY12ywW','mJn8mJa','zvn0EwW','t2n0qwi','nYWUmJG','yMX5lum','DgvY','CMvHzhK','C2f0Dxi','BMvS','ELDWy2i','mhW2Fdu','AxrPyxq','Aw9FnZi','DMC+','zxjYB3i','AY1ZD2K','BxD4sMG','y2vUDgu','BwuG','BM9tChi','z24TAxq','AxHLzdS','B3C6ida','yxnZAwC','yxrbt3u','z3jHDMK','EKXgvNO','Dgv4Dei','yMn2txG','zxDzzvG','B2LS','A2v5C3q','yMfYlxq','ihjLy28','zsb0CMe','ugfSqKu','B25ZwgS','z3jPzdS','ihbVC2K','v3nfCfq','zMXLEdS','AwXSihK','BI1JB2W','Bg93zxi','iNrYDwu','DMLHifm','q2THEKW','oIaJzJy','igfWCgW','Ec1ZAge','DhvYyxq','Axb0kq','AwXLzdO','C3rYAw4','ndySmJm','vKzICg8','B3b0Aw8','ihSGzMW','BwLZyW','BMf0Dxi','igzVBNq','BguGAwy','Bw92zq','CMLNAhq','ywqGDg8','DhnmzNa','Eu5MEe0','DxjDigG','yvbmr3G','zMLSzw4','C3rYB2S','yMLJlwi','wNf1uLK','Bwf4','C0zowfO','wuXutxa','nxmGy3u','zwqGyw0','C3bLzwq','zw50tgK','sgLKzxm','Aw4TD2K','lwL0zw0','BMvHCI0','u0flvvi','C2fRDxi','ndHWEcK','Bg9Y','tKCGlsa','C3LPCee','B2LUDgu','CIb2ywW','ohb4ksK','z1fuC0O','lwv2zw4','ohG5mc0','ndC0odm','rejcr0q','AhbXrha','BgfSu1m','tujQB2C','CKzmEhC','Aw5Uzxi','yMHVCa','Aw5KzxG','zwfSDgG','oIbYAwC','z2v0qxq','y0rItuW','vuTnrKK','r09ps1O','nhWYFdC','rwXLBwu','CZPUB24','y3qGB24','CMvSB2e','zwn0oIa','oIa5oxa','ig5VBMu','tw92zq','n0nTCNf0ra','nNb4ida','C2STBwi','zuv4Ca','y2TLzd0','vg90ywW','zMLSBfm','z2DSzwq','B1fQr2O','BgLUzw4','BgLUzvC','DNbHC28','Bgf5oIa','wxfQCwS','lJv6iIa','zw0TDwK','lxK6ige','z3LIywm','BerPzsW','nhWYmNW','ihWGC2G','CMvHza','ig9Wywm','mxWYFde','lwHLAwC','BhrOige','mNb4o3i','DcWGCMC','BcbKCMe','nMi5zci','mJqSmtC','t1vsx18','idmYChG','rNHXBum','y3nHCue','igjVCMq','CM9Rzs0','CNr1Cca','idqGnc4','AwnRihm','EsaUmZu','yw5Uywi','BgzlAu0','nxWWFdi','ugf0Aa','B25JAge','sNvTCca','lc4WnsK','y2HLCYa','zujiDMy','suPouMC','oNbVAw4','Dg9W','igzSzxG','tfnqtxO','oIb0CMe','kdi1nsW','CZOGyxu','zvjHDgu','BNqTC2K','mtbWEdS','BhvLCY4','CYbHBgW','B1Dizwe','EdSGyMe','C3rPBgW','AguGzNi','oYbHBgK','ys5RB3u','mdCSmtu','lKXVy2e','yNjPz2G','mc41o3q','t2fgs1C','zMrnAwi','ihSGD2K','B3nLihS','seDgD0m','vu90vKG','yMvNAw4','Ahq6idi','Bgv4oIa','Aw5Zzxq','yxjJ','uNvUDgK','ih0kica','rgrur2W','BM56DLK','DMvJBuS','zxG6ide','te1c','yxbWBgK','zxjZ','zsbJEd0','q2X2r24','y29TyMe','AcaTidq','zxmGB24','icaG','idaGnha','vND0wuS','sLDgrwG','igvYCG','tM8Gu3a','lwfWCgu','zwLNAhq','zgL2','C2vSzwe','AxrLBxm','CMvJDa','yxmGBM8','EwveCMi','nNb4oYa','Dw5Kzwq','s2zzAve','q09WvNa','CNDisxy','cIaGica','CfLmuwK','oIaXms4','y2L0EtO','tNHqCMm','reDRAhG','AMvNwNG','r1HguLm','mJm4ldi','z2fTzuW','CKfnqK8','mxb4ida','mZiXode2nKjczhjYAq','lwjHBNi','D2vIA2K','B3vUzca','ANLXyKG','BgfIzwW','BgvkwuW','C2STyNq','zxjZihq','lJq1oYa','C1HeCwe','CgfNzsa','C3rLBMu','r3nLAK8','CgXPy2e','y29TCgW','s1rzyMy','txbWrwi','AM95D3y','CML0zxm','z29KicG','EuXdCgG','Bw4Ty28','y29SCZO','Bw92zvq','nhWWFde','ihn0AwW','DeLwD0u','u2L6zq','lwLVxYO','Au5rwe4','C2v0ida','BNrLEhq','q1DWDfe','zw15igm','t1LSCu8','BfvOr0W','Dg9zuum','ihSGyMe','wNLMCK8','Dxm6ide','qsblt1u','AK55C1C','ywDLigq','Bg9YoIa','zLnxA1K','nxWXFdq','Ag9VA3m','v2jfC3e','BxPcr28','Bw4TC3u','ChG7igi','q2XVC2u','ntm5mgLICKXnua','Fdn8nhW','u0D5s1y','Bhv0ztS','igfSAwC','Dg9Y','DKvpAgS','zMPrChK','ihWGrvi','ywX0Ac4','oIaZChG','CNrPzgu','mZuSmJq','B1Hzugm','B24Gzxy','zcbJAg8','nxWZFda','igjVEc0','ELnMA0S','sLjeqKG','ywqU','ywz0zxi','oYbVDMu','zsbZzxi','Fdn8ohW','DNLlthi','Bg93oIa','y2f0','CgXHEtO','lM1Ulxq','tKCG4Ocuia','qwvWve0','zxjZy3i','ideWChG','DgnOihq','yxPtqxy','EeX5Bgq','BwvsDw4','zZOGnNa','yxj0lG','yxa6ide','z2jHkdi','ignVBg8','u2fRDxi','iL0GEYa','yLHftKS','yxrLkde','As1TB24','AfTHCMK','mJu1ldi','rfLLv1e','C3rHCNq','zsGXnta','CM9WywC','lwnHCMq','iM5VBMu','yxKGB24','Ehv0BxK','AfHirLK','x19tquS','uxfTvgy','AxnPyMW','AfnOywq','yvb1sei','D2fYBG','yxK6igC','y1fyA04','yK5cwfu','nsK7iha','AxrSzsa','ienquW','CM91BMq','DxjDifu','Dg9Wrgu','CYbpsgu','BgvMDa','mNb4oYa','AxmGyNu','BwLKzgW','y2LYy2W','zgvZ','t0jxyMG','Ec1OzwK','zsXTB24','zMLSBa','tMfTzq','Bg5gCwy','y3rcu2u','BMqIihm','wK9xDuG','rw9ItMu','mcWWlJu','zwXK','qNLjza','BM8Gy2G','zYbJyw4','nNWWFdG','BhmGysa','phbHDgG','oIaZmNa','AxvZoIa','DgG6idK','y3jLzw4','Ag9VA0m','Egfls2m','zxj5idi','ie9olG','BNq6igm','lc4YnsK','CMDIysG','zM9UDa','uMfWAwq','CM9Szq','ntaLktS','ldiZocW','ifvxtuS','CMvSEsa','sgvPz2G','lIbvC2u','ig1VBwu','oIbZDge','C2fMzu0','C2v0','mNb4ide','iduWjtS','Be1VDgK','A2v5zg8','BMX5kq','ChvZAa','CMvUDem','tg5hBuS','y3Hhvhu','nsWUmdm','sMD2vNm','lsbHihm','Bw9fEha','EuvUz2K','tgvNAw8','BI13Awq','CMeTA28','zenOAwW','DgHPCYa','CMvWzwe','nhWYFda','BhKGkhi','lxj1BM4','C2XPy2u','yw1L','yxjPys0','DgvYoYa','ihrOAxm','qvvUthC','mNW0Fda','ywjSzs0','DgLVBI4','BNrLCJS','zNbZ','Dxm6idi','oYbMB24','yM9Yzgu','zMLSBcW','CMz0tei','zvKOmtG','BI5MAxi','quvuuhi','A3nty2e','BMqGBwe','AwDUyxq','DgvZDa','ztOGmtC','mwzYksK','mJu1lc4','q0fovKe','B3nWywm','zcbNCMu','nsKSida','BI1PDgu','ieDLDfy','s29OwKu','DgG6ida','z2H0oIa','CNjVCG','EsbKzwy','qMT2BLO','A1Pnqum','zw1LBNq','tgLZDa','mtC3q3vYBuP1','EtOGmdS','B29RCYa','De1SB1e','rgfTywC','lwfWCgW','zwz0ic4','oYbIB3G','mdSGy3u','zw50kcm','CLjesg0','DxjDig0','D0jSDxi','y3rPB24','uKPNqMW','Awr0AdO','B3vUDgu','zwfKEs4','AvjrzeC','ihSGAgu','y3vYC28','zxjSyxK','BxKGC2u','zMXLEdO','zxzLBNq','icaGig8','y3jLyxq','zhDpvLa','mxWYFdC','C2HPzNq','AwWGC3a','v2vHCg8','D2vPz2G','vxHlDLG','Bxm6igm','B3nL','zgvYlxq','iezquW','iJeUnsi','B2LSicG','t2Lrv3q','EdTVCge','lxnHBNm','DdOGoha','u3PTuve','CJSGzM8','y2SP','CMrLCI0','ide2ChG','qMTMt1m','DhK6ic4','mgy1oYa','mciGCJ0','tKnktvO','u2vSzwm','DxDTAW','u25xte8','yxb0Dxi','oIbYz2i','yM90Dg8','tw9Kzsa','zejWtxa','lwzPBhq','zxjYihS','C2f2zq','yw5Jzs4','q291BNq','r2Dezue','tw92zw0','zhrOoJe','v2v4twC','yxjKlxq','Dgv4Dc0','DMvYlxy','s2TXvgq','w3nHA3u','idi2ChG','u0v6wxy','yKjtANq','AgzQt2K','ignVB2W','vwn1vNq','CYbLyxm','txfMC2W','zxiTCMe','zgfTywC','Bw4TBwe','CM9UzYa','oIbHyNm','lxnOywq','uhbrEgS','lcbZyw4','DMLZDwe','AwXS','mhGYnta','y2fWDhu','Bw4TAca','ChGGmdS','idHWEdS','u0TtBxe','y2TNCM8','zgTPDa','rxbxu3u','zw1ZoIa','igjHBIa','mtG1ntaXmMvbsNb5Eq','BMn0Aw8','pc9ZBwe','D05OreW','y3KGB24','ywnPDhK','ihn0CM8','lxrPDgW','wgPWvum','icaGlNm','qMnryuW','yxK6igy','Dgv4Dee','DgLVBJO','oIa2nta','r3jHDMK','ltiUnsa','uNb6uhK','yxa6idG','yKnNAeK','CI52mq','C3bHBG','zwvMmJS','rvHqxq','yKrdthi','DhmGCgW','sLbuv2q','D2LKDgG','ywXSihq','Dvb6yxa','EejlvuG','zw50rwW','v2vItw8','CMLUz3m','ktSGy3u','q29SB3i','A0D3A3u','BwLUkdq','odaSmtK','nYWWlJC','AwvSza','ifvjiIW','vMP0CKe','AgvSza','zw50CZO','D1D3q2K','B2X1Bw4','zc5VBIa','DgXLCW','AdOGmZq','zxi6igi','zwjRAxq','qwfNv0y','y29SB3i','Aw9U','Bw4TAa','icbIywm','y2XLyxi','ywrK','idi0iJ4','CYaNzNu','AKrRrhC','igjHBM4','A2rYB3a','u0fgrsa','yxrLvge','Aw5JBhu','ywrKAw4','Dg5LC3m','ihWGz2e','mtaZmtbsuMvfvKe','y3jLBwu','zMLSBfq','AwDODdO','A2vizwe','zYb7igm','CIGTlxa','DhjHBNm','zciVpJW','rxHW','Axzjy1i','uw5ryNu','zxPPzxi','DgvTCZO','mtj8mtq','whvABLK','ltqTnY4','Bg9Hzgu','igfUzca','icaGlM0','EdSGCge','uMvZzxq','yNPnAwq','BI1SB2C','mdSGyM8','CM0GlJq','BsbVBIa','uw9Hwxm','BgLNBG','idqTnc4','ywqUieK','u2v0r2e','nwmWidm','DMrODhK','EKnjA3y','q0fMuuq','zw5HyMW','y2XHC3m','r29Kie0','BY1ZDMC','uM9uBfe','DgnOoJO','BwrLC2m','mc41','DgHYB3C','DhjPyNu','vvPqr08','t0HLywW','zNvSBhm','ihLVDxi','DgvYo3C','BgLKzxi','Be9IsLa','BMu7ihm','zhrOoIa','oJiXndC','odbWEcW','swzuELq','wfvysva','zxiTzxy','zg9JDw0','z2LMEq','AxPLoIa','iNjVDw4','y2vdAgK','uJOG','icaUBw4','y2HtAxO','AsXZyw4','Ec1KAxi','y2fWtw8','C3bSAxq','zw51ihi','icaGic4','BMq6icm','zMLLBgq','zxrL','ohWXn3W','DhLSzq','B3zLCMW','ysGYntu','reToC1i','v0fjrMe','EdSGyM8','oxDuuhjWAG','Ce9iu3K','Ag9VA04','BdOGAw4','DxjH','B3vUzdO','Dg9Nz2W','zwCGzMe','y29Kzq','igDHCdO','mcaWida','u3rHDgu','BMnL','A2uTBgK','DdOGmtu','mIaXmK0','mxb4ihi','kYbmtui','ExLUAhu','oYbMBgu','wfP2wMC','AM9PBJ0','zu5iBNq','rNzLA3i','mtjWEdS','DMvYihS','ANHZvMe','uMvJDa','iokaLcb0zq','oYbVCge','Aw9UoMy','mteUnxa','oIa2mda','ihbHzgq','AY1OAw4','lsbVDMu','Cg9ZAxq','BhvTBJS','zfrMAeu','yNvJDvu','zwLUC3q','C2v0x3q','Agj0CMq','lNnRlxm','B25PBNa','BMv2zxi','AgvHzgu','CIbNyw0','CMfUC2K','lZ48l3m','zc10Axq','nda0mdmXmfLSrurZsq','lxnSAwq','Ag9ZDg4','DhrPBMC','CMfWAwq','ueLZvhy','AhvNBeO','ign1CNm','nNb4idK','uMvJB2K','De5Vzgu','ieaG','v0z6DNO','A2uTD2K','ywvLuve','DMfS','ls1W','A3nqB3m','Ag9VA1a','mJqYlc4','ihSGlxC','B25JBgK','Dfr3BwC','AwrLihS','Egv0D2O','i2zMzJS','A0LOEfm','Aw5Mqw0','DtmY','l3jHCgK','sw5PDgK','CgfJAxq','A3mGyxi','ihDPzhq','zgrPBMC','yxbWzw4','zIXZExm','zdSGy28','EM9mAMq','B3rOAw4','nZTWB2K','lwrPCMu','Fde1','C3rYB24','uhn5D00','DMLZAwi','DdOGmJG','ihbVAw4','rMLLBgq','EtOGz3i','C3rVCfa','oIbKCM8','vu1mCeu','lK92zxi','zxjPDdS','Aw9UlLq','CfLXv2K','z2v0sxq','ie1VDMu','u3DxzMe','v2vwu0i','kc4YmIW','BgfZDeu','B1jLy28','uKPetvq','CNjkyMC','DMu7ihC','CI1Yywq','v0P0Bhe','CMfUC3a','nMvLzJi','igrPC3a','z1D3s08','DgL0Bgu','ktSGFqO','rgvrqvC','ndGZnJq','CMfUz2u','zvn4B3C','nhWXFdu','CMvZDg8','zIbTyxq','EcbYz2i','C2v0sxq','zM9YBxm','Bgf0zwq','yw5LBca','n3WYFdm','Axr5oIa','C3bSyxK','Bw4TBg8','BgTNsMq','psiJzMy','zwfK','ntuSmJu','ig9YigS','vM5lwxq','Bgf5ig8','ywn0A0S','ltjWEdS','yM91BMq','zvj1BM4','zuvSzw0','idjWEdS','yYGXmda','turOEuW','mNb4ksa','ihrYyw4','CdOGmti','DhLWzq','B2r5','A2v5Dxa','ic40oYa','nsaWlti','lxnPEMK','DgHVzca','DdOGnNa','idaGmJq','Dc1ZBgK','yJPOB3y','C2u6Ag8','CgfKzgK','Ag9VA0C','zxqGmca','vNDVtxa','BYb0Agu','Eca2ChG','mtySmc4','yMfJA2C','Bg9Hzc4','BNrezwy','whPVyNq','Aw9FmZa','B25Lige','C3DPDgm','mdi1ktS','CIGYmNa','EgvZige','ExnJzMC','vw5PDhK','ig5VigG','z3jVDw4','BNnPDgK','B3G9iJa','ihjNyMe','BgrYzw4','CxHZEfC','lwXPBMu','tgvMDca','ihjLBg8','yxv0BY0','DdOGnJa','AwDUlwK','C2STBwq','AhvTyIa','zMy2yJK','B2nRoYa','iIbZDhi','C2HHzg8','lJa4ktS','CgzPDM4','sfLUtLm','oIbWB2K','C2STC3C','ndiSlJG','lxbHCMu','s2v5ra','B2fKzwq','C2STDMe','CxvLCNK','4Ocuig92zq','Ad0ImIi','BhjSuKG','ChbLyxi','BNrLCI0','B2reAwu','DhLqy3q','ocWYndi','mdbTCY4','vvvcCwq','AxmGAg8','ysGYndy','Cg9Uj3m','vw9KvLe','B3jZige','Dw5PDhK','ig1PBM0','Aw9F','DMfSDwu','nxWZ','u2fMzsa','ywrIBg8','ihSGzM8','icaUC2S','z2uUiei','yKXKs24','ChG7igy','igvUDgK','Bw91C2u','C2STBge','CJOGCg8','sMjxyMK','CMvU','zvbSDwC','phn2zYa','ldeWnYW','nhWXn3W','zw50zxi','C2v0qxq','phnTywW','ys11Aq','v2LWzsa','yNv0Dg8','BhrO','lM1Ulxm','zgvSzxq','yxnLBgK','mtiGmJe','lNnRlw0','iefmtca','AY1Jyxi','nJaWide','oYb0CMe','thL0Cvu','icaGyMe','CwDNChq','Aw5NoIa','yJLKoYa','vgHLC2u','rNjHBwu','Dw5KoIa','oMHVC3q','yvPhzKO','mhb4oYa','DgLKzs4','iJeYiIa','ysblB3u','zw50CW','ihWGBw8','yKT5rK4','r1bKAKK','vMfSDwu','ltiUns0','ywrKrxy','C2HVB3q','q1btihi','BM93','oYbWB2K','wg1mq0i','nIa2Bde','rfHPr2u','D2fPDgK','CZOGoha','ze15Cfa','sgvHBhq','Cg9PBNq','AgzyBMi','AxrLiee','u0Phu0O','vvvpCg4','AhfzwNe','ig9U','zJmY','ELfLquC','AxrJAa','B2rL','B3bHy2K','oYb9cIa','ztSGD2K','BhrLCJO','zw50','Bw92zw0','Dg9WoIa','rwfJAca','mdSGBwK','tuDWCfe','shjLCLy','ChG7ihC','zLLfEMK','B0X2uM0','Aw50zxi','uIb2ms4','zw4GDg8','BM9UztS','CYb3B24','BMuUqxa','BYb7igq','Dgv4Dem','zxj2zxi','thHKELy','zwXHDgK','y3jVC3m','sfrnta','Acb7iha','lw5VDgu','BvbdC0O','rLn0svi','BurRzgO','uxfnsgW','Dxm6idy','Bg9N','A3ndChm','ChGGDwK','BIbZAwC','t0zgigi','yNrUoMG','qM90Dg8','icmYmJe','zxrLy3q','DvLmt3a','idK5osa','u2Hjvhe','EdSGB3u','A291CNm','ohb4oYa','ic5TBI0','DMLLD0i','t1vJALG','AguGzgu','oYbMAwW','v01ligK','kdeUmsK','ihSGCge','vMDpqLO','AdOGnJi','DgvJDgK','mtu3lc4','B246igW','nYWWlJm','B3bLBG','sM54qKK','v0fttsa','DhjHy2S','BgvUz3q','igXLyxy','zcWGi2y','lca1mcu','mcWWlJC','z3jPzc0','zMLSBd0','DgG6idG','CMqTAgu','lMrSBa','ywXSig8','B3zLCMy','AwvKigm','DMvTzw4','AxrPB24','BNn0ywW','vvjbx0S','CgfYC2u','ywrPDxm','lcbPBNm','BhmGDgG','AgfPCG','zsWGDhi','CMvMAxG','AtmY','DMG7EI0','ms4XlJa','mxb4oYa','u01UwMO','zs5bCha','lxnPEMu','CNq7igC','DgfNtMe','B1DlBhO','ALLdrxy','z29KrgK','DgG6idu','EYbSzwy','u2vNB2u','zxrhyw0','BgLUzwm','wKrou3O','Bg9Hzca','ocKPoYa','BenOwxa','BLbSyxq','oI13zwi','B3nLihm','veXgt0i','yKLxu1G','BMC6igi','igv4Axq','u3jzEvu','oYbIB3i','B3vUzdS','mcbOB28','yw1Hz2u','DgLKzvC','BM9szwm','BML0igy','uMf0zq','mcWWlJy','BJOGy28','ANvTCfa','B29Rihi','B3zIvgC','x19ZywS','oc00lJu','BNqGAge','igrHBwe','sKnKq3y','Bw8GDg8'];_0x11b5=function(){return _0xf61e6f;};return _0x11b5();}
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
(function(_0x50113c,_0x553aff){var _0x5624b0=_0x55f7,_0x1929fa=_0x50113c();while(!![]){try{var _0x14586e=-parseInt(_0x5624b0(0x1ae))/(-0x91*-0x1d+-0x1f6*0x5+-0x69e)*(-parseInt(_0x5624b0(0x168))/(0x2b9*-0x7+0x4*0x953+-0x1*0x123b))+-parseInt(_0x5624b0(0x554))/(-0x2528+-0x1*-0xbce+0x1*0x195d)*(parseInt(_0x5624b0(0x632))/(0x1313*-0x2+0x1*0x1d7d+0x8ad))+parseInt(_0x5624b0(0x551))/(0x1*0xaa9+0x1e0c+-0x28b0)+-parseInt(_0x5624b0(0x393))/(-0x1ca*-0x13+0x1*-0x15f2+-0xc06)+-parseInt(_0x5624b0(0x681))/(0x3*-0x5c9+0x15*-0x171+0xb*0x455)+-parseInt(_0x5624b0(0x21c))/(0x17d*-0xb+0x232*-0x4+0x192f)*(parseInt(_0x5624b0(0x37e))/(0x14e7+0x1a96+-0x2f74))+parseInt(_0x5624b0(0x46a))/(0x1d19+0x122f+-0x179f*0x2)*(-parseInt(_0x5624b0(0x5ab))/(-0x8d4+0x563+-0x2*-0x1be));if(_0x14586e===_0x553aff)break;else _0x1929fa['push'](_0x1929fa['shift']());}catch(_0x5629e1){_0x1929fa['push'](_0x1929fa['shift']());}}}(_0x485f,0x5198b+-0x1*0x4c23b+0x26ef2),((()=>{'use strict';var _0x1184e8=_0x55f7,_0x11036f={'pwNEP':function(_0x3e9cb1,_0x2ea34a){return _0x3e9cb1!==_0x2ea34a;},'ETtTT':_0x1184e8(0x1bb),'OMdso':'wmDgp','wKVKj':function(_0x4dd6d3,_0x2de94c){return _0x4dd6d3-_0x2de94c;},'lTSmj':function(_0x2f748f,_0x4ee066){return _0x2f748f+_0x4ee066;},'Vithf':function(_0xc2e4e5,_0x2edb29){return _0xc2e4e5+_0x2edb29;},'WNHdA':_0x1184e8(0x514),'LEapN':function(_0x137dc4,_0x491060){return _0x137dc4>_0x491060;},'KlBBr':_0x1184e8(0x40c),'ADcHc':function(_0x14962f,_0x11dc6b){return _0x14962f+_0x11dc6b;},'WlESg':function(_0xd469b0,_0x441239){return _0xd469b0(_0x441239);},'JCUzo':'\x20+0x1'+_0x1184e8(0x1f2)+_0x1184e8(0x5e4)+_0x1184e8(0xd9)+_0x1184e8(0x41d)+'—\x20not'+_0x1184e8(0x1ec)+_0x1184e8(0x663)+_0x1184e8(0x49e),'cDRsQ':_0x1184e8(0x5a7),'AxvcF':function(_0x4bb3d6,_0x37de8f){return _0x4bb3d6>>>_0x37de8f;},'zwylk':function(_0x910e4d,_0x2f6b77){return _0x910e4d===_0x2f6b77;},'tfTVg':function(_0x5298c0,_0x390e06,_0x4d1165){return _0x5298c0(_0x390e06,_0x4d1165);},'kchhV':'KQaPF','yJRXe':function(_0x4f3698,_0x2207ff,_0x1eb0f6){return _0x4f3698(_0x2207ff,_0x1eb0f6);},'gUMPv':function(_0x8a777b,_0x2cb05e){return _0x8a777b+_0x2cb05e;},'lclUZ':'UkVLV','VDrUX':_0x1184e8(0x3d7)+_0x1184e8(0x51f)+_0x1184e8(0x1c6)+_0x1184e8(0x19b),'lFKBL':_0x1184e8(0x4a3)+_0x1184e8(0xf2)+_0x1184e8(0x199),'vMQQP':function(_0x60fac7,_0x425082){return _0x60fac7>_0x425082;},'oVhUj':'1|0|3'+_0x1184e8(0x3f9)+'2','KirVs':function(_0x58c13f,_0x1cb81e){return _0x58c13f+_0x1cb81e;},'hGqrL':function(_0x1e5b5c,_0x371bee){return _0x1e5b5c+_0x371bee;},'iDAFy':function(_0x26a139,_0x50a6a6){return _0x26a139+_0x50a6a6;},'XhEvJ':_0x1184e8(0x238)+_0x1184e8(0x628)+'regis'+'ter\x20','Qffug':_0x1184e8(0x4e0),'LLUlx':_0x1184e8(0x27b),'CfNTW':function(_0x3f77dd,_0x1acafe){return _0x3f77dd+_0x1acafe;},'SmruA':function(_0x1ad915,_0x497e71){return _0x1ad915+_0x497e71;},'IhEFh':function(_0x4b855d,_0x14a904){return _0x4b855d+_0x14a904;},'oUdQX':function(_0x399cf5,_0x47f2b0){return _0x399cf5+_0x47f2b0;},'gEzzG':'\x20regi'+'stere'+'d:\x20','oZACB':'zVTTM','PoctK':function(_0x543edd,_0x379c27){return _0x543edd+_0x379c27;},'MytGO':function(_0xad60b4,_0x2f630b){return _0xad60b4+_0x2f630b;},'aKhZu':function(_0x595a86,_0x559d71){return _0x595a86&&_0x559d71;},'hqdPy':function(_0x279669,_0x43d57b){return _0x279669!==_0x43d57b;},'RrHis':_0x1184e8(0x354),'VxoYg':function(_0x108a68,_0x392838){return _0x108a68&&_0x392838;},'ooxNX':function(_0xf1a97d,_0x451f5d,_0x219246){return _0xf1a97d(_0x451f5d,_0x219246);},'bzxBa':function(_0x34750d,_0x464f88){return _0x34750d+_0x464f88;},'fjWRa':'lDdzE','FUpJD':_0x1184e8(0x36c)+_0x1184e8(0x3bf)+'\x20@','iQDlu':_0x1184e8(0x46e),'VPQOm':_0x1184e8(0x2a0)+'re','rBdTv':_0x1184e8(0x344)+'(sett'+'er\x20ar'+_0x1184e8(0x14e),'HAzcd':function(_0x3d978f,_0x37c970,_0x4f39a4){return _0x3d978f(_0x37c970,_0x4f39a4);},'lJkIB':_0x1184e8(0x344)+_0x1184e8(0x5fc)+'er\x20re'+'t)\x20@','xDjXf':_0x1184e8(0x145)+'Manag'+_0x1184e8(0x3c7),'Zcknk':function(_0x46a995,_0x281e3a,_0x3cf69a){return _0x46a995(_0x281e3a,_0x3cf69a);},'hGuJs':function(_0x2ab069,_0x2b202e){return _0x2ab069+_0x2b202e;},'gyVla':_0x1184e8(0x670)+_0x1184e8(0x550)+_0x1184e8(0x374),'DlZOm':function(_0x17e6cd,_0x276422){return _0x17e6cd<=_0x276422;},'rSqiG':function(_0x346218,_0x4b4ad4){return _0x346218>=_0x4b4ad4;},'wKEjD':'aeirf','yuyga':function(_0x502019,_0x59f898){return _0x502019===_0x59f898;},'AcFcd':'i32','ykPME':function(_0x4f8594,_0x58b53b,_0x5b75cc,_0x18cd8b,_0x21ae92){return _0x4f8594(_0x58b53b,_0x5b75cc,_0x18cd8b,_0x21ae92);},'YGMbc':function(_0x1b98fc,_0x57cff3,_0x33a761,_0xa6a9c5,_0x198a1d){return _0x1b98fc(_0x57cff3,_0x33a761,_0xa6a9c5,_0x198a1d);},'gqTnF':function(_0x1df257,_0x343e08,_0x91e1f4,_0x8355a5,_0x3b94bc){return _0x1df257(_0x343e08,_0x91e1f4,_0x8355a5,_0x3b94bc);},'zZlFn':_0x1184e8(0x4d3),'CvfLV':function(_0x157210,_0x1921f){return _0x157210%_0x1921f;},'cxHlO':_0x1184e8(0x26b),'thCLd':_0x1184e8(0x53f),'WlHtp':function(_0x396f3c){return _0x396f3c();},'pgCRz':'PgMyX','XOETX':function(_0x5a9d25,_0x55c8bb){return _0x5a9d25(_0x55c8bb);},'cuesS':function(_0x10a06e,_0x4c164c){return _0x10a06e!==_0x4c164c;},'lhHEA':function(_0x5027fa,_0xf7465e){return _0x5027fa!==_0xf7465e;},'wIPRB':function(_0x1355ba,_0x17b5be){return _0x1355ba(_0x17b5be);},'EvMoB':function(_0x19a4c3,_0x948614){return _0x19a4c3-_0x948614;},'GLCLN':function(_0x45c80a,_0x34422a){return _0x45c80a(_0x34422a);},'TGZGo':function(_0x21b839,_0xed327c){return _0x21b839(_0xed327c);},'MeEWr':_0x1184e8(0x485)+_0x1184e8(0x500)+'.v1','MSOre':_0x1184e8(0x605),'kMHLu':function(_0x593aaa,_0x30a8cd){return _0x593aaa*_0x30a8cd;},'yxkZs':_0x1184e8(0x4f8),'BFPXV':function(_0x1d4426,_0x4bc9b3){return _0x1d4426+_0x4bc9b3;},'jzFDV':_0x1184e8(0x6b5),'sEGSk':function(_0x474775,_0x3a4b3f,_0x403df7){return _0x474775(_0x3a4b3f,_0x403df7);},'zEJhP':function(_0xdc1240,_0x31a67e,_0x432158){return _0xdc1240(_0x31a67e,_0x432158);},'zQgoF':function(_0x5d13ba,_0x552082){return _0x5d13ba>=_0x552082;},'WPxkx':function(_0x303e49,_0x1f0a00,_0x49004d){return _0x303e49(_0x1f0a00,_0x49004d);},'MrAPw':function(_0x8738ab,_0x57d684,_0x7eb09f){return _0x8738ab(_0x57d684,_0x7eb09f);},'qIHir':function(_0x3ac1b9,_0x1b1114){return _0x3ac1b9+_0x1b1114;},'SXqkP':function(_0x35bf55,_0x56ade4){return _0x35bf55(_0x56ade4);},'vhNPY':_0x1184e8(0x1b3),'VTQpE':function(_0x48df83,_0x58761c,_0x1b020c){return _0x48df83(_0x58761c,_0x1b020c);},'uRSdu':function(_0x59a255,_0x43c3a3){return _0x59a255<_0x43c3a3;},'fqIBX':function(_0x1d1744,_0x4a3a59){return _0x1d1744+_0x4a3a59;},'KEhSq':_0x1184e8(0x1a7)+'onent'+'s\x20sca'+'nned','iudlA':function(_0x41819e){return _0x41819e();},'Yqxza':'Movem'+_0x1184e8(0x49b)+_0x1184e8(0x5c3)+_0x1184e8(0x3bf)+'\x20@','BeuaD':function(_0x42f3fc,_0x5a4bf6){return _0x42f3fc!==_0x5a4bf6;},'jUGHB':function(_0x247883,_0x3280d7,_0x54c944){return _0x247883(_0x3280d7,_0x54c944);},'FtGvH':function(_0x26440f,_0x354b69,_0x179ae9){return _0x26440f(_0x354b69,_0x179ae9);},'tgEPv':function(_0x4bebbc,_0x56501b){return _0x4bebbc+_0x56501b;},'CUfYH':_0x1184e8(0x5af),'JYofJ':_0x1184e8(0x3dc),'BVGQm':_0x1184e8(0x304),'PFBJT':function(_0x451f97,_0x58a8ba){return _0x451f97+_0x58a8ba;},'KJKff':'LCAot','PfwMv':function(_0x3ee6a8,_0xfb0ba6,_0x4d8094){return _0x3ee6a8(_0xfb0ba6,_0x4d8094);},'ZUwXv':function(_0xf000e5,_0x5820dd){return _0xf000e5+_0x5820dd;},'mPluY':_0x1184e8(0x584)+_0x1184e8(0x3a3)+_0x1184e8(0x59d),'iLbCt':function(_0x2f9ad2,_0x14095d){return _0x2f9ad2(_0x14095d);},'mVlKs':_0x1184e8(0x5cf)+'ut-sh'+'ift=','EyWGV':_0x1184e8(0x1bf)+'t=','hADIr':function(_0x1b46c3,_0x24ffde){return _0x1b46c3+_0x24ffde;},'owDWk':function(_0x2445f9,_0x2b076d){return _0x2445f9+_0x2b076d;},'cUOJV':function(_0x4d8537,_0x269dde,_0x432801){return _0x4d8537(_0x269dde,_0x432801);},'BcyUt':function(_0xd6d4d4,_0x24e510){return _0xd6d4d4<_0x24e510;},'jAxtx':_0x1184e8(0x34c),'aGOUA':function(_0xa5a686,_0x8e3ddd,_0xb258e3){return _0xa5a686(_0x8e3ddd,_0xb258e3);},'ruBzK':function(_0x2d2057,_0x59247f,_0xf053b9){return _0x2d2057(_0x59247f,_0xf053b9);},'CmSbm':function(_0x17fa8e,_0x2fa4d0,_0x330d8c){return _0x17fa8e(_0x2fa4d0,_0x330d8c);},'gnuds':function(_0x3b129c,_0x1f13b9,_0x2a843b){return _0x3b129c(_0x1f13b9,_0x2a843b);},'LnfhL':function(_0x40adff,_0x4eaf1e,_0x1e17d7){return _0x40adff(_0x4eaf1e,_0x1e17d7);},'KiYRf':function(_0x39c537,_0x11c22){return _0x39c537!==_0x11c22;},'dbejP':_0x1184e8(0x320),'hUuMI':function(_0x478f00,_0x1fee21,_0x306c17){return _0x478f00(_0x1fee21,_0x306c17);},'CvOiA':function(_0x32748b,_0x459c13,_0xd77c28){return _0x32748b(_0x459c13,_0xd77c28);},'DVbQP':function(_0x3827a5,_0x143c75,_0x3f3192){return _0x3827a5(_0x143c75,_0x3f3192);},'xBoUx':function(_0x373c05,_0x34526c){return _0x373c05!==_0x34526c;},'OHGdm':function(_0x17b1fe,_0x48fb42,_0x293fcc){return _0x17b1fe(_0x48fb42,_0x293fcc);},'HnpmV':_0x1184e8(0x18d),'XXrEd':_0x1184e8(0x1f6),'Lozjp':_0x1184e8(0x31d),'mYZOZ':_0x1184e8(0x41b)+_0x1184e8(0x587)+_0x1184e8(0x3cf)+_0x1184e8(0x518)+'er','CUhtS':function(_0x2a5be3,_0x389b36){return _0x2a5be3+_0x389b36;},'zukPO':_0x1184e8(0x150)+_0x1184e8(0x345)+_0x1184e8(0x283)+_0x1184e8(0x5a1)+_0x1184e8(0x66e)+'ler\x20@','mqJGn':function(_0x2be032,_0xd21e3f){return _0x2be032<_0xd21e3f;},'eeXMZ':function(_0x7977f9,_0x2edcd7,_0x2b603c){return _0x7977f9(_0x2edcd7,_0x2b603c);},'tNcgB':'local'+_0x1184e8(0x345)+'View\x20'+'@','zocvz':_0x1184e8(0x405),'tXNYE':function(_0x550aa8,_0x530921){return _0x550aa8&&_0x530921;},'XEmYN':'shoot'+'er','HoTEP':function(_0x27e410,_0x585407){return _0x27e410(_0x585407);},'YbTqf':function(_0x31f132,_0x3df0cb,_0x1ad4f5){return _0x31f132(_0x3df0cb,_0x1ad4f5);},'yNKmQ':function(_0x25ff88,_0x2c1efc,_0x1967d6){return _0x25ff88(_0x2c1efc,_0x1967d6);},'huPQX':function(_0x4f669d,_0x2c8102){return _0x4f669d&&_0x2c8102;},'uyRQj':_0x1184e8(0x344)+_0x1184e8(0x163)+'eMana'+'ger.s'+'ubscr'+_0x1184e8(0x110)+_0x1184e8(0x4dd)+'@','RRtOR':function(_0x2c02fc,_0x338be7,_0x12a61c){return _0x2c02fc(_0x338be7,_0x12a61c);},'rNjys':function(_0x46f8a4,_0x10aed7){return _0x46f8a4(_0x10aed7);},'VdEol':function(_0x269257,_0x3fee73){return _0x269257/_0x3fee73;},'lewst':function(_0x1c16c4,_0x4d3f5b){return _0x1c16c4*_0x4d3f5b;},'MvVeH':function(_0x373e6c,_0x4c1bee){return _0x373e6c*_0x4c1bee;},'mgpBy':function(_0xf839c,_0x4bffed){return _0xf839c<_0x4bffed;},'gkkSv':function(_0x43ec2d,_0x1299b5){return _0x43ec2d>_0x1299b5;},'jfdXS':function(_0x652556,_0x4c4bb3){return _0x652556*_0x4c4bb3;},'SDdEz':function(_0x4443f0,_0x36c976){return _0x4443f0-_0x36c976;},'xOAOe':function(_0x327258,_0x5545da){return _0x327258>_0x5545da;},'gWjZp':function(_0x4eb5bd,_0x4a7eb7){return _0x4eb5bd<_0x4a7eb7;},'uSfhG':function(_0x5eef00,_0x185f26){return _0x5eef00>_0x185f26;},'bCCDE':function(_0xf94ad8,_0x5934e0){return _0xf94ad8>_0x5934e0;},'sjJuy':function(_0x53dce7,_0x15eb4a){return _0x53dce7/_0x15eb4a;},'VNIhy':function(_0x34d56c,_0x793157){return _0x34d56c*_0x793157;},'Quowu':function(_0x3b4db4,_0x24b014){return _0x3b4db4+_0x24b014;},'ALYPZ':function(_0x1e382e,_0x21ba59){return _0x1e382e*_0x21ba59;},'iWGUe':function(_0x1a33d0,_0x3321df){return _0x1a33d0<=_0x3321df;},'xeGuU':function(_0x12265c,_0x470aaa){return _0x12265c<_0x470aaa;},'zIbfJ':function(_0x4cda2b){return _0x4cda2b();},'EuZXS':'sk-ct'+'l','aIhBL':function(_0xfae76b){return _0xfae76b();},'BavzU':_0x1184e8(0xcd),'IAJvJ':'FIdOA','Iodos':function(_0x4c1085,_0x3961d6){return _0x4c1085(_0x3961d6);},'IwCOc':_0x1184e8(0x591),'DXIVQ':function(_0x54fec9,_0x5d3caa){return _0x54fec9%_0x5d3caa;},'mHrWM':'movem'+'ent\x20m'+'ults\x20'+_0x1184e8(0x1ca)+'ed\x20to'+'\x20','BtXFg':_0x1184e8(0x3d2),'hTdTq':_0x1184e8(0x2b5),'jWnmP':function(_0x51bb7e,_0x54459d){return _0x51bb7e!==_0x54459d;},'rrKEF':function(_0x33d1fc){return _0x33d1fc();},'hIwgv':function(_0x4bcfbc,_0x530e2f){return _0x4bcfbc!==_0x530e2f;},'JBYEL':'HScrp','WuUid':_0x1184e8(0x3b7),'fMaWw':'uMXvG','WLQZt':function(_0x540c90,_0x1cc42d,_0x55d2ec,_0xa36986,_0x31d9a3){return _0x540c90(_0x1cc42d,_0x55d2ec,_0xa36986,_0x31d9a3);},'mowdI':'weapo'+'n\x20tic'+'k\x20thr'+_0x1184e8(0x68a),'fCgPd':function(_0xef8573,_0x32fd48){return _0xef8573+_0x32fd48;},'tXqgJ':'\x20appl'+_0x1184e8(0x4ca),'yIGkY':_0x1184e8(0x62a)+_0x1184e8(0x140),'IiUGj':_0x1184e8(0x313),'QZbOf':function(_0x466788,_0x20ad14){return _0x466788+_0x20ad14;},'vtcUh':function(_0x1c32d1,_0x48f03b){return _0x1c32d1+_0x48f03b;},'TMASF':_0x1184e8(0xb4)+_0x1184e8(0x2b2)+_0x1184e8(0x37b)+'=','UEKsT':function(_0x1d44ea,_0x232ed3){return _0x1d44ea+_0x232ed3;},'udwUP':'\x20fov=','cXARg':function(_0x3fcff5,_0x33b5e6){return _0x3fcff5<_0x33b5e6;},'RzQbD':function(_0x3a1ac9,_0xed3e36){return _0x3a1ac9===_0xed3e36;},'VqqOe':'rgba('+'79,14'+'3,106'+_0x1184e8(0x43f),'Mnkxc':function(_0x361f07,_0x2624f9){return _0x361f07(_0x2624f9);},'HIHrI':function(_0x18709c,_0xa81c41,_0x4d962a,_0x5ac21f,_0x5a3e66,_0x5e390c,_0x43e64b){return _0x18709c(_0xa81c41,_0x4d962a,_0x5ac21f,_0x5a3e66,_0x5e390c,_0x43e64b);},'PNbrT':function(_0x36b51e,_0x2ccf09,_0x23db77,_0x1035e2,_0x5e5a82,_0x4411b9,_0x5361e3){return _0x36b51e(_0x2ccf09,_0x23db77,_0x1035e2,_0x5e5a82,_0x4411b9,_0x5361e3);},'Uobkj':function(_0x549d84,_0x3902ce){return _0x549d84&&_0x3902ce;},'uWhUv':function(_0x25a8ef,_0x2ed6d7){return _0x25a8ef&&_0x2ed6d7;},'xbivA':function(_0x3e162d,_0x5f1c7c){return _0x3e162d-_0x5f1c7c;},'sEmmZ':'rgba('+_0x1184e8(0x546)+'79,19'+_0x1184e8(0x342),'izuKi':'6|3|5'+'|1|4|'+_0x1184e8(0x4a9),'RfyKQ':_0x1184e8(0x341)+_0x1184e8(0x214)+_0x1184e8(0x254),'umIss':function(_0x53455a,_0x2ebe61){return _0x53455a-_0x2ebe61;},'AfcEY':function(_0xb9f1c4,_0x2851c4){return _0xb9f1c4(_0x2851c4);},'mXoJp':'zvQgk','EIXVI':_0x1184e8(0x314)+_0x1184e8(0x66a)+'n','ntPNu':function(_0x5b17ad,_0xeb0ece){return _0x5b17ad!==_0xeb0ece;},'nCFnp':_0x1184e8(0x1b5),'aBYUA':function(_0x4c1dc7,_0x3894f3){return _0x4c1dc7(_0x3894f3);},'YggzI':_0x1184e8(0x4f6)+'n','liWHz':function(_0x918691,_0x321cba){return _0x918691(_0x321cba);},'FGtQd':'15|14'+_0x1184e8(0x425)+'|12|4'+_0x1184e8(0x278)+'|16|5'+'|1|7|'+_0x1184e8(0x196)+_0x1184e8(0x6d1),'qjlSo':_0x1184e8(0x6a5),'DggAP':'sk-sl'+'ider','eUkLF':_0x1184e8(0x118),'PufJN':_0x1184e8(0x1e1),'IYokk':'div','opIhR':function(_0x321d2d,_0x2b6e84){return _0x321d2d+_0x2b6e84;},'gLGoY':_0x1184e8(0x4c3)+_0x1184e8(0x2f4)+'ad','HNQJy':'stron'+'g','hNyfg':_0x1184e8(0x3d8),'ZWLPL':_0x1184e8(0x50c)+'ody','dexDR':_0x1184e8(0x580),'aKJTE':_0x1184e8(0x2f7)+_0x1184e8(0x13c)+'null\x20'+_0x1184e8(0x2ef)+'ng\x20ro'+'om\x20la'+_0x1184e8(0x613),'BtUVg':function(_0x568116,_0xb6b99){return _0x568116===_0xb6b99;},'XgXqK':_0x1184e8(0x424),'oMVmY':'2|0|3'+_0x1184e8(0x2f8),'NkKGQ':function(_0x542a40){return _0x542a40();},'udVwg':'SdleB','pHiXV':function(_0x109a85,_0x24cb8e){return _0x109a85>_0x24cb8e;},'nQGxP':_0x1184e8(0x53c),'NntRN':_0x1184e8(0x533),'bMJlf':_0x1184e8(0x24c)+'l','zSbBg':'sakur'+'a-2v2'+_0x1184e8(0x60c)+_0x1184e8(0x54c),'pghPu':function(_0x19f613,_0x153f0c,_0x1bbf60){return _0x19f613(_0x153f0c,_0x1bbf60);},'enNTV':_0x1184e8(0x2a8)+_0x1184e8(0xfe),'nRuKU':_0x1184e8(0x1e8)+'\x20%','eGZiT':_0x1184e8(0x3e0)+'%','BrVre':'Calib'+'ratio'+'n','fkrAU':_0x1184e8(0x2a2)+'y','GRuUA':_0x1184e8(0x505)+_0x1184e8(0xb4)+'l\x20cap'+'ture','GXvYJ':'\x20msm\x20','oYdVt':'nav','MayEa':_0x1184e8(0x4ec)+'de','bUsYv':_0x1184e8(0x508)+'p','DFczc':'mn-h','NHKiR':'point'+_0x1184e8(0x426)+'n','blkmx':_0x1184e8(0x5ad)+_0x1184e8(0x654)+_0x1184e8(0x265),'DUGMF':_0x1184e8(0x413),'NJNPt':'═══\x20S'+_0x1184e8(0x187)+'\x202V2\x20'+'DIAGN'+'OSTIC'+_0x1184e8(0x1ad),'UJCMP':function(_0x2a957e,_0x23ed21){return _0x2a957e+_0x23ed21;},'fkKif':_0x1184e8(0x6c1)+'\x20','RffRu':function(_0x3d00fb,_0x4f7a95){return _0x3d00fb!==_0x4f7a95;},'WmaEF':_0x1184e8(0x1fb)+':\x20','zyKTU':function(_0x12986f,_0x2767d4){return _0x12986f+_0x2767d4;},'zpnXu':_0x1184e8(0x558)+'MK:\x20','lzlxx':function(_0x3fa947,_0x35a10f){return _0x3fa947+_0x35a10f;},'wGEgP':function(_0x49e856,_0x2ead6b){return _0x49e856+_0x2ead6b;},'MOcUZ':_0x1184e8(0x46c)+'ied','pQswy':function(_0x4a3d92,_0x1d64ad){return _0x4a3d92+_0x1d64ad;},'yGQdW':function(_0x3600db,_0x3db29c){return _0x3600db+_0x3db29c;},'YROjt':'captu'+_0x1184e8(0xdd)+'\x20link'+_0x1184e8(0x2ff),'qydyV':'\x20msm:','MFpkz':_0x1184e8(0x273)+':','wXGcS':function(_0x432fdc,_0x206ae5){return _0x432fdc(_0x206ae5);},'TgcAa':_0x1184e8(0x2d0),'Rzcpc':function(_0x4507d2,_0x14f2c0){return _0x4507d2(_0x14f2c0);},'sprBP':_0x1184e8(0x3a2)+_0x1184e8(0x14a),'HaZCW':function(_0x2f907a,_0x5cb964){return _0x2f907a(_0x5cb964);},'GbDOh':_0x1184e8(0x549)+'ngs:\x20','LfTHt':'═══\x20L'+_0x1184e8(0x6c5),'bjezQ':'shown','CFtro':function(_0x47f220,_0x37e0a1){return _0x47f220(_0x37e0a1);},'sriBg':function(_0x483d74,_0xe07f7f){return _0x483d74===_0xe07f7f;},'cgAid':function(_0x4e5137){return _0x4e5137();},'IIJef':_0x1184e8(0x11b)+'ntent'+'Loade'+'d','fRcvo':function(_0xeb4845,_0x5570e1){return _0xeb4845!==_0x5570e1;},'fjOyt':'.mn-c'+_0x1184e8(0x109),'Xkojw':_0x1184e8(0x16f),'oMrnq':function(_0x50952c){return _0x50952c();},'Yzdod':function(_0x59722f){return _0x59722f();},'AAkXO':function(_0x1e1044,_0x2c1714){return _0x1e1044===_0x2c1714;},'hcKUV':function(_0x2cb03a){return _0x2cb03a();},'WlJGn':_0x1184e8(0x279),'UxTXt':_0x1184e8(0x3ed)+'activ'+'e','IBpgY':'compl'+_0x1184e8(0xc7),'IAoMR':_0x1184e8(0x4e7),'QcICS':function(_0x3632fc,_0x12d324,_0x44662f){return _0x3632fc(_0x12d324,_0x44662f);},'xZRUL':'DOM\x20m'+_0x1184e8(0x5e2)+'faile'+'d:\x20','EldoA':_0x1184e8(0x56f)+'9d','GCsKB':'warn','JEmsJ':function(_0x3edb38,_0x5e1bfa){return _0x3edb38+_0x5e1bfa;},'aKarL':_0x1184e8(0x25a)+'e=','gKDTT':'NESTE'+'D','dfCcQ':'ready','ZcffI':_0x1184e8(0x194)+'docum'+_0x1184e8(0xf9)+'tart)','Otbxs':function(_0x516e7b,_0x5b37ab){return _0x516e7b+_0x5b37ab;},'PWdCV':_0x1184e8(0x698)+'bly-C'+_0x1184e8(0x217)+_0x1184e8(0x352),'AICCu':_0x1184e8(0x3d7)+_0x1184e8(0x51f)+_0x1184e8(0x4a0)+_0x1184e8(0x4c2)+'le.dl'+'l','OdeCt':function(_0x51bac0,_0xf0d4f5,_0x574436,_0x3de771,_0x50f14d,_0x3b2f7c,_0x5661df,_0x5b2ef1){return _0x51bac0(_0xf0d4f5,_0x574436,_0x3de771,_0x50f14d,_0x3b2f7c,_0x5661df,_0x5b2ef1);},'RBWGc':'capLi'+_0x1184e8(0x694),'SCGdS':'Local'+_0x1184e8(0x670)+'rLink'+'er','BKDbh':'Movem'+_0x1184e8(0x49b)+_0x1184e8(0x5c3)+'nager','ZUAcv':_0x1184e8(0x160)+_0x1184e8(0x362)+'rm','pSKhv':_0x1184e8(0x656)+_0x1184e8(0x36d)+_0x1184e8(0x4a1),'PkLhL':function(_0x2543e1,_0x28e885,_0x138703,_0x14c41b,_0x5b6e7c,_0x6e21d1,_0x4199c0,_0x41e143){return _0x2543e1(_0x28e885,_0x138703,_0x14c41b,_0x5b6e7c,_0x6e21d1,_0x4199c0,_0x41e143);},'FgBxN':_0x1184e8(0x17b)+_0x1184e8(0x3f2),'kIFrZ':_0x1184e8(0x171)+_0x1184e8(0x30c),'iVqYJ':_0x1184e8(0x247)+_0x1184e8(0x3d5)+'tRoom','NZtjH':function(_0x6492f4,_0x56564c,_0x15d666,_0x16a189,_0x2f77c5,_0x156efc,_0x318ab1,_0x4f42e5){return _0x6492f4(_0x56564c,_0x15d666,_0x16a189,_0x2f77c5,_0x156efc,_0x318ab1,_0x4f42e5);},'ZFLLf':_0x1184e8(0x240)+'urren'+'tRoom','YUNyB':function(_0x3542ad,_0x453dbb,_0x4a18d0,_0xd2ebee,_0x43d3f9,_0x23c620,_0x215309,_0x20b195){return _0x3542ad(_0x453dbb,_0x4a18d0,_0xd2ebee,_0x43d3f9,_0x23c620,_0x215309,_0x20b195);},'RDtHc':_0x1184e8(0x294)+_0x1184e8(0x161)+'r','EnykY':_0x1184e8(0x4bc),'hHcyk':_0x1184e8(0x189),'hSxbz':_0x1184e8(0x153)+_0x1184e8(0x49a)+'l','KYwiM':_0x1184e8(0xf8),'XgaeP':function(_0x4dbaef,_0x3bdab5){return _0x4dbaef+_0x3bdab5;},'DDcVF':_0x1184e8(0x2da)+'nt','cEgyX':_0x1184e8(0x57c)+_0x1184e8(0x190)+_0x1184e8(0x1b6)+',\x20no\x20'+_0x1184e8(0x58f)+_0x1184e8(0x4e5)+'d','MqUnx':_0x1184e8(0x532),'NDEyr':'UWMK\x20'+_0x1184e8(0x62f)+'\x20','GESHw':function(_0x127cd2,_0x489e11,_0x4b7db4){return _0x127cd2(_0x489e11,_0x4b7db4);},'gBmCx':'INIT\x20'+_0x1184e8(0x238)+_0x1184e8(0x5d0),'OvuII':_0x1184e8(0x59e)+'s','untMB':'posit'+_0x1184e8(0x567)+_0x1184e8(0x210)+_0x1184e8(0x361)+':0;wi'+'dth:1'+_0x1184e8(0x4fc)+_0x1184e8(0x6e3)+'t:100'+_0x1184e8(0x3b6)+_0x1184e8(0xf5)+_0x1184e8(0x262)+_0x1184e8(0x31b)+_0x1184e8(0x21b)+_0x1184e8(0x50a)+'event'+_0x1184e8(0x5a3)+'e','GRpbI':_0x1184e8(0x485)+_0x1184e8(0x411)+'2v2.v'+'1'};if(!/(^|\.)2v2\.io$/['test'](location['hostn'+'ame']||''))return;if(window[_0x1184e8(0x112)+_0x1184e8(0x46d)+_0x1184e8(0xd0)])return;window['__SAK'+'URA_2'+_0x1184e8(0xd0)]=!![];var _0x1aae18=_0x11036f['EldoA'],_0x1e8227=_0x1184e8(0x36a)+'c6',_0x1400d6={'logs':[],'t0':typeof performance!==_0x1184e8(0x5ae)+'ined'&&performance[_0x1184e8(0x19c)]?performance['now']():Date[_0x1184e8(0x19c)](),'add':function(_0x58859e,_0x3187d7){var _0x437713=_0x1184e8;if(_0x11036f['pwNEP'](_0x11036f[_0x437713(0x305)],_0x11036f[_0x437713(0x658)]))try{var _0x10a44c=(_0x11036f['wKVKj'](performance['now'](),_0x1400d6['t0'])/(0x15c5*0x1+-0x1034+-0x1a9))[_0x437713(0x6c7)+'ed'](-0x1f89+0x1739+0x852);_0x1400d6[_0x437713(0xc6)][_0x437713(0x5c0)](_0x11036f[_0x437713(0x3be)](_0x11036f['Vithf']('['+_0x10a44c,_0x11036f['WNHdA']),_0x58859e)+'\x20'+_0x3187d7);if(_0x11036f[_0x437713(0xd7)](_0x1400d6[_0x437713(0xc6)]['lengt'+'h'],0xb84+0x2c1*0x6+-0x19b2))_0x1400d6[_0x437713(0xc6)][_0x437713(0x5b7)]();}catch(_0xb64c33){}else return 0x26a7+-0x581*0x2+-0x151*0x15;}};function _0xa0207b(_0x35f45e,_0x37bb2e){var _0x295e2a=_0x1184e8;_0x1400d6[_0x295e2a(0xdb)](_0x35f45e,_0x37bb2e);}function _0x7e2804(_0x293691){var _0x30ba5c=_0x1184e8;return _0x11036f['cDRsQ']===_0x30ba5c(0x596)?(!_0x2ecce6&&(_0x1dfbe7=!![],_0x4348e6(_0x11036f['KlBBr'],_0x11036f[_0x30ba5c(0x612)](_0x30ba5c(0x40c)+'@',_0x11036f['WlESg'](_0xf8c9e5,_0x101577))+_0x11036f[_0x30ba5c(0x24b)])),0x12bd+-0x247d*0x1+0x11c0):'0x'+_0x11036f[_0x30ba5c(0x640)](_0x293691,0x2f+0x1f7b+-0x1faa)['toStr'+_0x30ba5c(0x175)](-0x52f+-0x1789+0x3*0x998);}['log',_0x1184e8(0x68d),_0x11036f['GCsKB'],'error'][_0x1184e8(0x1e5)+'ch'](function(_0x3f2e99){var _0x19d4ac=_0x1184e8,_0x10372c={'NFzNM':function(_0x508759,_0x56aefa){return _0x11036f['zwylk'](_0x508759,_0x56aefa);},'wVJhq':function(_0x20724c,_0x56a6d3){var _0x2ba74e=_0x55f7;return _0x11036f[_0x2ba74e(0x333)](_0x20724c,_0x56a6d3);},'dzDgI':_0x11036f[_0x19d4ac(0x203)],'bkqEE':'onyid'},_0xd6f01c=console[_0x3f2e99]||function(){};console[_0x3f2e99]=function(){var _0x189f14=_0x19d4ac;try{var _0x354b9b=Array[_0x189f14(0x575)+_0x189f14(0x524)][_0x189f14(0x133)]['call'](arguments),_0x1e74ea=_0x354b9b['map'](function(_0x2c7475){var _0x1d7772=_0x189f14;if(_0x10372c[_0x1d7772(0x437)](typeof _0x2c7475,_0x1d7772(0x5eb)+'g'))return _0x2c7475;if(_0x2c7475&&_0x2c7475[_0x1d7772(0x5e1)+'ge'])return _0x2c7475[_0x1d7772(0x5e1)+'ge'];try{return _0x10372c['wVJhq'](String,_0x2c7475);}catch(_0x3307c3){if(_0x10372c['dzDgI']===_0x10372c[_0x1d7772(0xfa)])_0x519285(_0x3f4c05,0x127d+-0x1*-0x132d+-0x542*0x7,'i32',-0x1fe*0x11+0x8dd*-0x3+0x1017*0x4);else return'?';}})['join']('\x20');/UnityWebModkit|sakura|hook|Hook|signature|CompileError|RuntimeError/i['test'](_0x1e74ea)&&(_0x11036f['zwylk'](_0x189f14(0x6a8),_0x189f14(0x542))?_0x174feb=_0x3098c1['parse'](_0x4b98a3[_0x189f14(0x6b2)+'em'](_0x189f14(0x485)+_0x189f14(0x411)+_0x189f14(0x65d)+'1')||'{}'):_0x11036f[_0x189f14(0x4db)](_0xa0207b,'conso'+'le.'+_0x3f2e99,_0x1e74ea[_0x189f14(0x133)](-0x2651+-0x264+-0x11*-0x265,0xa03+0x1e*-0x98+0x95d)));}catch(_0x519b84){}return _0xd6f01c[_0x189f14(0x264)](console,arguments);};}),window[_0x1184e8(0x6b8)+_0x1184e8(0x2a7)+'stene'+'r'](_0x1184e8(0x11c),function(_0x4a5f90){var _0xc807e2=_0x1184e8;try{_0x11036f['yJRXe'](_0xa0207b,_0xc807e2(0x373)+_0xc807e2(0x3b0)+_0xc807e2(0x2e1),_0x11036f[_0xc807e2(0x3be)](_0x11036f[_0xc807e2(0x3bb)]((_0x4a5f90[_0xc807e2(0x5e1)+'ge']||'?')+'\x20@',String(_0x4a5f90['filen'+'ame']||'')['split']('/')['pop']())+':',_0x4a5f90[_0xc807e2(0x664)+'o']||'?'));}catch(_0x3c97fa){}},!![]),_0xa0207b('boot',_0x11036f[_0x1184e8(0x392)](_0x11036f[_0x1184e8(0x2d5)](_0x11036f[_0x1184e8(0x617)](_0x1184e8(0x285)+'ad\x20st'+_0x1184e8(0x432)+_0x1184e8(0x578)+_0x1184e8(0x16e)+_0x1184e8(0x630),location[_0x1184e8(0x234)+_0x1184e8(0x522)])+_0x11036f[_0x1184e8(0x4c9)]+(window[_0x1184e8(0x30d)]!==window[_0x1184e8(0x10f)]?_0x11036f[_0x1184e8(0xe9)]:'top')+('\x20body'+'='),document[_0x1184e8(0x4bb)]?_0x11036f[_0x1184e8(0x10c)]:_0x11036f['ZcffI'])+('\x20uwmk'+'=')+!!window['Unity'+_0x1184e8(0x404)+'dkit']+(_0x1184e8(0x1c0)+'yInst'+_0x1184e8(0x489)),!!window[_0x1184e8(0x2ca)+'Insta'+'nce']));var _0x1bffe8={'esp':![],'boxes':!![],'names':!![],'health':!![],'team':!![],'lines':![],'scale':0x1,'noRecoil':![],'noSpread':![],'rapidFire':![],'damageValue':0x96,'infAmmo':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'camHeight':1.6,'playerHeight':1.8,'fovOverride':0x0,'safeMode':![],'hookCapture':![],'hookState':![],'hookNoRecoil':![]},_0xf91c49={..._0x1bffe8};try{Object[_0x1184e8(0x2d6)+'n'](_0xf91c49,JSON[_0x1184e8(0x479)](localStorage[_0x1184e8(0x6b2)+'em']('sakur'+_0x1184e8(0x500)+'.v1')||'{}'));}catch(_0x72c880){}function _0x489c9a(){var _0x18b0e1=_0x1184e8;try{localStorage['setIt'+'em'](_0x18b0e1(0x485)+'a.2v2'+_0x18b0e1(0x35a),JSON[_0x18b0e1(0x5eb)+_0x18b0e1(0x2c1)](_0xf91c49));}catch(_0x40fcbf){}}_0xa0207b(_0x1184e8(0x4e7),_0x11036f['Quowu'](_0x11036f['Otbxs'](_0x11036f['CUhtS'](_0x1184e8(0x549)+_0x1184e8(0x593)+_0x1184e8(0x356)+_0x1184e8(0x51d)+'okCap'+'ture=',_0xf91c49['hookC'+_0x1184e8(0x520)+'e'])+('\x20hook'+_0x1184e8(0x224)+'='),_0xf91c49[_0x1184e8(0x3b4)+_0x1184e8(0x103)])+('\x20hook'+'NoRec'+'oil=')+_0xf91c49[_0x1184e8(0x10e)+'oReco'+'il']+(_0x1184e8(0x102)+_0x1184e8(0x3eb)),_0xf91c49['safeM'+_0x1184e8(0x683)]));var _0x14ea93={'uwmk':!!window['Unity'+_0x1184e8(0x404)+_0x1184e8(0x5e9)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'linker':![],'msm':![],'localView':![],'localTransform':![],'charCam':![],'aimManager':![],'room':![],'state':![],'spawner':![],'pieceMgr':![],'worldCamera':0x0,'players':0x0,'lastError':''},_0x476958=null,_0x32e6a1=null,_0x4fbb39={},_0x429d10=0x3a7*0x5+0x1e01+-0x1822*0x2,_0x4fd863=0x12b*-0xf+-0x1363+0x24e8,_0x47dc01=0x161+-0x1fb5*0x1+0x3*0xa1c,_0x4aa3c4=0x1660*-0x1+0x279*0x3+0xef5,_0x272fe0=0x3*-0x29d+-0x1220+0x19f7,_0x50dc42=0x1*-0x1af8+-0x78*-0x3+-0x1990*-0x1,_0x171eac=-0x1e29+-0x2167+0x3f90,_0x1955ea=0xeb0+0x21e5+-0x3095,_0x596fa6=0x977+-0x1248+-0x25*-0x3d,_0x2355f9=0x18e0+-0x121a+0x2*-0x363,_0x2356de=-0x236c+0x32*-0x10+0x268c,_0x13d54d=-0x38f*-0x7+0xd53*0x2+-0x338f,_0x11c230=[],_0x4d8aad=new Map();function _0x404850(_0x5830d3,_0x4aeda1,_0x454617){var _0x1970f2=_0x1184e8,_0x3f7e91=_0x4d8aad['get'](_0x5830d3);!_0x3f7e91&&(_0x3f7e91=new Map(),_0x4d8aad['set'](_0x5830d3,_0x3f7e91));if(!_0x3f7e91[_0x1970f2(0x45d)](_0x4aeda1))try{if('UkVLV'!==_0x11036f[_0x1970f2(0x6c4)])_0x34c36d[_0x1970f2(0x313)]=_0x252276,_0x4da3af();else{var _0xd1e02b=new _0x476958(_0x5830d3)['readF'+'ield'](_0x4aeda1,_0x454617);_0x3f7e91['set'](_0x4aeda1,_0xd1e02b!==undefined?_0xd1e02b['val']():null);}}catch(_0x44fe6){_0x3f7e91[_0x1970f2(0x231)](_0x4aeda1,null);}return _0x3f7e91[_0x1970f2(0x570)](_0x4aeda1);}function _0x51bc0c(_0x9d0d2d,_0x23879a,_0x4cfba4,_0x2d1691){var _0x373a54=_0x1184e8;try{new _0x476958(_0x9d0d2d)['write'+_0x373a54(0x4bd)](_0x23879a,_0x4cfba4,_0x2d1691);}catch(_0x55e3be){}}function _0x59d6bf(_0x794da7,_0x42f53f,_0x59df51,_0x2c1064){var _0x1a1274=_0x404850(_0x794da7,_0x42f53f,_0x59df51);if(_0x1a1274!=null)_0x51bc0c(_0x794da7,_0x42f53f,_0x59df51,_0x1a1274*_0x2c1064);}function _0xc1fb0c(_0x55a2d8,_0x30b7ed,_0xb9293e,_0x45702e,_0x35d041,_0x575a12,_0x65e0f9){var _0x3f342b=_0x1184e8;if(_0x3f342b(0x691)!=='LHYAA')try{var _0x28f277=_0x11036f[_0x3f342b(0x22b)][_0x3f342b(0x155)]('|'),_0x2689b3=-0x2aa+0x12f8*-0x2+0x289a;while(!![]){switch(_0x28f277[_0x2689b3++]){case'0':_0xf19626[_0x3f342b(0x2e9)+'ed']=_0x65e0f9!==![];continue;case'1':var _0xf19626=_0x32e6a1[_0x3f342b(0x599)+'refix']({'typeName':_0x30b7ed,'methodName':_0xb9293e,'params':_0x45702e,'returnType':_0x35d041},_0x575a12);continue;case'2':return _0xf19626;case'3':_0x4fbb39[_0x55a2d8]=_0xf19626;continue;case'4':_0xa0207b(_0x3f342b(0x27b),_0x11036f[_0x3f342b(0x622)](_0x11036f[_0x3f342b(0x2fc)](_0x11036f['hGqrL'](_0x11036f[_0x3f342b(0x2fc)](_0x55a2d8+(_0x3f342b(0x6c8)+_0x3f342b(0x242)+'d:\x20')+_0x30b7ed+'::'+_0xb9293e,'(')+_0x45702e['join'](','),')'),_0x35d041?'\x20->\x20'+_0x35d041:''),_0x3f342b(0x62a)+'led=')+_0xf19626[_0x3f342b(0x2e9)+'ed']);continue;case'5':_0x14ea93['hooks'+_0x3f342b(0x646)]++;continue;}break;}}catch(_0x255290){if(_0x3f342b(0x56c)==='NnDbd'){var _0x3dc81b=_0x5ce786[_0x3f342b(0x4f5)](_0x11036f[_0x3f342b(0x484)],_0x11036f['lFKBL'],[_0x369d7a[_0x3f342b(0x480)+_0x3f342b(0x2ad)+'a']]);if(_0x11036f[_0x3f342b(0x23a)](typeof _0x3dc81b,'numbe'+'r')&&_0x11036f[_0x3f342b(0x57b)](_0x3dc81b,-0x1d4a*0x1+0x45+-0x1d0f*-0x1)&&_0x3dc81b<0x4d1+-0x1acd+0x1*0x16af)return _0x3dc81b;}else return _0x14ea93[_0x3f342b(0x33c)+'rror']=_0x11036f[_0x3f342b(0x3be)](_0x11036f[_0x3f342b(0x5f0)](_0x3f342b(0x494),_0x55a2d8)+':\x20',_0x255290&&_0x255290[_0x3f342b(0x5e1)+'ge']||_0x255290),_0x11036f[_0x3f342b(0x5c8)](_0xa0207b,'hook',_0x11036f['XhEvJ']+_0x55a2d8+':\x20'+_0x14ea93[_0x3f342b(0x33c)+_0x3f342b(0x2e1)]),null;}else _0x12052e('write',_0x11036f[_0x3f342b(0x2fc)](_0x3f342b(0x492)+'n\x20tic'+'k\x20thr'+_0x3f342b(0x68a),_0x3f081d&&_0x33a0bd[_0x3f342b(0x5e1)+'ge']));}function _0x12f1e0(_0x38a9e3,_0x420275,_0xeed178,_0x4ee054,_0x1519d7,_0x27273e,_0x177998){var _0x2ffee8=_0x1184e8,_0x267ee9={'kBTTH':function(_0x539e26,_0x31fedf){return _0x539e26===_0x31fedf;},'MUQDl':_0x2ffee8(0x367)+'t'};try{if(_0x11036f['Qffug']!==_0x2ffee8(0x4e0))_0x267ee9[_0x2ffee8(0xcb)](_0x3bab9c['code'],_0x267ee9[_0x2ffee8(0x1d6)])&&(_0x4530c9['preve'+_0x2ffee8(0x40a)+'ault'](),_0x8e1f12()),_0x3d83bc[_0x2ffee8(0x289)]==='F6'&&(_0x4bb8ef[_0x2ffee8(0x43a)+_0x2ffee8(0x40a)+'ault'](),_0x502ffa());else{var _0x441f2c=('1|3|4'+_0x2ffee8(0x1f7)+'2')[_0x2ffee8(0x155)]('|'),_0x3d59da=-0x25cc+-0x649*-0x3+0x12f1;while(!![]){switch(_0x441f2c[_0x3d59da++]){case'0':_0x14ea93[_0x2ffee8(0x58f)+_0x2ffee8(0x646)]++;continue;case'1':var _0x296355=_0x32e6a1[_0x2ffee8(0x599)+'ostfi'+'x']({'typeName':_0x420275,'methodName':_0xeed178,'params':_0x4ee054,'returnType':_0x1519d7},_0x27273e);continue;case'2':return _0x296355;case'3':_0x296355[_0x2ffee8(0x2e9)+'ed']=_0x177998!==![];continue;case'4':_0x4fbb39[_0x38a9e3]=_0x296355;continue;case'5':_0xa0207b(_0x11036f[_0x2ffee8(0x595)],_0x11036f['CfNTW'](_0x11036f[_0x2ffee8(0x585)](_0x11036f['IhEFh'](_0x11036f['oUdQX'](_0x38a9e3+_0x11036f['gEzzG']+_0x420275,'::')+_0xeed178,'(')+_0x4ee054['join'](','),')')+(_0x1519d7?'\x20->\x20'+_0x1519d7:'')+('\x20enab'+'led='),_0x296355['enabl'+'ed']));continue;}break;}}}catch(_0x3e7a4b){if('bXHWn'===_0x11036f[_0x2ffee8(0x2e5)])_0x12666f[_0x2ffee8(0x2d6)+'n'](_0x16317f,_0x27b5a5[_0x2ffee8(0x479)](_0x79b5df[_0x2ffee8(0x6b2)+'em']('sakur'+_0x2ffee8(0x500)+'.v1')||'{}'));else return _0x14ea93[_0x2ffee8(0x33c)+'rror']=_0x11036f[_0x2ffee8(0x1b9)](_0x11036f[_0x2ffee8(0x513)](_0x11036f['iDAFy'](_0x2ffee8(0x494),_0x38a9e3),':\x20'),_0x3e7a4b&&_0x3e7a4b['messa'+'ge']||_0x3e7a4b),_0xa0207b(_0x11036f['LLUlx'],_0x11036f[_0x2ffee8(0x68b)](_0x2ffee8(0x238)+'D\x20to\x20'+_0x2ffee8(0x222)+_0x2ffee8(0x2eb)+_0x38a9e3,':\x20')+_0x14ea93[_0x2ffee8(0x33c)+_0x2ffee8(0x2e1)]),null;}}var _0x2330e2=()=>![];try{if(window[_0x1184e8(0x3d7)+'WebMo'+_0x1184e8(0x5e9)]&&!_0xf91c49[_0x1184e8(0x142)+_0x1184e8(0x683)]){_0x476958=window[_0x1184e8(0x3d7)+_0x1184e8(0x404)+_0x1184e8(0x5e9)][_0x1184e8(0x581)+_0x1184e8(0x200)+'er'],_0xa0207b('uwmk','Value'+'Wrapp'+_0x1184e8(0x38a)+'quire'+_0x1184e8(0x688)+'eatin'+'g\x20plu'+_0x1184e8(0x64a)),_0x32e6a1=window[_0x1184e8(0x3d7)+_0x1184e8(0x404)+'dkit'][_0x1184e8(0x564)+'me'][_0x1184e8(0x5d5)+'ePlug'+'in']({'name':_0x1184e8(0x37c)+_0x1184e8(0x583),'version':'1.0.0','referencedAssemblies':[_0x11036f[_0x1184e8(0x1d1)],_0x11036f['AICCu']]}),_0xa0207b(_0x1184e8(0xf8),'plugi'+_0x1184e8(0x44e)+'ura2v'+_0x1184e8(0x3b1)+_0x1184e8(0x28a)+_0x1184e8(0x50d)+_0x1184e8(0x58e)+_0x1184e8(0x4ba)+'solve'+_0x1184e8(0x6d8)+_0x1184e8(0x6d0)+'WASM\x20'+_0x1184e8(0x176)+_0x1184e8(0x1dd)+'es');if(_0xf91c49['hookC'+_0x1184e8(0x520)+'e'])_0x11036f[_0x1184e8(0x13e)](_0x12f1e0,_0x11036f['RBWGc'],_0x11036f['SCGdS'],_0x1184e8(0x4bc),['i32'],undefined,(_0x561ef9,_0x4fe33e)=>{var _0x1a8fb8=_0x1184e8;_0x11036f[_0x1a8fb8(0x5bf)](!_0x429d10,_0x4fe33e)&&_0x4fe33e[_0x1a8fb8(0x3ec)]()&&(_0x429d10=_0x4fe33e['val'](),_0x14ea93['linke'+'r']=!![],_0xa0207b('captu'+'re','Local'+'Playe'+_0x1a8fb8(0x667)+_0x1a8fb8(0x3c7)+_0x7e2804(_0x429d10)));},!![]);if(_0xf91c49['hookC'+'aptur'+'e'])_0x12f1e0(_0x1184e8(0x243)+'M',_0x11036f[_0x1184e8(0x178)],_0x1184e8(0x4bc),['i32'],undefined,(_0xd1700d,_0x92c888)=>{var _0x3469cc=_0x1184e8,_0x32a70a={'tCKAv':function(_0x4ecd93,_0x5c199d){var _0x469936=_0x55f7;return _0x11036f[_0x469936(0x465)](_0x4ecd93,_0x5c199d);},'AYDeq':'aria-'+_0x3469cc(0xbf)+'ed','VyijW':_0x3469cc(0x4de)};if(_0x11036f['RrHis']==='aRuVf'){_0x1f21bc[_0x3469cc(0x490)+_0x3469cc(0x2fe)+_0x3469cc(0x257)]();var _0x3d10ae=_0x32a70a[_0x3469cc(0x326)](_0x5e9346[_0x3469cc(0x39d)+_0x3469cc(0x3d9)+'te'](_0x32a70a[_0x3469cc(0x6e2)]),_0x32a70a['VyijW']);_0x12098b['setAt'+_0x3469cc(0x3d9)+'te'](_0x32a70a[_0x3469cc(0x6e2)],_0x51ba32(_0x3d10ae)),_0x354b24(_0x3d10ae);}else _0x11036f[_0x3469cc(0x2bb)](!_0x4fd863,_0x92c888)&&_0x92c888[_0x3469cc(0x3ec)]()&&(_0x4fd863=_0x92c888[_0x3469cc(0x3ec)](),_0x14ea93[_0x3469cc(0x5d8)]=!![],_0x11036f[_0x3469cc(0x368)](_0xa0207b,'captu'+'re',_0x3469cc(0x283)+_0x3469cc(0x49b)+_0x3469cc(0x5c3)+_0x3469cc(0x3bf)+'\x20@'+_0x7e2804(_0x4fd863)));},!![]);if(_0xf91c49[_0x1184e8(0x592)+'aptur'+'e'])_0x11036f[_0x1184e8(0x13e)](_0x12f1e0,_0x11036f[_0x1184e8(0x3e7)],_0x11036f[_0x1184e8(0x290)],'Updat'+_0x1184e8(0xcf)+'lPlay'+'er',['i32'],undefined,(_0x204d71,_0x60e5f3)=>{var _0x32a32b=_0x1184e8;_0x60e5f3&&_0x60e5f3['val']()&&(_0x4aa3c4=_0x60e5f3[_0x32a32b(0x3ec)](),_0x14ea93['local'+_0x32a32b(0x52c)+_0x32a32b(0x3d6)]=!![],_0xa0207b(_0x32a32b(0x2a0)+'re',_0x32a32b(0x150)+_0x32a32b(0x345)+'Trans'+_0x32a32b(0x5d6)+'@'+_0x11036f[_0x32a32b(0x333)](_0x7e2804,_0x4aa3c4)));},!![]);if(_0xf91c49[_0x1184e8(0x592)+_0x1184e8(0x520)+'e'])_0x11036f[_0x1184e8(0xf7)](_0x12f1e0,'capAi'+'m','AimMa'+_0x1184e8(0x3bf),_0x11036f[_0x1184e8(0x53d)],['i32'],undefined,(_0x34a918,_0x45c7d8)=>{var _0x3de03f=_0x1184e8,_0x597b96={'kaoHw':function(_0x192a92,_0x2cc2b7){var _0x21c848=_0x55f7;return _0x11036f[_0x21c848(0x60d)](_0x192a92,_0x2cc2b7);}};if(_0x3de03f(0x499)===_0x11036f[_0x3de03f(0x3c8)])!_0x50dc42&&_0x45c7d8&&_0x45c7d8[_0x3de03f(0x3ec)]()&&(_0x3de03f(0x36b)===_0x3de03f(0x2ce)?(_0x4db8a9['style']['left']=_0x2a4512['x']+'px',_0x5351c4['style'][_0x3de03f(0x30d)]=_0x597b96[_0x3de03f(0x2d3)](_0x518e42['y'],'px'),_0x56efa9[_0x3de03f(0x41e)]['right']=_0x3de03f(0x561),_0x5a8dd4[_0x3de03f(0x41e)][_0x3de03f(0x464)+'m']='auto'):(_0x50dc42=_0x45c7d8[_0x3de03f(0x3ec)](),_0x14ea93[_0x3de03f(0x1e4)+_0x3de03f(0x3bf)]=!![],_0xa0207b(_0x3de03f(0x2a0)+'re',_0x11036f[_0x3de03f(0x5f8)]+_0x11036f['WlESg'](_0x7e2804,_0x50dc42))));else return'?';},!![]);if(_0xf91c49[_0x1184e8(0x3b4)+_0x1184e8(0x103)])_0x12f1e0(_0x11036f['kIFrZ'],'Netwo'+_0x1184e8(0x284)+_0x1184e8(0x467),_0x11036f['iVqYJ'],[_0x1184e8(0x63c),_0x11036f['AcFcd']],undefined,(_0x3572e9,_0x2ae26c,_0x2052d2)=>{var _0x18d53d=_0x1184e8;if(_0x18d53d(0x46e)!==_0x11036f[_0x18d53d(0x5b9)])return!_0x4568aa&&(_0x328636=!![],_0x107cdb(_0x11036f[_0x18d53d(0x4c4)],_0x18d53d(0x58c)+'rs\x20Ma'+'pSche'+_0x18d53d(0x2e4)+_0x362637(_0x50d140)+(_0x18d53d(0x111)+'ed\x20pr'+'obe\x20o'+_0x18d53d(0x37a)+'s\x200x8'+'/0xC/'+_0x18d53d(0x50f)+_0x18d53d(0x6b6)))),-0x2*-0x1093+-0xffa+0x4*-0x44b;else _0x2052d2&&_0x2052d2[_0x18d53d(0x3ec)]()&&(_0x596fa6=_0x2052d2[_0x18d53d(0x3ec)](),_0x14ea93[_0x18d53d(0x552)]=!![],_0xa0207b(_0x11036f['VPQOm'],_0x11036f['rBdTv']+_0x7e2804(_0x596fa6)));},!![]);if(_0xf91c49['hookS'+_0x1184e8(0x103)])_0x11036f[_0x1184e8(0x311)](_0x12f1e0,_0x1184e8(0x171)+_0x1184e8(0x4eb),_0x1184e8(0x346)+_0x1184e8(0x284)+_0x1184e8(0x467),_0x11036f[_0x1184e8(0x1d0)],[_0x1184e8(0x63c)],_0x1184e8(0x63c),_0x4b5e33=>{var _0x23b45c=_0x1184e8;_0x4b5e33&&_0x4b5e33[_0x23b45c(0x3ec)]()&&(_0x23b45c(0x5d2)==='AEhyl'?(_0x596fa6=_0x4b5e33[_0x23b45c(0x3ec)](),_0x14ea93[_0x23b45c(0x552)]=!![],_0x11036f[_0x23b45c(0x48b)](_0xa0207b,_0x11036f[_0x23b45c(0x29b)],_0x11036f['lJkIB']+_0x7e2804(_0x596fa6))):(_0x19fd88['jumpP'+'ct']=_0x789a1b,_0x380dc8()));},!![]);if(_0xf91c49[_0x1184e8(0x3b4)+_0x1184e8(0x103)])_0x11036f['YUNyB'](_0x12f1e0,_0x11036f['RDtHc'],'Piece'+'Manag'+'er','OnEna'+'ble',[_0x1184e8(0x63c)],undefined,(_0x13000f,_0x3a0686)=>{var _0x4b08d1=_0x1184e8;_0x3a0686&&_0x3a0686['val']()&&(_0x1955ea=_0x3a0686['val'](),_0x14ea93['piece'+'Mgr']=!![],_0x11036f['ooxNX'](_0xa0207b,_0x11036f[_0x4b08d1(0x29b)],_0x11036f['xDjXf']+_0x7e2804(_0x1955ea)));},!![]);if(_0xf91c49[_0x1184e8(0x3b4)+_0x1184e8(0x103)])_0x12f1e0(_0x1184e8(0x40f)+'awner',_0x1184e8(0x670)+_0x1184e8(0x550)+_0x1184e8(0x2ba),_0x11036f[_0x1184e8(0x358)],[_0x1184e8(0x63c)],undefined,(_0x25fc5e,_0x278f3c)=>{var _0x53a522=_0x1184e8;_0x278f3c&&_0x278f3c[_0x53a522(0x3ec)]()&&(_0x171eac=_0x278f3c[_0x53a522(0x3ec)](),_0x14ea93[_0x53a522(0x2f9)+'er']=!![],_0x11036f[_0x53a522(0x27d)](_0xa0207b,'captu'+'re',_0x11036f['hGuJs'](_0x11036f[_0x53a522(0x40b)],_0x7e2804(_0x171eac))));},!![]);if(_0xf91c49[_0x1184e8(0x10e)+'oReco'+'il'])_0xc1fb0c(_0x1184e8(0x6db)+_0x1184e8(0x2cb),_0x11036f[_0x1184e8(0x249)],_0x11036f['hSxbz'],[_0x1184e8(0x63c)],undefined,_0x2330e2,!!_0xf91c49['noRec'+_0x1184e8(0x2cb)]);}else _0xa0207b(_0x11036f[_0x1184e8(0x1ff)],_0x11036f['XgaeP'](_0x1184e8(0x38e)+(window[_0x1184e8(0x3d7)+_0x1184e8(0x404)+'dkit']?_0x11036f['DDcVF']:_0x1184e8(0x459)+'NG'),_0xf91c49[_0x1184e8(0x142)+_0x1184e8(0x683)]?_0x11036f[_0x1184e8(0x37d)]:''));}catch(_0xe93547){if(_0x11036f['zwylk']('nKnpb',_0x11036f[_0x1184e8(0xfb)]))_0x14ea93[_0x1184e8(0x33c)+_0x1184e8(0x2e1)]=_0x11036f[_0x1184e8(0x208)]+(_0xe93547&&_0xe93547[_0x1184e8(0x5e1)+'ge']||_0xe93547),_0x11036f['GESHw'](_0xa0207b,_0x11036f['KYwiM'],_0x11036f[_0x1184e8(0x1d8)]+_0x14ea93[_0x1184e8(0x33c)+'rror']);else{if(!_0x2734f2)return null;for(var _0x51d3d3=-0x296+-0x20ee+-0x8e1*-0x4;_0x11036f['DlZOm'](_0x51d3d3,-0x2183+-0x1*0x445+0x2*0x12e6);_0x51d3d3+=0x1f2e+-0x1*0x207d+-0x3*-0x71){var _0x24b9cb=_0x53d502(_0x229127,0x19*-0xdd+0x1fb*-0x13+0x3b42+_0x51d3d3),_0x4bfc99=_0x40e348(_0xe526d2,-0x17*-0x129+-0x7e7+0x8*-0x257+_0x51d3d3);if(_0x24b9cb&&_0x11036f['rSqiG'](_0x4bfc99,-0x2ee+-0x2247+0x27b*0xf)&&_0x4bfc99<=(_0x440d7f||0xe38+0xa9b+0x2bb*-0x9))return{'entries':_0x24b9cb,'count':_0x4bfc99,'shift':_0x51d3d3};}return null;}}function _0x202cee(_0x233f10,_0x107508){var _0x17fa41=_0x1184e8,_0x15c1ca={'kMvLn':_0x17fa41(0x42d)},_0x182cc0=_0x4fbb39[_0x233f10];if(_0x182cc0){if(_0x11036f[_0x17fa41(0x5fd)]!==_0x17fa41(0x394))try{_0x182cc0[_0x17fa41(0x2e9)+'ed']=!!_0x107508;}catch(_0xc97de6){}else{var _0x2b1ad6=new _0x17179e(_0x583a8b)['readF'+'ield'](_0x413cf6,_0x15c1ca['kMvLn']);return _0x2b1ad6?_0x2b1ad6[_0x17fa41(0x3ec)]():0x107*0xb+-0x106b*0x1+0x28f*0x2;}}}function _0x4a9850(_0x4646ff,_0x547df3){var _0x45f6de=_0x1184e8;try{if(_0x11036f[_0x45f6de(0x236)](_0x45f6de(0x651),_0x45f6de(0x651))){var _0x2e84c5=new _0x476958(_0x4646ff)['readF'+'ield'](_0x547df3,_0x45f6de(0x42d));return _0x2e84c5?_0x2e84c5[_0x45f6de(0x3ec)]():-0x34*-0x11+0x224b+-0x25bf*0x1;}else _0x49f94f['scale']=_0x1289f1,_0x484bf5();}catch(_0x44193a){return-0xee9+0x1*-0x20d5+0x2fbe;}}function _0x42f27a(_0x36a43e,_0x470c54){var _0x5d4cc7=_0x1184e8;try{var _0x382cc9=new _0x476958(_0x36a43e)[_0x5d4cc7(0xba)+'ield'](_0x470c54,_0x11036f[_0x5d4cc7(0x38d)]);return _0x382cc9?_0x382cc9[_0x5d4cc7(0x3ec)]():-0xe6+0x9cc+-0x8e6;}catch(_0x9af120){return 0x3*0x877+-0x1*-0x955+-0xe*0x27b;}}function _0x2066b9(_0x313152,_0xb9279d){var _0x4b4c9f=_0x1184e8;if(_0x11036f['yuyga'](_0x4b4c9f(0x18a),_0x4b4c9f(0x18a)))try{var _0x99b6f1=new _0x476958(_0x313152)[_0x4b4c9f(0xba)+'ield'](_0xb9279d,_0x11036f[_0x4b4c9f(0x4aa)]);return _0x99b6f1?_0x99b6f1[_0x4b4c9f(0x3ec)]():-0x17e7*-0x1+0x12e8+-0xd*0x34b;}catch(_0x5c8e4d){return 0x27a*-0x1+-0x80b*-0x1+-0x5f*0xf;}else{_0x11036f[_0x4b4c9f(0x465)](_0x555a52,0x7f0+0x2145+-0x2934)&&(_0x4a7ff8(_0x1ae002,0x3*0x2bd+0xad7+0x116*-0x11,_0x4b4c9f(0x4d3),_0x1f77eb),_0x11036f[_0x4b4c9f(0x652)](_0xd39654,_0x501446,0x20c5+0x1e17+-0x3e38,_0x4b4c9f(0x4d3),_0x2deded),_0x5950bd(_0x74bf46,-0xc*0xcf+0x28d*0x7+0x65*-0x13,'f32',_0x4e5480));_0x11036f[_0x4b4c9f(0x465)](_0x3c0203,-0x2b*0x1f+0x2*-0x41b+0xd6c)&&(_0x45f743(_0xf3d5e5,-0x1*0x16b5+-0x1547+-0x5*-0x8f0,_0x4b4c9f(0x4d3),_0x2cc521),_0xf0ffb0(_0x4d51ba,0x1cfb*-0x1+0xf4*-0x26+0x41eb,'f32',_0x4a20ac));_0x589e7d!==-0x1886+0x6a*0x16+0xf6b&&(_0x11036f['YGMbc'](_0x243c79,_0x342f77,-0xf5d+-0xe5*0x5+0x149a,_0x4b4c9f(0x4d3),_0x58f765),_0x11036f['gqTnF'](_0x301809,_0x47672a,-0xd9e+-0x1a96+-0x1470*-0x2,_0x11036f[_0x4b4c9f(0x1b8)],_0x132720));if(_0x11036f[_0x4b4c9f(0x371)](_0x263b73,-0x1e9*0x2+-0x7c2*-0x1+-0x3eb)===0x1e9d+0x1c5e+-0x3afb)_0x5a7f1f(_0x11036f[_0x4b4c9f(0x2ab)],'movem'+_0x4b4c9f(0x23f)+_0x4b4c9f(0x606)+_0x4b4c9f(0x1ca)+'ed\x20to'+'\x20'+_0x2f53a6(_0xc72156));}}function _0x4adae2(_0x5324ea,_0x4bff91){var _0x2f8a83=_0x1184e8,_0x105f9e={'OkFkR':function(_0x45b9fb){var _0x27b6c3=_0x55f7;return _0x11036f[_0x27b6c3(0x3ac)](_0x45b9fb);}};try{var _0x157fcd=new _0x476958(_0x5324ea)[_0x2f8a83(0xba)+_0x2f8a83(0x5e6)](_0x4bff91,'u8');return _0x157fcd?_0x157fcd['val']():-0x4*0x34a+0x19b+-0xb8d*-0x1;}catch(_0x3d0bad){if(_0x11036f[_0x2f8a83(0x23a)](_0x11036f['pgCRz'],_0x11036f[_0x2f8a83(0x1d5)]))return-0x13a*-0xa+-0x5b3+-0x1*0x691;else _0x26800a['lines']=_0x18ba4b,_0x105f9e[_0x2f8a83(0x12d)](_0x379e5f);}}function _0x140fdf(_0x448d38,_0x3a7cd0){var _0x452ff9=_0x1184e8,_0x46a69b={'VdNSb':function(_0x1f0266,_0x596f06,_0x3647c6){return _0x1f0266(_0x596f06,_0x3647c6);},'btXZy':function(_0x57fa6e,_0x3d3ea2){return _0x57fa6e+_0x3d3ea2;},'ZTFqy':_0x11036f[_0x452ff9(0x65e)],'fgyFW':function(_0x5e55a5,_0x38e0d0){var _0x43f918=_0x452ff9;return _0x11036f[_0x43f918(0x6a0)](_0x5e55a5,_0x38e0d0);}};if(_0x11036f[_0x452ff9(0x53b)](_0x452ff9(0x66f),_0x452ff9(0x657)))try{if(_0x11036f[_0x452ff9(0x610)]('BZnHY','BZnHY'))_0x5d3bdf[_0x452ff9(0x1ba)]=_0x562b7f,_0x380d2f();else{var _0x16a1cd=new _0x476958(_0x448d38)['readF'+'ield'](_0x3a7cd0,'i8');return _0x16a1cd?_0x16a1cd['val']():-0x587*-0x5+-0x26c2+0xb1f;}}catch(_0x46053f){return 0x9*-0x13f+-0x1*-0xeb7+-0x40*0xe;}else _0x5cbd05=_0x5878d0['val'](),_0x38e135['room']=!![],_0x46a69b['VdNSb'](_0x1824cb,_0x452ff9(0x2a0)+'re',_0x46a69b[_0x452ff9(0x13b)](_0x46a69b['ZTFqy'],_0x46a69b[_0x452ff9(0xb3)](_0x785c80,_0x5c7d3c)));}function _0x38bb94(_0x4aefed,_0x15ee44){var _0x5d10e8=_0x1184e8;if(_0x11036f['zwylk']('ZDzvE','GjKkG'))_0x11036f['ooxNX'](_0x316199,_0x5d10e8(0xc2),'deriv'+_0x5d10e8(0xcf)+_0x5d10e8(0xdc)+_0x5d10e8(0x68a)+(_0x4395f5&&_0x4855c4[_0x5d10e8(0x5e1)+'ge']));else try{var _0x12a696=new _0x476958(_0x4aefed)['readF'+_0x5d10e8(0x5e6)](_0x15ee44,'f32');return _0x12a696?_0x12a696[_0x5d10e8(0x3ec)]():-0x3*-0x3cb+0x6b*0x59+-0x3094;}catch(_0x47bc94){return 0xf35*-0x1+0x2199+0x932*-0x2;}}function _0x2f54ac(_0x42897a,_0x5dc3bd){return _0x4a9850(_0x42897a,_0x5dc3bd);}function _0x1361e4(_0x2919e7,_0x5bdb7b){var _0x3cb275=_0x1184e8;return{'x':_0x38bb94(_0x2919e7,_0x5bdb7b),'y':_0x11036f[_0x3cb275(0x5c8)](_0x38bb94,_0x2919e7,_0x5bdb7b+(0x5*0x621+0x5db*-0x3+-0xd10)),'z':_0x11036f['yJRXe'](_0x38bb94,_0x2919e7,_0x5bdb7b+(0x22f4*-0x1+0x2531+0x5*-0x71))};}function _0x2070e8(_0x527fe3,_0x4d4f2d){var _0xf36859=_0x1184e8;if(!_0x527fe3)return null;try{if(_0x11036f[_0xf36859(0x545)]===_0xf36859(0x43e))_0x43939b[_0xf36859(0x29f)+'onten'+'t']=_0x11036f[_0xf36859(0x3ad)](_0x367754,_0x1457f7[_0xf36859(0x2c2)])[_0xf36859(0x6c7)+'ed'](0xc*0x5c+-0x1*-0xfdf+-0x142d)['repla'+'ce'](/\.?0+$/,''),_0x559ab3['style']['setPr'+_0xf36859(0x6e6)+'y'](_0xf36859(0x5b0),_0x11036f['EvMoB'](_0x3e6430[_0xf36859(0x2c2)],_0x3c7c5f)/(_0x1ce5ef-_0x54e6c1)*(0x13af+0x824+-0x1b6f)+'%'),_0x11036f['GLCLN'](_0x40f55b,_0x11036f['TGZGo'](_0x39578f,_0x267ba4[_0xf36859(0x2c2)]));else{var _0x2578d6=_0x11036f['HAzcd'](_0x42f27a,_0x527fe3,0xb*0x26e+-0xde*0x20+0x9*0x1e);if(_0x2578d6<=0x2*0xcae+0x3f3*0x2+-0x2142||_0x2578d6>(_0x4d4f2d||0x1c1e+-0x241f+0x1*0x841))return null;var _0x35bbef=window['Unity'+_0xf36859(0x404)+'dkit']['Runti'+'me'][_0xf36859(0x66c)+'y'](_0x527fe3+(-0x148d+0x2*0x4b1+0xb37),_0x2578d6*(0x1381+0xe48+-0x21c7*0x1)),_0x5deea4='';for(var _0x456ecf=0x19b*0x13+0x79e+-0xcb5*0x3;_0x456ecf<_0x2578d6;_0x456ecf++){var _0x3c7bbe=_0x35bbef[_0x11036f[_0xf36859(0x192)](_0x456ecf,0x12c5+0xc27+-0x6*0x527)]|_0x35bbef[_0x456ecf*(0x587+-0x242f*0x1+-0x1*-0x1eaa)+(-0x1ba5+0x11a3+0xa03)]<<0xc73*0x1+-0xb48*-0x3+-0x2e43;if(_0x11036f[_0xf36859(0x23a)](_0x3c7bbe,0x208e+-0x5*-0x665+-0x4087))break;_0x5deea4+=String['fromC'+'harCo'+'de'](_0x3c7bbe);}return _0x5deea4;}}catch(_0x2d974d){if(_0x11036f[_0xf36859(0x465)](_0x11036f['yxkZs'],_0xf36859(0x4f8)))try{_0x3f2524['setIt'+'em'](_0x11036f[_0xf36859(0x182)],_0x58c181['strin'+'gify'](_0x49f73b));}catch(_0x51c721){}else return null;}}function _0x34bb3c(_0x4a4565){return _0x4a4565?_0x4a9850(_0x4a4565,-0x2ba+-0x103*0x9+-0x1*-0xbe1):0x1*-0x96b+0xb4*-0x2e+0x29c3*0x1;}function _0x1df0c7(_0x3c58ac,_0x3d494a){return _0x3c58ac?_0x11036f['tfTVg'](_0x4a9850,_0x3c58ac,_0x11036f['BFPXV'](0x1*-0x969+0x15*-0x12e+0x223f,_0x3d494a*(-0x3*-0x6aa+-0x1a2f+-0xe3*-0x7))):0x10a*0x1f+0xb99*-0x1+-0x3*0x6df;}function _0x25bdfe(_0x22e929,_0x20c6b6){var _0x27818e=_0x1184e8;if(_0x11036f['jzFDV']===_0x27818e(0x39a)){for(var _0x15cd35 in _0x4b2073)_0x267ee1(_0x15cd35,![]);}else{if(!_0x22e929)return null;for(var _0x1a9dd6=-0x29*0x1e+0x21d9+0x5cf*-0x5;_0x11036f['DlZOm'](_0x1a9dd6,-0x1e7e+-0x263e+-0x2c0*-0x19);_0x1a9dd6+=0x25*-0x99+-0x476+-0x3*-0x8dd){var _0x5313c4=_0x11036f['sEGSk'](_0x4a9850,_0x22e929,0x1a3+-0x1286*-0x1+-0x141d+_0x1a9dd6),_0x19af32=_0x11036f[_0x27818e(0x5a8)](_0x42f27a,_0x22e929,0x20c*0x7+-0x9aa*0x1+-0x1f*0x26+_0x1a9dd6);if(_0x5313c4&&_0x11036f['zQgoF'](_0x19af32,-0x359+0x232a+-0x1fd1)&&_0x19af32<=(_0x20c6b6||-0x1*-0x1976+-0x11bb+-0x17f*0x5))return{'entries':_0x5313c4,'count':_0x19af32,'shift':_0x1a9dd6};}return null;}}function _0x3bfcf5(_0x50ce4b,_0x47a5cd){var _0x36bb11=_0x1184e8,_0x299462=_0x11036f['WPxkx'](_0x25bdfe,_0x50ce4b,_0x47a5cd);if(!_0x299462)return[];var _0x1d9608=[];for(var _0x513647=0x46*-0x2e+-0x3*0x97d+0x290b*0x1;_0x513647<_0x299462['count'];_0x513647++){var _0x5b717e=-0x1778+0xf21+0x867+_0x11036f['kMHLu'](_0x513647,0x142a+0x1506+0x70*-0x5e);if(_0x42f27a(_0x299462['entri'+'es'],_0x5b717e)<0x89e+-0xc1b+0x37d)continue;_0x1d9608[_0x36bb11(0x5c0)](_0x11036f[_0x36bb11(0x260)](_0x4a9850,_0x299462['entri'+'es'],_0x11036f['qIHir'](_0x5b717e,-0x22f5+0x2218+-0x1*-0xe9)));}return _0x1d9608;}function _0x10db4a(_0x2ac60f){var _0x44d4f0=_0x1184e8;try{return new _0x476958(_0x2ac60f)[_0x44d4f0(0x609)+_0x44d4f0(0x276)+'me']();}catch(_0x4752f0){return null;}}function _0x408c4c(_0x16969e,_0x26e610){var _0x3c7a52=_0x1184e8,_0x28d4fa=_0x2f54ac(_0x16969e,0x2604+0x1bea+-0x41c6),_0xf309c7=Math[_0x3c7a52(0x5f7)](_0x11036f['XOETX'](_0x34bb3c,_0x28d4fa),0x103*-0x19+0x1db+-0x74*-0x34);for(var _0x8c8482=-0x2b4+-0x2*0x85f+0x1372;_0x8c8482<_0xf309c7;_0x8c8482++){var _0x2cf9d7=_0x1df0c7(_0x28d4fa,_0x8c8482);if(!_0x2cf9d7)continue;if(_0x11036f['SXqkP'](_0x10db4a,_0x2cf9d7)===_0x26e610)return _0x2cf9d7;}return-0x2272+-0x400*-0x1+0x1e72;}function _0x25c6bb(_0x5a0d03,_0x2ada0f){var _0x25cae3=_0x1184e8;if(!_0x5a0d03)return null;for(var _0x74d16b of[0xc48*0x1+0x1a73*0x1+-0x26b3,-0x1b4f*-0x1+-0xda*-0x13+-0x2b71,0xf71+0x3da+0x3*-0x669,-0x766*0x5+-0x1b0a+0x5d4*0xb]){if(_0x11036f[_0x25cae3(0x2d2)]!=='UsEvY')_0x3eb853['appen'+_0x25cae3(0x478)+'d'](_0x4251bc);else{var _0x332bc0=_0x25bdfe(_0x11036f[_0x25cae3(0x44d)](_0x4a9850,_0x5a0d03,_0x74d16b),_0x2ada0f);if(_0x332bc0)return _0x332bc0;}}return null;}var _0x2d2867=![];function _0x6486ad(){var _0x381bbe=_0x1184e8,_0x56875f={'HnEcW':_0x381bbe(0x3fa)+'|6|4|'+'5|7|1'+'|2','UhWAa':function(_0x4845e5,_0x4ec22b){return _0x4845e5===_0x4ec22b;},'iTHji':function(_0x33daac,_0x4eeb70){var _0x50a314=_0x381bbe;return _0x11036f[_0x50a314(0x192)](_0x33daac,_0x4eeb70);},'fWchE':function(_0x35894c){return _0x11036f['iudlA'](_0x35894c);},'GUDaj':function(_0x20b08f,_0x29abcb){return _0x20b08f+_0x29abcb;},'fTEhp':_0x11036f[_0x381bbe(0x48f)]};if(_0x11036f[_0x381bbe(0xbd)]('XWsFM','XWsFM')){var _0x2fedd2=_0x56875f['HnEcW'][_0x381bbe(0x155)]('|'),_0x2d2b9e=-0x17*0xe5+-0x26b*0x9+0x2a56;while(!![]){switch(_0x2fedd2[_0x2d2b9e++]){case'0':if(_0x56875f['UhWAa'](_0x559db8,_0x2c17a2['w'])&&_0xdc53a9===_0x5c1aa0['h']&&_0xbdb8d4===_0x1c417f['dpr'])return;continue;case'1':_0x25b419['heigh'+'t']=_0x33795b[_0x381bbe(0x1c8)](_0xdc53a9*_0xbdb8d4);continue;case'2':_0x551991['setTr'+_0x381bbe(0x362)+'rm'](_0xbdb8d4,0xd5d*0x2+-0x1b83+0x3*0x43,0x93d*-0x2+-0x50a+-0xbc2*-0x2,_0xbdb8d4,0x51*0x60+-0x1347+-0xb19,0x503+-0x11da+0xcd7);continue;case'3':var _0xbdb8d4=_0x43be8a['devic'+_0x381bbe(0x128)+_0x381bbe(0x59b)+'o']||0x7*-0xa+-0x16*0x13d+0x1*0x1b85;continue;case'4':_0x23dbba['h']=_0xdc53a9;continue;case'5':_0x16cf74[_0x381bbe(0x6e1)]=_0xbdb8d4;continue;case'6':_0x1e757a['w']=_0x559db8;continue;case'7':_0x4179fb[_0x381bbe(0x2de)]=_0x1de31b['round'](_0x56875f['iTHji'](_0x559db8,_0xbdb8d4));continue;case'8':var _0x559db8=_0x5a6560['inner'+_0x381bbe(0x54b)],_0xdc53a9=_0x545296[_0x381bbe(0x2cd)+_0x381bbe(0x121)+'t'];continue;}break;}}else{if(!_0x596fa6)return 0xb*-0x221+-0x11*-0x1f9+0x5*-0x206;var _0x33529a=_0x11036f[_0x381bbe(0x431)](_0x2f54ac,_0x596fa6,-0x17f0+-0x1a40+0x20*0x192);if(!_0x33529a)return!_0x2d2867&&(_0x2d2867=!![],_0x11036f[_0x381bbe(0x1e2)](_0xa0207b,_0x381bbe(0x40c),_0x11036f[_0x381bbe(0x2fc)](_0x11036f[_0x381bbe(0x164)](_0x11036f[_0x381bbe(0x4f0)],_0x7e2804(_0x596fa6)),'\x20+0x1'+'0\x20is\x20'+_0x381bbe(0x41d)+'—\x20wro'+_0x381bbe(0x54a)+_0x381bbe(0x38c)+_0x381bbe(0x613)))),0x6b6+0x2702+-0x2db8;var _0x6d8ac3=_0x2f54ac(_0x33529a,0x8d3+0x1d*-0x6d+-0x99*-0x6);if(!_0x6d8ac3){if(_0x11036f[_0x381bbe(0xbd)](_0x381bbe(0x3dc),_0x11036f[_0x381bbe(0x5ea)])){var _0x4d83ac={'fQcDK':function(_0x54b276,_0x140546){return _0x54b276<_0x140546;}},_0x175b41=_0x227cec['log'];(function(_0x422f4a){for(var _0x57279f=0x1199+-0xa9d*0x2+0x3a1;_0x4d83ac['fQcDK'](_0x57279f,_0x422f4a['lengt'+'h']);_0x57279f++)_0x175b41['call'](_0x4e7cbc,_0x422f4a[_0x57279f]);}(_0x11036f['WlHtp'](_0x1d2cfc)[_0x381bbe(0x155)]('\x0a')));}else return!_0x2d2867&&(_0x2d2867=!![],_0xa0207b('state',_0x11036f['hGqrL']('state'+'@'+_0x7e2804(_0x33529a),_0x381bbe(0x2f7)+_0x381bbe(0x1f2)+_0x381bbe(0x5e4)+')\x20is\x20'+'null\x20'+_0x381bbe(0xb7)+'\x20a\x20My'+_0x381bbe(0x663)+'tate?'))),-0x150*0x4+-0x1534+-0x69d*-0x4;}var _0x8beb87=_0x25c6bb(_0x6d8ac3,0xcd9*-0x2+0x10a*0x25+-0xc80);if(!_0x8beb87){if(_0x11036f[_0x381bbe(0x32d)](_0x381bbe(0x304),_0x11036f['BVGQm'])){var _0x2cecba=_0x11036f['tfTVg'](_0x10ae99,_0x16f007,0x6f7+0x6cf+-0x53*0x2a),_0x2de314=_0x157869['min'](_0x1de4b6(_0x2cecba),0x1*-0x1e4f+0x1461+0xa0e);for(var _0x4ff736=0xeff+-0x2*-0x66e+-0x1bdb;_0x11036f['uRSdu'](_0x4ff736,_0x2de314);_0x4ff736++){var _0x205922=_0x5d9d44(_0x2cecba,_0x4ff736);if(_0x205922)_0x5aacf4[_0x381bbe(0x5c0)](_0x205922);}_0x52dfe8(_0x381bbe(0xc1),_0x11036f[_0x381bbe(0x3cb)](_0x11036f[_0x381bbe(0x392)]('local'+'\x20Coly'+'View\x20'+'@',_0x11036f[_0x381bbe(0x333)](_0x2c0119,_0x51bfb5))+_0x381bbe(0x405),_0x5f11c3[_0x381bbe(0x46f)+'h'])+_0x11036f[_0x381bbe(0x639)]);}else{if(!_0x2d2867){if('MbSBe'!=='AYUdm')_0x2d2867=!![],_0xa0207b(_0x381bbe(0x40c),_0x11036f[_0x381bbe(0x42a)](_0x11036f[_0x381bbe(0x2fc)](_0x381bbe(0x58c)+'rs\x20Ma'+_0x381bbe(0x183)+_0x381bbe(0x2e4),_0x11036f['SXqkP'](_0x7e2804,_0x6d8ac3)),_0x381bbe(0x111)+_0x381bbe(0x400)+_0x381bbe(0x31a)+_0x381bbe(0x37a)+_0x381bbe(0x32f)+'/0xC/'+'0x10/'+'0x14'));else{_0x348237=_0x11f891;if(!_0x4b8063){var _0x302c5a=_0xdc1f55['creat'+_0x381bbe(0x2ee)+_0x381bbe(0x108)](_0x381bbe(0x41e));_0x302c5a['textC'+'onten'+'t']=_0x6574e2,_0x55d7ce['appen'+_0x381bbe(0x478)+'d'](_0x302c5a),_0x305ab8=_0x56875f[_0x381bbe(0x457)](_0x3dc98b),_0x8ee4ce['appen'+_0x381bbe(0x478)+'d'](_0x40ebbb),_0x57f8c6(()=>_0x23e11d[_0x381bbe(0x463)+'List'][_0x381bbe(0xdb)]('shown'));}_0x2cbc59[_0x381bbe(0x463)+_0x381bbe(0x673)]['toggl'+'e']('shown',_0x3bd2c1);if(_0x2ca3fb)_0x56875f[_0x381bbe(0x457)](_0x1d8a5d);}}return-0x1*-0x1a6a+0x24b*0x3+-0x214b;}}return!_0x2d2867&&(_0x11036f['zwylk']('VosEX',_0x11036f[_0x381bbe(0x576)])?(_0x826a2c=_0x10c535['val'](),_0x1c526c[_0x381bbe(0x5d8)]=!![],_0x1d9321('captu'+'re',_0x56875f[_0x381bbe(0x666)](_0x56875f['fTEhp'],_0x397cc5(_0x279f8a)))):(_0x2d2867=!![],_0x11036f[_0x381bbe(0x699)](_0xa0207b,_0x381bbe(0x40c),_0x11036f[_0x381bbe(0x3bb)](_0x11036f['ADcHc'](_0x11036f['ZUwXv'](_0x11036f['lTSmj'](_0x11036f['mPluY'],_0x7e2804(_0x33529a)),'\x20play'+_0x381bbe(0x225)),_0x11036f[_0x381bbe(0x577)](_0x7e2804,_0x6d8ac3)),_0x11036f['mVlKs'])+_0x8beb87['shift']+_0x11036f['EyWGV']+_0x8beb87[_0x381bbe(0x2f5)]))),_0x33529a;}}function _0x52e5f8(){var _0x2e6a49=_0x1184e8,_0x2a0d6c=[];if(!_0x2355f9)return _0x2a0d6c;var _0x5bcb3a=_0x2f54ac(_0x2355f9,0x212c+-0x2c*-0xdd+-0x4718),_0x300399=_0x11036f[_0x2e6a49(0x602)](_0x2f54ac,_0x5bcb3a,0x1*-0x534+-0x1be+0x702),_0xa32d0b=_0x3bfcf5(_0x300399,0x44b+-0xcdc*0x1+0x8d1);for(var _0x473dae=0x249a+-0x1cf6+0x6*-0x146;_0x11036f[_0x2e6a49(0x19e)](_0x473dae,_0xa32d0b['lengt'+'h']);_0x473dae++){if(_0x2e6a49(0x211)===_0x11036f[_0x2e6a49(0x4c0)])_0x17d63a=!![],_0x25471b(_0x11036f['KlBBr'],_0x11036f[_0x2e6a49(0x245)](_0x11036f[_0x2e6a49(0xf3)](_0x11036f[_0x2e6a49(0x6b1)](_0x11036f[_0x2e6a49(0xf3)](_0x11036f[_0x2e6a49(0x1d9)]+_0x1e526d(_0x40c0ea)+(_0x2e6a49(0x4d1)+_0x2e6a49(0x225)),_0x11036f['iLbCt'](_0x4535fb,_0x50d34b))+(_0x2e6a49(0x5cf)+_0x2e6a49(0x246)+'ift='),_0x1195e1[_0x2e6a49(0x5b7)]),_0x11036f[_0x2e6a49(0x12e)]),_0x41a2b0['count']));else{var _0x58a4c8=_0xa32d0b[_0x473dae];if(!_0x58a4c8)continue;var _0x1d200f=_0x11036f[_0x2e6a49(0x28e)](_0x2f54ac,_0x58a4c8,-0x1f33+-0x1*0x1e67+0x3dca);if(!_0x1d200f)continue;var _0x25e9b4=_0x2f54ac(_0x1d200f,-0x1db3+-0x125*-0x1b+-0x124);if(!_0x25e9b4)continue;_0x2a0d6c[_0x2e6a49(0x5c0)]({'ptr':_0x58a4c8,'playerId':_0x11036f[_0x2e6a49(0x6da)](_0x2070e8,_0x2f54ac(_0x58a4c8,-0x3b4+-0x1*-0x272+0x1a*0xd),-0xbd6+0xc*-0x67+0x10ea),'nickname':_0x2070e8(_0x2f54ac(_0x58a4c8,0x186e+0x1*-0x2415+0xbbb),0x1376+-0x245+-0x1111),'health':_0x11036f[_0x2e6a49(0x138)](_0x2066b9,_0x58a4c8,-0xbc7+-0xacb+0x16c6),'shield':_0x11036f[_0x2e6a49(0x6da)](_0x4adae2,_0x58a4c8,-0x474+-0x353*0xb+0x293b),'team':_0x140fdf(_0x58a4c8,-0x1958+0x1a*-0x3+-0xb*-0x25b),'aiming':_0x4adae2(_0x58a4c8,-0x11d7*0x1+0x1834*-0x1+0x1*0x2a49)!==-0x19d4+-0x1bb2+0x3586,'crouching':_0x11036f[_0x2e6a49(0x699)](_0x4adae2,_0x58a4c8,-0x2159+-0x2704+0x489a)!==-0x1dc1+-0x9*-0x12a+0x1347,'pos':{'x':_0x11036f['gnuds'](_0x38bb94,_0x25e9b4,-0x231e+-0x1216+0x3544),'y':_0x11036f['LnfhL'](_0x38bb94,_0x25e9b4,-0x1306*-0x1+0x1f*0x24+-0x9d*0x26),'z':_0x38bb94(_0x25e9b4,0x109*-0x9+0x1457+-0xaee)},'isAlive':_0x4adae2(_0x58a4c8,0x1f5*0x3+0x14a1+-0x1a1c)!==-0x18d7+-0x1493*0x1+0x2d6a});}}return _0x2a0d6c;}function _0x2e64ae(){var _0xa7aa32=_0x1184e8;if(_0x11036f[_0xa7aa32(0x429)](_0x11036f[_0xa7aa32(0x52e)],'arTRO')){var _0x14c61a=_0x52e5f8();if(_0x14c61a[_0xa7aa32(0x46f)+'h']||!_0x171eac)return _0x14c61a;var _0x2e6755=_0x11036f[_0xa7aa32(0x343)](_0x3bfcf5,_0x11036f[_0xa7aa32(0x6d3)](_0x2f54ac,_0x171eac,0x2264+0x170b+-0x13*0x305),-0x126+-0x7*0x2fc+0x3b7*0x6);for(var _0x2fd0d0=0x1a55+-0x172f+-0x326;_0x11036f[_0xa7aa32(0x635)](_0x2fd0d0,_0x2e6755[_0xa7aa32(0x46f)+'h']);_0x2fd0d0++){var _0x4b495c=_0x2e6755[_0x2fd0d0];if(!_0x4b495c)continue;var _0x5495fd=_0x2f54ac(_0x4b495c,-0x3*0x886+0x151b+0x49b);if(!_0x5495fd)continue;var _0xf6e2bf=_0x11036f['CmSbm'](_0x2f54ac,_0x5495fd,-0xdcf+0x2*-0x833+0x1e65);if(!_0xf6e2bf)continue;var _0x2b30d2=_0x11036f['DVbQP'](_0x2f54ac,_0xf6e2bf,-0x1e36+0x2b*0xa1+0x33b);if(!_0x2b30d2)continue;_0x14c61a[_0xa7aa32(0x5c0)]({'ptr':_0x5495fd,'playerId':_0x11036f[_0xa7aa32(0x138)](_0x2070e8,_0x2f54ac(_0x5495fd,0x6c0+-0x26b1+0x2001),0x1988+0x147*0x1b+-0x3bc5),'nickname':_0x2070e8(_0x11036f[_0xa7aa32(0x5a8)](_0x2f54ac,_0x5495fd,-0x2234+0x164b+0x3ff*0x3),0x1f54+0x1*0x7c3+0x26f7*-0x1),'health':_0x11036f[_0xa7aa32(0x4db)](_0x2066b9,_0x5495fd,0x14fc+0x662+-0xb7*0x26),'shield':_0x4adae2(_0x5495fd,0xb4a+-0x4c2+0x1*-0x652),'team':_0x140fdf(_0x5495fd,-0x1*0x1807+-0xf77*-0x2+-0x6a4),'aiming':_0x11036f['xBoUx'](_0x11036f[_0xa7aa32(0x431)](_0x4adae2,_0x5495fd,-0x24db+0x11dd+0x133c),0x1021*-0x1+0x209*0x7+0x1e2),'crouching':_0x11036f['xBoUx'](_0x4adae2(_0x5495fd,0x1420+0x5*-0x73+-0x2*0x8d2),-0x724*0x5+-0x1*-0x1dc4+0x5f0),'pos':{'x':_0x11036f[_0xa7aa32(0x6cb)](_0x38bb94,_0x2b30d2,0x1687+-0x22ba+0xc43),'y':_0x11036f[_0xa7aa32(0x5a8)](_0x38bb94,_0x2b30d2,-0x55*-0x29+-0x2223+0x149a),'z':_0x38bb94(_0x2b30d2,-0xa*-0x2d+0x1528*-0x1+-0x3e6*-0x5)},'isAlive':_0x4adae2(_0x5495fd,-0x16e7+0x1*0x20ce+-0x983)!==0xcc5+-0x1a17*0x1+0xd52});}return _0x14c61a;}else _0x307ab0[_0xa7aa32(0x490)+'ropag'+'ation'](),_0x31e0e1();}var _0x16d866={};function _0x455cab(_0x553566,_0x5e152e){var _0x11a3ef=_0x1184e8;_0x11a3ef(0x215)!==_0x11036f[_0x11a3ef(0x3c9)]?!_0x16d866[_0x553566]&&(_0x11036f[_0x11a3ef(0x389)]===_0x11036f['XXrEd']?(_0x16d866[_0x553566]=!![],_0xa0207b(_0x11036f[_0x11a3ef(0x29b)],_0x5e152e)):(_0x17752e[_0x11a3ef(0x43a)+'ntDef'+_0x11a3ef(0x4f7)](),_0x11d329())):_0x14c58a();}function _0x3f1ca0(){var _0x2a30bc=_0x1184e8,_0xe64a79={'ScKIL':function(_0x33d0d9,_0x16eea6,_0x38bf12){return _0x33d0d9(_0x16eea6,_0x38bf12);}};if(_0x11036f[_0x2a30bc(0x347)]==='bjlPn'){var _0x4a3e39=(_0x2a30bc(0x2d1)+'|7|5|'+_0x2a30bc(0x2aa)+'|9|4')[_0x2a30bc(0x155)]('|'),_0x2f439a=0x2633+0x1*0x1535+-0x2*0x1db4;while(!![]){switch(_0x4a3e39[_0x2f439a++]){case'0':if(_0x47dc01&&!_0x2356de){_0x2356de=_0x11036f['CmSbm'](_0x408c4c,_0x47dc01,_0x11036f[_0x2a30bc(0x134)]);if(_0x2356de)_0x455cab(_0x2a30bc(0x2ec),_0x11036f[_0x2a30bc(0x216)](_0x11036f['zukPO'],_0x7e2804(_0x2356de)));}continue;case'1':if(_0x47dc01&&!_0x11c230[_0x2a30bc(0x46f)+'h']){var _0x5c5a33=_0x2f54ac(_0x47dc01,0x3*-0x2ea+0x5de+0x308),_0x373408=Math['min'](_0x34bb3c(_0x5c5a33),0x11*-0x67+0x1*-0x89e+0xf95);for(var _0x123a12=0x14d8*-0x1+0x20b4+0x1fa*-0x6;_0x11036f[_0x2a30bc(0x19a)](_0x123a12,_0x373408);_0x123a12++){var _0x4b1bb4=_0x11036f[_0x2a30bc(0x562)](_0x1df0c7,_0x5c5a33,_0x123a12);if(_0x4b1bb4)_0x11c230['push'](_0x4b1bb4);}_0x455cab(_0x2a30bc(0xc1),_0x11036f['MytGO'](_0x11036f['tNcgB']+_0x11036f['WlESg'](_0x7e2804,_0x47dc01)+_0x11036f['zocvz']+_0x11c230['lengt'+'h'],_0x2a30bc(0x1a7)+'onent'+_0x2a30bc(0x6af)+_0x2a30bc(0xec)));}continue;case'2':if(_0x11036f[_0x2a30bc(0x2bb)](_0x4fd863,!_0x47dc01))_0x47dc01=_0x11036f['aGOUA'](_0x2f54ac,_0x4fd863,-0xa5c*-0x1+-0x1529+0x39f*0x3);continue;case'3':if(_0x11036f[_0x2a30bc(0x127)](_0x47dc01,!_0x13d54d)){_0x13d54d=_0x11036f[_0x2a30bc(0x138)](_0x408c4c,_0x47dc01,_0x2a30bc(0x4d2)+'hoote'+'r');if(_0x13d54d)_0x455cab(_0x11036f[_0x2a30bc(0xc0)],_0x2a30bc(0x150)+'\x20Coly'+'Shoot'+'er\x20@'+_0x11036f[_0x2a30bc(0x5e5)](_0x7e2804,_0x13d54d));}continue;case'4':if(_0x596fa6&&!_0x2355f9){var _0x31dc1e=_0x6486ad();_0x31dc1e&&(_0x2355f9=_0x31dc1e,_0x14ea93['state']=!![]);}continue;case'5':if(_0x429d10&&!_0x14ea93[_0x2a30bc(0x480)+_0x2a30bc(0x2ad)+'a'])_0x14ea93[_0x2a30bc(0x480)+'Camer'+'a']=_0x2f54ac(_0x429d10,-0xcdb*0x1+-0xd92+0x1a91);continue;case'6':if(_0x11036f['tXNYE'](_0x429d10,!_0x4fd863))_0x4fd863=_0x11036f[_0x2a30bc(0x547)](_0x2f54ac,_0x429d10,-0x1d28+0x2666+-0x922);continue;case'7':if(_0x429d10&&!_0x272fe0)_0x272fe0=_0x2f54ac(_0x429d10,-0x1f2d+-0xf95*-0x1+0xfc4);continue;case'8':if(_0x4fd863&&!_0x4aa3c4)_0x4aa3c4=_0x11036f['yNKmQ'](_0x2f54ac,_0x4fd863,-0x76*-0x2c+-0x1c*-0x7b+-0xb38*0x3);continue;case'9':if(_0x11036f[_0x2a30bc(0x17c)](_0x1955ea,!_0x596fa6)){var _0x146753=_0x2f54ac(_0x1955ea,-0xa49+-0x1b*-0x87+-0x6*0xa4);_0x146753&&(_0x596fa6=_0x146753,_0x14ea93[_0x2a30bc(0x552)]=!![],_0xa0207b(_0x11036f['VPQOm'],_0x11036f['uyRQj']+_0x7e2804(_0x596fa6)));}continue;}break;}}else _0x23aed7[_0x2a30bc(0x29f)+_0x2a30bc(0x637)+'t']='Copie'+_0x2a30bc(0x471),_0xe64a79[_0x2a30bc(0x62c)](_0x2bf5a5,function(){var _0x433ac0=_0x2a30bc;_0x5470ed[_0x433ac0(0x29f)+'onten'+'t']='Copy\x20'+'logs';},0x1c1*0xa+0x5*0x6cd+0x2daf*-0x1);}function _0x398c8c(){var _0x4d46ef=_0x1184e8;if(!_0x4aa3c4)return null;var _0x5ae4e8=_0x11036f[_0x4d46ef(0x2bc)](_0x1361e4,_0x4aa3c4,-0x4c8+-0x1305+-0x2a9*-0x9);if(!_0x5ae4e8||_0x5ae4e8['x']===-0x4c1*0x5+-0x581*0x7+0x3e4c&&_0x11036f[_0x4d46ef(0x23a)](_0x5ae4e8['y'],-0x1a26+-0x1244+0x2c6a)&&_0x5ae4e8['z']===-0x39*-0x79+-0x1*0x169+-0x1988)return null;return{'x':_0x5ae4e8['x'],'y':_0x5ae4e8['y']+(_0x11036f['rNjys'](Number,_0xf91c49['camHe'+'ight'])||-0xb5*-0x17+0x13*-0x174+0xb5a+0.6000000000000001),'z':_0x5ae4e8['z']};}function _0x5bcc5e(){var _0x18cc69=_0x1184e8;if(!_0x272fe0)return null;var _0x131f69=_0x38bb94(_0x272fe0,-0x86*-0xa+0x1498+-0x1*0x19c4),_0x1c46b6=_0x38bb94(_0x272fe0,0x129a+0x55*-0x3d+0x1c3);if(_0x131f69===0x3a9+0xb*0x2bd+-0x10e4*0x2&&_0x1c46b6===-0x8f1+-0x483+0xd74)return null;var _0x2229fd=_0x11036f[_0x18cc69(0x566)](_0x131f69*Math['PI'],-0xc7*-0x23+-0x2439+0x9b8),_0x21b533=_0x11036f['lewst'](_0x1c46b6,Math['PI'])/(0x1ba1+-0x1*-0x1d6e+-0x385b),_0x427e64=_0x11036f[_0x18cc69(0x192)](Math[_0x18cc69(0x1f1)](_0x2229fd),Math[_0x18cc69(0x1f1)](_0x21b533)),_0x40e1cd=-Math['sin'](_0x2229fd),_0x53e9f1=_0x11036f[_0x18cc69(0x455)](Math['cos'](_0x2229fd),Math[_0x18cc69(0x3a9)](_0x21b533)),_0x150ab7=Math['hypot'](_0x427e64,_0x40e1cd,_0x53e9f1);if(_0x11036f['mgpBy'](_0x150ab7,0x1*0x17e9+0x100b+-0x27f4+0.1)||_0x11036f['gkkSv'](_0x150ab7,-0x67c+0x19f3+-0x136d))return null;var _0x3ddab2=-0x8ba*-0x4+0x19eb+-0x3cd3,_0x5c67a5=-0x1af*-0x2+0x1c35+-0x1*0x1f93,_0x708d64=-0x1*0x10d9+0xfe*-0x7+0x17cb,_0x462ca4=0x34f*-0x7+0x41*0x23+0x2*0x723,_0xd6adf8=0xc8c*0x3+0xab6+-0x305a,_0x389ba8=0x1b5d+0x1*-0x4d5+-0x1688;_0x3ddab2=-_0x53e9f1,_0x5c67a5=0x1654*-0x1+-0x1afd+0x3151,_0x708d64=_0x427e64,_0x462ca4=_0x11036f[_0x18cc69(0x158)](_0x5c67a5,_0x53e9f1)-_0x708d64*_0x40e1cd,_0x462ca4=_0x11036f['wKVKj'](_0x5c67a5*_0x53e9f1,_0x708d64*_0x40e1cd),_0xd6adf8=_0x708d64*_0x427e64-_0x3ddab2*_0x53e9f1,_0x389ba8=_0x11036f['SDdEz'](_0x3ddab2*_0x40e1cd,_0x11036f[_0x18cc69(0x452)](_0x5c67a5,_0x427e64));var _0x118c5e=Math[_0x18cc69(0x48e)](_0x462ca4,_0xd6adf8,_0x389ba8);return _0x118c5e>0x1203+-0x54f*-0x7+-0x282*0x16+0.001&&(_0x462ca4/=_0x118c5e,_0xd6adf8/=_0x118c5e,_0x389ba8/=_0x118c5e),{'r':{'x':_0x3ddab2,'y':_0x5c67a5,'z':_0x708d64},'u':{'x':_0x462ca4,'y':_0xd6adf8,'z':_0x389ba8},'f':{'x':_0x427e64,'y':_0x40e1cd,'z':_0x53e9f1}};}function _0x4b73cc(){var _0x26f255=_0x1184e8;if(_0x11036f[_0x26f255(0x5e7)](_0x11036f[_0x26f255(0x10b)](Number,_0xf91c49[_0x26f255(0x193)+_0x26f255(0x61f)+'e']),-0x17f+-0x1*0x15b+0x2da))return Number(_0xf91c49[_0x26f255(0x193)+_0x26f255(0x61f)+'e']);if(_0x50dc42){var _0xd6e152=_0x38bb94(_0x50dc42,-0xc45*0x1+0x106*0x4+-0x21*-0x41);if(_0x11036f[_0x26f255(0x57b)](_0xd6e152,0xef6+0x1adf*-0x1+0xbf3)&&_0x11036f[_0x26f255(0x152)](_0xd6e152,0x787+0x1cda+-0x11d7*0x2))return _0xd6e152;_0xd6e152=_0x38bb94(_0x50dc42,0x2633+0x1*-0x9d+0xc7a*-0x3);if(_0x11036f['uSfhG'](_0xd6e152,-0x1058+0x2630+0x15ce*-0x1)&&_0xd6e152<-0x148f*0x1+0x10b7+0x1*0x48b)return _0xd6e152;}if(_0x32e6a1&&_0x14ea93[_0x26f255(0x480)+_0x26f255(0x2ad)+'a'])try{var _0x1fa617=_0x32e6a1[_0x26f255(0x4f5)](_0x11036f[_0x26f255(0x484)],_0x26f255(0x4a3)+_0x26f255(0xf2)+_0x26f255(0x199),[_0x14ea93['world'+_0x26f255(0x2ad)+'a']]);if(typeof _0x1fa617===_0x26f255(0x252)+'r'&&_0x11036f['bCCDE'](_0x1fa617,0xbd2*-0x1+0x12b*-0x17+0x26b9)&&_0x1fa617<-0x37*0x38+0xb*-0x155+0x1b62*0x1)return _0x1fa617;}catch(_0x4b8c54){}return 0x689*-0x1+0x337+0xb6*0x5;}function _0x3b1a5d(_0x12b37d,_0x33f2ad,_0x3b34c2,_0xd394b4,_0x5711c2,_0x600b3f){var _0x2bfff5=_0x1184e8,_0x1fe6f9=(_0x2bfff5(0xce)+_0x2bfff5(0x6ae)+_0x2bfff5(0x1bd)+'|3|10'+'|2')['split']('|'),_0x24baa0=0x77*0xf+0x9*-0x2+-0x5d*0x13;while(!![]){switch(_0x1fe6f9[_0x24baa0++]){case'0':var _0x57d31a=_0x11036f['VdEol'](_0x309ffd*_0x33ab95,_0x56b365*_0x32ccd7);continue;case'1':var _0x33ab95=_0x11036f[_0x2bfff5(0x24a)](-0x201a+0x119*0x6+0x8b*0x2f,Math['tan'](_0x11036f[_0x2bfff5(0x24a)](_0x11036f[_0x2bfff5(0x24a)](_0x11036f[_0x2bfff5(0x2dc)](_0x600b3f,Math['PI']),0x1*-0x2452+0x1*0x21e5+0x321*0x1),0xb4b+0x17e1*0x1+-0x232a)));continue;case'2':return{'x':(_0x57d31a*(-0xad3*0x2+0x12fb*-0x1+0xd8b*0x3+0.5)+(0x1854+0x10f+-0x1963+0.5))*_0x44a751['w'],'y':(0xdf9+-0x5*0x2c9+-0xb-_0x11036f['Quowu'](_0x1a3f34*(0x27*0x47+-0x1e80+-0x13af*-0x1+0.5),-0x669+-0x1e0b*-0x1+0xa*-0x25d+0.5))*_0x44a751['h'],'depth':_0x56b365};case'3':var _0x1a3f34=_0x11036f['VdEol'](_0x2061a2*_0x33ab95,_0x56b365);continue;case'4':var _0x335e02=_0x12b37d-_0x5711c2['x'],_0x5d7807=_0x11036f['wKVKj'](_0x33f2ad,_0x5711c2['y']),_0x4650de=_0x11036f[_0x2bfff5(0x44c)](_0x3b34c2,_0x5711c2['z']);continue;case'5':var _0x2061a2=_0x11036f[_0x2bfff5(0x23c)](_0x335e02,_0xd394b4['u']['x'])+_0x5d7807*_0xd394b4['u']['y']+_0x11036f[_0x2bfff5(0x452)](_0x4650de,_0xd394b4['u']['z']);continue;case'6':var _0x309ffd=_0x335e02*_0xd394b4['r']['x']+_0x11036f['lewst'](_0x5d7807,_0xd394b4['r']['y'])+_0x4650de*_0xd394b4['r']['z'];continue;case'7':if(_0x11036f[_0x2bfff5(0x5df)](_0x56b365,0x1383+0x1*-0x2482+0x10ff*0x1+0.05))return null;continue;case'8':var _0x32ccd7=_0x44a751['w']/_0x44a751['h'];continue;case'9':var _0x56b365=_0x11036f[_0x2bfff5(0x6dd)](_0x11036f[_0x2bfff5(0x585)](_0x11036f[_0x2bfff5(0x452)](_0x335e02,_0xd394b4['f']['x']),_0x11036f[_0x2bfff5(0x455)](_0x5d7807,_0xd394b4['f']['y'])),_0x4650de*_0xd394b4['f']['z']);continue;case'10':if(_0x11036f[_0x2bfff5(0x56a)](_0x57d31a,-(0x1c7d+0x111e+-0x2d9a+0.30000000000000004))||_0x57d31a>0x2104*-0x1+0x1*0x23f6+0x3*-0xfb+0.30000000000000004||_0x11036f[_0x2bfff5(0x26f)](_0x1a3f34,-(-0x110c+0x272+0xe9b+0.30000000000000004))||_0x1a3f34>-0x40*-0x2e+-0x241f+0x314*0x8+0.30000000000000004)return null;continue;}break;}}function _0x4bff8b(){var _0x1f5dc4=_0x1184e8,_0x4ab781=(_0x1f5dc4(0x270)+_0x1f5dc4(0x2c9)+_0x1f5dc4(0xd3))['split']('|'),_0x1b9c8a=-0x20e*-0xb+-0x39*0x21+-0xf41;while(!![]){switch(_0x4ab781[_0x1b9c8a++]){case'0':if(!_0x421c10)return-0x3*0x212+-0x7*0x46b+0x2523*0x1;continue;case'1':return _0x1df0c7(_0x421c10,_0x3c5c92);case'2':var _0x1b7dbe=_0x11036f['WlESg'](_0x34bb3c,_0x421c10);continue;case'3':var _0x421c10=_0x11036f['yJRXe'](_0x2f54ac,_0x13d54d,0x202c*-0x1+-0x1728+0x1bc6*0x2);continue;case'4':var _0x3c5c92=_0x11036f[_0x1f5dc4(0x4db)](_0x42f27a,_0x13d54d,-0x28f*0xc+0x205a+-0x166);continue;case'5':if(_0x3c5c92<-0x1a*0x6a+0x747+0x2f*0x13||_0x3c5c92>=_0x1b7dbe)return-0x3e8+-0x1198+-0x10*-0x158;continue;case'6':if(!_0x13d54d)return-0xcf*0x25+-0x167*-0x5+-0x16e8*-0x1;continue;}break;}}var _0x576a39=0xb*-0x199+-0x1ae6+0x2c79;setInterval(()=>{var _0x2b0f65=_0x1184e8,_0x31580c={'aEtej':function(_0x5c3341){var _0x1b1b65=_0x55f7;return _0x11036f[_0x1b1b65(0x4b4)](_0x5c3341);},'tMtkV':function(_0x3bbb7f){var _0x34838a=_0x55f7;return _0x11036f[_0x34838a(0x460)](_0x3bbb7f);},'wqWHP':'.mn-c'+_0x2b0f65(0x109),'IVmjK':function(_0x358416,_0x17f8bc){return _0x358416+_0x17f8bc;}};if(_0x11036f[_0x2b0f65(0x381)]!=='jWrPb'){if(!_0x476958||!window[_0x2b0f65(0x2ca)+'Insta'+_0x2b0f65(0x16d)])return;try{_0x3f1ca0();}catch(_0x334da9){_0x11036f[_0x2b0f65(0x416)]==='oGgDH'?(_0x263567[_0x2b0f65(0x490)+_0x2b0f65(0x2fe)+'ation'](),_0x11036f[_0x2b0f65(0x4b4)](_0x5d226e)):_0xa0207b('tick',_0x11036f['ZUwXv'](_0x2b0f65(0x26a)+_0x2b0f65(0xcf)+'l\x20thr'+_0x2b0f65(0x68a),_0x334da9&&_0x334da9[_0x2b0f65(0x5e1)+'ge']));}var _0x275c97=(Number(_0xf91c49['speed'+_0x2b0f65(0xde)])||-0x1*0x117a+-0x1d*0x5b+-0x1c2d*-0x1)/(0x68+0xb*0x1+-0x1*0xf),_0x256233=(_0x11036f[_0x2b0f65(0x6d6)](Number,_0xf91c49['jumpP'+'ct'])||-0x83*0x13+0x1af*0x11+-0x67*0x2e)/(-0x950+0x5*-0x42e+0x1e9a),_0x5352ea=(Number(_0xf91c49['gravi'+_0x2b0f65(0x197)])||-0x1*-0x255f+0x483+-0x5e*0x71)/(-0xa35*0x2+-0x2095*-0x1+0x14f*-0x9);try{if(_0x2356de&&(_0x275c97!==0x100a*0x2+0x77e+0x7*-0x5a7||_0x256233!==-0x5f9*0x1+0x1977+0x1*-0x137d||_0x5352ea!==0x1cf1+-0x25b1+-0x9*-0xf9)){_0x275c97!==-0x143f*0x1+0x8be+0xb82&&(_0x59d6bf(_0x2356de,-0x1fd3+0x1ab1+0x2dd*0x2,_0x2b0f65(0x4d3),_0x275c97),_0x59d6bf(_0x2356de,-0x1*0x1051+0x1ac6+0x167*-0x7,_0x2b0f65(0x4d3),_0x275c97),_0x11036f['ykPME'](_0x59d6bf,_0x2356de,0x1*-0x1c7b+0x9ca*-0x2+0x30b7,'f32',_0x275c97));_0x11036f['lhHEA'](_0x256233,0x2662+-0x241c+-0x1*0x245)&&(_0x11036f['IwCOc']===_0x2b0f65(0x591)?(_0x59d6bf(_0x2356de,-0x98c+-0x13ef+0x1e2f,_0x11036f['zZlFn'],_0x256233),_0x11036f['ykPME'](_0x59d6bf,_0x2356de,-0x3*-0x9ed+0xb*-0x1e7+-0x822,'f32',_0x256233)):(_0x43a74[_0x2b0f65(0x52b)+'ight']=_0x3da281,_0x31580c['aEtej'](_0x1773c6)));_0x5352ea!==-0x1*-0x1d53+-0x1a66+-0x11*0x2c&&(_0x59d6bf(_0x2356de,0x26e0+0x244c+-0x4a68,_0x2b0f65(0x4d3),_0x5352ea),_0x59d6bf(_0x2356de,0xea0+-0x1*-0x1c5f+-0x3d9*0xb,_0x2b0f65(0x4d3),_0x5352ea));if(_0x11036f[_0x2b0f65(0x453)](_0x576a39,-0x10f5+0xf25*-0x1+0x201f)===0x83a+-0xfb9+-0x13*-0x65)_0xa0207b(_0x2b0f65(0x26b),_0x11036f[_0x2b0f65(0x513)](_0x11036f[_0x2b0f65(0x181)],_0x7e2804(_0x2356de)));}}catch(_0x1cf506){if(_0x11036f[_0x2b0f65(0x236)](_0x11036f['BtXFg'],_0x11036f['hTdTq'])){var _0x192bb1=_0xb00c6c[_0x2b0f65(0x5d5)+'eElem'+_0x2b0f65(0x108)](_0x2b0f65(0x67e));return _0x192bb1[_0x2b0f65(0x463)+_0x2b0f65(0x408)]=_0x11036f[_0x2b0f65(0x149)],_0x192bb1[_0x2b0f65(0x41e)][_0x2b0f65(0x2e0)+'xt']=_0x2b0f65(0x42e)+_0x2b0f65(0x322)+_0x2b0f65(0x503)+_0x2b0f65(0x5bb)+':rgba'+'(246,'+_0x2b0f65(0x130)+'42,.6'+');whi'+_0x2b0f65(0x2e2)+_0x2b0f65(0x135)+_0x2b0f65(0x5e8)+_0x2b0f65(0x48d)+_0x2b0f65(0x56d)+'eak:b'+_0x2b0f65(0x5a9)+_0x2b0f65(0x1ef),_0x192bb1['textC'+'onten'+'t']=_0x5b7445,_0x192bb1;}else _0xa0207b(_0x11036f['cxHlO'],_0x2b0f65(0x250)+_0x2b0f65(0x57f)+_0x2b0f65(0x335)+'hrew:'+'\x20'+(_0x1cf506&&_0x1cf506[_0x2b0f65(0x5e1)+'ge']));}try{if(_0x11036f[_0x2b0f65(0x1fd)]('kNart',_0x2b0f65(0x50b))){var _0x2507dd=_0x11036f[_0x2b0f65(0x64b)](_0x4bff8b);if(_0x2507dd){_0xf91c49['noSpr'+'ead']&&(_0x51bc0c(_0x2507dd,-0x10b*-0x13+0x7bb+0x2fc*-0x9,'f32',0x20ec+0x1a5*-0x13+-0x1ad),_0x11036f[_0x2b0f65(0x468)](_0x51bc0c,_0x2507dd,-0x56d+0x16*-0x7f+0x111b,'f32',0x118e+-0x10*-0x8c+-0x1a4e),_0x51bc0c(_0x2507dd,0x132b+-0x26bd+-0xa2d*-0x2,_0x2b0f65(0x4d3),-0x21b1+0x2c5*0xc+0x75),_0x11036f['gqTnF'](_0x51bc0c,_0x2507dd,-0x1*-0x372+-0x12ce*0x1+0x101c,_0x11036f['zZlFn'],0x8e7*-0x1+0x1772+-0xdb*0x11));if(_0xf91c49[_0x2b0f65(0x61a)+_0x2b0f65(0x4af)]||_0x11036f[_0x2b0f65(0x369)](_0xf91c49[_0x2b0f65(0x61a)+'eValu'+'e'],-0x1451+0xf8a+0x55d*0x1)){if(_0x11036f['JBYEL']===_0x11036f['WuUid'])return null;else{var _0x4dc348=Math['max'](0x13a*-0x11+0x77f+0x5a*0x26,Number(_0xf91c49[_0x2b0f65(0x61a)+'eValu'+'e'])||-0x1*-0x1ad+-0x11a9+0x2a*0x65);_0x51bc0c(_0x2507dd,0x24*-0x95+0xeb9+0x6db,_0x2b0f65(0x4d3),_0x4dc348);}}_0xf91c49[_0x2b0f65(0x25e)+'mo']&&_0x51bc0c(_0x2507dd,-0x14c6+0x2*-0x61a+0x21d6,_0x11036f['AcFcd'],0x228b+-0x1*-0x66f+-0x2513);if(_0xf91c49[_0x2b0f65(0x337)+_0x2b0f65(0xc5)]){if(_0x11036f[_0x2b0f65(0x236)]('FXbVo',_0x11036f['fMaWw'])){if(!_0x3df506)return;var _0x420143=_0x181c88[_0x2b0f65(0x4e8)+_0x2b0f65(0x6c9)+'tor'](_0x2b0f65(0x349)+_0x2b0f65(0x109));if(_0x420143){var _0x4212ed=_0x31580c[_0x2b0f65(0x63a)](_0x50a1cb),_0x446805=_0x4212ed['query'+'Selec'+_0x2b0f65(0x4cc)](_0x31580c[_0x2b0f65(0x674)])['child'+'ren'];_0x420143['repla'+_0x2b0f65(0x20c)+_0x2b0f65(0x61c)](..._0x446805),_0x1475aa[_0x2b0f65(0x27e)+_0x2b0f65(0x402)](_0x11d553['x'])&&(_0x540fc6['style'][_0x2b0f65(0x45b)]=_0x31580c[_0x2b0f65(0x3ff)](_0x2e5073['x'],'px'),_0x13e33e[_0x2b0f65(0x41e)][_0x2b0f65(0x30d)]=_0x31580c[_0x2b0f65(0x3ff)](_0x3a17d3['y'],'px'));}}else _0x11036f[_0x2b0f65(0x468)](_0x59d6bf,_0x2507dd,0x19e7+-0x1*0x58d+-0x1*0x13ca,_0x2b0f65(0x4d3),-0x1f*0xc5+-0x16*0xa8+0x264b+0.1),_0x11036f[_0x2b0f65(0x1da)](_0x51bc0c,_0x2507dd,0x1a84+0x1aff*0x1+-0x34f7,'f32',-(0x7d*-0x28+0x1*-0x1129+-0x4*-0xa26));}}}else _0x49db02[_0x2b0f65(0x231)](_0xd99dc4,null);}catch(_0x21e80a){_0xa0207b(_0x11036f['cxHlO'],_0x11036f['mowdI']+(_0x21e80a&&_0x21e80a[_0x2b0f65(0x5e1)+'ge']));}_0x576a39++;}else try{var _0x1626dc=new _0x30db16(_0x2cc52d)['readF'+_0x2b0f65(0x5e6)](_0x7f12d5,'u8');return _0x1626dc?_0x1626dc['val']():0x13fe+0x86*0x1+0x2*-0xa42;}catch(_0x2ad2a5){return-0x1ead+-0x1*0x631+0x35a*0xb;}},-0x184c+0x550+0x16*0xe6),setInterval(()=>{var _0x14e8c1=_0x1184e8;_0x14ea93['gameL'+_0x14e8c1(0x356)]=!!window['unity'+_0x14e8c1(0x4fd)+'nce'];try{var _0x18f03c=-0x1220+0x373*0x2+-0x1*-0xb3a;for(var _0x577aae in _0x4fbb39){if(_0x4fbb39[_0x577aae]&&_0x4fbb39[_0x577aae][_0x14e8c1(0x1ca)+'ed'])_0x18f03c++;}_0x14ea93['hooks'+'Ok']=_0x18f03c;if(_0x14ea93[_0x14e8c1(0x58f)+_0x14e8c1(0x646)]&&!_0x14ea93[_0x14e8c1(0x4cb)+_0x14e8c1(0x330)+'ed']){_0x14ea93['_hook'+_0x14e8c1(0x330)+'ed']=!![];for(var _0x4c7d8e in _0x4fbb39){var _0x3076c4=_0x4fbb39[_0x4c7d8e];_0xa0207b(_0x11036f[_0x14e8c1(0x595)],_0x11036f[_0x14e8c1(0x4b3)](_0x11036f['SmruA'](_0x4c7d8e+_0x11036f['tXqgJ'],!!_0x3076c4[_0x14e8c1(0x1ca)+'ed']),_0x11036f[_0x14e8c1(0x47c)])+!!_0x3076c4['enabl'+'ed']);}}}catch(_0x48bfc2){}_0x14ea93[_0x14e8c1(0x58c)+'rs']=_0x2355f9?_0x11036f[_0x14e8c1(0x64b)](_0x2e64ae)[_0x14e8c1(0x46f)+'h']:-0x10b4+0x1bc9*0x1+-0xb15;},0x2*-0x10b0+0xb7c+0x4*0x673);var _0x36c6f3=![];function _0xfa88d8(){var _0x4381f3=_0x1184e8;if(!_0xf91c49['esp']||!_0xf91c49[_0x4381f3(0x1ba)])return;var _0x4b04c0=_0x5bcc5e(),_0x103bb2=_0x398c8c();if(!_0x4b04c0||!_0x103bb2){!_0x36c6f3&&(_0x36c6f3=!![],_0xa0207b(_0x11036f['IiUGj'],_0x11036f[_0x4381f3(0x5e0)](_0x11036f[_0x4381f3(0x58b)]('no\x20ca'+_0x4381f3(0x119)+_0x4381f3(0x47a)+_0x4381f3(0x4ab)+_0x4381f3(0x3ae),_0x7e2804(_0x272fe0))+_0x11036f[_0x4381f3(0x4d8)],_0x7e2804(_0x4aa3c4))));return;}var _0x5c2c9a=_0x4b73cc(),_0x140788=_0x11036f[_0x4381f3(0x460)](_0x2e64ae),_0x163da5=_0x47dc01?_0x2f54ac(_0x47dc01,0x1aee+-0xad3+-0xff7):-0x98*0x13+0x41d+-0x5*-0x16f;!_0x36c6f3&&(_0x36c6f3=!![],_0x11036f['WPxkx'](_0xa0207b,_0x4381f3(0x313),_0x11036f[_0x4381f3(0x2d5)](_0x11036f[_0x4381f3(0x3be)](_0x11036f['fCgPd'](_0x4381f3(0x19f)+_0x4381f3(0x5c5)+_0x4381f3(0x282)+'mPos=',JSON[_0x4381f3(0x5eb)+_0x4381f3(0x2c1)](_0x103bb2))+_0x11036f['udwUP']+_0x5c2c9a[_0x4381f3(0x6c7)+'ed'](-0x2485*0x1+0x6*-0x1ee+0x301a),_0x4381f3(0x4d1)+_0x4381f3(0x3af)),_0x140788['lengt'+'h'])+('\x20basi'+'s.f=')+JSON[_0x4381f3(0x5eb)+_0x4381f3(0x2c1)](_0x4b04c0['f'])));for(var _0xb74118=0x1121*-0x1+-0x4*0x949+-0x3645*-0x1;_0x11036f[_0x4381f3(0x1f3)](_0xb74118,_0x140788[_0x4381f3(0x46f)+'h']);_0xb74118++){var _0x44195e=_0x140788[_0xb74118];if(!_0x44195e[_0x4381f3(0x5f9)])continue;if(_0x163da5&&_0x11036f[_0x4381f3(0x23a)](_0x44195e['ptr'],_0x163da5))continue;var _0x1215bd=_0x11036f[_0x4381f3(0x6cc)](_0x44195e[_0x4381f3(0x521)],-0x1*0x23cd+-0x1f05+0x42d2)?_0x11036f[_0x4381f3(0x1a9)]:_0x4381f3(0x341)+'255,1'+_0x4381f3(0x3aa)+_0x4381f3(0x679)+')',_0x44852d=_0x11036f[_0x4381f3(0x4be)](Number,_0xf91c49[_0x4381f3(0x512)])||-0xa7*0x10+-0xd6f+-0x17e0*-0x1,_0x52dfa4=_0x11036f[_0x4381f3(0x675)](_0x3b1a5d,_0x44195e[_0x4381f3(0x5f9)]['x'],_0x44195e[_0x4381f3(0x5f9)]['y'],_0x44195e[_0x4381f3(0x5f9)]['z'],_0x4b04c0,_0x103bb2,_0x5c2c9a),_0x363124=_0x11036f[_0x4381f3(0x621)](_0x3b1a5d,_0x44195e[_0x4381f3(0x5f9)]['x'],_0x11036f['PFBJT'](_0x44195e[_0x4381f3(0x5f9)]['y'],Number(_0xf91c49['playe'+_0x4381f3(0x6bc)+'ht'])||0x55d+-0x1bb8+-0x6a*-0x36+0.8),_0x44195e['pos']['z'],_0x4b04c0,_0x103bb2,_0x5c2c9a);if(_0x11036f[_0x4381f3(0x23e)](!_0x52dfa4,!_0x363124))continue;if(_0x11036f[_0x4381f3(0x446)](_0x52dfa4,_0x363124)){var _0x2acbaa=Math[_0x4381f3(0x5f7)](_0x52dfa4['y'],_0x363124['y']),_0xd79953=Math[_0x4381f3(0x5f4)](-0x23c8+0x5a0+0x1e2c,Math['abs'](_0x11036f[_0x4381f3(0x295)](_0x52dfa4['y'],_0x363124['y']))*_0x44852d),_0x3ec732=Math[_0x4381f3(0x5f4)](0x1c73*0x1+-0x9f*-0x2a+0x1*-0x3683,_0xd79953*(0x17d*-0x16+-0xe6e+0x2f2c+0.45)*_0x44852d);if(_0xf91c49[_0x4381f3(0x521)])_0x42877c['strok'+_0x4381f3(0x286)+'e']=_0x1215bd;else _0x42877c['strok'+_0x4381f3(0x286)+'e']=_0x11036f[_0x4381f3(0x421)];_0x42877c[_0x4381f3(0xe1)+'idth']=0x5*-0x377+-0x76d+0x18c2,_0x42877c['strok'+_0x4381f3(0x26e)](_0x52dfa4['x']-_0x3ec732/(0xa45*-0x1+0x4*-0x24f+0x1383),_0x2acbaa,_0x3ec732,_0xd79953);if(_0xf91c49[_0x4381f3(0x68e)+'h']&&(_0x11036f[_0x4381f3(0x680)](_0x44195e[_0x4381f3(0x68e)+'h'],-0x1102*-0x2+0xf53*0x2+0x3e*-0x10b)||_0x44195e[_0x4381f3(0x25d)+'d']>0x4f3+-0x14f*-0x13+-0x6a*0x48)){var _0x2d8a00=_0x11036f['izuKi']['split']('|'),_0x289fd1=-0xa99+-0x3a9*-0x7+-0xf06;while(!![]){switch(_0x2d8a00[_0x289fd1++]){case'0':_0x42877c[_0x4381f3(0xe1)+'idth']=0x1d06+0x240b*-0x1+0x706;continue;case'1':_0x42877c[_0x4381f3(0x42b)+_0x4381f3(0x223)](_0x52dfa4['x']-_0x3ec732/(-0x7*0x39a+-0x404*0x5+0x2d4c),_0x2acbaa-(0xa*-0x303+-0x24ce+0x386*0x13),_0x8f3bff,0x1e38+-0x14e+-0x1b*0x112);continue;case'2':_0x42877c[_0x4381f3(0x4ea)+'eRect'](_0x52dfa4['x']-_0x3ec732/(-0x1ca9+-0x22e8+0x4b*0xd9),_0x2acbaa-(0x71*-0x3b+0x1*-0xf38+-0xdc3*-0x3),_0x3ec732,-0x2d*-0x1+-0x15fe+-0x17*-0xf3);continue;case'3':var _0x8f3bff=_0x3ec732*(_0x3a59b9/(0x529+-0x16a4+0x5*0x393));continue;case'4':_0x42877c['strok'+_0x4381f3(0x286)+'e']=_0x11036f['RfyKQ'];continue;case'5':_0x42877c['fillS'+_0x4381f3(0x3da)]='rgba('+'255,1'+'10,11'+_0x4381f3(0x32e);continue;case'6':var _0x3a59b9=Math['max'](0x4d*-0x3b+0xb0e+0x6b1,Math[_0x4381f3(0x5f7)](-0x20ea+-0x14b7+0x1*0x3605,_0x44195e[_0x4381f3(0x68e)+'h']+_0x44195e[_0x4381f3(0x25d)+'d']));continue;}break;}}_0xf91c49[_0x4381f3(0x539)]&&_0x44195e['nickn'+_0x4381f3(0x522)]&&(_0x42877c[_0x4381f3(0x52a)+_0x4381f3(0x3da)]=_0x4381f3(0x341)+'255,2'+'35,24'+_0x4381f3(0x2d8),_0x42877c['font']='11px\x20'+'ui-sa'+'ns-se'+_0x4381f3(0x2a5)+_0x4381f3(0x61d)+_0x4381f3(0x45f)+'ans-s'+'erif',_0x42877c[_0x4381f3(0x1f4)+'lign']='cente'+'r',_0x42877c[_0x4381f3(0x31e)+'ext'](_0x44195e['nickn'+_0x4381f3(0x522)],_0x52dfa4['x'],_0x11036f[_0x4381f3(0x2b9)](_0x2acbaa,0xadf+-0x6*-0x22d+-0x17e3))),_0xf91c49[_0x4381f3(0x2d4)]&&(_0x42877c['begin'+'Path'](),_0x42877c[_0x4381f3(0x59a)+'o'](_0x44a751['w']/(0x9f9+-0x193a+0xf43),_0x44a751['h']),_0x42877c[_0x4381f3(0x4b5)+'o'](_0x52dfa4['x'],_0x2acbaa),_0x42877c[_0x4381f3(0x4ea)+_0x4381f3(0x286)+'e']=_0x1215bd,_0x42877c['lineW'+'idth']=-0x6*-0x5c4+-0x9a7+0x18f*-0x10,_0x42877c['setLi'+_0x4381f3(0x427)+'h']([-0x1d8a+0x39d+0x19f2,0x20f9+-0x3*-0x665+-0x3423]),_0x42877c[_0x4381f3(0x4ea)+'e'](),_0x42877c[_0x4381f3(0x515)+_0x4381f3(0x427)+'h']([]));}}}function _0x20e7ae(){var _0x199891=_0x1184e8;_0x11036f[_0x199891(0x2c0)](requestAnimationFrame,_0x20e7ae),_0x1a36ad(),_0x42877c[_0x199891(0x4b2)+_0x199891(0x303)](-0x731*-0x1+0x13fb+-0x1b2c,0x18e5+-0xe*0x269+-0x2f3*-0x3,_0x44a751['w'],_0x44a751['h']);if(!_0xf91c49['safeM'+'ode'])_0xfa88d8();}var _0x9d14e1=document['creat'+'eElem'+_0x1184e8(0x108)](_0x11036f['OvuII']);_0x9d14e1[_0x1184e8(0x41e)][_0x1184e8(0x2e0)+'xt']=_0x11036f['untMB'];var _0x42877c=_0x9d14e1['getCo'+_0x1184e8(0x668)]('2d'),_0x44a751={'w':0x0,'h':0x0,'dpr':0x0};function _0x1a36ad(){var _0x50997c=_0x1184e8;if('zvQgk'!==_0x11036f[_0x50997c(0xd8)])_0x1fec2e(_0x311504,-0xb4c+-0x5fe*0x1+0x120e,'f32',_0x4ef8cf),_0x321a6f(_0x5d8bb1,0x11*-0x197+-0x1834+-0x81*-0x67,_0x50997c(0x4d3),_0x568c3a);else{var _0x4723e4=window[_0x50997c(0x448)+'ePixe'+'lRati'+'o']||0x24a0+0x1*-0x1a74+-0xa2b*0x1,_0x1e324e=window[_0x50997c(0x2cd)+_0x50997c(0x54b)],_0x2ee28f=window['inner'+_0x50997c(0x121)+'t'];if(_0x1e324e===_0x44a751['w']&&_0x2ee28f===_0x44a751['h']&&_0x4723e4===_0x44a751[_0x50997c(0x6e1)])return;_0x44a751['w']=_0x1e324e,_0x44a751['h']=_0x2ee28f,_0x44a751['dpr']=_0x4723e4,_0x9d14e1[_0x50997c(0x2de)]=Math[_0x50997c(0x1c8)](_0x1e324e*_0x4723e4),_0x9d14e1[_0x50997c(0x6e3)+'t']=Math[_0x50997c(0x1c8)](_0x11036f[_0x50997c(0x452)](_0x2ee28f,_0x4723e4)),_0x42877c[_0x50997c(0x526)+_0x50997c(0x362)+'rm'](_0x4723e4,-0x3*0x851+-0x189+0x1a7c,0x1*0x1625+0x2346+-0x396b*0x1,_0x4723e4,-0xb*-0x287+-0xd8a+-0xe43,-0x1f*0xbc+0x2470+-0xdac);}}var _0x14c28c=document[_0x1184e8(0x5d5)+'eElem'+'ent'](_0x11036f['IYokk']);_0x14c28c['id']='sakur'+'a-ui-'+'2v2',_0x14c28c['style']['cssTe'+'xt']=_0x1184e8(0x22a)+_0x1184e8(0x567)+'ixed;'+_0x1184e8(0x361)+_0x1184e8(0x618)+_0x1184e8(0xf5)+_0x1184e8(0x262)+_0x1184e8(0x31b)+'7;poi'+'nter-'+_0x1184e8(0x4c7)+'s:non'+'e;';var _0x46e292=_0x14c28c[_0x1184e8(0x39c)+_0x1184e8(0xc8)+'ow']({'mode':_0x1184e8(0x43c)}),_0x3fedf9=![],_0x3a0e32={};try{_0x3a0e32=JSON[_0x1184e8(0x479)](localStorage['getIt'+'em'](_0x11036f[_0x1184e8(0x5f1)])||'{}');}catch(_0x4a9981){}function _0xc4116c(_0xbb9599){var _0x1d03f5=_0x1184e8,_0x36abfd=document['creat'+_0x1d03f5(0x2ee)+_0x1d03f5(0x108)]('span');return _0x36abfd['setAt'+'tribu'+'te'](_0x11036f['EIXVI'],_0x1d03f5(0x4de)),_0x36abfd[_0x1d03f5(0x2cd)+'HTML']='<svg\x20'+_0x1d03f5(0x174)+'ox=\x220'+_0x1d03f5(0x35c)+'\x2024\x22>'+_0xbb9599+('</svg'+'>'),_0x36abfd;}function _0x51fffd(_0x2e733b,_0x40cdc7){var _0x473992=_0x1184e8,_0x8a9072=document['creat'+_0x473992(0x2ee)+'ent']('butto'+'n');return _0x8a9072[_0x473992(0x524)]=_0x11036f[_0x473992(0x296)],_0x8a9072[_0x473992(0x463)+'Name']=_0x473992(0x40d)+_0x473992(0x2a6),_0x8a9072['setAt'+_0x473992(0x3d9)+'te']('role',_0x473992(0x1c4)+'h'),_0x8a9072[_0x473992(0x165)+_0x473992(0x3d9)+'te'](_0x473992(0x314)+'check'+'ed',_0x11036f['liWHz'](String,!!_0x2e733b)),_0x8a9072['oncli'+'ck']=_0x77ac71=>{var _0x11ef39=_0x473992;if(_0x11036f[_0x11ef39(0x69e)](_0x11ef39(0x1b5),_0x11036f['nCFnp']))_0xd03b78['team']=_0x227b73,_0x57e444();else{_0x77ac71['stopP'+_0x11ef39(0x2fe)+'ation']();var _0x5071ee=_0x8a9072['getAt'+_0x11ef39(0x3d9)+'te'](_0x11ef39(0x314)+'check'+'ed')!==_0x11ef39(0x4de);_0x8a9072[_0x11ef39(0x165)+_0x11ef39(0x3d9)+'te'](_0x11ef39(0x314)+'check'+'ed',_0x11036f[_0x11ef39(0x54f)](String,_0x5071ee)),_0x40cdc7(_0x5071ee);}},_0x8a9072;}function _0x5edf53(_0x13790e,_0x14868b,_0x493966,_0x2e5636,_0x3ad1aa){var _0x503f9f=_0x1184e8,_0x252b46=_0x11036f['FGtQd'][_0x503f9f(0x155)]('|'),_0xbd0189=0xb*-0x314+0x96a*0x4+-0x3cc;while(!![]){switch(_0x252b46[_0xbd0189++]){case'0':_0x3874c2[_0x503f9f(0x463)+_0x503f9f(0x408)]='sk-ra'+_0x503f9f(0x32c);continue;case'1':var _0x533d20=document[_0x503f9f(0x5d5)+_0x503f9f(0x2ee)+'ent'](_0x11036f[_0x503f9f(0x3f0)]);continue;case'2':_0x3874c2[_0x503f9f(0x41e)][_0x503f9f(0x29a)+'opert'+'y'](_0x503f9f(0x5b0),(_0x13790e-_0x14868b)/(_0x493966-_0x14868b)*(0x2*0x10c8+0x191b+-0x3a47)+'%');continue;case'3':_0x3874c2[_0x503f9f(0x3c3)+'d'](_0x375ac4,_0x533d20);continue;case'4':_0x375ac4['class'+'Name']=_0x11036f[_0x503f9f(0x523)];continue;case'5':_0x375ac4[_0x503f9f(0x2c2)]=_0x13790e;continue;case'6':return _0x3874c2;case'7':_0x533d20[_0x503f9f(0x463)+_0x503f9f(0x408)]=_0x503f9f(0x24c)+'l';continue;case'8':_0x375ac4['min']=_0x14868b;continue;case'9':_0x375ac4[_0x503f9f(0x6c6)+'ut']=()=>{var _0x3aa64e=_0x503f9f;_0x533d20[_0x3aa64e(0x29f)+'onten'+'t']=Number(_0x375ac4['value'])[_0x3aa64e(0x6c7)+'ed'](0x338+0x1826+0x6d7*-0x4)[_0x3aa64e(0x4c1)+'ce'](/\.?0+$/,''),_0x3874c2['style'][_0x3aa64e(0x29a)+'opert'+'y'](_0x3aa64e(0x5b0),(_0x375ac4[_0x3aa64e(0x2c2)]-_0x14868b)/_0x5acdfa[_0x3aa64e(0xb5)](_0x493966,_0x14868b)*(-0x1a2a+0x525*0x6+-0x2e*0x18)+'%'),_0x3ad1aa(Number(_0x375ac4['value']));};continue;case'10':var _0x375ac4=document['creat'+_0x503f9f(0x2ee)+'ent'](_0x503f9f(0x528));continue;case'11':_0x375ac4[_0x503f9f(0x5f4)]=_0x493966;continue;case'12':_0x375ac4[_0x503f9f(0x524)]=_0x11036f['eUkLF'];continue;case'13':_0x533d20[_0x503f9f(0x29f)+'onten'+'t']=_0x11036f[_0x503f9f(0x10b)](Number,_0x13790e)[_0x503f9f(0x6c7)+'ed'](0x5c*0x21+0x140d+-0x1fe7)[_0x503f9f(0x4c1)+'ce'](/\.?0+$/,'');continue;case'14':var _0x3874c2=document['creat'+_0x503f9f(0x2ee)+'ent']('div');continue;case'15':var _0x5acdfa={'PoPPw':function(_0x31ff04,_0xbce635){return _0x31ff04-_0xbce635;}};continue;case'16':_0x375ac4['step']=_0x2e5636;continue;}break;}}function _0x1b1749(_0x2f4faf,_0x301f95){var _0x401912=_0x1184e8,_0x27fc5e=document[_0x401912(0x5d5)+'eElem'+_0x401912(0x108)]('div');_0x27fc5e[_0x401912(0x463)+_0x401912(0x408)]=_0x401912(0x20f)+'l';var _0x4ae657=document[_0x401912(0x5d5)+'eElem'+_0x401912(0x108)](_0x11036f[_0x401912(0x3f0)]);return _0x4ae657[_0x401912(0x463)+'Name']='sk-la'+'bel',_0x4ae657['textC'+'onten'+'t']=_0x2f4faf,_0x27fc5e[_0x401912(0x3c3)+'d'](_0x4ae657,_0x301f95),_0x27fc5e;}function _0x29cec8(_0x394692,_0x570376,_0x56fd5e,_0x35fa5b){var _0x1d92aa=_0x1184e8,_0x1cc47c=document['creat'+'eElem'+_0x1d92aa(0x108)](_0x11036f[_0x1d92aa(0x206)]);_0x1cc47c[_0x1d92aa(0x463)+'Name']=_0x11036f['opIhR'](_0x1d92aa(0x4c3)+'rd',_0x570376?'\x20on':'');var _0x6ca6ca=document['creat'+'eElem'+_0x1d92aa(0x108)](_0x1d92aa(0x67e));_0x6ca6ca[_0x1d92aa(0x463)+_0x1d92aa(0x408)]=_0x11036f['gLGoY'];var _0x3ea2b8=document['creat'+'eElem'+_0x1d92aa(0x108)](_0x1d92aa(0x67e));_0x3ea2b8['class'+_0x1d92aa(0x408)]=_0x1d92aa(0x4c3)+_0x1d92aa(0x687)+_0x1d92aa(0x291);var _0x2802c7=document[_0x1d92aa(0x5d5)+_0x1d92aa(0x2ee)+_0x1d92aa(0x108)](_0x11036f['HNQJy']);_0x2802c7[_0x1d92aa(0x29f)+_0x1d92aa(0x637)+'t']=_0x394692,_0x3ea2b8['appen'+'dChil'+'d'](_0x2802c7);if(_0x56fd5e){if(_0x11036f['BeuaD'](_0x11036f[_0x1d92aa(0x555)],_0x11036f['hNyfg'])){if(_0x1c41ab[_0x2a9932]&&_0x101c2c[_0x1cef2e][_0x1d92aa(0x1ca)+'ed'])_0x5f2d06++;}else{var _0x4099de=_0x51fffd(_0x570376,_0x2b3a05=>{var _0x332171=_0x1d92aa;if(_0x11036f['PufJN']!=='wCzoV')try{new _0x54e528(_0x3e254b)[_0x332171(0x26b)+_0x332171(0x4bd)](_0x16e6bc,_0x3ea100,_0xa067c3);}catch(_0x3f4046){}else _0x1cc47c[_0x332171(0x463)+_0x332171(0x673)]['toggl'+'e']('on',_0x2b3a05),_0x56fd5e(_0x2b3a05);});_0x6ca6ca[_0x1d92aa(0x3c3)+'d'](_0x3ea2b8,_0x4099de);}}else _0x6ca6ca[_0x1d92aa(0x3c3)+'dChil'+'d'](_0x3ea2b8);_0x1cc47c['appen'+_0x1d92aa(0x478)+'d'](_0x6ca6ca);if(_0x35fa5b&&_0x35fa5b[_0x1d92aa(0x46f)+'h']){var _0x277a77=document[_0x1d92aa(0x5d5)+_0x1d92aa(0x2ee)+'ent'](_0x11036f[_0x1d92aa(0x206)]);_0x277a77[_0x1d92aa(0x463)+'Name']=_0x11036f['ZWLPL'];for(var _0x167eda of _0x35fa5b)_0x277a77[_0x1d92aa(0x3c3)+'dChil'+'d'](_0x167eda);_0x1cc47c[_0x1d92aa(0x3c3)+_0x1d92aa(0x478)+'d'](_0x277a77);}return _0x1cc47c;}function _0x1a4e29(_0x13a955){var _0x217d64=_0x1184e8,_0x37dd92=document['creat'+_0x217d64(0x2ee)+_0x217d64(0x108)]('div');return _0x37dd92[_0x217d64(0x463)+'Name']=_0x217d64(0x20f)+'l',_0x37dd92[_0x217d64(0x41e)]['cssTe'+'xt']='font-'+'size:'+_0x217d64(0x503)+'color'+':rgba'+'(246,'+_0x217d64(0x130)+'42,.6'+_0x217d64(0x15e)+_0x217d64(0x2e2)+_0x217d64(0x135)+'re-wr'+_0x217d64(0x48d)+_0x217d64(0x56d)+_0x217d64(0x115)+'reak-'+'all',_0x37dd92['textC'+'onten'+'t']=_0x13a955,_0x37dd92;}function _0x426e8c(_0x1925a0,_0x2e887a){var _0x5b9c82=_0x1184e8,_0xf8567={'gqEGR':_0x5b9c82(0x40c),'SaYXX':'room@','iiahA':function(_0x52daf9,_0x35288d){return _0x52daf9(_0x35288d);},'WQhIr':_0x11036f[_0x5b9c82(0x1cf)]};if(_0x11036f[_0x5b9c82(0x1aa)]('MmBQa',_0x11036f[_0x5b9c82(0xee)])){var _0x1a9525=document[_0x5b9c82(0x5d5)+'eElem'+_0x5b9c82(0x108)]('butto'+'n');return _0x1a9525[_0x5b9c82(0x524)]=_0x11036f[_0x5b9c82(0x296)],_0x1a9525['textC'+'onten'+'t']=_0x1925a0,_0x1a9525[_0x5b9c82(0x41e)][_0x5b9c82(0x2e0)+'xt']=_0x5b9c82(0x151)+'r:1px'+_0x5b9c82(0x379)+'d\x20rgb'+'a(255'+',107,'+_0x5b9c82(0x44f)+_0x5b9c82(0x32a)+_0x5b9c82(0x5dc)+_0x5b9c82(0x2b7)+_0x5b9c82(0x62d)+'55,10'+_0x5b9c82(0x144)+',.12)'+_0x5b9c82(0x318)+'r:#ff'+'d7e3;'+_0x5b9c82(0x151)+_0x5b9c82(0x5a4)+_0x5b9c82(0x47b)+_0x5b9c82(0xf6)+_0x5b9c82(0x2f1)+_0x5b9c82(0x66b)+_0x5b9c82(0x15a)+'font-'+'size:'+_0x5b9c82(0x503)+_0x5b9c82(0x684)+'r:poi'+_0x5b9c82(0x506),_0x1a9525['oncli'+'ck']=_0x11392c=>{var _0x40c464=_0x5b9c82;if('eDPQa'===_0x11036f[_0x40c464(0x543)])_0x11392c['stopP'+_0x40c464(0x2fe)+_0x40c464(0x257)](),_0x2e887a();else return!_0x29ee26&&(_0x314193=!![],_0x2e1b49(_0xf8567['gqEGR'],_0xf8567[_0x40c464(0x60e)]+_0xf8567['iiahA'](_0x252cf5,_0x1af3c8)+_0xf8567['WQhIr'])),0x24fa+0x789*0x4+-0x431e;},_0x1a9525;}else _0x5c194a/=_0x2beed4,_0xfb7d85/=_0x6164c9,_0x5d844f/=_0x45c353;}function _0x4c96ab(){var _0x33dbc5=_0x1184e8,_0x2ba3e7={'dcvTW':'cpJlt','vYKyV':function(_0x1095a9){var _0x578d5f=_0x55f7;return _0x11036f[_0x578d5f(0x310)](_0x1095a9);},'bBusw':_0x11036f[_0x33dbc5(0x2bf)],'kOvZY':function(_0x5c5034,_0x435157){var _0x28682e=_0x33dbc5;return _0x11036f[_0x28682e(0x158)](_0x5c5034,_0x435157);},'jDWrE':function(_0x8156d3,_0x4fd414){return _0x8156d3<_0x4fd414;},'docoA':function(_0x2cde20,_0x46d412){return _0x11036f['pHiXV'](_0x2cde20,_0x46d412);},'qBBjK':function(_0x500b2c){return _0x500b2c();},'wYaTE':function(_0x415caf,_0x1407c2){return _0x415caf!==_0x1407c2;},'ZukjQ':_0x11036f[_0x33dbc5(0x2c8)],'HbYnW':function(_0x126a8d){return _0x126a8d();},'aNDWT':function(_0x452321,_0x22e298){return _0x452321===_0x22e298;},'xKfaf':_0x11036f[_0x33dbc5(0x415)],'ZMEXy':_0x33dbc5(0x6c0),'wdsMx':function(_0x557ee2){return _0x557ee2();},'fBgft':function(_0x401773){return _0x401773();},'mLTsn':function(_0x42ec4c){return _0x11036f['rrKEF'](_0x42ec4c);},'VYJmw':_0x11036f[_0x33dbc5(0x1b8)],'HjSDs':_0x11036f[_0x33dbc5(0x3a6)],'mctlK':_0x11036f['zSbBg'],'rdAZu':'Copy\x20'+_0x33dbc5(0xc6),'QeDgt':_0x33dbc5(0x561),'NrHZY':'sbSDV','kWlhF':function(_0x20964d,_0x1a5779,_0x565424){var _0x470b98=_0x33dbc5;return _0x11036f[_0x470b98(0x68c)](_0x20964d,_0x1a5779,_0x565424);},'CTgmg':'Downl'+_0x33dbc5(0x366)+_0x33dbc5(0x54c),'yCIWR':function(_0x46b907,_0x517b4d,_0x494c01){return _0x46b907(_0x517b4d,_0x494c01);},'bLowV':_0x33dbc5(0x2a1),'zZuDX':function(_0x5dc10d,_0x19cda7,_0x16379d){return _0x5dc10d(_0x19cda7,_0x16379d);},'mapFg':'Names','rSAiB':function(_0x372a29,_0x3252cb,_0x5036c0){return _0x372a29(_0x3252cb,_0x5036c0);},'YukIa':_0x33dbc5(0x14b)+_0x33dbc5(0x5bb)+'s','rpxSt':function(_0x232b5d,_0x43717b,_0x33523f){return _0x232b5d(_0x43717b,_0x33523f);},'aVnWa':function(_0x1b1096,_0x4c66f7,_0x3edca1,_0x26f876,_0x5e27ea){return _0x1b1096(_0x4c66f7,_0x3edca1,_0x26f876,_0x5e27ea);},'mEqGK':function(_0x10085b,_0x81aebe,_0x55df0c){return _0x10085b(_0x81aebe,_0x55df0c);},'SepMf':_0x11036f[_0x33dbc5(0x493)],'OuaGM':function(_0xdc85be,_0x53208f,_0x5d40e5){return _0xdc85be(_0x53208f,_0x5d40e5);},'ZALyH':function(_0x3ff8ce,_0x396b26,_0x4ddd2c,_0x5ce011,_0x345678){return _0x3ff8ce(_0x396b26,_0x4ddd2c,_0x5ce011,_0x345678);},'zFPUt':_0x11036f[_0x33dbc5(0x5c9)],'wKrrA':function(_0x101da3,_0x5d4338,_0x128f00,_0xd51b25,_0x3d9bda,_0x39e8f4){return _0x101da3(_0x5d4338,_0x128f00,_0xd51b25,_0x3d9bda,_0x39e8f4);},'qVvzg':_0x11036f['eGZiT'],'UZxjJ':_0x33dbc5(0x44b)+_0x33dbc5(0x3cd),'DTlIf':_0x11036f[_0x33dbc5(0x3e2)],'HncvK':function(_0x32693a,_0x54bb36,_0x46892b,_0x609d0a,_0x228c28,_0x45dd57){return _0x32693a(_0x54bb36,_0x46892b,_0x609d0a,_0x228c28,_0x45dd57);},'YHUKQ':function(_0x59979e,_0x2c7c60,_0x9be5e2,_0x574959,_0x482c84){return _0x59979e(_0x2c7c60,_0x9be5e2,_0x574959,_0x482c84);},'ScIhp':_0x11036f[_0x33dbc5(0x22f)],'xkUCm':_0x11036f['GRuUA'],'ktDay':'Hook:'+'\x20no\x20r'+'ecoil','Jtjmf':function(_0x47a341,_0x283db2){return _0x47a341+_0x283db2;},'lLUfi':function(_0x53d211,_0x4fd473){return _0x53d211(_0x4fd473);},'kjsBD':function(_0x48dc6c,_0x17ee23){return _0x48dc6c+_0x17ee23;},'MIUtE':_0x11036f[_0x33dbc5(0x44a)],'ETFiO':'no\x20er'+_0x33dbc5(0x22c),'bfrhD':function(_0x4a9976,_0x5a3ced,_0x3a7059,_0x292b35,_0xb3c786){return _0x4a9976(_0x5a3ced,_0x3a7059,_0x292b35,_0xb3c786);},'PUmZY':_0x33dbc5(0x61e),'pdOpO':'boot','gwYUx':_0x33dbc5(0x1b0)+_0x33dbc5(0x5e2)+'faile'+_0x33dbc5(0x124)},_0x5195fd=document[_0x33dbc5(0x5d5)+'eElem'+'ent'](_0x33dbc5(0x67e));_0x5195fd['class'+'Name']='mn-pa'+_0x33dbc5(0x1e3);var _0x4f2f6f=document['creat'+'eElem'+'ent'](_0x11036f['oYdVt']);_0x4f2f6f['class'+'Name']=_0x11036f['MayEa'];var _0x157d2f=document[_0x33dbc5(0x5d5)+_0x33dbc5(0x2ee)+'ent'](_0x33dbc5(0x67e));_0x157d2f['class'+_0x33dbc5(0x408)]='mn-lo'+'go',_0x157d2f['inner'+_0x33dbc5(0x27c)]=_0x33dbc5(0x34d)+_0x33dbc5(0x174)+_0x33dbc5(0x511)+'\x200\x2024'+_0x33dbc5(0x301)+_0x33dbc5(0x498)+_0x33dbc5(0x5db)+_0x33dbc5(0x3c4)+_0x33dbc5(0x2af)+'t\x20id='+_0x33dbc5(0x5f2)+'rad\x22\x20'+_0x33dbc5(0x6dc)+_0x33dbc5(0x65a)+_0x33dbc5(0x669)+'2=\x2220'+_0x33dbc5(0x159)+'\x2221\x22\x20'+'gradi'+_0x33dbc5(0x46b)+_0x33dbc5(0x23b)+_0x33dbc5(0xd2)+_0x33dbc5(0x12a)+_0x33dbc5(0x48a)+_0x33dbc5(0x1f0)+'p\x20off'+_0x33dbc5(0x2f0)+_0x33dbc5(0x292)+'op-co'+'lor=\x22'+_0x33dbc5(0x6a7)+_0x33dbc5(0x5dd)+_0x33dbc5(0x4dc)+_0x33dbc5(0x51a)+'et=\x220'+_0x33dbc5(0x38f)+'stop-'+'color'+'=\x22#ff'+'b3c6\x22'+'/><st'+_0x33dbc5(0x321)+_0x33dbc5(0x497)+_0x33dbc5(0x1f8)+_0x33dbc5(0x615)+_0x33dbc5(0x106)+_0x33dbc5(0x6b4)+_0x33dbc5(0x1dc)+'></li'+_0x33dbc5(0x642)+_0x33dbc5(0x47f)+_0x33dbc5(0x6ce)+_0x33dbc5(0x384)+'<path'+'\x20d=\x22M'+_0x33dbc5(0x28f)+'c-1.5'+_0x33dbc5(0x241)+_0x33dbc5(0x4ad)+_0x33dbc5(0x52d)+_0x33dbc5(0x306)+'.5\x201.'+_0x33dbc5(0x1db)+_0x33dbc5(0x20a)+_0x33dbc5(0x6c3)+_0x33dbc5(0xe4)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+'fill='+_0x33dbc5(0x6d4)+_0x33dbc5(0x49f)+'oke=\x22'+_0x33dbc5(0x4f9)+_0x33dbc5(0x141)+'ad)\x22\x20'+'strok'+_0x33dbc5(0x530)+_0x33dbc5(0x671)+_0x33dbc5(0x49f)+'oke-l'+_0x33dbc5(0x280)+'p=\x22ro'+'und\x22\x20'+_0x33dbc5(0x4ea)+_0x33dbc5(0x629)+_0x33dbc5(0x653)+_0x33dbc5(0x458)+_0x33dbc5(0x2d7)+_0x33dbc5(0x2c4)+_0x33dbc5(0x1c9)+'12\x203v'+_0x33dbc5(0x52f)+_0x33dbc5(0x5ca)+'5\x200-2'+_0x33dbc5(0x269)+_0x33dbc5(0x58a)+_0x33dbc5(0x641)+'\x203c1.'+_0x33dbc5(0x3b3)+_0x33dbc5(0x271)+_0x33dbc5(0x58a)+'.5\x22\x20f'+'ill=\x22'+'none\x22'+'\x20stro'+'ke=\x22u'+_0x33dbc5(0x2d9)+_0x33dbc5(0x4a6)+_0x33dbc5(0x2cc)+'troke'+_0x33dbc5(0x391)+_0x33dbc5(0x30a)+'5\x22\x20st'+'roke-'+_0x33dbc5(0x676)+'ap=\x22r'+_0x33dbc5(0x434)+'/><ci'+_0x33dbc5(0x568)+_0x33dbc5(0x123)+'2\x22\x20cy'+_0x33dbc5(0x516)+'\x20r=\x221'+_0x33dbc5(0x5de)+_0x33dbc5(0x107)+_0x33dbc5(0x56f)+'9d\x22/>'+_0x33dbc5(0xb8)+'>',_0x4f2f6f[_0x33dbc5(0x3c3)+'dChil'+'d'](_0x157d2f);var _0x27e9ad=document[_0x33dbc5(0x5d5)+'eElem'+_0x33dbc5(0x108)](_0x33dbc5(0x67e));_0x27e9ad['class'+_0x33dbc5(0x408)]=_0x33dbc5(0x105)+'in';var _0x56428b=document['creat'+'eElem'+'ent'](_0x33dbc5(0x1ee)+'r');_0x56428b[_0x33dbc5(0x463)+'Name']=_0x11036f[_0x33dbc5(0x5d3)];var _0x1c090b=document[_0x33dbc5(0x5d5)+_0x33dbc5(0x2ee)+_0x33dbc5(0x108)]('h2');_0x1c090b[_0x33dbc5(0x463)+'Name']=_0x11036f[_0x33dbc5(0x64d)],_0x1c090b[_0x33dbc5(0x29f)+_0x33dbc5(0x637)+'t']='2v2.i'+'o';var _0x24f0c5=document[_0x33dbc5(0x5d5)+_0x33dbc5(0x2ee)+_0x33dbc5(0x108)](_0x11036f[_0x33dbc5(0x296)]);_0x24f0c5['type']=_0x33dbc5(0x4f6)+'n',_0x24f0c5[_0x33dbc5(0x463)+_0x33dbc5(0x408)]=_0x33dbc5(0x55a)+'ose',_0x24f0c5[_0x33dbc5(0x2cd)+'HTML']='<svg\x20'+_0x33dbc5(0x174)+_0x33dbc5(0x511)+_0x33dbc5(0x35c)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x33dbc5(0x1c7)+'2\x2012M'+_0x33dbc5(0x59f)+'6\x2018\x22'+'/></s'+_0x33dbc5(0x39f),_0x24f0c5[_0x33dbc5(0x378)+'ck']=()=>_0x2f062d(![]),_0x56428b[_0x33dbc5(0x3c3)+'d'](_0x1c090b,_0x24f0c5);var _0x3bef08=null;_0x56428b['addEv'+_0x33dbc5(0x2a7)+_0x33dbc5(0x5c4)+'r'](_0x11036f[_0x33dbc5(0x58d)],_0x492461=>{var _0x1f8e35=_0x33dbc5;if(_0x492461[_0x1f8e35(0x332)+'t'][_0x1f8e35(0x255)+'st']('butto'+_0x1f8e35(0xf1)+_0x1f8e35(0x5e3)))return;var _0x2b8330=_0x5195fd[_0x1f8e35(0x35e)+_0x1f8e35(0x1a2)+'gClie'+_0x1f8e35(0x4ef)+'t']();_0x3bef08=[_0x492461['clien'+'tX']-_0x2b8330[_0x1f8e35(0x45b)],_0x492461[_0x1f8e35(0x62e)+'tY']-_0x2b8330[_0x1f8e35(0x30d)]],_0x56428b[_0x1f8e35(0x3fd)+_0x1f8e35(0x3ed)+'Captu'+'re'](_0x492461[_0x1f8e35(0x5ad)+_0x1f8e35(0x1fa)]),_0x5195fd[_0x1f8e35(0x463)+_0x1f8e35(0x673)]['add']('sk-dr'+_0x1f8e35(0x10d)+'g');}),_0x56428b['addEv'+_0x33dbc5(0x2a7)+'stene'+'r']('point'+'ermov'+'e',_0x9996a0=>{var _0x214d9d=_0x33dbc5,_0x2e89f3=_0x11036f['oMVmY'][_0x214d9d(0x155)]('|'),_0x495e0f=-0x1ad7*-0x1+-0x14cd+-0x1*0x60a;while(!![]){switch(_0x2e89f3[_0x495e0f++]){case'0':_0x5195fd['style'][_0x214d9d(0x45b)]=Math['min'](Math[_0x214d9d(0x5f4)](-0xed3+0xeaf*0x2+0x11*-0xdb,_0x9996a0[_0x214d9d(0x62e)+'tX']-_0x3bef08[0x2519+-0x971*0x1+-0x162*0x14]),window['inner'+'Width']-(0x9e*-0x39+0x99b+0x1a5b))+'px';continue;case'1':_0x5195fd['style']['botto'+'m']='auto';continue;case'2':if(!_0x3bef08)return;continue;case'3':_0x5195fd['style']['top']=Math[_0x214d9d(0x5f7)](Math[_0x214d9d(0x5f4)](-0xd6a*0x1+-0x37+0x48b*0x3,_0x9996a0['clien'+'tY']-_0x3bef08[0x1*-0xabe+0xe0a+0x34b*-0x1]),window[_0x214d9d(0x2cd)+_0x214d9d(0x121)+'t']-(0x43f+0x3*-0x70c+-0x127*-0xf))+'px';continue;case'4':_0x5195fd[_0x214d9d(0x41e)][_0x214d9d(0x34f)]='auto';continue;}break;}});var _0x3faa89=()=>{var _0x22310d=_0x33dbc5;if(!_0x3bef08)return;_0x3bef08=null,_0x5195fd[_0x22310d(0x463)+_0x22310d(0x673)]['remov'+'e']('sk-dr'+'aggin'+'g');var _0x35baae=_0x5195fd[_0x22310d(0x35e)+'undin'+_0x22310d(0x383)+_0x22310d(0x4ef)+'t']();_0x3a0e32['x']=_0x35baae[_0x22310d(0x45b)],_0x3a0e32['y']=_0x35baae[_0x22310d(0x30d)],_0x11036f['iudlA'](_0x149062);};_0x56428b[_0x33dbc5(0x6b8)+_0x33dbc5(0x2a7)+'stene'+'r']('point'+_0x33dbc5(0x6d9),_0x3faa89),_0x56428b[_0x33dbc5(0x6b8)+_0x33dbc5(0x2a7)+'stene'+'r'](_0x11036f[_0x33dbc5(0x2c7)],_0x3faa89);var _0x58e16b=document[_0x33dbc5(0x5d5)+'eElem'+_0x33dbc5(0x108)](_0x33dbc5(0x67e));_0x58e16b[_0x33dbc5(0x463)+'Name']=_0x33dbc5(0x126)+'ls',_0x27e9ad[_0x33dbc5(0x3c3)+'d'](_0x56428b,_0x58e16b),_0x5195fd[_0x33dbc5(0x3c3)+'d'](_0x4f2f6f,_0x27e9ad);function _0x236355(){var _0x32b767=_0x33dbc5,_0x2bf416={'PYaID':function(_0x3e1407){return _0x3e1407();},'wozeN':function(_0x4d2590){return _0x2ba3e7['vYKyV'](_0x4d2590);},'ySqbq':function(_0x52e509,_0x21cbb7,_0x15af88){return _0x52e509(_0x21cbb7,_0x15af88);},'ndUoh':function(_0x16b516,_0xba1e6a){return _0x16b516+_0xba1e6a;},'AdfRr':function(_0x55db50){var _0x3ded05=_0x55f7;return _0x2ba3e7[_0x3ded05(0x122)](_0x55db50);},'FSYOf':function(_0x5e5c2a){return _0x2ba3e7['mLTsn'](_0x5e5c2a);},'KjJVp':function(_0x3c0c2e,_0xe11dd0,_0x228c1b,_0x5f081d,_0x43f298){return _0x3c0c2e(_0xe11dd0,_0x228c1b,_0x5f081d,_0x43f298);},'TGMic':_0x2ba3e7['VYJmw'],'fEITI':_0x32b767(0x4c6)+'ider','nKZsx':_0x32b767(0x5bd)+_0x32b767(0x32c),'GpYlF':_0x2ba3e7[_0x32b767(0xe3)],'ZPLyc':'span','CZBCb':function(_0x50e7c9,_0x36bdfa){return _0x50e7c9/_0x36bdfa;},'GncEM':function(_0x5246c8,_0x177bd2){return _0x5246c8-_0x177bd2;},'SoyTU':'range','CPSXg':_0x2ba3e7['mctlK'],'nStwd':_0x2ba3e7[_0x32b767(0x154)],'qvhvK':_0x2ba3e7[_0x32b767(0x221)],'gweXI':function(_0x4d10e9,_0x4349e2){return _0x4d10e9===_0x4349e2;},'jGbyq':_0x2ba3e7['NrHZY'],'mIfuv':'div','fUFad':_0x32b767(0x2de)+_0x32b767(0x18e)+';heig'+_0x32b767(0x20d)+_0x32b767(0x5f3)+'ackgr'+_0x32b767(0x560)+_0x32b767(0x341)+'0,0,0'+_0x32b767(0x186)+_0x32b767(0x318)+'r:#ff'+_0x32b767(0x5d7)+'borde'+'r:1px'+'\x20soli'+_0x32b767(0x5f5)+_0x32b767(0x4f3)+',107,'+_0x32b767(0x44f)+'25);b'+_0x32b767(0x28d)+'-radi'+_0x32b767(0x348)+'x;fon'+_0x32b767(0x601)+'x/1.4'+_0x32b767(0x548)+_0x32b767(0x3c0)+_0x32b767(0x198)+_0x32b767(0x220)+_0x32b767(0x1e7)+_0x32b767(0x2f6)+_0x32b767(0x24f)+_0x32b767(0x3f6)+'g:6px'+_0x32b767(0xf4)+_0x32b767(0x226)+_0x32b767(0x26d)+_0x32b767(0x382)+_0x32b767(0x355)+':auto','diZop':function(_0x133c7d,_0x4fbbb5,_0x256e46){return _0x2ba3e7['kWlhF'](_0x133c7d,_0x4fbbb5,_0x256e46);},'aMHbm':_0x2ba3e7[_0x32b767(0x16c)],'WGsYV':function(_0x1a99d0,_0x318e41,_0x51e00c){var _0x254483=_0x32b767;return _0x2ba3e7[_0x254483(0xe0)](_0x1a99d0,_0x318e41,_0x51e00c);}};return[_0x29cec8(_0x32b767(0x697)+_0x32b767(0x1c2)+_0x32b767(0x650)+'hema',_0xf91c49['esp'],_0x37c304=>{var _0x1fe61a=_0x32b767;_0xf91c49[_0x1fe61a(0x313)]=_0x37c304,_0x489c9a();},[_0x2ba3e7[_0x32b767(0xe0)](_0x1b1749,_0x2ba3e7['bLowV'],_0x2ba3e7['zZuDX'](_0x51fffd,_0xf91c49[_0x32b767(0x1ba)],_0x2852ce=>{var _0x47bd2e=_0x32b767;if(_0x2ba3e7['dcvTW']===_0x2ba3e7[_0x47bd2e(0x435)])_0xf91c49[_0x47bd2e(0x1ba)]=_0x2852ce,_0x489c9a();else{_0x266d3f[_0x47bd2e(0x142)+_0x47bd2e(0x683)]=_0x345431,_0x2bf416['PYaID'](_0x4b1f83);if(_0x17282e){for(var _0x26e39b in _0x4ae702)_0x5602a1(_0x26e39b,![]);}}})),_0x1b1749(_0x2ba3e7[_0x32b767(0x2fa)],_0x51fffd(_0xf91c49[_0x32b767(0x539)],_0x24ba00=>{var _0xf2a365=_0x32b767;_0xf91c49[_0xf2a365(0x539)]=_0x24ba00,_0x2bf416[_0xf2a365(0x26c)](_0x489c9a);})),_0x2ba3e7[_0x32b767(0xe8)](_0x1b1749,'Healt'+'h',_0x51fffd(_0xf91c49[_0x32b767(0x68e)+'h'],_0x46f346=>{var _0x343c86=_0x32b767;_0xf91c49[_0x343c86(0x68e)+'h']=_0x46f346,_0x2ba3e7['vYKyV'](_0x489c9a);})),_0x1b1749(_0x2ba3e7['YukIa'],_0x2ba3e7[_0x32b767(0x1e9)](_0x51fffd,_0xf91c49[_0x32b767(0x521)],_0x53b6d1=>{var _0xebef88=_0x32b767;_0x2ba3e7['bBusw']==='SdleB'?(_0xf91c49['team']=_0x53b6d1,_0x2ba3e7[_0xebef88(0x433)](_0x489c9a)):_0x521c8d&&_0x3d3509[_0xebef88(0x3ec)]()&&(_0x54ceb2=_0x3c7329[_0xebef88(0x3ec)](),_0x4352d3[_0xebef88(0x552)]=!![],_0x2bf416[_0xebef88(0x678)](_0x3b4f55,_0xebef88(0x2a0)+'re',_0x2bf416['ndUoh'](_0xebef88(0x344)+_0xebef88(0x417)+_0xebef88(0x17d)+_0xebef88(0x14e),_0x59656d(_0x4b5a7b))));})),_0x1b1749(_0x32b767(0x328),_0x51fffd(_0xf91c49[_0x32b767(0x2d4)],_0x12145e=>{var _0x19680f=_0x32b767;_0xf91c49['lines']=_0x12145e,_0x2ba3e7[_0x19680f(0x433)](_0x489c9a);})),_0x1b1749(_0x32b767(0x3fb),_0x5edf53(_0xf91c49[_0x32b767(0x512)],-0x1*0x2203+0x24a8+-0x2a5*0x1+0.5,0x18*-0x9d+-0xee6+0xed*0x20,0x4d*-0x3+-0x77b+0x862+0.05,_0x6aa027=>{_0xf91c49['scale']=_0x6aa027,_0x489c9a();}))]),_0x2ba3e7[_0x32b767(0x12c)](_0x29cec8,'Comba'+'t',![],null,[_0x1b1749(_0x32b767(0x180)+_0x32b767(0x69b)+_0x32b767(0x201)+')',_0x51fffd(_0xf91c49['noRec'+_0x32b767(0x2cb)],_0x2dfd71=>{var _0x806d56=_0x32b767;_0xf91c49[_0x806d56(0x6db)+'oil']=_0x2dfd71,_0x489c9a();})),_0x2ba3e7['mEqGK'](_0x1b1749,_0x2ba3e7[_0x32b767(0x4d9)],_0x51fffd(_0xf91c49['noSpr'+'ead'],_0x19ac5f=>{_0xf91c49['noSpr'+'ead']=_0x19ac5f,_0x489c9a();})),_0x1b1749(_0x32b767(0xea)+'\x20fire',_0x2ba3e7['OuaGM'](_0x51fffd,_0xf91c49[_0x32b767(0x337)+'Fire'],_0x482609=>{var _0x562a60=_0x32b767,_0x35d2ca={'OIdUP':function(_0x593141,_0x34658b){return _0x593141-_0x34658b;},'CQXce':function(_0x475095,_0xe522ec){return _0x475095+_0xe522ec;},'xEVfX':function(_0x56e937,_0x1289fb){return _0x56e937*_0x1289fb;},'BqDeD':function(_0x53e43e,_0x1c841d){return _0x2ba3e7['kOvZY'](_0x53e43e,_0x1c841d);},'PNWxO':function(_0x27f62a,_0xd8da95){return _0x27f62a<=_0xd8da95;},'QPHSe':function(_0x19c583,_0x42d340){return _0x19c583/_0x42d340;},'WtyxX':function(_0x26165b,_0x133386){var _0x2734ae=_0x55f7;return _0x2ba3e7[_0x2734ae(0x5ee)](_0x26165b,_0x133386);},'YtNOQ':function(_0x42a6c7,_0x3642f9){return _0x2ba3e7['docoA'](_0x42a6c7,_0x3642f9);},'SFxrM':function(_0x574a34,_0x190b59){return _0x574a34*_0x190b59;},'MPIgl':function(_0x4b27f4,_0x1e71d5){return _0x4b27f4*_0x1e71d5;},'XRhZc':function(_0x36c056,_0x5afed1){return _0x36c056*_0x5afed1;}};if(_0x562a60(0x449)!==_0x562a60(0x2df))_0xf91c49[_0x562a60(0x337)+_0x562a60(0xc5)]=_0x482609,_0x2ba3e7[_0x562a60(0x594)](_0x489c9a);else{var _0x12df8c=_0x183e8a-_0x3fafcf['x'],_0x55254d=_0x35d2ca['OIdUP'](_0x5a3a9f,_0x3454d9['y']),_0x1ea864=_0x2da79a-_0x11a6cc['z'],_0x27aef0=_0x35d2ca[_0x562a60(0x302)](_0x12df8c*_0x2f1e67['r']['x']+_0x55254d*_0x17b2fe['r']['y'],_0x1ea864*_0x4f79a9['r']['z']),_0x5e146b=_0x35d2ca[_0x562a60(0x302)](_0x35d2ca['xEVfX'](_0x12df8c,_0x5e9d99['u']['x'])+_0x55254d*_0x4d1500['u']['y'],_0x35d2ca[_0x562a60(0x53e)](_0x1ea864,_0x519dcc['u']['z'])),_0x2edc34=_0x35d2ca[_0x562a60(0x53e)](_0x12df8c,_0x5539bd['f']['x'])+_0x55254d*_0x262e9f['f']['y']+_0x35d2ca[_0x562a60(0x573)](_0x1ea864,_0x295769['f']['z']);if(_0x35d2ca['PNWxO'](_0x2edc34,-0x1fbe+0x1fa7+-0x1*-0x17+0.05))return null;var _0x298ec8=(-0x8d2*-0x1+-0x84*0xd+-0x21d)/_0x230384['tan'](_0x35d2ca['QPHSe'](_0x35d2ca[_0x562a60(0x53e)](_0x18b692,_0x364e49['PI'])/(0x118b+-0x293*-0xc+-0xfe9*0x3),-0xc35*-0x3+-0x1abc+-0x9e1)),_0x268acf=_0x1c2c0c['w']/_0x4bfd39['h'],_0x4e158f=_0x27aef0*_0x298ec8/(_0x2edc34*_0x268acf),_0x524a57=_0x35d2ca[_0x562a60(0x39b)](_0x5e146b*_0x298ec8,_0x2edc34);if(_0x35d2ca[_0x562a60(0x227)](_0x4e158f,-(-0x9c2+0x1cbf*0x1+-0x5a*0x36+0.30000000000000004))||_0x4e158f>-0x346+0x1*0x1322+-0x29*0x63+0.30000000000000004||_0x524a57<-(0x14e5+-0x1*-0x51e+0xd01*-0x2+0.30000000000000004)||_0x35d2ca[_0x562a60(0x4a7)](_0x524a57,0x1*0x23b+0x3*0x75+-0x399+0.30000000000000004))return null;return{'x':_0x35d2ca['SFxrM'](_0x35d2ca[_0x562a60(0x259)](_0x4e158f,0x5*0x405+-0x329*0x7+-0x2*-0x103+0.5)+(0x15f4+0x18cd+-0x2ec1+0.5),_0x3f8810['w']),'y':_0x35d2ca[_0x562a60(0x11a)](0x6*0xa1+-0x11da+-0x203*-0x7-(_0x524a57*(0x17f7+0x1731+-0x3ee*0xc+0.5)+(0x12af+0x4d1+0x8*-0x2f0+0.5)),_0x2a0f42['h']),'depth':_0x2edc34};}})),_0x1b1749('Damag'+'e',_0x5edf53(_0xf91c49[_0x32b767(0x61a)+'eValu'+'e'],-0x1*0x1660+0x16f5*0x1+-0x94,-0x5be+0x17f2+0x20*-0x82,0x20*0x8+-0xba2*0x1+-0xaa3*-0x1,_0x3237c5=>{var _0x23ea6f=_0x32b767;if(_0x2ba3e7['wYaTE'](_0x23ea6f(0x47e),_0x23ea6f(0x3c2)))_0xf91c49['damag'+'eValu'+'e']=_0x3237c5,_0x489c9a();else{var _0x554036=(_0x23ea6f(0x6b3)+_0x23ea6f(0x565)+_0x23ea6f(0x41f))[_0x23ea6f(0x155)]('|'),_0x585822=-0x3f4+-0x432+0x12a*0x7;while(!![]){switch(_0x554036[_0x585822++]){case'0':_0x2c3cee['class'+_0x23ea6f(0x673)][_0x23ea6f(0x3f4)+'e'](_0x23ea6f(0x363)+_0x23ea6f(0x10d)+'g');continue;case'1':_0x540484=null;continue;case'2':_0x57f879['x']=_0x4a97c2['left'];continue;case'3':_0x2bf416[_0x23ea6f(0x472)](_0x1ce2a7);continue;case'4':_0x565d68['y']=_0x4a97c2[_0x23ea6f(0x30d)];continue;case'5':var _0x4a97c2=_0x22e9af[_0x23ea6f(0x35e)+_0x23ea6f(0x1a2)+'gClie'+_0x23ea6f(0x4ef)+'t']();continue;case'6':if(!_0x184094)return;continue;}break;}}})),_0x1b1749(_0x32b767(0x3cc)+'ite\x20a'+_0x32b767(0x3ea),_0x2ba3e7[_0x32b767(0xe8)](_0x51fffd,_0xf91c49[_0x32b767(0x25e)+'mo'],_0x3cbd49=>{var _0x45f63a=_0x32b767;_0xf91c49[_0x45f63a(0x25e)+'mo']=_0x3cbd49,_0x2bf416[_0x45f63a(0x213)](_0x489c9a);}))]),_0x2ba3e7['ZALyH'](_0x29cec8,'Movem'+_0x32b767(0x108),![],null,[_0x1b1749(_0x2ba3e7[_0x32b767(0x6a3)],_0x2ba3e7[_0x32b767(0x1ac)](_0x5edf53,_0xf91c49[_0x32b767(0xd1)+_0x32b767(0xde)],-0x18e2+0x1*-0x1196+0x2aaa,0x1989+0x119*-0x1d+-0x714*-0x1,0x22ea+-0x1*-0x247f+-0x4768,_0x5c5100=>{var _0x77d0e9=_0x32b767;_0x2ba3e7[_0x77d0e9(0x266)]!==_0x77d0e9(0x53c)?(_0x2ff244=_0x28d8a8,_0x52bc26['state']=!![]):(_0xf91c49[_0x77d0e9(0xd1)+_0x77d0e9(0xde)]=_0x5c5100,_0x2ba3e7[_0x77d0e9(0x29e)](_0x489c9a));})),_0x2ba3e7['OuaGM'](_0x1b1749,_0x2ba3e7[_0x32b767(0x4ed)],_0x5edf53(_0xf91c49['jumpP'+'ct'],-0x1d6b+-0x8d*-0x30+-0x1*-0x32d,0x20da+0x21b7+-0x41c9,0xc6c+-0x148e+0x823*0x1,_0x4f6484=>{var _0x1d1544=_0x32b767;_0xf91c49[_0x1d1544(0x329)+'ct']=_0x4f6484,_0x489c9a();})),_0x1b1749(_0x2ba3e7['UZxjJ'],_0x5edf53(_0xf91c49[_0x32b767(0x438)+'tyPct'],0x1892+0x1*-0x583+0x1*-0x1305,-0x8e*0x1c+-0x213+0x1263,0x407*-0x2+-0x161a+0x44f*0x7,_0x45dda0=>{_0xf91c49['gravi'+'tyPct']=_0x45dda0,_0x489c9a();}))]),_0x2ba3e7['ZALyH'](_0x29cec8,_0x2ba3e7[_0x32b767(0x440)],![],null,[_0x1b1749('Eye\x20h'+_0x32b767(0x317),_0x5edf53(_0xf91c49[_0x32b767(0x52b)+'ight'],0xf29*0x2+-0x3*-0x6ab+-0x3253+0.8,-0x17af+-0x17*0x7f+0x231a*0x1+0.6000000000000001,-0x1d*0xb8+0x1*-0x1a4f+0x2f27+0.02,_0x9b5dfd=>{var _0x13b442=_0x32b767,_0x6874de={'qFsCA':_0x13b442(0x4f6)+'n'};if(_0x13b442(0x63f)!==_0x13b442(0x401))_0xf91c49['camHe'+_0x13b442(0x39e)]=_0x9b5dfd,_0x2ba3e7['HbYnW'](_0x489c9a);else{var _0x4c4ff6=_0x46d695['creat'+_0x13b442(0x2ee)+'ent'](_0x13b442(0x4f6)+'n');return _0x4c4ff6['type']=_0x6874de[_0x13b442(0x3ab)],_0x4c4ff6[_0x13b442(0x29f)+'onten'+'t']=_0x473d8e,_0x4c4ff6[_0x13b442(0x41e)]['cssTe'+'xt']='borde'+'r:1px'+_0x13b442(0x379)+_0x13b442(0x5f5)+_0x13b442(0x4f3)+',107,'+_0x13b442(0x44f)+_0x13b442(0x32a)+_0x13b442(0x5dc)+_0x13b442(0x2b7)+_0x13b442(0x62d)+'55,10'+_0x13b442(0x144)+_0x13b442(0x33f)+_0x13b442(0x318)+'r:#ff'+'d7e3;'+'borde'+_0x13b442(0x5a4)+_0x13b442(0x47b)+'px;pa'+_0x13b442(0x2f1)+':4px\x20'+'10px;'+_0x13b442(0x42e)+_0x13b442(0x322)+_0x13b442(0x503)+_0x13b442(0x684)+_0x13b442(0x5d9)+'nter',_0x4c4ff6[_0x13b442(0x378)+'ck']=_0xf97579=>{var _0x5bc627=_0x13b442;_0xf97579[_0x5bc627(0x490)+_0x5bc627(0x2fe)+'ation'](),_0x3c138f();},_0x4c4ff6;}})),_0x1b1749('Playe'+_0x32b767(0x172)+'ght',_0x2ba3e7[_0x32b767(0x1a6)](_0x5edf53,_0xf91c49[_0x32b767(0x58c)+_0x32b767(0x6bc)+'ht'],-0x1*-0x8e3+-0x1798+0x1*0xeb6+0.19999999999999996,-0x14b0+0x959*0x3+-0x39*0x21+0.3999999999999999,0x19e1+0x2*0x326+-0x202d+0.02,_0xf71649=>{var _0x981d4e=_0x32b767;_0xf91c49['playe'+_0x981d4e(0x6bc)+'ht']=_0xf71649,_0x489c9a();})),_0x2ba3e7[_0x32b767(0xe0)](_0x1b1749,_0x32b767(0x5fb)+_0x32b767(0x68f)+_0x32b767(0x5c1),_0x5edf53(_0xf91c49[_0x32b767(0x193)+'errid'+'e'],-0xe68*0x1+-0x2273+0x1*0x30db,0x1eec+-0x11ba+-0xcba,-0x25e1+0x90*0x6+0x2282,_0x520c83=>{var _0x375b2b=_0x32b767;_0xf91c49[_0x375b2b(0x193)+'errid'+'e']=_0x520c83,_0x2ba3e7['vYKyV'](_0x489c9a);}))]),_0x2ba3e7[_0x32b767(0x173)](_0x29cec8,_0x2ba3e7[_0x32b767(0x2a9)],_0xf91c49['safeM'+'ode'],_0x58f5a5=>{var _0x3a6613=_0x32b767;if(_0x2ba3e7[_0x3a6613(0x598)]('yVWyV',_0x2ba3e7[_0x3a6613(0x1a0)])){_0xf91c49[_0x3a6613(0x142)+_0x3a6613(0x683)]=_0x58f5a5,_0x489c9a();if(_0x58f5a5){if(_0x3a6613(0x6c0)===_0x2ba3e7[_0x3a6613(0xf0)]){for(var _0xd6ce31 in _0x4fbb39)_0x202cee(_0xd6ce31,![]);}else{var _0x46f749=new _0x826ee8(_0x52c8ea)[_0x3a6613(0xba)+_0x3a6613(0x5e6)](_0x58ff56,'i8');return _0x46f749?_0x46f749['val']():-0x1e93*-0x1+0x1a17+-0x38aa;}}}else _0x2bf416[_0x3a6613(0x33d)](_0x1a8f2f,_0x135028,-0x41c+0x1*0x9ad+-0x4e1,'f32',0x17*-0x17f+0x17cd+0xa9c*0x1),_0x2bf416[_0x3a6613(0x33d)](_0x580ba2,_0x6c42c7,0x7f*0x47+0xcf5+-0x2f6a,'f32',0x1*0x10cb+-0x90c+-0x7bf),_0xd7a0b(_0x4a6090,0x1b1*-0xd+0xfac+0x17*0x4f,_0x2bf416['TGMic'],-0x3c*0x40+0x8af*0x2+-0x25e),_0x2bf416['KjJVp'](_0x3add75,_0xbdc587,-0x19e*-0x16+-0x2c8*-0x5+0x2*-0x185e,_0x3a6613(0x4d3),-0x3*0xab5+0x8b*-0xd+0x5*0x7d6);},[_0x1b1749(_0x2ba3e7['xkUCm'],_0x51fffd(_0xf91c49[_0x32b767(0x592)+_0x32b767(0x520)+'e'],_0x3d7963=>{var _0xa06a9d=_0x32b767;_0xa06a9d(0x1ce)===_0xa06a9d(0x1ce)?(_0xf91c49['hookC'+'aptur'+'e']=_0x3d7963,_0x489c9a()):_0x193f4b[_0xa06a9d(0xdb)](_0x6afc76,_0xcec135);})),_0x2ba3e7[_0x32b767(0x1e9)](_0x1b1749,_0x32b767(0x505)+_0x32b767(0x4d6)+_0x32b767(0x385)+'e',_0x51fffd(_0xf91c49['hookS'+_0x32b767(0x103)],_0x4928e9=>{var _0x4db399=_0x32b767;_0xf91c49[_0x4db399(0x3b4)+_0x4db399(0x103)]=_0x4928e9,_0x2ba3e7['wdsMx'](_0x489c9a);})),_0x1b1749(_0x2ba3e7[_0x32b767(0x1af)],_0x51fffd(_0xf91c49['hookN'+'oReco'+'il'],_0x2d8629=>{var _0x5e2e2f=_0x32b767,_0x298e5b={'PptGr':function(_0x4f2041,_0x2f3e2e){return _0x4f2041(_0x2f3e2e);},'qrIud':'--p','RWvbB':function(_0x29581c,_0x127a29){return _0x29581c/_0x127a29;},'NCECT':function(_0x3f7e83,_0x16c589){return _0x3f7e83-_0x16c589;}};if(_0x5e2e2f(0x275)==='gxiak'){var _0x52a640=('1|8|1'+'2|15|'+_0x5e2e2f(0x579)+_0x5e2e2f(0x2be)+_0x5e2e2f(0x2c5)+_0x5e2e2f(0x534)+_0x5e2e2f(0x37f)+'|0')['split']('|'),_0x1f61db=-0x56c+-0x1175+0x16e1;while(!![]){switch(_0x52a640[_0x1f61db++]){case'0':return _0x291c6d;case'1':var _0x291c6d=_0x108742['creat'+_0x5e2e2f(0x2ee)+_0x5e2e2f(0x108)](_0x5e2e2f(0x67e));continue;case'2':_0x4f297f['class'+_0x5e2e2f(0x408)]=_0x2bf416[_0x5e2e2f(0x177)];continue;case'3':_0x4f297f[_0x5e2e2f(0x2b4)]=_0xf73a19;continue;case'4':_0x4f297f['oninp'+'ut']=()=>{var _0xcad920=_0x5e2e2f;_0x5147f9[_0xcad920(0x29f)+_0xcad920(0x637)+'t']=_0x298e5b[_0xcad920(0x274)](_0x3cb392,_0x4f297f[_0xcad920(0x2c2)])['toFix'+'ed'](-0x1*-0x173a+-0x813+-0xf25)[_0xcad920(0x4c1)+'ce'](/\.?0+$/,''),_0x291c6d[_0xcad920(0x41e)]['setPr'+_0xcad920(0x6e6)+'y'](_0x298e5b[_0xcad920(0x572)],_0x298e5b[_0xcad920(0xbe)](_0x298e5b['NCECT'](_0x4f297f['value'],_0x48511e),_0x4c2d1b-_0x4efa9a)*(-0x5b*0x5f+-0x1117*0x1+0x3340)+'%'),_0x298e5b[_0xcad920(0x274)](_0x400902,_0x29e842(_0x4f297f['value']));};continue;case'5':_0x291c6d[_0x5e2e2f(0x3c3)+'d'](_0x4f297f,_0x5147f9);continue;case'6':_0x5147f9['textC'+'onten'+'t']=_0x9089b8(_0x4dea94)[_0x5e2e2f(0x6c7)+'ed'](0x34*0x38+0x893*-0x2+0x5c8)[_0x5e2e2f(0x4c1)+'ce'](/\.?0+$/,'');continue;case'7':_0x4f297f[_0x5e2e2f(0x2c2)]=_0x5b9eaf;continue;case'8':_0x291c6d['class'+'Name']=_0x2bf416['nKZsx'];continue;case'9':_0x5147f9['class'+_0x5e2e2f(0x408)]=_0x2bf416[_0x5e2e2f(0x35b)];continue;case'10':var _0x5147f9=_0x47ba09[_0x5e2e2f(0x5d5)+_0x5e2e2f(0x2ee)+'ent'](_0x2bf416[_0x5e2e2f(0x237)]);continue;case'11':_0x291c6d[_0x5e2e2f(0x41e)][_0x5e2e2f(0x29a)+'opert'+'y'](_0x5e2e2f(0x5b0),_0x2bf416[_0x5e2e2f(0x3b8)](_0x389cd0-_0x4d8644,_0x2bf416['GncEM'](_0x3866c3,_0x3a6d13))*(-0x6*0x5f9+0x190+0x22aa)+'%');continue;case'12':var _0x4f297f=_0x1ed471[_0x5e2e2f(0x5d5)+_0x5e2e2f(0x2ee)+_0x5e2e2f(0x108)](_0x5e2e2f(0x528));continue;case'13':_0x4f297f['min']=_0x191987;continue;case'14':_0x4f297f['max']=_0x53c5dc;continue;case'15':_0x4f297f['type']=_0x2bf416['SoyTU'];continue;}break;}}else _0xf91c49['hookN'+_0x5e2e2f(0x659)+'il']=_0x2d8629,_0x489c9a();})),_0x1a4e29(_0x2ba3e7[_0x32b767(0x3fe)](_0x2ba3e7[_0x32b767(0x3fe)]('hooks'+'\x20'+_0x14ea93['hooks'+'Ok']+'/',_0x14ea93[_0x32b767(0x58f)+'Total']),_0x32b767(0x46c)+_0x32b767(0x6ab))),_0x2ba3e7['lLUfi'](_0x1a4e29,_0x2ba3e7[_0x32b767(0x3fe)](_0x2ba3e7['Jtjmf'](_0x32b767(0x58c)+_0x32b767(0x3f5)+_0x14ea93[_0x32b767(0x58c)+'rs'],_0x32b767(0x665)+'ate\x20'),_0x14ea93['state']?'ok':'—')),_0x1a4e29(_0x2ba3e7['Jtjmf'](_0x2ba3e7['Jtjmf'](_0x2ba3e7[_0x32b767(0x63e)](_0x32b767(0x6be)+'r\x20'+(_0x14ea93['linke'+'r']?'✓':'—')+_0x2ba3e7[_0x32b767(0x2b8)],_0x14ea93[_0x32b767(0x5d8)]?'✓':'—'),'\x20view'+'\x20'),_0x14ea93[_0x32b767(0x150)+_0x32b767(0x33a)]?'✓':'—')+_0x32b767(0x4e4)+(_0x14ea93['charC'+'am']?'✓':'—')),_0x14ea93[_0x32b767(0x33c)+_0x32b767(0x2e1)]?_0x1a4e29(String(_0x14ea93['lastE'+'rror'])['slice'](0x2*-0xca+0x1a5c+-0x18c8,0x141+-0x1*-0x7a2+0x1af*-0x5)):_0x1a4e29(_0x2ba3e7['ETFiO'])]),_0x2ba3e7['bfrhD'](_0x29cec8,_0x2ba3e7[_0x32b767(0x4fe)],![],null,[(function(){var _0x75d3ab=_0x32b767,_0x310978={'QTnCy':_0x2bf416[_0x75d3ab(0x626)],'CnJKV':_0x75d3ab(0x5a0),'rqGZj':'copy','EgSNf':_0x75d3ab(0x360)+_0x75d3ab(0x471),'TGkPL':function(_0x41eb9d){return _0x41eb9d();},'fDymj':function(_0x379c7c,_0x2781b8){return _0x379c7c+_0x2781b8;},'dTvxL':_0x2bf416[_0x75d3ab(0x21f)]};if(_0x2bf416['gweXI'](_0x75d3ab(0x11f),_0x2bf416[_0x75d3ab(0x5d4)])){var _0x32bd24=document[_0x75d3ab(0x5d5)+_0x75d3ab(0x2ee)+_0x75d3ab(0x108)](_0x2bf416['mIfuv']),_0x2b8fd8=document[_0x75d3ab(0x5d5)+_0x75d3ab(0x2ee)+_0x75d3ab(0x108)]('texta'+_0x75d3ab(0x638));_0x2b8fd8[_0x75d3ab(0x403)+_0x75d3ab(0x6ad)]=!![],_0x2b8fd8['style']['cssTe'+'xt']=_0x2bf416[_0x75d3ab(0x339)],_0x2b8fd8[_0x75d3ab(0x2c2)]=_0x459172();var _0x5d7cf4=document[_0x75d3ab(0x5d5)+_0x75d3ab(0x2ee)+_0x75d3ab(0x108)](_0x2bf416['mIfuv']);_0x5d7cf4['style'][_0x75d3ab(0x2e0)+'xt']=_0x75d3ab(0x469)+'ay:fl'+'ex;ga'+_0x75d3ab(0x496)+_0x75d3ab(0x1be)+'in-to'+'p:6px';var _0x1a53c3=_0x2bf416[_0x75d3ab(0x20e)](_0x426e8c,_0x75d3ab(0x43d)+_0x75d3ab(0xc6),function(){var _0x2ed1f6=_0x75d3ab,_0x2127f5={'QLtyV':_0x310978[_0x2ed1f6(0x3f1)]},_0xf9f091=_0x459172();navigator[_0x2ed1f6(0x230)+_0x2ed1f6(0x312)]&&navigator['clipb'+_0x2ed1f6(0x312)][_0x2ed1f6(0x26b)+'Text']?navigator['clipb'+'oard'][_0x2ed1f6(0x26b)+_0x2ed1f6(0x482)](_0xf9f091)['then'](function(){var _0x2bf77f=_0x2ed1f6;_0x1a53c3[_0x2bf77f(0x29f)+_0x2bf77f(0x637)+'t']=_0x2bf77f(0x360)+'d\x20✓',setTimeout(function(){var _0x48d24c=_0x2bf77f;_0x1a53c3[_0x48d24c(0x29f)+_0x48d24c(0x637)+'t']=_0x2127f5['QLtyV'];},0x7d9+0x5dd+-0x7da);}):_0x310978[_0x2ed1f6(0x655)]===_0x2ed1f6(0x5a0)?(_0x2b8fd8[_0x2ed1f6(0x2ed)+'t'](),document[_0x2ed1f6(0x45e)+'omman'+'d'](_0x310978['rqGZj']),_0x1a53c3[_0x2ed1f6(0x29f)+'onten'+'t']=_0x310978['EgSNf'],setTimeout(function(){var _0x51e539=_0x2ed1f6;_0x1a53c3['textC'+'onten'+'t']=_0x310978[_0x51e539(0x3f1)];},-0x2*-0x266+-0x34f*0x8+0x1b88)):(_0x4bf44d[_0x2ed1f6(0xc6)]['lengt'+'h']=0x100*-0x5+0x347*0xa+0x2*-0xde3,_0x4ba01f['value']=_0xfa6ee());}),_0x57b89c=_0x426e8c(_0x2bf416['aMHbm'],function(){var _0x1a2f85=_0x75d3ab,_0x4192ef=new Blob([_0x2bf416['wozeN'](_0x459172)],{'type':_0x1a2f85(0x64e)+'plain'}),_0x479fc5=document['creat'+_0x1a2f85(0x2ee)+_0x1a2f85(0x108)]('a');_0x479fc5[_0x1a2f85(0x4fb)]=URL[_0x1a2f85(0x5d5)+_0x1a2f85(0x57d)+'ctURL'](_0x4192ef),_0x479fc5[_0x1a2f85(0x3f8)+'oad']=_0x2bf416[_0x1a2f85(0x4e1)],_0x479fc5[_0x1a2f85(0x49d)](),setTimeout(function(){var _0x3b876e=_0x1a2f85;URL[_0x3b876e(0x33b)+_0x3b876e(0x57d)+_0x3b876e(0x544)](_0x479fc5['href']);},0x10fa+-0x14+-0xcfe);}),_0xcf2428=_0x2bf416['WGsYV'](_0x426e8c,'Dump\x20'+_0x75d3ab(0x188)+_0x75d3ab(0x244)+'\x20(F6)',function(){_0x369dcc();}),_0x4cdc1a=_0x426e8c('Clear',function(){var _0x5a944f=_0x75d3ab;_0x1400d6[_0x5a944f(0xc6)][_0x5a944f(0x46f)+'h']=0x702+-0x1e9*0x14+-0x21*-0xf2,_0x2b8fd8[_0x5a944f(0x2c2)]=_0x310978['TGkPL'](_0x459172);});return _0x5d7cf4['appen'+'d'](_0x1a53c3,_0x57b89c,_0xcf2428,_0x4cdc1a),_0x32bd24[_0x75d3ab(0x3c3)+'d'](_0x2b8fd8,_0x5d7cf4),_0x32bd24;}else{if(!_0xe4ae)return;_0x1ed2e2['style'][_0x75d3ab(0x45b)]=_0x310978[_0x75d3ab(0x67d)](_0x2035d8[_0x75d3ab(0x5f7)](_0x2df699['max'](-0x2662+-0xcd4+0x3336,_0xa224fe[_0x75d3ab(0x62e)+'tX']-_0x21728a[0x3*0x413+-0x475+-0x7c4]),_0x12e96d['inner'+_0x75d3ab(0x54b)]-(-0x1df4+0x17ce+0x6ee)),'px'),_0x2fc9c6['style'][_0x75d3ab(0x30d)]=_0x310978[_0x75d3ab(0x67d)](_0x3b450f[_0x75d3ab(0x5f7)](_0x1816a5[_0x75d3ab(0x5f4)](0x1*-0x2157+0x144b+0xd0c,_0x3ae0fc['clien'+'tY']-_0x344134[0x471*0x4+-0x2563+0x13a0]),_0x253d01[_0x75d3ab(0x2cd)+_0x75d3ab(0x121)+'t']-(-0x5*-0x2e2+-0x168c+0x2*0x443)),'px'),_0x124381[_0x75d3ab(0x41e)][_0x75d3ab(0x34f)]=_0x75d3ab(0x561),_0xb0bea[_0x75d3ab(0x41e)]['botto'+'m']=_0x310978[_0x75d3ab(0x481)];}}()),_0x1a4e29('F6\x20du'+_0x32b767(0xc3)+_0x32b767(0x6d5)+_0x32b767(0x3d1)+'g\x20to\x20'+'the\x20D'+'evToo'+_0x32b767(0x15d)+'nsole')])];}return _0x58e16b[_0x33dbc5(0x4c1)+'ceChi'+'ldren'](..._0x236355()),Number[_0x33dbc5(0x27e)+_0x33dbc5(0x402)](_0x3a0e32['x'])&&('dSFur'!==_0x11036f[_0x33dbc5(0x268)]?(_0x5195fd[_0x33dbc5(0x41e)]['left']=_0x3a0e32['x']+'px',_0x5195fd[_0x33dbc5(0x41e)]['top']=_0x3a0e32['y']+'px',_0x5195fd[_0x33dbc5(0x41e)]['right']=_0x33dbc5(0x561),_0x5195fd['style']['botto'+'m']=_0x33dbc5(0x561)):_0x2ba3e7[_0x33dbc5(0xe8)](_0x555dfa,_0x2ba3e7[_0x33dbc5(0x447)],_0x2ba3e7['gwYUx']+(_0x19c7e0&&_0xf5e60d['messa'+'ge']))),_0x5195fd;}function _0x459172(){var _0x35f4bc=_0x1184e8,_0x18665c=[_0x11036f[_0x35f4bc(0x11e)],_0x11036f[_0x35f4bc(0x1ab)](_0x11036f['fkKif']+location[_0x35f4bc(0x234)+_0x35f4bc(0x522)],location['pathn'+_0x35f4bc(0x522)]),_0x11036f['hGuJs'](_0x35f4bc(0x167)+':\x20'+(_0x11036f['RffRu'](window['top'],window[_0x35f4bc(0x10f)])?_0x35f4bc(0x695)+'D':'top'),_0x11036f[_0x35f4bc(0x69f)])+(navigator['userA'+'gent']||'')[_0x35f4bc(0x133)](0x1b9f+-0x10ab+-0xaf4,0x2360+-0x1ada+-0x80e),_0x11036f['zyKTU']('unity'+'Insta'+_0x35f4bc(0x470),!!window['unity'+_0x35f4bc(0x4fd)+'nce'])+_0x11036f[_0x35f4bc(0x5b8)]+!!window[_0x35f4bc(0x3d7)+_0x35f4bc(0x404)+_0x35f4bc(0x5e9)]+(_0x35f4bc(0x25f)+'feMod'+'e:\x20')+_0xf91c49[_0x35f4bc(0x142)+_0x35f4bc(0x683)],_0x11036f[_0x35f4bc(0x2db)](_0x11036f[_0x35f4bc(0x2fd)](_0x11036f[_0x35f4bc(0x45a)](_0x11036f[_0x35f4bc(0x442)](_0x35f4bc(0x58f)+':\x20',_0x14ea93[_0x35f4bc(0x58f)+'Ok'])+'/'+_0x14ea93['hooks'+'Total']+_0x11036f['MOcUZ'],_0x35f4bc(0x665)+'ate:\x20'),_0x14ea93['state']?'ok':'—'),_0x35f4bc(0x55f)+'ayers'+':\x20')+_0x14ea93[_0x35f4bc(0x58c)+'rs'],_0x11036f[_0x35f4bc(0x590)](_0x11036f['pQswy'](_0x11036f['CUhtS'](_0x11036f['yGQdW'](_0x11036f['YROjt'],_0x11036f['rNjys'](_0x7e2804,_0x429d10))+_0x11036f[_0x35f4bc(0x4cf)]+_0x7e2804(_0x4fd863)+_0x11036f[_0x35f4bc(0x207)]+_0x11036f[_0x35f4bc(0x491)](_0x7e2804,_0x47dc01),'\x20tran'+'sform'+':')+_0x7e2804(_0x4aa3c4)+('\x20char'+'Cam:')+_0x7e2804(_0x272fe0),_0x11036f[_0x35f4bc(0x2e8)])+_0x7e2804(_0x50dc42)+(_0x35f4bc(0x4d6)+':')+_0x7e2804(_0x596fa6),_0x35f4bc(0x540)+'e:')+_0x7e2804(_0x2355f9)+('\x20cont'+_0x35f4bc(0x398)+'r:')+_0x11036f['Rzcpc'](_0x7e2804,_0x2356de)+_0x11036f['sprBP']+_0x11036f[_0x35f4bc(0x6e7)](_0x7e2804,_0x13d54d),_0x11036f['GbDOh']+JSON[_0x35f4bc(0x5eb)+_0x35f4bc(0x2c1)](_0xf91c49),_0x14ea93[_0x35f4bc(0x33c)+_0x35f4bc(0x2e1)]?_0x11036f[_0x35f4bc(0x68b)](_0x35f4bc(0x33c)+_0x35f4bc(0x4ce)+'\x20',_0x14ea93[_0x35f4bc(0x33c)+'rror']):'',_0x11036f['LfTHt']+_0x1400d6['logs'][_0x35f4bc(0x46f)+'h']+(_0x35f4bc(0x120)+'ies)\x20'+'═══'),'']['join']('\x0a');return _0x11036f[_0x35f4bc(0x6b1)](_0x18665c,_0x1400d6[_0x35f4bc(0xc6)]['join']('\x0a'));}function _0x369dcc(){var _0x5c7652=_0x1184e8;try{var _0x8d33c1=console['log'];(function(_0x245900){var _0x556761=_0x55f7;for(var _0x292369=-0x39f+-0x2033+-0x23d2*-0x1;_0x292369<_0x245900[_0x556761(0x46f)+'h'];_0x292369++)_0x8d33c1['call'](console,_0x245900[_0x292369]);}(_0x459172()[_0x5c7652(0x155)]('\x0a')));}catch(_0x1fa6fa){}}function _0x149062(){var _0x144f3d=_0x1184e8;try{localStorage['setIt'+'em']('sakur'+_0x144f3d(0x411)+_0x144f3d(0x65d)+'1',JSON[_0x144f3d(0x5eb)+_0x144f3d(0x2c1)](_0x3a0e32));}catch(_0x992cd8){}}var _0x783251=null;function _0x2f062d(_0x55f066){var _0x53948b=_0x1184e8;_0x3fedf9=_0x55f066;if(!_0x783251){var _0x353973=(_0x53948b(0x451)+'|1|4|'+'2')[_0x53948b(0x155)]('|'),_0xa045d7=0x3d5*-0x3+0x715+0xa*0x71;while(!![]){switch(_0x353973[_0xa045d7++]){case'0':var _0x3fadb0=document[_0x53948b(0x5d5)+_0x53948b(0x2ee)+'ent']('style');continue;case'1':_0x783251=_0x4c96ab();continue;case'2':requestAnimationFrame(()=>_0x783251[_0x53948b(0x463)+_0x53948b(0x673)]['add'](_0x53948b(0x608)));continue;case'3':_0x3fadb0['textC'+'onten'+'t']=_0x3e528f;continue;case'4':_0x46e292[_0x53948b(0x3c3)+_0x53948b(0x478)+'d'](_0x783251);continue;case'5':_0x46e292[_0x53948b(0x3c3)+_0x53948b(0x478)+'d'](_0x3fadb0);continue;}break;}}_0x783251[_0x53948b(0x463)+_0x53948b(0x673)][_0x53948b(0x5ce)+'e'](_0x11036f[_0x53948b(0x15f)],_0x55f066);if(_0x55f066)_0x11036f['zIbfJ'](_0x145d5e);}function _0x54c7a5(){var _0x4692e8=_0x1184e8;_0x11036f[_0x4692e8(0x57a)](_0x2f062d,!_0x3fedf9);}function _0x145d5e(){var _0x39478f=_0x1184e8;if(_0x11036f[_0x39478f(0x1a1)]('sTBJj',_0x39478f(0x67a))){if(!_0x783251)return;var _0x26a194=_0x783251[_0x39478f(0x4e8)+'Selec'+'tor'](_0x11036f[_0x39478f(0x365)]);if(_0x26a194){if(_0x11036f['hqdPy'](_0x11036f[_0x39478f(0x5b1)],'ZVSLS'))_0x19a85d&&_0x1cf75a[_0x39478f(0x3ec)]()&&(_0x5b4b1c=_0x402fdd[_0x39478f(0x3ec)](),_0x22191a['room']=!![],_0x506e94('captu'+'re','room\x20'+_0x39478f(0x5fc)+'er\x20re'+'t)\x20@'+_0x3504ea(_0x3c51b1)));else{var _0x4510cf=_0x11036f[_0x39478f(0x643)](_0x4c96ab),_0x24eb67=_0x4510cf[_0x39478f(0x4e8)+_0x39478f(0x6c9)+'tor'](_0x11036f[_0x39478f(0x365)])[_0x39478f(0x1c3)+_0x39478f(0x2e6)];_0x26a194[_0x39478f(0x4c1)+'ceChi'+_0x39478f(0x61c)](..._0x24eb67),Number['isFin'+_0x39478f(0x402)](_0x3a0e32['x'])&&(_0x783251[_0x39478f(0x41e)]['left']=_0x3a0e32['x']+'px',_0x783251[_0x39478f(0x41e)][_0x39478f(0x30d)]=_0x3a0e32['y']+'px');}}}else{if(_0x193239[_0x39478f(0x4bb)]&&(_0x11036f['sriBg'](_0x37f5fd[_0x39478f(0x17a)+'State'],'inter'+_0x39478f(0x4a2)+'e')||_0x11036f['zwylk'](_0x469bda[_0x39478f(0x17a)+_0x39478f(0x224)],_0x39478f(0x1eb)+'ete')))_0x11036f[_0x39478f(0x13f)](_0x19a6b7);else _0x4a0c3f['addEv'+'entLi'+_0x39478f(0x5c4)+'r'](_0x11036f[_0x39478f(0x397)],_0x175652,{'once':!![]});}}window['addEv'+_0x1184e8(0x2a7)+_0x1184e8(0x5c4)+'r']('keydo'+'wn',_0x2afea7=>{var _0x4b43ab=_0x1184e8;_0x2afea7[_0x4b43ab(0x289)]===_0x4b43ab(0x367)+'t'&&(_0x2afea7[_0x4b43ab(0x43a)+_0x4b43ab(0x40a)+_0x4b43ab(0x4f7)](),_0x11036f['Yzdod'](_0x54c7a5)),_0x2afea7[_0x4b43ab(0x289)]==='F6'&&(_0x2afea7['preve'+_0x4b43ab(0x40a)+'ault'](),_0x369dcc());},!![]);var _0x54e5d3=document['creat'+_0x1184e8(0x2ee)+_0x1184e8(0x108)]('div');_0x54e5d3[_0x1184e8(0x41e)][_0x1184e8(0x2e0)+'xt']=_0x1184e8(0x22a)+_0x1184e8(0x567)+_0x1184e8(0x210)+'top:1'+'2px;r'+'ight:'+'12px;'+_0x1184e8(0x32b)+'ex:21'+'47483'+_0x1184e8(0x1f5)+'ursor'+':poin'+'ter;w'+'idth:'+_0x1184e8(0x525)+_0x1184e8(0x6e3)+_0x1184e8(0x614)+_0x1184e8(0x535)+'city:'+_0x1184e8(0x21d)+_0x1184e8(0x29c)+_0x1184e8(0x5c6)+_0x1184e8(0x5fe)+'ty\x200.'+_0x1184e8(0x12f)+'inter'+_0x1184e8(0x248)+_0x1184e8(0x31f)+_0x1184e8(0x486)+_0x1184e8(0x3ca)+_0x1184e8(0x5aa)+_0x1184e8(0x3ef)+_0x1184e8(0x423)+_0x1184e8(0x5ec)+'rgba('+_0x1184e8(0x546)+_0x1184e8(0x3c1)+_0x1184e8(0x454)+'))',_0x54e5d3['inner'+'HTML']='<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+_0x1184e8(0x498)+_0x1184e8(0x5db)+'earGr'+_0x1184e8(0x2af)+'t\x20id='+_0x1184e8(0x5f2)+'rad\x22\x20'+_0x1184e8(0x6dc)+'\x22\x20y1='+_0x1184e8(0x669)+_0x1184e8(0x418)+_0x1184e8(0x159)+'\x2221\x22\x20'+_0x1184e8(0x125)+_0x1184e8(0x46b)+'its=\x22'+_0x1184e8(0xd2)+'paceO'+'nUse\x22'+_0x1184e8(0x1f0)+_0x1184e8(0x60a)+'set=\x22'+'0\x22\x20st'+_0x1184e8(0x205)+_0x1184e8(0x3bd)+_0x1184e8(0x6a7)+'ec\x22/>'+_0x1184e8(0x4dc)+_0x1184e8(0x51a)+'et=\x220'+'.45\x22\x20'+'stop-'+'color'+'=\x22#ff'+_0x1184e8(0x6e5)+'/><st'+'op\x20of'+'fset='+_0x1184e8(0x1f8)+_0x1184e8(0x615)+_0x1184e8(0x106)+_0x1184e8(0x6b4)+_0x1184e8(0x1dc)+'></li'+_0x1184e8(0x642)+'radie'+'nt></'+_0x1184e8(0x384)+'<path'+'\x20d=\x22M'+'12\x2021'+_0x1184e8(0x600)+'-2.5-'+_0x1184e8(0x4ad)+_0x1184e8(0x52d)+_0x1184e8(0x306)+'.5\x201.'+_0x1184e8(0x1db)+_0x1184e8(0x20a)+'5s4\x202'+'\x204\x204.'+_0x1184e8(0x56e)+_0x1184e8(0x319)+_0x1184e8(0x647)+'.5z\x22\x20'+_0x1184e8(0x6a2)+_0x1184e8(0x6d4)+'\x22\x20str'+_0x1184e8(0x6ca)+'url(#'+'sk-gr'+_0x1184e8(0x1df)+_0x1184e8(0x4ea)+'e-wid'+_0x1184e8(0x671)+_0x1184e8(0x49f)+_0x1184e8(0x49c)+'ineca'+_0x1184e8(0x399)+_0x1184e8(0x50e)+'strok'+_0x1184e8(0x629)+_0x1184e8(0x653)+'=\x22rou'+_0x1184e8(0x2d7)+_0x1184e8(0x2c4)+_0x1184e8(0x1c9)+_0x1184e8(0x690)+_0x1184e8(0x52f)+'3c-1.'+_0x1184e8(0x306)+_0x1184e8(0x269)+_0x1184e8(0x58a)+_0x1184e8(0x641)+_0x1184e8(0x5a2)+_0x1184e8(0x3b3)+'.5\x201\x20'+'2.5\x202'+_0x1184e8(0x5de)+'ill=\x22'+'none\x22'+'\x20stro'+'ke=\x22u'+_0x1184e8(0x2d9)+_0x1184e8(0x4a6)+'d)\x22\x20s'+'troke'+_0x1184e8(0x391)+'h=\x221.'+_0x1184e8(0x5b3)+'roke-'+_0x1184e8(0x676)+'ap=\x22r'+'ound\x22'+_0x1184e8(0x419)+_0x1184e8(0x568)+_0x1184e8(0x123)+'2\x22\x20cy'+'=\x2210\x22'+'\x20r=\x221'+'.5\x22\x20f'+_0x1184e8(0x107)+_0x1184e8(0x56f)+_0x1184e8(0x648)+'</svg'+'>',_0x54e5d3['title']='Sakur'+_0x1184e8(0x67c)+'ent\x20-'+'\x202v2.'+'io',_0x54e5d3[_0x1184e8(0x104)+'seent'+'er']=()=>_0x54e5d3[_0x1184e8(0x41e)][_0x1184e8(0x5fe)+'ty']='1',_0x54e5d3[_0x1184e8(0x104)+_0x1184e8(0x4b8)+'ve']=()=>_0x54e5d3['style']['opaci'+'ty']=_0x1184e8(0x556),_0x54e5d3['oncli'+'ck']=_0x53a633=>{var _0x198802=_0x1184e8,_0x5c34b6={'TTNDd':function(_0x503053,_0x4976c){return _0x11036f['BtUVg'](_0x503053,_0x4976c);},'ZvXYJ':'strin'+'g'};if(_0x11036f['AAkXO'](_0x198802(0x3de),'emdQI')){if(_0x5c34b6['TTNDd'](typeof _0x4baa13,_0x5c34b6[_0x198802(0x293)]))return _0x54ca48;if(_0x1d2dad&&_0x3f11fa['messa'+'ge'])return _0x42d369[_0x198802(0x5e1)+'ge'];try{return _0x575291(_0xaf27);}catch(_0x3f807a){return'?';}}else _0x53a633[_0x198802(0x490)+_0x198802(0x2fe)+_0x198802(0x257)](),_0x11036f[_0x198802(0x387)](_0x54c7a5);};var _0x3e528f=_0x1184e8(0x299)+_0x1184e8(0x4f4)+'\x20all:'+_0x1184e8(0x166)+_0x1184e8(0x682)+_0x1184e8(0x4ee)+_0x1184e8(0x3b5)+_0x1184e8(0x287)+_0x1184e8(0x627)+'borde'+'r-box'+';\x20mar'+'gin:\x20'+_0x1184e8(0x3fc)+_0x1184e8(0x14d)+'mily:'+_0x1184e8(0x1d2)+'er\x22,\x20'+_0x1184e8(0x34b)+_0x1184e8(0x624)+_0x1184e8(0x4b9)+_0x1184e8(0x2b3)+_0x1184e8(0xef)+'ns-se'+'rif;\x20'+_0x1184e8(0x3a8)+'mn-pa'+_0x1184e8(0x685)+_0x1184e8(0x412)+_0x1184e8(0x5c6)+'\x20abso'+'lute;'+'\x20righ'+_0x1184e8(0x4ae)+_0x1184e8(0xe5)+'ottom'+_0x1184e8(0xca)+_0x1184e8(0x36f)+_0x1184e8(0x370)+_0x1184e8(0x340)+_0x1184e8(0x571)+'\x20calc'+_0x1184e8(0x288)+_0x1184e8(0x574)+'8px))'+_0x1184e8(0x327)+'-heig'+'ht:\x20m'+_0x1184e8(0x1ed)+_0x1184e8(0x315)+'calc('+'100vh'+'\x20-\x2048'+_0x1184e8(0x3d0)+'\x0a\x20\x20\x20\x20'+_0x1184e8(0x469)+'ay:\x20f'+_0x1184e8(0x696)+'gap:\x20'+'10px;'+'\x20padd'+_0x1184e8(0x627)+_0x1184e8(0x15a)+'\x20bord'+_0x1184e8(0x377)+'dius:'+_0x1184e8(0xed)+_0x1184e8(0x1bc)+_0x1184e8(0x50a)+'event'+'s:\x20au'+_0x1184e8(0x3a7)+_0x1184e8(0x338)+_0x1184e8(0x5dc)+_0x1184e8(0x597)+_0x1184e8(0x341)+'24,17'+_0x1184e8(0x6a9)+_0x1184e8(0x45c)+_0x1184e8(0x1de)+_0x1184e8(0x35f)+_0x1184e8(0x300)+':\x20blu'+_0x1184e8(0x169)+'x)\x20sa'+'turat'+'e(150'+_0x1184e8(0x5cb)+'webki'+'t-bac'+_0x1184e8(0x63b)+_0x1184e8(0x233)+_0x1184e8(0x510)+'lur(2'+'2px)\x20'+_0x1184e8(0x607)+_0x1184e8(0x65c)+_0x1184e8(0x325)+_0x1184e8(0x475)+'box-s'+_0x1184e8(0x4cd)+_0x1184e8(0x6a1)+_0x1184e8(0x1b1)+_0x1184e8(0x65b)+_0x1184e8(0x4f3)+_0x1184e8(0x202)+'255,.'+_0x1184e8(0x204)+_0x1184e8(0x361)+'\x200\x201p'+'x\x200\x20r'+_0x1184e8(0x62d)+_0x1184e8(0x625)+'5,255'+',.05)'+_0x1184e8(0x351)+'0px\x208'+_0x1184e8(0x22d)+_0x1184e8(0x136)+',0,0,'+'.55);'+'\x0a\x20\x20\x20\x20'+_0x1184e8(0x5fe)+_0x1184e8(0x375)+_0x1184e8(0x420)+_0x1184e8(0x64f)+_0x1184e8(0x569)+'ansla'+'teY(1'+_0x1184e8(0x113)+_0x1184e8(0x11d)+_0x1184e8(0x353)+_0x1184e8(0x483)+_0x1184e8(0x31c)+_0x1184e8(0x693)+_0x1184e8(0x51e)+_0x1184e8(0x162)+'opaci'+'ty\x20.3'+_0x1184e8(0x620)+_0x1184e8(0x67f)+_0x1184e8(0x36d)+_0x1184e8(0x406)+_0x1184e8(0x54d)+_0x1184e8(0x428)+_0x1184e8(0x67b)+'r(.22'+_0x1184e8(0x364)+'6,1);'+_0x1184e8(0x475)+'color'+':\x20#f6'+'eef2;'+_0x1184e8(0xd6)+_0x1184e8(0x10a)+_0x1184e8(0x4d5)+'x;\x20}\x0a'+'\x20\x20.mn'+_0x1184e8(0x2ac)+_0x1184e8(0x1d3)+'wn\x20{\x20'+_0x1184e8(0x5fe)+'ty:\x201'+_0x1184e8(0x420)+'nsfor'+_0x1184e8(0x5b5)+_0x1184e8(0x1b2)+'ointe'+_0x1184e8(0x59c)+'nts:\x20'+'auto;'+'\x20}\x0a\x20\x20'+_0x1184e8(0x251)+_0x1184e8(0x24d)+'sk-dr'+_0x1184e8(0x10d)+'g\x20{\x20t'+_0x1184e8(0x29c)+'tion:'+'\x20none'+';\x20}\x0a\x20'+_0x1184e8(0x28b)+'side\x20'+_0x1184e8(0x62b)+'play:'+_0x1184e8(0x267)+';\x20fle'+_0x1184e8(0x336)+_0x1184e8(0x281)+_0x1184e8(0x636)+_0x1184e8(0x12b)+_0x1184e8(0x42f)+_0x1184e8(0x6bb)+_0x1184e8(0x3c5)+'enter'+';\x20gap'+_0x1184e8(0x395)+_0x1184e8(0x3d4)+_0x1184e8(0x1cc)+_0x1184e8(0x488)+(_0x1184e8(0x63d)+'\x20none'+_0x1184e8(0x3df)+_0x1184e8(0x553)+'\x2012px'+_0x1184e8(0x56b)+_0x1184e8(0x28d)+_0x1184e8(0x4a8)+_0x1184e8(0x17f)+'6px;\x0a'+'\x20\x20\x20\x20b'+_0x1184e8(0x132)+_0x1184e8(0x560)+_0x1184e8(0xb9)+_0x1184e8(0x3d3)+_0x1184e8(0x1f9)+'55,.0'+'25);\x20'+'box-s'+'hadow'+':\x20ins'+_0x1184e8(0x55b)+_0x1184e8(0x4c5)+'px\x20rg'+_0x1184e8(0x4c8)+_0x1184e8(0x258)+',255,'+'.05);'+_0x1184e8(0x334)+'.mn-l'+'ogo\x20{'+_0x1184e8(0x4b1)+'lay:\x20'+_0x1184e8(0x3e3)+_0x1184e8(0x350)+'e-ite'+'ms:\x20c'+'enter'+_0x1184e8(0x3d4)+_0x1184e8(0x5a5)+'2px;\x20'+'heigh'+_0x1184e8(0x631)+_0x1184e8(0x644)+_0x1184e8(0xff)+'n-log'+_0x1184e8(0x4d4)+'\x20{\x20wi'+'dth:\x20'+'25px;'+_0x1184e8(0x2f3)+'ht:\x202'+_0x1184e8(0x69d)+_0x1184e8(0xfc)+_0x1184e8(0x6b9)+_0x1184e8(0x3e8)+'le;\x20f'+_0x1184e8(0x300)+_0x1184e8(0x147)+_0x1184e8(0x509)+'dow(0'+_0x1184e8(0x672)+'x\x20rgb'+'a(255'+_0x1184e8(0x218)+'157,.'+_0x1184e8(0x29d)+'rop-s'+_0x1184e8(0x4cd)+'(0\x200\x20'+'10px\x20'+_0x1184e8(0x341)+_0x1184e8(0x546)+_0x1184e8(0x3c1)+_0x1184e8(0x19d)+');\x20}\x0a'+_0x1184e8(0x42c)+'-main'+_0x1184e8(0x60b)+_0x1184e8(0x372)+_0x1184e8(0x3dd)+_0x1184e8(0x391)+_0x1184e8(0x2fb)+'\x20disp'+_0x1184e8(0x3bc)+_0x1184e8(0x21a)+_0x1184e8(0x267)+_0x1184e8(0x55e)+_0x1184e8(0x1cd)+_0x1184e8(0x3e6)+_0x1184e8(0x43b)+'}\x0a\x20\x20.'+_0x1184e8(0x508)+_0x1184e8(0x3db)+'ispla'+'y:\x20fl'+_0x1184e8(0x588)+_0x1184e8(0x38b)+'items'+_0x1184e8(0x323)+_0x1184e8(0x55c)+_0x1184e8(0x60f)+'12px;'+_0x1184e8(0x6df)+_0x1184e8(0x627)+'6px\x206'+_0x1184e8(0x16a)+'px;\x20c'+_0x1184e8(0x5c7)+_0x1184e8(0x380)+_0x1184e8(0x462)+'er-se'+'lect:'+_0x1184e8(0x536)+';\x20tou'+_0x1184e8(0x4d7)+'tion:'+'\x20none'+_0x1184e8(0x461)+'\x20.mn-'+_0x1184e8(0x5bc)+_0x1184e8(0x129)+_0x1184e8(0x456)+_0x1184e8(0x195)+'\x20font'+_0x1184e8(0x14f)+'ht:\x206'+_0x1184e8(0x235)+_0x1184e8(0x4f1)+_0x1184e8(0x48c)+'ing:\x20'+_0x1184e8(0x1a3)+_0x1184e8(0x5d1)+_0x1184e8(0x42c)+'-clos'+'e\x20{\x20d'+'ispla'+'y:\x20gr'+_0x1184e8(0x582)+'lace-'+'items'+_0x1184e8(0x323)+'ter;\x20'+_0x1184e8(0x2de)+_0x1184e8(0x436)+_0x1184e8(0x308)+_0x1184e8(0x531)+_0x1184e8(0x359)+_0x1184e8(0x507)+_0x1184e8(0xb1)+_0x1184e8(0x4d0)+_0x1184e8(0x57e)+_0x1184e8(0x36e)+_0x1184e8(0x604)+_0x1184e8(0x5b2)+_0x1184e8(0x5dc)+_0x1184e8(0x597)+'trans'+_0x1184e8(0x34e)+_0x1184e8(0x53a)+_0x1184e8(0x184)+'inher'+_0x1184e8(0x4e9)+_0x1184e8(0x16b)+_0x1184e8(0x219)+'5;\x20cu'+_0x1184e8(0x2dd)+'\x20poin'+_0x1184e8(0x55c)+_0x1184e8(0x686)+_0x1184e8(0x519)+':\x20opa'+_0x1184e8(0xda)+'.2s,\x20'+'backg'+'round'+'\x20.2s;'+'\x20}\x0a\x20\x20'+'.mn-c'+_0x1184e8(0x1a8)+'hover'+_0x1184e8(0x3b2)+_0x1184e8(0x390)+_0x1184e8(0x2a4)+_0x1184e8(0x2f2)+_0x1184e8(0x1c8)+_0x1184e8(0x2cf)+_0x1184e8(0x4f3)+_0x1184e8(0x202)+_0x1184e8(0x15c)+_0x1184e8(0x228)+'}\x0a\x20\x20.'+_0x1184e8(0x55a)+_0x1184e8(0x376)+_0x1184e8(0x2a3)+'width'+':\x2014p'+'x;\x20he'+_0x1184e8(0x531)+_0x1184e8(0x239))+(';\x20fil'+_0x1184e8(0x6bf)+_0x1184e8(0x5cc)+_0x1184e8(0x117)+':\x20cur'+'rentC'+'olor;'+'\x20stro'+_0x1184e8(0x139)+_0x1184e8(0x370)+_0x1184e8(0x2b0)+'roke-'+_0x1184e8(0x676)+'ap:\x20r'+_0x1184e8(0x69c)+_0x1184e8(0x334)+'.mn-c'+_0x1184e8(0x4fa)+_0x1184e8(0x267)+_0x1184e8(0x2a4)+_0x1184e8(0x4f2)+_0x1184e8(0x317)+':\x200;\x20'+_0x1184e8(0xfc)+'low-y'+_0x1184e8(0x466)+'o;\x20di'+_0x1184e8(0x253)+_0x1184e8(0x2e3)+_0x1184e8(0x407)+_0x1184e8(0x18f)+'mplat'+'e-col'+'umns:'+'\x201fr;'+_0x1184e8(0x6cd)+_0x1184e8(0x6a6)+_0x1184e8(0x3df)+_0x1184e8(0x553)+_0x1184e8(0x672)+_0x1184e8(0x2b6)+'\x200;\x20}'+_0x1184e8(0x563)+'k-car'+_0x1184e8(0x5be)+_0x1184e8(0x28d)+'-radi'+_0x1184e8(0x17f)+_0x1184e8(0x488)+_0x1184e8(0x2f2)+'round'+_0x1184e8(0x2cf)+'a(255'+_0x1184e8(0x202)+_0x1184e8(0x15c)+_0x1184e8(0x5da)+_0x1184e8(0x146)+_0x1184e8(0x3ef)+_0x1184e8(0xd4)+'set\x200'+_0x1184e8(0x6e4)+'1px\x20r'+'gba(2'+'55,25'+_0x1184e8(0x258)+',.05)'+';\x20tra'+_0x1184e8(0x5cd)+_0x1184e8(0x191)+_0x1184e8(0x6b7)+_0x1184e8(0x101)+_0x1184e8(0xdf)+_0x1184e8(0x41c)+_0x1184e8(0x55d)+'d\x20.25'+'s;\x20an'+'imati'+_0x1184e8(0x677)+_0x1184e8(0x619)+_0x1184e8(0xcc)+'ease\x20'+'both;'+_0x1184e8(0x334)+_0x1184e8(0x114)+'ard.o'+'n\x20{\x20b'+'ackgr'+'ound:'+'\x20rgba'+_0x1184e8(0x3d3)+'255,2'+'55,.0'+_0x1184e8(0x504)+'ox-sh'+_0x1184e8(0x157)+_0x1184e8(0x27a)+_0x1184e8(0xb2)+'\x200\x201p'+'x\x20rgb'+'a(255'+_0x1184e8(0x218)+'157,.'+'28),\x20'+_0x1184e8(0x6de)+_0x1184e8(0x692)+'rgba('+_0x1184e8(0x546)+_0x1184e8(0x3c1)+'7,.06'+_0x1184e8(0x502)+_0x1184e8(0x559)+_0x1184e8(0x22d)+_0x1184e8(0x62d)+'55,10'+'7,157'+_0x1184e8(0x131)+_0x1184e8(0x461)+_0x1184e8(0x396)+'card-'+_0x1184e8(0x1b7)+_0x1184e8(0x62b)+_0x1184e8(0x3a4)+_0x1184e8(0x267)+';\x20ali'+'gn-it'+'ems:\x20'+_0x1184e8(0xbc)+_0x1184e8(0x2c6)+_0x1184e8(0x430)+'x;\x20pa'+'dding'+_0x1184e8(0x170)+'x\x2012p'+_0x1184e8(0x331)+_0x1184e8(0x18c)+_0x1184e8(0x51b)+_0x1184e8(0x649)+_0x1184e8(0x4a4)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x1184e8(0x529)+_0x1184e8(0x461)+'\x20.sk-'+'card-'+'title'+_0x1184e8(0x3ee)+'ng\x20{\x20'+_0x1184e8(0x42e)+'size:'+_0x1184e8(0x6bd)+_0x1184e8(0x441)+_0x1184e8(0x1d7)+_0x1184e8(0x263)+_0x1184e8(0x1fc)+_0x1184e8(0x5bb)+':\x20rgb'+'a(246'+',238,'+'242,.'+_0x1184e8(0x495)+_0x1184e8(0x686)+_0x1184e8(0x519)+_0x1184e8(0x3e6)+_0x1184e8(0xb6)+_0x1184e8(0x298)+'\x20\x20.sk'+'-card'+_0x1184e8(0x4b6)+_0x1184e8(0x4c3)+'rd-ti'+_0x1184e8(0x5ed)+_0x1184e8(0x324)+_0x1184e8(0x41a)+_0x1184e8(0x184)+'#fff0'+_0x1184e8(0x1e6)+_0x1184e8(0x563)+'k-mbo'+'dy\x20{\x20'+_0x1184e8(0x1e0)+_0x1184e8(0x30f)+'\x2012px'+_0x1184e8(0x6a6)+';\x20}\x0a\x20'+'\x20.sk-'+_0x1184e8(0x477)+_0x1184e8(0x4b1)+_0x1184e8(0x3bc)+_0x1184e8(0x21a)+'\x20alig'+'n-ite'+_0x1184e8(0x3c5)+'enter'+_0x1184e8(0x1d4)+_0x1184e8(0x662)+_0x1184e8(0x3df)+'ding:'+_0x1184e8(0x5ec)+'0;\x20fo')+(_0x1184e8(0xe6)+'ze:\x201'+_0x1184e8(0x3f3)+_0x1184e8(0x461)+_0x1184e8(0x396)+'label'+_0x1184e8(0x60b)+_0x1184e8(0x372)+_0x1184e8(0x541)+_0x1184e8(0x1b4)+_0x1184e8(0x62d)+_0x1184e8(0x386)+'8,242'+_0x1184e8(0x35d)+_0x1184e8(0x461)+'\x20.sk-'+'switc'+_0x1184e8(0x3a1)+_0x1184e8(0x444)+_0x1184e8(0x439)+'elati'+_0x1184e8(0x5b4)+_0x1184e8(0x24e)+_0x1184e8(0x229)+_0x1184e8(0x66d)+_0x1184e8(0x263)+_0x1184e8(0x2bd)+'\x20bord'+_0x1184e8(0x13d)+_0x1184e8(0x507)+'der-r'+_0x1184e8(0x272)+_0x1184e8(0x474)+'x;\x20ba'+_0x1184e8(0x5dc)+'und:\x20'+_0x1184e8(0x341)+'255,2'+_0x1184e8(0x625)+_0x1184e8(0x6d2)+');\x20cu'+'rsor:'+'\x20poin'+_0x1184e8(0x55c)+_0x1184e8(0x63d)+_0x1184e8(0x536)+_0x1184e8(0x420)+_0x1184e8(0x5cd)+'on:\x20b'+_0x1184e8(0x132)+'ound\x20'+_0x1184e8(0x256)+'}\x0a\x20\x20.'+_0x1184e8(0x40d)+'itch:'+_0x1184e8(0xeb)+_0x1184e8(0x623)+_0x1184e8(0x637)+_0x1184e8(0x603)+_0x1184e8(0x297)+'ition'+_0x1184e8(0x23d)+_0x1184e8(0x14c)+_0x1184e8(0x3ba)+_0x1184e8(0x64c)+_0x1184e8(0x51c)+_0x1184e8(0x6a4)+_0x1184e8(0x36f)+'dth:\x20'+_0x1184e8(0x28c)+_0x1184e8(0x6e3)+'t:\x208p'+'x;\x20bo'+_0x1184e8(0x57e)+_0x1184e8(0x36e)+'s:\x2050'+'%;\x20ba'+'ckgro'+_0x1184e8(0x597)+_0x1184e8(0x341)+'255,2'+_0x1184e8(0x625)+_0x1184e8(0x4e2)+');\x20tr'+'ansit'+_0x1184e8(0x162)+'left\x20'+_0x1184e8(0x4da)+_0x1184e8(0x2f2)+'round'+_0x1184e8(0x4df)+_0x1184e8(0x146)+'shado'+_0x1184e8(0x3f7)+_0x1184e8(0x461)+'\x20.sk-'+'switc'+_0x1184e8(0x660)+_0x1184e8(0x6ba)+'cked='+_0x1184e8(0x4e6)+'\x22]\x20{\x20'+_0x1184e8(0x2f2)+_0x1184e8(0x1c8)+_0x1184e8(0x2cf)+_0x1184e8(0x4f3)+_0x1184e8(0x218)+_0x1184e8(0x44f)+_0x1184e8(0x445)+'}\x0a\x20\x20.'+_0x1184e8(0x40d)+_0x1184e8(0x616)+_0x1184e8(0x314)+'check'+_0x1184e8(0x450)+_0x1184e8(0x611)+_0x1184e8(0x179)+'er\x20{\x20'+_0x1184e8(0x4e3)+_0x1184e8(0x538)+';\x20bac'+_0x1184e8(0x4a5)+'nd:\x20#'+_0x1184e8(0x586)+_0x1184e8(0x5fa)+_0x1184e8(0x1fe)+_0x1184e8(0xe2)+'0\x200\x206'+_0x1184e8(0x517)+_0x1184e8(0x20b)+';\x20}\x0a\x20'+_0x1184e8(0x396)+'range'+'\x20{\x20di'+_0x1184e8(0x253)+':\x20fle'+'x;\x20al'+_0x1184e8(0x277)+_0x1184e8(0x689)+_0x1184e8(0x15b)+_0x1184e8(0x4b0)+_0x1184e8(0xd5)+'px;\x20}'+_0x1184e8(0x563)+_0x1184e8(0xfd)+_0x1184e8(0x487)+_0x1184e8(0x6d7)+_0x1184e8(0x21e)+'ppear'+_0x1184e8(0x357)+_0x1184e8(0x536)+_0x1184e8(0x22e)+_0x1184e8(0x30e)+_0x1184e8(0x148)+'one;\x20'+'width'+_0x1184e8(0x4ac)+_0x1184e8(0x308)+_0x1184e8(0x531)+_0x1184e8(0x4bf)+_0x1184e8(0x41c)+'groun'+'d:\x20tr'+_0x1184e8(0x3c6)+_0x1184e8(0x3a5)+_0x1184e8(0x334)+'.sk-s'+'lider'+'::-we'+_0x1184e8(0x3a0)+_0x1184e8(0x65f)+_0x1184e8(0x410)+'nable'+_0x1184e8(0x5b6)+'k\x20{\x20h'+'eight'+':\x202px'+_0x1184e8(0x507)+_0x1184e8(0x100)+_0x1184e8(0x272)+_0x1184e8(0x5ef)+';\x20bac'+_0x1184e8(0x4a5)+_0x1184e8(0x6aa)+_0x1184e8(0x3ce)+_0x1184e8(0x209)+_0x1184e8(0x1cb)+'#ff6b'+_0x1184e8(0x2b1)+'ff6b9'+_0x1184e8(0x1a4)+'0\x20/\x20v'+_0x1184e8(0x3e9)+'p,\x2050'+_0x1184e8(0x33e)+_0x1184e8(0x69a)+_0x1184e8(0x6b0)+_0x1184e8(0x156)+'gba(2'+_0x1184e8(0x625))+(_0x1184e8(0x258)+',.08)'+_0x1184e8(0x461)+_0x1184e8(0x396)+_0x1184e8(0x65f)+_0x1184e8(0x6c2)+'ebkit'+'-slid'+_0x1184e8(0x557)+_0x1184e8(0x6cf)+_0x1184e8(0x6d7)+'kit-a'+_0x1184e8(0x1ea)+_0x1184e8(0x357)+_0x1184e8(0x536)+_0x1184e8(0x3d4)+'th:\x206'+_0x1184e8(0x316)+_0x1184e8(0x317)+':\x206px'+_0x1184e8(0x1c5)+'gin-t'+'op:\x20-'+_0x1184e8(0x488)+'borde'+_0x1184e8(0x5a4)+_0x1184e8(0x4b7)+'50%;\x20'+_0x1184e8(0x2f2)+'round'+':\x20#ff'+'6b9d;'+_0x1184e8(0x146)+_0x1184e8(0x3ef)+_0x1184e8(0x40e)+'0\x200\x202'+_0x1184e8(0x61b)+_0x1184e8(0x4c8)+_0x1184e8(0x414)+_0x1184e8(0x501)+_0x1184e8(0x661)+_0x1184e8(0x3a8)+_0x1184e8(0x4c6)+_0x1184e8(0xc9)+_0x1184e8(0x473)+_0x1184e8(0xe7)+'e-tra'+_0x1184e8(0x116)+'heigh'+_0x1184e8(0x2e7)+_0x1184e8(0x5b2)+_0x1184e8(0x5dc)+_0x1184e8(0x597)+_0x1184e8(0x341)+'255,2'+_0x1184e8(0x625)+_0x1184e8(0x47d)+_0x1184e8(0x537)+_0x1184e8(0x18c)+_0x1184e8(0x309)+_0x1184e8(0x13a)+_0x1184e8(0x17e)+_0x1184e8(0x2ea)+_0x1184e8(0x5a6)+_0x1184e8(0x476)+'\x20heig'+_0x1184e8(0x3e1)+_0x1184e8(0xe5)+_0x1184e8(0x132)+_0x1184e8(0x560)+_0x1184e8(0x307)+_0x1184e8(0x634)+'}\x0a\x20\x20.'+'sk-sl'+'ider:'+':-moz'+_0x1184e8(0xe7)+'e-thu'+'mb\x20{\x20'+_0x1184e8(0x2de)+_0x1184e8(0x5ff)+_0x1184e8(0x66d)+_0x1184e8(0x263)+_0x1184e8(0x143)+'borde'+_0x1184e8(0x1a5)+_0x1184e8(0x5f6)+_0x1184e8(0x377)+_0x1184e8(0x261)+'\x2050%;'+_0x1184e8(0x41c)+_0x1184e8(0x55d)+_0x1184e8(0x54e)+_0x1184e8(0x20b)+_0x1184e8(0x461)+'\x20.sk-'+'val\x20{'+'\x20font'+'-size'+':\x2011p'+'x;\x20fo'+'nt-we'+'ight:'+'\x20600;'+_0x1184e8(0xc4)+'width'+_0x1184e8(0x436)+'x;\x20te'+'xt-al'+'ign:\x20'+_0x1184e8(0x34f)+_0x1184e8(0x541)+_0x1184e8(0x1b4)+_0x1184e8(0x62d)+'46,23'+_0x1184e8(0x34a)+',.8);'+'\x20}\x0a\x20\x20'+_0x1184e8(0x185)+_0x1184e8(0x6e0)+_0x1184e8(0x409)+_0x1184e8(0x5ac)+_0x1184e8(0xbb)+_0x1184e8(0x2ae)+_0x1184e8(0x137)+'0;\x20tr'+_0x1184e8(0x362)+_0x1184e8(0x645)+_0x1184e8(0x5ba)+_0x1184e8(0x30b)+'6px);'+_0x1184e8(0x443)+'\x20\x20');function _0x51730b(_0x5e2a4a){var _0x310e54=_0x1184e8,_0xba0c0c={'hfvGz':'0|3|4'+_0x310e54(0x3e4)+_0x310e54(0x3b9),'iLNlG':function(_0x519f63,_0x53026e){return _0x519f63(_0x53026e);},'pNnkf':_0x310e54(0x4f6)+'n','jqnmD':_0x310e54(0x40d)+_0x310e54(0x2a6)};if(_0x11036f['zwylk'](_0x11036f['WlJGn'],_0x310e54(0x279))){if(document['body']&&(document[_0x310e54(0x17a)+_0x310e54(0x224)]===_0x11036f[_0x310e54(0x4ff)]||document['ready'+'State']===_0x11036f['IBpgY']))_0x5e2a4a();else document[_0x310e54(0x6b8)+'entLi'+_0x310e54(0x5c4)+'r'](_0x11036f['IIJef'],_0x5e2a4a,{'once':!![]});}else{var _0x30726f=_0xba0c0c[_0x310e54(0x388)]['split']('|'),_0xffce9=-0x240+0x19c9+0x1*-0x1789;while(!![]){switch(_0x30726f[_0xffce9++]){case'0':var _0xf3f411=_0x524fcf['creat'+_0x310e54(0x2ee)+'ent'](_0x310e54(0x4f6)+'n');continue;case'1':_0xf3f411['setAt'+_0x310e54(0x3d9)+'te'](_0x310e54(0x314)+'check'+'ed',_0xba0c0c[_0x310e54(0x27f)](_0x54a810,!!_0x2c7f73));continue;case'2':_0xf3f411['oncli'+'ck']=_0x3ae041=>{var _0x29af29=_0x310e54;_0x3ae041['stopP'+'ropag'+_0x29af29(0x257)]();var _0x1fca50=_0xf3f411[_0x29af29(0x39d)+_0x29af29(0x3d9)+'te'](_0x29af29(0x314)+'check'+'ed')!==_0x29af29(0x4de);_0xf3f411[_0x29af29(0x165)+_0x29af29(0x3d9)+'te']('aria-'+_0x29af29(0xbf)+'ed',_0x3c2c45(_0x1fca50)),_0x541dc4(_0x1fca50);};continue;case'3':_0xf3f411[_0x310e54(0x524)]=_0xba0c0c[_0x310e54(0x18b)];continue;case'4':_0xf3f411[_0x310e54(0x463)+'Name']=_0xba0c0c[_0x310e54(0x212)];continue;case'5':return _0xf3f411;case'6':_0xf3f411['setAt'+_0x310e54(0x3d9)+'te']('role','switc'+'h');continue;}break;}}}_0x51730b(function(){var _0x76a85b=_0x1184e8,_0x584fdf={'WWXcn':function(_0x835f57,_0x1f01b7){return _0x835f57(_0x1f01b7);}};if(_0x11036f[_0x76a85b(0xbd)](_0x76a85b(0x25c),_0x76a85b(0x25c)))return _0x584fdf[_0x76a85b(0x3e5)](_0x2d08ab,_0x2fe2a2);else try{if(!document[_0x76a85b(0x4bb)]['conta'+'ins'](_0x9d14e1))document[_0x76a85b(0x4bb)][_0x76a85b(0x3c3)+_0x76a85b(0x478)+'d'](_0x9d14e1);document[_0x76a85b(0x4bb)][_0x76a85b(0x3c3)+_0x76a85b(0x478)+'d'](_0x14c28c),document[_0x76a85b(0x4bb)][_0x76a85b(0x3c3)+'dChil'+'d'](_0x54e5d3),_0xa0207b(_0x11036f['IAoMR'],'DOM\x20m'+'ounte'+'d\x20(ov'+'erlay'+_0x76a85b(0x25b)+_0x76a85b(0x527)+_0x76a85b(0x5c2)+_0x76a85b(0x422));}catch(_0x591f99){'RhdlP'!=='IZjHC'?_0x11036f['QcICS'](_0xa0207b,_0x76a85b(0x4e7),_0x11036f['xZRUL']+(_0x591f99&&_0x591f99['messa'+'ge'])):new _0x4ef5d6(_0x593e3a)[_0x76a85b(0x26b)+_0x76a85b(0x4bd)](_0x56b502,_0x1a8980,_0x3b2827);}}),console[_0x1184e8(0x589)]('Sakur'+'a\x20Cli'+_0x1184e8(0x232)+_0x1184e8(0x356)+'\x20(2v2'+_0x1184e8(0x6ac)+_0x1184e8(0x633)+'\x20payl'+_0x1184e8(0x2c3)+_0x1184e8(0x1c1)+'ostic'+'s\x20on)'),_0x11036f['HaZCW'](requestAnimationFrame,_0x20e7ae);})()));function _0x55f7(_0x29f84b,_0x4c9ae7){_0x29f84b=_0x29f84b-(0x310*-0xb+-0x123*-0x8+0x1949);var _0x28e19f=_0x485f();var _0x5a1a21=_0x28e19f[_0x29f84b];if(_0x55f7['EwsGQN']===undefined){var _0x36ec7d=function(_0x3962e2){var _0x2856e9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x39f027='',_0x274266='';for(var _0x5af25e=0x1d2a+-0x106e+-0xcbc,_0x3a96e4,_0x1f7b19,_0x2d26c7=0x1c*-0x55+-0x3*-0x163+0x523;_0x1f7b19=_0x3962e2['charAt'](_0x2d26c7++);~_0x1f7b19&&(_0x3a96e4=_0x5af25e%(-0x379*0x1+0x2a0+0xdd)?_0x3a96e4*(-0x3*-0x4ff+-0x1b88+0x5*0x28f)+_0x1f7b19:_0x1f7b19,_0x5af25e++%(0x1b*-0xab+-0x1332+0x253f*0x1))?_0x39f027+=String['fromCharCode'](0x24f7*-0x1+-0x1e4b+0x4441*0x1&_0x3a96e4>>(-(0x6*0xfd+-0x19f8+0x140c)*_0x5af25e&-0x2198+-0x4*0x71f+-0x1*-0x3e1a)):0x275+0x49*0x21+-0x1f*0x62){_0x1f7b19=_0x2856e9['indexOf'](_0x1f7b19);}for(var _0x293e51=0x64d*0x2+-0xfae*-0x1+-0x1c48,_0x763b2f=_0x39f027['length'];_0x293e51<_0x763b2f;_0x293e51++){_0x274266+='%'+('00'+_0x39f027['charCodeAt'](_0x293e51)['toString'](-0x28e+-0x13*0x29+0xcf*0x7))['slice'](-(0xc61*-0x1+-0x1828+0x248b));}return decodeURIComponent(_0x274266);};_0x55f7['cucZCT']=_0x36ec7d,_0x55f7['DRpGax']={},_0x55f7['EwsGQN']=!![];}var _0x3139a7=_0x28e19f[-0x68b+-0xba+0x1*0x745],_0x5336bd=_0x29f84b+_0x3139a7,_0x380f76=_0x55f7['DRpGax'][_0x5336bd];return!_0x380f76?(_0x5a1a21=_0x55f7['cucZCT'](_0x5a1a21),_0x55f7['DRpGax'][_0x5336bd]=_0x5a1a21):_0x5a1a21=_0x380f76,_0x5a1a21;}function _0x485f(){var _0x221ec2=['EKvkAfa','CMvHAY0','zhjVCc0','nJyZmJu2z3Hkuhnm','BIb7igy','Cg9PBNq','Dw5Kzwy','CM9VBua','ls1W','wgTVANC','EdSGyMe','nsiGC3q','DMu7ihC','BtOGBM8','lxrYywm','C2HPzNq','ENbUwhu','AvfeBhu','CMfUC2W','y29SB3i','Acb7igy','C2STCMe','zcb7igi','yuTOwNu','ChvZAa','DxrVkq','igj1Dhq','yxrLtwe','C3rLBMu','y3rPBMC','DgLVBJO','DxjZB3i','EuPswgu','BLj1s1u','m2mTms4','jsK7ic0','BMu7ihm','BNnPDgK','Dg9Nz2W','igXHEw8','rdOG','BtSGFqO','quvOEwW','yLvZwxy','AKDIExe','y3jLyxq','zM9YBsa','zdDLmZS','BxnT','CJPWB2K','mdi1ktS','pJXSAw4','y2TNCM8','zwmIlZ4','lJuIigy','AvDhvwu','uvPIt2y','BwvZC2e','B3vUDca','Chv0','yxLLCNm','sg9urva','AwvSza','Ee9bt2u','CMuTD3i','zgTPDa','sLLVzKO','C3rYAw4','idrWEca','DgXLihm','AKrxCKu','oIaYChG','AurbrNK','r1jWyKK','iNnRlwC','mhb4o2i','Bwf4','zcbYz2i','igjVCMq','BwLU','rLvWsKq','Cg9Z','zdSGyM8','rK9wicG','kgDLDhq','D0TfAKq','B3bHy2K','oIa2ChG','yY0XlJu','DdOXmha','y1vpsLy','DdOGiIi','CZOGoha','Bfbhwui','DwX0CYa','C2f0Dxi','C2HVD24','z2v0q2W','CcbVzMy','ihSGzMW','lwXVzY4','yNP4qMe','u2fzwfG','z2fWoIa','BgHirue','CNvLiL0','qurJsgm','Ew91Dd8','DdOYnNa','Dg9Wlwm','AxrJAfS','sKvTC0O','oJa7EI0','BI1PBIa','zgfTywC','ChGGCMC','BgrYzw4','Exn0zw0','tg9N','zxjYAwq','nxmGzwe','ue5ICLq','s2LYvNm','CIb7igm','zsbvssi','ntuSmJu','BLn0D2q','Aw5NoIa','rcb0BYa','zs1SAw4','igvUywi','EYbKAxm','u2nlsuW','z2jHkdi','y2XPzw4','Aw5PDdO','Bwu9','DdOGmZi','nfLAy0vzra','ifvxtuS','yJLKoYa','Dvjtzhu','BJOGy28','B250zw4','CMvH','s0vOu3e','De10A1y','A2rYB3a','AtmY','zMXLEdO','A2PZqKq','y1zUvgO','qxH2y0y','lJvnmti','BMvHCKC','B01YBNe','ChG7ih0','CM06ihq','vg90ywW','ns00idC','owqIlZ4','lxrPDgW','z2LU','CNjlruy','oIaZChG','rezJEMm','Dgv4Dc8','BNnMB3i','zxiGC2m','AwTABNu','EwTqtuu','zwPVAw4','zxjJyw4','q25ks1y','q29SEvq','B29ItgG','t01KC28','B1jLy28','iIb5mt0','EcbYz2i','yxrLkde','mNyYlNy','BePRsui','C2XPzgu','AfTHCMK','lJqPoYa','oIa4ChG','uM9VBvm','BgLUzw4','imk3ihn0','r1veywO','CKXPBMS','BNrLEhq','iJmIihG','AgLKzgu','oJrWEca','BwvTB3i','oYbOzwK','BNrYB2W','qwzoy3a','ugXHEwu','DgG9iJi','idaGnha','tgLZDa','D3fxsfa','seLiCKK','BgLUzwm','B246ig0','EvnXyNe','nIWUotu','s1nTA3u','yMv6Awu','ysbdBgK','zKr5BwO','zgL2','C2uSihq','z2TRu3y','nti5nZa0rg5kvNvh','AwfSoYa','B2rL','y3vYC28','BMvSihS','DhjHBNm','CMqTDgK','zcWGy3i','DgvTCZO','zxC6ia','txL0r08','CgDOuhu','Aw5MBW','AgvHBhq','mca9ige','mtiGm3y','teHmBLq','idfWEca','ztSGDhi','BMTLCG','tKvtveu','Bgv4oYa','rvnqiokaLa','qxnZzw0','ugz3txy','mcuGBM8','y29PBca','B3vUzdS','nxb4oYa','BNrqtNu','v21Hruy','we9fvfG','oIaWida','zMLSBd0','EKzqvxq','DdOGm3a','C3bHBG','ideWChG','i2zMzta','zvjvCMO','ldiXlc4','BMq6igW','AwvK','lMLViokaLa','BMX5','FdL8n3W','CYbZy2e','lxjLCgu','B3Dev2S','z2v0sxq','nNWXFda','iInMzJy','DeDJwMS','mhGXna','B3GTC2G','ywrKrxy','Bg93oIa','ys1JAgu','BI1PDgu','CKHLAwC','ideZChG','BgLUA2u','BdOGBM8','s2fmB0u','Ag9ZDdO','CJO6lxC','nxm0idi','BgnSvvO','t0CGka','B25PBNa','Dg9gAxG','ihjLz2K','u2vSzwm','B2TLpsi','t0Hhzg0','uNPryKq','igDHCdO','BNq+pc8','Dw1IihS','ihrOzsa','mNWZFdy','nsWUmdC','q3zpAue','iM5VBMu','AguGzNu','sw9KB3m','ic13zwi','ihDOzw4','zxj1Ca','CNvcEKS','BM9szwm','Ede9iJq','wLv3why','mcaWida','ihbHzgq','CMfTzxm','zhbY','qvLezxe','AgvPz2G','idaGmca','yJnJnIi','B3bLCNq','sgfAq1C','zgvYoIa','DcaWida','zMD5rLC','igXVy2e','ug9quhC','B3iGlJi','4Ocuig5VDa','pc9ZDMC','ihjNyMe','CMvHzey','CM9TihS','y2vUDgu','qMv1yuq','uLD2yKi','y2HLy2S','wevTwu4','y29TChm','DgLJAW','BxbZihq','ig1PBI0','rMLYzq','Bg9NCW','zxrL','AfnOywq','AwrLCJO','oIaYnha','A0juveG','lJm1CYa','AuvzEhm','nhW2Fdu','zuXVy2e','vJjFxW','C3bLzwq','DxnLCLm','nxWX','DZOGAw4','yxa6idG','igzVBNq','tevHCe4','BvHVsNa','ksbPCYa','y2L0Esa','ywrK','Bcb0Ahi','CMvZiokaLa','ugn0','lJi1CYW','Eunjv1i','BgLUzvC','zg93oIa','sgPtrhm','idqGnc4','ChG7igi','BNqTC2K','lxjHBMC','CLnbAui','z0Tevfq','uMfWAwq','oMfMDgu','BM5Lza','idiYChG','wgDyCuS','AsWGC2e','wK1fwhK','BIWGAw4','AwvSze8','AeD1sNm','o3DOAxq','Aw5KzxG','ChG7Cge','ugTmAeW','DxDTAW','zw50lxm','yMTXruu','txfvBNG','B3zLCMy','AY1ZBgK','B29T','cIaGlM0','zgvYlxi','ywrVDYa','ihnHzMu','Dgf0zq','B25TB3u','Bw4TBwe','B2XVCJ0','AwXSpsi','zw50','B2XZ','lxnPEMu','u1HXA1a','zgzdy1e','ywDNAw4','Ag9VA04','C2vSzG','AwjLzfi','igzHAwW','x19tquS','ohb4ktS','lNnRlwm','zwfRoMi','y2SGEYa','DhjVA2u','CMfUz2u','BwvYysa','wfjOwMm','re9nq28','zxjYB3i','ihbVAw4','tKPouhq','C2jtrfy','igvUDhi','sgvPz2G','zKjNzNq','y3G9iJe','zdOG','z3jHzgK','Bw4Ty28','DfHowuu','zvbPEgu','B250lxm','CgfJzu8','BhvTBJS','yvzUv2e','t2TgA1i','rxLxr1y','mNm7Cg8','mJm4ldi','lc4WnIK','ywnRz3i','C2XPy2u','BvLAt1O','ywnLoNa','z2jHkda','Axr5oIa','q21tyM0','A2uTD2K','zxi6oI0','yNrywNK','mcbPCYa','zxi6ida','t2rLq3q','y2DbAwq','BgvKpq','C2STz3i','C2fMzu0','nNb4oYa','nYWXntC','ugLLy2u','igjVEc0','oIbKCM8','y2u6ig4','rxvAwfm','DgvYoG','vgvHBsa','B2X1Dgu','BNqTzMe','zYKGqa','lxDLAwC','Bg9JywW','yM9Yzgu','z1DQwNa','qxbWBhK','CMrbwNu','C3bSAxq','yxqSihi','ywrVDZO','AMzKwfm','iIb5mJ0','mtbWEdS','ignLBNq','mJu1lc4','BhmGy28','ktT3AgK','yMPLELe','y2fWvhi','zwnLtwC','Aw9UoIa','kfbPzwm','DgDfuhy','C2v0qxq','igLUAxq','zNjHBwu','mK5TBLDhvG','CIGYmNa','ChGGmti','CgfJAxq','q1rNBwC','BMnL','B3n0BMe','wLzttfm','oIaXmxa','y2fWuM8','CIbOzwK','wuHvs1e','DMLLD0i','Aw5N','Aw5ZDge','zKvjveK','qKTeyMG','oJPHzNq','CMvHzhK','t25fBMe','AhvquvG','zxiGyxi','Bw96lxi','Dxm6ide','tM8GCMu','BuHYv00','twvfv3i','CfnJAgu','Bg9YoIa','qgTLEwy','lc40nsK','quTvuKe','Dg8Gy28','r3vU','tKLXwuS','Ce5UA2y','icaUC2S','sLHqrLe','oJeWmcu','AwqTDgu','zMuGtw8','B246igi','A01ithu','zM92t3y','BNvSBcG','mtDWEdS','mtn8oxW','DhLqy3q','CgfJzsW','zLzPzxC','Bxfkr24','zxjH','BM93','nYWUncK','qMn5vxq','ChjVAMu','EeTMywy','zLjJDM8','Dw5KAw4','ls4Wmwu','zcKGmca','CJOGmdS','sg5JDKS','ignVBxa','Bg9ZztO','vNfXt2u','qNrvvMC','vuPdtva','D0TYCKe','uYdILzdILzdILza','mJK3nZa2BfbVwhjV','A3reyxK','re9nig0','idaGmxa','BMu7iha','vxnfDLK','B3i6ihi','svjRy1G','zguGB24','AgvHzca','ELPSrM4','AeDXCKW','yM94zxm','y1bRB1O','oYbWB2K','mxW4Fda','o21HCMC','ignVDw4','ihvUAxq','zgLHz24','ihnLCNy','y2HPBgq','C3DPDgm','oYbTyxi','zs5dyw0','nIa2Bde','CM91BMq','igq9iK0','yxbWBgK','AwvUDcG','DgG6idy','y3rPB24','Afj0s2S','yuTkveu','wKzmtgy','ufDKq1y','icjjBNq','Bc5ZAg8','oYbNyxa','CgDduNO','tvvrrgW','Dc13zwK','z0jTq3G','BvbSDvK','v0XrwNq','oc00lJu','yJLKiI8','BNrPyxq','yMfJA2q','ywqPiIa','CgfKzgK','D0n6B1y','rNrhDKG','BMvS','ywLTtwe','zM9Yrwe','zJu7ih0','BgfZlg0','u3bLzwq','CNb4u3q','ChbLyxi','y29TCgW','igeGtxK','Aw4OndG','AgvHzgu','ywXS','pJXZDg8','y29Z','mcaOCgW','y1HbuMC','Dgv4Dee','nJq2o2m','vvvnt0G','Fdb8nxW','iJeIihm','mJu1ldi','zxjjza','imk3ihvH','nJaWoYa','ALDUBva','Ec1ZAge','s1L3Au0','v3jHCha','kgHVB2S','ldi1nsW','A2nOAfy','mdyPlca','B3aTy28','svLVA2S','tuzWA3O','tKrfExi','lwDYywq','idqTnc4','zJzIowq','y2vdAgK','Ahq6mtC','zgLAB3a','C2STy3q','AxHLzdS','qu5gDuS','ANfUBuq','rLnzt2y','mcWWlda','sMnbA3O','q1vODfm','u2HHCNa','ldeWnYW','EtOGlJq','zMXLEdS','nJTWB2K','mJeZmdrRzvvSDw8','mc41o3q','A2L0lwe','CxzODKS','q29UC28','uwvez3q','CMvNAxm','zwn0','u3rHDgu','zxjZqa','zs1ZCge','v3r5EfG','mduPoYa','idi2ChG','Cg9ZAxq','B1zOvwO','CM9YCW','mhb4ihi','oYbHCha','zMTYqvu','y2XPCgi','C2v0','zw50igW','lwzPBhq','Ag9ZDg4','nta7igW','Exv5z2e','wLbmEwm','rKfjteu','ide0ChG','END5BgS','AxrZpsi','quXzufO','oIbHyNm','vw9IA2O','zw50ig0','z2v0x0m','ltiUns0','C3rLCMu','y2fWtvm','BNnVBgu','Aefesxi','DxqTC2G','C2v0x0m','lwv2zw4','AeHJEwS','C2PkDxK','sKnvEM8','C2STDMe','yw5LBc4','Awr0AdO','ywnLo3a','Bw92zw0','lM1Ulxa','BNvTyMu','C3bSyxK','lc41kq','y2XVC2u','lJjZoYa','yxrPB24','nsWYntu','tvbjz2W','igzYyw0','icSGCge','CgDYvuq','C2HPzwW','Aw5Mqw0','imk3ihnH','txjbuhC','zgL1CZO','oJiXndC','z2H0oIa','yxbWBhK','y2vS','wNvRALe','igzSzxG','rfvhtuy','lJuGms0','zgvYAxy','D3jPDgu','D296zu4','y2u6Chi','zvjLy3q','BwDWqNK','nNW0Fdm','lJuGmsa','ywrPDxm','ihzPzxC','uhb0r3i','twPmsM4','yxnZtMe','AwDUlwK','FdH8mte','vLvouKu','igLUC2u','Ag9VAW','sfrnta','wMnRBMS','AxngAw4','AuXoBeC','Aw5Ly2e','zwn0Aw8','iokaLcbJyq','tw92zw0','CMTnyw4','Cgf5Bg8','zvn0EwW','Ec1ZAxO','kdeWmhy','y29Kzq','yxrLzca','ic5TBI0','ohb4oYa','B3jKzxi','yuDpvue','mtiGmJe','CfnlAhy','DgXL','mciGC3q','wNzywuO','y2fWugK','EgjPDKe','wwDNEKK','oYbWB3m','CZSGFqO','cIaGoMG','C2v0uhi','vLbrt20','CMfUC2K','ocKPigq','sgjzBLC','Dgv4Dem','y2fWDhu','qM94zxm','u2fMzxq','DMCGEYa','oIaXoYa','CMLMlhm','AxrJAa','zw50tgK','tM8GyMW','u2njAha','mxWWFdm','y3HiBe8','lxbHBMu','q2fTzxi','ig9Wywm','ywrPzw4','mJSGC3q','owqSicm','BfrYyw4','DgvTlxu','C3rLCa','qwvdBKO','Eca2ChG','Dw5KoNi','tuLvDeu','Dw1jC3m','BMvY','vNHVwwC','uLj0t1i','mtrWEdS','mtr8m3W','DwrwD2C','qwzJrvK','z2LMEq','DMfSDwu','B2fKlca','phbHDgG','n3WXmhW','CJSGz2e','yMXRBxG','BLfhEfa','Fdb8mNW','Dw5PDhK','B2LS','zcKIihm','Aw5Uzxi','CNrlz2i','oIbYz2i','igfPBtO','nNWYFdG','DMHoufK','A2fVshC','BgLUzxm','vuvlC1q','yxnZAwC','BMqIlZ4','mcWUosK','CMWOi3m','ChjLC2u','swHfrMG','vK5jAhK','CNnVCJO','D2LKDgG','AeLhAve','y3nZvgu','CNjVCG','DguTC3a','oIbNCMK','Bwfa','B1Pbq0i','CMvU','DdOGmNa','vgDJqwe','zw5HyMW','yw5Nzs0','DgvYia','y3rYBa','C2vSzwm','zuvSzw0','4OcuihDYBW','C2v0psi','zgrPBMC','yMfJA2C','igHLAwC','CMqTAgu','y291BNq','B25VC3a','icSWEde','Fdr8mq','C3bHD24','BwfWrMC','AdOGmdS','vML0Agy','BhPSEhG','CM9WywC','zxi6','AwX0zxi','idi0iJ4','q1fyy2u','uMvJDa','Dw1PAey','rvr0vfq','nsaWlti','icnMzJy','EdSGAgu','lxnSAwq','Ad0Ims4','yxrLwsG','B21tzxq','Dg9W','zwfYyw4','BMC6ida','tMTlr1e','tLP0AKG','B2fYza','zxnW','yxjPys0','mhb4lca','ChG7igG','zwLNAhq','o2nVBg8','ltiUnsa','B2jLig8','ndGZnJq','oIbUB24','yMPSug4','zMLSBfq','Dhm6yxu','z2XJz3e','B3aGB2y','C2L6ztO','oIbJzw4','DhjVBMC','ntaLktS','Denlqxy','oYbTyxG','tgLUzxm','ANvTCfa','ncK7yMe','EI1PBMq','BMDL','ChDorva','nIWUosK','CYaWEdG','C0XVz2C','EdSGFqO','DgfYz2u','v2Xfu2C','ih0kica','AwnRihq','Ec1KAxi','CMfWAwq','icaGyMe','zLvgywq','vMLLDW','CMv2B2S','BgfZDeu','s2PkvNa','jsKGmta','lc4XmIK','BwLUkdm','CMDIysG','ocWUosK','Afv1tuK','CM9VBsa','ienVBhK','tMv0D28','tg96ANa','Dxm6oha','lM1Ulwm','ocWYndi','iLnLz28','rfL4rvO','phn2zYa','CgfYzw4','CMLNAhq','ihbSywm','lcaWidm','lMrSBa','DgvYlwu','wfLMvfe','CMzSB3C','B2fKzwq','yw5JztO','rw55A1K','idi4ChG','lNyX','r3bzBey','idaGmJq','lc43nsK','z2v0qM8','CM9Wlwy','q29WAwu','Aw5Zzxq','yw5ZzM8','C2STzhi','ldeSlJm','zMPpExq','B2fKic4','sw5Zzxi','B294tLG','AeL3z3y','i2zMyJm','v0Tisvm','qwLTtwe','CMfUC2y','CMfKAxu','EdSGD2K','zhrOoIa','q3zMtfy','zxG6ide','D2LUzg8','BMvYiea','DhK6ida','B3nLihm','zxiTCMe','B25JBgK','ihnVBgK','zMzZzxq','C2zVCM0','u2fRDxi','y0vNEvG','nJu3uvLtuKD0','FdeXFdu','oIbNCMe','qMf2ELu','ztTVDMu','z0nSAwu','zgvMCZ4','l3n0yxq','ndySmJm','Agnlvvy','Agz2r3O','wfHYrwq','zxiGywm','BgLNBI0','B20GBge','qwngy2q','vvDnsYa','lJq1iIa','ywnPDhK','lxDPzhq','qKzqwfy','mJa0oda0z0flAMjS','CunyCeS','oIa0ChG','ic5ZAY0','suLkzwy','CM9SBgu','Cd0ICM8','DNPsALC','uvbiu2u','yxr0ywm','z2v0qxq','AwDODa','DMC+','yMTPDc0','Acb7iha','ihnOB28','Bvn0yxq','CgXHEtO','CMvUDdS','yK1kBgy','Dg87cIa','FqOGic4','C2LU','mtaSmte','CuzZq0e','v2XiDha','D0LquKi','q2fTpq','zxjZpq','DY5VBMu','mIbJCMu','ihSGB3a','nsaWidi','Ag9VA1m','ihSGyM8','DMG7EI0','wejqrxC','q1Pcq2i','mNW1','oYb0B3a','z1vnuhy','Bgf5oIa','Bg9Ypsi','BfrtBwO','BMfNzxi','Bw9UB3m','mdCSmtu','wNHlyLm','yxbWzw4','zwfYr3i','Bxm6igm','yw5ZCge','zxiGqa','zMPxuMe','sg5WBvy','BhrLCJO','zNfjqLG','sw5MAw4','DhKGjq','Aw5Lyxi','BNrdB24','ChGPktS','BgWGBg8','ENrgz0u','kdi1nsW','oYb3Awq','DxjYzw4','zM9YBq','vw5PDhK','sfL1Cwq','DhjPyNu','DhLSzq','Ccb7igq','rvPNreO','oYbTAw4','wu5vzM8','oYbWywq','sNvTCca','Ahq6idi','qNjwCMu','z3jPzdS','Fdz8mxW','v1Dyy24','oIbJB2W','wLvby3y','DMLZAwi','yxiOls0','Bw1V','tw9Kzt0','DMfS','Aw50zxi','ihn0CM8','C2HHzg8','CwPSu28','uvrUq3K','yMXL','ms41ChG','CMvTB3y','CNmG','ywrKAw4','DYaUmNm','zg93BMW','Fdv8nhW','m3W4Fda','u2nHBgu','mdSGzM8','C2v0ug8','sNrQBwy','svzTAKS','zwqGChi','CwjStKO','AxrL','CMvHze8','v2vItw8','iokaLca','B3jTic4','zdSGz3i','tMfTzq','ig1UlwK','BNrezwy','z3LwBge','C3rHDgu','C2STC3C','DZOGmca','y2fWu3a','CI1YDw4','ys51As4','ihbVC2K','ywXltwK','nsWXmdC','tM50uK4','sufkDKO','khnLDhq','mJ0ImJa','lZ48y2K','ihSGy28','q29SEu0','igjHy2S','BNvSBca','C3r5Bgu','nhWZ','oYb0CMe','C0vTBvO','B24P','DYGWida','tw1cuwe','Fdb8mta','zxjKB3C','BMveyxm','DwjPyY0','s2LzuMy','uezcsLq','zMLSBfi','icaUBw4','DtmY','zM9UDc0','igfSAwC','CdOGoha','ALvhsei','yxj0Aw4','DLLlEvy','B3vUzci','zgn2vfC','oIaYoha','tKz6tK0','z3jHDMK','B246ihi','ChjLDMu','Dw1UoYa','B3bLBG','q29WEsa','t3z1txG','lc45kq','rfrSswy','oYbMB24','uxvVD3u','ih0GFqO','B3nPDgK','mJuPoYa','DvDOvxy','CgrpCe8','zgv2Awm','uxDvCKG','r1H2wuO','r3jHDMK','rxznB0i','vLrrCeu','BIbtywS','mtu3lc4','zwq9iNq','mhWZFdu','Bgv3C3q','rfHjvLe','nYWWlJC','txzwzuG','AxPLoIa','zLDJAeu','psjYB3u','tuLtu0K','D0Dfz1a','BgvMDa','nZGPoYa','AgfZ','zxHLy0m','lxvPlhm','yuLOqKW','oYb9cIa','yJSGDxm','y2XHC3m','yM90Dg8','AhfKuhK','oIbHDxq','ywDLCG','wuDnyMm','zgLZCgW','mtbNvvjZvKS','zw50vw4','igfWCgW','vvjbxZi','zurTANi','BgvUz3q','BMnLoIa','zcdINjm','qwrMuNi','oI1TB3O','oIa5oxa','cIaGica','zxnZihS','y3rSihS','zenOAwW','CgfYC2u','Ewv0iokaLa','AxvZoJG','EuLhA1K','nsWUmdG','verwrha','CMfKAwu','D29YBgq','zfr2EeW','vgv4Da','DMvUDhm','vKrYvvG','C2fRDxi','Dg87zMK','zgvYihS','mNb4oYa','yw5Jzt0','BLvZzsi','sef6y2q','lxnWywm','yxa7D28','AhLWB3q','wxf4EMe','C3rVCfa','D1Hhy1m','D2vHCg8','zw5ovfy','Ag9VAYa','nduPoYa','CdO2ChG','zNnLDd0','pgrLzNm','BerKEKu','uMvJB2K','zw50u3q','B2TLlwW','y2XPy2S','Dgf0zt8','iIbZDhi','zs5dB3i','B3jT','ywn0Axy','z2v0x2y','zsb7igy','A2DYB3u','AY1NCMe','wxrot1e','lxjHzgK','mhWY','DgHdtgq','ignOyxi','oIa5mha','nc00lJu','DdOGmJq','zuv4Ca','zxi7igC','igrPC3a','y2XLyxi','zKnNugq','EKLIzKO','BgLUzvq','lM9Uic4','AxvZoIa','C2vSzwe','lcbZExm','BgWGCMu','yM9KEq','qxDHA2u','rMLLBgq','tw5REgm','idHWEdS','AKf4DhG','CMvWBge','zu1Vzhu','C2STy2e','s2XcqNi','mcaWide','C2STC2W','zxzLBNq','yMeOmJu','yuTHCKW','AwvKpq','x2HVB2S','Dg9Y','AgfKB3C','CNjVCJO','CxLKEvy','mdSGyM8','ihbSyxK','q29SEvm','zJmY','BYbZDMC','oIaXm3a','ihjVB20','y2GTywm','ve1bu0y','u2vWtwy','lJjZlca','DgzuvMC','phn0B3a','B29Tksa','Dhj1zq','ic4YCYW','ExHvvuy','q1btwgC','nsWUmJu','BgvMDdO','ignHBsa','igfYBwu','iNrYDwu','yM9VDa','CxvLCNK','Axq7ig8','C3rYB2S','B21hzxq','Bw4TC2K','Cvz2EMC','FqOGicO','BNrszwm','q1vMwuG','zxr0zxi','BwLUlwG','ysGYntu','B3n0ihS','y2fSBa','yNv0Dg8','yxvSDa','EfjhCKq','DxjSkcm','B2XZihS','AhjLzG','mdb2DZS','sw5ZDge','ufvTwLK','vxHuwhq','ys4YDJi','lde1nYW','ksWGmca','mtfWEdS','ncK7igi','sg9VAZO','BNrLCG','oYbIB3i','Bw4TDg8','Cc1ZAge','BNrLCI0','BM9dsxC','C2STBwi','4OcuigHVBW','Dw5KiIa','mhGXmc8','zxi6igi','B3G9iJa','C2nHBgu','ug9JDeS','C10G','C2v0tgK','psiXmci','ChGGi2y','DhjVBgW','AxrPB24','ig9MzNm','lwnHCMq','oYbSzwy','iokaLcbOBW','yw5ZAxq','rw5NAw4','yxb0Dxi','DgvHBq','yw1L','rgDNqva','DhLWzq','mJzWEdS','C2v0vhi','BMvSicS','Aw5WDxq','DgG6ida','zMLSBfm','y2fTsgu','vhjHBNm','ltqTnY4','zgjLALa','ne0XmIa','zs13Awq','AwDODdO','BKTUCgi','EvzxEvy','oxW2Fdq','EdTVCge','ig5VBMu','ktSGFqO','ide1ChG','BMfTzxm','DdSGy28','y3vLC1m','turjsM8','rMDcEe4','EevwzLG','Ate2','ihn0yxq','oYbJB2W','DfPAv1a','zgv4rfi','y3rvuKW','tvnpCMu','mJu1lde','wwjuCwy','nsb1As0','C2v0DgK','BMCGCM8','v2LKDgG','DhH0','ndvZigm','zdOGi2y','yujzvue','CLnWyxC','mti3otGWmeLhthvqza','CM9VBq','zgLUzZO','mJiWmtDvC0Xtre4','Ae55zMC','mc41','zxiTDgG','imk3ifvx','ohb4idm','Bw4Ty2W','zxqGmca','DgvYoYa','z3jVDw4','lwrPCMu','imk3ihbS','B3vUzdO','yxv0BW','zwvytvO','cIaGlNm','uNvUDgK','Fdv8mNW','vMrfB2W','Aw9UoMy','CMnSzsa','BtOGDhi','EgvhDvu','ida7igi','ywvkEei','CMqTyNi','nwmWidm','i2zMnMi','z2v0','mJbWEcW','CxjjDwq','qNfezuq','DYaTidq','ChjVDg8','s0PlzMy','AuXIq3q','zYdIGjqGAa','mNWXm3W','q0z0CM8','DK1ruva','iokaLcbtyq','zu9IAMu','CMrLCI0','zw50ihq','zurquwe','vMfSDwu','Awq7iha','ytj2mG','txLsB28','u21YDue','zMy2yJK','B3zLBwu','zxG7ige','Bg9N','mI41idi','DNrJvwG','CgXHEwu','tKHlAvi','A3mGD2K','Ag9VA3m','B1vKuvG','zxHQyMW','Ag9VA0m','BMDZigW','CujcAKS','teXvBhG','zMXwq1m','Dw5KoIa','yu5ev1q','Ag9VA1a','Bw92zvq','BfjHDgK','CI1LDMu','zsba','y2fUDMe','mtGGnIa','vLngtxa','zw50q28','idnJms4','CZPUB24','CI1Yywq','DgG6idm','ChjVz3i','z2T2DKy'];_0x485f=function(){return _0x221ec2;};return _0x485f();}
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
