// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.7.0
// @description  Sakura Client — Clutcher.io full client, AstraStrike clean overlay, KourStrike UWMK menu
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
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
function _0x51c4(_0x83c0cd,_0x3d6e43){_0x83c0cd=_0x83c0cd-(0x1aa3+0x1*-0x23b1+-0x21*-0x53);var _0x3c4d8=_0x2505();var _0x43e413=_0x3c4d8[_0x83c0cd];if(_0x51c4['jdUZEM']===undefined){var _0x4f4e4a=function(_0xc29a4c){var _0x497298='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x59bdca='',_0x3f8b15='';for(var _0x5cca0e=-0x1dc3+-0x10fa+0x2ebd,_0x454fdf,_0x579e30,_0xe836aa=0x8d2*-0x1+0xdf+0x7f3;_0x579e30=_0xc29a4c['charAt'](_0xe836aa++);~_0x579e30&&(_0x454fdf=_0x5cca0e%(0x2c*0xcb+-0x4a5*0x7+0x79*-0x5)?_0x454fdf*(-0x769+-0x56c*-0x4+-0xe07)+_0x579e30:_0x579e30,_0x5cca0e++%(0x126c+0x15e5+0x39*-0xb5))?_0x59bdca+=String['fromCharCode'](0x1c90+-0x3a*-0x7+-0x1d27&_0x454fdf>>(-(0x16b0+-0x2337+0xc89*0x1)*_0x5cca0e&-0x295*-0xd+-0xc83*0x2+0x1*-0x885)):-0x1373+0x435+-0x2*-0x79f){_0x579e30=_0x497298['indexOf'](_0x579e30);}for(var _0x24907a=0x1736+0x1*0x179b+-0x2ed1,_0x2bd438=_0x59bdca['length'];_0x24907a<_0x2bd438;_0x24907a++){_0x3f8b15+='%'+('00'+_0x59bdca['charCodeAt'](_0x24907a)['toString'](0x161f+0x19a9+0x1fd*-0x18))['slice'](-(-0x26b+0x1*-0x14f4+-0xab*-0x23));}return decodeURIComponent(_0x3f8b15);};_0x51c4['LgXrKW']=_0x4f4e4a,_0x51c4['ltpYVD']={},_0x51c4['jdUZEM']=!![];}var _0x484056=_0x3c4d8[0x83*-0x3c+0x1433+0xa81],_0x261fd8=_0x83c0cd+_0x484056,_0x1af18f=_0x51c4['ltpYVD'][_0x261fd8];return!_0x1af18f?(_0x43e413=_0x51c4['LgXrKW'](_0x43e413),_0x51c4['ltpYVD'][_0x261fd8]=_0x43e413):_0x43e413=_0x1af18f,_0x43e413;}function _0x2505(){var _0x31d976=['y3vYC28','idnWEdS','igXLzNq','zxjPDdS','v0zwzxq','zgvYlxq','zxG6ide','yMfJA2q','yxjJ','wfPIteK','ksaXmda','AMLNAgq','su5NBuG','v2LWzsa','oIa4ChG','C2fRDxi','z24Ty28','C2STBwq','ide0ChG','B2XVCJS','zxPPzxi','igXLyxy','Dc1ZAxO','sLHgB08','tMflzfC','yxrLvge','mJqWiey','mNrnvNrTsG','qKn2vhy','zMLUza','tuHXz0O','vg1rveG','ywrKrxy','wM9luNK','vhHYq04','qwLIq2u','C3DPDgm','ihjLy28','AguGzgu','z29KrgK','zcWGi2y','nZaWia','BMDqyxa','ExHXu0O','Dw5KoIa','v2vHCg8','rfPfs28','DxrVoYa','EYbWB3m','yNjPz2G','z2jHkdi','BMq6icm','BYb7igq','ie92zxi','CMvJDa','Ec1OzwK','Aw5Zzxq','ihSGD2K','t0XbDw0','q0PSvKC','nwmWidm','mtz8m3W','CMDPBI0','DhKGDMe','BM90zs4','z2P3tMK','zc5VBIa','Bxm6igm','oYbJB2W','zMLSBa','BgfJzs0','yw1ZA0u','ie9olG','ywLYlG','A3nty2e','DhjPA2u','y3jLzw4','zgfTywC','icaGkIa','BdOGBM8','iNrYDwu','svrUshy','Cg9W','q25Uzva','zuTQyKG','ltqTnY4','lc40ktS','mhb4oYa','zNnzEg0','zhbY','zsb2ywW','ihjNyMe','qM90Dg8','qLnRvuO','mciGCJ0','Aw50zxi','BhmGDgG','iokaLcb0zq','rfPMuwq','tgLZDa','BgLUzw4','ignHBgm','qKPZExi','yxbWzw4','oIbZDge','sMTurwu','oYbKAxm','rgfUz2u','zw50','weDbyKW','zxjZy3i','CLfVAMu','z3jVDw4','y3jVC3m','x19tquS','lxbHCMu','qvbXDgq','DgvJDgK','yMfJA2C','tM8GuMu','z3jPzdS','CYbpDMu','CJSGzM8','ywnRz3i','mtfhy1DNseK','z3jHDMK','lM1Ulxm','ig1PBIG','A2uTD2K','sLD6DhO','rMLLBgq','ihLVDxi','yw1Hz2u','C2v0ida','ihSGy28','BwLUkdq','C3bSyxK','zKvcCvu','B3G9iJa','mxWWFdm','CuP6CuK','otqYu3nWz2PH','DhKGmc4','DMfS','zMXLEdS','idqTnc4','CMvWBge','BMuUqxa','yMTPDc0','C3rLBMu','rgfvCNm','yxrLkde','zxi6oI0','nsKSida','v0vhCeq','mxW0Fdi','mtb8mNW','igzVBNq','ywiUywm','ldiXlc4','CMvU','zgL1CZO','msWUmZy','mcWWlJC','zenOAwW','AKrPtxi','A3ndChm','tejYAe8','BgLKzxi','Dg9W','quTwEfG','AwDUlwK','CgfYzw4','nxW4Fda','tNrVv2e','DhmGCgW','nZTWB2K','Bw9fEha','oYbQDxm','mtfWEca','EdTVCge','wKzQALa','C1bzveG','iJeYiIa','rxD3shO','C2v0qxq','Bg9HzgK','zxPLAxC','BI1SB2C','iezquW','rfftB3e','u2fRDxi','Ag9VA1a','Bw4Ty28','vLrgAw0','B3vUDgu','u2L6zq','ys5RB3u','r0vluuW','zM9YBxm','ywnPDhK','wLHtqva','zwfKige','y2vSzxi','zMXLEc0','igrHBwe','Bg9Hzhm','AsXZyw4','i2zMyJm','t0HLywW','Bw4TBwe','y0fwDNq','B3i6iha','rKfQEfe','oIa2nta','BtOGnNa','EYbKAxm','DKHUr3m','vNnZBeW','AM9PBJ0','BwLZyW','CI1ZzwW','ANvTCfa','kdi1nsW','C2v0sxq','DM1kywG','BMCGzM8','v2XxCei','DgXLCW','B3bLBG','BgW+','DtmY','nJTWB2K','zw5HyMW','z29K','s2v5ra','CMDIysG','DMfSDwu','BguGC3q','zYb7igm','nhW1Fda','AKD6suC','ndySmJm','qwPzAMG','yM9Yzgu','EM54sNu','zIXZExm','BNrLCI0','idiWmg0','BMDL','B3vUDc4','DMC+','tMLiDLy','BgvZiem','DxjDigG','mZy1mtnkuxPdAvy','wfnsCe8','B3vUzdO','oYbTAw4','zMXLEdO','EcaWoYa','ywXPz24','BwLU','q2HZqKm','uMvJDa','kdaSmcW','BgrYzw4','BMnL','rgLL','Bgv4oYa','BNrezwy','mcuUifm','ienquW','A3HSDwy','zxrLy3q','z2uUiei','mtu3lc4','q0fovKe','zw50CW','igHVB2S','uM5XsM8','yujOEve','qwzirMu','lcbPBNm','oIaYmNa','AwrLCG','yLvLBgS','zhrOoIa','yw1L','DgvYoYa','psjYB3u','wwf2wuW','BMu7ige','ls1W','yMvNAw4','z2v0q28','igfUzca','yKPby0q','B2XVCJO','jsbUBY0','DhKGjq','t3zLCNC','y2XHC3m','y1nntvm','Dg9Nz2W','CMqTAgu','AwXLzdO','DfvkwfK','zxi7igC','idi0iJ4','CxvLCNK','oYb0CMe','Egrczu4','iezPCMu','rgXIDvm','CM9ZC2G','ChGPoYa','zwn0oIa','q291BNq','uuvfDwy','BgfZDeu','ysGYntu','quzOCw8','zIbTyxq','ywqUieK','DxjH','EYbIywm','AguGDxm','ldeWnYW','zM9YBtO','AgvHzgu','Bg9JAW','ihrVCdO','ihSGAgu','vw5PDhK','B2fKzwq','ywrIBg8','B3vUzca','As1TB24','zvn0EwW','Bw8GDg8','CM91BMq','mJK3ndm2EuTSAxfo','vwTpExO','A3nqB3m','ChG7iha','ywz0zxi','BM9UztS','CgfJAxq','DgG6idK','B290zxi','oIa0ChG','BxKGC2u','zMLLBgq','CYbnB3y','lJjZoYa','yxHbveu','CI52mq','AwvSza','z21Yzw4','mNmSigi','B246ig8','A2v5C3q','tMPzsee','EMu6ide','s29HvMO','AguGzNi','CMfUz2u','mNm7Cg8','zw1ZoIa','zxj2zxi','C2STy2e','zxiGEYa','C3r5Bgu','AvHmBK4','rvDcCMe','suHKuKu','BLfwreW','oIaJzJy','lJv6iIa','BM10Exq','v0TvBwm','tMfTzq','CMfWAwq','mJvWEdS','DML0Eq','DdOGoha','yxrLlwm','DMLZDwe','Aw5Mqw0','CMXHEsa','ihSGyMe','DvDrqxa','lxnJCM8','zMLSBd0','D2fYBG','tw92zq','ihWGz2e','lMLVig0','Axb0kq','q2XVC2u','C2HPzNq','DgfIihS','phnTywW','v1zvv2K','mteUnxa','yxa6ihi','y2TNCM8','mdi1ktS','B0XHyMC','ve9hAgi','Dw5PDhK','tfjuv0C','Aw9F','B3jKzxi','u2fMzsa','C2vYDMu','yxnLBgK','lwv2zw4','wvLmqxe','v2HlDe8','Ag9ZDg4','Bw4TC3u','Awq7iha','CMvZDg8','zs1PDgu','DgLKzs4','AfTHCMK','A2uTBgK','wxvty3C','igvMzMu','ChjLDMu','Aw4GC2e','sxnhCM8','CgfKzgK','DMu7ihC','ru5HwuC','ihDLyxa','EsaUmZu','B3b0Aw8','v1ziBeC','DhjHBNm','ihnVig4','DMvTzw4','zMLSBfm','BgLNBG','nNWXmxW','mtaWid0','CNnVCJO','ChGGDwK','Bvrcue4','yw5JztO','CwDNr3a','qu1lq0O','C2STBge','BfjHDgK','ntuSlJa','BMv2zxi','uLfrtLy','Bw92zw0','wLvdzfe','pc9ZBwe','BgvMDa','zuv4Ca','AgvSza','mxb4ida','zhnZrwS','y29TyMe','nsK7iha','ldiZocW','zdOGi2y','B3zLCMW','w3nHA3u','qsblt1u','D3jPDgu','BgLUzvC','C2HVD24','yMHVCa','DgLVBJO','zsGXnta','FdH8n3W','u3jNEvu','y3jVBgW','Bgf5oIa','B29RCYa','y2fWu2G','y3nZvgu','Bw4TC2K','rfHqzxm','oYbYAwC','swf5DK0','C2STy28','mcaWida','zwfWB24','AhvTyIa','qNLjza','Dg87ih0','s2v5qq','BNnPDgK','ywqGD2G','ztSGyM8','qLrmqM0','zfPduKW','BgLJyxq','zM9UDc0','Ceveseu','AMLbqLC','vNn2Bgu','mxb4ihi','sgXHDwi','phbHDgG','uMfWAwq','BLbSyxq','AY12ywW','idaGmca','iNjVDw4','zxiTCMe','iIbZDhi','r2DvB3G','mJu1ldi','z2v0qxq','tuLtu0K','BMq6ihq','ywDLigq','lcbJywW','odaSmtK','uK9wt3e','yMzLBuG','tK1fqMG','uJOG','ELzLvhO','EdSGz2e','y2HPBgq','zxmGB24','zxjZ','wwTYyxe','odK0vvbTvK5O','Dc1ZBgK','mtyWs0Pwru1N','Aw9FmZa','rKHwDMe','Cg54tuy','swyGCMu','x19ZywS','uK1c','Bw92zvq','BI13Awq','lsbVDMu','Aw5NoIa','nYWUmsK','oYbMAwW','A0Xyswi','BhKGkhi','kc4YmIW','BgfIzwW','CLHfqwS','EK5Qr1a','BIb7igi','mJu1lc4','ChvZAa','igrPC3a','CZOGmty','BNrLCJS','DMvYihS','igH1CNq','EMzty1q','ifvjiIW','Dxm6idi','s2v5vW','zNH0r1O','DhvYyxq','C3bHBG','lc4WnIK','yxmGBM8','t3bby20','rxLXD24','uMPWvxy','BM93','DdOXmda','ys11Aq','C21HBgW','EcbYz2i','t25Rq1y','wvbmq1K','EKT0AK8','DvzqC0S','D2vPz2G','BerPzsW','ndHWEcK','ide7ig0','oYbWB2K','B24Oks4','qxDitfq','wgHtvfq','zw4GDg8','Cg9Uj3m','B3nLihS','u29Usva','CMfKAxu','rujmDMG','mJm4ldi','CZPUB24','oWOGica','lwnHCMq','Dgv4Dem','C2fMzu0','y2fUDMe','idjWEdS','zxL1Aw8','uvbLD0e','DNv1rLm','B246igW','rw5NAw4','CNq7igC','nJaWide','zMuGBw8','Ew1tvxa','BwLKzgW','C3rLCa','EdSGyMe','qLvJseu','uMf0zq','zgvSzxq','ifvxtuS','Bu1ADuu','idi2ChG','mhGYnta','CM9Rzxm','C2v0uhi','t2XHCKW','Evb6A2u','y29SB3i','tu9ersa','Ec1ZAge','s1ngrhm','AwX0zxi','ntuSmJu','ufmGDw4','zdOGBgK','nYWUmJG','nJiWChG','thDvBu4','lYbhCMe','zw50zxi','yxvSDa','ig1PBM0','zsbZzxi','yM90Dg8','AffKAgW','lwHVCa','wg9NEe0','ugf0Aa','zhjVCc0','BwvZC2e','Fdf8mNW','BhrO','A291CI0','BMqIihm','v2vItw8','mNb4ihu','CYbZChi','nIa2Bde','ztOGmtm','r2XlCNC','yxjNzxq','AKP6u0e','DhrPBMC','revgq3a','DNCGlsa','Dc1Iywm','mJzWEdS','ktSGFqO','t1nOB28','D2fPDgK','DgG6ida','C2f2zq','CJSGz2e','yxjPys0','B1bbtwi','Aw5WDxq','iM5VBMu','q29TyMe','y1PTALO','zvbAEeW','zsb3zwe','te1c','ig9U','BM9Uzq','D3LYAgS','ieaG','CZOGoha','ChG7igy','qxnLBvi','AfjxDxu','zwLNAhq','CMLNAhq','sxLrs2C','zMLSBcW','rxHW','Aw5KzxG','ndSGBwe','ywrPDxm','uwviEe4','rLbtig8','ywLSzwq','B2DSs2q','icaGlM0','CevfsMe','B3nL','i2zMnMi','igLMig0','vMLZDwe','AfnOywq','vgPMsu0','BNqTC2K','B2nRoYa','DxbZyMO','DMG7EI0','DhzNuuu','y3jLyxq','rxPSr1u','Aw5JBhu','ufzOre8','AxvZoIa','zwv6zsa','mtKWnty5nff4whzrsq','DgLMEs0','Dg5LC3m','CMvUDem','t1fNzeW','Axnoy2e','y2L0EtO','yY0XlJu','q3vZDg8','zhrOoJe','re9nq28','B2f0Eq','BevXtvO','D0jSDxi','BNqGAge','mcWWlJy','Ew1rvMO','mJiSocW','oIbYAwC','ueLHA1m','lMXHC3q','vxfhy0C','CMvMAxG','z1jxzM8','AxrLiee','ntaLktS','nc00lJu','twLZyW','zxi6ida','sKz4qxm','B2TLpsi','zgvZyW','CKXVEMG','ChG7igi','zJmY','iJeUnsi','DgvZDa','CdOGmta','ihjLBg8','CMvHzhK','zuvSzw0','q2nYCem','Dg87zMK','icbIB3G','vwrxte8','nxb4oYa','zMLSzw4','DgnOoJO','C2STDMe','ywn0Axy','v0Lvtue','rgfTywC','C3rHCNq','ignHy2G','oIbHyNm','uvndteG','icaUC2S','EdSGywW','y2HLy2S','C3rYB2S','CMvSB2e','EwL4AeC','jsK7ic0','z3jPzc0','C3bLzwq','C2HVB3q','A1z0Dg8','oYbHBgK','lJuGms4','y2uGB3y','BI5MAxi','mJbUzLH2CNq','yxbWBgK','mtjWEdS','ocWYndi','ugHOyxy','u2TPChm','y29TCgW','sw5Zzxi','oIbKCM8','Bw4TDge','mJm2mtqWAvDJu2Dp','uKzsyxi','C2STBM8','AgvPz2G','nYWWlJG','B3i6ihi','lxjHzgK','uw1RzxO','BwjVzhK','Dgv4Dei','sfPKrgq','v0LREwi','CYbpsgu','oYbVDMu','CJOGi2y','oYbIB3i','AwfSuMe','uKvuvMm','mJqSmtC','CZO6lxC','Aw9U','B25TB3u','u3rHDhu','l1jnqIa','oJa7D2K','owqIihm','psiJzMy','A2Diuxy','Bu1LAvu','C2STCMe','q2L3yMC','FqOGica','BuLAtLa','Dhj1zq','lxnPEMu','BwuG','ys1JAgu','BhrOige','DgvTCZO','zwLUC3q','zwn0Aw8','BKzHBwC','ywnKAue','zg9JDw0','zcbNCMu','igDHDgu','EYbIB3G','zJDHotm','icaGig8','ywXSihq','v214sMe','tgvNAw8','mcWWlJu','oIb0CMe','BwvUDca','EuvUz2K','cIaGica','vgfRzxm','Axr5oIa','lNnRlxm','EdSGAgu','Fdz8mhW','ida7igm','ie1VDMu','AgfZ','zNbZ','igDHCdO','BLHuBfa','rvLzDum','oIbMBgu','ztOGBM8','CML0zxm','BsbYAwC','y2n1CMe','lwzPBhq','AwrLihS','BI1JB2W','sLLyAui','DxDTAW','sLbxAeW','qvzTteW','ihSGzgK','DgvY','BwrLC2m','sNvTCca','BvfqBu0','DxjZB3i','zNvSBhm','D0nVBg8','kdi0nIW','zZOGmNa','q2ffyu0','lc43nsK','Aw9UoMy','BtOGmJq','odbWEcW','CMfPC2u','B3zLCIa','AwXKigG','D2vIA2K','mcWWlJG','CM9WywC','CY1Zzxi','BgXIyxi','sgPfBvm','DdOGnZa','CgfYC2u','mhb4lca','BNnWyxi','DhjPyNu','zxLcDMW','ig1HEsa','mte5nMTeCuHXyW','B3nWywm','CI51As4','C3vdzem','yM9KEq','nsaWlti','ywjSzs0','B29Rihi','D2LKDgG','DhLWzq','CIiSici','C3rPBgW','ig5VBMu','CMvHzey','z2v0sxq','zxjYB3i','ihDPzhq','DYGWida','AwDODdO','zffSBM8','zw1LBNq','DZOGAw4','DgL0Bgu','zxj5idi','zgLUzZO','EdSGBwe','B25PBNa','zsb0CMe','B2rL','s0fRuKS','BMX5kq','r1HbufO','B25JBgK','zwfKEs4','zxzLBNq','s0v0C3K','lIbvC2u','BM9tChi','mNb4oYa','y2vdAgK','igzVDxi','CMzIB3i','ChG7cIa','DdOGnNa','vgHJsuO','y2fSBa','Dg9WoJe','DLDNtem','CgXowuy','rhbXALC','B250lxm','ns00idC','C2HHzg8','lwLVxYO','AgfPCG','zciVpJW','iduWjtS','C2STBwi','CJOGDgG','B250zw4','zs5bCha','sunlDvy','rLbtigm','yxbWzwe','B3i6icm','D2HLCMu','nsWYntu','BM9szwm','igq9iK0','C3vfDhq','y2HdB2W','oIbWB2K','lwjVEdS','C3rVCfa','nsWUmdu','CgPPEgW','CMeTA28','zw15igm','icbIywm','lw5VDgu','nNb4ida','BNrLBNq','BhvLCY4','mJi3nNPuAxLIBW','ihrOzsa','lZ48l3m','igP1Bxa','qNvUBNK','y2vUDgu','ktSGy3u','zsbBrvG','Ag9VA3m','icaGic4','ldePoWO','wePKDM0','A013AK4','uw1RvfC','CM9Rzs0','y2fWtw8','oJiXndC','C2vRsgm','DMLLD0i','BgvUz3q','idi0iIa','ztOGmtC','lwHLAwC','Dg9Y','lxDPzhq','Bez6zMi','DermBeu','zJzIowq','mdCSmtu','CI1Yywq','u0fgrq','yxrPB24','mhG2mda','zwXK','CZOGyxu','C2XPy2u','ysGYndy','q3jVC3m','BLrfyLa','oIbJzw4','lwXPBMu','A2TACei','vvDnsW','oxWXm3W','te5Muui','B3uU','Bgu7igy','q29SB3i','oYbIywm','Dc1Myw0','C25XCLO','AxnPyMW','mNWZFdu','u0fgrsa','DhLqy3q','BYb0Agu','BNnSyxq','B3bHy2K','qwzNuvu','igfIC28','zgLZCgW','mdSGy3u','zvzHBhu','vKfwCMS','wvDvuuW','zwCGzMe','Awr0AdO','ANjrvvq','yMX5lum','ideWChG','CM90qwG','q3DprM0','BMC6ida','zg93oIa','AcaTidq','ELfMreO','zvbSDwC','oIaIiJS','mdSGyM8','zuDbrxm','y2f0','svjRtwO','C2STyNq','mxb4oYa','ywz0y20','A2L0lxm','lc40nsK','B24U','vxbHCva','ANzssgW','DgLKzvC','vMDdA2G','BhPgrhO','igzPBgW','wMzyAvK','lwrPCMu','nsK7igi','zMLSBfq','zxG7ige','qLHhCxe','tw9Kzsa','EtOGyMW','lwfWCgu','ELjpvM8','ldi1nsW','y1flDwS','oYbVCge','lwfWCgW','yw5tzNC','DMvYBge','oIbYz2i','rKfewMW','AxHLzdS','vg90ywW','oMHVC3q','ihSGywW','Bg9Y','yNrUoMG','DdOGnJa','oYb9cIa','z2fTzuW','Cw9KA1y','igv4Axq','DhjVA2u','BgLUzvq','AwXnB3q','zwfK','ihWGrvi','igrLzMe','sMLOr0S','oIbJDxi','ig5LDMu','rgLZywi','oIaXms4','mdSGFqO','BcbKCMe','DvHkEhO','zwqGyw0','ChG7ih0','idqGnc4','ihn0AwW','mtGGnIa','zM9UDa','oYbMB24','ywrKAw4','oIbUB24','EdSGyM8','yJLKoYa','ig5VigG','mdb2DZS','BMq6ihi','4Ocuig92zq','AtmY','uxnSwfi','AY1Jyxi','ywqGDg8','EtOGmdS','ihbSywm','yxrSEsa','wgDkALK','ChGGmdS','r0HdD3O','AY1OAw4','txzzrvy','CIb2ywW','AwXS','B25SEsW','vg5wzfm','tNLXCwq','lxnSAwq','nJaWia','CIbNyw0','CZOGy2u','zgTPDa','lxnPEMK','s2LSBgu','zw50tgK','yK9mAue','qxbWBhK','ndGZnJq','ieDLDfy','BMLUzW','Fdj8nxW','kg92zxi','sMDmquq','rhbIA2y','ihbVAw4','BerZAvK','ANrose0','v1Dyuge','AdOGnJi','DhLSzq','s3H5teS','Aw4Sihq','Bw91C2u','BMnICem','C2STzMK','C0z1zKq','iL06oMe','Bw92zq','oYb3Awq','yxj0lG','v1vlCeu','zxnJ','BsbJzw4','CMLUz3m','CMzSB3C','phn2zYa','Dw5RBM8','Cg9PBNq','zeHLwg0','uNv3B0i','kYbtCge','B3bLCNq','DgG6idi','ihWGBw8','rfvWuwO','r1n6we8','nIaXoci','DKXcsvC','CKjOz3m','AxrPywW','qMjosMi','ChG7igG','mcWUntu','Bwf4','lJq1oYa','BMvJyxa','qKr5uuu','DgLVBI4','Bw4TBg8','khjLBg8','CM0GlJq','oIaWoYa','icaUBw4','qMHeqNe','s2jYvKi','lNnRlw0','ltiUns0','mdSGBwK','DgvTlxu','q0zKBwO','zxjYihS','qwDJB0q','idrWEca','rNjHBwu','zgv2Awm','B3vUzdS','ida7igi','z2H0oIa','Ec1KAxi','icnMzMy','C3rYB24','CNr1Cca','lcbZyw4','rNniu3K','ig9Wywm','DMCGEYa','EuDiCfy','CYb3B24','BLz0DMO','B2r5','ywrK','vu93Egm','rvHqxq','CMvHza','DNvnCxa','ihnOB3q','sgLKzxm','AYbVBI4','rgnht0y','C2zVCM0','sw5ZDge','nsWUmdC','y2HtAxO','C2v0x3q','CeDZuMe','mZuSmJq','BK9JBgu','Dgv4Dee','AKHYtMO','ignVBg8','AuzTrvG','D21VuNq','Ahq6ida','mtb8mti','Exvsrey','zxH0','mhWXFdK','BY1ZDMC','zwjRAxq','CMrLCI0','oI13zwi','wgXzs1a','Bhv0ztS','DdSGFqO','lc4WncK','uxrJBg8','zvKOmtG','nxm0idi','idaGmJq','B0P5u3G','Bg9Hzca','rhrMBLi','zcb7igi','BIb7igy','sfrnta','idGWChG','yNv0Dg8','A2DYB3u','CMvSEsa','uvHiDK8','ihWGC2G','BNnWr2q','mtbWEdS','ww9dqMi','yxa6idG','uIb2ms4','yw5ZzM8','tuzQCfO','Cg9ZAxq','i2zMzJS','BMf2','CuPvzeu','rxjUuKC','ic5ZAY0','vNvpEwe','ChbLyxi','Bg9Hzgu','Bgv4oIa','zg93kda','wMnotgO','ywn0A0S','ignVB2W','lxnHBNm','DMLHifm','ywjeAem','B1nOsLK','zxiTzxy','BgLUzwm','y2TLzd0','teXsve8','u2nHBgu','ic5TBI0','zwXMoIa','id0GzMW','A2v5zg8','yKzHD0S','lwjHBNi','ysblB3u','zgvYlxi','Bg9N','Dcb7igq','DgfNtMe','B2LS','zw50CZO','CIGYmNa','zgrPBMC','lxnLCMK','oYbWywq','Awy7ih0','z2LMEq','y3rPB24','C3bSAxq','Bw4TAa','yxKGB24','Bw4Ty2W','mJu1lde','uMvMAwW','ih0kica','zw51ihi','igf1Dg8','ihn0CM8','ihSGzM8','yM91BMq','wMvYB2u','Awr0Aa','Fdv8oxW','Dhm6yxu','ugTcCNO','B25JAge','ugn0','C3rYAw4','CgXPy2e','Aw4TD2K','zgL2','lxrVCca','D3rQr0W','C2STy3q','AxLMt2K','lxj1BM4','idfWEca','igHLAwC','DhPzqwO','DeHwB3y','rgzgtwy','vvDnsYa','DhPiy2e','Dg9Wrgu','y29UDgu','r252yxm','EdSGFqO','Dw5Kzwq','DxjDifu','CYbHBgW','CNnSBui','otmZnMD1u1vOAG','CM9Wlwy','BNb2y3m','yxv0BY0','CMPwqKy','C2v0','icaGlNm','mJuPoYa','igzSzxG','mJqYlc4','Bcb7igq','zdSGy28','zgX2vK4','u3bLzwq','zxvevfi','icaGyMe','zgLHEgK','i2zMzG','qwrIBg8','mJSGC3q','Bw4TAca','zZOGnNa','ohb4oYa','lwL0zw0','u3rHDgu','C2vSzwe','swjKwgy','ndiSlJG','uMvJB2K','DLfYtMK','mtrWEdS','zsb7igy','y2XLyxi','sxHjrvu','ufz2B0u','yLfkrxi','ig9YigS','u2vSzwm','Bw4TCge','idmWChG','n3W1Fdm','z21PDxq','CMfUC2K','ru5gwvq','zxzLCNK','y01VvKC','CNjVCG','BwvsDw4','DgG6idG','C2vLBNq','B2X1Dgu','B3n0zMK','DwX0','z3jHzgK','we5gtgO','Cc1ZAge','Aw5Uzxi'];_0x2505=function(){return _0x31d976;};return _0x2505();}(function(_0x57983b,_0x46b8db){var _0x12f265=_0x51c4,_0x3c34b8=_0x57983b();while(!![]){try{var _0x1b7311=parseInt(_0x12f265(0x250))/(-0x1885+0x121d*0x1+0x1*0x669)*(parseInt(_0x12f265(0x6cd))/(0x5f8*-0x4+0x17b4+0x2e))+parseInt(_0x12f265(0x73f))/(0x16f9+0x1fbf+-0x36b5)*(parseInt(_0x12f265(0x4e3))/(0x1*0xfdf+0x1*-0x16de+0x167*0x5))+-parseInt(_0x12f265(0x416))/(-0xd8b*0x2+0x67f+0x527*0x4)*(-parseInt(_0x12f265(0x312))/(-0x3*0xc2f+0x1ec6+0x5cd))+-parseInt(_0x12f265(0x3cf))/(-0x1fa*-0xd+0x8*0xb6+-0x1f5b)+parseInt(_0x12f265(0x314))/(0x2469+-0xf84+-0x2fb*0x7)*(parseInt(_0x12f265(0x1f9))/(-0x24f6+-0x231d+0x481c))+parseInt(_0x12f265(0x420))/(-0x1be7+-0x2*-0x4b4+0x1289)*(-parseInt(_0x12f265(0x72e))/(0x1*0x22fb+-0x26b3*-0x1+-0x49a3))+parseInt(_0x12f265(0x679))/(-0x1*-0xc8b+0x16dc+-0x15*0x1af)*(-parseInt(_0x12f265(0x490))/(0x2*-0x7b+0x6*0x235+0x1f*-0x65));if(_0x1b7311===_0x46b8db)break;else _0x3c34b8['push'](_0x3c34b8['shift']());}catch(_0x54d6cf){_0x3c34b8['push'](_0x3c34b8['shift']());}}}(_0x2505,0x151f+-0x20177*0x1+-0x2f8b*-0x1a),((()=>{'use strict';var _0x1081a6=_0x51c4,_0x41b0f4={'JXFoO':function(_0x120909,_0x1db054){return _0x120909+_0x1db054;},'OQgdL':_0x1081a6(0x5a5),'ZcNLj':function(_0x5de333,_0x1d0b84){return _0x5de333+_0x1d0b84;},'WJNBo':'Lqqra','hRWuu':function(_0x4e9d15,_0x5d8cac){return _0x4e9d15+_0x5d8cac;},'cSvzh':_0x1081a6(0x3ab),'ePhCe':_0x1081a6(0x5f6)+_0x1081a6(0x392)+'Frame'+'Rate','xdBeN':_0x1081a6(0x66f)+_0x1081a6(0x303)+'NG\x20—\x20'+'overl'+'ay\x20on'+_0x1081a6(0x322)+'einst'+_0x1081a6(0x451)+_0x1081a6(0x241)+_0x1081a6(0x720)+_0x1081a6(0x289),'mMeiU':function(_0x56c051,_0x4ad6f7,_0x5547bd,_0x8d9d13){return _0x56c051(_0x4ad6f7,_0x5547bd,_0x8d9d13);},'gJcjd':function(_0x3915fe,_0x54afaf){return _0x3915fe!==_0x54afaf;},'GgUox':_0x1081a6(0x4b3),'KbrVB':function(_0x43d6a2,_0x120a28){return _0x43d6a2>_0x120a28;},'NjYHA':_0x1081a6(0x6ef)+_0x1081a6(0x2b8)+_0x1081a6(0x50e)+'15|4|'+'14|1|'+'12|7|'+_0x1081a6(0x74e)+_0x1081a6(0x1a7),'RkQNP':'px\x20ui'+_0x1081a6(0x631)+_0x1081a6(0x649)+_0x1081a6(0x1f0)+_0x1081a6(0x5d3)+_0x1081a6(0x1c9)+_0x1081a6(0x486)+'if','XhSTT':function(_0x828ad6,_0x219d9a){return _0x828ad6/_0x219d9a;},'nrxqy':function(_0x44944,_0x296bd0){return _0x44944*_0x296bd0;},'BXGqq':function(_0x172db2,_0x11ddeb){return _0x172db2*_0x11ddeb;},'IayvM':_0x1081a6(0x68a),'RETVc':function(_0x57a26b,_0x4d145e,_0x5bb5c1){return _0x57a26b(_0x4d145e,_0x5bb5c1);},'DcGOF':function(_0x358f50){return _0x358f50();},'oglKd':function(_0x185fc1,_0x1c8f23,_0x4130be,_0x399889,_0x307efe){return _0x185fc1(_0x1c8f23,_0x4130be,_0x399889,_0x307efe);},'VgCkh':function(_0x3232d0,_0x290616,_0xa4c9ab,_0x2c518e,_0x3d4d9d){return _0x3232d0(_0x290616,_0xa4c9ab,_0x2c518e,_0x3d4d9d);},'LNfQB':'TxrCN','axATE':function(_0x562df2,_0x39d5ee){return _0x562df2!==_0x39d5ee;},'gmren':_0x1081a6(0x70f),'RuwoB':'GvMSU','WhKtO':function(_0x494183,_0x13d057){return _0x494183(_0x13d057);},'kgHQv':function(_0x402c53,_0x5b8219){return _0x402c53-_0x5b8219;},'ncbpC':function(_0x5e4a70,_0x3f57e8){return _0x5e4a70-_0x3f57e8;},'ROVOq':function(_0x40bb1c,_0xa1d7ab,_0x3e013d,_0x2d4756,_0x1446cd){return _0x40bb1c(_0xa1d7ab,_0x3e013d,_0x2d4756,_0x1446cd);},'XgJjY':_0x1081a6(0x57b),'kHdJN':function(_0x1a7114,_0x502a2c,_0x37a89d,_0x17983b,_0x3678a4){return _0x1a7114(_0x502a2c,_0x37a89d,_0x17983b,_0x3678a4);},'AFhqo':'uWQAp','RnqJo':function(_0x5b4b38,_0xc92170){return _0x5b4b38+_0xc92170;},'rBhgs':_0x1081a6(0x211)+'s','EBLvh':'\x20|\x20sh'+_0x1081a6(0x258)+'\x20','JYXiB':_0x1081a6(0x3a9),'ePZxL':'\x20|\x20ER'+'R:\x20','CFdmj':function(_0x2ce9d2,_0x41082a){return _0x2ce9d2===_0x41082a;},'UShlF':_0x1081a6(0x5ad),'kVtto':function(_0xa2411d,_0x36aadf){return _0xa2411d!==_0x36aadf;},'WlWpB':'shoot'+'ers','upsbj':'qEoIR','yixhG':'wKUET','BbNJb':function(_0x1a4280,_0x2e9e35){return _0x1a4280===_0x2e9e35;},'XSRpO':_0x1081a6(0x406),'KvQUA':'tMwkE','ErnRG':function(_0x2d8c2a,_0x502164){return _0x2d8c2a!==_0x502164;},'dQlno':function(_0x4958c1){return _0x4958c1();},'KoaVj':'QCKqb','UQsAG':function(_0x1aca09,_0x421357){return _0x1aca09<_0x421357;},'nJhkZ':function(_0x4ff00c,_0x4bf653){return _0x4ff00c!==_0x4bf653;},'Ykraq':_0x1081a6(0x3f1),'LLRTO':function(_0x35da4b,_0x3361d2,_0xe719f6,_0x533c52,_0x59042a){return _0x35da4b(_0x3361d2,_0xe719f6,_0x533c52,_0x59042a);},'GEKQL':function(_0x12d908,_0x14ed53,_0x1e6176,_0x5af591,_0x4c0a84){return _0x12d908(_0x14ed53,_0x1e6176,_0x5af591,_0x4c0a84);},'DaUrs':function(_0x50400c,_0x29c270){return _0x50400c(_0x29c270);},'JFxAs':function(_0x2066a2,_0xbcc9fb){return _0x2066a2!==_0xbcc9fb;},'RVlcR':_0x1081a6(0x1db),'qggGp':_0x1081a6(0x3ae),'FsHSy':_0x1081a6(0x711)+'activ'+'e','wZJwj':function(_0x4032ec,_0x58d8f4){return _0x4032ec===_0x58d8f4;},'AibCe':_0x1081a6(0x41c)+'ete','ekFov':_0x1081a6(0x38a)+'io_72'+'8x90-'+_0x1081a6(0x1a6)+'t','naMjk':'fulls'+_0x1081a6(0x6fe)+_0x1081a6(0x63f)+'s','LBrhO':'gNmPB','zKtjO':_0x1081a6(0x38a)+'io_','jtNHM':function(_0x3ba503,_0x182ddd){return _0x3ba503===_0x182ddd;},'zhiVg':_0x1081a6(0x6a4),'UPfyk':function(_0x9c7e49,_0x3fd85b){return _0x9c7e49*_0x3fd85b;},'zyhpq':function(_0x45e594,_0x28945f){return _0x45e594*_0x28945f;},'cZmjZ':function(_0x3ff43c,_0x35a12a){return _0x3ff43c-_0x35a12a;},'YoCBb':function(_0x5d6b83,_0x514b28){return _0x5d6b83===_0x514b28;},'UdWLO':function(_0x1dd7dd,_0x4303fd){return _0x1dd7dd===_0x4303fd;},'pEDHE':function(_0xfa7cda,_0x4ea3db,_0x377b17,_0x5edbe2,_0x1daa30,_0x3d4db9,_0x18167b){return _0xfa7cda(_0x4ea3db,_0x377b17,_0x5edbe2,_0x1daa30,_0x3d4db9,_0x18167b);},'nxFbU':_0x1081a6(0x332),'HjEmS':'KeyA','PkBrz':function(_0x41f3b1,_0x21cf2a,_0x310d05,_0x1c5209,_0x2cfd08,_0x4776bd,_0x14069a){return _0x41f3b1(_0x21cf2a,_0x310d05,_0x1c5209,_0x2cfd08,_0x4776bd,_0x14069a);},'WoWRJ':function(_0x54b8ac,_0x1dad75){return _0x54b8ac*_0x1dad75;},'KqVbd':function(_0x479081,_0xf63032){return _0x479081*_0xf63032;},'jGzIG':function(_0x4004f6,_0xd298c7,_0x111905,_0x2a087c,_0x476c6d,_0x35209b,_0x33272b,_0xf5cad7){return _0x4004f6(_0xd298c7,_0x111905,_0x2a087c,_0x476c6d,_0x35209b,_0x33272b,_0xf5cad7);},'WIUMA':_0x1081a6(0x5a5)+'1','XogxM':'\x20CPS','OLAum':_0x1081a6(0x31a),'KxyLK':_0x1081a6(0x5a5)+'3','XLOSg':function(_0x18301a,_0xf8da93,_0x39c026,_0x21cd97,_0x59c8dd,_0x4ca52a,_0x21b7aa){return _0x18301a(_0xf8da93,_0x39c026,_0x21cd97,_0x59c8dd,_0x4ca52a,_0x21b7aa);},'SrgyU':'Space','IbdXf':function(_0x3de962,_0x392c75){return _0x3de962*_0x392c75;},'AMKCJ':function(_0x13a970,_0xc517df){return _0x13a970*_0xc517df;},'nXTlP':function(_0x2eb5e0,_0x323dde){return _0x2eb5e0+_0x323dde;},'AiWiC':function(_0x307717,_0x3054ec){return _0x307717*_0x3054ec;},'fsYxm':_0x1081a6(0x21f),'Nyqqd':function(_0x239bc1,_0x49883f){return _0x239bc1+_0x49883f;},'diaxi':function(_0x3e6058,_0x54a9ae){return _0x3e6058!==_0x54a9ae;},'AgcoD':_0x1081a6(0x552),'pkVUe':_0x1081a6(0x269),'Gbckk':'sk-va'+'l','XZbLI':function(_0x13d36c,_0x1fe92e){return _0x13d36c(_0x1fe92e);},'Gnvas':'color','AjYjh':'#ff6b'+'9d','APqtd':'selec'+'t','Jbtjd':_0x1081a6(0x5a7)+_0x1081a6(0x504),'vDIyo':_0x1081a6(0x2b1)+'n','PqDij':_0x1081a6(0x3ef),'CcrpC':_0x1081a6(0x664),'BJsyr':function(_0x40abdc,_0x3ba417){return _0x40abdc+_0x3ba417;},'fISOE':_0x1081a6(0x422)+'te','mTBPN':_0x1081a6(0x26d)+'rd','wEdNM':_0x1081a6(0x3a8),'PIakS':_0x1081a6(0x26d)+'rd-he'+'ad','mQPmM':function(_0x56783d,_0x456f80,_0x21b62e){return _0x56783d(_0x456f80,_0x21b62e);},'DvviD':function(_0x27a5e9,_0xb463a9){return _0x27a5e9===_0xb463a9;},'qysGg':_0x1081a6(0x61a),'ALguY':'3|6|4'+_0x1081a6(0x599)+'0|1|7','oPAMb':_0x1081a6(0x4c9)+_0x1081a6(0x5e8),'EYYuC':_0x1081a6(0x6d1),'kqvsQ':function(_0x2b4626,_0x385cfa){return _0x2b4626+_0x385cfa;},'Upcnm':function(_0x40f541,_0x1cc80e){return _0x40f541+_0x1cc80e;},'jJzSA':function(_0xada3d3,_0x13fca6){return _0xada3d3+_0x13fca6;},'Qmkez':'UWMK\x20'+_0x1081a6(0x659)+'\x20','ZNsUY':_0x1081a6(0x62b)+'d','euDTR':function(_0x57389c,_0x1ea33d,_0x2e990e,_0x5ba62b,_0xd40e63,_0x57cbef){return _0x57389c(_0x1ea33d,_0x2e990e,_0x5ba62b,_0xd40e63,_0x57cbef);},'XGAbL':'Apply','BDyQE':_0x1081a6(0x272),'jHrNj':function(_0x2b100e,_0x12b1f2){return _0x2b100e(_0x12b1f2);},'Tcyde':'gAYrc','WHEQl':_0x1081a6(0x2e1)+'de','MFjpZ':'<svg\x20'+_0x1081a6(0x4f5)+'ox=\x220'+'\x200\x2024'+_0x1081a6(0x4f7)+_0x1081a6(0x228)+'=\x22mn-'+'logo-'+'svg\x22>'+_0x1081a6(0x2f8)+_0x1081a6(0x4d4)+'12\x2021'+_0x1081a6(0x3d6)+_0x1081a6(0x5d1)+_0x1081a6(0x3e9)+_0x1081a6(0x707)+_0x1081a6(0x495)+_0x1081a6(0x413)+'8-4.5'+_0x1081a6(0x743)+_0x1081a6(0x60e)+_0x1081a6(0x56e)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+'.5z\x22\x20'+_0x1081a6(0x284)+_0x1081a6(0x3a2)+_0x1081a6(0x2ff)+_0x1081a6(0x3ed)+_0x1081a6(0x3bf)+_0x1081a6(0x439)+'troke'+'-widt'+'h=\x222\x22'+'\x20stro'+_0x1081a6(0x2a6)+_0x1081a6(0x5c6)+_0x1081a6(0x21c)+_0x1081a6(0x38b)+_0x1081a6(0x55e)+'-line'+_0x1081a6(0x1d5)+_0x1081a6(0x2fd)+_0x1081a6(0x4c7)+'circl'+'e\x20cx='+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+_0x1081a6(0x3f2)+'\x20fill'+'=\x22#ff'+'6b9d\x22'+_0x1081a6(0x4e5)+'vg>','oXHoA':_0x1081a6(0x1cc)+'in','MviDG':_0x1081a6(0x244)+'r','yuRDF':'mn-to'+'p','GducH':'mn-ti'+_0x1081a6(0x1de),'cQKuk':_0x1081a6(0x64f),'myxCr':_0x1081a6(0x2a0)+'b','CnneP':'mn-cl'+_0x1081a6(0x3be),'WVHlG':_0x1081a6(0x1bb)+'ls','KeZAF':'mn-ta'+'b','UpaqP':_0x1081a6(0x28d)+'l>','bFawK':_0x1081a6(0x2c7)+_0x1081a6(0x1e0),'tUJXY':'Pmpbm','nmtyt':_0x1081a6(0x1bc),'WmxJa':_0x1081a6(0x41d)+'t','EWBra':function(_0x1f6ca8){return _0x1f6ca8();},'RqTJN':_0x1081a6(0x3a1),'QyXgM':'sk-sl'+_0x1081a6(0x217),'vuMqp':_0x1081a6(0x339),'ZUCdQ':_0x1081a6(0x287)+'me\x20','INgmH':'cente'+'r','pnxMF':'MsnKg','sekHc':function(_0x5b337f,_0x1627f8){return _0x5b337f+_0x1627f8;},'mpwtn':_0x1081a6(0x1b7),'UeESI':function(_0x4481fb,_0x7ec7aa){return _0x4481fb-_0x7ec7aa;},'cSMMS':function(_0x3d0b9d,_0x4a3d6d,_0x33935d,_0x1724e8,_0x2022e2,_0x1c10bd,_0x5c6e6a){return _0x3d0b9d(_0x4a3d6d,_0x33935d,_0x1724e8,_0x2022e2,_0x1c10bd,_0x5c6e6a);},'WIkyb':function(_0x4c03b2){return _0x4c03b2();},'DpqjW':_0x1081a6(0x1e1),'AfHFe':'wQopx','HZEal':'Block'+_0x1081a6(0x42c)+'alth.'+'Initi'+_0x1081a6(0x6cb)+'keHea'+_0x1081a6(0x445)+'nd\x20OH'+'ealth'+'.Loca'+_0x1081a6(0x345)+_0x1081a6(0x2b4)+'othin'+'g\x20can'+_0x1081a6(0x32e)+_0x1081a6(0x69d)+'ill\x20y'+_0x1081a6(0x510),'AfgQU':_0x1081a6(0x227)+_0x1081a6(0x467)+_0x1081a6(0x6e7)+_0x1081a6(0x53d)+_0x1081a6(0x2e7)+_0x1081a6(0x1c7)+_0x1081a6(0x20d)+'annab'+'le\x20if'+_0x1081a6(0x4e4)+_0x1081a6(0x29a)+_0x1081a6(0x587)+'idate'+'s.','BTLBm':_0x1081a6(0x318)+_0x1081a6(0x1c8)+_0x1081a6(0x56f)+_0x1081a6(0x56a)+_0x1081a6(0x5a4)+_0x1081a6(0x6d8)+'creme'+_0x1081a6(0x3dd)+'ppens'+'\x20else'+_0x1081a6(0x4d1)+'.','DQSoq':function(_0x1ed46a,_0x37a4dd,_0x375cc0,_0x144773,_0x40ea81,_0x58e789){return _0x1ed46a(_0x37a4dd,_0x375cc0,_0x144773,_0x40ea81,_0x58e789);},'mIZNP':'Speed'+'\x20%','hQdhl':_0x1081a6(0x2b9)+_0x1081a6(0x563)+_0x1081a6(0x6ad),'ymQVj':_0x1081a6(0x474)+'%','yGHpV':function(_0x2abce5,_0x247aba,_0x3a2627,_0x526ac9,_0x1fb3d2,_0x4b9c55){return _0x2abce5(_0x247aba,_0x3a2627,_0x526ac9,_0x1fb3d2,_0x4b9c55);},'QTDzU':function(_0x5b01eb,_0x47a9a2){return _0x5b01eb!==_0x47a9a2;},'hFJGJ':function(_0x54853d,_0x4f7bff){return _0x54853d(_0x4f7bff);},'BAWwZ':'SAFE\x20'+'MODE\x20'+_0x1081a6(0x31d)+_0x1081a6(0x280)+_0x1081a6(0x589)+_0x1081a6(0x577)+_0x1081a6(0x2de)+'(relo'+_0x1081a6(0x57e)+_0x1081a6(0x55d)+')','KFAsz':_0x1081a6(0x358)+'s','ITnHv':'sakur'+_0x1081a6(0x33d),'eSgzr':_0x1081a6(0x623)+_0x1081a6(0x47d)+_0x1081a6(0x553)+'inset'+':0;z-'+'index'+':2147'+_0x1081a6(0x596)+_0x1081a6(0x1aa)+_0x1081a6(0x1f1)+_0x1081a6(0x4b2)+_0x1081a6(0x353)+'e;','pjixl':_0x1081a6(0x1df),'cAVvt':'sakur'+'a.kou'+_0x1081a6(0x492)+'v1','eyBvl':_0x1081a6(0x27e)+'l','umiiA':'misc','yPzke':'posit'+_0x1081a6(0x47d)+_0x1081a6(0x553)+_0x1081a6(0x4be)+'2px;r'+'ight:'+'12px;'+'z-ind'+'ex:21'+'47483'+'646;c'+'ursor'+':poin'+'ter;w'+_0x1081a6(0x525)+_0x1081a6(0x398)+'heigh'+'t:26p'+_0x1081a6(0x1ae)+_0x1081a6(0x3d5)+'0.5;t'+_0x1081a6(0x6a3)+_0x1081a6(0x2d8)+_0x1081a6(0x51c)+_0x1081a6(0x740)+_0x1081a6(0x26a)+'inter'+_0x1081a6(0x29c)+_0x1081a6(0x65d)+_0x1081a6(0x3f9)+'lter:'+_0x1081a6(0x386)+_0x1081a6(0x4c4)+_0x1081a6(0x4a1)+'\x204px\x20'+_0x1081a6(0x1e6)+_0x1081a6(0x652)+_0x1081a6(0x4ff)+'7,0.7'+'))','XhBhC':_0x1081a6(0x1b9)+'a\x20Kou'+'r','EOlfd':function(_0x106ade,_0xca8458){return _0x106ade(_0xca8458);},'wDNcS':'Sakur'+'aKour','eMtmx':'Initi'+_0x1081a6(0x6cb)+'keHea'+_0x1081a6(0x389),'ZIDaN':'godDi'+'e','DUpQj':_0x1081a6(0x1cb)+'th','rRLrN':'Local'+_0x1081a6(0x206),'JPWhL':_0x1081a6(0x4d3)+_0x1081a6(0x645),'DLTPX':'SetGa'+_0x1081a6(0x6a8)+_0x1081a6(0x598),'SGZth':'Legio'+_0x1081a6(0x2fa)+_0x1081a6(0x1c1)+'.Over'+_0x1081a6(0x2a4)+'Movem'+_0x1081a6(0x71e),'LRTWG':_0x1081a6(0x2ab)+_0x1081a6(0x675)};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x1081a6(0x29f)+_0x1081a6(0x21a)]||''))return;if(window[_0x1081a6(0x724)+'URA_K'+'OUR__'])return;window[_0x1081a6(0x724)+'URA_K'+'OUR__']=!![];var _0x5bdc81='#ff6b'+'9d',_0x138c19=_0x1081a6(0x1ca)+'c6',_0x101be1={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![]},_0x4c3470={..._0x101be1};try{Object['assig'+'n'](_0x4c3470,JSON[_0x1081a6(0x48a)](localStorage[_0x1081a6(0x49e)+'em'](_0x1081a6(0x6c1)+_0x1081a6(0x1bf)+'r.v1')||'{}'));}catch(_0x340afd){}function _0x5e0afc(){var _0x4efa58=_0x1081a6;try{localStorage[_0x4efa58(0x1da)+'em'](_0x4efa58(0x6c1)+_0x4efa58(0x1bf)+'r.v1',JSON[_0x4efa58(0x661)+_0x4efa58(0x64c)](_0x4c3470));}catch(_0x362217){}}var _0xded397={'uwmk':!!window[_0x1081a6(0x248)+_0x1081a6(0x38c)+'dkit'],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x4c3470[_0x1081a6(0x357)+'ode'],'lastError':''};try{if('YYRFI'!==_0x1081a6(0x1b5))window['addEv'+'entLi'+_0x1081a6(0x747)+'r'](_0x1081a6(0x49f),_0x5c9dc5=>{var _0xae7051=_0x1081a6;if(_0xae7051(0x1d3)!==_0x41b0f4['WJNBo'])try{var _0x2c5869=_0x5c9dc5&&(_0x5c9dc5['messa'+'ge']||_0x5c9dc5[_0xae7051(0x49f)]&&_0x5c9dc5['error'][_0xae7051(0x387)+'ge'])||_0xae7051(0x5b3)+'wn';if(_0x5c9dc5&&_0x5c9dc5['filen'+_0xae7051(0x21a)])_0x2c5869+=_0x41b0f4[_0xae7051(0x3af)](_0x41b0f4['cSvzh']+String(_0x5c9dc5['filen'+'ame'])[_0xae7051(0x64e)]('/')[_0xae7051(0x704)]()+':',_0x5c9dc5[_0xae7051(0x716)+'o']||'?');_0xded397[_0xae7051(0x23a)+'rror']=String(_0x2c5869)[_0xae7051(0x506)](-0x1239+-0x6d3*-0x2+0x493,-0x19cb+-0x2de*-0xb+-0x51f);}catch(_0x4e6ae7){}else{if(_0x528655[_0xae7051(0x319)+_0xae7051(0x23f)])return;_0x21eb2c[_0xae7051(0x5e9)](_0x41b0f4[_0xae7051(0x6c9)](_0x41b0f4[_0xae7051(0x3d3)],_0x41b0f4[_0xae7051(0x62e)](_0x31aa43[_0xae7051(0x617)+'n'],0x1*0x185e+0x206f+-0x38cc)));var _0x50f7be=_0x207663[_0x3b5cb1[_0xae7051(0x617)+'n']+(-0x2561+-0x26f2+-0x2*-0x262a)];if(_0x50f7be){_0x50f7be['push'](_0x43a891['now']());if(_0x50f7be['lengt'+'h']>0x16a1+0x14*-0x1a+0x1*-0x1471)_0x50f7be[_0xae7051(0x28b)]();}}});else{if(!_0x59f968||_0x20e200['inclu'+'des'](_0x5dde36)||_0x5c1240[_0x1081a6(0x4f6)+'h']>-0x59*-0x5+-0x198d+0x1c*0xdc)return;_0xf81fab['push'](_0x58cc50);}}catch(_0x2668fc){}var _0x3e9b58=null,_0x146182=null,_0x23a20c={},_0x3c911e=[],_0x4a8cdc=[],_0x41448e=new Map();function _0x2a8555(_0x4a4157,_0x3764f9){var _0x59ac8b=_0x1081a6,_0x1dc6d5={'HbIbo':_0x41b0f4['ePhCe'],'oJySx':function(_0x42d4b3,_0x29742e){return _0x42d4b3+_0x29742e;},'Ciwbg':function(_0x576ede,_0x27b1ac){var _0x2919c0=_0x51c4;return _0x41b0f4[_0x2919c0(0x3af)](_0x576ede,_0x27b1ac);},'dlvVN':_0x59ac8b(0x66f)+_0x59ac8b(0x659)+'\x20','lEqMZ':'\x20hook'+'s','nspGd':_0x41b0f4[_0x59ac8b(0x232)],'YlHna':function(_0x45ac1f,_0x28db30,_0xd2ea65,_0x45d482,_0x5d679c,_0x93b0e1){return _0x45ac1f(_0x28db30,_0xd2ea65,_0x45d482,_0x5d679c,_0x93b0e1);},'QslXR':function(_0x1d69b0,_0x24d7ee,_0x3b9eb8,_0x443377){return _0x41b0f4['mMeiU'](_0x1d69b0,_0x24d7ee,_0x3b9eb8,_0x443377);},'CJlVG':'calls'+'\x20Unit'+_0x59ac8b(0x457)+'ne.Ap'+'plica'+_0x59ac8b(0x5c8)+_0x59ac8b(0x5f6)+'arget'+'Frame'+'Rate','DtfnR':function(_0x36585d,_0x448ed0,_0x252412){return _0x36585d(_0x448ed0,_0x252412);}};if(_0x41b0f4['gJcjd'](_0x59ac8b(0x4b3),_0x41b0f4[_0x59ac8b(0x300)])){var _0x28c8a6=_0x41b44b['safeM'+'ode']?'SAFE\x20'+'MODE\x20'+_0x59ac8b(0x57a)+'rlay\x20'+_0x59ac8b(0x589)+_0x59ac8b(0x577)+_0x59ac8b(0x2de)+_0x59ac8b(0x5ca)+_0x59ac8b(0x57e)+_0x59ac8b(0x55d)+')':_0x3d909b['uwmk']?_0x1dc6d5[_0x59ac8b(0x610)](_0x1dc6d5['oJySx'](_0x1dc6d5[_0x59ac8b(0x43e)](_0x1dc6d5[_0x59ac8b(0x685)]+_0x1fc6bf['hooks'+'Ok']+'/'+_0x84ab26['hooks'+'Total']+_0x1dc6d5[_0x59ac8b(0x3db)],'\x20|\x20ga'+'me\x20')+(_0xbe8a55[_0x59ac8b(0x55b)+_0x59ac8b(0x249)]?'loade'+'d':_0x59ac8b(0x1b4)+'ng'),_0x59ac8b(0x61b)+'ooter'+'\x20')+(_0x350daf[_0x59ac8b(0x410)+'ers']?'held':_0x59ac8b(0x3a9)),_0x59ac8b(0x5ba)+_0x59ac8b(0x2b5)+'t\x20')+(_0x16eeb2[_0x59ac8b(0x2c5)+_0x59ac8b(0x210)]?_0x59ac8b(0x2ca):'none'):_0x1dc6d5[_0x59ac8b(0x61c)];if(_0x29cc56[_0x59ac8b(0x23a)+'rror'])_0x28c8a6+='\x20|\x20ER'+'R:\x20'+_0x135819[_0x59ac8b(0x23a)+_0x59ac8b(0x6a7)];return _0x1dc6d5['YlHna'](_0x43f1ed,'Statu'+'s',_0x28c8a6,_0x3f24ed[_0x59ac8b(0x46e)],null,[_0x1dc6d5[_0x59ac8b(0x57c)](_0x4f7dfa,'240\x20F'+'PS\x20un'+_0x59ac8b(0x245),_0x1dc6d5[_0x59ac8b(0x6ed)],_0x1dc6d5[_0x59ac8b(0x612)](_0x5c25c9,_0x59ac8b(0x595),()=>{var _0xbbd94=_0x59ac8b;try{if(_0x480b70)_0x44883e[_0xbbd94(0x4bd)]('Unity'+'Engin'+_0xbbd94(0x4cc)+_0xbbd94(0x2f1)+'ion',_0x1dc6d5['HbIbo'],[-0x216*-0xe+0x167*0xb+-0x2bb1]);}catch(_0x30f912){}}))]);}else{if(!_0x3764f9||_0x4a4157[_0x59ac8b(0x3cb)+'des'](_0x3764f9)||_0x41b0f4[_0x59ac8b(0x5cf)](_0x4a4157[_0x59ac8b(0x4f6)+'h'],-0x5a0+0x2461+-0x1e81))return;_0x4a4157['push'](_0x3764f9);}}function _0x2fcfa7(_0x593ff7,_0x1ecf2f,_0x3b70cc,_0x2c2d92){var _0x52bc40=_0x1081a6;if(_0x52bc40(0x66d)!==_0x52bc40(0x66d))_0x2d96e5['appen'+_0x52bc40(0x756)+'d'](_0xe35d40);else{var _0x53655e=0x7*0x13d+-0x1055+0x7aa;try{_0x53655e=_0x1ecf2f&&_0x1ecf2f[_0x52bc40(0x741)]?_0x1ecf2f[_0x52bc40(0x741)]():0x250f+-0x1*0x19b7+-0xb58;}catch(_0x2369f9){}if(!_0x53655e)return;_0x41b0f4[_0x52bc40(0x431)](_0x2a8555,_0x593ff7,_0x53655e),_0x3b70cc[_0x2c2d92]=_0x593ff7['lengt'+'h'];if(_0x2c2d92==='movem'+'ents'&&_0x593ff7[_0x52bc40(0x4f6)+'h']){var _0x11689c=_0x23a20c['capMo'+'ve'];if(_0x11689c){if('ZMyDR'!==_0x52bc40(0x493))try{_0x11689c['enabl'+'ed']=![];}catch(_0x7e8862){}else{var _0x1ee34a=_0x41b0f4[_0x52bc40(0x265)][_0x52bc40(0x64e)]('|'),_0x4a181a=-0xee1+-0x1*-0xc28+0x2b9;while(!![]){switch(_0x1ee34a[_0x4a181a++]){case'0':_0x1b5f30[_0x52bc40(0x2a2)+'re']();continue;case'1':_0x4a8102&&(_0x234539['shado'+_0x52bc40(0x478)+'r']=_0x17955c,_0x27f88b[_0x52bc40(0x4c4)+_0x52bc40(0x3dc)]=-0x22f+-0x214f+0x238c,_0x31f54a['fill'](),_0x9811e0[_0x52bc40(0x4c4)+'wBlur']=-0xca*-0x29+-0x1eb5+-0x1a5);continue;case'2':_0x19b3d9[_0x52bc40(0x571)]=_0x41b0f4['JXFoO']('700\x20',_0x4a1fc6['round']((-0x140*-0x3+-0xe2c+0xa78)*_0x10f4c9))+_0x41b0f4['RkQNP'];continue;case'3':_0x291d51['save']();continue;case'4':_0x215082['strok'+_0x52bc40(0x24d)+'e']=_0x4a8102?_0x4cfd6d:'rgba('+_0x52bc40(0x652)+_0x52bc40(0x4ff)+'7,0.3'+'5)';continue;case'5':_0x24b853[_0x52bc40(0x544)+'ext'](_0x224998,_0x5c404c+_0x137e5d/(-0x209b*0x1+0x1*0x1fdf+0xbe),_0x2de909+_0x41b0f4['XhSTT'](_0x1161a7,-0xd23+0x1ee4+-0x11bf)-(_0x5a7437?(-0x2*-0x425+0x732+-0xf77)*_0x3c6408:0x1690+-0x2a5+-0x13eb));continue;case'6':_0x28392d['begin'+_0x52bc40(0x385)]();continue;case'7':_0x456bb9[_0x52bc40(0x5fa)+_0x52bc40(0x2b7)]='cente'+'r';continue;case'8':_0x4490a5&&(_0xfb249f[_0x52bc40(0x571)]=_0x41b0f4[_0x52bc40(0x6c9)](_0x52bc40(0x58d)+_0x3fec2a[_0x52bc40(0x24f)]((-0x1249+-0xc*0x2a9+0x323e)*_0x526bc8),'px\x20ui'+'-sans'+_0x52bc40(0x649)+_0x52bc40(0x1f0)+'tem-u'+_0x52bc40(0x1c9)+_0x52bc40(0x486)+'if'),_0x4a022b[_0x52bc40(0x2b6)+_0x52bc40(0x5a2)]=_0x4a8102?'#fff':_0x52bc40(0x1e6)+_0x52bc40(0x301)+'35,24'+_0x52bc40(0x454)+'5)',_0x4db944['fillT'+_0x52bc40(0x602)](_0xd5442c,_0x41b0f4['JXFoO'](_0xb51b6a,_0x2d6dd5/(0x4d6*0x4+-0x1d*0xdd+0x1*0x5b3)),_0x2c1098+_0x1b5aeb/(0x7ba*0x1+0x22bb+-0x2a73)+_0x41b0f4['nrxqy'](0x1929+0x9c5*-0x3+0x42e,_0x1fed8b)));continue;case'9':_0x11c206[_0x52bc40(0x2b6)+'tyle']=_0x4a8102?'rgba('+_0x52bc40(0x652)+'07,15'+_0x52bc40(0x424)+'5)':_0x52bc40(0x1e6)+_0x52bc40(0x3e0)+'16,0.'+'7)';continue;case'10':_0x3b7949[_0x52bc40(0x429)+'aseli'+'ne']='middl'+'e';continue;case'11':if(_0x390cb8['round'+_0x52bc40(0x202)])_0x12238e['round'+_0x52bc40(0x202)](_0x50271d,_0x1f1166,_0x2fae5c,_0x251ce9,_0x41b0f4[_0x52bc40(0x546)](-0x1eb*0x4+0x13*0x1f4+-0x1*0x1d69,_0x263248));else _0x25726e[_0x52bc40(0x6e8)](_0x1f65b8,_0x2e6db8,_0x3cda39,_0x2cd5e5);continue;case'12':_0x3b9e2e[_0x52bc40(0x2b6)+'tyle']=_0x4a8102?_0x41b0f4[_0x52bc40(0x2e4)]:_0x52bc40(0x1e6)+'255,2'+'35,24'+_0x52bc40(0x484)+')';continue;case'13':_0x5b9bc8['fill']();continue;case'14':_0x263fd2['strok'+'e']();continue;case'15':_0x3cee06[_0x52bc40(0x2d5)+'idth']=-0xe59*-0x2+-0x1*-0x14cf+-0x3180;continue;case'16':var _0x4a8102=_0x56fb39[_0x52bc40(0x460)](_0xa13518);continue;}break;}}}}}}function _0x12329e(_0x3e8c3c,_0x204cb7,_0x1834f1){var _0x27f3f8=_0x1081a6,_0x451a8b={'MnTdd':function(_0x539d0a){var _0x152247=_0x51c4;return _0x41b0f4[_0x152247(0x5f1)](_0x539d0a);},'oLabg':_0x27f3f8(0x1ea)+_0x27f3f8(0x388)+'3','yxqSJ':_0x27f3f8(0x3f1),'bJAcD':function(_0x255210,_0xf945f6,_0x270139,_0x458a0c,_0x4ace8b){var _0x3a3be0=_0x27f3f8;return _0x41b0f4[_0x3a3be0(0x3bb)](_0x255210,_0xf945f6,_0x270139,_0x458a0c,_0x4ace8b);},'YYLAq':function(_0x4aa2a9,_0x20eb75,_0x5aa7d1,_0xfabbd5,_0xd41b52){return _0x4aa2a9(_0x20eb75,_0x5aa7d1,_0xfabbd5,_0xd41b52);},'uXJxz':function(_0x4d79a8,_0x808b1d,_0x2d2b00,_0x27bb30,_0x23bb42){return _0x41b0f4['oglKd'](_0x4d79a8,_0x808b1d,_0x2d2b00,_0x27bb30,_0x23bb42);},'OlarL':function(_0x1ce0fd,_0x26cb79,_0x10f080,_0x544989,_0x5b11f6){return _0x41b0f4['VgCkh'](_0x1ce0fd,_0x26cb79,_0x10f080,_0x544989,_0x5b11f6);}};if(_0x27f3f8(0x73e)!=='tkjiD'){var _0x4fdf15=_0x41448e['get'](_0x3e8c3c);!_0x4fdf15&&(_0x4fdf15=new Map(),_0x41448e[_0x27f3f8(0x67e)](_0x3e8c3c,_0x4fdf15));if(!_0x4fdf15[_0x27f3f8(0x460)](_0x204cb7))try{if(_0x27f3f8(0x6d4)===_0x41b0f4[_0x27f3f8(0x50f)]){var _0x24eebf=new _0x3e9b58(_0x3e8c3c)[_0x27f3f8(0x49d)+'ield'](_0x204cb7,_0x1834f1);_0x4fdf15[_0x27f3f8(0x67e)](_0x204cb7,_0x24eebf!==undefined?_0x24eebf[_0x27f3f8(0x741)]():null);}else _0x64d348[_0x27f3f8(0x252)]=_0xb2097f,_0x451a8b['MnTdd'](_0x12d0d1);}catch(_0x145614){_0x4fdf15['set'](_0x204cb7,null);}return _0x4fdf15['get'](_0x204cb7);}else{var _0x394641=_0x451a8b[_0x27f3f8(0x293)][_0x27f3f8(0x64e)]('|'),_0x7be756=-0x24f6+-0xdb*-0x5+0x20af;while(!![]){switch(_0x394641[_0x7be756++]){case'0':_0x2e645d(_0x1c4ae1,0x14*0x62+-0x146*0x1e+0x1ebc,_0x451a8b[_0x27f3f8(0x6dd)],_0x10a7f4);continue;case'1':_0x451a8b[_0x27f3f8(0x223)](_0x414bc5,_0x31049e,0x1*0x505+-0x17+0x37*-0x16,'f32',_0x7d524a);continue;case'2':_0x451a8b[_0x27f3f8(0x29d)](_0x28e6ea,_0x5cc8b9,0x3e9+-0x20*-0x1+0xc9*-0x5,_0x27f3f8(0x3f1),_0xb368f);continue;case'3':_0x451a8b[_0x27f3f8(0x56b)](_0x5c2702,_0x486a95,-0x1007+-0x33+0x7*0x256,_0x451a8b[_0x27f3f8(0x6dd)],_0x43a1f6);continue;case'4':_0x451a8b['YYLAq'](_0x4fdec0,_0x260fad,-0x7*-0x303+-0x1*0x1b47+0x65a,_0x451a8b[_0x27f3f8(0x6dd)],_0x518b4a);continue;case'5':_0x451a8b[_0x27f3f8(0x36f)](_0x1edfb6,_0x2b9a37,0x15a+-0xa3+-0x8b*0x1,_0x27f3f8(0x3f1),_0x4a93e5);continue;}break;}}}function _0x4f5014(_0x5862b0,_0x5163f6,_0x37148a,_0x4ce81c){var _0x5d764d=_0x1081a6,_0x13e972={'FNZeR':function(_0x1dff53,_0x94d042,_0x4425ad,_0x25a2b7,_0x5cc1f4){return _0x41b0f4['VgCkh'](_0x1dff53,_0x94d042,_0x4425ad,_0x25a2b7,_0x5cc1f4);},'VYvuN':'f32'};try{'BIRke'!==_0x5d764d(0x2ae)?new _0x3e9b58(_0x5862b0)[_0x5d764d(0x2d4)+_0x5d764d(0x734)](_0x5163f6,_0x37148a,_0x4ce81c):(_0x13e972['FNZeR'](_0x384e4e,_0x5ee6a7,-0x8*0x7f+0x20f3+-0x4f*0x5d,_0x13e972['VYvuN'],_0x13a6a0),_0x3bd0cb(_0x2cef3c,-0x3b7*0x3+0x5bb+-0x2*-0x2db,'f32',_0x1110e9));}catch(_0x6583a7){}}function _0x1a08e4(_0x5b9714,_0x390050){var _0x437d12=_0x1081a6;if(_0x41b0f4[_0x437d12(0x25e)](_0x41b0f4[_0x437d12(0x261)],_0x437d12(0x70f))){_0x51a644[_0x437d12(0x55b)+'oaded']=!!_0x36a569['unity'+'Insta'+'nce'];try{var _0x462b3f=-0x14bf+-0x1780+0xf1*0x2f;for(var _0x4bfacb in _0x529a3c){if(_0x253dbf[_0x4bfacb]&&_0x291387[_0x4bfacb]['appli'+'ed'])_0x462b3f++;}_0x14e0ac[_0x437d12(0x4eb)+'Ok']=_0x462b3f;}catch(_0x105c71){}}else try{if(_0x437d12(0x6af)===_0x41b0f4[_0x437d12(0x5b6)]){var _0x4a39cc=_0x3be0d8[_0x286807];if(_0x4a39cc)try{_0x4a39cc[_0x437d12(0x1e3)+'ed']=!!_0x547790;}catch(_0x251dcd){}}else{var _0x169833=new _0x3e9b58(_0x5b9714)['readF'+'ield'](_0x390050,'u32');return _0x169833?_0x169833[_0x437d12(0x741)]():0x67*-0x2f+0x165+0x1184;}}catch(_0x5b0a7f){return-0x20*0x44+-0x1a6d+0x22ed;}}function _0x5468ff(_0xc3bbfa,_0x2b20d6,_0x361a01,_0xda807b){var _0x134079=_0x1081a6;if('SZONE'===_0x134079(0x2a7)){_0x41b0f4[_0x134079(0x29e)](_0x5e443c,_0x3f4984),_0x2234d4++;var _0x46c58b=_0x1867f2[_0x134079(0x33b)]();_0x41b0f4['kgHQv'](_0x46c58b,_0x198f19)>=0x2*-0xfbb+-0x169f+-0x1*-0x3809&&(_0x5c6c76=_0x1da239[_0x134079(0x24f)](_0x41b0f4['XhSTT'](_0x5a1984*(0x26d3+0x1*-0x1867+-0xa84),_0x41b0f4[_0x134079(0x5a6)](_0x46c58b,_0x38d44f))),_0xe9c75c=0x4*-0x404+0x1bd+0x1*0xe53,_0x4779a7=_0x46c58b);_0x5d1dce(),_0x43192f(),_0x538872[_0x134079(0x699)+_0x134079(0x202)](-0x205e+-0xc51+0x1*0x2caf,0x2b9*0x9+-0x109d+-0x1f9*0x4,_0x2b402d['w'],_0x3c44fa['h']);var _0x39b76a={'left':0x0,'top':0x0,'right':_0x2f4a33['w'],'bottom':_0x50cc81['h'],'width':_0x1b3a74['w'],'height':_0x11af76['h']};if(_0x5a062e['cross'+'hair'])_0x12a3e5(_0x39b76a);if(_0x44cdd4[_0x134079(0x264)+'rokes'])_0x45dbf5(_0x39b76a);_0x5f3b3a(_0x39b76a);}else{var _0x2417e4=_0x12329e(_0xc3bbfa,_0x2b20d6,_0x361a01);if(_0x2417e4!=null)_0x4f5014(_0xc3bbfa,_0x2b20d6,_0x361a01,_0x2417e4*_0xda807b);}}function _0x323018(_0x1d3506,_0x58e57,_0x2fe419,_0x51911e,_0x452f26,_0x4ed1af,_0x41de21){var _0x4a2d2b=_0x1081a6;try{var _0x1ed3d4=_0x146182[_0x4a2d2b(0x1ba)+_0x4a2d2b(0x3e5)]({'typeName':_0x58e57,'methodName':_0x2fe419,'params':_0x51911e,'returnType':_0x452f26},_0x4ed1af);return _0x1ed3d4['enabl'+'ed']=_0x41de21!==![],_0x23a20c[_0x1d3506]=_0x1ed3d4,_0xded397['hooks'+_0x4a2d2b(0x554)]++,_0x1ed3d4;}catch(_0x40e9bc){if(_0x41b0f4[_0x4a2d2b(0x23c)]!==_0x4a2d2b(0x282))_0x41b0f4[_0x4a2d2b(0x308)](_0x4b92c9,_0xfb6c73,0x59*0x46+0x106a+-0x1*0x2874,_0x41b0f4['XgJjY'],_0x5f510b),_0x41b0f4['kHdJN'](_0x406053,_0x17f9f9,-0x23f9*0x1+-0x1678+0x3ac5,_0x41b0f4[_0x4a2d2b(0x582)],_0x34df18);else return console['warn'](_0x4a2d2b(0x2d2)+_0x4a2d2b(0x4dc)+_0x4a2d2b(0x1f8)+_0x4a2d2b(0x497)+_0x4a2d2b(0x524)+_0x4a2d2b(0x22c),_0x1d3506,_0x40e9bc&&_0x40e9bc['messa'+'ge']),null;}}function _0x2f2a39(_0xc46186,_0x3a6df8,_0x50bdfd,_0x2ab124,_0x59f0a9,_0x23e02f,_0x8cafda){var _0xc42e77=_0x1081a6,_0xd0b028={'pIlTC':_0xc42e77(0x5d0)+_0xc42e77(0x3ee),'fHEdb':_0xc42e77(0x501),'QmkTW':function(_0x1ba54d,_0x4e0d86){return _0x41b0f4['RnqJo'](_0x1ba54d,_0x4e0d86);},'mRvqF':function(_0x23a9d1,_0x15e496){var _0x3d0f9a=_0xc42e77;return _0x41b0f4[_0x3d0f9a(0x62e)](_0x23a9d1,_0x15e496);},'CvLwR':_0x41b0f4[_0xc42e77(0x5bf)],'UqGcG':_0xc42e77(0x1b4)+'ng','XlYKP':_0x41b0f4[_0xc42e77(0x351)],'wmoRt':_0xc42e77(0x5ba)+_0xc42e77(0x2b5)+'t\x20','SJTLz':'held','TgeIX':_0x41b0f4[_0xc42e77(0x46d)],'gRWfo':function(_0x7aafc,_0x5c85c7){return _0x41b0f4['ZcNLj'](_0x7aafc,_0x5c85c7);},'dofjI':_0x41b0f4[_0xc42e77(0x3a5)],'VAVrk':_0xc42e77(0x66f)+_0xc42e77(0x303)+'NG\x20-\x20'+_0xc42e77(0x2d1)+'ay\x20on'+_0xc42e77(0x322)+_0xc42e77(0x447)+'all\x20t'+'he\x20us'+_0xc42e77(0x720)+_0xc42e77(0x289)};if(_0x41b0f4[_0xc42e77(0x5d4)](_0xc42e77(0x5ce),_0x41b0f4['UShlF'])){if(!_0x1fe503)return;var _0x2f29b7=_0x1a7767[_0xc42e77(0x30e)+_0xc42e77(0x752)];for(var _0x179073=-0x1a5+-0xd82+0x50d*0x3;_0x179073<_0x2f29b7['lengt'+'h'];_0x179073++){var _0x5bdee7=_0x2f29b7[_0x179073][_0xc42e77(0x230)+_0xc42e77(0x69e)+'tor'](_0xd0b028['pIlTC']);_0x5bdee7&&(_0x5bdee7[_0xc42e77(0x356)+'onten'+'t']['index'+'Of']('UWMK')===0x592*0x6+0x11a8+-0x3314||_0x5bdee7[_0xc42e77(0x356)+'onten'+'t']['index'+'Of'](_0xd0b028['fHEdb'])===0x1495+-0x3*-0xa11+-0x32c8)&&(_0x5bdee7[_0xc42e77(0x356)+'onten'+'t']=_0x2925d1[_0xc42e77(0x357)+_0xc42e77(0x4ac)]?_0xc42e77(0x518)+_0xc42e77(0x372)+_0xc42e77(0x31d)+_0xc42e77(0x280)+'only,'+'\x20no\x20h'+_0xc42e77(0x2de)+_0xc42e77(0x5ca)+_0xc42e77(0x57e)+'\x20exit'+')':_0x3c61f7['uwmk']?_0xd0b028[_0xc42e77(0x4f0)](_0xd0b028['mRvqF'](_0xd0b028['mRvqF'](_0xc42e77(0x66f)+_0xc42e77(0x659)+'\x20'+_0x5b588a[_0xc42e77(0x4eb)+'Ok'],'/')+_0x3b14e4['hooks'+_0xc42e77(0x554)]+_0xd0b028['CvLwR']+(_0xc42e77(0x287)+'me\x20'),_0x42f957[_0xc42e77(0x55b)+'oaded']?_0xc42e77(0x62b)+'d':_0xd0b028[_0xc42e77(0x3e4)])+_0xd0b028[_0xc42e77(0x608)],_0x401721['shoot'+_0xc42e77(0x310)]?'held':'none')+_0xd0b028[_0xc42e77(0x5fe)]+(_0x2ea39f['movem'+_0xc42e77(0x210)]?_0xd0b028['SJTLz']:_0xd0b028['TgeIX'])+(_0x219701[_0xc42e77(0x23a)+'rror']?_0xd0b028[_0xc42e77(0x3e6)](_0xd0b028['dofjI'],_0x1afe69[_0xc42e77(0x23a)+'rror']):''):_0xd0b028[_0xc42e77(0x522)]);}}else try{var _0x932566=_0x146182['hookP'+_0xc42e77(0x6ac)+'x']({'typeName':_0x3a6df8,'methodName':_0x50bdfd,'params':_0x2ab124,'returnType':_0x59f0a9},_0x23e02f);return _0x932566[_0xc42e77(0x1e3)+'ed']=_0x41b0f4[_0xc42e77(0x411)](_0x8cafda,![]),_0x23a20c[_0xc46186]=_0x932566,_0xded397['hooks'+_0xc42e77(0x554)]++,_0x932566;}catch(_0x5af68b){return console['warn']('[saku'+_0xc42e77(0x4dc)+_0xc42e77(0x1f8)+_0xc42e77(0x497)+_0xc42e77(0x524)+_0xc42e77(0x22c),_0xc46186,_0x5af68b&&_0x5af68b[_0xc42e77(0x387)+'ge']),null;}}var _0x2c7f7a=()=>![];try{window['Unity'+'WebMo'+_0x1081a6(0x590)]&&!_0x4c3470[_0x1081a6(0x357)+_0x1081a6(0x4ac)]&&(_0x3e9b58=window['Unity'+_0x1081a6(0x38c)+'dkit']['Value'+'Wrapp'+'er'],_0x146182=window['Unity'+_0x1081a6(0x38c)+'dkit']['Runti'+'me'][_0x1081a6(0x3c9)+_0x1081a6(0x52f)+'in']({'name':_0x41b0f4['wDNcS'],'version':'1.1.0','referencedAssemblies':['Assem'+_0x1081a6(0x527)+'Sharp'+'.dll']}),_0x323018('god','OHeal'+'th',_0x41b0f4['eMtmx'],[_0x41b0f4[_0x1081a6(0x582)],_0x1081a6(0x57b)],undefined,_0x2c7f7a,!!_0x4c3470['god']),_0x323018(_0x41b0f4['ZIDaN'],_0x41b0f4[_0x1081a6(0x5bb)],_0x41b0f4['rRLrN'],[_0x1081a6(0x57b),'i32',_0x1081a6(0x57b),_0x41b0f4[_0x1081a6(0x582)],_0x41b0f4['XgJjY']],undefined,_0x2c7f7a,!!_0x4c3470['god']),_0x41b0f4[_0x1081a6(0x1eb)](_0x323018,_0x41b0f4[_0x1081a6(0x46f)],_0x1081a6(0x453)+_0x1081a6(0x2fa)+_0x1081a6(0x1c1)+'.Over'+'tide.'+_0x1081a6(0x695)+'lMoti'+'on','Tick',[_0x41b0f4['XgJjY']],undefined,_0x2c7f7a,!!_0x4c3470['noRec'+'oil']),_0x2f2a39(_0x1081a6(0x2df)+'ooter',_0x1081a6(0x39a)+_0x1081a6(0x472),_0x41b0f4['DLTPX'],['i32','i32'],undefined,(_0x295760,_0x791d5d)=>{var _0x550968=_0x1081a6;_0x2fcfa7(_0x4a8cdc,_0x791d5d,_0xded397,_0x41b0f4[_0x550968(0x1dd)]);},!![]),_0x41b0f4['jGzIG'](_0x2f2a39,_0x1081a6(0x4f2)+'ve',_0x41b0f4['SGZth'],_0x41b0f4[_0x1081a6(0x296)],[_0x41b0f4[_0x1081a6(0x582)]],'i32',(_0x3f4d40,_0x47a260)=>{var _0x4ae3c1=_0x1081a6;_0x41b0f4['kHdJN'](_0x2fcfa7,_0x3c911e,_0x47a260,_0xded397,'movem'+_0x4ae3c1(0x210));},!![]));}catch(_0x2e0332){console[_0x1081a6(0x285)]('[saku'+_0x1081a6(0x4dc)+_0x1081a6(0x676)+'WMK\x20i'+'nit\x20f'+_0x1081a6(0x3ba)+':',_0x2e0332&&_0x2e0332[_0x1081a6(0x387)+'ge']);}function _0x32b2fb(_0x4089af,_0x4e759b){var _0x1235a0=_0x1081a6;if(_0x41b0f4[_0x1235a0(0x3c6)]!==_0x41b0f4[_0x1235a0(0x40c)]){var _0xb55d9=_0x23a20c[_0x4089af];if(_0xb55d9){if(_0x41b0f4[_0x1235a0(0x5c1)](_0x41b0f4[_0x1235a0(0x1fa)],'mLfFT'))try{_0x596d30[_0x1235a0(0x494)]['appen'+_0x1235a0(0x756)+'d'](_0x53d417);}catch(_0x41cc2c){}else try{_0x41b0f4['KvQUA']==='tMwkE'?_0xb55d9['enabl'+'ed']=!!_0x4e759b:(_0x5b970f(_0x563c86,-0xf89+0x1*0x20e6+-0x10d5,'f32',0x266e+-0x1*0x4e1+-0x218d),_0x2a784f(_0x422ad0,-0x4*0x34a+-0x20a5+0x2e35,_0x1235a0(0x3f1),-0xbba+-0x728+0x12e3));}catch(_0x522058){}}}else _0x8784b5[_0x1235a0(0x494)][_0x1235a0(0x719)+_0x1235a0(0x756)+'d'](_0x1885b5);}setInterval(()=>{var _0x5000ad=_0x1081a6;if('xiWNy'!==_0x41b0f4[_0x5000ad(0x267)]){if(!_0x3e9b58||!window[_0x5000ad(0x295)+_0x5000ad(0x5f3)+_0x5000ad(0x205)])return;var _0x2a9548=(Number(_0x4c3470[_0x5000ad(0x40f)+'Pct'])||0x1d31+-0xa*-0x17+-0x1db3)/(-0x1827+0x261+0x162a),_0x5915c8=_0x41b0f4[_0x5000ad(0x34b)](Number(_0x4c3470[_0x5000ad(0x1d8)+'ct'])||0x1c0c+-0xf9b+-0x269*0x5,0x20bf+-0x3*-0x24e+-0x2745),_0x4bb452=(Number(_0x4c3470[_0x5000ad(0x72f)+'tyPct'])||0x124b+0x1*0x1eca+0x2d*-0x115)/(0x1f*0x25+-0x1bb5+0x179e),_0x3e817f=Math[_0x5000ad(0x5c4)](-0x193b*0x1+0x16b5*0x1+-0x287*-0x1,Number(_0x4c3470['damag'+'eValu'+'e'])||-0x13cb*0x1+0x18fd*-0x1+-0x2d5e*-0x1),_0x5ecfb5=_0x2a9548!==-0xd8d*-0x1+0x16*-0x5c+0x5a4*-0x1||_0x41b0f4['gJcjd'](_0x5915c8,-0x54*0x41+0x1*0x181d+-0x2c8)||_0x4bb452!==-0x852+-0x2f2*-0x8+-0xf3d||_0x4c3470[_0x5000ad(0x2d7)],_0x3c446b=_0x4c3470['noSpr'+'ead']||_0x4c3470[_0x5000ad(0x6ff)+_0x5000ad(0x2c9)]||_0x4c3470[_0x5000ad(0x27f)+_0x5000ad(0x1ab)]||_0x4c3470[_0x5000ad(0x279)+_0x5000ad(0x3b4)];if(!_0x5ecfb5&&!_0x3c446b)return;try{for(var _0x3373d1=0x1*-0x2444+0xf89*-0x1+0x33cd;_0x41b0f4['UQsAG'](_0x3373d1,_0x3c911e['lengt'+'h']);_0x3373d1++){var _0x594f5c=_0x3c911e[_0x3373d1];if(!_0x594f5c)continue;_0x2a9548!==-0x54+-0x26d1+0x1393*0x2&&(_0x41b0f4['nJhkZ'](_0x5000ad(0x341),_0x5000ad(0x5a0))?(_0x5468ff(_0x594f5c,-0x177a+0xc65*-0x3+0x3cd1,_0x41b0f4[_0x5000ad(0x311)],_0x2a9548),_0x5468ff(_0x594f5c,-0x14cc+-0x22ce+0x3b*0xf2,_0x5000ad(0x3f1),_0x2a9548),_0x5468ff(_0x594f5c,-0x3*-0x112+-0x1fe4+-0x2e3*-0xa,_0x41b0f4['Ykraq'],_0x2a9548),_0x5468ff(_0x594f5c,0x10a*0x1a+-0x13cb+-0x705*0x1,_0x41b0f4['Ykraq'],_0x2a9548),_0x5468ff(_0x594f5c,-0x1af7+-0xe11*0x1+0x2924,'f32',_0x2a9548),_0x41b0f4[_0x5000ad(0x638)](_0x5468ff,_0x594f5c,-0x100c+-0x14*0x149+0x29e0,'f32',_0x2a9548)):(_0x5bb7fe['keyst'+'rokes']=_0x1f1f02,_0x41b0f4['DcGOF'](_0x16b095)));if(_0x41b0f4['kVtto'](_0x5915c8,0x1cd8+0x1449+-0x10*0x312))_0x5468ff(_0x594f5c,0x29*0xb0+-0xd3*-0x2+0x2*-0xec3,_0x41b0f4[_0x5000ad(0x311)],_0x5915c8);_0x4bb452!==-0x7*0x142+-0x32*0xb4+0x2bf7&&(_0x41b0f4[_0x5000ad(0x53e)](_0x5468ff,_0x594f5c,-0x1dbb+-0x1472+-0x1*-0x3275,_0x5000ad(0x3f1),_0x4bb452),_0x5468ff(_0x594f5c,-0x584+0x79c+-0x5c*0x5,_0x41b0f4[_0x5000ad(0x311)],_0x4bb452));if(_0x4c3470['bhop'])_0x4f5014(_0x594f5c,0x1507+0x1*-0x1f5a+0xaef,_0x41b0f4[_0x5000ad(0x311)],-(-0xc87*-0x2+0x1*0x172c+-0x655*0x7));}}catch(_0x253dab){}try{for(var _0x4b93e7=-0x5dd*0x1+0x1e23+-0x1846;_0x4b93e7<_0x4a8cdc[_0x5000ad(0x4f6)+'h'];_0x4b93e7++){if('RRWIO'!=='IOkHz'){var _0x38f028=_0x1a08e4(_0x4a8cdc[_0x4b93e7],0x5*-0x36+0xf3*0x20+-0x1d1a);if(!_0x38f028)continue;_0x4c3470[_0x5000ad(0x6ff)+_0x5000ad(0x2c9)]&&(_0x41b0f4[_0x5000ad(0x638)](_0x4f5014,_0x38f028,-0x1a4c+0x2193+-0x1*0x6fb,_0x41b0f4[_0x5000ad(0x582)],_0x3e817f),_0x4f5014(_0x38f028,0xc5*0x2c+-0x1203+-0x89*0x1d,_0x5000ad(0x57b),_0x3e817f));_0x4c3470['noSpr'+'ead']&&(_0x4f5014(_0x38f028,0x6f1*-0x1+0x8f3+-0x9*0x2a,'f32',-0x271+-0x1*0xe25+0x1096),_0x41b0f4[_0x5000ad(0x308)](_0x4f5014,_0x38f028,-0xef1+0x993+0x5c6,_0x5000ad(0x3f1),0x17+0x1c0f+-0x1c25));if(_0x4c3470['infAm'+_0x5000ad(0x1ab)])_0x4f5014(_0x38f028,-0x620+-0x4*-0x875+0x7*-0x3e8,_0x5000ad(0x57b),-0x1b5+-0x1809+-0x1*-0x1da5);if(_0x4c3470['rapid'+'Exp']){if(_0x41b0f4[_0x5000ad(0x25e)](_0x5000ad(0x449),_0x5000ad(0x30a)))_0x5468ff(_0x38f028,0x4*-0x752+-0x7ca+0x217*0x12,_0x5000ad(0x3f1),-0xef+-0x1c98+0x1d87+0.1),_0x41b0f4[_0x5000ad(0x1c0)](_0x4f5014,_0x38f028,0x33*-0x3e+-0xd5*0x2e+0x3300,_0x5000ad(0x3f1),0x655*-0x2+-0x1879+0x1*0x2523+0.1);else{var _0x5667ce=_0x1539f2[_0x5000ad(0x1ba)+_0x5000ad(0x6ac)+'x']({'typeName':_0x190136,'methodName':_0x466df7,'params':_0x1278cf,'returnType':_0x43d22e},_0x2a50a6);return _0x5667ce[_0x5000ad(0x1e3)+'ed']=_0x41b0f4['ErnRG'](_0x4cc226,![]),_0x28687c[_0x437b92]=_0x5667ce,_0x5b955d['hooks'+_0x5000ad(0x554)]++,_0x5667ce;}}}else _0x481a33[_0x5000ad(0x6ff)+_0x5000ad(0x2c9)]=_0x321602,_0x41b0f4['dQlno'](_0x3fb6e0);}}catch(_0x40cf02){}}else{var _0x5155bf=_0x5d54d4[_0x5000ad(0x1ba)+'refix']({'typeName':_0x33f9c7,'methodName':_0x56343b,'params':_0x4897a8,'returnType':_0x5ad7b7},_0x22d794);return _0x5155bf['enabl'+'ed']=_0x41b0f4[_0x5000ad(0x627)](_0x5974c7,![]),_0x44cc9d[_0x544a52]=_0x5155bf,_0x42492f[_0x5000ad(0x4eb)+_0x5000ad(0x554)]++,_0x5155bf;}},-0x113*0x17+0x24ba+-0x19b*0x7),setInterval(()=>{var _0x5354c8=_0x1081a6;_0xded397['gameL'+_0x5354c8(0x249)]=!!window[_0x5354c8(0x295)+_0x5354c8(0x5f3)+_0x5354c8(0x205)];try{var _0x242c53=-0x319+0x17*0x49+-0x376;for(var _0x4dc70a in _0x23a20c){if(_0x23a20c[_0x4dc70a]&&_0x23a20c[_0x4dc70a][_0x5354c8(0x417)+'ed'])_0x242c53++;}_0xded397[_0x5354c8(0x4eb)+'Ok']=_0x242c53;}catch(_0x51107b){}},0x1d2*0xa+-0x7ab*-0x2+-0x1da2);var _0x17a51c=new Set(),_0x3bacfa={0x1:[],0x3:[]},_0x959135=![];function _0x4978d0(_0x3a3901){_0x17a51c['add'](_0x3a3901['code']);}function _0x3f4790(_0x177211){_0x17a51c['delet'+'e'](_0x177211['code']);}function _0x3bc0c9(_0x5071f7){var _0x48ca6f=_0x1081a6,_0x16e627={'dcEXF':function(_0x4e2bfa,_0xc60d51){return _0x4e2bfa+_0xc60d51;},'RVbEr':function(_0x45bdd9,_0x211862){var _0x5ed439=_0x51c4;return _0x41b0f4[_0x5ed439(0x748)](_0x45bdd9,_0x211862);}};if(_0x41b0f4[_0x48ca6f(0x3ec)](_0x41b0f4['RVlcR'],'KMrmH')){if(_0x5071f7['__sak'+_0x48ca6f(0x23f)])return;_0x17a51c['add'](_0x41b0f4[_0x48ca6f(0x3d3)]+_0x41b0f4['RnqJo'](_0x5071f7['butto'+'n'],0x1637*0x1+-0x442*0x1+-0x11f4));var _0x30216d=_0x3bacfa[_0x41b0f4[_0x48ca6f(0x212)](_0x5071f7[_0x48ca6f(0x617)+'n'],-0x3*0x63+0x2227+-0x20fd)];if(_0x30216d){_0x30216d[_0x48ca6f(0x329)](performance['now']());if(_0x30216d['lengt'+'h']>-0xa59*-0x3+-0x8a9+-0x472*0x5)_0x30216d[_0x48ca6f(0x28b)]();}}else{var _0x436261=_0xc29a4c&&(_0x497298[_0x48ca6f(0x387)+'ge']||_0x59bdca['error']&&_0x3f8b15[_0x48ca6f(0x49f)][_0x48ca6f(0x387)+'ge'])||'unkno'+'wn';if(_0x5cca0e&&_0x454fdf['filen'+'ame'])_0x436261+=_0x16e627['dcEXF'](_0x48ca6f(0x3ab)+_0x579e30(_0xe836aa[_0x48ca6f(0x3fd)+'ame'])[_0x48ca6f(0x64e)]('/')[_0x48ca6f(0x704)](),':')+(_0x24907a['linen'+'o']||'?');_0x2bd438['lastE'+'rror']=_0x16e627['RVbEr'](_0x382617,_0x436261)[_0x48ca6f(0x506)](-0x2*0x13+0x1233+0x120d*-0x1,0x420+0x96a+0x26*-0x57);}}function _0x2ef86a(_0x57cfc3){var _0x573280=_0x1081a6;if(!_0x57cfc3[_0x573280(0x319)+_0x573280(0x23f)])_0x17a51c[_0x573280(0x368)+'e'](_0x573280(0x5a5)+(_0x57cfc3[_0x573280(0x617)+'n']+(-0x4b8*0x2+0x4f5+0x47c)));}function _0x2a2c98(){_0x17a51c['clear']();}function _0x484468(){var _0x69c218=_0x1081a6;if(_0x959135)return;_0x959135=!![],window[_0x69c218(0x6d2)+'entLi'+_0x69c218(0x747)+'r'](_0x69c218(0x63d)+'wn',_0x4978d0,!![]),window['addEv'+'entLi'+_0x69c218(0x747)+'r']('keyup',_0x3f4790,!![]),window['addEv'+_0x69c218(0x593)+_0x69c218(0x747)+'r']('mouse'+'down',_0x3bc0c9,!![]),window['addEv'+_0x69c218(0x593)+_0x69c218(0x747)+'r'](_0x69c218(0x5a5)+'up',_0x2ef86a,!![]),window['addEv'+_0x69c218(0x593)+_0x69c218(0x747)+'r']('blur',_0x2a2c98);}function _0x2ca8e3(_0x27ff36){var _0x474861=_0x1081a6,_0x1bba5b={'ngPap':_0x474861(0x5b3)+'wn','zVeTz':function(_0x18c522,_0xbfc46b){return _0x41b0f4['DaUrs'](_0x18c522,_0xbfc46b);}};if(_0x474861(0x338)!==_0x41b0f4[_0x474861(0x2be)]){var _0x31abbe=_0x3bacfa[_0x27ff36]||[],_0xd14027=performance['now']();while(_0x31abbe[_0x474861(0x4f6)+'h']&&_0x41b0f4['KbrVB'](_0xd14027-_0x31abbe[-0x46a+-0x1e1c+0x3d6*0x9],0x841*0x2+-0xafe+0x19c*-0x1))_0x31abbe[_0x474861(0x28b)]();return _0x31abbe['lengt'+'h'];}else try{var _0x5ca7ab=_0x71bbce&&(_0x35e684['messa'+'ge']||_0x47ed54[_0x474861(0x49f)]&&_0x2cbcf7[_0x474861(0x49f)]['messa'+'ge'])||_0x1bba5b[_0x474861(0x6dc)];if(_0x161dc9&&_0x1737a3[_0x474861(0x3fd)+_0x474861(0x21a)])_0x5ca7ab+='\x20@\x20'+_0x1bba5b[_0x474861(0x30c)](_0x483aa4,_0x31a2da[_0x474861(0x3fd)+_0x474861(0x21a)])['split']('/')[_0x474861(0x704)]()+':'+(_0x503ae9[_0x474861(0x716)+'o']||'?');_0x1168d1['lastE'+_0x474861(0x6a7)]=_0xa3718b(_0x5ca7ab)['slice'](-0xcba*0x2+0xe20+0xb54,-0x1beb+-0x357+0x1fe2);}catch(_0x1b185c){}}function _0x4aad90(_0x1e0667){var _0x22b19a=_0x1081a6;if(_0x41b0f4[_0x22b19a(0x5c1)]('DZEKo',_0x22b19a(0x6e0))){if(document[_0x22b19a(0x494)]&&(document['ready'+'State']===_0x41b0f4[_0x22b19a(0x5e2)]||_0x41b0f4['wZJwj'](document[_0x22b19a(0x3f6)+_0x22b19a(0x691)],_0x41b0f4[_0x22b19a(0x6d5)])))_0x1e0667();else document['addEv'+_0x22b19a(0x593)+'stene'+'r'](_0x22b19a(0x3d9)+'ntent'+'Loade'+'d',_0x1e0667,{'once':!![]});}else _0x4b7629['enabl'+'ed']=![];}_0x4aad90(()=>{var _0x166263=_0x1081a6,_0xd9ec6c={'RZnIr':function(_0x1a38ae){var _0x17a0c6=_0x51c4;return _0x41b0f4[_0x17a0c6(0x271)](_0x1a38ae);},'vWgLC':_0x166263(0x1e4),'ZoKRy':function(_0x4db055,_0x5a3ea6,_0x2a9ed9){return _0x4db055(_0x5a3ea6,_0x2a9ed9);},'jvRHl':'15|13'+_0x166263(0x65c)+'16|6|'+_0x166263(0x600)+'|14|1'+_0x166263(0x73d)+_0x166263(0x2da)+'2|4|1','ialRa':function(_0x52f065){return _0x41b0f4['dQlno'](_0x52f065);},'zROVo':_0x41b0f4['RqTJN'],'FAjxQ':_0x166263(0x43d)+_0x166263(0x1f3),'xyErv':_0x41b0f4['QyXgM'],'RkpkJ':_0x41b0f4[_0x166263(0x5ed)],'SonIP':function(_0x5913ff,_0xd1492){return _0x5913ff===_0xd1492;},'oShJY':function(_0x34448f,_0x15f033){return _0x34448f===_0x15f033;},'uVPsK':function(_0x5708f5,_0x36e589){return _0x5708f5+_0x36e589;},'oviAf':_0x41b0f4[_0x166263(0x2c6)],'KSFDs':'loadi'+'ng','wyrhk':'\x20|\x20sh'+_0x166263(0x258)+'\x20','gjwNi':_0x166263(0x3a9),'WKwAk':_0x41b0f4[_0x166263(0x3a5)],'pfORG':function(_0x2ac67b,_0x1064ff){return _0x2ac67b*_0x1064ff;},'VJnhz':_0x41b0f4[_0x166263(0x6be)],'znxJu':function(_0x173af0,_0x182ce8){return _0x173af0+_0x182ce8;},'eqgDa':_0x41b0f4[_0x166263(0x317)],'iyfOi':function(_0x3c606d,_0x40bdbc){return _0x3c606d+_0x40bdbc;},'eGAEs':function(_0x4554e1,_0x44c8cd){return _0x4554e1*_0x44c8cd;},'XJdvm':_0x41b0f4['RkQNP'],'DEFCp':function(_0x25011b,_0x1c76a9){return _0x41b0f4['sekHc'](_0x25011b,_0x1c76a9);},'zNjGP':function(_0x530d81,_0x314a8f){return _0x530d81+_0x314a8f;},'zQfDJ':'fulls'+'creen'+'-banr'+'s','GSzXO':function(_0x18dec7,_0x417744){var _0x5890fb=_0x166263;return _0x41b0f4[_0x5890fb(0x3fb)](_0x18dec7,_0x417744);},'vLBIW':_0x166263(0x38a)+_0x166263(0x297),'jrQUT':function(_0x5316b5){var _0x3be615=_0x166263;return _0x41b0f4[_0x3be615(0x4a3)](_0x5316b5);},'ZequX':_0x166263(0x360)+'2px\x20u'+'i-mon'+_0x166263(0x491)+'e,mon'+_0x166263(0x491)+'e','kxluf':function(_0x7d9aa5,_0x45fd27){return _0x7d9aa5+_0x45fd27;},'WEGpD':_0x41b0f4['mpwtn'],'pEEJa':function(_0x71860d,_0x4da00e){return _0x71860d(_0x4da00e);},'CwOFm':function(_0x319d2b,_0x2eede1){return _0x319d2b>=_0x2eede1;},'JgLAD':function(_0x275050,_0x5bece2){return _0x275050/_0x5bece2;},'WFVet':function(_0x469782){return _0x469782();},'etJoJ':_0x166263(0x39f)+'check'+'ed','mMZuE':_0x166263(0x617)+'n','zEGUP':'sk-sw'+'itch','Vsvle':function(_0x779440,_0x3ae94f){return _0x779440*_0x3ae94f;},'nOcle':function(_0x2fd938,_0x395780){var _0x3a3e65=_0x166263;return _0x41b0f4[_0x3a3e65(0x59f)](_0x2fd938,_0x395780);},'AVmLL':function(_0x21937d,_0x5db7c5){return _0x41b0f4['UeESI'](_0x21937d,_0x5db7c5);},'eWiRM':function(_0x32274c,_0x1d46d0){var _0xe72f15=_0x166263;return _0x41b0f4[_0xe72f15(0x59f)](_0x32274c,_0x1d46d0);},'rXEAk':function(_0x4552f3,_0x163223,_0x19dbf9,_0x2daead,_0xfcb5f5,_0x584f5b,_0x61a9c8){return _0x4552f3(_0x163223,_0x19dbf9,_0x2daead,_0xfcb5f5,_0x584f5b,_0x61a9c8);},'CNGZt':function(_0x1b7df3,_0x1f6fbe,_0xc9f56f,_0x5ebf84,_0x725cd1,_0x320521,_0x51f7b0){var _0x21ddc1=_0x166263;return _0x41b0f4[_0x21ddc1(0x229)](_0x1b7df3,_0x1f6fbe,_0xc9f56f,_0x5ebf84,_0x725cd1,_0x320521,_0x51f7b0);},'XvgIL':function(_0x55416f,_0x35dc49){return _0x55416f*_0x35dc49;},'CKyPa':'[saku'+'ra-ko'+_0x166263(0x1f8)+_0x166263(0x497)+_0x166263(0x524)+'iled:','JXERm':_0x166263(0x535)+'n','DZfQd':function(_0x25535c,_0x4ca82e){return _0x25535c!==_0x4ca82e;},'EwwHz':function(_0x20a189,_0x35a225){return _0x20a189(_0x35a225);},'lFzfb':function(_0x62b0c8,_0x37306b,_0x250961){return _0x62b0c8(_0x37306b,_0x250961);},'kVifl':function(_0x1e5de5){return _0x1e5de5();},'npvcs':_0x166263(0x309),'eKjbH':function(_0x4dbead){return _0x4dbead();},'snqrZ':function(_0x5b8679){return _0x5b8679();},'RFRar':function(_0x2220cc,_0x2871b3){return _0x2220cc!==_0x2871b3;},'FHVva':_0x166263(0x4bc),'qJUdE':function(_0x5549a8,_0x4c06f2){return _0x5549a8+_0x4c06f2;},'LwUmN':function(_0x2a4c05){var _0x2421ba=_0x166263;return _0x41b0f4[_0x2421ba(0x42b)](_0x2a4c05);},'XOgHx':'noRec'+'oil','nTEbP':function(_0x417cad){return _0x417cad();},'GHCwz':_0x41b0f4[_0x166263(0x4c1)],'QPewA':function(_0x477205,_0x27e46d){return _0x477205!==_0x27e46d;},'kLXIb':_0x41b0f4[_0x166263(0x214)],'JkTEe':_0x41b0f4['HZEal'],'Qtclo':_0x166263(0x729)+'coil','tykzE':_0x166263(0x41b)+'\x20Reco'+_0x166263(0x560)+'ion.T'+'ick\x20s'+_0x166263(0x51a)+_0x166263(0x6d7)+'il\x20sp'+_0x166263(0x5b0)+_0x166263(0x566)+'r\x20adv'+'ance.','nQVDL':_0x166263(0x2f9)+_0x166263(0x233)+'\x20[EXP'+']','plNYF':function(_0x2c647e,_0x3356f6,_0x1b90cf,_0x4e0608,_0x55dd24,_0x2ed232){return _0x41b0f4['euDTR'](_0x2c647e,_0x3356f6,_0x1b90cf,_0x4e0608,_0x55dd24,_0x2ed232);},'TQLOs':_0x166263(0x402)+_0x166263(0x4ea)+'P]','TOGhb':_0x41b0f4[_0x166263(0x51d)],'Nkttg':'Damag'+_0x166263(0x70c)+'ue','ZFjjP':_0x166263(0x653)+_0x166263(0x712)+_0x166263(0x3a6)+_0x166263(0x34d)+_0x166263(0x404)+_0x166263(0x56c)+_0x166263(0x24e)+'\x20999\x20'+_0x166263(0x6a5)+_0x166263(0x1f2)+'s.','iXLnN':function(_0x11e639,_0x3fe7a2){return _0x11e639(_0x3fe7a2);},'anSfw':_0x41b0f4[_0x166263(0x2ef)],'ioGfx':function(_0x2db2b3,_0x2afee0){var _0x119cfe=_0x166263;return _0x41b0f4[_0x119cfe(0x5d4)](_0x2db2b3,_0x2afee0);},'ChsBC':function(_0x13c270,_0x237a67,_0x5cf14c,_0x4c1a68,_0x4a668d,_0x204100){var _0x4e87d8=_0x166263;return _0x41b0f4[_0x4e87d8(0x1b8)](_0x13c270,_0x237a67,_0x5cf14c,_0x4c1a68,_0x4a668d,_0x204100);},'rslmB':function(_0x156b6c,_0x2f31eb,_0xd2c7b8,_0xb2bc47){var _0x4ba2f7=_0x166263;return _0x41b0f4[_0x4ba2f7(0x43c)](_0x156b6c,_0x2f31eb,_0xd2c7b8,_0xb2bc47);},'bLobS':_0x41b0f4[_0x166263(0x440)],'joqhM':_0x41b0f4[_0x166263(0x382)],'CaEaM':'Jump\x20'+_0x166263(0x37c)+_0x166263(0x27b),'dZCRL':function(_0x378cec,_0x5cc677,_0x5866c1,_0x370163){return _0x41b0f4['mMeiU'](_0x378cec,_0x5cc677,_0x5866c1,_0x370163);},'RQQNV':_0x41b0f4[_0x166263(0x3df)],'QTqda':'WASD\x20'+'+\x20LMB'+_0x166263(0x437)+_0x166263(0x5b7)+_0x166263(0x414)+'erlay'+'.','bUelk':function(_0x345670,_0x127af1,_0x9662f4,_0x28bae6){return _0x345670(_0x127af1,_0x9662f4,_0x28bae6);},'EzlGU':function(_0x4db5e7,_0x22d59f,_0x316622,_0x15a3cb){return _0x4db5e7(_0x22d59f,_0x316622,_0x15a3cb);},'ojqSc':function(_0x35f80f,_0x134ac1,_0xbee1bd,_0x345485){return _0x35f80f(_0x134ac1,_0xbee1bd,_0x345485);},'kkZpB':function(_0x3039ca,_0x14eedc,_0x593fc5,_0x4cd896,_0x371595,_0x78ce2c){var _0x433ece=_0x166263;return _0x41b0f4[_0x433ece(0x5e5)](_0x3039ca,_0x14eedc,_0x593fc5,_0x4cd896,_0x371595,_0x78ce2c);},'fxtGZ':function(_0x4eb68f,_0x17698e,_0x14f02d,_0x2a0f05){return _0x4eb68f(_0x17698e,_0x14f02d,_0x2a0f05);},'TpwKj':function(_0x26f979,_0x570b6b,_0x1c2836){return _0x41b0f4['RETVc'](_0x26f979,_0x570b6b,_0x1c2836);},'tzHca':function(_0x285d49,_0x878be3,_0xacf4c3,_0x23bf19,_0x573e6b,_0x3df5c9){return _0x285d49(_0x878be3,_0xacf4c3,_0x23bf19,_0x573e6b,_0x3df5c9);},'WVUWi':function(_0x58cc20,_0x31da0d,_0x44d061){var _0x15bd68=_0x166263;return _0x41b0f4[_0x15bd68(0x431)](_0x58cc20,_0x31da0d,_0x44d061);},'IxIEU':function(_0x32ebe3,_0x5eef65){return _0x32ebe3===_0x5eef65;},'cMoVG':function(_0xc58998,_0x481ef0){return _0x41b0f4['QTDzU'](_0xc58998,_0x481ef0);},'qodkV':function(_0xa44af1,_0xec0875){return _0x41b0f4['hFJGJ'](_0xa44af1,_0xec0875);},'eyuio':_0x166263(0x41b)+_0x166263(0x369)+'\x20enti'+_0x166263(0x619)+'—\x20no\x20'+'WASM\x20'+_0x166263(0x4eb)+_0x166263(0x4b4)+'\x20this'+_0x166263(0x3c0)+'atche'+_0x166263(0x5e6)+'\x27t\x20st'+_0x166263(0x5ac),'vQrNi':function(_0x35a9ae,_0x313aa0,_0x19d14e,_0x522fe4,_0x404e84,_0x256eb1){var _0x4534d4=_0x166263;return _0x41b0f4[_0x4534d4(0x687)](_0x35a9ae,_0x313aa0,_0x19d14e,_0x522fe4,_0x404e84,_0x256eb1);},'yaEUY':function(_0x420b05,_0x2fdba0,_0x51fe8a){return _0x41b0f4['mQPmM'](_0x420b05,_0x2fdba0,_0x51fe8a);},'iUyRI':_0x166263(0x6c1)+'a.kou'+_0x166263(0x25f),'jDiMr':'JWztz','lzFDz':_0x41b0f4['BAWwZ'],'guyRW':function(_0x235024,_0x857f93){var _0x5b1749=_0x166263;return _0x41b0f4[_0x5b1749(0x4f4)](_0x235024,_0x857f93);},'MvYEV':function(_0x2b961d,_0xcd7a70){return _0x2b961d+_0xcd7a70;},'rjVBF':function(_0x3b37cc,_0x16f2ae){return _0x3b37cc+_0x16f2ae;},'pNCKB':_0x166263(0x66f)+'bound'+'\x20','NtoWa':_0x166263(0x5ba)+'vemen'+'t\x20','KAkRK':function(_0x40e61e,_0x4b1b1e){return _0x40e61e===_0x4b1b1e;},'fEBqU':function(_0x403085){return _0x403085();}};_0x4c3470[_0x166263(0x24a)+'ck']&&setInterval(()=>{var _0x3c1ea1=_0x166263,_0x213b0d={'tDLlE':function(_0x49feae,_0xb4f567){var _0x4f163e=_0x51c4;return _0x41b0f4[_0x4f163e(0x29e)](_0x49feae,_0xb4f567);},'YWUQL':function(_0x4dff49,_0x2b354d){return _0x4dff49*_0x2b354d;},'MHqgJ':function(_0x2f0c1d,_0x4b204e){return _0x2f0c1d/_0x4b204e;},'xJYTq':function(_0x3f70fc,_0x468acb){return _0x3f70fc-_0x468acb;}};try{for(var _0x4f80e6 of[_0x3c1ea1(0x38a)+'io_30'+_0x3c1ea1(0x36c)+_0x3c1ea1(0x725)+'nt',_0x41b0f4['ekFov'],_0x3c1ea1(0x38a)+_0x3c1ea1(0x315)+_0x3c1ea1(0x503)+_0x3c1ea1(0x725)+'nt',_0x41b0f4['naMjk']]){var _0xe41f22=document['getEl'+'ement'+'ById'](_0x4f80e6);if(_0xe41f22&&_0x4f80e6===_0x3c1ea1(0x477)+_0x3c1ea1(0x6fe)+'-banr'+'s'){if(_0x41b0f4[_0x3c1ea1(0x759)]!==_0x41b0f4[_0x3c1ea1(0x759)])_0xeaf754[_0x3c1ea1(0x1e4)]=_0x45cb63,_0xd9ec6c['RZnIr'](_0x2e462e),_0x316e3f(_0xd9ec6c[_0x3c1ea1(0x4bf)],_0x562fa5),_0xd9ec6c[_0x3c1ea1(0x6d3)](_0x1dbc78,_0x3c1ea1(0x6d9)+'e',_0x3bd60d);else{var _0x4203b5=_0xe41f22['child'+'ren'];for(var _0x56df79=0x9cb+0x8f4+-0x12bf;_0x56df79<_0x4203b5['lengt'+'h'];_0x56df79++){if(_0x3c1ea1(0x4b9)!==_0x3c1ea1(0x1b0)){if(_0x4203b5[_0x56df79]['id']&&_0x4203b5[_0x56df79]['id'][_0x3c1ea1(0x3b5)+'Of'](_0x41b0f4[_0x3c1ea1(0x342)])===0x53*-0x4f+0x616+-0x1*-0x1387)_0x4203b5[_0x56df79][_0x3c1ea1(0x26f)][_0x3c1ea1(0x51f)+'ay']=_0x3c1ea1(0x3a9);}else{var _0x5c0bc5=_0xd9ec6c[_0x3c1ea1(0x53c)]['split']('|'),_0x1ddea1=0xcd6+0x14e3*0x1+-0x21b9;while(!![]){switch(_0x5c0bc5[_0x1ddea1++]){case'0':_0x18d9c4[_0x3c1ea1(0x228)+'Name']=_0x3c1ea1(0x3ff)+'l';continue;case'1':return _0xf36fc2;case'2':_0xd9ec6c['ialRa'](_0x1ff97a);continue;case'3':_0x18d9c4[_0x3c1ea1(0x356)+'onten'+'t']=_0x15d74e(_0x2bc189);continue;case'4':_0xf36fc2[_0x3c1ea1(0x719)+'d'](_0x141719,_0x18d9c4);continue;case'5':var _0x141719=_0x50d959[_0x3c1ea1(0x3c9)+'eElem'+'ent'](_0xd9ec6c[_0x3c1ea1(0x54a)]);continue;case'6':_0x141719[_0x3c1ea1(0x200)]=_0x5b7918;continue;case'7':_0x141719[_0x3c1ea1(0x4aa)+'ut']=()=>{_0x1ff97a(),_0x43939d(_0x1640a4(_0x141719['value']));};continue;case'8':var _0x1ff97a=()=>{var _0x55c334=_0x3c1ea1;_0x18d9c4[_0x55c334(0x356)+_0x55c334(0x4cb)+'t']=_0x213b0d[_0x55c334(0x4fd)](_0x7a5d97,_0x141719['value']),_0xf36fc2['style'][_0x55c334(0x36e)+_0x55c334(0x5b8)+'y']('--p',_0x213b0d[_0x55c334(0x523)](_0x213b0d[_0x55c334(0x6d0)](_0x141719[_0x55c334(0x1e7)]-_0x35e15a,_0x213b0d['xJYTq'](_0x1bc86f,_0x12a55b)),-0x1014+-0x36*0x3+0x111a)+'%');};continue;case'9':_0x141719[_0x3c1ea1(0x499)]=_0x3c1ea1(0x269);continue;case'10':_0x141719[_0x3c1ea1(0x5c4)]=_0x3a391e;continue;case'11':var _0x18d9c4=_0xdda51a['creat'+'eElem'+'ent'](_0x3c1ea1(0x335));continue;case'12':_0x141719[_0x3c1ea1(0x364)]=_0x5942ad;continue;case'13':_0xf36fc2['class'+_0x3c1ea1(0x278)]=_0xd9ec6c[_0x3c1ea1(0x1cf)];continue;case'14':_0x141719['value']=_0x3cb19d;continue;case'15':var _0xf36fc2=_0x14953e[_0x3c1ea1(0x3c9)+_0x3c1ea1(0x3f7)+'ent']('div');continue;case'16':_0x141719[_0x3c1ea1(0x228)+_0x3c1ea1(0x278)]=_0xd9ec6c['xyErv'];continue;}break;}}}}}else{if(_0xe41f22)_0xe41f22[_0x3c1ea1(0x26f)][_0x3c1ea1(0x51f)+'ay']=_0x41b0f4[_0x3c1ea1(0x46d)];}}}catch(_0x171bd4){}},-0x385*-0x1+-0x15b3+0x19fe);var _0x2279e5=document['creat'+_0x166263(0x3f7)+_0x166263(0x71e)](_0x41b0f4['KFAsz']);_0x2279e5[_0x166263(0x26f)][_0x166263(0x2e0)+'xt']='posit'+_0x166263(0x47d)+'ixed;'+_0x166263(0x6ea)+_0x166263(0x438)+_0x166263(0x3d8)+_0x166263(0x578)+_0x166263(0x423)+_0x166263(0x33c)+_0x166263(0x3c7)+_0x166263(0x3b5)+_0x166263(0x4f3)+_0x166263(0x596)+_0x166263(0x1e2)+_0x166263(0x1f1)+_0x166263(0x4b2)+_0x166263(0x353)+'e';var _0xf4aa0d=_0x2279e5[_0x166263(0x221)+'ntext']('2d');function _0x56c531(){var _0x363d88=_0x166263,_0x37e73e={'PVvoE':_0xd9ec6c[_0x363d88(0x54a)],'suEtt':'#ff6b'+'9d'};try{if(_0xd9ec6c['RkpkJ']!==_0x363d88(0x3cc)){var _0x3de35d=document[_0x363d88(0x477)+_0x363d88(0x6fe)+'Eleme'+'nt'],_0x56c085=_0x3de35d&&_0x3de35d[_0x363d88(0x644)+'me']!==_0x363d88(0x20f)+'S'?_0x3de35d:document[_0x363d88(0x494)]||document[_0x363d88(0x44b)+'entEl'+_0x363d88(0x4a4)];if(_0x2279e5['paren'+'tNode']!==_0x56c085)_0x56c085['appen'+_0x363d88(0x756)+'d'](_0x2279e5);}else{var _0x59ca0c=_0x30920a['creat'+_0x363d88(0x3f7)+'ent'](_0x37e73e[_0x363d88(0x69b)]);return _0x59ca0c[_0x363d88(0x499)]='color',_0x59ca0c[_0x363d88(0x228)+'Name']=_0x363d88(0x2e5)+'lor',_0x59ca0c['value']=/^#[0-9a-f]{6}$/i['test'](_0xe03d57)?_0x28fe0b:_0x37e73e[_0x363d88(0x4d5)],_0x59ca0c[_0x363d88(0x4aa)+'ut']=()=>_0x2253a4(_0x59ca0c[_0x363d88(0x1e7)]),_0x59ca0c;}}catch(_0x4b426f){try{document[_0x363d88(0x494)][_0x363d88(0x719)+_0x363d88(0x756)+'d'](_0x2279e5);}catch(_0x9f43b4){}}}var _0x74f06={'w':0x0,'h':0x0,'dpr':0x0};function _0x58f19b(){var _0x12cfdd=_0x166263,_0x3d91c3=window[_0x12cfdd(0x5d9)+'ePixe'+_0x12cfdd(0x2c1)+'o']||-0x2a1*-0xd+0x214d+-0x4379,_0xb6fe37=window[_0x12cfdd(0x6b1)+'Width'],_0x41d59d=window[_0x12cfdd(0x6b1)+'Heigh'+'t'];if(_0xb6fe37===_0x74f06['w']&&_0xd9ec6c[_0x12cfdd(0x34f)](_0x41d59d,_0x74f06['h'])&&_0xd9ec6c['SonIP'](_0x3d91c3,_0x74f06['dpr']))return;_0x74f06['w']=_0xb6fe37,_0x74f06['h']=_0x41d59d,_0x74f06[_0x12cfdd(0x70b)]=_0x3d91c3,_0x2279e5[_0x12cfdd(0x498)]=Math[_0x12cfdd(0x24f)](_0xb6fe37*_0x3d91c3),_0x2279e5['heigh'+'t']=Math[_0x12cfdd(0x24f)](_0x41d59d*_0x3d91c3),_0xf4aa0d['setTr'+_0x12cfdd(0x621)+'rm'](_0x3d91c3,-0x221f+-0xa9*0x3b+0x4912,0x898+-0x25a2+0x1d0a,_0x3d91c3,-0x18ee+0xc49+-0x1*-0xca5,-0xec2+0x1745+-0x883);}var _0x2e9766=0x30c+0x4*0x1e4+-0xa9c,_0x45a150=performance[_0x166263(0x33b)](),_0x322ed9=-0x1581+-0x1459*0x1+0x29da;function _0x5112f6(_0x2c592){var _0x5f02c9=_0x166263;if(_0x41b0f4[_0x5f02c9(0x59f)](_0x41b0f4['zhiVg'],_0x5f02c9(0x6a4))){var _0x3ed6c5=_0x41b0f4['DaUrs'](Number,_0x4c3470[_0x5f02c9(0x6fc)+'le'])||0x18e4+0xbcb*-0x2+0x14d*-0x1,_0x3f6b20=_0x41b0f4['BXGqq'](0xe11+0x4b6*0x8+-0x339f,_0x3ed6c5),_0x721af4=(0x3a*-0xa6+-0xe5+0x2685)*_0x3ed6c5,_0x1b0d91=_0x41b0f4[_0x5f02c9(0x62e)](_0x3f6b20*(0xb*-0x1bf+-0x2005*0x1+0x333d),_0x41b0f4['UPfyk'](_0x721af4,0x259*-0x6+0x127d+0x4b*-0xf)),_0x2ed17d=_0x41b0f4['zyhpq'](_0x3f6b20,0x182*0x19+-0x262e+-0x7f*-0x1)+_0x721af4*(-0x145b+-0x3*-0x98a+0x1*-0x841),_0x433d82=_0x4c3470[_0x5f02c9(0x252)],_0x2cf197=_0x433d82==='br'?_0x41b0f4[_0x5f02c9(0x3a4)](_0x2c592[_0x5f02c9(0x3b1)]-(0x17a1+-0x2*-0xd1c+0x31c9*-0x1),_0x1b0d91):_0x2c592[_0x5f02c9(0x2c8)]+(0x393*-0x1+-0x7e3+0xb86),_0x222609=_0x41b0f4[_0x5f02c9(0x61e)](_0x433d82,'ml')?_0x41b0f4['RnqJo'](_0x2c592[_0x5f02c9(0x75b)],_0x2c592[_0x5f02c9(0x423)+'t']/(0x2186+-0x12a6+-0xede))-_0x41b0f4[_0x5f02c9(0x34b)](_0x2ed17d,0x14e*0x1+0x2009+-0x2155):_0x41b0f4['ncbpC'](_0x2c592['botto'+'m']-_0x2ed17d,_0x41b0f4['UdWLO'](_0x433d82,'bl')?-0x3a*-0x55+-0x1a*-0xc3+-0x26b0:-0x1388+-0x5*-0x373+0x2df),_0x481e98=(_0x78a991,_0xa89c31,_0x15f116,_0x1e0fb8,_0x557315,_0x3887ce,_0x5293c3)=>{var _0x52d48b=_0x5f02c9,_0x251315={'acdiA':function(_0x2737d6,_0x1503fe){var _0x4cdc13=_0x51c4;return _0xd9ec6c[_0x4cdc13(0x634)](_0x2737d6,_0x1503fe);},'pHsQa':function(_0x90c781,_0x2d1dfe){return _0x90c781+_0x2d1dfe;},'ICKuV':function(_0x440bae,_0x18b9ca){return _0x440bae+_0x18b9ca;},'mPtAW':function(_0x4f2876,_0x501e8e){return _0xd9ec6c['uVPsK'](_0x4f2876,_0x501e8e);},'cLcQH':function(_0x1685d2,_0x4e3482){return _0xd9ec6c['uVPsK'](_0x1685d2,_0x4e3482);},'FRrok':'UWMK\x20'+'bound'+'\x20','IyQKg':_0xd9ec6c['oviAf'],'QeHxN':_0xd9ec6c[_0x52d48b(0x374)],'VuOya':_0xd9ec6c[_0x52d48b(0x3aa)],'rotAh':'held','NiHvV':_0xd9ec6c['gjwNi'],'VNAkX':_0xd9ec6c['WKwAk'],'AZvpg':_0x52d48b(0x66f)+'MISSI'+'NG\x20-\x20'+_0x52d48b(0x2d1)+_0x52d48b(0x650)+_0x52d48b(0x322)+_0x52d48b(0x447)+'all\x20t'+'he\x20us'+'erscr'+_0x52d48b(0x289)},_0x329c9c=_0x17a51c[_0x52d48b(0x460)](_0xa89c31);_0xf4aa0d[_0x52d48b(0x39d)](),_0xf4aa0d[_0x52d48b(0x220)+'Path']();if(_0xf4aa0d['round'+'Rect'])_0xf4aa0d['round'+'Rect'](_0x15f116,_0x1e0fb8,_0x557315,_0x3887ce,_0xd9ec6c['pfORG'](0xa59*0x1+-0x17fc+0xdaa,_0x3ed6c5));else _0xf4aa0d['rect'](_0x15f116,_0x1e0fb8,_0x557315,_0x3887ce);_0xf4aa0d[_0x52d48b(0x2b6)+_0x52d48b(0x5a2)]=_0x329c9c?'rgba('+_0x52d48b(0x652)+_0x52d48b(0x4ff)+_0x52d48b(0x424)+'5)':'rgba('+_0x52d48b(0x3e0)+'16,0.'+'7)',_0xf4aa0d['fill'](),_0xf4aa0d[_0x52d48b(0x2d5)+'idth']=-0x3af+0x1a38+-0x4*0x5a2,_0xf4aa0d[_0x52d48b(0x40a)+'eStyl'+'e']=_0x329c9c?_0x138c19:_0x52d48b(0x1e6)+_0x52d48b(0x652)+'07,15'+'7,0.3'+'5)',_0xf4aa0d[_0x52d48b(0x40a)+'e']();_0x329c9c&&(_0xf4aa0d['shado'+_0x52d48b(0x478)+'r']=_0x5bdc81,_0xf4aa0d[_0x52d48b(0x4c4)+'wBlur']=0x24b5+-0x119d*0x1+-0x1*0x130a,_0xf4aa0d[_0x52d48b(0x6f7)](),_0xf4aa0d['shado'+'wBlur']=-0xe9c+-0x3*0xabd+0x2ed3);_0xf4aa0d[_0x52d48b(0x2b6)+'tyle']=_0x329c9c?'#fff':'rgba('+_0x52d48b(0x301)+'35,24'+_0x52d48b(0x484)+')',_0xf4aa0d['textA'+_0x52d48b(0x2b7)]=_0xd9ec6c['VJnhz'],_0xf4aa0d[_0x52d48b(0x429)+'aseli'+'ne']='middl'+'e',_0xf4aa0d['font']=_0xd9ec6c['znxJu']('700\x20',Math['round'](_0xd9ec6c['pfORG'](-0x1*-0x13eb+-0x1*0x23e0+0x1001,_0x3ed6c5)))+('px\x20ui'+_0x52d48b(0x631)+_0x52d48b(0x649)+_0x52d48b(0x1f0)+'tem-u'+_0x52d48b(0x1c9)+_0x52d48b(0x486)+'if'),_0xf4aa0d[_0x52d48b(0x544)+'ext'](_0x78a991,_0x15f116+_0x557315/(-0x1f72+-0x1818+0x316*0x12),_0x1e0fb8+_0x3887ce/(0x7*-0x3ee+-0xdb0+0x2934)-(_0x5293c3?(-0x3*-0x5a1+0x4a*-0x43+0x20*0x14)*_0x3ed6c5:-0x2535+0x1ed8+0x65d));if(_0x5293c3){if(_0xd9ec6c['eqgDa']===_0x52d48b(0x32f)){var _0x4a31fd=_0xc1e719[_0x509e27][_0x52d48b(0x230)+'Selec'+'tor']('.sk-m'+_0x52d48b(0x3ee));_0x4a31fd&&(_0x4a31fd[_0x52d48b(0x356)+'onten'+'t']['index'+'Of'](_0x52d48b(0x50d))===0x8f2*0x3+-0x2209+0x733||_0x251315[_0x52d48b(0x44a)](_0x4a31fd[_0x52d48b(0x356)+_0x52d48b(0x4cb)+'t'][_0x52d48b(0x3b5)+'Of']('SAFE'),0x371*-0x7+0x322+0x14f5*0x1))&&(_0x4a31fd['textC'+'onten'+'t']=_0x197d9c[_0x52d48b(0x357)+'ode']?_0x52d48b(0x518)+'MODE\x20'+_0x52d48b(0x31d)+_0x52d48b(0x280)+_0x52d48b(0x589)+'\x20no\x20h'+_0x52d48b(0x2de)+_0x52d48b(0x5ca)+'ad\x20to'+'\x20exit'+')':_0x28870e[_0x52d48b(0x46e)]?_0x251315['pHsQa'](_0x251315[_0x52d48b(0x4cd)](_0x251315['mPtAW'](_0x251315['pHsQa'](_0x251315['cLcQH'](_0x251315['cLcQH'](_0x251315['FRrok']+_0x420bca[_0x52d48b(0x4eb)+'Ok'],'/')+_0x4ef718[_0x52d48b(0x4eb)+'Total']+(_0x52d48b(0x211)+'s')+_0x251315[_0x52d48b(0x3b2)],_0x2e155b[_0x52d48b(0x55b)+'oaded']?'loade'+'d':_0x251315[_0x52d48b(0x3b8)]),_0x251315[_0x52d48b(0x629)])+(_0x1c9a35[_0x52d48b(0x410)+_0x52d48b(0x310)]?_0x52d48b(0x2ca):_0x52d48b(0x3a9)),'\x20|\x20mo'+_0x52d48b(0x2b5)+'t\x20'),_0x1b0949[_0x52d48b(0x2c5)+_0x52d48b(0x210)]?_0x251315[_0x52d48b(0x529)]:_0x251315[_0x52d48b(0x1f6)]),_0x501e35['lastE'+_0x52d48b(0x6a7)]?_0x251315['ICKuV'](_0x251315['VNAkX'],_0x31e432[_0x52d48b(0x23a)+_0x52d48b(0x6a7)]):''):_0x251315['AZvpg']);}else _0xf4aa0d[_0x52d48b(0x571)]=_0xd9ec6c[_0x52d48b(0x668)]('600\x20'+Math['round'](_0xd9ec6c['eGAEs'](0xc25*-0x1+0x1e73*0x1+0x1245*-0x1,_0x3ed6c5)),_0xd9ec6c[_0x52d48b(0x4ee)]),_0xf4aa0d['fillS'+'tyle']=_0x329c9c?_0x52d48b(0x68a):'rgba('+_0x52d48b(0x301)+_0x52d48b(0x5f8)+_0x52d48b(0x454)+'5)',_0xf4aa0d[_0x52d48b(0x544)+_0x52d48b(0x602)](_0x5293c3,_0x15f116+_0x557315/(-0x123e+0x23b*0xb+-0x649),_0xd9ec6c[_0x52d48b(0x395)](_0xd9ec6c[_0x52d48b(0x326)](_0x1e0fb8,_0x3887ce/(0x1*-0xc9a+0xb*-0x115+0x1*0x1883)),(-0x4b0*0x8+-0x1ed*0x1+0x27*0x103)*_0x3ed6c5));}_0xf4aa0d['resto'+'re']();};_0x41b0f4[_0x5f02c9(0x2f3)](_0x481e98,'W',_0x41b0f4['nxFbU'],_0x41b0f4[_0x5f02c9(0x6c9)](_0x2cf197,_0x3f6b20)+_0x721af4,_0x222609,_0x3f6b20,_0x3f6b20),_0x481e98('A',_0x41b0f4[_0x5f02c9(0x488)],_0x2cf197,_0x41b0f4[_0x5f02c9(0x62e)](_0x222609+_0x3f6b20,_0x721af4),_0x3f6b20,_0x3f6b20),_0x41b0f4['pEDHE'](_0x481e98,'S','KeyS',_0x2cf197+_0x3f6b20+_0x721af4,_0x222609+_0x3f6b20+_0x721af4,_0x3f6b20,_0x3f6b20),_0x41b0f4[_0x5f02c9(0x65e)](_0x481e98,'D',_0x5f02c9(0x1e5),_0x2cf197+_0x41b0f4['WoWRJ'](_0x3f6b20+_0x721af4,0x1*0x15d7+-0x4cd+0x884*-0x2),_0x222609+_0x3f6b20+_0x721af4,_0x3f6b20,_0x3f6b20);var _0x48ce8b=(_0x1b0d91-_0x721af4)/(0x2f5*-0x4+0x3ce*-0x6+0x22aa),_0x267c73=_0x41b0f4['ZcNLj'](_0x222609,_0x41b0f4['KqVbd'](_0x3f6b20+_0x721af4,-0x20f3+-0x12f3+0x33e8));_0x41b0f4['jGzIG'](_0x481e98,_0x5f02c9(0x3a7),_0x41b0f4[_0x5f02c9(0x401)],_0x2cf197,_0x267c73,_0x48ce8b,_0x3f6b20,_0x4c3470[_0x5f02c9(0x758)]?_0x41b0f4[_0x5f02c9(0x62e)](_0x2ca8e3(0x10*0x45+-0x8dd*-0x1+0x34b*-0x4),_0x41b0f4[_0x5f02c9(0x384)]):''),_0x481e98(_0x41b0f4[_0x5f02c9(0x6ec)],_0x41b0f4[_0x5f02c9(0x5a3)],_0x2cf197+_0x48ce8b+_0x721af4,_0x267c73,_0x48ce8b,_0x3f6b20,_0x4c3470['ksCps']?_0x2ca8e3(0xf7+0x227c+0xbd0*-0x3)+'\x20CPS':''),_0x41b0f4['XLOSg'](_0x481e98,'',_0x41b0f4[_0x5f02c9(0x2db)],_0x2cf197,_0x267c73+_0x3f6b20+_0x721af4,_0x1b0d91,_0x3f6b20*(-0x68b+0x22b2*-0x1+-0x9*-0x495+0.45));}else{var _0x38ab04=_0x3a3bb6['getEl'+_0x5f02c9(0x4a4)+_0x5f02c9(0x2e9)](_0x3dc5d3);if(_0x38ab04&&_0x383f7f===_0xd9ec6c[_0x5f02c9(0x52e)]){var _0x512976=_0x38ab04[_0x5f02c9(0x30e)+_0x5f02c9(0x752)];for(var _0x5bba5c=-0x17*0x123+0x1*0xe05+0x2*0x610;_0x5bba5c<_0x512976[_0x5f02c9(0x4f6)+'h'];_0x5bba5c++){if(_0x512976[_0x5bba5c]['id']&&_0xd9ec6c[_0x5f02c9(0x5bc)](_0x512976[_0x5bba5c]['id']['index'+'Of'](_0xd9ec6c[_0x5f02c9(0x5be)]),-0x14fa+-0x13a0*0x1+0x289a))_0x512976[_0x5bba5c][_0x5f02c9(0x26f)]['displ'+'ay']=_0x5f02c9(0x3a9);}}else{if(_0x38ab04)_0x38ab04[_0x5f02c9(0x26f)]['displ'+'ay']=_0xd9ec6c[_0x5f02c9(0x6f3)];}}}function _0x4c1bb0(_0x1c1a05){var _0x520a1d=_0x166263;if(_0x520a1d(0x534)!==_0x520a1d(0x6a2)){var _0x3f1da7=_0x1c1a05[_0x520a1d(0x498)]/(0x7*-0x18c+-0x1e55+0x292b),_0x1c5beb=_0x1c1a05[_0x520a1d(0x423)+'t']/(0x93b+-0x3d9+0x8*-0xac),_0xf8674f=_0x41b0f4[_0x520a1d(0x29e)](Number,_0x4c3470['chSiz'+'e'])||0x305+-0x79f+0x49b,_0x4ef04f=/^#[0-9a-f]{6}$/i[_0x520a1d(0x3f3)](_0x4c3470['chCol'+'or'])?_0x4c3470[_0x520a1d(0x4d6)+'or']:_0x520a1d(0x3bf)+'9d';_0xf4aa0d['save'](),_0xf4aa0d['strok'+_0x520a1d(0x24d)+'e']=_0x4ef04f,_0xf4aa0d[_0x520a1d(0x2b6)+_0x520a1d(0x5a2)]=_0x4ef04f,_0xf4aa0d[_0x520a1d(0x2d5)+'idth']=Math[_0x520a1d(0x5c4)](0x717*-0x3+0x14*-0x160+-0x30c6*-0x1+0.5,(0x16a*0xb+0x88+-0x1014)*_0xf8674f),_0xf4aa0d[_0x520a1d(0x4c4)+_0x520a1d(0x478)+'r']=_0x4ef04f,_0xf4aa0d[_0x520a1d(0x4c4)+'wBlur']=-0x4*-0x7a2+0xab+-0x1f2d;var _0x649f50=_0x41b0f4[_0x520a1d(0x693)](-0x1*-0x255d+0x1c0c+-0x4163,_0xf8674f),_0xbc26c=_0x41b0f4[_0x520a1d(0x2bf)](0x1974+-0x1713+-0x259,_0xf8674f);_0xf4aa0d[_0x520a1d(0x220)+_0x520a1d(0x385)](),_0xf4aa0d['moveT'+'o'](_0x41b0f4['cZmjZ'](_0x3f1da7,_0x649f50)-_0xbc26c,_0x1c5beb),_0xf4aa0d['lineT'+'o'](_0x41b0f4[_0x520a1d(0x43b)](_0x3f1da7,_0x649f50),_0x1c5beb),_0xf4aa0d[_0x520a1d(0x31b)+'o'](_0x3f1da7+_0x649f50,_0x1c5beb),_0xf4aa0d[_0x520a1d(0x55f)+'o'](_0x41b0f4[_0x520a1d(0x463)](_0x3f1da7,_0x649f50)+_0xbc26c,_0x1c5beb),_0xf4aa0d['moveT'+'o'](_0x3f1da7,_0x1c5beb-_0x649f50-_0xbc26c),_0xf4aa0d[_0x520a1d(0x55f)+'o'](_0x3f1da7,_0x1c5beb-_0x649f50),_0xf4aa0d['moveT'+'o'](_0x3f1da7,_0x41b0f4[_0x520a1d(0x463)](_0x1c5beb,_0x649f50)),_0xf4aa0d['lineT'+'o'](_0x3f1da7,_0x1c5beb+_0x649f50+_0xbc26c),_0xf4aa0d['strok'+'e'](),_0xf4aa0d['begin'+_0x520a1d(0x385)](),_0xf4aa0d[_0x520a1d(0x6ba)](_0x3f1da7,_0x1c5beb,(0xccb+-0x4e4*0x6+-0xa3*-0x1a+0.6000000000000001)*_0xf8674f,-0x1b*-0xe9+-0x2cd+0x3*-0x742,_0x41b0f4['AiWiC'](Math['PI'],-0x16e7+-0x2*0x136c+-0x1*-0x3dc1)),_0xf4aa0d[_0x520a1d(0x6f7)](),_0xf4aa0d[_0x520a1d(0x2a2)+'re']();}else _0xd9ec6c['jrQUT'](_0x700909),_0x1ec891(_0x2bcd93(_0xb98171['value']));}function _0x39e9eb(_0x462fd9){var _0x438d46=_0x166263;_0xf4aa0d['save'](),_0xf4aa0d[_0x438d46(0x571)]=_0xd9ec6c['ZequX'],_0xf4aa0d['textA'+_0x438d46(0x2b7)]='left',_0xf4aa0d[_0x438d46(0x429)+_0x438d46(0x29b)+'ne']=_0x438d46(0x75b);var _0xab5a76=-0xfb0+0x157d+-0x5a1,_0x5e05f8=0x1*-0x1a3f+-0x16d1+0x311c,_0x1b325a=(_0x352c62,_0x1ba46a)=>{var _0x1fd604=_0x438d46;_0xf4aa0d['fillS'+_0x1fd604(0x5a2)]=_0x1ba46a||_0x1fd604(0x1e6)+_0x1fd604(0x301)+_0x1fd604(0x5f8)+'0,0.7'+'5)',_0xf4aa0d[_0x1fd604(0x544)+'ext'](_0x352c62,_0x5e05f8,_0xab5a76),_0xab5a76+=0x909+0x6d*-0x3+-0x7b2;};_0x1b325a('SAKUR'+_0x438d46(0x2d3)+_0x438d46(0x620)+'1',_0x438d46(0x3bf)+'9d');if(_0x4c3470['fps'])_0x1b325a(_0xd9ec6c[_0x438d46(0x20b)](_0x322ed9,_0xd9ec6c[_0x438d46(0x74c)]));if(!_0xded397[_0x438d46(0x55b)+_0x438d46(0x249)])_0x1b325a(_0x438d46(0x39b)+_0x438d46(0x1dc)+_0x438d46(0x58e)+'e…',_0x438d46(0x1e6)+_0x438d46(0x652)+'80,19'+_0x438d46(0x3de)+')');_0xf4aa0d['resto'+'re']();}function _0x32ad68(){var _0x3ae530=_0x166263;_0xd9ec6c['pEEJa'](requestAnimationFrame,_0x32ad68),_0x2e9766++;var _0x219ab6=performance['now']();_0xd9ec6c[_0x3ae530(0x52a)](_0x219ab6-_0x45a150,0x1c0b+-0x196*0xf+-0x24d)&&(_0x322ed9=Math[_0x3ae530(0x24f)](_0xd9ec6c[_0x3ae530(0x59b)](_0xd9ec6c[_0x3ae530(0x532)](_0x2e9766,-0x1976+-0x827*0x1+-0x235*-0x11),_0x219ab6-_0x45a150)),_0x2e9766=0x559+-0x1f3b+0x19e2,_0x45a150=_0x219ab6);_0xd9ec6c[_0x3ae530(0x526)](_0x58f19b),_0xd9ec6c[_0x3ae530(0x6b6)](_0x56c531),_0xf4aa0d[_0x3ae530(0x699)+_0x3ae530(0x202)](-0x2048+0x4*0x3d5+0x10f4,0x58*0x40+0x1*-0x227d+0xc7d,_0x74f06['w'],_0x74f06['h']);var _0x5f0b65={'left':0x0,'top':0x0,'right':_0x74f06['w'],'bottom':_0x74f06['h'],'width':_0x74f06['w'],'height':_0x74f06['h']};if(_0x4c3470[_0x3ae530(0x723)+_0x3ae530(0x4c6)])_0x4c1bb0(_0x5f0b65);if(_0x4c3470[_0x3ae530(0x264)+_0x3ae530(0x36d)])_0x5112f6(_0x5f0b65);_0xd9ec6c[_0x3ae530(0x3bd)](_0x39e9eb,_0x5f0b65);}var _0x48b822=document['creat'+'eElem'+_0x166263(0x71e)](_0x166263(0x664));_0x48b822['id']=_0x41b0f4[_0x166263(0x703)],_0x48b822[_0x166263(0x26f)][_0x166263(0x2e0)+'xt']=_0x41b0f4['eSgzr'];var _0x285c6d=_0x48b822['attac'+_0x166263(0x3c2)+'ow']({'mode':_0x41b0f4[_0x166263(0x4db)]});(document[_0x166263(0x494)]||document[_0x166263(0x44b)+'entEl'+_0x166263(0x4a4)])[_0x166263(0x719)+'dChil'+'d'](_0x48b822);var _0x2a0501=![],_0x4b44e9={};try{_0x4b44e9=JSON['parse'](localStorage[_0x166263(0x49e)+'em'](_0x41b0f4[_0x166263(0x1cd)])||'{}');}catch(_0x51d6b1){}function _0x1d936d(){var _0x32ec38=_0x166263;try{localStorage['setIt'+'em']('sakur'+'a.kou'+'r.ui.'+'v1',JSON[_0x32ec38(0x661)+_0x32ec38(0x64c)](_0x4b44e9));}catch(_0x430f05){}}function _0x5e301c(_0x2a6206,_0x29c391){var _0x577e41=_0x166263,_0x2a6097={'Dpbkf':'XMvUy','jiABW':_0xd9ec6c['etJoJ'],'vuuFS':_0x577e41(0x441),'GXAPZ':function(_0x2c3676,_0x3dd2ae){return _0x2c3676(_0x3dd2ae);}},_0x5c5cb0=document['creat'+_0x577e41(0x3f7)+'ent'](_0x577e41(0x617)+'n');return _0x5c5cb0[_0x577e41(0x499)]=_0xd9ec6c['mMZuE'],_0x5c5cb0['class'+'Name']=_0xd9ec6c['zEGUP'],_0x5c5cb0[_0x577e41(0x1b3)+_0x577e41(0x48d)+'te']('role','switc'+'h'),_0x5c5cb0[_0x577e41(0x1b3)+'tribu'+'te'](_0x577e41(0x39f)+_0x577e41(0x409)+'ed',_0xd9ec6c[_0x577e41(0x3bd)](String,!!_0x2a6206)),_0x5c5cb0['oncli'+'ck']=_0x1787d2=>{var _0x5a290d=_0x577e41;if('XMvUy'!==_0x2a6097[_0x5a290d(0x59c)])try{_0x179b59['setIt'+'em'](_0x5a290d(0x6c1)+_0x5a290d(0x1bf)+_0x5a290d(0x492)+'v1',_0x5b8277[_0x5a290d(0x661)+'gify'](_0x16f80d));}catch(_0x1b2c2c){}else{_0x1787d2['stopP'+_0x5a290d(0x485)+_0x5a290d(0x502)]();var _0x41becb=_0x5c5cb0[_0x5a290d(0x302)+_0x5a290d(0x48d)+'te'](_0x2a6097[_0x5a290d(0x2f4)])!==_0x2a6097[_0x5a290d(0x35c)];_0x5c5cb0[_0x5a290d(0x1b3)+_0x5a290d(0x48d)+'te'](_0x5a290d(0x39f)+'check'+'ed',String(_0x41becb)),_0x2a6097[_0x5a290d(0x4af)](_0x29c391,_0x41becb);}},_0x5c5cb0;}function _0x3f5bfc(_0xb23fa1,_0x2139f6,_0x1651fe,_0x5127e9,_0x5a629d){var _0x577427=_0x166263,_0x334eed={'mwmZT':function(_0xbfe2d){return _0xbfe2d();},'iFmEX':function(_0x5659e5,_0x38891b){return _0x5659e5!==_0x38891b;},'sFfrS':_0x577427(0x2f7),'BUcHE':_0x41b0f4[_0x577427(0x70a)],'YavYL':function(_0x501058,_0x5419e9){return _0x501058*_0x5419e9;},'rQoje':function(_0x37cd40,_0x57a4fe){return _0x41b0f4['XhSTT'](_0x37cd40,_0x57a4fe);},'GlKrw':function(_0x527739,_0x1972f7){return _0x527739*_0x1972f7;},'sMPPW':_0x577427(0x1e6)+_0x577427(0x652)+'07,15'+_0x577427(0x424)+'5)','ZEytD':_0x577427(0x1e6)+_0x577427(0x301)+_0x577427(0x5f8)+'0,0.8'+')','UIxXy':_0x577427(0x4e8)+'r','wtjGL':_0x577427(0x363)+'e','geSgT':function(_0x2136c5,_0x52810e){var _0x1c9e5c=_0x577427;return _0x41b0f4[_0x1c9e5c(0x58b)](_0x2136c5,_0x52810e);},'QxkLl':_0x577427(0x6db),'CURSr':_0x577427(0x58d),'abDhC':_0x577427(0x68a),'WUOuG':_0x577427(0x1e6)+'255,2'+'35,24'+_0x577427(0x454)+'5)','lDsiY':function(_0x5e8cc5,_0x322fa0){return _0x5e8cc5+_0x322fa0;}};if(_0x41b0f4['diaxi'](_0x41b0f4[_0x577427(0x5d6)],_0x577427(0x41a))){var _0x1921eb=document['creat'+_0x577427(0x3f7)+_0x577427(0x71e)](_0x577427(0x664));_0x1921eb[_0x577427(0x228)+_0x577427(0x278)]=_0x577427(0x43d)+_0x577427(0x1f3);var _0x4cc0d8=document[_0x577427(0x3c9)+_0x577427(0x3f7)+'ent']('input');_0x4cc0d8['type']=_0x41b0f4['pkVUe'],_0x4cc0d8['class'+'Name']='sk-sl'+_0x577427(0x217),_0x4cc0d8[_0x577427(0x200)]=_0x2139f6,_0x4cc0d8[_0x577427(0x5c4)]=_0x1651fe,_0x4cc0d8[_0x577427(0x364)]=_0x5127e9,_0x4cc0d8[_0x577427(0x1e7)]=_0xb23fa1;var _0x55ca54=document[_0x577427(0x3c9)+_0x577427(0x3f7)+_0x577427(0x71e)]('span');_0x55ca54['class'+_0x577427(0x278)]=_0x41b0f4['Gbckk'],_0x55ca54['textC'+_0x577427(0x4cb)+'t']=_0x41b0f4[_0x577427(0x6bb)](String,_0xb23fa1);var _0x1e7c14=()=>{var _0x29f1b0=_0x577427,_0x3dbaf7={'CwpST':function(_0x40614d){return _0x334eed['mwmZT'](_0x40614d);}};_0x334eed[_0x29f1b0(0x5fd)](_0x29f1b0(0x2f7),_0x334eed['sFfrS'])?(_0x3cc70b['ksCps']=_0x28fbd4,_0x3dbaf7['CwpST'](_0xdb604a)):(_0x55ca54[_0x29f1b0(0x356)+_0x29f1b0(0x4cb)+'t']=String(_0x4cc0d8[_0x29f1b0(0x1e7)]),_0x1921eb[_0x29f1b0(0x26f)][_0x29f1b0(0x36e)+'opert'+'y'](_0x334eed[_0x29f1b0(0x366)],_0x334eed[_0x29f1b0(0x21d)](_0x334eed[_0x29f1b0(0x721)](_0x4cc0d8['value']-_0x2139f6,_0x1651fe-_0x2139f6),-0x112*-0xa+-0x4*-0x93+-0xc9c)+'%'));};return _0x4cc0d8[_0x577427(0x4aa)+'ut']=()=>{var _0x5a2a98=_0x577427;if('NaKdW'===_0x5a2a98(0x6ca))_0x1e7c14(),_0x5a629d(Number(_0x4cc0d8[_0x5a2a98(0x1e7)]));else try{_0xec3b57['enabl'+'ed']=!!_0x3a4a52;}catch(_0x1132a2){}},_0x1e7c14(),_0x1921eb[_0x577427(0x719)+'d'](_0x4cc0d8,_0x55ca54),_0x1921eb;}else{var _0x4df685=_0x3b93f2(_0x1511df['ksSca'+'le'])||0xa4*0x29+-0x114f+-0x8f4,_0x3de07b=(-0x2478+0x1650+0xe4a)*_0x4df685,_0x33588e=_0xd9ec6c[_0x577427(0x2f5)](0x5c*-0x2b+-0x57d+0x14f5,_0x4df685),_0x277cb0=_0x3de07b*(0x4b3+-0x1801+0x73*0x2b)+_0x33588e*(0x1*-0x1e22+0x18d6+-0x2a7*-0x2),_0x1c3442=_0xd9ec6c[_0x577427(0x343)](_0x3de07b*(0x41b+0x284*-0x7+0xd84),_0x33588e*(0xb5e+-0x1f43*0x1+-0x13e7*-0x1)),_0x3d990e=_0x39d697[_0x577427(0x252)],_0x2e2c15=_0xd9ec6c[_0x577427(0x5f9)](_0x3d990e,'br')?_0xd9ec6c[_0x577427(0x470)](_0x48da21[_0x577427(0x3b1)]-(0x2052+0xfe5*0x2+-0x400c),_0x277cb0):_0x196d6e['left']+(0x75f+-0x25b+-0x4f4),_0x5b75c4=_0x3d990e==='ml'?_0xd9ec6c[_0x577427(0x326)](_0x576ee8['top'],_0xd9ec6c['JgLAD'](_0xd9eab3['heigh'+'t'],-0x2*0xfe9+0x1486*-0x1+0x1*0x345a))-_0x1c3442/(0x7e0+0xf*0xb1+0xcb*-0x17):_0xd9ec6c[_0x577427(0x470)](_0x1bbc45[_0x577427(0x381)+'m']-_0x1c3442,_0xd9ec6c['eWiRM'](_0x3d990e,'bl')?-0x90d+-0x155*0x5+0x1*0x1016:-0x3*0xa61+-0x1*0xf1a+0x2ed3),_0x38876b=(_0x5284d0,_0x36b0ac,_0x4c75e0,_0x2a0418,_0x6fa03a,_0x1b0947,_0x22792c)=>{var _0x287156=_0x577427,_0x5d4bac=_0x23aef0[_0x287156(0x460)](_0x36b0ac);_0x5d016d[_0x287156(0x39d)](),_0x1c2bde['begin'+'Path']();if(_0x1aef20[_0x287156(0x24f)+_0x287156(0x202)])_0x1f3b14[_0x287156(0x24f)+'Rect'](_0x4c75e0,_0x2a0418,_0x6fa03a,_0x1b0947,_0x334eed[_0x287156(0x391)](0x3d*-0x3d+-0x1d4+0x1064,_0x4df685));else _0xce61ae['rect'](_0x4c75e0,_0x2a0418,_0x6fa03a,_0x1b0947);_0x276261[_0x287156(0x2b6)+'tyle']=_0x5d4bac?_0x334eed['sMPPW']:'rgba('+_0x287156(0x3e0)+'16,0.'+'7)',_0x2da5be[_0x287156(0x6f7)](),_0x5333ed[_0x287156(0x2d5)+_0x287156(0x65b)]=0x13*-0x7d+-0x17*-0x19a+-0x1b8e,_0x346d80[_0x287156(0x40a)+_0x287156(0x24d)+'e']=_0x5d4bac?_0xa6bf31:_0x287156(0x1e6)+'255,1'+_0x287156(0x4ff)+'7,0.3'+'5)',_0x352ca8[_0x287156(0x40a)+'e'](),_0x5d4bac&&(_0x5c0387['shado'+_0x287156(0x478)+'r']=_0x175469,_0x34ed0a['shado'+'wBlur']=-0xe11+0x19*0xe+-0x5*-0x28d,_0xa1954[_0x287156(0x6f7)](),_0x35a309[_0x287156(0x4c4)+_0x287156(0x3dc)]=0x3*-0xbc3+-0x4f*-0x71+0x6a*0x1),_0x3f69a2[_0x287156(0x2b6)+_0x287156(0x5a2)]=_0x5d4bac?_0x287156(0x68a):_0x334eed['ZEytD'],_0x119230[_0x287156(0x5fa)+_0x287156(0x2b7)]=_0x334eed['UIxXy'],_0x12d03a[_0x287156(0x429)+'aseli'+'ne']=_0x334eed[_0x287156(0x666)],_0x39d983[_0x287156(0x571)]=_0x334eed['geSgT'](_0x334eed['QxkLl']+_0x378347[_0x287156(0x24f)]((-0x1e86+-0x253d+-0x1*-0x43cf)*_0x4df685),_0x287156(0x2bb)+_0x287156(0x631)+'-seri'+_0x287156(0x1f0)+'tem-u'+_0x287156(0x1c9)+'s-ser'+'if'),_0x523b96[_0x287156(0x544)+'ext'](_0x5284d0,_0x4c75e0+_0x334eed[_0x287156(0x721)](_0x6fa03a,0x1ad7+-0xd62+0x139*-0xb),_0x2a0418+_0x1b0947/(-0xcaa*-0x2+0x475+-0x1dc7)-(_0x22792c?(-0x1d23+-0x2234+-0x2*-0x1fae)*_0x4df685:-0x2437+-0x313*-0x3+0x1afe)),_0x22792c&&(_0x4a8250['font']=_0x334eed['geSgT'](_0x334eed['CURSr']+_0xefa87f['round'](_0x334eed[_0x287156(0x391)](0x1198*0x1+-0x13fb*-0x1+-0x782*0x5,_0x4df685)),_0x287156(0x2bb)+_0x287156(0x631)+_0x287156(0x649)+'f,sys'+'tem-u'+_0x287156(0x1c9)+'s-ser'+'if'),_0x2a5219[_0x287156(0x2b6)+_0x287156(0x5a2)]=_0x5d4bac?_0x334eed[_0x287156(0x633)]:_0x334eed['WUOuG'],_0x32db13['fillT'+'ext'](_0x22792c,_0x4c75e0+_0x6fa03a/(-0x665*0x2+-0x173*0x5+0x140b),_0x334eed[_0x287156(0x59e)](_0x2a0418,_0x1b0947/(-0x14c5+-0x1a9a+-0x2f61*-0x1))+(0x32e*-0x4+0xd3f+0x1*-0x7f)*_0x4df685)),_0x3d9292[_0x287156(0x2a2)+'re']();};_0x38876b('W','KeyW',_0xd9ec6c[_0x577427(0x343)](_0x2e2c15,_0x3de07b)+_0x33588e,_0x5b75c4,_0x3de07b,_0x3de07b),_0x38876b('A',_0x577427(0x2eb),_0x2e2c15,_0xd9ec6c[_0x577427(0x20b)](_0x5b75c4,_0x3de07b)+_0x33588e,_0x3de07b,_0x3de07b),_0xd9ec6c[_0x577427(0x325)](_0x38876b,'S','KeyS',_0x2e2c15+_0x3de07b+_0x33588e,_0x5b75c4+_0x3de07b+_0x33588e,_0x3de07b,_0x3de07b),_0x38876b('D','KeyD',_0x2e2c15+(_0x3de07b+_0x33588e)*(0x1141+-0xd7f+0x6*-0xa0),_0x5b75c4+_0x3de07b+_0x33588e,_0x3de07b,_0x3de07b);var _0x4d06d2=_0xd9ec6c['JgLAD'](_0x277cb0-_0x33588e,0xb*-0xab+0x40a+-0x11b*-0x3),_0x2993f8=_0x5b75c4+_0xd9ec6c['Vsvle'](_0x3de07b+_0x33588e,-0x1b75+-0x1781+0x32f8);_0x38876b(_0x577427(0x3a7),'mouse'+'1',_0x2e2c15,_0x2993f8,_0x4d06d2,_0x3de07b,_0x1e6620['ksCps']?_0xd9ec6c['DEFCp'](_0xd9ec6c[_0x577427(0x3bd)](_0x33df2b,-0x83*0x25+-0xdd*-0x2b+-0x122f),_0x577427(0x20a)):''),_0x38876b(_0x577427(0x31a),_0x577427(0x5a5)+'3',_0xd9ec6c['kxluf'](_0x2e2c15+_0x4d06d2,_0x33588e),_0x2993f8,_0x4d06d2,_0x3de07b,_0x44599b[_0x577427(0x758)]?_0x176ecb(-0x20e+-0x99d*0x3+0x1ee8)+_0x577427(0x20a):''),_0xd9ec6c['CNGZt'](_0x38876b,'','Space',_0x2e2c15,_0x2993f8+_0x3de07b+_0x33588e,_0x277cb0,_0xd9ec6c['XvgIL'](_0x3de07b,-0x1815+-0x831+0x2046+0.45));}}function _0x1360f8(_0x4a20f3,_0x570bb8){var _0x2fe57b=_0x166263,_0x38455b=document['creat'+'eElem'+'ent'](_0x2fe57b(0x3a1));return _0x38455b['type']=_0x41b0f4[_0x2fe57b(0x673)],_0x38455b[_0x2fe57b(0x228)+'Name']=_0x2fe57b(0x2e5)+_0x2fe57b(0x557),_0x38455b[_0x2fe57b(0x1e7)]=/^#[0-9a-f]{6}$/i[_0x2fe57b(0x3f3)](_0x4a20f3)?_0x4a20f3:_0x41b0f4[_0x2fe57b(0x1ed)],_0x38455b[_0x2fe57b(0x4aa)+'ut']=()=>_0x570bb8(_0x38455b[_0x2fe57b(0x1e7)]),_0x38455b;}function _0x85c53(_0x3cf801,_0x25aac6,_0x2326cb){var _0x5022e5=_0x166263;if('oVlNO'==='YPlHb'){var _0xab873c=_0x3b28d8['creat'+_0x5022e5(0x3f7)+_0x5022e5(0x71e)]('optio'+'n');_0xab873c['value']=_0x4ea69e,_0xab873c[_0x5022e5(0x356)+'onten'+'t']=_0x2aa9e7,_0x4e8c4e[_0x5022e5(0x719)+_0x5022e5(0x756)+'d'](_0xab873c);}else{var _0x17948a=document[_0x5022e5(0x3c9)+_0x5022e5(0x3f7)+'ent'](_0x41b0f4[_0x5022e5(0x726)]);_0x17948a['class'+_0x5022e5(0x278)]=_0x41b0f4['Jbtjd'];for(var [_0x18091e,_0x5e42f8]of _0x25aac6){var _0xb6153e=document[_0x5022e5(0x3c9)+'eElem'+_0x5022e5(0x71e)](_0x41b0f4['vDIyo']);_0xb6153e[_0x5022e5(0x1e7)]=_0x18091e,_0xb6153e[_0x5022e5(0x356)+_0x5022e5(0x4cb)+'t']=_0x5e42f8,_0x17948a[_0x5022e5(0x719)+'dChil'+'d'](_0xb6153e);}return _0x17948a[_0x5022e5(0x1e7)]=_0x3cf801,_0x17948a[_0x5022e5(0x65f)+_0x5022e5(0x1f3)]=()=>_0x2326cb(_0x17948a[_0x5022e5(0x1e7)]),_0x17948a;}}function _0x54d0e8(_0x410b09,_0x2a6f9){var _0x5542bf=_0x166263,_0xfe2e82={'ZXSAP':_0xd9ec6c['CKyPa']},_0x30a8d7=document[_0x5542bf(0x3c9)+'eElem'+_0x5542bf(0x71e)](_0xd9ec6c[_0x5542bf(0x36a)]);return _0x30a8d7[_0x5542bf(0x499)]='butto'+'n',_0x30a8d7[_0x5542bf(0x228)+'Name']=_0xd9ec6c['JXERm'],_0x30a8d7[_0x5542bf(0x356)+_0x5542bf(0x4cb)+'t']=_0x410b09,_0x30a8d7[_0x5542bf(0x4b0)+'ck']=_0x23ce32=>{var _0x12d184=_0x5542bf,_0x11f1bd={'YxZZD':_0xfe2e82[_0x12d184(0x1c3)]};if('bQJEr'!==_0x12d184(0x69c))try{var _0x457072=_0x563b77[_0x12d184(0x1ba)+_0x12d184(0x6ac)+'x']({'typeName':_0x4a9deb,'methodName':_0x46d96a,'params':_0x52f5da,'returnType':_0x5cd027},_0x131062);return _0x457072['enabl'+'ed']=_0x6a2e1f!==![],_0x20a321[_0xbe8e96]=_0x457072,_0x2c1d25[_0x12d184(0x4eb)+_0x12d184(0x554)]++,_0x457072;}catch(_0x16ea79){return _0x341df2[_0x12d184(0x285)](_0x11f1bd['YxZZD'],_0x120d2a,_0x16ea79&&_0x16ea79[_0x12d184(0x387)+'ge']),null;}else _0x23ce32[_0x12d184(0x4d9)+'ropag'+'ation'](),_0x2a6f9();},_0x30a8d7;}function _0x502c8e(_0x1c905e,_0x23c8a2,_0x12c039){var _0x293d46=_0x166263,_0x246463=(_0x293d46(0x6a1)+_0x293d46(0x45d)+_0x293d46(0x74d))[_0x293d46(0x64e)]('|'),_0x1b3be1=0x1520+-0x1313+0x3*-0xaf;while(!![]){switch(_0x246463[_0x1b3be1++]){case'0':_0x3d5811[_0x293d46(0x356)+'onten'+'t']=_0x1c905e;continue;case'1':if(_0x23c8a2){var _0x5e9fac=document[_0x293d46(0x3c9)+'eElem'+_0x293d46(0x71e)](_0x293d46(0x33e));_0x5e9fac['class'+'Name']='sk-hi'+'nt',_0x5e9fac['textC'+_0x293d46(0x4cb)+'t']=_0x23c8a2,_0x3d5811['appen'+'dChil'+'d'](_0x5e9fac);}continue;case'2':return _0x2dc1d1;case'3':var _0x3d5811=document[_0x293d46(0x3c9)+'eElem'+'ent'](_0x293d46(0x335));continue;case'4':_0x2dc1d1[_0x293d46(0x719)+'d'](_0x3d5811,_0x12c039);continue;case'5':_0x2dc1d1[_0x293d46(0x228)+_0x293d46(0x278)]=_0x293d46(0x667)+'l';continue;case'6':_0x3d5811[_0x293d46(0x228)+'Name']=_0x293d46(0x2c0)+'bel';continue;case'7':var _0x2dc1d1=document[_0x293d46(0x3c9)+'eElem'+_0x293d46(0x71e)]('div');continue;}break;}}function _0x42f2c9(_0x521b14,_0x43ddc7){var _0x2c8736=_0x166263;if(_0x41b0f4[_0x2c8736(0x689)](_0x2c8736(0x42a),_0x41b0f4['PqDij'])){var _0x2f6b9f=document[_0x2c8736(0x3c9)+_0x2c8736(0x3f7)+'ent'](_0x41b0f4[_0x2c8736(0x3f8)]);return _0x2f6b9f['class'+'Name']=_0x41b0f4[_0x2c8736(0x718)](_0x41b0f4['fISOE'],_0x43ddc7?'\x20err':''),_0x2f6b9f['textC'+_0x2c8736(0x4cb)+'t']=_0x521b14,_0x2f6b9f;}else _0x2a864a['damag'+'eValu'+'e']=_0x3eb2a3,_0x5145d4();}function _0x5849b8(_0x5766a0,_0x7711a0,_0x4688b2,_0x50583f,_0x19a54e){var _0x59d4ce=_0x166263,_0x1f9b42={'MitHo':function(_0x3050cf){return _0x3050cf();}},_0xb0dd96=document['creat'+_0x59d4ce(0x3f7)+'ent'](_0x59d4ce(0x664));_0xb0dd96[_0x59d4ce(0x228)+_0x59d4ce(0x278)]=_0x41b0f4[_0x59d4ce(0x718)](_0x41b0f4[_0x59d4ce(0x2bc)],_0x4688b2?_0x41b0f4['wEdNM']:'');var _0x1a9c28=document['creat'+'eElem'+_0x59d4ce(0x71e)](_0x41b0f4['CcrpC']);_0x1a9c28['class'+'Name']=_0x41b0f4[_0x59d4ce(0x3e2)];var _0x48fc01=document[_0x59d4ce(0x3c9)+_0x59d4ce(0x3f7)+_0x59d4ce(0x71e)](_0x41b0f4['CcrpC']);_0x48fc01['class'+_0x59d4ce(0x278)]=_0x59d4ce(0x26d)+'rd-ti'+'tle';var _0x4a842a=document[_0x59d4ce(0x3c9)+'eElem'+'ent'](_0x59d4ce(0x5df)+'g');_0x4a842a['textC'+_0x59d4ce(0x4cb)+'t']=_0x5766a0,_0x48fc01[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0x4a842a);if(_0x50583f){var _0x5c27f7=_0x41b0f4[_0x59d4ce(0x475)](_0x5e301c,_0x4688b2,_0x662dfc=>{var _0x465321=_0x59d4ce;_0xd9ec6c[_0x465321(0x714)](_0x465321(0x239),_0x465321(0x5b5))?(_0xb0dd96['class'+'List'][_0x465321(0x22a)+'e']('on',_0x662dfc),_0xd9ec6c[_0x465321(0x1b2)](_0x50583f,_0x662dfc)):(_0x2c5db2['bhop']=_0x695d53,_0x1f9b42['MitHo'](_0x7a9eeb));});_0x1a9c28['appen'+'d'](_0x48fc01,_0x5c27f7);}else _0x41b0f4['DvviD']('QXHvO',_0x41b0f4['qysGg'])?_0x1a9c28[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0x48fc01):(_0x3bb5f8[_0x59d4ce(0x1d8)+'ct']=_0x1c6a30,_0x46b1d8());_0xb0dd96[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0x1a9c28);if(_0x19a54e&&_0x19a54e['lengt'+'h']){var _0x2013ea=_0x41b0f4['ALguY'][_0x59d4ce(0x64e)]('|'),_0xe0c1c=-0x2253+-0x1*-0xe51+0x1402;while(!![]){switch(_0x2013ea[_0xe0c1c++]){case'0':_0x1950ae[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0x2e098a);continue;case'1':for(var _0xcc4931 of _0x19a54e)_0x1950ae[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0xcc4931);continue;case'2':_0x2e098a[_0x59d4ce(0x228)+_0x59d4ce(0x278)]=_0x59d4ce(0x6c3)+_0x59d4ce(0x5ae);continue;case'3':var _0x1950ae=document['creat'+_0x59d4ce(0x3f7)+_0x59d4ce(0x71e)](_0x59d4ce(0x664));continue;case'4':var _0x2e098a=document['creat'+_0x59d4ce(0x3f7)+'ent'](_0x41b0f4[_0x59d4ce(0x3f8)]);continue;case'5':_0x2e098a[_0x59d4ce(0x356)+_0x59d4ce(0x4cb)+'t']=_0x7711a0;continue;case'6':_0x1950ae['class'+'Name']=_0x41b0f4[_0x59d4ce(0x3a0)];continue;case'7':_0xb0dd96[_0x59d4ce(0x719)+_0x59d4ce(0x756)+'d'](_0x1950ae);continue;}break;}}return _0xb0dd96;}var _0x1369ed=[{'id':_0x166263(0x2cd)+'t','label':_0x166263(0x3a3)+'t'},{'id':_0x166263(0x5aa),'label':_0x166263(0x286)},{'id':_0x41b0f4[_0x166263(0x48e)],'label':_0x166263(0x3c1)+'l'},{'id':_0x41b0f4['umiiA'],'label':_0x166263(0x3ea)},{'id':'safe','label':'Safet'+'y'}];function _0x259432(){var _0x47065b=_0x166263;if(_0x41b0f4[_0x47065b(0x464)]===_0x41b0f4['EYYuC']){var _0x22d2db=_0xded397['safeM'+_0x47065b(0x4ac)]?'SAFE\x20'+'MODE\x20'+_0x47065b(0x57a)+_0x47065b(0x280)+_0x47065b(0x589)+_0x47065b(0x577)+_0x47065b(0x2de)+'(relo'+_0x47065b(0x57e)+_0x47065b(0x55d)+')':_0xded397[_0x47065b(0x46e)]?_0x41b0f4['kqvsQ'](_0x41b0f4[_0x47065b(0x3af)](_0x41b0f4['Upcnm'](_0x41b0f4[_0x47065b(0x393)](_0x41b0f4[_0x47065b(0x427)]+_0xded397['hooks'+'Ok'],'/')+_0xded397[_0x47065b(0x4eb)+'Total']+('\x20hook'+'s')+('\x20|\x20ga'+_0x47065b(0x443)),_0xded397[_0x47065b(0x55b)+_0x47065b(0x249)]?_0x41b0f4['ZNsUY']:_0x47065b(0x1b4)+'ng'),_0x41b0f4[_0x47065b(0x351)]),_0xded397[_0x47065b(0x410)+'ers']?_0x47065b(0x2ca):_0x41b0f4['JYXiB'])+('\x20|\x20mo'+'vemen'+'t\x20')+(_0xded397[_0x47065b(0x2c5)+_0x47065b(0x210)]?_0x47065b(0x2ca):_0x47065b(0x3a9)):_0x41b0f4[_0x47065b(0x232)];if(_0xded397[_0x47065b(0x23a)+_0x47065b(0x6a7)])_0x22d2db+=_0x47065b(0x562)+'R:\x20'+_0xded397[_0x47065b(0x23a)+_0x47065b(0x6a7)];return _0x41b0f4[_0x47065b(0x687)](_0x5849b8,_0x47065b(0x436)+'s',_0x22d2db,_0xded397['uwmk'],null,[_0x41b0f4[_0x47065b(0x43c)](_0x502c8e,_0x47065b(0x6cc)+_0x47065b(0x377)+'lock','calls'+'\x20Unit'+_0x47065b(0x457)+_0x47065b(0x745)+_0x47065b(0x662)+_0x47065b(0x5c8)+_0x47065b(0x5f6)+_0x47065b(0x392)+_0x47065b(0x5d8)+_0x47065b(0x367),_0x41b0f4['mQPmM'](_0x54d0e8,_0x41b0f4[_0x47065b(0x71f)],()=>{var _0x415606=_0x47065b;try{if(_0x146182)_0x146182[_0x415606(0x4bd)](_0x415606(0x248)+'Engin'+_0x415606(0x4cc)+_0x415606(0x2f1)+_0x415606(0x434),'set_t'+'arget'+_0x415606(0x5d8)+_0x415606(0x367),[0x443*-0x3+0x5e5*0x3+-0x3f6]);}catch(_0x167075){}}))]);}else try{var _0x75a213=new _0x2f72b6(_0x28b716)[_0x47065b(0x49d)+_0x47065b(0x260)](_0x566040,_0x262a3d);_0x4e45ca[_0x47065b(0x67e)](_0xc7d047,_0x75a213!==_0x4eabf6?_0x75a213[_0x47065b(0x741)]():null);}catch(_0x395eae){_0x41e27a[_0x47065b(0x67e)](_0x532282,null);}}function _0x23f37b(_0x3bd6a2){var _0x1e157e=_0x166263,_0x3b8213={'ZfXiY':function(_0x2341fe,_0x598e80){return _0xd9ec6c['eWiRM'](_0x2341fe,_0x598e80);},'UmbsJ':_0xd9ec6c['XOgHx'],'tzYAj':function(_0x7ce380){var _0x152b38=_0x51c4;return _0xd9ec6c[_0x152b38(0x509)](_0x7ce380);},'amskE':function(_0x3fa221){return _0x3fa221();},'AwHLT':_0xd9ec6c[_0x1e157e(0x584)]};if(_0xd9ec6c[_0x1e157e(0x35b)](_0xd9ec6c[_0x1e157e(0x321)],_0x1e157e(0x362))){if(_0x3bd6a2===_0x1e157e(0x2cd)+'t')return[_0x259432(),_0x5849b8('God\x20M'+'ode',_0xd9ec6c[_0x1e157e(0x71b)],_0x4c3470[_0x1e157e(0x1e4)],_0x3565e8=>{var _0x256040=_0x1e157e;_0x4c3470['god']=_0x3565e8,_0xd9ec6c[_0x256040(0x430)](_0x5e0afc),_0x32b2fb(_0xd9ec6c[_0x256040(0x4bf)],_0x3565e8),_0xd9ec6c[_0x256040(0x4fc)](_0x32b2fb,'godDi'+'e',_0x3565e8);},[]),_0x5849b8(_0xd9ec6c[_0x1e157e(0x60c)],_0xd9ec6c['tykzE'],_0x4c3470[_0x1e157e(0x4d3)+'oil'],_0x5c9c96=>{var _0x5ac1c2=_0x1e157e,_0x23aaf7={'DfFMf':'u32'};if(_0x3b8213[_0x5ac1c2(0x541)]('sDZqS','aWyWb')){var _0x18a719=new _0x3b1922(_0x4466dd)[_0x5ac1c2(0x49d)+_0x5ac1c2(0x260)](_0xfdfc8a,_0x23aaf7[_0x5ac1c2(0x66e)]);return _0x18a719?_0x18a719['val']():0x1*-0xcf1+0x12*0x142+0x1*-0x9b3;}else _0x4c3470['noRec'+_0x5ac1c2(0x645)]=_0x5c9c96,_0x5e0afc(),_0x32b2fb(_0x3b8213['UmbsJ'],_0x5c9c96);},[]),_0x5849b8('No\x20Sp'+_0x1e157e(0x5ec),_0x1e157e(0x65a)+_0x1e157e(0x38e)+_0x1e157e(0x1c4)+'nd\x20ma'+'xes\x20a'+_0x1e157e(0x469)+'cy\x20on'+_0x1e157e(0x735)+_0x1e157e(0x2af)+'on\x20ev'+_0x1e157e(0x4a7)+'00ms.',_0x4c3470[_0x1e157e(0x4b5)+'ead'],_0xdcfc2=>{var _0x4143f7=_0x1e157e;_0x4c3470[_0x4143f7(0x4b5)+_0x4143f7(0x561)]=_0xdcfc2,_0x5e0afc();},[]),_0x5849b8(_0xd9ec6c[_0x1e157e(0x273)],_0x1e157e(0x639)+_0x1e157e(0x72b)+'rtide'+_0x1e157e(0x6df)+_0x1e157e(0x415)+'eRate'+'\x20to\x201'+_0x1e157e(0x209)+_0x1e157e(0x26c)+_0x1e157e(0x48f)+_0x1e157e(0x49b)+_0x1e157e(0x44d)+_0x1e157e(0x5ee)+'s.',_0x4c3470['rapid'+_0x1e157e(0x3b4)],_0x392fc8=>{var _0x534338=_0x1e157e;_0x534338(0x594)==='cRBJv'?(_0x951b67[_0x534338(0x72f)+_0x534338(0x519)]=_0x237155,_0x294253()):(_0x4c3470[_0x534338(0x279)+'Exp']=_0x392fc8,_0x5e0afc());},[]),_0xd9ec6c[_0x1e157e(0x4c0)](_0x5849b8,_0xd9ec6c['TQLOs'],_0xd9ec6c[_0x1e157e(0x294)],_0x4c3470['damag'+_0x1e157e(0x2c9)],_0x37e36e=>{var _0xb495ca=_0x1e157e;_0x4c3470[_0xb495ca(0x6ff)+'eExp']=_0x37e36e,_0x5e0afc();},[_0x502c8e(_0xd9ec6c['Nkttg'],null,_0x3f5bfc(_0x4c3470[_0x1e157e(0x6ff)+_0x1e157e(0x521)+'e'],-0x1c9*-0x9+0x77*0xb+-0x1524,-0x247+-0x1981*-0x1+0x1546*-0x1,0x217c*0x1+-0x252+-0x1f25,_0x5de90b=>{_0x4c3470['damag'+'eValu'+'e']=_0x5de90b,_0xd9ec6c['kVifl'](_0x5e0afc);}))]),_0x5849b8('Infin'+_0x1e157e(0x3e7)+'mmo\x20['+_0x1e157e(0x5eb),_0xd9ec6c[_0x1e157e(0x1af)],_0x4c3470[_0x1e157e(0x27f)+_0x1e157e(0x1ab)],_0x33fbf4=>{var _0x106ef2=_0x1e157e;_0x4c3470[_0x106ef2(0x27f)+_0x106ef2(0x1ab)]=_0x33fbf4,_0x5e0afc();},[_0xd9ec6c[_0x1e157e(0x270)](_0x42f2c9,_0xd9ec6c[_0x1e157e(0x54f)])])];if(_0x3bd6a2===_0x1e157e(0x5aa)){if(_0xd9ec6c['ioGfx']('JKwbF',_0x1e157e(0x251)))try{_0x5f1802['setIt'+'em'](_0x1e157e(0x6c1)+'a.kou'+_0x1e157e(0x25f),_0x56bc04['strin'+_0x1e157e(0x64c)](_0x26a536));}catch(_0x74a6a4){}else return[_0xd9ec6c[_0x1e157e(0x201)](_0x5849b8,_0x1e157e(0x686),_0x1e157e(0x639)+_0x1e157e(0x677)+_0x1e157e(0x4b8)+_0x1e157e(0x45f)+_0x1e157e(0x456)+'speed'+'\x20limi'+_0x1e157e(0x1a9)+'us\x20ac'+_0x1e157e(0x1c5)+_0x1e157e(0x502)+'.',_0xd9ec6c[_0x1e157e(0x714)](_0x4c3470[_0x1e157e(0x40f)+_0x1e157e(0x660)],0x1f31+-0x305*0x1+-0x1bc8),null,[_0xd9ec6c[_0x1e157e(0x678)](_0x502c8e,_0xd9ec6c['bLobS'],_0xd9ec6c['joqhM'],_0x3f5bfc(_0x4c3470[_0x1e157e(0x40f)+'Pct'],0x865+0x1aea+-0x231d,0x1022+0x58*-0x6d+0x1682,0x1f3*0x1+0x426+-0x614,_0x48c51f=>{var _0x1fe7dc=_0x1e157e;_0x4c3470[_0x1fe7dc(0x40f)+_0x1fe7dc(0x660)]=_0x48c51f,_0x3b8213[_0x1fe7dc(0x66c)](_0x5e0afc);}))]),_0x5849b8(_0xd9ec6c[_0x1e157e(0x47b)],_0x1e157e(0x639)+_0x1e157e(0x25c)+'ement'+'.jump'+'Force'+_0x1e157e(0x222)+'both\x20'+_0x1e157e(0x72f)+_0x1e157e(0x6f1)+_0x1e157e(0x4e2),_0xd9ec6c[_0x1e157e(0x421)](_0x4c3470['jumpP'+'ct'],-0x1*-0xa67+-0x4ac+-0x557)||_0x4c3470['gravi'+'tyPct']!==0x255b+0x2*0x38c+0x2c0f*-0x1,null,[_0xd9ec6c[_0x1e157e(0x2f0)](_0x502c8e,_0xd9ec6c[_0x1e157e(0x2c4)],null,_0x3f5bfc(_0x4c3470[_0x1e157e(0x1d8)+'ct'],0x1bb8+0x19e*-0x6+-0x2*0x8e9,0x5*0x476+-0x1234+-0x2ee,-0x1*0x146e+-0xf89+-0x5e*-0x62,_0x1d2f37=>{_0x4c3470['jumpP'+'ct']=_0x1d2f37,_0x5e0afc();})),_0xd9ec6c[_0x1e157e(0x2f0)](_0x502c8e,'Gravi'+_0x1e157e(0x226),'lower'+_0x1e157e(0x63c)+_0x1e157e(0x3da),_0x3f5bfc(_0x4c3470[_0x1e157e(0x72f)+_0x1e157e(0x519)],0xe9*-0x13+0x1e*0x11d+0x1*-0x1011,0x2*-0xd23+-0x7d*-0x42+-0x52c,0x58f*0x7+0x3f*-0x25+-0x1*0x1dc9,_0x190edc=>{var _0x3df091=_0x1e157e;_0x4c3470[_0x3df091(0x72f)+'tyPct']=_0x190edc,_0x5e0afc();}))]),_0x5849b8(_0x1e157e(0x4e7)+_0x1e157e(0x383),'Zeroe'+_0x1e157e(0x25c)+_0x1e157e(0x4a4)+_0x1e157e(0x3e3)+'JumpT'+'ime\x20s'+_0x1e157e(0x51a)+_0x1e157e(0x4e6)+_0x1e157e(0x630)+'down\x20'+_0x1e157e(0x2c3)+'\x20appl'+'ies.',_0x4c3470['bhop'],_0x1bf55f=>{var _0x17f6dd=_0x1e157e;_0x4c3470[_0x17f6dd(0x2d7)]=_0x1bf55f,_0x5e0afc();},[])];}if(_0x3bd6a2===_0x1e157e(0x27e)+'l')return[_0xd9ec6c['plNYF'](_0x5849b8,'Keyst'+'rokes',_0xd9ec6c['QTqda'],_0x4c3470['keyst'+_0x1e157e(0x36d)],_0x5ad556=>{var _0x91fc73=_0x1e157e;if(_0xd9ec6c['GSzXO'](_0x91fc73(0x75c),_0xd9ec6c[_0x91fc73(0x67b)])){var _0x1c0c8f=new _0x55b82c(_0x313a01)['readF'+_0x91fc73(0x260)](_0x5e66cf,_0x3da4e5);_0x46d6d0[_0x91fc73(0x67e)](_0x11fb33,_0x1c0c8f!==_0x12138d?_0x1c0c8f['val']():null);}else _0x4c3470[_0x91fc73(0x264)+_0x91fc73(0x36d)]=_0x5ad556,_0xd9ec6c['eKjbH'](_0x5e0afc);},[_0x502c8e('Posit'+'ion',null,_0xd9ec6c[_0x1e157e(0x218)](_0x85c53,_0x4c3470['ksPos'],[['bl',_0x1e157e(0x70e)+'m\x20lef'+'t'],['br','Botto'+_0x1e157e(0x468)+'ht'],['ml','Left\x20'+_0x1e157e(0x363)+'e']],_0x4b2c3d=>{var _0x228792=_0x1e157e,_0x246c67={'aBhyQ':function(_0x7e27fe,_0x2a5956){return _0x7e27fe+_0x2a5956;},'InOoh':_0x228792(0x3ab),'jighd':function(_0x55902f,_0xbc0c){return _0x55902f(_0xbc0c);},'sFufD':_0x228792(0x49f)};if(_0x3b8213[_0x228792(0x541)](_0x228792(0x5f7),'GwCJE')){var _0x5a5f28={'TnVdS':function(_0x91dbcb,_0x1f7e6f){var _0x1885e2=_0x228792;return _0x246c67[_0x1885e2(0x213)](_0x91dbcb,_0x1f7e6f);},'fTzDD':_0x246c67['InOoh'],'XIfGM':function(_0x419302,_0x3283a1){var _0x2b0194=_0x228792;return _0x246c67[_0x2b0194(0x6bd)](_0x419302,_0x3283a1);}};_0x528c1d['addEv'+'entLi'+_0x228792(0x747)+'r'](_0x246c67[_0x228792(0x5a8)],_0x233095=>{var _0x449fec=_0x228792;try{var _0x1bb283=_0x233095&&(_0x233095[_0x449fec(0x387)+'ge']||_0x233095['error']&&_0x233095[_0x449fec(0x49f)][_0x449fec(0x387)+'ge'])||_0x449fec(0x5b3)+'wn';if(_0x233095&&_0x233095[_0x449fec(0x3fd)+'ame'])_0x1bb283+=_0x5a5f28[_0x449fec(0x58a)](_0x5a5f28['fTzDD'],_0x5a5f28['XIfGM'](_0x4b58fc,_0x233095['filen'+_0x449fec(0x21a)])[_0x449fec(0x64e)]('/')['pop']())+':'+(_0x233095['linen'+'o']||'?');_0x3b8ec7[_0x449fec(0x23a)+'rror']=_0x5a5f28['XIfGM'](_0xc242c5,_0x1bb283)[_0x449fec(0x506)](0x321+-0x1ca8+-0x1987*-0x1,0xb74*0x1+-0x1b95+0x10c1);}catch(_0x3e41ac){}});}else _0x4c3470['ksPos']=_0x4b2c3d,_0x3b8213[_0x228792(0x6f9)](_0x5e0afc);})),_0x502c8e(_0x1e157e(0x1be),null,_0x3f5bfc(_0x4c3470['ksSca'+'le'],0x764+-0xc4f*0x1+0x4eb+0.6,-0xe3c+0x1455+-0x618+0.6000000000000001,-0x1*0x21b4+0x1*-0x229f+-0x4453*-0x1+0.05,_0x5216cf=>{var _0x5b1006=_0x1e157e;_0x4c3470[_0x5b1006(0x6fc)+'le']=_0x5216cf,_0x5e0afc();})),_0xd9ec6c[_0x1e157e(0x3ca)](_0x502c8e,'CPS\x20r'+'eadou'+'t',null,_0x5e301c(_0x4c3470['ksCps'],_0x43ab35=>{var _0xd13436=_0x1e157e;_0x4c3470[_0xd13436(0x758)]=_0x43ab35,_0x5e0afc();}))]),_0xd9ec6c[_0x1e157e(0x4c0)](_0x5849b8,_0x1e157e(0x508)+_0x1e157e(0x4c6),_0x1e157e(0x3d7)+_0x1e157e(0x5af)+'ter\x20c'+_0x1e157e(0x235)+_0x1e157e(0x6fb),_0x4c3470['cross'+_0x1e157e(0x4c6)],_0x2d9420=>{var _0x17aaac=_0x1e157e;_0xd9ec6c['GSzXO']('nVtvj',_0x17aaac(0x5e7))?(_0x4c3470[_0x17aaac(0x723)+'hair']=_0x2d9420,_0xd9ec6c[_0x17aaac(0x515)](_0x5e0afc)):(_0x4ea566['fps']=_0x510d05,_0xf6da13());},[_0xd9ec6c['ojqSc'](_0x502c8e,_0x1e157e(0x1be),null,_0xd9ec6c[_0x1e157e(0x50c)](_0x3f5bfc,_0x4c3470['chSiz'+'e'],0x29b+0x4e9*-0x5+-0x2*-0xaf9+0.5,-0xd*-0x95+-0x16d3*-0x1+-0x1e62+0.5,-0x1a70+0x2000+-0x590+0.1,_0x45e337=>{var _0x3b6943=_0x1e157e;_0x4c3470[_0x3b6943(0x5f5)+'e']=_0x45e337,_0x3b8213[_0x3b6943(0x66c)](_0x5e0afc);})),_0xd9ec6c[_0x1e157e(0x333)](_0x502c8e,_0x1e157e(0x512),null,_0xd9ec6c['TpwKj'](_0x1360f8,_0x4c3470[_0x1e157e(0x4d6)+'or'],_0xed7dc9=>{var _0x1512e9=_0x1e157e;if(_0xd9ec6c[_0x1512e9(0x421)]('ThcIJ',_0xd9ec6c[_0x1512e9(0x316)]))try{var _0x391479=new _0x230ca0(_0x303b13)[_0x1512e9(0x49d)+'ield'](_0x3f6795,_0x3b8213[_0x1512e9(0x34a)]);return _0x391479?_0x391479['val']():0x135f*-0x2+-0x9*0x33+-0x481*-0x9;}catch(_0xd9989f){return 0x19ef+-0xf50+-0xa9f;}else _0x4c3470[_0x1512e9(0x4d6)+'or']=_0xed7dc9,_0xd9ec6c[_0x1512e9(0x706)](_0x5e0afc);}))]),_0xd9ec6c[_0x1e157e(0x670)](_0x5849b8,_0x1e157e(0x238)+_0x1e157e(0x310),_0x1e157e(0x3b9)+_0x1e157e(0x550)+'y.',_0x4c3470[_0x1e157e(0x461)],null,[_0x502c8e(_0x1e157e(0x4ce)+'ounte'+'r',null,_0xd9ec6c[_0x1e157e(0x28e)](_0x5e301c,_0x4c3470[_0x1e157e(0x461)],_0x13235a=>{var _0x2f12ed=_0x1e157e;_0x4c3470[_0x2f12ed(0x461)]=_0x13235a,_0x3b8213[_0x2f12ed(0x66c)](_0x5e0afc);})),_0x42f2c9('No\x20en'+_0x1e157e(0x4dd)+_0x1e157e(0x1bd)+_0x1e157e(0x4ca)+'is\x20bu'+_0x1e157e(0x482)+_0x1e157e(0x337)+_0x1e157e(0x597)+_0x1e157e(0x516)+'ePlay'+'ers\x20t'+'o\x20pig'+'gybac'+_0x1e157e(0x5f0))])];if(_0xd9ec6c[_0x1e157e(0x69a)](_0x3bd6a2,_0x1e157e(0x1d6))){if(_0xd9ec6c[_0x1e157e(0x6a6)](_0x1e157e(0x5ea),_0x1e157e(0x5ea))){if(!_0x35fdfa['__sak'+'ura'])_0x1ad5f6[_0x1e157e(0x368)+'e']('mouse'+_0xd9ec6c[_0x1e157e(0x626)](_0x5bb20e[_0x1e157e(0x617)+'n'],-0x1f5e+0x9ef+0x2ae*0x8));}else return[_0x5849b8(_0x1e157e(0x68b)+'ck',_0x1e157e(0x5ef)+'\x20kour'+_0x1e157e(0x4c5)+'\x20bann'+'er\x20sl'+'ots.',_0x4c3470['adblo'+'ck'],_0x151c98=>{var _0xc419b7=_0x1e157e;_0x4c3470[_0xc419b7(0x24a)+'ck']=_0x151c98,_0x3b8213[_0xc419b7(0x66c)](_0x5e0afc);},[_0xd9ec6c[_0x1e157e(0x55c)](_0x42f2c9,_0x1e157e(0x459)+_0x1e157e(0x2a8)+'ct\x20on'+_0x1e157e(0x3f5)+_0x1e157e(0x2ed)+_0x1e157e(0x34c)+'ggled'+'.')])];}return[_0x5849b8(_0x1e157e(0x299)+_0x1e157e(0x547)+_0x1e157e(0x59a)+'lay\x20o'+_0x1e157e(0x4ae),_0xd9ec6c[_0x1e157e(0x35a)],_0x4c3470[_0x1e157e(0x357)+_0x1e157e(0x4ac)],_0x1d2ad1=>{var _0xcdfc75=_0x1e157e;_0x4c3470['safeM'+'ode']=_0x1d2ad1,_0x3b8213[_0xcdfc75(0x6f9)](_0x5e0afc),location[_0xcdfc75(0x40b)+'d']();},[_0xd9ec6c[_0x1e157e(0x1b2)](_0x42f2c9,'Appli'+_0x1e157e(0x30f)+'\x20relo'+_0x1e157e(0x23e)+_0x1e157e(0x23d)+'ches\x20'+_0x1e157e(0x611)+_0x1e157e(0x2aa)+_0x1e157e(0x361)+'de,\x20t'+_0x1e157e(0x268)+_0x1e157e(0x3ce)+'is\x20ho'+'ok-re'+'lated'+_0x1e157e(0x713)+'ll\x20me'+_0x1e157e(0x4e4)+_0x1e157e(0x4eb)+_0x1e157e(0x54e)+'ied\x20c'+_0x1e157e(0x1f4))]),_0xd9ec6c['plNYF'](_0x5849b8,'ACTk\x20'+_0x1e157e(0x592)+'r',_0x1e157e(0x567)+_0x1e157e(0x1f7)+'odeSt'+_0x1e157e(0x305)+_0x1e157e(0x20c)+'ors\x20a'+'t\x20sta'+_0x1e157e(0x5e0)+_0x1e157e(0x632)+_0x1e157e(0x671)+_0x1e157e(0x727)+_0x1e157e(0x349)+'\x20Keep'+_0x1e157e(0x6fa),_0x4c3470[_0x1e157e(0x62f)+_0x1e157e(0x588)],_0x5cda55=>{var _0x563b0e=_0x1e157e;_0x4c3470[_0x563b0e(0x62f)+'ill']=_0x5cda55,_0x5e0afc();},[_0xd9ec6c['ZoKRy'](_0x42f2c9,'God/d'+_0x1e157e(0x736)+'/rapi'+_0x1e157e(0x44c)+_0x1e157e(0x581)+_0x1e157e(0x480)+'\x20ban\x20'+'risk\x20'+'even\x20'+'with\x20'+'this\x20'+_0x1e157e(0x53a),!![])]),_0xd9ec6c[_0x1e157e(0x696)](_0x5849b8,_0x1e157e(0x71d)+'r','These'+_0x1e157e(0x6c7)+_0x1e157e(0x380)+'ver-v'+_0x1e157e(0x516)+_0x1e157e(0x4ab)+'ces.',!![],null,[_0x502c8e(_0x1e157e(0x6bf)+_0x1e157e(0x25a)+_0x1e157e(0x394)+'s',null,_0xd9ec6c['yaEUY'](_0x54d0e8,'Reset',()=>{_0x4c3470={..._0x101be1},_0x5e0afc(),location['reloa'+'d']();}))])];}else _0x3e46fe[_0x1e157e(0x2a9)+'ntDef'+_0x1e157e(0x37e)](),_0xd9ec6c[_0x1e157e(0x37b)](_0x30822c);}var _0x35943c=null;function _0xcc345a(_0x43d989){var _0x133c03=_0x166263;if(_0x41b0f4[_0x133c03(0x5c7)]!=='Hviqd'){_0x2a0501=_0x43d989;if(!_0x35943c){var _0x5338f1=document[_0x133c03(0x3c9)+'eElem'+'ent']('style');_0x5338f1[_0x133c03(0x356)+_0x133c03(0x4cb)+'t']=_0x53acb0,_0x285c6d[_0x133c03(0x719)+'dChil'+'d'](_0x5338f1),_0x35943c=_0x5d0af3(),_0x285c6d[_0x133c03(0x719)+'dChil'+'d'](_0x35943c),requestAnimationFrame(()=>_0x35943c['class'+_0x133c03(0x715)][_0x133c03(0x5e9)](_0x133c03(0x2d6)));}_0x35943c['class'+_0x133c03(0x715)]['toggl'+'e'](_0x133c03(0x2d6),_0x43d989);}else _0x11c183['setIt'+'em'](_0xd9ec6c['iUyRI'],_0x462cc2[_0x133c03(0x661)+_0x133c03(0x64c)](_0x4a68de));}function _0x465fd2(){var _0x524fd4=_0x166263;_0x41b0f4[_0x524fd4(0x5fb)](_0xcc345a,!_0x2a0501);}function _0x5d0af3(){var _0x14bb7f=_0x166263,_0x2fc06f={'ADmXG':function(_0x382f71,_0x51885b){return _0x382f71(_0x51885b);},'JihGK':'rgba('+_0x14bb7f(0x652)+_0x14bb7f(0x307)+_0x14bb7f(0x3de)+')','DXPes':_0x14bb7f(0x360)+_0x14bb7f(0x38d)+_0x14bb7f(0x24c)+'ospac'+'e,mon'+_0x14bb7f(0x491)+'e','VsslL':_0x41b0f4['Tcyde']},_0x2c387b=document[_0x14bb7f(0x3c9)+_0x14bb7f(0x3f7)+_0x14bb7f(0x71e)](_0x41b0f4['CcrpC']);_0x2c387b['class'+_0x14bb7f(0x278)]=_0x14bb7f(0x69f)+'nel';var _0x5c5271=document[_0x14bb7f(0x3c9)+_0x14bb7f(0x3f7)+_0x14bb7f(0x71e)](_0x14bb7f(0x625));_0x5c5271['class'+_0x14bb7f(0x278)]=_0x41b0f4['WHEQl'];var _0x2638b8=document[_0x14bb7f(0x3c9)+'eElem'+'ent'](_0x14bb7f(0x664));_0x2638b8[_0x14bb7f(0x228)+_0x14bb7f(0x278)]=_0x14bb7f(0x5c9)+'go',_0x2638b8['inner'+'HTML']=_0x41b0f4[_0x14bb7f(0x622)],_0x5c5271[_0x14bb7f(0x719)+_0x14bb7f(0x756)+'d'](_0x2638b8);var _0x23744a=document[_0x14bb7f(0x3c9)+_0x14bb7f(0x3f7)+_0x14bb7f(0x71e)](_0x41b0f4[_0x14bb7f(0x3f8)]);_0x23744a[_0x14bb7f(0x228)+'Name']=_0x41b0f4['oXHoA'];var _0x4c8c45=document['creat'+'eElem'+'ent'](_0x41b0f4['MviDG']);_0x4c8c45[_0x14bb7f(0x228)+'Name']=_0x41b0f4[_0x14bb7f(0x601)];var _0x1c84dc=document[_0x14bb7f(0x3c9)+_0x14bb7f(0x3f7)+'ent'](_0x41b0f4[_0x14bb7f(0x3f8)]);_0x1c84dc['class'+'Name']=_0x41b0f4['GducH'];var _0x34037e=document['creat'+_0x14bb7f(0x3f7)+'ent']('h2');_0x34037e[_0x14bb7f(0x228)+_0x14bb7f(0x278)]=_0x41b0f4[_0x14bb7f(0x54c)],_0x34037e['textC'+'onten'+'t']=_0x14bb7f(0x1b9)+_0x14bb7f(0x640)+'r';var _0x16e8db=document[_0x14bb7f(0x3c9)+_0x14bb7f(0x3f7)+_0x14bb7f(0x71e)](_0x14bb7f(0x33e));_0x16e8db[_0x14bb7f(0x228)+_0x14bb7f(0x278)]=_0x41b0f4['myxCr'],_0x16e8db['textC'+_0x14bb7f(0x4cb)+'t']='kours'+_0x14bb7f(0x6fd)+_0x14bb7f(0x288)+'enu',_0x1c84dc['appen'+'d'](_0x34037e,_0x16e8db);var _0xd8b21e=document['creat'+'eElem'+_0x14bb7f(0x71e)]('butto'+'n');_0xd8b21e[_0x14bb7f(0x499)]='butto'+'n',_0xd8b21e[_0x14bb7f(0x228)+'Name']=_0x41b0f4[_0x14bb7f(0x705)],_0xd8b21e[_0x14bb7f(0x4a6)]=_0x14bb7f(0x28a),_0xd8b21e['inner'+'HTML']=_0x14bb7f(0x5b2)+_0x14bb7f(0x4f5)+'ox=\x220'+_0x14bb7f(0x60f)+_0x14bb7f(0x22f)+_0x14bb7f(0x2f8)+'\x20d=\x22M'+_0x14bb7f(0x38f)+'2\x2012M'+_0x14bb7f(0x570)+_0x14bb7f(0x5bd)+_0x14bb7f(0x4e5)+_0x14bb7f(0x1f5),_0xd8b21e['oncli'+'ck']=()=>_0xcc345a(![]),_0x4c8c45[_0x14bb7f(0x719)+'d'](_0x1c84dc,_0xd8b21e);var _0x1e1136=document[_0x14bb7f(0x3c9)+'eElem'+_0x14bb7f(0x71e)](_0x41b0f4['CcrpC']);_0x1e1136[_0x14bb7f(0x228)+'Name']=_0x41b0f4[_0x14bb7f(0x2b2)],_0x23744a['appen'+'d'](_0x4c8c45,_0x1e1136),_0x2c387b['appen'+'d'](_0x5c5271,_0x23744a);var _0x4e6b04=new Map();for(var _0xd53c8d of _0x1369ed){var _0x4e4337=document['creat'+'eElem'+_0x14bb7f(0x71e)](_0x14bb7f(0x617)+'n');_0x4e4337[_0x14bb7f(0x499)]=_0x14bb7f(0x617)+'n',_0x4e4337[_0x14bb7f(0x228)+'Name']=_0x41b0f4['KeZAF'],_0x4e4337['title']=_0xd53c8d[_0x14bb7f(0x324)],_0x4e4337[_0x14bb7f(0x6b1)+'HTML']=_0x41b0f4[_0x14bb7f(0x718)](_0x41b0f4[_0x14bb7f(0x53b)],_0xd53c8d['label'])+_0x41b0f4[_0x14bb7f(0x63e)],_0x4e4337[_0x14bb7f(0x4b0)+'ck']=(_0x2f4063=>()=>_0x4fa98a(_0x2f4063))(_0xd53c8d['id']),_0x4e6b04[_0x14bb7f(0x67e)](_0xd53c8d['id'],_0x4e4337),_0x5c5271['appen'+'dChil'+'d'](_0x4e4337);}function _0x4fa98a(_0x1f3984){var _0x2664c2=_0x14bb7f,_0xe23de1={'DlbuS':_0x2664c2(0x603)+'|8|7|'+'6|10|'+_0x2664c2(0x517)+'|4','kMwjN':function(_0x1b5c95,_0x20755b){return _0x1b5c95||_0x20755b;},'OnkCV':function(_0x21665c,_0x11f981,_0x5ad2e2){return _0x21665c(_0x11f981,_0x5ad2e2);},'BCvTv':_0x2664c2(0x3bf)+'9d','FLnwx':function(_0x1c9f81,_0x1befa6){return _0x2fc06f['ADmXG'](_0x1c9f81,_0x1befa6);},'ejcjT':_0x2fc06f[_0x2664c2(0x564)],'tvgQE':_0x2fc06f[_0x2664c2(0x2e2)]};if(_0x2fc06f[_0x2664c2(0x1d4)]!==_0x2fc06f[_0x2664c2(0x1d4)]){var _0x4c38af=_0xe23de1[_0x2664c2(0x234)]['split']('|'),_0x214c9c=0x1af*0x1+-0x568+-0x3b9*-0x1;while(!![]){switch(_0x4c38af[_0x214c9c++]){case'0':var _0x314e6f={'dssEk':function(_0x4b14ac,_0x31cc63){var _0x38d5d6=_0x2664c2;return _0xe23de1[_0x38d5d6(0x4ef)](_0x4b14ac,_0x31cc63);}};continue;case'1':_0x5f4d07[_0x2664c2(0x39d)]();continue;case'2':_0xe23de1[_0x2664c2(0x340)](_0xb23142,'SAKUR'+'A\x20KOU'+_0x2664c2(0x620)+'1',_0xe23de1[_0x2664c2(0x6ce)]);continue;case'3':if(_0xed6520['fps'])_0xe23de1['FLnwx'](_0xb23142,_0x591f17+'\x20FPS');continue;case'4':_0x28d132['resto'+'re']();continue;case'5':if(!_0x1a052c[_0x2664c2(0x55b)+_0x2664c2(0x249)])_0xe23de1['OnkCV'](_0xb23142,'waiti'+'ng\x20fo'+'r\x20gam'+'e…',_0xe23de1['ejcjT']);continue;case'6':var _0x2d6cae=-0x11e1*0x1+0xc9e+0xd*0x6b,_0x1381b7=0x7eb*0x3+-0x1*0x1854+-0x3*-0x35;continue;case'7':_0x3b33fe['textB'+'aseli'+'ne']=_0x2664c2(0x75b);continue;case'8':_0x371c0e[_0x2664c2(0x5fa)+_0x2664c2(0x2b7)]='left';continue;case'9':_0x452b1e[_0x2664c2(0x571)]=_0xe23de1[_0x2664c2(0x3c8)];continue;case'10':var _0xb23142=(_0x3b11d6,_0x5c31b9)=>{var _0x31cb6b=_0x2664c2;_0x47b2bd[_0x31cb6b(0x2b6)+_0x31cb6b(0x5a2)]=_0x314e6f[_0x31cb6b(0x2cc)](_0x5c31b9,_0x31cb6b(0x1e6)+_0x31cb6b(0x301)+_0x31cb6b(0x5f8)+_0x31cb6b(0x755)+'5)'),_0xc74015[_0x31cb6b(0x544)+'ext'](_0x3b11d6,_0x1381b7,_0x2d6cae),_0x2d6cae+=0x11a7*-0x1+-0x2*0x9bb+0x252d;};continue;}break;}}else{_0x4b44e9[_0x2664c2(0x533)]=_0x1f3984,_0x1d936d();var _0xe8665e=_0x1369ed[_0x2664c2(0x6cf)](_0x5ee172=>_0x5ee172['id']===_0x1f3984)||_0x1369ed[0x1da1+-0x25b9+0x818];_0x34037e[_0x2664c2(0x356)+_0x2664c2(0x4cb)+'t']=_0x2664c2(0x1b9)+_0x2664c2(0x640)+'r\x20—\x20'+_0xe8665e[_0x2664c2(0x324)];for(var [_0x285e19,_0x54e04d]of _0x4e6b04)_0x54e04d['class'+_0x2664c2(0x715)]['toggl'+'e'](_0x2664c2(0x400)+'e',_0x285e19===_0x1f3984);_0x1e1136[_0x2664c2(0x744)+_0x2664c2(0x4b7)+_0x2664c2(0x204)](..._0x23f37b(_0x1f3984));}}return _0x4fa98a(_0x4b44e9[_0x14bb7f(0x533)]||_0x14bb7f(0x2cd)+'t'),setInterval(()=>{var _0x24b38b=_0x14bb7f,_0x4d0e4d={'RjpUv':_0x24b38b(0x664),'WKUmc':function(_0x88ecfb,_0x49736e){return _0x88ecfb+_0x49736e;},'CVYjh':_0x24b38b(0x422)+'te'};if(!_0x2a0501)return;var _0x5a9509=_0x1e1136['child'+_0x24b38b(0x752)];for(var _0x2d8d6d=0x1657+-0x176*-0x1+-0x2a5*0x9;_0x2d8d6d<_0x5a9509['lengt'+'h'];_0x2d8d6d++){if(_0x24b38b(0x733)!==_0xd9ec6c[_0x24b38b(0x757)]){var _0x37adaa=_0x3cebba['creat'+'eElem'+'ent'](_0x4d0e4d[_0x24b38b(0x33a)]);return _0x37adaa['class'+_0x24b38b(0x278)]=_0x4d0e4d[_0x24b38b(0x277)](_0x4d0e4d['CVYjh'],_0x3c74da?'\x20err':''),_0x37adaa['textC'+'onten'+'t']=_0x30583d,_0x37adaa;}else{var _0x5d8556=_0x5a9509[_0x2d8d6d][_0x24b38b(0x230)+'Selec'+_0x24b38b(0x4fa)](_0x24b38b(0x5d0)+'desc');_0x5d8556&&(_0x5d8556['textC'+'onten'+'t'][_0x24b38b(0x3b5)+'Of']('UWMK')===-0x1b13+0x6f3+-0x8*-0x284||_0xd9ec6c[_0x24b38b(0x5bc)](_0x5d8556[_0x24b38b(0x356)+_0x24b38b(0x4cb)+'t']['index'+'Of']('SAFE'),-0x15e1+0xcfb+0x8e6))&&(_0x5d8556[_0x24b38b(0x356)+_0x24b38b(0x4cb)+'t']=_0xded397['safeM'+'ode']?_0xd9ec6c[_0x24b38b(0x53f)]:_0xded397[_0x24b38b(0x46e)]?_0xd9ec6c['guyRW'](_0xd9ec6c[_0x24b38b(0x1ef)](_0xd9ec6c[_0x24b38b(0x586)](_0xd9ec6c[_0x24b38b(0x67d)](_0xd9ec6c['iyfOi'](_0xd9ec6c[_0x24b38b(0x326)](_0xd9ec6c['pNCKB']+_0xded397[_0x24b38b(0x4eb)+'Ok']+'/',_0xded397[_0x24b38b(0x4eb)+'Total']),_0x24b38b(0x211)+'s')+_0xd9ec6c['oviAf'],_0xded397['gameL'+_0x24b38b(0x249)]?_0x24b38b(0x62b)+'d':'loadi'+'ng'),_0xd9ec6c[_0x24b38b(0x3aa)])+(_0xded397[_0x24b38b(0x410)+'ers']?_0x24b38b(0x2ca):_0xd9ec6c['gjwNi']),_0xd9ec6c[_0x24b38b(0x1a8)])+(_0xded397['movem'+_0x24b38b(0x210)]?_0x24b38b(0x2ca):_0xd9ec6c['gjwNi']),_0xded397[_0x24b38b(0x23a)+'rror']?'\x20|\x20ER'+_0x24b38b(0x30b)+_0xded397[_0x24b38b(0x23a)+'rror']:''):_0x24b38b(0x66f)+'MISSI'+'NG\x20-\x20'+'overl'+_0x24b38b(0x650)+'ly\x20(r'+'einst'+_0x24b38b(0x451)+'he\x20us'+'erscr'+_0x24b38b(0x289));}}},-0x2537+0xcd*0x1+0x2852),_0x2c387b;}var _0x53acb0=_0x166263(0x458)+_0x166263(0x555)+_0x166263(0x556)+'l:\x20in'+_0x166263(0x5c0)+_0x166263(0x55a)+_0x166263(0x700)+_0x166263(0x44e)+_0x166263(0x591)+'ng:\x20b'+'order'+_0x166263(0x4d8)+'\x20marg'+'in:\x200'+_0x166263(0x572)+_0x166263(0x514)+'ily:\x20'+'\x22Inte'+_0x166263(0x49a)+'Segoe'+_0x166263(0x330)+'\x20syst'+'em-ui'+_0x166263(0x5e1)+_0x166263(0x486)+_0x166263(0x64b)+_0x166263(0x458)+'.mn-p'+'anel\x20'+_0x166263(0x6e2)+'ition'+_0x166263(0x405)+_0x166263(0x6ab)+_0x166263(0x2e3)+'ht:\x202'+'4px;\x20'+_0x166263(0x381)+_0x166263(0x47e)+'px;\x20w'+'idth:'+_0x166263(0x731)+_0x166263(0x37a)+_0x166263(0x306)+'c(100'+_0x166263(0x396)+_0x166263(0x346)+');\x20ma'+_0x166263(0x6e9)+'ght:\x20'+_0x166263(0x739)+_0x166263(0x47f)+_0x166263(0x717)+'(100v'+_0x166263(0x52d)+'8px))'+_0x166263(0x354)+'\x20\x20\x20di'+_0x166263(0x73a)+_0x166263(0x465)+_0x166263(0x30d)+_0x166263(0x3f4)+_0x166263(0x253)+_0x166263(0x573)+'g:\x2010'+'px;\x20b'+_0x166263(0x298)+_0x166263(0x426)+_0x166263(0x331)+'2px;\x20'+'point'+_0x166263(0x635)+_0x166263(0x646)+_0x166263(0x656)+';\x0a\x20\x20\x20'+_0x166263(0x688)+_0x166263(0x291)+'und:\x20'+_0x166263(0x1e6)+_0x166263(0x432)+_0x166263(0x751)+'82);\x20'+_0x166263(0x6b9)+_0x166263(0x67a)+'ilter'+':\x20blu'+_0x166263(0x647)+'x)\x20sa'+_0x166263(0x334)+_0x166263(0x2d9)+_0x166263(0x40d)+_0x166263(0x483)+_0x166263(0x397)+'kdrop'+_0x166263(0x46a)+'er:\x20b'+'lur(2'+'2px)\x20'+'satur'+_0x166263(0x749)+_0x166263(0x3e8)+_0x166263(0x458)+_0x166263(0x3fa)+'-shad'+'ow:\x200'+_0x166263(0x2fc)+_0x166263(0x2f6)+'gba(2'+_0x166263(0x376)+_0x166263(0x4d2)+_0x166263(0x336)+_0x166263(0x215)+'et\x200\x20'+_0x166263(0x2cb)+_0x166263(0x70d)+_0x166263(0x1d9)+_0x166263(0x301)+_0x166263(0x2c2)+_0x166263(0x74b)+_0x166263(0x6a0)+_0x166263(0x616)+_0x166263(0x70d)+_0x166263(0x203)+_0x166263(0x5c3)+');\x0a\x20\x20'+_0x166263(0x450)+_0x166263(0x256)+_0x166263(0x57f)+'\x20tran'+_0x166263(0x5f2)+_0x166263(0x455)+_0x166263(0x51b)+_0x166263(0x60d)+_0x166263(0x236)+_0x166263(0x5b4)+_0x166263(0x635)+_0x166263(0x646)+'\x20none'+';\x20tra'+_0x166263(0x2ec)+_0x166263(0x263)+_0x166263(0x256)+_0x166263(0x2b0)+'s\x20eas'+'e,\x20tr'+'ansfo'+_0x166263(0x5cb)+'5s\x20cu'+'bic-b'+_0x166263(0x6c6)+_0x166263(0x323)+_0x166263(0x754)+_0x166263(0x4ed)+'\x20\x20\x20\x20\x20'+_0x166263(0x5fc)+_0x166263(0x42e)+'6eef2'+_0x166263(0x572)+'t-siz'+'e:\x2013'+'px;\x20}'+_0x166263(0x458)+'.mn-p'+'anel.'+_0x166263(0x2d6)+'\x20{\x20op'+_0x166263(0x1c2)+':\x201;\x20'+_0x166263(0x2b3)+_0x166263(0x243)+_0x166263(0x49c)+_0x166263(0x348)+'nter-'+_0x166263(0x4b2)+_0x166263(0x505)+_0x166263(0x2ea)+_0x166263(0x458)+_0x166263(0x730)+_0x166263(0x46b)+_0x166263(0x32a)+_0x166263(0x2dd)+_0x166263(0x742)+_0x166263(0x681)+_0x166263(0x542)+_0x166263(0x64d)+':\x20col'+'umn;\x20'+_0x166263(0x1ff)+'-item'+_0x166263(0x58f)+_0x166263(0x32c)+_0x166263(0x462)+'\x204px;'+_0x166263(0x4a0)+_0x166263(0x5a1)+'px;\x20f'+'lex:\x20'+_0x166263(0x255)+'\x20padd'+'ing:\x20'+'12px\x20'+(_0x166263(0x531)+'rder-'+_0x166263(0x350)+_0x166263(0x32b)+_0x166263(0x4ba)+'\x20\x20\x20\x20\x20'+'backg'+_0x166263(0x24f)+_0x166263(0x551)+'a(255'+_0x166263(0x54b)+_0x166263(0x328)+_0x166263(0x292)+'\x20box-'+'shado'+_0x166263(0x4a5)+_0x166263(0x737)+'\x200\x200\x20'+_0x166263(0x2f6)+_0x166263(0x6e4)+_0x166263(0x376)+'5,255'+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x166263(0x1b6)+_0x166263(0x6e6)+'ispla'+'y:\x20gr'+_0x166263(0x2a1)+_0x166263(0x6f8)+'items'+_0x166263(0x50a)+'ter;\x20'+_0x166263(0x498)+':\x2032p'+_0x166263(0x45c)+'ight:'+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x166263(0x1b6)+_0x166263(0x604)+_0x166263(0x6eb)+_0x166263(0x219)+_0x166263(0x27a)+_0x166263(0x66b)+'ht:\x202'+_0x166263(0x3fc)+'overf'+'low:\x20'+'visib'+_0x166263(0x511)+_0x166263(0x375)+_0x166263(0x41e)+_0x166263(0x6b0)+_0x166263(0x62d)+'\x200\x204p'+_0x166263(0x33f)+'a(255'+_0x166263(0x242)+'157,.'+'8));\x20'+'}\x0a\x20\x20\x20'+_0x166263(0x63a)+_0x166263(0x28c)+_0x166263(0x32a)+_0x166263(0x2dd)+_0x166263(0x742)+'\x20alig'+'n-ite'+_0x166263(0x6f5)+'enter'+_0x166263(0x1ac)+_0x166263(0x3d0)+_0x166263(0x672)+'nt:\x20c'+_0x166263(0x37d)+_0x166263(0x5ab)+'th:\x205'+_0x166263(0x4b6)+_0x166263(0x423)+'t:\x2034'+_0x166263(0x3f0)+_0x166263(0x298)+_0x166263(0x5cc)+'borde'+_0x166263(0x500)+_0x166263(0x3cd)+_0x166263(0x61d)+_0x166263(0x458)+_0x166263(0x4de)+'kgrou'+_0x166263(0x304)+'ransp'+'arent'+';\x20col'+'or:\x20r'+_0x166263(0x6e4)+_0x166263(0x1ec)+'8,242'+_0x166263(0x708)+'\x20curs'+_0x166263(0x1ce)+'ointe'+_0x166263(0x72c)+_0x166263(0x3c4)+_0x166263(0x266)+'0px;\x20'+_0x166263(0x2f2)+'weigh'+_0x166263(0x489)+'0;\x20}\x0a'+_0x166263(0x4ec)+_0x166263(0x41f)+'b:hov'+_0x166263(0x26e)+'color'+_0x166263(0x551)+_0x166263(0x507)+',238,'+'242,.'+'8);\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-t'+_0x166263(0x750)+'tive\x20'+'{\x20col'+_0x166263(0x4d0)+'ff6b9'+'d;\x20ba'+'ckgro'+_0x166263(0x6de)+_0x166263(0x1e6)+_0x166263(0x652)+'07,15'+_0x166263(0x31f)+_0x166263(0x55a)+'\x20\x20\x20.m'+'n-mai'+_0x166263(0x614)+'lex:\x20'+'1;\x20mi'+_0x166263(0x31c)+'th:\x200'+_0x166263(0x71c)+'play:'+_0x166263(0x681)+';\x20fle'+_0x166263(0x5dd)+_0x166263(0x448)+'n:\x20co'+'lumn;'+_0x166263(0x654)+'\x20\x20.mn'+_0x166263(0x665)+_0x166263(0x1d2)+'play:'+'\x20flex'+_0x166263(0x412)+'gn-it'+'ems:\x20'+_0x166263(0x4e8)+_0x166263(0x39e)+'p:\x2012'+_0x166263(0x253)+_0x166263(0x573)+_0x166263(0x68e)+'x\x206px'+'\x2012px'+';\x20use'+_0x166263(0x1d7)+_0x166263(0x237)+'none;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-titl'+'es\x20{\x20'+_0x166263(0x1fd)+_0x166263(0x347)+_0x166263(0x663)+_0x166263(0x219)+_0x166263(0x569)+'\x20\x20\x20\x20.'+_0x166263(0x68d)+'{\x20fon'+'t-siz'+_0x166263(0x4f8)+_0x166263(0x3ad)+'ont-w'+_0x166263(0x3b0)+_0x166263(0x1d0)+';\x20}\x0a\x20'+_0x166263(0x3bc)+'n-sub'+_0x166263(0x658)+'nt-si'+_0x166263(0x266)+_0x166263(0x536)+'opaci')+('ty:\x20.'+'4;\x20}\x0a'+_0x166263(0x4ec)+'mn-cl'+_0x166263(0x34e)+_0x166263(0x32a)+_0x166263(0x2dd)+_0x166263(0x72a)+_0x166263(0x580)+_0x166263(0x2a3)+'ms:\x20c'+'enter'+_0x166263(0x5ab)+_0x166263(0x5b9)+_0x166263(0x68f)+_0x166263(0x423)+'t:\x2028'+'px;\x20b'+'order'+_0x166263(0x5cc)+_0x166263(0x1ee)+'r-rad'+_0x166263(0x3cd)+_0x166263(0x68f)+'backg'+_0x166263(0x24f)+':\x20tra'+_0x166263(0x48c)+'ent;\x20'+_0x166263(0x371)+':\x20inh'+_0x166263(0x6b5)+'\x20opac'+'ity:\x20'+_0x166263(0x5c5)+_0x166263(0x6b2)+'r:\x20po'+_0x166263(0x711)+_0x166263(0x55a)+_0x166263(0x3bc)+'n-clo'+'se:ho'+_0x166263(0x32d)+_0x166263(0x5e3)+_0x166263(0x45a)+'1;\x20ba'+'ckgro'+_0x166263(0x6de)+'rgba('+_0x166263(0x301)+'55,25'+_0x166263(0x4da)+_0x166263(0x399)+_0x166263(0x4ec)+_0x166263(0x651)+'ose\x20s'+_0x166263(0x5e4)+'width'+':\x2014p'+_0x166263(0x45c)+'ight:'+_0x166263(0x6c4)+_0x166263(0x320)+_0x166263(0x701)+'ne;\x20s'+_0x166263(0x55e)+_0x166263(0x565)+_0x166263(0x3d2)+_0x166263(0x6c5)+_0x166263(0x657)+_0x166263(0x732)+_0x166263(0x219)+_0x166263(0x68c)+_0x166263(0x4f1)+_0x166263(0x636)+_0x166263(0x290)+_0x166263(0x5da)+_0x166263(0x654)+_0x166263(0x5cd)+'-cols'+'\x20{\x20fl'+_0x166263(0x6b8)+_0x166263(0x1fc)+_0x166263(0x4f9)+_0x166263(0x5ff)+_0x166263(0x42d)+_0x166263(0x5b1)+'-y:\x20a'+_0x166263(0x6e1)+_0x166263(0x51f)+'ay:\x20g'+'rid;\x20'+_0x166263(0x40e)+'templ'+_0x166263(0x27d)+'olumn'+'s:\x20re'+'peat('+_0x166263(0x67c)+_0x166263(0x3b3)+_0x166263(0x37f)+'ax(25'+_0x166263(0x48b)+'1fr))'+';\x20ali'+'gn-it'+_0x166263(0x26b)+_0x166263(0x403)+';\x20ali'+_0x166263(0x6c2)+_0x166263(0x4e1)+_0x166263(0x71a)+_0x166263(0x35f)+'ap:\x201'+'0px;\x20'+_0x166263(0x2ac)+_0x166263(0x52b)+_0x166263(0x5d7)+_0x166263(0x4e0)+';\x20}\x0a\x20'+_0x166263(0x3bc)+_0x166263(0x46c)+_0x166263(0x433)+'ebkit'+_0x166263(0x283)+_0x166263(0x487)+_0x166263(0x6eb)+_0x166263(0x219)+_0x166263(0x68f)+_0x166263(0x43f)+'\x20.mn-'+'cols:'+_0x166263(0x607)+_0x166263(0x538)+_0x166263(0x2dc)+'bar-t'+_0x166263(0x2e8)+_0x166263(0x240)+_0x166263(0x618)+_0x166263(0x579)+'gba(2'+_0x166263(0x376)+'5,255'+',.08)'+_0x166263(0x42f)+_0x166263(0x641)+_0x166263(0x3b7)+_0x166263(0x259)+';\x20}\x0a\x20'+_0x166263(0x67f)+_0x166263(0x57d)+_0x166263(0x613)+_0x166263(0x298)+_0x166263(0x426)+'us:\x201'+_0x166263(0x4b6)+'backg'+_0x166263(0x24f)+_0x166263(0x551)+_0x166263(0x23b)+',255,'+'255,.'+_0x166263(0x292)+'\x20box-'+'shado'+_0x166263(0x4a5)+_0x166263(0x737)+_0x166263(0x2fc)+_0x166263(0x2f6)+'gba(2'+_0x166263(0x376)+_0x166263(0x4d2)+',.05)'+_0x166263(0x55a)+_0x166263(0x67f)+_0x166263(0x57d)+_0x166263(0x6f4)+'{\x20bac'+'kgrou'+_0x166263(0x579)+_0x166263(0x6e4)+_0x166263(0x376)+_0x166263(0x4d2)+_0x166263(0x60b)+';\x20box'+'-shad'+'ow:\x20i'+'nset\x20'+_0x166263(0x2e6)+_0x166263(0x66a)+_0x166263(0x1e6)+_0x166263(0x652)+'07,15'+_0x166263(0x379)+_0x166263(0x399)+_0x166263(0x4ec)+_0x166263(0x26d)+_0x166263(0x22b)+'ad\x20{\x20'+'displ')+('ay:\x20f'+_0x166263(0x207)+'align'+_0x166263(0x690)+_0x166263(0x58f)+_0x166263(0x32c)+_0x166263(0x462)+'\x208px;'+'\x20padd'+_0x166263(0x31e)+_0x166263(0x1ad)+_0x166263(0x418)+_0x166263(0x654)+'\x20\x20.sk'+_0x166263(0x355)+'-titl'+_0x166263(0x698)+_0x166263(0x62c)+'1;\x20mi'+'n-wid'+_0x166263(0x39c)+_0x166263(0x55a)+'\x20\x20\x20.s'+_0x166263(0x57d)+'d-tit'+_0x166263(0x1e8)+'rong\x20'+'{\x20fon'+_0x166263(0x6c8)+_0x166263(0x390)+'px;\x20f'+'ont-w'+'eight'+':\x20600'+_0x166263(0x6f6)+_0x166263(0x425)+_0x166263(0x6e4)+'46,23'+_0x166263(0x419)+_0x166263(0x539)+_0x166263(0x55a)+_0x166263(0x67f)+'k-car'+_0x166263(0x6f4)+'.sk-c'+'ard-t'+'itle\x20'+_0x166263(0x5df)+_0x166263(0x1e9)+_0x166263(0x224)+_0x166263(0x5de)+'0f5;\x20'+_0x166263(0x43f)+_0x166263(0x628)+_0x166263(0x428)+'\x20{\x20pa'+_0x166263(0x648)+':\x200\x201'+'2px\x201'+_0x166263(0x709)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x166263(0x473)+_0x166263(0x658)+_0x166263(0x3c4)+'ze:\x201'+_0x166263(0x536)+'opaci'+'ty:\x20.'+_0x166263(0x3b6)+_0x166263(0x6f0)+_0x166263(0x381)+_0x166263(0x1d1)+_0x166263(0x674)+_0x166263(0x4ec)+_0x166263(0x667)+_0x166263(0x683)+'ispla'+'y:\x20fl'+_0x166263(0x545)+'lign-'+'items'+_0x166263(0x50a)+_0x166263(0x21b)+'gap:\x20'+'8px;\x20'+'paddi'+'ng:\x204'+_0x166263(0x583)+_0x166263(0x74f)+_0x166263(0x442)+_0x166263(0x568)+'5px;\x20'+_0x166263(0x43f)+'\x20.sk-'+'label'+'\x20{\x20fl'+'ex:\x201'+_0x166263(0x6f6)+'or:\x20r'+_0x166263(0x6e4)+'46,23'+'8,242'+_0x166263(0x47c)+_0x166263(0x55a)+_0x166263(0x67f)+_0x166263(0x585)+_0x166263(0x643)+'ispla'+_0x166263(0x548)+_0x166263(0x3c5)+'font-'+'size:'+_0x166263(0x528)+_0x166263(0x54d)+'city:'+'\x20.4;\x20'+_0x166263(0x43f)+_0x166263(0x628)+_0x166263(0x6d6)+'h\x20{\x20p'+'ositi'+'on:\x20r'+'elati'+_0x166263(0x2ad)+'idth:'+_0x166263(0x36b)+';\x20hei'+_0x166263(0x5dc)+_0x166263(0x697)+'\x20bord'+_0x166263(0x3eb)+_0x166263(0x42f)+_0x166263(0x641)+'adius'+':\x2099p'+_0x166263(0x365)+'ckgro'+_0x166263(0x6de)+'rgba('+_0x166263(0x301)+_0x166263(0x376)+_0x166263(0x5f4)+_0x166263(0x4e9)+_0x166263(0x2ba)+_0x166263(0x59d)+_0x166263(0x21b)+'flex:'+'\x20none'+_0x166263(0x55a)+_0x166263(0x67f)+'k-swi'+_0x166263(0x3fe)+_0x166263(0x254)+_0x166263(0x738)+_0x166263(0x4e1)+_0x166263(0x530)+'\x20posi'+'tion:'+_0x166263(0x51e)+_0x166263(0x609)+_0x166263(0x246)+_0x166263(0x6b3)+_0x166263(0x6b4)+':\x203px'+_0x166263(0x5ab)+_0x166263(0x6a9)+_0x166263(0x5c2)+_0x166263(0x3b0)+':\x208px'+';\x20bor'+'der-r'+_0x166263(0x3b7)+':\x2050%'+_0x166263(0x513)+'kgrou'+_0x166263(0x579)+'gba(2'+_0x166263(0x376)+_0x166263(0x4d2)+',.25)'+_0x166263(0x231)+'nsiti'+_0x166263(0x35d)+'eft\x20.'+_0x166263(0x262)+_0x166263(0x72d)+_0x166263(0x24b)+_0x166263(0x25d)+_0x166263(0x43f)+_0x166263(0x628)+'switc'+_0x166263(0x2a5)+_0x166263(0x444)+'cked='+_0x166263(0x702)+'\x22]\x20{\x20'+_0x166263(0x728)+_0x166263(0x24f)+':\x20rgb')+(_0x166263(0x23b)+_0x166263(0x242)+_0x166263(0x20e)+_0x166263(0x680)+_0x166263(0x43f)+_0x166263(0x628)+'switc'+'h[ari'+_0x166263(0x444)+_0x166263(0x637)+_0x166263(0x702)+_0x166263(0x5a9)+'fter\x20'+'{\x20lef'+'t:\x2015'+_0x166263(0x3f0)+_0x166263(0x72d)+_0x166263(0x1fb)+'\x20#ff6'+_0x166263(0x576)+_0x166263(0x43f)+_0x166263(0x628)+_0x166263(0x25b)+_0x166263(0x281)+_0x166263(0x291)+_0x166263(0x6de)+_0x166263(0x1e6)+'255,2'+'55,25'+'5,.03'+_0x166263(0x543)+'order'+_0x166263(0x5cc)+_0x166263(0x1ee)+_0x166263(0x500)+_0x166263(0x3cd)+'6px;\x20'+_0x166263(0x371)+_0x166263(0x274)+'eef2;'+'\x20padd'+_0x166263(0x31e)+'6px\x209'+'px;\x20f'+_0x166263(0x4c2)+'ize:\x20'+_0x166263(0x28f)+'x;\x20ou'+'tline'+_0x166263(0x574)+_0x166263(0x2ee)+_0x166263(0x373)+_0x166263(0x52c)+'inset'+'\x200\x200\x20'+'0\x201px'+_0x166263(0x70d)+_0x166263(0x1d9)+_0x166263(0x301)+'55,.0'+'5);\x20}'+_0x166263(0x458)+'.sk-f'+'ield\x20'+_0x166263(0x2b1)+_0x166263(0x327)+_0x166263(0x72d)+_0x166263(0x1fb)+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+_0x166263(0x628)+'range'+_0x166263(0x471)+_0x166263(0x73a)+':\x20fle'+_0x166263(0x408)+_0x166263(0x1a5)+_0x166263(0x446)+'\x20cent'+_0x166263(0x22e)+_0x166263(0x61f)+_0x166263(0x56d)+_0x166263(0x458)+_0x166263(0x45b)+_0x166263(0x75a)+'\x20{\x20-w'+_0x166263(0x605)+_0x166263(0x549)+'aranc'+_0x166263(0x466)+_0x166263(0x21e)+_0x166263(0x62a)+_0x166263(0x2bd)+_0x166263(0x49c)+_0x166263(0x5ab)+_0x166263(0x257)+'0px;\x20'+_0x166263(0x423)+_0x166263(0x27c)+_0x166263(0x365)+_0x166263(0x291)+_0x166263(0x6de)+'trans'+_0x166263(0x1a6)+_0x166263(0x60a)+_0x166263(0x4ec)+'sk-sl'+'ider:'+_0x166263(0x607)+_0x166263(0x538)+_0x166263(0x75a)+_0x166263(0x669)+_0x166263(0x496)+'track'+_0x166263(0x247)+_0x166263(0x4a2)+'\x202px;'+'\x20bord'+_0x166263(0x2fe)+_0x166263(0x753)+_0x166263(0x359)+'\x20back'+'groun'+_0x166263(0x378)+'near-'+_0x166263(0x6ae)+'ent(#'+'ff6b9'+_0x166263(0x6da)+_0x166263(0x4fe)+')\x200\x200'+'\x20/\x20va'+'r(--p'+',\x2050%'+_0x166263(0x6bc)+_0x166263(0x225)+'repea'+'t,\x20rg'+'ba(25'+'5,255'+_0x166263(0x54b)+'.08);'+'\x20}\x0a\x20\x20'+_0x166263(0x407)+_0x166263(0x58c)+_0x166263(0x74a)+_0x166263(0x483)+_0x166263(0x313)+_0x166263(0x6b7)+_0x166263(0x2e8)+'{\x20-we'+_0x166263(0x746)+_0x166263(0x4cf)+'rance'+_0x166263(0x574)+'e;\x20wi'+'dth:\x20'+'6px;\x20'+'heigh'+_0x166263(0x4bb)+_0x166263(0x4a9)+_0x166263(0x6f0)+'top:\x20'+'-2px;'+'\x20bord'+_0x166263(0x2fe)+_0x166263(0x753)+_0x166263(0x4c8)+'\x20back'+_0x166263(0x722)+_0x166263(0x2d0)+_0x166263(0x4fe)+_0x166263(0x55a)+_0x166263(0x67f)+_0x166263(0x2fb)+'\x20{\x20fo'+_0x166263(0x3c4)+_0x166263(0x266)+'1px;\x20'+'font-'+_0x166263(0x344)+_0x166263(0x559)+_0x166263(0x5d2)+_0x166263(0x31c)+_0x166263(0x5b9)+'8px;\x20'+'text-'+'align'+_0x166263(0x3e1)+'ht;\x20c'+_0x166263(0x224)+_0x166263(0x70d)+_0x166263(0x479)+_0x166263(0x352)+_0x166263(0x694)+_0x166263(0x399)+_0x166263(0x4ec)+'sk-co'+'lor\x20{')+(_0x166263(0x4a0)+'h:\x2034'+_0x166263(0x5c2)+'eight'+_0x166263(0x216)+_0x166263(0x575)+'rder:'+_0x166263(0x5db)+'order'+_0x166263(0x426)+'us:\x206'+_0x166263(0x3f0)+_0x166263(0x72d)+_0x166263(0x1fb)+_0x166263(0x49c)+_0x166263(0x64a)+_0x166263(0x4a8)+_0x166263(0x45e)+_0x166263(0x476)+_0x166263(0x4d7)+_0x166263(0x32c)+_0x166263(0x654)+'\x20\x20.sk'+_0x166263(0x4df)+_0x166263(0x658)+_0x166263(0x3c4)+_0x166263(0x266)+_0x166263(0x536)+_0x166263(0x371)+':\x20rgb'+'a(246'+_0x166263(0x2cf)+_0x166263(0x682)+_0x166263(0x2ce)+'addin'+_0x166263(0x47a)+_0x166263(0x1fe)+_0x166263(0x43f)+'\x20.sk-'+_0x166263(0x6f2)+_0x166263(0x5d5)+'\x20colo'+_0x166263(0x42e)+_0x166263(0x44f)+_0x166263(0x55a)+'\x20\x20\x20.s'+'k-btn'+'\x20{\x20al'+'ign-s'+_0x166263(0x63b)+_0x166263(0x1c6)+_0x166263(0x403)+_0x166263(0x42f)+'der:\x20'+'0;\x20bo'+_0x166263(0x606)+_0x166263(0x350)+_0x166263(0x3ac)+'x;\x20pa'+_0x166263(0x648)+_0x166263(0x6c0)+'\x2016px'+_0x166263(0x513)+'kgrou'+_0x166263(0x6e5)+'ff6b9'+_0x166263(0x684)+'lor:\x20'+_0x166263(0x624)+_0x166263(0x74f)+_0x166263(0x442)+_0x166263(0x568)+_0x166263(0x3fc)+_0x166263(0x2f2)+'weigh'+'t:\x2070'+_0x166263(0x520)+'rsor:'+_0x166263(0x59d)+'ter;\x20'+_0x166263(0x43f)+_0x166263(0x628)+_0x166263(0x558)+_0x166263(0x481)+'{\x20fil'+'ter:\x20'+_0x166263(0x6e3)+_0x166263(0x3d1)+'(1.1)'+';\x20}\x0a\x20'+'\x20\x20\x20');window[_0x166263(0x6d2)+_0x166263(0x593)+_0x166263(0x747)+'r'](_0x166263(0x63d)+'wn',_0x344cd0=>{var _0x6ebfb3=_0x166263,_0x428471={'isNca':function(_0x3e4307,_0x50d214,_0x885223,_0x193fff){return _0x3e4307(_0x50d214,_0x885223,_0x193fff);},'SIhzL':function(_0x3d9df6,_0x1d44fe){return _0x3d9df6!=_0x1d44fe;}};if(_0x41b0f4[_0x6ebfb3(0x3fb)](_0x41b0f4[_0x6ebfb3(0x22d)],_0x41b0f4[_0x6ebfb3(0x276)])){var _0x5103e4=_0x428471[_0x6ebfb3(0x3d4)](_0x25da6c,_0x2eb021,_0x39040a,_0x1f29e5);if(_0x428471['SIhzL'](_0x5103e4,null))_0x4813c1(_0xd2400e,_0xd6b7dc,_0xd4d5ed,_0x5103e4*_0x5601b8);}else _0x344cd0['code']===_0x41b0f4[_0x6ebfb3(0x452)]&&(_0x344cd0['preve'+_0x6ebfb3(0x208)+_0x6ebfb3(0x37e)](),_0x41b0f4['DcGOF'](_0x465fd2));},!![]);var _0xf3122a=document[_0x166263(0x3c9)+_0x166263(0x3f7)+'ent'](_0x41b0f4['CcrpC']);_0xf3122a['style'][_0x166263(0x2e0)+'xt']=_0x41b0f4[_0x166263(0x370)],_0xf3122a['inner'+_0x166263(0x615)]='<svg\x20'+_0x166263(0x4f5)+_0x166263(0x73c)+_0x166263(0x60f)+_0x166263(0x22f)+'<path'+_0x166263(0x4d4)+'12\x2021'+_0x166263(0x3d6)+_0x166263(0x5d1)+_0x166263(0x3e9)+_0x166263(0x707)+_0x166263(0x495)+_0x166263(0x413)+'8-4.5'+'\x204-4.'+_0x166263(0x60e)+'\x204\x204.'+_0x166263(0x6ee)+'-2.5\x20'+_0x166263(0x4c3)+_0x166263(0x275)+'fill='+'\x22none'+'\x22\x20str'+_0x166263(0x3ed)+'#ff6b'+_0x166263(0x439)+_0x166263(0x55e)+_0x166263(0x4fb)+'h=\x222\x22'+'\x20stro'+'ke-li'+_0x166263(0x5c6)+_0x166263(0x21c)+'nd\x22\x20s'+_0x166263(0x55e)+_0x166263(0x50b)+_0x166263(0x1d5)+'\x22roun'+_0x166263(0x4c7)+'circl'+'e\x20cx='+_0x166263(0x1b1)+'cy=\x221'+_0x166263(0x710)+'\x221.5\x22'+_0x166263(0x540)+_0x166263(0x43a)+'6b9d\x22'+'/></s'+_0x166263(0x1f5),_0xf3122a['title']=_0x41b0f4['XhBhC'],_0xf3122a[_0x166263(0x435)+_0x166263(0x6aa)+'er']=()=>_0xf3122a['style'][_0x166263(0x51c)+'ty']='1',_0xf3122a['onmou'+_0x166263(0x692)+'ve']=()=>_0xf3122a[_0x166263(0x26f)]['opaci'+'ty']='0.5',_0xf3122a[_0x166263(0x4b0)+'ck']=_0x3400ec=>{var _0xff34fc=_0x166263,_0x49d3bc={'aftcm':_0xff34fc(0x5f6)+_0xff34fc(0x392)+_0xff34fc(0x5d8)+_0xff34fc(0x367)};if(_0xd9ec6c[_0xff34fc(0x4ad)]('tGKjh',_0xff34fc(0x3c3))){if(_0xd3998)_0x136c93[_0xff34fc(0x4bd)](_0xff34fc(0x248)+_0xff34fc(0x35e)+_0xff34fc(0x4cc)+_0xff34fc(0x2f1)+_0xff34fc(0x434),_0x49d3bc[_0xff34fc(0x537)],[-0x1747+-0x81*0x2d+0x2ee4]);}else _0x3400ec['stopP'+_0xff34fc(0x485)+'ation'](),_0xd9ec6c[_0xff34fc(0x73b)](_0x465fd2);},document['body'][_0x166263(0x719)+_0x166263(0x756)+'d'](_0xf3122a),_0x484468(),_0x41b0f4['EOlfd'](requestAnimationFrame,_0x32ad68),console[_0x166263(0x642)]('[saku'+_0x166263(0x4dc)+'ur]\x20m'+_0x166263(0x655)+_0x166263(0x4b1)+'\x20UWMK'+':',_0xded397['uwmk']);});})()));
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
  if (!IS_CLUTCHER && !IS_ASTRA) return;

  var BASE = "https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/";
  var FILE = IS_CLUTCHER ? "sakura.clutcher.js" : "sakura.astra.js";

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
