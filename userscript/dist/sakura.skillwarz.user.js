// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      2.8.0
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

function _0x310c(_0x5a9d07,_0x9ebd6e){_0x5a9d07=_0x5a9d07-(-0x1111+0x1b4f*0x1+-0x5b*0x19);var _0x22e52c=_0xc8ae();var _0xc2af67=_0x22e52c[_0x5a9d07];if(_0x310c['CJOdJq']===undefined){var _0x5f01e3=function(_0x5c98db){var _0x8d5a7e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3509e5='',_0x446d5b='';for(var _0x2b4810=0x1*-0x509+-0x262c+0xe67*0x3,_0x2d3393,_0x1f0f3e,_0x36f32d=0x1b31+-0x949*0x3+0xaa;_0x1f0f3e=_0x5c98db['charAt'](_0x36f32d++);~_0x1f0f3e&&(_0x2d3393=_0x2b4810%(0x3b*0x3+0x1312+0x695*-0x3)?_0x2d3393*(-0x1f7b+-0xb3f*-0x1+0x147c)+_0x1f0f3e:_0x1f0f3e,_0x2b4810++%(0x2ac*-0x7+-0xfd*0xd+-0x1f91*-0x1))?_0x3509e5+=String['fromCharCode'](0x16f5+-0x3*0x755+0x3*0x3&_0x2d3393>>(-(0x1eb7+-0x14cc+-0x3b*0x2b)*_0x2b4810&-0x1381*-0x1+-0x1a21*-0x1+-0x2*0x16ce)):0x4*0x278+-0xb22+0x7*0x2e){_0x1f0f3e=_0x8d5a7e['indexOf'](_0x1f0f3e);}for(var _0x252326=-0x260c+-0x18c3+0x3ecf,_0x415577=_0x3509e5['length'];_0x252326<_0x415577;_0x252326++){_0x446d5b+='%'+('00'+_0x3509e5['charCodeAt'](_0x252326)['toString'](0x1294+-0x1*0x2327+-0x1*-0x10a3))['slice'](-(0x1e60+0x15d0+-0x342e));}return decodeURIComponent(_0x446d5b);};_0x310c['ATWMaf']=_0x5f01e3,_0x310c['PMyPaM']={},_0x310c['CJOdJq']=!![];}var _0x4dcb56=_0x22e52c[-0x1fbb+0x1966+0x1*0x655],_0x29ee68=_0x5a9d07+_0x4dcb56,_0x10bfd9=_0x310c['PMyPaM'][_0x29ee68];return!_0x10bfd9?(_0xc2af67=_0x310c['ATWMaf'](_0xc2af67),_0x310c['PMyPaM'][_0x29ee68]=_0xc2af67):_0xc2af67=_0x10bfd9,_0xc2af67;}function _0xc8ae(){var _0x3c5c81=['Exv1tfe','CMvZB2W','uuzntvy','DcaWicG','sNPYvuC','ufDKEwW','CfDMz1O','zYbPBNq','zxH0','BMfTzq','rejetve','D0LWr0S','tM8GugG','zw5LBxK','iJ48l2q','zxrmzwy','y29UDgu','lwLUzgu','zvn0CMu','ELb6u0e','mhW0Fdy','ywLUAw4','CKvJu3q','CgfYyw0','oJCWmdS','A2vKihu','DhrVBJ4','AfrIBu4','wwrOAM0','uMTVBNy','D1nZv1e','ywqU','C3fYzNC','x3j1BNq','zgLMzMu','AxrPywW','yw1Ltwe','BNq7yM8','tgHms0W','oJiXndC','z2fTzq','yxnZtMe','icbOB28','B2XVCJO','ihn0yxK','mhGXoa','AM9PBG','zJy0','C2HHzg8','D2LWs1K','CMfWoNC','EeTXz0K','zxiTCMe','BM8GBg8','zhbKC2O','BM8TBwu','q3fwAgG','vMvhq2u','wfjSDfO','Awr0AcK','ywfnC2i','AerUA3i','Axzes0K','zhvYAw4','s0PAt1G','ig9MzG','D2LUzg8','CMvMzxi','t3zvt0K','r2PJre8','EKrrr3y','CMfKAxu','q0XYqK8','zKXyr0S','s1ruBNm','u2fRDxi','Aw5ZDge','oYi+tM8','zJmY','B25ZB2W','vK5yu0C','sgfiyuW','ywrKrxy','yxmGBM8','AwnOigy','CNjVCG','A2v5vhK','wg9gA1G','ChG7yM8','BgvMDdO','DuHmENC','B25JBgK','C3fYDa','zvjLy3q','zYbTyxi','uNPXsu0','CYbVCNa','BNLLwxa','zMy8l2i','zxjJv0i','s1nbBMW','wLn2rhC','lxDLAwC','D2nlAKC','igzVCIa','qMjZDKG','uMvZB2W','yurirNG','BeXyANC','ieaG','t2zM','ihnVigu','EfjxtfG','ys1LC3a','C3bLzwq','Dcb0Agu','v21Szw0','yNvHDNC','C0PgyK8','ncK7yM8','u2HHCNa','lcbnzxq','BunYEMG','z2n6AuC','n2e2ntG','BKnNuMS','iZrMogy','yxbZAg8','CYbLBMu','ywSTD28','Fdj8ma','iJiIihm','zciGC3q','quTdDum','igLZihi','BJOG','ndGZnJq','AgvHCei','r0HuChi','uuHzzLq','CMfUz2u','otK7Bwe','yxbWzw4','sM5Orwq','BvPUtKy','DgfIBgu','BMC6nha','zM9Sza','sg9VA3m','Dde2','sNP4Dfa','BMTvt1u','tuzlvgy','rviGvvC','v2n0Efm','pJiUmhG','Ag9ZDg4','CgXcBhu','uKzVyxK','zMfPBgu','AKHHAxy','nxWXFda','AxfZDLy','ugf0Aa','D1zSyNa','y21K','mdTMB24','qMvzvwy','DuHdvhq','yMXLig4','tuzoqve','A0LWuMC','CI5QCYa','ihLLDca','zxrsAwC','BxmGD2K','CKnVBNq','B0jUDLC','ndC0odm','yxjTAw4','qw9vEM8','CKL0yue','BgCIihm','wezOy3y','yxm+','vu14s2S','ywXSzwq','B2f0mZi','z2TYEK0','z2v0vwK','nJGYotHsveDoDMC','vgv4Da','ys1ZDW','zYbMywK','ifnxlva','u0vICNm','BwfW','Agv4','mNz3ldy','AeLOAwO','CKnVDw4','lcbUBYa','mhGXma','yNL0zuW','tg9VAW','B3nLCY4','BIbYzwW','Aw5KzxG','t3r2CfC','yxbWBgK','EdTNyxa','igDSB2i','ms41ihu','z2v0sw4','uKPIt2S','uvjQvvG','u2vLBG','wgntzgC','rMLjDgq','yxr1CMu','rMvXque','uunrAhO','AwvK','DciGC3q','uNvUDgK','iJ54pc8','ywrKCMu','zgf0ys0','C25HChm','nxWYFde','mI44lJa','nsiGC3q','zw9Pt3G','Bg9VA3m','rwrlCwy','Aw9UoMy','Aw5KB3C','yxbP','mhG5oa','B2SGAxm','ChvZAa','D1LhwfK','zwn0zwq','Axv1tfi','zw5Jzsa','yxjKlxi','z2LMEq','Ag9VA1a','z2jHkdi','zYbZDxm','DxjJzq','zw50tgK','DgfSBgK','q1nprMi','Dg9Y','C3vYDMu','wM1hCg8','mhGYna','ywrKAw4','C2TPBMC','vMXvvMW','AuLQvfe','Aw5Lza','q291BNq','msiGDMe','zMLYzsa','igDHBwu','ys1Hpsi','CMvWB3i','yw5Jzsa','AgvHza','yxa8l2i','wgvNENO','iIbZDhK','AgvSBg8','zg1IquO','yLzQBeK','BM9Yzwq','zNbZ','DerHDge','lKHfqva','sYbZy3i','tLnxvhC','lt4GDM8','DYW2mJa','BxDYq3i','CMvMAxG','EhbVCNq','oJHWEdS','AgL0CW','ChG7','nIWUotu','zsbNyw0','sevbufu','qKrPuLa','uMT3vha','BJOWo3a','BgPrA08','v0zkree','BKD3AgG','Bg9Hzhm','zxnWyxC','CwTOAKG','qMr6yMi','i2zMnMu','B206mxa','uLvRCuK','vgPcwNi','DhbHC3m','Dg9tDhi','vtGGAxm','C2HdB0C','B0rjq3q','CgfUzwW','CY5Tzw0','sKHgu2q','tefzrvi','iNnUyxa','DhKGAw4','zgTPDa','ANj5CfK','q25uy2i','zwy1o2i','qMnbv3G','BIbPzNi','Aw5Uzxi','ihn0EwW','mNb4icm','zxLL','mYWXnZC','DNjuELC','zwrnCW','BgXLzca','iJ5dB3a','As1TB24','CNnJCMK','yM90CW','zxi7iJ4','ELbIDem','CKHTthq','zxjZyc4','C3r5Bgu','yM9KEq','yxqG','yxbWBhK','DhHwAMO','AgfKB3C','wfDZyxK','Aw5Qzwm','Fdb8na','mxb4ihm','Cg9Z','CgX1z2K','EhfxBu0','EdTMB24','vxHnEha','vgHLigC','rwTqu0G','AwzMzxi','mtqZlde','EtPUB24','DgHLBG','lJe4ktS','zvf5B3C','4Ocuihr3BW','CdO2ChG','AxjLuhi','ANPWwwq','nZq4mZa','BLPmuvO','uhvzrNG','qKnmtKq','BNq4','zLzfvwy','EfHfvLy','CMuGAwC','mcbVzIa','BJ8PoIa','yxnZAwy','m3WXFda','AfnlEhK','C291CMm','t2zMC2u','zcWGBM8','zMLSBfm','z0HJuwK','DdTIB3i','zwn0ihC','AgLKzgu','A1rdv2m','u3bLzwq','iJ5gosa','BwuGlsa','v2rcrwi','AgvHBhq','CgfKzgK','veLwrq','icaGia','kdi1nsW','C3rYAw4','tMnYzvi','psiXiIa','A3fusxa','rwrMtK8','yxjT','t0Pnyxq','CuvxBvO','lwe9iMy','BeHjD0e','Ag90icG','ChrY','sNn1Bgu','re16y1G','zMLYC3q','lwjYzwe','AuPWD3C','AwTnuLO','ytK5o20','rvHpthe','yLnUt2e','Dxm6nNa','Fdr8mhW','AwvKige','C3CYlwG','D2H1zfC','tfDgzK0','ChvVsLG','BNrLBNq','A3DiugK','BNnWyxi','otbWEdS','t05qrLK','nJy5mhrvuuHZsq','Bu51ufa','AwHNEve','Axr5','ywjSzsa','DZOWidi','u3Pur20','B29RCYa','BgX3yxi','DxbKyxq','lsbvBMK','rwrmuNK','B2jIEsa','C1jfrfC','C2vUDca','C2LUz2W','CJOXChG','twj3t3K','ignVBNm','msiGC3q','zNvUy3q','BMTLEsa','C29SAwq','BI1PDgu','ignYB3m','BMnL','twv2t2C','EtPMBgu','ig1PBJ0','s2fHzNa','EwHhy2q','r0njv1i','qwLUqva','ExrLCW','ywnRz3i','B29M','t0jUEge','ELHLBuC','vvDnsYa','vNHKExO','B2SGzMK','pgrPDIa','DM5SquO','DNzJthm','y2TNCM8','tgjQz2m','z2v0q2W','zgL1CZO','nNWYFde','v2L0ALG','C2v0rMW','C3rLBMu','Awr4u0i','z2fTzsa','BMuUifq','Dw50','q0rfwfe','uevctMW','ihnVBgK','mtmZnJCWq3fdvNPH','DcbPBMO','oYi+ltW','z3DLqKe','vxbKyxq','BwjLu24','ChqGsvm','lJq1ktS','sw5zAfK','r3ziC3m','uwTTq20','mIWYosW','Aw5MBW','x19ZywS','u1nozgO','CNLwCw0','DMfSDwu','svfNsxi','y2XLyxi','yLLuuuq','CvneuLy','zxHWB3i','y2fSiha','C2LU','s2HqBgi','ihbHC3q','EMzbrwW','igfUzca','ywz0zxi','m3W1Fdy','CMuk','uenjrei','B3jRu3K','lJCYktS','Cg9YDge','BwLUkdu','y1L1tee','BguIihm','B3bLBG','DxDTAYa','zg93','CMq7zM8','AuPfv2u','yKztrxa','BwvTB3i','uK1KrKW','vxfQDLC','B25LoYi','BhvNAw4','iZaWmdS','uevwCgK','Bufqq28','sKvuDvO','vLbjDfe','zg9JDw0','BgfZDfC','s29Uy3e','ieeGAg8','lJKPo2i','BMnLC1i','ChrLza','s1rtsLK','zxnZywC','BI5FCNu','sfjzB0G','mJeSmti','yLvTsgK','zenOAwW','zcbYz2i','Cg9PBNq','ugXSv0O','khrOAxm','r2L5sNq','BIb0Agu','rezJrw4','CM9SBgu','yw1Ligy','oImXnta','yNL0zu8','oJeGmsa','v3v3zgu','ndeXnJb3DM9nBfK','DhLWzq','BhvTBJS','uMLYA3a','DgLHDgu','C0nsq1C','mJu1lde','y2TjshC','DhLWzum','vfbuvMu','y1rIy0e','zxiTC2u','CenVBNq','DxjH','Dg9gAxG','yMvHCMK','ihjVDw4','BM90ihi','yw4+','lMrSBa','BNrPBca','AguGD3i','C1bMs1O','zNjHBwu','A2DYB3u','Ae15A2K','Avnty0q','DgeTyt0','B2jMrG','y2u7','yLnkr00','x2DHBwu','CgDxDNq','Aw1L','lxnWzwu','yMfJA2C','ig9Yihq','B3rVBK4','zxqSig8','venis0W','EwH1txa','DgG6mJK','oxb4ide','y2uSihm','C3rHDhu','rKnpvwG','Evv6zgq','zJWVyNu','DgfYz2u','wunYA0i','CKPHExm','BgW6Aw4','ihvPlw0','Bgu9iMm','Eu52v1K','lxnUyxa','y1zdEgO','Eu1zChm','CePsAeC','vLLhEgi','igvUzca','se5HvLq','DdOXmha','txH0DM0','DYbNBg8','BgfZDeu','AuzWCLu','Ag1PA1a','BLj1BNq','BuTAsLy','mhGYoa','vgHLiha','y0HzBvy','tw91C2u','vujeAva','wwfHq1a','qKjhqNe','q1jPBxq','EcaXmNa','CNvUDgK','zwXVywq','A2TfEhi','A2v5qxq','v2XNtKm','sfrnta','A2v5CW','B246y28','BNn0yw4','zgvYlxi','vgHPCYa','z2fTzvm','y3vYC28','iNrLEhq','ChbLCIa','BwfUywC','tvzWD0C','ihbYB3y','sMzMA3O','EvjVD3m','zxKGAxm','CgXHEwu','AvL6C0W','CgvKigi','C2vYlxm','ywX0','igvHy2G','zNGIihq','BgvUz3q','icbVyMO','BwvZC2e','qMXXC20','zMLSDgu','zJDLzwy','C3rYB2S','yKDHyLK','B2TZihi','lK1Vzhu','DvnAz28','DZiTyM8','AKv1Auu','qND1sLa','AxHLzdS','BwfYz2K','rxH4wK4','rvnqig8','BNrYB2W','zhvSzq','Ag90','BNqZmG','Acbxzwi','qvv3rLy','sezQv0O','ys1IB3G','ihjNyMe','B3i6i2y','ifnRAwW','Cg9Zqxq','Bwf4','y0vNs3C','CMnLoIa','uwzYzw8','DhLxzwi','igvUDhi','ntTWB2K','Bw91C2u','yM90q28','tw9KA2K','AgnTA3i','wM1cyxa','jwnBC2e','Ag90CYa','DeHLAwC','EdTHy2m','rvD1sLe','DxjHvge','ywXSvMu','ywT1CMe','ig90Agu','AgvHCfu','Bg9N','ys1ZDY0','rgnSC2W','mtaSmte','ChG7y3u','u1DRAvm','u1rRyMu','CMvHy2G','BfDHCNO','nNWXFdq','zt0Iy28','wgrYB2K','zM9UDdO','ihDHCYa','ChGGmZa','yMeOmJu','igLUC3q','igL0ige','C2vSzwm','Bgu9iM0','DhfmsLq','ihvUyxy','AwrKzw4','BgqGAxm','CNnVCJO','ktTJB2W','tvLVD3u','y3jLyxq','BM8Gz3i','BwfUEq','r3LrC0W','Eca4ChG','4OcuigzYyq','BgfIzwW','zxi7zM8','B0vMuvO','ig9IAMu','Aw50Aw4','yMX5lMK','DgHLigW','DgvZia','yxjN','CgvJDhm','nxWZFde','C3PTvxa','vKnjrem','zxj0Eq','BMC6nNa','Aw4U','oMf1Dg8','qvrfB0u','DfPdCM8','igfYBwu','suXnvuu','sLnWEhO','wLvXuge','D3jHCha','mhb4ic0','CuXfvwy','nZH2AdS','ks4G','vernx0C','DxjLzey','wxPlCvO','uxvqEgS','C3qY','ywWGBM8','Dg87iJ4','i3n3mI0','ntuSmtq','yNv0ig4','z2v0rwW','DgvYzwq','C21uExa','vgHLigG','AhjUExG','ENrxBMK','C29Syxm','BNq6Aw4','uMXTtwq','wLzxq3m','ys5ZA2K','BwvUDc0','DhLSzq','mhHKna','tgvqsvy','mNWXFdm','tK9ktwS','BMnLv3i','CMfJDgu','lde0mYW','oJaGmta','EwvZ','yMfY','oJfWEca','r2fTzsG','BM8Gseu','qw5HteO','ztPWCMu','Esb0Exa','AfnJCMK','zwvMntS','s1PkthK','ChGPo20','CNvUCYa','CMeTC3C','CMvKige','D2fYBMK','vxHJzgW','u3rYAw4','sxr4wKu','z2vY','ugn4BeO','mhHKma','ExzhAeW','zgLUzZO','Dc5wywW','BfH2uwS','Aw1WBge','zsbPBNm','ihvWk2q','C3CYlwy','q2HTsLK','zt0IyMe','AuvMEfO','khmPihq','wxvTCvy','DxjHx3m','EMTXteC','Ec13Awq','BM93','igzSB28','wM9wu2e','lxjHzgK','oImYyta','vLHusgG','ic0Gy2e','BNv6uNC','uMvSB2e','rev3B1e','mJKWChG','kZb4','ug13BfK','EfD1zwe','ChG7Cge','D2LKDgG','Dg9YqwW','yhbSyxK','ysbNyw0','vw5PDhK','iMjHy2S','zMfRzq','BMv2zxi','DxjPBMC','zw4Gyw4','re9nq28','kdiXlde','zw50lwm','qKfRCK0','zw9Wq2S','Bw92zvq','ChbprMe','CNPzDxO','Fdf8na','BwuUCMu','BM9Uzq','ALjhEw0','vvjbx1m','AxmGBwK','lxrVz2C','A2vLCa','q01dwuS','Ehfrs0S','yxGTAgu','A2LUza','uxfMuxy','owm5o20','oJrWEca','z2v0rMW','u0TjteW','rfjis2y','psiXnJa','mNb4idC','BwuGBM8','Dgv4Dge','B3qGD2K','DK9hweG','C3bSAxq','CNjKy20','v0fswI0','DNmGC24','q2PKywi','u25HChm','sw5Jrxi','AfPRyKq','teLwrsa','AguGB2W','yMvSB3C','lJmPo2q','nYWUncK','rvnqigi','BunUEM8','zMLSBa','icbTzw0','B25PBNa','ufKGve8','sKTWtxq','r3fLvMy','EuTNA0q','t0niEee','yxrLigy','y2XPzw4','z2fNC3a','vgXlzNG','mhb4oYi','AwDcs28','nduPo2i','v3jHCha','DfbvB2C','C25HCa','ihnRAwW','yxv0BZS','AgfIBgu','zNjVDw4','uMvHC28','ktSGBM8','uM91sxe','DgHLig8','CgjkAvq','zgjzy3C','mhWX','C3bHBG','nZCSlJu','CeXfAgK','oNjNyMe','AgvPz2G','DcaOC28','Bfn6y0q','C2fRDxi','B2XPzca','yNzlAfi','ENntELu','C3rHBMm','A3rgDxm','mNWWFdm','EgDizfC','o2fSAwC','zwqGB2y','ig9Mia','B3i6','zMzZzxq','Cw1QCNe','pgiGC3q','icSG','DdmY','mNWZ','Awq9iNm','oInMn2u','DKXKyNy','B2jMsq','B24GAwq','B25VC3a','i3nHA3u','vfDszhu','weDqDfC','Aw5N','Eun5sKS','BwvTyMu','wwrJwuu','zwqGBM8','pt09u0e','BNrLEhq','rLbty28','Dxm6n3a','yLnkzwm','pgnHBNy','AwDODdO','Exf2z3G','q3zyyKS','Dw5PDhK','Fdj8nhW','A2v5','CMuG','CuHmqLC','yt0IC3q','ndmSmtC','vxntCKm','zw1LBNq','ihrOAxm','wejjuum','DMvKpq','mhHLoa','zgvIDwC','zMvLDa','imk3igzV','Aw50lxC','Aw1Lsxm','uxjgCha','zuPRzLO','DMfS','ig1HBMe','Aw9U','C3aTy3y','yMLUzgK','Dg9W','tKHTD0i','ihnPBMm','lcbuyw0','AxmGBM8','BwuUy3i','DcbPzd0','oYi+rvm','ihDOAwm','mZqYnti0n3DxtxjMzq','zwXHChm','CMfWoYi','igjSB2m','rNjXCxa','r1DWrMi','Ag9ky1y','yxmGAwq','ugjSv3u','y2PNveS','Ate2','nYWUmZu','y2fTia','ywqGzMe','qNDAvwW','wuDiyuK','Bg9HDhm','yMfZzq','zsbWCMu','AcbMAwu','EdTMBgu','A2v5u28','oM5VBMu','suDAreO','zxjYB3i','yurUC3i','psjWywq','whHQEvy','Bxm6y2u','AguGAg8','BNrxAw4','B2XIAKO','BMfNzxi','tfLUsfG','Cg9IDgG','A3LitwK','AwDPBMe','u3bmug0','m3W0Fde','y29MB3i','Bgf5oM4','ztOXnha','ugvitfe','zgLMzG','sgvHBhq','lde3nYW','BgvJDdO','C3LUyW','zxbSywm','DtmY','CgT1ENi','BM90zq','BNrPBwu','EsbHigq','zMv6tui','CMeTzxm','ktTIB3i','AhjLzG','zgf0zsG','mtC3lc4','nsK7','BMrVDY4','v09Iwvy','Dc1ZAxO','yxv0BW','ysGYntu','B3vYy2u','uNP3t1O','B1HeEMK','ugXHEwu','wwn4AKK','BLzPzxC','Dgf0Dxm','BgLUzvC','CgLUzYa','y29UDhi','uMvNAxm','ywDLigG','zM8Qksa','zw5HyMW','ztTTyxi','tM9hrNC','CM93CW','Bg9dAge','Bw9Xquu','AwzLDKS','zKfdtva','pc9KAxy','ywn0','DJiTy3m','zcb3yxm','CZPJzw4','zgf0yq','DJiTDge','z0nLBw4','Dgf5CYa','z0jov2m','ic0+ia','i2y3zwu','D2f3DwS','qxzruw0','pgj1Dhq','uMjLANu','BgvYige','zvbSDwC','Et8Pica','yxvSDa','BgvY','BNzeqxe','l2nHBNy','Dxr0B24','BgLZDa','z2v0sxq','s2Twywu','yMfYzsa','s1vsqs0','reDgzwi','qM90Aca','yxjJ','zgL2','mNb4idG','idHWEdS','vNL0sNy','zw50o2i','Dc5KBgW','tuLQv0u','zNbWt0O','DMvhyw0','Dcb3yxm','DgGY','wxzlBfe','B3vWig8','tMnsv1i','B24+','Cfr0yLm','AKzQDuq','DgnOzxm','BKHoENC','DxjQq0m','s2TKr3u','n3b4o3a','ue13wNq','Bez1BMm','EI1PBMq','Bw9YEvq','tNrLA1e','igHLEd0','wuzSCwS','Dg9ju08','A3mUBgu','pc9ZCge','mxW1Fda','vwrSwue','ExDet2K','ELH6twW','AgfUzwq','wgPYqvi','y2fSlMq','CJOJzJC','rMXHzW','zdDHotK','txjfzey','ExLNt28','CMvWBge','EwvYqw4','zw5NDgG','BgvYigG','Fdf8n3W','BwuGAw4','nhW3Fde','ywjZ','Dw9IwvO','ihjLy28','CMvSyxK','iMzVBgq','yw1LlGO','Dgv4Dem','B250lxC','A3mG','lwXLzNq','y0LUChu','DYbLEha','AwrLBNq','zsb0Age','ohb4o2i','z2vYlIa','BMqU','BM9ZCge','y2u7y28','tJWVyNu','uLmG','CYXTB24','B1vlANa','zsbUB3q','mty5oduYmfLMA25ADq','qwPMuey','vfPbzuC','AwqGCMC','qxrbCM0','psjZDZi','A2LUzYa','ihbHDgm','B0fZBLa','qNLjza','Dc4kcLq','B3zLCMy','B3j5','nduPoW','CMfTzsa','EdOYmtq','zxHLy0m','vw5Vuwu','oYi+u3a','Cxforg4','wwvgCuS','zgf0yxm','phbYzsa','zvn0EwW','u2nPDM8','nZq4mJK','uwLUwwi','ww5Pwe0','CgL0y2G','zgrPBMC','CZPUB24','zuf0rMK','lL9Nyw0','AwzUuLO','DcbIzwu','r2fTzq','y29SB3i','DMvYC2K','mhG1oa','phnWyw4','qNjHy2S','oJK5oxa','twDWsfa','v19F','yxPuENK','B24GDgG','AwqGzg8','z2nXCgW','B2fYza','B2X0AhO','lYbQDw0','AwWYq3a','Ag9VAW','o2jHy2S','zNDrsvu','icbJyw0','DxDTAW','CYb3zxi','ihbHC3m','AgLSzsa','ifbpuLq','wKn2vM4','wgDcBfe','C2v0','zwHfA2i','lwvZCc0','r0vnDxu','ie9o','CgLsB3i','A3vYyv0','Axb0igK','CgfYzw4','qu5pveG','ExbLCW','yM5SBMq','yMTeBLu','whLhrg0','sNLpwhO','BYb3zsa','CMzSB3C','Bgu9iMq','CMfTzs4','CMDIysG','CMv0Dxi','BuHUwwi','Ag9VA3m','C2fUzq','zEkaPJWVCW','vg90ywW','lwH1zhS','qxbWBgK','zw1Pzxm','CxvLCNK','mJfOBxLPu2e','EM1Irwi','DxjHimk3','A1n5BMm','iNn3mI0','B24Gzge','lZeUndu','DcbTyxq','nsWXndm','B2XSzxi','y2GGDgG','swLYwM0','Chb3vKS','ugHVDg8','A3mGD2G','DgvYiJ4','zxvrt1m','qwnszLa','l2j1Dhq','CMf3','DxjHlwu','tuSGq08','igLKpsi','zxnW','DhLSzt0','EgvUsfO','lg1VBM8','BM9UztS','BgvKoIa','DKzOC0O','uwjYvLu','CM91BMq','yxmGzMK','y3qOCYK','DMvK','mxb4idy','yw1L','s3ztzfm','ohb4ide','zxnWia','Bgu9iMi','CxHOEhO','zwDPC3q','DgHLigm','ywDLCG','shnmsvG','DgvYo2y','otLWEdS','zMfJDg8','w2rHDge','ExbLpsi','zZO0ChG','AxnWBge','AguGC2K','y2vK','rMH3wwS','CY1VCMK','DgvHBq','lwnVChK','BM8GCMu','DeHbweS','tezjugq','Cg9ZDe0','B3v0','D24Gvxa','CMvMCW','C2fNzq','Aw1Lr2e','yxGTD2K','sw5ZDge','igjVDhm','BwvHBG','BMDZ','AxnmB2m','EhPeD2O','BMD0AcW','tLbdx0m','Ag9Ksw4','sgvPz2G','Dg9WoJG','t0PjshG','ChG7EI0','DxjJztO','D2fYBG','Cc1SzW','C2nYAxa','zuzAy2S','y29Uy2e','AMfSrfy','zsGPlMu','B3rYB2W','DgHLigC','Fdn8nxW','DxjLzca','uMvJDa','qLntzKO','BMfSrNu','ugPMsMy','AwXKlG','BgrZlIa','CI1Yywq','DgLUzYa','yM9Yzgu','yZKIpNC','rfjpEfK','lwjVDhq','qu9NteG','EgXxrxG','Ahq6nZa','yu5uC0O','v2vItw8','sK1xAeW','BML0Awe','ihbHz2u','A2v5vxm','EcbZB2W','C29SDMu','qwTRs1G','AgHryLO','Ehjwzxe','CIiGC3q','Dg9Uvuq','Axy+','rvbKywC','mJbWEcK','tK1eqwS','rNjYyLi','u2vSzwm','zgLZCgW','o2nVBg8','BK5LDhC','ihrOzsa','Ag9ZDa','q2Xlq1y','CKnVBg8','oNrYyw4','uKfqueu','u3rJsg4','C3mGmhG','zxnVBhy','ueXbwuu','zgTPDc4','yNvPBhq','yMvNAw4','z2v0q28','uNrlBuO','uLn4Cum','ihzPysa','kgXVyMi','zhPoALa','reTItfK','BwuOkq','lc45kq','Ae16vMu','icaGy28','zxjZ','BwLLCYa','v1vnCNC','DgGGB3i','ihjLywm','yxjTzwq','ywnLlem','DxjHpc8','EezNt1O','BwLU','zIb0Agu','y2XPCgi','oIm4zdC','zw50rwW','zLP0y1C','C2v0sxq','BM8Gvxa','zhKIihm','iZHKn2e','suDytuO','vu9yDwq','Ag9VA0y','rhfdruS','BwuUx2C','r3DkzwS','l3nWyw4','B3j0lGO','ALbIvei','ksbVCIa','C0DyC0G','ChGGC28','whnRrK0','v3n2sue','wwX3yvm','v2vHCg8','ihDOAwW','sw5KzxG','zYbMB3i','EvnJwgW','C3bHCMu','BNrLCJS','EerWrvy','DerPwuK','yM94zxm','y3nZvgu','EgDtqKW','svbfCvq','iZDLzta','uhL1r1K','zYbIBgK','Cg9ZAxq','yMX5lum','ywn0Axy','mtjWEc8','t1jfs3G','yuzYB20','rMTOveu','lxDYyxa','zw50','Ewv0ic0','tK9UrKO','B3vUzdO','ihbHBMu','yxjLige','BNrPyxq','sfjKzhu','uLzbyuO','AhnHDK0','zsb1C2u','mJbWEca','C2v0sw4','yxa6nha','oYi+','DdOG','BNrLCI0','igfYzsa','nxW2Fde','te9sq2S','DgHPBMC','y2fWDhu','yvHesMe','AMvJDhm','B2zMC2u','AhvKlwm','EtPIBg8','yu5Py0e','uhD2u3i','CgHOEK8','Cd0Imc4','v0j5Cw8','s1bht0K','zM9UDa','DgPowwS','shHkrgC','sgXTvuW','swLktee','zsDZig8','B2jMqG','DhLOExm','rwvNA3a','ChGGlte','ELngvgO','n3jKDNfzuq','DMn5sxC','pZWVC3a','B21Tyw4','mdaWo3u','rgX1v1e','CgvYBw8','A3D4qKm','DM9Pza','zw5LBwK','shfoEuy','ihjLCg8','o2zVBNq','y1P0BKK','otu0ndK1qNbxwgDV','BNnPC3q','Dte2','sgvHCca','sMvpqM0','AgfZtw8','A0rnCNy','iZe1mgm','y3qGzM8','yw55ihC','qMXKvei','zsXdB24','EwXLpsi','AxDIvKC','yNvMzMu','qKXTuuG','C09HveS','zxzLBNq','idaGyxu','o3DVCMq','CML0Dgu','igTPBMq','Bg9JywW','y2flwhG','DcbUBYa','BM8Gzw4','zM92','A1Dlv00','BMnLCW','y29WEq','i2jKytK','imk3ia','CgvZia','DwLSzci','CIb5B3u','n2vLzJu','DgvK','Dw5Kzwy','oJeXChG','iNDPzhq','yMLsuvu','yxK6zMW','zZOXmha','yZfKo2m','CMvIDwK','q29WAwu','zLjmu2G','CMuGy2W','zgPftfi','B3nWywm','AgvYAxq','mNW1FdC','zM9YBq','C2L6zq','rff1CNm','zxzLCNK','EI51C2u','sLrNuMy','Bg9YoIm','igHLyxa','zMXLEc0','ihLLDa','CMvTB3y','CJPWB2K','Cw5RzLy','vKDuBeK','yxmSBw8','t25uDNK','C28GDgG','yxrnCW','D1vAvwG','CMvKihK','BLr5Cgu','B250zw4','CMvUDdS','vw9nB2O','B2jQzwm','zxi6mxa','zgTrwwe','u2nTDLG','iJ5tCgu','ru5ept0','zwqGEwu','vKuGDG','zwf0zva','ywrPDxm','rLjeB2e','EuPewuG','mtjWEdS','rMHLtwO','CNvUBMK','C2XPy2u','igfNCMu','yNv0Dg8','DwKTBw8','u2r2zgm','uuzQEKi','BNDRy2m','zhrOoJi','tNzMBge','AtmY','i2zMyJm','yxrHBJi','BMfSv2e','Ewf3t2y','nxW0','idyWCYa','z3jVDw4','ywLSzwq','BgLKihi','uvHqDKm','lxyYE2e','B3jPz2K','iokaLcbUBW','zdP0CMe','tg9Hzgu','icaO','Bgf5zxi','DgfU','EsbPBIa','CM5Vrhy','y2HLy2S','zwz0oMe','z2XVyMe','y2vKigi','o2jVCMq','Cc1JDG','Cg9YDca','ignOzwm','Aw5PDgu','y29Kzq','BNrezwy','ig5VDca','igzYyw0','qKDNrxy','igrVy3u','EvrHCa','BMCGlYa','CgfKrw4','CMrLCJO','zMXLEdO','y2fTzxi','zwqGDgG','lIbeAxm','BMnLigy','Fdb8mG','igj1Dca','lGOkswy','EK5oA2O','lxnWywm','ignHChq','mhb4o2y','BwfYA3m','ChjLDMu','zuvSzw0','lNjLC28','DhjHBNm','imk3ihrL','iZjHmgy','otK7y3u','igHVB2S','vefABKu','icaXlIa','C2v0ica','CMTqBge','EhP5A2y','icaGica','vNPfveG','DgfNtwe','Bcb1Cgq','mhWY','tw9KDwW','iefdveK','DMvKia','EdTWywq','Dg9WoJe','x19hzw4','CgfwzKW','t2fyB0e','ywWGB24','mIiGC3q','BhzLr2e','zMLSBfq','zxG7z2e','oJyYDMG','tgf1q3K','yw1LihC','D3jPDgu','sMrpD0S','yZK7BwK','B3CU','q0TLCMW','CKXPC3q','zgvYoJe','B3jKzxi','vhjTrfu','AgP2BKS','mNb4o3O','C28GAg8','zYdcTYa','qxnZzw0','DxjQC00','ie9IC2m','D2f0y2G','mhG1yW','DvnzzLO','rgX1z3G','zw1WDhK','BhqGC2K','CMfUC3a','B25Lige','BNvTyMu','AxjZDca','nZCSlJq'];_0xc8ae=function(){return _0x3c5c81;};return _0xc8ae();}(function(_0x3ec49d,_0x4a5082){var _0xe3374e=_0x310c,_0x34a004=_0x3ec49d();while(!![]){try{var _0xfdf8a2=parseInt(_0xe3374e(0x170))/(0x89*0x2b+0x1e61+-0xad*0x4f)+parseInt(_0xe3374e(0x1ab))/(0x21bb+-0x874+0x1945*-0x1)+parseInt(_0xe3374e(0x4f3))/(-0x1e44+0x5*0x2ed+0xfa6)*(parseInt(_0xe3374e(0x1fc))/(-0x1d43+-0x1aab*0x1+0x37f2))+-parseInt(_0xe3374e(0x602))/(0x49*-0x30+-0x9a+0xe4f)+parseInt(_0xe3374e(0x796))/(0x3d0+0x1*0x193+-0x55d)*(-parseInt(_0xe3374e(0x5f4))/(0x12a2+-0x4*-0x16+-0x12f3))+-parseInt(_0xe3374e(0x496))/(-0x7cf*-0x1+0x1975+-0x213c)+parseInt(_0xe3374e(0x3d4))/(0xb30+-0x1*0x8c6+-0x261);if(_0xfdf8a2===_0x4a5082)break;else _0x34a004['push'](_0x34a004['shift']());}catch(_0x453270){_0x34a004['push'](_0x34a004['shift']());}}}(_0xc8ae,0x4*-0xc0df+0xbb*-0x196+0x5dfc3),((()=>{'use strict';var _0x3e5c02=_0x310c,_0x2670e0={'bkDnU':function(_0x52462d){return _0x52462d();},'YCrkB':function(_0x41417d,_0x43ff62){return _0x41417d!==_0x43ff62;},'JHFSd':function(_0x124f56,_0x43032f){return _0x124f56!==_0x43032f;},'caKXx':_0x3e5c02(0x645),'oEfQZ':_0x3e5c02(0x1f1),'hZkbD':'ifram'+'e','JTgRf':function(_0xe1f331,_0x274df9){return _0xe1f331<_0x274df9;},'yCyJK':_0x3e5c02(0x60f),'QrFpp':'hhQbZ','dbYcw':_0x3e5c02(0x1d1),'iAQzG':_0x3e5c02(0x609)+'1d','ykoYX':_0x3e5c02(0x322),'NOnFJ':function(_0x580327,_0x49c5dc){return _0x580327===_0x49c5dc;},'HNaVT':'\x20\x20wri'+'tes\x20','JMWhL':_0x3e5c02(0x4cd)+'\x20-','rpTDL':'no\x20en'+'emies'+'\x20yet\x20'+_0x3e5c02(0x587)+'y?)\x20\x20'+'cam\x20','lLXjw':function(_0x14009c,_0x1c5df7){return _0x14009c>_0x1c5df7;},'zPbtC':'sakur'+'a-sw-'+'v2','NOJMk':function(_0x38bad5,_0x4683cd){return _0x38bad5&&_0x4683cd;},'lXvQk':function(_0x2016a6,_0x1defd0){return _0x2016a6+_0x1defd0;},'bFSEp':_0x3e5c02(0x5c0)+_0x3e5c02(0x7c3)+_0x3e5c02(0x275)+'left:'+_0x3e5c02(0x65a)+_0x3e5c02(0x6b1)+'2px;z'+'-inde'+_0x3e5c02(0x4a5)+_0x3e5c02(0x4af)+_0x3e5c02(0x6a1)+_0x3e5c02(0x2b3)+_0x3e5c02(0x1f0)+'er;us'+_0x3e5c02(0x207)+_0x3e5c02(0x402)+_0x3e5c02(0x50e),'ItxZE':_0x3e5c02(0x21f)+'round'+_0x3e5c02(0x385)+_0x3e5c02(0x337)+_0x3e5c02(0x1b6)+_0x3e5c02(0x1e5)+'order'+':1px\x20'+_0x3e5c02(0x186)+'\x20rgba'+'(255,'+_0x3e5c02(0x83f)+_0x3e5c02(0x383)+_0x3e5c02(0x2b4)+_0x3e5c02(0x394),'SzTGm':'TflHN','VlUVl':function(_0xa9a78c){return _0xa9a78c();},'vFhsJ':_0x3e5c02(0x82d),'UBDiP':_0x3e5c02(0x389)+_0x3e5c02(0x29c)+'v2-cs'+'s','eopCk':function(_0x1407df,_0x26a2b){return _0x1407df+_0x26a2b;},'PuYFx':function(_0x404c33,_0x5b49bf){return _0x404c33+_0x5b49bf;},'tPUog':function(_0x415953,_0x5cf787){return _0x415953*_0x5cf787;},'wawuk':function(_0x1bf82f,_0x52a4e3,_0x27c452){return _0x1bf82f(_0x52a4e3,_0x27c452);},'fDmLR':'speed','KJZOX':function(_0x8d5990,_0x1b2536){return _0x8d5990+_0x1b2536;},'ClKCV':function(_0x26eac9,_0x4ea5a2){return _0x26eac9(_0x4ea5a2);},'wUZUh':function(_0x3b8dc1,_0x22b257){return _0x3b8dc1+_0x22b257;},'MrEdF':_0x3e5c02(0x340),'BDiRP':function(_0x51521b,_0x27b75d){return _0x51521b(_0x27b75d);},'yvGhL':_0x3e5c02(0x85e)+'\x20ON','cjgTK':_0x3e5c02(0x853)+'|2|6|'+_0x3e5c02(0x66b),'UxMxp':function(_0x476735,_0x1369c9){return _0x476735+_0x1369c9;},'bGxCT':'#ffd4'+'8a','mfabG':_0x3e5c02(0x50c),'koGaC':'xhMcR','fpTmh':_0x3e5c02(0x470),'YFsTW':function(_0x2d9daf,_0x933880){return _0x2d9daf+_0x933880;},'DqCEK':_0x3e5c02(0x5c0)+'ion:f'+_0x3e5c02(0x275)+'left:'+'12px;'+'top:1'+_0x3e5c02(0x6c7)+_0x3e5c02(0x6e9)+'x:214'+_0x3e5c02(0x848)+'00;ma'+_0x3e5c02(0x31c)+'th:mi'+'n(52v'+_0x3e5c02(0x7f4)+_0x3e5c02(0x302)+_0x3e5c02(0x348)+_0x3e5c02(0x3af)+_0x3e5c02(0x2d6),'tVgTH':_0x3e5c02(0x21f)+_0x3e5c02(0x512)+_0x3e5c02(0x1f8)+_0x3e5c02(0x62d)+'olor:'+'#f7ee'+'f5;bo'+'rder:'+'1px\x20s'+_0x3e5c02(0x38a)+_0x3e5c02(0x4e8)+_0x3e5c02(0x202)+'43,17'+'7,.5)'+';bord'+_0x3e5c02(0x70c)+_0x3e5c02(0x19f)+'14px;','qEWmZ':'displ'+'ay:fl'+'ex;fl'+'ex-di'+'recti'+_0x3e5c02(0x252)+_0x3e5c02(0x1fe)+_0x3e5c02(0x4a1)+'low:h'+_0x3e5c02(0x2b1)+';','Wmlem':function(_0x2d1572,_0x15b873){return _0x2d1572+_0x15b873;},'uSZgo':function(_0x30727d,_0x5b86a9){return _0x30727d+_0x5b86a9;},'UnoQe':function(_0x2eb5e8,_0x2200b1){return _0x2eb5e8+_0x2200b1;},'txVjj':function(_0x498212,_0x4166c6){return _0x498212+_0x4166c6;},'lHIwA':function(_0x1e8cdf,_0x4ea166){return _0x1e8cdf+_0x4ea166;},'NMDAk':function(_0x4809fd,_0x32814e){return _0x4809fd+_0x32814e;},'nuedk':function(_0x578507,_0x56f4f4){return _0x578507+_0x56f4f4;},'rEcSt':_0x3e5c02(0x199)+'style'+_0x3e5c02(0x3ee)+_0x3e5c02(0x30e)+_0x3e5c02(0x226)+'2px;b'+'order'+_0x3e5c02(0x55c)+'om:1p'+_0x3e5c02(0x566)+_0x3e5c02(0x499)+_0x3e5c02(0x2aa)+_0x3e5c02(0x4fb)+_0x3e5c02(0x401)+_0x3e5c02(0x361)+'ispla'+_0x3e5c02(0x18b)+_0x3e5c02(0x7aa)+_0x3e5c02(0x7f8)+'align'+'-item'+_0x3e5c02(0x42f)+_0x3e5c02(0x521)+'lex:0'+_0x3e5c02(0x614)+_0x3e5c02(0x2de),'XoFkX':_0x3e5c02(0x397)+_0x3e5c02(0x60e)+'color'+':','goppB':'\x22>sak'+_0x3e5c02(0x4f5)+_0x3e5c02(0x377)+'lwarz'+'</b>','gweBA':_0x3e5c02(0x4bd)+_0x3e5c02(0x509)+'sw2-s'+_0x3e5c02(0x41c)+'\x22\x20sty'+_0x3e5c02(0x231)+'olor:'+_0x3e5c02(0x620)+_0x3e5c02(0x55a)+'aitin'+_0x3e5c02(0x5b3)+_0x3e5c02(0x7e2)+_0x3e5c02(0x687)+_0x3e5c02(0x4ed)+'pan>','aNicA':_0x3e5c02(0x439)+_0x3e5c02(0x39f)+'=\x22sw2'+_0x3e5c02(0x344)+_0x3e5c02(0x1d0)+_0x3e5c02(0x50b)+'\x22back'+_0x3e5c02(0x66d)+'d:tra'+_0x3e5c02(0x16d)+'ent;b'+'order'+_0x3e5c02(0x2f9)+_0x3e5c02(0x186)+_0x3e5c02(0x281)+_0x3e5c02(0x866)+'143,1'+'77,.4'+');col'+_0x3e5c02(0x282)+_0x3e5c02(0x625)+_0x3e5c02(0x67f)+'er-ra'+_0x3e5c02(0x19f)+_0x3e5c02(0x460)+_0x3e5c02(0x7da)+_0x3e5c02(0x526)+_0x3e5c02(0x44d)+_0x3e5c02(0x257)+_0x3e5c02(0x641)+_0x3e5c02(0x5b6)+'\x22>ope'+'n</bu'+_0x3e5c02(0x6f2),'uFsMj':_0x3e5c02(0x199)+_0x3e5c02(0x82d)+'=\x22pad'+'ding:'+_0x3e5c02(0x519)+'2px;b'+_0x3e5c02(0x6c4)+_0x3e5c02(0x55c)+_0x3e5c02(0x809)+_0x3e5c02(0x566)+_0x3e5c02(0x499)+'ba(25'+_0x3e5c02(0x4fb)+_0x3e5c02(0x401)+_0x3e5c02(0x842)+'displ'+'ay:fl'+_0x3e5c02(0x6b9)+'p:8px'+_0x3e5c02(0x391)+'n-ite'+_0x3e5c02(0x3f0)+_0x3e5c02(0x5b6)+_0x3e5c02(0x68e)+'0\x200\x20a'+'uto;f'+'lex-w'+_0x3e5c02(0x70a)+_0x3e5c02(0x3d6)+'>','XQBho':_0x3e5c02(0x439)+_0x3e5c02(0x39f)+'=\x22sw2'+_0x3e5c02(0x21e)+_0x3e5c02(0x75c)+_0x3e5c02(0x60e)+_0x3e5c02(0x21f)+_0x3e5c02(0x512)+_0x3e5c02(0x57a)+_0x3e5c02(0x5b5)+_0x3e5c02(0x6fd)+_0x3e5c02(0x68d)+_0x3e5c02(0x836)+_0x3e5c02(0x38a)+'rgba('+_0x3e5c02(0x202)+_0x3e5c02(0x3b8)+_0x3e5c02(0x362)+_0x3e5c02(0x574)+_0x3e5c02(0x472)+_0x3e5c02(0x300)+_0x3e5c02(0x559)+_0x3e5c02(0x557)+'ius:7'+_0x3e5c02(0x32b)+_0x3e5c02(0x4b3)+_0x3e5c02(0x34c)+'10px;'+_0x3e5c02(0x257)+_0x3e5c02(0x641)+_0x3e5c02(0x5b6)+_0x3e5c02(0x652)+_0x3e5c02(0x392)+_0x3e5c02(0x22b)+_0x3e5c02(0x6f2),'tTnkZ':_0x3e5c02(0x4ac)+_0x3e5c02(0x39b)+'w2-ou'+_0x3e5c02(0x7b7)+_0x3e5c02(0x60e)+_0x3e5c02(0x276)+_0x3e5c02(0x800)+'addin'+_0x3e5c02(0x62c)+'x\x2012p'+'x;ove'+_0x3e5c02(0x4e5)+_0x3e5c02(0x2cc)+';flex'+_0x3e5c02(0x1fa)+_0x3e5c02(0x378)+'white'+_0x3e5c02(0x697)+_0x3e5c02(0x2fd)+_0x3e5c02(0x5c7)+_0x3e5c02(0x615)+_0x3e5c02(0x15e)+'k:bre'+_0x3e5c02(0x759)+_0x3e5c02(0x1d4)+_0x3e5c02(0x2e9)+_0x3e5c02(0x634)+';','vrTzW':'max-h'+'eight'+_0x3e5c02(0x6ba)+_0x3e5c02(0x725)+_0x3e5c02(0x5ff)+'rt\x20ye'+_0x3e5c02(0x4a0)+'his\x20p'+'anel\x20'+_0x3e5c02(0x179)+'es\x20it'+'self\x20'+'when\x20'+'the\x20g'+'ame\x20f'+_0x3e5c02(0x4a4)+_0x3e5c02(0x804)+_0x3e5c02(0x673)+_0x3e5c02(0x182)+'ole\x20n'+'eeded'+_0x3e5c02(0x695)+'\x20it\x20s'+_0x3e5c02(0x433)+_0x3e5c02(0x6d1)+_0x3e5c02(0x3ce)+'permo'+_0x3e5c02(0x185)+_0x3e5c02(0x3cf)+_0x3e5c02(0x1ac)+'ectin'+_0x3e5c02(0x6df)+'o\x20the'+_0x3e5c02(0x188)+_0x3e5c02(0x52b)+'gin\x20g'+_0x3e5c02(0x1f7)+_0x3e5c02(0x4e7)+'</pre'+'>','mHnYb':'#sw2-'+'build','bGabY':_0x3e5c02(0x2df)+'toggl'+'e','BAkrM':_0x3e5c02(0x2df)+_0x3e5c02(0x82e),'kDMrv':'#sw2-'+'facto'+'r','AUwFV':_0x3e5c02(0x2df)+_0x3e5c02(0x523)+'rlabe'+'l','xgSBL':_0x3e5c02(0x2df)+'hint','gkrzM':function(_0x2c39f5,_0x201163){return _0x2c39f5!==_0x201163;},'ihfQS':_0x3e5c02(0x1d2)+'\x20\x20\x20\x20','UMxKk':_0x3e5c02(0x58d)+'ntext'+'\x20','VWghi':'\x20\x20\x20ty'+_0x3e5c02(0x622),'DQurs':'\x20appl'+_0x3e5c02(0x7b6),'HuqVD':_0x3e5c02(0x2e5)+_0x3e5c02(0x177)+_0x3e5c02(0x7e1)+_0x3e5c02(0x4c3)+_0x3e5c02(0x7fc)+_0x3e5c02(0x5ee)+_0x3e5c02(0x533)+_0x3e5c02(0x40e)+_0x3e5c02(0x37c)+_0x3e5c02(0x5dc)+_0x3e5c02(0x698)+_0x3e5c02(0x550)+'means','UDOHN':_0x3e5c02(0x59e)+'date\x20'+'ran\x20y'+_0x3e5c02(0x222)+'r\x20the'+'\x20sign'+_0x3e5c02(0x7b3)+'\x20did\x20'+'not\x20m'+'atch.','PjfJf':function(_0x1719e8,_0x1bd135){return _0x1719e8+_0x1bd135;},'PUlAj':'──\x20','dzNjP':'\x20\x20off'+_0x3e5c02(0x6a5)+_0x3e5c02(0x617)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20va'+'lue\x20\x20'+'\x20\x20\x20\x20\x20'+_0x3e5c02(0x6a8)+_0x3e5c02(0x506),'hcmkr':_0x3e5c02(0x6d5)+'r','NcRWR':function(_0x3c2ae4,_0x3fb8e7){return _0x3c2ae4+_0x3fb8e7;},'ZmBap':'\x20\x20!\x20','yUzdd':function(_0xf51d46){return _0xf51d46();},'shCoG':'repor'+'t','SpLPm':'color'+':','VzETH':function(_0x1a0045){return _0x1a0045();},'sborI':_0x3e5c02(0x756)+'6a','JHcaf':'#ff6e'+'74','cYuLA':function(_0x3a853b,_0x136a45){return _0x3a853b*_0x136a45;},'DKbLY':function(_0x591fbf,_0x442879){return _0x591fbf>_0x442879;},'VeGCe':function(_0x31b654,_0x5dc5ea){return _0x31b654/_0x5dc5ea;},'tyhys':function(_0x3a39e7,_0x325c09){return _0x3a39e7-_0x325c09;},'jzpYd':function(_0x1579d2,_0x11f422){return _0x1579d2+_0x11f422;},'DGFeb':function(_0x55baf1,_0x4aae53){return _0x55baf1*_0x4aae53;},'ScmvX':function(_0x16a465,_0x1cb4fb){return _0x16a465-_0x1cb4fb;},'xDpEV':_0x3e5c02(0x53d),'hTlIX':'WlPGy','XOmuh':function(_0x4fd2d1,_0x1f094b){return _0x4fd2d1!==_0x1f094b;},'eQyow':function(_0x524c18,_0x3b0804){return _0x524c18===_0x3b0804;},'IQgIr':_0x3e5c02(0x184)+'ion','uHCTt':function(_0x1ef83f){return _0x1ef83f();},'bJoHE':'moHRW','VAeuN':'orhRa','cTbcA':'log','fVEUf':_0x3e5c02(0x546),'kwxBC':_0x3e5c02(0x1b7),'Xegzz':_0x3e5c02(0x3bf),'xKqgI':function(_0x1e405b,_0x308202){return _0x1e405b<_0x308202;},'olrSc':'nlQyt','ikMRZ':'windo'+'w.','NtekQ':function(_0x526142,_0x4a8467){return _0x526142===_0x4a8467;},'fuLrv':_0x3e5c02(0x724)+'ntiat'+_0x3e5c02(0x6ea)+'aming','KZJLy':function(_0x460e70,_0x151494){return _0x460e70<_0x151494;},'iuuLR':function(_0x5ccc6c,_0x1ffd86){return _0x5ccc6c===_0x1ffd86;},'TjBZr':function(_0x32d7d6,_0x1e53b9){return _0x32d7d6!==_0x1e53b9;},'AjfPF':_0x3e5c02(0x7b8)+_0x3e5c02(0x3d0)+'eateP'+'lugin'+_0x3e5c02(0x2b0)+'ailab'+'le','ppOFa':'sakur'+'a-ski'+_0x3e5c02(0x178)+'z','EWuJQ':_0x3e5c02(0x2e7),'LcWLk':function(_0x23a9cb,_0x288e29){return _0x23a9cb+_0x288e29;},'PiiLk':function(_0x2639c8,_0x70c2d3){return _0x2639c8&_0x70c2d3;},'nCgRk':function(_0x58c94b,_0x35b0f6){return _0x58c94b(_0x35b0f6);},'ILMUE':function(_0x34c6af,_0x523a93){return _0x34c6af|_0x523a93;},'vOGXH':_0x3e5c02(0x5fe),'FeqAA':'XxjyV','cZtnI':'plugi'+_0x3e5c02(0x1ea)+_0x3e5c02(0x408)+'._gam'+'e','kqTIp':function(_0x254e30,_0x36974c){return _0x254e30!==_0x36974c;},'WfgDR':_0x3e5c02(0x71d),'YlwaS':'Runti'+'me.re'+_0x3e5c02(0x567)+_0x3e5c02(0x2fa)+')','lSzcD':function(_0x757de,_0x29b966){return _0x757de!==_0x29b966;},'UZohM':'QXPvC','MFKTf':function(_0x45d844,_0x45a3c4){return _0x45d844!==_0x45a3c4;},'yuuLQ':_0x3e5c02(0x3da),'yhGcd':_0x3e5c02(0x64e)+'t','WFJDA':'void','mAPCo':function(_0x650206,_0x2cab44){return _0x650206(_0x2cab44);},'VGTlI':function(_0x4d6bc4){return _0x4d6bc4();},'WObYV':'unity'+_0x3e5c02(0x538)+_0x3e5c02(0x2f3)+'apper','kIpRg':function(_0x44515f,_0x4c46d3){return _0x44515f+_0x4c46d3;},'iJpww':_0x3e5c02(0x2fb)+'APU8\x20'+_0x3e5c02(0x17a)+_0x3e5c02(0x816)+_0x3e5c02(0x38d)+_0x3e5c02(0x495)+_0x3e5c02(0x592)+_0x3e5c02(0x379)+_0x3e5c02(0x586)+'Runti'+'me.re'+'solve'+'Game('+_0x3e5c02(0x5aa)+_0x3e5c02(0x60b)+_0x3e5c02(0x7c4)+'\x20glob'+'al','SWkiS':function(_0xf0d5ef,_0x1aeb01){return _0xf0d5ef+_0x1aeb01;},'aDHFx':function(_0x2d9084,_0x5af44b){return _0x2d9084===_0x5af44b;},'bSJGM':_0x3e5c02(0x2d5),'WitjX':function(_0xe8e238,_0x3882d7){return _0xe8e238+_0x3882d7;},'FheMj':function(_0x43bd31,_0x4b1f5a){return _0x43bd31+_0x4b1f5a;},'fdDAT':function(_0x41121c,_0x1d6a34){return _0x41121c+_0x1d6a34;},'ouhqi':_0x3e5c02(0x36b),'hsavM':_0x3e5c02(0x604),'ZCvVn':'u32','zkqLG':function(_0x43487f,_0x33fa95){return _0x43487f>_0x33fa95;},'hjvnK':function(_0x42a4a0,_0x54c679){return _0x42a4a0+_0x54c679;},'LFIPd':_0x3e5c02(0x3de),'CRimt':function(_0x484698,_0x935e16){return _0x484698+_0x935e16;},'PEBNl':function(_0x4b29bb,_0x4b59bd){return _0x4b29bb<_0x4b59bd;},'CLrBO':function(_0x2e9b8a){return _0x2e9b8a();},'aGcER':function(_0xb2f531,_0x3c9039){return _0xb2f531>_0x3c9039;},'BldTB':function(_0x3b33c3,_0x551f2b){return _0x3b33c3+_0x551f2b;},'OJMat':function(_0x4a87b9,_0x455006){return _0x4a87b9+_0x455006;},'iFprU':_0x3e5c02(0x218),'NoGFw':function(_0x3792ab,_0x5d3439){return _0x3792ab===_0x5d3439;},'Uxcdl':function(_0x1f8375,_0x513236){return _0x1f8375|_0x513236;},'BGgEv':function(_0x172f0b,_0x2df057){return _0x172f0b!==_0x2df057;},'MVpwG':_0x3e5c02(0x1af)+'e','ywDOi':'i32','KkdGu':function(_0x356046,_0x30f34b){return _0x356046(_0x30f34b);},'wPNkA':function(_0x258e95,_0x160cca){return _0x258e95>_0x160cca;},'xRWLX':_0x3e5c02(0x277),'JnhEd':'mhDKW','yDqxc':function(_0x3eb507,_0x4638ee){return _0x3eb507^_0x4638ee;},'UuTJf':function(_0x4844c8,_0x224efb){return _0x4844c8&_0x224efb;},'RhBXY':_0x3e5c02(0x248),'nwkcc':_0x3e5c02(0x205),'XBIQC':function(_0x272560,_0x263a95){return _0x272560+_0x263a95;},'yScXl':function(_0x482c74,_0x43ca71){return _0x482c74===_0x43ca71;},'gagsp':_0x3e5c02(0x39e),'szmUp':function(_0x5637c5,_0x493d56,_0x1c8df4){return _0x5637c5(_0x493d56,_0x1c8df4);},'XITyi':function(_0x2137d8,_0x357b12){return _0x2137d8||_0x357b12;},'fLWuZ':function(_0x396adb,_0x580448){return _0x396adb|_0x580448;},'PmwlY':function(_0x574064,_0x3c7a1c){return _0x574064^_0x3c7a1c;},'yqvgx':function(_0x629aec,_0x30a7c3){return _0x629aec!==_0x30a7c3;},'HaHaL':function(_0x3f6bb4,_0x3a9d9c){return _0x3f6bb4^_0x3a9d9c;},'kwHPi':_0x3e5c02(0x29d),'mbeSn':function(_0x24883a,_0x5c2954){return _0x24883a===_0x5c2954;},'plBlu':function(_0x428f84,_0x4321af){return _0x428f84&_0x4321af;},'RMdFL':function(_0x2b9741,_0x4d7d97,_0x42d289,_0x406bb4){return _0x2b9741(_0x4d7d97,_0x42d289,_0x406bb4);},'vcyIw':function(_0x1289e4,_0x47c17b){return _0x1289e4+_0x47c17b;},'gHcQi':function(_0x12798d,_0x4ec837,_0x33a44c,_0x1a185b){return _0x12798d(_0x4ec837,_0x33a44c,_0x1a185b);},'PMwZt':function(_0x288388,_0x25b1cf){return _0x288388===_0x25b1cf;},'oTIFI':function(_0x4c7753,_0x9a5636){return _0x4c7753===_0x9a5636;},'bYTQD':function(_0x183354,_0x561b32,_0x2d240e,_0x1864fb){return _0x183354(_0x561b32,_0x2d240e,_0x1864fb);},'KhPlb':function(_0x56df52,_0x5c0f92){return _0x56df52+_0x5c0f92;},'OtvpW':_0x3e5c02(0x306)+_0x3e5c02(0x53b),'puoJX':function(_0x53d1c6,_0x468143){return _0x53d1c6(_0x468143);},'sPfKZ':function(_0x2f6cd6,_0x29becd){return _0x2f6cd6===_0x29becd;},'euQOS':'ckIHw','fZtcW':function(_0x467c07,_0x5eb442){return _0x467c07!==_0x5eb442;},'XskFM':function(_0x1b1bb8,_0x58d3bd,_0x11b4b7,_0x4e2b5a){return _0x1b1bb8(_0x58d3bd,_0x11b4b7,_0x4e2b5a);},'tjNYk':function(_0x2fa2eb,_0x446507){return _0x2fa2eb!==_0x446507;},'LhLKL':_0x3e5c02(0x311)+'usibl'+'e','JSpxz':function(_0xc317ad,_0x538fd9){return _0xc317ad>_0x538fd9;},'YaaCP':function(_0x11d062,_0x1e9ff9){return _0x11d062+_0x1e9ff9;},'MYowu':function(_0x456375,_0x4e4de3){return _0x456375+_0x4e4de3;},'WdBEb':function(_0x5ec93d,_0x5e1e4d){return _0x5ec93d>=_0x5e1e4d;},'DEwoQ':'jVeXr','xbgAX':function(_0x4495cb,_0x272c3b){return _0x4495cb===_0x272c3b;},'PblWu':function(_0x18a0b4,_0xb98bb4){return _0x18a0b4-_0xb98bb4;},'GCIWR':function(_0x1adb6b){return _0x1adb6b();},'bSnOa':function(_0x1415e2,_0x449e9c){return _0x1415e2===_0x449e9c;},'VytJv':'KYUIn','cHYmV':'lVpJg','xzykf':'Bjbbv','Ydhjm':_0x3e5c02(0x1c8)+'|2|4|'+_0x3e5c02(0x381),'yNvWY':function(_0x416ab6,_0x9ae183){return _0x416ab6!==_0x9ae183;},'xXEVV':function(_0x2917af){return _0x2917af();},'aXDJa':function(_0x1d949e,_0x5581ef){return _0x1d949e+_0x5581ef;},'hFqxH':function(_0x1f9b70,_0x2126cb){return _0x1f9b70-_0x2126cb;},'xrVeq':'yBzQz','nkUOU':function(_0x2231fd,_0x2469f7){return _0x2231fd+_0x2469f7;},'HlmUL':function(_0x14b6af,_0x415455){return _0x14b6af(_0x415455);},'ZoVSa':function(_0x2bbc30,_0x4ff4ef){return _0x2bbc30>_0x4ff4ef;},'tZCro':function(_0x1e015d,_0x40bdf6){return _0x1e015d!==_0x40bdf6;},'kyHMi':'NPtnD','zDQGv':_0x3e5c02(0x7bc)+_0x3e5c02(0x27b),'oUKjp':function(_0x3e0f8f){return _0x3e0f8f();},'KkFii':function(_0x1968ae,_0x29b4db){return _0x1968ae>_0x29b4db;},'ATEoE':function(_0x646bbb,_0x21fd5f){return _0x646bbb<_0x21fd5f;},'gcziG':'undef'+_0x3e5c02(0x7de),'hIhij':function(_0x4cb5b5,_0x1f941a){return _0x4cb5b5===_0x1f941a;},'DMzcX':'FFvAD','HkPFw':function(_0x457d56,_0x1ebbc2){return _0x457d56!==_0x1ebbc2;},'QZBoO':function(_0x439af0,_0x56d12e){return _0x439af0!==_0x56d12e;},'hNhld':function(_0x45d7b3,_0x203323,_0x14b276,_0x5de5d2){return _0x45d7b3(_0x203323,_0x14b276,_0x5de5d2);},'wVlbp':function(_0x3d3ace,_0x787abd){return _0x3d3ace+_0x787abd;},'nSaVm':'BAccP','JdOwK':function(_0x563025,_0x301e2a,_0x4d432b){return _0x563025(_0x301e2a,_0x4d432b);},'oLyWx':_0x3e5c02(0x7ff),'Cxffu':function(_0x42d52a,_0x3c9133,_0x58ba9d){return _0x42d52a(_0x3c9133,_0x58ba9d);},'oDICt':function(_0x16080b,_0x11e754){return _0x16080b>>>_0x11e754;},'pLEhi':_0x3e5c02(0x4de)+_0x3e5c02(0x771)+_0x3e5c02(0x508)+_0x3e5c02(0x368)+'OK\x20OV'+'ER\x20wi'+'ndow.'+_0x3e5c02(0x330)+_0x3e5c02(0x561)+'dkit.'+'\x20The\x20'+_0x3e5c02(0x7b8)+'me\x20we'+_0x3e5c02(0x2cf)+_0x3e5c02(0x42e)+'\x20','VCIDC':_0x3e5c02(0x723)+'a/UWM'+_0x3e5c02(0x7f1)+_0x3e5c02(0x4dc)+'n\x20Tam'+_0x3e5c02(0x5fa)+'nkey\x20'+'and\x20h'+_0x3e5c02(0x7cd)+_0x3e5c02(0x24c)+'.','bKDAf':'no\x20gr'+_0x3e5c02(0x457)+'f\x20','TrmDU':'hPveC','iIjTQ':function(_0x36d80f,_0x2b8462,_0x2821d7){return _0x36d80f(_0x2b8462,_0x2821d7);},'ONPFY':_0x3e5c02(0x400)+'hScri'+'pt','AOgLH':_0x3e5c02(0x38f)+_0x3e5c02(0x33e),'ydZYB':function(_0x4c065a,_0x152f24,_0x2956bb){return _0x4c065a(_0x152f24,_0x2956bb);},'JzrUG':function(_0x54066b,_0x37ca0b){return _0x54066b===_0x37ca0b;},'fwQIU':_0x3e5c02(0x612),'UdlYA':function(_0x3d1f35,_0xeb1a6d){return _0x3d1f35+_0xeb1a6d;},'wyTXn':function(_0x2d7b32,_0x4b21ca){return _0x2d7b32>>>_0x4b21ca;},'hSKxy':_0x3e5c02(0x6e4)+_0x3e5c02(0x221)+'etwor'+_0x3e5c02(0x4f6)+_0x3e5c02(0x7a1)+_0x3e5c02(0x53f)+_0x3e5c02(0x54d)+_0x3e5c02(0x43b)+'nd\x20no'+_0x3e5c02(0x7e2)+_0x3e5c02(0x3c7)+_0x3e5c02(0x48d)+'That\x20'+'is\x20wh'+_0x3e5c02(0x82f),'RJbOk':function(_0x14fad7,_0x4e4774){return _0x14fad7+_0x4e4774;},'YGHaI':function(_0x5ca21a,_0x36ea98){return _0x5ca21a===_0x36ea98;},'PwvSr':'obf','xSIsE':function(_0x11b3a4,_0x56a5e5){return _0x11b3a4===_0x56a5e5;},'AKCuC':function(_0x515c7b,_0x3ac459){return _0x515c7b+_0x3ac459;},'GWpFb':function(_0x163c20,_0x5dab0e){return _0x163c20+_0x5dab0e;},'aaMsb':_0x3e5c02(0x328),'QFjzB':function(_0x43cebe,_0x18df15){return _0x43cebe===_0x18df15;},'VNXSG':function(_0x4e66c5,_0x356489,_0x32c4d0,_0x2bd421){return _0x4e66c5(_0x356489,_0x32c4d0,_0x2bd421);},'HRYoH':_0x3e5c02(0x36c),'YWkto':function(_0x140fac,_0x5bedf5){return _0x140fac===_0x5bedf5;},'EVssT':_0x3e5c02(0x81b),'QCQhz':function(_0x526dbb,_0x26e93e){return _0x526dbb+_0x26e93e;},'zfAEl':function(_0x496f1d,_0x3c675b){return _0x496f1d+_0x3c675b;},'Qfreo':function(_0x5edd20,_0x198a53){return _0x5edd20+_0x198a53;},'bnlnd':_0x3e5c02(0x6ae)+'VE','Nvfla':_0x3e5c02(0x5e0)+_0x3e5c02(0x6db)+_0x3e5c02(0x3c2)+_0x3e5c02(0x713),'nuzRw':_0x3e5c02(0x5da)+_0x3e5c02(0x165)+_0x3e5c02(0x39a),'jalDV':'obfB','QRjUX':function(_0x5872b4,_0x1496be){return _0x5872b4===_0x1496be;},'ZSvDw':function(_0x4e8304,_0x2fc77a){return _0x4e8304===_0x2fc77a;},'mwrCr':_0x3e5c02(0x776),'rmcgS':_0x3e5c02(0x2c6)+_0x3e5c02(0x3b3)+'0','zVEpo':'yPOAD','EdfNO':_0x3e5c02(0x635)+'|3|1|'+_0x3e5c02(0x6ec),'Rbeju':function(_0x367d85,_0x36a5bd){return _0x367d85===_0x36a5bd;},'ufTZh':_0x3e5c02(0x833),'eoiOx':_0x3e5c02(0x85e)+_0x3e5c02(0x719),'XyGDm':_0x3e5c02(0x69e)+_0x3e5c02(0x4dd)+'t','zNNkj':'#2a0f'+'1b','YFlqk':'PeHLQ','KUNuT':'boole'+'an','qkhjH':function(_0x29c15e,_0x400ac8,_0x437bcd){return _0x29c15e(_0x400ac8,_0x437bcd);},'ktFus':'pWIiH','pTtbS':_0x3e5c02(0x363)+'oth','hTbmN':'#f7ee'+'f5','MFNAQ':'lNjkH','Lbjgc':_0x3e5c02(0x270)+'le','vnlAJ':_0x3e5c02(0x76b),'iSScD':'div','pTjkc':function(_0x33851b,_0x538ca2){return _0x33851b+_0x538ca2;},'pbJiT':'backg'+_0x3e5c02(0x512)+_0x3e5c02(0x385)+_0x3e5c02(0x337)+'2,29,'+'.92);'+'borde'+_0x3e5c02(0x180)+'\x20soli'+_0x3e5c02(0x1ef)+_0x3e5c02(0x415)+_0x3e5c02(0x2f5)+_0x3e5c02(0x40f)+_0x3e5c02(0x373)+_0x3e5c02(0x6c4)+'-radi'+'us:10'+_0x3e5c02(0x7fa),'oXDzi':'paddi'+_0x3e5c02(0x2ca)+_0x3e5c02(0x2ba)+';font'+_0x3e5c02(0x628)+_0x3e5c02(0x4f9)+_0x3e5c02(0x230)+'onosp'+'ace,C'+_0x3e5c02(0x727)+_0x3e5c02(0x644)+_0x3e5c02(0x48f)+_0x3e5c02(0x490)+'lor:#'+_0x3e5c02(0x26c)+'5;','uHLzw':'box-s'+_0x3e5c02(0x832)+_0x3e5c02(0x2f6)+_0x3e5c02(0x2a9)+_0x3e5c02(0x5f2)+_0x3e5c02(0x81f)+_0x3e5c02(0x5f8)+'ser-s'+'elect'+_0x3e5c02(0x3ea)+';-web'+'kit-u'+_0x3e5c02(0x263)+'elect'+_0x3e5c02(0x3ea)+';','xgHdW':'<div\x20'+_0x3e5c02(0x7bb)+'a=\x22st'+_0x3e5c02(0x6b6)+_0x3e5c02(0x60e)+_0x3e5c02(0x4ba)+_0x3e5c02(0x59a)+_0x3e5c02(0x161)+'ax-wi'+'dth:2'+_0x3e5c02(0x16e)+_0x3e5c02(0x6e6)+'iv>','Eegkp':function(_0x15ba90,_0x255b88){return _0x15ba90+_0x255b88;},'DZONS':function(_0x54216e,_0x559674){return _0x54216e+_0x559674;},'qnkfV':function(_0x33fd59,_0x4760ed){return _0x33fd59+_0x4760ed;},'IWlIC':_0x3e5c02(0x439)+'on\x20da'+_0x3e5c02(0x217)+'\x22esp\x22'+_0x3e5c02(0x81e)+_0x3e5c02(0x316)+_0x3e5c02(0x19c)+'und:t'+_0x3e5c02(0x6d3)+'arent'+';bord'+_0x3e5c02(0x64f)+_0x3e5c02(0x566)+_0x3e5c02(0x499)+_0x3e5c02(0x2aa)+'5,143'+_0x3e5c02(0x401)+_0x3e5c02(0x1b2),'TCHKL':_0x3e5c02(0x439)+'on\x20da'+_0x3e5c02(0x217)+_0x3e5c02(0x482)+_0x3e5c02(0x7e9)+_0x3e5c02(0x2ae)+'argin'+_0x3e5c02(0x487)+_0x3e5c02(0x2cc)+_0x3e5c02(0x4cb)+_0x3e5c02(0x66d)+'d:tra'+_0x3e5c02(0x16d)+'ent;b'+'order'+_0x3e5c02(0x2f9)+'solid'+_0x3e5c02(0x281)+_0x3e5c02(0x866)+_0x3e5c02(0x83f)+'77,.4'+_0x3e5c02(0x410),'zuNeY':_0x3e5c02(0x42b)+'>','pobth':_0x3e5c02(0x376),'IYWqZ':function(_0x39f587,_0x3bf273){return _0x39f587!==_0x3bf273;},'yGFmo':'ZdKML','HxJDg':_0x3e5c02(0x3a1)+'ra-sw'+_0x3e5c02(0x671)+_0x3e5c02(0x22f)+_0x3e5c02(0x6fb)+'}','nRhKL':function(_0x4a390a,_0x3e7c20){return _0x4a390a(_0x3e7c20);},'Jffkz':function(_0x64b763){return _0x64b763();},'KXVbY':function(_0x2d7dfd,_0x2a7883){return _0x2d7dfd===_0x2a7883;},'oECfd':_0x3e5c02(0x55b),'XgBlQ':function(_0x16e341,_0x400ecf){return _0x16e341/_0x400ecf;},'NSWTw':function(_0x11ae4e,_0x43f1d6){return _0x11ae4e+_0x43f1d6;},'ifevK':function(_0x9c39dd,_0x3ad852){return _0x9c39dd+_0x3ad852;},'gBNWc':'\x20\x20hoo'+'ks\x20','MbwOy':function(_0x3b194a,_0x3f0a24){return _0x3b194a+_0x3f0a24;},'SSNdj':function(_0x4e6e7b,_0x2ffc5e){return _0x4e6e7b+_0x2ffc5e;},'IPEqT':_0x3e5c02(0x4cd)+'\x20','jOUzK':function(_0x2624dd,_0x578a0b){return _0x2624dd(_0x578a0b);},'ZRxCM':function(_0x217944,_0x5dc510){return _0x217944===_0x5dc510;},'Fviut':function(_0x22e7b9,_0x1e5327){return _0x22e7b9===_0x1e5327;},'dpdsj':'JrWkQ','AHeFf':function(_0x20e9dd,_0x17f953){return _0x20e9dd===_0x17f953;},'bvCCr':function(_0x5d6d9d,_0x389c11){return _0x5d6d9d>>>_0x389c11;},'biRQU':'f32','fPpoV':function(_0x190faa,_0x6f29b6){return _0x190faa+_0x6f29b6;},'IGZDJ':function(_0x5f3319,_0x434d72,_0x359afb,_0x17a764){return _0x5f3319(_0x434d72,_0x359afb,_0x17a764);},'pgWvt':function(_0x44c57a,_0x265080){return _0x44c57a+_0x265080;},'zXemG':function(_0x4d4538,_0x24dc2c){return _0x4d4538!==_0x24dc2c;},'brgEF':'OfwJs','LRwwy':'6|0|5'+'|2|1|'+'3|4','Wuwde':function(_0xcdab30,_0x5533b0,_0x53b80c){return _0xcdab30(_0x5533b0,_0x53b80c);},'STkbe':function(_0x225d84,_0x5944fe){return _0x225d84+_0x5944fe;},'OJIHx':_0x3e5c02(0x38c),'CSOFb':function(_0x194363,_0x4816cb){return _0x194363*_0x4816cb;},'mKZJV':function(_0x52f257,_0x263193){return _0x52f257*_0x263193;},'RtKmJ':function(_0x41b014,_0x525d15){return _0x41b014*_0x525d15;},'igBKo':function(_0x117f0d,_0x3457b6){return _0x117f0d<=_0x3457b6;},'FZbPE':function(_0x374d0b,_0x38dda7){return _0x374d0b*_0x38dda7;},'idxSB':function(_0x106b83,_0x5dd158){return _0x106b83+_0x5dd158;},'nZLQZ':function(_0x61975e,_0x2857d8){return _0x61975e-_0x2857d8;},'TWRdu':function(_0x159a2e,_0x459d92){return _0x159a2e*_0x459d92;},'jHaiv':function(_0x510298,_0x3cbecf){return _0x510298*_0x3cbecf;},'YhfkM':function(_0x21e102,_0x1d9522){return _0x21e102*_0x1d9522;},'sREDW':function(_0x2e9379,_0x4c6370){return _0x2e9379*_0x4c6370;},'yJDYH':function(_0x2acfad,_0x347ed6){return _0x2acfad<_0x347ed6;},'FhwYk':function(_0x1f67e7,_0x2d1fc2){return _0x1f67e7>_0x2d1fc2;},'KTSJY':function(_0x1a91a5,_0x5c9fd4){return _0x1a91a5*_0x5c9fd4;},'YdcYE':function(_0x14fc66,_0x5280bc){return _0x14fc66+_0x5280bc;},'qSDRV':function(_0x5e3562,_0x66a2da){return _0x5e3562*_0x66a2da;},'InYhY':function(_0x12c0e8,_0x3fd909,_0x5aadc6){return _0x12c0e8(_0x3fd909,_0x5aadc6);},'BCLND':function(_0x1dd83a,_0x2bc8dc){return _0x1dd83a+_0x2bc8dc;},'WctxS':function(_0x2626f7,_0x16813a,_0x10d98a){return _0x2626f7(_0x16813a,_0x10d98a);},'JETuZ':function(_0x20df5b,_0xa9e6c2,_0x3f78c7,_0x55d4aa){return _0x20df5b(_0xa9e6c2,_0x3f78c7,_0x55d4aa);},'nGwhh':function(_0x261499,_0xa666c9){return _0x261499===_0xa666c9;},'QHYfT':function(_0x41cfa1,_0x413ce4){return _0x41cfa1-_0x413ce4;},'HRddu':function(_0x4db582,_0x6cdaa4){return _0x4db582+_0x6cdaa4;},'rbFQE':function(_0xa2500a,_0x5640af){return _0xa2500a+_0x5640af;},'iJEWe':function(_0x2d17d2,_0x1737d1){return _0x2d17d2+_0x1737d1;},'Jsule':_0x3e5c02(0x51a),'RwkzG':_0x3e5c02(0x389)+_0x3e5c02(0x749),'anKfJ':_0x3e5c02(0x3a1)+'ra-es'+_0x3e5c02(0x680),'urjsM':function(_0x1c57a7,_0xf15579){return _0x1c57a7===_0xf15579;},'sGXsH':'PVCbe','pWfgZ':'sakur'+_0x3e5c02(0x280)+'es','CvXbK':function(_0x31363f,_0x5342bb){return _0x31363f!==_0x5342bb;},'LYnHX':_0x3e5c02(0x389)+_0x3e5c02(0x798),'oiVyX':function(_0x369f98,_0x38695a){return _0x369f98+_0x38695a;},'ArVYw':function(_0x1c3871,_0x9fe2e9,_0x13a6e5,_0x1a42a9){return _0x1c3871(_0x9fe2e9,_0x13a6e5,_0x1a42a9);},'ivDKI':function(_0x4f6667,_0x14a4a9){return _0x4f6667===_0x14a4a9;},'QqfQv':function(_0x2ea62f,_0x1d8f47){return _0x2ea62f===_0x1d8f47;},'aTwGS':_0x3e5c02(0x520),'ZyfeA':function(_0x5ef918,_0x21b817){return _0x5ef918===_0x21b817;},'iqsvV':function(_0x2faffb,_0x2a5302,_0x239929,_0x460183,_0x75ef22){return _0x2faffb(_0x2a5302,_0x239929,_0x460183,_0x75ef22);},'zwmUO':function(_0x41bb0a,_0x3276bf){return _0x41bb0a-_0x3276bf;},'TDrsP':function(_0x5410c2,_0x35f555){return _0x5410c2-_0x35f555;},'FrrbR':_0x3e5c02(0x85d),'qHLBW':'10px\x20'+_0x3e5c02(0x660)+'nospa'+'ce,Co'+'nsola'+_0x3e5c02(0x493)+_0x3e5c02(0x633)+'e','TAZnE':function(_0x2c2ea8,_0x3ebb31){return _0x2c2ea8/_0x3ebb31;},'Nqbnm':function(_0x237adb,_0x2cfa7e){return _0x237adb===_0x2cfa7e;},'DRHKf':'NcreR','LITSu':function(_0x4a69b4,_0x872fb8){return _0x4a69b4*_0x872fb8;},'Cjdab':function(_0x2cdada,_0x1b623b){return _0x2cdada/_0x1b623b;},'wYGXY':function(_0x9c5f8a,_0x5b3c3f,_0x380099,_0xad53ab){return _0x9c5f8a(_0x5b3c3f,_0x380099,_0xad53ab);},'MIjWE':function(_0x219ba2,_0x5b67f0){return _0x219ba2===_0x5b67f0;},'urjCC':function(_0x116f75,_0x444af9){return _0x116f75===_0x444af9;},'UsSrC':'qFizH','QbrVU':function(_0x581dec,_0xd311ab){return _0x581dec-_0xd311ab;},'oAsnP':function(_0x4a3997,_0x15ff1b){return _0x4a3997/_0x15ff1b;},'wipKY':function(_0x2635b6,_0x512845){return _0x2635b6*_0x512845;},'ihgyQ':function(_0x9a4a88,_0x19acbd){return _0x9a4a88+_0x19acbd;},'EdLRy':function(_0x23d393,_0x81a618){return _0x23d393+_0x81a618;},'eFZck':function(_0x117c6a,_0x7ce5af){return _0x117c6a+_0x7ce5af;},'vIDlV':_0x3e5c02(0x1ca),'CMCYK':function(_0x44da64){return _0x44da64();},'aNTsJ':_0x3e5c02(0x18a),'HVUxc':function(_0x44b555,_0x313f29){return _0x44b555===_0x313f29;},'YeFqK':'WCruc','WByqo':_0x3e5c02(0x47d)+'|2|0|'+'5|8|6'+'|3','azTzy':function(_0x554432){return _0x554432();},'vyVTL':function(_0x458695,_0x3cf3b9){return _0x458695===_0x3cf3b9;},'yMYps':function(_0x11bcb7,_0x9fc587){return _0x11bcb7!==_0x9fc587;},'kWKWM':function(_0x3b3c1c,_0x5a5f12){return _0x3b3c1c+_0x5a5f12;},'CKerl':_0x3e5c02(0x435),'LCyDl':_0x3e5c02(0x73b),'KTTns':function(_0x353ce0,_0x7f4684){return _0x353ce0(_0x7f4684);},'NHmwB':'F9\x20tw'+'ice\x20w'+_0x3e5c02(0x4d1)+'walki'+_0x3e5c02(0x68b)+'sprin'+'ting\x20'+_0x3e5c02(0x4c8)+_0x3e5c02(0x41e)+'marks'+_0x3e5c02(0x3d3)+_0x3e5c02(0x3e7)+_0x3e5c02(0x2b2)+_0x3e5c02(0x3d3)+'h.','RlmMd':function(_0x46cf24,_0x3b9b55){return _0x46cf24!==_0x3b9b55;},'GvHss':_0x3e5c02(0x2f1)+_0x3e5c02(0x835),'eEIPx':'eZCNi','ZmGpo':_0x3e5c02(0x6f5),'IirZm':_0x3e5c02(0x229),'PWdyl':function(_0x1e7bb5,_0x14217e){return _0x1e7bb5(_0x14217e);},'Vxdyz':function(_0x2805c6,_0xebfe22){return _0x2805c6!==_0xebfe22;},'QYgLZ':_0x3e5c02(0x2db),'mNuPP':'gXZAz','pkuzr':function(_0x9d378c){return _0x9d378c();},'GEMuu':function(_0x68fa7e,_0xd9fa47){return _0x68fa7e+_0xd9fa47;},'pcyeK':function(_0x557647,_0x3325e6){return _0x557647===_0x3325e6;},'JeOBm':function(_0x110529,_0x459294){return _0x110529!==_0x459294;},'rEKJR':function(_0x345c73,_0x22ab9b){return _0x345c73===_0x22ab9b;},'fezMB':function(_0x543e1e,_0x5db104){return _0x543e1e===_0x5db104;},'xWuea':function(_0x1856df,_0x31de86){return _0x1856df+_0x31de86;},'flFFq':'ESP:\x20','ZAGXa':function(_0x373266,_0x514d30){return _0x373266+_0x514d30;},'tzsXC':function(_0x2dfada,_0x36ce29){return _0x2dfada+_0x36ce29;},'GqeVf':function(_0x98594a,_0x2d70ca){return _0x98594a+_0x2d70ca;},'fACMP':function(_0x480697,_0x3acbf3){return _0x480697+_0x3acbf3;},'hMzVe':_0x3e5c02(0x1e4)+_0x3e5c02(0x198)+_0x3e5c02(0x305)+'t\x20','RSxqC':'\x20(sou'+'rce:\x20','IiJLA':_0x3e5c02(0x2d7),'FiItd':_0x3e5c02(0x1b5),'yhuMp':_0x3e5c02(0x5db),'OBnxa':_0x3e5c02(0x55e),'HlOhJ':function(_0x26736b,_0x33d564){return _0x26736b===_0x33d564;},'PEVpi':function(_0x350133,_0x34be2f){return _0x350133+_0x34be2f;},'EZRMp':function(_0x24ba4f,_0x267feb){return _0x24ba4f+_0x267feb;},'IGXMJ':_0x3e5c02(0x850),'EXOLq':'Regis'+'tered'+'\x20','BbsvH':function(_0x26b592,_0x2e39a4){return _0x26b592+_0x2e39a4;},'mZnNF':_0x3e5c02(0x196)+_0x3e5c02(0x6d9)+_0x3e5c02(0x6af),'NkLfb':_0x3e5c02(0x6a2)+_0x3e5c02(0x318)+'o\x20a\x20t'+_0x3e5c02(0x174)+_0x3e5c02(0x7a7)+_0x3e5c02(0x694)+_0x3e5c02(0x7a9)+_0x3e5c02(0x3a8)+_0x3e5c02(0x1a6)+'he\x20si'+'gnatu'+_0x3e5c02(0x3b5),'ehEkb':_0x3e5c02(0x76c)+_0x3e5c02(0x5d9)+'appli'+'ed\x20bu'+_0x3e5c02(0x61a)+'FPSco'+'ntrol'+_0x3e5c02(0x47a)+_0x3e5c02(0x513)+_0x3e5c02(0x649)+'et.\x20','zPzSA':'Eithe'+_0x3e5c02(0x624)+_0x3e5c02(0x5d9)+'not\x20i'+'n\x20a\x20r'+'ound,'+_0x3e5c02(0x220)+_0x3e5c02(0x3f1)+_0x3e5c02(0x7c7)+'\x20on\x20t'+_0x3e5c02(0x211)+'ong\x20o'+'verlo'+_0x3e5c02(0x6f7),'YlzoX':_0x3e5c02(0x291)+_0x3e5c02(0x4db)+'\x20Skil'+'lWarz'+'\x20repo'+'rt','ValON':function(_0x143d7f,_0xec7a7b){return _0x143d7f+_0xec7a7b;},'hsDyr':function(_0x463ba9,_0x817ce3){return _0x463ba9!==_0x817ce3;},'BanRD':'vGcws','LzKDl':function(_0xc2f9fa,_0x572aa1,_0x21823e){return _0xc2f9fa(_0x572aa1,_0x21823e);},'Bdzbb':function(_0x1b7a41,_0x5809e7){return _0x1b7a41!==_0x5809e7;},'TlKfx':_0x3e5c02(0x1f3),'cPlXC':function(_0x5bc053,_0x239359){return _0x5bc053&&_0x239359;},'oDGJg':'#ff8f'+'b1','uobYZ':_0x3e5c02(0x1b8)+_0x3e5c02(0x31a)+'w_v2','pWJcC':'===SA'+'KURA-'+_0x3e5c02(0x34e)+_0x3e5c02(0x358)+'BEGIN'+'===','mCrzh':_0x3e5c02(0x3a9)+_0x3e5c02(0x447)+'SKILL'+'WARZ-'+_0x3e5c02(0x653)+'=','StcHn':_0x3e5c02(0x7be),'uSYfZ':'sakur'+'a-sw-'+'panel'+'-hidd'+'en','eJkfZ':function(_0x120d16){return _0x120d16();},'Blqsm':'DOMCo'+_0x3e5c02(0x16b)+'Loade'+'d','nHNzw':';font'+'-weig'+'ht:70'+_0x3e5c02(0x77e)+_0x3e5c02(0x413)+_0x3e5c02(0x3fd)+'x','GrivD':function(_0x3600c2,_0x467aad,_0x48c421){return _0x3600c2(_0x467aad,_0x48c421);},'eCGAP':_0x3e5c02(0x269)+'ge','CnTcb':_0x3e5c02(0x5b0)+'nMana'+_0x3e5c02(0x30a),'QFMMV':_0x3e5c02(0x53f)+_0x3e5c02(0x54d)+_0x3e5c02(0x43f),'EdKqf':_0x3e5c02(0x488)+_0x3e5c02(0x450),'UqjvW':'0x10','yygOo':'photo'+_0x3e5c02(0x41b),'LePIV':'0x20','tDiYI':_0x3e5c02(0x69e)+_0x3e5c02(0x636),'tqFIH':_0x3e5c02(0x7ee),'YzKqZ':'capsu'+'le','reNBH':'0xb4','KsqHs':'healt'+'h','bKOOS':_0x3e5c02(0x4bc),'AinAP':'team','RouIq':'0x7c','LGsyV':_0x3e5c02(0x618)+_0x3e5c02(0x473),'gCemn':'QFigO'};var _0x3feca0=location[_0x3e5c02(0x774)+_0x3e5c02(0x517)]||'',_0x22b5fc=/(^|\.)www\.crazygames\.com$/['test'](_0x3feca0),_0x542f94=/(^|\.)games\.crazygames\.com$/['test'](_0x3feca0),_0x431e44=/(^|\.)crazygames\.com$/['test'](_0x3feca0)&&!_0x22b5fc&&!_0x542f94,_0x9f8930=_0x22b5fc?_0x3e5c02(0x1cd)+'l':_0x542f94?_0x3e5c02(0x2d3)+'er':_0x3e5c02(0x260)+'r';if(_0x2670e0['cPlXC'](!_0x22b5fc,!_0x542f94)&&!_0x431e44)return;var _0xe12a9f=_0x2670e0['oDGJg'],_0x4c4dd1=_0x2670e0[_0x3e5c02(0x47f)],_0x5e1328=_0x2670e0['pWJcC'],_0xab8847=_0x2670e0[_0x3e5c02(0x752)],_0x56a163=_0x2670e0[_0x3e5c02(0x57c)];if(_0x542f94){window[_0x3e5c02(0x72a)+_0x3e5c02(0x7d3)+'stene'+'r']('messa'+'ge',function(_0x55731e){var _0x4dcca7=_0x3e5c02,_0x2acc20={'paVfL':function(_0x17c979,_0x5aee35){return _0x17c979<=_0x5aee35;},'LWFfM':function(_0x42229e,_0x54fbf9){return _0x42229e*_0x54fbf9;}},_0x43cdfc=_0x55731e[_0x4dcca7(0x430)];if(!_0x43cdfc||_0x43cdfc[_0x4dcca7(0x1b8)+_0x4dcca7(0x209)]!==_0x4c4dd1)return;try{if(window[_0x4dcca7(0x4dd)+'t']&&window[_0x4dcca7(0x4dd)+'t']!==window)window[_0x4dcca7(0x4dd)+'t'][_0x4dcca7(0x531)+_0x4dcca7(0x1e9)+'e'](_0x43cdfc,'*');if(window[_0x4dcca7(0x3cb)]&&_0x2670e0[_0x4dcca7(0x22d)](window[_0x4dcca7(0x3cb)],window))window['top'][_0x4dcca7(0x531)+_0x4dcca7(0x1e9)+'e'](_0x43cdfc,'*');}catch(_0x376e3b){}if(_0x43cdfc&&_0x43cdfc['kind']===_0x4dcca7(0x77d)){if(_0x2670e0[_0x4dcca7(0x813)](_0x2670e0[_0x4dcca7(0x619)],_0x2670e0[_0x4dcca7(0x619)])){if(_0x2670e0['bkDnU'](_0x5d907a)){_0x637c86(!![]);return;}_0x2670e0[_0x4dcca7(0x4e1)](_0x1120ed);}else try{if(_0x2670e0[_0x4dcca7(0x2be)]!==_0x2670e0[_0x4dcca7(0x2be)]){var _0xfe5f34=_0x25a013[_0x4dcca7(0x444)+'em'](_0x31d566);if(_0xfe5f34)_0x57454[_0x4dcca7(0x61c)]=_0x4deac3['min'](-0x149d+-0x1bdc+0x59*0x8d,_0x1a4ed7[_0x4dcca7(0x285)](-0x2ef*0x5+-0x1*-0x162a+-0x1*0x761,_0x21530b(_0xfe5f34)||-0x9f9+-0x13*-0x7d+-0x2*-0x86));}else{var _0x12fb90=document[_0x4dcca7(0x4f2)+_0x4dcca7(0x572)+'torAl'+'l'](_0x2670e0[_0x4dcca7(0x35d)]);for(var _0x2daefd=0x5a8+0x1*0x3d7+0xd*-0xbb;_0x2670e0['JTgRf'](_0x2daefd,_0x12fb90[_0x4dcca7(0x267)+'h']);_0x2daefd++){if('YKcxF'!==_0x4dcca7(0x417))try{if(_0x12fb90[_0x2daefd][_0x4dcca7(0x6e8)+'ntWin'+'dow'])_0x12fb90[_0x2daefd][_0x4dcca7(0x6e8)+_0x4dcca7(0x3f2)+_0x4dcca7(0x1d3)][_0x4dcca7(0x531)+_0x4dcca7(0x1e9)+'e'](_0x43cdfc,'*');}catch(_0x4787cd){}else return _0x2acc20[_0x4dcca7(0x6b3)](_0x5ca92c[_0x4dcca7(0x47e)](_0x4cb646-_0x5bbc63),_0x9844c6[_0x4dcca7(0x285)](-0x7*0x270+0xdac+0x365,_0x2acc20[_0x4dcca7(0x169)](_0x5dc061[_0x4dcca7(0x47e)](_0x5da764),-0x1*-0x878+-0x2066+-0x3fd*-0x6+0.6)));}}}catch(_0x77362a){}}}),console[_0x3e5c02(0x29b)](_0x3e5c02(0x291)+'kura]'+'\x20SW-W'+_0x3e5c02(0x57b)+'R\x20ACT'+'IVE\x20('+_0x3e5c02(0x481)+_0x3e5c02(0x313)+'own)','color'+':'+_0xe12a9f);return;}if(_0x22b5fc){console[_0x3e5c02(0x29b)]('%c[sa'+_0x3e5c02(0x4db)+_0x3e5c02(0x4d2)+'AL\x20AC'+_0x3e5c02(0x864),'color'+':'+_0xe12a9f+(';font'+'-weig'+'ht:70'+'0'),{'host':_0x3feca0});var _0x516d7a={'set':function(){},'command':function(){}};function _0x2e4df0(_0x59700c,_0x27606d){var _0x3abf1b=_0x3e5c02;if(_0x3abf1b(0x2b9)===_0x2670e0[_0x3abf1b(0x3a5)])_0x1214c6(![]),_0xad5d71();else{var _0x476da4={'__sakura':_0x4c4dd1,'kind':_0x3abf1b(0x77d),'cmd':_0x59700c,'arg':_0x27606d};try{var _0x352136=document[_0x3abf1b(0x4f2)+_0x3abf1b(0x572)+_0x3abf1b(0x32d)+'l']('ifram'+'e');for(var _0x3e00e3=0x1f4c*-0x1+0x8a*-0x43+-0x21b5*-0x2;_0x3e00e3<_0x352136[_0x3abf1b(0x267)+'h'];_0x3e00e3++){try{if(_0x352136[_0x3e00e3]['conte'+_0x3abf1b(0x3f2)+'dow'])_0x352136[_0x3e00e3][_0x3abf1b(0x6e8)+_0x3abf1b(0x3f2)+_0x3abf1b(0x1d3)][_0x3abf1b(0x531)+_0x3abf1b(0x1e9)+'e'](_0x476da4,'*');}catch(_0x4a974f){}}}catch(_0x28ef97){}try{if(_0x2670e0[_0x3abf1b(0x22d)](_0x3abf1b(0x569),_0x2670e0[_0x3abf1b(0x3c4)]))return null;else{var _0x17a5fa=new BroadcastChannel('sakur'+'a-sw');_0x17a5fa['postM'+'essag'+'e'](_0x476da4),setTimeout(function(){var _0xaad2e8=_0x3abf1b;try{_0xaad2e8(0x6bb)===_0xaad2e8(0x4b0)?_0x16b02e[_0xaad2e8(0x484)+'onten'+'t']=_0x2ec127(_0x3c3b91[_0xaad2e8(0x74a)][_0xaad2e8(0x523)+'r'])[_0xaad2e8(0x20a)+'ed'](0x6*-0x146+-0xb*-0x202+-0xe71)+'x':_0x17a5fa['close']();}catch(_0x4c6e07){}},0x1d23*0x1+0x2*0xe82+-0x392d);}}catch(_0x261b52){}}}var _0x544747=_0x2670e0[_0x3e5c02(0x6cf)];function _0x4e334d(){var _0x4c5c1a=_0x3e5c02,_0x12d90f={'XFhcv':_0x2670e0[_0x4c5c1a(0x380)],'yTWzV':_0x2670e0['iAQzG']};if(_0x2670e0['ykoYX']===_0x4c5c1a(0x4ff)){if(_0x110296)_0x378941[_0x4c5c1a(0x82d)]['displ'+'ay']=_0xe53701?'':_0x4c5c1a(0x340);if(_0x33a8f2)_0x73b408[_0x4c5c1a(0x484)+'onten'+'t']=_0x4f6a89?'close':_0x12d90f[_0x4c5c1a(0x78f)];_0x187edf[_0x4c5c1a(0x82d)]['width']=_0xb0ba72?_0x4c5c1a(0x1ce)+_0x4c5c1a(0x79e)+_0x4c5c1a(0x56f):_0x4c5c1a(0x414),_0x243fc5[_0x4c5c1a(0x82d)]['backg'+_0x4c5c1a(0x512)]=_0x4856ed?_0x12d90f['yTWzV']:_0x4c5c1a(0x4e8)+_0x4c5c1a(0x1ec)+',29,.'+'9)';}else try{return _0x2670e0['NOnFJ'](localStorage[_0x4c5c1a(0x444)+'em'](_0x544747),'1');}catch(_0x4b6798){return![];}}function _0x4b0445(_0x5939bf){var _0x3eb5ab=_0x3e5c02,_0x5649d7={'YvKlQ':function(_0x864768,_0x51384d){return _0x864768/_0x51384d;},'hmikP':function(_0x1a1232,_0x345c52){return _0x1a1232+_0x345c52;},'WuXwz':_0x2670e0[_0x3eb5ab(0x239)],'pCiat':_0x3eb5ab(0x398),'sCRCW':'\x20bots','AoUzo':_0x2670e0[_0x3eb5ab(0x562)],'LHhTD':function(_0x243b3d,_0x453936){return _0x243b3d+_0x453936;},'meHno':_0x2670e0['rpTDL'],'UyPYv':function(_0x1f8d74,_0x1283a4){var _0x5608ce=_0x3eb5ab;return _0x2670e0[_0x5608ce(0x744)](_0x1f8d74,_0x1283a4);}};try{_0x5939bf?localStorage['setIt'+'em'](_0x544747,'1'):localStorage[_0x3eb5ab(0x640)+'eItem'](_0x544747);}catch(_0xb0f86f){}try{var _0x43f123=document['getEl'+_0x3eb5ab(0x3ba)+'ById'](_0x2670e0[_0x3eb5ab(0x82a)]);if(_0x43f123)_0x43f123['remov'+'e']();}catch(_0x4c8c51){}try{var _0x23e93b=document['getEl'+'ement'+'ById'](_0x3eb5ab(0x389)+_0x3eb5ab(0x29c)+'v2-ta'+'b');if(_0x2670e0[_0x3eb5ab(0x2f2)](_0x5939bf,!_0x23e93b)&&document[_0x3eb5ab(0x82e)]){var _0x1d72d8=document[_0x3eb5ab(0x2b6)+_0x3eb5ab(0x69c)+_0x3eb5ab(0x5c8)]('div');_0x1d72d8['id']=_0x3eb5ab(0x389)+'a-sw-'+_0x3eb5ab(0x431)+'b',_0x1d72d8[_0x3eb5ab(0x82d)]['cssTe'+'xt']=_0x2670e0[_0x3eb5ab(0x310)](_0x2670e0['lXvQk'](_0x2670e0[_0x3eb5ab(0x1d6)]+_0x2670e0[_0x3eb5ab(0x309)],_0xe12a9f),';')+(_0x3eb5ab(0x559)+_0x3eb5ab(0x557)+'ius:9'+_0x3eb5ab(0x522)+_0x3eb5ab(0x863)+'ng:4p'+_0x3eb5ab(0x24a)+_0x3eb5ab(0x83a)+'t:11p'+'x/1.4'+_0x3eb5ab(0x230)+'onosp'+_0x3eb5ab(0x594)+'onsol'+_0x3eb5ab(0x644)+'nospa'+_0x3eb5ab(0x219)),_0x1d72d8[_0x3eb5ab(0x484)+_0x3eb5ab(0x64b)+'t']='sakur'+'a',_0x1d72d8['oncli'+'ck']=function(){_0x4b0445(![]),_0x5448e2();},document[_0x3eb5ab(0x82e)][_0x3eb5ab(0x766)+'dChil'+'d'](_0x1d72d8);}else{if(!_0x5939bf&&_0x23e93b){if(_0x2670e0['NOnFJ'](_0x2670e0[_0x3eb5ab(0x176)],_0x3eb5ab(0x632))){var _0x121abb=_0xa87ffe();if(!_0x121abb||!_0x121abb['st'])return;try{var _0xd472e6=_0x331738[_0x3eb5ab(0x251)](_0x35b385&&_0x14669a[_0x3eb5ab(0x724)+'nces']||{})[_0x3eb5ab(0x267)+'h'],_0x59c30d=_0x4f8218&&_0x30d553[_0x3eb5ab(0x50a)]||null,_0x2de066=_0x59c30d?_0x59c30d[_0x3eb5ab(0x6e5)+_0x3eb5ab(0x7df)]||-0x127a*0x2+-0x3d6+0x28ca:0xd4*0x2+0x2*-0xdb8+0x19c8,_0x293f36=_0x59c30d?_0x59c30d['botCo'+_0x3eb5ab(0x1a7)]||0x108e+0x1*-0x18cd+0x83f:0x1aee+-0x474+-0x167a,_0x2983a2=_0x50a269?_0x5649d7[_0x3eb5ab(0x456)](_0x1033e0['buffe'+'r']['byteL'+_0x3eb5ab(0x479)],0x14f6dc+0xbedf9*-0x2+-0x1*-0x12e516)['toFix'+'ed'](0x61*-0x4d+0x4*-0x3d+0x3*0xa0b)+'MB':_0x3eb5ab(0x70f)+'m',_0x21940e=_0x5649d7['hmikP'](_0x5649d7[_0x3eb5ab(0x23f)](_0x5649d7['hmikP']('v'+(_0x506859&&_0x1529e2['versi'+'on']||_0x3d53be),_0x3eb5ab(0x702)+_0x3eb5ab(0x486))+(_0x28a282&&_0x401f99[_0x3eb5ab(0x4eb)+'Appli'+'ed']||0x265f+0x5*-0x541+-0x1*0xc1a),'/')+(_0x37c71f&&_0x4e1200[_0x3eb5ab(0x4eb)+_0x3eb5ab(0x4ee)]||0x9b+0xa*0x9b+0x37*-0x1f)+(_0x3eb5ab(0x268)+'s\x20'),_0xd472e6)+(_0x3eb5ab(0x366)+'\x20')+_0x2983a2+_0x5649d7['WuXwz']+_0x502795;_0x121abb['st']['textC'+'onten'+'t']=_0x21940e;var _0x3861da=_0x121abb[_0x3eb5ab(0x2dc)];_0x3861da&&(_0x3861da[_0x3eb5ab(0x484)+'onten'+'t']=_0x2de066>-0x19dd+-0x1ecf+-0x193*-0x24?_0x5649d7['hmikP'](_0x3eb5ab(0x57f)+_0x3eb5ab(0x492)+_0x2de066,_0x293f36?_0x5649d7['pCiat']+_0x293f36+_0x5649d7[_0x3eb5ab(0x201)]:'')+(_0x59c30d&&_0x59c30d[_0x3eb5ab(0x68f)+'a']?'\x20\x20cam'+'\x20'+_0x59c30d['camer'+_0x3eb5ab(0x5c5)]:_0x5649d7[_0x3eb5ab(0x78c)]):_0x5649d7['LHhTD'](_0x5649d7['meHno'],_0x59c30d&&_0x59c30d['camer'+'a']?_0x59c30d[_0x3eb5ab(0x68f)+'aFrom']:'-'),_0x3861da['style'][_0x3eb5ab(0x4ba)]=_0x5649d7['UyPYv'](_0x2de066,0x8ab+-0x5*0x5dd+0x14a6)?_0x3eb5ab(0x5bd)+'a8':_0x3eb5ab(0x5a0)+'99');}catch(_0x30adea){}}else _0x23e93b[_0x3eb5ab(0x640)+'e']();}}}catch(_0x21b05){}}function _0x3ceea7(){var _0x36ee49=_0x3e5c02;if(_0x2670e0['VlUVl'](_0x4e334d))return null;var _0x533247=document['getEl'+_0x36ee49(0x3ba)+_0x36ee49(0x49f)](_0x2670e0[_0x36ee49(0x82a)]);if(_0x533247)return _0x533247;if(!document[_0x36ee49(0x82e)]||!document['body']['appen'+_0x36ee49(0x1ee)+'d'])return null;try{if(!document['getEl'+_0x36ee49(0x3ba)+'ById'](_0x36ee49(0x389)+_0x36ee49(0x29c)+'v2-cs'+'s')){var _0x5f4803=document[_0x36ee49(0x2b6)+_0x36ee49(0x69c)+_0x36ee49(0x5c8)](_0x2670e0[_0x36ee49(0x510)]);_0x5f4803['id']=_0x2670e0['UBDiP'],_0x5f4803[_0x36ee49(0x484)+'onten'+'t']=_0x36ee49(0x3a1)+'ra-sw'+'-v2{a'+_0x36ee49(0x22f)+'itial'+'}',(document[_0x36ee49(0x7e6)]||document['docum'+_0x36ee49(0x59b)+_0x36ee49(0x3ba)])[_0x36ee49(0x766)+_0x36ee49(0x1ee)+'d'](_0x5f4803);}return _0x533247=document['creat'+_0x36ee49(0x69c)+_0x36ee49(0x5c8)](_0x36ee49(0x44b)),_0x533247['id']='sakur'+'a-sw-'+'v2',document[_0x36ee49(0x82e)][_0x36ee49(0x766)+_0x36ee49(0x1ee)+'d'](_0x533247),_0x533247;}catch(_0x292926){return null;}}function _0x5448e2(){var _0x59b8b1=_0x3e5c02,_0x524387=_0x2670e0[_0x59b8b1(0x4e1)](_0x3ceea7);if(!_0x524387)return _0x516d7a;if(_0x524387[_0x59b8b1(0x4ab)+'et']['api'])return _0x524387[_0x59b8b1(0x7c5)];try{if(_0x59b8b1(0x6e2)===_0x59b8b1(0x6e2))return _0x1c8f8c(_0x524387);else{var _0x22bf72=_0x182b63();if(!_0x22bf72)return null;if(_0x6a419e<0x2425+-0x47*0x11+-0x1f6e||_0x2670e0['eopCk'](_0x2ff0f1,_0x4ee4cf*(-0x32*-0x35+-0xa47*-0x1+-0x1*0x149d))>_0x22bf72['byteL'+_0x59b8b1(0x479)])return null;var _0x230769=[];for(var _0x383a2c=-0x2*0x11b1+0x4*-0x1d8+-0x1a*-0x1a5;_0x2670e0[_0x59b8b1(0x63b)](_0x383a2c,_0x20a5d3);_0x383a2c++)_0x230769[_0x59b8b1(0x7c8)](_0x22bf72['getFl'+_0x59b8b1(0x793)](_0x2670e0['PuYFx'](_0x34520e+_0x44b503,_0x2670e0[_0x59b8b1(0x375)](_0x383a2c,0x1*-0x239+0x19e6+-0x17a9)),!![]));return _0x236720['ok']+=_0x14ea78,_0x230769;}}catch(_0x25b943){return _0x524387['datas'+'et'][_0x59b8b1(0x7c5)]='1',_0x524387[_0x59b8b1(0x7c5)]=_0x516d7a,console[_0x59b8b1(0x546)]('%c[sa'+'kura]'+'\x20pane'+'l\x20dis'+'abled',_0x59b8b1(0x4ba)+':'+_0xe12a9f,_0x25b943),_0x516d7a;}}function _0x1c8f8c(_0x2f3e59){var _0x44fa6d=_0x3e5c02,_0x540cbe={'KvSdS':_0x2670e0[_0x44fa6d(0x475)],'Hmlan':_0x44fa6d(0x1d1),'EPdag':_0x44fa6d(0x4e8)+_0x44fa6d(0x1ec)+',29,.'+'9)','bvKhR':function(_0x53fc05){return _0x53fc05();},'tlUXd':function(_0x635964,_0xbb803){var _0x4996da=_0x44fa6d;return _0x2670e0[_0x4996da(0x7fe)](_0x635964,_0xbb803);},'hrnyx':_0x44fa6d(0x6a0)+'1b','eLnFO':function(_0x48cb38,_0x3f272d){return _0x48cb38===_0x3f272d;},'cEgKw':_0x44fa6d(0x2f1)+_0x44fa6d(0x835),'kzYqj':_0x2670e0[_0x44fa6d(0x30d)],'RVAaJ':'Speed'+_0x44fa6d(0x719),'YpuJo':_0x44fa6d(0x69e)+_0x44fa6d(0x4dd)+'t','VYGxb':_0x44fa6d(0x62f)+'d','IQpQy':_0x2670e0[_0x44fa6d(0x3dd)],'olbjJ':function(_0x5d3214,_0x39bf07){return _0x5d3214+_0x39bf07;},'AkkKX':function(_0x81ad38,_0x31f3d7){return _0x81ad38+_0x31f3d7;},'HwnZp':_0x44fa6d(0x646)+'e\x20rem'+_0x44fa6d(0x6ed)+_0x44fa6d(0x7d1)+_0x44fa6d(0x2c5)+'\x20are:'+'\x0a\x0a','EiUjS':_0x44fa6d(0x325)+'d\x20the'+_0x44fa6d(0x7e2)+'\x20page'+'\x20once'+_0x44fa6d(0x1c6)+_0x44fa6d(0x6cd)+_0x44fa6d(0x3bb)+_0x44fa6d(0x5cc)+'l\x20aga'+_0x44fa6d(0x2cb),'veknW':_0x44fa6d(0x71a)+'w\x20glo'+'bal','FkhTE':_0x44fa6d(0x808)+'74','qmjrq':'rgba('+'255,1'+'43,17'+'7,.35'+')','wIpGK':function(_0x3a3053,_0x2e5153){return _0x3a3053+_0x2e5153;},'zXzMl':function(_0x50cba6,_0x5180b7){var _0x409652=_0x44fa6d;return _0x2670e0[_0x409652(0x718)](_0x50cba6,_0x5180b7);},'LOmRU':function(_0x5410c1,_0x45221d){var _0x2bc10d=_0x44fa6d;return _0x2670e0[_0x2bc10d(0x83b)](_0x5410c1,_0x45221d);},'YmRWW':function(_0x207944,_0x1a5286){return _0x207944+_0x1a5286;},'CJcyM':'\x20obje'+'cts\x20·'+'\x20','ZNrSb':_0x44fa6d(0x5bd)+'a8','BwZUl':function(_0x137a97,_0x1a5b80){return _0x137a97+_0x1a5b80;},'kkExr':_0x2670e0['bGxCT'],'ZVWCs':function(_0x398321,_0x203e4d){return _0x398321!==_0x203e4d;},'hMyki':_0x2670e0['mfabG'],'DluWQ':_0x2670e0['koGaC'],'bgxGO':'armin'+_0x44fa6d(0x6c9),'Ulkeo':'Diff\x20'+_0x44fa6d(0x359)+_0x44fa6d(0x757)+_0x44fa6d(0x5d7),'rnoDv':function(_0x1b8b16,_0xa3e74c){return _0x1b8b16(_0xa3e74c);},'vlicv':_0x2670e0['fpTmh'],'JOHXu':function(_0x7a1a92,_0x1418cf){return _0x7a1a92+_0x1418cf;},'jEuiE':';font'+_0x44fa6d(0x73e)+_0x44fa6d(0x55f)+'0','tHAXK':function(_0x4165cf,_0x3bdf44){return _0x4165cf+_0x3bdf44;}};_0x2f3e59['style'][_0x44fa6d(0x5ba)+'xt']=_0x2670e0['YFsTW'](_0x2670e0['YFsTW'](_0x2670e0['UxMxp'](_0x2670e0[_0x44fa6d(0x5a4)],_0x2670e0['tVgTH']),_0x44fa6d(0x2a7)+_0x44fa6d(0x5c3)+_0x44fa6d(0x7ac)+_0x44fa6d(0x826)+_0x44fa6d(0x633)+_0x44fa6d(0x60d)+_0x44fa6d(0x2e8)+_0x44fa6d(0x50d)+'space'+';box-'+_0x44fa6d(0x708)+_0x44fa6d(0x175)+'0px\x205'+_0x44fa6d(0x2d4)+_0x44fa6d(0x5d3)+_0x44fa6d(0x1dc)),_0x2670e0[_0x44fa6d(0x86e)]),_0x2f3e59[_0x44fa6d(0x81d)+_0x44fa6d(0x250)]=_0x2670e0[_0x44fa6d(0x74c)](_0x2670e0['uSZgo'](_0x2670e0[_0x44fa6d(0x4a7)](_0x2670e0[_0x44fa6d(0x74c)](_0x2670e0[_0x44fa6d(0x831)](_0x2670e0[_0x44fa6d(0x870)](_0x2670e0[_0x44fa6d(0x570)](_0x2670e0[_0x44fa6d(0x83b)](_0x2670e0[_0x44fa6d(0x831)](_0x2670e0['nuedk'](_0x2670e0[_0x44fa6d(0x6ee)],_0x2670e0[_0x44fa6d(0x72f)])+_0xe12a9f+_0x2670e0['goppB'],'<span'+_0x44fa6d(0x509)+'sw2-b'+_0x44fa6d(0x623)+_0x44fa6d(0x81e)+_0x44fa6d(0x2a5)+_0x44fa6d(0x63c)+_0x44fa6d(0x754)+'6;fon'+_0x44fa6d(0x413)+'e:11p'+_0x44fa6d(0x6b0)+_0x44fa6d(0x30e)+_0x44fa6d(0x516)+_0x44fa6d(0x730)+'rder:'+'1px\x20s'+_0x44fa6d(0x38a)+_0x44fa6d(0x4e8)+_0x44fa6d(0x202)+_0x44fa6d(0x3b8)+_0x44fa6d(0x3df)+_0x44fa6d(0x40c)+_0x44fa6d(0x254)+_0x44fa6d(0x657)+_0x44fa6d(0x4bf)+'x;\x22>v'+_0x44fa6d(0x5f6)+_0x44fa6d(0x20e))+_0x2670e0[_0x44fa6d(0x1ae)],'<butt'+_0x44fa6d(0x39f)+_0x44fa6d(0x49b)+_0x44fa6d(0x52d)+_0x44fa6d(0x7e9)+_0x44fa6d(0x4e6)+'ispla'+_0x44fa6d(0x840)+_0x44fa6d(0x424)+'gin-l'+_0x44fa6d(0x67c)+'uto;b'+_0x44fa6d(0x192)+_0x44fa6d(0x5cb))+_0xe12a9f,_0x44fa6d(0x67f)+'er:0;'+'color'+_0x44fa6d(0x321)+'f1b;b'+_0x44fa6d(0x6c4)+'-radi'+'us:7p'+'x;pad'+_0x44fa6d(0x30e)+'4px\x201'+_0x44fa6d(0x699)+_0x44fa6d(0x485)+'eight'+_0x44fa6d(0x6f0)+_0x44fa6d(0x257)+_0x44fa6d(0x641)+_0x44fa6d(0x5b6)+_0x44fa6d(0x825)+'y\x20JSO'+_0x44fa6d(0x491)+'tton>'),_0x2670e0[_0x44fa6d(0x5e3)])+(_0x44fa6d(0x439)+_0x44fa6d(0x39f)+'=\x22sw2'+'-x\x22\x20s'+_0x44fa6d(0x50b)+_0x44fa6d(0x331)+'groun'+_0x44fa6d(0x674)+_0x44fa6d(0x16d)+_0x44fa6d(0x44f)+_0x44fa6d(0x6c4)+':1px\x20'+_0x44fa6d(0x186)+_0x44fa6d(0x281)+'(255,'+_0x44fa6d(0x83f)+_0x44fa6d(0x6d7)+');col'+_0x44fa6d(0x282)+'7eef5'+_0x44fa6d(0x67f)+'er-ra'+_0x44fa6d(0x19f)+'7px;p'+_0x44fa6d(0x7da)+_0x44fa6d(0x526)+'\x208px;'+_0x44fa6d(0x257)+_0x44fa6d(0x641)+'nter;'+_0x44fa6d(0x7b9)+'butto'+'n>'),_0x44fa6d(0x42b)+'>')+(_0x44fa6d(0x199)+_0x44fa6d(0x39b)+_0x44fa6d(0x272)+_0x44fa6d(0x59f)+_0x44fa6d(0x50b)+'\x22disp'+_0x44fa6d(0x3fc)+_0x44fa6d(0x1da)+'>'),_0x2670e0['uFsMj'])+_0x2670e0['XQBho']+('<inpu'+_0x44fa6d(0x3d1)+_0x44fa6d(0x4f7)+_0x44fa6d(0x523)+'r\x22\x20ty'+'pe=\x22r'+'ange\x22'+_0x44fa6d(0x18c)+'\x221\x22\x20m'+'ax=\x225'+'\x22\x20ste'+_0x44fa6d(0x5e6)+_0x44fa6d(0x7e0)+'lue=\x22'+_0x44fa6d(0x183)+_0x44fa6d(0x60e)+_0x44fa6d(0x32c)+':120p'+_0x44fa6d(0x294)+_0x44fa6d(0x338)+_0x44fa6d(0x703)),_0xe12a9f)+_0x44fa6d(0x5d6),'<span'+'\x20id=\x22'+_0x44fa6d(0x314)+'actor'+_0x44fa6d(0x2bc)+_0x44fa6d(0x7e9)+_0x44fa6d(0x231)+_0x44fa6d(0x703)+_0x44fa6d(0x620)+_0x44fa6d(0x6bf)+'n-wid'+'th:34'+'px;\x22>'+'1.0x<'+'/span'+'>')+('<butt'+'on\x20id'+_0x44fa6d(0x49b)+_0x44fa6d(0x233)+_0x44fa6d(0x7e9)+_0x44fa6d(0x51b)+_0x44fa6d(0x192)+_0x44fa6d(0x5cb)+_0x44fa6d(0x69e)+'paren'+_0x44fa6d(0x85a)+'der:1'+_0x44fa6d(0x5ac)+'lid\x20r'+_0x44fa6d(0x7d0)+_0x44fa6d(0x2e0)+'3,177'+',.4);'+_0x44fa6d(0x4ba)+':#f7e'+_0x44fa6d(0x81a)+_0x44fa6d(0x6c4)+_0x44fa6d(0x320)+_0x44fa6d(0x3ac)+'x;pad'+'ding:'+'4px\x209'+_0x44fa6d(0x29f)+_0x44fa6d(0x2b3)+_0x44fa6d(0x1f0)+_0x44fa6d(0x829)+_0x44fa6d(0x35b)+_0x44fa6d(0x871)+'F9)</'+_0x44fa6d(0x65f)+'n>'),_0x44fa6d(0x4bd)+_0x44fa6d(0x509)+_0x44fa6d(0x167)+'int\x22\x20'+_0x44fa6d(0x82d)+'=\x22col'+'or:#8'+_0x44fa6d(0x474)+_0x44fa6d(0x85f)+'twice'+_0x44fa6d(0x5b1)+'e\x20wal'+_0x44fa6d(0x49c)+'/\x20spr'+_0x44fa6d(0x2c0)+'g\x20/\x20j'+'umpin'+_0x44fa6d(0x736)+_0x44fa6d(0x501)+_0x44fa6d(0x72c)+'ield\x20'+'is\x20wh'+'ich.<'+_0x44fa6d(0x5a7)+'>')+(_0x44fa6d(0x42b)+'>')+_0x2670e0['tTnkZ']+_0x2670e0[_0x44fa6d(0x822)]+(_0x44fa6d(0x42b)+'>');var _0xf9d1d3=_0x2f3e59[_0x44fa6d(0x4f2)+'Selec'+_0x44fa6d(0x7d6)]('#sw2-'+_0x44fa6d(0x228)+'s'),_0x141360=_0x2f3e59['query'+_0x44fa6d(0x572)+_0x44fa6d(0x7d6)](_0x2670e0[_0x44fa6d(0x4ea)]),_0x575577=_0x2f3e59['query'+_0x44fa6d(0x572)+'tor'](_0x44fa6d(0x2df)+_0x44fa6d(0x532)),_0x963918=_0x2f3e59[_0x44fa6d(0x4f2)+'Selec'+_0x44fa6d(0x7d6)]('#sw2-'+_0x44fa6d(0x61f)),_0x450291=_0x2f3e59[_0x44fa6d(0x4f2)+_0x44fa6d(0x572)+'tor']('#sw2-'+'x'),_0x35198d=_0x2f3e59['query'+_0x44fa6d(0x572)+'tor'](_0x2670e0[_0x44fa6d(0x26e)]),_0x30ff4a=_0x2f3e59[_0x44fa6d(0x4f2)+_0x44fa6d(0x572)+'tor'](_0x2670e0[_0x44fa6d(0x339)]),_0x5f1276=_0x2f3e59['query'+_0x44fa6d(0x572)+_0x44fa6d(0x7d6)](_0x44fa6d(0x2df)+_0x44fa6d(0x376)),_0x2107a0=_0x2f3e59['query'+_0x44fa6d(0x572)+_0x44fa6d(0x7d6)](_0x44fa6d(0x2df)+'speed'),_0x486463=_0x2f3e59['query'+'Selec'+_0x44fa6d(0x7d6)](_0x2670e0[_0x44fa6d(0x608)]),_0x25b8c6=_0x2f3e59[_0x44fa6d(0x4f2)+_0x44fa6d(0x572)+_0x44fa6d(0x7d6)](_0x2670e0[_0x44fa6d(0x27e)]),_0x79ecec=_0x2f3e59['query'+_0x44fa6d(0x572)+'tor'](_0x2670e0[_0x44fa6d(0x5bb)]),_0x4e05ee=null,_0x3ced24=![];function _0x138640(){var _0x40c705=_0x44fa6d;if(_0x30ff4a)_0x30ff4a['style']['displ'+'ay']=_0x3ced24?'':_0x540cbe[_0x40c705(0x518)];if(_0x35198d)_0x35198d[_0x40c705(0x484)+_0x40c705(0x64b)+'t']=_0x3ced24?'close':_0x540cbe['Hmlan'];_0x2f3e59[_0x40c705(0x82d)][_0x40c705(0x32c)]=_0x3ced24?_0x40c705(0x1ce)+_0x40c705(0x79e)+'20px)':'auto',_0x2f3e59['style'][_0x40c705(0x21f)+_0x40c705(0x512)]=_0x3ced24?'#150c'+'1d':_0x540cbe[_0x40c705(0x56e)];}if(_0x35198d)_0x35198d[_0x44fa6d(0x733)+'ck']=function(){var _0x1cf47a=_0x44fa6d;_0x3ced24=!_0x3ced24,_0x540cbe[_0x1cf47a(0x38b)](_0x138640);};_0x138640();if(_0x450291)_0x450291['oncli'+'ck']=function(){_0x4b0445(!![]);};if(_0x5f1276)_0x5f1276[_0x44fa6d(0x733)+'ck']=function(){var _0x139f8f=_0x44fa6d;_0x540cbe['tlUXd'](_0x2e4df0,_0x139f8f(0x7bc)+_0x139f8f(0x27b));};var _0x2b092f=![];function _0x2ff062(){var _0x5f5257=_0x44fa6d;_0x2670e0[_0x5f5257(0x437)](_0x2e4df0,_0x2670e0['fDmLR'],{'on':_0x2b092f,'factor':parseFloat(_0x486463[_0x5f5257(0x1bb)])||0xb3a+-0x62a*-0x1+-0x1163});}if(_0x2107a0)_0x2107a0[_0x44fa6d(0x733)+'ck']=function(){var _0x54bb3a=_0x44fa6d,_0x40d214={'XRltZ':'trans'+'paren'+'t','jrypY':_0x540cbe['hrnyx']};if(_0x540cbe['eLnFO']('ZGHYZ','ZGHYZ')){var _0x5f1267=_0x540cbe[_0x54bb3a(0x286)][_0x54bb3a(0x356)]('|'),_0xe72997=0x3*0x568+0x1346+0x4d*-0x76;while(!![]){switch(_0x5f1267[_0xe72997++]){case'0':_0x2107a0[_0x54bb3a(0x82d)]['color']=_0x2b092f?_0x540cbe[_0x54bb3a(0x2e6)]:_0x54bb3a(0x436)+'f5';continue;case'1':_0x2107a0[_0x54bb3a(0x484)+'onten'+'t']=_0x2b092f?_0x540cbe['kzYqj']:_0x540cbe[_0x54bb3a(0x5d0)];continue;case'2':_0x2b092f=!_0x2b092f;continue;case'3':_0x2107a0[_0x54bb3a(0x82d)][_0x54bb3a(0x21f)+'round']=_0x2b092f?_0xe12a9f:_0x540cbe['YpuJo'];continue;case'4':_0x2ff062();continue;}break;}}else _0x23868d=!!_0x1f0da3['speed']['on'],_0x3fe75c[_0x54bb3a(0x484)+'onten'+'t']=_0x3e22aa?_0x54bb3a(0x85e)+'\x20ON':_0x54bb3a(0x85e)+'\x20off',_0x5382fa['style'][_0x54bb3a(0x21f)+'round']=_0x55c633?_0x1bb618:_0x40d214[_0x54bb3a(0x712)],_0x4f4e10['style'][_0x54bb3a(0x4ba)]=_0x441d57?_0x40d214[_0x54bb3a(0x818)]:_0x54bb3a(0x436)+'f5',_0xc94e46&&_0xbb9269['speed'][_0x54bb3a(0x523)+'r']&&(_0x42dffb['textC'+_0x54bb3a(0x64b)+'t']=_0x8c7b30(_0x1e00f8['speed']['facto'+'r'])['toFix'+'ed'](-0x7*0x1b4+-0x22b5+0x2*0x1751)+'x');};if(_0x486463)_0x486463['oninp'+'ut']=function(){var _0x37522a=_0x44fa6d;if(_0x25b8c6)_0x25b8c6['textC'+'onten'+'t']=_0x2670e0[_0x37522a(0x718)]((_0x2670e0[_0x37522a(0x578)](parseFloat,_0x486463['value'])||0x136f+-0xb*0x12e+-0x674)[_0x37522a(0x20a)+'ed'](0xe22+0xf5*-0x11+0x224*0x1),'x');_0x2670e0[_0x37522a(0x4e1)](_0x2ff062);};if(_0x963918)_0x963918['oncli'+'ck']=function(){var _0x229fa3=_0x44fa6d,_0x283643={'dkQYa':function(_0x8d33b){return _0x8d33b();}},_0x4403fd=_0x2670e0['wUZUh'](_0x2670e0[_0x229fa3(0x718)](_0x5e1328,'\x0a'),_0x4e05ee?JSON[_0x229fa3(0x867)+_0x229fa3(0x7ce)](_0x4e05ee,null,0x10d*-0xd+-0x2076+0x20*0x171):'')+'\x0a'+_0xab8847,_0x36d7d2=function(){var _0x556ba2=_0x229fa3;if(_0x963918)_0x963918[_0x556ba2(0x484)+'onten'+'t']=_0x540cbe[_0x556ba2(0x237)];};if(navigator['clipb'+_0x229fa3(0x4c6)]&&navigator['clipb'+'oard'][_0x229fa3(0x6bd)+_0x229fa3(0x797)])navigator[_0x229fa3(0x599)+'oard']['write'+_0x229fa3(0x797)](_0x4403fd)[_0x229fa3(0x841)](_0x36d7d2,function(){var _0x34b780=_0x229fa3;_0x283643[_0x34b780(0x650)](_0x3ff05d);});else _0x3ff05d();function _0x3ff05d(){var _0x4b67e4=_0x229fa3,_0x368c7a=_0x540cbe['IQpQy'][_0x4b67e4(0x356)]('|'),_0x55c753=-0x82*0x4b+0x881*0x1+-0x1d95*-0x1;while(!![]){switch(_0x368c7a[_0x55c753++]){case'0':if(!document['body'])return;continue;case'1':_0x3d39a0['value']=_0x4403fd;continue;case'2':document['body'][_0x4b67e4(0x766)+_0x4b67e4(0x1ee)+'d'](_0x3d39a0);continue;case'3':var _0x3d39a0=document[_0x4b67e4(0x2b6)+'eElem'+'ent'](_0x4b67e4(0x353)+'rea');continue;case'4':_0x3d39a0['remov'+'e']();continue;case'5':try{document[_0x4b67e4(0x4a6)+_0x4b67e4(0x5f7)+'d'](_0x4b67e4(0x61f)),_0x36d7d2();}catch(_0x4d7962){}continue;case'6':_0x3d39a0[_0x4b67e4(0x2ad)+'t']();continue;}break;}}};setTimeout(function(){var _0x1b778b=_0x44fa6d,_0x4b4453=('4|3|1'+'|2|0')[_0x1b778b(0x356)]('|'),_0x5c869d=0x202+0x1*0x2455+0x41*-0x97;while(!![]){switch(_0x4b4453[_0x5c869d++]){case'0':_0x575577['textC'+_0x1b778b(0x64b)+'t']=_0x540cbe['olbjJ'](_0x540cbe['AkkKX'](_0x540cbe[_0x1b778b(0x3f3)](_0x1b778b(0x83c)+_0x1b778b(0x1f7)+'rame\x20'+_0x1b778b(0x333)+'\x20post'+'ed\x20a\x20'+'singl'+'e\x20rep'+_0x1b778b(0x5a8)+'\x0a',_0x1b778b(0x255)+_0x1b778b(0x811)+_0x1b778b(0x25c)+'es\x20th'+_0x1b778b(0x5d2)+_0x1b778b(0x827)+_0x1b778b(0x1b1)+'\x20inst'+_0x1b778b(0x792)+'\x20and\x20'+_0x1b778b(0x65c)+'ng\x20on'+_0x1b778b(0x576)+'porta'+'l,\x0a'),_0x540cbe['HwnZp'])+(_0x1b778b(0x6a4)+'Tampe'+'rmonk'+_0x1b778b(0x25f)+_0x1b778b(0x686)+_0x1b778b(0x834)+'ting\x20'+'into\x20'+_0x1b778b(0x51e)+'ross-'+_0x1b778b(0x672)+_0x1b778b(0x81c)+_0x1b778b(0x483))+('\x20\x202.\x20'+_0x1b778b(0x243)+_0x1b778b(0x421)+_0x1b778b(0x72b)+_0x1b778b(0x4b8)+_0x1b778b(0x7a6)+'oaded'+_0x1b778b(0x3cd)+_0x1b778b(0x312)+_0x1b778b(0x7d4)+'ng.\x0a')+('\x20\x203.\x20'+_0x1b778b(0x449)+_0x1b778b(0x389)+_0x1b778b(0x2ec)+'llwar'+_0x1b778b(0x63a)+_0x1b778b(0x784)+'AND\x20t'+_0x1b778b(0x35f)+'d\x20dia'+'g\x20scr'+'ipt\x20a'+_0x1b778b(0x1c9)),_0x1b778b(0x6a8)+'insta'+_0x1b778b(0x824)+_0x1b778b(0x844)+'\x20copi'+'es\x20of'+'\x20UWMK'+'\x20both'+_0x1b778b(0x49d)+_0x1b778b(0x27d)+_0x1b778b(0x6ca)+'bly.i'+_0x1b778b(0x253)+'tiate'+'.\x0a\x0a')+_0x540cbe['EiUjS'];continue;case'1':_0xf9d1d3['textC'+_0x1b778b(0x64b)+'t']=_0x1b778b(0x52e)+_0x1b778b(0x681)+_0x1b778b(0x1c7)+_0x1b778b(0x66c)+_0x1b778b(0x2bb)+_0x1b778b(0x352)+'t\x20inj'+_0x1b778b(0x7ca)+'?';continue;case'2':_0xf9d1d3['style'][_0x1b778b(0x4ba)]=_0x1b778b(0x667)+'c7';continue;case'3':if(!_0xf9d1d3||!_0x575577)return;continue;case'4':if(_0x4e05ee)return;continue;}break;}},-0x196ab+0x1bfd0+0x21*0x5db);var _0x176b1c={'set':function(_0xcd4e6){var _0x2b9ee8=_0x44fa6d,_0x33d04a={'OvUOI':function(_0x5d70af,_0x55c891){return _0x5d70af+_0x55c891;}};_0x4e05ee=_0xcd4e6;if(_0x963918)_0x963918['style']['displ'+'ay']='';if(_0x141360){var _0x5c0b00=(_0x2b9ee8(0x3fa)+_0x2b9ee8(0x693))['split']('|'),_0x515be4=-0x571+-0x2*-0x7ff+-0xa8d;while(!![]){switch(_0x5c0b00[_0x515be4++]){case'0':_0x141360[_0x2b9ee8(0x82d)]['color']=_0xc6cdbc===_0x390127?_0xe12a9f:_0x540cbe[_0x2b9ee8(0x5c6)];continue;case'1':var _0xc6cdbc=_0xcd4e6[_0x2b9ee8(0x4bb)+'on']||'';continue;case'2':_0x141360[_0x2b9ee8(0x82d)][_0x2b9ee8(0x559)+'rColo'+'r']=_0xc6cdbc===_0x390127?_0x540cbe[_0x2b9ee8(0x396)]:'#ff6e'+'74';continue;case'3':_0x141360[_0x2b9ee8(0x484)+'onten'+'t']=_0x540cbe[_0x2b9ee8(0x6e3)]('v',_0xcd4e6[_0x2b9ee8(0x4bb)+'on']||'?');continue;case'4':var _0x390127=_0x56a163;continue;}break;}}var _0x9b1523=_0xcd4e6['insta'+_0x2b9ee8(0x61e)]&&_0xcd4e6['insta'+_0x2b9ee8(0x61e)][_0x2b9ee8(0x3ab)+'ntrol'+_0x2b9ee8(0x43f)],_0x3dce3a=Math[_0x2b9ee8(0x512)]((_0xcd4e6['elaps'+'edMs']||0x812+0x165*-0x2+-0x548*0x1)/(0x1e86*-0x1+0xd*-0x100+0x2f6e));if(_0xf9d1d3){var _0x459ff9,_0x521c08;if(_0x9b1523&&_0xcd4e6[_0x2b9ee8(0x7d7)+'y']&&_0xcd4e6[_0x2b9ee8(0x7d7)+'y'][_0x2b9ee8(0x3ab)+'ntrol'+_0x2b9ee8(0x43f)])_0x459ff9=_0x540cbe[_0x2b9ee8(0x46e)](_0x540cbe['LOmRU'](_0x540cbe['YmRWW'](_0x540cbe['LOmRU'](_0x2b9ee8(0x35e)+'·\x20',Object['keys'](_0xcd4e6[_0x2b9ee8(0x724)+_0x2b9ee8(0x61e)])[_0x2b9ee8(0x267)+'h']),_0x540cbe['CJcyM']),_0x3dce3a),'s'),_0x521c08=_0x540cbe['ZNrSb'];else{if(_0xcd4e6['hooks'+_0x2b9ee8(0x4f0)+'ed']>-0x3*-0x703+0xa61*0x2+-0x29cb)_0x459ff9=_0x540cbe['BwZUl']('hooks'+_0x2b9ee8(0x2cf)+'d\x20·\x20',_0x3dce3a)+'s',_0x521c08=_0x540cbe[_0x2b9ee8(0x24d)];else{if(_0xcd4e6[_0x2b9ee8(0x548)+'tData']){if(_0x540cbe[_0x2b9ee8(0x2eb)]('weLTm','gPuue'))_0x459ff9=_0x540cbe[_0x2b9ee8(0x568)]('metad'+'ata\x20r'+'eady\x20'+'·\x20',_0x3dce3a)+'s',_0x521c08=_0x540cbe[_0x2b9ee8(0x24d)];else try{if(_0x164da2[_0x2c2365]['conte'+'ntWin'+'dow'])_0x7163a3[_0x478978][_0x2b9ee8(0x6e8)+_0x2b9ee8(0x3f2)+'dow']['postM'+'essag'+'e'](_0x156d30,'*');}catch(_0x5cc7e6){}}else _0x540cbe['eLnFO'](_0x540cbe[_0x2b9ee8(0x215)],_0x540cbe[_0x2b9ee8(0x5f9)])?(_0x46ce07['st']['lastW'+'ritte'+'n']=_0x5beef8['froun'+'d'](_0x5290a1),_0x373c2c++,_0x2f8855[_0x2b9ee8(0x7c8)](_0x33d04a[_0x2b9ee8(0x71c)]('0x',_0x4cc7c1['o']['toStr'+_0x2b9ee8(0x3a4)](0x2f5*0x7+0x1*-0x1922+-0x47f*-0x1)))):(_0x459ff9=(_0xcd4e6['arm']&&_0xcd4e6[_0x2b9ee8(0x86c)]['ok']?_0x2b9ee8(0x593)+'\x20·\x20':_0x540cbe['bgxGO'])+_0x3dce3a+'s',_0x521c08=_0x540cbe[_0x2b9ee8(0x24d)]);}}_0xf9d1d3[_0x2b9ee8(0x484)+_0x2b9ee8(0x64b)+'t']=_0x459ff9,_0xf9d1d3[_0x2b9ee8(0x82d)][_0x2b9ee8(0x4ba)]=_0x521c08;}_0x79ecec&&(_0x79ecec[_0x2b9ee8(0x484)+_0x2b9ee8(0x64b)+'t']=_0xcd4e6[_0x2b9ee8(0x3ff)]&&_0xcd4e6['diff'][_0x2b9ee8(0x267)+'h']?_0x540cbe['Ulkeo']+_0xcd4e6['diff'][_0x2b9ee8(0x706)](',\x20'):'F9\x20tw'+'ice\x20w'+_0x2b9ee8(0x4d1)+'walki'+'ng\x20/\x20'+'sprin'+_0x2b9ee8(0x558)+'/\x20jum'+_0x2b9ee8(0x41e)+_0x2b9ee8(0x69a)+_0x2b9ee8(0x3d3)+_0x2b9ee8(0x3e7)+_0x2b9ee8(0x2b2)+_0x2b9ee8(0x3d3)+'h.');if(_0xcd4e6[_0x2b9ee8(0x74a)]&&_0x2107a0){_0x2b092f=!!_0xcd4e6[_0x2b9ee8(0x74a)]['on'],_0x2107a0['textC'+'onten'+'t']=_0x2b092f?_0x540cbe['kzYqj']:_0x2b9ee8(0x85e)+_0x2b9ee8(0x719),_0x2107a0[_0x2b9ee8(0x82d)][_0x2b9ee8(0x21f)+_0x2b9ee8(0x512)]=_0x2b092f?_0xe12a9f:'trans'+_0x2b9ee8(0x4dd)+'t',_0x2107a0['style']['color']=_0x2b092f?_0x2b9ee8(0x6a0)+'1b':_0x2b9ee8(0x436)+'f5';if(_0x25b8c6&&_0xcd4e6['speed'][_0x2b9ee8(0x523)+'r']){if(_0x2b9ee8(0x739)==='nyeYp')_0x25b8c6['textC'+_0x2b9ee8(0x64b)+'t']=Number(_0xcd4e6[_0x2b9ee8(0x74a)]['facto'+'r'])['toFix'+'ed'](0x11*-0x21d+0x256b+-0x17d)+'x';else{if(_0x523fee['lg'])_0x5a3a1b['lg']['textC'+_0x2b9ee8(0x64b)+'t']='no\x20lo'+_0x2b9ee8(0x1c1)+_0x2b9ee8(0x677)+'\x20yet';return;}}}if(_0x575577)try{_0x575577['textC'+_0x2b9ee8(0x64b)+'t']=_0x540cbe[_0x2b9ee8(0x67a)](_0x2e08cf,_0xcd4e6);}catch(_0x18aa3b){if(_0x540cbe['vlicv']!=='XjrAR')return _0x192c9d[_0x2b9ee8(0x855)+'e']=_0x540cbe['veknW'],_0x277f58;else _0x575577['textC'+_0x2b9ee8(0x64b)+'t']=JSON['strin'+_0x2b9ee8(0x7ce)](_0xcd4e6,null,-0x137b+0x939*-0x1+0x1cb5);}console[_0x2b9ee8(0x29b)](_0x2b9ee8(0x291)+_0x2b9ee8(0x4db)+_0x2b9ee8(0x283)+_0x2b9ee8(0x2a3)+_0x2b9ee8(0x5ff)+'rt',_0x540cbe[_0x2b9ee8(0x3e2)](_0x540cbe['JOHXu']('color'+':',_0xe12a9f),_0x540cbe[_0x2b9ee8(0x273)]),_0xcd4e6),console[_0x2b9ee8(0x29b)](_0x540cbe[_0x2b9ee8(0x52f)](_0x540cbe['BwZUl'](_0x5e1328,'\x0a'),JSON[_0x2b9ee8(0x867)+_0x2b9ee8(0x7ce)](_0xcd4e6,null,-0x1d84+-0x2369+0x40ee))+'\x0a'+_0xab8847);}};return _0x2f3e59[_0x44fa6d(0x4ab)+'et'][_0x44fa6d(0x7c5)]='1',_0x2f3e59['api']=_0x176b1c,_0x176b1c;}function _0x2e08cf(_0x28e7a1){var _0x190958=_0x3e5c02,_0x4cf0e9={'PcxlJ':function(_0x278219,_0x310bf1){var _0x4905aa=_0x310c;return _0x2670e0[_0x4905aa(0x5ca)](_0x278219,_0x310bf1);}};if(_0x2670e0['gkrzM']('ujUXK','ujUXK')){_0x2e802b[_0x5d891a]={'ptr':_0x149395,'firstSeen':_0x264c42['now'](),'hits':0x0,'replaced':!!_0xd6e888};try{var _0x387a25=_0x28a113[_0x190958(0x26b)+'r'](function(_0x677e51){var _0x2d9441=_0x190958;return _0x4cf0e9[_0x2d9441(0x30b)](_0x677e51['type'],_0x42d65c);})[0xfc9+-0x25bb+0x15f2];_0xbac71e={'type':_0x2eff68,'atMs':_0x51dbcf['now']()-_0x441ba6,'originalFunc':!!(_0x387a25&&_0x387a25['hook']&&typeof _0x387a25['hook'][_0x190958(0x672)+_0x190958(0x553)+'nc']===_0x190958(0x184)+'ion'),'resolveGameAtFire':!!_0x271a83(),'gameSourceAtFire':_0x492cbb[_0x190958(0x855)+'e']};}catch(_0x4c5e77){}}else{var _0x5e6b94=[];_0x5e6b94[_0x190958(0x7c8)](_0x2670e0['KJZOX'](_0x2670e0[_0x190958(0x648)](_0x190958(0x213)+_0x190958(0x865),_0x28e7a1['host']||'?')+_0x190958(0x676)+Math['round']((_0x28e7a1[_0x190958(0x3d5)+_0x190958(0x823)]||0x77a+-0x196f*-0x1+-0x20e9)/(-0x2099+0x1*0x177d+0xd04)),'s)')),_0x5e6b94[_0x190958(0x7c8)](_0x2670e0[_0x190958(0x570)](_0x2670e0[_0x190958(0x718)](_0x2670e0[_0x190958(0x271)](_0x2670e0['ihfQS'],_0x28e7a1[_0x190958(0x4ce)]?_0x190958(0x2f7):'no')+_0x2670e0[_0x190958(0x791)],_0x28e7a1[_0x190958(0x4c9)+'pCont'+_0x190958(0x6e0)]?_0x190958(0x2f7):'no')+_0x2670e0['VWghi'],_0x28e7a1[_0x190958(0x204)+'ount']!=null?_0x28e7a1['typeC'+'ount']:'?')),_0x5e6b94[_0x190958(0x7c8)]('hooks'+'\x20\x20\x20\x20'+_0x28e7a1['hooks'+_0x190958(0x4f0)+'ed']+'/'+_0x28e7a1[_0x190958(0x4eb)+_0x190958(0x4ee)]+_0x2670e0[_0x190958(0x638)]),_0x5e6b94['push']('');var _0x2ee488=_0x28e7a1[_0x190958(0x724)+'nces']||{},_0x40838f=Object[_0x190958(0x251)](_0x2ee488);!_0x40838f[_0x190958(0x267)+'h']&&(_0x5e6b94['push']('no\x20li'+'ve\x20ob'+_0x190958(0x5df)+_0x190958(0x698)+'ured\x20'+'yet.'),_0x5e6b94[_0x190958(0x7c8)](''),_0x5e6b94[_0x190958(0x7c8)](_0x2670e0['HuqVD']),_0x5e6b94['push'](_0x2670e0['UDOHN']));for(var _0x5695f9=0x3*0x89+-0x2a2*0x1+0x107;_0x2670e0[_0x190958(0x63b)](_0x5695f9,_0x40838f[_0x190958(0x267)+'h']);_0x5695f9++){var _0x56f27c=_0x40838f[_0x5695f9];_0x5e6b94['push'](_0x56f27c+'\x20@\x20'+_0x2ee488[_0x56f27c]);}_0x5e6b94[_0x190958(0x7c8)]('');var _0x52e6b4=_0x28e7a1['surve'+'y']||{},_0x2a0b5f=Object['keys'](_0x52e6b4);for(var _0x30f5fc=-0x1*-0x2338+0x255*0x2+-0x27e2;_0x30f5fc<_0x2a0b5f[_0x190958(0x267)+'h'];_0x30f5fc++){var _0x3c2cc9=_0x2a0b5f[_0x30f5fc],_0x277e80=_0x52e6b4[_0x3c2cc9];if(!_0x277e80||!_0x277e80[_0x190958(0x267)+'h'])continue;_0x5e6b94[_0x190958(0x7c8)](_0x2670e0[_0x190958(0x554)](_0x2670e0['PUlAj']+_0x3c2cc9,'\x20')+new Array(Math[_0x190958(0x285)](0x969+0x6*0x49d+-0x2516,0x15b6+0x79c*0x5+-0x3ba0-_0x3c2cc9[_0x190958(0x267)+'h']))[_0x190958(0x706)]('─')),_0x5e6b94['push'](_0x2670e0[_0x190958(0x588)]);for(var _0x2d850e=0x14f6+-0x1874+-0x1bf*-0x2;_0x2670e0[_0x190958(0x63b)](_0x2d850e,_0x277e80[_0x190958(0x267)+'h']);_0x2d850e++){var _0x1bf8c7=_0x277e80[_0x2d850e],_0x25f097=typeof _0x1bf8c7['v']===_0x2670e0[_0x190958(0x28f)]?Math[_0x190958(0x512)](_0x1bf8c7['v']*(-0x17ce+-0x1488+0xbe*0x41))/(-0x2*-0x1f6+0x4c0+0x2*-0x262):_0x1bf8c7['v'];_0x5e6b94['push'](_0x2670e0[_0x190958(0x33a)](_0x2670e0['Wmlem'](_0x2670e0[_0x190958(0x648)](_0x2670e0[_0x190958(0x83b)]('\x20\x20',('0x'+_0x1bf8c7['o']['toStr'+'ing'](0x1c21+-0x1ce7+0xd6))['padEn'+'d'](-0xe8f*0x1+-0x1*-0xf71+-0x6d*0x2))+'\x20'+_0x1bf8c7['k'][_0x190958(0x68c)+'d'](0x1ef+-0xd*0x121+0x3*0x443),'\x20'),String(_0x25f097)[_0x190958(0x68c)+'d'](0x1c9c*0x1+-0x1ddd+0x151)),'\x20')+(_0x1bf8c7[_0x190958(0x506)]||''));}_0x5e6b94[_0x190958(0x7c8)]('');}if(_0x28e7a1[_0x190958(0x306)+_0x190958(0x53b)]&&_0x28e7a1[_0x190958(0x306)+'ngs'][_0x190958(0x267)+'h']){_0x5e6b94['push']('warni'+'ngs');for(var _0x11fe1c=0x496*-0x2+-0x25c9+0x2ef5;_0x11fe1c<_0x28e7a1[_0x190958(0x306)+_0x190958(0x53b)][_0x190958(0x267)+'h'];_0x11fe1c++)_0x5e6b94[_0x190958(0x7c8)](_0x2670e0[_0x190958(0x458)](_0x2670e0[_0x190958(0x290)],_0x28e7a1[_0x190958(0x306)+_0x190958(0x53b)][_0x11fe1c]));}return _0x5e6b94['join']('\x0a');}}window['addEv'+'entLi'+_0x3e5c02(0x1a3)+'r']('messa'+'ge',function(_0x3c04b8){var _0x43ae3b=_0x3e5c02,_0x2f3592=_0x3c04b8[_0x43ae3b(0x430)];if(!_0x2f3592||_0x2f3592[_0x43ae3b(0x1b8)+'ura']!==_0x4c4dd1)return;try{if(_0x2f3592[_0x43ae3b(0x349)]===_0x43ae3b(0x7ea)){_0x2670e0[_0x43ae3b(0x22a)](_0x5448e2)[_0x43ae3b(0x4d5)]({'host':_0x2f3592['host'],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x2670e0['NOnFJ'](_0x2f3592[_0x43ae3b(0x349)],_0x2670e0[_0x43ae3b(0x80f)]))_0x5448e2()[_0x43ae3b(0x4d5)](_0x2f3592['repor'+'t']);}catch(_0xde17f9){console['warn']('%c[sa'+_0x43ae3b(0x4db)+'\x20pane'+_0x43ae3b(0x6ab)+_0x43ae3b(0x36d)+_0x43ae3b(0x66e),_0x2670e0[_0x43ae3b(0x3f9)]+_0xe12a9f,_0xde17f9);}});function _0x1f08f8(){var _0x3da3d9=_0x3e5c02;if(_0x2670e0[_0x3da3d9(0x7dc)](_0x4e334d)){_0x4b0445(!![]);return;}_0x2670e0[_0x3da3d9(0x6a9)](_0x5448e2);}if(document['body'])_0x2670e0['eJkfZ'](_0x1f08f8);else document[_0x3e5c02(0x72a)+'entLi'+_0x3e5c02(0x1a3)+'r'](_0x2670e0[_0x3e5c02(0x26a)],_0x1f08f8,{'once':!![]});return;}window['__SAK'+_0x3e5c02(0x342)+_0x3e5c02(0x4c1)]=window['__SAK'+_0x3e5c02(0x342)+_0x3e5c02(0x4c1)]||{'at':Date['now']()};function _0x134791(_0x44b569,_0x3d2098){var _0x4b5e71=_0x3e5c02;if(_0x2670e0[_0x4b5e71(0x5b7)]===_0x2670e0['hTlIX']){var _0x65149e=('5|8|3'+_0x4b5e71(0x47b)+_0x4b5e71(0x1a0)+'0|0|9'+'|4')[_0x4b5e71(0x356)]('|'),_0x41460e=-0x16a9*0x1+0xbed*0x1+0xabc;while(!![]){switch(_0x65149e[_0x41460e++]){case'0':_0x210620[_0x4b5e71(0x44a)](_0x1eff63,_0x325adb,_0x57d5ab?-0x2446*0x1+0x1076+0x13d2:0x5de*-0x1+0x14af+-0x2*0x767+0.20000000000000018,-0x4*-0x664+0x13e*0x1d+-0x3d96,_0x2670e0['tPUog'](_0x41fc4a['PI'],0x23f2+-0x19fb*-0x1+-0x3deb));continue;case'1':var _0x1eff63=_0x2cac3e,_0x325adb=_0x3fa1b7;continue;case'2':_0x441f4b[_0x4b5e71(0x858)+_0x4b5e71(0x2ee)]=_0x57d5ab?_0x2670e0['sborI']:_0x2670e0['JHcaf'];continue;case'3':var _0x1bfb0c=_0x5a97cd[_0x4b5e71(0x734)](_0x2670e0[_0x4b5e71(0x870)](_0x2670e0['cYuLA'](_0x27dd6f,_0x27dd6f),_0x2670e0[_0x4b5e71(0x375)](_0x1485ff,_0x1485ff)));continue;case'4':_0x4be3d9++;continue;case'5':var _0x56f65b=_0x2ce7c8[_0x4b5e71(0x443)][_0x52dfa6];continue;case'6':var _0x57d5ab=_0x751117!==null&&_0x56f65b['team']===_0x77ae5b;continue;case'7':_0x2670e0[_0x4b5e71(0x589)](_0x1bfb0c,_0x56e7a8-(0x48+0x1126+-0x22d*0x8))?(_0x1eff63=_0x3cc963+_0x2670e0['VeGCe'](_0x27dd6f,_0x1bfb0c)*(_0x432487-(-0x1d7a+0x1*-0xf82+0x2d02)),_0x325adb=_0x37a5ba+_0x2670e0['tPUog'](_0x1485ff/_0x1bfb0c,_0x2670e0[_0x4b5e71(0x5f0)](_0x3d87c3,-0x1ada+0x20fa+-0x61a))):(_0x1eff63=_0x2670e0['KJZOX'](_0xfbe965,_0x27dd6f),_0x325adb=_0x2670e0[_0x4b5e71(0x847)](_0x1070f1,_0x1485ff));continue;case'8':var _0x27dd6f=_0x2670e0[_0x4b5e71(0x448)](_0x2670e0[_0x4b5e71(0x651)](_0x56f65b['x'],_0x68db1c[_0x4b5e71(0x3c0)][0xb5a+0x829*-0x2+0x4f8]),_0x4955fd),_0x1485ff=(_0x56f65b['z']-_0x4e9282['feet'][-0x1*-0x1639+0x12dc+-0x2913])*_0x277885;continue;case'9':_0x2cfde3['fill']();continue;case'10':_0x54c7a5['begin'+'Path']();continue;}break;}}else{var _0x599f90={'__sakura':_0x4c4dd1,'kind':_0x44b569};if(_0x3d2098){for(var _0x1b94ee in _0x3d2098)_0x599f90[_0x1b94ee]=_0x3d2098[_0x1b94ee];}try{if(window['paren'+'t']&&window[_0x4b5e71(0x4dd)+'t']!==window)window[_0x4b5e71(0x4dd)+'t'][_0x4b5e71(0x531)+_0x4b5e71(0x1e9)+'e'](_0x599f90,'*');}catch(_0x284e5c){}try{if(window[_0x4b5e71(0x3cb)]&&_0x2670e0['XOmuh'](window[_0x4b5e71(0x3cb)],window))window['top'][_0x4b5e71(0x531)+'essag'+'e'](_0x599f90,'*');}catch(_0x79e78e){}}}console['log'](_0x3e5c02(0x291)+_0x3e5c02(0x4db)+_0x3e5c02(0x79a)+_0x3e5c02(0x814)+'\x20ACTI'+_0x3e5c02(0x655)+_0x56a163,'color'+':'+_0xe12a9f+_0x2670e0[_0x3e5c02(0x45d)],{'host':_0x3feca0,'href':location['href'],'version':_0x56a163}),_0x2670e0['GrivD'](_0x134791,'hello',{'host':_0x3feca0,'role':_0x9f8930});var _0x448406=window['__SAK'+_0x3e5c02(0x342)+_0x3e5c02(0x4c1)]&&window['__SAK'+'URA_S'+_0x3e5c02(0x4c1)]['at']||Date[_0x3e5c02(0x31d)]();window[_0x3e5c02(0x72a)+_0x3e5c02(0x7d3)+'stene'+'r'](_0x2670e0['eCGAP'],function(_0x976b2d){var _0x1d34b0=_0x3e5c02;try{if('wcKjG'===_0x1d34b0(0x73f)){var _0x3a81b9=_0x976b2d&&_0x976b2d['data'];if(!_0x3a81b9||_0x2670e0[_0x1d34b0(0x22d)](_0x3a81b9['__sak'+_0x1d34b0(0x209)],_0x4c4dd1)||_0x3a81b9[_0x1d34b0(0x349)]!=='cmd')return;_0x12e73f(_0x3a81b9[_0x1d34b0(0x77d)],_0x3a81b9[_0x1d34b0(0x2c4)]);}else _0x54caaa[_0x1d34b0(0x4ca)][_0x1d34b0(0x423)+'ed']=![];}catch(_0x56d4d0){}});try{var _0x3e409c=new BroadcastChannel('sakur'+'a-sw');_0x3e409c['onmes'+'sage']=function(_0x50c872){var _0x3a620a=_0x3e5c02,_0x5828e8=_0x50c872[_0x3a620a(0x430)];if(_0x5828e8&&_0x5828e8[_0x3a620a(0x1b8)+_0x3a620a(0x209)]===_0x4c4dd1&&_0x2670e0[_0x3a620a(0x843)](_0x5828e8[_0x3a620a(0x349)],'cmd'))_0x12e73f(_0x5828e8[_0x3a620a(0x77d)],_0x5828e8[_0x3a620a(0x2c4)]);};}catch(_0x3f8bdb){}var _0x5493d7=[];(function _0x3160f8(){var _0x5ad73b=_0x3e5c02,_0xb82a3e={'Tpvob':_0x2670e0['IQgIr'],'rlbFV':'hello','whudW':function(_0x2df3f3){var _0x4853bd=_0x310c;return _0x2670e0[_0x4853bd(0x780)](_0x2df3f3);},'cVCxj':_0x5ad73b(0x291)+_0x5ad73b(0x4db)+_0x5ad73b(0x5cc)+_0x5ad73b(0x6ab)+_0x5ad73b(0x36d)+_0x5ad73b(0x66e),'zhQuJ':_0x2670e0['bJoHE'],'VIGpK':_0x2670e0['VAeuN'],'VYNEA':_0x5ad73b(0x33d),'PynCX':function(_0x1b0ba7,_0x6cbabc){var _0x318093=_0x5ad73b;return _0x2670e0[_0x318093(0x794)](_0x1b0ba7,_0x6cbabc);}},_0x2ded85=[_0x2670e0[_0x5ad73b(0x206)],_0x2670e0[_0x5ad73b(0x84d)],_0x5ad73b(0x3ec),_0x2670e0[_0x5ad73b(0x5fb)],_0x2670e0[_0x5ad73b(0x7e8)]];for(var _0x278e7f=-0x5*-0x29d+0x161a+-0x232b;_0x2670e0[_0x5ad73b(0x70b)](_0x278e7f,_0x2ded85[_0x5ad73b(0x267)+'h']);_0x278e7f++){(function(_0x515cfb){var _0x3d2b55=_0x5ad73b,_0x5875a3={'XcSdg':function(_0x4bfb2f,_0x4c05fe){return _0x4bfb2f!==_0x4c05fe;},'jPbTB':_0xb82a3e['rlbFV'],'TlybN':function(_0x493b4a){var _0x4b961=_0x310c;return _0xb82a3e[_0x4b961(0x168)](_0x493b4a);},'GPJdC':_0xb82a3e[_0x3d2b55(0x234)],'GwJek':_0xb82a3e['zhQuJ'],'CITtN':function(_0x513556,_0x4d9ba3){return _0x513556===_0x4d9ba3;},'dmbAJ':_0xb82a3e['VIGpK']};if('rzYuz'===_0xb82a3e['VYNEA']){var _0x5d4eb5=console[_0x515cfb];if(_0xb82a3e['PynCX'](typeof _0x5d4eb5,_0xb82a3e['Tpvob']))return;console[_0x515cfb]=function(){var _0x48807f=_0x3d2b55,_0x2ab841={'SEbrs':function(_0x3b2d2c,_0x44f006){return _0x3b2d2c>>>_0x44f006;}};if(_0x5875a3[_0x48807f(0x5a6)]==='moHRW'){try{if(_0x5875a3['CITtN'](_0x5875a3['dmbAJ'],_0x5875a3[_0x48807f(0x7eb)])){var _0x377f3c='';for(var _0x2b6f85=-0x224a+0x1a50+-0x7fa*-0x1;_0x2b6f85<arguments['lengt'+'h'];_0x2b6f85++){var _0x180e19=arguments[_0x2b6f85];if(typeof _0x180e19===_0x48807f(0x867)+'g')_0x377f3c+=_0x180e19;else{if(_0x180e19&&_0x180e19['messa'+'ge'])_0x377f3c+=_0x180e19['messa'+'ge'];}}if(_0x5875a3[_0x48807f(0x7b1)](_0x377f3c[_0x48807f(0x7a7)+'Of'](_0x5e1328),-(-0xe01+-0x234b+0x314d)))return _0x5d4eb5[_0x48807f(0x830)](console,arguments);if(_0x377f3c[_0x48807f(0x7a7)+'Of']('Unity'+_0x48807f(0x561)+_0x48807f(0x817))!==-(0x190b+-0x2*-0x478+-0x21fa)){if(_0x48807f(0x737)!==_0x48807f(0x3d8)){var _0x218396=_0x377f3c[_0x48807f(0x65d)](-0xf4e+-0x201d*-0x1+0x1*-0x10cf,0x229+0x1f7e+-0x207b);if(_0x5875a3['CITtN'](_0x5493d7[_0x48807f(0x7a7)+'Of'](_0x218396),-(-0x1*0x22df+-0x1721+0x3a01))&&_0x5493d7[_0x48807f(0x267)+'h']<-0x24ca+0x5*-0x74b+0x1*0x497d)_0x5493d7['push'](_0x218396);}else _0x815d3f['camer'+'a']='0x'+_0x2ab841[_0x48807f(0x79b)](_0x5392aa,0x1b*0x5b+-0xfad*-0x1+-0x1946)['toStr'+'ing'](-0x2*-0x4bd+0x189a+-0x881*0x4),_0x25b17f[_0x48807f(0x68f)+_0x48807f(0x5c5)]=_0x2228d4;}}else _0x3f337b['textC'+_0x48807f(0x64b)+'t']=_0x26584f(_0x5302df);}catch(_0x3fbcd5){}return _0x5d4eb5[_0x48807f(0x830)](console,arguments);}else{var _0x20dfff=_0x42092c['data'];if(!_0x20dfff||_0x5875a3[_0x48807f(0x7b1)](_0x20dfff[_0x48807f(0x1b8)+'ura'],_0x2af62b))return;try{if(_0x20dfff[_0x48807f(0x349)]===_0x5875a3[_0x48807f(0x5a9)]){_0x2f8b88()[_0x48807f(0x4d5)]({'host':_0x20dfff[_0x48807f(0x577)],'elapsedMs':0x0,'arm':{},'hooksApplied':0x0,'hooksTotal':0x0});return;}if(_0x20dfff[_0x48807f(0x349)]===_0x48807f(0x7e4)+'t')_0x5875a3['TlybN'](_0x54ab03)['set'](_0x20dfff['repor'+'t']);}catch(_0xce34ee){_0x117869[_0x48807f(0x546)](_0x5875a3['GPJdC'],'color'+':'+_0x2f3234,_0xce34ee);}}};}else{var _0xcb5df3=_0xe64016[_0x3d2b55(0x26b)+'r'](function(_0x1aa49e){return _0x1aa49e['type']===_0x39a3f2;})[-0x2519+0x1*0x1e0c+0x70d*0x1];_0xa08d1c={'type':_0x26f4c1,'atMs':_0xfad8f2[_0x3d2b55(0x31d)]()-_0x50a6b7,'originalFunc':!!(_0xcb5df3&&_0xcb5df3['hook']&&typeof _0xcb5df3['hook'][_0x3d2b55(0x672)+'nalFu'+'nc']===_0xb82a3e['Tpvob']),'resolveGameAtFire':!!_0x15a607(),'gameSourceAtFire':_0xc51987[_0x3d2b55(0x855)+'e']};}}(_0x2ded85[_0x278e7f]));}}());var _0x383d6e={'attempted':![],'ok':![],'error':null,'hooksRegistered':0x0},_0x5eb8f3=null,_0x323f88=null,_0x1005b6=-(-0x13*-0x57+-0x13b5*0x1+0x179*0x9),_0x17f8d7=null;function _0x25d9ac(_0x429415){var _0x1b3cf6=_0x3e5c02;try{if(!_0x429415)return;var _0x5ba412=_0x429415[_0x1b3cf6(0x724)+_0x1b3cf6(0x189)]?_0x429415['insta'+_0x1b3cf6(0x189)][_0x1b3cf6(0x1c0)+'ts']:_0x429415[_0x1b3cf6(0x1c0)+'ts']||null;if(!_0x5ba412)return;if(!_0x17f8d7)try{if('nlQyt'===_0x2670e0['olrSc'])_0x17f8d7=Object[_0x1b3cf6(0x251)](_0x5ba412)['slice'](-0x17cb+-0x586*-0x6+-0x959,-0x5a5+-0xeac+-0x37*-0x5f);else try{return _0x539337&&_0x14e2da[_0x1b3cf6(0x610)+'r']?_0x3e3621[_0x1b3cf6(0x610)+'r'][_0x1b3cf6(0x7a3)+_0x1b3cf6(0x479)]:0x1*-0xf1c+-0x1*0x82b+-0x65*-0x3b;}catch(_0x6ae3d5){return 0x20a1+-0x24b5+-0x4*-0x105;}}catch(_0x476336){}var _0x2aa810=_0x5ba412['memor'+'y'];_0x2aa810&&_0x2aa810[_0x1b3cf6(0x610)+'r']&&_0x2aa810[_0x1b3cf6(0x610)+'r'][_0x1b3cf6(0x7a3)+_0x1b3cf6(0x479)]>-0xae*-0x1+0x1130+-0x11de&&(_0x323f88=_0x2aa810,_0x1005b6=_0x2670e0['tyhys'](Date['now'](),_0x448406));}catch(_0x4b9580){}}function _0x142e31(){var _0x32afeb=_0x3e5c02;try{if(_0x2670e0[_0x32afeb(0x465)](typeof WebAssembly,'undef'+_0x32afeb(0x7de)))return;var _0x293c91=['insta'+_0x32afeb(0x5ce)+'e',_0x2670e0['fuLrv']];for(var _0x320e58=-0x1*0x2038+-0xaf*0x2b+-0x1*-0x3d9d;_0x2670e0[_0x32afeb(0x301)](_0x320e58,_0x293c91[_0x32afeb(0x267)+'h']);_0x320e58++){if(_0x2670e0[_0x32afeb(0x7cb)](_0x32afeb(0x438),_0x32afeb(0x438)))(function(_0xc9387d){var _0x29ae96=_0x32afeb,_0x5c319a=WebAssembly[_0xc9387d];if(typeof _0x5c319a!=='funct'+_0x29ae96(0x3c8)||_0x5c319a['__sak'+'uraMe'+_0x29ae96(0x464)+'ap'])return;var _0x56057c=function(){var _0x212e81=_0x29ae96,_0x40dee8={'jRGym':function(_0x4f4ece,_0x4d0aed){return _0x4f4ece(_0x4d0aed);}};if('bVjlI'!==_0x212e81(0x7ec)){if(_0x429ac7)_0x55d85a['textC'+_0x212e81(0x64b)+'t']=(_0x40dee8[_0x212e81(0x341)](_0x39c07b,_0x482d67['value'])||0x1f*0x7c+0x1ba9+0x4*-0xaab)['toFix'+'ed'](-0x1*-0x1611+0x1*0x103c+0x81*-0x4c)+'x';_0xc3fe7();}else{var _0x220972=_0x5c319a['apply'](this,arguments);try{if(_0x220972&&typeof _0x220972[_0x212e81(0x841)]===_0x212e81(0x184)+'ion')_0x220972['then'](_0x25d9ac,function(){});else _0x25d9ac(_0x220972);}catch(_0x256212){}return _0x220972;}};_0x56057c[_0x29ae96(0x1b8)+'uraMe'+_0x29ae96(0x464)+'ap']=!![];try{Object['defin'+'eProp'+_0x29ae96(0x2c9)](_0x56057c,_0x29ae96(0x6e1),{'value':_0x5c319a[_0x29ae96(0x6e1)],'configurable':!![]});}catch(_0x33fbf5){}WebAssembly[_0xc9387d]=_0x56057c;}(_0x293c91[_0x320e58]));else{var _0x2d5427=_0x10d2bc[_0x4490ba[_0x4bd34d]];if(_0x2d5427&&typeof _0x2d5427==='objec'+'t'&&_0x2d5427['Modul'+'e']&&_0x2d5427['Modul'+'e']['HEAPU'+'8']&&_0x2d5427['Modul'+'e'][_0x32afeb(0x7fd)+'8'][_0x32afeb(0x610)+'r'])return _0xc21b52[_0x32afeb(0x855)+'e']=_0x2670e0[_0x32afeb(0x160)]+_0x5a77e7[_0x78e059]+('.Modu'+'le'),_0x2d5427;}}}catch(_0x5264d8){}}var _0x353bd1=null,_0x2da501=null,_0x40b563={},_0x1c14e7=[],_0x272b92=[],_0x3e75b8=[{'type':'FPSco'+_0x3e5c02(0x279)+_0x3e5c02(0x43f),'keep':!![]},{'type':_0x2670e0['ONPFY'],'keep':!![]},{'type':_0x2670e0[_0x3e5c02(0x819)],'keep':![]},{'type':_0x3e5c02(0x2d8)+_0x3e5c02(0x6fc)+_0x3e5c02(0x3f4),'keep':!![]},{'type':'GG_Ga'+'meMan'+_0x3e5c02(0x51f),'keep':!![]},{'type':_0x3e5c02(0x500)+'nNetw'+_0x3e5c02(0x1cb)+'nc','keep':!![],'many':!![]},{'type':'Netwo'+_0x3e5c02(0x6a6)+_0x3e5c02(0x478)+'imati'+'ons','keep':!![],'many':!![]},{'type':_0x2670e0[_0x3e5c02(0x6da)],'keep':!![],'many':!![]},{'type':'Enemy'+'Bot','keep':!![],'many':!![]}],_0x4cbe57=[_0x3e5c02(0x6ca)+_0x3e5c02(0x5c1)+_0x3e5c02(0x750)+_0x3e5c02(0x20f),_0x3e5c02(0x6ca)+_0x3e5c02(0x5c1)+'Sharp'+'-firs'+_0x3e5c02(0x80c)+'.dll','ch.sy'+_0x3e5c02(0x3fb)+'ge.De'+_0x3e5c02(0x471)+'ll',_0x2670e0[_0x3e5c02(0x7c2)],_0x3e5c02(0x4ae)+_0x3e5c02(0x427)+_0x3e5c02(0x2f4)+_0x3e5c02(0x788)+_0x3e5c02(0x1f6)+'r.dll',_0x3e5c02(0x6b2)+'erate'+'d'];(function _0x5aef40(){var _0x3478b4=_0x3e5c02;try{var _0x35d160=window[_0x3478b4(0x330)+'WebMo'+_0x3478b4(0x817)]&&window['Unity'+_0x3478b4(0x561)+_0x3478b4(0x817)]['Runti'+'me'];if(!_0x35d160||_0x2670e0[_0x3478b4(0x80b)](typeof _0x35d160[_0x3478b4(0x2b6)+'ePlug'+'in'],_0x2670e0[_0x3478b4(0x1bc)])){_0x383d6e[_0x3478b4(0x3ec)]=_0x2670e0[_0x3478b4(0x497)];return;}_0x383d6e['attem'+_0x3478b4(0x1e7)]=!![],_0x2da501=_0x35d160['creat'+_0x3478b4(0x43c)+'in']({'name':_0x2670e0[_0x3478b4(0x33c)],'version':_0x56a163,'referencedAssemblies':_0x4cbe57[_0x3478b4(0x65d)]()}),_0x383d6e['ok']=!![];try{if('hhvur'!=='FjjjQ'){var _0x325d42=window['Unity'+_0x3478b4(0x561)+_0x3478b4(0x817)]['Runti'+'me'];_0x325d42[_0x3478b4(0x1b8)+_0x3478b4(0x296)+'g']=_0x56a163+':'+Math['rando'+'m']()['toStr'+_0x3478b4(0x3a4)](0x1129+0x225*0x3+-0x1774)[_0x3478b4(0x65d)](0x120+-0x2483+-0x2365*-0x1,-0x38+-0x1237+-0x1279*-0x1),_0x5eb8f3=_0x325d42[_0x3478b4(0x1b8)+'uraTa'+'g'];}else _0x18e383(_0x3478b4(0x7bc)+'hot');}catch(_0x5c5c48){}_0x4130d6(),_0x383d6e[_0x3478b4(0x4eb)+'Regis'+_0x3478b4(0x2e3)]=_0x1c14e7[_0x3478b4(0x267)+'h'],_0x142e31(),_0x383d6e[_0x3478b4(0x1d7)+'yTap']=!![];}catch(_0x2c94ff){_0x383d6e[_0x3478b4(0x3ec)]=String(_0x2c94ff&&_0x2c94ff[_0x3478b4(0x269)+'ge']||_0x2c94ff);}}());var _0x4aa34e=new Float32Array(-0x2372+-0x945+0x2cb8),_0x119639=new Int32Array(_0x4aa34e['buffe'+'r']);function _0x46f7e1(_0x4ec5c1){var _0x3be650=_0x3e5c02,_0x530964={'BeYUf':function(_0x39f774,_0x15c3a2){return _0x39f774+_0x15c3a2;},'KPGOI':_0x3be650(0x539),'JKpMt':'no\x20en'+_0x3be650(0x4f1)+_0x3be650(0x785)+_0x3be650(0x587)+_0x3be650(0x43d)+'cam\x20','OREKx':function(_0x2decae,_0x38ef07){return _0x2decae>_0x38ef07;},'aCeGF':_0x3be650(0x5a0)+'99'};if(_0x2670e0[_0x3be650(0x295)]===_0x3be650(0x2e7))return _0x4aa34e[-0xf1*0x2+0xc3c+-0x2*0x52d]=_0x4ec5c1,_0x119639[-0x1bf*0x2+0x11*0xbf+0x931*-0x1];else _0x18513a['textC'+'onten'+'t']=_0x34b203>0x1*0xe99+-0x422+0x13*-0x8d?_0x530964[_0x3be650(0x77f)](_0x3be650(0x57f)+_0x3be650(0x492)+_0x36c163,_0x40cd9e?_0x530964[_0x3be650(0x77f)]('\x20+\x20'+_0x45ab9a,_0x530964[_0x3be650(0x5e8)]):'')+(_0x83b31e&&_0xa344ac[_0x3be650(0x68f)+'a']?_0x530964['BeYUf'](_0x3be650(0x4cd)+'\x20',_0x15cda3[_0x3be650(0x68f)+'aFrom']):_0x3be650(0x4cd)+'\x20-'):_0x530964[_0x3be650(0x369)]+(_0x392b31&&_0x1efbd1['camer'+'a']?_0x12f82e[_0x3be650(0x68f)+'aFrom']:'-'),_0x596054[_0x3be650(0x82d)][_0x3be650(0x4ba)]=_0x530964[_0x3be650(0x5c4)](_0x58e927,-0x537+0x4*-0x61c+-0x1da7*-0x1)?_0x3be650(0x5bd)+'a8':_0x530964['aCeGF'];}function _0x12cd91(_0x490949){return _0x119639[-0x710+-0x3c7*-0x5+-0xbd3]=_0x490949|-0x1f*0x1f+-0x2259*0x1+0x261a*0x1,_0x4aa34e[-0x14e5+0x1c08+-0x723];}var _0x166ac7={'ok':0x0,'failed':0x0,'lastError':null,'source':null};function _0x350b1c(){var _0xd40f8d=_0x3e5c02,_0x2695e8={'BYssx':function(_0xd56523,_0x35716d){return _0xd56523+_0x35716d;},'Xdroi':function(_0x5a1f2e,_0x44cd1a,_0x52fc93){return _0x5a1f2e(_0x44cd1a,_0x52fc93);},'bJAlp':function(_0x195f0a,_0x53c363){return _0x195f0a+_0x53c363;},'oBnvW':function(_0x3e0145,_0x49ecfa){return _0x3e0145===_0x49ecfa;},'jFjuD':_0xd40f8d(0x218),'uwjFl':function(_0x11002f,_0x41d4a8){return _0x2670e0['PiiLk'](_0x11002f,_0x41d4a8);},'IjOCj':function(_0x449d79,_0x452701){var _0x539b8c=_0xd40f8d;return _0x2670e0[_0x539b8c(0x755)](_0x449d79,_0x452701);},'IpBTp':_0xd40f8d(0x39e),'nvDAq':function(_0x553c26,_0x468bb1){return _0x2670e0['ILMUE'](_0x553c26,_0x468bb1);}};if(_0x2670e0[_0xd40f8d(0x355)]!==_0x2670e0[_0xd40f8d(0x355)])_0x71ad6d=_0x2670e0['Wmlem'](_0x2670e0[_0xd40f8d(0x648)](_0xd40f8d(0x1e4)+'ok\x20fi'+_0xd40f8d(0x305)+'t\x20'+_0x11e98d[_0xd40f8d(0x5a3)+_0xd40f8d(0x846)+'oof']['atMs']+(_0xd40f8d(0x787)+_0xd40f8d(0x591)+_0xd40f8d(0x3f8)+_0xd40f8d(0x462)+'='),_0x281d61[_0xd40f8d(0x5a3)+_0xd40f8d(0x846)+'oof']['origi'+_0xd40f8d(0x553)+'nc'])+(_0xd40f8d(0x1c6)+_0xd40f8d(0x1a5)+'resol'+'ved=')+_0x2ff9d9['hookF'+_0xd40f8d(0x846)+'oof']['resol'+'veGam'+'eAtFi'+'re']+('\x20(sou'+_0xd40f8d(0x287)),_0x33519d['hookF'+_0xd40f8d(0x846)+'oof'][_0xd40f8d(0x256)+_0xd40f8d(0x416)+'AtFir'+'e']||_0xd40f8d(0x340))+('),\x20so'+'\x20the\x20'+_0xd40f8d(0x71b)+_0xd40f8d(0x7cc)+'exist'+_0xd40f8d(0x690)+_0xd40f8d(0x335)+'d\x20is\x20'+_0xd40f8d(0x20d)+'eacha'+'ble\x20n'+'ow.');else{try{if(_0x2da501&&_0x2da501['_runt'+'ime']){var _0x4c1256=_0x2da501[_0xd40f8d(0x6f9)+'ime'];if(typeof _0x4c1256['resol'+'veGam'+'e']===_0xd40f8d(0x184)+_0xd40f8d(0x3c8)){var _0x45e4dd=_0x4c1256[_0xd40f8d(0x6d9)+_0xd40f8d(0x453)+'e']();if(_0x45e4dd)return _0x166ac7['sourc'+'e']=_0xd40f8d(0x838)+'n._ru'+_0xd40f8d(0x408)+_0xd40f8d(0x69d)+_0xd40f8d(0x6b7)+_0xd40f8d(0x58a),_0x45e4dd;}if(_0x4c1256[_0xd40f8d(0x21b)]){if(_0x2670e0[_0xd40f8d(0x7b4)]!==_0xd40f8d(0x3ef)){var _0x3f7f52=_0x1d5542(_0xf8dc29);_0x56732a[_0xc53d]=_0x3f7f52[_0xd40f8d(0x426)],_0x288f74[_0x1fe5b2]={'key':_0x3f7f52['key'],'sane':_0x3f7f52[_0xd40f8d(0x4ec)],'checked':_0x3f7f52[_0xd40f8d(0x67b)+'ed'],'keyConsistent':_0x3f7f52['keyCo'+'nsist'+_0xd40f8d(0x5c8)],'keySource':_0x3f7f52[_0xd40f8d(0x3e9)+_0xd40f8d(0x7d2)]};}else return _0x166ac7[_0xd40f8d(0x855)+'e']=_0x2670e0[_0xd40f8d(0x601)],_0x4c1256[_0xd40f8d(0x21b)];}}}catch(_0x5d7472){}try{var _0x22ecb3=window['Unity'+_0xd40f8d(0x561)+_0xd40f8d(0x817)]&&window[_0xd40f8d(0x330)+_0xd40f8d(0x561)+_0xd40f8d(0x817)]['Runti'+'me'];if(_0x22ecb3&&typeof _0x22ecb3[_0xd40f8d(0x6d9)+'veGam'+'e']===_0x2670e0[_0xd40f8d(0x1bc)]){if(_0x2670e0[_0xd40f8d(0x86a)](_0x2670e0['WfgDR'],_0xd40f8d(0x71d)))return{'o':_0x2695e8['BYssx']('0x',_0x75d711[-0x169*-0x2+0xe03+0x1f*-0x8b][_0xd40f8d(0x80d)+_0xd40f8d(0x3a4)](-0x2*0x9d5+-0x2551*0x1+0x11*0x35b)),'v':_0x2695e8[_0xd40f8d(0x2a6)](_0x2e6f44,_0x2695e8['bJAlp'](_0x501911,_0x238dcc[-0x1*0x268f+-0x2*0x989+0x1*0x39a1]),_0x4e766a[-0x24d9+-0x45*-0x23+-0x1b6b*-0x1])};else{var _0x37c1c8=_0x22ecb3[_0xd40f8d(0x6d9)+_0xd40f8d(0x453)+'e']();if(_0x37c1c8)return _0x166ac7[_0xd40f8d(0x855)+'e']=_0x2670e0[_0xd40f8d(0x5af)],_0x37c1c8;}}if(_0x22ecb3&&_0x22ecb3['_game'])return _0x166ac7['sourc'+'e']=_0xd40f8d(0x7b8)+'me._g'+_0xd40f8d(0x517),_0x22ecb3;}catch(_0x24c60e){}try{if(_0x2670e0[_0xd40f8d(0x388)](_0x2670e0['UZohM'],_0xd40f8d(0x670))){var _0x5b0a07=_0x3f91b6[_0x2f4824],_0x4f6957=_0x587fe3(_0x585493,_0x16aed5,_0x5b0a07['size']);if(!_0x4f6957)return null;var _0x30c031=new _0x20220d(_0x4f6957['buffe'+'r'],_0x4f6957[_0xd40f8d(0x1f9)+'ffset'],_0x4f6957[_0xd40f8d(0x7a3)+_0xd40f8d(0x479)]),_0x33af0e=_0x30c031[_0xd40f8d(0x7ad)+'t32'](_0x5b0a07[_0xd40f8d(0x3b4)],!![]),_0x130866=_0x30c031['getIn'+_0xd40f8d(0x399)](_0x5b0a07['hidde'+'n'],!![]),_0x3a5004=_0x30c031[_0xd40f8d(0x795)+_0xd40f8d(0x84c)](_0x5b0a07[_0xd40f8d(0x683)+'d'])&0x1398+-0x5*-0x40f+-0x27e2,_0x32adbc=_0x2695e8[_0xd40f8d(0x789)](_0x39c931,_0x2695e8[_0xd40f8d(0x45b)])?_0x30c031['getFl'+'oat32'](_0x5b0a07[_0xd40f8d(0x332)],!![]):_0xb64b01===_0xd40f8d(0x39e)?_0x30c031[_0xd40f8d(0x7ad)+_0xd40f8d(0x399)](_0x5b0a07[_0xd40f8d(0x332)],!![]):_0x30c031['getUi'+_0xd40f8d(0x84c)](_0x5b0a07['fake']),_0xf42784=_0x2695e8['uwjFl'](_0x30c031['getUi'+_0xd40f8d(0x84c)](_0x5b0a07['activ'+'e']),-0x13*-0x139+0x613+0x1*-0x1d4d);return{'keyAtOffset0':_0x33af0e,'hidden':_0x130866,'inited':_0x3a5004,'fake':_0x32adbc,'act':_0xf42784,'hex':_0x2695e8['IjOCj'](_0x435c57,_0x4f6957),'alt':_0x2695e8[_0xd40f8d(0x789)](_0x34aaf1,_0x2695e8['IpBTp'])?_0x130866^_0x2695e8[_0xd40f8d(0x440)](_0x32adbc,0x371*-0x2+0xff0+0x487*-0x2):null};}else{var _0x2c05a5=window[_0xd40f8d(0x3b2)+'Insta'+_0xd40f8d(0x189)]||window['unity'+_0xd40f8d(0x4b9)]||window['game'];if(_0x2c05a5)return _0x166ac7[_0xd40f8d(0x855)+'e']='windo'+_0xd40f8d(0x23c)+'bal',_0x2c05a5;}}catch(_0x573abc){}try{if(_0x2670e0[_0xd40f8d(0x770)](typeof game,'undef'+_0xd40f8d(0x7de))&&game)return _0x2670e0['NOnFJ'](_0x2670e0[_0xd40f8d(0x6d8)],_0xd40f8d(0x78d))?{'w':0x0,'h':0x0}:(_0x166ac7['sourc'+'e']=_0xd40f8d(0x446)+'game\x20'+_0xd40f8d(0x3ca)+'ng',game);}catch(_0x21d060){}try{var _0x20871e=Object['keys'](window);for(var _0x2275c1=0x121c+0x66f+0x1*-0x188b;_0x2275c1<_0x20871e[_0xd40f8d(0x267)+'h']&&_0x2275c1<0x976+0x2*-0x309+0x10c*-0x1;_0x2275c1++){if(_0xd40f8d(0x5e5)==='phhzO'){var _0x5643d9=window[_0x20871e[_0x2275c1]];if(_0x5643d9&&typeof _0x5643d9===_0x2670e0[_0xd40f8d(0x18e)]&&_0x5643d9[_0xd40f8d(0x6ad)+'e']&&_0x5643d9[_0xd40f8d(0x6ad)+'e'][_0xd40f8d(0x7fd)+'8']&&_0x5643d9[_0xd40f8d(0x6ad)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x166ac7['sourc'+'e']=_0xd40f8d(0x71a)+'w.'+_0x20871e[_0x2275c1]+('.Modu'+'le'),_0x5643d9;}else{var _0x140ba7=_0x3e7671[_0x1d8442];for(var _0x78a170=-0x1461+0x4*0x4+0x7*0x2e7;_0x78a170<_0x140ba7[_0xd40f8d(0x267)+'h'];_0x78a170++){_0x1e1891[_0x2670e0['LcWLk'](_0x57541f,'+0x')+_0x140ba7[_0x78a170]['o'][_0xd40f8d(0x80d)+_0xd40f8d(0x3a4)](0x3*0x98e+-0x1350+-0x94a)]=_0x140ba7[_0x78a170]['v'];}}}}catch(_0x389a64){}return _0x166ac7['sourc'+'e']=null,null;}}function _0xf39e19(){var _0x65ab0=_0x3e5c02;try{if(_0x323f88&&_0x323f88['buffe'+'r']&&_0x323f88['buffe'+'r']['byteL'+'ength'])return _0x166ac7[_0x65ab0(0x855)+'e']=_0x166ac7['sourc'+'e']||_0x65ab0(0x724)+'ntiat'+'e().e'+'xport'+_0x65ab0(0x812)+_0x65ab0(0x4a2),new Uint8Array(_0x323f88[_0x65ab0(0x610)+'r']);}catch(_0x33a848){}try{var _0x233a42=_0x350b1c();if(_0x233a42&&_0x233a42['Modul'+'e']&&_0x233a42['Modul'+'e'][_0x65ab0(0x7fd)+'8']&&_0x233a42['Modul'+'e']['HEAPU'+'8']['buffe'+'r'])return _0x233a42[_0x65ab0(0x6ad)+'e']['HEAPU'+'8'];}catch(_0x63a569){}return null;}function _0x4abe51(){var _0x1d971a=_0x3e5c02;if(_0x2670e0[_0x1d971a(0x5ca)](_0x1d971a(0x801),'bOehs')){var _0x1d4c45=_0x14ab8c[_0x14532d]['param'+'s']['join'](',')+'\x20->\x20'+(_0x2d5a57[_0x299aa0][_0x1d971a(0x4e9)+_0x1d971a(0x64a)]||_0x2670e0[_0x1d971a(0x802)]);_0x442f62[_0x1d4c45]=(_0x284448[_0x1d4c45]||-0x2*0x1343+0x1fce+-0xa*-0xac)+(0x2*0x462+0x13ef+-0x1cb2*0x1);}else{var _0x344189=_0x2670e0[_0x1d971a(0x643)](_0xf39e19);if(!_0x344189)return null;try{return new DataView(_0x344189[_0x1d971a(0x610)+'r'],_0x344189[_0x1d971a(0x1f9)+_0x1d971a(0x395)],_0x344189['byteL'+_0x1d971a(0x479)]);}catch(_0x48ec36){if(_0x1d971a(0x3a3)!==_0x1d971a(0x4b1))return null;else _0xffae61['push'](_0x59a1d8['type']+':\x20'+_0x2670e0['mAPCo'](_0x3d808e,_0x1b4d5d&&_0x73691[_0x1d971a(0x269)+'ge']||_0x2c42fd)[_0x1d971a(0x65d)](-0xa51+0x26ca+-0x25*0xc5,-0xad3+-0x7*0x71+0xe8a));}}}function _0x3f7cfa(_0x448d10,_0x146c6f){var _0x423377=_0x3e5c02,_0x1ec08d={'tonUD':function(_0xc36c39,_0x2f1e82){var _0xf30771=_0x310c;return _0x2670e0[_0xf30771(0x783)](_0xc36c39,_0x2f1e82);}},_0x505bee=_0x4abe51();if(!_0x505bee)return _0x166ac7['faile'+'d']++,_0x166ac7['lastE'+_0x423377(0x72d)]=_0x166ac7['lastE'+_0x423377(0x72d)]||_0x2670e0['iJpww'],undefined;if(_0x2670e0[_0x423377(0x63b)](_0x448d10,-0x2324+0x1181+0x387*0x5)||_0x2670e0[_0x423377(0x2a0)](_0x448d10,0x68b+0x1f9d*0x1+-0x4*0x989)>_0x505bee[_0x423377(0x7a3)+_0x423377(0x479)])return _0x2670e0['aDHFx'](_0x2670e0[_0x423377(0x21a)],_0x423377(0x2d5))?(_0x166ac7[_0x423377(0x777)+'d']++,_0x166ac7[_0x423377(0x23d)+_0x423377(0x72d)]=_0x166ac7[_0x423377(0x23d)+'rror']||_0x2670e0[_0x423377(0x1a1)](_0x2670e0['FheMj'](_0x2670e0['fdDAT']('addre'+_0x423377(0x57d),_0x448d10['toStr'+_0x423377(0x3a4)](0x586+0x1228*-0x1+0xd*0xfa)),'\x20past'+_0x423377(0x63d)+_0x423377(0x238)+'0x'),_0x505bee[_0x423377(0x7a3)+'ength'][_0x423377(0x80d)+_0x423377(0x3a4)](-0x8*0x3ed+-0x1*-0x10ea+0xe8e)),undefined):(_0x4a86f5['faile'+'d']++,_0x8638d3['lastE'+'rror']=_0x4fd273[_0x423377(0x23d)+_0x423377(0x72d)]||_0x1ec08d[_0x423377(0x56c)](_0x423377(0x7ba)+'ss\x200x'+(_0x3c1779+_0x2560dd)[_0x423377(0x80d)+_0x423377(0x3a4)](-0x7*0x494+-0x568*0x1+0x2584),_0x423377(0x1c4)+_0x423377(0x63d)+_0x423377(0x238)+'0x')+_0x7df175['byteL'+'ength'][_0x423377(0x80d)+'ing'](-0x1b59+-0x7*-0x102+0x6c9*0x3),null);try{if(_0x2670e0[_0x423377(0x770)]('yKgkD',_0x2670e0['ouhqi'])){var _0x3e3eed=('4|6|3'+'|2|7|'+_0x423377(0x46b))['split']('|'),_0x32ae86=-0x652+0x1888+-0x309*0x6;while(!![]){switch(_0x3e3eed[_0x32ae86++]){case'0':return _0x12a29e;case'1':try{_0x12a29e['hasMo'+'dule']=!!(_0xaf5d25&&_0xaf5d25['Modul'+'e']),_0x12a29e['heapU'+'8']=!!(_0xaf5d25&&_0xaf5d25['Modul'+'e']&&_0xaf5d25[_0x423377(0x6ad)+'e']['HEAPU'+'8']),_0x12a29e[_0x423377(0x761)+'ytes']=_0x12a29e[_0x423377(0x29a)+'8']?_0xaf5d25['Modul'+'e'][_0x423377(0x7fd)+'8'][_0x423377(0x267)+'h']:0x1723+-0x107e*-0x2+-0x1*0x381f;}catch(_0x272409){_0x12a29e['hasMo'+_0x423377(0x27a)]=![],_0x12a29e[_0x423377(0x29a)+'8']=![],_0x12a29e[_0x423377(0x761)+_0x423377(0x191)]=-0x2ec+0x2*-0x106d+0x2*0x11e3;}continue;case'2':var _0xaf5d25=_0x21c474();continue;case'3':for(var _0x5dad62=0x12e2*0x2+-0x10*-0x167+-0x3c34;_0x5dad62<_0x18ff40['lengt'+'h'];_0x5dad62++){var _0x163803=_0x18ff40[_0x5dad62],_0x448861=typeof _0x2cbd7f[_0x163803];_0x12a29e[_0x163803]=_0x448861==='undef'+'ined'?_0x423377(0x627)+_0x423377(0x7de):_0x448861;}continue;case'4':var _0x18ff40=[_0x423377(0x3b2)+_0x423377(0x538)+_0x423377(0x189),'unity'+_0x423377(0x4b9),_0x423377(0x700),_0x2670e0[_0x423377(0x412)]];continue;case'5':_0x12a29e['value'+_0x423377(0x374)+'er']=typeof _0x25b227;continue;case'6':var _0x12a29e={};continue;case'7':_0x12a29e[_0x423377(0x256)+_0x423377(0x416)]=_0x5cac9d['sourc'+'e'];continue;}break;}}else{_0x166ac7['ok']++;switch(_0x146c6f){case'u8':return _0x505bee[_0x423377(0x795)+'nt8'](_0x448d10);case'i8':return _0x505bee[_0x423377(0x7ad)+'t8'](_0x448d10);case'i16':return _0x505bee[_0x423377(0x7ad)+_0x423377(0x76d)](_0x448d10,!![]);case _0x2670e0[_0x423377(0x5d1)]:return _0x505bee[_0x423377(0x795)+'nt16'](_0x448d10,!![]);case _0x423377(0x666):return _0x505bee[_0x423377(0x7ad)+'t32'](_0x448d10,!![]);case _0x2670e0[_0x423377(0x4d3)]:return _0x505bee[_0x423377(0x795)+_0x423377(0x27c)](_0x448d10,!![]);case _0x423377(0x726):return _0x505bee['getFl'+_0x423377(0x793)](_0x448d10,!![]);case _0x423377(0x707):return _0x505bee['getFl'+'oat64'](_0x448d10,!![]);case'v2':case'v3':case'v4':return _0x505bee[_0x423377(0x34d)+_0x423377(0x793)](_0x448d10,!![]);default:return _0x505bee[_0x423377(0x7ad)+_0x423377(0x399)](_0x448d10,!![]);}}}catch(_0x3f0b8a){return _0x166ac7[_0x423377(0x777)+'d']++,_0x166ac7['lastE'+_0x423377(0x72d)]=_0x166ac7[_0x423377(0x23d)+_0x423377(0x72d)]||String(_0x3f0b8a&&_0x3f0b8a[_0x423377(0x269)+'ge']||_0x3f0b8a)['slice'](0x16*-0x184+-0xb0a+-0x2e*-0xf7,-0xcd5+-0xa8a+0x17d7),undefined;}}function _0x7f8865(_0x42881c,_0x6eb307,_0x15d3d6){var _0x5b2a72=_0x3e5c02,_0x35e356=_0x4abe51();if(!_0x35e356||_0x2670e0['KZJLy'](_0x42881c,-0x22f*0xb+-0x9a8+-0x1*-0x21ad)||_0x2670e0['zkqLG'](_0x2670e0[_0x5b2a72(0x6c6)](_0x42881c,-0xea9*0x1+-0x23fb+0x32a8),_0x35e356[_0x5b2a72(0x7a3)+_0x5b2a72(0x479)]))return![];try{switch(_0x6eb307){case'u8':case'i8':_0x35e356['setUi'+'nt8'](_0x42881c,_0x15d3d6&0x337*0x1+-0x12b0+0x1078);break;case _0x2670e0[_0x5b2a72(0x530)]:case'u16':_0x35e356['setIn'+'t16'](_0x42881c,_0x2670e0['ILMUE'](_0x15d3d6,0x2*0xd6d+-0x24db+0xd*0xc5),!![]);break;case'i32':case _0x2670e0['ZCvVn']:_0x35e356[_0x5b2a72(0x5d4)+_0x5b2a72(0x399)](_0x42881c,_0x15d3d6|0x1933*0x1+0xa71+-0x23a4,!![]);break;case _0x5b2a72(0x726):_0x35e356[_0x5b2a72(0x1a2)+'oat32'](_0x42881c,_0x15d3d6,!![]);break;default:_0x35e356['setIn'+_0x5b2a72(0x399)](_0x42881c,_0x2670e0[_0x5b2a72(0x2d0)](_0x15d3d6,0x320+0x187*-0xb+-0x9*-0x185),!![]);}return!![];}catch(_0x35a1a4){return![];}}var _0x2051c6={'obfF':{'key':0x0,'hidden':0x4,'inited':0xc,'fake':0x10,'active':0x14,'size':0x18,'keyType':'i32'},'obfI':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0xc,'active':0x10,'size':0x14,'keyType':_0x2670e0['ywDOi']},'obfB':{'key':0x0,'hidden':0x4,'inited':0x8,'fake':0x9,'active':0xa,'size':0xc,'keyType':'u8'}};function _0x15df59(_0x5bbde4){var _0x1181a5=_0x3e5c02,_0x98efce='';for(var _0x305877=0xea0+0x1867*0x1+0x1*-0x2707;_0x2670e0[_0x1181a5(0x70b)](_0x305877,_0x5bbde4[_0x1181a5(0x267)+'h']);_0x305877++){var _0x28101d=_0x5bbde4[_0x305877][_0x1181a5(0x80d)+_0x1181a5(0x3a4)](-0x14d2+0x1e54*0x1+-0xd*0xba);_0x98efce+=_0x2670e0['CRimt'](_0x2670e0['PEBNl'](_0x28101d[_0x1181a5(0x267)+'h'],-0x1827+-0x119b*-0x2+-0x29*0x45)?'0':'',_0x28101d);}return _0x98efce;}function _0x48d3d4(_0x14dec1,_0x3ec811,_0x16d6f4){var _0x3eac08=_0x3e5c02,_0x348fb8=_0x2670e0['CLrBO'](_0x4abe51);if(!_0x348fb8)return _0x166ac7['faile'+'d']++,_0x166ac7['lastE'+_0x3eac08(0x72d)]=_0x166ac7['lastE'+_0x3eac08(0x72d)]||_0x2670e0[_0x3eac08(0x15f)],null;if(_0x3ec811<-0x5*-0x6dd+0x1f9f+-0x41f0||_0x2670e0['aGcER'](_0x3ec811+_0x16d6f4,_0x348fb8[_0x3eac08(0x7a3)+'ength']))return _0x166ac7[_0x3eac08(0x777)+'d']++,_0x166ac7['lastE'+'rror']=_0x166ac7['lastE'+_0x3eac08(0x72d)]||_0x3eac08(0x7ba)+'ss\x200x'+_0x2670e0['BldTB'](_0x14dec1,_0x3ec811)[_0x3eac08(0x80d)+_0x3eac08(0x3a4)](-0x40a+-0x1*-0x109d+-0xc83)+(_0x3eac08(0x1c4)+'\x20heap'+'\x20end\x20'+'0x')+_0x348fb8['byteL'+_0x3eac08(0x479)]['toStr'+_0x3eac08(0x3a4)](-0x1509*-0x1+0x2390+-0x3889),null;try{var _0x57138b=new Uint8Array(_0x16d6f4);for(var _0x300a99=0x299*-0xd+-0xe78+0xe9*0x35;_0x300a99<_0x16d6f4;_0x300a99++)_0x57138b[_0x300a99]=_0x348fb8[_0x3eac08(0x795)+'nt8'](_0x2670e0['txVjj'](_0x2670e0[_0x3eac08(0x86d)](_0x14dec1,_0x3ec811),_0x300a99));return _0x166ac7['ok']++,_0x57138b;}catch(_0x3e9cc3){return _0x166ac7['faile'+'d']++,_0x166ac7['lastE'+_0x3eac08(0x72d)]=_0x166ac7[_0x3eac08(0x23d)+'rror']||_0x2670e0[_0x3eac08(0x755)](String,_0x3e9cc3&&_0x3e9cc3['messa'+'ge']||_0x3e9cc3)['slice'](-0xfaa+-0x6f9+-0x487*-0x5,-0x1ad8+0x2*-0x169+0xcb*0x26),null;}}function _0x1d37dc(_0x3bbf98,_0x444088,_0x351c9a){var _0x48070f=_0x3e5c02,_0x114926=(_0x48070f(0x7bd)+'|8|7|'+'0|3|4'+'|9|6')[_0x48070f(0x356)]('|'),_0x22cd27=0x1857+0x1*0x25f1+0x1f24*-0x2;while(!![]){switch(_0x114926[_0x22cd27++]){case'0':var _0x50efbc=_0x371cd4['getIn'+'t32'](_0x106c23['hidde'+'n'],!![]);continue;case'1':if(!_0x25063)return null;continue;case'2':var _0x25063=_0x48d3d4(_0x3bbf98,_0x444088,_0x106c23[_0x48070f(0x637)]);continue;case'3':var _0xbc4fbc=_0x371cd4[_0x48070f(0x795)+_0x48070f(0x84c)](_0x106c23['inite'+'d'])&-0x2011*0x1+0x1b2*0x2+0x1*0x1cae;continue;case'4':var _0x3006cc=_0x351c9a===_0x2670e0[_0x48070f(0x23e)]?_0x371cd4[_0x48070f(0x34d)+'oat32'](_0x106c23[_0x48070f(0x332)],!![]):_0x351c9a==='obfI'?_0x371cd4['getIn'+'t32'](_0x106c23[_0x48070f(0x332)],!![]):_0x371cd4[_0x48070f(0x795)+_0x48070f(0x84c)](_0x106c23[_0x48070f(0x332)]);continue;case'5':var _0x106c23=_0x2051c6[_0x351c9a];continue;case'6':return{'keyAtOffset0':_0xe432ba,'hidden':_0x50efbc,'inited':_0xbc4fbc,'fake':_0x3006cc,'act':_0x26c0fa,'hex':_0x15df59(_0x25063),'alt':_0x2670e0['NoGFw'](_0x351c9a,_0x48070f(0x39e))?_0x50efbc^_0x2670e0[_0x48070f(0x307)](_0x3006cc,-0x3b1*-0x7+0x1210+-0x1*0x2be7):null};case'7':var _0xe432ba=_0x371cd4[_0x48070f(0x7ad)+_0x48070f(0x399)](_0x106c23[_0x48070f(0x3b4)],!![]);continue;case'8':var _0x371cd4=new DataView(_0x25063[_0x48070f(0x610)+'r'],_0x25063[_0x48070f(0x1f9)+'ffset'],_0x25063[_0x48070f(0x7a3)+'ength']);continue;case'9':var _0x26c0fa=_0x371cd4[_0x48070f(0x795)+'nt8'](_0x106c23[_0x48070f(0x5c2)+'e'])&-0x255*-0xf+0x79f*0x3+0x11*-0x367;continue;}break;}}function _0x2fa33f(_0x59e8c7,_0x4aca7b,_0x5b8625){var _0x3947be=_0x3e5c02;if(_0x2670e0['iuuLR'](_0x2670e0[_0x3947be(0x748)],_0x2670e0[_0x3947be(0x767)])){if(_0x30f11c[_0x3947be(0x267)+'h'])return!![];if(!_0x12064f['Unity'+_0x3947be(0x561)+_0x3947be(0x817)]||!_0x5aded2[_0x3947be(0x330)+_0x3947be(0x561)+'dkit'][_0x3947be(0x7b8)+'me'])return![];var _0x44568d=_0x11c9e7['Unity'+_0x3947be(0x561)+_0x3947be(0x817)][_0x3947be(0x7b8)+'me'];if(!_0x44568d['plugi'+'ns']||!_0x44568d['plugi'+'ns'][_0x3947be(0x267)+'h'])return![];_0x25e347=_0x37cd57['Unity'+_0x3947be(0x561)+_0x3947be(0x817)]['Value'+_0x3947be(0x374)+'er'],_0x3d9db8=_0x5dc388||_0x44568d[_0x3947be(0x838)+'ns'][_0x44568d[_0x3947be(0x838)+'ns'][_0x3947be(0x267)+'h']-(-0x1*0x371+-0x7*0x388+0x5*0x5a2)];if(!_0x5bba4e||_0x2670e0['BGgEv'](typeof _0x548ab2['hookP'+'refix'],_0x2670e0['IQgIr']))return![];for(var _0x38efe0=0xdfd+0x1abf+-0x3*0xd94;_0x38efe0<_0x5e5f46[_0x3947be(0x267)+'h'];_0x38efe0++){var _0x26c402=_0x5ae87c[_0x38efe0];try{var _0x2618d0=_0x4a0fe7[_0x3947be(0x7cf)+_0x3947be(0x7f6)]({'typeName':_0x26c402[_0x3947be(0x1fd)],'methodName':_0x2670e0[_0x3947be(0x25b)],'params':[_0x2670e0['ywDOi'],_0x2670e0[_0x3947be(0x46d)]],'returnType':_0x24ffac},_0x3e94fc(_0x26c402[_0x3947be(0x1fd)],_0x26c402[_0x3947be(0x345)],_0x26c402[_0x3947be(0x2b8)]));_0x4de2e1[_0x3947be(0x7c8)]({'type':_0x26c402[_0x3947be(0x1fd)],'hook':_0x2618d0,'keep':_0x26c402[_0x3947be(0x345)]});}catch(_0x3dfe4c){_0x476101['push'](_0x26c402[_0x3947be(0x1fd)]+':\x20'+_0x2670e0[_0x3947be(0x45f)](_0x420fe3,_0x3dfe4c&&_0x3dfe4c['messa'+'ge']||_0x3dfe4c)[_0x3947be(0x65d)](0xe93+-0x186d+0x9da,0x1*-0xd2b+-0x2*0x812+0x1def));}}return _0x2670e0['wPNkA'](_0x232b46['lengt'+'h'],0xc52+-0x1*-0x1033+-0x1c85);}else{if(_0x2670e0[_0x3947be(0x5ca)](_0x59e8c7,_0x2670e0['iFprU']))return _0x2670e0[_0x3947be(0x578)](_0x12cd91,_0x4aca7b^_0x5b8625);if(_0x2670e0[_0x3947be(0x425)](_0x59e8c7,_0x3947be(0x39e)))return _0x2670e0['ILMUE'](_0x2670e0['yDqxc'](_0x4aca7b,_0x5b8625),-0x130a+-0x693+0x199d*0x1);return _0x2670e0['UuTJf'](_0x4aca7b^_0x5b8625,-0x293+0x2043*0x1+-0x71*0x41)!==-0x1*-0x22a9+-0x651+-0x1c58?0x1ab8+0x1a11+-0x8*0x699:-0x13*-0x11e+0x2443+0x1*-0x397d;}}function _0x27d3e8(_0x99437f,_0x189935,_0xff1544){var _0x2d651c=_0x3e5c02;if(_0x2670e0['RhBXY']===_0x2670e0[_0x2d651c(0x663)])return _0xda5433[_0x2d651c(0x1fd)]===_0x1d6260;else{var _0x29038f=_0x2051c6[_0xff1544];if(!_0x29038f)return null;var _0x4b4944=_0x2670e0['wawuk'](_0x3f7cfa,_0x2670e0['PjfJf'](_0x99437f,_0x189935)+_0x29038f[_0x2d651c(0x3b4)],'u8'),_0x25bbf4=_0x3f7cfa(_0x99437f+_0x189935+_0x29038f[_0x2d651c(0x85c)+'n'],_0x2d651c(0x666)),_0x3047fb=_0x2670e0[_0x2d651c(0x437)](_0x3f7cfa,_0x2670e0['LcWLk'](_0x99437f+_0x189935,_0x29038f['inite'+'d']),'u8'),_0x3895e9=_0x3f7cfa(_0x2670e0[_0x2d651c(0x3bc)](_0x99437f,_0x189935)+_0x29038f[_0x2d651c(0x332)],_0x2670e0[_0x2d651c(0x5b4)](_0xff1544,_0x2670e0[_0x2d651c(0x23e)])?_0x2d651c(0x726):_0x2670e0[_0x2d651c(0x5b4)](_0xff1544,_0x2670e0[_0x2d651c(0x36f)])?_0x2670e0[_0x2d651c(0x46d)]:'u8'),_0x5741c0=_0x2670e0[_0x2d651c(0x2c7)](_0x3f7cfa,_0x99437f+_0x189935+_0x29038f[_0x2d651c(0x5c2)+'e'],'u8');if(_0x4b4944===undefined||_0x25bbf4===undefined||_0x3895e9===undefined||_0x2670e0[_0x2d651c(0x465)](_0x5741c0,undefined))return null;_0x4b4944&=0x186e+-0x54d+-0x1222,_0x25bbf4|=0x63*0xf+-0x973*0x1+-0x3a6*-0x1,_0x3047fb=_0x2670e0['XITyi'](_0x3047fb,-0x8c3+-0x753+-0x3a*-0x47)&0x1bf4+-0x249d+0x8aa,_0x5741c0&=0x1*-0x2695+-0x2*-0x1bf+0x2318;var _0x5c45f8;if(_0xff1544===_0x2d651c(0x218))_0x5c45f8=_0x2670e0[_0x2d651c(0x1de)](_0x12cd91,_0x25bbf4^_0x4b4944);else{if(_0xff1544==='obfI')_0x5c45f8=_0x2670e0['fLWuZ'](_0x2670e0[_0x2d651c(0x329)](_0x25bbf4,_0x4b4944),0x7*-0x106+0xc8*0x4+0x2f*0x16);else _0x5c45f8=_0x2670e0['yqvgx'](_0x2670e0[_0x2d651c(0x729)](_0x25bbf4,_0x4b4944)&0x19c5*0x1+-0xa*0x361+0x904,-0x35*0x67+-0x25e0+-0x875*-0x7)?0x1*-0x1411+0x16cd+-0x3*0xe9:-0xb53+-0x2027*0x1+-0xa*-0x459;}return{'real':_0x5c45f8,'fake':_0x3895e9,'act':_0x5741c0,'init':_0x3047fb,'key':_0x4b4944,'hidden':_0x25bbf4};}}function _0xc711b8(_0x2ff1cc,_0x2f6a68,_0x24cb2b,_0x399865){var _0x2d922e=_0x3e5c02;if(_0x2d922e(0x590)!==_0x2670e0[_0x2d922e(0x16c)]){var _0x165d3c=_0x2051c6[_0x24cb2b],_0x5b80f7=_0x48d3d4(_0x2ff1cc,_0x2f6a68,_0x165d3c['size']);if(!_0x5b80f7)return![];var _0x3c6e17=new DataView(_0x5b80f7['buffe'+'r'],_0x5b80f7['byteO'+_0x2d922e(0x395)],_0x5b80f7['byteL'+_0x2d922e(0x479)]),_0xd74065=_0x165d3c[_0x2d922e(0x72e)+'pe']==='u8'?_0x3c6e17['getUi'+_0x2d922e(0x84c)](_0x165d3c['key']):_0x3c6e17['getIn'+'t32'](_0x165d3c['key'],!![]),_0x43a972;if(_0x2670e0[_0x2d922e(0x1b0)](_0x24cb2b,_0x2d922e(0x218)))_0x43a972=_0x2670e0[_0x2d922e(0x755)](_0x46f7e1,_0x399865);else{if(_0x2670e0['yScXl'](_0x24cb2b,'obfI'))_0x43a972=_0x399865|0x2111+0x488*-0x3+-0x1379;else _0x43a972=_0x2670e0[_0x2d922e(0x775)](_0x399865?-0x50d*-0x1+-0x1*0x264b+-0x3*-0xb15:-0x1e1*-0x7+0x707*0x5+0x373*-0xe,0x3d0+-0x1a11+0x1740);}return _0x2670e0[_0x2d922e(0x1d8)](_0x7f8865,_0x2670e0[_0x2d922e(0x5f5)](_0x2ff1cc+_0x2f6a68,_0x165d3c['hidde'+'n']),'i32',_0x43a972^_0xd74065)&&_0x2670e0[_0x2d922e(0x859)](_0x7f8865,_0x2ff1cc+_0x2f6a68+_0x165d3c[_0x2d922e(0x332)],_0x2670e0[_0x2d922e(0x461)](_0x24cb2b,_0x2d922e(0x218))?_0x2d922e(0x726):_0x2670e0['oTIFI'](_0x24cb2b,'obfI')?_0x2d922e(0x666):'u8',_0x24cb2b===_0x2670e0['iFprU']?_0x399865:_0x2670e0[_0x2d922e(0x425)](_0x24cb2b,_0x2d922e(0x39e))?_0x399865|-0x11f*0x1d+-0x4dc+0xc75*0x3:_0x399865?0x2*0xe20+-0x1c70+-0x1*-0x31:0x35*0x3d+-0x1e23*0x1+0x1182)&&_0x2670e0[_0x2d922e(0x1be)](_0x7f8865,_0x2670e0['NcRWR'](_0x2670e0[_0x2d922e(0x1c3)](_0x2ff1cc,_0x2f6a68),_0x165d3c[_0x2d922e(0x5c2)+'e']),'u8',-0x4*-0x797+-0x1b59+0x101*-0x3);}else _0x3a6cce();}var _0x606573={'on':![],'factor':0x1,'min':0.5,'max':0x32},_0x1c6d29=0xcfb*0x3+0xb21+-0x11*0x2f2+0.03,_0x3e96b5=0x11*-0x24b+-0x7*0x506+0x4a27,_0x5ecf22={},_0x23b76a=0x201a+-0x1035*0x1+-0xfe5,_0x2c3b9d=[],_0xc4e6d9=[];function _0x463066(_0x216952){var _0x37acbb=_0x3e5c02,_0x487ecc=_0x43be7a[_0x37acbb(0x3ab)+_0x37acbb(0x279)+_0x37acbb(0x43f)]||[],_0x2c39bd=[];_0xc4e6d9=[],_0x2c3b9d=[];for(var _0x685645=0xa2a+0x11*-0x5b+-0x41f;_0x685645<_0x487ecc['lengt'+'h'];_0x685645++){if(_0x37acbb(0x203)===_0x2670e0[_0x37acbb(0x503)]){var _0x55abce=_0x487ecc[_0x685645][0x7*0x1c9+0xb7e*-0x3+0x15fb];if(_0x2670e0[_0x37acbb(0x59c)](_0x487ecc[_0x685645][-0x68e*0x3+-0x15*-0x167+-0x9c8],'obfF'))continue;var _0x91057c=_0x1d37dc(_0x216952,_0x55abce,_0x2670e0[_0x37acbb(0x23e)]);if(!_0x91057c||_0x2670e0['JHFSd'](_0x91057c[_0x37acbb(0x683)+'d'],-0x16c0*-0x1+-0x1a*-0x101+0x1*-0x30d9))continue;var _0x33ab45=_0x2670e0[_0x37acbb(0x5ad)](_0x2fa33f,_0x2670e0[_0x37acbb(0x23e)],_0x91057c[_0x37acbb(0x85c)+'n'],_0x91057c['keyAt'+'Offse'+'t0']);if(_0x2670e0['tjNYk'](typeof _0x33ab45,_0x2670e0['hcmkr'])||!isFinite(_0x33ab45))continue;var _0x34f753=_0x2670e0[_0x37acbb(0x847)](_0x216952+':',_0x55abce),_0x1e4796=_0x5ecf22[_0x34f753];if(!_0x1e4796||_0x33ab45!==_0x1e4796[_0x37acbb(0x1e2)+'ritte'+'n'])_0x1e4796=_0x5ecf22[_0x34f753]={'base':_0x33ab45,'lastWritten':null};var _0x47875f=_0x1e4796['base'],_0x3df094=Math[_0x37acbb(0x47e)](_0x47875f);if(_0x3df094<0x2339*0x1+0x1b9e+-0x3ed7*0x1+0.0001||_0x3df094>-0x23145+-0x2accc+0x1*0x664b1){_0xc4e6d9['push']({'o':_0x55abce,'v':_0x33ab45,'why':_0x2670e0[_0x37acbb(0x6fe)]});continue;}_0x2c39bd[_0x37acbb(0x7c8)]({'o':_0x55abce,'v':_0x33ab45,'a':_0x3df094,'base':_0x47875f,'key':_0x34f753,'st':_0x1e4796});}else{if(_0x354d92[_0x458454]['hook']&&_0x17d89a[_0x127dba][_0x37acbb(0x4ca)]['appli'+'ed'])_0x970fc3++;}}var _0x401fe3=[];for(var _0x1fdb08=0x1c7b+-0x400+-0x187b;_0x1fdb08<_0x2c39bd[_0x37acbb(0x267)+'h'];_0x1fdb08++){var _0x24de1d=_0x2c39bd[_0x1fdb08]['a'],_0x526c95=null;for(var _0x57c3cd=0x14ef+0xad*0x32+-0x36b9*0x1;_0x57c3cd<_0x401fe3[_0x37acbb(0x267)+'h'];_0x57c3cd++){var _0x560ece=_0x401fe3[_0x57c3cd][_0x37acbb(0x53a)]/_0x24de1d;if(_0x2670e0[_0x37acbb(0x2d1)](_0x560ece,0xa68*-0x3+0xad7+0x1462-_0x1c6d29)&&_0x560ece<_0x2670e0[_0x37acbb(0x247)](-0x269b+-0x4*0x791+-0xe8*-0x4c,_0x1c6d29)){_0x526c95=_0x401fe3[_0x57c3cd];break;}}if(!_0x526c95){if(_0x2670e0[_0x37acbb(0x794)](_0x37acbb(0x4b7),'AjNlF'))_0x526c95={'mean':_0x24de1d,'members':[]},_0x401fe3[_0x37acbb(0x7c8)](_0x526c95);else{_0x3ad276['push'](_0x2670e0[_0x37acbb(0x7a8)]);for(var _0xf2aed9=-0x724*0x5+0x31*0x69+-0x31f*-0x5;_0xf2aed9<_0x5221c2['warni'+'ngs'][_0x37acbb(0x267)+'h'];_0xf2aed9++)_0x5d8bad[_0x37acbb(0x7c8)](_0x2670e0[_0x37acbb(0x290)]+_0x2356ac[_0x37acbb(0x306)+'ngs'][_0xf2aed9]);}}_0x526c95['membe'+'rs'][_0x37acbb(0x7c8)](_0x2c39bd[_0x1fdb08]),_0x526c95['mean']=-0x18*0x39+0x51*-0x1c+0xe34;for(var _0x2ff09d=-0xd0e+-0x1879+0x2587;_0x2ff09d<_0x526c95[_0x37acbb(0x3a6)+'rs']['lengt'+'h'];_0x2ff09d++)_0x526c95['mean']+=_0x526c95[_0x37acbb(0x3a6)+'rs'][_0x2ff09d]['a'];_0x526c95[_0x37acbb(0x53a)]/=_0x526c95['membe'+'rs'][_0x37acbb(0x267)+'h'];}var _0x16eaa8=[];for(var _0x1589c1=-0x12c2*-0x1+0x1287+0x53*-0x73;_0x1589c1<_0x401fe3[_0x37acbb(0x267)+'h'];_0x1589c1++){if(_0x401fe3[_0x1589c1]['membe'+'rs']['lengt'+'h']>=_0x3e96b5)_0x16eaa8[_0x37acbb(0x7c8)](_0x401fe3[_0x1589c1]);}if(!_0x16eaa8[_0x37acbb(0x267)+'h']){_0xc4e6d9[_0x37acbb(0x7c8)]({'o':-(0x1641*-0x1+0x418+-0x1f*-0x96),'v':0x0,'why':_0x2670e0[_0x37acbb(0x2b5)](_0x37acbb(0x2b7)+'oup\x20o'+'f\x20',_0x3e96b5)+('\x20Obsc'+_0x37acbb(0x2d9)+_0x37acbb(0x3e4)+_0x37acbb(0x65e)+'ed')});return;}var _0xf6762c=_0x16eaa8[-0x18a*-0x19+-0xef2+-0x1788*0x1][_0x37acbb(0x53a)];for(var _0x1894ed=-0x183a+0xb7*0x35+-0xda9;_0x2670e0['JTgRf'](_0x1894ed,_0x16eaa8[_0x37acbb(0x267)+'h']);_0x1894ed++)if(_0x16eaa8[_0x1894ed]['mean']<_0xf6762c)_0xf6762c=_0x16eaa8[_0x1894ed][_0x37acbb(0x53a)];var _0x1cc704=_0x2670e0[_0x37acbb(0x1cf)](_0xf6762c,-0x1667+-0x1d08+0x336f+0.5);for(var _0x39cccc=0x51*-0x45+-0x1bf3*0x1+0x31c8;_0x39cccc<_0x401fe3[_0x37acbb(0x267)+'h'];_0x39cccc++){if(_0x2670e0[_0x37acbb(0x861)](_0x401fe3[_0x39cccc][_0x37acbb(0x3a6)+'rs'][_0x37acbb(0x267)+'h'],_0x3e96b5))continue;for(var _0x5e80eb=-0x1f7*0x8+0x1*-0xaf9+0x1ab1;_0x5e80eb<_0x401fe3[_0x39cccc][_0x37acbb(0x3a6)+'rs'][_0x37acbb(0x267)+'h'];_0x5e80eb++){if(_0x37acbb(0x51c)===_0x37acbb(0x51c))_0xc4e6d9['push']({'o':_0x401fe3[_0x39cccc][_0x37acbb(0x3a6)+'rs'][_0x5e80eb]['o'],'v':_0x401fe3[_0x39cccc]['membe'+'rs'][_0x5e80eb]['v'],'why':_0x37acbb(0x17f)+'eton'});else try{return _0x2670e0['VzETH'](_0x97abd);}catch(_0x4a2ca9){return{'version':_0x5ecd31,'when':new _0x467bca()['toISO'+_0x37acbb(0x308)+'g'](),'elapsedMs':_0x4f3319['now']()-_0x52bdc4,'host':_0x2484fd,'uwmk':!!(_0x3ef625[_0x37acbb(0x330)+'WebMo'+_0x37acbb(0x817)]&&_0x4e4e1b['Unity'+_0x37acbb(0x561)+_0x37acbb(0x817)][_0x37acbb(0x7b8)+'me']),'il2CppContext':![],'arm':_0x3fd8b4,'hooksTotal':_0x6d7af4['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x358377(_0x4a2ca9&&_0x4a2ca9['messa'+'ge']||_0x4a2ca9)};}}}for(var _0x4fa69f=-0x2271+-0x1*-0x8c3+0x19ae;_0x4fa69f<_0x16eaa8[_0x37acbb(0x267)+'h'];_0x4fa69f++){var _0x2cf747=_0x16eaa8[_0x4fa69f][_0x37acbb(0x3a6)+'rs'];for(var _0x4dd0be=-0x65*-0x59+-0x1ba5+0x8*-0xef;_0x2670e0['PEBNl'](_0x4dd0be,_0x2cf747[_0x37acbb(0x267)+'h']);_0x4dd0be++){if('lSPek'!==_0x37acbb(0x630)){var _0x102643=_0x2cf747[_0x4dd0be];if(_0x102643['a']<_0x1cc704){if('vDAcQ'==='vDAcQ'){_0xc4e6d9['push']({'o':_0x102643['o'],'v':_0x102643['v'],'why':_0x37acbb(0x360)+_0x37acbb(0x31e)+'r\x20'+_0x1cc704[_0x37acbb(0x20a)+'ed'](-0x2633+-0x1*0xfd6+0x360b*0x1)});continue;}else{if(_0x40ed71[_0x2c2936][_0x37acbb(0x6e8)+_0x37acbb(0x3f2)+_0x37acbb(0x1d3)])_0x3bbe29[_0x221a40][_0x37acbb(0x6e8)+_0x37acbb(0x3f2)+_0x37acbb(0x1d3)]['postM'+_0x37acbb(0x1e9)+'e'](_0x59a2b7,'*');}}var _0x2db47d=_0x2670e0[_0x37acbb(0x375)](_0x102643[_0x37acbb(0x3e5)],_0x606573['facto'+'r']);if(_0xc711b8(_0x216952,_0x102643['o'],_0x37acbb(0x218),_0x2db47d)){if(_0x2670e0[_0x37acbb(0x326)]===_0x2670e0[_0x37acbb(0x326)])_0x102643['st']['lastW'+_0x37acbb(0x616)+'n']=Math[_0x37acbb(0x37a)+'d'](_0x2db47d),_0x23b76a++,_0x2c3b9d[_0x37acbb(0x7c8)](_0x2670e0['nuedk']('0x',_0x102643['o'][_0x37acbb(0x80d)+_0x37acbb(0x3a4)](-0x23ca+0x2022*-0x1+-0x21fe*-0x2)));else return _0x15af27[_0x37acbb(0x777)+'d']++,_0x5ab75f['lastE'+_0x37acbb(0x72d)]=_0x392007['lastE'+'rror']||_0x2670e0[_0x37acbb(0x7fe)](_0x3f7a1c,_0x218017&&_0x1d64d1['messa'+'ge']||_0x2a9167)[_0x37acbb(0x65d)](-0x1*-0x55+-0x1289*-0x1+0x15*-0xe6,-0x10d8+-0x2bf+0x41*0x4f),_0x3eba6a;}}else{var _0x1eab63=_0x3b34dd['v'];if(_0x2670e0[_0x37acbb(0x22d)](typeof _0x1eab63,'numbe'+'r')||!_0x2670e0[_0x37acbb(0x16a)](_0x1641b0,_0x1eab63))return![];if(_0x2670e0['sPfKZ'](_0x40e839['k'],'obfB'))return _0x1eab63===-0x1*-0x146b+-0x510+-0xf5b||_0x1eab63===0x8*-0x4ba+-0x1*-0x165+0x7*0x534;var _0x2e74b0=_0x30b0db[_0x37acbb(0x332)];if(_0x2670e0[_0x37acbb(0x80b)](typeof _0x2e74b0,_0x2670e0[_0x37acbb(0x28f)])||!_0x12ee8c(_0x2e74b0))return!![];if(_0x301dfc[_0x37acbb(0x42c)]===-0x53*0x1d+-0x1adb+-0x1*-0x2443)return _0x20fb24[_0x37acbb(0x47e)](_0x2670e0['ScmvX'](_0x1eab63,_0x2e74b0))<=_0x5748ad[_0x37acbb(0x285)](-0x1*0xc89+-0x1*-0x1ee9+-0x1*0x125f,_0x452c4c['abs'](_0x2e74b0)*(-0xb02+0xb*0x119+-0x111+0.6));return _0x196f68[_0x37acbb(0x47e)](_0x1eab63)<-0x2*-0x121ba848+0x1*0x445f0592+-0x12a*0x26a48d;}}}}var _0x43be7a={'FPScontroller':[[-0x7*0x3f1+-0x21b5+0x1c*0x231,'obfF'],[0x12*0xe9+-0xe21*-0x1+-0x1e5b,'obfF'],[-0x1b2f*0x1+-0x4f5+-0x2*-0x1032,_0x3e5c02(0x218)],[0x1697*0x1+0x15*-0x17f+-0x4*-0x24b,'obfF'],[0xf4a+0x1a*0x3f+-0x1540,_0x2670e0['iFprU']],[-0x1985+0xe*0x67+0x146b,'obfF'],[0x1*0x9f5+0x1*0x2bc+0xc11*-0x1,_0x3e5c02(0x218)],[0x179d+-0xa*0x45+-0x1433,_0x3e5c02(0x5ef)],[-0x4aa+-0x1c21+0x218f,_0x2670e0[_0x3e5c02(0x23e)]],[0x197e+0x1d19+-0x35bb,_0x2670e0['ywDOi']],[-0x1bc3+0x1ede*-0x1+0x3b81,'v3'],[0x195e+-0x11cc+-0x6a6*0x1,'u8'],[-0x49*-0x6+0x1e8e+-0x1f54,_0x2670e0['iFprU']],[-0x923*0x3+-0x2103+0x2ac*0x17,_0x3e5c02(0x666)],[0x407*-0x2+-0x3*0x9c9+0x2675,'u8'],[0x1a*-0x82+0xc6e+-0x1*-0x1d6,'i32'],[-0x2455+0x71*-0x3d+-0x202b*-0x2,'u8'],[0xcaa+-0x55f+-0x636,'u8'],[-0x1771+0x1517+0x376,_0x2670e0['iFprU']],[0x21f4+0x249d*0x1+-0x455d*0x1,'obfF'],[-0x1*-0xf6b+0x153f+-0x235e,'f32'],[0x3fd*0x5+-0x1b3+0x18a*-0xb,_0x2670e0[_0x3e5c02(0x62a)]],[-0x915+-0x5a8*-0x1+0x4c1*0x1,'v3'],[0x202*0xf+0x1*-0xec6+-0xdf8,'v3'],[0xbad+0x1*0x1392+-0x1dd3,_0x2670e0[_0x3e5c02(0x62a)]],[-0x2ed+0xa41+-0x5e4,_0x2670e0[_0x3e5c02(0x62a)]],[-0x1355+0x12d2+0x20b*0x1,'u8'],[0x1*0x14c5+0x1bf6+-0x2f2f,'f32'],[-0x2145+-0x1*0xd9a+0x3077,'v3'],[0x1ff4+0x177*0x8+0x2a08*-0x1,'u8'],[-0x35e*0x4+0x764*0x3+-0x700,_0x3e5c02(0x726)],[0xa37+-0x2c5*0xc+0x3*0x83f,_0x2670e0[_0x3e5c02(0x62a)]],[-0x8*0x1f6+-0x9fd+0x923*0x3,'u8'],[0x1f44+0x5*-0x3ad+0x2*-0x593,'u8'],[-0x7*0x569+0x46b*-0x2+0x3075,_0x2670e0[_0x3e5c02(0x23e)]],[0x9*0x22f+-0xb0f*0x1+-0x6c0,_0x3e5c02(0x726)],[0x11da+0x98f*-0x4+0x163e,'u8'],[0xb5c+-0x1c53+0x12d7,_0x2670e0[_0x3e5c02(0x23e)]],[0x1150+-0x26c3*-0x1+-0x361b,'v3'],[0x7*0x277+-0x3*0x70b+0x7*0xd8,'obfB'],[-0x202+-0x1*-0x179b+-0x1381,'f32'],[0x119*0x1+-0x1696+0x1799,_0x3e5c02(0x726)],[0x1b*0xf1+-0x8e*0x39+0x87f,_0x3e5c02(0x726)],[0x14b*-0x1+-0x1*-0x1e52+-0x7*0x3d1,'f32'],[-0x1f2*0x8+-0x304+0x14e8,_0x2670e0[_0x3e5c02(0x62a)]],[-0x39b+0x1626+0x1d*-0x8f,_0x2670e0[_0x3e5c02(0x62a)]],[-0x16*0x1ba+-0x4*-0x250+-0xc7*-0x28,'u8'],[0x2dd*-0x1+0x11fb*-0x2+0x2930,'u8'],[-0x124b+-0x1*-0x75a+0x1*0xd4f,'u8'],[0x3*0x6da+0x1*-0x55d+-0xcd1,_0x3e5c02(0x726)],[-0x16d*-0x9+-0x1*-0x1349+-0x1dba,'u8'],[0x255+-0x1f1d+0x1f2d,'u8'],[0x1169+0x21fa+-0x1*0x30fb,'f32'],[-0x3*0x329+0x1a95*0x1+-0x2*0x757,_0x2670e0[_0x3e5c02(0x62a)]],[0x1413+-0x1f*-0x46+-0x1a1d,_0x2670e0['biRQU']],[-0x16eb*-0x1+-0x6d5+-0x6d1*0x2,'f32'],[0x23c0+0xa75+-0x2bbd,_0x2670e0[_0x3e5c02(0x62a)]],[0x12*0xce+0x104b+-0x1c4b,_0x3e5c02(0x726)],[-0x12a*0x12+0x107b*0x1+0x6f9,'f32'],[0x95b+-0x8*0x15d+0x411,'v3'],[0x95e+0x1ec1*0x1+-0x258b,'u8'],[0xcd5+0x1*-0x1490+0xa53,'v3'],[-0x13be+-0x19e1+-0x7*-0x6e5,_0x2670e0['biRQU']],[0x1c63+0x6b*-0x4c+0x60d*0x1,'v3'],[0xa*-0x34a+0x1a5c+0x40*0x25,_0x2670e0[_0x3e5c02(0x62a)]],[0x13*-0x79+0xa11+-0x1a6*-0x1,'f32'],[-0xd53+-0x1c0+0x11d3,_0x2670e0[_0x3e5c02(0x62a)]],[-0x185c+-0x1c3e+-0x375e*-0x1,'u8'],[-0x588+-0x8a4+0x10f1,'u8'],[0x3b*0x7b+0x27*0xf6+-0x1*0x3f0b,_0x2670e0[_0x3e5c02(0x62a)]],[-0x1ed5+-0x7f*0x4c+0x31*0x175,_0x2670e0[_0x3e5c02(0x62a)]],[-0x116+-0xe67*-0x2+-0x18d4,'v3'],[0x1*0xf51+-0x1494+0x833*0x1,'v3'],[0x225+-0x193*0x1+-0x6*-0x67,'f32'],[-0x195a+-0x15da+0x3234,_0x3e5c02(0x726)],[-0x2*-0xad9+0x1*-0x22a3+0xff5,'f32'],[-0x1528+0x33*-0x67+-0x6d*-0x69,_0x2670e0[_0x3e5c02(0x62a)]],[-0x114d*-0x2+-0x320+-0x1c6e,'v3'],[0x1f2d+-0x145e*-0x1+-0x4f*0x9d,'u8'],[-0x7bd+-0x3*-0x8cc+-0xf8b*0x1,'v3'],[0x189b+0x6d7*0x3+-0x29f8,'i32'],[-0x86b*0x1+-0x10*-0x1a3+-0x65*0x25,_0x3e5c02(0x726)],[-0x1*0x1ead+-0xee6*0x2+0x17b*0x2b,_0x2670e0['biRQU']],[-0x16bf+-0x2*0xe0f+0x3611*0x1,_0x3e5c02(0x726)],[0x2*-0xe50+-0x18*0x3a+-0x9a*-0x3e,'f32'],[0xd*0x110+-0x26c3*-0x1+-0x3153,'u8'],[0x908+-0x13b9*0x1+-0x6f9*-0x2,'u8'],[-0x1e4d*-0x1+0x8aa+-0x23ab,'u8'],[0x1a7f+-0xe54+-0x8de,'u8'],[0x8c5*-0x1+0x1f8b+-0x7*0x2c8,'u8'],[-0x9*0x35b+-0xc05*-0x2+0x979,'f32'],[0x1*-0x1961+-0x1*0x14b+-0xa00*-0x3,_0x3e5c02(0x726)],[0x938+-0x4*-0x2d1+0x892*-0x2,_0x2670e0['biRQU']],[0x33d+-0xf70+0xf8f,'f32'],[-0x12f*-0xc+0x6c2+-0x1196,'f32'],[-0x1f*-0xbc+0x7a5*0x5+-0x3999,'u8'],[-0x13*0x147+0xf*-0x1b4+-0xaa5*-0x5,'f32'],[-0x1011+-0x1*0x20ca+0x3447,_0x3e5c02(0x726)],[0x1f4+0x1651+0x1*-0x14d5,'u8'],[0x2*0x1202+-0x1f*0xad+-0xb99*0x1,'v3'],[0x1*-0xa1f+0x462*-0x5+0x1df*0x13,'v3'],[-0x1c6f+-0xb86+-0xd*-0x359,'v3'],[-0x409+-0x261b+0xc0*0x3d,_0x2670e0['biRQU']],[-0x2039+-0x10a7+-0x1e0*-0x1c,_0x2670e0['biRQU']],[-0x265*-0xe+0xc5*-0x24+-0x22e,_0x2670e0[_0x3e5c02(0x62a)]],[0x15d7+0x65*-0x11+0xd*-0xe2,'v3'],[0xc1*0x1+-0x1242+-0x3d*-0x59,_0x2670e0[_0x3e5c02(0x46d)]],[-0x2*-0x42c+0xf7*0xd+-0x5b9*0x3,'u8'],[-0x2373+-0x18a+0x28b9,_0x2670e0['ywDOi']],[-0x73*0x1+0x38*0x3e+-0x95d,_0x2670e0['biRQU']],[-0x1dc0+-0xe2f+0x1*0x2fb3,_0x3e5c02(0x726)],[-0x13f3*-0x1+0xc4c+0x1*-0x1c77,_0x3e5c02(0x726)],[-0x2475+0x12fb+0x1546,_0x2670e0['biRQU']],[0x111f*0x1+-0x10b4*-0x1+-0x1e03,'v3'],[0x1*-0x760+0x1*0x143f+-0x903,_0x3e5c02(0x666)],[-0xc9*-0x7+-0x1c*0x25+-0x45*-0x9,'u8'],[-0x217*0x11+0xbe5*0x1+0x1b83,'u8'],[0x8*-0xc0+0xce6+-0x304,'u8'],[0x62*-0x21+-0x2*-0x215+0xc5c,_0x3e5c02(0x726)],[-0xa*0x223+-0x2*0x1159+0x8*0x77f,'i32']],'HealthScript':[[-0x852+0x5f0*0x5+-0x1506,'u8'],[-0xb9e+-0x2276+0x2e70*0x1,_0x3e5c02(0x666)],[-0x1d30+0xb*-0x17b+0x2df9,_0x2670e0[_0x3e5c02(0x62a)]],[0x1673+0x70e+0x1*-0x1cfd,_0x2670e0[_0x3e5c02(0x62a)]],[0x1*-0x749+-0x1*0x1ba6+0x2377,_0x2670e0[_0x3e5c02(0x62a)]],[0x104d+-0x2481+-0x53*-0x40,'f32'],[-0xe64+-0x1*-0xe9b+0x59,_0x3e5c02(0x726)],[0x1e36+-0x14af+-0x8f3,_0x3e5c02(0x726)],[0x69a+-0xab1+0x4b7,_0x3e5c02(0x666)],[-0x11d4+-0x19c+0x1414*0x1,_0x3e5c02(0x666)],[-0x1*-0x238f+-0x10d5+-0x1*0x1212,'u8'],[0xc*0x112+0x79*-0x44+-0x3*-0x6a7,'u8'],[0x1b*-0x87+-0x6b5+0x567*0x4,'u8'],[0x1*0xb72+-0xfe*-0xc+-0x16af*0x1,'u8'],[-0x1d91+0x995+-0x4*-0x52f,_0x2670e0['gagsp']],[0x12e3*0x1+-0x6b*0x4c+0x13f*0xb,'obfI'],[0x2463+-0x92d+-0x1a4e,_0x2670e0[_0x3e5c02(0x36f)]],[-0xc*-0x10b+-0x2f*-0x95+-0x26e3,_0x2670e0[_0x3e5c02(0x36f)]],[0x109*-0xa+0x1c75+-0x110b,_0x2670e0['gagsp']],[-0x317*0xc+-0xfc3+0x427*0xd,_0x3e5c02(0x5ef)],[-0x1e40+0x1f35+0x3b,_0x2670e0['iFprU']],[0x2f6*-0xc+-0x661+0x2b31,'f32'],[0x351*-0xb+0x579+0x5*0x676,_0x2670e0[_0x3e5c02(0x62a)]],[-0x25d9*-0x1+0x1d*-0x29+0x1fe4*-0x1,_0x2670e0[_0x3e5c02(0x62a)]],[0x86d+-0x23e1+0x1cc8,_0x2670e0[_0x3e5c02(0x62a)]],[-0x257e+-0x250a+0xc*0x653,'f32'],[-0x8e7*0x3+0x72a+0x14eb,'v3'],[-0x1731+0x1325*-0x2+-0x4d7*-0xd,_0x3e5c02(0x726)],[-0x237e+-0x1*0x14bc+0x39b2,_0x2670e0[_0x3e5c02(0x62a)]],[0x40a+0x198d+0x1c17*-0x1,'u8'],[0xa4d+-0x375+-0xe2*0x6,'u8'],[-0xb0d*0x1+-0x61*-0x53+-0x12d6,'i32']],'PlayerConfig':[],'WeaponManager':[[-0x284*0x2+0xb9c+0x2*-0x33e,_0x3e5c02(0x666)],[-0x385*0xb+0x1*-0x2003+0x46d6,_0x2670e0[_0x3e5c02(0x46d)]],[0x63a+-0x182c+-0x101*-0x12,'u8'],[0x1ca9+0x1978+-0x35fd,'i32'],[-0x1b*0x112+0xa94+0x12b6,_0x2670e0['iFprU']],[-0x1*-0xd7d+-0x1d2b+-0x102a*-0x1,_0x2670e0['biRQU']],[0x502*-0x2+-0x2203*-0x1+0x177b*-0x1,_0x3e5c02(0x666)],[-0x16*0xa4+-0x2a8+0x1148,'u8'],[-0x493*0x1+-0x1242+-0x175e*-0x1,'u8'],[0x1bc4+0x1027*0x1+0x1*-0x2b5f,'i32'],[-0x1802+-0xb38*-0x2+0x222,'f32'],[0x1*0x1d1c+-0x126a+-0xa1a,_0x2670e0['biRQU']],[-0x117d+0x4d5*-0x1+0xb7f*0x2,_0x2670e0[_0x3e5c02(0x46d)]],[0xb0*0x31+-0x1*-0x2013+-0x4107,'u8'],[0x37*0x8+0x59b*0x1+-0x677,_0x2670e0[_0x3e5c02(0x36f)]],[-0x403+0x1d23+-0x2*0xc18,_0x2670e0[_0x3e5c02(0x36f)]],[-0x1fe3+-0x9c4*-0x1+0x1723,_0x3e5c02(0x726)],[-0x1c5a*0x1+-0x2*-0xb00+0x762,_0x3e5c02(0x726)],[0x23ab+-0x7b1+-0x1aee,'f32'],[-0x13b2+-0x6*0x564+-0x1*-0x3522,'f32'],[0x1170+-0x17ea*-0x1+-0x283a,'f32'],[-0x259a*0x1+-0x1480+0x1*0x3b42,'u8'],[-0xb*-0x11a+0x256*-0x1+-0x89c,'obfI'],[-0x188c+0x7d3*-0x1+0x219f*0x1,_0x2670e0[_0x3e5c02(0x36f)]],[0x2*-0xb5a+-0x21*0xfc+0x2*0x1c42,_0x3e5c02(0x39e)],[-0x3*0x14f+-0x6f*-0x26+-0xb25,_0x3e5c02(0x5ef)],[0x24d5+-0x9*-0x17f+-0x30d8,_0x2670e0['jalDV']],[0x2285+0x188e+0x1331*-0x3,'obfB'],[-0x2d6+-0xfe0+0x1442,_0x3e5c02(0x5ef)],[0xc*-0x1a6+-0x2*0xb26+0x2bb8,'obfB'],[0xc71+0x555+-0x1016,_0x3e5c02(0x39e)],[0x33f*0x7+-0x1*0x941+0x2eb*-0x4,_0x3e5c02(0x666)],[-0xb87*0x1+0x345+0xa12,'u8'],[-0x3*0x393+-0xd65+-0x7b*-0x36,_0x3e5c02(0x666)],[0x2e5+0x226d+0x11bd*-0x2,_0x3e5c02(0x666)],[-0x5f*-0x1b+-0x1a3*0x13+-0x1a6*-0xe,_0x2670e0['ywDOi']],[0xa1+-0x2204+0x2377,'u8'],[-0xdaf*0x1+-0x202c+0xffd*0x3,'u8'],[0x91c+0x260+-0x95f,'u8'],[0x18fc+0x5*-0x2fe+-0x7e8,'u8'],[-0x1*0x1855+-0xb3d+0x25b1,'u8'],[0x1344+0x1f36+0x4d1*-0xa,_0x2670e0[_0x3e5c02(0x46d)]],[0x2082+0x1*-0x1de1+0x49*-0x1,'u8']],'GG_GameManager':[[0x1799+-0x4e*-0x5e+-0x3419,'u8'],[0x461+-0x2239+0x1e04,_0x2670e0[_0x3e5c02(0x62a)]],[-0xfc2+0xe69+0x19d,'u8'],[-0x2bc*-0x7+-0x17eb+0x50c,'u8'],[-0x182f*0x1+-0x2ef*-0x1+0x1588,'f32'],[-0x2149+0x67*-0x8+0x24cd,_0x3e5c02(0x726)],[0x1caa+-0x113d+0x239*-0x5,_0x2670e0[_0x3e5c02(0x46d)]],[-0x162*-0x6+-0x3*0x3d0+0x6f*0x8,'i32'],[0x694*-0x5+0x201a+0x1d*0xa,'u8'],[-0x205+-0x4fc+-0x53*-0x17,'u8'],[0x6fe+0x7*0x215+0xb*-0x1eb,'f32'],[0x1*0x1186+0x58a*-0x4+0xa*0x83,_0x3e5c02(0x726)],[-0xa75+-0x19a3+0xc*0x30e,_0x2670e0[_0x3e5c02(0x46d)]],[0x1f7f+0x25*-0x47+-0x14a8,'u8'],[0xb29*0x2+-0x653*-0x4+-0x2eea,_0x3e5c02(0x666)],[0x15fb*0x1+-0xc3*0x2e+0x3*0x499,_0x2670e0['ywDOi']],[0x1f*-0x47+0x20ba+0xf*-0x18f,'i32'],[-0x509+-0x13ee+-0x1*-0x19df,_0x3e5c02(0x39e)],[0x1f3f+0x79a*-0x1+0x16a9*-0x1,_0x2670e0['gagsp']],[-0x2*-0x11e7+0x1867*-0x1+0xa57*-0x1,_0x3e5c02(0x39e)],[-0x1fb3+-0x1*0x25cd+0x46ac,'u8'],[-0xe17+0x3*0x378+0x4df,_0x2670e0['ywDOi']],[0x2001+0x1*0x24c3+0x86c*-0x8,'u8'],[-0x1*-0x205b+-0x5*0x92+0x1*-0x1c11,'f32'],[0x6fe+-0x232c+-0x1*-0x1dae,'u8'],[0x1c75+0x207*-0x5+0x10ca*-0x1,'u8'],[-0xe42+0x111d*0x1+-0x137,'u8'],[-0x3c6*0x3+-0xb*-0x200+-0x906,_0x3e5c02(0x666)],[-0x512+-0x1f+0x6dd,'f32'],[0x1395+-0x5*-0x473+-0x2824,'u8'],[0xa7c+0x1f02+-0x27cd,'u8'],[0x4e9+-0xdc3+0xa92,_0x2670e0[_0x3e5c02(0x46d)]],[-0x1e9d+0xd*-0x18d+0x40a*0xd,_0x2670e0[_0x3e5c02(0x46d)]],[0xc1*-0x1+0xd2d*0x2+-0x17d9,_0x2670e0[_0x3e5c02(0x62a)]],[-0x1*0x1316+-0x1d42+0xc*0x42d,_0x2670e0[_0x3e5c02(0x46d)]],[0x1e48+-0x21e2+-0x35*-0x1a,_0x2670e0['biRQU']],[-0xdbc+-0x61a*0x3+0x21d6*0x1,_0x3e5c02(0x666)],[0x12b4+0x1c1d+0x119*-0x29,'i32']],'TDM_GameManager':[[-0x2504+-0x1a24+0x2c*0x170,'u8'],[-0x1b32+0x1f2*-0x3+-0x2*-0x1094,'u8'],[0x26dc+0xcca+-0x3385,'u8'],[-0x5*-0x647+-0xa96+0x6e3*-0x3,_0x3e5c02(0x726)],[-0x8b6+0x1305+-0x9f7,'u8'],[0x86e*0x3+-0x1bb8+0x2ca,_0x3e5c02(0x726)],[0x8*-0x4df+0x2*-0x11e7+0x4b26,_0x2670e0[_0x3e5c02(0x62a)]],[0x7da*0x2+-0x6c5*-0x5+-0x3129,_0x2670e0[_0x3e5c02(0x46d)]],[0x1a3*-0x7+0x261a+-0x1*0x1a3d,_0x3e5c02(0x666)],[-0x1b2b+-0xbc0+0x2757*0x1,'u8'],[-0x112+-0x97c+0xafb,'u8'],[0x31*0x52+-0x16c3+0x781,_0x2670e0[_0x3e5c02(0x62a)]],[-0x2487+0x218e+0x1*0x36d,'f32'],[-0x13*0xa7+-0xe*0x1c6+0x25b1*0x1,_0x3e5c02(0x666)],[0x4*-0x7bb+0x6fd*-0x1+0x2675*0x1,'u8'],[0x17a5+-0x1501*0x1+-0x13*0x1c,_0x2670e0[_0x3e5c02(0x36f)]],[-0x1*-0x597+0x46a+0x43*-0x23,_0x2670e0['gagsp']],[-0x186d+-0x187d*-0x1+-0x2c*-0x5,_0x2670e0[_0x3e5c02(0x36f)]],[-0x1*0x766+-0x1c2+0xa28,_0x3e5c02(0x39e)],[-0x13*0x15d+0x24b2+-0x9b7,'u8'],[0x55d*-0x1+-0x26*-0xb7+-0x1471,'u8'],[-0x1*-0x1e21+0x1c36+-0x38f7*0x1,_0x2670e0[_0x3e5c02(0x46d)]],[0x1b22+0x21f1*-0x1+-0x83b*-0x1,'u8'],[-0x1875+0x1ac*0x1+0x184d*0x1,'u8'],[0x1b7e+0x29*0x29+-0x2087,'f32'],[-0x2053*-0x1+-0x1cd9+-0x1ee,'i32'],[-0xe*-0x121+0x26*0xbd+0x2*-0x1526,_0x2670e0['ywDOi']],[-0x566*0x6+0x224a+-0x52,_0x2670e0[_0x3e5c02(0x62a)]],[-0xaa8*-0x2+0x1d10+0x30c8*-0x1,_0x2670e0[_0x3e5c02(0x46d)]],[0x7ad+-0xcd3+-0x1*-0x6c2,_0x2670e0[_0x3e5c02(0x46d)]],[0x211*0x11+-0x1c09+-0x578,_0x2670e0['biRQU']],[0x1*0x34a+-0x67*0x51+0x1*0x1ef1,'f32'],[-0x1849+-0x1024+0x201*0x15,'i32'],[-0x6*-0x243+0x97*-0x3+-0xa1d,'u8'],[0x1*-0x3da+0x1fd3*-0x1+0x255e,'u8'],[0x168a+0x12f5*0x1+0x11*-0x257,'f32']],'PhotonNetworkSync':[[-0xac6+0xfb*0x11+-0x5b1,'v3'],[-0xdaf*-0x1+0x9c9+-0x1738,'i32'],[0x8*0x31c+0x20e0+0xe5f*-0x4,'u8'],[-0x3*-0x704+0x7f8+-0x1cbf,'u8'],[-0x9b6+-0x10a7+0x1aa5,'v3'],[-0x1e37+-0x1*0xbbc+0x89*0x4f,'u8'],[-0x1*-0x1f46+-0x115*-0xb+0x285*-0x11,_0x3e5c02(0x666)],[0x2635*-0x1+0x16*-0x10+0x27f1,_0x3e5c02(0x666)],[-0x1bb9*-0x1+-0x2057+-0x2*-0x27f,_0x2670e0['biRQU']],[0x1f69+0xc5*-0x1a+-0xb03,'f32'],[-0xc88*0x2+0x30+0x1948,_0x3e5c02(0x726)],[0x94f+-0x232c+0x1a49*0x1,'v3'],[-0x4*-0x61+0x1b30+-0x1c3c,_0x3e5c02(0x726)],[-0x12a6+-0x1a37+0x2d59,_0x3e5c02(0x726)],[0x1e2b+0x1*0xaf3+-0x289e,_0x2670e0['ywDOi']],[0x755*-0x3+0x124*0xb+0x9fb,'f32']],'MouseLook':[[0x4cb*-0x2+-0x2391+-0x2d3b*-0x1,_0x3e5c02(0x726)],[-0xe5a+0x2f*0x31+0x573,_0x2670e0['biRQU']],[-0x4*0x4f7+-0x1cb+-0x3*-0x741,'f32'],[-0x1608+0x1b*-0xb5+0x293f*0x1,_0x3e5c02(0x726)],[0x64f*0x5+-0x2*0x10bf+-0x1*-0x217,_0x3e5c02(0x726)],[-0x1c94+-0x18e5+-0x35a1*-0x1,_0x3e5c02(0x726)],[0x89b+0x17a9+-0x2014,'f32'],[-0x21c9+0x5e*0x5f+-0xe5,'u8'],[0x6f5*-0x1+0xa96+-0x3*0x123,'f32'],[-0x23c1*0x1+0x1f58+0x29*0x1d,'f32'],[0xd*0x23b+0x205d+0x3d1c*-0x1,_0x3e5c02(0x666)],[0x6*0x5e7+0xcae*-0x3+0x94*0x5,'u8'],[0x2*-0x2b3+0x1026+-0xa78,'v2']],'NetworkPlayerAnimations':[[0x170+-0x594+0x4cc,'v3'],[-0xb*0x2b3+-0x7*0x306+0x338f,'v3'],[-0xc*0x2ab+-0x3*0x493+0x3*0xf7f,'u8'],[-0x187f+0x154f+0x17*0x2c,_0x3e5c02(0x666)],[-0x17b0+0x9d8+-0x1*-0xea0,_0x3e5c02(0x666)],[0x1c0*0x12+0x1176+-0x302a,'f32'],[-0x1512+-0x1da9*0x1+-0xd*-0x3f7,_0x3e5c02(0x726)],[0x14a9+0x89*-0x36+0x919,_0x3e5c02(0x726)],[0x9ed+0x1b89+0xc32*-0x3,'f32'],[-0x5*-0x2a5+0xa6*-0x1+-0xbab,_0x2670e0['biRQU']],[-0x1*0x2659+0x1418+0x1*0x132d,_0x2670e0[_0x3e5c02(0x62a)]],[0x755*-0x1+0x1da*-0xe+-0x2231*-0x1,'f32'],[0x79*-0xd+0x1a37+0x131e*-0x1,_0x3e5c02(0x726)],[-0x2*-0x632+-0x5b7*-0x5+-0x3*0xd55,'f32'],[-0x12a*-0x17+-0x6c+-0x195e,_0x3e5c02(0x726)],[0x1*0x1a17+-0x1b3a+0x223,_0x3e5c02(0x726)],[-0x265d*-0x1+-0x1855+0x4*-0x341,_0x3e5c02(0x726)],[-0x2cd*-0x1+0x141b+0x19*-0xe0,_0x3e5c02(0x666)],[-0xd9*-0x13+-0xbb7+-0x358,'u8'],[-0x40d*-0x3+0x1d37+-0x5c2*0x7,_0x3e5c02(0x666)],[0x2395+0x5dd+-0x285e,_0x2670e0[_0x3e5c02(0x46d)]],[0x19*-0xaa+-0x3ed*-0x1+-0x19*-0x8d,'u8'],[-0x1*-0x1c88+0x79d*-0x1+-0x13cf,_0x3e5c02(0x726)],[0xde*0x1+0x2*0xf85+-0x1ec8,_0x2670e0[_0x3e5c02(0x62a)]],[-0x2593*-0x1+0x26da*0x1+-0x4b49,_0x2670e0[_0x3e5c02(0x62a)]],[0xfb*-0xe+-0x163a+-0x64*-0x5f,_0x2670e0[_0x3e5c02(0x62a)]],[0x1bc2+-0xec3*0x1+-0x1*0xbd3,'u8'],[0x21ab*0x1+0x26*0x70+-0x11*0x2e3,'u8'],[-0x8c3*0x1+0xbe*0x1f+-0xd03*0x1,'v3'],[-0x9af*-0x1+-0x20b5+-0x16e*-0x11,'v3'],[0xd1+-0x724*-0x1+-0x17*0x47,'u8']],'NPC_Cotroller':[[0x266d+-0x1847+-0xe12*0x1,'v3'],[-0x230d+0x1cd7+0x656,'f32'],[-0x11*0x1af+0x1*-0x112d+0x2df0,_0x3e5c02(0x726)],[-0x2209*-0x1+0xefe+-0x30b1,'u8'],[-0x6*0x499+-0x1d32+0x391f,'u8'],[0x1c4c+-0x4bc*0x1+-0x1734,'v3'],[0x16b8+-0x5f8+-0x1024,'u8'],[0x1071+-0x6*0x34b+-0x1*-0x3f1,_0x3e5c02(0x726)],[0x2*0xc79+0x2372+0xef0*-0x4,_0x2670e0['biRQU']],[0xb*-0x1fd+-0x1*-0xf2c+0x76b*0x1,_0x2670e0['biRQU']],[0x282*-0x7+-0xc6b+0x1eb5,_0x3e5c02(0x726)],[0x1e41+0x100d+0x16c3*-0x2,'u8'],[0x24ac+0xf*0x16f+-0x3961,_0x2670e0[_0x3e5c02(0x62a)]],[-0x495*0x6+0x462*0x8+0x29*-0x2a,_0x2670e0['biRQU']],[0x53*0x17+-0x1dbf+0x1726,_0x3e5c02(0x726)],[-0x1*0x17ef+-0x46*0x15+0x1e8d,_0x3e5c02(0x726)],[-0x16cf+0x355*-0x7+0x2f06,'u8'],[-0x3*0x47b+-0x569*-0x5+0xe*-0xe8,_0x2670e0[_0x3e5c02(0x62a)]],[0x26e3+0x22*-0x5c+-0x7*0x3ad,'v3'],[-0x9d*0x11+0xe95+-0x32c,'f32'],[0x1*0x13bb+0x2*0xd8b+-0x13d*0x25,_0x2670e0[_0x3e5c02(0x46d)]],[0x7ac+-0x3e7+-0x2f*0xf,_0x2670e0[_0x3e5c02(0x62a)]],[0x1006*0x1+0x2*0xc5b+-0x27b4,_0x2670e0[_0x3e5c02(0x62a)]],[-0x2458+-0x39*0x26+0x2dda*0x1,'f32'],[-0x20b9+0x21b5+-0x8*-0x3,'v3'],[0x596*0x3+-0x91*-0x10+-0x18b2,_0x2670e0[_0x3e5c02(0x62a)]],[0x7*-0x4f+-0x10a4+0x13f1,'f32'],[0x71d+0x211*0xd+-0x20c6,'v3'],[-0x2*-0x73+-0x12d5+0x1333,'u8'],[-0x132d*0x1+0x9b*-0x11+0x1ec0,_0x3e5c02(0x726)],[-0x1a75+-0x1f27+0x3aec,'v3'],[0xe41+0x65b+0x133c*-0x1,_0x3e5c02(0x666)],[-0xfa9*0x1+0x1d0*0x13+-0x5c9*0x3,'i32'],[-0x1384+-0x637*0x5+0x3407,_0x3e5c02(0x726)],[-0x7da+0xcef+-0x1*0x3a1,'u8'],[0x140+0x5d4+0x1*-0x59c,'v4'],[-0xb78*0x1+0x26f1+-0x19f1*0x1,_0x3e5c02(0x726)],[-0xc24+-0x132e*-0x1+-0x57e,_0x3e5c02(0x726)],[-0x12f0+0x1*-0x1e3d+0x32bd,_0x2670e0['biRQU']],[0x1*0x263e+-0x1f7*0x9+0x5*-0x3cb,'u8'],[-0xf4*0x5+-0x7e+0x6e2,_0x2670e0['ywDOi']]],'TargetHealth':[[-0x4*0x298+-0x1e7*-0xd+0x1*-0xe4b,_0x3e5c02(0x666)],[-0x1cdf+0x23db+0x2*-0x374,_0x3e5c02(0x666)],[0x16ff+-0x202a+0x95f,'u8'],[0x4a9*-0x7+-0x1acd+0x2fc*0x14,_0x2670e0[_0x3e5c02(0x46d)]],[0xb11*0x1+-0x8f*0x6+0x1*-0x76f,'i32'],[-0x9d8+0x1e5e+-0x2*0xa1d,_0x2670e0['ywDOi']],[-0x7*0x32b+0x1072+0x1*0x60b,'i32'],[0x4a*0x1a+-0x1*-0x74f+-0xe4f,'f32'],[0x1e4f*-0x1+0x1*-0x1369+0x4*0xc91,_0x2670e0[_0x3e5c02(0x62a)]],[0x1025+-0x432*-0x7+0x1*-0x2cf3,'u8'],[-0x1e25*-0x1+-0x570+-0x1821,_0x3e5c02(0x726)],[-0x6a0+0x2cc*-0x7+0x1ad8,'u8'],[-0x7e0+-0x1e33+0x26bb,'i32'],[-0x1e81+0x22d2+-0x3a5*0x1,'i32'],[0x12c9+-0x1821+0x618,_0x3e5c02(0x726)],[0x2436+-0x1eb2*0x1+-0x4b8,'u8']],'SectatorCamera':[[-0x175c+0x92b*-0x1+0x209b,_0x2670e0['biRQU']],[-0x1d81+-0x19c+0x1f35,_0x2670e0['biRQU']],[0x7f0+0xe84*0x1+-0x8*0x2cb,'f32'],[0xa73+0x1*0xcfa+-0x1*0x174d,'v3'],[-0x3b9*0x1+0x11db*-0x1+0x3a*0x60,'v3'],[-0x7*0x89+0x1*0x1149+-0xd42,_0x3e5c02(0x666)],[0x3b3*0x9+-0xebc+-0x19*0xbb,_0x2670e0['ywDOi']],[0x1ce0+0x2418+0x2*-0x2054,_0x3e5c02(0x726)],[0x192f+0x1c5*0x15+-0x62*0xa2,_0x3e5c02(0x666)],[0x3*0x779+0x9f*0x1c+-0x2777*0x1,'f32'],[0x4*0x296+-0x16ba+0xe9*0xe,'u8'],[-0xbdc+0x5ea+0x2*0x329,'v3'],[0x397*-0x9+-0x801+0x28bc,'v4'],[-0x3*-0x679+-0x6*-0x5a2+-0x34bb,'u8'],[-0x438+0xf7*0x7+0x209*-0x1,_0x3e5c02(0x666)]],'UISettings':[[-0x2061+-0x53c*-0x5+0x655*0x1,'i32'],[0x1f6a*-0x1+-0x133b*0x1+0x32cd,_0x3e5c02(0x726)],[-0x2ac*-0xa+-0x1*-0xace+-0x2442,'u8'],[0x11f3+0x362+-0x140d,_0x2670e0['ywDOi']],[0x7c0+0x1*-0xe76+0x6*0x157,_0x3e5c02(0x666)],[-0xd85+-0x7*0x14e+0x17ff,_0x3e5c02(0x666)],[0x1*-0x23c5+-0x12f1+0x1*0x3812,'u8'],[0x1003+0x22*-0x97+0x568,'u8'],[0x1c67+0x39b*0x5+-0x2d10,'u8'],[-0x31*0x3e+-0x1f9e+-0x2cdb*-0x1,'u8'],[-0xe2f*0x2+0x1020+0xd9e,'u8'],[0xbd3+0x159b+0xf*-0x223,'u8'],[-0x165+0x25c9+-0x2302*0x1,'u8'],[0x47d*0x3+-0x4*0x62b+-0xcf1*-0x1,_0x2670e0['biRQU']],[-0x2609+-0x210b+0x48d8,_0x2670e0[_0x3e5c02(0x62a)]],[-0x10a3*-0x2+0xd*-0x7b+-0x18ef,'u8'],[-0x1f90+-0x28*-0x14+0x1ef0,_0x3e5c02(0x726)],[-0x21b3+-0x461+0x28b4,_0x2670e0['ywDOi']],[0xebd+-0xfac+0x3e7,'u8'],[0xaa*-0x2+0xb7*-0xe+0xef2,'u8'],[0x521*0x1+-0xbfb*0x1+0xa7a,'v2'],[0x9d9+0x47*-0x6d+-0x1*-0x180a,'v2'],[-0x2*-0xc3b+0xaf3*-0x3+-0x1*-0xc13,'u8'],[0x1f8a+-0x24c4+0x8f2,'u8'],[0x349*0x9+0x38d*0x5+-0x2b86,_0x2670e0['biRQU']],[-0x145+0x91*0x22+-0x13*0xbf,'v3'],[0x2528+0x1d05*0x1+-0x29*0x185,_0x3e5c02(0x726)],[-0x1aae*-0x1+0x214c+-0x3816,'f32'],[-0x17*0x3b+-0x1a2d+0x2362,_0x3e5c02(0x726)],[0x2365*-0x1+-0x1*0x90a+0x305f,'u8'],[-0x552+0x3b*-0xb+0xbcc,'u8'],[0xf7f*-0x2+0x3e5*-0x2+-0x4*-0xaaf,_0x2670e0[_0x3e5c02(0x46d)]],[-0xedb+-0x881+-0x1b5c*-0x1,_0x2670e0[_0x3e5c02(0x46d)]],[0x946+0xbe*-0x2+-0x3c6,_0x2670e0['ywDOi']],[-0x95b+-0x92f+-0xd6*-0x1b,_0x2670e0['ywDOi']],[-0x1*0x1dd1+-0x2c7+0x1252*0x2,_0x3e5c02(0x666)],[0x3a9*0x2+-0x1*-0xb3e+-0xe80,_0x2670e0[_0x3e5c02(0x46d)]],[0x5f7+-0x1*-0x1fcd+-0x21b0,_0x2670e0['ywDOi']],[0x1dca+0x11*0x1c3+0xb9*-0x4d,_0x2670e0['ywDOi']],[-0x1315+-0x4b*-0x5b+-0x4a*0xc,_0x2670e0[_0x3e5c02(0x46d)]],[-0x1*0x210+-0x4f6+0xb26,_0x3e5c02(0x666)],[0xe*-0x20b+-0x14ae+-0x359c*-0x1,'u8'],[-0x1c*0x14b+0x2562+-0x3*-0x10d,'u8'],[0x5*-0xcc+0x1cd*0x3+0x53*0x9,'u8'],[-0x5*-0xfd+0x1e5e+-0x1ef8,'u8'],[-0xc93*-0x3+-0x291+0x1*-0x1e9c,_0x2670e0[_0x3e5c02(0x62a)]]]},_0x1aab03={},_0x4be505={};function _0x396a54(_0xb38231,_0x5ced0f,_0x47e371){var _0x4afe21=_0x3e5c02,_0x40e764={'KkVae':function(_0x3e0624,_0x2f7254){return _0x3e0624<_0x2f7254;},'iEfxZ':function(_0x2d5328,_0x585c63,_0x29cf54){return _0x2d5328(_0x585c63,_0x29cf54);},'BSSfJ':function(_0x47580d,_0x29b12e){var _0x536448=_0x310c;return _0x2670e0[_0x536448(0x461)](_0x47580d,_0x29b12e);},'xqWmM':function(_0x23647d,_0x1b6324){return _0x2670e0['NtekQ'](_0x23647d,_0x1b6324);}};return _0x4afe21(0x76e)!==_0x4afe21(0x261)?function(_0x47039e){var _0x16ad7f=_0x4afe21,_0x53cb3a={'aDnsr':function(_0x331f73,_0x131275){return _0x2670e0['xbgAX'](_0x331f73,_0x131275);},'nhIdL':'ryVqm','vnrlP':function(_0x1c9355,_0x179975){return _0x1c9355===_0x179975;}};try{var _0x3c99a8=_0x47039e&&_0x47039e[_0x16ad7f(0x3c6)]?_0x47039e[_0x16ad7f(0x3c6)]():0x142b*0x1+0x10c6+-0x24f1;if(!_0x3c99a8)return;var _0x48a124=_0x4be505[_0xb38231]||(_0x4be505[_0xb38231]={}),_0x43b885=_0x48a124[_0x3c99a8];if(!_0x43b885)_0x43b885=_0x48a124[_0x3c99a8]={'ptr':_0x3c99a8,'firstSeen':Date['now'](),'hits':0x0};_0x43b885['hits']++;if(_0x47e371){if(!_0x1aab03[_0x3c99a8])_0x1aab03[_0x3c99a8]={'ptr':_0x3c99a8,'kind':_0xb38231,'firstSeen':Date['now'](),'hits':0x0};_0x1aab03[_0x3c99a8]['hits']++;}else{var _0xd61607=_0x40b563[_0xb38231];if(!_0xd61607||_0xd61607[_0x16ad7f(0x872)]!==_0x3c99a8){_0x40b563[_0xb38231]={'ptr':_0x3c99a8,'firstSeen':Date['now'](),'hits':0x0,'replaced':!!_0xd61607};try{var _0x35729e=_0x1c14e7['filte'+'r'](function(_0x508f01){var _0x205bd3=_0x16ad7f;if(_0x53cb3a[_0x205bd3(0x3ed)](_0x53cb3a['nhIdL'],_0x205bd3(0x1ba)))return _0x53cb3a['vnrlP'](_0x508f01['type'],_0xb38231);else _0xb80220['push']({'o':_0x651e57[_0x4fc2d0][_0x205bd3(0x3a6)+'rs'][_0x452996]['o'],'v':_0x66d61a[_0x5d6037][_0x205bd3(0x3a6)+'rs'][_0x4b1a5f]['v'],'why':_0x205bd3(0x17f)+'eton'});})[0x1f53+-0xce3+-0x1270];_0x423699={'type':_0xb38231,'atMs':_0x2670e0[_0x16ad7f(0x3dc)](Date[_0x16ad7f(0x31d)](),_0x448406),'originalFunc':!!(_0x35729e&&_0x35729e[_0x16ad7f(0x4ca)]&&typeof _0x35729e[_0x16ad7f(0x4ca)][_0x16ad7f(0x672)+'nalFu'+'nc']===_0x2670e0['IQgIr']),'resolveGameAtFire':!!_0x2670e0[_0x16ad7f(0x18f)](_0x350b1c),'gameSourceAtFire':_0x166ac7[_0x16ad7f(0x855)+'e']};}catch(_0x98cbf7){}}}if(_0x2670e0[_0x16ad7f(0x163)](_0xb38231,_0x16ad7f(0x3ab)+'ntrol'+'ler')&&_0x606573['on'])try{_0x463066(_0x3c99a8);}catch(_0x2c1453){}if(!_0x5ced0f){if(_0x2670e0[_0x16ad7f(0x44e)]!==_0x2670e0['VytJv']){if(!_0xc49df1[_0x16ad7f(0x267)+'h'])try{_0x76efaf();}catch(_0x5404ae){}_0x1904f8++,_0x571fbc(_0x4c7668());if(!_0x2d155c[_0x16ad7f(0x267)+'h']&&_0x429ede<0xcbb*0x3+0x1*0x236f+-0x4874)_0x19f786(_0x80bed9,0x100d+-0x1*0x53+-0x7ea);else{if(!_0x145660[_0x16ad7f(0x251)](_0x62fb84)['lengt'+'h']&&_0x40e764[_0x16ad7f(0x445)](_0x5513e4,0x531+0x5*0xb+-0x43c))_0x40e764[_0x16ad7f(0x317)](_0x4c45ba,_0x44a6da,-0x1*-0x247d+-0x15*0x1a7+0x1*0x606);else _0x40e764['iEfxZ'](_0x230b27,_0x16fe86,-0x3*0xb5a+-0x1af1+0x41af);}}else{var _0x35729e=_0x1c14e7[_0x16ad7f(0x26b)+'r'](function(_0x4bf7e9){var _0x17d9c9=_0x16ad7f;if(_0x40e764[_0x17d9c9(0x552)](_0x17d9c9(0x347),_0x17d9c9(0x1e3)))_0x2602a8=_0x571045,_0x2e8edc[_0x17d9c9(0x837)]=_0x2b3900,_0x157487[_0x17d9c9(0x284)]=_0x56e4f2['allVe'+'cs'][_0x2f64ff]['o'];else return _0x40e764[_0x17d9c9(0x839)](_0x4bf7e9[_0x17d9c9(0x1fd)],_0xb38231);})[-0x28f+-0x24b5+0x2744];if(_0x35729e&&_0x35729e[_0x16ad7f(0x4ca)]){if(_0x2670e0[_0x16ad7f(0x212)](_0x2670e0[_0x16ad7f(0x244)],_0x2670e0[_0x16ad7f(0x6a7)])){if(_0x10963b)return _0x5a980c;try{var _0x4a1e16=(_0x16ad7f(0x2a4)+_0x16ad7f(0x54f)+_0x16ad7f(0x6ac))[_0x16ad7f(0x356)]('|'),_0x4f7455=-0x1f*0xf5+-0xd9f+-0x3*-0xe6e;while(!![]){switch(_0x4a1e16[_0x4f7455++]){case'0':_0x227edd={'cv':_0x20b654};continue;case'1':var _0x20b654=_0x56fb7b[_0x16ad7f(0x2b6)+_0x16ad7f(0x69c)+_0x16ad7f(0x5c8)]('canva'+'s');continue;case'2':return _0x44924b;case'3':_0x20b654[_0x16ad7f(0x82d)][_0x16ad7f(0x5ba)+'xt']=_0x16ad7f(0x5c0)+_0x16ad7f(0x7c3)+'ixed;'+_0x16ad7f(0x731)+'0;top'+':0;z-'+_0x16ad7f(0x7a7)+_0x16ad7f(0x6ff)+_0x16ad7f(0x760)+_0x16ad7f(0x28b)+_0x16ad7f(0x5d8)+'event'+_0x16ad7f(0x4b4)+'e;';continue;case'4':_0x20b654['id']=_0x16ad7f(0x389)+'a-box'+'es';continue;case'5':_0x16a048['body'][_0x16ad7f(0x766)+_0x16ad7f(0x1ee)+'d'](_0x20b654);continue;case'6':if(!_0x338618[_0x16ad7f(0x82e)]||!_0x20a7b8['body']['appen'+'dChil'+'d'])return null;continue;}break;}}catch(_0x33626e){return null;}}else try{_0x35729e[_0x16ad7f(0x4ca)][_0x16ad7f(0x423)+'ed']=![];}catch(_0x5e40bb){}}}}}catch(_0x2d06a7){}}:_0x30f347['type']===_0x23b283;}function _0x4130d6(){var _0x2ab21c=_0x3e5c02;if(_0x1c14e7[_0x2ab21c(0x267)+'h'])return!![];if(!window['Unity'+_0x2ab21c(0x561)+_0x2ab21c(0x817)]||!window['Unity'+_0x2ab21c(0x561)+_0x2ab21c(0x817)]['Runti'+'me'])return![];var _0x2f3588=window[_0x2ab21c(0x330)+'WebMo'+_0x2ab21c(0x817)][_0x2ab21c(0x7b8)+'me'];if(!_0x2f3588[_0x2ab21c(0x838)+'ns']||!_0x2f3588['plugi'+'ns'][_0x2ab21c(0x267)+'h'])return![];_0x353bd1=window[_0x2ab21c(0x330)+'WebMo'+'dkit']['Value'+_0x2ab21c(0x374)+'er'],_0x2da501=_0x2da501||_0x2f3588['plugi'+'ns'][_0x2670e0['hFqxH'](_0x2f3588['plugi'+'ns'][_0x2ab21c(0x267)+'h'],0x2287+-0x1045+-0x1241)];if(!_0x2da501||typeof _0x2da501[_0x2ab21c(0x7cf)+_0x2ab21c(0x7f6)]!==_0x2ab21c(0x184)+_0x2ab21c(0x3c8))return![];for(var _0x55f112=-0x107e+0x8f5*0x3+0xa61*-0x1;_0x2670e0[_0x2ab21c(0x301)](_0x55f112,_0x3e75b8['lengt'+'h']);_0x55f112++){var _0x25888c=_0x3e75b8[_0x55f112];try{var _0x6d24cb=_0x2da501['hookP'+_0x2ab21c(0x7f6)]({'typeName':_0x25888c[_0x2ab21c(0x1fd)],'methodName':'Updat'+'e','params':[_0x2670e0['ywDOi'],_0x2ab21c(0x666)],'returnType':undefined},_0x396a54(_0x25888c['type'],_0x25888c[_0x2ab21c(0x345)],_0x25888c[_0x2ab21c(0x2b8)]));_0x1c14e7[_0x2ab21c(0x7c8)]({'type':_0x25888c['type'],'hook':_0x6d24cb,'keep':_0x25888c['keep']});}catch(_0x40ea71){if(_0x2670e0[_0x2ab21c(0x56a)]===_0x2ab21c(0x611)){var _0x2d05ef=_0x2670e0[_0x2ab21c(0x6f4)]['split']('|'),_0x370538=-0x20c1+0xf16*-0x2+0x3eed;while(!![]){switch(_0x2d05ef[_0x370538++]){case'0':if(_0x2670e0[_0x2ab21c(0x232)](typeof _0x3e552b,_0x2670e0['hcmkr'])||typeof _0x168121!==_0x2ab21c(0x6d5)+'r')return null;continue;case'1':return{'pitch':_0x3e552b+_0x17e87f[_0x2ab21c(0x4b2)+'Off'],'yaw':_0x168121+_0x49a329['yawOf'+'f']};case'2':var _0x3e552b=_0x44c2f6(_0x611f82+(-0x16ce+-0xf73+-0x1*-0x2659),'f32');continue;case'3':var _0x4bb6fa=_0x2670e0[_0x2ab21c(0x84e)](_0x5110fe);continue;case'4':var _0x168121=_0x2670e0[_0x2ab21c(0x2c7)](_0x3d4518,_0x2670e0[_0x2ab21c(0x5de)](_0x611f82,-0x1e8f+0x71a+-0x7db*-0x3),'f32');continue;case'5':if(!_0x4bb6fa||!_0x4bb6fa[_0x2ab21c(0x28c)+'Look'])return null;continue;case'6':var _0x611f82=_0x356314(_0x4bb6fa[_0x2ab21c(0x28c)+_0x2ab21c(0x7a4)],-0x1bc2+0x1582+0x650);continue;}break;}}else _0x272b92['push'](_0x2670e0[_0x2ab21c(0x76f)](_0x25888c[_0x2ab21c(0x1fd)]+':\x20',_0x2670e0[_0x2ab21c(0x5ec)](String,_0x40ea71&&_0x40ea71[_0x2ab21c(0x269)+'ge']||_0x40ea71)['slice'](0x2f*0x32+-0x1c71+0x1343,0x2135+0x9b2+-0x89*0x4f)));}}return _0x2670e0[_0x2ab21c(0x31f)](_0x1c14e7[_0x2ab21c(0x267)+'h'],0x1*-0x1659+0x10bd+-0x4*-0x167);}function _0x2798a0(){var _0x110264=_0x3e5c02,_0x451b4c=-0x1*0x8e1+0x15c9+0x4*-0x33a;for(var _0x3dcc85=-0x2346+0x12ee*0x1+0x1058;_0x3dcc85<_0x1c14e7['lengt'+'h'];_0x3dcc85++){if(_0x1c14e7[_0x3dcc85][_0x110264(0x4ca)]&&_0x2670e0[_0x110264(0x2ce)](_0x1c14e7[_0x3dcc85][_0x110264(0x4ca)][_0x110264(0x769)+_0x110264(0x5b2)],undefined))_0x451b4c++;}return _0x451b4c;}function _0x2f3a87(){var _0x62ebb7=_0x3e5c02,_0x32475e=0x2e7*0x1+0x765*-0x2+0xbe3;for(var _0x33b39c=0x80b*0x1+-0x2071+0x1866;_0x33b39c<_0x1c14e7[_0x62ebb7(0x267)+'h'];_0x33b39c++){if('prBAo'!==_0x2670e0[_0x62ebb7(0x3f7)]){if(_0x1c14e7[_0x33b39c]['hook']&&_0x1c14e7[_0x33b39c]['hook'][_0x62ebb7(0x7a9)+'ed'])_0x32475e++;}else return _0x2670e0['aDHFx'](_0x14125f[-0xf70+-0x9*0x3b9+0x30f2],_0x62ebb7(0x726))||_0x2670e0['sPfKZ'](_0x4ce0ed[0x222e+-0x1450+0xd*-0x111],_0x2670e0['ywDOi']);}return _0x32475e;}var _0x4db906=null,_0x374cd2=[],_0x45303f={},_0x423699=null;function _0x346d76(_0xae00bb){var _0x179e57=_0x3e5c02,_0x553cd8={'RUkqI':function(_0x270930,_0x54abf8){return _0x270930(_0x54abf8);},'nVEsT':_0x2670e0['zDQGv']};try{if(_0x2670e0['XITyi'](!_0x353bd1,!_0xae00bb))return null;var _0x4e8154=new _0x353bd1(_0xae00bb)[_0x179e57(0x19e)+_0x179e57(0x701)+'me']();return _0x4e8154===undefined?null:_0x4e8154;}catch(_0x53bd0c){if(_0x2670e0[_0x179e57(0x425)](_0x179e57(0x2af),_0x179e57(0x2af)))return null;else _0x553cd8[_0x179e57(0x80a)](_0x2347ae,_0x553cd8['nVEsT']);}}function _0x1ca74(_0x340b50,_0x3405f1,_0x5a00f3){var _0x379b3b=_0x3e5c02,_0x5d79a8=_0x2670e0[_0x379b3b(0x494)](_0x4abe51);if(!_0x5d79a8)return null;if(_0x3405f1<0x2*0xc30+0xdee+-0x264e*0x1||_0x2670e0['KkFii'](_0x3405f1+_0x5a00f3*(-0x220d+0x689*-0x2+0x2f23),_0x5d79a8[_0x379b3b(0x7a3)+'ength']))return null;var _0x484f5a=[];for(var _0x328045=-0x1*0x4+0x13*0xa0+-0x4*0x2f7;_0x2670e0[_0x379b3b(0x2cd)](_0x328045,_0x5a00f3);_0x328045++)_0x484f5a[_0x379b3b(0x7c8)](_0x5d79a8[_0x379b3b(0x34d)+'oat32'](_0x340b50+_0x3405f1+_0x328045*(0x1cd0+0x1ed2+-0xd*0x496),!![]));return _0x166ac7['ok']+=_0x5a00f3,_0x484f5a;}var _0x13e6c2={'PhotonNetworkSync':[[_0x2670e0[_0x3e5c02(0x1d9)],_0x2670e0[_0x3e5c02(0x476)]],[_0x2670e0[_0x3e5c02(0x2f0)],_0x3e5c02(0x862)+'h'],[_0x3e5c02(0x7d9),_0x2670e0[_0x3e5c02(0x5b8)]],[_0x3e5c02(0x242),_0x2670e0['tqFIH']],['0x30','mouse'+_0x3e5c02(0x7a4)]],'NetworkPlayerAnimations':[[_0x3e5c02(0x7a2),'capsu'+'le'],[_0x3e5c02(0x705),_0x3e5c02(0x403)]],'NPC_Cotroller':[[_0x3e5c02(0x7c6),_0x2670e0[_0x3e5c02(0x2da)]],[_0x2670e0['reNBH'],_0x3e5c02(0x22c)+'tHeal'+'th'],[_0x3e5c02(0x30c),_0x2670e0['KsqHs']],[_0x3e5c02(0x2ef),'targe'+'tHeal'+_0x3e5c02(0x455)],[_0x3e5c02(0x3be),_0x3e5c02(0x69e)+_0x3e5c02(0x636)]],'EnemyBot':[['0x14',_0x2670e0['tDiYI']]]},_0xe3f51a={'PhotonNetworkSync':[[_0x2670e0['bKOOS'],_0x2670e0[_0x3e5c02(0x190)]],[_0x2670e0[_0x3e5c02(0x37d)],_0x2670e0['LGsyV']],[_0x3e5c02(0x6ce),'id']]};function _0x5147a9(_0xef84ae,_0x22149a){var _0x242fdc=_0x3e5c02,_0x1b5d93={'EkPSH':function(_0xdbf43b,_0x4ffb83){return _0xdbf43b+_0x4ffb83;}},_0x4d7079=_0x43be7a[_0xef84ae]||[],_0x3044bc={'kind':_0xef84ae,'ptr':'0x'+_0x22149a['toStr'+'ing'](-0x36e*-0x7+0x38*-0x4+-0x1712),'pos':null,'posAt':null,'allVecs':[],'scalars':[],'refs':{}};for(var _0x5c9138=0xa45+-0xdc7*-0x1+-0x180c;_0x5c9138<_0x4d7079[_0x242fdc(0x267)+'h'];_0x5c9138++){if(_0x2670e0['QZBoO'](_0x4d7079[_0x5c9138][-0xc3*0x6+0x1375*-0x2+-0x4d5*-0x9],'v3'))continue;var _0x5507d9=_0x2670e0['hNhld'](_0x1ca74,_0x22149a,_0x4d7079[_0x5c9138][0x1993+-0x62e*-0x1+0xb*-0x2e3],-0x7a+-0x16f+0x1ec);if(!_0x5507d9)continue;_0x3044bc['allVe'+'cs'][_0x242fdc(0x7c8)]({'o':_0x2670e0[_0x242fdc(0x458)]('0x',_0x4d7079[_0x5c9138][0xda3+0x6e9+-0x148c][_0x242fdc(0x80d)+'ing'](-0x1*0x1e59+0xfb2*0x1+-0xeb7*-0x1)),'v':_0x5507d9});}var _0x172eff=0x1bad+0x5b3*0x6+-0x3ddf;for(var _0x5d84b7=0x4eb*0x6+-0x1*0x1ef7+0x175;_0x5d84b7<_0x3044bc['allVe'+'cs'][_0x242fdc(0x267)+'h'];_0x5d84b7++){var _0x4ed518=_0x3044bc[_0x242fdc(0x297)+'cs'][_0x5d84b7]['v'],_0x22619e=_0x2670e0[_0x242fdc(0x77c)](_0x2670e0['tPUog'](_0x4ed518[0x18*-0x169+-0x178f*0x1+-0x3967*-0x1],_0x4ed518[-0xf8*0x23+-0x37*-0x6f+0xa0f]),_0x2670e0['tPUog'](_0x4ed518[-0x4a8+-0xb33+0xfdd],_0x4ed518[0x133*0xb+-0x10*0x3d+-0x1*0x95f]));if(_0x2670e0[_0x242fdc(0x744)](_0x22619e,_0x172eff)){if(_0x2670e0['nSaVm']!=='lROdj')_0x172eff=_0x22619e,_0x3044bc[_0x242fdc(0x837)]=_0x4ed518,_0x3044bc[_0x242fdc(0x284)]=_0x3044bc['allVe'+'cs'][_0x5d84b7]['o'];else{if(typeof _0x2adc16!==_0x2670e0['gcziG']&&_0xd18041)return _0xb3c8dd['sourc'+'e']=_0x242fdc(0x446)+'game\x20'+_0x242fdc(0x3ca)+'ng',_0x4b23c9;}}}_0x3044bc['reach']=Math['sqrt'](_0x172eff);var _0x4eef28=_0x13e6c2[_0xef84ae],_0x484196=_0xe3f51a[_0xef84ae];if(_0x484196){_0x3044bc['tag']={};for(var _0x2e4924=0x1162+-0x1fa1+0xe3f;_0x2e4924<_0x484196[_0x242fdc(0x267)+'h'];_0x2e4924++){var _0x5c1f89=_0x2670e0['szmUp'](_0x3f7cfa,_0x2670e0[_0x242fdc(0x84a)](_0x22149a,_0x2670e0[_0x242fdc(0x6be)](parseInt,_0x484196[_0x2e4924][0x1*-0x52d+0x22b4*0x1+-0x1d87*0x1],-0x221*0x6+0x238b+-0x1*0x16b5)),_0x2670e0[_0x242fdc(0x46d)]);if(_0x2670e0['fZtcW'](_0x5c1f89,undefined))_0x3044bc['tag'][_0x484196[_0x2e4924][-0xf83+0x1485+-0x501]]=_0x5c1f89;}}if(_0x4eef28)for(var _0x3c7ae1=0xe5e+0x192*0x1+-0xff0;_0x3c7ae1<_0x4eef28['lengt'+'h'];_0x3c7ae1++){if(_0x2670e0['oLyWx']!=='aBHod'){var _0x74e934=_0x2670e0['Cxffu'](_0x3f7cfa,_0x2670e0[_0x242fdc(0x65b)](_0x22149a,parseInt(_0x4eef28[_0x3c7ae1][0x1389+-0x2579*0x1+0x11f0],0x890*-0x1+0xca2+-0x402)),_0x242fdc(0x405));if(_0x74e934)_0x3044bc[_0x242fdc(0x534)][_0x4eef28[_0x3c7ae1][-0xfa*0x17+0x1e35+-0x7be]]='0x'+_0x2670e0[_0x242fdc(0x810)](_0x74e934,-0x1ce3+-0x69a*0x1+0x237d)['toStr'+_0x242fdc(0x3a4)](-0x26e*0xb+-0x441+0x373*0x9);}else return _0x53033d['sourc'+'e']=_0x242fdc(0x446)+_0x242fdc(0x1a5)+'bindi'+'ng',_0x5223bf;}return _0x3044bc['scala'+'rs']=_0x4d7079['filte'+'r'](function(_0x59e8f6){var _0xbf9a85=_0x242fdc;return _0x59e8f6[0x4f*0x37+0x269b+0x29*-0x15b]===_0xbf9a85(0x726)||_0x2670e0[_0xbf9a85(0x79f)](_0x59e8f6[0x10be+0x1ebc+-0x2f79],'i32');})[_0x242fdc(0x79c)](function(_0x351d64){var _0x49f2e6=_0x242fdc;return{'o':_0x1b5d93['EkPSH']('0x',_0x351d64[-0x5e7+-0x2f4+0x8db]['toStr'+_0x49f2e6(0x3a4)](-0x4*-0x5ee+0x1*-0x20b1+0x909)),'v':_0x3f7cfa(_0x1b5d93[_0x49f2e6(0x83d)](_0x22149a,_0x351d64[-0x1870+-0x1b*-0xad+0x631*0x1]),_0x351d64[-0xf*-0x1d+-0x2406*0x1+0x2254])};})['filte'+'r'](function(_0x2ef421){var _0x488613=_0x242fdc;return _0x2670e0[_0x488613(0x15c)]==='avuiX'?(_0x4da134[_0x488613(0x855)+'e']=_0x488613(0x7b8)+_0x488613(0x33f)+_0x488613(0x567)+_0x488613(0x2fa)+')',_0x4bc424):_0x2670e0['HkPFw'](_0x2ef421['v'],undefined)&&isFinite(_0x2ef421['v']);})['slice'](0x1b24+0x6be+0x1*-0x21e2,-0x13c+0x1a5*-0x7+0xccb),_0x3044bc;}function _0x18274f(){var _0x16ca3a=_0x3e5c02,_0x6f87a={'CfuWj':function(_0x361ce5,_0x110a1d){var _0x2b3e86=_0x310c;return _0x2670e0[_0x2b3e86(0x5de)](_0x361ce5,_0x110a1d);},'KSAnl':_0x2670e0['bKDAf'],'DDVeX':_0x16ca3a(0x6cc)+_0x16ca3a(0x2d9)+'loats'+'\x20agre'+'ed'},_0xbdd341={'players':[],'bots':[],'enemies':[],'controllers':[],'camera':null,'cameraFrom':null,'playerList':null,'managers':{},'wasmTypes':null},_0x1bd168=_0x40b563['FPSco'+_0x16ca3a(0x279)+'ler']&&_0x40b563[_0x16ca3a(0x3ab)+'ntrol'+_0x16ca3a(0x43f)]['ptr']||0x145a+0x7*0x18a+-0x1f20,_0x5d1a23=_0x4be505[_0x16ca3a(0x500)+_0x16ca3a(0x575)+'orkSy'+'nc']||{},_0x114500=Object['keys'](_0x5d1a23);for(var _0x5961cc=-0x59*0x3f+-0x1f7*0x1+-0x82*-0x2f;_0x2670e0[_0x16ca3a(0x70b)](_0x5961cc,_0x114500[_0x16ca3a(0x267)+'h'])&&_0x2670e0[_0x16ca3a(0x1a9)](_0x5961cc,-0xd27+0x48f+-0x8b0*-0x1);_0x5961cc++){if('arvej'===_0x2670e0[_0x16ca3a(0x6c5)])return-0xf3c+0x3c2+-0xb7a*-0x1;else{var _0x5709bd=_0x5d1a23[_0x114500[_0x5961cc]],_0x26ddd8=_0x5147a9(_0x16ca3a(0x500)+'nNetw'+_0x16ca3a(0x1cb)+'nc',_0x5709bd[_0x16ca3a(0x872)]);_0x26ddd8[_0x16ca3a(0x7f9)]=_0x5709bd[_0x16ca3a(0x7f9)],_0x26ddd8['first'+'SeenM'+'s']=_0x5709bd['first'+'Seen']-_0x448406,_0x26ddd8['isLoc'+'al']=!!_0x1bd168&&_0x26ddd8['refs'][_0x16ca3a(0x7ee)]==='0x'+_0x1bd168[_0x16ca3a(0x80d)+_0x16ca3a(0x3a4)](0x1*-0xbb9+-0xac8+0x1691*0x1);if(_0x26ddd8[_0x16ca3a(0x534)][_0x16ca3a(0x862)+'h']){var _0x4937f9=_0x2670e0[_0x16ca3a(0x7dd)](parseInt,_0x26ddd8[_0x16ca3a(0x534)][_0x16ca3a(0x862)+'h'],0x266a+0x6*0x9d+-0x2a08);_0x26ddd8[_0x16ca3a(0x862)+'h']=_0x2670e0[_0x16ca3a(0x1d8)](_0x1a0db8,_0x4937f9,_0x2670e0[_0x16ca3a(0x16f)],_0x16ca3a(0x39e));}_0xbdd341['playe'+'rs'][_0x16ca3a(0x7c8)](_0x26ddd8);}}_0xbdd341[_0x16ca3a(0x260)+_0x16ca3a(0x7a0)+'t']=_0x114500[_0x16ca3a(0x267)+'h'];var _0x168a63=_0x4be505[_0x16ca3a(0x53f)+_0x16ca3a(0x54d)+'ler']||{},_0x456851=Object[_0x16ca3a(0x251)](_0x168a63);for(var _0xdff037=0x120c+-0x1*0x6e6+-0xb26;_0x2670e0[_0x16ca3a(0x63b)](_0xdff037,_0x456851['lengt'+'h'])&&_0xdff037<-0xee*-0x5+-0x70d+-0x27f*-0x1;_0xdff037++){var _0x1fffc2=_0x2670e0[_0x16ca3a(0x55d)]['split']('|'),_0x136495=0x137*0x17+-0x1*-0x2635+-0x4226;while(!![]){switch(_0x1fffc2[_0x136495++]){case'0':_0x22af50['hits']=_0x168a63[_0x456851[_0xdff037]][_0x16ca3a(0x7f9)];continue;case'1':if(_0x22af50[_0x16ca3a(0x534)][_0x16ca3a(0x862)+'h'])_0x22af50['healt'+'h']=_0x1a0db8(parseInt(_0x22af50['refs']['healt'+'h'],0x229f+-0x1*-0x17d5+0x194*-0x25),_0x16ca3a(0x400)+'hScri'+'pt',_0x16ca3a(0x39e));continue;case'2':var _0x22af50=_0x2670e0['JdOwK'](_0x5147a9,'NPC_C'+_0x16ca3a(0x54d)+'ler',_0x168a63[_0x456851[_0xdff037]][_0x16ca3a(0x872)]);continue;case'3':_0x22af50[_0x16ca3a(0x15d)+'SeenM'+'s']=_0x168a63[_0x456851[_0xdff037]][_0x16ca3a(0x15d)+_0x16ca3a(0x7b0)]-_0x448406;continue;case'4':_0xbdd341[_0x16ca3a(0x828)][_0x16ca3a(0x7c8)](_0x22af50);continue;}break;}}_0xbdd341[_0x16ca3a(0x28d)+'unt']=_0x456851[_0x16ca3a(0x267)+'h'];var _0x1da543=_0x4be505['FPSco'+'ntrol'+_0x16ca3a(0x43f)]||{},_0x535409=Object['keys'](_0x1da543);for(var _0x43b83d=-0xc2e+0x1d*0x152+-0x1a1c;_0x43b83d<_0x535409['lengt'+'h']&&_0x2670e0['PEBNl'](_0x43b83d,0x1424+0x310+-0x44*0x57);_0x43b83d++){var _0x42c707=_0x2670e0['ydZYB'](_0x5147a9,_0x16ca3a(0x3ab)+_0x16ca3a(0x279)+_0x16ca3a(0x43f),_0x1da543[_0x535409[_0x43b83d]][_0x16ca3a(0x872)]);_0x42c707[_0x16ca3a(0x7f9)]=_0x1da543[_0x535409[_0x43b83d]]['hits'],_0x42c707[_0x16ca3a(0x53c)+'al']=_0x1da543[_0x535409[_0x43b83d]][_0x16ca3a(0x872)]===_0x1bd168,_0xbdd341['contr'+'oller'+'s'][_0x16ca3a(0x7c8)](_0x42c707);}_0xbdd341['contr'+_0x16ca3a(0x4fc)+_0x16ca3a(0x7df)]=_0x535409[_0x16ca3a(0x267)+'h'];var _0x4a68b5=_0xbdd341[_0x16ca3a(0x260)+'rs'][_0x16ca3a(0x54a)+'t'](_0xbdd341['bots']);for(var _0x3c9e82=0x1ab7+0x6a3+-0x215a;_0x3c9e82<_0x4a68b5[_0x16ca3a(0x267)+'h'];_0x3c9e82++){if(_0x2670e0[_0x16ca3a(0x6dc)](_0x16ca3a(0x74d),_0x2670e0[_0x16ca3a(0x4cc)]))_0x1f7d57[_0x16ca3a(0x306)+'ngs'][_0x16ca3a(0x7c8)](_0x2670e0[_0x16ca3a(0x384)]+(_0x16ca3a(0x477)+'ced\x20b'+'y\x20a\x20d'+_0x16ca3a(0x83e)+'ent\x20i'+'nstan'+'ce,\x20s'+'o\x20we\x20'+_0x16ca3a(0x5cd)+_0x16ca3a(0x7db)+_0x16ca3a(0x576)+'wrong'+'\x20obje'+_0x16ca3a(0x60a)+'r\x20')+(_0x16ca3a(0x54e)+_0x16ca3a(0x6bc)+_0x16ca3a(0x4d1)+_0x16ca3a(0x37e)+'ne\x20ho'+'lding'+'\x20it\x20i'+_0x16ca3a(0x738)+_0x16ca3a(0x46f)+_0x16ca3a(0x691)+'able\x20'+'every'+'\x20othe'+'r\x20')+_0x2670e0[_0x16ca3a(0x2c8)]);else{if(_0x4a68b5[_0x3c9e82][_0x16ca3a(0x53c)+'al'])continue;_0xbdd341[_0x16ca3a(0x5fd)+'es'][_0x16ca3a(0x7c8)](_0x4a68b5[_0x3c9e82]);}}_0xbdd341['enemy'+_0x16ca3a(0x7df)]=_0xbdd341['enemi'+'es'][_0x16ca3a(0x267)+'h'];var _0x47f0e4={'TDM_GameManager':0x2c,'GG_GameManager':0x14},_0x2b1b29={'TDM_GameManager':0x50,'GG_GameManager':0x5c};for(var _0x497c89 in _0x40b563){var _0x59bb94=_0x40b563[_0x497c89];if(!_0x59bb94||!_0x59bb94['ptr'])continue;if(!(_0x497c89 in _0x47f0e4))continue;_0xbdd341[_0x16ca3a(0x25a)+_0x16ca3a(0x58e)][_0x497c89]='0x'+_0x59bb94['ptr']['toStr'+_0x16ca3a(0x3a4)](-0x2554+0x3*-0xbf5+-0xb*-0x6a9);var _0x5a1839=_0x3f7cfa(_0x2670e0['UdlYA'](_0x59bb94['ptr'],_0x47f0e4[_0x497c89]),'u32'),_0x59100a=_0x3f7cfa(_0x2670e0[_0x16ca3a(0x5de)](_0x59bb94[_0x16ca3a(0x872)],_0x2b1b29[_0x497c89]),_0x2670e0[_0x16ca3a(0x4d3)]);_0x5a1839&&_0x2670e0[_0x16ca3a(0x5ca)](_0xbdd341['camer'+'a'],null)&&(_0xbdd341['camer'+'a']='0x'+_0x2670e0['wyTXn'](_0x5a1839,0x112a+-0xb51*0x2+0x7*0xc8)[_0x16ca3a(0x80d)+_0x16ca3a(0x3a4)](-0xd59*-0x1+-0x49*-0x1a+0x2f5*-0x7),_0xbdd341[_0x16ca3a(0x68f)+_0x16ca3a(0x5c5)]=_0x497c89);if(_0x59100a&&_0xbdd341[_0x16ca3a(0x260)+_0x16ca3a(0x6c2)]===null)_0xbdd341[_0x16ca3a(0x260)+'rList']=_0x2670e0['KhPlb']('0x',(_0x59100a>>>-0xd02+0xa7+-0x1*-0xc5b)['toStr'+_0x16ca3a(0x3a4)](-0x7*0x9d+0xbea+0x285*-0x3));}if(!_0xbdd341[_0x16ca3a(0x260)+'rCoun'+'t']&&!_0xbdd341['botCo'+'unt']&&!_0xbdd341[_0x16ca3a(0x68f)+'a'])_0xbdd341['note']=_0x2670e0[_0x16ca3a(0x854)]+(_0x16ca3a(0x2c2)+_0x16ca3a(0x17c)+_0x16ca3a(0x7c1)+'\x20like'+'\x20-\x20ru'+_0x16ca3a(0x1f4)+_0x16ca3a(0x480)+'n\x20INS'+'IDE\x20a'+'\x20live'+_0x16ca3a(0x20c)+_0x16ca3a(0x857)+_0x16ca3a(0x74b)+'\x20menu'+'.');else!_0xbdd341['enemy'+_0x16ca3a(0x7df)]&&(_0xbdd341['note']=_0x2670e0['lHIwA'](_0x16ca3a(0x419)+'rs\x20ar'+_0x16ca3a(0x3e6)+_0x16ca3a(0x17e)+_0x16ca3a(0x2e1)+_0x16ca3a(0x6d4)+'re\x20cl'+_0x16ca3a(0x852)+'ied\x20a'+_0x16ca3a(0x758)+'mies\x20'+_0x16ca3a(0x5c9)+_0x16ca3a(0x682)+'k\x20','isLoc'+_0x16ca3a(0x6b5)+'\x20each'+'\x20entr'+'y\x20in\x20'+_0x16ca3a(0x32e)+_0x16ca3a(0x82c)));try{var _0x52422a=window[_0x16ca3a(0x330)+_0x16ca3a(0x561)+_0x16ca3a(0x817)]&&window[_0x16ca3a(0x330)+'WebMo'+'dkit'][_0x16ca3a(0x7b8)+'me'],_0x271548=_0x52422a&&_0x52422a['inter'+_0x16ca3a(0x669)+_0x16ca3a(0x2e4)+'es']||[],_0x983299={};for(var _0x12666c=-0x204f+0x1064+0x1*0xfeb;_0x12666c<_0x271548['lengt'+'h']&&_0x2670e0[_0x16ca3a(0x301)](_0x12666c,0x1de8+-0x2cb+-0xb7d);_0x12666c++){if(_0x16ca3a(0x4da)!==_0x16ca3a(0x4da)){_0x3b343e['push']({'o':-(0x8*-0xbb+-0xf6e+0x1547),'v':0x0,'why':_0x6f87a['CfuWj'](_0x6f87a[_0x16ca3a(0x73c)],_0x5bd615)+_0x6f87a['DDVeX']});return;}else{var _0x5167ce=_0x271548[_0x12666c][_0x16ca3a(0x6ef)+'s']['join'](',')+_0x16ca3a(0x435)+(_0x271548[_0x12666c][_0x16ca3a(0x4e9)+_0x16ca3a(0x64a)]||_0x16ca3a(0x5fc));_0x983299[_0x5167ce]=_0x2670e0[_0x16ca3a(0x7ae)](_0x983299[_0x5167ce]||-0x20a0+-0x2388+0x4428,0x1*0x103f+0x24c4+-0x3502);}}_0xbdd341['wasmT'+_0x16ca3a(0x4df)]=_0x983299;}catch(_0x1bba7e){}return _0xbdd341;}function _0x1a0db8(_0xc7d569,_0x293aba,_0x262dba){var _0xe3b2c5=_0x3e5c02;try{var _0x19b571=_0x43be7a[_0x293aba]||[];for(var _0xaea3eb=0x189f+0x7c7*0x3+-0x21*0x174;_0x2670e0['JTgRf'](_0xaea3eb,_0x19b571[_0xe3b2c5(0x267)+'h']);_0xaea3eb++){if(_0x19b571[_0xaea3eb][-0x2083*0x1+-0xca0+0x786*0x6]!==_0x262dba)continue;var _0x538107=_0x19b571[_0xaea3eb][-0x141e+-0x102b+-0x7*-0x52f];if(_0x2670e0[_0xe3b2c5(0x3e3)](_0x262dba['index'+'Of'](_0x2670e0['PwvSr']),-0x22cf+-0xb*0x2cd+0x2*0x20cf)){if(_0x2670e0['xSIsE']('KmGVH','CZXvf')){var _0x1b6bda={'DFcEn':function(_0x3b9f8a){var _0x35c9cd=_0xe3b2c5;return _0x2670e0[_0x35c9cd(0x720)](_0x3b9f8a);}};_0x5a408b[_0xe3b2c5(0x599)+'oard']['write'+'Text'](_0x5dd18f)[_0xe3b2c5(0x841)](_0x44b6ec,function(){var _0x347ca7=_0xe3b2c5;_0x1b6bda[_0x347ca7(0x1f5)](_0x37ce73);});}else{var _0x1564f5=_0x2670e0['bYTQD'](_0x1d37dc,_0xc7d569,_0x538107,_0x262dba);if(!_0x1564f5)return null;_0x1564f5['o']=_0x538107,_0x1564f5['k']=_0x262dba;var _0x33e759=_0x2670e0['BDiRP'](_0x114069,[_0x1564f5]);if(!_0x33e759['rows'][_0xe3b2c5(0x267)+'h'])return null;return _0x33e759[_0xe3b2c5(0x426)][-0x13f*0x7+0x38b*-0x2+0xfcf];}}var _0x314287=_0x3f7cfa(_0xc7d569+_0x538107,_0x262dba);if(_0x2670e0['xSIsE'](_0x314287,undefined))return null;return{'o':_0x2670e0[_0xe3b2c5(0x75d)]('0x',_0x538107[_0xe3b2c5(0x80d)+_0xe3b2c5(0x3a4)](0x2*-0x1349+0x2509+0x199*0x1)),'v':_0x314287};}}catch(_0x451ebc){}return null;}function _0xfe0525(){var _0x570df4=_0x3e5c02,_0x304598={};_0x166ac7['ok']=0x3*0x493+-0x1b87+0xdce,_0x166ac7[_0x570df4(0x777)+'d']=-0xf59*0x1+0x7a1+0x7b8,_0x166ac7[_0x570df4(0x23d)+_0x570df4(0x72d)]=null;var _0x2eb867=Object[_0x570df4(0x251)](_0x43be7a);for(var _0x51bec6=-0x1*0x1704+0x18e4*-0x1+0x2fe8;_0x51bec6<_0x2eb867['lengt'+'h'];_0x51bec6++){var _0x3f6133=_0x2eb867[_0x51bec6],_0x134d7e=_0x40b563[_0x3f6133];if(!_0x134d7e||!_0x134d7e[_0x570df4(0x872)])continue;var _0x297d09=_0x43be7a[_0x3f6133]||[],_0x2de750=[];for(var _0x17f0fe=-0x9f*-0x1b+0x2fe*-0x1+-0xdc7;_0x17f0fe<_0x297d09[_0x570df4(0x267)+'h'];_0x17f0fe++){var _0x28939e=_0x297d09[_0x17f0fe][-0x1d5*0x1+0x2251+-0x81f*0x4],_0x5e365c=_0x297d09[_0x17f0fe][-0x2*0xb14+0x386*0x7+0x1*-0x281];if(_0x2670e0[_0x570df4(0x662)](_0x5e365c[_0x570df4(0x7a7)+'Of'](_0x2670e0[_0x570df4(0x5e4)]),-0xe7+0x1ae2+-0x3*0x8a9)){var _0x5dfbf5=_0x2670e0[_0x570df4(0x728)](_0x1d37dc,_0x134d7e['ptr'],_0x28939e,_0x5e365c);if(!_0x5dfbf5)continue;_0x5dfbf5['o']=_0x28939e,_0x5dfbf5['k']=_0x5e365c,_0x2de750[_0x570df4(0x7c8)](_0x5dfbf5);}else{if(_0x2670e0[_0x570df4(0x1eb)]!==_0x2670e0[_0x570df4(0x1eb)]){var _0x4adb0e={};for(var _0x133a2a in _0x25ca9c){var _0xb76704=_0x55a6f7[_0x133a2a];for(var _0x38b53f=-0x1dcf+-0x1af2+0x38c1;_0x2670e0[_0x570df4(0x1a9)](_0x38b53f,_0xb76704[_0x570df4(0x267)+'h']);_0x38b53f++){_0x4adb0e[_0x2670e0['GWpFb'](_0x133a2a,_0x2670e0[_0x570df4(0x714)])+_0xb76704[_0x38b53f]['o'][_0x570df4(0x80d)+_0x570df4(0x3a4)](-0x2*-0xbf6+0x247a+-0x1e2b*0x2)]=_0xb76704[_0x38b53f]['v'];}}return _0x4adb0e;}else{var _0x14fe6a=_0x3f7cfa(_0x2670e0[_0x570df4(0x1a1)](_0x134d7e[_0x570df4(0x872)],_0x28939e),_0x5e365c);if(_0x2670e0[_0x570df4(0x425)](_0x14fe6a,undefined))continue;var _0x3bb712={'o':_0x28939e,'k':_0x5e365c,'v':_0x14fe6a};if(_0x2670e0[_0x570df4(0x461)](_0x5e365c,'v2')||_0x5e365c==='v3'||_0x5e365c==='v4'){var _0x9759ae=_0x5e365c==='v2'?0xacd+-0x3f8*0x2+-0x2db:_0x2670e0['YWkto'](_0x5e365c,'v3')?-0x1bd8+0xd*0x224+0x7*0x1:0x8*-0x2a5+-0x1*-0x2eb+0x1241,_0xfb9f65=_0x2670e0['RMdFL'](_0x1ca74,_0x134d7e['ptr'],_0x28939e,_0x9759ae);_0xfb9f65&&(_0x3bb712['xyz']=_0xfb9f65,_0x3bb712['v']=_0xfb9f65[0xa71+0x1adb*-0x1+0x106a]);}_0x2de750['push'](_0x3bb712);}}}if(_0x2de750['lengt'+'h']){var _0x54bd7c=_0x2670e0[_0x570df4(0x1de)](_0x114069,_0x2de750);_0x304598[_0x3f6133]=_0x54bd7c[_0x570df4(0x426)],_0x45303f[_0x3f6133]={'key':_0x54bd7c['key'],'sane':_0x54bd7c['sane'],'checked':_0x54bd7c[_0x570df4(0x67b)+'ed'],'keyConsistent':_0x54bd7c['keyCo'+_0x570df4(0x603)+_0x570df4(0x5c8)],'keySource':_0x54bd7c[_0x570df4(0x3e9)+_0x570df4(0x7d2)]};}}return _0x304598;}function _0x114069(_0x10e2a6){var _0x429f85=_0x3e5c02;if('BcAWx'===_0x2670e0['EVssT']){var _0x443c00=0xe*-0xb3+0x2*-0x1327+0x3018,_0x42c1e4=0x7ed+0x1*0x20db+-0x28c8,_0x30c144=null;for(var _0x15d595=0x3f0*0x1+-0xa02+0x612;_0x15d595<_0x10e2a6[_0x429f85(0x267)+'h'];_0x15d595++){var _0x5cfd4f=_0x10e2a6[_0x15d595];if(_0x2670e0[_0x429f85(0x794)](_0x5cfd4f['k'][_0x429f85(0x7a7)+'Of'](_0x2670e0[_0x429f85(0x5e4)]),0x21c*0x4+0x132e+0x5*-0x586))continue;_0x5cfd4f['v']=_0x2fa33f(_0x5cfd4f['k'],_0x5cfd4f[_0x429f85(0x85c)+'n'],_0x5cfd4f[_0x429f85(0x24e)+_0x429f85(0x856)+'t0']),_0x5cfd4f['keyUs'+'ed']=_0x5cfd4f[_0x429f85(0x24e)+'Offse'+'t0'],_0x5cfd4f['raw']=_0x2670e0[_0x429f85(0x7b5)](_0x2670e0[_0x429f85(0x1c5)](_0x2670e0[_0x429f85(0x288)]('hid='+_0x5cfd4f['hidde'+'n']+('\x20fake'+'='),_0x5cfd4f['fake']),_0x5cfd4f['act']?_0x2670e0[_0x429f85(0x4e0)]:'')+'\x20k0='+_0x5cfd4f['keyAt'+_0x429f85(0x856)+'t0'],_0x429f85(0x466))+_0x5cfd4f[_0x429f85(0x79d)];if(_0x30c144===null)_0x30c144=_0x5cfd4f[_0x429f85(0x24e)+_0x429f85(0x856)+'t0'];_0x42c1e4++,_0x23119d(_0x5cfd4f)?(_0x443c00++,_0x5cfd4f['sane']=!![]):_0x5cfd4f[_0x429f85(0x4ec)]=![],delete _0x5cfd4f[_0x429f85(0x264)];}return{'rows':_0x10e2a6,'key':_0x30c144,'sane':_0x443c00,'checked':_0x42c1e4,'keyConsistent':_0x49a9e5(_0x10e2a6),'keySource':_0x2670e0[_0x429f85(0x665)]};}else{var _0x123559=_0x1512e7(_0x2fbef3[_0x429f85(0x534)][_0x429f85(0x862)+'h'],-0x1d19+-0x1be4+0x390d);_0x285c74['healt'+'h']=_0x2670e0[_0x429f85(0x728)](_0x1bc319,_0x123559,'Healt'+_0x429f85(0x2ff)+'pt',_0x429f85(0x39e));}}function _0x49a9e5(_0x2a912c){var _0x46dda3=_0x3e5c02,_0x15ef67={};for(var _0x788d71=0x4f*0x4a+0x1873*0x1+-0x2f49;_0x2670e0['PEBNl'](_0x788d71,_0x2a912c[_0x46dda3(0x267)+'h']);_0x788d71++){var _0x1ceea2=_0x2a912c[_0x788d71];if(_0x2670e0[_0x46dda3(0x3b0)](_0x1ceea2['k']['index'+'Of']('obf'),-0xc98*-0x2+0x613*-0x6+0xb42))continue;if(_0x15ef67[_0x1ceea2['k']]===undefined)_0x15ef67[_0x1ceea2['k']]=_0x1ceea2[_0x46dda3(0x565)+'ed'];else{if(_0x15ef67[_0x1ceea2['k']]!==_0x1ceea2['keyUs'+'ed'])return![];}}return!![];}function _0x23119d(_0x311a1c){var _0x21eb8a=_0x3e5c02,_0x452997=_0x2670e0[_0x21eb8a(0x324)]['split']('|'),_0x21be17=0x1*0x1271+-0x5*-0x667+0x2*-0x193a;while(!![]){switch(_0x452997[_0x21be17++]){case'0':if(typeof _0x39ee8d!==_0x21eb8a(0x6d5)+'r'||!_0x2670e0['HlmUL'](isFinite,_0x39ee8d))return!![];continue;case'1':if(_0x2670e0[_0x21eb8a(0x5b4)](_0x311a1c['k'],_0x2670e0[_0x21eb8a(0x54b)]))return _0x2670e0[_0x21eb8a(0x7af)](_0x438167,0x24c5+-0x1*-0xa5b+0x2*-0x1790)||_0x2670e0[_0x21eb8a(0x743)](_0x438167,0x1*0x8bd+-0x1568+-0x4*-0x32b);continue;case'2':if(_0x2670e0[_0x21eb8a(0x73d)](_0x311a1c[_0x21eb8a(0x42c)],-0x1d11+-0x1723+-0x87*-0x63))return Math['abs'](_0x2670e0[_0x21eb8a(0x651)](_0x438167,_0x39ee8d))<=Math[_0x21eb8a(0x285)](0xb3*-0x19+-0x6a*0x2a+0x22e0,Math[_0x21eb8a(0x47e)](_0x39ee8d)*(-0x101d+-0x1163+0x2180+0.6));continue;case'3':return _0x2670e0[_0x21eb8a(0x301)](Math[_0x21eb8a(0x47e)](_0x438167),-0x1*0x12ea9ce6+0x5e0d3fe5+0x2c44b*-0x59d);case'4':var _0x39ee8d=_0x311a1c[_0x21eb8a(0x332)];continue;case'5':var _0x438167=_0x311a1c['v'];continue;case'6':if(_0x2670e0[_0x21eb8a(0x2ce)](typeof _0x438167,'numbe'+'r')||!_0x2670e0['puoJX'](isFinite,_0x438167))return![];continue;}break;}}function _0x462ea8(){var _0x5c76c3=_0x3e5c02;if(_0x2670e0[_0x5c76c3(0x7f5)]!==_0x5c76c3(0x64d)){var _0x3b230d={};try{var _0x5ec330=_0x2670e0['rmcgS'][_0x5c76c3(0x356)]('|'),_0xbf2fae=0x2e3*0x9+0x1040+-0x1*0x2a3b;while(!![]){switch(_0x5ec330[_0xbf2fae++]){case'0':_0x3b230d['plugi'+_0x5c76c3(0x240)+_0x5c76c3(0x536)+'me']=_0x2da501&&_0x2da501[_0x5c76c3(0x6f9)+_0x5c76c3(0x21d)]&&_0x2da501[_0x5c76c3(0x6f9)+'ime'][_0x5c76c3(0x21b)]?typeof _0x2da501[_0x5c76c3(0x6f9)+_0x5c76c3(0x21d)][_0x5c76c3(0x21b)]:_0x2670e0[_0x5c76c3(0x475)];continue;case'1':_0x3b230d['tagMa'+_0x5c76c3(0x45c)]=!!(_0x5b95c5&&_0x5eb8f3&&_0x5b95c5[_0x5c76c3(0x1b8)+'uraTa'+'g']===_0x5eb8f3);continue;case'2':_0x3b230d[_0x5c76c3(0x24b)+'meGam'+'e']=_0x5b95c5&&_0x5b95c5['_game']?typeof _0x5b95c5[_0x5c76c3(0x21b)]:_0x5c76c3(0x340);continue;case'3':_0x3b230d['tag']=_0x5b95c5&&_0x5b95c5['__sak'+_0x5c76c3(0x296)+'g']||null;continue;case'4':_0x3b230d[_0x5c76c3(0x838)+_0x5c76c3(0x240)+_0x5c76c3(0x3c3)+'Expor'+_0x5c76c3(0x626)]=!!(_0x2da501&&_0x2da501[_0x5c76c3(0x6f9)+_0x5c76c3(0x21d)]&&_0x2da501[_0x5c76c3(0x6f9)+_0x5c76c3(0x21d)]===_0x5b95c5);continue;case'5':var _0x5b95c5=window['Unity'+'WebMo'+'dkit']&&window[_0x5c76c3(0x330)+_0x5c76c3(0x561)+_0x5c76c3(0x817)]['Runti'+'me'];continue;}break;}}catch(_0x225ed3){_0x3b230d['error']=_0x2670e0['HlmUL'](String,_0x225ed3&&_0x225ed3[_0x5c76c3(0x269)+'ge']||_0x225ed3);}return _0x3b230d;}else return null;}function _0x97ba02(){var _0x851bc7=_0x3e5c02;if(_0x2670e0['zVEpo']!=='pIwKa'){var _0x1faea4=_0x2670e0[_0x851bc7(0x86b)][_0x851bc7(0x356)]('|'),_0x44bfda=-0x9dc+0x4bb*-0x2+-0x9a9*-0x2;while(!![]){switch(_0x1faea4[_0x44bfda++]){case'0':try{_0x4bfb43[_0x851bc7(0x607)+_0x851bc7(0x27a)]=!!(_0x1799ef&&_0x1799ef[_0x851bc7(0x6ad)+'e']),_0x4bfb43[_0x851bc7(0x29a)+'8']=!!(_0x1799ef&&_0x1799ef['Modul'+'e']&&_0x1799ef[_0x851bc7(0x6ad)+'e'][_0x851bc7(0x7fd)+'8']),_0x4bfb43['heapB'+_0x851bc7(0x191)]=_0x4bfb43['heapU'+'8']?_0x1799ef[_0x851bc7(0x6ad)+'e'][_0x851bc7(0x7fd)+'8']['lengt'+'h']:0x688+0x1d67+-0x23ef*0x1;}catch(_0x42d1bb){_0x4bfb43['hasMo'+_0x851bc7(0x27a)]=![],_0x4bfb43['heapU'+'8']=![],_0x4bfb43['heapB'+_0x851bc7(0x191)]=0x251a+0x409*0x4+0x1d6*-0x1d;}continue;case'1':_0x4bfb43['gameS'+_0x851bc7(0x416)]=_0x166ac7['sourc'+'e'];continue;case'2':var _0x17cbdd=['unity'+_0x851bc7(0x538)+_0x851bc7(0x189),_0x851bc7(0x3b2)+_0x851bc7(0x4b9),'game',_0x2670e0['WObYV']];continue;case'3':var _0x1799ef=_0x2670e0['VGTlI'](_0x350b1c);continue;case'4':_0x4bfb43['value'+_0x851bc7(0x374)+'er']=typeof _0x353bd1;continue;case'5':var _0x4bfb43={};continue;case'6':return _0x4bfb43;case'7':for(var _0x35cfbd=0x10*0x220+-0x1253*0x2+0x2a6;_0x2670e0['KZJLy'](_0x35cfbd,_0x17cbdd[_0x851bc7(0x267)+'h']);_0x35cfbd++){var _0x480de6=_0x17cbdd[_0x35cfbd],_0x278474=typeof window[_0x480de6];_0x4bfb43[_0x480de6]=_0x278474==='undef'+_0x851bc7(0x7de)?_0x851bc7(0x627)+_0x851bc7(0x7de):_0x278474;}continue;}break;}}else return _0x40bdc8['sourc'+'e']=_0x2e0470[_0x851bc7(0x855)+'e']||_0x851bc7(0x724)+_0x851bc7(0x5ce)+_0x851bc7(0x54c)+_0x851bc7(0x7f7)+_0x851bc7(0x812)+_0x851bc7(0x4a2),new _0x7795c7(_0x457196['buffe'+'r']);}function _0x35234d(_0x4ff799){var _0x36af78=_0x3e5c02,_0x1c03b7={'UOXud':function(_0x285b60,_0x5a3319){return _0x285b60===_0x5a3319;},'HFjWJ':function(_0x170930,_0x245266){return _0x170930+_0x245266;},'WYiOn':function(_0x31ce07,_0x4f08ae){return _0x31ce07(_0x4f08ae);}},_0xbfc5bb={};for(var _0x292a04 in _0x4ff799){var _0x4d97f1=_0x4ff799[_0x292a04];for(var _0x3d9e91=0x321*0x9+-0xba7+-0x1082;_0x3d9e91<_0x4d97f1[_0x36af78(0x267)+'h'];_0x3d9e91++){if(_0x2670e0[_0x36af78(0x43a)](_0x2670e0['ufTZh'],_0x36af78(0x596))){var _0x497800=_0x5a3bdd[_0x202d09],_0x223158=_0x1c03b7[_0x36af78(0x5a2)](typeof _0x497800['v'],_0x36af78(0x6d5)+'r')?_0x31afb0[_0x36af78(0x512)](_0x497800['v']*(-0x192*0x5+0x2135*0x1+0x13*-0x121))/(0x1*0x79f+0x268c+-0x2a43):_0x497800['v'];_0x2ca796['push'](_0x1c03b7[_0x36af78(0x27f)]('\x20\x20'+('0x'+_0x497800['o']['toStr'+_0x36af78(0x3a4)](-0x125*0x1a+-0x2213+-0xb*-0x5cf))[_0x36af78(0x68c)+'d'](0x1c82+-0x40*-0x48+-0x2*0x173d)+'\x20'+_0x497800['k']['padEn'+'d'](0xff8+0x1597+-0x2584)+'\x20'+_0x1c03b7['WYiOn'](_0x5f233c,_0x223158)[_0x36af78(0x68c)+'d'](-0x1*-0x191c+0x24b2+-0x3dbe),'\x20')+(_0x497800['raw']||''));}else _0xbfc5bb[_0x2670e0[_0x36af78(0x74c)](_0x292a04+'+0x',_0x4d97f1[_0x3d9e91]['o']['toStr'+_0x36af78(0x3a4)](0x8d*-0x19+0x121d*0x2+-0x1*0x1665))]=_0x4d97f1[_0x3d9e91]['v'];}}return _0xbfc5bb;}function _0x12e73f(_0x405be3,_0x40f4be){var _0x481b2b=_0x3e5c02,_0x197c75={'HpnXC':function(_0x47cff0,_0x2e57b0){var _0x3ef2e6=_0x310c;return _0x2670e0[_0x3ef2e6(0x60c)](_0x47cff0,_0x2e57b0);},'pJRhG':function(_0x3b1201,_0x30f2c7){var _0x257f8c=_0x310c;return _0x2670e0[_0x257f8c(0x5f0)](_0x3b1201,_0x30f2c7);},'YumqV':function(_0x174b36,_0x15508c){return _0x174b36*_0x15508c;}};if(_0x481b2b(0x3fe)!==_0x2670e0[_0x481b2b(0x467)])_0x405f68=_0x197c75['HpnXC'](_0x284b69,_0x247a8e/_0xff7293*_0x197c75[_0x481b2b(0x236)](_0x361bca,0x19b0+0x3da+0x2*-0xec2)),_0xe3251d=_0x49489b+_0x197c75[_0x481b2b(0x319)](_0x326998/_0x10abfd,_0x1ad064-(-0x1c92+0xf1*-0x13+-0x1*-0x2e7b));else{if(_0x2670e0[_0x481b2b(0x461)](_0x405be3,'speed')){_0x48618d(_0x40f4be&&_0x2670e0[_0x481b2b(0x79f)](typeof _0x40f4be['on'],_0x2670e0['KUNuT'])?_0x40f4be['on']:_0x606573['on'],_0x40f4be&&typeof _0x40f4be['facto'+'r']===_0x481b2b(0x6d5)+'r'?_0x40f4be['facto'+'r']:_0x606573['facto'+'r']);return;}if(_0x405be3!=='snaps'+_0x481b2b(0x27b))return;var _0xc79ba9=_0xfe0525(),_0x5d9083=_0x35234d(_0xc79ba9);if(!_0x4db906){_0x4db906=_0x5d9083,_0x374cd2=[],_0x2670e0[_0x481b2b(0x806)](_0x134791,_0x2670e0[_0x481b2b(0x80f)],{'report':_0x2670e0[_0x481b2b(0x494)](_0x2852ba)});return;}_0x374cd2=[];for(var _0x20c7b8 in _0x5d9083){if(_0x2670e0[_0x481b2b(0x461)](_0x2670e0[_0x481b2b(0x38e)],_0x481b2b(0x2d2)))_0x515db6['sp']['textC'+_0x481b2b(0x64b)+'t']=_0x24b52b['on']?'Speed'+_0x481b2b(0x4d9):_0x2670e0['eoiOx'],_0x3b5131['sp']['style']['backg'+_0x481b2b(0x512)]=_0x3aeb60['on']?_0x38daa4:_0x2670e0[_0x481b2b(0x4e2)],_0x3040af['sp'][_0x481b2b(0x82d)][_0x481b2b(0x4ba)]=_0x4c937b['on']?_0x2670e0[_0x481b2b(0x696)]:_0x481b2b(0x436)+'f5';else{var _0x461231=_0x4db906[_0x20c7b8],_0x24537e=_0x5d9083[_0x20c7b8];if(_0x461231!==_0x24537e)_0x374cd2['push'](_0x20c7b8+':\x20'+_0x461231+_0x481b2b(0x435)+_0x24537e);}}_0x4db906=_0x5d9083,_0x134791(_0x481b2b(0x7e4)+'t',{'report':_0x2852ba()});}}var _0x2625ee=null;function _0x230fd1(){var _0x15805a=_0x3e5c02,_0x3fe67e={'Kaafp':function(_0x2ace18,_0x2101a0){return _0x2ace18+_0x2101a0;},'zmbEb':'LmFae','Gttql':function(_0x5eb812,_0x1a814f,_0x411616){return _0x5eb812(_0x1a814f,_0x411616);},'KAPoD':function(_0x32fa84,_0x18dbd6){return _0x32fa84(_0x18dbd6);},'EikLg':function(_0x4c88c8,_0x4b8495){return _0x4c88c8<_0x4b8495;},'mCnzo':_0x2670e0['ikMRZ'],'Ndzxj':_0x2670e0[_0x15805a(0x19d)],'WlgNC':function(_0x5c6758,_0x2c929b){return _0x5c6758+_0x2c929b;},'bSJec':_0x15805a(0x340),'FRDoa':_0x2670e0[_0x15805a(0x19a)]};if(_0x2625ee)return _0x2625ee;try{if(!document[_0x15805a(0x82e)]||!document['body'][_0x15805a(0x766)+_0x15805a(0x1ee)+'d'])return null;if(!document['getEl'+_0x15805a(0x3ba)+_0x15805a(0x49f)](_0x15805a(0x389)+'a-sw-'+_0x15805a(0x5e1)+'ss')){var _0x16de0e=document[_0x15805a(0x2b6)+'eElem'+'ent'](_0x2670e0[_0x15805a(0x510)]);_0x16de0e['id']='sakur'+_0x15805a(0x29c)+_0x15805a(0x5e1)+'ss',_0x16de0e[_0x15805a(0x484)+_0x15805a(0x64b)+'t']=_0x15805a(0x3a1)+'ra-sw'+_0x15805a(0x4ef)+'all:i'+_0x15805a(0x563)+'l}',(document['head']||document[_0x15805a(0x1e1)+'entEl'+'ement'])[_0x15805a(0x766)+'dChil'+'d'](_0x16de0e);}var _0x1a25ec=document[_0x15805a(0x2b6)+_0x15805a(0x69c)+'ent'](_0x2670e0[_0x15805a(0x216)]);_0x1a25ec['id']='sakur'+'a-sw-'+'hud',_0x1a25ec['style']['cssTe'+'xt']=_0x2670e0['pTjkc'](_0x2670e0['zfAEl']('posit'+_0x15805a(0x7c3)+'ixed;'+_0x15805a(0x731)+_0x15805a(0x48c)+'ottom'+':8px;'+_0x15805a(0x463)+'ex:21'+_0x15805a(0x78a)+'647;d'+_0x15805a(0x527)+'y:fle'+_0x15805a(0x3e8)+'x-dir'+'ectio'+'n:col'+'umn;g'+_0x15805a(0x5d5)+'x;',_0x2670e0[_0x15805a(0x37f)]),_0x2670e0[_0x15805a(0x418)])+_0x2670e0[_0x15805a(0x732)];var _0x3bdd0e=_0x2670e0[_0x15805a(0x390)];_0x1a25ec[_0x15805a(0x81d)+'HTML']=_0x2670e0['zfAEl'](_0x2670e0[_0x15805a(0x5f1)](_0x2670e0['DZONS'](_0x2670e0[_0x15805a(0x1a1)](_0x2670e0[_0x15805a(0x642)](_0x2670e0[_0x15805a(0x288)](_0x15805a(0x199)+'data-'+'a=\x22ba'+_0x15805a(0x56b)+_0x15805a(0x60e)+'displ'+_0x15805a(0x62b)+_0x15805a(0x6b9)+_0x15805a(0x845)+';alig'+_0x15805a(0x187)+_0x15805a(0x3f0)+_0x15805a(0x5b6)+_0x15805a(0x63e)+'wrap:'+'wrap;'+'max-w'+'idth:'+_0x15805a(0x327)+';\x22>',_0x15805a(0x397)+_0x15805a(0x60e)+'color'+':')+_0xe12a9f+('\x22>sak'+_0x15805a(0x595)+'b>')+('<butt'+'on\x20da'+_0x15805a(0x217)+'\x22sp\x22\x20'+'style'+'=\x22bac'+_0x15805a(0x214)+'nd:tr'+'anspa'+_0x15805a(0x64c)+_0x15805a(0x559)+'r:1px'+_0x15805a(0x1aa)+'d\x20rgb'+_0x15805a(0x415)+_0x15805a(0x2f5)+_0x15805a(0x40f)+_0x15805a(0x4a3)),_0x15805a(0x4ba)+_0x15805a(0x39c)+_0x15805a(0x81a)+'order'+_0x15805a(0x320)+'us:6p'+'x;pad'+'ding:'+_0x15805a(0x44c)+_0x15805a(0x29f)+'rsor:'+_0x15805a(0x1f0)+_0x15805a(0x2bd)+'nt:in'+'herit'+_0x15805a(0x4a8)+'eed\x20o'+_0x15805a(0x73a)+'utton'+'>')+('<inpu'+'t\x20dat'+_0x15805a(0x7e3)+_0x15805a(0x266)+_0x15805a(0x525)+_0x15805a(0x764)+'\x22\x20min'+_0x15805a(0x869)+'max=\x22'+_0x15805a(0x7bf)+'ep=\x220'+'.5\x22\x20v'+'alue='+_0x15805a(0x75b)+_0x15805a(0x50b)+_0x15805a(0x629)+'h:92p'+'x;acc'+'ent-c'+_0x15805a(0x703))+_0xe12a9f+';\x22>',_0x15805a(0x4bd)+'\x20data'+_0x15805a(0x86f)+'v\x22\x20st'+_0x15805a(0x60e)+'color'+':#bda'+_0x15805a(0x34b)+'in-wi'+'dth:3'+_0x15805a(0x371)+_0x15805a(0x773)+_0x15805a(0x46a)+'n>'),_0x2670e0['IWlIC'])+(_0x15805a(0x4ba)+':#f7e'+'ef5;b'+'order'+_0x15805a(0x320)+_0x15805a(0x164)+_0x15805a(0x6b0)+'ding:'+_0x15805a(0x351)+'px;cu'+_0x15805a(0x2b3)+_0x15805a(0x1f0)+_0x15805a(0x2bd)+_0x15805a(0x2e9)+_0x15805a(0x634)+_0x15805a(0x3d2)+'P\x20on<'+_0x15805a(0x505)+_0x15805a(0x459)),'<butt'+_0x15805a(0x4f8)+'ta-a='+_0x15805a(0x815)+_0x15805a(0x7e9)+'le=\x22b'+'ackgr'+'ound:'+_0x15805a(0x69e)+_0x15805a(0x4dd)+'t;bor'+_0x15805a(0x6c3)+'px\x20so'+_0x15805a(0x66f)+_0x15805a(0x7d0)+_0x15805a(0x2e0)+_0x15805a(0x821)+',.45)'+';')+('color'+':#f7e'+_0x15805a(0x81a)+_0x15805a(0x6c4)+'-radi'+_0x15805a(0x164)+_0x15805a(0x6b0)+_0x15805a(0x30e)+_0x15805a(0x351)+_0x15805a(0x29f)+_0x15805a(0x2b3)+_0x15805a(0x1f0)+'er;fo'+'nt:in'+_0x15805a(0x634)+';\x22>Sn'+_0x15805a(0x7e7)+_0x15805a(0x442)+'>'),_0x2670e0[_0x15805a(0x223)])+('color'+':#f7e'+_0x15805a(0x81a)+_0x15805a(0x6c4)+'-radi'+_0x15805a(0x164)+'x;pad'+_0x15805a(0x30e)+_0x15805a(0x516)+_0x15805a(0x29f)+_0x15805a(0x2b3)+'point'+_0x15805a(0x2bd)+_0x15805a(0x2e9)+_0x15805a(0x634)+_0x15805a(0x1ad)+'/butt'+_0x15805a(0x459))+_0x2670e0['zuNeY']+(_0x15805a(0x199)+'data-'+_0x15805a(0x3b7)+_0x15805a(0x7e9)+_0x15805a(0x231)+_0x15805a(0x703)+_0x15805a(0x5a0)+_0x15805a(0x765)+_0x15805a(0x31c)+_0x15805a(0x225)+'0px;\x22'+'></di'+'v>')+(_0x15805a(0x199)+'data-'+'a=\x22st'+_0x15805a(0x6b6)+'yle=\x22'+'color'+_0x15805a(0x59a)+'a99;m'+_0x15805a(0x537)+_0x15805a(0x664)+_0x15805a(0x16e)+'\x22></d'+_0x15805a(0x56d)),_0x1a25ec[_0x15805a(0x81d)+_0x15805a(0x250)]=_0x3bdd0e;var _0x3ead9=function(_0x1b598c){var _0x38f2a6=_0x15805a;return _0x1a25ec[_0x38f2a6(0x4f2)+'Selec'+'tor'](_0x3fe67e[_0x38f2a6(0x18d)](_0x38f2a6(0x524)+'-a=\x22'+_0x1b598c,'\x22]'));},_0x2dc608=_0x3ead9('st'),_0x499180=_0x3ead9('st2'),_0x1b8588=_0x2670e0['BDiRP'](_0x3ead9,'sp'),_0x5f2ae4=_0x3ead9('fx'),_0x198fa3=_0x3ead9('fv'),_0x2f7cfe=_0x3ead9(_0x15805a(0x2f8));if(_0x1b8588)_0x1b8588['oncli'+'ck']=function(){var _0x42ce9b=_0x15805a,_0x18ca50={'kNNVY':function(_0x6d1cae,_0x5f3307){return _0x6d1cae(_0x5f3307);}};if(_0x3fe67e[_0x42ce9b(0x4f4)]==='JdRES'){if(_0x1c0524&&typeof _0x2dcd16['then']===_0x42ce9b(0x184)+_0x42ce9b(0x3c8))_0x3e16ad['then'](_0x4e6e37,function(){});else _0x18ca50['kNNVY'](_0x2a16bc,_0x31cab5);}else _0x3fe67e['Gttql'](_0x48618d,!_0x606573['on'],_0x606573['facto'+'r']);};if(_0x5f2ae4)_0x5f2ae4[_0x15805a(0x367)+'ut']=function(){var _0x452c51=_0x15805a;_0x48618d(_0x606573['on'],_0x2670e0[_0x452c51(0x45f)](parseFloat,_0x5f2ae4[_0x452c51(0x1bb)])||0x2639+-0x6f6+0x1f42*-0x1);};if(_0x3ead9(_0x15805a(0x376)))_0x3ead9(_0x2670e0[_0x15805a(0x3f6)])['oncli'+'ck']=function(){_0x3fe67e['KAPoD'](_0x12e73f,'snaps'+'hot');};var _0x50d5cd=_0x3ead9(_0x15805a(0x50a));if(_0x50d5cd)_0x50d5cd['oncli'+'ck']=function(){var _0x515f3a=_0x15805a;if(!_0x40773e['on'])_0x40773e['on']=!![],_0x40773e[_0x515f3a(0x5b9)]=![];else{if(!_0x40773e['boxes']){if(_0x515f3a(0x1e0)!==_0x515f3a(0x82b))_0x40773e['boxes']=!![];else{var _0x134ee2=_0x1af646['keys'](_0x46bcca);for(var _0x3a3ae3=0x6f*-0x29+-0x13ba+0x1*0x2581;_0x3fe67e['EikLg'](_0x3a3ae3,_0x134ee2[_0x515f3a(0x267)+'h'])&&_0x3a3ae3<0xf6c+0x337*0x2+-0xb*0x1c6;_0x3a3ae3++){var _0x299c7b=_0x221ad0[_0x134ee2[_0x3a3ae3]];if(_0x299c7b&&typeof _0x299c7b===_0x515f3a(0x64e)+'t'&&_0x299c7b[_0x515f3a(0x6ad)+'e']&&_0x299c7b[_0x515f3a(0x6ad)+'e'][_0x515f3a(0x7fd)+'8']&&_0x299c7b[_0x515f3a(0x6ad)+'e']['HEAPU'+'8']['buffe'+'r'])return _0x3b222a[_0x515f3a(0x855)+'e']=_0x3fe67e['Kaafp'](_0x3fe67e[_0x515f3a(0x364)],_0x134ee2[_0x3a3ae3])+_0x3fe67e['Ndzxj'],_0x299c7b;}}}else _0x40773e['on']=![];}_0x50d5cd[_0x515f3a(0x484)+'onten'+'t']=!_0x40773e['on']?_0x515f3a(0x278)+'ff':_0x40773e[_0x515f3a(0x5b9)]?_0x2670e0[_0x515f3a(0x45a)]:'ESP\x20m'+'ap',_0x50d5cd[_0x515f3a(0x82d)][_0x515f3a(0x21f)+_0x515f3a(0x512)]=_0x40773e['on']?_0xe12a9f:_0x2670e0['XyGDm'],_0x50d5cd[_0x515f3a(0x82d)][_0x515f3a(0x4ba)]=_0x40773e['on']?_0x515f3a(0x6a0)+'1b':_0x2670e0[_0x515f3a(0x6f3)];try{if(_0x2670e0[_0x515f3a(0x232)](_0x2670e0[_0x515f3a(0x782)],_0x515f3a(0x6f8))){var _0x65cf16=_0x265616();if(_0x65cf16&&_0x65cf16['el'])_0x65cf16['el'][_0x515f3a(0x82d)]['displ'+'ay']=_0x40773e['on']?'':'none';var _0x3b4e6e=_0x473554;if(_0x3b4e6e&&_0x3b4e6e['cv'])_0x3b4e6e['cv'][_0x515f3a(0x82d)][_0x515f3a(0x573)+'ay']=_0x40773e['on']&&_0x40773e['boxes']?'':_0x515f3a(0x340);}else _0x27215a[_0x3fe67e[_0x515f3a(0x24f)](_0x5cd8c6,_0x515f3a(0x328))+_0x4c66a3[_0x27d852]['o'][_0x515f3a(0x80d)+_0x515f3a(0x3a4)](0x5b1+0x1002+-0x15a3)]=_0x2fb558[_0x9cf8e6]['v'];}catch(_0x543a97){}};if(_0x3ead9('fold'))_0x2670e0['BDiRP'](_0x3ead9,_0x15805a(0x76b))['oncli'+'ck']=function(){var _0x12af1b=_0x15805a;if(!_0x2f7cfe)return;var _0x3a4d2e=_0x2f7cfe[_0x12af1b(0x82d)][_0x12af1b(0x573)+'ay']===_0x3fe67e['bSJec'];_0x2f7cfe[_0x12af1b(0x82d)][_0x12af1b(0x573)+'ay']=_0x3a4d2e?'':_0x3fe67e[_0x12af1b(0x3ad)],_0x3ead9(_0x3fe67e[_0x12af1b(0x658)])['textC'+'onten'+'t']=_0x3a4d2e?'-':'+';};return document['body'][_0x15805a(0x766)+_0x15805a(0x1ee)+'d'](_0x1a25ec),_0x2625ee={'el':_0x1a25ec,'st':_0x2dc608,'st2':_0x499180,'sp':_0x1b8588,'fx':_0x5f2ae4,'fv':_0x198fa3},_0x2625ee;}catch(_0x5201f8){return _0x2670e0['IYWqZ'](_0x2670e0['yGFmo'],'ZdKML')?(_0x1ae7d5[_0x15805a(0x855)+'e']=_0x15805a(0x7b8)+_0x15805a(0x5a5)+_0x15805a(0x517),_0x59defa):(console['warn']('%c[sa'+'kura]'+'\x20in-f'+_0x15805a(0x4a4)+'HUD\x20d'+'isabl'+'ed','color'+':'+_0xe12a9f,_0x5201f8),null);}}var _0x2c3729=-0x1c8b*0x1+-0x656*0x1+-0x27*-0xe5;function _0x48618d(_0x3100e9,_0x42ad2c){var _0x12af3f=_0x3e5c02,_0x5a3d41={'vvcLs':function(_0xcb5b56){return _0xcb5b56();},'RroUE':'sakur'+_0x12af3f(0x29c)+'v2-cs'+'s','xbdDE':_0x2670e0[_0x12af3f(0x5eb)]},_0x522783=_0x606573['on'];_0x606573['on']=!!_0x3100e9;_0x606573['on']&&!_0x522783&&(_0x42ad2c===undefined||_0x42ad2c===null||Number(_0x42ad2c)===0x1d6+0x914+-0x85*0x15)&&(_0x42ad2c=_0x2c3729);_0x606573['facto'+'r']=Math['min'](_0x606573[_0x12af3f(0x285)],Math[_0x12af3f(0x285)](_0x606573[_0x12af3f(0x597)],_0x2670e0['nRhKL'](Number,_0x42ad2c)||-0x1137*-0x2+0x217+-0x2484));if(!_0x606573['on'])_0x5ecf22={};var _0x264da1=_0x2670e0[_0x12af3f(0x25d)](_0x230fd1);if(_0x264da1){if(_0x2670e0['KXVbY'](_0x2670e0['oECfd'],'DROxY')){_0x264da1['sp']&&(_0x264da1['sp'][_0x12af3f(0x484)+'onten'+'t']=_0x606573['on']?'Speed'+_0x12af3f(0x4d9):_0x2670e0[_0x12af3f(0x7c0)],_0x264da1['sp']['style'][_0x12af3f(0x21f)+_0x12af3f(0x512)]=_0x606573['on']?_0xe12a9f:_0x2670e0['XyGDm'],_0x264da1['sp'][_0x12af3f(0x82d)][_0x12af3f(0x4ba)]=_0x606573['on']?_0x2670e0['zNNkj']:_0x2670e0[_0x12af3f(0x6f3)]);if(_0x264da1['fx'])_0x264da1['fx']['value']=String(_0x606573[_0x12af3f(0x523)+'r']);if(_0x264da1['fv'])_0x264da1['fv']['textC'+_0x12af3f(0x64b)+'t']=_0x2670e0[_0x12af3f(0x84a)](_0x606573[_0x12af3f(0x523)+'r']['toFix'+'ed'](0x3a*-0x59+-0x2429+0x7*0x80c),'x');}else{if(_0x5a3d41[_0x12af3f(0x19b)](_0x18fbab))return null;var _0x4512f5=_0x430dbd['getEl'+'ement'+_0x12af3f(0x49f)](_0x12af3f(0x389)+_0x12af3f(0x29c)+'v2');if(_0x4512f5)return _0x4512f5;if(!_0x54046a[_0x12af3f(0x82e)]||!_0x26fed2[_0x12af3f(0x82e)][_0x12af3f(0x766)+_0x12af3f(0x1ee)+'d'])return null;try{var _0x37d6d9=('4|3|1'+_0x12af3f(0x75a))['split']('|'),_0x50f0ed=-0x22a1+0x1fcf+0x2d2;while(!![]){switch(_0x37d6d9[_0x50f0ed++]){case'0':return _0x4512f5;case'1':_0x4512f5['id']='sakur'+_0x12af3f(0x29c)+'v2';continue;case'2':_0x182afb['body'][_0x12af3f(0x766)+'dChil'+'d'](_0x4512f5);continue;case'3':_0x4512f5=_0x83500b[_0x12af3f(0x2b6)+_0x12af3f(0x69c)+_0x12af3f(0x5c8)](_0x12af3f(0x44b));continue;case'4':if(!_0x42eb6b[_0x12af3f(0x2e2)+_0x12af3f(0x3ba)+_0x12af3f(0x49f)](_0x5a3d41['RroUE'])){var _0x1b9ef6=_0x485485['creat'+'eElem'+'ent'](_0x12af3f(0x82d));_0x1b9ef6['id']='sakur'+_0x12af3f(0x29c)+_0x12af3f(0x42d)+'s',_0x1b9ef6[_0x12af3f(0x484)+_0x12af3f(0x64b)+'t']=_0x5a3d41['xbdDE'],(_0x21aefc[_0x12af3f(0x7e6)]||_0x7f63b8['docum'+_0x12af3f(0x59b)+'ement'])[_0x12af3f(0x766)+_0x12af3f(0x1ee)+'d'](_0x1b9ef6);}continue;}break;}}catch(_0xe32b9d){return null;}}}}function _0x512c97(_0x552595){var _0x35d99f=_0x3e5c02,_0xabbf88=_0x230fd1();if(!_0xabbf88||!_0xabbf88['st'])return;try{var _0x33a1a2=Object['keys'](_0x552595&&_0x552595['insta'+_0x35d99f(0x61e)]||{})['lengt'+'h'],_0x18d479=_0x552595&&_0x552595[_0x35d99f(0x50a)]||null,_0x3ba3e1=_0x18d479?_0x18d479[_0x35d99f(0x6e5)+_0x35d99f(0x7df)]||-0x1477+0x1*0x139f+0xd8:-0x1855+0xbe*-0x1+0x1913,_0x9ea32f=_0x18d479?_0x18d479[_0x35d99f(0x28d)+'unt']||0x1644+0x96c*0x2+0x2*-0x148e:0x595*0x3+0x1411+-0x24d0,_0x186e9b=_0x323f88?_0x2670e0[_0x35d99f(0x718)](_0x2670e0[_0x35d99f(0x4d4)](_0x323f88['buffe'+'r'][_0x35d99f(0x7a3)+'ength'],-0x1*0x3631+0xc02db+-0x2*-0x219ab)['toFix'+'ed'](0x1*-0x1a7d+-0x13af+-0x18a*-0x1e),'MB'):'no-me'+'m',_0x352fdd=_0x2670e0[_0x35d99f(0x7f2)](_0x2670e0[_0x35d99f(0x429)](_0x2670e0[_0x35d99f(0x83b)]('v'+(_0x552595&&_0x552595[_0x35d99f(0x4bb)+'on']||_0x56a163),_0x2670e0[_0x35d99f(0x434)])+(_0x552595&&_0x552595['hooks'+_0x35d99f(0x4f0)+'ed']||-0x12a5+0x76f*-0x1+0x1a14)+'/'+(_0x552595&&_0x552595[_0x35d99f(0x4eb)+_0x35d99f(0x4ee)]||-0x1c*-0xb3+-0x1ff1+0xc5d)+(_0x35d99f(0x268)+'s\x20')+_0x33a1a2,'\x20\x20mem'+'\x20')+_0x186e9b,'\x20\x20wri'+_0x35d99f(0x2c3))+_0x23b76a;_0xabbf88['st'][_0x35d99f(0x484)+_0x35d99f(0x64b)+'t']=_0x352fdd;var _0x3b94de=_0xabbf88[_0x35d99f(0x2dc)];_0x3b94de&&(_0x3b94de[_0x35d99f(0x484)+'onten'+'t']=_0x3ba3e1>0x1*0x1867+0x1ae7+-0x334e?_0x2670e0[_0x35d99f(0x249)](_0x2670e0[_0x35d99f(0x181)](_0x35d99f(0x57f)+'RS\x20',_0x3ba3e1)+(_0x9ea32f?_0x2670e0[_0x35d99f(0x1b9)](_0x2670e0[_0x35d99f(0x429)](_0x35d99f(0x398),_0x9ea32f),_0x35d99f(0x539)):''),_0x18d479&&_0x18d479[_0x35d99f(0x68f)+'a']?_0x2670e0[_0x35d99f(0x5bc)]+_0x18d479[_0x35d99f(0x68f)+_0x35d99f(0x5c5)]:'\x20\x20cam'+'\x20-'):_0x2670e0['Qfreo'](_0x35d99f(0x61b)+_0x35d99f(0x4f1)+_0x35d99f(0x785)+_0x35d99f(0x587)+'y?)\x20\x20'+_0x35d99f(0x3e0),_0x18d479&&_0x18d479[_0x35d99f(0x68f)+'a']?_0x18d479[_0x35d99f(0x68f)+'aFrom']:'-'),_0x3b94de['style']['color']=_0x3ba3e1>-0xb*0x11f+0x8*0x1ff+-0x3a3?'#7ee0'+'a8':'#8d7a'+'99');}catch(_0x12e1f6){}}window[_0x3e5c02(0x72a)+'entLi'+_0x3e5c02(0x1a3)+'r']('keydo'+'wn',function(_0x45c4d1){var _0x4aea84=_0x3e5c02,_0x1d9927={'BwuJP':function(_0x4f7a18,_0x435516,_0x58197a){return _0x4f7a18(_0x435516,_0x58197a);}};if(!_0x45c4d1)return;try{if(_0x2670e0[_0x4aea84(0x5ca)](_0x45c4d1[_0x4aea84(0x684)],'F9')){_0x45c4d1[_0x4aea84(0x69b)+'ntDef'+_0x4aea84(0x43e)](),_0x2670e0['jOUzK'](_0x12e73f,_0x2670e0[_0x4aea84(0x71e)]);return;}if(_0x45c4d1[_0x4aea84(0x684)]==='F7'){if(_0x2670e0['ZRxCM'](_0x4aea84(0x498),'TZAeG')){_0x45c4d1[_0x4aea84(0x69b)+'ntDef'+_0x4aea84(0x43e)](),_0x2670e0[_0x4aea84(0x2c7)](_0x48618d,!_0x606573['on'],_0x606573['facto'+'r']);return;}else{_0x89ff7e['preve'+_0x4aea84(0x685)+_0x4aea84(0x43e)](),_0x1d9927[_0x4aea84(0x274)](_0x218766,!_0x3eb149['on'],_0x40bfa3[_0x4aea84(0x523)+'r']);return;}}if(_0x2670e0['Fviut'](_0x45c4d1[_0x4aea84(0x684)],'F8')){_0x45c4d1[_0x4aea84(0x69b)+'ntDef'+_0x4aea84(0x43e)](),_0x48618d(_0x606573['on'],_0x606573[_0x4aea84(0x523)+'r']+(0x223d+0x77e+-0x29bb*0x1+0.5));return;}if(_0x45c4d1[_0x4aea84(0x684)]==='F6'){if(_0x2670e0[_0x4aea84(0x70e)]!==_0x2670e0[_0x4aea84(0x70e)]){var _0x295f3f=_0x460f9f[_0x1ad9ba],_0x521748=_0x14b7d3[_0x33bb5b];if(_0x295f3f!==_0x521748)_0x133d1b[_0x4aea84(0x7c8)](_0x2670e0[_0x4aea84(0x4a7)](_0x3f413b+':\x20'+_0x295f3f+'\x20->\x20',_0x521748));}else{_0x45c4d1['preve'+_0x4aea84(0x685)+'ault'](),_0x48618d(_0x606573['on'],_0x2670e0[_0x4aea84(0x651)](_0x606573['facto'+'r'],0x247c+-0x2e*-0x2f+-0xefa*0x3+0.5));return;}}if(_0x2670e0['AHeFf'](_0x45c4d1[_0x4aea84(0x684)],'Brack'+_0x4aea84(0x786)+'ht')){if(_0x2670e0['IYWqZ'](_0x4aea84(0x6f6),_0x4aea84(0x5f3))){_0x45c4d1[_0x4aea84(0x69b)+'ntDef'+'ault'](),_0x536203[_0x4aea84(0x61c)]=Math[_0x4aea84(0x597)](-0x8cf*0x3+-0x1*0x51b+0x2014,_0x536203['fov']+(-0x1*-0x87d+0x1d07+-0x2582)),_0x56bbce();return;}else _0x42e868();}if(_0x45c4d1[_0x4aea84(0x684)]===_0x4aea84(0x4be)+_0x4aea84(0x6e7)+'t'){_0x45c4d1[_0x4aea84(0x69b)+_0x4aea84(0x685)+_0x4aea84(0x43e)](),_0x536203['fov']=Math['max'](-0x44f*0x1+0x1321+-0xeb4,_0x2670e0['tyhys'](_0x536203[_0x4aea84(0x61c)],-0x1459+0xf54+0xb*0x75)),_0x2670e0[_0x4aea84(0x4e1)](_0x56bbce);return;}}catch(_0x303b63){}},!![]);var _0x40773e={'on':!![],'span':0x50,'boxes':![]};function _0x334dc4(){var _0x3de1b9=_0x3e5c02,_0x1881f4={'AnaLJ':function(_0x41b0e7,_0x4f992d){return _0x41b0e7(_0x4f992d);}};if(_0x3de1b9(0x23b)!=='yRtMA'){var _0x31f00f=_0x4be505['Photo'+_0x3de1b9(0x575)+_0x3de1b9(0x1cb)+'nc']||{},_0x5dffbf=Object[_0x3de1b9(0x251)](_0x31f00f);for(var _0x18f284=-0xfe*-0x8+-0x1301+0xb11;_0x18f284<_0x5dffbf[_0x3de1b9(0x267)+'h'];_0x18f284++){var _0x21a73f=_0x31f00f[_0x5dffbf[_0x18f284]][_0x3de1b9(0x872)],_0x3986ea=_0x2670e0[_0x3de1b9(0x2c7)](_0x3f7cfa,_0x21a73f+(0x2*-0xfdb+-0x49*0x33+0x2e71),'u32');if(!_0x3986ea)continue;var _0x8dbdef=_0x43be7a[_0x3de1b9(0x245)+'Look']||[],_0x501dd6={'mouseLook':'0x'+_0x2670e0['bvCCr'](_0x3986ea,-0x2321+0x5*0x7bc+0x38b*-0x1)[_0x3de1b9(0x80d)+_0x3de1b9(0x3a4)](-0xdb5+0x3b6+0x19*0x67),'floats':{},'camera':null,'vec2':null};for(var _0x44ba18=-0x2e6*-0x2+0x507+0xa3*-0x11;_0x44ba18<_0x8dbdef[_0x3de1b9(0x267)+'h'];_0x44ba18++){if(_0x2670e0[_0x3de1b9(0x5ea)](_0x8dbdef[_0x44ba18][0x1e2*0x11+-0x26b3*0x1+0x6b2],_0x2670e0[_0x3de1b9(0x62a)]))continue;_0x501dd6['float'+'s'][_0x2670e0['fPpoV']('0x',_0x8dbdef[_0x44ba18][-0x1da1+0x138e+0xa13]['toStr'+_0x3de1b9(0x3a4)](0x20c3+-0xe*0x2bf+0x5bf))]=_0x3f7cfa(_0x3986ea+_0x8dbdef[_0x44ba18][0x1*0x578+-0x1*-0x193+-0x70b],_0x3de1b9(0x726));}var _0xd8c085=_0x3f7cfa(_0x3986ea+(0xec*0x27+-0x770*0x3+-0xd78),_0x2670e0[_0x3de1b9(0x4d3)]);if(_0xd8c085)_0x501dd6[_0x3de1b9(0x68f)+'a']='0x'+(_0xd8c085>>>-0x1a1a+0x922*0x4+0x537*-0x2)[_0x3de1b9(0x80d)+'ing'](-0x1499+0xee+0x13bb);var _0x3e4c82=_0x2670e0[_0x3de1b9(0x3eb)](_0x1ca74,_0x3986ea,-0x2a7*-0x5+0x61b+-0x2*0x98b,0x1*0xbec+0x1*-0x1d3b+-0xb*-0x193);if(_0x3e4c82)_0x501dd6['vec2']=_0x3e4c82;return _0x501dd6;}return null;}else try{_0x4faa78['setIt'+'em'](_0x338721,_0x1881f4[_0x3de1b9(0x2fc)](_0x20f3c3,_0x5b5b13['fov']));}catch(_0x4de9f5){}}var _0x2b83df='sakur'+_0x3e5c02(0x29c)+_0x3e5c02(0x61c),_0x536203={'pitch':null,'yaw':null,'pitchOff':0x0,'yawOff':0x0,'fov':0x5a,'known':![]};try{var _0x324aec=localStorage[_0x3e5c02(0x444)+'em'](_0x2b83df);if(_0x324aec)_0x536203['fov']=Math['min'](-0x30a+-0x1020+0x13b6,Math[_0x3e5c02(0x285)](-0x2513*-0x1+-0x105c+-0x1499,_0x2670e0[_0x3e5c02(0x7fe)](parseFloat,_0x324aec)||-0xf50+-0x2f*0x7c+0x266e));}catch(_0x31651e){}function _0x56bbce(){var _0x5188b8=_0x3e5c02;try{localStorage[_0x5188b8(0x59d)+'em'](_0x2b83df,String(_0x536203['fov']));}catch(_0x293fb3){}}function _0x27c82c(){var _0x3c9fd2=_0x3e5c02,_0x3f8c54={'MgpHP':function(_0x5b3953,_0x16bc2b){var _0xb3f578=_0x310c;return _0x2670e0[_0xb3f578(0x21c)](_0x5b3953,_0x16bc2b);},'jDvEN':_0x3c9fd2(0x419)+'rs\x20ar'+_0x3c9fd2(0x3e6)+_0x3c9fd2(0x17e)+'but\x20n'+'one\x20a'+_0x3c9fd2(0x631)+_0x3c9fd2(0x852)+_0x3c9fd2(0x166)+_0x3c9fd2(0x758)+_0x3c9fd2(0x58f)+'yet\x20-'+_0x3c9fd2(0x682)+'k\x20'};if(_0x2670e0[_0x3c9fd2(0x195)](_0x2670e0['brgEF'],'TTqWW')){var _0x102d85=_0x2670e0['LRwwy'][_0x3c9fd2(0x356)]('|'),_0x4298ed=-0x2*-0x4f3+0x1b*0x159+0x2b9*-0x11;while(!![]){switch(_0x102d85[_0x4298ed++]){case'0':if(!_0x1d4898||!_0x1d4898[_0x3c9fd2(0x28c)+'Look'])return null;continue;case'1':var _0x4791b4=_0x2670e0[_0x3c9fd2(0x1fb)](_0x3f7cfa,_0x2670e0[_0x3c9fd2(0x2a1)](_0x2a3571,-0x411+-0x9*0x2cf+0x244*0xd),_0x2670e0[_0x3c9fd2(0x62a)]);continue;case'2':var _0x3d4e9b=_0x2670e0['JdOwK'](_0x3f7cfa,_0x2a3571+(-0xb5f+0x96d+-0x57*-0x6),_0x2670e0[_0x3c9fd2(0x62a)]);continue;case'3':if(_0x2670e0[_0x3c9fd2(0x2ce)](typeof _0x3d4e9b,'numbe'+'r')||_0x2670e0[_0x3c9fd2(0x794)](typeof _0x4791b4,'numbe'+'r'))return null;continue;case'4':return{'pitch':_0x3d4e9b+_0x536203[_0x3c9fd2(0x4b2)+_0x3c9fd2(0x746)],'yaw':_0x4791b4+_0x536203[_0x3c9fd2(0x66a)+'f']};case'5':var _0x2a3571=parseInt(_0x1d4898[_0x3c9fd2(0x28c)+_0x3c9fd2(0x7a4)],-0x415*0x4+-0x1e3+-0x1*-0x1247);continue;case'6':var _0x1d4898=_0x334dc4();continue;}break;}}else _0x1b48a2[_0x3c9fd2(0x407)]=_0x3f8c54[_0x3c9fd2(0x4c0)](_0x3f8c54['jDvEN'],'isLoc'+_0x3c9fd2(0x6b5)+_0x3c9fd2(0x265)+_0x3c9fd2(0x28a)+_0x3c9fd2(0x679)+_0x3c9fd2(0x32e)+_0x3c9fd2(0x82c));}function _0x1e6a84(_0x579abd,_0x5adc00,_0x1f4bf9,_0x4be18f){var _0x34f1a7=_0x3e5c02;if(_0x2670e0[_0x34f1a7(0x688)](_0x2670e0[_0x34f1a7(0x543)],'zsSzU'))return _0x3d2434[_0x34f1a7(0x777)+'d']++,_0x56a470[_0x34f1a7(0x23d)+'rror']=_0x12ed93[_0x34f1a7(0x23d)+_0x34f1a7(0x72d)]||_0x2670e0[_0x34f1a7(0x5ec)](_0x342288,_0x248460&&_0xe1554b[_0x34f1a7(0x269)+'ge']||_0x1919be)[_0x34f1a7(0x65d)](0x1*-0xfe5+0x1*0xbbf+0x426,0x1*-0xf9a+0x3f*0x9e+-0x16d0),null;else{var _0x4c18a5=_0x27c82c();if(!_0x4c18a5)return null;var _0x22c078=_0x4c18a5[_0x34f1a7(0x4b2)]*Math['PI']/(-0x1238*0x1+-0x4f*0x5+0x1477),_0x2ae1c6=_0x2670e0['CSOFb'](_0x4c18a5['yaw'],Math['PI'])/(-0x1afa+-0x4*0x998+0x420e),_0x5e3f7f=Math['cos'](_0x22c078),_0x4ddbba=_0x2670e0['tPUog'](Math[_0x34f1a7(0x1c2)](_0x2ae1c6),_0x5e3f7f),_0x3611a4=-Math['sin'](_0x22c078),_0x5425b2=_0x2670e0['DGFeb'](Math['cos'](_0x2ae1c6),_0x5e3f7f),_0x296684=_0x5425b2,_0xef8d7e=-0x1c24+0x9f1+0x1233,_0x2407fc=-_0x4ddbba,_0xcf184e=_0x5adc00[0x2*-0xa61+-0x224e+-0x3710*-0x1]-_0x579abd[0x1a0f+0x14*-0xc7+-0x75*0x17],_0x2fc516=_0x2670e0[_0x34f1a7(0x5f0)](_0x5adc00[-0x7*0x166+0x1d2c+0x1361*-0x1],_0x579abd[0x1*0xbce+0x1b*0x166+-0x318f]),_0x1eafe6=_0x5adc00[-0x1*0x15a9+0x5d1*0x1+0xfda]-_0x579abd[0x875+-0x2014*-0x1+-0x2887],_0x4d5492=_0x2670e0[_0x34f1a7(0x847)](_0xcf184e*_0x4ddbba+_0x2670e0[_0x34f1a7(0x241)](_0x2fc516,_0x3611a4),_0x2670e0[_0x34f1a7(0x584)](_0x1eafe6,_0x5425b2));if(_0x2670e0[_0x34f1a7(0x372)](_0x4d5492,-0x2c*0x1+0x1dd2+0x45*-0x6e+0.05))return null;var _0x1de31c=_0x2670e0[_0x34f1a7(0x77c)](_0x2670e0[_0x34f1a7(0x288)](_0x2670e0[_0x34f1a7(0x7d5)](_0xcf184e,_0x296684),_0x2fc516*_0xef8d7e),_0x2670e0['FZbPE'](_0x1eafe6,_0x2407fc)),_0x2799e1=_0x2670e0['idxSB'](_0x2670e0['kIpRg'](_0xcf184e*_0x2670e0[_0x34f1a7(0x849)](_0xef8d7e*_0x5425b2,_0x2670e0[_0x34f1a7(0x3a2)](_0x2407fc,_0x3611a4)),_0x2fc516*(_0x2670e0[_0x34f1a7(0x778)](_0x2407fc,_0x4ddbba)-_0x296684*_0x5425b2)),_0x2670e0[_0x34f1a7(0x448)](_0x1eafe6,_0x2670e0['nZLQZ'](_0x2670e0['YhfkM'](_0x296684,_0x3611a4),_0xef8d7e*_0x4ddbba))),_0x3cc321=_0x2670e0[_0x34f1a7(0x4d4)](_0x1f4bf9,_0x4be18f),_0x629b5c=_0x536203[_0x34f1a7(0x61c)]*Math['PI']/(-0x9c7*0x1+-0x11*0x141+-0x4*-0x7f3),_0x4548dc=Math[_0x34f1a7(0x678)](_0x629b5c/(0x23f0+-0x156f+0x1*-0xe7f)),_0x3d4827=_0x1de31c/_0x4d5492/_0x2670e0[_0x34f1a7(0x17d)](_0x4548dc,_0x3cc321),_0x3f94d6=_0x2799e1/_0x4d5492/_0x4548dc;if(_0x2670e0[_0x34f1a7(0x659)](_0x3d4827,-(0x16c4+-0x7*0x18d+0x3*-0x3f8+0.6000000000000001))||_0x2670e0[_0x34f1a7(0x52a)](_0x3d4827,-0x1*-0x2223+-0xd2*-0x5+-0x263c+0.6000000000000001)||_0x3f94d6<-(-0x183f+0x4ca*0x6+-0x47c+0.6000000000000001)||_0x3f94d6>0x27*0xd6+-0xe73+-0x1226*0x1+0.6000000000000001)return null;return{'x':_0x2670e0[_0x34f1a7(0x1e8)](_0x2670e0[_0x34f1a7(0x3a7)](_0x3d4827*(0x67*0x1c+0x4b5+0x1*-0xff9+0.5),-0x2686+0x1a5+0x24e1+0.5),_0x1f4bf9),'y':(-0x18a7*-0x1+-0x13e+-0x1cd*0xd+0.5-_0x2670e0[_0x34f1a7(0x1bf)](_0x3f94d6,0xb1e*-0x1+-0x56d*0x3+-0x1b65*-0x1+0.5))*_0x4be18f,'z':_0x4d5492};}}function _0x5d019d(){var _0x2db1bd=_0x3e5c02,_0x6ed48b=(_0x2db1bd(0x779)+_0x2db1bd(0x3b3)+'3')[_0x2db1bd(0x356)]('|'),_0x1bf143=0x14b*-0x15+-0x89*-0x6+0x17f1;while(!![]){switch(_0x6ed48b[_0x1bf143++]){case'0':var _0xc6cc8b=_0x1ca74(_0xd49fd5['ptr'],0x1159*0x2+0xac4+0x2*-0x1549,0x49*0x2e+-0xa*0x125+-0x19*0x11);continue;case'1':if(!_0xd49fd5||!_0xd49fd5['ptr'])return null;continue;case'2':var _0x59411f=_0x1ca74(_0xd49fd5[_0x2db1bd(0x872)],0x28*-0xc9+0x149*-0x1+0x2349,0x1a94+0x3*0x7d3+-0x320a);continue;case'3':return{'ptr':_0xd49fd5[_0x2db1bd(0x872)],'feet':_0xc6cc8b,'eye':_0x59411f,'reach':Math[_0x2db1bd(0x734)](_0xc6cc8b[0x71c+-0x655*0x5+-0x4e9*-0x5]*_0xc6cc8b[0x18*0x52+-0x1fad+0x17fd]+_0x2670e0[_0x2db1bd(0x778)](_0xc6cc8b[-0x2b*-0x1d+-0x1308+0x1f*0x75],_0xc6cc8b[0x20be+-0x207d+-0x3f])),'pitch':_0x2670e0['InYhY'](_0x3f7cfa,_0x2670e0[_0x2db1bd(0x84b)](_0xd49fd5[_0x2db1bd(0x872)],-0x1344+0x1*-0x394+-0x4*-0x611),_0x2670e0['biRQU']),'yaw':_0x2670e0[_0x2db1bd(0x772)](_0x3f7cfa,_0xd49fd5[_0x2db1bd(0x872)]+(0x1f78+0x4*0x4ee+-0x31c0),'f32')};case'4':if(!_0xc6cc8b)return null;continue;case'5':var _0xd49fd5=_0x40b563['FPSco'+'ntrol'+'ler'];continue;}break;}}function _0x4a65c3(){var _0x556ecd=_0x3e5c02,_0x2ac89e=_0x5d019d(),_0x2f7d7a=[],_0x57bf1e=_0x4be505['Photo'+_0x556ecd(0x575)+_0x556ecd(0x1cb)+'nc']||{},_0x1b1bc5=Object[_0x556ecd(0x251)](_0x57bf1e);for(var _0x187cb9=0x3*0x5f2+0x4f1+-0x16c7;_0x187cb9<_0x1b1bc5[_0x556ecd(0x267)+'h']&&_0x187cb9<0x1*-0x10c+-0x1*0x22d5+0x2401;_0x187cb9++){var _0x31f5b1=_0x57bf1e[_0x1b1bc5[_0x187cb9]],_0x2aae23=_0x2670e0[_0x556ecd(0x1df)](_0x1ca74,_0x31f5b1['ptr'],-0x1*-0x247f+0xb5*-0x37+0x298,-0xb34*0x3+-0xe4d+0x4*0xbfb);if(!_0x2aae23||_0x2670e0[_0x556ecd(0x803)](_0x2aae23[0xc83+0x1dad+-0x24*0x12c],0x1152*-0x1+0x2d6*-0x1+-0x78*-0x2b)&&_0x2aae23[-0x2*-0xa0f+0x16bb+-0x2ad8]===-0x2*-0x1331+0x19b6+-0x4018&&_0x2aae23[-0x2*-0xa81+0x3c1+-0x18c1*0x1]===-0x1009+-0x734+-0x173d*-0x1)continue;var _0xa047e4={'ptr':_0x31f5b1[_0x556ecd(0x872)],'x':_0x2aae23[-0x55d*0x2+-0x22df+-0xf33*-0x3],'y':_0x2aae23[-0x798+-0x1e37+0x25d0],'z':_0x2aae23[0x3*0x62b+-0x2*0x728+0x165*-0x3],'team':_0x3f7cfa(_0x31f5b1[_0x556ecd(0x872)]+(0xc5b*-0x2+-0x1a3f+0x334d),_0x556ecd(0x666)),'localFlag':_0x3f7cfa(_0x31f5b1['ptr']+(0x22d3*0x1+0x1cd1+-0x178*0x2b),_0x556ecd(0x666))};if(_0x2ac89e){var _0x54ff8e=_0x2aae23[0x7c9+-0x2*0x3d+-0x74f]-_0x2ac89e['feet'][-0x1685+0x45*0x6b+-0x652],_0x41d45d=_0x2670e0[_0x556ecd(0x763)](_0x2aae23[0x6f0*0x1+0x1*0x67+-0x755],_0x2ac89e['feet'][-0x10b4+0x107*-0x21+0x329d]);_0xa047e4['d']=Math[_0x556ecd(0x734)](_0x54ff8e*_0x54ff8e+_0x2670e0[_0x556ecd(0x241)](_0x41d45d,_0x41d45d)),_0xa047e4[_0x556ecd(0x20b)+'ng']=_0x2670e0[_0x556ecd(0x4d4)](Math[_0x556ecd(0x668)](_0x54ff8e,_0x41d45d)*(-0xac+0x141*0x2+-0x122),Math['PI']);}_0x2f7d7a[_0x556ecd(0x7c8)](_0xa047e4);}return{'me':_0x2ac89e,'list':_0x2f7d7a};}var _0x57691b=null;function _0x265616(){var _0x2e2923=_0x3e5c02;if(_0x57691b)return _0x57691b;try{if('CqVhh'===_0x2e2923(0x710)){if(!document['body']||!document[_0x2e2923(0x82e)][_0x2e2923(0x766)+'dChil'+'d'])return null;var _0x3ebf19=document[_0x2e2923(0x2b6)+_0x2e2923(0x69c)+'ent'](_0x2e2923(0x44b));_0x3ebf19['id']=_0x2670e0['RwkzG'],_0x3ebf19['style']['cssTe'+'xt']=_0x2670e0['vcyIw'](_0x2e2923(0x5c0)+_0x2e2923(0x7c3)+_0x2e2923(0x275)+'right'+_0x2e2923(0x7f8)+_0x2e2923(0x542)+_0x2e2923(0x544)+'index'+':2147'+_0x2e2923(0x760)+'6;poi'+_0x2e2923(0x5d8)+_0x2e2923(0x613)+_0x2e2923(0x4b4)+'e;','backg'+'round'+_0x2e2923(0x385)+_0x2e2923(0x337)+_0x2e2923(0x1b6)+_0x2e2923(0x1cc)+'borde'+_0x2e2923(0x180)+'\x20soli'+'d\x20rgb'+_0x2e2923(0x415)+',143,'+'177,.'+_0x2e2923(0x74f)+'rder-'+_0x2e2923(0x71f)+'s:10p'+'x;')+(_0x2e2923(0x863)+_0x2e2923(0x76a)+_0x2e2923(0x83a)+_0x2e2923(0x23a)+'x/1.3'+_0x2e2923(0x230)+_0x2e2923(0x3a0)+'ace,C'+_0x2e2923(0x727)+'as,mo'+'nospa'+_0x2e2923(0x490)+_0x2e2923(0x63c)+'bda9c'+'9;'),_0x3ebf19[_0x2e2923(0x81d)+_0x2e2923(0x250)]=_0x2e2923(0x3ae)+_0x2e2923(0x3db)+'=\x22sak'+_0x2e2923(0x507)+_0x2e2923(0x3c9)+'\x22\x20wid'+'th=\x221'+'60\x22\x20h'+'eight'+_0x2e2923(0x350)+_0x2e2923(0x7e9)+_0x2e2923(0x4e6)+_0x2e2923(0x527)+_0x2e2923(0x5e2)+'ck\x22><'+_0x2e2923(0x441)+_0x2e2923(0x790)+('<div\x20'+'id=\x22s'+_0x2e2923(0x298)+_0x2e2923(0x4d7)+_0x2e2923(0x78e)+_0x2e2923(0x50b)+_0x2e2923(0x258)+'-alig'+'n:cen'+_0x2e2923(0x502)+'</div'+'>');var _0x380f39={'cv':{'getContext':function(){return null;}},'el':_0x3ebf19};document[_0x2e2923(0x82e)][_0x2e2923(0x766)+_0x2e2923(0x1ee)+'d'](_0x3ebf19),_0x57691b={'el':_0x3ebf19,'cv':_0x3ebf19[_0x2e2923(0x4f2)+'Selec'+_0x2e2923(0x7d6)](_0x2670e0['anKfJ']),'lg':_0x3ebf19[_0x2e2923(0x4f2)+_0x2e2923(0x572)+'tor'](_0x2e2923(0x3a1)+_0x2e2923(0x40b)+_0x2e2923(0x547))};if(!_0x57691b['cv']||!_0x57691b['cv']['getCo'+'ntext'])_0x57691b=_0x380f39;return _0x57691b;}else _0x12b8a6['lg'][_0x2e2923(0x484)+'onten'+'t']=_0x2670e0[_0x2e2923(0x76f)](_0x2670e0[_0x2e2923(0x5cf)](_0x2670e0['rbFQE'](_0x2670e0[_0x2e2923(0x1d5)](_0x2670e0[_0x2e2923(0x15b)],_0x161b4b),'\x20·\x20')+_0x27b312[_0x2e2923(0x512)](_0x4df869[_0x2e2923(0x382)])+'m',_0x47bc0e['boxes']?_0x2e2923(0x3c1)+'v\x20'+_0x3d2bc6[_0x2e2923(0x512)](_0x363620[_0x2e2923(0x61c)])+'°':''),_0x1d0659!==null?'\x20·\x20te'+'am'+_0x438459:'');}catch(_0x4e2c01){return null;}}var _0x473554=null;function _0x5c79eb(){var _0x2b23f3=_0x3e5c02;if(_0x2670e0[_0x2b23f3(0x6cb)](_0x2670e0[_0x2b23f3(0x5ab)],_0x2b23f3(0x22e))){if(_0x521965['paren'+'t']&&_0x4f6b81[_0x2b23f3(0x4dd)+'t']!==_0x457c31)_0x2d28cd['paren'+'t'][_0x2b23f3(0x531)+_0x2b23f3(0x1e9)+'e'](_0x3aaf2f,'*');}else{if(_0x473554)return _0x473554;try{if(_0x2670e0['urjsM']('CsxkT',_0x2b23f3(0x452))){var _0xfa677a=_0x4a91a0();if(_0xfa677a&&_0xfa677a['el'])_0xfa677a['el'][_0x2b23f3(0x82d)][_0x2b23f3(0x573)+'ay']=_0x585972['on']?'':'none';var _0x5534c4=_0x49297a;if(_0x5534c4&&_0x5534c4['cv'])_0x5534c4['cv'][_0x2b23f3(0x82d)][_0x2b23f3(0x573)+'ay']=_0x5d2141['on']&&_0x333c4c['boxes']?'':_0x2670e0['MrEdF'];}else{if(!document[_0x2b23f3(0x82e)]||!document[_0x2b23f3(0x82e)]['appen'+_0x2b23f3(0x1ee)+'d'])return null;var _0x522850=document['creat'+'eElem'+_0x2b23f3(0x5c8)]('canva'+'s');return _0x522850['id']=_0x2670e0[_0x2b23f3(0x6de)],_0x522850['style'][_0x2b23f3(0x5ba)+'xt']='posit'+_0x2b23f3(0x7c3)+_0x2b23f3(0x275)+'left:'+'0;top'+':0;z-'+_0x2b23f3(0x7a7)+':2147'+'48364'+_0x2b23f3(0x28b)+_0x2b23f3(0x5d8)+_0x2b23f3(0x613)+'s:non'+'e;',document[_0x2b23f3(0x82e)]['appen'+_0x2b23f3(0x1ee)+'d'](_0x522850),_0x473554={'cv':_0x522850},_0x473554;}}catch(_0x4fb63a){return null;}}}function _0x238b4a(_0x5e5ebd){var _0x20f081=_0x3e5c02,_0x110848={'ZcJVV':'0|3|4'+'|1|2','Sdvdc':_0x20f081(0x389)+_0x20f081(0x29c)+_0x20f081(0x42d)+'s'};if(_0x20f081(0x6b4)===_0x20f081(0x1a8)){var _0x19eeca=_0x110848['ZcJVV'][_0x20f081(0x356)]('|'),_0x136386=0x505+-0x1*0x252d+0x2028*0x1;while(!![]){switch(_0x19eeca[_0x136386++]){case'0':if(!_0x5e50bd[_0x20f081(0x2e2)+_0x20f081(0x3ba)+_0x20f081(0x49f)](_0x110848[_0x20f081(0x661)])){var _0x3b633b=_0x170b09[_0x20f081(0x2b6)+'eElem'+_0x20f081(0x5c8)]('style');_0x3b633b['id']=_0x110848[_0x20f081(0x661)],_0x3b633b['textC'+_0x20f081(0x64b)+'t']='#saku'+'ra-sw'+_0x20f081(0x671)+'ll:in'+'itial'+'}',(_0x25bc3a[_0x20f081(0x7e6)]||_0x5a23f9['docum'+'entEl'+'ement'])[_0x20f081(0x766)+'dChil'+'d'](_0x3b633b);}continue;case'1':_0x5c5702[_0x20f081(0x82e)][_0x20f081(0x766)+_0x20f081(0x1ee)+'d'](_0xdbef71);continue;case'2':return _0x10e5d8;case'3':_0x184327=_0x3288c7[_0x20f081(0x2b6)+'eElem'+'ent'](_0x20f081(0x44b));continue;case'4':_0x4dd599['id']='sakur'+'a-sw-'+'v2';continue;}break;}}else try{var _0xa3c392=Math[_0x20f081(0x285)](0x1*0x2407+0x25df+-0x49e5,window[_0x20f081(0x81d)+'Width']||document['docum'+'entEl'+_0x20f081(0x3ba)]['clien'+'tWidt'+'h']||-0x22c6+-0x1*-0x1e7+0x99*0x37),_0x1b2d0d=Math[_0x20f081(0x285)](0x34e*0x8+0x371*0x3+-0x24c2,window[_0x20f081(0x81d)+_0x20f081(0x541)+'t']||document[_0x20f081(0x1e1)+'entEl'+_0x20f081(0x3ba)][_0x20f081(0x36e)+_0x20f081(0x293)+'ht']||-0x1b0f+0x1*0x2398+-0x889);return(_0x2670e0['yqvgx'](_0x5e5ebd['cv']['width'],_0xa3c392)||_0x2670e0[_0x20f081(0x3b1)](_0x5e5ebd['cv'][_0x20f081(0x386)+'t'],_0x1b2d0d))&&(_0x5e5ebd['cv']['width']=_0xa3c392,_0x5e5ebd['cv'][_0x20f081(0x386)+'t']=_0x1b2d0d),{'w':_0xa3c392,'h':_0x1b2d0d};}catch(_0x4e6bbb){return{'w':0x0,'h':0x0};}}function _0x450c38(_0x142ef5){var _0x1ab2cb=_0x3e5c02,_0x41589d={'WsvIA':function(_0x426d52,_0x3f294a){return _0x2670e0['oiVyX'](_0x426d52,_0x3f294a);}},_0x57b948=_0x473554;if(!_0x57b948)return;var _0x346229=_0x57b948['cv']['getCo'+'ntext']&&_0x57b948['cv']['getCo'+_0x1ab2cb(0x3aa)]('2d');if(!_0x346229)return;var _0x33e17d=_0x238b4a(_0x57b948);_0x346229['clear'+'Rect'](-0x13c*0x1+-0x15ce+0x170a,-0x141*0x7+-0x1*0x15cd+0x1e94,_0x33e17d['w'],_0x33e17d['h']);if(!_0x40773e[_0x1ab2cb(0x5b9)]||!_0x142ef5||!_0x142ef5['me'])return;var _0x19f812=_0x142ef5['me'],_0x231f43=null,_0x48feb9=_0x4be505['Photo'+'nNetw'+_0x1ab2cb(0x1cb)+'nc']||{},_0x3769ff=Object['keys'](_0x48feb9);for(var _0x390c70=-0xb81*0x3+0x1fe9+0x29a;_0x390c70<_0x3769ff[_0x1ab2cb(0x267)+'h'];_0x390c70++){var _0x5c312c=_0x2670e0['ArVYw'](_0x1ca74,_0x48feb9[_0x3769ff[_0x390c70]]['ptr'],-0x1*0x2593+-0x2*-0xc9d+0x9*0x165,0x1090+0x16e7+0x13ba*-0x2);if(_0x5c312c&&_0x2670e0[_0x1ab2cb(0x716)](_0x5c312c[-0x156d*0x1+0x1*-0xc05+0x2172],-0xa67+-0x6c9+0x113*0x10)&&_0x5c312c[0x1*-0x857+0x49*0x5e+-0x22*0x8b]===-0x1447*0x1+0x1*-0xb6f+0x1fb6&&_0x2670e0[_0x1ab2cb(0x34a)](_0x5c312c[0x9aa+-0x1*0x1ba7+0x10f*0x11],0x292*-0x4+-0xc3e+0x1686)){_0x231f43=_0x2670e0['ydZYB'](_0x3f7cfa,_0x48feb9[_0x3769ff[_0x390c70]][_0x1ab2cb(0x872)]+(0x1b81+-0x7*0x58a+-0x3*-0x3df),_0x1ab2cb(0x666));break;}}for(var _0x2e47b4=0x26cb+0xaee*-0x2+-0x10ef;_0x2e47b4<_0x142ef5[_0x1ab2cb(0x443)][_0x1ab2cb(0x267)+'h'];_0x2e47b4++){if(_0x2670e0['aTwGS']==='HsLIX'){var _0x6ea0ed=_0x142ef5[_0x1ab2cb(0x443)][_0x2e47b4],_0x5537a1=_0x2670e0['XOmuh'](_0x231f43,null)&&_0x2670e0['ZyfeA'](_0x6ea0ed[_0x1ab2cb(0x52c)],_0x231f43),_0x30bf2b=_0x1e6a84(_0x19f812['eye'],[_0x6ea0ed['x'],_0x6ea0ed['y']-(-0x13c9+-0x187b+0x7*0x653),_0x6ea0ed['z']],_0x33e17d['w'],_0x33e17d['h']),_0x56ce26=_0x2670e0[_0x1ab2cb(0x77a)](_0x1e6a84,_0x19f812[_0x1ab2cb(0x820)],[_0x6ea0ed['x'],_0x2670e0[_0x1ab2cb(0x310)](_0x6ea0ed['y'],-0x2*0x3d2+0x64f+0x155*0x1+0.8),_0x6ea0ed['z']],_0x33e17d['w'],_0x33e17d['h']);if(_0x2670e0['XITyi'](!_0x30bf2b,!_0x56ce26))continue;var _0x2d908f=Math['min'](_0x30bf2b['x'],_0x56ce26['x']),_0x26f459=Math[_0x1ab2cb(0x285)](_0x30bf2b['x'],_0x56ce26['x']),_0x29ada8=Math[_0x1ab2cb(0x597)](_0x30bf2b['y'],_0x56ce26['y']),_0x41ffab=Math[_0x1ab2cb(0x285)](_0x30bf2b['y'],_0x56ce26['y']),_0x6e4050=Math[_0x1ab2cb(0x285)](0x1b*-0x72+-0x7*-0x43+0xa34,Math[_0x1ab2cb(0x597)](-0x1141+0x1ec7*0x1+-0x2*0x6a5,_0x2670e0['zwmUO'](_0x26f459,_0x2d908f))),_0x13785d=Math[_0x1ab2cb(0x285)](-0x10e7+-0xd6a+0x1*0x1e57,Math[_0x1ab2cb(0x597)](0x6*-0x3ef+-0x1*0x16c+0x1992,_0x2670e0['TDrsP'](_0x41ffab,_0x29ada8))),_0x3bcd67=_0x2670e0[_0x1ab2cb(0x711)](_0x2d908f+_0x26f459,-0xe5*-0x2+0x1bad+0x1*-0x1d75),_0x343d95=(_0x29ada8+_0x41ffab)/(-0x1e45+0x21ce+-0x81*0x7);_0x346229[_0x1ab2cb(0x26d)+_0x1ab2cb(0x4ad)+'e']=_0x5537a1?_0x1ab2cb(0x4e8)+'79,14'+'3,106'+_0x1ab2cb(0x58b):_0x1ab2cb(0x4e8)+_0x1ab2cb(0x202)+'10,11'+'6,.95'+')',_0x346229[_0x1ab2cb(0x41d)+'idth']=_0x5537a1?0xbd9+-0x873+-0x365*0x1:-0x1a*-0x14b+0xf8f+-0x29*0x133,_0x346229['strok'+_0x1ab2cb(0x735)](_0x3bcd67-_0x6e4050/(0x123*-0x1+0x20bd+-0xfcc*0x2),_0x343d95-_0x2670e0['VeGCe'](_0x13785d,-0x17f2+0x102b*-0x1+0x281f*0x1),_0x6e4050,_0x13785d);if(!_0x5537a1){if(_0x2670e0[_0x1ab2cb(0x571)]==='kTCWc')_0x346229[_0x1ab2cb(0x858)+'tyle']='rgba('+_0x1ab2cb(0x202)+_0x1ab2cb(0x29e)+_0x1ab2cb(0x7fb)+')',_0x346229[_0x1ab2cb(0x5e9)]=_0x2670e0[_0x1ab2cb(0x3b6)],_0x346229[_0x1ab2cb(0x6b8)+_0x1ab2cb(0x6e0)](Math['round'](_0x6ea0ed['d']||-0x163d+-0x2039+-0x1b3b*-0x2)+'m',_0x3bcd67-_0x2670e0[_0x1ab2cb(0x6a3)](_0x6e4050,0x585+0x7*0x43d+0x5dd*-0x6),_0x343d95-_0x13785d/(0x1*-0x1336+-0x21e*0x7+0x1105*0x2)-(-0x80e+0xb*-0xf8+0x12b9*0x1));else{var _0x111b14=new _0x55a34b(_0x2670e0[_0x1ab2cb(0x3f5)]);_0x111b14['onmes'+_0x1ab2cb(0x535)]=function(_0x5e5554){var _0x41d9c9=_0x1ab2cb,_0x23da9d=_0x5e5554[_0x41d9c9(0x430)];if(_0x23da9d&&_0x23da9d[_0x41d9c9(0x1b8)+'ura']===_0x4857ae&&_0x23da9d['kind']===_0x41d9c9(0x77d))_0x13df03(_0x23da9d[_0x41d9c9(0x77d)],_0x23da9d['arg']);};}}}else _0x34231f['warni'+_0x1ab2cb(0x53b)]['push'](_0x41589d[_0x1ab2cb(0x5ae)](_0x41589d[_0x1ab2cb(0x5ae)](_0x41589d[_0x1ab2cb(0x5ae)](_0x1ab2cb(0x196)+'resol'+_0x1ab2cb(0x6af),_0x2687c3['hooks'+'Resol'+_0x1ab2cb(0x515)])+_0x1ab2cb(0x393),_0x58e7c3['hooks'+_0x1ab2cb(0x4ee)]),_0x1ab2cb(0x6a2)+_0x1ab2cb(0x318)+'o\x20a\x20t'+_0x1ab2cb(0x174)+_0x1ab2cb(0x7a7)+_0x1ab2cb(0x694)+'appli'+'ed\x20no'+_0x1ab2cb(0x1a6)+_0x1ab2cb(0x528)+'gnatu'+_0x1ab2cb(0x3b5))+('(this'+_0x1ab2cb(0x751)+_0x1ab2cb(0x540)+_0x1ab2cb(0x422)+_0x1ab2cb(0x7f3)+_0x1ab2cb(0x4c4)+'es\x20no'+_0x1ab2cb(0x4fa)+_0x1ab2cb(0x4fd)+'is\x20bu'+_0x1ab2cb(0x555)));}}function _0x233e49(){var _0x5d9f05=_0x3e5c02;if(_0x2670e0['Nqbnm'](_0x2670e0[_0x5d9f05(0x34f)],_0x5d9f05(0x868))){var _0x157279=_0x265616();if(!_0x157279||!_0x157279['cv'])return;try{var _0x27e49e=_0x157279['cv']['getCo'+_0x5d9f05(0x3aa)]&&_0x157279['cv'][_0x5d9f05(0x583)+_0x5d9f05(0x3aa)]('2d');if(!_0x27e49e)return;var _0x433379=_0x157279['cv']['width'],_0xe49078=_0x433379/(-0x13f+-0x240f+-0xc70*-0x3),_0x255f5b=_0x4a65c3(),_0x365ec2=_0x255f5b['me'];_0x27e49e[_0x5d9f05(0x1bd)+_0x5d9f05(0x551)](-0x1747+-0x1271+0x164*0x1e,0x1561+0x2b*0xa7+-0x316e,_0x433379,_0x433379),_0x27e49e[_0x5d9f05(0x26d)+'eStyl'+'e']=_0x5d9f05(0x4e8)+'255,1'+_0x5d9f05(0x3b8)+'7,.16'+')',_0x27e49e['lineW'+'idth']=-0x566+-0x91d+0xe84;for(var _0x477167=-0x24c+0x29*-0x3b+-0x8*-0x178;_0x2670e0['igBKo'](_0x477167,0x9*0x3d2+-0x1763*0x1+0x1*-0xafc);_0x477167++){_0x27e49e['begin'+'Path'](),_0x27e49e[_0x5d9f05(0x44a)](_0xe49078,_0xe49078,_0x2670e0['LITSu'](_0xe49078-(0x1f15+0x2195+0x296*-0x19),_0x477167)/(0x22e*0x2+0x255c+-0xde7*0x3),0x1*-0x17e7+-0x147*0x1+0x192e,_0x2670e0['YhfkM'](Math['PI'],-0x76*0xb+-0x1979+-0x2c7*-0xb)),_0x27e49e['strok'+'e']();}_0x27e49e[_0x5d9f05(0x582)+_0x5d9f05(0x77b)](),_0x27e49e[_0x5d9f05(0x33b)+'o'](-0x5ba*-0x3+-0x12e+0x6*-0x2aa,_0xe49078),_0x27e49e['lineT'+'o'](_0x433379-(0xef4+0x1307+-0x21f7),_0xe49078),_0x27e49e[_0x5d9f05(0x33b)+'o'](_0xe49078,0x7f6+-0x1c39+0xb3*0x1d),_0x27e49e['lineT'+'o'](_0xe49078,_0x433379-(-0x23*0x55+0xc5*-0x1+0x31a*0x4)),_0x27e49e['strok'+'e']();if(!_0x365ec2){if(_0x2670e0[_0x5d9f05(0x770)]('IncEr',_0x5d9f05(0x35c)))return{'version':_0x4123ad,'when':new _0xda15ce()['toISO'+_0x5d9f05(0x308)+'g'](),'elapsedMs':_0x27cf4a[_0x5d9f05(0x31d)]()-_0x1c110e,'host':_0x44be2f,'uwmk':!!(_0x14d4e1[_0x5d9f05(0x330)+'WebMo'+_0x5d9f05(0x817)]&&_0x40ef35[_0x5d9f05(0x330)+_0x5d9f05(0x561)+_0x5d9f05(0x817)]['Runti'+'me']),'il2CppContext':![],'arm':_0x91012b,'hooksTotal':_0x18267e[_0x5d9f05(0x267)+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':_0x214dd4(_0x2a0dae&&_0x294209[_0x5d9f05(0x269)+'ge']||_0x2f2b03)};else{if(_0x157279['lg'])_0x157279['lg'][_0x5d9f05(0x484)+_0x5d9f05(0x64b)+'t']=_0x5d9f05(0x70d)+_0x5d9f05(0x1c1)+'layer'+_0x5d9f05(0x63f);return;}}var _0x1cdea2=_0x2670e0[_0x5d9f05(0x35a)](_0xe49078-(0xd*0x1f1+0xdb0+-0x1*0x26e7),_0x40773e['span']),_0x2f0277=null,_0x5c9354=_0x4be505[_0x5d9f05(0x500)+_0x5d9f05(0x575)+_0x5d9f05(0x1cb)+'nc']||{},_0x589023=Object['keys'](_0x5c9354);for(var _0x263dbd=0x2*0x43a+0x1*0x257+-0x9*0x133;_0x263dbd<_0x589023[_0x5d9f05(0x267)+'h'];_0x263dbd++){var _0xc90bc2=_0x2670e0[_0x5d9f05(0x7c9)](_0x1ca74,_0x5c9354[_0x589023[_0x263dbd]][_0x5d9f05(0x872)],-0x1*0x1b9d+0x19a0+0x33*0xb,-0xafc+0x2694+-0x1b95);if(_0xc90bc2&&_0x2670e0[_0x5d9f05(0x451)](_0xc90bc2[-0x768+-0x1*-0x237a+0xe09*-0x2],0x19c0+-0x520+-0x2*0xa50)&&_0x2670e0['yScXl'](_0xc90bc2[-0x2*0xc78+-0x1d9+-0x1*-0x1aca],0x107e+-0x223*-0xc+-0x2a22)&&_0xc90bc2[-0x11*-0xeb+-0x1626*0x1+0x2b*0x27]===0x1*0x12e9+-0x1b*0x2c+0xe45*-0x1){if(_0x2670e0[_0x5d9f05(0x45e)](_0x5d9f05(0x4c7),_0x2670e0[_0x5d9f05(0x3b9)]))return _0x4cd0ad[-0x2af+0x487*0x4+0xf6d*-0x1]=_0x612669|-0x89c+0x20db+-0x183f,_0x1e6b3f[-0x104b+0x1*-0x1966+0x29b1];else{_0x2f0277=_0x3f7cfa(_0x2670e0[_0x5d9f05(0x1a4)](_0x5c9354[_0x589023[_0x263dbd]][_0x5d9f05(0x872)],0x256d*0x1+-0xf28+-0x15ed),_0x5d9f05(0x666));break;}}}var _0x2e4201=-0x1a8e+-0xed8+0x2966;for(var _0x7a1118=-0x112e+-0x23d9+-0x3507*-0x1;_0x7a1118<_0x255f5b[_0x5d9f05(0x443)][_0x5d9f05(0x267)+'h'];_0x7a1118++){var _0x47e2b4=_0x255f5b[_0x5d9f05(0x443)][_0x7a1118],_0x52ed3b=(_0x47e2b4['x']-_0x365ec2['feet'][0x175f+0x26e8+-0x3e47])*_0x1cdea2,_0x521c0b=_0x2670e0[_0x5d9f05(0x3dc)](_0x47e2b4['z'],_0x365ec2[_0x5d9f05(0x3c0)][-0x1*-0xc31+0xeb3+0x6*-0x47b])*_0x1cdea2,_0x33721e=Math[_0x5d9f05(0x734)](_0x52ed3b*_0x52ed3b+_0x2670e0[_0x5d9f05(0x1e8)](_0x521c0b,_0x521c0b)),_0x18495e=_0xe49078,_0x4747be=_0xe49078;_0x2670e0[_0x5d9f05(0x31b)](_0x33721e,_0xe49078-(0x14fb+-0x255+-0x4*0x4a8))?(_0x18495e=_0xe49078+_0x2670e0[_0x5d9f05(0x35a)](_0x52ed3b,_0x33721e)*_0x2670e0[_0x5d9f05(0x511)](_0xe49078,0x13*0x128+-0x26cc+0x10da),_0x4747be=_0xe49078+_0x2670e0[_0x5d9f05(0x49e)](_0x521c0b,_0x33721e)*(_0xe49078-(0x1ed0*-0x1+0x5b5*-0x1+0x248b))):(_0x18495e=_0x2670e0['QCQhz'](_0xe49078,_0x52ed3b),_0x4747be=_0xe49078+_0x521c0b);var _0x57cf30=_0x2f0277!==null&&_0x2670e0['Nqbnm'](_0x47e2b4['team'],_0x2f0277);_0x27e49e[_0x5d9f05(0x858)+_0x5d9f05(0x2ee)]=_0x57cf30?_0x5d9f05(0x756)+'6a':'#ff6e'+'74',_0x27e49e[_0x5d9f05(0x582)+_0x5d9f05(0x77b)](),_0x27e49e['arc'](_0x18495e,_0x4747be,_0x57cf30?0xbe0+-0x1d8d+-0x3*-0x5e5:0x18db+-0x1b4a+-0x272*-0x1+0.20000000000000018,0x16e5+-0x1e47+0x762,_0x2670e0[_0x5d9f05(0x709)](Math['PI'],-0x1a71+-0x3f0+-0x1*-0x1e63)),_0x27e49e[_0x5d9f05(0x365)](),_0x2e4201++;}_0x27e49e['fillS'+'tyle']='#7ee0'+'a8',_0x27e49e[_0x5d9f05(0x582)+'Path'](),_0x27e49e['arc'](_0xe49078,_0xe49078,-0x883*-0x3+0xb61*0x2+0x6*-0x80c,-0x1eb3+0x269f*0x1+-0x7ec,Math['PI']*(-0x1*-0x9f7+-0x2667+0x1c72)),_0x27e49e['fill'](),_0x157279['lg']&&(_0x157279['lg'][_0x5d9f05(0x484)+_0x5d9f05(0x64b)+'t']=_0x2670e0[_0x5d9f05(0x847)](_0x2670e0[_0x5d9f05(0x172)](_0x2670e0[_0x5d9f05(0x17b)]('esp\x20'+_0x2e4201,_0x5d9f05(0x621)),Math[_0x5d9f05(0x512)](_0x40773e['span']))+'m',_0x40773e['boxes']?_0x2670e0['RJbOk'](_0x2670e0['CRimt'](_0x5d9f05(0x3c1)+'v\x20',Math['round'](_0x536203['fov'])),'°'):'')+(_0x2f0277!==null?_0x2670e0[_0x5d9f05(0x549)](_0x5d9f05(0x69f)+'am',_0x2f0277):''));}catch(_0x312ea7){}}else _0x356a6b(!![]);}function _0x4dfc87(){var _0x30ada4=_0x3e5c02,_0x199089={'bUmHi':'funct'+_0x30ada4(0x3c8)};if(!_0x40773e['on']){setTimeout(_0x4dfc87,0xd92+-0x246*-0x9+-0x2014);return;}_0x265616();if(_0x40773e[_0x30ada4(0x5b9)])_0x5c79eb();var _0x2d114c=null;try{if(_0x2670e0['tZCro'](_0x30ada4(0x1ca),_0x2670e0['vIDlV'])){var _0x58fdaf=_0x434514[_0x30ada4(0x7cf)+_0x30ada4(0x7f6)]({'typeName':_0x320697['type'],'methodName':_0x2670e0[_0x30ada4(0x25b)],'params':[_0x2670e0[_0x30ada4(0x46d)],_0x2670e0['ywDOi']],'returnType':_0x332c68},_0x446083(_0x5752a0[_0x30ada4(0x1fd)],_0x2a6cb9[_0x30ada4(0x345)],_0x17939d['many']));_0x3270c[_0x30ada4(0x7c8)]({'type':_0x5d26ec['type'],'hook':_0x58fdaf,'keep':_0xe5475a[_0x30ada4(0x345)]});}else _0x2d114c=_0x2670e0[_0x30ada4(0x346)](_0x4a65c3);}catch(_0x5bc658){}try{if(_0x2670e0['xSIsE']('lQyoX',_0x2670e0[_0x30ada4(0x560)]))return![];else _0x233e49();}catch(_0x505eb8){}try{if(_0x2670e0['HVUxc']('wNyxg',_0x2670e0[_0x30ada4(0x4aa)])){var _0x27fe7d=_0x427611[_0x30ada4(0x6f9)+_0x30ada4(0x21d)];if(typeof _0x27fe7d[_0x30ada4(0x6d9)+'veGam'+'e']===_0x199089[_0x30ada4(0x1ed)]){var _0x550d18=_0x27fe7d[_0x30ada4(0x6d9)+_0x30ada4(0x453)+'e']();if(_0x550d18)return _0x4d5d97['sourc'+'e']=_0x30ada4(0x838)+_0x30ada4(0x1ea)+_0x30ada4(0x408)+_0x30ada4(0x69d)+_0x30ada4(0x6b7)+_0x30ada4(0x58a),_0x550d18;}if(_0x27fe7d[_0x30ada4(0x21b)])return _0x8675a3[_0x30ada4(0x855)+'e']=_0x30ada4(0x838)+_0x30ada4(0x1ea)+_0x30ada4(0x408)+_0x30ada4(0x4b6)+'e',_0x27fe7d['_game'];}else _0x450c38(_0x2d114c);}catch(_0x4e462a){}_0x2670e0['wawuk'](setTimeout,_0x4dfc87,-0x5a9+-0x1*-0xf7f+-0x2*0x4d2);}function _0x2852ba(){var _0x121aaf=_0x3e5c02,_0x3a1a2f={'jicup':_0x2670e0[_0x121aaf(0x1b4)],'JyOXz':_0x121aaf(0x808)+'74','fLXGK':function(_0x511111,_0x2768f1){return _0x511111===_0x2768f1;},'Dlugx':function(_0x5483a5,_0x16e1ba){return _0x5483a5+_0x16e1ba;},'rrdcm':_0x2670e0['eEIPx'],'LOCRh':_0x121aaf(0x4a9),'mJtSX':_0x2670e0[_0x121aaf(0x7d8)]},_0x3e5283=window['Unity'+'WebMo'+_0x121aaf(0x817)]&&window[_0x121aaf(0x330)+'WebMo'+_0x121aaf(0x817)]['Runti'+'me']||null,_0x55c851=_0x3e5283&&_0x3e5283[_0x121aaf(0x4c9)+_0x121aaf(0x208)+_0x121aaf(0x6e0)],_0x55c8fa=_0x55c851&&_0x55c851[_0x121aaf(0x548)+_0x121aaf(0x7ef)],_0x1ccc5f={},_0x30e1cf=[];for(var _0x3ba3f2 in _0x40b563){if(_0x2670e0[_0x121aaf(0x4fe)]===_0x121aaf(0x229)){_0x1ccc5f[_0x3ba3f2]='0x'+_0x40b563[_0x3ba3f2][_0x121aaf(0x872)]['toStr'+'ing'](0x781+0x345+0x55b*-0x2);if(_0x40b563[_0x3ba3f2][_0x121aaf(0x477)+'ced'])_0x30e1cf['push'](_0x3ba3f2);}else{var _0x32ae8e=_0x2670e0[_0x121aaf(0x5e7)][_0x121aaf(0x356)]('|'),_0x44c863=-0x26c7+0x2*-0x643+0x334d;while(!![]){switch(_0x32ae8e[_0x44c863++]){case'0':if(!_0x4e2b4b){_0x90f94a=_0x5adeb3,_0x290376=[],_0x2670e0[_0x121aaf(0x1b3)](_0x22967c,_0x121aaf(0x7e4)+'t',{'report':_0x2670e0[_0x121aaf(0x4c2)](_0x494fe1)});return;}continue;case'1':var _0xba8375=_0x3e6cc5();continue;case'2':var _0x5adeb3=_0x2670e0[_0x121aaf(0x45f)](_0x33ef07,_0xba8375);continue;case'3':_0x355dbe(_0x2670e0[_0x121aaf(0x80f)],{'report':_0x4a3a9d()});continue;case'4':if(_0x1e5671==='speed'){_0x4ad23e(_0x3dd5aa&&_0x2670e0['vyVTL'](typeof _0x1c1a2e['on'],'boole'+'an')?_0x1154b4['on']:_0x2aae7e['on'],_0x53a5ee&&_0x2670e0[_0x121aaf(0x803)](typeof _0x377677[_0x121aaf(0x523)+'r'],_0x2670e0[_0x121aaf(0x28f)])?_0x2aa13c[_0x121aaf(0x523)+'r']:_0x13e078['facto'+'r']);return;}continue;case'5':_0x1261f2=[];continue;case'6':_0x9b4251=_0x5adeb3;continue;case'7':if(_0x2670e0[_0x121aaf(0x235)](_0x7e713e,_0x121aaf(0x7bc)+'hot'))return;continue;case'8':for(var _0x476d27 in _0x5adeb3){var _0xf8921b=_0x3f8752[_0x476d27],_0x4fbe31=_0x5adeb3[_0x476d27];if(_0xf8921b!==_0x4fbe31)_0x2fab77[_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x61d)](_0x2670e0[_0x121aaf(0x3d9)](_0x476d27+':\x20'+_0xf8921b,_0x2670e0[_0x121aaf(0x6c1)]),_0x4fbe31));}continue;}break;}}}var _0x54fb78={};for(var _0x1a4916 in _0x40b563)_0x54fb78[_0x1a4916]=_0x2670e0[_0x121aaf(0x6dd)](_0x346d76,_0x40b563[_0x1a4916]['ptr']);var _0x2deaaf={},_0x1fdceb=null;try{if(_0x2670e0[_0x121aaf(0x197)](_0x2670e0['QYgLZ'],'QuPxk')){var _0x40db7e=_0x25abb9[_0x121aaf(0x2b6)+_0x121aaf(0x69c)+_0x121aaf(0x5c8)](_0x121aaf(0x82d));_0x40db7e['id']=_0x2670e0[_0x121aaf(0x246)],_0x40db7e['textC'+_0x121aaf(0x64b)+'t']='#saku'+_0x121aaf(0x304)+'-v2{a'+_0x121aaf(0x22f)+_0x121aaf(0x6fb)+'}',(_0x45bc50[_0x121aaf(0x7e6)]||_0x5264ea['docum'+_0x121aaf(0x59b)+_0x121aaf(0x3ba)])[_0x121aaf(0x766)+'dChil'+'d'](_0x40db7e);}else _0x2deaaf=_0xfe0525();}catch(_0x4017f9){if(_0x2670e0[_0x121aaf(0x451)]('iBbeo',_0x2670e0[_0x121aaf(0x171)])){var _0x112cd8=_0x3a1a2f['jicup']['split']('|'),_0x8e38e7=-0x2446*-0x1+0x1cb2+0x108*-0x3f;while(!![]){switch(_0x112cd8[_0x8e38e7++]){case'0':_0x36cfe8['style']['color']=_0x1d1b69===_0x5f404a?_0x381462:_0x3a1a2f[_0x121aaf(0x4e3)];continue;case'1':var _0x5f404a=_0xa37df0;continue;case'2':_0xf130ce[_0x121aaf(0x484)+'onten'+'t']='v'+(_0x2b21ef['versi'+'on']||'?');continue;case'3':var _0x1d1b69=_0x146ac6[_0x121aaf(0x4bb)+'on']||'';continue;case'4':_0x5232d9['style'][_0x121aaf(0x559)+_0x121aaf(0x579)+'r']=_0x3a1a2f[_0x121aaf(0x721)](_0x1d1b69,_0x5f404a)?_0x121aaf(0x4e8)+'255,1'+_0x121aaf(0x3b8)+_0x121aaf(0x3df)+')':'#ff6e'+'74';continue;}break;}}else _0x1fdceb=String(_0x4017f9&&_0x4017f9['messa'+'ge']||_0x4017f9);}var _0x4d1ea9={'version':_0x56a163,'when':new Date()[_0x121aaf(0x468)+'Strin'+'g'](),'elapsedMs':Date[_0x121aaf(0x31d)]()-_0x448406,'frame':location[_0x121aaf(0x40d)][_0x121aaf(0x65d)](0x1*-0x2263+0x9*-0x3f9+0x4624,-0xf*0x1b3+-0xc90+-0x207*-0x13),'host':_0x3feca0,'frameRole':_0x9f8930,'uwmk':!!_0x3e5283,'il2CppContext':!!_0x55c851,'typeCount':_0x55c8fa?Object[_0x121aaf(0x251)](_0x55c8fa)[_0x121aaf(0x267)+'h']:null,'arm':_0x383d6e,'assemblies':_0x4cbe57,'hooksTotal':_0x1c14e7['lengt'+'h'],'hooksApplied':_0x2f3a87(),'hooksResolved':_0x2798a0(),'hooksRegisteredAtArm':_0x383d6e[_0x121aaf(0x4eb)+_0x121aaf(0x420)+'tered']||-0x3b1+0x1487+0x1*-0x10d6,'hookErrors':_0x272b92[_0x121aaf(0x65d)](-0x315*-0x2+0x23db+0x1f*-0x15b,-0xe2*-0x13+-0x1dcd*0x1+0xd0f),'instances':_0x1ccc5f,'classNames':_0x54fb78,'instancesReplaced':_0x30e1cf,'hookFireProof':_0x423699,'survey':_0x2deaaf,'actkKeys':_0x45303f,'surveyRows':Object['keys'](_0x2deaaf)['reduc'+'e'](function(_0x728ce9,_0x5cc691){var _0x4f08a8=_0x121aaf,_0x3e6ed1={'GHTpr':function(_0x55b726,_0x881a82,_0x55cd02){return _0x55b726(_0x881a82,_0x55cd02);}};if(_0x4f08a8(0x504)===_0x2670e0['LCyDl']){_0x3e6ed1[_0x4f08a8(0x762)](_0xae0763,_0x32240b,-0x7e7+0xa2*0x29+0x1*-0x1017);return;}else return _0x728ce9+_0x2deaaf[_0x5cc691]['lengt'+'h'];},-0x1c01+0x11f*0x1b+-0x244),'reads':{'ok':_0x166ac7['ok'],'failed':_0x166ac7[_0x121aaf(0x777)+'d'],'lastError':_0x166ac7[_0x121aaf(0x23d)+_0x121aaf(0x72d)],'source':_0x166ac7[_0x121aaf(0x855)+'e']},'identity':_0x462ea8(),'globals':_0x2670e0[_0x121aaf(0x406)](_0x97ba02),'wasmMemory':{'captured':!!_0x323f88,'atMs':_0x1005b6,'bytes':(function(){var _0x39eee2=_0x121aaf;try{if(_0x3a1a2f[_0x39eee2(0x357)]!==_0x3a1a2f['LOCRh'])return _0x323f88&&_0x323f88['buffe'+'r']?_0x323f88['buffe'+'r'][_0x39eee2(0x7a3)+_0x39eee2(0x479)]:-0xb9+-0x137c+0x1435;else _0x2cde1a(_0x2e26ba);}catch(_0x52c5f6){if(_0x39eee2(0x715)===_0x3a1a2f['mJtSX']){_0x364f5e[_0x5bf57d]=_0x3a1a2f[_0x39eee2(0x6d0)]('0x',_0x5022a4[_0x48ccf5][_0x39eee2(0x872)]['toStr'+_0x39eee2(0x3a4)](-0x493*-0x3+0x25a2+-0x334b));if(_0x7ac1ab[_0x14c3ea][_0x39eee2(0x477)+_0x39eee2(0x529)])_0x432efd[_0x39eee2(0x7c8)](_0xb0c736);}else return-0x5*0x623+-0x2512+0x5*0xd8d;}}()),'exportKeys':_0x17f8d7},'diff':_0x374cd2[_0x121aaf(0x65d)](0x12f7*0x1+0x1c66+0x19*-0x1e5,0x9*0x21d+0x115a+-0x2437),'speed':{'on':_0x606573['on'],'factor':_0x606573['facto'+'r'],'writes':_0x23b76a,'scaled':_0x2c3b9d[_0x121aaf(0x65d)](-0x1281*0x1+-0x125+0x9d3*0x2,-0x24ae+0xdba+-0xb82*-0x2),'skipped':_0xc4e6d9[_0x121aaf(0x65d)](-0x2581+0x144+0x243d,0x4*0x66+0x2487+-0x1*0x260f)},'esp':_0x18274f(),'view':_0x334dc4(),'fov':_0x536203['fov'],'espView':{'on':_0x40773e['on'],'boxes':_0x40773e[_0x121aaf(0x5b9)],'span':_0x40773e['span']},'local':(function(){var _0x4fa886=_0x121aaf,_0x39cd28=_0x5d019d();if(!_0x39cd28)return null;return{'ptr':_0x2670e0[_0x4fa886(0x86d)]('0x',_0x39cd28['ptr']['toStr'+_0x4fa886(0x3a4)](0x2*-0xc61+-0x18c2+0x3194)),'feet':_0x39cd28[_0x4fa886(0x3c0)],'eye':_0x39cd28[_0x4fa886(0x820)],'pitch':_0x39cd28['pitch'],'yaw':_0x39cd28['yaw'],'reach':_0x39cd28[_0x4fa886(0x2a2)]};}()),'uwmkLog':_0x5493d7['slice'](0x1ce8+-0x658+-0x1690,0x2*0xd73+-0x176f+-0x3*0x121),'warnings':[]};if(_0x1fdceb)_0x4d1ea9[_0x121aaf(0x306)+_0x121aaf(0x53b)][_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x4d8)](_0x121aaf(0x7d7)+'y\x20fai'+_0x121aaf(0x50f),_0x1fdceb));if(_0x383d6e[_0x121aaf(0x3ec)])_0x4d1ea9['warni'+_0x121aaf(0x53b)][_0x121aaf(0x7c8)](_0x121aaf(0x196)+_0x121aaf(0x78b)+_0x121aaf(0x799)+_0x121aaf(0x50f)+_0x383d6e['error']);_0x2670e0['pcyeK'](_0x4d1ea9['surve'+_0x121aaf(0x25e)],-0xc5d+0x86d+-0x3f0*-0x1)&&_0x2670e0[_0x121aaf(0x52a)](Object[_0x121aaf(0x251)](_0x4d1ea9[_0x121aaf(0x724)+_0x121aaf(0x61e)])[_0x121aaf(0x267)+'h'],-0x1c62+-0xd05+0x2967)&&(_0x2670e0[_0x121aaf(0x606)](_0x121aaf(0x74e),_0x121aaf(0x74e))?_0x2670e0[_0x121aaf(0x722)](_0x4393ae,_0x3ea374):_0x4d1ea9[_0x121aaf(0x306)+_0x121aaf(0x53b)]['push'](_0x2670e0['DZONS'](_0x121aaf(0x5dd)+'red\x20'+Object['keys'](_0x4d1ea9[_0x121aaf(0x724)+'nces'])['lengt'+'h'],_0x121aaf(0x2bf)+_0x121aaf(0x514)+_0x121aaf(0x694)+'read\x20'+'0\x20fie'+_0x121aaf(0x556))+(_0x166ac7[_0x121aaf(0x23d)+_0x121aaf(0x72d)]?_0x121aaf(0x37b)+_0x121aaf(0x75f)+_0x166ac7[_0x121aaf(0x23d)+'rror']:'No\x20re'+_0x121aaf(0x3e1)+'iled,'+_0x121aaf(0x747)+'very\x20'+_0x121aaf(0x5e0)+_0x121aaf(0x454)+'\x20skip'+_0x121aaf(0x262)+_0x121aaf(0x2fe)+'e.')));if(_0x4d1ea9[_0x121aaf(0x48a)+'ity']&&_0x2670e0['rEKJR'](_0x4d1ea9['ident'+'ity'][_0x121aaf(0x6aa)+'tches'],![])){if('SgZnN'!=='dmWbK')_0x4d1ea9['warni'+_0x121aaf(0x53b)][_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x1d5)](_0x2670e0[_0x121aaf(0x2a1)](_0x2670e0[_0x121aaf(0x384)],'repla'+_0x121aaf(0x67e)+_0x121aaf(0x409)+'iffer'+'ent\x20i'+'nstan'+_0x121aaf(0x227)+_0x121aaf(0x4e4)+_0x121aaf(0x5cd)+_0x121aaf(0x7db)+'\x20the\x20'+'wrong'+_0x121aaf(0x2bf)+_0x121aaf(0x60a)+'r\x20'),'the\x20g'+'ame\x20w'+_0x121aaf(0x4d1)+_0x121aaf(0x37e)+'ne\x20ho'+'lding'+'\x20it\x20i'+'s\x20orp'+_0x121aaf(0x46f)+_0x121aaf(0x691)+'able\x20'+_0x121aaf(0x639)+_0x121aaf(0x299)+'r\x20')+_0x2670e0[_0x121aaf(0x2c8)]);else{var _0x464673=_0x4ae4d0(_0x121aaf(0x3ab)+'ntrol'+_0x121aaf(0x43f),_0x3d183a[_0x4c3e09[_0x381a31]][_0x121aaf(0x872)]);_0x464673[_0x121aaf(0x7f9)]=_0x15aa0b[_0x21202c[_0x47b857]]['hits'],_0x464673['isLoc'+'al']=_0x5eb02c[_0x5d9cdc[_0x4d0ada]]['ptr']===_0x565447,_0x2e42aa[_0x121aaf(0x41f)+'oller'+'s'][_0x121aaf(0x7c8)](_0x464673);}}_0x4d1ea9[_0x121aaf(0x48a)+_0x121aaf(0x173)]&&_0x2670e0[_0x121aaf(0x40a)](_0x4d1ea9['ident'+_0x121aaf(0x173)][_0x121aaf(0x838)+_0x121aaf(0x240)+_0x121aaf(0x3c3)+'Expor'+_0x121aaf(0x626)],![])&&_0x4d1ea9['warni'+_0x121aaf(0x53b)]['push'](_0x2670e0[_0x121aaf(0x32a)](_0x121aaf(0x838)+'n._ru'+'ntime'+'\x20is\x20n'+_0x121aaf(0x354)+_0x121aaf(0x411)+_0x121aaf(0x330)+_0x121aaf(0x561)+_0x121aaf(0x580)+_0x121aaf(0x7b8)+_0x121aaf(0x860)+'the\x20p'+'lugin'+_0x121aaf(0x2a8)+_0x121aaf(0x581)+'\x20','again'+'st\x20a\x20'+_0x121aaf(0x6fa)+'rent\x20'+'Runti'+_0x121aaf(0x47c)+_0x121aaf(0x38d)+_0x121aaf(0x48b)+_0x121aaf(0x1f4)+_0x121aaf(0x7ab)+_0x121aaf(0x2dd)+_0x121aaf(0x489)+_0x121aaf(0x7a5)));if(_0x4d1ea9['esp']&&_0x4d1ea9['esp'][_0x121aaf(0x407)])_0x4d1ea9[_0x121aaf(0x306)+_0x121aaf(0x53b)][_0x121aaf(0x7c8)](_0x2670e0['flFFq']+_0x4d1ea9['esp']['note']);if(_0x4d1ea9['globa'+'ls']&&!_0x4d1ea9[_0x121aaf(0x67d)+'ls'][_0x121aaf(0x29a)+'8']){var _0xbb9cd7='';_0x4d1ea9[_0x121aaf(0x5a3)+_0x121aaf(0x846)+_0x121aaf(0x193)]&&(_0x121aaf(0x428)===_0x121aaf(0x41a)?_0x2670e0[_0x121aaf(0x4e1)](_0x5092cd):_0xbb9cd7=_0x2670e0['ZAGXa'](_0x2670e0['tzsXC'](_0x2670e0[_0x121aaf(0x36a)](_0x2670e0[_0x121aaf(0x1a1)](_0x2670e0[_0x121aaf(0x42a)](_0x2670e0[_0x121aaf(0x1a1)](_0x2670e0[_0x121aaf(0x58c)],_0x4d1ea9[_0x121aaf(0x5a3)+'irePr'+_0x121aaf(0x193)][_0x121aaf(0x647)]),_0x121aaf(0x787)+_0x121aaf(0x591)+_0x121aaf(0x3f8)+_0x121aaf(0x462)+'='),_0x4d1ea9[_0x121aaf(0x5a3)+_0x121aaf(0x846)+_0x121aaf(0x193)]['origi'+_0x121aaf(0x553)+'nc']),'\x20and\x20'+_0x121aaf(0x1a5)+_0x121aaf(0x6d9)+_0x121aaf(0x3bd))+_0x4d1ea9[_0x121aaf(0x5a3)+_0x121aaf(0x846)+_0x121aaf(0x193)]['resol'+_0x121aaf(0x453)+_0x121aaf(0x4b5)+'re'],_0x2670e0[_0x121aaf(0x585)]),_0x4d1ea9[_0x121aaf(0x5a3)+_0x121aaf(0x846)+_0x121aaf(0x193)][_0x121aaf(0x256)+'ource'+'AtFir'+'e']||_0x121aaf(0x340))+('),\x20so'+'\x20the\x20'+_0x121aaf(0x71b)+'ence\x20'+'exist'+'ed\x20th'+_0x121aaf(0x335)+'d\x20is\x20'+_0x121aaf(0x20d)+'eacha'+_0x121aaf(0x781)+_0x121aaf(0x6c0))),_0x4d1ea9['warni'+_0x121aaf(0x53b)][_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x32a)](_0x2670e0['Wmlem'](_0x121aaf(0x330)+_0x121aaf(0x2ab)+_0x121aaf(0x7e5)+_0x121aaf(0x20d)+_0x121aaf(0x57e)+_0x121aaf(0x654)+_0x121aaf(0x387)+_0x121aaf(0x545)+'\x20'+(_0x4d1ea9['globa'+'ls'][_0x121aaf(0x256)+'ource']||_0x121aaf(0x340)),_0x2670e0[_0x121aaf(0x5ed)])+(_0x121aaf(0x605)+'reads'+_0x121aaf(0x704)+_0x121aaf(0x3d7)+_0x121aaf(0x6f1)+_0x121aaf(0x210)+_0x121aaf(0x32f)+'e\x20obj'+_0x121aaf(0x85b)+'ith\x20M'+'odule'+_0x121aaf(0x7f0)+_0x121aaf(0x80e)+_0x121aaf(0x592)+_0x121aaf(0x379)+'.'),_0xbb9cd7));}(_0x4d1ea9['globa'+'ls']&&!_0x4d1ea9['globa'+'ls'][_0x121aaf(0x1bb)+'Wrapp'+'er']||_0x4d1ea9[_0x121aaf(0x67d)+'ls'][_0x121aaf(0x1bb)+_0x121aaf(0x374)+'er']===_0x2670e0[_0x121aaf(0x753)])&&(_0x121aaf(0x1b5)===_0x2670e0[_0x121aaf(0x7b2)]?_0x4d1ea9[_0x121aaf(0x306)+'ngs'][_0x121aaf(0x7c8)]('windo'+'w.Uni'+_0x121aaf(0x289)+_0x121aaf(0x28e)+_0x121aaf(0x30f)+'ueWra'+_0x121aaf(0x259)+_0x121aaf(0x343)+'ssing'+_0x121aaf(0x323)+'pture'+_0x121aaf(0x75e)+'unnin'+_0x121aaf(0x5bf)+_0x121aaf(0x48e)):_0x1c5175[_0x121aaf(0x484)+'onten'+'t']=_0x108405[_0x121aaf(0x3ff)]&&_0x565084[_0x121aaf(0x3ff)]['lengt'+'h']?_0x2670e0['RJbOk']('Diff\x20'+_0x121aaf(0x359)+'apsho'+_0x121aaf(0x5d7),_0x398fe5[_0x121aaf(0x3ff)]['join'](',\x20')):_0x2670e0[_0x121aaf(0x3cc)]);if(_0x4d1ea9[_0x121aaf(0x4eb)+_0x121aaf(0x4ee)]>-0x4*-0x98+0xfda+-0x123a&&_0x2670e0[_0x121aaf(0x451)](_0x4d1ea9[_0x121aaf(0x4eb)+'Appli'+'ed'],-0x835*0x2+-0x323*0x5+0x2019)&&_0x55c8fa){if(_0x2670e0[_0x121aaf(0x235)](_0x2670e0[_0x121aaf(0x224)],_0x2670e0[_0x121aaf(0x194)]))_0x2670e0['HlOhJ'](_0x4d1ea9[_0x121aaf(0x4eb)+'Resol'+_0x121aaf(0x515)],-0x230c*0x1+0x686+0x1c86)?_0x4d1ea9[_0x121aaf(0x306)+'ngs'][_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x1dd)](_0x2670e0['EZRMp'](_0x2670e0[_0x121aaf(0x5a1)]+_0x4d1ea9['hooks'+_0x121aaf(0x4ee)]+('\x20hook'+_0x121aaf(0x4cf)+'e\x20eve'+'n\x20SEE'+'N\x20by\x20'+'UWMK.'+'\x20The\x20'+'apply'+_0x121aaf(0x4d0)+'\x20')+(_0x121aaf(0x303)+'once\x20'+_0x121aaf(0x717)+'g\x20Web'+_0x121aaf(0x6ca)+_0x121aaf(0x2c1)+_0x121aaf(0x253)+_0x121aaf(0x200)+_0x121aaf(0x1c6)+_0x121aaf(0x7bc)+_0x121aaf(0x292)+_0x121aaf(0x838)+'n.hoo'+_0x121aaf(0x469)+_0x121aaf(0x53e)+'\x20')+(_0x121aaf(0x6c8)+_0x121aaf(0x26f)+_0x121aaf(0x51d)+'ered\x20'+'after'+_0x121aaf(0x2ac)+_0x121aaf(0x84f)+_0x121aaf(0x7ed)+_0x121aaf(0x740)+_0x121aaf(0x2c2)+'ife\x20o'+_0x121aaf(0x598)+_0x121aaf(0x564)+'.\x20'),_0x2670e0[_0x121aaf(0x162)]),_0x4d1ea9['hooks'+_0x121aaf(0x420)+_0x121aaf(0x2e3)+_0x121aaf(0x49a)])+('\x20hook'+'(s)\x20d'+_0x121aaf(0x334)+'\x20armi'+'ng\x20at'+_0x121aaf(0x689)+_0x121aaf(0x2ed)+'start'+'.')):_0x4d1ea9[_0x121aaf(0x306)+'ngs'][_0x121aaf(0x7c8)](_0x2670e0[_0x121aaf(0x60c)](_0x2670e0[_0x121aaf(0x741)](_0x2670e0[_0x121aaf(0x46c)](_0x2670e0[_0x121aaf(0x768)],_0x4d1ea9['hooks'+_0x121aaf(0x742)+'ved']),'\x20of\x20')+_0x4d1ea9[_0x121aaf(0x4eb)+'Total'],_0x2670e0['NkLfb'])+(_0x121aaf(0x1f2)+_0x121aaf(0x751)+'hodIn'+_0x121aaf(0x422)+'->\x20vo'+_0x121aaf(0x4c4)+'es\x20no'+'t\x20mat'+_0x121aaf(0x4fd)+'is\x20bu'+_0x121aaf(0x555)));else{var _0x2e95f5=_0x91765f[_0x121aaf(0x330)+'WebMo'+'dkit']&&_0x3bdafc[_0x121aaf(0x330)+_0x121aaf(0x561)+_0x121aaf(0x817)]['Runti'+'me'];if(!_0x2e95f5||_0x2670e0[_0x121aaf(0x2ea)](typeof _0x2e95f5[_0x121aaf(0x2b6)+_0x121aaf(0x43c)+'in'],'funct'+'ion')){_0x18934e[_0x121aaf(0x3ec)]=_0x121aaf(0x7b8)+_0x121aaf(0x3d0)+'eateP'+_0x121aaf(0x1db)+'\x20unav'+'ailab'+'le';return;}_0x10f00c['attem'+'pted']=!![],_0x157d6d=_0x2e95f5['creat'+_0x121aaf(0x43c)+'in']({'name':'sakur'+'a-ski'+_0x121aaf(0x178)+'z','version':_0x304c62,'referencedAssemblies':_0x4235b7[_0x121aaf(0x65d)]()}),_0x1f90a9['ok']=!![];try{var _0x30f579=_0x467c97['Unity'+'WebMo'+_0x121aaf(0x817)][_0x121aaf(0x7b8)+'me'];_0x30f579[_0x121aaf(0x1b8)+_0x121aaf(0x296)+'g']=_0x215f04+':'+_0x2ff958['rando'+'m']()['toStr'+_0x121aaf(0x3a4)](0x13df+-0x977*0x1+0x3*-0x36c)[_0x121aaf(0x65d)](-0x35*-0xa3+0x109+-0x22c6,0x130a+-0x1a22+0x2*0x391),_0x3f190c=_0x30f579[_0x121aaf(0x1b8)+_0x121aaf(0x296)+'g'];}catch(_0x141647){}_0x2670e0['Jffkz'](_0x5db943),_0x2d386e[_0x121aaf(0x4eb)+'Regis'+_0x121aaf(0x2e3)]=_0x35670e[_0x121aaf(0x267)+'h'],_0x2f9e2f(),_0x33e1f6[_0x121aaf(0x1d7)+_0x121aaf(0x68a)]=!![];}}return _0x4d1ea9[_0x121aaf(0x4eb)+'Appli'+'ed']>0x168e*-0x1+0x1*0x184d+-0x1bf&&!_0x4d1ea9[_0x121aaf(0x724)+_0x121aaf(0x61e)]['FPSco'+_0x121aaf(0x279)+_0x121aaf(0x43f)]&&_0x4d1ea9['warni'+_0x121aaf(0x53b)]['push'](_0x2670e0[_0x121aaf(0x4d6)]+_0x2670e0[_0x121aaf(0x6eb)]),_0x4d1ea9['insta'+_0x121aaf(0x1e6)+'eplac'+'ed'][_0x121aaf(0x267)+'h']&&_0x4d1ea9['warni'+'ngs'][_0x121aaf(0x7c8)](_0x121aaf(0x62e)+_0x121aaf(0x6d2)+_0x121aaf(0x692)+_0x121aaf(0x6d6)+'captu'+'re\x20(r'+_0x121aaf(0x805)+_0x121aaf(0x851)+_0x4d1ea9[_0x121aaf(0x724)+_0x121aaf(0x1e6)+_0x121aaf(0x404)+'ed']['join'](',\x20')),_0x4d1ea9;}function _0x498aa2(_0x4c7607){var _0x98a069=_0x3e5c02;console['log'](_0x2670e0['YlzoX'],_0x2670e0['DZONS'](_0x2670e0[_0x98a069(0x3f9)],_0xe12a9f)+(_0x98a069(0x600)+_0x98a069(0x73e)+_0x98a069(0x55f)+'0'),_0x4c7607),console[_0x98a069(0x29b)](_0x5e1328+'\x0a'+JSON[_0x98a069(0x867)+_0x98a069(0x7ce)](_0x4c7607,null,-0x284+-0x828+0xaad)+'\x0a'+_0xab8847);try{_0x512c97(_0x4c7607);}catch(_0xcaa8){}_0x134791(_0x2670e0[_0x98a069(0x80f)],{'report':_0x4c7607});}function _0x4cc733(){var _0x21da13=_0x3e5c02,_0x375a17={'PyuGY':function(_0x4e7762,_0x12560a){return _0x2670e0['ValON'](_0x4e7762,_0x12560a);},'ChmJY':_0x21da13(0x745)};try{if(_0x21da13(0x39d)!==_0x21da13(0x1ff))return _0x2852ba();else{var _0x3c252d=_0x6f9d73[_0x3ef70a];_0x2433be['push'](_0x375a17[_0x21da13(0x5be)](_0x375a17['PyuGY'](_0x3c252d,_0x375a17[_0x21da13(0x315)]),_0x37bb14[_0x3c252d]));}}catch(_0x17b774){return _0x2670e0['hsDyr']('YnvQE',_0x21da13(0x4c5))?{'version':_0x56a163,'when':new Date()[_0x21da13(0x468)+'Strin'+'g'](),'elapsedMs':Date['now']()-_0x448406,'host':_0x3feca0,'uwmk':!!(window[_0x21da13(0x330)+'WebMo'+'dkit']&&window[_0x21da13(0x330)+_0x21da13(0x561)+'dkit'][_0x21da13(0x7b8)+'me']),'il2CppContext':![],'arm':_0x383d6e,'hooksTotal':_0x1c14e7['lengt'+'h'],'hooksApplied':0x0,'instances':{},'survey':{},'collectError':String(_0x17b774&&_0x17b774['messa'+'ge']||_0x17b774)}:null;}}function _0x2c2adf(){var _0x49386d=_0x3e5c02;if(_0x2670e0[_0x49386d(0x807)]('QbPCa',_0x2670e0[_0x49386d(0x370)])){var _0x2edbd9=-0x1f27+-0x2657+0x457e;try{_0x2670e0[_0x49386d(0x346)](_0x4dfc87);}catch(_0x3cc19d){}_0x498aa2(_0x4cc733()),function _0x181bde(){var _0x456757=_0x49386d;if(!_0x1c14e7['lengt'+'h'])try{_0x2670e0['BanRD']==='gYcoB'?(_0x48f1f9++,_0x3714fc[_0x456757(0x4ec)]=!![]):_0x4130d6();}catch(_0x4b51be){}_0x2edbd9++,_0x498aa2(_0x4cc733());if(!_0x1c14e7[_0x456757(0x267)+'h']&&_0x2edbd9<-0x4*0x621+-0x43c+0x1dec)_0x2670e0['InYhY'](setTimeout,_0x181bde,0x22*-0xd+-0xa*-0xf2+0x16);else{if(!Object[_0x456757(0x251)](_0x40b563)[_0x456757(0x267)+'h']&&_0x2edbd9<0x52*0x76+-0xc3f+0x4f*-0x4f)setTimeout(_0x181bde,0xc1*-0x20+-0x91f+0x17*0x1c9);else _0x2670e0['LzKDl'](setTimeout,_0x181bde,0x202+-0xb90+0xe3e);}}();}else{if(!_0x5bf895)return;var _0xf3620c=_0x44918c[_0x49386d(0x82d)]['displ'+'ay']===_0x49386d(0x340);_0x1fc312['style']['displ'+'ay']=_0xf3620c?'':_0x49386d(0x340),_0x2457f7('fold')['textC'+_0x49386d(0x64b)+'t']=_0xf3620c?'-':'+';}}if(document[_0x3e5c02(0x82e)])_0x2c2adf();else document['addEv'+_0x3e5c02(0x7d3)+'stene'+'r']('DOMCo'+'ntent'+_0x3e5c02(0x675)+'d',_0x2c2adf,{'once':!![]});if(document['body'])try{if(_0x2670e0['fZtcW']('zsanO',_0x2670e0[_0x3e5c02(0x432)]))_0x2670e0[_0x3e5c02(0x3c5)](_0x230fd1);else{_0x230898[_0x3e5c02(0x3ec)]='Runti'+_0x3e5c02(0x3d0)+_0x3e5c02(0x656)+_0x3e5c02(0x1db)+'\x20unav'+'ailab'+'le';return;}}catch(_0x2479f1){}else document[_0x3e5c02(0x72a)+'entLi'+_0x3e5c02(0x1a3)+'r'](_0x3e5c02(0x336)+'ntent'+_0x3e5c02(0x675)+'d',function(){var _0x4d63f2=_0x3e5c02;try{_0x2670e0[_0x4d63f2(0x22a)](_0x230fd1);}catch(_0x4a6699){}},{'once':!![]});})()));
