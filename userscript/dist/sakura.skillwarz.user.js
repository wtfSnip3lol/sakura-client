// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.7.0
// @description  SkillWarz client - ACTk-aware value reader and inspector. Runs in the game frame, reports to the page automatically.
// @match        https://www.crazygames.com/*
// @match        https://games.crazygames.com/*
// @match        https://*.game-files.crazygames.com/*
// @match        https://*.crazygames.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// ── UWMK, game frame only ─────────────────────────────────────────────
// Inlined because the frame must patch fetch / WebAssembly.instantiate
// before Unity's boot scripts compile the WASM. Scoped to the game host so
// the CrazyGames portal keeps its own untouched fetch/WebAssembly.
// CrazyGames nests three documents and Unity actually executes in the THIRD
// one (<game>.game-files.crazygames.com), not in the games.crazygames.com
// loader. Gating on the loader meant UWMK loaded but never saw a .data fetch,
// so preload() waited forever and il2CppContext never existed.
var __swHost = location.hostname || "";
var __swPortal = /(^|\.)www\.crazygames\.com$/.test(__swHost);
var __swWrapper = /(^|\.)games\.crazygames\.com$/.test(__swHost);
if ((/(^|\.)crazygames\.com$/.test(__swHost) || /(^|\.)game-files\.crazygames\.com$/.test(__swHost)) && !__swPortal && !__swWrapper) {
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
}

(function(_0x2fd076,_0xeece23){var _0x346580=_0x49be,_0x4ed40d=_0x2fd076();while(!![]){try{var _0x1a346d=parseInt(_0x346580(0x679))/(0x4*-0x449+-0x8d+0x2*0x8d9)*(parseInt(_0x346580(0x7b2))/(0xed1+-0x1b76+-0x4f*-0x29))+parseInt(_0x346580(0x4e5))/(0x1c97+0xeed+0x12d*-0x25)*(-parseInt(_0x346580(0x3ad))/(0x9fe+0xaa7+0x1*-0x14a1))+-parseInt(_0x346580(0x5b2))/(-0x5*0x463+-0x2*-0x59c+0xabc)+-parseInt(_0x346580(0x527))/(0x2*0xb84+0x213c+-0x383e)*(-parseInt(_0x346580(0x3f7))/(0x142f+0x1774*0x1+-0x4*0xae7))+parseInt(_0x346580(0x48f))/(0x188f*0x1+0x1*0x12+-0x1899)*(parseInt(_0x346580(0x739))/(-0x20a0+-0x3ab+0x2454))+-parseInt(_0x346580(0x797))/(0x3*-0xa48+0x52+0x1e90)+parseInt(_0x346580(0x4ea))/(-0xb6+-0xe*0x17d+0x1597);if(_0x1a346d===_0xeece23)break;else _0x4ed40d['push'](_0x4ed40d['shift']());}catch(_0x29fb54){_0x4ed40d['push'](_0x4ed40d['shift']());}}}(_0x5e56,0x3973b*0x1+0x12e*0x19+0x51c23),((()=>{'use strict';var _0x24c400=_0x49be,_0xffdfd9={'WKOdR':function(_0x3961ae,_0x36b2e4){return _0x3961ae===_0x36b2e4;},'iQzex':function(_0x3ed8a8,_0x2b042e){return _0x3ed8a8===_0x2b042e;},'IVWMB':_0x24c400(0x689),'bkYSc':function(_0x2623bf,_0x5a4025){return _0x2623bf+_0x5a4025;},'HqPrK':_0x24c400(0x3c9)+_0x24c400(0x7b8),'fSzGY':'%c[sa'+'kura]'+_0x24c400(0x24f)+_0x24c400(0x4e7)+_0x24c400(0x52c),'utsKA':'cmd','lCHOC':_0x24c400(0x493),'MVsaM':'ifram'+'e','pAchl':'kVsGP','BYDwq':_0x24c400(0x38e),'PcSlp':_0x24c400(0x5b6),'BUNCi':'sakur'+'a-sw','NyhXr':_0x24c400(0x44c)+'a-sw-'+'v2','znIxu':_0x24c400(0x44c)+_0x24c400(0x145)+_0x24c400(0x5e7)+'b','ogNfU':function(_0x2fde9a,_0x226147){return _0x2fde9a&&_0x226147;},'lcWGL':'posit'+'ion:f'+_0x24c400(0x46b)+_0x24c400(0x639)+'12px;'+_0x24c400(0x1fd)+'2px;z'+_0x24c400(0x13b)+_0x24c400(0x776)+_0x24c400(0x636)+_0x24c400(0x79d)+_0x24c400(0x585)+'point'+_0x24c400(0x563)+'er-se'+_0x24c400(0x520)+_0x24c400(0x6b2),'mxGJK':'div','WWXwt':_0x24c400(0x4bb),'KVSQO':function(_0x2f06b6,_0x33c623){return _0x2f06b6(_0x33c623);},'ZayNO':'color'+':','EAQer':function(_0x14dd4b,_0x98a6b4){return _0x14dd4b!==_0x98a6b4;},'vqQvO':_0x24c400(0x270),'VcGuX':function(_0x4ea958,_0x15d433){return _0x4ea958(_0x15d433);},'qNuLh':function(_0x317d89,_0x3d7353,_0x43159f){return _0x317d89(_0x3d7353,_0x43159f);},'TvAiO':_0x24c400(0x27b),'hKImj':function(_0x2bbe80,_0x472c49){return _0x2bbe80(_0x472c49);},'ZQeYW':_0x24c400(0x666)+'f5','pDgbM':_0x24c400(0x3c9)+'\x20ON','fTGyN':function(_0xb034f3){return _0xb034f3();},'EVCvo':_0x24c400(0x3ba),'oHmtN':_0x24c400(0x4fe)+'panel'+_0x24c400(0x1ad)+'es\x20th'+'e\x20use'+'rscri'+'pt\x20IS'+_0x24c400(0x319)+_0x24c400(0x16d)+_0x24c400(0x272)+_0x24c400(0x562)+'ng\x20on'+_0x24c400(0x3fd)+'porta'+_0x24c400(0x501),'aiXsh':_0x24c400(0x3c1),'fFbMo':function(_0xf34633,_0x217645){return _0xf34633+_0x217645;},'fxIoR':_0x24c400(0x3d2)+'ata\x20r'+_0x24c400(0x649)+'·\x20','XNICz':_0x24c400(0x475)+'1b','RptzW':function(_0x2b0683,_0x2a36b8){return _0x2b0683(_0x2a36b8);},'FLnie':function(_0x496250,_0x47d9b1){return _0x496250+_0x47d9b1;},'gQXWy':_0x24c400(0x658)+_0x24c400(0x75e)+'ex;fl'+'ex-di'+'recti'+_0x24c400(0x779)+'lumn;'+_0x24c400(0x414)+'low:h'+_0x24c400(0x2f2)+';','oPGBS':function(_0xe4f097,_0xd5413d){return _0xe4f097+_0xd5413d;},'UNlKR':function(_0x2975f6,_0x417c79){return _0x2975f6+_0x417c79;},'zKzyP':function(_0x432eee,_0x548720){return _0x432eee+_0x548720;},'KzSRc':_0x24c400(0x16a)+'style'+'=\x22pad'+'ding:'+'9px\x201'+_0x24c400(0x641)+_0x24c400(0x7bc)+_0x24c400(0x5d2)+_0x24c400(0x7ca)+'x\x20sol'+_0x24c400(0x710)+_0x24c400(0x579)+'5,143'+_0x24c400(0x1fb)+_0x24c400(0x55c)+'ispla'+_0x24c400(0x6c6)+'x;gap'+_0x24c400(0x5ba)+'align'+_0x24c400(0x32f)+'s:cen'+_0x24c400(0x4a8)+_0x24c400(0x4e4)+'\x200\x20au'+_0x24c400(0x492),'kftbd':_0x24c400(0x653)+_0x24c400(0x218)+_0x24c400(0x13f)+_0x24c400(0x4d9)+'</b>','otdET':_0x24c400(0x7a1)+_0x24c400(0x7d3)+_0x24c400(0x338)+'-x\x22\x20s'+_0x24c400(0x27d)+'\x22back'+_0x24c400(0x31f)+'d:tra'+_0x24c400(0x400)+'ent;b'+'order'+':1px\x20'+'solid'+'\x20rgba'+_0x24c400(0x155)+'143,1'+'77,.4'+');col'+'or:#f'+'7eef5'+_0x24c400(0x407)+'er-ra'+_0x24c400(0x38a)+_0x24c400(0x4b9)+_0x24c400(0x24e)+_0x24c400(0x307)+_0x24c400(0x360)+_0x24c400(0x5c7)+_0x24c400(0x5ea)+'nter;'+_0x24c400(0x3bd)+_0x24c400(0x686)+'n>','VlzeY':_0x24c400(0x206)+'>','JrUpW':_0x24c400(0x2ca)+_0x24c400(0x53d)+_0x24c400(0x124)+'t\x22\x20st'+_0x24c400(0x1ac)+'margi'+_0x24c400(0x233)+'addin'+'g:10p'+'x\x2012p'+_0x24c400(0x762)+'rflow'+':auto'+_0x24c400(0x439)+_0x24c400(0x7bb)+'auto;'+'white'+'-spac'+_0x24c400(0x5e6)+'-wrap'+';word'+'-brea'+_0x24c400(0x59e)+_0x24c400(0x386)+'rd;fo'+_0x24c400(0x5c5)+'herit'+';','rMxGt':_0x24c400(0x162)+_0x24c400(0x6ba),'FKDzd':_0x24c400(0x162)+_0x24c400(0x74c),'oinTR':'#sw2-'+'toggl'+'e','itzrD':_0x24c400(0x162)+_0x24c400(0x2d4)+'r','zUmxH':_0x24c400(0x162)+'facto'+_0x24c400(0x531)+'l','ynzQc':'#sw2-'+'hint','HBNgi':function(_0x6e911e){return _0x6e911e();},'opmiV':function(_0x17633f,_0x3db7fa){return _0x17633f<_0x3db7fa;},'QnApi':'void','Sspfk':function(_0x3f257c,_0x251df4){return _0x3f257c+_0x251df4;},'VhjIx':function(_0x312830,_0x8cc445){return _0x312830+_0x8cc445;},'PQUgh':'uwmk\x20'+'\x20\x20\x20\x20','AiKmg':'yes','JxxSx':'\x20\x20\x20co'+'ntext'+'\x20','FCWto':function(_0x35f867,_0x5c684d){return _0x35f867!=_0x5c684d;},'JIyMk':function(_0x41a798,_0x55aa69){return _0x41a798+_0x55aa69;},'kxhup':'\x20appl'+_0x24c400(0x59f),'WkRAW':'no\x20Up'+_0x24c400(0x691)+_0x24c400(0x56f)+_0x24c400(0x5bc)+'r\x20the'+_0x24c400(0x2b1)+'ature'+'\x20did\x20'+'not\x20m'+'atch.','JHzXs':_0x24c400(0x489),'LtdTY':'\x20\x20off'+_0x24c400(0x2ef)+_0x24c400(0x29b)+_0x24c400(0x5e1)+_0x24c400(0x661)+'lue\x20\x20'+_0x24c400(0x5e1)+_0x24c400(0x5e1)+_0x24c400(0x210),'jyKMD':function(_0x565e1f,_0x59d02a){return _0x565e1f===_0x59d02a;},'DqwCI':function(_0x284049,_0x2daa86){return _0x284049/_0x2daa86;},'HDHXQ':function(_0x237ff2,_0x1abf1a){return _0x237ff2+_0x1abf1a;},'WYHUF':_0x24c400(0x12a),'BRHcV':function(_0x764051,_0x3dca0f){return _0x764051^_0x3dca0f;},'ejjsF':_0x24c400(0x45d),'PWRUy':'xVTbD','Kkkvz':'%c[sa'+'kura]'+'\x20pane'+'l\x20upd'+'ate\x20f'+_0x24c400(0x1af),'DZunn':function(_0x2ccf82,_0x26563c){return _0x2ccf82+_0x26563c;},'jLDdT':function(_0x25a153){return _0x25a153();},'FJBmA':'no\x20lo'+'cal\x20p'+'layer'+_0x24c400(0x33e),'NQlLJ':function(_0xbf9a8b,_0x41d1d4){return _0xbf9a8b!==_0x41d1d4;},'TdUKw':'hPJeO','nuByw':function(_0x3f4ba9,_0x2c6834){return _0x3f4ba9!==_0x2c6834;},'kSgFb':function(_0x391f27,_0xbeaf24){return _0x391f27!==_0xbeaf24;},'NLklv':function(_0x5ccc7b,_0x49585f,_0x5f3373){return _0x5ccc7b(_0x49585f,_0x5f3373);},'OIsPs':function(_0x4f98c3,_0x1918ee){return _0x4f98c3!==_0x1918ee;},'zBUJJ':function(_0x5afa23,_0x4aad08){return _0x5afa23===_0x4aad08;},'ZkbwD':_0x24c400(0x388),'eDHbo':_0x24c400(0x627),'FSOMm':'XoHTE','xazVh':_0x24c400(0x173),'mwbsL':function(_0x403cca,_0x468b8a){return _0x403cca>_0x468b8a;},'DbJlk':_0x24c400(0x497),'hrEkc':'XvZww','vAvyL':function(_0x12876e,_0x2a7e8a){return _0x12876e!==_0x2a7e8a;},'rtGeh':function(_0x5ea6d9,_0xd4f548){return _0x5ea6d9+_0xd4f548;},'SXHIN':_0x24c400(0x57d),'oduGW':_0x24c400(0x4e2),'KeYUY':function(_0xf3b518,_0x4e2897){return _0xf3b518===_0x4e2897;},'mSdjg':'armin'+_0x24c400(0x1b5),'UPlTf':function(_0x93651a,_0x117117){return _0x93651a(_0x117117);},'TvFPU':'KpxUe','cJGqK':function(_0x30b6f3,_0x1ddf2b){return _0x30b6f3===_0x1ddf2b;},'SkEQE':'plugi'+_0x24c400(0x502)+_0x24c400(0x211)+_0x24c400(0x7dc)+'e','qFcqf':'EWkIL','TTtjC':'XVJTe','uSrKU':_0x24c400(0x147),'oibCM':_0x24c400(0x60b)+_0x24c400(0x12c)+_0x24c400(0x78c)+'Game('+')','SffBd':_0x24c400(0x18c),'kpwsV':function(_0x216287,_0x110690){return _0x216287!==_0x110690;},'clrEA':_0x24c400(0x46f)+_0x24c400(0x4fc)+_0x24c400(0x18b)+'ng','qoeFD':function(_0xb006fd,_0x3dc8ad){return _0xb006fd===_0x3dc8ad;},'RlKyl':_0x24c400(0x3ce)+'t','jTFKA':function(_0x4fe1bf,_0x7405bb){return _0x4fe1bf+_0x7405bb;},'dGrdV':_0x24c400(0x683)+'w.','lQBzk':_0x24c400(0x26c)+'le','Ssaff':'insta'+_0x24c400(0x7b9)+_0x24c400(0x55b)+_0x24c400(0x78f)+'s.mem'+_0x24c400(0x300),'gpHHi':function(_0x404c31,_0x3e1941){return _0x404c31-_0x3e1941;},'iFSlI':function(_0x4acd35,_0x2c590f){return _0x4acd35+_0x2c590f;},'LVQOj':function(_0x8e4400,_0x5ef308){return _0x8e4400+_0x5ef308;},'WNtdc':function(_0x34a280,_0x22a020){return _0x34a280/_0x22a020;},'sXZbr':'\x20hook'+_0x24c400(0x2b9)+_0x24c400(0x6ff)+_0x24c400(0x530)+_0x24c400(0x2de)+_0x24c400(0x6de)+_0x24c400(0x427)+_0x24c400(0x311)+'\x20pass'+'\x20','HlyCS':function(_0x1d906a,_0x1c6430){return _0x1d906a!==_0x1c6430;},'PQHKp':function(_0x483ffb,_0x3e13ec){return _0x483ffb!==_0x3e13ec;},'WpPVh':function(_0x2e8dca,_0x173139){return _0x2e8dca<_0x173139;},'aGHGY':_0x24c400(0x2b3)+'ss\x200x','bJzSO':_0x24c400(0x65a)+_0x24c400(0x195)+'\x20end\x20'+'0x','ofTbg':function(_0x3f8067,_0x1d9218){return _0x3f8067(_0x1d9218);},'NdBvZ':'APdjn','eieIt':function(_0x290950,_0x44ffd8){return _0x290950&_0x44ffd8;},'NpalL':'i16','UuORz':'u16','jgemM':function(_0x59dc8c,_0x4f662f){return _0x59dc8c|_0x4f662f;},'TTxCs':_0x24c400(0x5c1),'YSBFy':function(_0x3ce300,_0x2ce044){return _0x3ce300|_0x2ce044;},'eAMmp':_0x24c400(0x32c)+'otrol'+_0x24c400(0x2be),'EPUXP':function(_0x56e3cd,_0x66119f){return _0x56e3cd===_0x66119f;},'fBiBZ':function(_0x174004,_0x3e3232){return _0x174004+_0x3e3232;},'cvSjH':_0x24c400(0x3ab),'RHNnn':function(_0x5403fc,_0x5b9165){return _0x5403fc<_0x5b9165;},'sUclv':function(_0x5f63b1,_0x5a2318){return _0x5f63b1+_0x5a2318;},'DtAoh':function(_0x46eed1,_0x31a6a8){return _0x46eed1+_0x31a6a8;},'fMhnm':_0x24c400(0x67a),'GFbuF':function(_0x1d3044,_0x363dab){return _0x1d3044===_0x363dab;},'NroXE':function(_0x3d1ee1,_0x23fa60){return _0x3d1ee1(_0x23fa60);},'piYmL':function(_0x35915d,_0x229563){return _0x35915d&_0x229563;},'OZpHg':function(_0x336f21,_0x4bb726){return _0x336f21^_0x4bb726;},'VUblw':function(_0x457c0f,_0x366cb3){return _0x457c0f+_0x366cb3;},'KBXuU':function(_0x2427d1,_0x1e58e9){return _0x2427d1===_0x1e58e9;},'dygAc':function(_0x5b1134,_0x684e66){return _0x5b1134+_0x684e66;},'MEPcH':function(_0x3ee9f3,_0x3ac993){return _0x3ee9f3===_0x3ac993;},'GhotZ':function(_0x151596,_0x31c283){return _0x151596===_0x31c283;},'PwDnV':function(_0x50ee2b,_0x4949bd){return _0x50ee2b^_0x4949bd;},'wirmS':function(_0x2b8801,_0x18b8e0){return _0x2b8801&_0x18b8e0;},'MCFuc':'0|1|6'+_0x24c400(0x3ac)+'7|5|4','RUNON':function(_0x36232d,_0x4de570){return _0x36232d===_0x4de570;},'FZGvx':function(_0x2e8522,_0x4d607a,_0x1a11c2,_0x51e9cf){return _0x2e8522(_0x4d607a,_0x1a11c2,_0x51e9cf);},'pMVnu':function(_0x345a64,_0x249a71){return _0x345a64+_0x249a71;},'QpSjI':function(_0x4d032c,_0x5bb9e4,_0x183893,_0x4a127a){return _0x4d032c(_0x5bb9e4,_0x183893,_0x4a127a);},'ilOIw':function(_0x167db0,_0x777a16){return _0x167db0===_0x777a16;},'FNwXQ':function(_0x2b851f,_0x577feb){return _0x2b851f+_0x577feb;},'RFtwX':function(_0x1a4959,_0x3ab140){return _0x1a4959+_0x3ab140;},'rslIj':function(_0x486aa5,_0x5c95cb){return _0x486aa5(_0x5c95cb);},'gvwAW':function(_0x5c06c4,_0x5d193a){return _0x5c06c4&_0x5d193a;},'exvjz':function(_0x474593,_0x5ac9ad){return _0x474593*_0x5ac9ad;},'fXQpw':function(_0x2a3dba,_0x434134){return _0x2a3dba&&_0x434134;},'jkGRm':function(_0x9d3950,_0xa90a16){return _0x9d3950<_0xa90a16;},'jGxvk':_0x24c400(0x410),'SOKae':function(_0x39f87c,_0x4700d3,_0x37c85c,_0x1647af){return _0x39f87c(_0x4700d3,_0x37c85c,_0x1647af);},'WCBlG':function(_0x44c80e,_0x24cad3){return _0x44c80e!==_0x24cad3;},'GjsJq':'numbe'+'r','JBCej':function(_0x4debaf,_0x1679cf){return _0x4debaf!==_0x1679cf;},'UxKsM':function(_0x278e2f,_0x41acb9){return _0x278e2f>_0x41acb9;},'yQqse':function(_0x48ed9a,_0x3cbc31){return _0x48ed9a===_0x3cbc31;},'tYybj':_0x24c400(0x33c),'KAmsb':function(_0x4bf862,_0x488460){return _0x4bf862===_0x488460;},'ePTXs':function(_0x345dad,_0xd098a2){return _0x345dad<_0xd098a2;},'toBPO':'XRqKG','poOSg':'singl'+_0x24c400(0x1d7),'pnTtE':function(_0x4ae016,_0x4e1fdf){return _0x4ae016<_0x4e1fdf;},'xGRpk':function(_0x46bdd2,_0x470814){return _0x46bdd2<_0x470814;},'GuagY':_0x24c400(0x4f4)+_0x24c400(0x6df)+'r\x20','oxyFc':function(_0x2111ab,_0x28901e,_0x32243e,_0x2d4377,_0x53a415){return _0x2111ab(_0x28901e,_0x32243e,_0x2d4377,_0x53a415);},'IiBLb':function(_0xe5ea40,_0x42989a){return _0xe5ea40+_0x42989a;},'dkUOe':function(_0x571ec2,_0xc6b2b){return _0x571ec2===_0xc6b2b;},'UHKgG':function(_0x49dda1,_0x1cd030){return _0x49dda1+_0x1cd030;},'yWQbc':function(_0x4d787c,_0x5d776c){return _0x4d787c===_0x5d776c;},'YlGNN':_0x24c400(0x37f)+'ined','gVxmi':_0x24c400(0x435),'XkCVM':'Updat'+'e','hFhhB':_0x24c400(0x64f),'byPqc':function(_0x876d00,_0x497fb8){return _0x876d00+_0x497fb8;},'xAkJW':function(_0x465cbd,_0x41ee06){return _0x465cbd<_0x41ee06;},'KRZHz':function(_0x1de557,_0x344a38){return _0x1de557<_0x344a38;},'HYJAu':function(_0x360221,_0x3a1e9f){return _0x360221+_0x3a1e9f;},'gAsfI':'backg'+_0x24c400(0x5f5)+':rgba'+_0x24c400(0x3b0)+_0x24c400(0x3cc)+_0x24c400(0x22b)+_0x24c400(0x7bc)+':1px\x20'+_0x24c400(0x479)+'\x20rgba'+_0x24c400(0x155)+_0x24c400(0x64e)+_0x24c400(0x294)+_0x24c400(0x680)+'or:','BnCfz':_0x24c400(0x433)+_0x24c400(0x45c)+'ius:9'+_0x24c400(0x541)+_0x24c400(0x398)+_0x24c400(0x721)+'x\x2012p'+'x;fon'+_0x24c400(0x771)+_0x24c400(0x2b8)+'\x20ui-m'+_0x24c400(0x785)+'ace,C'+_0x24c400(0x5cb)+_0x24c400(0x4c6)+'nospa'+'ce;','MHCgm':function(_0x3409e9,_0xce3d7c){return _0x3409e9||_0xce3d7c;},'xXYuW':function(_0x55715b,_0x365c3e){return _0x55715b*_0x365c3e;},'Pbymp':_0x24c400(0x7c8),'koCJc':function(_0x108c5a,_0x440e79){return _0x108c5a===_0x440e79;},'bmxsE':_0x24c400(0x6c3),'GMPpC':function(_0x2f801b,_0x575968){return _0x2f801b+_0x575968;},'UuejA':function(_0x1f0621,_0x58faf4){return _0x1f0621+_0x58faf4;},'cFuCb':function(_0x30a5be,_0x4a3197){return _0x30a5be*_0x4a3197;},'ESARY':function(_0x1cd106,_0x5c4c2d){return _0x1cd106*_0x5c4c2d;},'hsvsZ':function(_0x41e16f,_0xa9c58d){return _0x41e16f===_0xa9c58d;},'LsuWW':_0x24c400(0x6a2),'jvgtQ':_0x24c400(0x6eb),'hLmbK':function(_0x116181,_0x5c606b){return _0x116181===_0x5c606b;},'uFwDN':'Bvgel','jysRa':function(_0x5008df,_0x57b40b){return _0x5008df+_0x57b40b;},'lqFPi':function(_0x15a332,_0x2ff57d){return _0x15a332>>>_0x2ff57d;},'zbonY':function(_0x17b1fc,_0x1a8616){return _0x17b1fc+_0x1a8616;},'WtCjh':_0x24c400(0x60b)+'me._g'+_0x24c400(0x437),'hEueA':function(_0x38b035,_0xc811af){return _0x38b035<_0xc811af;},'upGTv':'Photo'+_0x24c400(0x7d8)+'orkSy'+'nc','sQXYw':function(_0x69df87,_0x373364){return _0x69df87===_0x373364;},'DhaaF':function(_0x4f637e,_0x4d9f02){return _0x4f637e!==_0x4d9f02;},'RIlTg':'cUKEF','QGvck':_0x24c400(0x705)+_0x24c400(0x1c9)+'pt','ZTNap':function(_0x17006f,_0x406fec){return _0x17006f<_0x406fec;},'Jzpvq':function(_0x1dac71,_0x4271eb,_0x3da5d2){return _0x1dac71(_0x4271eb,_0x3da5d2);},'NtlRM':function(_0x59ffab,_0x1c0629){return _0x59ffab-_0x1c0629;},'EhYak':function(_0x1a92d4,_0x4d345a){return _0x1a92d4<_0x4d345a;},'hNUxR':_0x24c400(0x402)+'ntrol'+'ler','rYVVZ':function(_0x735cd4,_0x1082e5){return _0x735cd4===_0x1082e5;},'oLsfj':function(_0x5a13b1,_0xfcbf34){return _0x5a13b1===_0xfcbf34;},'ZJrYr':function(_0x8d45d3,_0x479403){return _0x8d45d3===_0x479403;},'xfSIA':'qnhUW','KQqFt':_0x24c400(0x290),'GUxLZ':function(_0x1baf09,_0x1369bc){return _0x1baf09+_0x1369bc;},'fAntW':function(_0x137958,_0x8fa365,_0x2941fc){return _0x137958(_0x8fa365,_0x2941fc);},'JerrU':function(_0x533633,_0x504402){return _0x533633===_0x504402;},'bsvAD':function(_0x4f86ce,_0x4b671d){return _0x4f86ce+_0x4b671d;},'APflm':_0x24c400(0x716),'cRsMM':'the\x20l'+_0x24c400(0x5bb)+_0x24c400(0x619)+_0x24c400(0x184)+_0x24c400(0x5e8)+_0x24c400(0x4b0)+_0x24c400(0x154)+_0x24c400(0x323)+_0x24c400(0x235)+_0x24c400(0x253)+'\x20roun'+'d,\x20no'+_0x24c400(0x3e6)+_0x24c400(0x23a)+'.','BuBMX':_0x24c400(0x6ae),'vDvkK':function(_0x3a5515,_0x4a12af){return _0x3a5515<_0x4a12af;},'Aayyt':function(_0x40783e,_0x5bfb17){return _0x40783e+_0x5bfb17;},'AIvce':'\x20->\x20','iigUX':_0x24c400(0x1ee)+_0x24c400(0x250)+_0x24c400(0x312)+_0x24c400(0x455),'trrvd':function(_0x55f6a7,_0x10d476){return _0x55f6a7+_0x10d476;},'JLyjo':_0x24c400(0x48b)+'round'+_0x24c400(0x2ec)+'(21,1'+_0x24c400(0x3cc)+'.72);'+_0x24c400(0x433)+_0x24c400(0x316)+_0x24c400(0x71d)+'d\x20rgb'+'a(255'+_0x24c400(0x65d)+_0x24c400(0x1a2)+_0x24c400(0x7cb)+'rder-'+_0x24c400(0x6cf)+'s:10p'+'x;','EigKC':_0x24c400(0x16a)+'id=\x22s'+_0x24c400(0x33d)+_0x24c400(0x742)+_0x24c400(0x681)+_0x24c400(0x27d)+'\x22text'+_0x24c400(0x54e)+_0x24c400(0x39a)+'ter\x22>'+_0x24c400(0x206)+'>','IhAce':_0x24c400(0x44c)+_0x24c400(0x40b),'Vjlgu':function(_0x18b47b,_0x128ba6){return _0x18b47b!==_0x128ba6;},'ewlMU':_0x24c400(0x249),'iijnk':function(_0x5a7273,_0x2b6c98){return _0x5a7273===_0x2b6c98;},'hFNVi':function(_0x359865,_0x58b033){return _0x359865+_0x58b033;},'Nihlh':function(_0x35dd0b,_0x5b569a){return _0x35dd0b<_0x5b569a;},'WHcyV':'obf','rhGWF':function(_0x7ae287,_0x47cef5,_0x31240e){return _0x7ae287(_0x47cef5,_0x31240e);},'nzuqz':function(_0x313404,_0x40d3c5){return _0x313404===_0x40d3c5;},'lZDYf':function(_0x5a26fe,_0x413e3a){return _0x5a26fe===_0x413e3a;},'DCjwI':function(_0x580c13,_0x5f4a5b,_0xc687bb,_0x44b481){return _0x580c13(_0x5f4a5b,_0xc687bb,_0x44b481);},'yXXlH':function(_0x5c6394,_0x4645f5){return _0x5c6394===_0x4645f5;},'OGvOa':_0x24c400(0x4c3),'SWCye':'PrsaI','rGGVD':'YfpKq','SOoZr':function(_0x4ddf0f,_0x1baacd,_0x3ed6bc,_0x3c77e9){return _0x4ddf0f(_0x1baacd,_0x3ed6bc,_0x3c77e9);},'ZRrjQ':function(_0x57bde3,_0x2122d6){return _0x57bde3+_0x2122d6;},'JKije':function(_0x5b8046,_0x2509fa){return _0x5b8046+_0x2509fa;},'ZJKna':'hid=','IsrLX':'\x20ACTI'+'VE','cwFUk':_0x24c400(0x1f3),'sPYzf':'\x20hex=','fFQcy':_0x24c400(0x13e)+'ion','yCSDW':function(_0x1727fc,_0x10a8f2){return _0x1727fc<_0x10a8f2;},'lHgrw':function(_0x23f12e,_0x55db8b){return _0x23f12e===_0x55db8b;},'agtRU':function(_0xb0805d,_0x2d8233){return _0xb0805d!==_0x2d8233;},'UMMNa':'Dvmch','yaUnP':_0x24c400(0x62a)+_0x24c400(0x20e)+_0x24c400(0x796),'BuxGM':function(_0x3b1189,_0x190b41){return _0x3b1189!==_0x190b41;},'HaqPq':function(_0x32e5cf,_0x2021d5){return _0x32e5cf!==_0x2021d5;},'ozsXZ':_0x24c400(0x5ab),'fmUAr':_0x24c400(0x259),'aPUvm':'LaTEs','PYScd':_0x24c400(0x62d),'NZnUh':_0x24c400(0x5d3)+_0x24c400(0x7e1)+'nce','zHGfK':'unity'+_0x24c400(0x4ec),'iGghA':_0x24c400(0x3e4),'mQtoP':'unity'+_0x24c400(0x7e1)+_0x24c400(0x6c5)+_0x24c400(0x79b),'oEaPL':'wWRRh','LAYPd':_0x24c400(0x2fb),'ZIkwg':function(_0xeff15e,_0x4ba406){return _0xeff15e===_0x4ba406;},'bRrcE':function(_0x5e81e1,_0x27f24e){return _0x5e81e1===_0x27f24e;},'KzFix':function(_0x4fd2e7){return _0x4fd2e7();},'FsIEQ':_0x24c400(0x558)+'t','veCxQ':'trans'+_0x24c400(0x718)+'t','fxtQj':function(_0x4c95b8,_0x2a3253,_0x14a360){return _0x4c95b8(_0x2a3253,_0x14a360);},'vQhvr':function(_0x16d7ef,_0x308701){return _0x16d7ef===_0x308701;},'QNYgo':function(_0x452fcd,_0x5016fe){return _0x452fcd(_0x5016fe);},'Eolhz':function(_0x5b4f7e){return _0x5b4f7e();},'qgclk':_0x24c400(0x151)+'n','wGAFW':'ESP\x20o'+'ff','emGHd':'qrNbK','eozBd':'ywwLw','QIQAg':function(_0x2c5ec0,_0x5c5a23){return _0x2c5ec0(_0x5c5a23);},'qGihV':'sakur'+_0x24c400(0x145)+'hud-c'+'ss','uiIvE':'sakur'+_0x24c400(0x145)+'hud','pjfTj':function(_0x408692,_0x19e2d9){return _0x408692+_0x19e2d9;},'QpGFz':function(_0xa5c1e5,_0x4c92c5){return _0xa5c1e5+_0x4c92c5;},'ibeOO':'<b\x20st'+_0x24c400(0x1ac)+_0x24c400(0x232)+':','YJAZS':_0x24c400(0x653)+'ura</'+'b>','HiuLe':_0x24c400(0x7a1)+'on\x20da'+_0x24c400(0x2a8)+_0x24c400(0x67c)+_0x24c400(0x4bb)+'=\x22bac'+_0x24c400(0x674)+'nd:tr'+'anspa'+_0x24c400(0x7d6)+'borde'+'r:1px'+_0x24c400(0x71d)+_0x24c400(0x1de)+'a(255'+_0x24c400(0x65d)+'177,.'+_0x24c400(0x7aa),'dZQRb':_0x24c400(0x298)+'\x20data'+_0x24c400(0x514)+_0x24c400(0x1f5)+_0x24c400(0x1ac)+_0x24c400(0x232)+_0x24c400(0x692)+_0x24c400(0x21d)+'in-wi'+_0x24c400(0x441)+_0x24c400(0x344)+_0x24c400(0x5ff)+_0x24c400(0x385)+'n>','ntRoU':_0x24c400(0x232)+_0x24c400(0x4c5)+_0x24c400(0x2a6)+_0x24c400(0x7bc)+'-radi'+_0x24c400(0x4b1)+_0x24c400(0x167)+'ding:'+_0x24c400(0x32e)+_0x24c400(0x45e)+_0x24c400(0x585)+'point'+_0x24c400(0x39b)+_0x24c400(0x5c5)+_0x24c400(0x4ad)+_0x24c400(0x462)+'P\x20on<'+'/butt'+'on>','Emccj':_0x24c400(0x232)+_0x24c400(0x4c5)+_0x24c400(0x2a6)+_0x24c400(0x7bc)+_0x24c400(0x15b)+'us:6p'+_0x24c400(0x167)+_0x24c400(0x308)+'1px\x206'+'px;cu'+'rsor:'+_0x24c400(0x322)+'er;fo'+'nt:in'+_0x24c400(0x4ad)+';\x22>-<'+_0x24c400(0x7a5)+'on>','zSWGJ':_0x24c400(0x16a)+_0x24c400(0x2ab)+'a=\x22st'+_0x24c400(0x41e)+'le=\x22c'+_0x24c400(0x372)+_0x24c400(0x728)+_0x24c400(0x34e)+_0x24c400(0x6c7)+'th:29'+_0x24c400(0x344)+_0x24c400(0x5ec)+'v>','WlwIZ':_0x24c400(0x2ae),'rZzfH':_0x24c400(0x668),'hLUdY':_0x24c400(0x22d)+'kura]'+_0x24c400(0x43d)+_0x24c400(0x5a5)+'HUD\x20d'+_0x24c400(0x38c)+'ed','dPDBq':function(_0x2bb8da,_0x2197c2){return _0x2bb8da(_0x2197c2);},'RRfsR':function(_0x5706a6,_0x43c2fc){return _0x5706a6(_0x43c2fc);},'dBoep':'mpEFl','RpsGJ':function(_0x12a98e,_0x188355){return _0x12a98e===_0x188355;},'skIOM':'sCqCh','ThNXh':function(_0xb977,_0x17221a){return _0xb977+_0x17221a;},'LXesO':function(_0x1f36bb,_0x3ae94b){return _0x1f36bb+_0x3ae94b;},'wMHJc':function(_0x29d760,_0x38ce46){return _0x29d760+_0x38ce46;},'qWHKt':function(_0x439a2d,_0x396381){return _0x439a2d+_0x396381;},'EWFkX':_0x24c400(0x51b)+_0x24c400(0x614),'VYhcg':_0x24c400(0x5a1)+'s\x20','DViuf':_0x24c400(0x57b)+'\x20','HKIzi':function(_0x194f36,_0x514363){return _0x194f36+_0x514363;},'MoKJN':'\x20\x20cam'+'\x20','ynbMU':_0x24c400(0x2a3)+_0x24c400(0x6fc)+_0x24c400(0x26e)+_0x24c400(0x546)+_0x24c400(0x127)+'cam\x20','mkNyZ':'#7ee0'+'a8','GWFfo':'fold','jqWZd':function(_0x1c460c,_0x5cbd27){return _0x1c460c+_0x5cbd27;},'nMtqp':'no-me'+'m','ZtrXX':function(_0x19929f,_0x51cb72){return _0x19929f+_0x51cb72;},'fBtnd':'SIEkB','dsMjA':function(_0x280e00,_0x4008cc){return _0x280e00===_0x4008cc;},'wYQXj':function(_0x54c419,_0x411e1b,_0x370e67){return _0x54c419(_0x411e1b,_0x370e67);},'HmxTN':function(_0x34bcfa,_0x5a7d9d){return _0x34bcfa*_0x5a7d9d;},'cxJAr':'KLmFd','lVxEt':_0x24c400(0x328),'tAmvl':function(_0xcca40d,_0x372635,_0x24e0a3,_0x5c082e){return _0xcca40d(_0x372635,_0x24e0a3,_0x5c082e);},'Jnxin':function(_0x54dcea,_0x21d531){return _0x54dcea===_0x21d531;},'aSIIN':function(_0x27f238,_0x1c350a){return _0x27f238+_0x1c350a;},'BfvdR':function(_0x49c6f2,_0x170833){return _0x49c6f2/_0x170833;},'vFmzP':function(_0x2338d7,_0x3e1ccf,_0x4415f5){return _0x2338d7(_0x3e1ccf,_0x4415f5);},'NOqER':_0x24c400(0x70a)+'ion:f'+'ixed;'+_0x24c400(0x221)+':8px;'+_0x24c400(0x79f)+'px;z-'+_0x24c400(0x287)+_0x24c400(0x5cf)+'48364'+'6;poi'+_0x24c400(0x42c)+_0x24c400(0x301)+_0x24c400(0x4e0)+'e;','GAGsJ':_0x24c400(0x398)+_0x24c400(0x721)+'x;fon'+'t:10p'+'x/1.3'+_0x24c400(0x4f1)+_0x24c400(0x785)+'ace,C'+_0x24c400(0x5cb)+_0x24c400(0x4c6)+'nospa'+'ce;co'+'lor:#'+_0x24c400(0x65b)+'9;','gYYaW':'<canv'+_0x24c400(0x2ba)+_0x24c400(0x561)+_0x24c400(0x1c4)+_0x24c400(0x7b4)+_0x24c400(0x1cc)+'th=\x221'+'60\x22\x20h'+_0x24c400(0x70c)+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x24c400(0x6a1)+'y:blo'+_0x24c400(0x2f5)+_0x24c400(0x747)+_0x24c400(0x646),'epHns':'#saku'+'ra-es'+'p-cv','gxGNS':';font'+_0x24c400(0x36c)+_0x24c400(0x29a)+'0','hFSzJ':function(_0x578d5d,_0x4bb170){return _0x578d5d+_0x4bb170;},'saPLB':function(_0xbe967f,_0x46fded,_0x553e72){return _0xbe967f(_0x46fded,_0x553e72);},'zJwTl':function(_0x5ba0c6){return _0x5ba0c6();},'mcGro':function(_0x161762,_0x556b49){return _0x161762*_0x556b49;},'WqABa':_0x24c400(0x5ae),'QFDUy':function(_0xfb7846,_0x5b2aff){return _0xfb7846+_0x5b2aff;},'nWGZV':function(_0x41ff65,_0x106f94){return _0x41ff65-_0x106f94;},'TYFzH':function(_0x14611b,_0x2d2039){return _0x14611b-_0x2d2039;},'VxJNH':function(_0x136ab5,_0x492fbb){return _0x136ab5+_0x492fbb;},'kCkUR':function(_0x2621a1,_0x553eb0){return _0x2621a1-_0x553eb0;},'fkJEM':function(_0x2a8a01,_0xea1e16){return _0x2a8a01===_0xea1e16;},'xysLT':_0x24c400(0x5af),'uqplo':_0x24c400(0x41d)+'6a','SCHTJ':function(_0x45d98d,_0x125481){return _0x45d98d*_0x125481;},'ghOra':_0x24c400(0x574),'ltSdH':'\x20·\x20te'+'am','WbHdv':function(_0x52e3a2,_0x5d42da){return _0x52e3a2+_0x5d42da;},'qheIK':function(_0x28b3a9,_0x58b17a){return _0x28b3a9<_0x58b17a;},'rVoAT':'dKJuA','YlEsf':function(_0x1c85e5,_0x5e8a5a){return _0x1c85e5(_0x5e8a5a);},'uQMgy':function(_0x54a0f5){return _0x54a0f5();},'tgNqj':function(_0x1674a2){return _0x1674a2();},'mYgov':'surve'+_0x24c400(0x4e6)+_0x24c400(0x190),'BRgUN':function(_0x3e3485,_0x3ab669){return _0x3e3485+_0x3ab669;},'sizud':_0x24c400(0x1b7)+_0x24c400(0x41f)+'g\x20fai'+_0x24c400(0x190),'BwIgH':'clhYn','cewNQ':function(_0x47c9c0,_0x20fe37){return _0x47c9c0+_0x20fe37;},'FAQLl':_0x24c400(0x612)+'n:\x20','eofcr':function(_0x1251cf,_0x5d2781){return _0x1251cf===_0x5d2781;},'MCgAR':_0x24c400(0x503),'iRFSY':function(_0x40feef,_0x2a2942){return _0x40feef+_0x2a2942;},'VGzkk':function(_0x3d2028,_0x4c39bc){return _0x3d2028+_0x4c39bc;},'ZVNrd':_0x24c400(0x71b)+_0x24c400(0x3f8)+'MK\x20CO'+_0x24c400(0x304)+'OK\x20OV'+'ER\x20wi'+_0x24c400(0x349)+_0x24c400(0x5fd)+_0x24c400(0x2b7)+'dkit.'+_0x24c400(0x427)+_0x24c400(0x60b)+_0x24c400(0x315)+'\x20arme'+'d\x20was'+'\x20','paAoG':_0x24c400(0x2cc)+_0x24c400(0x502)+_0x24c400(0x211)+_0x24c400(0x170)+_0x24c400(0x615)+_0x24c400(0x349)+_0x24c400(0x5fd)+_0x24c400(0x2b7)+_0x24c400(0x222)+_0x24c400(0x60b)+_0x24c400(0x767)+_0x24c400(0x45b)+'lugin'+'\x20was\x20'+_0x24c400(0x6b6)+'\x20','osuMu':_0x24c400(0x342)+_0x24c400(0x43a)+'red\x20a'+'t\x20','mwDFY':_0x24c400(0x7ce)+_0x24c400(0x2f7)+_0x24c400(0x5a0)+_0x24c400(0x2f6)+'=','qVDjh':'\x20(sou'+_0x24c400(0x36b),'ESlKy':').\x20','XDuJU':function(_0x21d050,_0x44ecff){return _0x21d050+_0x44ecff;},'ljqxv':_0x24c400(0x1dc),'eWgvO':'runs\x20'+_0x24c400(0x70b)+_0x24c400(0x55f)+_0x24c400(0x687)+'Assem'+_0x24c400(0x29e)+_0x24c400(0x36e)+'tiate'+'\x20and\x20'+_0x24c400(0x597)+_0x24c400(0x2d1)+'plugi'+'n.hoo'+'ks.le'+_0x24c400(0x6e2)+'\x20','yDJmm':_0x24c400(0x41c)+'oks\x20r'+_0x24c400(0x357)+_0x24c400(0x296)+'after'+_0x24c400(0x5e2)+_0x24c400(0x4ef)+'nored'+'\x20for\x20'+_0x24c400(0x52a)+'ife\x20o'+_0x24c400(0x4df)+_0x24c400(0x76d)+'.\x20','zECKh':_0x24c400(0x46d)+'(s)\x20d'+_0x24c400(0x178)+_0x24c400(0x7a8)+_0x24c400(0x4b4)+_0x24c400(0x5aa)+_0x24c400(0x5df)+_0x24c400(0x5db)+'.','BJyzL':function(_0x18fbcf,_0x1b45bb){return _0x18fbcf+_0x1b45bb;},'nKNaS':function(_0x573011,_0x516dac){return _0x573011+_0x516dac;},'TDsCf':_0x24c400(0x46d)+_0x24c400(0x644)+'o\x20a\x20t'+_0x24c400(0x44e)+'index'+'\x20but\x20'+_0x24c400(0x79c)+_0x24c400(0x2b5)+_0x24c400(0x5f8)+_0x24c400(0x478)+_0x24c400(0x66a)+_0x24c400(0x4e3),'RTfjX':'Hooks'+_0x24c400(0x672)+'appli'+'ed\x20bu'+_0x24c400(0x1c0)+_0x24c400(0x402)+_0x24c400(0x4bd)+_0x24c400(0x30f)+'as\x20fi'+_0x24c400(0x15e)+'et.\x20','VSbsj':function(_0x41b341,_0xab5cc7){return _0x41b341+_0xab5cc7;},'XcELX':_0x24c400(0x309),'qLaGG':_0x24c400(0x728)+'99','DkPUM':function(_0x54eb82,_0x43f4c6){return _0x54eb82/_0x43f4c6;},'yDmeT':function(_0x4fc949,_0x52df8c){return _0x4fc949!==_0x52df8c;},'mnzvr':function(_0x5d04f0,_0x4bfdaa){return _0x5d04f0-_0x4bfdaa;},'WgOyz':function(_0x58a704,_0x3a4d3f,_0x18c16c){return _0x58a704(_0x3a4d3f,_0x18c16c);},'dheTn':function(_0x303ca8,_0x12d511,_0x344af1){return _0x303ca8(_0x12d511,_0x344af1);},'yWQZZ':function(_0x57a8f6){return _0x57a8f6();},'LTVcT':function(_0x5a4a75,_0x4322d9){return _0x5a4a75(_0x4322d9);},'eDREo':function(_0x5562fb,_0x219a2b){return _0x5562fb!==_0x219a2b;},'bNshz':_0x24c400(0x5c8)+'l','SkJNy':'===SA'+_0x24c400(0x1be)+_0x24c400(0x161)+_0x24c400(0x440)+_0x24c400(0x324)+'=','TNbhL':'2.7.0','fXTIp':_0x24c400(0x22d)+'kura]'+'\x20PORT'+'AL\x20AC'+'TIVE','UkaSo':_0x24c400(0x22d)+'kura]'+_0x24c400(0x19e)+'LAYER'+_0x24c400(0x25f)+_0x24c400(0x4be),'XueCa':function(_0x41abb2,_0x44419b){return _0x41abb2+_0x44419b;},'yqyWC':function(_0x550e36,_0x2214f4,_0x264747){return _0x550e36(_0x2214f4,_0x264747);},'ziutQ':'TDM_G'+_0x24c400(0x205)+_0x24c400(0x1e6),'uWEBx':'GG_Ga'+'meMan'+_0x24c400(0x758),'dxBXg':_0x24c400(0x481)+'Bot','ovyLx':_0x24c400(0x78d)+'bly-C'+'Sharp'+_0x24c400(0x505),'UksqF':'Assem'+'bly-C'+_0x24c400(0x27f)+_0x24c400(0x65e)+_0x24c400(0x14e)+_0x24c400(0x505),'KOeTA':'cInpu'+_0x24c400(0x595),'WgNOg':_0x24c400(0x377),'KXmTF':_0x24c400(0x15a)+'nView','ukOqY':_0x24c400(0x64b),'BgyFT':_0x24c400(0x77c)+'h','Lcvtb':_0x24c400(0x66e),'XhRIt':'capsu'+'le','pbuLT':_0x24c400(0x5fa),'JBUzw':'0xe8','fobgA':'trans'+_0x24c400(0x7a2),'jMCbl':_0x24c400(0x61b),'CDsRD':_0x24c400(0x130)+'ntent'+_0x24c400(0x260)+'d','hdIkz':function(_0x250f8c,_0x16e23e){return _0x250f8c===_0x16e23e;},'JpJdB':'qZgMi'};var _0x566c38=location[_0x24c400(0x325)+_0x24c400(0x437)]||'',_0x245eaa=/(^|\.)www\.crazygames\.com$/['test'](_0x566c38),_0x58ebe7=/(^|\.)games\.crazygames\.com$/['test'](_0x566c38),_0x36cc0c=/(^|\.)crazygames\.com$/[_0x24c400(0x347)](_0x566c38)&&!_0x245eaa&&!_0x58ebe7,_0x29744c=_0x245eaa?_0xffdfd9['bNshz']:_0x58ebe7?'wrapp'+'er':_0x24c400(0x534)+'r';if(!_0x245eaa&&!_0x58ebe7&&!_0x36cc0c)return;var _0x5ad662=_0x24c400(0x3d8)+'b1',_0x4e807c='__sak'+_0x24c400(0x12f)+_0x24c400(0x1d8),_0xe7b176='===SA'+'KURA-'+_0x24c400(0x161)+'WARZ-'+'BEGIN'+_0x24c400(0x268),_0x5e6d96=_0xffdfd9[_0x24c400(0x464)],_0x3615c3=_0xffdfd9[_0x24c400(0x682)];if(_0x58ebe7){if(_0xffdfd9[_0x24c400(0x436)]('qqwqr','qqwqr')){window[_0x24c400(0x635)+_0x24c400(0x1b9)+_0x24c400(0x744)+'r']('messa'+'ge',function(_0x50a935){var _0x2dc79e=_0x24c400,_0x4f6059=_0x50a935['data'];if(!_0x4f6059||_0x4f6059[_0x2dc79e(0x6db)+_0x2dc79e(0x4c1)]!==_0x4e807c)return;try{if(window['paren'+'t']&&window['paren'+'t']!==window)window['paren'+'t'][_0x2dc79e(0x669)+_0x2dc79e(0x1b0)+'e'](_0x4f6059,'*');if(window[_0x2dc79e(0x17a)]&&window['top']!==window)window[_0x2dc79e(0x17a)][_0x2dc79e(0x669)+'essag'+'e'](_0x4f6059,'*');}catch(_0x5ca169){}if(_0x4f6059&&_0xffdfd9[_0x2dc79e(0x314)](_0x4f6059['kind'],'cmd'))try{if(_0xffdfd9[_0x2dc79e(0x6d9)](_0x2dc79e(0x689),_0xffdfd9[_0x2dc79e(0x16e)])){var _0x4959ba=document['query'+_0x2dc79e(0x2bf)+_0x2dc79e(0x355)+'l']('ifram'+'e');for(var _0x5c6188=-0x10d9+-0x1*-0x6e1+0x9f8;_0x5c6188<_0x4959ba['lengt'+'h'];_0x5c6188++){try{if(_0x4959ba[_0x5c6188]['conte'+'ntWin'+'dow'])_0x4959ba[_0x5c6188][_0x2dc79e(0x613)+'ntWin'+'dow']['postM'+_0x2dc79e(0x1b0)+'e'](_0x4f6059,'*');}catch(_0x292814){}}}else return _0x519ffc[0x1ffb+0x141*0x9+-0x1*0x2b44]=_0x10ebf9,_0x378436[-0xd7*-0x5+-0x127f+0x1e*0x7a];}catch(_0x2a97d4){}}),console['log']('%c[sa'+_0x24c400(0x40a)+_0x24c400(0x394)+_0x24c400(0x393)+'R\x20ACT'+'IVE\x20('+'relay'+'\x20up+d'+'own)',_0xffdfd9[_0x24c400(0x7b0)]+_0x5ad662);return;}else return _0x145c5f[_0x24c400(0x17f)+'e']=_0x24c400(0x60b)+_0x24c400(0x12c)+_0x24c400(0x78c)+'Game('+')',_0x5df876;}if(_0x245eaa){console[_0x24c400(0x17b)](_0xffdfd9[_0x24c400(0x3ff)],_0xffdfd9[_0x24c400(0x454)](_0x24c400(0x232)+':'+_0x5ad662,_0x24c400(0x50f)+'-weig'+_0x24c400(0x29a)+'0'),{'host':_0x566c38});var _0x4fe80e={'set':function(){},'command':function(){}};function _0x1525ad(_0x10fee4,_0x5e8a90){var _0x8e7c=_0x24c400,_0x37249c={'oTdqV':_0xffdfd9[_0x8e7c(0x39e)],'ruLui':_0x8e7c(0x475)+'1b','FVIKD':_0xffdfd9['fSzGY'],'MoDGR':_0x8e7c(0x232)+':'},_0x54c679={'__sakura':_0x4e807c,'kind':_0xffdfd9[_0x8e7c(0x7da)],'cmd':_0x10fee4,'arg':_0x5e8a90};try{if(_0xffdfd9['lCHOC']!==_0x8e7c(0x493)){var _0xea5ba9=_0x1ab6ec['keys'](_0x47d8dc);for(var _0x3dbd27=0x1*-0x2571+-0x1*0x13eb+0x395c;_0x3dbd27<_0xea5ba9[_0x8e7c(0x4ed)+'h']&&_0x3dbd27<0x1*-0x1391+0x107*-0x1f+0x35c2*0x1;_0x3dbd27++){var _0x3a7aa9=_0x5a1967[_0xea5ba9[_0x3dbd27]];if(_0x3a7aa9&&typeof _0x3a7aa9==='objec'+'t'&&_0x3a7aa9['Modul'+'e']&&_0x3a7aa9['Modul'+'e']['HEAPU'+'8']&&_0x3a7aa9['Modul'+'e'][_0x8e7c(0x43f)+'8']['buffe'+'r'])return _0x4dce31[_0x8e7c(0x17f)+'e']=_0xffdfd9['bkYSc'](_0x8e7c(0x683)+'w.'+_0xea5ba9[_0x3dbd27],'.Modu'+'le'),_0x3a7aa9;}}else{var _0x291420=document[_0x8e7c(0x326)+'Selec'+'torAl'+'l'](_0xffdfd9[_0x8e7c(0x7c1)]);for(var _0x272515=0x25b7+-0xaf9+-0xa3*0x2a;_0x272515<_0x291420['lengt'+'h'];_0x272515++){try{if(_0xffdfd9['pAchl']!=='msqby'){if(_0x291420[_0x272515][_0x8e7c(0x613)+'ntWin'+'dow'])_0x291420[_0x272515][_0x8e7c(0x613)+_0x8e7c(0x24a)+_0x8e7c(0x6e3)][_0x8e7c(0x669)+'essag'+'e'](_0x54c679,'*');}else _0x5c1ec2=!_0x7dcd1e,_0x5d19ad[_0x8e7c(0x21b)+_0x8e7c(0x7a0)+'t']=_0xcdb90e?_0x8e7c(0x3c9)+'\x20ON':_0x37249c['oTdqV'],_0x16345c['style']['backg'+_0x8e7c(0x5f5)]=_0x12e49d?_0x384a35:'trans'+_0x8e7c(0x718)+'t',_0x35ba8a[_0x8e7c(0x4bb)]['color']=_0x17d45f?_0x37249c[_0x8e7c(0x702)]:'#f7ee'+'f5',_0x369119();}catch(_0x155fe9){}}}}catch(_0x557e4e){}try{if(_0xffdfd9['BYDwq']!==_0xffdfd9['PcSlp']){var _0x1131a2=new BroadcastChannel(_0xffdfd9[_0x8e7c(0x4bc)]);_0x1131a2[_0x8e7c(0x669)+_0x8e7c(0x1b0)+'e'](_0x54c679),setTimeout(function(){var _0x369dcf=_0x8e7c;try{'WPQdM'===_0x369dcf(0x375)?_0x5c84b7[_0x369dcf(0x643)]=![]:_0x1131a2['close']();}catch(_0x67e64a){}},0x1*0x7c5+0x7*0x4c7+-0x283c);}else return _0x28e014['datas'+'et'][_0x8e7c(0x5ac)]='1',_0x4256fb[_0x8e7c(0x5ac)]=_0x19ac3d,_0x2a4a6d[_0x8e7c(0x2c7)](_0x37249c[_0x8e7c(0x34c)],_0x37249c[_0x8e7c(0x6ec)]+_0x2f61d5,_0x4d76a6),_0x30763e;}catch(_0x314af9){}}var _0x5395cd=_0x24c400(0x44c)+_0x24c400(0x145)+_0x24c400(0x466)+_0x24c400(0x2b6)+'en';function _0xdb5385(){var _0x4387e7=_0x24c400;try{return _0xffdfd9[_0x4387e7(0x314)](localStorage[_0x4387e7(0x3df)+'em'](_0x5395cd),'1');}catch(_0x5db23b){return![];}}function _0x4fa3ac(_0x52e68a){var _0x4d822b=_0x24c400;try{_0x52e68a?localStorage['setIt'+'em'](_0x5395cd,'1'):localStorage['remov'+'eItem'](_0x5395cd);}catch(_0x37e469){}try{var _0x588f3e=document[_0x4d822b(0x1da)+_0x4d822b(0x216)+_0x4d822b(0x348)](_0xffdfd9[_0x4d822b(0x1a9)]);if(_0x588f3e)_0x588f3e['remov'+'e']();}catch(_0xb73e30){}try{var _0x169f51=document[_0x4d822b(0x1da)+'ement'+_0x4d822b(0x348)](_0xffdfd9[_0x4d822b(0x2d0)]);if(_0xffdfd9[_0x4d822b(0x60c)](_0x52e68a,!_0x169f51)&&document['body']){var _0x50cd22=document['creat'+_0x4d822b(0x6bf)+'ent'](_0x4d822b(0x45a));_0x50cd22['id']='sakur'+'a-sw-'+'v2-ta'+'b',_0x50cd22['style']['cssTe'+'xt']=_0xffdfd9[_0x4d822b(0x199)](_0xffdfd9['bkYSc'](_0xffdfd9[_0x4d822b(0x48e)],_0x4d822b(0x48b)+'round'+':rgba'+_0x4d822b(0x3b0)+_0x4d822b(0x3cc)+_0x4d822b(0x22b)+'order'+_0x4d822b(0x2c6)+_0x4d822b(0x479)+'\x20rgba'+'(255,'+_0x4d822b(0x64e)+_0x4d822b(0x294)+_0x4d822b(0x680)+_0x4d822b(0x549))+_0x5ad662+';','borde'+_0x4d822b(0x45c)+_0x4d822b(0x146)+'99px;'+_0x4d822b(0x398)+'ng:4p'+_0x4d822b(0x67b)+'x;fon'+'t:11p'+_0x4d822b(0x2b8)+_0x4d822b(0x4f1)+'onosp'+'ace,C'+_0x4d822b(0x5cb)+_0x4d822b(0x4c6)+'nospa'+_0x4d822b(0x4d4)),_0x50cd22['textC'+_0x4d822b(0x7a0)+'t']=_0x4d822b(0x44c)+'a',_0x50cd22['oncli'+'ck']=function(){_0x4fa3ac(![]),_0x4b645e();},document[_0x4d822b(0x2b2)][_0x4d822b(0x790)+_0x4d822b(0x4ab)+'d'](_0x50cd22);}else!_0x52e68a&&_0x169f51&&_0x169f51[_0x4d822b(0x378)+'e']();}catch(_0x325167){}}function _0x13ec01(){var _0x550e39=_0x24c400;if(_0xdb5385())return null;var _0x356724=document[_0x550e39(0x1da)+_0x550e39(0x216)+_0x550e39(0x348)](_0xffdfd9[_0x550e39(0x1a9)]);if(_0x356724)return _0x356724;if(!document['body']||!document['body'][_0x550e39(0x790)+_0x550e39(0x4ab)+'d'])return null;try{var _0x3ce1e1=(_0x550e39(0x778)+_0x550e39(0x6b1))[_0x550e39(0x2fe)]('|'),_0x315ede=0x2016+-0x1*0x1e66+-0x1b0;while(!![]){switch(_0x3ce1e1[_0x315ede++]){case'0':_0x356724=document['creat'+_0x550e39(0x6bf)+_0x550e39(0x452)](_0xffdfd9['mxGJK']);continue;case'1':document[_0x550e39(0x2b2)][_0x550e39(0x790)+'dChil'+'d'](_0x356724);continue;case'2':_0x356724['id']=_0xffdfd9[_0x550e39(0x1a9)];continue;case'3':return _0x356724;case'4':if(!document['getEl'+_0x550e39(0x216)+'ById'](_0x550e39(0x44c)+_0x550e39(0x145)+_0x550e39(0x690)+'s')){var _0x4a80cc=document[_0x550e39(0x54d)+_0x550e39(0x6bf)+_0x550e39(0x452)](_0xffdfd9[_0x550e39(0x1ae)]);_0x4a80cc['id']=_0x550e39(0x44c)+'a-sw-'+'v2-cs'+'s',_0x4a80cc[_0x550e39(0x21b)+'onten'+'t']='#saku'+_0x550e39(0x1b4)+'-v2{a'+_0x550e39(0x152)+_0x550e39(0x3d5)+'}',(document[_0x550e39(0x7b3)]||document[_0x550e39(0x36a)+_0x550e39(0x14f)+_0x550e39(0x216)])['appen'+'dChil'+'d'](_0x4a80cc);}continue;}break;}}catch(_0x3605b6){return null;}}function _0x4b645e(){var _0x436168=_0x24c400,_0x2ad1c7=_0x13ec01();if(!_0x2ad1c7)return _0x4fe80e;if(_0x2ad1c7['datas'+'et'][_0x436168(0x5ac)])return _0x2ad1c7[_0x436168(0x5ac)];try{return _0xffdfd9[_0x436168(0x46a)](_0xadf80e,_0x2ad1c7);}catch(_0x3a72a9){return _0x2ad1c7[_0x436168(0x586)+'et'][_0x436168(0x5ac)]='1',_0x2ad1c7['api']=_0x4fe80e,console['warn'](_0xffdfd9['fSzGY'],_0xffdfd9[_0x436168(0x7b0)]+_0x5ad662,_0x3a72a9),_0x4fe80e;}}function _0xadf80e(_0x346ce3){var _0x2323f0=_0x24c400,_0x203a58={'NWQfT':_0xffdfd9['EVCvo'],'cSori':_0x2323f0(0x729)+_0x2323f0(0x6d1),'WRJmn':function(_0x205337,_0x2e4e63){var _0x37830d=_0x2323f0;return _0xffdfd9[_0x37830d(0x6d9)](_0x205337,_0x2e4e63);},'DRAZe':'#ffb3'+'c7','jxMuz':function(_0x56969e,_0x2923c8){return _0x56969e+_0x2923c8;},'uiXBN':function(_0x1aebf4,_0x299f08){var _0x1114dc=_0x2323f0;return _0xffdfd9[_0x1114dc(0x199)](_0x1aebf4,_0x299f08);},'FxQQO':_0xffdfd9['oHmtN'],'oArHw':'\x20\x201.\x20'+_0x2323f0(0x346)+_0x2323f0(0x42a)+_0x2323f0(0x37d)+_0x2323f0(0x411)+'injec'+_0x2323f0(0x17d)+_0x2323f0(0x204)+_0x2323f0(0x2fd)+_0x2323f0(0x511)+_0x2323f0(0x476)+_0x2323f0(0x2e4)+'ame.\x0a','zKJyp':'\x20\x202.\x20'+'The\x20p'+'age\x20h'+'as\x20no'+_0x2323f0(0x726)+'n\x20rel'+_0x2323f0(0x7c7)+_0x2323f0(0x4d7)+'e\x20ins'+_0x2323f0(0x572)+'ng.\x0a','EdckL':function(_0x3c0351,_0x5a2274){return _0x3c0351+_0x5a2274;},'pzUrA':function(_0x2542d6,_0x5f1224,_0xa30929,_0x267b29){return _0x2542d6(_0x5f1224,_0xa30929,_0x267b29);},'UxkAY':_0xffdfd9[_0x2323f0(0x3af)],'CCnwf':function(_0x3f1af9,_0xa8fb69){return _0x3f1af9|_0xa8fb69;},'WlbVZ':'HcvZo','kuFcP':'nMgyY','gcjTp':function(_0x1abf69,_0x598733){return _0x1abf69===_0x598733;},'quBmf':'hppCh','qHysr':function(_0x1b10f2,_0x41f18d){var _0x165501=_0x2323f0;return _0xffdfd9[_0x165501(0x5ad)](_0x1b10f2,_0x41f18d);},'VAXjh':_0x2323f0(0x7ae)+'·\x20','LbayA':'\x20obje'+_0x2323f0(0x74d)+'\x20','fvqtw':_0x2323f0(0x667)+'a8','dWnop':function(_0x3901b3,_0x3df587){return _0x3901b3+_0x3df587;},'vWoXg':'RbkJy','mRMhV':_0xffdfd9['fxIoR'],'qOXjH':_0x2323f0(0x772)+'8a','tfHjD':_0x2323f0(0x293),'zLaRr':'trans'+_0x2323f0(0x718)+'t','QcDqB':_0xffdfd9['XNICz'],'SjxIv':_0xffdfd9[_0x2323f0(0x1ba)],'FaTCx':function(_0x2a9463,_0x2d2230){var _0x4d2476=_0x2323f0;return _0xffdfd9[_0x4d2476(0x576)](_0x2a9463,_0x2d2230);},'NdPYD':_0xffdfd9[_0x2323f0(0x7b0)]};_0x346ce3['style']['cssTe'+'xt']=_0xffdfd9[_0x2323f0(0x43b)](_0x2323f0(0x70a)+_0x2323f0(0x6d3)+_0x2323f0(0x46b)+'left:'+_0x2323f0(0x610)+_0x2323f0(0x1fd)+'2px;z'+'-inde'+'x:214'+_0x2323f0(0x16c)+_0x2323f0(0x35a)+'x-wid'+_0x2323f0(0x189)+'n(52v'+'w,620'+'px);m'+_0x2323f0(0x5d6)+_0x2323f0(0x712)+_0x2323f0(0x2f9)+(_0x2323f0(0x48b)+_0x2323f0(0x5f5)+_0x2323f0(0x69d)+'c1d;c'+_0x2323f0(0x372)+'#f7ee'+_0x2323f0(0x593)+'rder:'+_0x2323f0(0x609)+_0x2323f0(0x60e)+_0x2323f0(0x41b)+_0x2323f0(0x1cf)+_0x2323f0(0x1b8)+_0x2323f0(0x76e)+';bord'+_0x2323f0(0x25e)+'dius:'+'14px;')+(_0x2323f0(0x2b4)+_0x2323f0(0x629)+_0x2323f0(0x58f)+_0x2323f0(0x363)+_0x2323f0(0x203)+'e,Con'+'solas'+_0x2323f0(0x548)+'space'+_0x2323f0(0x560)+_0x2323f0(0x457)+_0x2323f0(0x2ea)+_0x2323f0(0x29f)+_0x2323f0(0x423)+_0x2323f0(0x69a)+'#000;'),_0xffdfd9['gQXWy']),_0x346ce3['inner'+_0x2323f0(0x365)]=_0xffdfd9[_0x2323f0(0x199)](_0xffdfd9[_0x2323f0(0x43b)](_0xffdfd9[_0x2323f0(0x5ad)](_0xffdfd9[_0x2323f0(0x174)](_0xffdfd9[_0x2323f0(0x199)](_0xffdfd9['UNlKR'](_0xffdfd9['bkYSc'](_0xffdfd9[_0x2323f0(0x43b)](_0xffdfd9['UNlKR'](_0xffdfd9[_0x2323f0(0x302)](_0xffdfd9['KzSRc'],'<b\x20st'+_0x2323f0(0x1ac)+'color'+':')+_0x5ad662+_0xffdfd9[_0x2323f0(0x234)]+('<span'+_0x2323f0(0x611)+'sw2-b'+_0x2323f0(0x7a6)+_0x2323f0(0x545)+'e=\x22co'+'lor:#'+_0x2323f0(0x31a)+_0x2323f0(0x1e4)+_0x2323f0(0x756)+'e:11p'+_0x2323f0(0x167)+_0x2323f0(0x308)+'1px\x206'+'px;bo'+_0x2323f0(0x5f3)+'1px\x20s'+'olid\x20'+_0x2323f0(0x41b)+_0x2323f0(0x1cf)+_0x2323f0(0x1b8)+_0x2323f0(0x4a2)+_0x2323f0(0x47c)+'der-r'+_0x2323f0(0x283)+_0x2323f0(0x27e)+'x;\x22>v'+'?</sp'+'an>'),_0x2323f0(0x298)+_0x2323f0(0x611)+_0x2323f0(0x775)+'tatus'+_0x2323f0(0x41e)+'le=\x22c'+_0x2323f0(0x372)+'#bda9'+_0x2323f0(0x276)+'aitin'+_0x2323f0(0x565)+'\x20game'+_0x2323f0(0x66c)+'e…</s'+_0x2323f0(0x781)),'<butt'+_0x2323f0(0x7d3)+_0x2323f0(0x338)+_0x2323f0(0x224)+_0x2323f0(0x41e)+'le=\x22d'+'ispla'+_0x2323f0(0x73f)+'e;mar'+'gin-l'+_0x2323f0(0x4de)+_0x2323f0(0x657)+_0x2323f0(0x331)+_0x2323f0(0x7c6)),_0x5ad662)+(_0x2323f0(0x407)+_0x2323f0(0x536)+_0x2323f0(0x232)+_0x2323f0(0x750)+_0x2323f0(0x522)+_0x2323f0(0x7bc)+_0x2323f0(0x15b)+_0x2323f0(0x1db)+'x;pad'+'ding:'+_0x2323f0(0x28d)+'0px;f'+'ont-w'+_0x2323f0(0x70c)+_0x2323f0(0x746)+'curso'+'r:poi'+_0x2323f0(0x44f)+'\x22>Cop'+_0x2323f0(0x128)+_0x2323f0(0x32b)+'tton>'),_0x2323f0(0x7a1)+_0x2323f0(0x7d3)+'=\x22sw2'+_0x2323f0(0x1c6)+'le\x22\x20s'+'tyle='+_0x2323f0(0x655)+_0x2323f0(0x31f)+_0x2323f0(0x49c)+_0x2323f0(0x400)+_0x2323f0(0x148)+_0x2323f0(0x7bc)+_0x2323f0(0x2c6)+'solid'+_0x2323f0(0x7a4)+_0x2323f0(0x155)+_0x2323f0(0x64e)+_0x2323f0(0x25c)+');col'+_0x2323f0(0x6d0)+'7eef5'+_0x2323f0(0x407)+_0x2323f0(0x25e)+'dius:'+_0x2323f0(0x4b9)+_0x2323f0(0x24e)+_0x2323f0(0x307)+'\x208px;'+'curso'+_0x2323f0(0x5ea)+_0x2323f0(0x44f)+_0x2323f0(0x3f6)+_0x2323f0(0x359)+_0x2323f0(0x47a))+_0xffdfd9[_0x2323f0(0x19d)]+_0xffdfd9[_0x2323f0(0x25a)]+(_0x2323f0(0x16a)+_0x2323f0(0x53d)+_0x2323f0(0x78b)+_0x2323f0(0x193)+'tyle='+'\x22disp'+_0x2323f0(0x732)+_0x2323f0(0x38f)+'>')+('<div\x20'+'style'+_0x2323f0(0x267)+_0x2323f0(0x308)+'8px\x201'+_0x2323f0(0x641)+'order'+_0x2323f0(0x5d2)+'om:1p'+_0x2323f0(0x77b)+_0x2323f0(0x710)+'ba(25'+_0x2323f0(0x652)+_0x2323f0(0x1fb)+'.18);'+_0x2323f0(0x658)+_0x2323f0(0x75e)+_0x2323f0(0x6a0)+'p:8px'+';alig'+_0x2323f0(0x5c6)+'ms:ce'+_0x2323f0(0x44f)+_0x2323f0(0x1e5)+_0x2323f0(0x5cc)+'uto;f'+_0x2323f0(0x3a4)+_0x2323f0(0x676)+'rap;\x22'+'>'),_0x2323f0(0x7a1)+_0x2323f0(0x7d3)+'=\x22sw2'+'-spee'+'d\x22\x20st'+_0x2323f0(0x1ac)+_0x2323f0(0x48b)+'round'+_0x2323f0(0x429)+_0x2323f0(0x5ee)+'nt;bo'+_0x2323f0(0x5f3)+_0x2323f0(0x609)+_0x2323f0(0x60e)+'rgba('+'255,1'+'43,17'+_0x2323f0(0x2f0)+';colo'+'r:#f7'+'eef5;'+_0x2323f0(0x433)+_0x2323f0(0x45c)+'ius:7'+'px;pa'+_0x2323f0(0x252)+_0x2323f0(0x1ec)+_0x2323f0(0x23b)+'curso'+_0x2323f0(0x5ea)+_0x2323f0(0x44f)+_0x2323f0(0x7e0)+'ed\x20of'+'f</bu'+_0x2323f0(0x47a))+(_0x2323f0(0x6b5)+_0x2323f0(0x335)+_0x2323f0(0x361)+_0x2323f0(0x2d4)+_0x2323f0(0x34f)+_0x2323f0(0x2e6)+'ange\x22'+'\x20min='+_0x2323f0(0x226)+'ax=\x225'+'\x22\x20ste'+_0x2323f0(0x5a7)+_0x2323f0(0x6f5)+_0x2323f0(0x5b4)+_0x2323f0(0x6c9)+'yle=\x22'+'width'+_0x2323f0(0x1a5)+_0x2323f0(0x28c)+'ent-c'+_0x2323f0(0x372)),_0x5ad662)+_0x2323f0(0x136),_0x2323f0(0x298)+'\x20id=\x22'+'sw2-f'+_0x2323f0(0x2ce)+_0x2323f0(0x2a0)+_0x2323f0(0x41e)+_0x2323f0(0x1e3)+_0x2323f0(0x372)+'#bda9'+'c9;mi'+'n-wid'+_0x2323f0(0x1e2)+_0x2323f0(0x2db)+_0x2323f0(0x38d)+_0x2323f0(0x759)+'>')+('<butt'+_0x2323f0(0x7d3)+'=\x22sw2'+_0x2323f0(0x57e)+_0x2323f0(0x41e)+_0x2323f0(0x587)+'ackgr'+'ound:'+'trans'+_0x2323f0(0x718)+_0x2323f0(0x2da)+_0x2323f0(0x76b)+'px\x20so'+_0x2323f0(0x2d2)+_0x2323f0(0x4dd)+_0x2323f0(0x201)+'3,177'+_0x2323f0(0x23e)+_0x2323f0(0x232)+':#f7e'+_0x2323f0(0x2a6)+'order'+'-radi'+'us:7p'+_0x2323f0(0x167)+'ding:'+_0x2323f0(0x1aa)+'px;cu'+_0x2323f0(0x585)+_0x2323f0(0x322)+_0x2323f0(0x1fc)+_0x2323f0(0x4d5)+'hot\x20('+'F9)</'+'butto'+'n>')+('<span'+'\x20id=\x22'+_0x2323f0(0x42b)+'int\x22\x20'+'style'+_0x2323f0(0x63b)+'or:#8'+_0x2323f0(0x551)+_0x2323f0(0x559)+'twice'+'\x20whil'+'e\x20wal'+'king\x20'+'/\x20spr'+_0x2323f0(0x4ba)+_0x2323f0(0x3e3)+_0x2323f0(0x539)+_0x2323f0(0x5f0)+'ks\x20wh'+_0x2323f0(0x4c8)+_0x2323f0(0x168)+_0x2323f0(0x1ff)+_0x2323f0(0x3e5)+_0x2323f0(0x759)+'>')+(_0x2323f0(0x206)+'>'),_0xffdfd9['JrUpW'])+(_0x2323f0(0x6a3)+'eight'+_0x2323f0(0x3f2)+_0x2323f0(0x23c)+'\x20repo'+_0x2323f0(0x3cd)+'t.\x0a\x0aT'+_0x2323f0(0x4b6)+_0x2323f0(0x181)+_0x2323f0(0x129)+_0x2323f0(0x550)+_0x2323f0(0x7e4)+_0x2323f0(0x5ef)+_0x2323f0(0x3cf)+_0x2323f0(0x3fa)+'rame\x20'+_0x2323f0(0x3d4)+'\x20—\x20no'+_0x2323f0(0x3ee)+_0x2323f0(0x6d2)+_0x2323f0(0x15f)+'.\x0a\x0aIf'+_0x2323f0(0x3a3)+_0x2323f0(0x6e4)+_0x2323f0(0x3c0)+_0x2323f0(0x608)+_0x2323f0(0x4f0)+_0x2323f0(0x6fb)+_0x2323f0(0x291)+_0x2323f0(0x564)+_0x2323f0(0x53f)+'g\x20int'+'o\x20the'+'\x20cros'+'s-ori'+_0x2323f0(0x487)+'ame\x20f'+_0x2323f0(0x62c)+_0x2323f0(0x61c)+'>'),_0x2323f0(0x206)+'>');var _0x187af5=_0x346ce3[_0x2323f0(0x326)+_0x2323f0(0x2bf)+_0x2323f0(0x733)](_0x2323f0(0x162)+'statu'+'s'),_0x424c71=_0x346ce3['query'+_0x2323f0(0x2bf)+'tor'](_0x2323f0(0x162)+'build'),_0xd3fac8=_0x346ce3[_0x2323f0(0x326)+'Selec'+_0x2323f0(0x733)](_0xffdfd9[_0x2323f0(0x731)]),_0x189fe9=_0x346ce3[_0x2323f0(0x326)+_0x2323f0(0x2bf)+_0x2323f0(0x733)](_0xffdfd9[_0x2323f0(0x3b2)]),_0x5f0d03=_0x346ce3['query'+_0x2323f0(0x2bf)+'tor'](_0x2323f0(0x162)+'x'),_0x197cf0=_0x346ce3['query'+_0x2323f0(0x2bf)+'tor'](_0xffdfd9[_0x2323f0(0x158)]),_0x1cd23f=_0x346ce3['query'+'Selec'+_0x2323f0(0x733)](_0x2323f0(0x162)+_0x2323f0(0x2b2)),_0x3ec584=_0x346ce3['query'+_0x2323f0(0x2bf)+_0x2323f0(0x733)]('#sw2-'+'snap'),_0x5f01f0=_0x346ce3[_0x2323f0(0x326)+_0x2323f0(0x2bf)+'tor'](_0x2323f0(0x162)+_0x2323f0(0x27b)),_0x272a4e=_0x346ce3[_0x2323f0(0x326)+_0x2323f0(0x2bf)+_0x2323f0(0x733)](_0xffdfd9['itzrD']),_0x3ce338=_0x346ce3['query'+'Selec'+_0x2323f0(0x733)](_0xffdfd9['zUmxH']),_0x107adc=_0x346ce3[_0x2323f0(0x326)+_0x2323f0(0x2bf)+'tor'](_0xffdfd9['ynzQc']),_0x1b7b21=null,_0x3c5114=![];function _0x1b6843(){var _0x154dbe=_0x2323f0;if(_0x1cd23f)_0x1cd23f[_0x154dbe(0x4bb)]['displ'+'ay']=_0x3c5114?'':_0x154dbe(0x259);if(_0x197cf0)_0x197cf0[_0x154dbe(0x21b)+'onten'+'t']=_0x3c5114?'close':_0x203a58[_0x154dbe(0x2c9)];_0x346ce3['style'][_0x154dbe(0x46e)]=_0x3c5114?'min(5'+_0x154dbe(0x49e)+_0x154dbe(0x70f):_0x154dbe(0x345),_0x346ce3[_0x154dbe(0x4bb)][_0x154dbe(0x48b)+_0x154dbe(0x5f5)]=_0x3c5114?'#150c'+'1d':'rgba('+'21,12'+_0x154dbe(0x1f4)+'9)';}if(_0x197cf0)_0x197cf0[_0x2323f0(0x13d)+'ck']=function(){_0x3c5114=!_0x3c5114,_0x1b6843();};_0xffdfd9[_0x2323f0(0x53c)](_0x1b6843);if(_0x5f0d03)_0x5f0d03[_0x2323f0(0x13d)+'ck']=function(){_0x4fa3ac(!![]);};if(_0x3ec584)_0x3ec584['oncli'+'ck']=function(){var _0x2dbbee=_0x2323f0,_0x1331e8={'mYyuT':_0x2dbbee(0x772)+'8a'};_0xffdfd9[_0x2dbbee(0x21e)](_0xffdfd9[_0x2dbbee(0x677)],_0x2dbbee(0x270))?(_0x5425b5=_0x2dbbee(0x3d2)+_0x2dbbee(0x30c)+_0x2dbbee(0x649)+'·\x20'+_0xcac7+'s',_0xbcffd7=_0x1331e8[_0x2dbbee(0x74b)]):_0xffdfd9[_0x2dbbee(0x499)](_0x1525ad,_0x2dbbee(0x597)+'hot');};var _0x119227=![];function _0x45e2e2(){var _0x50f401=_0x2323f0;_0xffdfd9['qNuLh'](_0x1525ad,_0xffdfd9[_0x50f401(0x5d0)],{'on':_0x119227,'factor':_0xffdfd9[_0x50f401(0x75b)](parseFloat,_0x272a4e['value'])||-0x2010+0x1bb0+-0x13*-0x3b});}if(_0x5f01f0)_0x5f01f0[_0x2323f0(0x13d)+'ck']=function(){var _0x2989f3=_0x2323f0,_0x50f59a=(_0x2989f3(0x20a)+_0x2989f3(0x150))[_0x2989f3(0x2fe)]('|'),_0x1c339b=-0x923*0x1+0x66d+0x2b6*0x1;while(!![]){switch(_0x50f59a[_0x1c339b++]){case'0':_0x45e2e2();continue;case'1':_0x119227=!_0x119227;continue;case'2':_0x5f01f0[_0x2989f3(0x4bb)][_0x2989f3(0x232)]=_0x119227?_0x2989f3(0x475)+'1b':_0xffdfd9['ZQeYW'];continue;case'3':_0x5f01f0[_0x2989f3(0x21b)+_0x2989f3(0x7a0)+'t']=_0x119227?_0xffdfd9[_0x2989f3(0x542)]:_0x2989f3(0x3c9)+'\x20off';continue;case'4':_0x5f01f0['style'][_0x2989f3(0x48b)+'round']=_0x119227?_0x5ad662:'trans'+_0x2989f3(0x718)+'t';continue;}break;}};if(_0x272a4e)_0x272a4e['oninp'+'ut']=function(){var _0x273065=_0x2323f0;if(_0x3ce338)_0x3ce338[_0x273065(0x21b)+'onten'+'t']=(parseFloat(_0x272a4e['value'])||0x1*0x424+-0x5*-0x4d6+-0x1c51)['toFix'+'ed'](0x1*-0x9f6+0x127b+-0xa*0xda)+'x';_0x45e2e2();};if(_0x189fe9)_0x189fe9[_0x2323f0(0x13d)+'ck']=function(){var _0xbecd48=_0x2323f0,_0x4302eb={'ckGmn':function(_0x270804,_0x57b6cf){return _0x270804+_0x57b6cf;},'CNNjT':_0xbecd48(0x2e0)+'cts\x20·'+'\x20','geElN':_0xbecd48(0x667)+'a8','tUDLU':function(_0x299b86,_0x5826ed){return _0x299b86!==_0x5826ed;},'gUUEn':_0xbecd48(0x62e),'ZzBhd':'copy','CrmAg':function(_0x20908f){var _0xf72c7b=_0xbecd48;return _0xffdfd9[_0xf72c7b(0x4bf)](_0x20908f);}},_0x17c101=_0xffdfd9['bkYSc'](_0xe7b176+'\x0a',_0x1b7b21?JSON[_0xbecd48(0x1e8)+_0xbecd48(0x526)](_0x1b7b21,null,-0xd7c+0x3fb+0x982):'')+'\x0a'+_0x5e6d96,_0x545320=function(){var _0x5c2350=_0xbecd48;if(_0x189fe9)_0x189fe9[_0x5c2350(0x21b)+'onten'+'t']='Copie'+'d';};if(navigator['clipb'+_0xbecd48(0x58e)]&&navigator[_0xbecd48(0x6e1)+'oard'][_0xbecd48(0x166)+_0xbecd48(0x2dc)])navigator['clipb'+_0xbecd48(0x58e)]['write'+_0xbecd48(0x2dc)](_0x17c101)[_0xbecd48(0x75a)](_0x545320,function(){_0x3523b8();});else _0x3523b8();function _0x3523b8(){var _0x1d1d1d=_0xbecd48,_0x3dcf2f={'utKFq':_0x1d1d1d(0x6b0)+'ooks\x20'+'fire\x20'+_0x1d1d1d(0x588)+'e\x20gam'+_0x1d1d1d(0x5b8)+_0x1d1d1d(0x35e)+'date('+_0x1d1d1d(0x61d)+_0x1d1d1d(0x650)+'\x20capt'+_0x1d1d1d(0x6fe)+'means'};if(_0x4302eb[_0x1d1d1d(0x48c)](_0x1d1d1d(0x62e),_0x4302eb[_0x1d1d1d(0x71a)]))_0xe03830=_0x4302eb['ckGmn'](_0x4302eb['ckGmn']('LIVE\x20'+'·\x20',_0x3a3ca8['keys'](_0x31300c['insta'+_0x1d1d1d(0x54a)])['lengt'+'h']),_0x4302eb[_0x1d1d1d(0x752)])+_0x3aa625+'s',_0x519566=_0x4302eb[_0x1d1d1d(0x67d)];else{var _0x1049a1=document[_0x1d1d1d(0x54d)+'eElem'+'ent'](_0x1d1d1d(0x1ea)+'rea');_0x1049a1['value']=_0x17c101;if(!document[_0x1d1d1d(0x2b2)])return;document[_0x1d1d1d(0x2b2)][_0x1d1d1d(0x790)+_0x1d1d1d(0x4ab)+'d'](_0x1049a1),_0x1049a1[_0x1d1d1d(0x5c0)+'t']();try{'YXiiC'===_0x1d1d1d(0x1c2)?(document[_0x1d1d1d(0x7af)+'omman'+'d'](_0x4302eb[_0x1d1d1d(0x72c)]),_0x4302eb['CrmAg'](_0x545320)):(_0x543acb['push']('no\x20li'+_0x1d1d1d(0x50b)+_0x1d1d1d(0x27c)+'\x20capt'+_0x1d1d1d(0x6fe)+_0x1d1d1d(0x416)),_0x23385f[_0x1d1d1d(0x2ff)](''),_0x12b54e['push'](_0x3dcf2f[_0x1d1d1d(0x383)]),_0x23366b['push'](_0x1d1d1d(0x25d)+_0x1d1d1d(0x691)+_0x1d1d1d(0x56f)+_0x1d1d1d(0x5bc)+_0x1d1d1d(0x596)+'\x20sign'+_0x1d1d1d(0x373)+'\x20did\x20'+'not\x20m'+_0x1d1d1d(0x384)));}catch(_0x3718fb){}_0x1049a1[_0x1d1d1d(0x378)+'e']();}}};setTimeout(function(){var _0x554e46=_0x2323f0;if(_0x554e46(0x2bb)==='Bcmsr'){if(_0x1b7b21)return;if(!_0x187af5||!_0xd3fac8)return;_0x187af5[_0x554e46(0x21b)+_0x554e46(0x7a0)+'t']='no\x20re'+'port\x20'+'after'+_0x554e46(0x69f)+_0x554e46(0x740)+_0x554e46(0x554)+'t\x20inj'+_0x554e46(0x58d)+'?',_0x187af5[_0x554e46(0x4bb)][_0x554e46(0x232)]=_0x203a58[_0x554e46(0x72e)],_0xd3fac8[_0x554e46(0x21b)+_0x554e46(0x7a0)+'t']=_0x203a58[_0x554e46(0x61a)](_0x203a58[_0x554e46(0x61a)](_0x203a58['jxMuz'](_0x203a58[_0x554e46(0x26d)](_0x554e46(0x28e)+_0x554e46(0x3fa)+_0x554e46(0x5a5)+_0x554e46(0x694)+'\x20post'+'ed\x20a\x20'+'singl'+_0x554e46(0x3b8)+_0x554e46(0x34d)+'\x0a'+_0x203a58['FxQQO']+(_0x554e46(0x6a4)+_0x554e46(0x125)+_0x554e46(0x1a8)+_0x554e46(0x273)+_0x554e46(0x6cc)+_0x554e46(0x6e8)+'\x0a\x0a'),_0x203a58['oArHw']),_0x203a58['zKJyp']),_0x554e46(0x432)+_0x554e46(0x2a1)+_0x554e46(0x44c)+_0x554e46(0x7cc)+_0x554e46(0x31c)+_0x554e46(0x255)+'r.js\x20'+'AND\x20t'+'he\x20ol'+'d\x20dia'+'g\x20scr'+'ipt\x20a'+'re\x0a')+(_0x554e46(0x5e1)+_0x554e46(0x6b9)+_0x554e46(0x6d6)+_0x554e46(0x159)+_0x554e46(0x69c)+'es\x20of'+'\x20UWMK'+_0x554e46(0x194)+_0x554e46(0x1a7)+_0x554e46(0x39f)+_0x554e46(0x78d)+'bly.i'+_0x554e46(0x36e)+'tiate'+_0x554e46(0x5f2)),_0x554e46(0x313)+'d\x20the'+_0x554e46(0x537)+_0x554e46(0x76d)+_0x554e46(0x6bc)+_0x554e46(0x272)+'watch'+'\x20this'+_0x554e46(0x24f)+'l\x20aga'+_0x554e46(0x3bb));}else{var _0x102e3e=_0x203a58[_0x554e46(0x799)][_0x554e46(0x2fe)]('|'),_0x3aa373=-0x246d+-0x1e*-0xd7+0x5*0x23f;while(!![]){switch(_0x102e3e[_0x3aa373++]){case'0':var _0x524b63=_0x1853bc[_0x554e46(0x3c8)+'on']||'';continue;case'1':_0x3f57f4[_0x554e46(0x21b)+'onten'+'t']='v'+(_0x416b3e[_0x554e46(0x3c8)+'on']||'?');continue;case'2':var _0x73d846=_0x32edb8;continue;case'3':_0x111b74['style'][_0x554e46(0x433)+_0x554e46(0x26f)+'r']=_0x203a58['WRJmn'](_0x524b63,_0x73d846)?_0x554e46(0x41b)+'255,1'+_0x554e46(0x1b8)+_0x554e46(0x4a2)+')':'#ff6e'+'74';continue;case'4':_0x28fcc9[_0x554e46(0x4bb)]['color']=_0x524b63===_0x73d846?_0x47a5d2:_0x554e46(0x5d4)+'74';continue;}break;}}},0x76c3+-0xcc09*-0x2+-0x12475*0x1);var _0x45281c={'set':function(_0x20c523){var _0x3aeddc=_0x2323f0;if(_0x203a58[_0x3aeddc(0x35b)](_0x203a58['WlbVZ'],_0x203a58['kuFcP']))_0x20239f['warni'+'ngs']['push'](_0x203a58[_0x3aeddc(0x61a)]('plugi'+'n._ru'+_0x3aeddc(0x211)+_0x3aeddc(0x170)+'ot\x20wi'+'ndow.'+'Unity'+'WebMo'+_0x3aeddc(0x222)+_0x3aeddc(0x60b)+_0x3aeddc(0x767)+_0x3aeddc(0x45b)+'lugin'+'\x20was\x20'+_0x3aeddc(0x6b6)+'\x20',_0x3aeddc(0x54c)+_0x3aeddc(0x598)+_0x3aeddc(0x340)+'rent\x20'+_0x3aeddc(0x60b)+_0x3aeddc(0x582)+'stanc'+_0x3aeddc(0x634)+_0x3aeddc(0x4b0)+'\x20glob'+_0x3aeddc(0x794)+'w\x20exp'+_0x3aeddc(0x73d)));else{_0x1b7b21=_0x20c523;if(_0x189fe9)_0x189fe9[_0x3aeddc(0x4bb)][_0x3aeddc(0x658)+'ay']='';if(_0x424c71){_0x424c71[_0x3aeddc(0x21b)+'onten'+'t']=_0x203a58[_0x3aeddc(0x26d)]('v',_0x20c523[_0x3aeddc(0x3c8)+'on']||'?');var _0x5016e6=_0x3615c3,_0x412218=_0x20c523[_0x3aeddc(0x3c8)+'on']||'';_0x424c71[_0x3aeddc(0x4bb)]['color']=_0x203a58[_0x3aeddc(0x35b)](_0x412218,_0x5016e6)?_0x5ad662:_0x3aeddc(0x5d4)+'74',_0x424c71[_0x3aeddc(0x4bb)]['borde'+'rColo'+'r']=_0x203a58[_0x3aeddc(0x4c7)](_0x412218,_0x5016e6)?_0x3aeddc(0x41b)+'255,1'+_0x3aeddc(0x1b8)+_0x3aeddc(0x4a2)+')':_0x3aeddc(0x5d4)+'74';}var _0xd46d89=_0x20c523['insta'+_0x3aeddc(0x54a)]&&_0x20c523['insta'+_0x3aeddc(0x54a)]['FPSco'+_0x3aeddc(0x4bd)+'ler'],_0x13bd17=Math[_0x3aeddc(0x5f5)]((_0x20c523[_0x3aeddc(0x49d)+_0x3aeddc(0x664)]||-0x2143+-0x12e0+-0x1161*-0x3)/(0x18f9+-0x1269+-0x154*0x2));if(_0x187af5){if(_0x3aeddc(0x15c)===_0x203a58[_0x3aeddc(0x766)]){var _0x341beb=_0x284799[_0x3f6d42],_0x50ace0=_0x164cfa[_0x14f03c];if(_0x341beb!==_0x50ace0)_0x50275e[_0x3aeddc(0x2ff)](_0x203a58[_0x3aeddc(0x1a6)](_0x2a79fb+':\x20'+_0x341beb+_0x3aeddc(0x356),_0x50ace0));}else{var _0x2cb120,_0x264640;if(_0xd46d89&&_0x20c523['surve'+'y']&&_0x20c523['surve'+'y'][_0x3aeddc(0x402)+_0x3aeddc(0x4bd)+'ler'])_0x2cb120=_0x203a58['qHysr'](_0x203a58['uiXBN'](_0x203a58['jxMuz'](_0x203a58[_0x3aeddc(0x1b6)],Object[_0x3aeddc(0x123)](_0x20c523['insta'+'nces'])[_0x3aeddc(0x4ed)+'h'])+_0x203a58['LbayA'],_0x13bd17),'s'),_0x264640=_0x203a58['fvqtw'];else{if(_0x20c523[_0x3aeddc(0x698)+_0x3aeddc(0x7cd)+'ed']>0x12*-0x21e+-0x10d6+0x36f2)_0x2cb120=_0x203a58['dWnop'](_0x3aeddc(0x698)+_0x3aeddc(0x223)+'d\x20·\x20',_0x13bd17)+'s',_0x264640='#ffd4'+'8a';else{if(_0x20c523[_0x3aeddc(0x3ea)+_0x3aeddc(0x376)]){if(_0x203a58[_0x3aeddc(0x5e3)]!=='RbkJy'){var _0x4c9e0a=_0x644263[_0x3201f],_0x2b97cc=_0x203a58['pzUrA'](_0x3050b9,_0x2f4788,_0x901602,_0x4c9e0a[_0x3aeddc(0x214)]);if(!_0x2b97cc)return null;var _0x468a6f=new _0x49e99a(_0x2b97cc[_0x3aeddc(0x387)+'r'],_0x2b97cc['byteO'+_0x3aeddc(0x67e)],_0x2b97cc[_0x3aeddc(0x6dc)+_0x3aeddc(0x6af)]),_0x47c8c3=_0x468a6f[_0x3aeddc(0x1eb)+_0x3aeddc(0x182)](_0x4c9e0a[_0x3aeddc(0x72f)],!![]),_0x1960ab=_0x468a6f['getIn'+_0x3aeddc(0x182)](_0x4c9e0a[_0x3aeddc(0x3f3)+'n'],!![]),_0xd1ed50=_0x468a6f[_0x3aeddc(0x447)+'nt8'](_0x4c9e0a['inite'+'d'])&0x210e+-0x1717+-0x6*0x1a9,_0x57aafc=_0x36afbb==='obfF'?_0x468a6f['getFl'+_0x3aeddc(0x6bb)](_0x4c9e0a['fake'],!![]):_0x203a58['WRJmn'](_0x372fb4,_0x203a58['UxkAY'])?_0x468a6f['getIn'+'t32'](_0x4c9e0a[_0x3aeddc(0x637)],!![]):_0x468a6f['getUi'+'nt8'](_0x4c9e0a[_0x3aeddc(0x637)]),_0x125d27=_0x468a6f[_0x3aeddc(0x447)+_0x3aeddc(0x351)](_0x4c9e0a['activ'+'e'])&-0xc31*0x2+-0x1*-0x3ae+0x14b5;return{'keyAtOffset0':_0x47c8c3,'hidden':_0x1960ab,'inited':_0xd1ed50,'fake':_0x57aafc,'act':_0x125d27,'hex':_0x4a19b0(_0x2b97cc),'alt':_0x32c1de===_0x3aeddc(0x3c1)?_0x1960ab^_0x203a58[_0x3aeddc(0x236)](_0x57aafc,-0x1990+-0x1127+0x2ab7):null};}else _0x2cb120=_0x203a58[_0x3aeddc(0x26d)](_0x203a58[_0x3aeddc(0x61a)](_0x203a58[_0x3aeddc(0x169)],_0x13bd17),'s'),_0x264640=_0x203a58[_0x3aeddc(0x409)];}else _0x2cb120=(_0x20c523[_0x3aeddc(0x6a7)]&&_0x20c523[_0x3aeddc(0x6a7)]['ok']?'armed'+_0x3aeddc(0x574):_0x3aeddc(0x41f)+'g\x20·\x20')+_0x13bd17+'s',_0x264640=_0x203a58[_0x3aeddc(0x409)];}}_0x187af5[_0x3aeddc(0x21b)+_0x3aeddc(0x7a0)+'t']=_0x2cb120,_0x187af5[_0x3aeddc(0x4bb)]['color']=_0x264640;}}_0x107adc&&(_0x107adc[_0x3aeddc(0x21b)+_0x3aeddc(0x7a0)+'t']=_0x20c523[_0x3aeddc(0x30a)]&&_0x20c523['diff'][_0x3aeddc(0x4ed)+'h']?_0x203a58[_0x3aeddc(0x490)](_0x3aeddc(0x5e5)+_0x3aeddc(0x30e)+_0x3aeddc(0x370)+_0x3aeddc(0x7be),_0x20c523['diff'][_0x3aeddc(0x50a)](',\x20')):'F9\x20tw'+'ice\x20w'+'hile\x20'+'walki'+'ng\x20/\x20'+_0x3aeddc(0x795)+_0x3aeddc(0x17d)+_0x3aeddc(0x69b)+_0x3aeddc(0x353)+_0x3aeddc(0x5fc)+_0x3aeddc(0x35f)+_0x3aeddc(0x5d7)+_0x3aeddc(0x458)+'\x20whic'+'h.');_0x20c523[_0x3aeddc(0x27b)]&&_0x5f01f0&&('MZjQr'===_0x203a58[_0x3aeddc(0x258)]?(_0x119227=!!_0x20c523[_0x3aeddc(0x27b)]['on'],_0x5f01f0['textC'+'onten'+'t']=_0x119227?'Speed'+_0x3aeddc(0x197):'Speed'+_0x3aeddc(0x7b8),_0x5f01f0[_0x3aeddc(0x4bb)][_0x3aeddc(0x48b)+'round']=_0x119227?_0x5ad662:_0x203a58['zLaRr'],_0x5f01f0[_0x3aeddc(0x4bb)][_0x3aeddc(0x232)]=_0x119227?_0x203a58[_0x3aeddc(0x6b4)]:_0x203a58['SjxIv'],_0x3ce338&&_0x20c523[_0x3aeddc(0x27b)][_0x3aeddc(0x2d4)+'r']&&(_0x3ce338['textC'+_0x3aeddc(0x7a0)+'t']=Number(_0x20c523[_0x3aeddc(0x27b)][_0x3aeddc(0x2d4)+'r'])['toFix'+'ed'](-0x1*0x1a5+0x1*-0x2531+0x26d7)+'x')):(_0xbf78a9++,_0x2d7167['sane']=!![]));if(_0xd3fac8)try{_0xd3fac8[_0x3aeddc(0x21b)+_0x3aeddc(0x7a0)+'t']=_0x203a58[_0x3aeddc(0x4d3)](_0x48ec0e,_0x20c523);}catch(_0x19f1be){_0xd3fac8[_0x3aeddc(0x21b)+'onten'+'t']=JSON[_0x3aeddc(0x1e8)+_0x3aeddc(0x526)](_0x20c523,null,-0xcb3*-0x1+0x9*-0x129+-0x241);}console[_0x3aeddc(0x17b)](_0x3aeddc(0x22d)+_0x3aeddc(0x40a)+_0x3aeddc(0x3bc)+'lWarz'+'\x20repo'+'rt',_0x203a58[_0x3aeddc(0x684)]+_0x5ad662+(_0x3aeddc(0x50f)+_0x3aeddc(0x36c)+_0x3aeddc(0x29a)+'0'),_0x20c523),console['log'](_0xe7b176+'\x0a'+JSON[_0x3aeddc(0x1e8)+'gify'](_0x20c523,null,0xf6a*-0x2+-0xc83+0x2*0x15ac)+'\x0a'+_0x5e6d96);}}};return _0x346ce3[_0x2323f0(0x586)+'et']['api']='1',_0x346ce3['api']=_0x45281c,_0x45281c;}function _0x48ec0e(_0x518787){var _0x27c6bb=_0x24c400,_0x2832d0=[];_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9[_0x27c6bb(0x5c4)](_0xffdfd9[_0x27c6bb(0x4ff)](_0xffdfd9['zKzyP'](_0x27c6bb(0x7c2)+_0x27c6bb(0x3de),_0x518787[_0x27c6bb(0x507)]||'?'),_0x27c6bb(0x70e)),Math[_0x27c6bb(0x5f5)]((_0x518787[_0x27c6bb(0x49d)+_0x27c6bb(0x664)]||-0x2a7*-0x2+0x1c6d+-0x6bf*0x5)/(-0x1133+-0x10d*-0x6+0xecd)))+'s)'),_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9[_0x27c6bb(0x3f5)](_0xffdfd9['PQUgh']+(_0x518787[_0x27c6bb(0x6da)]?_0xffdfd9[_0x27c6bb(0x254)]:'no')+_0xffdfd9[_0x27c6bb(0x773)],_0x518787[_0x27c6bb(0x1d9)+'pCont'+'ext']?_0xffdfd9[_0x27c6bb(0x254)]:'no')+('\x20\x20\x20ty'+_0x27c6bb(0x1f2))+(_0xffdfd9['FCWto'](_0x518787[_0x27c6bb(0x32a)+'ount'],null)?_0x518787['typeC'+_0x27c6bb(0x6be)]:'?')),_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9[_0x27c6bb(0x5a3)](_0x27c6bb(0x698)+_0x27c6bb(0x3de)+_0x518787[_0x27c6bb(0x698)+_0x27c6bb(0x7cd)+'ed']+'/',_0x518787['hooks'+_0x27c6bb(0x5a8)])+_0xffdfd9['kxhup']),_0x2832d0['push']('');var _0x20e215=_0x518787['insta'+_0x27c6bb(0x54a)]||{},_0x49b104=Object[_0x27c6bb(0x123)](_0x20e215);!_0x49b104[_0x27c6bb(0x4ed)+'h']&&(_0x2832d0[_0x27c6bb(0x2ff)](_0x27c6bb(0x602)+_0x27c6bb(0x50b)+_0x27c6bb(0x27c)+_0x27c6bb(0x6a8)+_0x27c6bb(0x6fe)+'yet.'),_0x2832d0['push'](''),_0x2832d0[_0x27c6bb(0x2ff)](_0x27c6bb(0x6b0)+'ooks\x20'+_0x27c6bb(0x765)+_0x27c6bb(0x588)+'e\x20gam'+_0x27c6bb(0x5b8)+_0x27c6bb(0x35e)+_0x27c6bb(0x7c5)+_0x27c6bb(0x61d)+_0x27c6bb(0x650)+_0x27c6bb(0x6a8)+_0x27c6bb(0x6fe)+_0x27c6bb(0x78a)),_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9[_0x27c6bb(0x37b)]));for(var _0x198cdb=0x67*-0x1e+-0x1d3a+0x294c;_0x198cdb<_0x49b104['lengt'+'h'];_0x198cdb++){var _0xb86409=_0x49b104[_0x198cdb];_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9['Sspfk'](_0xb86409,_0xffdfd9['JHzXs'])+_0x20e215[_0xb86409]);}_0x2832d0['push']('');var _0x51d9e3=_0x518787['surve'+'y']||{},_0x443501=Object['keys'](_0x51d9e3);for(var _0x14e558=0x149+0x2*-0x48b+0x7cd;_0xffdfd9[_0x27c6bb(0x422)](_0x14e558,_0x443501[_0x27c6bb(0x4ed)+'h']);_0x14e558++){if(_0x27c6bb(0x55a)===_0x27c6bb(0x55a)){var _0x45deb3=_0x443501[_0x14e558],_0x3c9dc1=_0x51d9e3[_0x45deb3];if(!_0x3c9dc1||!_0x3c9dc1['lengt'+'h'])continue;_0x2832d0[_0x27c6bb(0x2ff)](_0x27c6bb(0x52b)+_0x45deb3+'\x20'+new Array(Math[_0x27c6bb(0x14c)](-0x3b*0x65+-0x1f8e*-0x1+0x2*-0x423,-0x2c8+0x5f*-0x1b+0x7*0x1d9-_0x45deb3[_0x27c6bb(0x4ed)+'h']))[_0x27c6bb(0x50a)]('─')),_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9[_0x27c6bb(0x7dd)]);for(var _0x193808=-0x1076+-0x1cbd+-0x18f*-0x1d;_0x193808<_0x3c9dc1['lengt'+'h'];_0x193808++){var _0x1911dd=_0x3c9dc1[_0x193808],_0x4585f4=_0xffdfd9['jyKMD'](typeof _0x1911dd['v'],'numbe'+'r')?_0xffdfd9[_0x27c6bb(0x34a)](Math[_0x27c6bb(0x5f5)](_0x1911dd['v']*(-0x3*-0x112+-0x1*-0x184c+-0x179a)),0x4f*-0x3d+0x16e1+-0x2*0x13):_0x1911dd['v'];_0x2832d0[_0x27c6bb(0x2ff)](_0xffdfd9['HDHXQ'](_0xffdfd9[_0x27c6bb(0x121)]('\x20\x20'+_0xffdfd9[_0x27c6bb(0x121)]('0x',_0x1911dd['o']['toStr'+_0x27c6bb(0x714)](0x23dc+-0x1b24+0x454*-0x2))[_0x27c6bb(0x777)+'d'](0x1995+0xc45+-0x25d2)+'\x20'+_0x1911dd['k']['padEn'+'d'](-0x2436+0x7a1+0xe50*0x2),'\x20'),String(_0x4585f4)[_0x27c6bb(0x777)+'d'](-0x88*-0x33+0x6*0x259+-0x13*0x22a))+'\x20'+(_0x1911dd[_0x27c6bb(0x210)]||''));}_0x2832d0[_0x27c6bb(0x2ff)]('');}else{var _0x31457a=_0xdeb6c8[_0x27c6bb(0x5fd)+'WebMo'+'dkit']&&_0x403ce5['Unity'+_0x27c6bb(0x2b7)+'dkit'][_0x27c6bb(0x60b)+'me'],_0x3774b7=_0x31457a&&_0x31457a[_0x27c6bb(0x5c9)+'nalWa'+'smTyp'+'es']||[],_0x2585cf={};for(var _0x486254=-0x77*-0x15+0x20bc+0x3dd*-0xb;_0xffdfd9['opmiV'](_0x486254,_0x3774b7[_0x27c6bb(0x4ed)+'h'])&&_0x486254<0x21e+-0x1*-0x64+0xd1e;_0x486254++){var _0x3339e8=_0xffdfd9['fFbMo'](_0x3774b7[_0x486254][_0x27c6bb(0x1a0)+'s']['join'](','),_0x27c6bb(0x356))+(_0x3774b7[_0x486254]['retur'+'nType']||_0xffdfd9['QnApi']);_0x2585cf[_0x3339e8]=(_0x2585cf[_0x3339e8]||0x1d*0xbb+0xd*0x5f+-0x1a02)+(0x1ed+-0x7e4*-0x3+-0x1998);}_0x36248c[_0x27c6bb(0x6e5)+'ypes']=_0x2585cf;}}if(_0x518787['warni'+_0x27c6bb(0x7de)]&&_0x518787['warni'+'ngs']['lengt'+'h']){_0x2832d0[_0x27c6bb(0x2ff)]('warni'+_0x27c6bb(0x7de));for(var _0x272923=-0x19*-0xb9+0xbe8+-0x1df9;_0x272923<_0x518787[_0x27c6bb(0x14a)+_0x27c6bb(0x7de)][_0x27c6bb(0x4ed)+'h'];_0x272923++)_0x2832d0['push'](_0xffdfd9['WYHUF']+_0x518787['warni'+_0x27c6bb(0x7de)][_0x272923]);}return _0x2832d0[_0x27c6bb(0x50a)]('\x0a');}window['addEv'+'entLi'+_0x24c400(0x744)+'r'](_0x24c400(0x552)+'ge',function(_0xe36d1f){var _0x393b9e=_0x24c400,_0x59566c={'mulUs':function(_0x24c015,_0x39cdd1){return _0x24c015===_0x39cdd1;},'szXtV':function(_0x3ee7ce,_0x167920){return _0x3ee7ce(_0x167920);},'ipVqf':function(_0x2c9f63,_0x14ed26){return _0xffdfd9['BRHcV'](_0x2c9f63,_0x14ed26);},'nSkpV':function(_0x55e898,_0x46e80a){return _0x55e898!==_0x46e80a;},'TGSEm':_0x393b9e(0x13e)+_0x393b9e(0x265),'AsJuy':function(_0x31c11b,_0x2c8635){return _0x31c11b<_0x2c8635;}},_0x527d2d=_0xe36d1f['data'];if(!_0x527d2d||_0x527d2d[_0x393b9e(0x6db)+_0x393b9e(0x4c1)]!==_0x4e807c)return;try{if(_0x393b9e(0x277)===_0x393b9e(0x3f0)){if(_0x59566c[_0x393b9e(0x392)](_0x51c29e,'obfF'))return _0x59566c['szXtV'](_0xac48dd,_0x3073b0^_0x2c7352);if(_0x2e0441==='obfI')return _0x59566c[_0x393b9e(0x140)](_0x496eae,_0x182777)|-0x1*0x26c1+0x5c5+-0x2*-0x107e;return _0x59566c['nSkpV'](_0x59566c['ipVqf'](_0xc9ac9e,_0x45ceb8)&-0x167f*0x1+-0x4*-0x504+0x36e,0x1932+0x37+0x5*-0x515)?-0x10b3+-0x1ab*-0x6+0x6b2:0xd*0x241+-0x1365+-0x9e8;}else{if(_0x527d2d['kind']===_0xffdfd9['ejjsF']){_0x4b645e()['set']({'host':_0x527d2d['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x527d2d[_0x393b9e(0x529)]===_0x393b9e(0x558)+'t')_0x4b645e()[_0x393b9e(0x54f)](_0x527d2d[_0x393b9e(0x558)+'t']);}}catch(_0x25443b){if(_0xffdfd9[_0x393b9e(0x3a6)]===_0xffdfd9[_0x393b9e(0x3a6)])console[_0x393b9e(0x2c7)](_0xffdfd9[_0x393b9e(0x4f9)],_0xffdfd9['DZunn'](_0xffdfd9[_0x393b9e(0x7b0)],_0x5ad662),_0x25443b);else{if(_0x3f94ab['lengt'+'h'])return!![];if(!_0xfec342['Unity'+'WebMo'+_0x393b9e(0x336)]||!_0x3f4f9e[_0x393b9e(0x5fd)+_0x393b9e(0x2b7)+_0x393b9e(0x336)][_0x393b9e(0x60b)+'me'])return![];var _0x4cbb9a=_0x28ee9c[_0x393b9e(0x5fd)+'WebMo'+_0x393b9e(0x336)]['Runti'+'me'];if(!_0x4cbb9a[_0x393b9e(0x2cc)+'ns']||!_0x4cbb9a['plugi'+'ns']['lengt'+'h'])return![];_0x13c45d=_0x5064c1[_0x393b9e(0x5fd)+_0x393b9e(0x2b7)+_0x393b9e(0x336)][_0x393b9e(0x488)+_0x393b9e(0x446)+'er'],_0x4b9dfc=_0x24f443||_0x4cbb9a[_0x393b9e(0x2cc)+'ns'][_0x4cbb9a['plugi'+'ns'][_0x393b9e(0x4ed)+'h']-(0x15e4+-0x3*-0x4b7+-0x4*0x902)];if(!_0x2fb885||typeof _0x259ed3[_0x393b9e(0x485)+_0x393b9e(0x630)]!==_0x59566c['TGSEm'])return![];for(var _0x5af193=-0xb*-0x38+0x533*-0x1+0xb*0x41;_0x59566c['AsJuy'](_0x5af193,_0x292edc[_0x393b9e(0x4ed)+'h']);_0x5af193++){var _0x3f7fff=_0x5634dd[_0x5af193];try{var _0x16d941=_0x2d8aa1['hookP'+'refix']({'typeName':_0x3f7fff['type'],'methodName':_0x393b9e(0x5bf)+'e','params':[_0x393b9e(0x64f),'i32'],'returnType':_0x4440d0},_0x5ceca5(_0x3f7fff[_0x393b9e(0x743)],_0x3f7fff[_0x393b9e(0x2bc)],_0x3f7fff['many']));_0x16e929[_0x393b9e(0x2ff)]({'type':_0x3f7fff[_0x393b9e(0x743)],'hook':_0x16d941,'keep':_0x3f7fff['keep']});}catch(_0x1a27f3){_0x1271d0[_0x393b9e(0x2ff)](_0x3f7fff['type']+':\x20'+_0x59566c[_0x393b9e(0x53a)](_0x3ba623,_0x1a27f3&&_0x1a27f3[_0x393b9e(0x552)+'ge']||_0x1a27f3)[_0x393b9e(0x675)](-0x3*-0x8d+0x25b0+-0x2757,-0x33*-0x5e+0x5d7*0x5+-0x2f4d));}}return _0x3b4ae4['lengt'+'h']>-0x18*0xa3+0x8a*-0x1+-0xe1*-0x12;}}});function _0x2dc1ed(){var _0x5b238d=_0x24c400;if(_0xdb5385()){_0x4fa3ac(!![]);return;}_0xffdfd9[_0x5b238d(0x40c)](_0x4b645e);}if(document['body'])_0x2dc1ed();else document[_0x24c400(0x635)+_0x24c400(0x1b9)+'stene'+'r']('DOMCo'+_0x24c400(0x2c3)+'Loade'+'d',_0x2dc1ed,{'once':!![]});return;}window[_0x24c400(0x76a)+_0x24c400(0x3e1)+'W__']=window[_0x24c400(0x76a)+_0x24c400(0x3e1)+_0x24c400(0x3da)]||{'at':Date['now']()};function _0x5c3bac(_0x1c91dc,_0x28700c){var _0xf9fd51=_0x24c400,_0x5c544d={'__sakura':_0x4e807c,'kind':_0x1c91dc};if(_0x28700c){for(var _0x1f5fcf in _0x28700c)_0x5c544d[_0x1f5fcf]=_0x28700c[_0x1f5fcf];}try{if(window[_0xf9fd51(0x718)+'t']&&_0xffdfd9[_0xf9fd51(0x5dc)](window[_0xf9fd51(0x718)+'t'],window))window['paren'+'t']['postM'+_0xf9fd51(0x1b0)+'e'](_0x5c544d,'*');}catch(_0x363843){}try{if(_0xf9fd51(0x734)===_0xffdfd9[_0xf9fd51(0x374)]){if(window[_0xf9fd51(0x17a)]&&_0xffdfd9[_0xf9fd51(0x6d7)](window['top'],window))window['top'][_0xf9fd51(0x669)+_0xf9fd51(0x1b0)+'e'](_0x5c544d,'*');}else{if(_0x160c3c['lg'])_0x1cdc85['lg'][_0xf9fd51(0x21b)+_0xf9fd51(0x7a0)+'t']=_0xffdfd9[_0xf9fd51(0x599)];return;}}catch(_0x457ed9){}}console['log'](_0xffdfd9[_0x24c400(0x4c0)]+_0x3615c3,_0xffdfd9[_0x24c400(0x3f5)](_0xffdfd9['XueCa'](_0x24c400(0x232)+':',_0x5ad662),_0x24c400(0x50f)+'-weig'+_0x24c400(0x29a)+'0;fon'+'t-siz'+'e:14p'+'x'),{'host':_0x566c38,'href':location['href'],'version':_0x3615c3}),_0xffdfd9[_0x24c400(0x516)](_0x5c3bac,_0x24c400(0x45d),{'host':_0x566c38,'role':_0x29744c});var _0x401b08=window['__SAK'+'URA_S'+_0x24c400(0x3da)]&&window['__SAK'+_0x24c400(0x3e1)+'W__']['at']||Date[_0x24c400(0x134)]();window['addEv'+_0x24c400(0x1b9)+'stene'+'r'](_0x24c400(0x552)+'ge',function(_0x14ab1b){var _0x221902=_0x24c400;try{var _0x101d32=_0x14ab1b&&_0x14ab1b[_0x221902(0x20b)];if(!_0x101d32||_0xffdfd9[_0x221902(0x303)](_0x101d32[_0x221902(0x6db)+_0x221902(0x4c1)],_0x4e807c)||_0xffdfd9['nuByw'](_0x101d32[_0x221902(0x529)],_0x221902(0x362)))return;_0x6ffa29(_0x101d32['cmd'],_0x101d32['arg']);}catch(_0x15c11c){}});try{var _0x359152=new BroadcastChannel('sakur'+'a-sw');_0x359152['onmes'+_0x24c400(0x369)]=function(_0x33f21a){var _0x324003=_0x24c400;if(_0x324003(0x671)!==_0x324003(0x7a9)){var _0x4bb884=_0x33f21a['data'];if(_0x4bb884&&_0xffdfd9[_0x324003(0x160)](_0x4bb884[_0x324003(0x6db)+_0x324003(0x4c1)],_0x4e807c)&&_0x4bb884[_0x324003(0x529)]==='cmd')_0x6ffa29(_0x4bb884['cmd'],_0x4bb884['arg']);}else{var _0x2a10e1=_0xffdfd9[_0x324003(0x533)](_0x5643a6,_0xffdfd9[_0x324003(0x5c4)](_0x379343,_0xffdfd9[_0x324003(0x533)](_0x41fda9,_0x294dbb[_0x22f23b][0x1ee8+0x7e2+-0x26ca*0x1],-0x1784+-0xf68+-0x2*-0x137e)),'i32');if(_0xffdfd9[_0x324003(0x282)](_0x2a10e1,_0xb8e531))_0x50cc28[_0x324003(0x275)][_0x51ea67[_0x2c9f56][-0x248+0x5b9*-0x5+0x1ee6]]=_0x2a10e1;}};}catch(_0x2e55ba){}var _0x49128b=[];(function _0x428de7(){var _0x3eb9a5=_0x24c400,_0x36dcfe={'WGzWp':function(_0x17619e,_0x514301){return _0x17619e===_0x514301;},'mHcIp':function(_0x1bad6b,_0xf79b94){var _0x1ea488=_0x49be;return _0xffdfd9[_0x1ea488(0x6d7)](_0x1bad6b,_0xf79b94);},'vsCwD':function(_0x75a3d9,_0x5e084c){return _0xffdfd9['jyKMD'](_0x75a3d9,_0x5e084c);},'Wwtib':'VzLDR','bCznt':_0x3eb9a5(0x13e)+_0x3eb9a5(0x265)},_0x19770b=[_0x3eb9a5(0x17b),'warn',_0xffdfd9[_0x3eb9a5(0x56c)],_0x3eb9a5(0x352),_0x3eb9a5(0x188)];for(var _0x130561=0xcae*-0x1+0x281*-0xe+-0x41*-0xbc;_0xffdfd9[_0x3eb9a5(0x422)](_0x130561,_0x19770b[_0x3eb9a5(0x4ed)+'h']);_0x130561++){(function(_0x359947){var _0x5824d2=_0x3eb9a5;if(_0x36dcfe[_0x5824d2(0x44d)](_0x36dcfe[_0x5824d2(0x2c0)],_0x36dcfe[_0x5824d2(0x2c0)])){var _0x5eaa70=console[_0x359947];if(typeof _0x5eaa70!==_0x36dcfe['bCznt'])return;console[_0x359947]=function(){var _0x4fa429=_0x5824d2;try{var _0x47a95c='';for(var _0x567424=0x6a*0x15+-0x1d1e+0x146c;_0x567424<arguments[_0x4fa429(0x4ed)+'h'];_0x567424++){var _0x1ab1a1=arguments[_0x567424];if(_0x36dcfe[_0x4fa429(0x480)](typeof _0x1ab1a1,_0x4fa429(0x1e8)+'g'))_0x47a95c+=_0x1ab1a1;else{if(_0x1ab1a1&&_0x1ab1a1['messa'+'ge'])_0x47a95c+=_0x1ab1a1[_0x4fa429(0x552)+'ge'];}}if(_0x47a95c['index'+'Of'](_0xe7b176)!==-(-0x79*-0x16+-0x15af+0xb4a))return _0x5eaa70['apply'](console,arguments);if(_0x47a95c['index'+'Of']('Unity'+'WebMo'+_0x4fa429(0x336))!==-(0x14c1+-0x1620+-0x16*-0x10)){var _0x5cbc7b=_0x47a95c[_0x4fa429(0x675)](0x19d1+-0x23fd+0xa2c,0x2*-0xcfe+0x236+-0x1f*-0xce);if(_0x49128b[_0x4fa429(0x287)+'Of'](_0x5cbc7b)===-(-0x641*0x1+-0x28f*0xa+-0x8*-0x3fb)&&_0x49128b[_0x4fa429(0x4ed)+'h']<0x7*0x541+0x2bd*-0x3+-0x715*0x4)_0x49128b[_0x4fa429(0x2ff)](_0x5cbc7b);}}catch(_0x2a819a){}return _0x5eaa70['apply'](console,arguments);};}else{if(_0x373275['top']&&_0x36dcfe['mHcIp'](_0x58c220['top'],_0x52b711))_0x1ceef6[_0x5824d2(0x17a)][_0x5824d2(0x669)+_0x5824d2(0x1b0)+'e'](_0xe89c1b,'*');}}(_0x19770b[_0x130561]));}}());var _0x23481a={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x3ec818=null,_0x87b564=null,_0xf1652c=-(0x6ec+0xf*0x71+-0xd8a),_0x46e726=null;function _0x9d8c2c(_0xdc6d1f){var _0x1b9b31=_0x24c400,_0x356946={'bvJxv':_0x1b9b31(0x683)+'w\x20glo'+_0x1b9b31(0x56e)};try{if(!_0xdc6d1f)return;var _0x47141c=_0xdc6d1f['insta'+_0x1b9b31(0x141)]?_0xdc6d1f[_0x1b9b31(0x6b9)+_0x1b9b31(0x141)][_0x1b9b31(0x6cd)+'ts']:_0xdc6d1f['expor'+'ts']||null;if(!_0x47141c)return;if(!_0x46e726){if(_0xffdfd9[_0x1b9b31(0x314)](_0xffdfd9[_0x1b9b31(0x256)],'CYNgr'))return _0x352931[_0x1b9b31(0x281)](_0x443d43-_0x44af28)<=_0x55c29e['max'](0x267f+-0x609*-0x3+-0x3899,_0x54c802[_0x1b9b31(0x281)](_0x37934d)*(-0x1089+-0x4c7*-0x2+0x6fb*0x1+0.6));else try{if(_0xffdfd9['FSOMm']!==_0xffdfd9['xazVh'])_0x46e726=Object['keys'](_0x47141c)[_0x1b9b31(0x675)](-0x20*0xa0+0x2bf*-0xd+0x37b3,-0x949*-0x1+0xfb5+-0x1*0x18e6);else{var _0x4bb2ad=_0x2b008d[_0x1b9b31(0x5d3)+'Insta'+_0x1b9b31(0x141)]||_0x31710d['unity'+_0x1b9b31(0x4ec)]||_0x5e3f70['game'];if(_0x4bb2ad)return _0x1685ad['sourc'+'e']=_0x356946['bvJxv'],_0x4bb2ad;}}catch(_0x102366){}}var _0x1e2d3d=_0x47141c['memor'+'y'];_0x1e2d3d&&_0x1e2d3d[_0x1b9b31(0x387)+'r']&&_0xffdfd9[_0x1b9b31(0x651)](_0x1e2d3d[_0x1b9b31(0x387)+'r'][_0x1b9b31(0x6dc)+'ength'],-0x6*0x615+0x683*-0x2+0x2*0x18c2)&&(_0x87b564=_0x1e2d3d,_0xf1652c=Date[_0x1b9b31(0x134)]()-_0x401b08);}catch(_0x3b32d5){}}function _0x38c6fb(){var _0x41dc9a=_0x24c400,_0x1cf8ba={'iaKMj':_0x41dc9a(0x13e)+_0x41dc9a(0x265)};try{if(_0x41dc9a(0x506)===_0x41dc9a(0x1f6))_0x1e29b2=!!_0x5cd857['speed']['on'],_0xaa70a0[_0x41dc9a(0x21b)+_0x41dc9a(0x7a0)+'t']=_0x5430ee?_0x41dc9a(0x3c9)+_0x41dc9a(0x197):_0x41dc9a(0x3c9)+'\x20off',_0x20fb77[_0x41dc9a(0x4bb)]['backg'+'round']=_0x2d7a92?_0x1c4748:_0x41dc9a(0x1fe)+_0x41dc9a(0x718)+'t',_0x192a1f['style']['color']=_0x2561b2?_0x41dc9a(0x475)+'1b':'#f7ee'+'f5',_0x2b583c&&_0x397b7a['speed'][_0x41dc9a(0x2d4)+'r']&&(_0x563cdc[_0x41dc9a(0x21b)+_0x41dc9a(0x7a0)+'t']=_0x451f99(_0x41d07b[_0x41dc9a(0x27b)]['facto'+'r'])['toFix'+'ed'](-0x7d7+0x60a+-0x6*-0x4d)+'x');else{if(typeof WebAssembly===_0x41dc9a(0x37f)+_0x41dc9a(0x299))return;var _0x381ab0=[_0x41dc9a(0x6b9)+'ntiat'+'e','insta'+'ntiat'+'eStre'+_0x41dc9a(0x704)];for(var _0x9ad7a2=-0x5*0x797+0x138b+0x4c*0x3e;_0x9ad7a2<_0x381ab0['lengt'+'h'];_0x9ad7a2++){_0xffdfd9[_0x41dc9a(0x27a)]===_0x41dc9a(0x38b)?(_0x467438[_0x41dc9a(0x225)]=_0x742eed,_0x1ff7c2['v']=_0x3e86ed[0x2283*-0x1+-0x2039+0x10af*0x4]):function(_0x3c40a4){var _0x3275a6=_0x41dc9a,_0x5f3e9a=WebAssembly[_0x3c40a4];if(typeof _0x5f3e9a!=='funct'+'ion'||_0x5f3e9a[_0x3275a6(0x6db)+_0x3275a6(0x176)+_0x3275a6(0x523)+'ap'])return;var _0x309d1e=function(){var _0x4c1b86=_0x3275a6,_0x5808d1=_0x5f3e9a[_0x4c1b86(0x311)](this,arguments);try{if(_0x5808d1&&typeof _0x5808d1[_0x4c1b86(0x75a)]===_0x1cf8ba[_0x4c1b86(0x3c6)])_0x5808d1[_0x4c1b86(0x75a)](_0x9d8c2c,function(){});else _0x9d8c2c(_0x5808d1);}catch(_0x542475){}return _0x5808d1;};_0x309d1e[_0x3275a6(0x6db)+'uraMe'+_0x3275a6(0x523)+'ap']=!![];try{Object['defin'+_0x3275a6(0x717)+'erty'](_0x309d1e,_0xffdfd9[_0x3275a6(0x16b)],{'value':_0x5f3e9a['name'],'configurable':!![]});}catch(_0x30bcb6){}WebAssembly[_0x3c40a4]=_0x309d1e;}(_0x381ab0[_0x9ad7a2]);}}}catch(_0x47a9f0){}}var _0x1fd903=null,_0x316d93=null,_0x269165={},_0x18eac=[],_0x4b7edf=[],_0x6fda40=[{'type':_0xffdfd9['hNUxR'],'keep':!![]},{'type':_0xffdfd9[_0x24c400(0x23d)],'keep':!![]},{'type':_0x24c400(0x5b0)+_0x24c400(0x5f7)+_0x24c400(0x78e),'keep':![]},{'type':_0xffdfd9[_0x24c400(0x1cd)],'keep':!![]},{'type':_0xffdfd9[_0x24c400(0x47e)],'keep':!![]},{'type':'Photo'+'nNetw'+_0x24c400(0x278)+'nc','keep':!![],'many':!![]},{'type':_0x24c400(0x46c)+'rkPla'+_0x24c400(0x337)+_0x24c400(0x14d)+_0x24c400(0x5ca),'keep':!![],'many':!![]},{'type':_0x24c400(0x32c)+'otrol'+_0x24c400(0x2be),'keep':!![],'many':!![]},{'type':_0xffdfd9[_0x24c400(0x71e)],'keep':!![],'many':!![]}],_0x1ebabd=[_0xffdfd9[_0x24c400(0x584)],_0xffdfd9[_0x24c400(0x79e)],'ch.sy'+_0x24c400(0x495)+_0x24c400(0x77a)+_0x24c400(0x553)+'ll',_0xffdfd9['KOeTA'],_0x24c400(0x1b1)+_0x24c400(0x2f3)+_0x24c400(0x4c4)+'rCont'+_0x24c400(0x2f8)+'r.dll',_0x24c400(0x4a4)+'erate'+'d'];(function _0x4bad01(){var _0x192a9f=_0x24c400;try{var _0x4867dc=(_0x192a9f(0x5c2)+'|6|8|'+_0x192a9f(0x137)+_0x192a9f(0x42d))['split']('|'),_0x32c170=-0x146c+0x349+0x1123;while(!![]){switch(_0x4867dc[_0x32c170++]){case'0':if(!_0x3c7d41||_0xffdfd9[_0x192a9f(0x212)](typeof _0x3c7d41[_0x192a9f(0x54d)+_0x192a9f(0x774)+'in'],_0x192a9f(0x13e)+_0x192a9f(0x265))){_0x23481a[_0x192a9f(0x388)]='Runti'+_0x192a9f(0x51e)+_0x192a9f(0x5b5)+'lugin'+'\x20unav'+'ailab'+'le';return;}continue;case'1':_0x23481a['hooks'+_0x192a9f(0x703)+_0x192a9f(0x4d8)]=_0x18eac['lengt'+'h'];continue;case'2':_0x23481a[_0x192a9f(0x5a6)+_0x192a9f(0x1cb)]=!![];continue;case'3':_0x953b9c();continue;case'4':try{var _0x24c0a9=window[_0x192a9f(0x5fd)+_0x192a9f(0x2b7)+_0x192a9f(0x336)][_0x192a9f(0x60b)+'me'];_0x24c0a9[_0x192a9f(0x6db)+_0x192a9f(0x242)+'g']=_0xffdfd9[_0x192a9f(0x647)](_0x3615c3+':',Math[_0x192a9f(0x623)+'m']()[_0x192a9f(0x633)+_0x192a9f(0x714)](-0x16f+0x35e+-0x1cb)['slice'](-0x16e3+-0x20b6+0x379b,-0x1314+0x1f27*0x1+-0xc09)),_0x3ec818=_0x24c0a9['__sak'+_0x192a9f(0x242)+'g'];}catch(_0x35386e){}continue;case'5':_0x38c6fb();continue;case'6':_0x316d93=_0x3c7d41[_0x192a9f(0x54d)+'ePlug'+'in']({'name':_0x192a9f(0x44c)+_0x192a9f(0x604)+_0x192a9f(0x31c)+'z','version':_0x3615c3,'referencedAssemblies':_0x1ebabd[_0x192a9f(0x675)]()});continue;case'7':_0x23481a['attem'+'pted']=!![];continue;case'8':_0x23481a['ok']=!![];continue;case'9':var _0x3c7d41=window[_0x192a9f(0x5fd)+'WebMo'+_0x192a9f(0x336)]&&window['Unity'+_0x192a9f(0x2b7)+_0x192a9f(0x336)]['Runti'+'me'];continue;}break;}}catch(_0x59e487){_0x192a9f(0x3ef)!==_0xffdfd9['SXHIN']?_0x23481a[_0x192a9f(0x388)]=_0xffdfd9['RptzW'](String,_0x59e487&&_0x59e487['messa'+'ge']||_0x59e487):_0x2c5236[_0x192a9f(0x388)]=_0xffdfd9[_0x192a9f(0x499)](_0x67bb22,_0x91ac01&&_0x43f382['messa'+'ge']||_0x32efef);}}());var _0x2adacf=new Float32Array(-0x1f1b+-0x3*0x505+-0xdf*-0x35),_0x3ea4c8=new Int32Array(_0x2adacf[_0x24c400(0x387)+'r']);function _0x339cbe(_0x293b4d){var _0x3b661c=_0x24c400;if(_0x3b661c(0x4e2)===_0xffdfd9['oduGW'])return _0x2adacf[-0x14b3+0xeed+0x5c6]=_0x293b4d,_0x3ea4c8[-0x487*0x4+0xd*0x2d1+-0x1281];else _0x1fc13d['textC'+_0x3b661c(0x7a0)+'t']=_0x55de9c['strin'+'gify'](_0x581798,null,0x241+-0x10b4*0x1+0xe74);}function _0x43b283(_0x972407){return _0x3ea4c8[0x6bf+-0x104e+0x1*0x98f]=_0x972407|0x14f+0x17cb+-0x7e*0x33,_0x2adacf[0x3*0xb9b+0xe0b*0x2+0x3ee7*-0x1];}var _0x6647fd={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x27d025(){var _0x500cff=_0x24c400,_0x526f64={'mpzsH':function(_0x4c6e9b,_0x51d936){return _0xffdfd9['UPlTf'](_0x4c6e9b,_0x51d936);}};if(_0xffdfd9[_0x500cff(0x52f)]!=='fwoYN'){try{if(_0x316d93&&_0x316d93['_runt'+_0x500cff(0x7d5)]){var _0x297681=_0x316d93[_0x500cff(0x186)+'ime'];if(_0xffdfd9['iQzex'](typeof _0x297681[_0x500cff(0x55e)+'veGam'+'e'],_0x500cff(0x13e)+_0x500cff(0x265))){if(_0xffdfd9['cJGqK']('NZiwP','Avenh')){if(_0x21a694[_0x2a9f46][_0x500cff(0x443)]&&_0x37dff1[_0x7e4843][_0x500cff(0x443)]['appli'+'ed'])_0x47f35d++;}else{var _0x232c21=_0x297681[_0x500cff(0x55e)+_0x500cff(0x297)+'e']();if(_0x232c21)return _0x6647fd['sourc'+'e']=_0x500cff(0x2cc)+_0x500cff(0x502)+_0x500cff(0x211)+_0x500cff(0x6fd)+_0x500cff(0x175)+_0x500cff(0x39d),_0x232c21;}}if(_0x297681[_0x500cff(0x24c)])return _0x6647fd['sourc'+'e']=_0xffdfd9['SkEQE'],_0x297681[_0x500cff(0x24c)];}}catch(_0xee1f3d){}try{if(_0x500cff(0x2d6)!==_0xffdfd9['qFcqf'])_0x1b76a1(_0x500cff(0x27b),{'on':_0x4a08f3,'factor':_0x526f64['mpzsH'](_0x33474d,_0x3c2f5f['value'])||0x1f7c+-0x52*0x45+0x961*-0x1});else{var _0xa89bb5=window[_0x500cff(0x5fd)+'WebMo'+_0x500cff(0x336)]&&window['Unity'+'WebMo'+_0x500cff(0x336)]['Runti'+'me'];if(_0xa89bb5&&typeof _0xa89bb5['resol'+'veGam'+'e']===_0x500cff(0x13e)+'ion'){if(_0xffdfd9[_0x500cff(0x600)]===_0xffdfd9[_0x500cff(0x3b5)]){if(!_0x3de7c7||!_0x4b00bf)return null;var _0x42b30f=new _0x44d430(_0x2c90a7)[_0x500cff(0x4da)+'assNa'+'me']();return _0xffdfd9[_0x500cff(0x2d8)](_0x42b30f,_0x1ad64d)?null:_0x42b30f;}else{var _0x3d3946=_0xa89bb5[_0x500cff(0x55e)+_0x500cff(0x297)+'e']();if(_0x3d3946){if(_0x500cff(0x6f4)!=='BGMLt')return _0x6647fd['sourc'+'e']=_0xffdfd9[_0x500cff(0x7e2)],_0x3d3946;else{var _0x53c5db=_0x56ae4d(_0x43f407+_0x43e54c(_0x3d14a6[_0x240536][0x165a*0x1+0xd01+-0x235b*0x1],0x2*-0xb7e+0x172+-0x452*-0x5),'u32');if(_0x53c5db)_0x3876e4['refs'][_0x1bd941[_0x2f4b13][-0x608+0x1927*0x1+-0x2*0x98f]]='0x'+(_0x53c5db>>>0x16da+0x152e+-0x2c08)[_0x500cff(0x633)+_0x500cff(0x714)](-0x1a3d+-0x9e*-0x3+0x1873);}}}}if(_0xa89bb5&&_0xa89bb5[_0x500cff(0x24c)])return _0x6647fd['sourc'+'e']=_0x500cff(0x60b)+_0x500cff(0x6e0)+'ame',_0xa89bb5;}}catch(_0x245541){}try{if('RcLeF'===_0xffdfd9['SffBd'])return{'o':_0xffdfd9[_0x500cff(0x5c4)]('0x',_0x19ff97[0x21d4+0x4a*-0x83+0x2f*0x16]['toStr'+_0x500cff(0x714)](0x1*0xd69+0xfbe+0x1d17*-0x1)),'v':_0x4ee621(_0x2f210c+_0x2dc301[-0x1f79*0x1+0x1c05+0x374],_0x38ea03[0xe38+-0x2*0x72f+-0x1*-0x27])};else{var _0x3ea7a0=window[_0x500cff(0x5d3)+_0x500cff(0x7e1)+_0x500cff(0x141)]||window['unity'+_0x500cff(0x4ec)]||window['game'];if(_0x3ea7a0)return _0x6647fd[_0x500cff(0x17f)+'e']=_0x500cff(0x683)+'w\x20glo'+_0x500cff(0x56e),_0x3ea7a0;}}catch(_0x253b2f){}try{if(typeof game!==_0x500cff(0x37f)+_0x500cff(0x299)&&game){if(_0xffdfd9[_0x500cff(0x332)](_0x500cff(0x1dd),_0x500cff(0x1dd)))_0x5af648=_0xffdfd9[_0x500cff(0x199)]((_0xb00551['arm']&&_0x35bbaa['arm']['ok']?_0x500cff(0x366)+_0x500cff(0x574):_0xffdfd9[_0x500cff(0x243)])+_0x40fd4f,'s'),_0x1c1fbc=_0x500cff(0x772)+'8a';else return _0x6647fd[_0x500cff(0x17f)+'e']=_0xffdfd9[_0x500cff(0x783)],game;}}catch(_0x13a894){}try{var _0x36c533=Object[_0x500cff(0x123)](window);for(var _0x27b416=-0xa16+-0x1*0x1186+0x1b9c;_0xffdfd9['opmiV'](_0x27b416,_0x36c533['lengt'+'h'])&&_0x27b416<-0x25cb+-0x1f59+-0x2dc*-0x19;_0x27b416++){var _0x4b7377=window[_0x36c533[_0x27b416]];if(_0x4b7377&&_0xffdfd9[_0x500cff(0x33a)](typeof _0x4b7377,_0xffdfd9['RlKyl'])&&_0x4b7377[_0x500cff(0x2c8)+'e']&&_0x4b7377[_0x500cff(0x2c8)+'e'][_0x500cff(0x43f)+'8']&&_0x4b7377[_0x500cff(0x2c8)+'e'][_0x500cff(0x43f)+'8'][_0x500cff(0x387)+'r'])return _0x6647fd['sourc'+'e']=_0xffdfd9['zKzyP'](_0xffdfd9['jTFKA'](_0xffdfd9['dGrdV'],_0x36c533[_0x27b416]),_0xffdfd9[_0x500cff(0x764)]),_0x4b7377;}}catch(_0x4f53cc){}return _0x6647fd[_0x500cff(0x17f)+'e']=null,null;}else return _0xffdfd9[_0x500cff(0x2d8)](_0x3f2574[_0x500cff(0x743)],_0x276882);}function _0x74e940(){var _0xede94e=_0x24c400;try{if(_0xede94e(0x622)!==_0xede94e(0x498)){if(_0x87b564&&_0x87b564[_0xede94e(0x387)+'r']&&_0x87b564['buffe'+'r'][_0xede94e(0x6dc)+_0xede94e(0x6af)])return _0x6647fd[_0xede94e(0x17f)+'e']=_0x6647fd['sourc'+'e']||_0xffdfd9['Ssaff'],new Uint8Array(_0x87b564[_0xede94e(0x387)+'r']);}else _0xdda037=_0x2b2159,_0x556ddb=_0x110ee7[_0xede94e(0x134)]()-_0x44f76b;}catch(_0x4a3b25){}try{var _0x3669a0=_0xffdfd9['fTGyN'](_0x27d025);if(_0x3669a0&&_0x3669a0[_0xede94e(0x2c8)+'e']&&_0x3669a0[_0xede94e(0x2c8)+'e'][_0xede94e(0x43f)+'8']&&_0x3669a0[_0xede94e(0x2c8)+'e'][_0xede94e(0x43f)+'8'][_0xede94e(0x387)+'r'])return _0x3669a0[_0xede94e(0x2c8)+'e']['HEAPU'+'8'];}catch(_0x15854b){}return null;}function _0x446236(){var _0x5129cd=_0x24c400,_0xe2e686=_0xffdfd9['jLDdT'](_0x74e940);if(!_0xe2e686)return null;try{return new DataView(_0xe2e686[_0x5129cd(0x387)+'r'],_0xe2e686[_0x5129cd(0x391)+_0x5129cd(0x67e)],_0xe2e686['byteL'+_0x5129cd(0x6af)]);}catch(_0x324023){return null;}}function _0x11f277(_0x3a36f5,_0x5c1136){var _0x24041f=_0x24c400,_0x1c6fd5={'dvLcM':function(_0xabab81,_0x2de3fe){var _0x49a651=_0x49be;return _0xffdfd9[_0x49a651(0x13a)](_0xabab81,_0x2de3fe);},'HclmC':function(_0x48d4c0,_0x833223){return _0xffdfd9['iFSlI'](_0x48d4c0,_0x833223);},'KoHxM':function(_0x2839ff,_0x49c4de){return _0x2839ff*_0x49c4de;},'bMUlY':function(_0x1bf338,_0x2e4b97){var _0x17eb54=_0x49be;return _0xffdfd9[_0x17eb54(0x419)](_0x1bf338,_0x2e4b97);},'fGYKZ':function(_0xcf1951,_0x3c0598){return _0xffdfd9['WNtdc'](_0xcf1951,_0x3c0598);},'MqAsS':function(_0x34b133,_0x3f6a9b){return _0x34b133-_0x3f6a9b;},'rIfyP':'#ff6e'+'74','DNCLg':function(_0x29bac9,_0x4609a9){return _0x29bac9+_0x4609a9;},'hquUE':_0xffdfd9['sXZbr']};if(_0xffdfd9['HlyCS']('aQtOf',_0x24041f(0x75f))){var _0x1e7802=_0x446236();if(!_0x1e7802){if(_0xffdfd9[_0x24041f(0x251)](_0x24041f(0x738),_0x24041f(0x738))){var _0x4bf29e=_0x2b6b5c[_0x24041f(0x326)+_0x24041f(0x2bf)+_0x24041f(0x355)+'l'](_0x24041f(0x517)+'e');for(var _0x4d4a0e=-0x9*-0x17f+-0x18b2*0x1+0x73*0x19;_0x4d4a0e<_0x4bf29e['lengt'+'h'];_0x4d4a0e++){try{if(_0x4bf29e[_0x4d4a0e]['conte'+_0x24041f(0x24a)+_0x24041f(0x6e3)])_0x4bf29e[_0x4d4a0e]['conte'+'ntWin'+'dow']['postM'+_0x24041f(0x1b0)+'e'](_0x4af96a,'*');}catch(_0x34b0d8){}}}else return _0x6647fd[_0x24041f(0x37e)+'d']++,_0x6647fd['lastE'+'rror']=_0x6647fd[_0x24041f(0x289)+_0x24041f(0x483)]||_0x24041f(0x44b)+_0x24041f(0x3fe)+_0x24041f(0x31d)+_0x24041f(0x19c)+_0x24041f(0x5da)+'e\x20not'+'\x20reac'+_0x24041f(0x7c4)+'\x20via\x20'+_0x24041f(0x60b)+'me.re'+_0x24041f(0x78c)+_0x24041f(0x306)+')\x20or\x20'+_0x24041f(0x500)+'indow'+'\x20glob'+'al',undefined;}if(_0xffdfd9[_0x24041f(0x791)](_0x3a36f5,-0x1b27+-0x2656+-0x23*-0x1df)||_0x3a36f5+(-0x19dd+-0x1*-0x252a+-0xb49)>_0x1e7802[_0x24041f(0x6dc)+_0x24041f(0x6af)])return _0x6647fd['faile'+'d']++,_0x6647fd['lastE'+'rror']=_0x6647fd[_0x24041f(0x289)+_0x24041f(0x483)]||_0xffdfd9['JIyMk'](_0xffdfd9['aGHGY'],_0x3a36f5[_0x24041f(0x633)+_0x24041f(0x714)](-0x2200+-0x35a+0x256a*0x1))+_0xffdfd9[_0x24041f(0x21c)]+_0x1e7802[_0x24041f(0x6dc)+_0x24041f(0x6af)][_0x24041f(0x633)+'ing'](0x1cb7+-0x1752+0x15*-0x41),undefined;try{if(_0x24041f(0x3dd)==='jdCRG'){var _0xc826da=('5|6|9'+'|10|4'+'|1|7|'+_0x24041f(0x68e)+'|8')[_0x24041f(0x2fe)]('|'),_0x570ea2=-0x270c+0x4*0x883+0x500;while(!![]){switch(_0xc826da[_0x570ea2++]){case'0':_0x3ae705[_0x24041f(0x367)]();continue;case'1':var _0x3b1feb=_0x5a15c8!==null&&_0x5962f8[_0x24041f(0x200)]===_0x16c6b7;continue;case'2':_0x8f2810[_0x24041f(0x3f4)+_0x24041f(0x60d)]();continue;case'3':_0x432e32['arc'](_0x56b9a5,_0x46a47e,_0x3b1feb?0x35*-0x13+0xf02+0x1*-0xb11:-0x1*0x1425+0x2333+-0xf0b*0x1+0.20000000000000018,-0x2*0xddb+0x3e4+0x2*0xbe9,_0x702d65['PI']*(-0x1ff4+-0x725*-0x2+0x11ac));continue;case'4':_0x4a9b79>_0x1c6fd5[_0x24041f(0x49a)](_0x4235a2,0x1*-0x1d89+0x8ad*-0x1+0x98f*0x4)?(_0x56b9a5=_0x1c6fd5['HclmC'](_0x5a3cd9,_0x1c6fd5['KoHxM'](_0x28b334/_0x4a9b79,_0x121b60-(-0xc67+0x89f*-0x3+-0x2*-0x1325))),_0x46a47e=_0x1c6fd5[_0x24041f(0x477)](_0x3ca49f,_0x1c6fd5[_0x24041f(0x4dc)](_0x1c6fd5[_0x24041f(0x4b7)](_0x2d494e,_0x4a9b79),_0x159f5c-(-0x1cef+0xf4f+-0x1*-0xda6)))):(_0x56b9a5=_0x1c6fd5['HclmC'](_0x3209fe,_0x28b334),_0x46a47e=_0x1c6fd5[_0x24041f(0x589)](_0x1184d1,_0x2d494e));continue;case'5':var _0x5962f8=_0x460dd3['list'][_0x55f4c4];continue;case'6':var _0x28b334=_0x1c6fd5[_0x24041f(0x4dc)](_0x5962f8['x']-_0x14560c[_0x24041f(0x4a6)][-0x1164+0x4*0x2b6+0x68c],_0x535dce),_0x2d494e=_0x1c6fd5[_0x24041f(0x4dc)](_0x1c6fd5['MqAsS'](_0x5962f8['z'],_0x2dbcb4['feet'][-0x1*0x20cf+-0x1619*0x1+0x36ea]),_0x1c854e);continue;case'7':_0x521ba3[_0x24041f(0x1a1)+_0x24041f(0x217)]=_0x3b1feb?_0x24041f(0x41d)+'6a':_0x1c6fd5[_0x24041f(0x7d2)];continue;case'8':_0xe3247b++;continue;case'9':var _0x4a9b79=_0x138cec[_0x24041f(0x48a)](_0x28b334*_0x28b334+_0x2d494e*_0x2d494e);continue;case'10':var _0x56b9a5=_0x1eff38,_0x46a47e=_0x5c040a;continue;}break;}}else{_0x6647fd['ok']++;switch(_0x5c1136){case'u8':return _0x1e7802[_0x24041f(0x447)+'nt8'](_0x3a36f5);case'i8':return _0x1e7802['getIn'+'t8'](_0x3a36f5);case _0x24041f(0x673):return _0x1e7802['getIn'+'t16'](_0x3a36f5,!![]);case _0x24041f(0x51f):return _0x1e7802[_0x24041f(0x447)+_0x24041f(0x4f8)](_0x3a36f5,!![]);case'i32':return _0x1e7802['getIn'+_0x24041f(0x182)](_0x3a36f5,!![]);case _0x24041f(0x5c1):return _0x1e7802['getUi'+_0x24041f(0x6ab)](_0x3a36f5,!![]);case _0x24041f(0x7c8):return _0x1e7802['getFl'+'oat32'](_0x3a36f5,!![]);case _0x24041f(0x5dd):return _0x1e7802['getFl'+_0x24041f(0x3cb)](_0x3a36f5,!![]);case'v2':case'v3':case'v4':return _0x1e7802[_0x24041f(0x61f)+'oat32'](_0x3a36f5,!![]);default:return _0x1e7802['getIn'+_0x24041f(0x182)](_0x3a36f5,!![]);}}}catch(_0xdc5993){if(_0xffdfd9[_0x24041f(0x6d9)](_0x24041f(0x58a),'VBjot'))_0x52de22[_0x24041f(0x14a)+_0x24041f(0x7de)][_0x24041f(0x2ff)](_0x1c6fd5[_0x24041f(0x43c)](_0x1c6fd5['DNCLg'](_0x24041f(0x1dc),_0x4b9cae[_0x24041f(0x698)+'Total']),_0x1c6fd5[_0x24041f(0x695)])+(_0x24041f(0x77f)+'once\x20'+'durin'+_0x24041f(0x687)+_0x24041f(0x78d)+'bly.i'+'nstan'+_0x24041f(0x263)+_0x24041f(0x272)+'snaps'+_0x24041f(0x2d1)+_0x24041f(0x2cc)+_0x24041f(0x71c)+_0x24041f(0x24b)+_0x24041f(0x6e2)+'\x20')+(_0x24041f(0x41c)+_0x24041f(0x382)+'egist'+'ered\x20'+_0x24041f(0x165)+_0x24041f(0x5e2)+'re\x20ig'+_0x24041f(0x434)+'\x20for\x20'+_0x24041f(0x52a)+_0x24041f(0x3ca)+_0x24041f(0x4df)+_0x24041f(0x76d)+'.\x20')+('Regis'+_0x24041f(0x4d8)+'\x20')+_0x4d0d69[_0x24041f(0x698)+'Regis'+'tered'+_0x24041f(0x286)]+(_0x24041f(0x46d)+_0x24041f(0x358)+'uring'+'\x20armi'+'ng\x20at'+_0x24041f(0x5aa)+_0x24041f(0x5df)+'start'+'.'));else return _0x6647fd[_0x24041f(0x37e)+'d']++,_0x6647fd['lastE'+'rror']=_0x6647fd[_0x24041f(0x289)+'rror']||_0xffdfd9['ofTbg'](String,_0xdc5993&&_0xdc5993[_0x24041f(0x552)+'ge']||_0xdc5993)[_0x24041f(0x675)](-0x13a0+0xfcd*-0x2+0x333a,0xc63*-0x3+-0x23dd+0x497e),undefined;}}else try{return _0x284154&&_0x217585[_0x24041f(0x387)+'r']?_0x47d75b['buffe'+'r'][_0x24041f(0x6dc)+'ength']:-0x1d32*0x1+-0xb90+0x28c2*0x1;}catch(_0x6e5437){return-0x11c9+0x6*0x428+-0x727;}}function _0x469481(_0x5ace3c,_0x5a8211,_0x2963a1){var _0x2bca84=_0x24c400,_0x5dd78a={'dMFbV':_0x2bca84(0x37f)+'ined','HtAqX':_0xffdfd9[_0x2bca84(0x783)]};if('oNvHp'!=='vKndF'){var _0xe48980=_0x446236();if(!_0xe48980||_0xffdfd9[_0x2bca84(0x791)](_0x5ace3c,-0x19d4+0x16cd+0x307)||_0x5ace3c+(-0x10f*-0x1b+-0x2*-0x875+-0x2d7b)>_0xe48980[_0x2bca84(0x6dc)+_0x2bca84(0x6af)])return![];try{if(_0xffdfd9[_0x2bca84(0x469)]===_0x2bca84(0x139)){switch(_0x5a8211){case'u8':case'i8':_0xe48980['setUi'+'nt8'](_0x5ace3c,_0xffdfd9['eieIt'](_0x2963a1,0x571*-0x7+-0x4*-0x3f1+0x1752));break;case _0xffdfd9[_0x2bca84(0x7a3)]:case _0xffdfd9['UuORz']:_0xe48980['setIn'+_0x2bca84(0x19b)](_0x5ace3c,_0xffdfd9['jgemM'](_0x2963a1,-0x1f74+0x2b*-0xb3+-0x3d85*-0x1),!![]);break;case'i32':case _0xffdfd9[_0x2bca84(0x30b)]:_0xe48980[_0x2bca84(0x3aa)+_0x2bca84(0x182)](_0x5ace3c,_0xffdfd9['YSBFy'](_0x2963a1,0xc89*0x1+0x1*0xf97+0x12*-0x190),!![]);break;case'f32':_0xe48980['setFl'+'oat32'](_0x5ace3c,_0x2963a1,!![]);break;default:_0xe48980[_0x2bca84(0x3aa)+'t32'](_0x5ace3c,_0xffdfd9[_0x2bca84(0x7d4)](_0x2963a1,-0x2109*0x1+-0x2256+0x435f),!![]);}return!![];}else{var _0x594dae=_0x169c4b();if(!_0x594dae)return null;return{'ptr':_0xffdfd9[_0x2bca84(0x4ff)]('0x',_0x594dae[_0x2bca84(0x341)]['toStr'+_0x2bca84(0x714)](-0x105f+0x354*0x8+-0xa31)),'feet':_0x594dae[_0x2bca84(0x4a6)],'eye':_0x594dae[_0x2bca84(0x420)],'pitch':_0x594dae[_0x2bca84(0x79a)],'yaw':_0x594dae[_0x2bca84(0x780)],'reach':_0x594dae[_0x2bca84(0x143)]};}}catch(_0x496012){return![];}}else{if(typeof _0x2d3b94!==_0x5dd78a['dMFbV']&&_0x3c6b1d)return _0xf95c35[_0x2bca84(0x17f)+'e']=_0x5dd78a['HtAqX'],_0x49da2f;}}var _0x4bae16={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':_0x24c400(0x64f)},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0xffdfd9[_0x24c400(0x7c3)]},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x134302(_0x7e9fb0){var _0x588fbb=_0x24c400,_0x4340f9='';for(var _0x54af42=-0x8a3+-0x3a+0x8dd;_0x54af42<_0x7e9fb0['lengt'+'h'];_0x54af42++){if(_0xffdfd9[_0x588fbb(0x33f)]('QKzZD','QKzZD')){var _0x150adf=_0x7e9fb0[_0x54af42][_0x588fbb(0x633)+'ing'](-0x1bd1+0xdce+0xe13);_0x4340f9+=_0xffdfd9[_0x588fbb(0x73c)](_0x150adf['lengt'+'h']<-0x3a7+-0x8b*-0x2b+-0x30*0x69?'0':'',_0x150adf);}else{var _0x40dd87=_0x4051cf(_0xffdfd9['eAMmp'],_0x552ebe[_0x774ce2[_0x2b9165]][_0x588fbb(0x341)]);_0x40dd87[_0x588fbb(0x727)]=_0x136772[_0x264625[_0x2f7c1a]][_0x588fbb(0x727)],_0x40dd87[_0x588fbb(0x2fa)+_0x588fbb(0x3d7)+'s']=_0x421395[_0x436820[_0x55d48e]][_0x588fbb(0x2fa)+'Seen']-_0x2b3d88;if(_0x40dd87['refs']['healt'+'h'])_0x40dd87[_0x588fbb(0x77c)+'h']=_0x6e8581(_0x548ad3(_0x40dd87['refs']['healt'+'h'],-0xa*-0x260+-0x1179+-0x637),_0x588fbb(0x705)+_0x588fbb(0x1c9)+'pt','obfI');_0x346ccf[_0x588fbb(0x4c2)][_0x588fbb(0x2ff)](_0x40dd87);}}return _0x4340f9;}function _0x1f7708(_0x2acfc0,_0x12747b,_0x3c4b53){var _0x1a2785=_0x24c400,_0xd617a9={'llycQ':function(_0x3e3532,_0x31bc86){var _0x2a1d69=_0x49be;return _0xffdfd9[_0x2a1d69(0x199)](_0x3e3532,_0x31bc86);},'CMMBN':function(_0x43c3f9){return _0xffdfd9['jLDdT'](_0x43c3f9);},'PDxNr':function(_0x9e8d59,_0x5a40af){return _0x9e8d59===_0x5a40af;},'RYOJA':function(_0x1e0ca1,_0x5ae3ae){return _0x1e0ca1+_0x5ae3ae;},'iUaov':_0x1a2785(0x1dc),'OxvpP':_0x1a2785(0x41c)+'oks\x20r'+'egist'+_0x1a2785(0x296)+_0x1a2785(0x165)+'\x20it\x20a'+'re\x20ig'+_0x1a2785(0x434)+'\x20for\x20'+_0x1a2785(0x52a)+_0x1a2785(0x3ca)+_0x1a2785(0x4df)+'\x20page'+'.\x20','iZHFN':_0x1a2785(0x46d)+_0x1a2785(0x358)+'uring'+_0x1a2785(0x7a8)+_0x1a2785(0x4b4)+_0x1a2785(0x5aa)+'ment-'+_0x1a2785(0x5db)+'.','RnfzQ':function(_0x28dcb0,_0x23bbad){var _0x63eb07=_0x1a2785;return _0xffdfd9[_0x63eb07(0x73c)](_0x28dcb0,_0x23bbad);},'FlYNQ':function(_0x531825,_0x201649){return _0x531825+_0x201649;},'NqJus':_0xffdfd9['cvSjH']},_0x2f1b5b=_0x446236();if(!_0x2f1b5b)return _0x6647fd[_0x1a2785(0x37e)+'d']++,_0x6647fd[_0x1a2785(0x289)+_0x1a2785(0x483)]=_0x6647fd['lastE'+'rror']||'no\x20HE'+'APU8\x20'+_0x1a2785(0x31d)+'ty\x20in'+_0x1a2785(0x5da)+'e\x20not'+_0x1a2785(0x36d)+'hable'+_0x1a2785(0x6e6)+_0x1a2785(0x60b)+'me.re'+_0x1a2785(0x78c)+_0x1a2785(0x306)+')\x20or\x20'+'any\x20w'+_0x1a2785(0x617)+_0x1a2785(0x737)+'al',null;if(_0xffdfd9[_0x1a2785(0x3dc)](_0x12747b,0x127*-0x4+-0x15e6+0x8d6*0x3)||_0xffdfd9[_0x1a2785(0x651)](_0x12747b+_0x3c4b53,_0x2f1b5b['byteL'+_0x1a2785(0x6af)]))return _0x6647fd['faile'+'d']++,_0x6647fd['lastE'+_0x1a2785(0x483)]=_0x6647fd['lastE'+_0x1a2785(0x483)]||_0xffdfd9[_0x1a2785(0x454)](_0xffdfd9[_0x1a2785(0x4ff)]('addre'+_0x1a2785(0x183)+_0xffdfd9['fFbMo'](_0x2acfc0,_0x12747b)['toStr'+_0x1a2785(0x714)](-0x17ab+0x1*0x424+0x1397),_0x1a2785(0x65a)+_0x1a2785(0x195)+_0x1a2785(0x7c0)+'0x'),_0x2f1b5b[_0x1a2785(0x6dc)+'ength'][_0x1a2785(0x633)+_0x1a2785(0x714)](-0x14d4+-0xd*-0x10d+-0x73b*-0x1)),null;try{if('mSTDR'===_0x1a2785(0x5bd)){var _0x6eeaa7=new Uint8Array(_0x3c4b53);for(var _0x35a75f=-0x5ee+0x1625+0x7*-0x251;_0x35a75f<_0x3c4b53;_0x35a75f++)_0x6eeaa7[_0x35a75f]=_0x2f1b5b[_0x1a2785(0x447)+'nt8'](_0xffdfd9[_0x1a2785(0x4f3)](_0x2acfc0,_0x12747b)+_0x35a75f);return _0x6647fd['ok']++,_0x6eeaa7;}else{var _0x597cdb=(_0x1a2785(0x6ca)+_0x1a2785(0x749)+'6|2')[_0x1a2785(0x2fe)]('|'),_0x4e9dcf=0xd1*-0x4+0x2416+0x1069*-0x2;while(!![]){switch(_0x597cdb[_0x4e9dcf++]){case'0':if(!_0x1ddf45)return null;continue;case'1':if(_0x2cf5d4<-0x25bd+0x9d*-0x9+0x2b42||_0x2352db+_0x361d99*(-0x248b*-0x1+0xbd4*0x2+-0x3c2f)>_0x1ddf45[_0x1a2785(0x6dc)+_0x1a2785(0x6af)])return null;continue;case'2':return _0xd17062;case'3':var _0xd17062=[];continue;case'4':for(var _0x2bc54a=0x1*0x51b+0x1ee5+-0x2400;_0x2bc54a<_0x4e4716;_0x2bc54a++)_0xd17062[_0x1a2785(0x2ff)](_0x1ddf45[_0x1a2785(0x61f)+_0x1a2785(0x6bb)](_0xd617a9['llycQ'](_0x33740e+_0x4c1110,_0x2bc54a*(-0x52c+-0x47b*0x3+-0x12a1*-0x1)),!![]));continue;case'5':var _0x1ddf45=_0xd617a9[_0x1a2785(0x784)](_0x1defcc);continue;case'6':_0x3bb2fb['ok']+=_0x3ddb13;continue;}break;}}}catch(_0x6fe5a1){if(_0x1a2785(0x295)!=='aMacW')_0xd617a9[_0x1a2785(0x4b2)](_0x110e20[_0x1a2785(0x698)+'Resol'+_0x1a2785(0x696)],0x9*-0x257+0x10e3+0x42c)?_0x119b9c[_0x1a2785(0x14a)+'ngs'][_0x1a2785(0x2ff)](_0xd617a9[_0x1a2785(0x1b3)](_0xd617a9[_0x1a2785(0x47f)](_0xd617a9['RYOJA'](_0xd617a9['iUaov']+_0x4cdb3e['hooks'+'Total']+(_0x1a2785(0x46d)+_0x1a2785(0x2b9)+'e\x20eve'+_0x1a2785(0x530)+_0x1a2785(0x2de)+'UWMK.'+'\x20The\x20'+'apply'+'\x20pass'+'\x20')+('runs\x20'+'once\x20'+_0x1a2785(0x55f)+_0x1a2785(0x687)+'Assem'+'bly.i'+'nstan'+_0x1a2785(0x263)+_0x1a2785(0x272)+_0x1a2785(0x597)+_0x1a2785(0x2d1)+'plugi'+_0x1a2785(0x71c)+'ks.le'+_0x1a2785(0x6e2)+'\x20'),_0xd617a9[_0x1a2785(0x6ce)]),'Regis'+_0x1a2785(0x4d8)+'\x20'),_0x5b8474[_0x1a2785(0x698)+_0x1a2785(0x703)+'tered'+_0x1a2785(0x286)])+_0xd617a9['iZHFN']):_0x1d0ea4['warni'+'ngs'][_0x1a2785(0x2ff)](_0xd617a9[_0x1a2785(0x51a)](_0xd617a9['RYOJA'](_0xd617a9[_0x1a2785(0x142)]('UWMK\x20'+_0x1a2785(0x55e)+'ved\x20',_0x3c4cc5[_0x1a2785(0x698)+_0x1a2785(0x3d1)+_0x1a2785(0x696)]),_0xd617a9[_0x1a2785(0x77d)])+_0x3a50f5[_0x1a2785(0x698)+'Total']+('\x20hook'+'(s)\x20t'+_0x1a2785(0x763)+_0x1a2785(0x44e)+_0x1a2785(0x287)+_0x1a2785(0x5d8)+_0x1a2785(0x79c)+'ed\x20no'+_0x1a2785(0x5f8)+'he\x20si'+_0x1a2785(0x66a)+'re\x20'),'(this'+_0x1a2785(0x187)+_0x1a2785(0x547)+_0x1a2785(0x4f6)+_0x1a2785(0x5b3)+_0x1a2785(0x202)+_0x1a2785(0x730)+'t\x20mat'+_0x1a2785(0x3a5)+_0x1a2785(0x1bb)+_0x1a2785(0x782)));else return _0x6647fd[_0x1a2785(0x37e)+'d']++,_0x6647fd[_0x1a2785(0x289)+_0x1a2785(0x483)]=_0x6647fd[_0x1a2785(0x289)+_0x1a2785(0x483)]||String(_0x6fe5a1&&_0x6fe5a1['messa'+'ge']||_0x6fe5a1)['slice'](0x7eb*-0x1+-0x259*-0x3+-0x20*-0x7,0x4*0x5ea+0x5*-0x1af+0xc7*-0x13),null;}}function _0x4d12f4(_0x1f24e9,_0x4d92e7,_0x407493){var _0x2b3686=_0x24c400,_0x181adb=_0x4bae16[_0x407493],_0x5e947c=_0x1f7708(_0x1f24e9,_0x4d92e7,_0x181adb[_0x2b3686(0x214)]);if(!_0x5e947c)return null;var _0x5eff56=new DataView(_0x5e947c[_0x2b3686(0x387)+'r'],_0x5e947c[_0x2b3686(0x391)+'ffset'],_0x5e947c['byteL'+_0x2b3686(0x6af)]),_0x1e0a17=_0x5eff56[_0x2b3686(0x1eb)+'t32'](_0x181adb['key'],!![]),_0x22c82c=_0x5eff56[_0x2b3686(0x1eb)+'t32'](_0x181adb[_0x2b3686(0x3f3)+'n'],!![]),_0x57fbda=_0x5eff56[_0x2b3686(0x447)+'nt8'](_0x181adb['inite'+'d'])&0xa90+0x9ef+0x56*-0x3d,_0x38b18f=_0xffdfd9[_0x2b3686(0x2d8)](_0x407493,_0xffdfd9['fMhnm'])?_0x5eff56['getFl'+_0x2b3686(0x6bb)](_0x181adb[_0x2b3686(0x637)],!![]):_0x407493===_0xffdfd9[_0x2b3686(0x3af)]?_0x5eff56['getIn'+'t32'](_0x181adb[_0x2b3686(0x637)],!![]):_0x5eff56[_0x2b3686(0x447)+'nt8'](_0x181adb[_0x2b3686(0x637)]),_0x1d6245=_0x5eff56['getUi'+'nt8'](_0x181adb[_0x2b3686(0x48d)+'e'])&0x176+-0x1*0xd8b+0xc16;return{'keyAtOffset0':_0x1e0a17,'hidden':_0x22c82c,'inited':_0x57fbda,'fake':_0x38b18f,'act':_0x1d6245,'hex':_0x134302(_0x5e947c),'alt':_0xffdfd9[_0x2b3686(0x3e8)](_0x407493,_0xffdfd9['aiXsh'])?_0x22c82c^_0xffdfd9[_0x2b3686(0x7d4)](_0x38b18f,0x1*-0x2359+0x163*-0x8+0x2e71):null};}function _0x131fc6(_0x42274d,_0x1f6faf,_0x42b73f){var _0x3d5c03=_0x24c400;if('zcEqo'!==_0x3d5c03(0x659)){if(_0xffdfd9['KeYUY'](_0x42274d,_0xffdfd9[_0x3d5c03(0x459)]))return _0xffdfd9[_0x3d5c03(0x21f)](_0x43b283,_0xffdfd9[_0x3d5c03(0x73b)](_0x1f6faf,_0x42b73f));if(_0x42274d===_0xffdfd9[_0x3d5c03(0x3af)])return _0x1f6faf^_0x42b73f|-0x21b9*0x1+0x1d86+-0x19*-0x2b;return _0xffdfd9[_0x3d5c03(0x5dc)](_0xffdfd9[_0x3d5c03(0x438)](_0xffdfd9[_0x3d5c03(0x568)](_0x1f6faf,_0x42b73f),0x8e2+0x2d6+-0xab9),0x88e+-0x11b*0x2+-0x658)?0x2*0x444+-0x6f*0x32+0xd27:-0x1e5*-0x2+0x538+-0x902;}else{if(_0x214893[_0x3b7543][_0x3d5c03(0x209)+'rs']['lengt'+'h']>=_0x4100f4)_0x53de43[_0x3d5c03(0x2ff)](_0x35e759[_0x4c74c2]);}}function _0x124ce4(_0x39dd5e,_0x234f8e,_0x3ca765){var _0x4792bf=_0x24c400,_0x4c24e6=_0x4bae16[_0x3ca765];if(!_0x4c24e6)return null;var _0x6b1179=_0x11f277(_0xffdfd9[_0x4792bf(0x3f5)](_0x39dd5e+_0x234f8e,_0x4c24e6['key']),'u8'),_0x3988eb=_0xffdfd9['qNuLh'](_0x11f277,_0xffdfd9['oPGBS'](_0x39dd5e,_0x234f8e)+_0x4c24e6['hidde'+'n'],'i32'),_0x154fe2=_0x11f277(_0xffdfd9[_0x4792bf(0x285)](_0x39dd5e,_0x234f8e)+_0x4c24e6['inite'+'d'],'u8'),_0x5eb530=_0x11f277(_0x39dd5e+_0x234f8e+_0x4c24e6['fake'],_0xffdfd9[_0x4792bf(0x160)](_0x3ca765,'obfF')?'f32':_0xffdfd9[_0x4792bf(0x7cf)](_0x3ca765,_0x4792bf(0x3c1))?_0x4792bf(0x64f):'u8'),_0x3b826e=_0x11f277(_0xffdfd9[_0x4792bf(0x1f0)](_0x39dd5e,_0x234f8e)+_0x4c24e6[_0x4792bf(0x48d)+'e'],'u8');if(_0xffdfd9[_0x4792bf(0x33b)](_0x6b1179,undefined)||_0x3988eb===undefined||_0x5eb530===undefined||_0x3b826e===undefined)return null;_0x6b1179&=-0x1aaf+-0x24c1+0x406f*0x1,_0x3988eb|=-0x4*0x749+-0x23fe+-0x1*-0x4122,_0x154fe2=_0xffdfd9[_0x4792bf(0x438)](_0x154fe2||-0x1653+0x8*0x323+-0x2c5,0xaba*-0x3+0x24c3+-0x4*0x125),_0x3b826e&=-0x3*-0x2dd+0xd89+-0x161f;var _0x4b726d;if(_0xffdfd9[_0x4792bf(0x2d8)](_0x3ca765,'obfF'))_0x4b726d=_0x43b283(_0x3988eb^_0x6b1179);else{if(_0xffdfd9[_0x4792bf(0x266)](_0x3ca765,'obfI'))_0x4b726d=_0xffdfd9[_0x4792bf(0x1c3)](_0x3988eb,_0x6b1179)|-0x3*-0x54f+0x3a*-0x65+-0xd*-0x89;else _0x4b726d=_0xffdfd9['wirmS'](_0x3988eb^_0x6b1179,-0x3*0x211+-0x12*0x20b+0x2bf8)!==0x3ab+-0x1760+0x13b5?-0x22fb+0x172b*-0x1+0x3a27:0x253f+-0x13d4+-0xd*0x157;}return{'real':_0x4b726d,'fake':_0x5eb530,'act':_0x3b826e,'init':_0x154fe2,'key':_0x6b1179,'hidden':_0x3988eb};}function _0x468449(_0x547ccc,_0xa36853,_0x2968dd,_0x5d50a5){var _0x4825da=_0x24c400,_0xf0bda7=_0xffdfd9[_0x4825da(0x5a2)]['split']('|'),_0x53e57a=0x25*0x25+-0x55*-0x1f+0x11e*-0xe;while(!![]){switch(_0xf0bda7[_0x53e57a++]){case'0':var _0xd7c0a4=_0x4bae16[_0x2968dd];continue;case'1':var _0x58244f=_0x1f7708(_0x547ccc,_0xa36853,_0xd7c0a4[_0x4825da(0x214)]);continue;case'2':var _0x4b52ef=_0xffdfd9[_0x4825da(0x40f)](_0xd7c0a4[_0x4825da(0x3f1)+'pe'],'u8')?_0x30c71f[_0x4825da(0x447)+'nt8'](_0xd7c0a4[_0x4825da(0x72f)]):_0x30c71f[_0x4825da(0x1eb)+'t32'](_0xd7c0a4[_0x4825da(0x72f)],!![]);continue;case'3':var _0x30c71f=new DataView(_0x58244f['buffe'+'r'],_0x58244f[_0x4825da(0x391)+_0x4825da(0x67e)],_0x58244f[_0x4825da(0x6dc)+_0x4825da(0x6af)]);continue;case'4':return _0xffdfd9[_0x4825da(0x16f)](_0x469481,_0xffdfd9[_0x4825da(0x722)](_0x547ccc,_0xa36853)+_0xd7c0a4['hidde'+'n'],_0x4825da(0x64f),_0x2f2205^_0x4b52ef)&&_0xffdfd9[_0x4825da(0x449)](_0x469481,_0x547ccc+_0xa36853+_0xd7c0a4[_0x4825da(0x637)],_0x2968dd===_0xffdfd9[_0x4825da(0x459)]?'f32':_0xffdfd9[_0x4825da(0x314)](_0x2968dd,_0x4825da(0x3c1))?_0x4825da(0x64f):'u8',_0xffdfd9[_0x4825da(0x5b7)](_0x2968dd,_0x4825da(0x67a))?_0x5d50a5:_0x2968dd==='obfI'?_0xffdfd9[_0x4825da(0x7d4)](_0x5d50a5,-0x7b*-0x1f+0xd92+0x15b*-0x15):_0x5d50a5?0x1597+-0x1015*0x1+-0x581:-0x681*-0x3+-0x1373+-0x1*0x10)&&_0x469481(_0xffdfd9['FNwXQ'](_0xffdfd9['RFtwX'](_0x547ccc,_0xa36853),_0xd7c0a4['activ'+'e']),'u8',0x2*0x43f+-0x61*0x2b+0x1*0x7cd);case'5':if(_0x2968dd===_0xffdfd9[_0x4825da(0x459)])_0x2f2205=_0xffdfd9[_0x4825da(0x688)](_0x339cbe,_0x5d50a5);else{if(_0x2968dd===_0x4825da(0x3c1))_0x2f2205=_0x5d50a5|-0xa87+0x1805+-0x1*0xd7e;else _0x2f2205=_0xffdfd9[_0x4825da(0x77e)](_0x5d50a5?0x5*-0x3bd+-0x2*0x68f+0x1fd0:0x147c+-0x9*0x3f4+0xf18,0x2*0x20e+-0x11ab*-0x1+0x2*-0xa64);}continue;case'6':if(!_0x58244f)return![];continue;case'7':var _0x2f2205;continue;}break;}}var _0x22454f={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x597ffb=-0x1ecf+0x511+0x526*0x5+0.03,_0x107bcb=-0xed*-0x1f+-0x21a5+0x4f4*0x1,_0x897ff7={},_0x419d24=0x70*0x2a+-0x80e+-0xa52,_0x558c9e=[],_0x2c66bc=[];function _0x565c97(_0x23e6d7){var _0x13f42b=_0x24c400;if(_0xffdfd9[_0x13f42b(0x736)]!==_0x13f42b(0x410)){var _0x352791=_0x21e2de[_0x13f42b(0x402)+_0x13f42b(0x4bd)+_0x13f42b(0x2be)];if(!_0x352791||!_0x352791[_0x13f42b(0x341)])return null;var _0x504461=_0x328ca3(_0x352791[_0x13f42b(0x341)],-0x8*-0x2ed+-0xec*-0x29+-0x3a50,0x94e+0xda3*-0x2+-0x11fb*-0x1),_0xd4d09c=_0x3cf366(_0x352791[_0x13f42b(0x341)],-0x1*0x124f+-0x1663+0x2*0x15a5,0xe*-0x9d+-0x169d+0x1f36);if(!_0x504461)return null;return{'ptr':_0x352791[_0x13f42b(0x341)],'feet':_0x504461,'eye':_0xd4d09c,'reach':_0x2ede6a[_0x13f42b(0x48a)](_0x504461[0x1*-0x1eab+0x265b*0x1+-0x7b0]*_0x504461[-0xad8+-0x89c*-0x3+0x3bf*-0x4]+_0xffdfd9['exvjz'](_0x504461[-0x13f1+0x10c8+-0x32b*-0x1],_0x504461[0xe9+-0x1637+0x1550])),'pitch':_0x5182ef(_0x352791['ptr']+(0xb5+0x1552+0xd3*-0x19),_0x13f42b(0x7c8)),'yaw':_0xffdfd9['qNuLh'](_0x4d1028,_0x352791[_0x13f42b(0x341)]+(0x23eb+-0x168f+0x1b4*-0x7),_0x13f42b(0x7c8))};}else{var _0x3ceb5d=_0x32e003['FPSco'+'ntrol'+_0x13f42b(0x2be)]||[],_0x4a73db=[];_0x2c66bc=[],_0x558c9e=[];for(var _0x190a13=0x78*-0x53+0x1fd*0x2+-0x1177*-0x2;_0x190a13<_0x3ceb5d[_0x13f42b(0x4ed)+'h'];_0x190a13++){var _0x3b6b6f=_0x3ceb5d[_0x190a13][0x5*-0xa+-0x10d4+0x1106];if(_0x3ceb5d[_0x190a13][0x7d*-0xa+-0x2c*-0x6e+-0xe05*0x1]!==_0xffdfd9['fMhnm'])continue;var _0x2803bd=_0xffdfd9[_0x13f42b(0x4cf)](_0x4d12f4,_0x23e6d7,_0x3b6b6f,_0x13f42b(0x67a));if(!_0x2803bd||_0xffdfd9['WCBlG'](_0x2803bd[_0x13f42b(0x7b7)+'d'],0x1622*0x1+-0x11d7+-0x44a))continue;var _0x1ac322=_0x131fc6(_0x13f42b(0x67a),_0x2803bd['hidde'+'n'],_0x2803bd['keyAt'+_0x13f42b(0x50d)+'t0']);if(typeof _0x1ac322!==_0xffdfd9[_0x13f42b(0x28b)]||!isFinite(_0x1ac322))continue;var _0x23764c=_0xffdfd9[_0x13f42b(0x454)](_0xffdfd9[_0x13f42b(0x285)](_0x23e6d7,':'),_0x3b6b6f),_0x39bdc1=_0x897ff7[_0x23764c];if(!_0x39bdc1||_0xffdfd9[_0x13f42b(0x5b1)](_0x1ac322,_0x39bdc1[_0x13f42b(0x21a)+'ritte'+'n']))_0x39bdc1=_0x897ff7[_0x23764c]={'base':_0x1ac322,'lastWritten':null};var _0x456655=_0x39bdc1['base'],_0x77e99b=Math[_0x13f42b(0x281)](_0x456655);if(_0x77e99b<-0x6b0*-0x2+-0xfdd*-0x2+-0x2d1a*0x1+0.0001||_0xffdfd9['UxKsM'](_0x77e99b,0x85b3+0x2*0xfaed+-0xf4ed)){if(_0xffdfd9[_0x13f42b(0x45f)](_0x13f42b(0x264),_0x13f42b(0x2aa)))return _0x4f922a['sourc'+'e']=_0x2db7a2['sourc'+'e']||_0x13f42b(0x6b9)+_0x13f42b(0x7b9)+_0x13f42b(0x55b)+_0x13f42b(0x78f)+_0x13f42b(0x35c)+_0x13f42b(0x300),new _0x325f9e(_0x1a5f2f['buffe'+'r']);else{_0x2c66bc[_0x13f42b(0x2ff)]({'o':_0x3b6b6f,'v':_0x1ac322,'why':'impla'+'usibl'+'e'});continue;}}_0x4a73db[_0x13f42b(0x2ff)]({'o':_0x3b6b6f,'v':_0x1ac322,'a':_0x77e99b,'base':_0x456655,'key':_0x23764c,'st':_0x39bdc1});}var _0x198644=[];for(var _0x3b534a=-0x546+-0x70c+0xc52;_0x3b534a<_0x4a73db[_0x13f42b(0x4ed)+'h'];_0x3b534a++){var _0x54f130=_0x4a73db[_0x3b534a]['a'],_0xe29f6e=null;for(var _0x59753c=-0x106*0x1f+0x2*-0x3f5+-0x4*-0x9e9;_0x59753c<_0x198644[_0x13f42b(0x4ed)+'h'];_0x59753c++){var _0x342b81=_0x198644[_0x59753c][_0x13f42b(0x3b1)]/_0x54f130;if(_0x342b81>0x1*-0x1945+-0x3*0x68d+0x2ced-_0x597ffb&&_0x342b81<0x71*0x26+0x2*0x11b1+-0x403*0xd+_0x597ffb){_0xe29f6e=_0x198644[_0x59753c];break;}}if(!_0xe29f6e){if(_0x13f42b(0x321)===_0xffdfd9[_0x13f42b(0x2c5)]){var _0x2986c1={};try{var _0x549eca=(_0x13f42b(0x41a)+'|0|1|'+'5')['split']('|'),_0x337cfd=0x842+-0x43*0x5c+0xfd2;while(!![]){switch(_0x549eca[_0x337cfd++]){case'0':_0x2986c1[_0x13f42b(0x693)+_0x13f42b(0x1d6)+'e']=_0x125c5e&&_0x125c5e[_0x13f42b(0x24c)]?typeof _0x125c5e[_0x13f42b(0x24c)]:_0x13f42b(0x259);continue;case'1':_0x2986c1[_0x13f42b(0x2cc)+'nRunt'+'imeIs'+'Expor'+'ted']=!!(_0x17f5d6&&_0x257d4c['_runt'+'ime']&&_0xffdfd9[_0x13f42b(0x314)](_0xc246e4[_0x13f42b(0x186)+_0x13f42b(0x7d5)],_0x125c5e));continue;case'2':var _0x125c5e=_0x4765fd[_0x13f42b(0x5fd)+'WebMo'+_0x13f42b(0x336)]&&_0x49abd3[_0x13f42b(0x5fd)+'WebMo'+'dkit'][_0x13f42b(0x60b)+'me'];continue;case'3':_0x2986c1[_0x13f42b(0x15d)+'tches']=!!(_0xffdfd9['fXQpw'](_0x125c5e,_0x16d8fc)&&_0x125c5e['__sak'+'uraTa'+'g']===_0x412f07);continue;case'4':_0x2986c1[_0x13f42b(0x275)]=_0x125c5e&&_0x125c5e[_0x13f42b(0x6db)+_0x13f42b(0x242)+'g']||null;continue;case'5':_0x2986c1['plugi'+_0x13f42b(0x404)+_0x13f42b(0x3a8)+'me']=_0x12ff3a&&_0x1e81cc[_0x13f42b(0x186)+'ime']&&_0x104540[_0x13f42b(0x186)+'ime']['_game']?typeof _0x37e5db[_0x13f42b(0x186)+_0x13f42b(0x7d5)][_0x13f42b(0x24c)]:'none';continue;}break;}}catch(_0x3f8693){_0x2986c1['error']=_0x13ca88(_0x3f8693&&_0x3f8693['messa'+'ge']||_0x3f8693);}return _0x2986c1;}else _0xe29f6e={'mean':_0x54f130,'members':[]},_0x198644[_0x13f42b(0x2ff)](_0xe29f6e);}_0xe29f6e[_0x13f42b(0x209)+'rs'][_0x13f42b(0x2ff)](_0x4a73db[_0x3b534a]),_0xe29f6e[_0x13f42b(0x3b1)]=-0x1*0x202+0x1b34+-0x1932;for(var _0x8c3cdd=0x1f*0x7f+-0x776+0x1*-0x7eb;_0x8c3cdd<_0xe29f6e[_0x13f42b(0x209)+'rs'][_0x13f42b(0x4ed)+'h'];_0x8c3cdd++)_0xe29f6e[_0x13f42b(0x3b1)]+=_0xe29f6e['membe'+'rs'][_0x8c3cdd]['a'];_0xe29f6e[_0x13f42b(0x3b1)]/=_0xe29f6e[_0x13f42b(0x209)+'rs'][_0x13f42b(0x4ed)+'h'];}var _0x420ad9=[];for(var _0x59bd45=-0x199a+0xff+-0x189b*-0x1;_0x59bd45<_0x198644['lengt'+'h'];_0x59bd45++){if(_0xffdfd9[_0x13f42b(0x72d)](_0x13f42b(0x2e1),'UHvqQ')){var _0x27b5eb=_0xdedb89[_0x57963c]['toStr'+_0x13f42b(0x714)](-0x14d3*0x1+0xa3a+-0xaa9*-0x1);_0x5077e3+=(_0xffdfd9[_0x13f42b(0x75d)](_0x27b5eb[_0x13f42b(0x4ed)+'h'],-0x44b*0x5+0x29*0x2b+0xe96)?'0':'')+_0x27b5eb;}else{if(_0x198644[_0x59bd45]['membe'+'rs'][_0x13f42b(0x4ed)+'h']>=_0x107bcb)_0x420ad9[_0x13f42b(0x2ff)](_0x198644[_0x59bd45]);}}if(!_0x420ad9[_0x13f42b(0x4ed)+'h']){_0x2c66bc[_0x13f42b(0x2ff)]({'o':-(-0x5*0x69+-0x17eb+0x19f9),'v':0x0,'why':'no\x20gr'+_0x13f42b(0x52d)+'f\x20'+_0x107bcb+('\x20Obsc'+'uredF'+_0x13f42b(0x228)+'\x20agre'+'ed')});return;}var _0x267cbb=_0x420ad9[-0x828*0x4+0x128a+-0x259*-0x6][_0x13f42b(0x3b1)];for(var _0x3940d7=0x279*-0xd+-0x1*-0x24b+-0xeed*-0x2;_0xffdfd9['ePTXs'](_0x3940d7,_0x420ad9['lengt'+'h']);_0x3940d7++)if(_0x420ad9[_0x3940d7][_0x13f42b(0x3b1)]<_0x267cbb)_0x267cbb=_0x420ad9[_0x3940d7]['mean'];var _0x131861=_0x267cbb*(0x250*-0xb+0x3c0+0x15b0+0.5);for(var _0x2a7b15=-0x145*-0x1a+0x1*0x23f9+-0x44fb;_0x2a7b15<_0x198644[_0x13f42b(0x4ed)+'h'];_0x2a7b15++){if(_0x13f42b(0x1d0)===_0xffdfd9['toBPO'])return _0x48cbc2(_0x169668);else{if(_0x198644[_0x2a7b15][_0x13f42b(0x209)+'rs'][_0x13f42b(0x4ed)+'h']>=_0x107bcb)continue;for(var _0x2ad621=-0x100c+0xa19+0x5f3;_0x2ad621<_0x198644[_0x2a7b15][_0x13f42b(0x209)+'rs'][_0x13f42b(0x4ed)+'h'];_0x2ad621++){_0x2c66bc[_0x13f42b(0x2ff)]({'o':_0x198644[_0x2a7b15]['membe'+'rs'][_0x2ad621]['o'],'v':_0x198644[_0x2a7b15][_0x13f42b(0x209)+'rs'][_0x2ad621]['v'],'why':_0xffdfd9['poOSg']});}}}for(var _0x9d365c=0x23bd+-0x1*-0xc0+-0x247d;_0xffdfd9[_0x13f42b(0x339)](_0x9d365c,_0x420ad9[_0x13f42b(0x4ed)+'h']);_0x9d365c++){var _0x28fd41=_0x420ad9[_0x9d365c][_0x13f42b(0x209)+'rs'];for(var _0x3050ad=0xaf1+0xed8*0x1+-0x19c9;_0xffdfd9['ePTXs'](_0x3050ad,_0x28fd41[_0x13f42b(0x4ed)+'h']);_0x3050ad++){var _0x3faad7=_0x28fd41[_0x3050ad];if(_0xffdfd9['xGRpk'](_0x3faad7['a'],_0x131861)){_0x2c66bc[_0x13f42b(0x2ff)]({'o':_0x3faad7['o'],'v':_0x3faad7['v'],'why':_0xffdfd9['GuagY']+_0x131861['toFix'+'ed'](0x18e5+0xf2d+-0x2810)});continue;}var _0x9315d=_0x3faad7[_0x13f42b(0x1c1)]*_0x22454f[_0x13f42b(0x2d4)+'r'];_0xffdfd9['oxyFc'](_0x468449,_0x23e6d7,_0x3faad7['o'],_0x13f42b(0x67a),_0x9315d)&&(_0x3faad7['st'][_0x13f42b(0x21a)+_0x13f42b(0x57a)+'n']=Math[_0x13f42b(0x59d)+'d'](_0x9315d),_0x419d24++,_0x558c9e['push']('0x'+_0x3faad7['o']['toStr'+_0x13f42b(0x714)](-0x1*-0x151f+0x2b*0x32+-0x1d75)));}}}}var _0x32e003={'FPScontroller':[[-0xc*0x2b3+-0x1d15+-0x3*-0x1483,_0xffdfd9['fMhnm']],[-0x1003*0x1+0x20f3+-0x2*0x864,_0x24c400(0x67a)],[0x584*0x5+-0x1*0x221f+0x6cb,_0xffdfd9['fMhnm']],[0xcf2+-0x161*0x5+-0x5b5,_0xffdfd9[_0x24c400(0x459)]],[-0x68a*-0x4+-0x2db*-0x1+-0x5*0x5b7,'obfF'],[0x5ac+0x1*-0x1ad6+-0x2*-0xad9,_0x24c400(0x67a)],[0x1*-0x557+0x1cdc+0x16e5*-0x1,_0x24c400(0x67a)],[0x216f+0x6e1+-0x2798,'obfB'],[0x1d56+0x52+-0x1ce4,_0x24c400(0x67a)],[0x6*0x192+-0x1543+0xcb3*0x1,_0xffdfd9[_0x24c400(0x7c3)]],[0x25f6+-0x19eb+0xb2b*-0x1,'v3'],[0x1edd+-0x236f+0x57e,'u8'],[-0x130f+0x1*-0x1523+0x2922,_0x24c400(0x67a)],[0xc2+0x287*0x5+-0xc5d,_0x24c400(0x64f)],[-0x20c5+0xd1*-0x2b+0x4*0x113b,'u8'],[-0x29*-0xc5+0x370+-0xb4f*0x3,_0xffdfd9[_0x24c400(0x7c3)]],[0x427*-0x9+0x2*-0x6b9+0x33e5,'u8'],[0x3a*0x71+0xb*0x1df+-0x2d1a,'u8'],[0x1*-0x232b+0x2234+0x213,'obfF'],[-0x1*0x17f3+0x123e+0x6e9,_0xffdfd9[_0x24c400(0x459)]],[0x5a1+0x1591+-0x19e6,'f32'],[-0x82e+0x105b*0x1+-0x6dd,_0x24c400(0x7c8)],[0x4*0x86d+0x1*0x17a1+-0x9*0x639,'v3'],[0x7e1*-0x1+-0x5de*0x4+0x20b9*0x1,'v3'],[0x2459+0x1d65*-0x1+-0x588,_0xffdfd9[_0x24c400(0x23f)]],[-0x292+0x1c92+-0x30*0x83,'f32'],[-0x1563+0x8*0x4a3+0x13*-0xbf,'u8'],[-0xb*0xcc+0x175*-0x12+0x248a,_0xffdfd9['Pbymp']],[0x3b+-0x20*-0x28+-0x3a3,'v3'],[-0x418+-0x917+0xed3,'u8'],[-0xb2+-0x3b4+0x61a,_0x24c400(0x7c8)],[0x1*-0x355+0x22c5+-0x1db8,_0xffdfd9['Pbymp']],[0x1*0x14c3+0x106+0x3*-0x6af,'u8'],[-0x1*0xbb6+-0x1336*0x2+0x33df,'u8'],[0x26f9+0xdc2+-0x1*0x32fb,_0xffdfd9[_0x24c400(0x459)]],[-0x15c2+-0x1205+-0x299f*-0x1,_0x24c400(0x7c8)],[0x707*-0x4+-0x2515+-0x430d*-0x1,'u8'],[-0x21c5+-0x63d+0x29e2,_0x24c400(0x67a)],[-0x1954+-0x1*-0x1a4d+0xff,'v3'],[0x1a03+-0x25c4+0xdc9,'obfB'],[0x5f*-0x1+0x1626+-0x13af,_0x24c400(0x7c8)],[0x2461+-0x130f+-0xf36,_0xffdfd9[_0x24c400(0x23f)]],[0x207a+-0x2e7*-0x1+-0x1*0x2115,_0xffdfd9[_0x24c400(0x23f)]],[0x108f+0x2*-0xc54+0xa69,_0xffdfd9[_0x24c400(0x23f)]],[-0x133*-0x17+0xf9f+0x10*-0x28e,_0xffdfd9[_0x24c400(0x23f)]],[-0x20fb+0x23d+-0x16*-0x181,_0x24c400(0x7c8)],[0x3dd+-0x1*0x1073+-0xef2*-0x1,'u8'],[0x1827+-0x186e+0x2a4,'u8'],[0x15*-0x1d+-0x1389+0x1848,'u8'],[0x23db+0x6fe*-0x1+-0x1a7d,'f32'],[-0xbfc+0xe37*-0x2+0x2ace,'u8'],[-0xa28+0x1881+0x44*-0x2d,'u8'],[0x4ee+0xdc4+0x116*-0xf,_0x24c400(0x7c8)],[0x24a3+0x6d0+-0xdad*0x3,_0xffdfd9['Pbymp']],[-0x1*0x200e+-0x6b*0x36+0x3910,_0x24c400(0x7c8)],[0x2569+0xa33*-0x3+0x7c*-0x9,_0x24c400(0x7c8)],[0x941+-0x2634+0x1f6b,_0x24c400(0x7c8)],[-0xbf+0x1e5d+-0x2e*0x97,'f32'],[0x33*0x3+0xc09+0x1*-0xa22,'f32'],[-0x1cf2+0x183*-0x2+0x89f*0x4,'v3'],[-0x7af+0x4c2+0x581,'u8'],[0x11*0x10d+-0x41*0x67+0xae2,'v3'],[0x3*0xb1d+-0x68a+-0x1829,_0xffdfd9[_0x24c400(0x23f)]],[-0x22c6+0x86*0x21+0x142c,'v3'],[-0x115d+0x13ba+0x5b,_0xffdfd9[_0x24c400(0x23f)]],[-0x18fd+-0x97*-0x4+0x97*0x2b,_0xffdfd9[_0x24c400(0x23f)]],[0x1e90+-0x6*0x25+-0x1af2,_0xffdfd9[_0x24c400(0x23f)]],[0x18dd+-0x20ef+0xad6,'u8'],[0x1567*0x1+0x1*0x26ae+0x1ca8*-0x2,'u8'],[-0xbd1+-0x1ba2+0x2a3b,_0x24c400(0x7c8)],[0x22c*-0xc+-0x15ec+0x32d8,_0xffdfd9[_0x24c400(0x23f)]],[-0x1648+-0x1928+0x192a*0x2,'v3'],[-0x26f0*0x1+-0x3*0x50b+0x3901,'v3'],[0x20*0x19+0x5*0x59f+0x1c3f*-0x1,_0x24c400(0x7c8)],[-0x17e*0x16+-0x622*0x3+0x363a,_0xffdfd9['Pbymp']],[0xceb+0x1*-0x1ddf+0x13f8,_0x24c400(0x7c8)],[-0x147*-0x2+0x14b*-0x15+0x1ba1,_0xffdfd9[_0x24c400(0x23f)]],[0xe35*0x1+-0x1*-0x2095+-0x1fd*0x16,'v3'],[0xd70+-0x32*0xc3+0x1bbe,'u8'],[0x13*0x151+0x1*0xb09+-0x20f0,'v3'],[0xc*0x336+0x1*0x547+0x3*-0xd8d,_0x24c400(0x64f)],[0x4ee*-0x3+0xdaa+0x44c,_0xffdfd9[_0x24c400(0x23f)]],[-0x2242*-0x1+0x2*0xe87+0x4a*-0xd0,_0x24c400(0x7c8)],[-0x3*0xc9d+0x10be+0x184d,_0x24c400(0x7c8)],[0x5*0x415+0x1*0x541+-0x166e,_0xffdfd9[_0x24c400(0x23f)]],[0x17*-0x9d+-0x52e*0x1+0x281*0x9,'u8'],[-0x392+0x24dc+-0x1e09,'u8'],[-0x1197+-0xfad+0x2490,'u8'],[-0x2636+-0x1222+0x3ba5*0x1,'u8'],[-0x13cf*-0x1+-0x1*0x1b79+0xaf8,'u8'],[-0xceb*0x1+-0x29d+0x12d8,_0xffdfd9['Pbymp']],[0x28*-0xd3+0xb62+0x2*0xc75,_0x24c400(0x7c8)],[-0x1326+-0xc13+-0x1*-0x2291,'f32'],[-0x60a*-0x5+-0x20bb+0x5e5,_0xffdfd9['Pbymp']],[-0x4*-0x8a2+-0xa49*-0x3+-0x27b*0x19,'f32'],[0x6*0x5a+0x1050+-0xf08,'u8'],[-0x10*0x6e+0x1cda+0x2*-0x949,_0x24c400(0x7c8)],[0xd7d+-0x1dd1+0x2*0x9e0,_0xffdfd9[_0x24c400(0x23f)]],[0x1a5*-0xb+-0x1*0x46d+-0x4*-0x67d,'u8'],[-0x2*0x3ec+0x1*-0x3ef+0xf3f,'v3'],[0x7d*-0xd+-0x1453+0x10*0x1e3,'v3'],[-0x258f+-0x2094+0x49b3,'v3'],[-0x25f1+-0x1195+-0x1*-0x3b22,_0x24c400(0x7c8)],[0x52*0x3e+-0xb9c+0x2*-0x250,_0xffdfd9['Pbymp']],[-0x2d3*-0x5+0x1*0xd39+-0x17b4,_0xffdfd9[_0x24c400(0x23f)]],[-0x5*0x37c+-0x590*-0x7+-0x11dc,'v3'],[0xc75+-0x349*0x8+-0x1*-0x1187,_0xffdfd9[_0x24c400(0x7c3)]],[-0x18*0xab+0xaa1+0x5*0x1d3,'u8'],[0x1b43+-0x19a1+0x21a,'i32'],[0x1*-0xd03+0x5a9+0xb1a,_0x24c400(0x7c8)],[-0x4f6+-0x162+0xa1c,_0xffdfd9['Pbymp']],[-0xb4d+0xef*0x17+-0x664,_0xffdfd9[_0x24c400(0x23f)]],[-0x11*0x32+-0x1e68+-0x2*-0x12c3,_0x24c400(0x7c8)],[-0x61*-0xd+0x301*0x7+-0x1624,'v3'],[0x9e4+-0x1073*-0x1+-0x167b,_0x24c400(0x64f)],[0x2286+-0x71*0x34+-0x7b2,'u8'],[-0x460+-0xc*-0x1d6+-0xdc7,'u8'],[0x10e7+-0x123d+0x14e*0x4,'u8'],[-0x270+0x8*0x7f+0x25c,'f32'],[0x1*0x1b05+0x1*-0x11d8+-0x1*0x545,_0xffdfd9['hFhhB']]],'HealthScript':[[-0x230e*-0x1+0x118d*-0x2+0x64,'u8'],[-0x1*-0x18df+-0x1b*0xe3+0x2*-0x49,'i32'],[0x43*0x76+0x5f8*0x1+0x16*-0x1a7,_0xffdfd9[_0x24c400(0x23f)]],[0xaeb+0x21c6+-0x2c2d,_0x24c400(0x7c8)],[0x18dc+0x12a*0x10+-0x157a*0x2,_0x24c400(0x7c8)],[-0x3*-0x937+0x14c3+-0x2fdc,_0x24c400(0x7c8)],[-0x93b*-0x1+-0x6*0x643+0x1ce7,_0xffdfd9[_0x24c400(0x23f)]],[-0x4*0x505+0x1f9f+-0x1*0xaf7,_0xffdfd9['Pbymp']],[0x2329+-0xa5*0x4+-0x1ff5,_0xffdfd9['hFhhB']],[0x1df*0x3+-0x4*0x8aa+-0x33*-0x95,'i32'],[-0x181c+0x1*0x23fc+-0x1*0xb38,'u8'],[-0x7*0xd9+-0x2703+0x2d9b,'u8'],[-0x2389+-0x3b3+0x27e6,'u8'],[0x55f+-0x503+0x4f,'u8'],[0x4*0x509+0x1f*0x37+-0xab*0x27,_0xffdfd9[_0x24c400(0x3af)]],[-0x221e+-0xe2b+-0x1*-0x311d,_0x24c400(0x3c1)],[-0x19ef+-0x255d+0x1*0x4034,_0xffdfd9[_0x24c400(0x3af)]],[0xd86*-0x2+0x59d*0x1+0x166b,_0xffdfd9['aiXsh']],[-0x1*-0xfc9+-0x1*0x1683+0x7ca,_0xffdfd9[_0x24c400(0x3af)]],[-0x6d*-0x3c+-0x15a0+-0x2c8,_0x24c400(0x377)],[-0x2*-0x6b0+0x221b+-0x2e4b,'obfF'],[0x19fe+-0x348+0x1*-0x156e,'f32'],[-0x2040+0x21*0x2a+0x1c22,_0x24c400(0x7c8)],[-0x749+0xdbc*0x2+-0x12df,_0x24c400(0x7c8)],[-0x17*0x11+0x22df+-0x2004,'f32'],[-0x16*0x146+-0x9*-0x1c1+0xd97,'f32'],[0x47c+0x798+0x14*-0x89,'v3'],[-0x13ad+0x12b3*-0x1+0x27d0,_0x24c400(0x7c8)],[0x3a*-0x36+-0xe8*-0x26+0x14bc*-0x1,_0xffdfd9[_0x24c400(0x23f)]],[0x6a+-0x144d+-0x1*-0x1563,'u8'],[0x1040+-0x1*-0x8c3+0x1777*-0x1,'u8'],[0xa06*0x2+0x1bb*-0x16+0x1396,_0xffdfd9[_0x24c400(0x7c3)]]],'PlayerConfig':[],'WeaponManager':[[0x1a*0x17f+-0x2f9+-0x23d5,'i32'],[0x1*-0x12a1+-0x4*-0x50e+0x1*-0x17b,'i32'],[0x67*-0x1a+-0x4b3+0xf49,'u8'],[0x2702*-0x1+0x2*-0xbe9+0xfbe*0x4,'i32'],[0xb5*0x27+0x1eb7+-0x39e6,'obfF'],[-0x2*0xf47+-0x1*-0x1465+0x1*0xaa5,'f32'],[-0x1c20+0x63*-0x3f+0x11ab*0x3,_0xffdfd9[_0x24c400(0x7c3)]],[-0x104*-0x2+-0x2043+-0x3*-0xa41,'u8'],[-0x92c+0x13ec+-0x1*0xa37,'u8'],[-0x42b*0x3+0x1bb5+-0x7*0x218,'i32'],[0xcb4+-0x65e+-0x5c6,_0xffdfd9['Pbymp']],[0x9*-0xc8+-0x2b3*0x3+-0x7*-0x23f,_0xffdfd9[_0x24c400(0x23f)]],[-0x12d2+-0x1db+0x1559,_0xffdfd9['hFhhB']],[0x25d7+-0x1a02+-0xb19,'u8'],[-0x11e0+-0xf8f+0x224b*0x1,_0xffdfd9[_0x24c400(0x3af)]],[-0x152d+0x13*-0x2+0x1643,_0x24c400(0x3c1)],[0x18cb+0x1af*-0x5+0x7ae*-0x2,_0x24c400(0x7c8)],[0x4c*0x14+-0x2284*-0x1+-0x276c,_0x24c400(0x7c8)],[0xc16*0x1+0x2cd+-0xdd7,'f32'],[0x1acf+-0x11b7+-0x800*0x1,_0xffdfd9['Pbymp']],[-0x2543+-0x301+0x2964,_0x24c400(0x7c8)],[0x30c*-0x5+-0x8cb*-0x4+-0x12c8,'u8'],[-0x191f*-0x1+-0x11d7+0x22*-0x2e,_0x24c400(0x3c1)],[0xafd+-0xe2d*0x2+0x129d,_0x24c400(0x3c1)],[-0x1*0x1d7d+0x1ce2+0x1ef,'obfI'],[0x15d5+0x7*-0x2a+-0x1347,_0xffdfd9[_0x24c400(0x3fc)]],[-0xac1*0x1+-0x162b+-0x2260*-0x1,_0xffdfd9['WgNOg']],[0x1*-0xb36+-0x1b75+0x282b,_0xffdfd9[_0x24c400(0x3fc)]],[-0x198b+-0x6d+-0x6*-0x496,_0xffdfd9['WgNOg']],[-0x642+-0x5*-0x6+-0x1*-0x7c8,_0xffdfd9[_0x24c400(0x3fc)]],[-0x18e2+0x1bb*-0xf+0x1*0x3487,_0xffdfd9[_0x24c400(0x3af)]],[-0x75a+-0xc0c+-0x2*-0xa99,_0xffdfd9[_0x24c400(0x7c3)]],[-0x224d+0x5*0x5c1+0x758,'u8'],[0x1eb+0x964+-0x97b,'i32'],[0x97d*0x4+-0x1e07+0x3*-0x207,_0x24c400(0x64f)],[0x751+-0x1*-0x41e+0xa1*-0xf,_0xffdfd9[_0x24c400(0x7c3)]],[-0x867+-0xd*-0xc7+0x60,'u8'],[0x16cc*-0x1+0x4cf*0x6+-0x3f2,'u8'],[-0x3a3+-0xb0+-0x4*-0x19c,'u8'],[0x1e69+0x3*-0xad+-0x1a44,'u8'],[-0x3b4*-0x6+0x2e6*-0xc+0xeaf,'u8'],[-0xfc4+0x23e3+-0x2f*0x61,_0xffdfd9[_0x24c400(0x7c3)]],[0x1ea8+-0x239*-0xe+-0x3b6e,'u8']],'GG_GameManager':[[-0x5b6+0x1e73+0x3*-0x833,'u8'],[0x1bf2+0xd7f+-0x2945,_0x24c400(0x7c8)],[-0x257e+-0x23bf*0x1+-0x1f*-0x25f,'u8'],[-0x1cab+0x6f3+-0x15fd*-0x1,'u8'],[-0x2*0xe7c+-0x5*0x51e+-0x2*-0x1b6b,_0x24c400(0x7c8)],[-0x1211+0x1*-0x17e9+0x1523*0x2,_0x24c400(0x7c8)],[-0x19*-0x18d+-0x72d+-0x1f48,'i32'],[-0x2616+-0x25be+0x4c28,_0x24c400(0x64f)],[-0x69b*0x5+0x26f9+-0x59a,'u8'],[0x24dd+0x1ab8+-0x3f21,'u8'],[-0x1961+0x6fd*0x5+0x1*-0x918,_0x24c400(0x7c8)],[-0x163c+-0x7*-0x179+0x1*0xc69,_0xffdfd9[_0x24c400(0x23f)]],[0x1706+0x10c6+-0x273c,_0xffdfd9[_0x24c400(0x7c3)]],[0x2274+0x49d*0x5+-0x38f1,'u8'],[-0x2*0x1367+-0x3fa*-0x1+0x11c4*0x2,_0xffdfd9[_0x24c400(0x7c3)]],[-0x2*-0x4aa+-0x25a3+-0x5*-0x5cf,_0x24c400(0x64f)],[-0xd76*-0x2+-0x1bb9*0x1+0x18d,_0x24c400(0x64f)],[-0x1*-0x69b+-0x1633+0x1080,_0xffdfd9[_0x24c400(0x3af)]],[-0x1ba3+0xbb+0x1be4,_0x24c400(0x3c1)],[0x1*0x311+0x1cd5+0x1ed6*-0x1,_0xffdfd9['aiXsh']],[-0x2472+0x1de0+0x1*0x7be,'u8'],[-0x1e2+0x353+-0x1*0x41,_0xffdfd9['hFhhB']],[-0xda1+-0x1*0x725+0x162a*0x1,'u8'],[-0x142f+-0x39c*0xa+-0x3d9*-0xf,_0xffdfd9[_0x24c400(0x23f)]],[-0x2039+-0x50c+0x26c5,'u8'],[-0x13fe+0x2485*-0x1+0x3a0b,'u8'],[0x14e4+-0x6c7*0x5+0xea3,'u8'],[0x1415+0x1641+0x7f*-0x52,_0xffdfd9[_0x24c400(0x7c3)]],[-0x1bb5*0x1+-0x1f*0xac+-0x1*-0x3235,_0x24c400(0x7c8)],[-0x4a*-0x3b+-0x1d7b*0x1+0xe1d*0x1,'u8'],[0x1*-0x11b0+0x1094*-0x2+0x1183*0x3,'u8'],[0x1ee4+-0x1694+-0x1a6*0x4,'i32'],[-0xbbf+0x224*-0x3+0x3fb*0x5,_0xffdfd9[_0x24c400(0x7c3)]],[-0x1d4e+-0xfc2*-0x1+0xf4c,_0xffdfd9['Pbymp']],[0x1234*0x1+0x1*0x2476+0x16e*-0x25,'i32'],[-0xfa4+-0x1*0x1159+-0x45*-0x81,_0xffdfd9['Pbymp']],[-0xe26+-0x3*0x1d7+0x23*0x9d,_0x24c400(0x64f)],[-0x1a27+0x145d*-0x1+0x6*0x80e,_0x24c400(0x64f)]],'TDM_GameManager':[[-0x577+-0x1*-0x13fe+-0x5*0x2e3,'u8'],[-0x23e4+0xd7*0x22+0xa*0xbf,'u8'],[0x6ff+0x6d3+-0x5*0x2bd,'u8'],[0x650+-0x1849+-0x121d*-0x1,_0xffdfd9['Pbymp']],[-0x4*0x1+0x8*0x20+-0xa4,'u8'],[-0x4b3+0x1173+-0xc64,'f32'],[0x4ca+0x981*0x1+-0xdeb,_0xffdfd9['Pbymp']],[-0x21d4+-0x7*0xb2+-0x2716*-0x1,_0x24c400(0x64f)],[-0x16f*-0xb+-0x2*-0x212+-0x1381,_0x24c400(0x64f)],[0xdc9+-0x1fb2+-0xf7*-0x13,'u8'],[-0x930*0x1+-0x2*0xaff+-0x9*-0x383,'u8'],[0x1142+-0x1eb*-0x13+-0x3543,'f32'],[-0x5*-0x50e+-0x1a25*0x1+0x1*0x153,_0x24c400(0x7c8)],[-0x1*-0x171f+0x73*-0xe+-0x3b*0x47,'i32'],[0x1*0x121a+0xf0*-0x29+0x14e2,'u8'],[-0x8c7+0x12fb+0x4*-0x269,'obfI'],[-0x248b+-0x200d+0x4570,_0x24c400(0x3c1)],[-0x205+-0xf1*0x13+0x14d4,_0x24c400(0x3c1)],[-0xee9+0x1493+0x4aa*-0x1,'obfI'],[0x2406+-0x7*0x41f+-0x619,'u8'],[0x209e+-0x1888+0x6*-0x11f,'u8'],[-0x1fd*-0x12+0xd*0x24d+0x3*-0x1571,'i32'],[-0x1*0xb26+-0x184f*0x1+0x24e1,'u8'],[0x1b7*0x5+-0x104*0x1+-0x60b,'u8'],[0x2*0x2e0+0x803+0x1*-0xc3b,'f32'],[-0x17e*-0x7+-0x104a+-0x2c*-0x2b,_0x24c400(0x64f)],[-0x8a9+-0x24*-0xfb+-0x1913,_0xffdfd9[_0x24c400(0x7c3)]],[-0x19f0+-0x8*0x1a1+0x288c,_0xffdfd9['Pbymp']],[-0x7*0xc2+0x21e6+-0xc0*0x24,_0xffdfd9['hFhhB']],[-0x17*-0x14b+-0x350*-0x9+-0x39f1,_0xffdfd9['hFhhB']],[0x5*-0x43f+0x229+0x2*0xa59,_0x24c400(0x7c8)],[-0x1*-0x2004+0x1129+0x11b*-0x2b,_0x24c400(0x7c8)],[0x11*-0x17e+0x154f+-0x4d*-0x13,_0xffdfd9['hFhhB']],[0x5*-0x5e+-0x33*-0xa6+0x7c*-0x3d,'u8'],[-0x2*-0x12e+0x74c+0x7f7*-0x1,'u8'],[0x3*0xaf3+0x8ca+-0x27eb,_0x24c400(0x7c8)]],'PhotonNetworkSync':[[0xda4*-0x2+-0x12e8+0x2e64,'v3'],[-0x1094+-0x7*-0x557+-0x148d*0x1,_0xffdfd9[_0x24c400(0x7c3)]],[0x597+0x1*0x2443+-0x2996,'u8'],[0x1f*-0x3e+0x153*-0xb+0x104*0x16,'u8'],[0x17ac*0x1+-0x1da4+0x640,'v3'],[0x17c9+0x8b*0x2+0x188b*-0x1,'u8'],[0x3*-0x50d+0x2098+0x3*-0x5b3,_0x24c400(0x64f)],[-0x382*-0x9+0x1de2+0x2a8*-0x17,_0x24c400(0x64f)],[0xa*0x2c2+-0x1ee5+-0xbd*-0x5,_0x24c400(0x7c8)],[-0x25f+-0x18bb+0x1b7e,_0xffdfd9['Pbymp']],[-0x97b+-0x58f*-0x5+-0x8*0x23d,_0x24c400(0x7c8)],[0x1*-0xf43+-0x35+0xfe4,'v3'],[0x1db6+0xf06+-0x2c44,_0xffdfd9[_0x24c400(0x23f)]],[0x51*0x6f+0x1a80+-0x3d23*0x1,_0x24c400(0x7c8)],[0x43*0x47+-0x977+-0x2*0x44f,'i32'],[-0x88a+-0x89+0x99b,'f32']],'NetworkPlayerAnimations':[[0x1*0x1dd2+0x2262+-0x4*0xfe3,'v3'],[0x1165*-0x1+0x12e7+-0xce,'v3'],[-0x2a1*-0x7+-0x5b7*-0x2+-0x5d1*0x5,'u8'],[0x47b*0x2+0x3d7+0xd*-0xed,_0x24c400(0x64f)],[-0x2+-0x1293*0x1+0x135d,_0x24c400(0x64f)],[0x1*0xb03+-0x62*0x61+0x8f9*0x3,_0xffdfd9['Pbymp']],[-0x1ca5+-0x10fd*-0x2+-0x485,_0xffdfd9['Pbymp']],[0x7*0x4bd+-0x8*-0x41c+-0x25*0x1c3,_0x24c400(0x7c8)],[0xab0+0x13e*-0x7+-0x11e,_0x24c400(0x7c8)],[-0xda1*0x1+-0x14b*-0x12+-0x8bd*0x1,'f32'],[-0xc67+-0xa4b+0x179e,'f32'],[-0x2*0xb01+-0x1f9d+0x368f,'f32'],[-0xd*-0x2a9+-0x1*-0xbdc+0x11*-0x2ad,'f32'],[0x3d*-0x1d+0x1*0x15d7+0x6fb*-0x2,_0xffdfd9[_0x24c400(0x23f)]],[0x160f+0x1*0xc56+-0x2169,_0xffdfd9[_0x24c400(0x23f)]],[-0x1*-0x15c5+-0x73b+-0xd8a,_0x24c400(0x7c8)],[-0x2*-0x30+0xb2*0x2d+-0x1ea6*0x1,_0xffdfd9[_0x24c400(0x23f)]],[-0x43*-0x6b+-0x25db+-0x2*-0x571,_0x24c400(0x64f)],[0x12ef+0x295*0x2+-0x170d,'u8'],[-0x14d1*-0x1+-0xc43+-0x3bf*0x2,_0xffdfd9[_0x24c400(0x7c3)]],[0xff6+-0x2*-0x107c+-0x2fda,'i32'],[-0x14c7+-0xb9b+0xa*0x359,'u8'],[0x33*-0x8e+-0xa79*0x3+0x3cd1,'f32'],[0xb2c+-0x1f20+0x1514*0x1,_0x24c400(0x7c8)],[0x25d0+-0x52d+-0x2dd*0xb,_0x24c400(0x7c8)],[0x817*0x1+0x11d9*0x2+0x2aa1*-0x1,_0x24c400(0x7c8)],[0x1302*0x2+-0x23aa+-0x12e*0x1,'u8'],[-0x4f2+-0x2069*-0x1+-0x1a3f,'u8'],[-0x227c+0x1*0x24e5+-0x12d,'v3'],[0x2444+-0xb7*0xb+-0x1b1f,'v3'],[0x1f19+0x1b9a+-0x391f,'u8']],'NPC_Cotroller':[[0xd3*0x28+0x2195+0x97f*-0x7,'v3'],[0x579+-0xa*0x218+0xd*0x133,_0x24c400(0x7c8)],[-0x266+0x1af7+-0xd*0x1e1,_0xffdfd9[_0x24c400(0x23f)]],[0x11dc+-0x213b*-0x1+-0x32c1,'u8'],[-0xfcd+-0x1f*0x8e+0x2156,'u8'],[0x827+-0xcee+0x107*0x5,'v3'],[0x13a9+-0x1b7d+0x2*0x438,'u8'],[0x2243+0x1cb8+-0x3ab*0x11,'f32'],[0x23ae+-0x1*-0xe94+-0x319e,_0xffdfd9[_0x24c400(0x23f)]],[0x25aa+0x1cfc+-0x41ee,_0x24c400(0x7c8)],[-0x4d*-0x7e+-0x1d10+-0x22*0x3d,_0x24c400(0x7c8)],[-0xb4b+0x1*0x1a51+-0xe3e,'u8'],[-0xc3*-0x1b+0x1*0xefd+-0x22c2,_0x24c400(0x7c8)],[0x88a+-0x1*0x1fc+-0x5b6,_0xffdfd9['Pbymp']],[0x225a+0x13be+-0x353c,_0x24c400(0x7c8)],[-0x196a+0x2*-0x916+0x2c76,_0xffdfd9['Pbymp']],[-0x463*-0x1+0x728+-0xaa7,'u8'],[-0x70a+0x2f*-0xce+0x2dc8,'f32'],[0x243c+-0x9f*-0x30+0x6*-0xada,'v3'],[0x5*0x271+0x2a*-0x53+0x265,'f32'],[-0x19a*0xb+-0x7*0x3ee+0x2e20,'i32'],[0xe9*0xe+0xec7+-0x73*0x3b,'f32'],[-0x95*0x29+0x129b+0x64a,'f32'],[-0x2371+0x109c+0x13e1,'f32'],[0x18d6+0xbc*-0x1f+-0xfe,'v3'],[-0x9d*-0x3+-0x3*0xa93+0x36*0x93,'f32'],[0x4*-0x949+0x7f7*0x2+0x165a,_0x24c400(0x7c8)],[-0xd3b*-0x1+0x12f*0x5+-0x11f2,'v3'],[0x21ef+-0xb*-0x1bb+-0x33b4,'u8'],[-0x1c70+-0xb03+-0x28bb*-0x1,_0xffdfd9['Pbymp']],[0x365+0x688+0x89d*-0x1,'v3'],[0x385*0xb+0x5*-0x133+-0x1f58,_0xffdfd9[_0x24c400(0x7c3)]],[-0x2498+0x11a*-0x7+0x2dba,_0xffdfd9[_0x24c400(0x7c3)]],[-0x252d+-0x15e8+0x3c85,'f32'],[-0x140c+-0xf*-0x27b+-0xfb5,'u8'],[-0x512+-0x4*-0x7c+0x49a,'v4'],[-0x1264+-0x165d+-0x2a49*-0x1,'f32'],[-0x2*0xd39+0x5b*0x5d+-0x511,_0xffdfd9[_0x24c400(0x23f)]],[0x1d64+-0x69a*-0x1+-0x5bd*0x6,_0x24c400(0x7c8)],[0xc*-0x1f3+0x2*0xf58+0x14*-0x49,'u8'],[-0xa18+-0x48f+0x1047,'i32']],'TargetHealth':[[-0x1838+0x260*0x2+0x1388,_0xffdfd9[_0x24c400(0x7c3)]],[-0x6df+-0x65c+0xd4f*0x1,_0xffdfd9['hFhhB']],[-0x23c4+-0x1*0x187d+0x3c75,'u8'],[0x9*-0x97+-0x169c+-0x22b*-0xd,'i32'],[0xc7b+-0x22f*-0xf+-0x7*0x66c,_0x24c400(0x64f)],[-0x126f+0xca*-0x1f+-0x2b31*-0x1,_0x24c400(0x64f)],[-0x1*0x1e62+0x1ba9+0x309,_0x24c400(0x64f)],[0x1282+0x1*-0x19fb+0x1*0x7fd,_0xffdfd9['Pbymp']],[0x2078+-0x69c+0xf*-0x1b0,'f32'],[0x1e*-0x135+0x25b1+-0x5*0x2f,'u8'],[0x133*-0x2+-0x26e8+0x29e2,'f32'],[-0x4d7*-0x1+-0x6*-0x663+0x7*-0x613,'u8'],[0x1d0a+-0x2483+0x821,'i32'],[0x130f+0x8e7+0x1f3*-0xe,_0x24c400(0x64f)],[0x2*-0xe8+0x6d0+0x4*-0x110,_0x24c400(0x7c8)],[-0x2060*-0x1+-0x10*-0x71+-0x26a4,'u8']],'SectatorCamera':[[-0xb83+-0x5e*0x2+-0x5*-0x277,_0xffdfd9[_0x24c400(0x23f)]],[-0xc4d*0x1+-0xfb4+-0x1*-0x1c19,'f32'],[0xcab+0x822*-0x3+0xbd7,'f32'],[-0x1*-0x220b+0x1677+-0x3862,'v3'],[-0x123*0x1f+0x1613+0x6ab*0x2,'v3'],[0x792+-0x141c+0xcd2*0x1,_0x24c400(0x64f)],[-0x1*0x196b+-0x1c74+0x362b*0x1,'i32'],[-0xe8c+0xa7e+-0xd*-0x56,'f32'],[0xc5e+-0x8b6+-0x354,'i32'],[-0x2452*0x1+0x1b53+0x957,_0x24c400(0x7c8)],[-0x8*-0x257+0x2279+0x1*-0x34d5,'u8'],[0x489*-0x8+-0x45*-0x1f+0x1c4d,'v3'],[0x7be+-0x168b*0x1+0xf39,'v4'],[0x1*-0x19ab+0x1f3*-0xa+0x921*0x5,'u8'],[-0xa*0x19+0x1*-0x51b+-0x151*-0x5,_0xffdfd9[_0x24c400(0x7c3)]]]},_0x39d664={},_0xac07d8={};function _0x7c9b18(_0x315a2e,_0x3048f1,_0x31e485){var _0x4c0f22=_0x24c400,_0x2cb257={'LcuKF':function(_0x26ff86,_0x115580){return _0x26ff86!==_0x115580;},'TnTNY':_0x4c0f22(0x53b)};return function(_0x36fa53){var _0x5a1d20=_0x4c0f22,_0x1eb036={'dowbJ':function(_0xc16af7,_0x5dddc4){var _0x5b724a=_0x49be;return _0xffdfd9[_0x5b724a(0x528)](_0xc16af7,_0x5dddc4);},'EaDKa':'windo'+'w.','LEtOf':_0x5a1d20(0x26c)+'le','tRWBK':function(_0x21d532,_0x4743ef){return _0x21d532===_0x4743ef;}};try{var _0x186009=_0x36fa53&&_0x36fa53['val']?_0x36fa53['val']():0x207*-0xc+0xf9a*0x1+0x8ba;if(!_0x186009)return;var _0x5c3e68=_0xac07d8[_0x315a2e]||(_0xac07d8[_0x315a2e]={}),_0x535276=_0x5c3e68[_0x186009];if(!_0x535276)_0x535276=_0x5c3e68[_0x186009]={'ptr':_0x186009,'firstSeen':Date['now'](),'hits':0x0};_0x535276[_0x5a1d20(0x727)]++;if(_0x31e485){if(!_0x39d664[_0x186009])_0x39d664[_0x186009]={'ptr':_0x186009,'kind':_0x315a2e,'firstSeen':Date[_0x5a1d20(0x134)](),'hits':0x0};_0x39d664[_0x186009][_0x5a1d20(0x727)]++;}else{var _0x51a6db=_0x269165[_0x315a2e];if(!_0x51a6db||_0x51a6db['ptr']!==_0x186009){_0x269165[_0x315a2e]={'ptr':_0x186009,'firstSeen':Date[_0x5a1d20(0x134)](),'hits':0x0,'replaced':!!_0x51a6db};try{var _0x2867fa=_0x18eac[_0x5a1d20(0x754)+'r'](function(_0x1d19da){var _0x44d6f9=_0x5a1d20;return _0x2cb257['LcuKF'](_0x2cb257[_0x44d6f9(0x76c)],_0x44d6f9(0x53b))?(_0x299b04[_0x44d6f9(0x17f)+'e']=_0x1eb036[_0x44d6f9(0x3b6)](_0x1eb036['EaDKa'],_0x1950ad[_0x1854d1])+_0x1eb036[_0x44d6f9(0x494)],_0x2ee054):_0x1d19da[_0x44d6f9(0x743)]===_0x315a2e;})[-0x2289+-0x22d8+0x4561];_0x30995f={'type':_0x315a2e,'atMs':_0xffdfd9[_0x5a1d20(0x13a)](Date[_0x5a1d20(0x134)](),_0x401b08),'originalFunc':!!(_0x2867fa&&_0x2867fa[_0x5a1d20(0x443)]&&_0xffdfd9['dkUOe'](typeof _0x2867fa['hook'][_0x5a1d20(0x476)+_0x5a1d20(0x471)+'nc'],_0x5a1d20(0x13e)+_0x5a1d20(0x265))),'resolveGameAtFire':!!_0x27d025(),'gameSourceAtFire':_0x6647fd['sourc'+'e']};}catch(_0x34b04b){}}}if(_0x315a2e===_0x5a1d20(0x402)+_0x5a1d20(0x4bd)+_0x5a1d20(0x2be)&&_0x22454f['on'])try{_0x565c97(_0x186009);}catch(_0xd016c0){}if(!_0x3048f1){var _0x2867fa=_0x18eac['filte'+'r'](function(_0x42a7ec){return _0x1eb036['tRWBK'](_0x42a7ec['type'],_0x315a2e);})[-0x29*0x29+0x1*-0xdb8+0x3*0x6c3];if(_0x2867fa&&_0x2867fa[_0x5a1d20(0x443)])try{_0x2867fa['hook'][_0x5a1d20(0x28f)+'ed']=![];}catch(_0x19d4a5){}}}catch(_0x530440){}};}function _0x953b9c(){var _0x38efc1=_0x24c400;if(_0x18eac[_0x38efc1(0x4ed)+'h'])return!![];if(!window[_0x38efc1(0x5fd)+'WebMo'+'dkit']||!window[_0x38efc1(0x5fd)+'WebMo'+_0x38efc1(0x336)]['Runti'+'me'])return![];var _0x2d6480=window[_0x38efc1(0x5fd)+'WebMo'+'dkit'][_0x38efc1(0x60b)+'me'];if(!_0x2d6480[_0x38efc1(0x2cc)+'ns']||!_0x2d6480[_0x38efc1(0x2cc)+'ns'][_0x38efc1(0x4ed)+'h'])return![];_0x1fd903=window['Unity'+'WebMo'+_0x38efc1(0x336)][_0x38efc1(0x488)+_0x38efc1(0x446)+'er'],_0x316d93=_0x316d93||_0x2d6480[_0x38efc1(0x2cc)+'ns'][_0x2d6480[_0x38efc1(0x2cc)+'ns']['lengt'+'h']-(0x21c9+-0x21d3+0xb)];if(!_0x316d93||typeof _0x316d93['hookP'+_0x38efc1(0x630)]!=='funct'+'ion')return![];for(var _0x2b4a49=-0x212a+-0x1*0xdbd+0x2ee7*0x1;_0xffdfd9['xGRpk'](_0x2b4a49,_0x6fda40['lengt'+'h']);_0x2b4a49++){if(_0xffdfd9['gVxmi']!==_0x38efc1(0x389)){var _0x394528=_0x6fda40[_0x2b4a49];try{var _0x466d59=_0x316d93[_0x38efc1(0x485)+_0x38efc1(0x630)]({'typeName':_0x394528['type'],'methodName':_0xffdfd9[_0x38efc1(0x68f)],'params':[_0x38efc1(0x64f),_0xffdfd9[_0x38efc1(0x7c3)]],'returnType':undefined},_0x7c9b18(_0x394528['type'],_0x394528[_0x38efc1(0x2bc)],_0x394528[_0x38efc1(0x450)]));_0x18eac['push']({'type':_0x394528[_0x38efc1(0x743)],'hook':_0x466d59,'keep':_0x394528[_0x38efc1(0x2bc)]});}catch(_0x50a8a0){if(_0x38efc1(0x7c9)===_0x38efc1(0x7c9))_0x4b7edf['push'](_0xffdfd9[_0x38efc1(0x6e7)](_0x394528[_0x38efc1(0x743)]+':\x20',_0xffdfd9['NroXE'](String,_0x50a8a0&&_0x50a8a0[_0x38efc1(0x552)+'ge']||_0x50a8a0)['slice'](-0x40*0x97+0xd25*-0x2+0x493*0xe,0x18c7*-0x1+-0x1*0x166d+0x2fd4)));else{var _0x452d96=_0x5b64d0[_0x1162fe];_0x51575f[_0x38efc1(0x2ff)](_0xffdfd9[_0x38efc1(0x3c7)](_0x452d96,_0x38efc1(0x489))+_0x573429[_0x452d96]);}}}else{var _0x17df78=_0x1a7d80[_0x14f7bd],_0x4bcfab=typeof _0x2cb881[_0x17df78];_0x236129[_0x17df78]=_0xffdfd9[_0x38efc1(0x405)](_0x4bcfab,_0xffdfd9['YlGNN'])?'undef'+_0x38efc1(0x299):_0x4bcfab;}}return _0x18eac[_0x38efc1(0x4ed)+'h']>-0x1170+0x61e+-0x6*-0x1e3;}function _0x2dad84(){var _0x2c0b00=_0x24c400,_0x5c3b18=-0x1*0x283+-0xdd1*0x2+0x1e25;for(var _0x599514=-0x119*-0x21+0xc20+0x1*-0x3059;_0xffdfd9[_0x2c0b00(0x215)](_0x599514,_0x18eac['lengt'+'h']);_0x599514++){if(_0x18eac[_0x599514][_0x2c0b00(0x443)]&&_0x18eac[_0x599514]['hook']['table'+_0x2c0b00(0x191)]!==undefined)_0x5c3b18++;}return _0x5c3b18;}function _0x219d25(){var _0x30c5cc=_0x24c400,_0x9f7b0e=-0x2485+-0x14c9+0x394e;for(var _0x14552c=0x8*0x24b+0xb6a+-0x1dc2;_0xffdfd9['KRZHz'](_0x14552c,_0x18eac[_0x30c5cc(0x4ed)+'h']);_0x14552c++){if(_0x18eac[_0x14552c]['hook']&&_0x18eac[_0x14552c]['hook'][_0x30c5cc(0x79c)+'ed'])_0x9f7b0e++;}return _0x9f7b0e;}var _0x8419df=null,_0xa66cb9=[],_0x2dbe96={},_0x30995f=null;function _0x3d86ad(_0x44259f){var _0x4144b7=_0x24c400,_0x34ab72={'sodKf':function(_0x4252c,_0x9fece6){return _0x4252c(_0x9fece6);}};try{if(_0x4144b7(0x280)!==_0x4144b7(0x2c1)){if(_0xffdfd9['MHCgm'](!_0x1fd903,!_0x44259f))return null;var _0x40a14e=new _0x1fd903(_0x44259f)[_0x4144b7(0x4da)+'assNa'+'me']();return _0xffdfd9['iQzex'](_0x40a14e,undefined)?null:_0x40a14e;}else{var _0x1ef6b2=_0x5b11ba['creat'+'eElem'+_0x4144b7(0x452)](_0xffdfd9[_0x4144b7(0x368)]);_0x1ef6b2['id']=_0x4144b7(0x44c)+_0x4144b7(0x145)+_0x4144b7(0x5e7)+'b',_0x1ef6b2['style'][_0x4144b7(0x792)+'xt']=_0xffdfd9[_0x4144b7(0x463)]('posit'+'ion:f'+_0x4144b7(0x46b)+_0x4144b7(0x639)+'12px;'+_0x4144b7(0x1fd)+'2px;z'+_0x4144b7(0x13b)+_0x4144b7(0x776)+'74829'+_0x4144b7(0x79d)+'rsor:'+_0x4144b7(0x322)+'er;us'+_0x4144b7(0x1bf)+_0x4144b7(0x520)+_0x4144b7(0x6b2)+_0xffdfd9['gAsfI'],_0x558cc6)+';'+_0xffdfd9['BnCfz'],_0x1ef6b2[_0x4144b7(0x21b)+_0x4144b7(0x7a0)+'t']='sakur'+'a',_0x1ef6b2[_0x4144b7(0x13d)+'ck']=function(){var _0x381bb9=_0x4144b7;_0x34ab72[_0x381bb9(0x54b)](_0x8e87ed,![]),_0x2c5e0f();},_0x60bda[_0x4144b7(0x2b2)][_0x4144b7(0x790)+_0x4144b7(0x4ab)+'d'](_0x1ef6b2);}}catch(_0x38058d){return null;}}function _0x10c7ba(_0x5d0c4c,_0x487fd2,_0x52e294){var _0x5dceac=_0x24c400,_0x2df056=_0x446236();if(!_0x2df056)return null;if(_0x487fd2<-0xd13+-0xe17+-0x7a*-0x39||_0xffdfd9[_0x5dceac(0x425)](_0x487fd2+_0x52e294*(0x154b+0xb*-0x1dc+-0xd3),_0x2df056['byteL'+_0x5dceac(0x6af)]))return null;var _0x2f4a01=[];for(var _0x4dc512=-0xa6*-0x26+0x14*-0x13f+0x6*0xc;_0x4dc512<_0x52e294;_0x4dc512++)_0x2f4a01[_0x5dceac(0x2ff)](_0x2df056['getFl'+'oat32'](_0x5d0c4c+_0x487fd2+_0xffdfd9[_0x5dceac(0x379)](_0x4dc512,-0xc3*0x6+0x84e*-0x3+0x2*0xec0),!![]));return _0x6647fd['ok']+=_0x52e294,_0x2f4a01;}var _0x28e079={'PhotonNetworkSync':[[_0x24c400(0x6f3),_0xffdfd9[_0x24c400(0x535)]],[_0xffdfd9['ukOqY'],_0xffdfd9['BgyFT']],[_0xffdfd9[_0x24c400(0x390)],'trans'+_0x24c400(0x7a2)],[_0x24c400(0x1ca),_0x24c400(0x1fa)]],'NetworkPlayerAnimations':[['0x10',_0xffdfd9['XhRIt']],['0x18','sync']],'NPC_Cotroller':[[_0xffdfd9[_0x24c400(0x75c)],'capsu'+'le'],['0xb4',_0x24c400(0x50e)+_0x24c400(0x577)+'th'],[_0x24c400(0x3c2),_0xffdfd9['BgyFT']],[_0x24c400(0x271),'targe'+_0x24c400(0x577)+_0x24c400(0x620)],[_0xffdfd9['JBUzw'],_0xffdfd9[_0x24c400(0x6f2)]]],'EnemyBot':[['0x14',_0xffdfd9[_0x24c400(0x6f2)]]]},_0x570f83={'PhotonNetworkSync':[[_0xffdfd9[_0x24c400(0x68b)],'team'],['0x7c',_0x24c400(0x7d0)+'Flag'],[_0x24c400(0x3fb),'id']]};function _0x1d4e0b(_0x2b9747,_0x25ab29){var _0x2162f4=_0x24c400,_0x13e2a1={'SNotW':function(_0x2bf5dd){return _0x2bf5dd();},'SWoki':_0xffdfd9[_0x2162f4(0x725)],'yEofR':function(_0x11f96c,_0x1033c2){var _0x1aa8f6=_0x2162f4;return _0xffdfd9[_0x1aa8f6(0x3d3)](_0x11f96c,_0x1033c2);},'wBVYq':function(_0x4746ac,_0x9434cc,_0x57e99a){var _0x4cd02c=_0x2162f4;return _0xffdfd9[_0x4cd02c(0x533)](_0x4746ac,_0x9434cc,_0x57e99a);}},_0x4e6396=_0x32e003[_0x2b9747]||[],_0x2f00d9={'kind':_0x2b9747,'ptr':_0xffdfd9[_0x2162f4(0x334)]('0x',_0x25ab29[_0x2162f4(0x633)+'ing'](0x22d0*-0x1+0x2*-0x859+0x11f*0x2e)),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5be2f1=0x431*-0x2+0x989+0x3b*-0x5;_0x5be2f1<_0x4e6396[_0x2162f4(0x4ed)+'h'];_0x5be2f1++){if(_0x4e6396[_0x5be2f1][-0x137*0x2+-0x7d5+0xa44]!=='v3')continue;var _0x500abc=_0xffdfd9['SOKae'](_0x10c7ba,_0x25ab29,_0x4e6396[_0x5be2f1][-0x20a9+0x715+0x1994],-0x8a1+-0x6ad+0xf51);if(!_0x500abc)continue;_0x2f00d9[_0x2162f4(0x241)+'cs']['push']({'o':'0x'+_0x4e6396[_0x5be2f1][0x1d*-0x49+0x2a*0x91+0x1*-0xf85][_0x2162f4(0x633)+_0x2162f4(0x714)](-0x722+0x1b91+-0x145f),'v':_0x500abc});}var _0x1b0144=0x45*0x65+0xb15*-0x1+0x2*-0x812;for(var _0x2ac0b0=-0x531+-0x1213*-0x1+-0xce2;_0x2ac0b0<_0x2f00d9['allVe'+'cs'][_0x2162f4(0x4ed)+'h'];_0x2ac0b0++){var _0xd81e1b=_0x2f00d9[_0x2162f4(0x241)+'cs'][_0x2ac0b0]['v'],_0x3d2a71=_0xffdfd9['RFtwX'](_0xffdfd9[_0x2162f4(0x2b0)](_0xd81e1b[-0xf06+-0x23e7+0x32ed],_0xd81e1b[0x49d*-0x5+0x25ff+-0x27d*0x6]),_0xffdfd9[_0x2162f4(0x32d)](_0xd81e1b[-0x1c1*0x11+0xa38+0x139b],_0xd81e1b[0x376*-0x4+-0x15*0x170+0x2c0a]));if(_0x3d2a71>_0x1b0144){if('acfwV'!==_0x2162f4(0x5a4))return![];else _0x1b0144=_0x3d2a71,_0x2f00d9['pos']=_0xd81e1b,_0x2f00d9['posAt']=_0x2f00d9['allVe'+'cs'][_0x2ac0b0]['o'];}}_0x2f00d9[_0x2162f4(0x143)]=Math[_0x2162f4(0x48a)](_0x1b0144);var _0x1df00d=_0x28e079[_0x2b9747],_0x5ee9d8=_0x570f83[_0x2b9747];if(_0x5ee9d8){if(_0xffdfd9[_0x2162f4(0x22f)](_0xffdfd9['LsuWW'],_0xffdfd9['jvgtQ']))_0x2a0467=_0x14e771();else{_0x2f00d9['tag']={};for(var _0x2f73e3=0x18a1+0xaeb+0x1*-0x238c;_0x2f73e3<_0x5ee9d8[_0x2162f4(0x4ed)+'h'];_0x2f73e3++){if(_0xffdfd9['hLmbK'](_0x2162f4(0x3be),_0xffdfd9['uFwDN']))_0x25c2a6(!![]);else{var _0x4ece84=_0x11f277(_0x25ab29+parseInt(_0x5ee9d8[_0x2f73e3][0x129a*-0x2+0x163*0x17+0x54f],0x18ad*0x1+-0x16eb*-0x1+-0x2f88),_0x2162f4(0x64f));if(_0x4ece84!==undefined)_0x2f00d9[_0x2162f4(0x275)][_0x5ee9d8[_0x2f73e3][-0x25a0+0x758*0x1+0x1e49*0x1]]=_0x4ece84;}}}}if(_0x1df00d)for(var _0x19569c=-0x63+-0x11*0x246+-0x2709*-0x1;_0xffdfd9[_0x2162f4(0x422)](_0x19569c,_0x1df00d[_0x2162f4(0x4ed)+'h']);_0x19569c++){var _0x5cb39d=_0x11f277(_0xffdfd9[_0x2162f4(0x642)](_0x25ab29,parseInt(_0x1df00d[_0x19569c][-0x7e6+-0xba6+0x138c],0x3*-0x269+0x92b*-0x4+0x2bf7)),_0xffdfd9['TTxCs']);if(_0x5cb39d)_0x2f00d9[_0x2162f4(0x63f)][_0x1df00d[_0x19569c][0x75*-0x2b+0x1*-0x66a+-0xd09*-0x2]]='0x'+_0xffdfd9[_0x2162f4(0x26b)](_0x5cb39d,0x4*-0x4f3+0xb*-0xe2+0x1d82)['toStr'+_0x2162f4(0x714)](-0x1*-0x12b9+0xb00+-0x1*0x1da9);}return _0x2f00d9[_0x2162f4(0x56a)+'rs']=_0x4e6396['filte'+'r'](function(_0x4c9c42){var _0x1b35c4=_0x2162f4;return _0x4c9c42[-0x6e7+0xa56+0x2*-0x1b7]===_0xffdfd9[_0x1b35c4(0x23f)]||_0xffdfd9['koCJc'](_0x4c9c42[-0x5+-0x22a5+-0x7d*-0x47],'i32');})['map'](function(_0x54a46f){var _0x53ecb7=_0x2162f4,_0x2c3d7f={'oIlFP':function(_0x4d21f2){var _0x2f4f12=_0x49be;return _0x13e2a1[_0x2f4f12(0x2ed)](_0x4d21f2);}};if(_0x13e2a1[_0x53ecb7(0x3ed)]===_0x13e2a1['SWoki'])return{'o':_0x13e2a1['yEofR']('0x',_0x54a46f[-0x9*0x29+-0x1f9f+0x2110]['toStr'+_0x53ecb7(0x714)](-0x17*0x106+0xcde*0x3+-0xf00)),'v':_0x13e2a1[_0x53ecb7(0x460)](_0x11f277,_0x25ab29+_0x54a46f[-0x22fd*0x1+0x7*-0x423+-0x5*-0xcca],_0x54a46f[-0x3*-0x115+0x6*-0x131+0x3e8])};else _0x2c3d7f['oIlFP'](_0x47e0f4);})['filte'+'r'](function(_0x10b81c){return _0x10b81c['v']!==undefined&&_0xffdfd9['rslIj'](isFinite,_0x10b81c['v']);})[_0x2162f4(0x675)](-0x1cfd*-0x1+0x16c2+0xd*-0x3fb,-0x21d5+-0x3*-0x692+0xe2b),_0x2f00d9;}function _0x2815a1(){var _0x1b178d=_0x24c400,_0x33f6ab={'maYhT':_0xffdfd9[_0x1b178d(0x63c)]},_0x2841b6={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x54adf0=_0x269165['FPSco'+_0x1b178d(0x4bd)+'ler']&&_0x269165['FPSco'+_0x1b178d(0x4bd)+'ler']['ptr']||0x1251+0x3*0x41b+0x1ea2*-0x1,_0x59ce80=_0xac07d8['Photo'+'nNetw'+'orkSy'+'nc']||{},_0x73549=Object[_0x1b178d(0x123)](_0x59ce80);for(var _0x7b2cfd=0x18c4+-0x1*-0x6f1+-0x1fb5;_0xffdfd9[_0x1b178d(0x761)](_0x7b2cfd,_0x73549[_0x1b178d(0x4ed)+'h'])&&_0x7b2cfd<0x6*0xa6+0x4*-0x79+0x3d*-0x8;_0x7b2cfd++){var _0x2e75c3=_0x59ce80[_0x73549[_0x7b2cfd]],_0x5ec952=_0x1d4e0b(_0xffdfd9['upGTv'],_0x2e75c3['ptr']);_0x5ec952['hits']=_0x2e75c3[_0x1b178d(0x727)],_0x5ec952[_0x1b178d(0x2fa)+'SeenM'+'s']=_0xffdfd9['gpHHi'](_0x2e75c3['first'+'Seen'],_0x401b08),_0x5ec952['isLoc'+'al']=!!_0x54adf0&&_0xffdfd9['sQXYw'](_0x5ec952['refs']['fps'],'0x'+_0x54adf0[_0x1b178d(0x633)+'ing'](0x164f+0x1b16+-0x3155));if(_0x5ec952['refs']['healt'+'h']){if(_0xffdfd9[_0x1b178d(0x424)]('IIseq',_0xffdfd9[_0x1b178d(0x3bf)])){var _0x3ac7d0=parseInt(_0x5ec952['refs'][_0x1b178d(0x77c)+'h'],0x1*-0x1879+-0x1*-0xd55+-0x2cd*-0x4);_0x5ec952['healt'+'h']=_0x54b1c4(_0x3ac7d0,_0xffdfd9[_0x1b178d(0x23d)],_0x1b178d(0x3c1));}else try{_0x4323e5();}catch(_0xe8f849){}}_0x2841b6[_0x1b178d(0x534)+'rs']['push'](_0x5ec952);}_0x2841b6[_0x1b178d(0x534)+'rCoun'+'t']=_0x73549['lengt'+'h'];var _0x38ec1d=_0xac07d8[_0x1b178d(0x32c)+'otrol'+_0x1b178d(0x2be)]||{},_0x54f4c0=Object[_0x1b178d(0x123)](_0x38ec1d);for(var _0x480250=-0x740+0xfba+0x7*-0x136;_0x480250<_0x54f4c0[_0x1b178d(0x4ed)+'h']&&_0xffdfd9[_0x1b178d(0x4d2)](_0x480250,0x1c85+0xb1*0x2+-0x1dcf);_0x480250++){var _0xf0326f=_0xffdfd9[_0x1b178d(0x5ed)](_0x1d4e0b,_0x1b178d(0x32c)+'otrol'+_0x1b178d(0x2be),_0x38ec1d[_0x54f4c0[_0x480250]]['ptr']);_0xf0326f[_0x1b178d(0x727)]=_0x38ec1d[_0x54f4c0[_0x480250]]['hits'],_0xf0326f[_0x1b178d(0x2fa)+_0x1b178d(0x3d7)+'s']=_0xffdfd9['NtlRM'](_0x38ec1d[_0x54f4c0[_0x480250]][_0x1b178d(0x2fa)+'Seen'],_0x401b08);if(_0xf0326f[_0x1b178d(0x63f)][_0x1b178d(0x77c)+'h'])_0xf0326f['healt'+'h']=_0x54b1c4(parseInt(_0xf0326f['refs'][_0x1b178d(0x77c)+'h'],0x1cf*0x7+0x1*-0x11bc+0x523),_0x1b178d(0x705)+'hScri'+'pt',_0x1b178d(0x3c1));_0x2841b6[_0x1b178d(0x4c2)][_0x1b178d(0x2ff)](_0xf0326f);}_0x2841b6[_0x1b178d(0x3d9)+_0x1b178d(0x4ca)]=_0x54f4c0['lengt'+'h'];var _0x33abb8=_0xac07d8['FPSco'+'ntrol'+_0x1b178d(0x2be)]||{},_0x5b5a6e=Object['keys'](_0x33abb8);for(var _0x410e2c=0xfb7+0xdf4+0x1f*-0xf5;_0xffdfd9[_0x1b178d(0x4a0)](_0x410e2c,_0x5b5a6e['lengt'+'h'])&&_0x410e2c<0x921+0x1b23*0x1+-0x5*0x73c;_0x410e2c++){var _0x3e02b8=_0x1d4e0b(_0xffdfd9[_0x1b178d(0x4ac)],_0x33abb8[_0x5b5a6e[_0x410e2c]]['ptr']);_0x3e02b8[_0x1b178d(0x727)]=_0x33abb8[_0x5b5a6e[_0x410e2c]][_0x1b178d(0x727)],_0x3e02b8['isLoc'+'al']=_0xffdfd9[_0x1b178d(0x7db)](_0x33abb8[_0x5b5a6e[_0x410e2c]]['ptr'],_0x54adf0),_0x2841b6['contr'+'oller'+'s'][_0x1b178d(0x2ff)](_0x3e02b8);}_0x2841b6['contr'+_0x1b178d(0x540)+_0x1b178d(0x5f1)]=_0x5b5a6e['lengt'+'h'];var _0x2fd9ed=_0x2841b6['playe'+'rs'][_0x1b178d(0x2e5)+'t'](_0x2841b6['bots']);for(var _0x31995f=-0x16f*-0xf+-0x5*-0x2cd+0xa*-0x38d;_0x31995f<_0x2fd9ed[_0x1b178d(0x4ed)+'h'];_0x31995f++){if(_0xffdfd9[_0x1b178d(0x428)]('NHROB','ezsZb'))_0x4836be?_0x48f287['setIt'+'em'](_0x4ea3f7,'1'):_0x4d693d['remov'+_0x1b178d(0x50c)](_0x363a7a);else{if(_0x2fd9ed[_0x31995f]['isLoc'+'al'])continue;_0x2841b6[_0x1b178d(0x3a1)+'es'][_0x1b178d(0x2ff)](_0x2fd9ed[_0x31995f]);}}_0x2841b6[_0x1b178d(0x5f4)+'Count']=_0x2841b6[_0x1b178d(0x3a1)+'es'][_0x1b178d(0x4ed)+'h'];var _0x24eb8a={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x232081={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x1d176d in _0x269165){if(_0xffdfd9[_0x1b178d(0x1f8)](_0xffdfd9[_0x1b178d(0x787)],_0xffdfd9[_0x1b178d(0x1b2)]))return _0x364828[_0x1b178d(0x17f)+'e']=_0x33f6ab[_0x1b178d(0x491)],_0x31d940;else{var _0x1675b2=_0x269165[_0x1d176d];if(!_0x1675b2||!_0x1675b2['ptr'])continue;if(!(_0x1d176d in _0x24eb8a))continue;_0x2841b6['manag'+_0x1b178d(0x380)][_0x1d176d]=_0xffdfd9['GUxLZ']('0x',_0x1675b2[_0x1b178d(0x341)][_0x1b178d(0x633)+'ing'](0x3*0x66f+-0xd8f+-0x5ae));var _0x1b24cb=_0xffdfd9[_0x1b178d(0x284)](_0x11f277,_0x1675b2['ptr']+_0x24eb8a[_0x1d176d],_0x1b178d(0x5c1)),_0x468f3b=_0x11f277(_0x1675b2[_0x1b178d(0x341)]+_0x232081[_0x1d176d],_0x1b178d(0x5c1));_0x1b24cb&&_0xffdfd9['JerrU'](_0x2841b6[_0x1b178d(0x73a)+'a'],null)&&(_0x2841b6[_0x1b178d(0x73a)+'a']=_0xffdfd9['bsvAD']('0x',(_0x1b24cb>>>0x998*0x2+0x1*0x68f+-0x19bf)[_0x1b178d(0x633)+_0x1b178d(0x714)](0x48*0x5b+-0x12*-0x123+0x349*-0xe)),_0x2841b6[_0x1b178d(0x73a)+_0x1b178d(0x700)]=_0x1d176d);if(_0x468f3b&&_0x2841b6['playe'+_0x1b178d(0x320)]===null)_0x2841b6[_0x1b178d(0x534)+_0x1b178d(0x320)]=_0xffdfd9[_0x1b178d(0x5c4)]('0x',_0xffdfd9[_0x1b178d(0x26b)](_0x468f3b,0x323+-0x279+0x1*-0xaa)[_0x1b178d(0x633)+_0x1b178d(0x714)](-0x4*0x3bb+0x186c+0x8*-0x12e));}}if(!_0x2841b6[_0x1b178d(0x534)+'rCoun'+'t']&&!_0x2841b6[_0x1b178d(0x3d9)+_0x1b178d(0x4ca)]&&!_0x2841b6['camer'+'a']){if(_0xffdfd9[_0x1b178d(0x72d)](_0x1b178d(0x5b9),_0xffdfd9['APflm']))return _0x5c2dd9['query'+_0x1b178d(0x2bf)+_0x1b178d(0x733)](_0xffdfd9[_0x1b178d(0x463)](_0x1b178d(0x685)+'-a=\x22',_0x497a81)+'\x22]');else _0x2841b6['note']=_0x1b178d(0x757)+'otonN'+_0x1b178d(0x364)+'kSync'+_0x1b178d(0x5f9)+_0x1b178d(0x32c)+'otrol'+_0x1b178d(0x648)+_0x1b178d(0x18e)+_0x1b178d(0x537)+'\x20mana'+'ger.\x20'+_0x1b178d(0x1f7)+_0x1b178d(0x1ff)+_0x1b178d(0x6f0)+_0xffdfd9[_0x1b178d(0x5f6)];}else!_0x2841b6['enemy'+'Count']&&(_0xffdfd9[_0x1b178d(0x2e9)]!==_0x1b178d(0x13c)?_0x2841b6['note']=_0x1b178d(0x4d1)+'rs\x20ar'+'e\x20pre'+'sent\x20'+'but\x20n'+'one\x20a'+'re\x20cl'+'assif'+'ied\x20a'+_0x1b178d(0x2ad)+_0x1b178d(0x177)+'yet\x20-'+_0x1b178d(0x662)+'k\x20'+(_0x1b178d(0x231)+'al\x20on'+'\x20each'+'\x20entr'+_0x1b178d(0x532)+'`play'+_0x1b178d(0x2cb)):(_0x35f167=_0xffdfd9[_0x1b178d(0x1e0)](_0x45f4d4,_0x4d3f66),_0xc1dd97=_0xffdfd9['Sspfk'](_0x111fd0,_0x3dc5c2)));try{var _0xc1a747=window[_0x1b178d(0x5fd)+_0x1b178d(0x2b7)+_0x1b178d(0x336)]&&window['Unity'+_0x1b178d(0x2b7)+_0x1b178d(0x336)][_0x1b178d(0x60b)+'me'],_0x4dbb95=_0xc1a747&&_0xc1a747[_0x1b178d(0x5c9)+'nalWa'+_0x1b178d(0x6cb)+'es']||[],_0x339947={};for(var _0x51b859=0x3fd+-0x182a+0x142d;_0xffdfd9[_0x1b178d(0x544)](_0x51b859,_0x4dbb95[_0x1b178d(0x4ed)+'h'])&&_0x51b859<0x2*-0xecd+-0x188f+0x45c9;_0x51b859++){if(_0xffdfd9[_0x1b178d(0x251)](_0x1b178d(0x31e),_0x1b178d(0x122))){var _0x58eef4=_0xffdfd9['Aayyt'](_0x4dbb95[_0x51b859]['param'+'s'][_0x1b178d(0x50a)](','),_0xffdfd9[_0x1b178d(0x4fa)])+(_0x4dbb95[_0x51b859]['retur'+_0x1b178d(0x1d4)]||'void');_0x339947[_0x58eef4]=(_0x339947[_0x58eef4]||0x1*0x139f+0xd91+-0x1*0x2130)+(-0x2490+-0x881*0x3+-0x3a*-0x112);}else{var _0x464bf5=_0x4ec834();if(!_0x464bf5)return null;try{return new _0x1f4873(_0x464bf5[_0x1b178d(0x387)+'r'],_0x464bf5['byteO'+_0x1b178d(0x67e)],_0x464bf5[_0x1b178d(0x6dc)+'ength']);}catch(_0x2b1d01){return null;}}}_0x2841b6['wasmT'+_0x1b178d(0x6fa)]=_0x339947;}catch(_0x51594f){}return _0x2841b6;}function _0x54b1c4(_0x26e683,_0xa5fb90,_0x3f0a73){var _0x4156c4=_0x24c400;try{var _0x46867a=_0x32e003[_0xa5fb90]||[];for(var _0x2eb038=-0x604+-0xb38+0x113c;_0x2eb038<_0x46867a[_0x4156c4(0x4ed)+'h'];_0x2eb038++){if(_0xffdfd9[_0x4156c4(0x1e7)](_0x46867a[_0x2eb038][-0x34*0x14+0x79*0x19+-0x7c0],_0x3f0a73))continue;var _0x56d892=_0x46867a[_0x2eb038][-0x209+-0x5e*0x10+0x7e9];if(_0x3f0a73['index'+'Of']('obf')===0x220c+-0x2623+0x417){if(_0xffdfd9[_0x4156c4(0x251)](_0xffdfd9['ewlMU'],_0xffdfd9['ewlMU'])){if(_0x565ffd)return _0x36fa51;try{var _0x1a8f81=_0xffdfd9[_0x4156c4(0x6d4)][_0x4156c4(0x2fe)]('|'),_0x269915=-0x1*-0x23b+0x2*0x583+-0x179*0x9;while(!![]){switch(_0x1a8f81[_0x269915++]){case'0':if(!_0x1eab65[_0x4156c4(0x2b2)]||!_0x44d5c7[_0x4156c4(0x2b2)][_0x4156c4(0x790)+_0x4156c4(0x4ab)+'d'])return null;continue;case'1':_0x3f7b72={'el':_0x48e515,'cv':_0x48e515['query'+'Selec'+_0x4156c4(0x733)]('#saku'+'ra-es'+_0x4156c4(0x34b)),'lg':_0x48e515[_0x4156c4(0x326)+_0x4156c4(0x2bf)+_0x4156c4(0x733)]('#saku'+_0x4156c4(0x665)+_0x4156c4(0x3e0))};continue;case'2':return _0x60f990;case'3':var _0x1fed67={'cv':{'getContext':function(){return null;}},'el':_0x48e515};continue;case'4':if(!_0x75bc5f['cv']||!_0x2a1e9e['cv'][_0x4156c4(0x4cd)+'ntext'])_0x5585a6=_0x1fed67;continue;case'5':_0x48e515[_0x4156c4(0x4bb)][_0x4156c4(0x792)+'xt']=_0xffdfd9[_0x4156c4(0x583)](_0xffdfd9['FLnie'](_0x4156c4(0x70a)+'ion:f'+'ixed;'+_0x4156c4(0x221)+_0x4156c4(0x5ba)+_0x4156c4(0x79f)+_0x4156c4(0x354)+'index'+_0x4156c4(0x5cf)+_0x4156c4(0x2af)+_0x4156c4(0x257)+'nter-'+'event'+_0x4156c4(0x4e0)+'e;',_0xffdfd9['JLyjo']),_0x4156c4(0x398)+'ng:4p'+_0x4156c4(0x426)+'t:10p'+'x/1.3'+_0x4156c4(0x4f1)+_0x4156c4(0x785)+_0x4156c4(0x330)+_0x4156c4(0x5cb)+_0x4156c4(0x4c6)+'nospa'+_0x4156c4(0x4fb)+_0x4156c4(0x484)+'bda9c'+'9;');continue;case'6':_0x48e515[_0x4156c4(0x4a7)+'HTML']=_0xffdfd9['UHKgG']('<canv'+'as\x20id'+_0x4156c4(0x561)+'ura-e'+'sp-cv'+'\x22\x20wid'+'th=\x221'+_0x4156c4(0x697)+'eight'+'=\x22160'+'\x22\x20sty'+'le=\x22d'+_0x4156c4(0x6a1)+_0x4156c4(0x60a)+'ck\x22><'+_0x4156c4(0x747)+'as>',_0xffdfd9['EigKC']);continue;case'7':var _0x48e515=_0x2d1f21['creat'+'eElem'+_0x4156c4(0x452)](_0x4156c4(0x45a));continue;case'8':_0x48e515['id']=_0xffdfd9['IhAce'];continue;case'9':_0x33deeb[_0x4156c4(0x2b2)][_0x4156c4(0x790)+_0x4156c4(0x4ab)+'d'](_0x48e515);continue;}break;}}catch(_0x31e103){return null;}}else{var _0x743cda=_0xffdfd9[_0x4156c4(0x16f)](_0x4d12f4,_0x26e683,_0x56d892,_0x3f0a73);if(!_0x743cda)return null;_0x743cda['o']=_0x56d892,_0x743cda['k']=_0x3f0a73;var _0x10191b=_0x385440([_0x743cda]);if(!_0x10191b['rows']['lengt'+'h'])return null;return _0x10191b[_0x4156c4(0x2d7)][-0x185e+0x7b0+0x10ae];}}var _0x5e65ec=_0x11f277(_0x26e683+_0x56d892,_0x3f0a73);if(_0xffdfd9[_0x4156c4(0x2d9)](_0x5e65ec,undefined))return null;return{'o':_0xffdfd9[_0x4156c4(0x4f5)]('0x',_0x56d892[_0x4156c4(0x633)+_0x4156c4(0x714)](-0xc4e+0x13*-0x67+0x6d*0x2f)),'v':_0x5e65ec};}}catch(_0x4f89f3){}return null;}function _0x557ac5(){var _0x2009dd=_0x24c400,_0x5c7e9b={};_0x6647fd['ok']=0x15ac+-0x1f5c+0x9b0,_0x6647fd[_0x2009dd(0x37e)+'d']=0x82c+-0x21e*-0x11+0x2*-0x1615,_0x6647fd['lastE'+'rror']=null;var _0xbed461=Object[_0x2009dd(0x123)](_0x32e003);for(var _0x3c3f65=0x1ef9+-0x430*-0x5+-0x1*0x33e9;_0x3c3f65<_0xbed461[_0x2009dd(0x4ed)+'h'];_0x3c3f65++){var _0x4f8cae=_0xbed461[_0x3c3f65],_0x41ceb5=_0x269165[_0x4f8cae];if(!_0x41ceb5||!_0x41ceb5[_0x2009dd(0x341)])continue;var _0x30d3fe=_0x32e003[_0x4f8cae]||[],_0x5c2140=[];for(var _0x4d270b=0x1c2d+0x46c*0x8+-0x3f8d;_0xffdfd9[_0x2009dd(0x22c)](_0x4d270b,_0x30d3fe[_0x2009dd(0x4ed)+'h']);_0x4d270b++){var _0x57e013=_0x30d3fe[_0x4d270b][0x1e7e+0x2258+-0x40d6],_0x51581f=_0x30d3fe[_0x4d270b][0x751*0x4+-0x2012+0x2cf*0x1];if(_0x51581f[_0x2009dd(0x287)+'Of'](_0xffdfd9['WHcyV'])===0xb57*-0x2+0x1e99+-0x1*0x7eb){var _0x55c9d3=_0x4d12f4(_0x41ceb5['ptr'],_0x57e013,_0x51581f);if(!_0x55c9d3)continue;_0x55c9d3['o']=_0x57e013,_0x55c9d3['k']=_0x51581f,_0x5c2140[_0x2009dd(0x2ff)](_0x55c9d3);}else{var _0x4e8e57=_0xffdfd9[_0x2009dd(0x3e7)](_0x11f277,_0xffdfd9['Sspfk'](_0x41ceb5[_0x2009dd(0x341)],_0x57e013),_0x51581f);if(_0xffdfd9[_0x2009dd(0x660)](_0x4e8e57,undefined))continue;var _0x3b0d75={'o':_0x57e013,'k':_0x51581f,'v':_0x4e8e57};if(_0xffdfd9['EPUXP'](_0x51581f,'v2')||_0x51581f==='v3'||_0xffdfd9['lZDYf'](_0x51581f,'v4')){var _0x4f13b3=_0x51581f==='v2'?-0x45*0xb+-0x2*0xc5+0x4d*0xf:_0x51581f==='v3'?-0x85f+0x1a28+0x11c6*-0x1:-0x4f9+-0x10*0x34+0x3*0x2bf,_0x13cac0=_0xffdfd9['DCjwI'](_0x10c7ba,_0x41ceb5[_0x2009dd(0x341)],_0x57e013,_0x4f13b3);_0x13cac0&&(_0x3b0d75[_0x2009dd(0x225)]=_0x13cac0,_0x3b0d75['v']=_0x13cac0[0xfa3*-0x1+-0x11e5+-0x74*-0x4a]);}_0x5c2140['push'](_0x3b0d75);}}if(_0x5c2140[_0x2009dd(0x4ed)+'h']){if(_0xffdfd9['yXXlH']('ffmfC',_0xffdfd9['OGvOa'])){var _0x19a1bc=_0xd06bd7();if(_0x19a1bc&&_0x19a1bc[_0x2009dd(0x2c8)+'e']&&_0x19a1bc[_0x2009dd(0x2c8)+'e'][_0x2009dd(0x43f)+'8']&&_0x19a1bc['Modul'+'e'][_0x2009dd(0x43f)+'8']['buffe'+'r'])return _0x19a1bc[_0x2009dd(0x2c8)+'e']['HEAPU'+'8'];}else{var _0x131699=_0x385440(_0x5c2140);_0x5c7e9b[_0x4f8cae]=_0x131699['rows'],_0x2dbe96[_0x4f8cae]={'key':_0x131699[_0x2009dd(0x72f)],'sane':_0x131699[_0x2009dd(0x643)],'checked':_0x131699['check'+'ed'],'keyConsistent':_0x131699[_0x2009dd(0x3b9)+_0x2009dd(0x701)+'ent'],'keySource':_0x131699[_0x2009dd(0x7ad)+_0x2009dd(0x3b4)]};}}}return _0x5c7e9b;}function _0x385440(_0x4ff6a4){var _0x5a2889=_0x24c400,_0x17b2e8={'owmXP':_0xffdfd9['SkEQE']};if(_0xffdfd9['SWCye']==='PrsaI'){var _0x34be5e=-0x139*0x17+0x1dd7+-0x1b8,_0x5cc39b=0xd18+0x1*0x1df9+-0x13b*0x23,_0x3cc0e6=null;for(var _0x2148b4=-0x9*0x325+0x1*0x213b+-0x4ee;_0x2148b4<_0x4ff6a4[_0x5a2889(0x4ed)+'h'];_0x2148b4++){if(_0xffdfd9['rGGVD']!==_0x5a2889(0x14b)){var _0x39442f=_0x4ff6a4[_0x2148b4];if(_0x39442f['k']['index'+'Of'](_0xffdfd9[_0x5a2889(0x6b8)])!==0x141*0x15+-0x74a*0x2+-0xbc1)continue;_0x39442f['v']=_0xffdfd9[_0x5a2889(0x2c2)](_0x131fc6,_0x39442f['k'],_0x39442f['hidde'+'n'],_0x39442f[_0x5a2889(0x442)+_0x5a2889(0x50d)+'t0']),_0x39442f[_0x5a2889(0x713)+'ed']=_0x39442f[_0x5a2889(0x442)+_0x5a2889(0x50d)+'t0'],_0x39442f[_0x5a2889(0x210)]=_0xffdfd9[_0x5a2889(0x6d8)](_0xffdfd9['JKije'](_0xffdfd9[_0x5a2889(0x3f5)](_0xffdfd9['ZJKna']+_0x39442f[_0x5a2889(0x3f3)+'n']+(_0x5a2889(0x2d5)+'=')+_0x39442f[_0x5a2889(0x637)],_0x39442f['act']?_0xffdfd9[_0x5a2889(0x138)]:''),_0xffdfd9[_0x5a2889(0x208)]),_0x39442f['keyAt'+_0x5a2889(0x50d)+'t0'])+_0xffdfd9['sPYzf']+_0x39442f['hex'];if(_0x3cc0e6===null)_0x3cc0e6=_0x39442f[_0x5a2889(0x442)+_0x5a2889(0x50d)+'t0'];_0x5cc39b++;if(_0xffdfd9[_0x5a2889(0x21f)](_0x5506f6,_0x39442f))_0x34be5e++,_0x39442f[_0x5a2889(0x643)]=!![];else{if(_0xffdfd9['RUNON']('KFZnQ',_0x5a2889(0x521)))_0x39442f[_0x5a2889(0x643)]=![];else return _0xc5823d[_0x5a2889(0x17f)+'e']=_0x17b2e8[_0x5a2889(0x5cd)],_0x1fb1cc[_0x5a2889(0x24c)];}delete _0x39442f[_0x5a2889(0x65f)];}else try{_0xffdfd9['HBNgi'](_0x472889);}catch(_0x524073){}}return{'rows':_0x4ff6a4,'key':_0x3cc0e6,'sane':_0x34be5e,'checked':_0x5cc39b,'keyConsistent':_0x8df532(_0x4ff6a4),'keySource':'offse'+'t\x200\x20('+_0x5a2889(0x3d6)+_0x5a2889(0x262)};}else{var _0x6801b0=_0x351c9b[_0x5a2889(0x754)+'r'](function(_0x44130f){var _0x11750e=_0x5a2889;return _0x44130f[_0x11750e(0x743)]===_0x57f281;})[-0x15df*-0x1+0x14*0x18a+-0x34a7];_0x1dec02={'type':_0x140067,'atMs':_0xffdfd9['NtlRM'](_0x5df923[_0x5a2889(0x134)](),_0x3f4501),'originalFunc':!!(_0x6801b0&&_0x6801b0[_0x5a2889(0x443)]&&typeof _0x6801b0[_0x5a2889(0x443)]['origi'+'nalFu'+'nc']===_0x5a2889(0x13e)+_0x5a2889(0x265)),'resolveGameAtFire':!!_0x15fa9c(),'gameSourceAtFire':_0xabb779['sourc'+'e']};}}function _0x8df532(_0x142d7b){var _0x4953b7=_0x24c400,_0x3b5645={'QQNUX':_0xffdfd9[_0x4953b7(0x22e)],'cbDRd':function(_0x4d54b7){return _0x4d54b7();}},_0xdc5cc2={};for(var _0x4df239=0xe6e+-0x1*0x1701+0x893;_0xffdfd9[_0x4953b7(0x663)](_0x4df239,_0x142d7b[_0x4953b7(0x4ed)+'h']);_0x4df239++){if('WzjUb'==='WzjUb'){var _0x2558ab=_0x142d7b[_0x4df239];if(_0x2558ab['k']['index'+'Of'](_0xffdfd9['WHcyV'])!==0x4b9*-0x8+-0x169b+0x3c63)continue;if(_0xffdfd9[_0x4953b7(0x4d0)](_0xdc5cc2[_0x2558ab['k']],undefined))_0xdc5cc2[_0x2558ab['k']]=_0x2558ab[_0x4953b7(0x713)+'ed'];else{if(_0xffdfd9[_0x4953b7(0x720)](_0xdc5cc2[_0x2558ab['k']],_0x2558ab['keyUs'+'ed']))return![];}}else{_0x11ec42[_0x1b91db]={'ptr':_0x23dcc7,'firstSeen':_0xdb18a8[_0x4953b7(0x134)](),'hits':0x0,'replaced':!!_0xce4a65};try{var _0x7c20c6=_0x160d94['filte'+'r'](function(_0x1de1fc){return _0x1de1fc['type']===_0x5747b5;})[0xe0*-0x2a+0x362*-0x1+0x2822];_0x4aac02={'type':_0x1eff60,'atMs':_0x8db07f[_0x4953b7(0x134)]()-_0x532d64,'originalFunc':!!(_0x7c20c6&&_0x7c20c6[_0x4953b7(0x443)]&&typeof _0x7c20c6['hook']['origi'+'nalFu'+'nc']===_0x3b5645[_0x4953b7(0x6dd)]),'resolveGameAtFire':!!_0x3b5645['cbDRd'](_0x4b12c6),'gameSourceAtFire':_0x3f14dc['sourc'+'e']};}catch(_0x1110eb){}}}return!![];}function _0x5506f6(_0x2919e0){var _0x4d6d8b=_0x24c400;if('Dvmch'===_0xffdfd9[_0x4d6d8b(0x2a2)]){var _0x3a3be0=_0xffdfd9[_0x4d6d8b(0x760)][_0x4d6d8b(0x2fe)]('|'),_0x232953=-0x13*-0xbd+-0xe0b+-0x4*-0x1;while(!![]){switch(_0x3a3be0[_0x232953++]){case'0':var _0x5889ee=_0x2919e0[_0x4d6d8b(0x637)];continue;case'1':return Math[_0x4d6d8b(0x281)](_0x1d25e4)<0x1a*-0xf0115+0xfdec99f*0x2+0x1d6352e4;case'2':if(_0x2919e0['k']===_0x4d6d8b(0x377))return _0x1d25e4===-0x71d+-0x1c0a+-0x1*-0x2327||_0x1d25e4===0x3ad+0x16d7+0x1a83*-0x1;continue;case'3':if(_0xffdfd9['BuxGM'](typeof _0x1d25e4,'numbe'+'r')||!_0xffdfd9[_0x4d6d8b(0x18a)](isFinite,_0x1d25e4))return![];continue;case'4':if(_0xffdfd9['KAmsb'](_0x2919e0[_0x4d6d8b(0x640)],0x157a+0x945*0x3+0x26*-0x14c))return Math[_0x4d6d8b(0x281)](_0x1d25e4-_0x5889ee)<=Math[_0x4d6d8b(0x14c)](-0x2561+0x1904+-0x2*-0x62f,Math['abs'](_0x5889ee)*(-0x359*-0x6+0x7*-0x446+0x9d4+0.6));continue;case'5':var _0x1d25e4=_0x2919e0['v'];continue;case'6':if(_0xffdfd9[_0x4d6d8b(0x1ab)](typeof _0x5889ee,'numbe'+'r')||!isFinite(_0x5889ee))return!![];continue;}break;}}else _0xffdfd9[_0x4d6d8b(0x53c)](_0x42f392);}function _0x5b4218(){var _0x227a6=_0x24c400,_0x3c7638={};try{if(_0x227a6(0x5ab)===_0xffdfd9[_0x227a6(0x57c)]){var _0x4962c7=window['Unity'+_0x227a6(0x2b7)+_0x227a6(0x336)]&&window[_0x227a6(0x5fd)+'WebMo'+_0x227a6(0x336)][_0x227a6(0x60b)+'me'];_0x3c7638['tag']=_0x4962c7&&_0x4962c7[_0x227a6(0x6db)+_0x227a6(0x242)+'g']||null,_0x3c7638[_0x227a6(0x15d)+'tches']=!!(_0x4962c7&&_0x3ec818&&_0x4962c7[_0x227a6(0x6db)+_0x227a6(0x242)+'g']===_0x3ec818),_0x3c7638['runti'+_0x227a6(0x1d6)+'e']=_0x4962c7&&_0x4962c7['_game']?typeof _0x4962c7[_0x227a6(0x24c)]:_0xffdfd9[_0x227a6(0x4af)],_0x3c7638[_0x227a6(0x2cc)+'nRunt'+'imeIs'+_0x227a6(0x64c)+_0x227a6(0x149)]=!!(_0x316d93&&_0x316d93[_0x227a6(0x186)+'ime']&&_0x316d93[_0x227a6(0x186)+'ime']===_0x4962c7),_0x3c7638[_0x227a6(0x2cc)+_0x227a6(0x404)+_0x227a6(0x3a8)+'me']=_0x316d93&&_0x316d93['_runt'+'ime']&&_0x316d93[_0x227a6(0x186)+'ime'][_0x227a6(0x24c)]?typeof _0x316d93['_runt'+'ime'][_0x227a6(0x24c)]:'none';}else return null;}catch(_0x28b5a8){_0x3c7638[_0x227a6(0x388)]=String(_0x28b5a8&&_0x28b5a8[_0x227a6(0x552)+'ge']||_0x28b5a8);}return _0x3c7638;}function _0xb426cc(){var _0x209c4e=_0x24c400,_0x23da7f={'uFVpC':'plugi'+_0x209c4e(0x502)+'ntime'+_0x209c4e(0x6fd)+_0x209c4e(0x175)+_0x209c4e(0x39d),'PNREI':function(_0x4700ff,_0x457d98){return _0xffdfd9['EPUXP'](_0x4700ff,_0x457d98);},'pOISj':function(_0x637b7,_0xeef8e8){return _0x637b7===_0xeef8e8;},'piKFR':'cmd','AUiUr':function(_0x15ad11,_0x3e38e0,_0xb94f19){return _0x15ad11(_0x3e38e0,_0xb94f19);},'RPNfh':_0x209c4e(0x44c)+_0x209c4e(0x6a6)};if(_0xffdfd9['aPUvm']!==_0xffdfd9[_0x209c4e(0x755)]){var _0x26016b=[_0xffdfd9['NZnUh'],_0xffdfd9[_0x209c4e(0x6ee)],_0xffdfd9['iGghA'],_0xffdfd9['mQtoP']],_0x28a4bd={};for(var _0x4780df=-0x2529+0x35f*0x1+-0x2*-0x10e5;_0x4780df<_0x26016b[_0x209c4e(0x4ed)+'h'];_0x4780df++){var _0x25aa08=_0x26016b[_0x4780df],_0x42e6a6=typeof window[_0x25aa08];_0x28a4bd[_0x25aa08]=_0xffdfd9['oLsfj'](_0x42e6a6,_0xffdfd9['YlGNN'])?_0x209c4e(0x37f)+'ined':_0x42e6a6;}var _0x34ca11=_0x27d025();_0x28a4bd['gameS'+_0x209c4e(0x4f7)]=_0x6647fd[_0x209c4e(0x17f)+'e'];try{_0x28a4bd[_0x209c4e(0x245)+'dule']=!!(_0x34ca11&&_0x34ca11[_0x209c4e(0x2c8)+'e']),_0x28a4bd['heapU'+'8']=!!(_0x34ca11&&_0x34ca11[_0x209c4e(0x2c8)+'e']&&_0x34ca11['Modul'+'e'][_0x209c4e(0x43f)+'8']),_0x28a4bd[_0x209c4e(0x6c2)+_0x209c4e(0x6f1)]=_0x28a4bd['heapU'+'8']?_0x34ca11['Modul'+'e'][_0x209c4e(0x43f)+'8'][_0x209c4e(0x4ed)+'h']:0x33*-0xc1+0x1*-0x567+-0x2*-0x15ed;}catch(_0x4192e9){if('wWRRh'!==_0xffdfd9['oEaPL']){var _0xca67c9=_0x5da080[_0x209c4e(0x55e)+_0x209c4e(0x297)+'e']();if(_0xca67c9)return _0x297913[_0x209c4e(0x17f)+'e']=_0x23da7f['uFVpC'],_0xca67c9;}else _0x28a4bd[_0x209c4e(0x245)+_0x209c4e(0x3a9)]=![],_0x28a4bd['heapU'+'8']=![],_0x28a4bd[_0x209c4e(0x6c2)+'ytes']=-0xc5b*-0x1+0xd91+-0x19ec;}return _0x28a4bd['value'+'Wrapp'+'er']=typeof _0x1fd903,_0x28a4bd;}else{var _0x507337=new _0x24af9c(_0x23da7f[_0x209c4e(0x4e9)]);_0x507337['onmes'+'sage']=function(_0x29fe9e){var _0x178c6f=_0x209c4e,_0x3a3dbb=_0x29fe9e[_0x178c6f(0x20b)];if(_0x3a3dbb&&_0x23da7f[_0x178c6f(0x51d)](_0x3a3dbb['__sak'+_0x178c6f(0x4c1)],_0x534fad)&&_0x23da7f[_0x178c6f(0x6f9)](_0x3a3dbb[_0x178c6f(0x529)],_0x23da7f['piKFR']))_0x23da7f[_0x178c6f(0x2a5)](_0x3d08e6,_0x3a3dbb['cmd'],_0x3a3dbb['arg']);};}}function _0x340b56(_0x49955c){var _0x55a339=_0x24c400,_0x49365c={'rrHbA':'%c[sa'+_0x55a339(0x40a)+_0x55a339(0x24f)+_0x55a339(0x288)+_0x55a339(0x37a)+_0x55a339(0x1af),'ztmcW':function(_0x3ec43f,_0x192855){return _0x3ec43f+_0x192855;}},_0x13739c={};for(var _0x4b5956 in _0x49955c){if(_0xffdfd9[_0x55a339(0x207)]==='hGmpQ')_0x421b11['warn'](_0x49365c[_0x55a339(0x555)],_0x49365c['ztmcW']('color'+':',_0x16a605),_0x414c2e);else{var _0x98a6a3=_0x49955c[_0x4b5956];for(var _0x4818fe=-0x1d2+0x1656+-0xa42*0x2;_0x4818fe<_0x98a6a3[_0x55a339(0x4ed)+'h'];_0x4818fe++){_0x13739c[_0x4b5956+'+0x'+_0x98a6a3[_0x4818fe]['o'][_0x55a339(0x633)+_0x55a339(0x714)](-0x1*0x1666+0xed5+-0xd9*-0x9)]=_0x98a6a3[_0x4818fe]['v'];}}}return _0x13739c;}function _0x6ffa29(_0x43ab94,_0xe6f226){var _0x5cf908=_0x24c400;if(_0xffdfd9[_0x5cf908(0x4aa)](_0x43ab94,'speed')){_0x5a81c0(_0xe6f226&&_0xffdfd9[_0x5cf908(0x2d8)](typeof _0xe6f226['on'],'boole'+'an')?_0xe6f226['on']:_0x22454f['on'],_0xe6f226&&_0xffdfd9[_0x5cf908(0x12b)](typeof _0xe6f226[_0x5cf908(0x2d4)+'r'],_0x5cf908(0x4db)+'r')?_0xe6f226['facto'+'r']:_0x22454f['facto'+'r']);return;}if(_0xffdfd9['EAQer'](_0x43ab94,_0x5cf908(0x597)+_0x5cf908(0x58b)))return;var _0x51ecd2=_0xffdfd9['KzFix'](_0x557ac5),_0x125d1a=_0x340b56(_0x51ecd2);if(!_0x8419df){_0x8419df=_0x125d1a,_0xa66cb9=[],_0xffdfd9[_0x5cf908(0x4a3)](_0x5c3bac,_0xffdfd9[_0x5cf908(0x18d)],{'report':_0xffdfd9['fTGyN'](_0x5d1f3b)});return;}_0xa66cb9=[];for(var _0x2b9893 in _0x125d1a){if(_0xffdfd9[_0x5cf908(0x212)](_0x5cf908(0x237),'KnUkq')){var _0xc1c55f=_0x8419df[_0x2b9893],_0x31eec8=_0x125d1a[_0x2b9893];if(_0xc1c55f!==_0x31eec8)_0xa66cb9[_0x5cf908(0x2ff)](_0x2b9893+':\x20'+_0xc1c55f+'\x20->\x20'+_0x31eec8);}else return null;}_0x8419df=_0x125d1a,_0x5c3bac(_0xffdfd9['FsIEQ'],{'report':_0xffdfd9[_0x5cf908(0x4bf)](_0x5d1f3b)});}var _0x23ac8c=null;function _0x1844c8(){var _0x29948f=_0x24c400,_0x54e3b2={'AvZcC':function(_0x46cd3c,_0x28dd21){return _0x46cd3c(_0x28dd21);},'ACavs':_0x29948f(0x219),'dlWDR':function(_0x50ad85,_0x305d60){return _0x50ad85(_0x305d60);}};if(_0x23ac8c)return _0x23ac8c;try{if(!document[_0x29948f(0x2b2)]||!document[_0x29948f(0x2b2)][_0x29948f(0x790)+_0x29948f(0x4ab)+'d'])return null;if(!document['getEl'+'ement'+'ById'](_0x29948f(0x44c)+'a-sw-'+'hud-c'+'ss')){var _0x5e21ea=document[_0x29948f(0x54d)+_0x29948f(0x6bf)+_0x29948f(0x452)](_0xffdfd9['WWXwt']);_0x5e21ea['id']=_0xffdfd9[_0x29948f(0x606)],_0x5e21ea[_0x29948f(0x21b)+_0x29948f(0x7a0)+'t']='#saku'+_0x29948f(0x1b4)+_0x29948f(0x247)+_0x29948f(0x607)+_0x29948f(0x7ac)+'l}',(document['head']||document[_0x29948f(0x36a)+_0x29948f(0x14f)+'ement'])[_0x29948f(0x790)+_0x29948f(0x4ab)+'d'](_0x5e21ea);}var _0xf3ddd5=document[_0x29948f(0x54d)+_0x29948f(0x6bf)+_0x29948f(0x452)](_0x29948f(0x45a));_0xf3ddd5['id']=_0xffdfd9['uiIvE'],_0xf3ddd5[_0x29948f(0x4bb)][_0x29948f(0x792)+'xt']=_0x29948f(0x70a)+'ion:f'+_0x29948f(0x46b)+_0x29948f(0x639)+_0x29948f(0x456)+_0x29948f(0x12e)+_0x29948f(0x5ba)+_0x29948f(0x415)+'ex:21'+_0x29948f(0x430)+_0x29948f(0x723)+_0x29948f(0x6a1)+_0x29948f(0x6c6)+_0x29948f(0x239)+'x-dir'+_0x29948f(0x59c)+'n:col'+'umn;g'+_0x29948f(0x5fe)+'x;'+(_0x29948f(0x48b)+'round'+_0x29948f(0x2ec)+_0x29948f(0x3b0)+_0x29948f(0x3cc)+_0x29948f(0x397)+'borde'+_0x29948f(0x316)+'\x20soli'+'d\x20rgb'+_0x29948f(0x3ae)+_0x29948f(0x65d)+_0x29948f(0x1a2)+'45);b'+'order'+'-radi'+_0x29948f(0x4e1)+_0x29948f(0x592))+(_0x29948f(0x398)+'ng:6p'+'x\x208px'+_0x29948f(0x50f)+_0x29948f(0x566)+_0x29948f(0x59a)+'\x20ui-m'+'onosp'+_0x29948f(0x330)+'onsol'+_0x29948f(0x4c6)+'nospa'+'ce;co'+_0x29948f(0x484)+'f7eef'+'5;')+('box-s'+_0x29948f(0x444)+':0\x2010'+'px\x2030'+_0x29948f(0x788)+_0x29948f(0x64a)+_0x29948f(0x3a2)+_0x29948f(0x19a)+_0x29948f(0x412)+_0x29948f(0x6c8)+_0x29948f(0x6bd)+'kit-u'+_0x29948f(0x19a)+'elect'+_0x29948f(0x6c8)+';');var _0x3fcfbf=_0x29948f(0x16a)+_0x29948f(0x2ab)+'a=\x22st'+'2\x22\x20st'+_0x29948f(0x1ac)+_0x29948f(0x232)+_0x29948f(0x670)+'a99;m'+_0x29948f(0x66f)+_0x29948f(0x6a5)+_0x29948f(0x135)+_0x29948f(0x6d5)+_0x29948f(0x408);_0xf3ddd5[_0x29948f(0x4a7)+_0x29948f(0x365)]=_0xffdfd9[_0x29948f(0x2e8)](_0xffdfd9[_0x29948f(0x722)](_0xffdfd9[_0x29948f(0x5c4)](_0xffdfd9['fBiBZ'](_0xffdfd9['trrvd'](_0xffdfd9[_0x29948f(0x6ad)](_0xffdfd9[_0x29948f(0x4f5)](_0x29948f(0x16a)+_0x29948f(0x2ab)+'a=\x22ba'+'r\x22\x20st'+_0x29948f(0x1ac)+_0x29948f(0x658)+_0x29948f(0x75e)+'ex;ga'+'p:6px'+_0x29948f(0x406)+'n-ite'+_0x29948f(0x798)+'nter;'+'flex-'+_0x29948f(0x567)+'wrap;'+_0x29948f(0x213)+'idth:'+_0x29948f(0x510)+';\x22>',_0xffdfd9[_0x29948f(0x3e2)])+_0x5ad662+_0xffdfd9[_0x29948f(0x44a)]+_0xffdfd9[_0x29948f(0x431)]+(_0x29948f(0x232)+_0x29948f(0x4c5)+_0x29948f(0x2a6)+_0x29948f(0x7bc)+'-radi'+'us:6p'+_0x29948f(0x167)+_0x29948f(0x308)+_0x29948f(0x399)+'px;cu'+_0x29948f(0x585)+_0x29948f(0x322)+_0x29948f(0x39b)+'nt:in'+_0x29948f(0x4ad)+_0x29948f(0x2a7)+'eed\x20o'+_0x29948f(0x1a3)+_0x29948f(0x4a1)+'>'),_0x29948f(0x6b5)+'t\x20dat'+'a-a=\x22'+'fx\x22\x20t'+_0x29948f(0x396)+'range'+_0x29948f(0x20f)+'=\x221\x22\x20'+_0x29948f(0x496)+_0x29948f(0x66b)+_0x29948f(0x163)+'.5\x22\x20v'+_0x29948f(0x4ee)+'\x222\x22\x20s'+'tyle='+_0x29948f(0x421)+_0x29948f(0x4cb)+_0x29948f(0x28c)+_0x29948f(0x1d1)+_0x29948f(0x372)),_0x5ad662),';\x22>')+_0xffdfd9[_0x29948f(0x49b)]+(_0x29948f(0x7a1)+_0x29948f(0x4f2)+'ta-a='+'\x22esp\x22'+'\x20styl'+_0x29948f(0x5de)+_0x29948f(0x2f4)+_0x29948f(0x4b8)+_0x29948f(0x5d5)+_0x29948f(0x631)+_0x29948f(0x407)+_0x29948f(0x7e3)+'x\x20sol'+_0x29948f(0x710)+'ba(25'+'5,143'+',177,'+'.45);')+_0xffdfd9[_0x29948f(0x318)],_0x29948f(0x7a1)+'on\x20da'+'ta-a='+_0x29948f(0x185)+_0x29948f(0x41e)+'le=\x22b'+'ackgr'+'ound:'+'trans'+_0x29948f(0x718)+_0x29948f(0x2da)+'der:1'+_0x29948f(0x1f9)+_0x29948f(0x2d2)+_0x29948f(0x4dd)+'55,14'+'3,177'+_0x29948f(0x3f9)+';'),'color'+':#f7e'+_0x29948f(0x2a6)+_0x29948f(0x7bc)+'-radi'+_0x29948f(0x4b1)+_0x29948f(0x167)+'ding:'+_0x29948f(0x32e)+_0x29948f(0x45e)+_0x29948f(0x585)+_0x29948f(0x322)+_0x29948f(0x39b)+_0x29948f(0x5c5)+_0x29948f(0x4ad)+';\x22>Sn'+_0x29948f(0x2f1)+_0x29948f(0x4a1)+'>'),_0x29948f(0x7a1)+_0x29948f(0x4f2)+'ta-a='+_0x29948f(0x132)+'\x22\x20sty'+_0x29948f(0x626)+_0x29948f(0x2e2)+_0x29948f(0x4fd)+':auto'+';back'+'groun'+'d:tra'+_0x29948f(0x400)+_0x29948f(0x148)+'order'+':1px\x20'+_0x29948f(0x479)+'\x20rgba'+'(255,'+'143,1'+'77,.4'+_0x29948f(0x343))+_0xffdfd9[_0x29948f(0x486)]+_0xffdfd9['VlzeY']+_0xffdfd9['zSWGJ']+(_0x29948f(0x16a)+_0x29948f(0x2ab)+_0x29948f(0x19f)+_0x29948f(0x7b5)+'yle=\x22'+'color'+_0x29948f(0x670)+'a99;m'+_0x29948f(0x66f)+_0x29948f(0x6a5)+_0x29948f(0x135)+_0x29948f(0x6d5)+'iv>'),_0xf3ddd5[_0x29948f(0x4a7)+'HTML']=_0x3fcfbf;var _0x5e7147=function(_0x10cb89){var _0x28e8a5=_0x29948f;return _0xf3ddd5['query'+_0x28e8a5(0x2bf)+_0x28e8a5(0x733)]('[data'+'-a=\x22'+_0x10cb89+'\x22]');},_0x5c34a3=_0xffdfd9[_0x29948f(0x628)](_0x5e7147,'st'),_0x34730a=_0x5e7147(_0xffdfd9[_0x29948f(0x1d2)]),_0x13cd43=_0xffdfd9[_0x29948f(0x499)](_0x5e7147,'sp'),_0x5f1af3=_0x5e7147('fx'),_0x3784f1=_0x5e7147('fv'),_0x57f94a=_0x5e7147(_0x29948f(0x246));if(_0x13cd43)_0x13cd43['oncli'+'ck']=function(){var _0x395a48=_0x29948f,_0x1cbf62={'MebOr':_0xffdfd9['pDgbM'],'IKXpn':_0x395a48(0x3c9)+_0x395a48(0x7b8),'SjhyC':_0xffdfd9['veCxQ'],'nOuWQ':_0x395a48(0x666)+'f5'};'XdHnC'!=='GFiMX'?_0xffdfd9[_0x395a48(0x198)](_0x5a81c0,!_0x22454f['on'],_0x22454f['facto'+'r']):(_0xe8452['sp']['textC'+'onten'+'t']=_0x473f00['on']?_0x1cbf62[_0x395a48(0x1df)]:_0x1cbf62['IKXpn'],_0x3725fa['sp'][_0x395a48(0x4bb)]['backg'+_0x395a48(0x5f5)]=_0x18fd65['on']?_0x3bdd10:_0x1cbf62[_0x395a48(0x624)],_0x12b0d6['sp'][_0x395a48(0x4bb)][_0x395a48(0x232)]=_0x3b7ad9['on']?_0x395a48(0x475)+'1b':_0x1cbf62[_0x395a48(0x524)]);};if(_0x5f1af3)_0x5f1af3['oninp'+'ut']=function(){var _0x320d83=_0x29948f,_0x56e987={'YOwKN':function(_0x20959d,_0x5712a8){return _0x20959d+_0x5712a8;},'habOz':_0x320d83(0x52e)+_0x320d83(0x69e)+'y\x20a\x20d'+'iffer'+'ent\x20i'+_0x320d83(0x36e)+_0x320d83(0x6f6)+_0x320d83(0x719)+_0x320d83(0x638)+_0x320d83(0x470)+'\x20the\x20'+'wrong'+_0x320d83(0x2e0)+_0x320d83(0x616)+'r\x20'};_0xffdfd9[_0x320d83(0x467)]('EMAUy',_0x320d83(0x519))?_0x21f794['warni'+_0x320d83(0x7de)][_0x320d83(0x2ff)](_0x56e987['YOwKN']('ANOTH'+_0x320d83(0x3f8)+'MK\x20CO'+_0x320d83(0x304)+_0x320d83(0x66d)+_0x320d83(0x708)+_0x320d83(0x349)+'Unity'+_0x320d83(0x2b7)+_0x320d83(0x222)+_0x320d83(0x427)+_0x320d83(0x60b)+'me\x20we'+'\x20arme'+'d\x20was'+'\x20',_0x56e987[_0x320d83(0x2c4)])+('the\x20g'+'ame\x20w'+_0x320d83(0x37c)+_0x320d83(0x53e)+_0x320d83(0x67f)+'lding'+'\x20it\x20i'+'s\x20orp'+_0x320d83(0x4b5)+_0x320d83(0x317)+_0x320d83(0x44e)+_0x320d83(0x1ce)+'\x20othe'+'r\x20')+(_0x320d83(0x6f8)+_0x320d83(0x7d1)+_0x320d83(0x248)+'ipt\x20i'+_0x320d83(0x28a)+'permo'+_0x320d83(0x6fb)+'and\x20h'+'ard-r'+_0x320d83(0x4d6)+'.')):_0x5a81c0(_0x22454f['on'],_0xffdfd9['QNYgo'](parseFloat,_0x5f1af3[_0x320d83(0x3ec)])||0x219*-0x3+0x44f*0x1+-0x1*-0x1fd);};if(_0xffdfd9[_0x29948f(0x21f)](_0x5e7147,_0xffdfd9['rZzfH']))_0x5e7147('snap')[_0x29948f(0x13d)+'ck']=function(){var _0x250c0f=_0x29948f;_0x54e3b2['AvZcC'](_0x6ffa29,_0x250c0f(0x597)+_0x250c0f(0x58b));};var _0x11bccb=_0xffdfd9[_0x29948f(0x75b)](_0x5e7147,'esp');if(_0x11bccb)_0x11bccb['oncli'+'ck']=function(){var _0x4cbc2b=_0x29948f;if(_0xffdfd9[_0x4cbc2b(0x5dc)]('ujicX',_0x4cbc2b(0x2dd))){var _0x2334b0={};for(var _0x1e50f0 in _0x16f64f){var _0x38f70b=_0x2f913f[_0x1e50f0];for(var _0x15143b=0x226c+-0xb6a+-0x49a*0x5;_0x15143b<_0x38f70b[_0x4cbc2b(0x4ed)+'h'];_0x15143b++){_0x2334b0[_0x1e50f0+_0x54e3b2[_0x4cbc2b(0x707)]+_0x38f70b[_0x15143b]['o'][_0x4cbc2b(0x633)+_0x4cbc2b(0x714)](-0x1fa7+0xd1*0x1f+0x14*0x52)]=_0x38f70b[_0x15143b]['v'];}}return _0x2334b0;}else{var _0x215ab3=('0|4|3'+_0x4cbc2b(0x1f1))[_0x4cbc2b(0x2fe)]('|'),_0x26539b=-0x1*0x254d+-0x5*-0x518+0x1*0xbd5;while(!![]){switch(_0x215ab3[_0x26539b++]){case'0':_0x5a44ca['on']=!_0x5a44ca['on'];continue;case'1':_0x11bccb['style']['color']=_0x5a44ca['on']?'#2a0f'+'1b':_0xffdfd9['ZQeYW'];continue;case'2':try{var _0x5cd3d6=_0xffdfd9[_0x4cbc2b(0x7d9)](_0x3cec9e);if(_0x5cd3d6&&_0x5cd3d6['el'])_0x5cd3d6['el']['style'][_0x4cbc2b(0x658)+'ay']=_0x5a44ca['on']?'':'none';}catch(_0x4f60f8){}continue;case'3':_0x11bccb['style'][_0x4cbc2b(0x48b)+'round']=_0x5a44ca['on']?_0x5ad662:_0x4cbc2b(0x1fe)+'paren'+'t';continue;case'4':_0x11bccb['textC'+_0x4cbc2b(0x7a0)+'t']=_0x5a44ca['on']?_0xffdfd9[_0x4cbc2b(0x571)]:_0xffdfd9[_0x4cbc2b(0x6ed)];continue;}break;}}};if(_0xffdfd9[_0x29948f(0x46a)](_0x5e7147,'fold'))_0xffdfd9[_0x29948f(0x46a)](_0x5e7147,_0x29948f(0x793))[_0x29948f(0x13d)+'ck']=function(){var _0x23fd56=_0x29948f;if(_0xffdfd9['emGHd']===_0xffdfd9[_0x23fd56(0x482)])return _0x3bdc24['v']!==_0x4fbfe3&&_0x54e3b2['dlWDR'](_0x2ee37e,_0x967110['v']);else{if(!_0x57f94a)return;var _0x327f86=_0x57f94a['style']['displ'+'ay']===_0xffdfd9[_0x23fd56(0x4af)];_0x57f94a['style']['displ'+'ay']=_0x327f86?'':_0xffdfd9[_0x23fd56(0x4af)],_0xffdfd9['QIQAg'](_0x5e7147,_0x23fd56(0x793))[_0x23fd56(0x21b)+_0x23fd56(0x7a0)+'t']=_0x327f86?'-':'+';}};return document['body'][_0x29948f(0x790)+'dChil'+'d'](_0xf3ddd5),_0x23ac8c={'el':_0xf3ddd5,'st':_0x5c34a3,'st2':_0x34730a,'sp':_0x13cd43,'fx':_0x5f1af3,'fv':_0x3784f1},_0x23ac8c;}catch(_0x33ee08){return console[_0x29948f(0x2c7)](_0xffdfd9[_0x29948f(0x2bd)],_0xffdfd9[_0x29948f(0x7b0)]+_0x5ad662,_0x33ee08),null;}}var _0x3fcc0a=0x1e10+-0x2222+0x414;function _0x5a81c0(_0x66b2c1,_0x248fb9){var _0x54e3f9=_0x24c400,_0x841bad={'WsHZj':function(_0x5911c1,_0x4534f1){var _0x3ecb2c=_0x49be;return _0xffdfd9[_0x3ecb2c(0x663)](_0x5911c1,_0x4534f1);},'NDleb':function(_0x1f8a2f,_0x292f9c,_0x9c1398){return _0x1f8a2f(_0x292f9c,_0x9c1398);},'zebvY':function(_0x37b0b4,_0x2a5e36){return _0x37b0b4+_0x2a5e36;},'RLYCx':function(_0x301c69,_0x57a616,_0x386223){return _0x301c69(_0x57a616,_0x386223);},'NfuKs':function(_0x579176,_0x2c945e){return _0xffdfd9['lqFPi'](_0x579176,_0x2c945e);}};if(_0x54e3f9(0x61e)===_0x54e3f9(0x61e)){var _0x386d10=_0x22454f['on'];_0x22454f['on']=!!_0x66b2c1;_0x22454f['on']&&!_0x386d10&&(_0x248fb9===undefined||_0x248fb9===null||_0xffdfd9[_0x54e3f9(0x461)](Number,_0x248fb9)===-0x2*0xce0+-0x1367*-0x1+-0x32d*-0x2)&&(_0x248fb9=_0x3fcc0a);_0x22454f[_0x54e3f9(0x2d4)+'r']=Math[_0x54e3f9(0x2ac)](_0x22454f[_0x54e3f9(0x14c)],Math['max'](_0x22454f[_0x54e3f9(0x2ac)],Number(_0x248fb9)||0x817+0x99*0x12+-0x12d8));if(!_0x22454f['on'])_0x897ff7={};var _0x1506cd=_0x1844c8();if(_0x1506cd){if(_0x1506cd['sp']){if(_0x54e3f9(0x2cd)!==_0xffdfd9[_0x54e3f9(0x327)])for(var _0x392900=0x71*-0xd+0xbd1+-0x30a*0x2;_0x841bad['WsHZj'](_0x392900,_0x4ce3cb[_0x54e3f9(0x4ed)+'h']);_0x392900++){var _0x4a468b=_0x841bad[_0x54e3f9(0x4ae)](_0x4dbccf,_0x841bad['zebvY'](_0x4b3aae,_0x841bad['RLYCx'](_0x381bc7,_0x34afc0[_0x392900][0x4*0x943+-0x2225*-0x1+0x3*-0x17bb],-0x81*-0x1+0xda7+0x70c*-0x2)),'u32');if(_0x4a468b)_0x353889['refs'][_0x2ddaf9[_0x392900][0x7f1+-0x1*0x22a9+0x1ab9]]='0x'+_0x841bad[_0x54e3f9(0x180)](_0x4a468b,0x2*0x416+0x1*0x10b5+-0x18e1*0x1)[_0x54e3f9(0x633)+_0x54e3f9(0x714)](0x3*0x6f7+0x4b6+0x1f7*-0xd);}else _0x1506cd['sp'][_0x54e3f9(0x21b)+_0x54e3f9(0x7a0)+'t']=_0x22454f['on']?'Speed'+'\x20ON':_0xffdfd9[_0x54e3f9(0x39e)],_0x1506cd['sp'][_0x54e3f9(0x4bb)]['backg'+_0x54e3f9(0x5f5)]=_0x22454f['on']?_0x5ad662:_0xffdfd9['veCxQ'],_0x1506cd['sp']['style'][_0x54e3f9(0x232)]=_0x22454f['on']?'#2a0f'+'1b':'#f7ee'+'f5';}if(_0x1506cd['fx'])_0x1506cd['fx']['value']=String(_0x22454f[_0x54e3f9(0x2d4)+'r']);if(_0x1506cd['fv'])_0x1506cd['fv']['textC'+_0x54e3f9(0x7a0)+'t']=_0x22454f[_0x54e3f9(0x2d4)+'r']['toFix'+'ed'](-0xc*0x8b+-0x1b6b+-0x1*-0x21f0)+'x';}}else{if(_0x5c6c18)_0x45626b['textC'+'onten'+'t']=(_0xffdfd9[_0x54e3f9(0x601)](_0x27d370,_0x163b45[_0x54e3f9(0x3ec)])||0x93*-0x44+0x18d+0x2*0x12c0)[_0x54e3f9(0x580)+'ed'](-0x4c*-0x19+-0x2*0x8b+0x1*-0x655)+'x';_0x3b597e();}}function _0x4ec1c3(_0xaf0925){var _0x4cfc58=_0x24c400,_0x5dcebe={'Zdteh':function(_0x14f84a,_0x5789be){var _0x4fd70a=_0x49be;return _0xffdfd9[_0x4fd70a(0x56b)](_0x14f84a,_0x5789be);}};if(_0xffdfd9['RpsGJ'](_0x4cfc58(0x17c),_0xffdfd9['skIOM']))return{'version':_0x3aeee2,'when':new _0x5295a3()['toISO'+_0x4cfc58(0x5eb)+'g'](),'elapsedMs':_0x5dcebe['Zdteh'](_0x273299[_0x4cfc58(0x134)](),_0x3b4254),'host':_0x4425f9,'uwmk':!!(_0x51b126[_0x4cfc58(0x5fd)+'WebMo'+'dkit']&&_0x54f635['Unity'+'WebMo'+'dkit'][_0x4cfc58(0x60b)+'me']),'il2CppContext':![],'arm':_0x2b84dd,'hooksTotal':_0x1c58ec[_0x4cfc58(0x4ed)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x1ea2c1(_0x3a6710&&_0x54c933['messa'+'ge']||_0x7441d1)};else{var _0x174e78=_0x1844c8();if(!_0x174e78||!_0x174e78['st'])return;try{var _0x46cf7c=Object[_0x4cfc58(0x123)](_0xaf0925&&_0xaf0925['insta'+'nces']||{})[_0x4cfc58(0x4ed)+'h'],_0x3f158b=_0xaf0925&&_0xaf0925[_0x4cfc58(0x40e)]||null,_0x1c621f=_0x3f158b?_0x3f158b[_0x4cfc58(0x5f4)+_0x4cfc58(0x5f1)]||0x3*0x655+-0x117b+-0x184:-0x1*-0x126e+0xdce*-0x1+0x25*-0x20,_0x1479e0=_0x3f158b?_0x3f158b[_0x4cfc58(0x3d9)+'unt']||0x1*-0xa9+0xbef+-0xb46:0x2697+-0x9d0+-0x1cc7,_0x29d37b=_0x87b564?(_0x87b564[_0x4cfc58(0x387)+'r']['byteL'+_0x4cfc58(0x6af)]/(-0x1*-0x159572+0x1c5f5c+0x2*-0x10fa67))[_0x4cfc58(0x580)+'ed'](-0xd2+0x119*-0x17+0x1a11)+'MB':'no-me'+'m',_0x540794=_0xffdfd9['ThNXh'](_0xffdfd9[_0x4cfc58(0x121)](_0xffdfd9['LXesO'](_0xffdfd9['wMHJc'](_0xffdfd9['qWHKt']('v'+(_0xaf0925&&_0xaf0925['versi'+'on']||_0x3615c3),_0xffdfd9[_0x4cfc58(0x333)]),_0xaf0925&&_0xaf0925[_0x4cfc58(0x698)+'Appli'+'ed']||-0xf39+-0x19*0x21+0x1272)+'/',_0xaf0925&&_0xaf0925['hooks'+'Total']||-0x1c*0x157+0x724+0x1e60)+_0xffdfd9[_0x4cfc58(0x47b)],_0x46cf7c)+_0xffdfd9['DViuf']+_0x29d37b,'\x20\x20wri'+_0x4cfc58(0x7bd))+_0x419d24;_0x174e78['st'][_0x4cfc58(0x21b)+_0x4cfc58(0x7a0)+'t']=_0x540794;var _0x5dec12=_0x174e78[_0x4cfc58(0x2ae)];_0x5dec12&&(_0x5dec12['textC'+'onten'+'t']=_0xffdfd9['mwbsL'](_0x1c621f,0xfd1*-0x1+0x2115+-0x1144)?_0xffdfd9[_0x4cfc58(0x445)]('PLAYE'+_0x4cfc58(0x6aa),_0x1c621f)+(_0x1479e0?_0xffdfd9[_0x4cfc58(0x2e8)]('\x20+\x20',_0x1479e0)+'\x20bots':'')+(_0x3f158b&&_0x3f158b[_0x4cfc58(0x73a)+'a']?_0xffdfd9['MoKJN']+_0x3f158b[_0x4cfc58(0x73a)+_0x4cfc58(0x700)]:_0x4cfc58(0x451)+'\x20-'):_0xffdfd9[_0x4cfc58(0x274)]+(_0x3f158b&&_0x3f158b[_0x4cfc58(0x73a)+'a']?_0x3f158b[_0x4cfc58(0x73a)+'aFrom']:'-'),_0x5dec12['style']['color']=_0x1c621f>-0x1*0x1285+0x2579+-0x12f4?_0xffdfd9[_0x4cfc58(0x76f)]:'#8d7a'+'99');}catch(_0x4856b2){}}}window[_0x24c400(0x635)+'entLi'+_0x24c400(0x744)+'r'](_0x24c400(0x62f)+'wn',function(_0x4d4cee){var _0x4ff0bc=_0x24c400,_0x5afa09={'fFNyC':function(_0xb3f95a,_0x22b810){return _0xffdfd9['jqWZd'](_0xb3f95a,_0x22b810);},'FVtVc':_0xffdfd9[_0x4ff0bc(0x6f7)],'uOzgZ':function(_0x9a12c1,_0xbe4c5c){var _0x12acc9=_0x4ff0bc;return _0xffdfd9[_0x12acc9(0x6ef)](_0x9a12c1,_0xbe4c5c);},'LXjOY':function(_0x4308af,_0x3da047){return _0x4308af+_0x3da047;},'fIRBj':_0xffdfd9[_0x4ff0bc(0x333)],'NWQje':_0x4ff0bc(0x5a1)+'s\x20','icQeH':_0x4ff0bc(0x126)+_0x4ff0bc(0x7bd),'hsaYh':function(_0x2e10fd,_0x95d4b8){return _0x2e10fd>_0x95d4b8;},'kAPzr':_0x4ff0bc(0x575),'QTDDz':_0xffdfd9[_0x4ff0bc(0x465)],'QZBKb':function(_0x280afa,_0x5e9f82){return _0x280afa+_0x5e9f82;}};if(!_0x4d4cee)return;try{if(_0x4d4cee['code']==='F9'){if(_0xffdfd9['fBtnd']!==_0x4ff0bc(0x292)){if(!_0x40d293)return;var _0x4716b2=_0x1c1638['style'][_0x4ff0bc(0x658)+'ay']===_0xffdfd9['fmUAr'];_0x37f192[_0x4ff0bc(0x4bb)][_0x4ff0bc(0x658)+'ay']=_0x4716b2?'':'none',_0x334abb(_0xffdfd9['GWFfo'])['textC'+_0x4ff0bc(0x7a0)+'t']=_0x4716b2?'-':'+';}else{_0x4d4cee['preve'+'ntDef'+'ault'](),_0x6ffa29(_0x4ff0bc(0x597)+_0x4ff0bc(0x58b));return;}}if(_0xffdfd9[_0x4ff0bc(0x3e8)](_0x4d4cee[_0x4ff0bc(0x5c3)],'F7')){if(_0xffdfd9['dsMjA'](_0x4ff0bc(0x42f),'iSqtr')){_0x4d4cee[_0x4ff0bc(0x6b3)+_0x4ff0bc(0x42e)+'ault'](),_0x5a81c0(!_0x22454f['on'],_0x22454f['facto'+'r']);return;}else return null;}if(_0x4d4cee['code']==='F8'){_0x4d4cee[_0x4ff0bc(0x6b3)+_0x4ff0bc(0x42e)+_0x4ff0bc(0x472)](),_0x5a81c0(_0x22454f['on'],_0x22454f[_0x4ff0bc(0x2d4)+'r']+(0xe11*-0x1+-0xe75+0x1c86+0.5));return;}if(_0x4d4cee['code']==='F6'){if('EdMNk'==='EdMNk'){_0x4d4cee['preve'+'ntDef'+_0x4ff0bc(0x472)](),_0xffdfd9['wYQXj'](_0x5a81c0,_0x22454f['on'],_0x22454f[_0x4ff0bc(0x2d4)+'r']-(-0x621+-0xdbd+-0x13de*-0x1+0.5));return;}else{var _0x47670b=_0x12e53e[_0x4ff0bc(0x123)](_0x51f661&&_0x45f9dd['insta'+_0x4ff0bc(0x54a)]||{})['lengt'+'h'],_0x136ce9=_0x29d6e2&&_0xdce1cd[_0x4ff0bc(0x40e)]||null,_0x2c3da6=_0x136ce9?_0x136ce9[_0x4ff0bc(0x5f4)+'Count']||0x7*-0xb5+0x2205*-0x1+-0x74*-0x56:0x13*0x15d+-0xde7*0x2+0x1e7,_0x4894f5=_0x136ce9?_0x136ce9[_0x4ff0bc(0x3d9)+'unt']||-0x2298+0xa14+0x1884:0x218*-0x3+-0x489*-0x5+-0x577*0x3,_0x2a9b05=_0x137f37?_0x5afa09[_0x4ff0bc(0x1ef)]((_0x46d9e2['buffe'+'r'][_0x4ff0bc(0x6dc)+_0x4ff0bc(0x6af)]/(-0x80d3e*0x1+-0xe04a0+-0x2*-0x1308ef))['toFix'+'ed'](0x7*-0x565+0x1da+-0x23e9*-0x1),'MB'):_0x5afa09[_0x4ff0bc(0x305)],_0x9b8bbf=_0x5afa09[_0x4ff0bc(0x1ef)](_0x5afa09[_0x4ff0bc(0x133)](_0x5afa09[_0x4ff0bc(0x20c)]('v'+(_0x2758f0&&_0x449d0d[_0x4ff0bc(0x3c8)+'on']||_0x4ef550),_0x5afa09[_0x4ff0bc(0x153)])+(_0x291364&&_0x1ad6f[_0x4ff0bc(0x698)+_0x4ff0bc(0x7cd)+'ed']||-0x7c*0x31+0x257e*0x1+-0xdc2*0x1),'/')+(_0x10c319&&_0x5ac842[_0x4ff0bc(0x698)+'Total']||0x1b*0xbf+0x1989+-0x2dae)+_0x5afa09[_0x4ff0bc(0x7d7)]+_0x47670b+('\x20\x20mem'+'\x20')+_0x2a9b05+_0x5afa09[_0x4ff0bc(0x60f)],_0x23aa4a);_0x2fb7d1['st'][_0x4ff0bc(0x21b)+'onten'+'t']=_0x9b8bbf;var _0x44c73e=_0x252e68[_0x4ff0bc(0x2ae)];_0x44c73e&&(_0x44c73e['textC'+_0x4ff0bc(0x7a0)+'t']=_0x5afa09[_0x4ff0bc(0x605)](_0x2c3da6,0x1*0x1169+-0x21e2+0x1*0x1079)?_0x5afa09[_0x4ff0bc(0x133)](_0x4ff0bc(0x715)+_0x4ff0bc(0x6aa),_0x2c3da6)+(_0x4894f5?_0x5afa09[_0x4ff0bc(0x144)]+_0x4894f5+'\x20bots':'')+(_0x136ce9&&_0x136ce9['camer'+'a']?_0x5afa09[_0x4ff0bc(0x1ef)](_0x5afa09[_0x4ff0bc(0x55d)],_0x136ce9[_0x4ff0bc(0x73a)+_0x4ff0bc(0x700)]):'\x20\x20cam'+'\x20-'):_0x5afa09['QZBKb'](_0x4ff0bc(0x2a3)+_0x4ff0bc(0x6fc)+_0x4ff0bc(0x26e)+_0x4ff0bc(0x546)+'y?)\x20\x20'+'cam\x20',_0x136ce9&&_0x136ce9['camer'+'a']?_0x136ce9['camer'+'aFrom']:'-'),_0x44c73e[_0x4ff0bc(0x4bb)][_0x4ff0bc(0x232)]=_0x2c3da6>-0x1549+0x2*-0xfbc+0x34c1?_0x4ff0bc(0x667)+'a8':'#8d7a'+'99');}}}catch(_0x3bf5c8){}},!![]);var _0x5a44ca={'on':!![],'span':0x50};function _0x3edb0b(){var _0x4bb993=_0x24c400,_0x32ffda=_0x269165[_0x4bb993(0x402)+_0x4bb993(0x4bd)+'ler'];if(!_0x32ffda||!_0x32ffda['ptr'])return null;var _0x551cb5=_0x10c7ba(_0x32ffda['ptr'],-0x1*0x13bc+-0x4c*0x6+0x1868,-0x219f+0x2*-0x16c+0x247a),_0x32e9a8=_0x10c7ba(_0x32ffda['ptr'],-0x7b*-0x4c+0x67*0x15+0x2a5f*-0x1,0xdb2+-0x30*0x10+-0xaaf*0x1);if(!_0x551cb5)return null;return{'ptr':_0x32ffda[_0x4bb993(0x341)],'feet':_0x551cb5,'eye':_0x32e9a8,'reach':Math[_0x4bb993(0x48a)](_0x551cb5[0x1264+-0x2501*-0x1+-0x3765]*_0x551cb5[-0x1*-0x245+-0x1b1*-0x1+-0x1fb*0x2]+_0xffdfd9['HmxTN'](_0x551cb5[0x1*-0xf5e+-0x46*0x8a+0x351c],_0x551cb5[0x95*0x2f+0x1fcd+-0xe2*0x43])),'pitch':_0xffdfd9['Jzpvq'](_0x11f277,_0x32ffda[_0x4bb993(0x341)]+(0x69*-0x33+-0x1182*0x2+0x395b),_0x4bb993(0x7c8)),'yaw':_0xffdfd9[_0x4bb993(0x284)](_0x11f277,_0x32ffda[_0x4bb993(0x341)]+(0x1*0x1db3+-0x197*0x2+-0x1915),_0x4bb993(0x7c8))};}function _0x961acc(){var _0x4e6204=_0x24c400;if(_0xffdfd9[_0x4e6204(0x556)]!==_0xffdfd9[_0x4e6204(0x59b)]){var _0x2e16da=_0xffdfd9['KzFix'](_0x3edb0b),_0x1a6e94=[],_0x1bf927=_0xac07d8[_0x4e6204(0x2cf)+'nNetw'+'orkSy'+'nc']||{},_0x1c7020=Object['keys'](_0x1bf927);for(var _0x5cf87a=0xd0b+-0x1428+0x71d;_0xffdfd9['hEueA'](_0x5cf87a,_0x1c7020['lengt'+'h'])&&_0x5cf87a<0x250+-0x1db2+0x1b82;_0x5cf87a++){var _0x5a206c=_0x1bf927[_0x1c7020[_0x5cf87a]],_0x4ee369=_0xffdfd9['tAmvl'](_0x10c7ba,_0x5a206c[_0x4e6204(0x341)],0xe9c+0xa6b+-0x18d3,-0x6aa+0x23b5+-0x1d08);if(!_0x4ee369||_0xffdfd9[_0x4e6204(0x164)](_0x4ee369[-0x12b1+-0x1a3*0xc+0x2655],0x1b8b+0x1beb+-0x3776)&&_0x4ee369[-0x507+0x1107*0x1+0xbff*-0x1]===-0x1*0x1885+0x3*-0xc3e+0x3d3f&&_0x4ee369[-0x5bc+0xe8a+-0x8cc]===0x1*-0x241d+-0x92*-0x7+0x201f)continue;var _0x527409={'ptr':_0x5a206c[_0x4e6204(0x341)],'x':_0x4ee369[0xab2+0xad7+-0x1589],'y':_0x4ee369[-0x1b0b*-0x1+0x55*-0x1e+0x1114*-0x1],'z':_0x4ee369[-0x16b3+0x1248+0x46d],'team':_0xffdfd9['wYQXj'](_0x11f277,_0xffdfd9[_0x4e6204(0x768)](_0x5a206c['ptr'],-0x16e2*-0x1+-0x84*-0x38+-0x336a),_0x4e6204(0x64f)),'localFlag':_0x11f277(_0x5a206c[_0x4e6204(0x341)]+(-0x12f*0xa+0x1fd+0xa55),_0xffdfd9[_0x4e6204(0x7c3)])};if(_0x2e16da){var _0x5b971e=_0x4ee369[0x235c+0x662*0x1+-0x29be]-_0x2e16da['feet'][-0x218b+0x1702+-0xa89*-0x1],_0x2c4323=_0x4ee369[-0x205e+0x5e5+-0x1*-0x1a7b]-_0x2e16da[_0x4e6204(0x4a6)][0x29+-0x7*0x2fb+-0x14b6*-0x1];_0x527409['d']=Math[_0x4e6204(0x48a)](_0xffdfd9[_0x4e6204(0x445)](_0x5b971e*_0x5b971e,_0x2c4323*_0x2c4323)),_0x527409[_0x4e6204(0x4ce)+'ng']=_0xffdfd9[_0x4e6204(0x4e8)](Math[_0x4e6204(0x49f)](_0x5b971e,_0x2c4323)*(-0x29*0x57+0x385*0x5+-0x2*0x17b),Math['PI']);}_0x1a6e94[_0x4e6204(0x2ff)](_0x527409);}return{'me':_0x2e16da,'list':_0x1a6e94};}else _0x10a315=_0x2668ee,_0x33b075[_0x4e6204(0x1d5)]=_0x1f9c73,_0x192604['posAt']=_0x3f7e1f[_0x4e6204(0x241)+'cs'][_0x24e2e9]['o'];}var _0x5a0c38=null;function _0x3cec9e(){var _0x4c5738=_0x24c400;if(_0x5a0c38)return _0x5a0c38;try{if(!document['body']||!document[_0x4c5738(0x2b2)][_0x4c5738(0x790)+_0x4c5738(0x4ab)+'d'])return null;var _0x4a0588=document['creat'+_0x4c5738(0x6bf)+_0x4c5738(0x452)](_0xffdfd9[_0x4c5738(0x368)]);_0x4a0588['id']=_0xffdfd9[_0x4c5738(0x6b7)],_0x4a0588['style']['cssTe'+'xt']=_0xffdfd9['NOqER']+(_0x4c5738(0x48b)+'round'+_0x4c5738(0x2ec)+_0x4c5738(0x3b0)+'2,29,'+_0x4c5738(0x751)+_0x4c5738(0x433)+'r:1px'+_0x4c5738(0x71d)+_0x4c5738(0x1de)+_0x4c5738(0x3ae)+_0x4c5738(0x65d)+_0x4c5738(0x1a2)+_0x4c5738(0x7cb)+_0x4c5738(0x43e)+'radiu'+_0x4c5738(0x25b)+'x;')+_0xffdfd9[_0x4c5738(0x220)],_0x4a0588[_0x4c5738(0x4a7)+_0x4c5738(0x365)]=_0xffdfd9['gYYaW']+(_0x4c5738(0x16a)+_0x4c5738(0x53d)+_0x4c5738(0x33d)+_0x4c5738(0x742)+'lg\x22\x20s'+_0x4c5738(0x27d)+_0x4c5738(0x2ee)+_0x4c5738(0x54e)+_0x4c5738(0x39a)+'ter\x22>'+_0x4c5738(0x206)+'>');var _0x31335c={'cv':{'getContext':function(){return null;}},'el':_0x4a0588};document['body'][_0x4c5738(0x790)+_0x4c5738(0x4ab)+'d'](_0x4a0588),_0x5a0c38={'el':_0x4a0588,'cv':_0x4a0588['query'+_0x4c5738(0x2bf)+'tor'](_0xffdfd9[_0x4c5738(0x1ed)]),'lg':_0x4a0588[_0x4c5738(0x326)+_0x4c5738(0x2bf)+_0x4c5738(0x733)]('#saku'+_0x4c5738(0x665)+'p-lg')};if(!_0x5a0c38['cv']||!_0x5a0c38['cv'][_0x4c5738(0x4cd)+_0x4c5738(0x12d)])_0x5a0c38=_0x31335c;return _0x5a0c38;}catch(_0x2386e8){if('NdFMw'!=='iPAkr')return null;else{var _0x458f66=_0xffdfd9[_0x4c5738(0x453)](_0x21860a,_0x50ed16[_0x4c5738(0x63f)][_0x4c5738(0x77c)+'h'],0x787*-0x4+0x402+0x1a2a);_0x4582aa['healt'+'h']=_0xffdfd9['tAmvl'](_0x4a57e7,_0x458f66,_0x4c5738(0x705)+_0x4c5738(0x1c9)+'pt',_0x4c5738(0x3c1));}}}function _0x5b4039(){var _0x50615d=_0x24c400,_0x288b52={'jqjkC':function(_0x2791a9,_0x245fb8){return _0x2791a9+_0x245fb8;},'eoQtE':_0x50615d(0x232)+':','bWEtB':_0xffdfd9[_0x50615d(0x172)],'jTgiI':function(_0x4ecade,_0xd89e79){return _0xffdfd9['hFSzJ'](_0x4ecade,_0xd89e79);},'mwGqR':function(_0x1b0032,_0x71abdd){return _0x1b0032+_0x71abdd;},'yVtId':function(_0x4f92a8,_0x4d1eed,_0x14a511){return _0xffdfd9['saPLB'](_0x4f92a8,_0x4d1eed,_0x14a511);},'eyOco':_0xffdfd9[_0x50615d(0x18d)]},_0x101135=_0xffdfd9[_0x50615d(0x632)](_0x3cec9e);if(!_0x101135||!_0x101135['cv'])return;try{var _0x594ebb=_0x101135['cv'][_0x50615d(0x4cd)+_0x50615d(0x12d)]&&_0x101135['cv']['getCo'+'ntext']('2d');if(!_0x594ebb)return;var _0x364a9b=_0x101135['cv']['width'],_0x415ec1=_0x364a9b/(0x2*-0x3f3+0x1*-0x1817+0x1fff),_0x398352=_0xffdfd9['Eolhz'](_0x961acc),_0x31c15c=_0x398352['me'];_0x594ebb['clear'+_0x50615d(0x1d3)](-0x310*0x8+0x2e*-0x5b+0x28da,-0xcb*-0x1a+-0x1fa9+0xb0b*0x1,_0x364a9b,_0x364a9b),_0x594ebb['strok'+'eStyl'+'e']='rgba('+_0x50615d(0x1cf)+'43,17'+_0x50615d(0x156)+')',_0x594ebb[_0x50615d(0x72b)+_0x50615d(0x371)]=0xdf*-0x23+-0x164e*0x1+0x1b4*0x1f;for(var _0x434785=-0x2106+-0x2025+-0x61*-0xac;_0x434785<=-0x2e*0xc6+-0x4*0x8bd+-0x468b*-0x1;_0x434785++){_0x594ebb['begin'+_0x50615d(0x60d)](),_0x594ebb[_0x50615d(0x68a)](_0x415ec1,_0x415ec1,_0xffdfd9['mcGro'](_0xffdfd9[_0x50615d(0x56b)](_0x415ec1,-0x1*0x9e3+0x94*0xf+0x13b),_0x434785)/(-0x808+0x130*-0x1c+0x1f*0x155),-0x233*0xa+0x25fa+-0x1f*0x84,_0xffdfd9[_0x50615d(0x32d)](Math['PI'],0x12*-0x13a+-0x6*-0x30a+0x3da)),_0x594ebb[_0x50615d(0x417)+'e']();}_0x594ebb['begin'+'Path'](),_0x594ebb['moveT'+'o'](-0x7*-0x30e+0x46d*0x4+-0x2712,_0x415ec1),_0x594ebb[_0x50615d(0x57f)+'o'](_0x364a9b-(-0x47*0x42+-0x1*-0x69c+0xbb6),_0x415ec1),_0x594ebb[_0x50615d(0x2e7)+'o'](_0x415ec1,0x4e*0x49+-0xe44+-0x7f6),_0x594ebb[_0x50615d(0x57f)+'o'](_0x415ec1,_0x364a9b-(0x2113+-0x779*0x2+-0x121d)),_0x594ebb['strok'+'e']();if(!_0x31c15c){if(_0x50615d(0x5ae)===_0xffdfd9['WqABa']){if(_0x101135['lg'])_0x101135['lg']['textC'+_0x50615d(0x7a0)+'t']='no\x20lo'+'cal\x20p'+_0x50615d(0x244)+'\x20yet';return;}else{var _0x39bf5c=_0x39cb2d['query'+'Selec'+_0x50615d(0x355)+'l']('ifram'+'e');for(var _0x1e5134=0xf8f+0xd*-0x10d+-0x1e6;_0x1e5134<_0x39bf5c[_0x50615d(0x4ed)+'h'];_0x1e5134++){try{if(_0x39bf5c[_0x1e5134]['conte'+_0x50615d(0x24a)+'dow'])_0x39bf5c[_0x1e5134][_0x50615d(0x613)+_0x50615d(0x24a)+'dow']['postM'+_0x50615d(0x1b0)+'e'](_0x3f4d0e,'*');}catch(_0x59cdeb){}}}}var _0x2022c3=(_0x415ec1-(0xe05*-0x1+-0xe9f+-0xe55*-0x2))/_0x5a44ca[_0x50615d(0x654)],_0x48a119=null,_0x47f694=_0xac07d8[_0x50615d(0x2cf)+'nNetw'+'orkSy'+'nc']||{},_0x21afb3=Object[_0x50615d(0x123)](_0x47f694);for(var _0x2f0ec1=-0x2354+0x2*-0x8fe+0x3550;_0x2f0ec1<_0x21afb3[_0x50615d(0x4ed)+'h'];_0x2f0ec1++){var _0xef1b2e=_0x10c7ba(_0x47f694[_0x21afb3[_0x2f0ec1]]['ptr'],-0xbe6*-0x1+0x277*-0xb+-0x1*-0xf6b,0x11ba*-0x1+0x1fd7*-0x1+0x26*0x14e);if(_0xef1b2e&&_0xef1b2e[-0x14d7+-0x3*-0x98f+-0x3eb*0x2]===0x70d*-0x2+-0xa88+0x18a2&&_0xef1b2e[-0x2405+-0x119b+-0x1*-0x35a1]===-0x17d1+0x1f7c+-0x7ab*0x1&&_0xef1b2e[0x254f*-0x1+-0xc0a+0x315b]===-0x2b*-0x1+-0x25c9+-0x786*-0x5){_0x48a119=_0xffdfd9[_0x50615d(0x533)](_0x11f277,_0xffdfd9['QFDUy'](_0x47f694[_0x21afb3[_0x2f0ec1]]['ptr'],0x2280+0x1fde+-0x272*0x1b),_0xffdfd9[_0x50615d(0x7c3)]);break;}}var _0x336a4d=0x1*0x346+-0x299+0xad*-0x1;for(var _0x5ee5f1=0x1*0x1d9a+-0x1177+-0xc23;_0xffdfd9[_0x50615d(0x544)](_0x5ee5f1,_0x398352[_0x50615d(0x17e)]['lengt'+'h']);_0x5ee5f1++){var _0x3490e2=_0x398352['list'][_0x5ee5f1],_0x3ae4cb=_0xffdfd9[_0x50615d(0x7ab)](_0x3490e2['x'],_0x31c15c['feet'][-0x223d*0x1+0xa32+0x1*0x180b])*_0x2022c3,_0x19ad53=_0xffdfd9[_0x50615d(0x711)](_0x3490e2['z'],_0x31c15c[_0x50615d(0x4a6)][-0x7+0x10c*0x11+-0x11c3])*_0x2022c3,_0x11e619=Math['sqrt'](_0xffdfd9[_0x50615d(0x65c)](_0x3ae4cb*_0x3ae4cb,_0x19ad53*_0x19ad53)),_0x23c34b=_0x415ec1,_0x54082a=_0x415ec1;if(_0x11e619>_0xffdfd9['kCkUR'](_0x415ec1,-0xf0c+-0x1*0xf53+0x1e65)){if(_0xffdfd9['fkJEM'](_0x50615d(0x5af),_0xffdfd9['xysLT']))_0x23c34b=_0x415ec1+_0x3ae4cb/_0x11e619*(_0x415ec1-(0xbf*0x7+-0x2131+-0x1bfe*-0x1)),_0x54082a=_0x415ec1+_0x19ad53/_0x11e619*(_0x415ec1-(0x1cc2+0x1f97*-0x1+0x2db));else try{if(_0x154c84[_0xb9df60][_0x50615d(0x613)+_0x50615d(0x24a)+_0x50615d(0x6e3)])_0x2c284d[_0x567042]['conte'+_0x50615d(0x24a)+'dow']['postM'+'essag'+'e'](_0x44da77,'*');}catch(_0x20dde6){}}else{if(_0x50615d(0x6ea)==='zuTXg')_0x23c34b=_0xffdfd9[_0x50615d(0x230)](_0x415ec1,_0x3ae4cb),_0x54082a=_0x415ec1+_0x19ad53;else{_0x37822e[_0x50615d(0x17b)](_0x50615d(0x22d)+_0x50615d(0x40a)+_0x50615d(0x3bc)+'lWarz'+'\x20repo'+'rt',_0x288b52['jqjkC'](_0x288b52[_0x50615d(0x229)],_0x47b711)+_0x288b52[_0x50615d(0x625)],_0xec4fa2),_0x3bb87a['log'](_0x288b52[_0x50615d(0x5e9)](_0x288b52['jTgiI'](_0x288b52[_0x50615d(0x31b)](_0x49c1d0,'\x0a'),_0xc7f01f[_0x50615d(0x1e8)+_0x50615d(0x526)](_0x15d925,null,-0x1b5c+0x668+0x14f5))+'\x0a',_0x535307));try{_0x40cea7(_0x4dcf0f);}catch(_0x1bbfc8){}_0x288b52[_0x50615d(0x227)](_0x415904,_0x288b52['eyOco'],{'report':_0x2858a2});}}var _0x56fa60=_0x48a119!==null&&_0x3490e2[_0x50615d(0x200)]===_0x48a119;_0x594ebb[_0x50615d(0x1a1)+'tyle']=_0x56fa60?_0xffdfd9[_0x50615d(0x22a)]:_0x50615d(0x5d4)+'74',_0x594ebb['begin'+_0x50615d(0x60d)](),_0x594ebb[_0x50615d(0x68a)](_0x23c34b,_0x54082a,_0x56fa60?0x18bc*0x1+-0xe7b+-0xa3f:-0x1*-0x10bd+0x7*0x3a5+0x3d7*-0xb+0.20000000000000018,-0x19*-0x9d+0xe8*-0x7+-0x3b*0x27,_0xffdfd9[_0x50615d(0x578)](Math['PI'],0x4df+0x1202+0x5*-0x493)),_0x594ebb['fill'](),_0x336a4d++;}_0x594ebb['fillS'+_0x50615d(0x217)]=_0xffdfd9['mkNyZ'],_0x594ebb[_0x50615d(0x3f4)+'Path'](),_0x594ebb['arc'](_0x415ec1,_0x415ec1,-0x2301+0x1f3*-0xb+0x95*0x61,0x2481+0x13b6+-0x3837,_0xffdfd9[_0x50615d(0x32d)](Math['PI'],0x5d7+-0x2436+-0x65*-0x4d)),_0x594ebb['fill'](),_0x101135['lg']&&(_0x101135['lg'][_0x50615d(0x21b)+_0x50615d(0x7a0)+'t']=_0x50615d(0x269)+_0x336a4d+_0xffdfd9[_0x50615d(0x1c5)]+Math['round'](_0x5a44ca['span'])+'m'+(_0x48a119!==null?_0xffdfd9['ltSdH']+_0x48a119:''));}catch(_0x1e6658){}}function _0x448ab9(){if(!_0x5a44ca['on']){setTimeout(_0x448ab9,0x573+0x18b7+-0x17*0x13a);return;}_0x5b4039(),setTimeout(_0x448ab9,0x12b4+-0x3e9*0x2+-0xab0);}function _0x5d1f3b(){var _0x3c2c6a=_0x24c400,_0x3441d4={'NMakm':function(_0x12bf13,_0x5667c8){var _0x240b28=_0x49be;return _0xffdfd9[_0x240b28(0x310)](_0x12bf13,_0x5667c8);},'iQYcV':'7|2|3'+'|1|0|'+_0x3c2c6a(0x29c),'KjVPu':function(_0x2b9a08,_0x3c807a){return _0xffdfd9['qheIK'](_0x2b9a08,_0x3c807a);},'ZonoR':function(_0x59e8fc,_0x29125b){return _0x59e8fc===_0x29125b;},'Vywtr':'undef'+'ined'};if(_0xffdfd9[_0x3c2c6a(0x45f)](_0xffdfd9['rVoAT'],_0xffdfd9['rVoAT'])){var _0x2c5a3b=window['Unity'+'WebMo'+_0x3c2c6a(0x336)]&&window[_0x3c2c6a(0x5fd)+'WebMo'+_0x3c2c6a(0x336)][_0x3c2c6a(0x60b)+'me']||null,_0x25a214=_0x2c5a3b&&_0x2c5a3b[_0x3c2c6a(0x1d9)+_0x3c2c6a(0x157)+_0x3c2c6a(0x29d)],_0x35ba30=_0x25a214&&_0x25a214['scrip'+'tData'],_0x2dca70={},_0x411da1=[];for(var _0x22c7bd in _0x269165){_0x2dca70[_0x22c7bd]=_0xffdfd9['jysRa']('0x',_0x269165[_0x22c7bd][_0x3c2c6a(0x341)][_0x3c2c6a(0x633)+'ing'](0x1a*-0x123+0x1578+0x826));if(_0x269165[_0x22c7bd][_0x3c2c6a(0x52e)+_0x3c2c6a(0x24d)])_0x411da1[_0x3c2c6a(0x2ff)](_0x22c7bd);}var _0x3effd4={};for(var _0x35cc62 in _0x269165)_0x3effd4[_0x35cc62]=_0x3d86ad(_0x269165[_0x35cc62][_0x3c2c6a(0x341)]);var _0x3da062={},_0x5b23e7=null;try{_0x3da062=_0x557ac5();}catch(_0xac3931){_0x5b23e7=_0xffdfd9['YlEsf'](String,_0xac3931&&_0xac3931['messa'+'ge']||_0xac3931);}var _0x377196={'version':_0x3615c3,'when':new Date()['toISO'+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x401b08,'frame':location[_0x3c2c6a(0x474)]['slice'](-0x1*-0x967+-0x23*0x73+0x652,0xed9+-0x2ef*-0x9+-0x28c8),'host':_0x566c38,'frameRole':_0x29744c,'uwmk':!!_0x2c5a3b,'il2CppContext':!!_0x25a214,'typeCount':_0x35ba30?Object['keys'](_0x35ba30)[_0x3c2c6a(0x4ed)+'h']:null,'arm':_0x23481a,'assemblies':_0x1ebabd,'hooksTotal':_0x18eac[_0x3c2c6a(0x4ed)+'h'],'hooksApplied':_0x219d25(),'hooksResolved':_0xffdfd9[_0x3c2c6a(0x618)](_0x2dad84),'hooksRegisteredAtArm':_0x23481a[_0x3c2c6a(0x698)+'Regis'+_0x3c2c6a(0x4d8)]||0x925+-0x1bbd+0x1298,'hookErrors':_0x4b7edf[_0x3c2c6a(0x675)](0x22*0x4f+-0x10fb+-0x97*-0xb,0x1810+-0x176b+-0x9d),'instances':_0x2dca70,'classNames':_0x3effd4,'instancesReplaced':_0x411da1,'hookFireProof':_0x30995f,'survey':_0x3da062,'actkKeys':_0x2dbe96,'surveyRows':Object['keys'](_0x3da062)[_0x3c2c6a(0x1e9)+'e'](function(_0x15f2b9,_0x4a56a8){var _0x3b0be1=_0x3c2c6a;return _0x3441d4[_0x3b0be1(0x70d)](_0x15f2b9,_0x3da062[_0x4a56a8][_0x3b0be1(0x4ed)+'h']);},0xeec+0x1493+-0x237f),'reads':{'ok':_0x6647fd['ok'],'failed':_0x6647fd[_0x3c2c6a(0x37e)+'d'],'lastError':_0x6647fd[_0x3c2c6a(0x289)+_0x3c2c6a(0x483)],'source':_0x6647fd[_0x3c2c6a(0x17f)+'e']},'identity':_0xffdfd9[_0x3c2c6a(0x4bf)](_0x5b4218),'globals':_0xffdfd9['tgNqj'](_0xb426cc),'wasmMemory':{'captured':!!_0x87b564,'atMs':_0xf1652c,'bytes':(function(){var _0x31c539=_0x3c2c6a;try{return _0x87b564&&_0x87b564[_0x31c539(0x387)+'r']?_0x87b564[_0x31c539(0x387)+'r'][_0x31c539(0x6dc)+'ength']:0x5*0x570+-0x87e+-0x12b2;}catch(_0x15e655){return _0xffdfd9[_0x31c539(0x1ab)](_0x31c539(0x4b3),_0x31c539(0x4b3))?_0xe1fc08[_0x31c539(0x3df)+'em'](_0x2925f2)==='1':0xf0b+0x2b6*0xd+-0x3249;}}()),'exportKeys':_0x46e726},'diff':_0xa66cb9[_0x3c2c6a(0x675)](0x1358+0x1302+-0x265a,-0x1237*0x1+-0x1b73+0x2dd2),'speed':{'on':_0x22454f['on'],'factor':_0x22454f['facto'+'r'],'writes':_0x419d24,'scaled':_0x558c9e[_0x3c2c6a(0x675)](-0x21*0x27+0x12d4+-0xdcd,-0x7*-0x561+-0xa62+-0x1b35),'skipped':_0x2c66bc['slice'](0x145c+-0x1be8+0x78c,-0x1727+0x1*-0x1b73+0x32aa)},'esp':_0x2815a1(),'local':(function(){var _0x4fe985=_0x3c2c6a,_0x1d0032=_0x3edb0b();if(!_0x1d0032)return null;return{'ptr':'0x'+_0x1d0032['ptr'][_0x4fe985(0x633)+'ing'](0xf67+0x1616+0x8f*-0x43),'feet':_0x1d0032['feet'],'eye':_0x1d0032[_0x4fe985(0x420)],'pitch':_0x1d0032['pitch'],'yaw':_0x1d0032['yaw'],'reach':_0x1d0032['reach']};}()),'uwmkLog':_0x49128b[_0x3c2c6a(0x675)](0x120a*0x1+0x1*-0x21bd+-0xfb3*-0x1,-0x2*-0x111f+0x577+-0x27a1),'warnings':[]};if(_0x5b23e7)_0x377196[_0x3c2c6a(0x14a)+'ngs'][_0x3c2c6a(0x2ff)](_0xffdfd9[_0x3c2c6a(0x68d)]+_0x5b23e7);if(_0x23481a[_0x3c2c6a(0x388)])_0x377196['warni'+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0xffdfd9['BRgUN'](_0xffdfd9[_0x3c2c6a(0x72a)],_0x23481a['error']));if(_0x377196['surve'+_0x3c2c6a(0x47d)]===0x1*0x1d92+0x76a+-0x24fc*0x1&&Object[_0x3c2c6a(0x123)](_0x377196[_0x3c2c6a(0x6b9)+_0x3c2c6a(0x54a)])['lengt'+'h']>-0x72*0x1+-0xb85+0xbf7){if(_0xffdfd9['BwIgH']!=='jYSTQ')_0x377196['warni'+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0xffdfd9['cewNQ'](_0x3c2c6a(0x7b6)+'red\x20'+Object['keys'](_0x377196['insta'+_0x3c2c6a(0x54a)])[_0x3c2c6a(0x4ed)+'h'],'\x20obje'+'ct(s)'+_0x3c2c6a(0x5d8)+_0x3c2c6a(0x2fc)+_0x3c2c6a(0x196)+'lds.\x20')+(_0x6647fd[_0x3c2c6a(0x289)+_0x3c2c6a(0x483)]?_0xffdfd9['FAQLl']+_0x6647fd['lastE'+_0x3c2c6a(0x483)]:_0x3c2c6a(0x473)+_0x3c2c6a(0x238)+_0x3c2c6a(0x36f)+_0x3c2c6a(0x2e3)+'very\x20'+'offse'+_0x3c2c6a(0x770)+'\x20skip'+_0x3c2c6a(0x557)+_0x3c2c6a(0x71f)+'e.'));else{_0x366589['preve'+'ntDef'+_0x3c2c6a(0x472)](),_0xffdfd9[_0x3c2c6a(0x453)](_0x2d5159,_0x1e727d['on'],_0x211cf5['facto'+'r']-(-0x156f+0x1*-0x8f5+0x1e64+0.5));return;}}if(_0x377196[_0x3c2c6a(0x40d)+_0x3c2c6a(0x735)]&&_0xffdfd9[_0x3c2c6a(0x5fb)](_0x377196['ident'+_0x3c2c6a(0x735)][_0x3c2c6a(0x15d)+'tches'],![])){if(_0xffdfd9[_0x3c2c6a(0x603)](_0x3c2c6a(0x26a),_0xffdfd9[_0x3c2c6a(0x1c7)])){var _0xf66f73=_0x3441d4['iQYcV'][_0x3c2c6a(0x2fe)]('|'),_0x2c222b=0x3*0x305+0x61*0x27+0x7f2*-0x3;while(!![]){switch(_0xf66f73[_0x2c222b++]){case'0':_0x2c5c6e['gameS'+'ource']=_0x4aba86[_0x3c2c6a(0x17f)+'e'];continue;case'1':var _0x569685=_0x56d4aa();continue;case'2':var _0x2c5c6e={};continue;case'3':for(var _0x1dce8a=0x1695+0x1639*0x1+-0x2cce;_0x3441d4[_0x3c2c6a(0x543)](_0x1dce8a,_0x84ef48['lengt'+'h']);_0x1dce8a++){var _0x116037=_0x84ef48[_0x1dce8a],_0x34fb6e=typeof _0x13a4a2[_0x116037];_0x2c5c6e[_0x116037]=_0x3441d4[_0x3c2c6a(0x6c1)](_0x34fb6e,_0x3c2c6a(0x37f)+_0x3c2c6a(0x299))?_0x3441d4['Vywtr']:_0x34fb6e;}continue;case'4':try{_0x2c5c6e[_0x3c2c6a(0x245)+_0x3c2c6a(0x3a9)]=!!(_0x569685&&_0x569685[_0x3c2c6a(0x2c8)+'e']),_0x2c5c6e[_0x3c2c6a(0x538)+'8']=!!(_0x569685&&_0x569685['Modul'+'e']&&_0x569685[_0x3c2c6a(0x2c8)+'e'][_0x3c2c6a(0x43f)+'8']),_0x2c5c6e['heapB'+'ytes']=_0x2c5c6e['heapU'+'8']?_0x569685['Modul'+'e']['HEAPU'+'8']['lengt'+'h']:-0x678+0x1853+-0x28d*0x7;}catch(_0x2f0c3d){_0x2c5c6e['hasMo'+'dule']=![],_0x2c5c6e[_0x3c2c6a(0x538)+'8']=![],_0x2c5c6e[_0x3c2c6a(0x6c2)+_0x3c2c6a(0x6f1)]=0x1aa7*-0x1+0x254a+-0xaa3;}continue;case'5':return _0x2c5c6e;case'6':_0x2c5c6e[_0x3c2c6a(0x3ec)+_0x3c2c6a(0x446)+'er']=typeof _0x4407d8;continue;case'7':var _0x84ef48=[_0x3c2c6a(0x5d3)+_0x3c2c6a(0x7e1)+_0x3c2c6a(0x141),_0x3c2c6a(0x5d3)+_0x3c2c6a(0x4ec),'game',_0x3c2c6a(0x5d3)+_0x3c2c6a(0x7e1)+_0x3c2c6a(0x6c5)+_0x3c2c6a(0x79b)];continue;}break;}}else _0x377196['warni'+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0xffdfd9['iRFSY'](_0xffdfd9[_0x3c2c6a(0x769)](_0xffdfd9['ZVNrd']+('repla'+_0x3c2c6a(0x69e)+_0x3c2c6a(0x6a9)+_0x3c2c6a(0x7df)+'ent\x20i'+_0x3c2c6a(0x36e)+_0x3c2c6a(0x6f6)+_0x3c2c6a(0x719)+_0x3c2c6a(0x638)+'sking'+_0x3c2c6a(0x3fd)+_0x3c2c6a(0x786)+_0x3c2c6a(0x2e0)+_0x3c2c6a(0x616)+'r\x20'),_0x3c2c6a(0x3cf)+_0x3c2c6a(0x63d)+_0x3c2c6a(0x37c)+_0x3c2c6a(0x53e)+_0x3c2c6a(0x67f)+_0x3c2c6a(0x51c)+_0x3c2c6a(0x39c)+_0x3c2c6a(0x573)+_0x3c2c6a(0x4b5)+'.\x20Dis'+_0x3c2c6a(0x44e)+_0x3c2c6a(0x1ce)+'\x20othe'+'r\x20'),_0x3c2c6a(0x6f8)+'a/UWM'+'K\x20scr'+_0x3c2c6a(0x192)+_0x3c2c6a(0x28a)+'permo'+_0x3c2c6a(0x6fb)+_0x3c2c6a(0x581)+'ard-r'+_0x3c2c6a(0x4d6)+'.'));}_0x377196['ident'+_0x3c2c6a(0x735)]&&_0x377196['ident'+_0x3c2c6a(0x735)][_0x3c2c6a(0x2cc)+_0x3c2c6a(0x404)+'imeIs'+_0x3c2c6a(0x64c)+'ted']===![]&&_0x377196[_0x3c2c6a(0x14a)+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0xffdfd9[_0x3c2c6a(0x30d)]+('again'+'st\x20a\x20'+_0x3c2c6a(0x340)+_0x3c2c6a(0x74e)+'Runti'+_0x3c2c6a(0x582)+'stanc'+'e\x20tha'+_0x3c2c6a(0x4b0)+_0x3c2c6a(0x737)+'al\x20no'+_0x3c2c6a(0x468)+'oses.'));if(_0x377196[_0x3c2c6a(0x40e)]&&_0x377196['esp']['note'])_0x377196['warni'+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0x3c2c6a(0x261)+_0x377196['esp'][_0x3c2c6a(0x504)]);if(_0x377196[_0x3c2c6a(0x56d)+'ls']&&!_0x377196[_0x3c2c6a(0x56d)+'ls'][_0x3c2c6a(0x538)+'8']){var _0x4e3b5d='';_0x377196[_0x3c2c6a(0x6ac)+'irePr'+_0x3c2c6a(0x5ce)]&&(_0x4e3b5d=_0xffdfd9[_0x3c2c6a(0x3d3)](_0xffdfd9[_0x3c2c6a(0x5ad)](_0xffdfd9[_0x3c2c6a(0x448)]+_0x377196['hookF'+_0x3c2c6a(0x5be)+'oof'][_0x3c2c6a(0x131)],_0xffdfd9['mwDFY'])+_0x377196[_0x3c2c6a(0x6ac)+_0x3c2c6a(0x5be)+_0x3c2c6a(0x5ce)]['origi'+'nalFu'+'nc']+(_0x3c2c6a(0x272)+'game\x20'+'resol'+'ved=')+_0x377196['hookF'+'irePr'+'oof']['resol'+_0x3c2c6a(0x297)+_0x3c2c6a(0x2a4)+'re'],_0xffdfd9[_0x3c2c6a(0x2df)])+(_0x377196[_0x3c2c6a(0x6ac)+_0x3c2c6a(0x5be)+_0x3c2c6a(0x5ce)][_0x3c2c6a(0x512)+_0x3c2c6a(0x4f7)+'AtFir'+'e']||_0xffdfd9[_0x3c2c6a(0x4af)])+(_0x3c2c6a(0x1bd)+_0x3c2c6a(0x3fd)+'refer'+'ence\x20'+'exist'+_0x3c2c6a(0x753)+'en\x20an'+_0x3c2c6a(0x74a)+'not\x20r'+'eacha'+_0x3c2c6a(0x7b1)+_0x3c2c6a(0x179))),_0x377196[_0x3c2c6a(0x14a)+_0x3c2c6a(0x7de)]['push'](_0xffdfd9[_0x3c2c6a(0x6ef)](_0xffdfd9[_0x3c2c6a(0x4ff)]('Unity'+'\x20inst'+'ance\x20'+_0x3c2c6a(0x74f)+'esolv'+_0x3c2c6a(0x569)+_0x3c2c6a(0x741)+_0x3c2c6a(0x18f)+'\x20'+(_0x377196[_0x3c2c6a(0x56d)+'ls']['gameS'+_0x3c2c6a(0x4f7)]||_0xffdfd9[_0x3c2c6a(0x4af)]),_0xffdfd9['ESlKy'])+(_0x3c2c6a(0x68c)+'reads'+_0x3c2c6a(0x64d)+_0x3c2c6a(0x4eb)+'ked\x20u'+_0x3c2c6a(0x403)+'a\x20gam'+_0x3c2c6a(0x3a7)+_0x3c2c6a(0x3b3)+'ith\x20M'+_0x3c2c6a(0x20d)+'.HEAP'+'U8\x20is'+_0x3c2c6a(0x36d)+'hable'+'.'),_0x4e3b5d));}(_0x377196[_0x3c2c6a(0x56d)+'ls']&&!_0x377196['globa'+'ls'][_0x3c2c6a(0x3ec)+'Wrapp'+'er']||_0x377196['globa'+'ls']['value'+'Wrapp'+'er']==='undef'+_0x3c2c6a(0x299))&&_0x377196[_0x3c2c6a(0x14a)+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0x3c2c6a(0x683)+_0x3c2c6a(0x590)+'tyWeb'+'Modki'+_0x3c2c6a(0x1c8)+_0x3c2c6a(0x279)+'pper\x20'+_0x3c2c6a(0x3db)+_0x3c2c6a(0x748)+_0x3c2c6a(0x699)+_0x3c2c6a(0x171)+'\x20is\x20r'+_0x3c2c6a(0x7bf)+'g\x20bli'+'nd.');if(_0xffdfd9['UxKsM'](_0x377196[_0x3c2c6a(0x698)+'Total'],-0x1c02+0x24da+-0x8d8*0x1)&&_0x377196['hooks'+_0x3c2c6a(0x7cd)+'ed']===-0xe*0x1a3+-0x18a*0x9+0xd*0x2d4&&_0x35ba30){if(_0x377196[_0x3c2c6a(0x698)+_0x3c2c6a(0x3d1)+_0x3c2c6a(0x696)]===0x1d9*-0x12+0xe7d+-0x1f*-0x9b){if(_0x3c2c6a(0x4c9)!==_0x3c2c6a(0x4c9))return _0x192851['sourc'+'e']='windo'+'w\x20glo'+_0x3c2c6a(0x56e),_0x2cd521;else _0x377196['warni'+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)](_0xffdfd9[_0x3c2c6a(0x518)](_0xffdfd9[_0x3c2c6a(0x350)]+_0x377196['hooks'+_0x3c2c6a(0x5a8)],_0xffdfd9['sXZbr'])+_0xffdfd9[_0x3c2c6a(0x58c)]+_0xffdfd9[_0x3c2c6a(0x745)]+(_0x3c2c6a(0x703)+_0x3c2c6a(0x4d8)+'\x20')+_0x377196['hooks'+_0x3c2c6a(0x703)+_0x3c2c6a(0x4d8)+_0x3c2c6a(0x286)]+_0xffdfd9[_0x3c2c6a(0x789)]);}else _0x377196[_0x3c2c6a(0x14a)+_0x3c2c6a(0x7de)]['push'](_0xffdfd9['BJyzL'](_0xffdfd9[_0x3c2c6a(0x418)]('UWMK\x20'+_0x3c2c6a(0x55e)+_0x3c2c6a(0x1e1)+_0x377196['hooks'+_0x3c2c6a(0x3d1)+_0x3c2c6a(0x696)]+_0xffdfd9['cvSjH'],_0x377196[_0x3c2c6a(0x698)+_0x3c2c6a(0x5a8)]),_0xffdfd9[_0x3c2c6a(0x2eb)])+('(this'+_0x3c2c6a(0x187)+_0x3c2c6a(0x547)+_0x3c2c6a(0x4f6)+_0x3c2c6a(0x5b3)+_0x3c2c6a(0x202)+_0x3c2c6a(0x730)+_0x3c2c6a(0x3c5)+_0x3c2c6a(0x3a5)+'is\x20bu'+_0x3c2c6a(0x782)));}return _0x377196['hooks'+_0x3c2c6a(0x7cd)+'ed']>0x17e6+0x60f*0x1+-0x1*0x1df5&&!_0x377196[_0x3c2c6a(0x6b9)+'nces']['FPSco'+'ntrol'+'ler']&&_0x377196['warni'+'ngs'][_0x3c2c6a(0x2ff)](_0xffdfd9[_0x3c2c6a(0x329)]+(_0x3c2c6a(0x4a5)+'r\x20you'+_0x3c2c6a(0x672)+_0x3c2c6a(0x515)+_0x3c2c6a(0x7ba)+'ound,'+_0x3c2c6a(0x240)+_0x3c2c6a(0x591)+_0x3c2c6a(0x3a0)+_0x3c2c6a(0x35d)+_0x3c2c6a(0x73e)+'ong\x20o'+_0x3c2c6a(0x5d9)+'ad.')),_0x377196[_0x3c2c6a(0x6b9)+'ncesR'+_0x3c2c6a(0x508)+'ed'][_0x3c2c6a(0x4ed)+'h']&&_0x377196[_0x3c2c6a(0x14a)+_0x3c2c6a(0x7de)][_0x3c2c6a(0x2ff)]('rebui'+'lt\x20si'+_0x3c2c6a(0x706)+_0x3c2c6a(0x6c0)+_0x3c2c6a(0x7b6)+_0x3c2c6a(0x656)+_0x3c2c6a(0x401)+_0x3c2c6a(0x509)+_0x377196[_0x3c2c6a(0x6b9)+'ncesR'+_0x3c2c6a(0x508)+'ed'][_0x3c2c6a(0x50a)](',\x20')),_0x377196;}else return _0x3a01fc['faile'+'d']++,_0x506950['lastE'+_0x3c2c6a(0x483)]=_0x4d2da7['lastE'+'rror']||'no\x20HE'+'APU8\x20'+'-\x20Uni'+_0x3c2c6a(0x19c)+'stanc'+_0x3c2c6a(0x6e9)+'\x20reac'+_0x3c2c6a(0x7c4)+'\x20via\x20'+'Runti'+'me.re'+'solve'+'Game('+')\x20or\x20'+_0x3c2c6a(0x500)+'indow'+_0x3c2c6a(0x737)+'al',_0x287cbc;}function _0x2356cf(_0x5dac0e){var _0x32436f=_0x24c400;console['log'](_0x32436f(0x22d)+_0x32436f(0x40a)+_0x32436f(0x3bc)+_0x32436f(0x4a9)+'\x20repo'+'rt',_0xffdfd9[_0x32436f(0x395)](_0xffdfd9[_0x32436f(0x7b0)],_0x5ad662)+_0xffdfd9['gxGNS'],_0x5dac0e),console[_0x32436f(0x17b)](_0xffdfd9[_0x32436f(0x4f3)](_0xe7b176+'\x0a'+JSON['strin'+_0x32436f(0x526)](_0x5dac0e,null,-0x12b*-0xd+-0x290*-0x4+-0x196e),'\x0a')+_0x5e6d96);try{_0xffdfd9[_0x32436f(0x499)](_0x4ec1c3,_0x5dac0e);}catch(_0xc7e98a){}_0x5c3bac(_0xffdfd9[_0x32436f(0x18d)],{'report':_0x5dac0e});}function _0x3d0b85(){var _0x17b143=_0x24c400,_0x34c002={'kgAyj':function(_0xfca4e){return _0xfca4e();},'oZvEu':'4|2|7'+_0x17b143(0x413)+'8|6|3'+'|0','curzg':function(_0xd4adf,_0x16b6a0){var _0x5c65ce=_0x17b143;return _0xffdfd9[_0x5c65ce(0x3c3)](_0xd4adf,_0x16b6a0);},'hySNW':_0x17b143(0x715)+'RS\x20','sqnhr':function(_0x405fb1,_0x13d63a){return _0x405fb1+_0x13d63a;},'EPtHV':_0xffdfd9[_0x17b143(0x3b7)],'nUFVT':function(_0x369ccf,_0x114bb7){return _0x369ccf+_0x114bb7;},'dCrtt':'no\x20en'+'emies'+_0x17b143(0x26e)+_0x17b143(0x546)+'y?)\x20\x20'+'cam\x20','WybGa':_0xffdfd9[_0x17b143(0x4cc)],'eTWEc':function(_0xeed9e,_0x47e440){var _0x3a775e=_0x17b143;return _0xffdfd9[_0x3a775e(0x621)](_0xeed9e,_0x47e440);},'UAvqc':_0xffdfd9[_0x17b143(0x6f7)],'EJsCl':function(_0x250991,_0x322b91){return _0x250991+_0x322b91;},'Uhwim':function(_0x129383,_0x345118){return _0x129383+_0x345118;},'NNLis':function(_0x3138c7,_0x4d93ff){return _0x3138c7+_0x4d93ff;},'jcuej':'\x20\x20hoo'+'ks\x20','ADDgO':_0xffdfd9['VYhcg'],'OodUG':_0x17b143(0x57b)+'\x20','REZzH':'copy'};if(_0xffdfd9[_0x17b143(0x594)](_0x17b143(0x5d1),_0x17b143(0x5d1))){var _0x24db14=_0x34c002[_0x17b143(0x62b)](_0x4c627a);if(!_0x24db14||!_0x24db14['st'])return;try{var _0xccefa1=_0x34c002[_0x17b143(0x678)][_0x17b143(0x2fe)]('|'),_0xa18ae4=-0x2137+0xb3f+0x94*0x26;while(!![]){switch(_0xccefa1[_0xa18ae4++]){case'0':_0x509e98&&(_0x509e98['textC'+_0x17b143(0x7a0)+'t']=_0x818bee>0x3b2*0x4+0x10*-0x235+-0xc*-0x1b6?_0x34c002[_0x17b143(0x381)](_0x34c002['hySNW']+_0x818bee,_0x133c70?_0x34c002[_0x17b143(0x645)](_0x17b143(0x575)+_0x133c70,_0x34c002[_0x17b143(0x63a)]):'')+(_0x58f409&&_0x58f409['camer'+'a']?_0x34c002['nUFVT'](_0x17b143(0x451)+'\x20',_0x58f409[_0x17b143(0x73a)+_0x17b143(0x700)]):_0x17b143(0x451)+'\x20-'):_0x34c002[_0x17b143(0x724)]+(_0x58f409&&_0x58f409[_0x17b143(0x73a)+'a']?_0x58f409[_0x17b143(0x73a)+_0x17b143(0x700)]:'-'),_0x509e98['style']['color']=_0x818bee>-0x19f+0x22c7+-0x2128?'#7ee0'+'a8':_0x34c002['WybGa']);continue;case'1':var _0xccf91e=_0x21b844?_0x34c002[_0x17b143(0x381)](_0x34c002[_0x17b143(0x3e9)](_0x40c07f['buffe'+'r']['byteL'+'ength'],-0x1b55*-0x110+0x1f7a6f+-0x2c84bf)[_0x17b143(0x580)+'ed'](0xeb3+0xc0c*0x3+-0x32d7),'MB'):_0x34c002[_0x17b143(0x7a7)];continue;case'2':var _0x58f409=_0x2aa284&&_0x584c63['esp']||null;continue;case'3':var _0x509e98=_0x24db14['st2'];continue;case'4':var _0x4bebb4=_0x204eae[_0x17b143(0x123)](_0x1c83f3&&_0x31f2a1[_0x17b143(0x6b9)+'nces']||{})[_0x17b143(0x4ed)+'h'];continue;case'5':var _0x133c70=_0x58f409?_0x58f409[_0x17b143(0x3d9)+_0x17b143(0x4ca)]||0x275+0x7b5*-0x2+0x1f*0x6b:0x1ca1+-0x367+0x193a*-0x1;continue;case'6':_0x24db14['st'][_0x17b143(0x21b)+_0x17b143(0x7a0)+'t']=_0x21d240;continue;case'7':var _0x818bee=_0x58f409?_0x58f409['enemy'+_0x17b143(0x5f1)]||-0x2a4*0xe+-0x1*-0xacf+0x1a29:0x1aee+-0x11d+-0x3*0x89b;continue;case'8':var _0x21d240=_0x34c002[_0x17b143(0x5e4)](_0x34c002['Uhwim'](_0x34c002[_0x17b143(0x5a9)](_0x34c002[_0x17b143(0x5e4)](_0x34c002[_0x17b143(0x5e4)](_0x34c002[_0x17b143(0x2a9)]('v',_0x58972e&&_0x37c416[_0x17b143(0x3c8)+'on']||_0x26c2b9),_0x34c002[_0x17b143(0x3eb)]),_0x11188f&&_0x3c49f1[_0x17b143(0x698)+'Appli'+'ed']||-0xb*0x242+-0x127d*-0x1+-0x7d*-0xd),'/')+(_0x45aa9f&&_0x559bc1[_0x17b143(0x698)+'Total']||-0xa2d+0x27b+0x7b2),_0x34c002[_0x17b143(0x5e0)])+_0x4bebb4+_0x34c002[_0x17b143(0x3d0)],_0xccf91e)+('\x20\x20wri'+'tes\x20')+_0x251426;continue;}break;}}catch(_0x1046bf){}}else try{return _0x5d1f3b();}catch(_0x18ba8b){if(_0x17b143(0x3c4)!==_0x17b143(0x3c4)){var _0x35db28=_0xebaaa1[_0x17b143(0x54d)+_0x17b143(0x6bf)+_0x17b143(0x452)](_0x17b143(0x1ea)+_0x17b143(0x6c4));_0x35db28['value']=_0x2fa720;if(!_0x19b123[_0x17b143(0x2b2)])return;_0x3f1fef[_0x17b143(0x2b2)][_0x17b143(0x790)+_0x17b143(0x4ab)+'d'](_0x35db28),_0x35db28['selec'+'t']();try{_0x593b74['execC'+_0x17b143(0x2d3)+'d'](_0x34c002['REZzH']),_0x49a8f4();}catch(_0x4b8dd4){}_0x35db28[_0x17b143(0x378)+'e']();}else return{'version':_0x3615c3,'when':new Date()[_0x17b143(0x525)+_0x17b143(0x5eb)+'g'](),'elapsedMs':_0xffdfd9['mnzvr'](Date[_0x17b143(0x134)](),_0x401b08),'host':_0x566c38,'uwmk':!!(window[_0x17b143(0x5fd)+_0x17b143(0x2b7)+'dkit']&&window['Unity'+'WebMo'+'dkit'][_0x17b143(0x60b)+'me']),'il2CppContext':![],'arm':_0x23481a,'hooksTotal':_0x18eac['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x18ba8b&&_0x18ba8b[_0x17b143(0x552)+'ge']||_0x18ba8b)};}}function _0x515f34(){var _0x1596c1=0x1*0xfef+-0xdf*0x1f+-0x1a*-0x6d;try{_0x448ab9();}catch(_0x1f9e65){}_0x2356cf(_0xffdfd9['yWQZZ'](_0x3d0b85)),function _0x11dc51(){var _0x21d95e=_0x49be;if(!_0x18eac[_0x21d95e(0x4ed)+'h'])try{_0xffdfd9[_0x21d95e(0x632)](_0x953b9c);}catch(_0xc0c4ad){}_0x1596c1++,_0x2356cf(_0x3d0b85());if(!_0x18eac[_0x21d95e(0x4ed)+'h']&&_0xffdfd9[_0x21d95e(0x3dc)](_0x1596c1,0x1d1d*0x1+0x1c46+-0x3837))_0xffdfd9['WgOyz'](setTimeout,_0x11dc51,-0x6*-0x53+0x286+0x358);else{if(!Object[_0x21d95e(0x123)](_0x269165)[_0x21d95e(0x4ed)+'h']&&_0x1596c1<0x264a*-0x1+-0x1*-0x1a03+-0xb*-0x139)setTimeout(_0x11dc51,0x19a4+0x26d2*-0x1+-0x1*-0x14fe);else _0xffdfd9['dheTn'](setTimeout,_0x11dc51,0x8b*0x13+0x258d+-0x2*0x1597);}}();}if(document['body'])_0x515f34();else document[_0x24c400(0x635)+_0x24c400(0x1b9)+_0x24c400(0x744)+'r'](_0xffdfd9['CDsRD'],_0x515f34,{'once':!![]});if(document['body']){if(_0xffdfd9['hdIkz'](_0xffdfd9[_0x24c400(0x709)],'qZgMi'))try{_0x1844c8();}catch(_0xd07057){}else return _0x2f989b['faile'+'d']++,_0x120f84[_0x24c400(0x289)+'rror']=_0x2c9a9d['lastE'+'rror']||_0xffdfd9['LTVcT'](_0x35deb1,_0x3caa56&&_0x597b72[_0x24c400(0x552)+'ge']||_0x1e4083)['slice'](-0x47*-0x3e+-0x1cc7+0xb95,-0x7fb+-0x1c8a+0x24fd),_0x1280b8;}else document['addEv'+_0x24c400(0x1b9)+'stene'+'r'](_0xffdfd9['CDsRD'],function(){var _0x256ea6=_0x24c400,_0x2eebe1={'Tfjdk':_0x256ea6(0x151)+'n','BjsUH':_0xffdfd9[_0x256ea6(0x1ba)],'aYKsq':function(_0x3aa1e8){return _0x3aa1e8();}};try{if(_0xffdfd9[_0x256ea6(0x1bc)](_0x256ea6(0x513),'iJUqA')){_0x52ff97['on']=!_0x20e87f['on'],_0x283c7e[_0x256ea6(0x21b)+_0x256ea6(0x7a0)+'t']=_0x6fd643['on']?_0x2eebe1[_0x256ea6(0x570)]:_0x256ea6(0x151)+'ff',_0xc00f69[_0x256ea6(0x4bb)]['backg'+'round']=_0x3297c5['on']?_0x49192c:_0x256ea6(0x1fe)+_0x256ea6(0x718)+'t',_0x404890[_0x256ea6(0x4bb)]['color']=_0x4d47f9['on']?_0x256ea6(0x475)+'1b':_0x2eebe1[_0x256ea6(0x63e)];try{var _0x597779=_0x2eebe1[_0x256ea6(0x1a4)](_0x1f4f36);if(_0x597779&&_0x597779['el'])_0x597779['el']['style'][_0x256ea6(0x658)+'ay']=_0x2c77ca['on']?'':_0x256ea6(0x259);}catch(_0x21ebf7){}}else _0x1844c8();}catch(_0x51f84e){}},{'once':!![]});})()));function _0x49be(_0x567042,_0x44da77){_0x567042=_0x567042-(0x53*0x32+-0x2*0x438+0x1*-0x6a5);var _0x1d6d27=_0x5e56();var _0x4c812f=_0x1d6d27[_0x567042];if(_0x49be['mlnjKu']===undefined){var _0x2db660=function(_0x58c098){var _0x541337='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5ba5f4='',_0xab2298='';for(var _0x39619d=-0x78a+0x3e5+0x3a5,_0x1ea858,_0x21486e,_0x2ea73d=-0x76a+-0x5e*0x6a+0x2e56;_0x21486e=_0x58c098['charAt'](_0x2ea73d++);~_0x21486e&&(_0x1ea858=_0x39619d%(0xc2f*-0x1+-0x1be8+-0x1*-0x281b)?_0x1ea858*(-0x49d*0x7+0x1609+0xa82)+_0x21486e:_0x21486e,_0x39619d++%(0x848+0x2*-0x1039+0x1*0x182e))?_0x5ba5f4+=String['fromCharCode'](-0xcc8+0x482+-0x71*-0x15&_0x1ea858>>(-(-0x9b9*-0x4+-0x4f2+-0x10f8*0x2)*_0x39619d&-0x1a8a+-0x15ba+0xe*0x373)):-0x1*-0x10b4+0xbda*-0x1+-0x4da){_0x21486e=_0x541337['indexOf'](_0x21486e);}for(var _0x45c7b2=0xbeb+0x1f8f+-0x2b7a,_0x24efb3=_0x5ba5f4['length'];_0x45c7b2<_0x24efb3;_0x45c7b2++){_0xab2298+='%'+('00'+_0x5ba5f4['charCodeAt'](_0x45c7b2)['toString'](0x165b+-0x1d8a+0x35*0x23))['slice'](-(0x17e5+-0x2*-0x7af+-0x2741));}return decodeURIComponent(_0xab2298);};_0x49be['FrKCRg']=_0x2db660,_0x49be['iUPfWa']={},_0x49be['mlnjKu']=!![];}var _0x3703d1=_0x1d6d27[0x8a8+0x1dc6+-0x266e],_0x3faade=_0x567042+_0x3703d1,_0x137cf4=_0x49be['iUPfWa'][_0x3faade];return!_0x137cf4?(_0x4c812f=_0x49be['FrKCRg'](_0x4c812f),_0x49be['iUPfWa'][_0x3faade]=_0x4c812f):_0x4c812f=_0x137cf4,_0x4c812f;}function _0x5e56(){var _0x367669=['DfflBfq','tw9er1i','D0DbrLC','EKHhzKS','wNrYwfG','yxqG','ExrLCW','zM9Iz0e','mhGXma','BNzNBue','msiGDMe','y2uSihm','BK10Cxa','u2fRDxi','Ce9ju2O','ExbLCW','BMTLEsa','zw1Pzxm','lNjLC28','DxjLzca','zsbLDMu','yuzYB20','BNnPC3q','CNvmDwK','uMvNAxm','yw1PBMC','sgvHBhq','BMnLigy','qunHDNm','rviGD2K','sNbkzei','Cg9ZAxq','B25Jzsa','zwLNAhq','tK1HA20','icaO','mJbWEcK','AwqGCMC','vfLgEKG','AwDODdO','A2v5vxm','Aw5N','ueXbwuu','twzjBhu','zvbYB3a','CgfYzw4','BYb3zsa','z1vvrw4','qu5pveG','BI5OB28','ihnVBgK','zhHcwgC','Esb0Exa','ywD0uLu','BMC6nha','Ce1wBNu','nJq3o2q','zenYDhq','yM14C0u','DcbIzwu','AgL0CW','iZHKn2e','mxWYFda','C2L6Dwq','BgLUzvC','wNPcAgq','s0fTC2i','rfjbwMu','A2v5','zxmGBM8','CK14r3q','Bgf5oM4','Dg9Y','Afbkzu8','Axr5','AKD4DMS','igDSB2i','vwH3ENi','mta2mtfwv0LrB1q','y2fTzxi','qLjiy1y','zKjPqLO','B3nLCY4','AguGD3i','EtPUB24','4OcuigzYyq','DcaOC28','lwvZCc0','DhLWzq','C3rLBMu','EurkBw0','oJCWmdS','l2nHBNy','C3nPBMC','Fdn8nhW','zcbPCYa','BvL5Dvq','y29WEq','y3rZimk3','CMvUDca','BM90ihi','oImYyta','lJCYktS','q05oALq','zwqGDgG','zMLSDgu','ufLty2q','Dc1ZAxO','tM8GugG','ywDLCG','l3nWyw4','DgHLBG','AeTjBwO','Cgj1tfq','AMThuM0','yxK6zMW','zxbSEKO','EwfvBLa','Aev1zue','EdTVDMu','BYbHihq','BffcEMS','zMLYzsa','CxvcBwy','BwuGlsa','yvnjsu4','vKD6A2S','x19tquS','zgvYoJe','vg5utLK','ihbHz2u','nYWUnsK','BwToEvO','Dcb3yxm','DdOXmxa','i2zMzdq','sNH4u3G','zvbSDwC','C3CYlxm','EdOYmtq','CgfKrw4','nhWWFdi','B246y28','z2uUrgu','EcbZB2W','AgvHBhq','tNfkDxm','z3z3qvC','CNvUCYa','Ewf3','CgfUpG','AwXKlG','y2XYrue','q01nqK4','B25VC3a','D3jVBMC','Egztsue','ChGGlte','EKvds2G','BwvHBNm','DZiTyM8','C29SDMu','qxnZzw0','z2vY','EhbVCNq','yxbWzw4','v3bqvMG','y3nZvgu','zM9Sza','ywWGBM8','C3bYAw4','nhWX','nZG3ota2mePQqLrAAW','Bxm6y2u','y1nVCMK','CgL0y2G','yxbWzxi','yxbWBgK','otK7y3u','vwTZCuy','Dg9WoJG','B250zw4','pgj1Dhq','zM9YBq','tNbHBeW','ihjNyMe','l2j1Dhq','DwLSzci','vuf2Cwm','igfYBwK','BwDrC20','nduPoW','BLDhwLy','BML0Awe','A2v5u28','teLwrsa','zxHLy0m','wMf5tK8','yMXLig4','nJuXmdbvtKzeDNG','AgvHza','C3aTy3y','mIiGC3q','y2fWDhu','Aw5PDgu','ig9MzG','BNrPyxq','BIbHihi','oJeGmsa','B3jKzxi','DgvZia','DdOG','Dw5UAw4','igvUzca','tvzZyu0','zNjHBwu','AezOAei','AgfIBgu','zgf0zsG','B3vUzdO','B2fKzwq','zJmY','vxferNi','B206mxa','ncK7yM8','ys5ZA2K','qxbWBgK','BxmGD2K','s0jyDvu','Bg9JywW','ys9vv00','CKLMEva','B24GAwq','AMDLBu0','Aw1L','CMvUDdS','tLDrAMu','BK5LDhC','rw9SAhO','DxrZs0e','CLLwvLO','lL9Nyw0','thrKvfK','BMDZ','AwzMzxi','iJ5tCgu','sw5ZDge','B2LIq00','zxi6mxa','C2vSzIa','seriwfe','q2rfwfi','A2v5CW','DZiTB3u','zsbYzw0','icb3CMK','Et8Pica','Esbku08','DxbKyxq','icaHia','yLjYy0u','BwuUCMu','BNrLEhq','B3r0B20','DxjHx3m','re9nq28','yxrnCW','iMzVBgq','Du96z1O','BM93','otbWEdS','oYi+','nhWZFde','sxnYtfG','qvbKAM4','z3bisgK','lwLUzgu','tKPdDK0','B25JBgK','zNvUy3q','ihnRAwW','AxbwCwy','BMnL','rMXztLe','CMvHy2G','A0fqENi','ys1ZDY0','AxvZoJK','quHpCM4','zw50o2i','DgvK','D2fYBMK','zgriEK4','Bwf4','Aw1HDgK','DhbHC3m','zw50rwW','Fdj8ma','rvnqig8','BgW6Aw4','zKLsqMO','ihjLy28','kdi1nsW','nYWUmty','CenVBNq','B2LUvfi','4Ocuihr3BW','CgHVDg8','lxjHzgK','CvzYsLi','DgfNtwe','CMvKihK','zwvKzwq','EKjvsKO','u0TjteW','i3n3mI0','zxa9iJa','sM54Aw4','ywz0zxi','D3jPDgu','EdTWywq','AwvSzca','BvjnAfy','pgrPDIa','rgjkBgS','nZq4mZa','ywXSzwq','svzxtui','rLPhDNG','igLZig4','Chr1CMu','z3HhtLm','EMz5z0e','B1bhqLm','BhzLr2e','DxjHtwu','BwLLCYa','DxjPBMC','B3CU','Dg9W','Bg9N','CxjKzgm','DgLUzYa','BgLZDa','C291CMm','tMz1s3m','yw5LBca','DdmY','C3mGmhG','igXPA2u','iNnUyxa','x3j1BNq','lcbnzxq','zgvIDwC','DgG6BwK','vvbSvgy','yMLUzgK','DxfAtwy','rNnjrve','BMqGBM8','DxjJztO','BgvKoIa','sw5KzxG','Axb0igK','zhKIihm','igjVDgG','igHLyxa','mcbMAwu','ie9o','zNH0uwO','yMTzu2m','C2vYlxm','Dde2','DhKGAw4','B3rKrvq','ifnxlva','yt0IC3q','CgfYyw0','zMLSBfm','mtC3lc4','zMy8l2i','yvLlC3e','oJeYmha','rwrJA0W','ihbHDgm','ywLUAw4','tNLOwhi','nhb4idK','sgfXuhe','EwXLpsi','ihbYB3y','v1DyD3q','ywLSzwq','zxnZywC','u2nPDM8','s1fXrNq','BgX5y1e','CMeTC3C','zYdcTYa','vKfyAMG','vvDnsYa','ndmSmtC','zw50tgK','wLfLwvC','AxmGyNu','zursrw8','ksWGC28','s1vsqs0','zxiTC2u','DcbUBYa','yMfZzq','wvHPAum','uhDeBLy','DxjHlwu','z2HpCMe','lxrVz2C','tunNqvi','Dc5wywW','AfnJCMK','mhGYoa','EvrHCa','iIb3Awq','EML1Dfe','zxzLCNK','mJu1lde','vgrpB3m','zw50lwm','v2X3svO','uMvJDa','BLr5Cgu','Cg9Z','Bwvhyw0','zxrVBG','D192mG','AwWYq3a','z2v0rwW','Dxm6n3a','mcbVzIa','ru95rM0','zcbYz2i','twvIt3i','EMjVBLK','DMvKia','DgG6mZq','Bgu9iMm','nJTMB24','zMXLEdO','BMfNzxi','vMPSz3u','C3rYAw4','CMvKDwm','Dgv4Dge','z2v0sw4','oJrWEca','zxbiBNm','mhW3FdG','zKzoEum','zhLNqwm','Fdf8mG','CgvZia','igSWpq','ldi5lc4','DIiGC3q','yM10sLC','vgHHDca','wKPYwxi','ChGGC28','zNbZ','lde3nYW','zxi7iJ4','Dg9WoJe','DhjHBNm','AxmGD2G','DgvHBq','ntuSmtq','AwqGzg8','B3nWywm','Aw50BYa','yw1Ltwe','pc9KAxy','tefzugq','y3DgvwS','BwvTyMu','mxWZFdq','zgf0yq','tfHQt1K','B2r1Bgu','Fdb8nNW','iIbTAw4','CMf3','BNrPBwu','DKf2EuW','Bwf4lxC','C2L6zq','EefRsLC','zw1LBNq','DhLSzq','DxjHimk3','kZb4','BgfZDfC','Dgv4Dem','yKP6u08','owm5o20','rufrzxi','tNjVweu','r0fhC0O','CMLNAhq','zgTPDc4','igfYBwu','lwnVChK','EhL6','iJeIig0','Evz0swq','Bg9HDhm','zw9rDeu','DxfWBg8','lJKPo2i','tMLOBgG','jwnBC2e','zKzry3K','Ahn2C1O','uKz0D1G','AxnmB2m','y29SB3i','BJOWo3a','A2z0yMq','surfige','q0nUD2y','vM1XEhi','ywqGzMe','EdTMBgu','ig1LBNu','mtbWEdS','oYi+tM8','uuD2y2S','lc40ktS','ugj5Bxa','ig9Yihq','ywXSvMu','DxjHvge','BvnKAMC','Bgf5zxi','AgfZtw8','yMfY','lwH1zhS','sYbZy3i','wuvqEhq','BNrxAw4','A3mUBgu','x2DHBwu','y2vK','ywrKAw4','ihbHBMu','Fdv8nNW','uffis3a','zgrPBMC','igXPDMu','qwLlBwC','EI51C2u','zuriyM8','nJTWB2K','DgziAKq','BM9Uzq','vMX6zvK','CZOXmha','nZCSlJq','BM8Gvxa','zxiTCMe','iefdveK','tg9Hzgu','rvnqoIa','Awr0AcK','DgLHDgu','uwz6CNy','Aw9U','r2HVDfO','psjWywq','pt09','zxnWia','CxLeu2q','BhfgugK','lK1Vzhu','DwLyqK4','ihLLDca','CKnVBg8','tgXLuK4','mhHKna','igfUzca','zYbZDxm','Ew5Itvu','DgfN','yZKIpNC','Cxz3A3q','B3jRu3K','DwvxCMe','AhjfA2m','C3bLzwq','AMvJDhm','DhLSzt0','oJK5oxa','u2HHCNa','vvDxvLy','ywjZ','t0LZuhm','ywrPDxm','zKfUDfC','vLvIBhC','qxrbCM0','Aw5KzxG','Bcb1Cgq','BgfZDeu','BIbuyw0','r2PZsNe','EdTHy2m','nhb4ide','vgHLigC','zw5HyMW','wwD5rum','AxmGBM8','u0LfA0i','tvPQuxi','nZCSlJu','yu1Hy1C','zxjLzca','DMvhyw0','phnWyw4','Aw5Lza','Ahq6nZa','igTPBMq','nhW2Fdu','zxH0','yMX5lMK','mhb4idu','BgfIzwW','qM90Aca','vu1ntMe','BM8Gzw4','zuf0rMK','qvvPvxi','zwy1o2i','oYi+u3a','DgeTyt0','tK5mAxm','y1bvv0O','zgf0ys0','BwLU','CYbLBMu','C3qY','ndGZnJq','y0z1q2i','ihnPz24','yM9KEq','ywrKCMu','zM9UDdO','zwqGBM8','lwHPzgq','v2vItw8','Ec8XlJq','CYb3zxi','yxmGAwq','qMnTC3i','A2vLCa','AeXvzfK','BgvY','u2vSzwm','v3D0Awi','v3PQCKm','u09VwNi','BNrLBNq','AgfIt3O','DfL5yMO','oJfWEca','D2fYBG','tw9KDwW','tLDrzLq','phbYzsa','zxjZyc4','CgX1z2K','BxbfrMW','ywn0B3i','ugHVDg8','EM5jEhu','Ag90CYa','BgLKihi','B21Tyw4','zMfJDg8','igzHA2u','rvDRsuW','CM93CW','s2vzvvK','AwLQBMS','DdTIB3i','ChG7iJ4','vgv4Da','DwPPy1G','tIbIEsa','CvzeAMG','ig9IAMu','u2jpueS','yxjNAw4','ihnVigu','BIbPzNi','y29Uy2e','Cgu9iNi','Bw92zvq','CgPMvgO','qNvctvG','DZOWidi','verZq2y','oNjNyMe','u05VDfC','iNrLEhq','C2v0ica','nYWUncK','yxa8l2i','AwrKzw4','Bg9dAge','y2TNCM8','y2SIpJW','Bez1BMm','DgGGB3i','CM9SBgu','nZH2AdS','zMLYC3q','BvLstNO','CMvHzca','DgHLigm','C3bSAxq','ChvZAa','B3j5','zxzLBNq','EKT6Eva','A1nNrMi','ufKGve8','rLz0vMm','r2fTzsG','zZO0ChG','zgLUzZO','igjVDhm','zgLMzG','vfr4q3m','yxrHihi','CgfbB0C','DNmGC24','BgvYigG','v2jizhy','yxbWBhK','m3W5Fde','uMvSB2e','v0Tpzfi','BwuGD2u','CJOXChG','lIbeAxm','BNrsB1u','igLUC3q','n2e2ntG','BxDhCvi','BgX3yxi','lsbvBMK','AezLqMS','z3jVDw4','CKXPC3q','EefLzKO','Cg9PBNq','BIbjtLm','ru5ept0','Ag9ZDg4','CxvLCNK','zejVzxa','q2Htz1a','uLrMALG','DhLWzum','tJWVyNu','tLbdx0m','rvnbuLK','mNb4idC','lwL0zw0','ywnLlem','ywnRz3i','A3b3C1y','rvDgA1G','vxvLAKe','DcbPzd0','zgTPDa','EwvYqw4','psjZDZi','Cg5uDeu','Cw9LrKq','tuvqy0G','swT1sxm','ywT1CMe','ihLLDa','rvbvwfa','zgLMzMu','ChrY','ieeGAg8','nsK7','mhb4oYi','yxv0BW','vgfTCgu','DgvZDa','qNLjza','BMrVDY4','rhf3q0K','Cc1JDG','rLzjs0q','B3j0lGO','otK7Bwe','CIiGDhK','BgPXEhy','BNq4','Aw5MBW','CgLUzYa','ChG7EI0','Dg9YqwW','ic0+ia','zwDPC3q','khmPigq','BJWVyNu','mda7Bwe','v1jkBw4','CY5Tzw0','ig9Uihq','D24Gvxa','ihDOAwm','idHWEdS','iNn3mI0','y21K','As1TB24','zxr3B3i','sfrnta','yxjTzwq','zMLSBa','BxHhsKS','C2fNzq','zg9JDw0','CMnLoIa','lxDLAwC','ihjLywm','BNn0yw4','AwXLzcW','yxbZAg8','Awr0Aa','B2XVCJO','yxr1CMu','vgrvs3C','tuHYr1e','DerHDge','B2jMqG','CMvTB3y','EfHzDvC','yxrLigy','v2TsqvC','AgLSzsa','zxKGAxm','zMfPBgu','Dw5Kzwy','zxjZ','y3vYEMC','B2TZihi','DxrlrNe','yxrJAc4','pc9ZCge','ywSTD28','yNvMzMu','zxjYB3i','wNvdC0K','zgL1CZO','u05cwxq','AxnHyMW','ms4WEdW','vuDoEMq','B25LoYi','tgn2Dgi','yNL0zu8','BxvSvxm','uKfqueu','ifnxlvC','qLjNvu4','ExbLpsi','lJKYktS','CgfKzgK','mNb4idG','BJPJzw4','zxi7zM8','igL0igK','BwuOkq','shfqCKS','Acbxzwi','B2SGAxm','zw5LBwK','mdaWo3u','igL0ihm','Bgv4lxC','y2GGDgG','ufDsvxK','zsbVyMO','Aw1Lr2e','zhvSzq','C2v0sw4','ig9Mia','Fdn8mNW','mtqZnK1equPLDG','ysGYntu','ywLyC2G','kdiXlde','BwvHBG','rKTeEMq','zwn0ihC','DxjJzq','DvnYs1u','zg93yKO','wgnftfG','zsbYzxa','A2v5q28','B3bLBG','Aw4U','ifnRAwW','iJ54pc8','BwrZAeq','uKLSvgC','zw1WDhK','B2jMsq','mhHKma','vLnIC2O','CNjRshq','DcbTyxq','AwfltwO','vuHlz0C','DMvYC2K','u3bLzwq','AwzLig8','B2f0nJq','mIWYosW','CNqGEwu','B2jQzwm','DgHLigC','t29KvuC','uMvZB2W','Bwv0ywq','r01qCem','Bg9Hzhm','AxrPywW','Aw50lxC','u2vLBK0','i2zMogy','yM90q28','v19F','AxmGBwK','uKHoBM4','qNDHwKC','icaGia','z2v0sxq','Cc1SzW','vvjbx1m','AwjLt08','zYaVigO','z2fTzq','AwnOlJW','Dcb0Agu','CMHhv0y','r0zIDuy','zvrxrwm','C2nYAxa','AMn1zwO','DMfSDwu','u1DVA2K','ignVBNm','DgTwyM4','BhzwtMW','A2v5vhK','oJyYDMG','AgLKzgu','yMvNAw4','vu5Ss1i','iJ5VCgu','mJe2ndu0sev3CMfr','rviGvvC','lc40nsK','yw1Ligy','mhG1yW','v2Dot2C','ihrOzsa','qvbvoca','zLHusxa','BNnWyxi','zxnWyxC','rLbty28','BNrPBca','BLj1BNq','EvDryMm','o2fSAwC','o2jVCMq','Axy+','Cu9yAKG','A3vYyv0','ys1LC3a','AKXezfq','AwrLBNq','zxnW','uLvot04','sfLMq2G','ig5VDca','zwXLy3q','Fdv8mxW','B3zLCMy','EI1PBMq','Ewv0lG','C3rYB2S','BKToyvm','tfzrt2O','mNW0Fdm','CMDIysG','C28GAg8','iZrMogy','iIbZDhK','yxjTAw4','zxLL','iNDPzhq','B3bTAvy','mhb4ic0','rgHHyuy','vxHlC00','EdTMB24','ifrOzsa','B0XZzMO','oNrYyw4','CM1VBMS','C3CYlwG','BNrLCI0','Fdv8mG','BNrezwy','AvnXDhi','ndC0odm','sgL1tgu','icaZlIa','yM9Yzgu','BM9Yzwq','Cfneq1O','EvHyBeG','yw1L','CgLzBuW','o2zSzxG','B2SGzMK','rKXUAwu','re5dtgC','igLUlwy','CMrLCI0','sevbufu','v0fswI0','zhrOoJm','A2v5qxq','Ag9VAW','AgfKB3C','seTjEMK','v3jHCha','z2v0vwK','B3n1txu','uxbtAKK','wuPbwLm','BM8Gseu','C2fRDxi','DNndD0q','ywjSzsa','BNrLCJS','BwfUEq','icbJyw0','zw50','DKzTELa','C1vJBhy','Fdr8mG','ohb4o2i','C2HHzg8','BgqGAxm','zK1OBM0','zgL2','DgHLiha','CI1Yywq','AgvSBg8','ChG7y3u','EvfXC2u','D0jwwxe','uLjMC1i','oYi+rvm','sfLkqxu','u2TktNK','tw9lsK4','CgfUzwW','DLfODNi','DYbLEha','tMrcDLO','s1ztuu8','AxHLzdS','tMv0D28','igHVB2S','D2LKDgG','yMfYzsa','C2TPBMC','BMfSrNu','yxvSDa','tM8GCMu','AhjLzG','iZjHmgy','B3jPz2K','yK1vBfK','AguGC2K','C29SAwq','DhrVBJ4','vLLOy2C','ktTIB3i','EvjVD3m','DvDfqNG','uLLpsKe','v0D6v3a','rw5LBxK','zw96qMq','CNjVCG','Bg9YoIm','Ag9VA1a','rw1Jy2O','z2LUigC','vMfSDwu','ieaG','C3fYDa','yMfJA2C','Dfvetfu','ywn0Axy','Bgnxr0W','nJm0nfb5qNrSwa','zfDUB3a','BwfzAfq','Dg87iJ4','uvjIrNG','tev0t2y','y29MB3i','Bwf4psi','BMfTzq','z1DSCLi','vMnhDvG','zhzmy00','zfPruMi','zdP0CMe','zwXHChm','mNz3ldy','yxrHBJi','rwHzywS','Dxr0B24','nYWUmZu','Cu51tgG','x19hzw4','rwL0Agu','zMvLDa','Aw5Uzxi','DgvYo2y','BfDHCNO','wKLRD2C','zenOAwW','Ae5vEfi','AgvYAxq','tKrSzwi','zM1vqxi','BIb0Agu','Dxm6nNa','uer4tNi','EvfMB0G','BMCGyxq','AgfUzwq','AgLZiha','zKDzs1O','Dw5KoNq','n3b4o3a','Aw50Aw4','C3r5Bgu','qLvoq2K','BNrYB2W','vKuGDG','zLrhEu4','vwTHu28','DxjH','yM90CW','whvPsMm','CMfJDgu','oInMn2u','yxmSBw8','z2nQvha','AwnOigy','s05bExy','Dw50','AdO5mNa','CuXHr0C','z2v0q28','yMvHCMK','u09lywu','BeHNCNC','ugXHEwu','wLroyxa','rMfuq3G','y2u7','u25HChm','zwXVywq','ihnPBMm','DgvYzwq','BhDHCNO','z2v0q2W','BNvTyMu','s29iEe0','z2jHkdi','zwz0oMe','zIb0Agu','CZPUB24','Dxm6mta','y2PLCMG','CMuG','Bgv4oJa','mJaXmgHlz1rnCq','EsbMywK','BcbKAxm','qMz2zfi','uLbozMG','mJqXmJu1m1P1ueXpra','igjSB2m','r2fTzq','BgvUz3q','ywX1zt0','CMuGAwC','CgvYBw8','ihvPlw0','B24Gzge','rhrbB2G','yMvSB3C','AezovMK','zM8Qksa','B3vYy2u','BNqXnG','s2TRDNO','quL2y2u','y2u7y28','z2fTzsa','lwXLzNq','vgHPCYa','vMHQsxG','yw55ihC','BcWk','BI5FCNu','tujYu1O','BM90zq','lMrSBa','se9zDfO','Ag9ZDa','zxbSywm','BJ8PoIa','AM9PBG','DMuGB2i','zuL0zw0','t2zMC2u','DgfYz2u','o2zVBNq','mJKWChG','CM9ZCY0','z2fTzvm','AuPvCue','lwe9iMy','BM90igK','Exf5v0m','AwzYyw0','wer1sLu','twfzB2i','uM5MELe','icbOB28','BgrPBMC','ue5sruK','BwuUy3i','Dte2','BgvJDdO','s0zABLe','zJfIo2i','Bw9YEvq','BK91v1e','Dg9ju08','z2LMEq','nJbts0HzruO','swLctgi','A2LUza','DgHLigW','4Psa4Psaia','ywjSzwq','B3vWig8','CMvWBge','vhzgufu','BIbtruu','CMXHyMu','EsbPBIa','tKXRBhy','CgXHEwu','s1HTvey','zxi6mdS','igDHBwu','AgvHCfu','Dw1WAw4','C3PyDfy','sg1Kwgy','sejoz2K','Awq9iNm','DgHLig8','zwn0Aw4','B2XSzxi','otLWEdS','CerNyK0','s2Pwuhu','DKr2A0S','ihn0EwW','kgXVyMi','Ag9Ksw4','lg1VBM8','B3i6','BMnLCW','C29Ks2y','ywDHAw4','y3jLyxq','lwfSAwC','C2v0','zxmGAxq','zdDHotK','BwvZC2e','y2fSlMq','BwuGBM8','CNjiyKe','y3Hkqxi','CgvKigi','CMvWB3i','iJ5gosa','tw9cugq','zsGPlMu','lJmPo2q','uvrerhO','CMvZB2W','zhvYAw4','o2jVEc0','psjZywS','CNvUBMK','zxi7Dxm','DcbPBMO','zYbMB3i','oJeXChG','D3jHCdO','t1PWsgC','zwqGEwu','C2nHBge','tNrSuK0','wMTID0q','z2XVyMe','yMfS','CMfUihK','vgzQzgS','CwDJBgS','DgfSBgK','CYbVCNa','imk3ia','icSG','uNb0ELC','DeHLywW','u0niveO','yMeOmJu','CML0Dgu','icbTzw0','B3PZwfO','svbHEg8','lxnUyxa','BgLUzvq','Dg9gAxG','yw5KigG','BwuGAw4','DhjYDMq','B3z5thG','CNnVCJO','zgf0yxm','Bgu9iMi','B24GDgG','sgnSBum','yvHItvy','Ag90','zvDNDK8','zwn0zwq','B2fYza','ms41ihu','DY5vBMK','AguGAg8','ChG7','zJu7yM8','EurTzvq','Dc5KBgW','CIb0Agu','C25HChm','C3qGysa','rKPcBue','lZeUndu','Bfz4rxq','zwn0Aw8','zNjVDw4','AZPICMu','AwvK','AwDPBMe','icbVyMO','tungDwm','sKL5twS','ywnMD1y','CMfTzsa','BwvTB3i','Cd0Imc4','vg90ywW','BLvgvLq','igrVy3u','wMvirNy','yxbP','zKzItw8','whz6uuW','whnyuwG','v2vHCg8','sKjdzwO','mJm3odC0mhvWyxvjDG','lt4GDM8','BhvLpsi','zwf0zva','DNfMDLu','AwXpsxC','zsDZig8','rMTgChC','oJHWEdS','B2jIEsa','zxqSig8','Bvnurfi','AxjLuhi','vxbKyxq','C2vSzwm','DtmY','oxWWFdC','y29Kzq','u3nWzMS','BNq6Aw4','BI1PDgu','y3vYC28','Cg9YDge','Aw50zxi','B25Z','B25ZB2W','mcaWige','B3DTwfa','B29M','oJiXndC','vhzbAu8','qwzlCxu','lwjVDhq','Dw5PDhK','i2zMnMu','CMfUC3a','yxGTAgu','AcbMAwu','igj1Dca','DMvYBg8','C3rHBMm','C3rHCNq','tLfSteO','zJy0','zt0IyMe','BwvUDc0','qurez08','icaGica','igL0ige','DLDVwgC','ruPZq2W','rgLMzIa','ztPWCMu','DJiTDge','ic0GCNu','ANfQA0m','CJPWB2K','u3rYAw4','pJWVzgK','sNPWDNe','C3bHCMu','D2HLBIa','zYbTyxi','q291BNq','lGOk','CMrLCJO','zw5LBxK','CM91BMq','y1jZtu0','BK1HBMe','BMuUifq','lcbUBYa','mhG5oa','zw9My3i','BwfYA3m','vw5PDhK','yxa6nha','pJiUmhG','vfr0AKm','zfbeqNe','BM8GBgK','BfPewwy','ys1ZA2K','AhnHwwG','CuDPAfy','ywXSoMK','lcbuyw0','mxb4ihm','EtPIBg8','uNvUDgK','B2DozLu','ugf0Aa','B2XPzca','AwnrzuG','mtjWEdS','igLKpsi','uMvHC28','y29UDgu','A3mG','B3qGD2K','y3qGzM8','Aw5KB3C','Dvfnz3K','Bg9VA3m','ANHnDxO','mhG1oa','pc9WCMu','ktSGBM8','DMPkzgq','z2v0rMW','DgGY','rgTqvu0','r0zozu0','CMfUzg8','u2POEum','yLDfDei','Bgu9iM0','yMP1vLa','uuLrqwC','mtjWEc8','nxWZFdi','A2DbEwO','CMfTzs4','qu5Pt0C','DeDWA08','A2v5zg8','CMvMAxG','yxjLBNq','EKP3vgW','Dg9tDhi','zsb0Age','ywrKrxy','nZq4mJK','zMfRzq','yxjLige','BgvMDdO','rvb0sfy','psjJB2W','v3rdAMG','yw1LihC','qMPZvuG','CMvMCW','ywn0','mNb4o2i','ANLZuMe','C2fUzq','khmPihq','C3fUAhi','yxm+','CNrhzwG','BgvYige','zwfKEsa','mNb4icm','mhGYma','rxHWB3i','ihn0yxK','mtqZlde','AtmY','DgHPBMC','BxDIC0W','nsWXndm','iJ5ZywS','C3bHBG','iMjHy2S','CMuGkhi','DxrVo2i','zgLZCgW','yMPsDwW','ihbHC3q','yMrHowm','vNHktKG','lde0mYW','lwzPCNm','ywX0','BNP1CxO','icaGDMe','ignOzwm','EuntrfC','zwrnCW','CMeTzxm','i2y3zwu','iZDLzta','C25HCa','Cg9ZDe0','z25HDhu','nsiGC3q','igzYyw0','t0SGt1y','mhGYna','yxGTD2K','oIm4zdC','Egrou28','igfYzsa','Ate2','A2DYB3u','C2XPy2u','CMfWoNC','DNfrDK8','B1P2rxu','mtLoDwXOBey','B2jMrG','EcaXmNa','iNnWiIa','z2vfBe4','zMzZzxq','BMuGAg8','ktTJB2W','BgCIihm','ve5IAeW','D2LUzg8','tMrqwuq','w2rHDge','yNv0Dg8','zYbxzwi','CNnSswO','uuXwqMW','yxjJ','AK1dyMW','sgvHCca','BvLNB3y','mNWZFda','wgTdvK0','DJiTy3m','zgf0zsa','oInIzge','CNvUDgK','BMv2zxi','Ahf1vuu','DMvK','nJaIigG','Ag9VA3m','ic0Gy2e','mJbWEca','lYbQDw0','ignVCgK','oImXnta','y2vKigi','idyWCYa','zxG7z2e','AxnWBge','C0zyuLe','Bwf4lwG','C28GDgG','zhrOoJi','ys1ZDW','yxjT','ignHChq','EsbHigq','uLmG','BNqZmG','Ag9VA0y','uxbhrNO','vKrtwKm','zw5NDgG','vgHLigG','Fdf8mW','BM9UztS','ChjLDMu','uwneCui','pgLUChu','yNvPBhq','swHby2u','v0HJEvy','Aw5ZDge','B3v0','B2f0mZi','ig9Uy2u','oY13zwi','B3vUDa','zuvSzw0','AxjZDca','wM9UB1i','AgvHCei','r3DKwwK','CMvH','BMnLv3i','EtPMBgu','Ec13Awq','oM5VBMu','msiGC3q','nxWWFde','C21uExa','CgvJDhm','zxHWB3i','t3H2Cfa','CMfKAxu','B3i6i2y','Fdr8mW','B2XLig4','Aw9UoMy','AwLNvvG','iJ48l2q','BgXLzca','BNvcExC','wLjYALe','Avf6zxG','DxDTAW','x19ZywS','yNL0zuW','uvfovvG','vvDnsY4','igzSB28','BwuUx2C','y2XPCgi','BMD0AcW','zg93','Dgf5CYa','D2fZBvq','ihzPysa','yNLqCwm','igfYztO','zsbUB3q','ENvuwgC'];_0x5e56=function(){return _0x367669;};return _0x5e56();}
